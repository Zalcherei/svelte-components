import{s as N,c as D,e as q,a as b,b as B,d as H,f as v,g,h as p,i as _,j as w,u as G,k as L,l as U,r as V,m as z,t as P,q as j,n as Z}from"../chunks/scheduler.B-4VlkRT.js";import{S as y,i as A,t as d,b as h,c as T,a as k,m as E,e as C}from"../chunks/index.DPf5UEx7.js";import{H as x}from"../chunks/highlight.CukZ5I--.js";import{B as F}from"../chunks/button.D4g53igN.js";import{G as J}from"../chunks/github.CMFx02g-.js";function K(f){let e,s,a,n,r,u,l,i,t,o;const S=f[3].default,$=D(S,f,f[2],null);return{c(){e=q("label"),s=q("input"),a=b(),n=q("div"),r=b(),u=q("div"),l=b(),i=q("span"),$&&$.c(),this.h()},l(c){e=B(c,"LABEL",{for:!0,class:!0});var m=H(e);s=B(m,"INPUT",{type:!0,id:!0,class:!0}),a=v(m),n=B(m,"DIV",{class:!0}),H(n).forEach(g),r=v(m),u=B(m,"DIV",{class:!0}),H(u).forEach(g),l=v(m),i=B(m,"SPAN",{class:!0});var I=H(i);$&&$.l(I),I.forEach(g),m.forEach(g),this.h()},h(){p(s,"type","checkbox"),p(s,"id",f[1]),p(s,"class","peer sr-only"),p(n,"class","h-4 w-10 rounded-full bg-gray-200 shadow-inner dark:bg-neutral-700"),p(u,"class","absolute h-6 w-6 rounded-full bg-white shadow transition peer-checked:translate-x-full peer-checked:bg-gray-100 dark:bg-neutral-600 peer-checked:dark:bg-neutral-500"),p(i,"class","ml-2"),p(e,"for",f[1]),p(e,"class",t="relative flex cursor-pointer items-center "+f[0])},m(c,m){_(c,e,m),w(e,s),w(e,a),w(e,n),w(e,r),w(e,u),w(e,l),w(e,i),$&&$.m(i,null),o=!0},p(c,[m]){(!o||m&2)&&p(s,"id",c[1]),$&&$.p&&(!o||m&4)&&G($,S,c,c[2],o?U(S,c[2],m,null):L(c[2]),null),(!o||m&2)&&p(e,"for",c[1]),(!o||m&1&&t!==(t="relative flex cursor-pointer items-center "+c[0]))&&p(e,"class",t)},i(c){o||(d($,c),o=!0)},o(c){h($,c),o=!1},d(c){c&&g(e),$&&$.d(c)}}}function M(f,e,s){let{$$slots:a={},$$scope:n}=e,{class:r=""}=e,{id:u=""}=e;return f.$$set=l=>{"class"in l&&s(0,r=l.class),"id"in l&&s(1,u=l.id),"$$scope"in l&&s(2,n=l.$$scope)},[r,u,n,a]}class O extends y{constructor(e){super(),A(this,e,M,K,N,{class:0,id:1})}}function Q(f){let e,s,a;return s=new F({props:{variant:"text",size:"icon",href:"https://github.com/Zalcherei/svelte-components/tree/main/src/lib/toggle",target:"_blank",icon:J}}),{c(){e=P(`Toggle
		`),T(s.$$.fragment)},l(n){e=j(n,`Toggle
		`),k(s.$$.fragment,n)},m(n,r){_(n,e,r),E(s,n,r),a=!0},p:Z,i(n){a||(d(s.$$.fragment,n),a=!0)},o(n){h(s.$$.fragment,n),a=!1},d(n){n&&g(e),C(s,n)}}}function R(f){let e;return{c(){e=P("Toggle me")},l(s){e=j(s,"Toggle me")},m(s,a){_(s,e,a)},d(s){s&&g(e)}}}function W(f){let e,s;return e=new O({props:{id:"toggle",$$slots:{default:[R]},$$scope:{ctx:f}}}),{c(){T(e.$$.fragment)},l(a){k(e.$$.fragment,a)},m(a,n){E(e,a,n),s=!0},p(a,n){const r={};n&32&&(r.$$scope={dirty:n,ctx:a}),e.$set(r)},i(a){s||(d(e.$$.fragment,a),s=!0)},o(a){h(e.$$.fragment,a),s=!1},d(a){C(e,a)}}}function X(f){let e,s,a,n,r,u,l,i;return e=new f[1]({props:{$$slots:{default:[Q]},$$scope:{ctx:f}}}),a=new f[2]({props:{class:"p-4",$$slots:{default:[W]},$$scope:{ctx:f}}}),r=new f[3]({}),l=new f[4]({props:{code:f[0]}}),{c(){T(e.$$.fragment),s=b(),T(a.$$.fragment),n=b(),T(r.$$.fragment),u=b(),T(l.$$.fragment)},l(t){k(e.$$.fragment,t),s=v(t),k(a.$$.fragment,t),n=v(t),k(r.$$.fragment,t),u=v(t),k(l.$$.fragment,t)},m(t,o){E(e,t,o),_(t,s,o),E(a,t,o),_(t,n,o),E(r,t,o),_(t,u,o),E(l,t,o),i=!0},p(t,o){const S={};o&32&&(S.$$scope={dirty:o,ctx:t}),e.$set(S);const $={};o&32&&($.$$scope={dirty:o,ctx:t}),a.$set($)},i(t){i||(d(e.$$.fragment,t),d(a.$$.fragment,t),d(r.$$.fragment,t),d(l.$$.fragment,t),i=!0)},o(t){h(e.$$.fragment,t),h(a.$$.fragment,t),h(r.$$.fragment,t),h(l.$$.fragment,t),i=!1},d(t){t&&(g(s),g(n),g(u)),C(e,t),C(a,t),C(r,t),C(l,t)}}}function Y(f){let e,s,a="Usage",n,r,u;return r=new x({props:{$$slots:{default:[X,({Header:l,Display:i,Options:t,Code:o})=>({1:l,2:i,3:t,4:o}),({Header:l,Display:i,Options:t,Code:o})=>(l?2:0)|(i?4:0)|(t?8:0)|(o?16:0)]},$$scope:{ctx:f}}}),{c(){e=b(),s=q("h3"),s.textContent=a,n=b(),T(r.$$.fragment),this.h()},l(l){V("svelte-rjglqa",document.head).forEach(g),e=v(l),s=B(l,"H3",{class:!0,"data-svelte-h":!0}),z(s)!=="svelte-evlmx"&&(s.textContent=a),n=v(l),k(r.$$.fragment,l),this.h()},h(){document.title="Svelte Components - Toggle",p(s,"class","mb-4 text-3xl")},m(l,i){_(l,e,i),_(l,s,i),_(l,n,i),E(r,l,i),u=!0},p(l,[i]){const t={};i&32&&(t.$$scope={dirty:i,ctx:l}),r.$set(t)},i(l){u||(d(r.$$.fragment,l),u=!0)},o(l){h(r.$$.fragment,l),u=!1},d(l){l&&(g(e),g(s),g(n)),C(r,l)}}}function ee(f){return['<Toggle id="toggle">Toggle me</Toggle>']}class re extends y{constructor(e){super(),A(this,e,ee,Y,N,{})}}export{re as component};
