import{G as S,H as j,t as N,I as $,C as z,D as O,w as R,F as G}from"./element-plus.7eee367e.js";import{_ as T}from"./index.ee56d1f9.js";import{f as g,b as H,d as P}from"./index.0b72dd38.js";import{_ as W}from"./picker.30b2a31e.js";import{_ as X}from"./picker.817c3451.js";import{D as q}from"./vuedraggable.df1458c6.js";import{d as J,o as s,O as c,P as e,X as t,U as p,a as o,u as K,c as C,W as L,T as x,bk as M,bj as Q}from"./@vue.b52708da.js";import"./@element-plus.35ec7429.js";import"./lodash-es.2b4cc642.js";import"./dayjs.200e405c.js";import"./axios.185aa428.js";import"./async-validator.fb49d0f5.js";import"./@ctrl.b082b0c1.js";import"./@popperjs.36402333.js";import"./escape-html.e5dfadb9.js";import"./normalize-wheel-es.8aeb3683.js";import"./@vueuse.e1a32ef4.js";import"./lodash.2a1164eb.js";import"./vue-router.48496b4b.js";import"./pinia.3f41eb90.js";import"./css-color-function.a7ba2eb5.js";import"./color.70ead11b.js";import"./clone.b2899de9.js";import"./color-convert.755d189f.js";import"./color-name.e7a4e1d3.js";import"./color-string.e356f5de.js";import"./balanced-match.d2a36341.js";import"./ms.564e106c.js";import"./nprogress.eb37b9ca.js";import"./vue-clipboard3.066895f5.js";import"./clipboard.920a9914.js";import"./echarts.004f4e72.js";import"./zrender.b56a9aa5.js";import"./tslib.60310f1a.js";import"./highlight.js.db90315f.js";import"./@highlightjs.0797cc3b.js";import"./index.vue_vue_type_script_setup_true_lang.76a0ef41.js";import"./usePaging.771acc0e.js";import"./article.1aa2c3b6.js";import"./index.c98e7a8f.js";import"./index.72f08baf.js";import"./index.3a51da07.js";import"./index.vue_vue_type_script_setup_true_lang.62c675a2.js";import"./vue3-video-play.36140ed9.js";import"./vue.b58a5519.js";import"./sortablejs.6562030b.js";const m=l=>(M("data-v-a1417f6c"),l=l(),Q(),l),Y=m(()=>o("div",{class:"flex items-end mb-4"},[o("div",{class:"text-base text-[#101010] font-medium"},"\u5C55\u793A\u6837\u5F0F")],-1)),Z=m(()=>o("div",{class:"flex items-end mb-4"},[o("div",{class:"text-base text-[#101010] font-medium"},"\u80CC\u666F\u8054\u52A8")],-1)),ee=m(()=>o("div",{class:"p-[15px] rounded-[8px] bg-[#f3f8ff] text-[#136bdf] mt-2"}," \u5F00\u542F\u80CC\u666F\u8054\u52A8\u540E\uFF0C\u9700\u4E3A\u8F6E\u64AD\u56FE\u8BBE\u7F6E\u80CC\u666F\u56FE\uFF0C\u8F6E\u64AD\u56FE\u5207\u6362\u65F6\uFF0C\u80CC\u666F\u56FE\u4E5F\u8DDF\u968F\u5207\u6362\uFF0C\u6B64\u65F6\u8BE5\u9875\u9762\u81EA\u8EAB\u7684\u201C\u9875\u9762\u80CC\u666F\u201C\u8BBE\u7F6E\u5C06\u5931\u6548\u3002 ",-1)),te=m(()=>o("div",{class:"flex items-end"},[o("div",{class:"text-base text-[#101010] font-medium"},"\u8F6E\u64AD\u56FE\u7247"),o("div",{class:"text-xs text-tx-secondary ml-2"}," \u6700\u591A\u6DFB\u52A05\u5F20\uFF0C\u5EFA\u8BAE\u56FE\u7247\u5C3A\u5BF8\uFF1A750px*340px ")],-1)),oe={class:"flex-1"},le={class:"bg-fill-light w-full p-4 mt-4"},ue={class:"flex justify-center w-[396px]"},ae=m(()=>o("div",{class:"w-[122px] h-[122px] banner-upload-btn"}," \u8F6E\u64AD\u56FE ",-1)),ne=m(()=>o("div",{class:"w-[122px] h-[122px] banner-upload-btn"}," \u80CC\u666F\u56FE ",-1)),se={class:"flex-1"},de={class:"flex-1 flex items-center"},me={class:"drag-move cursor-move ml-auto"},ie={key:0,class:"mt-4"},E=5,ce=J({__name:"attr",props:{content:{type:Object,default:()=>({})},styles:{type:Object,default:()=>({})},type:{type:String,default:"mobile"}},setup(l){const r=l,v=()=>{var i;((i=r.content.data)==null?void 0:i.length)<E?r.content.data.push({is_show:"1",image:"",name:"",link:{}}):g.msgError(`\u6700\u591A\u6DFB\u52A0${E}\u5F20\u56FE\u7247`)},y=i=>{var n;if(((n=r.content.data)==null?void 0:n.length)<=1)return g.msgError("\u6700\u5C11\u4FDD\u7559\u4E00\u5F20\u56FE\u7247");r.content.data.splice(i,1)};return(i,n)=>{const _=S,b=j,F=$,f=X,A=W,k=z,V=O,w=N,B=H,D=T,U=R,I=G;return s(),c(I,{"label-width":"70px"},{default:e(()=>[t(F,{shadow:"never",class:"!border-none flex mt-2"},{default:e(()=>[Y,t(b,{modelValue:l.content.style,"onUpdate:modelValue":n[0]||(n[0]=d=>l.content.style=d)},{default:e(()=>[t(_,{label:1},{default:e(()=>[p("\u5E38\u89C4")]),_:1}),t(_,{label:2},{default:e(()=>[p("\u5927\u5C4F")]),_:1})]),_:1},8,["modelValue"])]),_:1}),t(F,{shadow:"never",class:"!border-none flex mt-2"},{default:e(()=>[Z,t(b,{modelValue:l.content.bg_style,"onUpdate:modelValue":n[1]||(n[1]=d=>l.content.bg_style=d)},{default:e(()=>[t(_,{label:1},{default:e(()=>[p("\u5F00\u542F")]),_:1}),t(_,{label:0},{default:e(()=>[p("\u5173\u95ED")]),_:1})]),_:1},8,["modelValue"]),ee]),_:1}),t(F,{shadow:"never",class:"!border-none flex mt-2"},{default:e(()=>{var d;return[te,o("div",oe,[t(K(q),{class:"draggable",modelValue:l.content.data,"onUpdate:modelValue":n[2]||(n[2]=u=>l.content.data=u),animation:"300",handle:".drag-move"},{item:e(({element:u,index:h})=>[(s(),c(D,{key:h,onClose:a=>y(h),class:"w-full"},{default:e(()=>[o("div",le,[o("div",ue,[l.content.style==1?(s(),C(L,{key:0},[t(f,{size:"122px",modelValue:u.image,"onUpdate:modelValue":a=>u.image=a,"upload-class":"bg-body","exclude-domain":""},{upload:e(()=>[ae]),_:2},1032,["modelValue","onUpdate:modelValue"]),t(f,{size:"122px",modelValue:u.bg,"onUpdate:modelValue":a=>u.bg=a,"upload-class":"bg-body","exclude-domain":""},{upload:e(()=>[ne]),_:2},1032,["modelValue","onUpdate:modelValue"])],64)):(s(),c(f,{key:1,width:"396px",height:"196px",modelValue:u.image,"onUpdate:modelValue":a=>u.image=a,"upload-class":"bg-body","exclude-domain":""},null,8,["modelValue","onUpdate:modelValue"]))]),o("div",se,[t(V,{class:"mt-[18px]",label:"\u56FE\u7247\u94FE\u63A5"},{default:e(()=>[l.type=="mobile"?(s(),c(A,{key:0,modelValue:u.link,"onUpdate:modelValue":a=>u.link=a},null,8,["modelValue","onUpdate:modelValue"])):x("",!0),l.type=="pc"?(s(),c(k,{key:1,placeholder:"\u8BF7\u8F93\u5165\u94FE\u63A5",modelValue:u.link.path,"onUpdate:modelValue":a=>u.link.path=a},null,8,["modelValue","onUpdate:modelValue"])):x("",!0)]),_:2},1024),t(V,{label:"\u662F\u5426\u663E\u793A",class:"mt-[18px] !mb-0"},{default:e(()=>[o("div",de,[t(w,{modelValue:u.is_show,"onUpdate:modelValue":a=>u.is_show=a,"active-value":"1","inactive-value":"0"},null,8,["modelValue","onUpdate:modelValue"]),o("div",me,[t(B,{name:"el-icon-Rank",size:"18"})])])]),_:2},1024)])])]),_:2},1032,["onClose"]))]),_:1},8,["modelValue"])]),((d=l.content.data)==null?void 0:d.length)<E?(s(),C("div",ie,[t(U,{class:"w-full",type:"primary",onClick:v},{default:e(()=>[p("\u6DFB\u52A0\u56FE\u7247")]),_:1})])):x("",!0)]}),_:1})]),_:1})}}});const ut=P(ce,[["__scopeId","data-v-a1417f6c"]]);export{ut as default};
