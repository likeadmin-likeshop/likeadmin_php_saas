import{N as q,I as N,q as R,h as V,C as A,D as M}from"./element-plus-B9ALq7eR.js";import{_ as S}from"./index.vue_vue_type_script_setup_true_lang-Be0Cw8SV.js";import{i as F,b as I}from"./index-Di9-CjgU.js";import{g as O,u as T,a as U}from"./consumer-1gBW4-AL.js";import{_ as z}from"./account-adjust.vue_vue_type_script_setup_true_lang-BAZxDxKR.js";import{u as H}from"./vue-router-D4MxfuQi.js";import{d as C,Z as g,s as L,an as Z,o as p,c as G,V as t,M as o,u as a,a as d,S as l,T as i,O as c,L as y}from"./@vue-TMcuEboY.js";import"./lodash-es-R-kYiKr_.js";import"./async-validator-DKvM95Vc.js";import"./@element-plus-BZaexRrS.js";import"./dayjs-CMfar2R3.js";import"./balanced-match-mNcR6oh4.js";import"./@ctrl-r5W6hzzQ.js";import"./normalize-wheel-es-B6fDCfyv.js";import"./@popperjs-D9SI2xQl.js";import"./@vueuse-BQYVjZ5N.js";import"./nprogress-Cgf5DU8x.js";import"./pinia-ebUeA1L2.js";import"./axios-C-n2IhIP.js";import"./lodash-BtPWuHkK.js";import"./css-color-function-rJvg8h-6.js";import"./color-B0v57BL7.js";import"./clone-CuIhj1wH.js";import"./color-convert-BGgJB5UM.js";import"./color-name-BQ5IbGbl.js";import"./color-string-BhgG7-8u.js";import"./ms-CzQ2E3wO.js";import"./vue-clipboard3-8CNoFg4V.js";import"./clipboard-Dch_ozqB.js";import"./echarts-BR_QmBtV.js";import"./tslib-BDyQ-Jie.js";import"./zrender-B-CeXLwU.js";import"./highlight.js-D5uP1KGk.js";import"./@highlightjs-KJi31KWJ.js";import"./index-XT8BS2bq.js";const J={class:"bg-page flex py-5 mb-10 items-center"},K={class:"basis-40 flex flex-col justify-center items-center"},Q={class:"basis-40 flex flex-col justify-center items-center"},W={class:"mt-2 flex items-center"},X=C({name:"consumerDetail"}),Ae=C({...X,setup(Y){const w=H(),s=g({avatar:"",channel:"",create_time:"",login_time:"",mobile:"",nickname:"",real_name:0,sex:0,sn:"",account:"",user_money:""}),u=g({show:!1,value:""}),h=L(),E=async()=>{const n=await O({id:w.query.id});Object.keys(s).forEach(e=>{s[e]=n[e]})},v=async(n,e)=>{F(n)||(await T({id:w.query.id,field:e,value:n}),E())},j=n=>{u.show=!0,u.value=n},D=async n=>{await U({user_id:w.query.id,...n}),u.show=!1,E()};return E(),(n,e)=>{const B=q,k=N,$=R,f=V,m=A,b=I,x=S,P=M,_=Z("perms");return p(),G("div",null,[t(k,{class:"!border-none",shadow:"never"},{default:o(()=>[t(B,{content:"用户详情",onBack:e[0]||(e[0]=r=>n.$router.back())})]),_:1}),t(k,{class:"mt-4 !border-none",header:"基本资料",shadow:"never"},{default:o(()=>[t(P,{ref_key:"formRef",ref:h,class:"ls-form",model:a(s),"label-width":"120px"},{default:o(()=>[d("div",J,[d("div",K,[e[7]||(e[7]=d("div",{class:"mb-2 text-tx-regular"},"用户头像",-1)),t($,{src:a(s).avatar,size:58},null,8,["src"])]),d("div",Q,[e[9]||(e[9]=d("div",{class:"text-tx-regular"},"账户余额",-1)),d("div",W,[l(" ¥"+i(a(s).user_money)+" ",1),c((p(),y(f,{type:"primary",link:"",onClick:e[1]||(e[1]=r=>j(a(s).user_money))},{default:o(()=>e[8]||(e[8]=[l(" 调整 ")])),_:1})),[[_,["user.user/adjustMoney"]]])])])]),t(m,{label:"用户昵称："},{default:o(()=>[l(i(a(s).nickname),1)]),_:1}),t(m,{label:"账号："},{default:o(()=>[l(i(a(s).account)+" ",1),c((p(),y(x,{class:"ml-[10px]",onConfirm:e[2]||(e[2]=r=>v(r,"account")),limit:32},{default:o(()=>[t(f,{type:"primary",link:""},{default:o(()=>[t(b,{name:"el-icon-EditPen"})]),_:1})]),_:1})),[[_,["user.user/edit"]]])]),_:1}),t(m,{label:"真实姓名："},{default:o(()=>[l(i(a(s).real_name||"-")+" ",1),c((p(),y(x,{class:"ml-[10px]",onConfirm:e[3]||(e[3]=r=>v(r,"real_name")),limit:32},{default:o(()=>[t(f,{type:"primary",link:""},{default:o(()=>[t(b,{name:"el-icon-EditPen"})]),_:1})]),_:1})),[[_,["user.user/edit"]]])]),_:1}),t(m,{label:"性别："},{default:o(()=>[l(i(a(s).sex)+" ",1),c((p(),y(x,{class:"ml-[10px]",type:"select",options:[{label:"未知",value:0},{label:"男",value:1},{label:"女",value:2}],onConfirm:e[4]||(e[4]=r=>v(r,"sex"))},{default:o(()=>[t(f,{type:"primary",link:""},{default:o(()=>[t(b,{name:"el-icon-EditPen"})]),_:1})]),_:1})),[[_,["user.user/edit"]]])]),_:1}),t(m,{label:"联系电话："},{default:o(()=>[l(i(a(s).mobile||"-")+" ",1),c((p(),y(x,{class:"ml-[10px]",type:"number",onConfirm:e[5]||(e[5]=r=>v(r,"mobile"))},{default:o(()=>[t(f,{type:"primary",link:""},{default:o(()=>[t(b,{name:"el-icon-EditPen"})]),_:1})]),_:1})),[[_,["user.user/edit"]]])]),_:1}),t(m,{label:"注册来源："},{default:o(()=>[l(i(a(s).channel),1)]),_:1}),t(m,{label:"注册时间："},{default:o(()=>[l(i(a(s).create_time),1)]),_:1}),t(m,{label:"最近登录时间："},{default:o(()=>[l(i(a(s).login_time),1)]),_:1})]),_:1},8,["model"])]),_:1}),t(z,{show:a(u).show,"onUpdate:show":e[6]||(e[6]=r=>a(u).show=r),value:a(u).value,onConfirm:D},null,8,["show","value"])])}}});export{Ae as default};
