import c from"./decoration-img.9132f8f5.js";import{d as i,b as s,o as p,c as m,a as u,X as l,u as d}from"./@vue.b52708da.js";const _={class:"banner mx-[10px] mt-[10px]"},f={class:"banner-image"},x=i({__name:"content",props:{content:{type:Object,default:()=>({})},styles:{type:Object,default:()=>({})}},setup(n){const o=n,e=s(()=>{var t;return((t=o.content.data)==null?void 0:t.filter(a=>a.is_show=="1"))||[]}),r=s(()=>Array.isArray(e.value)&&e.value[0]?e.value[0].image:"");return(t,a)=>(p(),m("div",_,[u("div",f,[l(c,{width:"100%",height:"100px",src:d(r),fit:"contain"},null,8,["src"])])]))}});export{x as _};
