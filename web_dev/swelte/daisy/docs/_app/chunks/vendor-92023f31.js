function y(){}const D=t=>t;function ft(t,e){for(const n in e)t[n]=e[n];return t}function U(t){return t()}function J(){return Object.create(null)}function $(t){t.forEach(U)}function L(t){return typeof t=="function"}function dt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let A;function Pt(t,e){return A||(A=document.createElement("a")),A.href=e,t===A.href}function _t(t){return Object.keys(t).length===0}function ht(t,...e){if(t==null)return y;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function Dt(t,e,n){t.$$.on_destroy.push(ht(e,n))}function Lt(t,e,n,i){if(t){const r=V(t,e,n,i);return t[0](r)}}function V(t,e,n,i){return t[1]&&i?ft(n.ctx.slice(),t[1](i(e))):n.ctx}function Wt(t,e,n,i){if(t[2]&&i){const r=t[2](i(n));if(e.dirty===void 0)return r;if(typeof r=="object"){const u=[],s=Math.max(e.dirty.length,r.length);for(let l=0;l<s;l+=1)u[l]=e.dirty[l]|r[l];return u}return e.dirty|r}return e.dirty}function It(t,e,n,i,r,u){if(r){const s=V(e,n,i,u);t.p(s,r)}}function Ht(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}function Gt(t,e,n){return t.set(n),e}const X=typeof window!="undefined";let Y=X?()=>window.performance.now():()=>Date.now(),W=X?t=>requestAnimationFrame(t):y;const x=new Set;function Z(t){x.forEach(e=>{e.c(t)||(x.delete(e),e.f())}),x.size!==0&&W(Z)}function tt(t){let e;return x.size===0&&W(Z),{promise:new Promise(n=>{x.add(e={c:t,f:n})}),abort(){x.delete(e)}}}let O=!1;function mt(){O=!0}function pt(){O=!1}function yt(t,e,n,i){for(;t<e;){const r=t+(e-t>>1);n(r)<=i?t=r+1:e=r}return t}function gt(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const o=[];for(let c=0;c<e.length;c++){const f=e[c];f.claim_order!==void 0&&o.push(f)}e=o}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let r=0;for(let o=0;o<e.length;o++){const c=e[o].claim_order,f=(r>0&&e[n[r]].claim_order<=c?r+1:yt(1,r,_=>e[n[_]].claim_order,c))-1;i[o]=n[f]+1;const a=f+1;n[a]=o,r=Math.max(a,r)}const u=[],s=[];let l=e.length-1;for(let o=n[r]+1;o!=0;o=i[o-1]){for(u.push(e[o-1]);l>=o;l--)s.push(e[l]);l--}for(;l>=0;l--)s.push(e[l]);u.reverse(),s.sort((o,c)=>o.claim_order-c.claim_order);for(let o=0,c=0;o<s.length;o++){for(;c<u.length&&s[o].claim_order>=u[c].claim_order;)c++;const f=c<u.length?u[c]:null;t.insertBefore(s[o],f)}}function bt(t,e){t.appendChild(e)}function et(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function xt(t){const e=nt("style");return $t(et(t),e),e.sheet}function $t(t,e){bt(t.head||t,e)}function wt(t,e){if(O){for(gt(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentElement!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function Jt(t,e,n){O&&!n?wt(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function vt(t){t.parentNode.removeChild(t)}function nt(t){return document.createElement(t)}function Et(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function I(t){return document.createTextNode(t)}function Kt(){return I(" ")}function Qt(){return I("")}function Ut(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function Vt(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function kt(t){return Array.from(t.childNodes)}function St(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function it(t,e,n,i,r=!1){St(t);const u=(()=>{for(let s=t.claim_info.last_index;s<t.length;s++){const l=t[s];if(e(l)){const o=n(l);return o===void 0?t.splice(s,1):t[s]=o,r||(t.claim_info.last_index=s),l}}for(let s=t.claim_info.last_index-1;s>=0;s--){const l=t[s];if(e(l)){const o=n(l);return o===void 0?t.splice(s,1):t[s]=o,r?o===void 0&&t.claim_info.last_index--:t.claim_info.last_index=s,l}}return i()})();return u.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,u}function rt(t,e,n,i){return it(t,r=>r.nodeName===e,r=>{const u=[];for(let s=0;s<r.attributes.length;s++){const l=r.attributes[s];n[l.name]||u.push(l.name)}u.forEach(s=>r.removeAttribute(s))},()=>i(e))}function Xt(t,e,n){return rt(t,e,n,nt)}function Yt(t,e,n){return rt(t,e,n,Et)}function Ct(t,e){return it(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>I(e),!0)}function Zt(t){return Ct(t," ")}function te(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function ee(t,e,n,i){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function At(t,e,n=!1){const i=document.createEvent("CustomEvent");return i.initCustomEvent(t,n,!1,e),i}function ne(t,e=document.body){return Array.from(e.querySelectorAll(t))}const F=new Map;let T=0;function Nt(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}function jt(t,e){const n={stylesheet:xt(e),rules:{}};return F.set(t,n),n}function ot(t,e,n,i,r,u,s,l=0){const o=16.666/i;let c=`{
`;for(let m=0;m<=1;m+=o){const C=e+(n-e)*u(m);c+=m*100+`%{${s(C,1-C)}}
`}const f=c+`100% {${s(n,1-n)}}
}`,a=`__svelte_${Nt(f)}_${l}`,_=et(t),{stylesheet:d,rules:h}=F.get(_)||jt(_,t);h[a]||(h[a]=!0,d.insertRule(`@keyframes ${a} ${f}`,d.cssRules.length));const p=t.style.animation||"";return t.style.animation=`${p?`${p}, `:""}${a} ${i}ms linear ${r}ms 1 both`,T+=1,a}function z(t,e){const n=(t.style.animation||"").split(", "),i=n.filter(e?u=>u.indexOf(e)<0:u=>u.indexOf("__svelte")===-1),r=n.length-i.length;r&&(t.style.animation=i.join(", "),T-=r,T||qt())}function qt(){W(()=>{T||(F.forEach(t=>{const{stylesheet:e}=t;let n=e.cssRules.length;for(;n--;)e.deleteRule(n);t.rules={}}),F.clear())})}let k;function E(t){k=t}function H(){if(!k)throw new Error("Function called outside component initialization");return k}function ie(t){H().$$.on_mount.push(t)}function re(t){H().$$.after_update.push(t)}function oe(t,e){H().$$.context.set(t,e)}const v=[],K=[],j=[],Q=[],st=Promise.resolve();let P=!1;function ct(){P||(P=!0,st.then(lt))}function se(){return ct(),st}function S(t){j.push(t)}const R=new Set;let N=0;function lt(){const t=k;do{for(;N<v.length;){const e=v[N];N++,E(e),Ft(e.$$)}for(E(null),v.length=0,N=0;K.length;)K.pop()();for(let e=0;e<j.length;e+=1){const n=j[e];R.has(n)||(R.add(n),n())}j.length=0}while(v.length);for(;Q.length;)Q.pop()();P=!1,R.clear(),E(t)}function Ft(t){if(t.fragment!==null){t.update(),$(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(S)}}let w;function ut(){return w||(w=Promise.resolve(),w.then(()=>{w=null})),w}function M(t,e,n){t.dispatchEvent(At(`${e?"intro":"outro"}${n}`))}const q=new Set;let g;function ce(){g={r:0,c:[],p:g}}function le(){g.r||$(g.c),g=g.p}function Tt(t,e){t&&t.i&&(q.delete(t),t.i(e))}function ue(t,e,n,i){if(t&&t.o){if(q.has(t))return;q.add(t),g.c.push(()=>{q.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}}const at={duration:0};function ae(t,e,n){let i=e(t,n),r=!1,u,s,l=0;function o(){u&&z(t,u)}function c(){const{delay:a=0,duration:_=300,easing:d=D,tick:h=y,css:p}=i||at;p&&(u=ot(t,0,1,_,a,d,p,l++)),h(0,1);const m=Y()+a,C=m+_;s&&s.abort(),r=!0,S(()=>M(t,!0,"start")),s=tt(B=>{if(r){if(B>=C)return h(1,0),M(t,!0,"end"),o(),r=!1;if(B>=m){const G=d((B-m)/_);h(G,1-G)}}return r})}let f=!1;return{start(){f||(f=!0,z(t),L(i)?(i=i(),ut().then(c)):c())},invalidate(){f=!1},end(){r&&(o(),r=!1)}}}function fe(t,e,n){let i=e(t,n),r=!0,u;const s=g;s.r+=1;function l(){const{delay:o=0,duration:c=300,easing:f=D,tick:a=y,css:_}=i||at;_&&(u=ot(t,1,0,c,o,f,_));const d=Y()+o,h=d+c;S(()=>M(t,!1,"start")),tt(p=>{if(r){if(p>=h)return a(0,1),M(t,!1,"end"),--s.r||$(s.c),!1;if(p>=d){const m=f((p-d)/c);a(1-m,m)}}return r})}return L(i)?ut().then(()=>{i=i(),l()}):l(),{end(o){o&&i.tick&&i.tick(1,0),r&&(u&&z(t,u),r=!1)}}}const de=typeof window!="undefined"?window:typeof globalThis!="undefined"?globalThis:global;function _e(t,e){const n={},i={},r={$$scope:1};let u=t.length;for(;u--;){const s=t[u],l=e[u];if(l){for(const o in s)o in l||(i[o]=1);for(const o in l)r[o]||(n[o]=l[o],r[o]=1);t[u]=l}else for(const o in s)r[o]=1}for(const s in i)s in n||(n[s]=void 0);return n}function he(t){return typeof t=="object"&&t!==null?t:{}}function me(t){t&&t.c()}function pe(t,e){t&&t.l(e)}function Mt(t,e,n,i){const{fragment:r,on_mount:u,on_destroy:s,after_update:l}=t.$$;r&&r.m(e,n),i||S(()=>{const o=u.map(U).filter(L);s?s.push(...o):$(o),t.$$.on_mount=[]}),l.forEach(S)}function Ot(t,e){const n=t.$$;n.fragment!==null&&($(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Bt(t,e){t.$$.dirty[0]===-1&&(v.push(t),ct(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function ye(t,e,n,i,r,u,s,l=[-1]){const o=k;E(t);const c=t.$$={fragment:null,ctx:null,props:u,update:y,not_equal:r,bound:J(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(o?o.$$.context:[])),callbacks:J(),dirty:l,skip_bound:!1,root:e.target||o.$$.root};s&&s(c.root);let f=!1;if(c.ctx=n?n(t,e.props||{},(a,_,...d)=>{const h=d.length?d[0]:_;return c.ctx&&r(c.ctx[a],c.ctx[a]=h)&&(!c.skip_bound&&c.bound[a]&&c.bound[a](h),f&&Bt(t,a)),_}):[],c.update(),f=!0,$(c.before_update),c.fragment=i?i(c.ctx):!1,e.target){if(e.hydrate){mt();const a=kt(e.target);c.fragment&&c.fragment.l(a),a.forEach(vt)}else c.fragment&&c.fragment.c();e.intro&&Tt(t.$$.fragment),Mt(t,e.target,e.anchor,e.customElement),pt(),lt()}E(o)}class ge{$destroy(){Ot(this,1),this.$destroy=y}$on(e,n){const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(e){this.$$set&&!_t(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const b=[];function be(t,e=y){let n;const i=new Set;function r(l){if(dt(t,l)&&(t=l,n)){const o=!b.length;for(const c of i)c[1](),b.push(c,t);if(o){for(let c=0;c<b.length;c+=2)b[c][0](b[c+1]);b.length=0}}}function u(l){r(l(t))}function s(l,o=y){const c=[l,o];return i.add(c),i.size===1&&(n=e(r)||y),l(t),()=>{i.delete(c),i.size===0&&(n(),n=null)}}return{set:r,update:u,subscribe:s}}function Rt(t){return t<.5?4*t*t*t:.5*Math.pow(2*t-2,3)+1}function zt(t){const e=t-1;return e*e*e+1}function xe(t){return--t*t*t*t*t+1}function $e(t,{delay:e=0,duration:n=400,easing:i=Rt,amount:r=5,opacity:u=0}={}){const s=getComputedStyle(t),l=+s.opacity,o=s.filter==="none"?"":s.filter,c=l*(1-u);return{delay:e,duration:n,easing:i,css:(f,a)=>`opacity: ${l-c*a}; filter: ${o} blur(${a*r}px);`}}function we(t,{delay:e=0,duration:n=400,easing:i=D}={}){const r=+getComputedStyle(t).opacity;return{delay:e,duration:n,easing:i,css:u=>`opacity: ${u*r}`}}function ve(t,{delay:e=0,duration:n=400,easing:i=zt}={}){const r=getComputedStyle(t),u=+r.opacity,s=parseFloat(r.height),l=parseFloat(r.paddingTop),o=parseFloat(r.paddingBottom),c=parseFloat(r.marginTop),f=parseFloat(r.marginBottom),a=parseFloat(r.borderTopWidth),_=parseFloat(r.borderBottomWidth);return{delay:e,duration:n,easing:i,css:d=>`overflow: hidden;opacity: ${Math.min(d*20,1)*u};height: ${d*s}px;padding-top: ${d*l}px;padding-bottom: ${d*o}px;margin-top: ${d*c}px;margin-bottom: ${d*f}px;border-top-width: ${d*a}px;border-bottom-width: ${d*_}px;`}}export{Gt as $,he as A,Ot as B,ft as C,be as D,se as E,Lt as F,Et as G,Yt as H,wt as I,Ut as J,It as K,Ht as L,Wt as M,$ as N,y as O,ne as P,Pt as Q,S as R,ge as S,ae as T,we as U,fe as V,xe as W,ve as X,$e as Y,de as Z,Dt as _,kt as a,Vt as b,Xt as c,vt as d,nt as e,ee as f,Jt as g,Ct as h,ye as i,te as j,Kt as k,Qt as l,Zt as m,ce as n,ue as o,le as p,Tt as q,oe as r,dt as s,I as t,re as u,ie as v,me as w,pe as x,Mt as y,_e as z};