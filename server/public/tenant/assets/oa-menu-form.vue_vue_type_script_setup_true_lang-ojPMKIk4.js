import{B as E,C as P,G as U,H as F,D as R}from"./element-plus-BBKw480Q.js";import{r as B}from"./useMenuOa-CAGj6ic7.js";import{d as C,s as N,r as x,w as G,m as S,o as r,L as V,M as u,V as t,u as l,S as f,R as i,I as A,c as _,U as g}from"./@vue-pHjCrgw6.js";const M=C({__name:"oa-menu-form",props:{modular:{default:"master"},name:{default:""},menuType:{type:Boolean,default:!1},visitType:{default:"view"},url:{default:""},appId:{default:""},pagePath:{default:""}},emits:["update:name","update:menuType","update:visitType","update:url","update:appId","update:pagePath"],setup(I,{expose:b,emit:k}){const m=k,y=I,v=N(),e=x({...y});return G(()=>y,d=>{e.value=d},{immediate:!0}),S(()=>{y.modular==="master"&&m("update:menuType",e.value.menuType),m("update:name",e.value.name),m("update:visitType",e.value.visitType),m("update:url",e.value.url),m("update:appId",e.value.appId),m("update:pagePath",e.value.pagePath)}),b({menuFormRef:v}),(d,a)=>{const n=E,p=P,s=U,T=F,w=R;return r(),V(w,{ref_key:"menuFormRef",ref:v,rules:l(B),model:l(e),"label-width":"100px"},{default:u(()=>[t(p,{label:d.modular==="master"?"主菜单名称":"子菜单名称",prop:"name"},{default:u(()=>[t(n,{modelValue:l(e).name,"onUpdate:modelValue":a[0]||(a[0]=o=>l(e).name=o)},null,8,["modelValue"])]),_:1},8,["label"]),d.modular==="master"?(r(),V(p,{key:0,label:"主菜单类型",prop:"menuType"},{default:u(()=>[t(T,{modelValue:l(e).menuType,"onUpdate:modelValue":a[1]||(a[1]=o=>l(e).menuType=o)},{default:u(()=>[t(s,{value:!1},{default:u(()=>a[6]||(a[6]=[f("不配置子菜单")])),_:1}),t(s,{value:!0},{default:u(()=>a[7]||(a[7]=[f("配置子菜单")])),_:1})]),_:1},8,["modelValue"])]),_:1})):i("",!0),l(e).menuType&&d.modular==="master"?(r(),V(p,{key:1,label:""},{default:u(()=>[A(d.$slots,"default")]),_:3})):i("",!0),l(e).menuType?i("",!0):(r(),_(g,{key:2},[t(p,{label:"跳转链接",prop:"visitType"},{default:u(()=>[t(T,{modelValue:l(e).visitType,"onUpdate:modelValue":a[2]||(a[2]=o=>l(e).visitType=o)},{default:u(()=>[t(s,{value:"view"},{default:u(()=>a[8]||(a[8]=[f("网页")])),_:1}),t(s,{value:"miniprogram"},{default:u(()=>a[9]||(a[9]=[f("小程序")])),_:1})]),_:1},8,["modelValue"])]),_:1}),t(p,{label:"网址",prop:"url"},{default:u(()=>[t(n,{modelValue:l(e).url,"onUpdate:modelValue":a[3]||(a[3]=o=>l(e).url=o)},null,8,["modelValue"])]),_:1}),l(e).visitType=="miniprogram"?(r(),_(g,{key:0},[t(p,{label:"AppId",prop:"appId"},{default:u(()=>[t(n,{modelValue:l(e).appId,"onUpdate:modelValue":a[4]||(a[4]=o=>l(e).appId=o)},null,8,["modelValue"])]),_:1}),t(p,{label:"路径",prop:"pagePath"},{default:u(()=>[t(n,{modelValue:l(e).pagePath,"onUpdate:modelValue":a[5]||(a[5]=o=>l(e).pagePath=o)},null,8,["modelValue"])]),_:1})],64)):i("",!0)],64))]),_:3},8,["rules","model"])}}});export{M as _};
