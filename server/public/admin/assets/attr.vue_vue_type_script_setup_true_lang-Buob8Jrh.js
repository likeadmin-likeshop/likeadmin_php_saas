import{I as R,C as j,B as A,f as L,h as O,D as q}from"./element-plus-B9ALq7eR.js";import{_ as G}from"./index-By_UuNkX.js";import{_ as H}from"./picker-DuyBXa44.js";import{_ as J}from"./picker-BYe6yXm1.js";import{f as x,b as K}from"./index-DXNL06l4.js";import{_ as Q}from"./index.vue_vue_type_script_setup_true_lang-cdzezkNN.js";import{D as W}from"./vuedraggable-OYPBN08G.js";import{d as X,b as g,o as v,c as h,V as e,M as t,a as s,S as w,u as m,P as Y,T as y,R as Z,U as ee}from"./@vue-TMcuEboY.js";const le={class:"mb-[18px] max-w-[400px]"},oe={class:"bg-fill-light w-full p-4 mt-4"},te={class:"upload-btn w-[60px] h-[60px]"},se={class:"upload-btn w-[60px] h-[60px]"},ae={class:"flex-1 flex items-center"},ne={class:"drag-move cursor-move ml-auto"},de={key:0,class:"mt-4"},c=5,p=2,xe=X({__name:"attr",props:{modelValue:{type:Object,default:()=>({list:[],style:{}})}},emits:["update:modelValue"],setup(k,{emit:U}){const C=k,E=U,n=g({get(){return C.modelValue},set(a){E("update:modelValue",a)}}),$=g(()=>{var a;return((a=n.value.list)==null?void 0:a.filter(l=>l.is_show=="1"))||[]}),z=()=>{var a;((a=n.value.list)==null?void 0:a.length)<c?n.value.list.push({name:"",selected:"",unselected:"",is_show:1,link:{}}):x.msgError(`最多添加${c}个`)},B=a=>{var l;if(((l=n.value.list)==null?void 0:l.length)<=p)return x.msgError(`最少保留${p}个`);n.value.list.splice(a,1)},D=a=>a.relatedContext.index!=0,N=a=>{if($.value.length<p)return a.is_show=1,x.msgError(`最少显示${p}个`)};return(a,l)=>{const _=R,b=Q,i=j,f=K,V=J,S=A,F=H,I=L,P=G,T=O,M=q;return v(),h(ee,null,[e(_,{shadow:"never",class:"!border-none flex"},{default:t(()=>l[3]||(l[3]=[s("div",{class:"title flex items-center before:w-[3px] before:h-[14px] before:block before:bg-primary before:mr-2 text-xl font-medium"},[w(" 底部导航设置 "),s("span",{class:"form-tips ml-[10px] !mt-0"}," 至少添加2个导航，最多添加5个导航 ")],-1)])),_:1}),e(M,{"label-width":"70px"},{default:t(()=>[e(_,{shadow:"never",class:"!border-none flex mt-2"},{default:t(()=>[l[4]||(l[4]=s("div",{class:"flex items-end mb-4"},[s("div",{class:"text-base text-[#101010] font-medium"},"展示样式")],-1)),e(i,{label:"默认颜色"},{default:t(()=>[e(b,{class:"max-w-[400px]",modelValue:m(n).style.default_color,"onUpdate:modelValue":l[0]||(l[0]=r=>m(n).style.default_color=r),"default-color":"#999999"},null,8,["modelValue"])]),_:1}),e(i,{label:"选中颜色",style:{"margin-bottom":"0"}},{default:t(()=>[e(b,{class:"max-w-[400px]",modelValue:m(n).style.selected_color,"onUpdate:modelValue":l[1]||(l[1]=r=>m(n).style.selected_color=r),"default-color":"#4173ff"},null,8,["modelValue"])]),_:1})]),_:1}),e(_,{shadow:"never",class:"!border-none flex mt-2"},{default:t(()=>{var r;return[l[7]||(l[7]=s("div",{class:"flex items-end mb-4"},[s("div",{class:"text-base text-[#101010] font-medium"},"菜单设置"),s("div",{class:"text-xs text-tx-secondary ml-2"},"建议图片尺寸：100px*100px")],-1)),s("div",le,[e(m(W),{class:"draggable",modelValue:m(n).list,"onUpdate:modelValue":l[2]||(l[2]=o=>m(n).list=o),animation:"300",draggable:".draggable",handle:".drag-move",move:D,"item-key":"index"},{item:t(({element:o,index:u})=>[e(P,{onClose:d=>B(u),class:Y(["max-w-[400px]",{draggable:u!=0}]),"show-close":u!==0},{default:t(()=>[s("div",oe,[e(i,{label:"导航图标"},{default:t(()=>[e(V,{modelValue:o.unselected,"onUpdate:modelValue":d=>o.unselected=d,"upload-class":"bg-body","exclude-domain":"",size:"60px"},{upload:t(()=>[s("div",te,[e(f,{name:"el-icon-Plus",size:16}),l[5]||(l[5]=s("span",{class:"text-xs leading-5"}," 未选中 ",-1))])]),_:2},1032,["modelValue","onUpdate:modelValue"]),e(V,{modelValue:o.selected,"onUpdate:modelValue":d=>o.selected=d,"exclude-domain":"","upload-class":"bg-body",size:"60px"},{upload:t(()=>[s("div",se,[e(f,{name:"el-icon-Plus",size:16}),l[6]||(l[6]=s("span",{class:"text-xs leading-5"}," 选中 ",-1))])]),_:2},1032,["modelValue","onUpdate:modelValue"])]),_:2},1024),e(i,{label:"导航名称"},{default:t(()=>[e(S,{modelValue:o.name,"onUpdate:modelValue":d=>o.name=d,placeholder:"请输入名称"},null,8,["modelValue","onUpdate:modelValue"])]),_:2},1024),e(i,{label:"链接地址"},{default:t(()=>[e(F,{"is-tab":!0,disabled:u===0,modelValue:o.link,"onUpdate:modelValue":d=>o.link=d},null,8,["disabled","modelValue","onUpdate:modelValue"])]),_:2},1024),e(i,{label:"是否显示"},{default:t(()=>[s("div",ae,[e(I,{disabled:u==0,modelValue:o.is_show,"onUpdate:modelValue":d=>o.is_show=d,"active-value":1,"inactive-value":0,onChange:d=>N(o)},null,8,["disabled","modelValue","onUpdate:modelValue","onChange"]),s("div",ne,[e(f,{name:"el-icon-Rank",size:"18"})])])]),_:2},1024)])]),_:2},1032,["onClose","show-close","class"])]),_:1},8,["modelValue"])]),((r=m(n).list)==null?void 0:r.length)<c?(v(),h("div",de,[e(T,{class:"w-full",type:"primary",onClick:z},{default:t(()=>{var o;return[w(" 添加导航 "+y((o=m(n).list)==null?void 0:o.length)+" / "+y(c),1)]}),_:1})])):Z("",!0)]}),_:1})]),_:1})],64)}}});export{xe as _};