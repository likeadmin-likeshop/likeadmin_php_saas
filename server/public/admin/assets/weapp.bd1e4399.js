import{_ as I}from"./index.d23cf9a7.js";import{K as U,I as y,C as S,D as R,w as N,F as j}from"./element-plus.4078815e.js";import{_ as W}from"./picker.3b530f21.js";import{r as C,u as K}from"./index.9feff995.js";import{d as v,a1 as M,s as O,an as A,o as n,c as P,X as o,P as t,a as u,u as l,Q as m,O as p,U as _}from"./@vue.b52708da.js";import"./@element-plus.35ec7429.js";import"./lodash-es.2b4cc642.js";import"./dayjs.3bccbd93.js";import"./axios.dc00a7f8.js";import"./async-validator.fb49d0f5.js";import"./@ctrl.b082b0c1.js";import"./@popperjs.36402333.js";import"./escape-html.e5dfadb9.js";import"./normalize-wheel-es.8aeb3683.js";import"./index.6a7603c9.js";import"./index.e2458a44.js";import"./index.vue_vue_type_script_setup_true_lang.39fbc713.js";import"./index.1b19ad06.js";import"./index.98d815fb.js";import"./index.vue_vue_type_script_setup_true_lang.020a2226.js";import"./@vueuse.e1a32ef4.js";import"./usePaging.771acc0e.js";import"./vue3-video-play.36140ed9.js";import"./vuedraggable.5bfed3b5.js";import"./vue.0ef5c72b.js";import"./sortablejs.dbf1c042.js";import"./lodash.e6e9a684.js";import"./vue-router.48496b4b.js";import"./pinia.3f41eb90.js";import"./css-color-function.a728b5d4.js";import"./color.d7ae65d5.js";import"./clone.65443a5f.js";import"./color-convert.755d189f.js";import"./color-name.e7a4e1d3.js";import"./color-string.e356f5de.js";import"./balanced-match.d2a36341.js";import"./ms.564e106c.js";import"./nprogress.2274a56d.js";import"./vue-clipboard3.d9310b6d.js";import"./clipboard.cf95dd73.js";import"./echarts.004f4e72.js";import"./zrender.b56a9aa5.js";import"./tslib.60310f1a.js";import"./highlight.js.db90315f.js";import"./@highlightjs.0797cc3b.js";function Q(f){return C.post({url:"/channel.mnp_settings/setConfig",params:f})}function T(){return C.get({url:"/channel.mnp_settings/getConfig"})}const X=u("div",{class:"font-medium mb-7"},"\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F",-1),z={class:"w-80"},G={class:"w-80"},H={class:"flex-1"},J=u("div",{class:"form-tips"},"\u5EFA\u8BAE\u5C3A\u5BF8\uFF1A\u5BBD400px*\u9AD8400px\u3002jpg\uFF0Cjpeg\uFF0Cpng\u683C\u5F0F",-1),L=u("div",{class:"font-medium mb-7"},"\u5F00\u53D1\u8005ID",-1),Y={class:"w-80"},Z={class:"w-80"},$=u("div",{class:"form-tips"}," \u5C0F\u7A0B\u5E8F\u8D26\u53F7\u767B\u5F55\u5FAE\u4FE1\u516C\u4F17\u5E73\u53F0\uFF0C\u70B9\u51FB\u5F00\u53D1>\u5F00\u53D1\u8BBE\u7F6E->\u5F00\u53D1\u8005ID\uFF0C\u8BBE\u7F6EAppID\u548CAppSecret ",-1),uu=u("div",{class:"font-medium mb-7"},"\u670D\u52A1\u5668\u57DF\u540D",-1),eu={class:"flex-1 min-w-0"},ou={class:"sm:flex"},lu={class:"mr-4 sm:w-80 flex"},tu=u("div",{class:"form-tips"}," \u5C0F\u7A0B\u5E8F\u8D26\u53F7\u767B\u5F55\u5FAE\u4FE1\u516C\u4F17\u5E73\u53F0\uFF0C\u70B9\u51FB\u5F00\u53D1>\u5F00\u53D1\u8BBE\u7F6E->\u670D\u52A1\u5668\u57DF\u540D\uFF0C\u586B\u5199https\u534F\u8BAE\u57DF\u540D ",-1),su={class:"flex-1 min-w-0"},du={class:"sm:flex"},au={class:"mr-4 sm:w-80 flex"},iu=u("div",{class:"form-tips"}," \u5C0F\u7A0B\u5E8F\u8D26\u53F7\u767B\u5F55\u5FAE\u4FE1\u516C\u4F17\u5E73\u53F0\uFF0C\u70B9\u51FB\u5F00\u53D1>\u5F00\u53D1\u8BBE\u7F6E->\u670D\u52A1\u5668\u57DF\u540D\uFF0C\u586B\u5199wss\u534F\u8BAE\u57DF\u540D ",-1),nu={class:"flex-1 min-w-0"},Fu={class:"sm:flex"},mu={class:"mr-4 sm:w-80 flex"},pu=u("div",{class:"form-tips"}," \u5C0F\u7A0B\u5E8F\u8D26\u53F7\u767B\u5F55\u5FAE\u4FE1\u516C\u4F17\u5E73\u53F0\uFF0C\u70B9\u51FB\u5F00\u53D1>\u5F00\u53D1\u8BBE\u7F6E->\u670D\u52A1\u5668\u57DF\u540D\uFF0C\u586B\u5199https\u534F\u8BAE\u57DF\u540D ",-1),_u={class:"flex-1 min-w-0"},ru={class:"sm:flex"},cu={class:"mr-4 sm:w-80 flex"},Du=u("div",{class:"form-tips"}," \u5C0F\u7A0B\u5E8F\u8D26\u53F7\u767B\u5F55\u5FAE\u4FE1\u516C\u4F17\u5E73\u53F0\uFF0C\u70B9\u51FB\u5F00\u53D1>\u5F00\u53D1\u8BBE\u7F6E->\u670D\u52A1\u5668\u57DF\u540D\uFF0C\u586B\u5199https\u534F\u8BAE\u57DF\u540D ",-1),fu={class:"flex-1 min-w-0"},Bu={class:"sm:flex"},Eu={class:"mr-4 sm:w-80 flex"},Au=u("div",{class:"form-tips"}," \u5C0F\u7A0B\u5E8F\u8D26\u53F7\u767B\u5F55\u5FAE\u4FE1\u516C\u4F17\u5E73\u53F0\uFF0C\u70B9\u51FB\u5F00\u53D1>\u5F00\u53D1\u8BBE\u7F6E->\u670D\u52A1\u5668\u57DF\u540D\uFF0C\u586B\u5199udp\u534F\u8BAE\u57DF\u540D ",-1),Cu=u("div",{class:"font-medium mb-7"},"\u4E1A\u52A1\u57DF\u540D",-1),vu={class:"flex-1 min-w-0"},wu={class:"sm:flex"},bu={class:"mr-4 sm:w-80 flex"},hu=u("div",{class:"form-tips"}," \u5C0F\u7A0B\u5E8F\u8D26\u53F7\u767B\u5F55\u5FAE\u4FE1\u516C\u4F17\u5E73\u53F0\uFF0C\u70B9\u51FB\u5F00\u53D1>\u5F00\u53D1\u8BBE\u7F6E->\u4E1A\u52A1\u57DF\u540D\uFF0C\u586B\u5199\u4E1A\u52A1\u57DF\u540D ",-1),Vu=v({name:"weappConfig"}),Be=v({...Vu,setup(f){const w=K(),e=M({name:"",original_id:"",qr_code:"",app_id:"",app_secret:"",business_domain:"",download_file_domain:"",request_domain:"",socket_domain:"",tcpDomain:"",udp_domain:"",upload_file_domain:""}),B=O(),b={app_id:[{required:!0,message:"\u8BF7\u8F93\u5165AppID",trigger:["blur","change"]}],app_secret:[{required:!0,message:"\u8BF7\u8F93\u5165AppSecret",trigger:["blur","change"]}]},E=async()=>{const c=await T();for(const s in e)e[s]=c[s]},h=async()=>{var c;await((c=B.value)==null?void 0:c.validate()),await Q(e),E()};return E(),(c,s)=>{const V=U,D=y,i=S,a=R,g=W,F=N,x=j,k=I,r=A("copy"),q=A("perms");return n(),P("div",null,[o(D,{class:"!border-none",shadow:"never"},{default:t(()=>[o(V,{type:"warning",title:"\u6E29\u99A8\u63D0\u793A\uFF1A\u586B\u5199\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F\u5F00\u53D1\u914D\u7F6E\uFF0C\u8BF7\u524D\u5F80\u5FAE\u4FE1\u516C\u4F17\u5E73\u53F0\u7533\u8BF7\u5C0F\u7A0B\u5E8F\u5E76\u5B8C\u6210\u8BA4\u8BC1",closable:!1,"show-icon":""})]),_:1}),o(x,{ref_key:"formRef",ref:B,model:l(e),rules:b,"label-width":l(w).isMobile?"80px":"160px"},{default:t(()=>[o(D,{class:"!border-none mt-4",shadow:"never"},{default:t(()=>[X,o(a,{label:"\u5C0F\u7A0B\u5E8F\u540D\u79F0",prop:"name"},{default:t(()=>[u("div",z,[o(i,{modelValue:l(e).name,"onUpdate:modelValue":s[0]||(s[0]=d=>l(e).name=d),placeholder:"\u8BF7\u8F93\u5165\u5C0F\u7A0B\u5E8F\u540D\u79F0"},null,8,["modelValue"])])]),_:1}),o(a,{label:"\u539F\u59CBID",prop:"original_id"},{default:t(()=>[u("div",G,[o(i,{modelValue:l(e).original_id,"onUpdate:modelValue":s[1]||(s[1]=d=>l(e).original_id=d),placeholder:"\u8BF7\u8F93\u5165\u539F\u59CBID"},null,8,["modelValue"])])]),_:1}),o(a,{label:"\u5C0F\u7A0B\u5E8F\u7801",prop:"qr_code"},{default:t(()=>[u("div",H,[u("div",null,[o(g,{modelValue:l(e).qr_code,"onUpdate:modelValue":s[2]||(s[2]=d=>l(e).qr_code=d),limit:1},null,8,["modelValue"])]),J])]),_:1})]),_:1}),o(D,{class:"!border-none mt-4",shadow:"never"},{default:t(()=>[L,o(a,{label:"AppID",prop:"app_id"},{default:t(()=>[u("div",Y,[o(i,{modelValue:l(e).app_id,"onUpdate:modelValue":s[3]||(s[3]=d=>l(e).app_id=d),placeholder:"\u8BF7\u8F93\u5165AppID"},null,8,["modelValue"])])]),_:1}),o(a,{label:"AppSecret",prop:"app_secret"},{default:t(()=>[u("div",Z,[o(i,{modelValue:l(e).app_secret,"onUpdate:modelValue":s[4]||(s[4]=d=>l(e).app_secret=d),placeholder:"\u8BF7\u8F93\u5165AppSecret"},null,8,["modelValue"])])]),_:1}),o(a,null,{default:t(()=>[$]),_:1})]),_:1}),o(D,{class:"!border-none mt-4",shadow:"never"},{default:t(()=>[uu,o(a,{label:"request\u5408\u6CD5\u57DF\u540D",prop:"appId"},{default:t(()=>[u("div",eu,[u("div",ou,[u("div",lu,[o(i,{modelValue:l(e).request_domain,"onUpdate:modelValue":s[5]||(s[5]=d=>l(e).request_domain=d),disabled:""},null,8,["modelValue"])]),m((n(),p(F,null,{default:t(()=>[_("\u590D\u5236")]),_:1})),[[r,l(e).request_domain]])]),tu])]),_:1}),o(a,{label:"socket\u5408\u6CD5\u57DF\u540D"},{default:t(()=>[u("div",su,[u("div",du,[u("div",au,[o(i,{modelValue:l(e).socket_domain,"onUpdate:modelValue":s[6]||(s[6]=d=>l(e).socket_domain=d),disabled:""},null,8,["modelValue"])]),m((n(),p(F,null,{default:t(()=>[_("\u590D\u5236")]),_:1})),[[r,l(e).socket_domain]])]),iu])]),_:1}),o(a,{label:"uploadFile\u5408\u6CD5\u57DF\u540D"},{default:t(()=>[u("div",nu,[u("div",Fu,[u("div",mu,[o(i,{modelValue:l(e).upload_file_domain,"onUpdate:modelValue":s[7]||(s[7]=d=>l(e).upload_file_domain=d),disabled:""},null,8,["modelValue"])]),m((n(),p(F,null,{default:t(()=>[_("\u590D\u5236")]),_:1})),[[r,l(e).upload_file_domain]])]),pu])]),_:1}),o(a,{label:"downloadFile\u5408\u6CD5\u57DF\u540D"},{default:t(()=>[u("div",_u,[u("div",ru,[u("div",cu,[o(i,{modelValue:l(e).download_file_domain,"onUpdate:modelValue":s[8]||(s[8]=d=>l(e).download_file_domain=d),disabled:""},null,8,["modelValue"])]),m((n(),p(F,null,{default:t(()=>[_("\u590D\u5236")]),_:1})),[[r,l(e).download_file_domain]])]),Du])]),_:1}),o(a,{label:"udp\u5408\u6CD5\u57DF\u540D"},{default:t(()=>[u("div",fu,[u("div",Bu,[u("div",Eu,[o(i,{modelValue:l(e).udp_domain,"onUpdate:modelValue":s[9]||(s[9]=d=>l(e).udp_domain=d),disabled:""},null,8,["modelValue"])]),m((n(),p(F,null,{default:t(()=>[_("\u590D\u5236")]),_:1})),[[r,l(e).udp_domain]])]),Au])]),_:1})]),_:1}),o(D,{class:"!border-none mt-4",shadow:"never"},{default:t(()=>[Cu,o(a,{label:"\u4E1A\u52A1\u57DF\u540D"},{default:t(()=>[u("div",vu,[u("div",wu,[u("div",bu,[o(i,{modelValue:l(e).business_domain,"onUpdate:modelValue":s[10]||(s[10]=d=>l(e).business_domain=d),disabled:""},null,8,["modelValue"])]),m((n(),p(F,null,{default:t(()=>[_("\u590D\u5236")]),_:1})),[[r,l(e).business_domain]])]),hu])]),_:1})]),_:1})]),_:1},8,["model","label-width"]),m((n(),p(k,null,{default:t(()=>[o(F,{type:"primary",onClick:h},{default:t(()=>[_("\u4FDD\u5B58")]),_:1})]),_:1})),[[q,["channel.mnp_settings/setConfig"]]])])}}});export{Be as default};
