import{al as A,r as M,ak as B,aw as U,F as X,w as Y,Z as G,i as R,ax as D,p as T,g as tt,e as et,n as st,_ as nt,b as ot}from"./@vue-pHjCrgw6.js";var ct=!1;/*!
 * pinia v2.2.2
 * (c) 2024 Eduardo San Martin Morote
 * @license MIT
 */let J;const x=t=>J=t,K=Symbol();function F(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var w;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(w||(w={}));function bt(){const t=A(!0),c=t.run(()=>M({}));let s=[],e=[];const r=B({install(a){x(r),r._a=a,a.provide(K,r),a.config.globalProperties.$pinia=r,e.forEach(u=>s.push(u)),e=[]},use(a){return!this._a&&!ct?e.push(a):s.push(a),this},_p:s,_a:null,_e:t,_s:new Map,state:c});return r}const rt=()=>{};function N(t,c,s,e=rt){t.push(c);const r=()=>{const a=t.indexOf(c);a>-1&&(t.splice(a,1),e())};return!s&&tt()&&et(r),r}function p(t,...c){t.slice().forEach(s=>{s(...c)})}const ut=t=>t(),V=Symbol(),O=Symbol();function Z(t,c){t instanceof Map&&c instanceof Map?c.forEach((s,e)=>t.set(e,s)):t instanceof Set&&c instanceof Set&&c.forEach(t.add,t);for(const s in c){if(!c.hasOwnProperty(s))continue;const e=c[s],r=t[s];F(r)&&F(e)&&t.hasOwnProperty(s)&&!R(e)&&!D(e)?t[s]=Z(r,e):t[s]=e}return t}const{assign:h}=Object;function at(t){return!!(R(t)&&t.effect)}function it(t,c,s,e){const{state:r,actions:a,getters:u}=c,j=s.state.value[t];let S;function b(){j||(s.state.value[t]=r?r():{});const v=nt(s.state.value[t]);return h(v,a,Object.keys(u||{}).reduce((y,_)=>(y[_]=B(ot(()=>{x(s);const d=s._s.get(t);return u[_].call(d,d)})),y),{}))}return S=ft(t,b,c,s,e,!0),S}function ft(t,c,s={},e,r,a){let u;const j=h({actions:{}},s),S={deep:!0};let b,v,y=[],_=[],d;const I=e.state.value[t];M({});let k;function L(n){let o;b=v=!1,typeof n=="function"?(n(e.state.value[t]),o={type:w.patchFunction,storeId:t,events:d}):(Z(e.state.value[t],n),o={type:w.patchObject,payload:n,storeId:t,events:d});const i=k=Symbol();st().then(()=>{k===i&&(b=!0)}),v=!0,p(y,o,e.state.value[t])}const $=function(){const{state:o}=s,i=o?o():{};this.$patch(m=>{h(m,i)})};function q(){u.stop(),y=[],_=[],e._s.delete(t)}const W=(n,o="")=>{if(V in n)return n[O]=o,n;const i=function(){x(e);const m=Array.from(arguments),C=[],E=[];function H(f){C.push(f)}function Q(f){E.push(f)}p(_,{args:m,name:i[O],store:l,after:H,onError:Q});let P;try{P=n.apply(this&&this.$id===t?this:l,m)}catch(f){throw p(E,f),f}return P instanceof Promise?P.then(f=>(p(C,f),f)).catch(f=>(p(E,f),Promise.reject(f))):(p(C,P),P)};return i[V]=!0,i[O]=o,i},z={_p:e,$id:t,$onAction:N.bind(null,_),$patch:L,$reset:$,$subscribe(n,o={}){const i=N(y,n,o.detached,()=>m()),m=u.run(()=>Y(()=>e.state.value[t],C=>{(o.flush==="sync"?v:b)&&n({storeId:t,type:w.direct,events:d},C)},h({},S,o)));return i},$dispose:q},l=G(z);e._s.set(t,l);const g=(e._a&&e._a.runWithContext||ut)(()=>e._e.run(()=>(u=A()).run(()=>c({action:W}))));for(const n in g){const o=g[n];if(!(R(o)&&!at(o)||D(o))){if(typeof o=="function"){const i=W(o,n);g[n]=i,j.actions[n]=o}}}return h(l,g),h(T(l),g),Object.defineProperty(l,"$state",{get:()=>e.state.value[t],set:n=>{L(o=>{h(o,n)})}}),e._p.forEach(n=>{h(l,u.run(()=>n({store:l,app:e._a,pinia:e,options:j})))}),I&&a&&s.hydrate&&s.hydrate(l.$state,I),b=!0,v=!0,l}function St(t,c,s){let e,r;typeof t=="string"?(e=t,r=c):(r=t,e=t.id);function a(u,j){const S=U();return u=u||(S?X(K,null):null),u&&x(u),u=J,u._s.has(e)||it(e,r,u),u._s.get(e)}return a.$id=e,a}export{bt as c,St as d};
