import{w as A,a as P,E as T}from"./element-plus.7eee367e.js";import{d as z,r as K,b,o as i,O as k,P as s,c as f,X as l,U as L,T as C,a as c,W as O,a8 as U,R as V,K as W,S as j,u,$ as B}from"./@vue.b52708da.js";import{e as R}from"./index.d2e4226d.js";import{v as X,h as q,K as G,L as H}from"./@element-plus.35ec7429.js";import{d as J}from"./index.0b72dd38.js";import"./lodash-es.2b4cc642.js";import"./dayjs.200e405c.js";import"./axios.185aa428.js";import"./async-validator.fb49d0f5.js";import"./@ctrl.b082b0c1.js";import"./@popperjs.36402333.js";import"./escape-html.e5dfadb9.js";import"./normalize-wheel-es.8aeb3683.js";import"./attr.01ec5235.js";import"./index.ee56d1f9.js";import"./picker.30b2a31e.js";import"./index.vue_vue_type_script_setup_true_lang.76a0ef41.js";import"./usePaging.771acc0e.js";import"./article.1aa2c3b6.js";import"./index.c98e7a8f.js";import"./picker.817c3451.js";import"./index.72f08baf.js";import"./index.3a51da07.js";import"./index.vue_vue_type_script_setup_true_lang.62c675a2.js";import"./@vueuse.e1a32ef4.js";import"./vue3-video-play.36140ed9.js";import"./vuedraggable.df1458c6.js";import"./vue.b58a5519.js";import"./sortablejs.6562030b.js";import"./lodash.2a1164eb.js";import"./vue-router.48496b4b.js";import"./pinia.3f41eb90.js";import"./css-color-function.a7ba2eb5.js";import"./color.70ead11b.js";import"./clone.b2899de9.js";import"./color-convert.755d189f.js";import"./color-name.e7a4e1d3.js";import"./color-string.e356f5de.js";import"./balanced-match.d2a36341.js";import"./ms.564e106c.js";import"./nprogress.eb37b9ca.js";import"./vue-clipboard3.066895f5.js";import"./clipboard.920a9914.js";import"./echarts.004f4e72.js";import"./zrender.b56a9aa5.js";import"./tslib.60310f1a.js";import"./highlight.js.db90315f.js";import"./@highlightjs.0797cc3b.js";import"./content.vue_vue_type_script_setup_true_lang.76aeda8c.js";import"./decoration-img.9132f8f5.js";import"./attr.vue_vue_type_script_setup_true_lang.4ee903f4.js";import"./content.5b4ebccf.js";import"./attr.vue_vue_type_script_setup_true_lang.7137993a.js";import"./content.vue_vue_type_script_setup_true_lang.b5870933.js";import"./attr.vue_vue_type_script_setup_true_lang.d4ca352b.js";import"./add-nav.vue_vue_type_script_setup_true_lang.ac43524e.js";import"./content.d3812890.js";import"./attr.vue_vue_type_script_setup_true_lang.85bb115b.js";import"./content.vue_vue_type_script_setup_true_lang.213f5232.js";import"./attr.vue_vue_type_script_setup_true_lang.1a9ff2eb.js";import"./content.e1128990.js";import"./decoration.ee4fe2b7.js";import"./attr.vue_vue_type_script_setup_true_lang.19d484b2.js";import"./index.vue_vue_type_script_setup_true_lang.1ee50c8e.js";import"./content.6c904fb4.js";import"./attr.27539cfb.js";import"./content.vue_vue_type_script_setup_true_lang.08c90d04.js";import"./attr.vue_vue_type_script_setup_true_lang.87b11275.js";import"./content.104881e2.js";import"./attr.vue_vue_type_script_setup_true_lang.2aaab66c.js";import"./content.vue_vue_type_script_setup_true_lang.cdb3de2e.js";import"./attr.vue_vue_type_script_setup_true_lang.83c0f571.js";import"./content.12e67da4.js";const Q={class:"shadow mx-[30px] pages-preview"},Y=["onClick"],Z={key:0,class:"widget-btns py-[5px]"},g=z({__name:"preview",props:{pageMeta:{type:Object,default:()=>null},pageData:{type:Array,default:()=>[]},modelValue:{type:Number,default:0}},emits:["update:modelValue"],setup(m,{emit:E}){const a=m,d=E,y=K(-1),D=()=>{a.modelValue===-1?d("update:modelValue",y.value):(y.value=a.modelValue,d("update:modelValue",-1))},M=(e,o)=>{e.disabled||d("update:modelValue",o)},$=b(()=>e=>e===0),F=b(()=>e=>{var o;return((o=a.pageData)==null?void 0:o.length)===e+1}),_=b(()=>e=>(e==null?void 0:e.enabled)==0),N=e=>{e.enabled!==void 0&&(e.enabled=e.enabled?0:1)},h=(e,o)=>{if(e<0||e>=a.pageData.length||o<0||o>=a.pageData.length)return;const p=a.pageData.splice(e,1)[0];a.pageData.splice(o,0,p),d("update:modelValue",o)};return(e,o)=>{const p=A,v=P,S=T;return i(),k(S,{class:"pages-preview-container"},{default:s(()=>[m.pageMeta!==null?(i(),f("div",{key:0,class:"absolute right-4 top-4",onClick:D},[l(p,null,{default:s(()=>[L("\u9875\u9762\u8BBE\u7F6E")]),_:1})])):C("",!0),c("div",Q,[(i(!0),f(O,null,U(m.pageData,(t,r)=>(i(),f("div",{key:t.id,class:V(["relative",{"cursor-pointer":!(t!=null&&t.disabled)}]),onClick:n=>M(t,r)},[c("div",{class:V(["absolute w-full h-full z-[100] border-dashed",{select:r==m.modelValue,hide:_.value(t.content),"border-[#dcdfe6] border-2":!(t!=null&&t.disabled)}])},null,2),W(e.$slots,"default",{},()=>{var n;return[(i(),k(j((n=u(R)[t==null?void 0:t.name])==null?void 0:n.content),{content:t.content,styles:t.styles,key:t.id},null,8,["content","styles"]))]},!0),r==m.modelValue?(i(),f("div",Z,[c("div",null,[l(v,{effect:"dark",content:_.value(t.content)?"\u663E\u793A":"\u9690\u85CF",placement:"right"},{default:s(()=>[l(p,{class:"py-[5px]",type:"primary",icon:_.value(t.content)?u(X):u(q),onClick:n=>N(t.content)},null,8,["icon","onClick"])]),_:2},1032,["content"])]),c("div",null,[l(v,{effect:"dark",content:"\u4E0A\u79FB",placement:"right"},{default:s(()=>[l(p,{class:"py-[5px]",type:"primary",icon:u(G),disabled:$.value(r),onClick:B(n=>h(r,r-1),["stop"])},null,8,["icon","disabled","onClick"])]),_:2},1024)]),c("div",null,[l(v,{effect:"dark",content:"\u4E0B\u79FB",placement:"right"},{default:s(()=>[l(p,{class:"py-[5px]",type:"primary",icon:u(H),disabled:F.value(r),onClick:B(n=>h(r,r+1),["stop"])},null,8,["icon","disabled","onClick"])]),_:2},1024)])])):C("",!0)],10,Y))),128))])]),_:3})}}});const vt=J(g,[["__scopeId","data-v-d2fe9400"]]);export{vt as default};
