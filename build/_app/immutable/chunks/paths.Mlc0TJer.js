import{n as c,s as p}from"./scheduler.tkSxJcZ5.js";const e=[];function d(o,a=c){let n;const i=new Set;function r(t){if(p(o,t)&&(o=t,n)){const b=!e.length;for(const s of i)s[1](),e.push(s,o);if(b){for(let s=0;s<e.length;s+=2)e[s][0](e[s+1]);e.length=0}}}function l(t){r(t(o))}function _(t,b=c){const s=[t,b];return i.add(s),i.size===1&&(n=a(r,l)||c),t(o),()=>{i.delete(s),i.size===0&&n&&(n(),n=null)}}return{set:r,update:l,subscribe:_}}var f;const h=((f=globalThis.__sveltekit_7lop3l)==null?void 0:f.base)??"";var u;const q=((u=globalThis.__sveltekit_7lop3l)==null?void 0:u.assets)??h;export{q as a,h as b,d as w};