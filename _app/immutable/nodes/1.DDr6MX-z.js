import{s as S,e as _,t as f,a as q,b as d,d as g,q as h,g as u,f as x,i as m,j as v,z as $,n as E,A as j}from"../chunks/scheduler.B6pFFlPJ.js";import{S as y,i as z}from"../chunks/index.kzjZIB-f.js";import{s as A}from"../chunks/entry.CzMHVuC-.js";const C=()=>{const s=A;return{page:{subscribe:s.page.subscribe},navigating:{subscribe:s.navigating.subscribe},updated:s.updated}},H={subscribe(s){return C().page.subscribe(s)}};function P(s){var b;let t,r=s[0].status+"",o,n,i,c=((b=s[0].error)==null?void 0:b.message)+"",l;return{c(){t=_("h1"),o=f(r),n=q(),i=_("p"),l=f(c)},l(e){t=d(e,"H1",{});var a=g(t);o=h(a,r),a.forEach(u),n=x(e),i=d(e,"P",{});var p=g(i);l=h(p,c),p.forEach(u)},m(e,a){m(e,t,a),v(t,o),m(e,n,a),m(e,i,a),v(i,l)},p(e,[a]){var p;a&1&&r!==(r=e[0].status+"")&&$(o,r),a&1&&c!==(c=((p=e[0].error)==null?void 0:p.message)+"")&&$(l,c)},i:E,o:E,d(e){e&&(u(t),u(n),u(i))}}}function k(s,t,r){let o;return j(s,H,n=>r(0,o=n)),[o]}let F=class extends y{constructor(t){super(),z(this,t,k,P,S,{})}};export{F as component};
