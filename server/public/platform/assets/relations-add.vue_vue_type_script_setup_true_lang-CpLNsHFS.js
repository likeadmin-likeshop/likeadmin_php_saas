<<<<<<<< HEAD:server/public/platform/assets/relations-add.vue_vue_type_script_setup_true_lang-dBfsVH7w.js
import{I as A,J as I,B as L,A as M,C as O}from"./element-plus-CSiqOtzA.js";import{h as P}from"./code-CONPbULQ.js";import{P as S}from"./index-CCcSOcs6.js";import{u as $}from"./useDictOptions-TjdRaX-u.js";import{d as J,s as g,r as N,b as T,Z,o as r,c as d,V as t,M as n,u as a,U as i,aa as _,L as y}from"./@vue-TMcuEboY.js";const j={class:"edit-popup"},W=J({__name:"relations-add",props:{column:{type:Array,default:()=>[]},types:{type:Array,default:()=>[]}},emits:["add","close","edit"],setup(k,{expose:x,emit:C}){const v=C,V=g(),m=g(),p=N("add"),E=T(()=>p.value=="edit"?"编辑关联":"新增关联"),o=Z({name:"",model:"",type:"",local_key:"",foreign_key:""}),R={name:[{required:!0,message:"请输入关联名称"}],type:[{required:!0,message:"请选择关联类型"}],model:[{required:!0,message:"请选择关联模型"}],local_key:[{required:!0,message:"请选择关联健"}],foreign_key:[{required:!0,message:"请输入外键"}]},{optionsData:U}=$({models:{api:P}}),q=async()=>{var u,e;await((u=V.value)==null?void 0:u.validate()),(e=m.value)==null||e.close(),v(p.value,o)},w=(u="add")=>{var e;p.value=u,(e=m.value)==null||e.open()},h=u=>{for(const e in o)u[e]!=null&&u[e]!=null&&(o[e]=u[e])},B=()=>{v("close")};return x({open:w,setFormData:h}),(u,e)=>{const c=A,f=I,s=L,b=M,D=O;return r(),d("div",j,[t(S,{ref_key:"popupRef",ref:m,title:a(E),async:!0,width:"550px",onConfirm:q,onClose:B},{default:n(()=>[t(D,{ref_key:"formRef",ref:V,model:a(o),"label-width":"84px",rules:R},{default:n(()=>[t(s,{label:"关联类型",prop:"type"},{default:n(()=>[t(f,{class:"flex-1",modelValue:a(o).type,"onUpdate:modelValue":e[0]||(e[0]=l=>a(o).type=l),placeholder:"请选择关联类型"},{default:n(()=>[(r(!0),d(i,null,_(k.types,(l,F)=>(r(),y(c,{key:F,label:l.name,value:l.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),t(s,{label:"关联名称",prop:"name"},{default:n(()=>[t(b,{modelValue:a(o).name,"onUpdate:modelValue":e[1]||(e[1]=l=>a(o).name=l),placeholder:"请输入关联名称"},null,8,["modelValue"])]),_:1}),t(s,{label:"关联模型",prop:"model"},{default:n(()=>[t(f,{class:"flex-1",modelValue:a(o).model,"onUpdate:modelValue":e[2]||(e[2]=l=>a(o).model=l),placeholder:"请选择关联模型"},{default:n(()=>[(r(!0),d(i,null,_(a(U).models,l=>(r(),y(c,{label:l,value:l,key:l},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),t(s,{label:"关联健",prop:"local_key"},{default:n(()=>[t(f,{class:"flex-1",modelValue:a(o).local_key,"onUpdate:modelValue":e[3]||(e[3]=l=>a(o).local_key=l),clearable:"",placeholder:"请选择关联健"},{default:n(()=>[(r(!0),d(i,null,_(k.column,l=>(r(),y(c,{key:l.id,value:l.column_name,label:`${l.column_name}：${l.column_comment}`},null,8,["value","label"]))),128))]),_:1},8,["modelValue"])]),_:1}),t(s,{label:"外键",prop:"foreign_key"},{default:n(()=>[t(b,{modelValue:a(o).foreign_key,"onUpdate:modelValue":e[4]||(e[4]=l=>a(o).foreign_key=l),placeholder:"关联表外键或中间表的外键"},null,8,["modelValue"])]),_:1})]),_:1},8,["model"])]),_:1},8,["title"])])}}});export{W as _};
========
import{I as A,J as I,B as L,A as M,C as O}from"./element-plus-CSiqOtzA.js";import{h as P}from"./code-BGKTsT6N.js";import{P as S}from"./index-CNq8mw6m.js";import{u as $}from"./useDictOptions-DE9cSN1q.js";import{d as J,s as g,r as N,b as T,Z,o as r,c as d,V as t,M as n,u as a,U as i,aa as _,L as y}from"./@vue-TMcuEboY.js";const j={class:"edit-popup"},W=J({__name:"relations-add",props:{column:{type:Array,default:()=>[]},types:{type:Array,default:()=>[]}},emits:["add","close","edit"],setup(k,{expose:x,emit:C}){const v=C,V=g(),m=g(),p=N("add"),E=T(()=>p.value=="edit"?"编辑关联":"新增关联"),o=Z({name:"",model:"",type:"",local_key:"",foreign_key:""}),R={name:[{required:!0,message:"请输入关联名称"}],type:[{required:!0,message:"请选择关联类型"}],model:[{required:!0,message:"请选择关联模型"}],local_key:[{required:!0,message:"请选择关联健"}],foreign_key:[{required:!0,message:"请输入外键"}]},{optionsData:U}=$({models:{api:P}}),q=async()=>{var u,e;await((u=V.value)==null?void 0:u.validate()),(e=m.value)==null||e.close(),v(p.value,o)},w=(u="add")=>{var e;p.value=u,(e=m.value)==null||e.open()},h=u=>{for(const e in o)u[e]!=null&&u[e]!=null&&(o[e]=u[e])},B=()=>{v("close")};return x({open:w,setFormData:h}),(u,e)=>{const c=A,f=I,s=L,b=M,D=O;return r(),d("div",j,[t(S,{ref_key:"popupRef",ref:m,title:a(E),async:!0,width:"550px",onConfirm:q,onClose:B},{default:n(()=>[t(D,{ref_key:"formRef",ref:V,model:a(o),"label-width":"84px",rules:R},{default:n(()=>[t(s,{label:"关联类型",prop:"type"},{default:n(()=>[t(f,{class:"flex-1",modelValue:a(o).type,"onUpdate:modelValue":e[0]||(e[0]=l=>a(o).type=l),placeholder:"请选择关联类型"},{default:n(()=>[(r(!0),d(i,null,_(k.types,(l,F)=>(r(),y(c,{key:F,label:l.name,value:l.value},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),t(s,{label:"关联名称",prop:"name"},{default:n(()=>[t(b,{modelValue:a(o).name,"onUpdate:modelValue":e[1]||(e[1]=l=>a(o).name=l),placeholder:"请输入关联名称"},null,8,["modelValue"])]),_:1}),t(s,{label:"关联模型",prop:"model"},{default:n(()=>[t(f,{class:"flex-1",modelValue:a(o).model,"onUpdate:modelValue":e[2]||(e[2]=l=>a(o).model=l),placeholder:"请选择关联模型"},{default:n(()=>[(r(!0),d(i,null,_(a(U).models,l=>(r(),y(c,{label:l,value:l,key:l},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),t(s,{label:"关联健",prop:"local_key"},{default:n(()=>[t(f,{class:"flex-1",modelValue:a(o).local_key,"onUpdate:modelValue":e[3]||(e[3]=l=>a(o).local_key=l),clearable:"",placeholder:"请选择关联健"},{default:n(()=>[(r(!0),d(i,null,_(k.column,l=>(r(),y(c,{key:l.id,value:l.column_name,label:`${l.column_name}：${l.column_comment}`},null,8,["value","label"]))),128))]),_:1},8,["modelValue"])]),_:1}),t(s,{label:"外键",prop:"foreign_key"},{default:n(()=>[t(b,{modelValue:a(o).foreign_key,"onUpdate:modelValue":e[4]||(e[4]=l=>a(o).foreign_key=l),placeholder:"关联表外键或中间表的外键"},null,8,["modelValue"])]),_:1})]),_:1},8,["model"])]),_:1},8,["title"])])}}});export{W as _};
>>>>>>>> master:server/public/platform/assets/relations-add.vue_vue_type_script_setup_true_lang-CpLNsHFS.js
