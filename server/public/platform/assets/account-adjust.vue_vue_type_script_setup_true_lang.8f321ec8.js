import{D as B,G as R,H as g,C as N,F as q}from"./element-plus.7eee367e.js";import{P as A}from"./index.c98e7a8f.js";import{f as C}from"./index.0b72dd38.js";import{d as I,s as D,a1 as P,b as U,w as b,o as j,O as G,P as a,a as S,X as o,u as r,U as n,V as E}from"./@vue.b52708da.js";const H={class:"pr-8"},z=I({__name:"account-adjust",props:{show:{type:Boolean,required:!0},value:{type:[Number,String],required:!0}},emits:["update:show","confirm"],setup(d,{emit:w}){const s=D(),i=d,c=w,u=P({action:1,num:"",remark:""}),m=D(),f=U(()=>Number(i.value)+Number(u.num)*(u.action==1?1:-1)),v={num:[{required:!0,message:"\u8BF7\u8F93\u5165\u8C03\u6574\u7684\u91D1\u989D"}]},V=e=>{if(e.includes("-"))return C.msgError("\u8BF7\u8F93\u5165\u6B63\u6574\u6570");u.num=e},y=async()=>{var e;await((e=s.value)==null?void 0:e.validate()),c("confirm",u)},h=()=>{var e;c("update:show",!1),(e=s.value)==null||e.resetFields()};return b(()=>i.show,e=>{var l,t;e?(l=m.value)==null||l.open():(t=m.value)==null||t.close()}),b(f,e=>{e<0&&(C.msgError("\u8C03\u6574\u540E\u4F59\u989D\u9700\u5927\u4E8E0"),u.num="")}),(e,l)=>{const t=B,_=R,k=g,F=N,x=q;return j(),G(A,{ref_key:"popupRef",ref:m,title:"\u4F59\u989D\u8C03\u6574",width:"500px",onConfirm:y,async:!0,onClose:h},{default:a(()=>[S("div",H,[o(x,{ref_key:"formRef",ref:s,model:r(u),"label-width":"120px",rules:v},{default:a(()=>[o(t,{label:"\u5F53\u524D\u4F59\u989D"},{default:a(()=>[n("\xA5 "+E(d.value),1)]),_:1}),o(t,{label:"\u4F59\u989D\u589E\u51CF",required:"",prop:"action"},{default:a(()=>[o(k,{modelValue:r(u).action,"onUpdate:modelValue":l[0]||(l[0]=p=>r(u).action=p)},{default:a(()=>[o(_,{label:1},{default:a(()=>[n("\u589E\u52A0\u4F59\u989D")]),_:1}),o(_,{label:2},{default:a(()=>[n("\u6263\u51CF\u4F59\u989D")]),_:1})]),_:1},8,["modelValue"])]),_:1}),o(t,{label:"\u8C03\u6574\u4F59\u989D",prop:"num"},{default:a(()=>[o(F,{"model-value":r(u).num,placeholder:"\u8BF7\u8F93\u5165\u8C03\u6574\u7684\u91D1\u989D",type:"number",onInput:V},null,8,["model-value"])]),_:1}),o(t,{label:"\u8C03\u6574\u540E\u4F59\u989D"},{default:a(()=>[n(" \xA5 "+E(r(f)),1)]),_:1}),o(t,{label:"\u5907\u6CE8",prop:"remark"},{default:a(()=>[o(F,{modelValue:r(u).remark,"onUpdate:modelValue":l[1]||(l[1]=p=>r(u).remark=p),type:"textarea",rows:4},null,8,["modelValue"])]),_:1})]),_:1},8,["model"])])]),_:1},512)}}});export{z as _};
