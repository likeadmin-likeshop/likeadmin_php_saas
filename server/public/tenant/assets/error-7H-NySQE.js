import{h as c}from"./element-plus-B9ALq7eR.js";import{a as d}from"./vue-router-D4MxfuQi.js";import{d as u,r as f,Y as v,o as a,c as _,a as r,I as B,T as i,L as h,M as x,S as g,u as y,R as k}from"./@vue-TMcuEboY.js";import{d as I}from"./index-Di9-CjgU.js";import"./lodash-es-R-kYiKr_.js";import"./async-validator-DKvM95Vc.js";import"./@element-plus-BZaexRrS.js";import"./dayjs-CMfar2R3.js";import"./balanced-match-mNcR6oh4.js";import"./@ctrl-r5W6hzzQ.js";import"./normalize-wheel-es-B6fDCfyv.js";import"./@popperjs-D9SI2xQl.js";import"./nprogress-Cgf5DU8x.js";import"./pinia-ebUeA1L2.js";import"./axios-C-n2IhIP.js";import"./lodash-BtPWuHkK.js";import"./@vueuse-BQYVjZ5N.js";import"./css-color-function-rJvg8h-6.js";import"./color-B0v57BL7.js";import"./clone-CuIhj1wH.js";import"./color-convert-BGgJB5UM.js";import"./color-name-BQ5IbGbl.js";import"./color-string-BhgG7-8u.js";import"./ms-CzQ2E3wO.js";import"./vue-clipboard3-8CNoFg4V.js";import"./clipboard-Dch_ozqB.js";import"./echarts-BR_QmBtV.js";import"./tslib-BDyQ-Jie.js";import"./zrender-B-CeXLwU.js";import"./highlight.js-D5uP1KGk.js";import"./@highlightjs-KJi31KWJ.js";const S={class:"error"},w={class:"error-code"},C={class:"text-lg text-tx-secondary mt-7 mb-7"},b=u({__name:"error",props:{code:String,title:String,showBtn:{type:Boolean,default:!0}},setup(t){const n=t;let o=null;const e=f(5),s=d();return n.showBtn&&(o=setInterval(()=>{e.value===0?(clearInterval(o),s.go(-1)):e.value--},1e3)),v(()=>{o&&clearInterval(o)}),(p,m)=>{const l=c;return a(),_("div",S,[r("div",null,[B(p.$slots,"content",{},()=>[r("div",w,i(t.code),1)],!0),r("div",C,i(t.title),1),t.showBtn?(a(),h(l,{key:0,type:"primary",onClick:m[0]||(m[0]=E=>y(s).go(-1))},{default:x(()=>[g(i(e.value)+" 秒后返回上一页 ",1)]),_:1})):k("",!0)])])}}}),mt=I(b,[["__scopeId","data-v-58b95848"]]);export{mt as default};
