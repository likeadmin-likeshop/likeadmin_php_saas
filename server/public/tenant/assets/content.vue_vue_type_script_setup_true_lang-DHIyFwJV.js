import{J as S,h as j,s as N}from"./element-plus-BBKw480Q.js";import{_ as R}from"./index-DBJwNDpN.js";import{_ as $}from"./picker-BSMRtt37.js";import{_ as A}from"./picker-1_cw_4l0.js";import{P as D}from"./index-GqecLj8k.js";import{f as _}from"./index-B7u_HJai.js";import{l as f}from"./lodash-es-R-kYiKr_.js";import{d as L,s as O,o as r,L as h,M as o,V as n,a as l,c as g,aa as P,U as F,S as J}from"./@vue-pHjCrgw6.js";const M={class:"flex flex-wrap p-4"},T={class:"bg-fill-light w-full p-4"},q={class:"flex items-center"},z={class:"mt-4 ml-4"},Z=L({__name:"content",props:{content:{type:Object,default:()=>({})},styles:{type:Object,default:()=>({})},height:{type:String,default:"170px"}},emits:["update:content"],setup(d,{expose:x,emit:k}){const u=k,i=O(),a=d,y=()=>{var e;(e=i.value)==null||e.open()},V=()=>{var e;(e=i.value)==null||e.close()},b=()=>{var e;if(((e=a.content.data)==null?void 0:e.length)<10){const t=f(a.content);t.data.push({image:"",name:"",link:{}}),u("update:content",t)}else _.msgError("最多添加10张图片")},w=e=>{var s;if(((s=a.content.data)==null?void 0:s.length)<=1)return _.msgError("最少保留一个轮播图");const t=f(a.content);t.data.splice(e,1),u("update:content",t)};return x({open:y}),(e,t)=>{const s=S,v=A,C=$,E=R,B=j,U=N;return r(),h(D,{ref_key:"popupRef",ref:i,title:"轮播图设置",async:!0,width:"980px",onConfirm:V},{default:o(()=>[n(s,{title:"最多可添加10张，建议图片尺寸750px*440px",type:"warning"}),n(U,{height:"400px",class:"mt-4"},{default:o(()=>[l("div",M,[(r(!0),g(F,null,P(d.content.data,(c,m)=>(r(),g("div",{key:m,class:"w-[400px] mr-4 mb-4"},[(r(),h(E,{key:m,onClose:p=>w(m),class:"w-full"},{default:o(()=>[l("div",T,[l("div",q,[n(v,{width:"122px",height:"122px",modelValue:c.image,"onUpdate:modelValue":p=>c.image=p,"upload-class":"bg-body","exclude-domain":""},{upload:o(()=>t[0]||(t[0]=[l("div",{class:"w-[122px] h-[122px] flex justify-center items-center"}," 轮播图 ",-1)])),_:2},1032,["modelValue","onUpdate:modelValue"]),n(C,{modelValue:c.link,"onUpdate:modelValue":p=>c.link=p},null,8,["modelValue","onUpdate:modelValue"])])])]),_:2},1032,["onClose"]))]))),128))]),l("div",z,[n(B,{link:"",type:"primary",onClick:b},{default:o(()=>t[1]||(t[1]=[J("+ 添加轮播图")])),_:1})])]),_:1})]),_:1},512)}}});export{Z as _};