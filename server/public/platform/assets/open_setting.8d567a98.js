import{_ as w}from"./index.853a1b6d.js";import{K as C,I as b,C as V,D as y,F as k,w as x}from"./element-plus.7eee367e.js";import{r as F}from"./index.0b72dd38.js";import{d as f,a1 as I,s as S,an as R,o as d,c as q,X as e,P as u,a,u as n,Q as N,O,U}from"./@vue.b52708da.js";import"./@element-plus.35ec7429.js";import"./lodash-es.2b4cc642.js";import"./dayjs.200e405c.js";import"./axios.185aa428.js";import"./async-validator.fb49d0f5.js";import"./@ctrl.b082b0c1.js";import"./@popperjs.36402333.js";import"./escape-html.e5dfadb9.js";import"./normalize-wheel-es.8aeb3683.js";import"./@vueuse.e1a32ef4.js";import"./lodash.2a1164eb.js";import"./vue-router.48496b4b.js";import"./pinia.3f41eb90.js";import"./css-color-function.a7ba2eb5.js";import"./color.70ead11b.js";import"./clone.b2899de9.js";import"./color-convert.755d189f.js";import"./color-name.e7a4e1d3.js";import"./color-string.e356f5de.js";import"./balanced-match.d2a36341.js";import"./ms.564e106c.js";import"./nprogress.eb37b9ca.js";import"./vue-clipboard3.066895f5.js";import"./clipboard.920a9914.js";import"./echarts.004f4e72.js";import"./zrender.b56a9aa5.js";import"./tslib.60310f1a.js";import"./highlight.js.db90315f.js";import"./@highlightjs.0797cc3b.js";function K(s){return F.post({url:"/channel.open_setting/setConfig",params:s})}function P(){return F.get({url:"/channel.open_setting/getConfig"})}const Q=a("div",{class:"font-medium mb-7"},"\u7F51\u7AD9\u5E94\u7528",-1),T={class:"w-80"},X={class:"w-80"},j=f({name:"wxDevConfig"}),he=f({...j,setup(s){const t=I({app_id:"",app_secret:""}),i=S(),E={app_id:[{required:!0,message:"\u8BF7\u8F93\u5165AppID",trigger:["blur","change"]}],app_secret:[{required:!0,message:"\u8BF7\u8F93\u5165AppSecret",trigger:["blur","change"]}]},l=async()=>{const r=await P();for(const o in t)t[o]=r[o]},g=async()=>{var r;await((r=i.value)==null?void 0:r.validate()),await K(t),l()};return l(),(r,o)=>{const D=C,m=b,c=V,_=y,A=k,B=x,v=w,h=R("perms");return d(),q("div",null,[e(m,{class:"!border-none",shadow:"never"},{default:u(()=>[e(D,{type:"warning",title:"\u6E29\u99A8\u63D0\u793A\uFF1A\u586B\u5199\u5FAE\u4FE1\u5F00\u653E\u5E73\u53F0\u5F00\u53D1\u914D\u7F6E\uFF0C\u8BF7\u524D\u5F80\u5FAE\u4FE1\u5F00\u653E\u5E73\u53F0\u521B\u5EFA\u5E94\u7528\u5E76\u5B8C\u6210\u8BA4\u8BC1\uFF1B\u7F51\u7AD9\u5E94\u7528\u914D\u7F6E\u4E3B\u8981\u7528\u4E8E\u7F51\u7AD9\u5FAE\u4FE1\u767B\u5F55\u548C\u5FAE\u4FE1\u652F\u4ED8",closable:!1,"show-icon":""})]),_:1}),e(A,{ref_key:"formRef",ref:i,model:n(t),rules:E,"label-width":"160px"},{default:u(()=>[e(m,{class:"!border-none mt-4",shadow:"never"},{default:u(()=>[Q,e(_,{label:"AppID",prop:"app_id"},{default:u(()=>[a("div",T,[e(c,{modelValue:n(t).app_id,"onUpdate:modelValue":o[0]||(o[0]=p=>n(t).app_id=p),placeholder:"\u8BF7\u8F93\u5165AppID"},null,8,["modelValue"])])]),_:1}),e(_,{label:"AppSecret",prop:"app_secret"},{default:u(()=>[a("div",null,[a("div",X,[e(c,{modelValue:n(t).app_secret,"onUpdate:modelValue":o[1]||(o[1]=p=>n(t).app_secret=p),placeholder:"\u8BF7\u8F93\u5165AppSecret"},null,8,["modelValue"])])])]),_:1})]),_:1})]),_:1},8,["model"]),N((d(),O(v,null,{default:u(()=>[e(B,{type:"primary",onClick:g},{default:u(()=>[U("\u4FDD\u5B58")]),_:1})]),_:1})),[[h,["channel.open_setting/setConfig"]]])])}}});export{he as default};
