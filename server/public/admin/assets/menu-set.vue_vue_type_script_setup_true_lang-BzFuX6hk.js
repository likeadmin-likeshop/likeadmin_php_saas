import{C as B,B as D,f as z,h as $}from"./element-plus-B9ALq7eR.js";import{_ as N}from"./index-i-h8fFEM.js";import{_ as R}from"./picker-Cc38reox.js";import{_ as F}from"./picker-C3inl4f0.js";import{f as V,b as I}from"./index-DGsnSnPv.js";import{D as P}from"./vuedraggable-OYPBN08G.js";import{l as S}from"./lodash-es-R-kYiKr_.js";import{d as A,b as L,o as d,c as M,a as u,V as a,M as l,L as m,R as p,u as r,i as T,S as j,U as q}from"./@vue-TMcuEboY.js";const G={class:"mb-[18px] max-w-[400px]"},H={class:"bg-fill-light w-full p-4 mt-4"},J={class:"upload-btn w-[60px] h-[60px]"},K={class:"upload-btn w-[60px] h-[60px]"},O={class:"flex-1 flex items-center"},Q={class:"drag-move cursor-move ml-auto"},te=A({__name:"menu-set",props:{modelValue:{},max:{default:9999},min:{default:-1},itemData:{default:()=>({name:"",selected:"",unselected:"",is_show:"1",link:{}})}},emits:["update:modelValue"],setup(x,{emit:v}){const i=x,g=v,t=L({get(){return i.modelValue},set(s){g("update:modelValue",s)}}),k=()=>{var s;((s=t.value)==null?void 0:s.length)<i.max?t.value.push(S(i.itemData)):V.msgError(`最多添加${i.max}个`)},b=s=>{if(t.value.length<=i.min&&i.min>-1)return V.msgError(`最少保留${i.min}个`);t.value.splice(s,1)};return(s,n)=>{const _=I,f=F,c=B,h=D,w=R,y=z,U=N,C=$;return d(),M(q,null,[u("div",G,[a(r(P),{class:"draggable",modelValue:r(t),"onUpdate:modelValue":n[0]||(n[0]=e=>T(t)?t.value=e:null),animation:"300",handle:".drag-move","item-key":"index"},{item:l(({element:e,index:E})=>[a(U,{onClose:o=>b(E),class:"max-w-[400px]"},{default:l(()=>[u("div",H,[e.unselected!==void 0||e.selected!==void 0?(d(),m(c,{key:0,label:"导航图标"},{default:l(()=>[e.unselected!==void 0?(d(),m(f,{key:0,modelValue:e.unselected,"onUpdate:modelValue":o=>e.unselected=o,"upload-class":"bg-body","exclude-domain":"",size:"60px"},{upload:l(()=>[u("div",J,[a(_,{name:"el-icon-Plus",size:16}),n[1]||(n[1]=u("span",{class:"text-xs leading-5"}," 未选中 ",-1))])]),_:2},1032,["modelValue","onUpdate:modelValue"])):p("",!0),e.selected!==void 0?(d(),m(f,{key:1,modelValue:e.selected,"onUpdate:modelValue":o=>e.selected=o,"upload-class":"bg-body","exclude-domain":"",size:"60px"},{upload:l(()=>[u("div",K,[a(_,{name:"el-icon-Plus",size:16}),n[2]||(n[2]=u("span",{class:"text-xs leading-5"}," 选中 ",-1))])]),_:2},1032,["modelValue","onUpdate:modelValue"])):p("",!0)]),_:2},1024)):p("",!0),e.name!==void 0?(d(),m(c,{key:1,label:"导航名称"},{default:l(()=>[a(h,{modelValue:e.name,"onUpdate:modelValue":o=>e.name=o,placeholder:"请输入名称"},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024)):p("",!0),e.link!==void 0?(d(),m(c,{key:2,label:"链接地址"},{default:l(()=>[a(w,{modelValue:e.link,"onUpdate:modelValue":o=>e.link=o,type:"pc"},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024)):p("",!0),e.is_show!==void 0?(d(),m(c,{key:3,label:"是否显示"},{default:l(()=>[u("div",O,[a(y,{modelValue:e.is_show,"onUpdate:modelValue":o=>e.is_show=o,"active-value":"1","inactive-value":"0"},null,8,["modelValue","onUpdate:modelValue"]),u("div",Q,[a(_,{name:"el-icon-Rank",size:"18"})])])]),_:2},1024)):p("",!0)])]),_:2},1032,["onClose"])]),_:1},8,["modelValue"])]),r(t).length<s.max?(d(),m(c,{key:0,"label-width":"0"},{default:l(()=>[a(C,{type:"primary",onClick:k},{default:l(()=>n[3]||(n[3]=[j(" 添加导航 ")])),_:1})]),_:1})):p("",!0)],64)}}});export{te as _};