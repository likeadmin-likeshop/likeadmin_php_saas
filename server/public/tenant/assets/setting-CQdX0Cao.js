import{_ as y}from"./index-Ctcuw593.js";import{I as k,C as I,B as x,D as B,h as C}from"./element-plus-BBKw480Q.js";import{_ as S}from"./picker-1_cw_4l0.js";import{a as M,f as l,x as N}from"./index-B7u_HJai.js";import{d as f,r as q,Z as _,o as D,c as F,V as e,M as a,u as s,a as d,S as R}from"./@vue-pHjCrgw6.js";import"./lodash-es-R-kYiKr_.js";import"./async-validator-DKvM95Vc.js";import"./@element-plus-DMfktWgm.js";import"./dayjs-CMfar2R3.js";import"./balanced-match-mNcR6oh4.js";import"./@ctrl-r5W6hzzQ.js";import"./normalize-wheel-es-B6fDCfyv.js";import"./@popperjs-D9SI2xQl.js";import"./index-GqecLj8k.js";import"./index-B0Z4xG2V.js";import"./index.vue_vue_type_script_setup_true_lang-C8s7BCrl.js";import"./index-DBJwNDpN.js";import"./index-7KPOVUZs.js";import"./index.vue_vue_type_script_setup_true_lang-Bn4FPOLS.js";import"./@vueuse-djZFs-WH.js";import"./usePaging-DPOcKk5Q.js";import"./vue3-video-play-DOrZ4nvR.js";import"./vuedraggable-sl9LAZCB.js";import"./vue-PIt_O_4w.js";import"./sortablejs-DdgKbxid.js";import"./nprogress-Cgf5DU8x.js";import"./vue-router-DAYuzRuG.js";import"./pinia-CJRVDLHa.js";import"./axios-C-n2IhIP.js";import"./lodash-BtPWuHkK.js";import"./css-color-function-rJvg8h-6.js";import"./color-B0v57BL7.js";import"./clone-CuIhj1wH.js";import"./color-convert-BGgJB5UM.js";import"./color-name-BQ5IbGbl.js";import"./color-string-BhgG7-8u.js";import"./ms-CzQ2E3wO.js";import"./vue-clipboard3-8CNoFg4V.js";import"./clipboard-Dch_ozqB.js";import"./echarts-BR_QmBtV.js";import"./tslib-BDyQ-Jie.js";import"./zrender-B-CeXLwU.js";import"./highlight.js-D5uP1KGk.js";import"./@highlightjs-D4DIzBxc.js";const T={class:"user-setting"},Z={class:"w-80"},j={class:"w-80"},z={class:"w-80"},A={class:"w-80"},G={class:"w-80"},H=f({name:"userSetting"}),Ro=f({...H,setup(J){const i=q(),u=M(),o=_({avatar:"",account:"",name:"",password_old:"",password:"",password_confirm:""}),c=_({avatar:[{required:!0,message:"头像不能为空",trigger:["change"]}],name:[{required:!0,message:"请输入名称",trigger:["blur"]}]}),w=async()=>{const m=u.userInfo;for(const r in o)o[r]=m[r]},g=async()=>{if(o.password_old||o.password||o.password_confirm){if(!o.password_old)return l.msgError("请输入当前密码");if(!o.password)return l.msgError("请输入新的密码");if(!o.password_confirm)return l.msgError("请输入确定密码");if(o.password_confirm!=o.password)return l.msgError("两次输入的密码不一样")}if(o.password_old&&o.password&&o.password_confirm){if(o.password_old.length<6||o.password_old.length>32)return l.msgError("密码长度在6到32之间");if(o.password.length<6||o.password.length>32)return l.msgError("密码长度在6到32之间");if(o.password_confirm.length<6||o.password_confirm.length>32)return l.msgError("密码长度在6到32之间")}await N(o),u.getUserInfo()},V=async()=>{var m;await((m=i.value)==null?void 0:m.validate()),g()};return w(),(m,r)=>{const v=S,p=I,n=x,b=B,E=k,h=C,U=y;return D(),F("div",T,[e(E,{class:"!border-none",shadow:"never"},{default:a(()=>[e(b,{ref_key:"formRef",ref:i,class:"ls-form",model:s(o),rules:s(c),"label-width":"100px"},{default:a(()=>[e(p,{label:"头像：",prop:"avatar"},{default:a(()=>[e(v,{modelValue:s(o).avatar,"onUpdate:modelValue":r[0]||(r[0]=t=>s(o).avatar=t),limit:1},null,8,["modelValue"])]),_:1}),e(p,{label:"账号：",prop:"account"},{default:a(()=>[d("div",Z,[e(n,{modelValue:s(o).account,"onUpdate:modelValue":r[1]||(r[1]=t=>s(o).account=t),disabled:""},null,8,["modelValue"])])]),_:1}),e(p,{label:"名称：",prop:"name"},{default:a(()=>[d("div",j,[e(n,{modelValue:s(o).name,"onUpdate:modelValue":r[2]||(r[2]=t=>s(o).name=t),placeholder:"请输入名称"},null,8,["modelValue"])])]),_:1}),e(p,{label:"当前密码：",prop:"password_old"},{default:a(()=>[d("div",z,[e(n,{modelValue:s(o).password_old,"onUpdate:modelValue":r[3]||(r[3]=t=>s(o).password_old=t),modelModifiers:{trim:!0},placeholder:"修改密码时必填, 不修改密码时留空",type:"password","show-password":""},null,8,["modelValue"])])]),_:1}),e(p,{label:"新的密码：",prop:"password"},{default:a(()=>[d("div",A,[e(n,{modelValue:s(o).password,"onUpdate:modelValue":r[4]||(r[4]=t=>s(o).password=t),modelModifiers:{trim:!0},placeholder:"修改密码时必填, 不修改密码时留空",type:"password","show-password":""},null,8,["modelValue"])])]),_:1}),e(p,{label:"确定密码：",prop:"password_confirm"},{default:a(()=>[d("div",G,[e(n,{modelValue:s(o).password_confirm,"onUpdate:modelValue":r[5]||(r[5]=t=>s(o).password_confirm=t),modelModifiers:{trim:!0},placeholder:"修改密码时必填, 不修改密码时留空",type:"password","show-password":""},null,8,["modelValue"])])]),_:1})]),_:1},8,["model","rules"])]),_:1}),e(U,null,{default:a(()=>[e(h,{type:"primary",onClick:V},{default:a(()=>r[6]||(r[6]=[R("保存")])),_:1})]),_:1})])}}});export{Ro as default};