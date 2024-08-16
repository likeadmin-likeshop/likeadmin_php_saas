import{a as ne,r as re}from"./resize-detector.4e96b72b.js";import{t as ae,i as oe}from"./echarts.004f4e72.js";import{d as ie,s as T,E as S,ab as ue,b as O,l as se,w as U,m as q,f as ce,G as le,h as G,i as fe,u as pe,n as ve}from"./@vue.b52708da.js";var v=function(){return v=Object.assign||function(e){for(var o,r=1,l=arguments.length;r<l;r++)for(var s in o=arguments[r])Object.prototype.hasOwnProperty.call(o,s)&&(e[s]=o[s]);return e},v.apply(this,arguments)};var de=["getWidth","getHeight","getDom","getOption","resize","dispatchAction","convertToPixel","convertFromPixel","containPixel","getDataURL","getConnectedDataURL","appendData","clear","isDisposed","dispose"];function he(e){return o=Object.create(null),de.forEach(function(r){o[r]=function(l){return function(){for(var s=[],a=0;a<arguments.length;a++)s[a]=arguments[a];if(!e.value)throw new Error("ECharts is not initialized yet.");return e.value[l].apply(e.value,s)}}(r)}),o;var o}var ge={autoresize:[Boolean,Object]},me=/^on[^a-z]/,W=function(e){return me.test(e)};function k(e,o){var r=fe(e)?pe(e):e;return r&&typeof r=="object"&&"value"in r?r.value||o:r||o}var Oe="ecLoadingOptions",be={loading:Boolean,loadingOptions:Object},_=null,K="x-vue-echarts",Z=[],x=[];(function(e,o){if(e&&typeof document<"u"){var r,l=o.prepend===!0?"prepend":"append",s=o.singleTag===!0,a=typeof o.container=="string"?document.querySelector(o.container):document.getElementsByTagName("head")[0];if(s){var p=Z.indexOf(a);p===-1&&(p=Z.push(a)-1,x[p]={}),r=x[p]&&x[p][l]?x[p][l]:x[p][l]=j()}else r=j();e.charCodeAt(0)===65279&&(e=e.substring(1)),r.styleSheet?r.styleSheet.cssText+=e:r.appendChild(document.createTextNode(e))}function j(){var g=document.createElement("style");if(g.setAttribute("type","text/css"),o.attributes)for(var b=Object.keys(o.attributes),d=0;d<b.length;d++)g.setAttribute(b[d],o.attributes[b[d]]);var w=l==="prepend"?"afterbegin":"beforeend";return a.insertAdjacentElement(w,g),g}})(`x-vue-echarts{display:flex;flex-direction:column;width:100%;height:100%;min-width:0}
.vue-echarts-inner{flex-grow:1;min-width:0;width:auto!important;height:auto!important}
`,{});var ye=function(){if(_!=null)return _;if(typeof HTMLElement>"u"||typeof customElements>"u")return _=!1;try{new Function("tag",`class EChartsElement extends HTMLElement {
  __dispose = null;

  disconnectedCallback() {
    if (this.__dispose) {
      this.__dispose();
      this.__dispose = null;
    }
  }
}

if (customElements.get(tag) == null) {
  customElements.define(tag, EChartsElement);
}
`)(K)}catch{return _=!1}return _=!0}(),Ee="ecTheme",_e="ecInitOptions",xe="ecUpdateOptions",J=/(^&?~?!?)native:/,Ce=ie({name:"echarts",props:v(v({option:Object,theme:{type:[Object,String]},initOptions:Object,updateOptions:Object,group:String,manualUpdate:Boolean},ge),be),emits:{},inheritAttrs:!1,setup:function(e,o){var r=o.attrs,l=T(),s=T(),a=T(),p=T(),j=S(Ee,null),g=S(_e,null),b=S(xe,null),d=ue(e),w=d.autoresize,Q=d.manualUpdate,V=d.loading,X=d.loadingOptions,Y=O(function(){return p.value||e.option||null}),B=O(function(){return e.theme||k(j,{})}),H=O(function(){return e.initOptions||k(g,{})}),M=O(function(){return e.updateOptions||k(b,{})}),ee=O(function(){return function(n){var t={};for(var i in n)W(i)||(t[i]=n[i]);return t}(r)}),D={},L=se().proxy.$listeners,C={};function A(n){if(s.value){var t=a.value=oe(s.value,B.value,H.value);e.group&&(t.group=e.group),Object.keys(C).forEach(function(f){var u=C[f];if(u){var c=f.toLowerCase();c.charAt(0)==="~"&&(c=c.substring(1),u.__once__=!0);var y=t;if(c.indexOf("zr:")===0&&(y=t.getZr(),c=c.substring(3)),u.__once__){delete u.__once__;var m=u;u=function(){for(var E=[],h=0;h<arguments.length;h++)E[h]=arguments[h];m.apply(void 0,E),y.off(c,u)}}y.on(c,u)}}),w.value?ve(function(){t&&!t.isDisposed()&&t.resize(),i()}):i()}function i(){var f=n||Y.value;f&&t.setOption(f,M.value)}}function R(){a.value&&(a.value.dispose(),a.value=void 0)}L?Object.keys(L).forEach(function(n){J.test(n)?D[n.replace(J,"$1")]=L[n]:C[n]=L[n]}):Object.keys(r).filter(function(n){return W(n)}).forEach(function(n){var t=n.charAt(2).toLowerCase()+n.slice(3);if(t.indexOf("native:")!==0)t.substring(t.length-4)==="Once"&&(t="~".concat(t.substring(0,t.length-4))),C[t]=r[n];else{var i="on".concat(t.charAt(7).toUpperCase()).concat(t.slice(8));D[i]=r[n]}});var z=null;U(Q,function(n){typeof z=="function"&&(z(),z=null),n||(z=U(function(){return e.option},function(t,i){t&&(a.value?a.value.setOption(t,v({notMerge:t!==i},M.value)):A())},{deep:!0}))},{immediate:!0}),U([B,H],function(){R(),A()},{deep:!0}),q(function(){e.group&&a.value&&(a.value.group=e.group)});var te=he(a);return function(n,t,i){var f=S(Oe,{}),u=O(function(){return v(v({},k(f,{})),i==null?void 0:i.value)});q(function(){var c=n.value;c&&(t.value?c.showLoading(u.value):c.hideLoading())})}(a,V,X),function(n,t,i){var f=null;U([i,n,t],function(u,c,y){var m=u[0],E=u[1],h=u[2];if(m&&E&&h){var P=h===!0?{}:h,F=P.throttle,I=F===void 0?100:F,N=P.onResize,$=function(){E.resize(),N==null||N()};f=I?ae($,I):$,ne(m,f)}y(function(){m&&f&&re(m,f)})})}(a,w,s),ce(function(){A()}),le(function(){ye&&l.value?l.value.__dispose=R:R()}),v({chart:a,root:l,inner:s,setOption:function(n,t){e.manualUpdate&&(p.value=n),a.value?a.value.setOption(n,t||{}):A(n)},nonEventAttrs:ee,nativeListeners:D},te)},render:function(){var e=v(v({},this.nonEventAttrs),this.nativeListeners);return e.ref="root",e.class=e.class?["echarts"].concat(e.class):"echarts",G(K,e,[G("div",{ref:"inner",class:"vue-echarts-inner"})])}});export{Ce as H};
