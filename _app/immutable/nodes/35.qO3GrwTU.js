import{s as f,e as p,t as m,b as _,j as b,l as u,d as o,f as l,i as d,k as h,y as k,n as c,a as $,h as j,c as w}from"../chunks/scheduler.ChsxwhU1.js";import{S as v,i as y,c as E,a as S,m as C,t as D,b as I,d as R}from"../chunks/index.CzbPYrhj.js";function V(i){let t,a,r,s;return{c(){t=p("div"),a=m(i[0]),r=m("%"),this.h()},l(e){t=_(e,"DIV",{class:!0,style:!0});var n=b(t);a=u(n,i[0]),r=u(n,"%"),n.forEach(o),this.h()},h(){l(t,"class","flex h-16 w-16 items-center justify-center rounded-full"),l(t,"style",s=i[1]==="dark"?`background: radial-gradient(closest-side, rgb(38 38 38) 79%, transparent 80% 100%), conic-gradient(rgb(64 64 64) ${i[0]}%, rgb(82 82 82) 0)`:i[1]==="light"?`background: radial-gradient(closest-side, rgb(243 244 246) 79%, transparent 80% 100%), conic-gradient(rgb(209 213 219) ${i[0]}%, rgb(229 231 235) 0)`:"")},m(e,n){d(e,t,n),h(t,a),h(t,r)},p(e,[n]){n&1&&k(a,e[0]),n&3&&s!==(s=e[1]==="dark"?`background: radial-gradient(closest-side, rgb(38 38 38) 79%, transparent 80% 100%), conic-gradient(rgb(64 64 64) ${e[0]}%, rgb(82 82 82) 0)`:e[1]==="light"?`background: radial-gradient(closest-side, rgb(243 244 246) 79%, transparent 80% 100%), conic-gradient(rgb(209 213 219) ${e[0]}%, rgb(229 231 235) 0)`:"")&&l(t,"style",s)},i:c,o:c,d(e){e&&o(t)}}}function q(i,t,a){let{progress:r=0}=t,{theme:s=""}=t;return i.$$set=e=>{"progress"in e&&a(0,r=e.progress),"theme"in e&&a(1,s=e.theme)},[r,s]}class P extends v{constructor(t){super(),y(this,t,q,V,f,{progress:0,theme:1})}}function z(i){let t,a,r,s;return r=new P({props:{progress:75,theme:"dark"}}),{c(){t=$(),a=p("div"),E(r.$$.fragment),this.h()},l(e){j("svelte-1w2ecco",document.head).forEach(o),t=w(e),a=_(e,"DIV",{class:!0});var g=b(a);S(r.$$.fragment,g),g.forEach(o),this.h()},h(){document.title="Svelte Components - Radial progress",l(a,"class","flex justify-center")},m(e,n){d(e,t,n),d(e,a,n),C(r,a,null),s=!0},p:c,i(e){s||(D(r.$$.fragment,e),s=!0)},o(e){I(r.$$.fragment,e),s=!1},d(e){e&&(o(t),o(a)),R(r)}}}class F extends v{constructor(t){super(),y(this,t,null,z,f,{})}}export{F as component};
