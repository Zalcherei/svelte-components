import{s as $,a as q}from"../chunks/scheduler.DAv3NNv8.js";import{S as E,i as S,s as k,e as u,h as V,d as i,c as y,a as h,j as w,g as T,m,b,n as p,p as H,q as _,r as C,u as L,w as I,x as M}from"../chunks/index.BwQtvBWl.js";import{f as D}from"../chunks/index.BNwjF5gm.js";function j(o){let a,n='<a class="flex h-10 items-center px-4 hover:bg-gray-100 dark:hover:bg-neutral-700" href="/">Item 1</a> <a class="flex h-10 items-center px-4 hover:bg-gray-100 dark:hover:bg-neutral-700" href="/">Item 2</a> <a class="flex h-10 items-center px-4 hover:bg-gray-100 dark:hover:bg-neutral-700" href="/">Item 3</a> <a class="flex h-10 items-center px-4 hover:bg-gray-100 dark:hover:bg-neutral-700" href="/">Item 4</a>',e,r;return{c(){a=u("div"),a.innerHTML=n,this.h()},l(s){a=h(s,"DIV",{class:!0,"data-svelte-h":!0}),T(a)!=="svelte-1jp8mq6"&&(a.innerHTML=n),this.h()},h(){m(a,"class","absolute flex flex-col overflow-hidden rounded-md bg-white shadow dark:bg-neutral-800")},m(s,c){b(s,a,c),r=!0},i(s){r||(s&&q(()=>{r&&(e||(e=I(a,D,{},!0)),e.run(1))}),r=!0)},o(s){s&&(e||(e=I(a,D,{},!1)),e.run(0)),r=!1},d(s){s&&i(a),s&&e&&e.end()}}}function B(o){let a,n,e,r,s="Dropdown",c,v,g,t=o[0]&&j();return{c(){a=k(),n=u("div"),e=u("div"),r=u("button"),r.textContent=s,c=k(),t&&t.c(),this.h()},l(l){V("svelte-i1dlab",document.head).forEach(i),a=y(l),n=h(l,"DIV",{class:!0});var x=w(n);e=h(x,"DIV",{class:!0});var f=w(e);r=h(f,"BUTTON",{class:!0,"data-svelte-h":!0}),T(r)!=="svelte-3aysu5"&&(r.textContent=s),c=y(f),t&&t.l(f),f.forEach(i),x.forEach(i),this.h()},h(){document.title="Svelte Components - Dropdown",m(r,"class","me-1 inline-flex h-10 min-w-10 items-center justify-center rounded-md bg-white px-4 transition hover:bg-gray-100 dark:bg-neutral-800"),m(e,"class","relative"),m(n,"class","flex justify-center")},m(l,d){b(l,a,d),b(l,n,d),p(n,e),p(e,r),p(e,c),t&&t.m(e,null),v||(g=H(r,"click",o[1]),v=!0)},p(l,[d]){l[0]?t?d&1&&_(t,1):(t=j(),t.c(),_(t,1),t.m(e,null)):t&&(M(),C(t,1,1,()=>{t=null}),L())},i(l){_(t)},o(l){C(t)},d(l){l&&(i(a),i(n)),t&&t.d(),v=!1,g()}}}function N(o,a,n){let e=!1;return[e,()=>{n(0,e=!e)}]}class z extends E{constructor(a){super(),S(this,a,N,B,$,{})}}export{z as component};
