import{h as O,y as u,z as S,_ as k}from"./index-Dcrp6DyI.js";import{I as C}from"./element-plus-B9ALq7eR.js";import{H as _}from"./vue-echarts-5qAlUj9S.js";import{u as h}from"./getExposeType-C5XerQxt.js";import{d as y,w as A,Z as E,f as B,ah as z,o as x,c as f,a as t,V as n,M as l,T as a,u as s,U as D,aa as R}from"./@vue-TMcuEboY.js";import"./nprogress-Cgf5DU8x.js";import"./balanced-match-mNcR6oh4.js";import"./vue-router-D4MxfuQi.js";import"./pinia-ebUeA1L2.js";import"./axios-C-n2IhIP.js";import"./lodash-BtPWuHkK.js";import"./@vueuse-BQYVjZ5N.js";import"./css-color-function-rJvg8h-6.js";import"./color-B0v57BL7.js";import"./clone-CuIhj1wH.js";import"./color-convert-BGgJB5UM.js";import"./color-name-BQ5IbGbl.js";import"./color-string-BhgG7-8u.js";import"./ms-CzQ2E3wO.js";import"./@element-plus-BZaexRrS.js";import"./vue-clipboard3-8CNoFg4V.js";import"./clipboard-Dch_ozqB.js";import"./echarts-BR_QmBtV.js";import"./tslib-BDyQ-Jie.js";import"./zrender-B-CeXLwU.js";import"./highlight.js-D5uP1KGk.js";import"./@highlightjs-KJi31KWJ.js";import"./lodash-es-R-kYiKr_.js";import"./async-validator-DKvM95Vc.js";import"./dayjs-CMfar2R3.js";import"./@ctrl-r5W6hzzQ.js";import"./normalize-wheel-es-B6fDCfyv.js";import"./@popperjs-D9SI2xQl.js";import"./resize-detector-G6vbKCU7.js";const V={class:"workbench"},M={class:"lg:flex"},N={class:"flex leading-9"},W={class:"flex leading-9"},F={class:"text-tx-secondary text-xs ml-4"},H={class:"flex flex-wrap"},I={class:"w-1/2 md:w-1/4"},L={class:"text-6xl"},T={class:"text-tx-secondary text-xs"},U={class:"w-1/2 md:w-1/4"},Z={class:"text-6xl"},j={class:"text-tx-secondary text-xs"},q={class:"w-1/2 md:w-1/4"},G={class:"text-6xl"},J={class:"text-tx-secondary text-xs"},K={class:"w-1/2 md:w-1/4"},P={class:"text-6xl"},Q={class:"text-tx-secondary text-xs"},X={class:"function mb-4"},Y={class:"flex flex-wrap"},$={class:"mt-2"},tt={class:"lg:flex gap-4"},ot=y({name:"workbench"}),Ft=y({...ot,setup(et){const r=O(),m=h(),v=h();A(()=>r.theme,()=>{w()});const e=E({version:{version:"",website:"",based:"",channel:{gitee:"",website:""}},support:[],today:{},menu:[],visitor:[],article:[],visitorOption:{xAxis:{type:"category",data:[]},yAxis:{type:"value"},legend:{data:["访问量"]},tooltip:{trigger:"axis"},series:[{name:"访问量",data:[],type:"line",smooth:!0,color:r.theme,lineStyle:{color:r.theme,width:2},areaStyle:{color:{type:"linear",x:0,y:0,x2:0,y2:1,colorStops:[{offset:0,color:r.theme},{offset:1,color:r.theme}]},opacity:.1}}]},saleOption:{xAxis:{type:"category",data:[]},yAxis:{type:"value",name:"单位（万）"},tooltip:{trigger:"axis"},series:[{name:"销售量",data:[],type:"bar",showBackground:!0,backgroundStyle:{color:"rgba(180, 180, 180, 0.2)",borderRadius:[10,10,0,0]},barWidth:"40%",itemStyle:{borderRadius:[10,10,0,0],color:{type:"linear",x:0,y:0,x2:0,y2:1,colorStops:[{offset:0,color:u(r.theme,.7)},{offset:1,color:r.theme}]}}}]}}),g=()=>{S().then(i=>{e.version=i.version,e.today=i.today,e.menu=i.menu,e.visitor=i.visitor,e.support=i.support,e.visitorOption.xAxis.data=[],e.visitorOption.series[0].data=[],e.saleOption.xAxis.data=[],e.saleOption.series[0].data=[],i.visitor.date.reverse().forEach(o=>{e.visitorOption.xAxis.data.push(o)}),i.visitor.list[0].data.forEach(o=>{e.visitorOption.series[0].data.push(o)}),i.sale.date.reverse().forEach(o=>{e.saleOption.xAxis.data.push(o)}),i.sale.list[0].data.forEach(o=>{o<=50&&(o={value:o,itemStyle:{color:{type:"linear",x:0,y:0,x2:0,y2:1,colorStops:[{offset:0,color:u("#ff8729",.7)},{offset:1,color:"#ff8729"}]}}}),e.saleOption.series[0].data.push(o)})}).catch(i=>{console.log("err",i)})},w=()=>{var i,o,d,c;e.visitorOption.series[0].color=r.theme,e.visitorOption.series[0].lineStyle.color=r.theme,e.visitorOption.series[0].areaStyle.color.colorStops=[{offset:0,color:r.theme},{offset:1,color:r.theme}],e.saleOption.series[0].itemStyle.color.colorStops=[{offset:0,color:u(r.theme,.7)},{offset:1,color:r.theme}],(i=m.value)==null||i.clear(),(o=v.value)==null||o.clear(),(d=m.value)==null||d.setOption(e.saleOption),(c=v.value)==null||c.setOption(e.visitorOption)};return B(()=>{g()}),(i,o)=>{const d=C,c=k,b=z("router-link");return x(),f("div",V,[t("div",M,[n(d,{class:"!border-none mb-4 lg:mr-4 lg:w-[350px]",shadow:"never"},{header:l(()=>o[0]||(o[0]=[t("span",{class:"card-title"},"版本信息",-1)])),default:l(()=>[t("div",null,[t("div",N,[o[1]||(o[1]=t("div",{class:"w-20"},"平台名称",-1)),t("span",null,a(s(e).version.name),1)]),t("div",W,[o[2]||(o[2]=t("div",{class:"w-20"},"当前版本",-1)),t("span",null,a(s(e).version.version),1)])])]),_:1}),n(d,{class:"!border-none mb-4 flex-1",shadow:"never"},{header:l(()=>[t("div",null,[o[3]||(o[3]=t("span",{class:"card-title"},"今日数据",-1)),t("span",F," 更新时间："+a(s(e).today.time),1)])]),default:l(()=>[t("div",H,[t("div",I,[o[4]||(o[4]=t("div",{class:"leading-10"},"销售额",-1)),t("div",L,a(s(e).today.today_sales),1),t("div",T," 总："+a(s(e).today.total_sales),1)]),t("div",U,[o[5]||(o[5]=t("div",{class:"leading-10"},"成交订单",-1)),t("div",Z,a(s(e).today.order_num),1),t("div",j," 总："+a(s(e).today.order_sum),1)]),t("div",q,[o[6]||(o[6]=t("div",{class:"leading-10"},"新增用户",-1)),t("div",G,a(s(e).today.today_new_user),1),t("div",J," 总："+a(s(e).today.total_new_user),1)]),t("div",K,[o[7]||(o[7]=t("div",{class:"leading-10"},"新增访问量",-1)),t("div",P,a(s(e).today.today_visitor),1),t("div",Q," 总："+a(s(e).today.total_visitor),1)])])]),_:1})]),t("div",X,[n(d,{class:"flex-1 !border-none",shadow:"never"},{header:l(()=>o[8]||(o[8]=[t("span",null,"常用功能",-1)])),default:l(()=>[t("div",Y,[(x(!0),f(D,null,R(s(e).menu,p=>(x(),f("div",{class:"md:w-[12.5%] w-1/4 flex flex-col items-center",key:p},[n(b,{to:p.url,class:"mb-3 flex flex-col items-center"},{default:l(()=>[n(c,{width:"40px",height:"40px",src:p==null?void 0:p.image},null,8,["src"]),t("div",$,a(p.name),1)]),_:2},1032,["to"])]))),128))])]),_:1})]),t("div",tt,[n(d,{class:"!border-none mb-4 lg:mb-0 w-full lg:w-2/3",shadow:"never"},{header:l(()=>o[9]||(o[9]=[t("span",null,"访问量趋势图",-1)])),default:l(()=>[t("div",null,[n(s(_),{ref_key:"visitorChart",ref:v,style:{height:"350px"},option:s(e).visitorOption,autoresize:!0},null,8,["option"])])]),_:1}),n(d,{class:"!border-none w-full lg:w-1/3",shadow:"never"},{header:l(()=>o[10]||(o[10]=[t("span",null,"销售额趋势图",-1)])),default:l(()=>[t("div",null,[n(s(_),{ref_key:"saleChart",ref:m,style:{height:"350px"},option:s(e).saleOption,autoresize:!0},null,8,["option"])])]),_:1})])])}}});export{Ft as default};
