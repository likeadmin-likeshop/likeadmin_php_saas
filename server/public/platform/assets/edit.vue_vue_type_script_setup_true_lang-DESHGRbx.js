<<<<<<<< HEAD:server/public/platform/assets/edit.vue_vue_type_script_setup_true_lang-BBBOucIq.js
import{A as C,B as D,f as U,L as B,M as F,C as N}from"./element-plus-CSiqOtzA.js";import{e as q,f as I}from"./dict-DrwrYpel.js";import{P as A}from"./index-CCcSOcs6.js";import{d as M,s as _,r as P,b as S,Z as T,o as z,c as G,V as o,M as t,u as a,a as c,S as v}from"./@vue-TMcuEboY.js";const L={class:"edit-popup"},W=M({__name:"edit",emits:["success","close"],setup(Z,{expose:V,emit:b}){const p=b,i=_(),d=_(),m=P("add"),w=S(()=>m.value=="edit"?"编辑字典数据":"新增字典数据"),l=T({id:"",type_value:"",name:"",value:"",sort:0,status:1,remark:"",type_id:0}),x={name:[{required:!0,message:"请输入数据名称",trigger:["blur"]}],value:[{required:!0,message:"请输入数据值",trigger:["blur"]}]},k=async()=>{var s,e;await((s=i.value)==null?void 0:s.validate()),m.value=="edit"?await q(l):await I(l),(e=d.value)==null||e.close(),p("success")},y=()=>{p("close")};return V({open:(s="add")=>{var e;m.value=s,(e=d.value)==null||e.open()},setFormData:s=>{for(const e in l)s[e]!=null&&s[e]!=null&&(l[e]=s[e])}}),(s,e)=>{const n=C,u=D,R=U,f=B,g=F,E=N;return z(),G("div",L,[o(A,{ref_key:"popupRef",ref:d,title:a(w),async:!0,width:"550px",onConfirm:k,onClose:y},{default:t(()=>[o(E,{class:"ls-form",ref_key:"formRef",ref:i,rules:x,model:a(l),"label-width":"84px"},{default:t(()=>[o(u,{label:"字典类型"},{default:t(()=>[o(n,{"model-value":a(l).type_value,placeholder:"请输入字典类型",disabled:""},null,8,["model-value"])]),_:1}),o(u,{label:"数据名称",prop:"name"},{default:t(()=>[o(n,{modelValue:a(l).name,"onUpdate:modelValue":e[0]||(e[0]=r=>a(l).name=r),placeholder:"请输入数据名称",clearable:""},null,8,["modelValue"])]),_:1}),o(u,{label:"数据值",prop:"value"},{default:t(()=>[o(n,{modelValue:a(l).value,"onUpdate:modelValue":e[1]||(e[1]=r=>a(l).value=r),placeholder:"请输入数据值",clearable:""},null,8,["modelValue"])]),_:1}),o(u,{label:"排序",prop:"sort"},{default:t(()=>[c("div",null,[o(R,{modelValue:a(l).sort,"onUpdate:modelValue":e[2]||(e[2]=r=>a(l).sort=r),min:0,max:9999},null,8,["modelValue"]),e[5]||(e[5]=c("div",{class:"form-tips"},"数值越大越排前",-1))])]),_:1}),o(u,{label:"状态",required:"",prop:"status"},{default:t(()=>[o(g,{modelValue:a(l).status,"onUpdate:modelValue":e[3]||(e[3]=r=>a(l).status=r)},{default:t(()=>[o(f,{value:1},{default:t(()=>e[6]||(e[6]=[v("正常")])),_:1}),o(f,{value:0},{default:t(()=>e[7]||(e[7]=[v("停用")])),_:1})]),_:1},8,["modelValue"])]),_:1}),o(u,{label:"备注",prop:"remark"},{default:t(()=>[o(n,{modelValue:a(l).remark,"onUpdate:modelValue":e[4]||(e[4]=r=>a(l).remark=r),type:"textarea",autosize:{minRows:4,maxRows:6},clearable:"",maxlength:"200","show-word-limit":""},null,8,["modelValue"])]),_:1})]),_:1},8,["model"])]),_:1},8,["title"])])}}});export{W as _};
========
import{A as C,B as D,f as U,L as B,M as F,C as N}from"./element-plus-CSiqOtzA.js";import{e as q,f as I}from"./dict-PAEH6kOp.js";import{P as A}from"./index-CNq8mw6m.js";import{d as M,s as _,r as P,b as S,Z as T,o as z,c as G,V as o,M as t,u as a,a as c,S as v}from"./@vue-TMcuEboY.js";const L={class:"edit-popup"},W=M({__name:"edit",emits:["success","close"],setup(Z,{expose:V,emit:b}){const p=b,i=_(),d=_(),m=P("add"),w=S(()=>m.value=="edit"?"编辑字典数据":"新增字典数据"),l=T({id:"",type_value:"",name:"",value:"",sort:0,status:1,remark:"",type_id:0}),x={name:[{required:!0,message:"请输入数据名称",trigger:["blur"]}],value:[{required:!0,message:"请输入数据值",trigger:["blur"]}]},k=async()=>{var s,e;await((s=i.value)==null?void 0:s.validate()),m.value=="edit"?await q(l):await I(l),(e=d.value)==null||e.close(),p("success")},y=()=>{p("close")};return V({open:(s="add")=>{var e;m.value=s,(e=d.value)==null||e.open()},setFormData:s=>{for(const e in l)s[e]!=null&&s[e]!=null&&(l[e]=s[e])}}),(s,e)=>{const n=C,u=D,R=U,f=B,g=F,E=N;return z(),G("div",L,[o(A,{ref_key:"popupRef",ref:d,title:a(w),async:!0,width:"550px",onConfirm:k,onClose:y},{default:t(()=>[o(E,{class:"ls-form",ref_key:"formRef",ref:i,rules:x,model:a(l),"label-width":"84px"},{default:t(()=>[o(u,{label:"字典类型"},{default:t(()=>[o(n,{"model-value":a(l).type_value,placeholder:"请输入字典类型",disabled:""},null,8,["model-value"])]),_:1}),o(u,{label:"数据名称",prop:"name"},{default:t(()=>[o(n,{modelValue:a(l).name,"onUpdate:modelValue":e[0]||(e[0]=r=>a(l).name=r),placeholder:"请输入数据名称",clearable:""},null,8,["modelValue"])]),_:1}),o(u,{label:"数据值",prop:"value"},{default:t(()=>[o(n,{modelValue:a(l).value,"onUpdate:modelValue":e[1]||(e[1]=r=>a(l).value=r),placeholder:"请输入数据值",clearable:""},null,8,["modelValue"])]),_:1}),o(u,{label:"排序",prop:"sort"},{default:t(()=>[c("div",null,[o(R,{modelValue:a(l).sort,"onUpdate:modelValue":e[2]||(e[2]=r=>a(l).sort=r),min:0,max:9999},null,8,["modelValue"]),e[5]||(e[5]=c("div",{class:"form-tips"},"数值越大越排前",-1))])]),_:1}),o(u,{label:"状态",required:"",prop:"status"},{default:t(()=>[o(g,{modelValue:a(l).status,"onUpdate:modelValue":e[3]||(e[3]=r=>a(l).status=r)},{default:t(()=>[o(f,{value:1},{default:t(()=>e[6]||(e[6]=[v("正常")])),_:1}),o(f,{value:0},{default:t(()=>e[7]||(e[7]=[v("停用")])),_:1})]),_:1},8,["modelValue"])]),_:1}),o(u,{label:"备注",prop:"remark"},{default:t(()=>[o(n,{modelValue:a(l).remark,"onUpdate:modelValue":e[4]||(e[4]=r=>a(l).remark=r),type:"textarea",autosize:{minRows:4,maxRows:6},clearable:"",maxlength:"200","show-word-limit":""},null,8,["modelValue"])]),_:1})]),_:1},8,["model"])]),_:1},8,["title"])])}}});export{W as _};
>>>>>>>> master:server/public/platform/assets/edit.vue_vue_type_script_setup_true_lang-DESHGRbx.js
