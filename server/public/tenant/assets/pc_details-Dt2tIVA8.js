import{I as k,h as V}from"./element-plus-BBKw480Q.js";import{m as B}from"./@element-plus-DMfktWgm.js";import{s as P,a as h}from"./decoration-BvMjhZsa.js";import{f as C,d as E}from"./index-BbPjdxcP.js";import I from"./preview-pc-BUY1fttp.js";import{a as N}from"./vue-router-DAYuzRuG.js";import{d as v,Z as O,r as d,b as S,w as M,an as J,o as u,c as R,V as p,M as m,a as f,u as s,i as T,S as _,O as j,L as H}from"./@vue-pHjCrgw6.js";import"./lodash-es-R-kYiKr_.js";import"./async-validator-DKvM95Vc.js";import"./dayjs-CMfar2R3.js";import"./balanced-match-mNcR6oh4.js";import"./@ctrl-r5W6hzzQ.js";import"./normalize-wheel-es-B6fDCfyv.js";import"./@popperjs-D9SI2xQl.js";import"./nprogress-Cgf5DU8x.js";import"./pinia-CJRVDLHa.js";import"./axios-C-n2IhIP.js";import"./lodash-BtPWuHkK.js";import"./@vueuse-djZFs-WH.js";import"./css-color-function-rJvg8h-6.js";import"./color-B0v57BL7.js";import"./clone-CuIhj1wH.js";import"./color-convert-BGgJB5UM.js";import"./color-name-BQ5IbGbl.js";import"./color-string-BhgG7-8u.js";import"./ms-CzQ2E3wO.js";import"./vue-clipboard3-8CNoFg4V.js";import"./clipboard-Dch_ozqB.js";import"./echarts-BR_QmBtV.js";import"./tslib-BDyQ-Jie.js";import"./zrender-B-CeXLwU.js";import"./highlight.js-D5uP1KGk.js";import"./@highlightjs-D4DIzBxc.js";import"./index-fBQWkcTv.js";import"./attr-C5ihmM8_.js";import"./index-C9tPsBdm.js";import"./picker-Cecl-ikL.js";import"./index-K_6Jr5Pj.js";import"./index.vue_vue_type_script_setup_true_lang-C8s7BCrl.js";import"./article-C2b7vLMi.js";import"./usePaging-DPOcKk5Q.js";import"./picker-CPN9O9-_.js";import"./index-D0Vk1l1k.js";import"./index-DBYeD8Z1.js";import"./index.vue_vue_type_script_setup_true_lang-Bn4FPOLS.js";import"./vue3-video-play-DOrZ4nvR.js";import"./vuedraggable-sl9LAZCB.js";import"./vue-PIt_O_4w.js";import"./sortablejs-DdgKbxid.js";import"./content.vue_vue_type_script_setup_true_lang-Bervzjxy.js";import"./decoration-img-DJxZ3Ddp.js";import"./attr.vue_vue_type_script_setup_true_lang-LTkMtO5W.js";import"./content-CRDSYSe7.js";import"./attr.vue_vue_type_script_setup_true_lang-DSgk5cYF.js";import"./content.vue_vue_type_script_setup_true_lang-BHUpju0E.js";import"./attr.vue_vue_type_script_setup_true_lang-zRkdOetr.js";import"./add-nav.vue_vue_type_script_setup_true_lang-JaQUrWmb.js";import"./content-DBQBHXVY.js";import"./attr.vue_vue_type_script_setup_true_lang-BcZWJOfA.js";import"./content.vue_vue_type_script_setup_true_lang-DpkUx240.js";import"./attr.vue_vue_type_script_setup_true_lang-DRzzmmf3.js";import"./content-DnV8JHVJ.js";import"./attr.vue_vue_type_script_setup_true_lang-CgRw3CO-.js";import"./index.vue_vue_type_script_setup_true_lang-DWrUfkMt.js";import"./content-Ct4FbWCn.js";import"./content.vue_vue_type_script_setup_true_lang-Cxzir5LV.js";import"./attr.vue_vue_type_script_setup_true_lang-DK0xOR5W.js";import"./content-Bj0PA8Ty.js";import"./attr.vue_vue_type_script_setup_true_lang-3Ga3NfhK.js";import"./content.vue_vue_type_script_setup_true_lang-wpMB97P8.js";import"./attr.vue_vue_type_script_setup_true_lang-vylPiZdf.js";import"./content-DGOWANHR.js";const L={class:"decoration-pages min-w-[1100px]"},U={class:"flex justify-between w-full"},W={class:"flex-1 h-full"},Z=v({name:"decorationPc"}),q=v({...Z,setup(z){const g=N();let n;(t=>{t.HOME="4"})(n||(n={}));const a=O({4:{id:4,type:4,name:"首页装修",pageData:[]}}),e=d("4"),r=d(0),i=S(()=>{var t;return((t=a[e.value])==null?void 0:t.pageData)??[]}),w=async()=>{await C.confirm("确定离开此页面？系统可能不会保存您所做的更改。"),g.back()},c=async()=>{const t=await h({id:e.value});a[String(t.id)].pageData=JSON.parse(t.data),r.value=i.value.findIndex(o=>!o.disabled)},D=async()=>{await P({...a[e.value],data:JSON.stringify(a[e.value].pageData)}),c()};return M(e,()=>{r.value=i.value.findIndex(t=>!t.disabled),c()},{immediate:!0}),(t,o)=>{const l=V,x=k,y=J("perms");return u(),R("div",L,[p(x,{shadow:"never",class:"!border-none !rounded-none !bg-primary"},{default:m(()=>[f("div",U,[p(l,{link:"",type:"primary",icon:s(B),style:{color:"#fff"},onClick:w},{default:m(()=>o[1]||(o[1]=[_(" 返回 ")])),_:1},8,["icon"]),j((u(),H(l,{onClick:D},{default:m(()=>o[2]||(o[2]=[_(" 保存 ")])),_:1})),[[y,["decorate:pages:save"]]])])]),_:1}),f("div",W,[p(I,{modelValue:s(r),"onUpdate:modelValue":o[0]||(o[0]=b=>T(r)?r.value=b:null),pageData:s(i)},null,8,["modelValue","pageData"])])])}}}),co=E(q,[["__scopeId","data-v-62826702"]]);export{co as default};