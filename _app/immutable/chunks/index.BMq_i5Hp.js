import{E as x,F as f}from"./scheduler.CoY4fvlX.js";function h(t){const r=t-1;return r*r*r+1}function v(t){return t/=.5,t<1?.5*t*t:(t--,-.5*(t*(t-2)-1))}function F(t,{delay:r=0,duration:p=400,easing:c=x}={}){const s=+getComputedStyle(t).opacity;return{delay:r,duration:p,easing:c,css:o=>`opacity: ${o*s}`}}function w(t,{delay:r=0,duration:p=400,easing:c=h,x:s=0,y:o=0,opacity:l=0}={}){const i=getComputedStyle(t),d=+i.opacity,n=i.transform==="none"?"":i.transform,e=d*(1-l),[u,y]=f(s),[_,m]=f(o);return{delay:r,duration:p,easing:c,css:($,g)=>`
			transform: ${n} translate(${(1-$)*u}${y}, ${(1-$)*_}${m});
			opacity: ${d-e*g}`}}function C(t,{delay:r=0,duration:p=400,easing:c=h,axis:s="y"}={}){const o=getComputedStyle(t),l=+o.opacity,i=s==="y"?"height":"width",d=parseFloat(o[i]),n=s==="y"?["top","bottom"]:["left","right"],e=n.map(a=>`${a[0].toUpperCase()}${a.slice(1)}`),u=parseFloat(o[`padding${e[0]}`]),y=parseFloat(o[`padding${e[1]}`]),_=parseFloat(o[`margin${e[0]}`]),m=parseFloat(o[`margin${e[1]}`]),$=parseFloat(o[`border${e[0]}Width`]),g=parseFloat(o[`border${e[1]}Width`]);return{delay:r,duration:p,easing:c,css:a=>`overflow: hidden;opacity: ${Math.min(a*20,1)*l};${i}: ${a*d}px;padding-${n[0]}: ${a*u}px;padding-${n[1]}: ${a*y}px;margin-${n[0]}: ${a*_}px;margin-${n[1]}: ${a*m}px;border-${n[0]}-width: ${a*$}px;border-${n[1]}-width: ${a*g}px;`}}export{F as a,w as f,v as q,C as s};
