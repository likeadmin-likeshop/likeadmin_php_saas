import{C as D,w as z,D as Q,F as W,B as X,L as J,b as Y,a as Z,M as ee,N as ue,G as te,H as le,d as ae,e as ne,f as se}from"./element-plus.4078815e.js";import{d as R,b as oe}from"./index.9feff995.js";import{d as P,r as V,o as c,c as C,a as e,W as $,a8 as G,R as ie,V as I,u as s,X as m,a1 as de,w as S,P as E,a9 as me,Q as pe,O as y,i as g,U as L,b as T,T as b,s as re,$ as ce}from"./@vue.b52708da.js";import{_ as _e}from"./index.vue_vue_type_script_setup_true_lang.39fbc713.js";import{u as Fe}from"./usePaging.771acc0e.js";import{m as Ee}from"./article.acc0d430.js";import{I as fe}from"./@element-plus.35ec7429.js";import{P as xe}from"./index.6a7603c9.js";var B=(a=>(a.SHOP_PAGES="shop",a.APPTOOL="application_tool",a.OTHER_LINK="other_link",a))(B||{}),l=(a=>(a.SHOP_PAGES="shop",a.ARTICLE_LIST="article",a.CUSTOM_LINK="custom",a.MINI_PROGRAM="mini_program",a))(l||{});const he={class:"shop-pages h-[530px]"},ve={class:"link-list flex flex-wrap"},Ae=["onClick"],Ce=P({__name:"shop-pages",props:{modelValue:{type:Object,default:()=>({})}},emits:["update:modelValue"],setup(a,{emit:x}){const r=x,f=V([{path:"/pages/index/index",name:"\u5546\u57CE\u9996\u9875",type:l.SHOP_PAGES,canTab:!0},{path:"/pages/news/news",name:"\u6587\u7AE0\u8D44\u8BAF",type:l.SHOP_PAGES,canTab:!0},{path:"/pages/user/user",name:"\u4E2A\u4EBA\u4E2D\u5FC3",type:l.SHOP_PAGES,canTab:!0},{path:"/pages/collection/collection",name:"\u6211\u7684\u6536\u85CF",type:l.SHOP_PAGES},{path:"/pages/customer_service/customer_service",name:"\u8054\u7CFB\u5BA2\u670D",type:l.SHOP_PAGES},{path:"/pages/user_set/user_set",name:"\u4E2A\u4EBA\u8BBE\u7F6E",type:l.SHOP_PAGES},{path:"/pages/as_us/as_us",name:"\u5173\u4E8E\u6211\u4EEC",type:l.SHOP_PAGES},{path:"/pages/user_data/user_data",name:"\u4E2A\u4EBA\u8D44\u6599",type:l.SHOP_PAGES},{path:"/pages/agreement/agreement",name:"\u9690\u79C1\u653F\u7B56",query:{type:"privacy"},type:l.SHOP_PAGES},{path:"/pages/agreement/agreement",name:"\u670D\u52A1\u534F\u8BAE",query:{type:"service"},type:l.SHOP_PAGES},{path:"/pages/search/search",name:"\u641C\u7D22",type:l.SHOP_PAGES},{path:"/packages/pages/user_wallet/user_wallet",name:"\u6211\u7684\u94B1\u5305",type:l.SHOP_PAGES}]),i=u=>{r("update:modelValue",u)};return(u,t)=>(c(),C("div",he,[e("div",ve,[(c(!0),C($,null,G(s(f),(_,n)=>(c(),C("div",{class:ie(["link-item border border-br px-5 py-[5px] rounded-[3px] cursor-pointer mr-[10px] mb-[10px]",{"border-primary text-primary":a.modelValue.path==_.path&&a.modelValue.name==_.name}]),key:n,onClick:o=>i(_)},I(_.name),11,Ae))),128))])]))}}),ye={class:"custom-link h-[530px]"},Be=e("div",{class:"text-xl font-medium"},"\u81EA\u5B9A\u4E49\u94FE\u63A5",-1),ge={class:"flex flex-wrap items-center mt-4"},Pe=e("div",{class:"w-[86px] text-right"},"\u81EA\u5B9A\u4E49\u94FE\u63A5",-1),Ve={class:"ml-4 flex-1 min-w-[100px]"},Se=e("div",{class:"form-tips ml-[101px] max-w-[320px]"}," \u8BF7\u586B\u5199\u5B8C\u6574\u7684\u5E26\u6709\u201Chttps://\u201D\u6216\u201Chttp://\u201D\u7684\u94FE\u63A5\u5730\u5740\uFF0C\u94FE\u63A5\u7684\u57DF\u540D\u5FC5\u987B\u5728\u5FAE\u4FE1\u516C\u4F17\u5E73\u53F0\u8BBE\u7F6E\u4E1A\u52A1\u57DF\u540D ",-1),we=P({__name:"custom-link",props:{modelValue:{type:Object,default:()=>({})}},emits:["update:modelValue"],setup(a,{emit:x}){const r=x,f=i=>{r("update:modelValue",{path:"/pages/webview/webview",query:{url:i},type:l.CUSTOM_LINK})};return(i,u)=>{var _;const t=D;return c(),C("div",ye,[Be,e("div",ge,[Pe,e("div",Ve,[m(t,{class:"max-w-[320px]","model-value":(_=a.modelValue.query)==null?void 0:_.url,placeholder:"\u8BF7\u8F93\u5165\u94FE\u63A5\u5730\u5740",onInput:f},null,8,["model-value"])])]),Se])}}}),be={class:"article-list"},Ie={class:"flex row-center"},De={class:"flex items-center"},Oe={class:"ml-4 overflow-hidden"},ke={class:"text-base line-clamp-2"},Le={class:"flex justify-end mt-4"},$e=P({__name:"article-list",props:{modelValue:{type:Object,default:()=>({})}},emits:["update:modelValue"],setup(a,{emit:x}){const r=a,f=x,i=V({path:"/pages/news_detail/news_detail",name:"",query:{},type:l.ARTICLE_LIST}),u=de({name:"",is_show:1}),{pager:t,getLists:_,resetPage:n,resetParams:o}=Fe({fetchFun:Ee,params:u}),F=p=>p==Number(i.value.id),h=p=>{i.value={id:p.id,name:p.title,path:"/pages/news_detail/news_detail",query:{id:p.id},type:l.ARTICLE_LIST},f("update:modelValue",i.value)};return S(()=>r.modelValue,p=>{if(p.type!=l.ARTICLE_LIST)return i.value={id:"",name:"",path:"/pages/news_detail/news_detail",type:l.SHOP_PAGES};i.value=p},{immediate:!0}),_(),(p,d)=>{const v=D,w=z,O=Q,H=W,q=X,k=J,N=Y,M=Z,U=ee,K=_e,j=ue;return c(),C("div",be,[m(H,{ref:"formRef",model:s(u),inline:!0},{default:E(()=>[m(O,{label:"\u6587\u7AE0\u540D\u79F0"},{default:E(()=>[m(v,{class:"w-[280px]",modelValue:s(u).name,"onUpdate:modelValue":d[0]||(d[0]=A=>s(u).name=A),placeholder:"\u8BF7\u8F93\u5165",clearable:"",onKeyup:me(s(n),["enter"])},null,8,["modelValue","onKeyup"]),m(w,{type:"primary",class:"ml-4",icon:s(fe),onClick:s(n)},null,8,["icon","onClick"])]),_:1})]),_:1},8,["model"]),pe((c(),y(U,{size:"large",data:s(t).lists,height:"432px",onRowClick:h},{default:E(()=>[m(k,{label:"\u9009\u62E9","min-width":"50"},{default:E(({row:A})=>[e("div",Ie,[m(q,{"model-value":F(A.id),size:"large",onChange:su=>h(A)},null,8,["model-value","onChange"])])]),_:1}),m(k,{label:"\u6587\u7AE0\u540D\u79F0","min-width":"180"},{default:E(({row:A})=>[e("div",De,[m(N,{fit:"cover",src:A.image,class:"flex-none w-[58px] h-[58px]"},null,8,["src"]),e("div",Oe,[m(M,{effect:"dark",content:A.title,placement:"top"},{default:E(()=>[e("div",ke,I(A.title),1)]),_:2},1032,["content"])])])]),_:1}),m(k,{label:"\u521B\u5EFA\u65F6\u95F4",prop:"create_time","min-width":"140"})]),_:1},8,["data"])),[[j,s(t).loading]]),e("div",Le,[m(K,{modelValue:s(t),"onUpdate:modelValue":d[1]||(d[1]=A=>g(t)?t.value=A:null),onChange:s(_)},null,8,["modelValue","onChange"])])])}}});const Ge=R($e,[["__scopeId","data-v-979c3a50"]]),Re={class:"mini-program h-[530px]"},Te=e("div",{class:"text-xl font-medium"},"\u8DF3\u8F6C\u5C0F\u7A0B\u5E8F",-1),He={class:"flex flex-wrap items-center mt-4"},qe=e("div",{class:"w-[86px] text-right"},"\u5C0F\u7A0B\u5E8FAPPID",-1),Ne={class:"ml-4 flex-1 min-w-[100px]"},Me={class:"flex flex-wrap items-center mt-4"},Ue=e("div",{class:"w-[86px] text-right"},"\u5C0F\u7A0B\u5E8F\u8DEF\u5F84",-1),Ke={class:"ml-4 flex-1 min-w-[100px]"},je={class:"flex flex-wrap items-center mt-4"},ze=e("div",{class:"w-[86px] text-right"},"\u4F20\u9012\u53C2\u6570",-1),Qe={class:"ml-4 flex-1 min-w-[100px]"},We=e("div",{class:"form-tips ml-[100px] max-w-[320px]"},[e("div",null,"\u793A\u4F8B\uFF1Aid=2&ustm=jiny&name=234"),e("div",{class:"text-error"}," \u6CE8\u610F\uFF1A\u4E0D\u5141\u8BB8\u8F93\u5165\u4E2D\u6587\u3001\u7279\u6B8A\u5B57\u7B26\u7B49\u3002\u5982\u679C\u51FA\u73B0\u5BF9\u4E0D\u8D77\uFF0C\u5F53\u524D\u9875\u9762\u65E0\u6CD5\u8BBF\u95EE\uFF0C\u5927\u6982\u7387\u662F\u8DF3\u8F6C\u53C2\u6570\u7684\u95EE\u9898\uFF01\uFF01 ")],-1),Xe={class:"flex flex-wrap items-center mt-4"},Je=e("div",{class:"w-[86px] text-right"},"\u5C0F\u7A0B\u5E8F\u7248\u672C",-1),Ye={class:"ml-4 flex-1 min-w-[100px]"},Ze=e("div",null,[e("div",{class:"form-tips ml-[100px] max-w-[320px]"},[e("div",{class:"mt-4"}," 1. \u5C0F\u7A0B\u5E8FAPPID\u548C\u5C0F\u7A0B\u5E8F\u8DEF\u5F84\u94FE\u63A5\u5730\u5740\uFF0C\u5C0F\u7A0B\u5E8F\u8DEF\u5F84\u94FE\u63A5\u5730\u5740\u8BF7\u586B\u5199\u5C0F\u7A0B\u5E8F\u7684\u9875\u9762\u8DEF\u5F84\uFF0C\u5982\uFF1Apages/index/index "),e("div",{class:"mt-2"},[e("span",null,"2. \u5982\u679C\u662FH5(\u6D4F\u89C8\u5668)\u4E2D\u9700\u8981\u8DF3\u8F6C\u5230\u5C0F\u7A0B\u5E8F\uFF0C\u5219\u9700\u8981\u4EE5\u4E0B\u914D\u7F6E--->"),e("a",{href:"https://mp.weixin.qq.com/",class:"text-primary",target:"_blank",rel:"nofollow"}," \u5C0F\u7A0B\u5E8F\u7BA1\u7406\u540E\u53F0 -> \u8BBE\u7F6E -> \u9690\u79C1\u4E0E\u5B89\u5168 -> \u660E\u6587 scheme \u62C9\u8D77\u6B64\u5C0F\u7A0B\u5E8F \uFF08\u70B9\u51FB\u8DF3\u8F6C\u53BB\u914D\u7F6E\uFF09 ")])])],-1),eu=P({__name:"mini-program",props:{modelValue:{type:Object,default:()=>({})}},emits:["update:modelValue"],setup(a,{emit:x}){const r=a,f=x,i=(u,t)=>{f("update:modelValue",{...r.modelValue,name:"\u5C0F\u7A0B\u5E8F\u8DF3\u8F6C",query:{...r.modelValue.query,[u]:t},type:l.MINI_PROGRAM})};return S(()=>r.modelValue,u=>{var t;(t=u.query)!=null&&t.env_version||i("env_version","release")},{immediate:!0}),(u,t)=>{var F,h,p,d;const _=D,n=te,o=le;return c(),C("div",Re,[Te,e("div",He,[qe,e("div",Ne,[m(_,{class:"max-w-[320px]","model-value":(F=a.modelValue.query)==null?void 0:F.appId,placeholder:"\u8BF7\u8F93\u5165\u5C0F\u7A0B\u5E8FappId",onInput:t[0]||(t[0]=v=>i("appId",v))},null,8,["model-value"])])]),e("div",Me,[Ue,e("div",Ke,[m(_,{class:"max-w-[320px]","model-value":(h=a.modelValue.query)==null?void 0:h.path,placeholder:"\u8BF7\u8F93\u5165\u5C0F\u7A0B\u5E8F\u8DEF\u5F84\u94FE\u63A5\u5730\u5740",onInput:t[1]||(t[1]=v=>i("path",v))},null,8,["model-value"])])]),e("div",je,[ze,e("div",Qe,[m(_,{class:"max-w-[320px]","model-value":(p=a.modelValue.query)==null?void 0:p.query,placeholder:"\u8BF7\u8F93\u5165\u5C0F\u7A0B\u5E8F\u8DF3\u8F6C\u53C2\u6570(\u9009\u586B)",onInput:t[2]||(t[2]=v=>i("query",v))},null,8,["model-value"])])]),We,e("div",Xe,[Je,e("div",Ye,[m(o,{"model-value":(d=a.modelValue.query)==null?void 0:d.env_version,onChange:t[3]||(t[3]=v=>i("env_version",v))},{default:E(()=>[m(n,{label:"release"},{default:E(()=>[L("\u6B63\u5F0F\u7248")]),_:1}),m(n,{label:"trial"},{default:E(()=>[L("\u4F53\u9A8C\u7248")]),_:1}),m(n,{label:"develop"},{default:E(()=>[L("\u5F00\u53D1\u7248")]),_:1})]),_:1},8,["model-value"])])]),Ze])}}}),uu={class:"link flex"},tu={class:"flex-1 ml-4 link-content"},lu=P({__name:"index",props:{modelValue:{type:Object,required:!0}},emits:["update:modelValue"],setup(a,{emit:x}){const r=a,f=x,i=V([{name:"\u5546\u57CE\u9875\u9762",type:B.SHOP_PAGES,children:[{name:"\u57FA\u7840\u9875\u9762",type:l.SHOP_PAGES,link:{}}]},{name:"\u5E94\u7528\u5DE5\u5177",type:B.APPTOOL,children:[{name:"\u6587\u7AE0\u8D44\u8BAF",type:l.ARTICLE_LIST,link:{}}]},{name:"\u5176\u4ED6",type:B.OTHER_LINK,children:[{name:"\u81EA\u5B9A\u4E49\u94FE\u63A5",type:l.CUSTOM_LINK,link:{}},{name:"\u8DF3\u8F6C\u5C0F\u7A0B\u5E8F",type:l.MINI_PROGRAM,link:{}}]}]),u=T({get(){let n={};return i.value.forEach(o=>{const F=o.children.find(h=>h.type==t.value);F&&(n=F)}),n.link},set(n){i.value.forEach(o=>{o.children.forEach(F=>{F.type==t.value&&(F.link=n)})})}}),t=V(l.SHOP_PAGES),_=n=>{t.value=n};return S(u,n=>{!n.type||f("update:modelValue",n)},{deep:!0}),S(()=>r.modelValue,n=>{t.value=n.type,u.value=n},{immediate:!0}),(n,o)=>{const F=ae,h=ne,p=se;return c(),C("div",uu,[m(p,{"default-active":s(t),class:"flex-none w-[180px] min-h-[350px] link-menu","default-openeds":[s(B).SHOP_PAGES,s(B).APPTOOL,s(B).OTHER_LINK],onSelect:_},{default:E(()=>[(c(!0),C($,null,G(s(i),(d,v)=>(c(),y(h,{index:d.type,key:v},{title:E(()=>[e("span",null,I(d.name),1)]),default:E(()=>[(c(!0),C($,null,G(d.children,(w,O)=>(c(),y(F,{index:w.type,key:O,style:{"min-width":"160px"}},{default:E(()=>[e("span",null,I(w.name),1)]),_:2},1032,["index"]))),128))]),_:2},1032,["index"]))),128))]),_:1},8,["default-active","default-openeds"]),e("div",tu,[s(l).SHOP_PAGES==s(t)?(c(),y(Ce,{key:0,modelValue:s(u),"onUpdate:modelValue":o[0]||(o[0]=d=>g(u)?u.value=d:null)},null,8,["modelValue"])):b("",!0),s(l).ARTICLE_LIST==s(t)?(c(),y(Ge,{key:1,modelValue:s(u),"onUpdate:modelValue":o[1]||(o[1]=d=>g(u)?u.value=d:null)},null,8,["modelValue"])):b("",!0),s(l).CUSTOM_LINK==s(t)?(c(),y(we,{key:2,modelValue:s(u),"onUpdate:modelValue":o[2]||(o[2]=d=>g(u)?u.value=d:null)},null,8,["modelValue"])):b("",!0),s(l).MINI_PROGRAM==s(t)?(c(),y(eu,{key:3,modelValue:s(u),"onUpdate:modelValue":o[3]||(o[3]=d=>g(u)?u.value=d:null)},null,8,["modelValue"])):b("",!0)])])}}});const au=R(lu,[["__scopeId","data-v-59b3f9eb"]]),nu=P({__name:"picker",props:{modelValue:{type:Object},disabled:{type:Boolean,default:!1}},emits:["update:modelValue"],setup(a,{emit:x}){const r=a,f=x,i=re(),u=V({path:"",type:l.SHOP_PAGES}),t=()=>{f("update:modelValue",u.value)},_=T(()=>{var n,o,F;switch(console.log(r.modelValue),(n=r.modelValue)==null?void 0:n.type){case l.SHOP_PAGES:return r.modelValue.name;case l.ARTICLE_LIST:return r.modelValue.name;case l.CUSTOM_LINK:return(o=r.modelValue.query)==null?void 0:o.url;default:return(F=r.modelValue)==null?void 0:F.name}});return S(()=>r.modelValue,n=>{n!=null&&n.type&&(u.value=n)},{immediate:!0}),(n,o)=>{const F=oe,h=D;return c(),C("div",{class:"link-picker flex-1",onClick:o[2]||(o[2]=p=>{var d;return!a.disabled&&((d=s(i))==null?void 0:d.open())})},[m(h,{"model-value":s(_),placeholder:"\u8BF7\u9009\u62E9\u94FE\u63A5",readonly:"",disabled:a.disabled},{suffix:E(()=>{var p;return[(p=a.modelValue)!=null&&p.path?(c(),y(F,{key:1,name:"el-icon-Close",onClick:o[0]||(o[0]=ce(d=>!a.disabled&&f("update:modelValue",{}),["stop"]))})):(c(),y(F,{key:0,name:"el-icon-ArrowRight"}))]}),_:1},8,["model-value","disabled"]),m(xe,{ref_key:"popupRef",ref:i,width:"1050px",title:"\u94FE\u63A5\u9009\u62E9",onConfirm:t},{default:E(()=>[m(au,{modelValue:s(u),"onUpdate:modelValue":o[1]||(o[1]=p=>g(u)?u.value=p:null)},null,8,["modelValue"])]),_:1},512)])}}});const Fu=R(nu,[["__scopeId","data-v-b7004860"]]);export{Fu as _};
