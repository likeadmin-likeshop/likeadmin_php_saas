import{h as $,r as B}from"./element-plus-B9ALq7eR.js";import{J as R,v as S,h as N}from"./@element-plus-BZaexRrS.js";import{e as z}from"./index-CHlVgF16.js";import{d as D,s as E,b as I,o as r,c as p,a as i,R as y,U as P,aa as q,P as h,u as e,a0 as _,I as L,L as j,Q as A,V as s,M as v}from"./@vue-TMcuEboY.js";import{d as F}from"./index-Z_b4dYWh.js";import"./lodash-es-R-kYiKr_.js";import"./async-validator-DKvM95Vc.js";import"./dayjs-CMfar2R3.js";import"./balanced-match-mNcR6oh4.js";import"./@ctrl-r5W6hzzQ.js";import"./normalize-wheel-es-B6fDCfyv.js";import"./@popperjs-D9SI2xQl.js";import"./attr-DTyuo2Ct.js";import"./index-BUGio1PM.js";import"./picker-DjKBymyY.js";import"./index-BHfrOheJ.js";import"./index.vue_vue_type_script_setup_true_lang-B-ov7tNf.js";import"./article-D4jAsL2q.js";import"./usePaging-DFi_nJOG.js";import"./picker-Dhot1gVn.js";import"./index-BqCMnLAd.js";import"./index-BwFqkurp.js";import"./index.vue_vue_type_script_setup_true_lang-Be0Cw8SV.js";import"./@vueuse-BQYVjZ5N.js";import"./vue3-video-play-xg7gp0Bu.js";import"./vuedraggable-OYPBN08G.js";import"./vue-CHxGqOme.js";import"./sortablejs-DdgKbxid.js";import"./nprogress-Cgf5DU8x.js";import"./vue-router-D4MxfuQi.js";import"./pinia-ebUeA1L2.js";import"./axios-C-n2IhIP.js";import"./lodash-BtPWuHkK.js";import"./css-color-function-rJvg8h-6.js";import"./color-B0v57BL7.js";import"./clone-CuIhj1wH.js";import"./color-convert-BGgJB5UM.js";import"./color-name-BQ5IbGbl.js";import"./color-string-BhgG7-8u.js";import"./ms-CzQ2E3wO.js";import"./vue-clipboard3-8CNoFg4V.js";import"./clipboard-Dch_ozqB.js";import"./echarts-BR_QmBtV.js";import"./tslib-BDyQ-Jie.js";import"./zrender-B-CeXLwU.js";import"./highlight.js-D5uP1KGk.js";import"./@highlightjs-KJi31KWJ.js";import"./content.vue_vue_type_script_setup_true_lang-BateO8iS.js";import"./decoration-img-CeEGa5Ta.js";import"./attr.vue_vue_type_script_setup_true_lang-B-6Mz1EC.js";import"./content-BH8yiWhh.js";import"./attr.vue_vue_type_script_setup_true_lang--V9ApJCX.js";import"./content.vue_vue_type_script_setup_true_lang-BP2mDz1a.js";import"./attr.vue_vue_type_script_setup_true_lang-CS1CfxRH.js";import"./add-nav.vue_vue_type_script_setup_true_lang-C89Xb2qd.js";import"./content-Ppy-U-U1.js";import"./attr.vue_vue_type_script_setup_true_lang-DTXNvVVw.js";import"./content.vue_vue_type_script_setup_true_lang-C2D2da36.js";import"./attr.vue_vue_type_script_setup_true_lang-Bvm0acSV.js";import"./content-671bbs08.js";import"./decoration-DjhI34al.js";import"./attr.vue_vue_type_script_setup_true_lang-CF_5NhDA.js";import"./index.vue_vue_type_script_setup_true_lang-cdzezkNN.js";import"./content-DJerx05c.js";import"./content.vue_vue_type_script_setup_true_lang-Cx_Ospd5.js";import"./attr.vue_vue_type_script_setup_true_lang-DkNGO3zL.js";import"./content-zlkKMKfh.js";import"./attr.vue_vue_type_script_setup_true_lang-Bhaucjb1.js";import"./content.vue_vue_type_script_setup_true_lang-n4fCVzM5.js";import"./attr.vue_vue_type_script_setup_true_lang-BiKyHNx4.js";import"./content-Br9rsDtq.js";const J={class:"pages-preview"},M={class:"relative flex justify-center h-full mt-5 mx-10"},Q=["src"],T={class:"max-w-[1200px] w-full absolute"},U=["onClick"],W=D({__name:"preview-pc",props:{pageData:{type:Array,default:()=>[]},modelValue:{type:Number,default:0}},emits:["update:modelValue"],setup(a,{emit:b}){const u=E(),k=b,c=I(()=>o=>(o==null?void 0:o.enabled)==0),C=o=>{var m;(m=u.value[o])==null||m.open()},V=o=>{o.enabled!==void 0&&(o.enabled=o.enabled?0:1)},x=(o,m)=>{o.disabled||k("update:modelValue",m)};return(o,m)=>{const f=$,d=B;return r(),p("div",J,[i("div",M,[o.$route.query.url?(r(),p("iframe",{key:0,ref:"previewIframeRef",class:"flex-1 h-full",width:"100%",height:"100%",scrolling:"no",src:o.$route.query.url},null,8,Q)):y("",!0),i("div",T,[(r(!0),p(P,null,q(a.pageData,(t,n)=>(r(),p("div",{key:t.id,class:h(["absolute left-0 top-0",{"cursor-pointer":!(t!=null&&t.disabled)}]),onClick:l=>x(t,n)},[i("div",{class:h(["absolute w-full h-full z-[100] border-dashed",{select:n==a.modelValue,"border-[#dcdfe6] border-2":!(t!=null&&t.disabled),hide:e(c)(t.content)}]),style:_(t.styles)},null,6),L(o.$slots,"default",{},()=>{var l;return[(r(),j(A((l=e(z)[t==null?void 0:t.name])==null?void 0:l.content),{content:t.content,styles:t.styles,key:t.id,ref_for:!0,ref_key:"commonComponentRef",ref:u},null,8,["content","styles"]))]},!0),n==a.modelValue?(r(),p("div",{key:0,class:"widget-btns py-[5px]",style:_({top:t.styles.top,left:t.styles.width})},[i("div",null,[s(d,{effect:"dark",content:"编辑组件内容",placement:"right"},{default:v(()=>[s(f,{class:"py-[5px]",type:"primary",icon:e(R),onClick:l=>C(n)},null,8,["icon","onClick"])]),_:2},1024)]),i("div",null,[s(d,{effect:"dark",content:e(c)(t.content)?"显示":"隐藏",placement:"right"},{default:v(()=>[s(f,{class:"py-[5px]",type:"primary",icon:e(c)(t.content)?e(S):e(N),onClick:l=>V(t.content)},null,8,["icon","onClick"])]),_:2},1032,["content"])])],4)):y("",!0)],10,U))),128))])])])}}}),no=F(W,[["__scopeId","data-v-9c63b2ff"]]);export{no as default};