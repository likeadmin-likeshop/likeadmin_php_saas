import{P as I}from"./index.b74d1c73.js";import{s as T}from"./element-plus.fa08061d.js";import{F as M,_ as B,a as N}from"./index.b34c1ed9.js";import{u as j,d as K,b as Q}from"./index.f0d0dfdc.js";import{_ as X}from"./index.30e99dad.js";import{D as Y}from"./vuedraggable.70f82b2c.js";import{d as q,r as s,ab as G,b as S,w as H,F as z,n as J,ag as U,o as O,c as W,X as n,aa as Z,P as p,a as i,$ as V,R as $,U as x,Q as ee,K as le,a0 as ae,Y as te,bk as oe,bj as ie}from"./@vue.54440ad7.js";import{e as se}from"./@vueuse.13464b8c.js";const ne=q({components:{Popup:I,Draggable:Y,FileItem:M,Material:B,Preview:N},props:{modelValue:{type:[String,Array],default:()=>[]},type:{type:String,default:"image"},size:{type:String,default:"100px"},width:{type:String,default:""},height:{type:String,default:""},fileSize:{type:String,default:"100px"},limit:{type:Number,default:1},disabled:{type:Boolean,default:!1},hiddenUpload:{type:Boolean,default:!1},uploadClass:{type:String,default:""},excludeDomain:{type:Boolean,default:!1}},emits:["change","update:modelValue"],setup(e,{emit:t}){const v=s(),g=s(),w=s(""),y=s(!1),a=s([]),m=s([]),r=s(!0),c=s(-1),{disabled:_,limit:d,modelValue:C}=G(e),{getImageUrl:b}=j(),o=S(()=>{switch(e.type){case"image":return"\u56FE\u7247";case"video":return"\u89C6\u9891";default:return""}}),f=S(()=>e.limit-a.value.length>0),h=S(()=>r.value?d.value==-1?null:d.value-a.value.length:1),E=se(()=>{const l=m.value.map(u=>e.excludeDomain?u.uri:u.url);r.value?a.value=[...a.value,...l]:a.value.splice(c.value,1,l.shift()),k()},1e3,!1),F=l=>{var u;_.value||(l>=0?(r.value=!1,c.value=l):r.value=!0,(u=v.value)==null||u.open())},A=l=>{m.value=l},k=()=>{const l=d.value!=1?a.value:a.value[0]||"";t("update:modelValue",l),t("change",l),P()},R=l=>{a.value.splice(l,1),k()},L=l=>{w.value=l,y.value=!0},P=()=>{J(()=>{var l;e.hiddenUpload&&(a.value=[]),(l=g.value)==null||l.clearSelect()})};return H(C,l=>{a.value=Array.isArray(l)?l:l==""?[]:[l]},{immediate:!0}),z("limit",e.limit),z("hiddenUpload",e.hiddenUpload),{popupRef:v,materialRef:g,fileList:a,tipsText:o,handleConfirm:E,meterialLimit:h,showUpload:f,showPopup:F,selectChange:A,deleteImg:R,previewUrl:w,showPreview:y,handlePreview:L,handleClose:P,getImageUrl:b}}});const D=e=>(oe("data-v-863d1156"),e=e(),ie(),e),re={class:"material-select"},de=["onClick"],ue={class:"operation-btns text-xs text-center"},pe=D(()=>i("span",null,"\u4FEE\u6539",-1)),me=["onClick"],ce=D(()=>i("span",null,"\u6DFB\u52A0",-1)),fe={class:"material-wrap"};function he(e,t,v,g,w,y){const a=U("file-item"),m=X,r=U("draggable"),c=Q,_=B,d=T,C=I,b=U("preview");return O(),W("div",re,[n(C,{ref:"popupRef",width:"1050px","custom-class":"body-padding",title:`\u9009\u62E9${e.tipsText}`,onConfirm:e.handleConfirm,onClose:e.handleClose},Z({default:p(()=>[n(d,null,{default:p(()=>[i("div",fe,[n(_,{ref:"materialRef",type:e.type,"file-size":e.fileSize,limit:e.meterialLimit,onChange:e.selectChange},null,8,["type","file-size","limit","onChange"])])]),_:1})]),_:2},[e.hiddenUpload?void 0:{name:"trigger",fn:p(()=>[i("div",{class:"material-select__trigger clearfix",onClick:t[2]||(t[2]=V(()=>{},["stop"]))},[n(r,{class:"draggable",modelValue:e.fileList,"onUpdate:modelValue":t[0]||(t[0]=o=>e.fileList=o),animation:"300","item-key":"id"},{item:p(({element:o,index:f})=>[i("div",{class:$(["material-preview",{"is-disabled":e.disabled,"is-one":e.limit==1}]),onClick:h=>e.showPopup(f)},[n(m,{onClose:h=>e.deleteImg(f)},{default:p(()=>[n(a,{uri:e.excludeDomain?e.getImageUrl(o):o,"file-size":e.size,width:e.width,height:e.height,type:e.type},null,8,["uri","file-size","width","height","type"])]),_:2},1032,["onClose"]),i("div",ue,[pe,x(" | "),i("span",{onClick:V(h=>e.handlePreview(o),["stop"])},"\u67E5\u770B",8,me)])],10,de)]),_:1},8,["modelValue"]),ee(i("div",{class:$(["material-upload",{"is-disabled":e.disabled,"is-one":e.limit==1,[e.uploadClass]:!0}]),onClick:t[1]||(t[1]=o=>e.showPopup(-1))},[le(e.$slots,"upload",{},()=>[i("div",{class:"upload-btn",style:ae({width:e.width||e.size,height:e.height||e.size})},[n(c,{size:25,name:"el-icon-Plus"}),ce],4)],!0)],2),[[te,e.showUpload]])])]),key:"0"}]),1032,["title","onConfirm","onClose"]),n(b,{modelValue:e.showPreview,"onUpdate:modelValue":t[3]||(t[3]=o=>e.showPreview=o),url:e.previewUrl,type:e.type},null,8,["modelValue","url","type"])])}const Ue=K(ne,[["render",he],["__scopeId","data-v-863d1156"]]);export{Ue as M};