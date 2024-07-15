import{s as q,e as x,b as S,h as c,x as H,i as u,n as M,g as o,a as g,r as E,f as _,m as G}from"../chunks/scheduler.B6pFFlPJ.js";import{S as y,i as D,c as p,a as d,m as $,t as k,b as v,e as C}from"../chunks/index.kzjZIB-f.js";import{H as I,a as N}from"../chunks/highlight.QdO3B-bh.js";function P(m){let t,n,l;return{c(){t=x("img"),this.h()},l(a){t=S(a,"IMG",{class:!0,alt:!0,src:!0}),this.h()},h(){c(t,"class",n=(m[1]==="heart"?"mask-heart":m[1]==="triangle"?"mask-triangle":"")+" rounded-md "+m[0]+" svelte-mfm3f8"),c(t,"alt",m[2]),H(t.src,l=m[3])||c(t,"src",l)},m(a,e){u(a,t,e)},p(a,[e]){e&3&&n!==(n=(a[1]==="heart"?"mask-heart":a[1]==="triangle"?"mask-triangle":"")+" rounded-md "+a[0]+" svelte-mfm3f8")&&c(t,"class",n),e&4&&c(t,"alt",a[2]),e&8&&!H(t.src,l=a[3])&&c(t,"src",l)},i:M,o:M,d(a){a&&o(t)}}}function U(m,t,n){let{class:l=""}=t,{mask:a=""}=t,{alt:e=""}=t,{src:i=""}=t;return m.$$set=r=>{"class"in r&&n(0,l=r.class),"mask"in r&&n(1,a=r.mask),"alt"in r&&n(2,e=r.alt),"src"in r&&n(3,i=r.src)},[l,a,e,i]}class b extends y{constructor(t){super(),D(this,t,U,P,q,{class:0,mask:1,alt:2,src:3})}}function j(m){let t,n,l,a;return t=new b({props:{mask:"heart",alt:"...",src:"https://picsum.photos/id/800/150/100"}}),l=new b({props:{mask:"triangle",alt:"...",src:"https://picsum.photos/id/800/150/150"}}),{c(){p(t.$$.fragment),n=g(),p(l.$$.fragment)},l(e){d(t.$$.fragment,e),n=_(e),d(l.$$.fragment,e)},m(e,i){$(t,e,i),u(e,n,i),$(l,e,i),a=!0},p:M,i(e){a||(k(t.$$.fragment,e),k(l.$$.fragment,e),a=!0)},o(e){v(t.$$.fragment,e),v(l.$$.fragment,e),a=!1},d(e){e&&o(n),C(t,e),C(l,e)}}}function z(m){let t,n,l="Default Usage",a,e,i,r,h;return e=new I({props:{$$slots:{default:[j]},$$scope:{ctx:m}}}),r=new N({props:{code:m[0]}}),{c(){t=g(),n=x("h3"),n.textContent=l,a=g(),p(e.$$.fragment),i=g(),p(r.$$.fragment),this.h()},l(s){E("svelte-1q37r8a",document.head).forEach(o),t=_(s),n=S(s,"H3",{class:!0,"data-svelte-h":!0}),G(n)!=="svelte-9xnfxc"&&(n.textContent=l),a=_(s),d(e.$$.fragment,s),i=_(s),d(r.$$.fragment,s),this.h()},h(){document.title="Svelte Components - Mask",c(n,"class","text-3xl mb-4")},m(s,f){u(s,t,f),u(s,n,f),u(s,a,f),$(e,s,f),u(s,i,f),$(r,s,f),h=!0},p(s,[f]){const w={};f&2&&(w.$$scope={dirty:f,ctx:s}),e.$set(w)},i(s){h||(k(e.$$.fragment,s),k(r.$$.fragment,s),h=!0)},o(s){v(e.$$.fragment,s),v(r.$$.fragment,s),h=!1},d(s){s&&(o(t),o(n),o(a),o(i)),C(e,s),C(r,s)}}}function A(m){return[`<Mask mask="heart" alt="..." src="https://picsum.photos/id/800/150/75" />
  <Mask mask="triangle" alt="..." src="https://picsum.photos/id/800/150/150" />`]}class K extends y{constructor(t){super(),D(this,t,A,z,q,{})}}export{K as component};
