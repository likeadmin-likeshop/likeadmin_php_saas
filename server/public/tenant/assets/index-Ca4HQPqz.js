import{B as I,C as O,O as M,P as q,h as A,D as Z,I as G,K as H,_ as J,L as Q,M as W}from"./element-plus-BBKw480Q.js";import{_ as X}from"./index.vue_vue_type_script_setup_true_lang-C8s7BCrl.js";import{f as Y,b as ee}from"./index-BjfF9UyA.js";import{_ as te}from"./index.vue_vue_type_script_setup_true_lang-DiIwtHOG.js";import{d as D,s as oe,r as ae,Z as le,an as se,o as m,c as ne,V as e,M as a,u as o,ab as V,S as p,a as E,O as y,L as c,T as ie,i as re,R as me,n as x}from"./@vue-pHjCrgw6.js";import{c as $,d as pe}from"./post-BPewgVz1.js";import{u as de}from"./usePaging-DPOcKk5Q.js";import{_ as ue}from"./edit.vue_vue_type_script_setup_true_lang-Cnqo8bmU.js";import"./lodash-es-R-kYiKr_.js";import"./async-validator-DKvM95Vc.js";import"./@element-plus-DMfktWgm.js";import"./dayjs-CMfar2R3.js";import"./balanced-match-mNcR6oh4.js";import"./@ctrl-r5W6hzzQ.js";import"./normalize-wheel-es-B6fDCfyv.js";import"./@popperjs-D9SI2xQl.js";import"./nprogress-Cgf5DU8x.js";import"./vue-router-DAYuzRuG.js";import"./pinia-CJRVDLHa.js";import"./axios-C-n2IhIP.js";import"./lodash-BtPWuHkK.js";import"./@vueuse-djZFs-WH.js";import"./css-color-function-rJvg8h-6.js";import"./color-B0v57BL7.js";import"./clone-CuIhj1wH.js";import"./color-convert-BGgJB5UM.js";import"./color-name-BQ5IbGbl.js";import"./color-string-BhgG7-8u.js";import"./ms-CzQ2E3wO.js";import"./vue-clipboard3-8CNoFg4V.js";import"./clipboard-Dch_ozqB.js";import"./echarts-BR_QmBtV.js";import"./tslib-BDyQ-Jie.js";import"./zrender-B-CeXLwU.js";import"./highlight.js-D5uP1KGk.js";import"./@highlightjs-D4DIzBxc.js";import"./index-CYqo2c2l.js";const ce={class:"post-lists"},_e={class:"flex justify-end mt-4"},fe=D({name:"post"}),et=D({...fe,setup(be){const _=oe(),f=ae(!1),s=le({code:"",name:"",status:""}),{pager:r,getLists:b,resetPage:g,resetParams:h}=de({fetchFun:$,params:s}),j=async()=>{var n;f.value=!0,await x(),(n=_.value)==null||n.open("add")},B=async n=>{var t,d;f.value=!0,await x(),(t=_.value)==null||t.open("edit"),(d=_.value)==null||d.getDetail(n)},K=async n=>{await Y.confirm("确定要删除？"),await pe({id:n}),b()};return b(),(n,t)=>{const d=I,v=O,w=M,P=q,u=A,R=te,T=Z,C=G,L=ee,i=H,S=J,z=Q,N=X,k=se("perms"),U=W;return m(),ne("div",ce,[e(C,{class:"!border-none",shadow:"never"},{default:a(()=>[e(T,{ref:"formRef",class:"mb-[-16px]",model:o(s),inline:!0},{default:a(()=>[e(v,{label:"岗位编码"},{default:a(()=>[e(d,{class:"w-[280px]",modelValue:o(s).code,"onUpdate:modelValue":t[0]||(t[0]=l=>o(s).code=l),clearable:"",onKeyup:V(o(g),["enter"])},null,8,["modelValue","onKeyup"])]),_:1}),e(v,{label:"岗位名称"},{default:a(()=>[e(d,{class:"w-[280px]",modelValue:o(s).name,"onUpdate:modelValue":t[1]||(t[1]=l=>o(s).name=l),clearable:"",onKeyup:V(o(g),["enter"])},null,8,["modelValue","onKeyup"])]),_:1}),e(v,{label:"岗位状态"},{default:a(()=>[e(P,{class:"w-[280px]",modelValue:o(s).status,"onUpdate:modelValue":t[2]||(t[2]=l=>o(s).status=l)},{default:a(()=>[e(w,{label:"全部",value:""}),e(w,{label:"正常",value:1}),e(w,{label:"停用",value:0})]),_:1},8,["modelValue"])]),_:1}),e(v,null,{default:a(()=>[e(u,{type:"primary",onClick:o(g)},{default:a(()=>t[6]||(t[6]=[p("查询")])),_:1},8,["onClick"]),e(u,{onClick:o(h)},{default:a(()=>t[7]||(t[7]=[p("重置")])),_:1},8,["onClick"]),e(R,{class:"ml-2.5","fetch-fun":o($),params:o(s),"page-size":o(r).size},null,8,["fetch-fun","params","page-size"])]),_:1})]),_:1},8,["model"])]),_:1}),e(C,{class:"!border-none mt-4",shadow:"never"},{default:a(()=>[E("div",null,[y((m(),c(u,{type:"primary",onClick:t[3]||(t[3]=l=>j())},{icon:a(()=>[e(L,{name:"el-icon-Plus"})]),default:a(()=>[t[8]||(t[8]=p(" 新增 "))]),_:1})),[[k,["dept.jobs/add"]]])]),y((m(),c(z,{class:"mt-4",size:"large",data:o(r).lists},{default:a(()=>[e(i,{label:"岗位编码",prop:"code","min-width":"100"}),e(i,{label:"岗位名称",prop:"name","min-width":"100"}),e(i,{label:"排序",prop:"sort","min-width":"100"}),e(i,{label:"备注",prop:"remark","min-width":"100","show-overflow-tooltip":""}),e(i,{label:"添加时间",prop:"create_time","min-width":"180"}),e(i,{label:"状态",prop:"status","min-width":"100"},{default:a(({row:l})=>[e(S,{class:"ml-2",type:l.status?"":"danger"},{default:a(()=>[p(ie(l.status_desc),1)]),_:2},1032,["type"])]),_:1}),e(i,{label:"操作",width:"120",fixed:"right"},{default:a(({row:l})=>[y((m(),c(u,{type:"primary",link:"",onClick:F=>B(l)},{default:a(()=>t[9]||(t[9]=[p(" 编辑 ")])),_:2},1032,["onClick"])),[[k,["dept.jobs/edit"]]]),y((m(),c(u,{type:"danger",link:"",onClick:F=>K(l.id)},{default:a(()=>t[10]||(t[10]=[p(" 删除 ")])),_:2},1032,["onClick"])),[[k,["dept.jobs/delete"]]])]),_:1})]),_:1},8,["data"])),[[U,o(r).loading]]),E("div",_e,[e(N,{modelValue:o(r),"onUpdate:modelValue":t[4]||(t[4]=l=>re(r)?r.value=l:null),onChange:o(b)},null,8,["modelValue","onChange"])])]),_:1}),o(f)?(m(),c(ue,{key:0,ref_key:"editRef",ref:_,onSuccess:o(b),onClose:t[5]||(t[5]=l=>f.value=!1)},null,8,["onSuccess"])):me("",!0)])}}});export{et as default};
