import{_ as V}from"./index.853a1b6d.js";import{I as b,w as S}from"./element-plus.7eee367e.js";import N from"./menu.1ced26f3.js";import P from"./preview.3c976b3b.js";import{_ as C}from"./attr-setting.vue_vue_type_script_setup_true_lang.38c6e5d5.js";import{e as h}from"./index.d2e4226d.js";import{a as I,s as O}from"./decoration.ee4fe2b7.js";import{m as k,d as F}from"./index.0b72dd38.js";import{d as w,a1 as J,r as f,b as u,w as U,an as A,o as v,c as R,a as W,X as n,P as c,u as p,i as D,Q as j,O as H,U as Q}from"./@vue.b52708da.js";import"./@element-plus.35ec7429.js";import"./lodash-es.2b4cc642.js";import"./dayjs.200e405c.js";import"./axios.185aa428.js";import"./async-validator.fb49d0f5.js";import"./@ctrl.b082b0c1.js";import"./@popperjs.36402333.js";import"./escape-html.e5dfadb9.js";import"./normalize-wheel-es.8aeb3683.js";import"./@vueuse.e1a32ef4.js";import"./lodash.2a1164eb.js";import"./vue-router.48496b4b.js";import"./pinia.3f41eb90.js";import"./css-color-function.a7ba2eb5.js";import"./color.70ead11b.js";import"./clone.b2899de9.js";import"./color-convert.755d189f.js";import"./color-name.e7a4e1d3.js";import"./color-string.e356f5de.js";import"./balanced-match.d2a36341.js";import"./ms.564e106c.js";import"./nprogress.eb37b9ca.js";import"./vue-clipboard3.066895f5.js";import"./clipboard.920a9914.js";import"./echarts.004f4e72.js";import"./zrender.b56a9aa5.js";import"./tslib.60310f1a.js";import"./highlight.js.db90315f.js";import"./@highlightjs.0797cc3b.js";import"./attr.01ec5235.js";import"./index.ee56d1f9.js";import"./picker.30b2a31e.js";import"./index.vue_vue_type_script_setup_true_lang.76a0ef41.js";import"./usePaging.771acc0e.js";import"./article.1aa2c3b6.js";import"./index.c98e7a8f.js";import"./picker.817c3451.js";import"./index.72f08baf.js";import"./index.3a51da07.js";import"./index.vue_vue_type_script_setup_true_lang.62c675a2.js";import"./vue3-video-play.36140ed9.js";import"./vuedraggable.df1458c6.js";import"./vue.b58a5519.js";import"./sortablejs.6562030b.js";import"./content.vue_vue_type_script_setup_true_lang.76aeda8c.js";import"./decoration-img.9132f8f5.js";import"./attr.vue_vue_type_script_setup_true_lang.4ee903f4.js";import"./content.5b4ebccf.js";import"./attr.vue_vue_type_script_setup_true_lang.7137993a.js";import"./content.vue_vue_type_script_setup_true_lang.b5870933.js";import"./attr.vue_vue_type_script_setup_true_lang.d4ca352b.js";import"./add-nav.vue_vue_type_script_setup_true_lang.ac43524e.js";import"./content.d3812890.js";import"./attr.vue_vue_type_script_setup_true_lang.85bb115b.js";import"./content.vue_vue_type_script_setup_true_lang.213f5232.js";import"./attr.vue_vue_type_script_setup_true_lang.1a9ff2eb.js";import"./content.e1128990.js";import"./attr.vue_vue_type_script_setup_true_lang.19d484b2.js";import"./index.vue_vue_type_script_setup_true_lang.1ee50c8e.js";import"./content.6c904fb4.js";import"./attr.27539cfb.js";import"./content.vue_vue_type_script_setup_true_lang.08c90d04.js";import"./attr.vue_vue_type_script_setup_true_lang.87b11275.js";import"./content.104881e2.js";import"./attr.vue_vue_type_script_setup_true_lang.2aaab66c.js";import"./content.vue_vue_type_script_setup_true_lang.cdb3de2e.js";import"./attr.vue_vue_type_script_setup_true_lang.83c0f571.js";import"./content.12e67da4.js";const X={class:"decoration-pages min-w-[1100px]"},$={class:"flex flex-1 h-full justify-between"},q=w({name:"decorationPages"}),z=w({...q,setup(G){let d;(e=>{e.HOME="1",e.USER="2",e.SERVICE="3"})(d||(d={}));const m=e=>e.map(t=>{var r;return{id:k(),...((r=h[t])==null?void 0:r.options())||{}}}),a=J({[1]:{id:1,type:1,name:"\u9996\u9875\u88C5\u4FEE",pageMeta:m(["page-meta"]),pageData:m(["search","banner","nav","news"])},[2]:{id:2,type:2,name:"\u4E2A\u4EBA\u4E2D\u5FC3",pageMeta:m(["page-meta"]),pageData:m(["user-info","my-service","user-banner"])},[3]:{id:3,type:3,name:"\u5BA2\u670D\u8BBE\u7F6E",pageMeta:null,pageData:m(["customer-service"])}}),o=f("1"),i=f(-1),g=u(()=>{var e,t;return(t=(e=a[o.value])==null?void 0:e.pageData)!=null?t:[]}),x=u(()=>{var e,t;return(t=(e=a[o.value])==null?void 0:e.pageMeta)!=null?t:null}),y=u(()=>{var e,t,s,r;return i.value===-1?(t=(e=a[o.value])==null?void 0:e.pageMeta[0])!=null?t:"":(r=(s=a[o.value])==null?void 0:s.pageData[i.value])!=null?r:""}),_=async()=>{const e=await I({id:o.value});a[String(e.id)].pageData=JSON.parse(e.data),a[String(e.id)].pageMeta=e!=null&&e.meta?JSON.parse(e==null?void 0:e.meta):null},M=async()=>{const e=a[o.value];await O({...e,data:JSON.stringify(e.pageData),meta:e!=null&&e.pageMeta?JSON.stringify(e==null?void 0:e.pageMeta):null}),_()};return U(o,()=>{i.value=g.value.findIndex(e=>!e.disabled),_()},{immediate:!0}),(e,t)=>{const s=b,r=S,E=V,B=A("perms");return v(),R("div",X,[W("div",$,[n(s,{shadow:"never",class:"!border-none flex scroll-view-content","body-style":{"padding-right":0}},{default:c(()=>[n(N,{modelValue:p(o),"onUpdate:modelValue":t[0]||(t[0]=l=>D(o)?o.value=l:null),menus:p(a)},null,8,["modelValue","menus"])]),_:1}),n(P,{class:"flex-1 scroll-view-content",modelValue:p(i),"onUpdate:modelValue":t[1]||(t[1]=l=>D(i)?i.value=l:null),pageData:p(g),pageMeta:p(x)},null,8,["modelValue","pageData","pageMeta"]),n(C,{class:"w-[560px] scroll-view-content",widget:p(y)},null,8,["widget"])]),j((v(),H(E,{class:"mt-4",fixed:!1},{default:c(()=>[n(r,{type:"primary",onClick:M},{default:c(()=>[Q("\u4FDD\u5B58")]),_:1})]),_:1})),[[B,["decorate:pages:save"]]])])}}});const Dt=F(z,[["__scopeId","data-v-28813749"]]);export{Dt as default};
