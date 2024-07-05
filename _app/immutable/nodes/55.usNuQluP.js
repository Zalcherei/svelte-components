import{s as S,c as j,f as $,a as k,h as _,k as x,b as v,e as p,l as h,i as b,o as m,u as q,g as B,d as D,w as I,j as N,t as U,m as V}from"../chunks/scheduler.DdT1aR9J.js";import{S as A,i as P,t as w,b as y,c as T,a as E,m as C,d as H}from"../chunks/index.5EiRPyG6.js";import{H as z,a as F}from"../chunks/highlight.ocXCRNMQ.js";function G(c){let e,a,r,s,l,g,u,d,t;const f=c[1].default,n=j(f,c,c[0],null);return{c(){e=$("label"),a=$("input"),r=k(),s=$("label"),l=k(),g=$("div"),u=k(),d=$("span"),n&&n.c(),this.h()},l(o){e=_(o,"LABEL",{class:!0});var i=x(e);a=_(i,"INPUT",{id:!0,type:!0,class:!0}),r=v(i),s=_(i,"LABEL",{for:!0,class:!0}),x(s).forEach(p),l=v(i),g=_(i,"DIV",{class:!0}),x(g).forEach(p),u=v(i),d=_(i,"SPAN",{class:!0});var L=x(d);n&&n.l(L),L.forEach(p),i.forEach(p),this.h()},h(){h(a,"id","switch"),h(a,"type","checkbox"),h(a,"class","peer sr-only"),h(s,"for","switch"),h(s,"class","hidden"),h(g,"class","peer h-6 w-11 rounded-full border bg-gray-200 after:absolute after:left-[2px] after:top-0.5 after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-gray-300 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:ring-green-300 dark:border-neutral-700 dark:bg-neutral-800 dark:after:border-neutral-700 after:dark:bg-neutral-500 dark:peer-checked:border-neutral-700 dark:peer-checked:bg-neutral-800 dark:peer-checked:after:border-neutral-700"),h(d,"class","ml-2"),h(e,"class","relative inline-flex cursor-pointer items-center")},m(o,i){b(o,e,i),m(e,a),m(e,r),m(e,s),m(e,l),m(e,g),m(e,u),m(e,d),n&&n.m(d,null),t=!0},p(o,[i]){n&&n.p&&(!t||i&1)&&q(n,f,o,o[0],t?D(f,o[0],i,null):B(o[0]),null)},i(o){t||(w(n,o),t=!0)},o(o){y(n,o),t=!1},d(o){o&&p(e),n&&n.d(o)}}}function J(c,e,a){let{$$slots:r={},$$scope:s}=e;return c.$$set=l=>{"$$scope"in l&&a(0,s=l.$$scope)},[s,r]}class K extends A{constructor(e){super(),P(this,e,J,G,S,{})}}function M(c){let e;return{c(){e=U("Toggle me")},l(a){e=V(a,"Toggle me")},m(a,r){b(a,e,r)},d(a){a&&p(e)}}}function O(c){let e,a;return e=new K({props:{$$slots:{default:[M]},$$scope:{ctx:c}}}),{c(){T(e.$$.fragment)},l(r){E(e.$$.fragment,r)},m(r,s){C(e,r,s),a=!0},p(r,s){const l={};s&2&&(l.$$scope={dirty:s,ctx:r}),e.$set(l)},i(r){a||(w(e.$$.fragment,r),a=!0)},o(r){y(e.$$.fragment,r),a=!1},d(r){H(e,r)}}}function Q(c){let e,a,r="Default Usage",s,l,g,u,d;return l=new z({props:{$$slots:{default:[O]},$$scope:{ctx:c}}}),u=new F({props:{code:c[0]}}),{c(){e=k(),a=$("h3"),a.textContent=r,s=k(),T(l.$$.fragment),g=k(),T(u.$$.fragment),this.h()},l(t){I("svelte-rjglqa",document.head).forEach(p),e=v(t),a=_(t,"H3",{class:!0,"data-svelte-h":!0}),N(a)!=="svelte-9xnfxc"&&(a.textContent=r),s=v(t),E(l.$$.fragment,t),g=v(t),E(u.$$.fragment,t),this.h()},h(){document.title="Svelte Components - Toggle",h(a,"class","text-3xl mb-4")},m(t,f){b(t,e,f),b(t,a,f),b(t,s,f),C(l,t,f),b(t,g,f),C(u,t,f),d=!0},p(t,[f]){const n={};f&2&&(n.$$scope={dirty:f,ctx:t}),l.$set(n)},i(t){d||(w(l.$$.fragment,t),w(u.$$.fragment,t),d=!0)},o(t){y(l.$$.fragment,t),y(u.$$.fragment,t),d=!1},d(t){t&&(p(e),p(a),p(s),p(g)),H(l,t),H(u,t)}}}function R(c){return["<Toggle>Toggle me</Toggle>"]}class Z extends A{constructor(e){super(),P(this,e,R,Q,S,{})}}export{Z as component};
