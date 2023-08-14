var _e=Object.defineProperty;var ge=(e,t,n)=>t in e?_e(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var X=(e,t,n)=>(ge(e,typeof t!="symbol"?t+"":t,n),n);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))l(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&l(c)}).observe(document,{childList:!0,subtree:!0});function n(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function l(s){if(s.ep)return;s.ep=!0;const o=n(s);fetch(s.href,o)}})();function L(){}function fe(e){return e()}function ie(){return Object.create(null)}function P(e){e.forEach(fe)}function de(e){return typeof e=="function"}function V(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function be(e){return Object.keys(e).length===0}function a(e,t){e.appendChild(t)}function H(e,t,n){e.insertBefore(t,n||null)}function B(e){e.parentNode&&e.parentNode.removeChild(e)}function we(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function h(e){return document.createElement(e)}function Z(e){return document.createTextNode(e)}function x(){return Z(" ")}function j(e,t,n,l){return e.addEventListener(t,n,l),()=>e.removeEventListener(t,n,l)}function u(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function ve(e){return Array.from(e.childNodes)}function re(e,t){t=""+t,e.data!==t&&(e.data=t)}function N(e,t){e.value=t??""}function q(e,t,n){e.classList.toggle(t,!!n)}function ye(e,t,{bubbles:n=!1,cancelable:l=!1}={}){return new CustomEvent(e,{detail:t,bubbles:n,cancelable:l})}let I;function D(e){I=e}function Oe(){if(!I)throw new Error("Function called outside component initialization");return I}function pe(){const e=Oe();return(t,n,{cancelable:l=!1}={})=>{const s=e.$$.callbacks[t];if(s){const o=ye(t,n,{cancelable:l});return s.slice().forEach(c=>{c.call(e,o)}),!o.defaultPrevented}return!0}}const S=[],k=[];let A=[];const ee=[],Ce=Promise.resolve();let te=!1;function xe(){te||(te=!0,Ce.then(me))}function ne(e){A.push(e)}function Ee(e){ee.push(e)}const Y=new Set;let T=0;function me(){if(T!==0)return;const e=I;do{try{for(;T<S.length;){const t=S[T];T++,D(t),$e(t.$$)}}catch(t){throw S.length=0,T=0,t}for(D(null),S.length=0,T=0;k.length;)k.pop()();for(let t=0;t<A.length;t+=1){const n=A[t];Y.has(n)||(Y.add(n),n())}A.length=0}while(S.length);for(;ee.length;)ee.pop()();te=!1,Y.clear(),D(e)}function $e(e){if(e.fragment!==null){e.update(),P(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(ne)}}function je(e){const t=[],n=[];A.forEach(l=>e.indexOf(l)===-1?t.push(l):n.push(l)),n.forEach(l=>l()),A=t}const F=new Set;let Me;function K(e,t){e&&e.i&&(F.delete(e),e.i(t))}function le(e,t,n,l){if(e&&e.o){if(F.has(e))return;F.add(e),Me.c.push(()=>{F.delete(e),l&&(n&&e.d(1),l())}),e.o(t)}else l&&l()}function ue(e){return(e==null?void 0:e.length)!==void 0?e:Array.from(e)}function Le(e,t,n){const l=e.$$.props[t];l!==void 0&&(e.$$.bound[l]=n,n(e.$$.ctx[l]))}function oe(e){e&&e.c()}function R(e,t,n){const{fragment:l,after_update:s}=e.$$;l&&l.m(t,n),ne(()=>{const o=e.$$.on_mount.map(fe).filter(de);e.$$.on_destroy?e.$$.on_destroy.push(...o):P(o),e.$$.on_mount=[]}),s.forEach(ne)}function U(e,t){const n=e.$$;n.fragment!==null&&(je(n.after_update),P(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function ke(e,t){e.$$.dirty[0]===-1&&(S.push(e),xe(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function G(e,t,n,l,s,o,c,p=[-1]){const d=I;D(e);const i=e.$$={fragment:null,ctx:[],props:o,update:L,not_equal:s,bound:ie(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(d?d.$$.context:[])),callbacks:ie(),dirty:p,skip_bound:!1,root:t.target||d.$$.root};c&&c(i.root);let v=!1;if(i.ctx=n?n(e,t.props||{},(r,g,...f)=>{const b=f.length?f[0]:g;return i.ctx&&s(i.ctx[r],i.ctx[r]=b)&&(!i.skip_bound&&i.bound[r]&&i.bound[r](b),v&&ke(e,r)),g}):[],i.update(),v=!0,P(i.before_update),i.fragment=l?l(i.ctx):!1,t.target){if(t.hydrate){const r=ve(t.target);i.fragment&&i.fragment.l(r),r.forEach(B)}else i.fragment&&i.fragment.c();t.intro&&K(e.$$.fragment),R(e,t.target,t.anchor),me()}D(d)}class J{constructor(){X(this,"$$");X(this,"$$set")}$destroy(){U(this,1),this.$destroy=L}$on(t,n){if(!de(n))return L;const l=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return l.push(n),()=>{const s=l.indexOf(n);s!==-1&&l.splice(s,1)}}$set(t){this.$$set&&!be(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const Ne="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(Ne);function Te(e){let t,n,l,s,o,c,p,d,i,v,r,g,f,b,w,y;return{c(){t=h("dialog"),n=h("form"),l=h("button"),l.textContent="✕",s=x(),o=h("h3"),o.textContent="Create New Memo",c=x(),p=h("input"),d=x(),i=h("input"),v=x(),r=h("textarea"),g=x(),f=h("div"),b=h("button"),b.textContent="create",u(l,"class","btn btn-sm btn-circle btn-ghost absolute right-2 top-2"),u(o,"class","font-bold text-lg"),u(p,"type","text"),u(p,"placeholder","Title"),u(p,"class","input input-bordered input-accent w-full max-w-xs"),u(i,"type","text"),u(i,"placeholder","SubTitle"),u(i,"class","input input-bordered input-accent w-full max-w-xs"),u(r,"class","textarea textarea-accent w-full max-w-xs h-64 resize-none"),u(r,"placeholder","Contents"),u(b,"class","btn"),u(f,"class","modal-action"),u(n,"method","dialog"),u(n,"class","modal-box"),u(t,"class","modal"),q(t,"modal-open",e[0])},m(_,O){H(_,t,O),a(t,n),a(n,l),a(n,s),a(n,o),a(n,c),a(n,p),N(p,e[1]),a(n,d),a(n,i),N(i,e[2]),a(n,v),a(n,r),N(r,e[3]),a(n,g),a(n,f),a(f,b),w||(y=[j(l,"click",e[4]),j(p,"input",e[6]),j(i,"input",e[7]),j(r,"input",e[8]),j(b,"click",e[4])],w=!0)},p(_,[O]){O&2&&p.value!==_[1]&&N(p,_[1]),O&4&&i.value!==_[2]&&N(i,_[2]),O&8&&N(r,_[3]),O&1&&q(t,"modal-open",_[0])},i:L,o:L,d(_){_&&B(t),w=!1,P(y)}}}function Se(e,t,n){let{isOpen:l=!1}=t;const s=pe(),o=()=>{n(5,i={title:c,subtitle:p,contents:d}),s("closeEvent"),n(1,c=""),n(2,p=""),n(3,d="")};let c="",p="",d="",{memo_obj:i={}}=t;function v(){c=this.value,n(1,c)}function r(){p=this.value,n(2,p)}function g(){d=this.value,n(3,d)}return e.$$set=f=>{"isOpen"in f&&n(0,l=f.isOpen),"memo_obj"in f&&n(5,i=f.memo_obj)},[l,c,p,d,o,i,v,r,g]}class Ae extends J{constructor(t){super(),G(this,t,Se,Te,V,{isOpen:0,memo_obj:5})}}function Pe(e){let t,n,l,s,o,c,p,d,i,v,r,g,f,b;return{c(){t=h("dialog"),n=h("form"),l=h("button"),l.textContent="✕",s=x(),o=h("input"),p=x(),d=h("input"),v=x(),r=h("textarea"),u(l,"class","btn btn-sm btn-circle btn-ghost absolute right-2 top-2"),u(o,"type","text"),u(o,"placeholder","Title"),u(o,"class","input input-bordered input-accent w-full max-w-xs"),o.value=c=e[1].title,u(d,"type","text"),u(d,"placeholder","SubTitle"),u(d,"class","input input-bordered input-accent w-full max-w-xs"),d.value=i=e[1].subtitle,u(r,"class","textarea textarea-accent w-full max-w-xs h-64 resize-none"),u(r,"placeholder","Contents"),r.value=g=e[1].contents,u(n,"method","dialog"),u(n,"class","modal-box"),u(t,"class","modal"),q(t,"modal-open",e[0])},m(w,y){H(w,t,y),a(t,n),a(n,l),a(n,s),a(n,o),e[6](o),a(n,p),a(n,d),e[7](d),a(n,v),a(n,r),e[8](r),f||(b=j(l,"click",e[5]),f=!0)},p(w,[y]){y&2&&c!==(c=w[1].title)&&o.value!==c&&(o.value=c),y&2&&i!==(i=w[1].subtitle)&&d.value!==i&&(d.value=i),y&2&&g!==(g=w[1].contents)&&(r.value=g),y&1&&q(t,"modal-open",w[0])},i:L,o:L,d(w){w&&B(t),e[6](null),e[7](null),e[8](null),f=!1,b()}}}function Be(e,t,n){let{isOpen:l=!1}=t,{aaa:s={}}=t,o,c,p;const d=pe(),i=()=>{const f={title:o.value,subtitle:c.value,contents:p.value};d("closeEvent",{new_memo:f})};function v(f){k[f?"unshift":"push"](()=>{o=f,n(2,o)})}function r(f){k[f?"unshift":"push"](()=>{c=f,n(3,c)})}function g(f){k[f?"unshift":"push"](()=>{p=f,n(4,p)})}return e.$$set=f=>{"isOpen"in f&&n(0,l=f.isOpen),"aaa"in f&&n(1,s=f.aaa)},[l,s,o,c,p,i,v,r,g]}class De extends J{constructor(t){super(),G(this,t,Be,Pe,V,{isOpen:0,aaa:1})}}function ae(e,t,n){const l=e.slice();return l[14]=t[n],l[16]=n,l}function ce(e){let t,n,l,s=e[14].title+"",o,c,p,d=e[14].subtitle+"",i,v,r,g,f,b,w,y,_,O,C;function Q(){return e[10](e[16])}function z(){return e[11](e[16])}return{c(){t=h("div"),n=h("div"),l=h("h2"),o=Z(s),c=x(),p=h("p"),i=Z(d),v=x(),r=h("div"),g=h("div"),f=h("button"),f.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"></path></svg>',b=x(),w=h("div"),y=h("button"),y.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"></path></svg>',_=x(),u(l,"class","card-title"),u(f,"class","btn"),u(g,"class","tooltip"),u(g,"data-tip","delete"),u(y,"class","btn"),u(w,"class","tooltip"),u(w,"data-tip","open"),u(r,"class","card-actions justify-end"),u(n,"class","card-body"),u(t,"class","card w-80 h-48 my-8 bg-neutrals border-2 border-accent text-primary-content")},m(m,E){H(m,t,E),a(t,n),a(n,l),a(l,o),a(n,c),a(n,p),a(p,i),a(n,v),a(n,r),a(r,g),a(g,f),a(r,b),a(r,w),a(w,y),a(t,_),O||(C=[j(f,"click",Q),j(y,"click",z)],O=!0)},p(m,E){e=m,E&2&&s!==(s=e[14].title+"")&&re(o,s),E&2&&d!==(d=e[14].subtitle+"")&&re(i,d)},d(m){m&&B(t),O=!1,P(C)}}}function Ie(e){let t,n,l,s,o,c,p,d,i,v,r,g,f,b,w,y,_,O=ue(e[1]),C=[];for(let m=0;m<O.length;m+=1)C[m]=ce(ae(e,O,m));function Q(m){e[12](m)}let z={isOpen:e[2]};return e[0]!==void 0&&(z.memo_obj=e[0]),r=new Ae({props:z}),k.push(()=>Le(r,"memo_obj",Q)),r.$on("closeEvent",e[6]),b=new De({props:{isOpen:e[3],aaa:e[4]}}),b.$on("closeEvent",e[8]),{c(){t=h("body"),n=h("div"),n.innerHTML="<p>title</p>",l=x(),s=h("div"),o=h("ul");for(let m=0;m<C.length;m+=1)C[m].c();c=x(),p=h("div"),d=h("div"),i=h("button"),i.textContent="+",v=x(),oe(r.$$.fragment),f=x(),oe(b.$$.fragment),u(n,"class","flex justify-center my-4"),u(o,"class","flex flex-col items-center"),u(s,"class","h-4/5 overflow-y-scroll"),u(i,"class","w-80 btn btn-accent"),u(d,"class","tooltip tooltip-bottom"),u(d,"data-tip","add new"),u(p,"class","flex justify-center"),u(t,"class","w-96 h-[80vh] border-2 border-accent rounded-2xl")},m(m,E){H(m,t,E),a(t,n),a(t,l),a(t,s),a(s,o);for(let M=0;M<C.length;M+=1)C[M]&&C[M].m(o,null);a(t,c),a(t,p),a(p,d),a(d,i),a(t,v),R(r,t,null),a(t,f),R(b,t,null),w=!0,y||(_=j(i,"click",e[5]),y=!0)},p(m,[E]){if(E&642){O=ue(m[1]);let $;for($=0;$<O.length;$+=1){const se=ae(m,O,$);C[$]?C[$].p(se,E):(C[$]=ce(se),C[$].c(),C[$].m(o,null))}for(;$<C.length;$+=1)C[$].d(1);C.length=O.length}const M={};E&4&&(M.isOpen=m[2]),!g&&E&1&&(g=!0,M.memo_obj=m[0],Ee(()=>g=!1)),r.$set(M);const W={};E&8&&(W.isOpen=m[3]),E&16&&(W.aaa=m[4]),b.$set(W)},i(m){w||(K(r.$$.fragment,m),K(b.$$.fragment,m),w=!0)},o(m){le(r.$$.fragment,m),le(b.$$.fragment,m),w=!1},d(m){m&&B(t),we(C,m),U(r),U(b),y=!1,_()}}}function He(e,t,n){let l,s=[],o=!1;function c(){n(2,o=!0)}function p(){n(2,o=!1),l.title.length!=0&&n(1,s=[...s,l])}let d=!1,i={},v=0;function r(_){v=_,n(4,i=s[_]),n(3,d=!0)}function g(_){n(1,s[v]=_.detail.new_memo,s),n(3,d=!1)}function f(_){const O=[...s];O.splice(_,1),n(1,s=O)}const b=_=>f(_),w=_=>r(_);function y(_){l=_,n(0,l)}return[l,s,o,d,i,c,p,r,g,f,b,w,y]}class he extends J{constructor(t){super(),G(this,t,He,Ie,V,{})}}function ze(e){let t,n,l,s,o,c,p,d;return l=new he({}),{c(){t=h("main"),n=h("div"),oe(l.$$.fragment),s=x(),o=h("button"),o.textContent="+",u(n,"id","categoryList"),u(n,"class","flex flex-row"),u(o,"class","btn btn-accent")},m(i,v){H(i,t,v),a(t,n),R(l,n,null),e[2](n),a(t,s),a(t,o),c=!0,p||(d=j(o,"click",e[1]),p=!0)},p:L,i(i){c||(K(l.$$.fragment,i),c=!0)},o(i){le(l.$$.fragment,i),c=!1},d(i){i&&B(t),U(l),e[2](null),p=!1,d()}}}function Fe(e,t,n){let l;function s(){new he({target:document.getElementById("categoryList")})}function o(c){k[c?"unshift":"push"](()=>{l=c,n(0,l)})}return[l,s,o]}class qe extends J{constructor(t){super(),G(this,t,Fe,ze,V,{})}}new qe({target:document.getElementById("app")});
