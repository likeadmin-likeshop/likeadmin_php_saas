import{K as b,E as V,w as D}from"./element-plus.7eee367e.js";import{_ as v}from"./index.ee56d1f9.js";import{_ as C}from"./picker.30b2a31e.js";import{_ as U}from"./picker.817c3451.js";import{P as j}from"./index.c98e7a8f.js";import{f as d}from"./index.0b72dd38.js";import{d as N,s as O,o as u,O as i,P as t,X as o,a as n,c as m,a8 as P,W as R,U as S}from"./@vue.b52708da.js";const $={class:"flex flex-wrap p-4"},K={class:"bg-fill-light w-full p-4"},L={class:"flex items-center"},T=n("div",{class:"w-[122px] h-[122px] flex justify-center items-center"}," \u8F6E\u64AD\u56FE ",-1),W={class:"mt-4 ml-4"},M=N({__name:"content",props:{content:{type:Object,default:()=>({})},styles:{type:Object,default:()=>({})},height:{type:String,default:"170px"}},setup(_,{expose:f}){const c=O(),l=_,h=()=>{var e;(e=c.value)==null||e.open()},E=()=>{var e;(e=c.value)==null||e.close()},F=()=>{var e;((e=l.content.data)==null?void 0:e.length)<10?l.content.data.push({image:"",name:"",link:{}}):d.msgError(`\u6700\u591A\u6DFB\u52A0${10}\u5F20\u56FE\u7247`)},g=e=>{var p;if(((p=l.content.data)==null?void 0:p.length)<=1)return d.msgError("\u6700\u5C11\u4FDD\u7559\u4E00\u4E2A\u8F6E\u64AD\u56FE");l.content.data.splice(e,1)};return f({open:h}),(e,p)=>{const x=b,k=U,A=C,y=v,w=D,B=V;return u(),i(j,{ref_key:"popupRef",ref:c,title:"\u8F6E\u64AD\u56FE\u8BBE\u7F6E",async:!0,width:"980px",onConfirm:E},{default:t(()=>[o(x,{title:"\u6700\u591A\u53EF\u6DFB\u52A010\u5F20\uFF0C\u5EFA\u8BAE\u56FE\u7247\u5C3A\u5BF8750px*440px",type:"warning"}),o(B,{height:"400px",class:"mt-4"},{default:t(()=>[n("div",$,[(u(!0),m(R,null,P(_.content.data,(a,r)=>(u(),m("div",{key:r,class:"w-[400px] mr-4 mb-4"},[(u(),i(y,{key:r,onClose:s=>g(r),class:"w-full"},{default:t(()=>[n("div",K,[n("div",L,[o(k,{width:"122px",height:"122px",modelValue:a.image,"onUpdate:modelValue":s=>a.image=s,"upload-class":"bg-body","exclude-domain":""},{upload:t(()=>[T]),_:2},1032,["modelValue","onUpdate:modelValue"]),o(A,{modelValue:a.link,"onUpdate:modelValue":s=>a.link=s},null,8,["modelValue","onUpdate:modelValue"])])])]),_:2},1032,["onClose"]))]))),128))]),n("div",W,[o(w,{link:"",type:"primary",onClick:F},{default:t(()=>[S("+ \u6DFB\u52A0\u8F6E\u64AD\u56FE")]),_:1})])]),_:1})]),_:1},512)}}});export{M as _};
