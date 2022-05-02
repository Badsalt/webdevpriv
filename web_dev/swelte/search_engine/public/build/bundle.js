var app=function(){"use strict";function t(){}const e=t=>t;function n(t){return t()}function r(){return Object.create(null)}function s(t){t.forEach(n)}function o(t){return"function"==typeof t}function c(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}let l;function i(e,n,r){e.$$.on_destroy.push(function(e,...n){if(null==e)return t;const r=e.subscribe(...n);return r.unsubscribe?()=>r.unsubscribe():r}(n,r))}function u(t,e,n){return t.set(n),e}const a="undefined"!=typeof window;let f=a?()=>window.performance.now():()=>Date.now(),d=a?t=>requestAnimationFrame(t):t;const p=new Set;function m(t){p.forEach((e=>{e.c(t)||(p.delete(e),e.f())})),0!==p.size&&d(m)}function h(t){let e;return 0===p.size&&d(m),{promise:new Promise((n=>{p.add(e={c:t,f:n})})),abort(){p.delete(e)}}}function g(t,e){t.appendChild(e)}function v(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function b(t){const e=w("style");return function(t,e){g(t.head||t,e)}(v(t),e),e}function $(t,e,n){t.insertBefore(e,n||null)}function y(t){t.parentNode.removeChild(t)}function x(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function w(t){return document.createElement(t)}function k(t){return document.createTextNode(t)}function _(){return k(" ")}function C(){return k("")}function E(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function N(t){return function(e){return e.preventDefault(),t.call(this,e)}}function j(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function R(t){return""===t?null:+t}function S(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function A(t,e){t.value=null==e?"":e}function M(t,e,n,r){t.style.setProperty(e,n,r?"important":"")}function P(t,e,n){t.classList[n?"add":"remove"](e)}const z=new Set;let q,O=0;function L(t,e,n,r,s,o,c,l=0){const i=16.666/r;let u="{\n";for(let t=0;t<=1;t+=i){const r=e+(n-e)*o(t);u+=100*t+`%{${c(r,1-r)}}\n`}const a=u+`100% {${c(n,1-n)}}\n}`,f=`__svelte_${function(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}(a)}_${l}`,d=v(t);z.add(d);const p=d.__svelte_stylesheet||(d.__svelte_stylesheet=b(t).sheet),m=d.__svelte_rules||(d.__svelte_rules={});m[f]||(m[f]=!0,p.insertRule(`@keyframes ${f} ${a}`,p.cssRules.length));const h=t.style.animation||"";return t.style.animation=`${h?`${h}, `:""}${f} ${r}ms linear ${s}ms 1 both`,O+=1,f}function T(t,e){const n=(t.style.animation||"").split(", "),r=n.filter(e?t=>t.indexOf(e)<0:t=>-1===t.indexOf("__svelte")),s=n.length-r.length;s&&(t.style.animation=r.join(", "),O-=s,O||d((()=>{O||(z.forEach((t=>{const e=t.__svelte_stylesheet;let n=e.cssRules.length;for(;n--;)e.deleteRule(n);t.__svelte_rules={}})),z.clear())})))}function D(t){q=t}function H(){if(!q)throw new Error("Function called outside component initialization");return q}const I=[],F=[],B=[],G=[],Q=Promise.resolve();let U=!1;function W(t){B.push(t)}let X=!1;const Y=new Set;function J(){if(!X){X=!0;do{for(let t=0;t<I.length;t+=1){const e=I[t];D(e),K(e.$$)}for(D(null),I.length=0;F.length;)F.pop()();for(let t=0;t<B.length;t+=1){const e=B[t];Y.has(e)||(Y.add(e),e())}B.length=0}while(I.length);for(;G.length;)G.pop()();U=!1,X=!1,Y.clear()}}function K(t){if(null!==t.fragment){t.update(),s(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(W)}}let V;function Z(){return V||(V=Promise.resolve(),V.then((()=>{V=null}))),V}function tt(t,e,n){t.dispatchEvent(function(t,e,n=!1){const r=document.createEvent("CustomEvent");return r.initCustomEvent(t,n,!1,e),r}(`${e?"intro":"outro"}${n}`))}const et=new Set;let nt;function rt(){nt={r:0,c:[],p:nt}}function st(){nt.r||s(nt.c),nt=nt.p}function ot(t,e){t&&t.i&&(et.delete(t),t.i(e))}function ct(t,e,n,r){if(t&&t.o){if(et.has(t))return;et.add(t),nt.c.push((()=>{et.delete(t),r&&(n&&t.d(1),r())})),t.o(e)}}const lt={duration:0};function it(n,r,c){let l,i=r(n,c),u=!0;const a=nt;function d(){const{delay:r=0,duration:o=300,easing:c=e,tick:d=t,css:p}=i||lt;p&&(l=L(n,1,0,o,r,c,p));const m=f()+r,g=m+o;W((()=>tt(n,!1,"start"))),h((t=>{if(u){if(t>=g)return d(0,1),tt(n,!1,"end"),--a.r||s(a.c),!1;if(t>=m){const e=c((t-m)/o);d(1-e,e)}}return u}))}return a.r+=1,o(i)?Z().then((()=>{i=i(),d()})):d(),{end(t){t&&i.tick&&i.tick(1,0),u&&(l&&T(n,l),u=!1)}}}function ut(n,r,c,l){let i=r(n,c),u=l?0:1,a=null,d=null,p=null;function m(){p&&T(n,p)}function g(t,e){const n=t.b-u;return e*=Math.abs(n),{a:u,b:t.b,d:n,duration:e,start:t.start,end:t.start+e,group:t.group}}function v(r){const{delay:o=0,duration:c=300,easing:l=e,tick:v=t,css:b}=i||lt,$={start:f()+o,b:r};r||($.group=nt,nt.r+=1),a||d?d=$:(b&&(m(),p=L(n,u,r,c,o,l,b)),r&&v(0,1),a=g($,c),W((()=>tt(n,r,"start"))),h((t=>{if(d&&t>d.start&&(a=g(d,c),d=null,tt(n,a.b,"start"),b&&(m(),p=L(n,u,a.b,a.duration,0,l,i.css))),a)if(t>=a.end)v(u=a.b,1-u),tt(n,a.b,"end"),d||(a.b?m():--a.group.r||s(a.group.c)),a=null;else if(t>=a.start){const e=t-a.start;u=a.a+a.d*l(e/a.duration),v(u,1-u)}return!(!a&&!d)})))}return{run(t){o(i)?Z().then((()=>{i=i(),v(t)})):v(t)},end(){m(),a=d=null}}}function at(t,e){const n=e.token={};function r(t,r,s,o){if(e.token!==n)return;e.resolved=o;let c=e.ctx;void 0!==s&&(c=c.slice(),c[s]=o);const l=t&&(e.current=t)(c);let i=!1;e.block&&(e.blocks?e.blocks.forEach(((t,n)=>{n!==r&&t&&(rt(),ct(t,1,1,(()=>{e.blocks[n]===t&&(e.blocks[n]=null)})),st())})):e.block.d(1),l.c(),ot(l,1),l.m(e.mount(),e.anchor),i=!0),e.block=l,e.blocks&&(e.blocks[r]=l),i&&J()}if((s=t)&&"object"==typeof s&&"function"==typeof s.then){const n=H();if(t.then((t=>{D(n),r(e.then,1,e.value,t),D(null)}),(t=>{if(D(n),r(e.catch,2,e.error,t),D(null),!e.hasCatch)throw t})),e.current!==e.pending)return r(e.pending,0),!0}else{if(e.current!==e.then)return r(e.then,1,e.value,t),!0;e.resolved=t}var s}function ft(t){t&&t.c()}function dt(t,e,r,c){const{fragment:l,on_mount:i,on_destroy:u,after_update:a}=t.$$;l&&l.m(e,r),c||W((()=>{const e=i.map(n).filter(o);u?u.push(...e):s(e),t.$$.on_mount=[]})),a.forEach(W)}function pt(t,e){const n=t.$$;null!==n.fragment&&(s(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function mt(t,e){-1===t.$$.dirty[0]&&(I.push(t),U||(U=!0,Q.then(J)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function ht(e,n,o,c,l,i,u,a=[-1]){const f=q;D(e);const d=e.$$={fragment:null,ctx:null,props:i,update:t,not_equal:l,bound:r(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(f?f.$$.context:[])),callbacks:r(),dirty:a,skip_bound:!1,root:n.target||f.$$.root};u&&u(d.root);let p=!1;if(d.ctx=o?o(e,n.props||{},((t,n,...r)=>{const s=r.length?r[0]:n;return d.ctx&&l(d.ctx[t],d.ctx[t]=s)&&(!d.skip_bound&&d.bound[t]&&d.bound[t](s),p&&mt(e,t)),n})):[],d.update(),p=!0,s(d.before_update),d.fragment=!!c&&c(d.ctx),n.target){if(n.hydrate){const t=function(t){return Array.from(t.childNodes)}(n.target);d.fragment&&d.fragment.l(t),t.forEach(y)}else d.fragment&&d.fragment.c();n.intro&&ot(e.$$.fragment),dt(e,n.target,n.anchor,n.customElement),J()}D(f)}class gt{$destroy(){pt(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const vt=[];function bt(e,n=t){let r;const s=new Set;function o(t){if(c(e,t)&&(e=t,r)){const t=!vt.length;for(const t of s)t[1](),vt.push(t,e);if(t){for(let t=0;t<vt.length;t+=2)vt[t][0](vt[t+1]);vt.length=0}}}return{set:o,update:function(t){o(t(e))},subscribe:function(c,l=t){const i=[c,l];return s.add(i),1===s.size&&(r=n(o)||t),c(e),()=>{s.delete(i),0===s.size&&(r(),r=null)}}}}const $t=bt(),yt=bt(),xt=bt();function wt(t){const e=t-1;return e*e*e+1}function kt(t,{delay:n=0,duration:r=400,easing:s=e}={}){const o=+getComputedStyle(t).opacity;return{delay:n,duration:r,easing:s,css:t=>"opacity: "+t*o}}function _t(t,{delay:e=0,duration:n=400,easing:r=wt,x:s=0,y:o=0,opacity:c=0}={}){const l=getComputedStyle(t),i=+l.opacity,u="none"===l.transform?"":l.transform,a=i*(1-c);return{delay:e,duration:n,easing:r,css:(t,e)=>`\n\t\t\ttransform: ${u} translate(${(1-t)*s}px, ${(1-t)*o}px);\n\t\t\topacity: ${i-a*e}`}}function Ct(t,e,n){const r=t.slice();return r[8]=e[n],r[10]=n,r}function Et(t,e,n){const r=t.slice();return r[11]=e[n],r[13]=n,r}function Nt(t){let e,n,r,s,o;const c=[St,Rt],l=[];function i(t,n){return(null==e||1&n)&&(e=!!t[0].hasOwnProperty("error")),e?0:t[4]?-1:1}return~(n=i(t,-1))&&(r=l[n]=c[n](t)),{c(){r&&r.c(),s=C()},m(t,e){~n&&l[n].m(t,e),$(t,s,e),o=!0},p(t,e){let o=n;n=i(t,e),n===o?~n&&l[n].p(t,e):(r&&(rt(),ct(l[o],1,1,(()=>{l[o]=null})),st()),~n?(r=l[n],r?r.p(t,e):(r=l[n]=c[n](t),r.c()),ot(r,1),r.m(s.parentNode,s)):r=null)},i(t){o||(ot(r),o=!0)},o(t){ct(r),o=!1},d(t){~n&&l[n].d(t),t&&y(s)}}}function jt(e){let n,r,s,o,c,l,i,u,a,f,d=e[0].data.items.length+"",p=e[0].data.items,m=[];for(let t=0;t<p.length;t+=1)m[t]=Lt(Et(e,p,t));let h=e[1]>=1&&Tt(e);return{c(){n=w("div"),r=k("Results Found: "),s=k(d),o=k(" Page: "),c=k(e[2]),l=_(),i=w("div");for(let t=0;t<m.length;t+=1)m[t].c();u=_(),a=w("div"),f=w("ul"),h&&h.c(),M(n,"color","white"),M(n,"font-size","1.5em"),j(n,"class","svelte-1aepu0r"),j(f,"class","pageNavigation svelte-1aepu0r"),j(a,"class","pageNavigationContainer svelte-1aepu0r"),j(i,"id","scroll"),j(i,"class","column svelte-1aepu0r")},m(t,e){$(t,n,e),g(n,r),g(n,s),g(n,o),g(n,c),$(t,l,e),$(t,i,e);for(let t=0;t<m.length;t+=1)m[t].m(i,null);g(i,u),g(i,a),g(a,f),h&&h.m(f,null)},p(t,e){if(1&e&&d!==(d=t[0].data.items.length+"")&&S(s,d),4&e&&S(c,t[2]),37&e){let n;for(p=t[0].data.items,n=0;n<p.length;n+=1){const r=Et(t,p,n);m[n]?(m[n].p(r,e),ot(m[n],1)):(m[n]=Lt(r),m[n].c(),ot(m[n],1),m[n].m(i,u))}for(;n<m.length;n+=1)m[n].d(1);m.length=p.length}t[1]>=1?h?h.p(t,e):(h=Tt(t),h.c(),h.m(f,null)):h&&(h.d(1),h=null)},i(t){for(let t=0;t<p.length;t+=1)ot(m[t])},o:t,d(t){t&&y(n),t&&y(l),t&&y(i),x(m,t),h&&h.d()}}}function Rt(e){let n,r,s,o;return{c(){n=w("div"),r=w("p"),r.innerHTML='No Results Found. You might like <a style="color: blue;" target="_blank" href="https://youtu.be/dQw4w9WgXcQ" class="svelte-1aepu0r">this</a> instead',M(r,"color","red"),M(r,"font-size","3em"),j(r,"class","svelte-1aepu0r"),j(n,"class","searchResultsContainer svelte-1aepu0r")},m(t,e){$(t,n,e),g(n,r),o=!0},p:t,i(t){o||(W((()=>{s||(s=ut(r,kt,{},!0)),s.run(1)})),o=!0)},o(t){s||(s=ut(r,kt,{},!1)),s.run(0),o=!1},d(t){t&&y(n),t&&s&&s.end()}}}function St(t){let e,n,r,s,o,c=t[0].error+"";return{c(){e=w("div"),n=w("p"),r=k(c),M(n,"color","red"),M(n,"font-size","2.5em"),j(n,"class","svelte-1aepu0r"),j(e,"class","searchResultsContainer svelte-1aepu0r")},m(t,s){$(t,e,s),g(e,n),g(n,r),o=!0},p(t,e){(!o||1&e)&&c!==(c=t[0].error+"")&&S(r,c)},i(t){o||(W((()=>{s||(s=ut(n,kt,{},!0)),s.run(1)})),o=!0)},o(t){s||(s=ut(n,kt,{},!1)),s.run(0),o=!1},d(t){t&&y(e),t&&s&&s.end()}}}function At(n){let r,s,c,l,i,u,a,d,p,m,v,b,x,C,E,N,R=Ft(n[11].url)+"",A=n[11].name+"",M=Bt(n[11].published_at)+"";function P(t,e){return"file"==t[11].type?zt:"dataset"==t[11].type?Pt:(t[11].type="dataverse")?Mt:void 0}let z=P(n),q=z&&z(n);function O(t,e){return t[11].description?Ot:qt}let D=O(n),H=D(n);return{c(){r=w("div"),s=w("div"),c=w("h2"),l=k(R),i=_(),u=w("div"),a=w("a"),d=k(A),m=_(),q&&q.c(),v=_(),H.c(),b=_(),x=w("h6"),C=k("Published: "),E=k(M),j(c,"class","title svelte-1aepu0r"),j(a,"class","link svelte-1aepu0r"),j(a,"href",p=n[11].url),j(u,"class","svelte-1aepu0r"),j(x,"class","date svelte-1aepu0r"),j(s,"class","searchResults svelte-1aepu0r"),j(r,"class","searchResultsContainer svelte-1aepu0r")},m(t,e){$(t,r,e),g(r,s),g(s,c),g(c,l),g(s,i),g(s,u),g(u,a),g(a,d),g(u,m),q&&q.m(u,null),g(s,v),H.m(s,null),g(s,b),g(s,x),g(x,C),g(x,E)},p(t,e){1&e&&R!==(R=Ft(t[11].url)+"")&&S(l,R),1&e&&A!==(A=t[11].name+"")&&S(d,A),1&e&&p!==(p=t[11].url)&&j(a,"href",p),z!==(z=P(t))&&(q&&q.d(1),q=z&&z(t),q&&(q.c(),q.m(u,null))),D===(D=O(t))&&H?H.p(t,e):(H.d(1),H=D(t),H&&(H.c(),H.m(s,b))),1&e&&M!==(M=Bt(t[11].published_at)+"")&&S(E,M)},i(n){N||W((()=>{N=function(n,r,s){let c,l,i=r(n,s),u=!1,a=0;function d(){c&&T(n,c)}function p(){const{delay:r=0,duration:s=300,easing:o=e,tick:p=t,css:m}=i||lt;m&&(c=L(n,0,1,s,r,o,m,a++)),p(0,1);const g=f()+r,v=g+s;l&&l.abort(),u=!0,W((()=>tt(n,!0,"start"))),l=h((t=>{if(u){if(t>=v)return p(1,0),tt(n,!0,"end"),d(),u=!1;if(t>=g){const e=o((t-g)/s);p(e,1-e)}}return u}))}let m=!1;return{start(){m||(m=!0,T(n),o(i)?(i=i(),Z().then(p)):p())},invalidate(){m=!1},end(){u&&(d(),u=!1)}}}(r,_t,{y:100,duration:500}),N.start()}))},o:t,d(t){t&&y(r),q&&q.d(),H.d()}}}function Mt(t){let e;return{c(){e=w("span"),j(e,"class","fa fa-server svelte-1aepu0r")},m(t,n){$(t,e,n)},d(t){t&&y(e)}}}function Pt(t){let e;return{c(){e=w("span"),j(e,"class","fa fa-database svelte-1aepu0r")},m(t,n){$(t,e,n)},d(t){t&&y(e)}}}function zt(t){let e,n;return{c(){e=w("span"),n=k("§"),j(e,"class","fa fa-download svelte-1aepu0r")},m(t,r){$(t,e,r),$(t,n,r)},d(t){t&&y(e),t&&y(n)}}}function qt(e){let n;return{c(){n=w("h5"),n.textContent="No description is available.",j(n,"class","description svelte-1aepu0r")},m(t,e){$(t,n,e)},p:t,d(t){t&&y(n)}}}function Ot(t){let e,n,r=(t[11].description.length>250?t[11].description.substring(0,247)+"...":t[11].description.substring(0,250))+"";return{c(){e=w("h5"),n=k(r),j(e,"class","description svelte-1aepu0r")},m(t,r){$(t,e,r),g(e,n)},p(t,e){1&e&&r!==(r=(t[11].description.length>250?t[11].description.substring(0,247)+"...":t[11].description.substring(0,250))+"")&&S(n,r)},d(t){t&&y(e)}}}function Lt(e){let n,r=e[13]<e[5]*e[2]&&e[13]>=e[5]*(e[2]-1)&&At(e);return{c(){r&&r.c(),n=C()},m(t,e){r&&r.m(t,e),$(t,n,e)},p(t,e){t[13]<t[5]*t[2]&&t[13]>=t[5]*(t[2]-1)?r?(r.p(t,e),4&e&&ot(r,1)):(r=At(t),r.c(),ot(r,1),r.m(n.parentNode,n)):r&&(r.d(1),r=null)},i(t){ot(r)},o:t,d(t){r&&r.d(t),t&&y(n)}}}function Tt(t){let e,n=Array(t[1]),r=[];for(let e=0;e<n.length;e+=1)r[e]=Dt(Ct(t,n,e));return{c(){for(let t=0;t<r.length;t+=1)r[t].c();e=C()},m(t,n){for(let e=0;e<r.length;e+=1)r[e].m(t,n);$(t,e,n)},p(t,s){if(6&s){let o;for(n=Array(t[1]),o=0;o<n.length;o+=1){const c=Ct(t,n,o);r[o]?r[o].p(c,s):(r[o]=Dt(c),r[o].c(),r[o].m(e.parentNode,e))}for(;o<r.length;o+=1)r[o].d(1);r.length=n.length}},d(t){x(r,t),t&&y(e)}}}function Dt(t){let e,n,r,s,o,c=t[10]+1+"";function l(){return t[7](t[10])}return{c(){e=w("li"),n=k(c),r=_(),j(e,"class","svelte-1aepu0r"),P(e,"clicked",t[2]==t[10]+1)},m(t,c){$(t,e,c),g(e,n),g(e,r),s||(o=E(e,"click",l),s=!0)},p(n,r){t=n,4&r&&P(e,"clicked",t[2]==t[10]+1)},d(t){t&&y(e),s=!1,o()}}}function Ht(t){let e,n,r,s,o,c,l=t[6](t[3])+"";const i=[jt,Nt],u=[];function a(t,e){return t[0]&&"data"in t[0]&&"items"in t[0].data&&t[0].data.items.length>0&&!t[4]?0:t[0]&&!t[4]?1:-1}return~(r=a(t))&&(s=u[r]=i[r](t)),{c(){e=k(l),n=_(),s&&s.c(),o=C()},m(t,s){$(t,e,s),$(t,n,s),~r&&u[r].m(t,s),$(t,o,s),c=!0},p(t,n){(!c||8&n)&&l!==(l=t[6](t[3])+"")&&S(e,l);let f=r;r=a(t),r===f?~r&&u[r].p(t,n):(s&&(rt(),ct(u[f],1,1,(()=>{u[f]=null})),st()),~r?(s=u[r],s?s.p(t,n):(s=u[r]=i[r](t),s.c()),ot(s,1),s.m(o.parentNode,o)):s=null)},i(t){c||(ot(s),c=!0)},o(t){ct(s),c=!1},d(t){t&&y(e),t&&y(n),~r&&u[r].d(t),t&&y(o)}}}function It(e){let n,r,s=e[3],o=Ht(e);return{c(){o.c(),n=C()},m(t,e){o.m(t,e),$(t,n,e),r=!0},p(e,[r]){8&r&&c(s,s=e[3])?(rt(),ct(o,1,1,t),st(),o=Ht(e),o.c(),ot(o),o.m(n.parentNode,n)):o.p(e,r)},i(t){r||(ot(o),r=!0)},o(t){ct(o),r=!1},d(t){t&&y(n),o.d(t)}}}function Ft(t){let e=t.split("/"),n="";return e.forEach(((t,r)=>{0==r?n+=t+"//":1==r?n+="":r+1==e.length?n+=t:n+=t+" > "})),n}function Bt(t){let e=t.split("T"),n="";return e.forEach(((t,e)=>{0==e&&(n=t)})),n}function Gt(t,e,n){let r,s;i(t,xt,(t=>n(3,r=t))),i(t,yt,(t=>n(4,s=t)));let o,{json:c}=e,l=1;r||u(xt,r=15,r),r<5&&u(xt,r=5,r);let a=r;return t.$$set=t=>{"json"in t&&n(0,c=t.json)},[c,o,l,r,s,a,function(t){if(c&&"data"in c&&"items"in c.data&&c.data.items.length>0){let e=c.data.items.length;t||(t=15),t<5&&(t=5),console.log(t),n(1,o=Math.ceil(e/t))}return""},t=>{document.getElementById("scroll").scroll({top:0,behavior:"smooth"}),n(2,l=t+1)}]}class Qt extends gt{constructor(t){super(),ht(this,t,Gt,It,c,{json:0})}}function Ut(t){let e,n,r,o,c,l,i,u,a,f,d,p,m,h;return{c(){e=w("div"),n=w("h1"),n.textContent="CLOUD SEARCH",r=_(),o=w("div"),c=w("div"),c.innerHTML='<img style="height: 100%" src="./pic/cloud-black.svg" alt="Go to Home Page" title="Go to Home Page" class="svelte-wxstor"/>',l=_(),i=w("form"),u=w("input"),a=_(),f=w("span"),d=_(),p=w("span"),j(n,"class","svelte-wxstor"),j(c,"class","icon svelte-wxstor"),j(u,"class","svelte-wxstor"),j(f,"class","fa fa-search fa-2x searchIcon svelte-wxstor"),j(p,"class","fa fa-gear fa-3x settingsIcon svelte-wxstor"),j(i,"class","svelte-wxstor"),j(o,"class","flexContainer svelte-wxstor"),j(e,"class","header-search svelte-wxstor")},m(s,v){$(s,e,v),g(e,n),g(e,r),g(e,o),g(o,c),g(o,l),g(o,i),g(i,u),A(u,t[0]),g(i,a),g(i,f),g(i,d),g(i,p),m||(h=[E(c,"click",t[11]),E(u,"input",t[12]),E(p,"click",t[13]),E(i,"submit",N(t[14]))],m=!0)},p(t,e){1&e&&u.value!==t[0]&&A(u,t[0])},d(t){t&&y(e),m=!1,s(h)}}}function Wt(t){let e,n,r,o,c,l,i,u,a,f,d;return{c(){e=w("div"),n=w("h1"),n.textContent="CLOUD SEARCH",r=_(),o=w("form"),c=w("input"),l=_(),i=w("span"),u=_(),a=w("span"),j(n,"class","svelte-wxstor"),j(c,"class","svelte-wxstor"),j(i,"class","fa fa-search fa-2x searchIcon svelte-wxstor"),j(a,"class","fa fa-gear fa-3x settingsIcon svelte-wxstor"),j(o,"class","svelte-wxstor"),j(e,"class","container svelte-wxstor")},m(s,p){$(s,e,p),g(e,n),g(e,r),g(e,o),g(o,c),A(c,t[0]),g(o,l),g(o,i),g(o,u),g(o,a),f||(d=[E(c,"input",t[8]),E(a,"click",t[9]),E(o,"submit",N(t[10]))],f=!0)},p(t,e){1&e&&c.value!==t[0]&&A(c,t[0])},d(t){t&&y(e),f=!1,s(d)}}}function Xt(e){let n,r,o,c,l,i,u,a,f,d,p,m,h,v;function b(t,e){return t[3]?Wt:Ut}let x=b(e),N=x(e);return{c(){n=w("link"),r=_(),o=w("div"),c=w("span"),l=_(),i=w("div"),u=k("Set number of items per page\r\n        "),a=w("hr"),f=_(),d=w("input"),p=_(),N.c(),m=C(),j(n,"rel","stylesheet"),j(n,"href","https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"),j(n,"class","svelte-wxstor"),j(c,"class","fa fa-times fa-4x svelte-wxstor"),M(c,"color","red"),M(c,"position","absolute"),M(c,"top","1em"),M(c,"right","1em"),j(a,"class","svelte-wxstor"),j(d,"type","number"),j(d,"min","5"),j(d,"max","40"),j(d,"class","svelte-wxstor"),M(i,"color","white"),M(i,"font-size","3em"),j(i,"class","svelte-wxstor"),j(o,"class","settingsContainer svelte-wxstor"),P(o,"invisible",!e[1])},m(t,s){$(t,n,s),$(t,r,s),$(t,o,s),g(o,c),g(o,l),g(o,i),g(i,u),g(i,a),g(i,f),g(i,d),A(d,e[2]),$(t,p,s),N.m(t,s),$(t,m,s),h||(v=[E(c,"click",e[6]),E(d,"input",e[7])],h=!0)},p(t,[e]){4&e&&R(d.value)!==t[2]&&A(d,t[2]),2&e&&P(o,"invisible",!t[1]),x===(x=b(t))&&N?N.p(t,e):(N.d(1),N=x(t),N&&(N.c(),N.m(m.parentNode,m)))},i:t,o:t,d(t){t&&y(n),t&&y(r),t&&y(o),t&&y(p),N.d(t),t&&y(m),h=!1,s(v)}}}function Yt(t,e,n){let r,s,o,c,l;async function a(){try{const t=await fetch("https://demo.dataverse.org/api/search?q="+c+"&per_page=100"),e=await t.json();if(await new Promise((t=>setTimeout(t,1e3))),t.ok)return e;throw new Error(e)}catch{return{error:"Search failed, please check your internet connection."}}}i(t,xt,(t=>n(2,r=t))),i(t,yt,(t=>n(3,s=t))),i(t,$t,(t=>n(4,o=t))),u(yt,s=!0,s),u(xt,r=15,r);return[c,l,r,s,o,a,()=>n(1,l=!1),function(){r=R(this.value),xt.set(r)},function(){c=this.value,n(0,c)},()=>n(1,l=!0),()=>{u($t,o=a(),o),u(yt,s=!1,s)},()=>u(yt,s=!0,s),function(){c=this.value,n(0,c)},()=>n(1,l=!0),()=>{u($t,o=a(),o)}]}class Jt extends gt{constructor(t){super(),ht(this,t,Yt,Xt,c,{})}}function Kt(t){let e,n,r,s,o,c,l,i,u,a,f,d,p,m,h,v;return{c(){e=w("div"),n=w("span"),n.textContent="?",s=_(),o=w("span"),o.textContent="?",l=_(),i=w("span"),i.textContent="?",a=_(),f=w("span"),f.textContent="?",p=_(),m=w("span"),m.textContent="?",j(n,"class","questionMark svelte-1ip9us2"),M(n,"transform","rotate(40deg)"),j(o,"class","questionMark svelte-1ip9us2"),M(o,"transform","rotate(30deg)"),j(i,"class","questionMark svelte-1ip9us2"),j(f,"class","questionMark svelte-1ip9us2"),M(f,"transform","rotate(-30deg)"),j(m,"class","questionMark svelte-1ip9us2"),M(m,"transform","rotate(-40deg)"),j(e,"class","flexcontainer svelte-1ip9us2")},m(t,r){$(t,e,r),g(e,n),g(e,s),g(e,o),g(e,l),g(e,i),g(e,a),g(e,f),g(e,p),g(e,m),v=!0},p(e,n){t=e},i(t){v||(r&&r.end(1),c&&c.end(1),u&&u.end(1),d&&d.end(1),h&&h.end(1),v=!0)},o(e){r=it(n,_t,{y:t[1],duration:Zt}),c=it(o,_t,{y:t[1],duration:Zt}),u=it(i,_t,{y:t[1],duration:Zt}),d=it(f,_t,{y:t[1],duration:Zt}),h=it(m,_t,{y:t[1],duration:Zt}),v=!1},d(t){t&&y(e),t&&r&&r.end(),t&&c&&c.end(),t&&u&&u.end(),t&&d&&d.end(),t&&h&&h.end()}}}function Vt(t){let e,n,r,s,o,c,i,u=t[0]&&Kt(t);return{c(){var t,c;e=w("main"),n=w("div"),r=w("img"),o=_(),u&&u.c(),j(r,"id","image"),j(r,"width","100%"),t=r.src,c=s="./pic/cloud-black.svg",l||(l=document.createElement("a")),l.href=c,t!==l.href&&j(r,"src","./pic/cloud-black.svg"),j(r,"alt","Cloud"),j(n,"class","container svelte-1ip9us2"),j(e,"class","svelte-1ip9us2")},m(t,s){$(t,e,s),g(e,n),g(n,r),g(n,o),u&&u.m(n,null),i=!0},p(t,[e]){t[0]?u?(u.p(t,e),1&e&&ot(u,1)):(u=Kt(t),u.c(),ot(u,1),u.m(n,null)):u&&(rt(),ct(u,1,1,(()=>{u=null})),st())},i(t){i||(ot(u),c&&c.end(1),i=!0)},o(t){ct(u),c=it(n,kt,{}),i=!1},d(t){t&&y(e),u&&u.d(),t&&c&&c.end()}}}let Zt=500;function te(t,e,n){let r=!0;return async function t(){setTimeout((function(){n(0,r=!r),t()}),500)}(),[r,-125]}class ee extends gt{constructor(t){super(),ht(this,t,te,Vt,c,{})}}function ne(e){let n,r,s=e[2].message+"";return{c(){n=w("p"),r=k(s),M(n,"color","red")},m(t,e){$(t,n,e),g(n,r)},p(t,e){1&e&&s!==(s=t[2].message+"")&&S(r,s)},i:t,o:t,d(t){t&&y(n)}}}function re(t){let e,n;return e=new Qt({props:{json:t[1]}}),{c(){ft(e.$$.fragment)},m(t,r){dt(e,t,r),n=!0},p(t,n){const r={};1&n&&(r.json=t[1]),e.$set(r)},i(t){n||(ot(e.$$.fragment,t),n=!0)},o(t){ct(e.$$.fragment,t),n=!1},d(t){pt(e,t)}}}function se(e){let n,r;return n=new ee({}),{c(){ft(n.$$.fragment)},m(t,e){dt(n,t,e),r=!0},p:t,i(t){r||(ot(n.$$.fragment,t),r=!0)},o(t){ct(n.$$.fragment,t),r=!1},d(t){pt(n,t)}}}function oe(t){let e,n,r,s,o;n=new Jt({});let c={ctx:t,current:null,token:null,hasCatch:!0,pending:se,then:re,catch:ne,value:1,error:2,blocks:[,,,]};return at(s=t[0],c),{c(){e=w("main"),ft(n.$$.fragment),r=_(),c.block.c(),j(e,"class","svelte-r6ft2p")},m(t,s){$(t,e,s),dt(n,e,null),g(e,r),c.block.m(e,c.anchor=null),c.mount=()=>e,c.anchor=null,o=!0},p(e,[n]){t=e,c.ctx=t,1&n&&s!==(s=t[0])&&at(s,c)||function(t,e,n){const r=e.slice(),{resolved:s}=t;t.current===t.then&&(r[t.value]=s),t.current===t.catch&&(r[t.error]=s),t.block.p(r,n)}(c,t,n)},i(t){o||(ot(n.$$.fragment,t),ot(c.block),o=!0)},o(t){ct(n.$$.fragment,t);for(let t=0;t<3;t+=1){ct(c.blocks[t])}o=!1},d(t){t&&y(e),pt(n),c.block.d(),c.token=null,c=null}}}function ce(t,e,n){let r;return i(t,$t,(t=>n(0,r=t))),[r]}return new class extends gt{constructor(t){super(),ht(this,t,ce,oe,c,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map