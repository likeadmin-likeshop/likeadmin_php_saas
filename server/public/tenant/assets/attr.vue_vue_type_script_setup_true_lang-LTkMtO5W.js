import{B as V,C as b,I as w,D as x}from"./element-plus-BBKw480Q.js";import{_ as g}from"./picker-CPN9O9-_.js";import{d as k,b as E,o as U,c as B,V as e,M as n,u as o,a as C}from"./@vue-pHjCrgw6.js";const j=k({__name:"attr",props:{content:{type:Object,default:()=>({})},styles:{type:Object,default:()=>({})}},emits:["update:content"],setup(u,{emit:r}){const p=r,i=u,l=E({get:()=>i.content,set:s=>{p("update:content",s)}});return(s,t)=>{const d=V,m=b,_=g,c=w,f=x;return U(),B("div",null,[e(f,{"label-width":"90px",size:"large","label-position":"top"},{default:n(()=>[e(c,{shadow:"never",class:"!border-none flex mt-2"},{default:n(()=>[e(m,{label:"平台名称"},{default:n(()=>[e(d,{class:"w-[400px]","show-word-limit":"",maxlength:"20",modelValue:o(l).title,"onUpdate:modelValue":t[0]||(t[0]=a=>o(l).title=a)},null,8,["modelValue"])]),_:1}),e(m,{label:"客服二维码"},{default:n(()=>[C("div",null,[e(_,{modelValue:o(l).qrcode,"onUpdate:modelValue":t[1]||(t[1]=a=>o(l).qrcode=a),"exclude-domain":""},null,8,["modelValue"])])]),_:1}),e(m,{label:"备注"},{default:n(()=>[e(d,{class:"w-[400px]","show-word-limit":"",maxlength:"20",modelValue:o(l).remark,"onUpdate:modelValue":t[2]||(t[2]=a=>o(l).remark=a)},null,8,["modelValue"])]),_:1}),e(m,{label:"联系电话"},{default:n(()=>[e(d,{class:"w-[400px]",modelValue:o(l).mobile,"onUpdate:modelValue":t[3]||(t[3]=a=>o(l).mobile=a)},null,8,["modelValue"])]),_:1}),e(m,{label:"服务时间"},{default:n(()=>[e(d,{class:"w-[400px]","show-word-limit":"",maxlength:"20",modelValue:o(l).time,"onUpdate:modelValue":t[4]||(t[4]=a=>o(l).time=a)},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})])}}});export{j as _};