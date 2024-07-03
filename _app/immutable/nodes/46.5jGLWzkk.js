import{s as P,e as p,t as A,a as w,b as g,d as b,m as H,g as d,f as y,h as _,i as k,j as m,z as L,p as S,c as x,u as F,k as G,l as J,n as K,E as R,o as M}from"../chunks/scheduler.lNeRjI5y.js";import{S as C,i as D,t as $,b as v,c as E,a as j,m as z,d as I,g as O,e as Q}from"../chunks/index.DEfn06VZ.js";import{e as q}from"../chunks/each.D6YF6ztN.js";import{H as T}from"../chunks/highlight.CI74ig3z.js";function W(o){let t,s,a,e,i,l,r,n,c,h;return{c(){t=p("li"),s=p("span"),a=A(o[1]),i=w(),l=p("span"),r=A(o[0]),n=w(),c=p("div"),this.h()},l(f){t=g(f,"LI",{class:!0});var u=b(t);s=g(u,"SPAN",{class:!0});var N=b(s);a=H(N,o[1]),N.forEach(d),i=y(u),l=g(u,"SPAN",{});var V=b(l);r=H(V,o[0]),V.forEach(d),n=y(u),c=g(u,"DIV",{class:!0}),b(c).forEach(d),u.forEach(d),this.h()},h(){_(s,"class",e="z-20 flex h-8 w-8 items-center justify-center rounded-full "+(o[2]?"bg-gray-300 dark:bg-neutral-800":"bg-white dark:bg-neutral-700")),_(c,"class",h="absolute z-10 h-2 w-32 translate-x-1/2 translate-y-[12px] "+(o[3]?"hidden":"")+" "+(o[2]?"bg-gray-300 dark:bg-neutral-800":"bg-white dark:bg-neutral-700")),_(t,"class","relative flex min-w-32 flex-col items-center")},m(f,u){k(f,t,u),m(t,s),m(s,a),m(t,i),m(t,l),m(l,r),m(t,n),m(t,c)},p(f,[u]){u&2&&L(a,f[1]),u&4&&e!==(e="z-20 flex h-8 w-8 items-center justify-center rounded-full "+(f[2]?"bg-gray-300 dark:bg-neutral-800":"bg-white dark:bg-neutral-700"))&&_(s,"class",e),u&1&&L(r,f[0]),u&12&&h!==(h="absolute z-10 h-2 w-32 translate-x-1/2 translate-y-[12px] "+(f[3]?"hidden":"")+" "+(f[2]?"bg-gray-300 dark:bg-neutral-800":"bg-white dark:bg-neutral-700"))&&_(c,"class",h)},i:S,o:S,d(f){f&&d(t)}}}function X(o,t,s){let{title:a=""}=t,{id:e}=t,{complete:i=!1}=t,{last:l=!1}=t;return o.$$set=r=>{"title"in r&&s(0,a=r.title),"id"in r&&s(1,e=r.id),"complete"in r&&s(2,i=r.complete),"last"in r&&s(3,l=r.last)},[a,e,i,l]}class Y extends C{constructor(t){super(),D(this,t,X,W,P,{title:0,id:1,complete:2,last:3})}}function Z(o){let t,s;const a=o[1].default,e=x(a,o,o[0],null);return{c(){t=p("ul"),e&&e.c(),this.h()},l(i){t=g(i,"UL",{class:!0});var l=b(t);e&&e.l(l),l.forEach(d),this.h()},h(){_(t,"class","flex")},m(i,l){k(i,t,l),e&&e.m(t,null),s=!0},p(i,[l]){e&&e.p&&(!s||l&1)&&F(e,a,i,i[0],s?J(a,i[0],l,null):G(i[0]),null)},i(i){s||($(e,i),s=!0)},o(i){v(e,i),s=!1},d(i){i&&d(t),e&&e.d(i)}}}function ee(o,t,s){let{$$slots:a={},$$scope:e}=t;return o.$$set=i=>{"$$scope"in i&&s(0,e=i.$$scope)},[e,a]}class te extends C{constructor(t){super(),D(this,t,ee,Z,P,{})}}function B(o,t,s){const a=o.slice();return a[2]=t[s].id,a[3]=t[s].title,a[4]=t[s].complete,a[5]=t[s].last,a}function U(o){let t,s;return t=new Y({props:{title:o[3],complete:o[4],id:o[2],last:o[5]}}),{c(){E(t.$$.fragment)},l(a){j(t.$$.fragment,a)},m(a,e){z(t,a,e),s=!0},p:S,i(a){s||($(t.$$.fragment,a),s=!0)},o(a){v(t.$$.fragment,a),s=!1},d(a){I(t,a)}}}function le(o){let t,s,a=q(o[0]),e=[];for(let l=0;l<a.length;l+=1)e[l]=U(B(o,a,l));const i=l=>v(e[l],1,1,()=>{e[l]=null});return{c(){for(let l=0;l<e.length;l+=1)e[l].c();t=R()},l(l){for(let r=0;r<e.length;r+=1)e[r].l(l);t=R()},m(l,r){for(let n=0;n<e.length;n+=1)e[n]&&e[n].m(l,r);k(l,t,r),s=!0},p(l,r){if(r&1){a=q(l[0]);let n;for(n=0;n<a.length;n+=1){const c=B(l,a,n);e[n]?(e[n].p(c,r),$(e[n],1)):(e[n]=U(c),e[n].c(),$(e[n],1),e[n].m(t.parentNode,t))}for(O(),n=a.length;n<e.length;n+=1)i(n);Q()}},i(l){if(!s){for(let r=0;r<a.length;r+=1)$(e[r]);s=!0}},o(l){e=e.filter(Boolean);for(let r=0;r<e.length;r+=1)v(e[r]);s=!1},d(l){l&&d(t),M(e,l)}}}function se(o){let t,s,a,e,i,l,r;return e=new te({props:{$$slots:{default:[le]},$$scope:{ctx:o}}}),l=new T({props:{code:o[1]}}),{c(){t=w(),s=p("div"),a=p("div"),E(e.$$.fragment),i=w(),E(l.$$.fragment),this.h()},l(n){K("svelte-6ul823",document.head).forEach(d),t=y(n),s=g(n,"DIV",{class:!0});var h=b(s);a=g(h,"DIV",{class:!0});var f=b(a);j(e.$$.fragment,f),f.forEach(d),i=y(h),j(l.$$.fragment,h),h.forEach(d),this.h()},h(){document.title="Svelte Components - Steps",_(a,"class","flex items-center justify-center"),_(s,"class","flex flex-col justify-center")},m(n,c){k(n,t,c),k(n,s,c),m(s,a),z(e,a,null),m(s,i),z(l,s,null),r=!0},p(n,[c]){const h={};c&256&&(h.$$scope={dirty:c,ctx:n}),e.$set(h)},i(n){r||($(e.$$.fragment,n),$(l.$$.fragment,n),r=!0)},o(n){v(e.$$.fragment,n),v(l.$$.fragment,n),r=!1},d(n){n&&(d(t),d(s)),I(e),I(l)}}}function ae(o){return[[{id:1,title:"Register",complete:!0,last:!1},{id:2,title:"Choose plan",complete:!1,last:!1},{id:3,title:"Purchase",complete:!1,last:!1},{id:4,title:"Receive product",complete:!1,last:!0}],`let steps = [...];
  <Steps>
    {#each steps as { id, title, complete, last }}
      <Step {title} {complete} {id} {last} />
    {/each}
  </Steps>`]}class ce extends C{constructor(t){super(),D(this,t,ae,se,P,{})}}export{ce as component};
