<<<<<<<< HEAD:server/public/platform/assets/edit.vue_vue_type_script_setup_true_lang-DOVmBiid.js
import{C as O,A as P,B as J,N as M,I as Z,J as $,e as z}from"./element-plus-CSiqOtzA.js";import{_ as G}from"./picker-Bi0hsT8p.js";import{u as H,a as K,g as Q}from"./consumer-IhHDQij6.js";import{b as W}from"./department-zCa9AXjn.js";import{e as X}from"./post-DYM-xW4D.js";import{r as Y}from"./role-D-3Lz8tq.js";import{P as h}from"./index-CCcSOcs6.js";import{u as ee}from"./useDictOptions-TjdRaX-u.js";import{u as U}from"./getExposeType-C5XerQxt.js";import{d as le,r as j,b as ae,Z as oe,o as u,L as p,M as d,V as t,u as a,a as m,c as k,U as A,aa as C,R}from"./@vue-TMcuEboY.js";const ce=le({__name:"edit",props:{tenant_id:{type:Number}},emits:["refresh","close"],setup(F,{expose:q,emit:B}){const i=F,V=B,w=U(),_=U(),f=j("add"),D=ae(()=>f.value=="edit"?"编辑管理员":"新增管理员"),l=j({id:"",account:"",name:"",dept_id:[],jobs_id:[],role_id:[],avatar:"",password:"",password_confirm:"",disable:0,multipoint_login:1,root:0}),g=(s,e,r)=>{l.value.password&&(e||r(new Error("请再次输入密码")),e!==l.value.password&&r(new Error("两次输入密码不一致!"))),r()},c=oe({account:[{required:!0,message:"请输入账号",trigger:["blur"]}],name:[{required:!0,message:"请输入名称",trigger:["blur"]}],role_id:[{required:!0,validator:(s,e,r)=>{l.value.root||l.value.role_id.length?r():r(new Error("请选择角色"))}}],password:[{required:!0,message:"请输入密码",trigger:["blur"]}],password_confirm:[{required:!0,message:"请输入确认密码",trigger:["blur"]},{validator:g,trigger:"blur"}]}),{optionsData:b}=ee({role:{api:Y,params:{tenant_id:i.tenant_id}},jobs:{api:X,params:{tenant_id:i.tenant_id}},dept:{api:W,params:{tenant_id:i.tenant_id}}}),I=async()=>{var s,e;await((s=w.value)==null?void 0:s.validate()),f.value=="edit"?await H({...l.value,tenant_id:i.tenant_id}):await K({...l.value,tenant_id:i.tenant_id}),(e=_.value)==null||e.close(),V("refresh")},N=(s="add",e)=>{var r;e&&S(e),f.value=s,(r=_.value)==null||r.open()},S=async s=>{c.password=[],c.password_confirm=[{validator:g,trigger:"blur"}];const e=await Q({id:s,tenant_id:i.tenant_id});l.value=e};return q({open:N}),(s,e)=>{const r=P,n=J,T=G,L=M,y=Z,E=$,x=z;return u(),p(h,{ref_key:"popupRef",ref:_,title:a(D),async:!0,width:"550px",onConfirm:I,onClose:e[10]||(e[10]=o=>V("close"))},{default:d(()=>[t(a(O),{ref_key:"editFormRef",ref:w,model:a(l),"label-width":"84px",rules:a(c)},{default:d(()=>[t(n,{label:"账号",prop:"account"},{default:d(()=>[t(r,{modelValue:a(l).account,"onUpdate:modelValue":e[0]||(e[0]=o=>a(l).account=o),disabled:a(l).root==1,placeholder:"请输入账号",clearable:""},null,8,["modelValue","disabled"])]),_:1}),t(n,{label:"头像",prop:"avatar"},{default:d(()=>[m("div",null,[m("div",null,[t(T,{modelValue:a(l).avatar,"onUpdate:modelValue":e[1]||(e[1]=o=>a(l).avatar=o),limit:1},null,8,["modelValue"])]),e[11]||(e[11]=m("div",{class:"form-tips"},"建议尺寸：100*100px，支持jpg，jpeg，png格式",-1))])]),_:1}),t(n,{label:"名称",prop:"name"},{default:d(()=>[t(r,{modelValue:a(l).name,"onUpdate:modelValue":e[2]||(e[2]=o=>a(l).name=o),placeholder:"请输入名称",clearable:""},null,8,["modelValue"])]),_:1}),t(n,{label:"归属部门",prop:"dept_id"},{default:d(()=>[t(L,{class:"flex-1",modelValue:a(l).dept_id,"onUpdate:modelValue":e[3]||(e[3]=o=>a(l).dept_id=o),data:a(b).dept,clearable:"",multiple:"","node-key":"id",props:{value:"id",label:"name",disabled(o){return o.status!==1}},"check-strictly":"","default-expand-all":!0,placeholder:"请选择上级部门"},null,8,["modelValue","data","props"])]),_:1}),t(n,{label:"岗位",prop:"jobs_id"},{default:d(()=>[t(E,{class:"flex-1",modelValue:a(l).jobs_id,"onUpdate:modelValue":e[4]||(e[4]=o=>a(l).jobs_id=o),clearable:"",multiple:"",placeholder:"请选择岗位"},{default:d(()=>[(u(!0),k(A,null,C(a(b).jobs,(o,v)=>(u(),p(y,{key:v,label:o.name,value:o.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),a(l).root!=1?(u(),p(n,{key:0,label:"角色",prop:"role_id"},{default:d(()=>[t(E,{modelValue:a(l).role_id,"onUpdate:modelValue":e[5]||(e[5]=o=>a(l).role_id=o),disabled:a(l).root==1,class:"flex-1",multiple:"",placeholder:"请选择角色",clearable:""},{default:d(()=>[(u(!0),k(A,null,C(a(b).role,(o,v)=>(u(),p(y,{key:v,label:o.name,value:o.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue","disabled"])]),_:1})):R("",!0),t(n,{label:"密码",prop:"password"},{default:d(()=>[t(r,{modelValue:a(l).password,"onUpdate:modelValue":e[6]||(e[6]=o=>a(l).password=o),"show-password":"",clearable:"",placeholder:"请输入密码"},null,8,["modelValue"])]),_:1}),t(n,{label:"确认密码",prop:"password_confirm"},{default:d(()=>[t(r,{modelValue:a(l).password_confirm,"onUpdate:modelValue":e[7]||(e[7]=o=>a(l).password_confirm=o),"show-password":"",clearable:"",placeholder:"请输入确认密码"},null,8,["modelValue"])]),_:1}),a(l).root!=1?(u(),p(n,{key:1,label:"管理员状态",prop:"disable"},{default:d(()=>[t(x,{modelValue:a(l).disable,"onUpdate:modelValue":e[8]||(e[8]=o=>a(l).disable=o),"active-value":0,"inactive-value":1},null,8,["modelValue"])]),_:1})):R("",!0),t(n,{label:"多处登录",prop:"multipoint_login"},{default:d(()=>[m("div",null,[t(x,{modelValue:a(l).multipoint_login,"onUpdate:modelValue":e[9]||(e[9]=o=>a(l).multipoint_login=o),"active-value":1,"inactive-value":0},null,8,["modelValue"]),e[12]||(e[12]=m("div",{class:"form-tips"},"允许多人同时在线登录",-1))])]),_:1})]),_:1},8,["model","rules"])]),_:1},8,["title"])}}});export{ce as _};
========
import{C as O,A as P,B as J,N as M,I as Z,J as $,e as z}from"./element-plus-CSiqOtzA.js";import{_ as G}from"./picker-CJdq_riw.js";import{u as H,a as K,g as Q}from"./consumer-PlvWqHB3.js";import{b as W}from"./department-CAtGmmt4.js";import{e as X}from"./post-ClaJ3mv3.js";import{r as Y}from"./role-BMUdr34j.js";import{P as h}from"./index-CNq8mw6m.js";import{u as ee}from"./useDictOptions-DE9cSN1q.js";import{u as U}from"./getExposeType-C5XerQxt.js";import{d as le,r as j,b as ae,Z as oe,o as u,L as p,M as d,V as t,u as a,a as m,c as k,U as A,aa as C,R}from"./@vue-TMcuEboY.js";const ce=le({__name:"edit",props:{tenant_id:{type:Number}},emits:["refresh","close"],setup(F,{expose:q,emit:B}){const i=F,V=B,w=U(),_=U(),f=j("add"),D=ae(()=>f.value=="edit"?"编辑管理员":"新增管理员"),l=j({id:"",account:"",name:"",dept_id:[],jobs_id:[],role_id:[],avatar:"",password:"",password_confirm:"",disable:0,multipoint_login:1,root:0}),g=(s,e,r)=>{l.value.password&&(e||r(new Error("请再次输入密码")),e!==l.value.password&&r(new Error("两次输入密码不一致!"))),r()},c=oe({account:[{required:!0,message:"请输入账号",trigger:["blur"]}],name:[{required:!0,message:"请输入名称",trigger:["blur"]}],role_id:[{required:!0,validator:(s,e,r)=>{l.value.root||l.value.role_id.length?r():r(new Error("请选择角色"))}}],password:[{required:!0,message:"请输入密码",trigger:["blur"]}],password_confirm:[{required:!0,message:"请输入确认密码",trigger:["blur"]},{validator:g,trigger:"blur"}]}),{optionsData:b}=ee({role:{api:Y,params:{tenant_id:i.tenant_id}},jobs:{api:X,params:{tenant_id:i.tenant_id}},dept:{api:W,params:{tenant_id:i.tenant_id}}}),I=async()=>{var s,e;await((s=w.value)==null?void 0:s.validate()),f.value=="edit"?await H({...l.value,tenant_id:i.tenant_id}):await K({...l.value,tenant_id:i.tenant_id}),(e=_.value)==null||e.close(),V("refresh")},N=(s="add",e)=>{var r;e&&S(e),f.value=s,(r=_.value)==null||r.open()},S=async s=>{c.password=[],c.password_confirm=[{validator:g,trigger:"blur"}];const e=await Q({id:s,tenant_id:i.tenant_id});l.value=e};return q({open:N}),(s,e)=>{const r=P,n=J,T=G,L=M,y=Z,E=$,x=z;return u(),p(h,{ref_key:"popupRef",ref:_,title:a(D),async:!0,width:"550px",onConfirm:I,onClose:e[10]||(e[10]=o=>V("close"))},{default:d(()=>[t(a(O),{ref_key:"editFormRef",ref:w,model:a(l),"label-width":"84px",rules:a(c)},{default:d(()=>[t(n,{label:"账号",prop:"account"},{default:d(()=>[t(r,{modelValue:a(l).account,"onUpdate:modelValue":e[0]||(e[0]=o=>a(l).account=o),disabled:a(l).root==1,placeholder:"请输入账号",clearable:""},null,8,["modelValue","disabled"])]),_:1}),t(n,{label:"头像",prop:"avatar"},{default:d(()=>[m("div",null,[m("div",null,[t(T,{modelValue:a(l).avatar,"onUpdate:modelValue":e[1]||(e[1]=o=>a(l).avatar=o),limit:1},null,8,["modelValue"])]),e[11]||(e[11]=m("div",{class:"form-tips"},"建议尺寸：100*100px，支持jpg，jpeg，png格式",-1))])]),_:1}),t(n,{label:"名称",prop:"name"},{default:d(()=>[t(r,{modelValue:a(l).name,"onUpdate:modelValue":e[2]||(e[2]=o=>a(l).name=o),placeholder:"请输入名称",clearable:""},null,8,["modelValue"])]),_:1}),t(n,{label:"归属部门",prop:"dept_id"},{default:d(()=>[t(L,{class:"flex-1",modelValue:a(l).dept_id,"onUpdate:modelValue":e[3]||(e[3]=o=>a(l).dept_id=o),data:a(b).dept,clearable:"",multiple:"","node-key":"id",props:{value:"id",label:"name",disabled(o){return o.status!==1}},"check-strictly":"","default-expand-all":!0,placeholder:"请选择上级部门"},null,8,["modelValue","data","props"])]),_:1}),t(n,{label:"岗位",prop:"jobs_id"},{default:d(()=>[t(E,{class:"flex-1",modelValue:a(l).jobs_id,"onUpdate:modelValue":e[4]||(e[4]=o=>a(l).jobs_id=o),clearable:"",multiple:"",placeholder:"请选择岗位"},{default:d(()=>[(u(!0),k(A,null,C(a(b).jobs,(o,v)=>(u(),p(y,{key:v,label:o.name,value:o.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),a(l).root!=1?(u(),p(n,{key:0,label:"角色",prop:"role_id"},{default:d(()=>[t(E,{modelValue:a(l).role_id,"onUpdate:modelValue":e[5]||(e[5]=o=>a(l).role_id=o),disabled:a(l).root==1,class:"flex-1",multiple:"",placeholder:"请选择角色",clearable:""},{default:d(()=>[(u(!0),k(A,null,C(a(b).role,(o,v)=>(u(),p(y,{key:v,label:o.name,value:o.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue","disabled"])]),_:1})):R("",!0),t(n,{label:"密码",prop:"password"},{default:d(()=>[t(r,{modelValue:a(l).password,"onUpdate:modelValue":e[6]||(e[6]=o=>a(l).password=o),"show-password":"",clearable:"",placeholder:"请输入密码"},null,8,["modelValue"])]),_:1}),t(n,{label:"确认密码",prop:"password_confirm"},{default:d(()=>[t(r,{modelValue:a(l).password_confirm,"onUpdate:modelValue":e[7]||(e[7]=o=>a(l).password_confirm=o),"show-password":"",clearable:"",placeholder:"请输入确认密码"},null,8,["modelValue"])]),_:1}),a(l).root!=1?(u(),p(n,{key:1,label:"管理员状态",prop:"disable"},{default:d(()=>[t(x,{modelValue:a(l).disable,"onUpdate:modelValue":e[8]||(e[8]=o=>a(l).disable=o),"active-value":0,"inactive-value":1},null,8,["modelValue"])]),_:1})):R("",!0),t(n,{label:"多处登录",prop:"multipoint_login"},{default:d(()=>[m("div",null,[t(x,{modelValue:a(l).multipoint_login,"onUpdate:modelValue":e[9]||(e[9]=o=>a(l).multipoint_login=o),"active-value":1,"inactive-value":0},null,8,["modelValue"]),e[12]||(e[12]=m("div",{class:"form-tips"},"允许多人同时在线登录",-1))])]),_:1})]),_:1},8,["model","rules"])]),_:1},8,["title"])}}});export{ce as _};
>>>>>>>> master:server/public/platform/assets/edit.vue_vue_type_script_setup_true_lang-ZBoTWTH-.js
