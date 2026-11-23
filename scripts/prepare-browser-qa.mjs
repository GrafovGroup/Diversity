import fs from 'node:fs';import path from 'node:path';
const pages=[];function walk(dir){for(const e of fs.readdirSync(dir,{withFileTypes:true})){const p=path.join(dir,e.name);if(e.isDirectory())walk(p);else if(p.endsWith('index.html'))pages.push('/'+path.relative('dist',p).replace(/index\.html$/,''));}}walk('dist');
fs.copyFileSync('node_modules/axe-core/axe.min.js','public/__qa-axe.js');
fs.writeFileSync('public/__qa.html',`<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width"><meta name="robots" content="noindex,nofollow"><title>Diversity.ca browser QA</title><style>body{font:15px system-ui;margin:20px;background:#e8ecf2;color:#102b51}button,select{font:inherit;padding:10px;margin:5px}iframe{display:block;margin:20px 0;background:white;border:1px solid #aaa;height:920px;max-width:none}pre{white-space:pre-wrap;font-size:12px;max-width:1000px}label{display:inline-block;margin:5px}</style></head><body><h1>Diversity.ca internal browser QA</h1><p>This local harness is excluded from release builds. No enquiries are submitted.</p><button id="audit">RUN ACCESSIBILITY & REFLOW CHECKS</button><label>Preview route <select id="route">${pages.map(p=>`<option>${p}</option>`).join('')}</select></label><label>Width <select id="width"><option>1440</option><option>768</option><option selected>390</option><option>320</option></select></label><button id="show">SHOW PAGE</button><p id="status" role="status">Ready</p><pre id="results"></pre><iframe id="frame" title="Diversity.ca responsive preview" width="390" src="/"></iframe><script src="/__qa-runner.js"></script></body></html>`);
fs.writeFileSync('public/__qa-runner.js',`const allRoutes=${JSON.stringify(pages)};const only=new URLSearchParams(location.search).get('only');const routes=only?allRoutes.filter(route=>only.split(',').includes(route)):allRoutes;
const frame=document.getElementById('frame'),status=document.getElementById('status'),results=document.getElementById('results');
const load=(route,width)=>new Promise((resolve,reject)=>{frame.style.width=width+'px';frame.width=width;frame.onload=async()=>{try{await frame.contentDocument.fonts.ready;await Promise.all([...frame.contentDocument.images].filter(i=>i.loading!=='lazy').map(i=>i.complete?Promise.resolve():new Promise(r=>{i.onload=r;i.onerror=r})));resolve()}catch(e){reject(e)}};frame.src=route;});
document.getElementById('show').onclick=async()=>{await load(document.getElementById('route').value,Number(document.getElementById('width').value));status.textContent='Preview ready';};
document.getElementById('audit').onclick=async()=>{
 const report={routes:routes.length,axeChecks:0,reflowChecks:0,violations:[],overflow:[],errors:[],incomplete:[]};
 for(let i=0;i<routes.length;i++){
  const route=routes[i];status.textContent='Checking '+(i+1)+' / '+routes.length+' '+route;
  try{await load(route,1440);await new Promise((resolve,reject)=>{const script=frame.contentDocument.createElement('script');script.src='/__qa-axe.js';script.onload=resolve;script.onerror=reject;frame.contentDocument.head.append(script);});
  const result=await frame.contentWindow.axe.run(frame.contentDocument,{runOnly:{type:'tag',values:['wcag2a','wcag2aa','wcag21a','wcag21aa','wcag22aa','best-practice']}});
  report.axeChecks++;for(const v of result.violations)report.violations.push({route,id:v.id,impact:v.impact,nodes:v.nodes.map(n=>({html:n.html,target:n.target,summary:n.failureSummary}))});
  for(const v of result.incomplete)report.incomplete.push({route,id:v.id,count:v.nodes.length});
  for(const width of [1440,768,390,320]){frame.style.width=width+'px';frame.width=width;await new Promise(r=>requestAnimationFrame(()=>requestAnimationFrame(r)));const doc=frame.contentDocument;report.reflowChecks++;if(doc.documentElement.scrollWidth>width+1){report.overflow.push({route,width,scrollWidth:doc.documentElement.scrollWidth,elements:[...doc.querySelectorAll('body *')].filter(e=>{const b=e.getBoundingClientRect();return b.width>0&&(b.right>width+1||b.left< -1)}).slice(0,8).map(e=>({tag:e.tagName,class:e.className,text:e.textContent.slice(0,70)}))});}}
  }catch(e){report.errors.push({route,error:String(e)})}
  results.textContent=JSON.stringify(report,null,2);
 }
 status.textContent='COMPLETE: '+report.axeChecks+' accessibility checks; '+report.reflowChecks+' reflow checks; '+report.violations.length+' violations; '+report.overflow.length+' overflows.';
};`);
console.log(`Prepared local QA harness for ${pages.length} routes at /__qa.html. Remove public/__qa* before release.`);
