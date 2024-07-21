import{s as S,e as I,a as h,b as B,d as q,f as v,g as m,h as D,i as b,j as N,c as P,u as U,k as Z,l as A,y as F,r as J,m as K,t as L,q as M,n as G}from"../chunks/scheduler.B-4VlkRT.js";import{S as V,i as j,c as p,a as _,m as d,t as $,g as O,b as c,d as Q,e as g,f as z}from"../chunks/index.DPf5UEx7.js";import{b as k}from"../chunks/paths.D0nBK4Uj.js";import{B as w}from"../chunks/button.D4g53igN.js";import{f as E}from"../chunks/index.CVjbi-4F.js";import{H as R}from"../chunks/highlight.CukZ5I--.js";import{G as T}from"../chunks/github.CMFx02g-.js";function H(u){let n,a,l,s;const r=u[6].default,f=P(r,u,u[5],null);return{c(){n=I("div"),f&&f.c(),this.h()},l(t){n=B(t,"DIV",{class:!0});var o=q(n);f&&f.l(o),o.forEach(m),this.h()},h(){D(n,"class",a="absolute z-50 flex flex-col overflow-hidden rounded-md bg-white shadow dark:bg-neutral-800 [&>a]:rounded-none [&>button]:rounded-none "+u[0])},m(t,o){b(t,n,o),f&&f.m(n,null),s=!0},p(t,o){f&&f.p&&(!s||o&32)&&U(f,r,t,t[5],s?A(r,t[5],o,null):Z(t[5]),null),(!s||o&1&&a!==(a="absolute z-50 flex flex-col overflow-hidden rounded-md bg-white shadow dark:bg-neutral-800 [&>a]:rounded-none [&>button]:rounded-none "+t[0]))&&D(n,"class",a)},i(t){s||($(f,t),t&&F(()=>{s&&(l||(l=z(n,E,{},!0)),l.run(1))}),s=!0)},o(t){c(f,t),t&&(l||(l=z(n,E,{},!1)),l.run(0)),s=!1},d(t){t&&m(n),f&&f.d(t),t&&l&&l.end()}}}function W(u){let n,a,l,s;a=new w({props:{variant:u[2],label:u[1]}}),a.$on("click",u[4]);let r=u[3]&&H(u);return{c(){n=I("div"),p(a.$$.fragment),l=h(),r&&r.c(),this.h()},l(f){n=B(f,"DIV",{class:!0});var t=q(n);_(a.$$.fragment,t),l=v(t),r&&r.l(t),t.forEach(m),this.h()},h(){D(n,"class","relative")},m(f,t){b(f,n,t),d(a,n,null),N(n,l),r&&r.m(n,null),s=!0},p(f,[t]){const o={};t&4&&(o.variant=f[2]),t&2&&(o.label=f[1]),a.$set(o),f[3]?r?(r.p(f,t),t&8&&$(r,1)):(r=H(f),r.c(),$(r,1),r.m(n,null)):r&&(O(),c(r,1,1,()=>{r=null}),Q())},i(f){s||($(a.$$.fragment,f),$(r),s=!0)},o(f){c(a.$$.fragment,f),c(r),s=!1},d(f){f&&m(n),g(a),r&&r.d()}}}function X(u,n,a){let{$$slots:l={},$$scope:s}=n,{class:r=""}=n,{label:f=""}=n,{variant:t=""}=n,o=!1;const e=()=>{a(3,o=!o)};return u.$$set=i=>{"class"in i&&a(0,r=i.class),"label"in i&&a(1,f=i.label),"variant"in i&&a(2,t=i.variant),"$$scope"in i&&a(5,s=i.$$scope)},[r,f,t,o,e,s,l]}class Y extends V{constructor(n){super(),j(this,n,X,W,S,{class:0,label:1,variant:2})}}function y(u){let n,a,l;return a=new w({props:{variant:"text",size:"icon",href:"https://github.com/Zalcherei/svelte-components/tree/main/src/lib/dropdown",target:"_blank",icon:T}}),{c(){n=L(`Dropdown
		`),p(a.$$.fragment)},l(s){n=M(s,`Dropdown
		`),_(a.$$.fragment,s)},m(s,r){b(s,n,r),d(a,s,r),l=!0},p:G,i(s){l||($(a.$$.fragment,s),l=!0)},o(s){c(a.$$.fragment,s),l=!1},d(s){s&&m(n),g(a,s)}}}function ee(u){let n,a,l,s,r,f,t,o;return n=new w({props:{variant:"text",label:"Item 1",href:k+"/"}}),l=new w({props:{variant:"text",label:"Item 2",href:k+"/"}}),r=new w({props:{variant:"text",label:"Item 3",href:k+"/"}}),t=new w({props:{variant:"text",label:"Item 4",href:k+"/"}}),{c(){p(n.$$.fragment),a=h(),p(l.$$.fragment),s=h(),p(r.$$.fragment),f=h(),p(t.$$.fragment)},l(e){_(n.$$.fragment,e),a=v(e),_(l.$$.fragment,e),s=v(e),_(r.$$.fragment,e),f=v(e),_(t.$$.fragment,e)},m(e,i){d(n,e,i),b(e,a,i),d(l,e,i),b(e,s,i),d(r,e,i),b(e,f,i),d(t,e,i),o=!0},p:G,i(e){o||($(n.$$.fragment,e),$(l.$$.fragment,e),$(r.$$.fragment,e),$(t.$$.fragment,e),o=!0)},o(e){c(n.$$.fragment,e),c(l.$$.fragment,e),c(r.$$.fragment,e),c(t.$$.fragment,e),o=!1},d(e){e&&(m(a),m(s),m(f)),g(n,e),g(l,e),g(r,e),g(t,e)}}}function te(u){let n,a;return n=new Y({props:{label:"Dropdown",$$slots:{default:[ee]},$$scope:{ctx:u}}}),{c(){p(n.$$.fragment)},l(l){_(n.$$.fragment,l)},m(l,s){d(n,l,s),a=!0},p(l,s){const r={};s&32&&(r.$$scope={dirty:s,ctx:l}),n.$set(r)},i(l){a||($(n.$$.fragment,l),a=!0)},o(l){c(n.$$.fragment,l),a=!1},d(l){g(n,l)}}}function ne(u){let n,a,l,s,r,f,t,o;return n=new u[1]({props:{$$slots:{default:[y]},$$scope:{ctx:u}}}),l=new u[2]({props:{$$slots:{default:[te]},$$scope:{ctx:u}}}),r=new u[3]({}),t=new u[4]({props:{code:u[0]}}),{c(){p(n.$$.fragment),a=h(),p(l.$$.fragment),s=h(),p(r.$$.fragment),f=h(),p(t.$$.fragment)},l(e){_(n.$$.fragment,e),a=v(e),_(l.$$.fragment,e),s=v(e),_(r.$$.fragment,e),f=v(e),_(t.$$.fragment,e)},m(e,i){d(n,e,i),b(e,a,i),d(l,e,i),b(e,s,i),d(r,e,i),b(e,f,i),d(t,e,i),o=!0},p(e,i){const C={};i&32&&(C.$$scope={dirty:i,ctx:e}),n.$set(C);const x={};i&32&&(x.$$scope={dirty:i,ctx:e}),l.$set(x)},i(e){o||($(n.$$.fragment,e),$(l.$$.fragment,e),$(r.$$.fragment,e),$(t.$$.fragment,e),o=!0)},o(e){c(n.$$.fragment,e),c(l.$$.fragment,e),c(r.$$.fragment,e),c(t.$$.fragment,e),o=!1},d(e){e&&(m(a),m(s),m(f)),g(n,e),g(l,e),g(r,e),g(t,e)}}}function re(u){let n,a,l="Usage",s,r,f;return r=new R({props:{$$slots:{default:[ne,({Header:t,Display:o,Options:e,Code:i})=>({1:t,2:o,3:e,4:i}),({Header:t,Display:o,Options:e,Code:i})=>(t?2:0)|(o?4:0)|(e?8:0)|(i?16:0)]},$$scope:{ctx:u}}}),{c(){n=h(),a=I("h3"),a.textContent=l,s=h(),p(r.$$.fragment),this.h()},l(t){J("svelte-i1dlab",document.head).forEach(m),n=v(t),a=B(t,"H3",{class:!0,"data-svelte-h":!0}),K(a)!=="svelte-evlmx"&&(a.textContent=l),s=v(t),_(r.$$.fragment,t),this.h()},h(){document.title="Svelte Components - Dropdown",D(a,"class","mb-4 text-3xl")},m(t,o){b(t,n,o),b(t,a,o),b(t,s,o),d(r,t,o),f=!0},p(t,[o]){const e={};o&32&&(e.$$scope={dirty:o,ctx:t}),r.$set(e)},i(t){f||($(r.$$.fragment,t),f=!0)},o(t){c(r.$$.fragment,t),f=!1},d(t){t&&(m(n),m(a),m(s)),g(r,t)}}}function ae(u){return[`<Dropdown label="Dropdown">
  	<Button variant="text" label="Item 1" href="/" />
  	<Button variant="text" label="Item 2" href="/" />
  	<Button variant="text" label="Item 3" href="/" />
  	<Button variant="text" label="Item 4" href="/" />
  </Dropdown>`]}class me extends V{constructor(n){super(),j(this,n,ae,re,S,{})}}export{me as component};
