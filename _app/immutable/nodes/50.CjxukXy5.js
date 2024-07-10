import{s as C,f as k,h as H,l as c,i as d,n as g,e as u,a as m,w as j,b as p,j as z}from"../chunks/scheduler.B-hxYCg7.js";import{S as T,i as S,c as $,a as _,m as b,t as x,b as y,d as v}from"../chunks/index.DAXzD3my.js";import{H as I,a as P}from"../chunks/highlight.BXPCP2dw.js";function U(l){let e,n;return{c(){e=k("input"),this.h()},l(a){e=H(a,"INPUT",{class:!0,type:!0,placeholder:!0}),this.h()},h(){c(e,"class",n="h-10 rounded-md border border-gray-200 bg-gray-100 bg-white px-4 outline-none focus:border-gray-300 dark:border-neutral-700 dark:bg-neutral-800 "+l[0]),c(e,"type","text"),c(e,"placeholder",l[1])},m(a,r){d(a,e,r)},p(a,[r]){r&1&&n!==(n="h-10 rounded-md border border-gray-200 bg-gray-100 bg-white px-4 outline-none focus:border-gray-300 dark:border-neutral-700 dark:bg-neutral-800 "+a[0])&&c(e,"class",n),r&2&&c(e,"placeholder",a[1])},i:g,o:g,d(a){a&&u(e)}}}function W(l,e,n){let{class:a=""}=e,{placeholder:r=""}=e;return l.$$set=s=>{"class"in s&&n(0,a=s.class),"placeholder"in s&&n(1,r=s.placeholder)},[a,r]}class q extends T{constructor(e){super(),S(this,e,W,U,C,{class:0,placeholder:1})}}function D(l){let e,n;return e=new q({props:{placeholder:"What's on your mind?"}}),{c(){$(e.$$.fragment)},l(a){_(e.$$.fragment,a)},m(a,r){b(e,a,r),n=!0},p:g,i(a){n||(x(e.$$.fragment,a),n=!0)},o(a){y(e.$$.fragment,a),n=!1},d(a){v(e,a)}}}function E(l){let e,n,a="Default Usage",r,s,h,i,f;return s=new I({props:{$$slots:{default:[D]},$$scope:{ctx:l}}}),i=new P({props:{code:l[0]}}),{c(){e=m(),n=k("h3"),n.textContent=a,r=m(),$(s.$$.fragment),h=m(),$(i.$$.fragment),this.h()},l(t){j("svelte-1j7l1ed",document.head).forEach(u),e=p(t),n=H(t,"H3",{class:!0,"data-svelte-h":!0}),z(n)!=="svelte-9xnfxc"&&(n.textContent=a),r=p(t),_(s.$$.fragment,t),h=p(t),_(i.$$.fragment,t),this.h()},h(){document.title="Svelte Components - Text input",c(n,"class","text-3xl mb-4")},m(t,o){d(t,e,o),d(t,n,o),d(t,r,o),b(s,t,o),d(t,h,o),b(i,t,o),f=!0},p(t,[o]){const w={};o&2&&(w.$$scope={dirty:o,ctx:t}),s.$set(w)},i(t){f||(x(s.$$.fragment,t),x(i.$$.fragment,t),f=!0)},o(t){y(s.$$.fragment,t),y(i.$$.fragment,t),f=!1},d(t){t&&(u(e),u(n),u(r),u(h)),v(s,t),v(i,t)}}}function N(l){return[`<TextInput placeholder="What's on your mind?" />`]}class G extends T{constructor(e){super(),S(this,e,N,E,C,{})}}export{G as component};
