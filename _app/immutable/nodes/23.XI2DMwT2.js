import{s as S,e as k,a as g,b as D,d as y,f as v,g as m,h as I,i as c,j,c as q,u as N,k as P,l as U,y as A,r as F,m as G,n as J}from"../chunks/scheduler.B6pFFlPJ.js";import{S as z,i as V,c as _,a as p,m as h,t as $,g as K,b as d,d as L,e as b,f as C}from"../chunks/index.kzjZIB-f.js";import{b as x}from"../chunks/paths.D15ra5kt.js";import{B as w}from"../chunks/button.CrnHwzqz.js";import{f as H}from"../chunks/index.beaOudN7.js";import{H as M,a as O}from"../chunks/highlight.QdO3B-bh.js";function E(u){let t,r,s,f;const a=u[6].default,l=q(a,u,u[5],null);return{c(){t=k("div"),l&&l.c(),this.h()},l(n){t=D(n,"DIV",{class:!0});var i=y(t);l&&l.l(i),i.forEach(m),this.h()},h(){I(t,"class",r="absolute z-50 flex flex-col overflow-hidden rounded-md bg-white shadow dark:bg-neutral-800 [&>a]:rounded-none [&>button]:rounded-none "+u[0])},m(n,i){c(n,t,i),l&&l.m(t,null),f=!0},p(n,i){l&&l.p&&(!f||i&32)&&N(l,a,n,n[5],f?U(a,n[5],i,null):P(n[5]),null),(!f||i&1&&r!==(r="absolute z-50 flex flex-col overflow-hidden rounded-md bg-white shadow dark:bg-neutral-800 [&>a]:rounded-none [&>button]:rounded-none "+n[0]))&&I(t,"class",r)},i(n){f||($(l,n),n&&A(()=>{f&&(s||(s=C(t,H,{},!0)),s.run(1))}),f=!0)},o(n){d(l,n),n&&(s||(s=C(t,H,{},!1)),s.run(0)),f=!1},d(n){n&&m(t),l&&l.d(n),n&&s&&s.end()}}}function Q(u){let t,r,s,f;r=new w({props:{variant:u[2],label:u[1]}}),r.$on("click",u[4]);let a=u[3]&&E(u);return{c(){t=k("div"),_(r.$$.fragment),s=g(),a&&a.c(),this.h()},l(l){t=D(l,"DIV",{class:!0});var n=y(t);p(r.$$.fragment,n),s=v(n),a&&a.l(n),n.forEach(m),this.h()},h(){I(t,"class","relative")},m(l,n){c(l,t,n),h(r,t,null),j(t,s),a&&a.m(t,null),f=!0},p(l,[n]){const i={};n&4&&(i.variant=l[2]),n&2&&(i.label=l[1]),r.$set(i),l[3]?a?(a.p(l,n),n&8&&$(a,1)):(a=E(l),a.c(),$(a,1),a.m(t,null)):a&&(K(),d(a,1,1,()=>{a=null}),L())},i(l){f||($(r.$$.fragment,l),$(a),f=!0)},o(l){d(r.$$.fragment,l),d(a),f=!1},d(l){l&&m(t),b(r),a&&a.d()}}}function R(u,t,r){let{$$slots:s={},$$scope:f}=t,{class:a=""}=t,{label:l=""}=t,{variant:n=""}=t,i=!1;const e=()=>{r(3,i=!i)};return u.$$set=o=>{"class"in o&&r(0,a=o.class),"label"in o&&r(1,l=o.label),"variant"in o&&r(2,n=o.variant),"$$scope"in o&&r(5,f=o.$$scope)},[a,l,n,i,e,f,s]}class T extends z{constructor(t){super(),V(this,t,R,Q,S,{class:0,label:1,variant:2})}}function W(u){let t,r,s,f,a,l,n,i;return t=new w({props:{variant:"text",label:"Item 1",href:x+"/"}}),s=new w({props:{variant:"text",label:"Item 2",href:x+"/"}}),a=new w({props:{variant:"text",label:"Item 3",href:x+"/"}}),n=new w({props:{variant:"text",label:"Item 4",href:x+"/"}}),{c(){_(t.$$.fragment),r=g(),_(s.$$.fragment),f=g(),_(a.$$.fragment),l=g(),_(n.$$.fragment)},l(e){p(t.$$.fragment,e),r=v(e),p(s.$$.fragment,e),f=v(e),p(a.$$.fragment,e),l=v(e),p(n.$$.fragment,e)},m(e,o){h(t,e,o),c(e,r,o),h(s,e,o),c(e,f,o),h(a,e,o),c(e,l,o),h(n,e,o),i=!0},p:J,i(e){i||($(t.$$.fragment,e),$(s.$$.fragment,e),$(a.$$.fragment,e),$(n.$$.fragment,e),i=!0)},o(e){d(t.$$.fragment,e),d(s.$$.fragment,e),d(a.$$.fragment,e),d(n.$$.fragment,e),i=!1},d(e){e&&(m(r),m(f),m(l)),b(t,e),b(s,e),b(a,e),b(n,e)}}}function X(u){let t,r;return t=new T({props:{variant:"text",label:"Dropdown",$$slots:{default:[W]},$$scope:{ctx:u}}}),{c(){_(t.$$.fragment)},l(s){p(t.$$.fragment,s)},m(s,f){h(t,s,f),r=!0},p(s,f){const a={};f&2&&(a.$$scope={dirty:f,ctx:s}),t.$set(a)},i(s){r||($(t.$$.fragment,s),r=!0)},o(s){d(t.$$.fragment,s),r=!1},d(s){b(t,s)}}}function Y(u){let t,r,s="Default Usage",f,a,l,n,i;return a=new M({props:{class:"flex-col",$$slots:{default:[X]},$$scope:{ctx:u}}}),n=new O({props:{code:u[0]}}),{c(){t=g(),r=k("h3"),r.textContent=s,f=g(),_(a.$$.fragment),l=g(),_(n.$$.fragment),this.h()},l(e){F("svelte-i1dlab",document.head).forEach(m),t=v(e),r=D(e,"H3",{class:!0,"data-svelte-h":!0}),G(r)!=="svelte-9xnfxc"&&(r.textContent=s),f=v(e),p(a.$$.fragment,e),l=v(e),p(n.$$.fragment,e),this.h()},h(){document.title="Svelte Components - Dropdown",I(r,"class","text-3xl mb-4")},m(e,o){c(e,t,o),c(e,r,o),c(e,f,o),h(a,e,o),c(e,l,o),h(n,e,o),i=!0},p(e,[o]){const B={};o&2&&(B.$$scope={dirty:o,ctx:e}),a.$set(B)},i(e){i||($(a.$$.fragment,e),$(n.$$.fragment,e),i=!0)},o(e){d(a.$$.fragment,e),d(n.$$.fragment,e),i=!1},d(e){e&&(m(t),m(r),m(f),m(l)),b(a,e),b(n,e)}}}function Z(u){return[`<Dropdown variant="text" label="Dropdown">
  	<Button variant="text" label="Item 1" href="/" />
  	<Button variant="text" label="Item 2" href="/" />
  	<Button variant="text" label="Item 3" href="/" />
  	<Button variant="text" label="Item 4" href="/" />
  </Dropdown>`]}class se extends z{constructor(t){super(),V(this,t,Z,Y,S,{})}}export{se as component};
