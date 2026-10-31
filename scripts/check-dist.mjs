import fs from 'node:fs';import path from 'node:path';
const root=path.resolve('dist');const failures=[];const files=[];
function walk(dir){for(const entry of fs.readdirSync(dir,{withFileTypes:true})){const p=path.join(dir,entry.name);if(entry.isDirectory())walk(p);else files.push(p);}}walk(root);
for(const file of files)if(path.basename(file).startsWith('__qa'))failures.push('QA harness present in release output: '+file);
const htmlFiles=files.filter(p=>p.endsWith('.html'));const titles=new Set();let links=0;let schemas=0;
const fail=(file,msg)=>failures.push(path.relative(root,file)+': '+msg);
for(const file of htmlFiles){
 const html=fs.readFileSync(file,'utf8');const is404=file.endsWith('/404.html');
 const lang=(html.match(/<html[^>]+lang="([^"]+)"/)||[])[1];if(!['en-CA','fr-CA'].includes(lang))fail(file,'Missing language');
 const title=(html.match(/<title>(.*?)<\/title>/s)||[])[1];if(!title||titles.has(title))fail(file,'Missing or duplicate title');titles.add(title);
 if((html.match(/<h1(?:\s|>)/g)||[]).length!==1)fail(file,'Expected exactly one H1');
 for(const name of ['description','robots'])if(!new RegExp(`<meta[^>]+name="${name}"[^>]+content="[^"]+"`).test(html))fail(file,'Missing '+name);
 if(!is404)for(const name of ['en-CA','fr-CA','x-default'])if(!html.includes(`hreflang="${name}"`))fail(file,'Missing hreflang '+name);
 const canonical=(html.match(/rel="canonical" href="([^"]+)"/)||[])[1];
 if(!canonical||!canonical.startsWith('https://diversity.ca/'))fail(file,'Missing or incorrect canonical');
 if(!is404){
   const alternates=[...html.matchAll(/rel="alternate" hreflang="(en-CA|fr-CA)" href="([^"]+)"/g)];
   for(const alternate of alternates){const alternatePath=path.join(root,new URL(alternate[2]).pathname,'index.html');if(!fs.existsSync(alternatePath))fail(file,'Missing language counterpart');else {const other=fs.readFileSync(alternatePath,'utf8');if(!other.includes(`href="${canonical}"`))fail(file,'Language alternates not reciprocal');}}
   if((lang==='fr-CA')!==canonical.includes('/fr/'))fail(file,'Page language and canonical disagree');
 }
 if(/<img(?![^>]*\balt=)[^>]*>/g.test(html))fail(file,'Image without alt');
 if(!html.includes('class="skip-link"'))fail(file,'No skip link');
 for(const json of html.matchAll(/<script type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)){try{JSON.parse(json[1]);schemas++;}catch{fail(file,'Invalid JSON-LD');}}
 for(const match of html.matchAll(/(?:href|src)="(\/[^"\s]*)"/g)){const raw=match[1].replaceAll('&amp;','&');if(raw.startsWith('//'))continue;const pathname=new URL(raw,'https://diversity.ca').pathname;const target=path.join(root,decodeURIComponent(pathname));const exists=fs.existsSync(target)&&(fs.statSync(target).isFile()||fs.existsSync(path.join(target,'index.html')));if(!exists)fail(file,'Broken local URL '+pathname);links++;}
 for(const match of html.matchAll(/<a[^>]+href="#[^"]*"/g))if(!match[0].includes('href="#main"'))fail(file,'Unexpected empty fragment link');
 if(/Lorem ipsum|TODO|YOUR_FORM_ID|codex-preview/i.test(html))fail(file,'Placeholder content');
 if(Buffer.byteLength(html)>160000)fail(file,'HTML exceeds 160 KB budget');
}
const js=files.filter(p=>p.endsWith('.js'));const jsBytes=js.reduce((n,p)=>n+fs.statSync(p).size,0);if(jsBytes>80000)fail(root,'JavaScript exceeds 80 KB budget');
const css=files.filter(p=>p.endsWith('.css'));const cssBytes=css.reduce((n,p)=>n+fs.statSync(p).size,0);if(cssBytes>70000)fail(root,'CSS exceeds 70 KB budget');
const images=files.filter(p=>/\.webp$/.test(p));for(const image of images)if(fs.statSync(image).size>350000)fail(image,'Image exceeds 350 KB budget');
const sitemap=fs.readFileSync(path.join(root,'sitemap.xml'),'utf8');const sitemapUrls=[...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map(m=>m[1]);if(new Set(sitemapUrls).size!==sitemapUrls.length)fail(root,'Duplicate sitemap URLs');
for(const url of sitemapUrls){const p=path.join(root,new URL(url).pathname,'index.html');if(!fs.existsSync(p))fail(root,'Sitemap route missing '+url);}
const report={htmlPages:htmlFiles.length,internalLinksAndAssetsChecked:links,jsonLdBlocks:schemas,sitemapUrls:sitemapUrls.length,javascriptBytes:jsBytes,cssBytes,imageCount:images.length,failures};
fs.mkdirSync('qa-artifacts',{recursive:true});fs.writeFileSync('qa-artifacts/static-checks.json',JSON.stringify(report,null,2));console.log(JSON.stringify(report,null,2));if(failures.length)process.exit(1);
