import{s as A,e as m,a as $,b as p,j as k,c as g,d as f,f as c,i as u,k as P,t as z,l as F,y as G,p as H,u as J,q as K,r as L,A as M,h as N,g as C,n as O}from"../chunks/scheduler.ChsxwhU1.js";import{S as j,i as q,c as E,a as S,m as V,t as v,g as Q,b,e as R,d as B,f as y}from"../chunks/index.CzbPYrhj.js";import{B as T}from"../chunks/button.BCkBCnNK.js";import{f as I}from"../chunks/index.BbtzbiAA.js";function U(o){let s;return{c(){s=z(o[0])},l(l){s=F(l,o[0])},m(l,n){u(l,s,n)},p(l,n){n&1&&G(s,l[0])},d(l){l&&f(s)}}}function D(o){let s,l,n;const r=o[3].default,e=H(r,o,o[4],null);return{c(){s=m("div"),e&&e.c(),this.h()},l(t){s=p(t,"DIV",{class:!0});var a=k(s);e&&e.l(a),a.forEach(f),this.h()},h(){c(s,"class","absolute flex flex-col overflow-hidden rounded-md bg-white shadow dark:bg-neutral-800")},m(t,a){u(t,s,a),e&&e.m(s,null),n=!0},p(t,a){e&&e.p&&(!n||a&16)&&J(e,r,t,t[4],n?L(r,t[4],a,null):K(t[4]),null)},i(t){n||(v(e,t),t&&M(()=>{n&&(l||(l=y(s,I,{},!0)),l.run(1))}),n=!0)},o(t){b(e,t),t&&(l||(l=y(s,I,{},!1)),l.run(0)),n=!1},d(t){t&&f(s),e&&e.d(t),t&&l&&l.end()}}}function W(o){let s,l,n,r;l=new T({props:{$$slots:{default:[U]},$$scope:{ctx:o}}}),l.$on("click",o[2]);let e=o[1]&&D(o);return{c(){s=m("div"),E(l.$$.fragment),n=$(),e&&e.c(),this.h()},l(t){s=p(t,"DIV",{class:!0});var a=k(s);S(l.$$.fragment,a),n=g(a),e&&e.l(a),a.forEach(f),this.h()},h(){c(s,"class","relative")},m(t,a){u(t,s,a),V(l,s,null),P(s,n),e&&e.m(s,null),r=!0},p(t,[a]){const d={};a&17&&(d.$$scope={dirty:a,ctx:t}),l.$set(d),t[1]?e?(e.p(t,a),a&2&&v(e,1)):(e=D(t),e.c(),v(e,1),e.m(s,null)):e&&(Q(),b(e,1,1,()=>{e=null}),R())},i(t){r||(v(l.$$.fragment,t),v(e),r=!0)},o(t){b(l.$$.fragment,t),b(e),r=!1},d(t){t&&f(s),B(l),e&&e.d()}}}function X(o,s,l){let{$$slots:n={},$$scope:r}=s,{title:e=""}=s,t=!1;const a=()=>{l(1,t=!t)};return o.$$set=d=>{"title"in d&&l(0,e=d.title),"$$scope"in d&&l(4,r=d.$$scope)},[e,t,a,n,r]}class Y extends j{constructor(s){super(),q(this,s,X,W,A,{title:0})}}function Z(o){let s,l="Item 1",n,r,e="Item 2",t,a,d="Item 3",x,h,w="Item 4";return{c(){s=m("a"),s.textContent=l,n=$(),r=m("a"),r.textContent=e,t=$(),a=m("a"),a.textContent=d,x=$(),h=m("a"),h.textContent=w,this.h()},l(i){s=p(i,"A",{class:!0,href:!0,"data-svelte-h":!0}),C(s)!=="svelte-qi29k5"&&(s.textContent=l),n=g(i),r=p(i,"A",{class:!0,href:!0,"data-svelte-h":!0}),C(r)!=="svelte-1e7jkh0"&&(r.textContent=e),t=g(i),a=p(i,"A",{class:!0,href:!0,"data-svelte-h":!0}),C(a)!=="svelte-7cnuyj"&&(a.textContent=d),x=g(i),h=p(i,"A",{class:!0,href:!0,"data-svelte-h":!0}),C(h)!=="svelte-1ss11eq"&&(h.textContent=w),this.h()},h(){c(s,"class","flex h-10 items-center px-4 hover:bg-gray-100 dark:hover:bg-neutral-700"),c(s,"href","/"),c(r,"class","flex h-10 items-center px-4 hover:bg-gray-100 dark:hover:bg-neutral-700"),c(r,"href","/"),c(a,"class","flex h-10 items-center px-4 hover:bg-gray-100 dark:hover:bg-neutral-700"),c(a,"href","/"),c(h,"class","flex h-10 items-center px-4 hover:bg-gray-100 dark:hover:bg-neutral-700"),c(h,"href","/")},m(i,_){u(i,s,_),u(i,n,_),u(i,r,_),u(i,t,_),u(i,a,_),u(i,x,_),u(i,h,_)},p:O,d(i){i&&(f(s),f(n),f(r),f(t),f(a),f(x),f(h))}}}function ee(o){let s,l,n,r;return n=new Y({props:{title:"Dropdown",$$slots:{default:[Z]},$$scope:{ctx:o}}}),{c(){s=$(),l=m("div"),E(n.$$.fragment),this.h()},l(e){N("svelte-i1dlab",document.head).forEach(f),s=g(e),l=p(e,"DIV",{class:!0});var a=k(l);S(n.$$.fragment,a),a.forEach(f),this.h()},h(){document.title="Svelte Components - Dropdown",c(l,"class","flex justify-center")},m(e,t){u(e,s,t),u(e,l,t),V(n,l,null),r=!0},p(e,[t]){const a={};t&1&&(a.$$scope={dirty:t,ctx:e}),n.$set(a)},i(e){r||(v(n.$$.fragment,e),r=!0)},o(e){b(n.$$.fragment,e),r=!1},d(e){e&&(f(s),f(l)),B(n)}}}class ne extends j{constructor(s){super(),q(this,s,null,ee,A,{})}}export{ne as component};
