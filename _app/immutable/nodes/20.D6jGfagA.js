import{s as V,e as k,a as h,b as B,d as z,g as $,f as _,h as p,H,i as E,j as D,B as S,r as q,m as G,t as U,q as L,n as j}from"../chunks/scheduler.B-4VlkRT.js";import{S as N,i as P,c as v,a as b,m as w,t as y,b as x,e as C}from"../chunks/index.DPf5UEx7.js";import{B as M}from"../chunks/button.D4g53igN.js";import{G as R}from"../chunks/github.CMFx02g-.js";import{C as T,a as Z}from"../chunks/chevron-right.Tw_XolKR.js";import{H as A}from"../chunks/highlight.CukZ5I--.js";function F(f){let t,r,a,s,l,m,n,o,e,i,g,d;return e=new T({}),g=new Z({}),{c(){t=k("div"),r=k("div"),a=h(),s=k("div"),l=h(),m=k("input"),n=h(),o=k("div"),v(e.$$.fragment),i=h(),v(g.$$.fragment),this.h()},l(u){t=B(u,"DIV",{class:!0});var c=z(t);r=B(c,"DIV",{class:!0,style:!0}),z(r).forEach($),a=_(c),s=B(c,"DIV",{class:!0,style:!0}),z(s).forEach($),l=_(c),m=B(c,"INPUT",{id:!0,class:!0,name:!0,type:!0,min:!0,max:!0}),n=_(c),o=B(c,"DIV",{class:!0});var I=z(o);b(e.$$.fragment,I),i=_(I),b(g.$$.fragment,I),I.forEach($),c.forEach($),this.h()},h(){p(r,"class","image background-image absolute left-0 top-0 h-full w-full bg-cover bg-center blur-sm grayscale"),H(r,"background","url('"+f[0]+"')"),p(s,"class","image foreground-image absolute left-0 top-0 h-full w-1/2 bg-cover bg-center saturate-150"),H(s,"background","url('"+f[1]+"')"),p(m,"id","range-slider"),p(m,"class","range-slider absolute z-10 m-0 flex h-full w-full appearance-none items-center justify-center bg-gray-200 bg-opacity-20 outline-none svelte-15gfmmn"),p(m,"name","slider"),p(m,"type","range"),p(m,"min","1"),p(m,"max","100"),m.value="50",p(o,"class","slider-control relative left-1/2 top-1/2 flex h-12 w-12 -translate-x-[60%] -translate-y-[60%] cursor-ew-resize items-center justify-center rounded-full bg-white"),p(t,"class","image-slider-container relative h-[300px] w-full max-w-[800px] overflow-hidden rounded-md")},m(u,c){E(u,t,c),D(t,r),D(t,a),D(t,s),D(t,l),D(t,m),D(t,n),D(t,o),w(e,o,null),D(o,i),w(g,o,null),d=!0},p(u,[c]){(!d||c&1)&&H(r,"background","url('"+u[0]+"')"),(!d||c&2)&&H(s,"background","url('"+u[1]+"')")},i(u){d||(y(e.$$.fragment,u),y(g.$$.fragment,u),d=!0)},o(u){x(e.$$.fragment,u),x(g.$$.fragment,u),d=!1},d(u){u&&$(t),C(e),C(g)}}}function J(f,t,r){let{compare:a=""}=t,{compared:s=""}=t;return S(()=>{const l=document.getElementById("range-slider"),m=document.getElementsByClassName("image")[1],n=document.getElementsByClassName("slider-control")[0];l.addEventListener("input",o=>{const i=o.target.value;m.style.width=i+"%",n.style.left=i+"%"})}),f.$$set=l=>{"compare"in l&&r(0,a=l.compare),"compared"in l&&r(1,s=l.compared)},[a,s]}class K extends N{constructor(t){super(),P(this,t,J,F,V,{compare:0,compared:1})}}function O(f){let t,r,a;return r=new M({props:{variant:"text",size:"icon",href:"https://github.com/Zalcherei/svelte-components/tree/main/src/lib/diff",target:"_blank",icon:R}}),{c(){t=U(`Diff
		`),v(r.$$.fragment)},l(s){t=L(s,`Diff
		`),b(r.$$.fragment,s)},m(s,l){E(s,t,l),w(r,s,l),a=!0},p:j,i(s){a||(y(r.$$.fragment,s),a=!0)},o(s){x(r.$$.fragment,s),a=!1},d(s){s&&$(t),C(r,s)}}}function Q(f){let t,r;return t=new K({props:{compare:"https://picsum.photos/id/800/800/300",compared:"https://picsum.photos/id/800/800/300"}}),{c(){v(t.$$.fragment)},l(a){b(t.$$.fragment,a)},m(a,s){w(t,a,s),r=!0},p:j,i(a){r||(y(t.$$.fragment,a),r=!0)},o(a){x(t.$$.fragment,a),r=!1},d(a){C(t,a)}}}function W(f){let t,r,a,s,l,m,n,o;return t=new f[1]({props:{$$slots:{default:[O]},$$scope:{ctx:f}}}),a=new f[2]({props:{class:"p-4",$$slots:{default:[Q]},$$scope:{ctx:f}}}),l=new f[3]({}),n=new f[4]({props:{code:f[0]}}),{c(){v(t.$$.fragment),r=h(),v(a.$$.fragment),s=h(),v(l.$$.fragment),m=h(),v(n.$$.fragment)},l(e){b(t.$$.fragment,e),r=_(e),b(a.$$.fragment,e),s=_(e),b(l.$$.fragment,e),m=_(e),b(n.$$.fragment,e)},m(e,i){w(t,e,i),E(e,r,i),w(a,e,i),E(e,s,i),w(l,e,i),E(e,m,i),w(n,e,i),o=!0},p(e,i){const g={};i&32&&(g.$$scope={dirty:i,ctx:e}),t.$set(g);const d={};i&32&&(d.$$scope={dirty:i,ctx:e}),a.$set(d)},i(e){o||(y(t.$$.fragment,e),y(a.$$.fragment,e),y(l.$$.fragment,e),y(n.$$.fragment,e),o=!0)},o(e){x(t.$$.fragment,e),x(a.$$.fragment,e),x(l.$$.fragment,e),x(n.$$.fragment,e),o=!1},d(e){e&&($(r),$(s),$(m)),C(t,e),C(a,e),C(l,e),C(n,e)}}}function X(f){let t,r,a="Usage",s,l,m;return l=new A({props:{$$slots:{default:[W,({Header:n,Display:o,Options:e,Code:i})=>({1:n,2:o,3:e,4:i}),({Header:n,Display:o,Options:e,Code:i})=>(n?2:0)|(o?4:0)|(e?8:0)|(i?16:0)]},$$scope:{ctx:f}}}),{c(){t=h(),r=k("h3"),r.textContent=a,s=h(),v(l.$$.fragment),this.h()},l(n){q("svelte-c9za69",document.head).forEach($),t=_(n),r=B(n,"H3",{class:!0,"data-svelte-h":!0}),G(r)!=="svelte-evlmx"&&(r.textContent=a),s=_(n),b(l.$$.fragment,n),this.h()},h(){document.title="Svelte Components - Diff",p(r,"class","mb-4 text-3xl")},m(n,o){E(n,t,o),E(n,r,o),E(n,s,o),w(l,n,o),m=!0},p(n,[o]){const e={};o&32&&(e.$$scope={dirty:o,ctx:n}),l.$set(e)},i(n){m||(y(l.$$.fragment,n),m=!0)},o(n){x(l.$$.fragment,n),m=!1},d(n){n&&($(t),$(r),$(s)),C(l,n)}}}function Y(f){return[`<Diff
    compare="https://picsum.photos/id/800/800/300"
    compared="https://picsum.photos/id/800/800/300"
  />`]}class le extends N{constructor(t){super(),P(this,t,Y,X,V,{})}}export{le as component};
