import{X as W,C as $,w as M,E as I,a as L}from"./element-plus.7eee367e.js";import{p as z,q as R,b as T}from"./index.0b72dd38.js";import{d as P,r as U,s as D,a1 as O,b as X,w as j,n as b,f as q,o as i,c as r,X as n,P as a,u as h,O as A,W as _,U as G,a as u,$ as k,a8 as C,R as H,V as J}from"./@vue.b52708da.js";import{u as K}from"./@vueuse.e1a32ef4.js";const Q={class:"icon-select"},Y={class:"flex justify-between"},Z=u("div",{class:"mb-3"},"\u8BF7\u9009\u62E9\u56FE\u6807",-1),ee=["onClick"],oe={class:"h-[280px]"},se={class:"flex flex-wrap"},te={key:0,class:"flex items-center"},ce=P({__name:"picker",props:{modelValue:{default:""},disabled:{type:Boolean,default:!1}},emits:["update:modelValue","change"],setup(le,{emit:E}){const p=E,v=U(0),V=[{name:"element\u56FE\u6807",icons:z()},{name:"\u672C\u5730\u56FE\u6807",icons:R()}],d=D(),e=O({inputValue:"",popoverVisible:!1,popoverWidth:0,mouseoverSelect:!1,inputFocus:!1}),w=()=>{e.inputFocus=e.popoverVisible=!0},F=()=>{e.inputFocus=!1,e.popoverVisible=e.mouseoverSelect},y=o=>{e.mouseoverSelect=e.popoverVisible=!1,p("update:modelValue",o),p("change",o)},g=()=>{p("update:modelValue",""),p("change","")},x=X(()=>{var l,c;const o=(c=(l=V[v.value])==null?void 0:l.icons)!=null?c:[];if(!e.inputValue)return o;const s=e.inputValue.toLowerCase();return o.filter(m=>{if(m.toLowerCase().indexOf(s)!==-1)return m})}),B=()=>{b(()=>{var s;const o=(s=d.value)==null?void 0:s.$el.offsetWidth;e.popoverWidth=o<300?300:o})};return K(document.body,"click",()=>{e.popoverVisible=!!(e.inputFocus||e.mouseoverSelect)}),j(()=>e.popoverVisible,async o=>{var s,l;await b(),o?(s=d.value)==null||s.focus():(l=d.value)==null||l.blur()}),q(()=>{B()}),(o,s)=>{const l=T,c=M,m=I,S=L,N=W;return i(),r("div",Q,[n(N,{trigger:"contextmenu",visible:e.popoverVisible,"onUpdate:visible":s[3]||(s[3]=t=>e.popoverVisible=t),width:e.popoverWidth},{reference:a(()=>[n(h($),{ref_key:"inputRef",ref:d,modelValue:e.inputValue,"onUpdate:modelValue":s[2]||(s[2]=t=>e.inputValue=t),modelModifiers:{trim:!0},placeholder:"\u641C\u7D22\u56FE\u6807",autofocus:!1,disabled:o.disabled,onFocus:w,onBlur:F,clearable:""},{prepend:a(()=>[o.modelValue?(i(),r("div",te,[n(S,{class:"flex-1 w-20",content:o.modelValue,placement:"top"},{default:a(()=>[(i(),A(l,{class:"mr-1",key:o.modelValue,name:o.modelValue,size:16},null,8,["name"]))]),_:1},8,["content"])])):(i(),r(_,{key:1},[G("\u65E0")],64))]),append:a(()=>[n(c,null,{default:a(()=>[n(l,{name:"el-icon-Close",size:18,onClick:g})]),_:1})]),_:1},8,["modelValue","disabled"])]),default:a(()=>[u("div",{onMouseover:s[0]||(s[0]=k(t=>e.mouseoverSelect=!0,["stop"])),onMouseout:s[1]||(s[1]=k(t=>e.mouseoverSelect=!1,["stop"]))},[u("div",null,[u("div",Y,[Z,u("div",null,[(i(),r(_,null,C(V,(t,f)=>u("span",{key:f,class:H(["cursor-pointer text-sm ml-2",{"text-primary":f==h(v)}]),onClick:ne=>v.value=f},J(t.name),11,ee)),64))])]),u("div",oe,[n(m,null,{default:a(()=>[u("div",se,[(i(!0),r(_,null,C(x.value,t=>(i(),r("div",{key:t,class:"m-1"},[n(c,{onClick:f=>y(t)},{default:a(()=>[n(l,{name:t,size:18},null,8,["name"])]),_:2},1032,["onClick"])]))),128))])]),_:1})])])],32)]),_:1},8,["visible","width"])])}}});export{ce as _};
