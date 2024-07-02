import{s as P,e as v,a as y,f as b,g as w,c as C,d as f,j as g,i as I,k as $,w as S,B as M,C as z,r as V,h as A,n as F}from"../chunks/scheduler.u0m9llaP.js";import{S as U,i as G,c as j,a as E,m as x,t as T,b as B,d as D}from"../chunks/index.DJSMHduw.js";import{e as q}from"../chunks/each.D6YF6ztN.js";import{C as J,a as K}from"../chunks/chevron-right.CVf3B7xx.js";import{H as L}from"../chunks/highlight.m-ViY_tW.js";function H(l,e,n){const t=l.slice();return t[4]=e[n],t[6]=n,t}function O(l){let e,n,t;return{c(){e=v("img"),this.h()},l(s){e=b(s,"IMG",{class:!0,alt:!0,src:!0}),this.h()},h(){g(e,"class",n="rounded-md "+(l[1]===l[6]?"block":"hidden")),g(e,"alt","..."),V(e.src,t=l[4])||g(e,"src",t)},m(s,h){I(s,e,h)},p(s,h){h&2&&n!==(n="rounded-md "+(s[1]===s[6]?"block":"hidden"))&&g(e,"class",n),h&1&&!V(e.src,t=s[4])&&g(e,"src",t)},d(s){s&&f(e)}}}function Q(l){let e,n,t,s,h,i,u,o,p,_,d=q(l[0]),c=[];for(let r=0;r<d.length;r+=1)c[r]=O(H(l,d,r));return s=new J({}),u=new K({}),{c(){e=v("div");for(let r=0;r<c.length;r+=1)c[r].c();n=y(),t=v("button"),j(s.$$.fragment),h=y(),i=v("button"),j(u.$$.fragment),this.h()},l(r){e=b(r,"DIV",{class:!0});var m=w(e);for(let N=0;N<c.length;N+=1)c[N].l(m);n=C(m),t=b(m,"BUTTON",{class:!0});var a=w(t);E(s.$$.fragment,a),a.forEach(f),h=C(m),i=b(m,"BUTTON",{class:!0});var k=w(i);E(u.$$.fragment,k),k.forEach(f),m.forEach(f),this.h()},h(){g(t,"class","absolute left-0 top-[45%] inline-flex h-10 min-w-10 items-center justify-center rounded-full bg-white transition hover:bg-gray-100 dark:bg-neutral-800 dark:hover:bg-neutral-700"),g(i,"class","absolute right-0 top-[45%] inline-flex h-10 min-w-10 items-center justify-center rounded-full bg-white transition hover:bg-gray-100 dark:bg-neutral-800 dark:hover:bg-neutral-700"),g(e,"class","relative")},m(r,m){I(r,e,m);for(let a=0;a<c.length;a+=1)c[a]&&c[a].m(e,null);$(e,n),$(e,t),x(s,t,null),$(e,h),$(e,i),x(u,i,null),o=!0,p||(_=[S(t,"click",l[2]),S(i,"click",l[3])],p=!0)},p(r,[m]){if(m&3){d=q(r[0]);let a;for(a=0;a<d.length;a+=1){const k=H(r,d,a);c[a]?c[a].p(k,m):(c[a]=O(k),c[a].c(),c[a].m(e,n))}for(;a<c.length;a+=1)c[a].d(1);c.length=d.length}},i(r){o||(T(s.$$.fragment,r),T(u.$$.fragment,r),o=!0)},o(r){B(s.$$.fragment,r),B(u.$$.fragment,r),o=!1},d(r){r&&f(e),M(c,r),D(s),D(u),p=!1,z(_)}}}function R(l,e,n){let t=0,{images:s=[]}=e;const h=()=>{n(1,t=t===0?s.length-1:t-1)},i=()=>{n(1,t=t===s.length-1?0:t+1)};return l.$$set=u=>{"images"in u&&n(0,s=u.images)},[s,t,h,i]}class W extends U{constructor(e){super(),G(this,e,R,Q,P,{images:0})}}function X(l){let e,n,t,s,h,i,u;return s=new W({props:{images:l[0]}}),i=new L({props:{code:l[1]}}),{c(){e=y(),n=v("div"),t=v("div"),j(s.$$.fragment),h=y(),j(i.$$.fragment),this.h()},l(o){A("svelte-b2jp8k",document.head).forEach(f),e=C(o),n=b(o,"DIV",{class:!0});var _=w(n);t=b(_,"DIV",{class:!0});var d=w(t);E(s.$$.fragment,d),d.forEach(f),h=C(_),E(i.$$.fragment,_),_.forEach(f),this.h()},h(){document.title="Svelte Components - Carousel",g(t,"class","flex items-center justify-center"),g(n,"class","flex flex-col justify-center")},m(o,p){I(o,e,p),I(o,n,p),$(n,t),x(s,t,null),$(n,h),x(i,n,null),u=!0},p:F,i(o){u||(T(s.$$.fragment,o),T(i.$$.fragment,o),u=!0)},o(o){B(s.$$.fragment,o),B(i.$$.fragment,o),u=!1},d(o){o&&(f(e),f(n)),D(s),D(i)}}}function Y(l){return[["https://picsum.photos/800/300?1","https://picsum.photos/800/300?2","https://picsum.photos/800/300?3","https://picsum.photos/800/300?4","https://picsum.photos/800/300?5"],`let images = [...]
  <Carousel {images} />`]}class re extends U{constructor(e){super(),G(this,e,Y,X,P,{})}}export{re as component};
