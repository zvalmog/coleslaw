(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const d of c.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();function ov(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}var zf={exports:{}},vo={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Eg;function jS(){if(Eg)return vo;Eg=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(r,l,c){var d=null;if(c!==void 0&&(d=""+c),l.key!==void 0&&(d=""+l.key),"key"in l){c={};for(var h in l)h!=="key"&&(c[h]=l[h])}else c=l;return l=c.ref,{$$typeof:o,type:r,key:d,ref:l!==void 0?l:null,props:c}}return vo.Fragment=e,vo.jsx=i,vo.jsxs=i,vo}var Tg;function ZS(){return Tg||(Tg=1,zf.exports=jS()),zf.exports}var Co=ZS(),Bf={exports:{}},ee={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ag;function KS(){if(Ag)return ee;Ag=1;var o=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),d=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),S=Symbol.for("react.activity"),x=Symbol.iterator;function M(U){return U===null||typeof U!="object"?null:(U=x&&U[x]||U["@@iterator"],typeof U=="function"?U:null)}var R={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},C=Object.assign,y={};function v(U,Z,xt){this.props=U,this.context=Z,this.refs=y,this.updater=xt||R}v.prototype.isReactComponent={},v.prototype.setState=function(U,Z){if(typeof U!="object"&&typeof U!="function"&&U!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,U,Z,"setState")},v.prototype.forceUpdate=function(U){this.updater.enqueueForceUpdate(this,U,"forceUpdate")};function L(){}L.prototype=v.prototype;function D(U,Z,xt){this.props=U,this.context=Z,this.refs=y,this.updater=xt||R}var P=D.prototype=new L;P.constructor=D,C(P,v.prototype),P.isPureReactComponent=!0;var tt=Array.isArray;function I(){}var N={H:null,A:null,T:null,S:null},O=Object.prototype.hasOwnProperty;function T(U,Z,xt){var V=xt.ref;return{$$typeof:o,type:U,key:Z,ref:V!==void 0?V:null,props:xt}}function E(U,Z){return T(U.type,Z,U.props)}function q(U){return typeof U=="object"&&U!==null&&U.$$typeof===o}function lt(U){var Z={"=":"=0",":":"=2"};return"$"+U.replace(/[=:]/g,function(xt){return Z[xt]})}var G=/\/+/g;function dt(U,Z){return typeof U=="object"&&U!==null&&U.key!=null?lt(""+U.key):Z.toString(36)}function pt(U){switch(U.status){case"fulfilled":return U.value;case"rejected":throw U.reason;default:switch(typeof U.status=="string"?U.then(I,I):(U.status="pending",U.then(function(Z){U.status==="pending"&&(U.status="fulfilled",U.value=Z)},function(Z){U.status==="pending"&&(U.status="rejected",U.reason=Z)})),U.status){case"fulfilled":return U.value;case"rejected":throw U.reason}}throw U}function F(U,Z,xt,V,ct){var Et=typeof U;(Et==="undefined"||Et==="boolean")&&(U=null);var yt=!1;if(U===null)yt=!0;else switch(Et){case"bigint":case"string":case"number":yt=!0;break;case"object":switch(U.$$typeof){case o:case e:yt=!0;break;case g:return yt=U._init,F(yt(U._payload),Z,xt,V,ct)}}if(yt)return ct=ct(U),yt=V===""?"."+dt(U,0):V,tt(ct)?(xt="",yt!=null&&(xt=yt.replace(G,"$&/")+"/"),F(ct,Z,xt,"",function(j){return j})):ct!=null&&(q(ct)&&(ct=E(ct,xt+(ct.key==null||U&&U.key===ct.key?"":(""+ct.key).replace(G,"$&/")+"/")+yt)),Z.push(ct)),1;yt=0;var Xt=V===""?".":V+":";if(tt(U))for(var Bt=0;Bt<U.length;Bt++)V=U[Bt],Et=Xt+dt(V,Bt),yt+=F(V,Z,xt,Et,ct);else if(Bt=M(U),typeof Bt=="function")for(U=Bt.call(U),Bt=0;!(V=U.next()).done;)V=V.value,Et=Xt+dt(V,Bt++),yt+=F(V,Z,xt,Et,ct);else if(Et==="object"){if(typeof U.then=="function")return F(pt(U),Z,xt,V,ct);throw Z=String(U),Error("Objects are not valid as a React child (found: "+(Z==="[object Object]"?"object with keys {"+Object.keys(U).join(", ")+"}":Z)+"). If you meant to render a collection of children, use an array instead.")}return yt}function K(U,Z,xt){if(U==null)return U;var V=[],ct=0;return F(U,V,"","",function(Et){return Z.call(xt,Et,ct++)}),V}function W(U){if(U._status===-1){var Z=U._result;Z=Z(),Z.then(function(xt){(U._status===0||U._status===-1)&&(U._status=1,U._result=xt)},function(xt){(U._status===0||U._status===-1)&&(U._status=2,U._result=xt)}),U._status===-1&&(U._status=0,U._result=Z)}if(U._status===1)return U._result.default;throw U._result}var vt=typeof reportError=="function"?reportError:function(U){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var Z=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof U=="object"&&U!==null&&typeof U.message=="string"?String(U.message):String(U),error:U});if(!window.dispatchEvent(Z))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",U);return}console.error(U)},ut={map:K,forEach:function(U,Z,xt){K(U,function(){Z.apply(this,arguments)},xt)},count:function(U){var Z=0;return K(U,function(){Z++}),Z},toArray:function(U){return K(U,function(Z){return Z})||[]},only:function(U){if(!q(U))throw Error("React.Children.only expected to receive a single React element child.");return U}};return ee.Activity=S,ee.Children=ut,ee.Component=v,ee.Fragment=i,ee.Profiler=l,ee.PureComponent=D,ee.StrictMode=r,ee.Suspense=m,ee.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=N,ee.__COMPILER_RUNTIME={__proto__:null,c:function(U){return N.H.useMemoCache(U)}},ee.cache=function(U){return function(){return U.apply(null,arguments)}},ee.cacheSignal=function(){return null},ee.cloneElement=function(U,Z,xt){if(U==null)throw Error("The argument must be a React element, but you passed "+U+".");var V=C({},U.props),ct=U.key;if(Z!=null)for(Et in Z.key!==void 0&&(ct=""+Z.key),Z)!O.call(Z,Et)||Et==="key"||Et==="__self"||Et==="__source"||Et==="ref"&&Z.ref===void 0||(V[Et]=Z[Et]);var Et=arguments.length-2;if(Et===1)V.children=xt;else if(1<Et){for(var yt=Array(Et),Xt=0;Xt<Et;Xt++)yt[Xt]=arguments[Xt+2];V.children=yt}return T(U.type,ct,V)},ee.createContext=function(U){return U={$$typeof:d,_currentValue:U,_currentValue2:U,_threadCount:0,Provider:null,Consumer:null},U.Provider=U,U.Consumer={$$typeof:c,_context:U},U},ee.createElement=function(U,Z,xt){var V,ct={},Et=null;if(Z!=null)for(V in Z.key!==void 0&&(Et=""+Z.key),Z)O.call(Z,V)&&V!=="key"&&V!=="__self"&&V!=="__source"&&(ct[V]=Z[V]);var yt=arguments.length-2;if(yt===1)ct.children=xt;else if(1<yt){for(var Xt=Array(yt),Bt=0;Bt<yt;Bt++)Xt[Bt]=arguments[Bt+2];ct.children=Xt}if(U&&U.defaultProps)for(V in yt=U.defaultProps,yt)ct[V]===void 0&&(ct[V]=yt[V]);return T(U,Et,ct)},ee.createRef=function(){return{current:null}},ee.forwardRef=function(U){return{$$typeof:h,render:U}},ee.isValidElement=q,ee.lazy=function(U){return{$$typeof:g,_payload:{_status:-1,_result:U},_init:W}},ee.memo=function(U,Z){return{$$typeof:p,type:U,compare:Z===void 0?null:Z}},ee.startTransition=function(U){var Z=N.T,xt={};N.T=xt;try{var V=U(),ct=N.S;ct!==null&&ct(xt,V),typeof V=="object"&&V!==null&&typeof V.then=="function"&&V.then(I,vt)}catch(Et){vt(Et)}finally{Z!==null&&xt.types!==null&&(Z.types=xt.types),N.T=Z}},ee.unstable_useCacheRefresh=function(){return N.H.useCacheRefresh()},ee.use=function(U){return N.H.use(U)},ee.useActionState=function(U,Z,xt){return N.H.useActionState(U,Z,xt)},ee.useCallback=function(U,Z){return N.H.useCallback(U,Z)},ee.useContext=function(U){return N.H.useContext(U)},ee.useDebugValue=function(){},ee.useDeferredValue=function(U,Z){return N.H.useDeferredValue(U,Z)},ee.useEffect=function(U,Z){return N.H.useEffect(U,Z)},ee.useEffectEvent=function(U){return N.H.useEffectEvent(U)},ee.useId=function(){return N.H.useId()},ee.useImperativeHandle=function(U,Z,xt){return N.H.useImperativeHandle(U,Z,xt)},ee.useInsertionEffect=function(U,Z){return N.H.useInsertionEffect(U,Z)},ee.useLayoutEffect=function(U,Z){return N.H.useLayoutEffect(U,Z)},ee.useMemo=function(U,Z){return N.H.useMemo(U,Z)},ee.useOptimistic=function(U,Z){return N.H.useOptimistic(U,Z)},ee.useReducer=function(U,Z,xt){return N.H.useReducer(U,Z,xt)},ee.useRef=function(U){return N.H.useRef(U)},ee.useState=function(U){return N.H.useState(U)},ee.useSyncExternalStore=function(U,Z,xt){return N.H.useSyncExternalStore(U,Z,xt)},ee.useTransition=function(){return N.H.useTransition()},ee.version="19.2.0",ee}var bg;function Nh(){return bg||(bg=1,Bf.exports=KS()),Bf.exports}var mu=Nh();const QS=ov(mu);var If={exports:{}},So={},Ff={exports:{}},Hf={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Rg;function JS(){return Rg||(Rg=1,(function(o){function e(F,K){var W=F.length;F.push(K);t:for(;0<W;){var vt=W-1>>>1,ut=F[vt];if(0<l(ut,K))F[vt]=K,F[W]=ut,W=vt;else break t}}function i(F){return F.length===0?null:F[0]}function r(F){if(F.length===0)return null;var K=F[0],W=F.pop();if(W!==K){F[0]=W;t:for(var vt=0,ut=F.length,U=ut>>>1;vt<U;){var Z=2*(vt+1)-1,xt=F[Z],V=Z+1,ct=F[V];if(0>l(xt,W))V<ut&&0>l(ct,xt)?(F[vt]=ct,F[V]=W,vt=V):(F[vt]=xt,F[Z]=W,vt=Z);else if(V<ut&&0>l(ct,W))F[vt]=ct,F[V]=W,vt=V;else break t}}return K}function l(F,K){var W=F.sortIndex-K.sortIndex;return W!==0?W:F.id-K.id}if(o.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;o.unstable_now=function(){return c.now()}}else{var d=Date,h=d.now();o.unstable_now=function(){return d.now()-h}}var m=[],p=[],g=1,S=null,x=3,M=!1,R=!1,C=!1,y=!1,v=typeof setTimeout=="function"?setTimeout:null,L=typeof clearTimeout=="function"?clearTimeout:null,D=typeof setImmediate<"u"?setImmediate:null;function P(F){for(var K=i(p);K!==null;){if(K.callback===null)r(p);else if(K.startTime<=F)r(p),K.sortIndex=K.expirationTime,e(m,K);else break;K=i(p)}}function tt(F){if(C=!1,P(F),!R)if(i(m)!==null)R=!0,I||(I=!0,lt());else{var K=i(p);K!==null&&pt(tt,K.startTime-F)}}var I=!1,N=-1,O=5,T=-1;function E(){return y?!0:!(o.unstable_now()-T<O)}function q(){if(y=!1,I){var F=o.unstable_now();T=F;var K=!0;try{t:{R=!1,C&&(C=!1,L(N),N=-1),M=!0;var W=x;try{e:{for(P(F),S=i(m);S!==null&&!(S.expirationTime>F&&E());){var vt=S.callback;if(typeof vt=="function"){S.callback=null,x=S.priorityLevel;var ut=vt(S.expirationTime<=F);if(F=o.unstable_now(),typeof ut=="function"){S.callback=ut,P(F),K=!0;break e}S===i(m)&&r(m),P(F)}else r(m);S=i(m)}if(S!==null)K=!0;else{var U=i(p);U!==null&&pt(tt,U.startTime-F),K=!1}}break t}finally{S=null,x=W,M=!1}K=void 0}}finally{K?lt():I=!1}}}var lt;if(typeof D=="function")lt=function(){D(q)};else if(typeof MessageChannel<"u"){var G=new MessageChannel,dt=G.port2;G.port1.onmessage=q,lt=function(){dt.postMessage(null)}}else lt=function(){v(q,0)};function pt(F,K){N=v(function(){F(o.unstable_now())},K)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(F){F.callback=null},o.unstable_forceFrameRate=function(F){0>F||125<F?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):O=0<F?Math.floor(1e3/F):5},o.unstable_getCurrentPriorityLevel=function(){return x},o.unstable_next=function(F){switch(x){case 1:case 2:case 3:var K=3;break;default:K=x}var W=x;x=K;try{return F()}finally{x=W}},o.unstable_requestPaint=function(){y=!0},o.unstable_runWithPriority=function(F,K){switch(F){case 1:case 2:case 3:case 4:case 5:break;default:F=3}var W=x;x=F;try{return K()}finally{x=W}},o.unstable_scheduleCallback=function(F,K,W){var vt=o.unstable_now();switch(typeof W=="object"&&W!==null?(W=W.delay,W=typeof W=="number"&&0<W?vt+W:vt):W=vt,F){case 1:var ut=-1;break;case 2:ut=250;break;case 5:ut=1073741823;break;case 4:ut=1e4;break;default:ut=5e3}return ut=W+ut,F={id:g++,callback:K,priorityLevel:F,startTime:W,expirationTime:ut,sortIndex:-1},W>vt?(F.sortIndex=W,e(p,F),i(m)===null&&F===i(p)&&(C?(L(N),N=-1):C=!0,pt(tt,W-vt))):(F.sortIndex=ut,e(m,F),R||M||(R=!0,I||(I=!0,lt()))),F},o.unstable_shouldYield=E,o.unstable_wrapCallback=function(F){var K=x;return function(){var W=x;x=K;try{return F.apply(this,arguments)}finally{x=W}}}})(Hf)),Hf}var Cg;function $S(){return Cg||(Cg=1,Ff.exports=JS()),Ff.exports}var Gf={exports:{}},_n={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wg;function tx(){if(wg)return _n;wg=1;var o=Nh();function e(m){var p="https://react.dev/errors/"+m;if(1<arguments.length){p+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)p+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+m+"; visit "+p+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(m,p,g){var S=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:S==null?null:""+S,children:m,containerInfo:p,implementation:g}}var d=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function h(m,p){if(m==="font")return"";if(typeof p=="string")return p==="use-credentials"?p:""}return _n.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,_n.createPortal=function(m,p){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!p||p.nodeType!==1&&p.nodeType!==9&&p.nodeType!==11)throw Error(e(299));return c(m,p,null,g)},_n.flushSync=function(m){var p=d.T,g=r.p;try{if(d.T=null,r.p=2,m)return m()}finally{d.T=p,r.p=g,r.d.f()}},_n.preconnect=function(m,p){typeof m=="string"&&(p?(p=p.crossOrigin,p=typeof p=="string"?p==="use-credentials"?p:"":void 0):p=null,r.d.C(m,p))},_n.prefetchDNS=function(m){typeof m=="string"&&r.d.D(m)},_n.preinit=function(m,p){if(typeof m=="string"&&p&&typeof p.as=="string"){var g=p.as,S=h(g,p.crossOrigin),x=typeof p.integrity=="string"?p.integrity:void 0,M=typeof p.fetchPriority=="string"?p.fetchPriority:void 0;g==="style"?r.d.S(m,typeof p.precedence=="string"?p.precedence:void 0,{crossOrigin:S,integrity:x,fetchPriority:M}):g==="script"&&r.d.X(m,{crossOrigin:S,integrity:x,fetchPriority:M,nonce:typeof p.nonce=="string"?p.nonce:void 0})}},_n.preinitModule=function(m,p){if(typeof m=="string")if(typeof p=="object"&&p!==null){if(p.as==null||p.as==="script"){var g=h(p.as,p.crossOrigin);r.d.M(m,{crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0})}}else p==null&&r.d.M(m)},_n.preload=function(m,p){if(typeof m=="string"&&typeof p=="object"&&p!==null&&typeof p.as=="string"){var g=p.as,S=h(g,p.crossOrigin);r.d.L(m,g,{crossOrigin:S,integrity:typeof p.integrity=="string"?p.integrity:void 0,nonce:typeof p.nonce=="string"?p.nonce:void 0,type:typeof p.type=="string"?p.type:void 0,fetchPriority:typeof p.fetchPriority=="string"?p.fetchPriority:void 0,referrerPolicy:typeof p.referrerPolicy=="string"?p.referrerPolicy:void 0,imageSrcSet:typeof p.imageSrcSet=="string"?p.imageSrcSet:void 0,imageSizes:typeof p.imageSizes=="string"?p.imageSizes:void 0,media:typeof p.media=="string"?p.media:void 0})}},_n.preloadModule=function(m,p){if(typeof m=="string")if(p){var g=h(p.as,p.crossOrigin);r.d.m(m,{as:typeof p.as=="string"&&p.as!=="script"?p.as:void 0,crossOrigin:g,integrity:typeof p.integrity=="string"?p.integrity:void 0})}else r.d.m(m)},_n.requestFormReset=function(m){r.d.r(m)},_n.unstable_batchedUpdates=function(m,p){return m(p)},_n.useFormState=function(m,p,g){return d.H.useFormState(m,p,g)},_n.useFormStatus=function(){return d.H.useHostTransitionStatus()},_n.version="19.2.0",_n}var Dg;function ex(){if(Dg)return Gf.exports;Dg=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),Gf.exports=tx(),Gf.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ug;function nx(){if(Ug)return So;Ug=1;var o=$S(),e=Nh(),i=ex();function r(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function d(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function h(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function m(t){if(c(t)!==t)throw Error(r(188))}function p(t){var n=t.alternate;if(!n){if(n=c(t),n===null)throw Error(r(188));return n!==t?null:t}for(var a=t,s=n;;){var u=a.return;if(u===null)break;var f=u.alternate;if(f===null){if(s=u.return,s!==null){a=s;continue}break}if(u.child===f.child){for(f=u.child;f;){if(f===a)return m(u),t;if(f===s)return m(u),n;f=f.sibling}throw Error(r(188))}if(a.return!==s.return)a=u,s=f;else{for(var _=!1,A=u.child;A;){if(A===a){_=!0,a=u,s=f;break}if(A===s){_=!0,s=u,a=f;break}A=A.sibling}if(!_){for(A=f.child;A;){if(A===a){_=!0,a=f,s=u;break}if(A===s){_=!0,s=f,a=u;break}A=A.sibling}if(!_)throw Error(r(189))}}if(a.alternate!==s)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?t:n}function g(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=g(t),n!==null)return n;t=t.sibling}return null}var S=Object.assign,x=Symbol.for("react.element"),M=Symbol.for("react.transitional.element"),R=Symbol.for("react.portal"),C=Symbol.for("react.fragment"),y=Symbol.for("react.strict_mode"),v=Symbol.for("react.profiler"),L=Symbol.for("react.consumer"),D=Symbol.for("react.context"),P=Symbol.for("react.forward_ref"),tt=Symbol.for("react.suspense"),I=Symbol.for("react.suspense_list"),N=Symbol.for("react.memo"),O=Symbol.for("react.lazy"),T=Symbol.for("react.activity"),E=Symbol.for("react.memo_cache_sentinel"),q=Symbol.iterator;function lt(t){return t===null||typeof t!="object"?null:(t=q&&t[q]||t["@@iterator"],typeof t=="function"?t:null)}var G=Symbol.for("react.client.reference");function dt(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===G?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case C:return"Fragment";case v:return"Profiler";case y:return"StrictMode";case tt:return"Suspense";case I:return"SuspenseList";case T:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case R:return"Portal";case D:return t.displayName||"Context";case L:return(t._context.displayName||"Context")+".Consumer";case P:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case N:return n=t.displayName||null,n!==null?n:dt(t.type)||"Memo";case O:n=t._payload,t=t._init;try{return dt(t(n))}catch{}}return null}var pt=Array.isArray,F=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,K=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,W={pending:!1,data:null,method:null,action:null},vt=[],ut=-1;function U(t){return{current:t}}function Z(t){0>ut||(t.current=vt[ut],vt[ut]=null,ut--)}function xt(t,n){ut++,vt[ut]=t.current,t.current=n}var V=U(null),ct=U(null),Et=U(null),yt=U(null);function Xt(t,n){switch(xt(Et,n),xt(ct,t),xt(V,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?qm(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=qm(n),t=Ym(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}Z(V),xt(V,t)}function Bt(){Z(V),Z(ct),Z(Et)}function j(t){t.memoizedState!==null&&xt(yt,t);var n=V.current,a=Ym(n,t.type);n!==a&&(xt(ct,t),xt(V,a))}function _e(t){ct.current===t&&(Z(V),Z(ct)),yt.current===t&&(Z(yt),po._currentValue=W)}var Vt,ve;function Ft(t){if(Vt===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Vt=n&&n[1]||"",ve=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Vt+t+ve}var ie=!1;function $t(t,n){if(!t||ie)return"";ie=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var s={DetermineComponentFrameRoot:function(){try{if(n){var _t=function(){throw Error()};if(Object.defineProperty(_t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(_t,[])}catch(rt){var et=rt}Reflect.construct(t,[],_t)}else{try{_t.call()}catch(rt){et=rt}t.call(_t.prototype)}}else{try{throw Error()}catch(rt){et=rt}(_t=t())&&typeof _t.catch=="function"&&_t.catch(function(){})}}catch(rt){if(rt&&et&&typeof rt.stack=="string")return[rt.stack,et.stack]}return[null,null]}};s.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(s.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(s.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=s.DetermineComponentFrameRoot(),_=f[0],A=f[1];if(_&&A){var B=_.split(`
`),J=A.split(`
`);for(u=s=0;s<B.length&&!B[s].includes("DetermineComponentFrameRoot");)s++;for(;u<J.length&&!J[u].includes("DetermineComponentFrameRoot");)u++;if(s===B.length||u===J.length)for(s=B.length-1,u=J.length-1;1<=s&&0<=u&&B[s]!==J[u];)u--;for(;1<=s&&0<=u;s--,u--)if(B[s]!==J[u]){if(s!==1||u!==1)do if(s--,u--,0>u||B[s]!==J[u]){var ft=`
`+B[s].replace(" at new "," at ");return t.displayName&&ft.includes("<anonymous>")&&(ft=ft.replace("<anonymous>",t.displayName)),ft}while(1<=s&&0<=u);break}}}finally{ie=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?Ft(a):""}function ae(t,n){switch(t.tag){case 26:case 27:case 5:return Ft(t.type);case 16:return Ft("Lazy");case 13:return t.child!==n&&n!==null?Ft("Suspense Fallback"):Ft("Suspense");case 19:return Ft("SuspenseList");case 0:case 15:return $t(t.type,!1);case 11:return $t(t.type.render,!1);case 1:return $t(t.type,!0);case 31:return Ft("Activity");default:return""}}function Ce(t){try{var n="",a=null;do n+=ae(t,a),a=t,t=t.return;while(t);return n}catch(s){return`
Error generating stack: `+s.message+`
`+s.stack}}var z=Object.prototype.hasOwnProperty,b=o.unstable_scheduleCallback,ot=o.unstable_cancelCallback,at=o.unstable_shouldYield,St=o.unstable_requestPaint,gt=o.unstable_now,Ot=o.unstable_getCurrentPriorityLevel,At=o.unstable_ImmediatePriority,Tt=o.unstable_UserBlockingPriority,Zt=o.unstable_NormalPriority,bt=o.unstable_LowPriority,Ht=o.unstable_IdlePriority,ce=o.log,qt=o.unstable_setDisableYieldValue,Dt=null,Nt=null;function jt(t){if(typeof ce=="function"&&qt(t),Nt&&typeof Nt.setStrictMode=="function")try{Nt.setStrictMode(Dt,t)}catch{}}var fe=Math.clz32?Math.clz32:Mt,Jt=Math.log,X=Math.LN2;function Mt(t){return t>>>=0,t===0?32:31-(Jt(t)/X|0)|0}var ht=256,Rt=262144,Ut=4194304;function oe(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function Ae(t,n,a){var s=t.pendingLanes;if(s===0)return 0;var u=0,f=t.suspendedLanes,_=t.pingedLanes;t=t.warmLanes;var A=s&134217727;return A!==0?(s=A&~f,s!==0?u=oe(s):(_&=A,_!==0?u=oe(_):a||(a=A&~t,a!==0&&(u=oe(a))))):(A=s&~f,A!==0?u=oe(A):_!==0?u=oe(_):a||(a=s&~t,a!==0&&(u=oe(a)))),u===0?0:n!==0&&n!==u&&(n&f)===0&&(f=u&-u,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:u}function we(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function sn(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function xe(){var t=Ut;return Ut<<=1,(Ut&62914560)===0&&(Ut=4194304),t}function Dn(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function ke(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Oo(t,n,a,s,u,f){var _=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var A=t.entanglements,B=t.expirationTimes,J=t.hiddenUpdates;for(a=_&~a;0<a;){var ft=31-fe(a),_t=1<<ft;A[ft]=0,B[ft]=-1;var et=J[ft];if(et!==null)for(J[ft]=null,ft=0;ft<et.length;ft++){var rt=et[ft];rt!==null&&(rt.lane&=-536870913)}a&=~_t}s!==0&&bs(t,s,0),f!==0&&u===0&&t.tag!==0&&(t.suspendedLanes|=f&~(_&~n))}function bs(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var s=31-fe(n);t.entangledLanes|=n,t.entanglements[s]=t.entanglements[s]|1073741824|a&261930}function Rs(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var s=31-fe(a),u=1<<s;u&n|t[s]&n&&(t[s]|=n),a&=~u}}function Ia(t,n){var a=n&-n;return a=(a&42)!==0?1:_r(a),(a&(t.suspendedLanes|n))!==0?0:a}function _r(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function $i(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function Cs(){var t=K.p;return t!==0?t:(t=window.event,t===void 0?32:gg(t.type))}function ws(t,n){var a=K.p;try{return K.p=t,n()}finally{K.p=a}}var di=Math.random().toString(36).slice(2),$e="__reactFiber$"+di,pn="__reactProps$"+di,w="__reactContainer$"+di,Y="__reactEvents$"+di,st="__reactListeners$"+di,it="__reactHandles$"+di,nt="__reactResources$"+di,Ct="__reactMarker$"+di;function zt(t){delete t[$e],delete t[pn],delete t[Y],delete t[st],delete t[it]}function Pt(t){var n=t[$e];if(n)return n;for(var a=t.parentNode;a;){if(n=a[w]||a[$e]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=tg(t);t!==null;){if(a=t[$e])return a;t=tg(t)}return n}t=a,a=t.parentNode}return null}function kt(t){if(t=t[$e]||t[w]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function Kt(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(r(33))}function Qt(t){var n=t[nt];return n||(n=t[nt]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function Gt(t){t[Ct]=!0}var Ge=new Set,tn={};function We(t,n){mn(t,n),mn(t+"Capture",n)}function mn(t,n){for(tn[t]=n,t=0;t<n.length;t++)Ge.add(n[t])}var ye=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),te={},ta={};function ze(t){return z.call(ta,t)?!0:z.call(te,t)?!1:ye.test(t)?ta[t]=!0:(te[t]=!0,!1)}function jn(t,n,a){if(ze(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var s=n.toLowerCase().slice(0,5);if(s!=="data-"&&s!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function Fa(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function yn(t,n,a,s){if(s===null)t.removeAttribute(a);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+s)}}function gn(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function en(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function pi(t,n,a){var s=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var u=s.get,f=s.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return u.call(this)},set:function(_){a=""+_,f.call(this,_)}}),Object.defineProperty(t,n,{enumerable:s.enumerable}),{getValue:function(){return a},setValue:function(_){a=""+_},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function Ha(t){if(!t._valueTracker){var n=en(t)?"checked":"value";t._valueTracker=pi(t,n,""+t[n])}}function Mn(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),s="";return t&&(s=en(t)?t.checked?"true":"false":t.value),t=s,t!==a?(n.setValue(t),!0):!1}function ea(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Cu=/[\n"\\]/g;function En(t){return t.replace(Cu,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function wu(t,n,a,s,u,f,_,A){t.name="",_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"?t.type=_:t.removeAttribute("type"),n!=null?_==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+gn(n)):t.value!==""+gn(n)&&(t.value=""+gn(n)):_!=="submit"&&_!=="reset"||t.removeAttribute("value"),n!=null?Du(t,_,gn(n)):a!=null?Du(t,_,gn(a)):s!=null&&t.removeAttribute("value"),u==null&&f!=null&&(t.defaultChecked=!!f),u!=null&&(t.checked=u&&typeof u!="function"&&typeof u!="symbol"),A!=null&&typeof A!="function"&&typeof A!="symbol"&&typeof A!="boolean"?t.name=""+gn(A):t.removeAttribute("name")}function Hh(t,n,a,s,u,f,_,A){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(t.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){Ha(t);return}a=a!=null?""+gn(a):"",n=n!=null?""+gn(n):a,A||n===t.value||(t.value=n),t.defaultValue=n}s=s??u,s=typeof s!="function"&&typeof s!="symbol"&&!!s,t.checked=A?t.checked:!!s,t.defaultChecked=!!s,_!=null&&typeof _!="function"&&typeof _!="symbol"&&typeof _!="boolean"&&(t.name=_),Ha(t)}function Du(t,n,a){n==="number"&&ea(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function vr(t,n,a,s){if(t=t.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<t.length;a++)u=n.hasOwnProperty("$"+t[a].value),t[a].selected!==u&&(t[a].selected=u),u&&s&&(t[a].defaultSelected=!0)}else{for(a=""+gn(a),n=null,u=0;u<t.length;u++){if(t[u].value===a){t[u].selected=!0,s&&(t[u].defaultSelected=!0);return}n!==null||t[u].disabled||(n=t[u])}n!==null&&(n.selected=!0)}}function Gh(t,n,a){if(n!=null&&(n=""+gn(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+gn(a):""}function Vh(t,n,a,s){if(n==null){if(s!=null){if(a!=null)throw Error(r(92));if(pt(s)){if(1<s.length)throw Error(r(93));s=s[0]}a=s}a==null&&(a=""),n=a}a=gn(n),t.defaultValue=a,s=t.textContent,s===a&&s!==""&&s!==null&&(t.value=s),Ha(t)}function Sr(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var Xv=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Xh(t,n,a){var s=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?s?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":s?t.setProperty(n,a):typeof a!="number"||a===0||Xv.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function kh(t,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(t=t.style,a!=null){for(var s in a)!a.hasOwnProperty(s)||n!=null&&n.hasOwnProperty(s)||(s.indexOf("--")===0?t.setProperty(s,""):s==="float"?t.cssFloat="":t[s]="");for(var u in n)s=n[u],n.hasOwnProperty(u)&&a[u]!==s&&Xh(t,u,s)}else for(var f in n)n.hasOwnProperty(f)&&Xh(t,f,n[f])}function Uu(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var kv=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Wv=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Po(t){return Wv.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function Ti(){}var Lu=null;function Nu(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var xr=null,yr=null;function Wh(t){var n=kt(t);if(n&&(t=n.stateNode)){var a=t[pn]||null;t:switch(t=n.stateNode,n.type){case"input":if(wu(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+En(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var s=a[n];if(s!==t&&s.form===t.form){var u=s[pn]||null;if(!u)throw Error(r(90));wu(s,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)s=a[n],s.form===t.form&&Mn(s)}break t;case"textarea":Gh(t,a.value,a.defaultValue);break t;case"select":n=a.value,n!=null&&vr(t,!!a.multiple,n,!1)}}}var Ou=!1;function qh(t,n,a){if(Ou)return t(n,a);Ou=!0;try{var s=t(n);return s}finally{if(Ou=!1,(xr!==null||yr!==null)&&(Ml(),xr&&(n=xr,t=yr,yr=xr=null,Wh(n),t)))for(n=0;n<t.length;n++)Wh(t[n])}}function Ds(t,n){var a=t.stateNode;if(a===null)return null;var s=a[pn]||null;if(s===null)return null;a=s[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(s=!s.disabled)||(t=t.type,s=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!s;break t;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var Ai=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Pu=!1;if(Ai)try{var Us={};Object.defineProperty(Us,"passive",{get:function(){Pu=!0}}),window.addEventListener("test",Us,Us),window.removeEventListener("test",Us,Us)}catch{Pu=!1}var na=null,zu=null,zo=null;function Yh(){if(zo)return zo;var t,n=zu,a=n.length,s,u="value"in na?na.value:na.textContent,f=u.length;for(t=0;t<a&&n[t]===u[t];t++);var _=a-t;for(s=1;s<=_&&n[a-s]===u[f-s];s++);return zo=u.slice(t,1<s?1-s:void 0)}function Bo(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function Io(){return!0}function jh(){return!1}function Un(t){function n(a,s,u,f,_){this._reactName=a,this._targetInst=u,this.type=s,this.nativeEvent=f,this.target=_,this.currentTarget=null;for(var A in t)t.hasOwnProperty(A)&&(a=t[A],this[A]=a?a(f):f[A]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?Io:jh,this.isPropagationStopped=jh,this}return S(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Io)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Io)},persist:function(){},isPersistent:Io}),n}var Ga={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Fo=Un(Ga),Ls=S({},Ga,{view:0,detail:0}),qv=Un(Ls),Bu,Iu,Ns,Ho=S({},Ls,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Hu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ns&&(Ns&&t.type==="mousemove"?(Bu=t.screenX-Ns.screenX,Iu=t.screenY-Ns.screenY):Iu=Bu=0,Ns=t),Bu)},movementY:function(t){return"movementY"in t?t.movementY:Iu}}),Zh=Un(Ho),Yv=S({},Ho,{dataTransfer:0}),jv=Un(Yv),Zv=S({},Ls,{relatedTarget:0}),Fu=Un(Zv),Kv=S({},Ga,{animationName:0,elapsedTime:0,pseudoElement:0}),Qv=Un(Kv),Jv=S({},Ga,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),$v=Un(Jv),t0=S({},Ga,{data:0}),Kh=Un(t0),e0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},n0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},i0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function a0(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=i0[t])?!!n[t]:!1}function Hu(){return a0}var r0=S({},Ls,{key:function(t){if(t.key){var n=e0[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=Bo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?n0[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Hu,charCode:function(t){return t.type==="keypress"?Bo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Bo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),s0=Un(r0),o0=S({},Ho,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Qh=Un(o0),l0=S({},Ls,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Hu}),u0=Un(l0),c0=S({},Ga,{propertyName:0,elapsedTime:0,pseudoElement:0}),f0=Un(c0),h0=S({},Ho,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),d0=Un(h0),p0=S({},Ga,{newState:0,oldState:0}),m0=Un(p0),g0=[9,13,27,32],Gu=Ai&&"CompositionEvent"in window,Os=null;Ai&&"documentMode"in document&&(Os=document.documentMode);var _0=Ai&&"TextEvent"in window&&!Os,Jh=Ai&&(!Gu||Os&&8<Os&&11>=Os),$h=" ",td=!1;function ed(t,n){switch(t){case"keyup":return g0.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function nd(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Mr=!1;function v0(t,n){switch(t){case"compositionend":return nd(n);case"keypress":return n.which!==32?null:(td=!0,$h);case"textInput":return t=n.data,t===$h&&td?null:t;default:return null}}function S0(t,n){if(Mr)return t==="compositionend"||!Gu&&ed(t,n)?(t=Yh(),zo=zu=na=null,Mr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Jh&&n.locale!=="ko"?null:n.data;default:return null}}var x0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function id(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!x0[t.type]:n==="textarea"}function ad(t,n,a,s){xr?yr?yr.push(s):yr=[s]:xr=s,n=wl(n,"onChange"),0<n.length&&(a=new Fo("onChange","change",null,a,s),t.push({event:a,listeners:n}))}var Ps=null,zs=null;function y0(t){Hm(t,0)}function Go(t){var n=Kt(t);if(Mn(n))return t}function rd(t,n){if(t==="change")return n}var sd=!1;if(Ai){var Vu;if(Ai){var Xu="oninput"in document;if(!Xu){var od=document.createElement("div");od.setAttribute("oninput","return;"),Xu=typeof od.oninput=="function"}Vu=Xu}else Vu=!1;sd=Vu&&(!document.documentMode||9<document.documentMode)}function ld(){Ps&&(Ps.detachEvent("onpropertychange",ud),zs=Ps=null)}function ud(t){if(t.propertyName==="value"&&Go(zs)){var n=[];ad(n,zs,t,Nu(t)),qh(y0,n)}}function M0(t,n,a){t==="focusin"?(ld(),Ps=n,zs=a,Ps.attachEvent("onpropertychange",ud)):t==="focusout"&&ld()}function E0(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Go(zs)}function T0(t,n){if(t==="click")return Go(n)}function A0(t,n){if(t==="input"||t==="change")return Go(n)}function b0(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var Fn=typeof Object.is=="function"?Object.is:b0;function Bs(t,n){if(Fn(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),s=Object.keys(n);if(a.length!==s.length)return!1;for(s=0;s<a.length;s++){var u=a[s];if(!z.call(n,u)||!Fn(t[u],n[u]))return!1}return!0}function cd(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function fd(t,n){var a=cd(t);t=0;for(var s;a;){if(a.nodeType===3){if(s=t+a.textContent.length,t<=n&&s>=n)return{node:a,offset:n-t};t=s}t:{for(;a;){if(a.nextSibling){a=a.nextSibling;break t}a=a.parentNode}a=void 0}a=cd(a)}}function hd(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?hd(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function dd(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=ea(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=ea(t.document)}return n}function ku(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var R0=Ai&&"documentMode"in document&&11>=document.documentMode,Er=null,Wu=null,Is=null,qu=!1;function pd(t,n,a){var s=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;qu||Er==null||Er!==ea(s)||(s=Er,"selectionStart"in s&&ku(s)?s={start:s.selectionStart,end:s.selectionEnd}:(s=(s.ownerDocument&&s.ownerDocument.defaultView||window).getSelection(),s={anchorNode:s.anchorNode,anchorOffset:s.anchorOffset,focusNode:s.focusNode,focusOffset:s.focusOffset}),Is&&Bs(Is,s)||(Is=s,s=wl(Wu,"onSelect"),0<s.length&&(n=new Fo("onSelect","select",null,n,a),t.push({event:n,listeners:s}),n.target=Er)))}function Va(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var Tr={animationend:Va("Animation","AnimationEnd"),animationiteration:Va("Animation","AnimationIteration"),animationstart:Va("Animation","AnimationStart"),transitionrun:Va("Transition","TransitionRun"),transitionstart:Va("Transition","TransitionStart"),transitioncancel:Va("Transition","TransitionCancel"),transitionend:Va("Transition","TransitionEnd")},Yu={},md={};Ai&&(md=document.createElement("div").style,"AnimationEvent"in window||(delete Tr.animationend.animation,delete Tr.animationiteration.animation,delete Tr.animationstart.animation),"TransitionEvent"in window||delete Tr.transitionend.transition);function Xa(t){if(Yu[t])return Yu[t];if(!Tr[t])return t;var n=Tr[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in md)return Yu[t]=n[a];return t}var gd=Xa("animationend"),_d=Xa("animationiteration"),vd=Xa("animationstart"),C0=Xa("transitionrun"),w0=Xa("transitionstart"),D0=Xa("transitioncancel"),Sd=Xa("transitionend"),xd=new Map,ju="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");ju.push("scrollEnd");function ri(t,n){xd.set(t,n),We(n,[t])}var Vo=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},Zn=[],Ar=0,Zu=0;function Xo(){for(var t=Ar,n=Zu=Ar=0;n<t;){var a=Zn[n];Zn[n++]=null;var s=Zn[n];Zn[n++]=null;var u=Zn[n];Zn[n++]=null;var f=Zn[n];if(Zn[n++]=null,s!==null&&u!==null){var _=s.pending;_===null?u.next=u:(u.next=_.next,_.next=u),s.pending=u}f!==0&&yd(a,u,f)}}function ko(t,n,a,s){Zn[Ar++]=t,Zn[Ar++]=n,Zn[Ar++]=a,Zn[Ar++]=s,Zu|=s,t.lanes|=s,t=t.alternate,t!==null&&(t.lanes|=s)}function Ku(t,n,a,s){return ko(t,n,a,s),Wo(t)}function ka(t,n){return ko(t,null,null,n),Wo(t)}function yd(t,n,a){t.lanes|=a;var s=t.alternate;s!==null&&(s.lanes|=a);for(var u=!1,f=t.return;f!==null;)f.childLanes|=a,s=f.alternate,s!==null&&(s.childLanes|=a),f.tag===22&&(t=f.stateNode,t===null||t._visibility&1||(u=!0)),t=f,f=f.return;return t.tag===3?(f=t.stateNode,u&&n!==null&&(u=31-fe(a),t=f.hiddenUpdates,s=t[u],s===null?t[u]=[n]:s.push(n),n.lane=a|536870912),f):null}function Wo(t){if(50<so)throw so=0,sf=null,Error(r(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var br={};function U0(t,n,a,s){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=s,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Hn(t,n,a,s){return new U0(t,n,a,s)}function Qu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function bi(t,n){var a=t.alternate;return a===null?(a=Hn(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function Md(t,n){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function qo(t,n,a,s,u,f){var _=0;if(s=t,typeof t=="function")Qu(t)&&(_=1);else if(typeof t=="string")_=zS(t,a,V.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case T:return t=Hn(31,a,n,u),t.elementType=T,t.lanes=f,t;case C:return Wa(a.children,u,f,n);case y:_=8,u|=24;break;case v:return t=Hn(12,a,n,u|2),t.elementType=v,t.lanes=f,t;case tt:return t=Hn(13,a,n,u),t.elementType=tt,t.lanes=f,t;case I:return t=Hn(19,a,n,u),t.elementType=I,t.lanes=f,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case D:_=10;break t;case L:_=9;break t;case P:_=11;break t;case N:_=14;break t;case O:_=16,s=null;break t}_=29,a=Error(r(130,t===null?"null":typeof t,"")),s=null}return n=Hn(_,a,n,u),n.elementType=t,n.type=s,n.lanes=f,n}function Wa(t,n,a,s){return t=Hn(7,t,s,n),t.lanes=a,t}function Ju(t,n,a){return t=Hn(6,t,null,n),t.lanes=a,t}function Ed(t){var n=Hn(18,null,null,0);return n.stateNode=t,n}function $u(t,n,a){return n=Hn(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var Td=new WeakMap;function Kn(t,n){if(typeof t=="object"&&t!==null){var a=Td.get(t);return a!==void 0?a:(n={value:t,source:n,stack:Ce(n)},Td.set(t,n),n)}return{value:t,source:n,stack:Ce(n)}}var Rr=[],Cr=0,Yo=null,Fs=0,Qn=[],Jn=0,ia=null,mi=1,gi="";function Ri(t,n){Rr[Cr++]=Fs,Rr[Cr++]=Yo,Yo=t,Fs=n}function Ad(t,n,a){Qn[Jn++]=mi,Qn[Jn++]=gi,Qn[Jn++]=ia,ia=t;var s=mi;t=gi;var u=32-fe(s)-1;s&=~(1<<u),a+=1;var f=32-fe(n)+u;if(30<f){var _=u-u%5;f=(s&(1<<_)-1).toString(32),s>>=_,u-=_,mi=1<<32-fe(n)+u|a<<u|s,gi=f+t}else mi=1<<f|a<<u|s,gi=t}function tc(t){t.return!==null&&(Ri(t,1),Ad(t,1,0))}function ec(t){for(;t===Yo;)Yo=Rr[--Cr],Rr[Cr]=null,Fs=Rr[--Cr],Rr[Cr]=null;for(;t===ia;)ia=Qn[--Jn],Qn[Jn]=null,gi=Qn[--Jn],Qn[Jn]=null,mi=Qn[--Jn],Qn[Jn]=null}function bd(t,n){Qn[Jn++]=mi,Qn[Jn++]=gi,Qn[Jn++]=ia,mi=n.id,gi=n.overflow,ia=t}var cn=null,Be=null,ge=!1,aa=null,$n=!1,nc=Error(r(519));function ra(t){var n=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Hs(Kn(n,t)),nc}function Rd(t){var n=t.stateNode,a=t.type,s=t.memoizedProps;switch(n[$e]=t,n[pn]=s,a){case"dialog":de("cancel",n),de("close",n);break;case"iframe":case"object":case"embed":de("load",n);break;case"video":case"audio":for(a=0;a<lo.length;a++)de(lo[a],n);break;case"source":de("error",n);break;case"img":case"image":case"link":de("error",n),de("load",n);break;case"details":de("toggle",n);break;case"input":de("invalid",n),Hh(n,s.value,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name,!0);break;case"select":de("invalid",n);break;case"textarea":de("invalid",n),Vh(n,s.value,s.defaultValue,s.children)}a=s.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||s.suppressHydrationWarning===!0||km(n.textContent,a)?(s.popover!=null&&(de("beforetoggle",n),de("toggle",n)),s.onScroll!=null&&de("scroll",n),s.onScrollEnd!=null&&de("scrollend",n),s.onClick!=null&&(n.onclick=Ti),n=!0):n=!1,n||ra(t,!0)}function Cd(t){for(cn=t.return;cn;)switch(cn.tag){case 5:case 31:case 13:$n=!1;return;case 27:case 3:$n=!0;return;default:cn=cn.return}}function wr(t){if(t!==cn)return!1;if(!ge)return Cd(t),ge=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||yf(t.type,t.memoizedProps)),a=!a),a&&Be&&ra(t),Cd(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));Be=$m(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));Be=$m(t)}else n===27?(n=Be,Sa(t.type)?(t=bf,bf=null,Be=t):Be=n):Be=cn?ei(t.stateNode.nextSibling):null;return!0}function qa(){Be=cn=null,ge=!1}function ic(){var t=aa;return t!==null&&(Pn===null?Pn=t:Pn.push.apply(Pn,t),aa=null),t}function Hs(t){aa===null?aa=[t]:aa.push(t)}var ac=U(null),Ya=null,Ci=null;function sa(t,n,a){xt(ac,n._currentValue),n._currentValue=a}function wi(t){t._currentValue=ac.current,Z(ac)}function rc(t,n,a){for(;t!==null;){var s=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,s!==null&&(s.childLanes|=n)):s!==null&&(s.childLanes&n)!==n&&(s.childLanes|=n),t===a)break;t=t.return}}function sc(t,n,a,s){var u=t.child;for(u!==null&&(u.return=t);u!==null;){var f=u.dependencies;if(f!==null){var _=u.child;f=f.firstContext;t:for(;f!==null;){var A=f;f=u;for(var B=0;B<n.length;B++)if(A.context===n[B]){f.lanes|=a,A=f.alternate,A!==null&&(A.lanes|=a),rc(f.return,a,t),s||(_=null);break t}f=A.next}}else if(u.tag===18){if(_=u.return,_===null)throw Error(r(341));_.lanes|=a,f=_.alternate,f!==null&&(f.lanes|=a),rc(_,a,t),_=null}else _=u.child;if(_!==null)_.return=u;else for(_=u;_!==null;){if(_===t){_=null;break}if(u=_.sibling,u!==null){u.return=_.return,_=u;break}_=_.return}u=_}}function Dr(t,n,a,s){t=null;for(var u=n,f=!1;u!==null;){if(!f){if((u.flags&524288)!==0)f=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var _=u.alternate;if(_===null)throw Error(r(387));if(_=_.memoizedProps,_!==null){var A=u.type;Fn(u.pendingProps.value,_.value)||(t!==null?t.push(A):t=[A])}}else if(u===yt.current){if(_=u.alternate,_===null)throw Error(r(387));_.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(t!==null?t.push(po):t=[po])}u=u.return}t!==null&&sc(n,t,a,s),n.flags|=262144}function jo(t){for(t=t.firstContext;t!==null;){if(!Fn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function ja(t){Ya=t,Ci=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function fn(t){return wd(Ya,t)}function Zo(t,n){return Ya===null&&ja(t),wd(t,n)}function wd(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},Ci===null){if(t===null)throw Error(r(308));Ci=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else Ci=Ci.next=n;return a}var L0=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,s){t.push(s)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},N0=o.unstable_scheduleCallback,O0=o.unstable_NormalPriority,je={$$typeof:D,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function oc(){return{controller:new L0,data:new Map,refCount:0}}function Gs(t){t.refCount--,t.refCount===0&&N0(O0,function(){t.controller.abort()})}var Vs=null,lc=0,Ur=0,Lr=null;function P0(t,n){if(Vs===null){var a=Vs=[];lc=0,Ur=hf(),Lr={status:"pending",value:void 0,then:function(s){a.push(s)}}}return lc++,n.then(Dd,Dd),n}function Dd(){if(--lc===0&&Vs!==null){Lr!==null&&(Lr.status="fulfilled");var t=Vs;Vs=null,Ur=0,Lr=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function z0(t,n){var a=[],s={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return t.then(function(){s.status="fulfilled",s.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(s.status="rejected",s.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),s}var Ud=F.S;F.S=function(t,n){pm=gt(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&P0(t,n),Ud!==null&&Ud(t,n)};var Za=U(null);function uc(){var t=Za.current;return t!==null?t:Oe.pooledCache}function Ko(t,n){n===null?xt(Za,Za.current):xt(Za,n.pool)}function Ld(){var t=uc();return t===null?null:{parent:je._currentValue,pool:t}}var Nr=Error(r(460)),cc=Error(r(474)),Qo=Error(r(542)),Jo={then:function(){}};function Nd(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Od(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(Ti,Ti),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,zd(t),t;default:if(typeof n.status=="string")n.then(Ti,Ti);else{if(t=Oe,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=n,t.status="pending",t.then(function(s){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=s}},function(s){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=s}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,zd(t),t}throw Qa=n,Nr}}function Ka(t){try{var n=t._init;return n(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Qa=a,Nr):a}}var Qa=null;function Pd(){if(Qa===null)throw Error(r(459));var t=Qa;return Qa=null,t}function zd(t){if(t===Nr||t===Qo)throw Error(r(483))}var Or=null,Xs=0;function $o(t){var n=Xs;return Xs+=1,Or===null&&(Or=[]),Od(Or,t,n)}function ks(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function tl(t,n){throw n.$$typeof===x?Error(r(525)):(t=Object.prototype.toString.call(n),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function Bd(t){function n(k,H){if(t){var Q=k.deletions;Q===null?(k.deletions=[H],k.flags|=16):Q.push(H)}}function a(k,H){if(!t)return null;for(;H!==null;)n(k,H),H=H.sibling;return null}function s(k){for(var H=new Map;k!==null;)k.key!==null?H.set(k.key,k):H.set(k.index,k),k=k.sibling;return H}function u(k,H){return k=bi(k,H),k.index=0,k.sibling=null,k}function f(k,H,Q){return k.index=Q,t?(Q=k.alternate,Q!==null?(Q=Q.index,Q<H?(k.flags|=67108866,H):Q):(k.flags|=67108866,H)):(k.flags|=1048576,H)}function _(k){return t&&k.alternate===null&&(k.flags|=67108866),k}function A(k,H,Q,mt){return H===null||H.tag!==6?(H=Ju(Q,k.mode,mt),H.return=k,H):(H=u(H,Q),H.return=k,H)}function B(k,H,Q,mt){var Wt=Q.type;return Wt===C?ft(k,H,Q.props.children,mt,Q.key):H!==null&&(H.elementType===Wt||typeof Wt=="object"&&Wt!==null&&Wt.$$typeof===O&&Ka(Wt)===H.type)?(H=u(H,Q.props),ks(H,Q),H.return=k,H):(H=qo(Q.type,Q.key,Q.props,null,k.mode,mt),ks(H,Q),H.return=k,H)}function J(k,H,Q,mt){return H===null||H.tag!==4||H.stateNode.containerInfo!==Q.containerInfo||H.stateNode.implementation!==Q.implementation?(H=$u(Q,k.mode,mt),H.return=k,H):(H=u(H,Q.children||[]),H.return=k,H)}function ft(k,H,Q,mt,Wt){return H===null||H.tag!==7?(H=Wa(Q,k.mode,mt,Wt),H.return=k,H):(H=u(H,Q),H.return=k,H)}function _t(k,H,Q){if(typeof H=="string"&&H!==""||typeof H=="number"||typeof H=="bigint")return H=Ju(""+H,k.mode,Q),H.return=k,H;if(typeof H=="object"&&H!==null){switch(H.$$typeof){case M:return Q=qo(H.type,H.key,H.props,null,k.mode,Q),ks(Q,H),Q.return=k,Q;case R:return H=$u(H,k.mode,Q),H.return=k,H;case O:return H=Ka(H),_t(k,H,Q)}if(pt(H)||lt(H))return H=Wa(H,k.mode,Q,null),H.return=k,H;if(typeof H.then=="function")return _t(k,$o(H),Q);if(H.$$typeof===D)return _t(k,Zo(k,H),Q);tl(k,H)}return null}function et(k,H,Q,mt){var Wt=H!==null?H.key:null;if(typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint")return Wt!==null?null:A(k,H,""+Q,mt);if(typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case M:return Q.key===Wt?B(k,H,Q,mt):null;case R:return Q.key===Wt?J(k,H,Q,mt):null;case O:return Q=Ka(Q),et(k,H,Q,mt)}if(pt(Q)||lt(Q))return Wt!==null?null:ft(k,H,Q,mt,null);if(typeof Q.then=="function")return et(k,H,$o(Q),mt);if(Q.$$typeof===D)return et(k,H,Zo(k,Q),mt);tl(k,Q)}return null}function rt(k,H,Q,mt,Wt){if(typeof mt=="string"&&mt!==""||typeof mt=="number"||typeof mt=="bigint")return k=k.get(Q)||null,A(H,k,""+mt,Wt);if(typeof mt=="object"&&mt!==null){switch(mt.$$typeof){case M:return k=k.get(mt.key===null?Q:mt.key)||null,B(H,k,mt,Wt);case R:return k=k.get(mt.key===null?Q:mt.key)||null,J(H,k,mt,Wt);case O:return mt=Ka(mt),rt(k,H,Q,mt,Wt)}if(pt(mt)||lt(mt))return k=k.get(Q)||null,ft(H,k,mt,Wt,null);if(typeof mt.then=="function")return rt(k,H,Q,$o(mt),Wt);if(mt.$$typeof===D)return rt(k,H,Q,Zo(H,mt),Wt);tl(H,mt)}return null}function Lt(k,H,Q,mt){for(var Wt=null,Me=null,It=H,re=H=0,me=null;It!==null&&re<Q.length;re++){It.index>re?(me=It,It=null):me=It.sibling;var Ee=et(k,It,Q[re],mt);if(Ee===null){It===null&&(It=me);break}t&&It&&Ee.alternate===null&&n(k,It),H=f(Ee,H,re),Me===null?Wt=Ee:Me.sibling=Ee,Me=Ee,It=me}if(re===Q.length)return a(k,It),ge&&Ri(k,re),Wt;if(It===null){for(;re<Q.length;re++)It=_t(k,Q[re],mt),It!==null&&(H=f(It,H,re),Me===null?Wt=It:Me.sibling=It,Me=It);return ge&&Ri(k,re),Wt}for(It=s(It);re<Q.length;re++)me=rt(It,k,re,Q[re],mt),me!==null&&(t&&me.alternate!==null&&It.delete(me.key===null?re:me.key),H=f(me,H,re),Me===null?Wt=me:Me.sibling=me,Me=me);return t&&It.forEach(function(Ta){return n(k,Ta)}),ge&&Ri(k,re),Wt}function Yt(k,H,Q,mt){if(Q==null)throw Error(r(151));for(var Wt=null,Me=null,It=H,re=H=0,me=null,Ee=Q.next();It!==null&&!Ee.done;re++,Ee=Q.next()){It.index>re?(me=It,It=null):me=It.sibling;var Ta=et(k,It,Ee.value,mt);if(Ta===null){It===null&&(It=me);break}t&&It&&Ta.alternate===null&&n(k,It),H=f(Ta,H,re),Me===null?Wt=Ta:Me.sibling=Ta,Me=Ta,It=me}if(Ee.done)return a(k,It),ge&&Ri(k,re),Wt;if(It===null){for(;!Ee.done;re++,Ee=Q.next())Ee=_t(k,Ee.value,mt),Ee!==null&&(H=f(Ee,H,re),Me===null?Wt=Ee:Me.sibling=Ee,Me=Ee);return ge&&Ri(k,re),Wt}for(It=s(It);!Ee.done;re++,Ee=Q.next())Ee=rt(It,k,re,Ee.value,mt),Ee!==null&&(t&&Ee.alternate!==null&&It.delete(Ee.key===null?re:Ee.key),H=f(Ee,H,re),Me===null?Wt=Ee:Me.sibling=Ee,Me=Ee);return t&&It.forEach(function(YS){return n(k,YS)}),ge&&Ri(k,re),Wt}function Le(k,H,Q,mt){if(typeof Q=="object"&&Q!==null&&Q.type===C&&Q.key===null&&(Q=Q.props.children),typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case M:t:{for(var Wt=Q.key;H!==null;){if(H.key===Wt){if(Wt=Q.type,Wt===C){if(H.tag===7){a(k,H.sibling),mt=u(H,Q.props.children),mt.return=k,k=mt;break t}}else if(H.elementType===Wt||typeof Wt=="object"&&Wt!==null&&Wt.$$typeof===O&&Ka(Wt)===H.type){a(k,H.sibling),mt=u(H,Q.props),ks(mt,Q),mt.return=k,k=mt;break t}a(k,H);break}else n(k,H);H=H.sibling}Q.type===C?(mt=Wa(Q.props.children,k.mode,mt,Q.key),mt.return=k,k=mt):(mt=qo(Q.type,Q.key,Q.props,null,k.mode,mt),ks(mt,Q),mt.return=k,k=mt)}return _(k);case R:t:{for(Wt=Q.key;H!==null;){if(H.key===Wt)if(H.tag===4&&H.stateNode.containerInfo===Q.containerInfo&&H.stateNode.implementation===Q.implementation){a(k,H.sibling),mt=u(H,Q.children||[]),mt.return=k,k=mt;break t}else{a(k,H);break}else n(k,H);H=H.sibling}mt=$u(Q,k.mode,mt),mt.return=k,k=mt}return _(k);case O:return Q=Ka(Q),Le(k,H,Q,mt)}if(pt(Q))return Lt(k,H,Q,mt);if(lt(Q)){if(Wt=lt(Q),typeof Wt!="function")throw Error(r(150));return Q=Wt.call(Q),Yt(k,H,Q,mt)}if(typeof Q.then=="function")return Le(k,H,$o(Q),mt);if(Q.$$typeof===D)return Le(k,H,Zo(k,Q),mt);tl(k,Q)}return typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint"?(Q=""+Q,H!==null&&H.tag===6?(a(k,H.sibling),mt=u(H,Q),mt.return=k,k=mt):(a(k,H),mt=Ju(Q,k.mode,mt),mt.return=k,k=mt),_(k)):a(k,H)}return function(k,H,Q,mt){try{Xs=0;var Wt=Le(k,H,Q,mt);return Or=null,Wt}catch(It){if(It===Nr||It===Qo)throw It;var Me=Hn(29,It,null,k.mode);return Me.lanes=mt,Me.return=k,Me}finally{}}}var Ja=Bd(!0),Id=Bd(!1),oa=!1;function fc(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function hc(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function la(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function ua(t,n,a){var s=t.updateQueue;if(s===null)return null;if(s=s.shared,(Te&2)!==0){var u=s.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),s.pending=n,n=Wo(t),yd(t,null,a),n}return ko(t,s,n,a),Wo(t)}function Ws(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var s=n.lanes;s&=t.pendingLanes,a|=s,n.lanes=a,Rs(t,a)}}function dc(t,n){var a=t.updateQueue,s=t.alternate;if(s!==null&&(s=s.updateQueue,a===s)){var u=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var _={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?u=f=_:f=f.next=_,a=a.next}while(a!==null);f===null?u=f=n:f=f.next=n}else u=f=n;a={baseState:s.baseState,firstBaseUpdate:u,lastBaseUpdate:f,shared:s.shared,callbacks:s.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var pc=!1;function qs(){if(pc){var t=Lr;if(t!==null)throw t}}function Ys(t,n,a,s){pc=!1;var u=t.updateQueue;oa=!1;var f=u.firstBaseUpdate,_=u.lastBaseUpdate,A=u.shared.pending;if(A!==null){u.shared.pending=null;var B=A,J=B.next;B.next=null,_===null?f=J:_.next=J,_=B;var ft=t.alternate;ft!==null&&(ft=ft.updateQueue,A=ft.lastBaseUpdate,A!==_&&(A===null?ft.firstBaseUpdate=J:A.next=J,ft.lastBaseUpdate=B))}if(f!==null){var _t=u.baseState;_=0,ft=J=B=null,A=f;do{var et=A.lane&-536870913,rt=et!==A.lane;if(rt?(pe&et)===et:(s&et)===et){et!==0&&et===Ur&&(pc=!0),ft!==null&&(ft=ft.next={lane:0,tag:A.tag,payload:A.payload,callback:null,next:null});t:{var Lt=t,Yt=A;et=n;var Le=a;switch(Yt.tag){case 1:if(Lt=Yt.payload,typeof Lt=="function"){_t=Lt.call(Le,_t,et);break t}_t=Lt;break t;case 3:Lt.flags=Lt.flags&-65537|128;case 0:if(Lt=Yt.payload,et=typeof Lt=="function"?Lt.call(Le,_t,et):Lt,et==null)break t;_t=S({},_t,et);break t;case 2:oa=!0}}et=A.callback,et!==null&&(t.flags|=64,rt&&(t.flags|=8192),rt=u.callbacks,rt===null?u.callbacks=[et]:rt.push(et))}else rt={lane:et,tag:A.tag,payload:A.payload,callback:A.callback,next:null},ft===null?(J=ft=rt,B=_t):ft=ft.next=rt,_|=et;if(A=A.next,A===null){if(A=u.shared.pending,A===null)break;rt=A,A=rt.next,rt.next=null,u.lastBaseUpdate=rt,u.shared.pending=null}}while(!0);ft===null&&(B=_t),u.baseState=B,u.firstBaseUpdate=J,u.lastBaseUpdate=ft,f===null&&(u.shared.lanes=0),pa|=_,t.lanes=_,t.memoizedState=_t}}function Fd(t,n){if(typeof t!="function")throw Error(r(191,t));t.call(n)}function Hd(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)Fd(a[t],n)}var Pr=U(null),el=U(0);function Gd(t,n){t=Ii,xt(el,t),xt(Pr,n),Ii=t|n.baseLanes}function mc(){xt(el,Ii),xt(Pr,Pr.current)}function gc(){Ii=el.current,Z(Pr),Z(el)}var Gn=U(null),ti=null;function ca(t){var n=t.alternate;xt(qe,qe.current&1),xt(Gn,t),ti===null&&(n===null||Pr.current!==null||n.memoizedState!==null)&&(ti=t)}function _c(t){xt(qe,qe.current),xt(Gn,t),ti===null&&(ti=t)}function Vd(t){t.tag===22?(xt(qe,qe.current),xt(Gn,t),ti===null&&(ti=t)):fa()}function fa(){xt(qe,qe.current),xt(Gn,Gn.current)}function Vn(t){Z(Gn),ti===t&&(ti=null),Z(qe)}var qe=U(0);function nl(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Tf(a)||Af(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var Di=0,ne=null,De=null,Ze=null,il=!1,zr=!1,$a=!1,al=0,js=0,Br=null,B0=0;function Ve(){throw Error(r(321))}function vc(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!Fn(t[a],n[a]))return!1;return!0}function Sc(t,n,a,s,u,f){return Di=f,ne=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,F.H=t===null||t.memoizedState===null?Ap:Oc,$a=!1,f=a(s,u),$a=!1,zr&&(f=kd(n,a,s,u)),Xd(t),f}function Xd(t){F.H=Qs;var n=De!==null&&De.next!==null;if(Di=0,Ze=De=ne=null,il=!1,js=0,Br=null,n)throw Error(r(300));t===null||Ke||(t=t.dependencies,t!==null&&jo(t)&&(Ke=!0))}function kd(t,n,a,s){ne=t;var u=0;do{if(zr&&(Br=null),js=0,zr=!1,25<=u)throw Error(r(301));if(u+=1,Ze=De=null,t.updateQueue!=null){var f=t.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}F.H=bp,f=n(a,s)}while(zr);return f}function I0(){var t=F.H,n=t.useState()[0];return n=typeof n.then=="function"?Zs(n):n,t=t.useState()[0],(De!==null?De.memoizedState:null)!==t&&(ne.flags|=1024),n}function xc(){var t=al!==0;return al=0,t}function yc(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function Mc(t){if(il){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}il=!1}Di=0,Ze=De=ne=null,zr=!1,js=al=0,Br=null}function Tn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ze===null?ne.memoizedState=Ze=t:Ze=Ze.next=t,Ze}function Ye(){if(De===null){var t=ne.alternate;t=t!==null?t.memoizedState:null}else t=De.next;var n=Ze===null?ne.memoizedState:Ze.next;if(n!==null)Ze=n,De=t;else{if(t===null)throw ne.alternate===null?Error(r(467)):Error(r(310));De=t,t={memoizedState:De.memoizedState,baseState:De.baseState,baseQueue:De.baseQueue,queue:De.queue,next:null},Ze===null?ne.memoizedState=Ze=t:Ze=Ze.next=t}return Ze}function rl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Zs(t){var n=js;return js+=1,Br===null&&(Br=[]),t=Od(Br,t,n),n=ne,(Ze===null?n.memoizedState:Ze.next)===null&&(n=n.alternate,F.H=n===null||n.memoizedState===null?Ap:Oc),t}function sl(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Zs(t);if(t.$$typeof===D)return fn(t)}throw Error(r(438,String(t)))}function Ec(t){var n=null,a=ne.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var s=ne.alternate;s!==null&&(s=s.updateQueue,s!==null&&(s=s.memoCache,s!=null&&(n={data:s.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=rl(),ne.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),s=0;s<t;s++)a[s]=E;return n.index++,a}function Ui(t,n){return typeof n=="function"?n(t):n}function ol(t){var n=Ye();return Tc(n,De,t)}function Tc(t,n,a){var s=t.queue;if(s===null)throw Error(r(311));s.lastRenderedReducer=a;var u=t.baseQueue,f=s.pending;if(f!==null){if(u!==null){var _=u.next;u.next=f.next,f.next=_}n.baseQueue=u=f,s.pending=null}if(f=t.baseState,u===null)t.memoizedState=f;else{n=u.next;var A=_=null,B=null,J=n,ft=!1;do{var _t=J.lane&-536870913;if(_t!==J.lane?(pe&_t)===_t:(Di&_t)===_t){var et=J.revertLane;if(et===0)B!==null&&(B=B.next={lane:0,revertLane:0,gesture:null,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null}),_t===Ur&&(ft=!0);else if((Di&et)===et){J=J.next,et===Ur&&(ft=!0);continue}else _t={lane:0,revertLane:J.revertLane,gesture:null,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null},B===null?(A=B=_t,_=f):B=B.next=_t,ne.lanes|=et,pa|=et;_t=J.action,$a&&a(f,_t),f=J.hasEagerState?J.eagerState:a(f,_t)}else et={lane:_t,revertLane:J.revertLane,gesture:J.gesture,action:J.action,hasEagerState:J.hasEagerState,eagerState:J.eagerState,next:null},B===null?(A=B=et,_=f):B=B.next=et,ne.lanes|=_t,pa|=_t;J=J.next}while(J!==null&&J!==n);if(B===null?_=f:B.next=A,!Fn(f,t.memoizedState)&&(Ke=!0,ft&&(a=Lr,a!==null)))throw a;t.memoizedState=f,t.baseState=_,t.baseQueue=B,s.lastRenderedState=f}return u===null&&(s.lanes=0),[t.memoizedState,s.dispatch]}function Ac(t){var n=Ye(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=t;var s=a.dispatch,u=a.pending,f=n.memoizedState;if(u!==null){a.pending=null;var _=u=u.next;do f=t(f,_.action),_=_.next;while(_!==u);Fn(f,n.memoizedState)||(Ke=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,s]}function Wd(t,n,a){var s=ne,u=Ye(),f=ge;if(f){if(a===void 0)throw Error(r(407));a=a()}else a=n();var _=!Fn((De||u).memoizedState,a);if(_&&(u.memoizedState=a,Ke=!0),u=u.queue,Cc(jd.bind(null,s,u,t),[t]),u.getSnapshot!==n||_||Ze!==null&&Ze.memoizedState.tag&1){if(s.flags|=2048,Ir(9,{destroy:void 0},Yd.bind(null,s,u,a,n),null),Oe===null)throw Error(r(349));f||(Di&127)!==0||qd(s,n,a)}return a}function qd(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=ne.updateQueue,n===null?(n=rl(),ne.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function Yd(t,n,a,s){n.value=a,n.getSnapshot=s,Zd(n)&&Kd(t)}function jd(t,n,a){return a(function(){Zd(n)&&Kd(t)})}function Zd(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!Fn(t,a)}catch{return!0}}function Kd(t){var n=ka(t,2);n!==null&&zn(n,t,2)}function bc(t){var n=Tn();if(typeof t=="function"){var a=t;if(t=a(),$a){jt(!0);try{a()}finally{jt(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ui,lastRenderedState:t},n}function Qd(t,n,a,s){return t.baseState=a,Tc(t,De,typeof s=="function"?s:Ui)}function F0(t,n,a,s,u){if(cl(t))throw Error(r(485));if(t=n.action,t!==null){var f={payload:u,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(_){f.listeners.push(_)}};F.T!==null?a(!0):f.isTransition=!1,s(f),a=n.pending,a===null?(f.next=n.pending=f,Jd(n,f)):(f.next=a.next,n.pending=a.next=f)}}function Jd(t,n){var a=n.action,s=n.payload,u=t.state;if(n.isTransition){var f=F.T,_={};F.T=_;try{var A=a(u,s),B=F.S;B!==null&&B(_,A),$d(t,n,A)}catch(J){Rc(t,n,J)}finally{f!==null&&_.types!==null&&(f.types=_.types),F.T=f}}else try{f=a(u,s),$d(t,n,f)}catch(J){Rc(t,n,J)}}function $d(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(s){tp(t,n,s)},function(s){return Rc(t,n,s)}):tp(t,n,a)}function tp(t,n,a){n.status="fulfilled",n.value=a,ep(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,Jd(t,a)))}function Rc(t,n,a){var s=t.pending;if(t.pending=null,s!==null){s=s.next;do n.status="rejected",n.reason=a,ep(n),n=n.next;while(n!==s)}t.action=null}function ep(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function np(t,n){return n}function ip(t,n){if(ge){var a=Oe.formState;if(a!==null){t:{var s=ne;if(ge){if(Be){e:{for(var u=Be,f=$n;u.nodeType!==8;){if(!f){u=null;break e}if(u=ei(u.nextSibling),u===null){u=null;break e}}f=u.data,u=f==="F!"||f==="F"?u:null}if(u){Be=ei(u.nextSibling),s=u.data==="F!";break t}}ra(s)}s=!1}s&&(n=a[0])}}return a=Tn(),a.memoizedState=a.baseState=n,s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:np,lastRenderedState:n},a.queue=s,a=Mp.bind(null,ne,s),s.dispatch=a,s=bc(!1),f=Nc.bind(null,ne,!1,s.queue),s=Tn(),u={state:n,dispatch:null,action:t,pending:null},s.queue=u,a=F0.bind(null,ne,u,f,a),u.dispatch=a,s.memoizedState=t,[n,a,!1]}function ap(t){var n=Ye();return rp(n,De,t)}function rp(t,n,a){if(n=Tc(t,n,np)[0],t=ol(Ui)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var s=Zs(n)}catch(_){throw _===Nr?Qo:_}else s=n;n=Ye();var u=n.queue,f=u.dispatch;return a!==n.memoizedState&&(ne.flags|=2048,Ir(9,{destroy:void 0},H0.bind(null,u,a),null)),[s,f,t]}function H0(t,n){t.action=n}function sp(t){var n=Ye(),a=De;if(a!==null)return rp(n,a,t);Ye(),n=n.memoizedState,a=Ye();var s=a.queue.dispatch;return a.memoizedState=t,[n,s,!1]}function Ir(t,n,a,s){return t={tag:t,create:a,deps:s,inst:n,next:null},n=ne.updateQueue,n===null&&(n=rl(),ne.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(s=a.next,a.next=t,t.next=s,n.lastEffect=t),t}function op(){return Ye().memoizedState}function ll(t,n,a,s){var u=Tn();ne.flags|=t,u.memoizedState=Ir(1|n,{destroy:void 0},a,s===void 0?null:s)}function ul(t,n,a,s){var u=Ye();s=s===void 0?null:s;var f=u.memoizedState.inst;De!==null&&s!==null&&vc(s,De.memoizedState.deps)?u.memoizedState=Ir(n,f,a,s):(ne.flags|=t,u.memoizedState=Ir(1|n,f,a,s))}function lp(t,n){ll(8390656,8,t,n)}function Cc(t,n){ul(2048,8,t,n)}function G0(t){ne.flags|=4;var n=ne.updateQueue;if(n===null)n=rl(),ne.updateQueue=n,n.events=[t];else{var a=n.events;a===null?n.events=[t]:a.push(t)}}function up(t){var n=Ye().memoizedState;return G0({ref:n,nextImpl:t}),function(){if((Te&2)!==0)throw Error(r(440));return n.impl.apply(void 0,arguments)}}function cp(t,n){return ul(4,2,t,n)}function fp(t,n){return ul(4,4,t,n)}function hp(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function dp(t,n,a){a=a!=null?a.concat([t]):null,ul(4,4,hp.bind(null,n,t),a)}function wc(){}function pp(t,n){var a=Ye();n=n===void 0?null:n;var s=a.memoizedState;return n!==null&&vc(n,s[1])?s[0]:(a.memoizedState=[t,n],t)}function mp(t,n){var a=Ye();n=n===void 0?null:n;var s=a.memoizedState;if(n!==null&&vc(n,s[1]))return s[0];if(s=t(),$a){jt(!0);try{t()}finally{jt(!1)}}return a.memoizedState=[s,n],s}function Dc(t,n,a){return a===void 0||(Di&1073741824)!==0&&(pe&261930)===0?t.memoizedState=n:(t.memoizedState=a,t=gm(),ne.lanes|=t,pa|=t,a)}function gp(t,n,a,s){return Fn(a,n)?a:Pr.current!==null?(t=Dc(t,a,s),Fn(t,n)||(Ke=!0),t):(Di&42)===0||(Di&1073741824)!==0&&(pe&261930)===0?(Ke=!0,t.memoizedState=a):(t=gm(),ne.lanes|=t,pa|=t,n)}function _p(t,n,a,s,u){var f=K.p;K.p=f!==0&&8>f?f:8;var _=F.T,A={};F.T=A,Nc(t,!1,n,a);try{var B=u(),J=F.S;if(J!==null&&J(A,B),B!==null&&typeof B=="object"&&typeof B.then=="function"){var ft=z0(B,s);Ks(t,n,ft,Wn(t))}else Ks(t,n,s,Wn(t))}catch(_t){Ks(t,n,{then:function(){},status:"rejected",reason:_t},Wn())}finally{K.p=f,_!==null&&A.types!==null&&(_.types=A.types),F.T=_}}function V0(){}function Uc(t,n,a,s){if(t.tag!==5)throw Error(r(476));var u=vp(t).queue;_p(t,u,n,W,a===null?V0:function(){return Sp(t),a(s)})}function vp(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:W,baseState:W,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ui,lastRenderedState:W},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ui,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function Sp(t){var n=vp(t);n.next===null&&(n=t.alternate.memoizedState),Ks(t,n.next.queue,{},Wn())}function Lc(){return fn(po)}function xp(){return Ye().memoizedState}function yp(){return Ye().memoizedState}function X0(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=Wn();t=la(a);var s=ua(n,t,a);s!==null&&(zn(s,n,a),Ws(s,n,a)),n={cache:oc()},t.payload=n;return}n=n.return}}function k0(t,n,a){var s=Wn();a={lane:s,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},cl(t)?Ep(n,a):(a=Ku(t,n,a,s),a!==null&&(zn(a,t,s),Tp(a,n,s)))}function Mp(t,n,a){var s=Wn();Ks(t,n,a,s)}function Ks(t,n,a,s){var u={lane:s,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(cl(t))Ep(n,u);else{var f=t.alternate;if(t.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var _=n.lastRenderedState,A=f(_,a);if(u.hasEagerState=!0,u.eagerState=A,Fn(A,_))return ko(t,n,u,0),Oe===null&&Xo(),!1}catch{}finally{}if(a=Ku(t,n,u,s),a!==null)return zn(a,t,s),Tp(a,n,s),!0}return!1}function Nc(t,n,a,s){if(s={lane:2,revertLane:hf(),gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},cl(t)){if(n)throw Error(r(479))}else n=Ku(t,a,s,2),n!==null&&zn(n,t,2)}function cl(t){var n=t.alternate;return t===ne||n!==null&&n===ne}function Ep(t,n){zr=il=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function Tp(t,n,a){if((a&4194048)!==0){var s=n.lanes;s&=t.pendingLanes,a|=s,n.lanes=a,Rs(t,a)}}var Qs={readContext:fn,use:sl,useCallback:Ve,useContext:Ve,useEffect:Ve,useImperativeHandle:Ve,useLayoutEffect:Ve,useInsertionEffect:Ve,useMemo:Ve,useReducer:Ve,useRef:Ve,useState:Ve,useDebugValue:Ve,useDeferredValue:Ve,useTransition:Ve,useSyncExternalStore:Ve,useId:Ve,useHostTransitionStatus:Ve,useFormState:Ve,useActionState:Ve,useOptimistic:Ve,useMemoCache:Ve,useCacheRefresh:Ve};Qs.useEffectEvent=Ve;var Ap={readContext:fn,use:sl,useCallback:function(t,n){return Tn().memoizedState=[t,n===void 0?null:n],t},useContext:fn,useEffect:lp,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,ll(4194308,4,hp.bind(null,n,t),a)},useLayoutEffect:function(t,n){return ll(4194308,4,t,n)},useInsertionEffect:function(t,n){ll(4,2,t,n)},useMemo:function(t,n){var a=Tn();n=n===void 0?null:n;var s=t();if($a){jt(!0);try{t()}finally{jt(!1)}}return a.memoizedState=[s,n],s},useReducer:function(t,n,a){var s=Tn();if(a!==void 0){var u=a(n);if($a){jt(!0);try{a(n)}finally{jt(!1)}}}else u=n;return s.memoizedState=s.baseState=u,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:u},s.queue=t,t=t.dispatch=k0.bind(null,ne,t),[s.memoizedState,t]},useRef:function(t){var n=Tn();return t={current:t},n.memoizedState=t},useState:function(t){t=bc(t);var n=t.queue,a=Mp.bind(null,ne,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:wc,useDeferredValue:function(t,n){var a=Tn();return Dc(a,t,n)},useTransition:function(){var t=bc(!1);return t=_p.bind(null,ne,t.queue,!0,!1),Tn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var s=ne,u=Tn();if(ge){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),Oe===null)throw Error(r(349));(pe&127)!==0||qd(s,n,a)}u.memoizedState=a;var f={value:a,getSnapshot:n};return u.queue=f,lp(jd.bind(null,s,f,t),[t]),s.flags|=2048,Ir(9,{destroy:void 0},Yd.bind(null,s,f,a,n),null),a},useId:function(){var t=Tn(),n=Oe.identifierPrefix;if(ge){var a=gi,s=mi;a=(s&~(1<<32-fe(s)-1)).toString(32)+a,n="_"+n+"R_"+a,a=al++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=B0++,n="_"+n+"r_"+a.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:Lc,useFormState:ip,useActionState:ip,useOptimistic:function(t){var n=Tn();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Nc.bind(null,ne,!0,a),a.dispatch=n,[t,n]},useMemoCache:Ec,useCacheRefresh:function(){return Tn().memoizedState=X0.bind(null,ne)},useEffectEvent:function(t){var n=Tn(),a={impl:t};return n.memoizedState=a,function(){if((Te&2)!==0)throw Error(r(440));return a.impl.apply(void 0,arguments)}}},Oc={readContext:fn,use:sl,useCallback:pp,useContext:fn,useEffect:Cc,useImperativeHandle:dp,useInsertionEffect:cp,useLayoutEffect:fp,useMemo:mp,useReducer:ol,useRef:op,useState:function(){return ol(Ui)},useDebugValue:wc,useDeferredValue:function(t,n){var a=Ye();return gp(a,De.memoizedState,t,n)},useTransition:function(){var t=ol(Ui)[0],n=Ye().memoizedState;return[typeof t=="boolean"?t:Zs(t),n]},useSyncExternalStore:Wd,useId:xp,useHostTransitionStatus:Lc,useFormState:ap,useActionState:ap,useOptimistic:function(t,n){var a=Ye();return Qd(a,De,t,n)},useMemoCache:Ec,useCacheRefresh:yp};Oc.useEffectEvent=up;var bp={readContext:fn,use:sl,useCallback:pp,useContext:fn,useEffect:Cc,useImperativeHandle:dp,useInsertionEffect:cp,useLayoutEffect:fp,useMemo:mp,useReducer:Ac,useRef:op,useState:function(){return Ac(Ui)},useDebugValue:wc,useDeferredValue:function(t,n){var a=Ye();return De===null?Dc(a,t,n):gp(a,De.memoizedState,t,n)},useTransition:function(){var t=Ac(Ui)[0],n=Ye().memoizedState;return[typeof t=="boolean"?t:Zs(t),n]},useSyncExternalStore:Wd,useId:xp,useHostTransitionStatus:Lc,useFormState:sp,useActionState:sp,useOptimistic:function(t,n){var a=Ye();return De!==null?Qd(a,De,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:Ec,useCacheRefresh:yp};bp.useEffectEvent=up;function Pc(t,n,a,s){n=t.memoizedState,a=a(s,n),a=a==null?n:S({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var zc={enqueueSetState:function(t,n,a){t=t._reactInternals;var s=Wn(),u=la(s);u.payload=n,a!=null&&(u.callback=a),n=ua(t,u,s),n!==null&&(zn(n,t,s),Ws(n,t,s))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var s=Wn(),u=la(s);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=ua(t,u,s),n!==null&&(zn(n,t,s),Ws(n,t,s))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=Wn(),s=la(a);s.tag=2,n!=null&&(s.callback=n),n=ua(t,s,a),n!==null&&(zn(n,t,a),Ws(n,t,a))}};function Rp(t,n,a,s,u,f,_){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(s,f,_):n.prototype&&n.prototype.isPureReactComponent?!Bs(a,s)||!Bs(u,f):!0}function Cp(t,n,a,s){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,s),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,s),n.state!==t&&zc.enqueueReplaceState(n,n.state,null)}function tr(t,n){var a=n;if("ref"in n){a={};for(var s in n)s!=="ref"&&(a[s]=n[s])}if(t=t.defaultProps){a===n&&(a=S({},a));for(var u in t)a[u]===void 0&&(a[u]=t[u])}return a}function wp(t){Vo(t)}function Dp(t){console.error(t)}function Up(t){Vo(t)}function fl(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(s){setTimeout(function(){throw s})}}function Lp(t,n,a){try{var s=t.onCaughtError;s(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function Bc(t,n,a){return a=la(a),a.tag=3,a.payload={element:null},a.callback=function(){fl(t,n)},a}function Np(t){return t=la(t),t.tag=3,t}function Op(t,n,a,s){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var f=s.value;t.payload=function(){return u(f)},t.callback=function(){Lp(n,a,s)}}var _=a.stateNode;_!==null&&typeof _.componentDidCatch=="function"&&(t.callback=function(){Lp(n,a,s),typeof u!="function"&&(ma===null?ma=new Set([this]):ma.add(this));var A=s.stack;this.componentDidCatch(s.value,{componentStack:A!==null?A:""})})}function W0(t,n,a,s,u){if(a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){if(n=a.alternate,n!==null&&Dr(n,a,u,!0),a=Gn.current,a!==null){switch(a.tag){case 31:case 13:return ti===null?El():a.alternate===null&&Xe===0&&(Xe=3),a.flags&=-257,a.flags|=65536,a.lanes=u,s===Jo?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([s]):n.add(s),uf(t,s,u)),!1;case 22:return a.flags|=65536,s===Jo?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([s])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([s]):a.add(s)),uf(t,s,u)),!1}throw Error(r(435,a.tag))}return uf(t,s,u),El(),!1}if(ge)return n=Gn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,s!==nc&&(t=Error(r(422),{cause:s}),Hs(Kn(t,a)))):(s!==nc&&(n=Error(r(423),{cause:s}),Hs(Kn(n,a))),t=t.current.alternate,t.flags|=65536,u&=-u,t.lanes|=u,s=Kn(s,a),u=Bc(t.stateNode,s,u),dc(t,u),Xe!==4&&(Xe=2)),!1;var f=Error(r(520),{cause:s});if(f=Kn(f,a),ro===null?ro=[f]:ro.push(f),Xe!==4&&(Xe=2),n===null)return!0;s=Kn(s,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=u&-u,a.lanes|=t,t=Bc(a.stateNode,s,t),dc(a,t),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(ma===null||!ma.has(f))))return a.flags|=65536,u&=-u,a.lanes|=u,u=Np(u),Op(u,t,a,s),dc(a,u),!1}a=a.return}while(a!==null);return!1}var Ic=Error(r(461)),Ke=!1;function hn(t,n,a,s){n.child=t===null?Id(n,null,a,s):Ja(n,t.child,a,s)}function Pp(t,n,a,s,u){a=a.render;var f=n.ref;if("ref"in s){var _={};for(var A in s)A!=="ref"&&(_[A]=s[A])}else _=s;return ja(n),s=Sc(t,n,a,_,f,u),A=xc(),t!==null&&!Ke?(yc(t,n,u),Li(t,n,u)):(ge&&A&&tc(n),n.flags|=1,hn(t,n,s,u),n.child)}function zp(t,n,a,s,u){if(t===null){var f=a.type;return typeof f=="function"&&!Qu(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,Bp(t,n,f,s,u)):(t=qo(a.type,null,s,n,n.mode,u),t.ref=n.ref,t.return=n,n.child=t)}if(f=t.child,!qc(t,u)){var _=f.memoizedProps;if(a=a.compare,a=a!==null?a:Bs,a(_,s)&&t.ref===n.ref)return Li(t,n,u)}return n.flags|=1,t=bi(f,s),t.ref=n.ref,t.return=n,n.child=t}function Bp(t,n,a,s,u){if(t!==null){var f=t.memoizedProps;if(Bs(f,s)&&t.ref===n.ref)if(Ke=!1,n.pendingProps=s=f,qc(t,u))(t.flags&131072)!==0&&(Ke=!0);else return n.lanes=t.lanes,Li(t,n,u)}return Fc(t,n,a,s,u)}function Ip(t,n,a,s){var u=s.children,f=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),s.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,t!==null){for(s=n.child=t.child,u=0;s!==null;)u=u|s.lanes|s.childLanes,s=s.sibling;s=u&~f}else s=0,n.child=null;return Fp(t,n,f,a,s)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&Ko(n,f!==null?f.cachePool:null),f!==null?Gd(n,f):mc(),Vd(n);else return s=n.lanes=536870912,Fp(t,n,f!==null?f.baseLanes|a:a,a,s)}else f!==null?(Ko(n,f.cachePool),Gd(n,f),fa(),n.memoizedState=null):(t!==null&&Ko(n,null),mc(),fa());return hn(t,n,u,a),n.child}function Js(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function Fp(t,n,a,s,u){var f=uc();return f=f===null?null:{parent:je._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},t!==null&&Ko(n,null),mc(),Vd(n),t!==null&&Dr(t,n,s,!0),n.childLanes=u,null}function hl(t,n){return n=pl({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function Hp(t,n,a){return Ja(n,t.child,null,a),t=hl(n,n.pendingProps),t.flags|=2,Vn(n),n.memoizedState=null,t}function q0(t,n,a){var s=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(ge){if(s.mode==="hidden")return t=hl(n,s),n.lanes=536870912,Js(null,t);if(_c(n),(t=Be)?(t=Jm(t,$n),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:ia!==null?{id:mi,overflow:gi}:null,retryLane:536870912,hydrationErrors:null},a=Ed(t),a.return=n,n.child=a,cn=n,Be=null)):t=null,t===null)throw ra(n);return n.lanes=536870912,null}return hl(n,s)}var f=t.memoizedState;if(f!==null){var _=f.dehydrated;if(_c(n),u)if(n.flags&256)n.flags&=-257,n=Hp(t,n,a);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(r(558));else if(Ke||Dr(t,n,a,!1),u=(a&t.childLanes)!==0,Ke||u){if(s=Oe,s!==null&&(_=Ia(s,a),_!==0&&_!==f.retryLane))throw f.retryLane=_,ka(t,_),zn(s,t,_),Ic;El(),n=Hp(t,n,a)}else t=f.treeContext,Be=ei(_.nextSibling),cn=n,ge=!0,aa=null,$n=!1,t!==null&&bd(n,t),n=hl(n,s),n.flags|=4096;return n}return t=bi(t.child,{mode:s.mode,children:s.children}),t.ref=n.ref,n.child=t,t.return=n,t}function dl(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function Fc(t,n,a,s,u){return ja(n),a=Sc(t,n,a,s,void 0,u),s=xc(),t!==null&&!Ke?(yc(t,n,u),Li(t,n,u)):(ge&&s&&tc(n),n.flags|=1,hn(t,n,a,u),n.child)}function Gp(t,n,a,s,u,f){return ja(n),n.updateQueue=null,a=kd(n,s,a,u),Xd(t),s=xc(),t!==null&&!Ke?(yc(t,n,f),Li(t,n,f)):(ge&&s&&tc(n),n.flags|=1,hn(t,n,a,f),n.child)}function Vp(t,n,a,s,u){if(ja(n),n.stateNode===null){var f=br,_=a.contextType;typeof _=="object"&&_!==null&&(f=fn(_)),f=new a(s,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=zc,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=s,f.state=n.memoizedState,f.refs={},fc(n),_=a.contextType,f.context=typeof _=="object"&&_!==null?fn(_):br,f.state=n.memoizedState,_=a.getDerivedStateFromProps,typeof _=="function"&&(Pc(n,a,_,s),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(_=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),_!==f.state&&zc.enqueueReplaceState(f,f.state,null),Ys(n,s,f,u),qs(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!0}else if(t===null){f=n.stateNode;var A=n.memoizedProps,B=tr(a,A);f.props=B;var J=f.context,ft=a.contextType;_=br,typeof ft=="object"&&ft!==null&&(_=fn(ft));var _t=a.getDerivedStateFromProps;ft=typeof _t=="function"||typeof f.getSnapshotBeforeUpdate=="function",A=n.pendingProps!==A,ft||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(A||J!==_)&&Cp(n,f,s,_),oa=!1;var et=n.memoizedState;f.state=et,Ys(n,s,f,u),qs(),J=n.memoizedState,A||et!==J||oa?(typeof _t=="function"&&(Pc(n,a,_t,s),J=n.memoizedState),(B=oa||Rp(n,a,B,s,et,J,_))?(ft||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=s,n.memoizedState=J),f.props=s,f.state=J,f.context=_,s=B):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),s=!1)}else{f=n.stateNode,hc(t,n),_=n.memoizedProps,ft=tr(a,_),f.props=ft,_t=n.pendingProps,et=f.context,J=a.contextType,B=br,typeof J=="object"&&J!==null&&(B=fn(J)),A=a.getDerivedStateFromProps,(J=typeof A=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(_!==_t||et!==B)&&Cp(n,f,s,B),oa=!1,et=n.memoizedState,f.state=et,Ys(n,s,f,u),qs();var rt=n.memoizedState;_!==_t||et!==rt||oa||t!==null&&t.dependencies!==null&&jo(t.dependencies)?(typeof A=="function"&&(Pc(n,a,A,s),rt=n.memoizedState),(ft=oa||Rp(n,a,ft,s,et,rt,B)||t!==null&&t.dependencies!==null&&jo(t.dependencies))?(J||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(s,rt,B),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(s,rt,B)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||_===t.memoizedProps&&et===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||_===t.memoizedProps&&et===t.memoizedState||(n.flags|=1024),n.memoizedProps=s,n.memoizedState=rt),f.props=s,f.state=rt,f.context=B,s=ft):(typeof f.componentDidUpdate!="function"||_===t.memoizedProps&&et===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||_===t.memoizedProps&&et===t.memoizedState||(n.flags|=1024),s=!1)}return f=s,dl(t,n),s=(n.flags&128)!==0,f||s?(f=n.stateNode,a=s&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,t!==null&&s?(n.child=Ja(n,t.child,null,u),n.child=Ja(n,null,a,u)):hn(t,n,a,u),n.memoizedState=f.state,t=n.child):t=Li(t,n,u),t}function Xp(t,n,a,s){return qa(),n.flags|=256,hn(t,n,a,s),n.child}var Hc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Gc(t){return{baseLanes:t,cachePool:Ld()}}function Vc(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=kn),t}function kp(t,n,a){var s=n.pendingProps,u=!1,f=(n.flags&128)!==0,_;if((_=f)||(_=t!==null&&t.memoizedState===null?!1:(qe.current&2)!==0),_&&(u=!0,n.flags&=-129),_=(n.flags&32)!==0,n.flags&=-33,t===null){if(ge){if(u?ca(n):fa(),(t=Be)?(t=Jm(t,$n),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:ia!==null?{id:mi,overflow:gi}:null,retryLane:536870912,hydrationErrors:null},a=Ed(t),a.return=n,n.child=a,cn=n,Be=null)):t=null,t===null)throw ra(n);return Af(t)?n.lanes=32:n.lanes=536870912,null}var A=s.children;return s=s.fallback,u?(fa(),u=n.mode,A=pl({mode:"hidden",children:A},u),s=Wa(s,u,a,null),A.return=n,s.return=n,A.sibling=s,n.child=A,s=n.child,s.memoizedState=Gc(a),s.childLanes=Vc(t,_,a),n.memoizedState=Hc,Js(null,s)):(ca(n),Xc(n,A))}var B=t.memoizedState;if(B!==null&&(A=B.dehydrated,A!==null)){if(f)n.flags&256?(ca(n),n.flags&=-257,n=kc(t,n,a)):n.memoizedState!==null?(fa(),n.child=t.child,n.flags|=128,n=null):(fa(),A=s.fallback,u=n.mode,s=pl({mode:"visible",children:s.children},u),A=Wa(A,u,a,null),A.flags|=2,s.return=n,A.return=n,s.sibling=A,n.child=s,Ja(n,t.child,null,a),s=n.child,s.memoizedState=Gc(a),s.childLanes=Vc(t,_,a),n.memoizedState=Hc,n=Js(null,s));else if(ca(n),Af(A)){if(_=A.nextSibling&&A.nextSibling.dataset,_)var J=_.dgst;_=J,s=Error(r(419)),s.stack="",s.digest=_,Hs({value:s,source:null,stack:null}),n=kc(t,n,a)}else if(Ke||Dr(t,n,a,!1),_=(a&t.childLanes)!==0,Ke||_){if(_=Oe,_!==null&&(s=Ia(_,a),s!==0&&s!==B.retryLane))throw B.retryLane=s,ka(t,s),zn(_,t,s),Ic;Tf(A)||El(),n=kc(t,n,a)}else Tf(A)?(n.flags|=192,n.child=t.child,n=null):(t=B.treeContext,Be=ei(A.nextSibling),cn=n,ge=!0,aa=null,$n=!1,t!==null&&bd(n,t),n=Xc(n,s.children),n.flags|=4096);return n}return u?(fa(),A=s.fallback,u=n.mode,B=t.child,J=B.sibling,s=bi(B,{mode:"hidden",children:s.children}),s.subtreeFlags=B.subtreeFlags&65011712,J!==null?A=bi(J,A):(A=Wa(A,u,a,null),A.flags|=2),A.return=n,s.return=n,s.sibling=A,n.child=s,Js(null,s),s=n.child,A=t.child.memoizedState,A===null?A=Gc(a):(u=A.cachePool,u!==null?(B=je._currentValue,u=u.parent!==B?{parent:B,pool:B}:u):u=Ld(),A={baseLanes:A.baseLanes|a,cachePool:u}),s.memoizedState=A,s.childLanes=Vc(t,_,a),n.memoizedState=Hc,Js(t.child,s)):(ca(n),a=t.child,t=a.sibling,a=bi(a,{mode:"visible",children:s.children}),a.return=n,a.sibling=null,t!==null&&(_=n.deletions,_===null?(n.deletions=[t],n.flags|=16):_.push(t)),n.child=a,n.memoizedState=null,a)}function Xc(t,n){return n=pl({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function pl(t,n){return t=Hn(22,t,null,n),t.lanes=0,t}function kc(t,n,a){return Ja(n,t.child,null,a),t=Xc(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function Wp(t,n,a){t.lanes|=n;var s=t.alternate;s!==null&&(s.lanes|=n),rc(t.return,n,a)}function Wc(t,n,a,s,u,f){var _=t.memoizedState;_===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:s,tail:a,tailMode:u,treeForkCount:f}:(_.isBackwards=n,_.rendering=null,_.renderingStartTime=0,_.last=s,_.tail=a,_.tailMode=u,_.treeForkCount=f)}function qp(t,n,a){var s=n.pendingProps,u=s.revealOrder,f=s.tail;s=s.children;var _=qe.current,A=(_&2)!==0;if(A?(_=_&1|2,n.flags|=128):_&=1,xt(qe,_),hn(t,n,s,a),s=ge?Fs:0,!A&&t!==null&&(t.flags&128)!==0)t:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Wp(t,a,n);else if(t.tag===19)Wp(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break t;for(;t.sibling===null;){if(t.return===null||t.return===n)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)t=a.alternate,t!==null&&nl(t)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),Wc(n,!1,u,a,f,s);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(t=u.alternate,t!==null&&nl(t)===null){n.child=u;break}t=u.sibling,u.sibling=a,a=u,u=t}Wc(n,!0,a,null,f,s);break;case"together":Wc(n,!1,null,null,void 0,s);break;default:n.memoizedState=null}return n.child}function Li(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),pa|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(Dr(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(r(153));if(n.child!==null){for(t=n.child,a=bi(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=bi(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function qc(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&jo(t)))}function Y0(t,n,a){switch(n.tag){case 3:Xt(n,n.stateNode.containerInfo),sa(n,je,t.memoizedState.cache),qa();break;case 27:case 5:j(n);break;case 4:Xt(n,n.stateNode.containerInfo);break;case 10:sa(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,_c(n),null;break;case 13:var s=n.memoizedState;if(s!==null)return s.dehydrated!==null?(ca(n),n.flags|=128,null):(a&n.child.childLanes)!==0?kp(t,n,a):(ca(n),t=Li(t,n,a),t!==null?t.sibling:null);ca(n);break;case 19:var u=(t.flags&128)!==0;if(s=(a&n.childLanes)!==0,s||(Dr(t,n,a,!1),s=(a&n.childLanes)!==0),u){if(s)return qp(t,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),xt(qe,qe.current),s)break;return null;case 22:return n.lanes=0,Ip(t,n,a,n.pendingProps);case 24:sa(n,je,t.memoizedState.cache)}return Li(t,n,a)}function Yp(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)Ke=!0;else{if(!qc(t,a)&&(n.flags&128)===0)return Ke=!1,Y0(t,n,a);Ke=(t.flags&131072)!==0}else Ke=!1,ge&&(n.flags&1048576)!==0&&Ad(n,Fs,n.index);switch(n.lanes=0,n.tag){case 16:t:{var s=n.pendingProps;if(t=Ka(n.elementType),n.type=t,typeof t=="function")Qu(t)?(s=tr(t,s),n.tag=1,n=Vp(null,n,t,s,a)):(n.tag=0,n=Fc(null,n,t,s,a));else{if(t!=null){var u=t.$$typeof;if(u===P){n.tag=11,n=Pp(null,n,t,s,a);break t}else if(u===N){n.tag=14,n=zp(null,n,t,s,a);break t}}throw n=dt(t)||t,Error(r(306,n,""))}}return n;case 0:return Fc(t,n,n.type,n.pendingProps,a);case 1:return s=n.type,u=tr(s,n.pendingProps),Vp(t,n,s,u,a);case 3:t:{if(Xt(n,n.stateNode.containerInfo),t===null)throw Error(r(387));s=n.pendingProps;var f=n.memoizedState;u=f.element,hc(t,n),Ys(n,s,null,a);var _=n.memoizedState;if(s=_.cache,sa(n,je,s),s!==f.cache&&sc(n,[je],a,!0),qs(),s=_.element,f.isDehydrated)if(f={element:s,isDehydrated:!1,cache:_.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=Xp(t,n,s,a);break t}else if(s!==u){u=Kn(Error(r(424)),n),Hs(u),n=Xp(t,n,s,a);break t}else{switch(t=n.stateNode.containerInfo,t.nodeType){case 9:t=t.body;break;default:t=t.nodeName==="HTML"?t.ownerDocument.body:t}for(Be=ei(t.firstChild),cn=n,ge=!0,aa=null,$n=!0,a=Id(n,null,s,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(qa(),s===u){n=Li(t,n,a);break t}hn(t,n,s,a)}n=n.child}return n;case 26:return dl(t,n),t===null?(a=ag(n.type,null,n.pendingProps,null))?n.memoizedState=a:ge||(a=n.type,t=n.pendingProps,s=Dl(Et.current).createElement(a),s[$e]=n,s[pn]=t,dn(s,a,t),Gt(s),n.stateNode=s):n.memoizedState=ag(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return j(n),t===null&&ge&&(s=n.stateNode=eg(n.type,n.pendingProps,Et.current),cn=n,$n=!0,u=Be,Sa(n.type)?(bf=u,Be=ei(s.firstChild)):Be=u),hn(t,n,n.pendingProps.children,a),dl(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&ge&&((u=s=Be)&&(s=ES(s,n.type,n.pendingProps,$n),s!==null?(n.stateNode=s,cn=n,Be=ei(s.firstChild),$n=!1,u=!0):u=!1),u||ra(n)),j(n),u=n.type,f=n.pendingProps,_=t!==null?t.memoizedProps:null,s=f.children,yf(u,f)?s=null:_!==null&&yf(u,_)&&(n.flags|=32),n.memoizedState!==null&&(u=Sc(t,n,I0,null,null,a),po._currentValue=u),dl(t,n),hn(t,n,s,a),n.child;case 6:return t===null&&ge&&((t=a=Be)&&(a=TS(a,n.pendingProps,$n),a!==null?(n.stateNode=a,cn=n,Be=null,t=!0):t=!1),t||ra(n)),null;case 13:return kp(t,n,a);case 4:return Xt(n,n.stateNode.containerInfo),s=n.pendingProps,t===null?n.child=Ja(n,null,s,a):hn(t,n,s,a),n.child;case 11:return Pp(t,n,n.type,n.pendingProps,a);case 7:return hn(t,n,n.pendingProps,a),n.child;case 8:return hn(t,n,n.pendingProps.children,a),n.child;case 12:return hn(t,n,n.pendingProps.children,a),n.child;case 10:return s=n.pendingProps,sa(n,n.type,s.value),hn(t,n,s.children,a),n.child;case 9:return u=n.type._context,s=n.pendingProps.children,ja(n),u=fn(u),s=s(u),n.flags|=1,hn(t,n,s,a),n.child;case 14:return zp(t,n,n.type,n.pendingProps,a);case 15:return Bp(t,n,n.type,n.pendingProps,a);case 19:return qp(t,n,a);case 31:return q0(t,n,a);case 22:return Ip(t,n,a,n.pendingProps);case 24:return ja(n),s=fn(je),t===null?(u=uc(),u===null&&(u=Oe,f=oc(),u.pooledCache=f,f.refCount++,f!==null&&(u.pooledCacheLanes|=a),u=f),n.memoizedState={parent:s,cache:u},fc(n),sa(n,je,u)):((t.lanes&a)!==0&&(hc(t,n),Ys(n,null,null,a),qs()),u=t.memoizedState,f=n.memoizedState,u.parent!==s?(u={parent:s,cache:s},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),sa(n,je,s)):(s=f.cache,sa(n,je,s),s!==u.cache&&sc(n,[je],a,!0))),hn(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function Ni(t){t.flags|=4}function Yc(t,n,a,s,u){if((n=(t.mode&32)!==0)&&(n=!1),n){if(t.flags|=16777216,(u&335544128)===u)if(t.stateNode.complete)t.flags|=8192;else if(xm())t.flags|=8192;else throw Qa=Jo,cc}else t.flags&=-16777217}function jp(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!ug(n))if(xm())t.flags|=8192;else throw Qa=Jo,cc}function ml(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?xe():536870912,t.lanes|=n,Vr|=n)}function $s(t,n){if(!ge)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var s=null;a!==null;)a.alternate!==null&&(s=a),a=a.sibling;s===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:s.sibling=null}}function Ie(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,s=0;if(n)for(var u=t.child;u!==null;)a|=u.lanes|u.childLanes,s|=u.subtreeFlags&65011712,s|=u.flags&65011712,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)a|=u.lanes|u.childLanes,s|=u.subtreeFlags,s|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=s,t.childLanes=a,n}function j0(t,n,a){var s=n.pendingProps;switch(ec(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ie(n),null;case 1:return Ie(n),null;case 3:return a=n.stateNode,s=null,t!==null&&(s=t.memoizedState.cache),n.memoizedState.cache!==s&&(n.flags|=2048),wi(je),Bt(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(wr(n)?Ni(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,ic())),Ie(n),null;case 26:var u=n.type,f=n.memoizedState;return t===null?(Ni(n),f!==null?(Ie(n),jp(n,f)):(Ie(n),Yc(n,u,null,s,a))):f?f!==t.memoizedState?(Ni(n),Ie(n),jp(n,f)):(Ie(n),n.flags&=-16777217):(t=t.memoizedProps,t!==s&&Ni(n),Ie(n),Yc(n,u,t,s,a)),null;case 27:if(_e(n),a=Et.current,u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==s&&Ni(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return Ie(n),null}t=V.current,wr(n)?Rd(n):(t=eg(u,s,a),n.stateNode=t,Ni(n))}return Ie(n),null;case 5:if(_e(n),u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==s&&Ni(n);else{if(!s){if(n.stateNode===null)throw Error(r(166));return Ie(n),null}if(f=V.current,wr(n))Rd(n);else{var _=Dl(Et.current);switch(f){case 1:f=_.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:f=_.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":f=_.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":f=_.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":f=_.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof s.is=="string"?_.createElement("select",{is:s.is}):_.createElement("select"),s.multiple?f.multiple=!0:s.size&&(f.size=s.size);break;default:f=typeof s.is=="string"?_.createElement(u,{is:s.is}):_.createElement(u)}}f[$e]=n,f[pn]=s;t:for(_=n.child;_!==null;){if(_.tag===5||_.tag===6)f.appendChild(_.stateNode);else if(_.tag!==4&&_.tag!==27&&_.child!==null){_.child.return=_,_=_.child;continue}if(_===n)break t;for(;_.sibling===null;){if(_.return===null||_.return===n)break t;_=_.return}_.sibling.return=_.return,_=_.sibling}n.stateNode=f;t:switch(dn(f,u,s),u){case"button":case"input":case"select":case"textarea":s=!!s.autoFocus;break t;case"img":s=!0;break t;default:s=!1}s&&Ni(n)}}return Ie(n),Yc(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,a),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==s&&Ni(n);else{if(typeof s!="string"&&n.stateNode===null)throw Error(r(166));if(t=Et.current,wr(n)){if(t=n.stateNode,a=n.memoizedProps,s=null,u=cn,u!==null)switch(u.tag){case 27:case 5:s=u.memoizedProps}t[$e]=n,t=!!(t.nodeValue===a||s!==null&&s.suppressHydrationWarning===!0||km(t.nodeValue,a)),t||ra(n,!0)}else t=Dl(t).createTextNode(s),t[$e]=n,n.stateNode=t}return Ie(n),null;case 31:if(a=n.memoizedState,t===null||t.memoizedState!==null){if(s=wr(n),a!==null){if(t===null){if(!s)throw Error(r(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(557));t[$e]=n}else qa(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ie(n),t=!1}else a=ic(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return n.flags&256?(Vn(n),n):(Vn(n),null);if((n.flags&128)!==0)throw Error(r(558))}return Ie(n),null;case 13:if(s=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(u=wr(n),s!==null&&s.dehydrated!==null){if(t===null){if(!u)throw Error(r(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(r(317));u[$e]=n}else qa(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Ie(n),u=!1}else u=ic(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(Vn(n),n):(Vn(n),null)}return Vn(n),(n.flags&128)!==0?(n.lanes=a,n):(a=s!==null,t=t!==null&&t.memoizedState!==null,a&&(s=n.child,u=null,s.alternate!==null&&s.alternate.memoizedState!==null&&s.alternate.memoizedState.cachePool!==null&&(u=s.alternate.memoizedState.cachePool.pool),f=null,s.memoizedState!==null&&s.memoizedState.cachePool!==null&&(f=s.memoizedState.cachePool.pool),f!==u&&(s.flags|=2048)),a!==t&&a&&(n.child.flags|=8192),ml(n,n.updateQueue),Ie(n),null);case 4:return Bt(),t===null&&gf(n.stateNode.containerInfo),Ie(n),null;case 10:return wi(n.type),Ie(n),null;case 19:if(Z(qe),s=n.memoizedState,s===null)return Ie(n),null;if(u=(n.flags&128)!==0,f=s.rendering,f===null)if(u)$s(s,!1);else{if(Xe!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(f=nl(t),f!==null){for(n.flags|=128,$s(s,!1),t=f.updateQueue,n.updateQueue=t,ml(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)Md(a,t),a=a.sibling;return xt(qe,qe.current&1|2),ge&&Ri(n,s.treeForkCount),n.child}t=t.sibling}s.tail!==null&&gt()>xl&&(n.flags|=128,u=!0,$s(s,!1),n.lanes=4194304)}else{if(!u)if(t=nl(f),t!==null){if(n.flags|=128,u=!0,t=t.updateQueue,n.updateQueue=t,ml(n,t),$s(s,!0),s.tail===null&&s.tailMode==="hidden"&&!f.alternate&&!ge)return Ie(n),null}else 2*gt()-s.renderingStartTime>xl&&a!==536870912&&(n.flags|=128,u=!0,$s(s,!1),n.lanes=4194304);s.isBackwards?(f.sibling=n.child,n.child=f):(t=s.last,t!==null?t.sibling=f:n.child=f,s.last=f)}return s.tail!==null?(t=s.tail,s.rendering=t,s.tail=t.sibling,s.renderingStartTime=gt(),t.sibling=null,a=qe.current,xt(qe,u?a&1|2:a&1),ge&&Ri(n,s.treeForkCount),t):(Ie(n),null);case 22:case 23:return Vn(n),gc(),s=n.memoizedState!==null,t!==null?t.memoizedState!==null!==s&&(n.flags|=8192):s&&(n.flags|=8192),s?(a&536870912)!==0&&(n.flags&128)===0&&(Ie(n),n.subtreeFlags&6&&(n.flags|=8192)):Ie(n),a=n.updateQueue,a!==null&&ml(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),s=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(s=n.memoizedState.cachePool.pool),s!==a&&(n.flags|=2048),t!==null&&Z(Za),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),wi(je),Ie(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function Z0(t,n){switch(ec(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return wi(je),Bt(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return _e(n),null;case 31:if(n.memoizedState!==null){if(Vn(n),n.alternate===null)throw Error(r(340));qa()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(Vn(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(r(340));qa()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return Z(qe),null;case 4:return Bt(),null;case 10:return wi(n.type),null;case 22:case 23:return Vn(n),gc(),t!==null&&Z(Za),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return wi(je),null;case 25:return null;default:return null}}function Zp(t,n){switch(ec(n),n.tag){case 3:wi(je),Bt();break;case 26:case 27:case 5:_e(n);break;case 4:Bt();break;case 31:n.memoizedState!==null&&Vn(n);break;case 13:Vn(n);break;case 19:Z(qe);break;case 10:wi(n.type);break;case 22:case 23:Vn(n),gc(),t!==null&&Z(Za);break;case 24:wi(je)}}function to(t,n){try{var a=n.updateQueue,s=a!==null?a.lastEffect:null;if(s!==null){var u=s.next;a=u;do{if((a.tag&t)===t){s=void 0;var f=a.create,_=a.inst;s=f(),_.destroy=s}a=a.next}while(a!==u)}}catch(A){Re(n,n.return,A)}}function ha(t,n,a){try{var s=n.updateQueue,u=s!==null?s.lastEffect:null;if(u!==null){var f=u.next;s=f;do{if((s.tag&t)===t){var _=s.inst,A=_.destroy;if(A!==void 0){_.destroy=void 0,u=n;var B=a,J=A;try{J()}catch(ft){Re(u,B,ft)}}}s=s.next}while(s!==f)}}catch(ft){Re(n,n.return,ft)}}function Kp(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{Hd(n,a)}catch(s){Re(t,t.return,s)}}}function Qp(t,n,a){a.props=tr(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(s){Re(t,n,s)}}function eo(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var s=t.stateNode;break;case 30:s=t.stateNode;break;default:s=t.stateNode}typeof a=="function"?t.refCleanup=a(s):a.current=s}}catch(u){Re(t,n,u)}}function _i(t,n){var a=t.ref,s=t.refCleanup;if(a!==null)if(typeof s=="function")try{s()}catch(u){Re(t,n,u)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){Re(t,n,u)}else a.current=null}function Jp(t){var n=t.type,a=t.memoizedProps,s=t.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&s.focus();break t;case"img":a.src?s.src=a.src:a.srcSet&&(s.srcset=a.srcSet)}}catch(u){Re(t,t.return,u)}}function jc(t,n,a){try{var s=t.stateNode;_S(s,t.type,a,n),s[pn]=n}catch(u){Re(t,t.return,u)}}function $p(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Sa(t.type)||t.tag===4}function Zc(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||$p(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Sa(t.type)||t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Kc(t,n,a){var s=t.tag;if(s===5||s===6)t=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(t),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Ti));else if(s!==4&&(s===27&&Sa(t.type)&&(a=t.stateNode,n=null),t=t.child,t!==null))for(Kc(t,n,a),t=t.sibling;t!==null;)Kc(t,n,a),t=t.sibling}function gl(t,n,a){var s=t.tag;if(s===5||s===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(s!==4&&(s===27&&Sa(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(gl(t,n,a),t=t.sibling;t!==null;)gl(t,n,a),t=t.sibling}function tm(t){var n=t.stateNode,a=t.memoizedProps;try{for(var s=t.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);dn(n,s,a),n[$e]=t,n[pn]=a}catch(f){Re(t,t.return,f)}}var Oi=!1,Qe=!1,Qc=!1,em=typeof WeakSet=="function"?WeakSet:Set,on=null;function K0(t,n){if(t=t.containerInfo,Sf=Bl,t=dd(t),ku(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else t:{a=(a=t.ownerDocument)&&a.defaultView||window;var s=a.getSelection&&a.getSelection();if(s&&s.rangeCount!==0){a=s.anchorNode;var u=s.anchorOffset,f=s.focusNode;s=s.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break t}var _=0,A=-1,B=-1,J=0,ft=0,_t=t,et=null;e:for(;;){for(var rt;_t!==a||u!==0&&_t.nodeType!==3||(A=_+u),_t!==f||s!==0&&_t.nodeType!==3||(B=_+s),_t.nodeType===3&&(_+=_t.nodeValue.length),(rt=_t.firstChild)!==null;)et=_t,_t=rt;for(;;){if(_t===t)break e;if(et===a&&++J===u&&(A=_),et===f&&++ft===s&&(B=_),(rt=_t.nextSibling)!==null)break;_t=et,et=_t.parentNode}_t=rt}a=A===-1||B===-1?null:{start:A,end:B}}else a=null}a=a||{start:0,end:0}}else a=null;for(xf={focusedElem:t,selectionRange:a},Bl=!1,on=n;on!==null;)if(n=on,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,on=t;else for(;on!==null;){switch(n=on,f=n.alternate,t=n.flags,n.tag){case 0:if((t&4)!==0&&(t=n.updateQueue,t=t!==null?t.events:null,t!==null))for(a=0;a<t.length;a++)u=t[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&f!==null){t=void 0,a=n,u=f.memoizedProps,f=f.memoizedState,s=a.stateNode;try{var Lt=tr(a.type,u);t=s.getSnapshotBeforeUpdate(Lt,f),s.__reactInternalSnapshotBeforeUpdate=t}catch(Yt){Re(a,a.return,Yt)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)Ef(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Ef(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(r(163))}if(t=n.sibling,t!==null){t.return=n.return,on=t;break}on=n.return}}function nm(t,n,a){var s=a.flags;switch(a.tag){case 0:case 11:case 15:zi(t,a),s&4&&to(5,a);break;case 1:if(zi(t,a),s&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(_){Re(a,a.return,_)}else{var u=tr(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(u,n,t.__reactInternalSnapshotBeforeUpdate)}catch(_){Re(a,a.return,_)}}s&64&&Kp(a),s&512&&eo(a,a.return);break;case 3:if(zi(t,a),s&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Hd(t,n)}catch(_){Re(a,a.return,_)}}break;case 27:n===null&&s&4&&tm(a);case 26:case 5:zi(t,a),n===null&&s&4&&Jp(a),s&512&&eo(a,a.return);break;case 12:zi(t,a);break;case 31:zi(t,a),s&4&&rm(t,a);break;case 13:zi(t,a),s&4&&sm(t,a),s&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=rS.bind(null,a),AS(t,a))));break;case 22:if(s=a.memoizedState!==null||Oi,!s){n=n!==null&&n.memoizedState!==null||Qe,u=Oi;var f=Qe;Oi=s,(Qe=n)&&!f?Bi(t,a,(a.subtreeFlags&8772)!==0):zi(t,a),Oi=u,Qe=f}break;case 30:break;default:zi(t,a)}}function im(t){var n=t.alternate;n!==null&&(t.alternate=null,im(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&zt(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var He=null,Ln=!1;function Pi(t,n,a){for(a=a.child;a!==null;)am(t,n,a),a=a.sibling}function am(t,n,a){if(Nt&&typeof Nt.onCommitFiberUnmount=="function")try{Nt.onCommitFiberUnmount(Dt,a)}catch{}switch(a.tag){case 26:Qe||_i(a,n),Pi(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:Qe||_i(a,n);var s=He,u=Ln;Sa(a.type)&&(He=a.stateNode,Ln=!1),Pi(t,n,a),co(a.stateNode),He=s,Ln=u;break;case 5:Qe||_i(a,n);case 6:if(s=He,u=Ln,He=null,Pi(t,n,a),He=s,Ln=u,He!==null)if(Ln)try{(He.nodeType===9?He.body:He.nodeName==="HTML"?He.ownerDocument.body:He).removeChild(a.stateNode)}catch(f){Re(a,n,f)}else try{He.removeChild(a.stateNode)}catch(f){Re(a,n,f)}break;case 18:He!==null&&(Ln?(t=He,Km(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),Kr(t)):Km(He,a.stateNode));break;case 4:s=He,u=Ln,He=a.stateNode.containerInfo,Ln=!0,Pi(t,n,a),He=s,Ln=u;break;case 0:case 11:case 14:case 15:ha(2,a,n),Qe||ha(4,a,n),Pi(t,n,a);break;case 1:Qe||(_i(a,n),s=a.stateNode,typeof s.componentWillUnmount=="function"&&Qp(a,n,s)),Pi(t,n,a);break;case 21:Pi(t,n,a);break;case 22:Qe=(s=Qe)||a.memoizedState!==null,Pi(t,n,a),Qe=s;break;default:Pi(t,n,a)}}function rm(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{Kr(t)}catch(a){Re(n,n.return,a)}}}function sm(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Kr(t)}catch(a){Re(n,n.return,a)}}function Q0(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new em),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new em),n;default:throw Error(r(435,t.tag))}}function _l(t,n){var a=Q0(t);n.forEach(function(s){if(!a.has(s)){a.add(s);var u=sS.bind(null,t,s);s.then(u,u)}})}function Nn(t,n){var a=n.deletions;if(a!==null)for(var s=0;s<a.length;s++){var u=a[s],f=t,_=n,A=_;t:for(;A!==null;){switch(A.tag){case 27:if(Sa(A.type)){He=A.stateNode,Ln=!1;break t}break;case 5:He=A.stateNode,Ln=!1;break t;case 3:case 4:He=A.stateNode.containerInfo,Ln=!0;break t}A=A.return}if(He===null)throw Error(r(160));am(f,_,u),He=null,Ln=!1,f=u.alternate,f!==null&&(f.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)om(n,t),n=n.sibling}var si=null;function om(t,n){var a=t.alternate,s=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Nn(n,t),On(t),s&4&&(ha(3,t,t.return),to(3,t),ha(5,t,t.return));break;case 1:Nn(n,t),On(t),s&512&&(Qe||a===null||_i(a,a.return)),s&64&&Oi&&(t=t.updateQueue,t!==null&&(s=t.callbacks,s!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?s:a.concat(s))));break;case 26:var u=si;if(Nn(n,t),On(t),s&512&&(Qe||a===null||_i(a,a.return)),s&4){var f=a!==null?a.memoizedState:null;if(s=t.memoizedState,a===null)if(s===null)if(t.stateNode===null){t:{s=t.type,a=t.memoizedProps,u=u.ownerDocument||u;e:switch(s){case"title":f=u.getElementsByTagName("title")[0],(!f||f[Ct]||f[$e]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=u.createElement(s),u.head.insertBefore(f,u.querySelector("head > title"))),dn(f,s,a),f[$e]=t,Gt(f),s=f;break t;case"link":var _=og("link","href",u).get(s+(a.href||""));if(_){for(var A=0;A<_.length;A++)if(f=_[A],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){_.splice(A,1);break e}}f=u.createElement(s),dn(f,s,a),u.head.appendChild(f);break;case"meta":if(_=og("meta","content",u).get(s+(a.content||""))){for(A=0;A<_.length;A++)if(f=_[A],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){_.splice(A,1);break e}}f=u.createElement(s),dn(f,s,a),u.head.appendChild(f);break;default:throw Error(r(468,s))}f[$e]=t,Gt(f),s=f}t.stateNode=s}else lg(u,t.type,t.stateNode);else t.stateNode=sg(u,s,t.memoizedProps);else f!==s?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,s===null?lg(u,t.type,t.stateNode):sg(u,s,t.memoizedProps)):s===null&&t.stateNode!==null&&jc(t,t.memoizedProps,a.memoizedProps)}break;case 27:Nn(n,t),On(t),s&512&&(Qe||a===null||_i(a,a.return)),a!==null&&s&4&&jc(t,t.memoizedProps,a.memoizedProps);break;case 5:if(Nn(n,t),On(t),s&512&&(Qe||a===null||_i(a,a.return)),t.flags&32){u=t.stateNode;try{Sr(u,"")}catch(Lt){Re(t,t.return,Lt)}}s&4&&t.stateNode!=null&&(u=t.memoizedProps,jc(t,u,a!==null?a.memoizedProps:u)),s&1024&&(Qc=!0);break;case 6:if(Nn(n,t),On(t),s&4){if(t.stateNode===null)throw Error(r(162));s=t.memoizedProps,a=t.stateNode;try{a.nodeValue=s}catch(Lt){Re(t,t.return,Lt)}}break;case 3:if(Nl=null,u=si,si=Ul(n.containerInfo),Nn(n,t),si=u,On(t),s&4&&a!==null&&a.memoizedState.isDehydrated)try{Kr(n.containerInfo)}catch(Lt){Re(t,t.return,Lt)}Qc&&(Qc=!1,lm(t));break;case 4:s=si,si=Ul(t.stateNode.containerInfo),Nn(n,t),On(t),si=s;break;case 12:Nn(n,t),On(t);break;case 31:Nn(n,t),On(t),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,_l(t,s)));break;case 13:Nn(n,t),On(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(Sl=gt()),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,_l(t,s)));break;case 22:u=t.memoizedState!==null;var B=a!==null&&a.memoizedState!==null,J=Oi,ft=Qe;if(Oi=J||u,Qe=ft||B,Nn(n,t),Qe=ft,Oi=J,On(t),s&8192)t:for(n=t.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||B||Oi||Qe||er(t)),a=null,n=t;;){if(n.tag===5||n.tag===26){if(a===null){B=a=n;try{if(f=B.stateNode,u)_=f.style,typeof _.setProperty=="function"?_.setProperty("display","none","important"):_.display="none";else{A=B.stateNode;var _t=B.memoizedProps.style,et=_t!=null&&_t.hasOwnProperty("display")?_t.display:null;A.style.display=et==null||typeof et=="boolean"?"":(""+et).trim()}}catch(Lt){Re(B,B.return,Lt)}}}else if(n.tag===6){if(a===null){B=n;try{B.stateNode.nodeValue=u?"":B.memoizedProps}catch(Lt){Re(B,B.return,Lt)}}}else if(n.tag===18){if(a===null){B=n;try{var rt=B.stateNode;u?Qm(rt,!0):Qm(B.stateNode,!1)}catch(Lt){Re(B,B.return,Lt)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break t;for(;n.sibling===null;){if(n.return===null||n.return===t)break t;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}s&4&&(s=t.updateQueue,s!==null&&(a=s.retryQueue,a!==null&&(s.retryQueue=null,_l(t,a))));break;case 19:Nn(n,t),On(t),s&4&&(s=t.updateQueue,s!==null&&(t.updateQueue=null,_l(t,s)));break;case 30:break;case 21:break;default:Nn(n,t),On(t)}}function On(t){var n=t.flags;if(n&2){try{for(var a,s=t.return;s!==null;){if($p(s)){a=s;break}s=s.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var u=a.stateNode,f=Zc(t);gl(t,f,u);break;case 5:var _=a.stateNode;a.flags&32&&(Sr(_,""),a.flags&=-33);var A=Zc(t);gl(t,A,_);break;case 3:case 4:var B=a.stateNode.containerInfo,J=Zc(t);Kc(t,J,B);break;default:throw Error(r(161))}}catch(ft){Re(t,t.return,ft)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function lm(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;lm(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function zi(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)nm(t,n.alternate,n),n=n.sibling}function er(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:ha(4,n,n.return),er(n);break;case 1:_i(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&Qp(n,n.return,a),er(n);break;case 27:co(n.stateNode);case 26:case 5:_i(n,n.return),er(n);break;case 22:n.memoizedState===null&&er(n);break;case 30:er(n);break;default:er(n)}t=t.sibling}}function Bi(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var s=n.alternate,u=t,f=n,_=f.flags;switch(f.tag){case 0:case 11:case 15:Bi(u,f,a),to(4,f);break;case 1:if(Bi(u,f,a),s=f,u=s.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch(J){Re(s,s.return,J)}if(s=f,u=s.updateQueue,u!==null){var A=s.stateNode;try{var B=u.shared.hiddenCallbacks;if(B!==null)for(u.shared.hiddenCallbacks=null,u=0;u<B.length;u++)Fd(B[u],A)}catch(J){Re(s,s.return,J)}}a&&_&64&&Kp(f),eo(f,f.return);break;case 27:tm(f);case 26:case 5:Bi(u,f,a),a&&s===null&&_&4&&Jp(f),eo(f,f.return);break;case 12:Bi(u,f,a);break;case 31:Bi(u,f,a),a&&_&4&&rm(u,f);break;case 13:Bi(u,f,a),a&&_&4&&sm(u,f);break;case 22:f.memoizedState===null&&Bi(u,f,a),eo(f,f.return);break;case 30:break;default:Bi(u,f,a)}n=n.sibling}}function Jc(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&Gs(a))}function $c(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Gs(t))}function oi(t,n,a,s){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)um(t,n,a,s),n=n.sibling}function um(t,n,a,s){var u=n.flags;switch(n.tag){case 0:case 11:case 15:oi(t,n,a,s),u&2048&&to(9,n);break;case 1:oi(t,n,a,s);break;case 3:oi(t,n,a,s),u&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Gs(t)));break;case 12:if(u&2048){oi(t,n,a,s),t=n.stateNode;try{var f=n.memoizedProps,_=f.id,A=f.onPostCommit;typeof A=="function"&&A(_,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(B){Re(n,n.return,B)}}else oi(t,n,a,s);break;case 31:oi(t,n,a,s);break;case 13:oi(t,n,a,s);break;case 23:break;case 22:f=n.stateNode,_=n.alternate,n.memoizedState!==null?f._visibility&2?oi(t,n,a,s):no(t,n):f._visibility&2?oi(t,n,a,s):(f._visibility|=2,Fr(t,n,a,s,(n.subtreeFlags&10256)!==0||!1)),u&2048&&Jc(_,n);break;case 24:oi(t,n,a,s),u&2048&&$c(n.alternate,n);break;default:oi(t,n,a,s)}}function Fr(t,n,a,s,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=t,_=n,A=a,B=s,J=_.flags;switch(_.tag){case 0:case 11:case 15:Fr(f,_,A,B,u),to(8,_);break;case 23:break;case 22:var ft=_.stateNode;_.memoizedState!==null?ft._visibility&2?Fr(f,_,A,B,u):no(f,_):(ft._visibility|=2,Fr(f,_,A,B,u)),u&&J&2048&&Jc(_.alternate,_);break;case 24:Fr(f,_,A,B,u),u&&J&2048&&$c(_.alternate,_);break;default:Fr(f,_,A,B,u)}n=n.sibling}}function no(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,s=n,u=s.flags;switch(s.tag){case 22:no(a,s),u&2048&&Jc(s.alternate,s);break;case 24:no(a,s),u&2048&&$c(s.alternate,s);break;default:no(a,s)}n=n.sibling}}var io=8192;function Hr(t,n,a){if(t.subtreeFlags&io)for(t=t.child;t!==null;)cm(t,n,a),t=t.sibling}function cm(t,n,a){switch(t.tag){case 26:Hr(t,n,a),t.flags&io&&t.memoizedState!==null&&BS(a,si,t.memoizedState,t.memoizedProps);break;case 5:Hr(t,n,a);break;case 3:case 4:var s=si;si=Ul(t.stateNode.containerInfo),Hr(t,n,a),si=s;break;case 22:t.memoizedState===null&&(s=t.alternate,s!==null&&s.memoizedState!==null?(s=io,io=16777216,Hr(t,n,a),io=s):Hr(t,n,a));break;default:Hr(t,n,a)}}function fm(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function ao(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];on=s,dm(s,t)}fm(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)hm(t),t=t.sibling}function hm(t){switch(t.tag){case 0:case 11:case 15:ao(t),t.flags&2048&&ha(9,t,t.return);break;case 3:ao(t);break;case 12:ao(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,vl(t)):ao(t);break;default:ao(t)}}function vl(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var s=n[a];on=s,dm(s,t)}fm(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:ha(8,n,n.return),vl(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,vl(n));break;default:vl(n)}t=t.sibling}}function dm(t,n){for(;on!==null;){var a=on;switch(a.tag){case 0:case 11:case 15:ha(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var s=a.memoizedState.cachePool.pool;s!=null&&s.refCount++}break;case 24:Gs(a.memoizedState.cache)}if(s=a.child,s!==null)s.return=a,on=s;else t:for(a=t;on!==null;){s=on;var u=s.sibling,f=s.return;if(im(s),s===a){on=null;break t}if(u!==null){u.return=f,on=u;break t}on=f}}}var J0={getCacheForType:function(t){var n=fn(je),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a},cacheSignal:function(){return fn(je).controller.signal}},$0=typeof WeakMap=="function"?WeakMap:Map,Te=0,Oe=null,he=null,pe=0,be=0,Xn=null,da=!1,Gr=!1,tf=!1,Ii=0,Xe=0,pa=0,nr=0,ef=0,kn=0,Vr=0,ro=null,Pn=null,nf=!1,Sl=0,pm=0,xl=1/0,yl=null,ma=null,nn=0,ga=null,Xr=null,Fi=0,af=0,rf=null,mm=null,so=0,sf=null;function Wn(){return(Te&2)!==0&&pe!==0?pe&-pe:F.T!==null?hf():Cs()}function gm(){if(kn===0)if((pe&536870912)===0||ge){var t=Rt;Rt<<=1,(Rt&3932160)===0&&(Rt=262144),kn=t}else kn=536870912;return t=Gn.current,t!==null&&(t.flags|=32),kn}function zn(t,n,a){(t===Oe&&(be===2||be===9)||t.cancelPendingCommit!==null)&&(kr(t,0),_a(t,pe,kn,!1)),ke(t,a),((Te&2)===0||t!==Oe)&&(t===Oe&&((Te&2)===0&&(nr|=a),Xe===4&&_a(t,pe,kn,!1)),vi(t))}function _m(t,n,a){if((Te&6)!==0)throw Error(r(327));var s=!a&&(n&127)===0&&(n&t.expiredLanes)===0||we(t,n),u=s?nS(t,n):lf(t,n,!0),f=s;do{if(u===0){Gr&&!s&&_a(t,n,0,!1);break}else{if(a=t.current.alternate,f&&!tS(a)){u=lf(t,n,!1),f=!1;continue}if(u===2){if(f=n,t.errorRecoveryDisabledLanes&f)var _=0;else _=t.pendingLanes&-536870913,_=_!==0?_:_&536870912?536870912:0;if(_!==0){n=_;t:{var A=t;u=ro;var B=A.current.memoizedState.isDehydrated;if(B&&(kr(A,_).flags|=256),_=lf(A,_,!1),_!==2){if(tf&&!B){A.errorRecoveryDisabledLanes|=f,nr|=f,u=4;break t}f=Pn,Pn=u,f!==null&&(Pn===null?Pn=f:Pn.push.apply(Pn,f))}u=_}if(f=!1,u!==2)continue}}if(u===1){kr(t,0),_a(t,n,0,!0);break}t:{switch(s=t,f=u,f){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:_a(s,n,kn,!da);break t;case 2:Pn=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(u=Sl+300-gt(),10<u)){if(_a(s,n,kn,!da),Ae(s,0,!0)!==0)break t;Fi=n,s.timeoutHandle=jm(vm.bind(null,s,a,Pn,yl,nf,n,kn,nr,Vr,da,f,"Throttled",-0,0),u);break t}vm(s,a,Pn,yl,nf,n,kn,nr,Vr,da,f,null,-0,0)}}break}while(!0);vi(t)}function vm(t,n,a,s,u,f,_,A,B,J,ft,_t,et,rt){if(t.timeoutHandle=-1,_t=n.subtreeFlags,_t&8192||(_t&16785408)===16785408){_t={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Ti},cm(n,f,_t);var Lt=(f&62914560)===f?Sl-gt():(f&4194048)===f?pm-gt():0;if(Lt=IS(_t,Lt),Lt!==null){Fi=f,t.cancelPendingCommit=Lt(bm.bind(null,t,n,f,a,s,u,_,A,B,ft,_t,null,et,rt)),_a(t,f,_,!J);return}}bm(t,n,f,a,s,u,_,A,B)}function tS(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var s=0;s<a.length;s++){var u=a[s],f=u.getSnapshot;u=u.value;try{if(!Fn(f(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function _a(t,n,a,s){n&=~ef,n&=~nr,t.suspendedLanes|=n,t.pingedLanes&=~n,s&&(t.warmLanes|=n),s=t.expirationTimes;for(var u=n;0<u;){var f=31-fe(u),_=1<<f;s[f]=-1,u&=~_}a!==0&&bs(t,a,n)}function Ml(){return(Te&6)===0?(oo(0),!1):!0}function of(){if(he!==null){if(be===0)var t=he.return;else t=he,Ci=Ya=null,Mc(t),Or=null,Xs=0,t=he;for(;t!==null;)Zp(t.alternate,t),t=t.return;he=null}}function kr(t,n){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,xS(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),Fi=0,of(),Oe=t,he=a=bi(t.current,null),pe=n,be=0,Xn=null,da=!1,Gr=we(t,n),tf=!1,Vr=kn=ef=nr=pa=Xe=0,Pn=ro=null,nf=!1,(n&8)!==0&&(n|=n&32);var s=t.entangledLanes;if(s!==0)for(t=t.entanglements,s&=n;0<s;){var u=31-fe(s),f=1<<u;n|=t[u],s&=~f}return Ii=n,Xo(),a}function Sm(t,n){ne=null,F.H=Qs,n===Nr||n===Qo?(n=Pd(),be=3):n===cc?(n=Pd(),be=4):be=n===Ic?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Xn=n,he===null&&(Xe=1,fl(t,Kn(n,t.current)))}function xm(){var t=Gn.current;return t===null?!0:(pe&4194048)===pe?ti===null:(pe&62914560)===pe||(pe&536870912)!==0?t===ti:!1}function ym(){var t=F.H;return F.H=Qs,t===null?Qs:t}function Mm(){var t=F.A;return F.A=J0,t}function El(){Xe=4,da||(pe&4194048)!==pe&&Gn.current!==null||(Gr=!0),(pa&134217727)===0&&(nr&134217727)===0||Oe===null||_a(Oe,pe,kn,!1)}function lf(t,n,a){var s=Te;Te|=2;var u=ym(),f=Mm();(Oe!==t||pe!==n)&&(yl=null,kr(t,n)),n=!1;var _=Xe;t:do try{if(be!==0&&he!==null){var A=he,B=Xn;switch(be){case 8:of(),_=6;break t;case 3:case 2:case 9:case 6:Gn.current===null&&(n=!0);var J=be;if(be=0,Xn=null,Wr(t,A,B,J),a&&Gr){_=0;break t}break;default:J=be,be=0,Xn=null,Wr(t,A,B,J)}}eS(),_=Xe;break}catch(ft){Sm(t,ft)}while(!0);return n&&t.shellSuspendCounter++,Ci=Ya=null,Te=s,F.H=u,F.A=f,he===null&&(Oe=null,pe=0,Xo()),_}function eS(){for(;he!==null;)Em(he)}function nS(t,n){var a=Te;Te|=2;var s=ym(),u=Mm();Oe!==t||pe!==n?(yl=null,xl=gt()+500,kr(t,n)):Gr=we(t,n);t:do try{if(be!==0&&he!==null){n=he;var f=Xn;e:switch(be){case 1:be=0,Xn=null,Wr(t,n,f,1);break;case 2:case 9:if(Nd(f)){be=0,Xn=null,Tm(n);break}n=function(){be!==2&&be!==9||Oe!==t||(be=7),vi(t)},f.then(n,n);break t;case 3:be=7;break t;case 4:be=5;break t;case 7:Nd(f)?(be=0,Xn=null,Tm(n)):(be=0,Xn=null,Wr(t,n,f,7));break;case 5:var _=null;switch(he.tag){case 26:_=he.memoizedState;case 5:case 27:var A=he;if(_?ug(_):A.stateNode.complete){be=0,Xn=null;var B=A.sibling;if(B!==null)he=B;else{var J=A.return;J!==null?(he=J,Tl(J)):he=null}break e}}be=0,Xn=null,Wr(t,n,f,5);break;case 6:be=0,Xn=null,Wr(t,n,f,6);break;case 8:of(),Xe=6;break t;default:throw Error(r(462))}}iS();break}catch(ft){Sm(t,ft)}while(!0);return Ci=Ya=null,F.H=s,F.A=u,Te=a,he!==null?0:(Oe=null,pe=0,Xo(),Xe)}function iS(){for(;he!==null&&!at();)Em(he)}function Em(t){var n=Yp(t.alternate,t,Ii);t.memoizedProps=t.pendingProps,n===null?Tl(t):he=n}function Tm(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=Gp(a,n,n.pendingProps,n.type,void 0,pe);break;case 11:n=Gp(a,n,n.pendingProps,n.type.render,n.ref,pe);break;case 5:Mc(n);default:Zp(a,n),n=he=Md(n,Ii),n=Yp(a,n,Ii)}t.memoizedProps=t.pendingProps,n===null?Tl(t):he=n}function Wr(t,n,a,s){Ci=Ya=null,Mc(n),Or=null,Xs=0;var u=n.return;try{if(W0(t,u,n,a,pe)){Xe=1,fl(t,Kn(a,t.current)),he=null;return}}catch(f){if(u!==null)throw he=u,f;Xe=1,fl(t,Kn(a,t.current)),he=null;return}n.flags&32768?(ge||s===1?t=!0:Gr||(pe&536870912)!==0?t=!1:(da=t=!0,(s===2||s===9||s===3||s===6)&&(s=Gn.current,s!==null&&s.tag===13&&(s.flags|=16384))),Am(n,t)):Tl(n)}function Tl(t){var n=t;do{if((n.flags&32768)!==0){Am(n,da);return}t=n.return;var a=j0(n.alternate,n,Ii);if(a!==null){he=a;return}if(n=n.sibling,n!==null){he=n;return}he=n=t}while(n!==null);Xe===0&&(Xe=5)}function Am(t,n){do{var a=Z0(t.alternate,t);if(a!==null){a.flags&=32767,he=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){he=t;return}he=t=a}while(t!==null);Xe=6,he=null}function bm(t,n,a,s,u,f,_,A,B){t.cancelPendingCommit=null;do Al();while(nn!==0);if((Te&6)!==0)throw Error(r(327));if(n!==null){if(n===t.current)throw Error(r(177));if(f=n.lanes|n.childLanes,f|=Zu,Oo(t,a,f,_,A,B),t===Oe&&(he=Oe=null,pe=0),Xr=n,ga=t,Fi=a,af=f,rf=u,mm=s,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,oS(Zt,function(){return Um(),null})):(t.callbackNode=null,t.callbackPriority=0),s=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||s){s=F.T,F.T=null,u=K.p,K.p=2,_=Te,Te|=4;try{K0(t,n,a)}finally{Te=_,K.p=u,F.T=s}}nn=1,Rm(),Cm(),wm()}}function Rm(){if(nn===1){nn=0;var t=ga,n=Xr,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=F.T,F.T=null;var s=K.p;K.p=2;var u=Te;Te|=4;try{om(n,t);var f=xf,_=dd(t.containerInfo),A=f.focusedElem,B=f.selectionRange;if(_!==A&&A&&A.ownerDocument&&hd(A.ownerDocument.documentElement,A)){if(B!==null&&ku(A)){var J=B.start,ft=B.end;if(ft===void 0&&(ft=J),"selectionStart"in A)A.selectionStart=J,A.selectionEnd=Math.min(ft,A.value.length);else{var _t=A.ownerDocument||document,et=_t&&_t.defaultView||window;if(et.getSelection){var rt=et.getSelection(),Lt=A.textContent.length,Yt=Math.min(B.start,Lt),Le=B.end===void 0?Yt:Math.min(B.end,Lt);!rt.extend&&Yt>Le&&(_=Le,Le=Yt,Yt=_);var k=fd(A,Yt),H=fd(A,Le);if(k&&H&&(rt.rangeCount!==1||rt.anchorNode!==k.node||rt.anchorOffset!==k.offset||rt.focusNode!==H.node||rt.focusOffset!==H.offset)){var Q=_t.createRange();Q.setStart(k.node,k.offset),rt.removeAllRanges(),Yt>Le?(rt.addRange(Q),rt.extend(H.node,H.offset)):(Q.setEnd(H.node,H.offset),rt.addRange(Q))}}}}for(_t=[],rt=A;rt=rt.parentNode;)rt.nodeType===1&&_t.push({element:rt,left:rt.scrollLeft,top:rt.scrollTop});for(typeof A.focus=="function"&&A.focus(),A=0;A<_t.length;A++){var mt=_t[A];mt.element.scrollLeft=mt.left,mt.element.scrollTop=mt.top}}Bl=!!Sf,xf=Sf=null}finally{Te=u,K.p=s,F.T=a}}t.current=n,nn=2}}function Cm(){if(nn===2){nn=0;var t=ga,n=Xr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=F.T,F.T=null;var s=K.p;K.p=2;var u=Te;Te|=4;try{nm(t,n.alternate,n)}finally{Te=u,K.p=s,F.T=a}}nn=3}}function wm(){if(nn===4||nn===3){nn=0,St();var t=ga,n=Xr,a=Fi,s=mm;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?nn=5:(nn=0,Xr=ga=null,Dm(t,t.pendingLanes));var u=t.pendingLanes;if(u===0&&(ma=null),$i(a),n=n.stateNode,Nt&&typeof Nt.onCommitFiberRoot=="function")try{Nt.onCommitFiberRoot(Dt,n,void 0,(n.current.flags&128)===128)}catch{}if(s!==null){n=F.T,u=K.p,K.p=2,F.T=null;try{for(var f=t.onRecoverableError,_=0;_<s.length;_++){var A=s[_];f(A.value,{componentStack:A.stack})}}finally{F.T=n,K.p=u}}(Fi&3)!==0&&Al(),vi(t),u=t.pendingLanes,(a&261930)!==0&&(u&42)!==0?t===sf?so++:(so=0,sf=t):so=0,oo(0)}}function Dm(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,Gs(n)))}function Al(){return Rm(),Cm(),wm(),Um()}function Um(){if(nn!==5)return!1;var t=ga,n=af;af=0;var a=$i(Fi),s=F.T,u=K.p;try{K.p=32>a?32:a,F.T=null,a=rf,rf=null;var f=ga,_=Fi;if(nn=0,Xr=ga=null,Fi=0,(Te&6)!==0)throw Error(r(331));var A=Te;if(Te|=4,hm(f.current),um(f,f.current,_,a),Te=A,oo(0,!1),Nt&&typeof Nt.onPostCommitFiberRoot=="function")try{Nt.onPostCommitFiberRoot(Dt,f)}catch{}return!0}finally{K.p=u,F.T=s,Dm(t,n)}}function Lm(t,n,a){n=Kn(a,n),n=Bc(t.stateNode,n,2),t=ua(t,n,2),t!==null&&(ke(t,2),vi(t))}function Re(t,n,a){if(t.tag===3)Lm(t,t,a);else for(;n!==null;){if(n.tag===3){Lm(n,t,a);break}else if(n.tag===1){var s=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof s.componentDidCatch=="function"&&(ma===null||!ma.has(s))){t=Kn(a,t),a=Np(2),s=ua(n,a,2),s!==null&&(Op(a,s,n,t),ke(s,2),vi(s));break}}n=n.return}}function uf(t,n,a){var s=t.pingCache;if(s===null){s=t.pingCache=new $0;var u=new Set;s.set(n,u)}else u=s.get(n),u===void 0&&(u=new Set,s.set(n,u));u.has(a)||(tf=!0,u.add(a),t=aS.bind(null,t,n,a),n.then(t,t))}function aS(t,n,a){var s=t.pingCache;s!==null&&s.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,Oe===t&&(pe&a)===a&&(Xe===4||Xe===3&&(pe&62914560)===pe&&300>gt()-Sl?(Te&2)===0&&kr(t,0):ef|=a,Vr===pe&&(Vr=0)),vi(t)}function Nm(t,n){n===0&&(n=xe()),t=ka(t,n),t!==null&&(ke(t,n),vi(t))}function rS(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),Nm(t,a)}function sS(t,n){var a=0;switch(t.tag){case 31:case 13:var s=t.stateNode,u=t.memoizedState;u!==null&&(a=u.retryLane);break;case 19:s=t.stateNode;break;case 22:s=t.stateNode._retryCache;break;default:throw Error(r(314))}s!==null&&s.delete(n),Nm(t,a)}function oS(t,n){return b(t,n)}var bl=null,qr=null,cf=!1,Rl=!1,ff=!1,va=0;function vi(t){t!==qr&&t.next===null&&(qr===null?bl=qr=t:qr=qr.next=t),Rl=!0,cf||(cf=!0,uS())}function oo(t,n){if(!ff&&Rl){ff=!0;do for(var a=!1,s=bl;s!==null;){if(t!==0){var u=s.pendingLanes;if(u===0)var f=0;else{var _=s.suspendedLanes,A=s.pingedLanes;f=(1<<31-fe(42|t)+1)-1,f&=u&~(_&~A),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,Bm(s,f))}else f=pe,f=Ae(s,s===Oe?f:0,s.cancelPendingCommit!==null||s.timeoutHandle!==-1),(f&3)===0||we(s,f)||(a=!0,Bm(s,f));s=s.next}while(a);ff=!1}}function lS(){Om()}function Om(){Rl=cf=!1;var t=0;va!==0&&SS()&&(t=va);for(var n=gt(),a=null,s=bl;s!==null;){var u=s.next,f=Pm(s,n);f===0?(s.next=null,a===null?bl=u:a.next=u,u===null&&(qr=a)):(a=s,(t!==0||(f&3)!==0)&&(Rl=!0)),s=u}nn!==0&&nn!==5||oo(t),va!==0&&(va=0)}function Pm(t,n){for(var a=t.suspendedLanes,s=t.pingedLanes,u=t.expirationTimes,f=t.pendingLanes&-62914561;0<f;){var _=31-fe(f),A=1<<_,B=u[_];B===-1?((A&a)===0||(A&s)!==0)&&(u[_]=sn(A,n)):B<=n&&(t.expiredLanes|=A),f&=~A}if(n=Oe,a=pe,a=Ae(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),s=t.callbackNode,a===0||t===n&&(be===2||be===9)||t.cancelPendingCommit!==null)return s!==null&&s!==null&&ot(s),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||we(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(s!==null&&ot(s),$i(a)){case 2:case 8:a=Tt;break;case 32:a=Zt;break;case 268435456:a=Ht;break;default:a=Zt}return s=zm.bind(null,t),a=b(a,s),t.callbackPriority=n,t.callbackNode=a,n}return s!==null&&s!==null&&ot(s),t.callbackPriority=2,t.callbackNode=null,2}function zm(t,n){if(nn!==0&&nn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(Al()&&t.callbackNode!==a)return null;var s=pe;return s=Ae(t,t===Oe?s:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),s===0?null:(_m(t,s,n),Pm(t,gt()),t.callbackNode!=null&&t.callbackNode===a?zm.bind(null,t):null)}function Bm(t,n){if(Al())return null;_m(t,n,!0)}function uS(){yS(function(){(Te&6)!==0?b(At,lS):Om()})}function hf(){if(va===0){var t=Ur;t===0&&(t=ht,ht<<=1,(ht&261888)===0&&(ht=256)),va=t}return va}function Im(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Po(""+t)}function Fm(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function cS(t,n,a,s,u){if(n==="submit"&&a&&a.stateNode===u){var f=Im((u[pn]||null).action),_=s.submitter;_&&(n=(n=_[pn]||null)?Im(n.formAction):_.getAttribute("formAction"),n!==null&&(f=n,_=null));var A=new Fo("action","action",null,s,u);t.push({event:A,listeners:[{instance:null,listener:function(){if(s.defaultPrevented){if(va!==0){var B=_?Fm(u,_):new FormData(u);Uc(a,{pending:!0,data:B,method:u.method,action:f},null,B)}}else typeof f=="function"&&(A.preventDefault(),B=_?Fm(u,_):new FormData(u),Uc(a,{pending:!0,data:B,method:u.method,action:f},f,B))},currentTarget:u}]})}}for(var df=0;df<ju.length;df++){var pf=ju[df],fS=pf.toLowerCase(),hS=pf[0].toUpperCase()+pf.slice(1);ri(fS,"on"+hS)}ri(gd,"onAnimationEnd"),ri(_d,"onAnimationIteration"),ri(vd,"onAnimationStart"),ri("dblclick","onDoubleClick"),ri("focusin","onFocus"),ri("focusout","onBlur"),ri(C0,"onTransitionRun"),ri(w0,"onTransitionStart"),ri(D0,"onTransitionCancel"),ri(Sd,"onTransitionEnd"),mn("onMouseEnter",["mouseout","mouseover"]),mn("onMouseLeave",["mouseout","mouseover"]),mn("onPointerEnter",["pointerout","pointerover"]),mn("onPointerLeave",["pointerout","pointerover"]),We("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),We("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),We("onBeforeInput",["compositionend","keypress","textInput","paste"]),We("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),We("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),We("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var lo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),dS=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(lo));function Hm(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var s=t[a],u=s.event;s=s.listeners;t:{var f=void 0;if(n)for(var _=s.length-1;0<=_;_--){var A=s[_],B=A.instance,J=A.currentTarget;if(A=A.listener,B!==f&&u.isPropagationStopped())break t;f=A,u.currentTarget=J;try{f(u)}catch(ft){Vo(ft)}u.currentTarget=null,f=B}else for(_=0;_<s.length;_++){if(A=s[_],B=A.instance,J=A.currentTarget,A=A.listener,B!==f&&u.isPropagationStopped())break t;f=A,u.currentTarget=J;try{f(u)}catch(ft){Vo(ft)}u.currentTarget=null,f=B}}}}function de(t,n){var a=n[Y];a===void 0&&(a=n[Y]=new Set);var s=t+"__bubble";a.has(s)||(Gm(n,t,2,!1),a.add(s))}function mf(t,n,a){var s=0;n&&(s|=4),Gm(a,t,s,n)}var Cl="_reactListening"+Math.random().toString(36).slice(2);function gf(t){if(!t[Cl]){t[Cl]=!0,Ge.forEach(function(a){a!=="selectionchange"&&(dS.has(a)||mf(a,!1,t),mf(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[Cl]||(n[Cl]=!0,mf("selectionchange",!1,n))}}function Gm(t,n,a,s){switch(gg(n)){case 2:var u=GS;break;case 8:u=VS;break;default:u=Uf}a=u.bind(null,n,a,t),u=void 0,!Pu||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),s?u!==void 0?t.addEventListener(n,a,{capture:!0,passive:u}):t.addEventListener(n,a,!0):u!==void 0?t.addEventListener(n,a,{passive:u}):t.addEventListener(n,a,!1)}function _f(t,n,a,s,u){var f=s;if((n&1)===0&&(n&2)===0&&s!==null)t:for(;;){if(s===null)return;var _=s.tag;if(_===3||_===4){var A=s.stateNode.containerInfo;if(A===u)break;if(_===4)for(_=s.return;_!==null;){var B=_.tag;if((B===3||B===4)&&_.stateNode.containerInfo===u)return;_=_.return}for(;A!==null;){if(_=Pt(A),_===null)return;if(B=_.tag,B===5||B===6||B===26||B===27){s=f=_;continue t}A=A.parentNode}}s=s.return}qh(function(){var J=f,ft=Nu(a),_t=[];t:{var et=xd.get(t);if(et!==void 0){var rt=Fo,Lt=t;switch(t){case"keypress":if(Bo(a)===0)break t;case"keydown":case"keyup":rt=s0;break;case"focusin":Lt="focus",rt=Fu;break;case"focusout":Lt="blur",rt=Fu;break;case"beforeblur":case"afterblur":rt=Fu;break;case"click":if(a.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":rt=Zh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":rt=jv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":rt=u0;break;case gd:case _d:case vd:rt=Qv;break;case Sd:rt=f0;break;case"scroll":case"scrollend":rt=qv;break;case"wheel":rt=d0;break;case"copy":case"cut":case"paste":rt=$v;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":rt=Qh;break;case"toggle":case"beforetoggle":rt=m0}var Yt=(n&4)!==0,Le=!Yt&&(t==="scroll"||t==="scrollend"),k=Yt?et!==null?et+"Capture":null:et;Yt=[];for(var H=J,Q;H!==null;){var mt=H;if(Q=mt.stateNode,mt=mt.tag,mt!==5&&mt!==26&&mt!==27||Q===null||k===null||(mt=Ds(H,k),mt!=null&&Yt.push(uo(H,mt,Q))),Le)break;H=H.return}0<Yt.length&&(et=new rt(et,Lt,null,a,ft),_t.push({event:et,listeners:Yt}))}}if((n&7)===0){t:{if(et=t==="mouseover"||t==="pointerover",rt=t==="mouseout"||t==="pointerout",et&&a!==Lu&&(Lt=a.relatedTarget||a.fromElement)&&(Pt(Lt)||Lt[w]))break t;if((rt||et)&&(et=ft.window===ft?ft:(et=ft.ownerDocument)?et.defaultView||et.parentWindow:window,rt?(Lt=a.relatedTarget||a.toElement,rt=J,Lt=Lt?Pt(Lt):null,Lt!==null&&(Le=c(Lt),Yt=Lt.tag,Lt!==Le||Yt!==5&&Yt!==27&&Yt!==6)&&(Lt=null)):(rt=null,Lt=J),rt!==Lt)){if(Yt=Zh,mt="onMouseLeave",k="onMouseEnter",H="mouse",(t==="pointerout"||t==="pointerover")&&(Yt=Qh,mt="onPointerLeave",k="onPointerEnter",H="pointer"),Le=rt==null?et:Kt(rt),Q=Lt==null?et:Kt(Lt),et=new Yt(mt,H+"leave",rt,a,ft),et.target=Le,et.relatedTarget=Q,mt=null,Pt(ft)===J&&(Yt=new Yt(k,H+"enter",Lt,a,ft),Yt.target=Q,Yt.relatedTarget=Le,mt=Yt),Le=mt,rt&&Lt)e:{for(Yt=pS,k=rt,H=Lt,Q=0,mt=k;mt;mt=Yt(mt))Q++;mt=0;for(var Wt=H;Wt;Wt=Yt(Wt))mt++;for(;0<Q-mt;)k=Yt(k),Q--;for(;0<mt-Q;)H=Yt(H),mt--;for(;Q--;){if(k===H||H!==null&&k===H.alternate){Yt=k;break e}k=Yt(k),H=Yt(H)}Yt=null}else Yt=null;rt!==null&&Vm(_t,et,rt,Yt,!1),Lt!==null&&Le!==null&&Vm(_t,Le,Lt,Yt,!0)}}t:{if(et=J?Kt(J):window,rt=et.nodeName&&et.nodeName.toLowerCase(),rt==="select"||rt==="input"&&et.type==="file")var Me=rd;else if(id(et))if(sd)Me=A0;else{Me=E0;var It=M0}else rt=et.nodeName,!rt||rt.toLowerCase()!=="input"||et.type!=="checkbox"&&et.type!=="radio"?J&&Uu(J.elementType)&&(Me=rd):Me=T0;if(Me&&(Me=Me(t,J))){ad(_t,Me,a,ft);break t}It&&It(t,et,J),t==="focusout"&&J&&et.type==="number"&&J.memoizedProps.value!=null&&Du(et,"number",et.value)}switch(It=J?Kt(J):window,t){case"focusin":(id(It)||It.contentEditable==="true")&&(Er=It,Wu=J,Is=null);break;case"focusout":Is=Wu=Er=null;break;case"mousedown":qu=!0;break;case"contextmenu":case"mouseup":case"dragend":qu=!1,pd(_t,a,ft);break;case"selectionchange":if(R0)break;case"keydown":case"keyup":pd(_t,a,ft)}var re;if(Gu)t:{switch(t){case"compositionstart":var me="onCompositionStart";break t;case"compositionend":me="onCompositionEnd";break t;case"compositionupdate":me="onCompositionUpdate";break t}me=void 0}else Mr?ed(t,a)&&(me="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(me="onCompositionStart");me&&(Jh&&a.locale!=="ko"&&(Mr||me!=="onCompositionStart"?me==="onCompositionEnd"&&Mr&&(re=Yh()):(na=ft,zu="value"in na?na.value:na.textContent,Mr=!0)),It=wl(J,me),0<It.length&&(me=new Kh(me,t,null,a,ft),_t.push({event:me,listeners:It}),re?me.data=re:(re=nd(a),re!==null&&(me.data=re)))),(re=_0?v0(t,a):S0(t,a))&&(me=wl(J,"onBeforeInput"),0<me.length&&(It=new Kh("onBeforeInput","beforeinput",null,a,ft),_t.push({event:It,listeners:me}),It.data=re)),cS(_t,t,J,a,ft)}Hm(_t,n)})}function uo(t,n,a){return{instance:t,listener:n,currentTarget:a}}function wl(t,n){for(var a=n+"Capture",s=[];t!==null;){var u=t,f=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||f===null||(u=Ds(t,a),u!=null&&s.unshift(uo(t,u,f)),u=Ds(t,n),u!=null&&s.push(uo(t,u,f))),t.tag===3)return s;t=t.return}return[]}function pS(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Vm(t,n,a,s,u){for(var f=n._reactName,_=[];a!==null&&a!==s;){var A=a,B=A.alternate,J=A.stateNode;if(A=A.tag,B!==null&&B===s)break;A!==5&&A!==26&&A!==27||J===null||(B=J,u?(J=Ds(a,f),J!=null&&_.unshift(uo(a,J,B))):u||(J=Ds(a,f),J!=null&&_.push(uo(a,J,B)))),a=a.return}_.length!==0&&t.push({event:n,listeners:_})}var mS=/\r\n?/g,gS=/\u0000|\uFFFD/g;function Xm(t){return(typeof t=="string"?t:""+t).replace(mS,`
`).replace(gS,"")}function km(t,n){return n=Xm(n),Xm(t)===n}function Ue(t,n,a,s,u,f){switch(a){case"children":typeof s=="string"?n==="body"||n==="textarea"&&s===""||Sr(t,s):(typeof s=="number"||typeof s=="bigint")&&n!=="body"&&Sr(t,""+s);break;case"className":Fa(t,"class",s);break;case"tabIndex":Fa(t,"tabindex",s);break;case"dir":case"role":case"viewBox":case"width":case"height":Fa(t,a,s);break;case"style":kh(t,s,f);break;case"data":if(n!=="object"){Fa(t,"data",s);break}case"src":case"href":if(s===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(s==null||typeof s=="function"||typeof s=="symbol"||typeof s=="boolean"){t.removeAttribute(a);break}s=Po(""+s),t.setAttribute(a,s);break;case"action":case"formAction":if(typeof s=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Ue(t,n,"name",u.name,u,null),Ue(t,n,"formEncType",u.formEncType,u,null),Ue(t,n,"formMethod",u.formMethod,u,null),Ue(t,n,"formTarget",u.formTarget,u,null)):(Ue(t,n,"encType",u.encType,u,null),Ue(t,n,"method",u.method,u,null),Ue(t,n,"target",u.target,u,null)));if(s==null||typeof s=="symbol"||typeof s=="boolean"){t.removeAttribute(a);break}s=Po(""+s),t.setAttribute(a,s);break;case"onClick":s!=null&&(t.onclick=Ti);break;case"onScroll":s!=null&&de("scroll",t);break;case"onScrollEnd":s!=null&&de("scrollend",t);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(u.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"multiple":t.multiple=s&&typeof s!="function"&&typeof s!="symbol";break;case"muted":t.muted=s&&typeof s!="function"&&typeof s!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(s==null||typeof s=="function"||typeof s=="boolean"||typeof s=="symbol"){t.removeAttribute("xlink:href");break}a=Po(""+s),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,""+s):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":s&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":s===!0?t.setAttribute(a,""):s!==!1&&s!=null&&typeof s!="function"&&typeof s!="symbol"?t.setAttribute(a,s):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":s!=null&&typeof s!="function"&&typeof s!="symbol"&&!isNaN(s)&&1<=s?t.setAttribute(a,s):t.removeAttribute(a);break;case"rowSpan":case"start":s==null||typeof s=="function"||typeof s=="symbol"||isNaN(s)?t.removeAttribute(a):t.setAttribute(a,s);break;case"popover":de("beforetoggle",t),de("toggle",t),jn(t,"popover",s);break;case"xlinkActuate":yn(t,"http://www.w3.org/1999/xlink","xlink:actuate",s);break;case"xlinkArcrole":yn(t,"http://www.w3.org/1999/xlink","xlink:arcrole",s);break;case"xlinkRole":yn(t,"http://www.w3.org/1999/xlink","xlink:role",s);break;case"xlinkShow":yn(t,"http://www.w3.org/1999/xlink","xlink:show",s);break;case"xlinkTitle":yn(t,"http://www.w3.org/1999/xlink","xlink:title",s);break;case"xlinkType":yn(t,"http://www.w3.org/1999/xlink","xlink:type",s);break;case"xmlBase":yn(t,"http://www.w3.org/XML/1998/namespace","xml:base",s);break;case"xmlLang":yn(t,"http://www.w3.org/XML/1998/namespace","xml:lang",s);break;case"xmlSpace":yn(t,"http://www.w3.org/XML/1998/namespace","xml:space",s);break;case"is":jn(t,"is",s);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=kv.get(a)||a,jn(t,a,s))}}function vf(t,n,a,s,u,f){switch(a){case"style":kh(t,s,f);break;case"dangerouslySetInnerHTML":if(s!=null){if(typeof s!="object"||!("__html"in s))throw Error(r(61));if(a=s.__html,a!=null){if(u.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"children":typeof s=="string"?Sr(t,s):(typeof s=="number"||typeof s=="bigint")&&Sr(t,""+s);break;case"onScroll":s!=null&&de("scroll",t);break;case"onScrollEnd":s!=null&&de("scrollend",t);break;case"onClick":s!=null&&(t.onclick=Ti);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!tn.hasOwnProperty(a))t:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),f=t[pn]||null,f=f!=null?f[a]:null,typeof f=="function"&&t.removeEventListener(n,f,u),typeof s=="function")){typeof f!="function"&&f!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,s,u);break t}a in t?t[a]=s:s===!0?t.setAttribute(a,""):jn(t,a,s)}}}function dn(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":de("error",t),de("load",t);var s=!1,u=!1,f;for(f in a)if(a.hasOwnProperty(f)){var _=a[f];if(_!=null)switch(f){case"src":s=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Ue(t,n,f,_,a,null)}}u&&Ue(t,n,"srcSet",a.srcSet,a,null),s&&Ue(t,n,"src",a.src,a,null);return;case"input":de("invalid",t);var A=f=_=u=null,B=null,J=null;for(s in a)if(a.hasOwnProperty(s)){var ft=a[s];if(ft!=null)switch(s){case"name":u=ft;break;case"type":_=ft;break;case"checked":B=ft;break;case"defaultChecked":J=ft;break;case"value":f=ft;break;case"defaultValue":A=ft;break;case"children":case"dangerouslySetInnerHTML":if(ft!=null)throw Error(r(137,n));break;default:Ue(t,n,s,ft,a,null)}}Hh(t,f,A,B,J,_,u,!1);return;case"select":de("invalid",t),s=_=f=null;for(u in a)if(a.hasOwnProperty(u)&&(A=a[u],A!=null))switch(u){case"value":f=A;break;case"defaultValue":_=A;break;case"multiple":s=A;default:Ue(t,n,u,A,a,null)}n=f,a=_,t.multiple=!!s,n!=null?vr(t,!!s,n,!1):a!=null&&vr(t,!!s,a,!0);return;case"textarea":de("invalid",t),f=u=s=null;for(_ in a)if(a.hasOwnProperty(_)&&(A=a[_],A!=null))switch(_){case"value":s=A;break;case"defaultValue":u=A;break;case"children":f=A;break;case"dangerouslySetInnerHTML":if(A!=null)throw Error(r(91));break;default:Ue(t,n,_,A,a,null)}Vh(t,s,u,f);return;case"option":for(B in a)if(a.hasOwnProperty(B)&&(s=a[B],s!=null))switch(B){case"selected":t.selected=s&&typeof s!="function"&&typeof s!="symbol";break;default:Ue(t,n,B,s,a,null)}return;case"dialog":de("beforetoggle",t),de("toggle",t),de("cancel",t),de("close",t);break;case"iframe":case"object":de("load",t);break;case"video":case"audio":for(s=0;s<lo.length;s++)de(lo[s],t);break;case"image":de("error",t),de("load",t);break;case"details":de("toggle",t);break;case"embed":case"source":case"link":de("error",t),de("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(J in a)if(a.hasOwnProperty(J)&&(s=a[J],s!=null))switch(J){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Ue(t,n,J,s,a,null)}return;default:if(Uu(n)){for(ft in a)a.hasOwnProperty(ft)&&(s=a[ft],s!==void 0&&vf(t,n,ft,s,a,void 0));return}}for(A in a)a.hasOwnProperty(A)&&(s=a[A],s!=null&&Ue(t,n,A,s,a,null))}function _S(t,n,a,s){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,f=null,_=null,A=null,B=null,J=null,ft=null;for(rt in a){var _t=a[rt];if(a.hasOwnProperty(rt)&&_t!=null)switch(rt){case"checked":break;case"value":break;case"defaultValue":B=_t;default:s.hasOwnProperty(rt)||Ue(t,n,rt,null,s,_t)}}for(var et in s){var rt=s[et];if(_t=a[et],s.hasOwnProperty(et)&&(rt!=null||_t!=null))switch(et){case"type":f=rt;break;case"name":u=rt;break;case"checked":J=rt;break;case"defaultChecked":ft=rt;break;case"value":_=rt;break;case"defaultValue":A=rt;break;case"children":case"dangerouslySetInnerHTML":if(rt!=null)throw Error(r(137,n));break;default:rt!==_t&&Ue(t,n,et,rt,s,_t)}}wu(t,_,A,B,J,ft,f,u);return;case"select":rt=_=A=et=null;for(f in a)if(B=a[f],a.hasOwnProperty(f)&&B!=null)switch(f){case"value":break;case"multiple":rt=B;default:s.hasOwnProperty(f)||Ue(t,n,f,null,s,B)}for(u in s)if(f=s[u],B=a[u],s.hasOwnProperty(u)&&(f!=null||B!=null))switch(u){case"value":et=f;break;case"defaultValue":A=f;break;case"multiple":_=f;default:f!==B&&Ue(t,n,u,f,s,B)}n=A,a=_,s=rt,et!=null?vr(t,!!a,et,!1):!!s!=!!a&&(n!=null?vr(t,!!a,n,!0):vr(t,!!a,a?[]:"",!1));return;case"textarea":rt=et=null;for(A in a)if(u=a[A],a.hasOwnProperty(A)&&u!=null&&!s.hasOwnProperty(A))switch(A){case"value":break;case"children":break;default:Ue(t,n,A,null,s,u)}for(_ in s)if(u=s[_],f=a[_],s.hasOwnProperty(_)&&(u!=null||f!=null))switch(_){case"value":et=u;break;case"defaultValue":rt=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(r(91));break;default:u!==f&&Ue(t,n,_,u,s,f)}Gh(t,et,rt);return;case"option":for(var Lt in a)if(et=a[Lt],a.hasOwnProperty(Lt)&&et!=null&&!s.hasOwnProperty(Lt))switch(Lt){case"selected":t.selected=!1;break;default:Ue(t,n,Lt,null,s,et)}for(B in s)if(et=s[B],rt=a[B],s.hasOwnProperty(B)&&et!==rt&&(et!=null||rt!=null))switch(B){case"selected":t.selected=et&&typeof et!="function"&&typeof et!="symbol";break;default:Ue(t,n,B,et,s,rt)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var Yt in a)et=a[Yt],a.hasOwnProperty(Yt)&&et!=null&&!s.hasOwnProperty(Yt)&&Ue(t,n,Yt,null,s,et);for(J in s)if(et=s[J],rt=a[J],s.hasOwnProperty(J)&&et!==rt&&(et!=null||rt!=null))switch(J){case"children":case"dangerouslySetInnerHTML":if(et!=null)throw Error(r(137,n));break;default:Ue(t,n,J,et,s,rt)}return;default:if(Uu(n)){for(var Le in a)et=a[Le],a.hasOwnProperty(Le)&&et!==void 0&&!s.hasOwnProperty(Le)&&vf(t,n,Le,void 0,s,et);for(ft in s)et=s[ft],rt=a[ft],!s.hasOwnProperty(ft)||et===rt||et===void 0&&rt===void 0||vf(t,n,ft,et,s,rt);return}}for(var k in a)et=a[k],a.hasOwnProperty(k)&&et!=null&&!s.hasOwnProperty(k)&&Ue(t,n,k,null,s,et);for(_t in s)et=s[_t],rt=a[_t],!s.hasOwnProperty(_t)||et===rt||et==null&&rt==null||Ue(t,n,_t,et,s,rt)}function Wm(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function vS(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,a=performance.getEntriesByType("resource"),s=0;s<a.length;s++){var u=a[s],f=u.transferSize,_=u.initiatorType,A=u.duration;if(f&&A&&Wm(_)){for(_=0,A=u.responseEnd,s+=1;s<a.length;s++){var B=a[s],J=B.startTime;if(J>A)break;var ft=B.transferSize,_t=B.initiatorType;ft&&Wm(_t)&&(B=B.responseEnd,_+=ft*(B<A?1:(A-J)/(B-J)))}if(--s,n+=8*(f+_)/(u.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var Sf=null,xf=null;function Dl(t){return t.nodeType===9?t:t.ownerDocument}function qm(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Ym(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function yf(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Mf=null;function SS(){var t=window.event;return t&&t.type==="popstate"?t===Mf?!1:(Mf=t,!0):(Mf=null,!1)}var jm=typeof setTimeout=="function"?setTimeout:void 0,xS=typeof clearTimeout=="function"?clearTimeout:void 0,Zm=typeof Promise=="function"?Promise:void 0,yS=typeof queueMicrotask=="function"?queueMicrotask:typeof Zm<"u"?function(t){return Zm.resolve(null).then(t).catch(MS)}:jm;function MS(t){setTimeout(function(){throw t})}function Sa(t){return t==="head"}function Km(t,n){var a=n,s=0;do{var u=a.nextSibling;if(t.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(s===0){t.removeChild(u),Kr(n);return}s--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")s++;else if(a==="html")co(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,co(a);for(var f=a.firstChild;f;){var _=f.nextSibling,A=f.nodeName;f[Ct]||A==="SCRIPT"||A==="STYLE"||A==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=_}}else a==="body"&&co(t.ownerDocument.body);a=u}while(a);Kr(n)}function Qm(t,n){var a=t;t=0;do{var s=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),s&&s.nodeType===8)if(a=s.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=s}while(a)}function Ef(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Ef(a),zt(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function ES(t,n,a,s){for(;t.nodeType===1;){var u=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!s&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(s){if(!t[Ct])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(f=t.getAttribute("rel"),f==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(f!==u.rel||t.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||t.getAttribute("title")!==(u.title==null?null:u.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(f=t.getAttribute("src"),(f!==(u.src==null?null:u.src)||t.getAttribute("type")!==(u.type==null?null:u.type)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&f&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var f=u.name==null?null:""+u.name;if(u.type==="hidden"&&t.getAttribute("name")===f)return t}else return t;if(t=ei(t.nextSibling),t===null)break}return null}function TS(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=ei(t.nextSibling),t===null))return null;return t}function Jm(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=ei(t.nextSibling),t===null))return null;return t}function Tf(t){return t.data==="$?"||t.data==="$~"}function Af(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function AS(t,n){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||a.readyState!=="loading")n();else{var s=function(){n(),a.removeEventListener("DOMContentLoaded",s)};a.addEventListener("DOMContentLoaded",s),t._reactRetry=s}}function ei(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var bf=null;function $m(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(n===0)return ei(t.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}t=t.nextSibling}return null}function tg(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return t;n--}else a!=="/$"&&a!=="/&"||n++}t=t.previousSibling}return null}function eg(t,n,a){switch(n=Dl(a),t){case"html":if(t=n.documentElement,!t)throw Error(r(452));return t;case"head":if(t=n.head,!t)throw Error(r(453));return t;case"body":if(t=n.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}function co(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);zt(t)}var ni=new Map,ng=new Set;function Ul(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var Hi=K.d;K.d={f:bS,r:RS,D:CS,C:wS,L:DS,m:US,X:NS,S:LS,M:OS};function bS(){var t=Hi.f(),n=Ml();return t||n}function RS(t){var n=kt(t);n!==null&&n.tag===5&&n.type==="form"?Sp(n):Hi.r(t)}var Yr=typeof document>"u"?null:document;function ig(t,n,a){var s=Yr;if(s&&typeof n=="string"&&n){var u=En(n);u='link[rel="'+t+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),ng.has(u)||(ng.add(u),t={rel:t,crossOrigin:a,href:n},s.querySelector(u)===null&&(n=s.createElement("link"),dn(n,"link",t),Gt(n),s.head.appendChild(n)))}}function CS(t){Hi.D(t),ig("dns-prefetch",t,null)}function wS(t,n){Hi.C(t,n),ig("preconnect",t,n)}function DS(t,n,a){Hi.L(t,n,a);var s=Yr;if(s&&t&&n){var u='link[rel="preload"][as="'+En(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+En(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+En(a.imageSizes)+'"]')):u+='[href="'+En(t)+'"]';var f=u;switch(n){case"style":f=jr(t);break;case"script":f=Zr(t)}ni.has(f)||(t=S({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),ni.set(f,t),s.querySelector(u)!==null||n==="style"&&s.querySelector(fo(f))||n==="script"&&s.querySelector(ho(f))||(n=s.createElement("link"),dn(n,"link",t),Gt(n),s.head.appendChild(n)))}}function US(t,n){Hi.m(t,n);var a=Yr;if(a&&t){var s=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+En(s)+'"][href="'+En(t)+'"]',f=u;switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=Zr(t)}if(!ni.has(f)&&(t=S({rel:"modulepreload",href:t},n),ni.set(f,t),a.querySelector(u)===null)){switch(s){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(ho(f)))return}s=a.createElement("link"),dn(s,"link",t),Gt(s),a.head.appendChild(s)}}}function LS(t,n,a){Hi.S(t,n,a);var s=Yr;if(s&&t){var u=Qt(s).hoistableStyles,f=jr(t);n=n||"default";var _=u.get(f);if(!_){var A={loading:0,preload:null};if(_=s.querySelector(fo(f)))A.loading=5;else{t=S({rel:"stylesheet",href:t,"data-precedence":n},a),(a=ni.get(f))&&Rf(t,a);var B=_=s.createElement("link");Gt(B),dn(B,"link",t),B._p=new Promise(function(J,ft){B.onload=J,B.onerror=ft}),B.addEventListener("load",function(){A.loading|=1}),B.addEventListener("error",function(){A.loading|=2}),A.loading|=4,Ll(_,n,s)}_={type:"stylesheet",instance:_,count:1,state:A},u.set(f,_)}}}function NS(t,n){Hi.X(t,n);var a=Yr;if(a&&t){var s=Qt(a).hoistableScripts,u=Zr(t),f=s.get(u);f||(f=a.querySelector(ho(u)),f||(t=S({src:t,async:!0},n),(n=ni.get(u))&&Cf(t,n),f=a.createElement("script"),Gt(f),dn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(u,f))}}function OS(t,n){Hi.M(t,n);var a=Yr;if(a&&t){var s=Qt(a).hoistableScripts,u=Zr(t),f=s.get(u);f||(f=a.querySelector(ho(u)),f||(t=S({src:t,async:!0,type:"module"},n),(n=ni.get(u))&&Cf(t,n),f=a.createElement("script"),Gt(f),dn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},s.set(u,f))}}function ag(t,n,a,s){var u=(u=Et.current)?Ul(u):null;if(!u)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=jr(a.href),a=Qt(u).hoistableStyles,s=a.get(n),s||(s={type:"style",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=jr(a.href);var f=Qt(u).hoistableStyles,_=f.get(t);if(_||(u=u.ownerDocument||u,_={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(t,_),(f=u.querySelector(fo(t)))&&!f._p&&(_.instance=f,_.state.loading=5),ni.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},ni.set(t,a),f||PS(u,t,a,_.state))),n&&s===null)throw Error(r(528,""));return _}if(n&&s!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=Zr(a),a=Qt(u).hoistableScripts,s=a.get(n),s||(s={type:"script",instance:null,count:0,state:null},a.set(n,s)),s):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function jr(t){return'href="'+En(t)+'"'}function fo(t){return'link[rel="stylesheet"]['+t+"]"}function rg(t){return S({},t,{"data-precedence":t.precedence,precedence:null})}function PS(t,n,a,s){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?s.loading=1:(n=t.createElement("link"),s.preload=n,n.addEventListener("load",function(){return s.loading|=1}),n.addEventListener("error",function(){return s.loading|=2}),dn(n,"link",a),Gt(n),t.head.appendChild(n))}function Zr(t){return'[src="'+En(t)+'"]'}function ho(t){return"script[async]"+t}function sg(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var s=t.querySelector('style[data-href~="'+En(a.href)+'"]');if(s)return n.instance=s,Gt(s),s;var u=S({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return s=(t.ownerDocument||t).createElement("style"),Gt(s),dn(s,"style",u),Ll(s,a.precedence,t),n.instance=s;case"stylesheet":u=jr(a.href);var f=t.querySelector(fo(u));if(f)return n.state.loading|=4,n.instance=f,Gt(f),f;s=rg(a),(u=ni.get(u))&&Rf(s,u),f=(t.ownerDocument||t).createElement("link"),Gt(f);var _=f;return _._p=new Promise(function(A,B){_.onload=A,_.onerror=B}),dn(f,"link",s),n.state.loading|=4,Ll(f,a.precedence,t),n.instance=f;case"script":return f=Zr(a.src),(u=t.querySelector(ho(f)))?(n.instance=u,Gt(u),u):(s=a,(u=ni.get(f))&&(s=S({},a),Cf(s,u)),t=t.ownerDocument||t,u=t.createElement("script"),Gt(u),dn(u,"link",s),t.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(s=n.instance,n.state.loading|=4,Ll(s,a.precedence,t));return n.instance}function Ll(t,n,a){for(var s=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=s.length?s[s.length-1]:null,f=u,_=0;_<s.length;_++){var A=s[_];if(A.dataset.precedence===n)f=A;else if(f!==u)break}f?f.parentNode.insertBefore(t,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function Rf(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function Cf(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var Nl=null;function og(t,n,a){if(Nl===null){var s=new Map,u=Nl=new Map;u.set(a,s)}else u=Nl,s=u.get(a),s||(s=new Map,u.set(a,s));if(s.has(t))return s;for(s.set(t,null),a=a.getElementsByTagName(t),u=0;u<a.length;u++){var f=a[u];if(!(f[Ct]||f[$e]||t==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var _=f.getAttribute(n)||"";_=t+_;var A=s.get(_);A?A.push(f):s.set(_,[f])}}return s}function lg(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function zS(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function ug(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function BS(t,n,a,s){if(a.type==="stylesheet"&&(typeof s.media!="string"||matchMedia(s.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=jr(s.href),f=n.querySelector(fo(u));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=Ol.bind(t),n.then(t,t)),a.state.loading|=4,a.instance=f,Gt(f);return}f=n.ownerDocument||n,s=rg(s),(u=ni.get(u))&&Rf(s,u),f=f.createElement("link"),Gt(f);var _=f;_._p=new Promise(function(A,B){_.onload=A,_.onerror=B}),dn(f,"link",s),a.instance=f}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=Ol.bind(t),n.addEventListener("load",a),n.addEventListener("error",a))}}var wf=0;function IS(t,n){return t.stylesheets&&t.count===0&&zl(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var s=setTimeout(function(){if(t.stylesheets&&zl(t,t.stylesheets),t.unsuspend){var f=t.unsuspend;t.unsuspend=null,f()}},6e4+n);0<t.imgBytes&&wf===0&&(wf=62500*vS());var u=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&zl(t,t.stylesheets),t.unsuspend)){var f=t.unsuspend;t.unsuspend=null,f()}},(t.imgBytes>wf?50:800)+n);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(s),clearTimeout(u)}}:null}function Ol(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)zl(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Pl=null;function zl(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Pl=new Map,n.forEach(FS,t),Pl=null,Ol.call(t))}function FS(t,n){if(!(n.state.loading&4)){var a=Pl.get(t);if(a)var s=a.get(null);else{a=new Map,Pl.set(t,a);for(var u=t.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<u.length;f++){var _=u[f];(_.nodeName==="LINK"||_.getAttribute("media")!=="not all")&&(a.set(_.dataset.precedence,_),s=_)}s&&a.set(null,s)}u=n.instance,_=u.getAttribute("data-precedence"),f=a.get(_)||s,f===s&&a.set(null,u),a.set(_,u),this.count++,s=Ol.bind(this),u.addEventListener("load",s),u.addEventListener("error",s),f?f.parentNode.insertBefore(u,f.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(u,t.firstChild)),n.state.loading|=4}}var po={$$typeof:D,Provider:null,Consumer:null,_currentValue:W,_currentValue2:W,_threadCount:0};function HS(t,n,a,s,u,f,_,A,B){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Dn(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Dn(0),this.hiddenUpdates=Dn(null),this.identifierPrefix=s,this.onUncaughtError=u,this.onCaughtError=f,this.onRecoverableError=_,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=B,this.incompleteTransitions=new Map}function cg(t,n,a,s,u,f,_,A,B,J,ft,_t){return t=new HS(t,n,a,_,B,J,ft,_t,A),n=1,f===!0&&(n|=24),f=Hn(3,null,null,n),t.current=f,f.stateNode=t,n=oc(),n.refCount++,t.pooledCache=n,n.refCount++,f.memoizedState={element:s,isDehydrated:a,cache:n},fc(f),t}function fg(t){return t?(t=br,t):br}function hg(t,n,a,s,u,f){u=fg(u),s.context===null?s.context=u:s.pendingContext=u,s=la(n),s.payload={element:a},f=f===void 0?null:f,f!==null&&(s.callback=f),a=ua(t,s,n),a!==null&&(zn(a,t,n),Ws(a,t,n))}function dg(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function Df(t,n){dg(t,n),(t=t.alternate)&&dg(t,n)}function pg(t){if(t.tag===13||t.tag===31){var n=ka(t,67108864);n!==null&&zn(n,t,67108864),Df(t,67108864)}}function mg(t){if(t.tag===13||t.tag===31){var n=Wn();n=_r(n);var a=ka(t,n);a!==null&&zn(a,t,n),Df(t,n)}}var Bl=!0;function GS(t,n,a,s){var u=F.T;F.T=null;var f=K.p;try{K.p=2,Uf(t,n,a,s)}finally{K.p=f,F.T=u}}function VS(t,n,a,s){var u=F.T;F.T=null;var f=K.p;try{K.p=8,Uf(t,n,a,s)}finally{K.p=f,F.T=u}}function Uf(t,n,a,s){if(Bl){var u=Lf(s);if(u===null)_f(t,n,s,Il,a),_g(t,s);else if(kS(u,t,n,a,s))s.stopPropagation();else if(_g(t,s),n&4&&-1<XS.indexOf(t)){for(;u!==null;){var f=kt(u);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var _=oe(f.pendingLanes);if(_!==0){var A=f;for(A.pendingLanes|=2,A.entangledLanes|=2;_;){var B=1<<31-fe(_);A.entanglements[1]|=B,_&=~B}vi(f),(Te&6)===0&&(xl=gt()+500,oo(0))}}break;case 31:case 13:A=ka(f,2),A!==null&&zn(A,f,2),Ml(),Df(f,2)}if(f=Lf(s),f===null&&_f(t,n,s,Il,a),f===u)break;u=f}u!==null&&s.stopPropagation()}else _f(t,n,s,null,a)}}function Lf(t){return t=Nu(t),Nf(t)}var Il=null;function Nf(t){if(Il=null,t=Pt(t),t!==null){var n=c(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=d(n),t!==null)return t;t=null}else if(a===31){if(t=h(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return Il=t,null}function gg(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Ot()){case At:return 2;case Tt:return 8;case Zt:case bt:return 32;case Ht:return 268435456;default:return 32}default:return 32}}var Of=!1,xa=null,ya=null,Ma=null,mo=new Map,go=new Map,Ea=[],XS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function _g(t,n){switch(t){case"focusin":case"focusout":xa=null;break;case"dragenter":case"dragleave":ya=null;break;case"mouseover":case"mouseout":Ma=null;break;case"pointerover":case"pointerout":mo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":go.delete(n.pointerId)}}function _o(t,n,a,s,u,f){return t===null||t.nativeEvent!==f?(t={blockedOn:n,domEventName:a,eventSystemFlags:s,nativeEvent:f,targetContainers:[u]},n!==null&&(n=kt(n),n!==null&&pg(n)),t):(t.eventSystemFlags|=s,n=t.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),t)}function kS(t,n,a,s,u){switch(n){case"focusin":return xa=_o(xa,t,n,a,s,u),!0;case"dragenter":return ya=_o(ya,t,n,a,s,u),!0;case"mouseover":return Ma=_o(Ma,t,n,a,s,u),!0;case"pointerover":var f=u.pointerId;return mo.set(f,_o(mo.get(f)||null,t,n,a,s,u)),!0;case"gotpointercapture":return f=u.pointerId,go.set(f,_o(go.get(f)||null,t,n,a,s,u)),!0}return!1}function vg(t){var n=Pt(t.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=d(a),n!==null){t.blockedOn=n,ws(t.priority,function(){mg(a)});return}}else if(n===31){if(n=h(a),n!==null){t.blockedOn=n,ws(t.priority,function(){mg(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Fl(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=Lf(t.nativeEvent);if(a===null){a=t.nativeEvent;var s=new a.constructor(a.type,a);Lu=s,a.target.dispatchEvent(s),Lu=null}else return n=kt(a),n!==null&&pg(n),t.blockedOn=a,!1;n.shift()}return!0}function Sg(t,n,a){Fl(t)&&a.delete(n)}function WS(){Of=!1,xa!==null&&Fl(xa)&&(xa=null),ya!==null&&Fl(ya)&&(ya=null),Ma!==null&&Fl(Ma)&&(Ma=null),mo.forEach(Sg),go.forEach(Sg)}function Hl(t,n){t.blockedOn===n&&(t.blockedOn=null,Of||(Of=!0,o.unstable_scheduleCallback(o.unstable_NormalPriority,WS)))}var Gl=null;function xg(t){Gl!==t&&(Gl=t,o.unstable_scheduleCallback(o.unstable_NormalPriority,function(){Gl===t&&(Gl=null);for(var n=0;n<t.length;n+=3){var a=t[n],s=t[n+1],u=t[n+2];if(typeof s!="function"){if(Nf(s||a)===null)continue;break}var f=kt(a);f!==null&&(t.splice(n,3),n-=3,Uc(f,{pending:!0,data:u,method:a.method,action:s},s,u))}}))}function Kr(t){function n(B){return Hl(B,t)}xa!==null&&Hl(xa,t),ya!==null&&Hl(ya,t),Ma!==null&&Hl(Ma,t),mo.forEach(n),go.forEach(n);for(var a=0;a<Ea.length;a++){var s=Ea[a];s.blockedOn===t&&(s.blockedOn=null)}for(;0<Ea.length&&(a=Ea[0],a.blockedOn===null);)vg(a),a.blockedOn===null&&Ea.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(s=0;s<a.length;s+=3){var u=a[s],f=a[s+1],_=u[pn]||null;if(typeof f=="function")_||xg(a);else if(_){var A=null;if(f&&f.hasAttribute("formAction")){if(u=f,_=f[pn]||null)A=_.formAction;else if(Nf(u)!==null)continue}else A=_.action;typeof A=="function"?a[s+1]=A:(a.splice(s,3),s-=3),xg(a)}}}function yg(){function t(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(_){return u=_})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),s||setTimeout(a,20)}function a(){if(!s&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var s=!1,u=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){s=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function Pf(t){this._internalRoot=t}Vl.prototype.render=Pf.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,s=Wn();hg(a,s,t,n,null,null)},Vl.prototype.unmount=Pf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;hg(t.current,2,null,t,null,null),Ml(),n[w]=null}};function Vl(t){this._internalRoot=t}Vl.prototype.unstable_scheduleHydration=function(t){if(t){var n=Cs();t={blockedOn:null,target:t,priority:n};for(var a=0;a<Ea.length&&n!==0&&n<Ea[a].priority;a++);Ea.splice(a,0,t),a===0&&vg(t)}};var Mg=e.version;if(Mg!=="19.2.0")throw Error(r(527,Mg,"19.2.0"));K.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=p(n),t=t!==null?g(t):null,t=t===null?null:t.stateNode,t};var qS={bundleType:0,version:"19.2.0",rendererPackageName:"react-dom",currentDispatcherRef:F,reconcilerVersion:"19.2.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Xl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Xl.isDisabled&&Xl.supportsFiber)try{Dt=Xl.inject(qS),Nt=Xl}catch{}}return So.createRoot=function(t,n){if(!l(t))throw Error(r(299));var a=!1,s="",u=wp,f=Dp,_=Up;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(_=n.onRecoverableError)),n=cg(t,1,!1,null,null,a,s,null,u,f,_,yg),t[w]=n.current,gf(t),new Pf(n)},So.hydrateRoot=function(t,n,a){if(!l(t))throw Error(r(299));var s=!1,u="",f=wp,_=Dp,A=Up,B=null;return a!=null&&(a.unstable_strictMode===!0&&(s=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(_=a.onCaughtError),a.onRecoverableError!==void 0&&(A=a.onRecoverableError),a.formState!==void 0&&(B=a.formState)),n=cg(t,1,!0,n,a??null,s,u,B,f,_,A,yg),n.context=fg(null),a=n.current,s=Wn(),s=_r(s),u=la(s),u.callback=null,ua(a,u,s),a=s,n.current.lanes=a,ke(n,a),vi(n),t[w]=n.current,gf(t),new Vl(n)},So.version="19.2.0",So}var Lg;function ix(){if(Lg)return If.exports;Lg=1;function o(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(o)}catch(e){console.error(e)}}return o(),If.exports=nx(),If.exports}var ax=ix();const rx=ov(ax);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Oh="164",sx=0,Ng=1,ox=2,lv=1,lx=2,qi=3,Oa=0,Cn=1,ji=2,La=0,gs=1,Og=2,Pg=3,zg=4,ux=5,cr=100,cx=101,fx=102,hx=103,dx=104,px=200,mx=201,gx=202,_x=203,Th=204,Ah=205,vx=206,Sx=207,xx=208,yx=209,Mx=210,Ex=211,Tx=212,Ax=213,bx=214,Rx=0,Cx=1,wx=2,_u=3,Dx=4,Ux=5,Lx=6,Nx=7,uv=0,Ox=1,Px=2,Na=0,zx=1,Bx=2,Ix=3,Fx=4,Hx=5,Gx=6,Vx=7,cv=300,Ss=301,xs=302,bh=303,Rh=304,Eu=306,Ch=1e3,hr=1001,wh=1002,In=1003,Xx=1004,kl=1005,fi=1006,Vf=1007,dr=1008,Pa=1009,kx=1010,Wx=1011,fv=1012,hv=1013,ys=1014,Zi=1015,Tu=1016,dv=1017,pv=1018,Do=1020,qx=35902,Yx=1021,jx=1022,Mi=1023,Zx=1024,Kx=1025,_s=1026,wo=1027,mv=1028,gv=1029,Qx=1030,_v=1031,vv=1033,Xf=33776,kf=33777,Wf=33778,qf=33779,Bg=35840,Ig=35841,Fg=35842,Hg=35843,Gg=36196,Vg=37492,Xg=37496,kg=37808,Wg=37809,qg=37810,Yg=37811,jg=37812,Zg=37813,Kg=37814,Qg=37815,Jg=37816,$g=37817,t_=37818,e_=37819,n_=37820,i_=37821,Yf=36492,a_=36494,r_=36495,Jx=36283,s_=36284,o_=36285,l_=36286,$x=3200,ty=3201,Sv=0,ey=1,Ua="",Si="srgb",za="srgb-linear",Ph="display-p3",Au="display-p3-linear",vu="linear",Fe="srgb",Su="rec709",xu="p3",Qr=7680,u_=519,ny=512,iy=513,ay=514,xv=515,ry=516,sy=517,oy=518,ly=519,c_=35044,jf=35048,f_="300 es",Ki=2e3,yu=2001;class Es{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(i)===-1&&r[e].push(i)}hasEventListener(e,i){if(this._listeners===void 0)return!1;const r=this._listeners;return r[e]!==void 0&&r[e].indexOf(i)!==-1}removeEventListener(e,i){if(this._listeners===void 0)return;const l=this._listeners[e];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const r=this._listeners[e.type];if(r!==void 0){e.target=this;const l=r.slice(0);for(let c=0,d=l.length;c<d;c++)l[c].call(this,e);e.target=null}}}const vn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Zf=Math.PI/180,Dh=180/Math.PI;function Uo(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(vn[o&255]+vn[o>>8&255]+vn[o>>16&255]+vn[o>>24&255]+"-"+vn[e&255]+vn[e>>8&255]+"-"+vn[e>>16&15|64]+vn[e>>24&255]+"-"+vn[i&63|128]+vn[i>>8&255]+"-"+vn[i>>16&255]+vn[i>>24&255]+vn[r&255]+vn[r>>8&255]+vn[r>>16&255]+vn[r>>24&255]).toLowerCase()}function bn(o,e,i){return Math.max(e,Math.min(i,o))}function uy(o,e){return(o%e+e)%e}function Kf(o,e,i){return(1-i)*o+i*e}function xo(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return o/4294967295;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int32Array:return Math.max(o/2147483647,-1);case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function Bn(o,e){switch(e.constructor){case Float32Array:return o;case Uint32Array:return Math.round(o*4294967295);case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int32Array:return Math.round(o*2147483647);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}class se{constructor(e=0,i=0){se.prototype.isVector2=!0,this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,r=this.y,l=e.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=Math.max(e.x,Math.min(i.x,this.x)),this.y=Math.max(e.y,Math.min(i.y,this.y)),this}clampScalar(e,i){return this.x=Math.max(e,Math.min(i,this.x)),this.y=Math.max(e,Math.min(i,this.y)),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(i,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(bn(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y;return i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const r=Math.cos(i),l=Math.sin(i),c=this.x-e.x,d=this.y-e.y;return this.x=c*r-d*l+e.x,this.y=c*l+d*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ue{constructor(e,i,r,l,c,d,h,m,p){ue.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,r,l,c,d,h,m,p)}set(e,i,r,l,c,d,h,m,p){const g=this.elements;return g[0]=e,g[1]=l,g[2]=h,g[3]=i,g[4]=c,g[5]=m,g[6]=r,g[7]=d,g[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(e,i,r){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,c=this.elements,d=r[0],h=r[3],m=r[6],p=r[1],g=r[4],S=r[7],x=r[2],M=r[5],R=r[8],C=l[0],y=l[3],v=l[6],L=l[1],D=l[4],P=l[7],tt=l[2],I=l[5],N=l[8];return c[0]=d*C+h*L+m*tt,c[3]=d*y+h*D+m*I,c[6]=d*v+h*P+m*N,c[1]=p*C+g*L+S*tt,c[4]=p*y+g*D+S*I,c[7]=p*v+g*P+S*N,c[2]=x*C+M*L+R*tt,c[5]=x*y+M*D+R*I,c[8]=x*v+M*P+R*N,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[1],l=e[2],c=e[3],d=e[4],h=e[5],m=e[6],p=e[7],g=e[8];return i*d*g-i*h*p-r*c*g+r*h*m+l*c*p-l*d*m}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],c=e[3],d=e[4],h=e[5],m=e[6],p=e[7],g=e[8],S=g*d-h*p,x=h*m-g*c,M=p*c-d*m,R=i*S+r*x+l*M;if(R===0)return this.set(0,0,0,0,0,0,0,0,0);const C=1/R;return e[0]=S*C,e[1]=(l*p-g*r)*C,e[2]=(h*r-l*d)*C,e[3]=x*C,e[4]=(g*i-l*m)*C,e[5]=(l*c-h*i)*C,e[6]=M*C,e[7]=(r*m-p*i)*C,e[8]=(d*i-r*c)*C,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,r,l,c,d,h){const m=Math.cos(c),p=Math.sin(c);return this.set(r*m,r*p,-r*(m*d+p*h)+d+e,-l*p,l*m,-l*(-p*d+m*h)+h+i,0,0,1),this}scale(e,i){return this.premultiply(Qf.makeScale(e,i)),this}rotate(e){return this.premultiply(Qf.makeRotation(-e)),this}translate(e,i){return this.premultiply(Qf.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<9;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Qf=new ue;function yv(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function Mu(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function cy(){const o=Mu("canvas");return o.style.display="block",o}const h_={};function fy(o){o in h_||(h_[o]=!0,console.warn(o))}const d_=new ue().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),p_=new ue().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Wl={[za]:{transfer:vu,primaries:Su,toReference:o=>o,fromReference:o=>o},[Si]:{transfer:Fe,primaries:Su,toReference:o=>o.convertSRGBToLinear(),fromReference:o=>o.convertLinearToSRGB()},[Au]:{transfer:vu,primaries:xu,toReference:o=>o.applyMatrix3(p_),fromReference:o=>o.applyMatrix3(d_)},[Ph]:{transfer:Fe,primaries:xu,toReference:o=>o.convertSRGBToLinear().applyMatrix3(p_),fromReference:o=>o.applyMatrix3(d_).convertLinearToSRGB()}},hy=new Set([za,Au]),Ne={enabled:!0,_workingColorSpace:za,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(o){if(!hy.has(o))throw new Error(`Unsupported working color space, "${o}".`);this._workingColorSpace=o},convert:function(o,e,i){if(this.enabled===!1||e===i||!e||!i)return o;const r=Wl[e].toReference,l=Wl[i].fromReference;return l(r(o))},fromWorkingColorSpace:function(o,e){return this.convert(o,this._workingColorSpace,e)},toWorkingColorSpace:function(o,e){return this.convert(o,e,this._workingColorSpace)},getPrimaries:function(o){return Wl[o].primaries},getTransfer:function(o){return o===Ua?vu:Wl[o].transfer}};function vs(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function Jf(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}let Jr;class dy{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Jr===void 0&&(Jr=Mu("canvas")),Jr.width=e.width,Jr.height=e.height;const r=Jr.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Jr}return i.width>2048||i.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),i.toDataURL("image/jpeg",.6)):i.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=Mu("canvas");i.width=e.width,i.height=e.height;const r=i.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const l=r.getImageData(0,0,e.width,e.height),c=l.data;for(let d=0;d<c.length;d++)c[d]=vs(c[d]/255)*255;return r.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(vs(i[r]/255)*255):i[r]=vs(i[r]);return{data:i,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let py=0;class Mv{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:py++}),this.uuid=Uo(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let d=0,h=l.length;d<h;d++)l[d].isDataTexture?c.push($f(l[d].image)):c.push($f(l[d]))}else c=$f(l);r.url=c}return i||(e.images[this.uuid]=r),r}}function $f(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?dy.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let my=0;class wn extends Es{constructor(e=wn.DEFAULT_IMAGE,i=wn.DEFAULT_MAPPING,r=hr,l=hr,c=fi,d=dr,h=Mi,m=Pa,p=wn.DEFAULT_ANISOTROPY,g=Ua){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:my++}),this.uuid=Uo(),this.name="",this.source=new Mv(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=c,this.minFilter=d,this.anisotropy=p,this.format=h,this.internalFormat=null,this.type=m,this.offset=new se(0,0),this.repeat=new se(1,1),this.center=new se(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ue,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==cv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ch:e.x=e.x-Math.floor(e.x);break;case hr:e.x=e.x<0?0:1;break;case wh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ch:e.y=e.y-Math.floor(e.y);break;case hr:e.y=e.y<0?0:1;break;case wh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}wn.DEFAULT_IMAGE=null;wn.DEFAULT_MAPPING=cv;wn.DEFAULT_ANISOTROPY=1;class un{constructor(e=0,i=0,r=0,l=1){un.prototype.isVector4=!0,this.x=e,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,r,l){return this.x=e,this.y=i,this.z=r,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,c=this.w,d=e.elements;return this.x=d[0]*i+d[4]*r+d[8]*l+d[12]*c,this.y=d[1]*i+d[5]*r+d[9]*l+d[13]*c,this.z=d[2]*i+d[6]*r+d[10]*l+d[14]*c,this.w=d[3]*i+d[7]*r+d[11]*l+d[15]*c,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,r,l,c;const m=e.elements,p=m[0],g=m[4],S=m[8],x=m[1],M=m[5],R=m[9],C=m[2],y=m[6],v=m[10];if(Math.abs(g-x)<.01&&Math.abs(S-C)<.01&&Math.abs(R-y)<.01){if(Math.abs(g+x)<.1&&Math.abs(S+C)<.1&&Math.abs(R+y)<.1&&Math.abs(p+M+v-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const D=(p+1)/2,P=(M+1)/2,tt=(v+1)/2,I=(g+x)/4,N=(S+C)/4,O=(R+y)/4;return D>P&&D>tt?D<.01?(r=0,l=.707106781,c=.707106781):(r=Math.sqrt(D),l=I/r,c=N/r):P>tt?P<.01?(r=.707106781,l=0,c=.707106781):(l=Math.sqrt(P),r=I/l,c=O/l):tt<.01?(r=.707106781,l=.707106781,c=0):(c=Math.sqrt(tt),r=N/c,l=O/c),this.set(r,l,c,i),this}let L=Math.sqrt((y-R)*(y-R)+(S-C)*(S-C)+(x-g)*(x-g));return Math.abs(L)<.001&&(L=1),this.x=(y-R)/L,this.y=(S-C)/L,this.z=(x-g)/L,this.w=Math.acos((p+M+v-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=Math.max(e.x,Math.min(i.x,this.x)),this.y=Math.max(e.y,Math.min(i.y,this.y)),this.z=Math.max(e.z,Math.min(i.z,this.z)),this.w=Math.max(e.w,Math.min(i.w,this.w)),this}clampScalar(e,i){return this.x=Math.max(e,Math.min(i,this.x)),this.y=Math.max(e,Math.min(i,this.y)),this.z=Math.max(e,Math.min(i,this.z)),this.w=Math.max(e,Math.min(i,this.w)),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(i,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this.w=e.w+(i.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class gy extends Es{constructor(e=1,i=1,r={}){super(),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=1,this.scissor=new un(0,0,e,i),this.scissorTest=!1,this.viewport=new un(0,0,e,i);const l={width:e,height:i,depth:1};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:fi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},r);const c=new wn(l,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);c.flipY=!1,c.generateMipmaps=r.generateMipmaps,c.internalFormat=r.internalFormat,this.textures=[];const d=r.count;for(let h=0;h<d;h++)this.textures[h]=c.clone(),this.textures[h].isRenderTargetTexture=!0;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this.depthTexture=r.depthTexture,this.samples=r.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,i,r=1){if(this.width!==e||this.height!==i||this.depth!==r){this.width=e,this.height=i,this.depth=r;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=r;this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let r=0,l=e.textures.length;r<l;r++)this.textures[r]=e.textures[r].clone(),this.textures[r].isRenderTargetTexture=!0;const i=Object.assign({},e.texture.image);return this.texture.source=new Mv(i),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class pr extends gy{constructor(e=1,i=1,r={}){super(e,i,r),this.isWebGLRenderTarget=!0}}class Ev extends wn{constructor(e=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=In,this.minFilter=In,this.wrapR=hr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class _y extends wn{constructor(e=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=In,this.minFilter=In,this.wrapR=hr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class mr{constructor(e=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=r,this._w=l}static slerpFlat(e,i,r,l,c,d,h){let m=r[l+0],p=r[l+1],g=r[l+2],S=r[l+3];const x=c[d+0],M=c[d+1],R=c[d+2],C=c[d+3];if(h===0){e[i+0]=m,e[i+1]=p,e[i+2]=g,e[i+3]=S;return}if(h===1){e[i+0]=x,e[i+1]=M,e[i+2]=R,e[i+3]=C;return}if(S!==C||m!==x||p!==M||g!==R){let y=1-h;const v=m*x+p*M+g*R+S*C,L=v>=0?1:-1,D=1-v*v;if(D>Number.EPSILON){const tt=Math.sqrt(D),I=Math.atan2(tt,v*L);y=Math.sin(y*I)/tt,h=Math.sin(h*I)/tt}const P=h*L;if(m=m*y+x*P,p=p*y+M*P,g=g*y+R*P,S=S*y+C*P,y===1-h){const tt=1/Math.sqrt(m*m+p*p+g*g+S*S);m*=tt,p*=tt,g*=tt,S*=tt}}e[i]=m,e[i+1]=p,e[i+2]=g,e[i+3]=S}static multiplyQuaternionsFlat(e,i,r,l,c,d){const h=r[l],m=r[l+1],p=r[l+2],g=r[l+3],S=c[d],x=c[d+1],M=c[d+2],R=c[d+3];return e[i]=h*R+g*S+m*M-p*x,e[i+1]=m*R+g*x+p*S-h*M,e[i+2]=p*R+g*M+h*x-m*S,e[i+3]=g*R-h*S-m*x-p*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,r,l){return this._x=e,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const r=e._x,l=e._y,c=e._z,d=e._order,h=Math.cos,m=Math.sin,p=h(r/2),g=h(l/2),S=h(c/2),x=m(r/2),M=m(l/2),R=m(c/2);switch(d){case"XYZ":this._x=x*g*S+p*M*R,this._y=p*M*S-x*g*R,this._z=p*g*R+x*M*S,this._w=p*g*S-x*M*R;break;case"YXZ":this._x=x*g*S+p*M*R,this._y=p*M*S-x*g*R,this._z=p*g*R-x*M*S,this._w=p*g*S+x*M*R;break;case"ZXY":this._x=x*g*S-p*M*R,this._y=p*M*S+x*g*R,this._z=p*g*R+x*M*S,this._w=p*g*S-x*M*R;break;case"ZYX":this._x=x*g*S-p*M*R,this._y=p*M*S+x*g*R,this._z=p*g*R-x*M*S,this._w=p*g*S+x*M*R;break;case"YZX":this._x=x*g*S+p*M*R,this._y=p*M*S+x*g*R,this._z=p*g*R-x*M*S,this._w=p*g*S-x*M*R;break;case"XZY":this._x=x*g*S-p*M*R,this._y=p*M*S-x*g*R,this._z=p*g*R+x*M*S,this._w=p*g*S+x*M*R;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+d)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const r=i/2,l=Math.sin(r);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,r=i[0],l=i[4],c=i[8],d=i[1],h=i[5],m=i[9],p=i[2],g=i[6],S=i[10],x=r+h+S;if(x>0){const M=.5/Math.sqrt(x+1);this._w=.25/M,this._x=(g-m)*M,this._y=(c-p)*M,this._z=(d-l)*M}else if(r>h&&r>S){const M=2*Math.sqrt(1+r-h-S);this._w=(g-m)/M,this._x=.25*M,this._y=(l+d)/M,this._z=(c+p)/M}else if(h>S){const M=2*Math.sqrt(1+h-r-S);this._w=(c-p)/M,this._x=(l+d)/M,this._y=.25*M,this._z=(m+g)/M}else{const M=2*Math.sqrt(1+S-r-h);this._w=(d-l)/M,this._x=(c+p)/M,this._y=(m+g)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let r=e.dot(i)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(bn(this.dot(e),-1,1)))}rotateTowards(e,i){const r=this.angleTo(e);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const r=e._x,l=e._y,c=e._z,d=e._w,h=i._x,m=i._y,p=i._z,g=i._w;return this._x=r*g+d*h+l*p-c*m,this._y=l*g+d*m+c*h-r*p,this._z=c*g+d*p+r*m-l*h,this._w=d*g-r*h-l*m-c*p,this._onChangeCallback(),this}slerp(e,i){if(i===0)return this;if(i===1)return this.copy(e);const r=this._x,l=this._y,c=this._z,d=this._w;let h=d*e._w+r*e._x+l*e._y+c*e._z;if(h<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,h=-h):this.copy(e),h>=1)return this._w=d,this._x=r,this._y=l,this._z=c,this;const m=1-h*h;if(m<=Number.EPSILON){const M=1-i;return this._w=M*d+i*this._w,this._x=M*r+i*this._x,this._y=M*l+i*this._y,this._z=M*c+i*this._z,this.normalize(),this}const p=Math.sqrt(m),g=Math.atan2(p,h),S=Math.sin((1-i)*g)/p,x=Math.sin(i*g)/p;return this._w=d*S+this._w*x,this._x=r*S+this._x*x,this._y=l*S+this._y*x,this._z=c*S+this._z*x,this._onChangeCallback(),this}slerpQuaternions(e,i,r){return this.copy(e).slerp(i,r)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),c=Math.sqrt(r);return this.set(l*Math.sin(e),l*Math.cos(e),c*Math.sin(i),c*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ${constructor(e=0,i=0,r=0){$.prototype.isVector3=!0,this.x=e,this.y=i,this.z=r}set(e,i,r){return r===void 0&&(r=this.z),this.x=e,this.y=i,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(m_.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(m_.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,r=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[3]*r+c[6]*l,this.y=c[1]*i+c[4]*r+c[7]*l,this.z=c[2]*i+c[5]*r+c[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,c=e.elements,d=1/(c[3]*i+c[7]*r+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*r+c[8]*l+c[12])*d,this.y=(c[1]*i+c[5]*r+c[9]*l+c[13])*d,this.z=(c[2]*i+c[6]*r+c[10]*l+c[14])*d,this}applyQuaternion(e){const i=this.x,r=this.y,l=this.z,c=e.x,d=e.y,h=e.z,m=e.w,p=2*(d*l-h*r),g=2*(h*i-c*l),S=2*(c*r-d*i);return this.x=i+m*p+d*S-h*g,this.y=r+m*g+h*p-c*S,this.z=l+m*S+c*g-d*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,r=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[4]*r+c[8]*l,this.y=c[1]*i+c[5]*r+c[9]*l,this.z=c[2]*i+c[6]*r+c[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=Math.max(e.x,Math.min(i.x,this.x)),this.y=Math.max(e.y,Math.min(i.y,this.y)),this.z=Math.max(e.z,Math.min(i.z,this.z)),this}clampScalar(e,i){return this.x=Math.max(e,Math.min(i,this.x)),this.y=Math.max(e,Math.min(i,this.y)),this.z=Math.max(e,Math.min(i,this.z)),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Math.max(e,Math.min(i,r)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const r=e.x,l=e.y,c=e.z,d=i.x,h=i.y,m=i.z;return this.x=l*m-c*h,this.y=c*d-r*m,this.z=r*h-l*d,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const r=e.dot(this)/i;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return th.copy(this).projectOnVector(e),this.sub(th)}reflect(e){return this.sub(th.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(bn(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y,l=this.z-e.z;return i*i+r*r+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,r){const l=Math.sin(i)*e;return this.x=l*Math.sin(r),this.y=Math.cos(i)*e,this.z=l*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,r){return this.x=e*Math.sin(i),this.y=r,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(e),this.y=i,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const th=new $,m_=new mr;class gr{constructor(e=new $(1/0,1/0,1/0),i=new $(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i+=3)this.expandByPoint(li.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,r=e.count;i<r;i++)this.expandByPoint(li.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const r=li.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const c=r.getAttribute("position");if(i===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let d=0,h=c.count;d<h;d++)e.isMesh===!0?e.getVertexPosition(d,li):li.fromBufferAttribute(c,d),li.applyMatrix4(e.matrixWorld),this.expandByPoint(li);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ql.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),ql.copy(r.boundingBox)),ql.applyMatrix4(e.matrixWorld),this.union(ql)}const l=e.children;for(let c=0,d=l.length;c<d;c++)this.expandByObject(l[c],i);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,li),li.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,r;return e.normal.x>0?(i=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),i<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(yo),Yl.subVectors(this.max,yo),$r.subVectors(e.a,yo),ts.subVectors(e.b,yo),es.subVectors(e.c,yo),Aa.subVectors(ts,$r),ba.subVectors(es,ts),ir.subVectors($r,es);let i=[0,-Aa.z,Aa.y,0,-ba.z,ba.y,0,-ir.z,ir.y,Aa.z,0,-Aa.x,ba.z,0,-ba.x,ir.z,0,-ir.x,-Aa.y,Aa.x,0,-ba.y,ba.x,0,-ir.y,ir.x,0];return!eh(i,$r,ts,es,Yl)||(i=[1,0,0,0,1,0,0,0,1],!eh(i,$r,ts,es,Yl))?!1:(jl.crossVectors(Aa,ba),i=[jl.x,jl.y,jl.z],eh(i,$r,ts,es,Yl))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,li).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(li).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Gi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Gi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Gi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Gi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Gi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Gi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Gi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Gi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Gi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Gi=[new $,new $,new $,new $,new $,new $,new $,new $],li=new $,ql=new gr,$r=new $,ts=new $,es=new $,Aa=new $,ba=new $,ir=new $,yo=new $,Yl=new $,jl=new $,ar=new $;function eh(o,e,i,r,l){for(let c=0,d=o.length-3;c<=d;c+=3){ar.fromArray(o,c);const h=l.x*Math.abs(ar.x)+l.y*Math.abs(ar.y)+l.z*Math.abs(ar.z),m=e.dot(ar),p=i.dot(ar),g=r.dot(ar);if(Math.max(-Math.max(m,p,g),Math.min(m,p,g))>h)return!1}return!0}const vy=new gr,Mo=new $,nh=new $;class Lo{constructor(e=new $,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const r=this.center;i!==void 0?r.copy(i):vy.setFromPoints(e).getCenter(r);let l=0;for(let c=0,d=e.length;c<d;c++)l=Math.max(l,r.distanceToSquared(e[c]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const r=this.center.distanceToSquared(e);return i.copy(e),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Mo.subVectors(e,this.center);const i=Mo.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(Mo,l/r),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(nh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Mo.copy(e.center).add(nh)),this.expandByPoint(Mo.copy(e.center).sub(nh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Vi=new $,ih=new $,Zl=new $,Ra=new $,ah=new $,Kl=new $,rh=new $;class Tv{constructor(e=new $,i=new $(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Vi)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=Vi.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(Vi.copy(this.origin).addScaledVector(this.direction,i),Vi.distanceToSquared(e))}distanceSqToSegment(e,i,r,l){ih.copy(e).add(i).multiplyScalar(.5),Zl.copy(i).sub(e).normalize(),Ra.copy(this.origin).sub(ih);const c=e.distanceTo(i)*.5,d=-this.direction.dot(Zl),h=Ra.dot(this.direction),m=-Ra.dot(Zl),p=Ra.lengthSq(),g=Math.abs(1-d*d);let S,x,M,R;if(g>0)if(S=d*m-h,x=d*h-m,R=c*g,S>=0)if(x>=-R)if(x<=R){const C=1/g;S*=C,x*=C,M=S*(S+d*x+2*h)+x*(d*S+x+2*m)+p}else x=c,S=Math.max(0,-(d*x+h)),M=-S*S+x*(x+2*m)+p;else x=-c,S=Math.max(0,-(d*x+h)),M=-S*S+x*(x+2*m)+p;else x<=-R?(S=Math.max(0,-(-d*c+h)),x=S>0?-c:Math.min(Math.max(-c,-m),c),M=-S*S+x*(x+2*m)+p):x<=R?(S=0,x=Math.min(Math.max(-c,-m),c),M=x*(x+2*m)+p):(S=Math.max(0,-(d*c+h)),x=S>0?c:Math.min(Math.max(-c,-m),c),M=-S*S+x*(x+2*m)+p);else x=d>0?-c:c,S=Math.max(0,-(d*x+h)),M=-S*S+x*(x+2*m)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,S),l&&l.copy(ih).addScaledVector(Zl,x),M}intersectSphere(e,i){Vi.subVectors(e.center,this.origin);const r=Vi.dot(this.direction),l=Vi.dot(Vi)-r*r,c=e.radius*e.radius;if(l>c)return null;const d=Math.sqrt(c-l),h=r-d,m=r+d;return m<0?null:h<0?this.at(m,i):this.at(h,i)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/i;return r>=0?r:null}intersectPlane(e,i){const r=this.distanceToPlane(e);return r===null?null:this.at(r,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let r,l,c,d,h,m;const p=1/this.direction.x,g=1/this.direction.y,S=1/this.direction.z,x=this.origin;return p>=0?(r=(e.min.x-x.x)*p,l=(e.max.x-x.x)*p):(r=(e.max.x-x.x)*p,l=(e.min.x-x.x)*p),g>=0?(c=(e.min.y-x.y)*g,d=(e.max.y-x.y)*g):(c=(e.max.y-x.y)*g,d=(e.min.y-x.y)*g),r>d||c>l||((c>r||isNaN(r))&&(r=c),(d<l||isNaN(l))&&(l=d),S>=0?(h=(e.min.z-x.z)*S,m=(e.max.z-x.z)*S):(h=(e.max.z-x.z)*S,m=(e.min.z-x.z)*S),r>m||h>l)||((h>r||r!==r)&&(r=h),(m<l||l!==l)&&(l=m),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(e){return this.intersectBox(e,Vi)!==null}intersectTriangle(e,i,r,l,c){ah.subVectors(i,e),Kl.subVectors(r,e),rh.crossVectors(ah,Kl);let d=this.direction.dot(rh),h;if(d>0){if(l)return null;h=1}else if(d<0)h=-1,d=-d;else return null;Ra.subVectors(this.origin,e);const m=h*this.direction.dot(Kl.crossVectors(Ra,Kl));if(m<0)return null;const p=h*this.direction.dot(ah.cross(Ra));if(p<0||m+p>d)return null;const g=-h*Ra.dot(rh);return g<0?null:this.at(g/d,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Pe{constructor(e,i,r,l,c,d,h,m,p,g,S,x,M,R,C,y){Pe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,r,l,c,d,h,m,p,g,S,x,M,R,C,y)}set(e,i,r,l,c,d,h,m,p,g,S,x,M,R,C,y){const v=this.elements;return v[0]=e,v[4]=i,v[8]=r,v[12]=l,v[1]=c,v[5]=d,v[9]=h,v[13]=m,v[2]=p,v[6]=g,v[10]=S,v[14]=x,v[3]=M,v[7]=R,v[11]=C,v[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Pe().fromArray(this.elements)}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(e){const i=this.elements,r=e.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,r){return e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,i,r){return this.set(e.x,i.x,r.x,0,e.y,i.y,r.y,0,e.z,i.z,r.z,0,0,0,0,1),this}extractRotation(e){const i=this.elements,r=e.elements,l=1/ns.setFromMatrixColumn(e,0).length(),c=1/ns.setFromMatrixColumn(e,1).length(),d=1/ns.setFromMatrixColumn(e,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*c,i[5]=r[5]*c,i[6]=r[6]*c,i[7]=0,i[8]=r[8]*d,i[9]=r[9]*d,i[10]=r[10]*d,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,r=e.x,l=e.y,c=e.z,d=Math.cos(r),h=Math.sin(r),m=Math.cos(l),p=Math.sin(l),g=Math.cos(c),S=Math.sin(c);if(e.order==="XYZ"){const x=d*g,M=d*S,R=h*g,C=h*S;i[0]=m*g,i[4]=-m*S,i[8]=p,i[1]=M+R*p,i[5]=x-C*p,i[9]=-h*m,i[2]=C-x*p,i[6]=R+M*p,i[10]=d*m}else if(e.order==="YXZ"){const x=m*g,M=m*S,R=p*g,C=p*S;i[0]=x+C*h,i[4]=R*h-M,i[8]=d*p,i[1]=d*S,i[5]=d*g,i[9]=-h,i[2]=M*h-R,i[6]=C+x*h,i[10]=d*m}else if(e.order==="ZXY"){const x=m*g,M=m*S,R=p*g,C=p*S;i[0]=x-C*h,i[4]=-d*S,i[8]=R+M*h,i[1]=M+R*h,i[5]=d*g,i[9]=C-x*h,i[2]=-d*p,i[6]=h,i[10]=d*m}else if(e.order==="ZYX"){const x=d*g,M=d*S,R=h*g,C=h*S;i[0]=m*g,i[4]=R*p-M,i[8]=x*p+C,i[1]=m*S,i[5]=C*p+x,i[9]=M*p-R,i[2]=-p,i[6]=h*m,i[10]=d*m}else if(e.order==="YZX"){const x=d*m,M=d*p,R=h*m,C=h*p;i[0]=m*g,i[4]=C-x*S,i[8]=R*S+M,i[1]=S,i[5]=d*g,i[9]=-h*g,i[2]=-p*g,i[6]=M*S+R,i[10]=x-C*S}else if(e.order==="XZY"){const x=d*m,M=d*p,R=h*m,C=h*p;i[0]=m*g,i[4]=-S,i[8]=p*g,i[1]=x*S+C,i[5]=d*g,i[9]=M*S-R,i[2]=R*S-M,i[6]=h*g,i[10]=C*S+x}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Sy,e,xy)}lookAt(e,i,r){const l=this.elements;return qn.subVectors(e,i),qn.lengthSq()===0&&(qn.z=1),qn.normalize(),Ca.crossVectors(r,qn),Ca.lengthSq()===0&&(Math.abs(r.z)===1?qn.x+=1e-4:qn.z+=1e-4,qn.normalize(),Ca.crossVectors(r,qn)),Ca.normalize(),Ql.crossVectors(qn,Ca),l[0]=Ca.x,l[4]=Ql.x,l[8]=qn.x,l[1]=Ca.y,l[5]=Ql.y,l[9]=qn.y,l[2]=Ca.z,l[6]=Ql.z,l[10]=qn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,c=this.elements,d=r[0],h=r[4],m=r[8],p=r[12],g=r[1],S=r[5],x=r[9],M=r[13],R=r[2],C=r[6],y=r[10],v=r[14],L=r[3],D=r[7],P=r[11],tt=r[15],I=l[0],N=l[4],O=l[8],T=l[12],E=l[1],q=l[5],lt=l[9],G=l[13],dt=l[2],pt=l[6],F=l[10],K=l[14],W=l[3],vt=l[7],ut=l[11],U=l[15];return c[0]=d*I+h*E+m*dt+p*W,c[4]=d*N+h*q+m*pt+p*vt,c[8]=d*O+h*lt+m*F+p*ut,c[12]=d*T+h*G+m*K+p*U,c[1]=g*I+S*E+x*dt+M*W,c[5]=g*N+S*q+x*pt+M*vt,c[9]=g*O+S*lt+x*F+M*ut,c[13]=g*T+S*G+x*K+M*U,c[2]=R*I+C*E+y*dt+v*W,c[6]=R*N+C*q+y*pt+v*vt,c[10]=R*O+C*lt+y*F+v*ut,c[14]=R*T+C*G+y*K+v*U,c[3]=L*I+D*E+P*dt+tt*W,c[7]=L*N+D*q+P*pt+tt*vt,c[11]=L*O+D*lt+P*F+tt*ut,c[15]=L*T+D*G+P*K+tt*U,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[4],l=e[8],c=e[12],d=e[1],h=e[5],m=e[9],p=e[13],g=e[2],S=e[6],x=e[10],M=e[14],R=e[3],C=e[7],y=e[11],v=e[15];return R*(+c*m*S-l*p*S-c*h*x+r*p*x+l*h*M-r*m*M)+C*(+i*m*M-i*p*x+c*d*x-l*d*M+l*p*g-c*m*g)+y*(+i*p*S-i*h*M-c*d*S+r*d*M+c*h*g-r*p*g)+v*(-l*h*g-i*m*S+i*h*x+l*d*S-r*d*x+r*m*g)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,r){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=r),this}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],c=e[3],d=e[4],h=e[5],m=e[6],p=e[7],g=e[8],S=e[9],x=e[10],M=e[11],R=e[12],C=e[13],y=e[14],v=e[15],L=S*y*p-C*x*p+C*m*M-h*y*M-S*m*v+h*x*v,D=R*x*p-g*y*p-R*m*M+d*y*M+g*m*v-d*x*v,P=g*C*p-R*S*p+R*h*M-d*C*M-g*h*v+d*S*v,tt=R*S*m-g*C*m-R*h*x+d*C*x+g*h*y-d*S*y,I=i*L+r*D+l*P+c*tt;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const N=1/I;return e[0]=L*N,e[1]=(C*x*c-S*y*c-C*l*M+r*y*M+S*l*v-r*x*v)*N,e[2]=(h*y*c-C*m*c+C*l*p-r*y*p-h*l*v+r*m*v)*N,e[3]=(S*m*c-h*x*c-S*l*p+r*x*p+h*l*M-r*m*M)*N,e[4]=D*N,e[5]=(g*y*c-R*x*c+R*l*M-i*y*M-g*l*v+i*x*v)*N,e[6]=(R*m*c-d*y*c-R*l*p+i*y*p+d*l*v-i*m*v)*N,e[7]=(d*x*c-g*m*c+g*l*p-i*x*p-d*l*M+i*m*M)*N,e[8]=P*N,e[9]=(R*S*c-g*C*c-R*r*M+i*C*M+g*r*v-i*S*v)*N,e[10]=(d*C*c-R*h*c+R*r*p-i*C*p-d*r*v+i*h*v)*N,e[11]=(g*h*c-d*S*c-g*r*p+i*S*p+d*r*M-i*h*M)*N,e[12]=tt*N,e[13]=(g*C*l-R*S*l+R*r*x-i*C*x-g*r*y+i*S*y)*N,e[14]=(R*h*l-d*C*l-R*r*m+i*C*m+d*r*y-i*h*y)*N,e[15]=(d*S*l-g*h*l+g*r*m-i*S*m-d*r*x+i*h*x)*N,this}scale(e){const i=this.elements,r=e.x,l=e.y,c=e.z;return i[0]*=r,i[4]*=l,i[8]*=c,i[1]*=r,i[5]*=l,i[9]*=c,i[2]*=r,i[6]*=l,i[10]*=c,i[3]*=r,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(e,i,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const r=Math.cos(i),l=Math.sin(i),c=1-r,d=e.x,h=e.y,m=e.z,p=c*d,g=c*h;return this.set(p*d+r,p*h-l*m,p*m+l*h,0,p*h+l*m,g*h+r,g*m-l*d,0,p*m-l*h,g*m+l*d,c*m*m+r,0,0,0,0,1),this}makeScale(e,i,r){return this.set(e,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,i,r,l,c,d){return this.set(1,r,c,0,e,1,d,0,i,l,1,0,0,0,0,1),this}compose(e,i,r){const l=this.elements,c=i._x,d=i._y,h=i._z,m=i._w,p=c+c,g=d+d,S=h+h,x=c*p,M=c*g,R=c*S,C=d*g,y=d*S,v=h*S,L=m*p,D=m*g,P=m*S,tt=r.x,I=r.y,N=r.z;return l[0]=(1-(C+v))*tt,l[1]=(M+P)*tt,l[2]=(R-D)*tt,l[3]=0,l[4]=(M-P)*I,l[5]=(1-(x+v))*I,l[6]=(y+L)*I,l[7]=0,l[8]=(R+D)*N,l[9]=(y-L)*N,l[10]=(1-(x+C))*N,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,r){const l=this.elements;let c=ns.set(l[0],l[1],l[2]).length();const d=ns.set(l[4],l[5],l[6]).length(),h=ns.set(l[8],l[9],l[10]).length();this.determinant()<0&&(c=-c),e.x=l[12],e.y=l[13],e.z=l[14],ui.copy(this);const p=1/c,g=1/d,S=1/h;return ui.elements[0]*=p,ui.elements[1]*=p,ui.elements[2]*=p,ui.elements[4]*=g,ui.elements[5]*=g,ui.elements[6]*=g,ui.elements[8]*=S,ui.elements[9]*=S,ui.elements[10]*=S,i.setFromRotationMatrix(ui),r.x=c,r.y=d,r.z=h,this}makePerspective(e,i,r,l,c,d,h=Ki){const m=this.elements,p=2*c/(i-e),g=2*c/(r-l),S=(i+e)/(i-e),x=(r+l)/(r-l);let M,R;if(h===Ki)M=-(d+c)/(d-c),R=-2*d*c/(d-c);else if(h===yu)M=-d/(d-c),R=-d*c/(d-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return m[0]=p,m[4]=0,m[8]=S,m[12]=0,m[1]=0,m[5]=g,m[9]=x,m[13]=0,m[2]=0,m[6]=0,m[10]=M,m[14]=R,m[3]=0,m[7]=0,m[11]=-1,m[15]=0,this}makeOrthographic(e,i,r,l,c,d,h=Ki){const m=this.elements,p=1/(i-e),g=1/(r-l),S=1/(d-c),x=(i+e)*p,M=(r+l)*g;let R,C;if(h===Ki)R=(d+c)*S,C=-2*S;else if(h===yu)R=c*S,C=-1*S;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return m[0]=2*p,m[4]=0,m[8]=0,m[12]=-x,m[1]=0,m[5]=2*g,m[9]=0,m[13]=-M,m[2]=0,m[6]=0,m[10]=C,m[14]=-R,m[3]=0,m[7]=0,m[11]=0,m[15]=1,this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<16;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e[i+9]=r[9],e[i+10]=r[10],e[i+11]=r[11],e[i+12]=r[12],e[i+13]=r[13],e[i+14]=r[14],e[i+15]=r[15],e}}const ns=new $,ui=new Pe,Sy=new $(0,0,0),xy=new $(1,1,1),Ca=new $,Ql=new $,qn=new $,g_=new Pe,__=new mr;class Qi{constructor(e=0,i=0,r=0,l=Qi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,r,l=this._order){return this._x=e,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,r=!0){const l=e.elements,c=l[0],d=l[4],h=l[8],m=l[1],p=l[5],g=l[9],S=l[2],x=l[6],M=l[10];switch(i){case"XYZ":this._y=Math.asin(bn(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-g,M),this._z=Math.atan2(-d,c)):(this._x=Math.atan2(x,p),this._z=0);break;case"YXZ":this._x=Math.asin(-bn(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(h,M),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-S,c),this._z=0);break;case"ZXY":this._x=Math.asin(bn(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-S,M),this._z=Math.atan2(-d,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-bn(S,-1,1)),Math.abs(S)<.9999999?(this._x=Math.atan2(x,M),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-d,p));break;case"YZX":this._z=Math.asin(bn(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-g,p),this._y=Math.atan2(-S,c)):(this._x=0,this._y=Math.atan2(h,M));break;case"XZY":this._z=Math.asin(-bn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(x,p),this._y=Math.atan2(h,c)):(this._x=Math.atan2(-g,M),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,r){return g_.makeRotationFromQuaternion(e),this.setFromRotationMatrix(g_,i,r)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return __.setFromEuler(this),this.setFromQuaternion(__,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Qi.DEFAULT_ORDER="XYZ";class zh{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let yy=0;const v_=new $,is=new mr,Xi=new Pe,Jl=new $,Eo=new $,My=new $,Ey=new mr,S_=new $(1,0,0),x_=new $(0,1,0),y_=new $(0,0,1),M_={type:"added"},Ty={type:"removed"},as={type:"childadded",child:null},sh={type:"childremoved",child:null};class xn extends Es{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:yy++}),this.uuid=Uo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=xn.DEFAULT_UP.clone();const e=new $,i=new Qi,r=new mr,l=new $(1,1,1);function c(){r.setFromEuler(i,!1)}function d(){i.setFromQuaternion(r,void 0,!1)}i._onChange(c),r._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new Pe},normalMatrix:{value:new ue}}),this.matrix=new Pe,this.matrixWorld=new Pe,this.matrixAutoUpdate=xn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=xn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new zh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return is.setFromAxisAngle(e,i),this.quaternion.multiply(is),this}rotateOnWorldAxis(e,i){return is.setFromAxisAngle(e,i),this.quaternion.premultiply(is),this}rotateX(e){return this.rotateOnAxis(S_,e)}rotateY(e){return this.rotateOnAxis(x_,e)}rotateZ(e){return this.rotateOnAxis(y_,e)}translateOnAxis(e,i){return v_.copy(e).applyQuaternion(this.quaternion),this.position.add(v_.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(S_,e)}translateY(e){return this.translateOnAxis(x_,e)}translateZ(e){return this.translateOnAxis(y_,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Xi.copy(this.matrixWorld).invert())}lookAt(e,i,r){e.isVector3?Jl.copy(e):Jl.set(e,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),Eo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Xi.lookAt(Eo,Jl,this.up):Xi.lookAt(Jl,Eo,this.up),this.quaternion.setFromRotationMatrix(Xi),l&&(Xi.extractRotation(l.matrixWorld),is.setFromRotationMatrix(Xi),this.quaternion.premultiply(is.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(M_),as.child=e,this.dispatchEvent(as),as.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(Ty),sh.child=e,this.dispatchEvent(sh),sh.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Xi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Xi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Xi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(M_),as.child=e,this.dispatchEvent(as),as.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const d=this.children[r].getObjectByProperty(e,i);if(d!==void 0)return d}}getObjectsByProperty(e,i,r=[]){this[e]===i&&r.push(this);const l=this.children;for(let c=0,d=l.length;c<d;c++)l[c].getObjectsByProperty(e,i,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Eo,e,My),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Eo,Ey,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++){const c=i[r];(c.matrixWorldAutoUpdate===!0||e===!0)&&c.updateMatrixWorld(e)}}updateWorldMatrix(e,i){const r=this.parent;if(e===!0&&r!==null&&r.matrixWorldAutoUpdate===!0&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),i===!0){const l=this.children;for(let c=0,d=l.length;c<d;c++){const h=l[c];h.matrixWorldAutoUpdate===!0&&h.updateWorldMatrix(!1,!0)}}}toJSON(e){const i=e===void 0||typeof e=="string",r={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.visibility=this._visibility,l.active=this._active,l.bounds=this._bounds.map(h=>({boxInitialized:h.boxInitialized,boxMin:h.box.min.toArray(),boxMax:h.box.max.toArray(),sphereInitialized:h.sphereInitialized,sphereRadius:h.sphere.radius,sphereCenter:h.sphere.center.toArray()})),l.maxGeometryCount=this._maxGeometryCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.geometryCount=this._geometryCount,l.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(l.boundingSphere={center:l.boundingSphere.center.toArray(),radius:l.boundingSphere.radius}),this.boundingBox!==null&&(l.boundingBox={min:l.boundingBox.min.toArray(),max:l.boundingBox.max.toArray()}));function c(h,m){return h[m.uuid]===void 0&&(h[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(e.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const m=h.shapes;if(Array.isArray(m))for(let p=0,g=m.length;p<g;p++){const S=m[p];c(e.shapes,S)}else c(e.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let m=0,p=this.material.length;m<p;m++)h.push(c(e.materials,this.material[m]));l.material=h}else l.material=c(e.materials,this.material);if(this.children.length>0){l.children=[];for(let h=0;h<this.children.length;h++)l.children.push(this.children[h].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let h=0;h<this.animations.length;h++){const m=this.animations[h];l.animations.push(c(e.animations,m))}}if(i){const h=d(e.geometries),m=d(e.materials),p=d(e.textures),g=d(e.images),S=d(e.shapes),x=d(e.skeletons),M=d(e.animations),R=d(e.nodes);h.length>0&&(r.geometries=h),m.length>0&&(r.materials=m),p.length>0&&(r.textures=p),g.length>0&&(r.images=g),S.length>0&&(r.shapes=S),x.length>0&&(r.skeletons=x),M.length>0&&(r.animations=M),R.length>0&&(r.nodes=R)}return r.object=l,r;function d(h){const m=[];for(const p in h){const g=h[p];delete g.metadata,m.push(g)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let r=0;r<e.children.length;r++){const l=e.children[r];this.add(l.clone())}return this}}xn.DEFAULT_UP=new $(0,1,0);xn.DEFAULT_MATRIX_AUTO_UPDATE=!0;xn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ci=new $,ki=new $,oh=new $,Wi=new $,rs=new $,ss=new $,E_=new $,lh=new $,uh=new $,ch=new $;class yi{constructor(e=new $,i=new $,r=new $){this.a=e,this.b=i,this.c=r}static getNormal(e,i,r,l){l.subVectors(r,i),ci.subVectors(e,i),l.cross(ci);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(e,i,r,l,c){ci.subVectors(l,i),ki.subVectors(r,i),oh.subVectors(e,i);const d=ci.dot(ci),h=ci.dot(ki),m=ci.dot(oh),p=ki.dot(ki),g=ki.dot(oh),S=d*p-h*h;if(S===0)return c.set(0,0,0),null;const x=1/S,M=(p*m-h*g)*x,R=(d*g-h*m)*x;return c.set(1-M-R,R,M)}static containsPoint(e,i,r,l){return this.getBarycoord(e,i,r,l,Wi)===null?!1:Wi.x>=0&&Wi.y>=0&&Wi.x+Wi.y<=1}static getInterpolation(e,i,r,l,c,d,h,m){return this.getBarycoord(e,i,r,l,Wi)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,Wi.x),m.addScaledVector(d,Wi.y),m.addScaledVector(h,Wi.z),m)}static isFrontFacing(e,i,r,l){return ci.subVectors(r,i),ki.subVectors(e,i),ci.cross(ki).dot(l)<0}set(e,i,r){return this.a.copy(e),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(e,i,r,l){return this.a.copy(e[i]),this.b.copy(e[r]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,r,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ci.subVectors(this.c,this.b),ki.subVectors(this.a,this.b),ci.cross(ki).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return yi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return yi.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,r,l,c){return yi.getInterpolation(e,this.a,this.b,this.c,i,r,l,c)}containsPoint(e){return yi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return yi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const r=this.a,l=this.b,c=this.c;let d,h;rs.subVectors(l,r),ss.subVectors(c,r),lh.subVectors(e,r);const m=rs.dot(lh),p=ss.dot(lh);if(m<=0&&p<=0)return i.copy(r);uh.subVectors(e,l);const g=rs.dot(uh),S=ss.dot(uh);if(g>=0&&S<=g)return i.copy(l);const x=m*S-g*p;if(x<=0&&m>=0&&g<=0)return d=m/(m-g),i.copy(r).addScaledVector(rs,d);ch.subVectors(e,c);const M=rs.dot(ch),R=ss.dot(ch);if(R>=0&&M<=R)return i.copy(c);const C=M*p-m*R;if(C<=0&&p>=0&&R<=0)return h=p/(p-R),i.copy(r).addScaledVector(ss,h);const y=g*R-M*S;if(y<=0&&S-g>=0&&M-R>=0)return E_.subVectors(c,l),h=(S-g)/(S-g+(M-R)),i.copy(l).addScaledVector(E_,h);const v=1/(y+C+x);return d=C*v,h=x*v,i.copy(r).addScaledVector(rs,d).addScaledVector(ss,h)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Av={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},wa={h:0,s:0,l:0},$l={h:0,s:0,l:0};function fh(o,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?o+(e-o)*6*i:i<1/2?e:i<2/3?o+(e-o)*6*(2/3-i):o}class Se{constructor(e,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,r)}set(e,i,r){if(i===void 0&&r===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=Si){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ne.toWorkingColorSpace(this,i),this}setRGB(e,i,r,l=Ne.workingColorSpace){return this.r=e,this.g=i,this.b=r,Ne.toWorkingColorSpace(this,l),this}setHSL(e,i,r,l=Ne.workingColorSpace){if(e=uy(e,1),i=bn(i,0,1),r=bn(r,0,1),i===0)this.r=this.g=this.b=r;else{const c=r<=.5?r*(1+i):r+i-r*i,d=2*r-c;this.r=fh(d,c,e+1/3),this.g=fh(d,c,e),this.b=fh(d,c,e-1/3)}return Ne.toWorkingColorSpace(this,l),this}setStyle(e,i=Si){function r(c){c!==void 0&&parseFloat(c)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const d=l[1],h=l[2];switch(d){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=l[1],d=c.length;if(d===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(d===6)return this.setHex(parseInt(c,16),i);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=Si){const r=Av[e.toLowerCase()];return r!==void 0?this.setHex(r,i):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=vs(e.r),this.g=vs(e.g),this.b=vs(e.b),this}copyLinearToSRGB(e){return this.r=Jf(e.r),this.g=Jf(e.g),this.b=Jf(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Si){return Ne.fromWorkingColorSpace(Sn.copy(this),e),Math.round(bn(Sn.r*255,0,255))*65536+Math.round(bn(Sn.g*255,0,255))*256+Math.round(bn(Sn.b*255,0,255))}getHexString(e=Si){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=Ne.workingColorSpace){Ne.fromWorkingColorSpace(Sn.copy(this),i);const r=Sn.r,l=Sn.g,c=Sn.b,d=Math.max(r,l,c),h=Math.min(r,l,c);let m,p;const g=(h+d)/2;if(h===d)m=0,p=0;else{const S=d-h;switch(p=g<=.5?S/(d+h):S/(2-d-h),d){case r:m=(l-c)/S+(l<c?6:0);break;case l:m=(c-r)/S+2;break;case c:m=(r-l)/S+4;break}m/=6}return e.h=m,e.s=p,e.l=g,e}getRGB(e,i=Ne.workingColorSpace){return Ne.fromWorkingColorSpace(Sn.copy(this),i),e.r=Sn.r,e.g=Sn.g,e.b=Sn.b,e}getStyle(e=Si){Ne.fromWorkingColorSpace(Sn.copy(this),e);const i=Sn.r,r=Sn.g,l=Sn.b;return e!==Si?`color(${e} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(e,i,r){return this.getHSL(wa),this.setHSL(wa.h+e,wa.s+i,wa.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,r){return this.r=e.r+(i.r-e.r)*r,this.g=e.g+(i.g-e.g)*r,this.b=e.b+(i.b-e.b)*r,this}lerpHSL(e,i){this.getHSL(wa),e.getHSL($l);const r=Kf(wa.h,$l.h,i),l=Kf(wa.s,$l.s,i),c=Kf(wa.l,$l.l,i);return this.setHSL(r,l,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,r=this.g,l=this.b,c=e.elements;return this.r=c[0]*i+c[3]*r+c[6]*l,this.g=c[1]*i+c[4]*r+c[7]*l,this.b=c[2]*i+c[5]*r+c[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Sn=new Se;Se.NAMES=Av;let Ay=0;class No extends Es{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ay++}),this.uuid=Uo(),this.name="",this.type="Material",this.blending=gs,this.side=Oa,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Th,this.blendDst=Ah,this.blendEquation=cr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Se(0,0,0),this.blendAlpha=0,this.depthFunc=_u,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=u_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Qr,this.stencilZFail=Qr,this.stencilZPass=Qr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const r=e[i];if(r===void 0){console.warn(`THREE.Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){console.warn(`THREE.Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==gs&&(r.blending=this.blending),this.side!==Oa&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Th&&(r.blendSrc=this.blendSrc),this.blendDst!==Ah&&(r.blendDst=this.blendDst),this.blendEquation!==cr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==_u&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==u_&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Qr&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Qr&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Qr&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(c){const d=[];for(const h in c){const m=c[h];delete m.metadata,d.push(m)}return d}if(i){const c=l(e.textures),d=l(e.images);c.length>0&&(r.textures=c),d.length>0&&(r.images=d)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let c=0;c!==l;++c)r[c]=i[c].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class bv extends No{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Se(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Qi,this.combine=uv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Je=new $,tu=new se;class hi{constructor(e,i,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=r,this.usage=c_,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Zi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return fy("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,r){e*=this.itemSize,r*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[e+l]=i.array[r+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)tu.fromBufferAttribute(this,i),tu.applyMatrix3(e),this.setXY(i,tu.x,tu.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)Je.fromBufferAttribute(this,i),Je.applyMatrix3(e),this.setXYZ(i,Je.x,Je.y,Je.z);return this}applyMatrix4(e){for(let i=0,r=this.count;i<r;i++)Je.fromBufferAttribute(this,i),Je.applyMatrix4(e),this.setXYZ(i,Je.x,Je.y,Je.z);return this}applyNormalMatrix(e){for(let i=0,r=this.count;i<r;i++)Je.fromBufferAttribute(this,i),Je.applyNormalMatrix(e),this.setXYZ(i,Je.x,Je.y,Je.z);return this}transformDirection(e){for(let i=0,r=this.count;i<r;i++)Je.fromBufferAttribute(this,i),Je.transformDirection(e),this.setXYZ(i,Je.x,Je.y,Je.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let r=this.array[e*this.itemSize+i];return this.normalized&&(r=xo(r,this.array)),r}setComponent(e,i,r){return this.normalized&&(r=Bn(r,this.array)),this.array[e*this.itemSize+i]=r,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=xo(i,this.array)),i}setX(e,i){return this.normalized&&(i=Bn(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=xo(i,this.array)),i}setY(e,i){return this.normalized&&(i=Bn(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=xo(i,this.array)),i}setZ(e,i){return this.normalized&&(i=Bn(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=xo(i,this.array)),i}setW(e,i){return this.normalized&&(i=Bn(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,r){return e*=this.itemSize,this.normalized&&(i=Bn(i,this.array),r=Bn(r,this.array)),this.array[e+0]=i,this.array[e+1]=r,this}setXYZ(e,i,r,l){return e*=this.itemSize,this.normalized&&(i=Bn(i,this.array),r=Bn(r,this.array),l=Bn(l,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this}setXYZW(e,i,r,l,c){return e*=this.itemSize,this.normalized&&(i=Bn(i,this.array),r=Bn(r,this.array),l=Bn(l,this.array),c=Bn(c,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==c_&&(e.usage=this.usage),e}}class Rv extends hi{constructor(e,i,r){super(new Uint16Array(e),i,r)}}class Cv extends hi{constructor(e,i,r){super(new Uint32Array(e),i,r)}}class Ei extends hi{constructor(e,i,r){super(new Float32Array(e),i,r)}}let by=0;const ii=new Pe,hh=new xn,os=new $,Yn=new gr,To=new gr,ln=new $;class Ba extends Es{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:by++}),this.uuid=Uo(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(yv(e)?Cv:Rv)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,r=0){this.groups.push({start:e,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const c=new ue().getNormalMatrix(e);r.applyNormalMatrix(c),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ii.makeRotationFromQuaternion(e),this.applyMatrix4(ii),this}rotateX(e){return ii.makeRotationX(e),this.applyMatrix4(ii),this}rotateY(e){return ii.makeRotationY(e),this.applyMatrix4(ii),this}rotateZ(e){return ii.makeRotationZ(e),this.applyMatrix4(ii),this}translate(e,i,r){return ii.makeTranslation(e,i,r),this.applyMatrix4(ii),this}scale(e,i,r){return ii.makeScale(e,i,r),this.applyMatrix4(ii),this}lookAt(e){return hh.lookAt(e),hh.updateMatrix(),this.applyMatrix4(hh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(os).negate(),this.translate(os.x,os.y,os.z),this}setFromPoints(e){const i=[];for(let r=0,l=e.length;r<l;r++){const c=e[r];i.push(c.x,c.y,c.z||0)}return this.setAttribute("position",new Ei(i,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new gr);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new $(-1/0,-1/0,-1/0),new $(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let r=0,l=i.length;r<l;r++){const c=i[r];Yn.setFromBufferAttribute(c),this.morphTargetsRelative?(ln.addVectors(this.boundingBox.min,Yn.min),this.boundingBox.expandByPoint(ln),ln.addVectors(this.boundingBox.max,Yn.max),this.boundingBox.expandByPoint(ln)):(this.boundingBox.expandByPoint(Yn.min),this.boundingBox.expandByPoint(Yn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Lo);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new $,1/0);return}if(e){const r=this.boundingSphere.center;if(Yn.setFromBufferAttribute(e),i)for(let c=0,d=i.length;c<d;c++){const h=i[c];To.setFromBufferAttribute(h),this.morphTargetsRelative?(ln.addVectors(Yn.min,To.min),Yn.expandByPoint(ln),ln.addVectors(Yn.max,To.max),Yn.expandByPoint(ln)):(Yn.expandByPoint(To.min),Yn.expandByPoint(To.max))}Yn.getCenter(r);let l=0;for(let c=0,d=e.count;c<d;c++)ln.fromBufferAttribute(e,c),l=Math.max(l,r.distanceToSquared(ln));if(i)for(let c=0,d=i.length;c<d;c++){const h=i[c],m=this.morphTargetsRelative;for(let p=0,g=h.count;p<g;p++)ln.fromBufferAttribute(h,p),m&&(os.fromBufferAttribute(e,p),ln.add(os)),l=Math.max(l,r.distanceToSquared(ln))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new hi(new Float32Array(4*r.count),4));const d=this.getAttribute("tangent"),h=[],m=[];for(let O=0;O<r.count;O++)h[O]=new $,m[O]=new $;const p=new $,g=new $,S=new $,x=new se,M=new se,R=new se,C=new $,y=new $;function v(O,T,E){p.fromBufferAttribute(r,O),g.fromBufferAttribute(r,T),S.fromBufferAttribute(r,E),x.fromBufferAttribute(c,O),M.fromBufferAttribute(c,T),R.fromBufferAttribute(c,E),g.sub(p),S.sub(p),M.sub(x),R.sub(x);const q=1/(M.x*R.y-R.x*M.y);isFinite(q)&&(C.copy(g).multiplyScalar(R.y).addScaledVector(S,-M.y).multiplyScalar(q),y.copy(S).multiplyScalar(M.x).addScaledVector(g,-R.x).multiplyScalar(q),h[O].add(C),h[T].add(C),h[E].add(C),m[O].add(y),m[T].add(y),m[E].add(y))}let L=this.groups;L.length===0&&(L=[{start:0,count:e.count}]);for(let O=0,T=L.length;O<T;++O){const E=L[O],q=E.start,lt=E.count;for(let G=q,dt=q+lt;G<dt;G+=3)v(e.getX(G+0),e.getX(G+1),e.getX(G+2))}const D=new $,P=new $,tt=new $,I=new $;function N(O){tt.fromBufferAttribute(l,O),I.copy(tt);const T=h[O];D.copy(T),D.sub(tt.multiplyScalar(tt.dot(T))).normalize(),P.crossVectors(I,T);const q=P.dot(m[O])<0?-1:1;d.setXYZW(O,D.x,D.y,D.z,q)}for(let O=0,T=L.length;O<T;++O){const E=L[O],q=E.start,lt=E.count;for(let G=q,dt=q+lt;G<dt;G+=3)N(e.getX(G+0)),N(e.getX(G+1)),N(e.getX(G+2))}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new hi(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let x=0,M=r.count;x<M;x++)r.setXYZ(x,0,0,0);const l=new $,c=new $,d=new $,h=new $,m=new $,p=new $,g=new $,S=new $;if(e)for(let x=0,M=e.count;x<M;x+=3){const R=e.getX(x+0),C=e.getX(x+1),y=e.getX(x+2);l.fromBufferAttribute(i,R),c.fromBufferAttribute(i,C),d.fromBufferAttribute(i,y),g.subVectors(d,c),S.subVectors(l,c),g.cross(S),h.fromBufferAttribute(r,R),m.fromBufferAttribute(r,C),p.fromBufferAttribute(r,y),h.add(g),m.add(g),p.add(g),r.setXYZ(R,h.x,h.y,h.z),r.setXYZ(C,m.x,m.y,m.z),r.setXYZ(y,p.x,p.y,p.z)}else for(let x=0,M=i.count;x<M;x+=3)l.fromBufferAttribute(i,x+0),c.fromBufferAttribute(i,x+1),d.fromBufferAttribute(i,x+2),g.subVectors(d,c),S.subVectors(l,c),g.cross(S),r.setXYZ(x+0,g.x,g.y,g.z),r.setXYZ(x+1,g.x,g.y,g.z),r.setXYZ(x+2,g.x,g.y,g.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,r=e.count;i<r;i++)ln.fromBufferAttribute(e,i),ln.normalize(),e.setXYZ(i,ln.x,ln.y,ln.z)}toNonIndexed(){function e(h,m){const p=h.array,g=h.itemSize,S=h.normalized,x=new p.constructor(m.length*g);let M=0,R=0;for(let C=0,y=m.length;C<y;C++){h.isInterleavedBufferAttribute?M=m[C]*h.data.stride+h.offset:M=m[C]*g;for(let v=0;v<g;v++)x[R++]=p[M++]}return new hi(x,g,S)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Ba,r=this.index.array,l=this.attributes;for(const h in l){const m=l[h],p=e(m,r);i.setAttribute(h,p)}const c=this.morphAttributes;for(const h in c){const m=[],p=c[h];for(let g=0,S=p.length;g<S;g++){const x=p[g],M=e(x,r);m.push(M)}i.morphAttributes[h]=m}i.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let h=0,m=d.length;h<m;h++){const p=d[h];i.addGroup(p.start,p.count,p.materialIndex)}return i}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(e[p]=m[p]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const m in r){const p=r[m];e.data.attributes[m]=p.toJSON(e.data)}const l={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],g=[];for(let S=0,x=p.length;S<x;S++){const M=p[S];g.push(M.toJSON(e.data))}g.length>0&&(l[m]=g,c=!0)}c&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(e.data.groups=JSON.parse(JSON.stringify(d)));const h=this.boundingSphere;return h!==null&&(e.data.boundingSphere={center:h.center.toArray(),radius:h.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone(i));const l=e.attributes;for(const p in l){const g=l[p];this.setAttribute(p,g.clone(i))}const c=e.morphAttributes;for(const p in c){const g=[],S=c[p];for(let x=0,M=S.length;x<M;x++)g.push(S[x].clone(i));this.morphAttributes[p]=g}this.morphTargetsRelative=e.morphTargetsRelative;const d=e.groups;for(let p=0,g=d.length;p<g;p++){const S=d[p];this.addGroup(S.start,S.count,S.materialIndex)}const h=e.boundingBox;h!==null&&(this.boundingBox=h.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const T_=new Pe,rr=new Tv,eu=new Lo,A_=new $,ls=new $,us=new $,cs=new $,dh=new $,nu=new $,iu=new se,au=new se,ru=new se,b_=new $,R_=new $,C_=new $,su=new $,ou=new $;class Rn extends xn{constructor(e=new Ba,i=new bv){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,d=l.length;c<d;c++){const h=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}getVertexPosition(e,i){const r=this.geometry,l=r.attributes.position,c=r.morphAttributes.position,d=r.morphTargetsRelative;i.fromBufferAttribute(l,e);const h=this.morphTargetInfluences;if(c&&h){nu.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const g=h[m],S=c[m];g!==0&&(dh.fromBufferAttribute(S,e),d?nu.addScaledVector(dh,g):nu.addScaledVector(dh.sub(i),g))}i.add(nu)}return i}raycast(e,i){const r=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),eu.copy(r.boundingSphere),eu.applyMatrix4(c),rr.copy(e.ray).recast(e.near),!(eu.containsPoint(rr.origin)===!1&&(rr.intersectSphere(eu,A_)===null||rr.origin.distanceToSquared(A_)>(e.far-e.near)**2))&&(T_.copy(c).invert(),rr.copy(e.ray).applyMatrix4(T_),!(r.boundingBox!==null&&rr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,i,rr)))}_computeIntersections(e,i,r){let l;const c=this.geometry,d=this.material,h=c.index,m=c.attributes.position,p=c.attributes.uv,g=c.attributes.uv1,S=c.attributes.normal,x=c.groups,M=c.drawRange;if(h!==null)if(Array.isArray(d))for(let R=0,C=x.length;R<C;R++){const y=x[R],v=d[y.materialIndex],L=Math.max(y.start,M.start),D=Math.min(h.count,Math.min(y.start+y.count,M.start+M.count));for(let P=L,tt=D;P<tt;P+=3){const I=h.getX(P),N=h.getX(P+1),O=h.getX(P+2);l=lu(this,v,e,r,p,g,S,I,N,O),l&&(l.faceIndex=Math.floor(P/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const R=Math.max(0,M.start),C=Math.min(h.count,M.start+M.count);for(let y=R,v=C;y<v;y+=3){const L=h.getX(y),D=h.getX(y+1),P=h.getX(y+2);l=lu(this,d,e,r,p,g,S,L,D,P),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}else if(m!==void 0)if(Array.isArray(d))for(let R=0,C=x.length;R<C;R++){const y=x[R],v=d[y.materialIndex],L=Math.max(y.start,M.start),D=Math.min(m.count,Math.min(y.start+y.count,M.start+M.count));for(let P=L,tt=D;P<tt;P+=3){const I=P,N=P+1,O=P+2;l=lu(this,v,e,r,p,g,S,I,N,O),l&&(l.faceIndex=Math.floor(P/3),l.face.materialIndex=y.materialIndex,i.push(l))}}else{const R=Math.max(0,M.start),C=Math.min(m.count,M.start+M.count);for(let y=R,v=C;y<v;y+=3){const L=y,D=y+1,P=y+2;l=lu(this,d,e,r,p,g,S,L,D,P),l&&(l.faceIndex=Math.floor(y/3),i.push(l))}}}}function Ry(o,e,i,r,l,c,d,h){let m;if(e.side===Cn?m=r.intersectTriangle(d,c,l,!0,h):m=r.intersectTriangle(l,c,d,e.side===Oa,h),m===null)return null;ou.copy(h),ou.applyMatrix4(o.matrixWorld);const p=i.ray.origin.distanceTo(ou);return p<i.near||p>i.far?null:{distance:p,point:ou.clone(),object:o}}function lu(o,e,i,r,l,c,d,h,m,p){o.getVertexPosition(h,ls),o.getVertexPosition(m,us),o.getVertexPosition(p,cs);const g=Ry(o,e,i,r,ls,us,cs,su);if(g){l&&(iu.fromBufferAttribute(l,h),au.fromBufferAttribute(l,m),ru.fromBufferAttribute(l,p),g.uv=yi.getInterpolation(su,ls,us,cs,iu,au,ru,new se)),c&&(iu.fromBufferAttribute(c,h),au.fromBufferAttribute(c,m),ru.fromBufferAttribute(c,p),g.uv1=yi.getInterpolation(su,ls,us,cs,iu,au,ru,new se)),d&&(b_.fromBufferAttribute(d,h),R_.fromBufferAttribute(d,m),C_.fromBufferAttribute(d,p),g.normal=yi.getInterpolation(su,ls,us,cs,b_,R_,C_,new $),g.normal.dot(r.direction)>0&&g.normal.multiplyScalar(-1));const S={a:h,b:m,c:p,normal:new $,materialIndex:0};yi.getNormal(ls,us,cs,S.normal),g.face=S}return g}class Ts extends Ba{constructor(e=1,i=1,r=1,l=1,c=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:r,widthSegments:l,heightSegments:c,depthSegments:d};const h=this;l=Math.floor(l),c=Math.floor(c),d=Math.floor(d);const m=[],p=[],g=[],S=[];let x=0,M=0;R("z","y","x",-1,-1,r,i,e,d,c,0),R("z","y","x",1,-1,r,i,-e,d,c,1),R("x","z","y",1,1,e,r,i,l,d,2),R("x","z","y",1,-1,e,r,-i,l,d,3),R("x","y","z",1,-1,e,i,r,l,c,4),R("x","y","z",-1,-1,e,i,-r,l,c,5),this.setIndex(m),this.setAttribute("position",new Ei(p,3)),this.setAttribute("normal",new Ei(g,3)),this.setAttribute("uv",new Ei(S,2));function R(C,y,v,L,D,P,tt,I,N,O,T){const E=P/N,q=tt/O,lt=P/2,G=tt/2,dt=I/2,pt=N+1,F=O+1;let K=0,W=0;const vt=new $;for(let ut=0;ut<F;ut++){const U=ut*q-G;for(let Z=0;Z<pt;Z++){const xt=Z*E-lt;vt[C]=xt*L,vt[y]=U*D,vt[v]=dt,p.push(vt.x,vt.y,vt.z),vt[C]=0,vt[y]=0,vt[v]=I>0?1:-1,g.push(vt.x,vt.y,vt.z),S.push(Z/N),S.push(1-ut/O),K+=1}}for(let ut=0;ut<O;ut++)for(let U=0;U<N;U++){const Z=x+U+pt*ut,xt=x+U+pt*(ut+1),V=x+(U+1)+pt*(ut+1),ct=x+(U+1)+pt*ut;m.push(Z,xt,ct),m.push(xt,V,ct),W+=6}h.addGroup(M,W,T),M+=W,x+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ts(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ms(o){const e={};for(const i in o){e[i]={};for(const r in o[i]){const l=o[i][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][r]=null):e[i][r]=l.clone():Array.isArray(l)?e[i][r]=l.slice():e[i][r]=l}}return e}function An(o){const e={};for(let i=0;i<o.length;i++){const r=Ms(o[i]);for(const l in r)e[l]=r[l]}return e}function Cy(o){const e=[];for(let i=0;i<o.length;i++)e.push(o[i].clone());return e}function wv(o){const e=o.getRenderTarget();return e===null?o.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ne.workingColorSpace}const Dv={clone:Ms,merge:An};var wy=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Dy=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ji extends No{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=wy,this.fragmentShader=Dy,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ms(e.uniforms),this.uniformsGroups=Cy(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const d=this.uniforms[l].value;d&&d.isTexture?i.uniforms[l]={type:"t",value:d.toJSON(e).uuid}:d&&d.isColor?i.uniforms[l]={type:"c",value:d.getHex()}:d&&d.isVector2?i.uniforms[l]={type:"v2",value:d.toArray()}:d&&d.isVector3?i.uniforms[l]={type:"v3",value:d.toArray()}:d&&d.isVector4?i.uniforms[l]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?i.uniforms[l]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?i.uniforms[l]={type:"m4",value:d.toArray()}:i.uniforms[l]={value:d}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class Uv extends xn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Pe,this.projectionMatrix=new Pe,this.projectionMatrixInverse=new Pe,this.coordinateSystem=Ki}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Da=new $,w_=new se,D_=new se;class ai extends Uv{constructor(e=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=Dh*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Zf*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Dh*2*Math.atan(Math.tan(Zf*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,r){Da.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Da.x,Da.y).multiplyScalar(-e/Da.z),Da.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Da.x,Da.y).multiplyScalar(-e/Da.z)}getViewSize(e,i){return this.getViewBounds(e,w_,D_),i.subVectors(D_,w_)}setViewOffset(e,i,r,l,c,d){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(Zf*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,c=-.5*l;const d=this.view;if(this.view!==null&&this.view.enabled){const m=d.fullWidth,p=d.fullHeight;c+=d.offsetX*l/m,i-=d.offsetY*r/p,l*=d.width/m,r*=d.height/p}const h=this.filmOffset;h!==0&&(c+=e*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const fs=-90,hs=1;class Uy extends xn{constructor(e,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new ai(fs,hs,e,i);l.layers=this.layers,this.add(l);const c=new ai(fs,hs,e,i);c.layers=this.layers,this.add(c);const d=new ai(fs,hs,e,i);d.layers=this.layers,this.add(d);const h=new ai(fs,hs,e,i);h.layers=this.layers,this.add(h);const m=new ai(fs,hs,e,i);m.layers=this.layers,this.add(m);const p=new ai(fs,hs,e,i);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[r,l,c,d,h,m]=i;for(const p of i)this.remove(p);if(e===Ki)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===yu)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of i)this.add(p),p.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,d,h,m,p,g]=this.children,S=e.getRenderTarget(),x=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),R=e.xr.enabled;e.xr.enabled=!1;const C=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,l),e.render(i,c),e.setRenderTarget(r,1,l),e.render(i,d),e.setRenderTarget(r,2,l),e.render(i,h),e.setRenderTarget(r,3,l),e.render(i,m),e.setRenderTarget(r,4,l),e.render(i,p),r.texture.generateMipmaps=C,e.setRenderTarget(r,5,l),e.render(i,g),e.setRenderTarget(S,x,M),e.xr.enabled=R,r.texture.needsPMREMUpdate=!0}}class Lv extends wn{constructor(e,i,r,l,c,d,h,m,p,g){e=e!==void 0?e:[],i=i!==void 0?i:Ss,super(e,i,r,l,c,d,h,m,p,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Ly extends pr{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},l=[r,r,r,r,r,r];this.texture=new Lv(l,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:fi}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new Ts(5,5,5),c=new Ji({name:"CubemapFromEquirect",uniforms:Ms(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Cn,blending:La});c.uniforms.tEquirect.value=i;const d=new Rn(l,c),h=i.minFilter;return i.minFilter===dr&&(i.minFilter=fi),new Uy(1,10,this).update(e,d),i.minFilter=h,d.geometry.dispose(),d.material.dispose(),this}clear(e,i,r,l){const c=e.getRenderTarget();for(let d=0;d<6;d++)e.setRenderTarget(this,d),e.clear(i,r,l);e.setRenderTarget(c)}}const ph=new $,Ny=new $,Oy=new ue;class Yi{constructor(e=new $(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,r,l){return this.normal.set(e,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,r){const l=ph.subVectors(r,i).cross(Ny.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i){const r=e.delta(ph),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(e.start).addScaledVector(r,c)}intersectsLine(e){const i=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return i<0&&r>0||r<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const r=i||Oy.getNormalMatrix(e),l=this.coplanarPoint(ph).applyMatrix4(e),c=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const sr=new Lo,uu=new $;class Bh{constructor(e=new Yi,i=new Yi,r=new Yi,l=new Yi,c=new Yi,d=new Yi){this.planes=[e,i,r,l,c,d]}set(e,i,r,l,c,d){const h=this.planes;return h[0].copy(e),h[1].copy(i),h[2].copy(r),h[3].copy(l),h[4].copy(c),h[5].copy(d),this}copy(e){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,i=Ki){const r=this.planes,l=e.elements,c=l[0],d=l[1],h=l[2],m=l[3],p=l[4],g=l[5],S=l[6],x=l[7],M=l[8],R=l[9],C=l[10],y=l[11],v=l[12],L=l[13],D=l[14],P=l[15];if(r[0].setComponents(m-c,x-p,y-M,P-v).normalize(),r[1].setComponents(m+c,x+p,y+M,P+v).normalize(),r[2].setComponents(m+d,x+g,y+R,P+L).normalize(),r[3].setComponents(m-d,x-g,y-R,P-L).normalize(),r[4].setComponents(m-h,x-S,y-C,P-D).normalize(),i===Ki)r[5].setComponents(m+h,x+S,y+C,P+D).normalize();else if(i===yu)r[5].setComponents(h,S,C,D).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),sr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),sr.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(sr)}intersectsSprite(e){return sr.center.set(0,0,0),sr.radius=.7071067811865476,sr.applyMatrix4(e.matrixWorld),this.intersectsSphere(sr)}intersectsSphere(e){const i=this.planes,r=e.center,l=-e.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(r)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(uu.x=l.normal.x>0?e.max.x:e.min.x,uu.y=l.normal.y>0?e.max.y:e.min.y,uu.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(uu)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Nv(){let o=null,e=!1,i=null,r=null;function l(c,d){i(c,d),r=o.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&(r=o.requestAnimationFrame(l),e=!0)},stop:function(){o.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(c){i=c},setContext:function(c){o=c}}}function Py(o){const e=new WeakMap;function i(h,m){const p=h.array,g=h.usage,S=p.byteLength,x=o.createBuffer();o.bindBuffer(m,x),o.bufferData(m,p,g),h.onUploadCallback();let M;if(p instanceof Float32Array)M=o.FLOAT;else if(p instanceof Uint16Array)h.isFloat16BufferAttribute?M=o.HALF_FLOAT:M=o.UNSIGNED_SHORT;else if(p instanceof Int16Array)M=o.SHORT;else if(p instanceof Uint32Array)M=o.UNSIGNED_INT;else if(p instanceof Int32Array)M=o.INT;else if(p instanceof Int8Array)M=o.BYTE;else if(p instanceof Uint8Array)M=o.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)M=o.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:x,type:M,bytesPerElement:p.BYTES_PER_ELEMENT,version:h.version,size:S}}function r(h,m,p){const g=m.array,S=m._updateRange,x=m.updateRanges;if(o.bindBuffer(p,h),S.count===-1&&x.length===0&&o.bufferSubData(p,0,g),x.length!==0){for(let M=0,R=x.length;M<R;M++){const C=x[M];o.bufferSubData(p,C.start*g.BYTES_PER_ELEMENT,g,C.start,C.count)}m.clearUpdateRanges()}S.count!==-1&&(o.bufferSubData(p,S.offset*g.BYTES_PER_ELEMENT,g,S.offset,S.count),S.count=-1),m.onUploadCallback()}function l(h){return h.isInterleavedBufferAttribute&&(h=h.data),e.get(h)}function c(h){h.isInterleavedBufferAttribute&&(h=h.data);const m=e.get(h);m&&(o.deleteBuffer(m.buffer),e.delete(h))}function d(h,m){if(h.isGLBufferAttribute){const g=e.get(h);(!g||g.version<h.version)&&e.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}h.isInterleavedBufferAttribute&&(h=h.data);const p=e.get(h);if(p===void 0)e.set(h,i(h,m));else if(p.version<h.version){if(p.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,h,m),p.version=h.version}}return{get:l,remove:c,update:d}}class bu extends Ba{constructor(e=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:r,heightSegments:l};const c=e/2,d=i/2,h=Math.floor(r),m=Math.floor(l),p=h+1,g=m+1,S=e/h,x=i/m,M=[],R=[],C=[],y=[];for(let v=0;v<g;v++){const L=v*x-d;for(let D=0;D<p;D++){const P=D*S-c;R.push(P,-L,0),C.push(0,0,1),y.push(D/h),y.push(1-v/m)}}for(let v=0;v<m;v++)for(let L=0;L<h;L++){const D=L+p*v,P=L+p*(v+1),tt=L+1+p*(v+1),I=L+1+p*v;M.push(D,P,I),M.push(P,tt,I)}this.setIndex(M),this.setAttribute("position",new Ei(R,3)),this.setAttribute("normal",new Ei(C,3)),this.setAttribute("uv",new Ei(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new bu(e.width,e.height,e.widthSegments,e.heightSegments)}}var zy=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,By=`#ifdef USE_ALPHAHASH
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
#endif`,Iy=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Fy=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Hy=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Gy=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Vy=`#ifdef USE_AOMAP
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
#endif`,Xy=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ky=`#ifdef USE_BATCHING
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
#endif`,Wy=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,qy=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Yy=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,jy=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Zy=`#ifdef USE_IRIDESCENCE
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
#endif`,Ky=`#ifdef USE_BUMPMAP
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
#endif`,Qy=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Jy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,$y=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,tM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,eM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,nM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,iM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,aM=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,rM=`#define PI 3.141592653589793
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
} // validated`,sM=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,oM=`vec3 transformedNormal = objectNormal;
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
#endif`,lM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,uM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,cM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,fM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,hM="gl_FragColor = linearToOutputTexel( gl_FragColor );",dM=`
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
}`,pM=`#ifdef USE_ENVMAP
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
#endif`,mM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,gM=`#ifdef USE_ENVMAP
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
#endif`,_M=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,vM=`#ifdef USE_ENVMAP
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
#endif`,SM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,xM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,yM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,MM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,EM=`#ifdef USE_GRADIENTMAP
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
}`,TM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,AM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,bM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,RM=`uniform bool receiveShadow;
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
#endif`,CM=`#ifdef USE_ENVMAP
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
#endif`,wM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,DM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,UM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,LM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,NM=`PhysicalMaterial material;
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
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
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
#endif`,OM=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
}`,PM=`
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
#endif`,zM=`#if defined( RE_IndirectDiffuse )
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
#endif`,BM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,IM=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,FM=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,HM=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,GM=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,VM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,XM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,kM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,WM=`#if defined( USE_POINTS_UV )
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
#endif`,qM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,YM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,jM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,ZM=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,KM=`#ifdef USE_MORPHNORMALS
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
#endif`,QM=`#ifdef USE_MORPHTARGETS
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
#endif`,JM=`#ifdef USE_MORPHTARGETS
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
#endif`,$M=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,tE=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,eE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,nE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,iE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,aE=`#ifdef USE_NORMALMAP
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
#endif`,rE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,sE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,oE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,lE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,uE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,cE=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,fE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,hE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,pE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,mE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,gE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,_E=`#if NUM_SPOT_LIGHT_COORDS > 0
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
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
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
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return shadow;
	}
#endif`,vE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,SE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,xE=`float getShadowMask() {
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
}`,yE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ME=`#ifdef USE_SKINNING
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
#endif`,EE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,TE=`#ifdef USE_SKINNING
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
#endif`,AE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,bE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,RE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,CE=`#ifndef saturate
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
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,wE=`#ifdef USE_TRANSMISSION
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
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,DE=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,UE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,LE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,NE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,OE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const PE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,zE=`uniform sampler2D t2D;
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
}`,BE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,IE=`#ifdef ENVMAP_TYPE_CUBE
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
}`,FE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,HE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,GE=`#include <common>
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
}`,VE=`#if DEPTH_PACKING == 3200
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
}`,XE=`#define DISTANCE
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
}`,kE=`#define DISTANCE
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
}`,WE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,qE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,YE=`uniform float scale;
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
}`,jE=`uniform vec3 diffuse;
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
}`,ZE=`#include <common>
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
}`,KE=`uniform vec3 diffuse;
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
}`,QE=`#define LAMBERT
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
}`,JE=`#define LAMBERT
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
}`,$E=`#define MATCAP
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
}`,tT=`#define MATCAP
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
}`,eT=`#define NORMAL
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
}`,nT=`#define NORMAL
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
}`,iT=`#define PHONG
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
}`,aT=`#define PHONG
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
}`,rT=`#define STANDARD
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
}`,sT=`#define STANDARD
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
#ifdef USE_DISPERSION
	uniform float dispersion;
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
}`,oT=`#define TOON
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
}`,lT=`#define TOON
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
}`,uT=`uniform float size;
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
}`,cT=`uniform vec3 diffuse;
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
}`,fT=`#include <common>
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
}`,hT=`uniform vec3 color;
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
}`,dT=`uniform float rotation;
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
}`,pT=`uniform vec3 diffuse;
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
}`,le={alphahash_fragment:zy,alphahash_pars_fragment:By,alphamap_fragment:Iy,alphamap_pars_fragment:Fy,alphatest_fragment:Hy,alphatest_pars_fragment:Gy,aomap_fragment:Vy,aomap_pars_fragment:Xy,batching_pars_vertex:ky,batching_vertex:Wy,begin_vertex:qy,beginnormal_vertex:Yy,bsdfs:jy,iridescence_fragment:Zy,bumpmap_pars_fragment:Ky,clipping_planes_fragment:Qy,clipping_planes_pars_fragment:Jy,clipping_planes_pars_vertex:$y,clipping_planes_vertex:tM,color_fragment:eM,color_pars_fragment:nM,color_pars_vertex:iM,color_vertex:aM,common:rM,cube_uv_reflection_fragment:sM,defaultnormal_vertex:oM,displacementmap_pars_vertex:lM,displacementmap_vertex:uM,emissivemap_fragment:cM,emissivemap_pars_fragment:fM,colorspace_fragment:hM,colorspace_pars_fragment:dM,envmap_fragment:pM,envmap_common_pars_fragment:mM,envmap_pars_fragment:gM,envmap_pars_vertex:_M,envmap_physical_pars_fragment:CM,envmap_vertex:vM,fog_vertex:SM,fog_pars_vertex:xM,fog_fragment:yM,fog_pars_fragment:MM,gradientmap_pars_fragment:EM,lightmap_pars_fragment:TM,lights_lambert_fragment:AM,lights_lambert_pars_fragment:bM,lights_pars_begin:RM,lights_toon_fragment:wM,lights_toon_pars_fragment:DM,lights_phong_fragment:UM,lights_phong_pars_fragment:LM,lights_physical_fragment:NM,lights_physical_pars_fragment:OM,lights_fragment_begin:PM,lights_fragment_maps:zM,lights_fragment_end:BM,logdepthbuf_fragment:IM,logdepthbuf_pars_fragment:FM,logdepthbuf_pars_vertex:HM,logdepthbuf_vertex:GM,map_fragment:VM,map_pars_fragment:XM,map_particle_fragment:kM,map_particle_pars_fragment:WM,metalnessmap_fragment:qM,metalnessmap_pars_fragment:YM,morphinstance_vertex:jM,morphcolor_vertex:ZM,morphnormal_vertex:KM,morphtarget_pars_vertex:QM,morphtarget_vertex:JM,normal_fragment_begin:$M,normal_fragment_maps:tE,normal_pars_fragment:eE,normal_pars_vertex:nE,normal_vertex:iE,normalmap_pars_fragment:aE,clearcoat_normal_fragment_begin:rE,clearcoat_normal_fragment_maps:sE,clearcoat_pars_fragment:oE,iridescence_pars_fragment:lE,opaque_fragment:uE,packing:cE,premultiplied_alpha_fragment:fE,project_vertex:hE,dithering_fragment:dE,dithering_pars_fragment:pE,roughnessmap_fragment:mE,roughnessmap_pars_fragment:gE,shadowmap_pars_fragment:_E,shadowmap_pars_vertex:vE,shadowmap_vertex:SE,shadowmask_pars_fragment:xE,skinbase_vertex:yE,skinning_pars_vertex:ME,skinning_vertex:EE,skinnormal_vertex:TE,specularmap_fragment:AE,specularmap_pars_fragment:bE,tonemapping_fragment:RE,tonemapping_pars_fragment:CE,transmission_fragment:wE,transmission_pars_fragment:DE,uv_pars_fragment:UE,uv_pars_vertex:LE,uv_vertex:NE,worldpos_vertex:OE,background_vert:PE,background_frag:zE,backgroundCube_vert:BE,backgroundCube_frag:IE,cube_vert:FE,cube_frag:HE,depth_vert:GE,depth_frag:VE,distanceRGBA_vert:XE,distanceRGBA_frag:kE,equirect_vert:WE,equirect_frag:qE,linedashed_vert:YE,linedashed_frag:jE,meshbasic_vert:ZE,meshbasic_frag:KE,meshlambert_vert:QE,meshlambert_frag:JE,meshmatcap_vert:$E,meshmatcap_frag:tT,meshnormal_vert:eT,meshnormal_frag:nT,meshphong_vert:iT,meshphong_frag:aT,meshphysical_vert:rT,meshphysical_frag:sT,meshtoon_vert:oT,meshtoon_frag:lT,points_vert:uT,points_frag:cT,shadow_vert:fT,shadow_frag:hT,sprite_vert:dT,sprite_frag:pT},wt={common:{diffuse:{value:new Se(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ue},alphaMap:{value:null},alphaMapTransform:{value:new ue},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ue}},envmap:{envMap:{value:null},envMapRotation:{value:new ue},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ue}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ue}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ue},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ue},normalScale:{value:new se(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ue},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ue}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ue}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ue}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Se(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Se(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ue},alphaTest:{value:0},uvTransform:{value:new ue}},sprite:{diffuse:{value:new Se(16777215)},opacity:{value:1},center:{value:new se(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ue},alphaMap:{value:null},alphaMapTransform:{value:new ue},alphaTest:{value:0}}},xi={basic:{uniforms:An([wt.common,wt.specularmap,wt.envmap,wt.aomap,wt.lightmap,wt.fog]),vertexShader:le.meshbasic_vert,fragmentShader:le.meshbasic_frag},lambert:{uniforms:An([wt.common,wt.specularmap,wt.envmap,wt.aomap,wt.lightmap,wt.emissivemap,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.fog,wt.lights,{emissive:{value:new Se(0)}}]),vertexShader:le.meshlambert_vert,fragmentShader:le.meshlambert_frag},phong:{uniforms:An([wt.common,wt.specularmap,wt.envmap,wt.aomap,wt.lightmap,wt.emissivemap,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.fog,wt.lights,{emissive:{value:new Se(0)},specular:{value:new Se(1118481)},shininess:{value:30}}]),vertexShader:le.meshphong_vert,fragmentShader:le.meshphong_frag},standard:{uniforms:An([wt.common,wt.envmap,wt.aomap,wt.lightmap,wt.emissivemap,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.roughnessmap,wt.metalnessmap,wt.fog,wt.lights,{emissive:{value:new Se(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:le.meshphysical_vert,fragmentShader:le.meshphysical_frag},toon:{uniforms:An([wt.common,wt.aomap,wt.lightmap,wt.emissivemap,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.gradientmap,wt.fog,wt.lights,{emissive:{value:new Se(0)}}]),vertexShader:le.meshtoon_vert,fragmentShader:le.meshtoon_frag},matcap:{uniforms:An([wt.common,wt.bumpmap,wt.normalmap,wt.displacementmap,wt.fog,{matcap:{value:null}}]),vertexShader:le.meshmatcap_vert,fragmentShader:le.meshmatcap_frag},points:{uniforms:An([wt.points,wt.fog]),vertexShader:le.points_vert,fragmentShader:le.points_frag},dashed:{uniforms:An([wt.common,wt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:le.linedashed_vert,fragmentShader:le.linedashed_frag},depth:{uniforms:An([wt.common,wt.displacementmap]),vertexShader:le.depth_vert,fragmentShader:le.depth_frag},normal:{uniforms:An([wt.common,wt.bumpmap,wt.normalmap,wt.displacementmap,{opacity:{value:1}}]),vertexShader:le.meshnormal_vert,fragmentShader:le.meshnormal_frag},sprite:{uniforms:An([wt.sprite,wt.fog]),vertexShader:le.sprite_vert,fragmentShader:le.sprite_frag},background:{uniforms:{uvTransform:{value:new ue},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:le.background_vert,fragmentShader:le.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ue}},vertexShader:le.backgroundCube_vert,fragmentShader:le.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:le.cube_vert,fragmentShader:le.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:le.equirect_vert,fragmentShader:le.equirect_frag},distanceRGBA:{uniforms:An([wt.common,wt.displacementmap,{referencePosition:{value:new $},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:le.distanceRGBA_vert,fragmentShader:le.distanceRGBA_frag},shadow:{uniforms:An([wt.lights,wt.fog,{color:{value:new Se(0)},opacity:{value:1}}]),vertexShader:le.shadow_vert,fragmentShader:le.shadow_frag}};xi.physical={uniforms:An([xi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ue},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ue},clearcoatNormalScale:{value:new se(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ue},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ue},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ue},sheen:{value:0},sheenColor:{value:new Se(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ue},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ue},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ue},transmissionSamplerSize:{value:new se},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ue},attenuationDistance:{value:0},attenuationColor:{value:new Se(0)},specularColor:{value:new Se(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ue},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ue},anisotropyVector:{value:new se},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ue}}]),vertexShader:le.meshphysical_vert,fragmentShader:le.meshphysical_frag};const cu={r:0,b:0,g:0},or=new Qi,mT=new Pe;function gT(o,e,i,r,l,c,d){const h=new Se(0);let m=c===!0?0:1,p,g,S=null,x=0,M=null;function R(L){let D=L.isScene===!0?L.background:null;return D&&D.isTexture&&(D=(L.backgroundBlurriness>0?i:e).get(D)),D}function C(L){let D=!1;const P=R(L);P===null?v(h,m):P&&P.isColor&&(v(P,1),D=!0);const tt=o.xr.getEnvironmentBlendMode();tt==="additive"?r.buffers.color.setClear(0,0,0,1,d):tt==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,d),(o.autoClear||D)&&o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil)}function y(L,D){const P=R(D);P&&(P.isCubeTexture||P.mapping===Eu)?(g===void 0&&(g=new Rn(new Ts(1,1,1),new Ji({name:"BackgroundCubeMaterial",uniforms:Ms(xi.backgroundCube.uniforms),vertexShader:xi.backgroundCube.vertexShader,fragmentShader:xi.backgroundCube.fragmentShader,side:Cn,depthTest:!1,depthWrite:!1,fog:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(tt,I,N){this.matrixWorld.copyPosition(N.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(g)),or.copy(D.backgroundRotation),or.x*=-1,or.y*=-1,or.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(or.y*=-1,or.z*=-1),g.material.uniforms.envMap.value=P,g.material.uniforms.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=D.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(mT.makeRotationFromEuler(or)),g.material.toneMapped=Ne.getTransfer(P.colorSpace)!==Fe,(S!==P||x!==P.version||M!==o.toneMapping)&&(g.material.needsUpdate=!0,S=P,x=P.version,M=o.toneMapping),g.layers.enableAll(),L.unshift(g,g.geometry,g.material,0,0,null)):P&&P.isTexture&&(p===void 0&&(p=new Rn(new bu(2,2),new Ji({name:"BackgroundMaterial",uniforms:Ms(xi.background.uniforms),vertexShader:xi.background.vertexShader,fragmentShader:xi.background.fragmentShader,side:Oa,depthTest:!1,depthWrite:!1,fog:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(p)),p.material.uniforms.t2D.value=P,p.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,p.material.toneMapped=Ne.getTransfer(P.colorSpace)!==Fe,P.matrixAutoUpdate===!0&&P.updateMatrix(),p.material.uniforms.uvTransform.value.copy(P.matrix),(S!==P||x!==P.version||M!==o.toneMapping)&&(p.material.needsUpdate=!0,S=P,x=P.version,M=o.toneMapping),p.layers.enableAll(),L.unshift(p,p.geometry,p.material,0,0,null))}function v(L,D){L.getRGB(cu,wv(o)),r.buffers.color.setClear(cu.r,cu.g,cu.b,D,d)}return{getClearColor:function(){return h},setClearColor:function(L,D=1){h.set(L),m=D,v(h,m)},getClearAlpha:function(){return m},setClearAlpha:function(L){m=L,v(h,m)},render:C,addToRenderList:y}}function _T(o,e){const i=o.getParameter(o.MAX_VERTEX_ATTRIBS),r={},l=x(null);let c=l,d=!1;function h(E,q,lt,G,dt){let pt=!1;const F=S(G,lt,q);c!==F&&(c=F,p(c.object)),pt=M(E,G,lt,dt),pt&&R(E,G,lt,dt),dt!==null&&e.update(dt,o.ELEMENT_ARRAY_BUFFER),(pt||d)&&(d=!1,P(E,q,lt,G),dt!==null&&o.bindBuffer(o.ELEMENT_ARRAY_BUFFER,e.get(dt).buffer))}function m(){return o.createVertexArray()}function p(E){return o.bindVertexArray(E)}function g(E){return o.deleteVertexArray(E)}function S(E,q,lt){const G=lt.wireframe===!0;let dt=r[E.id];dt===void 0&&(dt={},r[E.id]=dt);let pt=dt[q.id];pt===void 0&&(pt={},dt[q.id]=pt);let F=pt[G];return F===void 0&&(F=x(m()),pt[G]=F),F}function x(E){const q=[],lt=[],G=[];for(let dt=0;dt<i;dt++)q[dt]=0,lt[dt]=0,G[dt]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:q,enabledAttributes:lt,attributeDivisors:G,object:E,attributes:{},index:null}}function M(E,q,lt,G){const dt=c.attributes,pt=q.attributes;let F=0;const K=lt.getAttributes();for(const W in K)if(K[W].location>=0){const ut=dt[W];let U=pt[W];if(U===void 0&&(W==="instanceMatrix"&&E.instanceMatrix&&(U=E.instanceMatrix),W==="instanceColor"&&E.instanceColor&&(U=E.instanceColor)),ut===void 0||ut.attribute!==U||U&&ut.data!==U.data)return!0;F++}return c.attributesNum!==F||c.index!==G}function R(E,q,lt,G){const dt={},pt=q.attributes;let F=0;const K=lt.getAttributes();for(const W in K)if(K[W].location>=0){let ut=pt[W];ut===void 0&&(W==="instanceMatrix"&&E.instanceMatrix&&(ut=E.instanceMatrix),W==="instanceColor"&&E.instanceColor&&(ut=E.instanceColor));const U={};U.attribute=ut,ut&&ut.data&&(U.data=ut.data),dt[W]=U,F++}c.attributes=dt,c.attributesNum=F,c.index=G}function C(){const E=c.newAttributes;for(let q=0,lt=E.length;q<lt;q++)E[q]=0}function y(E){v(E,0)}function v(E,q){const lt=c.newAttributes,G=c.enabledAttributes,dt=c.attributeDivisors;lt[E]=1,G[E]===0&&(o.enableVertexAttribArray(E),G[E]=1),dt[E]!==q&&(o.vertexAttribDivisor(E,q),dt[E]=q)}function L(){const E=c.newAttributes,q=c.enabledAttributes;for(let lt=0,G=q.length;lt<G;lt++)q[lt]!==E[lt]&&(o.disableVertexAttribArray(lt),q[lt]=0)}function D(E,q,lt,G,dt,pt,F){F===!0?o.vertexAttribIPointer(E,q,lt,dt,pt):o.vertexAttribPointer(E,q,lt,G,dt,pt)}function P(E,q,lt,G){C();const dt=G.attributes,pt=lt.getAttributes(),F=q.defaultAttributeValues;for(const K in pt){const W=pt[K];if(W.location>=0){let vt=dt[K];if(vt===void 0&&(K==="instanceMatrix"&&E.instanceMatrix&&(vt=E.instanceMatrix),K==="instanceColor"&&E.instanceColor&&(vt=E.instanceColor)),vt!==void 0){const ut=vt.normalized,U=vt.itemSize,Z=e.get(vt);if(Z===void 0)continue;const xt=Z.buffer,V=Z.type,ct=Z.bytesPerElement,Et=V===o.INT||V===o.UNSIGNED_INT||vt.gpuType===hv;if(vt.isInterleavedBufferAttribute){const yt=vt.data,Xt=yt.stride,Bt=vt.offset;if(yt.isInstancedInterleavedBuffer){for(let j=0;j<W.locationSize;j++)v(W.location+j,yt.meshPerAttribute);E.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=yt.meshPerAttribute*yt.count)}else for(let j=0;j<W.locationSize;j++)y(W.location+j);o.bindBuffer(o.ARRAY_BUFFER,xt);for(let j=0;j<W.locationSize;j++)D(W.location+j,U/W.locationSize,V,ut,Xt*ct,(Bt+U/W.locationSize*j)*ct,Et)}else{if(vt.isInstancedBufferAttribute){for(let yt=0;yt<W.locationSize;yt++)v(W.location+yt,vt.meshPerAttribute);E.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=vt.meshPerAttribute*vt.count)}else for(let yt=0;yt<W.locationSize;yt++)y(W.location+yt);o.bindBuffer(o.ARRAY_BUFFER,xt);for(let yt=0;yt<W.locationSize;yt++)D(W.location+yt,U/W.locationSize,V,ut,U*ct,U/W.locationSize*yt*ct,Et)}}else if(F!==void 0){const ut=F[K];if(ut!==void 0)switch(ut.length){case 2:o.vertexAttrib2fv(W.location,ut);break;case 3:o.vertexAttrib3fv(W.location,ut);break;case 4:o.vertexAttrib4fv(W.location,ut);break;default:o.vertexAttrib1fv(W.location,ut)}}}}L()}function tt(){O();for(const E in r){const q=r[E];for(const lt in q){const G=q[lt];for(const dt in G)g(G[dt].object),delete G[dt];delete q[lt]}delete r[E]}}function I(E){if(r[E.id]===void 0)return;const q=r[E.id];for(const lt in q){const G=q[lt];for(const dt in G)g(G[dt].object),delete G[dt];delete q[lt]}delete r[E.id]}function N(E){for(const q in r){const lt=r[q];if(lt[E.id]===void 0)continue;const G=lt[E.id];for(const dt in G)g(G[dt].object),delete G[dt];delete lt[E.id]}}function O(){T(),d=!0,c!==l&&(c=l,p(c.object))}function T(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:O,resetDefaultState:T,dispose:tt,releaseStatesOfGeometry:I,releaseStatesOfProgram:N,initAttributes:C,enableAttribute:y,disableUnusedAttributes:L}}function vT(o,e,i){let r;function l(p){r=p}function c(p,g){o.drawArrays(r,p,g),i.update(g,r,1)}function d(p,g,S){S!==0&&(o.drawArraysInstanced(r,p,g,S),i.update(g,r,S))}function h(p,g,S){if(S===0)return;const x=e.get("WEBGL_multi_draw");if(x===null)for(let M=0;M<S;M++)this.render(p[M],g[M]);else{x.multiDrawArraysWEBGL(r,p,0,g,0,S);let M=0;for(let R=0;R<S;R++)M+=g[R];i.update(M,r,1)}}function m(p,g,S,x){if(S===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let R=0;R<p.length;R++)d(p[R],g[R],x[R]);else{M.multiDrawArraysInstancedWEBGL(r,p,0,g,0,x,0,S);let R=0;for(let C=0;C<S;C++)R+=g[C];for(let C=0;C<x.length;C++)i.update(R,r,x[C])}}this.setMode=l,this.render=c,this.renderInstances=d,this.renderMultiDraw=h,this.renderMultiDrawInstances=m}function ST(o,e,i,r){let l;function c(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const I=e.get("EXT_texture_filter_anisotropic");l=o.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function d(I){return!(I!==Mi&&r.convert(I)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(I){const N=I===Tu&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(I!==Pa&&r.convert(I)!==o.getParameter(o.IMPLEMENTATION_COLOR_READ_TYPE)&&I!==Zi&&!N)}function m(I){if(I==="highp"){if(o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.HIGH_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&o.getShaderPrecisionFormat(o.VERTEX_SHADER,o.MEDIUM_FLOAT).precision>0&&o.getShaderPrecisionFormat(o.FRAGMENT_SHADER,o.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=i.precision!==void 0?i.precision:"highp";const g=m(p);g!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",g,"instead."),p=g);const S=i.logarithmicDepthBuffer===!0,x=o.getParameter(o.MAX_TEXTURE_IMAGE_UNITS),M=o.getParameter(o.MAX_VERTEX_TEXTURE_IMAGE_UNITS),R=o.getParameter(o.MAX_TEXTURE_SIZE),C=o.getParameter(o.MAX_CUBE_MAP_TEXTURE_SIZE),y=o.getParameter(o.MAX_VERTEX_ATTRIBS),v=o.getParameter(o.MAX_VERTEX_UNIFORM_VECTORS),L=o.getParameter(o.MAX_VARYING_VECTORS),D=o.getParameter(o.MAX_FRAGMENT_UNIFORM_VECTORS),P=M>0,tt=o.getParameter(o.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:d,textureTypeReadable:h,precision:p,logarithmicDepthBuffer:S,maxTextures:x,maxVertexTextures:M,maxTextureSize:R,maxCubemapSize:C,maxAttributes:y,maxVertexUniforms:v,maxVaryings:L,maxFragmentUniforms:D,vertexTextures:P,maxSamples:tt}}function xT(o){const e=this;let i=null,r=0,l=!1,c=!1;const d=new Yi,h=new ue,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(S,x){const M=S.length!==0||x||r!==0||l;return l=x,r=S.length,M},this.beginShadows=function(){c=!0,g(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(S,x){i=g(S,x,0)},this.setState=function(S,x,M){const R=S.clippingPlanes,C=S.clipIntersection,y=S.clipShadows,v=o.get(S);if(!l||R===null||R.length===0||c&&!y)c?g(null):p();else{const L=c?0:r,D=L*4;let P=v.clippingState||null;m.value=P,P=g(R,x,D,M);for(let tt=0;tt!==D;++tt)P[tt]=i[tt];v.clippingState=P,this.numIntersection=C?this.numPlanes:0,this.numPlanes+=L}};function p(){m.value!==i&&(m.value=i,m.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function g(S,x,M,R){const C=S!==null?S.length:0;let y=null;if(C!==0){if(y=m.value,R!==!0||y===null){const v=M+C*4,L=x.matrixWorldInverse;h.getNormalMatrix(L),(y===null||y.length<v)&&(y=new Float32Array(v));for(let D=0,P=M;D!==C;++D,P+=4)d.copy(S[D]).applyMatrix4(L,h),d.normal.toArray(y,P),y[P+3]=d.constant}m.value=y,m.needsUpdate=!0}return e.numPlanes=C,e.numIntersection=0,y}}function yT(o){let e=new WeakMap;function i(d,h){return h===bh?d.mapping=Ss:h===Rh&&(d.mapping=xs),d}function r(d){if(d&&d.isTexture){const h=d.mapping;if(h===bh||h===Rh)if(e.has(d)){const m=e.get(d).texture;return i(m,d.mapping)}else{const m=d.image;if(m&&m.height>0){const p=new Ly(m.height);return p.fromEquirectangularTexture(o,d),e.set(d,p),d.addEventListener("dispose",l),i(p.texture,d.mapping)}else return null}}return d}function l(d){const h=d.target;h.removeEventListener("dispose",l);const m=e.get(h);m!==void 0&&(e.delete(h),m.dispose())}function c(){e=new WeakMap}return{get:r,dispose:c}}class Ov extends Uv{constructor(e=-1,i=1,r=1,l=-1,c=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=r,this.bottom=l,this.near=c,this.far=d,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,r,l,c,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=r-e,d=r+e,h=l+i,m=l-i;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,d=c+p*this.view.width,h-=g*this.view.offsetY,m=h-g*this.view.height}this.projectionMatrix.makeOrthographic(c,d,h,m,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}const ms=4,U_=[.125,.215,.35,.446,.526,.582],fr=20,mh=new Ov,L_=new Se;let gh=null,_h=0,vh=0,Sh=!1;const ur=(1+Math.sqrt(5))/2,ds=1/ur,N_=[new $(-ur,ds,0),new $(ur,ds,0),new $(-ds,0,ur),new $(ds,0,ur),new $(0,ur,-ds),new $(0,ur,ds),new $(-1,1,-1),new $(1,1,-1),new $(-1,1,1),new $(1,1,1)];class O_{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,i=0,r=.1,l=100){gh=this._renderer.getRenderTarget(),_h=this._renderer.getActiveCubeFace(),vh=this._renderer.getActiveMipmapLevel(),Sh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,r,l,c),i>0&&this._blur(c,0,0,i),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=B_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=z_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(gh,_h,vh),this._renderer.xr.enabled=Sh,e.scissorTest=!1,fu(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===Ss||e.mapping===xs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),gh=this._renderer.getRenderTarget(),_h=this._renderer.getActiveCubeFace(),vh=this._renderer.getActiveMipmapLevel(),Sh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:fi,minFilter:fi,generateMipmaps:!1,type:Tu,format:Mi,colorSpace:za,depthBuffer:!1},l=P_(e,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=P_(e,i,r);const{_lodMax:c}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=MT(c)),this._blurMaterial=ET(c,e,i)}return l}_compileMaterial(e){const i=new Rn(this._lodPlanes[0],e);this._renderer.compile(i,mh)}_sceneToCubeUV(e,i,r,l){const h=new ai(90,1,i,r),m=[1,-1,1,1,1,1],p=[1,1,1,-1,-1,-1],g=this._renderer,S=g.autoClear,x=g.toneMapping;g.getClearColor(L_),g.toneMapping=Na,g.autoClear=!1;const M=new bv({name:"PMREM.Background",side:Cn,depthWrite:!1,depthTest:!1}),R=new Rn(new Ts,M);let C=!1;const y=e.background;y?y.isColor&&(M.color.copy(y),e.background=null,C=!0):(M.color.copy(L_),C=!0);for(let v=0;v<6;v++){const L=v%3;L===0?(h.up.set(0,m[v],0),h.lookAt(p[v],0,0)):L===1?(h.up.set(0,0,m[v]),h.lookAt(0,p[v],0)):(h.up.set(0,m[v],0),h.lookAt(0,0,p[v]));const D=this._cubeSize;fu(l,L*D,v>2?D:0,D,D),g.setRenderTarget(l),C&&g.render(R,h),g.render(e,h)}R.geometry.dispose(),R.material.dispose(),g.toneMapping=x,g.autoClear=S,e.background=y}_textureToCubeUV(e,i){const r=this._renderer,l=e.mapping===Ss||e.mapping===xs;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=B_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=z_());const c=l?this._cubemapMaterial:this._equirectMaterial,d=new Rn(this._lodPlanes[0],c),h=c.uniforms;h.envMap.value=e;const m=this._cubeSize;fu(i,0,0,3*m,2*m),r.setRenderTarget(i),r.render(d,mh)}_applyPMREM(e){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodPlanes.length;for(let c=1;c<l;c++){const d=Math.sqrt(this._sigmas[c]*this._sigmas[c]-this._sigmas[c-1]*this._sigmas[c-1]),h=N_[(l-c-1)%N_.length];this._blur(e,c-1,c,d,h)}i.autoClear=r}_blur(e,i,r,l,c){const d=this._pingPongRenderTarget;this._halfBlur(e,d,i,r,l,"latitudinal",c),this._halfBlur(d,e,r,r,l,"longitudinal",c)}_halfBlur(e,i,r,l,c,d,h){const m=this._renderer,p=this._blurMaterial;d!=="latitudinal"&&d!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,S=new Rn(this._lodPlanes[l],p),x=p.uniforms,M=this._sizeLods[r]-1,R=isFinite(c)?Math.PI/(2*M):2*Math.PI/(2*fr-1),C=c/R,y=isFinite(c)?1+Math.floor(g*C):fr;y>fr&&console.warn(`sigmaRadians, ${c}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${fr}`);const v=[];let L=0;for(let N=0;N<fr;++N){const O=N/C,T=Math.exp(-O*O/2);v.push(T),N===0?L+=T:N<y&&(L+=2*T)}for(let N=0;N<v.length;N++)v[N]=v[N]/L;x.envMap.value=e.texture,x.samples.value=y,x.weights.value=v,x.latitudinal.value=d==="latitudinal",h&&(x.poleAxis.value=h);const{_lodMax:D}=this;x.dTheta.value=R,x.mipInt.value=D-r;const P=this._sizeLods[l],tt=3*P*(l>D-ms?l-D+ms:0),I=4*(this._cubeSize-P);fu(i,tt,I,3*P,2*P),m.setRenderTarget(i),m.render(S,mh)}}function MT(o){const e=[],i=[],r=[];let l=o;const c=o-ms+1+U_.length;for(let d=0;d<c;d++){const h=Math.pow(2,l);i.push(h);let m=1/h;d>o-ms?m=U_[d-o+ms-1]:d===0&&(m=0),r.push(m);const p=1/(h-2),g=-p,S=1+p,x=[g,g,S,g,S,S,g,g,S,S,g,S],M=6,R=6,C=3,y=2,v=1,L=new Float32Array(C*R*M),D=new Float32Array(y*R*M),P=new Float32Array(v*R*M);for(let I=0;I<M;I++){const N=I%3*2/3-1,O=I>2?0:-1,T=[N,O,0,N+2/3,O,0,N+2/3,O+1,0,N,O,0,N+2/3,O+1,0,N,O+1,0];L.set(T,C*R*I),D.set(x,y*R*I);const E=[I,I,I,I,I,I];P.set(E,v*R*I)}const tt=new Ba;tt.setAttribute("position",new hi(L,C)),tt.setAttribute("uv",new hi(D,y)),tt.setAttribute("faceIndex",new hi(P,v)),e.push(tt),l>ms&&l--}return{lodPlanes:e,sizeLods:i,sigmas:r}}function P_(o,e,i){const r=new pr(o,e,i);return r.texture.mapping=Eu,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function fu(o,e,i,r,l){o.viewport.set(e,i,r,l),o.scissor.set(e,i,r,l)}function ET(o,e,i){const r=new Float32Array(fr),l=new $(0,1,0);return new Ji({name:"SphericalGaussianBlur",defines:{n:fr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Ih(),fragmentShader:`

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
		`,blending:La,depthTest:!1,depthWrite:!1})}function z_(){return new Ji({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ih(),fragmentShader:`

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
		`,blending:La,depthTest:!1,depthWrite:!1})}function B_(){return new Ji({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ih(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:La,depthTest:!1,depthWrite:!1})}function Ih(){return`

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
	`}function TT(o){let e=new WeakMap,i=null;function r(h){if(h&&h.isTexture){const m=h.mapping,p=m===bh||m===Rh,g=m===Ss||m===xs;if(p||g){let S=e.get(h);const x=S!==void 0?S.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==x)return i===null&&(i=new O_(o)),S=p?i.fromEquirectangular(h,S):i.fromCubemap(h,S),S.texture.pmremVersion=h.pmremVersion,e.set(h,S),S.texture;if(S!==void 0)return S.texture;{const M=h.image;return p&&M&&M.height>0||g&&M&&l(M)?(i===null&&(i=new O_(o)),S=p?i.fromEquirectangular(h):i.fromCubemap(h),S.texture.pmremVersion=h.pmremVersion,e.set(h,S),h.addEventListener("dispose",c),S.texture):null}}}return h}function l(h){let m=0;const p=6;for(let g=0;g<p;g++)h[g]!==void 0&&m++;return m===p}function c(h){const m=h.target;m.removeEventListener("dispose",c);const p=e.get(m);p!==void 0&&(e.delete(m),p.dispose())}function d(){e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:d}}function AT(o){const e={};function i(r){if(e[r]!==void 0)return e[r];let l;switch(r){case"WEBGL_depth_texture":l=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":l=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":l=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":l=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:l=o.getExtension(r)}return e[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&console.warn("THREE.WebGLRenderer: "+r+" extension not supported."),l}}}function bT(o,e,i,r){const l={},c=new WeakMap;function d(S){const x=S.target;x.index!==null&&e.remove(x.index);for(const R in x.attributes)e.remove(x.attributes[R]);for(const R in x.morphAttributes){const C=x.morphAttributes[R];for(let y=0,v=C.length;y<v;y++)e.remove(C[y])}x.removeEventListener("dispose",d),delete l[x.id];const M=c.get(x);M&&(e.remove(M),c.delete(x)),r.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,i.memory.geometries--}function h(S,x){return l[x.id]===!0||(x.addEventListener("dispose",d),l[x.id]=!0,i.memory.geometries++),x}function m(S){const x=S.attributes;for(const R in x)e.update(x[R],o.ARRAY_BUFFER);const M=S.morphAttributes;for(const R in M){const C=M[R];for(let y=0,v=C.length;y<v;y++)e.update(C[y],o.ARRAY_BUFFER)}}function p(S){const x=[],M=S.index,R=S.attributes.position;let C=0;if(M!==null){const L=M.array;C=M.version;for(let D=0,P=L.length;D<P;D+=3){const tt=L[D+0],I=L[D+1],N=L[D+2];x.push(tt,I,I,N,N,tt)}}else if(R!==void 0){const L=R.array;C=R.version;for(let D=0,P=L.length/3-1;D<P;D+=3){const tt=D+0,I=D+1,N=D+2;x.push(tt,I,I,N,N,tt)}}else return;const y=new(yv(x)?Cv:Rv)(x,1);y.version=C;const v=c.get(S);v&&e.remove(v),c.set(S,y)}function g(S){const x=c.get(S);if(x){const M=S.index;M!==null&&x.version<M.version&&p(S)}else p(S);return c.get(S)}return{get:h,update:m,getWireframeAttribute:g}}function RT(o,e,i){let r;function l(x){r=x}let c,d;function h(x){c=x.type,d=x.bytesPerElement}function m(x,M){o.drawElements(r,M,c,x*d),i.update(M,r,1)}function p(x,M,R){R!==0&&(o.drawElementsInstanced(r,M,c,x*d,R),i.update(M,r,R))}function g(x,M,R){if(R===0)return;const C=e.get("WEBGL_multi_draw");if(C===null)for(let y=0;y<R;y++)this.render(x[y]/d,M[y]);else{C.multiDrawElementsWEBGL(r,M,0,c,x,0,R);let y=0;for(let v=0;v<R;v++)y+=M[v];i.update(y,r,1)}}function S(x,M,R,C){if(R===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let v=0;v<x.length;v++)p(x[v]/d,M[v],C[v]);else{y.multiDrawElementsInstancedWEBGL(r,M,0,c,x,0,C,0,R);let v=0;for(let L=0;L<R;L++)v+=M[L];for(let L=0;L<C.length;L++)i.update(v,r,C[L])}}this.setMode=l,this.setIndex=h,this.render=m,this.renderInstances=p,this.renderMultiDraw=g,this.renderMultiDrawInstances=S}function CT(o){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(c,d,h){switch(i.calls++,d){case o.TRIANGLES:i.triangles+=h*(c/3);break;case o.LINES:i.lines+=h*(c/2);break;case o.LINE_STRIP:i.lines+=h*(c-1);break;case o.LINE_LOOP:i.lines+=h*c;break;case o.POINTS:i.points+=h*c;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",d);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:r}}function wT(o,e,i){const r=new WeakMap,l=new un;function c(d,h,m){const p=d.morphTargetInfluences,g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,S=g!==void 0?g.length:0;let x=r.get(h);if(x===void 0||x.count!==S){let E=function(){O.dispose(),r.delete(h),h.removeEventListener("dispose",E)};var M=E;x!==void 0&&x.texture.dispose();const R=h.morphAttributes.position!==void 0,C=h.morphAttributes.normal!==void 0,y=h.morphAttributes.color!==void 0,v=h.morphAttributes.position||[],L=h.morphAttributes.normal||[],D=h.morphAttributes.color||[];let P=0;R===!0&&(P=1),C===!0&&(P=2),y===!0&&(P=3);let tt=h.attributes.position.count*P,I=1;tt>e.maxTextureSize&&(I=Math.ceil(tt/e.maxTextureSize),tt=e.maxTextureSize);const N=new Float32Array(tt*I*4*S),O=new Ev(N,tt,I,S);O.type=Zi,O.needsUpdate=!0;const T=P*4;for(let q=0;q<S;q++){const lt=v[q],G=L[q],dt=D[q],pt=tt*I*4*q;for(let F=0;F<lt.count;F++){const K=F*T;R===!0&&(l.fromBufferAttribute(lt,F),N[pt+K+0]=l.x,N[pt+K+1]=l.y,N[pt+K+2]=l.z,N[pt+K+3]=0),C===!0&&(l.fromBufferAttribute(G,F),N[pt+K+4]=l.x,N[pt+K+5]=l.y,N[pt+K+6]=l.z,N[pt+K+7]=0),y===!0&&(l.fromBufferAttribute(dt,F),N[pt+K+8]=l.x,N[pt+K+9]=l.y,N[pt+K+10]=l.z,N[pt+K+11]=dt.itemSize===4?l.w:1)}}x={count:S,texture:O,size:new se(tt,I)},r.set(h,x),h.addEventListener("dispose",E)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)m.getUniforms().setValue(o,"morphTexture",d.morphTexture,i);else{let R=0;for(let y=0;y<p.length;y++)R+=p[y];const C=h.morphTargetsRelative?1:1-R;m.getUniforms().setValue(o,"morphTargetBaseInfluence",C),m.getUniforms().setValue(o,"morphTargetInfluences",p)}m.getUniforms().setValue(o,"morphTargetsTexture",x.texture,i),m.getUniforms().setValue(o,"morphTargetsTextureSize",x.size)}return{update:c}}function DT(o,e,i,r){let l=new WeakMap;function c(m){const p=r.render.frame,g=m.geometry,S=e.get(m,g);if(l.get(S)!==p&&(e.update(S),l.set(S,p)),m.isInstancedMesh&&(m.hasEventListener("dispose",h)===!1&&m.addEventListener("dispose",h),l.get(m)!==p&&(i.update(m.instanceMatrix,o.ARRAY_BUFFER),m.instanceColor!==null&&i.update(m.instanceColor,o.ARRAY_BUFFER),l.set(m,p))),m.isSkinnedMesh){const x=m.skeleton;l.get(x)!==p&&(x.update(),l.set(x,p))}return S}function d(){l=new WeakMap}function h(m){const p=m.target;p.removeEventListener("dispose",h),i.remove(p.instanceMatrix),p.instanceColor!==null&&i.remove(p.instanceColor)}return{update:c,dispose:d}}class Pv extends wn{constructor(e,i,r,l,c,d,h,m,p,g){if(g=g!==void 0?g:_s,g!==_s&&g!==wo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&g===_s&&(r=ys),r===void 0&&g===wo&&(r=Do),super(null,l,c,d,h,m,g,r,p),this.isDepthTexture=!0,this.image={width:e,height:i},this.magFilter=h!==void 0?h:In,this.minFilter=m!==void 0?m:In,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}const zv=new wn,Bv=new Pv(1,1);Bv.compareFunction=xv;const Iv=new Ev,Fv=new _y,Hv=new Lv,I_=[],F_=[],H_=new Float32Array(16),G_=new Float32Array(9),V_=new Float32Array(4);function As(o,e,i){const r=o[0];if(r<=0||r>0)return o;const l=e*i;let c=I_[l];if(c===void 0&&(c=new Float32Array(l),I_[l]=c),e!==0){r.toArray(c,0);for(let d=1,h=0;d!==e;++d)h+=i,o[d].toArray(c,h)}return c}function an(o,e){if(o.length!==e.length)return!1;for(let i=0,r=o.length;i<r;i++)if(o[i]!==e[i])return!1;return!0}function rn(o,e){for(let i=0,r=e.length;i<r;i++)o[i]=e[i]}function Ru(o,e){let i=F_[e];i===void 0&&(i=new Int32Array(e),F_[e]=i);for(let r=0;r!==e;++r)i[r]=o.allocateTextureUnit();return i}function UT(o,e){const i=this.cache;i[0]!==e&&(o.uniform1f(this.addr,e),i[0]=e)}function LT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(an(i,e))return;o.uniform2fv(this.addr,e),rn(i,e)}}function NT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(an(i,e))return;o.uniform3fv(this.addr,e),rn(i,e)}}function OT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(an(i,e))return;o.uniform4fv(this.addr,e),rn(i,e)}}function PT(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(an(i,e))return;o.uniformMatrix2fv(this.addr,!1,e),rn(i,e)}else{if(an(i,r))return;V_.set(r),o.uniformMatrix2fv(this.addr,!1,V_),rn(i,r)}}function zT(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(an(i,e))return;o.uniformMatrix3fv(this.addr,!1,e),rn(i,e)}else{if(an(i,r))return;G_.set(r),o.uniformMatrix3fv(this.addr,!1,G_),rn(i,r)}}function BT(o,e){const i=this.cache,r=e.elements;if(r===void 0){if(an(i,e))return;o.uniformMatrix4fv(this.addr,!1,e),rn(i,e)}else{if(an(i,r))return;H_.set(r),o.uniformMatrix4fv(this.addr,!1,H_),rn(i,r)}}function IT(o,e){const i=this.cache;i[0]!==e&&(o.uniform1i(this.addr,e),i[0]=e)}function FT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(an(i,e))return;o.uniform2iv(this.addr,e),rn(i,e)}}function HT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(an(i,e))return;o.uniform3iv(this.addr,e),rn(i,e)}}function GT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(an(i,e))return;o.uniform4iv(this.addr,e),rn(i,e)}}function VT(o,e){const i=this.cache;i[0]!==e&&(o.uniform1ui(this.addr,e),i[0]=e)}function XT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(an(i,e))return;o.uniform2uiv(this.addr,e),rn(i,e)}}function kT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(an(i,e))return;o.uniform3uiv(this.addr,e),rn(i,e)}}function WT(o,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(an(i,e))return;o.uniform4uiv(this.addr,e),rn(i,e)}}function qT(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l);const c=this.type===o.SAMPLER_2D_SHADOW?Bv:zv;i.setTexture2D(e||c,l)}function YT(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(e||Fv,l)}function jT(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(e||Hv,l)}function ZT(o,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(o.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(e||Iv,l)}function KT(o){switch(o){case 5126:return UT;case 35664:return LT;case 35665:return NT;case 35666:return OT;case 35674:return PT;case 35675:return zT;case 35676:return BT;case 5124:case 35670:return IT;case 35667:case 35671:return FT;case 35668:case 35672:return HT;case 35669:case 35673:return GT;case 5125:return VT;case 36294:return XT;case 36295:return kT;case 36296:return WT;case 35678:case 36198:case 36298:case 36306:case 35682:return qT;case 35679:case 36299:case 36307:return YT;case 35680:case 36300:case 36308:case 36293:return jT;case 36289:case 36303:case 36311:case 36292:return ZT}}function QT(o,e){o.uniform1fv(this.addr,e)}function JT(o,e){const i=As(e,this.size,2);o.uniform2fv(this.addr,i)}function $T(o,e){const i=As(e,this.size,3);o.uniform3fv(this.addr,i)}function tA(o,e){const i=As(e,this.size,4);o.uniform4fv(this.addr,i)}function eA(o,e){const i=As(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,i)}function nA(o,e){const i=As(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,i)}function iA(o,e){const i=As(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,i)}function aA(o,e){o.uniform1iv(this.addr,e)}function rA(o,e){o.uniform2iv(this.addr,e)}function sA(o,e){o.uniform3iv(this.addr,e)}function oA(o,e){o.uniform4iv(this.addr,e)}function lA(o,e){o.uniform1uiv(this.addr,e)}function uA(o,e){o.uniform2uiv(this.addr,e)}function cA(o,e){o.uniform3uiv(this.addr,e)}function fA(o,e){o.uniform4uiv(this.addr,e)}function hA(o,e,i){const r=this.cache,l=e.length,c=Ru(i,l);an(r,c)||(o.uniform1iv(this.addr,c),rn(r,c));for(let d=0;d!==l;++d)i.setTexture2D(e[d]||zv,c[d])}function dA(o,e,i){const r=this.cache,l=e.length,c=Ru(i,l);an(r,c)||(o.uniform1iv(this.addr,c),rn(r,c));for(let d=0;d!==l;++d)i.setTexture3D(e[d]||Fv,c[d])}function pA(o,e,i){const r=this.cache,l=e.length,c=Ru(i,l);an(r,c)||(o.uniform1iv(this.addr,c),rn(r,c));for(let d=0;d!==l;++d)i.setTextureCube(e[d]||Hv,c[d])}function mA(o,e,i){const r=this.cache,l=e.length,c=Ru(i,l);an(r,c)||(o.uniform1iv(this.addr,c),rn(r,c));for(let d=0;d!==l;++d)i.setTexture2DArray(e[d]||Iv,c[d])}function gA(o){switch(o){case 5126:return QT;case 35664:return JT;case 35665:return $T;case 35666:return tA;case 35674:return eA;case 35675:return nA;case 35676:return iA;case 5124:case 35670:return aA;case 35667:case 35671:return rA;case 35668:case 35672:return sA;case 35669:case 35673:return oA;case 5125:return lA;case 36294:return uA;case 36295:return cA;case 36296:return fA;case 35678:case 36198:case 36298:case 36306:case 35682:return hA;case 35679:case 36299:case 36307:return dA;case 35680:case 36300:case 36308:case 36293:return pA;case 36289:case 36303:case 36311:case 36292:return mA}}class _A{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.setValue=KT(i.type)}}class vA{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=gA(i.type)}}class SA{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,r){const l=this.seq;for(let c=0,d=l.length;c!==d;++c){const h=l[c];h.setValue(e,i[h.id],r)}}}const xh=/(\w+)(\])?(\[|\.)?/g;function X_(o,e){o.seq.push(e),o.map[e.id]=e}function xA(o,e,i){const r=o.name,l=r.length;for(xh.lastIndex=0;;){const c=xh.exec(r),d=xh.lastIndex;let h=c[1];const m=c[2]==="]",p=c[3];if(m&&(h=h|0),p===void 0||p==="["&&d+2===l){X_(i,p===void 0?new _A(h,o,e):new vA(h,o,e));break}else{let S=i.map[h];S===void 0&&(S=new SA(h),X_(i,S)),i=S}}}class gu{constructor(e,i){this.seq=[],this.map={};const r=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let l=0;l<r;++l){const c=e.getActiveUniform(i,l),d=e.getUniformLocation(i,c.name);xA(c,d,this)}}setValue(e,i,r,l){const c=this.map[i];c!==void 0&&c.setValue(e,r,l)}setOptional(e,i,r){const l=i[r];l!==void 0&&this.setValue(e,r,l)}static upload(e,i,r,l){for(let c=0,d=i.length;c!==d;++c){const h=i[c],m=r[h.id];m.needsUpdate!==!1&&h.setValue(e,m.value,l)}}static seqWithValue(e,i){const r=[];for(let l=0,c=e.length;l!==c;++l){const d=e[l];d.id in i&&r.push(d)}return r}}function k_(o,e,i){const r=o.createShader(e);return o.shaderSource(r,i),o.compileShader(r),r}const yA=37297;let MA=0;function EA(o,e){const i=o.split(`
`),r=[],l=Math.max(e-6,0),c=Math.min(e+6,i.length);for(let d=l;d<c;d++){const h=d+1;r.push(`${h===e?">":" "} ${h}: ${i[d]}`)}return r.join(`
`)}function TA(o){const e=Ne.getPrimaries(Ne.workingColorSpace),i=Ne.getPrimaries(o);let r;switch(e===i?r="":e===xu&&i===Su?r="LinearDisplayP3ToLinearSRGB":e===Su&&i===xu&&(r="LinearSRGBToLinearDisplayP3"),o){case za:case Au:return[r,"LinearTransferOETF"];case Si:case Ph:return[r,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",o),[r,"LinearTransferOETF"]}}function W_(o,e,i){const r=o.getShaderParameter(e,o.COMPILE_STATUS),l=o.getShaderInfoLog(e).trim();if(r&&l==="")return"";const c=/ERROR: 0:(\d+)/.exec(l);if(c){const d=parseInt(c[1]);return i.toUpperCase()+`

`+l+`

`+EA(o.getShaderSource(e),d)}else return l}function AA(o,e){const i=TA(e);return`vec4 ${o}( vec4 value ) { return ${i[0]}( ${i[1]}( value ) ); }`}function bA(o,e){let i;switch(e){case zx:i="Linear";break;case Bx:i="Reinhard";break;case Ix:i="OptimizedCineon";break;case Fx:i="ACESFilmic";break;case Gx:i="AgX";break;case Vx:i="Neutral";break;case Hx:i="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),i="Linear"}return"vec3 "+o+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}function RA(o){return[o.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",o.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ro).join(`
`)}function CA(o){const e=[];for(const i in o){const r=o[i];r!==!1&&e.push("#define "+i+" "+r)}return e.join(`
`)}function wA(o,e){const i={},r=o.getProgramParameter(e,o.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const c=o.getActiveAttrib(e,l),d=c.name;let h=1;c.type===o.FLOAT_MAT2&&(h=2),c.type===o.FLOAT_MAT3&&(h=3),c.type===o.FLOAT_MAT4&&(h=4),i[d]={type:c.type,location:o.getAttribLocation(e,d),locationSize:h}}return i}function Ro(o){return o!==""}function q_(o,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Y_(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const DA=/^[ \t]*#include +<([\w\d./]+)>/gm;function Uh(o){return o.replace(DA,LA)}const UA=new Map;function LA(o,e){let i=le[e];if(i===void 0){const r=UA.get(e);if(r!==void 0)i=le[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return Uh(i)}const NA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function j_(o){return o.replace(NA,OA)}function OA(o,e,i,r){let l="";for(let c=parseInt(e);c<parseInt(i);c++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function Z_(o){let e=`precision ${o.precision} float;
	precision ${o.precision} int;
	precision ${o.precision} sampler2D;
	precision ${o.precision} samplerCube;
	precision ${o.precision} sampler3D;
	precision ${o.precision} sampler2DArray;
	precision ${o.precision} sampler2DShadow;
	precision ${o.precision} samplerCubeShadow;
	precision ${o.precision} sampler2DArrayShadow;
	precision ${o.precision} isampler2D;
	precision ${o.precision} isampler3D;
	precision ${o.precision} isamplerCube;
	precision ${o.precision} isampler2DArray;
	precision ${o.precision} usampler2D;
	precision ${o.precision} usampler3D;
	precision ${o.precision} usamplerCube;
	precision ${o.precision} usampler2DArray;
	`;return o.precision==="highp"?e+=`
#define HIGH_PRECISION`:o.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function PA(o){let e="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===lv?e="SHADOWMAP_TYPE_PCF":o.shadowMapType===lx?e="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===qi&&(e="SHADOWMAP_TYPE_VSM"),e}function zA(o){let e="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case Ss:case xs:e="ENVMAP_TYPE_CUBE";break;case Eu:e="ENVMAP_TYPE_CUBE_UV";break}return e}function BA(o){let e="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case xs:e="ENVMAP_MODE_REFRACTION";break}return e}function IA(o){let e="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case uv:e="ENVMAP_BLENDING_MULTIPLY";break;case Ox:e="ENVMAP_BLENDING_MIX";break;case Px:e="ENVMAP_BLENDING_ADD";break}return e}function FA(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function HA(o,e,i,r){const l=o.getContext(),c=i.defines;let d=i.vertexShader,h=i.fragmentShader;const m=PA(i),p=zA(i),g=BA(i),S=IA(i),x=FA(i),M=RA(i),R=CA(c),C=l.createProgram();let y,v,L=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(y=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,R].filter(Ro).join(`
`),y.length>0&&(y+=`
`),v=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,R].filter(Ro).join(`
`),v.length>0&&(v+=`
`)):(y=[Z_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,R,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+g:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.useLegacyLights?"#define LEGACY_LIGHTS":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ro).join(`
`),v=[Z_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,R,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+p:"",i.envMap?"#define "+g:"",i.envMap?"#define "+S:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+m:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.useLegacyLights?"#define LEGACY_LIGHTS":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Na?"#define TONE_MAPPING":"",i.toneMapping!==Na?le.tonemapping_pars_fragment:"",i.toneMapping!==Na?bA("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",le.colorspace_pars_fragment,AA("linearToOutputTexel",i.outputColorSpace),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(Ro).join(`
`)),d=Uh(d),d=q_(d,i),d=Y_(d,i),h=Uh(h),h=q_(h,i),h=Y_(h,i),d=j_(d),h=j_(h),i.isRawShaderMaterial!==!0&&(L=`#version 300 es
`,y=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,v=["#define varying in",i.glslVersion===f_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===f_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const D=L+y+d,P=L+v+h,tt=k_(l,l.VERTEX_SHADER,D),I=k_(l,l.FRAGMENT_SHADER,P);l.attachShader(C,tt),l.attachShader(C,I),i.index0AttributeName!==void 0?l.bindAttribLocation(C,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(C,0,"position"),l.linkProgram(C);function N(q){if(o.debug.checkShaderErrors){const lt=l.getProgramInfoLog(C).trim(),G=l.getShaderInfoLog(tt).trim(),dt=l.getShaderInfoLog(I).trim();let pt=!0,F=!0;if(l.getProgramParameter(C,l.LINK_STATUS)===!1)if(pt=!1,typeof o.debug.onShaderError=="function")o.debug.onShaderError(l,C,tt,I);else{const K=W_(l,tt,"vertex"),W=W_(l,I,"fragment");console.error("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(C,l.VALIDATE_STATUS)+`

Material Name: `+q.name+`
Material Type: `+q.type+`

Program Info Log: `+lt+`
`+K+`
`+W)}else lt!==""?console.warn("THREE.WebGLProgram: Program Info Log:",lt):(G===""||dt==="")&&(F=!1);F&&(q.diagnostics={runnable:pt,programLog:lt,vertexShader:{log:G,prefix:y},fragmentShader:{log:dt,prefix:v}})}l.deleteShader(tt),l.deleteShader(I),O=new gu(l,C),T=wA(l,C)}let O;this.getUniforms=function(){return O===void 0&&N(this),O};let T;this.getAttributes=function(){return T===void 0&&N(this),T};let E=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=l.getProgramParameter(C,yA)),E},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(C),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=MA++,this.cacheKey=e,this.usedTimes=1,this.program=C,this.vertexShader=tt,this.fragmentShader=I,this}let GA=0;class VA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,r=e.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(r),d=this._getShaderCacheForMaterial(e);return d.has(l)===!1&&(d.add(l),l.usedTimes++),d.has(c)===!1&&(d.add(c),c.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let r=i.get(e);return r===void 0&&(r=new Set,i.set(e,r)),r}_getShaderStage(e){const i=this.shaderCache;let r=i.get(e);return r===void 0&&(r=new XA(e),i.set(e,r)),r}}class XA{constructor(e){this.id=GA++,this.code=e,this.usedTimes=0}}function kA(o,e,i,r,l,c,d){const h=new zh,m=new VA,p=new Set,g=[],S=l.logarithmicDepthBuffer,x=l.vertexTextures;let M=l.precision;const R={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function C(T){return p.add(T),T===0?"uv":`uv${T}`}function y(T,E,q,lt,G){const dt=lt.fog,pt=G.geometry,F=T.isMeshStandardMaterial?lt.environment:null,K=(T.isMeshStandardMaterial?i:e).get(T.envMap||F),W=K&&K.mapping===Eu?K.image.height:null,vt=R[T.type];T.precision!==null&&(M=l.getMaxPrecision(T.precision),M!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",M,"instead."));const ut=pt.morphAttributes.position||pt.morphAttributes.normal||pt.morphAttributes.color,U=ut!==void 0?ut.length:0;let Z=0;pt.morphAttributes.position!==void 0&&(Z=1),pt.morphAttributes.normal!==void 0&&(Z=2),pt.morphAttributes.color!==void 0&&(Z=3);let xt,V,ct,Et;if(vt){const xe=xi[vt];xt=xe.vertexShader,V=xe.fragmentShader}else xt=T.vertexShader,V=T.fragmentShader,m.update(T),ct=m.getVertexShaderID(T),Et=m.getFragmentShaderID(T);const yt=o.getRenderTarget(),Xt=G.isInstancedMesh===!0,Bt=G.isBatchedMesh===!0,j=!!T.map,_e=!!T.matcap,Vt=!!K,ve=!!T.aoMap,Ft=!!T.lightMap,ie=!!T.bumpMap,$t=!!T.normalMap,ae=!!T.displacementMap,Ce=!!T.emissiveMap,z=!!T.metalnessMap,b=!!T.roughnessMap,ot=T.anisotropy>0,at=T.clearcoat>0,St=T.dispersion>0,gt=T.iridescence>0,Ot=T.sheen>0,At=T.transmission>0,Tt=ot&&!!T.anisotropyMap,Zt=at&&!!T.clearcoatMap,bt=at&&!!T.clearcoatNormalMap,Ht=at&&!!T.clearcoatRoughnessMap,ce=gt&&!!T.iridescenceMap,qt=gt&&!!T.iridescenceThicknessMap,Dt=Ot&&!!T.sheenColorMap,Nt=Ot&&!!T.sheenRoughnessMap,jt=!!T.specularMap,fe=!!T.specularColorMap,Jt=!!T.specularIntensityMap,X=At&&!!T.transmissionMap,Mt=At&&!!T.thicknessMap,ht=!!T.gradientMap,Rt=!!T.alphaMap,Ut=T.alphaTest>0,oe=!!T.alphaHash,Ae=!!T.extensions;let we=Na;T.toneMapped&&(yt===null||yt.isXRRenderTarget===!0)&&(we=o.toneMapping);const sn={shaderID:vt,shaderType:T.type,shaderName:T.name,vertexShader:xt,fragmentShader:V,defines:T.defines,customVertexShaderID:ct,customFragmentShaderID:Et,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:M,batching:Bt,instancing:Xt,instancingColor:Xt&&G.instanceColor!==null,instancingMorph:Xt&&G.morphTexture!==null,supportsVertexTextures:x,outputColorSpace:yt===null?o.outputColorSpace:yt.isXRRenderTarget===!0?yt.texture.colorSpace:za,alphaToCoverage:!!T.alphaToCoverage,map:j,matcap:_e,envMap:Vt,envMapMode:Vt&&K.mapping,envMapCubeUVHeight:W,aoMap:ve,lightMap:Ft,bumpMap:ie,normalMap:$t,displacementMap:x&&ae,emissiveMap:Ce,normalMapObjectSpace:$t&&T.normalMapType===ey,normalMapTangentSpace:$t&&T.normalMapType===Sv,metalnessMap:z,roughnessMap:b,anisotropy:ot,anisotropyMap:Tt,clearcoat:at,clearcoatMap:Zt,clearcoatNormalMap:bt,clearcoatRoughnessMap:Ht,dispersion:St,iridescence:gt,iridescenceMap:ce,iridescenceThicknessMap:qt,sheen:Ot,sheenColorMap:Dt,sheenRoughnessMap:Nt,specularMap:jt,specularColorMap:fe,specularIntensityMap:Jt,transmission:At,transmissionMap:X,thicknessMap:Mt,gradientMap:ht,opaque:T.transparent===!1&&T.blending===gs&&T.alphaToCoverage===!1,alphaMap:Rt,alphaTest:Ut,alphaHash:oe,combine:T.combine,mapUv:j&&C(T.map.channel),aoMapUv:ve&&C(T.aoMap.channel),lightMapUv:Ft&&C(T.lightMap.channel),bumpMapUv:ie&&C(T.bumpMap.channel),normalMapUv:$t&&C(T.normalMap.channel),displacementMapUv:ae&&C(T.displacementMap.channel),emissiveMapUv:Ce&&C(T.emissiveMap.channel),metalnessMapUv:z&&C(T.metalnessMap.channel),roughnessMapUv:b&&C(T.roughnessMap.channel),anisotropyMapUv:Tt&&C(T.anisotropyMap.channel),clearcoatMapUv:Zt&&C(T.clearcoatMap.channel),clearcoatNormalMapUv:bt&&C(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ht&&C(T.clearcoatRoughnessMap.channel),iridescenceMapUv:ce&&C(T.iridescenceMap.channel),iridescenceThicknessMapUv:qt&&C(T.iridescenceThicknessMap.channel),sheenColorMapUv:Dt&&C(T.sheenColorMap.channel),sheenRoughnessMapUv:Nt&&C(T.sheenRoughnessMap.channel),specularMapUv:jt&&C(T.specularMap.channel),specularColorMapUv:fe&&C(T.specularColorMap.channel),specularIntensityMapUv:Jt&&C(T.specularIntensityMap.channel),transmissionMapUv:X&&C(T.transmissionMap.channel),thicknessMapUv:Mt&&C(T.thicknessMap.channel),alphaMapUv:Rt&&C(T.alphaMap.channel),vertexTangents:!!pt.attributes.tangent&&($t||ot),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!pt.attributes.color&&pt.attributes.color.itemSize===4,pointsUvs:G.isPoints===!0&&!!pt.attributes.uv&&(j||Rt),fog:!!dt,useFog:T.fog===!0,fogExp2:!!dt&&dt.isFogExp2,flatShading:T.flatShading===!0,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:S,skinning:G.isSkinnedMesh===!0,morphTargets:pt.morphAttributes.position!==void 0,morphNormals:pt.morphAttributes.normal!==void 0,morphColors:pt.morphAttributes.color!==void 0,morphTargetsCount:U,morphTextureStride:Z,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:d.numPlanes,numClipIntersection:d.numIntersection,dithering:T.dithering,shadowMapEnabled:o.shadowMap.enabled&&q.length>0,shadowMapType:o.shadowMap.type,toneMapping:we,useLegacyLights:o._useLegacyLights,decodeVideoTexture:j&&T.map.isVideoTexture===!0&&Ne.getTransfer(T.map.colorSpace)===Fe,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===ji,flipSided:T.side===Cn,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:Ae&&T.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:Ae&&T.extensions.multiDraw===!0&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return sn.vertexUv1s=p.has(1),sn.vertexUv2s=p.has(2),sn.vertexUv3s=p.has(3),p.clear(),sn}function v(T){const E=[];if(T.shaderID?E.push(T.shaderID):(E.push(T.customVertexShaderID),E.push(T.customFragmentShaderID)),T.defines!==void 0)for(const q in T.defines)E.push(q),E.push(T.defines[q]);return T.isRawShaderMaterial===!1&&(L(E,T),D(E,T),E.push(o.outputColorSpace)),E.push(T.customProgramCacheKey),E.join()}function L(T,E){T.push(E.precision),T.push(E.outputColorSpace),T.push(E.envMapMode),T.push(E.envMapCubeUVHeight),T.push(E.mapUv),T.push(E.alphaMapUv),T.push(E.lightMapUv),T.push(E.aoMapUv),T.push(E.bumpMapUv),T.push(E.normalMapUv),T.push(E.displacementMapUv),T.push(E.emissiveMapUv),T.push(E.metalnessMapUv),T.push(E.roughnessMapUv),T.push(E.anisotropyMapUv),T.push(E.clearcoatMapUv),T.push(E.clearcoatNormalMapUv),T.push(E.clearcoatRoughnessMapUv),T.push(E.iridescenceMapUv),T.push(E.iridescenceThicknessMapUv),T.push(E.sheenColorMapUv),T.push(E.sheenRoughnessMapUv),T.push(E.specularMapUv),T.push(E.specularColorMapUv),T.push(E.specularIntensityMapUv),T.push(E.transmissionMapUv),T.push(E.thicknessMapUv),T.push(E.combine),T.push(E.fogExp2),T.push(E.sizeAttenuation),T.push(E.morphTargetsCount),T.push(E.morphAttributeCount),T.push(E.numDirLights),T.push(E.numPointLights),T.push(E.numSpotLights),T.push(E.numSpotLightMaps),T.push(E.numHemiLights),T.push(E.numRectAreaLights),T.push(E.numDirLightShadows),T.push(E.numPointLightShadows),T.push(E.numSpotLightShadows),T.push(E.numSpotLightShadowsWithMaps),T.push(E.numLightProbes),T.push(E.shadowMapType),T.push(E.toneMapping),T.push(E.numClippingPlanes),T.push(E.numClipIntersection),T.push(E.depthPacking)}function D(T,E){h.disableAll(),E.supportsVertexTextures&&h.enable(0),E.instancing&&h.enable(1),E.instancingColor&&h.enable(2),E.instancingMorph&&h.enable(3),E.matcap&&h.enable(4),E.envMap&&h.enable(5),E.normalMapObjectSpace&&h.enable(6),E.normalMapTangentSpace&&h.enable(7),E.clearcoat&&h.enable(8),E.iridescence&&h.enable(9),E.alphaTest&&h.enable(10),E.vertexColors&&h.enable(11),E.vertexAlphas&&h.enable(12),E.vertexUv1s&&h.enable(13),E.vertexUv2s&&h.enable(14),E.vertexUv3s&&h.enable(15),E.vertexTangents&&h.enable(16),E.anisotropy&&h.enable(17),E.alphaHash&&h.enable(18),E.batching&&h.enable(19),E.dispersion&&h.enable(20),T.push(h.mask),h.disableAll(),E.fog&&h.enable(0),E.useFog&&h.enable(1),E.flatShading&&h.enable(2),E.logarithmicDepthBuffer&&h.enable(3),E.skinning&&h.enable(4),E.morphTargets&&h.enable(5),E.morphNormals&&h.enable(6),E.morphColors&&h.enable(7),E.premultipliedAlpha&&h.enable(8),E.shadowMapEnabled&&h.enable(9),E.useLegacyLights&&h.enable(10),E.doubleSided&&h.enable(11),E.flipSided&&h.enable(12),E.useDepthPacking&&h.enable(13),E.dithering&&h.enable(14),E.transmission&&h.enable(15),E.sheen&&h.enable(16),E.opaque&&h.enable(17),E.pointsUvs&&h.enable(18),E.decodeVideoTexture&&h.enable(19),E.alphaToCoverage&&h.enable(20),T.push(h.mask)}function P(T){const E=R[T.type];let q;if(E){const lt=xi[E];q=Dv.clone(lt.uniforms)}else q=T.uniforms;return q}function tt(T,E){let q;for(let lt=0,G=g.length;lt<G;lt++){const dt=g[lt];if(dt.cacheKey===E){q=dt,++q.usedTimes;break}}return q===void 0&&(q=new HA(o,E,T,c),g.push(q)),q}function I(T){if(--T.usedTimes===0){const E=g.indexOf(T);g[E]=g[g.length-1],g.pop(),T.destroy()}}function N(T){m.remove(T)}function O(){m.dispose()}return{getParameters:y,getProgramCacheKey:v,getUniforms:P,acquireProgram:tt,releaseProgram:I,releaseShaderCache:N,programs:g,dispose:O}}function WA(){let o=new WeakMap;function e(c){let d=o.get(c);return d===void 0&&(d={},o.set(c,d)),d}function i(c){o.delete(c)}function r(c,d,h){o.get(c)[d]=h}function l(){o=new WeakMap}return{get:e,remove:i,update:r,dispose:l}}function qA(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function K_(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function Q_(){const o=[];let e=0;const i=[],r=[],l=[];function c(){e=0,i.length=0,r.length=0,l.length=0}function d(S,x,M,R,C,y){let v=o[e];return v===void 0?(v={id:S.id,object:S,geometry:x,material:M,groupOrder:R,renderOrder:S.renderOrder,z:C,group:y},o[e]=v):(v.id=S.id,v.object=S,v.geometry=x,v.material=M,v.groupOrder=R,v.renderOrder=S.renderOrder,v.z=C,v.group=y),e++,v}function h(S,x,M,R,C,y){const v=d(S,x,M,R,C,y);M.transmission>0?r.push(v):M.transparent===!0?l.push(v):i.push(v)}function m(S,x,M,R,C,y){const v=d(S,x,M,R,C,y);M.transmission>0?r.unshift(v):M.transparent===!0?l.unshift(v):i.unshift(v)}function p(S,x){i.length>1&&i.sort(S||qA),r.length>1&&r.sort(x||K_),l.length>1&&l.sort(x||K_)}function g(){for(let S=e,x=o.length;S<x;S++){const M=o[S];if(M.id===null)break;M.id=null,M.object=null,M.geometry=null,M.material=null,M.group=null}}return{opaque:i,transmissive:r,transparent:l,init:c,push:h,unshift:m,finish:g,sort:p}}function YA(){let o=new WeakMap;function e(r,l){const c=o.get(r);let d;return c===void 0?(d=new Q_,o.set(r,[d])):l>=c.length?(d=new Q_,c.push(d)):d=c[l],d}function i(){o=new WeakMap}return{get:e,dispose:i}}function jA(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new $,color:new Se};break;case"SpotLight":i={position:new $,direction:new $,color:new Se,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new $,color:new Se,distance:0,decay:0};break;case"HemisphereLight":i={direction:new $,skyColor:new Se,groundColor:new Se};break;case"RectAreaLight":i={color:new Se,position:new $,halfWidth:new $,halfHeight:new $};break}return o[e.id]=i,i}}}function ZA(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new se};break;case"SpotLight":i={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new se};break;case"PointLight":i={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new se,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=i,i}}}let KA=0;function QA(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function JA(o){const e=new jA,i=ZA(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new $);const l=new $,c=new Pe,d=new Pe;function h(p,g){let S=0,x=0,M=0;for(let q=0;q<9;q++)r.probe[q].set(0,0,0);let R=0,C=0,y=0,v=0,L=0,D=0,P=0,tt=0,I=0,N=0,O=0;p.sort(QA);const T=g===!0?Math.PI:1;for(let q=0,lt=p.length;q<lt;q++){const G=p[q],dt=G.color,pt=G.intensity,F=G.distance,K=G.shadow&&G.shadow.map?G.shadow.map.texture:null;if(G.isAmbientLight)S+=dt.r*pt*T,x+=dt.g*pt*T,M+=dt.b*pt*T;else if(G.isLightProbe){for(let W=0;W<9;W++)r.probe[W].addScaledVector(G.sh.coefficients[W],pt);O++}else if(G.isDirectionalLight){const W=e.get(G);if(W.color.copy(G.color).multiplyScalar(G.intensity*T),G.castShadow){const vt=G.shadow,ut=i.get(G);ut.shadowBias=vt.bias,ut.shadowNormalBias=vt.normalBias,ut.shadowRadius=vt.radius,ut.shadowMapSize=vt.mapSize,r.directionalShadow[R]=ut,r.directionalShadowMap[R]=K,r.directionalShadowMatrix[R]=G.shadow.matrix,D++}r.directional[R]=W,R++}else if(G.isSpotLight){const W=e.get(G);W.position.setFromMatrixPosition(G.matrixWorld),W.color.copy(dt).multiplyScalar(pt*T),W.distance=F,W.coneCos=Math.cos(G.angle),W.penumbraCos=Math.cos(G.angle*(1-G.penumbra)),W.decay=G.decay,r.spot[y]=W;const vt=G.shadow;if(G.map&&(r.spotLightMap[I]=G.map,I++,vt.updateMatrices(G),G.castShadow&&N++),r.spotLightMatrix[y]=vt.matrix,G.castShadow){const ut=i.get(G);ut.shadowBias=vt.bias,ut.shadowNormalBias=vt.normalBias,ut.shadowRadius=vt.radius,ut.shadowMapSize=vt.mapSize,r.spotShadow[y]=ut,r.spotShadowMap[y]=K,tt++}y++}else if(G.isRectAreaLight){const W=e.get(G);W.color.copy(dt).multiplyScalar(pt),W.halfWidth.set(G.width*.5,0,0),W.halfHeight.set(0,G.height*.5,0),r.rectArea[v]=W,v++}else if(G.isPointLight){const W=e.get(G);if(W.color.copy(G.color).multiplyScalar(G.intensity*T),W.distance=G.distance,W.decay=G.decay,G.castShadow){const vt=G.shadow,ut=i.get(G);ut.shadowBias=vt.bias,ut.shadowNormalBias=vt.normalBias,ut.shadowRadius=vt.radius,ut.shadowMapSize=vt.mapSize,ut.shadowCameraNear=vt.camera.near,ut.shadowCameraFar=vt.camera.far,r.pointShadow[C]=ut,r.pointShadowMap[C]=K,r.pointShadowMatrix[C]=G.shadow.matrix,P++}r.point[C]=W,C++}else if(G.isHemisphereLight){const W=e.get(G);W.skyColor.copy(G.color).multiplyScalar(pt*T),W.groundColor.copy(G.groundColor).multiplyScalar(pt*T),r.hemi[L]=W,L++}}v>0&&(o.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=wt.LTC_FLOAT_1,r.rectAreaLTC2=wt.LTC_FLOAT_2):(r.rectAreaLTC1=wt.LTC_HALF_1,r.rectAreaLTC2=wt.LTC_HALF_2)),r.ambient[0]=S,r.ambient[1]=x,r.ambient[2]=M;const E=r.hash;(E.directionalLength!==R||E.pointLength!==C||E.spotLength!==y||E.rectAreaLength!==v||E.hemiLength!==L||E.numDirectionalShadows!==D||E.numPointShadows!==P||E.numSpotShadows!==tt||E.numSpotMaps!==I||E.numLightProbes!==O)&&(r.directional.length=R,r.spot.length=y,r.rectArea.length=v,r.point.length=C,r.hemi.length=L,r.directionalShadow.length=D,r.directionalShadowMap.length=D,r.pointShadow.length=P,r.pointShadowMap.length=P,r.spotShadow.length=tt,r.spotShadowMap.length=tt,r.directionalShadowMatrix.length=D,r.pointShadowMatrix.length=P,r.spotLightMatrix.length=tt+I-N,r.spotLightMap.length=I,r.numSpotLightShadowsWithMaps=N,r.numLightProbes=O,E.directionalLength=R,E.pointLength=C,E.spotLength=y,E.rectAreaLength=v,E.hemiLength=L,E.numDirectionalShadows=D,E.numPointShadows=P,E.numSpotShadows=tt,E.numSpotMaps=I,E.numLightProbes=O,r.version=KA++)}function m(p,g){let S=0,x=0,M=0,R=0,C=0;const y=g.matrixWorldInverse;for(let v=0,L=p.length;v<L;v++){const D=p[v];if(D.isDirectionalLight){const P=r.directional[S];P.direction.setFromMatrixPosition(D.matrixWorld),l.setFromMatrixPosition(D.target.matrixWorld),P.direction.sub(l),P.direction.transformDirection(y),S++}else if(D.isSpotLight){const P=r.spot[M];P.position.setFromMatrixPosition(D.matrixWorld),P.position.applyMatrix4(y),P.direction.setFromMatrixPosition(D.matrixWorld),l.setFromMatrixPosition(D.target.matrixWorld),P.direction.sub(l),P.direction.transformDirection(y),M++}else if(D.isRectAreaLight){const P=r.rectArea[R];P.position.setFromMatrixPosition(D.matrixWorld),P.position.applyMatrix4(y),d.identity(),c.copy(D.matrixWorld),c.premultiply(y),d.extractRotation(c),P.halfWidth.set(D.width*.5,0,0),P.halfHeight.set(0,D.height*.5,0),P.halfWidth.applyMatrix4(d),P.halfHeight.applyMatrix4(d),R++}else if(D.isPointLight){const P=r.point[x];P.position.setFromMatrixPosition(D.matrixWorld),P.position.applyMatrix4(y),x++}else if(D.isHemisphereLight){const P=r.hemi[C];P.direction.setFromMatrixPosition(D.matrixWorld),P.direction.transformDirection(y),C++}}}return{setup:h,setupView:m,state:r}}function J_(o){const e=new JA(o),i=[],r=[];function l(g){p.camera=g,i.length=0,r.length=0}function c(g){i.push(g)}function d(g){r.push(g)}function h(g){e.setup(i,g)}function m(g){e.setupView(i,g)}const p={lightsArray:i,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:l,state:p,setupLights:h,setupLightsView:m,pushLight:c,pushShadow:d}}function $A(o){let e=new WeakMap;function i(l,c=0){const d=e.get(l);let h;return d===void 0?(h=new J_(o),e.set(l,[h])):c>=d.length?(h=new J_(o),d.push(h)):h=d[c],h}function r(){e=new WeakMap}return{get:i,dispose:r}}class tb extends No{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=$x,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class eb extends No{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const nb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ib=`uniform sampler2D shadow_pass;
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
}`;function ab(o,e,i){let r=new Bh;const l=new se,c=new se,d=new un,h=new tb({depthPacking:ty}),m=new eb,p={},g=i.maxTextureSize,S={[Oa]:Cn,[Cn]:Oa,[ji]:ji},x=new Ji({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new se},radius:{value:4}},vertexShader:nb,fragmentShader:ib}),M=x.clone();M.defines.HORIZONTAL_PASS=1;const R=new Ba;R.setAttribute("position",new hi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const C=new Rn(R,x),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=lv;let v=this.type;this.render=function(I,N,O){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||I.length===0)return;const T=o.getRenderTarget(),E=o.getActiveCubeFace(),q=o.getActiveMipmapLevel(),lt=o.state;lt.setBlending(La),lt.buffers.color.setClear(1,1,1,1),lt.buffers.depth.setTest(!0),lt.setScissorTest(!1);const G=v!==qi&&this.type===qi,dt=v===qi&&this.type!==qi;for(let pt=0,F=I.length;pt<F;pt++){const K=I[pt],W=K.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;l.copy(W.mapSize);const vt=W.getFrameExtents();if(l.multiply(vt),c.copy(W.mapSize),(l.x>g||l.y>g)&&(l.x>g&&(c.x=Math.floor(g/vt.x),l.x=c.x*vt.x,W.mapSize.x=c.x),l.y>g&&(c.y=Math.floor(g/vt.y),l.y=c.y*vt.y,W.mapSize.y=c.y)),W.map===null||G===!0||dt===!0){const U=this.type!==qi?{minFilter:In,magFilter:In}:{};W.map!==null&&W.map.dispose(),W.map=new pr(l.x,l.y,U),W.map.texture.name=K.name+".shadowMap",W.camera.updateProjectionMatrix()}o.setRenderTarget(W.map),o.clear();const ut=W.getViewportCount();for(let U=0;U<ut;U++){const Z=W.getViewport(U);d.set(c.x*Z.x,c.y*Z.y,c.x*Z.z,c.y*Z.w),lt.viewport(d),W.updateMatrices(K,U),r=W.getFrustum(),P(N,O,W.camera,K,this.type)}W.isPointLightShadow!==!0&&this.type===qi&&L(W,O),W.needsUpdate=!1}v=this.type,y.needsUpdate=!1,o.setRenderTarget(T,E,q)};function L(I,N){const O=e.update(C);x.defines.VSM_SAMPLES!==I.blurSamples&&(x.defines.VSM_SAMPLES=I.blurSamples,M.defines.VSM_SAMPLES=I.blurSamples,x.needsUpdate=!0,M.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new pr(l.x,l.y)),x.uniforms.shadow_pass.value=I.map.texture,x.uniforms.resolution.value=I.mapSize,x.uniforms.radius.value=I.radius,o.setRenderTarget(I.mapPass),o.clear(),o.renderBufferDirect(N,null,O,x,C,null),M.uniforms.shadow_pass.value=I.mapPass.texture,M.uniforms.resolution.value=I.mapSize,M.uniforms.radius.value=I.radius,o.setRenderTarget(I.map),o.clear(),o.renderBufferDirect(N,null,O,M,C,null)}function D(I,N,O,T){let E=null;const q=O.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(q!==void 0)E=q;else if(E=O.isPointLight===!0?m:h,o.localClippingEnabled&&N.clipShadows===!0&&Array.isArray(N.clippingPlanes)&&N.clippingPlanes.length!==0||N.displacementMap&&N.displacementScale!==0||N.alphaMap&&N.alphaTest>0||N.map&&N.alphaTest>0){const lt=E.uuid,G=N.uuid;let dt=p[lt];dt===void 0&&(dt={},p[lt]=dt);let pt=dt[G];pt===void 0&&(pt=E.clone(),dt[G]=pt,N.addEventListener("dispose",tt)),E=pt}if(E.visible=N.visible,E.wireframe=N.wireframe,T===qi?E.side=N.shadowSide!==null?N.shadowSide:N.side:E.side=N.shadowSide!==null?N.shadowSide:S[N.side],E.alphaMap=N.alphaMap,E.alphaTest=N.alphaTest,E.map=N.map,E.clipShadows=N.clipShadows,E.clippingPlanes=N.clippingPlanes,E.clipIntersection=N.clipIntersection,E.displacementMap=N.displacementMap,E.displacementScale=N.displacementScale,E.displacementBias=N.displacementBias,E.wireframeLinewidth=N.wireframeLinewidth,E.linewidth=N.linewidth,O.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const lt=o.properties.get(E);lt.light=O}return E}function P(I,N,O,T,E){if(I.visible===!1)return;if(I.layers.test(N.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&E===qi)&&(!I.frustumCulled||r.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,I.matrixWorld);const G=e.update(I),dt=I.material;if(Array.isArray(dt)){const pt=G.groups;for(let F=0,K=pt.length;F<K;F++){const W=pt[F],vt=dt[W.materialIndex];if(vt&&vt.visible){const ut=D(I,vt,T,E);I.onBeforeShadow(o,I,N,O,G,ut,W),o.renderBufferDirect(O,null,G,ut,I,W),I.onAfterShadow(o,I,N,O,G,ut,W)}}}else if(dt.visible){const pt=D(I,dt,T,E);I.onBeforeShadow(o,I,N,O,G,pt,null),o.renderBufferDirect(O,null,G,pt,I,null),I.onAfterShadow(o,I,N,O,G,pt,null)}}const lt=I.children;for(let G=0,dt=lt.length;G<dt;G++)P(lt[G],N,O,T,E)}function tt(I){I.target.removeEventListener("dispose",tt);for(const O in p){const T=p[O],E=I.target.uuid;E in T&&(T[E].dispose(),delete T[E])}}}function rb(o){function e(){let X=!1;const Mt=new un;let ht=null;const Rt=new un(0,0,0,0);return{setMask:function(Ut){ht!==Ut&&!X&&(o.colorMask(Ut,Ut,Ut,Ut),ht=Ut)},setLocked:function(Ut){X=Ut},setClear:function(Ut,oe,Ae,we,sn){sn===!0&&(Ut*=we,oe*=we,Ae*=we),Mt.set(Ut,oe,Ae,we),Rt.equals(Mt)===!1&&(o.clearColor(Ut,oe,Ae,we),Rt.copy(Mt))},reset:function(){X=!1,ht=null,Rt.set(-1,0,0,0)}}}function i(){let X=!1,Mt=null,ht=null,Rt=null;return{setTest:function(Ut){Ut?Et(o.DEPTH_TEST):yt(o.DEPTH_TEST)},setMask:function(Ut){Mt!==Ut&&!X&&(o.depthMask(Ut),Mt=Ut)},setFunc:function(Ut){if(ht!==Ut){switch(Ut){case Rx:o.depthFunc(o.NEVER);break;case Cx:o.depthFunc(o.ALWAYS);break;case wx:o.depthFunc(o.LESS);break;case _u:o.depthFunc(o.LEQUAL);break;case Dx:o.depthFunc(o.EQUAL);break;case Ux:o.depthFunc(o.GEQUAL);break;case Lx:o.depthFunc(o.GREATER);break;case Nx:o.depthFunc(o.NOTEQUAL);break;default:o.depthFunc(o.LEQUAL)}ht=Ut}},setLocked:function(Ut){X=Ut},setClear:function(Ut){Rt!==Ut&&(o.clearDepth(Ut),Rt=Ut)},reset:function(){X=!1,Mt=null,ht=null,Rt=null}}}function r(){let X=!1,Mt=null,ht=null,Rt=null,Ut=null,oe=null,Ae=null,we=null,sn=null;return{setTest:function(xe){X||(xe?Et(o.STENCIL_TEST):yt(o.STENCIL_TEST))},setMask:function(xe){Mt!==xe&&!X&&(o.stencilMask(xe),Mt=xe)},setFunc:function(xe,Dn,ke){(ht!==xe||Rt!==Dn||Ut!==ke)&&(o.stencilFunc(xe,Dn,ke),ht=xe,Rt=Dn,Ut=ke)},setOp:function(xe,Dn,ke){(oe!==xe||Ae!==Dn||we!==ke)&&(o.stencilOp(xe,Dn,ke),oe=xe,Ae=Dn,we=ke)},setLocked:function(xe){X=xe},setClear:function(xe){sn!==xe&&(o.clearStencil(xe),sn=xe)},reset:function(){X=!1,Mt=null,ht=null,Rt=null,Ut=null,oe=null,Ae=null,we=null,sn=null}}}const l=new e,c=new i,d=new r,h=new WeakMap,m=new WeakMap;let p={},g={},S=new WeakMap,x=[],M=null,R=!1,C=null,y=null,v=null,L=null,D=null,P=null,tt=null,I=new Se(0,0,0),N=0,O=!1,T=null,E=null,q=null,lt=null,G=null;const dt=o.getParameter(o.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let pt=!1,F=0;const K=o.getParameter(o.VERSION);K.indexOf("WebGL")!==-1?(F=parseFloat(/^WebGL (\d)/.exec(K)[1]),pt=F>=1):K.indexOf("OpenGL ES")!==-1&&(F=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),pt=F>=2);let W=null,vt={};const ut=o.getParameter(o.SCISSOR_BOX),U=o.getParameter(o.VIEWPORT),Z=new un().fromArray(ut),xt=new un().fromArray(U);function V(X,Mt,ht,Rt){const Ut=new Uint8Array(4),oe=o.createTexture();o.bindTexture(X,oe),o.texParameteri(X,o.TEXTURE_MIN_FILTER,o.NEAREST),o.texParameteri(X,o.TEXTURE_MAG_FILTER,o.NEAREST);for(let Ae=0;Ae<ht;Ae++)X===o.TEXTURE_3D||X===o.TEXTURE_2D_ARRAY?o.texImage3D(Mt,0,o.RGBA,1,1,Rt,0,o.RGBA,o.UNSIGNED_BYTE,Ut):o.texImage2D(Mt+Ae,0,o.RGBA,1,1,0,o.RGBA,o.UNSIGNED_BYTE,Ut);return oe}const ct={};ct[o.TEXTURE_2D]=V(o.TEXTURE_2D,o.TEXTURE_2D,1),ct[o.TEXTURE_CUBE_MAP]=V(o.TEXTURE_CUBE_MAP,o.TEXTURE_CUBE_MAP_POSITIVE_X,6),ct[o.TEXTURE_2D_ARRAY]=V(o.TEXTURE_2D_ARRAY,o.TEXTURE_2D_ARRAY,1,1),ct[o.TEXTURE_3D]=V(o.TEXTURE_3D,o.TEXTURE_3D,1,1),l.setClear(0,0,0,1),c.setClear(1),d.setClear(0),Et(o.DEPTH_TEST),c.setFunc(_u),ie(!1),$t(Ng),Et(o.CULL_FACE),ve(La);function Et(X){p[X]!==!0&&(o.enable(X),p[X]=!0)}function yt(X){p[X]!==!1&&(o.disable(X),p[X]=!1)}function Xt(X,Mt){return g[X]!==Mt?(o.bindFramebuffer(X,Mt),g[X]=Mt,X===o.DRAW_FRAMEBUFFER&&(g[o.FRAMEBUFFER]=Mt),X===o.FRAMEBUFFER&&(g[o.DRAW_FRAMEBUFFER]=Mt),!0):!1}function Bt(X,Mt){let ht=x,Rt=!1;if(X){ht=S.get(Mt),ht===void 0&&(ht=[],S.set(Mt,ht));const Ut=X.textures;if(ht.length!==Ut.length||ht[0]!==o.COLOR_ATTACHMENT0){for(let oe=0,Ae=Ut.length;oe<Ae;oe++)ht[oe]=o.COLOR_ATTACHMENT0+oe;ht.length=Ut.length,Rt=!0}}else ht[0]!==o.BACK&&(ht[0]=o.BACK,Rt=!0);Rt&&o.drawBuffers(ht)}function j(X){return M!==X?(o.useProgram(X),M=X,!0):!1}const _e={[cr]:o.FUNC_ADD,[cx]:o.FUNC_SUBTRACT,[fx]:o.FUNC_REVERSE_SUBTRACT};_e[hx]=o.MIN,_e[dx]=o.MAX;const Vt={[px]:o.ZERO,[mx]:o.ONE,[gx]:o.SRC_COLOR,[Th]:o.SRC_ALPHA,[Mx]:o.SRC_ALPHA_SATURATE,[xx]:o.DST_COLOR,[vx]:o.DST_ALPHA,[_x]:o.ONE_MINUS_SRC_COLOR,[Ah]:o.ONE_MINUS_SRC_ALPHA,[yx]:o.ONE_MINUS_DST_COLOR,[Sx]:o.ONE_MINUS_DST_ALPHA,[Ex]:o.CONSTANT_COLOR,[Tx]:o.ONE_MINUS_CONSTANT_COLOR,[Ax]:o.CONSTANT_ALPHA,[bx]:o.ONE_MINUS_CONSTANT_ALPHA};function ve(X,Mt,ht,Rt,Ut,oe,Ae,we,sn,xe){if(X===La){R===!0&&(yt(o.BLEND),R=!1);return}if(R===!1&&(Et(o.BLEND),R=!0),X!==ux){if(X!==C||xe!==O){if((y!==cr||D!==cr)&&(o.blendEquation(o.FUNC_ADD),y=cr,D=cr),xe)switch(X){case gs:o.blendFuncSeparate(o.ONE,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Og:o.blendFunc(o.ONE,o.ONE);break;case Pg:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case zg:o.blendFuncSeparate(o.ZERO,o.SRC_COLOR,o.ZERO,o.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}else switch(X){case gs:o.blendFuncSeparate(o.SRC_ALPHA,o.ONE_MINUS_SRC_ALPHA,o.ONE,o.ONE_MINUS_SRC_ALPHA);break;case Og:o.blendFunc(o.SRC_ALPHA,o.ONE);break;case Pg:o.blendFuncSeparate(o.ZERO,o.ONE_MINUS_SRC_COLOR,o.ZERO,o.ONE);break;case zg:o.blendFunc(o.ZERO,o.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",X);break}v=null,L=null,P=null,tt=null,I.set(0,0,0),N=0,C=X,O=xe}return}Ut=Ut||Mt,oe=oe||ht,Ae=Ae||Rt,(Mt!==y||Ut!==D)&&(o.blendEquationSeparate(_e[Mt],_e[Ut]),y=Mt,D=Ut),(ht!==v||Rt!==L||oe!==P||Ae!==tt)&&(o.blendFuncSeparate(Vt[ht],Vt[Rt],Vt[oe],Vt[Ae]),v=ht,L=Rt,P=oe,tt=Ae),(we.equals(I)===!1||sn!==N)&&(o.blendColor(we.r,we.g,we.b,sn),I.copy(we),N=sn),C=X,O=!1}function Ft(X,Mt){X.side===ji?yt(o.CULL_FACE):Et(o.CULL_FACE);let ht=X.side===Cn;Mt&&(ht=!ht),ie(ht),X.blending===gs&&X.transparent===!1?ve(La):ve(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),c.setFunc(X.depthFunc),c.setTest(X.depthTest),c.setMask(X.depthWrite),l.setMask(X.colorWrite);const Rt=X.stencilWrite;d.setTest(Rt),Rt&&(d.setMask(X.stencilWriteMask),d.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),d.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),Ce(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?Et(o.SAMPLE_ALPHA_TO_COVERAGE):yt(o.SAMPLE_ALPHA_TO_COVERAGE)}function ie(X){T!==X&&(X?o.frontFace(o.CW):o.frontFace(o.CCW),T=X)}function $t(X){X!==sx?(Et(o.CULL_FACE),X!==E&&(X===Ng?o.cullFace(o.BACK):X===ox?o.cullFace(o.FRONT):o.cullFace(o.FRONT_AND_BACK))):yt(o.CULL_FACE),E=X}function ae(X){X!==q&&(pt&&o.lineWidth(X),q=X)}function Ce(X,Mt,ht){X?(Et(o.POLYGON_OFFSET_FILL),(lt!==Mt||G!==ht)&&(o.polygonOffset(Mt,ht),lt=Mt,G=ht)):yt(o.POLYGON_OFFSET_FILL)}function z(X){X?Et(o.SCISSOR_TEST):yt(o.SCISSOR_TEST)}function b(X){X===void 0&&(X=o.TEXTURE0+dt-1),W!==X&&(o.activeTexture(X),W=X)}function ot(X,Mt,ht){ht===void 0&&(W===null?ht=o.TEXTURE0+dt-1:ht=W);let Rt=vt[ht];Rt===void 0&&(Rt={type:void 0,texture:void 0},vt[ht]=Rt),(Rt.type!==X||Rt.texture!==Mt)&&(W!==ht&&(o.activeTexture(ht),W=ht),o.bindTexture(X,Mt||ct[X]),Rt.type=X,Rt.texture=Mt)}function at(){const X=vt[W];X!==void 0&&X.type!==void 0&&(o.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function St(){try{o.compressedTexImage2D.apply(o,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function gt(){try{o.compressedTexImage3D.apply(o,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Ot(){try{o.texSubImage2D.apply(o,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function At(){try{o.texSubImage3D.apply(o,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Tt(){try{o.compressedTexSubImage2D.apply(o,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Zt(){try{o.compressedTexSubImage3D.apply(o,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function bt(){try{o.texStorage2D.apply(o,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Ht(){try{o.texStorage3D.apply(o,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function ce(){try{o.texImage2D.apply(o,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function qt(){try{o.texImage3D.apply(o,arguments)}catch(X){console.error("THREE.WebGLState:",X)}}function Dt(X){Z.equals(X)===!1&&(o.scissor(X.x,X.y,X.z,X.w),Z.copy(X))}function Nt(X){xt.equals(X)===!1&&(o.viewport(X.x,X.y,X.z,X.w),xt.copy(X))}function jt(X,Mt){let ht=m.get(Mt);ht===void 0&&(ht=new WeakMap,m.set(Mt,ht));let Rt=ht.get(X);Rt===void 0&&(Rt=o.getUniformBlockIndex(Mt,X.name),ht.set(X,Rt))}function fe(X,Mt){const Rt=m.get(Mt).get(X);h.get(Mt)!==Rt&&(o.uniformBlockBinding(Mt,Rt,X.__bindingPointIndex),h.set(Mt,Rt))}function Jt(){o.disable(o.BLEND),o.disable(o.CULL_FACE),o.disable(o.DEPTH_TEST),o.disable(o.POLYGON_OFFSET_FILL),o.disable(o.SCISSOR_TEST),o.disable(o.STENCIL_TEST),o.disable(o.SAMPLE_ALPHA_TO_COVERAGE),o.blendEquation(o.FUNC_ADD),o.blendFunc(o.ONE,o.ZERO),o.blendFuncSeparate(o.ONE,o.ZERO,o.ONE,o.ZERO),o.blendColor(0,0,0,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(o.LESS),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(o.ALWAYS,0,4294967295),o.stencilOp(o.KEEP,o.KEEP,o.KEEP),o.clearStencil(0),o.cullFace(o.BACK),o.frontFace(o.CCW),o.polygonOffset(0,0),o.activeTexture(o.TEXTURE0),o.bindFramebuffer(o.FRAMEBUFFER,null),o.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),o.bindFramebuffer(o.READ_FRAMEBUFFER,null),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),p={},W=null,vt={},g={},S=new WeakMap,x=[],M=null,R=!1,C=null,y=null,v=null,L=null,D=null,P=null,tt=null,I=new Se(0,0,0),N=0,O=!1,T=null,E=null,q=null,lt=null,G=null,Z.set(0,0,o.canvas.width,o.canvas.height),xt.set(0,0,o.canvas.width,o.canvas.height),l.reset(),c.reset(),d.reset()}return{buffers:{color:l,depth:c,stencil:d},enable:Et,disable:yt,bindFramebuffer:Xt,drawBuffers:Bt,useProgram:j,setBlending:ve,setMaterial:Ft,setFlipSided:ie,setCullFace:$t,setLineWidth:ae,setPolygonOffset:Ce,setScissorTest:z,activeTexture:b,bindTexture:ot,unbindTexture:at,compressedTexImage2D:St,compressedTexImage3D:gt,texImage2D:ce,texImage3D:qt,updateUBOMapping:jt,uniformBlockBinding:fe,texStorage2D:bt,texStorage3D:Ht,texSubImage2D:Ot,texSubImage3D:At,compressedTexSubImage2D:Tt,compressedTexSubImage3D:Zt,scissor:Dt,viewport:Nt,reset:Jt}}function sb(o,e,i,r,l,c,d){const h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new se,g=new WeakMap;let S;const x=new WeakMap;let M=!1;try{M=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function R(z,b){return M?new OffscreenCanvas(z,b):Mu("canvas")}function C(z,b,ot){let at=1;const St=Ce(z);if((St.width>ot||St.height>ot)&&(at=ot/Math.max(St.width,St.height)),at<1)if(typeof HTMLImageElement<"u"&&z instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&z instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&z instanceof ImageBitmap||typeof VideoFrame<"u"&&z instanceof VideoFrame){const gt=Math.floor(at*St.width),Ot=Math.floor(at*St.height);S===void 0&&(S=R(gt,Ot));const At=b?R(gt,Ot):S;return At.width=gt,At.height=Ot,At.getContext("2d").drawImage(z,0,0,gt,Ot),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+St.width+"x"+St.height+") to ("+gt+"x"+Ot+")."),At}else return"data"in z&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+St.width+"x"+St.height+")."),z;return z}function y(z){return z.generateMipmaps&&z.minFilter!==In&&z.minFilter!==fi}function v(z){o.generateMipmap(z)}function L(z,b,ot,at,St=!1){if(z!==null){if(o[z]!==void 0)return o[z];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+z+"'")}let gt=b;if(b===o.RED&&(ot===o.FLOAT&&(gt=o.R32F),ot===o.HALF_FLOAT&&(gt=o.R16F),ot===o.UNSIGNED_BYTE&&(gt=o.R8)),b===o.RED_INTEGER&&(ot===o.UNSIGNED_BYTE&&(gt=o.R8UI),ot===o.UNSIGNED_SHORT&&(gt=o.R16UI),ot===o.UNSIGNED_INT&&(gt=o.R32UI),ot===o.BYTE&&(gt=o.R8I),ot===o.SHORT&&(gt=o.R16I),ot===o.INT&&(gt=o.R32I)),b===o.RG&&(ot===o.FLOAT&&(gt=o.RG32F),ot===o.HALF_FLOAT&&(gt=o.RG16F),ot===o.UNSIGNED_BYTE&&(gt=o.RG8)),b===o.RG_INTEGER&&(ot===o.UNSIGNED_BYTE&&(gt=o.RG8UI),ot===o.UNSIGNED_SHORT&&(gt=o.RG16UI),ot===o.UNSIGNED_INT&&(gt=o.RG32UI),ot===o.BYTE&&(gt=o.RG8I),ot===o.SHORT&&(gt=o.RG16I),ot===o.INT&&(gt=o.RG32I)),b===o.RGB&&ot===o.UNSIGNED_INT_5_9_9_9_REV&&(gt=o.RGB9_E5),b===o.RGBA){const Ot=St?vu:Ne.getTransfer(at);ot===o.FLOAT&&(gt=o.RGBA32F),ot===o.HALF_FLOAT&&(gt=o.RGBA16F),ot===o.UNSIGNED_BYTE&&(gt=Ot===Fe?o.SRGB8_ALPHA8:o.RGBA8),ot===o.UNSIGNED_SHORT_4_4_4_4&&(gt=o.RGBA4),ot===o.UNSIGNED_SHORT_5_5_5_1&&(gt=o.RGB5_A1)}return(gt===o.R16F||gt===o.R32F||gt===o.RG16F||gt===o.RG32F||gt===o.RGBA16F||gt===o.RGBA32F)&&e.get("EXT_color_buffer_float"),gt}function D(z,b){return y(z)===!0||z.isFramebufferTexture&&z.minFilter!==In&&z.minFilter!==fi?Math.log2(Math.max(b.width,b.height))+1:z.mipmaps!==void 0&&z.mipmaps.length>0?z.mipmaps.length:z.isCompressedTexture&&Array.isArray(z.image)?b.mipmaps.length:1}function P(z){const b=z.target;b.removeEventListener("dispose",P),I(b),b.isVideoTexture&&g.delete(b)}function tt(z){const b=z.target;b.removeEventListener("dispose",tt),O(b)}function I(z){const b=r.get(z);if(b.__webglInit===void 0)return;const ot=z.source,at=x.get(ot);if(at){const St=at[b.__cacheKey];St.usedTimes--,St.usedTimes===0&&N(z),Object.keys(at).length===0&&x.delete(ot)}r.remove(z)}function N(z){const b=r.get(z);o.deleteTexture(b.__webglTexture);const ot=z.source,at=x.get(ot);delete at[b.__cacheKey],d.memory.textures--}function O(z){const b=r.get(z);if(z.depthTexture&&z.depthTexture.dispose(),z.isWebGLCubeRenderTarget)for(let at=0;at<6;at++){if(Array.isArray(b.__webglFramebuffer[at]))for(let St=0;St<b.__webglFramebuffer[at].length;St++)o.deleteFramebuffer(b.__webglFramebuffer[at][St]);else o.deleteFramebuffer(b.__webglFramebuffer[at]);b.__webglDepthbuffer&&o.deleteRenderbuffer(b.__webglDepthbuffer[at])}else{if(Array.isArray(b.__webglFramebuffer))for(let at=0;at<b.__webglFramebuffer.length;at++)o.deleteFramebuffer(b.__webglFramebuffer[at]);else o.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&o.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&o.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let at=0;at<b.__webglColorRenderbuffer.length;at++)b.__webglColorRenderbuffer[at]&&o.deleteRenderbuffer(b.__webglColorRenderbuffer[at]);b.__webglDepthRenderbuffer&&o.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const ot=z.textures;for(let at=0,St=ot.length;at<St;at++){const gt=r.get(ot[at]);gt.__webglTexture&&(o.deleteTexture(gt.__webglTexture),d.memory.textures--),r.remove(ot[at])}r.remove(z)}let T=0;function E(){T=0}function q(){const z=T;return z>=l.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+z+" texture units while this GPU supports only "+l.maxTextures),T+=1,z}function lt(z){const b=[];return b.push(z.wrapS),b.push(z.wrapT),b.push(z.wrapR||0),b.push(z.magFilter),b.push(z.minFilter),b.push(z.anisotropy),b.push(z.internalFormat),b.push(z.format),b.push(z.type),b.push(z.generateMipmaps),b.push(z.premultiplyAlpha),b.push(z.flipY),b.push(z.unpackAlignment),b.push(z.colorSpace),b.join()}function G(z,b){const ot=r.get(z);if(z.isVideoTexture&&$t(z),z.isRenderTargetTexture===!1&&z.version>0&&ot.__version!==z.version){const at=z.image;if(at===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(at.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Z(ot,z,b);return}}i.bindTexture(o.TEXTURE_2D,ot.__webglTexture,o.TEXTURE0+b)}function dt(z,b){const ot=r.get(z);if(z.version>0&&ot.__version!==z.version){Z(ot,z,b);return}i.bindTexture(o.TEXTURE_2D_ARRAY,ot.__webglTexture,o.TEXTURE0+b)}function pt(z,b){const ot=r.get(z);if(z.version>0&&ot.__version!==z.version){Z(ot,z,b);return}i.bindTexture(o.TEXTURE_3D,ot.__webglTexture,o.TEXTURE0+b)}function F(z,b){const ot=r.get(z);if(z.version>0&&ot.__version!==z.version){xt(ot,z,b);return}i.bindTexture(o.TEXTURE_CUBE_MAP,ot.__webglTexture,o.TEXTURE0+b)}const K={[Ch]:o.REPEAT,[hr]:o.CLAMP_TO_EDGE,[wh]:o.MIRRORED_REPEAT},W={[In]:o.NEAREST,[Xx]:o.NEAREST_MIPMAP_NEAREST,[kl]:o.NEAREST_MIPMAP_LINEAR,[fi]:o.LINEAR,[Vf]:o.LINEAR_MIPMAP_NEAREST,[dr]:o.LINEAR_MIPMAP_LINEAR},vt={[ny]:o.NEVER,[ly]:o.ALWAYS,[iy]:o.LESS,[xv]:o.LEQUAL,[ay]:o.EQUAL,[oy]:o.GEQUAL,[ry]:o.GREATER,[sy]:o.NOTEQUAL};function ut(z,b){if(b.type===Zi&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===fi||b.magFilter===Vf||b.magFilter===kl||b.magFilter===dr||b.minFilter===fi||b.minFilter===Vf||b.minFilter===kl||b.minFilter===dr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),o.texParameteri(z,o.TEXTURE_WRAP_S,K[b.wrapS]),o.texParameteri(z,o.TEXTURE_WRAP_T,K[b.wrapT]),(z===o.TEXTURE_3D||z===o.TEXTURE_2D_ARRAY)&&o.texParameteri(z,o.TEXTURE_WRAP_R,K[b.wrapR]),o.texParameteri(z,o.TEXTURE_MAG_FILTER,W[b.magFilter]),o.texParameteri(z,o.TEXTURE_MIN_FILTER,W[b.minFilter]),b.compareFunction&&(o.texParameteri(z,o.TEXTURE_COMPARE_MODE,o.COMPARE_REF_TO_TEXTURE),o.texParameteri(z,o.TEXTURE_COMPARE_FUNC,vt[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===In||b.minFilter!==kl&&b.minFilter!==dr||b.type===Zi&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||r.get(b).__currentAnisotropy){const ot=e.get("EXT_texture_filter_anisotropic");o.texParameterf(z,ot.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,l.getMaxAnisotropy())),r.get(b).__currentAnisotropy=b.anisotropy}}}function U(z,b){let ot=!1;z.__webglInit===void 0&&(z.__webglInit=!0,b.addEventListener("dispose",P));const at=b.source;let St=x.get(at);St===void 0&&(St={},x.set(at,St));const gt=lt(b);if(gt!==z.__cacheKey){St[gt]===void 0&&(St[gt]={texture:o.createTexture(),usedTimes:0},d.memory.textures++,ot=!0),St[gt].usedTimes++;const Ot=St[z.__cacheKey];Ot!==void 0&&(St[z.__cacheKey].usedTimes--,Ot.usedTimes===0&&N(b)),z.__cacheKey=gt,z.__webglTexture=St[gt].texture}return ot}function Z(z,b,ot){let at=o.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(at=o.TEXTURE_2D_ARRAY),b.isData3DTexture&&(at=o.TEXTURE_3D);const St=U(z,b),gt=b.source;i.bindTexture(at,z.__webglTexture,o.TEXTURE0+ot);const Ot=r.get(gt);if(gt.version!==Ot.__version||St===!0){i.activeTexture(o.TEXTURE0+ot);const At=Ne.getPrimaries(Ne.workingColorSpace),Tt=b.colorSpace===Ua?null:Ne.getPrimaries(b.colorSpace),Zt=b.colorSpace===Ua||At===Tt?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,b.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,b.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Zt);let bt=C(b.image,!1,l.maxTextureSize);bt=ae(b,bt);const Ht=c.convert(b.format,b.colorSpace),ce=c.convert(b.type);let qt=L(b.internalFormat,Ht,ce,b.colorSpace,b.isVideoTexture);ut(at,b);let Dt;const Nt=b.mipmaps,jt=b.isVideoTexture!==!0,fe=Ot.__version===void 0||St===!0,Jt=gt.dataReady,X=D(b,bt);if(b.isDepthTexture)qt=o.DEPTH_COMPONENT16,b.type===Zi?qt=o.DEPTH_COMPONENT32F:b.type===ys?qt=o.DEPTH_COMPONENT24:b.type===Do&&(qt=o.DEPTH24_STENCIL8),fe&&(jt?i.texStorage2D(o.TEXTURE_2D,1,qt,bt.width,bt.height):i.texImage2D(o.TEXTURE_2D,0,qt,bt.width,bt.height,0,Ht,ce,null));else if(b.isDataTexture)if(Nt.length>0){jt&&fe&&i.texStorage2D(o.TEXTURE_2D,X,qt,Nt[0].width,Nt[0].height);for(let Mt=0,ht=Nt.length;Mt<ht;Mt++)Dt=Nt[Mt],jt?Jt&&i.texSubImage2D(o.TEXTURE_2D,Mt,0,0,Dt.width,Dt.height,Ht,ce,Dt.data):i.texImage2D(o.TEXTURE_2D,Mt,qt,Dt.width,Dt.height,0,Ht,ce,Dt.data);b.generateMipmaps=!1}else jt?(fe&&i.texStorage2D(o.TEXTURE_2D,X,qt,bt.width,bt.height),Jt&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,bt.width,bt.height,Ht,ce,bt.data)):i.texImage2D(o.TEXTURE_2D,0,qt,bt.width,bt.height,0,Ht,ce,bt.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){jt&&fe&&i.texStorage3D(o.TEXTURE_2D_ARRAY,X,qt,Nt[0].width,Nt[0].height,bt.depth);for(let Mt=0,ht=Nt.length;Mt<ht;Mt++)Dt=Nt[Mt],b.format!==Mi?Ht!==null?jt?Jt&&i.compressedTexSubImage3D(o.TEXTURE_2D_ARRAY,Mt,0,0,0,Dt.width,Dt.height,bt.depth,Ht,Dt.data,0,0):i.compressedTexImage3D(o.TEXTURE_2D_ARRAY,Mt,qt,Dt.width,Dt.height,bt.depth,0,Dt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):jt?Jt&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,Mt,0,0,0,Dt.width,Dt.height,bt.depth,Ht,ce,Dt.data):i.texImage3D(o.TEXTURE_2D_ARRAY,Mt,qt,Dt.width,Dt.height,bt.depth,0,Ht,ce,Dt.data)}else{jt&&fe&&i.texStorage2D(o.TEXTURE_2D,X,qt,Nt[0].width,Nt[0].height);for(let Mt=0,ht=Nt.length;Mt<ht;Mt++)Dt=Nt[Mt],b.format!==Mi?Ht!==null?jt?Jt&&i.compressedTexSubImage2D(o.TEXTURE_2D,Mt,0,0,Dt.width,Dt.height,Ht,Dt.data):i.compressedTexImage2D(o.TEXTURE_2D,Mt,qt,Dt.width,Dt.height,0,Dt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):jt?Jt&&i.texSubImage2D(o.TEXTURE_2D,Mt,0,0,Dt.width,Dt.height,Ht,ce,Dt.data):i.texImage2D(o.TEXTURE_2D,Mt,qt,Dt.width,Dt.height,0,Ht,ce,Dt.data)}else if(b.isDataArrayTexture)jt?(fe&&i.texStorage3D(o.TEXTURE_2D_ARRAY,X,qt,bt.width,bt.height,bt.depth),Jt&&i.texSubImage3D(o.TEXTURE_2D_ARRAY,0,0,0,0,bt.width,bt.height,bt.depth,Ht,ce,bt.data)):i.texImage3D(o.TEXTURE_2D_ARRAY,0,qt,bt.width,bt.height,bt.depth,0,Ht,ce,bt.data);else if(b.isData3DTexture)jt?(fe&&i.texStorage3D(o.TEXTURE_3D,X,qt,bt.width,bt.height,bt.depth),Jt&&i.texSubImage3D(o.TEXTURE_3D,0,0,0,0,bt.width,bt.height,bt.depth,Ht,ce,bt.data)):i.texImage3D(o.TEXTURE_3D,0,qt,bt.width,bt.height,bt.depth,0,Ht,ce,bt.data);else if(b.isFramebufferTexture){if(fe)if(jt)i.texStorage2D(o.TEXTURE_2D,X,qt,bt.width,bt.height);else{let Mt=bt.width,ht=bt.height;for(let Rt=0;Rt<X;Rt++)i.texImage2D(o.TEXTURE_2D,Rt,qt,Mt,ht,0,Ht,ce,null),Mt>>=1,ht>>=1}}else if(Nt.length>0){if(jt&&fe){const Mt=Ce(Nt[0]);i.texStorage2D(o.TEXTURE_2D,X,qt,Mt.width,Mt.height)}for(let Mt=0,ht=Nt.length;Mt<ht;Mt++)Dt=Nt[Mt],jt?Jt&&i.texSubImage2D(o.TEXTURE_2D,Mt,0,0,Ht,ce,Dt):i.texImage2D(o.TEXTURE_2D,Mt,qt,Ht,ce,Dt);b.generateMipmaps=!1}else if(jt){if(fe){const Mt=Ce(bt);i.texStorage2D(o.TEXTURE_2D,X,qt,Mt.width,Mt.height)}Jt&&i.texSubImage2D(o.TEXTURE_2D,0,0,0,Ht,ce,bt)}else i.texImage2D(o.TEXTURE_2D,0,qt,Ht,ce,bt);y(b)&&v(at),Ot.__version=gt.version,b.onUpdate&&b.onUpdate(b)}z.__version=b.version}function xt(z,b,ot){if(b.image.length!==6)return;const at=U(z,b),St=b.source;i.bindTexture(o.TEXTURE_CUBE_MAP,z.__webglTexture,o.TEXTURE0+ot);const gt=r.get(St);if(St.version!==gt.__version||at===!0){i.activeTexture(o.TEXTURE0+ot);const Ot=Ne.getPrimaries(Ne.workingColorSpace),At=b.colorSpace===Ua?null:Ne.getPrimaries(b.colorSpace),Tt=b.colorSpace===Ua||Ot===At?o.NONE:o.BROWSER_DEFAULT_WEBGL;o.pixelStorei(o.UNPACK_FLIP_Y_WEBGL,b.flipY),o.pixelStorei(o.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),o.pixelStorei(o.UNPACK_ALIGNMENT,b.unpackAlignment),o.pixelStorei(o.UNPACK_COLORSPACE_CONVERSION_WEBGL,Tt);const Zt=b.isCompressedTexture||b.image[0].isCompressedTexture,bt=b.image[0]&&b.image[0].isDataTexture,Ht=[];for(let ht=0;ht<6;ht++)!Zt&&!bt?Ht[ht]=C(b.image[ht],!0,l.maxCubemapSize):Ht[ht]=bt?b.image[ht].image:b.image[ht],Ht[ht]=ae(b,Ht[ht]);const ce=Ht[0],qt=c.convert(b.format,b.colorSpace),Dt=c.convert(b.type),Nt=L(b.internalFormat,qt,Dt,b.colorSpace),jt=b.isVideoTexture!==!0,fe=gt.__version===void 0||at===!0,Jt=St.dataReady;let X=D(b,ce);ut(o.TEXTURE_CUBE_MAP,b);let Mt;if(Zt){jt&&fe&&i.texStorage2D(o.TEXTURE_CUBE_MAP,X,Nt,ce.width,ce.height);for(let ht=0;ht<6;ht++){Mt=Ht[ht].mipmaps;for(let Rt=0;Rt<Mt.length;Rt++){const Ut=Mt[Rt];b.format!==Mi?qt!==null?jt?Jt&&i.compressedTexSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Rt,0,0,Ut.width,Ut.height,qt,Ut.data):i.compressedTexImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Rt,Nt,Ut.width,Ut.height,0,Ut.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):jt?Jt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Rt,0,0,Ut.width,Ut.height,qt,Dt,Ut.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Rt,Nt,Ut.width,Ut.height,0,qt,Dt,Ut.data)}}}else{if(Mt=b.mipmaps,jt&&fe){Mt.length>0&&X++;const ht=Ce(Ht[0]);i.texStorage2D(o.TEXTURE_CUBE_MAP,X,Nt,ht.width,ht.height)}for(let ht=0;ht<6;ht++)if(bt){jt?Jt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,0,0,Ht[ht].width,Ht[ht].height,qt,Dt,Ht[ht].data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,Nt,Ht[ht].width,Ht[ht].height,0,qt,Dt,Ht[ht].data);for(let Rt=0;Rt<Mt.length;Rt++){const oe=Mt[Rt].image[ht].image;jt?Jt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Rt+1,0,0,oe.width,oe.height,qt,Dt,oe.data):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Rt+1,Nt,oe.width,oe.height,0,qt,Dt,oe.data)}}else{jt?Jt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,0,0,qt,Dt,Ht[ht]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0,Nt,qt,Dt,Ht[ht]);for(let Rt=0;Rt<Mt.length;Rt++){const Ut=Mt[Rt];jt?Jt&&i.texSubImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Rt+1,0,0,qt,Dt,Ut.image[ht]):i.texImage2D(o.TEXTURE_CUBE_MAP_POSITIVE_X+ht,Rt+1,Nt,qt,Dt,Ut.image[ht])}}}y(b)&&v(o.TEXTURE_CUBE_MAP),gt.__version=St.version,b.onUpdate&&b.onUpdate(b)}z.__version=b.version}function V(z,b,ot,at,St,gt){const Ot=c.convert(ot.format,ot.colorSpace),At=c.convert(ot.type),Tt=L(ot.internalFormat,Ot,At,ot.colorSpace);if(!r.get(b).__hasExternalTextures){const bt=Math.max(1,b.width>>gt),Ht=Math.max(1,b.height>>gt);St===o.TEXTURE_3D||St===o.TEXTURE_2D_ARRAY?i.texImage3D(St,gt,Tt,bt,Ht,b.depth,0,Ot,At,null):i.texImage2D(St,gt,Tt,bt,Ht,0,Ot,At,null)}i.bindFramebuffer(o.FRAMEBUFFER,z),ie(b)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,at,St,r.get(ot).__webglTexture,0,Ft(b)):(St===o.TEXTURE_2D||St>=o.TEXTURE_CUBE_MAP_POSITIVE_X&&St<=o.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&o.framebufferTexture2D(o.FRAMEBUFFER,at,St,r.get(ot).__webglTexture,gt),i.bindFramebuffer(o.FRAMEBUFFER,null)}function ct(z,b,ot){if(o.bindRenderbuffer(o.RENDERBUFFER,z),b.depthBuffer&&!b.stencilBuffer){let at=o.DEPTH_COMPONENT24;if(ot||ie(b)){const St=b.depthTexture;St&&St.isDepthTexture&&(St.type===Zi?at=o.DEPTH_COMPONENT32F:St.type===ys&&(at=o.DEPTH_COMPONENT24));const gt=Ft(b);ie(b)?h.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,gt,at,b.width,b.height):o.renderbufferStorageMultisample(o.RENDERBUFFER,gt,at,b.width,b.height)}else o.renderbufferStorage(o.RENDERBUFFER,at,b.width,b.height);o.framebufferRenderbuffer(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.RENDERBUFFER,z)}else if(b.depthBuffer&&b.stencilBuffer){const at=Ft(b);ot&&ie(b)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,at,o.DEPTH24_STENCIL8,b.width,b.height):ie(b)?h.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,at,o.DEPTH24_STENCIL8,b.width,b.height):o.renderbufferStorage(o.RENDERBUFFER,o.DEPTH_STENCIL,b.width,b.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.RENDERBUFFER,z)}else{const at=b.textures;for(let St=0;St<at.length;St++){const gt=at[St],Ot=c.convert(gt.format,gt.colorSpace),At=c.convert(gt.type),Tt=L(gt.internalFormat,Ot,At,gt.colorSpace),Zt=Ft(b);ot&&ie(b)===!1?o.renderbufferStorageMultisample(o.RENDERBUFFER,Zt,Tt,b.width,b.height):ie(b)?h.renderbufferStorageMultisampleEXT(o.RENDERBUFFER,Zt,Tt,b.width,b.height):o.renderbufferStorage(o.RENDERBUFFER,Tt,b.width,b.height)}}o.bindRenderbuffer(o.RENDERBUFFER,null)}function Et(z,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(i.bindFramebuffer(o.FRAMEBUFFER,z),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!r.get(b.depthTexture).__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),G(b.depthTexture,0);const at=r.get(b.depthTexture).__webglTexture,St=Ft(b);if(b.depthTexture.format===_s)ie(b)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,at,0,St):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_ATTACHMENT,o.TEXTURE_2D,at,0);else if(b.depthTexture.format===wo)ie(b)?h.framebufferTexture2DMultisampleEXT(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,at,0,St):o.framebufferTexture2D(o.FRAMEBUFFER,o.DEPTH_STENCIL_ATTACHMENT,o.TEXTURE_2D,at,0);else throw new Error("Unknown depthTexture format")}function yt(z){const b=r.get(z),ot=z.isWebGLCubeRenderTarget===!0;if(z.depthTexture&&!b.__autoAllocateDepthBuffer){if(ot)throw new Error("target.depthTexture not supported in Cube render targets");Et(b.__webglFramebuffer,z)}else if(ot){b.__webglDepthbuffer=[];for(let at=0;at<6;at++)i.bindFramebuffer(o.FRAMEBUFFER,b.__webglFramebuffer[at]),b.__webglDepthbuffer[at]=o.createRenderbuffer(),ct(b.__webglDepthbuffer[at],z,!1)}else i.bindFramebuffer(o.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer=o.createRenderbuffer(),ct(b.__webglDepthbuffer,z,!1);i.bindFramebuffer(o.FRAMEBUFFER,null)}function Xt(z,b,ot){const at=r.get(z);b!==void 0&&V(at.__webglFramebuffer,z,z.texture,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,0),ot!==void 0&&yt(z)}function Bt(z){const b=z.texture,ot=r.get(z),at=r.get(b);z.addEventListener("dispose",tt);const St=z.textures,gt=z.isWebGLCubeRenderTarget===!0,Ot=St.length>1;if(Ot||(at.__webglTexture===void 0&&(at.__webglTexture=o.createTexture()),at.__version=b.version,d.memory.textures++),gt){ot.__webglFramebuffer=[];for(let At=0;At<6;At++)if(b.mipmaps&&b.mipmaps.length>0){ot.__webglFramebuffer[At]=[];for(let Tt=0;Tt<b.mipmaps.length;Tt++)ot.__webglFramebuffer[At][Tt]=o.createFramebuffer()}else ot.__webglFramebuffer[At]=o.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){ot.__webglFramebuffer=[];for(let At=0;At<b.mipmaps.length;At++)ot.__webglFramebuffer[At]=o.createFramebuffer()}else ot.__webglFramebuffer=o.createFramebuffer();if(Ot)for(let At=0,Tt=St.length;At<Tt;At++){const Zt=r.get(St[At]);Zt.__webglTexture===void 0&&(Zt.__webglTexture=o.createTexture(),d.memory.textures++)}if(z.samples>0&&ie(z)===!1){ot.__webglMultisampledFramebuffer=o.createFramebuffer(),ot.__webglColorRenderbuffer=[],i.bindFramebuffer(o.FRAMEBUFFER,ot.__webglMultisampledFramebuffer);for(let At=0;At<St.length;At++){const Tt=St[At];ot.__webglColorRenderbuffer[At]=o.createRenderbuffer(),o.bindRenderbuffer(o.RENDERBUFFER,ot.__webglColorRenderbuffer[At]);const Zt=c.convert(Tt.format,Tt.colorSpace),bt=c.convert(Tt.type),Ht=L(Tt.internalFormat,Zt,bt,Tt.colorSpace,z.isXRRenderTarget===!0),ce=Ft(z);o.renderbufferStorageMultisample(o.RENDERBUFFER,ce,Ht,z.width,z.height),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+At,o.RENDERBUFFER,ot.__webglColorRenderbuffer[At])}o.bindRenderbuffer(o.RENDERBUFFER,null),z.depthBuffer&&(ot.__webglDepthRenderbuffer=o.createRenderbuffer(),ct(ot.__webglDepthRenderbuffer,z,!0)),i.bindFramebuffer(o.FRAMEBUFFER,null)}}if(gt){i.bindTexture(o.TEXTURE_CUBE_MAP,at.__webglTexture),ut(o.TEXTURE_CUBE_MAP,b);for(let At=0;At<6;At++)if(b.mipmaps&&b.mipmaps.length>0)for(let Tt=0;Tt<b.mipmaps.length;Tt++)V(ot.__webglFramebuffer[At][Tt],z,b,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+At,Tt);else V(ot.__webglFramebuffer[At],z,b,o.COLOR_ATTACHMENT0,o.TEXTURE_CUBE_MAP_POSITIVE_X+At,0);y(b)&&v(o.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Ot){for(let At=0,Tt=St.length;At<Tt;At++){const Zt=St[At],bt=r.get(Zt);i.bindTexture(o.TEXTURE_2D,bt.__webglTexture),ut(o.TEXTURE_2D,Zt),V(ot.__webglFramebuffer,z,Zt,o.COLOR_ATTACHMENT0+At,o.TEXTURE_2D,0),y(Zt)&&v(o.TEXTURE_2D)}i.unbindTexture()}else{let At=o.TEXTURE_2D;if((z.isWebGL3DRenderTarget||z.isWebGLArrayRenderTarget)&&(At=z.isWebGL3DRenderTarget?o.TEXTURE_3D:o.TEXTURE_2D_ARRAY),i.bindTexture(At,at.__webglTexture),ut(At,b),b.mipmaps&&b.mipmaps.length>0)for(let Tt=0;Tt<b.mipmaps.length;Tt++)V(ot.__webglFramebuffer[Tt],z,b,o.COLOR_ATTACHMENT0,At,Tt);else V(ot.__webglFramebuffer,z,b,o.COLOR_ATTACHMENT0,At,0);y(b)&&v(At),i.unbindTexture()}z.depthBuffer&&yt(z)}function j(z){const b=z.textures;for(let ot=0,at=b.length;ot<at;ot++){const St=b[ot];if(y(St)){const gt=z.isWebGLCubeRenderTarget?o.TEXTURE_CUBE_MAP:o.TEXTURE_2D,Ot=r.get(St).__webglTexture;i.bindTexture(gt,Ot),v(gt),i.unbindTexture()}}}const _e=[],Vt=[];function ve(z){if(z.samples>0){if(ie(z)===!1){const b=z.textures,ot=z.width,at=z.height;let St=o.COLOR_BUFFER_BIT;const gt=z.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT,Ot=r.get(z),At=b.length>1;if(At)for(let Tt=0;Tt<b.length;Tt++)i.bindFramebuffer(o.FRAMEBUFFER,Ot.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Tt,o.RENDERBUFFER,null),i.bindFramebuffer(o.FRAMEBUFFER,Ot.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Tt,o.TEXTURE_2D,null,0);i.bindFramebuffer(o.READ_FRAMEBUFFER,Ot.__webglMultisampledFramebuffer),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ot.__webglFramebuffer);for(let Tt=0;Tt<b.length;Tt++){if(z.resolveDepthBuffer&&(z.depthBuffer&&(St|=o.DEPTH_BUFFER_BIT),z.stencilBuffer&&z.resolveStencilBuffer&&(St|=o.STENCIL_BUFFER_BIT)),At){o.framebufferRenderbuffer(o.READ_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.RENDERBUFFER,Ot.__webglColorRenderbuffer[Tt]);const Zt=r.get(b[Tt]).__webglTexture;o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0,o.TEXTURE_2D,Zt,0)}o.blitFramebuffer(0,0,ot,at,0,0,ot,at,St,o.NEAREST),m===!0&&(_e.length=0,Vt.length=0,_e.push(o.COLOR_ATTACHMENT0+Tt),z.depthBuffer&&z.resolveDepthBuffer===!1&&(_e.push(gt),Vt.push(gt),o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,Vt)),o.invalidateFramebuffer(o.READ_FRAMEBUFFER,_e))}if(i.bindFramebuffer(o.READ_FRAMEBUFFER,null),i.bindFramebuffer(o.DRAW_FRAMEBUFFER,null),At)for(let Tt=0;Tt<b.length;Tt++){i.bindFramebuffer(o.FRAMEBUFFER,Ot.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(o.FRAMEBUFFER,o.COLOR_ATTACHMENT0+Tt,o.RENDERBUFFER,Ot.__webglColorRenderbuffer[Tt]);const Zt=r.get(b[Tt]).__webglTexture;i.bindFramebuffer(o.FRAMEBUFFER,Ot.__webglFramebuffer),o.framebufferTexture2D(o.DRAW_FRAMEBUFFER,o.COLOR_ATTACHMENT0+Tt,o.TEXTURE_2D,Zt,0)}i.bindFramebuffer(o.DRAW_FRAMEBUFFER,Ot.__webglMultisampledFramebuffer)}else if(z.depthBuffer&&z.resolveDepthBuffer===!1&&m){const b=z.stencilBuffer?o.DEPTH_STENCIL_ATTACHMENT:o.DEPTH_ATTACHMENT;o.invalidateFramebuffer(o.DRAW_FRAMEBUFFER,[b])}}}function Ft(z){return Math.min(l.maxSamples,z.samples)}function ie(z){const b=r.get(z);return z.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function $t(z){const b=d.render.frame;g.get(z)!==b&&(g.set(z,b),z.update())}function ae(z,b){const ot=z.colorSpace,at=z.format,St=z.type;return z.isCompressedTexture===!0||z.isVideoTexture===!0||ot!==za&&ot!==Ua&&(Ne.getTransfer(ot)===Fe?(at!==Mi||St!==Pa)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",ot)),b}function Ce(z){return typeof HTMLImageElement<"u"&&z instanceof HTMLImageElement?(p.width=z.naturalWidth||z.width,p.height=z.naturalHeight||z.height):typeof VideoFrame<"u"&&z instanceof VideoFrame?(p.width=z.displayWidth,p.height=z.displayHeight):(p.width=z.width,p.height=z.height),p}this.allocateTextureUnit=q,this.resetTextureUnits=E,this.setTexture2D=G,this.setTexture2DArray=dt,this.setTexture3D=pt,this.setTextureCube=F,this.rebindTextures=Xt,this.setupRenderTarget=Bt,this.updateRenderTargetMipmap=j,this.updateMultisampleRenderTarget=ve,this.setupDepthRenderbuffer=yt,this.setupFrameBufferTexture=V,this.useMultisampledRTT=ie}function ob(o,e){function i(r,l=Ua){let c;const d=Ne.getTransfer(l);if(r===Pa)return o.UNSIGNED_BYTE;if(r===dv)return o.UNSIGNED_SHORT_4_4_4_4;if(r===pv)return o.UNSIGNED_SHORT_5_5_5_1;if(r===qx)return o.UNSIGNED_INT_5_9_9_9_REV;if(r===kx)return o.BYTE;if(r===Wx)return o.SHORT;if(r===fv)return o.UNSIGNED_SHORT;if(r===hv)return o.INT;if(r===ys)return o.UNSIGNED_INT;if(r===Zi)return o.FLOAT;if(r===Tu)return o.HALF_FLOAT;if(r===Yx)return o.ALPHA;if(r===jx)return o.RGB;if(r===Mi)return o.RGBA;if(r===Zx)return o.LUMINANCE;if(r===Kx)return o.LUMINANCE_ALPHA;if(r===_s)return o.DEPTH_COMPONENT;if(r===wo)return o.DEPTH_STENCIL;if(r===mv)return o.RED;if(r===gv)return o.RED_INTEGER;if(r===Qx)return o.RG;if(r===_v)return o.RG_INTEGER;if(r===vv)return o.RGBA_INTEGER;if(r===Xf||r===kf||r===Wf||r===qf)if(d===Fe)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(r===Xf)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===kf)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Wf)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===qf)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(r===Xf)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===kf)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Wf)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===qf)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Bg||r===Ig||r===Fg||r===Hg)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(r===Bg)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Ig)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Fg)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Hg)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Gg||r===Vg||r===Xg)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(r===Gg||r===Vg)return d===Fe?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(r===Xg)return d===Fe?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===kg||r===Wg||r===qg||r===Yg||r===jg||r===Zg||r===Kg||r===Qg||r===Jg||r===$g||r===t_||r===e_||r===n_||r===i_)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(r===kg)return d===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Wg)return d===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===qg)return d===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Yg)return d===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===jg)return d===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Zg)return d===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Kg)return d===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Qg)return d===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Jg)return d===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===$g)return d===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===t_)return d===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===e_)return d===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===n_)return d===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===i_)return d===Fe?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Yf||r===a_||r===r_)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(r===Yf)return d===Fe?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===a_)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===r_)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Jx||r===s_||r===o_||r===l_)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(r===Yf)return c.COMPRESSED_RED_RGTC1_EXT;if(r===s_)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===o_)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===l_)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Do?o.UNSIGNED_INT_24_8:o[r]!==void 0?o[r]:null}return{convert:i}}class lb extends ai{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class hu extends xn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const ub={type:"move"};class yh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new hu,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new hu,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new $,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new $),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new hu,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new $,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new $),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const r of e.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,r){let l=null,c=null,d=null;const h=this._targetRay,m=this._grip,p=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(p&&e.hand){d=!0;for(const C of e.hand.values()){const y=i.getJointPose(C,r),v=this._getHandJoint(p,C);y!==null&&(v.matrix.fromArray(y.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=y.radius),v.visible=y!==null}const g=p.joints["index-finger-tip"],S=p.joints["thumb-tip"],x=g.position.distanceTo(S.position),M=.02,R=.005;p.inputState.pinching&&x>M+R?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&x<=M-R&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(c=i.getPose(e.gripSpace,r),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1));h!==null&&(l=i.getPose(e.targetRaySpace,r),l===null&&c!==null&&(l=c),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(ub)))}return h!==null&&(h.visible=l!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=d!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const r=new hu;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[i.jointName]=r,e.add(r)}return e.joints[i.jointName]}}const cb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,fb=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class hb{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i,r){if(this.texture===null){const l=new wn,c=e.properties.get(l);c.__webglTexture=i.texture,(i.depthNear!=r.depthNear||i.depthFar!=r.depthFar)&&(this.depthNear=i.depthNear,this.depthFar=i.depthFar),this.texture=l}}render(e,i){if(this.texture!==null){if(this.mesh===null){const r=i.cameras[0].viewport,l=new Ji({vertexShader:cb,fragmentShader:fb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:r.z},depthHeight:{value:r.w}}});this.mesh=new Rn(new bu(20,20),l)}e.render(this.mesh,i)}}reset(){this.texture=null,this.mesh=null}}class db extends Es{constructor(e,i){super();const r=this;let l=null,c=1,d=null,h="local-floor",m=1,p=null,g=null,S=null,x=null,M=null,R=null;const C=new hb,y=i.getContextAttributes();let v=null,L=null;const D=[],P=[],tt=new se;let I=null;const N=new ai;N.layers.enable(1),N.viewport=new un;const O=new ai;O.layers.enable(2),O.viewport=new un;const T=[N,O],E=new lb;E.layers.enable(1),E.layers.enable(2);let q=null,lt=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let ct=D[V];return ct===void 0&&(ct=new yh,D[V]=ct),ct.getTargetRaySpace()},this.getControllerGrip=function(V){let ct=D[V];return ct===void 0&&(ct=new yh,D[V]=ct),ct.getGripSpace()},this.getHand=function(V){let ct=D[V];return ct===void 0&&(ct=new yh,D[V]=ct),ct.getHandSpace()};function G(V){const ct=P.indexOf(V.inputSource);if(ct===-1)return;const Et=D[ct];Et!==void 0&&(Et.update(V.inputSource,V.frame,p||d),Et.dispatchEvent({type:V.type,data:V.inputSource}))}function dt(){l.removeEventListener("select",G),l.removeEventListener("selectstart",G),l.removeEventListener("selectend",G),l.removeEventListener("squeeze",G),l.removeEventListener("squeezestart",G),l.removeEventListener("squeezeend",G),l.removeEventListener("end",dt),l.removeEventListener("inputsourceschange",pt);for(let V=0;V<D.length;V++){const ct=P[V];ct!==null&&(P[V]=null,D[V].disconnect(ct))}q=null,lt=null,C.reset(),e.setRenderTarget(v),M=null,x=null,S=null,l=null,L=null,xt.stop(),r.isPresenting=!1,e.setPixelRatio(I),e.setSize(tt.width,tt.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){c=V,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){h=V,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||d},this.setReferenceSpace=function(V){p=V},this.getBaseLayer=function(){return x!==null?x:M},this.getBinding=function(){return S},this.getFrame=function(){return R},this.getSession=function(){return l},this.setSession=async function(V){if(l=V,l!==null){if(v=e.getRenderTarget(),l.addEventListener("select",G),l.addEventListener("selectstart",G),l.addEventListener("selectend",G),l.addEventListener("squeeze",G),l.addEventListener("squeezestart",G),l.addEventListener("squeezeend",G),l.addEventListener("end",dt),l.addEventListener("inputsourceschange",pt),y.xrCompatible!==!0&&await i.makeXRCompatible(),I=e.getPixelRatio(),e.getSize(tt),l.renderState.layers===void 0){const ct={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:c};M=new XRWebGLLayer(l,i,ct),l.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),L=new pr(M.framebufferWidth,M.framebufferHeight,{format:Mi,type:Pa,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil})}else{let ct=null,Et=null,yt=null;y.depth&&(yt=y.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,ct=y.stencil?wo:_s,Et=y.stencil?Do:ys);const Xt={colorFormat:i.RGBA8,depthFormat:yt,scaleFactor:c};S=new XRWebGLBinding(l,i),x=S.createProjectionLayer(Xt),l.updateRenderState({layers:[x]}),e.setPixelRatio(1),e.setSize(x.textureWidth,x.textureHeight,!1),L=new pr(x.textureWidth,x.textureHeight,{format:Mi,type:Pa,depthTexture:new Pv(x.textureWidth,x.textureHeight,Et,void 0,void 0,void 0,void 0,void 0,void 0,ct),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1})}L.isXRRenderTarget=!0,this.setFoveation(m),p=null,d=await l.requestReferenceSpace(h),xt.setContext(l),xt.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode};function pt(V){for(let ct=0;ct<V.removed.length;ct++){const Et=V.removed[ct],yt=P.indexOf(Et);yt>=0&&(P[yt]=null,D[yt].disconnect(Et))}for(let ct=0;ct<V.added.length;ct++){const Et=V.added[ct];let yt=P.indexOf(Et);if(yt===-1){for(let Bt=0;Bt<D.length;Bt++)if(Bt>=P.length){P.push(Et),yt=Bt;break}else if(P[Bt]===null){P[Bt]=Et,yt=Bt;break}if(yt===-1)break}const Xt=D[yt];Xt&&Xt.connect(Et)}}const F=new $,K=new $;function W(V,ct,Et){F.setFromMatrixPosition(ct.matrixWorld),K.setFromMatrixPosition(Et.matrixWorld);const yt=F.distanceTo(K),Xt=ct.projectionMatrix.elements,Bt=Et.projectionMatrix.elements,j=Xt[14]/(Xt[10]-1),_e=Xt[14]/(Xt[10]+1),Vt=(Xt[9]+1)/Xt[5],ve=(Xt[9]-1)/Xt[5],Ft=(Xt[8]-1)/Xt[0],ie=(Bt[8]+1)/Bt[0],$t=j*Ft,ae=j*ie,Ce=yt/(-Ft+ie),z=Ce*-Ft;ct.matrixWorld.decompose(V.position,V.quaternion,V.scale),V.translateX(z),V.translateZ(Ce),V.matrixWorld.compose(V.position,V.quaternion,V.scale),V.matrixWorldInverse.copy(V.matrixWorld).invert();const b=j+Ce,ot=_e+Ce,at=$t-z,St=ae+(yt-z),gt=Vt*_e/ot*b,Ot=ve*_e/ot*b;V.projectionMatrix.makePerspective(at,St,gt,Ot,b,ot),V.projectionMatrixInverse.copy(V.projectionMatrix).invert()}function vt(V,ct){ct===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices(ct.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(l===null)return;C.texture!==null&&(V.near=C.depthNear,V.far=C.depthFar),E.near=O.near=N.near=V.near,E.far=O.far=N.far=V.far,(q!==E.near||lt!==E.far)&&(l.updateRenderState({depthNear:E.near,depthFar:E.far}),q=E.near,lt=E.far,N.near=q,N.far=lt,O.near=q,O.far=lt,N.updateProjectionMatrix(),O.updateProjectionMatrix(),V.updateProjectionMatrix());const ct=V.parent,Et=E.cameras;vt(E,ct);for(let yt=0;yt<Et.length;yt++)vt(Et[yt],ct);Et.length===2?W(E,N,O):E.projectionMatrix.copy(N.projectionMatrix),ut(V,E,ct)};function ut(V,ct,Et){Et===null?V.matrix.copy(ct.matrixWorld):(V.matrix.copy(Et.matrixWorld),V.matrix.invert(),V.matrix.multiply(ct.matrixWorld)),V.matrix.decompose(V.position,V.quaternion,V.scale),V.updateMatrixWorld(!0),V.projectionMatrix.copy(ct.projectionMatrix),V.projectionMatrixInverse.copy(ct.projectionMatrixInverse),V.isPerspectiveCamera&&(V.fov=Dh*2*Math.atan(1/V.projectionMatrix.elements[5]),V.zoom=1)}this.getCamera=function(){return E},this.getFoveation=function(){if(!(x===null&&M===null))return m},this.setFoveation=function(V){m=V,x!==null&&(x.fixedFoveation=V),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=V)},this.hasDepthSensing=function(){return C.texture!==null};let U=null;function Z(V,ct){if(g=ct.getViewerPose(p||d),R=ct,g!==null){const Et=g.views;M!==null&&(e.setRenderTargetFramebuffer(L,M.framebuffer),e.setRenderTarget(L));let yt=!1;Et.length!==E.cameras.length&&(E.cameras.length=0,yt=!0);for(let Bt=0;Bt<Et.length;Bt++){const j=Et[Bt];let _e=null;if(M!==null)_e=M.getViewport(j);else{const ve=S.getViewSubImage(x,j);_e=ve.viewport,Bt===0&&(e.setRenderTargetTextures(L,ve.colorTexture,x.ignoreDepthValues?void 0:ve.depthStencilTexture),e.setRenderTarget(L))}let Vt=T[Bt];Vt===void 0&&(Vt=new ai,Vt.layers.enable(Bt),Vt.viewport=new un,T[Bt]=Vt),Vt.matrix.fromArray(j.transform.matrix),Vt.matrix.decompose(Vt.position,Vt.quaternion,Vt.scale),Vt.projectionMatrix.fromArray(j.projectionMatrix),Vt.projectionMatrixInverse.copy(Vt.projectionMatrix).invert(),Vt.viewport.set(_e.x,_e.y,_e.width,_e.height),Bt===0&&(E.matrix.copy(Vt.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale)),yt===!0&&E.cameras.push(Vt)}const Xt=l.enabledFeatures;if(Xt&&Xt.includes("depth-sensing")){const Bt=S.getDepthInformation(Et[0]);Bt&&Bt.isValid&&Bt.texture&&C.init(e,Bt,l.renderState)}}for(let Et=0;Et<D.length;Et++){const yt=P[Et],Xt=D[Et];yt!==null&&Xt!==void 0&&Xt.update(yt,ct,p||d)}C.render(e,E),U&&U(V,ct),ct.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:ct}),R=null}const xt=new Nv;xt.setAnimationLoop(Z),this.setAnimationLoop=function(V){U=V},this.dispose=function(){}}}const lr=new Qi,pb=new Pe;function mb(o,e){function i(y,v){y.matrixAutoUpdate===!0&&y.updateMatrix(),v.value.copy(y.matrix)}function r(y,v){v.color.getRGB(y.fogColor.value,wv(o)),v.isFog?(y.fogNear.value=v.near,y.fogFar.value=v.far):v.isFogExp2&&(y.fogDensity.value=v.density)}function l(y,v,L,D,P){v.isMeshBasicMaterial||v.isMeshLambertMaterial?c(y,v):v.isMeshToonMaterial?(c(y,v),S(y,v)):v.isMeshPhongMaterial?(c(y,v),g(y,v)):v.isMeshStandardMaterial?(c(y,v),x(y,v),v.isMeshPhysicalMaterial&&M(y,v,P)):v.isMeshMatcapMaterial?(c(y,v),R(y,v)):v.isMeshDepthMaterial?c(y,v):v.isMeshDistanceMaterial?(c(y,v),C(y,v)):v.isMeshNormalMaterial?c(y,v):v.isLineBasicMaterial?(d(y,v),v.isLineDashedMaterial&&h(y,v)):v.isPointsMaterial?m(y,v,L,D):v.isSpriteMaterial?p(y,v):v.isShadowMaterial?(y.color.value.copy(v.color),y.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function c(y,v){y.opacity.value=v.opacity,v.color&&y.diffuse.value.copy(v.color),v.emissive&&y.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(y.map.value=v.map,i(v.map,y.mapTransform)),v.alphaMap&&(y.alphaMap.value=v.alphaMap,i(v.alphaMap,y.alphaMapTransform)),v.bumpMap&&(y.bumpMap.value=v.bumpMap,i(v.bumpMap,y.bumpMapTransform),y.bumpScale.value=v.bumpScale,v.side===Cn&&(y.bumpScale.value*=-1)),v.normalMap&&(y.normalMap.value=v.normalMap,i(v.normalMap,y.normalMapTransform),y.normalScale.value.copy(v.normalScale),v.side===Cn&&y.normalScale.value.negate()),v.displacementMap&&(y.displacementMap.value=v.displacementMap,i(v.displacementMap,y.displacementMapTransform),y.displacementScale.value=v.displacementScale,y.displacementBias.value=v.displacementBias),v.emissiveMap&&(y.emissiveMap.value=v.emissiveMap,i(v.emissiveMap,y.emissiveMapTransform)),v.specularMap&&(y.specularMap.value=v.specularMap,i(v.specularMap,y.specularMapTransform)),v.alphaTest>0&&(y.alphaTest.value=v.alphaTest);const L=e.get(v),D=L.envMap,P=L.envMapRotation;if(D&&(y.envMap.value=D,lr.copy(P),lr.x*=-1,lr.y*=-1,lr.z*=-1,D.isCubeTexture&&D.isRenderTargetTexture===!1&&(lr.y*=-1,lr.z*=-1),y.envMapRotation.value.setFromMatrix4(pb.makeRotationFromEuler(lr)),y.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=v.reflectivity,y.ior.value=v.ior,y.refractionRatio.value=v.refractionRatio),v.lightMap){y.lightMap.value=v.lightMap;const tt=o._useLegacyLights===!0?Math.PI:1;y.lightMapIntensity.value=v.lightMapIntensity*tt,i(v.lightMap,y.lightMapTransform)}v.aoMap&&(y.aoMap.value=v.aoMap,y.aoMapIntensity.value=v.aoMapIntensity,i(v.aoMap,y.aoMapTransform))}function d(y,v){y.diffuse.value.copy(v.color),y.opacity.value=v.opacity,v.map&&(y.map.value=v.map,i(v.map,y.mapTransform))}function h(y,v){y.dashSize.value=v.dashSize,y.totalSize.value=v.dashSize+v.gapSize,y.scale.value=v.scale}function m(y,v,L,D){y.diffuse.value.copy(v.color),y.opacity.value=v.opacity,y.size.value=v.size*L,y.scale.value=D*.5,v.map&&(y.map.value=v.map,i(v.map,y.uvTransform)),v.alphaMap&&(y.alphaMap.value=v.alphaMap,i(v.alphaMap,y.alphaMapTransform)),v.alphaTest>0&&(y.alphaTest.value=v.alphaTest)}function p(y,v){y.diffuse.value.copy(v.color),y.opacity.value=v.opacity,y.rotation.value=v.rotation,v.map&&(y.map.value=v.map,i(v.map,y.mapTransform)),v.alphaMap&&(y.alphaMap.value=v.alphaMap,i(v.alphaMap,y.alphaMapTransform)),v.alphaTest>0&&(y.alphaTest.value=v.alphaTest)}function g(y,v){y.specular.value.copy(v.specular),y.shininess.value=Math.max(v.shininess,1e-4)}function S(y,v){v.gradientMap&&(y.gradientMap.value=v.gradientMap)}function x(y,v){y.metalness.value=v.metalness,v.metalnessMap&&(y.metalnessMap.value=v.metalnessMap,i(v.metalnessMap,y.metalnessMapTransform)),y.roughness.value=v.roughness,v.roughnessMap&&(y.roughnessMap.value=v.roughnessMap,i(v.roughnessMap,y.roughnessMapTransform)),v.envMap&&(y.envMapIntensity.value=v.envMapIntensity)}function M(y,v,L){y.ior.value=v.ior,v.sheen>0&&(y.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),y.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(y.sheenColorMap.value=v.sheenColorMap,i(v.sheenColorMap,y.sheenColorMapTransform)),v.sheenRoughnessMap&&(y.sheenRoughnessMap.value=v.sheenRoughnessMap,i(v.sheenRoughnessMap,y.sheenRoughnessMapTransform))),v.clearcoat>0&&(y.clearcoat.value=v.clearcoat,y.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(y.clearcoatMap.value=v.clearcoatMap,i(v.clearcoatMap,y.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,i(v.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(y.clearcoatNormalMap.value=v.clearcoatNormalMap,i(v.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===Cn&&y.clearcoatNormalScale.value.negate())),v.dispersion>0&&(y.dispersion.value=v.dispersion),v.iridescence>0&&(y.iridescence.value=v.iridescence,y.iridescenceIOR.value=v.iridescenceIOR,y.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(y.iridescenceMap.value=v.iridescenceMap,i(v.iridescenceMap,y.iridescenceMapTransform)),v.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=v.iridescenceThicknessMap,i(v.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),v.transmission>0&&(y.transmission.value=v.transmission,y.transmissionSamplerMap.value=L.texture,y.transmissionSamplerSize.value.set(L.width,L.height),v.transmissionMap&&(y.transmissionMap.value=v.transmissionMap,i(v.transmissionMap,y.transmissionMapTransform)),y.thickness.value=v.thickness,v.thicknessMap&&(y.thicknessMap.value=v.thicknessMap,i(v.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=v.attenuationDistance,y.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(y.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(y.anisotropyMap.value=v.anisotropyMap,i(v.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=v.specularIntensity,y.specularColor.value.copy(v.specularColor),v.specularColorMap&&(y.specularColorMap.value=v.specularColorMap,i(v.specularColorMap,y.specularColorMapTransform)),v.specularIntensityMap&&(y.specularIntensityMap.value=v.specularIntensityMap,i(v.specularIntensityMap,y.specularIntensityMapTransform))}function R(y,v){v.matcap&&(y.matcap.value=v.matcap)}function C(y,v){const L=e.get(v).light;y.referencePosition.value.setFromMatrixPosition(L.matrixWorld),y.nearDistance.value=L.shadow.camera.near,y.farDistance.value=L.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function gb(o,e,i,r){let l={},c={},d=[];const h=o.getParameter(o.MAX_UNIFORM_BUFFER_BINDINGS);function m(L,D){const P=D.program;r.uniformBlockBinding(L,P)}function p(L,D){let P=l[L.id];P===void 0&&(R(L),P=g(L),l[L.id]=P,L.addEventListener("dispose",y));const tt=D.program;r.updateUBOMapping(L,tt);const I=e.render.frame;c[L.id]!==I&&(x(L),c[L.id]=I)}function g(L){const D=S();L.__bindingPointIndex=D;const P=o.createBuffer(),tt=L.__size,I=L.usage;return o.bindBuffer(o.UNIFORM_BUFFER,P),o.bufferData(o.UNIFORM_BUFFER,tt,I),o.bindBuffer(o.UNIFORM_BUFFER,null),o.bindBufferBase(o.UNIFORM_BUFFER,D,P),P}function S(){for(let L=0;L<h;L++)if(d.indexOf(L)===-1)return d.push(L),L;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(L){const D=l[L.id],P=L.uniforms,tt=L.__cache;o.bindBuffer(o.UNIFORM_BUFFER,D);for(let I=0,N=P.length;I<N;I++){const O=Array.isArray(P[I])?P[I]:[P[I]];for(let T=0,E=O.length;T<E;T++){const q=O[T];if(M(q,I,T,tt)===!0){const lt=q.__offset,G=Array.isArray(q.value)?q.value:[q.value];let dt=0;for(let pt=0;pt<G.length;pt++){const F=G[pt],K=C(F);typeof F=="number"||typeof F=="boolean"?(q.__data[0]=F,o.bufferSubData(o.UNIFORM_BUFFER,lt+dt,q.__data)):F.isMatrix3?(q.__data[0]=F.elements[0],q.__data[1]=F.elements[1],q.__data[2]=F.elements[2],q.__data[3]=0,q.__data[4]=F.elements[3],q.__data[5]=F.elements[4],q.__data[6]=F.elements[5],q.__data[7]=0,q.__data[8]=F.elements[6],q.__data[9]=F.elements[7],q.__data[10]=F.elements[8],q.__data[11]=0):(F.toArray(q.__data,dt),dt+=K.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(o.UNIFORM_BUFFER,lt,q.__data)}}}o.bindBuffer(o.UNIFORM_BUFFER,null)}function M(L,D,P,tt){const I=L.value,N=D+"_"+P;if(tt[N]===void 0)return typeof I=="number"||typeof I=="boolean"?tt[N]=I:tt[N]=I.clone(),!0;{const O=tt[N];if(typeof I=="number"||typeof I=="boolean"){if(O!==I)return tt[N]=I,!0}else if(O.equals(I)===!1)return O.copy(I),!0}return!1}function R(L){const D=L.uniforms;let P=0;const tt=16;for(let N=0,O=D.length;N<O;N++){const T=Array.isArray(D[N])?D[N]:[D[N]];for(let E=0,q=T.length;E<q;E++){const lt=T[E],G=Array.isArray(lt.value)?lt.value:[lt.value];for(let dt=0,pt=G.length;dt<pt;dt++){const F=G[dt],K=C(F),W=P%tt;W!==0&&tt-W<K.boundary&&(P+=tt-W),lt.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),lt.__offset=P,P+=K.storage}}}const I=P%tt;return I>0&&(P+=tt-I),L.__size=P,L.__cache={},this}function C(L){const D={boundary:0,storage:0};return typeof L=="number"||typeof L=="boolean"?(D.boundary=4,D.storage=4):L.isVector2?(D.boundary=8,D.storage=8):L.isVector3||L.isColor?(D.boundary=16,D.storage=12):L.isVector4?(D.boundary=16,D.storage=16):L.isMatrix3?(D.boundary=48,D.storage=48):L.isMatrix4?(D.boundary=64,D.storage=64):L.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",L),D}function y(L){const D=L.target;D.removeEventListener("dispose",y);const P=d.indexOf(D.__bindingPointIndex);d.splice(P,1),o.deleteBuffer(l[D.id]),delete l[D.id],delete c[D.id]}function v(){for(const L in l)o.deleteBuffer(l[L]);d=[],l={},c={}}return{bind:m,update:p,dispose:v}}class _b{constructor(e={}){const{canvas:i=cy(),context:r=null,depth:l=!0,stencil:c=!1,alpha:d=!1,antialias:h=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:S=!1}=e;this.isWebGLRenderer=!0;let x;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=r.getContextAttributes().alpha}else x=d;const M=new Uint32Array(4),R=new Int32Array(4);let C=null,y=null;const v=[],L=[];this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Si,this._useLegacyLights=!1,this.toneMapping=Na,this.toneMappingExposure=1;const D=this;let P=!1,tt=0,I=0,N=null,O=-1,T=null;const E=new un,q=new un;let lt=null;const G=new Se(0);let dt=0,pt=i.width,F=i.height,K=1,W=null,vt=null;const ut=new un(0,0,pt,F),U=new un(0,0,pt,F);let Z=!1;const xt=new Bh;let V=!1,ct=!1;const Et=new Pe,yt=new $,Xt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Bt(){return N===null?K:1}let j=r;function _e(w,Y){return i.getContext(w,Y)}try{const w={alpha:!0,depth:l,stencil:c,antialias:h,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:g,failIfMajorPerformanceCaveat:S};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Oh}`),i.addEventListener("webglcontextlost",X,!1),i.addEventListener("webglcontextrestored",Mt,!1),i.addEventListener("webglcontextcreationerror",ht,!1),j===null){const Y="webgl2";if(j=_e(Y,w),j===null)throw _e(Y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let Vt,ve,Ft,ie,$t,ae,Ce,z,b,ot,at,St,gt,Ot,At,Tt,Zt,bt,Ht,ce,qt,Dt,Nt,jt;function fe(){Vt=new AT(j),Vt.init(),Dt=new ob(j,Vt),ve=new ST(j,Vt,e,Dt),Ft=new rb(j),ie=new CT(j),$t=new WA,ae=new sb(j,Vt,Ft,$t,ve,Dt,ie),Ce=new yT(D),z=new TT(D),b=new Py(j),Nt=new _T(j,b),ot=new bT(j,b,ie,Nt),at=new DT(j,ot,b,ie),Ht=new wT(j,ve,ae),Tt=new xT($t),St=new kA(D,Ce,z,Vt,ve,Nt,Tt),gt=new mb(D,$t),Ot=new YA,At=new $A(Vt),bt=new gT(D,Ce,z,Ft,at,x,m),Zt=new ab(D,at,ve),jt=new gb(j,ie,ve,Ft),ce=new vT(j,Vt,ie),qt=new RT(j,Vt,ie),ie.programs=St.programs,D.capabilities=ve,D.extensions=Vt,D.properties=$t,D.renderLists=Ot,D.shadowMap=Zt,D.state=Ft,D.info=ie}fe();const Jt=new db(D,j);this.xr=Jt,this.getContext=function(){return j},this.getContextAttributes=function(){return j.getContextAttributes()},this.forceContextLoss=function(){const w=Vt.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=Vt.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return K},this.setPixelRatio=function(w){w!==void 0&&(K=w,this.setSize(pt,F,!1))},this.getSize=function(w){return w.set(pt,F)},this.setSize=function(w,Y,st=!0){if(Jt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}pt=w,F=Y,i.width=Math.floor(w*K),i.height=Math.floor(Y*K),st===!0&&(i.style.width=w+"px",i.style.height=Y+"px"),this.setViewport(0,0,w,Y)},this.getDrawingBufferSize=function(w){return w.set(pt*K,F*K).floor()},this.setDrawingBufferSize=function(w,Y,st){pt=w,F=Y,K=st,i.width=Math.floor(w*st),i.height=Math.floor(Y*st),this.setViewport(0,0,w,Y)},this.getCurrentViewport=function(w){return w.copy(E)},this.getViewport=function(w){return w.copy(ut)},this.setViewport=function(w,Y,st,it){w.isVector4?ut.set(w.x,w.y,w.z,w.w):ut.set(w,Y,st,it),Ft.viewport(E.copy(ut).multiplyScalar(K).round())},this.getScissor=function(w){return w.copy(U)},this.setScissor=function(w,Y,st,it){w.isVector4?U.set(w.x,w.y,w.z,w.w):U.set(w,Y,st,it),Ft.scissor(q.copy(U).multiplyScalar(K).round())},this.getScissorTest=function(){return Z},this.setScissorTest=function(w){Ft.setScissorTest(Z=w)},this.setOpaqueSort=function(w){W=w},this.setTransparentSort=function(w){vt=w},this.getClearColor=function(w){return w.copy(bt.getClearColor())},this.setClearColor=function(){bt.setClearColor.apply(bt,arguments)},this.getClearAlpha=function(){return bt.getClearAlpha()},this.setClearAlpha=function(){bt.setClearAlpha.apply(bt,arguments)},this.clear=function(w=!0,Y=!0,st=!0){let it=0;if(w){let nt=!1;if(N!==null){const Ct=N.texture.format;nt=Ct===vv||Ct===_v||Ct===gv}if(nt){const Ct=N.texture.type,zt=Ct===Pa||Ct===ys||Ct===fv||Ct===Do||Ct===dv||Ct===pv,Pt=bt.getClearColor(),kt=bt.getClearAlpha(),Kt=Pt.r,Qt=Pt.g,Gt=Pt.b;zt?(M[0]=Kt,M[1]=Qt,M[2]=Gt,M[3]=kt,j.clearBufferuiv(j.COLOR,0,M)):(R[0]=Kt,R[1]=Qt,R[2]=Gt,R[3]=kt,j.clearBufferiv(j.COLOR,0,R))}else it|=j.COLOR_BUFFER_BIT}Y&&(it|=j.DEPTH_BUFFER_BIT),st&&(it|=j.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),j.clear(it)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",X,!1),i.removeEventListener("webglcontextrestored",Mt,!1),i.removeEventListener("webglcontextcreationerror",ht,!1),Ot.dispose(),At.dispose(),$t.dispose(),Ce.dispose(),z.dispose(),at.dispose(),Nt.dispose(),jt.dispose(),St.dispose(),Jt.dispose(),Jt.removeEventListener("sessionstart",xe),Jt.removeEventListener("sessionend",Dn),ke.stop()};function X(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),P=!0}function Mt(){console.log("THREE.WebGLRenderer: Context Restored."),P=!1;const w=ie.autoReset,Y=Zt.enabled,st=Zt.autoUpdate,it=Zt.needsUpdate,nt=Zt.type;fe(),ie.autoReset=w,Zt.enabled=Y,Zt.autoUpdate=st,Zt.needsUpdate=it,Zt.type=nt}function ht(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Rt(w){const Y=w.target;Y.removeEventListener("dispose",Rt),Ut(Y)}function Ut(w){oe(w),$t.remove(w)}function oe(w){const Y=$t.get(w).programs;Y!==void 0&&(Y.forEach(function(st){St.releaseProgram(st)}),w.isShaderMaterial&&St.releaseShaderCache(w))}this.renderBufferDirect=function(w,Y,st,it,nt,Ct){Y===null&&(Y=Xt);const zt=nt.isMesh&&nt.matrixWorld.determinant()<0,Pt=di(w,Y,st,it,nt);Ft.setMaterial(it,zt);let kt=st.index,Kt=1;if(it.wireframe===!0){if(kt=ot.getWireframeAttribute(st),kt===void 0)return;Kt=2}const Qt=st.drawRange,Gt=st.attributes.position;let Ge=Qt.start*Kt,tn=(Qt.start+Qt.count)*Kt;Ct!==null&&(Ge=Math.max(Ge,Ct.start*Kt),tn=Math.min(tn,(Ct.start+Ct.count)*Kt)),kt!==null?(Ge=Math.max(Ge,0),tn=Math.min(tn,kt.count)):Gt!=null&&(Ge=Math.max(Ge,0),tn=Math.min(tn,Gt.count));const We=tn-Ge;if(We<0||We===1/0)return;Nt.setup(nt,it,Pt,st,kt);let mn,ye=ce;if(kt!==null&&(mn=b.get(kt),ye=qt,ye.setIndex(mn)),nt.isMesh)it.wireframe===!0?(Ft.setLineWidth(it.wireframeLinewidth*Bt()),ye.setMode(j.LINES)):ye.setMode(j.TRIANGLES);else if(nt.isLine){let te=it.linewidth;te===void 0&&(te=1),Ft.setLineWidth(te*Bt()),nt.isLineSegments?ye.setMode(j.LINES):nt.isLineLoop?ye.setMode(j.LINE_LOOP):ye.setMode(j.LINE_STRIP)}else nt.isPoints?ye.setMode(j.POINTS):nt.isSprite&&ye.setMode(j.TRIANGLES);if(nt.isBatchedMesh)nt._multiDrawInstances!==null?ye.renderMultiDrawInstances(nt._multiDrawStarts,nt._multiDrawCounts,nt._multiDrawCount,nt._multiDrawInstances):ye.renderMultiDraw(nt._multiDrawStarts,nt._multiDrawCounts,nt._multiDrawCount);else if(nt.isInstancedMesh)ye.renderInstances(Ge,We,nt.count);else if(st.isInstancedBufferGeometry){const te=st._maxInstanceCount!==void 0?st._maxInstanceCount:1/0,ta=Math.min(st.instanceCount,te);ye.renderInstances(Ge,We,ta)}else ye.render(Ge,We)};function Ae(w,Y,st){w.transparent===!0&&w.side===ji&&w.forceSinglePass===!1?(w.side=Cn,w.needsUpdate=!0,$i(w,Y,st),w.side=Oa,w.needsUpdate=!0,$i(w,Y,st),w.side=ji):$i(w,Y,st)}this.compile=function(w,Y,st=null){st===null&&(st=w),y=At.get(st),y.init(Y),L.push(y),st.traverseVisible(function(nt){nt.isLight&&nt.layers.test(Y.layers)&&(y.pushLight(nt),nt.castShadow&&y.pushShadow(nt))}),w!==st&&w.traverseVisible(function(nt){nt.isLight&&nt.layers.test(Y.layers)&&(y.pushLight(nt),nt.castShadow&&y.pushShadow(nt))}),y.setupLights(D._useLegacyLights);const it=new Set;return w.traverse(function(nt){const Ct=nt.material;if(Ct)if(Array.isArray(Ct))for(let zt=0;zt<Ct.length;zt++){const Pt=Ct[zt];Ae(Pt,st,nt),it.add(Pt)}else Ae(Ct,st,nt),it.add(Ct)}),L.pop(),y=null,it},this.compileAsync=function(w,Y,st=null){const it=this.compile(w,Y,st);return new Promise(nt=>{function Ct(){if(it.forEach(function(zt){$t.get(zt).currentProgram.isReady()&&it.delete(zt)}),it.size===0){nt(w);return}setTimeout(Ct,10)}Vt.get("KHR_parallel_shader_compile")!==null?Ct():setTimeout(Ct,10)})};let we=null;function sn(w){we&&we(w)}function xe(){ke.stop()}function Dn(){ke.start()}const ke=new Nv;ke.setAnimationLoop(sn),typeof self<"u"&&ke.setContext(self),this.setAnimationLoop=function(w){we=w,Jt.setAnimationLoop(w),w===null?ke.stop():ke.start()},Jt.addEventListener("sessionstart",xe),Jt.addEventListener("sessionend",Dn),this.render=function(w,Y){if(Y!==void 0&&Y.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),Jt.enabled===!0&&Jt.isPresenting===!0&&(Jt.cameraAutoUpdate===!0&&Jt.updateCamera(Y),Y=Jt.getCamera()),w.isScene===!0&&w.onBeforeRender(D,w,Y,N),y=At.get(w,L.length),y.init(Y),L.push(y),Et.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),xt.setFromProjectionMatrix(Et),ct=this.localClippingEnabled,V=Tt.init(this.clippingPlanes,ct),C=Ot.get(w,v.length),C.init(),v.push(C),Oo(w,Y,0,D.sortObjects),C.finish(),D.sortObjects===!0&&C.sort(W,vt);const st=Jt.enabled===!1||Jt.isPresenting===!1||Jt.hasDepthSensing()===!1;st&&bt.addToRenderList(C,w),this.info.render.frame++,V===!0&&Tt.beginShadows();const it=y.state.shadowsArray;Zt.render(it,w,Y),V===!0&&Tt.endShadows(),this.info.autoReset===!0&&this.info.reset();const nt=C.opaque,Ct=C.transmissive;if(y.setupLights(D._useLegacyLights),Y.isArrayCamera){const zt=Y.cameras;if(Ct.length>0)for(let Pt=0,kt=zt.length;Pt<kt;Pt++){const Kt=zt[Pt];Rs(nt,Ct,w,Kt)}st&&bt.render(w);for(let Pt=0,kt=zt.length;Pt<kt;Pt++){const Kt=zt[Pt];bs(C,w,Kt,Kt.viewport)}}else Ct.length>0&&Rs(nt,Ct,w,Y),st&&bt.render(w),bs(C,w,Y);N!==null&&(ae.updateMultisampleRenderTarget(N),ae.updateRenderTargetMipmap(N)),w.isScene===!0&&w.onAfterRender(D,w,Y),Nt.resetDefaultState(),O=-1,T=null,L.pop(),L.length>0?(y=L[L.length-1],V===!0&&Tt.setGlobalState(D.clippingPlanes,y.state.camera)):y=null,v.pop(),v.length>0?C=v[v.length-1]:C=null};function Oo(w,Y,st,it){if(w.visible===!1)return;if(w.layers.test(Y.layers)){if(w.isGroup)st=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(Y);else if(w.isLight)y.pushLight(w),w.castShadow&&y.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||xt.intersectsSprite(w)){it&&yt.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Et);const zt=at.update(w),Pt=w.material;Pt.visible&&C.push(w,zt,Pt,st,yt.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||xt.intersectsObject(w))){const zt=at.update(w),Pt=w.material;if(it&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),yt.copy(w.boundingSphere.center)):(zt.boundingSphere===null&&zt.computeBoundingSphere(),yt.copy(zt.boundingSphere.center)),yt.applyMatrix4(w.matrixWorld).applyMatrix4(Et)),Array.isArray(Pt)){const kt=zt.groups;for(let Kt=0,Qt=kt.length;Kt<Qt;Kt++){const Gt=kt[Kt],Ge=Pt[Gt.materialIndex];Ge&&Ge.visible&&C.push(w,zt,Ge,st,yt.z,Gt)}}else Pt.visible&&C.push(w,zt,Pt,st,yt.z,null)}}const Ct=w.children;for(let zt=0,Pt=Ct.length;zt<Pt;zt++)Oo(Ct[zt],Y,st,it)}function bs(w,Y,st,it){const nt=w.opaque,Ct=w.transmissive,zt=w.transparent;y.setupLightsView(st),V===!0&&Tt.setGlobalState(D.clippingPlanes,st),it&&Ft.viewport(E.copy(it)),nt.length>0&&Ia(nt,Y,st),Ct.length>0&&Ia(Ct,Y,st),zt.length>0&&Ia(zt,Y,st),Ft.buffers.depth.setTest(!0),Ft.buffers.depth.setMask(!0),Ft.buffers.color.setMask(!0),Ft.setPolygonOffset(!1)}function Rs(w,Y,st,it){if((st.isScene===!0?st.overrideMaterial:null)!==null)return;y.state.transmissionRenderTarget[it.id]===void 0&&(y.state.transmissionRenderTarget[it.id]=new pr(1,1,{generateMipmaps:!0,type:Vt.has("EXT_color_buffer_half_float")||Vt.has("EXT_color_buffer_float")?Tu:Pa,minFilter:dr,samples:4,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1}));const Ct=y.state.transmissionRenderTarget[it.id],zt=it.viewport||E;Ct.setSize(zt.z,zt.w);const Pt=D.getRenderTarget();D.setRenderTarget(Ct),D.getClearColor(G),dt=D.getClearAlpha(),dt<1&&D.setClearColor(16777215,.5),D.clear();const kt=D.toneMapping;D.toneMapping=Na;const Kt=it.viewport;if(it.viewport!==void 0&&(it.viewport=void 0),y.setupLightsView(it),V===!0&&Tt.setGlobalState(D.clippingPlanes,it),Ia(w,st,it),ae.updateMultisampleRenderTarget(Ct),ae.updateRenderTargetMipmap(Ct),Vt.has("WEBGL_multisampled_render_to_texture")===!1){let Qt=!1;for(let Gt=0,Ge=Y.length;Gt<Ge;Gt++){const tn=Y[Gt],We=tn.object,mn=tn.geometry,ye=tn.material,te=tn.group;if(ye.side===ji&&We.layers.test(it.layers)){const ta=ye.side;ye.side=Cn,ye.needsUpdate=!0,_r(We,st,it,mn,ye,te),ye.side=ta,ye.needsUpdate=!0,Qt=!0}}Qt===!0&&(ae.updateMultisampleRenderTarget(Ct),ae.updateRenderTargetMipmap(Ct))}D.setRenderTarget(Pt),D.setClearColor(G,dt),Kt!==void 0&&(it.viewport=Kt),D.toneMapping=kt}function Ia(w,Y,st){const it=Y.isScene===!0?Y.overrideMaterial:null;for(let nt=0,Ct=w.length;nt<Ct;nt++){const zt=w[nt],Pt=zt.object,kt=zt.geometry,Kt=it===null?zt.material:it,Qt=zt.group;Pt.layers.test(st.layers)&&_r(Pt,Y,st,kt,Kt,Qt)}}function _r(w,Y,st,it,nt,Ct){w.onBeforeRender(D,Y,st,it,nt,Ct),w.modelViewMatrix.multiplyMatrices(st.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),nt.onBeforeRender(D,Y,st,it,w,Ct),nt.transparent===!0&&nt.side===ji&&nt.forceSinglePass===!1?(nt.side=Cn,nt.needsUpdate=!0,D.renderBufferDirect(st,Y,it,nt,w,Ct),nt.side=Oa,nt.needsUpdate=!0,D.renderBufferDirect(st,Y,it,nt,w,Ct),nt.side=ji):D.renderBufferDirect(st,Y,it,nt,w,Ct),w.onAfterRender(D,Y,st,it,nt,Ct)}function $i(w,Y,st){Y.isScene!==!0&&(Y=Xt);const it=$t.get(w),nt=y.state.lights,Ct=y.state.shadowsArray,zt=nt.state.version,Pt=St.getParameters(w,nt.state,Ct,Y,st),kt=St.getProgramCacheKey(Pt);let Kt=it.programs;it.environment=w.isMeshStandardMaterial?Y.environment:null,it.fog=Y.fog,it.envMap=(w.isMeshStandardMaterial?z:Ce).get(w.envMap||it.environment),it.envMapRotation=it.environment!==null&&w.envMap===null?Y.environmentRotation:w.envMapRotation,Kt===void 0&&(w.addEventListener("dispose",Rt),Kt=new Map,it.programs=Kt);let Qt=Kt.get(kt);if(Qt!==void 0){if(it.currentProgram===Qt&&it.lightsStateVersion===zt)return ws(w,Pt),Qt}else Pt.uniforms=St.getUniforms(w),w.onBuild(st,Pt,D),w.onBeforeCompile(Pt,D),Qt=St.acquireProgram(Pt,kt),Kt.set(kt,Qt),it.uniforms=Pt.uniforms;const Gt=it.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Gt.clippingPlanes=Tt.uniform),ws(w,Pt),it.needsLights=pn(w),it.lightsStateVersion=zt,it.needsLights&&(Gt.ambientLightColor.value=nt.state.ambient,Gt.lightProbe.value=nt.state.probe,Gt.directionalLights.value=nt.state.directional,Gt.directionalLightShadows.value=nt.state.directionalShadow,Gt.spotLights.value=nt.state.spot,Gt.spotLightShadows.value=nt.state.spotShadow,Gt.rectAreaLights.value=nt.state.rectArea,Gt.ltc_1.value=nt.state.rectAreaLTC1,Gt.ltc_2.value=nt.state.rectAreaLTC2,Gt.pointLights.value=nt.state.point,Gt.pointLightShadows.value=nt.state.pointShadow,Gt.hemisphereLights.value=nt.state.hemi,Gt.directionalShadowMap.value=nt.state.directionalShadowMap,Gt.directionalShadowMatrix.value=nt.state.directionalShadowMatrix,Gt.spotShadowMap.value=nt.state.spotShadowMap,Gt.spotLightMatrix.value=nt.state.spotLightMatrix,Gt.spotLightMap.value=nt.state.spotLightMap,Gt.pointShadowMap.value=nt.state.pointShadowMap,Gt.pointShadowMatrix.value=nt.state.pointShadowMatrix),it.currentProgram=Qt,it.uniformsList=null,Qt}function Cs(w){if(w.uniformsList===null){const Y=w.currentProgram.getUniforms();w.uniformsList=gu.seqWithValue(Y.seq,w.uniforms)}return w.uniformsList}function ws(w,Y){const st=$t.get(w);st.outputColorSpace=Y.outputColorSpace,st.batching=Y.batching,st.instancing=Y.instancing,st.instancingColor=Y.instancingColor,st.instancingMorph=Y.instancingMorph,st.skinning=Y.skinning,st.morphTargets=Y.morphTargets,st.morphNormals=Y.morphNormals,st.morphColors=Y.morphColors,st.morphTargetsCount=Y.morphTargetsCount,st.numClippingPlanes=Y.numClippingPlanes,st.numIntersection=Y.numClipIntersection,st.vertexAlphas=Y.vertexAlphas,st.vertexTangents=Y.vertexTangents,st.toneMapping=Y.toneMapping}function di(w,Y,st,it,nt){Y.isScene!==!0&&(Y=Xt),ae.resetTextureUnits();const Ct=Y.fog,zt=it.isMeshStandardMaterial?Y.environment:null,Pt=N===null?D.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:za,kt=(it.isMeshStandardMaterial?z:Ce).get(it.envMap||zt),Kt=it.vertexColors===!0&&!!st.attributes.color&&st.attributes.color.itemSize===4,Qt=!!st.attributes.tangent&&(!!it.normalMap||it.anisotropy>0),Gt=!!st.morphAttributes.position,Ge=!!st.morphAttributes.normal,tn=!!st.morphAttributes.color;let We=Na;it.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(We=D.toneMapping);const mn=st.morphAttributes.position||st.morphAttributes.normal||st.morphAttributes.color,ye=mn!==void 0?mn.length:0,te=$t.get(it),ta=y.state.lights;if(V===!0&&(ct===!0||w!==T)){const Mn=w===T&&it.id===O;Tt.setState(it,w,Mn)}let ze=!1;it.version===te.__version?(te.needsLights&&te.lightsStateVersion!==ta.state.version||te.outputColorSpace!==Pt||nt.isBatchedMesh&&te.batching===!1||!nt.isBatchedMesh&&te.batching===!0||nt.isInstancedMesh&&te.instancing===!1||!nt.isInstancedMesh&&te.instancing===!0||nt.isSkinnedMesh&&te.skinning===!1||!nt.isSkinnedMesh&&te.skinning===!0||nt.isInstancedMesh&&te.instancingColor===!0&&nt.instanceColor===null||nt.isInstancedMesh&&te.instancingColor===!1&&nt.instanceColor!==null||nt.isInstancedMesh&&te.instancingMorph===!0&&nt.morphTexture===null||nt.isInstancedMesh&&te.instancingMorph===!1&&nt.morphTexture!==null||te.envMap!==kt||it.fog===!0&&te.fog!==Ct||te.numClippingPlanes!==void 0&&(te.numClippingPlanes!==Tt.numPlanes||te.numIntersection!==Tt.numIntersection)||te.vertexAlphas!==Kt||te.vertexTangents!==Qt||te.morphTargets!==Gt||te.morphNormals!==Ge||te.morphColors!==tn||te.toneMapping!==We||te.morphTargetsCount!==ye)&&(ze=!0):(ze=!0,te.__version=it.version);let jn=te.currentProgram;ze===!0&&(jn=$i(it,Y,nt));let Fa=!1,yn=!1,gn=!1;const en=jn.getUniforms(),pi=te.uniforms;if(Ft.useProgram(jn.program)&&(Fa=!0,yn=!0,gn=!0),it.id!==O&&(O=it.id,yn=!0),Fa||T!==w){en.setValue(j,"projectionMatrix",w.projectionMatrix),en.setValue(j,"viewMatrix",w.matrixWorldInverse);const Mn=en.map.cameraPosition;Mn!==void 0&&Mn.setValue(j,yt.setFromMatrixPosition(w.matrixWorld)),ve.logarithmicDepthBuffer&&en.setValue(j,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(it.isMeshPhongMaterial||it.isMeshToonMaterial||it.isMeshLambertMaterial||it.isMeshBasicMaterial||it.isMeshStandardMaterial||it.isShaderMaterial)&&en.setValue(j,"isOrthographic",w.isOrthographicCamera===!0),T!==w&&(T=w,yn=!0,gn=!0)}if(nt.isSkinnedMesh){en.setOptional(j,nt,"bindMatrix"),en.setOptional(j,nt,"bindMatrixInverse");const Mn=nt.skeleton;Mn&&(Mn.boneTexture===null&&Mn.computeBoneTexture(),en.setValue(j,"boneTexture",Mn.boneTexture,ae))}nt.isBatchedMesh&&(en.setOptional(j,nt,"batchingTexture"),en.setValue(j,"batchingTexture",nt._matricesTexture,ae));const Ha=st.morphAttributes;if((Ha.position!==void 0||Ha.normal!==void 0||Ha.color!==void 0)&&Ht.update(nt,st,jn),(yn||te.receiveShadow!==nt.receiveShadow)&&(te.receiveShadow=nt.receiveShadow,en.setValue(j,"receiveShadow",nt.receiveShadow)),it.isMeshGouraudMaterial&&it.envMap!==null&&(pi.envMap.value=kt,pi.flipEnvMap.value=kt.isCubeTexture&&kt.isRenderTargetTexture===!1?-1:1),it.isMeshStandardMaterial&&it.envMap===null&&Y.environment!==null&&(pi.envMapIntensity.value=Y.environmentIntensity),yn&&(en.setValue(j,"toneMappingExposure",D.toneMappingExposure),te.needsLights&&$e(pi,gn),Ct&&it.fog===!0&&gt.refreshFogUniforms(pi,Ct),gt.refreshMaterialUniforms(pi,it,K,F,y.state.transmissionRenderTarget[w.id]),gu.upload(j,Cs(te),pi,ae)),it.isShaderMaterial&&it.uniformsNeedUpdate===!0&&(gu.upload(j,Cs(te),pi,ae),it.uniformsNeedUpdate=!1),it.isSpriteMaterial&&en.setValue(j,"center",nt.center),en.setValue(j,"modelViewMatrix",nt.modelViewMatrix),en.setValue(j,"normalMatrix",nt.normalMatrix),en.setValue(j,"modelMatrix",nt.matrixWorld),it.isShaderMaterial||it.isRawShaderMaterial){const Mn=it.uniformsGroups;for(let ea=0,Cu=Mn.length;ea<Cu;ea++){const En=Mn[ea];jt.update(En,jn),jt.bind(En,jn)}}return jn}function $e(w,Y){w.ambientLightColor.needsUpdate=Y,w.lightProbe.needsUpdate=Y,w.directionalLights.needsUpdate=Y,w.directionalLightShadows.needsUpdate=Y,w.pointLights.needsUpdate=Y,w.pointLightShadows.needsUpdate=Y,w.spotLights.needsUpdate=Y,w.spotLightShadows.needsUpdate=Y,w.rectAreaLights.needsUpdate=Y,w.hemisphereLights.needsUpdate=Y}function pn(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return tt},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(w,Y,st){$t.get(w.texture).__webglTexture=Y,$t.get(w.depthTexture).__webglTexture=st;const it=$t.get(w);it.__hasExternalTextures=!0,it.__autoAllocateDepthBuffer=st===void 0,it.__autoAllocateDepthBuffer||Vt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),it.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,Y){const st=$t.get(w);st.__webglFramebuffer=Y,st.__useDefaultFramebuffer=Y===void 0},this.setRenderTarget=function(w,Y=0,st=0){N=w,tt=Y,I=st;let it=!0,nt=null,Ct=!1,zt=!1;if(w){const kt=$t.get(w);kt.__useDefaultFramebuffer!==void 0?(Ft.bindFramebuffer(j.FRAMEBUFFER,null),it=!1):kt.__webglFramebuffer===void 0?ae.setupRenderTarget(w):kt.__hasExternalTextures&&ae.rebindTextures(w,$t.get(w.texture).__webglTexture,$t.get(w.depthTexture).__webglTexture);const Kt=w.texture;(Kt.isData3DTexture||Kt.isDataArrayTexture||Kt.isCompressedArrayTexture)&&(zt=!0);const Qt=$t.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Qt[Y])?nt=Qt[Y][st]:nt=Qt[Y],Ct=!0):w.samples>0&&ae.useMultisampledRTT(w)===!1?nt=$t.get(w).__webglMultisampledFramebuffer:Array.isArray(Qt)?nt=Qt[st]:nt=Qt,E.copy(w.viewport),q.copy(w.scissor),lt=w.scissorTest}else E.copy(ut).multiplyScalar(K).floor(),q.copy(U).multiplyScalar(K).floor(),lt=Z;if(Ft.bindFramebuffer(j.FRAMEBUFFER,nt)&&it&&Ft.drawBuffers(w,nt),Ft.viewport(E),Ft.scissor(q),Ft.setScissorTest(lt),Ct){const kt=$t.get(w.texture);j.framebufferTexture2D(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,j.TEXTURE_CUBE_MAP_POSITIVE_X+Y,kt.__webglTexture,st)}else if(zt){const kt=$t.get(w.texture),Kt=Y||0;j.framebufferTextureLayer(j.FRAMEBUFFER,j.COLOR_ATTACHMENT0,kt.__webglTexture,st||0,Kt)}O=-1},this.readRenderTargetPixels=function(w,Y,st,it,nt,Ct,zt){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pt=$t.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&zt!==void 0&&(Pt=Pt[zt]),Pt){Ft.bindFramebuffer(j.FRAMEBUFFER,Pt);try{const kt=w.texture,Kt=kt.format,Qt=kt.type;if(!ve.textureFormatReadable(Kt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ve.textureTypeReadable(Qt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=w.width-it&&st>=0&&st<=w.height-nt&&j.readPixels(Y,st,it,nt,Dt.convert(Kt),Dt.convert(Qt),Ct)}finally{const kt=N!==null?$t.get(N).__webglFramebuffer:null;Ft.bindFramebuffer(j.FRAMEBUFFER,kt)}}},this.copyFramebufferToTexture=function(w,Y,st=0){const it=Math.pow(2,-st),nt=Math.floor(Y.image.width*it),Ct=Math.floor(Y.image.height*it);ae.setTexture2D(Y,0),j.copyTexSubImage2D(j.TEXTURE_2D,st,0,0,w.x,w.y,nt,Ct),Ft.unbindTexture()},this.copyTextureToTexture=function(w,Y,st,it=0){const nt=Y.image.width,Ct=Y.image.height,zt=Dt.convert(st.format),Pt=Dt.convert(st.type);ae.setTexture2D(st,0),j.pixelStorei(j.UNPACK_FLIP_Y_WEBGL,st.flipY),j.pixelStorei(j.UNPACK_PREMULTIPLY_ALPHA_WEBGL,st.premultiplyAlpha),j.pixelStorei(j.UNPACK_ALIGNMENT,st.unpackAlignment),Y.isDataTexture?j.texSubImage2D(j.TEXTURE_2D,it,w.x,w.y,nt,Ct,zt,Pt,Y.image.data):Y.isCompressedTexture?j.compressedTexSubImage2D(j.TEXTURE_2D,it,w.x,w.y,Y.mipmaps[0].width,Y.mipmaps[0].height,zt,Y.mipmaps[0].data):j.texSubImage2D(j.TEXTURE_2D,it,w.x,w.y,zt,Pt,Y.image),it===0&&st.generateMipmaps&&j.generateMipmap(j.TEXTURE_2D),Ft.unbindTexture()},this.copyTextureToTexture3D=function(w,Y,st,it,nt=0){const Ct=w.max.x-w.min.x,zt=w.max.y-w.min.y,Pt=w.max.z-w.min.z,kt=Dt.convert(it.format),Kt=Dt.convert(it.type);let Qt;if(it.isData3DTexture)ae.setTexture3D(it,0),Qt=j.TEXTURE_3D;else if(it.isDataArrayTexture||it.isCompressedArrayTexture)ae.setTexture2DArray(it,0),Qt=j.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}j.pixelStorei(j.UNPACK_FLIP_Y_WEBGL,it.flipY),j.pixelStorei(j.UNPACK_PREMULTIPLY_ALPHA_WEBGL,it.premultiplyAlpha),j.pixelStorei(j.UNPACK_ALIGNMENT,it.unpackAlignment);const Gt=j.getParameter(j.UNPACK_ROW_LENGTH),Ge=j.getParameter(j.UNPACK_IMAGE_HEIGHT),tn=j.getParameter(j.UNPACK_SKIP_PIXELS),We=j.getParameter(j.UNPACK_SKIP_ROWS),mn=j.getParameter(j.UNPACK_SKIP_IMAGES),ye=st.isCompressedTexture?st.mipmaps[nt]:st.image;j.pixelStorei(j.UNPACK_ROW_LENGTH,ye.width),j.pixelStorei(j.UNPACK_IMAGE_HEIGHT,ye.height),j.pixelStorei(j.UNPACK_SKIP_PIXELS,w.min.x),j.pixelStorei(j.UNPACK_SKIP_ROWS,w.min.y),j.pixelStorei(j.UNPACK_SKIP_IMAGES,w.min.z),st.isDataTexture||st.isData3DTexture?j.texSubImage3D(Qt,nt,Y.x,Y.y,Y.z,Ct,zt,Pt,kt,Kt,ye.data):it.isCompressedArrayTexture?j.compressedTexSubImage3D(Qt,nt,Y.x,Y.y,Y.z,Ct,zt,Pt,kt,ye.data):j.texSubImage3D(Qt,nt,Y.x,Y.y,Y.z,Ct,zt,Pt,kt,Kt,ye),j.pixelStorei(j.UNPACK_ROW_LENGTH,Gt),j.pixelStorei(j.UNPACK_IMAGE_HEIGHT,Ge),j.pixelStorei(j.UNPACK_SKIP_PIXELS,tn),j.pixelStorei(j.UNPACK_SKIP_ROWS,We),j.pixelStorei(j.UNPACK_SKIP_IMAGES,mn),nt===0&&it.generateMipmaps&&j.generateMipmap(Qt),Ft.unbindTexture()},this.initTexture=function(w){w.isCubeTexture?ae.setTextureCube(w,0):w.isData3DTexture?ae.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?ae.setTexture2DArray(w,0):ae.setTexture2D(w,0),Ft.unbindTexture()},this.resetState=function(){tt=0,I=0,N=null,Ft.reset(),Nt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ki}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=e===Ph?"display-p3":"srgb",i.unpackColorSpace=Ne.workingColorSpace===Au?"display-p3":"srgb"}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class vb extends xn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Qi,this.environmentIntensity=1,this.environmentRotation=new Qi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}class Sb extends wn{constructor(e=null,i=1,r=1,l,c,d,h,m,p=In,g=In,S,x){super(null,d,h,m,p,g,l,c,S,x),this.isDataTexture=!0,this.image={data:e,width:i,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class $_ extends hi{constructor(e,i,r,l=1){super(e,i,r),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=l}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const ps=new Pe,tv=new Pe,du=[],ev=new gr,xb=new Pe,Ao=new Rn,bo=new Lo;class Mh extends Rn{constructor(e,i,r){super(e,i),this.isInstancedMesh=!0,this.instanceMatrix=new $_(new Float32Array(r*16),16),this.instanceColor=null,this.morphTexture=null,this.count=r,this.boundingBox=null,this.boundingSphere=null;for(let l=0;l<r;l++)this.setMatrixAt(l,xb)}computeBoundingBox(){const e=this.geometry,i=this.count;this.boundingBox===null&&(this.boundingBox=new gr),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let r=0;r<i;r++)this.getMatrixAt(r,ps),ev.copy(e.boundingBox).applyMatrix4(ps),this.boundingBox.union(ev)}computeBoundingSphere(){const e=this.geometry,i=this.count;this.boundingSphere===null&&(this.boundingSphere=new Lo),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let r=0;r<i;r++)this.getMatrixAt(r,ps),bo.copy(e.boundingSphere).applyMatrix4(ps),this.boundingSphere.union(bo)}copy(e,i){return super.copy(e,i),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,i){i.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,i){i.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,i){const r=i.morphTargetInfluences,l=this.morphTexture.source.data.data,c=r.length+1,d=e*c+1;for(let h=0;h<r.length;h++)r[h]=l[d+h]}raycast(e,i){const r=this.matrixWorld,l=this.count;if(Ao.geometry=this.geometry,Ao.material=this.material,Ao.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),bo.copy(this.boundingSphere),bo.applyMatrix4(r),e.ray.intersectsSphere(bo)!==!1))for(let c=0;c<l;c++){this.getMatrixAt(c,ps),tv.multiplyMatrices(r,ps),Ao.matrixWorld=tv,Ao.raycast(e,du);for(let d=0,h=du.length;d<h;d++){const m=du[d];m.instanceId=c,m.object=this,i.push(m)}du.length=0}}setColorAt(e,i){this.instanceColor===null&&(this.instanceColor=new $_(new Float32Array(this.instanceMatrix.count*3),3)),i.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,i){i.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,i){const r=i.morphTargetInfluences,l=r.length+1;this.morphTexture===null&&(this.morphTexture=new Sb(new Float32Array(l*this.count),l,this.count,mv,Zi));const c=this.morphTexture.source.data.data;let d=0;for(let p=0;p<r.length;p++)d+=r[p];const h=this.geometry.morphTargetsRelative?1:1-d,m=l*e;c[m]=h,c.set(r,m+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class Fh extends Ba{constructor(e=[new se(0,-.5),new se(.5,0),new se(0,.5)],i=12,r=0,l=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:i,phiStart:r,phiLength:l},i=Math.floor(i),l=bn(l,0,Math.PI*2);const c=[],d=[],h=[],m=[],p=[],g=1/i,S=new $,x=new se,M=new $,R=new $,C=new $;let y=0,v=0;for(let L=0;L<=e.length-1;L++)switch(L){case 0:y=e[L+1].x-e[L].x,v=e[L+1].y-e[L].y,M.x=v*1,M.y=-y,M.z=v*0,C.copy(M),M.normalize(),m.push(M.x,M.y,M.z);break;case e.length-1:m.push(C.x,C.y,C.z);break;default:y=e[L+1].x-e[L].x,v=e[L+1].y-e[L].y,M.x=v*1,M.y=-y,M.z=v*0,R.copy(M),M.x+=C.x,M.y+=C.y,M.z+=C.z,M.normalize(),m.push(M.x,M.y,M.z),C.copy(R)}for(let L=0;L<=i;L++){const D=r+L*g*l,P=Math.sin(D),tt=Math.cos(D);for(let I=0;I<=e.length-1;I++){S.x=e[I].x*P,S.y=e[I].y,S.z=e[I].x*tt,d.push(S.x,S.y,S.z),x.x=L/i,x.y=I/(e.length-1),h.push(x.x,x.y);const N=m[3*I+0]*P,O=m[3*I+1],T=m[3*I+0]*tt;p.push(N,O,T)}}for(let L=0;L<i;L++)for(let D=0;D<e.length-1;D++){const P=D+L*e.length,tt=P,I=P+e.length,N=P+e.length+1,O=P+1;c.push(tt,I,O),c.push(N,O,I)}this.setIndex(c),this.setAttribute("position",new Ei(d,3)),this.setAttribute("uv",new Ei(h,2)),this.setAttribute("normal",new Ei(p,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Fh(e.points,e.segments,e.phiStart,e.phiLength)}}class pu extends No{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new Se(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Se(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Sv,this.normalScale=new se(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}class Gv extends xn{constructor(e,i=1){super(),this.isLight=!0,this.type="Light",this.color=new Se(e),this.intensity=i}dispose(){}copy(e,i){return super.copy(e,i),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const i=super.toJSON(e);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,this.groundColor!==void 0&&(i.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(i.object.distance=this.distance),this.angle!==void 0&&(i.object.angle=this.angle),this.decay!==void 0&&(i.object.decay=this.decay),this.penumbra!==void 0&&(i.object.penumbra=this.penumbra),this.shadow!==void 0&&(i.object.shadow=this.shadow.toJSON()),i}}const Eh=new Pe,nv=new $,iv=new $;class yb{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new se(512,512),this.map=null,this.mapPass=null,this.matrix=new Pe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Bh,this._frameExtents=new se(1,1),this._viewportCount=1,this._viewports=[new un(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const i=this.camera,r=this.matrix;nv.setFromMatrixPosition(e.matrixWorld),i.position.copy(nv),iv.setFromMatrixPosition(e.target.matrixWorld),i.lookAt(iv),i.updateMatrixWorld(),Eh.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Eh),r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(Eh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Mb extends yb{constructor(){super(new Ov(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Eb extends Gv{constructor(e,i){super(e,i),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(xn.DEFAULT_UP),this.updateMatrix(),this.target=new xn,this.shadow=new Mb}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Tb extends Gv{constructor(e,i){super(e,i),this.isAmbientLight=!0,this.type="AmbientLight"}}const av=new Pe;class rv{constructor(e,i,r=0,l=1/0){this.ray=new Tv(e,i),this.near=r,this.far=l,this.camera=null,this.layers=new zh,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,i){this.ray.set(e,i)}setFromCamera(e,i){i.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(i.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(i).sub(this.ray.origin).normalize(),this.camera=i):i.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(i.near+i.far)/(i.near-i.far)).unproject(i),this.ray.direction.set(0,0,-1).transformDirection(i.matrixWorld),this.camera=i):console.error("THREE.Raycaster: Unsupported camera type: "+i.type)}setFromXRController(e){return av.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(av),this}intersectObject(e,i=!0,r=[]){return Lh(e,this,r,i),r.sort(sv),r}intersectObjects(e,i=!0,r=[]){for(let l=0,c=e.length;l<c;l++)Lh(e[l],this,r,i);return r.sort(sv),r}}function sv(o,e){return o.distance-e.distance}function Lh(o,e,i,r){if(o.layers.test(e.layers)&&o.raycast(e,i),r===!0){const l=o.children;for(let c=0,d=l.length;c<d;c++)Lh(l[c],e,i,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Oh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Oh);class Ab{constructor(e,i={}){this.enabled=!0;const r=i.defaultThickness!==void 0?i.defaultThickness:.003,l=new Se().fromArray(i.defaultColor!==void 0?i.defaultColor:[0,0,0]),c=i.defaultAlpha!==void 0?i.defaultAlpha:1,d=i.defaultKeepAlive!==void 0?i.defaultKeepAlive:!1,h={},m=60,p={},g={},S={outlineThickness:{value:r},outlineColor:{value:l},outlineAlpha:{value:c}},x=["#include <common>","#include <uv_pars_vertex>","#include <displacementmap_pars_vertex>","#include <fog_pars_vertex>","#include <morphtarget_pars_vertex>","#include <skinning_pars_vertex>","#include <logdepthbuf_pars_vertex>","#include <clipping_planes_pars_vertex>","uniform float outlineThickness;","vec4 calculateOutline( vec4 pos, vec3 normal, vec4 skinned ) {","	float thickness = outlineThickness;","	const float ratio = 1.0;","	vec4 pos2 = projectionMatrix * modelViewMatrix * vec4( skinned.xyz + normal, 1.0 );","	vec4 norm = normalize( pos - pos2 );","	return pos + norm * thickness * pos.w * ratio;","}","void main() {","	#include <uv_vertex>","	#include <beginnormal_vertex>","	#include <morphnormal_vertex>","	#include <skinbase_vertex>","	#include <skinnormal_vertex>","	#include <begin_vertex>","	#include <morphtarget_vertex>","	#include <skinning_vertex>","	#include <displacementmap_vertex>","	#include <project_vertex>","	vec3 outlineNormal = - objectNormal;","	gl_Position = calculateOutline( gl_Position, outlineNormal, vec4( transformed, 1.0 ) );","	#include <logdepthbuf_vertex>","	#include <clipping_planes_vertex>","	#include <fog_vertex>","}"].join(`
`),M=["#include <common>","#include <fog_pars_fragment>","#include <logdepthbuf_pars_fragment>","#include <clipping_planes_pars_fragment>","uniform vec3 outlineColor;","uniform float outlineAlpha;","void main() {","	#include <clipping_planes_fragment>","	#include <logdepthbuf_fragment>","	gl_FragColor = vec4( outlineColor, outlineAlpha );","	#include <tonemapping_fragment>","	#include <colorspace_fragment>","	#include <fog_fragment>","	#include <premultiplied_alpha_fragment>","}"].join(`
`);function R(){return new Ji({type:"OutlineEffect",uniforms:Dv.merge([wt.fog,wt.displacementmap,S]),vertexShader:x,fragmentShader:M,side:Cn})}function C(O){let T=h[O.uuid];return T===void 0&&(T={material:R(),used:!0,keepAlive:d,count:0},h[O.uuid]=T),T.used=!0,T.material}function y(O){const T=C(O);return p[T.uuid]=O,I(T,O),T}function v(O){const T=O.geometry,E=T!==void 0&&T.attributes.normal!==void 0;return O.isMesh===!0&&O.material!==void 0&&E===!0}function L(O){if(v(O)!==!1){if(Array.isArray(O.material))for(let T=0,E=O.material.length;T<E;T++)O.material[T]=y(O.material[T]);else O.material=y(O.material);g[O.uuid]=O.onBeforeRender,O.onBeforeRender=P}}function D(O){if(v(O)!==!1){if(Array.isArray(O.material))for(let T=0,E=O.material.length;T<E;T++)O.material[T]=p[O.material[T].uuid];else O.material=p[O.material.uuid];O.onBeforeRender=g[O.uuid]}}function P(O,T,E,q,lt){const G=p[lt.uuid];G!==void 0&&tt(lt,G)}function tt(O,T){const E=T.userData.outlineParameters;O.uniforms.outlineAlpha.value=T.opacity,E!==void 0&&(E.thickness!==void 0&&(O.uniforms.outlineThickness.value=E.thickness),E.color!==void 0&&O.uniforms.outlineColor.value.fromArray(E.color),E.alpha!==void 0&&(O.uniforms.outlineAlpha.value=E.alpha)),T.displacementMap&&(O.uniforms.displacementMap.value=T.displacementMap,O.uniforms.displacementScale.value=T.displacementScale,O.uniforms.displacementBias.value=T.displacementBias)}function I(O,T){if(O.name==="invisible")return;const E=T.userData.outlineParameters;O.fog=T.fog,O.toneMapped=T.toneMapped,O.premultipliedAlpha=T.premultipliedAlpha,O.displacementMap=T.displacementMap,E!==void 0?(T.visible===!1?O.visible=!1:O.visible=E.visible!==void 0?E.visible:!0,O.transparent=E.alpha!==void 0&&E.alpha<1?!0:T.transparent,E.keepAlive!==void 0&&(h[T.uuid].keepAlive=E.keepAlive)):(O.transparent=T.transparent,O.visible=T.visible),(T.wireframe===!0||T.depthTest===!1)&&(O.visible=!1),T.clippingPlanes&&(O.clipping=!0,O.clippingPlanes=T.clippingPlanes,O.clipIntersection=T.clipIntersection,O.clipShadows=T.clipShadows),O.version=T.version}function N(){let O;O=Object.keys(p);for(let T=0,E=O.length;T<E;T++)p[O[T]]=void 0;O=Object.keys(g);for(let T=0,E=O.length;T<E;T++)g[O[T]]=void 0;O=Object.keys(h);for(let T=0,E=O.length;T<E;T++){const q=O[T];h[q].used===!1?(h[q].count++,h[q].keepAlive===!1&&h[q].count>m&&delete h[q]):(h[q].used=!1,h[q].count=0)}}this.render=function(O,T){if(this.enabled===!1){e.render(O,T);return}const E=e.autoClear;e.autoClear=this.autoClear,e.render(O,T),e.autoClear=E,this.renderOutline(O,T)},this.renderOutline=function(O,T){const E=e.autoClear,q=O.matrixWorldAutoUpdate,lt=O.background,G=e.shadowMap.enabled;O.matrixWorldAutoUpdate=!1,O.background=null,e.autoClear=!1,e.shadowMap.enabled=!1,O.traverse(L),e.render(O,T),O.traverse(D),N(),O.matrixWorldAutoUpdate=q,O.background=lt,e.autoClear=E,e.shadowMap.enabled=G},this.autoClear=e.autoClear,this.domElement=e.domElement,this.shadowMap=e.shadowMap,this.clear=function(O,T,E){e.clear(O,T,E)},this.getPixelRatio=function(){return e.getPixelRatio()},this.setPixelRatio=function(O){e.setPixelRatio(O)},this.getSize=function(O){return e.getSize(O)},this.setSize=function(O,T,E){e.setSize(O,T,E)},this.setViewport=function(O,T,E,q){e.setViewport(O,T,E,q)},this.setScissor=function(O,T,E,q){e.setScissor(O,T,E,q)},this.setScissorTest=function(O){e.setScissorTest(O)},this.setRenderTarget=function(O){e.setRenderTarget(O)}}}function bb(o){return new Worker("/coleslaw/assets/physics.worker-DCU8CxYw.js",{name:o==null?void 0:o.name})}const Rb=()=>{const o=mu.useRef(null),e=mu.useRef(!1);return mu.useEffect(()=>{if(e.current||!o.current)return;e.current=!0;let i,r,l,c,d,h;const m=async()=>{const g=o.current;if(!g)return;h=new bb,i=new vb,i.background=new Se(3359061);const S=g.clientWidth/g.clientHeight;r=new ai(75,S,.1,1e3),r.position.set(0,18,6),r.lookAt(0,0,0),l=new _b({antialias:!0}),l.setSize(g.clientWidth,g.clientHeight),l.shadowMap.enabled=!0,g.appendChild(l.domElement),c=new Ab(l);const x=new Tb(16777215,1);i.add(x);const M=new Eb(16777215,2);M.position.set(10,20,5),M.castShadow=!0,M.shadow.mapSize.width=2048,M.shadow.mapSize.height=2048,i.add(M);const R=new pu({color:15857145}),C=new pu({color:13166281}),y=new pu({color:15857897}),v=new pu({color:16758605}),L=8,D=6,P=[new se(.1,0),new se(L*.7,.2),new se(L,D)],tt=new Fh(P,40),I=new Rn(tt,R);I.receiveShadow=!0,i.add(I);const N=500,O=500,T=200,E=N+O+T,q=new Ts(1,1,1),lt=new Mh(q,C,N),G=new Mh(q,y,O),dt=new Mh(q,v,T);lt.instanceMatrix.setUsage(jf),G.instanceMatrix.setUsage(jf),dt.instanceMatrix.setUsage(jf),lt.receiveShadow=!0,G.receiveShadow=!0,dt.receiveShadow=!0,i.add(lt,G,dt);const pt=[lt,G,dt],F=new Array(E).fill(0).map(()=>({width:1.2+Math.random()*.6,height:.05,depth:.1+Math.random()*.1})),K=F.map(at=>new $(at.width,at.height,at.depth)),W=new $(0,0,0),vt={cabbage1:new Rn(q,C),cabbage2:new Rn(q,y),carrot:new Rn(q,v)};let ut=null;h.postMessage({type:"init",payload:{bowlRadius:L,bowlHeight:D,bowlVertices:tt.attributes.position.array,bowlIndices:tt.index.array,shredDimensions:F}});const U=new se;let Z=null,xt=null,V=!1;const ct=new Yi,Et=new $,yt=new $;let Xt={x:0,y:0},Bt={x:0,y:0};const j=new Pe,_e=50,Vt=at=>{if(Z!==null)return;const St=g.getBoundingClientRect(),gt=at.clientX-St.left,Ot=at.clientY-St.top;let At=-1,Tt=1/0;const Zt=new $,bt=new mr,Ht=new $,ce=new $,qt=new $;let Dt=0;for(const Nt of pt)for(let jt=0;jt<Nt.count;jt++){if(Nt.getMatrixAt(jt,j),new $().setFromMatrixScale(j).x===0){Dt++;continue}ce.setFromMatrixPosition(j),qt.copy(ce).project(r);const Jt=(qt.x+1)*g.clientWidth/2,X=(-qt.y+1)*g.clientHeight/2,Mt=gt-Jt,ht=Ot-X,Rt=Mt*Mt+ht*ht;Rt<Tt&&(Tt=Rt,At=Dt,j.decompose(Zt,bt,Ht)),Dt++}if(At!==-1&&Tt<_e*_e){Z=At,Z<N?ut=vt.cabbage1:Z<N+O?ut=vt.cabbage2:ut=vt.carrot;const Nt=Zt,jt=bt,fe=Ht;h.postMessage({type:"dragStart",payload:{shredIndex:Z,position:{x:Nt.x,y:Nt.y,z:Nt.z}}});const Jt=new rv;U.x=at.clientX/g.clientWidth*2-1,U.y=-(at.clientY/g.clientHeight)*2+1,Jt.setFromCamera(U,r);const X=r.position.clone().sub(Nt).normalize(),Mt=new Yi().setFromNormalAndCoplanarPoint(X,Nt),ht=new $;Jt.ray.intersectPlane(Mt,ht),yt.copy(Nt).sub(ht),ut.position.copy(Nt),ut.scale.copy(fe),ut.quaternion.copy(jt),i.add(ut);const Rt=new $;r.getWorldDirection(Rt),ct.setFromNormalAndCoplanarPoint(Rt,ht)}},ve=at=>{if(Bt={x:at.clientX-Xt.x,y:at.clientY-Xt.y},Xt={x:at.clientX,y:at.clientY},Z!==null&&ut){U.x=at.clientX/g.clientWidth*2-1,U.y=-(at.clientY/g.clientHeight)*2+1;const St=new rv;if(St.setFromCamera(U,r),St.ray.intersectPlane(ct,Et)){const gt=Et.add(yt);ut.position.copy(gt),xt||(xt=new $),xt.copy(gt),V=!0}}},Ft=()=>{if(Z!==null&&ut){h.postMessage({type:"dragEnd",payload:{shredIndex:Z,position:{x:ut.position.x,y:ut.position.y,z:ut.position.z},linvel:{x:Bt.x*2.5,y:5,z:Bt.y*2.5}}});const at=new Pe;if(at.compose(ut.position,ut.quaternion,K[Z]),Z<N)lt.setMatrixAt(Z,at),lt.instanceMatrix.needsUpdate=!0;else if(Z<N+O){const St=Z-N;G.setMatrixAt(St,at),G.instanceMatrix.needsUpdate=!0}else{const St=Z-N-O;dt.setMatrixAt(St,at),dt.instanceMatrix.needsUpdate=!0}i.remove(ut),ut=null,Z=null,xt=null,V=!1}},ie=at=>{at.preventDefault(),at.touches.length>0&&Vt({clientX:at.touches[0].clientX,clientY:at.touches[0].clientY})},$t=at=>{at.preventDefault(),at.touches.length>0&&ve({clientX:at.touches[0].clientX,clientY:at.touches[0].clientY})},ae=()=>Ft();g.addEventListener("mousedown",Vt),window.addEventListener("mousemove",ve),window.addEventListener("mouseup",Ft),g.addEventListener("touchstart",ie,{passive:!1}),window.addEventListener("touchmove",$t,{passive:!1}),window.addEventListener("touchend",ae),window.addEventListener("touchcancel",ae);const Ce=new $,z=new mr;h.onmessage=at=>{const{type:St,payload:gt}=at.data;if(St==="transforms"){const Ot=new Float32Array(gt);let At=0;for(let Tt=0;Tt<E;Tt++){Ce.set(Ot[At++],Ot[At++],Ot[At++]),z.set(Ot[At++],Ot[At++],Ot[At++],Ot[At++]);const bt=Tt===Z?W:K[Tt];j.compose(Ce,z,bt),Tt<N?lt.setMatrixAt(Tt,j):Tt<N+O?G.setMatrixAt(Tt-N,j):dt.setMatrixAt(Tt-N-O,j)}pt.forEach(Tt=>{Tt.instanceMatrix.needsUpdate=!0}),h.postMessage({type:"transforms_ack",payload:gt},[gt])}};const b=()=>{V&&Z!==null&&xt&&(h.postMessage({type:"dragMove",payload:{shredIndex:Z,position:{x:xt.x,y:xt.y,z:xt.z}}}),V=!1),c.render(i,r),d=requestAnimationFrame(b)};b();const ot=()=>{const at=g.clientWidth,St=g.clientHeight;l.setPixelRatio(Math.min(window.devicePixelRatio,1.5)),c.setSize(at,St),r.aspect=at/St,r.updateProjectionMatrix()};return window.addEventListener("resize",ot),ot(),()=>{window.removeEventListener("resize",ot),g.removeEventListener("mousedown",Vt),window.removeEventListener("mousemove",ve),window.removeEventListener("mouseup",Ft),g.removeEventListener("touchstart",ie),window.removeEventListener("touchmove",$t),window.removeEventListener("touchend",ae),window.removeEventListener("touchcancel",ae),cancelAnimationFrame(d),h.postMessage({type:"stop"}),g&&l.domElement&&g.removeChild(l.domElement)}};let p;return m().then(g=>{p=g}).catch(console.error),()=>{p&&p()}},[]),Co.jsx("div",{ref:o,className:"w-full h-full cursor-grab active:cursor-grabbing"})},Cb=()=>Co.jsx("div",{className:"w-screen h-screen overflow-hidden",children:Co.jsx(Rb,{})}),Vv=document.getElementById("root");if(!Vv)throw new Error("Could not find root element to mount to");const wb=rx.createRoot(Vv);wb.render(Co.jsx(QS.StrictMode,{children:Co.jsx(Cb,{})}));
