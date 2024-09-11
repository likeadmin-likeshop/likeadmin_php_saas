import{S as J,O as M,P as Z,C as Q,B as W,h as X,D as Y,G as ee,H as te,I as ae,J as oe,K as le}from"./element-plus-JyXarlxi.js";import{_ as ne}from"./index.vue_vue_type_script_setup_true_lang-BlFVwec6.js";import{f as se,b as ie}from"./index-B6I_kAOm.js";import{d as L,r as S,s as de,Z as T,an as re,o as s,c as V,V as t,M as a,u as o,U as me,aa as pe,L as r,ab as ue,S as m,a as D,O as v,i as ce,R as _e,n as F}from"./@vue-pHjCrgw6.js";import{c as fe,e as ye,f as ve}from"./dict-BCjD8Tz6.js";import{u as be}from"./usePaging-DPOcKk5Q.js";import{_ as ge}from"./edit.vue_vue_type_script_setup_true_lang-XAEwfig7.js";import{u as ke}from"./vue-router-CoNqKBK4.js";import"./lodash-es-R-kYiKr_.js";import"./async-validator-DKvM95Vc.js";import"./@element-plus-NId5miUe.js";import"./dayjs-CMfar2R3.js";import"./balanced-match-mNcR6oh4.js";import"./@ctrl-r5W6hzzQ.js";import"./normalize-wheel-es-B6fDCfyv.js";import"./@popperjs-D9SI2xQl.js";import"./nprogress-Cgf5DU8x.js";import"./pinia-CJRVDLHa.js";import"./axios-C-n2IhIP.js";import"./lodash-BtPWuHkK.js";import"./@vueuse-YJSHNXWG.js";import"./css-color-function-rJvg8h-6.js";import"./color-B0v57BL7.js";import"./clone-CuIhj1wH.js";import"./color-convert-BGgJB5UM.js";import"./color-name-BQ5IbGbl.js";import"./color-string-BhgG7-8u.js";import"./ms-CzQ2E3wO.js";import"./vue-clipboard3-8CNoFg4V.js";import"./clipboard-Dch_ozqB.js";import"./echarts-BR_QmBtV.js";import"./tslib-BDyQ-Jie.js";import"./zrender-B-CeXLwU.js";import"./highlight.js-D5uP1KGk.js";import"./@highlightjs-D4DIzBxc.js";import"./index-B_IA5VaF.js";const Ce={class:"dict-type"},we={class:"mt-4"},Ve={class:"flex justify-end mt-4"},De=L({name:"dictData"}),dt=L({...De,setup(Ee){const{query:N}=ke(),b=S(!1),_=de(),i=T({type:"",type_id:Number(N.id),name:"",status:""}),C=T({dict_type:[]}),{pager:f,getLists:y,resetPage:E,resetParams:U}=be({fetchFun:ve,params:i}),w=S([]),I=n=>{w.value=n.map(({id:e})=>e)},K=async()=>{var e,p;b.value=!0,await F();const n=C.dict_type.find(u=>u.id==i.type_id);(e=_.value)==null||e.setFormData({type_value:n==null?void 0:n.type,type_id:n.id}),(p=_.value)==null||p.open("add")},h=async n=>{var e,p;b.value=!0,await F(),(e=_.value)==null||e.open("edit"),(p=_.value)==null||p.setFormData(n)},x=async n=>{await se.confirm("确定要删除？"),await fe({id:n}),y()},O=async()=>{const n=await ye({page_type:0});C.dict_type=n.lists};return y(),O(),(n,e)=>{const p=J,u=M,$=Z,g=Q,q=W,c=X,H=Y,B=ee,P=ie,d=te,R=ae,j=oe,z=ne,k=re("perms"),A=le;return s(),V("div",Ce,[t(B,{class:"!border-none",shadow:"never"},{default:a(()=>[t(p,{class:"mb-4",content:"数据管理",onBack:e[0]||(e[0]=l=>n.$router.back())}),t(H,{ref:"formRef",class:"mb-[-16px]",model:o(i),inline:""},{default:a(()=>[t(g,{label:"字典名称"},{default:a(()=>[t($,{class:"w-[280px]",modelValue:o(i).type_id,"onUpdate:modelValue":e[1]||(e[1]=l=>o(i).type_id=l),onChange:o(y)},{default:a(()=>[(s(!0),V(me,null,pe(o(C).dict_type,l=>(s(),r(u,{label:l.name,value:l.id,key:l.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue","onChange"])]),_:1}),t(g,{label:"数据名称"},{default:a(()=>[t(q,{class:"w-[280px]",modelValue:o(i).name,"onUpdate:modelValue":e[2]||(e[2]=l=>o(i).name=l),clearable:"",onKeyup:ue(o(E),["enter"])},null,8,["modelValue","onKeyup"])]),_:1}),t(g,{label:"数据状态"},{default:a(()=>[t($,{class:"w-[280px]",modelValue:o(i).status,"onUpdate:modelValue":e[3]||(e[3]=l=>o(i).status=l)},{default:a(()=>[t(u,{label:"全部",value:""}),t(u,{label:"正常",value:1}),t(u,{label:"停用",value:0})]),_:1},8,["modelValue"])]),_:1}),t(g,null,{default:a(()=>[t(c,{type:"primary",onClick:o(E)},{default:a(()=>e[7]||(e[7]=[m("查询")])),_:1},8,["onClick"]),t(c,{onClick:o(U)},{default:a(()=>e[8]||(e[8]=[m("重置")])),_:1},8,["onClick"])]),_:1})]),_:1},8,["model"])]),_:1}),t(B,{class:"!border-none mt-4",shadow:"never"},{default:a(()=>[D("div",null,[v((s(),r(c,{type:"primary",onClick:K},{icon:a(()=>[t(P,{name:"el-icon-Plus"})]),default:a(()=>[e[9]||(e[9]=m(" 添加数据 "))]),_:1})),[[k,["setting.dict.dict_data/add"]]]),v((s(),r(c,{disabled:!o(w).length,type:"danger",onClick:e[4]||(e[4]=l=>x(o(w)))},{icon:a(()=>[t(P,{name:"el-icon-Delete"})]),default:a(()=>[e[10]||(e[10]=m(" 删除 "))]),_:1},8,["disabled"])),[[k,["setting.dict.dict_data/delete"]]])]),v((s(),V("div",we,[D("div",null,[t(j,{data:o(f).lists,size:"large",onSelectionChange:I},{default:a(()=>[t(d,{type:"selection",width:"55"}),t(d,{label:"ID",prop:"id"}),t(d,{label:"数据名称",prop:"name","min-width":"120"}),t(d,{label:"数据值",prop:"value","min-width":"120"}),t(d,{label:"状态"},{default:a(({row:l})=>[l.status==1?(s(),r(R,{key:0},{default:a(()=>e[11]||(e[11]=[m("正常")])),_:1})):(s(),r(R,{key:1,type:"danger"},{default:a(()=>e[12]||(e[12]=[m("停用")])),_:1}))]),_:1}),t(d,{label:"备注",prop:"remark","min-width":"120","show-tooltip-when-overflow":""}),t(d,{label:"排序",prop:"sort"}),t(d,{label:"操作",width:"120",fixed:"right"},{default:a(({row:l})=>[v((s(),r(c,{link:"",type:"primary",onClick:G=>h(l)},{default:a(()=>e[13]||(e[13]=[m(" 编辑 ")])),_:2},1032,["onClick"])),[[k,["setting.dict.dict_data/edit"]]]),v((s(),r(c,{link:"",type:"danger",onClick:G=>x(l.id)},{default:a(()=>e[14]||(e[14]=[m(" 删除 ")])),_:2},1032,["onClick"])),[[k,["setting.dict.dict_data/delete"]]])]),_:1})]),_:1},8,["data"])]),D("div",Ve,[t(z,{modelValue:o(f),"onUpdate:modelValue":e[5]||(e[5]=l=>ce(f)?f.value=l:null),onChange:o(y)},null,8,["modelValue","onChange"])])])),[[A,o(f).loading]])]),_:1}),o(b)?(s(),r(ge,{key:0,ref_key:"editRef",ref:_,onSuccess:o(y),onClose:e[6]||(e[6]=l=>b.value=!1)},null,8,["onSuccess"])):_e("",!0)])}}});export{dt as default};