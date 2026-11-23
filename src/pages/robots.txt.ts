import type { APIRoute } from 'astro';
export const GET:APIRoute=()=>new Response(import.meta.env.PUBLIC_RELEASE_APPROVED==='true'?'User-agent: *\nAllow: /\nSitemap: https://diversity.ca/sitemap.xml\n':'User-agent: *\nDisallow: /\n',{headers:{'Content-Type':'text/plain'}});
