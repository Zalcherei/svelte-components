import{s as I,a as c,f as C,w as V,e as $,b as p,h as w,j as N,l as h,i as m,k as L,t as H,m as D}from"../chunks/scheduler.DdT1aR9J.js";import{S as j,i as k,c as v,a as _,m as d,t as x,b as g,d as b}from"../chunks/index.5EiRPyG6.js";import{b as E}from"../chunks/paths.Dt2ISZRw.js";import{B as A}from"../chunks/button.ClFZGFgL.js";import{H as q,a as P}from"../chunks/highlight.ocXCRNMQ.js";import{N as B}from"../chunks/navbar.CwSEJd8Z.js";function U(u){let e;return{c(){e=H("Learn")},l(n){e=D(n,"Learn")},m(n,r){m(n,e,r)},d(n){n&&$(e)}}}function z(u){let e,n="Svelte-Components",r,f,s,l,o;return l=new A({props:{variant:"text",$$slots:{default:[U]},$$scope:{ctx:u}}}),{c(){e=C("a"),e.textContent=n,r=c(),f=C("div"),s=c(),v(l.$$.fragment),this.h()},l(t){e=w(t,"A",{class:!0,href:!0,"data-svelte-h":!0}),N(e)!=="svelte-17e60l7"&&(e.textContent=n),r=p(t),f=w(t,"DIV",{class:!0}),L(f).forEach($),s=p(t),_(l.$$.fragment,t),this.h()},h(){h(e,"class","font-medium"),h(e,"href",E),h(f,"class","flex-1")},m(t,a){m(t,e,a),m(t,r,a),m(t,f,a),m(t,s,a),d(l,t,a),o=!0},p(t,a){const i={};a&2&&(i.$$scope={dirty:a,ctx:t}),l.$set(i)},i(t){o||(x(l.$$.fragment,t),o=!0)},o(t){g(l.$$.fragment,t),o=!1},d(t){t&&($(e),$(r),$(f),$(s)),b(l,t)}}}function F(u){let e;return{c(){e=H("Learn")},l(n){e=D(n,"Learn")},m(n,r){m(n,e,r)},d(n){n&&$(e)}}}function G(u){let e,n="Svelte-Components",r,f,s,l,o;return l=new A({props:{variant:"text",$$slots:{default:[F]},$$scope:{ctx:u}}}),{c(){e=C("a"),e.textContent=n,r=c(),f=C("div"),s=c(),v(l.$$.fragment),this.h()},l(t){e=w(t,"A",{class:!0,href:!0,"data-svelte-h":!0}),N(e)!=="svelte-17e60l7"&&(e.textContent=n),r=p(t),f=w(t,"DIV",{class:!0}),L(f).forEach($),s=p(t),_(l.$$.fragment,t),this.h()},h(){h(e,"class","font-medium"),h(e,"href",E),h(f,"class","flex-1")},m(t,a){m(t,e,a),m(t,r,a),m(t,f,a),m(t,s,a),d(l,t,a),o=!0},p(t,a){const i={};a&2&&(i.$$scope={dirty:a,ctx:t}),l.$set(i)},i(t){o||(x(l.$$.fragment,t),o=!0)},o(t){g(l.$$.fragment,t),o=!1},d(t){t&&($(e),$(r),$(f),$(s)),b(l,t)}}}function J(u){let e,n,r,f;return e=new B({props:{$$slots:{default:[z]},$$scope:{ctx:u}}}),r=new B({props:{variant:"shadow",$$slots:{default:[G]},$$scope:{ctx:u}}}),{c(){v(e.$$.fragment),n=c(),v(r.$$.fragment)},l(s){_(e.$$.fragment,s),n=p(s),_(r.$$.fragment,s)},m(s,l){d(e,s,l),m(s,n,l),d(r,s,l),f=!0},p(s,l){const o={};l&2&&(o.$$scope={dirty:l,ctx:s}),e.$set(o);const t={};l&2&&(t.$$scope={dirty:l,ctx:s}),r.$set(t)},i(s){f||(x(e.$$.fragment,s),x(r.$$.fragment,s),f=!0)},o(s){g(e.$$.fragment,s),g(r.$$.fragment,s),f=!1},d(s){s&&$(n),b(e,s),b(r,s)}}}function K(u){let e,n,r="Default Usage",f,s,l,o,t;return s=new q({props:{class:"flex-col",$$slots:{default:[J]},$$scope:{ctx:u}}}),o=new P({props:{code:u[0]}}),{c(){e=c(),n=C("h3"),n.textContent=r,f=c(),v(s.$$.fragment),l=c(),v(o.$$.fragment),this.h()},l(a){V("svelte-10566oh",document.head).forEach($),e=p(a),n=w(a,"H3",{class:!0,"data-svelte-h":!0}),N(n)!=="svelte-9xnfxc"&&(n.textContent=r),f=p(a),_(s.$$.fragment,a),l=p(a),_(o.$$.fragment,a),this.h()},h(){document.title="Svelte-Components - Navbar",h(n,"class","text-3xl mb-4")},m(a,i){m(a,e,i),m(a,n,i),m(a,f,i),d(s,a,i),m(a,l,i),d(o,a,i),t=!0},p(a,[i]){const S={};i&2&&(S.$$scope={dirty:i,ctx:a}),s.$set(S)},i(a){t||(x(s.$$.fragment,a),x(o.$$.fragment,a),t=!0)},o(a){g(s.$$.fragment,a),g(o.$$.fragment,a),t=!1},d(a){a&&($(e),$(n),$(f),$(l)),b(s,a),b(o,a)}}}function M(u){return[`<Navbar>
    <a class="font-medium" href="/">Svelte-Components</a>
    <div class="flex-1"></div>
    <Button variant="text">Learn</Button>
  </Navbar>
  <Navbar variant="shadow">
    <a class="font-medium" href="/">Svelte-Components</a>
    <div class="flex-1"></div>
    <Button variant="text">Learn</Button>
  </Navbar>`]}class Y extends j{constructor(e){super(),k(this,e,M,K,I,{})}}export{Y as component};
