import{s as C,e as f,f as h,v as I,j as g,i as p,n as d,d as i,a as _,h as V,c as $,g as x,k as b}from"../chunks/scheduler.u0m9llaP.js";import{S as D,i as E,c as k,a as y,m as w,t as S,b as H,d as j}from"../chunks/index.DJSMHduw.js";import{H as L}from"../chunks/highlight.m-ViY_tW.js";function M(l){let e,a='<div class="mb-2 h-32 w-64 animate-pulse rounded-md bg-gray-200 dark:bg-neutral-800"></div> <div class="mb-2 h-8 w-64 animate-pulse rounded-md bg-gray-200 dark:bg-neutral-800"></div> <div class="h-8 w-64 animate-pulse rounded-md bg-gray-200 dark:bg-neutral-800"></div>';return{c(){e=f("div"),e.innerHTML=a,this.h()},l(n){e=h(n,"DIV",{class:!0,"data-svelte-h":!0}),I(e)!=="svelte-10cvw49"&&(e.innerHTML=a),this.h()},h(){g(e,"class","flex flex-col")},m(n,s){p(n,e,s)},p:d,i:d,o:d,d(n){n&&i(e)}}}class T extends D{constructor(e){super(),E(this,e,null,M,C,{})}}function q(l){let e,a,n,s,m,r,o;return s=new T({}),r=new L({props:{code:l[0]}}),{c(){e=_(),a=f("div"),n=f("div"),k(s.$$.fragment),m=_(),k(r.$$.fragment),this.h()},l(t){V("svelte-1df7tct",document.head).forEach(i),e=$(t),a=h(t,"DIV",{class:!0});var c=x(a);n=h(c,"DIV",{class:!0});var v=x(n);y(s.$$.fragment,v),v.forEach(i),m=$(c),y(r.$$.fragment,c),c.forEach(i),this.h()},h(){document.title="Svelte Components - Skeleton",g(n,"class","flex items-center justify-center"),g(a,"class","flex flex-col justify-center")},m(t,u){p(t,e,u),p(t,a,u),b(a,n),w(s,n,null),b(a,m),w(r,a,null),o=!0},p:d,i(t){o||(S(s.$$.fragment,t),S(r.$$.fragment,t),o=!0)},o(t){H(s.$$.fragment,t),H(r.$$.fragment,t),o=!1},d(t){t&&(i(e),i(a)),j(s),j(r)}}}function P(l){return["<Skeleton />"]}class F extends D{constructor(e){super(),E(this,e,P,q,C,{})}}export{F as component};
