import{s as j,a as d,f as D,w as E,e as l,b as M,h as P,j as U,l as k,i as u,t as b,m as C}from"../chunks/scheduler.DdT1aR9J.js";import{S as z,i as A,c,a as p,m as _,t as g,b as h,d as I}from"../chunks/index.5EiRPyG6.js";import{b as x}from"../chunks/paths.Dt2ISZRw.js";import{H as B,a as F}from"../chunks/highlight.ocXCRNMQ.js";import{M as G,a as v}from"../chunks/menu.6fSpMHUu.js";function J(a){let t;return{c(){t=b("Item 1")},l(n){t=C(n,"Item 1")},m(n,s){u(n,t,s)},d(n){n&&l(t)}}}function K(a){let t;return{c(){t=b("Item 2")},l(n){t=C(n,"Item 2")},m(n,s){u(n,t,s)},d(n){n&&l(t)}}}function L(a){let t;return{c(){t=b("Item 3")},l(n){t=C(n,"Item 3")},m(n,s){u(n,t,s)},d(n){n&&l(t)}}}function N(a){let t;return{c(){t=b("Item 4")},l(n){t=C(n,"Item 4")},m(n,s){u(n,t,s)},d(n){n&&l(t)}}}function O(a){let t,n,s,r,$,o,f,i;return t=new v({props:{href:x,$$slots:{default:[J]},$$scope:{ctx:a}}}),s=new v({props:{href:x,$$slots:{default:[K]},$$scope:{ctx:a}}}),$=new v({props:{href:x,$$slots:{default:[L]},$$scope:{ctx:a}}}),f=new v({props:{href:x,$$slots:{default:[N]},$$scope:{ctx:a}}}),{c(){c(t.$$.fragment),n=d(),c(s.$$.fragment),r=d(),c($.$$.fragment),o=d(),c(f.$$.fragment)},l(e){p(t.$$.fragment,e),n=M(e),p(s.$$.fragment,e),r=M(e),p($.$$.fragment,e),o=M(e),p(f.$$.fragment,e)},m(e,m){_(t,e,m),u(e,n,m),_(s,e,m),u(e,r,m),_($,e,m),u(e,o,m),_(f,e,m),i=!0},p(e,m){const w={};m&2&&(w.$$scope={dirty:m,ctx:e}),t.$set(w);const H={};m&2&&(H.$$scope={dirty:m,ctx:e}),s.$set(H);const S={};m&2&&(S.$$scope={dirty:m,ctx:e}),$.$set(S);const q={};m&2&&(q.$$scope={dirty:m,ctx:e}),f.$set(q)},i(e){i||(g(t.$$.fragment,e),g(s.$$.fragment,e),g($.$$.fragment,e),g(f.$$.fragment,e),i=!0)},o(e){h(t.$$.fragment,e),h(s.$$.fragment,e),h($.$$.fragment,e),h(f.$$.fragment,e),i=!1},d(e){e&&(l(n),l(r),l(o)),I(t,e),I(s,e),I($,e),I(f,e)}}}function Q(a){let t,n;return t=new G({props:{$$slots:{default:[O]},$$scope:{ctx:a}}}),{c(){c(t.$$.fragment)},l(s){p(t.$$.fragment,s)},m(s,r){_(t,s,r),n=!0},p(s,r){const $={};r&2&&($.$$scope={dirty:r,ctx:s}),t.$set($)},i(s){n||(g(t.$$.fragment,s),n=!0)},o(s){h(t.$$.fragment,s),n=!1},d(s){I(t,s)}}}function R(a){let t,n,s="Default Usage",r,$,o,f,i;return $=new B({props:{class:"flex-col",$$slots:{default:[Q]},$$scope:{ctx:a}}}),f=new F({props:{code:a[0]}}),{c(){t=d(),n=D("h3"),n.textContent=s,r=d(),c($.$$.fragment),o=d(),c(f.$$.fragment),this.h()},l(e){E("svelte-qw6yd0",document.head).forEach(l),t=M(e),n=P(e,"H3",{class:!0,"data-svelte-h":!0}),U(n)!=="svelte-9xnfxc"&&(n.textContent=s),r=M(e),p($.$$.fragment,e),o=M(e),p(f.$$.fragment,e),this.h()},h(){document.title="Svelte-Components - Menu",k(n,"class","text-3xl mb-4")},m(e,m){u(e,t,m),u(e,n,m),u(e,r,m),_($,e,m),u(e,o,m),_(f,e,m),i=!0},p(e,[m]){const w={};m&2&&(w.$$scope={dirty:m,ctx:e}),$.$set(w)},i(e){i||(g($.$$.fragment,e),g(f.$$.fragment,e),i=!0)},o(e){h($.$$.fragment,e),h(f.$$.fragment,e),i=!1},d(e){e&&(l(t),l(n),l(r),l(o)),I($,e),I(f,e)}}}function T(a){return[`<Menu>
    <MenuItem href="/">Item 1</MenuItem>
    <MenuItem href="/">Item 2</MenuItem>
    <MenuItem href="/">Item 3</MenuItem>
    <MenuItem href="/">Item 4</MenuItem>
  </Menu>`]}class y extends z{constructor(t){super(),A(this,t,T,R,j,{})}}export{y as component};
