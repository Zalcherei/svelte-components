import{s as b,e as y,b as H,h as $,i as u,n as C,g as c,a as h,r as P,f as d,m as U}from"../chunks/scheduler.B6pFFlPJ.js";import{S,i as N,c as p,a as _,m as g,t as k,b as w,e as x}from"../chunks/index.kzjZIB-f.js";import{H as q,a as D}from"../chunks/highlight.QdO3B-bh.js";function E(f){let e,s;return{c(){e=y("input"),this.h()},l(n){e=H(n,"INPUT",{class:!0,type:!0,name:!0}),this.h()},h(){$(e,"class",s="me-1 h-5 w-5 cursor-pointer "+f[0]),$(e,"type","radio"),$(e,"name",f[2]),e.checked=f[1]},m(n,r){u(n,e,r)},p(n,[r]){r&1&&s!==(s="me-1 h-5 w-5 cursor-pointer "+n[0])&&$(e,"class",s),r&4&&$(e,"name",n[2]),r&2&&(e.checked=n[1])},i:C,o:C,d(n){n&&c(e)}}}function I(f,e,s){let{class:n=""}=e,{checked:r=!1}=e,{name:i=""}=e;return f.$$set=m=>{"class"in m&&s(0,n=m.class),"checked"in m&&s(1,r=m.checked),"name"in m&&s(2,i=m.name)},[n,r,i]}class v extends S{constructor(e){super(),N(this,e,I,E,b,{class:0,checked:1,name:2})}}function T(f){let e,s,n,r,i,m;return e=new v({props:{name:"radio",checked:!0}}),n=new v({props:{name:"radio"}}),i=new v({props:{name:"radio"}}),{c(){p(e.$$.fragment),s=h(),p(n.$$.fragment),r=h(),p(i.$$.fragment)},l(t){_(e.$$.fragment,t),s=d(t),_(n.$$.fragment,t),r=d(t),_(i.$$.fragment,t)},m(t,l){g(e,t,l),u(t,s,l),g(n,t,l),u(t,r,l),g(i,t,l),m=!0},p:C,i(t){m||(k(e.$$.fragment,t),k(n.$$.fragment,t),k(i.$$.fragment,t),m=!0)},o(t){w(e.$$.fragment,t),w(n.$$.fragment,t),w(i.$$.fragment,t),m=!1},d(t){t&&(c(s),c(r)),x(e,t),x(n,t),x(i,t)}}}function j(f){let e,s,n="Default Usage",r,i,m,t,l;return i=new q({props:{$$slots:{default:[T]},$$scope:{ctx:f}}}),t=new D({props:{code:f[0]}}),{c(){e=h(),s=y("h3"),s.textContent=n,r=h(),p(i.$$.fragment),m=h(),p(t.$$.fragment),this.h()},l(a){P("svelte-1pebo1f",document.head).forEach(c),e=d(a),s=H(a,"H3",{class:!0,"data-svelte-h":!0}),U(s)!=="svelte-9xnfxc"&&(s.textContent=n),r=d(a),_(i.$$.fragment,a),m=d(a),_(t.$$.fragment,a),this.h()},h(){document.title="Svelte Components - Radio",$(s,"class","text-3xl mb-4")},m(a,o){u(a,e,o),u(a,s,o),u(a,r,o),g(i,a,o),u(a,m,o),g(t,a,o),l=!0},p(a,[o]){const R={};o&2&&(R.$$scope={dirty:o,ctx:a}),i.$set(R)},i(a){l||(k(i.$$.fragment,a),k(t.$$.fragment,a),l=!0)},o(a){w(i.$$.fragment,a),w(t.$$.fragment,a),l=!1},d(a){a&&(c(e),c(s),c(r),c(m)),x(i,a),x(t,a)}}}function z(f){return[`<Radio name="radio" checked />
  <Radio name="radio" />
  <Radio name="radio" />`]}class G extends S{constructor(e){super(),N(this,e,z,j,b,{})}}export{G as component};
