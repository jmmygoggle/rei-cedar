!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("CdrAnchor",[],t):"object"==typeof exports?exports.CdrAnchor=t():e.CdrAnchor=t()}(this,function(){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/",t(t.s=0)}([function(e,t,n){"use strict";function r(e){e.component("cdr-a",o.a)}Object.defineProperty(t,"__esModule",{value:!0});var o=n(1);n.d(t,"CdrA",function(){return o.a}),"undefined"!=typeof window&&window.Vue&&window.Vue.use(r),t.default=r},function(e,t,n){"use strict";var r=n(4),o=n(6),i=function(e){n(2)},s=n(3)(r.a,o.a,!1,i,null,null);t.a=s.exports},function(e,t){},function(e,t){e.exports=function(e,t,n,r,o,i){var s,u=e=e||{},c=typeof e.default;"object"!==c&&"function"!==c||(s=e,u=e.default);var f="function"==typeof u?u.options:u;t&&(f.render=t.render,f.staticRenderFns=t.staticRenderFns,f._compiled=!0),n&&(f.functional=!0),o&&(f._scopeId=o);var a;if(i?(a=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),r&&r.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(i)},f._ssrRegister=a):r&&(a=r),a){var d=f.functional,l=d?f.render:f.beforeCreate;d?(f._injectStyles=a,f.render=function(e,t){return a.call(t),l(e,t)}):f.beforeCreate=l?[].concat(l,a):[a]}return{esModule:s,exports:u,options:f}}},function(e,t,n){"use strict";var r=n(5);t.a={name:"CdrA",mixins:[r.a],props:{target:String,rel:String},computed:{baseClass:function(){return(this.modifier?this.modifier.split(" "):[]).indexOf("button")>=0?"cdr-button":"cdr-link"},newRel:function(){return"_blank"===this.target?this.rel||"noopener noreferrer":this.rel}}}},function(e,t,n){"use strict";t.a={props:{modifier:String},computed:{modifierClass:function(){var e=this.baseClass,t=this.modifier?this.modifier.split(" "):[],n="";return this.theme||(n+=""+e,t.forEach(function(t){n+=" "+e+"--"+t+" "})),n}}}},function(e,t,n){"use strict";var r={render:function(){var e=this.$createElement;return(this._self._c||e)("a",{class:this.modifierClass,attrs:{target:this.target,rel:this.newRel}},[this._t("default")],2)},staticRenderFns:[]};t.a=r}])});