import"../chunks/DsnmJJEf.js";import"../chunks/BQFR7IJ-.js";import{p as C,b as o,k as b,t as x,a as r,j as P,d as w,l as H,r as y,h as T,s as l,f as c,$ as V,i as h,n as d}from"../chunks/DpSOr8JY.js";import{H as W,a as X,b as Y,c as tt}from"../chunks/D0M_yEGr.js";import{c as k,a as B,s as D,B as A}from"../chunks/CWUM8KrF.js";import{G as et}from"../chunks/Cxmrd_4M.js";var rt=o("<div><!></div>");function G(n,e){C(e,!0);var t=rt(),s=w(t);b(s,()=>e.children??H),y(t),x(a=>D(t,1,a),[()=>k(B("flex w-full flex-col rounded-md bg-white dark:bg-neutral-800",e.variant==="outlined"?"border border-gray-200 shadow-none dark:border-neutral-700":e.variant==="text"?"shadow-none":e.variant==="shadow"?"shadow":"",e.class))]),r(n,t),P()}var at=o("<div><!></div>");function L(n,e){C(e,!0);var t=at(),s=w(t);b(s,()=>e.children??H),y(t),x(a=>D(t,1,a),[()=>k(B("p-4",e.class))]),r(n,t),P()}var ot=o("<div><!></div>");function nt(n,e){C(e,!0);var t=ot(),s=w(t);b(s,()=>e.children??H),y(t),x(a=>D(t,1,a),[()=>k(B("flex h-16 w-full items-center border-t border-gray-200 px-4",e.class))]),r(n,t),P()}var st=o("<div><!></div>");function lt(n,e){C(e,!0);var t=st(),s=w(t);b(s,()=>e.children??H),y(t),x(a=>D(t,1,a),[()=>k(B("flex h-16 w-full items-center justify-between border-b border-gray-200 px-4",e.class))]),r(n,t),P()}var dt=o('<meta name="description" content="Svelte-Components"/>'),it=o("Card <!>",1),ut=o("<!> <!>",1),vt=o("<!> <!> <!>",1),ct=o("<!> <!> <!>",1),ht=o("<!> <!> <!>",1),mt=o('<h3 class="mb-4 text-3xl">Usage</h3> <!>',1);function bt(n){let e=`<Card let:Header let:Content let:Footer>
  	<Header>Card</Header>
  	<Content>
  		Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus nisi ut ullam,
  		dignissimos reprehenderit eligendi natus at. Minus, eaque possimus!
  	</Content>
  	<Footer>
  		<Button label="Accept" variant="text" />
  		<Button label="Decline" variant="text" />
  	</Footer>
  </Card>
  <Card let:Content variant="shadow">
  	<Content>Card</Content>
  </Card>
  <Card let:Content variant="outlined">
  	<Content>Card</Content>
  </Card>`;var t=mt();T(a=>{var M=dt();V.title="Svelte Components - Card",r(a,M)});var s=l(c(t),2);W(s,{children:(a,M)=>{var S=ht(),U=c(S);X(U,{children:(F,N)=>{d();var m=it(),_=l(c(m));A(_,{href:"https://github.com/Zalcherei/svelte-components/tree/main/src/lib/card",target:"_blank",children:(g,z)=>{et(g,{})},$$slots:{default:!0}}),r(F,m)},$$slots:{default:!0}});var Z=l(U,2);Y(Z,{children:(F,N)=>{var m=ct(),_=c(m);G(_,{children:(f,E)=>{var i=vt(),p=c(i);lt(p,{children:($,I)=>{d();var v=h("Card");r($,v)},$$slots:{default:!0}});var u=l(p,2);L(u,{children:($,I)=>{d();var v=h(`Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus nisi ut ullam,
				dignissimos reprehenderit eligendi natus at. Minus, eaque possimus!`);r($,v)},$$slots:{default:!0}});var O=l(u,2);nt(O,{children:($,I)=>{var v=ut(),J=c(v);A(J,{children:(j,R)=>{d();var q=h("Accept");r(j,q)},$$slots:{default:!0}});var Q=l(J,2);A(Q,{children:(j,R)=>{d();var q=h("Decline");r(j,q)},$$slots:{default:!0}}),r($,v)},$$slots:{default:!0}}),r(f,i)},$$slots:{default:!0}});var g=l(_,2);G(g,{variant:"shadow",children:(f,E)=>{L(f,{children:(i,p)=>{d();var u=h("Card");r(i,u)},$$slots:{default:!0}})},$$slots:{default:!0}});var z=l(g,2);G(z,{variant:"outlined",children:(f,E)=>{L(f,{children:(i,p)=>{d();var u=h("Card");r(i,u)},$$slots:{default:!0}})},$$slots:{default:!0}}),r(F,m)},$$slots:{default:!0}});var K=l(Z,2);tt(K,{code:e}),r(a,S)},$$slots:{default:!0}}),r(n,t)}export{bt as component};
