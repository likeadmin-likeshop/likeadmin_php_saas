import{s as B,h as T,l as N,m as S,Q as U}from"./element-plus-B9ALq7eR.js";import{f as d,b as $}from"./index-Di9-CjgU.js";import{u as j}from"./vue-clipboard3-8CNoFg4V.js";import{d as D,r as L,b as F,ah as M,o as c,c as m,V as t,M as a,u as i,i as u,U as P,aa as Q,L as R,a as p,S as q}from"./@vue-TMcuEboY.js";const z={class:"code-preview"},A={class:"flex",style:{height:"50vh"}},O=D({__name:"code-preview",props:{modelValue:{type:Boolean},code:{}},emits:["update:modelValue"],setup(_,{emit:f}){const b=_,V=f,{toClipboard:h}=j(),n=L("index0"),g=async l=>{try{await h(l),d.msgSuccess("复制成功")}catch{d.msgError("复制失败")}},s=F({get(){return b.modelValue},set(l){V("update:modelValue",l)}});return(l,e)=>{const v=M("highlightjs"),y=B,C=$,k=T,x=N,E=S,w=U;return c(),m("div",z,[t(w,{modelValue:i(s),"onUpdate:modelValue":e[1]||(e[1]=o=>u(s)?s.value=o:null),width:"900px",title:"代码预览"},{default:a(()=>[t(E,{modelValue:i(n),"onUpdate:modelValue":e[0]||(e[0]=o=>u(n)?n.value=o:null)},{default:a(()=>[(c(!0),m(P,null,Q(l.code,(o,r)=>(c(),R(x,{label:o.name,name:`index${r}`,key:r},{default:a(()=>[p("div",A,[t(y,{class:"flex-1"},{default:a(()=>[t(v,{autodetect:"",code:o.content},null,8,["code"])]),_:2},1024),p("div",null,[t(k,{onClick:G=>g(o.content),type:"primary",link:""},{icon:a(()=>[t(C,{name:"el-icon-CopyDocument"})]),default:a(()=>[e[2]||(e[2]=q(" 复制 "))]),_:2},1032,["onClick"])])])]),_:2},1032,["label","name"]))),128))]),_:1},8,["modelValue"])]),_:1},8,["modelValue"])])}}});export{O as _};
