!function(t,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define("CdrInput",[],n):"object"==typeof exports?exports.CdrInput=n():t.CdrInput=n()}(this,function(){return function(t){function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}var e={};return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:r})},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},n.p="/",n(n.s=30)}([function(t,n){var e=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=e)},function(t,n,e){var r=e(6),i=e(20),o=e(11),u=Object.defineProperty;n.f=e(2)?Object.defineProperty:function(t,n,e){if(r(t),n=o(n,!0),r(e),i)try{return u(t,n,e)}catch(t){}if("get"in e||"set"in e)throw TypeError("Accessors not supported!");return"value"in e&&(t[n]=e.value),t}},function(t,n,e){t.exports=!e(8)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,n){var e={}.hasOwnProperty;t.exports=function(t,n){return e.call(t,n)}},function(t,n,e){var r=e(47),i=e(48);t.exports=function(t){return r(i(t))}},function(t,n){var e=t.exports={version:"2.5.1"};"number"==typeof __e&&(__e=e)},function(t,n,e){var r=e(7);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,n){t.exports=function(t){try{return!!t()}catch(t){return!0}}},function(t,n){var e=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++e+r).toString(36))}},function(t,n,e){var r=e(1),i=e(12);t.exports=e(2)?function(t,n,e){return r.f(t,n,i(1,e))}:function(t,n,e){return t[n]=e,t}},function(t,n,e){var r=e(7);t.exports=function(t,n){if(!r(t))return t;var e,i;if(n&&"function"==typeof(e=t.toString)&&!r(i=e.call(t)))return i;if("function"==typeof(e=t.valueOf)&&!r(i=e.call(t)))return i;if(!n&&"function"==typeof(e=t.toString)&&!r(i=e.call(t)))return i;throw TypeError("Can't convert object to primitive value")}},function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},function(t,n,e){var r=e(0),i="__core-js_shared__",o=r[i]||(r[i]={});t.exports=function(t){return o[t]||(o[t]={})}},function(t,n,e){var r=e(13)("wks"),i=e(9),o=e(0).Symbol,u="function"==typeof o;(t.exports=function(t){return r[t]||(r[t]=u&&o[t]||(u?o:i)("Symbol."+t))}).store=r},function(t,n,e){var r=e(0),i=e(5),o=e(23),u=e(22),s=e(1).f;t.exports=function(t){var n=i.Symbol||(i.Symbol=o?{}:r.Symbol||{});"_"==t.charAt(0)||t in n||s(n,t,{value:u.f(t)})}},function(t,n,e){var r=e(24),i=e(17);t.exports=Object.keys||function(t){return r(t,i)}},function(t,n){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,n){n.f={}.propertyIsEnumerable},function(t,n,e){var r=e(0),i=e(5),o=e(38),u=e(10),s="prototype",a=function(t,n,e){var c,f,l,p=t&a.F,d=t&a.G,h=t&a.S,v=t&a.P,b=t&a.B,m=t&a.W,y=d?i:i[n]||(i[n]={}),g=y[s],_=d?r:h?r[n]:(r[n]||{})[s];d&&(e=n);for(c in e)(f=!p&&_&&void 0!==_[c])&&c in y||(l=f?_[c]:e[c],y[c]=d&&"function"!=typeof _[c]?e[c]:b&&f?o(l,r):m&&_[c]==l?function(t){var n=function(n,e,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(n);case 2:return new t(n,e)}return new t(n,e,r)}return t.apply(this,arguments)};return n[s]=t[s],n}(l):v&&"function"==typeof l?o(Function.call,l):l,v&&((y.virtual||(y.virtual={}))[c]=l,t&a.R&&g&&!g[c]&&u(g,c,l)))};a.F=1,a.G=2,a.S=4,a.P=8,a.B=16,a.W=32,a.U=64,a.R=128,t.exports=a},function(t,n,e){t.exports=!e(2)&&!e(8)(function(){return 7!=Object.defineProperty(e(21)("div"),"a",{get:function(){return 7}}).a})},function(t,n,e){var r=e(7),i=e(0).document,o=r(i)&&r(i.createElement);t.exports=function(t){return o?i.createElement(t):{}}},function(t,n,e){n.f=e(14)},function(t,n){t.exports=!0},function(t,n,e){var r=e(3),i=e(4),o=e(49)(!1),u=e(27)("IE_PROTO");t.exports=function(t,n){var e,s=i(t),a=0,c=[];for(e in s)e!=u&&r(s,e)&&c.push(e);for(;n.length>a;)r(s,e=n[a++])&&(~o(c,e)||c.push(e));return c}},function(t,n){var e={}.toString;t.exports=function(t){return e.call(t).slice(8,-1)}},function(t,n){var e=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:e)(t)}},function(t,n,e){var r=e(13)("keys"),i=e(9);t.exports=function(t){return r[t]||(r[t]=i(t))}},function(t,n){n.f=Object.getOwnPropertySymbols},function(t,n,e){var r=e(24),i=e(17).concat("length","prototype");n.f=Object.getOwnPropertyNames||function(t){return r(t,i)}},function(t,n,e){"use strict";function r(t){t.component("cdr-input",i.a)}Object.defineProperty(n,"__esModule",{value:!0});var i=e(31);e.d(n,"CdrInput",function(){return i.a}),"undefined"!=typeof window&&window.Vue&&window.Vue.use(r),n.default=r},function(t,n,e){"use strict";var r=e(34),i=e(66),o=function(t){e(32)},u=e(33)(r.a,i.a,!1,o,null,null);n.a=u.exports},function(t,n){},function(t,n){t.exports=function(t,n,e,r,i,o){var u,s=t=t||{},a=typeof t.default;"object"!==a&&"function"!==a||(u=t,s=t.default);var c="function"==typeof s?s.options:s;n&&(c.render=n.render,c.staticRenderFns=n.staticRenderFns,c._compiled=!0),e&&(c.functional=!0),i&&(c._scopeId=i);var f;if(o?(f=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),r&&r.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(o)},c._ssrRegister=f):r&&(f=r),f){var l=c.functional,p=l?c.render:c.beforeCreate;l?(c._injectStyles=f,c.render=function(t,n){return f.call(n),p(t,n)}):c.beforeCreate=p?[].concat(p,f):[f]}return{esModule:u,exports:s,options:c}}},function(t,n,e){"use strict";var r=e(35),i=e.n(r),o=e(40),u=e.n(o),s=e(61),a=e(62),c=e(63),f=e.n(c),l=e(64),p=e.n(l),d=e(65),h=e.n(d);n.a={name:"CdrInput",mixins:[a.a],inheritAttrs:!1,props:{id:String,label:{type:String,required:!0},hideLabel:Boolean,multiLine:Boolean,pattern:String,patternError:String,feedback:Boolean,type:{type:String,default:"text"},rules:{type:Array,default:function(){return[]}},debounce:{type:Boolean,required:!1,default:!1},disabled:Boolean,required:Boolean,immediateValidate:Boolean,value:{type:[String,Number,Boolean,Object,Array,u.a,Function],required:!1}},data:function(){return{errors:[],currentValue:this.value,pristine:!0,touched:!1,valid:!1,focused:!1,state:""}},computed:{inputId:function(){return this.id?this.id:this._uid},messagesId:function(){return"err"+this._uid},baseClass:function(){return"cdr-input"},labelClass:function(){return{"cdr-label":!0,"cdr-label--error":this.isErr,"cdr-label--disabled":this.disabled}},inputClass:function(){return{"cdr-input":!0,"cdr-input--multiline":this.multiLine,"cdr-input--error":this.isErr,"cdr-input--warn":this.isWarn,"cdr-input--preicon":this.$slots.preicon}},inputWrapClass:function(){return{"cdr-input-wrap":!0,"cdr-input-wrap--actions":this.$slots.pre||this.$slots.post}},validationIconClass:function(){return{"cdr-input-wrap__icon":!0,"cdr-input-wrap__icon--error":this.isErr,"cdr-input-wrap__icon--warn":this.isWarn,"cdr-input-wrap__icon--valid":this.isValid}},messageClass:function(){return{"cdr-input-messages__notification":!0,"cdr-input-messages__notification--error":this.isErr,"cdr-input-messages__notification--warn":this.isWarn}},getIcon:function(){var t="";return this.isErr?t=p.a:this.isValid?t=f.a:this.isWarn&&(t=h.a),t},debounceVal:function(){return!1===this.debounce?0:i()(this.debounce)||""===this.debounce||!0===this.debounce?500:this.debounce},isErr:function(){return"error"===this.state},isWarn:function(){return"warn"===this.state},isValid:function(){return"valid"===this.state}},watch:{focused:function(t){this.touched=!0,t&&this.$emit("change",t)},value:function(t){this.setCurrentValue(t),this.validate()}},mounted:function(){var t=this;if(this.pattern){var n=new RegExp(this.pattern);this.rules.push(function(e){var r={};return n.test(e)?r.state="valid":(r.state="error",r.message=t.patternError||""),r})}this.required&&this.rules.push(function(n){var e={};return t.touched&&!t.focused&&""===n&&(e.state="warn",e.message="This field is required"),e}),this.immediateValidate&&this.validate(!0)},methods:{onInput:function(t){this.pristine=!1;var n=t.target.value;this.$emit("input",n),this.setCurrentValue(n)},onBlur:function(t){var n=this;this.validate(!0),this.$nextTick(function(){n.focused=!1}),this.$emit("blur",t)},onFocus:function(t){this.focused=!0,this.$emit("focus",t)},onPaste:function(t){this.validate(!0),this.$emit("paste",t)},setCurrentValue:function(t){t!==this.currentValue&&(this.currentValue=t)},validate:function(){var t=this,n=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(this.rules.length>0){var e=n?0:this.debounceVal;Object(s.a)(function(){t.errors=[],t.valid=!1,t.rules.forEach(function(n){var e=n(t.currentValue);e.state=e.state?e.state:t.state,"valid"===e.state?t.state=e.state:"warn"===e.state?(t.state=e.state,t.errors.push(e.message)):(t.state=e.state,e.message&&t.errors.push(e.message))})},e)()}}}}},function(t,n,e){t.exports={default:e(36),__esModule:!0}},function(t,n,e){e(37),t.exports=e(5).Number.isNaN},function(t,n,e){var r=e(19);r(r.S,"Number",{isNaN:function(t){return t!=t}})},function(t,n,e){var r=e(39);t.exports=function(t,n,e){if(r(t),void 0===n)return t;switch(e){case 1:return function(e){return t.call(n,e)};case 2:return function(e,r){return t.call(n,e,r)};case 3:return function(e,r,i){return t.call(n,e,r,i)}}return function(){return t.apply(n,arguments)}}},function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,n,e){t.exports={default:e(41),__esModule:!0}},function(t,n,e){e(42),e(58),e(59),e(60),t.exports=e(5).Symbol},function(t,n,e){"use strict";var r=e(0),i=e(3),o=e(2),u=e(19),s=e(43),a=e(44).KEY,c=e(8),f=e(13),l=e(45),p=e(9),d=e(14),h=e(22),v=e(15),b=e(46),m=e(52),y=e(6),g=e(4),_=e(11),w=e(12),x=e(53),S=e(56),O=e(57),E=e(1),C=e(16),j=O.f,P=E.f,I=S.f,M=r.Symbol,V=r.JSON,F=V&&V.stringify,N="prototype",T=d("_hidden"),$=d("toPrimitive"),B={}.propertyIsEnumerable,L=f("symbol-registry"),W=f("symbols"),k=f("op-symbols"),q=Object[N],R="function"==typeof M,A=r.QObject,z=!A||!A[N]||!A[N].findChild,D=o&&c(function(){return 7!=x(P({},"a",{get:function(){return P(this,"a",{value:7}).a}})).a})?function(t,n,e){var r=j(q,n);r&&delete q[n],P(t,n,e),r&&t!==q&&P(q,n,r)}:P,J=function(t){var n=W[t]=x(M[N]);return n._k=t,n},G=R&&"symbol"==typeof M.iterator?function(t){return"symbol"==typeof t}:function(t){return t instanceof M},K=function(t,n,e){return t===q&&K(k,n,e),y(t),n=_(n,!0),y(e),i(W,n)?(e.enumerable?(i(t,T)&&t[T][n]&&(t[T][n]=!1),e=x(e,{enumerable:w(0,!1)})):(i(t,T)||P(t,T,w(1,{})),t[T][n]=!0),D(t,n,e)):P(t,n,e)},U=function(t,n){y(t);for(var e,r=b(n=g(n)),i=0,o=r.length;o>i;)K(t,e=r[i++],n[e]);return t},H=function(t){var n=B.call(this,t=_(t,!0));return!(this===q&&i(W,t)&&!i(k,t))&&(!(n||!i(this,t)||!i(W,t)||i(this,T)&&this[T][t])||n)},X=function(t,n){if(t=g(t),n=_(n,!0),t!==q||!i(W,n)||i(k,n)){var e=j(t,n);return!e||!i(W,n)||i(t,T)&&t[T][n]||(e.enumerable=!0),e}},Y=function(t){for(var n,e=I(g(t)),r=[],o=0;e.length>o;)i(W,n=e[o++])||n==T||n==a||r.push(n);return r},Q=function(t){for(var n,e=t===q,r=I(e?k:g(t)),o=[],u=0;r.length>u;)!i(W,n=r[u++])||e&&!i(q,n)||o.push(W[n]);return o};R||(s((M=function(){if(this instanceof M)throw TypeError("Symbol is not a constructor!");var t=p(arguments.length>0?arguments[0]:void 0),n=function(e){this===q&&n.call(k,e),i(this,T)&&i(this[T],t)&&(this[T][t]=!1),D(this,t,w(1,e))};return o&&z&&D(q,t,{configurable:!0,set:n}),J(t)})[N],"toString",function(){return this._k}),O.f=X,E.f=K,e(29).f=S.f=Y,e(18).f=H,e(28).f=Q,o&&!e(23)&&s(q,"propertyIsEnumerable",H,!0),h.f=function(t){return J(d(t))}),u(u.G+u.W+u.F*!R,{Symbol:M});for(var Z="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),tt=0;Z.length>tt;)d(Z[tt++]);for(var nt=C(d.store),et=0;nt.length>et;)v(nt[et++]);u(u.S+u.F*!R,"Symbol",{for:function(t){return i(L,t+="")?L[t]:L[t]=M(t)},keyFor:function(t){if(!G(t))throw TypeError(t+" is not a symbol!");for(var n in L)if(L[n]===t)return n},useSetter:function(){z=!0},useSimple:function(){z=!1}}),u(u.S+u.F*!R,"Object",{create:function(t,n){return void 0===n?x(t):U(x(t),n)},defineProperty:K,defineProperties:U,getOwnPropertyDescriptor:X,getOwnPropertyNames:Y,getOwnPropertySymbols:Q}),V&&u(u.S+u.F*(!R||c(function(){var t=M();return"[null]"!=F([t])||"{}"!=F({a:t})||"{}"!=F(Object(t))})),"JSON",{stringify:function(t){if(void 0!==t&&!G(t)){for(var n,e,r=[t],i=1;arguments.length>i;)r.push(arguments[i++]);return"function"==typeof(n=r[1])&&(e=n),!e&&m(n)||(n=function(t,n){if(e&&(n=e.call(this,t,n)),!G(n))return n}),r[1]=n,F.apply(V,r)}}}),M[N][$]||e(10)(M[N],$,M[N].valueOf),l(M,"Symbol"),l(Math,"Math",!0),l(r.JSON,"JSON",!0)},function(t,n,e){t.exports=e(10)},function(t,n,e){var r=e(9)("meta"),i=e(7),o=e(3),u=e(1).f,s=0,a=Object.isExtensible||function(){return!0},c=!e(8)(function(){return a(Object.preventExtensions({}))}),f=function(t){u(t,r,{value:{i:"O"+ ++s,w:{}}})},l=t.exports={KEY:r,NEED:!1,fastKey:function(t,n){if(!i(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!o(t,r)){if(!a(t))return"F";if(!n)return"E";f(t)}return t[r].i},getWeak:function(t,n){if(!o(t,r)){if(!a(t))return!0;if(!n)return!1;f(t)}return t[r].w},onFreeze:function(t){return c&&l.NEED&&a(t)&&!o(t,r)&&f(t),t}}},function(t,n,e){var r=e(1).f,i=e(3),o=e(14)("toStringTag");t.exports=function(t,n,e){t&&!i(t=e?t:t.prototype,o)&&r(t,o,{configurable:!0,value:n})}},function(t,n,e){var r=e(16),i=e(28),o=e(18);t.exports=function(t){var n=r(t),e=i.f;if(e)for(var u,s=e(t),a=o.f,c=0;s.length>c;)a.call(t,u=s[c++])&&n.push(u);return n}},function(t,n,e){var r=e(25);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},function(t,n){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},function(t,n,e){var r=e(4),i=e(50),o=e(51);t.exports=function(t){return function(n,e,u){var s,a=r(n),c=i(a.length),f=o(u,c);if(t&&e!=e){for(;c>f;)if((s=a[f++])!=s)return!0}else for(;c>f;f++)if((t||f in a)&&a[f]===e)return t||f||0;return!t&&-1}}},function(t,n,e){var r=e(26),i=Math.min;t.exports=function(t){return t>0?i(r(t),9007199254740991):0}},function(t,n,e){var r=e(26),i=Math.max,o=Math.min;t.exports=function(t,n){return(t=r(t))<0?i(t+n,0):o(t,n)}},function(t,n,e){var r=e(25);t.exports=Array.isArray||function(t){return"Array"==r(t)}},function(t,n,e){var r=e(6),i=e(54),o=e(17),u=e(27)("IE_PROTO"),s=function(){},a="prototype",c=function(){var t,n=e(21)("iframe"),r=o.length;for(n.style.display="none",e(55).appendChild(n),n.src="javascript:",(t=n.contentWindow.document).open(),t.write("<script>document.F=Object<\/script>"),t.close(),c=t.F;r--;)delete c[a][o[r]];return c()};t.exports=Object.create||function(t,n){var e;return null!==t?(s[a]=r(t),e=new s,s[a]=null,e[u]=t):e=c(),void 0===n?e:i(e,n)}},function(t,n,e){var r=e(1),i=e(6),o=e(16);t.exports=e(2)?Object.defineProperties:function(t,n){i(t);for(var e,u=o(n),s=u.length,a=0;s>a;)r.f(t,e=u[a++],n[e]);return t}},function(t,n,e){var r=e(0).document;t.exports=r&&r.documentElement},function(t,n,e){var r=e(4),i=e(29).f,o={}.toString,u="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];t.exports.f=function(t){return u&&"[object Window]"==o.call(t)?function(t){try{return i(t)}catch(t){return u.slice()}}(t):i(r(t))}},function(t,n,e){var r=e(18),i=e(12),o=e(4),u=e(11),s=e(3),a=e(20),c=Object.getOwnPropertyDescriptor;n.f=e(2)?c:function(t,n){if(t=o(t),n=u(n,!0),a)try{return c(t,n)}catch(t){}if(s(t,n))return i(!r.f.call(t,n),t[n])}},function(t,n){},function(t,n,e){e(15)("asyncIterator")},function(t,n,e){e(15)("observable")},function(t,n,e){"use strict";n.a=function(t,n){var e=void 0;return function(){for(var r=arguments.length,i=Array(r),o=0;o<r;o++)i[o]=arguments[o];var u=this;clearTimeout(e),e=setTimeout(function(){return t.apply(u,i)},n)}}},function(t,n,e){"use strict";n.a={props:{modifier:String},computed:{modifierClass:function(){var t=this.baseClass,n=this.modifier?this.modifier.split(" "):[],e="";return this.theme||(e+=""+t,n.forEach(function(n){e+=" "+t+"--"+n+" "})),e}}}},function(t,n){t.exports='<svg viewBox="0 0 16 14" xmlns="http://www.w3.org/2000/svg"><path d="M5.67 13.67l10.1-12.03c.35-.42.3-1.05-.13-1.4-.42-.36-1.05-.3-1.4.12l-9.3 11.08-3.17-3.77c-.36-.43-1-.48-1.4-.13-.44.36-.5 1-.14 1.4l3.88 4.63c.2.26.5.43.84.43.3 0 .56-.13.74-.33z"/></svg>'},function(t,n){t.exports='<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 20C4.48 20 0 15.52 0 10S4.48 0 10 0s10 4.48 10 10-4.48 10-10 10zm1.4-10l3.3-3.3c.4-.38.4-1 0-1.4-.4-.4-1.02-.4-1.4 0L10 8.6 6.7 5.3c-.38-.4-1.02-.4-1.4 0-.4.4-.4 1.02 0 1.4L8.58 10l-3.3 3.3c-.38.38-.38 1.02 0 1.4.4.4 1.04.4 1.43 0l3.3-3.28 3.3 3.3c.38.38 1 .38 1.4 0 .4-.4.4-1.04 0-1.43L11.4 10z"/></svg>'},function(t,n){t.exports='<svg viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg"><path d="M9.894.558l8.002 15.995c.247.494.047 1.094-.447 1.34-.14.07-.294.107-.45.107H1c-.552 0-1-.448-1-1 0-.155.037-.308.106-.447L8.106.558c.247-.494.847-.694 1.34-.447.195.1.352.255.448.45V.557zM8.78 4.5h-.03c-.552.017-.986.477-.97 1.03l.19 6.5c.017.54.46.97 1 .97h.06c.54 0 .983-.43 1-.97l.19-6.5V5.5c0-.552-.448-1-1-1h-.44zm.22 12c.69 0 1.25-.56 1.25-1.25S9.69 14 9 14s-1.25.56-1.25 1.25S8.31 16.5 9 16.5z"/></svg>'},function(t,n,e){"use strict";var r={render:function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"cdr-input-container"},[t.hideLabel?t._e():e("label",{ref:"label",class:t.labelClass,attrs:{for:t.inputId}},[t._v(t._s(t.label)),t.required?e("span",[t._v("*")]):t._e()]),t._v(" "),e("div",{class:[t.inputWrapClass]},[t.multiLine?e("textarea",t._b({ref:"input",class:[t.inputClass,t.modifierClass],attrs:{id:t.inputId,required:t.required,disabled:t.disabled,"aria-label":t.hideLabel?t.label:null,"aria-describedby":t.errors.length?t.messagesId:null},domProps:{value:t.currentValue},on:{blur:t.onBlur,input:t.onInput,focus:t.onFocus,paste:t.onPaste}},"textarea",t.$attrs,!1)):e("input",t._b({ref:"input",class:[t.inputClass,t.modifierClass],attrs:{type:t.type,id:t.inputId,required:t.required,disabled:t.disabled,"aria-label":t.hideLabel?t.label:null,"aria-describedby":t.errors.length?t.messagesId:null},domProps:{value:t.currentValue},on:{blur:t.onBlur,input:t.onInput,focus:t.onFocus,paste:t.onPaste}},"input",t.$attrs,!1)),t._v(" "),t.$slots.preicon?e("span",{staticClass:"cdr-input__pre-icon",attrs:{"aria-hidden":"true"}},[t._t("preicon")],2):t._e(),t._v(" "),t.feedback?e("span",{ref:"icon",class:t.validationIconClass,domProps:{innerHTML:t._s(t.getIcon)}}):t._e()]),t._v(" "),e("transition-group",{ref:"messages",staticClass:"cdr-input-messages",attrs:{id:t.messagesId,name:"cdr-animated-errors",tag:"div"}},t._l(t.errors,function(n){return e("div",{key:n,ref:"error",refInFor:!0,class:t.messageClass,attrs:{error:n}},[t._v(t._s(n))])}))],1)},staticRenderFns:[]};n.a=r}])});