import{v as Ke,E as Te,S as Ze,Q as Oe,n as Qe,o as Je,p as Xe,T as He,s as et,h as tt,O as lt,P as nt,B as st,r as at,F as ot,U as it,K as dt,L as rt,M as ut}from"./element-plus-B9ALq7eR.js";import{_ as ct}from"./index.vue_vue_type_script_setup_true_lang-B-ov7tNf.js";import{_ as ft}from"./index-CiH-tHRO.js";import{d as $e,b as De,r as $,f as me,k as pt}from"./index-Di9-CjgU.js";import{P as mt}from"./index-XT8BS2bq.js";import{U as vt}from"./index-CPmTf12F.js";import{_ as yt}from"./index.vue_vue_type_script_setup_true_lang-Be0Cw8SV.js";import{d as J,o,c as p,a as i,L as x,V as s,R as v,I as gt,a0 as Ie,s as X,r as R,Z as Fe,J as _t,u as l,b as Le,w as O,n as Re,O as Q,W as ve,M as a,i as L,_ as Ct,F as ht,f as kt,S as f,a3 as Z,U as T,aa as Y,ab as wt,P as ze,T as fe}from"./@vue-TMcuEboY.js";import{u as bt}from"./usePaging-DFi_nJOG.js";import{g as xt}from"./vue3-video-play-xg7gp0Bu.js";const St="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAgCAYAAABgrToAAAACJElEQVRYR+2YMWsUURSFz3m7s+nskjUIQSutbMRi7WzUVjSadMHCbVLkByjmLygaCVYWRqMEUhkFS9Gg0cJfYCPZjYUQFbPs+I7c2R1Q2ZjZfRNYYS4MAzPv3vnmvDvL3kMA2Hl5/CjLI9ckf4ZwY3Zt15C+gfwIao3So0rt3XsJtPUk9M/cAW6y9ap2DIyfAjgCwANwGeoYiEFtk/5e5CvXeer1D2neATcGgiTZM4+t9RNLEKcBtAFEGeBsiRWzl7EoSXo+8rV9gWc/fDc1B1VSEoEnDpj0KTB33tS26DGaEezvZQZpRxmODyoT5+vwBwS3zeTcT4yjTdZNJEiPSykk1bjZX6HeD/WQJ1zUApgq2w+etcsniBuAVlH9vELOx6Yo1VywgkmTB4X1kEGGhyAtg/Ecq3NNqnknDwVTrNBaactEts88OHs5b8Bw/Tof4M+kr4WrwwhoL9n5uRPWhxWwsxPEl+EGNMacP5I8evCPGgVgqKSFgoWCoQqE5hc9WCgYqkBoftGDeSiYz1/+UJLe+foftvh2A2B1fwQIrapkaFoDcK4PVyH0qVnyU4fjGdW4NQ2WlgDE5hLkMoJmQdh9zW9Dk59K5lhtLjyE01TX/jDILP5MGEbvbFPOJroIXvc5PjvTBbx7GM4vAjjd9WdSc2g/IPaqaTv5Aq58haP1TSb2Au20GGErvgTxIqiTAA7tVSnn+2Z9vAXdCsa4bD6Nsf0C/gYA5PMzcW0AAAAASUVORK5CYII=",At=J({props:{uri:{type:String},fileSize:{type:String,default:"100px"},width:{type:String,default:""},height:{type:String,default:""},type:{type:String,default:"image"}},emits:["close"]}),Vt=["src"],Et={key:3,class:"absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] rounded-full w-5 h-5 flex justify-center items-center bg-[rgba(0,0,0,0.3)]"};function Rt(n,z,k,y,g,A){const w=Ke,d=De;return o(),p("div",null,[i("div",{class:"file-item relative",style:Ie({height:n.height||n.fileSize,width:n.width||n.fileSize})},[n.type=="image"?(o(),x(w,{key:0,class:"image",fit:"contain",src:n.uri},null,8,["src"])):n.type=="video"?(o(),p("video",{key:1,class:"video",src:n.uri},null,8,Vt)):(o(),x(w,{key:2,class:"image",src:"https://img95.699pic.com/element/40103/3946.png_860.png"})),n.type=="video"?(o(),p("div",Et,[s(d,{name:"el-icon-CaretRight",size:18,color:"#fff"})])):v("",!0),gt(n.$slots,"default",{},void 0,!0)],4)])}const pe=$e(At,[["render",Rt],["__scopeId","data-v-acf6f94d"]]);function Pe(n){return $.post({url:"/file/addCate",params:n})}function zt(n){return $.post({url:"/file/editCate",params:n})}function Pt(n){return $.post({url:"/file/delCate",params:n})}function Tt(n){return $.get({url:"/file/listCate",params:n})}function $t(n){return $.get({url:"/file/lists",params:n},{ignoreCancelToken:!0,isOpenRetry:!1})}function Dt(n){return $.post({url:"/file/delete",params:n})}function It(n){return $.post({url:"/file/move",params:n})}function Ft(n){return $.post({url:"/file/rename",params:n})}function Lt(n){const z=X(),k=R([]),y=R(""),g=async()=>{const c=await Tt({page_type:0,type:n}),u=[{name:"全部",id:""},{name:"未分组",id:0}];k.value=c.lists,k.value.unshift(...u),setTimeout(()=>{var b;(b=z.value)==null||b.setCurrentKey(y.value)},0)};return{treeRef:z,cateId:y,cateLists:k,handleAddCate:async c=>{await Pe({type:n,name:c,pid:0}),g()},handleAddChildCate:async(c,u)=>{await Pe({type:n,name:c,pid:u}),g()},handleEditCate:async(c,u)=>{await zt({id:u,name:c}),g()},handleDeleteCate:async(c,u)=>{u?await me.confirm("删除文件夹将会永久删除文件夹及其所有内容。您确定要继续吗？"):await me.confirm("确定要删除？"),await Pt({id:c}),y.value="",g()},getCateLists:g,handleCatSelect:c=>{y.value=c.id}}}function Ut(n,z,k,y){const g=X(),A=R("normal"),w=R(0),d=R([]),P=R(!1),_=R(!1),c=Fe({name:"",type:z,cid:n,source:""}),{pager:u,getLists:b,resetPage:D}=bt({fetchFun:$t,params:c,firstLoading:!0,size:y}),U=()=>{b()},H=()=>{D()},ee=m=>!!d.value.find(r=>r.id==m),te=async m=>{await me.confirm("确认删除后，本地或云存储文件也将同步删除，如文件已被使用，请谨慎操作！");const r=m||d.value.map(E=>E.id);await Dt({ids:r}),U(),M()},le=async()=>{const m=d.value.map(r=>r.id);await It({ids:m,cid:w.value}),w.value=0,U(),M()},ne=m=>{const r=d.value.findIndex(E=>E.id==m.id);if(r!=-1){d.value.splice(r,1);return}if(d.value.length==k.value){if(k.value==1){d.value=[],d.value.push(m);return}Te.warning("已达到选择上限");return}d.value.push(m)},M=()=>{d.value=[]};return{listShowType:A,tableRef:g,moveId:w,pager:u,fileParams:c,select:d,isCheckAll:P,isIndeterminate:_,getFileList:U,refresh:H,batchFileDelete:te,batchFileMove:le,selectFile:ne,isSelect:ee,clearSelect:M,cancelSelete:m=>{d.value=d.value.filter(r=>r.id!=m)},selectAll:m=>{var r;if(_.value=!1,(r=g.value)==null||r.toggleAllSelection(),m){d.value=[...u.lists];return}M()},handleFileRename:async(m,r)=>{await Ft({id:r,name:m}),U()}}}const Mt=J({__name:"index",props:{src:{type:String,required:!0},width:String,height:String,poster:String},setup(n,{expose:z}){const k=n,y=X(),g=Fe({color:"var(--el-color-primary)",muted:!1,webFullScreen:!1,speedRate:["0.75","1.0","1.25","1.5","2.0"],autoPlay:!0,loop:!1,mirror:!1,ligthOff:!1,volume:.3,control:!0,title:"",poster:"",...k}),A=()=>{y.value.play()},w=()=>{y.value.pause()},d=u=>{console.log(u,"播放")},P=u=>{console.log(u,"暂停")},_=u=>{console.log(u,"时间更新")},c=u=>{console.log(u,"可以播放")};return z({play:A,pause:w}),(u,b)=>(o(),p("div",null,[s(l(xt),_t({ref_key:"playerRef",ref:y},g,{src:n.src,onPlay:d,onPause:P,onTimeupdate:_,onCanplay:c}),null,16,["src"])]))}}),jt={key:0},Bt={key:1},Nt=J({__name:"preview",props:{modelValue:{type:Boolean,default:!1},url:{type:String,default:""},type:{type:String,default:"image"}},emits:["update:modelValue"],setup(n,{emit:z}){const k=n,y=z,g=X(),A=Le({get(){return k.modelValue},set(P){y("update:modelValue",P)}}),w=()=>{y("update:modelValue",!1)},d=R([]);return O(()=>k.modelValue,P=>{P?Re(()=>{var _;d.value=[k.url],(_=g.value)==null||_.play()}):Re(()=>{var _;d.value=[],(_=g.value)==null||_.pause()})}),(P,_)=>{const c=Ze,u=Mt,b=Oe;return Q((o(),p("div",null,[n.type=="image"?(o(),p("div",jt,[l(d).length?(o(),x(c,{key:0,"url-list":l(d),"hide-on-click-modal":"",onClose:w},null,8,["url-list"])):v("",!0)])):v("",!0),n.type=="video"?(o(),p("div",Bt,[s(b,{modelValue:l(A),"onUpdate:modelValue":_[0]||(_[0]=D=>L(A)?A.value=D:null),width:"740px",title:"视频预览","before-close":w},{default:a(()=>[s(u,{ref_key:"playerRef",ref:g,src:n.url,width:"100%",height:"450px"},null,8,["src"])]),_:1},8,["modelValue"])])):v("",!0)],512)),[[ve,n.modelValue]])}}}),Wt={class:"material"},Gt={class:"material__left"},Yt={class:"flex-1 min-h-0"},qt={class:"material-left__content pt-4 p-b-4"},Kt={class:"flex flex-1 items-center min-w-0 pr-4"},Zt={class:"flex-1 truncate mr-2"},Ot=["onClick"],Qt={class:"flex justify-center p-2 border-t border-br"},Jt={class:"material__center flex flex-col"},Xt={class:"operate-btn flex"},Ht={class:"flex-1 flex"},el={class:"flex items-center ml-2"},tl={key:0,class:"mt-3"},ll={class:"material-center__content flex flex-col flex-1 mb-1 min-h-0"},nl={class:"file-list flex flex-wrap mt-4"},sl={key:0,class:"item-selected"},al={class:"operation-btns flex items-center"},ol={class:"inline-block"},il={class:"inline-block"},dl={class:"inline-block"},rl={key:1,class:"flex flex-1 justify-center items-center"},ul={class:"material-center__footer flex justify-between items-center mt-2"},cl={class:"flex"},fl={class:"mr-3"},pl={key:0,class:"material__right"},ml={class:"flex justify-between p-2 flex-wrap"},vl={class:"sm flex items-center"},yl={key:0},gl={class:"flex-1 min-h-0"},_l={class:"select-lists flex flex-col p-t-3"},Cl={class:"select-item"},hl=J({__name:"index",props:{fileSize:{type:String,default:"100px"},limit:{type:Number,default:1},type:{type:String,default:"image"},mode:{type:String,default:"picker"},pageSize:{type:Number,default:15}},emits:["change"],setup(n,{expose:z,emit:k}){const y=n,g=k,{limit:A}=Ct(y),w=Le(()=>{switch(y.type){case"image":return 10;case"video":return 20;case"file":return 30;default:return 0}}),d=[{value:"0",label:"后台上传"},{value:"1",label:"前端上传"}],P=ht("visible",R(!1)),_=R(""),c=R(!1),{treeRef:u,cateId:b,cateLists:D,handleAddCate:U,handleAddChildCate:H,handleEditCate:ee,handleDeleteCate:te,getCateLists:le,handleCatSelect:ne}=Lt(w.value),{tableRef:M,listShowType:I,moveId:F,pager:V,fileParams:m,select:r,isCheckAll:E,isIndeterminate:B,getFileList:ye,refresh:j,batchFileDelete:q,batchFileMove:ge,selectFile:se,isSelect:_e,clearSelect:Ce,cancelSelete:Ue,selectAll:he,handleFileRename:ke}=Ut(b,w,A,y.pageSize),we=async()=>{var S;await le(),(S=u.value)==null||S.setCurrentKey(b.value),ye()},ae=S=>{_.value=S,c.value=!0};O(()=>P.value,async S=>{S&&we()},{immediate:!0}),O(b,()=>{m.name="",j()}),O(r,S=>{if(g("change",S),S.length==V.lists.length&&S.length!==0){B.value=!1,E.value=!0;return}S.length>0?B.value=!0:(E.value=!1,B.value=!1)},{deep:!0}),kt(()=>{y.mode=="page"&&we()}),z({clearSelect:Ce});const be=R(),Me=S=>{const e=S,N=be.value;N.value=e,N.select(),document.execCommand("copy"),Te({message:"地址复制成功",type:"success"})};return(S,e)=>{const N=pt,oe=Qe,W=yt,je=Je,Be=Xe,Ne=He,ie=et,h=tt,de=vt,re=lt,ue=nt,xe=mt,K=De,We=st,Se=at,ce=ot,Ae=ft,Ve=it,G=dt,Ge=rt,Ye=ct,qe=ut;return Q((o(),p("div",Wt,[i("div",Gt,[i("div",Yt,[s(ie,null,{default:a(()=>[i("div",qt,[s(Ne,{ref_key:"treeRef",ref:u,"node-key":"id",data:l(D),"empty-text":"","highlight-current":!0,"expand-on-click-node":!1,"current-node-key":l(b),onNodeClick:l(ne)},{default:a(({data:t})=>[i("div",Kt,[e[16]||(e[16]=i("img",{class:"w-[20px] h-[16px] mr-3",src:St},null,-1)),i("span",Zt,[s(N,{content:t.name},null,8,["content"])]),t.id>0?(o(),x(Be,{key:0,"hide-on-click":!1},{dropdown:a(()=>[s(je,null,{default:a(()=>[s(W,{onConfirm:C=>l(ee)(C,t.id),size:"default",value:t.name,width:"400px",limit:20,"show-limit":"",teleported:""},{default:a(()=>[i("div",null,[s(oe,null,{default:a(()=>e[12]||(e[12]=[f(" 命名分组 ")])),_:1})])]),_:2},1032,["onConfirm","value"]),s(W,{onConfirm:C=>l(H)(C,t.id),size:"default",width:"400px",limit:20,"show-limit":"",teleported:""},{default:a(()=>[i("div",null,[s(oe,null,{default:a(()=>e[13]||(e[13]=[f(" 添加分组 ")])),_:1})])]),_:2},1032,["onConfirm"]),i("div",{onClick:C=>{var Ee;return l(te)(t.id,(Ee=t==null?void 0:t.children)==null?void 0:Ee.length)}},[s(oe,null,{default:a(()=>e[14]||(e[14]=[f("删除分组")])),_:1})],8,Ot)]),_:2},1024)]),default:a(()=>[e[15]||(e[15]=i("span",{class:"muted m-r-10"},"···",-1))]),_:2},1024)):v("",!0)])]),_:1},8,["data","current-node-key","onNodeClick"])])]),_:1})]),i("div",Qt,[s(W,{onConfirm:l(U),size:"default",width:"400px",limit:20,"show-limit":"",teleported:""},{default:a(()=>[s(h,null,{default:a(()=>e[17]||(e[17]=[f(" 添加分组 ")])),_:1})]),_:1},8,["onConfirm"])])]),i("div",Jt,[i("div",Xt,[i("div",Ht,[n.type=="image"?(o(),x(de,{key:0,class:"mr-3",data:{cid:l(b)},type:n.type,"show-progress":!0,onChange:l(j)},{default:a(()=>[s(h,{type:"primary"},{default:a(()=>e[18]||(e[18]=[f("本地上传")])),_:1})]),_:1},8,["data","type","onChange"])):v("",!0),n.type=="video"?(o(),x(de,{key:1,class:"mr-3",data:{cid:l(b)},type:n.type,"show-progress":!0,onAllSuccess:l(j)},{default:a(()=>[s(h,{type:"primary"},{default:a(()=>e[19]||(e[19]=[f("本地上传")])),_:1})]),_:1},8,["data","type","onAllSuccess"])):v("",!0),n.type=="file"?(o(),x(de,{key:2,class:"mr-3",data:{cid:l(b)},type:n.type,"show-progress":!0,onAllSuccess:l(j)},{default:a(()=>[s(h,{type:"primary"},{default:a(()=>e[20]||(e[20]=[f("本地上传")])),_:1})]),_:1},8,["data","type","onAllSuccess"])):v("",!0),n.mode=="page"?(o(),x(h,{key:3,disabled:!l(r).length,onClick:e[0]||(e[0]=Z(t=>l(q)(),["stop"]))},{default:a(()=>e[21]||(e[21]=[f(" 删除 ")])),_:1},8,["disabled"])):v("",!0),n.mode=="page"?(o(),x(xe,{key:4,class:"ml-3",onConfirm:l(ge),disabled:!l(r).length,title:"移动文件"},{trigger:a(()=>[s(h,{disabled:!l(r).length},{default:a(()=>e[22]||(e[22]=[f("移动")])),_:1},8,["disabled"])]),default:a(()=>[i("div",null,[e[23]||(e[23]=i("span",{class:"mr-5"},"移动文件至",-1)),s(ue,{modelValue:l(F),"onUpdate:modelValue":e[1]||(e[1]=t=>L(F)?F.value=t:null),placeholder:"请选择"},{default:a(()=>[(o(!0),p(T,null,Y(l(D),t=>(o(),p(T,{key:t.id},[t.id!==""?(o(),x(re,{key:0,label:t.name,value:t.id},null,8,["label","value"])):v("",!0)],64))),128))]),_:1},8,["modelValue"])])]),_:1},8,["onConfirm","disabled"])):v("",!0)]),s(ue,{modelValue:l(m).source,"onUpdate:modelValue":e[2]||(e[2]=t=>l(m).source=t),placeholder:"请选择文件来源",clearable:"",style:{"margin-right":"20px"},class:"w-50"},{default:a(()=>[(o(),p(T,null,Y(d,t=>s(re,{key:t.value,label:t.label,value:t.value},null,8,["label","value"])),64))]),_:1},8,["modelValue"]),s(We,{class:"w-60",placeholder:"请输入名称",modelValue:l(m).name,"onUpdate:modelValue":e[3]||(e[3]=t=>l(m).name=t),onKeyup:wt(l(j),["enter"])},{append:a(()=>[s(h,{onClick:l(j)},{icon:a(()=>[s(K,{name:"el-icon-Search"})]),_:1},8,["onClick"])]),_:1},8,["modelValue","onKeyup"]),i("div",el,[s(Se,{content:"列表视图",placement:"top"},{default:a(()=>[i("div",{class:ze(["list-icon",{select:l(I)=="table"}]),onClick:e[4]||(e[4]=t=>I.value="table")},[s(K,{name:"local-icon-list-2",size:18})],2)]),_:1}),s(Se,{content:"平铺视图",placement:"top"},{default:a(()=>[i("div",{class:ze(["list-icon",{select:l(I)=="normal"}]),onClick:e[5]||(e[5]=t=>I.value="normal")},[s(K,{name:"el-icon-Menu",size:18})],2)]),_:1})])]),n.mode=="page"?(o(),p("div",tl,[s(ce,{disabled:!l(V).lists.length,modelValue:l(E),"onUpdate:modelValue":e[6]||(e[6]=t=>L(E)?E.value=t:null),onChange:l(he),indeterminate:l(B)},{default:a(()=>e[24]||(e[24]=[f(" 当页全选 ")])),_:1},8,["disabled","modelValue","onChange","indeterminate"])])):v("",!0),i("div",ll,[l(V).lists.length?Q((o(),x(ie,{key:0},{default:a(()=>[i("ul",nl,[(o(!0),p(T,null,Y(l(V).lists,t=>(o(),p("li",{class:"file-item-wrap",key:t.id,style:Ie({width:n.fileSize})},[s(Ae,{onClose:C=>l(q)([t.id])},{default:a(()=>[s(pe,{uri:t.url,"file-size":n.fileSize,type:n.type,onClick:C=>l(se)(t)},{default:a(()=>[l(_e)(t.id)?(o(),p("div",sl,[s(K,{size:24,name:"el-icon-Check",color:"#fff"})])):v("",!0)]),_:2},1032,["uri","file-size","type","onClick"])]),_:2},1032,["onClose"]),s(N,{class:"mt-1",content:t.name},null,8,["content"]),i("div",al,[s(W,{onConfirm:C=>l(ke)(C,t.id),size:"default",value:t.name,width:"400px",limit:50,"show-limit":"",teleported:""},{default:a(()=>[s(h,{type:"primary",link:""},{default:a(()=>e[25]||(e[25]=[f(" 重命名 ")])),_:1})]),_:2},1032,["onConfirm","value"]),t.type===10||t.type===20?(o(),x(h,{key:0,type:"primary",link:"",onClick:C=>ae(t.url)},{default:a(()=>e[26]||(e[26]=[f(" 查看 ")])),_:2},1032,["onClick"])):v("",!0),t.type===10||t.type===20?(o(),x(h,{key:1,type:"primary",link:"",onClick:C=>Me(t.url),style:{"margin-left":"1px"}},{default:a(()=>e[27]||(e[27]=[f("地址")])),_:2},1032,["onClick"])):(o(),x(Ve,{key:2,type:"primary",underline:!1,style:{"margin-left":"25px"},href:t.url},{default:a(()=>e[28]||(e[28]=[f("下载")])),_:2},1032,["href"]))])],4))),128))])]),_:1},512)),[[ve,l(I)=="normal"]]):v("",!0),Q(s(Ge,{ref_key:"tableRef",ref:M,class:"mt-4",data:l(V).lists,width:"100%",height:"100%",size:"large",onRowClick:l(se)},{default:a(()=>[s(G,{width:"55"},{default:a(({row:t})=>[s(ce,{modelValue:l(_e)(t.id),onChange:C=>l(se)(t)},null,8,["modelValue","onChange"])]),_:1}),s(G,{label:"图片",width:"100"},{default:a(({row:t})=>[s(pe,{uri:t.url,"file-size":"50px",type:n.type},null,8,["uri","type"])]),_:1}),s(G,{label:"名称","min-width":"100","show-overflow-tooltip":""},{default:a(({row:t})=>[s(Ve,{onClick:Z(C=>ae(t.url),["stop"]),underline:!1},{default:a(()=>[f(fe(t.name),1)]),_:2},1032,["onClick"])]),_:1}),s(G,{prop:"create_time",label:"上传时间","min-width":"100"}),s(G,{label:"操作",width:"150",fixed:"right"},{default:a(({row:t})=>[i("div",ol,[s(W,{onConfirm:C=>l(ke)(C,t.id),size:"default",value:t.name,width:"400px",limit:50,"show-limit":"",teleported:""},{default:a(()=>[s(h,{type:"primary",link:""},{default:a(()=>e[29]||(e[29]=[f(" 重命名 ")])),_:1})]),_:2},1032,["onConfirm","value"])]),i("div",il,[s(h,{type:"primary",link:"",onClick:Z(C=>ae(t.url),["stop"])},{default:a(()=>e[30]||(e[30]=[f(" 查看 ")])),_:2},1032,["onClick"])]),i("div",dl,[s(h,{type:"primary",link:"",onClick:Z(C=>l(q)([t.id]),["stop"])},{default:a(()=>e[31]||(e[31]=[f(" 删除 ")])),_:2},1032,["onClick"])])]),_:1})]),_:1},8,["data","onRowClick"]),[[ve,l(I)=="table"]]),!l(V).loading&&!l(V).lists.length?(o(),p("div",rl," 暂无数据~ ")):v("",!0)]),i("div",ul,[i("div",cl,[n.mode=="page"?(o(),p(T,{key:0},[i("span",fl,[s(ce,{disabled:!l(V).lists.length,modelValue:l(E),"onUpdate:modelValue":e[7]||(e[7]=t=>L(E)?E.value=t:null),onChange:l(he),indeterminate:l(B)},{default:a(()=>e[32]||(e[32]=[f(" 当页全选 ")])),_:1},8,["disabled","modelValue","onChange","indeterminate"])]),s(h,{disabled:!l(r).length,onClick:e[8]||(e[8]=t=>l(q)())},{default:a(()=>e[33]||(e[33]=[f(" 删除 ")])),_:1},8,["disabled"]),s(xe,{class:"ml-3 inline",onConfirm:l(ge),disabled:!l(r).length,title:"移动文件"},{trigger:a(()=>[s(h,{disabled:!l(r).length},{default:a(()=>e[34]||(e[34]=[f("移动")])),_:1},8,["disabled"])]),default:a(()=>[i("div",null,[e[35]||(e[35]=i("span",{class:"mr-5"},"移动文件至",-1)),s(ue,{modelValue:l(F),"onUpdate:modelValue":e[9]||(e[9]=t=>L(F)?F.value=t:null),placeholder:"请选择"},{default:a(()=>[(o(!0),p(T,null,Y(l(D),t=>(o(),p(T,{key:t.id},[t.id!==""?(o(),x(re,{key:0,label:t.name,value:t.id},null,8,["label","value"])):v("",!0)],64))),128))]),_:1},8,["modelValue"])])]),_:1},8,["onConfirm","disabled"])],64)):v("",!0)]),s(Ye,{modelValue:l(V),"onUpdate:modelValue":e[10]||(e[10]=t=>L(V)?V.value=t:null),onChange:l(ye),layout:"total, prev, pager, next, jumper"},null,8,["modelValue","onChange"])])]),n.mode=="picker"?(o(),p("div",pl,[i("div",ml,[i("div",vl,[f(" 已选择 "+fe(l(r).length)+" ",1),l(A)?(o(),p("span",yl,"/"+fe(l(A)),1)):v("",!0)]),s(h,{type:"primary",link:"",onClick:l(Ce)},{default:a(()=>e[36]||(e[36]=[f("清空")])),_:1},8,["onClick"])]),i("div",gl,[s(ie,{class:"ls-scrollbar"},{default:a(()=>[i("ul",_l,[(o(!0),p(T,null,Y(l(r),t=>(o(),p("li",{class:"mb-4",key:t.id},[i("div",Cl,[s(Ae,{onClose:C=>l(Ue)(t.id)},{default:a(()=>[s(pe,{uri:t.url,"file-size":"100px",type:n.type},null,8,["uri","type"])]),_:2},1032,["onClose"])])]))),128))])]),_:1})])])):v("",!0),s(Nt,{modelValue:l(c),"onUpdate:modelValue":e[11]||(e[11]=t=>L(c)?c.value=t:null),url:l(_),type:n.type},null,8,["modelValue","url","type"]),i("input",{ref_key:"textCopys",ref:be,id:"textCopys",value:"",style:{opacity:"0",position:"absolute"}},null,512)])),[[qe,l(V).loading]])}}}),Pl=$e(hl,[["__scopeId","data-v-df4f59e2"]]);export{pe as F,Pl as _,Nt as a};
