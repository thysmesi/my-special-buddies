function C(){}const et=t=>t;function P(t,e){for(const n in e)t[n]=e[n];return t}function B(t){return t()}function nt(){return Object.create(null)}function H(t){t.forEach(B)}function M(t){return typeof t=="function"}function rt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let m;function k(t,e){return t===e?!0:(m||(m=document.createElement("a")),m.href=e,t===m.href)}function N(t){return t.split(",").map(e=>e.trim().split(" ").filter(Boolean))}function ct(t,e){const n=N(t.srcset),r=N(e||"");return r.length===n.length&&r.every(([c,l],i)=>l===n[i][1]&&(k(n[i][0],c)||k(c,n[i][0])))}function it(t){return Object.keys(t).length===0}function R(t,...e){if(t==null){for(const r of e)r(void 0);return C}const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function st(t,e,n){t.$$.on_destroy.push(R(e,n))}function lt(t,e,n,r){if(t){const c=j(t,e,n,r);return t[0](c)}}function j(t,e,n,r){return t[1]&&r?P(n.ctx.slice(),t[1](r(e))):n.ctx}function ot(t,e,n,r){if(t[2]&&r){const c=t[2](r(n));if(e.dirty===void 0)return c;if(typeof c=="object"){const l=[],i=Math.max(e.dirty.length,c.length);for(let o=0;o<i;o+=1)l[o]=e.dirty[o]|c[o];return l}return e.dirty|c}return e.dirty}function ut(t,e,n,r,c,l){if(c){const i=j(e,n,r,l);t.p(i,c)}}function at(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let r=0;r<n;r++)e[r]=-1;return e}return-1}function ft(t){const e={};for(const n in t)n[0]!=="$"&&(e[n]=t[n]);return e}function _t(t,e){const n={};e=new Set(e);for(const r in t)!e.has(r)&&r[0]!=="$"&&(n[r]=t[r]);return n}function dt(t){const e={};for(const n in t)e[n]=!0;return e}function ht(t){return t??""}function mt(t,e,n){return t.set(n),e}function pt(t){return t&&M(t.destroy)?t.destroy:C}function yt(t){const e=typeof t=="string"&&t.match(/^\s*(-?[\d.]+)([^\s]*)\s*$/);return e?[parseFloat(e[1]),e[2]||"px"]:[t,"px"]}let y=!1;function bt(){y=!0}function gt(){y=!1}function F(t,e,n,r){for(;t<e;){const c=t+(e-t>>1);n(c)<=r?t=c+1:e=c}return t}function L(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const s=[];for(let u=0;u<e.length;u++){const a=e[u];a.claim_order!==void 0&&s.push(a)}e=s}const n=new Int32Array(e.length+1),r=new Int32Array(e.length);n[0]=-1;let c=0;for(let s=0;s<e.length;s++){const u=e[s].claim_order,a=(c>0&&e[n[c]].claim_order<=u?c+1:F(1,c,q=>e[n[q]].claim_order,u))-1;r[s]=n[a]+1;const E=a+1;n[E]=s,c=Math.max(E,c)}const l=[],i=[];let o=e.length-1;for(let s=n[c]+1;s!=0;s=r[s-1]){for(l.push(e[s-1]);o>=s;o--)i.push(e[o]);o--}for(;o>=0;o--)i.push(e[o]);l.reverse(),i.sort((s,u)=>s.claim_order-u.claim_order);for(let s=0,u=0;s<i.length;s++){for(;u<l.length&&i[s].claim_order>=l[u].claim_order;)u++;const a=u<l.length?l[u]:null;t.insertBefore(i[s],a)}}function z(t,e){t.appendChild(e)}function I(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function xt(t){const e=D("style");return e.textContent="/* empty */",U(I(t),e),e.sheet}function U(t,e){return z(t.head||t,e),e.sheet}function W(t,e){if(y){for(L(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function vt(t,e,n){y&&!n?W(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function wt(t){t.parentNode&&t.parentNode.removeChild(t)}function Et(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function D(t){return document.createElement(t)}function G(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function w(t){return document.createTextNode(t)}function kt(){return w(" ")}function Nt(){return w("")}function At(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function J(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}const K=["width","height"];function Ct(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const r in e)e[r]==null?t.removeAttribute(r):r==="style"?t.style.cssText=e[r]:r==="__value"?t.value=t[r]=e[r]:n[r]&&n[r].set&&K.indexOf(r)===-1?t[r]=e[r]:J(t,r,e[r])}function jt(t){return t.dataset.svelteH}function Dt(t){return Array.from(t.childNodes)}function Q(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function S(t,e,n,r,c=!1){Q(t);const l=(()=>{for(let i=t.claim_info.last_index;i<t.length;i++){const o=t[i];if(e(o)){const s=n(o);return s===void 0?t.splice(i,1):t[i]=s,c||(t.claim_info.last_index=i),o}}for(let i=t.claim_info.last_index-1;i>=0;i--){const o=t[i];if(e(o)){const s=n(o);return s===void 0?t.splice(i,1):t[i]=s,c?s===void 0&&t.claim_info.last_index--:t.claim_info.last_index=i,o}}return r()})();return l.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,l}function T(t,e,n,r){return S(t,c=>c.nodeName===e,c=>{const l=[];for(let i=0;i<c.attributes.length;i++){const o=c.attributes[i];n[o.name]||l.push(o.name)}l.forEach(i=>c.removeAttribute(i))},()=>r(e))}function St(t,e,n){return T(t,e,n,D)}function Tt(t,e,n){return T(t,e,n,G)}function V(t,e){return S(t,n=>n.nodeType===3,n=>{const r=""+e;if(n.data.startsWith(r)){if(n.data.length!==r.length)return n.splitText(r.length)}else n.data=r},()=>w(e),!0)}function Ot(t){return V(t," ")}function qt(t,e){e=""+e,t.data!==e&&(t.data=e)}function Pt(t,e){t.value=e??""}function Bt(t,e,n,r){n==null?t.style.removeProperty(e):t.style.setProperty(e,n,r?"important":"")}function X(t,e,{bubbles:n=!1,cancelable:r=!1}={}){return new CustomEvent(t,{detail:e,bubbles:n,cancelable:r})}function Ht(t,e){const n=[];let r=0;for(const c of e.childNodes)if(c.nodeType===8){const l=c.textContent.trim();l===`HEAD_${t}_END`?(r-=1,n.push(c)):l===`HEAD_${t}_START`&&(r+=1,n.push(c))}else r>0&&n.push(c);return n}function Mt(t,e){return new t(e)}let p;function b(t){p=t}function h(){if(!p)throw new Error("Function called outside component initialization");return p}function Rt(t){h().$$.on_mount.push(t)}function Ft(t){h().$$.after_update.push(t)}function Lt(){const t=h();return(e,n,{cancelable:r=!1}={})=>{const c=t.$$.callbacks[e];if(c){const l=X(e,n,{cancelable:r});return c.slice().forEach(i=>{i.call(t,l)}),!l.defaultPrevented}return!0}}function zt(t,e){return h().$$.context.set(t,e),e}function It(t){return h().$$.context.get(t)}function Ut(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(r=>r.call(this,e))}const d=[],A=[];let _=[];const x=[],O=Promise.resolve();let v=!1;function Y(){v||(v=!0,O.then($))}function Wt(){return Y(),O}function Z(t){_.push(t)}function Gt(t){x.push(t)}const g=new Set;let f=0;function $(){if(f!==0)return;const t=p;do{try{for(;f<d.length;){const e=d[f];f++,b(e),tt(e.$$)}}catch(e){throw d.length=0,f=0,e}for(b(null),d.length=0,f=0;A.length;)A.pop()();for(let e=0;e<_.length;e+=1){const n=_[e];g.has(n)||(g.add(n),n())}_.length=0}while(d.length);for(;x.length;)x.pop()();v=!1,g.clear(),b(t)}function tt(t){if(t.fragment!==null){t.update(),H(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(Z)}}function Jt(t){const e=[],n=[];_.forEach(r=>t.indexOf(r)===-1?e.push(r):n.push(r)),n.forEach(r=>r()),_=e}export{Y as $,ut as A,at as B,ot as C,Nt as D,et as E,yt as F,ht as G,Lt as H,P as I,ft as J,Ft as K,Bt as L,Mt as M,Wt as N,I as O,xt as P,M as Q,Z as R,X as S,nt as T,$ as U,it as V,Jt as W,p as X,b as Y,B as Z,d as _,kt as a,bt as a0,gt as a1,dt as a2,Ut as a3,G as a4,Tt as a5,It as a6,Et as a7,mt as a8,_t as a9,Ct as aa,pt as ab,zt as ac,Dt as b,St as c,V as d,D as e,wt as f,Ot as g,W as h,vt as i,qt as j,st as k,Ht as l,jt as m,C as n,Rt as o,J as p,A as q,Pt as r,rt as s,w as t,At as u,Gt as v,H as w,k as x,ct as y,lt as z};