import{B as N,h as L,s as W,r as $,X as I}from"./element-plus-BBKw480Q.js";import{p as T,q as z,b as P}from"./index-BjfF9UyA.js";import{d as R,r as U,s as j,Z as q,b as D,w as O,n as _,f as X,o as u,c as r,V as n,M as a,u as b,L as Z,U as v,S as A,a as i,a3 as h,aa as k,P as G,T as H}from"./@vue-pHjCrgw6.js";import{c as J}from"./@vueuse-djZFs-WH.js";const K={class:"icon-select"},Q={class:"flex justify-between"},Y=["onClick"],ee={class:"h-[280px]"},oe={class:"flex flex-wrap"},se={key:0,class:"flex items-center"},re=R({__name:"picker",props:{modelValue:{default:""},disabled:{type:Boolean,default:!1}},emits:["update:modelValue","change"],setup(te,{emit:w}){const p=w,f=U(0),V=[{name:"element图标",icons:T()},{name:"本地图标",icons:z()}],d=j(),e=q({inputValue:"",popoverVisible:!1,popoverWidth:0,mouseoverSelect:!1,inputFocus:!1}),y=()=>{e.inputFocus=e.popoverVisible=!0},C=()=>{e.inputFocus=!1,e.popoverVisible=e.mouseoverSelect},g=s=>{e.mouseoverSelect=e.popoverVisible=!1,p("update:modelValue",s),p("change",s)},S=()=>{p("update:modelValue",""),p("change","")},x=D(()=>{var l;const s=((l=V[f.value])==null?void 0:l.icons)??[];if(!e.inputValue)return s;const o=e.inputValue.toLowerCase();return s.filter(c=>{if(c.toLowerCase().indexOf(o)!==-1)return c})}),B=()=>{_(()=>{var o;const s=(o=d.value)==null?void 0:o.$el.offsetWidth;e.popoverWidth=s<300?300:s})};return J(document.body,"click",()=>{e.popoverVisible=!!(e.inputFocus||e.mouseoverSelect)}),O(()=>e.popoverVisible,async s=>{var o,l;await _(),s?(o=d.value)==null||o.focus():(l=d.value)==null||l.blur()}),X(()=>{B()}),(s,o)=>{const l=P,c=L,E=W,F=$,M=I;return u(),r("div",K,[n(M,{trigger:"contextmenu",visible:e.popoverVisible,"onUpdate:visible":o[3]||(o[3]=t=>e.popoverVisible=t),width:e.popoverWidth},{reference:a(()=>[n(b(N),{ref_key:"inputRef",ref:d,modelValue:e.inputValue,"onUpdate:modelValue":o[2]||(o[2]=t=>e.inputValue=t),modelModifiers:{trim:!0},placeholder:"搜索图标",autofocus:!1,disabled:s.disabled,onFocus:y,onBlur:C,clearable:""},{prepend:a(()=>[s.modelValue?(u(),r("div",se,[n(F,{class:"flex-1 w-20",content:s.modelValue,placement:"top"},{default:a(()=>[(u(),Z(l,{class:"mr-1",key:s.modelValue,name:s.modelValue,size:16},null,8,["name"]))]),_:1},8,["content"])])):(u(),r(v,{key:1},[A("无")],64))]),append:a(()=>[n(c,null,{default:a(()=>[n(l,{name:"el-icon-Close",size:18,onClick:S})]),_:1})]),_:1},8,["modelValue","disabled"])]),default:a(()=>[i("div",{onMouseover:o[0]||(o[0]=h(t=>e.mouseoverSelect=!0,["stop"])),onMouseout:o[1]||(o[1]=h(t=>e.mouseoverSelect=!1,["stop"]))},[i("div",null,[i("div",Q,[o[4]||(o[4]=i("div",{class:"mb-3"},"请选择图标",-1)),i("div",null,[(u(),r(v,null,k(V,(t,m)=>i("span",{key:m,class:G(["cursor-pointer text-sm ml-2",{"text-primary":m==b(f)}]),onClick:le=>f.value=m},H(t.name),11,Y)),64))])]),i("div",ee,[n(E,null,{default:a(()=>[i("div",oe,[(u(!0),r(v,null,k(x.value,t=>(u(),r("div",{key:t,class:"m-1"},[n(c,{onClick:m=>g(t)},{default:a(()=>[n(l,{name:t,size:18},null,8,["name"])]),_:2},1032,["onClick"])]))),128))])]),_:1})])])],32)]),_:1},8,["visible","width"])])}}});export{re as _};
