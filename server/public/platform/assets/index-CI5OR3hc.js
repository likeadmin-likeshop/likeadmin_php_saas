import{G as C,H as h,g as E,I as x,F as L,J as B}from"./element-plus-D_drhFLK.js";import{b as T}from"./message-CGJ_6D74.js";import{_ as R}from"./edit.vue_vue_type_script_setup_true_lang-CwHnblq8.js";import{d as u,s as S,Z as V,an as D,o as i,c as N,O as _,u as f,L as a,M as e,V as r,S as m}from"./@vue-TMcuEboY.js";import"./lodash-es-R-kYiKr_.js";import"./async-validator-DKvM95Vc.js";import"./@element-plus-C2WBhajb.js";import"./dayjs-CMfar2R3.js";import"./balanced-match-mNcR6oh4.js";import"./@ctrl-r5W6hzzQ.js";import"./normalize-wheel-es-B6fDCfyv.js";import"./@popperjs-D9SI2xQl.js";import"./index-BxbNIcAc.js";import"./nprogress-Cgf5DU8x.js";import"./vue-router-CZY6S6gL.js";import"./pinia-ebUeA1L2.js";import"./axios-C-n2IhIP.js";import"./lodash-BtPWuHkK.js";import"./@vueuse-DE_336rM.js";import"./css-color-function-rJvg8h-6.js";import"./color-B0v57BL7.js";import"./clone-CuIhj1wH.js";import"./color-convert-BGgJB5UM.js";import"./color-name-BQ5IbGbl.js";import"./color-string-BhgG7-8u.js";import"./ms-CzQ2E3wO.js";import"./vue-clipboard3-8CNoFg4V.js";import"./clipboard-Dch_ozqB.js";import"./echarts-BR_QmBtV.js";import"./tslib-BDyQ-Jie.js";import"./zrender-B-CeXLwU.js";import"./highlight.js-D5uP1KGk.js";import"./@highlightjs-KJi31KWJ.js";import"./index-90XYeFLa.js";const $=u({name:"shortLetter"}),vt=u({...$,setup(z){const p=S(),o=V({loading:!1,lists:[]}),d=async()=>{try{o.loading=!0,o.lists=await T(),o.loading=!1}catch{o.loading=!1}},g=s=>{var t;(t=p.value)==null||t.open(s)};return d(),(s,t)=>{const n=C,c=h,v=E,b=x,k=L,y=D("perms"),w=B;return i(),N("div",null,[_((i(),a(k,{class:"!border-none",shadow:"never"},{default:e(()=>[r(b,{size:"large",data:f(o).lists},{default:e(()=>[r(n,{label:"短信渠道",prop:"name","min-width":"120"}),r(n,{label:"状态","min-width":"120"},{default:e(({row:l})=>[l.status==1?(i(),a(c,{key:0},{default:e(()=>t[0]||(t[0]=[m("开启")])),_:1})):(i(),a(c,{key:1,type:"danger"},{default:e(()=>t[1]||(t[1]=[m("关闭")])),_:1}))]),_:1}),r(n,{label:"操作","min-width":"120",fixed:"right"},{default:e(({row:l})=>[_((i(),a(v,{type:"primary",link:"",onClick:F=>g(l.type)},{default:e(()=>t[2]||(t[2]=[m(" 设置 ")])),_:2},1032,["onClick"])),[[y,["notice.sms_config/setConfig"]]])]),_:1})]),_:1},8,["data"])]),_:1})),[[w,f(o).loading]]),r(R,{ref_key:"editRef",ref:p,onSuccess:d},null,512)])}}});export{vt as default};