import{a as R,p as Z,g as ee,B as te,A as ae,K as le,L as oe,H as se,C as ie,k as ne,l as re,h as me,J as de}from"./element-plus-D_drhFLK.js";import{M as pe}from"./picker-D-DSVKLx.js";import{b as ue,d as _e}from"./index-BxbNIcAc.js";import{b as fe,c as ce}from"./consumer-BO4h61eO.js";import{u as ve}from"./useLockFn-BhPLnZje.js";import{_ as be}from"./index.vue_vue_type_script_setup_true_lang-CdquXOKF.js";import{_ as ye}from"./index.vue_vue_type_script_setup_true_lang-9KIB_nLd.js";import{l as xe}from"./lodash-es-R-kYiKr_.js";import{d as ge,r as f,s as ke,an as Ve,o as i,L as m,M as l,O as T,c,a as _,V as o,u as e,T as d,S as p,R as y,i as h,P as we,n as Ee}from"./@vue-TMcuEboY.js";import"./async-validator-DKvM95Vc.js";import"./@element-plus-C2WBhajb.js";import"./dayjs-CMfar2R3.js";import"./balanced-match-mNcR6oh4.js";import"./@ctrl-r5W6hzzQ.js";import"./normalize-wheel-es-B6fDCfyv.js";import"./@popperjs-D9SI2xQl.js";import"./index-90XYeFLa.js";import"./index-D3L2EF4G.js";import"./index.vue_vue_type_script_setup_true_lang-CJUmABp7.js";import"./index-_HTHrRvZ.js";import"./@vueuse-DE_336rM.js";import"./usePaging-DFi_nJOG.js";import"./vue3-video-play-xg7gp0Bu.js";import"./vuedraggable-OYPBN08G.js";import"./vue-CHxGqOme.js";import"./sortablejs-DdgKbxid.js";import"./nprogress-Cgf5DU8x.js";import"./vue-router-CZY6S6gL.js";import"./pinia-ebUeA1L2.js";import"./axios-C-n2IhIP.js";import"./lodash-BtPWuHkK.js";import"./css-color-function-rJvg8h-6.js";import"./color-B0v57BL7.js";import"./clone-CuIhj1wH.js";import"./color-convert-BGgJB5UM.js";import"./color-name-BQ5IbGbl.js";import"./color-string-BhgG7-8u.js";import"./ms-CzQ2E3wO.js";import"./vue-clipboard3-8CNoFg4V.js";import"./clipboard-Dch_ozqB.js";import"./echarts-BR_QmBtV.js";import"./tslib-BDyQ-Jie.js";import"./zrender-B-CeXLwU.js";import"./highlight.js-D5uP1KGk.js";import"./@highlightjs-KJi31KWJ.js";import"./index.vue_vue_type_script_setup_true_lang-7qkSTgud.js";import"./index.vue_vue_type_script_setup_true_lang-Dsf4pDJm.js";import"./getExposeType-C5XerQxt.js";import"./edit.vue_vue_type_script_setup_true_lang-DCnF9bwN.js";import"./department-C4PEgZ5O.js";import"./post-l4ltGptX.js";import"./role-BKVOymkA.js";import"./useDictOptions-L0AWargB.js";import"./detail-C2ZlzvPX.js";const Ce={class:"h-full flex flex-col","element-loading-text":"加载中...","element-loading-background":"var(--el-bg-color)"},De={class:"flex flex-col pb-1"},Ue={class:"bg-page p-4 rounded flex justify-between items-center"},ze={class:"flex items-center gap-4"},Be={class:"flex flex-col justify-center gap-1"},Re={class:"font-bold text-lg"},Te={class:"text-info text-xs"},he=["href"],Fe=["href"],Le={class:"flex items-center ml-2 cursor-pointer"},Ie={key:1,class:"break-all"},Ne={key:1},$e={key:1,class:"break-all"},Me={key:0},Se={key:1},qe=ge({__name:"edit",emits:["refresh"],setup(Pe,{expose:F,emit:L}){const x=f(!1),g=ke(),I=f(),b=f("profile"),s=f(!1),U=f(),w=f(!0),a=f({avatar:"",create_time:"",name:"",sn:"",domain:"",default_domain:"",id:0,disable:0,tel:"",domain_alias:"",domain_alias_enable:1,notes:""}),N={name:[{required:!0,message:"请输入租户名称",trigger:["blur"]}]},$=L,M=(r,t,v)=>{w.value=!0,b.value=v||"profile",s.value=t||!1,q(r),I.value=r,x.value=!0},S=async()=>{if(s.value)try{await R.confirm("修改还未保存，确认退出编辑吗？"),E()}catch{return!1}},q=async r=>{const t=await fe({id:r});w.value=!1,a.value=t,U.value=xe(a.value)},P=r=>{s.value?R.confirm("修改还未保存，确认退出编辑吗？").then(()=>{r()}).catch(()=>{console.log("取消")}):r()},j=()=>{var r;(r=g.value)==null||r.resetFields()},E=async r=>{var t,v;s.value?r?(await((t=g.value)==null?void 0:t.validate()),await G()):(a.value=U.value,(v=g.value)==null||v.clearValidate()):(b.value="profile",await Ee()),s.value=!s.value},A=async()=>{await ce(a.value),$("refresh")},{isLock:H,lockFn:G}=ve(A);return F({openHandle:M}),(r,t)=>{const v=Z,C=ee,J=ue,u=te,K=pe,k=ae,V=le,z=oe,B=se,O=ie,D=ne,Q=re,W=me,X=Ve("copy"),Y=de;return i(),m(W,{modelValue:e(x),"onUpdate:modelValue":t[10]||(t[10]=n=>h(x)?x.value=n:null),"destroy-on-close":"",title:"租户信息",direction:"rtl",size:"50%",onClose:j,"before-close":P},{default:l(()=>[T((i(),c("div",Ce,[_("div",De,[_("div",Ue,[_("div",ze,[o(v,{src:e(a).avatar,size:58},null,8,["src"]),_("div",Be,[_("span",Re,d(e(a).name),1),_("span",Te,"ID："+d(e(a).id),1)])]),_("div",null,[o(C,{type:"info",size:"small"},{default:l(()=>[_("a",{href:e(a).domain,target:"_blank"},"登录",8,he)]),_:1}),e(s)?(i(),m(C,{key:0,type:"default",size:"small",onClick:t[0]||(t[0]=n=>E())},{default:l(()=>t[11]||(t[11]=[p(" 取消 ")])),_:1})):y("",!0),o(C,{type:"primary",size:"small",loading:e(H),onClick:t[1]||(t[1]=n=>E(!0))},{default:l(()=>[p(d(e(s)?"保存":"编辑"),1)]),_:1},8,["loading"])])])]),o(Q,{class:"flex-1",modelValue:e(b),"onUpdate:modelValue":t[9]||(t[9]=n=>h(b)?b.value=n:null),"before-leave":S},{default:l(()=>[o(D,{label:"基础信息",name:"profile"},{default:l(()=>[o(O,{ref_key:"formRef",ref:g,class:we(["grid grid-cols-2 gap-x-4 pt-2",{"!grid-cols-1":e(s)}]),"label-position":"right",model:e(a),"label-width":"100px",rules:N},{default:l(()=>[e(s)?y("",!0):(i(),m(u,{key:0,label:"默认域名：",class:"col-span-2"},{default:l(()=>[_("a",{href:e(a).default_domain,target:"_blank",rel:"noopener noreferrer"},d(e(a).default_domain||"--"),9,Fe),T((i(),c("span",Le,[o(J,{name:"el-icon-DocumentCopy"}),t[12]||(t[12]=p(" 复制 "))])),[[X,e(a).domain]])]),_:1})),e(s)?y("",!0):(i(),m(u,{key:1,label:"租户编码："},{default:l(()=>[p(d(e(a).sn),1)]),_:1})),e(s)?(i(),m(u,{key:2,label:"头像：",prop:"avatar"},{default:l(()=>[o(K,{modelValue:e(a).avatar,"onUpdate:modelValue":t[2]||(t[2]=n=>e(a).avatar=n),limit:1},null,8,["modelValue"])]),_:1})):y("",!0),o(u,{label:"租户名称：",prop:"name",required:e(s)},{default:l(()=>[e(s)?(i(),m(k,{key:0,modelValue:e(a).name,"onUpdate:modelValue":t[3]||(t[3]=n=>e(a).name=n),placeholder:"请输入租户名称",style:{"max-width":"250px"}},null,8,["modelValue"])):(i(),c("span",Ie,d(e(a).name||"--"),1))]),_:1},8,["required"]),o(u,{label:"联系方式："},{default:l(()=>[e(s)?(i(),m(k,{key:0,modelValue:e(a).tel,"onUpdate:modelValue":t[4]||(t[4]=n=>e(a).tel=n),placeholder:"请输入联系方式",style:{"max-width":"250px"}},null,8,["modelValue"])):(i(),c("span",Ne,d(e(a).tel||"--"),1))]),_:1}),o(u,{label:"域名别名：",prop:"domain_alias"},{default:l(()=>[e(s)?(i(),m(k,{key:0,modelValue:e(a).domain_alias,"onUpdate:modelValue":t[5]||(t[5]=n=>e(a).domain_alias=n),placeholder:"请输入域名别名",style:{"max-width":"250px"}},null,8,["modelValue"])):(i(),c("span",$e,d(e(a).domain_alias||"--"),1))]),_:1}),o(u,{label:"启用别名：",prop:"disable"},{default:l(()=>[e(s)?(i(),c("div",Me,[o(z,{modelValue:e(a).domain_alias_enable,"onUpdate:modelValue":t[6]||(t[6]=n=>e(a).domain_alias_enable=n)},{default:l(()=>[o(V,{value:0},{default:l(()=>t[13]||(t[13]=[p("启用")])),_:1}),o(V,{value:1},{default:l(()=>t[14]||(t[14]=[p("禁用")])),_:1})]),_:1},8,["modelValue"]),t[15]||(t[15]=_("p",{class:"text-info text-sm"}," Tips：项目线上部署后，配置好域名别名并解析到默认域名后启用即可生效 ",-1))])):(i(),m(B,{key:1,"disable-transitions":"",type:e(a).disable===0?"primary":"danger"},{default:l(()=>[p(d(e(a).domain_alias_enable===0?"启用":"禁用"),1)]),_:1},8,["type"]))]),_:1}),o(u,{label:"租户状态：",prop:"disable"},{default:l(()=>[e(s)?(i(),m(z,{key:0,modelValue:e(a).disable,"onUpdate:modelValue":t[7]||(t[7]=n=>e(a).disable=n)},{default:l(()=>[o(V,{value:0},{default:l(()=>t[16]||(t[16]=[p("开启")])),_:1}),o(V,{value:1},{default:l(()=>t[17]||(t[17]=[p("关闭")])),_:1})]),_:1},8,["modelValue"])):(i(),m(B,{key:1,"disable-transitions":"",type:e(a).disable===0?"primary":"danger"},{default:l(()=>[p(d(e(a).disable===0?"开启":"关闭"),1)]),_:1},8,["type"]))]),_:1}),e(s)?y("",!0):(i(),m(u,{key:3,label:"创建时间："},{default:l(()=>[p(d(e(a).create_time),1)]),_:1})),o(u,{label:"租户备注：",prop:"notes"},{default:l(()=>[e(s)?(i(),m(k,{key:0,modelValue:e(a).notes,"onUpdate:modelValue":t[8]||(t[8]=n=>e(a).notes=n),placeholder:"请输入租户备注",style:{"max-width":"250px"},type:"textarea",maxlength:100},null,8,["modelValue"])):(i(),c("span",Se,d(e(a).notes||"--"),1))]),_:1})]),_:1},8,["class","model"])]),_:1}),o(D,{lazy:"",label:"账号列表",name:"accounts"},{default:l(()=>[o(be,{tenant_id:e(a).id},null,8,["tenant_id"])]),_:1}),o(D,{lazy:"",label:"用户列表",name:"users"},{default:l(()=>[o(ye,{tenant_id:e(a).id},null,8,["tenant_id"])]),_:1})]),_:1},8,["modelValue"])])),[[Y,e(w)]])]),_:1},8,["modelValue"])}}}),jt=_e(qe,[["__scopeId","data-v-38af284b"]]);export{jt as default};