import{_ as B}from"./index.fb4c0815.js";import{D,F as E,Y as g,i as h}from"./element-plus.fa08061d.js";import{M as b}from"./picker.b701bb7b.js";import{a as k,b as y}from"./user.b30c1140.js";import{d as n,a1 as A,an as w,o as p,c as V,X as e,P as r,u as m,a as i,Q as x,O as S,U}from"./@vue.54440ad7.js";import"./index.f0d0dfdc.js";import"./nprogress.cea375b6.js";import"./axios.185aa428.js";import"./vue-router.680b42ce.js";import"./pinia.37585b34.js";import"./lodash.2a1164eb.js";import"./@vueuse.13464b8c.js";import"./css-color-function.a7ba2eb5.js";import"./color.70ead11b.js";import"./clone.b2899de9.js";import"./color-convert.755d189f.js";import"./color-name.e7a4e1d3.js";import"./color-string.e356f5de.js";import"./balanced-match.d2a36341.js";import"./ms.564e106c.js";import"./@element-plus.e62cc43c.js";import"./vue-clipboard3.066895f5.js";import"./clipboard.920a9914.js";import"./echarts.0909e9bd.js";import"./tslib.60310f1a.js";import"./zrender.91adfe72.js";import"./highlight.js.0fd4a67c.js";import"./@highlightjs.3654fb0a.js";import"./lodash-es.2b4cc642.js";import"./dayjs.200e405c.js";import"./async-validator.fb49d0f5.js";import"./@ctrl.b082b0c1.js";import"./@popperjs.36402333.js";import"./escape-html.e5dfadb9.js";import"./normalize-wheel-es.8aeb3683.js";import"./index.b74d1c73.js";import"./index.b34c1ed9.js";import"./index.vue_vue_type_script_setup_true_lang.e874211e.js";import"./index.30e99dad.js";import"./usePaging.86c68137.js";import"./vue3-video-play.2cf5a54a.js";import"./vuedraggable.70f82b2c.js";import"./vue.cc37df29.js";import"./sortablejs.6562030b.js";const N={class:"user-setup"},j=i("div",{class:"font-medium mb-7"},"\u57FA\u672C\u8BBE\u7F6E",-1),M=i("div",null,[i("div",{class:"form-tips"}," \u7528\u6237\u6CE8\u518C\u65F6\u7ED9\u7684\u9ED8\u8BA4\u5934\u50CF\uFF0C\u5EFA\u8BAE\u5C3A\u5BF8\uFF1A400*400\u50CF\u7D20\uFF0C\u652F\u6301jpg\uFF0Cjpeg\uFF0Cpng\u683C\u5F0F ")],-1),P=n({name:"userSetup"}),wt=n({...P,setup(I){const t=A({default_avatar:""}),u=async()=>{try{const o=await k();for(const a in t)t[a]=o[a]}catch(o){console.log("\u83B7\u53D6=>",o)}},l=async()=>{try{await y(t),u()}catch(o){console.log("\u4FDD\u5B58=>",o)}};return u(),(o,a)=>{const c=b,s=D,_=E,d=g,f=h,F=B,C=w("perms");return p(),V("div",N,[e(d,{shadow:"never",class:"!border-none"},{default:r(()=>[j,e(_,{ref:"formRef",model:m(t),"label-width":"120px"},{default:r(()=>[e(s,{label:"\u7528\u6237\u9ED8\u8BA4\u5934\u50CF"},{default:r(()=>[i("div",null,[e(c,{modelValue:m(t).default_avatar,"onUpdate:modelValue":a[0]||(a[0]=v=>m(t).default_avatar=v),limit:1},null,8,["modelValue"])])]),_:1}),e(s,null,{default:r(()=>[M]),_:1})]),_:1},8,["model"])]),_:1}),x((p(),S(F,null,{default:r(()=>[e(f,{type:"primary",onClick:l},{default:r(()=>[U("\u4FDD\u5B58")]),_:1})]),_:1})),[[C,["setting.user.user/setConfig"]]])])}}});export{wt as default};