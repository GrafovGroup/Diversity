"""Rebuild exact, font-independent vector brand assets from the licensed Inter font.
Requires fonttools, brotli, Pillow. Not required for normal site builds.
"""
from pathlib import Path
from fontTools.ttLib import TTFont
from fontTools.varLib.instancer import instantiateVariableFont
from fontTools.pens.svgPathPen import SVGPathPen
from PIL import Image, ImageDraw, ImageFont
import tempfile

root = Path(__file__).resolve().parents[1]
font = instantiateVariableFont(TTFont(root / 'public/fonts/inter-variable.woff2'), {'wght': 760, 'opsz': 32}, inplace=False)
glyphs = font.getGlyphSet()
cmap = font.getBestCmap()
upem = font['head'].unitsPerEm
def outlined(text, size, tracking=-.055):
    scale = size / upem
    x = 0
    paths = []
    for char in text:
        name = cmap[ord(char)]
        pen = SVGPathPen(glyphs)
        glyphs[name].draw(pen)
        paths.append(f'<path transform="translate({x:.3f},0) scale({scale:.6f},-{scale:.6f})" d="{pen.getCommands()}"/>')
        x += glyphs[name].width * scale + size * tracking
    return ''.join(paths), x - size * tracking

paths, width = outlined('Diversity.ca', 100)
gradients = {'light':[('#0A2D6B','0%'),('#1967F3','38%'),('#A855F7','68%'),('#EC4899','100%')], 'dark':[('#F5F8FF','0%'),('#55A6FF','38%'),('#A855F7','68%'),('#EC4899','100%')]}
for variant, stops in gradients.items():
    gradient=''.join(f'<stop offset="{offset}" stop-color="{colour}"/>' for colour,offset in stops)
    svg=f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {width:.2f} 112" role="img" aria-labelledby="title"><title id="title">Diversity.ca</title><defs><linearGradient id="g">{gradient}</linearGradient></defs><g fill="url(#g)" transform="translate(0,84)">{paths}</g></svg>'
    (root/f'public/brand/wordmark-{variant}.svg').write_text(svg)
dpath,dwidth=outlined('D',42,0)
(root/'public/brand/favicon.svg').write_text(f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><title>Diversity.ca</title><defs><linearGradient id="g"><stop stop-color="#55A6FF"/><stop offset=".6" stop-color="#A855F7"/><stop offset="1" stop-color="#EC4899"/></linearGradient></defs><rect width="64" height="64" rx="12" fill="#0A244C"/><g fill="url(#g)" transform="translate({(64-dwidth)/2:.2f},47)">{dpath}</g></svg>')
with tempfile.TemporaryDirectory() as temporary:
    ttf=Path(temporary)/'Inter.ttf';font.flavor=None;font.save(ttf)
    face=ImageFont.truetype(str(ttf),107);small=ImageFont.truetype(str(ttf),23);heading=ImageFont.truetype(str(ttf),38)
    for lang, descriptor, subtitle in [('en','PEOPLE  |  OPPORTUNITY  |  PROGRESS','Canadian consulting & implementation'),('fr','GENS  |  OPPORTUNITÉS  |  PROGRÈS','Conseil et mise en œuvre au Canada')]:
        img=Image.new('RGB',(1200,630),'#F6F8FC');draw=ImageDraw.Draw(img)
        draw.rectangle((0,0,1200,17),fill='#0A244C')
        mask=Image.new('L',img.size);md=ImageDraw.Draw(mask);md.text((80,155),'Diversity.ca',font=face,fill=255,stroke_width=0)
        gradient=Image.new('RGB',img.size);gd=ImageDraw.Draw(gradient)
        colors=[(10,45,107),(25,103,243),(168,85,247),(236,72,153)]
        for x in range(1200):
            p=max(0,min(2.999,(x-80)/650*3));i=int(p);f=p-i;c=tuple(round(colors[i][j]*(1-f)+colors[i+1][j]*f) for j in range(3));gd.line((x,0,x,630),fill=c)
        img.paste(gradient,(0,0),mask)
        draw.text((85,305),descriptor,font=small,fill='#0A244C')
        draw.line((85,355,1115,355),fill='#D8DDE8',width=2)
        draw.text((85,400),subtitle,font=heading,fill='#0A244C')
        draw.text((85,535),'diversity.ca',font=small,fill='#526176')
        img.save(root/f'public/brand/social-{lang}.png',optimize=True)
print('Generated outlined SVG wordmarks, favicon and EN/FR social images.')
