import{_ as h}from"./nuxt-link.5467fba6.js";import{_ as f}from"./items.vue.87b33caa.js";import{e as w,a as y}from"./empty_news.b3ecdf30.js";import{f as k,o as l,c as i,a as s,t as g,m as b,w as r,b as a,d as x,k as o,R as B,V as S,E as p,n as E,W as c,Y as N,Z as _}from"./entry.76736598.js";const v={class:"bg-white rounded-[8px]"},z={class:"flex items-center h-[60px] border-b border-br ml-5 pr-5"},C={class:"flex-1 flex min-w-0 mr-4 h-full"},T={class:"text-2xl truncate font-medium h-full border-b-2 border-tx-primary mt-[1px] flex items-center"},V={class:"px-5 pb-5"},L={key:1},R=k({__name:"card",props:{header:{type:String,default:""},link:{type:String,default:""},data:{type:Array,default:()=>[]},source:{type:String,default:"default"},onlyTitle:{type:Boolean,default:!0},titleLine:{type:Number,default:1},border:{type:Boolean,default:!0},imageSize:{type:String,default:"default"},showAuthor:{type:Boolean,default:!0},showDesc:{type:Boolean,default:!0},showClick:{type:Boolean,default:!0},showTime:{type:Boolean,default:!0},showSort:{type:Boolean,default:!0}},setup(e){return(n,A)=>{const u=h,m=f;return l(),i("div",v,[s("div",z,[s("div",C,[s("span",T,g(e.header),1)]),e.link?(l(),b(o(p),{key:0,class:"button",link:""},{default:r(()=>[a(u,{to:e.link,class:"flex"},{default:r(()=>[x(" 更多 "),a(o(B),null,{default:r(()=>[a(o(S))]),_:1})]),_:1},8,["to"])]),_:1})):E("",!0)]),e.data.length?c(n.$slots,"content",{key:0,data:e.data},()=>[s("div",V,[(l(!0),i(N,null,_(e.data,(t,d)=>c(n.$slots,"item",{key:t.id,item:t,index:d},()=>[a(m,{index:d,"show-sort":e.showSort,id:t.id,title:t.title,desc:t.desc,click:t.click,author:t.author,"create-time":t.create_time,image:t.image,"only-title":e.onlyTitle,"image-size":e.imageSize,"show-author":e.showAuthor,"show-desc":e.showDesc,"show-click":e.showClick,border:e.border,"title-line":e.titleLine,"show-time":e.showTime,source:e.source},null,8,["index","show-sort","id","title","desc","click","author","create-time","image","only-title","image-size","show-author","show-desc","show-click","border","title-line","show-time","source"])])),128))])]):(l(),i("div",L,[a(o(y),{image:o(w),description:"暂无资讯","image-size":250},null,8,["image"])]))])}}});export{R as _};