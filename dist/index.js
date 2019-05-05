module.exports=function(e){var n=window.webpackHotUpdate;window.webpackHotUpdate=function(e,t){!function(e,n){if(!w[e]||!O[e])return;for(var t in O[e]=!1,n)Object.prototype.hasOwnProperty.call(n,t)&&(v[t]=n[t]);0==--m&&0===b&&D()}(e,t),n&&n(e,t)};var t,r=!0,o="694a99690b09fbe22be0",i=1e4,c={},s=[],a=[];function d(e){var n=P[e];if(!n)return H;var r=function(r){return n.hot.active?(P[r]?-1===P[r].parents.indexOf(e)&&P[r].parents.push(e):(s=[e],t=r),-1===n.children.indexOf(r)&&n.children.push(r)):(console.warn("[HMR] unexpected require("+r+") from disposed module "+e),s=[]),H(r)},o=function(e){return{configurable:!0,enumerable:!0,get:function(){return H[e]},set:function(n){H[e]=n}}};for(var i in H)Object.prototype.hasOwnProperty.call(H,i)&&"e"!==i&&"t"!==i&&Object.defineProperty(r,i,o(i));return r.e=function(e){return"ready"===p&&f("prepare"),b++,H.e(e).then(n,function(e){throw n(),e});function n(){b--,"prepare"===p&&(g[e]||x(e),0===b&&0===m&&D())}},r.t=function(e,n){return 1&n&&(e=r(e)),H.t(e,-2&n)},r}function l(e){var n={_acceptedDependencies:{},_declinedDependencies:{},_selfAccepted:!1,_selfDeclined:!1,_disposeHandlers:[],_main:t!==e,active:!0,accept:function(e,t){if(void 0===e)n._selfAccepted=!0;else if("function"==typeof e)n._selfAccepted=e;else if("object"==typeof e)for(var r=0;r<e.length;r++)n._acceptedDependencies[e[r]]=t||function(){};else n._acceptedDependencies[e]=t||function(){}},decline:function(e){if(void 0===e)n._selfDeclined=!0;else if("object"==typeof e)for(var t=0;t<e.length;t++)n._declinedDependencies[e[t]]=!0;else n._declinedDependencies[e]=!0},dispose:function(e){n._disposeHandlers.push(e)},addDisposeHandler:function(e){n._disposeHandlers.push(e)},removeDisposeHandler:function(e){var t=n._disposeHandlers.indexOf(e);t>=0&&n._disposeHandlers.splice(t,1)},check:j,apply:E,status:function(e){if(!e)return p;u.push(e)},addStatusHandler:function(e){u.push(e)},removeStatusHandler:function(e){var n=u.indexOf(e);n>=0&&u.splice(n,1)},data:c[e]};return t=void 0,n}var u=[],p="idle";function f(e){p=e;for(var n=0;n<u.length;n++)u[n].call(null,e)}var h,v,y,m=0,b=0,g={},O={},w={};function _(e){return+e+""===e?+e:e}function j(e){if("idle"!==p)throw new Error("check() is only allowed in idle status");return r=e,f("check"),(n=i,n=n||1e4,new Promise(function(e,t){if("undefined"==typeof XMLHttpRequest)return t(new Error("No browser support"));try{var r=new XMLHttpRequest,i=H.p+""+o+".hot-update.json";r.open("GET",i,!0),r.timeout=n,r.send(null)}catch(e){return t(e)}r.onreadystatechange=function(){if(4===r.readyState)if(0===r.status)t(new Error("Manifest request to "+i+" timed out."));else if(404===r.status)e();else if(200!==r.status&&304!==r.status)t(new Error("Manifest request to "+i+" failed."));else{try{var n=JSON.parse(r.responseText)}catch(e){return void t(e)}e(n)}}})).then(function(e){if(!e)return f("idle"),null;O={},g={},w=e.c,y=e.h,f("prepare");var n=new Promise(function(e,n){h={resolve:e,reject:n}});v={};return x(0),"prepare"===p&&0===b&&0===m&&D(),n});var n}function x(e){w[e]?(O[e]=!0,m++,function(e){var n=document.createElement("script");n.charset="utf-8",n.src=H.p+""+e+"."+o+".hot-update.js",document.head.appendChild(n)}(e)):g[e]=!0}function D(){f("ready");var e=h;if(h=null,e)if(r)Promise.resolve().then(function(){return E(r)}).then(function(n){e.resolve(n)},function(n){e.reject(n)});else{var n=[];for(var t in v)Object.prototype.hasOwnProperty.call(v,t)&&n.push(_(t));e.resolve(n)}}function E(n){if("ready"!==p)throw new Error("apply() is only allowed in ready status");var t,r,i,a,d;function l(e){for(var n=[e],t={},r=n.slice().map(function(e){return{chain:[e],id:e}});r.length>0;){var o=r.pop(),i=o.id,c=o.chain;if((a=P[i])&&!a.hot._selfAccepted){if(a.hot._selfDeclined)return{type:"self-declined",chain:c,moduleId:i};if(a.hot._main)return{type:"unaccepted",chain:c,moduleId:i};for(var s=0;s<a.parents.length;s++){var d=a.parents[s],l=P[d];if(l){if(l.hot._declinedDependencies[i])return{type:"declined",chain:c.concat([d]),moduleId:i,parentId:d};-1===n.indexOf(d)&&(l.hot._acceptedDependencies[i]?(t[d]||(t[d]=[]),u(t[d],[i])):(delete t[d],n.push(d),r.push({chain:c.concat([d]),id:d})))}}}}return{type:"accepted",moduleId:e,outdatedModules:n,outdatedDependencies:t}}function u(e,n){for(var t=0;t<n.length;t++){var r=n[t];-1===e.indexOf(r)&&e.push(r)}}n=n||{};var h={},m=[],b={},g=function(){console.warn("[HMR] unexpected require("+j.moduleId+") to disposed module")};for(var O in v)if(Object.prototype.hasOwnProperty.call(v,O)){var j;d=_(O);var x=!1,D=!1,E=!1,I="";switch((j=v[O]?l(d):{type:"disposed",moduleId:O}).chain&&(I="\nUpdate propagation: "+j.chain.join(" -> ")),j.type){case"self-declined":n.onDeclined&&n.onDeclined(j),n.ignoreDeclined||(x=new Error("Aborted because of self decline: "+j.moduleId+I));break;case"declined":n.onDeclined&&n.onDeclined(j),n.ignoreDeclined||(x=new Error("Aborted because of declined dependency: "+j.moduleId+" in "+j.parentId+I));break;case"unaccepted":n.onUnaccepted&&n.onUnaccepted(j),n.ignoreUnaccepted||(x=new Error("Aborted because "+d+" is not accepted"+I));break;case"accepted":n.onAccepted&&n.onAccepted(j),D=!0;break;case"disposed":n.onDisposed&&n.onDisposed(j),E=!0;break;default:throw new Error("Unexception type "+j.type)}if(x)return f("abort"),Promise.reject(x);if(D)for(d in b[d]=v[d],u(m,j.outdatedModules),j.outdatedDependencies)Object.prototype.hasOwnProperty.call(j.outdatedDependencies,d)&&(h[d]||(h[d]=[]),u(h[d],j.outdatedDependencies[d]));E&&(u(m,[j.moduleId]),b[d]=g)}var k,A=[];for(r=0;r<m.length;r++)d=m[r],P[d]&&P[d].hot._selfAccepted&&A.push({module:d,errorHandler:P[d].hot._selfAccepted});f("dispose"),Object.keys(w).forEach(function(e){!1===w[e]&&function(e){delete installedChunks[e]}(e)});for(var M,S,$=m.slice();$.length>0;)if(d=$.pop(),a=P[d]){var q={},U=a.hot._disposeHandlers;for(i=0;i<U.length;i++)(t=U[i])(q);for(c[d]=q,a.hot.active=!1,delete P[d],delete h[d],i=0;i<a.children.length;i++){var C=P[a.children[i]];C&&((k=C.parents.indexOf(d))>=0&&C.parents.splice(k,1))}}for(d in h)if(Object.prototype.hasOwnProperty.call(h,d)&&(a=P[d]))for(S=h[d],i=0;i<S.length;i++)M=S[i],(k=a.children.indexOf(M))>=0&&a.children.splice(k,1);for(d in f("apply"),o=y,b)Object.prototype.hasOwnProperty.call(b,d)&&(e[d]=b[d]);var B=null;for(d in h)if(Object.prototype.hasOwnProperty.call(h,d)&&(a=P[d])){S=h[d];var L=[];for(r=0;r<S.length;r++)if(M=S[r],t=a.hot._acceptedDependencies[M]){if(-1!==L.indexOf(t))continue;L.push(t)}for(r=0;r<L.length;r++){t=L[r];try{t(S)}catch(e){n.onErrored&&n.onErrored({type:"accept-errored",moduleId:d,dependencyId:S[r],error:e}),n.ignoreErrored||B||(B=e)}}}for(r=0;r<A.length;r++){var R=A[r];d=R.module,s=[d];try{H(d)}catch(e){if("function"==typeof R.errorHandler)try{R.errorHandler(e)}catch(t){n.onErrored&&n.onErrored({type:"self-accept-error-handler-errored",moduleId:d,error:t,originalError:e}),n.ignoreErrored||B||(B=t),B||(B=e)}else n.onErrored&&n.onErrored({type:"self-accept-errored",moduleId:d,error:e}),n.ignoreErrored||B||(B=e)}}return B?(f("fail"),Promise.reject(B)):(f("idle"),new Promise(function(e){e(m)}))}var P={};function H(n){if(P[n])return P[n].exports;var t=P[n]={i:n,l:!1,exports:{},hot:l(n),parents:(a=s,s=[],a),children:[]};return e[n].call(t.exports,t,t.exports,d(n)),t.l=!0,t.exports}return H.m=e,H.c=P,H.d=function(e,n,t){H.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},H.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},H.t=function(e,n){if(1&n&&(e=H(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(H.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)H.d(t,r,function(n){return e[n]}.bind(null,r));return t},H.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return H.d(n,"a",n),n},H.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},H.p="/dist",H.h=function(){return o},d("./src/components/index.tsx")(H.s="./src/components/index.tsx")}({"./node_modules/classnames/index.js":function(e,n,t){var r;
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
!function(){"use strict";var t={}.hasOwnProperty;function o(){for(var e=[],n=0;n<arguments.length;n++){var r=arguments[n];if(r){var i=typeof r;if("string"===i||"number"===i)e.push(r);else if(Array.isArray(r)&&r.length){var c=o.apply(null,r);c&&e.push(c)}else if("object"===i)for(var s in r)t.call(r,s)&&r[s]&&e.push(s)}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(r=function(){return o}.apply(n,[]))||(e.exports=r)}()},"./src/components/index.tsx":function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});const r=t("react"),o=t("react"),i=t("./node_modules/classnames/index.js");n.default=class extends o.Component{constructor(e){super(e),this.formatFields=(e=>{const{value:n,name:t,inputs:r}=e;let o={},i=0;for(let e=0;e<r.length;e++){let c=r[e].maxLength||r.length,s=i+c;o[`${t}${e}`]=n.substring(i,s),i+=c}return o}),this.handleBlur=(({target:e})=>{this.setState(n=>{const{name:t,value:r}=e;return Object.assign({},n,{[t]:r})},()=>{const{onBlur:e,name:n}=this.props,{state:t}=this;let r="";Object.keys(t).map(e=>{r+=t[e]}),e({name:n,value:r})})}),this.handleChange=(({target:e})=>{const{inputs:n}=this.props,{name:t,value:r}=e;this.setState({[t]:r});const o=parseInt(t.substring(t.length-1));if(r.length===n[o].maxLength){const e=document.querySelector(`input[name='${t.substring(0,t.length-1)}${o+1}']`);null!==e&&e.focus()}});const n=this.formatFields(e);this.state=Object.assign({},n)}componentDidUpdate(e){const{value:n}=this.props;if(e.value!==n){const e=this.formatFields(this.props);this.setState({stateValues:e})}}render(){const{inputs:e,error:n,name:t}=this.props,{state:o}=this,c={error:n,onChange:this.handleChange,onBlur:this.handleBlur};return r.createElement("div",null,e.map((e,s)=>r.createElement("input",Object.assign({key:`${t}-${s}`,name:`${t}${s}`,value:o[`${t}${s}`],className:i([`rmfi-input rmfi-input-${s}`,{"rmfi-error":n}])},e,c))))}}},react:function(e,n){e.exports=require("react")}});
//# sourceMappingURL=index.js.map