import{s as b,f as y,h as H,l as $,i as u,n as C,e as c,a as h,w as P,b as d,j as U}from"../chunks/scheduler.B-hxYCg7.js";import{S,i as z,c as p,a as _,m as g,t as k,b as w,d as x}from"../chunks/index.DAXzD3my.js";import{H as j,a as q}from"../chunks/highlight.BXPCP2dw.js";function D(l){let e,s;return{c(){e=y("input"),this.h()},l(n){e=H(n,"INPUT",{class:!0,type:!0,name:!0}),this.h()},h(){$(e,"class",s="me-1 h-5 w-5 cursor-pointer "+l[0]),$(e,"type","radio"),$(e,"name",l[2]),e.checked=l[1]},m(n,r){u(n,e,r)},p(n,[r]){r&1&&s!==(s="me-1 h-5 w-5 cursor-pointer "+n[0])&&$(e,"class",s),r&4&&$(e,"name",n[2]),r&2&&(e.checked=n[1])},i:C,o:C,d(n){n&&c(e)}}}function E(l,e,s){let{class:n=""}=e,{checked:r=!1}=e,{name:i=""}=e;return l.$$set=m=>{"class"in m&&s(0,n=m.class),"checked"in m&&s(1,r=m.checked),"name"in m&&s(2,i=m.name)},[n,r,i]}class v extends S{constructor(e){super(),z(this,e,E,D,b,{class:0,checked:1,name:2})}}function I(l){let e,s,n,r,i,m;return e=new v({props:{name:"radio",checked:!0}}),n=new v({props:{name:"radio"}}),i=new v({props:{name:"radio"}}),{c(){p(e.$$.fragment),s=h(),p(n.$$.fragment),r=h(),p(i.$$.fragment)},l(t){_(e.$$.fragment,t),s=d(t),_(n.$$.fragment,t),r=d(t),_(i.$$.fragment,t)},m(t,f){g(e,t,f),u(t,s,f),g(n,t,f),u(t,r,f),g(i,t,f),m=!0},p:C,i(t){m||(k(e.$$.fragment,t),k(n.$$.fragment,t),k(i.$$.fragment,t),m=!0)},o(t){w(e.$$.fragment,t),w(n.$$.fragment,t),w(i.$$.fragment,t),m=!1},d(t){t&&(c(s),c(r)),x(e,t),x(n,t),x(i,t)}}}function N(l){let e,s,n="Default Usage",r,i,m,t,f;return i=new j({props:{$$slots:{default:[I]},$$scope:{ctx:l}}}),t=new q({props:{code:l[0]}}),{c(){e=h(),s=y("h3"),s.textContent=n,r=h(),p(i.$$.fragment),m=h(),p(t.$$.fragment),this.h()},l(a){P("svelte-1pebo1f",document.head).forEach(c),e=d(a),s=H(a,"H3",{class:!0,"data-svelte-h":!0}),U(s)!=="svelte-9xnfxc"&&(s.textContent=n),r=d(a),_(i.$$.fragment,a),m=d(a),_(t.$$.fragment,a),this.h()},h(){document.title="Svelte Components - Radio",$(s,"class","text-3xl mb-4")},m(a,o){u(a,e,o),u(a,s,o),u(a,r,o),g(i,a,o),u(a,m,o),g(t,a,o),f=!0},p(a,[o]){const R={};o&2&&(R.$$scope={dirty:o,ctx:a}),i.$set(R)},i(a){f||(k(i.$$.fragment,a),k(t.$$.fragment,a),f=!0)},o(a){w(i.$$.fragment,a),w(t.$$.fragment,a),f=!1},d(a){a&&(c(e),c(s),c(r),c(m)),x(i,a),x(t,a)}}}function T(l){return[`<Radio name="radio" checked />
  <Radio name="radio" />
  <Radio name="radio" />`]}class G extends S{constructor(e){super(),z(this,e,T,N,b,{})}}export{G as component};
