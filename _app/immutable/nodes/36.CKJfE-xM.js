import{s as P,e as S,f as b,j as l,i as C,n as D,d as f,a as $,h as N,c as p,g as H,k as g}from"../chunks/scheduler.u0m9llaP.js";import{S as V,i as q,c as _,a as v,m as k,t as y,b as w,d as R}from"../chunks/index.DJSMHduw.js";import{H as T}from"../chunks/highlight.m-ViY_tW.js";function U(s){let e;return{c(){e=S("input"),this.h()},l(t){e=b(t,"INPUT",{class:!0,type:!0,name:!0}),this.h()},h(){l(e,"class","me-1 h-5 w-5 cursor-pointer"),l(e,"type","radio"),l(e,"name",s[1]),e.checked=s[0]},m(t,n){C(t,e,n)},p(t,[n]){n&2&&l(e,"name",t[1]),n&1&&(e.checked=t[0])},i:D,o:D,d(t){t&&f(e)}}}function z(s,e,t){let{checked:n=!1}=e,{name:r=""}=e;return s.$$set=i=>{"checked"in i&&t(0,n=i.checked),"name"in i&&t(1,r=i.name)},[n,r]}class I extends V{constructor(e){super(),q(this,e,z,U,P,{checked:0,name:1})}}function A(s){let e,t,n,r,i,o,x,c,j,m,h;return r=new I({props:{name:"radio",checked:!0}}),o=new I({props:{name:"radio"}}),c=new I({props:{name:"radio"}}),m=new T({props:{code:s[0]}}),{c(){e=$(),t=S("div"),n=S("div"),_(r.$$.fragment),i=$(),_(o.$$.fragment),x=$(),_(c.$$.fragment),j=$(),_(m.$$.fragment),this.h()},l(a){N("svelte-1pebo1f",document.head).forEach(f),e=p(a),t=b(a,"DIV",{class:!0});var u=H(t);n=b(u,"DIV",{class:!0});var d=H(n);v(r.$$.fragment,d),i=p(d),v(o.$$.fragment,d),x=p(d),v(c.$$.fragment,d),d.forEach(f),j=p(u),v(m.$$.fragment,u),u.forEach(f),this.h()},h(){document.title="Svelte Components - Radio",l(n,"class","flex items-center justify-center"),l(t,"class","flex flex-col justify-center")},m(a,E){C(a,e,E),C(a,t,E),g(t,n),k(r,n,null),g(n,i),k(o,n,null),g(n,x),k(c,n,null),g(t,j),k(m,t,null),h=!0},p:D,i(a){h||(y(r.$$.fragment,a),y(o.$$.fragment,a),y(c.$$.fragment,a),y(m.$$.fragment,a),h=!0)},o(a){w(r.$$.fragment,a),w(o.$$.fragment,a),w(c.$$.fragment,a),w(m.$$.fragment,a),h=!1},d(a){a&&(f(e),f(t)),R(r),R(o),R(c),R(m)}}}function B(s){return[`<Radio name="radio" checked />
  <Radio name="radio" />
  <Radio name="radio" />`]}class K extends V{constructor(e){super(),q(this,e,B,A,P,{})}}export{K as component};
