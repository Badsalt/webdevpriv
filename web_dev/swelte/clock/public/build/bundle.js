var app=function(){"use strict";function t(){}const e=t=>t;function n(t){return t()}function i(){return Object.create(null)}function o(t){t.forEach(n)}function r(t){return"function"==typeof t}function s(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function l(e,n,i){e.$$.on_destroy.push(function(e,...n){if(null==e)return t;const i=e.subscribe(...n);return i.unsubscribe?()=>i.unsubscribe():i}(n,i))}const c="undefined"!=typeof window;let a=c?()=>window.performance.now():()=>Date.now(),u=c?t=>requestAnimationFrame(t):t;const m=new Set;function d(t){m.forEach((e=>{e.c(t)||(m.delete(e),e.f())})),0!==m.size&&u(d)}function f(t){let e;return 0===m.size&&u(d),{promise:new Promise((n=>{m.add(e={c:t,f:n})})),abort(){m.delete(e)}}}function p(t,e){t.appendChild(e)}function h(t){if(!t)return document;const e=t.getRootNode?t.getRootNode():t.ownerDocument;return e&&e.host?e:t.ownerDocument}function v(t){const e=_("style");return function(t,e){p(t.head||t,e)}(h(t),e),e}function g(t,e,n){t.insertBefore(e,n||null)}function y(t){t.parentNode.removeChild(t)}function b(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function _(t){return document.createElement(t)}function k(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function $(t){return document.createTextNode(t)}function x(){return $(" ")}function w(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function j(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function A(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function z(t,e){t.value=null==e?"":e}function S(t,e,n,i){t.style.setProperty(e,n,i?"important":"")}const C=new Set;let E,I=0;function T(t,e){const n=(t.style.animation||"").split(", "),i=n.filter(e?t=>t.indexOf(e)<0:t=>-1===t.indexOf("__svelte")),o=n.length-i.length;o&&(t.style.animation=i.join(", "),I-=o,I||u((()=>{I||(C.forEach((t=>{const e=t.__svelte_stylesheet;let n=e.cssRules.length;for(;n--;)e.deleteRule(n);t.__svelte_rules={}})),C.clear())})))}function D(t){E=t}const M=[],O=[],N=[],P=[],R=Promise.resolve();let L=!1;function q(t){N.push(t)}let B=!1;const H=new Set;function W(){if(!B){B=!0;do{for(let t=0;t<M.length;t+=1){const e=M[t];D(e),F(e.$$)}for(D(null),M.length=0;O.length;)O.pop()();for(let t=0;t<N.length;t+=1){const e=N[t];H.has(e)||(H.add(e),e())}N.length=0}while(M.length);for(;P.length;)P.pop()();L=!1,B=!1,H.clear()}}function F(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(q)}}let U;function G(t,e,n){t.dispatchEvent(function(t,e,n=!1){const i=document.createEvent("CustomEvent");return i.initCustomEvent(t,n,!1,e),i}(`${e?"intro":"outro"}${n}`))}const J=new Set;let K;function Q(){K={r:0,c:[],p:K}}function V(){K.r||o(K.c),K=K.p}function X(t,e){t&&t.i&&(J.delete(t),t.i(e))}function Y(t,e,n,i){if(t&&t.o){if(J.has(t))return;J.add(t),K.c.push((()=>{J.delete(t),i&&(n&&t.d(1),i())})),t.o(e)}}const Z={duration:0};function tt(n,i,o){let s,l,c=i(n,o),u=!1,m=0;function d(){s&&T(n,s)}function p(){const{delay:i=0,duration:o=300,easing:r=e,tick:p=t,css:g}=c||Z;g&&(s=function(t,e,n,i,o,r,s,l=0){const c=16.666/i;let a="{\n";for(let t=0;t<=1;t+=c){const i=e+(n-e)*r(t);a+=100*t+`%{${s(i,1-i)}}\n`}const u=a+`100% {${s(n,1-n)}}\n}`,m=`__svelte_${function(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}(u)}_${l}`,d=h(t);C.add(d);const f=d.__svelte_stylesheet||(d.__svelte_stylesheet=v(t).sheet),p=d.__svelte_rules||(d.__svelte_rules={});p[m]||(p[m]=!0,f.insertRule(`@keyframes ${m} ${u}`,f.cssRules.length));const g=t.style.animation||"";return t.style.animation=`${g?`${g}, `:""}${m} ${i}ms linear ${o}ms 1 both`,I+=1,m}(n,0,1,o,i,r,g,m++)),p(0,1);const y=a()+i,b=y+o;l&&l.abort(),u=!0,q((()=>G(n,!0,"start"))),l=f((t=>{if(u){if(t>=b)return p(1,0),G(n,!0,"end"),d(),u=!1;if(t>=y){const e=r((t-y)/o);p(e,1-e)}}return u}))}let g=!1;return{start(){g||(g=!0,T(n),r(c)?(c=c(),(U||(U=Promise.resolve(),U.then((()=>{U=null}))),U).then(p)):p())},invalidate(){g=!1},end(){u&&(d(),u=!1)}}}function et(t,e){-1===t.$$.dirty[0]&&(M.push(t),L||(L=!0,R.then(W)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function nt(e,s,l,c,a,u,m,d=[-1]){const f=E;D(e);const p=e.$$={fragment:null,ctx:null,props:u,update:t,not_equal:a,bound:i(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(s.context||(f?f.$$.context:[])),callbacks:i(),dirty:d,skip_bound:!1,root:s.target||f.$$.root};m&&m(p.root);let h=!1;if(p.ctx=l?l(e,s.props||{},((t,n,...i)=>{const o=i.length?i[0]:n;return p.ctx&&a(p.ctx[t],p.ctx[t]=o)&&(!p.skip_bound&&p.bound[t]&&p.bound[t](o),h&&et(e,t)),n})):[],p.update(),h=!0,o(p.before_update),p.fragment=!!c&&c(p.ctx),s.target){if(s.hydrate){const t=function(t){return Array.from(t.childNodes)}(s.target);p.fragment&&p.fragment.l(t),t.forEach(y)}else p.fragment&&p.fragment.c();s.intro&&X(e.$$.fragment),function(t,e,i,s){const{fragment:l,on_mount:c,on_destroy:a,after_update:u}=t.$$;l&&l.m(e,i),s||q((()=>{const e=c.map(n).filter(r);a?a.push(...e):o(e),t.$$.on_mount=[]})),u.forEach(q)}(e,s.target,s.anchor,s.customElement),W()}D(f)}class it{constructor(t,e){if(t<0||23<t)throw Error("The hour argument must be between 0 and 23");if(this._hour=t,e<0||e>60)throw Error("Error: minute value must be >= 0 and < 60");this._minute=e}tick(){this._minute++,60==this._minute&&(this._minute=0,this._hour=(this._hour+1)%24)}set alarm(t){this._alarmIsActive=!0,this._alarm=t}get alarm(){return this._alarm}deactivateAlarm(){this._alarmIsActive=!1}activateAlarm(){this._alarmIsActive=!0}get isTriggered(){if(this._alarmIsActive)return this.time.hour.toString().padStart(2,"0")+":"+this.time.minute.toString().padStart(2,"0")>=this._alarm}get time(){return{hour:this._hour,minute:this._minute}}}function ot(t){const e=t-1;return e*e*e+1}function rt(t,{delay:n=0,duration:i=400,easing:o=e}={}){const r=+getComputedStyle(t).opacity;return{delay:n,duration:i,easing:o,css:t=>"opacity: "+t*r}}function st(t,{delay:e=0,duration:n=400,easing:i=ot,x:o=0,y:r=0,opacity:s=0}={}){const l=getComputedStyle(t),c=+l.opacity,a="none"===l.transform?"":l.transform,u=c*(1-s);return{delay:e,duration:n,easing:i,css:(t,e)=>`\n\t\t\ttransform: ${a} translate(${(1-t)*o}px, ${(1-t)*r}px);\n\t\t\topacity: ${c-u*e}`}}const lt=[];function ct(t){return"[object Date]"===Object.prototype.toString.call(t)}function at(t,e,n,i){if("number"==typeof n||ct(n)){const o=i-n,r=(n-e)/(t.dt||1/60),s=(r+(t.opts.stiffness*o-t.opts.damping*r)*t.inv_mass)*t.dt;return Math.abs(s)<t.opts.precision&&Math.abs(o)<t.opts.precision?i:(t.settled=!1,ct(n)?new Date(n.getTime()+s):n+s)}if(Array.isArray(n))return n.map(((o,r)=>at(t,e[r],n[r],i[r])));if("object"==typeof n){const o={};for(const r in n)o[r]=at(t,e[r],n[r],i[r]);return o}throw new Error(`Cannot spring ${typeof n} values`)}function ut(e,n={}){const i=function(e,n=t){let i;const o=new Set;function r(t){if(s(e,t)&&(e=t,i)){const t=!lt.length;for(const t of o)t[1](),lt.push(t,e);if(t){for(let t=0;t<lt.length;t+=2)lt[t][0](lt[t+1]);lt.length=0}}}return{set:r,update:function(t){r(t(e))},subscribe:function(s,l=t){const c=[s,l];return o.add(c),1===o.size&&(i=n(r)||t),s(e),()=>{o.delete(c),0===o.size&&(i(),i=null)}}}}(e),{stiffness:o=.15,damping:r=.8,precision:l=.01}=n;let c,u,m,d=e,p=e,h=1,v=0,g=!1;function y(t,n={}){p=t;const o=m={};if(null==e||n.hard||b.stiffness>=1&&b.damping>=1)return g=!0,c=a(),d=t,i.set(e=p),Promise.resolve();if(n.soft){const t=!0===n.soft?.5:+n.soft;v=1/(60*t),h=0}return u||(c=a(),g=!1,u=f((t=>{if(g)return g=!1,u=null,!1;h=Math.min(h+v,1);const n={inv_mass:h,opts:b,settled:!0,dt:60*(t-c)/1e3},o=at(n,d,e,p);return c=t,d=e,i.set(e=o),n.settled&&(u=null),!n.settled}))),new Promise((t=>{u.promise.then((()=>{o===m&&t()}))}))}const b={set:y,update:(t,n)=>y(t(p,e),n),subscribe:i.subscribe,stiffness:o,damping:r,precision:l};return b}function mt(t,e,n){const i=t.slice();return i[13]=e[n],i}function dt(t,e,n){const i=t.slice();return i[16]=e[n],i}function ft(t){let e;return{c(){e=_("div"),e.innerHTML='<h2 class="alarmclock svelte-noizjk">Wake up!!</h2>',j(e,"class","alarmWakeUp svelte-noizjk"),S(e,"display","inline-block")},m(t,n){g(t,e,n)},d(t){t&&y(e)}}}function pt(e){let n,i,o,r=e[0].time.hour.toString().padStart(2,"0")+"";return{c(){n=_("span"),i=$(r),S(n,"position","absolute"),S(n,"margin","0"),S(n,"top","0px"),S(n,"left","0"),j(n,"class","time svelte-noizjk")},m(t,e){g(t,n,e),p(n,i)},p(t,e){1&e&&r!==(r=t[0].time.hour.toString().padStart(2,"0")+"")&&A(i,r)},i(t){o||q((()=>{o=tt(n,st,{y:-25}),o.start()}))},o:t,d(t){t&&y(n)}}}function ht(e){let n,i,o,r=e[0].time.minute.toString().padStart(2,"0")+"";return{c(){n=_("span"),i=$(r),S(n,"position","absolute"),S(n,"margin","0"),S(n,"top","0"),S(n,"right","5px"),j(n,"class","time svelte-noizjk")},m(t,e){g(t,n,e),p(n,i)},p(t,e){1&e&&r!==(r=t[0].time.minute.toString().padStart(2,"0")+"")&&A(i,r)},i(t){o||q((()=>{o=tt(n,st,{y:-25}),o.start()}))},o:t,d(t){t&&y(n)}}}function vt(e){let n,i,o;return{c(){n=_("button"),n.textContent="Set Alarm",j(n,"class","setAlarm svelte-noizjk")},m(t,r){g(t,n,r),i||(o=w(n,"click",e[6]),i=!0)},p:t,d(t){t&&y(n),i=!1,o()}}}function gt(e){let n,i,o;return{c(){n=_("button"),n.textContent="Disable",j(n,"class","disableAlarm svelte-noizjk")},m(t,r){g(t,n,r),i||(o=w(n,"click",e[8]),i=!0)},p:t,d(t){t&&y(n),i=!1,o()}}}function yt(e){let n,i;return{c(){n=_("p"),n.textContent="Set alarm to valid time"},m(t,e){g(t,n,e)},p:t,i(t){i||q((()=>{i=tt(n,rt,{}),i.start()}))},o:t,d(t){t&&y(n)}}}function bt(e){let n,i,o,r,s;return{c(){n=_("p"),i=$("Alarm set to: "),o=_("b"),r=$(e[1])},m(t,e){g(t,n,e),p(n,i),p(n,o),p(o,r)},p(t,e){2&e&&A(r,t[1])},i(t){s||q((()=>{s=tt(n,rt,{}),s.start()}))},o:t,d(t){t&&y(n)}}}function _t(t){let e,n;return{c(){e=k("line"),j(e,"class","minor svelte-noizjk"),j(e,"y1","42"),j(e,"y2","45"),j(e,"transform",n="rotate("+6*(t[13]+t[16])+")")},m(t,n){g(t,e,n)},d(t){t&&y(e)}}}function kt(e){let n,i,o,r=[1,2,3,4],s=[];for(let t=0;t<4;t+=1)s[t]=_t(dt(e,r,t));return{c(){n=k("line");for(let t=0;t<4;t+=1)s[t].c();o=$(""),j(n,"class","major svelte-noizjk"),j(n,"y1","35"),j(n,"y2","45"),j(n,"transform",i="rotate("+30*e[13]+")")},m(t,e){g(t,n,e);for(let n=0;n<4;n+=1)s[n].m(t,e);g(t,o,e)},p:t,d(t){t&&y(n),b(s,t),t&&y(o)}}}function $t(e){let n,i,o;return{c(){n=_("button"),n.textContent="Set Alarm",j(n,"class","setAlarm svelte-noizjk")},m(t,r){g(t,n,r),i||(o=w(n,"click",e[6]),i=!0)},p:t,d(t){t&&y(n),i=!1,o()}}}function xt(e){let n,i,o;return{c(){n=_("button"),n.textContent="Disable",j(n,"class","disableAlarm svelte-noizjk")},m(t,r){g(t,n,r),i||(o=w(n,"click",e[10]),i=!0)},p:t,d(t){t&&y(n),i=!1,o()}}}function wt(e){let n,i;return{c(){n=_("p"),n.textContent="Set alarm to valid time"},m(t,e){g(t,n,e)},p:t,i(t){i||q((()=>{i=tt(n,rt,{}),i.start()}))},o:t,d(t){t&&y(n)}}}function jt(e){let n,i,o,r,s;return{c(){n=_("p"),i=$("Alarm set to: "),o=_("b"),r=$(e[1])},m(t,e){g(t,n,e),p(n,i),p(n,o),p(o,r)},p(t,e){2&e&&A(r,t[1])},i(t){s||q((()=>{s=tt(n,rt,{}),s.start()}))},o:t,d(t){t&&y(n)}}}function At(e){let n,i,o;return{c(){n=_("button"),n.textContent="Set Alarm",j(n,"class","setAlarm svelte-noizjk")},m(t,r){g(t,n,r),i||(o=w(n,"click",e[6]),i=!0)},p:t,d(t){t&&y(n),i=!1,o()}}}function zt(e){let n,i,o;return{c(){n=_("button"),n.textContent="Disable",j(n,"class","disableAlarm svelte-noizjk")},m(t,r){g(t,n,r),i||(o=w(n,"click",e[12]),i=!0)},p:t,d(t){t&&y(n),i=!1,o()}}}function St(e){let n,i;return{c(){n=_("p"),n.textContent="Set alarm to valid time"},m(t,e){g(t,n,e)},p:t,i(t){i||q((()=>{i=tt(n,rt,{}),i.start()}))},o:t,d(t){t&&y(n)}}}function Ct(e){let n,i,o,r,s;return{c(){n=_("p"),i=$("Alarm set to: "),o=_("b"),r=$(e[1])},m(t,e){g(t,n,e),p(n,i),p(n,o),p(o,r)},p(t,e){2&e&&A(r,t[1])},i(t){s||q((()=>{s=tt(n,rt,{}),s.start()}))},o:t,d(t){t&&y(n)}}}function Et(e){let n,i,r,l,c,a,u,m,d,f,h,v,C,E,I,T,D,M,O,N,P,R,L,q,B,H,W,F,U,G,J,K,Z,tt,et,nt,it,ot,rt,st,lt,ct,at,ut,dt,_t,Et,It,Tt,Dt,Mt,Ot,Nt,Pt,Rt,Lt,qt,Bt=e[0].time.hour,Ht=e[0].time.minute,Wt=e[0].time.hour.toString().padStart(2,"0")+"",Ft=e[0].time.minute.toString().padStart(2,"0")+"",Ut=e[0].isTriggered&&ft(),Gt=pt(e),Jt=ht(e);function Kt(t,e){return t[0]._alarmIsActive?gt:t[0]._alarmIsActive?void 0:vt}let Qt=Kt(e),Vt=Qt&&Qt(e);function Xt(t,e){return t[0]._alarmIsActive?bt:t[2]?yt:void 0}let Yt=Xt(e),Zt=Yt&&Yt(e),te=[0,5,10,15,20,25,30,35,40,45,50,55],ee=[];for(let t=0;t<12;t+=1)ee[t]=kt(mt(e,te,t));function ne(t,e){return t[0]._alarmIsActive?xt:t[0]._alarmIsActive?void 0:$t}let ie=ne(e),oe=ie&&ie(e);function re(t,e){return t[0]._alarmIsActive?jt:t[2]?wt:void 0}let se=re(e),le=se&&se(e);function ce(t,e){return t[0]._alarmIsActive?zt:t[0]._alarmIsActive?void 0:At}let ae=ce(e),ue=ae&&ae(e);function me(t,e){return t[0]._alarmIsActive?Ct:t[2]?St:void 0}let de=me(e),fe=de&&de(e);return{c(){n=_("link"),i=x(),r=_("main"),l=_("h1"),l.textContent="Clock",c=x(),a=_("div"),u=_("div"),m=_("div"),Ut&&Ut.c(),d=x(),f=_("div"),Gt.c(),h=x(),v=_("span"),v.textContent=":",C=x(),Jt.c(),E=x(),I=_("div"),T=_("input"),D=x(),Vt&&Vt.c(),M=x(),Zt&&Zt.c(),O=x(),N=_("div"),P=_("div"),R=k("svg"),L=k("circle");for(let t=0;t<12;t+=1)ee[t].c();q=k("line"),H=k("line"),F=x(),U=_("div"),G=_("input"),J=x(),oe&&oe.c(),K=x(),le&&le.c(),Z=x(),tt=_("div"),et=_("div"),nt=_("div"),it=k("svg"),ot=k("rect"),st=k("text"),lt=$(Wt),ct=x(),at=_("div"),ut=k("svg"),dt=k("rect"),Et=k("text"),It=$(Ft),Tt=x(),Dt=_("div"),Mt=_("input"),Ot=x(),ue&&ue.c(),Nt=x(),fe&&fe.c(),Pt=x(),Rt=_("button"),Rt.textContent="HIT ME!",j(n,"href","https://fonts.googleapis.com/css?family=Orbitron"),j(n,"rel","stylesheet"),j(n,"type","text/css"),S(v,"font-size","3em"),S(v,"position","absolute"),S(v,"margin","0"),S(v,"top","-9px"),S(v,"botton","5px"),S(v,"left","95px"),S(v,"display","inline-block"),S(v,"height","5px"),j(f,"id","digitalClock"),j(f,"class","svelte-noizjk"),S(m,"position","relative"),S(m,"height","200px"),j(T,"type","time"),j(T,"class","svelte-noizjk"),j(I,"class","item"),j(u,"class","clock svelte-noizjk"),j(L,"class","clock-face svelte-noizjk"),j(L,"r","48"),j(q,"class","hour svelte-noizjk"),j(q,"y1","2"),j(q,"y2","-20"),j(q,"transform",B="rotate("+.5*e[3]+")"),j(H,"class","minute svelte-noizjk"),j(H,"y1","4"),j(H,"y2","-30"),j(H,"transform",W="rotate("+6*e[3]+")"),j(R,"viewBox","-50 -50 100 100"),S(R,"width","70%"),S(R,"height","100%"),j(R,"class","svelte-noizjk"),j(G,"type","time"),j(G,"class","svelte-noizjk"),j(P,"class","item"),S(P,"height","200px"),j(N,"class","clock svelte-noizjk"),j(ot,"x","0"),j(ot,"y",rt=198-8.53*e[0].time.hour),j(ot,"width","100%"),j(ot,"height","200"),S(ot,"fill","rgb(0,0,255)"),S(ot,"stroke","rgb(0,0,0)"),j(st,"class","tttt svelte-noizjk"),j(st,"x","50%"),j(st,"y","50%"),j(st,"dominant-baseline","middle"),j(st,"text-anchor","middle"),j(it,"width","80"),j(it,"height","200"),S(it,"width","80%"),S(it,"border","3px solid green"),j(it,"class","svelte-noizjk"),j(nt,"class","hourMeter"),S(nt,"width","50%"),S(nt,"height","100%"),j(dt,"x","0"),j(dt,"y",_t=198-3.33*e[0].time.minute),j(dt,"width","100%"),j(dt,"height","200"),S(dt,"fill","rgb(0,0,255)"),S(dt,"stroke","rgb(0,0,0)"),j(Et,"class","tttt svelte-noizjk"),j(Et,"x","50%"),j(Et,"y","50%"),j(Et,"dominant-baseline","middle"),j(Et,"text-anchor","middle"),j(ut,"width","80"),j(ut,"height","200"),S(ut,"width","80%"),S(ut,"border","3px solid green"),j(ut,"class","svelte-noizjk"),j(at,"class","minuteMeter"),S(at,"width","50%"),S(at,"height","100%"),S(et,"height","auto"),S(et,"display","flex"),S(et,"justify-content","space-around"),S(et,"text-align","center"),j(Mt,"type","time"),j(Mt,"class","svelte-noizjk"),j(tt,"class","clock svelte-noizjk"),j(a,"class","container svelte-noizjk"),j(Rt,"class","addtime svelte-noizjk"),j(r,"class","svelte-noizjk")},m(t,o){g(t,n,o),g(t,i,o),g(t,r,o),p(r,l),p(r,c),p(r,a),p(a,u),p(u,m),Ut&&Ut.m(m,null),p(m,d),p(m,f),Gt.m(f,null),p(f,h),p(f,v),p(f,C),Jt.m(f,null),p(u,E),p(u,I),p(I,T),z(T,e[1]),p(I,D),Vt&&Vt.m(I,null),p(I,M),Zt&&Zt.m(I,null),p(a,O),p(a,N),p(N,P),p(P,R),p(R,L);for(let t=0;t<12;t+=1)ee[t].m(R,null);p(R,q),p(R,H),p(P,F),p(P,U),p(U,G),z(G,e[1]),p(U,J),oe&&oe.m(U,null),p(U,K),le&&le.m(U,null),p(a,Z),p(a,tt),p(tt,et),p(et,nt),p(nt,it),p(it,ot),p(it,st),p(st,lt),p(et,ct),p(et,at),p(at,ut),p(ut,dt),p(ut,Et),p(Et,It),p(tt,Tt),p(tt,Dt),p(Dt,Mt),z(Mt,e[1]),p(Dt,Ot),ue&&ue.m(Dt,null),p(Dt,Nt),fe&&fe.m(Dt,null),p(r,Pt),p(r,Rt),Lt||(qt=[w(T,"input",e[7]),w(G,"input",e[9]),w(Mt,"input",e[11]),w(Rt,"click",e[5])],Lt=!0)},p(e,[n]){e[0].isTriggered?Ut||(Ut=ft(),Ut.c(),Ut.m(m,d)):Ut&&(Ut.d(1),Ut=null),1&n&&s(Bt,Bt=e[0].time.hour)?(Q(),Y(Gt,1,1,t),V(),Gt=pt(e),Gt.c(),X(Gt),Gt.m(f,h)):Gt.p(e,n),1&n&&s(Ht,Ht=e[0].time.minute)?(Q(),Y(Jt,1,1,t),V(),Jt=ht(e),Jt.c(),X(Jt),Jt.m(f,null)):Jt.p(e,n),2&n&&z(T,e[1]),Qt===(Qt=Kt(e))&&Vt?Vt.p(e,n):(Vt&&Vt.d(1),Vt=Qt&&Qt(e),Vt&&(Vt.c(),Vt.m(I,M))),Yt===(Yt=Xt(e))&&Zt?Zt.p(e,n):(Zt&&Zt.d(1),Zt=Yt&&Yt(e),Zt&&(Zt.c(),X(Zt,1),Zt.m(I,null))),8&n&&B!==(B="rotate("+.5*e[3]+")")&&j(q,"transform",B),8&n&&W!==(W="rotate("+6*e[3]+")")&&j(H,"transform",W),2&n&&z(G,e[1]),ie===(ie=ne(e))&&oe?oe.p(e,n):(oe&&oe.d(1),oe=ie&&ie(e),oe&&(oe.c(),oe.m(U,K))),se===(se=re(e))&&le?le.p(e,n):(le&&le.d(1),le=se&&se(e),le&&(le.c(),X(le,1),le.m(U,null))),1&n&&rt!==(rt=198-8.53*e[0].time.hour)&&j(ot,"y",rt),1&n&&Wt!==(Wt=e[0].time.hour.toString().padStart(2,"0")+"")&&A(lt,Wt),1&n&&_t!==(_t=198-3.33*e[0].time.minute)&&j(dt,"y",_t),1&n&&Ft!==(Ft=e[0].time.minute.toString().padStart(2,"0")+"")&&A(It,Ft),2&n&&z(Mt,e[1]),ae===(ae=ce(e))&&ue?ue.p(e,n):(ue&&ue.d(1),ue=ae&&ae(e),ue&&(ue.c(),ue.m(Dt,Nt))),de===(de=me(e))&&fe?fe.p(e,n):(fe&&fe.d(1),fe=de&&de(e),fe&&(fe.c(),X(fe,1),fe.m(Dt,null)))},i(t){X(Gt),X(Jt),X(Zt),X(le),X(fe)},o(t){Y(Gt),Y(Jt)},d(t){t&&y(n),t&&y(i),t&&y(r),Ut&&Ut.d(),Gt.d(t),Jt.d(t),Vt&&Vt.d(),Zt&&Zt.d(),b(ee,t),oe&&oe.d(),le&&le.d(),ue&&ue.d(),fe&&fe.d(),Lt=!1,o(qt)}}}function It(t,e,n){let i,o,r=new it(23,37),s=!1,c=ut(60*parseInt(r.time.hour)+parseInt(r.time.minute));function a(){r.tick(),c.set(60*parseInt(r.time.hour)+parseInt(r.time.minute)),n(0,r)}l(t,c,(t=>n(3,i=t))),setInterval(a,1e3);return[r,o,s,i,c,a,function(){o?(n(0,r.alarm=o,r),n(2,s=!1)):n(2,s=!0)},function(){o=this.value,n(1,o)},()=>{r.deactivateAlarm(),n(1,o="")},function(){o=this.value,n(1,o)},()=>{r.deactivateAlarm(),n(1,o="")},function(){o=this.value,n(1,o)},()=>{r.deactivateAlarm(),n(1,o="")}]}return new class extends class{$destroy(){!function(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}{constructor(t){super(),nt(this,t,It,Et,s,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
