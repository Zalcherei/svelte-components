import{s as M,e as u,t as k,f as h,g as p,b as z,d as m,j as _,i as g,k as $,y as H,n as v,D as q,a as w,h as P,c as S}from"../chunks/scheduler.u0m9llaP.js";import{S as j,i as T,c as D,a as x,m as y,t as I,b as C,d as E}from"../chunks/index.DJSMHduw.js";import{H as A}from"../chunks/highlight.m-ViY_tW.js";function B(i){let t,e=i[1](i[0])+"",a;return{c(){t=u("div"),a=k(e),this.h()},l(n){t=h(n,"DIV",{class:!0});var s=p(t);a=z(s,e),s.forEach(m),this.h()},h(){_(t,"class","")},m(n,s){g(n,t,s),$(t,a)},p(n,[s]){s&1&&e!==(e=n[1](n[0])+"")&&H(a,e)},i:v,o:v,d(n){n&&m(t)}}}function F(i,t,e){let{timer:a=0}=t,n=new Date(new Date().getTime()+a),s=n-new Date,o;const d=()=>{e(0,s=n-new Date),s<=0&&(clearInterval(o),e(0,s=0))};q(()=>(o=setInterval(d,1e3),()=>clearInterval(o)));const r=c=>{const l=Math.floor(c/1e3),f=l%60,V=Math.floor(l/60)%60,b=Math.floor(l/3600);return`${String(b).padStart(2,"0")}:${String(V).padStart(2,"0")}:${String(f).padStart(2,"0")}`};return i.$$set=c=>{"timer"in c&&e(2,a=c.timer)},[s,r,a]}class G extends j{constructor(t){super(),T(this,t,F,B,M,{timer:2})}}function J(i){let t,e,a,n,s,o,d;return n=new G({props:{timer:6e4}}),o=new A({props:{code:i[0]}}),{c(){t=w(),e=u("div"),a=u("div"),D(n.$$.fragment),s=w(),D(o.$$.fragment),this.h()},l(r){P("svelte-4kzapz",document.head).forEach(m),t=S(r),e=h(r,"DIV",{class:!0});var l=p(e);a=h(l,"DIV",{class:!0});var f=p(a);x(n.$$.fragment,f),f.forEach(m),s=S(l),x(o.$$.fragment,l),l.forEach(m),this.h()},h(){document.title="Svelte Components - Countdown",_(a,"class","flex items-center justify-center"),_(e,"class","flex flex-col justify-center")},m(r,c){g(r,t,c),g(r,e,c),$(e,a),y(n,a,null),$(e,s),y(o,e,null),d=!0},p:v,i(r){d||(I(n.$$.fragment,r),I(o.$$.fragment,r),d=!0)},o(r){C(n.$$.fragment,r),C(o.$$.fragment,r),d=!1},d(r){r&&(m(t),m(e)),E(n),E(o)}}}function K(i){return["<Countdown timer={60000} />"]}class Q extends j{constructor(t){super(),T(this,t,K,J,M,{})}}export{Q as component};
