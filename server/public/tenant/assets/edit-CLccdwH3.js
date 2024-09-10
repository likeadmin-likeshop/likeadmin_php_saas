import{_ as me}from"./index-HypnD1z1.js";import{N as re,I as se,B as pe,C as ie,l as _e,K as fe,F as be,O as ce,P as ve,L as Ve,G as ye,H as ge,Z as ke,h as Ue,m as we,D as Ee}from"./element-plus-BBKw480Q.js";import{d as S,b as H,o as p,c as b,U as w,aa as q,T as K,u as n,r as Z,Z as M,s as W,V as e,M as t,i as qe,a as d,L as U,S as f,R as P,n as De,p as J,w as Re}from"./@vue-pHjCrgw6.js";import{f as Q,b as $e}from"./index-BjfF9UyA.js";import{l as X}from"./lodash-BtPWuHkK.js";import{m as xe}from"./menu-CZ4XJt4L.js";import{d as Ce}from"./dict-CxAmWbqm.js";import{t as Ie,g as Te}from"./code-O2Cgb1Ej.js";import{u as Be}from"./useDictOptions-C46u-8Dk.js";import{_ as Ne}from"./relations-add.vue_vue_type_script_setup_true_lang-BdUlda6p.js";import{u as Pe,a as Se}from"./vue-router-DAYuzRuG.js";import"./lodash-es-R-kYiKr_.js";import"./async-validator-DKvM95Vc.js";import"./@element-plus-DMfktWgm.js";import"./dayjs-CMfar2R3.js";import"./balanced-match-mNcR6oh4.js";import"./@ctrl-r5W6hzzQ.js";import"./normalize-wheel-es-B6fDCfyv.js";import"./@popperjs-D9SI2xQl.js";import"./nprogress-Cgf5DU8x.js";import"./pinia-CJRVDLHa.js";import"./axios-C-n2IhIP.js";import"./@vueuse-djZFs-WH.js";import"./css-color-function-rJvg8h-6.js";import"./color-B0v57BL7.js";import"./clone-CuIhj1wH.js";import"./color-convert-BGgJB5UM.js";import"./color-name-BQ5IbGbl.js";import"./color-string-BhgG7-8u.js";import"./ms-CzQ2E3wO.js";import"./vue-clipboard3-8CNoFg4V.js";import"./clipboard-Dch_ozqB.js";import"./echarts-BR_QmBtV.js";import"./tslib-BDyQ-Jie.js";import"./zrender-B-CeXLwU.js";import"./highlight.js-D5uP1KGk.js";import"./@highlightjs-D4DIzBxc.js";import"./index-CYqo2c2l.js";const Ae=S({__name:"index",props:{options:{default:()=>[]},value:{},config:{default:()=>({label:"name",value:"value"})}},setup(A){const c=A,I=H(()=>c.value!==null&&typeof c.value<"u"?Array.isArray(c.value)?c.value:String(c.value).split(","):[]),D=H(()=>c.options.filter(y=>I.value.includes(y[c.config.value])));return(y,T)=>(p(),b("div",null,[(p(!0),b(w,null,q(n(D),(o,E)=>(p(),b("span",{key:E},K(E!=0?"、":"")+K(o[y.config.label]),1))),128))]))}}),Oe={class:"code-edit"},Fe={class:"w-80"},Le={class:"w-80"},je={class:"w-80"},ze={class:"w-80"},Ge={class:"w-80"},He={class:"w-80"},Ke={class:"w-80"},Ze={class:"w-80"},Me={class:"mt-4"},We=S({name:"tableEdit"}),Bl=S({...We,setup(A){const c=Pe(),I=Se(),D=Z("column"),y=Z(!1),T=[{name:"一对一",value:"has_one"},{name:"一对多",value:"has_many"}],o=M({id:"",table_name:"",table_comment:"",author:"",remark:"",template_type:0,generate_type:0,module_name:"",class_dir:"",class_comment:"",table_column:[],menu:{pid:0,name:"",type:0},tree:{tree_id:0,tree_pid:0,tree_name:0},delete:{name:"",type:0},relations:[]});let E=0;const O=W(),B=W(),F=M({table_name:[{required:!0,message:"请输入表名称"}],table_comment:[{required:!0,message:"请输入表描述"}],module_name:[{required:!0,message:"请输入模块名"}],generate_type:[{required:!0,trigger:"change"}],template_type:[{required:!0,trigger:"change"}],"menu.pid":[{required:!0,message:"请选择父级菜单"}],"menu.name":[{required:!0,message:"请输入菜单名称"}],"delete.type":[{required:!0,trigger:"change"}],"delete.name":[{required:!0,message:"请选择删除字段"}]}),L=async(i,l,g)=>{var v,_;y.value=!0,await De(),l&&g!==void 0&&((v=B.value)==null||v.setFormData(l),E=g),(_=B.value)==null||_.open(i)},Y=i=>{const l=X.cloneDeep(J(i));o.relations.push(l)},h=async i=>{const l=X.cloneDeep(J(i));console.log(E),o.relations.splice(E,1,l)},ee=i=>{o.relations.splice(i,1)},le=async()=>{const i=await Ie({id:c.query.id});Object.keys(o).forEach(l=>{o[l]=i[l]}),Re(()=>o.generate_type,l=>{l==1&&Q.confirm("生成到模块方式如遇同名文件会覆盖旧文件，确定要选择此方式吗？").catch(()=>{o.generate_type=0})})},{optionsData:j}=Be({dict_type:{api:Ce},menu:{api:xe,transformData(i){const l={id:0,name:"顶级",children:[]};return l.children=i,[l]}}}),ae=async()=>{var i,l;try{await((i=O.value)==null?void 0:i.validate()),await Te(o),I.back()}catch(g){for(const v in g)Object.keys(F).includes(v)&&Q.msgError((l=g[v][0])==null?void 0:l.message)}};return le(),(i,l)=>{const g=re,v=se,_=pe,r=ie,$=_e,s=fe,R=be,m=ce,k=ve,z=Ve,V=ye,x=ge,te=ke,oe=$e,C=Ue,G=Ae,ne=we,ue=Ee,de=me;return p(),b("div",Oe,[e(v,{class:"!border-none",shadow:"never"},{default:t(()=>[e(g,{content:"编辑数据表",onBack:l[0]||(l[0]=a=>i.$router.back())})]),_:1}),e(v,{class:"mt-4 !border-none",shadow:"never"},{default:t(()=>[e(ue,{ref_key:"formRef",ref:O,class:"ls-form",model:n(o),"label-width":"100px",rules:n(F)},{default:t(()=>[e(ne,{modelValue:n(D),"onUpdate:modelValue":l[20]||(l[20]=a=>qe(D)?D.value=a:null)},{default:t(()=>[e($,{label:"基础信息",name:"base"},{default:t(()=>[e(r,{label:"表名称",prop:"table_name"},{default:t(()=>[d("div",Fe,[e(_,{modelValue:n(o).table_name,"onUpdate:modelValue":l[1]||(l[1]=a=>n(o).table_name=a),placeholder:"请输入表名称",clearable:""},null,8,["modelValue"])])]),_:1}),e(r,{label:"表描述",prop:"table_comment"},{default:t(()=>[d("div",Le,[e(_,{modelValue:n(o).table_comment,"onUpdate:modelValue":l[2]||(l[2]=a=>n(o).table_comment=a),placeholder:"请输入表描述",clearable:""},null,8,["modelValue"])])]),_:1}),e(r,{label:"作者"},{default:t(()=>[d("div",je,[e(_,{modelValue:n(o).author,"onUpdate:modelValue":l[3]||(l[3]=a=>n(o).author=a),clearable:""},null,8,["modelValue"])])]),_:1}),e(r,{label:"备注"},{default:t(()=>[d("div",ze,[e(_,{modelValue:n(o).remark,"onUpdate:modelValue":l[4]||(l[4]=a=>n(o).remark=a),class:"w-full",type:"textarea",autosize:{minRows:4,maxRows:4},maxlength:"200","show-word-limit":"",clearable:""},null,8,["modelValue"])])]),_:1})]),_:1}),e($,{label:"字段管理",name:"column"},{default:t(()=>[e(z,{data:n(o).table_column},{default:t(()=>[e(s,{label:"字段列名",prop:"column_name"}),e(s,{label:"字段描述",prop:"column_comment","min-width":"120"},{default:t(({row:a})=>[e(_,{modelValue:a.column_comment,"onUpdate:modelValue":u=>a.column_comment=u,clearable:""},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),e(s,{label:"物理类型",prop:"column_type"}),e(s,{label:"必填",width:"80"},{default:t(({row:a})=>[e(R,{modelValue:a.is_required,"onUpdate:modelValue":u=>a.is_required=u,"true-value":1,"false-value":0},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),e(s,{label:"插入",width:"80"},{default:t(({row:a})=>[e(R,{modelValue:a.is_insert,"onUpdate:modelValue":u=>a.is_insert=u,"true-value":1,"false-value":0},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),e(s,{label:"编辑",width:"80"},{default:t(({row:a})=>[e(R,{modelValue:a.is_update,"onUpdate:modelValue":u=>a.is_update=u,"true-value":1,"false-value":0},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),e(s,{label:"列表",width:"80"},{default:t(({row:a})=>[e(R,{modelValue:a.is_lists,"onUpdate:modelValue":u=>a.is_lists=u,"true-value":1,"false-value":0},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),e(s,{label:"查询",width:"80"},{default:t(({row:a})=>[e(R,{modelValue:a.is_query,"onUpdate:modelValue":u=>a.is_query=u,"true-value":1,"false-value":0},null,8,["modelValue","onUpdate:modelValue"])]),_:1}),e(s,{label:"查询方式"},{default:t(({row:a})=>[e(k,{modelValue:a.query_type,"onUpdate:modelValue":u=>a.query_type=u},{default:t(()=>[e(m,{label:"=",value:"="}),e(m,{label:"!=",value:"!="}),e(m,{label:">",value:">"}),e(m,{label:">=",value:">="}),e(m,{label:"<",value:"<"}),e(m,{label:"<=",value:"<="}),e(m,{label:"LIKE",value:"like"}),e(m,{label:"BETWEEN",value:"between"})]),_:2},1032,["modelValue","onUpdate:modelValue"])]),_:1}),e(s,{label:"显示类型","min-width":"120"},{default:t(({row:a})=>[e(k,{modelValue:a.view_type,"onUpdate:modelValue":u=>a.view_type=u},{default:t(()=>[e(m,{label:"文本框",value:"input"}),e(m,{label:"文本域",value:"textarea"}),e(m,{label:"下拉框",value:"select"}),e(m,{label:"单选框",value:"radio"}),e(m,{label:"复选框",value:"checkbox"}),e(m,{label:"日期控件",value:"datetime"}),e(m,{label:"图片选择控件",value:"imageSelect"}),e(m,{label:"富文本控件",value:"editor"})]),_:2},1032,["modelValue","onUpdate:modelValue"])]),_:1}),e(s,{label:"字典类型","min-width":"120"},{default:t(({row:a})=>[e(k,{modelValue:a.dict_type,"onUpdate:modelValue":u=>a.dict_type=u,clearable:"",disabled:!(a.view_type=="select"||a.view_type=="radio"||a.view_type=="checkbox"),placeholder:"字典类型"},{default:t(()=>[(p(!0),b(w,null,q(n(j).dict_type,(u,N)=>(p(),U(m,{key:N,label:u.name,value:u.type,disabled:!u.status},null,8,["label","value","disabled"]))),128))]),_:2},1032,["modelValue","onUpdate:modelValue","disabled"])]),_:1})]),_:1},8,["data"])]),_:1}),e($,{label:"生成配置",name:"config"},{default:t(()=>[e(r,{label:"模板类型",prop:"template_type"},{default:t(()=>[e(x,{modelValue:n(o).template_type,"onUpdate:modelValue":l[5]||(l[5]=a=>n(o).template_type=a)},{default:t(()=>[e(V,{value:0},{default:t(()=>l[21]||(l[21]=[f("单表（curd）")])),_:1}),e(V,{value:1},{default:t(()=>l[22]||(l[22]=[f("树表（curd）")])),_:1})]),_:1},8,["modelValue"])]),_:1}),e(r,{label:"删除类型",prop:"delete.type"},{default:t(()=>[e(x,{modelValue:n(o).delete.type,"onUpdate:modelValue":l[6]||(l[6]=a=>n(o).delete.type=a)},{default:t(()=>[e(V,{value:0},{default:t(()=>l[23]||(l[23]=[f("物理删除")])),_:1}),e(V,{value:1},{default:t(()=>l[24]||(l[24]=[f("软删除")])),_:1})]),_:1},8,["modelValue"])]),_:1}),n(o).delete.type==1?(p(),U(r,{key:0,label:"删除字段",prop:"delete.name"},{default:t(()=>[e(k,{class:"w-80",modelValue:n(o).delete.name,"onUpdate:modelValue":l[7]||(l[7]=a=>n(o).delete.name=a),clearable:""},{default:t(()=>[(p(!0),b(w,null,q(n(o).table_column,a=>(p(),U(m,{key:a.id,value:a.column_name,label:`${a.column_name}：${a.column_comment}`},null,8,["value","label"]))),128))]),_:1},8,["modelValue"])]),_:1})):P("",!0),n(o).template_type==1?(p(),b(w,{key:1},[e(r,{label:"树表ID",prop:"treePrimary"},{default:t(()=>[d("div",null,[e(k,{class:"w-80",modelValue:n(o).tree.tree_id,"onUpdate:modelValue":l[8]||(l[8]=a=>n(o).tree.tree_id=a),clearable:""},{default:t(()=>[(p(!0),b(w,null,q(n(o).table_column,a=>(p(),U(m,{key:a.id,value:a.column_name,label:`${a.column_name}：${a.column_comment}`},null,8,["value","label"]))),128))]),_:1},8,["modelValue"]),l[25]||(l[25]=d("div",{class:"form-tips"},"指定树表的主要ID，一般为主键",-1))])]),_:1}),e(r,{label:"树表父ID",prop:"treeParent"},{default:t(()=>[d("div",null,[e(k,{class:"w-80",modelValue:n(o).tree.tree_pid,"onUpdate:modelValue":l[9]||(l[9]=a=>n(o).tree.tree_pid=a),clearable:""},{default:t(()=>[(p(!0),b(w,null,q(n(o).table_column,a=>(p(),U(m,{key:a.id,value:a.column_name,label:`${a.column_name}：${a.column_comment}`},null,8,["value","label"]))),128))]),_:1},8,["modelValue"]),l[26]||(l[26]=d("div",{class:"form-tips"},"指定树表的父ID，比如：parent_id",-1))])]),_:1}),e(r,{label:"树名称",prop:"treeName"},{default:t(()=>[e(k,{class:"w-80",modelValue:n(o).tree.tree_name,"onUpdate:modelValue":l[10]||(l[10]=a=>n(o).tree.tree_name=a),clearable:""},{default:t(()=>[(p(!0),b(w,null,q(n(o).table_column,a=>(p(),U(m,{key:a.id,value:a.column_name,label:`${a.column_name}：${a.column_comment}`},null,8,["value","label"]))),128))]),_:1},8,["modelValue"])]),_:1})],64)):P("",!0),e(r,{label:"类描述"},{default:t(()=>[d("div",Ge,[d("div",null,[e(_,{modelValue:n(o).class_comment,"onUpdate:modelValue":l[11]||(l[11]=a=>n(o).class_comment=a),placeholder:"请输入文件描述",clearable:""},null,8,["modelValue"])]),l[27]||(l[27]=d("div",{class:"form-tips"},[d("div",null," 例：填写test,生成文件描述为test控制器(test逻辑/test模型) ")],-1))])]),_:1}),e(r,{label:"生成方式",prop:"generate_type"},{default:t(()=>[e(x,{modelValue:n(o).generate_type,"onUpdate:modelValue":l[12]||(l[12]=a=>n(o).generate_type=a)},{default:t(()=>[e(V,{value:0},{default:t(()=>l[28]||(l[28]=[f("压缩包下载")])),_:1}),e(V,{value:1},{default:t(()=>l[29]||(l[29]=[f("生成到模块")])),_:1})]),_:1},8,["modelValue"])]),_:1}),e(r,{label:"模块名",prop:"module_name"},{default:t(()=>[d("div",He,[e(_,{modelValue:n(o).module_name,"onUpdate:modelValue":l[13]||(l[13]=a=>n(o).module_name=a),placeholder:"请输入模块名",clearable:""},null,8,["modelValue"]),l[30]||(l[30]=d("div",{class:"form-tips"},"生成文件所在模块",-1))])]),_:1}),e(r,{label:"类目录"},{default:t(()=>[d("div",Ke,[d("div",null,[e(_,{modelValue:n(o).class_dir,"onUpdate:modelValue":l[14]||(l[14]=a=>n(o).class_dir=a),placeholder:"请输入文件所在目录",clearable:""},null,8,["modelValue"])]),l[31]||(l[31]=d("div",{class:"form-tips"},[d("div",null," 例：填写test,则在app/模块名/controller/test下生成控制器 ")],-1))])]),_:1}),e(r,{label:"父级菜单",prop:"menu.pid"},{default:t(()=>[e(te,{class:"w-80",modelValue:n(o).menu.pid,"onUpdate:modelValue":l[15]||(l[15]=a=>n(o).menu.pid=a),data:n(j).menu,clearable:"","node-key":"id",props:{label:"name"},"default-expand-all":"",placeholder:"请选择父级菜单","check-strictly":""},null,8,["modelValue","data"])]),_:1}),e(r,{label:"菜单名称",prop:"menu.name"},{default:t(()=>[d("div",Ze,[e(_,{modelValue:n(o).menu.name,"onUpdate:modelValue":l[16]||(l[16]=a=>n(o).menu.name=a),placeholder:"请输入菜单名称",clearable:""},null,8,["modelValue"])])]),_:1}),e(r,{label:"菜单构建",prop:"menu.type",required:""},{default:t(()=>[d("div",null,[e(x,{modelValue:n(o).menu.type,"onUpdate:modelValue":l[17]||(l[17]=a=>n(o).menu.type=a)},{default:t(()=>[e(V,{value:1},{default:t(()=>l[32]||(l[32]=[f("自动构建")])),_:1}),e(V,{value:0},{default:t(()=>l[33]||(l[33]=[f("手动添加")])),_:1})]),_:1},8,["modelValue"]),l[34]||(l[34]=d("div",{class:"form-tips"}," 自动构建：自动执行生成菜单sql。手动添加：自行添加菜单。 ",-1))])]),_:1})]),_:1}),e($,{label:"关联配置",name:"relations"},{default:t(()=>[e(C,{type:"primary",onClick:l[18]||(l[18]=a=>L("add"))},{icon:t(()=>[e(oe,{name:"el-icon-Plus"})]),default:t(()=>[l[35]||(l[35]=f(" 新增关联 "))]),_:1}),d("div",Me,[e(z,{data:n(o).relations,size:"small"},{default:t(()=>[e(s,{prop:"type",label:"关联类型"},{default:t(({row:a})=>[e(G,{value:a.type,options:T},null,8,["value"])]),_:1}),e(s,{prop:"name",label:"关联名称"}),e(s,{prop:"model",label:"关联模型"}),e(s,{prop:"local_key",label:"关联键"},{default:t(({row:a})=>[e(G,{value:a.local_key,options:n(o).table_column,config:{label:"column_comment",value:"column_name"}},null,8,["value","options"])]),_:1}),e(s,{prop:"foreign_key",label:"外键"}),e(s,{label:"操作"},{default:t(({row:a,$index:u})=>[e(C,{link:"",type:"primary",onClick:N=>L("edit",a,u)},{default:t(()=>l[36]||(l[36]=[f(" 编辑 ")])),_:2},1032,["onClick"]),e(C,{link:"",type:"danger",onClick:N=>ee(u)},{default:t(()=>l[37]||(l[37]=[f(" 删除 ")])),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"]),n(y)?(p(),U(Ne,{key:0,column:n(o).table_column,types:T,ref_key:"editRef",ref:B,onAdd:Y,onEdit:h,onClose:l[19]||(l[19]=a=>y.value=!1)},null,8,["column"])):P("",!0)])]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["model","rules"])]),_:1}),e(de,null,{default:t(()=>[e(C,{type:"primary",onClick:ae},{default:t(()=>l[38]||(l[38]=[f("保存")])),_:1})]),_:1})])}}});export{Bl as default};
