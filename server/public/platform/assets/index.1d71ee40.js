import{_ as v,G as b,H as w,I as k,i as y,J as x,K as T}from"./element-plus.52fc6c05.js";import{_ as L,s as N}from"./edit.vue_vue_type_script_setup_true_lang.e2fdb318.js";import{d as B,s as R,a1 as V,an as S,o,c as $,X as t,P as u,Q as d,u as E,O as s,U as F,a as i}from"./@vue.54440ad7.js";import"./@element-plus.e62cc43c.js";import"./lodash-es.2b4cc642.js";import"./dayjs.200e405c.js";import"./axios.185aa428.js";import"./async-validator.fb49d0f5.js";import"./@ctrl.b082b0c1.js";import"./@popperjs.36402333.js";import"./escape-html.e5dfadb9.js";import"./normalize-wheel-es.8aeb3683.js";import"./index.6f1476a0.js";import"./nprogress.cea375b6.js";import"./vue-router.680b42ce.js";import"./pinia.37585b34.js";import"./lodash.2a1164eb.js";import"./@vueuse.13464b8c.js";import"./css-color-function.a7ba2eb5.js";import"./color.70ead11b.js";import"./clone.b2899de9.js";import"./color-convert.755d189f.js";import"./color-name.e7a4e1d3.js";import"./color-string.e356f5de.js";import"./balanced-match.d2a36341.js";import"./ms.564e106c.js";import"./vue-clipboard3.066895f5.js";import"./clipboard.920a9914.js";import"./echarts.0909e9bd.js";import"./tslib.60310f1a.js";import"./zrender.91adfe72.js";import"./highlight.js.0fd4a67c.js";import"./@highlightjs.3654fb0a.js";import"./index.296703e3.js";const q={class:"storage"},z=i("div",null," 1.\u4F7F\u7528\u5BF9\u8C61\u5B58\u50A8\uFF0C\u9700\u8981\u5C06public\u76EE\u5F55\u4E0B\u7684\u8D44\u6E90\u6587\u4EF6\u4FDD\u7559\u539F\u6765\u76EE\u5F55\u8DEF\u5F84\u4F20\u8F93\u5230\u5BF9\u8C61\u5B58\u50A8\u7A7A\u95F4\u3002 ",-1),G=i("div",null,"2.\u8BF7\u52FF\u968F\u610F\u5207\u6362\u5B58\u50A8\u65B9\u5F0F\uFF0C\u53EF\u80FD\u5BFC\u81F4\u56FE\u7247\u65E0\u6CD5\u67E5\u770B\u3002",-1),H=i("div",null," 3.\u9700\u8981\u5728\u5BF9\u8C61\u5B58\u50A8\u540E\u53F0\u8BBE\u7F6E\u57DF\u540D\u8DE8\u57DF\uFF0C\u5426\u5219\u56FE\u7247\u751F\u6210\u573A\u666F\u65E0\u6CD5\u4F7F\u7528\uFF0C\u4F8B\u6D77\u62A5\u5408\u6210\u7B49\u3002 ",-1),I=i("div",null," 4.\u9700\u5C06\u5BF9\u8C61\u5B58\u50A8\u7684\u56FE\u7247\u57DF\u540D\u6DFB\u52A0\u5230\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F\u5B98\u65B9\u540E\u53F0request\u5408\u6CD5\u57DF\u540D\u548CdownloadFile\u5408\u6CD5\u57DF\u540D\u3002 ",-1),J=B({name:"storage"}),bu=B({...J,setup(K){const p=R(),e=V({loading:!1,lists:[]}),c=async()=>{try{e.loading=!0,e.lists=await N(),e.loading=!1}catch{e.loading=!1}},f=r=>{var n;(n=p.value)==null||n.open(r)};return c(),(r,n)=>{const D=v,m=w,a=k,_=b,C=y,g=x,h=S("perms"),A=T;return o(),$("div",q,[t(m,{class:"!border-none",shadow:"never"},{default:u(()=>[t(D,{type:"warning",title:"\u6E29\u99A8\u63D0\u793A\uFF1A",closable:!1,"show-icon":""},{default:u(()=>[z,G,H,I]),_:1})]),_:1}),d((o(),s(m,{class:"!border-none mt-4",shadow:"never"},{default:u(()=>[t(g,{size:"large",data:E(e).lists},{default:u(()=>[t(a,{label:"\u50A8\u5B58\u65B9\u5F0F",prop:"name","min-width":"120"}),t(a,{label:"\u50A8\u5B58\u4F4D\u7F6E",prop:"path","min-width":"160"}),t(a,{label:"\u72B6\u6001","min-width":"80"},{default:u(({row:l})=>[l.status==1?(o(),s(_,{key:0},{default:u(()=>[F("\u5F00\u542F")]),_:1})):(o(),s(_,{key:1,type:"danger"},{default:u(()=>[F("\u5173\u95ED")]),_:1}))]),_:1}),t(a,{label:"\u64CD\u4F5C","min-width":"80",fixed:"right"},{default:u(({row:l})=>[d((o(),s(C,{type:"primary",link:"",onClick:O=>f(l.engine)},{default:u(()=>[F(" \u8BBE\u7F6E ")]),_:2},1032,["onClick"])),[[h,["setting.storage/setup"]]])]),_:1})]),_:1},8,["data"])]),_:1})),[[A,E(e).loading]]),t(L,{ref_key:"editRef",ref:p,onSuccess:c},null,512)])}}});export{bu as default};
