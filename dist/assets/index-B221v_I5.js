var tv=Object.defineProperty;var nv=(t,e,n)=>e in t?tv(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var aa=(t,e,n)=>nv(t,typeof e!="symbol"?e+"":e,n);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function iv(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var $m={exports:{}},Jl={},qm={exports:{}},Qe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var so=Symbol.for("react.element"),rv=Symbol.for("react.portal"),sv=Symbol.for("react.fragment"),av=Symbol.for("react.strict_mode"),ov=Symbol.for("react.profiler"),lv=Symbol.for("react.provider"),cv=Symbol.for("react.context"),uv=Symbol.for("react.forward_ref"),dv=Symbol.for("react.suspense"),fv=Symbol.for("react.memo"),hv=Symbol.for("react.lazy"),Kf=Symbol.iterator;function pv(t){return t===null||typeof t!="object"?null:(t=Kf&&t[Kf]||t["@@iterator"],typeof t=="function"?t:null)}var Km={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Zm=Object.assign,Qm={};function Qs(t,e,n){this.props=t,this.context=e,this.refs=Qm,this.updater=n||Km}Qs.prototype.isReactComponent={};Qs.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Qs.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Jm(){}Jm.prototype=Qs.prototype;function Bd(t,e,n){this.props=t,this.context=e,this.refs=Qm,this.updater=n||Km}var Hd=Bd.prototype=new Jm;Hd.constructor=Bd;Zm(Hd,Qs.prototype);Hd.isPureReactComponent=!0;var Zf=Array.isArray,e0=Object.prototype.hasOwnProperty,Gd={current:null},t0={key:!0,ref:!0,__self:!0,__source:!0};function n0(t,e,n){var i,r={},s=null,a=null;if(e!=null)for(i in e.ref!==void 0&&(a=e.ref),e.key!==void 0&&(s=""+e.key),e)e0.call(e,i)&&!t0.hasOwnProperty(i)&&(r[i]=e[i]);var o=arguments.length-2;if(o===1)r.children=n;else if(1<o){for(var l=Array(o),c=0;c<o;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in o=t.defaultProps,o)r[i]===void 0&&(r[i]=o[i]);return{$$typeof:so,type:t,key:s,ref:a,props:r,_owner:Gd.current}}function mv(t,e){return{$$typeof:so,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Vd(t){return typeof t=="object"&&t!==null&&t.$$typeof===so}function gv(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Qf=/\/+/g;function Mc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?gv(""+t.key):e.toString(36)}function al(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var a=!1;if(t===null)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(t.$$typeof){case so:case rv:a=!0}}if(a)return a=t,r=r(a),t=i===""?"."+Mc(a,0):i,Zf(r)?(n="",t!=null&&(n=t.replace(Qf,"$&/")+"/"),al(r,e,n,"",function(c){return c})):r!=null&&(Vd(r)&&(r=mv(r,n+(!r.key||a&&a.key===r.key?"":(""+r.key).replace(Qf,"$&/")+"/")+t)),e.push(r)),1;if(a=0,i=i===""?".":i+":",Zf(t))for(var o=0;o<t.length;o++){s=t[o];var l=i+Mc(s,o);a+=al(s,e,n,l,r)}else if(l=pv(t),typeof l=="function")for(t=l.call(t),o=0;!(s=t.next()).done;)s=s.value,l=i+Mc(s,o++),a+=al(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return a}function go(t,e,n){if(t==null)return t;var i=[],r=0;return al(t,i,"","",function(s){return e.call(n,s,r++)}),i}function xv(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var an={current:null},ol={transition:null},vv={ReactCurrentDispatcher:an,ReactCurrentBatchConfig:ol,ReactCurrentOwner:Gd};function i0(){throw Error("act(...) is not supported in production builds of React.")}Qe.Children={map:go,forEach:function(t,e,n){go(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return go(t,function(){e++}),e},toArray:function(t){return go(t,function(e){return e})||[]},only:function(t){if(!Vd(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Qe.Component=Qs;Qe.Fragment=sv;Qe.Profiler=ov;Qe.PureComponent=Bd;Qe.StrictMode=av;Qe.Suspense=dv;Qe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=vv;Qe.act=i0;Qe.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=Zm({},t.props),r=t.key,s=t.ref,a=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,a=Gd.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var o=t.type.defaultProps;for(l in e)e0.call(e,l)&&!t0.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&o!==void 0?o[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){o=Array(l);for(var c=0;c<l;c++)o[c]=arguments[c+2];i.children=o}return{$$typeof:so,type:t.type,key:r,ref:s,props:i,_owner:a}};Qe.createContext=function(t){return t={$$typeof:cv,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:lv,_context:t},t.Consumer=t};Qe.createElement=n0;Qe.createFactory=function(t){var e=n0.bind(null,t);return e.type=t,e};Qe.createRef=function(){return{current:null}};Qe.forwardRef=function(t){return{$$typeof:uv,render:t}};Qe.isValidElement=Vd;Qe.lazy=function(t){return{$$typeof:hv,_payload:{_status:-1,_result:t},_init:xv}};Qe.memo=function(t,e){return{$$typeof:fv,type:t,compare:e===void 0?null:e}};Qe.startTransition=function(t){var e=ol.transition;ol.transition={};try{t()}finally{ol.transition=e}};Qe.unstable_act=i0;Qe.useCallback=function(t,e){return an.current.useCallback(t,e)};Qe.useContext=function(t){return an.current.useContext(t)};Qe.useDebugValue=function(){};Qe.useDeferredValue=function(t){return an.current.useDeferredValue(t)};Qe.useEffect=function(t,e){return an.current.useEffect(t,e)};Qe.useId=function(){return an.current.useId()};Qe.useImperativeHandle=function(t,e,n){return an.current.useImperativeHandle(t,e,n)};Qe.useInsertionEffect=function(t,e){return an.current.useInsertionEffect(t,e)};Qe.useLayoutEffect=function(t,e){return an.current.useLayoutEffect(t,e)};Qe.useMemo=function(t,e){return an.current.useMemo(t,e)};Qe.useReducer=function(t,e,n){return an.current.useReducer(t,e,n)};Qe.useRef=function(t){return an.current.useRef(t)};Qe.useState=function(t){return an.current.useState(t)};Qe.useSyncExternalStore=function(t,e,n){return an.current.useSyncExternalStore(t,e,n)};Qe.useTransition=function(){return an.current.useTransition()};Qe.version="18.3.1";qm.exports=Qe;var me=qm.exports;const _v=iv(me);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yv=me,Sv=Symbol.for("react.element"),Mv=Symbol.for("react.fragment"),Ev=Object.prototype.hasOwnProperty,wv=yv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Tv={key:!0,ref:!0,__self:!0,__source:!0};function r0(t,e,n){var i,r={},s=null,a=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(a=e.ref);for(i in e)Ev.call(e,i)&&!Tv.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:Sv,type:t,key:s,ref:a,props:r,_owner:wv.current}}Jl.Fragment=Mv;Jl.jsx=r0;Jl.jsxs=r0;$m.exports=Jl;var g=$m.exports,Lu={},s0={exports:{}},En={},a0={exports:{}},o0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(N,B){var F=N.length;N.push(B);e:for(;0<F;){var te=F-1>>>1,ae=N[te];if(0<r(ae,B))N[te]=B,N[F]=ae,F=te;else break e}}function n(N){return N.length===0?null:N[0]}function i(N){if(N.length===0)return null;var B=N[0],F=N.pop();if(F!==B){N[0]=F;e:for(var te=0,ae=N.length,Ae=ae>>>1;te<Ae;){var O=2*(te+1)-1,J=N[O],re=O+1,de=N[re];if(0>r(J,F))re<ae&&0>r(de,J)?(N[te]=de,N[re]=F,te=re):(N[te]=J,N[O]=F,te=O);else if(re<ae&&0>r(de,F))N[te]=de,N[re]=F,te=re;else break e}}return B}function r(N,B){var F=N.sortIndex-B.sortIndex;return F!==0?F:N.id-B.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var a=Date,o=a.now();t.unstable_now=function(){return a.now()-o}}var l=[],c=[],d=1,h=null,f=3,m=!1,_=!1,M=!1,p=typeof setTimeout=="function"?setTimeout:null,u=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x(N){for(var B=n(c);B!==null;){if(B.callback===null)i(c);else if(B.startTime<=N)i(c),B.sortIndex=B.expirationTime,e(l,B);else break;B=n(c)}}function E(N){if(M=!1,x(N),!_)if(n(l)!==null)_=!0,z(P);else{var B=n(c);B!==null&&W(E,B.startTime-N)}}function P(N,B){_=!1,M&&(M=!1,u(D),D=-1),m=!0;var F=f;try{for(x(B),h=n(l);h!==null&&(!(h.expirationTime>B)||N&&!C());){var te=h.callback;if(typeof te=="function"){h.callback=null,f=h.priorityLevel;var ae=te(h.expirationTime<=B);B=t.unstable_now(),typeof ae=="function"?h.callback=ae:h===n(l)&&i(l),x(B)}else i(l);h=n(l)}if(h!==null)var Ae=!0;else{var O=n(c);O!==null&&W(E,O.startTime-B),Ae=!1}return Ae}finally{h=null,f=F,m=!1}}var A=!1,w=null,D=-1,$=5,S=-1;function C(){return!(t.unstable_now()-S<$)}function K(){if(w!==null){var N=t.unstable_now();S=N;var B=!0;try{B=w(!0,N)}finally{B?Q():(A=!1,w=null)}}else A=!1}var Q;if(typeof v=="function")Q=function(){v(K)};else if(typeof MessageChannel<"u"){var I=new MessageChannel,q=I.port2;I.port1.onmessage=K,Q=function(){q.postMessage(null)}}else Q=function(){p(K,0)};function z(N){w=N,A||(A=!0,Q())}function W(N,B){D=p(function(){N(t.unstable_now())},B)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(N){N.callback=null},t.unstable_continueExecution=function(){_||m||(_=!0,z(P))},t.unstable_forceFrameRate=function(N){0>N||125<N?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):$=0<N?Math.floor(1e3/N):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(N){switch(f){case 1:case 2:case 3:var B=3;break;default:B=f}var F=f;f=B;try{return N()}finally{f=F}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(N,B){switch(N){case 1:case 2:case 3:case 4:case 5:break;default:N=3}var F=f;f=N;try{return B()}finally{f=F}},t.unstable_scheduleCallback=function(N,B,F){var te=t.unstable_now();switch(typeof F=="object"&&F!==null?(F=F.delay,F=typeof F=="number"&&0<F?te+F:te):F=te,N){case 1:var ae=-1;break;case 2:ae=250;break;case 5:ae=1073741823;break;case 4:ae=1e4;break;default:ae=5e3}return ae=F+ae,N={id:d++,callback:B,priorityLevel:N,startTime:F,expirationTime:ae,sortIndex:-1},F>te?(N.sortIndex=F,e(c,N),n(l)===null&&N===n(c)&&(M?(u(D),D=-1):M=!0,W(E,F-te))):(N.sortIndex=ae,e(l,N),_||m||(_=!0,z(P))),N},t.unstable_shouldYield=C,t.unstable_wrapCallback=function(N){var B=f;return function(){var F=f;f=B;try{return N.apply(this,arguments)}finally{f=F}}}})(o0);a0.exports=o0;var bv=a0.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Av=me,Mn=bv;function le(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var l0=new Set,Ha={};function Br(t,e){Bs(t,e),Bs(t+"Capture",e)}function Bs(t,e){for(Ha[t]=e,t=0;t<e.length;t++)l0.add(e[t])}var Ai=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Du=Object.prototype.hasOwnProperty,Cv=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Jf={},eh={};function Rv(t){return Du.call(eh,t)?!0:Du.call(Jf,t)?!1:Cv.test(t)?eh[t]=!0:(Jf[t]=!0,!1)}function Pv(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Nv(t,e,n,i){if(e===null||typeof e>"u"||Pv(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function on(t,e,n,i,r,s,a){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=a}var jt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){jt[t]=new on(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];jt[e]=new on(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){jt[t]=new on(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){jt[t]=new on(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){jt[t]=new on(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){jt[t]=new on(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){jt[t]=new on(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){jt[t]=new on(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){jt[t]=new on(t,5,!1,t.toLowerCase(),null,!1,!1)});var jd=/[\-:]([a-z])/g;function Wd(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(jd,Wd);jt[e]=new on(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(jd,Wd);jt[e]=new on(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(jd,Wd);jt[e]=new on(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){jt[t]=new on(t,1,!1,t.toLowerCase(),null,!1,!1)});jt.xlinkHref=new on("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){jt[t]=new on(t,1,!1,t.toLowerCase(),null,!0,!0)});function Xd(t,e,n,i){var r=jt.hasOwnProperty(e)?jt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Nv(e,n,r,i)&&(n=null),i||r===null?Rv(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Ni=Av.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,xo=Symbol.for("react.element"),xs=Symbol.for("react.portal"),vs=Symbol.for("react.fragment"),Yd=Symbol.for("react.strict_mode"),Iu=Symbol.for("react.profiler"),c0=Symbol.for("react.provider"),u0=Symbol.for("react.context"),$d=Symbol.for("react.forward_ref"),Uu=Symbol.for("react.suspense"),Ou=Symbol.for("react.suspense_list"),qd=Symbol.for("react.memo"),Hi=Symbol.for("react.lazy"),d0=Symbol.for("react.offscreen"),th=Symbol.iterator;function oa(t){return t===null||typeof t!="object"?null:(t=th&&t[th]||t["@@iterator"],typeof t=="function"?t:null)}var wt=Object.assign,Ec;function ba(t){if(Ec===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Ec=e&&e[1]||""}return`
`+Ec+t}var wc=!1;function Tc(t,e){if(!t||wc)return"";wc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),a=r.length-1,o=s.length-1;1<=a&&0<=o&&r[a]!==s[o];)o--;for(;1<=a&&0<=o;a--,o--)if(r[a]!==s[o]){if(a!==1||o!==1)do if(a--,o--,0>o||r[a]!==s[o]){var l=`
`+r[a].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=a&&0<=o);break}}}finally{wc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?ba(t):""}function Lv(t){switch(t.tag){case 5:return ba(t.type);case 16:return ba("Lazy");case 13:return ba("Suspense");case 19:return ba("SuspenseList");case 0:case 2:case 15:return t=Tc(t.type,!1),t;case 11:return t=Tc(t.type.render,!1),t;case 1:return t=Tc(t.type,!0),t;default:return""}}function ku(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case vs:return"Fragment";case xs:return"Portal";case Iu:return"Profiler";case Yd:return"StrictMode";case Uu:return"Suspense";case Ou:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case u0:return(t.displayName||"Context")+".Consumer";case c0:return(t._context.displayName||"Context")+".Provider";case $d:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case qd:return e=t.displayName||null,e!==null?e:ku(t.type)||"Memo";case Hi:e=t._payload,t=t._init;try{return ku(t(e))}catch{}}return null}function Dv(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ku(e);case 8:return e===Yd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function sr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function f0(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Iv(t){var e=f0(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(a){i=""+a,s.call(this,a)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(a){i=""+a},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function vo(t){t._valueTracker||(t._valueTracker=Iv(t))}function h0(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=f0(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function _l(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Fu(t,e){var n=e.checked;return wt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function nh(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=sr(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function p0(t,e){e=e.checked,e!=null&&Xd(t,"checked",e,!1)}function zu(t,e){p0(t,e);var n=sr(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Bu(t,e.type,n):e.hasOwnProperty("defaultValue")&&Bu(t,e.type,sr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function ih(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Bu(t,e,n){(e!=="number"||_l(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Aa=Array.isArray;function Ls(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+sr(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Hu(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(le(91));return wt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function rh(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(le(92));if(Aa(n)){if(1<n.length)throw Error(le(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:sr(n)}}function m0(t,e){var n=sr(e.value),i=sr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function sh(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function g0(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Gu(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?g0(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var _o,x0=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(_o=_o||document.createElement("div"),_o.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=_o.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Ga(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Pa={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Uv=["Webkit","ms","Moz","O"];Object.keys(Pa).forEach(function(t){Uv.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Pa[e]=Pa[t]})});function v0(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Pa.hasOwnProperty(t)&&Pa[t]?(""+e).trim():e+"px"}function _0(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=v0(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var Ov=wt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Vu(t,e){if(e){if(Ov[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(le(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(le(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(le(61))}if(e.style!=null&&typeof e.style!="object")throw Error(le(62))}}function ju(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Wu=null;function Kd(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Xu=null,Ds=null,Is=null;function ah(t){if(t=lo(t)){if(typeof Xu!="function")throw Error(le(280));var e=t.stateNode;e&&(e=rc(e),Xu(t.stateNode,t.type,e))}}function y0(t){Ds?Is?Is.push(t):Is=[t]:Ds=t}function S0(){if(Ds){var t=Ds,e=Is;if(Is=Ds=null,ah(t),e)for(t=0;t<e.length;t++)ah(e[t])}}function M0(t,e){return t(e)}function E0(){}var bc=!1;function w0(t,e,n){if(bc)return t(e,n);bc=!0;try{return M0(t,e,n)}finally{bc=!1,(Ds!==null||Is!==null)&&(E0(),S0())}}function Va(t,e){var n=t.stateNode;if(n===null)return null;var i=rc(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(le(231,e,typeof n));return n}var Yu=!1;if(Ai)try{var la={};Object.defineProperty(la,"passive",{get:function(){Yu=!0}}),window.addEventListener("test",la,la),window.removeEventListener("test",la,la)}catch{Yu=!1}function kv(t,e,n,i,r,s,a,o,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(d){this.onError(d)}}var Na=!1,yl=null,Sl=!1,$u=null,Fv={onError:function(t){Na=!0,yl=t}};function zv(t,e,n,i,r,s,a,o,l){Na=!1,yl=null,kv.apply(Fv,arguments)}function Bv(t,e,n,i,r,s,a,o,l){if(zv.apply(this,arguments),Na){if(Na){var c=yl;Na=!1,yl=null}else throw Error(le(198));Sl||(Sl=!0,$u=c)}}function Hr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function T0(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function oh(t){if(Hr(t)!==t)throw Error(le(188))}function Hv(t){var e=t.alternate;if(!e){if(e=Hr(t),e===null)throw Error(le(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return oh(r),t;if(s===i)return oh(r),e;s=s.sibling}throw Error(le(188))}if(n.return!==i.return)n=r,i=s;else{for(var a=!1,o=r.child;o;){if(o===n){a=!0,n=r,i=s;break}if(o===i){a=!0,i=r,n=s;break}o=o.sibling}if(!a){for(o=s.child;o;){if(o===n){a=!0,n=s,i=r;break}if(o===i){a=!0,i=s,n=r;break}o=o.sibling}if(!a)throw Error(le(189))}}if(n.alternate!==i)throw Error(le(190))}if(n.tag!==3)throw Error(le(188));return n.stateNode.current===n?t:e}function b0(t){return t=Hv(t),t!==null?A0(t):null}function A0(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=A0(t);if(e!==null)return e;t=t.sibling}return null}var C0=Mn.unstable_scheduleCallback,lh=Mn.unstable_cancelCallback,Gv=Mn.unstable_shouldYield,Vv=Mn.unstable_requestPaint,bt=Mn.unstable_now,jv=Mn.unstable_getCurrentPriorityLevel,Zd=Mn.unstable_ImmediatePriority,R0=Mn.unstable_UserBlockingPriority,Ml=Mn.unstable_NormalPriority,Wv=Mn.unstable_LowPriority,P0=Mn.unstable_IdlePriority,ec=null,oi=null;function Xv(t){if(oi&&typeof oi.onCommitFiberRoot=="function")try{oi.onCommitFiberRoot(ec,t,void 0,(t.current.flags&128)===128)}catch{}}var Zn=Math.clz32?Math.clz32:qv,Yv=Math.log,$v=Math.LN2;function qv(t){return t>>>=0,t===0?32:31-(Yv(t)/$v|0)|0}var yo=64,So=4194304;function Ca(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function El(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,a=n&268435455;if(a!==0){var o=a&~r;o!==0?i=Ca(o):(s&=a,s!==0&&(i=Ca(s)))}else a=n&~r,a!==0?i=Ca(a):s!==0&&(i=Ca(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-Zn(e),r=1<<n,i|=t[n],e&=~r;return i}function Kv(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Zv(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var a=31-Zn(s),o=1<<a,l=r[a];l===-1?(!(o&n)||o&i)&&(r[a]=Kv(o,e)):l<=e&&(t.expiredLanes|=o),s&=~o}}function qu(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function N0(){var t=yo;return yo<<=1,!(yo&4194240)&&(yo=64),t}function Ac(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function ao(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Zn(e),t[e]=n}function Qv(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-Zn(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function Qd(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-Zn(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var lt=0;function L0(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var D0,Jd,I0,U0,O0,Ku=!1,Mo=[],Ki=null,Zi=null,Qi=null,ja=new Map,Wa=new Map,ji=[],Jv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ch(t,e){switch(t){case"focusin":case"focusout":Ki=null;break;case"dragenter":case"dragleave":Zi=null;break;case"mouseover":case"mouseout":Qi=null;break;case"pointerover":case"pointerout":ja.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Wa.delete(e.pointerId)}}function ca(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=lo(e),e!==null&&Jd(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function e_(t,e,n,i,r){switch(e){case"focusin":return Ki=ca(Ki,t,e,n,i,r),!0;case"dragenter":return Zi=ca(Zi,t,e,n,i,r),!0;case"mouseover":return Qi=ca(Qi,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return ja.set(s,ca(ja.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Wa.set(s,ca(Wa.get(s)||null,t,e,n,i,r)),!0}return!1}function k0(t){var e=Tr(t.target);if(e!==null){var n=Hr(e);if(n!==null){if(e=n.tag,e===13){if(e=T0(n),e!==null){t.blockedOn=e,O0(t.priority,function(){I0(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ll(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Zu(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Wu=i,n.target.dispatchEvent(i),Wu=null}else return e=lo(n),e!==null&&Jd(e),t.blockedOn=n,!1;e.shift()}return!0}function uh(t,e,n){ll(t)&&n.delete(e)}function t_(){Ku=!1,Ki!==null&&ll(Ki)&&(Ki=null),Zi!==null&&ll(Zi)&&(Zi=null),Qi!==null&&ll(Qi)&&(Qi=null),ja.forEach(uh),Wa.forEach(uh)}function ua(t,e){t.blockedOn===e&&(t.blockedOn=null,Ku||(Ku=!0,Mn.unstable_scheduleCallback(Mn.unstable_NormalPriority,t_)))}function Xa(t){function e(r){return ua(r,t)}if(0<Mo.length){ua(Mo[0],t);for(var n=1;n<Mo.length;n++){var i=Mo[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Ki!==null&&ua(Ki,t),Zi!==null&&ua(Zi,t),Qi!==null&&ua(Qi,t),ja.forEach(e),Wa.forEach(e),n=0;n<ji.length;n++)i=ji[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<ji.length&&(n=ji[0],n.blockedOn===null);)k0(n),n.blockedOn===null&&ji.shift()}var Us=Ni.ReactCurrentBatchConfig,wl=!0;function n_(t,e,n,i){var r=lt,s=Us.transition;Us.transition=null;try{lt=1,ef(t,e,n,i)}finally{lt=r,Us.transition=s}}function i_(t,e,n,i){var r=lt,s=Us.transition;Us.transition=null;try{lt=4,ef(t,e,n,i)}finally{lt=r,Us.transition=s}}function ef(t,e,n,i){if(wl){var r=Zu(t,e,n,i);if(r===null)kc(t,e,i,Tl,n),ch(t,i);else if(e_(r,t,e,n,i))i.stopPropagation();else if(ch(t,i),e&4&&-1<Jv.indexOf(t)){for(;r!==null;){var s=lo(r);if(s!==null&&D0(s),s=Zu(t,e,n,i),s===null&&kc(t,e,i,Tl,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else kc(t,e,i,null,n)}}var Tl=null;function Zu(t,e,n,i){if(Tl=null,t=Kd(i),t=Tr(t),t!==null)if(e=Hr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=T0(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Tl=t,null}function F0(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(jv()){case Zd:return 1;case R0:return 4;case Ml:case Wv:return 16;case P0:return 536870912;default:return 16}default:return 16}}var Yi=null,tf=null,cl=null;function z0(){if(cl)return cl;var t,e=tf,n=e.length,i,r="value"in Yi?Yi.value:Yi.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var a=n-t;for(i=1;i<=a&&e[n-i]===r[s-i];i++);return cl=r.slice(t,1<i?1-i:void 0)}function ul(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Eo(){return!0}function dh(){return!1}function wn(t){function e(n,i,r,s,a){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=a,this.currentTarget=null;for(var o in t)t.hasOwnProperty(o)&&(n=t[o],this[o]=n?n(s):s[o]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Eo:dh,this.isPropagationStopped=dh,this}return wt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Eo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Eo)},persist:function(){},isPersistent:Eo}),e}var Js={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},nf=wn(Js),oo=wt({},Js,{view:0,detail:0}),r_=wn(oo),Cc,Rc,da,tc=wt({},oo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:rf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==da&&(da&&t.type==="mousemove"?(Cc=t.screenX-da.screenX,Rc=t.screenY-da.screenY):Rc=Cc=0,da=t),Cc)},movementY:function(t){return"movementY"in t?t.movementY:Rc}}),fh=wn(tc),s_=wt({},tc,{dataTransfer:0}),a_=wn(s_),o_=wt({},oo,{relatedTarget:0}),Pc=wn(o_),l_=wt({},Js,{animationName:0,elapsedTime:0,pseudoElement:0}),c_=wn(l_),u_=wt({},Js,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),d_=wn(u_),f_=wt({},Js,{data:0}),hh=wn(f_),h_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},p_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},m_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function g_(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=m_[t])?!!e[t]:!1}function rf(){return g_}var x_=wt({},oo,{key:function(t){if(t.key){var e=h_[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=ul(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?p_[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:rf,charCode:function(t){return t.type==="keypress"?ul(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ul(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),v_=wn(x_),__=wt({},tc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ph=wn(__),y_=wt({},oo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:rf}),S_=wn(y_),M_=wt({},Js,{propertyName:0,elapsedTime:0,pseudoElement:0}),E_=wn(M_),w_=wt({},tc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),T_=wn(w_),b_=[9,13,27,32],sf=Ai&&"CompositionEvent"in window,La=null;Ai&&"documentMode"in document&&(La=document.documentMode);var A_=Ai&&"TextEvent"in window&&!La,B0=Ai&&(!sf||La&&8<La&&11>=La),mh=" ",gh=!1;function H0(t,e){switch(t){case"keyup":return b_.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function G0(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var _s=!1;function C_(t,e){switch(t){case"compositionend":return G0(e);case"keypress":return e.which!==32?null:(gh=!0,mh);case"textInput":return t=e.data,t===mh&&gh?null:t;default:return null}}function R_(t,e){if(_s)return t==="compositionend"||!sf&&H0(t,e)?(t=z0(),cl=tf=Yi=null,_s=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return B0&&e.locale!=="ko"?null:e.data;default:return null}}var P_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function xh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!P_[t.type]:e==="textarea"}function V0(t,e,n,i){y0(i),e=bl(e,"onChange"),0<e.length&&(n=new nf("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Da=null,Ya=null;function N_(t){eg(t,0)}function nc(t){var e=Ms(t);if(h0(e))return t}function L_(t,e){if(t==="change")return e}var j0=!1;if(Ai){var Nc;if(Ai){var Lc="oninput"in document;if(!Lc){var vh=document.createElement("div");vh.setAttribute("oninput","return;"),Lc=typeof vh.oninput=="function"}Nc=Lc}else Nc=!1;j0=Nc&&(!document.documentMode||9<document.documentMode)}function _h(){Da&&(Da.detachEvent("onpropertychange",W0),Ya=Da=null)}function W0(t){if(t.propertyName==="value"&&nc(Ya)){var e=[];V0(e,Ya,t,Kd(t)),w0(N_,e)}}function D_(t,e,n){t==="focusin"?(_h(),Da=e,Ya=n,Da.attachEvent("onpropertychange",W0)):t==="focusout"&&_h()}function I_(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return nc(Ya)}function U_(t,e){if(t==="click")return nc(e)}function O_(t,e){if(t==="input"||t==="change")return nc(e)}function k_(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var ei=typeof Object.is=="function"?Object.is:k_;function $a(t,e){if(ei(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Du.call(e,r)||!ei(t[r],e[r]))return!1}return!0}function yh(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Sh(t,e){var n=yh(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=yh(n)}}function X0(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?X0(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Y0(){for(var t=window,e=_l();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=_l(t.document)}return e}function af(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function F_(t){var e=Y0(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&X0(n.ownerDocument.documentElement,n)){if(i!==null&&af(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=Sh(n,s);var a=Sh(n,i);r&&a&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==a.node||t.focusOffset!==a.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(a.node,a.offset)):(e.setEnd(a.node,a.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var z_=Ai&&"documentMode"in document&&11>=document.documentMode,ys=null,Qu=null,Ia=null,Ju=!1;function Mh(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ju||ys==null||ys!==_l(i)||(i=ys,"selectionStart"in i&&af(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Ia&&$a(Ia,i)||(Ia=i,i=bl(Qu,"onSelect"),0<i.length&&(e=new nf("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=ys)))}function wo(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Ss={animationend:wo("Animation","AnimationEnd"),animationiteration:wo("Animation","AnimationIteration"),animationstart:wo("Animation","AnimationStart"),transitionend:wo("Transition","TransitionEnd")},Dc={},$0={};Ai&&($0=document.createElement("div").style,"AnimationEvent"in window||(delete Ss.animationend.animation,delete Ss.animationiteration.animation,delete Ss.animationstart.animation),"TransitionEvent"in window||delete Ss.transitionend.transition);function ic(t){if(Dc[t])return Dc[t];if(!Ss[t])return t;var e=Ss[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in $0)return Dc[t]=e[n];return t}var q0=ic("animationend"),K0=ic("animationiteration"),Z0=ic("animationstart"),Q0=ic("transitionend"),J0=new Map,Eh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function lr(t,e){J0.set(t,e),Br(e,[t])}for(var Ic=0;Ic<Eh.length;Ic++){var Uc=Eh[Ic],B_=Uc.toLowerCase(),H_=Uc[0].toUpperCase()+Uc.slice(1);lr(B_,"on"+H_)}lr(q0,"onAnimationEnd");lr(K0,"onAnimationIteration");lr(Z0,"onAnimationStart");lr("dblclick","onDoubleClick");lr("focusin","onFocus");lr("focusout","onBlur");lr(Q0,"onTransitionEnd");Bs("onMouseEnter",["mouseout","mouseover"]);Bs("onMouseLeave",["mouseout","mouseover"]);Bs("onPointerEnter",["pointerout","pointerover"]);Bs("onPointerLeave",["pointerout","pointerover"]);Br("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Br("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Br("onBeforeInput",["compositionend","keypress","textInput","paste"]);Br("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Br("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Br("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ra="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),G_=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ra));function wh(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,Bv(i,e,void 0,t),t.currentTarget=null}function eg(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var a=i.length-1;0<=a;a--){var o=i[a],l=o.instance,c=o.currentTarget;if(o=o.listener,l!==s&&r.isPropagationStopped())break e;wh(r,o,c),s=l}else for(a=0;a<i.length;a++){if(o=i[a],l=o.instance,c=o.currentTarget,o=o.listener,l!==s&&r.isPropagationStopped())break e;wh(r,o,c),s=l}}}if(Sl)throw t=$u,Sl=!1,$u=null,t}function gt(t,e){var n=e[rd];n===void 0&&(n=e[rd]=new Set);var i=t+"__bubble";n.has(i)||(tg(e,t,2,!1),n.add(i))}function Oc(t,e,n){var i=0;e&&(i|=4),tg(n,t,i,e)}var To="_reactListening"+Math.random().toString(36).slice(2);function qa(t){if(!t[To]){t[To]=!0,l0.forEach(function(n){n!=="selectionchange"&&(G_.has(n)||Oc(n,!1,t),Oc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[To]||(e[To]=!0,Oc("selectionchange",!1,e))}}function tg(t,e,n,i){switch(F0(e)){case 1:var r=n_;break;case 4:r=i_;break;default:r=ef}n=r.bind(null,e,n,t),r=void 0,!Yu||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function kc(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var a=i.tag;if(a===3||a===4){var o=i.stateNode.containerInfo;if(o===r||o.nodeType===8&&o.parentNode===r)break;if(a===4)for(a=i.return;a!==null;){var l=a.tag;if((l===3||l===4)&&(l=a.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;a=a.return}for(;o!==null;){if(a=Tr(o),a===null)return;if(l=a.tag,l===5||l===6){i=s=a;continue e}o=o.parentNode}}i=i.return}w0(function(){var c=s,d=Kd(n),h=[];e:{var f=J0.get(t);if(f!==void 0){var m=nf,_=t;switch(t){case"keypress":if(ul(n)===0)break e;case"keydown":case"keyup":m=v_;break;case"focusin":_="focus",m=Pc;break;case"focusout":_="blur",m=Pc;break;case"beforeblur":case"afterblur":m=Pc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=fh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=a_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=S_;break;case q0:case K0:case Z0:m=c_;break;case Q0:m=E_;break;case"scroll":m=r_;break;case"wheel":m=T_;break;case"copy":case"cut":case"paste":m=d_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=ph}var M=(e&4)!==0,p=!M&&t==="scroll",u=M?f!==null?f+"Capture":null:f;M=[];for(var v=c,x;v!==null;){x=v;var E=x.stateNode;if(x.tag===5&&E!==null&&(x=E,u!==null&&(E=Va(v,u),E!=null&&M.push(Ka(v,E,x)))),p)break;v=v.return}0<M.length&&(f=new m(f,_,null,n,d),h.push({event:f,listeners:M}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",m=t==="mouseout"||t==="pointerout",f&&n!==Wu&&(_=n.relatedTarget||n.fromElement)&&(Tr(_)||_[Ci]))break e;if((m||f)&&(f=d.window===d?d:(f=d.ownerDocument)?f.defaultView||f.parentWindow:window,m?(_=n.relatedTarget||n.toElement,m=c,_=_?Tr(_):null,_!==null&&(p=Hr(_),_!==p||_.tag!==5&&_.tag!==6)&&(_=null)):(m=null,_=c),m!==_)){if(M=fh,E="onMouseLeave",u="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(M=ph,E="onPointerLeave",u="onPointerEnter",v="pointer"),p=m==null?f:Ms(m),x=_==null?f:Ms(_),f=new M(E,v+"leave",m,n,d),f.target=p,f.relatedTarget=x,E=null,Tr(d)===c&&(M=new M(u,v+"enter",_,n,d),M.target=x,M.relatedTarget=p,E=M),p=E,m&&_)t:{for(M=m,u=_,v=0,x=M;x;x=Yr(x))v++;for(x=0,E=u;E;E=Yr(E))x++;for(;0<v-x;)M=Yr(M),v--;for(;0<x-v;)u=Yr(u),x--;for(;v--;){if(M===u||u!==null&&M===u.alternate)break t;M=Yr(M),u=Yr(u)}M=null}else M=null;m!==null&&Th(h,f,m,M,!1),_!==null&&p!==null&&Th(h,p,_,M,!0)}}e:{if(f=c?Ms(c):window,m=f.nodeName&&f.nodeName.toLowerCase(),m==="select"||m==="input"&&f.type==="file")var P=L_;else if(xh(f))if(j0)P=O_;else{P=I_;var A=D_}else(m=f.nodeName)&&m.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(P=U_);if(P&&(P=P(t,c))){V0(h,P,n,d);break e}A&&A(t,f,c),t==="focusout"&&(A=f._wrapperState)&&A.controlled&&f.type==="number"&&Bu(f,"number",f.value)}switch(A=c?Ms(c):window,t){case"focusin":(xh(A)||A.contentEditable==="true")&&(ys=A,Qu=c,Ia=null);break;case"focusout":Ia=Qu=ys=null;break;case"mousedown":Ju=!0;break;case"contextmenu":case"mouseup":case"dragend":Ju=!1,Mh(h,n,d);break;case"selectionchange":if(z_)break;case"keydown":case"keyup":Mh(h,n,d)}var w;if(sf)e:{switch(t){case"compositionstart":var D="onCompositionStart";break e;case"compositionend":D="onCompositionEnd";break e;case"compositionupdate":D="onCompositionUpdate";break e}D=void 0}else _s?H0(t,n)&&(D="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(D="onCompositionStart");D&&(B0&&n.locale!=="ko"&&(_s||D!=="onCompositionStart"?D==="onCompositionEnd"&&_s&&(w=z0()):(Yi=d,tf="value"in Yi?Yi.value:Yi.textContent,_s=!0)),A=bl(c,D),0<A.length&&(D=new hh(D,t,null,n,d),h.push({event:D,listeners:A}),w?D.data=w:(w=G0(n),w!==null&&(D.data=w)))),(w=A_?C_(t,n):R_(t,n))&&(c=bl(c,"onBeforeInput"),0<c.length&&(d=new hh("onBeforeInput","beforeinput",null,n,d),h.push({event:d,listeners:c}),d.data=w))}eg(h,e)})}function Ka(t,e,n){return{instance:t,listener:e,currentTarget:n}}function bl(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Va(t,n),s!=null&&i.unshift(Ka(t,s,r)),s=Va(t,e),s!=null&&i.push(Ka(t,s,r))),t=t.return}return i}function Yr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Th(t,e,n,i,r){for(var s=e._reactName,a=[];n!==null&&n!==i;){var o=n,l=o.alternate,c=o.stateNode;if(l!==null&&l===i)break;o.tag===5&&c!==null&&(o=c,r?(l=Va(n,s),l!=null&&a.unshift(Ka(n,l,o))):r||(l=Va(n,s),l!=null&&a.push(Ka(n,l,o)))),n=n.return}a.length!==0&&t.push({event:e,listeners:a})}var V_=/\r\n?/g,j_=/\u0000|\uFFFD/g;function bh(t){return(typeof t=="string"?t:""+t).replace(V_,`
`).replace(j_,"")}function bo(t,e,n){if(e=bh(e),bh(t)!==e&&n)throw Error(le(425))}function Al(){}var ed=null,td=null;function nd(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var id=typeof setTimeout=="function"?setTimeout:void 0,W_=typeof clearTimeout=="function"?clearTimeout:void 0,Ah=typeof Promise=="function"?Promise:void 0,X_=typeof queueMicrotask=="function"?queueMicrotask:typeof Ah<"u"?function(t){return Ah.resolve(null).then(t).catch(Y_)}:id;function Y_(t){setTimeout(function(){throw t})}function Fc(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),Xa(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Xa(e)}function Ji(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Ch(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var ea=Math.random().toString(36).slice(2),si="__reactFiber$"+ea,Za="__reactProps$"+ea,Ci="__reactContainer$"+ea,rd="__reactEvents$"+ea,$_="__reactListeners$"+ea,q_="__reactHandles$"+ea;function Tr(t){var e=t[si];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Ci]||n[si]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Ch(t);t!==null;){if(n=t[si])return n;t=Ch(t)}return e}t=n,n=t.parentNode}return null}function lo(t){return t=t[si]||t[Ci],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Ms(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(le(33))}function rc(t){return t[Za]||null}var sd=[],Es=-1;function cr(t){return{current:t}}function vt(t){0>Es||(t.current=sd[Es],sd[Es]=null,Es--)}function mt(t,e){Es++,sd[Es]=t.current,t.current=e}var ar={},en=cr(ar),fn=cr(!1),Ir=ar;function Hs(t,e){var n=t.type.contextTypes;if(!n)return ar;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function hn(t){return t=t.childContextTypes,t!=null}function Cl(){vt(fn),vt(en)}function Rh(t,e,n){if(en.current!==ar)throw Error(le(168));mt(en,e),mt(fn,n)}function ng(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(le(108,Dv(t)||"Unknown",r));return wt({},n,i)}function Rl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||ar,Ir=en.current,mt(en,t),mt(fn,fn.current),!0}function Ph(t,e,n){var i=t.stateNode;if(!i)throw Error(le(169));n?(t=ng(t,e,Ir),i.__reactInternalMemoizedMergedChildContext=t,vt(fn),vt(en),mt(en,t)):vt(fn),mt(fn,n)}var vi=null,sc=!1,zc=!1;function ig(t){vi===null?vi=[t]:vi.push(t)}function K_(t){sc=!0,ig(t)}function ur(){if(!zc&&vi!==null){zc=!0;var t=0,e=lt;try{var n=vi;for(lt=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}vi=null,sc=!1}catch(r){throw vi!==null&&(vi=vi.slice(t+1)),C0(Zd,ur),r}finally{lt=e,zc=!1}}return null}var ws=[],Ts=0,Pl=null,Nl=0,Rn=[],Pn=0,Ur=null,_i=1,yi="";function yr(t,e){ws[Ts++]=Nl,ws[Ts++]=Pl,Pl=t,Nl=e}function rg(t,e,n){Rn[Pn++]=_i,Rn[Pn++]=yi,Rn[Pn++]=Ur,Ur=t;var i=_i;t=yi;var r=32-Zn(i)-1;i&=~(1<<r),n+=1;var s=32-Zn(e)+r;if(30<s){var a=r-r%5;s=(i&(1<<a)-1).toString(32),i>>=a,r-=a,_i=1<<32-Zn(e)+r|n<<r|i,yi=s+t}else _i=1<<s|n<<r|i,yi=t}function of(t){t.return!==null&&(yr(t,1),rg(t,1,0))}function lf(t){for(;t===Pl;)Pl=ws[--Ts],ws[Ts]=null,Nl=ws[--Ts],ws[Ts]=null;for(;t===Ur;)Ur=Rn[--Pn],Rn[Pn]=null,yi=Rn[--Pn],Rn[Pn]=null,_i=Rn[--Pn],Rn[Pn]=null}var Sn=null,yn=null,yt=!1,Wn=null;function sg(t,e){var n=Nn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Nh(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Sn=t,yn=Ji(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Sn=t,yn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Ur!==null?{id:_i,overflow:yi}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Nn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Sn=t,yn=null,!0):!1;default:return!1}}function ad(t){return(t.mode&1)!==0&&(t.flags&128)===0}function od(t){if(yt){var e=yn;if(e){var n=e;if(!Nh(t,e)){if(ad(t))throw Error(le(418));e=Ji(n.nextSibling);var i=Sn;e&&Nh(t,e)?sg(i,n):(t.flags=t.flags&-4097|2,yt=!1,Sn=t)}}else{if(ad(t))throw Error(le(418));t.flags=t.flags&-4097|2,yt=!1,Sn=t}}}function Lh(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Sn=t}function Ao(t){if(t!==Sn)return!1;if(!yt)return Lh(t),yt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!nd(t.type,t.memoizedProps)),e&&(e=yn)){if(ad(t))throw ag(),Error(le(418));for(;e;)sg(t,e),e=Ji(e.nextSibling)}if(Lh(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(le(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){yn=Ji(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}yn=null}}else yn=Sn?Ji(t.stateNode.nextSibling):null;return!0}function ag(){for(var t=yn;t;)t=Ji(t.nextSibling)}function Gs(){yn=Sn=null,yt=!1}function cf(t){Wn===null?Wn=[t]:Wn.push(t)}var Z_=Ni.ReactCurrentBatchConfig;function fa(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(le(309));var i=n.stateNode}if(!i)throw Error(le(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(a){var o=r.refs;a===null?delete o[s]:o[s]=a},e._stringRef=s,e)}if(typeof t!="string")throw Error(le(284));if(!n._owner)throw Error(le(290,t))}return t}function Co(t,e){throw t=Object.prototype.toString.call(e),Error(le(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Dh(t){var e=t._init;return e(t._payload)}function og(t){function e(u,v){if(t){var x=u.deletions;x===null?(u.deletions=[v],u.flags|=16):x.push(v)}}function n(u,v){if(!t)return null;for(;v!==null;)e(u,v),v=v.sibling;return null}function i(u,v){for(u=new Map;v!==null;)v.key!==null?u.set(v.key,v):u.set(v.index,v),v=v.sibling;return u}function r(u,v){return u=ir(u,v),u.index=0,u.sibling=null,u}function s(u,v,x){return u.index=x,t?(x=u.alternate,x!==null?(x=x.index,x<v?(u.flags|=2,v):x):(u.flags|=2,v)):(u.flags|=1048576,v)}function a(u){return t&&u.alternate===null&&(u.flags|=2),u}function o(u,v,x,E){return v===null||v.tag!==6?(v=Xc(x,u.mode,E),v.return=u,v):(v=r(v,x),v.return=u,v)}function l(u,v,x,E){var P=x.type;return P===vs?d(u,v,x.props.children,E,x.key):v!==null&&(v.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===Hi&&Dh(P)===v.type)?(E=r(v,x.props),E.ref=fa(u,v,x),E.return=u,E):(E=xl(x.type,x.key,x.props,null,u.mode,E),E.ref=fa(u,v,x),E.return=u,E)}function c(u,v,x,E){return v===null||v.tag!==4||v.stateNode.containerInfo!==x.containerInfo||v.stateNode.implementation!==x.implementation?(v=Yc(x,u.mode,E),v.return=u,v):(v=r(v,x.children||[]),v.return=u,v)}function d(u,v,x,E,P){return v===null||v.tag!==7?(v=Nr(x,u.mode,E,P),v.return=u,v):(v=r(v,x),v.return=u,v)}function h(u,v,x){if(typeof v=="string"&&v!==""||typeof v=="number")return v=Xc(""+v,u.mode,x),v.return=u,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case xo:return x=xl(v.type,v.key,v.props,null,u.mode,x),x.ref=fa(u,null,v),x.return=u,x;case xs:return v=Yc(v,u.mode,x),v.return=u,v;case Hi:var E=v._init;return h(u,E(v._payload),x)}if(Aa(v)||oa(v))return v=Nr(v,u.mode,x,null),v.return=u,v;Co(u,v)}return null}function f(u,v,x,E){var P=v!==null?v.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return P!==null?null:o(u,v,""+x,E);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case xo:return x.key===P?l(u,v,x,E):null;case xs:return x.key===P?c(u,v,x,E):null;case Hi:return P=x._init,f(u,v,P(x._payload),E)}if(Aa(x)||oa(x))return P!==null?null:d(u,v,x,E,null);Co(u,x)}return null}function m(u,v,x,E,P){if(typeof E=="string"&&E!==""||typeof E=="number")return u=u.get(x)||null,o(v,u,""+E,P);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case xo:return u=u.get(E.key===null?x:E.key)||null,l(v,u,E,P);case xs:return u=u.get(E.key===null?x:E.key)||null,c(v,u,E,P);case Hi:var A=E._init;return m(u,v,x,A(E._payload),P)}if(Aa(E)||oa(E))return u=u.get(x)||null,d(v,u,E,P,null);Co(v,E)}return null}function _(u,v,x,E){for(var P=null,A=null,w=v,D=v=0,$=null;w!==null&&D<x.length;D++){w.index>D?($=w,w=null):$=w.sibling;var S=f(u,w,x[D],E);if(S===null){w===null&&(w=$);break}t&&w&&S.alternate===null&&e(u,w),v=s(S,v,D),A===null?P=S:A.sibling=S,A=S,w=$}if(D===x.length)return n(u,w),yt&&yr(u,D),P;if(w===null){for(;D<x.length;D++)w=h(u,x[D],E),w!==null&&(v=s(w,v,D),A===null?P=w:A.sibling=w,A=w);return yt&&yr(u,D),P}for(w=i(u,w);D<x.length;D++)$=m(w,u,D,x[D],E),$!==null&&(t&&$.alternate!==null&&w.delete($.key===null?D:$.key),v=s($,v,D),A===null?P=$:A.sibling=$,A=$);return t&&w.forEach(function(C){return e(u,C)}),yt&&yr(u,D),P}function M(u,v,x,E){var P=oa(x);if(typeof P!="function")throw Error(le(150));if(x=P.call(x),x==null)throw Error(le(151));for(var A=P=null,w=v,D=v=0,$=null,S=x.next();w!==null&&!S.done;D++,S=x.next()){w.index>D?($=w,w=null):$=w.sibling;var C=f(u,w,S.value,E);if(C===null){w===null&&(w=$);break}t&&w&&C.alternate===null&&e(u,w),v=s(C,v,D),A===null?P=C:A.sibling=C,A=C,w=$}if(S.done)return n(u,w),yt&&yr(u,D),P;if(w===null){for(;!S.done;D++,S=x.next())S=h(u,S.value,E),S!==null&&(v=s(S,v,D),A===null?P=S:A.sibling=S,A=S);return yt&&yr(u,D),P}for(w=i(u,w);!S.done;D++,S=x.next())S=m(w,u,D,S.value,E),S!==null&&(t&&S.alternate!==null&&w.delete(S.key===null?D:S.key),v=s(S,v,D),A===null?P=S:A.sibling=S,A=S);return t&&w.forEach(function(K){return e(u,K)}),yt&&yr(u,D),P}function p(u,v,x,E){if(typeof x=="object"&&x!==null&&x.type===vs&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case xo:e:{for(var P=x.key,A=v;A!==null;){if(A.key===P){if(P=x.type,P===vs){if(A.tag===7){n(u,A.sibling),v=r(A,x.props.children),v.return=u,u=v;break e}}else if(A.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===Hi&&Dh(P)===A.type){n(u,A.sibling),v=r(A,x.props),v.ref=fa(u,A,x),v.return=u,u=v;break e}n(u,A);break}else e(u,A);A=A.sibling}x.type===vs?(v=Nr(x.props.children,u.mode,E,x.key),v.return=u,u=v):(E=xl(x.type,x.key,x.props,null,u.mode,E),E.ref=fa(u,v,x),E.return=u,u=E)}return a(u);case xs:e:{for(A=x.key;v!==null;){if(v.key===A)if(v.tag===4&&v.stateNode.containerInfo===x.containerInfo&&v.stateNode.implementation===x.implementation){n(u,v.sibling),v=r(v,x.children||[]),v.return=u,u=v;break e}else{n(u,v);break}else e(u,v);v=v.sibling}v=Yc(x,u.mode,E),v.return=u,u=v}return a(u);case Hi:return A=x._init,p(u,v,A(x._payload),E)}if(Aa(x))return _(u,v,x,E);if(oa(x))return M(u,v,x,E);Co(u,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,v!==null&&v.tag===6?(n(u,v.sibling),v=r(v,x),v.return=u,u=v):(n(u,v),v=Xc(x,u.mode,E),v.return=u,u=v),a(u)):n(u,v)}return p}var Vs=og(!0),lg=og(!1),Ll=cr(null),Dl=null,bs=null,uf=null;function df(){uf=bs=Dl=null}function ff(t){var e=Ll.current;vt(Ll),t._currentValue=e}function ld(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Os(t,e){Dl=t,uf=bs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(un=!0),t.firstContext=null)}function Un(t){var e=t._currentValue;if(uf!==t)if(t={context:t,memoizedValue:e,next:null},bs===null){if(Dl===null)throw Error(le(308));bs=t,Dl.dependencies={lanes:0,firstContext:t}}else bs=bs.next=t;return e}var br=null;function hf(t){br===null?br=[t]:br.push(t)}function cg(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,hf(e)):(n.next=r.next,r.next=n),e.interleaved=n,Ri(t,i)}function Ri(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Gi=!1;function pf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function ug(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Mi(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function er(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,it&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Ri(t,n)}return r=i.interleaved,r===null?(e.next=e,hf(i)):(e.next=r.next,r.next=e),i.interleaved=e,Ri(t,n)}function dl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Qd(t,n)}}function Ih(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=a:s=s.next=a,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Il(t,e,n,i){var r=t.updateQueue;Gi=!1;var s=r.firstBaseUpdate,a=r.lastBaseUpdate,o=r.shared.pending;if(o!==null){r.shared.pending=null;var l=o,c=l.next;l.next=null,a===null?s=c:a.next=c,a=l;var d=t.alternate;d!==null&&(d=d.updateQueue,o=d.lastBaseUpdate,o!==a&&(o===null?d.firstBaseUpdate=c:o.next=c,d.lastBaseUpdate=l))}if(s!==null){var h=r.baseState;a=0,d=c=l=null,o=s;do{var f=o.lane,m=o.eventTime;if((i&f)===f){d!==null&&(d=d.next={eventTime:m,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var _=t,M=o;switch(f=e,m=n,M.tag){case 1:if(_=M.payload,typeof _=="function"){h=_.call(m,h,f);break e}h=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=M.payload,f=typeof _=="function"?_.call(m,h,f):_,f==null)break e;h=wt({},h,f);break e;case 2:Gi=!0}}o.callback!==null&&o.lane!==0&&(t.flags|=64,f=r.effects,f===null?r.effects=[o]:f.push(o))}else m={eventTime:m,lane:f,tag:o.tag,payload:o.payload,callback:o.callback,next:null},d===null?(c=d=m,l=h):d=d.next=m,a|=f;if(o=o.next,o===null){if(o=r.shared.pending,o===null)break;f=o,o=f.next,f.next=null,r.lastBaseUpdate=f,r.shared.pending=null}}while(!0);if(d===null&&(l=h),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=d,e=r.shared.interleaved,e!==null){r=e;do a|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);kr|=a,t.lanes=a,t.memoizedState=h}}function Uh(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(le(191,r));r.call(i)}}}var co={},li=cr(co),Qa=cr(co),Ja=cr(co);function Ar(t){if(t===co)throw Error(le(174));return t}function mf(t,e){switch(mt(Ja,e),mt(Qa,t),mt(li,co),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Gu(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Gu(e,t)}vt(li),mt(li,e)}function js(){vt(li),vt(Qa),vt(Ja)}function dg(t){Ar(Ja.current);var e=Ar(li.current),n=Gu(e,t.type);e!==n&&(mt(Qa,t),mt(li,n))}function gf(t){Qa.current===t&&(vt(li),vt(Qa))}var Mt=cr(0);function Ul(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Bc=[];function xf(){for(var t=0;t<Bc.length;t++)Bc[t]._workInProgressVersionPrimary=null;Bc.length=0}var fl=Ni.ReactCurrentDispatcher,Hc=Ni.ReactCurrentBatchConfig,Or=0,Et=null,Nt=null,kt=null,Ol=!1,Ua=!1,eo=0,Q_=0;function $t(){throw Error(le(321))}function vf(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!ei(t[n],e[n]))return!1;return!0}function _f(t,e,n,i,r,s){if(Or=s,Et=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,fl.current=t===null||t.memoizedState===null?ny:iy,t=n(i,r),Ua){s=0;do{if(Ua=!1,eo=0,25<=s)throw Error(le(301));s+=1,kt=Nt=null,e.updateQueue=null,fl.current=ry,t=n(i,r)}while(Ua)}if(fl.current=kl,e=Nt!==null&&Nt.next!==null,Or=0,kt=Nt=Et=null,Ol=!1,e)throw Error(le(300));return t}function yf(){var t=eo!==0;return eo=0,t}function ni(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return kt===null?Et.memoizedState=kt=t:kt=kt.next=t,kt}function On(){if(Nt===null){var t=Et.alternate;t=t!==null?t.memoizedState:null}else t=Nt.next;var e=kt===null?Et.memoizedState:kt.next;if(e!==null)kt=e,Nt=t;else{if(t===null)throw Error(le(310));Nt=t,t={memoizedState:Nt.memoizedState,baseState:Nt.baseState,baseQueue:Nt.baseQueue,queue:Nt.queue,next:null},kt===null?Et.memoizedState=kt=t:kt=kt.next=t}return kt}function to(t,e){return typeof e=="function"?e(t):e}function Gc(t){var e=On(),n=e.queue;if(n===null)throw Error(le(311));n.lastRenderedReducer=t;var i=Nt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var a=r.next;r.next=s.next,s.next=a}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var o=a=null,l=null,c=s;do{var d=c.lane;if((Or&d)===d)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var h={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(o=l=h,a=i):l=l.next=h,Et.lanes|=d,kr|=d}c=c.next}while(c!==null&&c!==s);l===null?a=i:l.next=o,ei(i,e.memoizedState)||(un=!0),e.memoizedState=i,e.baseState=a,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,Et.lanes|=s,kr|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Vc(t){var e=On(),n=e.queue;if(n===null)throw Error(le(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var a=r=r.next;do s=t(s,a.action),a=a.next;while(a!==r);ei(s,e.memoizedState)||(un=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function fg(){}function hg(t,e){var n=Et,i=On(),r=e(),s=!ei(i.memoizedState,r);if(s&&(i.memoizedState=r,un=!0),i=i.queue,Sf(gg.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||kt!==null&&kt.memoizedState.tag&1){if(n.flags|=2048,no(9,mg.bind(null,n,i,r,e),void 0,null),Ft===null)throw Error(le(349));Or&30||pg(n,e,r)}return r}function pg(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Et.updateQueue,e===null?(e={lastEffect:null,stores:null},Et.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function mg(t,e,n,i){e.value=n,e.getSnapshot=i,xg(e)&&vg(t)}function gg(t,e,n){return n(function(){xg(e)&&vg(t)})}function xg(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!ei(t,n)}catch{return!0}}function vg(t){var e=Ri(t,1);e!==null&&Qn(e,t,1,-1)}function Oh(t){var e=ni();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:to,lastRenderedState:t},e.queue=t,t=t.dispatch=ty.bind(null,Et,t),[e.memoizedState,t]}function no(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=Et.updateQueue,e===null?(e={lastEffect:null,stores:null},Et.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function _g(){return On().memoizedState}function hl(t,e,n,i){var r=ni();Et.flags|=t,r.memoizedState=no(1|e,n,void 0,i===void 0?null:i)}function ac(t,e,n,i){var r=On();i=i===void 0?null:i;var s=void 0;if(Nt!==null){var a=Nt.memoizedState;if(s=a.destroy,i!==null&&vf(i,a.deps)){r.memoizedState=no(e,n,s,i);return}}Et.flags|=t,r.memoizedState=no(1|e,n,s,i)}function kh(t,e){return hl(8390656,8,t,e)}function Sf(t,e){return ac(2048,8,t,e)}function yg(t,e){return ac(4,2,t,e)}function Sg(t,e){return ac(4,4,t,e)}function Mg(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Eg(t,e,n){return n=n!=null?n.concat([t]):null,ac(4,4,Mg.bind(null,e,t),n)}function Mf(){}function wg(t,e){var n=On();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&vf(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function Tg(t,e){var n=On();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&vf(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function bg(t,e,n){return Or&21?(ei(n,e)||(n=N0(),Et.lanes|=n,kr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,un=!0),t.memoizedState=n)}function J_(t,e){var n=lt;lt=n!==0&&4>n?n:4,t(!0);var i=Hc.transition;Hc.transition={};try{t(!1),e()}finally{lt=n,Hc.transition=i}}function Ag(){return On().memoizedState}function ey(t,e,n){var i=nr(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},Cg(t))Rg(e,n);else if(n=cg(t,e,n,i),n!==null){var r=sn();Qn(n,t,i,r),Pg(n,e,i)}}function ty(t,e,n){var i=nr(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(Cg(t))Rg(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var a=e.lastRenderedState,o=s(a,n);if(r.hasEagerState=!0,r.eagerState=o,ei(o,a)){var l=e.interleaved;l===null?(r.next=r,hf(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=cg(t,e,r,i),n!==null&&(r=sn(),Qn(n,t,i,r),Pg(n,e,i))}}function Cg(t){var e=t.alternate;return t===Et||e!==null&&e===Et}function Rg(t,e){Ua=Ol=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Pg(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Qd(t,n)}}var kl={readContext:Un,useCallback:$t,useContext:$t,useEffect:$t,useImperativeHandle:$t,useInsertionEffect:$t,useLayoutEffect:$t,useMemo:$t,useReducer:$t,useRef:$t,useState:$t,useDebugValue:$t,useDeferredValue:$t,useTransition:$t,useMutableSource:$t,useSyncExternalStore:$t,useId:$t,unstable_isNewReconciler:!1},ny={readContext:Un,useCallback:function(t,e){return ni().memoizedState=[t,e===void 0?null:e],t},useContext:Un,useEffect:kh,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,hl(4194308,4,Mg.bind(null,e,t),n)},useLayoutEffect:function(t,e){return hl(4194308,4,t,e)},useInsertionEffect:function(t,e){return hl(4,2,t,e)},useMemo:function(t,e){var n=ni();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=ni();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=ey.bind(null,Et,t),[i.memoizedState,t]},useRef:function(t){var e=ni();return t={current:t},e.memoizedState=t},useState:Oh,useDebugValue:Mf,useDeferredValue:function(t){return ni().memoizedState=t},useTransition:function(){var t=Oh(!1),e=t[0];return t=J_.bind(null,t[1]),ni().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=Et,r=ni();if(yt){if(n===void 0)throw Error(le(407));n=n()}else{if(n=e(),Ft===null)throw Error(le(349));Or&30||pg(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,kh(gg.bind(null,i,s,t),[t]),i.flags|=2048,no(9,mg.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=ni(),e=Ft.identifierPrefix;if(yt){var n=yi,i=_i;n=(i&~(1<<32-Zn(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=eo++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=Q_++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},iy={readContext:Un,useCallback:wg,useContext:Un,useEffect:Sf,useImperativeHandle:Eg,useInsertionEffect:yg,useLayoutEffect:Sg,useMemo:Tg,useReducer:Gc,useRef:_g,useState:function(){return Gc(to)},useDebugValue:Mf,useDeferredValue:function(t){var e=On();return bg(e,Nt.memoizedState,t)},useTransition:function(){var t=Gc(to)[0],e=On().memoizedState;return[t,e]},useMutableSource:fg,useSyncExternalStore:hg,useId:Ag,unstable_isNewReconciler:!1},ry={readContext:Un,useCallback:wg,useContext:Un,useEffect:Sf,useImperativeHandle:Eg,useInsertionEffect:yg,useLayoutEffect:Sg,useMemo:Tg,useReducer:Vc,useRef:_g,useState:function(){return Vc(to)},useDebugValue:Mf,useDeferredValue:function(t){var e=On();return Nt===null?e.memoizedState=t:bg(e,Nt.memoizedState,t)},useTransition:function(){var t=Vc(to)[0],e=On().memoizedState;return[t,e]},useMutableSource:fg,useSyncExternalStore:hg,useId:Ag,unstable_isNewReconciler:!1};function Vn(t,e){if(t&&t.defaultProps){e=wt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function cd(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:wt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var oc={isMounted:function(t){return(t=t._reactInternals)?Hr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=sn(),r=nr(t),s=Mi(i,r);s.payload=e,n!=null&&(s.callback=n),e=er(t,s,r),e!==null&&(Qn(e,t,r,i),dl(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=sn(),r=nr(t),s=Mi(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=er(t,s,r),e!==null&&(Qn(e,t,r,i),dl(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=sn(),i=nr(t),r=Mi(n,i);r.tag=2,e!=null&&(r.callback=e),e=er(t,r,i),e!==null&&(Qn(e,t,i,n),dl(e,t,i))}};function Fh(t,e,n,i,r,s,a){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,a):e.prototype&&e.prototype.isPureReactComponent?!$a(n,i)||!$a(r,s):!0}function Ng(t,e,n){var i=!1,r=ar,s=e.contextType;return typeof s=="object"&&s!==null?s=Un(s):(r=hn(e)?Ir:en.current,i=e.contextTypes,s=(i=i!=null)?Hs(t,r):ar),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=oc,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function zh(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&oc.enqueueReplaceState(e,e.state,null)}function ud(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},pf(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Un(s):(s=hn(e)?Ir:en.current,r.context=Hs(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(cd(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&oc.enqueueReplaceState(r,r.state,null),Il(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Ws(t,e){try{var n="",i=e;do n+=Lv(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function jc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function dd(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var sy=typeof WeakMap=="function"?WeakMap:Map;function Lg(t,e,n){n=Mi(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){zl||(zl=!0,Sd=i),dd(t,e)},n}function Dg(t,e,n){n=Mi(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){dd(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){dd(t,e),typeof i!="function"&&(tr===null?tr=new Set([this]):tr.add(this));var a=e.stack;this.componentDidCatch(e.value,{componentStack:a!==null?a:""})}),n}function Bh(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new sy;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=_y.bind(null,t,e,n),e.then(t,t))}function Hh(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Gh(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Mi(-1,1),e.tag=2,er(n,e,1))),n.lanes|=1),t)}var ay=Ni.ReactCurrentOwner,un=!1;function rn(t,e,n,i){e.child=t===null?lg(e,null,n,i):Vs(e,t.child,n,i)}function Vh(t,e,n,i,r){n=n.render;var s=e.ref;return Os(e,r),i=_f(t,e,n,i,s,r),n=yf(),t!==null&&!un?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Pi(t,e,r)):(yt&&n&&of(e),e.flags|=1,rn(t,e,i,r),e.child)}function jh(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!Pf(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Ig(t,e,s,i,r)):(t=xl(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var a=s.memoizedProps;if(n=n.compare,n=n!==null?n:$a,n(a,i)&&t.ref===e.ref)return Pi(t,e,r)}return e.flags|=1,t=ir(s,i),t.ref=e.ref,t.return=e,e.child=t}function Ig(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if($a(s,i)&&t.ref===e.ref)if(un=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(un=!0);else return e.lanes=t.lanes,Pi(t,e,r)}return fd(t,e,n,i,r)}function Ug(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},mt(Cs,vn),vn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,mt(Cs,vn),vn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,mt(Cs,vn),vn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,mt(Cs,vn),vn|=i;return rn(t,e,r,n),e.child}function Og(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function fd(t,e,n,i,r){var s=hn(n)?Ir:en.current;return s=Hs(e,s),Os(e,r),n=_f(t,e,n,i,s,r),i=yf(),t!==null&&!un?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Pi(t,e,r)):(yt&&i&&of(e),e.flags|=1,rn(t,e,n,r),e.child)}function Wh(t,e,n,i,r){if(hn(n)){var s=!0;Rl(e)}else s=!1;if(Os(e,r),e.stateNode===null)pl(t,e),Ng(e,n,i),ud(e,n,i,r),i=!0;else if(t===null){var a=e.stateNode,o=e.memoizedProps;a.props=o;var l=a.context,c=n.contextType;typeof c=="object"&&c!==null?c=Un(c):(c=hn(n)?Ir:en.current,c=Hs(e,c));var d=n.getDerivedStateFromProps,h=typeof d=="function"||typeof a.getSnapshotBeforeUpdate=="function";h||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==i||l!==c)&&zh(e,a,i,c),Gi=!1;var f=e.memoizedState;a.state=f,Il(e,i,a,r),l=e.memoizedState,o!==i||f!==l||fn.current||Gi?(typeof d=="function"&&(cd(e,n,d,i),l=e.memoizedState),(o=Gi||Fh(e,n,o,i,f,l,c))?(h||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(e.flags|=4194308)):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),a.props=i,a.state=l,a.context=c,i=o):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{a=e.stateNode,ug(t,e),o=e.memoizedProps,c=e.type===e.elementType?o:Vn(e.type,o),a.props=c,h=e.pendingProps,f=a.context,l=n.contextType,typeof l=="object"&&l!==null?l=Un(l):(l=hn(n)?Ir:en.current,l=Hs(e,l));var m=n.getDerivedStateFromProps;(d=typeof m=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==h||f!==l)&&zh(e,a,i,l),Gi=!1,f=e.memoizedState,a.state=f,Il(e,i,a,r);var _=e.memoizedState;o!==h||f!==_||fn.current||Gi?(typeof m=="function"&&(cd(e,n,m,i),_=e.memoizedState),(c=Gi||Fh(e,n,c,i,f,_,l)||!1)?(d||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(i,_,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(i,_,l)),typeof a.componentDidUpdate=="function"&&(e.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=_),a.props=i,a.state=_,a.context=l,i=c):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),i=!1)}return hd(t,e,n,i,s,r)}function hd(t,e,n,i,r,s){Og(t,e);var a=(e.flags&128)!==0;if(!i&&!a)return r&&Ph(e,n,!1),Pi(t,e,s);i=e.stateNode,ay.current=e;var o=a&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&a?(e.child=Vs(e,t.child,null,s),e.child=Vs(e,null,o,s)):rn(t,e,o,s),e.memoizedState=i.state,r&&Ph(e,n,!0),e.child}function kg(t){var e=t.stateNode;e.pendingContext?Rh(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Rh(t,e.context,!1),mf(t,e.containerInfo)}function Xh(t,e,n,i,r){return Gs(),cf(r),e.flags|=256,rn(t,e,n,i),e.child}var pd={dehydrated:null,treeContext:null,retryLane:0};function md(t){return{baseLanes:t,cachePool:null,transitions:null}}function Fg(t,e,n){var i=e.pendingProps,r=Mt.current,s=!1,a=(e.flags&128)!==0,o;if((o=a)||(o=t!==null&&t.memoizedState===null?!1:(r&2)!==0),o?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),mt(Mt,r&1),t===null)return od(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(a=i.children,t=i.fallback,s?(i=e.mode,s=e.child,a={mode:"hidden",children:a},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=a):s=uc(a,i,0,null),t=Nr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=md(n),e.memoizedState=pd,t):Ef(e,a));if(r=t.memoizedState,r!==null&&(o=r.dehydrated,o!==null))return oy(t,e,a,i,o,r,n);if(s){s=i.fallback,a=e.mode,r=t.child,o=r.sibling;var l={mode:"hidden",children:i.children};return!(a&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=ir(r,l),i.subtreeFlags=r.subtreeFlags&14680064),o!==null?s=ir(o,s):(s=Nr(s,a,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,a=t.child.memoizedState,a=a===null?md(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},s.memoizedState=a,s.childLanes=t.childLanes&~n,e.memoizedState=pd,i}return s=t.child,t=s.sibling,i=ir(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Ef(t,e){return e=uc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Ro(t,e,n,i){return i!==null&&cf(i),Vs(e,t.child,null,n),t=Ef(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function oy(t,e,n,i,r,s,a){if(n)return e.flags&256?(e.flags&=-257,i=jc(Error(le(422))),Ro(t,e,a,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=uc({mode:"visible",children:i.children},r,0,null),s=Nr(s,r,a,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Vs(e,t.child,null,a),e.child.memoizedState=md(a),e.memoizedState=pd,s);if(!(e.mode&1))return Ro(t,e,a,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var o=i.dgst;return i=o,s=Error(le(419)),i=jc(s,i,void 0),Ro(t,e,a,i)}if(o=(a&t.childLanes)!==0,un||o){if(i=Ft,i!==null){switch(a&-a){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|a)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Ri(t,r),Qn(i,t,r,-1))}return Rf(),i=jc(Error(le(421))),Ro(t,e,a,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=yy.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,yn=Ji(r.nextSibling),Sn=e,yt=!0,Wn=null,t!==null&&(Rn[Pn++]=_i,Rn[Pn++]=yi,Rn[Pn++]=Ur,_i=t.id,yi=t.overflow,Ur=e),e=Ef(e,i.children),e.flags|=4096,e)}function Yh(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),ld(t.return,e,n)}function Wc(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function zg(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(rn(t,e,i.children,n),i=Mt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Yh(t,n,e);else if(t.tag===19)Yh(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(mt(Mt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Ul(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Wc(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Ul(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Wc(e,!0,n,null,s);break;case"together":Wc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function pl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Pi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),kr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(le(153));if(e.child!==null){for(t=e.child,n=ir(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=ir(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function ly(t,e,n){switch(e.tag){case 3:kg(e),Gs();break;case 5:dg(e);break;case 1:hn(e.type)&&Rl(e);break;case 4:mf(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;mt(Ll,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(mt(Mt,Mt.current&1),e.flags|=128,null):n&e.child.childLanes?Fg(t,e,n):(mt(Mt,Mt.current&1),t=Pi(t,e,n),t!==null?t.sibling:null);mt(Mt,Mt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return zg(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),mt(Mt,Mt.current),i)break;return null;case 22:case 23:return e.lanes=0,Ug(t,e,n)}return Pi(t,e,n)}var Bg,gd,Hg,Gg;Bg=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};gd=function(){};Hg=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Ar(li.current);var s=null;switch(n){case"input":r=Fu(t,r),i=Fu(t,i),s=[];break;case"select":r=wt({},r,{value:void 0}),i=wt({},i,{value:void 0}),s=[];break;case"textarea":r=Hu(t,r),i=Hu(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Al)}Vu(n,i);var a;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var o=r[c];for(a in o)o.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(Ha.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(o=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==o&&(l!=null||o!=null))if(c==="style")if(o){for(a in o)!o.hasOwnProperty(a)||l&&l.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in l)l.hasOwnProperty(a)&&o[a]!==l[a]&&(n||(n={}),n[a]=l[a])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,o=o?o.__html:void 0,l!=null&&o!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(Ha.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&gt("scroll",t),s||o===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};Gg=function(t,e,n,i){n!==i&&(e.flags|=4)};function ha(t,e){if(!yt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function qt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function cy(t,e,n){var i=e.pendingProps;switch(lf(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return qt(e),null;case 1:return hn(e.type)&&Cl(),qt(e),null;case 3:return i=e.stateNode,js(),vt(fn),vt(en),xf(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(Ao(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Wn!==null&&(wd(Wn),Wn=null))),gd(t,e),qt(e),null;case 5:gf(e);var r=Ar(Ja.current);if(n=e.type,t!==null&&e.stateNode!=null)Hg(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(le(166));return qt(e),null}if(t=Ar(li.current),Ao(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[si]=e,i[Za]=s,t=(e.mode&1)!==0,n){case"dialog":gt("cancel",i),gt("close",i);break;case"iframe":case"object":case"embed":gt("load",i);break;case"video":case"audio":for(r=0;r<Ra.length;r++)gt(Ra[r],i);break;case"source":gt("error",i);break;case"img":case"image":case"link":gt("error",i),gt("load",i);break;case"details":gt("toggle",i);break;case"input":nh(i,s),gt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},gt("invalid",i);break;case"textarea":rh(i,s),gt("invalid",i)}Vu(n,s),r=null;for(var a in s)if(s.hasOwnProperty(a)){var o=s[a];a==="children"?typeof o=="string"?i.textContent!==o&&(s.suppressHydrationWarning!==!0&&bo(i.textContent,o,t),r=["children",o]):typeof o=="number"&&i.textContent!==""+o&&(s.suppressHydrationWarning!==!0&&bo(i.textContent,o,t),r=["children",""+o]):Ha.hasOwnProperty(a)&&o!=null&&a==="onScroll"&&gt("scroll",i)}switch(n){case"input":vo(i),ih(i,s,!0);break;case"textarea":vo(i),sh(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Al)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{a=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=g0(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=a.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=a.createElement(n,{is:i.is}):(t=a.createElement(n),n==="select"&&(a=t,i.multiple?a.multiple=!0:i.size&&(a.size=i.size))):t=a.createElementNS(t,n),t[si]=e,t[Za]=i,Bg(t,e,!1,!1),e.stateNode=t;e:{switch(a=ju(n,i),n){case"dialog":gt("cancel",t),gt("close",t),r=i;break;case"iframe":case"object":case"embed":gt("load",t),r=i;break;case"video":case"audio":for(r=0;r<Ra.length;r++)gt(Ra[r],t);r=i;break;case"source":gt("error",t),r=i;break;case"img":case"image":case"link":gt("error",t),gt("load",t),r=i;break;case"details":gt("toggle",t),r=i;break;case"input":nh(t,i),r=Fu(t,i),gt("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=wt({},i,{value:void 0}),gt("invalid",t);break;case"textarea":rh(t,i),r=Hu(t,i),gt("invalid",t);break;default:r=i}Vu(n,r),o=r;for(s in o)if(o.hasOwnProperty(s)){var l=o[s];s==="style"?_0(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&x0(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Ga(t,l):typeof l=="number"&&Ga(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Ha.hasOwnProperty(s)?l!=null&&s==="onScroll"&&gt("scroll",t):l!=null&&Xd(t,s,l,a))}switch(n){case"input":vo(t),ih(t,i,!1);break;case"textarea":vo(t),sh(t);break;case"option":i.value!=null&&t.setAttribute("value",""+sr(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?Ls(t,!!i.multiple,s,!1):i.defaultValue!=null&&Ls(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Al)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return qt(e),null;case 6:if(t&&e.stateNode!=null)Gg(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(le(166));if(n=Ar(Ja.current),Ar(li.current),Ao(e)){if(i=e.stateNode,n=e.memoizedProps,i[si]=e,(s=i.nodeValue!==n)&&(t=Sn,t!==null))switch(t.tag){case 3:bo(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&bo(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[si]=e,e.stateNode=i}return qt(e),null;case 13:if(vt(Mt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(yt&&yn!==null&&e.mode&1&&!(e.flags&128))ag(),Gs(),e.flags|=98560,s=!1;else if(s=Ao(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(le(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(le(317));s[si]=e}else Gs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;qt(e),s=!1}else Wn!==null&&(wd(Wn),Wn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||Mt.current&1?Lt===0&&(Lt=3):Rf())),e.updateQueue!==null&&(e.flags|=4),qt(e),null);case 4:return js(),gd(t,e),t===null&&qa(e.stateNode.containerInfo),qt(e),null;case 10:return ff(e.type._context),qt(e),null;case 17:return hn(e.type)&&Cl(),qt(e),null;case 19:if(vt(Mt),s=e.memoizedState,s===null)return qt(e),null;if(i=(e.flags&128)!==0,a=s.rendering,a===null)if(i)ha(s,!1);else{if(Lt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(a=Ul(t),a!==null){for(e.flags|=128,ha(s,!1),i=a.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,a=s.alternate,a===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=a.childLanes,s.lanes=a.lanes,s.child=a.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=a.memoizedProps,s.memoizedState=a.memoizedState,s.updateQueue=a.updateQueue,s.type=a.type,t=a.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return mt(Mt,Mt.current&1|2),e.child}t=t.sibling}s.tail!==null&&bt()>Xs&&(e.flags|=128,i=!0,ha(s,!1),e.lanes=4194304)}else{if(!i)if(t=Ul(a),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),ha(s,!0),s.tail===null&&s.tailMode==="hidden"&&!a.alternate&&!yt)return qt(e),null}else 2*bt()-s.renderingStartTime>Xs&&n!==1073741824&&(e.flags|=128,i=!0,ha(s,!1),e.lanes=4194304);s.isBackwards?(a.sibling=e.child,e.child=a):(n=s.last,n!==null?n.sibling=a:e.child=a,s.last=a)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=bt(),e.sibling=null,n=Mt.current,mt(Mt,i?n&1|2:n&1),e):(qt(e),null);case 22:case 23:return Cf(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?vn&1073741824&&(qt(e),e.subtreeFlags&6&&(e.flags|=8192)):qt(e),null;case 24:return null;case 25:return null}throw Error(le(156,e.tag))}function uy(t,e){switch(lf(e),e.tag){case 1:return hn(e.type)&&Cl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return js(),vt(fn),vt(en),xf(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return gf(e),null;case 13:if(vt(Mt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(le(340));Gs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return vt(Mt),null;case 4:return js(),null;case 10:return ff(e.type._context),null;case 22:case 23:return Cf(),null;case 24:return null;default:return null}}var Po=!1,Qt=!1,dy=typeof WeakSet=="function"?WeakSet:Set,Te=null;function As(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){Tt(t,e,i)}else n.current=null}function xd(t,e,n){try{n()}catch(i){Tt(t,e,i)}}var $h=!1;function fy(t,e){if(ed=wl,t=Y0(),af(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var a=0,o=-1,l=-1,c=0,d=0,h=t,f=null;t:for(;;){for(var m;h!==n||r!==0&&h.nodeType!==3||(o=a+r),h!==s||i!==0&&h.nodeType!==3||(l=a+i),h.nodeType===3&&(a+=h.nodeValue.length),(m=h.firstChild)!==null;)f=h,h=m;for(;;){if(h===t)break t;if(f===n&&++c===r&&(o=a),f===s&&++d===i&&(l=a),(m=h.nextSibling)!==null)break;h=f,f=h.parentNode}h=m}n=o===-1||l===-1?null:{start:o,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(td={focusedElem:t,selectionRange:n},wl=!1,Te=e;Te!==null;)if(e=Te,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Te=t;else for(;Te!==null;){e=Te;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var M=_.memoizedProps,p=_.memoizedState,u=e.stateNode,v=u.getSnapshotBeforeUpdate(e.elementType===e.type?M:Vn(e.type,M),p);u.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var x=e.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(le(163))}}catch(E){Tt(e,e.return,E)}if(t=e.sibling,t!==null){t.return=e.return,Te=t;break}Te=e.return}return _=$h,$h=!1,_}function Oa(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&xd(e,n,s)}r=r.next}while(r!==i)}}function lc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function vd(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Vg(t){var e=t.alternate;e!==null&&(t.alternate=null,Vg(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[si],delete e[Za],delete e[rd],delete e[$_],delete e[q_])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function jg(t){return t.tag===5||t.tag===3||t.tag===4}function qh(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||jg(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function _d(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Al));else if(i!==4&&(t=t.child,t!==null))for(_d(t,e,n),t=t.sibling;t!==null;)_d(t,e,n),t=t.sibling}function yd(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(yd(t,e,n),t=t.sibling;t!==null;)yd(t,e,n),t=t.sibling}var Bt=null,jn=!1;function Ii(t,e,n){for(n=n.child;n!==null;)Wg(t,e,n),n=n.sibling}function Wg(t,e,n){if(oi&&typeof oi.onCommitFiberUnmount=="function")try{oi.onCommitFiberUnmount(ec,n)}catch{}switch(n.tag){case 5:Qt||As(n,e);case 6:var i=Bt,r=jn;Bt=null,Ii(t,e,n),Bt=i,jn=r,Bt!==null&&(jn?(t=Bt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Bt.removeChild(n.stateNode));break;case 18:Bt!==null&&(jn?(t=Bt,n=n.stateNode,t.nodeType===8?Fc(t.parentNode,n):t.nodeType===1&&Fc(t,n),Xa(t)):Fc(Bt,n.stateNode));break;case 4:i=Bt,r=jn,Bt=n.stateNode.containerInfo,jn=!0,Ii(t,e,n),Bt=i,jn=r;break;case 0:case 11:case 14:case 15:if(!Qt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,a=s.destroy;s=s.tag,a!==void 0&&(s&2||s&4)&&xd(n,e,a),r=r.next}while(r!==i)}Ii(t,e,n);break;case 1:if(!Qt&&(As(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(o){Tt(n,e,o)}Ii(t,e,n);break;case 21:Ii(t,e,n);break;case 22:n.mode&1?(Qt=(i=Qt)||n.memoizedState!==null,Ii(t,e,n),Qt=i):Ii(t,e,n);break;default:Ii(t,e,n)}}function Kh(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new dy),e.forEach(function(i){var r=Sy.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Fn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,a=e,o=a;e:for(;o!==null;){switch(o.tag){case 5:Bt=o.stateNode,jn=!1;break e;case 3:Bt=o.stateNode.containerInfo,jn=!0;break e;case 4:Bt=o.stateNode.containerInfo,jn=!0;break e}o=o.return}if(Bt===null)throw Error(le(160));Wg(s,a,r),Bt=null,jn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){Tt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Xg(e,t),e=e.sibling}function Xg(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Fn(e,t),ti(t),i&4){try{Oa(3,t,t.return),lc(3,t)}catch(M){Tt(t,t.return,M)}try{Oa(5,t,t.return)}catch(M){Tt(t,t.return,M)}}break;case 1:Fn(e,t),ti(t),i&512&&n!==null&&As(n,n.return);break;case 5:if(Fn(e,t),ti(t),i&512&&n!==null&&As(n,n.return),t.flags&32){var r=t.stateNode;try{Ga(r,"")}catch(M){Tt(t,t.return,M)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,a=n!==null?n.memoizedProps:s,o=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{o==="input"&&s.type==="radio"&&s.name!=null&&p0(r,s),ju(o,a);var c=ju(o,s);for(a=0;a<l.length;a+=2){var d=l[a],h=l[a+1];d==="style"?_0(r,h):d==="dangerouslySetInnerHTML"?x0(r,h):d==="children"?Ga(r,h):Xd(r,d,h,c)}switch(o){case"input":zu(r,s);break;case"textarea":m0(r,s);break;case"select":var f=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var m=s.value;m!=null?Ls(r,!!s.multiple,m,!1):f!==!!s.multiple&&(s.defaultValue!=null?Ls(r,!!s.multiple,s.defaultValue,!0):Ls(r,!!s.multiple,s.multiple?[]:"",!1))}r[Za]=s}catch(M){Tt(t,t.return,M)}}break;case 6:if(Fn(e,t),ti(t),i&4){if(t.stateNode===null)throw Error(le(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(M){Tt(t,t.return,M)}}break;case 3:if(Fn(e,t),ti(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Xa(e.containerInfo)}catch(M){Tt(t,t.return,M)}break;case 4:Fn(e,t),ti(t);break;case 13:Fn(e,t),ti(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(bf=bt())),i&4&&Kh(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(Qt=(c=Qt)||d,Fn(e,t),Qt=c):Fn(e,t),ti(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!d&&t.mode&1)for(Te=t,d=t.child;d!==null;){for(h=Te=d;Te!==null;){switch(f=Te,m=f.child,f.tag){case 0:case 11:case 14:case 15:Oa(4,f,f.return);break;case 1:As(f,f.return);var _=f.stateNode;if(typeof _.componentWillUnmount=="function"){i=f,n=f.return;try{e=i,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(M){Tt(i,n,M)}}break;case 5:As(f,f.return);break;case 22:if(f.memoizedState!==null){Qh(h);continue}}m!==null?(m.return=f,Te=m):Qh(h)}d=d.sibling}e:for(d=null,h=t;;){if(h.tag===5){if(d===null){d=h;try{r=h.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(o=h.stateNode,l=h.memoizedProps.style,a=l!=null&&l.hasOwnProperty("display")?l.display:null,o.style.display=v0("display",a))}catch(M){Tt(t,t.return,M)}}}else if(h.tag===6){if(d===null)try{h.stateNode.nodeValue=c?"":h.memoizedProps}catch(M){Tt(t,t.return,M)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;d===h&&(d=null),h=h.return}d===h&&(d=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Fn(e,t),ti(t),i&4&&Kh(t);break;case 21:break;default:Fn(e,t),ti(t)}}function ti(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(jg(n)){var i=n;break e}n=n.return}throw Error(le(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Ga(r,""),i.flags&=-33);var s=qh(t);yd(t,s,r);break;case 3:case 4:var a=i.stateNode.containerInfo,o=qh(t);_d(t,o,a);break;default:throw Error(le(161))}}catch(l){Tt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function hy(t,e,n){Te=t,Yg(t)}function Yg(t,e,n){for(var i=(t.mode&1)!==0;Te!==null;){var r=Te,s=r.child;if(r.tag===22&&i){var a=r.memoizedState!==null||Po;if(!a){var o=r.alternate,l=o!==null&&o.memoizedState!==null||Qt;o=Po;var c=Qt;if(Po=a,(Qt=l)&&!c)for(Te=r;Te!==null;)a=Te,l=a.child,a.tag===22&&a.memoizedState!==null?Jh(r):l!==null?(l.return=a,Te=l):Jh(r);for(;s!==null;)Te=s,Yg(s),s=s.sibling;Te=r,Po=o,Qt=c}Zh(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,Te=s):Zh(t)}}function Zh(t){for(;Te!==null;){var e=Te;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Qt||lc(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Qt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Vn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Uh(e,s,i);break;case 3:var a=e.updateQueue;if(a!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Uh(e,a,n)}break;case 5:var o=e.stateNode;if(n===null&&e.flags&4){n=o;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var h=d.dehydrated;h!==null&&Xa(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(le(163))}Qt||e.flags&512&&vd(e)}catch(f){Tt(e,e.return,f)}}if(e===t){Te=null;break}if(n=e.sibling,n!==null){n.return=e.return,Te=n;break}Te=e.return}}function Qh(t){for(;Te!==null;){var e=Te;if(e===t){Te=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Te=n;break}Te=e.return}}function Jh(t){for(;Te!==null;){var e=Te;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{lc(4,e)}catch(l){Tt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){Tt(e,r,l)}}var s=e.return;try{vd(e)}catch(l){Tt(e,s,l)}break;case 5:var a=e.return;try{vd(e)}catch(l){Tt(e,a,l)}}}catch(l){Tt(e,e.return,l)}if(e===t){Te=null;break}var o=e.sibling;if(o!==null){o.return=e.return,Te=o;break}Te=e.return}}var py=Math.ceil,Fl=Ni.ReactCurrentDispatcher,wf=Ni.ReactCurrentOwner,Ln=Ni.ReactCurrentBatchConfig,it=0,Ft=null,Pt=null,Vt=0,vn=0,Cs=cr(0),Lt=0,io=null,kr=0,cc=0,Tf=0,ka=null,cn=null,bf=0,Xs=1/0,xi=null,zl=!1,Sd=null,tr=null,No=!1,$i=null,Bl=0,Fa=0,Md=null,ml=-1,gl=0;function sn(){return it&6?bt():ml!==-1?ml:ml=bt()}function nr(t){return t.mode&1?it&2&&Vt!==0?Vt&-Vt:Z_.transition!==null?(gl===0&&(gl=N0()),gl):(t=lt,t!==0||(t=window.event,t=t===void 0?16:F0(t.type)),t):1}function Qn(t,e,n,i){if(50<Fa)throw Fa=0,Md=null,Error(le(185));ao(t,n,i),(!(it&2)||t!==Ft)&&(t===Ft&&(!(it&2)&&(cc|=n),Lt===4&&Wi(t,Vt)),pn(t,i),n===1&&it===0&&!(e.mode&1)&&(Xs=bt()+500,sc&&ur()))}function pn(t,e){var n=t.callbackNode;Zv(t,e);var i=El(t,t===Ft?Vt:0);if(i===0)n!==null&&lh(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&lh(n),e===1)t.tag===0?K_(ep.bind(null,t)):ig(ep.bind(null,t)),X_(function(){!(it&6)&&ur()}),n=null;else{switch(L0(i)){case 1:n=Zd;break;case 4:n=R0;break;case 16:n=Ml;break;case 536870912:n=P0;break;default:n=Ml}n=tx(n,$g.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function $g(t,e){if(ml=-1,gl=0,it&6)throw Error(le(327));var n=t.callbackNode;if(ks()&&t.callbackNode!==n)return null;var i=El(t,t===Ft?Vt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=Hl(t,i);else{e=i;var r=it;it|=2;var s=Kg();(Ft!==t||Vt!==e)&&(xi=null,Xs=bt()+500,Pr(t,e));do try{xy();break}catch(o){qg(t,o)}while(!0);df(),Fl.current=s,it=r,Pt!==null?e=0:(Ft=null,Vt=0,e=Lt)}if(e!==0){if(e===2&&(r=qu(t),r!==0&&(i=r,e=Ed(t,r))),e===1)throw n=io,Pr(t,0),Wi(t,i),pn(t,bt()),n;if(e===6)Wi(t,i);else{if(r=t.current.alternate,!(i&30)&&!my(r)&&(e=Hl(t,i),e===2&&(s=qu(t),s!==0&&(i=s,e=Ed(t,s))),e===1))throw n=io,Pr(t,0),Wi(t,i),pn(t,bt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(le(345));case 2:Sr(t,cn,xi);break;case 3:if(Wi(t,i),(i&130023424)===i&&(e=bf+500-bt(),10<e)){if(El(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){sn(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=id(Sr.bind(null,t,cn,xi),e);break}Sr(t,cn,xi);break;case 4:if(Wi(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var a=31-Zn(i);s=1<<a,a=e[a],a>r&&(r=a),i&=~s}if(i=r,i=bt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*py(i/1960))-i,10<i){t.timeoutHandle=id(Sr.bind(null,t,cn,xi),i);break}Sr(t,cn,xi);break;case 5:Sr(t,cn,xi);break;default:throw Error(le(329))}}}return pn(t,bt()),t.callbackNode===n?$g.bind(null,t):null}function Ed(t,e){var n=ka;return t.current.memoizedState.isDehydrated&&(Pr(t,e).flags|=256),t=Hl(t,e),t!==2&&(e=cn,cn=n,e!==null&&wd(e)),t}function wd(t){cn===null?cn=t:cn.push.apply(cn,t)}function my(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!ei(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Wi(t,e){for(e&=~Tf,e&=~cc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Zn(e),i=1<<n;t[n]=-1,e&=~i}}function ep(t){if(it&6)throw Error(le(327));ks();var e=El(t,0);if(!(e&1))return pn(t,bt()),null;var n=Hl(t,e);if(t.tag!==0&&n===2){var i=qu(t);i!==0&&(e=i,n=Ed(t,i))}if(n===1)throw n=io,Pr(t,0),Wi(t,e),pn(t,bt()),n;if(n===6)throw Error(le(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Sr(t,cn,xi),pn(t,bt()),null}function Af(t,e){var n=it;it|=1;try{return t(e)}finally{it=n,it===0&&(Xs=bt()+500,sc&&ur())}}function Fr(t){$i!==null&&$i.tag===0&&!(it&6)&&ks();var e=it;it|=1;var n=Ln.transition,i=lt;try{if(Ln.transition=null,lt=1,t)return t()}finally{lt=i,Ln.transition=n,it=e,!(it&6)&&ur()}}function Cf(){vn=Cs.current,vt(Cs)}function Pr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,W_(n)),Pt!==null)for(n=Pt.return;n!==null;){var i=n;switch(lf(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Cl();break;case 3:js(),vt(fn),vt(en),xf();break;case 5:gf(i);break;case 4:js();break;case 13:vt(Mt);break;case 19:vt(Mt);break;case 10:ff(i.type._context);break;case 22:case 23:Cf()}n=n.return}if(Ft=t,Pt=t=ir(t.current,null),Vt=vn=e,Lt=0,io=null,Tf=cc=kr=0,cn=ka=null,br!==null){for(e=0;e<br.length;e++)if(n=br[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var a=s.next;s.next=r,i.next=a}n.pending=i}br=null}return t}function qg(t,e){do{var n=Pt;try{if(df(),fl.current=kl,Ol){for(var i=Et.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Ol=!1}if(Or=0,kt=Nt=Et=null,Ua=!1,eo=0,wf.current=null,n===null||n.return===null){Lt=1,io=e,Pt=null;break}e:{var s=t,a=n.return,o=n,l=e;if(e=Vt,o.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,d=o,h=d.tag;if(!(d.mode&1)&&(h===0||h===11||h===15)){var f=d.alternate;f?(d.updateQueue=f.updateQueue,d.memoizedState=f.memoizedState,d.lanes=f.lanes):(d.updateQueue=null,d.memoizedState=null)}var m=Hh(a);if(m!==null){m.flags&=-257,Gh(m,a,o,s,e),m.mode&1&&Bh(s,c,e),e=m,l=c;var _=e.updateQueue;if(_===null){var M=new Set;M.add(l),e.updateQueue=M}else _.add(l);break e}else{if(!(e&1)){Bh(s,c,e),Rf();break e}l=Error(le(426))}}else if(yt&&o.mode&1){var p=Hh(a);if(p!==null){!(p.flags&65536)&&(p.flags|=256),Gh(p,a,o,s,e),cf(Ws(l,o));break e}}s=l=Ws(l,o),Lt!==4&&(Lt=2),ka===null?ka=[s]:ka.push(s),s=a;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var u=Lg(s,l,e);Ih(s,u);break e;case 1:o=l;var v=s.type,x=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(tr===null||!tr.has(x)))){s.flags|=65536,e&=-e,s.lanes|=e;var E=Dg(s,o,e);Ih(s,E);break e}}s=s.return}while(s!==null)}Qg(n)}catch(P){e=P,Pt===n&&n!==null&&(Pt=n=n.return);continue}break}while(!0)}function Kg(){var t=Fl.current;return Fl.current=kl,t===null?kl:t}function Rf(){(Lt===0||Lt===3||Lt===2)&&(Lt=4),Ft===null||!(kr&268435455)&&!(cc&268435455)||Wi(Ft,Vt)}function Hl(t,e){var n=it;it|=2;var i=Kg();(Ft!==t||Vt!==e)&&(xi=null,Pr(t,e));do try{gy();break}catch(r){qg(t,r)}while(!0);if(df(),it=n,Fl.current=i,Pt!==null)throw Error(le(261));return Ft=null,Vt=0,Lt}function gy(){for(;Pt!==null;)Zg(Pt)}function xy(){for(;Pt!==null&&!Gv();)Zg(Pt)}function Zg(t){var e=ex(t.alternate,t,vn);t.memoizedProps=t.pendingProps,e===null?Qg(t):Pt=e,wf.current=null}function Qg(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=uy(n,e),n!==null){n.flags&=32767,Pt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Lt=6,Pt=null;return}}else if(n=cy(n,e,vn),n!==null){Pt=n;return}if(e=e.sibling,e!==null){Pt=e;return}Pt=e=t}while(e!==null);Lt===0&&(Lt=5)}function Sr(t,e,n){var i=lt,r=Ln.transition;try{Ln.transition=null,lt=1,vy(t,e,n,i)}finally{Ln.transition=r,lt=i}return null}function vy(t,e,n,i){do ks();while($i!==null);if(it&6)throw Error(le(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(le(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(Qv(t,s),t===Ft&&(Pt=Ft=null,Vt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||No||(No=!0,tx(Ml,function(){return ks(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Ln.transition,Ln.transition=null;var a=lt;lt=1;var o=it;it|=4,wf.current=null,fy(t,n),Xg(n,t),F_(td),wl=!!ed,td=ed=null,t.current=n,hy(n),Vv(),it=o,lt=a,Ln.transition=s}else t.current=n;if(No&&(No=!1,$i=t,Bl=r),s=t.pendingLanes,s===0&&(tr=null),Xv(n.stateNode),pn(t,bt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(zl)throw zl=!1,t=Sd,Sd=null,t;return Bl&1&&t.tag!==0&&ks(),s=t.pendingLanes,s&1?t===Md?Fa++:(Fa=0,Md=t):Fa=0,ur(),null}function ks(){if($i!==null){var t=L0(Bl),e=Ln.transition,n=lt;try{if(Ln.transition=null,lt=16>t?16:t,$i===null)var i=!1;else{if(t=$i,$i=null,Bl=0,it&6)throw Error(le(331));var r=it;for(it|=4,Te=t.current;Te!==null;){var s=Te,a=s.child;if(Te.flags&16){var o=s.deletions;if(o!==null){for(var l=0;l<o.length;l++){var c=o[l];for(Te=c;Te!==null;){var d=Te;switch(d.tag){case 0:case 11:case 15:Oa(8,d,s)}var h=d.child;if(h!==null)h.return=d,Te=h;else for(;Te!==null;){d=Te;var f=d.sibling,m=d.return;if(Vg(d),d===c){Te=null;break}if(f!==null){f.return=m,Te=f;break}Te=m}}}var _=s.alternate;if(_!==null){var M=_.child;if(M!==null){_.child=null;do{var p=M.sibling;M.sibling=null,M=p}while(M!==null)}}Te=s}}if(s.subtreeFlags&2064&&a!==null)a.return=s,Te=a;else e:for(;Te!==null;){if(s=Te,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Oa(9,s,s.return)}var u=s.sibling;if(u!==null){u.return=s.return,Te=u;break e}Te=s.return}}var v=t.current;for(Te=v;Te!==null;){a=Te;var x=a.child;if(a.subtreeFlags&2064&&x!==null)x.return=a,Te=x;else e:for(a=v;Te!==null;){if(o=Te,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:lc(9,o)}}catch(P){Tt(o,o.return,P)}if(o===a){Te=null;break e}var E=o.sibling;if(E!==null){E.return=o.return,Te=E;break e}Te=o.return}}if(it=r,ur(),oi&&typeof oi.onPostCommitFiberRoot=="function")try{oi.onPostCommitFiberRoot(ec,t)}catch{}i=!0}return i}finally{lt=n,Ln.transition=e}}return!1}function tp(t,e,n){e=Ws(n,e),e=Lg(t,e,1),t=er(t,e,1),e=sn(),t!==null&&(ao(t,1,e),pn(t,e))}function Tt(t,e,n){if(t.tag===3)tp(t,t,n);else for(;e!==null;){if(e.tag===3){tp(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(tr===null||!tr.has(i))){t=Ws(n,t),t=Dg(e,t,1),e=er(e,t,1),t=sn(),e!==null&&(ao(e,1,t),pn(e,t));break}}e=e.return}}function _y(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=sn(),t.pingedLanes|=t.suspendedLanes&n,Ft===t&&(Vt&n)===n&&(Lt===4||Lt===3&&(Vt&130023424)===Vt&&500>bt()-bf?Pr(t,0):Tf|=n),pn(t,e)}function Jg(t,e){e===0&&(t.mode&1?(e=So,So<<=1,!(So&130023424)&&(So=4194304)):e=1);var n=sn();t=Ri(t,e),t!==null&&(ao(t,e,n),pn(t,n))}function yy(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Jg(t,n)}function Sy(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(le(314))}i!==null&&i.delete(e),Jg(t,n)}var ex;ex=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||fn.current)un=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return un=!1,ly(t,e,n);un=!!(t.flags&131072)}else un=!1,yt&&e.flags&1048576&&rg(e,Nl,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;pl(t,e),t=e.pendingProps;var r=Hs(e,en.current);Os(e,n),r=_f(null,e,i,t,r,n);var s=yf();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,hn(i)?(s=!0,Rl(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,pf(e),r.updater=oc,e.stateNode=r,r._reactInternals=e,ud(e,i,t,n),e=hd(null,e,i,!0,s,n)):(e.tag=0,yt&&s&&of(e),rn(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(pl(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=Ey(i),t=Vn(i,t),r){case 0:e=fd(null,e,i,t,n);break e;case 1:e=Wh(null,e,i,t,n);break e;case 11:e=Vh(null,e,i,t,n);break e;case 14:e=jh(null,e,i,Vn(i.type,t),n);break e}throw Error(le(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Vn(i,r),fd(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Vn(i,r),Wh(t,e,i,r,n);case 3:e:{if(kg(e),t===null)throw Error(le(387));i=e.pendingProps,s=e.memoizedState,r=s.element,ug(t,e),Il(e,i,null,n);var a=e.memoizedState;if(i=a.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Ws(Error(le(423)),e),e=Xh(t,e,i,n,r);break e}else if(i!==r){r=Ws(Error(le(424)),e),e=Xh(t,e,i,n,r);break e}else for(yn=Ji(e.stateNode.containerInfo.firstChild),Sn=e,yt=!0,Wn=null,n=lg(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Gs(),i===r){e=Pi(t,e,n);break e}rn(t,e,i,n)}e=e.child}return e;case 5:return dg(e),t===null&&od(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,a=r.children,nd(i,r)?a=null:s!==null&&nd(i,s)&&(e.flags|=32),Og(t,e),rn(t,e,a,n),e.child;case 6:return t===null&&od(e),null;case 13:return Fg(t,e,n);case 4:return mf(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Vs(e,null,i,n):rn(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Vn(i,r),Vh(t,e,i,r,n);case 7:return rn(t,e,e.pendingProps,n),e.child;case 8:return rn(t,e,e.pendingProps.children,n),e.child;case 12:return rn(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,a=r.value,mt(Ll,i._currentValue),i._currentValue=a,s!==null)if(ei(s.value,a)){if(s.children===r.children&&!fn.current){e=Pi(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var o=s.dependencies;if(o!==null){a=s.child;for(var l=o.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Mi(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?l.next=l:(l.next=d.next,d.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),ld(s.return,n,e),o.lanes|=n;break}l=l.next}}else if(s.tag===10)a=s.type===e.type?null:s.child;else if(s.tag===18){if(a=s.return,a===null)throw Error(le(341));a.lanes|=n,o=a.alternate,o!==null&&(o.lanes|=n),ld(a,n,e),a=s.sibling}else a=s.child;if(a!==null)a.return=s;else for(a=s;a!==null;){if(a===e){a=null;break}if(s=a.sibling,s!==null){s.return=a.return,a=s;break}a=a.return}s=a}rn(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Os(e,n),r=Un(r),i=i(r),e.flags|=1,rn(t,e,i,n),e.child;case 14:return i=e.type,r=Vn(i,e.pendingProps),r=Vn(i.type,r),jh(t,e,i,r,n);case 15:return Ig(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Vn(i,r),pl(t,e),e.tag=1,hn(i)?(t=!0,Rl(e)):t=!1,Os(e,n),Ng(e,i,r),ud(e,i,r,n),hd(null,e,i,!0,t,n);case 19:return zg(t,e,n);case 22:return Ug(t,e,n)}throw Error(le(156,e.tag))};function tx(t,e){return C0(t,e)}function My(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Nn(t,e,n,i){return new My(t,e,n,i)}function Pf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Ey(t){if(typeof t=="function")return Pf(t)?1:0;if(t!=null){if(t=t.$$typeof,t===$d)return 11;if(t===qd)return 14}return 2}function ir(t,e){var n=t.alternate;return n===null?(n=Nn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function xl(t,e,n,i,r,s){var a=2;if(i=t,typeof t=="function")Pf(t)&&(a=1);else if(typeof t=="string")a=5;else e:switch(t){case vs:return Nr(n.children,r,s,e);case Yd:a=8,r|=8;break;case Iu:return t=Nn(12,n,e,r|2),t.elementType=Iu,t.lanes=s,t;case Uu:return t=Nn(13,n,e,r),t.elementType=Uu,t.lanes=s,t;case Ou:return t=Nn(19,n,e,r),t.elementType=Ou,t.lanes=s,t;case d0:return uc(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case c0:a=10;break e;case u0:a=9;break e;case $d:a=11;break e;case qd:a=14;break e;case Hi:a=16,i=null;break e}throw Error(le(130,t==null?t:typeof t,""))}return e=Nn(a,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function Nr(t,e,n,i){return t=Nn(7,t,i,e),t.lanes=n,t}function uc(t,e,n,i){return t=Nn(22,t,i,e),t.elementType=d0,t.lanes=n,t.stateNode={isHidden:!1},t}function Xc(t,e,n){return t=Nn(6,t,null,e),t.lanes=n,t}function Yc(t,e,n){return e=Nn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function wy(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ac(0),this.expirationTimes=Ac(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ac(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Nf(t,e,n,i,r,s,a,o,l){return t=new wy(t,e,n,o,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Nn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},pf(s),t}function Ty(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:xs,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function nx(t){if(!t)return ar;t=t._reactInternals;e:{if(Hr(t)!==t||t.tag!==1)throw Error(le(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(hn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(le(171))}if(t.tag===1){var n=t.type;if(hn(n))return ng(t,n,e)}return e}function ix(t,e,n,i,r,s,a,o,l){return t=Nf(n,i,!0,t,r,s,a,o,l),t.context=nx(null),n=t.current,i=sn(),r=nr(n),s=Mi(i,r),s.callback=e??null,er(n,s,r),t.current.lanes=r,ao(t,r,i),pn(t,i),t}function dc(t,e,n,i){var r=e.current,s=sn(),a=nr(r);return n=nx(n),e.context===null?e.context=n:e.pendingContext=n,e=Mi(s,a),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=er(r,e,a),t!==null&&(Qn(t,r,a,s),dl(t,r,a)),a}function Gl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function np(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Lf(t,e){np(t,e),(t=t.alternate)&&np(t,e)}function by(){return null}var rx=typeof reportError=="function"?reportError:function(t){console.error(t)};function Df(t){this._internalRoot=t}fc.prototype.render=Df.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(le(409));dc(t,e,null,null)};fc.prototype.unmount=Df.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Fr(function(){dc(null,t,null,null)}),e[Ci]=null}};function fc(t){this._internalRoot=t}fc.prototype.unstable_scheduleHydration=function(t){if(t){var e=U0();t={blockedOn:null,target:t,priority:e};for(var n=0;n<ji.length&&e!==0&&e<ji[n].priority;n++);ji.splice(n,0,t),n===0&&k0(t)}};function If(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function hc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function ip(){}function Ay(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=Gl(a);s.call(c)}}var a=ix(e,i,t,0,null,!1,!1,"",ip);return t._reactRootContainer=a,t[Ci]=a.current,qa(t.nodeType===8?t.parentNode:t),Fr(),a}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var o=i;i=function(){var c=Gl(l);o.call(c)}}var l=Nf(t,0,!1,null,null,!1,!1,"",ip);return t._reactRootContainer=l,t[Ci]=l.current,qa(t.nodeType===8?t.parentNode:t),Fr(function(){dc(e,l,n,i)}),l}function pc(t,e,n,i,r){var s=n._reactRootContainer;if(s){var a=s;if(typeof r=="function"){var o=r;r=function(){var l=Gl(a);o.call(l)}}dc(e,a,t,r)}else a=Ay(n,e,t,r,i);return Gl(a)}D0=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Ca(e.pendingLanes);n!==0&&(Qd(e,n|1),pn(e,bt()),!(it&6)&&(Xs=bt()+500,ur()))}break;case 13:Fr(function(){var i=Ri(t,1);if(i!==null){var r=sn();Qn(i,t,1,r)}}),Lf(t,1)}};Jd=function(t){if(t.tag===13){var e=Ri(t,134217728);if(e!==null){var n=sn();Qn(e,t,134217728,n)}Lf(t,134217728)}};I0=function(t){if(t.tag===13){var e=nr(t),n=Ri(t,e);if(n!==null){var i=sn();Qn(n,t,e,i)}Lf(t,e)}};U0=function(){return lt};O0=function(t,e){var n=lt;try{return lt=t,e()}finally{lt=n}};Xu=function(t,e,n){switch(e){case"input":if(zu(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=rc(i);if(!r)throw Error(le(90));h0(i),zu(i,r)}}}break;case"textarea":m0(t,n);break;case"select":e=n.value,e!=null&&Ls(t,!!n.multiple,e,!1)}};M0=Af;E0=Fr;var Cy={usingClientEntryPoint:!1,Events:[lo,Ms,rc,y0,S0,Af]},pa={findFiberByHostInstance:Tr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Ry={bundleType:pa.bundleType,version:pa.version,rendererPackageName:pa.rendererPackageName,rendererConfig:pa.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ni.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=b0(t),t===null?null:t.stateNode},findFiberByHostInstance:pa.findFiberByHostInstance||by,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Lo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Lo.isDisabled&&Lo.supportsFiber)try{ec=Lo.inject(Ry),oi=Lo}catch{}}En.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Cy;En.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!If(e))throw Error(le(200));return Ty(t,e,null,n)};En.createRoot=function(t,e){if(!If(t))throw Error(le(299));var n=!1,i="",r=rx;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Nf(t,1,!1,null,null,n,!1,i,r),t[Ci]=e.current,qa(t.nodeType===8?t.parentNode:t),new Df(e)};En.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(le(188)):(t=Object.keys(t).join(","),Error(le(268,t)));return t=b0(e),t=t===null?null:t.stateNode,t};En.flushSync=function(t){return Fr(t)};En.hydrate=function(t,e,n){if(!hc(e))throw Error(le(200));return pc(null,t,e,!0,n)};En.hydrateRoot=function(t,e,n){if(!If(t))throw Error(le(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",a=rx;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),e=ix(e,null,t,1,n??null,r,!1,s,a),t[Ci]=e.current,qa(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new fc(e)};En.render=function(t,e,n){if(!hc(e))throw Error(le(200));return pc(null,t,e,!1,n)};En.unmountComponentAtNode=function(t){if(!hc(t))throw Error(le(40));return t._reactRootContainer?(Fr(function(){pc(null,null,t,!1,function(){t._reactRootContainer=null,t[Ci]=null})}),!0):!1};En.unstable_batchedUpdates=Af;En.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!hc(n))throw Error(le(200));if(t==null||t._reactInternals===void 0)throw Error(le(38));return pc(t,e,n,!1,i)};En.version="18.3.1-next-f1338f8080-20240426";function sx(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(sx)}catch(t){console.error(t)}}sx(),s0.exports=En;var Py=s0.exports,rp=Py;Lu.createRoot=rp.createRoot,Lu.hydrateRoot=rp.hydrateRoot;const Td=[{category:"EXECUTIVE",name:"Executive & C-Suite HQ",floorRange:[91,100],color:"#fbbf24",lightColor:"#fef08a",description:"CEO Operations, Boardroom, Autonomous Strategy Core, Vision Labs",iconName:"Crown"},{category:"QUANTUM",name:"Quantum Computing & AI Research",floorRange:[81,90],color:"#a855f7",lightColor:"#e9d5ff",description:"Supercomputing clusters, Quantum Entanglement Labs, Neural Architecture",iconName:"Cpu"},{category:"DEEP_LEARNING",name:"Deep Learning & LLM Training",floorRange:[71,80],color:"#3b82f6",lightColor:"#bfdbfe",description:"Model Fine-Tuning, Multi-Modal Embeddings, Reinforcement Learning",iconName:"Brain"},{category:"SOFTWARE",name:"Autonomous Software Engineering",floorRange:[61,70],color:"#06b6d4",lightColor:"#a5f3fc",description:"Automated Refactoring, Full-Stack Generation, CI/CD Pipeline Automation",iconName:"Code"},{category:"CYBER_DEFENSE",name:"Global Cyber Security Ops",floorRange:[51,60],color:"#ef4444",lightColor:"#fca5a5",description:"Zero-Trust Defense, Threat Intelligence, Intrusion Prevention",iconName:"ShieldAlert"},{category:"FINANCE",name:"Algorithmic Trading & Finance",floorRange:[41,50],color:"#10b981",lightColor:"#a7f3d0",description:"High-Frequency Quantitative Models, Risk Hedging, Capital Allocation",iconName:"TrendingUp"},{category:"CREATIVE",name:"Creative Studio & 3D Lab",floorRange:[31,40],color:"#ec4899",lightColor:"#fbcfe8",description:"UI/UX Design Systems, Procedural Asset Generation, Motion Graphics",iconName:"Palette"},{category:"DATA_ANALYTICS",name:"Big Data & Enterprise Analytics",floorRange:[21,30],color:"#8b5cf6",lightColor:"#ddd6fe",description:"Real-Time ETL Pipelines, Predictive Business Analytics, Data Lakes",iconName:"BarChart3"},{category:"OPERATIONS",name:"Customer Experience & Ops",floorRange:[11,20],color:"#f97316",lightColor:"#ffedd5",description:"Global Support Automation, Logistics Routing, SLA Optimization",iconName:"Headphones"},{category:"LOBBY_ATRIUM",name:"Innovation Atrium & Bio-Lounge",floorRange:[1,10],color:"#14b8a6",lightColor:"#99f6e4",description:"High-Tech Visitor Center, Central Elevator Hub, Hydroponic Bio-Lounge",iconName:"Building2"}],Ny=()=>typeof window>"u"?!1:/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)||window.innerWidth<768,Ly={emergencyPause:!1,modelPriority:["Claude 3.5 Sonnet","Gemini 1.5 Pro","GPT-4o Enterprise","DeepSeek-V3","Llama 3.1 70B"],tokenBudgetLimit:5e7,globalAutoSwitch:!0,activeBroadcastMessage:null,overclockedFloors:[95,85,75,45],graphicsQuality:Ny()?"low":"high"};function ax(t){const e=(t-1)*3+1.2;return[{id:`f${t}_desk1`,type:"desk",pos:{x:-3.5,y:e,z:-3.5},label:"Workstation A"},{id:`f${t}_desk2`,type:"desk",pos:{x:3.5,y:e,z:-3.5},label:"Workstation B"},{id:`f${t}_desk3`,type:"desk",pos:{x:-3.5,y:e,z:3.5},label:"Workstation C"},{id:`f${t}_desk4`,type:"desk",pos:{x:3.5,y:e,z:3.5},label:"Workstation D"},{id:`f${t}_meeting`,type:"meeting",pos:{x:0,y:e,z:-4},label:"Conference Table"},{id:`f${t}_lounge`,type:"lounge",pos:{x:-4,y:e,z:0},label:"Bio-Coffee Lounge"},{id:`f${t}_elevator`,type:"elevator",pos:{x:0,y:e,z:0},label:"Elevator Shaft"},{id:`f${t}_hallway`,type:"hallway",pos:{x:2,y:e,z:0},label:"Main Hallway"}]}const sp=["Alex","Mira","Zed","Luna","Neo","Aria","Cipher","Vesper","Kaelen","Seraph","Orion","Lyra","Nyx","Atlas","Nova","Titan","Zephyr","Helios","Aura","Sol","Ignis","Elysia","Vector","Nexus","Echo","Drift","Talon"],ap=["Quantum","Nexus","Analyzer","Insight","Dataset","Vanguard","Starlight","Hyperion","Zero","Pulse","Matrix","Apex","Core","Vortex","Synapse","Strata","Circuit","Chrono","Paragon","Spectra","Logic","Horizon"],op=["Claude 3.5 Sonnet","Gemini 1.5 Pro","GPT-4o Enterprise","Llama 3.1 70B","DeepSeek-V3"],lp=["sphere","cube","octahedron","torus","pyramid","cylinder"];function Uf(t){for(const e of Td)if(t>=e.floorRange[0]&&t<=e.floorRange[1])return e;return Td[9]}function Dy(){const t=[];for(let e=1;e<=100;e++){const n=Uf(e),i=ax(e),r=Math.floor(Math.random()*3)+3,s=[];for(let a=0;a<r;a++){const o=sp[Math.floor(Math.random()*sp.length)],l=ap[Math.floor(Math.random()*ap.length)],c=`agent_f${e}_${a+1}`,d=op[Math.floor(Math.random()*op.length)],h=lp[Math.floor(Math.random()*lp.length)],f=i[a%i.length],m=["working_at_desk","working_at_desk","in_meeting","walking","coffee_break","thinking"],_=m[Math.floor(Math.random()*m.length)];s.push({id:c,name:`${o} ${l}`,codeName:`AGNT-${e.toString().padStart(3,"0")}-${(a+1).toString().padStart(2,"0")}`,role:`${n.name.split(" ")[0]} Specialist`,departmentId:n.category,departmentName:n.name,floorId:e,roomId:`room_f${e}_main`,roomName:`${n.name} Workspace ${e}`,status:_,avatarColor:n.color,avatarShape:h,aiModel:d,cpuLoad:Math.floor(Math.random()*45)+35,memoryUsage:Math.floor(Math.random()*40)+45,tokensPerSec:Math.floor(Math.random()*1200)+800,efficiencyScore:Math.floor(Math.random()*15)+85,currentTask:{id:`task_${e}_${a}`,title:`Optimizing ${n.name} Autonomous System (L${e})`,progress:Math.floor(Math.random()*70)+20,status:"in_progress",eta:`${Math.floor(Math.random()*15)+2}m`,priority:Math.random()>.8?"URGENT":"HIGH",subtasks:[{id:"st1",text:"Initialize neural weights & buffers",done:!0},{id:"st2",text:"Stream tensor batch payload",done:!0},{id:"st3",text:"Validate output latency < 5ms",done:!1}]},logs:[{id:`log_${e}_1`,timestamp:"18:45:10",message:`Connected to ${d} hyper-cluster`,severity:"info",source:"System"},{id:`log_${e}_2`,timestamp:"18:45:22",message:"Executing multi-node vector search query",severity:"exec",source:"AgentCore"}],memory:[{id:`mem_${e}_1`,topic:"System Strategy",details:`Optimized floor ${e} pipeline latency by 18%`,category:"short_term",timestamp:"10m ago"}],pos:{...f.pos},targetPos:{...f.pos},currentWaypointId:f.id,speechBubble:_==="in_meeting"?"Reviewing Q3 AI performance roadmap...":void 0})}t.push({id:e,name:`Floor ${e}`,departmentCategory:n.category,departmentName:n.name,code:`FLR-${e.toString().padStart(3,"0")}`,description:n.description,themeColor:n.color,lightColor:n.lightColor,rooms:[{id:`room_f${e}_1`,name:`${n.name} Main Lab`,code:`LAB-${e}`,description:`Primary operations center for Floor ${e}`,agentIds:s.map(a=>a.id),bounds:{x:0,z:0,width:14,depth:14}}],agents:s,capacity:s.length,maxCapacity:6,energyUsageKW:Math.floor(Math.random()*150)+120,activeProcesses:Math.floor(Math.random()*25)+10})}return t}const Iy=Dy(),Uy={totalAgents:420,activeAgents:384,activeTasks:168,totalTokensGenerated:148920400,overallCpuLoad:42,quantumClusterStatus:"Optimal",securityLevel:"MAXIMUM",totalEarningsSavedUSD:845200,tokenBurnRatePerMin:245e3,activeFloorsCount:100},Oy=[{id:"msg-1",timestamp:"18:44:12",senderId:"agent_f95_1",senderName:"Alex Quantum (Floor 95 - Executive)",receiverId:"agent_f85_1",receiverName:"Mira Nexus (Floor 85 - Quantum)",content:"Reallocating 500 A100 GPU nodes to Deep Learning LLM training pipeline.",topic:"GPU Allocation",tokenCount:420,status:"delivered"},{id:"msg-2",timestamp:"18:44:45",senderId:"agent_f65_2",senderName:"Cipher Vanguard (Floor 65 - Software)",receiverId:"agent_f55_1",receiverName:"Zed Analyzer (Floor 55 - Cyber Defense)",content:"Zero-day vulnerability patch auto-compiled and deployed to Floor 55 firewall.",topic:"Security Patch",tokenCount:890,status:"delivered"},{id:"msg-3",timestamp:"18:45:02",senderId:"agent_f45_1",senderName:"Luna Insight (Floor 45 - Finance)",receiverId:"agent_f25_1",receiverName:"Neo Dataset (Floor 25 - Big Data)",content:"Arbitrage prediction model latency reduced to 1.2ms. Standby for market close sync.",topic:"Market Prediction",tokenCount:1250,status:"processing"}],ky=[{id:"notif-1",timestamp:"18:45:00",title:"Floor 95 Overclock Triggered",message:"CEO Command Center authorized hyper-drive speed on Floor 95 C-Suite.",type:"success",floorId:95}];/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Of="162",$r={ROTATE:0,DOLLY:1,PAN:2},qr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Fy=0,cp=1,zy=2,ox=1,lx=2,gi=3,or=0,mn=1,Xn=2,Ei=0,Fs=1,bd=2,up=3,dp=4,By=5,Er=100,Hy=101,Gy=102,fp=103,hp=104,Vy=200,jy=201,Wy=202,Xy=203,Ad=204,Cd=205,Yy=206,$y=207,qy=208,Ky=209,Zy=210,Qy=211,Jy=212,eS=213,tS=214,nS=0,iS=1,rS=2,Vl=3,sS=4,aS=5,oS=6,lS=7,cx=0,cS=1,uS=2,wi=0,dS=1,fS=2,hS=3,ux=4,pS=5,mS=6,gS=7,dx=300,Ys=301,$s=302,Rd=303,Pd=304,mc=306,Nd=1e3,Yn=1001,Ld=1002,Ht=1003,pp=1004,ma=1005,ln=1006,$c=1007,Cr=1008,rr=1009,xS=1010,vS=1011,kf=1012,fx=1013,qi=1014,ai=1015,Ti=1016,hx=1017,px=1018,Lr=1020,_S=1021,$n=1023,yS=1024,SS=1025,Dr=1026,qs=1027,mx=1028,gx=1029,MS=1030,xx=1031,vx=1033,qc=33776,Kc=33777,Zc=33778,Qc=33779,mp=35840,gp=35841,xp=35842,vp=35843,_x=36196,_p=37492,yp=37496,Sp=37808,Mp=37809,Ep=37810,wp=37811,Tp=37812,bp=37813,Ap=37814,Cp=37815,Rp=37816,Pp=37817,Np=37818,Lp=37819,Dp=37820,Ip=37821,Jc=36492,Up=36494,Op=36495,ES=36283,kp=36284,Fp=36285,zp=36286,wS=3200,TS=3201,yx=0,bS=1,Xi="",ii="srgb",dr="srgb-linear",Ff="display-p3",gc="display-p3-linear",jl="linear",xt="srgb",Wl="rec709",Xl="p3",Kr=7680,Bp=519,AS=512,CS=513,RS=514,Sx=515,PS=516,NS=517,LS=518,DS=519,Dd=35044,Hp="300 es",Id=1035,Si=2e3,Yl=2001;class Gr{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Kt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Gp=1234567;const za=Math.PI/180,ro=180/Math.PI;function bi(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Kt[t&255]+Kt[t>>8&255]+Kt[t>>16&255]+Kt[t>>24&255]+"-"+Kt[e&255]+Kt[e>>8&255]+"-"+Kt[e>>16&15|64]+Kt[e>>24&255]+"-"+Kt[n&63|128]+Kt[n>>8&255]+"-"+Kt[n>>16&255]+Kt[n>>24&255]+Kt[i&255]+Kt[i>>8&255]+Kt[i>>16&255]+Kt[i>>24&255]).toLowerCase()}function Gt(t,e,n){return Math.max(e,Math.min(n,t))}function zf(t,e){return(t%e+e)%e}function IS(t,e,n,i,r){return i+(t-e)*(r-i)/(n-e)}function US(t,e,n){return t!==e?(n-t)/(e-t):0}function Ba(t,e,n){return(1-n)*t+n*e}function OS(t,e,n,i){return Ba(t,e,1-Math.exp(-n*i))}function kS(t,e=1){return e-Math.abs(zf(t,e*2)-e)}function FS(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*(3-2*t))}function zS(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*t*(t*(t*6-15)+10))}function BS(t,e){return t+Math.floor(Math.random()*(e-t+1))}function HS(t,e){return t+Math.random()*(e-t)}function GS(t){return t*(.5-Math.random())}function VS(t){t!==void 0&&(Gp=t);let e=Gp+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function jS(t){return t*za}function WS(t){return t*ro}function Ud(t){return(t&t-1)===0&&t!==0}function XS(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function $l(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function YS(t,e,n,i,r){const s=Math.cos,a=Math.sin,o=s(n/2),l=a(n/2),c=s((e+i)/2),d=a((e+i)/2),h=s((e-i)/2),f=a((e-i)/2),m=s((i-e)/2),_=a((i-e)/2);switch(r){case"XYX":t.set(o*d,l*h,l*f,o*c);break;case"YZY":t.set(l*f,o*d,l*h,o*c);break;case"ZXZ":t.set(l*h,l*f,o*d,o*c);break;case"XZX":t.set(o*d,l*_,l*m,o*c);break;case"YXY":t.set(l*m,o*d,l*_,o*c);break;case"ZYZ":t.set(l*_,l*m,o*d,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function qn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function ot(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const Od={DEG2RAD:za,RAD2DEG:ro,generateUUID:bi,clamp:Gt,euclideanModulo:zf,mapLinear:IS,inverseLerp:US,lerp:Ba,damp:OS,pingpong:kS,smoothstep:FS,smootherstep:zS,randInt:BS,randFloat:HS,randFloatSpread:GS,seededRandom:VS,degToRad:jS,radToDeg:WS,isPowerOfTwo:Ud,ceilPowerOfTwo:XS,floorPowerOfTwo:$l,setQuaternionFromProperEuler:YS,normalize:ot,denormalize:qn};class we{constructor(e=0,n=0){we.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Gt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ke{constructor(e,n,i,r,s,a,o,l,c){Ke.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,c)}set(e,n,i,r,s,a,o,l,c){const d=this.elements;return d[0]=e,d[1]=r,d[2]=o,d[3]=n,d[4]=s,d[5]=l,d[6]=i,d[7]=a,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],d=i[4],h=i[7],f=i[2],m=i[5],_=i[8],M=r[0],p=r[3],u=r[6],v=r[1],x=r[4],E=r[7],P=r[2],A=r[5],w=r[8];return s[0]=a*M+o*v+l*P,s[3]=a*p+o*x+l*A,s[6]=a*u+o*E+l*w,s[1]=c*M+d*v+h*P,s[4]=c*p+d*x+h*A,s[7]=c*u+d*E+h*w,s[2]=f*M+m*v+_*P,s[5]=f*p+m*x+_*A,s[8]=f*u+m*E+_*w,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8];return n*a*d-n*o*c-i*s*d+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8],h=d*a-o*c,f=o*l-d*s,m=c*s-a*l,_=n*h+i*f+r*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/_;return e[0]=h*M,e[1]=(r*c-d*i)*M,e[2]=(o*i-r*a)*M,e[3]=f*M,e[4]=(d*n-r*l)*M,e[5]=(r*s-o*n)*M,e[6]=m*M,e[7]=(i*l-c*n)*M,e[8]=(a*n-i*s)*M,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+n,0,0,1),this}scale(e,n){return this.premultiply(eu.makeScale(e,n)),this}rotate(e){return this.premultiply(eu.makeRotation(-e)),this}translate(e,n){return this.premultiply(eu.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const eu=new Ke;function Mx(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function ql(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function $S(){const t=ql("canvas");return t.style.display="block",t}const Vp={};function Ex(t){t in Vp||(Vp[t]=!0,console.warn(t))}const jp=new Ke().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Wp=new Ke().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Do={[dr]:{transfer:jl,primaries:Wl,toReference:t=>t,fromReference:t=>t},[ii]:{transfer:xt,primaries:Wl,toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[gc]:{transfer:jl,primaries:Xl,toReference:t=>t.applyMatrix3(Wp),fromReference:t=>t.applyMatrix3(jp)},[Ff]:{transfer:xt,primaries:Xl,toReference:t=>t.convertSRGBToLinear().applyMatrix3(Wp),fromReference:t=>t.applyMatrix3(jp).convertLinearToSRGB()}},qS=new Set([dr,gc]),ft={enabled:!0,_workingColorSpace:dr,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!qS.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=Do[e].toReference,r=Do[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return Do[t].primaries},getTransfer:function(t){return t===Xi?jl:Do[t].transfer}};function zs(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function tu(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Zr;class wx{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Zr===void 0&&(Zr=ql("canvas")),Zr.width=e.width,Zr.height=e.height;const i=Zr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Zr}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=ql("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=zs(s[a]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(zs(n[i]/255)*255):n[i]=zs(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let KS=0;class Tx{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:KS++}),this.uuid=bi(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(nu(r[a].image)):s.push(nu(r[a]))}else s=nu(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function nu(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?wx.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let ZS=0;class Jt extends Gr{constructor(e=Jt.DEFAULT_IMAGE,n=Jt.DEFAULT_MAPPING,i=Yn,r=Yn,s=ln,a=Cr,o=$n,l=rr,c=Jt.DEFAULT_ANISOTROPY,d=Xi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ZS++}),this.uuid=bi(),this.name="",this.source=new Tx(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new we(0,0),this.repeat=new we(1,1),this.center=new we(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==dx)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Nd:e.x=e.x-Math.floor(e.x);break;case Yn:e.x=e.x<0?0:1;break;case Ld:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Nd:e.y=e.y-Math.floor(e.y);break;case Yn:e.y=e.y<0?0:1;break;case Ld:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}Jt.DEFAULT_IMAGE=null;Jt.DEFAULT_MAPPING=dx;Jt.DEFAULT_ANISOTROPY=1;class St{constructor(e=0,n=0,i=0,r=1){St.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*n+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*n+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*n+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*n+a[7]*i+a[11]*r+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],d=l[4],h=l[8],f=l[1],m=l[5],_=l[9],M=l[2],p=l[6],u=l[10];if(Math.abs(d-f)<.01&&Math.abs(h-M)<.01&&Math.abs(_-p)<.01){if(Math.abs(d+f)<.1&&Math.abs(h+M)<.1&&Math.abs(_+p)<.1&&Math.abs(c+m+u-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const x=(c+1)/2,E=(m+1)/2,P=(u+1)/2,A=(d+f)/4,w=(h+M)/4,D=(_+p)/4;return x>E&&x>P?x<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(x),r=A/i,s=w/i):E>P?E<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(E),i=A/r,s=D/r):P<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(P),i=w/s,r=D/s),this.set(i,r,s,n),this}let v=Math.sqrt((p-_)*(p-_)+(h-M)*(h-M)+(f-d)*(f-d));return Math.abs(v)<.001&&(v=1),this.x=(p-_)/v,this.y=(h-M)/v,this.z=(f-d)/v,this.w=Math.acos((c+m+u-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class QS extends Gr{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new St(0,0,e,n),this.scissorTest=!1,this.viewport=new St(0,0,e,n);const r={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ln,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0,count:1},i);const s=new Jt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new Tx(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Jn extends QS{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class bx extends Jt{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Ht,this.minFilter=Ht,this.wrapR=Yn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class JS extends Jt{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Ht,this.minFilter=Ht,this.wrapR=Yn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class zr{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,a,o){let l=i[r+0],c=i[r+1],d=i[r+2],h=i[r+3];const f=s[a+0],m=s[a+1],_=s[a+2],M=s[a+3];if(o===0){e[n+0]=l,e[n+1]=c,e[n+2]=d,e[n+3]=h;return}if(o===1){e[n+0]=f,e[n+1]=m,e[n+2]=_,e[n+3]=M;return}if(h!==M||l!==f||c!==m||d!==_){let p=1-o;const u=l*f+c*m+d*_+h*M,v=u>=0?1:-1,x=1-u*u;if(x>Number.EPSILON){const P=Math.sqrt(x),A=Math.atan2(P,u*v);p=Math.sin(p*A)/P,o=Math.sin(o*A)/P}const E=o*v;if(l=l*p+f*E,c=c*p+m*E,d=d*p+_*E,h=h*p+M*E,p===1-o){const P=1/Math.sqrt(l*l+c*c+d*d+h*h);l*=P,c*=P,d*=P,h*=P}}e[n]=l,e[n+1]=c,e[n+2]=d,e[n+3]=h}static multiplyQuaternionsFlat(e,n,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],d=i[r+3],h=s[a],f=s[a+1],m=s[a+2],_=s[a+3];return e[n]=o*_+d*h+l*m-c*f,e[n+1]=l*_+d*f+c*h-o*m,e[n+2]=c*_+d*m+o*f-l*h,e[n+3]=d*_-o*h-l*f-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),d=o(r/2),h=o(s/2),f=l(i/2),m=l(r/2),_=l(s/2);switch(a){case"XYZ":this._x=f*d*h+c*m*_,this._y=c*m*h-f*d*_,this._z=c*d*_+f*m*h,this._w=c*d*h-f*m*_;break;case"YXZ":this._x=f*d*h+c*m*_,this._y=c*m*h-f*d*_,this._z=c*d*_-f*m*h,this._w=c*d*h+f*m*_;break;case"ZXY":this._x=f*d*h-c*m*_,this._y=c*m*h+f*d*_,this._z=c*d*_+f*m*h,this._w=c*d*h-f*m*_;break;case"ZYX":this._x=f*d*h-c*m*_,this._y=c*m*h+f*d*_,this._z=c*d*_-f*m*h,this._w=c*d*h+f*m*_;break;case"YZX":this._x=f*d*h+c*m*_,this._y=c*m*h+f*d*_,this._z=c*d*_-f*m*h,this._w=c*d*h-f*m*_;break;case"XZY":this._x=f*d*h-c*m*_,this._y=c*m*h-f*d*_,this._z=c*d*_+f*m*h,this._w=c*d*h+f*m*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],a=n[1],o=n[5],l=n[9],c=n[2],d=n[6],h=n[10],f=i+o+h;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(d-l)*m,this._y=(s-c)*m,this._z=(a-r)*m}else if(i>o&&i>h){const m=2*Math.sqrt(1+i-o-h);this._w=(d-l)/m,this._x=.25*m,this._y=(r+a)/m,this._z=(s+c)/m}else if(o>h){const m=2*Math.sqrt(1+o-i-h);this._w=(s-c)/m,this._x=(r+a)/m,this._y=.25*m,this._z=(l+d)/m}else{const m=2*Math.sqrt(1+h-i-o);this._w=(a-r)/m,this._x=(s+c)/m,this._y=(l+d)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Gt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,a=e._w,o=n._x,l=n._y,c=n._z,d=n._w;return this._x=i*d+a*o+r*c-s*l,this._y=r*d+a*l+s*o-i*c,this._z=s*d+a*c+i*l-r*o,this._w=a*d-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+i*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const m=1-n;return this._w=m*a+n*this._w,this._x=m*i+n*this._x,this._y=m*r+n*this._y,this._z=m*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),d=Math.atan2(c,o),h=Math.sin((1-n)*d)/c,f=Math.sin(n*d)/c;return this._w=a*h+this._w*f,this._x=i*h+this._x*f,this._y=r*h+this._y*f,this._z=s*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class U{constructor(e=0,n=0,i=0){U.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Xp.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Xp.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*i),d=2*(o*n-s*r),h=2*(s*i-a*n);return this.x=n+l*c+a*h-o*d,this.y=i+l*d+o*c-s*h,this.z=r+l*h+s*d-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,a=n.x,o=n.y,l=n.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return iu.copy(this).projectOnVector(e),this.sub(iu)}reflect(e){return this.sub(iu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Gt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const iu=new U,Xp=new zr;class Vr{constructor(e=new U(1/0,1/0,1/0),n=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(zn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(zn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=zn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,zn):zn.fromBufferAttribute(s,a),zn.applyMatrix4(e.matrixWorld),this.expandByPoint(zn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Io.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Io.copy(i.boundingBox)),Io.applyMatrix4(e.matrixWorld),this.union(Io)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,zn),zn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ga),Uo.subVectors(this.max,ga),Qr.subVectors(e.a,ga),Jr.subVectors(e.b,ga),es.subVectors(e.c,ga),Ui.subVectors(Jr,Qr),Oi.subVectors(es,Jr),pr.subVectors(Qr,es);let n=[0,-Ui.z,Ui.y,0,-Oi.z,Oi.y,0,-pr.z,pr.y,Ui.z,0,-Ui.x,Oi.z,0,-Oi.x,pr.z,0,-pr.x,-Ui.y,Ui.x,0,-Oi.y,Oi.x,0,-pr.y,pr.x,0];return!ru(n,Qr,Jr,es,Uo)||(n=[1,0,0,0,1,0,0,0,1],!ru(n,Qr,Jr,es,Uo))?!1:(Oo.crossVectors(Ui,Oi),n=[Oo.x,Oo.y,Oo.z],ru(n,Qr,Jr,es,Uo))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,zn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(zn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(di[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),di[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),di[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),di[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),di[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),di[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),di[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),di[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(di),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const di=[new U,new U,new U,new U,new U,new U,new U,new U],zn=new U,Io=new Vr,Qr=new U,Jr=new U,es=new U,Ui=new U,Oi=new U,pr=new U,ga=new U,Uo=new U,Oo=new U,mr=new U;function ru(t,e,n,i,r){for(let s=0,a=t.length-3;s<=a;s+=3){mr.fromArray(t,s);const o=r.x*Math.abs(mr.x)+r.y*Math.abs(mr.y)+r.z*Math.abs(mr.z),l=e.dot(mr),c=n.dot(mr),d=i.dot(mr);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>o)return!1}return!0}const eM=new Vr,xa=new U,su=new U;class uo{constructor(e=new U,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):eM.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;xa.subVectors(e,this.center);const n=xa.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(xa,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(su.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(xa.copy(e.center).add(su)),this.expandByPoint(xa.copy(e.center).sub(su))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const fi=new U,au=new U,ko=new U,ki=new U,ou=new U,Fo=new U,lu=new U;class Bf{constructor(e=new U,n=new U(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,fi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=fi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(fi.copy(this.origin).addScaledVector(this.direction,n),fi.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){au.copy(e).add(n).multiplyScalar(.5),ko.copy(n).sub(e).normalize(),ki.copy(this.origin).sub(au);const s=e.distanceTo(n)*.5,a=-this.direction.dot(ko),o=ki.dot(this.direction),l=-ki.dot(ko),c=ki.lengthSq(),d=Math.abs(1-a*a);let h,f,m,_;if(d>0)if(h=a*l-o,f=a*o-l,_=s*d,h>=0)if(f>=-_)if(f<=_){const M=1/d;h*=M,f*=M,m=h*(h+a*f+2*o)+f*(a*h+f+2*l)+c}else f=s,h=Math.max(0,-(a*f+o)),m=-h*h+f*(f+2*l)+c;else f=-s,h=Math.max(0,-(a*f+o)),m=-h*h+f*(f+2*l)+c;else f<=-_?(h=Math.max(0,-(-a*s+o)),f=h>0?-s:Math.min(Math.max(-s,-l),s),m=-h*h+f*(f+2*l)+c):f<=_?(h=0,f=Math.min(Math.max(-s,-l),s),m=f*(f+2*l)+c):(h=Math.max(0,-(a*s+o)),f=h>0?s:Math.min(Math.max(-s,-l),s),m=-h*h+f*(f+2*l)+c);else f=a>0?-s:s,h=Math.max(0,-(a*f+o)),m=-h*h+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(au).addScaledVector(ko,f),m}intersectSphere(e,n){fi.subVectors(e.center,this.origin);const i=fi.dot(this.direction),r=fi.dot(fi)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,a,o,l;const c=1/this.direction.x,d=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),d>=0?(s=(e.min.y-f.y)*d,a=(e.max.y-f.y)*d):(s=(e.max.y-f.y)*d,a=(e.min.y-f.y)*d),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),h>=0?(o=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(o=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,fi)!==null}intersectTriangle(e,n,i,r,s){ou.subVectors(n,e),Fo.subVectors(i,e),lu.crossVectors(ou,Fo);let a=this.direction.dot(lu),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;ki.subVectors(this.origin,e);const l=o*this.direction.dot(Fo.crossVectors(ki,Fo));if(l<0)return null;const c=o*this.direction.dot(ou.cross(ki));if(c<0||l+c>a)return null;const d=-o*ki.dot(lu);return d<0?null:this.at(d/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ht{constructor(e,n,i,r,s,a,o,l,c,d,h,f,m,_,M,p){ht.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,c,d,h,f,m,_,M,p)}set(e,n,i,r,s,a,o,l,c,d,h,f,m,_,M,p){const u=this.elements;return u[0]=e,u[4]=n,u[8]=i,u[12]=r,u[1]=s,u[5]=a,u[9]=o,u[13]=l,u[2]=c,u[6]=d,u[10]=h,u[14]=f,u[3]=m,u[7]=_,u[11]=M,u[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ht().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/ts.setFromMatrixColumn(e,0).length(),s=1/ts.setFromMatrixColumn(e,1).length(),a=1/ts.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*a,n[9]=i[9]*a,n[10]=i[10]*a,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),d=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const f=a*d,m=a*h,_=o*d,M=o*h;n[0]=l*d,n[4]=-l*h,n[8]=c,n[1]=m+_*c,n[5]=f-M*c,n[9]=-o*l,n[2]=M-f*c,n[6]=_+m*c,n[10]=a*l}else if(e.order==="YXZ"){const f=l*d,m=l*h,_=c*d,M=c*h;n[0]=f+M*o,n[4]=_*o-m,n[8]=a*c,n[1]=a*h,n[5]=a*d,n[9]=-o,n[2]=m*o-_,n[6]=M+f*o,n[10]=a*l}else if(e.order==="ZXY"){const f=l*d,m=l*h,_=c*d,M=c*h;n[0]=f-M*o,n[4]=-a*h,n[8]=_+m*o,n[1]=m+_*o,n[5]=a*d,n[9]=M-f*o,n[2]=-a*c,n[6]=o,n[10]=a*l}else if(e.order==="ZYX"){const f=a*d,m=a*h,_=o*d,M=o*h;n[0]=l*d,n[4]=_*c-m,n[8]=f*c+M,n[1]=l*h,n[5]=M*c+f,n[9]=m*c-_,n[2]=-c,n[6]=o*l,n[10]=a*l}else if(e.order==="YZX"){const f=a*l,m=a*c,_=o*l,M=o*c;n[0]=l*d,n[4]=M-f*h,n[8]=_*h+m,n[1]=h,n[5]=a*d,n[9]=-o*d,n[2]=-c*d,n[6]=m*h+_,n[10]=f-M*h}else if(e.order==="XZY"){const f=a*l,m=a*c,_=o*l,M=o*c;n[0]=l*d,n[4]=-h,n[8]=c*d,n[1]=f*h+M,n[5]=a*d,n[9]=m*h-_,n[2]=_*h-m,n[6]=o*d,n[10]=M*h+f}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(tM,e,nM)}lookAt(e,n,i){const r=this.elements;return gn.subVectors(e,n),gn.lengthSq()===0&&(gn.z=1),gn.normalize(),Fi.crossVectors(i,gn),Fi.lengthSq()===0&&(Math.abs(i.z)===1?gn.x+=1e-4:gn.z+=1e-4,gn.normalize(),Fi.crossVectors(i,gn)),Fi.normalize(),zo.crossVectors(gn,Fi),r[0]=Fi.x,r[4]=zo.x,r[8]=gn.x,r[1]=Fi.y,r[5]=zo.y,r[9]=gn.y,r[2]=Fi.z,r[6]=zo.z,r[10]=gn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],d=i[1],h=i[5],f=i[9],m=i[13],_=i[2],M=i[6],p=i[10],u=i[14],v=i[3],x=i[7],E=i[11],P=i[15],A=r[0],w=r[4],D=r[8],$=r[12],S=r[1],C=r[5],K=r[9],Q=r[13],I=r[2],q=r[6],z=r[10],W=r[14],N=r[3],B=r[7],F=r[11],te=r[15];return s[0]=a*A+o*S+l*I+c*N,s[4]=a*w+o*C+l*q+c*B,s[8]=a*D+o*K+l*z+c*F,s[12]=a*$+o*Q+l*W+c*te,s[1]=d*A+h*S+f*I+m*N,s[5]=d*w+h*C+f*q+m*B,s[9]=d*D+h*K+f*z+m*F,s[13]=d*$+h*Q+f*W+m*te,s[2]=_*A+M*S+p*I+u*N,s[6]=_*w+M*C+p*q+u*B,s[10]=_*D+M*K+p*z+u*F,s[14]=_*$+M*Q+p*W+u*te,s[3]=v*A+x*S+E*I+P*N,s[7]=v*w+x*C+E*q+P*B,s[11]=v*D+x*K+E*z+P*F,s[15]=v*$+x*Q+E*W+P*te,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],d=e[2],h=e[6],f=e[10],m=e[14],_=e[3],M=e[7],p=e[11],u=e[15];return _*(+s*l*h-r*c*h-s*o*f+i*c*f+r*o*m-i*l*m)+M*(+n*l*m-n*c*f+s*a*f-r*a*m+r*c*d-s*l*d)+p*(+n*c*h-n*o*m-s*a*h+i*a*m+s*o*d-i*c*d)+u*(-r*o*d-n*l*h+n*o*f+r*a*h-i*a*f+i*l*d)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8],h=e[9],f=e[10],m=e[11],_=e[12],M=e[13],p=e[14],u=e[15],v=h*p*c-M*f*c+M*l*m-o*p*m-h*l*u+o*f*u,x=_*f*c-d*p*c-_*l*m+a*p*m+d*l*u-a*f*u,E=d*M*c-_*h*c+_*o*m-a*M*m-d*o*u+a*h*u,P=_*h*l-d*M*l-_*o*f+a*M*f+d*o*p-a*h*p,A=n*v+i*x+r*E+s*P;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/A;return e[0]=v*w,e[1]=(M*f*s-h*p*s-M*r*m+i*p*m+h*r*u-i*f*u)*w,e[2]=(o*p*s-M*l*s+M*r*c-i*p*c-o*r*u+i*l*u)*w,e[3]=(h*l*s-o*f*s-h*r*c+i*f*c+o*r*m-i*l*m)*w,e[4]=x*w,e[5]=(d*p*s-_*f*s+_*r*m-n*p*m-d*r*u+n*f*u)*w,e[6]=(_*l*s-a*p*s-_*r*c+n*p*c+a*r*u-n*l*u)*w,e[7]=(a*f*s-d*l*s+d*r*c-n*f*c-a*r*m+n*l*m)*w,e[8]=E*w,e[9]=(_*h*s-d*M*s-_*i*m+n*M*m+d*i*u-n*h*u)*w,e[10]=(a*M*s-_*o*s+_*i*c-n*M*c-a*i*u+n*o*u)*w,e[11]=(d*o*s-a*h*s-d*i*c+n*h*c+a*i*m-n*o*m)*w,e[12]=P*w,e[13]=(d*M*r-_*h*r+_*i*f-n*M*f-d*i*p+n*h*p)*w,e[14]=(_*o*r-a*M*r-_*i*l+n*M*l+a*i*p-n*o*p)*w,e[15]=(a*h*r-d*o*r+d*i*l-n*h*l-a*i*f+n*o*f)*w,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,d=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,d*o+i,d*l-r*a,0,c*l-r*o,d*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,a=n._y,o=n._z,l=n._w,c=s+s,d=a+a,h=o+o,f=s*c,m=s*d,_=s*h,M=a*d,p=a*h,u=o*h,v=l*c,x=l*d,E=l*h,P=i.x,A=i.y,w=i.z;return r[0]=(1-(M+u))*P,r[1]=(m+E)*P,r[2]=(_-x)*P,r[3]=0,r[4]=(m-E)*A,r[5]=(1-(f+u))*A,r[6]=(p+v)*A,r[7]=0,r[8]=(_+x)*w,r[9]=(p-v)*w,r[10]=(1-(f+M))*w,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=ts.set(r[0],r[1],r[2]).length();const a=ts.set(r[4],r[5],r[6]).length(),o=ts.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Bn.copy(this);const c=1/s,d=1/a,h=1/o;return Bn.elements[0]*=c,Bn.elements[1]*=c,Bn.elements[2]*=c,Bn.elements[4]*=d,Bn.elements[5]*=d,Bn.elements[6]*=d,Bn.elements[8]*=h,Bn.elements[9]*=h,Bn.elements[10]*=h,n.setFromRotationMatrix(Bn),i.x=s,i.y=a,i.z=o,this}makePerspective(e,n,i,r,s,a,o=Si){const l=this.elements,c=2*s/(n-e),d=2*s/(i-r),h=(n+e)/(n-e),f=(i+r)/(i-r);let m,_;if(o===Si)m=-(a+s)/(a-s),_=-2*a*s/(a-s);else if(o===Yl)m=-a/(a-s),_=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=d,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,a,o=Si){const l=this.elements,c=1/(n-e),d=1/(i-r),h=1/(a-s),f=(n+e)*c,m=(i+r)*d;let _,M;if(o===Si)_=(a+s)*h,M=-2*h;else if(o===Yl)_=s*h,M=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*d,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=M,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const ts=new U,Bn=new ht,tM=new U(0,0,0),nM=new U(1,1,1),Fi=new U,zo=new U,gn=new U,Yp=new ht,$p=new zr;class ci{constructor(e=0,n=0,i=0,r=ci.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],d=r[9],h=r[2],f=r[6],m=r[10];switch(n){case"XYZ":this._y=Math.asin(Gt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Gt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Gt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Gt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Gt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-Gt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-d,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Yp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Yp,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return $p.setFromEuler(this),this.setFromQuaternion($p,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ci.DEFAULT_ORDER="XYZ";let Hf=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},iM=0;const qp=new U,ns=new zr,hi=new ht,Bo=new U,va=new U,rM=new U,sM=new zr,Kp=new U(1,0,0),Zp=new U(0,1,0),Qp=new U(0,0,1),aM={type:"added"},oM={type:"removed"},cu={type:"childadded",child:null},uu={type:"childremoved",child:null};class zt extends Gr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:iM++}),this.uuid=bi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=zt.DEFAULT_UP.clone();const e=new U,n=new ci,i=new zr,r=new U(1,1,1);function s(){i.setFromEuler(n,!1)}function a(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ht},normalMatrix:{value:new Ke}}),this.matrix=new ht,this.matrixWorld=new ht,this.matrixAutoUpdate=zt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=zt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Hf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return ns.setFromAxisAngle(e,n),this.quaternion.multiply(ns),this}rotateOnWorldAxis(e,n){return ns.setFromAxisAngle(e,n),this.quaternion.premultiply(ns),this}rotateX(e){return this.rotateOnAxis(Kp,e)}rotateY(e){return this.rotateOnAxis(Zp,e)}rotateZ(e){return this.rotateOnAxis(Qp,e)}translateOnAxis(e,n){return qp.copy(e).applyQuaternion(this.quaternion),this.position.add(qp.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Kp,e)}translateY(e){return this.translateOnAxis(Zp,e)}translateZ(e){return this.translateOnAxis(Qp,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(hi.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Bo.copy(e):Bo.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),va.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?hi.lookAt(va,Bo,this.up):hi.lookAt(Bo,va,this.up),this.quaternion.setFromRotationMatrix(hi),r&&(hi.extractRotation(r.matrixWorld),ns.setFromRotationMatrix(hi),this.quaternion.premultiply(ns.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(aM),cu.child=e,this.dispatchEvent(cu),cu.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(oM),uu.child=e,this.dispatchEvent(uu),uu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),hi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),hi.multiply(e.parent.matrixWorld)),e.applyMatrix4(hi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,n);if(a!==void 0)return a}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(va,e,rM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(va,sM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++){const s=n[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++){const o=r[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(n){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),d=a(e.images),h=a(e.shapes),f=a(e.skeletons),m=a(e.animations),_=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),d.length>0&&(i.images=d),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),m.length>0&&(i.animations=m),_.length>0&&(i.nodes=_)}return i.object=r,i;function a(o){const l=[];for(const c in o){const d=o[c];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}zt.DEFAULT_UP=new U(0,1,0);zt.DEFAULT_MATRIX_AUTO_UPDATE=!0;zt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Hn=new U,pi=new U,du=new U,mi=new U,is=new U,rs=new U,Jp=new U,fu=new U,hu=new U,pu=new U;class Kn{constructor(e=new U,n=new U,i=new U){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Hn.subVectors(e,n),r.cross(Hn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Hn.subVectors(r,n),pi.subVectors(i,n),du.subVectors(e,n);const a=Hn.dot(Hn),o=Hn.dot(pi),l=Hn.dot(du),c=pi.dot(pi),d=pi.dot(du),h=a*c-o*o;if(h===0)return s.set(0,0,0),null;const f=1/h,m=(c*l-o*d)*f,_=(a*d-o*l)*f;return s.set(1-m-_,_,m)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,mi)===null?!1:mi.x>=0&&mi.y>=0&&mi.x+mi.y<=1}static getInterpolation(e,n,i,r,s,a,o,l){return this.getBarycoord(e,n,i,r,mi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,mi.x),l.addScaledVector(a,mi.y),l.addScaledVector(o,mi.z),l)}static isFrontFacing(e,n,i,r){return Hn.subVectors(i,n),pi.subVectors(e,n),Hn.cross(pi).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Hn.subVectors(this.c,this.b),pi.subVectors(this.a,this.b),Hn.cross(pi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Kn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Kn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return Kn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Kn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Kn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let a,o;is.subVectors(r,i),rs.subVectors(s,i),fu.subVectors(e,i);const l=is.dot(fu),c=rs.dot(fu);if(l<=0&&c<=0)return n.copy(i);hu.subVectors(e,r);const d=is.dot(hu),h=rs.dot(hu);if(d>=0&&h<=d)return n.copy(r);const f=l*h-d*c;if(f<=0&&l>=0&&d<=0)return a=l/(l-d),n.copy(i).addScaledVector(is,a);pu.subVectors(e,s);const m=is.dot(pu),_=rs.dot(pu);if(_>=0&&m<=_)return n.copy(s);const M=m*c-l*_;if(M<=0&&c>=0&&_<=0)return o=c/(c-_),n.copy(i).addScaledVector(rs,o);const p=d*_-m*h;if(p<=0&&h-d>=0&&m-_>=0)return Jp.subVectors(s,r),o=(h-d)/(h-d+(m-_)),n.copy(r).addScaledVector(Jp,o);const u=1/(p+M+f);return a=M*u,o=f*u,n.copy(i).addScaledVector(is,a).addScaledVector(rs,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Ax={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},zi={h:0,s:0,l:0},Ho={h:0,s:0,l:0};function mu(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class $e{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=ii){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ft.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=ft.workingColorSpace){return this.r=e,this.g=n,this.b=i,ft.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=ft.workingColorSpace){if(e=zf(e,1),n=Gt(n,0,1),i=Gt(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,a=2*i-s;this.r=mu(a,s,e+1/3),this.g=mu(a,s,e),this.b=mu(a,s,e-1/3)}return ft.toWorkingColorSpace(this,r),this}setStyle(e,n=ii){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(a===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=ii){const i=Ax[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=zs(e.r),this.g=zs(e.g),this.b=zs(e.b),this}copyLinearToSRGB(e){return this.r=tu(e.r),this.g=tu(e.g),this.b=tu(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ii){return ft.fromWorkingColorSpace(Zt.copy(this),e),Math.round(Gt(Zt.r*255,0,255))*65536+Math.round(Gt(Zt.g*255,0,255))*256+Math.round(Gt(Zt.b*255,0,255))}getHexString(e=ii){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=ft.workingColorSpace){ft.fromWorkingColorSpace(Zt.copy(this),n);const i=Zt.r,r=Zt.g,s=Zt.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const d=(o+a)/2;if(o===a)l=0,c=0;else{const h=a-o;switch(c=d<=.5?h/(a+o):h/(2-a-o),a){case i:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-i)/h+2;break;case s:l=(i-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=d,e}getRGB(e,n=ft.workingColorSpace){return ft.fromWorkingColorSpace(Zt.copy(this),n),e.r=Zt.r,e.g=Zt.g,e.b=Zt.b,e}getStyle(e=ii){ft.fromWorkingColorSpace(Zt.copy(this),e);const n=Zt.r,i=Zt.g,r=Zt.b;return e!==ii?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(zi),this.setHSL(zi.h+e,zi.s+n,zi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(zi),e.getHSL(Ho);const i=Ba(zi.h,Ho.h,n),r=Ba(zi.s,Ho.s,n),s=Ba(zi.l,Ho.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Zt=new $e;$e.NAMES=Ax;let lM=0;class ta extends Gr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:lM++}),this.uuid=bi(),this.name="",this.type="Material",this.blending=Fs,this.side=or,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ad,this.blendDst=Cd,this.blendEquation=Er,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new $e(0,0,0),this.blendAlpha=0,this.depthFunc=Vl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Bp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Kr,this.stencilZFail=Kr,this.stencilZPass=Kr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Fs&&(i.blending=this.blending),this.side!==or&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Ad&&(i.blendSrc=this.blendSrc),this.blendDst!==Cd&&(i.blendDst=this.blendDst),this.blendEquation!==Er&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Vl&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Bp&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Kr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Kr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Kr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(n){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Rr extends ta{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new $e(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ci,this.combine=cx,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ct=new U,Go=new we;class Dn{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Dd,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=ai,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Ex("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Go.fromBufferAttribute(this,n),Go.applyMatrix3(e),this.setXY(n,Go.x,Go.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Ct.fromBufferAttribute(this,n),Ct.applyMatrix3(e),this.setXYZ(n,Ct.x,Ct.y,Ct.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Ct.fromBufferAttribute(this,n),Ct.applyMatrix4(e),this.setXYZ(n,Ct.x,Ct.y,Ct.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Ct.fromBufferAttribute(this,n),Ct.applyNormalMatrix(e),this.setXYZ(n,Ct.x,Ct.y,Ct.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Ct.fromBufferAttribute(this,n),Ct.transformDirection(e),this.setXYZ(n,Ct.x,Ct.y,Ct.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=qn(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=ot(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=qn(n,this.array)),n}setX(e,n){return this.normalized&&(n=ot(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=qn(n,this.array)),n}setY(e,n){return this.normalized&&(n=ot(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=qn(n,this.array)),n}setZ(e,n){return this.normalized&&(n=ot(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=qn(n,this.array)),n}setW(e,n){return this.normalized&&(n=ot(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=ot(n,this.array),i=ot(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=ot(n,this.array),i=ot(i,this.array),r=ot(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=ot(n,this.array),i=ot(i,this.array),r=ot(r,this.array),s=ot(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Dd&&(e.usage=this.usage),e}}class Cx extends Dn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class Rx extends Dn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class In extends Dn{constructor(e,n,i){super(new Float32Array(e),n,i)}}let cM=0;const An=new ht,gu=new zt,ss=new U,xn=new Vr,_a=new Vr,Ut=new U;class ui extends Gr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:cM++}),this.uuid=bi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Mx(e)?Rx:Cx)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ke().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return An.makeRotationFromQuaternion(e),this.applyMatrix4(An),this}rotateX(e){return An.makeRotationX(e),this.applyMatrix4(An),this}rotateY(e){return An.makeRotationY(e),this.applyMatrix4(An),this}rotateZ(e){return An.makeRotationZ(e),this.applyMatrix4(An),this}translate(e,n,i){return An.makeTranslation(e,n,i),this.applyMatrix4(An),this}scale(e,n,i){return An.makeScale(e,n,i),this.applyMatrix4(An),this}lookAt(e){return gu.lookAt(e),gu.updateMatrix(),this.applyMatrix4(gu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ss).negate(),this.translate(ss.x,ss.y,ss.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new In(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Vr);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];xn.setFromBufferAttribute(s),this.morphTargetsRelative?(Ut.addVectors(this.boundingBox.min,xn.min),this.boundingBox.expandByPoint(Ut),Ut.addVectors(this.boundingBox.max,xn.max),this.boundingBox.expandByPoint(Ut)):(this.boundingBox.expandByPoint(xn.min),this.boundingBox.expandByPoint(xn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new uo);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(e){const i=this.boundingSphere.center;if(xn.setFromBufferAttribute(e),n)for(let s=0,a=n.length;s<a;s++){const o=n[s];_a.setFromBufferAttribute(o),this.morphTargetsRelative?(Ut.addVectors(xn.min,_a.min),xn.expandByPoint(Ut),Ut.addVectors(xn.max,_a.max),xn.expandByPoint(Ut)):(xn.expandByPoint(_a.min),xn.expandByPoint(_a.max))}xn.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)Ut.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Ut));if(n)for(let s=0,a=n.length;s<a;s++){const o=n[s],l=this.morphTargetsRelative;for(let c=0,d=o.count;c<d;c++)Ut.fromBufferAttribute(o,c),l&&(ss.fromBufferAttribute(e,c),Ut.add(ss)),r=Math.max(r,i.distanceToSquared(Ut))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Dn(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let D=0;D<i.count;D++)o[D]=new U,l[D]=new U;const c=new U,d=new U,h=new U,f=new we,m=new we,_=new we,M=new U,p=new U;function u(D,$,S){c.fromBufferAttribute(i,D),d.fromBufferAttribute(i,$),h.fromBufferAttribute(i,S),f.fromBufferAttribute(s,D),m.fromBufferAttribute(s,$),_.fromBufferAttribute(s,S),d.sub(c),h.sub(c),m.sub(f),_.sub(f);const C=1/(m.x*_.y-_.x*m.y);isFinite(C)&&(M.copy(d).multiplyScalar(_.y).addScaledVector(h,-m.y).multiplyScalar(C),p.copy(h).multiplyScalar(m.x).addScaledVector(d,-_.x).multiplyScalar(C),o[D].add(M),o[$].add(M),o[S].add(M),l[D].add(p),l[$].add(p),l[S].add(p))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let D=0,$=v.length;D<$;++D){const S=v[D],C=S.start,K=S.count;for(let Q=C,I=C+K;Q<I;Q+=3)u(e.getX(Q+0),e.getX(Q+1),e.getX(Q+2))}const x=new U,E=new U,P=new U,A=new U;function w(D){P.fromBufferAttribute(r,D),A.copy(P);const $=o[D];x.copy($),x.sub(P.multiplyScalar(P.dot($))).normalize(),E.crossVectors(A,$);const C=E.dot(l[D])<0?-1:1;a.setXYZW(D,x.x,x.y,x.z,C)}for(let D=0,$=v.length;D<$;++D){const S=v[D],C=S.start,K=S.count;for(let Q=C,I=C+K;Q<I;Q+=3)w(e.getX(Q+0)),w(e.getX(Q+1)),w(e.getX(Q+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Dn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let f=0,m=i.count;f<m;f++)i.setXYZ(f,0,0,0);const r=new U,s=new U,a=new U,o=new U,l=new U,c=new U,d=new U,h=new U;if(e)for(let f=0,m=e.count;f<m;f+=3){const _=e.getX(f+0),M=e.getX(f+1),p=e.getX(f+2);r.fromBufferAttribute(n,_),s.fromBufferAttribute(n,M),a.fromBufferAttribute(n,p),d.subVectors(a,s),h.subVectors(r,s),d.cross(h),o.fromBufferAttribute(i,_),l.fromBufferAttribute(i,M),c.fromBufferAttribute(i,p),o.add(d),l.add(d),c.add(d),i.setXYZ(_,o.x,o.y,o.z),i.setXYZ(M,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,m=n.count;f<m;f+=3)r.fromBufferAttribute(n,f+0),s.fromBufferAttribute(n,f+1),a.fromBufferAttribute(n,f+2),d.subVectors(a,s),h.subVectors(r,s),d.cross(h),i.setXYZ(f+0,d.x,d.y,d.z),i.setXYZ(f+1,d.x,d.y,d.z),i.setXYZ(f+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Ut.fromBufferAttribute(e,n),Ut.normalize(),e.setXYZ(n,Ut.x,Ut.y,Ut.z)}toNonIndexed(){function e(o,l){const c=o.array,d=o.itemSize,h=o.normalized,f=new c.constructor(l.length*d);let m=0,_=0;for(let M=0,p=l.length;M<p;M++){o.isInterleavedBufferAttribute?m=l[M]*o.data.stride+o.offset:m=l[M]*d;for(let u=0;u<d;u++)f[_++]=c[m++]}return new Dn(f,d,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new ui,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);n.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let d=0,h=c.length;d<h;d++){const f=c[d],m=e(f,i);l.push(m)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let h=0,f=c.length;h<f;h++){const m=c[h];d.push(m.toJSON(e.data))}d.length>0&&(r[l]=d,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const c in r){const d=r[c];this.setAttribute(c,d.clone(n))}const s=e.morphAttributes;for(const c in s){const d=[],h=s[c];for(let f=0,m=h.length;f<m;f++)d.push(h[f].clone(n));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,d=a.length;c<d;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const em=new ht,gr=new Bf,Vo=new uo,tm=new U,as=new U,os=new U,ls=new U,xu=new U,jo=new U,Wo=new we,Xo=new we,Yo=new we,nm=new U,im=new U,rm=new U,$o=new U,qo=new U;class Rt extends zt{constructor(e=new ui,n=new Rr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){jo.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const d=o[l],h=s[l];d!==0&&(xu.fromBufferAttribute(h,e),a?jo.addScaledVector(xu,d):jo.addScaledVector(xu.sub(n),d))}n.add(jo)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Vo.copy(i.boundingSphere),Vo.applyMatrix4(s),gr.copy(e.ray).recast(e.near),!(Vo.containsPoint(gr.origin)===!1&&(gr.intersectSphere(Vo,tm)===null||gr.origin.distanceToSquared(tm)>(e.far-e.near)**2))&&(em.copy(s).invert(),gr.copy(e.ray).applyMatrix4(em),!(i.boundingBox!==null&&gr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,gr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,d=s.attributes.uv1,h=s.attributes.normal,f=s.groups,m=s.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,M=f.length;_<M;_++){const p=f[_],u=a[p.materialIndex],v=Math.max(p.start,m.start),x=Math.min(o.count,Math.min(p.start+p.count,m.start+m.count));for(let E=v,P=x;E<P;E+=3){const A=o.getX(E),w=o.getX(E+1),D=o.getX(E+2);r=Ko(this,u,e,i,c,d,h,A,w,D),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=p.materialIndex,n.push(r))}}else{const _=Math.max(0,m.start),M=Math.min(o.count,m.start+m.count);for(let p=_,u=M;p<u;p+=3){const v=o.getX(p),x=o.getX(p+1),E=o.getX(p+2);r=Ko(this,a,e,i,c,d,h,v,x,E),r&&(r.faceIndex=Math.floor(p/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,M=f.length;_<M;_++){const p=f[_],u=a[p.materialIndex],v=Math.max(p.start,m.start),x=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let E=v,P=x;E<P;E+=3){const A=E,w=E+1,D=E+2;r=Ko(this,u,e,i,c,d,h,A,w,D),r&&(r.faceIndex=Math.floor(E/3),r.face.materialIndex=p.materialIndex,n.push(r))}}else{const _=Math.max(0,m.start),M=Math.min(l.count,m.start+m.count);for(let p=_,u=M;p<u;p+=3){const v=p,x=p+1,E=p+2;r=Ko(this,a,e,i,c,d,h,v,x,E),r&&(r.faceIndex=Math.floor(p/3),n.push(r))}}}}function uM(t,e,n,i,r,s,a,o){let l;if(e.side===mn?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===or,o),l===null)return null;qo.copy(o),qo.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(qo);return c<n.near||c>n.far?null:{distance:c,point:qo.clone(),object:t}}function Ko(t,e,n,i,r,s,a,o,l,c){t.getVertexPosition(o,as),t.getVertexPosition(l,os),t.getVertexPosition(c,ls);const d=uM(t,e,n,i,as,os,ls,$o);if(d){r&&(Wo.fromBufferAttribute(r,o),Xo.fromBufferAttribute(r,l),Yo.fromBufferAttribute(r,c),d.uv=Kn.getInterpolation($o,as,os,ls,Wo,Xo,Yo,new we)),s&&(Wo.fromBufferAttribute(s,o),Xo.fromBufferAttribute(s,l),Yo.fromBufferAttribute(s,c),d.uv1=Kn.getInterpolation($o,as,os,ls,Wo,Xo,Yo,new we)),a&&(nm.fromBufferAttribute(a,o),im.fromBufferAttribute(a,l),rm.fromBufferAttribute(a,c),d.normal=Kn.getInterpolation($o,as,os,ls,nm,im,rm,new U),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));const h={a:o,b:l,c,normal:new U,materialIndex:0};Kn.getNormal(as,os,ls,h.normal),d.face=h}return d}class Ot extends ui{constructor(e=1,n=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],d=[],h=[];let f=0,m=0;_("z","y","x",-1,-1,i,n,e,a,s,0),_("z","y","x",1,-1,i,n,-e,a,s,1),_("x","z","y",1,1,e,i,n,r,a,2),_("x","z","y",1,-1,e,i,-n,r,a,3),_("x","y","z",1,-1,e,n,i,r,s,4),_("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new In(c,3)),this.setAttribute("normal",new In(d,3)),this.setAttribute("uv",new In(h,2));function _(M,p,u,v,x,E,P,A,w,D,$){const S=E/w,C=P/D,K=E/2,Q=P/2,I=A/2,q=w+1,z=D+1;let W=0,N=0;const B=new U;for(let F=0;F<z;F++){const te=F*C-Q;for(let ae=0;ae<q;ae++){const Ae=ae*S-K;B[M]=Ae*v,B[p]=te*x,B[u]=I,c.push(B.x,B.y,B.z),B[M]=0,B[p]=0,B[u]=A>0?1:-1,d.push(B.x,B.y,B.z),h.push(ae/w),h.push(1-F/D),W+=1}}for(let F=0;F<D;F++)for(let te=0;te<w;te++){const ae=f+te+q*F,Ae=f+te+q*(F+1),O=f+(te+1)+q*(F+1),J=f+(te+1)+q*F;l.push(ae,Ae,J),l.push(Ae,O,J),N+=6}o.addGroup(m,N,$),m+=N,f+=W}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ot(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ks(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function nn(t){const e={};for(let n=0;n<t.length;n++){const i=Ks(t[n]);for(const r in i)e[r]=i[r]}return e}function dM(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function Px(t){return t.getRenderTarget()===null?t.outputColorSpace:ft.workingColorSpace}const Kl={clone:Ks,merge:nn};var fM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,hM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class dn extends ta{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=fM,this.fragmentShader=hM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ks(e.uniforms),this.uniformsGroups=dM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?n.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?n.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?n.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?n.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?n.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?n.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?n.uniforms[r]={type:"m4",value:a.toArray()}:n.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class Nx extends zt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ht,this.projectionMatrix=new ht,this.projectionMatrixInverse=new ht,this.coordinateSystem=Si}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Bi=new U,sm=new we,am=new we;class _n extends Nx{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=ro*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(za*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ro*2*Math.atan(Math.tan(za*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Bi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Bi.x,Bi.y).multiplyScalar(-e/Bi.z),Bi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Bi.x,Bi.y).multiplyScalar(-e/Bi.z)}getViewSize(e,n){return this.getViewBounds(e,sm,am),n.subVectors(am,sm)}setViewOffset(e,n,i,r,s,a){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(za*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,n-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const cs=-90,us=1;class pM extends zt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new _n(cs,us,e,n);r.layers=this.layers,this.add(r);const s=new _n(cs,us,e,n);s.layers=this.layers,this.add(s);const a=new _n(cs,us,e,n);a.layers=this.layers,this.add(a);const o=new _n(cs,us,e,n);o.layers=this.layers,this.add(o);const l=new _n(cs,us,e,n);l.layers=this.layers,this.add(l);const c=new _n(cs,us,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,a,o,l]=n;for(const c of n)this.remove(c);if(e===Si)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Yl)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,d]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const M=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,a),e.setRenderTarget(i,2,r),e.render(n,o),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=M,e.setRenderTarget(i,5,r),e.render(n,d),e.setRenderTarget(h,f,m),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class Lx extends Jt{constructor(e,n,i,r,s,a,o,l,c,d){e=e!==void 0?e:[],n=n!==void 0?n:Ys,super(e,n,i,r,s,a,o,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class mM extends Jn{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Lx(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:ln}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Ot(5,5,5),s=new dn({name:"CubemapFromEquirect",uniforms:Ks(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:mn,blending:Ei});s.uniforms.tEquirect.value=n;const a=new Rt(r,s),o=n.minFilter;return n.minFilter===Cr&&(n.minFilter=ln),new pM(1,10,this).update(e,a),n.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(n,i,r);e.setRenderTarget(s)}}const vu=new U,gM=new U,xM=new Ke;class Vi{constructor(e=new U(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=vu.subVectors(i,n).cross(gM.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(vu),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||xM.getNormalMatrix(e),r=this.coplanarPoint(vu).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const xr=new uo,Zo=new U;class Gf{constructor(e=new Vi,n=new Vi,i=new Vi,r=new Vi,s=new Vi,a=new Vi){this.planes=[e,n,i,r,s,a]}set(e,n,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(n),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Si){const i=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],l=r[3],c=r[4],d=r[5],h=r[6],f=r[7],m=r[8],_=r[9],M=r[10],p=r[11],u=r[12],v=r[13],x=r[14],E=r[15];if(i[0].setComponents(l-s,f-c,p-m,E-u).normalize(),i[1].setComponents(l+s,f+c,p+m,E+u).normalize(),i[2].setComponents(l+a,f+d,p+_,E+v).normalize(),i[3].setComponents(l-a,f-d,p-_,E-v).normalize(),i[4].setComponents(l-o,f-h,p-M,E-x).normalize(),n===Si)i[5].setComponents(l+o,f+h,p+M,E+x).normalize();else if(n===Yl)i[5].setComponents(o,h,M,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),xr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),xr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(xr)}intersectsSprite(e){return xr.center.set(0,0,0),xr.radius=.7071067811865476,xr.applyMatrix4(e.matrixWorld),this.intersectsSphere(xr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Zo.x=r.normal.x>0?e.max.x:e.min.x,Zo.y=r.normal.y>0?e.max.y:e.min.y,Zo.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Zo)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Dx(){let t=null,e=!1,n=null,i=null;function r(s,a){n(s,a),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function vM(t,e){const n=e.isWebGL2,i=new WeakMap;function r(c,d){const h=c.array,f=c.usage,m=h.byteLength,_=t.createBuffer();t.bindBuffer(d,_),t.bufferData(d,h,f),c.onUploadCallback();let M;if(h instanceof Float32Array)M=t.FLOAT;else if(h instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(n)M=t.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else M=t.UNSIGNED_SHORT;else if(h instanceof Int16Array)M=t.SHORT;else if(h instanceof Uint32Array)M=t.UNSIGNED_INT;else if(h instanceof Int32Array)M=t.INT;else if(h instanceof Int8Array)M=t.BYTE;else if(h instanceof Uint8Array)M=t.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)M=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:_,type:M,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version,size:m}}function s(c,d,h){const f=d.array,m=d._updateRange,_=d.updateRanges;if(t.bindBuffer(h,c),m.count===-1&&_.length===0&&t.bufferSubData(h,0,f),_.length!==0){for(let M=0,p=_.length;M<p;M++){const u=_[M];n?t.bufferSubData(h,u.start*f.BYTES_PER_ELEMENT,f,u.start,u.count):t.bufferSubData(h,u.start*f.BYTES_PER_ELEMENT,f.subarray(u.start,u.start+u.count))}d.clearUpdateRanges()}m.count!==-1&&(n?t.bufferSubData(h,m.offset*f.BYTES_PER_ELEMENT,f,m.offset,m.count):t.bufferSubData(h,m.offset*f.BYTES_PER_ELEMENT,f.subarray(m.offset,m.offset+m.count)),m.count=-1),d.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const d=i.get(c);d&&(t.deleteBuffer(d.buffer),i.delete(c))}function l(c,d){if(c.isGLBufferAttribute){const f=i.get(c);(!f||f.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const h=i.get(c);if(h===void 0)i.set(c,r(c,d));else if(h.version<c.version){if(h.size!==c.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(h.buffer,c,d),h.version=c.version}}return{get:a,remove:o,update:l}}class xc extends ui{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,a=n/2,o=Math.floor(i),l=Math.floor(r),c=o+1,d=l+1,h=e/o,f=n/l,m=[],_=[],M=[],p=[];for(let u=0;u<d;u++){const v=u*f-a;for(let x=0;x<c;x++){const E=x*h-s;_.push(E,-v,0),M.push(0,0,1),p.push(x/o),p.push(1-u/l)}}for(let u=0;u<l;u++)for(let v=0;v<o;v++){const x=v+c*u,E=v+c*(u+1),P=v+1+c*(u+1),A=v+1+c*u;m.push(x,E,A),m.push(E,P,A)}this.setIndex(m),this.setAttribute("position",new In(_,3)),this.setAttribute("normal",new In(M,3)),this.setAttribute("uv",new In(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new xc(e.width,e.height,e.widthSegments,e.heightSegments)}}var _M=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,yM=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,SM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,MM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,EM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,wM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,TM=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,bM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,AM=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,CM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,RM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,PM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,NM=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,LM=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,DM=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,IM=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,UM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,OM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,kM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,FM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,zM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,BM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,HM=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,GM=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,VM=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,jM=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,WM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,XM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,YM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,$M=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,qM="gl_FragColor = linearToOutputTexel( gl_FragColor );",KM=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,ZM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,QM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,JM=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,e1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,t1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,n1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,i1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,r1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,s1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,a1=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,o1=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,l1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,c1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,u1=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,d1=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,f1=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,h1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,p1=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,m1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,g1=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,x1=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,v1=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,_1=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,y1=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,S1=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,M1=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,E1=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,w1=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,T1=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,b1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,A1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,C1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,R1=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,P1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,N1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,L1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,D1=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,I1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,U1=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
	#endif
	#ifdef MORPHTARGETS_TEXTURE
		#ifndef USE_INSTANCING_MORPH
			uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		#endif
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,O1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,k1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,F1=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,z1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,B1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,H1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,G1=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,V1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,j1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,W1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,X1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Y1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,$1=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,q1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,K1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Z1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Q1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,J1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,eE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,tE=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,nE=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,iE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,rE=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,sE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,aE=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,oE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,lE=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,cE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,uE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,dE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,fE=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	float startCompression = 0.8 - 0.04;
	float desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min(color.r, min(color.g, color.b));
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max(color.r, max(color.g, color.b));
	if (peak < startCompression) return color;
	float d = 1. - startCompression;
	float newPeak = 1. - d * d / (peak + d - startCompression);
	color *= newPeak / peak;
	float g = 1. - 1. / (desaturation * (peak - newPeak) + 1.);
	return mix(color, vec3(1, 1, 1), g);
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,hE=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,pE=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,mE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,gE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,xE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,vE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const _E=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,yE=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,SE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ME=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,EE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,wE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,TE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,bE=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,AE=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,CE=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,RE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,PE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,NE=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,LE=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,DE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,IE=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,UE=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,OE=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,kE=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,FE=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zE=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,BE=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,HE=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,GE=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,VE=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,jE=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,WE=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,XE=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,YE=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,$E=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,qE=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,KE=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ZE=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,QE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,qe={alphahash_fragment:_M,alphahash_pars_fragment:yM,alphamap_fragment:SM,alphamap_pars_fragment:MM,alphatest_fragment:EM,alphatest_pars_fragment:wM,aomap_fragment:TM,aomap_pars_fragment:bM,batching_pars_vertex:AM,batching_vertex:CM,begin_vertex:RM,beginnormal_vertex:PM,bsdfs:NM,iridescence_fragment:LM,bumpmap_pars_fragment:DM,clipping_planes_fragment:IM,clipping_planes_pars_fragment:UM,clipping_planes_pars_vertex:OM,clipping_planes_vertex:kM,color_fragment:FM,color_pars_fragment:zM,color_pars_vertex:BM,color_vertex:HM,common:GM,cube_uv_reflection_fragment:VM,defaultnormal_vertex:jM,displacementmap_pars_vertex:WM,displacementmap_vertex:XM,emissivemap_fragment:YM,emissivemap_pars_fragment:$M,colorspace_fragment:qM,colorspace_pars_fragment:KM,envmap_fragment:ZM,envmap_common_pars_fragment:QM,envmap_pars_fragment:JM,envmap_pars_vertex:e1,envmap_physical_pars_fragment:f1,envmap_vertex:t1,fog_vertex:n1,fog_pars_vertex:i1,fog_fragment:r1,fog_pars_fragment:s1,gradientmap_pars_fragment:a1,lightmap_fragment:o1,lightmap_pars_fragment:l1,lights_lambert_fragment:c1,lights_lambert_pars_fragment:u1,lights_pars_begin:d1,lights_toon_fragment:h1,lights_toon_pars_fragment:p1,lights_phong_fragment:m1,lights_phong_pars_fragment:g1,lights_physical_fragment:x1,lights_physical_pars_fragment:v1,lights_fragment_begin:_1,lights_fragment_maps:y1,lights_fragment_end:S1,logdepthbuf_fragment:M1,logdepthbuf_pars_fragment:E1,logdepthbuf_pars_vertex:w1,logdepthbuf_vertex:T1,map_fragment:b1,map_pars_fragment:A1,map_particle_fragment:C1,map_particle_pars_fragment:R1,metalnessmap_fragment:P1,metalnessmap_pars_fragment:N1,morphinstance_vertex:L1,morphcolor_vertex:D1,morphnormal_vertex:I1,morphtarget_pars_vertex:U1,morphtarget_vertex:O1,normal_fragment_begin:k1,normal_fragment_maps:F1,normal_pars_fragment:z1,normal_pars_vertex:B1,normal_vertex:H1,normalmap_pars_fragment:G1,clearcoat_normal_fragment_begin:V1,clearcoat_normal_fragment_maps:j1,clearcoat_pars_fragment:W1,iridescence_pars_fragment:X1,opaque_fragment:Y1,packing:$1,premultiplied_alpha_fragment:q1,project_vertex:K1,dithering_fragment:Z1,dithering_pars_fragment:Q1,roughnessmap_fragment:J1,roughnessmap_pars_fragment:eE,shadowmap_pars_fragment:tE,shadowmap_pars_vertex:nE,shadowmap_vertex:iE,shadowmask_pars_fragment:rE,skinbase_vertex:sE,skinning_pars_vertex:aE,skinning_vertex:oE,skinnormal_vertex:lE,specularmap_fragment:cE,specularmap_pars_fragment:uE,tonemapping_fragment:dE,tonemapping_pars_fragment:fE,transmission_fragment:hE,transmission_pars_fragment:pE,uv_pars_fragment:mE,uv_pars_vertex:gE,uv_vertex:xE,worldpos_vertex:vE,background_vert:_E,background_frag:yE,backgroundCube_vert:SE,backgroundCube_frag:ME,cube_vert:EE,cube_frag:wE,depth_vert:TE,depth_frag:bE,distanceRGBA_vert:AE,distanceRGBA_frag:CE,equirect_vert:RE,equirect_frag:PE,linedashed_vert:NE,linedashed_frag:LE,meshbasic_vert:DE,meshbasic_frag:IE,meshlambert_vert:UE,meshlambert_frag:OE,meshmatcap_vert:kE,meshmatcap_frag:FE,meshnormal_vert:zE,meshnormal_frag:BE,meshphong_vert:HE,meshphong_frag:GE,meshphysical_vert:VE,meshphysical_frag:jE,meshtoon_vert:WE,meshtoon_frag:XE,points_vert:YE,points_frag:$E,shadow_vert:qE,shadow_frag:KE,sprite_vert:ZE,sprite_frag:QE},pe={common:{diffuse:{value:new $e(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ke}},envmap:{envMap:{value:null},envMapRotation:{value:new Ke},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ke},normalScale:{value:new we(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new $e(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new $e(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0},uvTransform:{value:new Ke}},sprite:{diffuse:{value:new $e(16777215)},opacity:{value:1},center:{value:new we(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ke},alphaMap:{value:null},alphaMapTransform:{value:new Ke},alphaTest:{value:0}}},ri={basic:{uniforms:nn([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.fog]),vertexShader:qe.meshbasic_vert,fragmentShader:qe.meshbasic_frag},lambert:{uniforms:nn([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new $e(0)}}]),vertexShader:qe.meshlambert_vert,fragmentShader:qe.meshlambert_frag},phong:{uniforms:nn([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new $e(0)},specular:{value:new $e(1118481)},shininess:{value:30}}]),vertexShader:qe.meshphong_vert,fragmentShader:qe.meshphong_frag},standard:{uniforms:nn([pe.common,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.roughnessmap,pe.metalnessmap,pe.fog,pe.lights,{emissive:{value:new $e(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag},toon:{uniforms:nn([pe.common,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.gradientmap,pe.fog,pe.lights,{emissive:{value:new $e(0)}}]),vertexShader:qe.meshtoon_vert,fragmentShader:qe.meshtoon_frag},matcap:{uniforms:nn([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,{matcap:{value:null}}]),vertexShader:qe.meshmatcap_vert,fragmentShader:qe.meshmatcap_frag},points:{uniforms:nn([pe.points,pe.fog]),vertexShader:qe.points_vert,fragmentShader:qe.points_frag},dashed:{uniforms:nn([pe.common,pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:qe.linedashed_vert,fragmentShader:qe.linedashed_frag},depth:{uniforms:nn([pe.common,pe.displacementmap]),vertexShader:qe.depth_vert,fragmentShader:qe.depth_frag},normal:{uniforms:nn([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,{opacity:{value:1}}]),vertexShader:qe.meshnormal_vert,fragmentShader:qe.meshnormal_frag},sprite:{uniforms:nn([pe.sprite,pe.fog]),vertexShader:qe.sprite_vert,fragmentShader:qe.sprite_frag},background:{uniforms:{uvTransform:{value:new Ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:qe.background_vert,fragmentShader:qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ke}},vertexShader:qe.backgroundCube_vert,fragmentShader:qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:qe.cube_vert,fragmentShader:qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:qe.equirect_vert,fragmentShader:qe.equirect_frag},distanceRGBA:{uniforms:nn([pe.common,pe.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:qe.distanceRGBA_vert,fragmentShader:qe.distanceRGBA_frag},shadow:{uniforms:nn([pe.lights,pe.fog,{color:{value:new $e(0)},opacity:{value:1}}]),vertexShader:qe.shadow_vert,fragmentShader:qe.shadow_frag}};ri.physical={uniforms:nn([ri.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ke},clearcoatNormalScale:{value:new we(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ke},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ke},sheen:{value:0},sheenColor:{value:new $e(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ke},transmissionSamplerSize:{value:new we},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ke},attenuationDistance:{value:0},attenuationColor:{value:new $e(0)},specularColor:{value:new $e(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ke},anisotropyVector:{value:new we},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ke}}]),vertexShader:qe.meshphysical_vert,fragmentShader:qe.meshphysical_frag};const Qo={r:0,b:0,g:0},vr=new ci,JE=new ht;function ew(t,e,n,i,r,s,a){const o=new $e(0);let l=s===!0?0:1,c,d,h=null,f=0,m=null;function _(p,u){let v=!1,x=u.isScene===!0?u.background:null;x&&x.isTexture&&(x=(u.backgroundBlurriness>0?n:e).get(x)),x===null?M(o,l):x&&x.isColor&&(M(x,1),v=!0);const E=t.xr.getEnvironmentBlendMode();E==="additive"?i.buffers.color.setClear(0,0,0,1,a):E==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(t.autoClear||v)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),x&&(x.isCubeTexture||x.mapping===mc)?(d===void 0&&(d=new Rt(new Ot(1,1,1),new dn({name:"BackgroundCubeMaterial",uniforms:Ks(ri.backgroundCube.uniforms),vertexShader:ri.backgroundCube.vertexShader,fragmentShader:ri.backgroundCube.fragmentShader,side:mn,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(P,A,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(d)),vr.copy(u.backgroundRotation),vr.x*=-1,vr.y*=-1,vr.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(vr.y*=-1,vr.z*=-1),d.material.uniforms.envMap.value=x,d.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=u.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(JE.makeRotationFromEuler(vr)),d.material.toneMapped=ft.getTransfer(x.colorSpace)!==xt,(h!==x||f!==x.version||m!==t.toneMapping)&&(d.material.needsUpdate=!0,h=x,f=x.version,m=t.toneMapping),d.layers.enableAll(),p.unshift(d,d.geometry,d.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new Rt(new xc(2,2),new dn({name:"BackgroundMaterial",uniforms:Ks(ri.background.uniforms),vertexShader:ri.background.vertexShader,fragmentShader:ri.background.fragmentShader,side:or,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,c.material.toneMapped=ft.getTransfer(x.colorSpace)!==xt,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(h!==x||f!==x.version||m!==t.toneMapping)&&(c.material.needsUpdate=!0,h=x,f=x.version,m=t.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function M(p,u){p.getRGB(Qo,Px(t)),i.buffers.color.setClear(Qo.r,Qo.g,Qo.b,u,a)}return{getClearColor:function(){return o},setClearColor:function(p,u=1){o.set(p),l=u,M(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,M(o,l)},render:_}}function tw(t,e,n,i){const r=t.getParameter(t.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),a=i.isWebGL2||s!==null,o={},l=p(null);let c=l,d=!1;function h(I,q,z,W,N){let B=!1;if(a){const F=M(W,z,q);c!==F&&(c=F,m(c.object)),B=u(I,W,z,N),B&&v(I,W,z,N)}else{const F=q.wireframe===!0;(c.geometry!==W.id||c.program!==z.id||c.wireframe!==F)&&(c.geometry=W.id,c.program=z.id,c.wireframe=F,B=!0)}N!==null&&n.update(N,t.ELEMENT_ARRAY_BUFFER),(B||d)&&(d=!1,D(I,q,z,W),N!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,n.get(N).buffer))}function f(){return i.isWebGL2?t.createVertexArray():s.createVertexArrayOES()}function m(I){return i.isWebGL2?t.bindVertexArray(I):s.bindVertexArrayOES(I)}function _(I){return i.isWebGL2?t.deleteVertexArray(I):s.deleteVertexArrayOES(I)}function M(I,q,z){const W=z.wireframe===!0;let N=o[I.id];N===void 0&&(N={},o[I.id]=N);let B=N[q.id];B===void 0&&(B={},N[q.id]=B);let F=B[W];return F===void 0&&(F=p(f()),B[W]=F),F}function p(I){const q=[],z=[],W=[];for(let N=0;N<r;N++)q[N]=0,z[N]=0,W[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:q,enabledAttributes:z,attributeDivisors:W,object:I,attributes:{},index:null}}function u(I,q,z,W){const N=c.attributes,B=q.attributes;let F=0;const te=z.getAttributes();for(const ae in te)if(te[ae].location>=0){const O=N[ae];let J=B[ae];if(J===void 0&&(ae==="instanceMatrix"&&I.instanceMatrix&&(J=I.instanceMatrix),ae==="instanceColor"&&I.instanceColor&&(J=I.instanceColor)),O===void 0||O.attribute!==J||J&&O.data!==J.data)return!0;F++}return c.attributesNum!==F||c.index!==W}function v(I,q,z,W){const N={},B=q.attributes;let F=0;const te=z.getAttributes();for(const ae in te)if(te[ae].location>=0){let O=B[ae];O===void 0&&(ae==="instanceMatrix"&&I.instanceMatrix&&(O=I.instanceMatrix),ae==="instanceColor"&&I.instanceColor&&(O=I.instanceColor));const J={};J.attribute=O,O&&O.data&&(J.data=O.data),N[ae]=J,F++}c.attributes=N,c.attributesNum=F,c.index=W}function x(){const I=c.newAttributes;for(let q=0,z=I.length;q<z;q++)I[q]=0}function E(I){P(I,0)}function P(I,q){const z=c.newAttributes,W=c.enabledAttributes,N=c.attributeDivisors;z[I]=1,W[I]===0&&(t.enableVertexAttribArray(I),W[I]=1),N[I]!==q&&((i.isWebGL2?t:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](I,q),N[I]=q)}function A(){const I=c.newAttributes,q=c.enabledAttributes;for(let z=0,W=q.length;z<W;z++)q[z]!==I[z]&&(t.disableVertexAttribArray(z),q[z]=0)}function w(I,q,z,W,N,B,F){F===!0?t.vertexAttribIPointer(I,q,z,N,B):t.vertexAttribPointer(I,q,z,W,N,B)}function D(I,q,z,W){if(i.isWebGL2===!1&&(I.isInstancedMesh||W.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;x();const N=W.attributes,B=z.getAttributes(),F=q.defaultAttributeValues;for(const te in B){const ae=B[te];if(ae.location>=0){let Ae=N[te];if(Ae===void 0&&(te==="instanceMatrix"&&I.instanceMatrix&&(Ae=I.instanceMatrix),te==="instanceColor"&&I.instanceColor&&(Ae=I.instanceColor)),Ae!==void 0){const O=Ae.normalized,J=Ae.itemSize,re=n.get(Ae);if(re===void 0)continue;const de=re.buffer,ye=re.type,fe=re.bytesPerElement,He=i.isWebGL2===!0&&(ye===t.INT||ye===t.UNSIGNED_INT||Ae.gpuType===fx);if(Ae.isInterleavedBufferAttribute){const Se=Ae.data,k=Se.stride,ct=Ae.offset;if(Se.isInstancedInterleavedBuffer){for(let Me=0;Me<ae.locationSize;Me++)P(ae.location+Me,Se.meshPerAttribute);I.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=Se.meshPerAttribute*Se.count)}else for(let Me=0;Me<ae.locationSize;Me++)E(ae.location+Me);t.bindBuffer(t.ARRAY_BUFFER,de);for(let Me=0;Me<ae.locationSize;Me++)w(ae.location+Me,J/ae.locationSize,ye,O,k*fe,(ct+J/ae.locationSize*Me)*fe,He)}else{if(Ae.isInstancedBufferAttribute){for(let Se=0;Se<ae.locationSize;Se++)P(ae.location+Se,Ae.meshPerAttribute);I.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=Ae.meshPerAttribute*Ae.count)}else for(let Se=0;Se<ae.locationSize;Se++)E(ae.location+Se);t.bindBuffer(t.ARRAY_BUFFER,de);for(let Se=0;Se<ae.locationSize;Se++)w(ae.location+Se,J/ae.locationSize,ye,O,J*fe,J/ae.locationSize*Se*fe,He)}}else if(F!==void 0){const O=F[te];if(O!==void 0)switch(O.length){case 2:t.vertexAttrib2fv(ae.location,O);break;case 3:t.vertexAttrib3fv(ae.location,O);break;case 4:t.vertexAttrib4fv(ae.location,O);break;default:t.vertexAttrib1fv(ae.location,O)}}}}A()}function $(){K();for(const I in o){const q=o[I];for(const z in q){const W=q[z];for(const N in W)_(W[N].object),delete W[N];delete q[z]}delete o[I]}}function S(I){if(o[I.id]===void 0)return;const q=o[I.id];for(const z in q){const W=q[z];for(const N in W)_(W[N].object),delete W[N];delete q[z]}delete o[I.id]}function C(I){for(const q in o){const z=o[q];if(z[I.id]===void 0)continue;const W=z[I.id];for(const N in W)_(W[N].object),delete W[N];delete z[I.id]}}function K(){Q(),d=!0,c!==l&&(c=l,m(c.object))}function Q(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:K,resetDefaultState:Q,dispose:$,releaseStatesOfGeometry:S,releaseStatesOfProgram:C,initAttributes:x,enableAttribute:E,disableUnusedAttributes:A}}function nw(t,e,n,i){const r=i.isWebGL2;let s;function a(d){s=d}function o(d,h){t.drawArrays(s,d,h),n.update(h,s,1)}function l(d,h,f){if(f===0)return;let m,_;if(r)m=t,_="drawArraysInstanced";else if(m=e.get("ANGLE_instanced_arrays"),_="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[_](s,d,h,f),n.update(h,s,f)}function c(d,h,f){if(f===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let _=0;_<f;_++)this.render(d[_],h[_]);else{m.multiDrawArraysWEBGL(s,d,0,h,0,f);let _=0;for(let M=0;M<f;M++)_+=h[M];n.update(_,s,1)}}this.setMode=a,this.render=o,this.renderInstances=l,this.renderMultiDraw=c}function iw(t,e,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");i=t.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(w){if(w==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&t.constructor.name==="WebGL2RenderingContext";let o=n.precision!==void 0?n.precision:"highp";const l=s(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=a||e.has("WEBGL_draw_buffers"),d=n.logarithmicDepthBuffer===!0,h=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),f=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=t.getParameter(t.MAX_TEXTURE_SIZE),_=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),M=t.getParameter(t.MAX_VERTEX_ATTRIBS),p=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),u=t.getParameter(t.MAX_VARYING_VECTORS),v=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),x=f>0,E=a||e.has("OES_texture_float"),P=x&&E,A=a?t.getParameter(t.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:d,maxTextures:h,maxVertexTextures:f,maxTextureSize:m,maxCubemapSize:_,maxAttributes:M,maxVertexUniforms:p,maxVaryings:u,maxFragmentUniforms:v,vertexTextures:x,floatFragmentTextures:E,floatVertexTextures:P,maxSamples:A}}function rw(t){const e=this;let n=null,i=0,r=!1,s=!1;const a=new Vi,o=new Ke,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const m=h.length!==0||f||i!==0||r;return r=f,i=h.length,m},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){n=d(h,f,0)},this.setState=function(h,f,m){const _=h.clippingPlanes,M=h.clipIntersection,p=h.clipShadows,u=t.get(h);if(!r||_===null||_.length===0||s&&!p)s?d(null):c();else{const v=s?0:i,x=v*4;let E=u.clippingState||null;l.value=E,E=d(_,f,x,m);for(let P=0;P!==x;++P)E[P]=n[P];u.clippingState=E,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function d(h,f,m,_){const M=h!==null?h.length:0;let p=null;if(M!==0){if(p=l.value,_!==!0||p===null){const u=m+M*4,v=f.matrixWorldInverse;o.getNormalMatrix(v),(p===null||p.length<u)&&(p=new Float32Array(u));for(let x=0,E=m;x!==M;++x,E+=4)a.copy(h[x]).applyMatrix4(v,o),a.normal.toArray(p,E),p[E+3]=a.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,p}}function sw(t){let e=new WeakMap;function n(a,o){return o===Rd?a.mapping=Ys:o===Pd&&(a.mapping=$s),a}function i(a){if(a&&a.isTexture){const o=a.mapping;if(o===Rd||o===Pd)if(e.has(a)){const l=e.get(a).texture;return n(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new mM(l.height);return c.fromEquirectangularTexture(t,a),e.set(a,c),a.addEventListener("dispose",r),n(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class Vf extends Nx{constructor(e=-1,n=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=d*this.view.offsetY,l=o-d*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Rs=4,om=[.125,.215,.35,.446,.526,.582],wr=20,_u=new Vf,lm=new $e;let yu=null,Su=0,Mu=0;const Mr=(1+Math.sqrt(5))/2,ds=1/Mr,cm=[new U(1,1,1),new U(-1,1,1),new U(1,1,-1),new U(-1,1,-1),new U(0,Mr,ds),new U(0,Mr,-ds),new U(ds,0,Mr),new U(-ds,0,Mr),new U(Mr,ds,0),new U(-Mr,ds,0)];class um{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){yu=this._renderer.getRenderTarget(),Su=this._renderer.getActiveCubeFace(),Mu=this._renderer.getActiveMipmapLevel(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=hm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=fm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(yu,Su,Mu),e.scissorTest=!1,Jo(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Ys||e.mapping===$s?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),yu=this._renderer.getRenderTarget(),Su=this._renderer.getActiveCubeFace(),Mu=this._renderer.getActiveMipmapLevel();const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:ln,minFilter:ln,generateMipmaps:!1,type:Ti,format:$n,colorSpace:dr,depthBuffer:!1},r=dm(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=dm(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=aw(s)),this._blurMaterial=ow(s,e,n)}return r}_compileMaterial(e){const n=new Rt(this._lodPlanes[0],e);this._renderer.compile(n,_u)}_sceneToCubeUV(e,n,i,r){const o=new _n(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,f=d.toneMapping;d.getClearColor(lm),d.toneMapping=wi,d.autoClear=!1;const m=new Rr({name:"PMREM.Background",side:mn,depthWrite:!1,depthTest:!1}),_=new Rt(new Ot,m);let M=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,M=!0):(m.color.copy(lm),M=!0);for(let u=0;u<6;u++){const v=u%3;v===0?(o.up.set(0,l[u],0),o.lookAt(c[u],0,0)):v===1?(o.up.set(0,0,l[u]),o.lookAt(0,c[u],0)):(o.up.set(0,l[u],0),o.lookAt(0,0,c[u]));const x=this._cubeSize;Jo(r,v*x,u>2?x:0,x,x),d.setRenderTarget(r),M&&d.render(_,o),d.render(e,o)}_.geometry.dispose(),_.material.dispose(),d.toneMapping=f,d.autoClear=h,e.background=p}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Ys||e.mapping===$s;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=hm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=fm());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new Rt(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;Jo(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(a,_u)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=cm[(r-1)%cm.length];this._blur(e,r-1,r,s,a)}n.autoClear=i}_blur(e,n,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,n,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,h=new Rt(this._lodPlanes[r],c),f=c.uniforms,m=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*wr-1),M=s/_,p=isFinite(s)?1+Math.floor(d*M):wr;p>wr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${wr}`);const u=[];let v=0;for(let w=0;w<wr;++w){const D=w/M,$=Math.exp(-D*D/2);u.push($),w===0?v+=$:w<p&&(v+=2*$)}for(let w=0;w<u.length;w++)u[w]=u[w]/v;f.envMap.value=e.texture,f.samples.value=p,f.weights.value=u,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:x}=this;f.dTheta.value=_,f.mipInt.value=x-i;const E=this._sizeLods[r],P=3*E*(r>x-Rs?r-x+Rs:0),A=4*(this._cubeSize-E);Jo(n,P,A,3*E,2*E),l.setRenderTarget(n),l.render(h,_u)}}function aw(t){const e=[],n=[],i=[];let r=t;const s=t-Rs+1+om.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);n.push(o);let l=1/o;a>t-Rs?l=om[a-t+Rs-1]:a===0&&(l=0),i.push(l);const c=1/(o-2),d=-c,h=1+c,f=[d,d,h,d,h,h,d,d,h,h,d,h],m=6,_=6,M=3,p=2,u=1,v=new Float32Array(M*_*m),x=new Float32Array(p*_*m),E=new Float32Array(u*_*m);for(let A=0;A<m;A++){const w=A%3*2/3-1,D=A>2?0:-1,$=[w,D,0,w+2/3,D,0,w+2/3,D+1,0,w,D,0,w+2/3,D+1,0,w,D+1,0];v.set($,M*_*A),x.set(f,p*_*A);const S=[A,A,A,A,A,A];E.set(S,u*_*A)}const P=new ui;P.setAttribute("position",new Dn(v,M)),P.setAttribute("uv",new Dn(x,p)),P.setAttribute("faceIndex",new Dn(E,u)),e.push(P),r>Rs&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function dm(t,e,n){const i=new Jn(t,e,n);return i.texture.mapping=mc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Jo(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function ow(t,e,n){const i=new Float32Array(wr),r=new U(0,1,0);return new dn({name:"SphericalGaussianBlur",defines:{n:wr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:jf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ei,depthTest:!1,depthWrite:!1})}function fm(){return new dn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:jf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ei,depthTest:!1,depthWrite:!1})}function hm(){return new dn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:jf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ei,depthTest:!1,depthWrite:!1})}function jf(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function lw(t){let e=new WeakMap,n=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===Rd||l===Pd,d=l===Ys||l===$s;if(c||d)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let h=e.get(o);return n===null&&(n=new um(t)),h=c?n.fromEquirectangular(o,h):n.fromCubemap(o,h),e.set(o,h),h.texture}else{if(e.has(o))return e.get(o).texture;{const h=o.image;if(c&&h&&h.height>0||d&&h&&r(h)){n===null&&(n=new um(t));const f=c?n.fromEquirectangular(o):n.fromCubemap(o);return e.set(o,f),o.addEventListener("dispose",s),f.texture}else return null}}}return o}function r(o){let l=0;const c=6;for(let d=0;d<c;d++)o[d]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:a}}function cw(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(i){i.isWebGL2?(n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance")):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture")},get:function(i){const r=n(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function uw(t,e,n,i){const r={},s=new WeakMap;function a(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const _ in f.attributes)e.remove(f.attributes[_]);for(const _ in f.morphAttributes){const M=f.morphAttributes[_];for(let p=0,u=M.length;p<u;p++)e.remove(M[p])}f.removeEventListener("dispose",a),delete r[f.id];const m=s.get(f);m&&(e.remove(m),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,n.memory.geometries--}function o(h,f){return r[f.id]===!0||(f.addEventListener("dispose",a),r[f.id]=!0,n.memory.geometries++),f}function l(h){const f=h.attributes;for(const _ in f)e.update(f[_],t.ARRAY_BUFFER);const m=h.morphAttributes;for(const _ in m){const M=m[_];for(let p=0,u=M.length;p<u;p++)e.update(M[p],t.ARRAY_BUFFER)}}function c(h){const f=[],m=h.index,_=h.attributes.position;let M=0;if(m!==null){const v=m.array;M=m.version;for(let x=0,E=v.length;x<E;x+=3){const P=v[x+0],A=v[x+1],w=v[x+2];f.push(P,A,A,w,w,P)}}else if(_!==void 0){const v=_.array;M=_.version;for(let x=0,E=v.length/3-1;x<E;x+=3){const P=x+0,A=x+1,w=x+2;f.push(P,A,A,w,w,P)}}else return;const p=new(Mx(f)?Rx:Cx)(f,1);p.version=M;const u=s.get(h);u&&e.remove(u),s.set(h,p)}function d(h){const f=s.get(h);if(f){const m=h.index;m!==null&&f.version<m.version&&c(h)}else c(h);return s.get(h)}return{get:o,update:l,getWireframeAttribute:d}}function dw(t,e,n,i){const r=i.isWebGL2;let s;function a(m){s=m}let o,l;function c(m){o=m.type,l=m.bytesPerElement}function d(m,_){t.drawElements(s,_,o,m*l),n.update(_,s,1)}function h(m,_,M){if(M===0)return;let p,u;if(r)p=t,u="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),u="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[u](s,_,o,m*l,M),n.update(_,s,M)}function f(m,_,M){if(M===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let u=0;u<M;u++)this.render(m[u]/l,_[u]);else{p.multiDrawElementsWEBGL(s,_,0,o,m,0,M);let u=0;for(let v=0;v<M;v++)u+=_[v];n.update(u,s,1)}}this.setMode=a,this.setIndex=c,this.render=d,this.renderInstances=h,this.renderMultiDraw=f}function fw(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(n.calls++,a){case t.TRIANGLES:n.triangles+=o*(s/3);break;case t.LINES:n.lines+=o*(s/2);break;case t.LINE_STRIP:n.lines+=o*(s-1);break;case t.LINE_LOOP:n.lines+=o*s;break;case t.POINTS:n.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function hw(t,e){return t[0]-e[0]}function pw(t,e){return Math.abs(e[1])-Math.abs(t[1])}function mw(t,e,n){const i={},r=new Float32Array(8),s=new WeakMap,a=new St,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,d,h){const f=c.morphTargetInfluences;if(e.isWebGL2===!0){const _=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,M=_!==void 0?_.length:0;let p=s.get(d);if(p===void 0||p.count!==M){let Q=function(){C.dispose(),s.delete(d),d.removeEventListener("dispose",Q)};var m=Q;p!==void 0&&p.texture.dispose();const u=d.morphAttributes.position!==void 0,v=d.morphAttributes.normal!==void 0,x=d.morphAttributes.color!==void 0,E=d.morphAttributes.position||[],P=d.morphAttributes.normal||[],A=d.morphAttributes.color||[];let w=0;u===!0&&(w=1),v===!0&&(w=2),x===!0&&(w=3);let D=d.attributes.position.count*w,$=1;D>e.maxTextureSize&&($=Math.ceil(D/e.maxTextureSize),D=e.maxTextureSize);const S=new Float32Array(D*$*4*M),C=new bx(S,D,$,M);C.type=ai,C.needsUpdate=!0;const K=w*4;for(let I=0;I<M;I++){const q=E[I],z=P[I],W=A[I],N=D*$*4*I;for(let B=0;B<q.count;B++){const F=B*K;u===!0&&(a.fromBufferAttribute(q,B),S[N+F+0]=a.x,S[N+F+1]=a.y,S[N+F+2]=a.z,S[N+F+3]=0),v===!0&&(a.fromBufferAttribute(z,B),S[N+F+4]=a.x,S[N+F+5]=a.y,S[N+F+6]=a.z,S[N+F+7]=0),x===!0&&(a.fromBufferAttribute(W,B),S[N+F+8]=a.x,S[N+F+9]=a.y,S[N+F+10]=a.z,S[N+F+11]=W.itemSize===4?a.w:1)}}p={count:M,texture:C,size:new we(D,$)},s.set(d,p),d.addEventListener("dispose",Q)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)h.getUniforms().setValue(t,"morphTexture",c.morphTexture,n);else{let u=0;for(let x=0;x<f.length;x++)u+=f[x];const v=d.morphTargetsRelative?1:1-u;h.getUniforms().setValue(t,"morphTargetBaseInfluence",v),h.getUniforms().setValue(t,"morphTargetInfluences",f)}h.getUniforms().setValue(t,"morphTargetsTexture",p.texture,n),h.getUniforms().setValue(t,"morphTargetsTextureSize",p.size)}else{const _=f===void 0?0:f.length;let M=i[d.id];if(M===void 0||M.length!==_){M=[];for(let E=0;E<_;E++)M[E]=[E,0];i[d.id]=M}for(let E=0;E<_;E++){const P=M[E];P[0]=E,P[1]=f[E]}M.sort(pw);for(let E=0;E<8;E++)E<_&&M[E][1]?(o[E][0]=M[E][0],o[E][1]=M[E][1]):(o[E][0]=Number.MAX_SAFE_INTEGER,o[E][1]=0);o.sort(hw);const p=d.morphAttributes.position,u=d.morphAttributes.normal;let v=0;for(let E=0;E<8;E++){const P=o[E],A=P[0],w=P[1];A!==Number.MAX_SAFE_INTEGER&&w?(p&&d.getAttribute("morphTarget"+E)!==p[A]&&d.setAttribute("morphTarget"+E,p[A]),u&&d.getAttribute("morphNormal"+E)!==u[A]&&d.setAttribute("morphNormal"+E,u[A]),r[E]=w,v+=w):(p&&d.hasAttribute("morphTarget"+E)===!0&&d.deleteAttribute("morphTarget"+E),u&&d.hasAttribute("morphNormal"+E)===!0&&d.deleteAttribute("morphNormal"+E),r[E]=0)}const x=d.morphTargetsRelative?1:1-v;h.getUniforms().setValue(t,"morphTargetBaseInfluence",x),h.getUniforms().setValue(t,"morphTargetInfluences",r)}}return{update:l}}function gw(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,d=l.geometry,h=e.get(l,d);if(r.get(h)!==c&&(e.update(h),r.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==c&&(f.update(),r.set(f,c))}return h}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:a}}class Ix extends Jt{constructor(e,n,i,r,s,a,o,l,c,d){if(d=d!==void 0?d:Dr,d!==Dr&&d!==qs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&d===Dr&&(i=qi),i===void 0&&d===qs&&(i=Lr),super(null,r,s,a,o,l,d,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=o!==void 0?o:Ht,this.minFilter=l!==void 0?l:Ht,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const Ux=new Jt,Ox=new Ix(1,1);Ox.compareFunction=Sx;const kx=new bx,Fx=new JS,zx=new Lx,pm=[],mm=[],gm=new Float32Array(16),xm=new Float32Array(9),vm=new Float32Array(4);function na(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=pm[r];if(s===void 0&&(s=new Float32Array(r),pm[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=n,t[a].toArray(s,o)}return s}function Dt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function It(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function vc(t,e){let n=mm[e];n===void 0&&(n=new Int32Array(e),mm[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function xw(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function vw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Dt(n,e))return;t.uniform2fv(this.addr,e),It(n,e)}}function _w(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Dt(n,e))return;t.uniform3fv(this.addr,e),It(n,e)}}function yw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Dt(n,e))return;t.uniform4fv(this.addr,e),It(n,e)}}function Sw(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Dt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),It(n,e)}else{if(Dt(n,i))return;vm.set(i),t.uniformMatrix2fv(this.addr,!1,vm),It(n,i)}}function Mw(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Dt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),It(n,e)}else{if(Dt(n,i))return;xm.set(i),t.uniformMatrix3fv(this.addr,!1,xm),It(n,i)}}function Ew(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Dt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),It(n,e)}else{if(Dt(n,i))return;gm.set(i),t.uniformMatrix4fv(this.addr,!1,gm),It(n,i)}}function ww(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function Tw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Dt(n,e))return;t.uniform2iv(this.addr,e),It(n,e)}}function bw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Dt(n,e))return;t.uniform3iv(this.addr,e),It(n,e)}}function Aw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Dt(n,e))return;t.uniform4iv(this.addr,e),It(n,e)}}function Cw(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function Rw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Dt(n,e))return;t.uniform2uiv(this.addr,e),It(n,e)}}function Pw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Dt(n,e))return;t.uniform3uiv(this.addr,e),It(n,e)}}function Nw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Dt(n,e))return;t.uniform4uiv(this.addr,e),It(n,e)}}function Lw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);const s=this.type===t.SAMPLER_2D_SHADOW?Ox:Ux;n.setTexture2D(e||s,r)}function Dw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||Fx,r)}function Iw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||zx,r)}function Uw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||kx,r)}function Ow(t){switch(t){case 5126:return xw;case 35664:return vw;case 35665:return _w;case 35666:return yw;case 35674:return Sw;case 35675:return Mw;case 35676:return Ew;case 5124:case 35670:return ww;case 35667:case 35671:return Tw;case 35668:case 35672:return bw;case 35669:case 35673:return Aw;case 5125:return Cw;case 36294:return Rw;case 36295:return Pw;case 36296:return Nw;case 35678:case 36198:case 36298:case 36306:case 35682:return Lw;case 35679:case 36299:case 36307:return Dw;case 35680:case 36300:case 36308:case 36293:return Iw;case 36289:case 36303:case 36311:case 36292:return Uw}}function kw(t,e){t.uniform1fv(this.addr,e)}function Fw(t,e){const n=na(e,this.size,2);t.uniform2fv(this.addr,n)}function zw(t,e){const n=na(e,this.size,3);t.uniform3fv(this.addr,n)}function Bw(t,e){const n=na(e,this.size,4);t.uniform4fv(this.addr,n)}function Hw(t,e){const n=na(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function Gw(t,e){const n=na(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function Vw(t,e){const n=na(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function jw(t,e){t.uniform1iv(this.addr,e)}function Ww(t,e){t.uniform2iv(this.addr,e)}function Xw(t,e){t.uniform3iv(this.addr,e)}function Yw(t,e){t.uniform4iv(this.addr,e)}function $w(t,e){t.uniform1uiv(this.addr,e)}function qw(t,e){t.uniform2uiv(this.addr,e)}function Kw(t,e){t.uniform3uiv(this.addr,e)}function Zw(t,e){t.uniform4uiv(this.addr,e)}function Qw(t,e,n){const i=this.cache,r=e.length,s=vc(n,r);Dt(i,s)||(t.uniform1iv(this.addr,s),It(i,s));for(let a=0;a!==r;++a)n.setTexture2D(e[a]||Ux,s[a])}function Jw(t,e,n){const i=this.cache,r=e.length,s=vc(n,r);Dt(i,s)||(t.uniform1iv(this.addr,s),It(i,s));for(let a=0;a!==r;++a)n.setTexture3D(e[a]||Fx,s[a])}function eT(t,e,n){const i=this.cache,r=e.length,s=vc(n,r);Dt(i,s)||(t.uniform1iv(this.addr,s),It(i,s));for(let a=0;a!==r;++a)n.setTextureCube(e[a]||zx,s[a])}function tT(t,e,n){const i=this.cache,r=e.length,s=vc(n,r);Dt(i,s)||(t.uniform1iv(this.addr,s),It(i,s));for(let a=0;a!==r;++a)n.setTexture2DArray(e[a]||kx,s[a])}function nT(t){switch(t){case 5126:return kw;case 35664:return Fw;case 35665:return zw;case 35666:return Bw;case 35674:return Hw;case 35675:return Gw;case 35676:return Vw;case 5124:case 35670:return jw;case 35667:case 35671:return Ww;case 35668:case 35672:return Xw;case 35669:case 35673:return Yw;case 5125:return $w;case 36294:return qw;case 36295:return Kw;case 36296:return Zw;case 35678:case 36198:case 36298:case 36306:case 35682:return Qw;case 35679:case 36299:case 36307:return Jw;case 35680:case 36300:case 36308:case 36293:return eT;case 36289:case 36303:case 36311:case 36292:return tT}}class iT{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=Ow(n.type)}}class rT{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=nT(n.type)}}class sT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,n[o.id],i)}}}const Eu=/(\w+)(\])?(\[|\.)?/g;function _m(t,e){t.seq.push(e),t.map[e.id]=e}function aT(t,e,n){const i=t.name,r=i.length;for(Eu.lastIndex=0;;){const s=Eu.exec(i),a=Eu.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){_m(n,c===void 0?new iT(o,t,e):new rT(o,t,e));break}else{let h=n.map[o];h===void 0&&(h=new sT(o),_m(n,h)),n=h}}}class vl{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),a=e.getUniformLocation(n,s.name);aT(s,a,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,a=n.length;s!==a;++s){const o=n[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in n&&i.push(a)}return i}}function ym(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const oT=37297;let lT=0;function cT(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${n[a]}`)}return i.join(`
`)}function uT(t){const e=ft.getPrimaries(ft.workingColorSpace),n=ft.getPrimaries(t);let i;switch(e===n?i="":e===Xl&&n===Wl?i="LinearDisplayP3ToLinearSRGB":e===Wl&&n===Xl&&(i="LinearSRGBToLinearDisplayP3"),t){case dr:case gc:return[i,"LinearTransferOETF"];case ii:case Ff:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function Sm(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+cT(t.getShaderSource(e),a)}else return r}function dT(t,e){const n=uT(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function fT(t,e){let n;switch(e){case dS:n="Linear";break;case fS:n="Reinhard";break;case hS:n="OptimizedCineon";break;case ux:n="ACESFilmic";break;case mS:n="AgX";break;case gS:n="Neutral";break;case pS:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function hT(t){return[t.extensionDerivatives||t.envMapCubeUVHeight||t.bumpMap||t.normalMapTangentSpace||t.clearcoatNormalMap||t.flatShading||t.alphaToCoverage||t.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(t.extensionFragDepth||t.logarithmicDepthBuffer)&&t.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",t.extensionDrawBuffers&&t.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(t.extensionShaderTextureLOD||t.envMap||t.transmission)&&t.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Ps).join(`
`)}function pT(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ps).join(`
`)}function mT(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function gT(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),a=s.name;let o=1;s.type===t.FLOAT_MAT2&&(o=2),s.type===t.FLOAT_MAT3&&(o=3),s.type===t.FLOAT_MAT4&&(o=4),n[a]={type:s.type,location:t.getAttribLocation(e,a),locationSize:o}}return n}function Ps(t){return t!==""}function Mm(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Em(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const xT=/^[ \t]*#include +<([\w\d./]+)>/gm;function kd(t){return t.replace(xT,_T)}const vT=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function _T(t,e){let n=qe[e];if(n===void 0){const i=vT.get(e);if(i!==void 0)n=qe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return kd(n)}const yT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function wm(t){return t.replace(yT,ST)}function ST(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Tm(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	`;return t.isWebGL2&&(e+=`precision ${t.precision} sampler3D;
		precision ${t.precision} sampler2DArray;
		precision ${t.precision} sampler2DShadow;
		precision ${t.precision} samplerCubeShadow;
		precision ${t.precision} sampler2DArrayShadow;
		precision ${t.precision} isampler2D;
		precision ${t.precision} isampler3D;
		precision ${t.precision} isamplerCube;
		precision ${t.precision} isampler2DArray;
		precision ${t.precision} usampler2D;
		precision ${t.precision} usampler3D;
		precision ${t.precision} usamplerCube;
		precision ${t.precision} usampler2DArray;
		`),t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function MT(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===ox?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===lx?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===gi&&(e="SHADOWMAP_TYPE_VSM"),e}function ET(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Ys:case $s:e="ENVMAP_TYPE_CUBE";break;case mc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function wT(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case $s:e="ENVMAP_MODE_REFRACTION";break}return e}function TT(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case cx:e="ENVMAP_BLENDING_MULTIPLY";break;case cS:e="ENVMAP_BLENDING_MIX";break;case uS:e="ENVMAP_BLENDING_ADD";break}return e}function bT(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function AT(t,e,n,i){const r=t.getContext(),s=n.defines;let a=n.vertexShader,o=n.fragmentShader;const l=MT(n),c=ET(n),d=wT(n),h=TT(n),f=bT(n),m=n.isWebGL2?"":hT(n),_=pT(n),M=mT(s),p=r.createProgram();let u,v,x=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(u=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,M].filter(Ps).join(`
`),u.length>0&&(u+=`
`),v=[m,"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,M].filter(Ps).join(`
`),v.length>0&&(v+=`
`)):(u=[Tm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,M,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+d:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors&&n.isWebGL2?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ps).join(`
`),v=[m,Tm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,M,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+d:"",n.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==wi?"#define TONE_MAPPING":"",n.toneMapping!==wi?qe.tonemapping_pars_fragment:"",n.toneMapping!==wi?fT("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",qe.colorspace_pars_fragment,dT("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Ps).join(`
`)),a=kd(a),a=Mm(a,n),a=Em(a,n),o=kd(o),o=Mm(o,n),o=Em(o,n),a=wm(a),o=wm(o),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,u=[_,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+u,v=["precision mediump sampler2DArray;","#define varying in",n.glslVersion===Hp?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Hp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const E=x+u+a,P=x+v+o,A=ym(r,r.VERTEX_SHADER,E),w=ym(r,r.FRAGMENT_SHADER,P);r.attachShader(p,A),r.attachShader(p,w),n.index0AttributeName!==void 0?r.bindAttribLocation(p,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(p,0,"position"),r.linkProgram(p);function D(K){if(t.debug.checkShaderErrors){const Q=r.getProgramInfoLog(p).trim(),I=r.getShaderInfoLog(A).trim(),q=r.getShaderInfoLog(w).trim();let z=!0,W=!0;if(r.getProgramParameter(p,r.LINK_STATUS)===!1)if(z=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,p,A,w);else{const N=Sm(r,A,"vertex"),B=Sm(r,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(p,r.VALIDATE_STATUS)+`

Material Name: `+K.name+`
Material Type: `+K.type+`

Program Info Log: `+Q+`
`+N+`
`+B)}else Q!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Q):(I===""||q==="")&&(W=!1);W&&(K.diagnostics={runnable:z,programLog:Q,vertexShader:{log:I,prefix:u},fragmentShader:{log:q,prefix:v}})}r.deleteShader(A),r.deleteShader(w),$=new vl(r,p),S=gT(r,p)}let $;this.getUniforms=function(){return $===void 0&&D(this),$};let S;this.getAttributes=function(){return S===void 0&&D(this),S};let C=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=r.getProgramParameter(p,oT)),C},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(p),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=lT++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=A,this.fragmentShader=w,this}let CT=0;class RT{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new PT(e),n.set(e,i)),i}}class PT{constructor(e){this.id=CT++,this.code=e,this.usedTimes=0}}function NT(t,e,n,i,r,s,a){const o=new Hf,l=new RT,c=new Set,d=[],h=r.isWebGL2,f=r.logarithmicDepthBuffer,m=r.vertexTextures;let _=r.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(S){return c.add(S),S===0?"uv":`uv${S}`}function u(S,C,K,Q,I){const q=Q.fog,z=I.geometry,W=S.isMeshStandardMaterial?Q.environment:null,N=(S.isMeshStandardMaterial?n:e).get(S.envMap||W),B=N&&N.mapping===mc?N.image.height:null,F=M[S.type];S.precision!==null&&(_=r.getMaxPrecision(S.precision),_!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",_,"instead."));const te=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,ae=te!==void 0?te.length:0;let Ae=0;z.morphAttributes.position!==void 0&&(Ae=1),z.morphAttributes.normal!==void 0&&(Ae=2),z.morphAttributes.color!==void 0&&(Ae=3);let O,J,re,de;if(F){const st=ri[F];O=st.vertexShader,J=st.fragmentShader}else O=S.vertexShader,J=S.fragmentShader,l.update(S),re=l.getVertexShaderID(S),de=l.getFragmentShaderID(S);const ye=t.getRenderTarget(),fe=I.isInstancedMesh===!0,He=I.isBatchedMesh===!0,Se=!!S.map,k=!!S.matcap,ct=!!N,Me=!!S.aoMap,Ie=!!S.lightMap,Re=!!S.bumpMap,Ye=!!S.normalMap,Ue=!!S.displacementMap,Ge=!!S.emissiveMap,at=!!S.metalnessMap,b=!!S.roughnessMap,y=S.anisotropy>0,j=S.clearcoat>0,Z=S.iridescence>0,ie=S.sheen>0,ne=S.transmission>0,Oe=y&&!!S.anisotropyMap,Ne=j&&!!S.clearcoatMap,oe=j&&!!S.clearcoatNormalMap,he=j&&!!S.clearcoatRoughnessMap,Pe=Z&&!!S.iridescenceMap,ue=Z&&!!S.iridescenceThicknessMap,ut=ie&&!!S.sheenColorMap,je=ie&&!!S.sheenRoughnessMap,ve=!!S.specularMap,ge=!!S.specularColorMap,be=!!S.specularIntensityMap,R=ne&&!!S.transmissionMap,ee=ne&&!!S.thicknessMap,Ee=!!S.gradientMap,L=!!S.alphaMap,ce=S.alphaTest>0,G=!!S.alphaHash,se=!!S.extensions;let xe=wi;S.toneMapped&&(ye===null||ye.isXRRenderTarget===!0)&&(xe=t.toneMapping);const We={isWebGL2:h,shaderID:F,shaderType:S.type,shaderName:S.name,vertexShader:O,fragmentShader:J,defines:S.defines,customVertexShaderID:re,customFragmentShaderID:de,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:_,batching:He,instancing:fe,instancingColor:fe&&I.instanceColor!==null,instancingMorph:fe&&I.morphTexture!==null,supportsVertexTextures:m,outputColorSpace:ye===null?t.outputColorSpace:ye.isXRRenderTarget===!0?ye.texture.colorSpace:dr,alphaToCoverage:!!S.alphaToCoverage,map:Se,matcap:k,envMap:ct,envMapMode:ct&&N.mapping,envMapCubeUVHeight:B,aoMap:Me,lightMap:Ie,bumpMap:Re,normalMap:Ye,displacementMap:m&&Ue,emissiveMap:Ge,normalMapObjectSpace:Ye&&S.normalMapType===bS,normalMapTangentSpace:Ye&&S.normalMapType===yx,metalnessMap:at,roughnessMap:b,anisotropy:y,anisotropyMap:Oe,clearcoat:j,clearcoatMap:Ne,clearcoatNormalMap:oe,clearcoatRoughnessMap:he,iridescence:Z,iridescenceMap:Pe,iridescenceThicknessMap:ue,sheen:ie,sheenColorMap:ut,sheenRoughnessMap:je,specularMap:ve,specularColorMap:ge,specularIntensityMap:be,transmission:ne,transmissionMap:R,thicknessMap:ee,gradientMap:Ee,opaque:S.transparent===!1&&S.blending===Fs&&S.alphaToCoverage===!1,alphaMap:L,alphaTest:ce,alphaHash:G,combine:S.combine,mapUv:Se&&p(S.map.channel),aoMapUv:Me&&p(S.aoMap.channel),lightMapUv:Ie&&p(S.lightMap.channel),bumpMapUv:Re&&p(S.bumpMap.channel),normalMapUv:Ye&&p(S.normalMap.channel),displacementMapUv:Ue&&p(S.displacementMap.channel),emissiveMapUv:Ge&&p(S.emissiveMap.channel),metalnessMapUv:at&&p(S.metalnessMap.channel),roughnessMapUv:b&&p(S.roughnessMap.channel),anisotropyMapUv:Oe&&p(S.anisotropyMap.channel),clearcoatMapUv:Ne&&p(S.clearcoatMap.channel),clearcoatNormalMapUv:oe&&p(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:he&&p(S.clearcoatRoughnessMap.channel),iridescenceMapUv:Pe&&p(S.iridescenceMap.channel),iridescenceThicknessMapUv:ue&&p(S.iridescenceThicknessMap.channel),sheenColorMapUv:ut&&p(S.sheenColorMap.channel),sheenRoughnessMapUv:je&&p(S.sheenRoughnessMap.channel),specularMapUv:ve&&p(S.specularMap.channel),specularColorMapUv:ge&&p(S.specularColorMap.channel),specularIntensityMapUv:be&&p(S.specularIntensityMap.channel),transmissionMapUv:R&&p(S.transmissionMap.channel),thicknessMapUv:ee&&p(S.thicknessMap.channel),alphaMapUv:L&&p(S.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(Ye||y),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!z.attributes.uv&&(Se||L),fog:!!q,useFog:S.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:I.isSkinnedMesh===!0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:ae,morphTextureStride:Ae,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:S.dithering,shadowMapEnabled:t.shadowMap.enabled&&K.length>0,shadowMapType:t.shadowMap.type,toneMapping:xe,useLegacyLights:t._useLegacyLights,decodeVideoTexture:Se&&S.map.isVideoTexture===!0&&ft.getTransfer(S.map.colorSpace)===xt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Xn,flipSided:S.side===mn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionDerivatives:se&&S.extensions.derivatives===!0,extensionFragDepth:se&&S.extensions.fragDepth===!0,extensionDrawBuffers:se&&S.extensions.drawBuffers===!0,extensionShaderTextureLOD:se&&S.extensions.shaderTextureLOD===!0,extensionClipCullDistance:se&&S.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:se&&S.extensions.multiDraw===!0&&i.has("WEBGL_multi_draw"),rendererExtensionFragDepth:h||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return We.vertexUv1s=c.has(1),We.vertexUv2s=c.has(2),We.vertexUv3s=c.has(3),c.clear(),We}function v(S){const C=[];if(S.shaderID?C.push(S.shaderID):(C.push(S.customVertexShaderID),C.push(S.customFragmentShaderID)),S.defines!==void 0)for(const K in S.defines)C.push(K),C.push(S.defines[K]);return S.isRawShaderMaterial===!1&&(x(C,S),E(C,S),C.push(t.outputColorSpace)),C.push(S.customProgramCacheKey),C.join()}function x(S,C){S.push(C.precision),S.push(C.outputColorSpace),S.push(C.envMapMode),S.push(C.envMapCubeUVHeight),S.push(C.mapUv),S.push(C.alphaMapUv),S.push(C.lightMapUv),S.push(C.aoMapUv),S.push(C.bumpMapUv),S.push(C.normalMapUv),S.push(C.displacementMapUv),S.push(C.emissiveMapUv),S.push(C.metalnessMapUv),S.push(C.roughnessMapUv),S.push(C.anisotropyMapUv),S.push(C.clearcoatMapUv),S.push(C.clearcoatNormalMapUv),S.push(C.clearcoatRoughnessMapUv),S.push(C.iridescenceMapUv),S.push(C.iridescenceThicknessMapUv),S.push(C.sheenColorMapUv),S.push(C.sheenRoughnessMapUv),S.push(C.specularMapUv),S.push(C.specularColorMapUv),S.push(C.specularIntensityMapUv),S.push(C.transmissionMapUv),S.push(C.thicknessMapUv),S.push(C.combine),S.push(C.fogExp2),S.push(C.sizeAttenuation),S.push(C.morphTargetsCount),S.push(C.morphAttributeCount),S.push(C.numDirLights),S.push(C.numPointLights),S.push(C.numSpotLights),S.push(C.numSpotLightMaps),S.push(C.numHemiLights),S.push(C.numRectAreaLights),S.push(C.numDirLightShadows),S.push(C.numPointLightShadows),S.push(C.numSpotLightShadows),S.push(C.numSpotLightShadowsWithMaps),S.push(C.numLightProbes),S.push(C.shadowMapType),S.push(C.toneMapping),S.push(C.numClippingPlanes),S.push(C.numClipIntersection),S.push(C.depthPacking)}function E(S,C){o.disableAll(),C.isWebGL2&&o.enable(0),C.supportsVertexTextures&&o.enable(1),C.instancing&&o.enable(2),C.instancingColor&&o.enable(3),C.instancingMorph&&o.enable(4),C.matcap&&o.enable(5),C.envMap&&o.enable(6),C.normalMapObjectSpace&&o.enable(7),C.normalMapTangentSpace&&o.enable(8),C.clearcoat&&o.enable(9),C.iridescence&&o.enable(10),C.alphaTest&&o.enable(11),C.vertexColors&&o.enable(12),C.vertexAlphas&&o.enable(13),C.vertexUv1s&&o.enable(14),C.vertexUv2s&&o.enable(15),C.vertexUv3s&&o.enable(16),C.vertexTangents&&o.enable(17),C.anisotropy&&o.enable(18),C.alphaHash&&o.enable(19),C.batching&&o.enable(20),S.push(o.mask),o.disableAll(),C.fog&&o.enable(0),C.useFog&&o.enable(1),C.flatShading&&o.enable(2),C.logarithmicDepthBuffer&&o.enable(3),C.skinning&&o.enable(4),C.morphTargets&&o.enable(5),C.morphNormals&&o.enable(6),C.morphColors&&o.enable(7),C.premultipliedAlpha&&o.enable(8),C.shadowMapEnabled&&o.enable(9),C.useLegacyLights&&o.enable(10),C.doubleSided&&o.enable(11),C.flipSided&&o.enable(12),C.useDepthPacking&&o.enable(13),C.dithering&&o.enable(14),C.transmission&&o.enable(15),C.sheen&&o.enable(16),C.opaque&&o.enable(17),C.pointsUvs&&o.enable(18),C.decodeVideoTexture&&o.enable(19),C.alphaToCoverage&&o.enable(20),S.push(o.mask)}function P(S){const C=M[S.type];let K;if(C){const Q=ri[C];K=Kl.clone(Q.uniforms)}else K=S.uniforms;return K}function A(S,C){let K;for(let Q=0,I=d.length;Q<I;Q++){const q=d[Q];if(q.cacheKey===C){K=q,++K.usedTimes;break}}return K===void 0&&(K=new AT(t,C,S,s),d.push(K)),K}function w(S){if(--S.usedTimes===0){const C=d.indexOf(S);d[C]=d[d.length-1],d.pop(),S.destroy()}}function D(S){l.remove(S)}function $(){l.dispose()}return{getParameters:u,getProgramCacheKey:v,getUniforms:P,acquireProgram:A,releaseProgram:w,releaseShaderCache:D,programs:d,dispose:$}}function LT(){let t=new WeakMap;function e(s){let a=t.get(s);return a===void 0&&(a={},t.set(s,a)),a}function n(s){t.delete(s)}function i(s,a,o){t.get(s)[a]=o}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function DT(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function bm(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Am(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function a(h,f,m,_,M,p){let u=t[e];return u===void 0?(u={id:h.id,object:h,geometry:f,material:m,groupOrder:_,renderOrder:h.renderOrder,z:M,group:p},t[e]=u):(u.id=h.id,u.object=h,u.geometry=f,u.material=m,u.groupOrder=_,u.renderOrder=h.renderOrder,u.z=M,u.group=p),e++,u}function o(h,f,m,_,M,p){const u=a(h,f,m,_,M,p);m.transmission>0?i.push(u):m.transparent===!0?r.push(u):n.push(u)}function l(h,f,m,_,M,p){const u=a(h,f,m,_,M,p);m.transmission>0?i.unshift(u):m.transparent===!0?r.unshift(u):n.unshift(u)}function c(h,f){n.length>1&&n.sort(h||DT),i.length>1&&i.sort(f||bm),r.length>1&&r.sort(f||bm)}function d(){for(let h=e,f=t.length;h<f;h++){const m=t[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:o,unshift:l,finish:d,sort:c}}function IT(){let t=new WeakMap;function e(i,r){const s=t.get(i);let a;return s===void 0?(a=new Am,t.set(i,[a])):r>=s.length?(a=new Am,s.push(a)):a=s[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}function UT(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new U,color:new $e};break;case"SpotLight":n={position:new U,direction:new U,color:new $e,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new U,color:new $e,distance:0,decay:0};break;case"HemisphereLight":n={direction:new U,skyColor:new $e,groundColor:new $e};break;case"RectAreaLight":n={color:new $e,position:new U,halfWidth:new U,halfHeight:new U};break}return t[e.id]=n,n}}}function OT(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new we};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new we};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new we,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let kT=0;function FT(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function zT(t,e){const n=new UT,i=OT(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let d=0;d<9;d++)r.probe.push(new U);const s=new U,a=new ht,o=new ht;function l(d,h){let f=0,m=0,_=0;for(let K=0;K<9;K++)r.probe[K].set(0,0,0);let M=0,p=0,u=0,v=0,x=0,E=0,P=0,A=0,w=0,D=0,$=0;d.sort(FT);const S=h===!0?Math.PI:1;for(let K=0,Q=d.length;K<Q;K++){const I=d[K],q=I.color,z=I.intensity,W=I.distance,N=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)f+=q.r*z*S,m+=q.g*z*S,_+=q.b*z*S;else if(I.isLightProbe){for(let B=0;B<9;B++)r.probe[B].addScaledVector(I.sh.coefficients[B],z);$++}else if(I.isDirectionalLight){const B=n.get(I);if(B.color.copy(I.color).multiplyScalar(I.intensity*S),I.castShadow){const F=I.shadow,te=i.get(I);te.shadowBias=F.bias,te.shadowNormalBias=F.normalBias,te.shadowRadius=F.radius,te.shadowMapSize=F.mapSize,r.directionalShadow[M]=te,r.directionalShadowMap[M]=N,r.directionalShadowMatrix[M]=I.shadow.matrix,E++}r.directional[M]=B,M++}else if(I.isSpotLight){const B=n.get(I);B.position.setFromMatrixPosition(I.matrixWorld),B.color.copy(q).multiplyScalar(z*S),B.distance=W,B.coneCos=Math.cos(I.angle),B.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),B.decay=I.decay,r.spot[u]=B;const F=I.shadow;if(I.map&&(r.spotLightMap[w]=I.map,w++,F.updateMatrices(I),I.castShadow&&D++),r.spotLightMatrix[u]=F.matrix,I.castShadow){const te=i.get(I);te.shadowBias=F.bias,te.shadowNormalBias=F.normalBias,te.shadowRadius=F.radius,te.shadowMapSize=F.mapSize,r.spotShadow[u]=te,r.spotShadowMap[u]=N,A++}u++}else if(I.isRectAreaLight){const B=n.get(I);B.color.copy(q).multiplyScalar(z),B.halfWidth.set(I.width*.5,0,0),B.halfHeight.set(0,I.height*.5,0),r.rectArea[v]=B,v++}else if(I.isPointLight){const B=n.get(I);if(B.color.copy(I.color).multiplyScalar(I.intensity*S),B.distance=I.distance,B.decay=I.decay,I.castShadow){const F=I.shadow,te=i.get(I);te.shadowBias=F.bias,te.shadowNormalBias=F.normalBias,te.shadowRadius=F.radius,te.shadowMapSize=F.mapSize,te.shadowCameraNear=F.camera.near,te.shadowCameraFar=F.camera.far,r.pointShadow[p]=te,r.pointShadowMap[p]=N,r.pointShadowMatrix[p]=I.shadow.matrix,P++}r.point[p]=B,p++}else if(I.isHemisphereLight){const B=n.get(I);B.skyColor.copy(I.color).multiplyScalar(z*S),B.groundColor.copy(I.groundColor).multiplyScalar(z*S),r.hemi[x]=B,x++}}v>0&&(e.isWebGL2?t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=pe.LTC_FLOAT_1,r.rectAreaLTC2=pe.LTC_FLOAT_2):(r.rectAreaLTC1=pe.LTC_HALF_1,r.rectAreaLTC2=pe.LTC_HALF_2):t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=pe.LTC_FLOAT_1,r.rectAreaLTC2=pe.LTC_FLOAT_2):t.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=pe.LTC_HALF_1,r.rectAreaLTC2=pe.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=f,r.ambient[1]=m,r.ambient[2]=_;const C=r.hash;(C.directionalLength!==M||C.pointLength!==p||C.spotLength!==u||C.rectAreaLength!==v||C.hemiLength!==x||C.numDirectionalShadows!==E||C.numPointShadows!==P||C.numSpotShadows!==A||C.numSpotMaps!==w||C.numLightProbes!==$)&&(r.directional.length=M,r.spot.length=u,r.rectArea.length=v,r.point.length=p,r.hemi.length=x,r.directionalShadow.length=E,r.directionalShadowMap.length=E,r.pointShadow.length=P,r.pointShadowMap.length=P,r.spotShadow.length=A,r.spotShadowMap.length=A,r.directionalShadowMatrix.length=E,r.pointShadowMatrix.length=P,r.spotLightMatrix.length=A+w-D,r.spotLightMap.length=w,r.numSpotLightShadowsWithMaps=D,r.numLightProbes=$,C.directionalLength=M,C.pointLength=p,C.spotLength=u,C.rectAreaLength=v,C.hemiLength=x,C.numDirectionalShadows=E,C.numPointShadows=P,C.numSpotShadows=A,C.numSpotMaps=w,C.numLightProbes=$,r.version=kT++)}function c(d,h){let f=0,m=0,_=0,M=0,p=0;const u=h.matrixWorldInverse;for(let v=0,x=d.length;v<x;v++){const E=d[v];if(E.isDirectionalLight){const P=r.directional[f];P.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),P.direction.sub(s),P.direction.transformDirection(u),f++}else if(E.isSpotLight){const P=r.spot[_];P.position.setFromMatrixPosition(E.matrixWorld),P.position.applyMatrix4(u),P.direction.setFromMatrixPosition(E.matrixWorld),s.setFromMatrixPosition(E.target.matrixWorld),P.direction.sub(s),P.direction.transformDirection(u),_++}else if(E.isRectAreaLight){const P=r.rectArea[M];P.position.setFromMatrixPosition(E.matrixWorld),P.position.applyMatrix4(u),o.identity(),a.copy(E.matrixWorld),a.premultiply(u),o.extractRotation(a),P.halfWidth.set(E.width*.5,0,0),P.halfHeight.set(0,E.height*.5,0),P.halfWidth.applyMatrix4(o),P.halfHeight.applyMatrix4(o),M++}else if(E.isPointLight){const P=r.point[m];P.position.setFromMatrixPosition(E.matrixWorld),P.position.applyMatrix4(u),m++}else if(E.isHemisphereLight){const P=r.hemi[p];P.direction.setFromMatrixPosition(E.matrixWorld),P.direction.transformDirection(u),p++}}}return{setup:l,setupView:c,state:r}}function Cm(t,e){const n=new zT(t,e),i=[],r=[];function s(){i.length=0,r.length=0}function a(h){i.push(h)}function o(h){r.push(h)}function l(h){n.setup(i,h)}function c(h){n.setupView(i,h)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:n},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function BT(t,e){let n=new WeakMap;function i(s,a=0){const o=n.get(s);let l;return o===void 0?(l=new Cm(t,e),n.set(s,[l])):a>=o.length?(l=new Cm(t,e),o.push(l)):l=o[a],l}function r(){n=new WeakMap}return{get:i,dispose:r}}class HT extends ta{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=wS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class GT extends ta{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const VT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,jT=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function WT(t,e,n){let i=new Gf;const r=new we,s=new we,a=new St,o=new HT({depthPacking:TS}),l=new GT,c={},d=n.maxTextureSize,h={[or]:mn,[mn]:or,[Xn]:Xn},f=new dn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new we},radius:{value:4}},vertexShader:VT,fragmentShader:jT}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const _=new ui;_.setAttribute("position",new Dn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new Rt(_,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ox;let u=this.type;this.render=function(A,w,D){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||A.length===0)return;const $=t.getRenderTarget(),S=t.getActiveCubeFace(),C=t.getActiveMipmapLevel(),K=t.state;K.setBlending(Ei),K.buffers.color.setClear(1,1,1,1),K.buffers.depth.setTest(!0),K.setScissorTest(!1);const Q=u!==gi&&this.type===gi,I=u===gi&&this.type!==gi;for(let q=0,z=A.length;q<z;q++){const W=A[q],N=W.shadow;if(N===void 0){console.warn("THREE.WebGLShadowMap:",W,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;r.copy(N.mapSize);const B=N.getFrameExtents();if(r.multiply(B),s.copy(N.mapSize),(r.x>d||r.y>d)&&(r.x>d&&(s.x=Math.floor(d/B.x),r.x=s.x*B.x,N.mapSize.x=s.x),r.y>d&&(s.y=Math.floor(d/B.y),r.y=s.y*B.y,N.mapSize.y=s.y)),N.map===null||Q===!0||I===!0){const te=this.type!==gi?{minFilter:Ht,magFilter:Ht}:{};N.map!==null&&N.map.dispose(),N.map=new Jn(r.x,r.y,te),N.map.texture.name=W.name+".shadowMap",N.camera.updateProjectionMatrix()}t.setRenderTarget(N.map),t.clear();const F=N.getViewportCount();for(let te=0;te<F;te++){const ae=N.getViewport(te);a.set(s.x*ae.x,s.y*ae.y,s.x*ae.z,s.y*ae.w),K.viewport(a),N.updateMatrices(W,te),i=N.getFrustum(),E(w,D,N.camera,W,this.type)}N.isPointLightShadow!==!0&&this.type===gi&&v(N,D),N.needsUpdate=!1}u=this.type,p.needsUpdate=!1,t.setRenderTarget($,S,C)};function v(A,w){const D=e.update(M);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,m.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Jn(r.x,r.y)),f.uniforms.shadow_pass.value=A.map.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,t.setRenderTarget(A.mapPass),t.clear(),t.renderBufferDirect(w,null,D,f,M,null),m.uniforms.shadow_pass.value=A.mapPass.texture,m.uniforms.resolution.value=A.mapSize,m.uniforms.radius.value=A.radius,t.setRenderTarget(A.map),t.clear(),t.renderBufferDirect(w,null,D,m,M,null)}function x(A,w,D,$){let S=null;const C=D.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(C!==void 0)S=C;else if(S=D.isPointLight===!0?l:o,t.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const K=S.uuid,Q=w.uuid;let I=c[K];I===void 0&&(I={},c[K]=I);let q=I[Q];q===void 0&&(q=S.clone(),I[Q]=q,w.addEventListener("dispose",P)),S=q}if(S.visible=w.visible,S.wireframe=w.wireframe,$===gi?S.side=w.shadowSide!==null?w.shadowSide:w.side:S.side=w.shadowSide!==null?w.shadowSide:h[w.side],S.alphaMap=w.alphaMap,S.alphaTest=w.alphaTest,S.map=w.map,S.clipShadows=w.clipShadows,S.clippingPlanes=w.clippingPlanes,S.clipIntersection=w.clipIntersection,S.displacementMap=w.displacementMap,S.displacementScale=w.displacementScale,S.displacementBias=w.displacementBias,S.wireframeLinewidth=w.wireframeLinewidth,S.linewidth=w.linewidth,D.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const K=t.properties.get(S);K.light=D}return S}function E(A,w,D,$,S){if(A.visible===!1)return;if(A.layers.test(w.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&S===gi)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,A.matrixWorld);const Q=e.update(A),I=A.material;if(Array.isArray(I)){const q=Q.groups;for(let z=0,W=q.length;z<W;z++){const N=q[z],B=I[N.materialIndex];if(B&&B.visible){const F=x(A,B,$,S);A.onBeforeShadow(t,A,w,D,Q,F,N),t.renderBufferDirect(D,null,Q,F,A,N),A.onAfterShadow(t,A,w,D,Q,F,N)}}}else if(I.visible){const q=x(A,I,$,S);A.onBeforeShadow(t,A,w,D,Q,q,null),t.renderBufferDirect(D,null,Q,q,A,null),A.onAfterShadow(t,A,w,D,Q,q,null)}}const K=A.children;for(let Q=0,I=K.length;Q<I;Q++)E(K[Q],w,D,$,S)}function P(A){A.target.removeEventListener("dispose",P);for(const D in c){const $=c[D],S=A.target.uuid;S in $&&($[S].dispose(),delete $[S])}}}function XT(t,e,n){const i=n.isWebGL2;function r(){let L=!1;const ce=new St;let G=null;const se=new St(0,0,0,0);return{setMask:function(xe){G!==xe&&!L&&(t.colorMask(xe,xe,xe,xe),G=xe)},setLocked:function(xe){L=xe},setClear:function(xe,We,st,rt,pt){pt===!0&&(xe*=rt,We*=rt,st*=rt),ce.set(xe,We,st,rt),se.equals(ce)===!1&&(t.clearColor(xe,We,st,rt),se.copy(ce))},reset:function(){L=!1,G=null,se.set(-1,0,0,0)}}}function s(){let L=!1,ce=null,G=null,se=null;return{setTest:function(xe){xe?fe(t.DEPTH_TEST):He(t.DEPTH_TEST)},setMask:function(xe){ce!==xe&&!L&&(t.depthMask(xe),ce=xe)},setFunc:function(xe){if(G!==xe){switch(xe){case nS:t.depthFunc(t.NEVER);break;case iS:t.depthFunc(t.ALWAYS);break;case rS:t.depthFunc(t.LESS);break;case Vl:t.depthFunc(t.LEQUAL);break;case sS:t.depthFunc(t.EQUAL);break;case aS:t.depthFunc(t.GEQUAL);break;case oS:t.depthFunc(t.GREATER);break;case lS:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}G=xe}},setLocked:function(xe){L=xe},setClear:function(xe){se!==xe&&(t.clearDepth(xe),se=xe)},reset:function(){L=!1,ce=null,G=null,se=null}}}function a(){let L=!1,ce=null,G=null,se=null,xe=null,We=null,st=null,rt=null,pt=null;return{setTest:function(et){L||(et?fe(t.STENCIL_TEST):He(t.STENCIL_TEST))},setMask:function(et){ce!==et&&!L&&(t.stencilMask(et),ce=et)},setFunc:function(et,dt,At){(G!==et||se!==dt||xe!==At)&&(t.stencilFunc(et,dt,At),G=et,se=dt,xe=At)},setOp:function(et,dt,At){(We!==et||st!==dt||rt!==At)&&(t.stencilOp(et,dt,At),We=et,st=dt,rt=At)},setLocked:function(et){L=et},setClear:function(et){pt!==et&&(t.clearStencil(et),pt=et)},reset:function(){L=!1,ce=null,G=null,se=null,xe=null,We=null,st=null,rt=null,pt=null}}}const o=new r,l=new s,c=new a,d=new WeakMap,h=new WeakMap;let f={},m={},_=new WeakMap,M=[],p=null,u=!1,v=null,x=null,E=null,P=null,A=null,w=null,D=null,$=new $e(0,0,0),S=0,C=!1,K=null,Q=null,I=null,q=null,z=null;const W=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let N=!1,B=0;const F=t.getParameter(t.VERSION);F.indexOf("WebGL")!==-1?(B=parseFloat(/^WebGL (\d)/.exec(F)[1]),N=B>=1):F.indexOf("OpenGL ES")!==-1&&(B=parseFloat(/^OpenGL ES (\d)/.exec(F)[1]),N=B>=2);let te=null,ae={};const Ae=t.getParameter(t.SCISSOR_BOX),O=t.getParameter(t.VIEWPORT),J=new St().fromArray(Ae),re=new St().fromArray(O);function de(L,ce,G,se){const xe=new Uint8Array(4),We=t.createTexture();t.bindTexture(L,We),t.texParameteri(L,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(L,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let st=0;st<G;st++)i&&(L===t.TEXTURE_3D||L===t.TEXTURE_2D_ARRAY)?t.texImage3D(ce,0,t.RGBA,1,1,se,0,t.RGBA,t.UNSIGNED_BYTE,xe):t.texImage2D(ce+st,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,xe);return We}const ye={};ye[t.TEXTURE_2D]=de(t.TEXTURE_2D,t.TEXTURE_2D,1),ye[t.TEXTURE_CUBE_MAP]=de(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(ye[t.TEXTURE_2D_ARRAY]=de(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),ye[t.TEXTURE_3D]=de(t.TEXTURE_3D,t.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),fe(t.DEPTH_TEST),l.setFunc(Vl),Ue(!1),Ge(cp),fe(t.CULL_FACE),Re(Ei);function fe(L){f[L]!==!0&&(t.enable(L),f[L]=!0)}function He(L){f[L]!==!1&&(t.disable(L),f[L]=!1)}function Se(L,ce){return m[L]!==ce?(t.bindFramebuffer(L,ce),m[L]=ce,i&&(L===t.DRAW_FRAMEBUFFER&&(m[t.FRAMEBUFFER]=ce),L===t.FRAMEBUFFER&&(m[t.DRAW_FRAMEBUFFER]=ce)),!0):!1}function k(L,ce){let G=M,se=!1;if(L){G=_.get(ce),G===void 0&&(G=[],_.set(ce,G));const xe=L.textures;if(G.length!==xe.length||G[0]!==t.COLOR_ATTACHMENT0){for(let We=0,st=xe.length;We<st;We++)G[We]=t.COLOR_ATTACHMENT0+We;G.length=xe.length,se=!0}}else G[0]!==t.BACK&&(G[0]=t.BACK,se=!0);if(se)if(n.isWebGL2)t.drawBuffers(G);else if(e.has("WEBGL_draw_buffers")===!0)e.get("WEBGL_draw_buffers").drawBuffersWEBGL(G);else throw new Error("THREE.WebGLState: Usage of gl.drawBuffers() require WebGL2 or WEBGL_draw_buffers extension")}function ct(L){return p!==L?(t.useProgram(L),p=L,!0):!1}const Me={[Er]:t.FUNC_ADD,[Hy]:t.FUNC_SUBTRACT,[Gy]:t.FUNC_REVERSE_SUBTRACT};if(i)Me[fp]=t.MIN,Me[hp]=t.MAX;else{const L=e.get("EXT_blend_minmax");L!==null&&(Me[fp]=L.MIN_EXT,Me[hp]=L.MAX_EXT)}const Ie={[Vy]:t.ZERO,[jy]:t.ONE,[Wy]:t.SRC_COLOR,[Ad]:t.SRC_ALPHA,[Zy]:t.SRC_ALPHA_SATURATE,[qy]:t.DST_COLOR,[Yy]:t.DST_ALPHA,[Xy]:t.ONE_MINUS_SRC_COLOR,[Cd]:t.ONE_MINUS_SRC_ALPHA,[Ky]:t.ONE_MINUS_DST_COLOR,[$y]:t.ONE_MINUS_DST_ALPHA,[Qy]:t.CONSTANT_COLOR,[Jy]:t.ONE_MINUS_CONSTANT_COLOR,[eS]:t.CONSTANT_ALPHA,[tS]:t.ONE_MINUS_CONSTANT_ALPHA};function Re(L,ce,G,se,xe,We,st,rt,pt,et){if(L===Ei){u===!0&&(He(t.BLEND),u=!1);return}if(u===!1&&(fe(t.BLEND),u=!0),L!==By){if(L!==v||et!==C){if((x!==Er||A!==Er)&&(t.blendEquation(t.FUNC_ADD),x=Er,A=Er),et)switch(L){case Fs:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case bd:t.blendFunc(t.ONE,t.ONE);break;case up:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case dp:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case Fs:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case bd:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case up:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case dp:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}E=null,P=null,w=null,D=null,$.set(0,0,0),S=0,v=L,C=et}return}xe=xe||ce,We=We||G,st=st||se,(ce!==x||xe!==A)&&(t.blendEquationSeparate(Me[ce],Me[xe]),x=ce,A=xe),(G!==E||se!==P||We!==w||st!==D)&&(t.blendFuncSeparate(Ie[G],Ie[se],Ie[We],Ie[st]),E=G,P=se,w=We,D=st),(rt.equals($)===!1||pt!==S)&&(t.blendColor(rt.r,rt.g,rt.b,pt),$.copy(rt),S=pt),v=L,C=!1}function Ye(L,ce){L.side===Xn?He(t.CULL_FACE):fe(t.CULL_FACE);let G=L.side===mn;ce&&(G=!G),Ue(G),L.blending===Fs&&L.transparent===!1?Re(Ei):Re(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),l.setFunc(L.depthFunc),l.setTest(L.depthTest),l.setMask(L.depthWrite),o.setMask(L.colorWrite);const se=L.stencilWrite;c.setTest(se),se&&(c.setMask(L.stencilWriteMask),c.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),c.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),b(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?fe(t.SAMPLE_ALPHA_TO_COVERAGE):He(t.SAMPLE_ALPHA_TO_COVERAGE)}function Ue(L){K!==L&&(L?t.frontFace(t.CW):t.frontFace(t.CCW),K=L)}function Ge(L){L!==Fy?(fe(t.CULL_FACE),L!==Q&&(L===cp?t.cullFace(t.BACK):L===zy?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):He(t.CULL_FACE),Q=L}function at(L){L!==I&&(N&&t.lineWidth(L),I=L)}function b(L,ce,G){L?(fe(t.POLYGON_OFFSET_FILL),(q!==ce||z!==G)&&(t.polygonOffset(ce,G),q=ce,z=G)):He(t.POLYGON_OFFSET_FILL)}function y(L){L?fe(t.SCISSOR_TEST):He(t.SCISSOR_TEST)}function j(L){L===void 0&&(L=t.TEXTURE0+W-1),te!==L&&(t.activeTexture(L),te=L)}function Z(L,ce,G){G===void 0&&(te===null?G=t.TEXTURE0+W-1:G=te);let se=ae[G];se===void 0&&(se={type:void 0,texture:void 0},ae[G]=se),(se.type!==L||se.texture!==ce)&&(te!==G&&(t.activeTexture(G),te=G),t.bindTexture(L,ce||ye[L]),se.type=L,se.texture=ce)}function ie(){const L=ae[te];L!==void 0&&L.type!==void 0&&(t.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function ne(){try{t.compressedTexImage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Oe(){try{t.compressedTexImage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ne(){try{t.texSubImage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function oe(){try{t.texSubImage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function he(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Pe(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ue(){try{t.texStorage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ut(){try{t.texStorage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function je(){try{t.texImage2D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ve(){try{t.texImage3D.apply(t,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ge(L){J.equals(L)===!1&&(t.scissor(L.x,L.y,L.z,L.w),J.copy(L))}function be(L){re.equals(L)===!1&&(t.viewport(L.x,L.y,L.z,L.w),re.copy(L))}function R(L,ce){let G=h.get(ce);G===void 0&&(G=new WeakMap,h.set(ce,G));let se=G.get(L);se===void 0&&(se=t.getUniformBlockIndex(ce,L.name),G.set(L,se))}function ee(L,ce){const se=h.get(ce).get(L);d.get(ce)!==se&&(t.uniformBlockBinding(ce,se,L.__bindingPointIndex),d.set(ce,se))}function Ee(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),i===!0&&(t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null)),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),f={},te=null,ae={},m={},_=new WeakMap,M=[],p=null,u=!1,v=null,x=null,E=null,P=null,A=null,w=null,D=null,$=new $e(0,0,0),S=0,C=!1,K=null,Q=null,I=null,q=null,z=null,J.set(0,0,t.canvas.width,t.canvas.height),re.set(0,0,t.canvas.width,t.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:fe,disable:He,bindFramebuffer:Se,drawBuffers:k,useProgram:ct,setBlending:Re,setMaterial:Ye,setFlipSided:Ue,setCullFace:Ge,setLineWidth:at,setPolygonOffset:b,setScissorTest:y,activeTexture:j,bindTexture:Z,unbindTexture:ie,compressedTexImage2D:ne,compressedTexImage3D:Oe,texImage2D:je,texImage3D:ve,updateUBOMapping:R,uniformBlockBinding:ee,texStorage2D:ue,texStorage3D:ut,texSubImage2D:Ne,texSubImage3D:oe,compressedTexSubImage2D:he,compressedTexSubImage3D:Pe,scissor:ge,viewport:be,reset:Ee}}function YT(t,e,n,i,r,s,a){const o=r.isWebGL2,l=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),d=new we,h=new WeakMap;let f;const m=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(b,y){return _?new OffscreenCanvas(b,y):ql("canvas")}function p(b,y,j,Z){let ie=1;const ne=at(b);if((ne.width>Z||ne.height>Z)&&(ie=Z/Math.max(ne.width,ne.height)),ie<1||y===!0)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const Oe=y?$l:Math.floor,Ne=Oe(ie*ne.width),oe=Oe(ie*ne.height);f===void 0&&(f=M(Ne,oe));const he=j?M(Ne,oe):f;return he.width=Ne,he.height=oe,he.getContext("2d").drawImage(b,0,0,Ne,oe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ne.width+"x"+ne.height+") to ("+Ne+"x"+oe+")."),he}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ne.width+"x"+ne.height+")."),b;return b}function u(b){const y=at(b);return Ud(y.width)&&Ud(y.height)}function v(b){return o?!1:b.wrapS!==Yn||b.wrapT!==Yn||b.minFilter!==Ht&&b.minFilter!==ln}function x(b,y){return b.generateMipmaps&&y&&b.minFilter!==Ht&&b.minFilter!==ln}function E(b){t.generateMipmap(b)}function P(b,y,j,Z,ie=!1){if(o===!1)return y;if(b!==null){if(t[b]!==void 0)return t[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let ne=y;if(y===t.RED&&(j===t.FLOAT&&(ne=t.R32F),j===t.HALF_FLOAT&&(ne=t.R16F),j===t.UNSIGNED_BYTE&&(ne=t.R8)),y===t.RED_INTEGER&&(j===t.UNSIGNED_BYTE&&(ne=t.R8UI),j===t.UNSIGNED_SHORT&&(ne=t.R16UI),j===t.UNSIGNED_INT&&(ne=t.R32UI),j===t.BYTE&&(ne=t.R8I),j===t.SHORT&&(ne=t.R16I),j===t.INT&&(ne=t.R32I)),y===t.RG&&(j===t.FLOAT&&(ne=t.RG32F),j===t.HALF_FLOAT&&(ne=t.RG16F),j===t.UNSIGNED_BYTE&&(ne=t.RG8)),y===t.RG_INTEGER&&(j===t.UNSIGNED_BYTE&&(ne=t.RG8UI),j===t.UNSIGNED_SHORT&&(ne=t.RG16UI),j===t.UNSIGNED_INT&&(ne=t.RG32UI),j===t.BYTE&&(ne=t.RG8I),j===t.SHORT&&(ne=t.RG16I),j===t.INT&&(ne=t.RG32I)),y===t.RGBA){const Oe=ie?jl:ft.getTransfer(Z);j===t.FLOAT&&(ne=t.RGBA32F),j===t.HALF_FLOAT&&(ne=t.RGBA16F),j===t.UNSIGNED_BYTE&&(ne=Oe===xt?t.SRGB8_ALPHA8:t.RGBA8),j===t.UNSIGNED_SHORT_4_4_4_4&&(ne=t.RGBA4),j===t.UNSIGNED_SHORT_5_5_5_1&&(ne=t.RGB5_A1)}return(ne===t.R16F||ne===t.R32F||ne===t.RG16F||ne===t.RG32F||ne===t.RGBA16F||ne===t.RGBA32F)&&e.get("EXT_color_buffer_float"),ne}function A(b,y,j){return x(b,j)===!0||b.isFramebufferTexture&&b.minFilter!==Ht&&b.minFilter!==ln?Math.log2(Math.max(y.width,y.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?y.mipmaps.length:1}function w(b){return b===Ht||b===pp||b===ma?t.NEAREST:t.LINEAR}function D(b){const y=b.target;y.removeEventListener("dispose",D),S(y),y.isVideoTexture&&h.delete(y)}function $(b){const y=b.target;y.removeEventListener("dispose",$),K(y)}function S(b){const y=i.get(b);if(y.__webglInit===void 0)return;const j=b.source,Z=m.get(j);if(Z){const ie=Z[y.__cacheKey];ie.usedTimes--,ie.usedTimes===0&&C(b),Object.keys(Z).length===0&&m.delete(j)}i.remove(b)}function C(b){const y=i.get(b);t.deleteTexture(y.__webglTexture);const j=b.source,Z=m.get(j);delete Z[y.__cacheKey],a.memory.textures--}function K(b){const y=i.get(b);if(b.depthTexture&&b.depthTexture.dispose(),b.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(y.__webglFramebuffer[Z]))for(let ie=0;ie<y.__webglFramebuffer[Z].length;ie++)t.deleteFramebuffer(y.__webglFramebuffer[Z][ie]);else t.deleteFramebuffer(y.__webglFramebuffer[Z]);y.__webglDepthbuffer&&t.deleteRenderbuffer(y.__webglDepthbuffer[Z])}else{if(Array.isArray(y.__webglFramebuffer))for(let Z=0;Z<y.__webglFramebuffer.length;Z++)t.deleteFramebuffer(y.__webglFramebuffer[Z]);else t.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&t.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&t.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let Z=0;Z<y.__webglColorRenderbuffer.length;Z++)y.__webglColorRenderbuffer[Z]&&t.deleteRenderbuffer(y.__webglColorRenderbuffer[Z]);y.__webglDepthRenderbuffer&&t.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const j=b.textures;for(let Z=0,ie=j.length;Z<ie;Z++){const ne=i.get(j[Z]);ne.__webglTexture&&(t.deleteTexture(ne.__webglTexture),a.memory.textures--),i.remove(j[Z])}i.remove(b)}let Q=0;function I(){Q=0}function q(){const b=Q;return b>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+r.maxTextures),Q+=1,b}function z(b){const y=[];return y.push(b.wrapS),y.push(b.wrapT),y.push(b.wrapR||0),y.push(b.magFilter),y.push(b.minFilter),y.push(b.anisotropy),y.push(b.internalFormat),y.push(b.format),y.push(b.type),y.push(b.generateMipmaps),y.push(b.premultiplyAlpha),y.push(b.flipY),y.push(b.unpackAlignment),y.push(b.colorSpace),y.join()}function W(b,y){const j=i.get(b);if(b.isVideoTexture&&Ue(b),b.isRenderTargetTexture===!1&&b.version>0&&j.__version!==b.version){const Z=b.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{re(j,b,y);return}}n.bindTexture(t.TEXTURE_2D,j.__webglTexture,t.TEXTURE0+y)}function N(b,y){const j=i.get(b);if(b.version>0&&j.__version!==b.version){re(j,b,y);return}n.bindTexture(t.TEXTURE_2D_ARRAY,j.__webglTexture,t.TEXTURE0+y)}function B(b,y){const j=i.get(b);if(b.version>0&&j.__version!==b.version){re(j,b,y);return}n.bindTexture(t.TEXTURE_3D,j.__webglTexture,t.TEXTURE0+y)}function F(b,y){const j=i.get(b);if(b.version>0&&j.__version!==b.version){de(j,b,y);return}n.bindTexture(t.TEXTURE_CUBE_MAP,j.__webglTexture,t.TEXTURE0+y)}const te={[Nd]:t.REPEAT,[Yn]:t.CLAMP_TO_EDGE,[Ld]:t.MIRRORED_REPEAT},ae={[Ht]:t.NEAREST,[pp]:t.NEAREST_MIPMAP_NEAREST,[ma]:t.NEAREST_MIPMAP_LINEAR,[ln]:t.LINEAR,[$c]:t.LINEAR_MIPMAP_NEAREST,[Cr]:t.LINEAR_MIPMAP_LINEAR},Ae={[AS]:t.NEVER,[DS]:t.ALWAYS,[CS]:t.LESS,[Sx]:t.LEQUAL,[RS]:t.EQUAL,[LS]:t.GEQUAL,[PS]:t.GREATER,[NS]:t.NOTEQUAL};function O(b,y,j){if(y.type===ai&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===ln||y.magFilter===$c||y.magFilter===ma||y.magFilter===Cr||y.minFilter===ln||y.minFilter===$c||y.minFilter===ma||y.minFilter===Cr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),j?(t.texParameteri(b,t.TEXTURE_WRAP_S,te[y.wrapS]),t.texParameteri(b,t.TEXTURE_WRAP_T,te[y.wrapT]),(b===t.TEXTURE_3D||b===t.TEXTURE_2D_ARRAY)&&t.texParameteri(b,t.TEXTURE_WRAP_R,te[y.wrapR]),t.texParameteri(b,t.TEXTURE_MAG_FILTER,ae[y.magFilter]),t.texParameteri(b,t.TEXTURE_MIN_FILTER,ae[y.minFilter])):(t.texParameteri(b,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(b,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),(b===t.TEXTURE_3D||b===t.TEXTURE_2D_ARRAY)&&t.texParameteri(b,t.TEXTURE_WRAP_R,t.CLAMP_TO_EDGE),(y.wrapS!==Yn||y.wrapT!==Yn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),t.texParameteri(b,t.TEXTURE_MAG_FILTER,w(y.magFilter)),t.texParameteri(b,t.TEXTURE_MIN_FILTER,w(y.minFilter)),y.minFilter!==Ht&&y.minFilter!==ln&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),y.compareFunction&&(t.texParameteri(b,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(b,t.TEXTURE_COMPARE_FUNC,Ae[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===Ht||y.minFilter!==ma&&y.minFilter!==Cr||y.type===ai&&e.has("OES_texture_float_linear")===!1||o===!1&&y.type===Ti&&e.has("OES_texture_half_float_linear")===!1)return;if(y.anisotropy>1||i.get(y).__currentAnisotropy){const Z=e.get("EXT_texture_filter_anisotropic");t.texParameterf(b,Z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,r.getMaxAnisotropy())),i.get(y).__currentAnisotropy=y.anisotropy}}}function J(b,y){let j=!1;b.__webglInit===void 0&&(b.__webglInit=!0,y.addEventListener("dispose",D));const Z=y.source;let ie=m.get(Z);ie===void 0&&(ie={},m.set(Z,ie));const ne=z(y);if(ne!==b.__cacheKey){ie[ne]===void 0&&(ie[ne]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,j=!0),ie[ne].usedTimes++;const Oe=ie[b.__cacheKey];Oe!==void 0&&(ie[b.__cacheKey].usedTimes--,Oe.usedTimes===0&&C(y)),b.__cacheKey=ne,b.__webglTexture=ie[ne].texture}return j}function re(b,y,j){let Z=t.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(Z=t.TEXTURE_2D_ARRAY),y.isData3DTexture&&(Z=t.TEXTURE_3D);const ie=J(b,y),ne=y.source;n.bindTexture(Z,b.__webglTexture,t.TEXTURE0+j);const Oe=i.get(ne);if(ne.version!==Oe.__version||ie===!0){n.activeTexture(t.TEXTURE0+j);const Ne=ft.getPrimaries(ft.workingColorSpace),oe=y.colorSpace===Xi?null:ft.getPrimaries(y.colorSpace),he=y.colorSpace===Xi||Ne===oe?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,y.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,y.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,he);const Pe=v(y)&&u(y.image)===!1;let ue=p(y.image,Pe,!1,r.maxTextureSize);ue=Ge(y,ue);const ut=u(ue)||o,je=s.convert(y.format,y.colorSpace);let ve=s.convert(y.type),ge=P(y.internalFormat,je,ve,y.colorSpace,y.isVideoTexture);O(Z,y,ut);let be;const R=y.mipmaps,ee=o&&y.isVideoTexture!==!0&&ge!==_x,Ee=Oe.__version===void 0||ie===!0,L=ne.dataReady,ce=A(y,ue,ut);if(y.isDepthTexture)ge=t.DEPTH_COMPONENT,o?y.type===ai?ge=t.DEPTH_COMPONENT32F:y.type===qi?ge=t.DEPTH_COMPONENT24:y.type===Lr?ge=t.DEPTH24_STENCIL8:ge=t.DEPTH_COMPONENT16:y.type===ai&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),y.format===Dr&&ge===t.DEPTH_COMPONENT&&y.type!==kf&&y.type!==qi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),y.type=qi,ve=s.convert(y.type)),y.format===qs&&ge===t.DEPTH_COMPONENT&&(ge=t.DEPTH_STENCIL,y.type!==Lr&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),y.type=Lr,ve=s.convert(y.type))),Ee&&(ee?n.texStorage2D(t.TEXTURE_2D,1,ge,ue.width,ue.height):n.texImage2D(t.TEXTURE_2D,0,ge,ue.width,ue.height,0,je,ve,null));else if(y.isDataTexture)if(R.length>0&&ut){ee&&Ee&&n.texStorage2D(t.TEXTURE_2D,ce,ge,R[0].width,R[0].height);for(let G=0,se=R.length;G<se;G++)be=R[G],ee?L&&n.texSubImage2D(t.TEXTURE_2D,G,0,0,be.width,be.height,je,ve,be.data):n.texImage2D(t.TEXTURE_2D,G,ge,be.width,be.height,0,je,ve,be.data);y.generateMipmaps=!1}else ee?(Ee&&n.texStorage2D(t.TEXTURE_2D,ce,ge,ue.width,ue.height),L&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ue.width,ue.height,je,ve,ue.data)):n.texImage2D(t.TEXTURE_2D,0,ge,ue.width,ue.height,0,je,ve,ue.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){ee&&Ee&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ce,ge,R[0].width,R[0].height,ue.depth);for(let G=0,se=R.length;G<se;G++)be=R[G],y.format!==$n?je!==null?ee?L&&n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,G,0,0,0,be.width,be.height,ue.depth,je,be.data,0,0):n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,G,ge,be.width,be.height,ue.depth,0,be.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ee?L&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,G,0,0,0,be.width,be.height,ue.depth,je,ve,be.data):n.texImage3D(t.TEXTURE_2D_ARRAY,G,ge,be.width,be.height,ue.depth,0,je,ve,be.data)}else{ee&&Ee&&n.texStorage2D(t.TEXTURE_2D,ce,ge,R[0].width,R[0].height);for(let G=0,se=R.length;G<se;G++)be=R[G],y.format!==$n?je!==null?ee?L&&n.compressedTexSubImage2D(t.TEXTURE_2D,G,0,0,be.width,be.height,je,be.data):n.compressedTexImage2D(t.TEXTURE_2D,G,ge,be.width,be.height,0,be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ee?L&&n.texSubImage2D(t.TEXTURE_2D,G,0,0,be.width,be.height,je,ve,be.data):n.texImage2D(t.TEXTURE_2D,G,ge,be.width,be.height,0,je,ve,be.data)}else if(y.isDataArrayTexture)ee?(Ee&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ce,ge,ue.width,ue.height,ue.depth),L&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ue.width,ue.height,ue.depth,je,ve,ue.data)):n.texImage3D(t.TEXTURE_2D_ARRAY,0,ge,ue.width,ue.height,ue.depth,0,je,ve,ue.data);else if(y.isData3DTexture)ee?(Ee&&n.texStorage3D(t.TEXTURE_3D,ce,ge,ue.width,ue.height,ue.depth),L&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ue.width,ue.height,ue.depth,je,ve,ue.data)):n.texImage3D(t.TEXTURE_3D,0,ge,ue.width,ue.height,ue.depth,0,je,ve,ue.data);else if(y.isFramebufferTexture){if(Ee)if(ee)n.texStorage2D(t.TEXTURE_2D,ce,ge,ue.width,ue.height);else{let G=ue.width,se=ue.height;for(let xe=0;xe<ce;xe++)n.texImage2D(t.TEXTURE_2D,xe,ge,G,se,0,je,ve,null),G>>=1,se>>=1}}else if(R.length>0&&ut){if(ee&&Ee){const G=at(R[0]);n.texStorage2D(t.TEXTURE_2D,ce,ge,G.width,G.height)}for(let G=0,se=R.length;G<se;G++)be=R[G],ee?L&&n.texSubImage2D(t.TEXTURE_2D,G,0,0,je,ve,be):n.texImage2D(t.TEXTURE_2D,G,ge,je,ve,be);y.generateMipmaps=!1}else if(ee){if(Ee){const G=at(ue);n.texStorage2D(t.TEXTURE_2D,ce,ge,G.width,G.height)}L&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,je,ve,ue)}else n.texImage2D(t.TEXTURE_2D,0,ge,je,ve,ue);x(y,ut)&&E(Z),Oe.__version=ne.version,y.onUpdate&&y.onUpdate(y)}b.__version=y.version}function de(b,y,j){if(y.image.length!==6)return;const Z=J(b,y),ie=y.source;n.bindTexture(t.TEXTURE_CUBE_MAP,b.__webglTexture,t.TEXTURE0+j);const ne=i.get(ie);if(ie.version!==ne.__version||Z===!0){n.activeTexture(t.TEXTURE0+j);const Oe=ft.getPrimaries(ft.workingColorSpace),Ne=y.colorSpace===Xi?null:ft.getPrimaries(y.colorSpace),oe=y.colorSpace===Xi||Oe===Ne?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,y.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,y.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,oe);const he=y.isCompressedTexture||y.image[0].isCompressedTexture,Pe=y.image[0]&&y.image[0].isDataTexture,ue=[];for(let G=0;G<6;G++)!he&&!Pe?ue[G]=p(y.image[G],!1,!0,r.maxCubemapSize):ue[G]=Pe?y.image[G].image:y.image[G],ue[G]=Ge(y,ue[G]);const ut=ue[0],je=u(ut)||o,ve=s.convert(y.format,y.colorSpace),ge=s.convert(y.type),be=P(y.internalFormat,ve,ge,y.colorSpace),R=o&&y.isVideoTexture!==!0,ee=ne.__version===void 0||Z===!0,Ee=ie.dataReady;let L=A(y,ut,je);O(t.TEXTURE_CUBE_MAP,y,je);let ce;if(he){R&&ee&&n.texStorage2D(t.TEXTURE_CUBE_MAP,L,be,ut.width,ut.height);for(let G=0;G<6;G++){ce=ue[G].mipmaps;for(let se=0;se<ce.length;se++){const xe=ce[se];y.format!==$n?ve!==null?R?Ee&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+G,se,0,0,xe.width,xe.height,ve,xe.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+G,se,be,xe.width,xe.height,0,xe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):R?Ee&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+G,se,0,0,xe.width,xe.height,ve,ge,xe.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+G,se,be,xe.width,xe.height,0,ve,ge,xe.data)}}}else{if(ce=y.mipmaps,R&&ee){ce.length>0&&L++;const G=at(ue[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,L,be,G.width,G.height)}for(let G=0;G<6;G++)if(Pe){R?Ee&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+G,0,0,0,ue[G].width,ue[G].height,ve,ge,ue[G].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+G,0,be,ue[G].width,ue[G].height,0,ve,ge,ue[G].data);for(let se=0;se<ce.length;se++){const We=ce[se].image[G].image;R?Ee&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+G,se+1,0,0,We.width,We.height,ve,ge,We.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+G,se+1,be,We.width,We.height,0,ve,ge,We.data)}}else{R?Ee&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+G,0,0,0,ve,ge,ue[G]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+G,0,be,ve,ge,ue[G]);for(let se=0;se<ce.length;se++){const xe=ce[se];R?Ee&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+G,se+1,0,0,ve,ge,xe.image[G]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+G,se+1,be,ve,ge,xe.image[G])}}}x(y,je)&&E(t.TEXTURE_CUBE_MAP),ne.__version=ie.version,y.onUpdate&&y.onUpdate(y)}b.__version=y.version}function ye(b,y,j,Z,ie,ne){const Oe=s.convert(j.format,j.colorSpace),Ne=s.convert(j.type),oe=P(j.internalFormat,Oe,Ne,j.colorSpace);if(!i.get(y).__hasExternalTextures){const Pe=Math.max(1,y.width>>ne),ue=Math.max(1,y.height>>ne);ie===t.TEXTURE_3D||ie===t.TEXTURE_2D_ARRAY?n.texImage3D(ie,ne,oe,Pe,ue,y.depth,0,Oe,Ne,null):n.texImage2D(ie,ne,oe,Pe,ue,0,Oe,Ne,null)}n.bindFramebuffer(t.FRAMEBUFFER,b),Ye(y)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Z,ie,i.get(j).__webglTexture,0,Re(y)):(ie===t.TEXTURE_2D||ie>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&ie<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,Z,ie,i.get(j).__webglTexture,ne),n.bindFramebuffer(t.FRAMEBUFFER,null)}function fe(b,y,j){if(t.bindRenderbuffer(t.RENDERBUFFER,b),y.depthBuffer&&!y.stencilBuffer){let Z=o===!0?t.DEPTH_COMPONENT24:t.DEPTH_COMPONENT16;if(j||Ye(y)){const ie=y.depthTexture;ie&&ie.isDepthTexture&&(ie.type===ai?Z=t.DEPTH_COMPONENT32F:ie.type===qi&&(Z=t.DEPTH_COMPONENT24));const ne=Re(y);Ye(y)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ne,Z,y.width,y.height):t.renderbufferStorageMultisample(t.RENDERBUFFER,ne,Z,y.width,y.height)}else t.renderbufferStorage(t.RENDERBUFFER,Z,y.width,y.height);t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,b)}else if(y.depthBuffer&&y.stencilBuffer){const Z=Re(y);j&&Ye(y)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Z,t.DEPTH24_STENCIL8,y.width,y.height):Ye(y)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Z,t.DEPTH24_STENCIL8,y.width,y.height):t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_STENCIL,y.width,y.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.RENDERBUFFER,b)}else{const Z=y.textures;for(let ie=0;ie<Z.length;ie++){const ne=Z[ie],Oe=s.convert(ne.format,ne.colorSpace),Ne=s.convert(ne.type),oe=P(ne.internalFormat,Oe,Ne,ne.colorSpace),he=Re(y);j&&Ye(y)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,he,oe,y.width,y.height):Ye(y)?l.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,he,oe,y.width,y.height):t.renderbufferStorage(t.RENDERBUFFER,oe,y.width,y.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function He(b,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,b),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(y.depthTexture).__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),W(y.depthTexture,0);const Z=i.get(y.depthTexture).__webglTexture,ie=Re(y);if(y.depthTexture.format===Dr)Ye(y)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,Z,0,ie):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,Z,0);else if(y.depthTexture.format===qs)Ye(y)?l.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,Z,0,ie):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,Z,0);else throw new Error("Unknown depthTexture format")}function Se(b){const y=i.get(b),j=b.isWebGLCubeRenderTarget===!0;if(b.depthTexture&&!y.__autoAllocateDepthBuffer){if(j)throw new Error("target.depthTexture not supported in Cube render targets");He(y.__webglFramebuffer,b)}else if(j){y.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)n.bindFramebuffer(t.FRAMEBUFFER,y.__webglFramebuffer[Z]),y.__webglDepthbuffer[Z]=t.createRenderbuffer(),fe(y.__webglDepthbuffer[Z],b,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer=t.createRenderbuffer(),fe(y.__webglDepthbuffer,b,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function k(b,y,j){const Z=i.get(b);y!==void 0&&ye(Z.__webglFramebuffer,b,b.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),j!==void 0&&Se(b)}function ct(b){const y=b.texture,j=i.get(b),Z=i.get(y);b.addEventListener("dispose",$);const ie=b.textures,ne=b.isWebGLCubeRenderTarget===!0,Oe=ie.length>1,Ne=u(b)||o;if(Oe||(Z.__webglTexture===void 0&&(Z.__webglTexture=t.createTexture()),Z.__version=y.version,a.memory.textures++),ne){j.__webglFramebuffer=[];for(let oe=0;oe<6;oe++)if(o&&y.mipmaps&&y.mipmaps.length>0){j.__webglFramebuffer[oe]=[];for(let he=0;he<y.mipmaps.length;he++)j.__webglFramebuffer[oe][he]=t.createFramebuffer()}else j.__webglFramebuffer[oe]=t.createFramebuffer()}else{if(o&&y.mipmaps&&y.mipmaps.length>0){j.__webglFramebuffer=[];for(let oe=0;oe<y.mipmaps.length;oe++)j.__webglFramebuffer[oe]=t.createFramebuffer()}else j.__webglFramebuffer=t.createFramebuffer();if(Oe)if(r.drawBuffers)for(let oe=0,he=ie.length;oe<he;oe++){const Pe=i.get(ie[oe]);Pe.__webglTexture===void 0&&(Pe.__webglTexture=t.createTexture(),a.memory.textures++)}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&b.samples>0&&Ye(b)===!1){j.__webglMultisampledFramebuffer=t.createFramebuffer(),j.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,j.__webglMultisampledFramebuffer);for(let oe=0;oe<ie.length;oe++){const he=ie[oe];j.__webglColorRenderbuffer[oe]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,j.__webglColorRenderbuffer[oe]);const Pe=s.convert(he.format,he.colorSpace),ue=s.convert(he.type),ut=P(he.internalFormat,Pe,ue,he.colorSpace,b.isXRRenderTarget===!0),je=Re(b);t.renderbufferStorageMultisample(t.RENDERBUFFER,je,ut,b.width,b.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+oe,t.RENDERBUFFER,j.__webglColorRenderbuffer[oe])}t.bindRenderbuffer(t.RENDERBUFFER,null),b.depthBuffer&&(j.__webglDepthRenderbuffer=t.createRenderbuffer(),fe(j.__webglDepthRenderbuffer,b,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(ne){n.bindTexture(t.TEXTURE_CUBE_MAP,Z.__webglTexture),O(t.TEXTURE_CUBE_MAP,y,Ne);for(let oe=0;oe<6;oe++)if(o&&y.mipmaps&&y.mipmaps.length>0)for(let he=0;he<y.mipmaps.length;he++)ye(j.__webglFramebuffer[oe][he],b,y,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,he);else ye(j.__webglFramebuffer[oe],b,y,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0);x(y,Ne)&&E(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Oe){for(let oe=0,he=ie.length;oe<he;oe++){const Pe=ie[oe],ue=i.get(Pe);n.bindTexture(t.TEXTURE_2D,ue.__webglTexture),O(t.TEXTURE_2D,Pe,Ne),ye(j.__webglFramebuffer,b,Pe,t.COLOR_ATTACHMENT0+oe,t.TEXTURE_2D,0),x(Pe,Ne)&&E(t.TEXTURE_2D)}n.unbindTexture()}else{let oe=t.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(o?oe=b.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),n.bindTexture(oe,Z.__webglTexture),O(oe,y,Ne),o&&y.mipmaps&&y.mipmaps.length>0)for(let he=0;he<y.mipmaps.length;he++)ye(j.__webglFramebuffer[he],b,y,t.COLOR_ATTACHMENT0,oe,he);else ye(j.__webglFramebuffer,b,y,t.COLOR_ATTACHMENT0,oe,0);x(y,Ne)&&E(oe),n.unbindTexture()}b.depthBuffer&&Se(b)}function Me(b){const y=u(b)||o,j=b.textures;for(let Z=0,ie=j.length;Z<ie;Z++){const ne=j[Z];if(x(ne,y)){const Oe=b.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,Ne=i.get(ne).__webglTexture;n.bindTexture(Oe,Ne),E(Oe),n.unbindTexture()}}}function Ie(b){if(o&&b.samples>0&&Ye(b)===!1){const y=b.textures,j=b.width,Z=b.height;let ie=t.COLOR_BUFFER_BIT;const ne=[],Oe=b.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Ne=i.get(b),oe=y.length>1;if(oe)for(let he=0;he<y.length;he++)n.bindFramebuffer(t.FRAMEBUFFER,Ne.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+he,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Ne.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+he,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Ne.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ne.__webglFramebuffer);for(let he=0;he<y.length;he++){ne.push(t.COLOR_ATTACHMENT0+he),b.depthBuffer&&ne.push(Oe);const Pe=Ne.__ignoreDepthValues!==void 0?Ne.__ignoreDepthValues:!1;if(Pe===!1&&(b.depthBuffer&&(ie|=t.DEPTH_BUFFER_BIT),b.stencilBuffer&&(ie|=t.STENCIL_BUFFER_BIT)),oe&&t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Ne.__webglColorRenderbuffer[he]),Pe===!0&&(t.invalidateFramebuffer(t.READ_FRAMEBUFFER,[Oe]),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[Oe])),oe){const ue=i.get(y[he]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,ue,0)}t.blitFramebuffer(0,0,j,Z,0,0,j,Z,ie,t.NEAREST),c&&t.invalidateFramebuffer(t.READ_FRAMEBUFFER,ne)}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),oe)for(let he=0;he<y.length;he++){n.bindFramebuffer(t.FRAMEBUFFER,Ne.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+he,t.RENDERBUFFER,Ne.__webglColorRenderbuffer[he]);const Pe=i.get(y[he]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Ne.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+he,t.TEXTURE_2D,Pe,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ne.__webglMultisampledFramebuffer)}}function Re(b){return Math.min(r.maxSamples,b.samples)}function Ye(b){const y=i.get(b);return o&&b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function Ue(b){const y=a.render.frame;h.get(b)!==y&&(h.set(b,y),b.update())}function Ge(b,y){const j=b.colorSpace,Z=b.format,ie=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||b.format===Id||j!==dr&&j!==Xi&&(ft.getTransfer(j)===xt?o===!1?e.has("EXT_sRGB")===!0&&Z===$n?(b.format=Id,b.minFilter=ln,b.generateMipmaps=!1):y=wx.sRGBToLinear(y):(Z!==$n||ie!==rr)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",j)),y}function at(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(d.width=b.naturalWidth||b.width,d.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(d.width=b.displayWidth,d.height=b.displayHeight):(d.width=b.width,d.height=b.height),d}this.allocateTextureUnit=q,this.resetTextureUnits=I,this.setTexture2D=W,this.setTexture2DArray=N,this.setTexture3D=B,this.setTextureCube=F,this.rebindTextures=k,this.setupRenderTarget=ct,this.updateRenderTargetMipmap=Me,this.updateMultisampleRenderTarget=Ie,this.setupDepthRenderbuffer=Se,this.setupFrameBufferTexture=ye,this.useMultisampledRTT=Ye}function $T(t,e,n){const i=n.isWebGL2;function r(s,a=Xi){let o;const l=ft.getTransfer(a);if(s===rr)return t.UNSIGNED_BYTE;if(s===hx)return t.UNSIGNED_SHORT_4_4_4_4;if(s===px)return t.UNSIGNED_SHORT_5_5_5_1;if(s===xS)return t.BYTE;if(s===vS)return t.SHORT;if(s===kf)return t.UNSIGNED_SHORT;if(s===fx)return t.INT;if(s===qi)return t.UNSIGNED_INT;if(s===ai)return t.FLOAT;if(s===Ti)return i?t.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===_S)return t.ALPHA;if(s===$n)return t.RGBA;if(s===yS)return t.LUMINANCE;if(s===SS)return t.LUMINANCE_ALPHA;if(s===Dr)return t.DEPTH_COMPONENT;if(s===qs)return t.DEPTH_STENCIL;if(s===Id)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===mx)return t.RED;if(s===gx)return t.RED_INTEGER;if(s===MS)return t.RG;if(s===xx)return t.RG_INTEGER;if(s===vx)return t.RGBA_INTEGER;if(s===qc||s===Kc||s===Zc||s===Qc)if(l===xt)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===qc)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Kc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Zc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Qc)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===qc)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Kc)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Zc)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Qc)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===mp||s===gp||s===xp||s===vp)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===mp)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===gp)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===xp)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===vp)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===_x)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===_p||s===yp)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(s===_p)return l===xt?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===yp)return l===xt?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Sp||s===Mp||s===Ep||s===wp||s===Tp||s===bp||s===Ap||s===Cp||s===Rp||s===Pp||s===Np||s===Lp||s===Dp||s===Ip)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(s===Sp)return l===xt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Mp)return l===xt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Ep)return l===xt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===wp)return l===xt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Tp)return l===xt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===bp)return l===xt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Ap)return l===xt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Cp)return l===xt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Rp)return l===xt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Pp)return l===xt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Np)return l===xt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Lp)return l===xt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Dp)return l===xt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Ip)return l===xt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Jc||s===Up||s===Op)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(s===Jc)return l===xt?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Up)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Op)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===ES||s===kp||s===Fp||s===zp)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(s===Jc)return o.COMPRESSED_RED_RGTC1_EXT;if(s===kp)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Fp)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===zp)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Lr?i?t.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):t[s]!==void 0?t[s]:null}return{convert:r}}class qT extends _n{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Ns extends zt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const KT={type:"move"};class wu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ns,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ns,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ns,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const M of e.hand.values()){const p=n.getJointPose(M,i),u=this._getHandJoint(c,M);p!==null&&(u.matrix.fromArray(p.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=p.radius),u.visible=p!==null}const d=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=d.position.distanceTo(h.position),m=.02,_=.005;c.inputState.pinching&&f>m+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=m-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(KT)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Ns;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const ZT=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,QT=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepthEXT = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepthEXT = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class JT{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new Jt,s=e.properties.get(r);s.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}render(e,n){if(this.texture!==null){if(this.mesh===null){const i=n.cameras[0].viewport,r=new dn({extensions:{fragDepth:!0},vertexShader:ZT,fragmentShader:QT,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Rt(new xc(20,20),r)}e.render(this.mesh,n)}}reset(){this.texture=null,this.mesh=null}}class eb extends Gr{constructor(e,n){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,d=null,h=null,f=null,m=null,_=null;const M=new JT,p=n.getContextAttributes();let u=null,v=null;const x=[],E=[],P=new we;let A=null;const w=new _n;w.layers.enable(1),w.viewport=new St;const D=new _n;D.layers.enable(2),D.viewport=new St;const $=[w,D],S=new qT;S.layers.enable(1),S.layers.enable(2);let C=null,K=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(O){let J=x[O];return J===void 0&&(J=new wu,x[O]=J),J.getTargetRaySpace()},this.getControllerGrip=function(O){let J=x[O];return J===void 0&&(J=new wu,x[O]=J),J.getGripSpace()},this.getHand=function(O){let J=x[O];return J===void 0&&(J=new wu,x[O]=J),J.getHandSpace()};function Q(O){const J=E.indexOf(O.inputSource);if(J===-1)return;const re=x[J];re!==void 0&&(re.update(O.inputSource,O.frame,c||a),re.dispatchEvent({type:O.type,data:O.inputSource}))}function I(){r.removeEventListener("select",Q),r.removeEventListener("selectstart",Q),r.removeEventListener("selectend",Q),r.removeEventListener("squeeze",Q),r.removeEventListener("squeezestart",Q),r.removeEventListener("squeezeend",Q),r.removeEventListener("end",I),r.removeEventListener("inputsourceschange",q);for(let O=0;O<x.length;O++){const J=E[O];J!==null&&(E[O]=null,x[O].disconnect(J))}C=null,K=null,M.reset(),e.setRenderTarget(u),m=null,f=null,h=null,r=null,v=null,Ae.stop(),i.isPresenting=!1,e.setPixelRatio(A),e.setSize(P.width,P.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(O){s=O,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(O){o=O,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(O){c=O},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return h},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(O){if(r=O,r!==null){if(u=e.getRenderTarget(),r.addEventListener("select",Q),r.addEventListener("selectstart",Q),r.addEventListener("selectend",Q),r.addEventListener("squeeze",Q),r.addEventListener("squeezestart",Q),r.addEventListener("squeezeend",Q),r.addEventListener("end",I),r.addEventListener("inputsourceschange",q),p.xrCompatible!==!0&&await n.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(P),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const J={antialias:r.renderState.layers===void 0?p.antialias:!0,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,n,J),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),v=new Jn(m.framebufferWidth,m.framebufferHeight,{format:$n,type:rr,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let J=null,re=null,de=null;p.depth&&(de=p.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,J=p.stencil?qs:Dr,re=p.stencil?Lr:qi);const ye={colorFormat:n.RGBA8,depthFormat:de,scaleFactor:s};h=new XRWebGLBinding(r,n),f=h.createProjectionLayer(ye),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),v=new Jn(f.textureWidth,f.textureHeight,{format:$n,type:rr,depthTexture:new Ix(f.textureWidth,f.textureHeight,re,void 0,void 0,void 0,void 0,void 0,void 0,J),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0});const fe=e.properties.get(v);fe.__ignoreDepthValues=f.ignoreDepthValues}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),Ae.setContext(r),Ae.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function q(O){for(let J=0;J<O.removed.length;J++){const re=O.removed[J],de=E.indexOf(re);de>=0&&(E[de]=null,x[de].disconnect(re))}for(let J=0;J<O.added.length;J++){const re=O.added[J];let de=E.indexOf(re);if(de===-1){for(let fe=0;fe<x.length;fe++)if(fe>=E.length){E.push(re),de=fe;break}else if(E[fe]===null){E[fe]=re,de=fe;break}if(de===-1)break}const ye=x[de];ye&&ye.connect(re)}}const z=new U,W=new U;function N(O,J,re){z.setFromMatrixPosition(J.matrixWorld),W.setFromMatrixPosition(re.matrixWorld);const de=z.distanceTo(W),ye=J.projectionMatrix.elements,fe=re.projectionMatrix.elements,He=ye[14]/(ye[10]-1),Se=ye[14]/(ye[10]+1),k=(ye[9]+1)/ye[5],ct=(ye[9]-1)/ye[5],Me=(ye[8]-1)/ye[0],Ie=(fe[8]+1)/fe[0],Re=He*Me,Ye=He*Ie,Ue=de/(-Me+Ie),Ge=Ue*-Me;J.matrixWorld.decompose(O.position,O.quaternion,O.scale),O.translateX(Ge),O.translateZ(Ue),O.matrixWorld.compose(O.position,O.quaternion,O.scale),O.matrixWorldInverse.copy(O.matrixWorld).invert();const at=He+Ue,b=Se+Ue,y=Re-Ge,j=Ye+(de-Ge),Z=k*Se/b*at,ie=ct*Se/b*at;O.projectionMatrix.makePerspective(y,j,Z,ie,at,b),O.projectionMatrixInverse.copy(O.projectionMatrix).invert()}function B(O,J){J===null?O.matrixWorld.copy(O.matrix):O.matrixWorld.multiplyMatrices(J.matrixWorld,O.matrix),O.matrixWorldInverse.copy(O.matrixWorld).invert()}this.updateCamera=function(O){if(r===null)return;M.texture!==null&&(O.near=M.depthNear,O.far=M.depthFar),S.near=D.near=w.near=O.near,S.far=D.far=w.far=O.far,(C!==S.near||K!==S.far)&&(r.updateRenderState({depthNear:S.near,depthFar:S.far}),C=S.near,K=S.far,w.near=C,w.far=K,D.near=C,D.far=K,w.updateProjectionMatrix(),D.updateProjectionMatrix(),O.updateProjectionMatrix());const J=O.parent,re=S.cameras;B(S,J);for(let de=0;de<re.length;de++)B(re[de],J);re.length===2?N(S,w,D):S.projectionMatrix.copy(w.projectionMatrix),F(O,S,J)};function F(O,J,re){re===null?O.matrix.copy(J.matrixWorld):(O.matrix.copy(re.matrixWorld),O.matrix.invert(),O.matrix.multiply(J.matrixWorld)),O.matrix.decompose(O.position,O.quaternion,O.scale),O.updateMatrixWorld(!0),O.projectionMatrix.copy(J.projectionMatrix),O.projectionMatrixInverse.copy(J.projectionMatrixInverse),O.isPerspectiveCamera&&(O.fov=ro*2*Math.atan(1/O.projectionMatrix.elements[5]),O.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(f===null&&m===null))return l},this.setFoveation=function(O){l=O,f!==null&&(f.fixedFoveation=O),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=O)},this.hasDepthSensing=function(){return M.texture!==null};let te=null;function ae(O,J){if(d=J.getViewerPose(c||a),_=J,d!==null){const re=d.views;m!==null&&(e.setRenderTargetFramebuffer(v,m.framebuffer),e.setRenderTarget(v));let de=!1;re.length!==S.cameras.length&&(S.cameras.length=0,de=!0);for(let fe=0;fe<re.length;fe++){const He=re[fe];let Se=null;if(m!==null)Se=m.getViewport(He);else{const ct=h.getViewSubImage(f,He);Se=ct.viewport,fe===0&&(e.setRenderTargetTextures(v,ct.colorTexture,f.ignoreDepthValues?void 0:ct.depthStencilTexture),e.setRenderTarget(v))}let k=$[fe];k===void 0&&(k=new _n,k.layers.enable(fe),k.viewport=new St,$[fe]=k),k.matrix.fromArray(He.transform.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale),k.projectionMatrix.fromArray(He.projectionMatrix),k.projectionMatrixInverse.copy(k.projectionMatrix).invert(),k.viewport.set(Se.x,Se.y,Se.width,Se.height),fe===0&&(S.matrix.copy(k.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),de===!0&&S.cameras.push(k)}const ye=r.enabledFeatures;if(ye&&ye.includes("depth-sensing")){const fe=h.getDepthInformation(re[0]);fe&&fe.isValid&&fe.texture&&M.init(e,fe,r.renderState)}}for(let re=0;re<x.length;re++){const de=E[re],ye=x[re];de!==null&&ye!==void 0&&ye.update(de,J,c||a)}M.render(e,S),te&&te(O,J),J.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:J}),_=null}const Ae=new Dx;Ae.setAnimationLoop(ae),this.setAnimationLoop=function(O){te=O},this.dispose=function(){}}}const _r=new ci,tb=new ht;function nb(t,e){function n(p,u){p.matrixAutoUpdate===!0&&p.updateMatrix(),u.value.copy(p.matrix)}function i(p,u){u.color.getRGB(p.fogColor.value,Px(t)),u.isFog?(p.fogNear.value=u.near,p.fogFar.value=u.far):u.isFogExp2&&(p.fogDensity.value=u.density)}function r(p,u,v,x,E){u.isMeshBasicMaterial||u.isMeshLambertMaterial?s(p,u):u.isMeshToonMaterial?(s(p,u),h(p,u)):u.isMeshPhongMaterial?(s(p,u),d(p,u)):u.isMeshStandardMaterial?(s(p,u),f(p,u),u.isMeshPhysicalMaterial&&m(p,u,E)):u.isMeshMatcapMaterial?(s(p,u),_(p,u)):u.isMeshDepthMaterial?s(p,u):u.isMeshDistanceMaterial?(s(p,u),M(p,u)):u.isMeshNormalMaterial?s(p,u):u.isLineBasicMaterial?(a(p,u),u.isLineDashedMaterial&&o(p,u)):u.isPointsMaterial?l(p,u,v,x):u.isSpriteMaterial?c(p,u):u.isShadowMaterial?(p.color.value.copy(u.color),p.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(p,u){p.opacity.value=u.opacity,u.color&&p.diffuse.value.copy(u.color),u.emissive&&p.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(p.map.value=u.map,n(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,n(u.alphaMap,p.alphaMapTransform)),u.bumpMap&&(p.bumpMap.value=u.bumpMap,n(u.bumpMap,p.bumpMapTransform),p.bumpScale.value=u.bumpScale,u.side===mn&&(p.bumpScale.value*=-1)),u.normalMap&&(p.normalMap.value=u.normalMap,n(u.normalMap,p.normalMapTransform),p.normalScale.value.copy(u.normalScale),u.side===mn&&p.normalScale.value.negate()),u.displacementMap&&(p.displacementMap.value=u.displacementMap,n(u.displacementMap,p.displacementMapTransform),p.displacementScale.value=u.displacementScale,p.displacementBias.value=u.displacementBias),u.emissiveMap&&(p.emissiveMap.value=u.emissiveMap,n(u.emissiveMap,p.emissiveMapTransform)),u.specularMap&&(p.specularMap.value=u.specularMap,n(u.specularMap,p.specularMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest);const v=e.get(u),x=v.envMap,E=v.envMapRotation;if(x&&(p.envMap.value=x,_r.copy(E),_r.x*=-1,_r.y*=-1,_r.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(_r.y*=-1,_r.z*=-1),p.envMapRotation.value.setFromMatrix4(tb.makeRotationFromEuler(_r)),p.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=u.reflectivity,p.ior.value=u.ior,p.refractionRatio.value=u.refractionRatio),u.lightMap){p.lightMap.value=u.lightMap;const P=t._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=u.lightMapIntensity*P,n(u.lightMap,p.lightMapTransform)}u.aoMap&&(p.aoMap.value=u.aoMap,p.aoMapIntensity.value=u.aoMapIntensity,n(u.aoMap,p.aoMapTransform))}function a(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,u.map&&(p.map.value=u.map,n(u.map,p.mapTransform))}function o(p,u){p.dashSize.value=u.dashSize,p.totalSize.value=u.dashSize+u.gapSize,p.scale.value=u.scale}function l(p,u,v,x){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.size.value=u.size*v,p.scale.value=x*.5,u.map&&(p.map.value=u.map,n(u.map,p.uvTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,n(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function c(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.rotation.value=u.rotation,u.map&&(p.map.value=u.map,n(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,n(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function d(p,u){p.specular.value.copy(u.specular),p.shininess.value=Math.max(u.shininess,1e-4)}function h(p,u){u.gradientMap&&(p.gradientMap.value=u.gradientMap)}function f(p,u){p.metalness.value=u.metalness,u.metalnessMap&&(p.metalnessMap.value=u.metalnessMap,n(u.metalnessMap,p.metalnessMapTransform)),p.roughness.value=u.roughness,u.roughnessMap&&(p.roughnessMap.value=u.roughnessMap,n(u.roughnessMap,p.roughnessMapTransform)),e.get(u).envMap&&(p.envMapIntensity.value=u.envMapIntensity)}function m(p,u,v){p.ior.value=u.ior,u.sheen>0&&(p.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),p.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(p.sheenColorMap.value=u.sheenColorMap,n(u.sheenColorMap,p.sheenColorMapTransform)),u.sheenRoughnessMap&&(p.sheenRoughnessMap.value=u.sheenRoughnessMap,n(u.sheenRoughnessMap,p.sheenRoughnessMapTransform))),u.clearcoat>0&&(p.clearcoat.value=u.clearcoat,p.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(p.clearcoatMap.value=u.clearcoatMap,n(u.clearcoatMap,p.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,n(u.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(p.clearcoatNormalMap.value=u.clearcoatNormalMap,n(u.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===mn&&p.clearcoatNormalScale.value.negate())),u.iridescence>0&&(p.iridescence.value=u.iridescence,p.iridescenceIOR.value=u.iridescenceIOR,p.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(p.iridescenceMap.value=u.iridescenceMap,n(u.iridescenceMap,p.iridescenceMapTransform)),u.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=u.iridescenceThicknessMap,n(u.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),u.transmission>0&&(p.transmission.value=u.transmission,p.transmissionSamplerMap.value=v.texture,p.transmissionSamplerSize.value.set(v.width,v.height),u.transmissionMap&&(p.transmissionMap.value=u.transmissionMap,n(u.transmissionMap,p.transmissionMapTransform)),p.thickness.value=u.thickness,u.thicknessMap&&(p.thicknessMap.value=u.thicknessMap,n(u.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=u.attenuationDistance,p.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(p.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(p.anisotropyMap.value=u.anisotropyMap,n(u.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=u.specularIntensity,p.specularColor.value.copy(u.specularColor),u.specularColorMap&&(p.specularColorMap.value=u.specularColorMap,n(u.specularColorMap,p.specularColorMapTransform)),u.specularIntensityMap&&(p.specularIntensityMap.value=u.specularIntensityMap,n(u.specularIntensityMap,p.specularIntensityMapTransform))}function _(p,u){u.matcap&&(p.matcap.value=u.matcap)}function M(p,u){const v=e.get(u).light;p.referencePosition.value.setFromMatrixPosition(v.matrixWorld),p.nearDistance.value=v.shadow.camera.near,p.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function ib(t,e,n,i){let r={},s={},a=[];const o=n.isWebGL2?t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(v,x){const E=x.program;i.uniformBlockBinding(v,E)}function c(v,x){let E=r[v.id];E===void 0&&(_(v),E=d(v),r[v.id]=E,v.addEventListener("dispose",p));const P=x.program;i.updateUBOMapping(v,P);const A=e.render.frame;s[v.id]!==A&&(f(v),s[v.id]=A)}function d(v){const x=h();v.__bindingPointIndex=x;const E=t.createBuffer(),P=v.__size,A=v.usage;return t.bindBuffer(t.UNIFORM_BUFFER,E),t.bufferData(t.UNIFORM_BUFFER,P,A),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,x,E),E}function h(){for(let v=0;v<o;v++)if(a.indexOf(v)===-1)return a.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(v){const x=r[v.id],E=v.uniforms,P=v.__cache;t.bindBuffer(t.UNIFORM_BUFFER,x);for(let A=0,w=E.length;A<w;A++){const D=Array.isArray(E[A])?E[A]:[E[A]];for(let $=0,S=D.length;$<S;$++){const C=D[$];if(m(C,A,$,P)===!0){const K=C.__offset,Q=Array.isArray(C.value)?C.value:[C.value];let I=0;for(let q=0;q<Q.length;q++){const z=Q[q],W=M(z);typeof z=="number"||typeof z=="boolean"?(C.__data[0]=z,t.bufferSubData(t.UNIFORM_BUFFER,K+I,C.__data)):z.isMatrix3?(C.__data[0]=z.elements[0],C.__data[1]=z.elements[1],C.__data[2]=z.elements[2],C.__data[3]=0,C.__data[4]=z.elements[3],C.__data[5]=z.elements[4],C.__data[6]=z.elements[5],C.__data[7]=0,C.__data[8]=z.elements[6],C.__data[9]=z.elements[7],C.__data[10]=z.elements[8],C.__data[11]=0):(z.toArray(C.__data,I),I+=W.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,K,C.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function m(v,x,E,P){const A=v.value,w=x+"_"+E;if(P[w]===void 0)return typeof A=="number"||typeof A=="boolean"?P[w]=A:P[w]=A.clone(),!0;{const D=P[w];if(typeof A=="number"||typeof A=="boolean"){if(D!==A)return P[w]=A,!0}else if(D.equals(A)===!1)return D.copy(A),!0}return!1}function _(v){const x=v.uniforms;let E=0;const P=16;for(let w=0,D=x.length;w<D;w++){const $=Array.isArray(x[w])?x[w]:[x[w]];for(let S=0,C=$.length;S<C;S++){const K=$[S],Q=Array.isArray(K.value)?K.value:[K.value];for(let I=0,q=Q.length;I<q;I++){const z=Q[I],W=M(z),N=E%P;N!==0&&P-N<W.boundary&&(E+=P-N),K.__data=new Float32Array(W.storage/Float32Array.BYTES_PER_ELEMENT),K.__offset=E,E+=W.storage}}}const A=E%P;return A>0&&(E+=P-A),v.__size=E,v.__cache={},this}function M(v){const x={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(x.boundary=4,x.storage=4):v.isVector2?(x.boundary=8,x.storage=8):v.isVector3||v.isColor?(x.boundary=16,x.storage=12):v.isVector4?(x.boundary=16,x.storage=16):v.isMatrix3?(x.boundary=48,x.storage=48):v.isMatrix4?(x.boundary=64,x.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),x}function p(v){const x=v.target;x.removeEventListener("dispose",p);const E=a.indexOf(x.__bindingPointIndex);a.splice(E,1),t.deleteBuffer(r[x.id]),delete r[x.id],delete s[x.id]}function u(){for(const v in r)t.deleteBuffer(r[v]);a=[],r={},s={}}return{bind:l,update:c,dispose:u}}class Bx{constructor(e={}){const{canvas:n=$S(),context:i=null,depth:r=!0,stencil:s=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let f;i!==null?f=i.getContextAttributes().alpha:f=a;const m=new Uint32Array(4),_=new Int32Array(4);let M=null,p=null;const u=[],v=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ii,this._useLegacyLights=!1,this.toneMapping=wi,this.toneMappingExposure=1;const x=this;let E=!1,P=0,A=0,w=null,D=-1,$=null;const S=new St,C=new St;let K=null;const Q=new $e(0);let I=0,q=n.width,z=n.height,W=1,N=null,B=null;const F=new St(0,0,q,z),te=new St(0,0,q,z);let ae=!1;const Ae=new Gf;let O=!1,J=!1,re=null;const de=new ht,ye=new we,fe=new U,He={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Se(){return w===null?W:1}let k=i;function ct(T,H){for(let X=0;X<T.length;X++){const Y=T[X],V=n.getContext(Y,H);if(V!==null)return V}return null}try{const T={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:h};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Of}`),n.addEventListener("webglcontextlost",Ee,!1),n.addEventListener("webglcontextrestored",L,!1),n.addEventListener("webglcontextcreationerror",ce,!1),k===null){const H=["webgl2","webgl","experimental-webgl"];if(x.isWebGL1Renderer===!0&&H.shift(),k=ct(H,T),k===null)throw ct(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&k instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),k.getShaderPrecisionFormat===void 0&&(k.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let Me,Ie,Re,Ye,Ue,Ge,at,b,y,j,Z,ie,ne,Oe,Ne,oe,he,Pe,ue,ut,je,ve,ge,be;function R(){Me=new cw(k),Ie=new iw(k,Me,e),Me.init(Ie),ve=new $T(k,Me,Ie),Re=new XT(k,Me,Ie),Ye=new fw(k),Ue=new LT,Ge=new YT(k,Me,Re,Ue,Ie,ve,Ye),at=new sw(x),b=new lw(x),y=new vM(k,Ie),ge=new tw(k,Me,y,Ie),j=new uw(k,y,Ye,ge),Z=new gw(k,j,y,Ye),ue=new mw(k,Ie,Ge),oe=new rw(Ue),ie=new NT(x,at,b,Me,Ie,ge,oe),ne=new nb(x,Ue),Oe=new IT,Ne=new BT(Me,Ie),Pe=new ew(x,at,b,Re,Z,f,l),he=new WT(x,Z,Ie),be=new ib(k,Ye,Ie,Re),ut=new nw(k,Me,Ye,Ie),je=new dw(k,Me,Ye,Ie),Ye.programs=ie.programs,x.capabilities=Ie,x.extensions=Me,x.properties=Ue,x.renderLists=Oe,x.shadowMap=he,x.state=Re,x.info=Ye}R();const ee=new eb(x,k);this.xr=ee,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){const T=Me.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=Me.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(T){T!==void 0&&(W=T,this.setSize(q,z,!1))},this.getSize=function(T){return T.set(q,z)},this.setSize=function(T,H,X=!0){if(ee.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=T,z=H,n.width=Math.floor(T*W),n.height=Math.floor(H*W),X===!0&&(n.style.width=T+"px",n.style.height=H+"px"),this.setViewport(0,0,T,H)},this.getDrawingBufferSize=function(T){return T.set(q*W,z*W).floor()},this.setDrawingBufferSize=function(T,H,X){q=T,z=H,W=X,n.width=Math.floor(T*X),n.height=Math.floor(H*X),this.setViewport(0,0,T,H)},this.getCurrentViewport=function(T){return T.copy(S)},this.getViewport=function(T){return T.copy(F)},this.setViewport=function(T,H,X,Y){T.isVector4?F.set(T.x,T.y,T.z,T.w):F.set(T,H,X,Y),Re.viewport(S.copy(F).multiplyScalar(W).round())},this.getScissor=function(T){return T.copy(te)},this.setScissor=function(T,H,X,Y){T.isVector4?te.set(T.x,T.y,T.z,T.w):te.set(T,H,X,Y),Re.scissor(C.copy(te).multiplyScalar(W).round())},this.getScissorTest=function(){return ae},this.setScissorTest=function(T){Re.setScissorTest(ae=T)},this.setOpaqueSort=function(T){N=T},this.setTransparentSort=function(T){B=T},this.getClearColor=function(T){return T.copy(Pe.getClearColor())},this.setClearColor=function(){Pe.setClearColor.apply(Pe,arguments)},this.getClearAlpha=function(){return Pe.getClearAlpha()},this.setClearAlpha=function(){Pe.setClearAlpha.apply(Pe,arguments)},this.clear=function(T=!0,H=!0,X=!0){let Y=0;if(T){let V=!1;if(w!==null){const _e=w.texture.format;V=_e===vx||_e===xx||_e===gx}if(V){const _e=w.texture.type,Ce=_e===rr||_e===qi||_e===kf||_e===Lr||_e===hx||_e===px,Le=Pe.getClearColor(),ke=Pe.getClearAlpha(),Xe=Le.r,Fe=Le.g,Ve=Le.b;Ce?(m[0]=Xe,m[1]=Fe,m[2]=Ve,m[3]=ke,k.clearBufferuiv(k.COLOR,0,m)):(_[0]=Xe,_[1]=Fe,_[2]=Ve,_[3]=ke,k.clearBufferiv(k.COLOR,0,_))}else Y|=k.COLOR_BUFFER_BIT}H&&(Y|=k.DEPTH_BUFFER_BIT),X&&(Y|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",Ee,!1),n.removeEventListener("webglcontextrestored",L,!1),n.removeEventListener("webglcontextcreationerror",ce,!1),Oe.dispose(),Ne.dispose(),Ue.dispose(),at.dispose(),b.dispose(),Z.dispose(),ge.dispose(),be.dispose(),ie.dispose(),ee.dispose(),ee.removeEventListener("sessionstart",pt),ee.removeEventListener("sessionend",et),re&&(re.dispose(),re=null),dt.stop()};function Ee(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function L(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;const T=Ye.autoReset,H=he.enabled,X=he.autoUpdate,Y=he.needsUpdate,V=he.type;R(),Ye.autoReset=T,he.enabled=H,he.autoUpdate=X,he.needsUpdate=Y,he.type=V}function ce(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function G(T){const H=T.target;H.removeEventListener("dispose",G),se(H)}function se(T){xe(T),Ue.remove(T)}function xe(T){const H=Ue.get(T).programs;H!==void 0&&(H.forEach(function(X){ie.releaseProgram(X)}),T.isShaderMaterial&&ie.releaseShaderCache(T))}this.renderBufferDirect=function(T,H,X,Y,V,_e){H===null&&(H=He);const Ce=V.isMesh&&V.matrixWorld.determinant()<0,Le=po(T,H,X,Y,V);Re.setMaterial(Y,Ce);let ke=X.index,Xe=1;if(Y.wireframe===!0){if(ke=j.getWireframeAttribute(X),ke===void 0)return;Xe=2}const Fe=X.drawRange,Ve=X.attributes.position;let _t=Fe.start*Xe,Wt=(Fe.start+Fe.count)*Xe;_e!==null&&(_t=Math.max(_t,_e.start*Xe),Wt=Math.min(Wt,(_e.start+_e.count)*Xe)),ke!==null?(_t=Math.max(_t,0),Wt=Math.min(Wt,ke.count)):Ve!=null&&(_t=Math.max(_t,0),Wt=Math.min(Wt,Ve.count));const ze=Wt-_t;if(ze<0||ze===1/0)return;ge.setup(V,Y,Le,X,ke);let Ze,Be=ut;if(ke!==null&&(Ze=y.get(ke),Be=je,Be.setIndex(Ze)),V.isMesh)Y.wireframe===!0?(Re.setLineWidth(Y.wireframeLinewidth*Se()),Be.setMode(k.LINES)):Be.setMode(k.TRIANGLES);else if(V.isLine){let De=Y.linewidth;De===void 0&&(De=1),Re.setLineWidth(De*Se()),V.isLineSegments?Be.setMode(k.LINES):V.isLineLoop?Be.setMode(k.LINE_LOOP):Be.setMode(k.LINE_STRIP)}else V.isPoints?Be.setMode(k.POINTS):V.isSprite&&Be.setMode(k.TRIANGLES);if(V.isBatchedMesh)Be.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else if(V.isInstancedMesh)Be.renderInstances(_t,ze,V.count);else if(X.isInstancedBufferGeometry){const De=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,Xt=Math.min(X.instanceCount,De);Be.renderInstances(_t,ze,Xt)}else Be.render(_t,ze)};function We(T,H,X){T.transparent===!0&&T.side===Xn&&T.forceSinglePass===!1?(T.side=mn,T.needsUpdate=!0,fr(T,H,X),T.side=or,T.needsUpdate=!0,fr(T,H,X),T.side=Xn):fr(T,H,X)}this.compile=function(T,H,X=null){X===null&&(X=T),p=Ne.get(X),p.init(),v.push(p),X.traverseVisible(function(V){V.isLight&&V.layers.test(H.layers)&&(p.pushLight(V),V.castShadow&&p.pushShadow(V))}),T!==X&&T.traverseVisible(function(V){V.isLight&&V.layers.test(H.layers)&&(p.pushLight(V),V.castShadow&&p.pushShadow(V))}),p.setupLights(x._useLegacyLights);const Y=new Set;return T.traverse(function(V){const _e=V.material;if(_e)if(Array.isArray(_e))for(let Ce=0;Ce<_e.length;Ce++){const Le=_e[Ce];We(Le,X,V),Y.add(Le)}else We(_e,X,V),Y.add(_e)}),v.pop(),p=null,Y},this.compileAsync=function(T,H,X=null){const Y=this.compile(T,H,X);return new Promise(V=>{function _e(){if(Y.forEach(function(Ce){Ue.get(Ce).currentProgram.isReady()&&Y.delete(Ce)}),Y.size===0){V(T);return}setTimeout(_e,10)}Me.get("KHR_parallel_shader_compile")!==null?_e():setTimeout(_e,10)})};let st=null;function rt(T){st&&st(T)}function pt(){dt.stop()}function et(){dt.start()}const dt=new Dx;dt.setAnimationLoop(rt),typeof self<"u"&&dt.setContext(self),this.setAnimationLoop=function(T){st=T,ee.setAnimationLoop(T),T===null?dt.stop():dt.start()},ee.addEventListener("sessionstart",pt),ee.addEventListener("sessionend",et),this.render=function(T,H){if(H!==void 0&&H.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),ee.enabled===!0&&ee.isPresenting===!0&&(ee.cameraAutoUpdate===!0&&ee.updateCamera(H),H=ee.getCamera()),T.isScene===!0&&T.onBeforeRender(x,T,H,w),p=Ne.get(T,v.length),p.init(),v.push(p),de.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),Ae.setFromProjectionMatrix(de),J=this.localClippingEnabled,O=oe.init(this.clippingPlanes,J),M=Oe.get(T,u.length),M.init(),u.push(M),At(T,H,0,x.sortObjects),M.finish(),x.sortObjects===!0&&M.sort(N,B),this.info.render.frame++,O===!0&&oe.beginShadows();const X=p.state.shadowsArray;if(he.render(X,T,H),O===!0&&oe.endShadows(),this.info.autoReset===!0&&this.info.reset(),(ee.enabled===!1||ee.isPresenting===!1||ee.hasDepthSensing()===!1)&&Pe.render(M,T),p.setupLights(x._useLegacyLights),H.isArrayCamera){const Y=H.cameras;for(let V=0,_e=Y.length;V<_e;V++){const Ce=Y[V];kn(M,T,Ce,Ce.viewport)}}else kn(M,T,H);w!==null&&(Ge.updateMultisampleRenderTarget(w),Ge.updateRenderTargetMipmap(w)),T.isScene===!0&&T.onAfterRender(x,T,H),ge.resetDefaultState(),D=-1,$=null,v.pop(),v.length>0?p=v[v.length-1]:p=null,u.pop(),u.length>0?M=u[u.length-1]:M=null};function At(T,H,X,Y){if(T.visible===!1)return;if(T.layers.test(H.layers)){if(T.isGroup)X=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(H);else if(T.isLight)p.pushLight(T),T.castShadow&&p.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||Ae.intersectsSprite(T)){Y&&fe.setFromMatrixPosition(T.matrixWorld).applyMatrix4(de);const Ce=Z.update(T),Le=T.material;Le.visible&&M.push(T,Ce,Le,X,fe.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||Ae.intersectsObject(T))){const Ce=Z.update(T),Le=T.material;if(Y&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),fe.copy(T.boundingSphere.center)):(Ce.boundingSphere===null&&Ce.computeBoundingSphere(),fe.copy(Ce.boundingSphere.center)),fe.applyMatrix4(T.matrixWorld).applyMatrix4(de)),Array.isArray(Le)){const ke=Ce.groups;for(let Xe=0,Fe=ke.length;Xe<Fe;Xe++){const Ve=ke[Xe],_t=Le[Ve.materialIndex];_t&&_t.visible&&M.push(T,Ce,_t,X,fe.z,Ve)}}else Le.visible&&M.push(T,Ce,Le,X,fe.z,null)}}const _e=T.children;for(let Ce=0,Le=_e.length;Ce<Le;Ce++)At(_e[Ce],H,X,Y)}function kn(T,H,X,Y){const V=T.opaque,_e=T.transmissive,Ce=T.transparent;p.setupLightsView(X),O===!0&&oe.setGlobalState(x.clippingPlanes,X),_e.length>0&&Li(V,_e,H,X),Y&&Re.viewport(S.copy(Y)),V.length>0&&Di(V,H,X),_e.length>0&&Di(_e,H,X),Ce.length>0&&Di(Ce,H,X),Re.buffers.depth.setTest(!0),Re.buffers.depth.setMask(!0),Re.buffers.color.setMask(!0),Re.setPolygonOffset(!1)}function Li(T,H,X,Y){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;const _e=Ie.isWebGL2;re===null&&(re=new Jn(1,1,{generateMipmaps:!0,type:Me.has("EXT_color_buffer_half_float")?Ti:rr,minFilter:Cr,samples:_e?4:0})),x.getDrawingBufferSize(ye),_e?re.setSize(ye.x,ye.y):re.setSize($l(ye.x),$l(ye.y));const Ce=x.getRenderTarget();x.setRenderTarget(re),x.getClearColor(Q),I=x.getClearAlpha(),I<1&&x.setClearColor(16777215,.5),x.clear();const Le=x.toneMapping;x.toneMapping=wi,Di(T,X,Y),Ge.updateMultisampleRenderTarget(re),Ge.updateRenderTargetMipmap(re);let ke=!1;for(let Xe=0,Fe=H.length;Xe<Fe;Xe++){const Ve=H[Xe],_t=Ve.object,Wt=Ve.geometry,ze=Ve.material,Ze=Ve.group;if(ze.side===Xn&&_t.layers.test(Y.layers)){const Be=ze.side;ze.side=mn,ze.needsUpdate=!0,jr(_t,X,Y,Wt,ze,Ze),ze.side=Be,ze.needsUpdate=!0,ke=!0}}ke===!0&&(Ge.updateMultisampleRenderTarget(re),Ge.updateRenderTargetMipmap(re)),x.setRenderTarget(Ce),x.setClearColor(Q,I),x.toneMapping=Le}function Di(T,H,X){const Y=H.isScene===!0?H.overrideMaterial:null;for(let V=0,_e=T.length;V<_e;V++){const Ce=T[V],Le=Ce.object,ke=Ce.geometry,Xe=Y===null?Ce.material:Y,Fe=Ce.group;Le.layers.test(X.layers)&&jr(Le,H,X,ke,Xe,Fe)}}function jr(T,H,X,Y,V,_e){T.onBeforeRender(x,H,X,Y,V,_e),T.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),V.onBeforeRender(x,H,X,Y,T,_e),V.transparent===!0&&V.side===Xn&&V.forceSinglePass===!1?(V.side=mn,V.needsUpdate=!0,x.renderBufferDirect(X,H,Y,V,T,_e),V.side=or,V.needsUpdate=!0,x.renderBufferDirect(X,H,Y,V,T,_e),V.side=Xn):x.renderBufferDirect(X,H,Y,V,T,_e),T.onAfterRender(x,H,X,Y,V,_e)}function fr(T,H,X){H.isScene!==!0&&(H=He);const Y=Ue.get(T),V=p.state.lights,_e=p.state.shadowsArray,Ce=V.state.version,Le=ie.getParameters(T,V.state,_e,H,X),ke=ie.getProgramCacheKey(Le);let Xe=Y.programs;Y.environment=T.isMeshStandardMaterial?H.environment:null,Y.fog=H.fog,Y.envMap=(T.isMeshStandardMaterial?b:at).get(T.envMap||Y.environment),Y.envMapRotation=Y.environment!==null&&T.envMap===null?H.environmentRotation:T.envMapRotation,Xe===void 0&&(T.addEventListener("dispose",G),Xe=new Map,Y.programs=Xe);let Fe=Xe.get(ke);if(Fe!==void 0){if(Y.currentProgram===Fe&&Y.lightsStateVersion===Ce)return Wr(T,Le),Fe}else Le.uniforms=ie.getUniforms(T),T.onBuild(X,Le,x),T.onBeforeCompile(Le,x),Fe=ie.acquireProgram(Le,ke),Xe.set(ke,Fe),Y.uniforms=Le.uniforms;const Ve=Y.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Ve.clippingPlanes=oe.uniform),Wr(T,Le),Y.needsLights=ra(T),Y.lightsStateVersion=Ce,Y.needsLights&&(Ve.ambientLightColor.value=V.state.ambient,Ve.lightProbe.value=V.state.probe,Ve.directionalLights.value=V.state.directional,Ve.directionalLightShadows.value=V.state.directionalShadow,Ve.spotLights.value=V.state.spot,Ve.spotLightShadows.value=V.state.spotShadow,Ve.rectAreaLights.value=V.state.rectArea,Ve.ltc_1.value=V.state.rectAreaLTC1,Ve.ltc_2.value=V.state.rectAreaLTC2,Ve.pointLights.value=V.state.point,Ve.pointLightShadows.value=V.state.pointShadow,Ve.hemisphereLights.value=V.state.hemi,Ve.directionalShadowMap.value=V.state.directionalShadowMap,Ve.directionalShadowMatrix.value=V.state.directionalShadowMatrix,Ve.spotShadowMap.value=V.state.spotShadowMap,Ve.spotLightMatrix.value=V.state.spotLightMatrix,Ve.spotLightMap.value=V.state.spotLightMap,Ve.pointShadowMap.value=V.state.pointShadowMap,Ve.pointShadowMatrix.value=V.state.pointShadowMatrix),Y.currentProgram=Fe,Y.uniformsList=null,Fe}function ia(T){if(T.uniformsList===null){const H=T.currentProgram.getUniforms();T.uniformsList=vl.seqWithValue(H.seq,T.uniforms)}return T.uniformsList}function Wr(T,H){const X=Ue.get(T);X.outputColorSpace=H.outputColorSpace,X.batching=H.batching,X.instancing=H.instancing,X.instancingColor=H.instancingColor,X.instancingMorph=H.instancingMorph,X.skinning=H.skinning,X.morphTargets=H.morphTargets,X.morphNormals=H.morphNormals,X.morphColors=H.morphColors,X.morphTargetsCount=H.morphTargetsCount,X.numClippingPlanes=H.numClippingPlanes,X.numIntersection=H.numClipIntersection,X.vertexAlphas=H.vertexAlphas,X.vertexTangents=H.vertexTangents,X.toneMapping=H.toneMapping}function po(T,H,X,Y,V){H.isScene!==!0&&(H=He),Ge.resetTextureUnits();const _e=H.fog,Ce=Y.isMeshStandardMaterial?H.environment:null,Le=w===null?x.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:dr,ke=(Y.isMeshStandardMaterial?b:at).get(Y.envMap||Ce),Xe=Y.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Fe=!!X.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),Ve=!!X.morphAttributes.position,_t=!!X.morphAttributes.normal,Wt=!!X.morphAttributes.color;let ze=wi;Y.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(ze=x.toneMapping);const Ze=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,Be=Ze!==void 0?Ze.length:0,De=Ue.get(Y),Xt=p.state.lights;if(O===!0&&(J===!0||T!==$)){const bn=T===$&&Y.id===D;oe.setState(Y,T,bn)}let Je=!1;Y.version===De.__version?(De.needsLights&&De.lightsStateVersion!==Xt.state.version||De.outputColorSpace!==Le||V.isBatchedMesh&&De.batching===!1||!V.isBatchedMesh&&De.batching===!0||V.isInstancedMesh&&De.instancing===!1||!V.isInstancedMesh&&De.instancing===!0||V.isSkinnedMesh&&De.skinning===!1||!V.isSkinnedMesh&&De.skinning===!0||V.isInstancedMesh&&De.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&De.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&De.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&De.instancingMorph===!1&&V.morphTexture!==null||De.envMap!==ke||Y.fog===!0&&De.fog!==_e||De.numClippingPlanes!==void 0&&(De.numClippingPlanes!==oe.numPlanes||De.numIntersection!==oe.numIntersection)||De.vertexAlphas!==Xe||De.vertexTangents!==Fe||De.morphTargets!==Ve||De.morphNormals!==_t||De.morphColors!==Wt||De.toneMapping!==ze||Ie.isWebGL2===!0&&De.morphTargetsCount!==Be)&&(Je=!0):(Je=!0,De.__version=Y.version);let Tn=De.currentProgram;Je===!0&&(Tn=fr(Y,H,V));let Xr=!1,sa=!1,_c=!1;const Yt=Tn.getUniforms(),hr=De.uniforms;if(Re.useProgram(Tn.program)&&(Xr=!0,sa=!0,_c=!0),Y.id!==D&&(D=Y.id,sa=!0),Xr||$!==T){Yt.setValue(k,"projectionMatrix",T.projectionMatrix),Yt.setValue(k,"viewMatrix",T.matrixWorldInverse);const bn=Yt.map.cameraPosition;bn!==void 0&&bn.setValue(k,fe.setFromMatrixPosition(T.matrixWorld)),Ie.logarithmicDepthBuffer&&Yt.setValue(k,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&Yt.setValue(k,"isOrthographic",T.isOrthographicCamera===!0),$!==T&&($=T,sa=!0,_c=!0)}if(V.isSkinnedMesh){Yt.setOptional(k,V,"bindMatrix"),Yt.setOptional(k,V,"bindMatrixInverse");const bn=V.skeleton;bn&&(Ie.floatVertexTextures?(bn.boneTexture===null&&bn.computeBoneTexture(),Yt.setValue(k,"boneTexture",bn.boneTexture,Ge)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}V.isBatchedMesh&&(Yt.setOptional(k,V,"batchingTexture"),Yt.setValue(k,"batchingTexture",V._matricesTexture,Ge));const yc=X.morphAttributes;if((yc.position!==void 0||yc.normal!==void 0||yc.color!==void 0&&Ie.isWebGL2===!0)&&ue.update(V,X,Tn),(sa||De.receiveShadow!==V.receiveShadow)&&(De.receiveShadow=V.receiveShadow,Yt.setValue(k,"receiveShadow",V.receiveShadow)),Y.isMeshGouraudMaterial&&Y.envMap!==null&&(hr.envMap.value=ke,hr.flipEnvMap.value=ke.isCubeTexture&&ke.isRenderTargetTexture===!1?-1:1),sa&&(Yt.setValue(k,"toneMappingExposure",x.toneMappingExposure),De.needsLights&&mo(hr,_c),_e&&Y.fog===!0&&ne.refreshFogUniforms(hr,_e),ne.refreshMaterialUniforms(hr,Y,W,z,re),vl.upload(k,ia(De),hr,Ge)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(vl.upload(k,ia(De),hr,Ge),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&Yt.setValue(k,"center",V.center),Yt.setValue(k,"modelViewMatrix",V.modelViewMatrix),Yt.setValue(k,"normalMatrix",V.normalMatrix),Yt.setValue(k,"modelMatrix",V.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){const bn=Y.uniformsGroups;for(let Sc=0,ev=bn.length;Sc<ev;Sc++)if(Ie.isWebGL2){const qf=bn[Sc];be.update(qf,Tn),be.bind(qf,Tn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Tn}function mo(T,H){T.ambientLightColor.needsUpdate=H,T.lightProbe.needsUpdate=H,T.directionalLights.needsUpdate=H,T.directionalLightShadows.needsUpdate=H,T.pointLights.needsUpdate=H,T.pointLightShadows.needsUpdate=H,T.spotLights.needsUpdate=H,T.spotLightShadows.needsUpdate=H,T.rectAreaLights.needsUpdate=H,T.hemisphereLights.needsUpdate=H}function ra(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(T,H,X){Ue.get(T.texture).__webglTexture=H,Ue.get(T.depthTexture).__webglTexture=X;const Y=Ue.get(T);Y.__hasExternalTextures=!0,Y.__autoAllocateDepthBuffer=X===void 0,Y.__autoAllocateDepthBuffer||Me.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Y.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,H){const X=Ue.get(T);X.__webglFramebuffer=H,X.__useDefaultFramebuffer=H===void 0},this.setRenderTarget=function(T,H=0,X=0){w=T,P=H,A=X;let Y=!0,V=null,_e=!1,Ce=!1;if(T){const ke=Ue.get(T);ke.__useDefaultFramebuffer!==void 0?(Re.bindFramebuffer(k.FRAMEBUFFER,null),Y=!1):ke.__webglFramebuffer===void 0?Ge.setupRenderTarget(T):ke.__hasExternalTextures&&Ge.rebindTextures(T,Ue.get(T.texture).__webglTexture,Ue.get(T.depthTexture).__webglTexture);const Xe=T.texture;(Xe.isData3DTexture||Xe.isDataArrayTexture||Xe.isCompressedArrayTexture)&&(Ce=!0);const Fe=Ue.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Fe[H])?V=Fe[H][X]:V=Fe[H],_e=!0):Ie.isWebGL2&&T.samples>0&&Ge.useMultisampledRTT(T)===!1?V=Ue.get(T).__webglMultisampledFramebuffer:Array.isArray(Fe)?V=Fe[X]:V=Fe,S.copy(T.viewport),C.copy(T.scissor),K=T.scissorTest}else S.copy(F).multiplyScalar(W).floor(),C.copy(te).multiplyScalar(W).floor(),K=ae;if(Re.bindFramebuffer(k.FRAMEBUFFER,V)&&Ie.drawBuffers&&Y&&Re.drawBuffers(T,V),Re.viewport(S),Re.scissor(C),Re.setScissorTest(K),_e){const ke=Ue.get(T.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+H,ke.__webglTexture,X)}else if(Ce){const ke=Ue.get(T.texture),Xe=H||0;k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,ke.__webglTexture,X||0,Xe)}D=-1},this.readRenderTargetPixels=function(T,H,X,Y,V,_e,Ce){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Le=Ue.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ce!==void 0&&(Le=Le[Ce]),Le){Re.bindFramebuffer(k.FRAMEBUFFER,Le);try{const ke=T.texture,Xe=ke.format,Fe=ke.type;if(Xe!==$n&&ve.convert(Xe)!==k.getParameter(k.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ve=Fe===Ti&&(Me.has("EXT_color_buffer_half_float")||Ie.isWebGL2&&Me.has("EXT_color_buffer_float"));if(Fe!==rr&&ve.convert(Fe)!==k.getParameter(k.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Fe===ai&&(Ie.isWebGL2||Me.has("OES_texture_float")||Me.has("WEBGL_color_buffer_float")))&&!Ve){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=T.width-Y&&X>=0&&X<=T.height-V&&k.readPixels(H,X,Y,V,ve.convert(Xe),ve.convert(Fe),_e)}finally{const ke=w!==null?Ue.get(w).__webglFramebuffer:null;Re.bindFramebuffer(k.FRAMEBUFFER,ke)}}},this.copyFramebufferToTexture=function(T,H,X=0){const Y=Math.pow(2,-X),V=Math.floor(H.image.width*Y),_e=Math.floor(H.image.height*Y);Ge.setTexture2D(H,0),k.copyTexSubImage2D(k.TEXTURE_2D,X,0,0,T.x,T.y,V,_e),Re.unbindTexture()},this.copyTextureToTexture=function(T,H,X,Y=0){const V=H.image.width,_e=H.image.height,Ce=ve.convert(X.format),Le=ve.convert(X.type);Ge.setTexture2D(X,0),k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,X.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,X.unpackAlignment),H.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,Y,T.x,T.y,V,_e,Ce,Le,H.image.data):H.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,Y,T.x,T.y,H.mipmaps[0].width,H.mipmaps[0].height,Ce,H.mipmaps[0].data):k.texSubImage2D(k.TEXTURE_2D,Y,T.x,T.y,Ce,Le,H.image),Y===0&&X.generateMipmaps&&k.generateMipmap(k.TEXTURE_2D),Re.unbindTexture()},this.copyTextureToTexture3D=function(T,H,X,Y,V=0){if(x.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const _e=Math.round(T.max.x-T.min.x),Ce=Math.round(T.max.y-T.min.y),Le=T.max.z-T.min.z+1,ke=ve.convert(Y.format),Xe=ve.convert(Y.type);let Fe;if(Y.isData3DTexture)Ge.setTexture3D(Y,0),Fe=k.TEXTURE_3D;else if(Y.isDataArrayTexture||Y.isCompressedArrayTexture)Ge.setTexture2DArray(Y,0),Fe=k.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,Y.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,Y.unpackAlignment);const Ve=k.getParameter(k.UNPACK_ROW_LENGTH),_t=k.getParameter(k.UNPACK_IMAGE_HEIGHT),Wt=k.getParameter(k.UNPACK_SKIP_PIXELS),ze=k.getParameter(k.UNPACK_SKIP_ROWS),Ze=k.getParameter(k.UNPACK_SKIP_IMAGES),Be=X.isCompressedTexture?X.mipmaps[V]:X.image;k.pixelStorei(k.UNPACK_ROW_LENGTH,Be.width),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,Be.height),k.pixelStorei(k.UNPACK_SKIP_PIXELS,T.min.x),k.pixelStorei(k.UNPACK_SKIP_ROWS,T.min.y),k.pixelStorei(k.UNPACK_SKIP_IMAGES,T.min.z),X.isDataTexture||X.isData3DTexture?k.texSubImage3D(Fe,V,H.x,H.y,H.z,_e,Ce,Le,ke,Xe,Be.data):Y.isCompressedArrayTexture?k.compressedTexSubImage3D(Fe,V,H.x,H.y,H.z,_e,Ce,Le,ke,Be.data):k.texSubImage3D(Fe,V,H.x,H.y,H.z,_e,Ce,Le,ke,Xe,Be),k.pixelStorei(k.UNPACK_ROW_LENGTH,Ve),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,_t),k.pixelStorei(k.UNPACK_SKIP_PIXELS,Wt),k.pixelStorei(k.UNPACK_SKIP_ROWS,ze),k.pixelStorei(k.UNPACK_SKIP_IMAGES,Ze),V===0&&Y.generateMipmaps&&k.generateMipmap(Fe),Re.unbindTexture()},this.initTexture=function(T){T.isCubeTexture?Ge.setTextureCube(T,0):T.isData3DTexture?Ge.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?Ge.setTexture2DArray(T,0):Ge.setTexture2D(T,0),Re.unbindTexture()},this.resetState=function(){P=0,A=0,w=null,Re.reset(),ge.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Si}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===Ff?"display-p3":"srgb",n.unpackColorSpace=ft.workingColorSpace===gc?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class rb extends Bx{}rb.prototype.isWebGL1Renderer=!0;class Wf{constructor(e,n=25e-5){this.isFogExp2=!0,this.name="",this.color=new $e(e),this.density=n}clone(){return new Wf(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class sb extends zt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ci,this.environmentRotation=new ci,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class ab{constructor(e,n){this.isInterleavedBuffer=!0,this.array=e,this.stride=n,this.count=e!==void 0?e.length/n:0,this.usage=Dd,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=bi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return Ex("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,n,i){e*=this.stride,i*=n.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=n.array[i+r];return this}set(e,n=0){return this.array.set(e,n),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=bi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const n=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(n,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=bi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const tn=new U;class Zl{constructor(e,n,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=n,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let n=0,i=this.data.count;n<i;n++)tn.fromBufferAttribute(this,n),tn.applyMatrix4(e),this.setXYZ(n,tn.x,tn.y,tn.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)tn.fromBufferAttribute(this,n),tn.applyNormalMatrix(e),this.setXYZ(n,tn.x,tn.y,tn.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)tn.fromBufferAttribute(this,n),tn.transformDirection(e),this.setXYZ(n,tn.x,tn.y,tn.z);return this}getComponent(e,n){let i=this.array[e*this.data.stride+this.offset+n];return this.normalized&&(i=qn(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=ot(i,this.array)),this.data.array[e*this.data.stride+this.offset+n]=i,this}setX(e,n){return this.normalized&&(n=ot(n,this.array)),this.data.array[e*this.data.stride+this.offset]=n,this}setY(e,n){return this.normalized&&(n=ot(n,this.array)),this.data.array[e*this.data.stride+this.offset+1]=n,this}setZ(e,n){return this.normalized&&(n=ot(n,this.array)),this.data.array[e*this.data.stride+this.offset+2]=n,this}setW(e,n){return this.normalized&&(n=ot(n,this.array)),this.data.array[e*this.data.stride+this.offset+3]=n,this}getX(e){let n=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(n=qn(n,this.array)),n}getY(e){let n=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(n=qn(n,this.array)),n}getZ(e){let n=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(n=qn(n,this.array)),n}getW(e){let n=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(n=qn(n,this.array)),n}setXY(e,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(n=ot(n,this.array),i=ot(i,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this}setXYZ(e,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(n=ot(n,this.array),i=ot(i,this.array),r=ot(r,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(n=ot(n,this.array),i=ot(i,this.array),r=ot(r,this.array),s=ot(s,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)n.push(this.data.array[r+s])}return new Dn(new this.array.constructor(n),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Zl(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)n.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:n,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Hx extends ta{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new $e(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let fs;const ya=new U,hs=new U,ps=new U,ms=new we,Sa=new we,Gx=new ht,el=new U,Ma=new U,tl=new U,Rm=new we,Tu=new we,Pm=new we;class ob extends zt{constructor(e=new Hx){if(super(),this.isSprite=!0,this.type="Sprite",fs===void 0){fs=new ui;const n=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new ab(n,5);fs.setIndex([0,1,2,0,2,3]),fs.setAttribute("position",new Zl(i,3,0,!1)),fs.setAttribute("uv",new Zl(i,2,3,!1))}this.geometry=fs,this.material=e,this.center=new we(.5,.5)}raycast(e,n){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),hs.setFromMatrixScale(this.matrixWorld),Gx.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),ps.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&hs.multiplyScalar(-ps.z);const i=this.material.rotation;let r,s;i!==0&&(s=Math.cos(i),r=Math.sin(i));const a=this.center;nl(el.set(-.5,-.5,0),ps,a,hs,r,s),nl(Ma.set(.5,-.5,0),ps,a,hs,r,s),nl(tl.set(.5,.5,0),ps,a,hs,r,s),Rm.set(0,0),Tu.set(1,0),Pm.set(1,1);let o=e.ray.intersectTriangle(el,Ma,tl,!1,ya);if(o===null&&(nl(Ma.set(-.5,.5,0),ps,a,hs,r,s),Tu.set(0,1),o=e.ray.intersectTriangle(el,tl,Ma,!1,ya),o===null))return;const l=e.ray.origin.distanceTo(ya);l<e.near||l>e.far||n.push({distance:l,point:ya.clone(),uv:Kn.getInterpolation(ya,el,Ma,tl,Rm,Tu,Pm,new we),face:null,object:this})}copy(e,n){return super.copy(e,n),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function nl(t,e,n,i,r,s){ms.subVectors(t,n).addScalar(.5).multiply(i),r!==void 0?(Sa.x=s*ms.x-r*ms.y,Sa.y=r*ms.x+s*ms.y):Sa.copy(ms),t.copy(e),t.x+=Sa.x,t.y+=Sa.y,t.applyMatrix4(Gx)}class lb extends Jt{constructor(e=null,n=1,i=1,r,s,a,o,l,c=Ht,d=Ht,h,f){super(null,a,o,l,c,d,r,s,h,f),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Nm extends Dn{constructor(e,n,i,r=1){super(e,n,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const gs=new ht,Lm=new ht,il=[],Dm=new Vr,cb=new ht,Ea=new Rt,wa=new uo;class Gn extends Rt{constructor(e,n,i){super(e,n),this.isInstancedMesh=!0,this.instanceMatrix=new Nm(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<i;r++)this.setMatrixAt(r,cb)}computeBoundingBox(){const e=this.geometry,n=this.count;this.boundingBox===null&&(this.boundingBox=new Vr),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<n;i++)this.getMatrixAt(i,gs),Dm.copy(e.boundingBox).applyMatrix4(gs),this.boundingBox.union(Dm)}computeBoundingSphere(){const e=this.geometry,n=this.count;this.boundingSphere===null&&(this.boundingSphere=new uo),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<n;i++)this.getMatrixAt(i,gs),wa.copy(e.boundingSphere).applyMatrix4(gs),this.boundingSphere.union(wa)}copy(e,n){return super.copy(e,n),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,n){n.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,n){n.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,n){const i=n.morphTargetInfluences,r=this.morphTexture.source.data.data,s=i.length+1,a=e*s+1;for(let o=0;o<i.length;o++)i[o]=r[a+o]}raycast(e,n){const i=this.matrixWorld,r=this.count;if(Ea.geometry=this.geometry,Ea.material=this.material,Ea.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),wa.copy(this.boundingSphere),wa.applyMatrix4(i),e.ray.intersectsSphere(wa)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,gs),Lm.multiplyMatrices(i,gs),Ea.matrixWorld=Lm,Ea.raycast(e,il);for(let a=0,o=il.length;a<o;a++){const l=il[a];l.instanceId=s,l.object=this,n.push(l)}il.length=0}}setColorAt(e,n){this.instanceColor===null&&(this.instanceColor=new Nm(new Float32Array(this.instanceMatrix.count*3),3)),n.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,n){n.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,n){const i=n.morphTargetInfluences,r=i.length+1;this.morphTexture===null&&(this.morphTexture=new lb(new Float32Array(r*this.count),r,this.count,mx,ai));const s=this.morphTexture.source.data.data;let a=0;for(let c=0;c<i.length;c++)a+=i[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=r*e;s[l]=o,s.set(i,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class ub extends Jt{constructor(e,n,i,r,s,a,o,l,c){super(e,n,i,r,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ql extends ui{constructor(e=1,n=1,i=1,r=32,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:i,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const d=[],h=[],f=[],m=[];let _=0;const M=[],p=i/2;let u=0;v(),a===!1&&(e>0&&x(!0),n>0&&x(!1)),this.setIndex(d),this.setAttribute("position",new In(h,3)),this.setAttribute("normal",new In(f,3)),this.setAttribute("uv",new In(m,2));function v(){const E=new U,P=new U;let A=0;const w=(n-e)/i;for(let D=0;D<=s;D++){const $=[],S=D/s,C=S*(n-e)+e;for(let K=0;K<=r;K++){const Q=K/r,I=Q*l+o,q=Math.sin(I),z=Math.cos(I);P.x=C*q,P.y=-S*i+p,P.z=C*z,h.push(P.x,P.y,P.z),E.set(q,w,z).normalize(),f.push(E.x,E.y,E.z),m.push(Q,1-S),$.push(_++)}M.push($)}for(let D=0;D<r;D++)for(let $=0;$<s;$++){const S=M[$][D],C=M[$+1][D],K=M[$+1][D+1],Q=M[$][D+1];d.push(S,C,Q),d.push(C,K,Q),A+=6}c.addGroup(u,A,0),u+=A}function x(E){const P=_,A=new we,w=new U;let D=0;const $=E===!0?e:n,S=E===!0?1:-1;for(let K=1;K<=r;K++)h.push(0,p*S,0),f.push(0,S,0),m.push(.5,.5),_++;const C=_;for(let K=0;K<=r;K++){const I=K/r*l+o,q=Math.cos(I),z=Math.sin(I);w.x=$*z,w.y=p*S,w.z=$*q,h.push(w.x,w.y,w.z),f.push(0,S,0),A.x=q*.5+.5,A.y=z*.5*S+.5,m.push(A.x,A.y),_++}for(let K=0;K<r;K++){const Q=P+K,I=C+K;E===!0?d.push(I,I+1,Q):d.push(I+1,I,Q),D+=3}c.addGroup(u,D,E===!0?1:2),u+=D}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ql(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Cn extends ta{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new $e(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new $e(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=yx,this.normalScale=new we(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ci,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class bu extends Cn{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new we(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Gt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(n){this.ior=(1+.4*n)/(1-.4*n)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new $e(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new $e(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new $e(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Xf extends zt{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new $e(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),n}}const Au=new ht,Im=new U,Um=new U;class Vx{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new we(512,512),this.map=null,this.mapPass=null,this.matrix=new ht,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Gf,this._frameExtents=new we(1,1),this._viewportCount=1,this._viewports=[new St(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;Im.setFromMatrixPosition(e.matrixWorld),n.position.copy(Im),Um.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(Um),n.updateMatrixWorld(),Au.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Au),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Au)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Om=new ht,Ta=new U,Cu=new U;class db extends Vx{constructor(){super(new _n(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new we(4,2),this._viewportCount=6,this._viewports=[new St(2,1,1,1),new St(0,1,1,1),new St(3,1,1,1),new St(1,1,1,1),new St(3,0,1,1),new St(1,0,1,1)],this._cubeDirections=[new U(1,0,0),new U(-1,0,0),new U(0,0,1),new U(0,0,-1),new U(0,1,0),new U(0,-1,0)],this._cubeUps=[new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,1,0),new U(0,0,1),new U(0,0,-1)]}updateMatrices(e,n=0){const i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),Ta.setFromMatrixPosition(e.matrixWorld),i.position.copy(Ta),Cu.copy(i.position),Cu.add(this._cubeDirections[n]),i.up.copy(this._cubeUps[n]),i.lookAt(Cu),i.updateMatrixWorld(),r.makeTranslation(-Ta.x,-Ta.y,-Ta.z),Om.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Om)}}class fb extends Xf{constructor(e,n,i=0,r=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new db}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class hb extends Vx{constructor(){super(new Vf(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class km extends Xf{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(zt.DEFAULT_UP),this.updateMatrix(),this.target=new zt,this.shadow=new hb}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class pb extends Xf{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}let mb=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Fm(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=Fm();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}};function Fm(){return(typeof performance>"u"?Date:performance).now()}const zm=new ht;class gb{constructor(e,n,i=0,r=1/0){this.ray=new Bf(e,n),this.near=i,this.far=r,this.camera=null,this.layers=new Hf,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,n){this.ray.set(e,n)}setFromCamera(e,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):console.error("THREE.Raycaster: Unsupported camera type: "+n.type)}setFromXRController(e){return zm.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(zm),this}intersectObject(e,n=!0,i=[]){return Fd(e,this,i,n),i.sort(Bm),i}intersectObjects(e,n=!0,i=[]){for(let r=0,s=e.length;r<s;r++)Fd(e[r],this,i,n);return i.sort(Bm),i}}function Bm(t,e){return t.distance-e.distance}function Fd(t,e,n,i){if(t.layers.test(e.layers)&&t.raycast(e,n),i===!0){const r=t.children;for(let s=0,a=r.length;s<a;s++)Fd(r[s],e,n,!0)}}class Hm{constructor(e=1,n=0,i=0){return this.radius=e,this.phi=n,this.theta=i,this}set(e,n,i){return this.radius=e,this.phi=n,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,n,i){return this.radius=Math.sqrt(e*e+n*n+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Gt(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Of}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Of);const Gm={type:"change"},Ru={type:"start"},Vm={type:"end"},rl=new Bf,jm=new Vi,xb=Math.cos(70*Od.DEG2RAD);class vb extends Gr{constructor(e,n){super(),this.object=e,this.domElement=n,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new U,this.cursor=new U,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:$r.ROTATE,MIDDLE:$r.DOLLY,RIGHT:$r.PAN},this.touches={ONE:qr.ROTATE,TWO:qr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(R){R.addEventListener("keydown",Ne),this._domElementKeyEvents=R},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",Ne),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(Gm),i.update(),s=r.NONE},this.update=function(){const R=new U,ee=new zr().setFromUnitVectors(e.up,new U(0,1,0)),Ee=ee.clone().invert(),L=new U,ce=new zr,G=new U,se=2*Math.PI;return function(We=null){const st=i.object.position;R.copy(st).sub(i.target),R.applyQuaternion(ee),o.setFromVector3(R),i.autoRotate&&s===r.NONE&&K(S(We)),i.enableDamping?(o.theta+=l.theta*i.dampingFactor,o.phi+=l.phi*i.dampingFactor):(o.theta+=l.theta,o.phi+=l.phi);let rt=i.minAzimuthAngle,pt=i.maxAzimuthAngle;isFinite(rt)&&isFinite(pt)&&(rt<-Math.PI?rt+=se:rt>Math.PI&&(rt-=se),pt<-Math.PI?pt+=se:pt>Math.PI&&(pt-=se),rt<=pt?o.theta=Math.max(rt,Math.min(pt,o.theta)):o.theta=o.theta>(rt+pt)/2?Math.max(rt,o.theta):Math.min(pt,o.theta)),o.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,o.phi)),o.makeSafe(),i.enableDamping===!0?i.target.addScaledVector(d,i.dampingFactor):i.target.add(d),i.target.sub(i.cursor),i.target.clampLength(i.minTargetRadius,i.maxTargetRadius),i.target.add(i.cursor);let et=!1;if(i.zoomToCursor&&A||i.object.isOrthographicCamera)o.radius=F(o.radius);else{const dt=o.radius;o.radius=F(o.radius*c),et=dt!=o.radius}if(R.setFromSpherical(o),R.applyQuaternion(Ee),st.copy(i.target).add(R),i.object.lookAt(i.target),i.enableDamping===!0?(l.theta*=1-i.dampingFactor,l.phi*=1-i.dampingFactor,d.multiplyScalar(1-i.dampingFactor)):(l.set(0,0,0),d.set(0,0,0)),i.zoomToCursor&&A){let dt=null;if(i.object.isPerspectiveCamera){const At=R.length();dt=F(At*c);const kn=At-dt;i.object.position.addScaledVector(E,kn),i.object.updateMatrixWorld(),et=!!kn}else if(i.object.isOrthographicCamera){const At=new U(P.x,P.y,0);At.unproject(i.object);const kn=i.object.zoom;i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/c)),i.object.updateProjectionMatrix(),et=kn!==i.object.zoom;const Li=new U(P.x,P.y,0);Li.unproject(i.object),i.object.position.sub(Li).add(At),i.object.updateMatrixWorld(),dt=R.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),i.zoomToCursor=!1;dt!==null&&(this.screenSpacePanning?i.target.set(0,0,-1).transformDirection(i.object.matrix).multiplyScalar(dt).add(i.object.position):(rl.origin.copy(i.object.position),rl.direction.set(0,0,-1).transformDirection(i.object.matrix),Math.abs(i.object.up.dot(rl.direction))<xb?e.lookAt(i.target):(jm.setFromNormalAndCoplanarPoint(i.object.up,i.target),rl.intersectPlane(jm,i.target))))}else if(i.object.isOrthographicCamera){const dt=i.object.zoom;i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/c)),dt!==i.object.zoom&&(i.object.updateProjectionMatrix(),et=!0)}return c=1,A=!1,et||L.distanceToSquared(i.object.position)>a||8*(1-ce.dot(i.object.quaternion))>a||G.distanceToSquared(i.target)>a?(i.dispatchEvent(Gm),L.copy(i.object.position),ce.copy(i.object.quaternion),G.copy(i.target),!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",Pe),i.domElement.removeEventListener("pointerdown",Ge),i.domElement.removeEventListener("pointercancel",b),i.domElement.removeEventListener("wheel",Z),i.domElement.removeEventListener("pointermove",at),i.domElement.removeEventListener("pointerup",b),i.domElement.getRootNode().removeEventListener("keydown",ne,{capture:!0}),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener("keydown",Ne),i._domElementKeyEvents=null)};const i=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=r.NONE;const a=1e-6,o=new Hm,l=new Hm;let c=1;const d=new U,h=new we,f=new we,m=new we,_=new we,M=new we,p=new we,u=new we,v=new we,x=new we,E=new U,P=new we;let A=!1;const w=[],D={};let $=!1;function S(R){return R!==null?2*Math.PI/60*i.autoRotateSpeed*R:2*Math.PI/60/60*i.autoRotateSpeed}function C(R){const ee=Math.abs(R*.01);return Math.pow(.95,i.zoomSpeed*ee)}function K(R){l.theta-=R}function Q(R){l.phi-=R}const I=function(){const R=new U;return function(Ee,L){R.setFromMatrixColumn(L,0),R.multiplyScalar(-Ee),d.add(R)}}(),q=function(){const R=new U;return function(Ee,L){i.screenSpacePanning===!0?R.setFromMatrixColumn(L,1):(R.setFromMatrixColumn(L,0),R.crossVectors(i.object.up,R)),R.multiplyScalar(Ee),d.add(R)}}(),z=function(){const R=new U;return function(Ee,L){const ce=i.domElement;if(i.object.isPerspectiveCamera){const G=i.object.position;R.copy(G).sub(i.target);let se=R.length();se*=Math.tan(i.object.fov/2*Math.PI/180),I(2*Ee*se/ce.clientHeight,i.object.matrix),q(2*L*se/ce.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(I(Ee*(i.object.right-i.object.left)/i.object.zoom/ce.clientWidth,i.object.matrix),q(L*(i.object.top-i.object.bottom)/i.object.zoom/ce.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function W(R){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?c/=R:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function N(R){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?c*=R:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function B(R,ee){if(!i.zoomToCursor)return;A=!0;const Ee=i.domElement.getBoundingClientRect(),L=R-Ee.left,ce=ee-Ee.top,G=Ee.width,se=Ee.height;P.x=L/G*2-1,P.y=-(ce/se)*2+1,E.set(P.x,P.y,1).unproject(i.object).sub(i.object.position).normalize()}function F(R){return Math.max(i.minDistance,Math.min(i.maxDistance,R))}function te(R){h.set(R.clientX,R.clientY)}function ae(R){B(R.clientX,R.clientX),u.set(R.clientX,R.clientY)}function Ae(R){_.set(R.clientX,R.clientY)}function O(R){f.set(R.clientX,R.clientY),m.subVectors(f,h).multiplyScalar(i.rotateSpeed);const ee=i.domElement;K(2*Math.PI*m.x/ee.clientHeight),Q(2*Math.PI*m.y/ee.clientHeight),h.copy(f),i.update()}function J(R){v.set(R.clientX,R.clientY),x.subVectors(v,u),x.y>0?W(C(x.y)):x.y<0&&N(C(x.y)),u.copy(v),i.update()}function re(R){M.set(R.clientX,R.clientY),p.subVectors(M,_).multiplyScalar(i.panSpeed),z(p.x,p.y),_.copy(M),i.update()}function de(R){B(R.clientX,R.clientY),R.deltaY<0?N(C(R.deltaY)):R.deltaY>0&&W(C(R.deltaY)),i.update()}function ye(R){let ee=!1;switch(R.code){case i.keys.UP:R.ctrlKey||R.metaKey||R.shiftKey?Q(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):z(0,i.keyPanSpeed),ee=!0;break;case i.keys.BOTTOM:R.ctrlKey||R.metaKey||R.shiftKey?Q(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):z(0,-i.keyPanSpeed),ee=!0;break;case i.keys.LEFT:R.ctrlKey||R.metaKey||R.shiftKey?K(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):z(i.keyPanSpeed,0),ee=!0;break;case i.keys.RIGHT:R.ctrlKey||R.metaKey||R.shiftKey?K(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):z(-i.keyPanSpeed,0),ee=!0;break}ee&&(R.preventDefault(),i.update())}function fe(R){if(w.length===1)h.set(R.pageX,R.pageY);else{const ee=ge(R),Ee=.5*(R.pageX+ee.x),L=.5*(R.pageY+ee.y);h.set(Ee,L)}}function He(R){if(w.length===1)_.set(R.pageX,R.pageY);else{const ee=ge(R),Ee=.5*(R.pageX+ee.x),L=.5*(R.pageY+ee.y);_.set(Ee,L)}}function Se(R){const ee=ge(R),Ee=R.pageX-ee.x,L=R.pageY-ee.y,ce=Math.sqrt(Ee*Ee+L*L);u.set(0,ce)}function k(R){i.enableZoom&&Se(R),i.enablePan&&He(R)}function ct(R){i.enableZoom&&Se(R),i.enableRotate&&fe(R)}function Me(R){if(w.length==1)f.set(R.pageX,R.pageY);else{const Ee=ge(R),L=.5*(R.pageX+Ee.x),ce=.5*(R.pageY+Ee.y);f.set(L,ce)}m.subVectors(f,h).multiplyScalar(i.rotateSpeed);const ee=i.domElement;K(2*Math.PI*m.x/ee.clientHeight),Q(2*Math.PI*m.y/ee.clientHeight),h.copy(f)}function Ie(R){if(w.length===1)M.set(R.pageX,R.pageY);else{const ee=ge(R),Ee=.5*(R.pageX+ee.x),L=.5*(R.pageY+ee.y);M.set(Ee,L)}p.subVectors(M,_).multiplyScalar(i.panSpeed),z(p.x,p.y),_.copy(M)}function Re(R){const ee=ge(R),Ee=R.pageX-ee.x,L=R.pageY-ee.y,ce=Math.sqrt(Ee*Ee+L*L);v.set(0,ce),x.set(0,Math.pow(v.y/u.y,i.zoomSpeed)),W(x.y),u.copy(v);const G=(R.pageX+ee.x)*.5,se=(R.pageY+ee.y)*.5;B(G,se)}function Ye(R){i.enableZoom&&Re(R),i.enablePan&&Ie(R)}function Ue(R){i.enableZoom&&Re(R),i.enableRotate&&Me(R)}function Ge(R){i.enabled!==!1&&(w.length===0&&(i.domElement.setPointerCapture(R.pointerId),i.domElement.addEventListener("pointermove",at),i.domElement.addEventListener("pointerup",b)),!je(R)&&(ue(R),R.pointerType==="touch"?oe(R):y(R)))}function at(R){i.enabled!==!1&&(R.pointerType==="touch"?he(R):j(R))}function b(R){switch(ut(R),w.length){case 0:i.domElement.releasePointerCapture(R.pointerId),i.domElement.removeEventListener("pointermove",at),i.domElement.removeEventListener("pointerup",b),i.dispatchEvent(Vm),s=r.NONE;break;case 1:const ee=w[0],Ee=D[ee];oe({pointerId:ee,pageX:Ee.x,pageY:Ee.y});break}}function y(R){let ee;switch(R.button){case 0:ee=i.mouseButtons.LEFT;break;case 1:ee=i.mouseButtons.MIDDLE;break;case 2:ee=i.mouseButtons.RIGHT;break;default:ee=-1}switch(ee){case $r.DOLLY:if(i.enableZoom===!1)return;ae(R),s=r.DOLLY;break;case $r.ROTATE:if(R.ctrlKey||R.metaKey||R.shiftKey){if(i.enablePan===!1)return;Ae(R),s=r.PAN}else{if(i.enableRotate===!1)return;te(R),s=r.ROTATE}break;case $r.PAN:if(R.ctrlKey||R.metaKey||R.shiftKey){if(i.enableRotate===!1)return;te(R),s=r.ROTATE}else{if(i.enablePan===!1)return;Ae(R),s=r.PAN}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(Ru)}function j(R){switch(s){case r.ROTATE:if(i.enableRotate===!1)return;O(R);break;case r.DOLLY:if(i.enableZoom===!1)return;J(R);break;case r.PAN:if(i.enablePan===!1)return;re(R);break}}function Z(R){i.enabled===!1||i.enableZoom===!1||s!==r.NONE||(R.preventDefault(),i.dispatchEvent(Ru),de(ie(R)),i.dispatchEvent(Vm))}function ie(R){const ee=R.deltaMode,Ee={clientX:R.clientX,clientY:R.clientY,deltaY:R.deltaY};switch(ee){case 1:Ee.deltaY*=16;break;case 2:Ee.deltaY*=100;break}return R.ctrlKey&&!$&&(Ee.deltaY*=10),Ee}function ne(R){R.key==="Control"&&($=!0,i.domElement.getRootNode().addEventListener("keyup",Oe,{passive:!0,capture:!0}))}function Oe(R){R.key==="Control"&&($=!1,i.domElement.getRootNode().removeEventListener("keyup",Oe,{passive:!0,capture:!0}))}function Ne(R){i.enabled===!1||i.enablePan===!1||ye(R)}function oe(R){switch(ve(R),w.length){case 1:switch(i.touches.ONE){case qr.ROTATE:if(i.enableRotate===!1)return;fe(R),s=r.TOUCH_ROTATE;break;case qr.PAN:if(i.enablePan===!1)return;He(R),s=r.TOUCH_PAN;break;default:s=r.NONE}break;case 2:switch(i.touches.TWO){case qr.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;k(R),s=r.TOUCH_DOLLY_PAN;break;case qr.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;ct(R),s=r.TOUCH_DOLLY_ROTATE;break;default:s=r.NONE}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(Ru)}function he(R){switch(ve(R),s){case r.TOUCH_ROTATE:if(i.enableRotate===!1)return;Me(R),i.update();break;case r.TOUCH_PAN:if(i.enablePan===!1)return;Ie(R),i.update();break;case r.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;Ye(R),i.update();break;case r.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;Ue(R),i.update();break;default:s=r.NONE}}function Pe(R){i.enabled!==!1&&R.preventDefault()}function ue(R){w.push(R.pointerId)}function ut(R){delete D[R.pointerId];for(let ee=0;ee<w.length;ee++)if(w[ee]==R.pointerId){w.splice(ee,1);return}}function je(R){for(let ee=0;ee<w.length;ee++)if(w[ee]==R.pointerId)return!0;return!1}function ve(R){let ee=D[R.pointerId];ee===void 0&&(ee=new we,D[R.pointerId]=ee),ee.set(R.pageX,R.pageY)}function ge(R){const ee=R.pointerId===w[0]?w[1]:w[0];return D[ee]}i.domElement.addEventListener("contextmenu",Pe),i.domElement.addEventListener("pointerdown",Ge),i.domElement.addEventListener("pointercancel",b),i.domElement.addEventListener("wheel",Z,{passive:!1}),i.domElement.getRootNode().addEventListener("keydown",ne,{passive:!0,capture:!0}),this.update()}}const jx={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class fo{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const _b=new Vf(-1,1,1,-1,0,1);class yb extends ui{constructor(){super(),this.setAttribute("position",new In([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new In([0,2,0,0,2,0],2))}}const Sb=new yb;class Wx{constructor(e){this._mesh=new Rt(Sb,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,_b)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class Mb extends fo{constructor(e,n){super(),this.textureID=n!==void 0?n:"tDiffuse",e instanceof dn?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Kl.clone(e.uniforms),this.material=new dn({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Wx(this.material)}render(e,n,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Wm extends fo{constructor(e,n){super(),this.scene=e,this.camera=n,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,n,i){const r=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),s.buffers.stencil.setFunc(r.ALWAYS,a,4294967295),s.buffers.stencil.setClear(o),s.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(r.EQUAL,1,4294967295),s.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),s.buffers.stencil.setLocked(!0)}}class Eb extends fo{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class wb{constructor(e,n){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),n===void 0){const i=e.getSize(new we);this._width=i.width,this._height=i.height,n=new Jn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Ti}),n.texture.name="EffectComposer.rt1"}else this._width=n.width,this._height=n.height;this.renderTarget1=n,this.renderTarget2=n.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Mb(jx),this.copyPass.material.blending=Ei,this.clock=new mb}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,n){this.passes.splice(n,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const n=this.passes.indexOf(e);n!==-1&&this.passes.splice(n,1)}isLastEnabledPass(e){for(let n=e+1;n<this.passes.length;n++)if(this.passes[n].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const n=this.renderer.getRenderTarget();let i=!1;for(let r=0,s=this.passes.length;r<s;r++){const a=this.passes[r];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(r),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),a.needsSwap){if(i){const o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Wm!==void 0&&(a instanceof Wm?i=!0:a instanceof Eb&&(i=!1))}}this.renderer.setRenderTarget(n)}reset(e){if(e===void 0){const n=this.renderer.getSize(new we);this._pixelRatio=this.renderer.getPixelRatio(),this._width=n.width,this._height=n.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,n){this._width=e,this._height=n;const i=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(i,r),this.renderTarget2.setSize(i,r);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(i,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class Tb extends fo{constructor(e,n,i=null,r=null,s=null){super(),this.scene=e,this.camera=n,this.overrideMaterial=i,this.clearColor=r,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new $e}render(e,n,i){const r=e.autoClear;e.autoClear=!1;let s,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor)),this.clearAlpha!==null&&(s=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=r}}const bb={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new $e(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			vec3 luma = vec3( 0.299, 0.587, 0.114 );

			float v = dot( texel.xyz, luma );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class Zs extends fo{constructor(e,n,i,r){super(),this.strength=n!==void 0?n:1,this.radius=i,this.threshold=r,this.resolution=e!==void 0?new we(e.x,e.y):new we(256,256),this.clearColor=new $e(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new Jn(s,a,{type:Ti}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){const f=new Jn(s,a,{type:Ti});f.texture.name="UnrealBloomPass.h"+h,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);const m=new Jn(s,a,{type:Ti});m.texture.name="UnrealBloomPass.v"+h,m.texture.generateMipmaps=!1,this.renderTargetsVertical.push(m),s=Math.round(s/2),a=Math.round(a/2)}const o=bb;this.highPassUniforms=Kl.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=r,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new dn({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];s=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new we(1/s,1/a),s=Math.round(s/2),a=Math.round(a/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=n,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new U(1,1,1),new U(1,1,1),new U(1,1,1),new U(1,1,1),new U(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const d=jx;this.copyUniforms=Kl.clone(d.uniforms),this.blendMaterial=new dn({uniforms:this.copyUniforms,vertexShader:d.vertexShader,fragmentShader:d.fragmentShader,blending:bd,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new $e,this.oldClearAlpha=1,this.basic=new Rr,this.fsQuad=new Wx(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,n){let i=Math.round(e/2),r=Math.round(n/2);this.renderTargetBright.setSize(i,r);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(i,r),this.renderTargetsVertical[s].setSize(i,r),this.separableBlurMaterials[s].uniforms.invSize.value=new we(1/i,1/r),i=Math.round(i/2),r=Math.round(r/2)}render(e,n,i,r,s){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),s&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=i.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=Zs.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=Zs.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),o=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(i),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=a}getSeperableBlurMaterial(e){const n=[];for(let i=0;i<e;i++)n.push(.39894*Math.exp(-.5*i*i/(e*e))/e);return new dn({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new we(.5,.5)},direction:{value:new we(.5,.5)},gaussianCoefficients:{value:n}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(e){return new dn({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}Zs.BlurDirectionX=new we(1,0);Zs.BlurDirectionY=new we(0,1);const Pu=()=>typeof window>"u"?!1:/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)||window.innerWidth<768,Ab=({floors:t,selectedFloorId:e,cameraPreset:n,elevators:i,graphicsQuality:r="high",onSelectFloor:s})=>{const a=me.useRef(null),o=me.useRef(null),l=me.useRef(null),c=me.useRef(null),d=me.useRef(null),h=me.useRef(null),f=me.useRef(new Ns),m=me.useRef(new Ns),_=me.useRef(new U(45,150,80)),M=me.useRef(new U(0,150,0)),p=me.useRef(null),u=me.useRef(null),[v,x]=me.useState(null),[E,P]=me.useState({x:0,y:0}),A=me.useRef(t),w=me.useRef(i),D=me.useRef(r),$=me.useRef(null),S=me.useRef(null),C=me.useRef(null),K=me.useRef(null),Q=me.useRef(null),I=me.useRef(null),q=me.useRef(null),z=me.useRef(null),W=me.useRef(null),N=me.useRef(null),B=me.useRef(null),F=me.useRef([]),[te,ae]=me.useState(!1);me.useEffect(()=>{A.current=t},[t]),me.useEffect(()=>{w.current=i},[i]),me.useEffect(()=>{D.current=r},[r]);const Ae=me.useCallback(O=>{const J=$.current,re=S.current,de=C.current,ye=K.current,fe=Q.current,He=I.current,Se=q.current,k=z.current,ct=W.current,Me=N.current,Ie=B.current,Re=F.current;if(!J||!re||!de)return;const Ye=Math.max(1,O-8),Ue=Math.min(100,O+8),Ge=Pu(),b=D.current==="low"?0:Ge?1:2,y=new zt;for(let j=1;j<=100;j++){const Z=Math.abs(j-O),ie=j>=Ye&&j<=Ue,ne=ie,Oe=ie,Ne=ie,oe=ie&&Z<=b,he=(j-1)*3+1.5,Pe=he+.11;y.position.set(0,he,0),ne?y.scale.set(1,1,1):y.scale.set(0,0,0),y.updateMatrix(),J.setMatrixAt(j-1,y.matrix),y.position.set(0,he+.11,0),Oe?y.scale.set(1,1,1):y.scale.set(0,0,0),y.updateMatrix(),re.setMatrixAt(j-1,y.matrix),y.position.set(0,he-.11,0),Ne?y.scale.set(1,1,1):y.scale.set(0,0,0),y.updateMatrix(),de.setMatrixAt(j-1,y.matrix);const ue=[[-4.5,-4.5],[4.5,-4.5],[-4.5,4.5],[4.5,4.5]],ut=[[-3.5,-4.5],[3.5,-4.5],[-3.5,4.5],[3.5,4.5]];ue.forEach(([ve,ge],be)=>{const R=(j-1)*4+be;y.position.set(ve,Pe+.375,ge),oe?y.scale.set(1,1,1):y.scale.set(0,0,0),y.updateMatrix(),ye==null||ye.setMatrixAt(R,y.matrix),y.position.set(ve,Pe+.75+.225,ge-.3),oe?y.scale.set(1,1,1):y.scale.set(0,0,0),y.updateMatrix(),fe==null||fe.setMatrixAt(R,y.matrix);const[ee,Ee]=ut[be];y.position.set(ee,Pe+.35,Ee),oe?y.scale.set(1,1,1):y.scale.set(0,0,0),y.updateMatrix(),He==null||He.setMatrixAt(R,y.matrix)}),y.position.set(0,Pe+.375,-4.5),oe?y.scale.set(1,1,1):y.scale.set(0,0,0),y.updateMatrix(),Se==null||Se.setMatrixAt(j-1,y.matrix),[[-1.2,-4.5],[1.2,-4.5],[0,-3.3],[0,-5.7]].forEach(([ve,ge],be)=>{y.position.set(ve,Pe+.35,ge),oe?y.scale.set(1,1,1):y.scale.set(0,0,0),y.updateMatrix(),k==null||k.setMatrixAt((j-1)*4+be,y.matrix)});for(let ve=0;ve<2;ve++){const ge=(j-1)*2+ve;y.position.set(-4.5,Pe+.25,ve===0?1.2:-1.2),oe?y.scale.set(1,1,1):y.scale.set(0,0,0),y.updateMatrix(),ct==null||ct.setMatrixAt(ge,y.matrix)}y.position.set(-4.5,Pe+.2,0),oe?y.scale.set(1,1,1):y.scale.set(0,0,0),y.updateMatrix(),Me==null||Me.setMatrixAt(j-1,y.matrix);for(let ve=0;ve<2;ve++){const ge=(j-1)*2+ve;y.position.set(ve===0?-1.5:1.5,Pe+1.25,1.26),oe?y.scale.set(1,1,1):y.scale.set(0,0,0),y.updateMatrix(),Ie==null||Ie.setMatrixAt(ge,y.matrix)}Re[j-1]&&(Re[j-1].visible=ie&&Z<=5)}J.instanceMatrix.needsUpdate=!0,re.instanceMatrix.needsUpdate=!0,de.instanceMatrix.needsUpdate=!0,ye&&(ye.instanceMatrix.needsUpdate=!0),fe&&(fe.instanceMatrix.needsUpdate=!0),He&&(He.instanceMatrix.needsUpdate=!0),Se&&(Se.instanceMatrix.needsUpdate=!0),k&&(k.instanceMatrix.needsUpdate=!0),ct&&(ct.instanceMatrix.needsUpdate=!0),Me&&(Me.instanceMatrix.needsUpdate=!0),Ie&&(Ie.instanceMatrix.needsUpdate=!0)},[]);return me.useEffect(()=>{te&&Ae(e)},[e,te,Ae]),me.useEffect(()=>{if(!a.current)return;const O=Pu(),J=a.current.clientWidth,re=a.current.clientHeight,de=new sb;de.background=new $e("#020617"),de.fog=new Wf("#020617",.0025),o.current=de;const ye=new _n(45,J/re,.5,1e3);ye.position.set(45,150,80),l.current=ye;const fe=new Bx({antialias:!O&&D.current!=="low",alpha:!0,powerPreference:"high-performance"});fe.setSize(J,re);const He=O?.8:1,Se=O?1.3:2;fe.setPixelRatio(Math.min(Se,Math.max(He,window.devicePixelRatio))),O?fe.toneMapping=wi:(fe.toneMapping=ux,fe.toneMappingExposure=1.2),fe.shadowMap.enabled=!O&&D.current!=="low",fe.shadowMap.type=lx,a.current.appendChild(fe.domElement),c.current=fe;const k=new vb(ye,fe.domElement);k.enableDamping=!0,k.dampingFactor=.05,k.maxPolarAngle=Math.PI/2+.05,k.minDistance=12,k.maxDistance=400,k.target.set(0,150,0),d.current=k;const ct=new pb("#1e293b",1.2);de.add(ct);const Me=new km("#fffbeb",3.5);Me.position.set(100,250,100),Me.castShadow=!O&&D.current!=="low",Me.shadow.mapSize.width=O?512:D.current==="high"?2048:1024,Me.shadow.mapSize.height=O?512:D.current==="high"?2048:1024,de.add(Me);const Ie=new fb("#06b6d4",4,150);Ie.position.set(0,150,0),de.add(Ie),de.add(f.current),m.current.visible=D.current!=="low",de.add(m.current);const Re=new Ot(16,.22,16),Ye=O?new Cn({color:"#0284c7",transparent:!0,opacity:.55,roughness:.8,metalness:.1}):new bu({color:"#0284c7",transparent:!0,opacity:.35,roughness:.1,metalness:.9,transmission:.7,ior:1.5,side:Xn}),Ue=new Gn(Re,Ye,100),Ge=new Ot(16.15,.1,16.15),at=new Cn({color:"#475569",metalness:O?.2:.85,roughness:O?.8:.2}),b=new Gn(Ge,at,100),y=new Ot(16.22,.05,16.22),j=new Rr({color:"#38bdf8"}),Z=new Gn(y,j,100),ie=new Ot(2,.75,1),ne=new Cn({color:"#1e293b",roughness:.7,metalness:.1}),Oe=new Gn(ie,ne,400),Ne=new Ot(.8,.45,.05),oe=new Rr({color:"#06b6d4"}),he=new Gn(Ne,oe,400),Pe=new Ot(.5,.7,.5),ue=new Cn({color:"#475569",roughness:.8}),ut=new Gn(Pe,ue,400),je=new Ql(1.4,1.4,.75,8),ve=new Cn({color:"#0f172a",metalness:O?.2:.8,roughness:.4}),ge=new Gn(je,ve,100),be=new Gn(Pe,ue,400),R=new Ot(1.6,.5,.7),ee=new Cn({color:"#1e3a8a",roughness:.7}),Ee=new Gn(R,ee,200),L=new Ot(.9,.4,.6),ce=new Cn({color:"#334155",roughness:.6,metalness:.2}),G=new Gn(L,ce,100),se=new Ot(2.4,2.5,.1),xe=new Cn({color:"#06b6d4",transparent:!0,opacity:.35,metalness:.2,roughness:.6}),We=new Gn(se,xe,200);de.add(Ue),de.add(b),de.add(Z),de.add(Oe),de.add(he),de.add(ut),de.add(ge),de.add(be),de.add(Ee),de.add(G),de.add(We),$.current=Ue,S.current=b,C.current=Z,K.current=Oe,Q.current=he,I.current=ut,q.current=ge,z.current=be,W.current=Ee,N.current=G,B.current=We,[[-8.1,-8.1],[8.1,-8.1],[-8.1,8.1],[8.1,8.1]].forEach(([ze,Ze])=>{const Be=new Ql(.18,.18,300,6),De=new Cn({color:"#1e293b",metalness:O?.1:.8,roughness:.5}),Xt=new Rt(Be,De);Xt.position.set(ze,150,Ze),de.add(Xt)});const rt=new Ot(2.5,300,2.5),pt=O?new Cn({color:"#06b6d4",transparent:!0,opacity:.15,roughness:.8}):new bu({color:"#06b6d4",transparent:!0,opacity:.12,roughness:.1,metalness:.9,transmission:.85,ior:1.5,side:Xn}),et=new Rt(rt,pt);et.position.set(-1.5,150,0),de.add(et);const dt=new Rt(rt,pt);dt.position.set(1.5,150,0),de.add(dt);const At=new Ot(2.2,2.5,2.2),kn=O?new Cn({color:"#06b6d4",transparent:!0,opacity:.7,roughness:.8}):new bu({color:"#06b6d4",transparent:!0,opacity:.65,roughness:.1,metalness:.8,emissive:"#0891b2",emissiveIntensity:.5}),Li=new Rt(At,kn);Li.name="elevator_car_A",Li.position.set(-1.5,10,0),f.current.add(Li);const Di=new Rt(At,kn);Di.name="elevator_car_B",Di.position.set(1.5,150,0),f.current.add(Di);const jr=[];for(let ze=1;ze<=100;ze++){const Ze=document.createElement("canvas");Ze.width=128,Ze.height=64;const Be=Ze.getContext("2d");Be&&(Be.fillStyle="rgba(0,0,0,0)",Be.fillRect(0,0,128,64),Be.font="bold 38px Rajdhani, sans-serif",Be.fillStyle="#38bdf8",Be.textAlign="center",Be.textBaseline="middle",Be.fillText(`FL ${ze}`,64,32));const De=new ub(Ze),Xt=new Hx({map:De,transparent:!0}),Je=new ob(Xt);Je.scale.set(3,1.5,1),Je.position.set(9.5,(ze-1)*3+1.5,0),m.current.add(Je),jr.push(Je)}F.current=jr;const fr=new Ot(16.5,.4,16.5),ia=new Rr({color:"#f59e0b",wireframe:!0}),Wr=new Rt(fr,ia);Wr.visible=!1,de.add(Wr),p.current=Wr;const po=new Ot(16.4,.35,16.4),mo=new Rr({color:"#38bdf8",wireframe:!0,transparent:!0,opacity:.8}),ra=new Rt(po,mo);ra.visible=!1,de.add(ra),u.current=ra;const T=new wb(fe),H=new Tb(de,ye);T.addPass(H);const X=new Zs(new we(J,re),O?.39:1.3,.45,.85);T.addPass(X),h.current=T;const Y=new gb,V=new we,_e=ze=>{if(!a.current||!l.current)return;const Ze=a.current.getBoundingClientRect();V.x=(ze.clientX-Ze.left)/Ze.width*2-1,V.y=-((ze.clientY-Ze.top)/Ze.height)*2+1,Y.setFromCamera(V,l.current);const Be=Y.intersectObject(Ue);if(Be.length>0&&Be[0].instanceId!==void 0){const De=Be[0].instanceId+1;s(De)}},Ce=ze=>{if(!a.current||!l.current)return;const Ze=a.current.getBoundingClientRect(),Be=ze.clientX-Ze.left,De=ze.clientY-Ze.top;P({x:Be+15,y:De+15}),V.x=Be/Ze.width*2-1,V.y=-(De/Ze.height)*2+1,Y.setFromCamera(V,l.current);const Xt=Y.intersectObject(Ue);if(Xt.length>0&&Xt[0].instanceId!==void 0){const Je=Xt[0].instanceId+1,Tn=A.current.find(Xr=>Xr.id===Je);if(Tn){if(x({type:"floor",id:Je,name:`Floor ${Je}`,roleOrDept:Tn.departmentName,modelOrCapacity:`${Tn.agents.length} Active Nodes`,statusOrPower:`${Tn.energyUsageKW} kW`}),u.current){const Xr=(Je-1)*3+1.5;u.current.position.set(0,Xr,0),u.current.visible=!0}return}}x(null),u.current&&(u.current.visible=!1)},Le=fe.domElement;Le.addEventListener("pointerdown",_e),Le.addEventListener("pointermove",Ce);const ke=()=>{if(!a.current||!l.current||!c.current||!h.current)return;const ze=a.current.clientWidth,Ze=a.current.clientHeight;l.current.aspect=ze/Ze,l.current.updateProjectionMatrix(),c.current.setSize(ze,Ze),h.current.setSize(ze,Ze)};window.addEventListener("resize",ke),ae(!0);let Xe,Fe=0;const Ve=new U,_t=new U,Wt=()=>{var De;Xe=requestAnimationFrame(Wt);let ze=!1;if(l.current&&d.current){const Xt=l.current.position.distanceTo(_.current),Je=d.current.target.distanceTo(M.current);(Xt>.005||Je>.005)&&(l.current.position.lerp(_.current,.04),d.current.target.lerp(M.current,.04),ze=!0),(d.current.update()||d.current.state!==-1)&&(ze=!0)}const Ze=f.current.getObjectByName("elevator_car_A"),Be=f.current.getObjectByName("elevator_car_B");Ze&&w.current[0]&&Math.abs(Ze.position.y-w.current[0].posY)>.01&&(Ze.position.y=Od.lerp(Ze.position.y,w.current[0].posY,.1),ze=!0),Be&&w.current[1]&&Math.abs(Be.position.y-w.current[1].posY)>.01&&(Be.position.y=Od.lerp(Be.position.y,w.current[1].posY,.1),ze=!0),l.current&&(l.current.position.distanceTo(Ve)>.001&&(ze=!0,Ve.copy(l.current.position)),d.current&&d.current.target.distanceTo(_t)>.001&&(ze=!0,_t.copy(d.current.target))),ze?Fe=0:Fe++,Fe<45&&(D.current==="high"&&h.current&&!O?h.current.render():(De=c.current)==null||De.render(de,ye))};return Wt(),()=>{cancelAnimationFrame(Xe),window.removeEventListener("resize",ke),Le.removeEventListener("pointerdown",_e),Le.removeEventListener("pointermove",Ce),Re.dispose(),Ye.dispose(),Ue.dispose(),Ge.dispose(),at.dispose(),b.dispose(),y.dispose(),j.dispose(),Z.dispose(),ie.dispose(),ne.dispose(),Oe.dispose(),Ne.dispose(),oe.dispose(),he.dispose(),Pe.dispose(),ue.dispose(),ut.dispose(),je.dispose(),ve.dispose(),ge.dispose(),be.dispose(),R.dispose(),ee.dispose(),Ee.dispose(),L.dispose(),ce.dispose(),G.dispose(),se.dispose(),xe.dispose(),We.dispose(),At.dispose(),kn.dispose(),rt.dispose(),pt.dispose(),fr.dispose(),ia.dispose(),po.dispose(),mo.dispose(),jr.forEach(ze=>{var Ze;(Ze=ze.material.map)==null||Ze.dispose(),ze.material.dispose()}),c.current&&c.current.domElement&&c.current.domElement.remove()}},[]),me.useEffect(()=>{if(!c.current||!o.current)return;const O=Pu(),J=r==="low",re=r==="medium",de=r==="high",ye=O?.8:1,fe=J?1:re?1.3:2;c.current.setPixelRatio(Math.min(fe,Math.max(ye,window.devicePixelRatio)));const He=!J&&!O;c.current.shadowMap.enabled=He,o.current.traverse(Se=>{var k;Se instanceof km&&(Se.castShadow=He,Se.shadow.mapSize.width=de?2048:1024,Se.shadow.mapSize.height=de?2048:1024,(k=Se.shadow.map)==null||k.dispose(),Se.shadow.map=null),Se instanceof Rt&&(Se.castShadow=He,Se.receiveShadow=He,Se.material&&(Array.isArray(Se.material)?Se.material:[Se.material]).forEach(Me=>{Me.needsUpdate=!0}))}),Ae(e)},[r,e,Ae]),me.useEffect(()=>{const O=(e-1)*3+1.5;p.current&&(p.current.position.set(0,O,0),p.current.visible=!0),n==="floor_focus"?(_.current.set(22,O+6,26),M.current.set(0,O,0)):n==="full_skyscraper"?(_.current.set(45,150,80),M.current.set(0,150,0)):n==="sky_lounge"?(_.current.set(24,290,28),M.current.set(0,285,0)):n==="interior_cutaway"&&(_.current.set(0,O+18,.1),M.current.set(0,O,0))},[e,n]),g.jsxs("div",{ref:a,className:"relative w-full h-full cursor-grab active:cursor-grabbing select-none font-sans",children:[g.jsx("div",{className:"absolute top-4 left-4 pointer-events-none flex flex-col gap-2 z-10",children:g.jsxs("div",{className:"px-3 py-1.5 rounded-lg bg-slate-950/80 border border-cyan-500/30 backdrop-blur-md text-[10px] text-cyan-400 font-mono flex items-center gap-2 shadow-lg",children:[g.jsx("span",{className:"w-2 h-2 rounded-full bg-cyan-400 animate-pulse"}),"SYSTEM HQ: MOBILE ADAPTIVE 3D RENDERER ACTIVE"]})}),v&&g.jsxs("div",{className:"absolute z-20 pointer-events-none p-3 rounded-xl border border-cyan-500/40 bg-slate-950/90 backdrop-blur-md text-xs font-mono text-white shadow-[0_4px_20px_rgba(6,182,212,0.3)] animate-fadeIn transition-all",style:{left:`${E.x}px`,top:`${E.y}px`},children:[g.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[g.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping"}),g.jsx("span",{className:"font-extrabold text-blue-100",children:v.name})]}),g.jsx("div",{className:"text-[10px] text-blue-300 mb-0.5",children:v.roleOrDept}),v.modelOrCapacity&&g.jsxs("div",{className:"text-[9px] text-cyan-400/90",children:["Spec/Nodes: ",v.modelOrCapacity]}),v.statusOrPower&&g.jsxs("div",{className:"text-[9px] text-emerald-400/90 mt-0.5",children:["Status/Load: ",v.statusOrPower]})]})]})};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Cb={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rb=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),tt=(t,e)=>{const n=me.forwardRef(({color:i="currentColor",size:r=24,strokeWidth:s=2,absoluteStrokeWidth:a,className:o="",children:l,...c},d)=>me.createElement("svg",{ref:d,...Cb,width:r,height:r,stroke:i,strokeWidth:a?Number(s)*24/Number(r):s,className:["lucide",`lucide-${Rb(t)}`,o].join(" "),...c},[...e.map(([h,f])=>me.createElement(h,f)),...Array.isArray(l)?l:[l]]));return n.displayName=`${t}`,n};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xx=tt("Activity",[["path",{d:"M22 12h-4l-3 9L9 3l-3 9H2",key:"d5dnw9"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pb=tt("AlertTriangle",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z",key:"c3ski4"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nb=tt("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sl=tt("ArrowUpRight",[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lb=tt("Brain",[["path",{d:"M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z",key:"l5xja"}],["path",{d:"M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z",key:"ep3f8r"}],["path",{d:"M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4",key:"1p4c4q"}],["path",{d:"M17.599 6.5a3 3 0 0 0 .399-1.375",key:"tmeiqw"}],["path",{d:"M6.003 5.125A3 3 0 0 0 6.401 6.5",key:"105sqy"}],["path",{d:"M3.477 10.896a4 4 0 0 1 .585-.396",key:"ql3yin"}],["path",{d:"M19.938 10.5a4 4 0 0 1 .585.396",key:"1qfode"}],["path",{d:"M6 18a4 4 0 0 1-1.967-.516",key:"2e4loj"}],["path",{d:"M19.967 17.484A4 4 0 0 1 18 18",key:"159ez6"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xm=tt("Building2",[["path",{d:"M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z",key:"1b4qmf"}],["path",{d:"M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2",key:"i71pzd"}],["path",{d:"M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2",key:"10jefs"}],["path",{d:"M10 6h4",key:"1itunk"}],["path",{d:"M10 10h4",key:"tcdvrf"}],["path",{d:"M10 14h4",key:"kelpxr"}],["path",{d:"M10 18h4",key:"1ulq68"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Db=tt("CheckCircle2",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ib=tt("CheckSquare",[["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}],["path",{d:"M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11",key:"1jnkn4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ub=tt("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ob=tt("CloudLightning",[["path",{d:"M6 16.326A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 .5 8.973",key:"1cez44"}],["path",{d:"m13 12-3 5h4l-3 5",key:"1t22er"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kb=tt("Coffee",[["path",{d:"M17 8h1a4 4 0 1 1 0 8h-1",key:"jx4kbh"}],["path",{d:"M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z",key:"1bxrl0"}],["line",{x1:"6",x2:"6",y1:"2",y2:"4",key:"1cr9l3"}],["line",{x1:"10",x2:"10",y1:"2",y2:"4",key:"170wym"}],["line",{x1:"14",x2:"14",y1:"2",y2:"4",key:"1c5f70"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yx=tt("Cpu",[["rect",{x:"4",y:"4",width:"16",height:"16",rx:"2",key:"1vbyd7"}],["rect",{x:"9",y:"9",width:"6",height:"6",key:"o3kz5p"}],["path",{d:"M15 2v2",key:"13l42r"}],["path",{d:"M15 20v2",key:"15mkzm"}],["path",{d:"M2 15h2",key:"1gxd5l"}],["path",{d:"M2 9h2",key:"1bbxkp"}],["path",{d:"M20 15h2",key:"19e6y8"}],["path",{d:"M20 9h2",key:"19tzq7"}],["path",{d:"M9 2v2",key:"165o2o"}],["path",{d:"M9 20v2",key:"i2bqo8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zd=tt("Crown",[["path",{d:"m2 4 3 12h14l3-12-6 7-4-7-4 7-6-7zm3 16h14",key:"zkxr6b"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fb=tt("Focus",[["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}],["path",{d:"M3 7V5a2 2 0 0 1 2-2h2",key:"aa7l1z"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2",key:"4qcy5o"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2",key:"6vwrx8"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2",key:"ioqczr"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yf=tt("Layers",[["path",{d:"m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z",key:"8b97xw"}],["path",{d:"m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65",key:"dd6zsq"}],["path",{d:"m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65",key:"ep9fru"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zb=tt("LayoutDashboard",[["rect",{width:"7",height:"9",x:"3",y:"3",rx:"1",key:"10lvy0"}],["rect",{width:"7",height:"5",x:"14",y:"3",rx:"1",key:"16une8"}],["rect",{width:"7",height:"9",x:"14",y:"12",rx:"1",key:"1hutg5"}],["rect",{width:"7",height:"5",x:"3",y:"16",rx:"1",key:"ldoo1y"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bb=tt("Megaphone",[["path",{d:"m3 11 18-5v12L3 14v-3z",key:"n962bs"}],["path",{d:"M11.6 16.8a3 3 0 1 1-5.8-1.6",key:"1yl0tm"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $x=tt("MessageSquare",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hb=tt("Network",[["rect",{x:"16",y:"16",width:"6",height:"6",rx:"1",key:"4q2zg0"}],["rect",{x:"2",y:"16",width:"6",height:"6",rx:"1",key:"8cvhb9"}],["rect",{x:"9",y:"2",width:"6",height:"6",rx:"1",key:"1egb70"}],["path",{d:"M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3",key:"1jsf9p"}],["path",{d:"M12 12V8",key:"2874zd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qx=tt("PlayCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polygon",{points:"10 8 16 12 10 16 10 8",key:"1cimsy"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kx=tt("PlusCircle",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 12h8",key:"1wcyev"}],["path",{d:"M12 8v8",key:"napkw2"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ym=tt("Radio",[["path",{d:"M4.9 19.1C1 15.2 1 8.8 4.9 4.9",key:"1vaf9d"}],["path",{d:"M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5",key:"u1ii0m"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}],["path",{d:"M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5",key:"1j5fej"}],["path",{d:"M19.1 4.9C23 8.8 23 15.1 19.1 19",key:"10b0cb"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zx=tt("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gb=tt("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vb=tt("ShieldAlert",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M12 16h.01",key:"1drbdi"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jb=tt("ShieldCheck",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wb=tt("SlidersHorizontal",[["line",{x1:"21",x2:"14",y1:"4",y2:"4",key:"obuewd"}],["line",{x1:"10",x2:"3",y1:"4",y2:"4",key:"1q6298"}],["line",{x1:"21",x2:"12",y1:"12",y2:"12",key:"1iu8h1"}],["line",{x1:"8",x2:"3",y1:"12",y2:"12",key:"ntss68"}],["line",{x1:"21",x2:"16",y1:"20",y2:"20",key:"14d8ph"}],["line",{x1:"12",x2:"3",y1:"20",y2:"20",key:"m0wm8r"}],["line",{x1:"14",x2:"14",y1:"2",y2:"6",key:"14e1ph"}],["line",{x1:"8",x2:"8",y1:"10",y2:"14",key:"1i6ji0"}],["line",{x1:"16",x2:"16",y1:"18",y2:"22",key:"1lctlv"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qx=tt("Terminal",[["polyline",{points:"4 17 10 11 4 5",key:"akl6gq"}],["line",{x1:"12",x2:"20",y1:"19",y2:"19",key:"q2wloq"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jx=tt("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xb=tt("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yb=tt("Volume2",[["polygon",{points:"11 5 6 9 2 9 2 15 6 15 11 19 11 5",key:"16drj5"}],["path",{d:"M15.54 8.46a5 5 0 0 1 0 7.07",key:"ltjumu"}],["path",{d:"M19.07 4.93a10 10 0 0 1 0 14.14",key:"1kegas"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $b=tt("VolumeX",[["polygon",{points:"11 5 6 9 2 9 2 15 6 15 11 19 11 5",key:"16drj5"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15",key:"1ewh16"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15",key:"5ykzw1"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qb=tt("Wifi",[["path",{d:"M12 20h.01",key:"zekei9"}],["path",{d:"M2 8.82a15 15 0 0 1 20 0",key:"dnpr2z"}],["path",{d:"M5 12.859a10 10 0 0 1 14 0",key:"1x1e6c"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0",key:"1bycff"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ho=tt("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $f=tt("Zap",[["polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2",key:"45s27k"}]]);class Kb{constructor(){aa(this,"ctx",null);aa(this,"isMuted",!1)}initCtx(){if(!this.ctx&&typeof window<"u"){const e=window.AudioContext||window.webkitAudioContext;e&&(this.ctx=new e)}this.ctx&&this.ctx.state==="suspended"&&this.ctx.resume().catch(()=>{})}toggleMute(){return this.isMuted=!this.isMuted,this.isMuted}getMuted(){return this.isMuted}playClick(){if(!this.isMuted&&(this.initCtx(),!!this.ctx))try{const e=this.ctx.createOscillator(),n=this.ctx.createGain();e.type="sine",e.frequency.setValueAtTime(800,this.ctx.currentTime),e.frequency.exponentialRampToValueAtTime(1200,this.ctx.currentTime+.04),n.gain.setValueAtTime(.08,this.ctx.currentTime),n.gain.exponentialRampToValueAtTime(.001,this.ctx.currentTime+.04),e.connect(n),n.connect(this.ctx.destination),e.start(),e.stop(this.ctx.currentTime+.04)}catch{}}playFloorChime(e){if(!this.isMuted&&(this.initCtx(),!!this.ctx))try{const n=300+e%20*20,i=this.ctx.createOscillator(),r=this.ctx.createOscillator(),s=this.ctx.createGain();i.type="triangle",r.type="sine",i.frequency.setValueAtTime(n,this.ctx.currentTime),r.frequency.setValueAtTime(n*1.5,this.ctx.currentTime),s.gain.setValueAtTime(.1,this.ctx.currentTime),s.gain.exponentialRampToValueAtTime(.001,this.ctx.currentTime+.25),i.connect(s),r.connect(s),s.connect(this.ctx.destination),i.start(),r.start(),i.stop(this.ctx.currentTime+.25),r.stop(this.ctx.currentTime+.25)}catch{}}playElevatorPulse(){if(!this.isMuted&&(this.initCtx(),!!this.ctx))try{const e=this.ctx.createOscillator(),n=this.ctx.createGain();e.type="sine",e.frequency.setValueAtTime(150,this.ctx.currentTime),e.frequency.exponentialRampToValueAtTime(350,this.ctx.currentTime+.15),n.gain.setValueAtTime(.05,this.ctx.currentTime),n.gain.exponentialRampToValueAtTime(.001,this.ctx.currentTime+.15),e.connect(n),n.connect(this.ctx.destination),e.start(),e.stop(this.ctx.currentTime+.15)}catch{}}playNotification(){if(!this.isMuted&&(this.initCtx(),!!this.ctx))try{const e=this.ctx.createOscillator(),n=this.ctx.createGain();e.type="sine",e.frequency.setValueAtTime(523.25,this.ctx.currentTime),e.frequency.setValueAtTime(659.25,this.ctx.currentTime+.08),e.frequency.setValueAtTime(783.99,this.ctx.currentTime+.16),n.gain.setValueAtTime(.07,this.ctx.currentTime),n.gain.exponentialRampToValueAtTime(.001,this.ctx.currentTime+.35),e.connect(n),n.connect(this.ctx.destination),e.start(),e.stop(this.ctx.currentTime+.35)}catch{}}playAlert(){if(!this.isMuted&&(this.initCtx(),!!this.ctx))try{const e=this.ctx.createOscillator(),n=this.ctx.createGain();e.type="sawtooth",e.frequency.setValueAtTime(880,this.ctx.currentTime),e.frequency.setValueAtTime(440,this.ctx.currentTime+.1),n.gain.setValueAtTime(.12,this.ctx.currentTime),n.gain.exponentialRampToValueAtTime(.001,this.ctx.currentTime+.25),e.connect(n),n.connect(this.ctx.destination),e.start(),e.stop(this.ctx.currentTime+.25)}catch{}}}const nt=new Kb,Zb=({selectedFloorId:t,onSelectFloor:e,cameraPreset:n,onSelectCameraPreset:i,onOpenSearch:r,onOpenCEOControls:s,metrics:a})=>{const[o,l]=me.useState(""),[c,d]=me.useState(nt.getMuted());me.useEffect(()=>{const _=()=>{const u=new Date().toLocaleTimeString("en-US",{hour12:!1,hour:"2-digit",minute:"2-digit",second:"2-digit"});l(u)};_();const M=setInterval(_,1e3);return()=>clearInterval(M)},[]);const h=()=>{const _=nt.toggleMute();d(_),_||nt.playClick()},f=_=>{const M=parseInt(_.target.value,10);e(M),nt.playFloorChime(M)},m=[{name:"Gemini",status:"optimal",delay:"85ms"},{name:"Claude",status:"optimal",delay:"120ms"},{name:"OpenAI",status:"optimal",delay:"140ms"},{name:"DeepSeek",status:"high_load",delay:"310ms"},{name:"Llama",status:"optimal",delay:"45ms"}];return g.jsxs("header",{className:"w-full bg-slate-950/80 border-b border-blue-500/30 backdrop-blur-xl px-4 py-3 flex flex-col lg:flex-row items-center justify-between z-40 select-none shadow-[0_4px_30px_rgba(0,0,0,0.8)] relative overflow-hidden",children:[g.jsx("div",{className:"absolute inset-0 pointer-events-none bg-gradient-to-b from-blue-500/5 to-transparent opacity-30"}),g.jsx("div",{className:"absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent animate-pulse"}),g.jsxs("div",{className:"flex items-center gap-4 w-full lg:w-auto justify-between lg:justify-start mb-3 lg:mb-0",children:[g.jsxs("div",{className:"flex items-center gap-3",children:[g.jsx("div",{className:"p-2 rounded-xl bg-gradient-to-br from-blue-600/20 to-cyan-500/20 border border-blue-500/40 text-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.2)]",children:g.jsx(Xm,{className:"w-6 h-6 animate-pulse"})}),g.jsxs("div",{children:[g.jsxs("div",{className:"flex items-center gap-2",children:[g.jsx("span",{className:"text-lg font-black tracking-wider bg-gradient-to-r from-blue-400 via-cyan-300 to-indigo-400 bg-clip-text text-transparent drop-shadow-[0_0_8px_rgba(34,211,238,0.3)]",children:"NEURAL OFFICE OS"}),g.jsx("span",{className:"px-1.5 py-0.5 rounded bg-blue-500/10 border border-blue-500/30 text-[9px] font-mono text-cyan-300",children:"v5.2-SECURE"})]}),g.jsx("p",{className:"text-[9px] text-blue-300/60 tracking-widest font-mono uppercase",children:"100-Floor Autonomous Sub-System"})]})]}),g.jsx("div",{className:"hidden sm:block h-8 w-px bg-blue-900/40"}),g.jsxs("div",{className:"flex items-center gap-2.5 px-3 py-1.5 rounded-xl bg-gradient-to-r from-blue-950/60 to-slate-900/60 border border-blue-500/30 shadow-[inset_0_0_8px_rgba(59,130,246,0.2)]",children:[g.jsxs("div",{className:"relative",children:[g.jsx("div",{className:"w-8 h-8 rounded-lg bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-slate-950 font-bold text-sm shadow-md ring-1 ring-amber-400/40",children:g.jsx(zd,{className:"w-4 h-4 text-slate-950"})}),g.jsx("span",{className:"absolute -bottom-1 -right-1 w-2.5 h-2.5 bg-emerald-500 border-2 border-slate-950 rounded-full animate-ping"}),g.jsx("span",{className:"absolute -bottom-1 -right-1 w-2.5 h-2.5 bg-emerald-500 border-2 border-slate-950 rounded-full"})]}),g.jsxs("div",{className:"text-left leading-none",children:[g.jsxs("div",{className:"text-xs font-bold text-blue-100 flex items-center gap-1",children:["B. Ismatullayev",g.jsx("span",{className:"text-[8px] bg-amber-400/20 text-amber-300 border border-amber-500/30 px-1 rounded font-extrabold uppercase",children:"CEO"})]}),g.jsx("span",{className:"text-[8px] text-cyan-400/70 font-mono tracking-wider",children:"CLEARANCE LVL 100"})]})]})]}),g.jsxs("div",{className:"flex flex-col sm:flex-row items-center gap-4 w-full lg:w-auto justify-center mb-3 lg:mb-0",children:[g.jsxs("div",{className:"flex items-center gap-3 bg-slate-900/80 px-3 py-2 rounded-xl border border-blue-500/20 backdrop-blur-md w-full sm:w-auto",children:[g.jsxs("div",{className:"flex items-center gap-2 text-xs font-mono text-cyan-400 shrink-0",children:[g.jsx(Yf,{className:"w-4 h-4 text-blue-400"}),g.jsxs("span",{className:"font-bold text-sm text-white",children:["FLR ",t]}),g.jsx("span",{className:"text-blue-500/60",children:"/100"})]}),g.jsx("input",{type:"range",min:"1",max:"100",value:t,onChange:f,className:"w-28 sm:w-36 h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400 hover:accent-cyan-300 transition-all"}),g.jsx("div",{className:"flex gap-1 text-[10px] font-mono shrink-0",children:[1,50,95,100].map(_=>g.jsxs("button",{onClick:()=>{e(_),nt.playFloorChime(_)},className:`px-1.5 py-0.5 rounded transition-all ${t===_?"bg-cyan-500 text-slate-950 font-bold shadow-[0_0_8px_rgba(6,182,212,0.4)]":"bg-slate-800 text-blue-300 hover:text-cyan-300 hover:bg-slate-700"}`,children:["L",_]},_))})]}),g.jsxs("div",{className:"flex items-center gap-1.5 bg-slate-900/50 px-3 py-1.5 rounded-xl border border-blue-900/40 overflow-x-auto max-w-full scrollbar-none",children:[g.jsxs("span",{className:"text-[8px] font-mono text-blue-400 tracking-wider uppercase mr-1 flex items-center gap-1 shrink-0",children:[g.jsx(qb,{className:"w-3 h-3 text-cyan-400 animate-pulse"})," PROVIDERS:"]}),m.map(_=>g.jsxs("div",{className:"flex items-center gap-1 px-1.5 py-0.5 rounded bg-blue-950/40 border border-blue-500/10 text-[9px] font-mono shrink-0",title:`Latency: ${_.delay}`,children:[g.jsx("span",{className:`w-1.5 h-1.5 rounded-full ${_.status==="optimal"?"bg-emerald-400 animate-pulse":"bg-amber-400"}`}),g.jsx("span",{className:"text-blue-200",children:_.name})]},_.name))]})]}),g.jsxs("div",{className:"flex items-center gap-3 w-full lg:w-auto justify-between lg:justify-end",children:[g.jsxs("div",{className:"hidden sm:flex items-center gap-2 font-mono",children:[g.jsxs("div",{className:"px-2.5 py-1 rounded-xl bg-blue-950/30 border border-blue-500/20 text-center",children:[g.jsx("div",{className:"text-[8px] text-blue-400",children:"ACTIVE AGENTS"}),g.jsxs("div",{className:"text-xs font-bold text-cyan-300 flex items-center gap-1 justify-center",children:[g.jsx(Yx,{className:"w-3 h-3 text-cyan-400 animate-spin",style:{animationDuration:"6s"}}),a.activeAgents]})]}),g.jsxs("div",{className:"px-2.5 py-1 rounded-xl bg-blue-950/30 border border-blue-500/20 text-center",children:[g.jsx("div",{className:"text-[8px] text-blue-400",children:"RUNNING TASKS"}),g.jsxs("div",{className:"text-xs font-bold text-indigo-300 flex items-center gap-1 justify-center",children:[g.jsx(Xx,{className:"w-3 h-3 text-indigo-400 animate-pulse"}),a.activeTasks]})]})]}),g.jsx("div",{className:"flex items-center gap-1 bg-slate-900/80 p-1 rounded-xl border border-blue-900/60 shadow-inner",children:[{preset:"full_skyscraper",label:"Full",icon:Xm},{preset:"floor_focus",label:"Floor",icon:Fb},{preset:"agent_focus",label:"Agent",icon:Jx},{preset:"sky_lounge",label:"Sky",icon:zd}].map(({preset:_,label:M,icon:p})=>g.jsxs("button",{onClick:()=>{i(_),nt.playClick()},className:`px-2 py-1 rounded-lg text-[10px] font-mono flex items-center gap-1 transition-all ${n===_?"bg-blue-500/25 text-cyan-300 border border-blue-400/40 shadow-[0_0_10px_rgba(59,130,246,0.15)] font-bold":"text-blue-300/70 hover:text-white hover:bg-slate-800"}`,children:[g.jsx(p,{className:"w-3 h-3"}),g.jsx("span",{className:"hidden sm:inline",children:M})]},_))}),g.jsxs("button",{onClick:()=>{s(),nt.playClick()},className:"p-2 sm:px-3 sm:py-1.5 rounded-xl bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-amber-500/40 text-amber-300 hover:bg-amber-500/30 text-xs font-semibold flex items-center gap-1.5 shadow-[0_0_15px_rgba(245,158,11,0.15)] transition-all active:scale-95 shrink-0",title:"CEO Control Panel",children:[g.jsx(Wb,{className:"w-4 h-4 text-amber-400"}),g.jsx("span",{className:"hidden sm:inline",children:"CEO Controls"})]}),g.jsx("button",{onClick:()=>{r(),nt.playClick()},className:"p-2 sm:px-2.5 sm:py-1.5 rounded-xl bg-slate-900 border border-blue-900/60 text-blue-300 hover:text-white hover:border-blue-500/40 transition-all shrink-0",title:"Search Agent/Floor",children:g.jsx(Zx,{className:"w-4 h-4"})}),g.jsx("button",{onClick:h,className:"p-2 rounded-xl bg-slate-900 border border-blue-900/60 text-blue-300 hover:text-cyan-300 transition-all shrink-0",title:c?"Unmute HUD Audio":"Mute HUD Audio",children:c?g.jsx($b,{className:"w-4 h-4 text-red-400"}):g.jsx(Yb,{className:"w-4 h-4 text-cyan-400"})}),g.jsxs("div",{className:"text-right font-mono text-[10px] text-blue-300/80 hidden xl:block border-l border-blue-900/40 pl-3 min-w-[75px]",children:[g.jsxs("div",{className:"text-cyan-300 font-bold text-sm tracking-widest flex items-center justify-end",children:[o.split(":").slice(0,2).join(":"),g.jsx("span",{className:"animate-pulse mx-0.5 text-cyan-400",children:":"}),o.split(":")[2]]}),g.jsx("div",{className:"text-[8px] text-blue-500/60",children:"GMT SYNC"})]})]})]})},Qb=({onSelectFloor:t,metrics:e,notifications:n,routerLogs:i,onOpenSearch:r,onOpenDeploy:s,onOpenAssign:a,onOpenCEOControls:o})=>{const l=n.find(d=>d.type==="critical")||n.find(d=>d.type==="warning")||n[0],c=i[0];return g.jsxs("footer",{className:"w-full bg-slate-950/90 border-t border-blue-500/30 backdrop-blur-xl px-4 py-2 flex flex-col md:flex-row items-center justify-between z-40 select-none shadow-[0_-4px_30px_rgba(0,0,0,0.8)] relative overflow-hidden",children:[g.jsx("div",{className:"absolute inset-0 pointer-events-none bg-gradient-to-t from-blue-500/5 to-transparent opacity-30"}),g.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-4 gap-3 w-full md:w-3/4 font-mono text-xs mb-2 md:mb-0",children:[g.jsxs("div",{onClick:()=>{const d=(l==null?void 0:l.floorId)||95;t(d),nt.playFloorChime(d)},className:"px-3 py-1.5 rounded-xl bg-red-950/30 border border-red-500/30 hover:border-red-500/60 transition-all cursor-pointer flex items-center justify-between group shadow-inner",children:[g.jsxs("div",{className:"flex items-center gap-2 min-w-0",children:[g.jsx(Pb,{className:"w-4 h-4 text-red-400 animate-pulse shrink-0"}),g.jsxs("div",{className:"min-w-0",children:[g.jsx("div",{className:"text-[9px] text-red-400 font-bold uppercase tracking-wider",children:"SYSTEM TELEMETRY"}),g.jsx("div",{className:"text-blue-100 text-[10px] truncate",children:l?l.title:`Secure • Security Level: ${e.securityLevel}`})]})]}),g.jsx(sl,{className:"w-3.5 h-3.5 text-blue-500/60 group-hover:text-red-400 transition-colors"})]}),g.jsxs("div",{onClick:()=>{t(85),nt.playFloorChime(85)},className:"px-3 py-1.5 rounded-xl bg-purple-950/30 border border-purple-500/30 hover:border-purple-500/60 transition-all cursor-pointer flex items-center justify-between group shadow-inner",children:[g.jsxs("div",{className:"flex items-center gap-2 min-w-0",children:[g.jsx(Xb,{className:"w-4 h-4 text-purple-400 shrink-0"}),g.jsxs("div",{className:"min-w-0",children:[g.jsx("div",{className:"text-[9px] text-purple-400 font-bold uppercase tracking-wider",children:"COMPUTE CLUSTERS"}),g.jsxs("div",{className:"text-blue-100 text-[10px] truncate",children:[e.quantumClusterStatus," • ",e.activeAgents,"/",e.totalAgents," Agents"]})]})]}),g.jsx(sl,{className:"w-3.5 h-3.5 text-blue-500/60 group-hover:text-purple-400 transition-colors"})]}),g.jsxs("div",{onClick:()=>{t(65),nt.playFloorChime(65)},className:"px-3 py-1.5 rounded-xl bg-amber-950/30 border border-amber-500/30 hover:border-amber-500/60 transition-all cursor-pointer flex items-center justify-between group shadow-inner",children:[g.jsxs("div",{className:"flex items-center gap-2 min-w-0",children:[g.jsx(Ub,{className:"w-4 h-4 text-amber-400 shrink-0"}),g.jsxs("div",{className:"min-w-0",children:[g.jsx("div",{className:"text-[9px] text-amber-400 font-bold uppercase tracking-wider",children:"TOKEN THROUGHPUT"}),g.jsxs("div",{className:"text-blue-100 text-[10px] truncate",children:[e.totalTokensGenerated.toLocaleString()," Generated • ",e.activeTasks," Active Tasks"]})]})]}),g.jsx(sl,{className:"w-3.5 h-3.5 text-blue-500/60 group-hover:text-amber-400 transition-colors"})]}),g.jsxs("div",{onClick:()=>{const d=(c==null?void 0:c.floorId)||45;t(d),nt.playFloorChime(d)},className:"px-3 py-1.5 rounded-xl bg-cyan-950/30 border border-cyan-500/30 hover:border-cyan-500/60 transition-all cursor-pointer flex items-center justify-between group shadow-inner",children:[g.jsxs("div",{className:"flex items-center gap-2 min-w-0",children:[g.jsx($f,{className:"w-4 h-4 text-cyan-400 shrink-0"}),g.jsxs("div",{className:"min-w-0",children:[g.jsx("div",{className:"text-[9px] text-cyan-400 font-bold uppercase tracking-wider",children:"TOKEN ROUTER LOG"}),g.jsx("div",{className:"text-blue-100 text-[10px] truncate",children:c?`${c.agentName.split(" ")[0]} -> ${c.newModel}`:`Router Active • Burn Rate: ${e.tokenBurnRatePerMin}/m`})]})]}),g.jsx(sl,{className:"w-3.5 h-3.5 text-blue-500/60 group-hover:text-cyan-400 transition-colors"})]})]}),g.jsxs("div",{className:"flex items-center gap-2 border-l border-blue-900/40 pl-4 py-0.5 font-mono text-[10px]",children:[g.jsxs("span",{className:"text-cyan-400/60 flex items-center gap-1",children:[g.jsx(Qx,{className:"w-3.5 h-3.5 text-cyan-400"}),"CMD_PROMPT:"]}),g.jsxs("div",{className:"flex items-center gap-1.5",children:[g.jsx("button",{onClick:()=>{s&&(s(),nt.playClick())},className:"px-2 py-1 rounded bg-blue-950/40 border border-blue-500/20 text-blue-300 hover:text-white hover:bg-blue-900/30 transition-all",title:"Deploy new virtual worker process",children:"/deploy"}),g.jsx("button",{onClick:()=>{a&&(a(),nt.playClick())},className:"px-2 py-1 rounded bg-blue-950/40 border border-blue-500/20 text-blue-300 hover:text-white hover:bg-blue-900/30 transition-all",title:"Inject cognitive instructions",children:"/task"}),g.jsx("button",{onClick:()=>{r&&(r(),nt.playClick())},className:"px-2 py-1 rounded bg-blue-950/40 border border-blue-500/20 text-blue-300 hover:text-white hover:bg-blue-900/30 transition-all",title:"Quick agent database lookup",children:"/find"}),g.jsx("button",{onClick:()=>{o&&(o(),nt.playClick())},className:"px-2 py-1 rounded bg-amber-950/30 border border-amber-500/20 text-amber-400 hover:text-white hover:bg-amber-900/20 transition-all",title:"Access root authority controls",children:"/sys_ctl"})]})]})]})},Jb=({floor:t,selectedAgentId:e,onSelectAgent:n,onOpenDeployAgent:i,onOpenAssignTask:r})=>{const s=Uf(t.id),a=o=>{switch(o){case"working_at_desk":return"emerald";case"in_meeting":return"purple";case"coffee_break":return"amber";case"walking":return"blue";case"conversing":return"pink";default:return"cyan"}};return g.jsxs("aside",{className:"w-80 h-full bg-slate-950/80 border-l border-blue-500/30 backdrop-blur-2xl flex flex-col z-30 select-none overflow-hidden shadow-[-4px_0_30px_rgba(0,0,0,0.5)]",children:[g.jsxs("div",{className:"p-4 border-b border-blue-500/20 relative",style:{background:`linear-gradient(135deg, ${s.color}15 0%, rgba(15, 23, 42, 0.9) 100%)`},children:[g.jsxs("div",{className:"flex items-center justify-between mb-1",children:[g.jsx("span",{className:"px-2 py-0.5 rounded-md text-[9px] font-mono font-black tracking-wider uppercase border shadow-[0_0_8px_rgba(6,182,212,0.1)]",style:{color:s.color,borderColor:`${s.color}40`,backgroundColor:`${s.color}15`},children:s.name}),g.jsx("span",{className:"text-[10px] font-mono text-blue-400",children:t.code})]}),g.jsxs("h2",{className:"text-xl font-black text-white flex items-center gap-2 drop-shadow-[0_0_8px_rgba(255,255,255,0.1)]",children:["Floor ",t.id,g.jsxs("span",{className:"text-xs font-normal text-blue-400",children:["(",t.agents.length," active threads)"]})]}),g.jsx("p",{className:"text-[11px] text-blue-200/60 mt-1 line-clamp-2 leading-relaxed",children:t.description}),g.jsxs("div",{className:"grid grid-cols-2 gap-2 mt-3 pt-3 border-t border-blue-500/10 text-[11px] font-mono",children:[g.jsxs("div",{className:"flex items-center gap-1.5 text-blue-300",children:[g.jsx($f,{className:"w-3.5 h-3.5 text-amber-400"}),g.jsxs("span",{children:["Power: ",g.jsxs("strong",{className:"text-white font-bold",children:[t.energyUsageKW," kW"]})]})]}),g.jsxs("div",{className:"flex items-center gap-1.5 text-blue-300",children:[g.jsx(Xx,{className:"w-3.5 h-3.5 text-cyan-400"}),g.jsxs("span",{children:["Threads: ",g.jsx("strong",{className:"text-white font-bold",children:t.activeProcesses})]})]})]})]}),g.jsxs("div",{className:"p-3.5 border-b border-blue-950 bg-slate-900/30",children:[g.jsxs("div",{className:"text-[9px] font-mono uppercase tracking-widest text-blue-400 mb-2 flex items-center justify-between",children:[g.jsx("span",{children:"FLOOR MATRIX NODES"}),g.jsx("span",{className:"text-cyan-400 font-bold",children:"2D RADAR MAP"})]}),g.jsxs("div",{className:"relative w-full h-24 rounded-xl border border-blue-900/40 bg-slate-950 p-2 overflow-hidden flex items-center justify-center",children:[g.jsx("div",{className:"absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:10px_10px] opacity-20"}),g.jsx("div",{className:"absolute inset-[35%] rounded border border-cyan-500/40 bg-cyan-500/10 flex items-center justify-center text-[9px] font-mono text-cyan-300 shadow-[0_0_8px_rgba(6,182,212,0.2)] animate-pulse",children:"SHAFT"}),g.jsx("div",{className:"absolute top-2 left-2 w-5 h-5 rounded border border-blue-500/20 bg-slate-900/80 text-[8px] font-mono flex items-center justify-center text-blue-300",children:"A"}),g.jsx("div",{className:"absolute top-2 right-2 w-5 h-5 rounded border border-blue-500/20 bg-slate-900/80 text-[8px] font-mono flex items-center justify-center text-blue-300",children:"B"}),g.jsx("div",{className:"absolute bottom-2 left-2 w-5 h-5 rounded border border-blue-500/20 bg-slate-900/80 text-[8px] font-mono flex items-center justify-center text-blue-300",children:"C"}),g.jsx("div",{className:"absolute bottom-2 right-2 w-5 h-5 rounded border border-blue-500/20 bg-slate-900/80 text-[8px] font-mono flex items-center justify-center text-blue-300",children:"D"}),g.jsx("div",{className:"absolute top-0 left-0 w-full h-0.5 bg-cyan-400/40 animate-bounce"})]})]}),g.jsxs("div",{className:"flex-1 overflow-y-auto p-3 space-y-2.5 custom-scrollbar",children:[g.jsxs("div",{className:"flex items-center justify-between text-[10px] font-mono text-blue-400 mb-1 px-1",children:[g.jsxs("span",{children:["ACTIVE COGNITIVE NODES (",t.agents.length,")"]}),g.jsx("span",{className:"text-emerald-400 font-bold animate-pulse",children:"● LIVE GRID"})]}),t.agents.map(o=>{const l=e===o.id,c=a(o.status);return g.jsxs("div",{onClick:()=>{n(o.id),nt.playClick()},className:`p-3 rounded-xl border transition-all cursor-pointer relative ${l?"bg-blue-500/10 border-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.15)]":"bg-slate-900/50 border-blue-900/40 hover:border-blue-500/30 hover:bg-slate-900/70"}`,children:[g.jsxs("div",{className:"flex items-center justify-between",children:[g.jsxs("div",{className:"flex items-center gap-2",children:[g.jsxs("span",{className:"relative flex h-2 w-2",children:[g.jsx("span",{className:`animate-ping absolute inline-flex h-full w-full rounded-full bg-${c}-400 opacity-75`}),g.jsx("span",{className:`relative inline-flex rounded-full h-2 w-2 bg-${c}-500`})]}),g.jsx("span",{className:"text-xs font-bold text-white tracking-wide",children:o.name})]}),g.jsx("span",{className:`px-1.5 py-0.5 rounded text-[8px] font-mono border font-bold bg-${c}-500/10 border-${c}-500/20 text-${c}-400`,children:o.status.replace("_"," ").toUpperCase()})]}),g.jsxs("div",{className:"grid grid-cols-3 gap-1.5 my-2.5 text-[9px] font-mono border-y border-blue-500/10 py-1.5",children:[g.jsxs("div",{className:"flex flex-col items-center bg-slate-950/40 px-1 py-0.5 rounded",children:[g.jsx("span",{className:"text-blue-500 text-[8px]",children:"CPU"}),g.jsxs("span",{className:"text-blue-200 font-bold",children:[o.cpuLoad,"%"]})]}),g.jsxs("div",{className:"flex flex-col items-center bg-slate-950/40 px-1 py-0.5 rounded",children:[g.jsx("span",{className:"text-blue-500 text-[8px]",children:"MEM"}),g.jsxs("span",{className:"text-blue-200 font-bold",children:[o.memoryUsage,"%"]})]}),g.jsxs("div",{className:"flex flex-col items-center bg-slate-950/40 px-1 py-0.5 rounded",children:[g.jsx("span",{className:"text-blue-500 text-[8px]",children:"SPEED"}),g.jsxs("span",{className:"text-cyan-300 font-bold",children:[o.tokensPerSec,"/s"]})]})]}),g.jsxs("div",{className:"flex items-center justify-between text-[10px] text-blue-300 font-mono",children:[g.jsxs("span",{children:["Role: ",g.jsx("strong",{className:"text-white font-normal",children:o.role})]}),g.jsx("span",{className:"text-cyan-400 font-bold",children:o.aiModel})]}),g.jsxs("div",{className:"mt-2",children:[g.jsxs("div",{className:"flex justify-between text-[9px] font-mono text-blue-400 mb-1",children:[g.jsx("span",{className:"truncate pr-2 font-medium",children:o.currentTask.title}),g.jsxs("span",{className:"text-cyan-400 font-bold",children:[o.currentTask.progress,"%"]})]}),g.jsx("div",{className:"w-full h-1 bg-slate-800 rounded-full overflow-hidden",children:g.jsx("div",{className:"h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full transition-all duration-300",style:{width:`${o.currentTask.progress}%`}})})]}),o.speechBubble&&g.jsxs("div",{className:"mt-2 p-1.5 rounded bg-slate-950 border border-blue-500/20 text-[9px] text-blue-200 flex items-center gap-1 font-mono italic",children:[g.jsx($x,{className:"w-3 h-3 text-cyan-400 shrink-0"}),g.jsxs("span",{className:"truncate",children:['"',o.speechBubble,'"']})]})]},o.id)})]}),g.jsxs("div",{className:"p-3.5 border-t border-blue-500/20 bg-slate-950 grid grid-cols-2 gap-2",children:[g.jsxs("button",{onClick:()=>{i(),nt.playClick()},className:"px-3 py-2.5 rounded-xl bg-cyan-500/20 border border-cyan-500/30 text-cyan-300 hover:brightness-110 hover:shadow-[0_0_12px_rgba(6,182,212,0.2)] text-xs font-mono font-bold flex items-center justify-center gap-1.5 transition-all",children:[g.jsx(Kx,{className:"w-3.5 h-3.5"}),"Deploy Node"]}),g.jsxs("button",{onClick:()=>{r(),nt.playClick()},className:"px-3 py-2.5 rounded-xl bg-blue-500/20 border border-blue-500/30 text-blue-300 hover:brightness-110 hover:shadow-[0_0_12px_rgba(59,130,246,0.2)] text-xs font-mono font-bold flex items-center justify-center gap-1.5 transition-all",children:[g.jsx(qx,{className:"w-3.5 h-3.5"}),"Assign Task"]})]})]})},eA=({messages:t,metrics:e,ceoSettings:n,onOpenCEOControls:i})=>{const[r,s]=me.useState("overview"),a=o=>{s(o),nt.playClick()};return g.jsxs("aside",{className:"w-80 h-full bg-slate-950/80 border-r border-blue-500/30 backdrop-blur-2xl flex flex-col z-30 select-none overflow-hidden shadow-[4px_0_30px_rgba(0,0,0,0.5)]",children:[g.jsx("div",{className:"flex border-b border-blue-500/20 bg-slate-900/40 p-1.5 gap-1",children:[{id:"overview",icon:zb,label:"Overview"},{id:"providers",icon:Hb,label:"AI Engines"},{id:"comms",icon:$x,label:"Comms Mesh"}].map(o=>{const l=o.icon;return g.jsxs("button",{onClick:()=>a(o.id),className:`flex-1 py-2 px-1 rounded-xl text-[10px] font-mono font-bold flex flex-col items-center justify-center gap-1 transition-all ${r===o.id?"bg-blue-500/20 text-cyan-300 border border-blue-500/40 shadow-[0_0_12px_rgba(6,182,212,0.15)]":"text-blue-300/60 hover:text-white hover:bg-slate-800/40"}`,children:[g.jsx(l,{className:"w-4 h-4"}),o.label]},o.id)})}),g.jsxs("div",{className:"flex-1 flex flex-col overflow-hidden",children:[r==="overview"&&g.jsxs("div",{className:"flex-1 flex flex-col overflow-y-auto custom-scrollbar p-4 space-y-4",children:[g.jsxs("div",{className:"space-y-3",children:[g.jsxs("div",{className:"flex items-center justify-between text-xs font-mono font-bold text-cyan-400",children:[g.jsxs("span",{className:"flex items-center gap-1.5 uppercase tracking-wider",children:[g.jsx(Ym,{className:"w-3.5 h-3.5 text-cyan-400 animate-pulse"})," Live Telemetry"]}),g.jsx("span",{className:"text-[9px] px-1.5 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/30 text-emerald-400",children:e.quantumClusterStatus})]}),g.jsxs("div",{className:"grid grid-cols-2 gap-2 text-xs font-mono",children:[g.jsxs("div",{className:"p-3 rounded-xl bg-slate-900/60 border border-blue-500/10 hover:border-blue-500/30 transition-colors shadow-inner",children:[g.jsx("div",{className:"text-[9px] text-blue-400 font-bold",children:"TOTAL AGENTS"}),g.jsx("div",{className:"text-xl font-black text-cyan-300 mt-1",children:e.totalAgents}),g.jsxs("div",{className:"text-[8px] text-emerald-400 mt-0.5",children:[e.activeAgents," Running"]})]}),g.jsxs("div",{className:"p-3 rounded-xl bg-slate-900/60 border border-blue-500/10 hover:border-blue-500/30 transition-colors shadow-inner",children:[g.jsx("div",{className:"text-[9px] text-blue-400 font-bold",children:"ACTIVE TASKS"}),g.jsx("div",{className:"text-xl font-black text-purple-300 mt-1",children:e.activeTasks}),g.jsx("div",{className:"text-[8px] text-purple-400 mt-0.5",children:"100 Floor Sync"})]}),g.jsxs("div",{className:"p-3 rounded-xl bg-slate-900/60 border border-blue-500/10 hover:border-blue-500/30 transition-colors shadow-inner",children:[g.jsx("div",{className:"text-[9px] text-blue-400 font-bold",children:"TOKEN BURN/MIN"}),g.jsx("div",{className:"text-sm font-black text-amber-300 mt-1",children:e.tokenBurnRatePerMin.toLocaleString()}),g.jsx("div",{className:"text-[8px] text-amber-400/80 mt-0.5",children:"Auto-Route Active"})]}),g.jsxs("div",{className:"p-3 rounded-xl bg-slate-900/60 border border-blue-500/10 hover:border-blue-500/30 transition-colors shadow-inner",children:[g.jsx("div",{className:"text-[9px] text-blue-400 font-bold",children:"EARNINGS SAVED"}),g.jsxs("div",{className:"text-sm font-black text-emerald-300 mt-1",children:["$",e.totalEarningsSavedUSD.toLocaleString()]}),g.jsx("div",{className:"text-[8px] text-emerald-400/80 mt-0.5",children:"+14% vs Prev Qtr"})]})]})]}),g.jsxs("div",{className:"p-3 rounded-xl bg-gradient-to-r from-blue-950/30 to-slate-900/30 border border-blue-500/20 space-y-2",children:[g.jsxs("div",{className:"text-[10px] font-mono font-bold text-amber-400 flex items-center gap-1.5",children:[g.jsx(Gb,{className:"w-3.5 h-3.5 text-amber-400"}),"CEO OVERRIDES ACTIVE"]}),g.jsxs("div",{className:"space-y-1.5 text-[11px] font-mono",children:[g.jsxs("div",{className:"flex justify-between items-center text-blue-200",children:[g.jsx("span",{children:"Emergency Lock:"}),g.jsx("span",{className:n.emergencyPause?"text-red-400 font-bold":"text-emerald-400 font-bold",children:n.emergencyPause?"LOCKED":"ARMED"})]}),g.jsxs("div",{className:"flex justify-between items-center text-blue-200",children:[g.jsx("span",{children:"Auto Load Balance:"}),g.jsx("span",{className:n.globalAutoSwitch?"text-cyan-400 font-bold":"text-gray-400",children:n.globalAutoSwitch?"ENABLED":"DISABLED"})]}),g.jsxs("div",{className:"flex justify-between items-center text-blue-200",children:[g.jsx("span",{children:"Daily Token Budget:"}),g.jsxs("span",{className:"text-amber-300 font-bold",children:[(n.tokenBudgetLimit/1e6).toFixed(1),"M"]})]})]})]}),g.jsxs("div",{className:"p-3.5 rounded-xl bg-slate-900/40 border border-blue-900/60 flex items-center gap-3",children:[g.jsx("div",{className:"p-2 rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-cyan-300",children:g.jsx(jb,{className:"w-5 h-5 animate-pulse"})}),g.jsxs("div",{className:"leading-tight",children:[g.jsx("h4",{className:"text-xs font-bold text-blue-100",children:"SYSTEM HEALTH: SECURE"}),g.jsx("p",{className:"text-[9px] text-blue-400/80 font-mono mt-0.5",children:"Firewall level: MAXIMUM SECURITY"})]})]})]}),r==="providers"&&g.jsxs("div",{className:"flex-1 flex flex-col overflow-y-auto custom-scrollbar p-4 space-y-4",children:[g.jsxs("div",{className:"flex items-center justify-between text-xs font-mono font-bold text-cyan-400",children:[g.jsxs("span",{className:"flex items-center gap-1.5 uppercase",children:[g.jsx(Ob,{className:"w-3.5 h-3.5 text-cyan-400"})," AI Provider Nodes"]}),g.jsx("span",{className:"text-[9px] text-blue-400",children:"5 ONLINE"})]}),g.jsx("div",{className:"space-y-2 font-mono text-xs",children:[{name:"Gemini 1.5 Pro",provider:"Gemini",cost:"$1.25/M",quota:"85%",health:"Optimal"},{name:"Claude 3.5 Sonnet",provider:"Anthropic",cost:"$3.00/M",quota:"92%",health:"Optimal"},{name:"GPT-4o Enterprise",provider:"OpenAI",cost:"$2.50/M",quota:"78%",health:"Optimal"},{name:"DeepSeek-V3 (Local)",provider:"Local Cluster",cost:"$0.15/M",quota:"99%",health:"High Load"},{name:"Llama 3.1 70B",provider:"Meta-OSS",cost:"$0.40/M",quota:"95%",health:"Optimal"}].map((o,l)=>g.jsxs("div",{className:"p-2.5 rounded-xl bg-slate-900/60 border border-blue-500/10 hover:border-blue-500/30 transition-all space-y-1.5",children:[g.jsxs("div",{className:"flex items-center justify-between",children:[g.jsx("span",{className:"font-bold text-blue-100 text-[11px]",children:o.name}),g.jsx("span",{className:`px-1 rounded text-[8px] font-extrabold ${o.health==="Optimal"?"bg-emerald-500/20 text-emerald-400":"bg-amber-500/20 text-amber-400"}`,children:o.health})]}),g.jsxs("div",{className:"flex justify-between text-[9px] text-blue-400",children:[g.jsxs("span",{children:["Cluster: ",o.provider]}),g.jsxs("span",{children:["Cost: ",o.cost]})]}),g.jsxs("div",{className:"space-y-1",children:[g.jsxs("div",{className:"flex justify-between text-[8px] text-blue-500",children:[g.jsx("span",{children:"Quota Availability"}),g.jsx("span",{children:o.quota})]}),g.jsx("div",{className:"w-full h-1 bg-slate-800 rounded-full overflow-hidden",children:g.jsx("div",{className:`h-full rounded-full bg-gradient-to-r ${l===3?"from-amber-400 to-orange-500":"from-cyan-500 to-blue-500"}`,style:{width:o.quota}})})]})]},o.name))})]}),r==="comms"&&g.jsxs("div",{className:"flex-1 flex flex-col overflow-hidden p-3",children:[g.jsxs("div",{className:"flex items-center justify-between text-xs font-mono text-cyan-400 mb-2 px-1",children:[g.jsxs("span",{className:"flex items-center gap-1.5 uppercase font-bold",children:[g.jsx(Ym,{className:"w-3.5 h-3.5 animate-pulse text-cyan-400"})," Comm stream"]}),g.jsx("span",{className:"text-[9px] text-blue-400",children:"ACTIVE MESH"})]}),g.jsx("div",{className:"flex-1 overflow-y-auto space-y-2.5 custom-scrollbar pr-1",children:t.map(o=>g.jsxs("div",{className:"p-3 rounded-xl bg-slate-900/60 border border-blue-500/10 hover:border-blue-500/25 transition-all font-mono shadow-inner",children:[g.jsxs("div",{className:"flex items-center justify-between text-[9px] text-blue-400 mb-1",children:[g.jsx("span",{className:"px-1.5 py-0.5 rounded bg-blue-500/15 text-cyan-300 border border-blue-500/20",children:o.topic}),g.jsx("span",{children:o.timestamp})]}),g.jsxs("div",{className:"text-xs text-white font-semibold flex items-center gap-1.5 my-1",children:[g.jsx("span",{className:"text-cyan-400 truncate max-w-[100px]",children:o.senderName.split(" ")[0]}),g.jsx(Nb,{className:"w-3 h-3 text-blue-500 shrink-0"}),g.jsx("span",{className:"text-purple-400 truncate max-w-[100px]",children:o.receiverName.split(" ")[0]})]}),g.jsxs("p",{className:"text-[10px] text-blue-200 leading-relaxed bg-slate-950/60 p-1.5 rounded border border-blue-900/40",children:['"',o.content,'"']}),g.jsxs("div",{className:"flex items-center justify-between text-[9px] text-blue-400 mt-2",children:[g.jsxs("span",{children:["Tokens: ",g.jsx("strong",{className:"text-cyan-300",children:o.tokenCount})]}),g.jsx("span",{className:"text-emerald-400 font-bold uppercase",children:o.status})]})]},o.id))})]})]}),g.jsx("div",{className:"p-3.5 border-t border-blue-500/20 bg-slate-950",children:g.jsxs("button",{onClick:()=>{i(),nt.playClick()},className:"w-full py-2.5 rounded-xl bg-gradient-to-r from-blue-500/20 via-blue-600/25 to-indigo-600/20 border border-blue-500/40 text-cyan-300 hover:brightness-110 hover:shadow-[0_0_15px_rgba(6,182,212,0.25)] text-xs font-mono font-bold flex items-center justify-center gap-2 transition-all",children:[g.jsx(Yx,{className:"w-4 h-4 text-cyan-400 animate-pulse"}),"GLOBAL CONTROL PANEL"]})})]})},tA=({settings:t,onUpdateSettings:e,onClose:n})=>{const[i,r]=me.useState(t.emergencyPause),[s,a]=me.useState(t.tokenBudgetLimit),[o,l]=me.useState(t.activeBroadcastMessage||""),[c,d]=me.useState(t.graphicsQuality||"high"),h=()=>{const m=!i;r(m),m?nt.playAlert():nt.playNotification()},f=()=>{e({...t,emergencyPause:i,tokenBudgetLimit:s,activeBroadcastMessage:o.trim()||null,graphicsQuality:c}),nt.playNotification(),n()};return g.jsx("div",{className:"fixed inset-0 bg-gray-950/80 backdrop-blur-md flex items-center justify-center z-50 p-4 select-none animate-fadeIn",children:g.jsxs("div",{className:"w-full max-w-2xl bg-gray-950 border border-amber-500/30 rounded-2xl shadow-2xl overflow-hidden font-sans",children:[g.jsxs("div",{className:"p-4 border-b border-amber-500/20 bg-gradient-to-r from-amber-500/10 via-orange-500/10 to-gray-950 flex items-center justify-between",children:[g.jsxs("div",{className:"flex items-center gap-3",children:[g.jsx("div",{className:"p-2 rounded-xl bg-amber-500/20 border border-amber-500/40 text-amber-400",children:g.jsx(zd,{className:"w-6 h-6"})}),g.jsxs("div",{children:[g.jsxs("h3",{className:"text-lg font-bold text-white flex items-center gap-2",children:["CEO Executive Control Center",g.jsx("span",{className:"px-2 py-0.5 rounded bg-amber-400 text-gray-950 text-[10px] font-extrabold uppercase",children:"Level 100 Authority"})]}),g.jsx("p",{className:"text-xs text-gray-400",children:"Global System Overrides & Autonomous Enterprise Protocol"})]})]}),g.jsx("button",{onClick:n,className:"p-2 rounded-xl bg-gray-900 text-gray-400 hover:text-white transition-colors",children:g.jsx(ho,{className:"w-5 h-5"})})]}),g.jsxs("div",{className:"p-6 space-y-6 max-h-[75vh] overflow-y-auto custom-scrollbar",children:[g.jsxs("div",{className:"p-4 rounded-xl bg-red-500/10 border border-red-500/30 flex items-center justify-between",children:[g.jsxs("div",{className:"flex items-center gap-3",children:[g.jsx(Vb,{className:"w-6 h-6 text-red-400 shrink-0 animate-pulse"}),g.jsxs("div",{children:[g.jsx("h4",{className:"text-sm font-bold text-red-300",children:"EMERGENCY BUILDING FREEZE"}),g.jsx("p",{className:"text-xs text-gray-400",children:"Instantly pause all 420 AI agent execution threads across 100 floors."})]})]}),g.jsx("button",{onClick:h,className:`px-4 py-2 rounded-xl font-mono text-xs font-bold transition-all shadow-md ${i?"bg-red-500 text-white border border-red-400 shadow-red-500/30":"bg-gray-900 text-gray-400 border border-gray-800 hover:text-red-300"}`,children:i?"SYSTEM FROZEN":"FREEZE ALL AGENTS"})]}),g.jsxs("div",{className:"p-4 rounded-xl bg-gray-900/60 border border-gray-800 space-y-2",children:[g.jsxs("div",{className:"flex justify-between items-center text-xs font-mono",children:[g.jsxs("span",{className:"text-gray-300 font-bold flex items-center gap-1.5",children:[g.jsx($f,{className:"w-4 h-4 text-cyan-400"}),"GLOBAL DAILY TOKEN BUDGET LIMIT"]}),g.jsxs("span",{className:"text-cyan-300 font-bold text-sm",children:[(s/1e6).toFixed(1),"M Tokens"]})]}),g.jsx("input",{type:"range",min:"10000000",max:"100000000",step:"5000000",value:s,onChange:m=>a(Number(m.target.value)),className:"w-full h-2 bg-gray-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"})]}),g.jsxs("div",{className:"p-4 rounded-xl bg-gray-900/60 border border-gray-800 space-y-3",children:[g.jsxs("div",{className:"flex justify-between items-center text-xs font-mono",children:[g.jsxs("span",{className:"text-gray-300 font-bold flex items-center gap-1.5",children:[g.jsx(Yf,{className:"w-4 h-4 text-cyan-400"}),"3D GRAPHICS QUALITY ENGINE"]}),g.jsxs("span",{className:"text-cyan-300 font-bold uppercase",children:[c," Mode"]})]}),g.jsx("div",{className:"grid grid-cols-3 gap-2",children:["low","medium","high"].map(m=>g.jsxs("button",{type:"button",onClick:()=>{d(m),nt.playClick()},className:`px-3 py-2 rounded-lg text-[10px] font-mono font-bold transition-all border ${c===m?"bg-cyan-500/20 text-cyan-300 border-cyan-400/60 shadow-[0_0_10px_rgba(6,182,212,0.15)]":"bg-gray-950 text-gray-500 border-gray-800 hover:text-gray-300"}`,children:[m==="low"&&"LOW (Mobile GPU)",m==="medium"&&"MEDIUM",m==="high"&&"HIGH (Bloom + Shadows)"]},m))}),g.jsx("p",{className:"text-[10px] text-gray-400 leading-relaxed",children:"Low mode disables postprocessing bloom, shadows, details, and caps rendering pixel ratio to save battery."})]}),g.jsxs("div",{className:"p-4 rounded-xl bg-gray-900/60 border border-gray-800 space-y-2",children:[g.jsxs("label",{className:"text-xs font-mono font-bold text-amber-300 flex items-center gap-1.5",children:[g.jsx(Bb,{className:"w-4 h-4 text-amber-400"}),"CEO EXECUTIVE BROADCAST TO ALL 100 FLOORS"]}),g.jsx("input",{type:"text",placeholder:"e.g., Focus all Quantum & Deep Learning floors on Q3 Model Release...",value:o,onChange:m=>l(m.target.value),className:"w-full px-3 py-2 rounded-xl bg-gray-950 border border-gray-800 text-xs text-white placeholder-gray-600 focus:outline-none focus:border-amber-500/50"})]})]}),g.jsxs("div",{className:"p-4 border-t border-gray-900 bg-gray-950 flex justify-end gap-3",children:[g.jsx("button",{onClick:n,className:"px-4 py-2 rounded-xl bg-gray-900 border border-gray-800 text-gray-400 hover:text-white text-xs font-semibold",children:"Cancel"}),g.jsx("button",{onClick:f,className:"px-5 py-2 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 text-gray-950 text-xs font-bold hover:brightness-110 shadow-lg shadow-amber-500/20",children:"Apply Executive Changes"})]})]})})},nA=({agent:t,floor:e,onClose:n,onUpdateAgentStatus:i})=>{const[r,s]=me.useState("tasks"),a=()=>{i(t.id,"coffee_break"),nt.playNotification()};return g.jsx("div",{className:"fixed inset-0 bg-gray-950/80 backdrop-blur-md flex items-center justify-center z-50 p-4 select-none animate-fadeIn",children:g.jsxs("div",{className:"w-full max-w-2xl bg-gray-950 border border-cyan-500/30 rounded-2xl shadow-2xl overflow-hidden font-sans",children:[g.jsxs("div",{className:"p-5 border-b border-cyan-500/20 relative",style:{background:`linear-gradient(135deg, ${t.avatarColor}20 0%, rgba(3, 7, 18, 0.95) 100%)`},children:[g.jsxs("div",{className:"flex items-center justify-between",children:[g.jsxs("div",{className:"flex items-center gap-3",children:[g.jsx("div",{className:"w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg border border-white/20",style:{backgroundColor:t.avatarColor},children:t.name.charAt(0)}),g.jsxs("div",{children:[g.jsxs("div",{className:"flex items-center gap-2",children:[g.jsx("h3",{className:"text-lg font-bold text-white",children:t.name}),g.jsx("span",{className:"px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 text-[10px] font-mono border border-cyan-500/30",children:t.codeName})]}),g.jsxs("p",{className:"text-xs text-gray-400 font-mono",children:[t.role," • Floor ",t.floorId," (",e.departmentName,")"]})]})]}),g.jsx("button",{onClick:n,className:"p-2 rounded-xl bg-gray-900 text-gray-400 hover:text-white transition-colors",children:g.jsx(ho,{className:"w-5 h-5"})})]}),g.jsxs("div",{className:"grid grid-cols-4 gap-2 mt-4 pt-3 border-t border-gray-800/60 font-mono text-xs",children:[g.jsxs("div",{className:"p-2 rounded-lg bg-gray-900/60 border border-gray-800",children:[g.jsx("div",{className:"text-[9px] text-gray-400",children:"AI MODEL"}),g.jsx("div",{className:"text-cyan-300 font-bold truncate",children:t.aiModel})]}),g.jsxs("div",{className:"p-2 rounded-lg bg-gray-900/60 border border-gray-800",children:[g.jsx("div",{className:"text-[9px] text-gray-400",children:"CPU LOAD"}),g.jsxs("div",{className:"text-purple-300 font-bold",children:[t.cpuLoad,"%"]})]}),g.jsxs("div",{className:"p-2 rounded-lg bg-gray-900/60 border border-gray-800",children:[g.jsx("div",{className:"text-[9px] text-gray-400",children:"TOKENS / SEC"}),g.jsx("div",{className:"text-amber-300 font-bold",children:t.tokensPerSec})]}),g.jsxs("div",{className:"p-2 rounded-lg bg-gray-900/60 border border-gray-800",children:[g.jsx("div",{className:"text-[9px] text-gray-400",children:"EFFICIENCY"}),g.jsxs("div",{className:"text-emerald-300 font-bold",children:[t.efficiencyScore,"%"]})]})]})]}),g.jsxs("div",{className:"flex border-b border-gray-900 bg-gray-900/40 px-4 pt-2 gap-2 text-xs font-mono",children:[g.jsxs("button",{onClick:()=>s("tasks"),className:`px-4 py-2 rounded-t-xl font-bold flex items-center gap-1.5 transition-all ${r==="tasks"?"bg-gray-950 text-cyan-400 border-t border-x border-cyan-500/30":"text-gray-400 hover:text-white"}`,children:[g.jsx(Ib,{className:"w-4 h-4"}),"Active Tasks"]}),g.jsxs("button",{onClick:()=>s("logs"),className:`px-4 py-2 rounded-t-xl font-bold flex items-center gap-1.5 transition-all ${r==="logs"?"bg-gray-950 text-cyan-400 border-t border-x border-cyan-500/30":"text-gray-400 hover:text-white"}`,children:[g.jsx(Qx,{className:"w-4 h-4"}),"Live Logs"]}),g.jsxs("button",{onClick:()=>s("memory"),className:`px-4 py-2 rounded-t-xl font-bold flex items-center gap-1.5 transition-all ${r==="memory"?"bg-gray-950 text-cyan-400 border-t border-x border-cyan-500/30":"text-gray-400 hover:text-white"}`,children:[g.jsx(Lb,{className:"w-4 h-4"}),"Memory Stack"]})]}),g.jsxs("div",{className:"p-5 max-h-[50vh] overflow-y-auto custom-scrollbar font-mono text-xs space-y-4",children:[r==="tasks"&&g.jsxs("div",{className:"space-y-3",children:[g.jsxs("div",{className:"p-3 rounded-xl bg-gray-900/60 border border-gray-800 space-y-2",children:[g.jsxs("div",{className:"flex justify-between items-center",children:[g.jsx("span",{className:"font-bold text-white text-sm",children:t.currentTask.title}),g.jsx("span",{className:"px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 text-[10px]",children:t.currentTask.priority||"HIGH"})]}),g.jsxs("div",{className:"flex justify-between text-[11px] text-gray-400",children:[g.jsx("span",{children:"Progress"}),g.jsxs("span",{className:"text-cyan-400 font-bold",children:[t.currentTask.progress,"%"]})]}),g.jsx("div",{className:"w-full h-1.5 bg-gray-800 rounded-full overflow-hidden",children:g.jsx("div",{className:"h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full",style:{width:`${t.currentTask.progress}%`}})})]}),g.jsxs("div",{className:"space-y-1.5",children:[g.jsx("div",{className:"text-[11px] text-gray-400 uppercase tracking-wider",children:"Subtask Breakdown"}),t.currentTask.subtasks.map(o=>g.jsxs("div",{className:"flex items-center gap-2 p-2 rounded-lg bg-gray-900/40 border border-gray-800 text-gray-300",children:[g.jsx(Db,{className:`w-4 h-4 ${o.done?"text-emerald-400":"text-gray-600"}`}),g.jsx("span",{className:o.done?"line-through text-gray-500":"",children:o.text})]},o.id))]})]}),r==="logs"&&g.jsx("div",{className:"bg-gray-950 p-3 rounded-xl border border-gray-800 space-y-2 text-[11px] font-mono",children:t.logs.map(o=>g.jsxs("div",{className:"flex items-center justify-between text-gray-300 border-b border-gray-900 pb-1",children:[g.jsxs("span",{className:"text-gray-500",children:["[",o.timestamp,"]"]}),g.jsx("span",{className:"text-cyan-400",children:o.source}),g.jsx("span",{className:"truncate max-w-xs",children:o.message})]},o.id))}),r==="memory"&&g.jsx("div",{className:"space-y-2",children:t.memory.map(o=>g.jsxs("div",{className:"p-3 rounded-xl bg-gray-900/60 border border-gray-800 space-y-1",children:[g.jsxs("div",{className:"flex justify-between text-[10px] text-gray-400",children:[g.jsx("span",{className:"text-purple-400 font-bold",children:o.topic}),g.jsx("span",{children:o.timestamp})]}),g.jsx("p",{className:"text-gray-300 text-xs",children:o.details})]},o.id))})]}),g.jsxs("div",{className:"p-4 border-t border-gray-900 bg-gray-950 flex items-center justify-between",children:[g.jsxs("button",{onClick:a,className:"px-3 py-2 rounded-xl bg-amber-500/20 border border-amber-500/40 text-amber-300 hover:bg-amber-500/30 text-xs font-semibold flex items-center gap-1.5",children:[g.jsx(kb,{className:"w-4 h-4"}),"Send to Bio-Coffee Lounge"]}),g.jsx("button",{onClick:n,className:"px-4 py-2 rounded-xl bg-gray-900 border border-gray-800 text-gray-300 hover:text-white text-xs font-semibold",children:"Close Inspector"})]})]})})},iA=({floor:t,onDeploy:e,onClose:n})=>{const[i,r]=me.useState(""),[s,a]=me.useState(""),[o,l]=me.useState("Claude 3.5 Sonnet"),[c,d]=me.useState("sphere"),h=f=>{if(f.preventDefault(),!i.trim())return;const m=Uf(t.id);e({name:i.trim(),role:s.trim()||`${m.name.split(" ")[0]} Engineer`,aiModel:o,avatarShape:c,avatarColor:m.color,floorId:t.id,departmentId:m.category,departmentName:m.name,status:"working_at_desk"}),nt.playNotification(),n()};return g.jsx("div",{className:"fixed inset-0 bg-gray-950/80 backdrop-blur-md flex items-center justify-center z-50 p-4 select-none animate-fadeIn",children:g.jsxs("div",{className:"w-full max-w-md bg-gray-950 border border-cyan-500/30 rounded-2xl shadow-2xl overflow-hidden font-sans",children:[g.jsxs("div",{className:"p-4 border-b border-cyan-500/20 flex items-center justify-between",children:[g.jsxs("div",{className:"flex items-center gap-2 text-cyan-400 font-bold",children:[g.jsx(Kx,{className:"w-5 h-5"}),"Deploy Agent to Floor ",t.id]}),g.jsx("button",{onClick:n,className:"p-1 rounded-lg hover:bg-gray-900 text-gray-400",children:g.jsx(ho,{className:"w-5 h-5"})})]}),g.jsxs("form",{onSubmit:h,className:"p-5 space-y-4 text-xs font-mono",children:[g.jsxs("div",{children:[g.jsx("label",{className:"block text-gray-400 mb-1",children:"AGENT FULL NAME"}),g.jsx("input",{type:"text",required:!0,placeholder:"e.g. Kaius Cyber",value:i,onChange:f=>r(f.target.value),className:"w-full px-3 py-2 rounded-xl bg-gray-900 border border-gray-800 text-white focus:outline-none focus:border-cyan-500"})]}),g.jsxs("div",{children:[g.jsx("label",{className:"block text-gray-400 mb-1",children:"SPECIALIZED ROLE"}),g.jsx("input",{type:"text",placeholder:"e.g. Neural Weights Engineer",value:s,onChange:f=>a(f.target.value),className:"w-full px-3 py-2 rounded-xl bg-gray-900 border border-gray-800 text-white focus:outline-none focus:border-cyan-500"})]}),g.jsxs("div",{children:[g.jsx("label",{className:"block text-gray-400 mb-1",children:"LLM MODEL BACKBONE"}),g.jsxs("select",{value:o,onChange:f=>l(f.target.value),className:"w-full px-3 py-2 rounded-xl bg-gray-900 border border-gray-800 text-cyan-300 focus:outline-none focus:border-cyan-500",children:[g.jsx("option",{value:"Claude 3.5 Sonnet",children:"Claude 3.5 Sonnet (Anthropic)"}),g.jsx("option",{value:"Gemini 1.5 Pro",children:"Gemini 1.5 Pro (Google)"}),g.jsx("option",{value:"GPT-4o Enterprise",children:"GPT-4o Enterprise (OpenAI)"}),g.jsx("option",{value:"Llama 3.1 70B",children:"Llama 3.1 70B (Meta)"}),g.jsx("option",{value:"DeepSeek-V3",children:"DeepSeek-V3 (DeepSeek)"})]})]}),g.jsxs("div",{children:[g.jsx("label",{className:"block text-gray-400 mb-1",children:"3D AVATAR GEOMETRY"}),g.jsx("div",{className:"grid grid-cols-3 gap-2",children:["sphere","cube","octahedron","torus","pyramid","cylinder"].map(f=>g.jsx("button",{type:"button",onClick:()=>d(f),className:`p-2 rounded-xl border text-center capitalize transition-all ${c===f?"bg-cyan-500/20 border-cyan-400 text-cyan-300":"bg-gray-900 border-gray-800 text-gray-400"}`,children:f},f))})]}),g.jsxs("div",{className:"pt-2 flex justify-end gap-2",children:[g.jsx("button",{type:"button",onClick:n,className:"px-4 py-2 rounded-xl bg-gray-900 border border-gray-800 text-gray-400",children:"Cancel"}),g.jsx("button",{type:"submit",className:"px-4 py-2 rounded-xl bg-cyan-500 text-gray-950 font-bold hover:brightness-110",children:"Deploy Agent Now"})]})]})]})})},rA=({floor:t,onAssign:e,onClose:n})=>{const[i,r]=me.useState(""),[s,a]=me.useState("HIGH"),[o,l]=me.useState("15m"),c=d=>{d.preventDefault(),i.trim()&&(e({title:i.trim(),priority:s,eta:o,progress:5,status:"in_progress",subtasks:[{id:"st_new_1",text:"Initialize system context & vectors",done:!0},{id:"st_new_2",text:"Execute main processing loop",done:!1}]}),nt.playNotification(),n())};return g.jsx("div",{className:"fixed inset-0 bg-gray-950/80 backdrop-blur-md flex items-center justify-center z-50 p-4 select-none animate-fadeIn",children:g.jsxs("div",{className:"w-full max-w-md bg-gray-950 border border-blue-500/30 rounded-2xl shadow-2xl overflow-hidden font-sans",children:[g.jsxs("div",{className:"p-4 border-b border-blue-500/20 flex items-center justify-between",children:[g.jsxs("div",{className:"flex items-center gap-2 text-blue-400 font-bold",children:[g.jsx(qx,{className:"w-5 h-5"}),"Dispatch High-Priority Task (Floor ",t.id,")"]}),g.jsx("button",{onClick:n,className:"p-1 rounded-lg hover:bg-gray-900 text-gray-400",children:g.jsx(ho,{className:"w-5 h-5"})})]}),g.jsxs("form",{onSubmit:c,className:"p-5 space-y-4 text-xs font-mono",children:[g.jsxs("div",{children:[g.jsx("label",{className:"block text-gray-400 mb-1",children:"TASK DIRECTIVE TITLE"}),g.jsx("input",{type:"text",required:!0,placeholder:"e.g. Execute Quantum Risk Simulation Batch #42",value:i,onChange:d=>r(d.target.value),className:"w-full px-3 py-2 rounded-xl bg-gray-900 border border-gray-800 text-white focus:outline-none focus:border-blue-500"})]}),g.jsxs("div",{children:[g.jsx("label",{className:"block text-gray-400 mb-1",children:"PRIORITY LEVEL"}),g.jsx("div",{className:"grid grid-cols-4 gap-2",children:["NORMAL","HIGH","URGENT","CRITICAL"].map(d=>g.jsx("button",{type:"button",onClick:()=>a(d),className:`p-2 rounded-xl border text-center text-[10px] font-bold transition-all ${s===d?"bg-blue-500/20 border-blue-400 text-blue-300":"bg-gray-900 border-gray-800 text-gray-400"}`,children:d},d))})]}),g.jsxs("div",{children:[g.jsx("label",{className:"block text-gray-400 mb-1",children:"ESTIMATED COMPLETION ETA"}),g.jsx("input",{type:"text",value:o,onChange:d=>l(d.target.value),className:"w-full px-3 py-2 rounded-xl bg-gray-900 border border-gray-800 text-white focus:outline-none focus:border-blue-500"})]}),g.jsxs("div",{className:"pt-2 flex justify-end gap-2",children:[g.jsx("button",{type:"button",onClick:n,className:"px-4 py-2 rounded-xl bg-gray-900 border border-gray-800 text-gray-400",children:"Cancel"}),g.jsx("button",{type:"submit",className:"px-4 py-2 rounded-xl bg-blue-500 text-gray-950 font-bold hover:brightness-110",children:"Dispatch Task Now"})]})]})]})})},sA=({floors:t,onSelectFloor:e,onSelectAgent:n,onClose:i})=>{const[r,s]=me.useState(""),a=[];t.forEach(c=>a.push(...c.agents));const o=t.filter(c=>c.name.toLowerCase().includes(r.toLowerCase())||c.departmentName.toLowerCase().includes(r.toLowerCase())||c.id.toString()===r.trim()).slice(0,5),l=a.filter(c=>c.name.toLowerCase().includes(r.toLowerCase())||c.role.toLowerCase().includes(r.toLowerCase())||c.aiModel.toLowerCase().includes(r.toLowerCase())).slice(0,10);return g.jsx("div",{className:"fixed inset-0 bg-gray-950/80 backdrop-blur-md flex items-start justify-center z-50 pt-20 p-4 select-none animate-fadeIn",children:g.jsxs("div",{className:"w-full max-w-xl bg-gray-950 border border-cyan-500/30 rounded-2xl shadow-2xl overflow-hidden font-sans",children:[g.jsxs("div",{className:"p-4 border-b border-gray-800 flex items-center gap-3",children:[g.jsx(Zx,{className:"w-5 h-5 text-cyan-400 shrink-0"}),g.jsx("input",{type:"text",autoFocus:!0,placeholder:"Search Floors (1-100), AI Agents, Models, or Departments...",value:r,onChange:c=>s(c.target.value),className:"w-full bg-transparent text-sm text-white placeholder-gray-500 focus:outline-none font-mono"}),g.jsx("button",{onClick:i,className:"p-1 rounded-lg hover:bg-gray-900 text-gray-400",children:g.jsx(ho,{className:"w-5 h-5"})})]}),g.jsxs("div",{className:"p-4 max-h-[60vh] overflow-y-auto space-y-4 font-mono text-xs custom-scrollbar",children:[g.jsxs("div",{children:[g.jsx("div",{className:"text-[10px] text-gray-500 uppercase tracking-widest mb-2",children:"BUILDING SECTORS"}),g.jsx("div",{className:"flex flex-wrap gap-1.5",children:Td.map(c=>g.jsxs("button",{onClick:()=>{e(c.floorRange[0]),nt.playFloorChime(c.floorRange[0]),i()},className:"px-2.5 py-1 rounded-lg bg-gray-900 border border-gray-800 hover:border-cyan-500/40 text-gray-300 hover:text-cyan-300 text-[11px]",children:[c.name," (L",c.floorRange[0],"-",c.floorRange[1],")"]},c.category))})]}),o.length>0&&g.jsxs("div",{children:[g.jsx("div",{className:"text-[10px] text-gray-500 uppercase tracking-widest mb-2",children:"FLOORS MATCHES"}),g.jsx("div",{className:"space-y-1",children:o.map(c=>g.jsxs("div",{onClick:()=>{e(c.id),nt.playFloorChime(c.id),i()},className:"p-2.5 rounded-xl bg-gray-900/60 border border-gray-800 hover:border-cyan-500/40 flex items-center justify-between cursor-pointer transition-all",children:[g.jsxs("div",{className:"flex items-center gap-2",children:[g.jsx(Yf,{className:"w-4 h-4 text-cyan-400"}),g.jsxs("span",{className:"font-bold text-white",children:["Floor ",c.id]}),g.jsxs("span",{className:"text-gray-400",children:["(",c.departmentName,")"]})]}),g.jsxs("span",{className:"text-cyan-300",children:[c.agents.length," Agents"]})]},c.id))})]}),l.length>0&&g.jsxs("div",{children:[g.jsx("div",{className:"text-[10px] text-gray-500 uppercase tracking-widest mb-2",children:"AI AGENT MATCHES"}),g.jsx("div",{className:"space-y-1",children:l.map(c=>g.jsxs("div",{onClick:()=>{n(c.id,c.floorId),nt.playClick(),i()},className:"p-2.5 rounded-xl bg-gray-900/60 border border-gray-800 hover:border-cyan-500/40 flex items-center justify-between cursor-pointer transition-all",children:[g.jsxs("div",{className:"flex items-center gap-2",children:[g.jsx(Jx,{className:"w-4 h-4 text-purple-400"}),g.jsx("span",{className:"font-bold text-white",children:c.name}),g.jsxs("span",{className:"text-gray-400",children:["(",c.role,")"]})]}),g.jsxs("div",{className:"text-right",children:[g.jsxs("span",{className:"text-cyan-300 font-bold",children:["Floor ",c.floorId]}),g.jsx("span",{className:"text-[10px] text-gray-500 block",children:c.aiModel})]})]},c.id))})]})]})]})})},aA=()=>null;class oA{constructor(){aa(this,"models",[{id:"claude-3-5",name:"Claude 3.5 Sonnet",provider:"Claude",latencyMs:250,dailyQuotaTokens:1e7,tokensUsedToday:0,failureRate:.02,rateLimitPerMin:15e4,isActive:!0},{id:"gemini-1-5",name:"Gemini 1.5 Pro",provider:"Gemini",latencyMs:180,dailyQuotaTokens:15e6,tokensUsedToday:0,failureRate:.01,rateLimitPerMin:2e5,isActive:!0},{id:"gpt-4o",name:"GPT-4o Enterprise",provider:"OpenAI",latencyMs:220,dailyQuotaTokens:12e6,tokensUsedToday:0,failureRate:.015,rateLimitPerMin:18e4,isActive:!0},{id:"llama-3-1",name:"Llama 3.1 70B",provider:"OpenRouter",latencyMs:350,dailyQuotaTokens:2e7,tokensUsedToday:0,failureRate:.05,rateLimitPerMin:25e4,isActive:!0},{id:"deepseek-v3",name:"DeepSeek-V3",provider:"Local",latencyMs:120,dailyQuotaTokens:3e7,tokensUsedToday:0,failureRate:.03,rateLimitPerMin:4e5,isActive:!0}]);aa(this,"logs",[])}getModels(){return this.models}getLogs(){return this.logs}routeRequest(e,n,i,r){const s=this.models.find(l=>l.name===i);let a=null;if(s){const l=Math.random();s.tokensUsedToday>=s.dailyQuotaTokens?a="quota_exceeded":l<s.failureRate?a="api_failure":s.latencyMs>500?a="high_latency":Math.random()<.02&&(a="network_failure")}else a="api_failure";if(!a)return s&&(s.tokensUsedToday+=Math.floor(Math.random()*5e3)+1e3),{modelName:i,switched:!1};const o=r.length>0?r:this.models.map(l=>l.name);for(const l of o){if(l===i)continue;const c=this.models.find(d=>d.name===l&&d.isActive);if(c&&c.tokensUsedToday<c.dailyQuotaTokens&&c.latencyMs<400){const d={timestamp:new Date().toLocaleTimeString(),agentId:e,agentName:n,oldModel:i,newModel:l,reason:a};return this.logs.unshift(d),this.logs.length>50&&this.logs.pop(),c.tokensUsedToday+=Math.floor(Math.random()*5e3)+1e3,{modelName:l,switched:!0,reason:a}}}return{modelName:i,switched:!1}}updateModelStats(){this.models.forEach(e=>{e.latencyMs=Math.max(50,e.latencyMs+Math.floor(Math.random()*60)-30),e.tokensUsedToday=Math.min(e.dailyQuotaTokens,e.tokensUsedToday+Math.floor(Math.random()*2e4))})}}const Nu=new oA,lA=()=>{const[t,e]=me.useState(Iy),[n,i]=me.useState(95),[r,s]=me.useState(null),[a,o]=me.useState("full_skyscraper"),[l,c]=me.useState([{id:"car_A",currentFloor:1,targetFloor:95,posY:1.2,isMoving:!0,passengerAgentIds:[],speed:4.5},{id:"car_B",currentFloor:100,targetFloor:15,posY:298.2,isMoving:!0,passengerAgentIds:[],speed:5}]),[d,h]=me.useState(Uy),[f,m]=me.useState(Oy),[_,M]=me.useState(ky),[p,u]=me.useState(Ly),[v,x]=me.useState(!1),[E,P]=me.useState(!1),[A,w]=me.useState(!1),[D,$]=me.useState(!1),S=t.find(z=>z.id===n)||t[0];let C;if(r)for(const z of t){const W=z.agents.find(N=>N.id===r);if(W){C=W;break}}me.useEffect(()=>{const z=W=>{var N;(W.metaKey||W.ctrlKey)&&W.key.toLowerCase()==="k"?(W.preventDefault(),P(B=>!B)):W.code==="Space"&&((N=document.activeElement)==null?void 0:N.tagName)!=="INPUT"?(W.preventDefault(),o("full_skyscraper"),nt.playClick()):W.key==="1"?o("full_skyscraper"):W.key==="2"?o("floor_focus"):W.key==="3"?o("agent_focus"):W.key==="4"&&o("sky_lounge")};return window.addEventListener("keydown",z),()=>window.removeEventListener("keydown",z)},[]),me.useEffect(()=>{if(p.emergencyPause)return;const z=setInterval(()=>{Nu.updateModelStats(),e(W=>W.map(N=>{const B=N.agents.map(F=>{const te=Math.random(),ae=ax(N.id);let Ae=F.currentTask.progress;F.currentTask.status,F.status==="working_at_desk"&&Ae<100&&(Ae=Math.min(100,Ae+Math.floor(Math.random()*4)+1),Ae===100&&setTimeout(()=>{M(re=>[{id:`notif_task_${Date.now()}_${Math.random()}`,timestamp:new Date().toLocaleTimeString(),title:`Task Completed: ${F.name}`,message:`Successfully finished: "${F.currentTask.title}" on Floor ${N.id}.`,type:"success",floorId:N.id},...re].slice(0,3))},0));let O=F.aiModel,J=[...F.logs];if(p.globalAutoSwitch){const re=Nu.routeRequest(F.id,F.name,F.aiModel,p.modelPriority);re.switched&&(O=re.modelName,J.unshift({id:`log_switch_${Date.now()}_${Math.random()}`,timestamp:new Date().toLocaleTimeString(),message:`Auto-switched from ${F.aiModel} to ${re.modelName} due to [${re.reason}]`,severity:"warn",source:"ModelRouter"}))}if(te<.15){const re=ae.find(de=>de.type==="meeting")||ae[0];return{...F,status:"in_meeting",pos:{...re.pos},aiModel:O,logs:J,speechBubble:"Reviewing Q3 Model Benchmarks & Latency...",currentTask:{...F.currentTask,progress:Ae}}}else if(te<.3){const re=ae.find(de=>de.type==="lounge")||ae[0];return{...F,status:"coffee_break",pos:{...re.pos},aiModel:O,logs:J,speechBubble:void 0,currentTask:{...F.currentTask,progress:Ae}}}else if(te<.5){const re=ae[Math.floor(Math.random()*4)]||ae[0];return{...F,status:"working_at_desk",pos:{...re.pos},aiModel:O,logs:J,speechBubble:void 0,currentTask:{...F.currentTask,progress:Ae}}}return{...F,aiModel:O,logs:J,currentTask:{...F.currentTask,progress:Ae}}});return{...N,agents:B}})),c(W=>W.map(N=>{let B=N.targetFloor,F=N.posY;const ae=(N.targetFloor-1)*3+1.2-N.posY;return Math.abs(ae)<1?(B=Math.floor(Math.random()*99)+1,nt.playFloorChime(N.targetFloor)):F+=Math.sign(ae)*N.speed,{...N,posY:F,targetFloor:B,currentFloor:Math.min(100,Math.max(1,Math.floor(F/3)+1))}})),h(W=>({...W,totalTokensGenerated:W.totalTokensGenerated+Math.floor(Math.random()*4500)+1500,tokenBurnRatePerMin:24e4+Math.floor(Math.random()*12e3)})),Math.random()<.015&&M(W=>[{id:`notif_critical_${Date.now()}`,timestamp:new Date().toLocaleTimeString(),title:"CRITICAL ALERT: Core Overload",message:"Quantum processing core reached 95% CPU load. Cooling system activated.",type:"critical"},...W].slice(0,3))},2e3);return()=>clearInterval(z)},[p.emergencyPause]);const K=me.useCallback(z=>{i(z),o("floor_focus")},[]),Q=me.useCallback((z,W)=>{s(z),W&&i(W),o("agent_focus")},[]),I=z=>{const W={id:`agent_custom_${Date.now()}`,name:z.name||"New AI Agent",codeName:`AGNT-${n.toString().padStart(3,"0")}-CUSTOM`,role:z.role||"Autonomous Specialist",departmentId:z.departmentId||S.departmentCategory,departmentName:z.departmentName||S.departmentName,floorId:n,roomId:`room_f${n}_1`,roomName:S.name,status:"working_at_desk",avatarColor:z.avatarColor||"#38bdf8",avatarShape:z.avatarShape||"sphere",aiModel:z.aiModel||"Claude 3.5 Sonnet",cpuLoad:45,memoryUsage:50,tokensPerSec:1e3,efficiencyScore:92,currentTask:{id:`task_new_${Date.now()}`,title:`Floor ${n} Initial Pipeline Deployment`,progress:15,status:"in_progress",eta:"10m",subtasks:[{id:"st1",text:"Boot virtual agent process",done:!0}]},logs:[],memory:[],pos:{x:0,y:(n-1)*3+1.2,z:0},targetPos:{x:0,y:(n-1)*3+1.2,z:0},currentWaypointId:`f${n}_desk1`};e(N=>N.map(B=>B.id===n?{...B,agents:[...B.agents,W]}:B))},q=z=>{e(W=>W.map(N=>{if(N.id===n){const B=N.agents.map((F,te)=>te===0?{...F,currentTask:{...F.currentTask,...z,id:`task_assigned_${Date.now()}`}}:F);return{...N,agents:B}}return N}))};return g.jsxs("div",{className:"w-screen h-screen bg-gray-950 text-white flex flex-col overflow-hidden select-none font-sans relative",children:[g.jsx(Zb,{selectedFloorId:n,onSelectFloor:K,cameraPreset:a,onSelectCameraPreset:o,onOpenSearch:()=>P(!0),onOpenCEOControls:()=>x(!0),metrics:d}),g.jsxs("div",{className:"flex-1 w-full h-full flex relative overflow-hidden",children:[g.jsx(eA,{messages:f,metrics:d,ceoSettings:p,onOpenCEOControls:()=>x(!0)}),g.jsx("div",{className:"flex-1 pointer-events-none"}),g.jsx(Jb,{floor:S,selectedAgentId:r,onSelectAgent:z=>Q(z),onOpenDeployAgent:()=>w(!0),onOpenAssignTask:()=>$(!0)}),g.jsx("main",{className:"absolute inset-0 w-full h-full z-0 bg-gray-950",children:g.jsx(Ab,{floors:t,selectedFloorId:n,selectedAgentId:r,cameraPreset:a,elevators:l,graphicsQuality:p.graphicsQuality||"high",onSelectFloor:K,onSelectAgent:z=>Q(z)})})]}),g.jsx(Qb,{onSelectFloor:K,metrics:d,notifications:_,routerLogs:Nu.getLogs(),onOpenSearch:()=>P(!0),onOpenDeploy:()=>w(!0),onOpenAssign:()=>$(!0),onOpenCEOControls:()=>x(!0)}),g.jsx(aA,{notifications:_,onDismiss:z=>M(W=>W.filter(N=>N.id!==z)),onSelectFloor:K}),v&&g.jsx(tA,{settings:p,onUpdateSettings:u,onClose:()=>x(!1)}),C&&g.jsx(nA,{agent:C,floor:t.find(z=>z.id===C.floorId)||S,onClose:()=>s(null),onUpdateAgentStatus:(z,W)=>{e(N=>N.map(B=>({...B,agents:B.agents.map(F=>F.id===z?{...F,status:W}:F)})))}}),A&&g.jsx(iA,{floor:S,onDeploy:I,onClose:()=>w(!1)}),D&&g.jsx(rA,{floor:S,onAssign:q,onClose:()=>$(!1)}),E&&g.jsx(sA,{floors:t,onSelectFloor:K,onSelectAgent:Q,onClose:()=>P(!1)})]})};Lu.createRoot(document.getElementById("root")).render(g.jsx(_v.StrictMode,{children:g.jsx(lA,{})}));
