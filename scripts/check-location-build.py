"""Audit generated local pages, metadata, structured data and all internal links."""
import json
from collections import Counter
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import urljoin, urlsplit, unquote
from xml.etree import ElementTree

ROOT = Path('dist')
ORIGIN = 'https://diversity.ca'
class Page(HTMLParser):
    def __init__(self, text):
        super().__init__(convert_charrefs=True)
        self.links=[]; self.assets=[]; self.ids=set(); self.meta={}; self.canonical=[]; self.alternates={}
        self.h1=0; self.title=''; self.graphs=[]; self.script=False; self.title_open=False; self.buffer=''
        self.feed(text)
    def handle_starttag(self, tag, attrs):
        a=dict(attrs)
        if 'id' in a: self.ids.add(a['id'])
        if tag=='a' and a.get('href'): self.links.append(a['href'])
        if tag=='h1': self.h1+=1
        if tag=='title': self.title_open=True
        if tag=='meta': self.meta[a.get('name',a.get('property',''))]=a.get('content','')
        if tag=='link' and a.get('rel')=='canonical': self.canonical.append(a.get('href'))
        if tag=='link' and a.get('rel')=='alternate': self.alternates[a.get('hreflang')]=a.get('href')
        if tag in ('img','script') and a.get('src'): self.assets.append(a['src'])
        if tag=='link' and a.get('rel')=='stylesheet': self.assets.append(a.get('href',''))
        if tag=='script' and a.get('type')=='application/ld+json': self.script=True;self.buffer=''
    def handle_data(self, data):
        if self.script:self.buffer+=data
        if self.title_open:self.title+=data
    def handle_endtag(self,tag):
        if tag=='script' and self.script:self.graphs.append(json.loads(self.buffer));self.script=False
        if tag=='title':self.title_open=False

pages={}
for file in ROOT.rglob('*.html'):
    route='/'+str(file.relative_to(ROOT)).removesuffix('index.html')
    pages[route]=Page(file.read_text())
bilingual={route:page for route,page in pages.items() if route.startswith(('/en/','/fr/'))}
assert len(bilingual)==252, len(bilingual)
city_profiles=json.loads(Path('src/data/city-profiles.json').read_text())
assert len(city_profiles)==52
assert len({city['slug'] for city in city_profiles})==52
assert len({city['province'] for city in city_profiles})==13
for locale in ('en','fr'):
    for field in ('context','planning'):
        assert len({city[field][locale] for city in city_profiles})==52
    for city in city_profiles:
        assert len(city['examples'])==3
        assert city['source']['url'].startswith('https://')
        assert len(city['context'][locale].split())>=25
        assert len(city['planning'][locale].split())>=25

for route,page in bilingual.items():
    assert page.h1==1,(route,'h1',page.h1)
    assert page.canonical==[ORIGIN+route],(route,page.canonical)
    assert page.meta.get('description'),route
    assert 'noindex' not in page.meta.get('robots',''),route
    suffix=route[4:]
    assert page.alternates.get('en-CA')==ORIGIN+'/en/'+suffix,route
    assert page.alternates.get('fr-CA')==ORIGIN+'/fr/'+suffix,route
    assert page.alternates.get('x-default')==ORIGIN+'/en/'+suffix,route
    graphs=[item['@graph'] for item in page.graphs if '@graph' in item]
    assert len(graphs)==1,route
    graph=graphs[0]
    assert any(node['@type']=='WebPage' for node in graph),route
    if '/canada/' in route and route not in ('/en/canada/','/fr/canada/'):
        assert len([node for node in graph if node['@type']=='Service'])==7,route
        assert any(node['@type']=='BreadcrumbList' for node in graph),route
        assert not any(node.get('@type')=='LocalBusiness' for node in graph),route
        for key in ('dei','accessibility','people-culture','training','supplier-diversity','social-impact','implementation'):
            assert key in page.ids,(route,key)

for key in ('title','description'):
    values=[p.title if key=='title' else p.meta['description'] for p in bilingual.values()]
    duplicates=[v for v,count in Counter(values).items() if count>1]
    assert not duplicates,(key,duplicates)

link_count=0
for route,page in bilingual.items():
    for href in page.links+page.assets:
        url=urlsplit(urljoin(ORIGIN+route,href))
        if url.scheme not in ('http','https') or url.netloc!='diversity.ca':continue
        target=unquote(url.path);link_count+=1
        if target in pages:
            if url.fragment:assert unquote(url.fragment) in pages[target].ids,(route,href,'fragment')
        else:
            file=ROOT/target.lstrip('/')
            assert file.is_file(),(route,href,'missing')

tree=ElementTree.parse(ROOT/'sitemap.xml');ns={'s':'http://www.sitemaps.org/schemas/sitemap/0.9'}
urls=[node.text for node in tree.findall('s:url/s:loc',ns)]
assert len(urls)==252 and len(set(urls))==252
assert set(urls)=={ORIGIN+route for route in bilingual}
assert (ROOT/'BingSiteAuth.xml').stat().st_size==85
assert not any('_location-qa' in str(file) for file in ROOT.rglob('*'))
print(json.dumps({'bilingual_pages':len(bilingual),'city_guides':52,'province_territory_guides':13,'new_localized_pages':130,'sitemap_urls':len(urls),'internal_links_and_assets_checked':link_count,'result':'passed'},indent=2))
