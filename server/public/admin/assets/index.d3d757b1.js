import{P as M,_ as W,Q as X,R as G,D as J,C as Y,w as Z,F as ee,I as te,L as ae,M as oe,N as le}from"./element-plus.4078815e.js";import{_ as ne}from"./index.vue_vue_type_script_setup_true_lang.39fbc713.js";import{f as se,b as ie}from"./index.9feff995.js";import{u as ue}from"./vue-router.48496b4b.js";import{d as L,r as P,s as de,a1 as T,an as re,o as s,c as w,X as e,P as a,u as o,W as me,a8 as pe,O as d,a9 as ce,U as r,a as D,Q as v,i as _e,T as fe,n as R}from"./@vue.b52708da.js";import{c as ye,e as ve,f as ge}from"./dict.9df2bad7.js";import{u as be}from"./usePaging.771acc0e.js";import{_ as Ce}from"./edit.vue_vue_type_script_setup_true_lang.3a2adee6.js";import"./@element-plus.35ec7429.js";import"./lodash-es.2b4cc642.js";import"./dayjs.3bccbd93.js";import"./axios.dc00a7f8.js";import"./async-validator.fb49d0f5.js";import"./@ctrl.b082b0c1.js";import"./@popperjs.36402333.js";import"./escape-html.e5dfadb9.js";import"./normalize-wheel-es.8aeb3683.js";import"./@vueuse.e1a32ef4.js";import"./lodash.e6e9a684.js";import"./pinia.3f41eb90.js";import"./css-color-function.a728b5d4.js";import"./color.d7ae65d5.js";import"./clone.65443a5f.js";import"./color-convert.755d189f.js";import"./color-name.e7a4e1d3.js";import"./color-string.e356f5de.js";import"./balanced-match.d2a36341.js";import"./ms.564e106c.js";import"./nprogress.2274a56d.js";import"./vue-clipboard3.d9310b6d.js";import"./clipboard.cf95dd73.js";import"./echarts.004f4e72.js";import"./zrender.b56a9aa5.js";import"./tslib.60310f1a.js";import"./highlight.js.db90315f.js";import"./@highlightjs.0797cc3b.js";import"./index.6a7603c9.js";const Ee={class:"dict-type"},ke={class:"mt-4"},we={class:"flex justify-end mt-4"},De=L({name:"dictData"}),dt=L({...De,setup(Fe){const{query:N}=ue(),g=P(!1),_=de(),i=T({type:"",type_id:Number(N.id),name:"",status:""}),E=T({dict_type:[]}),{pager:f,getLists:y,resetPage:F,resetParams:S}=be({fetchFun:ge,params:i}),k=P([]),U=n=>{k.value=n.map(({id:t})=>t)},A=async()=>{var t,m;g.value=!0,await R();const n=E.dict_type.find(p=>p.id==i.type_id);(t=_.value)==null||t.setFormData({type_value:n==null?void 0:n.type,type_id:n.id}),(m=_.value)==null||m.open("add")},I=async n=>{var t,m;g.value=!0,await R(),(t=_.value)==null||t.open("edit"),(m=_.value)==null||m.setFormData(n)},h=async n=>{await se.confirm("\u786E\u5B9A\u8981\u5220\u9664\uFF1F"),await ye({id:n}),y()},K=async()=>{const n=await ve({page_type:0});E.dict_type=n.lists};return y(),K(),(n,t)=>{const m=M,p=X,V=G,b=J,q=Y,c=Z,O=ee,B=te,x=ie,u=ae,$=W,Q=oe,j=ne,C=re("perms"),z=le;return s(),w("div",Ee,[e(B,{class:"!border-none",shadow:"never"},{default:a(()=>[e(m,{class:"mb-4",content:"\u6570\u636E\u7BA1\u7406",onBack:t[0]||(t[0]=l=>n.$router.back())}),e(O,{ref:"formRef",class:"mb-[-16px]",model:o(i),inline:""},{default:a(()=>[e(b,{label:"\u5B57\u5178\u540D\u79F0"},{default:a(()=>[e(V,{class:"w-[280px]",modelValue:o(i).type_id,"onUpdate:modelValue":t[1]||(t[1]=l=>o(i).type_id=l),onChange:o(y)},{default:a(()=>[(s(!0),w(me,null,pe(o(E).dict_type,l=>(s(),d(p,{label:l.name,value:l.id,key:l.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue","onChange"])]),_:1}),e(b,{label:"\u6570\u636E\u540D\u79F0"},{default:a(()=>[e(q,{class:"w-[280px]",modelValue:o(i).name,"onUpdate:modelValue":t[2]||(t[2]=l=>o(i).name=l),clearable:"",onKeyup:ce(o(F),["enter"])},null,8,["modelValue","onKeyup"])]),_:1}),e(b,{label:"\u6570\u636E\u72B6\u6001"},{default:a(()=>[e(V,{class:"w-[280px]",modelValue:o(i).status,"onUpdate:modelValue":t[3]||(t[3]=l=>o(i).status=l)},{default:a(()=>[e(p,{label:"\u5168\u90E8",value:""}),e(p,{label:"\u6B63\u5E38",value:1}),e(p,{label:"\u505C\u7528",value:0})]),_:1},8,["modelValue"])]),_:1}),e(b,null,{default:a(()=>[e(c,{type:"primary",onClick:o(F)},{default:a(()=>[r("\u67E5\u8BE2")]),_:1},8,["onClick"]),e(c,{onClick:o(S)},{default:a(()=>[r("\u91CD\u7F6E")]),_:1},8,["onClick"])]),_:1})]),_:1},8,["model"])]),_:1}),e(B,{class:"!border-none mt-4",shadow:"never"},{default:a(()=>[D("div",null,[v((s(),d(c,{type:"primary",onClick:A},{icon:a(()=>[e(x,{name:"el-icon-Plus"})]),default:a(()=>[r(" \u6DFB\u52A0\u6570\u636E ")]),_:1})),[[C,["setting.dict.dict_data/add"]]]),v((s(),d(c,{disabled:!o(k).length,type:"danger",onClick:t[4]||(t[4]=l=>h(o(k)))},{icon:a(()=>[e(x,{name:"el-icon-Delete"})]),default:a(()=>[r(" \u5220\u9664 ")]),_:1},8,["disabled"])),[[C,["setting.dict.dict_data/delete"]]])]),v((s(),w("div",ke,[D("div",null,[e(Q,{data:o(f).lists,size:"large",onSelectionChange:U},{default:a(()=>[e(u,{type:"selection",width:"55"}),e(u,{label:"ID",prop:"id"}),e(u,{label:"\u6570\u636E\u540D\u79F0",prop:"name","min-width":"120"}),e(u,{label:"\u6570\u636E\u503C",prop:"value","min-width":"120"}),e(u,{label:"\u72B6\u6001"},{default:a(({row:l})=>[l.status==1?(s(),d($,{key:0},{default:a(()=>[r("\u6B63\u5E38")]),_:1})):(s(),d($,{key:1,type:"danger"},{default:a(()=>[r("\u505C\u7528")]),_:1}))]),_:1}),e(u,{label:"\u5907\u6CE8",prop:"remark","min-width":"120","show-tooltip-when-overflow":""}),e(u,{label:"\u6392\u5E8F",prop:"sort"}),e(u,{label:"\u64CD\u4F5C",width:"120",fixed:"right"},{default:a(({row:l})=>[v((s(),d(c,{link:"",type:"primary",onClick:H=>I(l)},{default:a(()=>[r(" \u7F16\u8F91 ")]),_:2},1032,["onClick"])),[[C,["setting.dict.dict_data/edit"]]]),v((s(),d(c,{link:"",type:"danger",onClick:H=>h(l.id)},{default:a(()=>[r(" \u5220\u9664 ")]),_:2},1032,["onClick"])),[[C,["setting.dict.dict_data/delete"]]])]),_:1})]),_:1},8,["data"])]),D("div",we,[e(j,{modelValue:o(f),"onUpdate:modelValue":t[5]||(t[5]=l=>_e(f)?f.value=l:null),onChange:o(y)},null,8,["modelValue","onChange"])])])),[[z,o(f).loading]])]),_:1}),o(g)?(s(),d(Ce,{key:0,ref_key:"editRef",ref:_,onSuccess:o(y),onClose:t[6]||(t[6]=l=>g.value=!1)},null,8,["onSuccess"])):fe("",!0)])}}});export{dt as default};
