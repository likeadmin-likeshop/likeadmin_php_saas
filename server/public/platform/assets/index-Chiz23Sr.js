import{g as A,G as F,H as S,I as z,F as G,J as P}from"./element-plus-D_drhFLK.js";import{M as v,f as H,b as I}from"./index-B2WahP0L.js";import{a as J,b as j}from"./menu-CzUSNhRc.js";import{u as q}from"./usePaging-DFi_nJOG.js";import{_ as K}from"./edit.vue_vue_type_script_setup_true_lang-C8iBWwxc.js";import{d as $,s as B,r as Q,an as W,o as n,c as y,V as a,M as o,a as N,O as f,L as p,S as d,u as m,R as h,n as R}from"./@vue-TMcuEboY.js";import"./lodash-es-R-kYiKr_.js";import"./async-validator-DKvM95Vc.js";import"./@element-plus-C2WBhajb.js";import"./dayjs-CMfar2R3.js";import"./balanced-match-mNcR6oh4.js";import"./@ctrl-r5W6hzzQ.js";import"./normalize-wheel-es-B6fDCfyv.js";import"./@popperjs-D9SI2xQl.js";import"./nprogress-Cgf5DU8x.js";import"./vue-router-CZY6S6gL.js";import"./pinia-ebUeA1L2.js";import"./axios-C-n2IhIP.js";import"./lodash-BtPWuHkK.js";import"./@vueuse-DE_336rM.js";import"./css-color-function-rJvg8h-6.js";import"./color-B0v57BL7.js";import"./clone-CuIhj1wH.js";import"./color-convert-BGgJB5UM.js";import"./color-name-BQ5IbGbl.js";import"./color-string-BhgG7-8u.js";import"./ms-CzQ2E3wO.js";import"./vue-clipboard3-8CNoFg4V.js";import"./clipboard-Dch_ozqB.js";import"./echarts-BR_QmBtV.js";import"./tslib-BDyQ-Jie.js";import"./zrender-B-CeXLwU.js";import"./highlight.js-D5uP1KGk.js";import"./@highlightjs-KJi31KWJ.js";import"./index-BYEZYCC2.js";const X={class:"menu-lists"},Y={key:0},Z={key:1},ee={key:2},te={class:"flex"},oe=$({name:"permission-menu"}),Se=$({...oe,setup(ie){const w=B(),u=B();let k=!1;const _=Q(!1),{pager:b,getLists:g}=q({fetchFun:j,params:{page_type:0}}),C=async i=>{var e,s;_.value=!0,await R(),i&&((e=u.value)==null||e.setFormData({pid:i})),(s=u.value)==null||s.open("add")},D=async i=>{var e,s;_.value=!0,await R(),(e=u.value)==null||e.open("edit"),(s=u.value)==null||s.getDetail(i)},L=async i=>{await H.confirm("确定要删除？"),await J({id:i}),g()},V=()=>{k=!k,E(b.lists,k)},E=(i,e=!0)=>{var s;for(const l in i)(s=w.value)==null||s.toggleRowExpansion(i[l],e),i[l].children&&E(i[l].children,e)};return g(),(i,e)=>{const s=I,l=A,r=F,x=S,M=z,O=G,c=W("perms"),U=P;return n(),y("div",X,[a(O,{class:"!border-none",shadow:"never"},{default:o(()=>[N("div",null,[f((n(),p(l,{type:"primary",onClick:e[0]||(e[0]=t=>C())},{icon:o(()=>[a(s,{name:"el-icon-Plus"})]),default:o(()=>[e[2]||(e[2]=d(" 新增 "))]),_:1})),[[c,["auth.menu/add"]]]),a(l,{onClick:V},{default:o(()=>e[3]||(e[3]=[d(" 展开/折叠 ")])),_:1})]),f((n(),p(M,{ref_key:"tableRef",ref:w,class:"mt-4",size:"large",data:m(b).lists,"row-key":"id","tree-props":{children:"children",hasChildren:"hasChildren"}},{default:o(()=>[a(r,{label:"菜单名称",prop:"name","min-width":"150","show-overflow-tooltip":""}),a(r,{label:"类型",prop:"type","min-width":"80"},{default:o(({row:t})=>[t.type==m(v).CATALOGUE?(n(),y("div",Y,"目录")):t.type==m(v).MENU?(n(),y("div",Z,"菜单")):t.type==m(v).BUTTON?(n(),y("div",ee,"按钮")):h("",!0)]),_:1}),a(r,{label:"图标",prop:"icon","min-width":"80"},{default:o(({row:t})=>[N("div",te,[a(s,{name:t.icon,size:20},null,8,["name"])])]),_:1}),a(r,{label:"权限标识",prop:"perms","min-width":"150","show-overflow-tooltip":""}),a(r,{label:"状态",prop:"is_disable","min-width":"100"},{default:o(({row:t})=>[t.is_disable==0?(n(),p(x,{key:0},{default:o(()=>e[4]||(e[4]=[d("正常")])),_:1})):(n(),p(x,{key:1,type:"danger"},{default:o(()=>e[5]||(e[5]=[d("停用")])),_:1}))]),_:1}),a(r,{label:"排序",prop:"sort","min-width":"100"}),a(r,{label:"更新时间",prop:"update_time","min-width":"180"}),a(r,{label:"操作",width:"160",fixed:"right"},{default:o(({row:t})=>[t.type!==m(v).BUTTON?f((n(),p(l,{key:0,type:"primary",link:"",onClick:T=>C(t.id)},{default:o(()=>e[6]||(e[6]=[d(" 新增 ")])),_:2},1032,["onClick"])),[[c,["auth.menu/add"]]]):h("",!0),f((n(),p(l,{type:"primary",link:"",onClick:T=>D(t)},{default:o(()=>e[7]||(e[7]=[d(" 编辑 ")])),_:2},1032,["onClick"])),[[c,["auth.menu/edit"]]]),f((n(),p(l,{type:"danger",link:"",onClick:T=>L(t.id)},{default:o(()=>e[8]||(e[8]=[d(" 删除 ")])),_:2},1032,["onClick"])),[[c,["auth.menu/delete"]]])]),_:1})]),_:1},8,["data"])),[[U,m(b).loading]])]),_:1}),m(_)?(n(),p(K,{key:0,ref_key:"editRef",ref:u,onSuccess:m(g),onClose:e[1]||(e[1]=t=>_.value=!1)},null,8,["onSuccess"])):h("",!0)])}}});export{Se as default};
