import{F as f}from"./scheduler.DdT1aR9J.js";function h(s){const n=s-1;return n*n*n+1}function b(s,{delay:n=0,duration:d=400,easing:$=h,x:p=0,y:o=0,opacity:l=0}={}){const e=getComputedStyle(s),i=+e.opacity,r=e.transform==="none"?"":e.transform,a=i*(1-l),[_,y]=f(p),[u,m]=f(o);return{delay:n,duration:d,easing:$,css:(c,g)=>`
			transform: ${r} translate(${(1-c)*_}${y}, ${(1-c)*u}${m});
			opacity: ${i-a*g}`}}function v(s,{delay:n=0,duration:d=400,easing:$=h,axis:p="y"}={}){const o=getComputedStyle(s),l=+o.opacity,e=p==="y"?"height":"width",i=parseFloat(o[e]),r=p==="y"?["top","bottom"]:["left","right"],a=r.map(t=>`${t[0].toUpperCase()}${t.slice(1)}`),_=parseFloat(o[`padding${a[0]}`]),y=parseFloat(o[`padding${a[1]}`]),u=parseFloat(o[`margin${a[0]}`]),m=parseFloat(o[`margin${a[1]}`]),c=parseFloat(o[`border${a[0]}Width`]),g=parseFloat(o[`border${a[1]}Width`]);return{delay:n,duration:d,easing:$,css:t=>`overflow: hidden;opacity: ${Math.min(t*20,1)*l};${e}: ${t*i}px;padding-${r[0]}: ${t*_}px;padding-${r[1]}: ${t*y}px;margin-${r[0]}: ${t*u}px;margin-${r[1]}: ${t*m}px;border-${r[0]}-width: ${t*c}px;border-${r[1]}-width: ${t*g}px;`}}export{b as f,v as s};
