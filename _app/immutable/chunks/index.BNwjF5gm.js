import{h as f}from"./scheduler.DAv3NNv8.js";function h(t){const e=t-1;return e*e*e+1}function b(t){return(t*=2)<1?.5*t*t*t*t*t:.5*((t-=2)*t*t*t*t+2)}function v(t,{delay:e=0,duration:d=400,easing:$=h,x:i=0,y:o=0,opacity:l=0}={}){const s=getComputedStyle(t),p=+s.opacity,a=s.transform==="none"?"":s.transform,n=p*(1-l),[u,_]=f(i),[y,m]=f(o);return{delay:e,duration:d,easing:$,css:(c,g)=>`
			transform: ${a} translate(${(1-c)*u}${_}, ${(1-c)*y}${m});
			opacity: ${p-n*g}`}}function F(t,{delay:e=0,duration:d=400,easing:$=h,axis:i="y"}={}){const o=getComputedStyle(t),l=+o.opacity,s=i==="y"?"height":"width",p=parseFloat(o[s]),a=i==="y"?["top","bottom"]:["left","right"],n=a.map(r=>`${r[0].toUpperCase()}${r.slice(1)}`),u=parseFloat(o[`padding${n[0]}`]),_=parseFloat(o[`padding${n[1]}`]),y=parseFloat(o[`margin${n[0]}`]),m=parseFloat(o[`margin${n[1]}`]),c=parseFloat(o[`border${n[0]}Width`]),g=parseFloat(o[`border${n[1]}Width`]);return{delay:e,duration:d,easing:$,css:r=>`overflow: hidden;opacity: ${Math.min(r*20,1)*l};${s}: ${r*p}px;padding-${a[0]}: ${r*u}px;padding-${a[1]}: ${r*_}px;margin-${a[0]}: ${r*y}px;margin-${a[1]}: ${r*m}px;border-${a[0]}-width: ${r*c}px;border-${a[1]}-width: ${r*g}px;`}}export{v as f,b as q,F as s};
