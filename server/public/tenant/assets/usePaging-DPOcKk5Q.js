import{p as l,Z as p}from"./@vue-pHjCrgw6.js";function P(o){const{page:i=1,size:c=15,fetchFun:g,params:e={},fixedParams:r={},firstLoading:u=!1}=o,s=Object.assign({},l(e)),a=p({page:i,size:c,loading:u,count:0,lists:[],extend:{}}),n=()=>(a.loading=!0,g({page_no:a.page,page_size:a.size,...e,...r}).then(t=>(a.count=t==null?void 0:t.count,a.lists=t==null?void 0:t.lists,a.extend=t==null?void 0:t.extend,Promise.resolve(t))).catch(t=>Promise.reject(t)).finally(()=>{a.loading=!1}));return{pager:a,getLists:n,resetParams:()=>{Object.keys(s).forEach(t=>{e[t]=s[t]}),n()},resetPage:()=>{a.page=1,n()}}}export{P as u};
