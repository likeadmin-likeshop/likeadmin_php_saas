import{g as ne,e as re,i as B,f as G,n as I,r as O,u as le,t as ie,j as K,k as ue,l as J,w as _,b as C,m as ae,s as oe}from"./@vue-pHjCrgw6.js";function q(e){return ne()?(re(e),!0):!1}function D(e){return typeof e=="function"?e():le(e)}const Q=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const se=e=>typeof e<"u",ce=Object.prototype.toString,fe=e=>ce.call(e)==="[object Object]",W=()=>{};function Y(e,n){function t(...i){return new Promise((r,l)=>{Promise.resolve(e(()=>n.apply(this,i),{fn:n,thisArg:this,args:i})).then(r).catch(l)})}return t}const U=e=>e();function de(...e){let n=0,t,i=!0,r=W,l,c,a,o,d;!B(e[0])&&typeof e[0]=="object"?{delay:c,trailing:a=!0,leading:o=!0,rejectOnCancel:d=!1}=e[0]:[c,a=!0,o=!0,d=!1]=e;const v=()=>{t&&(clearTimeout(t),t=void 0,r(),r=W)};return b=>{const f=D(c),g=Date.now()-n,m=()=>l=b();return v(),f<=0?(n=Date.now(),m()):(g>f&&(o||!i)?(n=Date.now(),m()):a&&(l=new Promise((y,u)=>{r=d?u:y,t=setTimeout(()=>{n=Date.now(),i=!0,y(m()),v()},Math.max(0,f-g))})),!o&&!t&&(t=setTimeout(()=>i=!0,f)),i=!1,l)}}function ve(e=U){const n=O(!0);function t(){n.value=!1}function i(){n.value=!0}const r=(...l)=>{n.value&&e(...l)};return{isActive:K(n),pause:t,resume:i,eventFilter:r}}function me(e){return J()}function pe(...e){if(e.length!==1)return ie(...e);const n=e[0];return typeof n=="function"?K(ue(()=>({get:n,set:W}))):O(n)}function De(e,n=200,t=!1,i=!0,r=!1){return Y(de(n,t,i,r),e)}function he(e,n,t={}){const{eventFilter:i=U,...r}=t;return _(e,Y(i,n),r)}function ge(e,n,t={}){const{eventFilter:i,...r}=t,{eventFilter:l,pause:c,resume:a,isActive:o}=ve(i);return{stop:he(e,n,{...r,eventFilter:l}),pause:c,resume:a,isActive:o}}function H(e,n=!0,t){me()?G(e,t):n?e():I(e)}function Me(e=!1,n={}){const{truthyValue:t=!0,falsyValue:i=!1}=n,r=B(e),l=O(e);function c(a){if(arguments.length)return l.value=a,l.value;{const o=D(t);return l.value=l.value===o?D(i):o,l.value}}return r?c:[l,c]}function j(e){var n;const t=D(e);return(n=t==null?void 0:t.$el)!=null?n:t}const M=Q?window:void 0,we=Q?window.document:void 0;function V(...e){let n,t,i,r;if(typeof e[0]=="string"||Array.isArray(e[0])?([t,i,r]=e,n=M):[n,t,i,r]=e,!n)return W;Array.isArray(t)||(t=[t]),Array.isArray(i)||(i=[i]);const l=[],c=()=>{l.forEach(v=>v()),l.length=0},a=(v,h,b,f)=>(v.addEventListener(h,b,f),()=>v.removeEventListener(h,b,f)),o=_(()=>[j(n),D(r)],([v,h])=>{if(c(),!v)return;const b=fe(h)?{...h}:h;l.push(...t.flatMap(f=>i.map(g=>a(v,f,g,b))))},{immediate:!0,flush:"post"}),d=()=>{o(),c()};return q(d),d}function ye(){const e=O(!1),n=J();return n&&G(()=>{e.value=!0},n),e}function X(e){const n=ye();return C(()=>(n.value,!!e()))}function Z(e,n={}){const{window:t=M}=n,i=X(()=>t&&"matchMedia"in t&&typeof t.matchMedia=="function");let r;const l=O(!1),c=d=>{l.value=d.matches},a=()=>{r&&("removeEventListener"in r?r.removeEventListener("change",c):r.removeListener(c))},o=ae(()=>{i.value&&(a(),r=t.matchMedia(D(e)),"addEventListener"in r?r.addEventListener("change",c):r.addListener(c),l.value=r.matches)});return q(()=>{o(),a(),r=void 0}),l}function Se(e){return JSON.parse(JSON.stringify(e))}const x=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},z="__vueuse_ssr_handlers__",be=Ee();function Ee(){return z in x||(x[z]=x[z]||{}),x[z]}function ee(e,n){return be[e]||n}function Fe(e){return e==null?"any":e instanceof Set?"set":e instanceof Map?"map":e instanceof Date?"date":typeof e=="boolean"?"boolean":typeof e=="string"?"string":typeof e=="object"?"object":Number.isNaN(e)?"any":"number"}const ke={boolean:{read:e=>e==="true",write:e=>String(e)},object:{read:e=>JSON.parse(e),write:e=>JSON.stringify(e)},number:{read:e=>Number.parseFloat(e),write:e=>String(e)},any:{read:e=>e,write:e=>String(e)},string:{read:e=>e,write:e=>String(e)},map:{read:e=>new Map(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e.entries()))},set:{read:e=>new Set(JSON.parse(e)),write:e=>JSON.stringify(Array.from(e))},date:{read:e=>new Date(e),write:e=>e.toISOString()}},P="vueuse-storage";function Ce(e,n,t,i={}){var r;const{flush:l="pre",deep:c=!0,listenToStorageChanges:a=!0,writeDefaults:o=!0,mergeDefaults:d=!1,shallow:v,window:h=M,eventFilter:b,onError:f=s=>{console.error(s)},initOnMounted:g}=i,m=(v?oe:O)(typeof n=="function"?n():n);if(!t)try{t=ee("getDefaultStorage",()=>{var s;return(s=M)==null?void 0:s.localStorage})()}catch(s){f(s)}if(!t)return m;const y=D(n),u=Fe(y),k=(r=i.serializer)!=null?r:ke[u],{pause:E,resume:w}=ge(m,()=>T(m.value),{flush:l,deep:c,eventFilter:b});h&&a&&H(()=>{t instanceof Storage?V(h,"storage",A):V(h,P,L),g&&A()}),g||A();function F(s,p){if(h){const S={key:e,oldValue:s,newValue:p,storageArea:t};h.dispatchEvent(t instanceof Storage?new StorageEvent("storage",S):new CustomEvent(P,{detail:S}))}}function T(s){try{const p=t.getItem(e);if(s==null)F(p,null),t.removeItem(e);else{const S=k.write(s);p!==S&&(t.setItem(e,S),F(p,S))}}catch(p){f(p)}}function N(s){const p=s?s.newValue:t.getItem(e);if(p==null)return o&&y!=null&&t.setItem(e,k.write(y)),y;if(!s&&d){const S=k.read(p);return typeof d=="function"?d(S,y):u==="object"&&!Array.isArray(S)?{...y,...S}:S}else return typeof p!="string"?p:k.read(p)}function A(s){if(!(s&&s.storageArea!==t)){if(s&&s.key==null){m.value=y;return}if(!(s&&s.key!==e)){E();try{(s==null?void 0:s.newValue)!==k.write(m.value)&&(m.value=N(s))}catch(p){f(p)}finally{s?I(w):w()}}}}function L(s){A(s.detail)}return m}function te(e){return Z("(prefers-color-scheme: dark)",e)}const Oe="*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}";function Te(e={}){const{selector:n="html",attribute:t="class",initialValue:i="auto",window:r=M,storage:l,storageKey:c="vueuse-color-scheme",listenToStorageChanges:a=!0,storageRef:o,emitAuto:d,disableTransition:v=!0}=e,h={auto:"",light:"light",dark:"dark",...e.modes||{}},b=te({window:r}),f=C(()=>b.value?"dark":"light"),g=o||(c==null?pe(i):Ce(c,i,l,{window:r,listenToStorageChanges:a})),m=C(()=>g.value==="auto"?f.value:g.value),y=ee("updateHTMLAttrs",(w,F,T)=>{const N=typeof w=="string"?r==null?void 0:r.document.querySelector(w):j(w);if(!N)return;const A=new Set,L=new Set;let s=null;if(F==="class"){const S=T.split(/\s/g);Object.values(h).flatMap(R=>(R||"").split(/\s/g)).filter(Boolean).forEach(R=>{S.includes(R)?A.add(R):L.add(R)})}else s={key:F,value:T};if(A.size===0&&L.size===0&&s===null)return;let p;v&&(p=r.document.createElement("style"),p.appendChild(document.createTextNode(Oe)),r.document.head.appendChild(p));for(const S of A)N.classList.add(S);for(const S of L)N.classList.remove(S);s&&N.setAttribute(s.key,s.value),v&&(r.getComputedStyle(p).opacity,document.head.removeChild(p))});function u(w){var F;y(n,t,(F=h[w])!=null?F:w)}function k(w){e.onChanged?e.onChanged(w,u):u(w)}_(m,k,{flush:"post",immediate:!0}),H(()=>k(m.value));const E=C({get(){return d?g.value:m.value},set(w){g.value=w}});try{return Object.assign(E,{store:g,system:f,state:m})}catch{return E}}function Ne(e={}){const{valueDark:n="dark",valueLight:t="",window:i=M}=e,r=Te({...e,onChanged:(a,o)=>{var d;e.onChanged?(d=e.onChanged)==null||d.call(e,a==="dark",o,a):o(a)},modes:{dark:n,light:t}}),l=C(()=>r.system?r.system.value:te({window:i}).value?"dark":"light");return C({get(){return r.value==="dark"},set(a){const o=a?"dark":"light";l.value===o?r.value="auto":r.value=o}})}const $=["fullscreenchange","webkitfullscreenchange","webkitendfullscreen","mozfullscreenchange","MSFullscreenChange"];function _e(e,n={}){const{document:t=we,autoExit:i=!1}=n,r=C(()=>{var u;return(u=j(e))!=null?u:t==null?void 0:t.querySelector("html")}),l=O(!1),c=C(()=>["requestFullscreen","webkitRequestFullscreen","webkitEnterFullscreen","webkitEnterFullScreen","webkitRequestFullScreen","mozRequestFullScreen","msRequestFullscreen"].find(u=>t&&u in t||r.value&&u in r.value)),a=C(()=>["exitFullscreen","webkitExitFullscreen","webkitExitFullScreen","webkitCancelFullScreen","mozCancelFullScreen","msExitFullscreen"].find(u=>t&&u in t||r.value&&u in r.value)),o=C(()=>["fullScreen","webkitIsFullScreen","webkitDisplayingFullscreen","mozFullScreen","msFullscreenElement"].find(u=>t&&u in t||r.value&&u in r.value)),d=["fullscreenElement","webkitFullscreenElement","mozFullScreenElement","msFullscreenElement"].find(u=>t&&u in t),v=X(()=>r.value&&t&&c.value!==void 0&&a.value!==void 0&&o.value!==void 0),h=()=>d?(t==null?void 0:t[d])===r.value:!1,b=()=>{if(o.value){if(t&&t[o.value]!=null)return t[o.value];{const u=r.value;if((u==null?void 0:u[o.value])!=null)return!!u[o.value]}}return!1};async function f(){if(!(!v.value||!l.value)){if(a.value)if((t==null?void 0:t[a.value])!=null)await t[a.value]();else{const u=r.value;(u==null?void 0:u[a.value])!=null&&await u[a.value]()}l.value=!1}}async function g(){if(!v.value||l.value)return;b()&&await f();const u=r.value;c.value&&(u==null?void 0:u[c.value])!=null&&(await u[c.value](),l.value=!0)}async function m(){await(l.value?f():g())}const y=()=>{const u=b();(!u||u&&h())&&(l.value=u)};return V(t,$,y,!1),V(()=>j(r),$,y,!1),i&&q(f),{isSupported:v,isFullscreen:l,enter:g,exit:f,toggle:m}}function Le(e,n,t,i={}){var r,l,c;const{clone:a=!1,passive:o=!1,eventName:d,deep:v=!1,defaultValue:h,shouldEmit:b}=i,f=J(),g=t||(f==null?void 0:f.emit)||((r=f==null?void 0:f.$emit)==null?void 0:r.bind(f))||((c=(l=f==null?void 0:f.proxy)==null?void 0:l.$emit)==null?void 0:c.bind(f==null?void 0:f.proxy));let m=d;m=m||`update:${n.toString()}`;const y=E=>a?typeof a=="function"?a(E):Se(E):E,u=()=>se(e[n])?y(e[n]):h,k=E=>{b?b(E)&&g(m,E):g(m,E)};if(o){const E=u(),w=O(E);let F=!1;return _(()=>e[n],T=>{F||(F=!0,w.value=y(T),I(()=>F=!1))}),_(w,T=>{!F&&(T!==e[n]||v)&&k(T)},{deep:v}),w}else return C({get(){return u()},set(E){k(E)}})}function Re(e={}){const{window:n=M,initialWidth:t=Number.POSITIVE_INFINITY,initialHeight:i=Number.POSITIVE_INFINITY,listenOrientation:r=!0,includeScrollbar:l=!0,type:c="inner"}=e,a=O(t),o=O(i),d=()=>{n&&(c==="outer"?(a.value=n.outerWidth,o.value=n.outerHeight):l?(a.value=n.innerWidth,o.value=n.innerHeight):(a.value=n.document.documentElement.clientWidth,o.value=n.document.documentElement.clientHeight))};if(d(),H(d),V("resize",d,{passive:!0}),r){const v=Z("(orientation: portrait)");_(v,()=>d())}return{width:a,height:o}}export{Me as a,_e as b,V as c,Re as d,De as e,Le as f,Ne as u};