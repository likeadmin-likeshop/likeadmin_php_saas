import{_ as L}from"./index-HypnD1z1.js";import{r as y,b as N,d as R}from"./index-BjfF9UyA.js";import{G as z,H as G,C as $,D as q,I as A,h as H,B as K,K as M,L as O}from"./element-plus-BBKw480Q.js";import{d as C,Z,b as j,an as J,o as i,c as _,V as e,M as o,u as m,a,S as d,O as x,L as V,U as P,aa as Q,T as W}from"./@vue-pHjCrgw6.js";import"./nprogress-Cgf5DU8x.js";import"./balanced-match-mNcR6oh4.js";import"./vue-router-DAYuzRuG.js";import"./pinia-CJRVDLHa.js";import"./axios-C-n2IhIP.js";import"./lodash-BtPWuHkK.js";import"./@vueuse-djZFs-WH.js";import"./css-color-function-rJvg8h-6.js";import"./color-B0v57BL7.js";import"./clone-CuIhj1wH.js";import"./color-convert-BGgJB5UM.js";import"./color-name-BQ5IbGbl.js";import"./color-string-BhgG7-8u.js";import"./ms-CzQ2E3wO.js";import"./@element-plus-DMfktWgm.js";import"./vue-clipboard3-8CNoFg4V.js";import"./clipboard-Dch_ozqB.js";import"./echarts-BR_QmBtV.js";import"./tslib-BDyQ-Jie.js";import"./zrender-B-CeXLwU.js";import"./highlight.js-D5uP1KGk.js";import"./@highlightjs-D4DIzBxc.js";import"./lodash-es-R-kYiKr_.js";import"./async-validator-DKvM95Vc.js";import"./dayjs-CMfar2R3.js";import"./@ctrl-r5W6hzzQ.js";import"./normalize-wheel-es-B6fDCfyv.js";import"./@popperjs-D9SI2xQl.js";function X(){return y.get({url:"/setting.hot_search/getConfig"})}function Y(u){return y.post({url:"/setting.hot_search/setConfig",params:u})}const tt={class:"hot-search"},et={class:"lg:flex"},ot={class:"flex-1 min-w-0"},st={class:"hot-search-phone mt-4 lg:mt-0 lg:ml-4 flex-none"},at={class:"hot-search-phone-content"},nt={class:"search-com"},lt={class:"search-con flex items-center px-[15px]"},rt={class:"hot-search-text"},it=C({name:"search"}),mt=C({...it,setup(u){const l=Z({status:1,data:[]}),w=j(()=>l.data.filter(s=>s.name).sort((s,t)=>t.sort-s.sort)),f=async()=>{try{const s=await X();for(const t in l)l[t]=s[t]}catch(s){console.log("获取=>",s)}},k=()=>{l.data.push({name:"",sort:0})},E=s=>{l.data.splice(s,1)},D=async()=>{try{await Y(l),f()}catch(s){console.log("保存=>",s)}};return f(),(s,t)=>{const h=z,B=G,S=$,U=q,g=A,p=H,v=K,c=M,I=O,T=N,F=L,b=J("perms");return i(),_("div",tt,[e(g,{class:"!border-none",shadow:"never"},{default:o(()=>[e(U,{ref:"formRef",model:m(l),"label-width":"100px"},{default:o(()=>[e(S,{label:"功能状态",style:{"margin-bottom":"0"}},{default:o(()=>[a("div",null,[e(B,{modelValue:m(l).status,"onUpdate:modelValue":t[0]||(t[0]=n=>m(l).status=n)},{default:o(()=>[e(h,{value:1},{default:o(()=>t[1]||(t[1]=[d("开启")])),_:1}),e(h,{value:0},{default:o(()=>t[2]||(t[2]=[d("关闭")])),_:1})]),_:1},8,["modelValue"]),t[3]||(t[3]=a("div",{class:"form-tips"},"默认开启，关闭则前端不显示该功能",-1))])]),_:1})]),_:1},8,["model"])]),_:1}),e(g,{class:"!border-none mt-4",shadow:"never"},{default:o(()=>[a("div",et,[a("div",ot,[e(p,{type:"primary",class:"mb-4",onClick:k},{default:o(()=>t[4]||(t[4]=[d("添加")])),_:1}),e(I,{size:"large",data:m(l).data},{default:o(()=>[e(c,{label:"关键词",prop:"describe","min-width":"160"},{default:o(({row:n})=>[e(v,{modelValue:n.name,"onUpdate:modelValue":r=>n.name=r,clearable:"",placeholder:"请输入关键字","show-word-limit":"",maxlength:"30"},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),e(c,{label:"排序",prop:"describe","min-width":"160"},{default:o(({row:n})=>[e(v,{modelValue:n.sort,"onUpdate:modelValue":r=>n.sort=r,type:"number"},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),e(c,{label:"操作","min-width":"80",fixed:"right"},{default:o(({$index:n})=>[x((i(),V(p,{type:"danger",link:"",onClick:r=>E(n)},{default:o(()=>t[5]||(t[5]=[d(" 删除 ")])),_:2},1032,["onClick"])),[[b,["setting:storage:edit"]]])]),_:1})]),_:1},8,["data"])]),a("div",st,[t[8]||(t[8]=a("div",{class:"mb-4 text-center"},"- 热搜预览图 -",-1)),a("div",at,[a("div",nt,[a("div",lt,[e(T,{name:"el-icon-Search",size:17}),t[6]||(t[6]=a("span",{class:"ml-[5px]"},"请输入关键词搜索",-1))])]),t[7]||(t[7]=a("div",{class:"hot-search-title"},"热门搜索",-1)),a("div",rt,[(i(!0),_(P,null,Q(m(w),(n,r)=>(i(),_("span",{key:r},W(n.name),1))),128))])])])])]),_:1}),x((i(),V(F,null,{default:o(()=>[e(p,{type:"primary",onClick:D},{default:o(()=>t[9]||(t[9]=[d("保存")])),_:1})]),_:1})),[[b,["setting.hot_search/setConfig"]]])])}}}),Ht=R(mt,[["__scopeId","data-v-2569ecde"]]);export{Ht as default};
