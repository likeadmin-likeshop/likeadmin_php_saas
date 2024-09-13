import{B as A,C as Z,O as j,P as G,h as H,D as J,I as Q,K as W,_ as X,L as Y,M as ee}from"./element-plus-B9ALq7eR.js";import{f as te,b as ae}from"./index-Di9-CjgU.js";import{d as N,s as g,r as x,Z as oe,f as le,n as V,an as ne,o as d,c as se,V as t,M as a,u as s,ab as ie,S as i,a as re,O as v,L as f,T as pe,R as F}from"./@vue-TMcuEboY.js";import{e as de,f as me}from"./department-B3zYGY7x.js";import{_ as ue}from"./edit.vue_vue_type_script_setup_true_lang-BhRJtBQW.js";import"./lodash-es-R-kYiKr_.js";import"./async-validator-DKvM95Vc.js";import"./@element-plus-BZaexRrS.js";import"./dayjs-CMfar2R3.js";import"./balanced-match-mNcR6oh4.js";import"./@ctrl-r5W6hzzQ.js";import"./normalize-wheel-es-B6fDCfyv.js";import"./@popperjs-D9SI2xQl.js";import"./nprogress-Cgf5DU8x.js";import"./vue-router-D4MxfuQi.js";import"./pinia-ebUeA1L2.js";import"./axios-C-n2IhIP.js";import"./lodash-BtPWuHkK.js";import"./@vueuse-BQYVjZ5N.js";import"./css-color-function-rJvg8h-6.js";import"./color-B0v57BL7.js";import"./clone-CuIhj1wH.js";import"./color-convert-BGgJB5UM.js";import"./color-name-BQ5IbGbl.js";import"./color-string-BhgG7-8u.js";import"./ms-CzQ2E3wO.js";import"./vue-clipboard3-8CNoFg4V.js";import"./clipboard-Dch_ozqB.js";import"./echarts-BR_QmBtV.js";import"./tslib-BDyQ-Jie.js";import"./zrender-B-CeXLwU.js";import"./highlight.js-D5uP1KGk.js";import"./@highlightjs-KJi31KWJ.js";import"./index-XT8BS2bq.js";import"./useDictOptions-BB6kIRaQ.js";const fe={class:"department"},ce=N({name:"department"}),We=N({...ce,setup(_e){const R=g(),c=g(),D=g();let b=!1;const w=x(!1),C=x([]),m=oe({status:"",name:""}),y=x(!1),u=async()=>{w.value=!0,C.value=await de(m),w.value=!1},P=()=>{var o;(o=D.value)==null||o.resetFields(),u()},$=async o=>{var e,n;y.value=!0,await V(),o&&((e=c.value)==null||e.setFormData({pid:o})),(n=c.value)==null||n.open("add")},S=async o=>{var e,n;y.value=!0,await V(),(e=c.value)==null||e.open("edit"),(n=c.value)==null||n.getDetail(o)},I=async o=>{await te.confirm("确定要删除？"),await me({id:o}),u()},B=()=>{b=!b,T(C.value,b)},T=(o,e=!0)=>{var n;for(const r in o)(n=R.value)==null||n.toggleRowExpansion(o[r],e),o[r].children&&T(o[r].children,e)};return le(async()=>{await u(),V(()=>{B()})}),(o,e)=>{const n=A,r=Z,E=j,K=G,p=H,M=J,L=Q,O=ae,_=W,U=X,q=Y,k=ne("perms"),z=ee;return d(),se("div",fe,[t(L,{class:"!border-none",shadow:"never"},{default:a(()=>[t(M,{ref_key:"formRef",ref:D,class:"mb-[-16px]",model:s(m),inline:!0},{default:a(()=>[t(r,{label:"部门名称",prop:"name"},{default:a(()=>[t(n,{class:"w-[280px]",modelValue:s(m).name,"onUpdate:modelValue":e[0]||(e[0]=l=>s(m).name=l),clearable:"",onKeyup:ie(u,["enter"])},null,8,["modelValue"])]),_:1}),t(r,{label:"部门状态",prop:"status"},{default:a(()=>[t(K,{class:"w-[280px]",modelValue:s(m).status,"onUpdate:modelValue":e[1]||(e[1]=l=>s(m).status=l)},{default:a(()=>[t(E,{label:"全部",value:""}),t(E,{label:"正常",value:"1"}),t(E,{label:"停用",value:"0"})]),_:1},8,["modelValue"])]),_:1}),t(r,null,{default:a(()=>[t(p,{type:"primary",onClick:u},{default:a(()=>e[4]||(e[4]=[i("查询")])),_:1}),t(p,{onClick:P},{default:a(()=>e[5]||(e[5]=[i("重置")])),_:1})]),_:1})]),_:1},8,["model"])]),_:1}),t(L,{class:"!border-none mt-4",shadow:"never"},{default:a(()=>[re("div",null,[v((d(),f(p,{type:"primary",onClick:e[2]||(e[2]=l=>$())},{icon:a(()=>[t(O,{name:"el-icon-Plus"})]),default:a(()=>[e[6]||(e[6]=i(" 新增 "))]),_:1})),[[k,["dept.dept/add"]]]),t(p,{onClick:B},{default:a(()=>e[7]||(e[7]=[i(" 展开/折叠 ")])),_:1})]),v((d(),f(q,{ref_key:"tableRef",ref:R,class:"mt-4",size:"large",data:s(C),"row-key":"id","tree-props":{children:"children",hasChildren:"hasChildren"}},{default:a(()=>[t(_,{label:"部门名称",prop:"name","min-width":"150","show-overflow-tooltip":""}),t(_,{label:"部门状态",prop:"status","min-width":"100"},{default:a(({row:l})=>[t(U,{class:"ml-2",type:l.status?"":"danger"},{default:a(()=>[i(pe(l.status_desc),1)]),_:2},1032,["type"])]),_:1}),t(_,{label:"排序",prop:"sort","min-width":"100"}),t(_,{label:"更新时间",prop:"update_time","min-width":"180"}),t(_,{label:"操作",width:"160",fixed:"right"},{default:a(({row:l})=>[v((d(),f(p,{type:"primary",link:"",onClick:h=>$(l.id)},{default:a(()=>e[8]||(e[8]=[i(" 新增 ")])),_:2},1032,["onClick"])),[[k,["dept.dept/add"]]]),v((d(),f(p,{type:"primary",link:"",onClick:h=>S(l)},{default:a(()=>e[9]||(e[9]=[i(" 编辑 ")])),_:2},1032,["onClick"])),[[k,["dept.dept/edit"]]]),l.pid!==0?v((d(),f(p,{key:0,type:"danger",link:"",onClick:h=>I(l.id)},{default:a(()=>e[10]||(e[10]=[i(" 删除 ")])),_:2},1032,["onClick"])),[[k,["dept.dept/delete"]]]):F("",!0)]),_:1})]),_:1},8,["data"])),[[z,s(w)]])]),_:1}),s(y)?(d(),f(ue,{key:0,ref_key:"editRef",ref:c,onSuccess:u,onClose:e[3]||(e[3]=l=>y.value=!1)},null,512)):F("",!0)])}}});export{We as default};
