import{_ as q}from"./index-4Pi40UL7.js";import{D as C,$ as B,B as D,e as U,G as R,g as S,C as F}from"./element-plus-CSiqOtzA.js";import{g as L,s as N}from"./user-_BX9-58G.js";import{d as y,r as P,Z as b,an as W,o as w,c as G,V as l,M as i,a as t,u as r,T as _,S as s,O as T,L as j}from"./@vue-TMcuEboY.js";import"./index-CtAauVK2.js";import"./nprogress-Cgf5DU8x.js";import"./balanced-match-mNcR6oh4.js";import"./vue-router-CZY6S6gL.js";import"./pinia-ebUeA1L2.js";import"./axios-C-n2IhIP.js";import"./lodash-BtPWuHkK.js";import"./@vueuse-DE_336rM.js";import"./css-color-function-rJvg8h-6.js";import"./color-B0v57BL7.js";import"./clone-CuIhj1wH.js";import"./color-convert-BGgJB5UM.js";import"./color-name-BQ5IbGbl.js";import"./color-string-BhgG7-8u.js";import"./ms-CzQ2E3wO.js";import"./@element-plus-C2WBhajb.js";import"./vue-clipboard3-8CNoFg4V.js";import"./clipboard-Dch_ozqB.js";import"./echarts-BR_QmBtV.js";import"./tslib-BDyQ-Jie.js";import"./zrender-B-CeXLwU.js";import"./highlight.js-D5uP1KGk.js";import"./@highlightjs-KJi31KWJ.js";import"./lodash-es-R-kYiKr_.js";import"./async-validator-DKvM95Vc.js";import"./dayjs-CMfar2R3.js";import"./@ctrl-r5W6hzzQ.js";import"./normalize-wheel-es-B6fDCfyv.js";import"./@popperjs-D9SI2xQl.js";const A={class:"login-register"},I={class:"mt-1 ml-2"},M={class:"mt-1 ml-2"},O={class:"mt-1 ml-2"},Z={href:"https://open.weixin.qq.com/",target:"_blank"},$=y({name:"loginRegister"}),Ce=y({...$,setup(z){const d=P(),o=b({login_way:[],coerce_mobile:0,login_agreement:0,third_auth:0,wechat_auth:0,qq_auth:0}),V=b({loginWay:[{required:!0,validator:(n,e,m)=>{if(o.login_way.join("").length===0)m(new Error("登录方式至少选择一项！"));else{if(o.login_way!==""){if(!d.value)return;d.value.validateField("checkPass")}m()}},trigger:"change"}],coerce_mobile:[{required:!0,trigger:"blur"}],login_agreement:[{required:!0,trigger:"blur"}],third_auth:[{required:!0,trigger:"blur"}]}),g=async()=>{try{const n=await L();for(const e in o)o[e]=n[e]}catch(n){console.log("获取=>",n)}},h=async()=>{var n;await((n=d.value)==null?void 0:n.validate());try{await N(o),g()}catch(e){console.log("保存=>",e)}};return g(),(n,e)=>{const m=C,f=B,u=D,p=U,c=R,v=S,k=F,x=q,E=W("perms");return w(),G("div",A,[l(k,{ref_key:"formRef",ref:d,rules:r(V),model:r(o),"label-width":"120px"},{default:i(()=>[l(c,{shadow:"never",class:"!border-none"},{default:i(()=>[e[8]||(e[8]=t("div",{class:"font-medium mb-7"},"通用设置",-1)),l(u,{label:"登录方式",prop:"login_way"},{default:i(()=>[t("div",null,[l(f,{modelValue:r(o).login_way,"onUpdate:modelValue":e[0]||(e[0]=a=>r(o).login_way=a)},{default:i(()=>[l(m,{label:"账号密码登录",value:"1"}),l(m,{label:"手机验证码登录",value:"2"})]),_:1},8,["modelValue"]),e[5]||(e[5]=t("div",{class:"form-tips"},"系统通用登录方式，至少选择一项",-1))])]),_:1}),l(u,{label:"强制绑定手机",prop:"coerce_mobile"},{default:i(()=>[t("div",null,[l(p,{modelValue:r(o).coerce_mobile,"onUpdate:modelValue":e[1]||(e[1]=a=>r(o).coerce_mobile=a),"active-value":1,"inactive-value":0},null,8,["modelValue"]),t("span",I,_(r(o).coerce_mobile?"开启":"关闭"),1),e[6]||(e[6]=t("div",{class:"form-tips"},[s(" 1、如果开启，则新用户在注册完成之后要强制绑定手机号"),t("br"),s(" 2、老用户登录时如果检测到没有绑定手机，则要重新绑定手机号 ")],-1))])]),_:1}),l(u,{label:"政策协议",prop:"login_agreement"},{default:i(()=>[t("div",null,[l(p,{modelValue:r(o).login_agreement,"onUpdate:modelValue":e[2]||(e[2]=a=>r(o).login_agreement=a),"active-value":1,"inactive-value":0},null,8,["modelValue"]),t("span",M,_(r(o).login_agreement?"开启":"关闭"),1),e[7]||(e[7]=t("div",{class:"form-tips"},"登录/注册会员时，是否显示服务协议和隐私政策",-1))])]),_:1})]),_:1}),l(c,{shadow:"never",class:"!border-none mt-4"},{default:i(()=>[e[13]||(e[13]=t("div",{class:"font-medium mb-7"},"第三方设置",-1)),l(u,{label:"第三方登录",prop:"third_auth"},{default:i(()=>[t("div",null,[l(p,{modelValue:r(o).third_auth,"onUpdate:modelValue":e[3]||(e[3]=a=>r(o).third_auth=a),"active-value":1,"inactive-value":0},null,8,["modelValue"]),t("span",O,_(r(o).third_auth?"开启":"关闭"),1),e[10]||(e[10]=t("div",{class:"form-tips"},"登录时支持第三方登录，新用户授权即自动注册账号",-1)),t("div",null,[l(m,{modelValue:r(o).wechat_auth,"onUpdate:modelValue":e[4]||(e[4]=a=>r(o).wechat_auth=a),"true-value":1,"false-value":0},{default:i(()=>e[9]||(e[9]=[s(" 微信登录 ")])),_:1},8,["modelValue"])])])]),_:1}),l(u,{label:"微信开放平台"},{default:i(()=>[t("div",null,[t("a",Z,[l(v,{type:"primary",link:"",class:"underline"},{default:i(()=>e[11]||(e[11]=[s(" 前往微信开放平台 ")])),_:1})]),e[12]||(e[12]=t("div",{class:"form-tips"},[s(" 1、在各渠道使用微信授权登录时，强烈建议配置微信开放平台"),t("br"),s(" 2、微信开放平台关联公众号、小程序和APP后，可实现各端用户账号统一，识别买家唯一微信身份"),t("br"),s(" 3、没有配置微信开放平台，同一微信号会生成多个用户，配置微信开放平台后已生成的用户账号无法合并 ")],-1))])]),_:1})]),_:1})]),_:1},8,["rules","model"]),T((w(),j(x,null,{default:i(()=>[l(v,{type:"primary",onClick:h},{default:i(()=>e[14]||(e[14]=[s("保存")])),_:1})]),_:1})),[[E,["setting.user.user/setRegisterConfig"]]])])}}});export{Ce as default};