import{B as I,C as j,f as F,h as O,I as R,D as S}from"./element-plus-BBKw480Q.js";import{_ as z}from"./index-Ci9lmgKU.js";import{f as g,b as A}from"./index-BjfF9UyA.js";import{_ as L}from"./picker-Ca2nXd8o.js";import{_ as M}from"./picker-DgQFUz5X.js";import{D as T}from"./vuedraggable-sl9LAZCB.js";import{l as b}from"./lodash-es-R-kYiKr_.js";import{d as q,b as G,o as _,c as h,V as t,M as l,a as s,u as p,L as H,S as J,R as K}from"./@vue-pHjCrgw6.js";const P={class:"bg-fill-light flex items-center w-full p-4 mt-4"},Q={class:"ml-3 flex-1"},W={class:"flex-1 flex items-center"},X={class:"drag-move cursor-move ml-auto"},Y={key:0,class:"mt-4"},u=5,de=q({__name:"attr",props:{content:{type:Object,default:()=>({})},styles:{type:Object,default:()=>({})}},emits:["update:content"],setup(r,{emit:v}){const c=v,d=r,f=G({get:()=>d.content,set:a=>{c("update:content",a)}}),k=()=>{var a;if(((a=d.content.data)==null?void 0:a.length)<u){const e=b(d.content);e.data.push({is_show:"1",image:"",name:"",link:{}}),c("update:content",e)}else g.msgError(`最多添加${u}张图片`)},w=a=>{var m;if(((m=d.content.data)==null?void 0:m.length)<=1)return g.msgError("最少保留一张图片");const e=b(d.content);e.data.splice(a,1),c("update:content",e)};return(a,e)=>{const m=M,y=I,i=j,E=L,U=F,C=A,B=z,D=O,N=R,$=S;return _(),h("div",null,[t($,{"label-width":"70px"},{default:l(()=>[t(N,{shadow:"never",class:"!border-none flex mt-2"},{default:l(()=>{var V;return[e[2]||(e[2]=s("div",{class:"flex items-end mb-4"},[s("div",{class:"text-base text-[#101010] font-medium"},"菜单"),s("div",{class:"text-xs text-tx-secondary ml-2"}," 最多添加5张，建议图片尺寸：750px*200px ")],-1)),t(p(T),{class:"draggable",modelValue:p(f).data,"onUpdate:modelValue":e[0]||(e[0]=o=>p(f).data=o),animation:"300",handle:".drag-move","item-key":"index"},{item:l(({element:o,index:x})=>[(_(),H(B,{key:x,onClose:n=>w(x),class:"w-[467px]"},{default:l(()=>[s("div",P,[t(m,{modelValue:o.image,"onUpdate:modelValue":n=>o.image=n,"upload-class":"bg-body","exclude-domain":""},null,8,["modelValue","onUpdate:modelValue"]),s("div",Q,[t(i,{label:"图片名称"},{default:l(()=>[t(y,{modelValue:o.name,"onUpdate:modelValue":n=>o.name=n,placeholder:"请输入名称"},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),t(i,{class:"mt-[18px]",label:"图片链接"},{default:l(()=>[t(E,{modelValue:o.link,"onUpdate:modelValue":n=>o.link=n},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),t(i,{label:"是否显示",class:"mt-[18px]"},{default:l(()=>[s("div",W,[t(U,{modelValue:o.is_show,"onUpdate:modelValue":n=>o.is_show=n,"active-value":"1","inactive-value":"0"},null,8,["modelValue","onUpdate:modelValue"]),s("div",X,[t(C,{name:"el-icon-Rank",size:"18"})])])]),_:2},1024)])])]),_:2},1032,["onClose"]))]),_:1},8,["modelValue"]),((V=r.content.data)==null?void 0:V.length)<u?(_(),h("div",Y,[t(D,{class:"w-full",type:"primary",onClick:k},{default:l(()=>e[1]||(e[1]=[J("添加图片")])),_:1})])):K("",!0)]}),_:1})]),_:1})])}}});export{de as _};