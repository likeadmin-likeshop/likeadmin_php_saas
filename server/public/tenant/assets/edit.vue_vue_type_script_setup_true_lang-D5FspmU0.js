import{G as U,C as Y,B as A,H as I,D as T}from"./element-plus-BBKw480Q.js";import{r as g}from"./index-BjfF9UyA.js";import{P as G}from"./index-CYqo2c2l.js";import{d as F,s as y,Z as h,b as L,o as _,c as k,V as o,M as r,u as l,a as u,S as f,T as E,L as P,R as V}from"./@vue-pHjCrgw6.js";function te(){return g.get({url:"/setting.storage/lists"})}function H(d){return g.post({url:"/setting.storage/setup",params:d})}function M(d){return g.get({url:"/setting.storage/detail",params:d})}const Z={class:"edit-popup"},j={class:"form-tips"},z={key:0},J={class:"flex-1"},Q={class:"flex-1"},oe=F({__name:"edit",emits:["success"],setup(d,{expose:v,emit:C}){const R=C,p=y(),m=y(),t=h({engine:"",bucket:"",access_key:"",secret_key:"",domain:"",region:"",status:0}),q=[{name:"本地存储",type:"local",tips:"本地存储方式不需要配置其他参数"},{name:"七牛云存储",type:"qiniu",tips:"切换七牛云存储后，素材库需要重新上传至七牛云"},{name:"阿里云OSS",type:"aliyun",tips:"切换阿里云OSS后，素材库需要重新上传至阿里云OSS"},{name:"腾讯云OSS",type:"qcloud",tips:"切换腾讯云OSS后，素材库需要重新上传至腾讯云OSS"}],x={bucket:[{required:!0,message:"请输入存储空间名称",trigger:"blur"}],access_key:[{required:!0,message:"请输入ACCESS_KEY",trigger:"blur"}],secret_key:[{required:!0,message:"请输入SECRET_KEY",trigger:"blur"}],domain:[{required:!0,message:"请输入空间域名",trigger:"blur"}],region:[{required:!0,message:"请输入REGION",trigger:"blur"}]},S=L(()=>q.find(s=>s.type==t.engine)),K=async()=>{var s,e;await((s=p.value)==null?void 0:s.validate()),await H(t),(e=m.value)==null||e.close(),R("success")},O=async()=>{const s=await M({engine:t.engine});for(const e in s)t[e]=s[e]},w=s=>{var e;t.engine=s,(e=m.value)==null||e.open(),O()},B=()=>{var s;(s=p.value)==null||s.resetFields()};return v({open:w}),(s,e)=>{const c=U,n=Y,i=A,D=I,N=T;return _(),k("div",Z,[o(G,{ref_key:"popupRef",ref:m,title:"设置存储",async:!0,width:"550px",onConfirm:K,onClose:B},{default:r(()=>[o(N,{ref_key:"formRef",ref:p,model:l(t),"label-width":"120px",rules:x},{default:r(()=>[o(n,{label:"存储方式",prop:"engine"},{default:r(()=>{var a;return[u("div",null,[o(c,{"model-value":""},{default:r(()=>{var b;return[f(E((b=l(S))==null?void 0:b.name),1)]}),_:1}),u("div",j,E((a=l(S))==null?void 0:a.tips),1)])]}),_:1}),l(t).engine!=="local"?(_(),k("div",z,[o(n,{label:" 存储空间名称",prop:"bucket"},{default:r(()=>[u("div",J,[o(i,{modelValue:l(t).bucket,"onUpdate:modelValue":e[0]||(e[0]=a=>l(t).bucket=a),placeholder:"请输入存储空间名称(Bucket)",clearable:""},null,8,["modelValue"])])]),_:1}),o(n,{label:"ACCESS_KEY",prop:"access_key"},{default:r(()=>[o(i,{modelValue:l(t).access_key,"onUpdate:modelValue":e[1]||(e[1]=a=>l(t).access_key=a),placeholder:"请输入ACCESS_KEY(AK)",clearable:""},null,8,["modelValue"])]),_:1}),o(n,{label:"SECRET_KEY",prop:"secret_key"},{default:r(()=>[o(i,{modelValue:l(t).secret_key,"onUpdate:modelValue":e[2]||(e[2]=a=>l(t).secret_key=a),placeholder:"请输入SECRET_KEY(SK)",clearable:""},null,8,["modelValue"])]),_:1}),o(n,{label:"空间域名",prop:"domain"},{default:r(()=>[u("div",Q,[u("div",null,[o(i,{modelValue:l(t).domain,"onUpdate:modelValue":e[3]||(e[3]=a=>l(t).domain=a),placeholder:"请输入空间域名(Domain)",clearable:""},null,8,["modelValue"])]),e[6]||(e[6]=u("div",{class:"form-tips"}," 请补全http://或https://，例如https://static.cloud.com ",-1))])]),_:1}),l(t).engine=="qcloud"?(_(),P(n,{key:0,label:"REGION",prop:"region"},{default:r(()=>[o(i,{modelValue:l(t).region,"onUpdate:modelValue":e[4]||(e[4]=a=>l(t).region=a),placeholder:"请输入region",clearable:""},null,8,["modelValue"])]),_:1})):V("",!0)])):V("",!0),o(n,{label:"状态",prop:"status"},{default:r(()=>[o(D,{modelValue:l(t).status,"onUpdate:modelValue":e[5]||(e[5]=a=>l(t).status=a)},{default:r(()=>[o(c,{value:0},{default:r(()=>e[7]||(e[7]=[f("关闭")])),_:1}),o(c,{value:1},{default:r(()=>e[8]||(e[8]=[f("开启")])),_:1})]),_:1},8,["modelValue"])]),_:1})]),_:1},8,["model"])]),_:1},512)])}}});export{oe as _,te as s};
