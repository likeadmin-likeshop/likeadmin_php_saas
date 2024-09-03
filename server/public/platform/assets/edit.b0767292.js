import{_ as q}from"./index.7dccdd4d.js";import{Y as T,G as A,H as N,W as S,C as $,D as G,f as H,R as I,S as M,F as P,i as j}from"./element-plus.4582f566.js";import{u as z,a as L}from"./vue-router.680b42ce.js";import{i as O,p as W,q as X,v as Y,w as J}from"./index.cccafa45.js";import{d as w,a1 as f,s as K,r as Q,f as Z,o as ee,c as oe,X as e,P as l,u as t,a as m,U as b}from"./@vue.54440ad7.js";import"./@element-plus.e62cc43c.js";import"./lodash-es.2b4cc642.js";import"./dayjs.200e405c.js";import"./axios.185aa428.js";import"./async-validator.fb49d0f5.js";import"./@ctrl.b082b0c1.js";import"./@popperjs.36402333.js";import"./escape-html.e5dfadb9.js";import"./normalize-wheel-es.8aeb3683.js";import"./nprogress.cea375b6.js";import"./pinia.37585b34.js";import"./lodash.2a1164eb.js";import"./@vueuse.13464b8c.js";import"./css-color-function.a7ba2eb5.js";import"./color.70ead11b.js";import"./clone.b2899de9.js";import"./color-convert.755d189f.js";import"./color-name.e7a4e1d3.js";import"./color-string.e356f5de.js";import"./balanced-match.d2a36341.js";import"./ms.564e106c.js";import"./vue-clipboard3.066895f5.js";import"./clipboard.920a9914.js";import"./echarts.0909e9bd.js";import"./tslib.60310f1a.js";import"./zrender.91adfe72.js";import"./highlight.js.0fd4a67c.js";import"./@highlightjs.3654fb0a.js";const ae={class:"article-edit"},te={class:"w-80"},le={class:"w-80"},ue={class:"w-80"},se={class:"w-80"},re={class:"w-80"},ne=w({name:"scheduledTaskEdit"}),je=w({...ne,setup(me){const i=z(),E=L(),a=f({id:"",name:"",command:"",expression:"",params:"",remark:"",status:1,type:1}),{removeTab:v}=O(),d=K(),B=f({name:[{required:!0,message:"\u8BF7\u8F93\u5165\u540D\u79F0"}],command:[{required:!0,message:"\u8BF7\u8F93\u5165thankphp\u547D\u4EE4\uFF0C\u5982vresion"}],expression:[{required:!0,message:"\u8BF7\u8F93\u5165crontab\u89C4\u5219\uFF0C\u4F8B\uFF1A5 9 * * *"}]}),V=async()=>{const s=await W({id:i.query.id});Object.keys(a).forEach(o=>{a[o]=s[o]})},p=Q([]),c=async()=>{var o;await((o=d.value)==null?void 0:o.validateField(["expression"]));const s=await X({expression:a.expression});p.value=s},x=async()=>{var s;await((s=d.value)==null?void 0:s.validate()),i.query.id?await Y(a):await J(a),v(),E.back()};return Z(async()=>{!i.query.id||(await V(),await c())}),(s,o)=>{const C=T,_=S,n=$,r=G,h=A,y=N,k=H,F=I,D=M,g=P,R=j,U=q;return ee(),oe("div",ae,[e(_,{class:"!border-none",shadow:"never"},{default:l(()=>[e(C,{content:s.$route.meta.title,onBack:o[0]||(o[0]=u=>s.$router.back())},null,8,["content"])]),_:1}),e(_,{class:"mt-4 !border-none",shadow:"never"},{default:l(()=>[e(g,{ref_key:"formRef",ref:d,class:"ls-form",model:t(a),"label-width":"85px",rules:t(B)},{default:l(()=>[e(r,{label:"\u540D\u79F0",prop:"name"},{default:l(()=>[m("div",te,[e(n,{modelValue:t(a).name,"onUpdate:modelValue":o[1]||(o[1]=u=>t(a).name=u),placeholder:"\u8BF7\u8F93\u5165\u540D\u79F0",maxlength:"30",clearable:""},null,8,["modelValue"])])]),_:1}),e(r,{label:"\u7C7B\u578B",prop:"type"},{default:l(()=>[e(y,{modelValue:t(a).type,"onUpdate:modelValue":o[2]||(o[2]=u=>t(a).type=u)},{default:l(()=>[e(h,{label:1},{default:l(()=>[b("\u5B9A\u65F6\u4EFB\u52A1")]),_:1})]),_:1},8,["modelValue"])]),_:1}),e(r,{label:"\u547D\u4EE4",prop:"command"},{default:l(()=>[m("div",le,[e(n,{modelValue:t(a).command,"onUpdate:modelValue":o[3]||(o[3]=u=>t(a).command=u),placeholder:"\u8BF7\u8F93\u5165thinkphp\u547D\u4EE4\uFF0C\u5982vresion",clearable:""},null,8,["modelValue"])])]),_:1}),e(r,{label:"\u53C2\u6570",prop:"params"},{default:l(()=>[m("div",ue,[e(n,{modelValue:t(a).params,"onUpdate:modelValue":o[4]||(o[4]=u=>t(a).params=u),placeholder:"\u8BF7\u8F93\u5165\u53C2\u6570\uFF0C\u4F8B:--id 8 --name \u6D4B\u8BD5",clearable:""},null,8,["modelValue"])])]),_:1}),e(r,{label:"\u72B6\u6001"},{default:l(()=>[e(k,{modelValue:t(a).status,"onUpdate:modelValue":o[5]||(o[5]=u=>t(a).status=u),"active-value":1,"inactive-value":2},null,8,["modelValue"])]),_:1}),e(r,{label:"\u89C4\u5219",prop:"expression"},{default:l(()=>[m("div",se,[e(n,{onBlur:c,modelValue:t(a).expression,"onUpdate:modelValue":o[6]||(o[6]=u=>t(a).expression=u),placeholder:"\u8BF7\u8F93\u5165crontab\u89C4\u5219\uFF0C\u4F8B\uFF1A5 9 * * *"},null,8,["modelValue"])])]),_:1}),e(r,null,{default:l(()=>[e(D,{data:t(p),style:{"max-width":"320px"}},{default:l(()=>[e(F,{prop:"time",label:"\u5E8F\u53F7","min-width":"80"}),e(F,{prop:"date",label:"\u6267\u884C\u65F6\u95F4","min-width":"240"})]),_:1},8,["data"])]),_:1}),e(r,{label:"\u5907\u6CE8",prop:"remark"},{default:l(()=>[m("div",re,[e(n,{modelValue:t(a).remark,"onUpdate:modelValue":o[7]||(o[7]=u=>t(a).remark=u),type:"textarea",autosize:{minRows:3,maxRows:6},maxlength:200,"show-word-limit":"",clearable:""},null,8,["modelValue"])])]),_:1})]),_:1},8,["model","rules"])]),_:1}),e(U,null,{default:l(()=>[e(R,{type:"primary",onClick:x},{default:l(()=>[b("\u4FDD\u5B58")]),_:1})]),_:1})])}}});export{je as default};