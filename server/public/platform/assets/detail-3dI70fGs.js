import{p as T,P as V,d as B,H as F,Q as I,J as M}from"./element-plus-D_drhFLK.js";import{k as P}from"./consumer-5_h5N0Mm.js";import{P as z}from"./index-BYEZYCC2.js";import{d as L,s as S,r as v,ah as g,o as l,c as k,V as o,M as a,O as A,u as t,L as m,S as r,T as n,R as _}from"./@vue-TMcuEboY.js";import{d as H}from"./index-B2WahP0L.js";import"./lodash-es-R-kYiKr_.js";import"./async-validator-DKvM95Vc.js";import"./@element-plus-C2WBhajb.js";import"./dayjs-CMfar2R3.js";import"./balanced-match-mNcR6oh4.js";import"./@ctrl-r5W6hzzQ.js";import"./normalize-wheel-es-B6fDCfyv.js";import"./@popperjs-D9SI2xQl.js";import"./nprogress-Cgf5DU8x.js";import"./vue-router-CZY6S6gL.js";import"./pinia-ebUeA1L2.js";import"./axios-C-n2IhIP.js";import"./lodash-BtPWuHkK.js";import"./@vueuse-DE_336rM.js";import"./css-color-function-rJvg8h-6.js";import"./color-B0v57BL7.js";import"./clone-CuIhj1wH.js";import"./color-convert-BGgJB5UM.js";import"./color-name-BQ5IbGbl.js";import"./color-string-BhgG7-8u.js";import"./ms-CzQ2E3wO.js";import"./vue-clipboard3-8CNoFg4V.js";import"./clipboard-Dch_ozqB.js";import"./echarts-BR_QmBtV.js";import"./tslib-BDyQ-Jie.js";import"./zrender-B-CeXLwU.js";import"./highlight.js-D5uP1KGk.js";import"./@highlightjs-KJi31KWJ.js";const J={class:"edit-popup"},O=["data"],Q=L({__name:"detail",props:{tenant_id:{type:Number,default:0}},setup(y,{expose:x}){const h=y,d=S(),e=v({id:0,sn:0,account:"",nickname:"",avatar:"",real_name:"",sex:"",mobile:"",create_time:0,login_time:"",channel:"",user_money:"",is_disable:1,sexCode:1}),c=v(!0),D=p=>{var s;c.value=!0,u(p),(s=d.value)==null||s.open()},u=async p=>{const s=await P({id:p,tenant_id:h.tenant_id});e.value=s,c.value=!1};return x({open:D,setFormData:u}),(p,s)=>{const f=T,i=V,C=g("Male"),b=B,w=g("Female"),E=F,N=I,R=M;return l(),k("div",J,[o(z,{ref_key:"popupRef",ref:d,title:"用户详情",async:!0,width:"550px"},{default:a(()=>[A((l(),k("div",{"element-loading-text":"加载中...","element-loading-background":"var(--el-bg-color)",data:t(e).avatar},[o(N,{column:1},{default:a(()=>[o(i,{label:"头像："},{default:a(()=>[t(e).avatar?(l(),m(f,{key:0,src:t(e).avatar,size:70},null,8,["src"])):(l(),m(f,{key:1,size:70},{default:a(()=>[r(n(t(e).nickname||"--"),1)]),_:1}))]),_:1}),o(i,{label:"昵称："},{default:a(()=>[r(n(t(e).nickname||"--")+" ",1),t(e).sexCode==1?(l(),m(b,{key:0,color:"bule"},{default:a(()=>[o(C)]),_:1})):_("",!0),t(e).sexCode==2?(l(),m(b,{key:1,color:"red"},{default:a(()=>[o(w)]),_:1})):_("",!0)]),_:1}),o(i,{label:"账号："},{default:a(()=>[r(n(t(e).account||"--"),1)]),_:1}),o(i,{label:"状态："},{default:a(()=>[o(E,{type:t(e).is_disable===0?"primary":"danger"},{default:a(()=>[r(n(t(e).is_disable===0?"开启":"关闭"),1)]),_:1},8,["type"])]),_:1}),o(i,{width:140,label:"手机号："},{default:a(()=>[r(n(t(e).mobile||"--"),1)]),_:1}),o(i,{label:"来源渠道："},{default:a(()=>[r(n(t(e).channel||"--"),1)]),_:1}),o(i,{label:"真实姓名："},{default:a(()=>[r(n(t(e).real_name||"--"),1)]),_:1}),o(i,{label:"创建时间："},{default:a(()=>[r(n(t(e).create_time||"--"),1)]),_:1}),t(e).login_time?(l(),m(i,{key:0,label:"最近活跃："},{default:a(()=>[r(n(t(e).login_time),1)]),_:1})):_("",!0)]),_:1})],8,O)),[[R,t(c)]])]),_:1},512)])}}}),De=H(Q,[["__scopeId","data-v-2dd00171"]]);export{De as default};
