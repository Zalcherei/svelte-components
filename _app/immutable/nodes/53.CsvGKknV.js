import{s as y,o as G,e as q,f as C,g as H,d as i,j as D,i as p,u as J,p as K,q as M,a as R,h as N,c as j,k as x,t as B,b as T}from"../chunks/scheduler.u0m9llaP.js";import{S as A,i as F,t as c,b as m,c as g,a as _,m as d,d as h}from"../chunks/index.DJSMHduw.js";import{B as k}from"../chunks/button.C6fviHgc.js";import{H as O}from"../chunks/highlight.m-ViY_tW.js";function Q(a){let o,t,l;const e=a[2].default,s=G(e,a,a[1],null);return{c(){o=q("div"),s&&s.c(),this.h()},l(n){o=C(n,"DIV",{class:!0});var f=H(o);s&&s.l(f),f.forEach(i),this.h()},h(){D(o,"class",t="absolute flex hidden h-8 min-w-max items-center justify-center rounded-md bg-white px-4 group-hover:flex dark:bg-neutral-800 "+(a[0]==="left"?"-left-2 -translate-x-full":a[0]==="top"?"-top-2 -translate-y-full":a[0]==="bottom"?"-bottom-2 translate-y-full":a[0]==="right"?"-right-2 translate-x-full":""))},m(n,f){p(n,o,f),s&&s.m(o,null),l=!0},p(n,[f]){s&&s.p&&(!l||f&2)&&J(s,e,n,n[1],l?M(e,n[1],f,null):K(n[1]),null),(!l||f&1&&t!==(t="absolute flex hidden h-8 min-w-max items-center justify-center rounded-md bg-white px-4 group-hover:flex dark:bg-neutral-800 "+(n[0]==="left"?"-left-2 -translate-x-full":n[0]==="top"?"-top-2 -translate-y-full":n[0]==="bottom"?"-bottom-2 translate-y-full":n[0]==="right"?"-right-2 translate-x-full":"")))&&D(o,"class",t)},i(n){l||(c(s,n),l=!0)},o(n){m(s,n),l=!1},d(n){n&&i(o),s&&s.d(n)}}}function U(a,o,t){let{$$slots:l={},$$scope:e}=o,{align:s=""}=o;return a.$$set=n=>{"align"in n&&t(0,s=n.align),"$$scope"in n&&t(1,e=n.$$scope)},[s,e,l]}class I extends A{constructor(o){super(),F(this,o,U,Q,y,{align:0})}}function W(a){let o;return{c(){o=B("Left tooltip")},l(t){o=T(t,"Left tooltip")},m(t,l){p(t,o,l)},d(t){t&&i(o)}}}function X(a){let o,t,l;return t=new I({props:{align:"left",$$slots:{default:[W]},$$scope:{ctx:a}}}),{c(){o=B(`Left
			`),g(t.$$.fragment)},l(e){o=T(e,`Left
			`),_(t.$$.fragment,e)},m(e,s){p(e,o,s),d(t,e,s),l=!0},p(e,s){const n={};s&2&&(n.$$scope={dirty:s,ctx:e}),t.$set(n)},i(e){l||(c(t.$$.fragment,e),l=!0)},o(e){m(t.$$.fragment,e),l=!1},d(e){e&&i(o),h(t,e)}}}function Y(a){let o;return{c(){o=B("Top tooltip")},l(t){o=T(t,"Top tooltip")},m(t,l){p(t,o,l)},d(t){t&&i(o)}}}function Z(a){let o,t,l;return t=new I({props:{align:"top",$$slots:{default:[Y]},$$scope:{ctx:a}}}),{c(){o=B(`Top
			`),g(t.$$.fragment)},l(e){o=T(e,`Top
			`),_(t.$$.fragment,e)},m(e,s){p(e,o,s),d(t,e,s),l=!0},p(e,s){const n={};s&2&&(n.$$scope={dirty:s,ctx:e}),t.$set(n)},i(e){l||(c(t.$$.fragment,e),l=!0)},o(e){m(t.$$.fragment,e),l=!1},d(e){e&&i(o),h(t,e)}}}function tt(a){let o;return{c(){o=B("Bottom tooltip")},l(t){o=T(t,"Bottom tooltip")},m(t,l){p(t,o,l)},d(t){t&&i(o)}}}function et(a){let o,t,l;return t=new I({props:{align:"bottom",$$slots:{default:[tt]},$$scope:{ctx:a}}}),{c(){o=B(`Bottom
			`),g(t.$$.fragment)},l(e){o=T(e,`Bottom
			`),_(t.$$.fragment,e)},m(e,s){p(e,o,s),d(t,e,s),l=!0},p(e,s){const n={};s&2&&(n.$$scope={dirty:s,ctx:e}),t.$set(n)},i(e){l||(c(t.$$.fragment,e),l=!0)},o(e){m(t.$$.fragment,e),l=!1},d(e){e&&i(o),h(t,e)}}}function ot(a){let o;return{c(){o=B("Right tooltip")},l(t){o=T(t,"Right tooltip")},m(t,l){p(t,o,l)},d(t){t&&i(o)}}}function lt(a){let o,t,l;return t=new I({props:{align:"right",$$slots:{default:[ot]},$$scope:{ctx:a}}}),{c(){o=B(`Right
			`),g(t.$$.fragment)},l(e){o=T(e,`Right
			`),_(t.$$.fragment,e)},m(e,s){p(e,o,s),d(t,e,s),l=!0},p(e,s){const n={};s&2&&(n.$$scope={dirty:s,ctx:e}),t.$set(n)},i(e){l||(c(t.$$.fragment,e),l=!0)},o(e){m(t.$$.fragment,e),l=!1},d(e){e&&i(o),h(t,e)}}}function nt(a){let o,t,l,e,s,n,f,v,S,b,V,w,E;return e=new k({props:{class:"group relative",$$slots:{default:[X]},$$scope:{ctx:a}}}),n=new k({props:{class:"group relative",$$slots:{default:[Z]},$$scope:{ctx:a}}}),v=new k({props:{class:"group relative",$$slots:{default:[et]},$$scope:{ctx:a}}}),b=new k({props:{class:"group relative",$$slots:{default:[lt]},$$scope:{ctx:a}}}),w=new O({props:{code:a[0]}}),{c(){o=R(),t=q("div"),l=q("div"),g(e.$$.fragment),s=R(),g(n.$$.fragment),f=R(),g(v.$$.fragment),S=R(),g(b.$$.fragment),V=R(),g(w.$$.fragment),this.h()},l(r){N("svelte-117wy5z",document.head).forEach(i),o=j(r),t=C(r,"DIV",{class:!0});var L=H(t);l=C(L,"DIV",{class:!0});var $=H(l);_(e.$$.fragment,$),s=j($),_(n.$$.fragment,$),f=j($),_(v.$$.fragment,$),S=j($),_(b.$$.fragment,$),$.forEach(i),V=j(L),_(w.$$.fragment,L),L.forEach(i),this.h()},h(){document.title="Svelte Components - Tooltip",D(l,"class","flex items-center justify-center"),D(t,"class","flex flex-col justify-center")},m(r,u){p(r,o,u),p(r,t,u),x(t,l),d(e,l,null),x(l,s),d(n,l,null),x(l,f),d(v,l,null),x(l,S),d(b,l,null),x(t,V),d(w,t,null),E=!0},p(r,[u]){const L={};u&2&&(L.$$scope={dirty:u,ctx:r}),e.$set(L);const $={};u&2&&($.$$scope={dirty:u,ctx:r}),n.$set($);const z={};u&2&&(z.$$scope={dirty:u,ctx:r}),v.$set(z);const P={};u&2&&(P.$$scope={dirty:u,ctx:r}),b.$set(P)},i(r){E||(c(e.$$.fragment,r),c(n.$$.fragment,r),c(v.$$.fragment,r),c(b.$$.fragment,r),c(w.$$.fragment,r),E=!0)},o(r){m(e.$$.fragment,r),m(n.$$.fragment,r),m(v.$$.fragment,r),m(b.$$.fragment,r),m(w.$$.fragment,r),E=!1},d(r){r&&(i(o),i(t)),h(e),h(n),h(v),h(b),h(w)}}}function st(a){return[`<Button class="group relative">
    Left
    <Tooltip align="left">Left tooltip</Tooltip>
  </Button>
  <Button class="group relative">
    Top
    <Tooltip align="top">Top tooltip</Tooltip>
  </Button>
  <Button class="group relative">
    Bottom
    <Tooltip align="bottom">Bottom tooltip</Tooltip>
  </Button>
  <Button class="group relative">
    Right
    <Tooltip align="right">Right tooltip</Tooltip>
  </Button>`]}class ut extends A{constructor(o){super(),F(this,o,st,nt,y,{})}}export{ut as component};
