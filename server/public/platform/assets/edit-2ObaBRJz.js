import{a as S,p as ee,g as ae,B as le,A as te,L as oe,M as se,R as ne,C as ie,k as re,l as me,h as de,O as pe}from"./element-plus-CSiqOtzA.js";import{B as y,b as ue,d as _e}from"./index-s2XVwHMG.js";import{_ as fe}from"./picker-CJdq_riw.js";import{e as ce,f as ve}from"./consumer-PlvWqHB3.js";import{u as be}from"./useLockFn-BhPLnZje.js";import{_ as ye}from"./index.vue_vue_type_script_setup_true_lang-CISZnW2j.js";import{_ as ge}from"./index.vue_vue_type_script_setup_true_lang-LSQwnRG3.js";import{l as ke}from"./lodash-es-R-kYiKr_.js";import{d as xe,r as v,s as Ve,an as we,o,L as m,M as t,O as C,c,a as p,V as s,u as e,T as d,S as u,R as b,i as $,P as Ee,n as Ce}from"./@vue-TMcuEboY.js";import"./async-validator-DKvM95Vc.js";import"./@element-plus-C2WBhajb.js";import"./dayjs-CMfar2R3.js";import"./balanced-match-mNcR6oh4.js";import"./@ctrl-r5W6hzzQ.js";import"./normalize-wheel-es-B6fDCfyv.js";import"./@popperjs-D9SI2xQl.js";import"./nprogress-Cgf5DU8x.js";import"./vue-router-CZY6S6gL.js";import"./pinia-ebUeA1L2.js";import"./axios-C-n2IhIP.js";import"./lodash-BtPWuHkK.js";import"./@vueuse-DE_336rM.js";import"./css-color-function-rJvg8h-6.js";import"./color-B0v57BL7.js";import"./clone-CuIhj1wH.js";import"./color-convert-BGgJB5UM.js";import"./color-name-BQ5IbGbl.js";import"./color-string-BhgG7-8u.js";import"./ms-CzQ2E3wO.js";import"./vue-clipboard3-8CNoFg4V.js";import"./clipboard-Dch_ozqB.js";import"./echarts-BR_QmBtV.js";import"./tslib-BDyQ-Jie.js";import"./zrender-B-CeXLwU.js";import"./highlight.js-D5uP1KGk.js";import"./@highlightjs-KJi31KWJ.js";import"./index-CNq8mw6m.js";import"./index-BXb6yfoo.js";import"./index.vue_vue_type_script_setup_true_lang-ggB8NA6X.js";import"./index-CVrn6BA3.js";import"./usePaging-DFi_nJOG.js";import"./vue3-video-play-xg7gp0Bu.js";import"./vuedraggable-OYPBN08G.js";import"./vue-CHxGqOme.js";import"./sortablejs-DdgKbxid.js";import"./index.vue_vue_type_script_setup_true_lang-Bn0jMEVM.js";import"./index.vue_vue_type_script_setup_true_lang-B2T1NVEp.js";import"./getExposeType-C5XerQxt.js";import"./edit.vue_vue_type_script_setup_true_lang-ZBoTWTH-.js";import"./department-CAtGmmt4.js";import"./post-ClaJ3mv3.js";import"./role-BMUdr34j.js";import"./useDictOptions-DE9cSN1q.js";import"./detail-D_6UVSJj.js";const he={class:"h-full flex flex-col","element-loading-text":"加载中...","element-loading-background":"var(--el-bg-color)"},De={class:"flex flex-col pb-1"},Ue={class:"bg-page p-4 rounded flex justify-between items-center"},Re={class:"flex items-center gap-4"},ze={class:"flex flex-col justify-center gap-1"},Be={class:"font-bold text-lg"},Te={class:"text-info text-xs"},Fe=["href"],Le={key:1,class:"break-all"},Ne={key:1},Se={key:0},$e={key:1,class:"break-all"},Ie={key:1,class:"break-all"},qe=["href"],Me={class:"flex items-center ml-2 cursor-pointer"},Pe=["href"],je={class:"flex items-center ml-2 cursor-pointer"},Ae=["href"],Oe={class:"flex items-center ml-2 cursor-pointer"},Ge=xe({__name:"edit",emits:["refresh"],setup(He,{expose:I,emit:q}){const x=v(!1),V=Ve(),B=v(0),g=v("profile"),n=v(!1),T=v(),k=v(!0),l=v({avatar:"",create_time:"",name:"",sn:"",domain:"",default_domain:"",id:0,disable:0,tel:"",domain_alias:"",domain_alias_enable:1,notes:""}),M={name:[{required:!0,message:"请输入租户名称",trigger:["blur"]}],domain_alias_enable:[{validator:(r,a,f)=>{l.value.domain_alias===""&&l.value.domain_alias_enable===0?f(new Error("请设置域名别名")):f()},trigger:["change"]}]},P=q,j=(r,a,f)=>{k.value=!0,g.value=f||"profile",n.value=a||!1,F(r),B.value=r,x.value=!0},A=async()=>{if(n.value)try{await S.confirm("修改还未保存，确认退出编辑吗？"),h()}catch{return!1}},F=async r=>{const a=await ce({id:r});k.value=!1,l.value=a,T.value=ke(l.value)},O=r=>{n.value?S.confirm("修改还未保存，确认退出编辑吗？").then(()=>{r()}).catch(()=>{console.log("取消")}):r()},G=()=>{var r;(r=V.value)==null||r.resetFields()},h=async r=>{var a,f;n.value?r?(await((a=V.value)==null?void 0:a.validate()),await K()):(l.value=T.value,(f=V.value)==null||f.clearValidate()):(g.value="profile",await Ce()),n.value=!n.value},H=async()=>{k.value=!0;try{await ve(l.value),await F(B.value),P("refresh")}catch{k.value=!1}},{isLock:J,lockFn:K}=be(H);return I({openHandle:j}),(r,a)=>{const f=ee,D=ae,Q=fe,_=le,w=te,E=oe,L=se,N=ne,U=ue,W=ie,R=re,X=me,Y=de,z=we("copy"),Z=pe;return o(),m(Y,{modelValue:e(x),"onUpdate:modelValue":a[10]||(a[10]=i=>$(x)?x.value=i:null),"destroy-on-close":"",title:"租户信息",direction:"rtl",size:"50%",onClose:G,"before-close":O},{default:t(()=>[C((o(),c("div",he,[p("div",De,[p("div",Ue,[p("div",Re,[s(f,{src:e(l).avatar,size:58},null,8,["src"]),p("div",ze,[p("span",Be,d(e(l).name),1),p("span",Te,"编号："+d(e(l).sn),1)])]),p("div",null,[s(D,{type:"info",size:"small"},{default:t(()=>[p("a",{href:e(l).domain,target:"_blank"},"登录",8,Fe)]),_:1}),e(n)?(o(),m(D,{key:0,type:"default",size:"small",onClick:a[0]||(a[0]=i=>h())},{default:t(()=>a[11]||(a[11]=[u(" 取消 ")])),_:1})):b("",!0),s(D,{type:"primary",size:"small",loading:e(J),onClick:a[1]||(a[1]=i=>h(!0))},{default:t(()=>[u(d(e(n)?"保存":"编辑"),1)]),_:1},8,["loading"])])])]),s(X,{class:"flex-1",modelValue:e(g),"onUpdate:modelValue":a[9]||(a[9]=i=>$(g)?g.value=i:null),"before-leave":A},{default:t(()=>[s(R,{label:"基础信息",name:"profile"},{default:t(()=>[s(W,{ref_key:"formRef",ref:V,class:Ee(["profile grid grid-cols-2 gap-x-4 pt-2",{"!grid-cols-1":e(n)}]),"label-position":"right",model:e(l),"label-width":"100px",rules:M},{default:t(()=>[e(n)?(o(),m(_,{key:0,label:"头像：",prop:"avatar"},{default:t(()=>[s(Q,{modelValue:e(l).avatar,"onUpdate:modelValue":a[2]||(a[2]=i=>e(l).avatar=i),limit:1},null,8,["modelValue"])]),_:1})):b("",!0),s(_,{label:"租户名称：",prop:"name",required:e(n)},{default:t(()=>[e(n)?(o(),m(w,{key:0,modelValue:e(l).name,"onUpdate:modelValue":a[3]||(a[3]=i=>e(l).name=i),placeholder:"请输入租户名称",style:{"max-width":"250px"}},null,8,["modelValue"])):(o(),c("span",Le,d(e(l).name||"--"),1))]),_:1},8,["required"]),s(_,{label:"联系方式：",prop:"tel"},{default:t(()=>[e(n)?(o(),m(w,{key:0,modelValue:e(l).tel,"onUpdate:modelValue":a[4]||(a[4]=i=>e(l).tel=i),placeholder:"请输入联系方式",style:{"max-width":"250px"}},null,8,["modelValue"])):(o(),c("span",Ne,d(e(l).tel||"--"),1))]),_:1}),s(_,{label:"启用别名：",prop:"domain_alias_enable"},{default:t(()=>[e(n)?(o(),c("div",Se,[s(L,{modelValue:e(l).domain_alias_enable,"onUpdate:modelValue":a[5]||(a[5]=i=>e(l).domain_alias_enable=i)},{default:t(()=>[s(E,{value:0},{default:t(()=>a[12]||(a[12]=[u("启用")])),_:1}),s(E,{value:1},{default:t(()=>a[13]||(a[13]=[u("禁用")])),_:1})]),_:1},8,["modelValue"]),a[14]||(a[14]=p("p",{class:"text-info text-sm"}," Tips：项目线上部署后，配置好域名别名并解析到默认域名后启用即可生效 ",-1))])):(o(),m(N,{key:1,"disable-transitions":"",type:e(l).domain_alias_enable===0?"primary":"info"},{default:t(()=>[u(d(e(l).domain_alias_enable===0?"启用":"禁用"),1)]),_:1},8,["type"]))]),_:1}),e(l).domain_alias_enable===0||!e(n)?(o(),m(_,{key:1,label:"域名别名：",prop:"domain_alias"},{default:t(()=>[e(n)?(o(),m(w,{key:0,modelValue:e(l).domain_alias,"onUpdate:modelValue":a[6]||(a[6]=i=>e(l).domain_alias=i),placeholder:"请输入域名别名",style:{"max-width":"250px"}},null,8,["modelValue"])):(o(),c("span",$e,d(e(l).domain_alias||"--"),1))]),_:1})):b("",!0),s(_,{label:"租户状态：",prop:"disable"},{default:t(()=>[e(n)?(o(),m(L,{key:0,modelValue:e(l).disable,"onUpdate:modelValue":a[7]||(a[7]=i=>e(l).disable=i)},{default:t(()=>[s(E,{value:0},{default:t(()=>a[15]||(a[15]=[u("开启")])),_:1}),s(E,{value:1},{default:t(()=>a[16]||(a[16]=[u("关闭")])),_:1})]),_:1},8,["modelValue"])):(o(),m(N,{key:1,"disable-transitions":"",type:e(l).disable===0?"primary":"info"},{default:t(()=>[u(d(e(l).disable===0?"开启":"关闭"),1)]),_:1},8,["type"]))]),_:1}),e(n)?b("",!0):(o(),m(_,{key:2,label:"创建时间："},{default:t(()=>[u(d(e(l).create_time),1)]),_:1})),s(_,{label:"租户备注：",prop:"notes"},{default:t(()=>[e(n)?(o(),m(w,{key:0,modelValue:e(l).notes,"onUpdate:modelValue":a[8]||(a[8]=i=>e(l).notes=i),placeholder:"请输入租户备注",style:{"max-width":"250px"},type:"textarea",maxlength:100},null,8,["modelValue"])):(o(),c("span",Ie,d(e(l).notes||"--"),1))]),_:1}),e(n)?b("",!0):(o(),m(_,{key:3,label:"默认域名：",class:"col-span-2",prop:"default_domain"},{default:t(()=>[p("a",{href:e(l).default_domain,target:"_blank",rel:"noopener noreferrer"},d(e(l).default_domain||"--"),9,qe),C((o(),c("span",Me,[s(U,{name:"el-icon-DocumentCopy"}),a[17]||(a[17]=u(" 复制 "))])),[[z,e(l).default_domain]])]),_:1})),e(n)?b("",!0):(o(),m(_,{key:4,label:"前台PC：",class:"col-span-2",prop:"default_domain"},{default:t(()=>[p("a",{href:e(y)(e(l).default_domain,"/admin/","/pc/"),target:"_blank",rel:"noopener noreferrer"},d(e(y)(e(l).default_domain,"/admin/","/pc/")||"--"),9,Pe),C((o(),c("span",je,[s(U,{name:"el-icon-DocumentCopy"}),a[18]||(a[18]=u(" 复制 "))])),[[z,e(y)(e(l).default_domain,"/admin/","/pc/")]])]),_:1})),e(n)?b("",!0):(o(),m(_,{key:5,label:"移动端：",class:"col-span-2",prop:"default_domain"},{default:t(()=>[p("a",{href:e(y)(e(l).default_domain,"/admin/","/mobile/"),target:"_blank",rel:"noopener noreferrer"},d(e(y)(e(l).default_domain,"/admin/","/mobile/")||"--"),9,Ae),C((o(),c("span",Oe,[s(U,{name:"el-icon-DocumentCopy"}),a[19]||(a[19]=u(" 复制 "))])),[[z,e(y)(e(l).default_domain,"/admin/","/mobile/")]])]),_:1}))]),_:1},8,["class","model"])]),_:1}),s(R,{lazy:"",label:"账号列表",name:"accounts"},{default:t(()=>[s(ye,{tenant_id:e(l).id},null,8,["tenant_id"])]),_:1}),s(R,{lazy:"",label:"用户列表",name:"users"},{default:t(()=>[s(ge,{tenant_id:e(l).id},null,8,["tenant_id"])]),_:1})]),_:1},8,["modelValue"])])),[[Z,e(k)]])]),_:1},8,["modelValue"])}}}),Ja=_e(Ge,[["__scopeId","data-v-4878ac58"]]);export{Ja as default};
