import{P as y}from"./index-XT8BS2bq.js";import{_ as g}from"./oa-menu-form.vue_vue_type_script_setup_true_lang-Cv333YdU.js";import{d as v,s as m,m as R,o as k,L as F,M as d,I,V as P}from"./@vue-TMcuEboY.js";const b=v({__name:"oa-menu-form-edit",props:{modular:{default:"edit"},subItem:{default:{}}},emits:["add","edit"],setup(i,{emit:l}){const s=l,p=i,n=m(),r=m(),e={name:"",type:"view",url:"",appid:"",pagepath:""};R(()=>{if(Object.keys(p.subItem).length!=0)for(const o in e)e[o]=p.subItem[o]});const u=async()=>{await n.value.menuFormRef.validate(),p.modular==="edit"?s("edit",{...e}):s("add",{...e}),r.value.close(),n.value.menuFormRef.resetFields()};return(o,t)=>{const f=y;return k(),F(f,{ref_key:"menuFromPopupRef",ref:r,async:"",clickModalClose:!1,title:`${o.modular==="add"?"新增":"编辑"}子菜单`,onConfirm:u},{trigger:d(()=>[I(o.$slots,"default")]),default:d(()=>[P(g,{ref_key:"menuFormEditRef",ref:n,modular:"secondary",name:e.name,"onUpdate:name":t[0]||(t[0]=a=>e.name=a),visitType:e.type,"onUpdate:visitType":t[1]||(t[1]=a=>e.type=a),url:e.url,"onUpdate:url":t[2]||(t[2]=a=>e.url=a),appId:e.appid,"onUpdate:appId":t[3]||(t[3]=a=>e.appid=a),pagePath:e.pagepath,"onUpdate:pagePath":t[4]||(t[4]=a=>e.pagepath=a)},null,8,["name","visitType","url","appId","pagePath"])]),_:3},8,["title"])}}});export{b as _};
