import{Q as G,G as J,S as W,T as X,D as M,C as Y,i as Z,F as ee,H as te,I as ae,J as oe,K as le}from"./element-plus.52fc6c05.js";import{_ as ne}from"./index.vue_vue_type_script_setup_true_lang.8c9d313d.js";import{f as se,b as ie}from"./index.6f1476a0.js";import{u as ue}from"./vue-router.680b42ce.js";import{d as S,r as $,s as de,a1 as P,an as re,o as s,c as w,X as e,P as a,u as o,W as me,a8 as pe,O as d,a9 as ce,U as r,a as D,Q as v,i as _e,T as fe,n as R}from"./@vue.54440ad7.js";import{c as ye,e as ve,f as ge}from"./dict.8631bd2c.js";import{u as be}from"./usePaging.86c68137.js";import{_ as Ce}from"./edit.vue_vue_type_script_setup_true_lang.55a08630.js";import"./@element-plus.e62cc43c.js";import"./lodash-es.2b4cc642.js";import"./dayjs.200e405c.js";import"./axios.185aa428.js";import"./async-validator.fb49d0f5.js";import"./@ctrl.b082b0c1.js";import"./@popperjs.36402333.js";import"./escape-html.e5dfadb9.js";import"./normalize-wheel-es.8aeb3683.js";import"./nprogress.cea375b6.js";import"./pinia.37585b34.js";import"./lodash.2a1164eb.js";import"./@vueuse.13464b8c.js";import"./css-color-function.a7ba2eb5.js";import"./color.70ead11b.js";import"./clone.b2899de9.js";import"./color-convert.755d189f.js";import"./color-name.e7a4e1d3.js";import"./color-string.e356f5de.js";import"./balanced-match.d2a36341.js";import"./ms.564e106c.js";import"./vue-clipboard3.066895f5.js";import"./clipboard.920a9914.js";import"./echarts.0909e9bd.js";import"./tslib.60310f1a.js";import"./zrender.91adfe72.js";import"./highlight.js.0fd4a67c.js";import"./@highlightjs.3654fb0a.js";import"./index.296703e3.js";const Ee={class:"dict-type"},ke={class:"mt-4"},we={class:"flex justify-end mt-4"},De=S({name:"dictData"}),dt=S({...De,setup(Fe){const{query:L}=ue(),g=$(!1),_=de(),i=P({type:"",type_id:Number(L.id),name:"",status:""}),E=P({dict_type:[]}),{pager:f,getLists:y,resetPage:F,resetParams:N}=be({fetchFun:ge,params:i}),k=$([]),U=n=>{k.value=n.map(({id:t})=>t)},A=async()=>{var t,m;g.value=!0,await R();const n=E.dict_type.find(p=>p.id==i.type_id);(t=_.value)==null||t.setFormData({type_value:n==null?void 0:n.type,type_id:n.id}),(m=_.value)==null||m.open("add")},I=async n=>{var t,m;g.value=!0,await R(),(t=_.value)==null||t.open("edit"),(m=_.value)==null||m.setFormData(n)},h=async n=>{await se.confirm("\u786E\u5B9A\u8981\u5220\u9664\uFF1F"),await ye({id:n}),y()},K=async()=>{const n=await ve({page_type:0});E.dict_type=n.lists};return y(),K(),(n,t)=>{const m=G,p=W,V=X,b=M,q=Y,c=Z,H=ee,B=te,x=ie,u=ae,T=J,O=oe,Q=ne,C=re("perms"),j=le;return s(),w("div",Ee,[e(B,{class:"!border-none",shadow:"never"},{default:a(()=>[e(m,{class:"mb-4",content:"\u6570\u636E\u7BA1\u7406",onBack:t[0]||(t[0]=l=>n.$router.back())}),e(H,{ref:"formRef",class:"mb-[-16px]",model:o(i),inline:""},{default:a(()=>[e(b,{label:"\u5B57\u5178\u540D\u79F0"},{default:a(()=>[e(V,{class:"w-[280px]",modelValue:o(i).type_id,"onUpdate:modelValue":t[1]||(t[1]=l=>o(i).type_id=l),onChange:o(y)},{default:a(()=>[(s(!0),w(me,null,pe(o(E).dict_type,l=>(s(),d(p,{label:l.name,value:l.id,key:l.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue","onChange"])]),_:1}),e(b,{label:"\u6570\u636E\u540D\u79F0"},{default:a(()=>[e(q,{class:"w-[280px]",modelValue:o(i).name,"onUpdate:modelValue":t[2]||(t[2]=l=>o(i).name=l),clearable:"",onKeyup:ce(o(F),["enter"])},null,8,["modelValue","onKeyup"])]),_:1}),e(b,{label:"\u6570\u636E\u72B6\u6001"},{default:a(()=>[e(V,{class:"w-[280px]",modelValue:o(i).status,"onUpdate:modelValue":t[3]||(t[3]=l=>o(i).status=l)},{default:a(()=>[e(p,{label:"\u5168\u90E8",value:""}),e(p,{label:"\u6B63\u5E38",value:1}),e(p,{label:"\u505C\u7528",value:0})]),_:1},8,["modelValue"])]),_:1}),e(b,null,{default:a(()=>[e(c,{type:"primary",onClick:o(F)},{default:a(()=>[r("\u67E5\u8BE2")]),_:1},8,["onClick"]),e(c,{onClick:o(N)},{default:a(()=>[r("\u91CD\u7F6E")]),_:1},8,["onClick"])]),_:1})]),_:1},8,["model"])]),_:1}),e(B,{class:"!border-none mt-4",shadow:"never"},{default:a(()=>[D("div",null,[v((s(),d(c,{type:"primary",onClick:A},{icon:a(()=>[e(x,{name:"el-icon-Plus"})]),default:a(()=>[r(" \u6DFB\u52A0\u6570\u636E ")]),_:1})),[[C,["setting.dict.dict_data/add"]]]),v((s(),d(c,{disabled:!o(k).length,type:"danger",onClick:t[4]||(t[4]=l=>h(o(k)))},{icon:a(()=>[e(x,{name:"el-icon-Delete"})]),default:a(()=>[r(" \u5220\u9664 ")]),_:1},8,["disabled"])),[[C,["setting.dict.dict_data/delete"]]])]),v((s(),w("div",ke,[D("div",null,[e(O,{data:o(f).lists,size:"large",onSelectionChange:U},{default:a(()=>[e(u,{type:"selection",width:"55"}),e(u,{label:"ID",prop:"id"}),e(u,{label:"\u6570\u636E\u540D\u79F0",prop:"name","min-width":"120"}),e(u,{label:"\u6570\u636E\u503C",prop:"value","min-width":"120"}),e(u,{label:"\u72B6\u6001"},{default:a(({row:l})=>[l.status==1?(s(),d(T,{key:0},{default:a(()=>[r("\u6B63\u5E38")]),_:1})):(s(),d(T,{key:1,type:"danger"},{default:a(()=>[r("\u505C\u7528")]),_:1}))]),_:1}),e(u,{label:"\u5907\u6CE8",prop:"remark","min-width":"120","show-tooltip-when-overflow":""}),e(u,{label:"\u6392\u5E8F",prop:"sort"}),e(u,{label:"\u64CD\u4F5C",width:"120",fixed:"right"},{default:a(({row:l})=>[v((s(),d(c,{link:"",type:"primary",onClick:z=>I(l)},{default:a(()=>[r(" \u7F16\u8F91 ")]),_:2},1032,["onClick"])),[[C,["setting.dict.dict_data/edit"]]]),v((s(),d(c,{link:"",type:"danger",onClick:z=>h(l.id)},{default:a(()=>[r(" \u5220\u9664 ")]),_:2},1032,["onClick"])),[[C,["setting.dict.dict_data/delete"]]])]),_:1})]),_:1},8,["data"])]),D("div",we,[e(Q,{modelValue:o(f),"onUpdate:modelValue":t[5]||(t[5]=l=>_e(f)?f.value=l:null),onChange:o(y)},null,8,["modelValue","onChange"])])])),[[j,o(f).loading]])]),_:1}),o(g)?(s(),d(Ce,{key:0,ref_key:"editRef",ref:_,onSuccess:o(y),onClose:t[6]||(t[6]=l=>g.value=!1)},null,8,["onSuccess"])):fe("",!0)])}}});export{dt as default};
