import{_ as F}from"./index-CvCaNps6.js";import{R as D,F as I,A as M,B as N,K as S,L as $,e as A,G,I as L,C as j,g as z}from"./element-plus-D_drhFLK.js";import{e as H,p as K,q as O,v as P,w as Z}from"./index-B2WahP0L.js";import{u as J,a as Q}from"./vue-router-CZY6S6gL.js";import{d as v,Z as b,s as W,r as X,f as Y,o as ee,c as oe,V as o,M as l,u as t,a as i,S as w}from"./@vue-TMcuEboY.js";import"./lodash-es-R-kYiKr_.js";import"./async-validator-DKvM95Vc.js";import"./@element-plus-C2WBhajb.js";import"./dayjs-CMfar2R3.js";import"./balanced-match-mNcR6oh4.js";import"./@ctrl-r5W6hzzQ.js";import"./normalize-wheel-es-B6fDCfyv.js";import"./@popperjs-D9SI2xQl.js";import"./nprogress-Cgf5DU8x.js";import"./pinia-ebUeA1L2.js";import"./axios-C-n2IhIP.js";import"./lodash-BtPWuHkK.js";import"./@vueuse-DE_336rM.js";import"./css-color-function-rJvg8h-6.js";import"./color-B0v57BL7.js";import"./clone-CuIhj1wH.js";import"./color-convert-BGgJB5UM.js";import"./color-name-BQ5IbGbl.js";import"./color-string-BhgG7-8u.js";import"./ms-CzQ2E3wO.js";import"./vue-clipboard3-8CNoFg4V.js";import"./clipboard-Dch_ozqB.js";import"./echarts-BR_QmBtV.js";import"./tslib-BDyQ-Jie.js";import"./zrender-B-CeXLwU.js";import"./highlight.js-D5uP1KGk.js";import"./@highlightjs-KJi31KWJ.js";const ae={class:"article-edit"},te={class:"w-80"},le={class:"w-80"},se={class:"w-80"},re={class:"w-80"},ne={class:"w-80"},me=v({name:"scheduledTaskEdit"}),je=v({...me,setup(ie){const d=J(),V=Q(),a=b({id:"",name:"",command:"",expression:"",params:"",remark:"",status:1,type:1}),{removeTab:x}=H(),p=W(),E=b({name:[{required:!0,message:"请输入名称"}],command:[{required:!0,message:"请输入thankphp命令，如vresion"}],expression:[{required:!0,message:"请输入crontab规则，例：5 9 * * *"}]}),y=async()=>{const r=await K({id:d.query.id});Object.keys(a).forEach(e=>{a[e]=r[e]})},u=X([]),c=async()=>{var e;await((e=p.value)==null?void 0:e.validateField(["expression"]));const r=await O({expression:a.expression});u.value=r},k=async()=>{var r;await((r=p.value)==null?void 0:r.validate()),d.query.id?await P(a):await Z(a),x(),V.back()};return Y(async()=>{d.query.id&&(await y(),await c())}),(r,e)=>{const g=D,_=I,m=M,n=N,h=S,R=$,q=A,f=G,B=L,U=j,C=z,T=F;return ee(),oe("div",ae,[o(_,{class:"!border-none",shadow:"never"},{default:l(()=>[o(g,{content:r.$route.meta.title,onBack:e[0]||(e[0]=s=>r.$router.back())},null,8,["content"])]),_:1}),o(_,{class:"mt-4 !border-none",shadow:"never"},{default:l(()=>[o(U,{ref_key:"formRef",ref:p,class:"ls-form",model:t(a),"label-width":"85px",rules:t(E)},{default:l(()=>[o(n,{label:"名称",prop:"name"},{default:l(()=>[i("div",te,[o(m,{modelValue:t(a).name,"onUpdate:modelValue":e[1]||(e[1]=s=>t(a).name=s),placeholder:"请输入名称",maxlength:"30",clearable:""},null,8,["modelValue"])])]),_:1}),o(n,{label:"类型",prop:"type"},{default:l(()=>[o(R,{modelValue:t(a).type,"onUpdate:modelValue":e[2]||(e[2]=s=>t(a).type=s)},{default:l(()=>[o(h,{value:1},{default:l(()=>e[8]||(e[8]=[w("定时任务")])),_:1})]),_:1},8,["modelValue"])]),_:1}),o(n,{label:"命令",prop:"command"},{default:l(()=>[i("div",le,[o(m,{modelValue:t(a).command,"onUpdate:modelValue":e[3]||(e[3]=s=>t(a).command=s),placeholder:"请输入thinkphp命令，如vresion",clearable:""},null,8,["modelValue"])])]),_:1}),o(n,{label:"参数",prop:"params"},{default:l(()=>[i("div",se,[o(m,{modelValue:t(a).params,"onUpdate:modelValue":e[4]||(e[4]=s=>t(a).params=s),placeholder:"请输入参数，例:--id 8 --name 测试",clearable:""},null,8,["modelValue"])])]),_:1}),o(n,{label:"状态"},{default:l(()=>[o(q,{modelValue:t(a).status,"onUpdate:modelValue":e[5]||(e[5]=s=>t(a).status=s),"active-value":1,"inactive-value":2},null,8,["modelValue"])]),_:1}),o(n,{label:"规则",prop:"expression"},{default:l(()=>[i("div",re,[o(m,{onBlur:c,modelValue:t(a).expression,"onUpdate:modelValue":e[6]||(e[6]=s=>t(a).expression=s),placeholder:"请输入crontab规则，例：5 9 * * *"},null,8,["modelValue"])])]),_:1}),o(n,null,{default:l(()=>[o(B,{data:t(u),style:{"max-width":"320px"}},{default:l(()=>[o(f,{prop:"time",label:"序号","min-width":"80"}),o(f,{prop:"date",label:"执行时间","min-width":"240"})]),_:1},8,["data"])]),_:1}),o(n,{label:"备注",prop:"remark"},{default:l(()=>[i("div",ne,[o(m,{modelValue:t(a).remark,"onUpdate:modelValue":e[7]||(e[7]=s=>t(a).remark=s),type:"textarea",autosize:{minRows:3,maxRows:6},maxlength:200,"show-word-limit":"",clearable:""},null,8,["modelValue"])])]),_:1})]),_:1},8,["model","rules"])]),_:1}),o(T,null,{default:l(()=>[o(C,{type:"primary",onClick:k},{default:l(()=>e[9]||(e[9]=[w("保存")])),_:1})]),_:1})])}}});export{je as default};
