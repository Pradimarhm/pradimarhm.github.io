(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const h of c.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&r(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();function hM(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var Od={exports:{}},Qo={};var Nv;function pM(){if(Nv)return Qo;Nv=1;var s=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(r,l,c){var h=null;if(c!==void 0&&(h=""+c),l.key!==void 0&&(h=""+l.key),"key"in l){c={};for(var d in l)d!=="key"&&(c[d]=l[d])}else c=l;return l=c.ref,{$$typeof:s,type:r,key:h,ref:l!==void 0?l:null,props:c}}return Qo.Fragment=e,Qo.jsx=i,Qo.jsxs=i,Qo}var Lv;function mM(){return Lv||(Lv=1,Od.exports=pM()),Od.exports}var J=mM(),Pd={exports:{}},rt={};var Ov;function gM(){if(Ov)return rt;Ov=1;var s=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),v=Symbol.for("react.activity"),S=Symbol.iterator;function y(U){return U===null||typeof U!="object"?null:(U=S&&U[S]||U["@@iterator"],typeof U=="function"?U:null)}var E={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},R=Object.assign,M={};function _(U,ie,ve){this.props=U,this.context=ie,this.refs=M,this.updater=ve||E}_.prototype.isReactComponent={},_.prototype.setState=function(U,ie){if(typeof U!="object"&&typeof U!="function"&&U!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,U,ie,"setState")},_.prototype.forceUpdate=function(U){this.updater.enqueueForceUpdate(this,U,"forceUpdate")};function N(){}N.prototype=_.prototype;function O(U,ie,ve){this.props=U,this.context=ie,this.refs=M,this.updater=ve||E}var L=O.prototype=new N;L.constructor=O,R(L,_.prototype),L.isPureReactComponent=!0;var I=Array.isArray;function z(){}var F={H:null,A:null,T:null,S:null},K=Object.prototype.hasOwnProperty;function C(U,ie,ve){var Re=ve.ref;return{$$typeof:s,type:U,key:ie,ref:Re!==void 0?Re:null,props:ve}}function w(U,ie){return C(U.type,ie,U.props)}function k(U){return typeof U=="object"&&U!==null&&U.$$typeof===s}function re(U){var ie={"=":"=0",":":"=2"};return"$"+U.replace(/[=:]/g,function(ve){return ie[ve]})}var se=/\/+/g;function pe(U,ie){return typeof U=="object"&&U!==null&&U.key!=null?re(""+U.key):ie.toString(36)}function fe(U){switch(U.status){case"fulfilled":return U.value;case"rejected":throw U.reason;default:switch(typeof U.status=="string"?U.then(z,z):(U.status="pending",U.then(function(ie){U.status==="pending"&&(U.status="fulfilled",U.value=ie)},function(ie){U.status==="pending"&&(U.status="rejected",U.reason=ie)})),U.status){case"fulfilled":return U.value;case"rejected":throw U.reason}}throw U}function P(U,ie,ve,Re,He){var ne=typeof U;(ne==="undefined"||ne==="boolean")&&(U=null);var ue=!1;if(U===null)ue=!0;else switch(ne){case"bigint":case"string":case"number":ue=!0;break;case"object":switch(U.$$typeof){case s:case e:ue=!0;break;case g:return ue=U._init,P(ue(U._payload),ie,ve,Re,He)}}if(ue)return He=He(U),ue=Re===""?"."+pe(U,0):Re,I(He)?(ve="",ue!=null&&(ve=ue.replace(se,"$&/")+"/"),P(He,ie,ve,"",function(Ge){return Ge})):He!=null&&(k(He)&&(He=w(He,ve+(He.key==null||U&&U.key===He.key?"":(""+He.key).replace(se,"$&/")+"/")+ue)),ie.push(He)),1;ue=0;var Ue=Re===""?".":Re+":";if(I(U))for(var Xe=0;Xe<U.length;Xe++)Re=U[Xe],ne=Ue+pe(Re,Xe),ue+=P(Re,ie,ve,ne,He);else if(Xe=y(U),typeof Xe=="function")for(U=Xe.call(U),Xe=0;!(Re=U.next()).done;)Re=Re.value,ne=Ue+pe(Re,Xe++),ue+=P(Re,ie,ve,ne,He);else if(ne==="object"){if(typeof U.then=="function")return P(fe(U),ie,ve,Re,He);throw ie=String(U),Error("Objects are not valid as a React child (found: "+(ie==="[object Object]"?"object with keys {"+Object.keys(U).join(", ")+"}":ie)+"). If you meant to render a collection of children, use an array instead.")}return ue}function H(U,ie,ve){if(U==null)return U;var Re=[],He=0;return P(U,Re,"","",function(ne){return ie.call(ve,ne,He++)}),Re}function ae(U){if(U._status===-1){var ie=U._result;ie=ie(),ie.then(function(ve){(U._status===0||U._status===-1)&&(U._status=1,U._result=ve)},function(ve){(U._status===0||U._status===-1)&&(U._status=2,U._result=ve)}),U._status===-1&&(U._status=0,U._result=ie)}if(U._status===1)return U._result.default;throw U._result}var Me=typeof reportError=="function"?reportError:function(U){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var ie=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof U=="object"&&U!==null&&typeof U.message=="string"?String(U.message):String(U),error:U});if(!window.dispatchEvent(ie))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",U);return}console.error(U)},Se={map:H,forEach:function(U,ie,ve){H(U,function(){ie.apply(this,arguments)},ve)},count:function(U){var ie=0;return H(U,function(){ie++}),ie},toArray:function(U){return H(U,function(ie){return ie})||[]},only:function(U){if(!k(U))throw Error("React.Children.only expected to receive a single React element child.");return U}};return rt.Activity=v,rt.Children=Se,rt.Component=_,rt.Fragment=i,rt.Profiler=l,rt.PureComponent=O,rt.StrictMode=r,rt.Suspense=p,rt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=F,rt.__COMPILER_RUNTIME={__proto__:null,c:function(U){return F.H.useMemoCache(U)}},rt.cache=function(U){return function(){return U.apply(null,arguments)}},rt.cacheSignal=function(){return null},rt.cloneElement=function(U,ie,ve){if(U==null)throw Error("The argument must be a React element, but you passed "+U+".");var Re=R({},U.props),He=U.key;if(ie!=null)for(ne in ie.key!==void 0&&(He=""+ie.key),ie)!K.call(ie,ne)||ne==="key"||ne==="__self"||ne==="__source"||ne==="ref"&&ie.ref===void 0||(Re[ne]=ie[ne]);var ne=arguments.length-2;if(ne===1)Re.children=ve;else if(1<ne){for(var ue=Array(ne),Ue=0;Ue<ne;Ue++)ue[Ue]=arguments[Ue+2];Re.children=ue}return C(U.type,He,Re)},rt.createContext=function(U){return U={$$typeof:h,_currentValue:U,_currentValue2:U,_threadCount:0,Provider:null,Consumer:null},U.Provider=U,U.Consumer={$$typeof:c,_context:U},U},rt.createElement=function(U,ie,ve){var Re,He={},ne=null;if(ie!=null)for(Re in ie.key!==void 0&&(ne=""+ie.key),ie)K.call(ie,Re)&&Re!=="key"&&Re!=="__self"&&Re!=="__source"&&(He[Re]=ie[Re]);var ue=arguments.length-2;if(ue===1)He.children=ve;else if(1<ue){for(var Ue=Array(ue),Xe=0;Xe<ue;Xe++)Ue[Xe]=arguments[Xe+2];He.children=Ue}if(U&&U.defaultProps)for(Re in ue=U.defaultProps,ue)He[Re]===void 0&&(He[Re]=ue[Re]);return C(U,ne,He)},rt.createRef=function(){return{current:null}},rt.forwardRef=function(U){return{$$typeof:d,render:U}},rt.isValidElement=k,rt.lazy=function(U){return{$$typeof:g,_payload:{_status:-1,_result:U},_init:ae}},rt.memo=function(U,ie){return{$$typeof:m,type:U,compare:ie===void 0?null:ie}},rt.startTransition=function(U){var ie=F.T,ve={};F.T=ve;try{var Re=U(),He=F.S;He!==null&&He(ve,Re),typeof Re=="object"&&Re!==null&&typeof Re.then=="function"&&Re.then(z,Me)}catch(ne){Me(ne)}finally{ie!==null&&ve.types!==null&&(ie.types=ve.types),F.T=ie}},rt.unstable_useCacheRefresh=function(){return F.H.useCacheRefresh()},rt.use=function(U){return F.H.use(U)},rt.useActionState=function(U,ie,ve){return F.H.useActionState(U,ie,ve)},rt.useCallback=function(U,ie){return F.H.useCallback(U,ie)},rt.useContext=function(U){return F.H.useContext(U)},rt.useDebugValue=function(){},rt.useDeferredValue=function(U,ie){return F.H.useDeferredValue(U,ie)},rt.useEffect=function(U,ie){return F.H.useEffect(U,ie)},rt.useEffectEvent=function(U){return F.H.useEffectEvent(U)},rt.useId=function(){return F.H.useId()},rt.useImperativeHandle=function(U,ie,ve){return F.H.useImperativeHandle(U,ie,ve)},rt.useInsertionEffect=function(U,ie){return F.H.useInsertionEffect(U,ie)},rt.useLayoutEffect=function(U,ie){return F.H.useLayoutEffect(U,ie)},rt.useMemo=function(U,ie){return F.H.useMemo(U,ie)},rt.useOptimistic=function(U,ie){return F.H.useOptimistic(U,ie)},rt.useReducer=function(U,ie,ve){return F.H.useReducer(U,ie,ve)},rt.useRef=function(U){return F.H.useRef(U)},rt.useState=function(U){return F.H.useState(U)},rt.useSyncExternalStore=function(U,ie,ve){return F.H.useSyncExternalStore(U,ie,ve)},rt.useTransition=function(){return F.H.useTransition()},rt.version="19.2.4",rt}var Pv;function Tp(){return Pv||(Pv=1,Pd.exports=gM()),Pd.exports}var Ae=Tp();const oi=hM(Ae);var Fd={exports:{}},$o={},Id={exports:{}},Bd={};var Fv;function vM(){return Fv||(Fv=1,(function(s){function e(P,H){var ae=P.length;P.push(H);e:for(;0<ae;){var Me=ae-1>>>1,Se=P[Me];if(0<l(Se,H))P[Me]=H,P[ae]=Se,ae=Me;else break e}}function i(P){return P.length===0?null:P[0]}function r(P){if(P.length===0)return null;var H=P[0],ae=P.pop();if(ae!==H){P[0]=ae;e:for(var Me=0,Se=P.length,U=Se>>>1;Me<U;){var ie=2*(Me+1)-1,ve=P[ie],Re=ie+1,He=P[Re];if(0>l(ve,ae))Re<Se&&0>l(He,ve)?(P[Me]=He,P[Re]=ae,Me=Re):(P[Me]=ve,P[ie]=ae,Me=ie);else if(Re<Se&&0>l(He,ae))P[Me]=He,P[Re]=ae,Me=Re;else break e}}return H}function l(P,H){var ae=P.sortIndex-H.sortIndex;return ae!==0?ae:P.id-H.id}if(s.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;s.unstable_now=function(){return c.now()}}else{var h=Date,d=h.now();s.unstable_now=function(){return h.now()-d}}var p=[],m=[],g=1,v=null,S=3,y=!1,E=!1,R=!1,M=!1,_=typeof setTimeout=="function"?setTimeout:null,N=typeof clearTimeout=="function"?clearTimeout:null,O=typeof setImmediate<"u"?setImmediate:null;function L(P){for(var H=i(m);H!==null;){if(H.callback===null)r(m);else if(H.startTime<=P)r(m),H.sortIndex=H.expirationTime,e(p,H);else break;H=i(m)}}function I(P){if(R=!1,L(P),!E)if(i(p)!==null)E=!0,z||(z=!0,re());else{var H=i(m);H!==null&&fe(I,H.startTime-P)}}var z=!1,F=-1,K=5,C=-1;function w(){return M?!0:!(s.unstable_now()-C<K)}function k(){if(M=!1,z){var P=s.unstable_now();C=P;var H=!0;try{e:{E=!1,R&&(R=!1,N(F),F=-1),y=!0;var ae=S;try{t:{for(L(P),v=i(p);v!==null&&!(v.expirationTime>P&&w());){var Me=v.callback;if(typeof Me=="function"){v.callback=null,S=v.priorityLevel;var Se=Me(v.expirationTime<=P);if(P=s.unstable_now(),typeof Se=="function"){v.callback=Se,L(P),H=!0;break t}v===i(p)&&r(p),L(P)}else r(p);v=i(p)}if(v!==null)H=!0;else{var U=i(m);U!==null&&fe(I,U.startTime-P),H=!1}}break e}finally{v=null,S=ae,y=!1}H=void 0}}finally{H?re():z=!1}}}var re;if(typeof O=="function")re=function(){O(k)};else if(typeof MessageChannel<"u"){var se=new MessageChannel,pe=se.port2;se.port1.onmessage=k,re=function(){pe.postMessage(null)}}else re=function(){_(k,0)};function fe(P,H){F=_(function(){P(s.unstable_now())},H)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(P){P.callback=null},s.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):K=0<P?Math.floor(1e3/P):5},s.unstable_getCurrentPriorityLevel=function(){return S},s.unstable_next=function(P){switch(S){case 1:case 2:case 3:var H=3;break;default:H=S}var ae=S;S=H;try{return P()}finally{S=ae}},s.unstable_requestPaint=function(){M=!0},s.unstable_runWithPriority=function(P,H){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var ae=S;S=P;try{return H()}finally{S=ae}},s.unstable_scheduleCallback=function(P,H,ae){var Me=s.unstable_now();switch(typeof ae=="object"&&ae!==null?(ae=ae.delay,ae=typeof ae=="number"&&0<ae?Me+ae:Me):ae=Me,P){case 1:var Se=-1;break;case 2:Se=250;break;case 5:Se=1073741823;break;case 4:Se=1e4;break;default:Se=5e3}return Se=ae+Se,P={id:g++,callback:H,priorityLevel:P,startTime:ae,expirationTime:Se,sortIndex:-1},ae>Me?(P.sortIndex=ae,e(m,P),i(p)===null&&P===i(m)&&(R?(N(F),F=-1):R=!0,fe(I,ae-Me))):(P.sortIndex=Se,e(p,P),E||y||(E=!0,z||(z=!0,re()))),P},s.unstable_shouldYield=w,s.unstable_wrapCallback=function(P){var H=S;return function(){var ae=S;S=H;try{return P.apply(this,arguments)}finally{S=ae}}}})(Bd)),Bd}var Iv;function _M(){return Iv||(Iv=1,Id.exports=vM()),Id.exports}var zd={exports:{}},Ln={};var Bv;function xM(){if(Bv)return Ln;Bv=1;var s=Tp();function e(p){var m="https://react.dev/errors/"+p;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)m+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+p+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var r={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(p,m,g){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:v==null?null:""+v,children:p,containerInfo:m,implementation:g}}var h=s.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(p,m){if(p==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return Ln.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=r,Ln.createPortal=function(p,m){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(e(299));return c(p,m,null,g)},Ln.flushSync=function(p){var m=h.T,g=r.p;try{if(h.T=null,r.p=2,p)return p()}finally{h.T=m,r.p=g,r.d.f()}},Ln.preconnect=function(p,m){typeof p=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,r.d.C(p,m))},Ln.prefetchDNS=function(p){typeof p=="string"&&r.d.D(p)},Ln.preinit=function(p,m){if(typeof p=="string"&&m&&typeof m.as=="string"){var g=m.as,v=d(g,m.crossOrigin),S=typeof m.integrity=="string"?m.integrity:void 0,y=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;g==="style"?r.d.S(p,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:v,integrity:S,fetchPriority:y}):g==="script"&&r.d.X(p,{crossOrigin:v,integrity:S,fetchPriority:y,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},Ln.preinitModule=function(p,m){if(typeof p=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var g=d(m.as,m.crossOrigin);r.d.M(p,{crossOrigin:g,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0})}}else m==null&&r.d.M(p)},Ln.preload=function(p,m){if(typeof p=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var g=m.as,v=d(g,m.crossOrigin);r.d.L(p,g,{crossOrigin:v,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},Ln.preloadModule=function(p,m){if(typeof p=="string")if(m){var g=d(m.as,m.crossOrigin);r.d.m(p,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:g,integrity:typeof m.integrity=="string"?m.integrity:void 0})}else r.d.m(p)},Ln.requestFormReset=function(p){r.d.r(p)},Ln.unstable_batchedUpdates=function(p,m){return p(m)},Ln.useFormState=function(p,m,g){return h.H.useFormState(p,m,g)},Ln.useFormStatus=function(){return h.H.useHostTransitionStatus()},Ln.version="19.2.4",Ln}var zv;function SM(){if(zv)return zd.exports;zv=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),zd.exports=xM(),zd.exports}var Hv;function yM(){if(Hv)return $o;Hv=1;var s=_M(),e=Tp(),i=SM();function r(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function h(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function d(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function p(t){if(c(t)!==t)throw Error(r(188))}function m(t){var n=t.alternate;if(!n){if(n=c(t),n===null)throw Error(r(188));return n!==t?null:t}for(var a=t,o=n;;){var u=a.return;if(u===null)break;var f=u.alternate;if(f===null){if(o=u.return,o!==null){a=o;continue}break}if(u.child===f.child){for(f=u.child;f;){if(f===a)return p(u),t;if(f===o)return p(u),n;f=f.sibling}throw Error(r(188))}if(a.return!==o.return)a=u,o=f;else{for(var x=!1,T=u.child;T;){if(T===a){x=!0,a=u,o=f;break}if(T===o){x=!0,o=u,a=f;break}T=T.sibling}if(!x){for(T=f.child;T;){if(T===a){x=!0,a=f,o=u;break}if(T===o){x=!0,o=f,a=u;break}T=T.sibling}if(!x)throw Error(r(189))}}if(a.alternate!==o)throw Error(r(190))}if(a.tag!==3)throw Error(r(188));return a.stateNode.current===a?t:n}function g(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=g(t),n!==null)return n;t=t.sibling}return null}var v=Object.assign,S=Symbol.for("react.element"),y=Symbol.for("react.transitional.element"),E=Symbol.for("react.portal"),R=Symbol.for("react.fragment"),M=Symbol.for("react.strict_mode"),_=Symbol.for("react.profiler"),N=Symbol.for("react.consumer"),O=Symbol.for("react.context"),L=Symbol.for("react.forward_ref"),I=Symbol.for("react.suspense"),z=Symbol.for("react.suspense_list"),F=Symbol.for("react.memo"),K=Symbol.for("react.lazy"),C=Symbol.for("react.activity"),w=Symbol.for("react.memo_cache_sentinel"),k=Symbol.iterator;function re(t){return t===null||typeof t!="object"?null:(t=k&&t[k]||t["@@iterator"],typeof t=="function"?t:null)}var se=Symbol.for("react.client.reference");function pe(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===se?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case R:return"Fragment";case _:return"Profiler";case M:return"StrictMode";case I:return"Suspense";case z:return"SuspenseList";case C:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case E:return"Portal";case O:return t.displayName||"Context";case N:return(t._context.displayName||"Context")+".Consumer";case L:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case F:return n=t.displayName||null,n!==null?n:pe(t.type)||"Memo";case K:n=t._payload,t=t._init;try{return pe(t(n))}catch{}}return null}var fe=Array.isArray,P=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,H=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ae={pending:!1,data:null,method:null,action:null},Me=[],Se=-1;function U(t){return{current:t}}function ie(t){0>Se||(t.current=Me[Se],Me[Se]=null,Se--)}function ve(t,n){Se++,Me[Se]=t.current,t.current=n}var Re=U(null),He=U(null),ne=U(null),ue=U(null);function Ue(t,n){switch(ve(ne,n),ve(He,t),ve(Re,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?tv(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=tv(n),t=nv(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}ie(Re),ve(Re,t)}function Xe(){ie(Re),ie(He),ie(ne)}function Ge(t){t.memoizedState!==null&&ve(ue,t);var n=Re.current,a=nv(n,t.type);n!==a&&(ve(He,t),ve(Re,a))}function pt(t){He.current===t&&(ie(Re),ie(He)),ue.current===t&&(ie(ue),jo._currentValue=ae)}var $t,xt;function mt(t){if($t===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);$t=n&&n[1]||"",xt=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+$t+t+xt}var Dt=!1;function ot(t,n){if(!t||Dt)return"";Dt=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var ge=function(){throw Error()};if(Object.defineProperty(ge.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(ge,[])}catch(le){var te=le}Reflect.construct(t,[],ge)}else{try{ge.call()}catch(le){te=le}t.call(ge.prototype)}}else{try{throw Error()}catch(le){te=le}(ge=t())&&typeof ge.catch=="function"&&ge.catch(function(){})}}catch(le){if(le&&te&&typeof le.stack=="string")return[le.stack,te.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=o.DetermineComponentFrameRoot(),x=f[0],T=f[1];if(x&&T){var B=x.split(`
`),$=T.split(`
`);for(u=o=0;o<B.length&&!B[o].includes("DetermineComponentFrameRoot");)o++;for(;u<$.length&&!$[u].includes("DetermineComponentFrameRoot");)u++;if(o===B.length||u===$.length)for(o=B.length-1,u=$.length-1;1<=o&&0<=u&&B[o]!==$[u];)u--;for(;1<=o&&0<=u;o--,u--)if(B[o]!==$[u]){if(o!==1||u!==1)do if(o--,u--,0>u||B[o]!==$[u]){var de=`
`+B[o].replace(" at new "," at ");return t.displayName&&de.includes("<anonymous>")&&(de=de.replace("<anonymous>",t.displayName)),de}while(1<=o&&0<=u);break}}}finally{Dt=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?mt(a):""}function Jt(t,n){switch(t.tag){case 26:case 27:case 5:return mt(t.type);case 16:return mt("Lazy");case 13:return t.child!==n&&n!==null?mt("Suspense Fallback"):mt("Suspense");case 19:return mt("SuspenseList");case 0:case 15:return ot(t.type,!1);case 11:return ot(t.type.render,!1);case 1:return ot(t.type,!0);case 31:return mt("Activity");default:return""}}function G(t){try{var n="",a=null;do n+=Jt(t,a),a=t,t=t.return;while(t);return n}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var Zt=Object.prototype.hasOwnProperty,Et=s.unstable_scheduleCallback,Ot=s.unstable_cancelCallback,Ye=s.unstable_shouldYield,D=s.unstable_requestPaint,b=s.unstable_now,W=s.unstable_getCurrentPriorityLevel,he=s.unstable_ImmediatePriority,xe=s.unstable_UserBlockingPriority,ce=s.unstable_NormalPriority,Ke=s.unstable_LowPriority,we=s.unstable_IdlePriority,We=s.log,nt=s.unstable_setDisableYieldValue,be=null,Ee=null;function Be(t){if(typeof We=="function"&&nt(t),Ee&&typeof Ee.setStrictMode=="function")try{Ee.setStrictMode(be,t)}catch{}}var Fe=Math.clz32?Math.clz32:X,De=Math.log,ct=Math.LN2;function X(t){return t>>>=0,t===0?32:31-(De(t)/ct|0)|0}var Le=256,Te=262144,Ie=4194304;function ye(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function _e(t,n,a){var o=t.pendingLanes;if(o===0)return 0;var u=0,f=t.suspendedLanes,x=t.pingedLanes;t=t.warmLanes;var T=o&134217727;return T!==0?(o=T&~f,o!==0?u=ye(o):(x&=T,x!==0?u=ye(x):a||(a=T&~t,a!==0&&(u=ye(a))))):(T=o&~f,T!==0?u=ye(T):x!==0?u=ye(x):a||(a=o&~t,a!==0&&(u=ye(a)))),u===0?0:n!==0&&n!==u&&(n&f)===0&&(f=u&-u,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:u}function Ce(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function it(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ft(){var t=Ie;return Ie<<=1,(Ie&62914560)===0&&(Ie=4194304),t}function Tt(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function Nn(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Si(t,n,a,o,u,f){var x=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var T=t.entanglements,B=t.expirationTimes,$=t.hiddenUpdates;for(a=x&~a;0<a;){var de=31-Fe(a),ge=1<<de;T[de]=0,B[de]=-1;var te=$[de];if(te!==null)for($[de]=null,de=0;de<te.length;de++){var le=te[de];le!==null&&(le.lane&=-536870913)}a&=~ge}o!==0&&El(t,o,0),f!==0&&u===0&&t.tag!==0&&(t.suspendedLanes|=f&~(x&~n))}function El(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var o=31-Fe(n);t.entangledLanes|=n,t.entanglements[o]=t.entanglements[o]|1073741824|a&261930}function ao(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var o=31-Fe(a),u=1<<o;u&n|t[o]&n&&(t[o]|=n),a&=~u}}function Gs(t,n){var a=n&-n;return a=(a&42)!==0?1:so(a),(a&(t.suspendedLanes|n))!==0?0:a}function so(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function Vs(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function ro(){var t=H.p;return t!==0?t:(t=window.event,t===void 0?32:Tv(t.type))}function Pi(t,n){var a=H.p;try{return H.p=t,n()}finally{H.p=a}}var li=Math.random().toString(36).slice(2),ln="__reactFiber$"+li,yn="__reactProps$"+li,yi="__reactContainer$"+li,ks="__reactEvents$"+li,Xs="__reactListeners$"+li,Tl="__reactHandles$"+li,oo="__reactResources$"+li,cs="__reactMarker$"+li;function lo(t){delete t[ln],delete t[yn],delete t[ks],delete t[Xs],delete t[Tl]}function Ta(t){var n=t[ln];if(n)return n;for(var a=t.parentNode;a;){if(n=a[yi]||a[ln]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=cv(t);t!==null;){if(a=t[ln])return a;t=cv(t)}return n}t=a,a=t.parentNode}return null}function Aa(t){if(t=t[ln]||t[yi]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function us(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(r(33))}function Ra(t){var n=t[oo];return n||(n=t[oo]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function A(t){t[cs]=!0}var q=new Set,oe={};function ee(t,n){Y(t,n),Y(t+"Capture",n)}function Y(t,n){for(oe[t]=n,t=0;t<n.length;t++)q.add(n[t])}var Ne=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ze={},Oe={};function Ve(t){return Zt.call(Oe,t)?!0:Zt.call(ze,t)?!1:Ne.test(t)?Oe[t]=!0:(ze[t]=!0,!1)}function qe(t,n,a){if(Ve(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function Je(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function je(t,n,a,o){if(o===null)t.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+o)}}function et(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Ut(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Kt(t,n,a){var o=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var u=o.get,f=o.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return u.call(this)},set:function(x){a=""+x,f.call(this,x)}}),Object.defineProperty(t,n,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(x){a=""+x},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function Wt(t){if(!t._valueTracker){var n=Ut(t)?"checked":"value";t._valueTracker=Kt(t,n,""+t[n])}}function Pt(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return t&&(o=Ut(t)?t.checked?"true":"false":t.value),t=o,t!==a?(n.setValue(t),!0):!1}function Qe(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Nt=/[\n"\\]/g;function at(t){return t.replace(Nt,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Mn(t,n,a,o,u,f,x,T){t.name="",x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"?t.type=x:t.removeAttribute("type"),n!=null?x==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+et(n)):t.value!==""+et(n)&&(t.value=""+et(n)):x!=="submit"&&x!=="reset"||t.removeAttribute("value"),n!=null?bn(t,x,et(n)):a!=null?bn(t,x,et(a)):o!=null&&t.removeAttribute("value"),u==null&&f!=null&&(t.defaultChecked=!!f),u!=null&&(t.checked=u&&typeof u!="function"&&typeof u!="symbol"),T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?t.name=""+et(T):t.removeAttribute("name")}function Zi(t,n,a,o,u,f,x,T){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(t.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){Wt(t);return}a=a!=null?""+et(a):"",n=n!=null?""+et(n):a,T||n===t.value||(t.value=n),t.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,t.checked=T?t.checked:!!o,t.defaultChecked=!!o,x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"&&(t.name=x),Wt(t)}function bn(t,n,a){n==="number"&&Qe(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function ci(t,n,a,o){if(t=t.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<t.length;a++)u=n.hasOwnProperty("$"+t[a].value),t[a].selected!==u&&(t[a].selected=u),u&&o&&(t[a].defaultSelected=!0)}else{for(a=""+et(a),n=null,u=0;u<t.length;u++){if(t[u].value===a){t[u].selected=!0,o&&(t[u].defaultSelected=!0);return}n!==null||t[u].disabled||(n=t[u])}n!==null&&(n.selected=!0)}}function It(t,n,a){if(n!=null&&(n=""+et(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+et(a):""}function En(t,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(r(92));if(fe(o)){if(1<o.length)throw Error(r(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=et(n),t.defaultValue=a,o=t.textContent,o===a&&o!==""&&o!==null&&(t.value=o),Wt(t)}function pn(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var Tn=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function An(t,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":o?t.setProperty(n,a):typeof a!="number"||a===0||Tn.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function Ws(t,n,a){if(n!=null&&typeof n!="object")throw Error(r(62));if(t=t.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?t.setProperty(o,""):o==="float"?t.cssFloat="":t[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&a[u]!==o&&An(t,u,o)}else for(var f in n)n.hasOwnProperty(f)&&An(t,f,n[f])}function Mi(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var cS=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),uS=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Al(t){return uS.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function Ki(){}var Du=null;function Uu(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var qs=null,js=null;function em(t){var n=Aa(t);if(n&&(t=n.stateNode)){var a=t[yn]||null;e:switch(t=n.stateNode,n.type){case"input":if(Mn(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+at(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==t&&o.form===t.form){var u=o[yn]||null;if(!u)throw Error(r(90));Mn(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===t.form&&Pt(o)}break e;case"textarea":It(t,a.value,a.defaultValue);break e;case"select":n=a.value,n!=null&&ci(t,!!a.multiple,n,!1)}}}var Nu=!1;function tm(t,n,a){if(Nu)return t(n,a);Nu=!0;try{var o=t(n);return o}finally{if(Nu=!1,(qs!==null||js!==null)&&(hc(),qs&&(n=qs,t=js,js=qs=null,em(n),t)))for(n=0;n<t.length;n++)em(t[n])}}function co(t,n){var a=t.stateNode;if(a===null)return null;var o=a[yn]||null;if(o===null)return null;a=o[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(t=t.type,o=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!o;break e;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(r(231,n,typeof a));return a}var Qi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Lu=!1;if(Qi)try{var uo={};Object.defineProperty(uo,"passive",{get:function(){Lu=!0}}),window.addEventListener("test",uo,uo),window.removeEventListener("test",uo,uo)}catch{Lu=!1}var Ca=null,Ou=null,Rl=null;function nm(){if(Rl)return Rl;var t,n=Ou,a=n.length,o,u="value"in Ca?Ca.value:Ca.textContent,f=u.length;for(t=0;t<a&&n[t]===u[t];t++);var x=a-t;for(o=1;o<=x&&n[a-o]===u[f-o];o++);return Rl=u.slice(t,1<o?1-o:void 0)}function Cl(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function wl(){return!0}function im(){return!1}function kn(t){function n(a,o,u,f,x){this._reactName=a,this._targetInst=u,this.type=o,this.nativeEvent=f,this.target=x,this.currentTarget=null;for(var T in t)t.hasOwnProperty(T)&&(a=t[T],this[T]=a?a(f):f[T]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?wl:im,this.isPropagationStopped=im,this}return v(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=wl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=wl)},persist:function(){},isPersistent:wl}),n}var fs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Dl=kn(fs),fo=v({},fs,{view:0,detail:0}),fS=kn(fo),Pu,Fu,ho,Ul=v({},fo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Bu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==ho&&(ho&&t.type==="mousemove"?(Pu=t.screenX-ho.screenX,Fu=t.screenY-ho.screenY):Fu=Pu=0,ho=t),Pu)},movementY:function(t){return"movementY"in t?t.movementY:Fu}}),am=kn(Ul),dS=v({},Ul,{dataTransfer:0}),hS=kn(dS),pS=v({},fo,{relatedTarget:0}),Iu=kn(pS),mS=v({},fs,{animationName:0,elapsedTime:0,pseudoElement:0}),gS=kn(mS),vS=v({},fs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),_S=kn(vS),xS=v({},fs,{data:0}),sm=kn(xS),SS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},yS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},MS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function bS(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=MS[t])?!!n[t]:!1}function Bu(){return bS}var ES=v({},fo,{key:function(t){if(t.key){var n=SS[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=Cl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?yS[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Bu,charCode:function(t){return t.type==="keypress"?Cl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Cl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),TS=kn(ES),AS=v({},Ul,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),rm=kn(AS),RS=v({},fo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Bu}),CS=kn(RS),wS=v({},fs,{propertyName:0,elapsedTime:0,pseudoElement:0}),DS=kn(wS),US=v({},Ul,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),NS=kn(US),LS=v({},fs,{newState:0,oldState:0}),OS=kn(LS),PS=[9,13,27,32],zu=Qi&&"CompositionEvent"in window,po=null;Qi&&"documentMode"in document&&(po=document.documentMode);var FS=Qi&&"TextEvent"in window&&!po,om=Qi&&(!zu||po&&8<po&&11>=po),lm=" ",cm=!1;function um(t,n){switch(t){case"keyup":return PS.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function fm(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Ys=!1;function IS(t,n){switch(t){case"compositionend":return fm(n);case"keypress":return n.which!==32?null:(cm=!0,lm);case"textInput":return t=n.data,t===lm&&cm?null:t;default:return null}}function BS(t,n){if(Ys)return t==="compositionend"||!zu&&um(t,n)?(t=nm(),Rl=Ou=Ca=null,Ys=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return om&&n.locale!=="ko"?null:n.data;default:return null}}var zS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function dm(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!zS[t.type]:n==="textarea"}function hm(t,n,a,o){qs?js?js.push(o):js=[o]:qs=o,n=Sc(n,"onChange"),0<n.length&&(a=new Dl("onChange","change",null,a,o),t.push({event:a,listeners:n}))}var mo=null,go=null;function HS(t){Z0(t,0)}function Nl(t){var n=us(t);if(Pt(n))return t}function pm(t,n){if(t==="change")return n}var mm=!1;if(Qi){var Hu;if(Qi){var Gu="oninput"in document;if(!Gu){var gm=document.createElement("div");gm.setAttribute("oninput","return;"),Gu=typeof gm.oninput=="function"}Hu=Gu}else Hu=!1;mm=Hu&&(!document.documentMode||9<document.documentMode)}function vm(){mo&&(mo.detachEvent("onpropertychange",_m),go=mo=null)}function _m(t){if(t.propertyName==="value"&&Nl(go)){var n=[];hm(n,go,t,Uu(t)),tm(HS,n)}}function GS(t,n,a){t==="focusin"?(vm(),mo=n,go=a,mo.attachEvent("onpropertychange",_m)):t==="focusout"&&vm()}function VS(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Nl(go)}function kS(t,n){if(t==="click")return Nl(n)}function XS(t,n){if(t==="input"||t==="change")return Nl(n)}function WS(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var Zn=typeof Object.is=="function"?Object.is:WS;function vo(t,n){if(Zn(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var u=a[o];if(!Zt.call(n,u)||!Zn(t[u],n[u]))return!1}return!0}function xm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Sm(t,n){var a=xm(t);t=0;for(var o;a;){if(a.nodeType===3){if(o=t+a.textContent.length,t<=n&&o>=n)return{node:a,offset:n-t};t=o}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=xm(a)}}function ym(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?ym(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function Mm(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=Qe(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=Qe(t.document)}return n}function Vu(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var qS=Qi&&"documentMode"in document&&11>=document.documentMode,Zs=null,ku=null,_o=null,Xu=!1;function bm(t,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Xu||Zs==null||Zs!==Qe(o)||(o=Zs,"selectionStart"in o&&Vu(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),_o&&vo(_o,o)||(_o=o,o=Sc(ku,"onSelect"),0<o.length&&(n=new Dl("onSelect","select",null,n,a),t.push({event:n,listeners:o}),n.target=Zs)))}function ds(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var Ks={animationend:ds("Animation","AnimationEnd"),animationiteration:ds("Animation","AnimationIteration"),animationstart:ds("Animation","AnimationStart"),transitionrun:ds("Transition","TransitionRun"),transitionstart:ds("Transition","TransitionStart"),transitioncancel:ds("Transition","TransitionCancel"),transitionend:ds("Transition","TransitionEnd")},Wu={},Em={};Qi&&(Em=document.createElement("div").style,"AnimationEvent"in window||(delete Ks.animationend.animation,delete Ks.animationiteration.animation,delete Ks.animationstart.animation),"TransitionEvent"in window||delete Ks.transitionend.transition);function hs(t){if(Wu[t])return Wu[t];if(!Ks[t])return t;var n=Ks[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in Em)return Wu[t]=n[a];return t}var Tm=hs("animationend"),Am=hs("animationiteration"),Rm=hs("animationstart"),jS=hs("transitionrun"),YS=hs("transitionstart"),ZS=hs("transitioncancel"),Cm=hs("transitionend"),wm=new Map,qu="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");qu.push("scrollEnd");function bi(t,n){wm.set(t,n),ee(n,[t])}var Ll=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},ui=[],Qs=0,ju=0;function Ol(){for(var t=Qs,n=ju=Qs=0;n<t;){var a=ui[n];ui[n++]=null;var o=ui[n];ui[n++]=null;var u=ui[n];ui[n++]=null;var f=ui[n];if(ui[n++]=null,o!==null&&u!==null){var x=o.pending;x===null?u.next=u:(u.next=x.next,x.next=u),o.pending=u}f!==0&&Dm(a,u,f)}}function Pl(t,n,a,o){ui[Qs++]=t,ui[Qs++]=n,ui[Qs++]=a,ui[Qs++]=o,ju|=o,t.lanes|=o,t=t.alternate,t!==null&&(t.lanes|=o)}function Yu(t,n,a,o){return Pl(t,n,a,o),Fl(t)}function ps(t,n){return Pl(t,null,null,n),Fl(t)}function Dm(t,n,a){t.lanes|=a;var o=t.alternate;o!==null&&(o.lanes|=a);for(var u=!1,f=t.return;f!==null;)f.childLanes|=a,o=f.alternate,o!==null&&(o.childLanes|=a),f.tag===22&&(t=f.stateNode,t===null||t._visibility&1||(u=!0)),t=f,f=f.return;return t.tag===3?(f=t.stateNode,u&&n!==null&&(u=31-Fe(a),t=f.hiddenUpdates,o=t[u],o===null?t[u]=[n]:o.push(n),n.lane=a|536870912),f):null}function Fl(t){if(50<Ho)throw Ho=0,ad=null,Error(r(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var $s={};function KS(t,n,a,o){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Kn(t,n,a,o){return new KS(t,n,a,o)}function Zu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function $i(t,n){var a=t.alternate;return a===null?(a=Kn(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function Um(t,n){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function Il(t,n,a,o,u,f){var x=0;if(o=t,typeof t=="function")Zu(t)&&(x=1);else if(typeof t=="string")x=tM(t,a,Re.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case C:return t=Kn(31,a,n,u),t.elementType=C,t.lanes=f,t;case R:return ms(a.children,u,f,n);case M:x=8,u|=24;break;case _:return t=Kn(12,a,n,u|2),t.elementType=_,t.lanes=f,t;case I:return t=Kn(13,a,n,u),t.elementType=I,t.lanes=f,t;case z:return t=Kn(19,a,n,u),t.elementType=z,t.lanes=f,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case O:x=10;break e;case N:x=9;break e;case L:x=11;break e;case F:x=14;break e;case K:x=16,o=null;break e}x=29,a=Error(r(130,t===null?"null":typeof t,"")),o=null}return n=Kn(x,a,n,u),n.elementType=t,n.type=o,n.lanes=f,n}function ms(t,n,a,o){return t=Kn(7,t,o,n),t.lanes=a,t}function Ku(t,n,a){return t=Kn(6,t,null,n),t.lanes=a,t}function Nm(t){var n=Kn(18,null,null,0);return n.stateNode=t,n}function Qu(t,n,a){return n=Kn(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var Lm=new WeakMap;function fi(t,n){if(typeof t=="object"&&t!==null){var a=Lm.get(t);return a!==void 0?a:(n={value:t,source:n,stack:G(n)},Lm.set(t,n),n)}return{value:t,source:n,stack:G(n)}}var Js=[],er=0,Bl=null,xo=0,di=[],hi=0,wa=null,Fi=1,Ii="";function Ji(t,n){Js[er++]=xo,Js[er++]=Bl,Bl=t,xo=n}function Om(t,n,a){di[hi++]=Fi,di[hi++]=Ii,di[hi++]=wa,wa=t;var o=Fi;t=Ii;var u=32-Fe(o)-1;o&=~(1<<u),a+=1;var f=32-Fe(n)+u;if(30<f){var x=u-u%5;f=(o&(1<<x)-1).toString(32),o>>=x,u-=x,Fi=1<<32-Fe(n)+u|a<<u|o,Ii=f+t}else Fi=1<<f|a<<u|o,Ii=t}function $u(t){t.return!==null&&(Ji(t,1),Om(t,1,0))}function Ju(t){for(;t===Bl;)Bl=Js[--er],Js[er]=null,xo=Js[--er],Js[er]=null;for(;t===wa;)wa=di[--hi],di[hi]=null,Ii=di[--hi],di[hi]=null,Fi=di[--hi],di[hi]=null}function Pm(t,n){di[hi++]=Fi,di[hi++]=Ii,di[hi++]=wa,Fi=n.id,Ii=n.overflow,wa=t}var Rn=null,jt=null,bt=!1,Da=null,pi=!1,ef=Error(r(519));function Ua(t){var n=Error(r(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw So(fi(n,t)),ef}function Fm(t){var n=t.stateNode,a=t.type,o=t.memoizedProps;switch(n[ln]=t,n[yn]=o,a){case"dialog":vt("cancel",n),vt("close",n);break;case"iframe":case"object":case"embed":vt("load",n);break;case"video":case"audio":for(a=0;a<Vo.length;a++)vt(Vo[a],n);break;case"source":vt("error",n);break;case"img":case"image":case"link":vt("error",n),vt("load",n);break;case"details":vt("toggle",n);break;case"input":vt("invalid",n),Zi(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":vt("invalid",n);break;case"textarea":vt("invalid",n),En(n,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||J0(n.textContent,a)?(o.popover!=null&&(vt("beforetoggle",n),vt("toggle",n)),o.onScroll!=null&&vt("scroll",n),o.onScrollEnd!=null&&vt("scrollend",n),o.onClick!=null&&(n.onclick=Ki),n=!0):n=!1,n||Ua(t,!0)}function Im(t){for(Rn=t.return;Rn;)switch(Rn.tag){case 5:case 31:case 13:pi=!1;return;case 27:case 3:pi=!0;return;default:Rn=Rn.return}}function tr(t){if(t!==Rn)return!1;if(!bt)return Im(t),bt=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||xd(t.type,t.memoizedProps)),a=!a),a&&jt&&Ua(t),Im(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));jt=lv(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(317));jt=lv(t)}else n===27?(n=jt,Wa(t.type)?(t=Ed,Ed=null,jt=t):jt=n):jt=Rn?gi(t.stateNode.nextSibling):null;return!0}function gs(){jt=Rn=null,bt=!1}function tf(){var t=Da;return t!==null&&(jn===null?jn=t:jn.push.apply(jn,t),Da=null),t}function So(t){Da===null?Da=[t]:Da.push(t)}var nf=U(null),vs=null,ea=null;function Na(t,n,a){ve(nf,n._currentValue),n._currentValue=a}function ta(t){t._currentValue=nf.current,ie(nf)}function af(t,n,a){for(;t!==null;){var o=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),t===a)break;t=t.return}}function sf(t,n,a,o){var u=t.child;for(u!==null&&(u.return=t);u!==null;){var f=u.dependencies;if(f!==null){var x=u.child;f=f.firstContext;e:for(;f!==null;){var T=f;f=u;for(var B=0;B<n.length;B++)if(T.context===n[B]){f.lanes|=a,T=f.alternate,T!==null&&(T.lanes|=a),af(f.return,a,t),o||(x=null);break e}f=T.next}}else if(u.tag===18){if(x=u.return,x===null)throw Error(r(341));x.lanes|=a,f=x.alternate,f!==null&&(f.lanes|=a),af(x,a,t),x=null}else x=u.child;if(x!==null)x.return=u;else for(x=u;x!==null;){if(x===t){x=null;break}if(u=x.sibling,u!==null){u.return=x.return,x=u;break}x=x.return}u=x}}function nr(t,n,a,o){t=null;for(var u=n,f=!1;u!==null;){if(!f){if((u.flags&524288)!==0)f=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var x=u.alternate;if(x===null)throw Error(r(387));if(x=x.memoizedProps,x!==null){var T=u.type;Zn(u.pendingProps.value,x.value)||(t!==null?t.push(T):t=[T])}}else if(u===ue.current){if(x=u.alternate,x===null)throw Error(r(387));x.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(t!==null?t.push(jo):t=[jo])}u=u.return}t!==null&&sf(n,t,a,o),n.flags|=262144}function zl(t){for(t=t.firstContext;t!==null;){if(!Zn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function _s(t){vs=t,ea=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Cn(t){return Bm(vs,t)}function Hl(t,n){return vs===null&&_s(t),Bm(t,n)}function Bm(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},ea===null){if(t===null)throw Error(r(308));ea=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else ea=ea.next=n;return a}var QS=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,o){t.push(o)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},$S=s.unstable_scheduleCallback,JS=s.unstable_NormalPriority,cn={$$typeof:O,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function rf(){return{controller:new QS,data:new Map,refCount:0}}function yo(t){t.refCount--,t.refCount===0&&$S(JS,function(){t.controller.abort()})}var Mo=null,of=0,ir=0,ar=null;function ey(t,n){if(Mo===null){var a=Mo=[];of=0,ir=ud(),ar={status:"pending",value:void 0,then:function(o){a.push(o)}}}return of++,n.then(zm,zm),n}function zm(){if(--of===0&&Mo!==null){ar!==null&&(ar.status="fulfilled");var t=Mo;Mo=null,ir=0,ar=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function ty(t,n){var a=[],o={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return t.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),o}var Hm=P.S;P.S=function(t,n){b0=b(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&ey(t,n),Hm!==null&&Hm(t,n)};var xs=U(null);function lf(){var t=xs.current;return t!==null?t:Xt.pooledCache}function Gl(t,n){n===null?ve(xs,xs.current):ve(xs,n.pool)}function Gm(){var t=lf();return t===null?null:{parent:cn._currentValue,pool:t}}var sr=Error(r(460)),cf=Error(r(474)),Vl=Error(r(542)),kl={then:function(){}};function Vm(t){return t=t.status,t==="fulfilled"||t==="rejected"}function km(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(Ki,Ki),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Wm(t),t;default:if(typeof n.status=="string")n.then(Ki,Ki);else{if(t=Xt,t!==null&&100<t.shellSuspendCounter)throw Error(r(482));t=n,t.status="pending",t.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,Wm(t),t}throw ys=n,sr}}function Ss(t){try{var n=t._init;return n(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(ys=a,sr):a}}var ys=null;function Xm(){if(ys===null)throw Error(r(459));var t=ys;return ys=null,t}function Wm(t){if(t===sr||t===Vl)throw Error(r(483))}var rr=null,bo=0;function Xl(t){var n=bo;return bo+=1,rr===null&&(rr=[]),km(rr,t,n)}function Eo(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function Wl(t,n){throw n.$$typeof===S?Error(r(525)):(t=Object.prototype.toString.call(n),Error(r(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function qm(t){function n(j,V){if(t){var Q=j.deletions;Q===null?(j.deletions=[V],j.flags|=16):Q.push(V)}}function a(j,V){if(!t)return null;for(;V!==null;)n(j,V),V=V.sibling;return null}function o(j){for(var V=new Map;j!==null;)j.key!==null?V.set(j.key,j):V.set(j.index,j),j=j.sibling;return V}function u(j,V){return j=$i(j,V),j.index=0,j.sibling=null,j}function f(j,V,Q){return j.index=Q,t?(Q=j.alternate,Q!==null?(Q=Q.index,Q<V?(j.flags|=67108866,V):Q):(j.flags|=67108866,V)):(j.flags|=1048576,V)}function x(j){return t&&j.alternate===null&&(j.flags|=67108866),j}function T(j,V,Q,me){return V===null||V.tag!==6?(V=Ku(Q,j.mode,me),V.return=j,V):(V=u(V,Q),V.return=j,V)}function B(j,V,Q,me){var $e=Q.type;return $e===R?de(j,V,Q.props.children,me,Q.key):V!==null&&(V.elementType===$e||typeof $e=="object"&&$e!==null&&$e.$$typeof===K&&Ss($e)===V.type)?(V=u(V,Q.props),Eo(V,Q),V.return=j,V):(V=Il(Q.type,Q.key,Q.props,null,j.mode,me),Eo(V,Q),V.return=j,V)}function $(j,V,Q,me){return V===null||V.tag!==4||V.stateNode.containerInfo!==Q.containerInfo||V.stateNode.implementation!==Q.implementation?(V=Qu(Q,j.mode,me),V.return=j,V):(V=u(V,Q.children||[]),V.return=j,V)}function de(j,V,Q,me,$e){return V===null||V.tag!==7?(V=ms(Q,j.mode,me,$e),V.return=j,V):(V=u(V,Q),V.return=j,V)}function ge(j,V,Q){if(typeof V=="string"&&V!==""||typeof V=="number"||typeof V=="bigint")return V=Ku(""+V,j.mode,Q),V.return=j,V;if(typeof V=="object"&&V!==null){switch(V.$$typeof){case y:return Q=Il(V.type,V.key,V.props,null,j.mode,Q),Eo(Q,V),Q.return=j,Q;case E:return V=Qu(V,j.mode,Q),V.return=j,V;case K:return V=Ss(V),ge(j,V,Q)}if(fe(V)||re(V))return V=ms(V,j.mode,Q,null),V.return=j,V;if(typeof V.then=="function")return ge(j,Xl(V),Q);if(V.$$typeof===O)return ge(j,Hl(j,V),Q);Wl(j,V)}return null}function te(j,V,Q,me){var $e=V!==null?V.key:null;if(typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint")return $e!==null?null:T(j,V,""+Q,me);if(typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case y:return Q.key===$e?B(j,V,Q,me):null;case E:return Q.key===$e?$(j,V,Q,me):null;case K:return Q=Ss(Q),te(j,V,Q,me)}if(fe(Q)||re(Q))return $e!==null?null:de(j,V,Q,me,null);if(typeof Q.then=="function")return te(j,V,Xl(Q),me);if(Q.$$typeof===O)return te(j,V,Hl(j,Q),me);Wl(j,Q)}return null}function le(j,V,Q,me,$e){if(typeof me=="string"&&me!==""||typeof me=="number"||typeof me=="bigint")return j=j.get(Q)||null,T(V,j,""+me,$e);if(typeof me=="object"&&me!==null){switch(me.$$typeof){case y:return j=j.get(me.key===null?Q:me.key)||null,B(V,j,me,$e);case E:return j=j.get(me.key===null?Q:me.key)||null,$(V,j,me,$e);case K:return me=Ss(me),le(j,V,Q,me,$e)}if(fe(me)||re(me))return j=j.get(Q)||null,de(V,j,me,$e,null);if(typeof me.then=="function")return le(j,V,Q,Xl(me),$e);if(me.$$typeof===O)return le(j,V,Q,Hl(V,me),$e);Wl(V,me)}return null}function ke(j,V,Q,me){for(var $e=null,Ct=null,Ze=V,ut=V=0,yt=null;Ze!==null&&ut<Q.length;ut++){Ze.index>ut?(yt=Ze,Ze=null):yt=Ze.sibling;var wt=te(j,Ze,Q[ut],me);if(wt===null){Ze===null&&(Ze=yt);break}t&&Ze&&wt.alternate===null&&n(j,Ze),V=f(wt,V,ut),Ct===null?$e=wt:Ct.sibling=wt,Ct=wt,Ze=yt}if(ut===Q.length)return a(j,Ze),bt&&Ji(j,ut),$e;if(Ze===null){for(;ut<Q.length;ut++)Ze=ge(j,Q[ut],me),Ze!==null&&(V=f(Ze,V,ut),Ct===null?$e=Ze:Ct.sibling=Ze,Ct=Ze);return bt&&Ji(j,ut),$e}for(Ze=o(Ze);ut<Q.length;ut++)yt=le(Ze,j,ut,Q[ut],me),yt!==null&&(t&&yt.alternate!==null&&Ze.delete(yt.key===null?ut:yt.key),V=f(yt,V,ut),Ct===null?$e=yt:Ct.sibling=yt,Ct=yt);return t&&Ze.forEach(function(Ka){return n(j,Ka)}),bt&&Ji(j,ut),$e}function tt(j,V,Q,me){if(Q==null)throw Error(r(151));for(var $e=null,Ct=null,Ze=V,ut=V=0,yt=null,wt=Q.next();Ze!==null&&!wt.done;ut++,wt=Q.next()){Ze.index>ut?(yt=Ze,Ze=null):yt=Ze.sibling;var Ka=te(j,Ze,wt.value,me);if(Ka===null){Ze===null&&(Ze=yt);break}t&&Ze&&Ka.alternate===null&&n(j,Ze),V=f(Ka,V,ut),Ct===null?$e=Ka:Ct.sibling=Ka,Ct=Ka,Ze=yt}if(wt.done)return a(j,Ze),bt&&Ji(j,ut),$e;if(Ze===null){for(;!wt.done;ut++,wt=Q.next())wt=ge(j,wt.value,me),wt!==null&&(V=f(wt,V,ut),Ct===null?$e=wt:Ct.sibling=wt,Ct=wt);return bt&&Ji(j,ut),$e}for(Ze=o(Ze);!wt.done;ut++,wt=Q.next())wt=le(Ze,j,ut,wt.value,me),wt!==null&&(t&&wt.alternate!==null&&Ze.delete(wt.key===null?ut:wt.key),V=f(wt,V,ut),Ct===null?$e=wt:Ct.sibling=wt,Ct=wt);return t&&Ze.forEach(function(dM){return n(j,dM)}),bt&&Ji(j,ut),$e}function kt(j,V,Q,me){if(typeof Q=="object"&&Q!==null&&Q.type===R&&Q.key===null&&(Q=Q.props.children),typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case y:e:{for(var $e=Q.key;V!==null;){if(V.key===$e){if($e=Q.type,$e===R){if(V.tag===7){a(j,V.sibling),me=u(V,Q.props.children),me.return=j,j=me;break e}}else if(V.elementType===$e||typeof $e=="object"&&$e!==null&&$e.$$typeof===K&&Ss($e)===V.type){a(j,V.sibling),me=u(V,Q.props),Eo(me,Q),me.return=j,j=me;break e}a(j,V);break}else n(j,V);V=V.sibling}Q.type===R?(me=ms(Q.props.children,j.mode,me,Q.key),me.return=j,j=me):(me=Il(Q.type,Q.key,Q.props,null,j.mode,me),Eo(me,Q),me.return=j,j=me)}return x(j);case E:e:{for($e=Q.key;V!==null;){if(V.key===$e)if(V.tag===4&&V.stateNode.containerInfo===Q.containerInfo&&V.stateNode.implementation===Q.implementation){a(j,V.sibling),me=u(V,Q.children||[]),me.return=j,j=me;break e}else{a(j,V);break}else n(j,V);V=V.sibling}me=Qu(Q,j.mode,me),me.return=j,j=me}return x(j);case K:return Q=Ss(Q),kt(j,V,Q,me)}if(fe(Q))return ke(j,V,Q,me);if(re(Q)){if($e=re(Q),typeof $e!="function")throw Error(r(150));return Q=$e.call(Q),tt(j,V,Q,me)}if(typeof Q.then=="function")return kt(j,V,Xl(Q),me);if(Q.$$typeof===O)return kt(j,V,Hl(j,Q),me);Wl(j,Q)}return typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint"?(Q=""+Q,V!==null&&V.tag===6?(a(j,V.sibling),me=u(V,Q),me.return=j,j=me):(a(j,V),me=Ku(Q,j.mode,me),me.return=j,j=me),x(j)):a(j,V)}return function(j,V,Q,me){try{bo=0;var $e=kt(j,V,Q,me);return rr=null,$e}catch(Ze){if(Ze===sr||Ze===Vl)throw Ze;var Ct=Kn(29,Ze,null,j.mode);return Ct.lanes=me,Ct.return=j,Ct}}}var Ms=qm(!0),jm=qm(!1),La=!1;function uf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function ff(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Oa(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Pa(t,n,a){var o=t.updateQueue;if(o===null)return null;if(o=o.shared,(Lt&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=Fl(t),Dm(t,null,a),n}return Pl(t,o,n,a),Fl(t)}function To(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,ao(t,a)}}function df(t,n){var a=t.updateQueue,o=t.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var u=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var x={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?u=f=x:f=f.next=x,a=a.next}while(a!==null);f===null?u=f=n:f=f.next=n}else u=f=n;a={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:f,shared:o.shared,callbacks:o.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var hf=!1;function Ao(){if(hf){var t=ar;if(t!==null)throw t}}function Ro(t,n,a,o){hf=!1;var u=t.updateQueue;La=!1;var f=u.firstBaseUpdate,x=u.lastBaseUpdate,T=u.shared.pending;if(T!==null){u.shared.pending=null;var B=T,$=B.next;B.next=null,x===null?f=$:x.next=$,x=B;var de=t.alternate;de!==null&&(de=de.updateQueue,T=de.lastBaseUpdate,T!==x&&(T===null?de.firstBaseUpdate=$:T.next=$,de.lastBaseUpdate=B))}if(f!==null){var ge=u.baseState;x=0,de=$=B=null,T=f;do{var te=T.lane&-536870913,le=te!==T.lane;if(le?(St&te)===te:(o&te)===te){te!==0&&te===ir&&(hf=!0),de!==null&&(de=de.next={lane:0,tag:T.tag,payload:T.payload,callback:null,next:null});e:{var ke=t,tt=T;te=n;var kt=a;switch(tt.tag){case 1:if(ke=tt.payload,typeof ke=="function"){ge=ke.call(kt,ge,te);break e}ge=ke;break e;case 3:ke.flags=ke.flags&-65537|128;case 0:if(ke=tt.payload,te=typeof ke=="function"?ke.call(kt,ge,te):ke,te==null)break e;ge=v({},ge,te);break e;case 2:La=!0}}te=T.callback,te!==null&&(t.flags|=64,le&&(t.flags|=8192),le=u.callbacks,le===null?u.callbacks=[te]:le.push(te))}else le={lane:te,tag:T.tag,payload:T.payload,callback:T.callback,next:null},de===null?($=de=le,B=ge):de=de.next=le,x|=te;if(T=T.next,T===null){if(T=u.shared.pending,T===null)break;le=T,T=le.next,le.next=null,u.lastBaseUpdate=le,u.shared.pending=null}}while(!0);de===null&&(B=ge),u.baseState=B,u.firstBaseUpdate=$,u.lastBaseUpdate=de,f===null&&(u.shared.lanes=0),Ha|=x,t.lanes=x,t.memoizedState=ge}}function Ym(t,n){if(typeof t!="function")throw Error(r(191,t));t.call(n)}function Zm(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)Ym(a[t],n)}var or=U(null),ql=U(0);function Km(t,n){t=ua,ve(ql,t),ve(or,n),ua=t|n.baseLanes}function pf(){ve(ql,ua),ve(or,or.current)}function mf(){ua=ql.current,ie(or),ie(ql)}var Qn=U(null),mi=null;function Fa(t){var n=t.alternate;ve(an,an.current&1),ve(Qn,t),mi===null&&(n===null||or.current!==null||n.memoizedState!==null)&&(mi=t)}function gf(t){ve(an,an.current),ve(Qn,t),mi===null&&(mi=t)}function Qm(t){t.tag===22?(ve(an,an.current),ve(Qn,t),mi===null&&(mi=t)):Ia()}function Ia(){ve(an,an.current),ve(Qn,Qn.current)}function $n(t){ie(Qn),mi===t&&(mi=null),ie(an)}var an=U(0);function jl(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Md(a)||bd(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var na=0,lt=null,Gt=null,un=null,Yl=!1,lr=!1,bs=!1,Zl=0,Co=0,cr=null,ny=0;function en(){throw Error(r(321))}function vf(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!Zn(t[a],n[a]))return!1;return!0}function _f(t,n,a,o,u,f){return na=f,lt=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,P.H=t===null||t.memoizedState===null?Og:Lf,bs=!1,f=a(o,u),bs=!1,lr&&(f=Jm(n,a,o,u)),$m(t),f}function $m(t){P.H=Uo;var n=Gt!==null&&Gt.next!==null;if(na=0,un=Gt=lt=null,Yl=!1,Co=0,cr=null,n)throw Error(r(300));t===null||fn||(t=t.dependencies,t!==null&&zl(t)&&(fn=!0))}function Jm(t,n,a,o){lt=t;var u=0;do{if(lr&&(cr=null),Co=0,lr=!1,25<=u)throw Error(r(301));if(u+=1,un=Gt=null,t.updateQueue!=null){var f=t.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}P.H=Pg,f=n(a,o)}while(lr);return f}function iy(){var t=P.H,n=t.useState()[0];return n=typeof n.then=="function"?wo(n):n,t=t.useState()[0],(Gt!==null?Gt.memoizedState:null)!==t&&(lt.flags|=1024),n}function xf(){var t=Zl!==0;return Zl=0,t}function Sf(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function yf(t){if(Yl){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}Yl=!1}na=0,un=Gt=lt=null,lr=!1,Co=Zl=0,cr=null}function Bn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return un===null?lt.memoizedState=un=t:un=un.next=t,un}function sn(){if(Gt===null){var t=lt.alternate;t=t!==null?t.memoizedState:null}else t=Gt.next;var n=un===null?lt.memoizedState:un.next;if(n!==null)un=n,Gt=t;else{if(t===null)throw lt.alternate===null?Error(r(467)):Error(r(310));Gt=t,t={memoizedState:Gt.memoizedState,baseState:Gt.baseState,baseQueue:Gt.baseQueue,queue:Gt.queue,next:null},un===null?lt.memoizedState=un=t:un=un.next=t}return un}function Kl(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function wo(t){var n=Co;return Co+=1,cr===null&&(cr=[]),t=km(cr,t,n),n=lt,(un===null?n.memoizedState:un.next)===null&&(n=n.alternate,P.H=n===null||n.memoizedState===null?Og:Lf),t}function Ql(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return wo(t);if(t.$$typeof===O)return Cn(t)}throw Error(r(438,String(t)))}function Mf(t){var n=null,a=lt.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=lt.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Kl(),lt.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),o=0;o<t;o++)a[o]=w;return n.index++,a}function ia(t,n){return typeof n=="function"?n(t):n}function $l(t){var n=sn();return bf(n,Gt,t)}function bf(t,n,a){var o=t.queue;if(o===null)throw Error(r(311));o.lastRenderedReducer=a;var u=t.baseQueue,f=o.pending;if(f!==null){if(u!==null){var x=u.next;u.next=f.next,f.next=x}n.baseQueue=u=f,o.pending=null}if(f=t.baseState,u===null)t.memoizedState=f;else{n=u.next;var T=x=null,B=null,$=n,de=!1;do{var ge=$.lane&-536870913;if(ge!==$.lane?(St&ge)===ge:(na&ge)===ge){var te=$.revertLane;if(te===0)B!==null&&(B=B.next={lane:0,revertLane:0,gesture:null,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null}),ge===ir&&(de=!0);else if((na&te)===te){$=$.next,te===ir&&(de=!0);continue}else ge={lane:0,revertLane:$.revertLane,gesture:null,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null},B===null?(T=B=ge,x=f):B=B.next=ge,lt.lanes|=te,Ha|=te;ge=$.action,bs&&a(f,ge),f=$.hasEagerState?$.eagerState:a(f,ge)}else te={lane:ge,revertLane:$.revertLane,gesture:$.gesture,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null},B===null?(T=B=te,x=f):B=B.next=te,lt.lanes|=ge,Ha|=ge;$=$.next}while($!==null&&$!==n);if(B===null?x=f:B.next=T,!Zn(f,t.memoizedState)&&(fn=!0,de&&(a=ar,a!==null)))throw a;t.memoizedState=f,t.baseState=x,t.baseQueue=B,o.lastRenderedState=f}return u===null&&(o.lanes=0),[t.memoizedState,o.dispatch]}function Ef(t){var n=sn(),a=n.queue;if(a===null)throw Error(r(311));a.lastRenderedReducer=t;var o=a.dispatch,u=a.pending,f=n.memoizedState;if(u!==null){a.pending=null;var x=u=u.next;do f=t(f,x.action),x=x.next;while(x!==u);Zn(f,n.memoizedState)||(fn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,o]}function eg(t,n,a){var o=lt,u=sn(),f=bt;if(f){if(a===void 0)throw Error(r(407));a=a()}else a=n();var x=!Zn((Gt||u).memoizedState,a);if(x&&(u.memoizedState=a,fn=!0),u=u.queue,Rf(ig.bind(null,o,u,t),[t]),u.getSnapshot!==n||x||un!==null&&un.memoizedState.tag&1){if(o.flags|=2048,ur(9,{destroy:void 0},ng.bind(null,o,u,a,n),null),Xt===null)throw Error(r(349));f||(na&127)!==0||tg(o,n,a)}return a}function tg(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=lt.updateQueue,n===null?(n=Kl(),lt.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function ng(t,n,a,o){n.value=a,n.getSnapshot=o,ag(n)&&sg(t)}function ig(t,n,a){return a(function(){ag(n)&&sg(t)})}function ag(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!Zn(t,a)}catch{return!0}}function sg(t){var n=ps(t,2);n!==null&&Yn(n,t,2)}function Tf(t){var n=Bn();if(typeof t=="function"){var a=t;if(t=a(),bs){Be(!0);try{a()}finally{Be(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ia,lastRenderedState:t},n}function rg(t,n,a,o){return t.baseState=a,bf(t,Gt,typeof o=="function"?o:ia)}function ay(t,n,a,o,u){if(tc(t))throw Error(r(485));if(t=n.action,t!==null){var f={payload:u,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(x){f.listeners.push(x)}};P.T!==null?a(!0):f.isTransition=!1,o(f),a=n.pending,a===null?(f.next=n.pending=f,og(n,f)):(f.next=a.next,n.pending=a.next=f)}}function og(t,n){var a=n.action,o=n.payload,u=t.state;if(n.isTransition){var f=P.T,x={};P.T=x;try{var T=a(u,o),B=P.S;B!==null&&B(x,T),lg(t,n,T)}catch($){Af(t,n,$)}finally{f!==null&&x.types!==null&&(f.types=x.types),P.T=f}}else try{f=a(u,o),lg(t,n,f)}catch($){Af(t,n,$)}}function lg(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){cg(t,n,o)},function(o){return Af(t,n,o)}):cg(t,n,a)}function cg(t,n,a){n.status="fulfilled",n.value=a,ug(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,og(t,a)))}function Af(t,n,a){var o=t.pending;if(t.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,ug(n),n=n.next;while(n!==o)}t.action=null}function ug(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function fg(t,n){return n}function dg(t,n){if(bt){var a=Xt.formState;if(a!==null){e:{var o=lt;if(bt){if(jt){t:{for(var u=jt,f=pi;u.nodeType!==8;){if(!f){u=null;break t}if(u=gi(u.nextSibling),u===null){u=null;break t}}f=u.data,u=f==="F!"||f==="F"?u:null}if(u){jt=gi(u.nextSibling),o=u.data==="F!";break e}}Ua(o)}o=!1}o&&(n=a[0])}}return a=Bn(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:fg,lastRenderedState:n},a.queue=o,a=Ug.bind(null,lt,o),o.dispatch=a,o=Tf(!1),f=Nf.bind(null,lt,!1,o.queue),o=Bn(),u={state:n,dispatch:null,action:t,pending:null},o.queue=u,a=ay.bind(null,lt,u,f,a),u.dispatch=a,o.memoizedState=t,[n,a,!1]}function hg(t){var n=sn();return pg(n,Gt,t)}function pg(t,n,a){if(n=bf(t,n,fg)[0],t=$l(ia)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=wo(n)}catch(x){throw x===sr?Vl:x}else o=n;n=sn();var u=n.queue,f=u.dispatch;return a!==n.memoizedState&&(lt.flags|=2048,ur(9,{destroy:void 0},sy.bind(null,u,a),null)),[o,f,t]}function sy(t,n){t.action=n}function mg(t){var n=sn(),a=Gt;if(a!==null)return pg(n,a,t);sn(),n=n.memoizedState,a=sn();var o=a.queue.dispatch;return a.memoizedState=t,[n,o,!1]}function ur(t,n,a,o){return t={tag:t,create:a,deps:o,inst:n,next:null},n=lt.updateQueue,n===null&&(n=Kl(),lt.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(o=a.next,a.next=t,t.next=o,n.lastEffect=t),t}function gg(){return sn().memoizedState}function Jl(t,n,a,o){var u=Bn();lt.flags|=t,u.memoizedState=ur(1|n,{destroy:void 0},a,o===void 0?null:o)}function ec(t,n,a,o){var u=sn();o=o===void 0?null:o;var f=u.memoizedState.inst;Gt!==null&&o!==null&&vf(o,Gt.memoizedState.deps)?u.memoizedState=ur(n,f,a,o):(lt.flags|=t,u.memoizedState=ur(1|n,f,a,o))}function vg(t,n){Jl(8390656,8,t,n)}function Rf(t,n){ec(2048,8,t,n)}function ry(t){lt.flags|=4;var n=lt.updateQueue;if(n===null)n=Kl(),lt.updateQueue=n,n.events=[t];else{var a=n.events;a===null?n.events=[t]:a.push(t)}}function _g(t){var n=sn().memoizedState;return ry({ref:n,nextImpl:t}),function(){if((Lt&2)!==0)throw Error(r(440));return n.impl.apply(void 0,arguments)}}function xg(t,n){return ec(4,2,t,n)}function Sg(t,n){return ec(4,4,t,n)}function yg(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function Mg(t,n,a){a=a!=null?a.concat([t]):null,ec(4,4,yg.bind(null,n,t),a)}function Cf(){}function bg(t,n){var a=sn();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&vf(n,o[1])?o[0]:(a.memoizedState=[t,n],t)}function Eg(t,n){var a=sn();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&vf(n,o[1]))return o[0];if(o=t(),bs){Be(!0);try{t()}finally{Be(!1)}}return a.memoizedState=[o,n],o}function wf(t,n,a){return a===void 0||(na&1073741824)!==0&&(St&261930)===0?t.memoizedState=n:(t.memoizedState=a,t=T0(),lt.lanes|=t,Ha|=t,a)}function Tg(t,n,a,o){return Zn(a,n)?a:or.current!==null?(t=wf(t,a,o),Zn(t,n)||(fn=!0),t):(na&42)===0||(na&1073741824)!==0&&(St&261930)===0?(fn=!0,t.memoizedState=a):(t=T0(),lt.lanes|=t,Ha|=t,n)}function Ag(t,n,a,o,u){var f=H.p;H.p=f!==0&&8>f?f:8;var x=P.T,T={};P.T=T,Nf(t,!1,n,a);try{var B=u(),$=P.S;if($!==null&&$(T,B),B!==null&&typeof B=="object"&&typeof B.then=="function"){var de=ty(B,o);Do(t,n,de,ti(t))}else Do(t,n,o,ti(t))}catch(ge){Do(t,n,{then:function(){},status:"rejected",reason:ge},ti())}finally{H.p=f,x!==null&&T.types!==null&&(x.types=T.types),P.T=x}}function oy(){}function Df(t,n,a,o){if(t.tag!==5)throw Error(r(476));var u=Rg(t).queue;Ag(t,u,n,ae,a===null?oy:function(){return Cg(t),a(o)})}function Rg(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:ae,baseState:ae,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ia,lastRenderedState:ae},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:ia,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function Cg(t){var n=Rg(t);n.next===null&&(n=t.alternate.memoizedState),Do(t,n.next.queue,{},ti())}function Uf(){return Cn(jo)}function wg(){return sn().memoizedState}function Dg(){return sn().memoizedState}function ly(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=ti();t=Oa(a);var o=Pa(n,t,a);o!==null&&(Yn(o,n,a),To(o,n,a)),n={cache:rf()},t.payload=n;return}n=n.return}}function cy(t,n,a){var o=ti();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},tc(t)?Ng(n,a):(a=Yu(t,n,a,o),a!==null&&(Yn(a,t,o),Lg(a,n,o)))}function Ug(t,n,a){var o=ti();Do(t,n,a,o)}function Do(t,n,a,o){var u={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(tc(t))Ng(n,u);else{var f=t.alternate;if(t.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var x=n.lastRenderedState,T=f(x,a);if(u.hasEagerState=!0,u.eagerState=T,Zn(T,x))return Pl(t,n,u,0),Xt===null&&Ol(),!1}catch{}if(a=Yu(t,n,u,o),a!==null)return Yn(a,t,o),Lg(a,n,o),!0}return!1}function Nf(t,n,a,o){if(o={lane:2,revertLane:ud(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},tc(t)){if(n)throw Error(r(479))}else n=Yu(t,a,o,2),n!==null&&Yn(n,t,2)}function tc(t){var n=t.alternate;return t===lt||n!==null&&n===lt}function Ng(t,n){lr=Yl=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function Lg(t,n,a){if((a&4194048)!==0){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,ao(t,a)}}var Uo={readContext:Cn,use:Ql,useCallback:en,useContext:en,useEffect:en,useImperativeHandle:en,useLayoutEffect:en,useInsertionEffect:en,useMemo:en,useReducer:en,useRef:en,useState:en,useDebugValue:en,useDeferredValue:en,useTransition:en,useSyncExternalStore:en,useId:en,useHostTransitionStatus:en,useFormState:en,useActionState:en,useOptimistic:en,useMemoCache:en,useCacheRefresh:en};Uo.useEffectEvent=en;var Og={readContext:Cn,use:Ql,useCallback:function(t,n){return Bn().memoizedState=[t,n===void 0?null:n],t},useContext:Cn,useEffect:vg,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,Jl(4194308,4,yg.bind(null,n,t),a)},useLayoutEffect:function(t,n){return Jl(4194308,4,t,n)},useInsertionEffect:function(t,n){Jl(4,2,t,n)},useMemo:function(t,n){var a=Bn();n=n===void 0?null:n;var o=t();if(bs){Be(!0);try{t()}finally{Be(!1)}}return a.memoizedState=[o,n],o},useReducer:function(t,n,a){var o=Bn();if(a!==void 0){var u=a(n);if(bs){Be(!0);try{a(n)}finally{Be(!1)}}}else u=n;return o.memoizedState=o.baseState=u,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:u},o.queue=t,t=t.dispatch=cy.bind(null,lt,t),[o.memoizedState,t]},useRef:function(t){var n=Bn();return t={current:t},n.memoizedState=t},useState:function(t){t=Tf(t);var n=t.queue,a=Ug.bind(null,lt,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:Cf,useDeferredValue:function(t,n){var a=Bn();return wf(a,t,n)},useTransition:function(){var t=Tf(!1);return t=Ag.bind(null,lt,t.queue,!0,!1),Bn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var o=lt,u=Bn();if(bt){if(a===void 0)throw Error(r(407));a=a()}else{if(a=n(),Xt===null)throw Error(r(349));(St&127)!==0||tg(o,n,a)}u.memoizedState=a;var f={value:a,getSnapshot:n};return u.queue=f,vg(ig.bind(null,o,f,t),[t]),o.flags|=2048,ur(9,{destroy:void 0},ng.bind(null,o,f,a,n),null),a},useId:function(){var t=Bn(),n=Xt.identifierPrefix;if(bt){var a=Ii,o=Fi;a=(o&~(1<<32-Fe(o)-1)).toString(32)+a,n="_"+n+"R_"+a,a=Zl++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=ny++,n="_"+n+"r_"+a.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:Uf,useFormState:dg,useActionState:dg,useOptimistic:function(t){var n=Bn();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Nf.bind(null,lt,!0,a),a.dispatch=n,[t,n]},useMemoCache:Mf,useCacheRefresh:function(){return Bn().memoizedState=ly.bind(null,lt)},useEffectEvent:function(t){var n=Bn(),a={impl:t};return n.memoizedState=a,function(){if((Lt&2)!==0)throw Error(r(440));return a.impl.apply(void 0,arguments)}}},Lf={readContext:Cn,use:Ql,useCallback:bg,useContext:Cn,useEffect:Rf,useImperativeHandle:Mg,useInsertionEffect:xg,useLayoutEffect:Sg,useMemo:Eg,useReducer:$l,useRef:gg,useState:function(){return $l(ia)},useDebugValue:Cf,useDeferredValue:function(t,n){var a=sn();return Tg(a,Gt.memoizedState,t,n)},useTransition:function(){var t=$l(ia)[0],n=sn().memoizedState;return[typeof t=="boolean"?t:wo(t),n]},useSyncExternalStore:eg,useId:wg,useHostTransitionStatus:Uf,useFormState:hg,useActionState:hg,useOptimistic:function(t,n){var a=sn();return rg(a,Gt,t,n)},useMemoCache:Mf,useCacheRefresh:Dg};Lf.useEffectEvent=_g;var Pg={readContext:Cn,use:Ql,useCallback:bg,useContext:Cn,useEffect:Rf,useImperativeHandle:Mg,useInsertionEffect:xg,useLayoutEffect:Sg,useMemo:Eg,useReducer:Ef,useRef:gg,useState:function(){return Ef(ia)},useDebugValue:Cf,useDeferredValue:function(t,n){var a=sn();return Gt===null?wf(a,t,n):Tg(a,Gt.memoizedState,t,n)},useTransition:function(){var t=Ef(ia)[0],n=sn().memoizedState;return[typeof t=="boolean"?t:wo(t),n]},useSyncExternalStore:eg,useId:wg,useHostTransitionStatus:Uf,useFormState:mg,useActionState:mg,useOptimistic:function(t,n){var a=sn();return Gt!==null?rg(a,Gt,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:Mf,useCacheRefresh:Dg};Pg.useEffectEvent=_g;function Of(t,n,a,o){n=t.memoizedState,a=a(o,n),a=a==null?n:v({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var Pf={enqueueSetState:function(t,n,a){t=t._reactInternals;var o=ti(),u=Oa(o);u.payload=n,a!=null&&(u.callback=a),n=Pa(t,u,o),n!==null&&(Yn(n,t,o),To(n,t,o))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var o=ti(),u=Oa(o);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=Pa(t,u,o),n!==null&&(Yn(n,t,o),To(n,t,o))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=ti(),o=Oa(a);o.tag=2,n!=null&&(o.callback=n),n=Pa(t,o,a),n!==null&&(Yn(n,t,a),To(n,t,a))}};function Fg(t,n,a,o,u,f,x){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(o,f,x):n.prototype&&n.prototype.isPureReactComponent?!vo(a,o)||!vo(u,f):!0}function Ig(t,n,a,o){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==t&&Pf.enqueueReplaceState(n,n.state,null)}function Es(t,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(t=t.defaultProps){a===n&&(a=v({},a));for(var u in t)a[u]===void 0&&(a[u]=t[u])}return a}function Bg(t){Ll(t)}function zg(t){console.error(t)}function Hg(t){Ll(t)}function nc(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function Gg(t,n,a){try{var o=t.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function Ff(t,n,a){return a=Oa(a),a.tag=3,a.payload={element:null},a.callback=function(){nc(t,n)},a}function Vg(t){return t=Oa(t),t.tag=3,t}function kg(t,n,a,o){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var f=o.value;t.payload=function(){return u(f)},t.callback=function(){Gg(n,a,o)}}var x=a.stateNode;x!==null&&typeof x.componentDidCatch=="function"&&(t.callback=function(){Gg(n,a,o),typeof u!="function"&&(Ga===null?Ga=new Set([this]):Ga.add(this));var T=o.stack;this.componentDidCatch(o.value,{componentStack:T!==null?T:""})})}function uy(t,n,a,o,u){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&nr(n,a,u,!0),a=Qn.current,a!==null){switch(a.tag){case 31:case 13:return mi===null?pc():a.alternate===null&&tn===0&&(tn=3),a.flags&=-257,a.flags|=65536,a.lanes=u,o===kl?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),od(t,o,u)),!1;case 22:return a.flags|=65536,o===kl?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),od(t,o,u)),!1}throw Error(r(435,a.tag))}return od(t,o,u),pc(),!1}if(bt)return n=Qn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==ef&&(t=Error(r(422),{cause:o}),So(fi(t,a)))):(o!==ef&&(n=Error(r(423),{cause:o}),So(fi(n,a))),t=t.current.alternate,t.flags|=65536,u&=-u,t.lanes|=u,o=fi(o,a),u=Ff(t.stateNode,o,u),df(t,u),tn!==4&&(tn=2)),!1;var f=Error(r(520),{cause:o});if(f=fi(f,a),zo===null?zo=[f]:zo.push(f),tn!==4&&(tn=2),n===null)return!0;o=fi(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=u&-u,a.lanes|=t,t=Ff(a.stateNode,o,t),df(a,t),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Ga===null||!Ga.has(f))))return a.flags|=65536,u&=-u,a.lanes|=u,u=Vg(u),kg(u,t,a,o),df(a,u),!1}a=a.return}while(a!==null);return!1}var If=Error(r(461)),fn=!1;function wn(t,n,a,o){n.child=t===null?jm(n,null,a,o):Ms(n,t.child,a,o)}function Xg(t,n,a,o,u){a=a.render;var f=n.ref;if("ref"in o){var x={};for(var T in o)T!=="ref"&&(x[T]=o[T])}else x=o;return _s(n),o=_f(t,n,a,x,f,u),T=xf(),t!==null&&!fn?(Sf(t,n,u),aa(t,n,u)):(bt&&T&&$u(n),n.flags|=1,wn(t,n,o,u),n.child)}function Wg(t,n,a,o,u){if(t===null){var f=a.type;return typeof f=="function"&&!Zu(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,qg(t,n,f,o,u)):(t=Il(a.type,null,o,n,n.mode,u),t.ref=n.ref,t.return=n,n.child=t)}if(f=t.child,!Wf(t,u)){var x=f.memoizedProps;if(a=a.compare,a=a!==null?a:vo,a(x,o)&&t.ref===n.ref)return aa(t,n,u)}return n.flags|=1,t=$i(f,o),t.ref=n.ref,t.return=n,n.child=t}function qg(t,n,a,o,u){if(t!==null){var f=t.memoizedProps;if(vo(f,o)&&t.ref===n.ref)if(fn=!1,n.pendingProps=o=f,Wf(t,u))(t.flags&131072)!==0&&(fn=!0);else return n.lanes=t.lanes,aa(t,n,u)}return Bf(t,n,a,o,u)}function jg(t,n,a,o){var u=o.children,f=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,t!==null){for(o=n.child=t.child,u=0;o!==null;)u=u|o.lanes|o.childLanes,o=o.sibling;o=u&~f}else o=0,n.child=null;return Yg(t,n,f,a,o)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&Gl(n,f!==null?f.cachePool:null),f!==null?Km(n,f):pf(),Qm(n);else return o=n.lanes=536870912,Yg(t,n,f!==null?f.baseLanes|a:a,a,o)}else f!==null?(Gl(n,f.cachePool),Km(n,f),Ia(),n.memoizedState=null):(t!==null&&Gl(n,null),pf(),Ia());return wn(t,n,u,a),n.child}function No(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function Yg(t,n,a,o,u){var f=lf();return f=f===null?null:{parent:cn._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},t!==null&&Gl(n,null),pf(),Qm(n),t!==null&&nr(t,n,o,!0),n.childLanes=u,null}function ic(t,n){return n=sc({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function Zg(t,n,a){return Ms(n,t.child,null,a),t=ic(n,n.pendingProps),t.flags|=2,$n(n),n.memoizedState=null,t}function fy(t,n,a){var o=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(bt){if(o.mode==="hidden")return t=ic(n,o),n.lanes=536870912,No(null,t);if(gf(n),(t=jt)?(t=ov(t,pi),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:wa!==null?{id:Fi,overflow:Ii}:null,retryLane:536870912,hydrationErrors:null},a=Nm(t),a.return=n,n.child=a,Rn=n,jt=null)):t=null,t===null)throw Ua(n);return n.lanes=536870912,null}return ic(n,o)}var f=t.memoizedState;if(f!==null){var x=f.dehydrated;if(gf(n),u)if(n.flags&256)n.flags&=-257,n=Zg(t,n,a);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(r(558));else if(fn||nr(t,n,a,!1),u=(a&t.childLanes)!==0,fn||u){if(o=Xt,o!==null&&(x=Gs(o,a),x!==0&&x!==f.retryLane))throw f.retryLane=x,ps(t,x),Yn(o,t,x),If;pc(),n=Zg(t,n,a)}else t=f.treeContext,jt=gi(x.nextSibling),Rn=n,bt=!0,Da=null,pi=!1,t!==null&&Pm(n,t),n=ic(n,o),n.flags|=4096;return n}return t=$i(t.child,{mode:o.mode,children:o.children}),t.ref=n.ref,n.child=t,t.return=n,t}function ac(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(r(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function Bf(t,n,a,o,u){return _s(n),a=_f(t,n,a,o,void 0,u),o=xf(),t!==null&&!fn?(Sf(t,n,u),aa(t,n,u)):(bt&&o&&$u(n),n.flags|=1,wn(t,n,a,u),n.child)}function Kg(t,n,a,o,u,f){return _s(n),n.updateQueue=null,a=Jm(n,o,a,u),$m(t),o=xf(),t!==null&&!fn?(Sf(t,n,f),aa(t,n,f)):(bt&&o&&$u(n),n.flags|=1,wn(t,n,a,f),n.child)}function Qg(t,n,a,o,u){if(_s(n),n.stateNode===null){var f=$s,x=a.contextType;typeof x=="object"&&x!==null&&(f=Cn(x)),f=new a(o,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=Pf,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=o,f.state=n.memoizedState,f.refs={},uf(n),x=a.contextType,f.context=typeof x=="object"&&x!==null?Cn(x):$s,f.state=n.memoizedState,x=a.getDerivedStateFromProps,typeof x=="function"&&(Of(n,a,x,o),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(x=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),x!==f.state&&Pf.enqueueReplaceState(f,f.state,null),Ro(n,o,f,u),Ao(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(t===null){f=n.stateNode;var T=n.memoizedProps,B=Es(a,T);f.props=B;var $=f.context,de=a.contextType;x=$s,typeof de=="object"&&de!==null&&(x=Cn(de));var ge=a.getDerivedStateFromProps;de=typeof ge=="function"||typeof f.getSnapshotBeforeUpdate=="function",T=n.pendingProps!==T,de||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(T||$!==x)&&Ig(n,f,o,x),La=!1;var te=n.memoizedState;f.state=te,Ro(n,o,f,u),Ao(),$=n.memoizedState,T||te!==$||La?(typeof ge=="function"&&(Of(n,a,ge,o),$=n.memoizedState),(B=La||Fg(n,a,B,o,te,$,x))?(de||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=$),f.props=o,f.state=$,f.context=x,o=B):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{f=n.stateNode,ff(t,n),x=n.memoizedProps,de=Es(a,x),f.props=de,ge=n.pendingProps,te=f.context,$=a.contextType,B=$s,typeof $=="object"&&$!==null&&(B=Cn($)),T=a.getDerivedStateFromProps,($=typeof T=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(x!==ge||te!==B)&&Ig(n,f,o,B),La=!1,te=n.memoizedState,f.state=te,Ro(n,o,f,u),Ao();var le=n.memoizedState;x!==ge||te!==le||La||t!==null&&t.dependencies!==null&&zl(t.dependencies)?(typeof T=="function"&&(Of(n,a,T,o),le=n.memoizedState),(de=La||Fg(n,a,de,o,te,le,B)||t!==null&&t.dependencies!==null&&zl(t.dependencies))?($||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(o,le,B),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(o,le,B)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||x===t.memoizedProps&&te===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||x===t.memoizedProps&&te===t.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=le),f.props=o,f.state=le,f.context=B,o=de):(typeof f.componentDidUpdate!="function"||x===t.memoizedProps&&te===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||x===t.memoizedProps&&te===t.memoizedState||(n.flags|=1024),o=!1)}return f=o,ac(t,n),o=(n.flags&128)!==0,f||o?(f=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,t!==null&&o?(n.child=Ms(n,t.child,null,u),n.child=Ms(n,null,a,u)):wn(t,n,a,u),n.memoizedState=f.state,t=n.child):t=aa(t,n,u),t}function $g(t,n,a,o){return gs(),n.flags|=256,wn(t,n,a,o),n.child}var zf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Hf(t){return{baseLanes:t,cachePool:Gm()}}function Gf(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=ei),t}function Jg(t,n,a){var o=n.pendingProps,u=!1,f=(n.flags&128)!==0,x;if((x=f)||(x=t!==null&&t.memoizedState===null?!1:(an.current&2)!==0),x&&(u=!0,n.flags&=-129),x=(n.flags&32)!==0,n.flags&=-33,t===null){if(bt){if(u?Fa(n):Ia(),(t=jt)?(t=ov(t,pi),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:wa!==null?{id:Fi,overflow:Ii}:null,retryLane:536870912,hydrationErrors:null},a=Nm(t),a.return=n,n.child=a,Rn=n,jt=null)):t=null,t===null)throw Ua(n);return bd(t)?n.lanes=32:n.lanes=536870912,null}var T=o.children;return o=o.fallback,u?(Ia(),u=n.mode,T=sc({mode:"hidden",children:T},u),o=ms(o,u,a,null),T.return=n,o.return=n,T.sibling=o,n.child=T,o=n.child,o.memoizedState=Hf(a),o.childLanes=Gf(t,x,a),n.memoizedState=zf,No(null,o)):(Fa(n),Vf(n,T))}var B=t.memoizedState;if(B!==null&&(T=B.dehydrated,T!==null)){if(f)n.flags&256?(Fa(n),n.flags&=-257,n=kf(t,n,a)):n.memoizedState!==null?(Ia(),n.child=t.child,n.flags|=128,n=null):(Ia(),T=o.fallback,u=n.mode,o=sc({mode:"visible",children:o.children},u),T=ms(T,u,a,null),T.flags|=2,o.return=n,T.return=n,o.sibling=T,n.child=o,Ms(n,t.child,null,a),o=n.child,o.memoizedState=Hf(a),o.childLanes=Gf(t,x,a),n.memoizedState=zf,n=No(null,o));else if(Fa(n),bd(T)){if(x=T.nextSibling&&T.nextSibling.dataset,x)var $=x.dgst;x=$,o=Error(r(419)),o.stack="",o.digest=x,So({value:o,source:null,stack:null}),n=kf(t,n,a)}else if(fn||nr(t,n,a,!1),x=(a&t.childLanes)!==0,fn||x){if(x=Xt,x!==null&&(o=Gs(x,a),o!==0&&o!==B.retryLane))throw B.retryLane=o,ps(t,o),Yn(x,t,o),If;Md(T)||pc(),n=kf(t,n,a)}else Md(T)?(n.flags|=192,n.child=t.child,n=null):(t=B.treeContext,jt=gi(T.nextSibling),Rn=n,bt=!0,Da=null,pi=!1,t!==null&&Pm(n,t),n=Vf(n,o.children),n.flags|=4096);return n}return u?(Ia(),T=o.fallback,u=n.mode,B=t.child,$=B.sibling,o=$i(B,{mode:"hidden",children:o.children}),o.subtreeFlags=B.subtreeFlags&65011712,$!==null?T=$i($,T):(T=ms(T,u,a,null),T.flags|=2),T.return=n,o.return=n,o.sibling=T,n.child=o,No(null,o),o=n.child,T=t.child.memoizedState,T===null?T=Hf(a):(u=T.cachePool,u!==null?(B=cn._currentValue,u=u.parent!==B?{parent:B,pool:B}:u):u=Gm(),T={baseLanes:T.baseLanes|a,cachePool:u}),o.memoizedState=T,o.childLanes=Gf(t,x,a),n.memoizedState=zf,No(t.child,o)):(Fa(n),a=t.child,t=a.sibling,a=$i(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,t!==null&&(x=n.deletions,x===null?(n.deletions=[t],n.flags|=16):x.push(t)),n.child=a,n.memoizedState=null,a)}function Vf(t,n){return n=sc({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function sc(t,n){return t=Kn(22,t,null,n),t.lanes=0,t}function kf(t,n,a){return Ms(n,t.child,null,a),t=Vf(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function e0(t,n,a){t.lanes|=n;var o=t.alternate;o!==null&&(o.lanes|=n),af(t.return,n,a)}function Xf(t,n,a,o,u,f){var x=t.memoizedState;x===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:u,treeForkCount:f}:(x.isBackwards=n,x.rendering=null,x.renderingStartTime=0,x.last=o,x.tail=a,x.tailMode=u,x.treeForkCount=f)}function t0(t,n,a){var o=n.pendingProps,u=o.revealOrder,f=o.tail;o=o.children;var x=an.current,T=(x&2)!==0;if(T?(x=x&1|2,n.flags|=128):x&=1,ve(an,x),wn(t,n,o,a),o=bt?xo:0,!T&&t!==null&&(t.flags&128)!==0)e:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&e0(t,a,n);else if(t.tag===19)e0(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break e;for(;t.sibling===null;){if(t.return===null||t.return===n)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)t=a.alternate,t!==null&&jl(t)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),Xf(n,!1,u,a,f,o);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(t=u.alternate,t!==null&&jl(t)===null){n.child=u;break}t=u.sibling,u.sibling=a,a=u,u=t}Xf(n,!0,a,null,f,o);break;case"together":Xf(n,!1,null,null,void 0,o);break;default:n.memoizedState=null}return n.child}function aa(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),Ha|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(nr(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(r(153));if(n.child!==null){for(t=n.child,a=$i(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=$i(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function Wf(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&zl(t)))}function dy(t,n,a){switch(n.tag){case 3:Ue(n,n.stateNode.containerInfo),Na(n,cn,t.memoizedState.cache),gs();break;case 27:case 5:Ge(n);break;case 4:Ue(n,n.stateNode.containerInfo);break;case 10:Na(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,gf(n),null;break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(Fa(n),n.flags|=128,null):(a&n.child.childLanes)!==0?Jg(t,n,a):(Fa(n),t=aa(t,n,a),t!==null?t.sibling:null);Fa(n);break;case 19:var u=(t.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(nr(t,n,a,!1),o=(a&n.childLanes)!==0),u){if(o)return t0(t,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),ve(an,an.current),o)break;return null;case 22:return n.lanes=0,jg(t,n,a,n.pendingProps);case 24:Na(n,cn,t.memoizedState.cache)}return aa(t,n,a)}function n0(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)fn=!0;else{if(!Wf(t,a)&&(n.flags&128)===0)return fn=!1,dy(t,n,a);fn=(t.flags&131072)!==0}else fn=!1,bt&&(n.flags&1048576)!==0&&Om(n,xo,n.index);switch(n.lanes=0,n.tag){case 16:e:{var o=n.pendingProps;if(t=Ss(n.elementType),n.type=t,typeof t=="function")Zu(t)?(o=Es(t,o),n.tag=1,n=Qg(null,n,t,o,a)):(n.tag=0,n=Bf(null,n,t,o,a));else{if(t!=null){var u=t.$$typeof;if(u===L){n.tag=11,n=Xg(null,n,t,o,a);break e}else if(u===F){n.tag=14,n=Wg(null,n,t,o,a);break e}}throw n=pe(t)||t,Error(r(306,n,""))}}return n;case 0:return Bf(t,n,n.type,n.pendingProps,a);case 1:return o=n.type,u=Es(o,n.pendingProps),Qg(t,n,o,u,a);case 3:e:{if(Ue(n,n.stateNode.containerInfo),t===null)throw Error(r(387));o=n.pendingProps;var f=n.memoizedState;u=f.element,ff(t,n),Ro(n,o,null,a);var x=n.memoizedState;if(o=x.cache,Na(n,cn,o),o!==f.cache&&sf(n,[cn],a,!0),Ao(),o=x.element,f.isDehydrated)if(f={element:o,isDehydrated:!1,cache:x.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=$g(t,n,o,a);break e}else if(o!==u){u=fi(Error(r(424)),n),So(u),n=$g(t,n,o,a);break e}else for(t=n.stateNode.containerInfo,t.nodeType===9?t=t.body:t=t.nodeName==="HTML"?t.ownerDocument.body:t,jt=gi(t.firstChild),Rn=n,bt=!0,Da=null,pi=!0,a=jm(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(gs(),o===u){n=aa(t,n,a);break e}wn(t,n,o,a)}n=n.child}return n;case 26:return ac(t,n),t===null?(a=hv(n.type,null,n.pendingProps,null))?n.memoizedState=a:bt||(a=n.type,t=n.pendingProps,o=yc(ne.current).createElement(a),o[ln]=n,o[yn]=t,Dn(o,a,t),A(o),n.stateNode=o):n.memoizedState=hv(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return Ge(n),t===null&&bt&&(o=n.stateNode=uv(n.type,n.pendingProps,ne.current),Rn=n,pi=!0,u=jt,Wa(n.type)?(Ed=u,jt=gi(o.firstChild)):jt=u),wn(t,n,n.pendingProps.children,a),ac(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&bt&&((u=o=jt)&&(o=Vy(o,n.type,n.pendingProps,pi),o!==null?(n.stateNode=o,Rn=n,jt=gi(o.firstChild),pi=!1,u=!0):u=!1),u||Ua(n)),Ge(n),u=n.type,f=n.pendingProps,x=t!==null?t.memoizedProps:null,o=f.children,xd(u,f)?o=null:x!==null&&xd(u,x)&&(n.flags|=32),n.memoizedState!==null&&(u=_f(t,n,iy,null,null,a),jo._currentValue=u),ac(t,n),wn(t,n,o,a),n.child;case 6:return t===null&&bt&&((t=a=jt)&&(a=ky(a,n.pendingProps,pi),a!==null?(n.stateNode=a,Rn=n,jt=null,t=!0):t=!1),t||Ua(n)),null;case 13:return Jg(t,n,a);case 4:return Ue(n,n.stateNode.containerInfo),o=n.pendingProps,t===null?n.child=Ms(n,null,o,a):wn(t,n,o,a),n.child;case 11:return Xg(t,n,n.type,n.pendingProps,a);case 7:return wn(t,n,n.pendingProps,a),n.child;case 8:return wn(t,n,n.pendingProps.children,a),n.child;case 12:return wn(t,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,Na(n,n.type,o.value),wn(t,n,o.children,a),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,_s(n),u=Cn(u),o=o(u),n.flags|=1,wn(t,n,o,a),n.child;case 14:return Wg(t,n,n.type,n.pendingProps,a);case 15:return qg(t,n,n.type,n.pendingProps,a);case 19:return t0(t,n,a);case 31:return fy(t,n,a);case 22:return jg(t,n,a,n.pendingProps);case 24:return _s(n),o=Cn(cn),t===null?(u=lf(),u===null&&(u=Xt,f=rf(),u.pooledCache=f,f.refCount++,f!==null&&(u.pooledCacheLanes|=a),u=f),n.memoizedState={parent:o,cache:u},uf(n),Na(n,cn,u)):((t.lanes&a)!==0&&(ff(t,n),Ro(n,null,null,a),Ao()),u=t.memoizedState,f=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),Na(n,cn,o)):(o=f.cache,Na(n,cn,o),o!==u.cache&&sf(n,[cn],a,!0))),wn(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(r(156,n.tag))}function sa(t){t.flags|=4}function qf(t,n,a,o,u){if((n=(t.mode&32)!==0)&&(n=!1),n){if(t.flags|=16777216,(u&335544128)===u)if(t.stateNode.complete)t.flags|=8192;else if(w0())t.flags|=8192;else throw ys=kl,cf}else t.flags&=-16777217}function i0(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!_v(n))if(w0())t.flags|=8192;else throw ys=kl,cf}function rc(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?Ft():536870912,t.lanes|=n,pr|=n)}function Lo(t,n){if(!bt)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:o.sibling=null}}function Yt(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,o=0;if(n)for(var u=t.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=o,t.childLanes=a,n}function hy(t,n,a){var o=n.pendingProps;switch(Ju(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Yt(n),null;case 1:return Yt(n),null;case 3:return a=n.stateNode,o=null,t!==null&&(o=t.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),ta(cn),Xe(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(tr(n)?sa(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,tf())),Yt(n),null;case 26:var u=n.type,f=n.memoizedState;return t===null?(sa(n),f!==null?(Yt(n),i0(n,f)):(Yt(n),qf(n,u,null,o,a))):f?f!==t.memoizedState?(sa(n),Yt(n),i0(n,f)):(Yt(n),n.flags&=-16777217):(t=t.memoizedProps,t!==o&&sa(n),Yt(n),qf(n,u,t,o,a)),null;case 27:if(pt(n),a=ne.current,u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&sa(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return Yt(n),null}t=Re.current,tr(n)?Fm(n):(t=uv(u,o,a),n.stateNode=t,sa(n))}return Yt(n),null;case 5:if(pt(n),u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&sa(n);else{if(!o){if(n.stateNode===null)throw Error(r(166));return Yt(n),null}if(f=Re.current,tr(n))Fm(n);else{var x=yc(ne.current);switch(f){case 1:f=x.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:f=x.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":f=x.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":f=x.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":f=x.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof o.is=="string"?x.createElement("select",{is:o.is}):x.createElement("select"),o.multiple?f.multiple=!0:o.size&&(f.size=o.size);break;default:f=typeof o.is=="string"?x.createElement(u,{is:o.is}):x.createElement(u)}}f[ln]=n,f[yn]=o;e:for(x=n.child;x!==null;){if(x.tag===5||x.tag===6)f.appendChild(x.stateNode);else if(x.tag!==4&&x.tag!==27&&x.child!==null){x.child.return=x,x=x.child;continue}if(x===n)break e;for(;x.sibling===null;){if(x.return===null||x.return===n)break e;x=x.return}x.sibling.return=x.return,x=x.sibling}n.stateNode=f;e:switch(Dn(f,u,o),u){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}o&&sa(n)}}return Yt(n),qf(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,a),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==o&&sa(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(r(166));if(t=ne.current,tr(n)){if(t=n.stateNode,a=n.memoizedProps,o=null,u=Rn,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}t[ln]=n,t=!!(t.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||J0(t.nodeValue,a)),t||Ua(n,!0)}else t=yc(t).createTextNode(o),t[ln]=n,n.stateNode=t}return Yt(n),null;case 31:if(a=n.memoizedState,t===null||t.memoizedState!==null){if(o=tr(n),a!==null){if(t===null){if(!o)throw Error(r(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(r(557));t[ln]=n}else gs(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Yt(n),t=!1}else a=tf(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return n.flags&256?($n(n),n):($n(n),null);if((n.flags&128)!==0)throw Error(r(558))}return Yt(n),null;case 13:if(o=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(u=tr(n),o!==null&&o.dehydrated!==null){if(t===null){if(!u)throw Error(r(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(r(317));u[ln]=n}else gs(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Yt(n),u=!1}else u=tf(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?($n(n),n):($n(n),null)}return $n(n),(n.flags&128)!==0?(n.lanes=a,n):(a=o!==null,t=t!==null&&t.memoizedState!==null,a&&(o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool),f=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(f=o.memoizedState.cachePool.pool),f!==u&&(o.flags|=2048)),a!==t&&a&&(n.child.flags|=8192),rc(n,n.updateQueue),Yt(n),null);case 4:return Xe(),t===null&&pd(n.stateNode.containerInfo),Yt(n),null;case 10:return ta(n.type),Yt(n),null;case 19:if(ie(an),o=n.memoizedState,o===null)return Yt(n),null;if(u=(n.flags&128)!==0,f=o.rendering,f===null)if(u)Lo(o,!1);else{if(tn!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(f=jl(t),f!==null){for(n.flags|=128,Lo(o,!1),t=f.updateQueue,n.updateQueue=t,rc(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)Um(a,t),a=a.sibling;return ve(an,an.current&1|2),bt&&Ji(n,o.treeForkCount),n.child}t=t.sibling}o.tail!==null&&b()>fc&&(n.flags|=128,u=!0,Lo(o,!1),n.lanes=4194304)}else{if(!u)if(t=jl(f),t!==null){if(n.flags|=128,u=!0,t=t.updateQueue,n.updateQueue=t,rc(n,t),Lo(o,!0),o.tail===null&&o.tailMode==="hidden"&&!f.alternate&&!bt)return Yt(n),null}else 2*b()-o.renderingStartTime>fc&&a!==536870912&&(n.flags|=128,u=!0,Lo(o,!1),n.lanes=4194304);o.isBackwards?(f.sibling=n.child,n.child=f):(t=o.last,t!==null?t.sibling=f:n.child=f,o.last=f)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=b(),t.sibling=null,a=an.current,ve(an,u?a&1|2:a&1),bt&&Ji(n,o.treeForkCount),t):(Yt(n),null);case 22:case 23:return $n(n),mf(),o=n.memoizedState!==null,t!==null?t.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(Yt(n),n.subtreeFlags&6&&(n.flags|=8192)):Yt(n),a=n.updateQueue,a!==null&&rc(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),t!==null&&ie(xs),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),ta(cn),Yt(n),null;case 25:return null;case 30:return null}throw Error(r(156,n.tag))}function py(t,n){switch(Ju(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return ta(cn),Xe(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return pt(n),null;case 31:if(n.memoizedState!==null){if($n(n),n.alternate===null)throw Error(r(340));gs()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if($n(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(r(340));gs()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return ie(an),null;case 4:return Xe(),null;case 10:return ta(n.type),null;case 22:case 23:return $n(n),mf(),t!==null&&ie(xs),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return ta(cn),null;case 25:return null;default:return null}}function a0(t,n){switch(Ju(n),n.tag){case 3:ta(cn),Xe();break;case 26:case 27:case 5:pt(n);break;case 4:Xe();break;case 31:n.memoizedState!==null&&$n(n);break;case 13:$n(n);break;case 19:ie(an);break;case 10:ta(n.type);break;case 22:case 23:$n(n),mf(),t!==null&&ie(xs);break;case 24:ta(cn)}}function Oo(t,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var u=o.next;a=u;do{if((a.tag&t)===t){o=void 0;var f=a.create,x=a.inst;o=f(),x.destroy=o}a=a.next}while(a!==u)}}catch(T){zt(n,n.return,T)}}function Ba(t,n,a){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var f=u.next;o=f;do{if((o.tag&t)===t){var x=o.inst,T=x.destroy;if(T!==void 0){x.destroy=void 0,u=n;var B=a,$=T;try{$()}catch(de){zt(u,B,de)}}}o=o.next}while(o!==f)}}catch(de){zt(n,n.return,de)}}function s0(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{Zm(n,a)}catch(o){zt(t,t.return,o)}}}function r0(t,n,a){a.props=Es(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(o){zt(t,n,o)}}function Po(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var o=t.stateNode;break;case 30:o=t.stateNode;break;default:o=t.stateNode}typeof a=="function"?t.refCleanup=a(o):a.current=o}}catch(u){zt(t,n,u)}}function Bi(t,n){var a=t.ref,o=t.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(u){zt(t,n,u)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){zt(t,n,u)}else a.current=null}function o0(t){var n=t.type,a=t.memoizedProps,o=t.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break e;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(u){zt(t,t.return,u)}}function jf(t,n,a){try{var o=t.stateNode;Fy(o,t.type,a,n),o[yn]=n}catch(u){zt(t,t.return,u)}}function l0(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&Wa(t.type)||t.tag===4}function Yf(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||l0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&Wa(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Zf(t,n,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(t),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Ki));else if(o!==4&&(o===27&&Wa(t.type)&&(a=t.stateNode,n=null),t=t.child,t!==null))for(Zf(t,n,a),t=t.sibling;t!==null;)Zf(t,n,a),t=t.sibling}function oc(t,n,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(o!==4&&(o===27&&Wa(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(oc(t,n,a),t=t.sibling;t!==null;)oc(t,n,a),t=t.sibling}function c0(t){var n=t.stateNode,a=t.memoizedProps;try{for(var o=t.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);Dn(n,o,a),n[ln]=t,n[yn]=a}catch(f){zt(t,t.return,f)}}var ra=!1,dn=!1,Kf=!1,u0=typeof WeakSet=="function"?WeakSet:Set,_n=null;function my(t,n){if(t=t.containerInfo,vd=Cc,t=Mm(t),Vu(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else e:{a=(a=t.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var u=o.anchorOffset,f=o.focusNode;o=o.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break e}var x=0,T=-1,B=-1,$=0,de=0,ge=t,te=null;t:for(;;){for(var le;ge!==a||u!==0&&ge.nodeType!==3||(T=x+u),ge!==f||o!==0&&ge.nodeType!==3||(B=x+o),ge.nodeType===3&&(x+=ge.nodeValue.length),(le=ge.firstChild)!==null;)te=ge,ge=le;for(;;){if(ge===t)break t;if(te===a&&++$===u&&(T=x),te===f&&++de===o&&(B=x),(le=ge.nextSibling)!==null)break;ge=te,te=ge.parentNode}ge=le}a=T===-1||B===-1?null:{start:T,end:B}}else a=null}a=a||{start:0,end:0}}else a=null;for(_d={focusedElem:t,selectionRange:a},Cc=!1,_n=n;_n!==null;)if(n=_n,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,_n=t;else for(;_n!==null;){switch(n=_n,f=n.alternate,t=n.flags,n.tag){case 0:if((t&4)!==0&&(t=n.updateQueue,t=t!==null?t.events:null,t!==null))for(a=0;a<t.length;a++)u=t[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&f!==null){t=void 0,a=n,u=f.memoizedProps,f=f.memoizedState,o=a.stateNode;try{var ke=Es(a.type,u);t=o.getSnapshotBeforeUpdate(ke,f),o.__reactInternalSnapshotBeforeUpdate=t}catch(tt){zt(a,a.return,tt)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)yd(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":yd(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(r(163))}if(t=n.sibling,t!==null){t.return=n.return,_n=t;break}_n=n.return}}function f0(t,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:la(t,a),o&4&&Oo(5,a);break;case 1:if(la(t,a),o&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(x){zt(a,a.return,x)}else{var u=Es(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(u,n,t.__reactInternalSnapshotBeforeUpdate)}catch(x){zt(a,a.return,x)}}o&64&&s0(a),o&512&&Po(a,a.return);break;case 3:if(la(t,a),o&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Zm(t,n)}catch(x){zt(a,a.return,x)}}break;case 27:n===null&&o&4&&c0(a);case 26:case 5:la(t,a),n===null&&o&4&&o0(a),o&512&&Po(a,a.return);break;case 12:la(t,a);break;case 31:la(t,a),o&4&&p0(t,a);break;case 13:la(t,a),o&4&&m0(t,a),o&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=Ey.bind(null,a),Xy(t,a))));break;case 22:if(o=a.memoizedState!==null||ra,!o){n=n!==null&&n.memoizedState!==null||dn,u=ra;var f=dn;ra=o,(dn=n)&&!f?ca(t,a,(a.subtreeFlags&8772)!==0):la(t,a),ra=u,dn=f}break;case 30:break;default:la(t,a)}}function d0(t){var n=t.alternate;n!==null&&(t.alternate=null,d0(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&lo(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Qt=null,Xn=!1;function oa(t,n,a){for(a=a.child;a!==null;)h0(t,n,a),a=a.sibling}function h0(t,n,a){if(Ee&&typeof Ee.onCommitFiberUnmount=="function")try{Ee.onCommitFiberUnmount(be,a)}catch{}switch(a.tag){case 26:dn||Bi(a,n),oa(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:dn||Bi(a,n);var o=Qt,u=Xn;Wa(a.type)&&(Qt=a.stateNode,Xn=!1),oa(t,n,a),Xo(a.stateNode),Qt=o,Xn=u;break;case 5:dn||Bi(a,n);case 6:if(o=Qt,u=Xn,Qt=null,oa(t,n,a),Qt=o,Xn=u,Qt!==null)if(Xn)try{(Qt.nodeType===9?Qt.body:Qt.nodeName==="HTML"?Qt.ownerDocument.body:Qt).removeChild(a.stateNode)}catch(f){zt(a,n,f)}else try{Qt.removeChild(a.stateNode)}catch(f){zt(a,n,f)}break;case 18:Qt!==null&&(Xn?(t=Qt,sv(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),Mr(t)):sv(Qt,a.stateNode));break;case 4:o=Qt,u=Xn,Qt=a.stateNode.containerInfo,Xn=!0,oa(t,n,a),Qt=o,Xn=u;break;case 0:case 11:case 14:case 15:Ba(2,a,n),dn||Ba(4,a,n),oa(t,n,a);break;case 1:dn||(Bi(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&r0(a,n,o)),oa(t,n,a);break;case 21:oa(t,n,a);break;case 22:dn=(o=dn)||a.memoizedState!==null,oa(t,n,a),dn=o;break;default:oa(t,n,a)}}function p0(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{Mr(t)}catch(a){zt(n,n.return,a)}}}function m0(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Mr(t)}catch(a){zt(n,n.return,a)}}function gy(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new u0),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new u0),n;default:throw Error(r(435,t.tag))}}function lc(t,n){var a=gy(t);n.forEach(function(o){if(!a.has(o)){a.add(o);var u=Ty.bind(null,t,o);o.then(u,u)}})}function Wn(t,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o],f=t,x=n,T=x;e:for(;T!==null;){switch(T.tag){case 27:if(Wa(T.type)){Qt=T.stateNode,Xn=!1;break e}break;case 5:Qt=T.stateNode,Xn=!1;break e;case 3:case 4:Qt=T.stateNode.containerInfo,Xn=!0;break e}T=T.return}if(Qt===null)throw Error(r(160));h0(f,x,u),Qt=null,Xn=!1,f=u.alternate,f!==null&&(f.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)g0(n,t),n=n.sibling}var Ei=null;function g0(t,n){var a=t.alternate,o=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:Wn(n,t),qn(t),o&4&&(Ba(3,t,t.return),Oo(3,t),Ba(5,t,t.return));break;case 1:Wn(n,t),qn(t),o&512&&(dn||a===null||Bi(a,a.return)),o&64&&ra&&(t=t.updateQueue,t!==null&&(o=t.callbacks,o!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var u=Ei;if(Wn(n,t),qn(t),o&512&&(dn||a===null||Bi(a,a.return)),o&4){var f=a!==null?a.memoizedState:null;if(o=t.memoizedState,a===null)if(o===null)if(t.stateNode===null){e:{o=t.type,a=t.memoizedProps,u=u.ownerDocument||u;t:switch(o){case"title":f=u.getElementsByTagName("title")[0],(!f||f[cs]||f[ln]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=u.createElement(o),u.head.insertBefore(f,u.querySelector("head > title"))),Dn(f,o,a),f[ln]=t,A(f),o=f;break e;case"link":var x=gv("link","href",u).get(o+(a.href||""));if(x){for(var T=0;T<x.length;T++)if(f=x[T],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){x.splice(T,1);break t}}f=u.createElement(o),Dn(f,o,a),u.head.appendChild(f);break;case"meta":if(x=gv("meta","content",u).get(o+(a.content||""))){for(T=0;T<x.length;T++)if(f=x[T],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){x.splice(T,1);break t}}f=u.createElement(o),Dn(f,o,a),u.head.appendChild(f);break;default:throw Error(r(468,o))}f[ln]=t,A(f),o=f}t.stateNode=o}else vv(u,t.type,t.stateNode);else t.stateNode=mv(u,o,t.memoizedProps);else f!==o?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,o===null?vv(u,t.type,t.stateNode):mv(u,o,t.memoizedProps)):o===null&&t.stateNode!==null&&jf(t,t.memoizedProps,a.memoizedProps)}break;case 27:Wn(n,t),qn(t),o&512&&(dn||a===null||Bi(a,a.return)),a!==null&&o&4&&jf(t,t.memoizedProps,a.memoizedProps);break;case 5:if(Wn(n,t),qn(t),o&512&&(dn||a===null||Bi(a,a.return)),t.flags&32){u=t.stateNode;try{pn(u,"")}catch(ke){zt(t,t.return,ke)}}o&4&&t.stateNode!=null&&(u=t.memoizedProps,jf(t,u,a!==null?a.memoizedProps:u)),o&1024&&(Kf=!0);break;case 6:if(Wn(n,t),qn(t),o&4){if(t.stateNode===null)throw Error(r(162));o=t.memoizedProps,a=t.stateNode;try{a.nodeValue=o}catch(ke){zt(t,t.return,ke)}}break;case 3:if(Ec=null,u=Ei,Ei=Mc(n.containerInfo),Wn(n,t),Ei=u,qn(t),o&4&&a!==null&&a.memoizedState.isDehydrated)try{Mr(n.containerInfo)}catch(ke){zt(t,t.return,ke)}Kf&&(Kf=!1,v0(t));break;case 4:o=Ei,Ei=Mc(t.stateNode.containerInfo),Wn(n,t),qn(t),Ei=o;break;case 12:Wn(n,t),qn(t);break;case 31:Wn(n,t),qn(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,lc(t,o)));break;case 13:Wn(n,t),qn(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(uc=b()),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,lc(t,o)));break;case 22:u=t.memoizedState!==null;var B=a!==null&&a.memoizedState!==null,$=ra,de=dn;if(ra=$||u,dn=de||B,Wn(n,t),dn=de,ra=$,qn(t),o&8192)e:for(n=t.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||B||ra||dn||Ts(t)),a=null,n=t;;){if(n.tag===5||n.tag===26){if(a===null){B=a=n;try{if(f=B.stateNode,u)x=f.style,typeof x.setProperty=="function"?x.setProperty("display","none","important"):x.display="none";else{T=B.stateNode;var ge=B.memoizedProps.style,te=ge!=null&&ge.hasOwnProperty("display")?ge.display:null;T.style.display=te==null||typeof te=="boolean"?"":(""+te).trim()}}catch(ke){zt(B,B.return,ke)}}}else if(n.tag===6){if(a===null){B=n;try{B.stateNode.nodeValue=u?"":B.memoizedProps}catch(ke){zt(B,B.return,ke)}}}else if(n.tag===18){if(a===null){B=n;try{var le=B.stateNode;u?rv(le,!0):rv(B.stateNode,!1)}catch(ke){zt(B,B.return,ke)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break e;for(;n.sibling===null;){if(n.return===null||n.return===t)break e;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=t.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,lc(t,a))));break;case 19:Wn(n,t),qn(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,lc(t,o)));break;case 30:break;case 21:break;default:Wn(n,t),qn(t)}}function qn(t){var n=t.flags;if(n&2){try{for(var a,o=t.return;o!==null;){if(l0(o)){a=o;break}o=o.return}if(a==null)throw Error(r(160));switch(a.tag){case 27:var u=a.stateNode,f=Yf(t);oc(t,f,u);break;case 5:var x=a.stateNode;a.flags&32&&(pn(x,""),a.flags&=-33);var T=Yf(t);oc(t,T,x);break;case 3:case 4:var B=a.stateNode.containerInfo,$=Yf(t);Zf(t,$,B);break;default:throw Error(r(161))}}catch(de){zt(t,t.return,de)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function v0(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;v0(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function la(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)f0(t,n.alternate,n),n=n.sibling}function Ts(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:Ba(4,n,n.return),Ts(n);break;case 1:Bi(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&r0(n,n.return,a),Ts(n);break;case 27:Xo(n.stateNode);case 26:case 5:Bi(n,n.return),Ts(n);break;case 22:n.memoizedState===null&&Ts(n);break;case 30:Ts(n);break;default:Ts(n)}t=t.sibling}}function ca(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=t,f=n,x=f.flags;switch(f.tag){case 0:case 11:case 15:ca(u,f,a),Oo(4,f);break;case 1:if(ca(u,f,a),o=f,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch($){zt(o,o.return,$)}if(o=f,u=o.updateQueue,u!==null){var T=o.stateNode;try{var B=u.shared.hiddenCallbacks;if(B!==null)for(u.shared.hiddenCallbacks=null,u=0;u<B.length;u++)Ym(B[u],T)}catch($){zt(o,o.return,$)}}a&&x&64&&s0(f),Po(f,f.return);break;case 27:c0(f);case 26:case 5:ca(u,f,a),a&&o===null&&x&4&&o0(f),Po(f,f.return);break;case 12:ca(u,f,a);break;case 31:ca(u,f,a),a&&x&4&&p0(u,f);break;case 13:ca(u,f,a),a&&x&4&&m0(u,f);break;case 22:f.memoizedState===null&&ca(u,f,a),Po(f,f.return);break;case 30:break;default:ca(u,f,a)}n=n.sibling}}function Qf(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&yo(a))}function $f(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&yo(t))}function Ti(t,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)_0(t,n,a,o),n=n.sibling}function _0(t,n,a,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:Ti(t,n,a,o),u&2048&&Oo(9,n);break;case 1:Ti(t,n,a,o);break;case 3:Ti(t,n,a,o),u&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&yo(t)));break;case 12:if(u&2048){Ti(t,n,a,o),t=n.stateNode;try{var f=n.memoizedProps,x=f.id,T=f.onPostCommit;typeof T=="function"&&T(x,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(B){zt(n,n.return,B)}}else Ti(t,n,a,o);break;case 31:Ti(t,n,a,o);break;case 13:Ti(t,n,a,o);break;case 23:break;case 22:f=n.stateNode,x=n.alternate,n.memoizedState!==null?f._visibility&2?Ti(t,n,a,o):Fo(t,n):f._visibility&2?Ti(t,n,a,o):(f._visibility|=2,fr(t,n,a,o,(n.subtreeFlags&10256)!==0||!1)),u&2048&&Qf(x,n);break;case 24:Ti(t,n,a,o),u&2048&&$f(n.alternate,n);break;default:Ti(t,n,a,o)}}function fr(t,n,a,o,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=t,x=n,T=a,B=o,$=x.flags;switch(x.tag){case 0:case 11:case 15:fr(f,x,T,B,u),Oo(8,x);break;case 23:break;case 22:var de=x.stateNode;x.memoizedState!==null?de._visibility&2?fr(f,x,T,B,u):Fo(f,x):(de._visibility|=2,fr(f,x,T,B,u)),u&&$&2048&&Qf(x.alternate,x);break;case 24:fr(f,x,T,B,u),u&&$&2048&&$f(x.alternate,x);break;default:fr(f,x,T,B,u)}n=n.sibling}}function Fo(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,o=n,u=o.flags;switch(o.tag){case 22:Fo(a,o),u&2048&&Qf(o.alternate,o);break;case 24:Fo(a,o),u&2048&&$f(o.alternate,o);break;default:Fo(a,o)}n=n.sibling}}var Io=8192;function dr(t,n,a){if(t.subtreeFlags&Io)for(t=t.child;t!==null;)x0(t,n,a),t=t.sibling}function x0(t,n,a){switch(t.tag){case 26:dr(t,n,a),t.flags&Io&&t.memoizedState!==null&&nM(a,Ei,t.memoizedState,t.memoizedProps);break;case 5:dr(t,n,a);break;case 3:case 4:var o=Ei;Ei=Mc(t.stateNode.containerInfo),dr(t,n,a),Ei=o;break;case 22:t.memoizedState===null&&(o=t.alternate,o!==null&&o.memoizedState!==null?(o=Io,Io=16777216,dr(t,n,a),Io=o):dr(t,n,a));break;default:dr(t,n,a)}}function S0(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function Bo(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];_n=o,M0(o,t)}S0(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)y0(t),t=t.sibling}function y0(t){switch(t.tag){case 0:case 11:case 15:Bo(t),t.flags&2048&&Ba(9,t,t.return);break;case 3:Bo(t);break;case 12:Bo(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,cc(t)):Bo(t);break;default:Bo(t)}}function cc(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];_n=o,M0(o,t)}S0(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:Ba(8,n,n.return),cc(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,cc(n));break;default:cc(n)}t=t.sibling}}function M0(t,n){for(;_n!==null;){var a=_n;switch(a.tag){case 0:case 11:case 15:Ba(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:yo(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,_n=o;else e:for(a=t;_n!==null;){o=_n;var u=o.sibling,f=o.return;if(d0(o),o===a){_n=null;break e}if(u!==null){u.return=f,_n=u;break e}_n=f}}}var vy={getCacheForType:function(t){var n=Cn(cn),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a},cacheSignal:function(){return Cn(cn).controller.signal}},_y=typeof WeakMap=="function"?WeakMap:Map,Lt=0,Xt=null,gt=null,St=0,Bt=0,Jn=null,za=!1,hr=!1,Jf=!1,ua=0,tn=0,Ha=0,As=0,ed=0,ei=0,pr=0,zo=null,jn=null,td=!1,uc=0,b0=0,fc=1/0,dc=null,Ga=null,mn=0,Va=null,mr=null,fa=0,nd=0,id=null,E0=null,Ho=0,ad=null;function ti(){return(Lt&2)!==0&&St!==0?St&-St:P.T!==null?ud():ro()}function T0(){if(ei===0)if((St&536870912)===0||bt){var t=Te;Te<<=1,(Te&3932160)===0&&(Te=262144),ei=t}else ei=536870912;return t=Qn.current,t!==null&&(t.flags|=32),ei}function Yn(t,n,a){(t===Xt&&(Bt===2||Bt===9)||t.cancelPendingCommit!==null)&&(gr(t,0),ka(t,St,ei,!1)),Nn(t,a),((Lt&2)===0||t!==Xt)&&(t===Xt&&((Lt&2)===0&&(As|=a),tn===4&&ka(t,St,ei,!1)),zi(t))}function A0(t,n,a){if((Lt&6)!==0)throw Error(r(327));var o=!a&&(n&127)===0&&(n&t.expiredLanes)===0||Ce(t,n),u=o?yy(t,n):rd(t,n,!0),f=o;do{if(u===0){hr&&!o&&ka(t,n,0,!1);break}else{if(a=t.current.alternate,f&&!xy(a)){u=rd(t,n,!1),f=!1;continue}if(u===2){if(f=n,t.errorRecoveryDisabledLanes&f)var x=0;else x=t.pendingLanes&-536870913,x=x!==0?x:x&536870912?536870912:0;if(x!==0){n=x;e:{var T=t;u=zo;var B=T.current.memoizedState.isDehydrated;if(B&&(gr(T,x).flags|=256),x=rd(T,x,!1),x!==2){if(Jf&&!B){T.errorRecoveryDisabledLanes|=f,As|=f,u=4;break e}f=jn,jn=u,f!==null&&(jn===null?jn=f:jn.push.apply(jn,f))}u=x}if(f=!1,u!==2)continue}}if(u===1){gr(t,0),ka(t,n,0,!0);break}e:{switch(o=t,f=u,f){case 0:case 1:throw Error(r(345));case 4:if((n&4194048)!==n)break;case 6:ka(o,n,ei,!za);break e;case 2:jn=null;break;case 3:case 5:break;default:throw Error(r(329))}if((n&62914560)===n&&(u=uc+300-b(),10<u)){if(ka(o,n,ei,!za),_e(o,0,!0)!==0)break e;fa=n,o.timeoutHandle=iv(R0.bind(null,o,a,jn,dc,td,n,ei,As,pr,za,f,"Throttled",-0,0),u);break e}R0(o,a,jn,dc,td,n,ei,As,pr,za,f,null,-0,0)}}break}while(!0);zi(t)}function R0(t,n,a,o,u,f,x,T,B,$,de,ge,te,le){if(t.timeoutHandle=-1,ge=n.subtreeFlags,ge&8192||(ge&16785408)===16785408){ge={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Ki},x0(n,f,ge);var ke=(f&62914560)===f?uc-b():(f&4194048)===f?b0-b():0;if(ke=iM(ge,ke),ke!==null){fa=f,t.cancelPendingCommit=ke(P0.bind(null,t,n,f,a,o,u,x,T,B,de,ge,null,te,le)),ka(t,f,x,!$);return}}P0(t,n,f,a,o,u,x,T,B)}function xy(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var u=a[o],f=u.getSnapshot;u=u.value;try{if(!Zn(f(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function ka(t,n,a,o){n&=~ed,n&=~As,t.suspendedLanes|=n,t.pingedLanes&=~n,o&&(t.warmLanes|=n),o=t.expirationTimes;for(var u=n;0<u;){var f=31-Fe(u),x=1<<f;o[f]=-1,u&=~x}a!==0&&El(t,a,n)}function hc(){return(Lt&6)===0?(Go(0),!1):!0}function sd(){if(gt!==null){if(Bt===0)var t=gt.return;else t=gt,ea=vs=null,yf(t),rr=null,bo=0,t=gt;for(;t!==null;)a0(t.alternate,t),t=t.return;gt=null}}function gr(t,n){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,zy(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),fa=0,sd(),Xt=t,gt=a=$i(t.current,null),St=n,Bt=0,Jn=null,za=!1,hr=Ce(t,n),Jf=!1,pr=ei=ed=As=Ha=tn=0,jn=zo=null,td=!1,(n&8)!==0&&(n|=n&32);var o=t.entangledLanes;if(o!==0)for(t=t.entanglements,o&=n;0<o;){var u=31-Fe(o),f=1<<u;n|=t[u],o&=~f}return ua=n,Ol(),a}function C0(t,n){lt=null,P.H=Uo,n===sr||n===Vl?(n=Xm(),Bt=3):n===cf?(n=Xm(),Bt=4):Bt=n===If?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,Jn=n,gt===null&&(tn=1,nc(t,fi(n,t.current)))}function w0(){var t=Qn.current;return t===null?!0:(St&4194048)===St?mi===null:(St&62914560)===St||(St&536870912)!==0?t===mi:!1}function D0(){var t=P.H;return P.H=Uo,t===null?Uo:t}function U0(){var t=P.A;return P.A=vy,t}function pc(){tn=4,za||(St&4194048)!==St&&Qn.current!==null||(hr=!0),(Ha&134217727)===0&&(As&134217727)===0||Xt===null||ka(Xt,St,ei,!1)}function rd(t,n,a){var o=Lt;Lt|=2;var u=D0(),f=U0();(Xt!==t||St!==n)&&(dc=null,gr(t,n)),n=!1;var x=tn;e:do try{if(Bt!==0&&gt!==null){var T=gt,B=Jn;switch(Bt){case 8:sd(),x=6;break e;case 3:case 2:case 9:case 6:Qn.current===null&&(n=!0);var $=Bt;if(Bt=0,Jn=null,vr(t,T,B,$),a&&hr){x=0;break e}break;default:$=Bt,Bt=0,Jn=null,vr(t,T,B,$)}}Sy(),x=tn;break}catch(de){C0(t,de)}while(!0);return n&&t.shellSuspendCounter++,ea=vs=null,Lt=o,P.H=u,P.A=f,gt===null&&(Xt=null,St=0,Ol()),x}function Sy(){for(;gt!==null;)N0(gt)}function yy(t,n){var a=Lt;Lt|=2;var o=D0(),u=U0();Xt!==t||St!==n?(dc=null,fc=b()+500,gr(t,n)):hr=Ce(t,n);e:do try{if(Bt!==0&&gt!==null){n=gt;var f=Jn;t:switch(Bt){case 1:Bt=0,Jn=null,vr(t,n,f,1);break;case 2:case 9:if(Vm(f)){Bt=0,Jn=null,L0(n);break}n=function(){Bt!==2&&Bt!==9||Xt!==t||(Bt=7),zi(t)},f.then(n,n);break e;case 3:Bt=7;break e;case 4:Bt=5;break e;case 7:Vm(f)?(Bt=0,Jn=null,L0(n)):(Bt=0,Jn=null,vr(t,n,f,7));break;case 5:var x=null;switch(gt.tag){case 26:x=gt.memoizedState;case 5:case 27:var T=gt;if(x?_v(x):T.stateNode.complete){Bt=0,Jn=null;var B=T.sibling;if(B!==null)gt=B;else{var $=T.return;$!==null?(gt=$,mc($)):gt=null}break t}}Bt=0,Jn=null,vr(t,n,f,5);break;case 6:Bt=0,Jn=null,vr(t,n,f,6);break;case 8:sd(),tn=6;break e;default:throw Error(r(462))}}My();break}catch(de){C0(t,de)}while(!0);return ea=vs=null,P.H=o,P.A=u,Lt=a,gt!==null?0:(Xt=null,St=0,Ol(),tn)}function My(){for(;gt!==null&&!Ye();)N0(gt)}function N0(t){var n=n0(t.alternate,t,ua);t.memoizedProps=t.pendingProps,n===null?mc(t):gt=n}function L0(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=Kg(a,n,n.pendingProps,n.type,void 0,St);break;case 11:n=Kg(a,n,n.pendingProps,n.type.render,n.ref,St);break;case 5:yf(n);default:a0(a,n),n=gt=Um(n,ua),n=n0(a,n,ua)}t.memoizedProps=t.pendingProps,n===null?mc(t):gt=n}function vr(t,n,a,o){ea=vs=null,yf(n),rr=null,bo=0;var u=n.return;try{if(uy(t,u,n,a,St)){tn=1,nc(t,fi(a,t.current)),gt=null;return}}catch(f){if(u!==null)throw gt=u,f;tn=1,nc(t,fi(a,t.current)),gt=null;return}n.flags&32768?(bt||o===1?t=!0:hr||(St&536870912)!==0?t=!1:(za=t=!0,(o===2||o===9||o===3||o===6)&&(o=Qn.current,o!==null&&o.tag===13&&(o.flags|=16384))),O0(n,t)):mc(n)}function mc(t){var n=t;do{if((n.flags&32768)!==0){O0(n,za);return}t=n.return;var a=hy(n.alternate,n,ua);if(a!==null){gt=a;return}if(n=n.sibling,n!==null){gt=n;return}gt=n=t}while(n!==null);tn===0&&(tn=5)}function O0(t,n){do{var a=py(t.alternate,t);if(a!==null){a.flags&=32767,gt=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){gt=t;return}gt=t=a}while(t!==null);tn=6,gt=null}function P0(t,n,a,o,u,f,x,T,B){t.cancelPendingCommit=null;do gc();while(mn!==0);if((Lt&6)!==0)throw Error(r(327));if(n!==null){if(n===t.current)throw Error(r(177));if(f=n.lanes|n.childLanes,f|=ju,Si(t,a,f,x,T,B),t===Xt&&(gt=Xt=null,St=0),mr=n,Va=t,fa=a,nd=f,id=u,E0=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,Ay(ce,function(){return H0(),null})):(t.callbackNode=null,t.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=P.T,P.T=null,u=H.p,H.p=2,x=Lt,Lt|=4;try{my(t,n,a)}finally{Lt=x,H.p=u,P.T=o}}mn=1,F0(),I0(),B0()}}function F0(){if(mn===1){mn=0;var t=Va,n=mr,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=P.T,P.T=null;var o=H.p;H.p=2;var u=Lt;Lt|=4;try{g0(n,t);var f=_d,x=Mm(t.containerInfo),T=f.focusedElem,B=f.selectionRange;if(x!==T&&T&&T.ownerDocument&&ym(T.ownerDocument.documentElement,T)){if(B!==null&&Vu(T)){var $=B.start,de=B.end;if(de===void 0&&(de=$),"selectionStart"in T)T.selectionStart=$,T.selectionEnd=Math.min(de,T.value.length);else{var ge=T.ownerDocument||document,te=ge&&ge.defaultView||window;if(te.getSelection){var le=te.getSelection(),ke=T.textContent.length,tt=Math.min(B.start,ke),kt=B.end===void 0?tt:Math.min(B.end,ke);!le.extend&&tt>kt&&(x=kt,kt=tt,tt=x);var j=Sm(T,tt),V=Sm(T,kt);if(j&&V&&(le.rangeCount!==1||le.anchorNode!==j.node||le.anchorOffset!==j.offset||le.focusNode!==V.node||le.focusOffset!==V.offset)){var Q=ge.createRange();Q.setStart(j.node,j.offset),le.removeAllRanges(),tt>kt?(le.addRange(Q),le.extend(V.node,V.offset)):(Q.setEnd(V.node,V.offset),le.addRange(Q))}}}}for(ge=[],le=T;le=le.parentNode;)le.nodeType===1&&ge.push({element:le,left:le.scrollLeft,top:le.scrollTop});for(typeof T.focus=="function"&&T.focus(),T=0;T<ge.length;T++){var me=ge[T];me.element.scrollLeft=me.left,me.element.scrollTop=me.top}}Cc=!!vd,_d=vd=null}finally{Lt=u,H.p=o,P.T=a}}t.current=n,mn=2}}function I0(){if(mn===2){mn=0;var t=Va,n=mr,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=P.T,P.T=null;var o=H.p;H.p=2;var u=Lt;Lt|=4;try{f0(t,n.alternate,n)}finally{Lt=u,H.p=o,P.T=a}}mn=3}}function B0(){if(mn===4||mn===3){mn=0,D();var t=Va,n=mr,a=fa,o=E0;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?mn=5:(mn=0,mr=Va=null,z0(t,t.pendingLanes));var u=t.pendingLanes;if(u===0&&(Ga=null),Vs(a),n=n.stateNode,Ee&&typeof Ee.onCommitFiberRoot=="function")try{Ee.onCommitFiberRoot(be,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=P.T,u=H.p,H.p=2,P.T=null;try{for(var f=t.onRecoverableError,x=0;x<o.length;x++){var T=o[x];f(T.value,{componentStack:T.stack})}}finally{P.T=n,H.p=u}}(fa&3)!==0&&gc(),zi(t),u=t.pendingLanes,(a&261930)!==0&&(u&42)!==0?t===ad?Ho++:(Ho=0,ad=t):Ho=0,Go(0)}}function z0(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,yo(n)))}function gc(){return F0(),I0(),B0(),H0()}function H0(){if(mn!==5)return!1;var t=Va,n=nd;nd=0;var a=Vs(fa),o=P.T,u=H.p;try{H.p=32>a?32:a,P.T=null,a=id,id=null;var f=Va,x=fa;if(mn=0,mr=Va=null,fa=0,(Lt&6)!==0)throw Error(r(331));var T=Lt;if(Lt|=4,y0(f.current),_0(f,f.current,x,a),Lt=T,Go(0,!1),Ee&&typeof Ee.onPostCommitFiberRoot=="function")try{Ee.onPostCommitFiberRoot(be,f)}catch{}return!0}finally{H.p=u,P.T=o,z0(t,n)}}function G0(t,n,a){n=fi(a,n),n=Ff(t.stateNode,n,2),t=Pa(t,n,2),t!==null&&(Nn(t,2),zi(t))}function zt(t,n,a){if(t.tag===3)G0(t,t,a);else for(;n!==null;){if(n.tag===3){G0(n,t,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Ga===null||!Ga.has(o))){t=fi(a,t),a=Vg(2),o=Pa(n,a,2),o!==null&&(kg(a,o,n,t),Nn(o,2),zi(o));break}}n=n.return}}function od(t,n,a){var o=t.pingCache;if(o===null){o=t.pingCache=new _y;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(a)||(Jf=!0,u.add(a),t=by.bind(null,t,n,a),n.then(t,t))}function by(t,n,a){var o=t.pingCache;o!==null&&o.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,Xt===t&&(St&a)===a&&(tn===4||tn===3&&(St&62914560)===St&&300>b()-uc?(Lt&2)===0&&gr(t,0):ed|=a,pr===St&&(pr=0)),zi(t)}function V0(t,n){n===0&&(n=Ft()),t=ps(t,n),t!==null&&(Nn(t,n),zi(t))}function Ey(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),V0(t,a)}function Ty(t,n){var a=0;switch(t.tag){case 31:case 13:var o=t.stateNode,u=t.memoizedState;u!==null&&(a=u.retryLane);break;case 19:o=t.stateNode;break;case 22:o=t.stateNode._retryCache;break;default:throw Error(r(314))}o!==null&&o.delete(n),V0(t,a)}function Ay(t,n){return Et(t,n)}var vc=null,_r=null,ld=!1,_c=!1,cd=!1,Xa=0;function zi(t){t!==_r&&t.next===null&&(_r===null?vc=_r=t:_r=_r.next=t),_c=!0,ld||(ld=!0,Cy())}function Go(t,n){if(!cd&&_c){cd=!0;do for(var a=!1,o=vc;o!==null;){if(t!==0){var u=o.pendingLanes;if(u===0)var f=0;else{var x=o.suspendedLanes,T=o.pingedLanes;f=(1<<31-Fe(42|t)+1)-1,f&=u&~(x&~T),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,q0(o,f))}else f=St,f=_e(o,o===Xt?f:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(f&3)===0||Ce(o,f)||(a=!0,q0(o,f));o=o.next}while(a);cd=!1}}function Ry(){k0()}function k0(){_c=ld=!1;var t=0;Xa!==0&&By()&&(t=Xa);for(var n=b(),a=null,o=vc;o!==null;){var u=o.next,f=X0(o,n);f===0?(o.next=null,a===null?vc=u:a.next=u,u===null&&(_r=a)):(a=o,(t!==0||(f&3)!==0)&&(_c=!0)),o=u}mn!==0&&mn!==5||Go(t),Xa!==0&&(Xa=0)}function X0(t,n){for(var a=t.suspendedLanes,o=t.pingedLanes,u=t.expirationTimes,f=t.pendingLanes&-62914561;0<f;){var x=31-Fe(f),T=1<<x,B=u[x];B===-1?((T&a)===0||(T&o)!==0)&&(u[x]=it(T,n)):B<=n&&(t.expiredLanes|=T),f&=~T}if(n=Xt,a=St,a=_e(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o=t.callbackNode,a===0||t===n&&(Bt===2||Bt===9)||t.cancelPendingCommit!==null)return o!==null&&o!==null&&Ot(o),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||Ce(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(o!==null&&Ot(o),Vs(a)){case 2:case 8:a=xe;break;case 32:a=ce;break;case 268435456:a=we;break;default:a=ce}return o=W0.bind(null,t),a=Et(a,o),t.callbackPriority=n,t.callbackNode=a,n}return o!==null&&o!==null&&Ot(o),t.callbackPriority=2,t.callbackNode=null,2}function W0(t,n){if(mn!==0&&mn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(gc()&&t.callbackNode!==a)return null;var o=St;return o=_e(t,t===Xt?o:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o===0?null:(A0(t,o,n),X0(t,b()),t.callbackNode!=null&&t.callbackNode===a?W0.bind(null,t):null)}function q0(t,n){if(gc())return null;A0(t,n,!0)}function Cy(){Hy(function(){(Lt&6)!==0?Et(he,Ry):k0()})}function ud(){if(Xa===0){var t=ir;t===0&&(t=Le,Le<<=1,(Le&261888)===0&&(Le=256)),Xa=t}return Xa}function j0(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Al(""+t)}function Y0(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function wy(t,n,a,o,u){if(n==="submit"&&a&&a.stateNode===u){var f=j0((u[yn]||null).action),x=o.submitter;x&&(n=(n=x[yn]||null)?j0(n.formAction):x.getAttribute("formAction"),n!==null&&(f=n,x=null));var T=new Dl("action","action",null,o,u);t.push({event:T,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(Xa!==0){var B=x?Y0(u,x):new FormData(u);Df(a,{pending:!0,data:B,method:u.method,action:f},null,B)}}else typeof f=="function"&&(T.preventDefault(),B=x?Y0(u,x):new FormData(u),Df(a,{pending:!0,data:B,method:u.method,action:f},f,B))},currentTarget:u}]})}}for(var fd=0;fd<qu.length;fd++){var dd=qu[fd],Dy=dd.toLowerCase(),Uy=dd[0].toUpperCase()+dd.slice(1);bi(Dy,"on"+Uy)}bi(Tm,"onAnimationEnd"),bi(Am,"onAnimationIteration"),bi(Rm,"onAnimationStart"),bi("dblclick","onDoubleClick"),bi("focusin","onFocus"),bi("focusout","onBlur"),bi(jS,"onTransitionRun"),bi(YS,"onTransitionStart"),bi(ZS,"onTransitionCancel"),bi(Cm,"onTransitionEnd"),Y("onMouseEnter",["mouseout","mouseover"]),Y("onMouseLeave",["mouseout","mouseover"]),Y("onPointerEnter",["pointerout","pointerover"]),Y("onPointerLeave",["pointerout","pointerover"]),ee("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),ee("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),ee("onBeforeInput",["compositionend","keypress","textInput","paste"]),ee("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),ee("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),ee("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Vo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ny=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Vo));function Z0(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var o=t[a],u=o.event;o=o.listeners;e:{var f=void 0;if(n)for(var x=o.length-1;0<=x;x--){var T=o[x],B=T.instance,$=T.currentTarget;if(T=T.listener,B!==f&&u.isPropagationStopped())break e;f=T,u.currentTarget=$;try{f(u)}catch(de){Ll(de)}u.currentTarget=null,f=B}else for(x=0;x<o.length;x++){if(T=o[x],B=T.instance,$=T.currentTarget,T=T.listener,B!==f&&u.isPropagationStopped())break e;f=T,u.currentTarget=$;try{f(u)}catch(de){Ll(de)}u.currentTarget=null,f=B}}}}function vt(t,n){var a=n[ks];a===void 0&&(a=n[ks]=new Set);var o=t+"__bubble";a.has(o)||(K0(n,t,2,!1),a.add(o))}function hd(t,n,a){var o=0;n&&(o|=4),K0(a,t,o,n)}var xc="_reactListening"+Math.random().toString(36).slice(2);function pd(t){if(!t[xc]){t[xc]=!0,q.forEach(function(a){a!=="selectionchange"&&(Ny.has(a)||hd(a,!1,t),hd(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[xc]||(n[xc]=!0,hd("selectionchange",!1,n))}}function K0(t,n,a,o){switch(Tv(n)){case 2:var u=rM;break;case 8:u=oM;break;default:u=wd}a=u.bind(null,n,a,t),u=void 0,!Lu||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?t.addEventListener(n,a,{capture:!0,passive:u}):t.addEventListener(n,a,!0):u!==void 0?t.addEventListener(n,a,{passive:u}):t.addEventListener(n,a,!1)}function md(t,n,a,o,u){var f=o;if((n&1)===0&&(n&2)===0&&o!==null)e:for(;;){if(o===null)return;var x=o.tag;if(x===3||x===4){var T=o.stateNode.containerInfo;if(T===u)break;if(x===4)for(x=o.return;x!==null;){var B=x.tag;if((B===3||B===4)&&x.stateNode.containerInfo===u)return;x=x.return}for(;T!==null;){if(x=Ta(T),x===null)return;if(B=x.tag,B===5||B===6||B===26||B===27){o=f=x;continue e}T=T.parentNode}}o=o.return}tm(function(){var $=f,de=Uu(a),ge=[];e:{var te=wm.get(t);if(te!==void 0){var le=Dl,ke=t;switch(t){case"keypress":if(Cl(a)===0)break e;case"keydown":case"keyup":le=TS;break;case"focusin":ke="focus",le=Iu;break;case"focusout":ke="blur",le=Iu;break;case"beforeblur":case"afterblur":le=Iu;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":le=am;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":le=hS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":le=CS;break;case Tm:case Am:case Rm:le=gS;break;case Cm:le=DS;break;case"scroll":case"scrollend":le=fS;break;case"wheel":le=NS;break;case"copy":case"cut":case"paste":le=_S;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":le=rm;break;case"toggle":case"beforetoggle":le=OS}var tt=(n&4)!==0,kt=!tt&&(t==="scroll"||t==="scrollend"),j=tt?te!==null?te+"Capture":null:te;tt=[];for(var V=$,Q;V!==null;){var me=V;if(Q=me.stateNode,me=me.tag,me!==5&&me!==26&&me!==27||Q===null||j===null||(me=co(V,j),me!=null&&tt.push(ko(V,me,Q))),kt)break;V=V.return}0<tt.length&&(te=new le(te,ke,null,a,de),ge.push({event:te,listeners:tt}))}}if((n&7)===0){e:{if(te=t==="mouseover"||t==="pointerover",le=t==="mouseout"||t==="pointerout",te&&a!==Du&&(ke=a.relatedTarget||a.fromElement)&&(Ta(ke)||ke[yi]))break e;if((le||te)&&(te=de.window===de?de:(te=de.ownerDocument)?te.defaultView||te.parentWindow:window,le?(ke=a.relatedTarget||a.toElement,le=$,ke=ke?Ta(ke):null,ke!==null&&(kt=c(ke),tt=ke.tag,ke!==kt||tt!==5&&tt!==27&&tt!==6)&&(ke=null)):(le=null,ke=$),le!==ke)){if(tt=am,me="onMouseLeave",j="onMouseEnter",V="mouse",(t==="pointerout"||t==="pointerover")&&(tt=rm,me="onPointerLeave",j="onPointerEnter",V="pointer"),kt=le==null?te:us(le),Q=ke==null?te:us(ke),te=new tt(me,V+"leave",le,a,de),te.target=kt,te.relatedTarget=Q,me=null,Ta(de)===$&&(tt=new tt(j,V+"enter",ke,a,de),tt.target=Q,tt.relatedTarget=kt,me=tt),kt=me,le&&ke)t:{for(tt=Ly,j=le,V=ke,Q=0,me=j;me;me=tt(me))Q++;me=0;for(var $e=V;$e;$e=tt($e))me++;for(;0<Q-me;)j=tt(j),Q--;for(;0<me-Q;)V=tt(V),me--;for(;Q--;){if(j===V||V!==null&&j===V.alternate){tt=j;break t}j=tt(j),V=tt(V)}tt=null}else tt=null;le!==null&&Q0(ge,te,le,tt,!1),ke!==null&&kt!==null&&Q0(ge,kt,ke,tt,!0)}}e:{if(te=$?us($):window,le=te.nodeName&&te.nodeName.toLowerCase(),le==="select"||le==="input"&&te.type==="file")var Ct=pm;else if(dm(te))if(mm)Ct=XS;else{Ct=VS;var Ze=GS}else le=te.nodeName,!le||le.toLowerCase()!=="input"||te.type!=="checkbox"&&te.type!=="radio"?$&&Mi($.elementType)&&(Ct=pm):Ct=kS;if(Ct&&(Ct=Ct(t,$))){hm(ge,Ct,a,de);break e}Ze&&Ze(t,te,$),t==="focusout"&&$&&te.type==="number"&&$.memoizedProps.value!=null&&bn(te,"number",te.value)}switch(Ze=$?us($):window,t){case"focusin":(dm(Ze)||Ze.contentEditable==="true")&&(Zs=Ze,ku=$,_o=null);break;case"focusout":_o=ku=Zs=null;break;case"mousedown":Xu=!0;break;case"contextmenu":case"mouseup":case"dragend":Xu=!1,bm(ge,a,de);break;case"selectionchange":if(qS)break;case"keydown":case"keyup":bm(ge,a,de)}var ut;if(zu)e:{switch(t){case"compositionstart":var yt="onCompositionStart";break e;case"compositionend":yt="onCompositionEnd";break e;case"compositionupdate":yt="onCompositionUpdate";break e}yt=void 0}else Ys?um(t,a)&&(yt="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(yt="onCompositionStart");yt&&(om&&a.locale!=="ko"&&(Ys||yt!=="onCompositionStart"?yt==="onCompositionEnd"&&Ys&&(ut=nm()):(Ca=de,Ou="value"in Ca?Ca.value:Ca.textContent,Ys=!0)),Ze=Sc($,yt),0<Ze.length&&(yt=new sm(yt,t,null,a,de),ge.push({event:yt,listeners:Ze}),ut?yt.data=ut:(ut=fm(a),ut!==null&&(yt.data=ut)))),(ut=FS?IS(t,a):BS(t,a))&&(yt=Sc($,"onBeforeInput"),0<yt.length&&(Ze=new sm("onBeforeInput","beforeinput",null,a,de),ge.push({event:Ze,listeners:yt}),Ze.data=ut)),wy(ge,t,$,a,de)}Z0(ge,n)})}function ko(t,n,a){return{instance:t,listener:n,currentTarget:a}}function Sc(t,n){for(var a=n+"Capture",o=[];t!==null;){var u=t,f=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||f===null||(u=co(t,a),u!=null&&o.unshift(ko(t,u,f)),u=co(t,n),u!=null&&o.push(ko(t,u,f))),t.tag===3)return o;t=t.return}return[]}function Ly(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function Q0(t,n,a,o,u){for(var f=n._reactName,x=[];a!==null&&a!==o;){var T=a,B=T.alternate,$=T.stateNode;if(T=T.tag,B!==null&&B===o)break;T!==5&&T!==26&&T!==27||$===null||(B=$,u?($=co(a,f),$!=null&&x.unshift(ko(a,$,B))):u||($=co(a,f),$!=null&&x.push(ko(a,$,B)))),a=a.return}x.length!==0&&t.push({event:n,listeners:x})}var Oy=/\r\n?/g,Py=/\u0000|\uFFFD/g;function $0(t){return(typeof t=="string"?t:""+t).replace(Oy,`
`).replace(Py,"")}function J0(t,n){return n=$0(n),$0(t)===n}function Vt(t,n,a,o,u,f){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||pn(t,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&pn(t,""+o);break;case"className":Je(t,"class",o);break;case"tabIndex":Je(t,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":Je(t,a,o);break;case"style":Ws(t,o,f);break;case"data":if(n!=="object"){Je(t,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=Al(""+o),t.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Vt(t,n,"name",u.name,u,null),Vt(t,n,"formEncType",u.formEncType,u,null),Vt(t,n,"formMethod",u.formMethod,u,null),Vt(t,n,"formTarget",u.formTarget,u,null)):(Vt(t,n,"encType",u.encType,u,null),Vt(t,n,"method",u.method,u,null),Vt(t,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=Al(""+o),t.setAttribute(a,o);break;case"onClick":o!=null&&(t.onclick=Ki);break;case"onScroll":o!=null&&vt("scroll",t);break;case"onScrollEnd":o!=null&&vt("scrollend",t);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"multiple":t.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":t.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){t.removeAttribute("xlink:href");break}a=Al(""+o),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""+o):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":o===!0?t.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,o):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?t.setAttribute(a,o):t.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?t.removeAttribute(a):t.setAttribute(a,o);break;case"popover":vt("beforetoggle",t),vt("toggle",t),qe(t,"popover",o);break;case"xlinkActuate":je(t,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":je(t,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":je(t,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":je(t,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":je(t,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":je(t,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":je(t,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":je(t,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":je(t,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":qe(t,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=cS.get(a)||a,qe(t,a,o))}}function gd(t,n,a,o,u,f){switch(a){case"style":Ws(t,o,f);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(r(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(r(60));t.innerHTML=a}}break;case"children":typeof o=="string"?pn(t,o):(typeof o=="number"||typeof o=="bigint")&&pn(t,""+o);break;case"onScroll":o!=null&&vt("scroll",t);break;case"onScrollEnd":o!=null&&vt("scrollend",t);break;case"onClick":o!=null&&(t.onclick=Ki);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!oe.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),f=t[yn]||null,f=f!=null?f[a]:null,typeof f=="function"&&t.removeEventListener(n,f,u),typeof o=="function")){typeof f!="function"&&f!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,o,u);break e}a in t?t[a]=o:o===!0?t.setAttribute(a,""):qe(t,a,o)}}}function Dn(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":vt("error",t),vt("load",t);var o=!1,u=!1,f;for(f in a)if(a.hasOwnProperty(f)){var x=a[f];if(x!=null)switch(f){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Vt(t,n,f,x,a,null)}}u&&Vt(t,n,"srcSet",a.srcSet,a,null),o&&Vt(t,n,"src",a.src,a,null);return;case"input":vt("invalid",t);var T=f=x=u=null,B=null,$=null;for(o in a)if(a.hasOwnProperty(o)){var de=a[o];if(de!=null)switch(o){case"name":u=de;break;case"type":x=de;break;case"checked":B=de;break;case"defaultChecked":$=de;break;case"value":f=de;break;case"defaultValue":T=de;break;case"children":case"dangerouslySetInnerHTML":if(de!=null)throw Error(r(137,n));break;default:Vt(t,n,o,de,a,null)}}Zi(t,f,T,B,$,x,u,!1);return;case"select":vt("invalid",t),o=x=f=null;for(u in a)if(a.hasOwnProperty(u)&&(T=a[u],T!=null))switch(u){case"value":f=T;break;case"defaultValue":x=T;break;case"multiple":o=T;default:Vt(t,n,u,T,a,null)}n=f,a=x,t.multiple=!!o,n!=null?ci(t,!!o,n,!1):a!=null&&ci(t,!!o,a,!0);return;case"textarea":vt("invalid",t),f=u=o=null;for(x in a)if(a.hasOwnProperty(x)&&(T=a[x],T!=null))switch(x){case"value":o=T;break;case"defaultValue":u=T;break;case"children":f=T;break;case"dangerouslySetInnerHTML":if(T!=null)throw Error(r(91));break;default:Vt(t,n,x,T,a,null)}En(t,o,u,f);return;case"option":for(B in a)a.hasOwnProperty(B)&&(o=a[B],o!=null)&&(B==="selected"?t.selected=o&&typeof o!="function"&&typeof o!="symbol":Vt(t,n,B,o,a,null));return;case"dialog":vt("beforetoggle",t),vt("toggle",t),vt("cancel",t),vt("close",t);break;case"iframe":case"object":vt("load",t);break;case"video":case"audio":for(o=0;o<Vo.length;o++)vt(Vo[o],t);break;case"image":vt("error",t),vt("load",t);break;case"details":vt("toggle",t);break;case"embed":case"source":case"link":vt("error",t),vt("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for($ in a)if(a.hasOwnProperty($)&&(o=a[$],o!=null))switch($){case"children":case"dangerouslySetInnerHTML":throw Error(r(137,n));default:Vt(t,n,$,o,a,null)}return;default:if(Mi(n)){for(de in a)a.hasOwnProperty(de)&&(o=a[de],o!==void 0&&gd(t,n,de,o,a,void 0));return}}for(T in a)a.hasOwnProperty(T)&&(o=a[T],o!=null&&Vt(t,n,T,o,a,null))}function Fy(t,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,f=null,x=null,T=null,B=null,$=null,de=null;for(le in a){var ge=a[le];if(a.hasOwnProperty(le)&&ge!=null)switch(le){case"checked":break;case"value":break;case"defaultValue":B=ge;default:o.hasOwnProperty(le)||Vt(t,n,le,null,o,ge)}}for(var te in o){var le=o[te];if(ge=a[te],o.hasOwnProperty(te)&&(le!=null||ge!=null))switch(te){case"type":f=le;break;case"name":u=le;break;case"checked":$=le;break;case"defaultChecked":de=le;break;case"value":x=le;break;case"defaultValue":T=le;break;case"children":case"dangerouslySetInnerHTML":if(le!=null)throw Error(r(137,n));break;default:le!==ge&&Vt(t,n,te,le,o,ge)}}Mn(t,x,T,B,$,de,f,u);return;case"select":le=x=T=te=null;for(f in a)if(B=a[f],a.hasOwnProperty(f)&&B!=null)switch(f){case"value":break;case"multiple":le=B;default:o.hasOwnProperty(f)||Vt(t,n,f,null,o,B)}for(u in o)if(f=o[u],B=a[u],o.hasOwnProperty(u)&&(f!=null||B!=null))switch(u){case"value":te=f;break;case"defaultValue":T=f;break;case"multiple":x=f;default:f!==B&&Vt(t,n,u,f,o,B)}n=T,a=x,o=le,te!=null?ci(t,!!a,te,!1):!!o!=!!a&&(n!=null?ci(t,!!a,n,!0):ci(t,!!a,a?[]:"",!1));return;case"textarea":le=te=null;for(T in a)if(u=a[T],a.hasOwnProperty(T)&&u!=null&&!o.hasOwnProperty(T))switch(T){case"value":break;case"children":break;default:Vt(t,n,T,null,o,u)}for(x in o)if(u=o[x],f=a[x],o.hasOwnProperty(x)&&(u!=null||f!=null))switch(x){case"value":te=u;break;case"defaultValue":le=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(r(91));break;default:u!==f&&Vt(t,n,x,u,o,f)}It(t,te,le);return;case"option":for(var ke in a)te=a[ke],a.hasOwnProperty(ke)&&te!=null&&!o.hasOwnProperty(ke)&&(ke==="selected"?t.selected=!1:Vt(t,n,ke,null,o,te));for(B in o)te=o[B],le=a[B],o.hasOwnProperty(B)&&te!==le&&(te!=null||le!=null)&&(B==="selected"?t.selected=te&&typeof te!="function"&&typeof te!="symbol":Vt(t,n,B,te,o,le));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var tt in a)te=a[tt],a.hasOwnProperty(tt)&&te!=null&&!o.hasOwnProperty(tt)&&Vt(t,n,tt,null,o,te);for($ in o)if(te=o[$],le=a[$],o.hasOwnProperty($)&&te!==le&&(te!=null||le!=null))switch($){case"children":case"dangerouslySetInnerHTML":if(te!=null)throw Error(r(137,n));break;default:Vt(t,n,$,te,o,le)}return;default:if(Mi(n)){for(var kt in a)te=a[kt],a.hasOwnProperty(kt)&&te!==void 0&&!o.hasOwnProperty(kt)&&gd(t,n,kt,void 0,o,te);for(de in o)te=o[de],le=a[de],!o.hasOwnProperty(de)||te===le||te===void 0&&le===void 0||gd(t,n,de,te,o,le);return}}for(var j in a)te=a[j],a.hasOwnProperty(j)&&te!=null&&!o.hasOwnProperty(j)&&Vt(t,n,j,null,o,te);for(ge in o)te=o[ge],le=a[ge],!o.hasOwnProperty(ge)||te===le||te==null&&le==null||Vt(t,n,ge,te,o,le)}function ev(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Iy(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var u=a[o],f=u.transferSize,x=u.initiatorType,T=u.duration;if(f&&T&&ev(x)){for(x=0,T=u.responseEnd,o+=1;o<a.length;o++){var B=a[o],$=B.startTime;if($>T)break;var de=B.transferSize,ge=B.initiatorType;de&&ev(ge)&&(B=B.responseEnd,x+=de*(B<T?1:(T-$)/(B-$)))}if(--o,n+=8*(f+x)/(u.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var vd=null,_d=null;function yc(t){return t.nodeType===9?t:t.ownerDocument}function tv(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function nv(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function xd(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var Sd=null;function By(){var t=window.event;return t&&t.type==="popstate"?t===Sd?!1:(Sd=t,!0):(Sd=null,!1)}var iv=typeof setTimeout=="function"?setTimeout:void 0,zy=typeof clearTimeout=="function"?clearTimeout:void 0,av=typeof Promise=="function"?Promise:void 0,Hy=typeof queueMicrotask=="function"?queueMicrotask:typeof av<"u"?function(t){return av.resolve(null).then(t).catch(Gy)}:iv;function Gy(t){setTimeout(function(){throw t})}function Wa(t){return t==="head"}function sv(t,n){var a=n,o=0;do{var u=a.nextSibling;if(t.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(o===0){t.removeChild(u),Mr(n);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")Xo(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,Xo(a);for(var f=a.firstChild;f;){var x=f.nextSibling,T=f.nodeName;f[cs]||T==="SCRIPT"||T==="STYLE"||T==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=x}}else a==="body"&&Xo(t.ownerDocument.body);a=u}while(a);Mr(n)}function rv(t,n){var a=t;t=0;do{var o=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=o}while(a)}function yd(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":yd(a),lo(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function Vy(t,n,a,o){for(;t.nodeType===1;){var u=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(o){if(!t[cs])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(f=t.getAttribute("rel"),f==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(f!==u.rel||t.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||t.getAttribute("title")!==(u.title==null?null:u.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(f=t.getAttribute("src"),(f!==(u.src==null?null:u.src)||t.getAttribute("type")!==(u.type==null?null:u.type)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&f&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var f=u.name==null?null:""+u.name;if(u.type==="hidden"&&t.getAttribute("name")===f)return t}else return t;if(t=gi(t.nextSibling),t===null)break}return null}function ky(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=gi(t.nextSibling),t===null))return null;return t}function ov(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=gi(t.nextSibling),t===null))return null;return t}function Md(t){return t.data==="$?"||t.data==="$~"}function bd(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function Xy(t,n){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||a.readyState!=="loading")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),t._reactRetry=o}}function gi(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var Ed=null;function lv(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(n===0)return gi(t.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}t=t.nextSibling}return null}function cv(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return t;n--}else a!=="/$"&&a!=="/&"||n++}t=t.previousSibling}return null}function uv(t,n,a){switch(n=yc(a),t){case"html":if(t=n.documentElement,!t)throw Error(r(452));return t;case"head":if(t=n.head,!t)throw Error(r(453));return t;case"body":if(t=n.body,!t)throw Error(r(454));return t;default:throw Error(r(451))}}function Xo(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);lo(t)}var vi=new Map,fv=new Set;function Mc(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var da=H.d;H.d={f:Wy,r:qy,D:jy,C:Yy,L:Zy,m:Ky,X:$y,S:Qy,M:Jy};function Wy(){var t=da.f(),n=hc();return t||n}function qy(t){var n=Aa(t);n!==null&&n.tag===5&&n.type==="form"?Cg(n):da.r(t)}var xr=typeof document>"u"?null:document;function dv(t,n,a){var o=xr;if(o&&typeof n=="string"&&n){var u=at(n);u='link[rel="'+t+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),fv.has(u)||(fv.add(u),t={rel:t,crossOrigin:a,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),Dn(n,"link",t),A(n),o.head.appendChild(n)))}}function jy(t){da.D(t),dv("dns-prefetch",t,null)}function Yy(t,n){da.C(t,n),dv("preconnect",t,n)}function Zy(t,n,a){da.L(t,n,a);var o=xr;if(o&&t&&n){var u='link[rel="preload"][as="'+at(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+at(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+at(a.imageSizes)+'"]')):u+='[href="'+at(t)+'"]';var f=u;switch(n){case"style":f=Sr(t);break;case"script":f=yr(t)}vi.has(f)||(t=v({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),vi.set(f,t),o.querySelector(u)!==null||n==="style"&&o.querySelector(Wo(f))||n==="script"&&o.querySelector(qo(f))||(n=o.createElement("link"),Dn(n,"link",t),A(n),o.head.appendChild(n)))}}function Ky(t,n){da.m(t,n);var a=xr;if(a&&t){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+at(o)+'"][href="'+at(t)+'"]',f=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=yr(t)}if(!vi.has(f)&&(t=v({rel:"modulepreload",href:t},n),vi.set(f,t),a.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(qo(f)))return}o=a.createElement("link"),Dn(o,"link",t),A(o),a.head.appendChild(o)}}}function Qy(t,n,a){da.S(t,n,a);var o=xr;if(o&&t){var u=Ra(o).hoistableStyles,f=Sr(t);n=n||"default";var x=u.get(f);if(!x){var T={loading:0,preload:null};if(x=o.querySelector(Wo(f)))T.loading=5;else{t=v({rel:"stylesheet",href:t,"data-precedence":n},a),(a=vi.get(f))&&Td(t,a);var B=x=o.createElement("link");A(B),Dn(B,"link",t),B._p=new Promise(function($,de){B.onload=$,B.onerror=de}),B.addEventListener("load",function(){T.loading|=1}),B.addEventListener("error",function(){T.loading|=2}),T.loading|=4,bc(x,n,o)}x={type:"stylesheet",instance:x,count:1,state:T},u.set(f,x)}}}function $y(t,n){da.X(t,n);var a=xr;if(a&&t){var o=Ra(a).hoistableScripts,u=yr(t),f=o.get(u);f||(f=a.querySelector(qo(u)),f||(t=v({src:t,async:!0},n),(n=vi.get(u))&&Ad(t,n),f=a.createElement("script"),A(f),Dn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(u,f))}}function Jy(t,n){da.M(t,n);var a=xr;if(a&&t){var o=Ra(a).hoistableScripts,u=yr(t),f=o.get(u);f||(f=a.querySelector(qo(u)),f||(t=v({src:t,async:!0,type:"module"},n),(n=vi.get(u))&&Ad(t,n),f=a.createElement("script"),A(f),Dn(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(u,f))}}function hv(t,n,a,o){var u=(u=ne.current)?Mc(u):null;if(!u)throw Error(r(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=Sr(a.href),a=Ra(u).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=Sr(a.href);var f=Ra(u).hoistableStyles,x=f.get(t);if(x||(u=u.ownerDocument||u,x={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(t,x),(f=u.querySelector(Wo(t)))&&!f._p&&(x.instance=f,x.state.loading=5),vi.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},vi.set(t,a),f||eM(u,t,a,x.state))),n&&o===null)throw Error(r(528,""));return x}if(n&&o!==null)throw Error(r(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=yr(a),a=Ra(u).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(r(444,t))}}function Sr(t){return'href="'+at(t)+'"'}function Wo(t){return'link[rel="stylesheet"]['+t+"]"}function pv(t){return v({},t,{"data-precedence":t.precedence,precedence:null})}function eM(t,n,a,o){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=t.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),Dn(n,"link",a),A(n),t.head.appendChild(n))}function yr(t){return'[src="'+at(t)+'"]'}function qo(t){return"script[async]"+t}function mv(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=t.querySelector('style[data-href~="'+at(a.href)+'"]');if(o)return n.instance=o,A(o),o;var u=v({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(t.ownerDocument||t).createElement("style"),A(o),Dn(o,"style",u),bc(o,a.precedence,t),n.instance=o;case"stylesheet":u=Sr(a.href);var f=t.querySelector(Wo(u));if(f)return n.state.loading|=4,n.instance=f,A(f),f;o=pv(a),(u=vi.get(u))&&Td(o,u),f=(t.ownerDocument||t).createElement("link"),A(f);var x=f;return x._p=new Promise(function(T,B){x.onload=T,x.onerror=B}),Dn(f,"link",o),n.state.loading|=4,bc(f,a.precedence,t),n.instance=f;case"script":return f=yr(a.src),(u=t.querySelector(qo(f)))?(n.instance=u,A(u),u):(o=a,(u=vi.get(f))&&(o=v({},a),Ad(o,u)),t=t.ownerDocument||t,u=t.createElement("script"),A(u),Dn(u,"link",o),t.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(r(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,bc(o,a.precedence,t));return n.instance}function bc(t,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,f=u,x=0;x<o.length;x++){var T=o[x];if(T.dataset.precedence===n)f=T;else if(f!==u)break}f?f.parentNode.insertBefore(t,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function Td(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function Ad(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var Ec=null;function gv(t,n,a){if(Ec===null){var o=new Map,u=Ec=new Map;u.set(a,o)}else u=Ec,o=u.get(a),o||(o=new Map,u.set(a,o));if(o.has(t))return o;for(o.set(t,null),a=a.getElementsByTagName(t),u=0;u<a.length;u++){var f=a[u];if(!(f[cs]||f[ln]||t==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var x=f.getAttribute(n)||"";x=t+x;var T=o.get(x);T?T.push(f):o.set(x,[f])}}return o}function vv(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function tM(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;return n.rel==="stylesheet"?(t=n.disabled,typeof n.precedence=="string"&&t==null):!0;case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function _v(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function nM(t,n,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=Sr(o.href),f=n.querySelector(Wo(u));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=Tc.bind(t),n.then(t,t)),a.state.loading|=4,a.instance=f,A(f);return}f=n.ownerDocument||n,o=pv(o),(u=vi.get(u))&&Td(o,u),f=f.createElement("link"),A(f);var x=f;x._p=new Promise(function(T,B){x.onload=T,x.onerror=B}),Dn(f,"link",o),a.instance=f}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=Tc.bind(t),n.addEventListener("load",a),n.addEventListener("error",a))}}var Rd=0;function iM(t,n){return t.stylesheets&&t.count===0&&Rc(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var o=setTimeout(function(){if(t.stylesheets&&Rc(t,t.stylesheets),t.unsuspend){var f=t.unsuspend;t.unsuspend=null,f()}},6e4+n);0<t.imgBytes&&Rd===0&&(Rd=62500*Iy());var u=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&Rc(t,t.stylesheets),t.unsuspend)){var f=t.unsuspend;t.unsuspend=null,f()}},(t.imgBytes>Rd?50:800)+n);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(o),clearTimeout(u)}}:null}function Tc(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Rc(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Ac=null;function Rc(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Ac=new Map,n.forEach(aM,t),Ac=null,Tc.call(t))}function aM(t,n){if(!(n.state.loading&4)){var a=Ac.get(t);if(a)var o=a.get(null);else{a=new Map,Ac.set(t,a);for(var u=t.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<u.length;f++){var x=u[f];(x.nodeName==="LINK"||x.getAttribute("media")!=="not all")&&(a.set(x.dataset.precedence,x),o=x)}o&&a.set(null,o)}u=n.instance,x=u.getAttribute("data-precedence"),f=a.get(x)||o,f===o&&a.set(null,u),a.set(x,u),this.count++,o=Tc.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),f?f.parentNode.insertBefore(u,f.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(u,t.firstChild)),n.state.loading|=4}}var jo={$$typeof:O,Provider:null,Consumer:null,_currentValue:ae,_currentValue2:ae,_threadCount:0};function sM(t,n,a,o,u,f,x,T,B){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Tt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Tt(0),this.hiddenUpdates=Tt(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=f,this.onRecoverableError=x,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=B,this.incompleteTransitions=new Map}function xv(t,n,a,o,u,f,x,T,B,$,de,ge){return t=new sM(t,n,a,x,B,$,de,ge,T),n=1,f===!0&&(n|=24),f=Kn(3,null,null,n),t.current=f,f.stateNode=t,n=rf(),n.refCount++,t.pooledCache=n,n.refCount++,f.memoizedState={element:o,isDehydrated:a,cache:n},uf(f),t}function Sv(t){return t?(t=$s,t):$s}function yv(t,n,a,o,u,f){u=Sv(u),o.context===null?o.context=u:o.pendingContext=u,o=Oa(n),o.payload={element:a},f=f===void 0?null:f,f!==null&&(o.callback=f),a=Pa(t,o,n),a!==null&&(Yn(a,t,n),To(a,t,n))}function Mv(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function Cd(t,n){Mv(t,n),(t=t.alternate)&&Mv(t,n)}function bv(t){if(t.tag===13||t.tag===31){var n=ps(t,67108864);n!==null&&Yn(n,t,67108864),Cd(t,67108864)}}function Ev(t){if(t.tag===13||t.tag===31){var n=ti();n=so(n);var a=ps(t,n);a!==null&&Yn(a,t,n),Cd(t,n)}}var Cc=!0;function rM(t,n,a,o){var u=P.T;P.T=null;var f=H.p;try{H.p=2,wd(t,n,a,o)}finally{H.p=f,P.T=u}}function oM(t,n,a,o){var u=P.T;P.T=null;var f=H.p;try{H.p=8,wd(t,n,a,o)}finally{H.p=f,P.T=u}}function wd(t,n,a,o){if(Cc){var u=Dd(o);if(u===null)md(t,n,o,wc,a),Av(t,o);else if(cM(u,t,n,a,o))o.stopPropagation();else if(Av(t,o),n&4&&-1<lM.indexOf(t)){for(;u!==null;){var f=Aa(u);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var x=ye(f.pendingLanes);if(x!==0){var T=f;for(T.pendingLanes|=2,T.entangledLanes|=2;x;){var B=1<<31-Fe(x);T.entanglements[1]|=B,x&=~B}zi(f),(Lt&6)===0&&(fc=b()+500,Go(0))}}break;case 31:case 13:T=ps(f,2),T!==null&&Yn(T,f,2),hc(),Cd(f,2)}if(f=Dd(o),f===null&&md(t,n,o,wc,a),f===u)break;u=f}u!==null&&o.stopPropagation()}else md(t,n,o,null,a)}}function Dd(t){return t=Uu(t),Ud(t)}var wc=null;function Ud(t){if(wc=null,t=Ta(t),t!==null){var n=c(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=h(n),t!==null)return t;t=null}else if(a===31){if(t=d(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return wc=t,null}function Tv(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(W()){case he:return 2;case xe:return 8;case ce:case Ke:return 32;case we:return 268435456;default:return 32}default:return 32}}var Nd=!1,qa=null,ja=null,Ya=null,Yo=new Map,Zo=new Map,Za=[],lM="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Av(t,n){switch(t){case"focusin":case"focusout":qa=null;break;case"dragenter":case"dragleave":ja=null;break;case"mouseover":case"mouseout":Ya=null;break;case"pointerover":case"pointerout":Yo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Zo.delete(n.pointerId)}}function Ko(t,n,a,o,u,f){return t===null||t.nativeEvent!==f?(t={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:f,targetContainers:[u]},n!==null&&(n=Aa(n),n!==null&&bv(n)),t):(t.eventSystemFlags|=o,n=t.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),t)}function cM(t,n,a,o,u){switch(n){case"focusin":return qa=Ko(qa,t,n,a,o,u),!0;case"dragenter":return ja=Ko(ja,t,n,a,o,u),!0;case"mouseover":return Ya=Ko(Ya,t,n,a,o,u),!0;case"pointerover":var f=u.pointerId;return Yo.set(f,Ko(Yo.get(f)||null,t,n,a,o,u)),!0;case"gotpointercapture":return f=u.pointerId,Zo.set(f,Ko(Zo.get(f)||null,t,n,a,o,u)),!0}return!1}function Rv(t){var n=Ta(t.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=h(a),n!==null){t.blockedOn=n,Pi(t.priority,function(){Ev(a)});return}}else if(n===31){if(n=d(a),n!==null){t.blockedOn=n,Pi(t.priority,function(){Ev(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Dc(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=Dd(t.nativeEvent);if(a===null){a=t.nativeEvent;var o=new a.constructor(a.type,a);Du=o,a.target.dispatchEvent(o),Du=null}else return n=Aa(a),n!==null&&bv(n),t.blockedOn=a,!1;n.shift()}return!0}function Cv(t,n,a){Dc(t)&&a.delete(n)}function uM(){Nd=!1,qa!==null&&Dc(qa)&&(qa=null),ja!==null&&Dc(ja)&&(ja=null),Ya!==null&&Dc(Ya)&&(Ya=null),Yo.forEach(Cv),Zo.forEach(Cv)}function Uc(t,n){t.blockedOn===n&&(t.blockedOn=null,Nd||(Nd=!0,s.unstable_scheduleCallback(s.unstable_NormalPriority,uM)))}var Nc=null;function wv(t){Nc!==t&&(Nc=t,s.unstable_scheduleCallback(s.unstable_NormalPriority,function(){Nc===t&&(Nc=null);for(var n=0;n<t.length;n+=3){var a=t[n],o=t[n+1],u=t[n+2];if(typeof o!="function"){if(Ud(o||a)===null)continue;break}var f=Aa(a);f!==null&&(t.splice(n,3),n-=3,Df(f,{pending:!0,data:u,method:a.method,action:o},o,u))}}))}function Mr(t){function n(B){return Uc(B,t)}qa!==null&&Uc(qa,t),ja!==null&&Uc(ja,t),Ya!==null&&Uc(Ya,t),Yo.forEach(n),Zo.forEach(n);for(var a=0;a<Za.length;a++){var o=Za[a];o.blockedOn===t&&(o.blockedOn=null)}for(;0<Za.length&&(a=Za[0],a.blockedOn===null);)Rv(a),a.blockedOn===null&&Za.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var u=a[o],f=a[o+1],x=u[yn]||null;if(typeof f=="function")x||wv(a);else if(x){var T=null;if(f&&f.hasAttribute("formAction")){if(u=f,x=f[yn]||null)T=x.formAction;else if(Ud(u)!==null)continue}else T=x.action;typeof T=="function"?a[o+1]=T:(a.splice(o,3),o-=3),wv(a)}}}function Dv(){function t(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(x){return u=x})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,u=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function Ld(t){this._internalRoot=t}Lc.prototype.render=Ld.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(r(409));var a=n.current,o=ti();yv(a,o,t,n,null,null)},Lc.prototype.unmount=Ld.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;yv(t.current,2,null,t,null,null),hc(),n[yi]=null}};function Lc(t){this._internalRoot=t}Lc.prototype.unstable_scheduleHydration=function(t){if(t){var n=ro();t={blockedOn:null,target:t,priority:n};for(var a=0;a<Za.length&&n!==0&&n<Za[a].priority;a++);Za.splice(a,0,t),a===0&&Rv(t)}};var Uv=e.version;if(Uv!=="19.2.4")throw Error(r(527,Uv,"19.2.4"));H.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(r(188)):(t=Object.keys(t).join(","),Error(r(268,t)));return t=m(n),t=t!==null?g(t):null,t=t===null?null:t.stateNode,t};var fM={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:P,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Oc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Oc.isDisabled&&Oc.supportsFiber)try{be=Oc.inject(fM),Ee=Oc}catch{}}return $o.createRoot=function(t,n){if(!l(t))throw Error(r(299));var a=!1,o="",u=Bg,f=zg,x=Hg;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(x=n.onRecoverableError)),n=xv(t,1,!1,null,null,a,o,null,u,f,x,Dv),t[yi]=n.current,pd(t),new Ld(n)},$o.hydrateRoot=function(t,n,a){if(!l(t))throw Error(r(299));var o=!1,u="",f=Bg,x=zg,T=Hg,B=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(x=a.onCaughtError),a.onRecoverableError!==void 0&&(T=a.onRecoverableError),a.formState!==void 0&&(B=a.formState)),n=xv(t,1,!0,n,a??null,o,u,B,f,x,T,Dv),n.context=Sv(null),a=n.current,o=ti(),o=so(o),u=Oa(o),u.callback=null,Pa(a,u,o),a=o,n.current.lanes=a,Nn(n,a),zi(n),t[yi]=n.current,pd(t),new Lc(n)},$o.version="19.2.4",$o}var Gv;function MM(){if(Gv)return Fd.exports;Gv=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),Fd.exports=yM(),Fd.exports}var bM=MM();const EM=typeof document<"u"?oi.useLayoutEffect:()=>{},ls=s=>{var e;return(e=s?.ownerDocument)!==null&&e!==void 0?e:document},Ps=s=>s&&"window"in s&&s.window===s?s:ls(s).defaultView||window;function TM(s){return s!==null&&typeof s=="object"&&"nodeType"in s&&typeof s.nodeType=="number"}function AM(s){return TM(s)&&s.nodeType===Node.DOCUMENT_FRAGMENT_NODE&&"host"in s}let RM=!1;function Ap(){return RM}function sx(s,e){if(!Ap())return e&&s?s.contains(e):!1;if(!s||!e)return!1;let i=e;for(;i!==null;){if(i===s)return!0;i.tagName==="SLOT"&&i.assignedSlot?i=i.assignedSlot.parentNode:AM(i)?i=i.host:i=i.parentNode}return!1}const yh=(s=document)=>{var e;if(!Ap())return s.activeElement;let i=s.activeElement;for(;i&&"shadowRoot"in i&&(!((e=i.shadowRoot)===null||e===void 0)&&e.activeElement);)i=i.shadowRoot.activeElement;return i};function rx(s){return Ap()&&s.target.shadowRoot&&s.composedPath?s.composedPath()[0]:s.target}function CM(s){if(wM())s.focus({preventScroll:!0});else{let e=DM(s);s.focus(),UM(e)}}let Pc=null;function wM(){if(Pc==null){Pc=!1;try{document.createElement("div").focus({get preventScroll(){return Pc=!0,!0}})}catch{}}return Pc}function DM(s){let e=s.parentNode,i=[],r=document.scrollingElement||document.documentElement;for(;e instanceof HTMLElement&&e!==r;)(e.offsetHeight<e.scrollHeight||e.offsetWidth<e.scrollWidth)&&i.push({element:e,scrollTop:e.scrollTop,scrollLeft:e.scrollLeft}),e=e.parentNode;return r instanceof HTMLElement&&i.push({element:r,scrollTop:r.scrollTop,scrollLeft:r.scrollLeft}),i}function UM(s){for(let{element:e,scrollTop:i,scrollLeft:r}of s)e.scrollTop=i,e.scrollLeft=r}function yu(s){var e;if(typeof window>"u"||window.navigator==null)return!1;let i=(e=window.navigator.userAgentData)===null||e===void 0?void 0:e.brands;return Array.isArray(i)&&i.some(r=>s.test(r.brand))||s.test(window.navigator.userAgent)}function ox(s){var e;return typeof window<"u"&&window.navigator!=null?s.test(((e=window.navigator.userAgentData)===null||e===void 0?void 0:e.platform)||window.navigator.platform):!1}function $r(s){let e=null;return()=>(e==null&&(e=s()),e)}const gu=$r(function(){return ox(/^Mac/i)}),NM=$r(function(){return ox(/^iPad/i)||gu()&&navigator.maxTouchPoints>1}),LM=$r(function(){return yu(/AppleWebKit/i)&&!OM()}),OM=$r(function(){return yu(/Chrome/i)}),PM=$r(function(){return yu(/Android/i)}),FM=$r(function(){return yu(/Firefox/i)});function hl(s,e,i=!0){var r,l;let{metaKey:c,ctrlKey:h,altKey:d,shiftKey:p}=e;FM()&&(!((l=window.event)===null||l===void 0||(r=l.type)===null||r===void 0)&&r.startsWith("key"))&&s.target==="_blank"&&(gu()?c=!0:h=!0);let m=LM()&&gu()&&!NM()?new KeyboardEvent("keydown",{keyIdentifier:"Enter",metaKey:c,ctrlKey:h,altKey:d,shiftKey:p}):new MouseEvent("click",{metaKey:c,ctrlKey:h,altKey:d,shiftKey:p,detail:1,bubbles:!0,cancelable:!0});hl.isOpening=i,CM(s),s.dispatchEvent(m),hl.isOpening=!1}hl.isOpening=!1;function lx(){let s=Ae.useRef(new Map),e=Ae.useCallback((l,c,h,d)=>{let p=d?.once?(...m)=>{s.current.delete(h),h(...m)}:h;s.current.set(h,{type:c,eventTarget:l,fn:p,options:d}),l.addEventListener(c,p,d)},[]),i=Ae.useCallback((l,c,h,d)=>{var p;let m=((p=s.current.get(h))===null||p===void 0?void 0:p.fn)||h;l.removeEventListener(c,m,d),s.current.delete(h)},[]),r=Ae.useCallback(()=>{s.current.forEach((l,c)=>{i(l.eventTarget,l.type,c,l.options)})},[i]);return Ae.useEffect(()=>r,[r]),{addGlobalListener:e,removeGlobalListener:i,removeAllGlobalListeners:r}}function IM(s){return s.pointerType===""&&s.isTrusted?!0:PM()&&s.pointerType?s.type==="click"&&s.buttons===1:s.detail===0&&!s.pointerType}function cx(s){let e=s;return e.nativeEvent=s,e.isDefaultPrevented=()=>e.defaultPrevented,e.isPropagationStopped=()=>e.cancelBubble,e.persist=()=>{},e}function BM(s,e){Object.defineProperty(s,"target",{value:e}),Object.defineProperty(s,"currentTarget",{value:e})}function ux(s){let e=Ae.useRef({isFocused:!1,observer:null});return EM(()=>{const i=e.current;return()=>{i.observer&&(i.observer.disconnect(),i.observer=null)}},[]),Ae.useCallback(i=>{if(i.target instanceof HTMLButtonElement||i.target instanceof HTMLInputElement||i.target instanceof HTMLTextAreaElement||i.target instanceof HTMLSelectElement){e.current.isFocused=!0;let r=i.target,l=c=>{if(e.current.isFocused=!1,r.disabled){let h=cx(c);s?.(h)}e.current.observer&&(e.current.observer.disconnect(),e.current.observer=null)};r.addEventListener("focusout",l,{once:!0}),e.current.observer=new MutationObserver(()=>{if(e.current.isFocused&&r.disabled){var c;(c=e.current.observer)===null||c===void 0||c.disconnect();let h=r===document.activeElement?null:document.activeElement;r.dispatchEvent(new FocusEvent("blur",{relatedTarget:h})),r.dispatchEvent(new FocusEvent("focusout",{bubbles:!0,relatedTarget:h}))}}),e.current.observer.observe(r,{attributes:!0,attributeFilter:["disabled"]})}},[s])}let zM=!1,Sl=null,Mh=new Set,cl=new Map,Bs=!1,bh=!1;const HM={Tab:!0,Escape:!0};function Rp(s,e){for(let i of Mh)i(s,e)}function GM(s){return!(s.metaKey||!gu()&&s.altKey||s.ctrlKey||s.key==="Control"||s.key==="Shift"||s.key==="Meta")}function vu(s){Bs=!0,!hl.isOpening&&GM(s)&&(Sl="keyboard",Rp("keyboard",s))}function Xr(s){Sl="pointer","pointerType"in s&&s.pointerType,(s.type==="mousedown"||s.type==="pointerdown")&&(Bs=!0,Rp("pointer",s))}function fx(s){!hl.isOpening&&IM(s)&&(Bs=!0,Sl="virtual")}function dx(s){s.target===window||s.target===document||zM||!s.isTrusted||(!Bs&&!bh&&(Sl="virtual",Rp("virtual",s)),Bs=!1,bh=!1)}function hx(){Bs=!1,bh=!0}function Eh(s){if(typeof window>"u"||typeof document>"u"||cl.get(Ps(s)))return;const e=Ps(s),i=ls(s);let r=e.HTMLElement.prototype.focus;e.HTMLElement.prototype.focus=function(){Bs=!0,r.apply(this,arguments)},i.addEventListener("keydown",vu,!0),i.addEventListener("keyup",vu,!0),i.addEventListener("click",fx,!0),e.addEventListener("focus",dx,!0),e.addEventListener("blur",hx,!1),typeof PointerEvent<"u"&&(i.addEventListener("pointerdown",Xr,!0),i.addEventListener("pointermove",Xr,!0),i.addEventListener("pointerup",Xr,!0)),e.addEventListener("beforeunload",()=>{px(s)},{once:!0}),cl.set(e,{focus:r})}const px=(s,e)=>{const i=Ps(s),r=ls(s);e&&r.removeEventListener("DOMContentLoaded",e),cl.has(i)&&(i.HTMLElement.prototype.focus=cl.get(i).focus,r.removeEventListener("keydown",vu,!0),r.removeEventListener("keyup",vu,!0),r.removeEventListener("click",fx,!0),i.removeEventListener("focus",dx,!0),i.removeEventListener("blur",hx,!1),typeof PointerEvent<"u"&&(r.removeEventListener("pointerdown",Xr,!0),r.removeEventListener("pointermove",Xr,!0),r.removeEventListener("pointerup",Xr,!0)),cl.delete(i))};function VM(s){const e=ls(s);let i;return e.readyState!=="loading"?Eh(s):(i=()=>{Eh(s)},e.addEventListener("DOMContentLoaded",i)),()=>px(s,i)}typeof document<"u"&&VM();function mx(){return Sl!=="pointer"}const kM=new Set(["checkbox","radio","range","color","file","image","button","submit","reset"]);function XM(s,e,i){let r=ls(i?.target);const l=typeof window<"u"?Ps(i?.target).HTMLInputElement:HTMLInputElement,c=typeof window<"u"?Ps(i?.target).HTMLTextAreaElement:HTMLTextAreaElement,h=typeof window<"u"?Ps(i?.target).HTMLElement:HTMLElement,d=typeof window<"u"?Ps(i?.target).KeyboardEvent:KeyboardEvent;return s=s||r.activeElement instanceof l&&!kM.has(r.activeElement.type)||r.activeElement instanceof c||r.activeElement instanceof h&&r.activeElement.isContentEditable,!(s&&e==="keyboard"&&i instanceof d&&!HM[i.key])}function WM(s,e,i){Eh(),Ae.useEffect(()=>{let r=(l,c)=>{XM(!!i?.isTextInput,l,c)&&s(mx())};return Mh.add(r),()=>{Mh.delete(r)}},e)}function qM(s){let{isDisabled:e,onFocus:i,onBlur:r,onFocusChange:l}=s;const c=Ae.useCallback(p=>{if(p.target===p.currentTarget)return r&&r(p),l&&l(!1),!0},[r,l]),h=ux(c),d=Ae.useCallback(p=>{const m=ls(p.target),g=m?yh(m):yh();p.target===p.currentTarget&&g===rx(p.nativeEvent)&&(i&&i(p),l&&l(!0),h(p))},[l,i,h]);return{focusProps:{onFocus:!e&&(i||l||r)?d:void 0,onBlur:!e&&(r||l)?c:void 0}}}function jM(s){let{isDisabled:e,onBlurWithin:i,onFocusWithin:r,onFocusWithinChange:l}=s,c=Ae.useRef({isFocusWithin:!1}),{addGlobalListener:h,removeAllGlobalListeners:d}=lx(),p=Ae.useCallback(v=>{v.currentTarget.contains(v.target)&&c.current.isFocusWithin&&!v.currentTarget.contains(v.relatedTarget)&&(c.current.isFocusWithin=!1,d(),i&&i(v),l&&l(!1))},[i,l,c,d]),m=ux(p),g=Ae.useCallback(v=>{if(!v.currentTarget.contains(v.target))return;const S=ls(v.target),y=yh(S);if(!c.current.isFocusWithin&&y===rx(v.nativeEvent)){r&&r(v),l&&l(!0),c.current.isFocusWithin=!0,m(v);let E=v.currentTarget;h(S,"focus",R=>{if(c.current.isFocusWithin&&!sx(E,R.target)){let M=new S.defaultView.FocusEvent("blur",{relatedTarget:R.target});BM(M,E);let _=cx(M);p(_)}},{capture:!0})}},[r,l,m,h,p]);return e?{focusWithinProps:{onFocus:void 0,onBlur:void 0}}:{focusWithinProps:{onFocus:g,onBlur:p}}}let Th=!1,Fc=0;function YM(){Th=!0,setTimeout(()=>{Th=!1},50)}function Vv(s){s.pointerType==="touch"&&YM()}function ZM(){if(!(typeof document>"u"))return Fc===0&&typeof PointerEvent<"u"&&document.addEventListener("pointerup",Vv),Fc++,()=>{Fc--,!(Fc>0)&&typeof PointerEvent<"u"&&document.removeEventListener("pointerup",Vv)}}function KM(s){let{onHoverStart:e,onHoverChange:i,onHoverEnd:r,isDisabled:l}=s,[c,h]=Ae.useState(!1),d=Ae.useRef({isHovered:!1,ignoreEmulatedMouseEvents:!1,pointerType:"",target:null}).current;Ae.useEffect(ZM,[]);let{addGlobalListener:p,removeAllGlobalListeners:m}=lx(),{hoverProps:g,triggerHoverEnd:v}=Ae.useMemo(()=>{let S=(R,M)=>{if(d.pointerType=M,l||M==="touch"||d.isHovered||!R.currentTarget.contains(R.target))return;d.isHovered=!0;let _=R.currentTarget;d.target=_,p(ls(R.target),"pointerover",N=>{d.isHovered&&d.target&&!sx(d.target,N.target)&&y(N,N.pointerType)},{capture:!0}),e&&e({type:"hoverstart",target:_,pointerType:M}),i&&i(!0),h(!0)},y=(R,M)=>{let _=d.target;d.pointerType="",d.target=null,!(M==="touch"||!d.isHovered||!_)&&(d.isHovered=!1,m(),r&&r({type:"hoverend",target:_,pointerType:M}),i&&i(!1),h(!1))},E={};return typeof PointerEvent<"u"&&(E.onPointerEnter=R=>{Th&&R.pointerType==="mouse"||S(R,R.pointerType)},E.onPointerLeave=R=>{!l&&R.currentTarget.contains(R.target)&&y(R,R.pointerType)}),{hoverProps:E,triggerHoverEnd:y}},[e,i,r,l,d,p,m]);return Ae.useEffect(()=>{l&&v({currentTarget:d.target},d.pointerType)},[l]),{hoverProps:g,isHovered:c}}function QM(s={}){let{autoFocus:e=!1,isTextInput:i,within:r}=s,l=Ae.useRef({isFocused:!1,isFocusVisible:e||mx()}),[c,h]=Ae.useState(!1),[d,p]=Ae.useState(()=>l.current.isFocused&&l.current.isFocusVisible),m=Ae.useCallback(()=>p(l.current.isFocused&&l.current.isFocusVisible),[]),g=Ae.useCallback(y=>{l.current.isFocused=y,h(y),m()},[m]);WM(y=>{l.current.isFocusVisible=y,m()},[],{isTextInput:i});let{focusProps:v}=qM({isDisabled:r,onFocusChange:g}),{focusWithinProps:S}=jM({isDisabled:!r,onFocusWithinChange:g});return{isFocused:c,isFocusVisible:d,focusProps:r?S:v}}var $M=Object.defineProperty,JM=(s,e,i)=>e in s?$M(s,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):s[e]=i,Hd=(s,e,i)=>(JM(s,typeof e!="symbol"?e+"":e,i),i);let eb=class{constructor(){Hd(this,"current",this.detect()),Hd(this,"handoffState","pending"),Hd(this,"currentId",0)}set(e){this.current!==e&&(this.handoffState="pending",this.currentId=0,this.current=e)}reset(){this.set(this.detect())}nextId(){return++this.currentId}get isServer(){return this.current==="server"}get isClient(){return this.current==="client"}detect(){return typeof window>"u"||typeof document>"u"?"server":"client"}handoff(){this.handoffState==="pending"&&(this.handoffState="complete")}get isHandoffComplete(){return this.handoffState==="complete"}},gx=new eb;function vx(s){var e;return gx.isServer?null:s==null?document:(e=s?.ownerDocument)!=null?e:document}function tb(s){typeof queueMicrotask=="function"?queueMicrotask(s):Promise.resolve().then(s).catch(e=>setTimeout(()=>{throw e}))}function Mu(){let s=[],e={addEventListener(i,r,l,c){return i.addEventListener(r,l,c),e.add(()=>i.removeEventListener(r,l,c))},requestAnimationFrame(...i){let r=requestAnimationFrame(...i);return e.add(()=>cancelAnimationFrame(r))},nextFrame(...i){return e.requestAnimationFrame(()=>e.requestAnimationFrame(...i))},setTimeout(...i){let r=setTimeout(...i);return e.add(()=>clearTimeout(r))},microTask(...i){let r={current:!0};return tb(()=>{r.current&&i[0]()}),e.add(()=>{r.current=!1})},style(i,r,l){let c=i.style.getPropertyValue(r);return Object.assign(i.style,{[r]:l}),this.add(()=>{Object.assign(i.style,{[r]:c})})},group(i){let r=Mu();return i(r),this.add(()=>r.dispose())},add(i){return s.includes(i)||s.push(i),()=>{let r=s.indexOf(i);if(r>=0)for(let l of s.splice(r,1))l()}},dispose(){for(let i of s.splice(0))i()}};return e}function _x(){let[s]=Ae.useState(Mu);return Ae.useEffect(()=>()=>s.dispose(),[s]),s}let xx=(s,e)=>{gx.isServer?Ae.useEffect(s,e):Ae.useLayoutEffect(s,e)};function nb(s){let e=Ae.useRef(s);return xx(()=>{e.current=s},[s]),e}let xa=function(s){let e=nb(s);return oi.useCallback((...i)=>e.current(...i),[e])};function ib(s){let e=s.width/2,i=s.height/2;return{top:s.clientY-i,right:s.clientX+e,bottom:s.clientY+i,left:s.clientX-e}}function ab(s,e){return!(!s||!e||s.right<e.left||s.left>e.right||s.bottom<e.top||s.top>e.bottom)}function sb({disabled:s=!1}={}){let e=Ae.useRef(null),[i,r]=Ae.useState(!1),l=_x(),c=xa(()=>{e.current=null,r(!1),l.dispose()}),h=xa(d=>{if(l.dispose(),e.current===null){e.current=d.currentTarget,r(!0);{let p=vx(d.currentTarget);l.addEventListener(p,"pointerup",c,!1),l.addEventListener(p,"pointermove",m=>{if(e.current){let g=ib(m);r(ab(g,e.current.getBoundingClientRect()))}},!1),l.addEventListener(p,"pointercancel",c,!1)}}});return{pressed:i,pressProps:s?{}:{onPointerDown:h,onPointerUp:c,onClick:c}}}function Cp(s){return Ae.useMemo(()=>s,Object.values(s))}function kv(...s){return Array.from(new Set(s.flatMap(e=>typeof e=="string"?e.split(" "):[]))).filter(Boolean).join(" ")}function yl(s,e,...i){if(s in e){let l=e[s];return typeof l=="function"?l(...i):l}let r=new Error(`Tried to handle "${s}" but there is no handler defined. Only defined handlers are: ${Object.keys(e).map(l=>`"${l}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,yl),r}var Ah=(s=>(s[s.None=0]="None",s[s.RenderStrategy=1]="RenderStrategy",s[s.Static=2]="Static",s))(Ah||{}),rb=(s=>(s[s.Unmount=0]="Unmount",s[s.Hidden=1]="Hidden",s))(rb||{});function wp(){let s=lb();return Ae.useCallback(e=>ob({mergeRefs:s,...e}),[s])}function ob({ourProps:s,theirProps:e,slot:i,defaultTag:r,features:l,visible:c=!0,name:h,mergeRefs:d}){d=d??cb;let p=Sx(e,s);if(c)return Ic(p,i,r,h,d);let m=l??0;if(m&2){let{static:g=!1,...v}=p;if(g)return Ic(v,i,r,h,d)}if(m&1){let{unmount:g=!0,...v}=p;return yl(g?0:1,{0(){return null},1(){return Ic({...v,hidden:!0,style:{display:"none"}},i,r,h,d)}})}return Ic(p,i,r,h,d)}function Ic(s,e={},i,r,l){let{as:c=i,children:h,refName:d="ref",...p}=Gd(s,["unmount","static"]),m=s.ref!==void 0?{[d]:s.ref}:{},g=typeof h=="function"?h(e):h;"className"in p&&p.className&&typeof p.className=="function"&&(p.className=p.className(e)),p["aria-labelledby"]&&p["aria-labelledby"]===p.id&&(p["aria-labelledby"]=void 0);let v={};if(e){let S=!1,y=[];for(let[E,R]of Object.entries(e))typeof R=="boolean"&&(S=!0),R===!0&&y.push(E.replace(/([A-Z])/g,M=>`-${M.toLowerCase()}`));if(S){v["data-headlessui-state"]=y.join(" ");for(let E of y)v[`data-${E}`]=""}}if(ul(c)&&(Object.keys(br(p)).length>0||Object.keys(br(v)).length>0))if(!Ae.isValidElement(g)||Array.isArray(g)&&g.length>1||fb(g)){if(Object.keys(br(p)).length>0)throw new Error(['Passing props on "Fragment"!',"",`The current component <${r} /> is rendering a "Fragment".`,"However we need to passthrough the following props:",Object.keys(br(p)).concat(Object.keys(br(v))).map(S=>`  - ${S}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',"Render a single element as the child so that we can forward the props onto that element."].map(S=>`  - ${S}`).join(`
`)].join(`
`))}else{let S=g.props,y=S?.className,E=typeof y=="function"?(..._)=>kv(y(..._),p.className):kv(y,p.className),R=E?{className:E}:{},M=Sx(g.props,br(Gd(p,["ref"])));for(let _ in v)_ in M&&delete v[_];return Ae.cloneElement(g,Object.assign({},M,v,m,{ref:l(ub(g),m.ref)},R))}return Ae.createElement(c,Object.assign({},Gd(p,["ref"]),!ul(c)&&m,!ul(c)&&v),g)}function lb(){let s=Ae.useRef([]),e=Ae.useCallback(i=>{for(let r of s.current)r!=null&&(typeof r=="function"?r(i):r.current=i)},[]);return(...i)=>{if(!i.every(r=>r==null))return s.current=i,e}}function cb(...s){return s.every(e=>e==null)?void 0:e=>{for(let i of s)i!=null&&(typeof i=="function"?i(e):i.current=e)}}function Sx(...s){if(s.length===0)return{};if(s.length===1)return s[0];let e={},i={};for(let r of s)for(let l in r)l.startsWith("on")&&typeof r[l]=="function"?(i[l]!=null||(i[l]=[]),i[l].push(r[l])):e[l]=r[l];if(e.disabled||e["aria-disabled"])for(let r in i)/^(on(?:Click|Pointer|Mouse|Key)(?:Down|Up|Press)?)$/.test(r)&&(i[r]=[l=>{var c;return(c=l?.preventDefault)==null?void 0:c.call(l)}]);for(let r in i)Object.assign(e,{[r](l,...c){let h=i[r];for(let d of h){if((l instanceof Event||l?.nativeEvent instanceof Event)&&l.defaultPrevented)return;d(l,...c)}}});return e}function Xv(...s){if(s.length===0)return{};if(s.length===1)return s[0];let e={},i={};for(let r of s)for(let l in r)l.startsWith("on")&&typeof r[l]=="function"?(i[l]!=null||(i[l]=[]),i[l].push(r[l])):e[l]=r[l];for(let r in i)Object.assign(e,{[r](...l){let c=i[r];for(let h of c)h?.(...l)}});return e}function Dp(s){var e;return Object.assign(Ae.forwardRef(s),{displayName:(e=s.displayName)!=null?e:s.name})}function br(s){let e=Object.assign({},s);for(let i in e)e[i]===void 0&&delete e[i];return e}function Gd(s,e=[]){let i=Object.assign({},s);for(let r of e)r in i&&delete i[r];return i}function ub(s){return oi.version.split(".")[0]>="19"?s.props.ref:s.ref}function ul(s){return s===Ae.Fragment||s===Symbol.for("react.fragment")}function fb(s){return ul(s.type)}function db(s){return typeof s!="object"||s===null?!1:"nodeType"in s}function yx(s){return db(s)&&"tagName"in s}function Mx(s){return yx(s)&&"accessKey"in s}function Wv(s){return yx(s)&&"tabIndex"in s}function hb(s){return Mx(s)&&s.nodeName==="FIELDSET"}function bx(s){return Mx(s)&&s.nodeName==="LEGEND"}function pb(s){let e=s.parentElement,i=null;for(;e&&!hb(e);)bx(e)&&(i=e),e=e.parentElement;let r=e?.getAttribute("disabled")==="";return r&&mb(i)?!1:r}function mb(s){if(!s)return!1;let e=s.previousElementSibling;for(;e!==null;){if(bx(e))return!1;e=e.previousElementSibling}return!0}let Ex=Symbol();function gb(s,e=!0){return Object.assign(s,{[Ex]:e})}function Up(...s){let e=Ae.useRef(s);Ae.useEffect(()=>{e.current=s},[s]);let i=xa(r=>{for(let l of e.current)l!=null&&(typeof l=="function"?l(r):l.current=r)});return s.every(r=>r==null||r?.[Ex])?void 0:i}var Vr=(s=>(s.Space=" ",s.Enter="Enter",s.Escape="Escape",s.Backspace="Backspace",s.Delete="Delete",s.ArrowLeft="ArrowLeft",s.ArrowUp="ArrowUp",s.ArrowRight="ArrowRight",s.ArrowDown="ArrowDown",s.Home="Home",s.End="End",s.PageUp="PageUp",s.PageDown="PageDown",s.Tab="Tab",s))(Vr||{});let vb=Ae.createContext(()=>{});function _b({value:s,children:e}){return oi.createElement(vb.Provider,{value:s},e)}function xb(s,e){return Ae.useMemo(()=>{var i;if(s.type)return s.type;let r=(i=s.as)!=null?i:"button";if(typeof r=="string"&&r.toLowerCase()==="button"||e?.tagName==="BUTTON"&&!e.hasAttribute("type"))return"button"},[s.type,s.as,e])}function Sb(s=0){let[e,i]=Ae.useState(s),r=Ae.useCallback(p=>i(p),[]),l=Ae.useCallback(p=>i(m=>m|p),[]),c=Ae.useCallback(p=>(e&p)===p,[e]),h=Ae.useCallback(p=>i(m=>m&~p),[]),d=Ae.useCallback(p=>i(m=>m^p),[]);return{flags:e,setFlag:r,addFlag:l,hasFlag:c,removeFlag:h,toggleFlag:d}}var yb={},qv,jv;typeof process<"u"&&typeof globalThis<"u"&&typeof Element<"u"&&((qv=process==null?void 0:yb)==null?void 0:qv.NODE_ENV)==="test"&&typeof((jv=Element?.prototype)==null?void 0:jv.getAnimations)>"u"&&(Element.prototype.getAnimations=function(){return console.warn(["Headless UI has polyfilled `Element.prototype.getAnimations` for your tests.","Please install a proper polyfill e.g. `jsdom-testing-mocks`, to silence these warnings.","","Example usage:","```js","import { mockAnimationsApi } from 'jsdom-testing-mocks'","mockAnimationsApi()","```"].join(`
`)),[]});var Mb=(s=>(s[s.None=0]="None",s[s.Closed=1]="Closed",s[s.Enter=2]="Enter",s[s.Leave=4]="Leave",s))(Mb||{});function bb(s){let e={};for(let i in s)s[i]===!0&&(e[`data-${i}`]="");return e}function Eb(s,e,i,r){let[l,c]=Ae.useState(i),{hasFlag:h,addFlag:d,removeFlag:p}=Sb(s&&l?3:0),m=Ae.useRef(!1),g=Ae.useRef(!1),v=_x();return xx(()=>{var S;if(s){if(i&&c(!0),!e){i&&d(3);return}return(S=void 0)==null||S.call(r,i),Tb(e,{inFlight:m,prepare(){g.current?g.current=!1:g.current=m.current,m.current=!0,!g.current&&(i?(d(3),p(4)):(d(4),p(2)))},run(){g.current?i?(p(3),d(4)):(p(4),d(3)):i?p(1):d(1)},done(){var y;g.current&&Cb(e)||(m.current=!1,p(7),i||c(!1),(y=void 0)==null||y.call(r,i))}})}},[s,i,e,v]),s?[l,{closed:h(1),enter:h(2),leave:h(4),transition:h(2)||h(4)}]:[i,{closed:void 0,enter:void 0,leave:void 0,transition:void 0}]}function Tb(s,{prepare:e,run:i,done:r,inFlight:l}){let c=Mu();return Rb(s,{prepare:e,inFlight:l}),c.nextFrame(()=>{i(),c.requestAnimationFrame(()=>{c.add(Ab(s,r))})}),c.dispose}function Ab(s,e){var i,r;let l=Mu();if(!s)return l.dispose;let c=!1;l.add(()=>{c=!0});let h=(r=(i=s.getAnimations)==null?void 0:i.call(s).filter(d=>d instanceof CSSTransition))!=null?r:[];return h.length===0?(e(),l.dispose):(Promise.allSettled(h.map(d=>d.finished)).then(()=>{c||e()}),l.dispose)}function Rb(s,{inFlight:e,prepare:i}){if(e!=null&&e.current){i();return}let r=s.style.transition;s.style.transition="none",i(),s.offsetHeight,s.style.transition=r}function Cb(s){var e,i;return((i=(e=s.getAnimations)==null?void 0:e.call(s))!=null?i:[]).some(r=>r instanceof CSSTransition&&r.playState!=="finished")}let bu=Ae.createContext(null);bu.displayName="OpenClosedContext";var pl=(s=>(s[s.Open=1]="Open",s[s.Closed=2]="Closed",s[s.Closing=4]="Closing",s[s.Opening=8]="Opening",s))(pl||{});function wb(){return Ae.useContext(bu)}function Db({value:s,children:e}){return oi.createElement(bu.Provider,{value:s},e)}function Ub({children:s}){return oi.createElement(bu.Provider,{value:null},s)}var Yv;let Nb=(Yv=oi.startTransition)!=null?Yv:function(s){s()};var Lb=(s=>(s[s.Open=0]="Open",s[s.Closed=1]="Closed",s))(Lb||{}),Ob=(s=>(s[s.ToggleDisclosure=0]="ToggleDisclosure",s[s.CloseDisclosure=1]="CloseDisclosure",s[s.SetButtonId=2]="SetButtonId",s[s.SetPanelId=3]="SetPanelId",s[s.SetButtonElement=4]="SetButtonElement",s[s.SetPanelElement=5]="SetPanelElement",s))(Ob||{});let Pb={0:s=>({...s,disclosureState:yl(s.disclosureState,{0:1,1:0})}),1:s=>s.disclosureState===1?s:{...s,disclosureState:1},2(s,e){return s.buttonId===e.buttonId?s:{...s,buttonId:e.buttonId}},3(s,e){return s.panelId===e.panelId?s:{...s,panelId:e.panelId}},4(s,e){return s.buttonElement===e.element?s:{...s,buttonElement:e.element}},5(s,e){return s.panelElement===e.element?s:{...s,panelElement:e.element}}},Np=Ae.createContext(null);Np.displayName="DisclosureContext";function Lp(s){let e=Ae.useContext(Np);if(e===null){let i=new Error(`<${s} /> is missing a parent <Disclosure /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(i,Lp),i}return e}let Op=Ae.createContext(null);Op.displayName="DisclosureAPIContext";function Tx(s){let e=Ae.useContext(Op);if(e===null){let i=new Error(`<${s} /> is missing a parent <Disclosure /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(i,Tx),i}return e}let Pp=Ae.createContext(null);Pp.displayName="DisclosurePanelContext";function Fb(){return Ae.useContext(Pp)}function Ib(s,e){return yl(e.type,Pb,s,e)}let Bb=Ae.Fragment;function zb(s,e){let{defaultOpen:i=!1,...r}=s,l=Ae.useRef(null),c=Up(e,gb(R=>{l.current=R},s.as===void 0||ul(s.as))),h=Ae.useReducer(Ib,{disclosureState:i?0:1,buttonElement:null,panelElement:null,buttonId:null,panelId:null}),[{disclosureState:d,buttonId:p},m]=h,g=xa(R=>{m({type:1});let M=vx(l.current);if(!M||!p)return;let _=R?Wv(R)?R:"current"in R&&Wv(R.current)?R.current:M.getElementById(p):M.getElementById(p);_?.focus()}),v=Ae.useMemo(()=>({close:g}),[g]),S=Cp({open:d===0,close:g}),y={ref:c},E=wp();return oi.createElement(Np.Provider,{value:h},oi.createElement(Op.Provider,{value:v},oi.createElement(_b,{value:g},oi.createElement(Db,{value:yl(d,{0:pl.Open,1:pl.Closed})},E({ourProps:y,theirProps:r,slot:S,defaultTag:Bb,name:"Disclosure"})))))}let Hb="button";function Gb(s,e){let i=Ae.useId(),{id:r=`headlessui-disclosure-button-${i}`,disabled:l=!1,autoFocus:c=!1,...h}=s,[d,p]=Lp("Disclosure.Button"),m=Fb(),g=m===null?!1:m===d.panelId,v=Ae.useRef(null),S=Up(v,e,xa(C=>{if(!g)return p({type:4,element:C})}));Ae.useEffect(()=>{if(!g)return p({type:2,buttonId:r}),()=>{p({type:2,buttonId:null})}},[r,p,g]);let y=xa(C=>{var w;if(g){if(d.disclosureState===1)return;switch(C.key){case Vr.Space:case Vr.Enter:C.preventDefault(),C.stopPropagation(),p({type:0}),(w=d.buttonElement)==null||w.focus();break}}else switch(C.key){case Vr.Space:case Vr.Enter:C.preventDefault(),C.stopPropagation(),p({type:0});break}}),E=xa(C=>{C.key===Vr.Space&&C.preventDefault()}),R=xa(C=>{var w;pb(C.currentTarget)||l||(g?(p({type:0}),(w=d.buttonElement)==null||w.focus()):p({type:0}))}),{isFocusVisible:M,focusProps:_}=QM({autoFocus:c}),{isHovered:N,hoverProps:O}=KM({isDisabled:l}),{pressed:L,pressProps:I}=sb({disabled:l}),z=Cp({open:d.disclosureState===0,hover:N,active:L,disabled:l,focus:M,autofocus:c}),F=xb(s,d.buttonElement),K=Xv(g?{ref:S,type:F,disabled:l||void 0,autoFocus:c,onKeyDown:y,onClick:R}:{ref:S,id:r,type:F,"aria-expanded":d.disclosureState===0,"aria-controls":d.panelElement?d.panelId:void 0,disabled:l||void 0,autoFocus:c,onKeyDown:y,onKeyUp:E,onClick:R},_,O,I);return wp()({ourProps:K,theirProps:h,slot:z,defaultTag:Hb,name:"Disclosure.Button"})}let Vb="div",kb=Ah.RenderStrategy|Ah.Static;function Xb(s,e){let i=Ae.useId(),{id:r=`headlessui-disclosure-panel-${i}`,transition:l=!1,...c}=s,[h,d]=Lp("Disclosure.Panel"),{close:p}=Tx("Disclosure.Panel"),[m,g]=Ae.useState(null),v=Up(e,xa(N=>{Nb(()=>d({type:5,element:N}))}),g);Ae.useEffect(()=>(d({type:3,panelId:r}),()=>{d({type:3,panelId:null})}),[r,d]);let S=wb(),[y,E]=Eb(l,m,S!==null?(S&pl.Open)===pl.Open:h.disclosureState===0),R=Cp({open:h.disclosureState===0,close:p}),M={ref:v,id:r,...bb(E)},_=wp();return oi.createElement(Ub,null,oi.createElement(Pp.Provider,{value:h.panelId},_({ourProps:M,theirProps:c,slot:R,defaultTag:Vb,features:kb,visible:y,name:"Disclosure.Panel"})))}let Wb=Dp(zb),Rh=Dp(Gb),Ax=Dp(Xb),qb=Object.assign(Wb,{Button:Rh,Panel:Ax});const Fp="182",jb=0,Zv=1,Yb=2,uu=1,Zb=2,ol=3,os=0,Gn=1,_a=2,ya=0,Wr=1,Kv=2,Qv=3,$v=4,Kb=5,Ls=100,Qb=101,$b=102,Jb=103,eE=104,tE=200,nE=201,iE=202,aE=203,Ch=204,wh=205,sE=206,rE=207,oE=208,lE=209,cE=210,uE=211,fE=212,dE=213,hE=214,Dh=0,Uh=1,Nh=2,jr=3,Lh=4,Oh=5,Ph=6,Fh=7,Ip=0,pE=1,mE=2,Xi=0,Rx=1,Cx=2,wx=3,Bp=4,Dx=5,Ux=6,Nx=7,Lx=300,zs=301,Yr=302,Ih=303,Bh=304,Eu=306,zh=1e3,Sa=1001,Hh=1002,Un=1003,gE=1004,Bc=1005,Fn=1006,Vd=1007,Fs=1008,ri=1009,Ox=1010,Px=1011,ml=1012,zp=1013,qi=1014,Di=1015,ba=1016,Hp=1017,Gp=1018,gl=1020,Fx=35902,Ix=35899,Bx=1021,zx=1022,Ui=1023,Ea=1026,Is=1027,Vp=1028,kp=1029,Zr=1030,Xp=1031,Wp=1033,fu=33776,du=33777,hu=33778,pu=33779,Gh=35840,Vh=35841,kh=35842,Xh=35843,Wh=36196,qh=37492,jh=37496,Yh=37488,Zh=37489,Kh=37490,Qh=37491,$h=37808,Jh=37809,ep=37810,tp=37811,np=37812,ip=37813,ap=37814,sp=37815,rp=37816,op=37817,lp=37818,cp=37819,up=37820,fp=37821,dp=36492,hp=36494,pp=36495,mp=36283,gp=36284,vp=36285,_p=36286,vE=3200,qp=0,_E=1,ss="",ai="srgb",Kr="srgb-linear",_u="linear",Ht="srgb",Er=7680,Jv=519,xE=512,SE=513,yE=514,jp=515,ME=516,bE=517,Yp=518,EE=519,e_=35044,t_="300 es",Vi=2e3,xu=2001;function Hx(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Su(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function TE(){const s=Su("canvas");return s.style.display="block",s}const n_={};function i_(...s){const e="THREE."+s.shift();console.log(e,...s)}function st(...s){const e="THREE."+s.shift();console.warn(e,...s)}function At(...s){const e="THREE."+s.shift();console.error(e,...s)}function vl(...s){const e=s.join(" ");e in n_||(n_[e]=!0,st(...s))}function AE(s,e,i){return new Promise(function(r,l){function c(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:l();break;case s.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:r()}}setTimeout(c,i)})}class Jr{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(i)===-1&&r[e].push(i)}hasEventListener(e,i){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(i)!==-1}removeEventListener(e,i){const r=this._listeners;if(r===void 0)return;const l=r[e];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const r=i[e.type];if(r!==void 0){e.target=this;const l=r.slice(0);for(let c=0,h=l.length;c<h;c++)l[c].call(this,e);e.target=null}}}const On=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let a_=1234567;const fl=Math.PI/180,_l=180/Math.PI;function eo(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(On[s&255]+On[s>>8&255]+On[s>>16&255]+On[s>>24&255]+"-"+On[e&255]+On[e>>8&255]+"-"+On[e>>16&15|64]+On[e>>24&255]+"-"+On[i&63|128]+On[i>>8&255]+"-"+On[i>>16&255]+On[i>>24&255]+On[r&255]+On[r>>8&255]+On[r>>16&255]+On[r>>24&255]).toLowerCase()}function _t(s,e,i){return Math.max(e,Math.min(i,s))}function Zp(s,e){return(s%e+e)%e}function RE(s,e,i,r,l){return r+(s-e)*(l-r)/(i-e)}function CE(s,e,i){return s!==e?(i-s)/(e-s):0}function dl(s,e,i){return(1-i)*s+i*e}function wE(s,e,i,r){return dl(s,e,1-Math.exp(-i*r))}function DE(s,e=1){return e-Math.abs(Zp(s,e*2)-e)}function UE(s,e,i){return s<=e?0:s>=i?1:(s=(s-e)/(i-e),s*s*(3-2*s))}function NE(s,e,i){return s<=e?0:s>=i?1:(s=(s-e)/(i-e),s*s*s*(s*(s*6-15)+10))}function LE(s,e){return s+Math.floor(Math.random()*(e-s+1))}function OE(s,e){return s+Math.random()*(e-s)}function PE(s){return s*(.5-Math.random())}function FE(s){s!==void 0&&(a_=s);let e=a_+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function IE(s){return s*fl}function BE(s){return s*_l}function zE(s){return(s&s-1)===0&&s!==0}function HE(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function GE(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function VE(s,e,i,r,l){const c=Math.cos,h=Math.sin,d=c(i/2),p=h(i/2),m=c((e+r)/2),g=h((e+r)/2),v=c((e-r)/2),S=h((e-r)/2),y=c((r-e)/2),E=h((r-e)/2);switch(l){case"XYX":s.set(d*g,p*v,p*S,d*m);break;case"YZY":s.set(p*S,d*g,p*v,d*m);break;case"ZXZ":s.set(p*v,p*S,d*g,d*m);break;case"XZX":s.set(d*g,p*E,p*y,d*m);break;case"YXY":s.set(p*y,d*g,p*E,d*m);break;case"ZYZ":s.set(p*E,p*y,d*g,d*m);break;default:st("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+l)}}function kr(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function zn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const xp={DEG2RAD:fl,RAD2DEG:_l,generateUUID:eo,clamp:_t,euclideanModulo:Zp,mapLinear:RE,inverseLerp:CE,lerp:dl,damp:wE,pingpong:DE,smoothstep:UE,smootherstep:NE,randInt:LE,randFloat:OE,randFloatSpread:PE,seededRandom:FE,degToRad:IE,radToDeg:BE,isPowerOfTwo:zE,ceilPowerOfTwo:HE,floorPowerOfTwo:GE,setQuaternionFromProperEuler:VE,normalize:zn,denormalize:kr};class Mt{constructor(e=0,i=0){Mt.prototype.isVector2=!0,this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,r=this.y,l=e.elements;return this.x=l[0]*i+l[3]*r+l[6],this.y=l[1]*i+l[4]*r+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=_t(this.x,e.x,i.x),this.y=_t(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=_t(this.x,e,i),this.y=_t(this.y,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(_t(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(_t(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y;return i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const r=Math.cos(i),l=Math.sin(i),c=this.x-e.x,h=this.y-e.y;return this.x=c*r-h*l+e.x,this.y=c*l+h*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ml{constructor(e=0,i=0,r=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=r,this._w=l}static slerpFlat(e,i,r,l,c,h,d){let p=r[l+0],m=r[l+1],g=r[l+2],v=r[l+3],S=c[h+0],y=c[h+1],E=c[h+2],R=c[h+3];if(d<=0){e[i+0]=p,e[i+1]=m,e[i+2]=g,e[i+3]=v;return}if(d>=1){e[i+0]=S,e[i+1]=y,e[i+2]=E,e[i+3]=R;return}if(v!==R||p!==S||m!==y||g!==E){let M=p*S+m*y+g*E+v*R;M<0&&(S=-S,y=-y,E=-E,R=-R,M=-M);let _=1-d;if(M<.9995){const N=Math.acos(M),O=Math.sin(N);_=Math.sin(_*N)/O,d=Math.sin(d*N)/O,p=p*_+S*d,m=m*_+y*d,g=g*_+E*d,v=v*_+R*d}else{p=p*_+S*d,m=m*_+y*d,g=g*_+E*d,v=v*_+R*d;const N=1/Math.sqrt(p*p+m*m+g*g+v*v);p*=N,m*=N,g*=N,v*=N}}e[i]=p,e[i+1]=m,e[i+2]=g,e[i+3]=v}static multiplyQuaternionsFlat(e,i,r,l,c,h){const d=r[l],p=r[l+1],m=r[l+2],g=r[l+3],v=c[h],S=c[h+1],y=c[h+2],E=c[h+3];return e[i]=d*E+g*v+p*y-m*S,e[i+1]=p*E+g*S+m*v-d*y,e[i+2]=m*E+g*y+d*S-p*v,e[i+3]=g*E-d*v-p*S-m*y,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,r,l){return this._x=e,this._y=i,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const r=e._x,l=e._y,c=e._z,h=e._order,d=Math.cos,p=Math.sin,m=d(r/2),g=d(l/2),v=d(c/2),S=p(r/2),y=p(l/2),E=p(c/2);switch(h){case"XYZ":this._x=S*g*v+m*y*E,this._y=m*y*v-S*g*E,this._z=m*g*E+S*y*v,this._w=m*g*v-S*y*E;break;case"YXZ":this._x=S*g*v+m*y*E,this._y=m*y*v-S*g*E,this._z=m*g*E-S*y*v,this._w=m*g*v+S*y*E;break;case"ZXY":this._x=S*g*v-m*y*E,this._y=m*y*v+S*g*E,this._z=m*g*E+S*y*v,this._w=m*g*v-S*y*E;break;case"ZYX":this._x=S*g*v-m*y*E,this._y=m*y*v+S*g*E,this._z=m*g*E-S*y*v,this._w=m*g*v+S*y*E;break;case"YZX":this._x=S*g*v+m*y*E,this._y=m*y*v+S*g*E,this._z=m*g*E-S*y*v,this._w=m*g*v-S*y*E;break;case"XZY":this._x=S*g*v-m*y*E,this._y=m*y*v-S*g*E,this._z=m*g*E+S*y*v,this._w=m*g*v+S*y*E;break;default:st("Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const r=i/2,l=Math.sin(r);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,r=i[0],l=i[4],c=i[8],h=i[1],d=i[5],p=i[9],m=i[2],g=i[6],v=i[10],S=r+d+v;if(S>0){const y=.5/Math.sqrt(S+1);this._w=.25/y,this._x=(g-p)*y,this._y=(c-m)*y,this._z=(h-l)*y}else if(r>d&&r>v){const y=2*Math.sqrt(1+r-d-v);this._w=(g-p)/y,this._x=.25*y,this._y=(l+h)/y,this._z=(c+m)/y}else if(d>v){const y=2*Math.sqrt(1+d-r-v);this._w=(c-m)/y,this._x=(l+h)/y,this._y=.25*y,this._z=(p+g)/y}else{const y=2*Math.sqrt(1+v-r-d);this._w=(h-l)/y,this._x=(c+m)/y,this._y=(p+g)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let r=e.dot(i)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(_t(this.dot(e),-1,1)))}rotateTowards(e,i){const r=this.angleTo(e);if(r===0)return this;const l=Math.min(1,i/r);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const r=e._x,l=e._y,c=e._z,h=e._w,d=i._x,p=i._y,m=i._z,g=i._w;return this._x=r*g+h*d+l*m-c*p,this._y=l*g+h*p+c*d-r*m,this._z=c*g+h*m+r*p-l*d,this._w=h*g-r*d-l*p-c*m,this._onChangeCallback(),this}slerp(e,i){if(i<=0)return this;if(i>=1)return this.copy(e);let r=e._x,l=e._y,c=e._z,h=e._w,d=this.dot(e);d<0&&(r=-r,l=-l,c=-c,h=-h,d=-d);let p=1-i;if(d<.9995){const m=Math.acos(d),g=Math.sin(m);p=Math.sin(p*m)/g,i=Math.sin(i*m)/g,this._x=this._x*p+r*i,this._y=this._y*p+l*i,this._z=this._z*p+c*i,this._w=this._w*p+h*i,this._onChangeCallback()}else this._x=this._x*p+r*i,this._y=this._y*p+l*i,this._z=this._z*p+c*i,this._w=this._w*p+h*i,this.normalize();return this}slerpQuaternions(e,i,r){return this.copy(e).slerp(i,r)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),c=Math.sqrt(r);return this.set(l*Math.sin(e),l*Math.cos(e),c*Math.sin(i),c*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Z{constructor(e=0,i=0,r=0){Z.prototype.isVector3=!0,this.x=e,this.y=i,this.z=r}set(e,i,r){return r===void 0&&(r=this.z),this.x=e,this.y=i,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(s_.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(s_.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,r=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[3]*r+c[6]*l,this.y=c[1]*i+c[4]*r+c[7]*l,this.z=c[2]*i+c[5]*r+c[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,c=e.elements,h=1/(c[3]*i+c[7]*r+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*r+c[8]*l+c[12])*h,this.y=(c[1]*i+c[5]*r+c[9]*l+c[13])*h,this.z=(c[2]*i+c[6]*r+c[10]*l+c[14])*h,this}applyQuaternion(e){const i=this.x,r=this.y,l=this.z,c=e.x,h=e.y,d=e.z,p=e.w,m=2*(h*l-d*r),g=2*(d*i-c*l),v=2*(c*r-h*i);return this.x=i+p*m+h*v-d*g,this.y=r+p*g+d*m-c*v,this.z=l+p*v+c*g-h*m,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,r=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[4]*r+c[8]*l,this.y=c[1]*i+c[5]*r+c[9]*l,this.z=c[2]*i+c[6]*r+c[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=_t(this.x,e.x,i.x),this.y=_t(this.y,e.y,i.y),this.z=_t(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=_t(this.x,e,i),this.y=_t(this.y,e,i),this.z=_t(this.z,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(_t(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const r=e.x,l=e.y,c=e.z,h=i.x,d=i.y,p=i.z;return this.x=l*p-c*d,this.y=c*h-r*p,this.z=r*d-l*h,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const r=e.dot(this)/i;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return kd.copy(this).projectOnVector(e),this.sub(kd)}reflect(e){return this.sub(kd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const r=this.dot(e)/i;return Math.acos(_t(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,r=this.y-e.y,l=this.z-e.z;return i*i+r*r+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,r){const l=Math.sin(i)*e;return this.x=l*Math.sin(r),this.y=Math.cos(i)*e,this.z=l*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,r){return this.x=e*Math.sin(i),this.y=r,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=r,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,r=Math.sqrt(1-i*i);return this.x=r*Math.cos(e),this.y=i,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const kd=new Z,s_=new Ml;class dt{constructor(e,i,r,l,c,h,d,p,m){dt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,r,l,c,h,d,p,m)}set(e,i,r,l,c,h,d,p,m){const g=this.elements;return g[0]=e,g[1]=l,g[2]=d,g[3]=i,g[4]=c,g[5]=p,g[6]=r,g[7]=h,g[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],this}extractBasis(e,i,r){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,c=this.elements,h=r[0],d=r[3],p=r[6],m=r[1],g=r[4],v=r[7],S=r[2],y=r[5],E=r[8],R=l[0],M=l[3],_=l[6],N=l[1],O=l[4],L=l[7],I=l[2],z=l[5],F=l[8];return c[0]=h*R+d*N+p*I,c[3]=h*M+d*O+p*z,c[6]=h*_+d*L+p*F,c[1]=m*R+g*N+v*I,c[4]=m*M+g*O+v*z,c[7]=m*_+g*L+v*F,c[2]=S*R+y*N+E*I,c[5]=S*M+y*O+E*z,c[8]=S*_+y*L+E*F,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[1],l=e[2],c=e[3],h=e[4],d=e[5],p=e[6],m=e[7],g=e[8];return i*h*g-i*d*m-r*c*g+r*d*p+l*c*m-l*h*p}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],c=e[3],h=e[4],d=e[5],p=e[6],m=e[7],g=e[8],v=g*h-d*m,S=d*p-g*c,y=m*c-h*p,E=i*v+r*S+l*y;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const R=1/E;return e[0]=v*R,e[1]=(l*m-g*r)*R,e[2]=(d*r-l*h)*R,e[3]=S*R,e[4]=(g*i-l*p)*R,e[5]=(l*c-d*i)*R,e[6]=y*R,e[7]=(r*p-m*i)*R,e[8]=(h*i-r*c)*R,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,r,l,c,h,d){const p=Math.cos(c),m=Math.sin(c);return this.set(r*p,r*m,-r*(p*h+m*d)+h+e,-l*m,l*p,-l*(-m*h+p*d)+d+i,0,0,1),this}scale(e,i){return this.premultiply(Xd.makeScale(e,i)),this}rotate(e){return this.premultiply(Xd.makeRotation(-e)),this}translate(e,i){return this.premultiply(Xd.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,r,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<9;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<9;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Xd=new dt,r_=new dt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),o_=new dt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function kE(){const s={enabled:!0,workingColorSpace:Kr,spaces:{},convert:function(l,c,h){return this.enabled===!1||c===h||!c||!h||(this.spaces[c].transfer===Ht&&(l.r=Ma(l.r),l.g=Ma(l.g),l.b=Ma(l.b)),this.spaces[c].primaries!==this.spaces[h].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[h].fromXYZ)),this.spaces[h].transfer===Ht&&(l.r=qr(l.r),l.g=qr(l.g),l.b=qr(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===ss?_u:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,h){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[h].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return vl("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return vl("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(l,c)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[Kr]:{primaries:e,whitePoint:r,transfer:_u,toXYZ:r_,fromXYZ:o_,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:ai},outputColorSpaceConfig:{drawingBufferColorSpace:ai}},[ai]:{primaries:e,whitePoint:r,transfer:Ht,toXYZ:r_,fromXYZ:o_,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:ai}}}),s}const Rt=kE();function Ma(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function qr(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Tr;class XE{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{Tr===void 0&&(Tr=Su("canvas")),Tr.width=e.width,Tr.height=e.height;const l=Tr.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),r=Tr}return r.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=Su("canvas");i.width=e.width,i.height=e.height;const r=i.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const l=r.getImageData(0,0,e.width,e.height),c=l.data;for(let h=0;h<c.length;h++)c[h]=Ma(c[h]/255)*255;return r.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let r=0;r<i.length;r++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[r]=Math.floor(Ma(i[r]/255)*255):i[r]=Ma(i[r]);return{data:i,width:e.width,height:e.height}}else return st("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let WE=0;class Kp{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:WE++}),this.uuid=eo(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?e.set(i.displayHeight,i.displayWidth,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let h=0,d=l.length;h<d;h++)l[h].isDataTexture?c.push(Wd(l[h].image)):c.push(Wd(l[h]))}else c=Wd(l);r.url=c}return i||(e.images[this.uuid]=r),r}}function Wd(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?XE.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(st("Texture: Unable to serialize Texture."),{})}let qE=0;const qd=new Z;class Vn extends Jr{constructor(e=Vn.DEFAULT_IMAGE,i=Vn.DEFAULT_MAPPING,r=Sa,l=Sa,c=Fn,h=Fs,d=Ui,p=ri,m=Vn.DEFAULT_ANISOTROPY,g=ss){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:qE++}),this.uuid=eo(),this.name="",this.source=new Kp(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=c,this.minFilter=h,this.anisotropy=m,this.format=d,this.internalFormat=null,this.type=p,this.offset=new Mt(0,0),this.repeat=new Mt(1,1),this.center=new Mt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new dt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(qd).x}get height(){return this.source.getSize(qd).y}get depth(){return this.source.getSize(qd).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const r=e[i];if(r===void 0){st(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){st(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&r&&l.isVector2&&r.isVector2||l&&r&&l.isVector3&&r.isVector3||l&&r&&l.isMatrix3&&r.isMatrix3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),i||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Lx)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case zh:e.x=e.x-Math.floor(e.x);break;case Sa:e.x=e.x<0?0:1;break;case Hh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case zh:e.y=e.y-Math.floor(e.y);break;case Sa:e.y=e.y<0?0:1;break;case Hh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Vn.DEFAULT_IMAGE=null;Vn.DEFAULT_MAPPING=Lx;Vn.DEFAULT_ANISOTROPY=1;class nn{constructor(e=0,i=0,r=0,l=1){nn.prototype.isVector4=!0,this.x=e,this.y=i,this.z=r,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,r,l){return this.x=e,this.y=i,this.z=r,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,r=this.y,l=this.z,c=this.w,h=e.elements;return this.x=h[0]*i+h[4]*r+h[8]*l+h[12]*c,this.y=h[1]*i+h[5]*r+h[9]*l+h[13]*c,this.z=h[2]*i+h[6]*r+h[10]*l+h[14]*c,this.w=h[3]*i+h[7]*r+h[11]*l+h[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,r,l,c;const p=e.elements,m=p[0],g=p[4],v=p[8],S=p[1],y=p[5],E=p[9],R=p[2],M=p[6],_=p[10];if(Math.abs(g-S)<.01&&Math.abs(v-R)<.01&&Math.abs(E-M)<.01){if(Math.abs(g+S)<.1&&Math.abs(v+R)<.1&&Math.abs(E+M)<.1&&Math.abs(m+y+_-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const O=(m+1)/2,L=(y+1)/2,I=(_+1)/2,z=(g+S)/4,F=(v+R)/4,K=(E+M)/4;return O>L&&O>I?O<.01?(r=0,l=.707106781,c=.707106781):(r=Math.sqrt(O),l=z/r,c=F/r):L>I?L<.01?(r=.707106781,l=0,c=.707106781):(l=Math.sqrt(L),r=z/l,c=K/l):I<.01?(r=.707106781,l=.707106781,c=0):(c=Math.sqrt(I),r=F/c,l=K/c),this.set(r,l,c,i),this}let N=Math.sqrt((M-E)*(M-E)+(v-R)*(v-R)+(S-g)*(S-g));return Math.abs(N)<.001&&(N=1),this.x=(M-E)/N,this.y=(v-R)/N,this.z=(S-g)/N,this.w=Math.acos((m+y+_-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=_t(this.x,e.x,i.x),this.y=_t(this.y,e.y,i.y),this.z=_t(this.z,e.z,i.z),this.w=_t(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=_t(this.x,e,i),this.y=_t(this.y,e,i),this.z=_t(this.z,e,i),this.w=_t(this.w,e,i),this}clampLength(e,i){const r=this.length();return this.divideScalar(r||1).multiplyScalar(_t(r,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,r){return this.x=e.x+(i.x-e.x)*r,this.y=e.y+(i.y-e.y)*r,this.z=e.z+(i.z-e.z)*r,this.w=e.w+(i.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class jE extends Jr{constructor(e=1,i=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Fn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},r),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=r.depth,this.scissor=new nn(0,0,e,i),this.scissorTest=!1,this.viewport=new nn(0,0,e,i);const l={width:e,height:i,depth:r.depth},c=new Vn(l);this.textures=[];const h=r.count;for(let d=0;d<h;d++)this.textures[d]=c.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview}_setTextureOptions(e={}){const i={minFilter:Fn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,r=1){if(this.width!==e||this.height!==i||this.depth!==r){this.width=e,this.height=i,this.depth=r;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=r,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new Kp(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Wi extends jE{constructor(e=1,i=1,r={}){super(e,i,r),this.isWebGLRenderTarget=!0}}class Gx extends Vn{constructor(e=null,i=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=Un,this.minFilter=Un,this.wrapR=Sa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class YE extends Vn{constructor(e=null,i=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:r,depth:l},this.magFilter=Un,this.minFilter=Un,this.wrapR=Sa,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Hs{constructor(e=new Z(1/0,1/0,1/0),i=new Z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i+=3)this.expandByPoint(Ai.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,r=e.count;i<r;i++)this.expandByPoint(Ai.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,r=e.length;i<r;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const r=Ai.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const c=r.getAttribute("position");if(i===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let h=0,d=c.count;h<d;h++)e.isMesh===!0?e.getVertexPosition(h,Ai):Ai.fromBufferAttribute(c,h),Ai.applyMatrix4(e.matrixWorld),this.expandByPoint(Ai);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),zc.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),zc.copy(r.boundingBox)),zc.applyMatrix4(e.matrixWorld),this.union(zc)}const l=e.children;for(let c=0,h=l.length;c<h;c++)this.expandByObject(l[c],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ai),Ai.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,r;return e.normal.x>0?(i=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),i<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Jo),Hc.subVectors(this.max,Jo),Ar.subVectors(e.a,Jo),Rr.subVectors(e.b,Jo),Cr.subVectors(e.c,Jo),Qa.subVectors(Rr,Ar),$a.subVectors(Cr,Rr),Rs.subVectors(Ar,Cr);let i=[0,-Qa.z,Qa.y,0,-$a.z,$a.y,0,-Rs.z,Rs.y,Qa.z,0,-Qa.x,$a.z,0,-$a.x,Rs.z,0,-Rs.x,-Qa.y,Qa.x,0,-$a.y,$a.x,0,-Rs.y,Rs.x,0];return!jd(i,Ar,Rr,Cr,Hc)||(i=[1,0,0,0,1,0,0,0,1],!jd(i,Ar,Rr,Cr,Hc))?!1:(Gc.crossVectors(Qa,$a),i=[Gc.x,Gc.y,Gc.z],jd(i,Ar,Rr,Cr,Hc))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ai).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ai).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ha[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ha[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ha[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ha[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ha[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ha[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ha[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ha[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ha),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const ha=[new Z,new Z,new Z,new Z,new Z,new Z,new Z,new Z],Ai=new Z,zc=new Hs,Ar=new Z,Rr=new Z,Cr=new Z,Qa=new Z,$a=new Z,Rs=new Z,Jo=new Z,Hc=new Z,Gc=new Z,Cs=new Z;function jd(s,e,i,r,l){for(let c=0,h=s.length-3;c<=h;c+=3){Cs.fromArray(s,c);const d=l.x*Math.abs(Cs.x)+l.y*Math.abs(Cs.y)+l.z*Math.abs(Cs.z),p=e.dot(Cs),m=i.dot(Cs),g=r.dot(Cs);if(Math.max(-Math.max(p,m,g),Math.min(p,m,g))>d)return!1}return!0}const ZE=new Hs,el=new Z,Yd=new Z;class bl{constructor(e=new Z,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const r=this.center;i!==void 0?r.copy(i):ZE.setFromPoints(e).getCenter(r);let l=0;for(let c=0,h=e.length;c<h;c++)l=Math.max(l,r.distanceToSquared(e[c]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const r=this.center.distanceToSquared(e);return i.copy(e),r>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;el.subVectors(e,this.center);const i=el.lengthSq();if(i>this.radius*this.radius){const r=Math.sqrt(i),l=(r-this.radius)*.5;this.center.addScaledVector(el,l/r),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Yd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(el.copy(e.center).add(Yd)),this.expandByPoint(el.copy(e.center).sub(Yd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const pa=new Z,Zd=new Z,Vc=new Z,Ja=new Z,Kd=new Z,kc=new Z,Qd=new Z;class Vx{constructor(e=new Z,i=new Z(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,pa)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const r=i.dot(this.direction);return r<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=pa.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(pa.copy(this.origin).addScaledVector(this.direction,i),pa.distanceToSquared(e))}distanceSqToSegment(e,i,r,l){Zd.copy(e).add(i).multiplyScalar(.5),Vc.copy(i).sub(e).normalize(),Ja.copy(this.origin).sub(Zd);const c=e.distanceTo(i)*.5,h=-this.direction.dot(Vc),d=Ja.dot(this.direction),p=-Ja.dot(Vc),m=Ja.lengthSq(),g=Math.abs(1-h*h);let v,S,y,E;if(g>0)if(v=h*p-d,S=h*d-p,E=c*g,v>=0)if(S>=-E)if(S<=E){const R=1/g;v*=R,S*=R,y=v*(v+h*S+2*d)+S*(h*v+S+2*p)+m}else S=c,v=Math.max(0,-(h*S+d)),y=-v*v+S*(S+2*p)+m;else S=-c,v=Math.max(0,-(h*S+d)),y=-v*v+S*(S+2*p)+m;else S<=-E?(v=Math.max(0,-(-h*c+d)),S=v>0?-c:Math.min(Math.max(-c,-p),c),y=-v*v+S*(S+2*p)+m):S<=E?(v=0,S=Math.min(Math.max(-c,-p),c),y=S*(S+2*p)+m):(v=Math.max(0,-(h*c+d)),S=v>0?c:Math.min(Math.max(-c,-p),c),y=-v*v+S*(S+2*p)+m);else S=h>0?-c:c,v=Math.max(0,-(h*S+d)),y=-v*v+S*(S+2*p)+m;return r&&r.copy(this.origin).addScaledVector(this.direction,v),l&&l.copy(Zd).addScaledVector(Vc,S),y}intersectSphere(e,i){pa.subVectors(e.center,this.origin);const r=pa.dot(this.direction),l=pa.dot(pa)-r*r,c=e.radius*e.radius;if(l>c)return null;const h=Math.sqrt(c-l),d=r-h,p=r+h;return p<0?null:d<0?this.at(p,i):this.at(d,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/i;return r>=0?r:null}intersectPlane(e,i){const r=this.distanceToPlane(e);return r===null?null:this.at(r,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let r,l,c,h,d,p;const m=1/this.direction.x,g=1/this.direction.y,v=1/this.direction.z,S=this.origin;return m>=0?(r=(e.min.x-S.x)*m,l=(e.max.x-S.x)*m):(r=(e.max.x-S.x)*m,l=(e.min.x-S.x)*m),g>=0?(c=(e.min.y-S.y)*g,h=(e.max.y-S.y)*g):(c=(e.max.y-S.y)*g,h=(e.min.y-S.y)*g),r>h||c>l||((c>r||isNaN(r))&&(r=c),(h<l||isNaN(l))&&(l=h),v>=0?(d=(e.min.z-S.z)*v,p=(e.max.z-S.z)*v):(d=(e.max.z-S.z)*v,p=(e.min.z-S.z)*v),r>p||d>l)||((d>r||r!==r)&&(r=d),(p<l||l!==l)&&(l=p),l<0)?null:this.at(r>=0?r:l,i)}intersectsBox(e){return this.intersectBox(e,pa)!==null}intersectTriangle(e,i,r,l,c){Kd.subVectors(i,e),kc.subVectors(r,e),Qd.crossVectors(Kd,kc);let h=this.direction.dot(Qd),d;if(h>0){if(l)return null;d=1}else if(h<0)d=-1,h=-h;else return null;Ja.subVectors(this.origin,e);const p=d*this.direction.dot(kc.crossVectors(Ja,kc));if(p<0)return null;const m=d*this.direction.dot(Kd.cross(Ja));if(m<0||p+m>h)return null;const g=-d*Ja.dot(Qd);return g<0?null:this.at(g/h,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class qt{constructor(e,i,r,l,c,h,d,p,m,g,v,S,y,E,R,M){qt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,r,l,c,h,d,p,m,g,v,S,y,E,R,M)}set(e,i,r,l,c,h,d,p,m,g,v,S,y,E,R,M){const _=this.elements;return _[0]=e,_[4]=i,_[8]=r,_[12]=l,_[1]=c,_[5]=h,_[9]=d,_[13]=p,_[2]=m,_[6]=g,_[10]=v,_[14]=S,_[3]=y,_[7]=E,_[11]=R,_[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new qt().fromArray(this.elements)}copy(e){const i=this.elements,r=e.elements;return i[0]=r[0],i[1]=r[1],i[2]=r[2],i[3]=r[3],i[4]=r[4],i[5]=r[5],i[6]=r[6],i[7]=r[7],i[8]=r[8],i[9]=r[9],i[10]=r[10],i[11]=r[11],i[12]=r[12],i[13]=r[13],i[14]=r[14],i[15]=r[15],this}copyPosition(e){const i=this.elements,r=e.elements;return i[12]=r[12],i[13]=r[13],i[14]=r[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,r){return this.determinant()===0?(e.set(1,0,0),i.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,i,r){return this.set(e.x,i.x,r.x,0,e.y,i.y,r.y,0,e.z,i.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const i=this.elements,r=e.elements,l=1/wr.setFromMatrixColumn(e,0).length(),c=1/wr.setFromMatrixColumn(e,1).length(),h=1/wr.setFromMatrixColumn(e,2).length();return i[0]=r[0]*l,i[1]=r[1]*l,i[2]=r[2]*l,i[3]=0,i[4]=r[4]*c,i[5]=r[5]*c,i[6]=r[6]*c,i[7]=0,i[8]=r[8]*h,i[9]=r[9]*h,i[10]=r[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,r=e.x,l=e.y,c=e.z,h=Math.cos(r),d=Math.sin(r),p=Math.cos(l),m=Math.sin(l),g=Math.cos(c),v=Math.sin(c);if(e.order==="XYZ"){const S=h*g,y=h*v,E=d*g,R=d*v;i[0]=p*g,i[4]=-p*v,i[8]=m,i[1]=y+E*m,i[5]=S-R*m,i[9]=-d*p,i[2]=R-S*m,i[6]=E+y*m,i[10]=h*p}else if(e.order==="YXZ"){const S=p*g,y=p*v,E=m*g,R=m*v;i[0]=S+R*d,i[4]=E*d-y,i[8]=h*m,i[1]=h*v,i[5]=h*g,i[9]=-d,i[2]=y*d-E,i[6]=R+S*d,i[10]=h*p}else if(e.order==="ZXY"){const S=p*g,y=p*v,E=m*g,R=m*v;i[0]=S-R*d,i[4]=-h*v,i[8]=E+y*d,i[1]=y+E*d,i[5]=h*g,i[9]=R-S*d,i[2]=-h*m,i[6]=d,i[10]=h*p}else if(e.order==="ZYX"){const S=h*g,y=h*v,E=d*g,R=d*v;i[0]=p*g,i[4]=E*m-y,i[8]=S*m+R,i[1]=p*v,i[5]=R*m+S,i[9]=y*m-E,i[2]=-m,i[6]=d*p,i[10]=h*p}else if(e.order==="YZX"){const S=h*p,y=h*m,E=d*p,R=d*m;i[0]=p*g,i[4]=R-S*v,i[8]=E*v+y,i[1]=v,i[5]=h*g,i[9]=-d*g,i[2]=-m*g,i[6]=y*v+E,i[10]=S-R*v}else if(e.order==="XZY"){const S=h*p,y=h*m,E=d*p,R=d*m;i[0]=p*g,i[4]=-v,i[8]=m*g,i[1]=S*v+R,i[5]=h*g,i[9]=y*v-E,i[2]=E*v-y,i[6]=d*g,i[10]=R*v+S}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(KE,e,QE)}lookAt(e,i,r){const l=this.elements;return ni.subVectors(e,i),ni.lengthSq()===0&&(ni.z=1),ni.normalize(),es.crossVectors(r,ni),es.lengthSq()===0&&(Math.abs(r.z)===1?ni.x+=1e-4:ni.z+=1e-4,ni.normalize(),es.crossVectors(r,ni)),es.normalize(),Xc.crossVectors(ni,es),l[0]=es.x,l[4]=Xc.x,l[8]=ni.x,l[1]=es.y,l[5]=Xc.y,l[9]=ni.y,l[2]=es.z,l[6]=Xc.z,l[10]=ni.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const r=e.elements,l=i.elements,c=this.elements,h=r[0],d=r[4],p=r[8],m=r[12],g=r[1],v=r[5],S=r[9],y=r[13],E=r[2],R=r[6],M=r[10],_=r[14],N=r[3],O=r[7],L=r[11],I=r[15],z=l[0],F=l[4],K=l[8],C=l[12],w=l[1],k=l[5],re=l[9],se=l[13],pe=l[2],fe=l[6],P=l[10],H=l[14],ae=l[3],Me=l[7],Se=l[11],U=l[15];return c[0]=h*z+d*w+p*pe+m*ae,c[4]=h*F+d*k+p*fe+m*Me,c[8]=h*K+d*re+p*P+m*Se,c[12]=h*C+d*se+p*H+m*U,c[1]=g*z+v*w+S*pe+y*ae,c[5]=g*F+v*k+S*fe+y*Me,c[9]=g*K+v*re+S*P+y*Se,c[13]=g*C+v*se+S*H+y*U,c[2]=E*z+R*w+M*pe+_*ae,c[6]=E*F+R*k+M*fe+_*Me,c[10]=E*K+R*re+M*P+_*Se,c[14]=E*C+R*se+M*H+_*U,c[3]=N*z+O*w+L*pe+I*ae,c[7]=N*F+O*k+L*fe+I*Me,c[11]=N*K+O*re+L*P+I*Se,c[15]=N*C+O*se+L*H+I*U,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],r=e[4],l=e[8],c=e[12],h=e[1],d=e[5],p=e[9],m=e[13],g=e[2],v=e[6],S=e[10],y=e[14],E=e[3],R=e[7],M=e[11],_=e[15],N=p*y-m*S,O=d*y-m*v,L=d*S-p*v,I=h*y-m*g,z=h*S-p*g,F=h*v-d*g;return i*(R*N-M*O+_*L)-r*(E*N-M*I+_*z)+l*(E*O-R*I+_*F)-c*(E*L-R*z+M*F)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,r){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=r),this}invert(){const e=this.elements,i=e[0],r=e[1],l=e[2],c=e[3],h=e[4],d=e[5],p=e[6],m=e[7],g=e[8],v=e[9],S=e[10],y=e[11],E=e[12],R=e[13],M=e[14],_=e[15],N=v*M*m-R*S*m+R*p*y-d*M*y-v*p*_+d*S*_,O=E*S*m-g*M*m-E*p*y+h*M*y+g*p*_-h*S*_,L=g*R*m-E*v*m+E*d*y-h*R*y-g*d*_+h*v*_,I=E*v*p-g*R*p-E*d*S+h*R*S+g*d*M-h*v*M,z=i*N+r*O+l*L+c*I;if(z===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const F=1/z;return e[0]=N*F,e[1]=(R*S*c-v*M*c-R*l*y+r*M*y+v*l*_-r*S*_)*F,e[2]=(d*M*c-R*p*c+R*l*m-r*M*m-d*l*_+r*p*_)*F,e[3]=(v*p*c-d*S*c-v*l*m+r*S*m+d*l*y-r*p*y)*F,e[4]=O*F,e[5]=(g*M*c-E*S*c+E*l*y-i*M*y-g*l*_+i*S*_)*F,e[6]=(E*p*c-h*M*c-E*l*m+i*M*m+h*l*_-i*p*_)*F,e[7]=(h*S*c-g*p*c+g*l*m-i*S*m-h*l*y+i*p*y)*F,e[8]=L*F,e[9]=(E*v*c-g*R*c-E*r*y+i*R*y+g*r*_-i*v*_)*F,e[10]=(h*R*c-E*d*c+E*r*m-i*R*m-h*r*_+i*d*_)*F,e[11]=(g*d*c-h*v*c-g*r*m+i*v*m+h*r*y-i*d*y)*F,e[12]=I*F,e[13]=(g*R*l-E*v*l+E*r*S-i*R*S-g*r*M+i*v*M)*F,e[14]=(E*d*l-h*R*l-E*r*p+i*R*p+h*r*M-i*d*M)*F,e[15]=(h*v*l-g*d*l+g*r*p-i*v*p-h*r*S+i*d*S)*F,this}scale(e){const i=this.elements,r=e.x,l=e.y,c=e.z;return i[0]*=r,i[4]*=l,i[8]*=c,i[1]*=r,i[5]*=l,i[9]*=c,i[2]*=r,i[6]*=l,i[10]*=c,i[3]*=r,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,r,l))}makeTranslation(e,i,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,r,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,i,-r,0,0,r,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,0,r,0,0,1,0,0,-r,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),r=Math.sin(e);return this.set(i,-r,0,0,r,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const r=Math.cos(i),l=Math.sin(i),c=1-r,h=e.x,d=e.y,p=e.z,m=c*h,g=c*d;return this.set(m*h+r,m*d-l*p,m*p+l*d,0,m*d+l*p,g*d+r,g*p-l*h,0,m*p-l*d,g*p+l*h,c*p*p+r,0,0,0,0,1),this}makeScale(e,i,r){return this.set(e,0,0,0,0,i,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,i,r,l,c,h){return this.set(1,r,c,0,e,1,h,0,i,l,1,0,0,0,0,1),this}compose(e,i,r){const l=this.elements,c=i._x,h=i._y,d=i._z,p=i._w,m=c+c,g=h+h,v=d+d,S=c*m,y=c*g,E=c*v,R=h*g,M=h*v,_=d*v,N=p*m,O=p*g,L=p*v,I=r.x,z=r.y,F=r.z;return l[0]=(1-(R+_))*I,l[1]=(y+L)*I,l[2]=(E-O)*I,l[3]=0,l[4]=(y-L)*z,l[5]=(1-(S+_))*z,l[6]=(M+N)*z,l[7]=0,l[8]=(E+O)*F,l[9]=(M-N)*F,l[10]=(1-(S+R))*F,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,r){const l=this.elements;if(e.x=l[12],e.y=l[13],e.z=l[14],this.determinant()===0)return r.set(1,1,1),i.identity(),this;let c=wr.set(l[0],l[1],l[2]).length();const h=wr.set(l[4],l[5],l[6]).length(),d=wr.set(l[8],l[9],l[10]).length();this.determinant()<0&&(c=-c),Ri.copy(this);const m=1/c,g=1/h,v=1/d;return Ri.elements[0]*=m,Ri.elements[1]*=m,Ri.elements[2]*=m,Ri.elements[4]*=g,Ri.elements[5]*=g,Ri.elements[6]*=g,Ri.elements[8]*=v,Ri.elements[9]*=v,Ri.elements[10]*=v,i.setFromRotationMatrix(Ri),r.x=c,r.y=h,r.z=d,this}makePerspective(e,i,r,l,c,h,d=Vi,p=!1){const m=this.elements,g=2*c/(i-e),v=2*c/(r-l),S=(i+e)/(i-e),y=(r+l)/(r-l);let E,R;if(p)E=c/(h-c),R=h*c/(h-c);else if(d===Vi)E=-(h+c)/(h-c),R=-2*h*c/(h-c);else if(d===xu)E=-h/(h-c),R=-h*c/(h-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return m[0]=g,m[4]=0,m[8]=S,m[12]=0,m[1]=0,m[5]=v,m[9]=y,m[13]=0,m[2]=0,m[6]=0,m[10]=E,m[14]=R,m[3]=0,m[7]=0,m[11]=-1,m[15]=0,this}makeOrthographic(e,i,r,l,c,h,d=Vi,p=!1){const m=this.elements,g=2/(i-e),v=2/(r-l),S=-(i+e)/(i-e),y=-(r+l)/(r-l);let E,R;if(p)E=1/(h-c),R=h/(h-c);else if(d===Vi)E=-2/(h-c),R=-(h+c)/(h-c);else if(d===xu)E=-1/(h-c),R=-c/(h-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return m[0]=g,m[4]=0,m[8]=0,m[12]=S,m[1]=0,m[5]=v,m[9]=0,m[13]=y,m[2]=0,m[6]=0,m[10]=E,m[14]=R,m[3]=0,m[7]=0,m[11]=0,m[15]=1,this}equals(e){const i=this.elements,r=e.elements;for(let l=0;l<16;l++)if(i[l]!==r[l])return!1;return!0}fromArray(e,i=0){for(let r=0;r<16;r++)this.elements[r]=e[r+i];return this}toArray(e=[],i=0){const r=this.elements;return e[i]=r[0],e[i+1]=r[1],e[i+2]=r[2],e[i+3]=r[3],e[i+4]=r[4],e[i+5]=r[5],e[i+6]=r[6],e[i+7]=r[7],e[i+8]=r[8],e[i+9]=r[9],e[i+10]=r[10],e[i+11]=r[11],e[i+12]=r[12],e[i+13]=r[13],e[i+14]=r[14],e[i+15]=r[15],e}}const wr=new Z,Ri=new qt,KE=new Z(0,0,0),QE=new Z(1,1,1),es=new Z,Xc=new Z,ni=new Z,l_=new qt,c_=new Ml;class Li{constructor(e=0,i=0,r=0,l=Li.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=r,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,r,l=this._order){return this._x=e,this._y=i,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,r=!0){const l=e.elements,c=l[0],h=l[4],d=l[8],p=l[1],m=l[5],g=l[9],v=l[2],S=l[6],y=l[10];switch(i){case"XYZ":this._y=Math.asin(_t(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-g,y),this._z=Math.atan2(-h,c)):(this._x=Math.atan2(S,m),this._z=0);break;case"YXZ":this._x=Math.asin(-_t(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(d,y),this._z=Math.atan2(p,m)):(this._y=Math.atan2(-v,c),this._z=0);break;case"ZXY":this._x=Math.asin(_t(S,-1,1)),Math.abs(S)<.9999999?(this._y=Math.atan2(-v,y),this._z=Math.atan2(-h,m)):(this._y=0,this._z=Math.atan2(p,c));break;case"ZYX":this._y=Math.asin(-_t(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(S,y),this._z=Math.atan2(p,c)):(this._x=0,this._z=Math.atan2(-h,m));break;case"YZX":this._z=Math.asin(_t(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-g,m),this._y=Math.atan2(-v,c)):(this._x=0,this._y=Math.atan2(d,y));break;case"XZY":this._z=Math.asin(-_t(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(S,m),this._y=Math.atan2(d,c)):(this._x=Math.atan2(-g,y),this._y=0);break;default:st("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,r){return l_.makeRotationFromQuaternion(e),this.setFromRotationMatrix(l_,i,r)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return c_.setFromEuler(this),this.setFromQuaternion(c_,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Li.DEFAULT_ORDER="XYZ";class Qp{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let $E=0;const u_=new Z,Dr=new Ml,ma=new qt,Wc=new Z,tl=new Z,JE=new Z,e1=new Ml,f_=new Z(1,0,0),d_=new Z(0,1,0),h_=new Z(0,0,1),p_={type:"added"},t1={type:"removed"},Ur={type:"childadded",child:null},$d={type:"childremoved",child:null};class In extends Jr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:$E++}),this.uuid=eo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=In.DEFAULT_UP.clone();const e=new Z,i=new Li,r=new Ml,l=new Z(1,1,1);function c(){r.setFromEuler(i,!1)}function h(){i.setFromQuaternion(r,void 0,!1)}i._onChange(c),r._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new qt},normalMatrix:{value:new dt}}),this.matrix=new qt,this.matrixWorld=new qt,this.matrixAutoUpdate=In.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=In.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Qp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return Dr.setFromAxisAngle(e,i),this.quaternion.multiply(Dr),this}rotateOnWorldAxis(e,i){return Dr.setFromAxisAngle(e,i),this.quaternion.premultiply(Dr),this}rotateX(e){return this.rotateOnAxis(f_,e)}rotateY(e){return this.rotateOnAxis(d_,e)}rotateZ(e){return this.rotateOnAxis(h_,e)}translateOnAxis(e,i){return u_.copy(e).applyQuaternion(this.quaternion),this.position.add(u_.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(f_,e)}translateY(e){return this.translateOnAxis(d_,e)}translateZ(e){return this.translateOnAxis(h_,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ma.copy(this.matrixWorld).invert())}lookAt(e,i,r){e.isVector3?Wc.copy(e):Wc.set(e,i,r);const l=this.parent;this.updateWorldMatrix(!0,!1),tl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ma.lookAt(tl,Wc,this.up):ma.lookAt(Wc,tl,this.up),this.quaternion.setFromRotationMatrix(ma),l&&(ma.extractRotation(l.matrixWorld),Dr.setFromRotationMatrix(ma),this.quaternion.premultiply(Dr.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(At("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(p_),Ur.child=e,this.dispatchEvent(Ur),Ur.child=null):At("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(t1),$d.child=e,this.dispatchEvent($d),$d.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ma.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ma.multiply(e.parent.matrixWorld)),e.applyMatrix4(ma),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(p_),Ur.child=e,this.dispatchEvent(Ur),Ur.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let r=0,l=this.children.length;r<l;r++){const h=this.children[r].getObjectByProperty(e,i);if(h!==void 0)return h}}getObjectsByProperty(e,i,r=[]){this[e]===i&&r.push(this);const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].getObjectsByProperty(e,i,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(tl,e,JE),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(tl,e1,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let r=0,l=i.length;r<l;r++)i[r].updateMatrixWorld(e)}updateWorldMatrix(e,i){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(e){const i=e===void 0||typeof e=="string",r={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(d=>({...d})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(d,p){return d[p.uuid]===void 0&&(d[p.uuid]=p.toJSON(e)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const p=d.shapes;if(Array.isArray(p))for(let m=0,g=p.length;m<g;m++){const v=p[m];c(e.shapes,v)}else c(e.shapes,p)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let p=0,m=this.material.length;p<m;p++)d.push(c(e.materials,this.material[p]));l.material=d}else l.material=c(e.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const p=this.animations[d];l.animations.push(c(e.animations,p))}}if(i){const d=h(e.geometries),p=h(e.materials),m=h(e.textures),g=h(e.images),v=h(e.shapes),S=h(e.skeletons),y=h(e.animations),E=h(e.nodes);d.length>0&&(r.geometries=d),p.length>0&&(r.materials=p),m.length>0&&(r.textures=m),g.length>0&&(r.images=g),v.length>0&&(r.shapes=v),S.length>0&&(r.skeletons=S),y.length>0&&(r.animations=y),E.length>0&&(r.nodes=E)}return r.object=l,r;function h(d){const p=[];for(const m in d){const g=d[m];delete g.metadata,p.push(g)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let r=0;r<e.children.length;r++){const l=e.children[r];this.add(l.clone())}return this}}In.DEFAULT_UP=new Z(0,1,0);In.DEFAULT_MATRIX_AUTO_UPDATE=!0;In.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ci=new Z,ga=new Z,Jd=new Z,va=new Z,Nr=new Z,Lr=new Z,m_=new Z,eh=new Z,th=new Z,nh=new Z,ih=new nn,ah=new nn,sh=new nn;class wi{constructor(e=new Z,i=new Z,r=new Z){this.a=e,this.b=i,this.c=r}static getNormal(e,i,r,l){l.subVectors(r,i),Ci.subVectors(e,i),l.cross(Ci);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(e,i,r,l,c){Ci.subVectors(l,i),ga.subVectors(r,i),Jd.subVectors(e,i);const h=Ci.dot(Ci),d=Ci.dot(ga),p=Ci.dot(Jd),m=ga.dot(ga),g=ga.dot(Jd),v=h*m-d*d;if(v===0)return c.set(0,0,0),null;const S=1/v,y=(m*p-d*g)*S,E=(h*g-d*p)*S;return c.set(1-y-E,E,y)}static containsPoint(e,i,r,l){return this.getBarycoord(e,i,r,l,va)===null?!1:va.x>=0&&va.y>=0&&va.x+va.y<=1}static getInterpolation(e,i,r,l,c,h,d,p){return this.getBarycoord(e,i,r,l,va)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(c,va.x),p.addScaledVector(h,va.y),p.addScaledVector(d,va.z),p)}static getInterpolatedAttribute(e,i,r,l,c,h){return ih.setScalar(0),ah.setScalar(0),sh.setScalar(0),ih.fromBufferAttribute(e,i),ah.fromBufferAttribute(e,r),sh.fromBufferAttribute(e,l),h.setScalar(0),h.addScaledVector(ih,c.x),h.addScaledVector(ah,c.y),h.addScaledVector(sh,c.z),h}static isFrontFacing(e,i,r,l){return Ci.subVectors(r,i),ga.subVectors(e,i),Ci.cross(ga).dot(l)<0}set(e,i,r){return this.a.copy(e),this.b.copy(i),this.c.copy(r),this}setFromPointsAndIndices(e,i,r,l){return this.a.copy(e[i]),this.b.copy(e[r]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,r,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ci.subVectors(this.c,this.b),ga.subVectors(this.a,this.b),Ci.cross(ga).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return wi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return wi.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,r,l,c){return wi.getInterpolation(e,this.a,this.b,this.c,i,r,l,c)}containsPoint(e){return wi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return wi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const r=this.a,l=this.b,c=this.c;let h,d;Nr.subVectors(l,r),Lr.subVectors(c,r),eh.subVectors(e,r);const p=Nr.dot(eh),m=Lr.dot(eh);if(p<=0&&m<=0)return i.copy(r);th.subVectors(e,l);const g=Nr.dot(th),v=Lr.dot(th);if(g>=0&&v<=g)return i.copy(l);const S=p*v-g*m;if(S<=0&&p>=0&&g<=0)return h=p/(p-g),i.copy(r).addScaledVector(Nr,h);nh.subVectors(e,c);const y=Nr.dot(nh),E=Lr.dot(nh);if(E>=0&&y<=E)return i.copy(c);const R=y*m-p*E;if(R<=0&&m>=0&&E<=0)return d=m/(m-E),i.copy(r).addScaledVector(Lr,d);const M=g*E-y*v;if(M<=0&&v-g>=0&&y-E>=0)return m_.subVectors(c,l),d=(v-g)/(v-g+(y-E)),i.copy(l).addScaledVector(m_,d);const _=1/(M+R+S);return h=R*_,d=S*_,i.copy(r).addScaledVector(Nr,h).addScaledVector(Lr,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const kx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ts={h:0,s:0,l:0},qc={h:0,s:0,l:0};function rh(s,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?s+(e-s)*6*i:i<1/2?e:i<2/3?s+(e-s)*6*(2/3-i):s}class ht{constructor(e,i,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,r)}set(e,i,r){if(i===void 0&&r===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=ai){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Rt.colorSpaceToWorking(this,i),this}setRGB(e,i,r,l=Rt.workingColorSpace){return this.r=e,this.g=i,this.b=r,Rt.colorSpaceToWorking(this,l),this}setHSL(e,i,r,l=Rt.workingColorSpace){if(e=Zp(e,1),i=_t(i,0,1),r=_t(r,0,1),i===0)this.r=this.g=this.b=r;else{const c=r<=.5?r*(1+i):r+i-r*i,h=2*r-c;this.r=rh(h,c,e+1/3),this.g=rh(h,c,e),this.b=rh(h,c,e-1/3)}return Rt.colorSpaceToWorking(this,l),this}setStyle(e,i=ai){function r(c){c!==void 0&&parseFloat(c)<1&&st("Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const h=l[1],d=l[2];switch(h){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:st("Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=l[1],h=c.length;if(h===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(c,16),i);st("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=ai){const r=kx[e.toLowerCase()];return r!==void 0?this.setHex(r,i):st("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ma(e.r),this.g=Ma(e.g),this.b=Ma(e.b),this}copyLinearToSRGB(e){return this.r=qr(e.r),this.g=qr(e.g),this.b=qr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ai){return Rt.workingToColorSpace(Pn.copy(this),e),Math.round(_t(Pn.r*255,0,255))*65536+Math.round(_t(Pn.g*255,0,255))*256+Math.round(_t(Pn.b*255,0,255))}getHexString(e=ai){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=Rt.workingColorSpace){Rt.workingToColorSpace(Pn.copy(this),i);const r=Pn.r,l=Pn.g,c=Pn.b,h=Math.max(r,l,c),d=Math.min(r,l,c);let p,m;const g=(d+h)/2;if(d===h)p=0,m=0;else{const v=h-d;switch(m=g<=.5?v/(h+d):v/(2-h-d),h){case r:p=(l-c)/v+(l<c?6:0);break;case l:p=(c-r)/v+2;break;case c:p=(r-l)/v+4;break}p/=6}return e.h=p,e.s=m,e.l=g,e}getRGB(e,i=Rt.workingColorSpace){return Rt.workingToColorSpace(Pn.copy(this),i),e.r=Pn.r,e.g=Pn.g,e.b=Pn.b,e}getStyle(e=ai){Rt.workingToColorSpace(Pn.copy(this),e);const i=Pn.r,r=Pn.g,l=Pn.b;return e!==ai?`color(${e} ${i.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(e,i,r){return this.getHSL(ts),this.setHSL(ts.h+e,ts.s+i,ts.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,r){return this.r=e.r+(i.r-e.r)*r,this.g=e.g+(i.g-e.g)*r,this.b=e.b+(i.b-e.b)*r,this}lerpHSL(e,i){this.getHSL(ts),e.getHSL(qc);const r=dl(ts.h,qc.h,i),l=dl(ts.s,qc.s,i),c=dl(ts.l,qc.l,i);return this.setHSL(r,l,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,r=this.g,l=this.b,c=e.elements;return this.r=c[0]*i+c[3]*r+c[6]*l,this.g=c[1]*i+c[4]*r+c[7]*l,this.b=c[2]*i+c[5]*r+c[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Pn=new ht;ht.NAMES=kx;let n1=0;class to extends Jr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:n1++}),this.uuid=eo(),this.name="",this.type="Material",this.blending=Wr,this.side=os,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ch,this.blendDst=wh,this.blendEquation=Ls,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ht(0,0,0),this.blendAlpha=0,this.depthFunc=jr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Jv,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Er,this.stencilZFail=Er,this.stencilZPass=Er,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const r=e[i];if(r===void 0){st(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){st(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[i]=r}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Wr&&(r.blending=this.blending),this.side!==os&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Ch&&(r.blendSrc=this.blendSrc),this.blendDst!==wh&&(r.blendDst=this.blendDst),this.blendEquation!==Ls&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==jr&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Jv&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Er&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Er&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Er&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.allowOverride===!1&&(r.allowOverride=!1),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(c){const h=[];for(const d in c){const p=c[d];delete p.metadata,h.push(p)}return h}if(i){const c=l(e.textures),h=l(e.images);c.length>0&&(r.textures=c),h.length>0&&(r.images=h)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let r=null;if(i!==null){const l=i.length;r=new Array(l);for(let c=0;c!==l;++c)r[c]=i[c].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Xx extends to{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ht(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Li,this.combine=Ip,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const hn=new Z,jc=new Mt;let i1=0;class Ni{constructor(e,i,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:i1++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=r,this.usage=e_,this.updateRanges=[],this.gpuType=Di,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,r){e*=this.itemSize,r*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[e+l]=i.array[r+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,r=this.count;i<r;i++)jc.fromBufferAttribute(this,i),jc.applyMatrix3(e),this.setXY(i,jc.x,jc.y);else if(this.itemSize===3)for(let i=0,r=this.count;i<r;i++)hn.fromBufferAttribute(this,i),hn.applyMatrix3(e),this.setXYZ(i,hn.x,hn.y,hn.z);return this}applyMatrix4(e){for(let i=0,r=this.count;i<r;i++)hn.fromBufferAttribute(this,i),hn.applyMatrix4(e),this.setXYZ(i,hn.x,hn.y,hn.z);return this}applyNormalMatrix(e){for(let i=0,r=this.count;i<r;i++)hn.fromBufferAttribute(this,i),hn.applyNormalMatrix(e),this.setXYZ(i,hn.x,hn.y,hn.z);return this}transformDirection(e){for(let i=0,r=this.count;i<r;i++)hn.fromBufferAttribute(this,i),hn.transformDirection(e),this.setXYZ(i,hn.x,hn.y,hn.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let r=this.array[e*this.itemSize+i];return this.normalized&&(r=kr(r,this.array)),r}setComponent(e,i,r){return this.normalized&&(r=zn(r,this.array)),this.array[e*this.itemSize+i]=r,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=kr(i,this.array)),i}setX(e,i){return this.normalized&&(i=zn(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=kr(i,this.array)),i}setY(e,i){return this.normalized&&(i=zn(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=kr(i,this.array)),i}setZ(e,i){return this.normalized&&(i=zn(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=kr(i,this.array)),i}setW(e,i){return this.normalized&&(i=zn(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,r){return e*=this.itemSize,this.normalized&&(i=zn(i,this.array),r=zn(r,this.array)),this.array[e+0]=i,this.array[e+1]=r,this}setXYZ(e,i,r,l){return e*=this.itemSize,this.normalized&&(i=zn(i,this.array),r=zn(r,this.array),l=zn(l,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this}setXYZW(e,i,r,l,c){return e*=this.itemSize,this.normalized&&(i=zn(i,this.array),r=zn(r,this.array),l=zn(l,this.array),c=zn(c,this.array)),this.array[e+0]=i,this.array[e+1]=r,this.array[e+2]=l,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==e_&&(e.usage=this.usage),e}}class Wx extends Ni{constructor(e,i,r){super(new Uint16Array(e),i,r)}}class qx extends Ni{constructor(e,i,r){super(new Uint32Array(e),i,r)}}class xi extends Ni{constructor(e,i,r){super(new Float32Array(e),i,r)}}let a1=0;const _i=new qt,oh=new In,Or=new Z,ii=new Hs,nl=new Hs,xn=new Z;class Yi extends Jr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:a1++}),this.uuid=eo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Hx(e)?qx:Wx)(e,1):this.index=e,this}setIndirect(e,i=0){return this.indirect=e,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,r=0){this.groups.push({start:e,count:i,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const c=new dt().getNormalMatrix(e);r.applyNormalMatrix(c),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return _i.makeRotationFromQuaternion(e),this.applyMatrix4(_i),this}rotateX(e){return _i.makeRotationX(e),this.applyMatrix4(_i),this}rotateY(e){return _i.makeRotationY(e),this.applyMatrix4(_i),this}rotateZ(e){return _i.makeRotationZ(e),this.applyMatrix4(_i),this}translate(e,i,r){return _i.makeTranslation(e,i,r),this.applyMatrix4(_i),this}scale(e,i,r){return _i.makeScale(e,i,r),this.applyMatrix4(_i),this}lookAt(e){return oh.lookAt(e),oh.updateMatrix(),this.applyMatrix4(oh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Or).negate(),this.translate(Or.x,Or.y,Or.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const r=[];for(let l=0,c=e.length;l<c;l++){const h=e[l];r.push(h.x,h.y,h.z||0)}this.setAttribute("position",new xi(r,3))}else{const r=Math.min(e.length,i.count);for(let l=0;l<r;l++){const c=e[l];i.setXYZ(l,c.x,c.y,c.z||0)}e.length>i.count&&st("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Hs);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){At("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Z(-1/0,-1/0,-1/0),new Z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let r=0,l=i.length;r<l;r++){const c=i[r];ii.setFromBufferAttribute(c),this.morphTargetsRelative?(xn.addVectors(this.boundingBox.min,ii.min),this.boundingBox.expandByPoint(xn),xn.addVectors(this.boundingBox.max,ii.max),this.boundingBox.expandByPoint(xn)):(this.boundingBox.expandByPoint(ii.min),this.boundingBox.expandByPoint(ii.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&At('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new bl);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){At("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Z,1/0);return}if(e){const r=this.boundingSphere.center;if(ii.setFromBufferAttribute(e),i)for(let c=0,h=i.length;c<h;c++){const d=i[c];nl.setFromBufferAttribute(d),this.morphTargetsRelative?(xn.addVectors(ii.min,nl.min),ii.expandByPoint(xn),xn.addVectors(ii.max,nl.max),ii.expandByPoint(xn)):(ii.expandByPoint(nl.min),ii.expandByPoint(nl.max))}ii.getCenter(r);let l=0;for(let c=0,h=e.count;c<h;c++)xn.fromBufferAttribute(e,c),l=Math.max(l,r.distanceToSquared(xn));if(i)for(let c=0,h=i.length;c<h;c++){const d=i[c],p=this.morphTargetsRelative;for(let m=0,g=d.count;m<g;m++)xn.fromBufferAttribute(d,m),p&&(Or.fromBufferAttribute(e,m),xn.add(Or)),l=Math.max(l,r.distanceToSquared(xn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&At('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){At("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ni(new Float32Array(4*r.count),4));const h=this.getAttribute("tangent"),d=[],p=[];for(let K=0;K<r.count;K++)d[K]=new Z,p[K]=new Z;const m=new Z,g=new Z,v=new Z,S=new Mt,y=new Mt,E=new Mt,R=new Z,M=new Z;function _(K,C,w){m.fromBufferAttribute(r,K),g.fromBufferAttribute(r,C),v.fromBufferAttribute(r,w),S.fromBufferAttribute(c,K),y.fromBufferAttribute(c,C),E.fromBufferAttribute(c,w),g.sub(m),v.sub(m),y.sub(S),E.sub(S);const k=1/(y.x*E.y-E.x*y.y);isFinite(k)&&(R.copy(g).multiplyScalar(E.y).addScaledVector(v,-y.y).multiplyScalar(k),M.copy(v).multiplyScalar(y.x).addScaledVector(g,-E.x).multiplyScalar(k),d[K].add(R),d[C].add(R),d[w].add(R),p[K].add(M),p[C].add(M),p[w].add(M))}let N=this.groups;N.length===0&&(N=[{start:0,count:e.count}]);for(let K=0,C=N.length;K<C;++K){const w=N[K],k=w.start,re=w.count;for(let se=k,pe=k+re;se<pe;se+=3)_(e.getX(se+0),e.getX(se+1),e.getX(se+2))}const O=new Z,L=new Z,I=new Z,z=new Z;function F(K){I.fromBufferAttribute(l,K),z.copy(I);const C=d[K];O.copy(C),O.sub(I.multiplyScalar(I.dot(C))).normalize(),L.crossVectors(z,C);const k=L.dot(p[K])<0?-1:1;h.setXYZW(K,O.x,O.y,O.z,k)}for(let K=0,C=N.length;K<C;++K){const w=N[K],k=w.start,re=w.count;for(let se=k,pe=k+re;se<pe;se+=3)F(e.getX(se+0)),F(e.getX(se+1)),F(e.getX(se+2))}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Ni(new Float32Array(i.count*3),3),this.setAttribute("normal",r);else for(let S=0,y=r.count;S<y;S++)r.setXYZ(S,0,0,0);const l=new Z,c=new Z,h=new Z,d=new Z,p=new Z,m=new Z,g=new Z,v=new Z;if(e)for(let S=0,y=e.count;S<y;S+=3){const E=e.getX(S+0),R=e.getX(S+1),M=e.getX(S+2);l.fromBufferAttribute(i,E),c.fromBufferAttribute(i,R),h.fromBufferAttribute(i,M),g.subVectors(h,c),v.subVectors(l,c),g.cross(v),d.fromBufferAttribute(r,E),p.fromBufferAttribute(r,R),m.fromBufferAttribute(r,M),d.add(g),p.add(g),m.add(g),r.setXYZ(E,d.x,d.y,d.z),r.setXYZ(R,p.x,p.y,p.z),r.setXYZ(M,m.x,m.y,m.z)}else for(let S=0,y=i.count;S<y;S+=3)l.fromBufferAttribute(i,S+0),c.fromBufferAttribute(i,S+1),h.fromBufferAttribute(i,S+2),g.subVectors(h,c),v.subVectors(l,c),g.cross(v),r.setXYZ(S+0,g.x,g.y,g.z),r.setXYZ(S+1,g.x,g.y,g.z),r.setXYZ(S+2,g.x,g.y,g.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,r=e.count;i<r;i++)xn.fromBufferAttribute(e,i),xn.normalize(),e.setXYZ(i,xn.x,xn.y,xn.z)}toNonIndexed(){function e(d,p){const m=d.array,g=d.itemSize,v=d.normalized,S=new m.constructor(p.length*g);let y=0,E=0;for(let R=0,M=p.length;R<M;R++){d.isInterleavedBufferAttribute?y=p[R]*d.data.stride+d.offset:y=p[R]*g;for(let _=0;_<g;_++)S[E++]=m[y++]}return new Ni(S,g,v)}if(this.index===null)return st("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Yi,r=this.index.array,l=this.attributes;for(const d in l){const p=l[d],m=e(p,r);i.setAttribute(d,m)}const c=this.morphAttributes;for(const d in c){const p=[],m=c[d];for(let g=0,v=m.length;g<v;g++){const S=m[g],y=e(S,r);p.push(y)}i.morphAttributes[d]=p}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let d=0,p=h.length;d<p;d++){const m=h[d];i.addGroup(m.start,m.count,m.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const m in p)p[m]!==void 0&&(e[m]=p[m]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const r=this.attributes;for(const p in r){const m=r[p];e.data.attributes[p]=m.toJSON(e.data)}const l={};let c=!1;for(const p in this.morphAttributes){const m=this.morphAttributes[p],g=[];for(let v=0,S=m.length;v<S;v++){const y=m[v];g.push(y.toJSON(e.data))}g.length>0&&(l[p]=g,c=!0)}c&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(e.data.groups=JSON.parse(JSON.stringify(h)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere=d.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const l=e.attributes;for(const m in l){const g=l[m];this.setAttribute(m,g.clone(i))}const c=e.morphAttributes;for(const m in c){const g=[],v=c[m];for(let S=0,y=v.length;S<y;S++)g.push(v[S].clone(i));this.morphAttributes[m]=g}this.morphTargetsRelative=e.morphTargetsRelative;const h=e.groups;for(let m=0,g=h.length;m<g;m++){const v=h[m];this.addGroup(v.start,v.count,v.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const g_=new qt,ws=new Vx,Yc=new bl,v_=new Z,Zc=new Z,Kc=new Z,Qc=new Z,lh=new Z,$c=new Z,__=new Z,Jc=new Z;class Sn extends In{constructor(e=new Yi,i=new Xx){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,r=Object.keys(i);if(r.length>0){const l=i[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}getVertexPosition(e,i){const r=this.geometry,l=r.attributes.position,c=r.morphAttributes.position,h=r.morphTargetsRelative;i.fromBufferAttribute(l,e);const d=this.morphTargetInfluences;if(c&&d){$c.set(0,0,0);for(let p=0,m=c.length;p<m;p++){const g=d[p],v=c[p];g!==0&&(lh.fromBufferAttribute(v,e),h?$c.addScaledVector(lh,g):$c.addScaledVector(lh.sub(i),g))}i.add($c)}return i}raycast(e,i){const r=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Yc.copy(r.boundingSphere),Yc.applyMatrix4(c),ws.copy(e.ray).recast(e.near),!(Yc.containsPoint(ws.origin)===!1&&(ws.intersectSphere(Yc,v_)===null||ws.origin.distanceToSquared(v_)>(e.far-e.near)**2))&&(g_.copy(c).invert(),ws.copy(e.ray).applyMatrix4(g_),!(r.boundingBox!==null&&ws.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,i,ws)))}_computeIntersections(e,i,r){let l;const c=this.geometry,h=this.material,d=c.index,p=c.attributes.position,m=c.attributes.uv,g=c.attributes.uv1,v=c.attributes.normal,S=c.groups,y=c.drawRange;if(d!==null)if(Array.isArray(h))for(let E=0,R=S.length;E<R;E++){const M=S[E],_=h[M.materialIndex],N=Math.max(M.start,y.start),O=Math.min(d.count,Math.min(M.start+M.count,y.start+y.count));for(let L=N,I=O;L<I;L+=3){const z=d.getX(L),F=d.getX(L+1),K=d.getX(L+2);l=eu(this,_,e,r,m,g,v,z,F,K),l&&(l.faceIndex=Math.floor(L/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const E=Math.max(0,y.start),R=Math.min(d.count,y.start+y.count);for(let M=E,_=R;M<_;M+=3){const N=d.getX(M),O=d.getX(M+1),L=d.getX(M+2);l=eu(this,h,e,r,m,g,v,N,O,L),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}else if(p!==void 0)if(Array.isArray(h))for(let E=0,R=S.length;E<R;E++){const M=S[E],_=h[M.materialIndex],N=Math.max(M.start,y.start),O=Math.min(p.count,Math.min(M.start+M.count,y.start+y.count));for(let L=N,I=O;L<I;L+=3){const z=L,F=L+1,K=L+2;l=eu(this,_,e,r,m,g,v,z,F,K),l&&(l.faceIndex=Math.floor(L/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const E=Math.max(0,y.start),R=Math.min(p.count,y.start+y.count);for(let M=E,_=R;M<_;M+=3){const N=M,O=M+1,L=M+2;l=eu(this,h,e,r,m,g,v,N,O,L),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}}}function s1(s,e,i,r,l,c,h,d){let p;if(e.side===Gn?p=r.intersectTriangle(h,c,l,!0,d):p=r.intersectTriangle(l,c,h,e.side===os,d),p===null)return null;Jc.copy(d),Jc.applyMatrix4(s.matrixWorld);const m=i.ray.origin.distanceTo(Jc);return m<i.near||m>i.far?null:{distance:m,point:Jc.clone(),object:s}}function eu(s,e,i,r,l,c,h,d,p,m){s.getVertexPosition(d,Zc),s.getVertexPosition(p,Kc),s.getVertexPosition(m,Qc);const g=s1(s,e,i,r,Zc,Kc,Qc,__);if(g){const v=new Z;wi.getBarycoord(__,Zc,Kc,Qc,v),l&&(g.uv=wi.getInterpolatedAttribute(l,d,p,m,v,new Mt)),c&&(g.uv1=wi.getInterpolatedAttribute(c,d,p,m,v,new Mt)),h&&(g.normal=wi.getInterpolatedAttribute(h,d,p,m,v,new Z),g.normal.dot(r.direction)>0&&g.normal.multiplyScalar(-1));const S={a:d,b:p,c:m,normal:new Z,materialIndex:0};wi.getNormal(Zc,Kc,Qc,S.normal),g.face=S,g.barycoord=v}return g}class no extends Yi{constructor(e=1,i=1,r=1,l=1,c=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:r,widthSegments:l,heightSegments:c,depthSegments:h};const d=this;l=Math.floor(l),c=Math.floor(c),h=Math.floor(h);const p=[],m=[],g=[],v=[];let S=0,y=0;E("z","y","x",-1,-1,r,i,e,h,c,0),E("z","y","x",1,-1,r,i,-e,h,c,1),E("x","z","y",1,1,e,r,i,l,h,2),E("x","z","y",1,-1,e,r,-i,l,h,3),E("x","y","z",1,-1,e,i,r,l,c,4),E("x","y","z",-1,-1,e,i,-r,l,c,5),this.setIndex(p),this.setAttribute("position",new xi(m,3)),this.setAttribute("normal",new xi(g,3)),this.setAttribute("uv",new xi(v,2));function E(R,M,_,N,O,L,I,z,F,K,C){const w=L/F,k=I/K,re=L/2,se=I/2,pe=z/2,fe=F+1,P=K+1;let H=0,ae=0;const Me=new Z;for(let Se=0;Se<P;Se++){const U=Se*k-se;for(let ie=0;ie<fe;ie++){const ve=ie*w-re;Me[R]=ve*N,Me[M]=U*O,Me[_]=pe,m.push(Me.x,Me.y,Me.z),Me[R]=0,Me[M]=0,Me[_]=z>0?1:-1,g.push(Me.x,Me.y,Me.z),v.push(ie/F),v.push(1-Se/K),H+=1}}for(let Se=0;Se<K;Se++)for(let U=0;U<F;U++){const ie=S+U+fe*Se,ve=S+U+fe*(Se+1),Re=S+(U+1)+fe*(Se+1),He=S+(U+1)+fe*Se;p.push(ie,ve,He),p.push(ve,Re,He),ae+=6}d.addGroup(y,ae,C),y+=ae,S+=H}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new no(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Qr(s){const e={};for(const i in s){e[i]={};for(const r in s[i]){const l=s[i][r];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(st("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][r]=null):e[i][r]=l.clone():Array.isArray(l)?e[i][r]=l.slice():e[i][r]=l}}return e}function Hn(s){const e={};for(let i=0;i<s.length;i++){const r=Qr(s[i]);for(const l in r)e[l]=r[l]}return e}function r1(s){const e=[];for(let i=0;i<s.length;i++)e.push(s[i].clone());return e}function jx(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Rt.workingColorSpace}const o1={clone:Qr,merge:Hn};var l1=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,c1=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ji extends to{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=l1,this.fragmentShader=c1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Qr(e.uniforms),this.uniformsGroups=r1(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(e).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(i.extensions=r),i}}class Yx extends In{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new qt,this.projectionMatrix=new qt,this.projectionMatrixInverse=new qt,this.coordinateSystem=Vi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ns=new Z,x_=new Mt,S_=new Mt;class si extends Yx{constructor(e=50,i=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=_l*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(fl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return _l*2*Math.atan(Math.tan(fl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,r){ns.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ns.x,ns.y).multiplyScalar(-e/ns.z),ns.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(ns.x,ns.y).multiplyScalar(-e/ns.z)}getViewSize(e,i){return this.getViewBounds(e,x_,S_),i.subVectors(S_,x_)}setViewOffset(e,i,r,l,c,h){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(fl*.5*this.fov)/this.zoom,r=2*i,l=this.aspect*r,c=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const p=h.fullWidth,m=h.fullHeight;c+=h.offsetX*l/p,i-=h.offsetY*r/m,l*=h.width/p,r*=h.height/m}const d=this.filmOffset;d!==0&&(c+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const Pr=-90,Fr=1;class u1 extends In{constructor(e,i,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new si(Pr,Fr,e,i);l.layers=this.layers,this.add(l);const c=new si(Pr,Fr,e,i);c.layers=this.layers,this.add(c);const h=new si(Pr,Fr,e,i);h.layers=this.layers,this.add(h);const d=new si(Pr,Fr,e,i);d.layers=this.layers,this.add(d);const p=new si(Pr,Fr,e,i);p.layers=this.layers,this.add(p);const m=new si(Pr,Fr,e,i);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[r,l,c,h,d,p]=i;for(const m of i)this.remove(m);if(e===Vi)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(e===xu)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const m of i)this.add(m),m.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,h,d,p,m,g]=this.children,v=e.getRenderTarget(),S=e.getActiveCubeFace(),y=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const R=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,l),e.render(i,c),e.setRenderTarget(r,1,l),e.render(i,h),e.setRenderTarget(r,2,l),e.render(i,d),e.setRenderTarget(r,3,l),e.render(i,p),e.setRenderTarget(r,4,l),e.render(i,m),r.texture.generateMipmaps=R,e.setRenderTarget(r,5,l),e.render(i,g),e.setRenderTarget(v,S,y),e.xr.enabled=E,r.texture.needsPMREMUpdate=!0}}class Zx extends Vn{constructor(e=[],i=zs,r,l,c,h,d,p,m,g){super(e,i,r,l,c,h,d,p,m,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Kx extends Wi{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},l=[r,r,r,r,r,r];this.texture=new Zx(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new no(5,5,5),c=new ji({name:"CubemapFromEquirect",uniforms:Qr(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Gn,blending:ya});c.uniforms.tEquirect.value=i;const h=new Sn(l,c),d=i.minFilter;return i.minFilter===Fs&&(i.minFilter=Fn),new u1(1,10,this).update(e,h),i.minFilter=d,h.geometry.dispose(),h.material.dispose(),this}clear(e,i=!0,r=!0,l=!0){const c=e.getRenderTarget();for(let h=0;h<6;h++)e.setRenderTarget(this,h),e.clear(i,r,l);e.setRenderTarget(c)}}class tu extends In{constructor(){super(),this.isGroup=!0,this.type="Group"}}const f1={type:"move"};class ch{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new tu,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new tu,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new tu,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Z),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const r of e.hand.values())this._getHandJoint(i,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,r){let l=null,c=null,h=null;const d=this._targetRay,p=this._grip,m=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(m&&e.hand){h=!0;for(const R of e.hand.values()){const M=i.getJointPose(R,r),_=this._getHandJoint(m,R);M!==null&&(_.matrix.fromArray(M.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=M.radius),_.visible=M!==null}const g=m.joints["index-finger-tip"],v=m.joints["thumb-tip"],S=g.position.distanceTo(v.position),y=.02,E=.005;m.inputState.pinching&&S>y+E?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!m.inputState.pinching&&S<=y-E&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else p!==null&&e.gripSpace&&(c=i.getPose(e.gripSpace,r),c!==null&&(p.matrix.fromArray(c.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,c.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(c.linearVelocity)):p.hasLinearVelocity=!1,c.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(c.angularVelocity)):p.hasAngularVelocity=!1));d!==null&&(l=i.getPose(e.targetRaySpace,r),l===null&&c!==null&&(l=c),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(f1)))}return d!==null&&(d.visible=l!==null),p!==null&&(p.visible=c!==null),m!==null&&(m.visible=h!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const r=new tu;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[i.jointName]=r,e.add(r)}return e.joints[i.jointName]}}class Qx extends In{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Li,this.environmentIntensity=1,this.environmentRotation=new Li,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}class $x extends Vn{constructor(e=null,i=1,r=1,l,c,h,d,p,m=Un,g=Un,v,S){super(null,h,d,p,m,g,l,c,v,S),this.isDataTexture=!0,this.image={data:e,width:i,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class y_ extends Ni{constructor(e,i,r,l=1){super(e,i,r),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=l}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Ir=new qt,M_=new qt,nu=[],b_=new Hs,d1=new qt,il=new Sn,al=new bl;class Jx extends Sn{constructor(e,i,r){super(e,i),this.isInstancedMesh=!0,this.instanceMatrix=new y_(new Float32Array(r*16),16),this.instanceColor=null,this.morphTexture=null,this.count=r,this.boundingBox=null,this.boundingSphere=null;for(let l=0;l<r;l++)this.setMatrixAt(l,d1)}computeBoundingBox(){const e=this.geometry,i=this.count;this.boundingBox===null&&(this.boundingBox=new Hs),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let r=0;r<i;r++)this.getMatrixAt(r,Ir),b_.copy(e.boundingBox).applyMatrix4(Ir),this.boundingBox.union(b_)}computeBoundingSphere(){const e=this.geometry,i=this.count;this.boundingSphere===null&&(this.boundingSphere=new bl),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let r=0;r<i;r++)this.getMatrixAt(r,Ir),al.copy(e.boundingSphere).applyMatrix4(Ir),this.boundingSphere.union(al)}copy(e,i){return super.copy(e,i),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,i){i.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,i){i.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,i){const r=i.morphTargetInfluences,l=this.morphTexture.source.data.data,c=r.length+1,h=e*c+1;for(let d=0;d<r.length;d++)r[d]=l[h+d]}raycast(e,i){const r=this.matrixWorld,l=this.count;if(il.geometry=this.geometry,il.material=this.material,il.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),al.copy(this.boundingSphere),al.applyMatrix4(r),e.ray.intersectsSphere(al)!==!1))for(let c=0;c<l;c++){this.getMatrixAt(c,Ir),M_.multiplyMatrices(r,Ir),il.matrixWorld=M_,il.raycast(e,nu);for(let h=0,d=nu.length;h<d;h++){const p=nu[h];p.instanceId=c,p.object=this,i.push(p)}nu.length=0}}setColorAt(e,i){this.instanceColor===null&&(this.instanceColor=new y_(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),i.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,i){i.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,i){const r=i.morphTargetInfluences,l=r.length+1;this.morphTexture===null&&(this.morphTexture=new $x(new Float32Array(l*this.count),l,this.count,Vp,Di));const c=this.morphTexture.source.data.data;let h=0;for(let m=0;m<r.length;m++)h+=r[m];const d=this.geometry.morphTargetsRelative?1:1-h,p=l*e;c[p]=d,c.set(r,p+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const uh=new Z,h1=new Z,p1=new dt;class as{constructor(e=new Z(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,r,l){return this.normal.set(e,i,r),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,r){const l=uh.subVectors(r,i).cross(h1.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i){const r=e.delta(uh),l=this.normal.dot(r);if(l===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(e.start).addScaledVector(r,c)}intersectsLine(e){const i=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return i<0&&r>0||r<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const r=i||p1.getNormalMatrix(e),l=this.coplanarPoint(uh).applyMatrix4(e),c=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ds=new bl,m1=new Mt(.5,.5),iu=new Z;class $p{constructor(e=new as,i=new as,r=new as,l=new as,c=new as,h=new as){this.planes=[e,i,r,l,c,h]}set(e,i,r,l,c,h){const d=this.planes;return d[0].copy(e),d[1].copy(i),d[2].copy(r),d[3].copy(l),d[4].copy(c),d[5].copy(h),this}copy(e){const i=this.planes;for(let r=0;r<6;r++)i[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,i=Vi,r=!1){const l=this.planes,c=e.elements,h=c[0],d=c[1],p=c[2],m=c[3],g=c[4],v=c[5],S=c[6],y=c[7],E=c[8],R=c[9],M=c[10],_=c[11],N=c[12],O=c[13],L=c[14],I=c[15];if(l[0].setComponents(m-h,y-g,_-E,I-N).normalize(),l[1].setComponents(m+h,y+g,_+E,I+N).normalize(),l[2].setComponents(m+d,y+v,_+R,I+O).normalize(),l[3].setComponents(m-d,y-v,_-R,I-O).normalize(),r)l[4].setComponents(p,S,M,L).normalize(),l[5].setComponents(m-p,y-S,_-M,I-L).normalize();else if(l[4].setComponents(m-p,y-S,_-M,I-L).normalize(),i===Vi)l[5].setComponents(m+p,y+S,_+M,I+L).normalize();else if(i===xu)l[5].setComponents(p,S,M,L).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ds.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Ds.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ds)}intersectsSprite(e){Ds.center.set(0,0,0);const i=m1.distanceTo(e.center);return Ds.radius=.7071067811865476+i,Ds.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ds)}intersectsSphere(e){const i=this.planes,r=e.center,l=-e.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(r)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let r=0;r<6;r++){const l=i[r];if(iu.x=l.normal.x>0?e.max.x:e.min.x,iu.y=l.normal.y>0?e.max.y:e.min.y,iu.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(iu)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let r=0;r<6;r++)if(i[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class xl extends Vn{constructor(e,i,r=qi,l,c,h,d=Un,p=Un,m,g=Ea,v=1){if(g!==Ea&&g!==Is)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const S={width:e,height:i,depth:v};super(S,l,c,h,d,p,g,r,m),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Kp(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class g1 extends xl{constructor(e,i=qi,r=zs,l,c,h=Un,d=Un,p,m=Ea){const g={width:e,height:e,depth:1},v=[g,g,g,g,g,g];super(e,e,i,r,l,c,h,d,p,m),this.image=v,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class eS extends Vn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Tu extends Yi{constructor(e=1,i=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:r,heightSegments:l};const c=e/2,h=i/2,d=Math.floor(r),p=Math.floor(l),m=d+1,g=p+1,v=e/d,S=i/p,y=[],E=[],R=[],M=[];for(let _=0;_<g;_++){const N=_*S-h;for(let O=0;O<m;O++){const L=O*v-c;E.push(L,-N,0),R.push(0,0,1),M.push(O/d),M.push(1-_/p)}}for(let _=0;_<p;_++)for(let N=0;N<d;N++){const O=N+m*_,L=N+m*(_+1),I=N+1+m*(_+1),z=N+1+m*_;y.push(O,L,z),y.push(L,I,z)}this.setIndex(y),this.setAttribute("position",new xi(E,3)),this.setAttribute("normal",new xi(R,3)),this.setAttribute("uv",new xi(M,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Tu(e.width,e.height,e.widthSegments,e.heightSegments)}}class Jp extends Yi{constructor(e=1,i=32,r=16,l=0,c=Math.PI*2,h=0,d=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:i,heightSegments:r,phiStart:l,phiLength:c,thetaStart:h,thetaLength:d},i=Math.max(3,Math.floor(i)),r=Math.max(2,Math.floor(r));const p=Math.min(h+d,Math.PI);let m=0;const g=[],v=new Z,S=new Z,y=[],E=[],R=[],M=[];for(let _=0;_<=r;_++){const N=[],O=_/r;let L=0;_===0&&h===0?L=.5/i:_===r&&p===Math.PI&&(L=-.5/i);for(let I=0;I<=i;I++){const z=I/i;v.x=-e*Math.cos(l+z*c)*Math.sin(h+O*d),v.y=e*Math.cos(h+O*d),v.z=e*Math.sin(l+z*c)*Math.sin(h+O*d),E.push(v.x,v.y,v.z),S.copy(v).normalize(),R.push(S.x,S.y,S.z),M.push(z+L,1-O),N.push(m++)}g.push(N)}for(let _=0;_<r;_++)for(let N=0;N<i;N++){const O=g[_][N+1],L=g[_][N],I=g[_+1][N],z=g[_+1][N+1];(_!==0||h>0)&&y.push(O,L,z),(_!==r-1||p<Math.PI)&&y.push(L,I,z)}this.setIndex(y),this.setAttribute("position",new xi(E,3)),this.setAttribute("normal",new xi(R,3)),this.setAttribute("uv",new xi(M,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Jp(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class v1 extends ji{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Sp extends to{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ht(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ht(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=qp,this.normalScale=new Mt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Li,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class _1 extends Sp{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Mt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return _t(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(i){this.ior=(1+.4*i)/(1-.4*i)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ht(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ht(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ht(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class x1 extends to{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new ht(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ht(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=qp,this.normalScale=new Mt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Li,this.combine=Ip,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class S1 extends to{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=vE,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class y1 extends to{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class tS extends In{constructor(e,i=1){super(),this.isLight=!0,this.type="Light",this.color=new ht(e),this.intensity=i}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,i){return super.copy(e,i),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const i=super.toJSON(e);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,i}}const fh=new qt,E_=new Z,T_=new Z;class M1{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Mt(512,512),this.mapType=ri,this.map=null,this.mapPass=null,this.matrix=new qt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new $p,this._frameExtents=new Mt(1,1),this._viewportCount=1,this._viewports=[new nn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const i=this.camera,r=this.matrix;E_.setFromMatrixPosition(e.matrixWorld),i.position.copy(E_),T_.setFromMatrixPosition(e.target.matrixWorld),i.lookAt(T_),i.updateMatrixWorld(),fh.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(fh,i.coordinateSystem,i.reversedDepth),i.reversedDepth?r.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(fh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class b1 extends M1{constructor(){super(new si(90,1,.5,500)),this.isPointLightShadow=!0}}class nS extends tS{constructor(e,i,r=0,l=2){super(e,i),this.isPointLight=!0,this.type="PointLight",this.distance=r,this.decay=l,this.shadow=new b1}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,i){return super.copy(e,i),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const i=super.toJSON(e);return i.object.distance=this.distance,i.object.decay=this.decay,i.object.shadow=this.shadow.toJSON(),i}}class iS extends Yx{constructor(e=-1,i=1,r=1,l=-1,c=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=r,this.bottom=l,this.near=c,this.far=h,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,r,l,c,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=r-e,h=r+e,d=l+i,p=l-i;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=m*this.view.offsetX,h=c+m*this.view.width,d-=g*this.view.offsetY,p=d-g*this.view.height}this.projectionMatrix.makeOrthographic(c,h,d,p,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class E1 extends tS{constructor(e,i){super(e,i),this.isAmbientLight=!0,this.type="AmbientLight"}}class T1 extends si{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class A1{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const i=performance.now();e=(i-this.oldTime)/1e3,this.oldTime=i,this.elapsedTime+=e}return e}}const A_=new qt;class R1{constructor(e,i,r=0,l=1/0){this.ray=new Vx(e,i),this.near=r,this.far=l,this.camera=null,this.layers=new Qp,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,i){this.ray.set(e,i)}setFromCamera(e,i){i.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(i.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(i).sub(this.ray.origin).normalize(),this.camera=i):i.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(i.near+i.far)/(i.near-i.far)).unproject(i),this.ray.direction.set(0,0,-1).transformDirection(i.matrixWorld),this.camera=i):At("Raycaster: Unsupported camera type: "+i.type)}setFromXRController(e){return A_.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(A_),this}intersectObject(e,i=!0,r=[]){return yp(e,this,r,i),r.sort(R_),r}intersectObjects(e,i=!0,r=[]){for(let l=0,c=e.length;l<c;l++)yp(e[l],this,r,i);return r.sort(R_),r}}function R_(s,e){return s.distance-e.distance}function yp(s,e,i,r){let l=!0;if(s.layers.test(e.layers)&&s.raycast(e,i)===!1&&(l=!1),l===!0&&r===!0){const c=s.children;for(let h=0,d=c.length;h<d;h++)yp(c[h],e,i,!0)}}function C_(s,e,i,r){const l=C1(r);switch(i){case Bx:return s*e;case Vp:return s*e/l.components*l.byteLength;case kp:return s*e/l.components*l.byteLength;case Zr:return s*e*2/l.components*l.byteLength;case Xp:return s*e*2/l.components*l.byteLength;case zx:return s*e*3/l.components*l.byteLength;case Ui:return s*e*4/l.components*l.byteLength;case Wp:return s*e*4/l.components*l.byteLength;case fu:case du:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case hu:case pu:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Vh:case Xh:return Math.max(s,16)*Math.max(e,8)/4;case Gh:case kh:return Math.max(s,8)*Math.max(e,8)/2;case Wh:case qh:case Yh:case Zh:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case jh:case Kh:case Qh:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case $h:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Jh:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case ep:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case tp:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case np:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case ip:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case ap:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case sp:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case rp:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case op:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case lp:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case cp:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case up:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case fp:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case dp:case hp:case pp:return Math.ceil(s/4)*Math.ceil(e/4)*16;case mp:case gp:return Math.ceil(s/4)*Math.ceil(e/4)*8;case vp:case _p:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function C1(s){switch(s){case ri:case Ox:return{byteLength:1,components:1};case ml:case Px:case ba:return{byteLength:2,components:1};case Hp:case Gp:return{byteLength:2,components:4};case qi:case zp:case Di:return{byteLength:4,components:1};case Fx:case Ix:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Fp}}));typeof window<"u"&&(window.__THREE__?st("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Fp);function aS(){let s=null,e=!1,i=null,r=null;function l(c,h){i(c,h),r=s.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&(r=s.requestAnimationFrame(l),e=!0)},stop:function(){s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(c){i=c},setContext:function(c){s=c}}}function w1(s){const e=new WeakMap;function i(d,p){const m=d.array,g=d.usage,v=m.byteLength,S=s.createBuffer();s.bindBuffer(p,S),s.bufferData(p,m,g),d.onUploadCallback();let y;if(m instanceof Float32Array)y=s.FLOAT;else if(typeof Float16Array<"u"&&m instanceof Float16Array)y=s.HALF_FLOAT;else if(m instanceof Uint16Array)d.isFloat16BufferAttribute?y=s.HALF_FLOAT:y=s.UNSIGNED_SHORT;else if(m instanceof Int16Array)y=s.SHORT;else if(m instanceof Uint32Array)y=s.UNSIGNED_INT;else if(m instanceof Int32Array)y=s.INT;else if(m instanceof Int8Array)y=s.BYTE;else if(m instanceof Uint8Array)y=s.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)y=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:S,type:y,bytesPerElement:m.BYTES_PER_ELEMENT,version:d.version,size:v}}function r(d,p,m){const g=p.array,v=p.updateRanges;if(s.bindBuffer(m,d),v.length===0)s.bufferSubData(m,0,g);else{v.sort((y,E)=>y.start-E.start);let S=0;for(let y=1;y<v.length;y++){const E=v[S],R=v[y];R.start<=E.start+E.count+1?E.count=Math.max(E.count,R.start+R.count-E.start):(++S,v[S]=R)}v.length=S+1;for(let y=0,E=v.length;y<E;y++){const R=v[y];s.bufferSubData(m,R.start*g.BYTES_PER_ELEMENT,g,R.start,R.count)}p.clearUpdateRanges()}p.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function c(d){d.isInterleavedBufferAttribute&&(d=d.data);const p=e.get(d);p&&(s.deleteBuffer(p.buffer),e.delete(d))}function h(d,p){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const g=e.get(d);(!g||g.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const m=e.get(d);if(m===void 0)e.set(d,i(d,p));else if(m.version<d.version){if(m.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(m.buffer,d,p),m.version=d.version}}return{get:l,remove:c,update:h}}var D1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,U1=`#ifdef USE_ALPHAHASH
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
#endif`,N1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,L1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,O1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,P1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,F1=`#ifdef USE_AOMAP
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
#endif`,I1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,B1=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
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
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,z1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,H1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,G1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,V1=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,k1=`#ifdef USE_IRIDESCENCE
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
#endif`,X1=`#ifdef USE_BUMPMAP
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
#endif`,W1=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,q1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,j1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Y1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Z1=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,K1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Q1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,$1=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,J1=`#define PI 3.141592653589793
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
} // validated`,eT=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,tT=`vec3 transformedNormal = objectNormal;
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
#endif`,nT=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,iT=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,aT=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,sT=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,rT="gl_FragColor = linearToOutputTexel( gl_FragColor );",oT=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,lT=`#ifdef USE_ENVMAP
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
#endif`,cT=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,uT=`#ifdef USE_ENVMAP
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
#endif`,fT=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,dT=`#ifdef USE_ENVMAP
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
#endif`,hT=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,pT=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,mT=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,gT=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,vT=`#ifdef USE_GRADIENTMAP
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
}`,_T=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,xT=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ST=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,yT=`uniform bool receiveShadow;
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
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
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
#endif`,MT=`#ifdef USE_ENVMAP
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
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
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
#endif`,bT=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ET=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,TT=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,AT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,RT=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
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
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
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
#endif`,CT=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
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
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
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
		return v;
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
	vec3 f0 = material.specularColorBlended;
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
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
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( vec3( 1.0 ) - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,wT=`
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
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif`,DT=`#if defined( RE_IndirectDiffuse )
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
#endif`,UT=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,NT=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,LT=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,OT=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,PT=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,FT=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,IT=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,BT=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,zT=`#if defined( USE_POINTS_UV )
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
#endif`,HT=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,GT=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,VT=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,kT=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,XT=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,WT=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
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
#endif`,qT=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,jT=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,YT=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,ZT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,KT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,QT=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,$T=`#ifdef USE_NORMALMAP
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
#endif`,JT=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,eA=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,tA=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,nA=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,iA=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,aA=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
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
}`,sA=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,rA=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,oA=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,lA=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,cA=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,uA=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,fA=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 0, 5, phi ).x + bitangent * vogelDiskSample( 0, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 1, 5, phi ).x + bitangent * vogelDiskSample( 1, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 2, 5, phi ).x + bitangent * vogelDiskSample( 2, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 3, 5, phi ).x + bitangent * vogelDiskSample( 3, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 4, 5, phi ).x + bitangent * vogelDiskSample( 4, 5, phi ).y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadow = step( depth, dp );
			#else
				shadow = step( dp, depth );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,dA=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,hA=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,pA=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,mA=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,gA=`#ifdef USE_SKINNING
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
#endif`,vA=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,_A=`#ifdef USE_SKINNING
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
#endif`,xA=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,SA=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,yA=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,MA=`#ifndef saturate
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
vec3 CineonToneMapping( vec3 color ) {
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,bA=`#ifdef USE_TRANSMISSION
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
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,EA=`#ifdef USE_TRANSMISSION
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
#endif`,TA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,AA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,RA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,CA=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const wA=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,DA=`uniform sampler2D t2D;
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
}`,UA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,NA=`#ifdef ENVMAP_TYPE_CUBE
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
}`,LA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,OA=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,PA=`#include <common>
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
}`,FA=`#if DEPTH_PACKING == 3200
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
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,IA=`#define DISTANCE
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
}`,BA=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
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
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,zA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,HA=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,GA=`uniform float scale;
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
}`,VA=`uniform vec3 diffuse;
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
}`,kA=`#include <common>
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
}`,XA=`uniform vec3 diffuse;
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
}`,WA=`#define LAMBERT
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
}`,qA=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
}`,jA=`#define MATCAP
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
}`,YA=`#define MATCAP
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
}`,ZA=`#define NORMAL
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
}`,KA=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
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
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,QA=`#define PHONG
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
}`,$A=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
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
}`,JA=`#define STANDARD
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
}`,e2=`#define STANDARD
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
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
}`,t2=`#define TOON
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
}`,n2=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
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
}`,i2=`uniform float size;
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
}`,a2=`uniform vec3 diffuse;
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
}`,s2=`#include <common>
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
}`,r2=`uniform vec3 color;
uniform float opacity;
#include <common>
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
}`,o2=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,l2=`uniform vec3 diffuse;
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
}`,ft={alphahash_fragment:D1,alphahash_pars_fragment:U1,alphamap_fragment:N1,alphamap_pars_fragment:L1,alphatest_fragment:O1,alphatest_pars_fragment:P1,aomap_fragment:F1,aomap_pars_fragment:I1,batching_pars_vertex:B1,batching_vertex:z1,begin_vertex:H1,beginnormal_vertex:G1,bsdfs:V1,iridescence_fragment:k1,bumpmap_pars_fragment:X1,clipping_planes_fragment:W1,clipping_planes_pars_fragment:q1,clipping_planes_pars_vertex:j1,clipping_planes_vertex:Y1,color_fragment:Z1,color_pars_fragment:K1,color_pars_vertex:Q1,color_vertex:$1,common:J1,cube_uv_reflection_fragment:eT,defaultnormal_vertex:tT,displacementmap_pars_vertex:nT,displacementmap_vertex:iT,emissivemap_fragment:aT,emissivemap_pars_fragment:sT,colorspace_fragment:rT,colorspace_pars_fragment:oT,envmap_fragment:lT,envmap_common_pars_fragment:cT,envmap_pars_fragment:uT,envmap_pars_vertex:fT,envmap_physical_pars_fragment:MT,envmap_vertex:dT,fog_vertex:hT,fog_pars_vertex:pT,fog_fragment:mT,fog_pars_fragment:gT,gradientmap_pars_fragment:vT,lightmap_pars_fragment:_T,lights_lambert_fragment:xT,lights_lambert_pars_fragment:ST,lights_pars_begin:yT,lights_toon_fragment:bT,lights_toon_pars_fragment:ET,lights_phong_fragment:TT,lights_phong_pars_fragment:AT,lights_physical_fragment:RT,lights_physical_pars_fragment:CT,lights_fragment_begin:wT,lights_fragment_maps:DT,lights_fragment_end:UT,logdepthbuf_fragment:NT,logdepthbuf_pars_fragment:LT,logdepthbuf_pars_vertex:OT,logdepthbuf_vertex:PT,map_fragment:FT,map_pars_fragment:IT,map_particle_fragment:BT,map_particle_pars_fragment:zT,metalnessmap_fragment:HT,metalnessmap_pars_fragment:GT,morphinstance_vertex:VT,morphcolor_vertex:kT,morphnormal_vertex:XT,morphtarget_pars_vertex:WT,morphtarget_vertex:qT,normal_fragment_begin:jT,normal_fragment_maps:YT,normal_pars_fragment:ZT,normal_pars_vertex:KT,normal_vertex:QT,normalmap_pars_fragment:$T,clearcoat_normal_fragment_begin:JT,clearcoat_normal_fragment_maps:eA,clearcoat_pars_fragment:tA,iridescence_pars_fragment:nA,opaque_fragment:iA,packing:aA,premultiplied_alpha_fragment:sA,project_vertex:rA,dithering_fragment:oA,dithering_pars_fragment:lA,roughnessmap_fragment:cA,roughnessmap_pars_fragment:uA,shadowmap_pars_fragment:fA,shadowmap_pars_vertex:dA,shadowmap_vertex:hA,shadowmask_pars_fragment:pA,skinbase_vertex:mA,skinning_pars_vertex:gA,skinning_vertex:vA,skinnormal_vertex:_A,specularmap_fragment:xA,specularmap_pars_fragment:SA,tonemapping_fragment:yA,tonemapping_pars_fragment:MA,transmission_fragment:bA,transmission_pars_fragment:EA,uv_pars_fragment:TA,uv_pars_vertex:AA,uv_vertex:RA,worldpos_vertex:CA,background_vert:wA,background_frag:DA,backgroundCube_vert:UA,backgroundCube_frag:NA,cube_vert:LA,cube_frag:OA,depth_vert:PA,depth_frag:FA,distance_vert:IA,distance_frag:BA,equirect_vert:zA,equirect_frag:HA,linedashed_vert:GA,linedashed_frag:VA,meshbasic_vert:kA,meshbasic_frag:XA,meshlambert_vert:WA,meshlambert_frag:qA,meshmatcap_vert:jA,meshmatcap_frag:YA,meshnormal_vert:ZA,meshnormal_frag:KA,meshphong_vert:QA,meshphong_frag:$A,meshphysical_vert:JA,meshphysical_frag:e2,meshtoon_vert:t2,meshtoon_frag:n2,points_vert:i2,points_frag:a2,shadow_vert:s2,shadow_frag:r2,sprite_vert:o2,sprite_frag:l2},Pe={common:{diffuse:{value:new ht(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new dt},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new dt}},envmap:{envMap:{value:null},envMapRotation:{value:new dt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new dt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new dt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new dt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new dt},normalScale:{value:new Mt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new dt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new dt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new dt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new dt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ht(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ht(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0},uvTransform:{value:new dt}},sprite:{diffuse:{value:new ht(16777215)},opacity:{value:1},center:{value:new Mt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new dt},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0}}},Gi={basic:{uniforms:Hn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.fog]),vertexShader:ft.meshbasic_vert,fragmentShader:ft.meshbasic_frag},lambert:{uniforms:Hn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new ht(0)}}]),vertexShader:ft.meshlambert_vert,fragmentShader:ft.meshlambert_frag},phong:{uniforms:Hn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new ht(0)},specular:{value:new ht(1118481)},shininess:{value:30}}]),vertexShader:ft.meshphong_vert,fragmentShader:ft.meshphong_frag},standard:{uniforms:Hn([Pe.common,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.roughnessmap,Pe.metalnessmap,Pe.fog,Pe.lights,{emissive:{value:new ht(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ft.meshphysical_vert,fragmentShader:ft.meshphysical_frag},toon:{uniforms:Hn([Pe.common,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.gradientmap,Pe.fog,Pe.lights,{emissive:{value:new ht(0)}}]),vertexShader:ft.meshtoon_vert,fragmentShader:ft.meshtoon_frag},matcap:{uniforms:Hn([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,{matcap:{value:null}}]),vertexShader:ft.meshmatcap_vert,fragmentShader:ft.meshmatcap_frag},points:{uniforms:Hn([Pe.points,Pe.fog]),vertexShader:ft.points_vert,fragmentShader:ft.points_frag},dashed:{uniforms:Hn([Pe.common,Pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ft.linedashed_vert,fragmentShader:ft.linedashed_frag},depth:{uniforms:Hn([Pe.common,Pe.displacementmap]),vertexShader:ft.depth_vert,fragmentShader:ft.depth_frag},normal:{uniforms:Hn([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,{opacity:{value:1}}]),vertexShader:ft.meshnormal_vert,fragmentShader:ft.meshnormal_frag},sprite:{uniforms:Hn([Pe.sprite,Pe.fog]),vertexShader:ft.sprite_vert,fragmentShader:ft.sprite_frag},background:{uniforms:{uvTransform:{value:new dt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ft.background_vert,fragmentShader:ft.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new dt}},vertexShader:ft.backgroundCube_vert,fragmentShader:ft.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ft.cube_vert,fragmentShader:ft.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ft.equirect_vert,fragmentShader:ft.equirect_frag},distance:{uniforms:Hn([Pe.common,Pe.displacementmap,{referencePosition:{value:new Z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ft.distance_vert,fragmentShader:ft.distance_frag},shadow:{uniforms:Hn([Pe.lights,Pe.fog,{color:{value:new ht(0)},opacity:{value:1}}]),vertexShader:ft.shadow_vert,fragmentShader:ft.shadow_frag}};Gi.physical={uniforms:Hn([Gi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new dt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new dt},clearcoatNormalScale:{value:new Mt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new dt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new dt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new dt},sheen:{value:0},sheenColor:{value:new ht(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new dt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new dt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new dt},transmissionSamplerSize:{value:new Mt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new dt},attenuationDistance:{value:0},attenuationColor:{value:new ht(0)},specularColor:{value:new ht(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new dt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new dt},anisotropyVector:{value:new Mt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new dt}}]),vertexShader:ft.meshphysical_vert,fragmentShader:ft.meshphysical_frag};const au={r:0,b:0,g:0},Us=new Li,c2=new qt;function u2(s,e,i,r,l,c,h){const d=new ht(0);let p=c===!0?0:1,m,g,v=null,S=0,y=null;function E(O){let L=O.isScene===!0?O.background:null;return L&&L.isTexture&&(L=(O.backgroundBlurriness>0?i:e).get(L)),L}function R(O){let L=!1;const I=E(O);I===null?_(d,p):I&&I.isColor&&(_(I,1),L=!0);const z=s.xr.getEnvironmentBlendMode();z==="additive"?r.buffers.color.setClear(0,0,0,1,h):z==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,h),(s.autoClear||L)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function M(O,L){const I=E(L);I&&(I.isCubeTexture||I.mapping===Eu)?(g===void 0&&(g=new Sn(new no(1,1,1),new ji({name:"BackgroundCubeMaterial",uniforms:Qr(Gi.backgroundCube.uniforms),vertexShader:Gi.backgroundCube.vertexShader,fragmentShader:Gi.backgroundCube.fragmentShader,side:Gn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(z,F,K){this.matrixWorld.copyPosition(K.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(g)),Us.copy(L.backgroundRotation),Us.x*=-1,Us.y*=-1,Us.z*=-1,I.isCubeTexture&&I.isRenderTargetTexture===!1&&(Us.y*=-1,Us.z*=-1),g.material.uniforms.envMap.value=I,g.material.uniforms.flipEnvMap.value=I.isCubeTexture&&I.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=L.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(c2.makeRotationFromEuler(Us)),g.material.toneMapped=Rt.getTransfer(I.colorSpace)!==Ht,(v!==I||S!==I.version||y!==s.toneMapping)&&(g.material.needsUpdate=!0,v=I,S=I.version,y=s.toneMapping),g.layers.enableAll(),O.unshift(g,g.geometry,g.material,0,0,null)):I&&I.isTexture&&(m===void 0&&(m=new Sn(new Tu(2,2),new ji({name:"BackgroundMaterial",uniforms:Qr(Gi.background.uniforms),vertexShader:Gi.background.vertexShader,fragmentShader:Gi.background.fragmentShader,side:os,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(m)),m.material.uniforms.t2D.value=I,m.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,m.material.toneMapped=Rt.getTransfer(I.colorSpace)!==Ht,I.matrixAutoUpdate===!0&&I.updateMatrix(),m.material.uniforms.uvTransform.value.copy(I.matrix),(v!==I||S!==I.version||y!==s.toneMapping)&&(m.material.needsUpdate=!0,v=I,S=I.version,y=s.toneMapping),m.layers.enableAll(),O.unshift(m,m.geometry,m.material,0,0,null))}function _(O,L){O.getRGB(au,jx(s)),r.buffers.color.setClear(au.r,au.g,au.b,L,h)}function N(){g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return d},setClearColor:function(O,L=1){d.set(O),p=L,_(d,p)},getClearAlpha:function(){return p},setClearAlpha:function(O){p=O,_(d,p)},render:R,addToRenderList:M,dispose:N}}function f2(s,e){const i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},l=S(null);let c=l,h=!1;function d(w,k,re,se,pe){let fe=!1;const P=v(se,re,k);c!==P&&(c=P,m(c.object)),fe=y(w,se,re,pe),fe&&E(w,se,re,pe),pe!==null&&e.update(pe,s.ELEMENT_ARRAY_BUFFER),(fe||h)&&(h=!1,L(w,k,re,se),pe!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(pe).buffer))}function p(){return s.createVertexArray()}function m(w){return s.bindVertexArray(w)}function g(w){return s.deleteVertexArray(w)}function v(w,k,re){const se=re.wireframe===!0;let pe=r[w.id];pe===void 0&&(pe={},r[w.id]=pe);let fe=pe[k.id];fe===void 0&&(fe={},pe[k.id]=fe);let P=fe[se];return P===void 0&&(P=S(p()),fe[se]=P),P}function S(w){const k=[],re=[],se=[];for(let pe=0;pe<i;pe++)k[pe]=0,re[pe]=0,se[pe]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:re,attributeDivisors:se,object:w,attributes:{},index:null}}function y(w,k,re,se){const pe=c.attributes,fe=k.attributes;let P=0;const H=re.getAttributes();for(const ae in H)if(H[ae].location>=0){const Se=pe[ae];let U=fe[ae];if(U===void 0&&(ae==="instanceMatrix"&&w.instanceMatrix&&(U=w.instanceMatrix),ae==="instanceColor"&&w.instanceColor&&(U=w.instanceColor)),Se===void 0||Se.attribute!==U||U&&Se.data!==U.data)return!0;P++}return c.attributesNum!==P||c.index!==se}function E(w,k,re,se){const pe={},fe=k.attributes;let P=0;const H=re.getAttributes();for(const ae in H)if(H[ae].location>=0){let Se=fe[ae];Se===void 0&&(ae==="instanceMatrix"&&w.instanceMatrix&&(Se=w.instanceMatrix),ae==="instanceColor"&&w.instanceColor&&(Se=w.instanceColor));const U={};U.attribute=Se,Se&&Se.data&&(U.data=Se.data),pe[ae]=U,P++}c.attributes=pe,c.attributesNum=P,c.index=se}function R(){const w=c.newAttributes;for(let k=0,re=w.length;k<re;k++)w[k]=0}function M(w){_(w,0)}function _(w,k){const re=c.newAttributes,se=c.enabledAttributes,pe=c.attributeDivisors;re[w]=1,se[w]===0&&(s.enableVertexAttribArray(w),se[w]=1),pe[w]!==k&&(s.vertexAttribDivisor(w,k),pe[w]=k)}function N(){const w=c.newAttributes,k=c.enabledAttributes;for(let re=0,se=k.length;re<se;re++)k[re]!==w[re]&&(s.disableVertexAttribArray(re),k[re]=0)}function O(w,k,re,se,pe,fe,P){P===!0?s.vertexAttribIPointer(w,k,re,pe,fe):s.vertexAttribPointer(w,k,re,se,pe,fe)}function L(w,k,re,se){R();const pe=se.attributes,fe=re.getAttributes(),P=k.defaultAttributeValues;for(const H in fe){const ae=fe[H];if(ae.location>=0){let Me=pe[H];if(Me===void 0&&(H==="instanceMatrix"&&w.instanceMatrix&&(Me=w.instanceMatrix),H==="instanceColor"&&w.instanceColor&&(Me=w.instanceColor)),Me!==void 0){const Se=Me.normalized,U=Me.itemSize,ie=e.get(Me);if(ie===void 0)continue;const ve=ie.buffer,Re=ie.type,He=ie.bytesPerElement,ne=Re===s.INT||Re===s.UNSIGNED_INT||Me.gpuType===zp;if(Me.isInterleavedBufferAttribute){const ue=Me.data,Ue=ue.stride,Xe=Me.offset;if(ue.isInstancedInterleavedBuffer){for(let Ge=0;Ge<ae.locationSize;Ge++)_(ae.location+Ge,ue.meshPerAttribute);w.isInstancedMesh!==!0&&se._maxInstanceCount===void 0&&(se._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let Ge=0;Ge<ae.locationSize;Ge++)M(ae.location+Ge);s.bindBuffer(s.ARRAY_BUFFER,ve);for(let Ge=0;Ge<ae.locationSize;Ge++)O(ae.location+Ge,U/ae.locationSize,Re,Se,Ue*He,(Xe+U/ae.locationSize*Ge)*He,ne)}else{if(Me.isInstancedBufferAttribute){for(let ue=0;ue<ae.locationSize;ue++)_(ae.location+ue,Me.meshPerAttribute);w.isInstancedMesh!==!0&&se._maxInstanceCount===void 0&&(se._maxInstanceCount=Me.meshPerAttribute*Me.count)}else for(let ue=0;ue<ae.locationSize;ue++)M(ae.location+ue);s.bindBuffer(s.ARRAY_BUFFER,ve);for(let ue=0;ue<ae.locationSize;ue++)O(ae.location+ue,U/ae.locationSize,Re,Se,U*He,U/ae.locationSize*ue*He,ne)}}else if(P!==void 0){const Se=P[H];if(Se!==void 0)switch(Se.length){case 2:s.vertexAttrib2fv(ae.location,Se);break;case 3:s.vertexAttrib3fv(ae.location,Se);break;case 4:s.vertexAttrib4fv(ae.location,Se);break;default:s.vertexAttrib1fv(ae.location,Se)}}}}N()}function I(){K();for(const w in r){const k=r[w];for(const re in k){const se=k[re];for(const pe in se)g(se[pe].object),delete se[pe];delete k[re]}delete r[w]}}function z(w){if(r[w.id]===void 0)return;const k=r[w.id];for(const re in k){const se=k[re];for(const pe in se)g(se[pe].object),delete se[pe];delete k[re]}delete r[w.id]}function F(w){for(const k in r){const re=r[k];if(re[w.id]===void 0)continue;const se=re[w.id];for(const pe in se)g(se[pe].object),delete se[pe];delete re[w.id]}}function K(){C(),h=!0,c!==l&&(c=l,m(c.object))}function C(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:K,resetDefaultState:C,dispose:I,releaseStatesOfGeometry:z,releaseStatesOfProgram:F,initAttributes:R,enableAttribute:M,disableUnusedAttributes:N}}function d2(s,e,i){let r;function l(m){r=m}function c(m,g){s.drawArrays(r,m,g),i.update(g,r,1)}function h(m,g,v){v!==0&&(s.drawArraysInstanced(r,m,g,v),i.update(g,r,v))}function d(m,g,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,m,0,g,0,v);let y=0;for(let E=0;E<v;E++)y+=g[E];i.update(y,r,1)}function p(m,g,v,S){if(v===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let E=0;E<m.length;E++)h(m[E],g[E],S[E]);else{y.multiDrawArraysInstancedWEBGL(r,m,0,g,0,S,0,v);let E=0;for(let R=0;R<v;R++)E+=g[R]*S[R];i.update(E,r,1)}}this.setMode=l,this.render=c,this.renderInstances=h,this.renderMultiDraw=d,this.renderMultiDrawInstances=p}function h2(s,e,i,r){let l;function c(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const F=e.get("EXT_texture_filter_anisotropic");l=s.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function h(F){return!(F!==Ui&&r.convert(F)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(F){const K=F===ba&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(F!==ri&&r.convert(F)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&F!==Di&&!K)}function p(F){if(F==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=i.precision!==void 0?i.precision:"highp";const g=p(m);g!==m&&(st("WebGLRenderer:",m,"not supported, using",g,"instead."),m=g);const v=i.logarithmicDepthBuffer===!0,S=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),y=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),E=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),R=s.getParameter(s.MAX_TEXTURE_SIZE),M=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),_=s.getParameter(s.MAX_VERTEX_ATTRIBS),N=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),O=s.getParameter(s.MAX_VARYING_VECTORS),L=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),I=s.getParameter(s.MAX_SAMPLES),z=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:p,textureFormatReadable:h,textureTypeReadable:d,precision:m,logarithmicDepthBuffer:v,reversedDepthBuffer:S,maxTextures:y,maxVertexTextures:E,maxTextureSize:R,maxCubemapSize:M,maxAttributes:_,maxVertexUniforms:N,maxVaryings:O,maxFragmentUniforms:L,maxSamples:I,samples:z}}function p2(s){const e=this;let i=null,r=0,l=!1,c=!1;const h=new as,d=new dt,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(v,S){const y=v.length!==0||S||r!==0||l;return l=S,r=v.length,y},this.beginShadows=function(){c=!0,g(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(v,S){i=g(v,S,0)},this.setState=function(v,S,y){const E=v.clippingPlanes,R=v.clipIntersection,M=v.clipShadows,_=s.get(v);if(!l||E===null||E.length===0||c&&!M)c?g(null):m();else{const N=c?0:r,O=N*4;let L=_.clippingState||null;p.value=L,L=g(E,S,O,y);for(let I=0;I!==O;++I)L[I]=i[I];_.clippingState=L,this.numIntersection=R?this.numPlanes:0,this.numPlanes+=N}};function m(){p.value!==i&&(p.value=i,p.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function g(v,S,y,E){const R=v!==null?v.length:0;let M=null;if(R!==0){if(M=p.value,E!==!0||M===null){const _=y+R*4,N=S.matrixWorldInverse;d.getNormalMatrix(N),(M===null||M.length<_)&&(M=new Float32Array(_));for(let O=0,L=y;O!==R;++O,L+=4)h.copy(v[O]).applyMatrix4(N,d),h.normal.toArray(M,L),M[L+3]=h.constant}p.value=M,p.needsUpdate=!0}return e.numPlanes=R,e.numIntersection=0,M}}function m2(s){let e=new WeakMap;function i(h,d){return d===Ih?h.mapping=zs:d===Bh&&(h.mapping=Yr),h}function r(h){if(h&&h.isTexture){const d=h.mapping;if(d===Ih||d===Bh)if(e.has(h)){const p=e.get(h).texture;return i(p,h.mapping)}else{const p=h.image;if(p&&p.height>0){const m=new Kx(p.height);return m.fromEquirectangularTexture(s,h),e.set(h,m),h.addEventListener("dispose",l),i(m.texture,h.mapping)}else return null}}return h}function l(h){const d=h.target;d.removeEventListener("dispose",l);const p=e.get(d);p!==void 0&&(e.delete(d),p.dispose())}function c(){e=new WeakMap}return{get:r,dispose:c}}const rs=4,w_=[.125,.215,.35,.446,.526,.582],Os=20,g2=256,sl=new iS,D_=new ht;let dh=null,hh=0,ph=0,mh=!1;const v2=new Z;class Mp{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,i=0,r=.1,l=100,c={}){const{size:h=256,position:d=v2}=c;dh=this._renderer.getRenderTarget(),hh=this._renderer.getActiveCubeFace(),ph=this._renderer.getActiveMipmapLevel(),mh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(h);const p=this._allocateTargets();return p.depthBuffer=!0,this._sceneToCubeUV(e,r,l,p,d),i>0&&this._blur(p,0,0,i),this._applyPMREM(p),this._cleanup(p),p}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=L_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=N_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(dh,hh,ph),this._renderer.xr.enabled=mh,e.scissorTest=!1,Br(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===zs||e.mapping===Yr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),dh=this._renderer.getRenderTarget(),hh=this._renderer.getActiveCubeFace(),ph=this._renderer.getActiveMipmapLevel(),mh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=i||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,r={magFilter:Fn,minFilter:Fn,generateMipmaps:!1,type:ba,format:Ui,colorSpace:Kr,depthBuffer:!1},l=U_(e,i,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=U_(e,i,r);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=_2(c)),this._blurMaterial=S2(c,e,i),this._ggxMaterial=x2(c,e,i)}return l}_compileMaterial(e){const i=new Sn(new Yi,e);this._renderer.compile(i,sl)}_sceneToCubeUV(e,i,r,l,c){const p=new si(90,1,i,r),m=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],v=this._renderer,S=v.autoClear,y=v.toneMapping;v.getClearColor(D_),v.toneMapping=Xi,v.autoClear=!1,v.state.buffers.depth.getReversed()&&(v.setRenderTarget(l),v.clearDepth(),v.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Sn(new no,new Xx({name:"PMREM.Background",side:Gn,depthWrite:!1,depthTest:!1})));const R=this._backgroundBox,M=R.material;let _=!1;const N=e.background;N?N.isColor&&(M.color.copy(N),e.background=null,_=!0):(M.color.copy(D_),_=!0);for(let O=0;O<6;O++){const L=O%3;L===0?(p.up.set(0,m[O],0),p.position.set(c.x,c.y,c.z),p.lookAt(c.x+g[O],c.y,c.z)):L===1?(p.up.set(0,0,m[O]),p.position.set(c.x,c.y,c.z),p.lookAt(c.x,c.y+g[O],c.z)):(p.up.set(0,m[O],0),p.position.set(c.x,c.y,c.z),p.lookAt(c.x,c.y,c.z+g[O]));const I=this._cubeSize;Br(l,L*I,O>2?I:0,I,I),v.setRenderTarget(l),_&&v.render(R,p),v.render(e,p)}v.toneMapping=y,v.autoClear=S,e.background=N}_textureToCubeUV(e,i){const r=this._renderer,l=e.mapping===zs||e.mapping===Yr;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=L_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=N_());const c=l?this._cubemapMaterial:this._equirectMaterial,h=this._lodMeshes[0];h.material=c;const d=c.uniforms;d.envMap.value=e;const p=this._cubeSize;Br(i,0,0,3*p,2*p),r.setRenderTarget(i),r.render(h,sl)}_applyPMREM(e){const i=this._renderer,r=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let c=1;c<l;c++)this._applyGGXFilter(e,c-1,c);i.autoClear=r}_applyGGXFilter(e,i,r){const l=this._renderer,c=this._pingPongRenderTarget,h=this._ggxMaterial,d=this._lodMeshes[r];d.material=h;const p=h.uniforms,m=r/(this._lodMeshes.length-1),g=i/(this._lodMeshes.length-1),v=Math.sqrt(m*m-g*g),S=0+m*1.25,y=v*S,{_lodMax:E}=this,R=this._sizeLods[r],M=3*R*(r>E-rs?r-E+rs:0),_=4*(this._cubeSize-R);p.envMap.value=e.texture,p.roughness.value=y,p.mipInt.value=E-i,Br(c,M,_,3*R,2*R),l.setRenderTarget(c),l.render(d,sl),p.envMap.value=c.texture,p.roughness.value=0,p.mipInt.value=E-r,Br(e,M,_,3*R,2*R),l.setRenderTarget(e),l.render(d,sl)}_blur(e,i,r,l,c){const h=this._pingPongRenderTarget;this._halfBlur(e,h,i,r,l,"latitudinal",c),this._halfBlur(h,e,r,r,l,"longitudinal",c)}_halfBlur(e,i,r,l,c,h,d){const p=this._renderer,m=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&At("blur direction must be either latitudinal or longitudinal!");const g=3,v=this._lodMeshes[l];v.material=m;const S=m.uniforms,y=this._sizeLods[r]-1,E=isFinite(c)?Math.PI/(2*y):2*Math.PI/(2*Os-1),R=c/E,M=isFinite(c)?1+Math.floor(g*R):Os;M>Os&&st(`sigmaRadians, ${c}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${Os}`);const _=[];let N=0;for(let F=0;F<Os;++F){const K=F/R,C=Math.exp(-K*K/2);_.push(C),F===0?N+=C:F<M&&(N+=2*C)}for(let F=0;F<_.length;F++)_[F]=_[F]/N;S.envMap.value=e.texture,S.samples.value=M,S.weights.value=_,S.latitudinal.value=h==="latitudinal",d&&(S.poleAxis.value=d);const{_lodMax:O}=this;S.dTheta.value=E,S.mipInt.value=O-r;const L=this._sizeLods[l],I=3*L*(l>O-rs?l-O+rs:0),z=4*(this._cubeSize-L);Br(i,I,z,3*L,2*L),p.setRenderTarget(i),p.render(v,sl)}}function _2(s){const e=[],i=[],r=[];let l=s;const c=s-rs+1+w_.length;for(let h=0;h<c;h++){const d=Math.pow(2,l);e.push(d);let p=1/d;h>s-rs?p=w_[h-s+rs-1]:h===0&&(p=0),i.push(p);const m=1/(d-2),g=-m,v=1+m,S=[g,g,v,g,v,v,g,g,v,v,g,v],y=6,E=6,R=3,M=2,_=1,N=new Float32Array(R*E*y),O=new Float32Array(M*E*y),L=new Float32Array(_*E*y);for(let z=0;z<y;z++){const F=z%3*2/3-1,K=z>2?0:-1,C=[F,K,0,F+2/3,K,0,F+2/3,K+1,0,F,K,0,F+2/3,K+1,0,F,K+1,0];N.set(C,R*E*z),O.set(S,M*E*z);const w=[z,z,z,z,z,z];L.set(w,_*E*z)}const I=new Yi;I.setAttribute("position",new Ni(N,R)),I.setAttribute("uv",new Ni(O,M)),I.setAttribute("faceIndex",new Ni(L,_)),r.push(new Sn(I,null)),l>rs&&l--}return{lodMeshes:r,sizeLods:e,sigmas:i}}function U_(s,e,i){const r=new Wi(s,e,i);return r.texture.mapping=Eu,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Br(s,e,i,r,l){s.viewport.set(e,i,r,l),s.scissor.set(e,i,r,l)}function x2(s,e,i){return new ji({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:g2,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Au(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:ya,depthTest:!1,depthWrite:!1})}function S2(s,e,i){const r=new Float32Array(Os),l=new Z(0,1,0);return new ji({name:"SphericalGaussianBlur",defines:{n:Os,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Au(),fragmentShader:`

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
		`,blending:ya,depthTest:!1,depthWrite:!1})}function N_(){return new ji({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Au(),fragmentShader:`

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
		`,blending:ya,depthTest:!1,depthWrite:!1})}function L_(){return new ji({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Au(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ya,depthTest:!1,depthWrite:!1})}function Au(){return`

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
	`}function y2(s){let e=new WeakMap,i=null;function r(d){if(d&&d.isTexture){const p=d.mapping,m=p===Ih||p===Bh,g=p===zs||p===Yr;if(m||g){let v=e.get(d);const S=v!==void 0?v.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==S)return i===null&&(i=new Mp(s)),v=m?i.fromEquirectangular(d,v):i.fromCubemap(d,v),v.texture.pmremVersion=d.pmremVersion,e.set(d,v),v.texture;if(v!==void 0)return v.texture;{const y=d.image;return m&&y&&y.height>0||g&&y&&l(y)?(i===null&&(i=new Mp(s)),v=m?i.fromEquirectangular(d):i.fromCubemap(d),v.texture.pmremVersion=d.pmremVersion,e.set(d,v),d.addEventListener("dispose",c),v.texture):null}}}return d}function l(d){let p=0;const m=6;for(let g=0;g<m;g++)d[g]!==void 0&&p++;return p===m}function c(d){const p=d.target;p.removeEventListener("dispose",c);const m=e.get(p);m!==void 0&&(e.delete(p),m.dispose())}function h(){e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:h}}function M2(s){const e={};function i(r){if(e[r]!==void 0)return e[r];const l=s.getExtension(r);return e[r]=l,l}return{has:function(r){return i(r)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(r){const l=i(r);return l===null&&vl("WebGLRenderer: "+r+" extension not supported."),l}}}function b2(s,e,i,r){const l={},c=new WeakMap;function h(v){const S=v.target;S.index!==null&&e.remove(S.index);for(const E in S.attributes)e.remove(S.attributes[E]);S.removeEventListener("dispose",h),delete l[S.id];const y=c.get(S);y&&(e.remove(y),c.delete(S)),r.releaseStatesOfGeometry(S),S.isInstancedBufferGeometry===!0&&delete S._maxInstanceCount,i.memory.geometries--}function d(v,S){return l[S.id]===!0||(S.addEventListener("dispose",h),l[S.id]=!0,i.memory.geometries++),S}function p(v){const S=v.attributes;for(const y in S)e.update(S[y],s.ARRAY_BUFFER)}function m(v){const S=[],y=v.index,E=v.attributes.position;let R=0;if(y!==null){const N=y.array;R=y.version;for(let O=0,L=N.length;O<L;O+=3){const I=N[O+0],z=N[O+1],F=N[O+2];S.push(I,z,z,F,F,I)}}else if(E!==void 0){const N=E.array;R=E.version;for(let O=0,L=N.length/3-1;O<L;O+=3){const I=O+0,z=O+1,F=O+2;S.push(I,z,z,F,F,I)}}else return;const M=new(Hx(S)?qx:Wx)(S,1);M.version=R;const _=c.get(v);_&&e.remove(_),c.set(v,M)}function g(v){const S=c.get(v);if(S){const y=v.index;y!==null&&S.version<y.version&&m(v)}else m(v);return c.get(v)}return{get:d,update:p,getWireframeAttribute:g}}function E2(s,e,i){let r;function l(S){r=S}let c,h;function d(S){c=S.type,h=S.bytesPerElement}function p(S,y){s.drawElements(r,y,c,S*h),i.update(y,r,1)}function m(S,y,E){E!==0&&(s.drawElementsInstanced(r,y,c,S*h,E),i.update(y,r,E))}function g(S,y,E){if(E===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,y,0,c,S,0,E);let M=0;for(let _=0;_<E;_++)M+=y[_];i.update(M,r,1)}function v(S,y,E,R){if(E===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let _=0;_<S.length;_++)m(S[_]/h,y[_],R[_]);else{M.multiDrawElementsInstancedWEBGL(r,y,0,c,S,0,R,0,E);let _=0;for(let N=0;N<E;N++)_+=y[N]*R[N];i.update(_,r,1)}}this.setMode=l,this.setIndex=d,this.render=p,this.renderInstances=m,this.renderMultiDraw=g,this.renderMultiDrawInstances=v}function T2(s){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function r(c,h,d){switch(i.calls++,h){case s.TRIANGLES:i.triangles+=d*(c/3);break;case s.LINES:i.lines+=d*(c/2);break;case s.LINE_STRIP:i.lines+=d*(c-1);break;case s.LINE_LOOP:i.lines+=d*c;break;case s.POINTS:i.points+=d*c;break;default:At("WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:r}}function A2(s,e,i){const r=new WeakMap,l=new nn;function c(h,d,p){const m=h.morphTargetInfluences,g=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,v=g!==void 0?g.length:0;let S=r.get(d);if(S===void 0||S.count!==v){let w=function(){K.dispose(),r.delete(d),d.removeEventListener("dispose",w)};var y=w;S!==void 0&&S.texture.dispose();const E=d.morphAttributes.position!==void 0,R=d.morphAttributes.normal!==void 0,M=d.morphAttributes.color!==void 0,_=d.morphAttributes.position||[],N=d.morphAttributes.normal||[],O=d.morphAttributes.color||[];let L=0;E===!0&&(L=1),R===!0&&(L=2),M===!0&&(L=3);let I=d.attributes.position.count*L,z=1;I>e.maxTextureSize&&(z=Math.ceil(I/e.maxTextureSize),I=e.maxTextureSize);const F=new Float32Array(I*z*4*v),K=new Gx(F,I,z,v);K.type=Di,K.needsUpdate=!0;const C=L*4;for(let k=0;k<v;k++){const re=_[k],se=N[k],pe=O[k],fe=I*z*4*k;for(let P=0;P<re.count;P++){const H=P*C;E===!0&&(l.fromBufferAttribute(re,P),F[fe+H+0]=l.x,F[fe+H+1]=l.y,F[fe+H+2]=l.z,F[fe+H+3]=0),R===!0&&(l.fromBufferAttribute(se,P),F[fe+H+4]=l.x,F[fe+H+5]=l.y,F[fe+H+6]=l.z,F[fe+H+7]=0),M===!0&&(l.fromBufferAttribute(pe,P),F[fe+H+8]=l.x,F[fe+H+9]=l.y,F[fe+H+10]=l.z,F[fe+H+11]=pe.itemSize===4?l.w:1)}}S={count:v,texture:K,size:new Mt(I,z)},r.set(d,S),d.addEventListener("dispose",w)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)p.getUniforms().setValue(s,"morphTexture",h.morphTexture,i);else{let E=0;for(let M=0;M<m.length;M++)E+=m[M];const R=d.morphTargetsRelative?1:1-E;p.getUniforms().setValue(s,"morphTargetBaseInfluence",R),p.getUniforms().setValue(s,"morphTargetInfluences",m)}p.getUniforms().setValue(s,"morphTargetsTexture",S.texture,i),p.getUniforms().setValue(s,"morphTargetsTextureSize",S.size)}return{update:c}}function R2(s,e,i,r){let l=new WeakMap;function c(p){const m=r.render.frame,g=p.geometry,v=e.get(p,g);if(l.get(v)!==m&&(e.update(v),l.set(v,m)),p.isInstancedMesh&&(p.hasEventListener("dispose",d)===!1&&p.addEventListener("dispose",d),l.get(p)!==m&&(i.update(p.instanceMatrix,s.ARRAY_BUFFER),p.instanceColor!==null&&i.update(p.instanceColor,s.ARRAY_BUFFER),l.set(p,m))),p.isSkinnedMesh){const S=p.skeleton;l.get(S)!==m&&(S.update(),l.set(S,m))}return v}function h(){l=new WeakMap}function d(p){const m=p.target;m.removeEventListener("dispose",d),i.remove(m.instanceMatrix),m.instanceColor!==null&&i.remove(m.instanceColor)}return{update:c,dispose:h}}const C2={[Rx]:"LINEAR_TONE_MAPPING",[Cx]:"REINHARD_TONE_MAPPING",[wx]:"CINEON_TONE_MAPPING",[Bp]:"ACES_FILMIC_TONE_MAPPING",[Ux]:"AGX_TONE_MAPPING",[Nx]:"NEUTRAL_TONE_MAPPING",[Dx]:"CUSTOM_TONE_MAPPING"};function w2(s,e,i,r,l){const c=new Wi(e,i,{type:s,depthBuffer:r,stencilBuffer:l}),h=new Wi(e,i,{type:ba,depthBuffer:!1,stencilBuffer:!1}),d=new Yi;d.setAttribute("position",new xi([-1,3,0,-1,-1,0,3,-1,0],3)),d.setAttribute("uv",new xi([0,2,0,0,2,0],2));const p=new v1({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),m=new Sn(d,p),g=new iS(-1,1,1,-1,0,1);let v=null,S=null,y=!1,E,R=null,M=[],_=!1;this.setSize=function(N,O){c.setSize(N,O),h.setSize(N,O);for(let L=0;L<M.length;L++){const I=M[L];I.setSize&&I.setSize(N,O)}},this.setEffects=function(N){M=N,_=M.length>0&&M[0].isRenderPass===!0;const O=c.width,L=c.height;for(let I=0;I<M.length;I++){const z=M[I];z.setSize&&z.setSize(O,L)}},this.begin=function(N,O){if(y||N.toneMapping===Xi&&M.length===0)return!1;if(R=O,O!==null){const L=O.width,I=O.height;(c.width!==L||c.height!==I)&&this.setSize(L,I)}return _===!1&&N.setRenderTarget(c),E=N.toneMapping,N.toneMapping=Xi,!0},this.hasRenderPass=function(){return _},this.end=function(N,O){N.toneMapping=E,y=!0;let L=c,I=h;for(let z=0;z<M.length;z++){const F=M[z];if(F.enabled!==!1&&(F.render(N,I,L,O),F.needsSwap!==!1)){const K=L;L=I,I=K}}if(v!==N.outputColorSpace||S!==N.toneMapping){v=N.outputColorSpace,S=N.toneMapping,p.defines={},Rt.getTransfer(v)===Ht&&(p.defines.SRGB_TRANSFER="");const z=C2[S];z&&(p.defines[z]=""),p.needsUpdate=!0}p.uniforms.tDiffuse.value=L.texture,N.setRenderTarget(R),N.render(m,g),R=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){c.dispose(),h.dispose(),d.dispose(),p.dispose()}}const sS=new Vn,bp=new xl(1,1),rS=new Gx,oS=new YE,lS=new Zx,O_=[],P_=[],F_=new Float32Array(16),I_=new Float32Array(9),B_=new Float32Array(4);function io(s,e,i){const r=s[0];if(r<=0||r>0)return s;const l=e*i;let c=O_[l];if(c===void 0&&(c=new Float32Array(l),O_[l]=c),e!==0){r.toArray(c,0);for(let h=1,d=0;h!==e;++h)d+=i,s[h].toArray(c,d)}return c}function gn(s,e){if(s.length!==e.length)return!1;for(let i=0,r=s.length;i<r;i++)if(s[i]!==e[i])return!1;return!0}function vn(s,e){for(let i=0,r=e.length;i<r;i++)s[i]=e[i]}function Ru(s,e){let i=P_[e];i===void 0&&(i=new Int32Array(e),P_[e]=i);for(let r=0;r!==e;++r)i[r]=s.allocateTextureUnit();return i}function D2(s,e){const i=this.cache;i[0]!==e&&(s.uniform1f(this.addr,e),i[0]=e)}function U2(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(gn(i,e))return;s.uniform2fv(this.addr,e),vn(i,e)}}function N2(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(gn(i,e))return;s.uniform3fv(this.addr,e),vn(i,e)}}function L2(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(gn(i,e))return;s.uniform4fv(this.addr,e),vn(i,e)}}function O2(s,e){const i=this.cache,r=e.elements;if(r===void 0){if(gn(i,e))return;s.uniformMatrix2fv(this.addr,!1,e),vn(i,e)}else{if(gn(i,r))return;B_.set(r),s.uniformMatrix2fv(this.addr,!1,B_),vn(i,r)}}function P2(s,e){const i=this.cache,r=e.elements;if(r===void 0){if(gn(i,e))return;s.uniformMatrix3fv(this.addr,!1,e),vn(i,e)}else{if(gn(i,r))return;I_.set(r),s.uniformMatrix3fv(this.addr,!1,I_),vn(i,r)}}function F2(s,e){const i=this.cache,r=e.elements;if(r===void 0){if(gn(i,e))return;s.uniformMatrix4fv(this.addr,!1,e),vn(i,e)}else{if(gn(i,r))return;F_.set(r),s.uniformMatrix4fv(this.addr,!1,F_),vn(i,r)}}function I2(s,e){const i=this.cache;i[0]!==e&&(s.uniform1i(this.addr,e),i[0]=e)}function B2(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(gn(i,e))return;s.uniform2iv(this.addr,e),vn(i,e)}}function z2(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(gn(i,e))return;s.uniform3iv(this.addr,e),vn(i,e)}}function H2(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(gn(i,e))return;s.uniform4iv(this.addr,e),vn(i,e)}}function G2(s,e){const i=this.cache;i[0]!==e&&(s.uniform1ui(this.addr,e),i[0]=e)}function V2(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(gn(i,e))return;s.uniform2uiv(this.addr,e),vn(i,e)}}function k2(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(gn(i,e))return;s.uniform3uiv(this.addr,e),vn(i,e)}}function X2(s,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(gn(i,e))return;s.uniform4uiv(this.addr,e),vn(i,e)}}function W2(s,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l);let c;this.type===s.SAMPLER_2D_SHADOW?(bp.compareFunction=i.isReversedDepthBuffer()?Yp:jp,c=bp):c=sS,i.setTexture2D(e||c,l)}function q2(s,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTexture3D(e||oS,l)}function j2(s,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTextureCube(e||lS,l)}function Y2(s,e,i){const r=this.cache,l=i.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),i.setTexture2DArray(e||rS,l)}function Z2(s){switch(s){case 5126:return D2;case 35664:return U2;case 35665:return N2;case 35666:return L2;case 35674:return O2;case 35675:return P2;case 35676:return F2;case 5124:case 35670:return I2;case 35667:case 35671:return B2;case 35668:case 35672:return z2;case 35669:case 35673:return H2;case 5125:return G2;case 36294:return V2;case 36295:return k2;case 36296:return X2;case 35678:case 36198:case 36298:case 36306:case 35682:return W2;case 35679:case 36299:case 36307:return q2;case 35680:case 36300:case 36308:case 36293:return j2;case 36289:case 36303:case 36311:case 36292:return Y2}}function K2(s,e){s.uniform1fv(this.addr,e)}function Q2(s,e){const i=io(e,this.size,2);s.uniform2fv(this.addr,i)}function $2(s,e){const i=io(e,this.size,3);s.uniform3fv(this.addr,i)}function J2(s,e){const i=io(e,this.size,4);s.uniform4fv(this.addr,i)}function eR(s,e){const i=io(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,i)}function tR(s,e){const i=io(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,i)}function nR(s,e){const i=io(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,i)}function iR(s,e){s.uniform1iv(this.addr,e)}function aR(s,e){s.uniform2iv(this.addr,e)}function sR(s,e){s.uniform3iv(this.addr,e)}function rR(s,e){s.uniform4iv(this.addr,e)}function oR(s,e){s.uniform1uiv(this.addr,e)}function lR(s,e){s.uniform2uiv(this.addr,e)}function cR(s,e){s.uniform3uiv(this.addr,e)}function uR(s,e){s.uniform4uiv(this.addr,e)}function fR(s,e,i){const r=this.cache,l=e.length,c=Ru(i,l);gn(r,c)||(s.uniform1iv(this.addr,c),vn(r,c));let h;this.type===s.SAMPLER_2D_SHADOW?h=bp:h=sS;for(let d=0;d!==l;++d)i.setTexture2D(e[d]||h,c[d])}function dR(s,e,i){const r=this.cache,l=e.length,c=Ru(i,l);gn(r,c)||(s.uniform1iv(this.addr,c),vn(r,c));for(let h=0;h!==l;++h)i.setTexture3D(e[h]||oS,c[h])}function hR(s,e,i){const r=this.cache,l=e.length,c=Ru(i,l);gn(r,c)||(s.uniform1iv(this.addr,c),vn(r,c));for(let h=0;h!==l;++h)i.setTextureCube(e[h]||lS,c[h])}function pR(s,e,i){const r=this.cache,l=e.length,c=Ru(i,l);gn(r,c)||(s.uniform1iv(this.addr,c),vn(r,c));for(let h=0;h!==l;++h)i.setTexture2DArray(e[h]||rS,c[h])}function mR(s){switch(s){case 5126:return K2;case 35664:return Q2;case 35665:return $2;case 35666:return J2;case 35674:return eR;case 35675:return tR;case 35676:return nR;case 5124:case 35670:return iR;case 35667:case 35671:return aR;case 35668:case 35672:return sR;case 35669:case 35673:return rR;case 5125:return oR;case 36294:return lR;case 36295:return cR;case 36296:return uR;case 35678:case 36198:case 36298:case 36306:case 35682:return fR;case 35679:case 36299:case 36307:return dR;case 35680:case 36300:case 36308:case 36293:return hR;case 36289:case 36303:case 36311:case 36292:return pR}}class gR{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.setValue=Z2(i.type)}}class vR{constructor(e,i,r){this.id=e,this.addr=r,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=mR(i.type)}}class _R{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,r){const l=this.seq;for(let c=0,h=l.length;c!==h;++c){const d=l[c];d.setValue(e,i[d.id],r)}}}const gh=/(\w+)(\])?(\[|\.)?/g;function z_(s,e){s.seq.push(e),s.map[e.id]=e}function xR(s,e,i){const r=s.name,l=r.length;for(gh.lastIndex=0;;){const c=gh.exec(r),h=gh.lastIndex;let d=c[1];const p=c[2]==="]",m=c[3];if(p&&(d=d|0),m===void 0||m==="["&&h+2===l){z_(i,m===void 0?new gR(d,s,e):new vR(d,s,e));break}else{let v=i.map[d];v===void 0&&(v=new _R(d),z_(i,v)),i=v}}}class mu{constructor(e,i){this.seq=[],this.map={};const r=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let h=0;h<r;++h){const d=e.getActiveUniform(i,h),p=e.getUniformLocation(i,d.name);xR(d,p,this)}const l=[],c=[];for(const h of this.seq)h.type===e.SAMPLER_2D_SHADOW||h.type===e.SAMPLER_CUBE_SHADOW||h.type===e.SAMPLER_2D_ARRAY_SHADOW?l.push(h):c.push(h);l.length>0&&(this.seq=l.concat(c))}setValue(e,i,r,l){const c=this.map[i];c!==void 0&&c.setValue(e,r,l)}setOptional(e,i,r){const l=i[r];l!==void 0&&this.setValue(e,r,l)}static upload(e,i,r,l){for(let c=0,h=i.length;c!==h;++c){const d=i[c],p=r[d.id];p.needsUpdate!==!1&&d.setValue(e,p.value,l)}}static seqWithValue(e,i){const r=[];for(let l=0,c=e.length;l!==c;++l){const h=e[l];h.id in i&&r.push(h)}return r}}function H_(s,e,i){const r=s.createShader(e);return s.shaderSource(r,i),s.compileShader(r),r}const SR=37297;let yR=0;function MR(s,e){const i=s.split(`
`),r=[],l=Math.max(e-6,0),c=Math.min(e+6,i.length);for(let h=l;h<c;h++){const d=h+1;r.push(`${d===e?">":" "} ${d}: ${i[h]}`)}return r.join(`
`)}const G_=new dt;function bR(s){Rt._getMatrix(G_,Rt.workingColorSpace,s);const e=`mat3( ${G_.elements.map(i=>i.toFixed(4))} )`;switch(Rt.getTransfer(s)){case _u:return[e,"LinearTransferOETF"];case Ht:return[e,"sRGBTransferOETF"];default:return st("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function V_(s,e,i){const r=s.getShaderParameter(e,s.COMPILE_STATUS),c=(s.getShaderInfoLog(e)||"").trim();if(r&&c==="")return"";const h=/ERROR: 0:(\d+)/.exec(c);if(h){const d=parseInt(h[1]);return i.toUpperCase()+`

`+c+`

`+MR(s.getShaderSource(e),d)}else return c}function ER(s,e){const i=bR(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const TR={[Rx]:"Linear",[Cx]:"Reinhard",[wx]:"Cineon",[Bp]:"ACESFilmic",[Ux]:"AgX",[Nx]:"Neutral",[Dx]:"Custom"};function AR(s,e){const i=TR[e];return i===void 0?(st("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const su=new Z;function RR(){Rt.getLuminanceCoefficients(su);const s=su.x.toFixed(4),e=su.y.toFixed(4),i=su.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function CR(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ll).join(`
`)}function wR(s){const e=[];for(const i in s){const r=s[i];r!==!1&&e.push("#define "+i+" "+r)}return e.join(`
`)}function DR(s,e){const i={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const c=s.getActiveAttrib(e,l),h=c.name;let d=1;c.type===s.FLOAT_MAT2&&(d=2),c.type===s.FLOAT_MAT3&&(d=3),c.type===s.FLOAT_MAT4&&(d=4),i[h]={type:c.type,location:s.getAttribLocation(e,h),locationSize:d}}return i}function ll(s){return s!==""}function k_(s,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function X_(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const UR=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ep(s){return s.replace(UR,LR)}const NR=new Map;function LR(s,e){let i=ft[e];if(i===void 0){const r=NR.get(e);if(r!==void 0)i=ft[r],st('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return Ep(i)}const OR=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function W_(s){return s.replace(OR,PR)}function PR(s,e,i,r){let l="";for(let c=parseInt(e);c<parseInt(i);c++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function q_(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const FR={[uu]:"SHADOWMAP_TYPE_PCF",[ol]:"SHADOWMAP_TYPE_VSM"};function IR(s){return FR[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const BR={[zs]:"ENVMAP_TYPE_CUBE",[Yr]:"ENVMAP_TYPE_CUBE",[Eu]:"ENVMAP_TYPE_CUBE_UV"};function zR(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":BR[s.envMapMode]||"ENVMAP_TYPE_CUBE"}const HR={[Yr]:"ENVMAP_MODE_REFRACTION"};function GR(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":HR[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const VR={[Ip]:"ENVMAP_BLENDING_MULTIPLY",[pE]:"ENVMAP_BLENDING_MIX",[mE]:"ENVMAP_BLENDING_ADD"};function kR(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":VR[s.combine]||"ENVMAP_BLENDING_NONE"}function XR(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:r,maxMip:i}}function WR(s,e,i,r){const l=s.getContext(),c=i.defines;let h=i.vertexShader,d=i.fragmentShader;const p=IR(i),m=zR(i),g=GR(i),v=kR(i),S=XR(i),y=CR(i),E=wR(c),R=l.createProgram();let M,_,N=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(M=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(ll).join(`
`),M.length>0&&(M+=`
`),_=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(ll).join(`
`),_.length>0&&(_+=`
`)):(M=[q_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+g:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ll).join(`
`),_=[q_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+m:"",i.envMap?"#define "+g:"",i.envMap?"#define "+v:"",S?"#define CUBEUV_TEXEL_WIDTH "+S.texelWidth:"",S?"#define CUBEUV_TEXEL_HEIGHT "+S.texelHeight:"",S?"#define CUBEUV_MAX_MIP "+S.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Xi?"#define TONE_MAPPING":"",i.toneMapping!==Xi?ft.tonemapping_pars_fragment:"",i.toneMapping!==Xi?AR("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",ft.colorspace_pars_fragment,ER("linearToOutputTexel",i.outputColorSpace),RR(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(ll).join(`
`)),h=Ep(h),h=k_(h,i),h=X_(h,i),d=Ep(d),d=k_(d,i),d=X_(d,i),h=W_(h),d=W_(d),i.isRawShaderMaterial!==!0&&(N=`#version 300 es
`,M=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,_=["#define varying in",i.glslVersion===t_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===t_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const O=N+M+h,L=N+_+d,I=H_(l,l.VERTEX_SHADER,O),z=H_(l,l.FRAGMENT_SHADER,L);l.attachShader(R,I),l.attachShader(R,z),i.index0AttributeName!==void 0?l.bindAttribLocation(R,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(R,0,"position"),l.linkProgram(R);function F(k){if(s.debug.checkShaderErrors){const re=l.getProgramInfoLog(R)||"",se=l.getShaderInfoLog(I)||"",pe=l.getShaderInfoLog(z)||"",fe=re.trim(),P=se.trim(),H=pe.trim();let ae=!0,Me=!0;if(l.getProgramParameter(R,l.LINK_STATUS)===!1)if(ae=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(l,R,I,z);else{const Se=V_(l,I,"vertex"),U=V_(l,z,"fragment");At("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(R,l.VALIDATE_STATUS)+`

Material Name: `+k.name+`
Material Type: `+k.type+`

Program Info Log: `+fe+`
`+Se+`
`+U)}else fe!==""?st("WebGLProgram: Program Info Log:",fe):(P===""||H==="")&&(Me=!1);Me&&(k.diagnostics={runnable:ae,programLog:fe,vertexShader:{log:P,prefix:M},fragmentShader:{log:H,prefix:_}})}l.deleteShader(I),l.deleteShader(z),K=new mu(l,R),C=DR(l,R)}let K;this.getUniforms=function(){return K===void 0&&F(this),K};let C;this.getAttributes=function(){return C===void 0&&F(this),C};let w=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=l.getProgramParameter(R,SR)),w},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(R),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=yR++,this.cacheKey=e,this.usedTimes=1,this.program=R,this.vertexShader=I,this.fragmentShader=z,this}let qR=0;class jR{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,r=e.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(r),h=this._getShaderCacheForMaterial(e);return h.has(l)===!1&&(h.add(l),l.usedTimes++),h.has(c)===!1&&(h.add(c),c.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const r of i)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let r=i.get(e);return r===void 0&&(r=new Set,i.set(e,r)),r}_getShaderStage(e){const i=this.shaderCache;let r=i.get(e);return r===void 0&&(r=new YR(e),i.set(e,r)),r}}class YR{constructor(e){this.id=qR++,this.code=e,this.usedTimes=0}}function ZR(s,e,i,r,l,c,h){const d=new Qp,p=new jR,m=new Set,g=[],v=new Map,S=l.logarithmicDepthBuffer;let y=l.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function R(C){return m.add(C),C===0?"uv":`uv${C}`}function M(C,w,k,re,se){const pe=re.fog,fe=se.geometry,P=C.isMeshStandardMaterial?re.environment:null,H=(C.isMeshStandardMaterial?i:e).get(C.envMap||P),ae=H&&H.mapping===Eu?H.image.height:null,Me=E[C.type];C.precision!==null&&(y=l.getMaxPrecision(C.precision),y!==C.precision&&st("WebGLProgram.getParameters:",C.precision,"not supported, using",y,"instead."));const Se=fe.morphAttributes.position||fe.morphAttributes.normal||fe.morphAttributes.color,U=Se!==void 0?Se.length:0;let ie=0;fe.morphAttributes.position!==void 0&&(ie=1),fe.morphAttributes.normal!==void 0&&(ie=2),fe.morphAttributes.color!==void 0&&(ie=3);let ve,Re,He,ne;if(Me){const Tt=Gi[Me];ve=Tt.vertexShader,Re=Tt.fragmentShader}else ve=C.vertexShader,Re=C.fragmentShader,p.update(C),He=p.getVertexShaderID(C),ne=p.getFragmentShaderID(C);const ue=s.getRenderTarget(),Ue=s.state.buffers.depth.getReversed(),Xe=se.isInstancedMesh===!0,Ge=se.isBatchedMesh===!0,pt=!!C.map,$t=!!C.matcap,xt=!!H,mt=!!C.aoMap,Dt=!!C.lightMap,ot=!!C.bumpMap,Jt=!!C.normalMap,G=!!C.displacementMap,Zt=!!C.emissiveMap,Et=!!C.metalnessMap,Ot=!!C.roughnessMap,Ye=C.anisotropy>0,D=C.clearcoat>0,b=C.dispersion>0,W=C.iridescence>0,he=C.sheen>0,xe=C.transmission>0,ce=Ye&&!!C.anisotropyMap,Ke=D&&!!C.clearcoatMap,we=D&&!!C.clearcoatNormalMap,We=D&&!!C.clearcoatRoughnessMap,nt=W&&!!C.iridescenceMap,be=W&&!!C.iridescenceThicknessMap,Ee=he&&!!C.sheenColorMap,Be=he&&!!C.sheenRoughnessMap,Fe=!!C.specularMap,De=!!C.specularColorMap,ct=!!C.specularIntensityMap,X=xe&&!!C.transmissionMap,Le=xe&&!!C.thicknessMap,Te=!!C.gradientMap,Ie=!!C.alphaMap,ye=C.alphaTest>0,_e=!!C.alphaHash,Ce=!!C.extensions;let it=Xi;C.toneMapped&&(ue===null||ue.isXRRenderTarget===!0)&&(it=s.toneMapping);const Ft={shaderID:Me,shaderType:C.type,shaderName:C.name,vertexShader:ve,fragmentShader:Re,defines:C.defines,customVertexShaderID:He,customFragmentShaderID:ne,isRawShaderMaterial:C.isRawShaderMaterial===!0,glslVersion:C.glslVersion,precision:y,batching:Ge,batchingColor:Ge&&se._colorsTexture!==null,instancing:Xe,instancingColor:Xe&&se.instanceColor!==null,instancingMorph:Xe&&se.morphTexture!==null,outputColorSpace:ue===null?s.outputColorSpace:ue.isXRRenderTarget===!0?ue.texture.colorSpace:Kr,alphaToCoverage:!!C.alphaToCoverage,map:pt,matcap:$t,envMap:xt,envMapMode:xt&&H.mapping,envMapCubeUVHeight:ae,aoMap:mt,lightMap:Dt,bumpMap:ot,normalMap:Jt,displacementMap:G,emissiveMap:Zt,normalMapObjectSpace:Jt&&C.normalMapType===_E,normalMapTangentSpace:Jt&&C.normalMapType===qp,metalnessMap:Et,roughnessMap:Ot,anisotropy:Ye,anisotropyMap:ce,clearcoat:D,clearcoatMap:Ke,clearcoatNormalMap:we,clearcoatRoughnessMap:We,dispersion:b,iridescence:W,iridescenceMap:nt,iridescenceThicknessMap:be,sheen:he,sheenColorMap:Ee,sheenRoughnessMap:Be,specularMap:Fe,specularColorMap:De,specularIntensityMap:ct,transmission:xe,transmissionMap:X,thicknessMap:Le,gradientMap:Te,opaque:C.transparent===!1&&C.blending===Wr&&C.alphaToCoverage===!1,alphaMap:Ie,alphaTest:ye,alphaHash:_e,combine:C.combine,mapUv:pt&&R(C.map.channel),aoMapUv:mt&&R(C.aoMap.channel),lightMapUv:Dt&&R(C.lightMap.channel),bumpMapUv:ot&&R(C.bumpMap.channel),normalMapUv:Jt&&R(C.normalMap.channel),displacementMapUv:G&&R(C.displacementMap.channel),emissiveMapUv:Zt&&R(C.emissiveMap.channel),metalnessMapUv:Et&&R(C.metalnessMap.channel),roughnessMapUv:Ot&&R(C.roughnessMap.channel),anisotropyMapUv:ce&&R(C.anisotropyMap.channel),clearcoatMapUv:Ke&&R(C.clearcoatMap.channel),clearcoatNormalMapUv:we&&R(C.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:We&&R(C.clearcoatRoughnessMap.channel),iridescenceMapUv:nt&&R(C.iridescenceMap.channel),iridescenceThicknessMapUv:be&&R(C.iridescenceThicknessMap.channel),sheenColorMapUv:Ee&&R(C.sheenColorMap.channel),sheenRoughnessMapUv:Be&&R(C.sheenRoughnessMap.channel),specularMapUv:Fe&&R(C.specularMap.channel),specularColorMapUv:De&&R(C.specularColorMap.channel),specularIntensityMapUv:ct&&R(C.specularIntensityMap.channel),transmissionMapUv:X&&R(C.transmissionMap.channel),thicknessMapUv:Le&&R(C.thicknessMap.channel),alphaMapUv:Ie&&R(C.alphaMap.channel),vertexTangents:!!fe.attributes.tangent&&(Jt||Ye),vertexColors:C.vertexColors,vertexAlphas:C.vertexColors===!0&&!!fe.attributes.color&&fe.attributes.color.itemSize===4,pointsUvs:se.isPoints===!0&&!!fe.attributes.uv&&(pt||Ie),fog:!!pe,useFog:C.fog===!0,fogExp2:!!pe&&pe.isFogExp2,flatShading:C.flatShading===!0&&C.wireframe===!1,sizeAttenuation:C.sizeAttenuation===!0,logarithmicDepthBuffer:S,reversedDepthBuffer:Ue,skinning:se.isSkinnedMesh===!0,morphTargets:fe.morphAttributes.position!==void 0,morphNormals:fe.morphAttributes.normal!==void 0,morphColors:fe.morphAttributes.color!==void 0,morphTargetsCount:U,morphTextureStride:ie,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:C.dithering,shadowMapEnabled:s.shadowMap.enabled&&k.length>0,shadowMapType:s.shadowMap.type,toneMapping:it,decodeVideoTexture:pt&&C.map.isVideoTexture===!0&&Rt.getTransfer(C.map.colorSpace)===Ht,decodeVideoTextureEmissive:Zt&&C.emissiveMap.isVideoTexture===!0&&Rt.getTransfer(C.emissiveMap.colorSpace)===Ht,premultipliedAlpha:C.premultipliedAlpha,doubleSided:C.side===_a,flipSided:C.side===Gn,useDepthPacking:C.depthPacking>=0,depthPacking:C.depthPacking||0,index0AttributeName:C.index0AttributeName,extensionClipCullDistance:Ce&&C.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ce&&C.extensions.multiDraw===!0||Ge)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:C.customProgramCacheKey()};return Ft.vertexUv1s=m.has(1),Ft.vertexUv2s=m.has(2),Ft.vertexUv3s=m.has(3),m.clear(),Ft}function _(C){const w=[];if(C.shaderID?w.push(C.shaderID):(w.push(C.customVertexShaderID),w.push(C.customFragmentShaderID)),C.defines!==void 0)for(const k in C.defines)w.push(k),w.push(C.defines[k]);return C.isRawShaderMaterial===!1&&(N(w,C),O(w,C),w.push(s.outputColorSpace)),w.push(C.customProgramCacheKey),w.join()}function N(C,w){C.push(w.precision),C.push(w.outputColorSpace),C.push(w.envMapMode),C.push(w.envMapCubeUVHeight),C.push(w.mapUv),C.push(w.alphaMapUv),C.push(w.lightMapUv),C.push(w.aoMapUv),C.push(w.bumpMapUv),C.push(w.normalMapUv),C.push(w.displacementMapUv),C.push(w.emissiveMapUv),C.push(w.metalnessMapUv),C.push(w.roughnessMapUv),C.push(w.anisotropyMapUv),C.push(w.clearcoatMapUv),C.push(w.clearcoatNormalMapUv),C.push(w.clearcoatRoughnessMapUv),C.push(w.iridescenceMapUv),C.push(w.iridescenceThicknessMapUv),C.push(w.sheenColorMapUv),C.push(w.sheenRoughnessMapUv),C.push(w.specularMapUv),C.push(w.specularColorMapUv),C.push(w.specularIntensityMapUv),C.push(w.transmissionMapUv),C.push(w.thicknessMapUv),C.push(w.combine),C.push(w.fogExp2),C.push(w.sizeAttenuation),C.push(w.morphTargetsCount),C.push(w.morphAttributeCount),C.push(w.numDirLights),C.push(w.numPointLights),C.push(w.numSpotLights),C.push(w.numSpotLightMaps),C.push(w.numHemiLights),C.push(w.numRectAreaLights),C.push(w.numDirLightShadows),C.push(w.numPointLightShadows),C.push(w.numSpotLightShadows),C.push(w.numSpotLightShadowsWithMaps),C.push(w.numLightProbes),C.push(w.shadowMapType),C.push(w.toneMapping),C.push(w.numClippingPlanes),C.push(w.numClipIntersection),C.push(w.depthPacking)}function O(C,w){d.disableAll(),w.instancing&&d.enable(0),w.instancingColor&&d.enable(1),w.instancingMorph&&d.enable(2),w.matcap&&d.enable(3),w.envMap&&d.enable(4),w.normalMapObjectSpace&&d.enable(5),w.normalMapTangentSpace&&d.enable(6),w.clearcoat&&d.enable(7),w.iridescence&&d.enable(8),w.alphaTest&&d.enable(9),w.vertexColors&&d.enable(10),w.vertexAlphas&&d.enable(11),w.vertexUv1s&&d.enable(12),w.vertexUv2s&&d.enable(13),w.vertexUv3s&&d.enable(14),w.vertexTangents&&d.enable(15),w.anisotropy&&d.enable(16),w.alphaHash&&d.enable(17),w.batching&&d.enable(18),w.dispersion&&d.enable(19),w.batchingColor&&d.enable(20),w.gradientMap&&d.enable(21),C.push(d.mask),d.disableAll(),w.fog&&d.enable(0),w.useFog&&d.enable(1),w.flatShading&&d.enable(2),w.logarithmicDepthBuffer&&d.enable(3),w.reversedDepthBuffer&&d.enable(4),w.skinning&&d.enable(5),w.morphTargets&&d.enable(6),w.morphNormals&&d.enable(7),w.morphColors&&d.enable(8),w.premultipliedAlpha&&d.enable(9),w.shadowMapEnabled&&d.enable(10),w.doubleSided&&d.enable(11),w.flipSided&&d.enable(12),w.useDepthPacking&&d.enable(13),w.dithering&&d.enable(14),w.transmission&&d.enable(15),w.sheen&&d.enable(16),w.opaque&&d.enable(17),w.pointsUvs&&d.enable(18),w.decodeVideoTexture&&d.enable(19),w.decodeVideoTextureEmissive&&d.enable(20),w.alphaToCoverage&&d.enable(21),C.push(d.mask)}function L(C){const w=E[C.type];let k;if(w){const re=Gi[w];k=o1.clone(re.uniforms)}else k=C.uniforms;return k}function I(C,w){let k=v.get(w);return k!==void 0?++k.usedTimes:(k=new WR(s,w,C,c),g.push(k),v.set(w,k)),k}function z(C){if(--C.usedTimes===0){const w=g.indexOf(C);g[w]=g[g.length-1],g.pop(),v.delete(C.cacheKey),C.destroy()}}function F(C){p.remove(C)}function K(){p.dispose()}return{getParameters:M,getProgramCacheKey:_,getUniforms:L,acquireProgram:I,releaseProgram:z,releaseShaderCache:F,programs:g,dispose:K}}function KR(){let s=new WeakMap;function e(h){return s.has(h)}function i(h){let d=s.get(h);return d===void 0&&(d={},s.set(h,d)),d}function r(h){s.delete(h)}function l(h,d,p){s.get(h)[d]=p}function c(){s=new WeakMap}return{has:e,get:i,remove:r,update:l,dispose:c}}function QR(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function j_(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Y_(){const s=[];let e=0;const i=[],r=[],l=[];function c(){e=0,i.length=0,r.length=0,l.length=0}function h(v,S,y,E,R,M){let _=s[e];return _===void 0?(_={id:v.id,object:v,geometry:S,material:y,groupOrder:E,renderOrder:v.renderOrder,z:R,group:M},s[e]=_):(_.id=v.id,_.object=v,_.geometry=S,_.material=y,_.groupOrder=E,_.renderOrder=v.renderOrder,_.z=R,_.group=M),e++,_}function d(v,S,y,E,R,M){const _=h(v,S,y,E,R,M);y.transmission>0?r.push(_):y.transparent===!0?l.push(_):i.push(_)}function p(v,S,y,E,R,M){const _=h(v,S,y,E,R,M);y.transmission>0?r.unshift(_):y.transparent===!0?l.unshift(_):i.unshift(_)}function m(v,S){i.length>1&&i.sort(v||QR),r.length>1&&r.sort(S||j_),l.length>1&&l.sort(S||j_)}function g(){for(let v=e,S=s.length;v<S;v++){const y=s[v];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:i,transmissive:r,transparent:l,init:c,push:d,unshift:p,finish:g,sort:m}}function $R(){let s=new WeakMap;function e(r,l){const c=s.get(r);let h;return c===void 0?(h=new Y_,s.set(r,[h])):l>=c.length?(h=new Y_,c.push(h)):h=c[l],h}function i(){s=new WeakMap}return{get:e,dispose:i}}function JR(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new Z,color:new ht};break;case"SpotLight":i={position:new Z,direction:new Z,color:new ht,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new Z,color:new ht,distance:0,decay:0};break;case"HemisphereLight":i={direction:new Z,skyColor:new ht,groundColor:new ht};break;case"RectAreaLight":i={color:new ht,position:new Z,halfWidth:new Z,halfHeight:new Z};break}return s[e.id]=i,i}}}function e3(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Mt};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Mt};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Mt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=i,i}}}let t3=0;function n3(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function i3(s){const e=new JR,i=e3(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)r.probe.push(new Z);const l=new Z,c=new qt,h=new qt;function d(m){let g=0,v=0,S=0;for(let C=0;C<9;C++)r.probe[C].set(0,0,0);let y=0,E=0,R=0,M=0,_=0,N=0,O=0,L=0,I=0,z=0,F=0;m.sort(n3);for(let C=0,w=m.length;C<w;C++){const k=m[C],re=k.color,se=k.intensity,pe=k.distance;let fe=null;if(k.shadow&&k.shadow.map&&(k.shadow.map.texture.format===Zr?fe=k.shadow.map.texture:fe=k.shadow.map.depthTexture||k.shadow.map.texture),k.isAmbientLight)g+=re.r*se,v+=re.g*se,S+=re.b*se;else if(k.isLightProbe){for(let P=0;P<9;P++)r.probe[P].addScaledVector(k.sh.coefficients[P],se);F++}else if(k.isDirectionalLight){const P=e.get(k);if(P.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){const H=k.shadow,ae=i.get(k);ae.shadowIntensity=H.intensity,ae.shadowBias=H.bias,ae.shadowNormalBias=H.normalBias,ae.shadowRadius=H.radius,ae.shadowMapSize=H.mapSize,r.directionalShadow[y]=ae,r.directionalShadowMap[y]=fe,r.directionalShadowMatrix[y]=k.shadow.matrix,N++}r.directional[y]=P,y++}else if(k.isSpotLight){const P=e.get(k);P.position.setFromMatrixPosition(k.matrixWorld),P.color.copy(re).multiplyScalar(se),P.distance=pe,P.coneCos=Math.cos(k.angle),P.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),P.decay=k.decay,r.spot[R]=P;const H=k.shadow;if(k.map&&(r.spotLightMap[I]=k.map,I++,H.updateMatrices(k),k.castShadow&&z++),r.spotLightMatrix[R]=H.matrix,k.castShadow){const ae=i.get(k);ae.shadowIntensity=H.intensity,ae.shadowBias=H.bias,ae.shadowNormalBias=H.normalBias,ae.shadowRadius=H.radius,ae.shadowMapSize=H.mapSize,r.spotShadow[R]=ae,r.spotShadowMap[R]=fe,L++}R++}else if(k.isRectAreaLight){const P=e.get(k);P.color.copy(re).multiplyScalar(se),P.halfWidth.set(k.width*.5,0,0),P.halfHeight.set(0,k.height*.5,0),r.rectArea[M]=P,M++}else if(k.isPointLight){const P=e.get(k);if(P.color.copy(k.color).multiplyScalar(k.intensity),P.distance=k.distance,P.decay=k.decay,k.castShadow){const H=k.shadow,ae=i.get(k);ae.shadowIntensity=H.intensity,ae.shadowBias=H.bias,ae.shadowNormalBias=H.normalBias,ae.shadowRadius=H.radius,ae.shadowMapSize=H.mapSize,ae.shadowCameraNear=H.camera.near,ae.shadowCameraFar=H.camera.far,r.pointShadow[E]=ae,r.pointShadowMap[E]=fe,r.pointShadowMatrix[E]=k.shadow.matrix,O++}r.point[E]=P,E++}else if(k.isHemisphereLight){const P=e.get(k);P.skyColor.copy(k.color).multiplyScalar(se),P.groundColor.copy(k.groundColor).multiplyScalar(se),r.hemi[_]=P,_++}}M>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Pe.LTC_FLOAT_1,r.rectAreaLTC2=Pe.LTC_FLOAT_2):(r.rectAreaLTC1=Pe.LTC_HALF_1,r.rectAreaLTC2=Pe.LTC_HALF_2)),r.ambient[0]=g,r.ambient[1]=v,r.ambient[2]=S;const K=r.hash;(K.directionalLength!==y||K.pointLength!==E||K.spotLength!==R||K.rectAreaLength!==M||K.hemiLength!==_||K.numDirectionalShadows!==N||K.numPointShadows!==O||K.numSpotShadows!==L||K.numSpotMaps!==I||K.numLightProbes!==F)&&(r.directional.length=y,r.spot.length=R,r.rectArea.length=M,r.point.length=E,r.hemi.length=_,r.directionalShadow.length=N,r.directionalShadowMap.length=N,r.pointShadow.length=O,r.pointShadowMap.length=O,r.spotShadow.length=L,r.spotShadowMap.length=L,r.directionalShadowMatrix.length=N,r.pointShadowMatrix.length=O,r.spotLightMatrix.length=L+I-z,r.spotLightMap.length=I,r.numSpotLightShadowsWithMaps=z,r.numLightProbes=F,K.directionalLength=y,K.pointLength=E,K.spotLength=R,K.rectAreaLength=M,K.hemiLength=_,K.numDirectionalShadows=N,K.numPointShadows=O,K.numSpotShadows=L,K.numSpotMaps=I,K.numLightProbes=F,r.version=t3++)}function p(m,g){let v=0,S=0,y=0,E=0,R=0;const M=g.matrixWorldInverse;for(let _=0,N=m.length;_<N;_++){const O=m[_];if(O.isDirectionalLight){const L=r.directional[v];L.direction.setFromMatrixPosition(O.matrixWorld),l.setFromMatrixPosition(O.target.matrixWorld),L.direction.sub(l),L.direction.transformDirection(M),v++}else if(O.isSpotLight){const L=r.spot[y];L.position.setFromMatrixPosition(O.matrixWorld),L.position.applyMatrix4(M),L.direction.setFromMatrixPosition(O.matrixWorld),l.setFromMatrixPosition(O.target.matrixWorld),L.direction.sub(l),L.direction.transformDirection(M),y++}else if(O.isRectAreaLight){const L=r.rectArea[E];L.position.setFromMatrixPosition(O.matrixWorld),L.position.applyMatrix4(M),h.identity(),c.copy(O.matrixWorld),c.premultiply(M),h.extractRotation(c),L.halfWidth.set(O.width*.5,0,0),L.halfHeight.set(0,O.height*.5,0),L.halfWidth.applyMatrix4(h),L.halfHeight.applyMatrix4(h),E++}else if(O.isPointLight){const L=r.point[S];L.position.setFromMatrixPosition(O.matrixWorld),L.position.applyMatrix4(M),S++}else if(O.isHemisphereLight){const L=r.hemi[R];L.direction.setFromMatrixPosition(O.matrixWorld),L.direction.transformDirection(M),R++}}}return{setup:d,setupView:p,state:r}}function Z_(s){const e=new i3(s),i=[],r=[];function l(g){m.camera=g,i.length=0,r.length=0}function c(g){i.push(g)}function h(g){r.push(g)}function d(){e.setup(i)}function p(g){e.setupView(i,g)}const m={lightsArray:i,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:l,state:m,setupLights:d,setupLightsView:p,pushLight:c,pushShadow:h}}function a3(s){let e=new WeakMap;function i(l,c=0){const h=e.get(l);let d;return h===void 0?(d=new Z_(s),e.set(l,[d])):c>=h.length?(d=new Z_(s),h.push(d)):d=h[c],d}function r(){e=new WeakMap}return{get:i,dispose:r}}const s3=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,r3=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,o3=[new Z(1,0,0),new Z(-1,0,0),new Z(0,1,0),new Z(0,-1,0),new Z(0,0,1),new Z(0,0,-1)],l3=[new Z(0,-1,0),new Z(0,-1,0),new Z(0,0,1),new Z(0,0,-1),new Z(0,-1,0),new Z(0,-1,0)],K_=new qt,rl=new Z,vh=new Z;function c3(s,e,i){let r=new $p;const l=new Mt,c=new Mt,h=new nn,d=new S1,p=new y1,m={},g=i.maxTextureSize,v={[os]:Gn,[Gn]:os,[_a]:_a},S=new ji({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Mt},radius:{value:4}},vertexShader:s3,fragmentShader:r3}),y=S.clone();y.defines.HORIZONTAL_PASS=1;const E=new Yi;E.setAttribute("position",new Ni(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const R=new Sn(E,S),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=uu;let _=this.type;this.render=function(z,F,K){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||z.length===0)return;z.type===Zb&&(st("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),z.type=uu);const C=s.getRenderTarget(),w=s.getActiveCubeFace(),k=s.getActiveMipmapLevel(),re=s.state;re.setBlending(ya),re.buffers.depth.getReversed()===!0?re.buffers.color.setClear(0,0,0,0):re.buffers.color.setClear(1,1,1,1),re.buffers.depth.setTest(!0),re.setScissorTest(!1);const se=_!==this.type;se&&F.traverse(function(pe){pe.material&&(Array.isArray(pe.material)?pe.material.forEach(fe=>fe.needsUpdate=!0):pe.material.needsUpdate=!0)});for(let pe=0,fe=z.length;pe<fe;pe++){const P=z[pe],H=P.shadow;if(H===void 0){st("WebGLShadowMap:",P,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;l.copy(H.mapSize);const ae=H.getFrameExtents();if(l.multiply(ae),c.copy(H.mapSize),(l.x>g||l.y>g)&&(l.x>g&&(c.x=Math.floor(g/ae.x),l.x=c.x*ae.x,H.mapSize.x=c.x),l.y>g&&(c.y=Math.floor(g/ae.y),l.y=c.y*ae.y,H.mapSize.y=c.y)),H.map===null||se===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===ol){if(P.isPointLight){st("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new Wi(l.x,l.y,{format:Zr,type:ba,minFilter:Fn,magFilter:Fn,generateMipmaps:!1}),H.map.texture.name=P.name+".shadowMap",H.map.depthTexture=new xl(l.x,l.y,Di),H.map.depthTexture.name=P.name+".shadowMapDepth",H.map.depthTexture.format=Ea,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Un,H.map.depthTexture.magFilter=Un}else{P.isPointLight?(H.map=new Kx(l.x),H.map.depthTexture=new g1(l.x,qi)):(H.map=new Wi(l.x,l.y),H.map.depthTexture=new xl(l.x,l.y,qi)),H.map.depthTexture.name=P.name+".shadowMap",H.map.depthTexture.format=Ea;const Se=s.state.buffers.depth.getReversed();this.type===uu?(H.map.depthTexture.compareFunction=Se?Yp:jp,H.map.depthTexture.minFilter=Fn,H.map.depthTexture.magFilter=Fn):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Un,H.map.depthTexture.magFilter=Un)}H.camera.updateProjectionMatrix()}const Me=H.map.isWebGLCubeRenderTarget?6:1;for(let Se=0;Se<Me;Se++){if(H.map.isWebGLCubeRenderTarget)s.setRenderTarget(H.map,Se),s.clear();else{Se===0&&(s.setRenderTarget(H.map),s.clear());const U=H.getViewport(Se);h.set(c.x*U.x,c.y*U.y,c.x*U.z,c.y*U.w),re.viewport(h)}if(P.isPointLight){const U=H.camera,ie=H.matrix,ve=P.distance||U.far;ve!==U.far&&(U.far=ve,U.updateProjectionMatrix()),rl.setFromMatrixPosition(P.matrixWorld),U.position.copy(rl),vh.copy(U.position),vh.add(o3[Se]),U.up.copy(l3[Se]),U.lookAt(vh),U.updateMatrixWorld(),ie.makeTranslation(-rl.x,-rl.y,-rl.z),K_.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),H._frustum.setFromProjectionMatrix(K_,U.coordinateSystem,U.reversedDepth)}else H.updateMatrices(P);r=H.getFrustum(),L(F,K,H.camera,P,this.type)}H.isPointLightShadow!==!0&&this.type===ol&&N(H,K),H.needsUpdate=!1}_=this.type,M.needsUpdate=!1,s.setRenderTarget(C,w,k)};function N(z,F){const K=e.update(R);S.defines.VSM_SAMPLES!==z.blurSamples&&(S.defines.VSM_SAMPLES=z.blurSamples,y.defines.VSM_SAMPLES=z.blurSamples,S.needsUpdate=!0,y.needsUpdate=!0),z.mapPass===null&&(z.mapPass=new Wi(l.x,l.y,{format:Zr,type:ba})),S.uniforms.shadow_pass.value=z.map.depthTexture,S.uniforms.resolution.value=z.mapSize,S.uniforms.radius.value=z.radius,s.setRenderTarget(z.mapPass),s.clear(),s.renderBufferDirect(F,null,K,S,R,null),y.uniforms.shadow_pass.value=z.mapPass.texture,y.uniforms.resolution.value=z.mapSize,y.uniforms.radius.value=z.radius,s.setRenderTarget(z.map),s.clear(),s.renderBufferDirect(F,null,K,y,R,null)}function O(z,F,K,C){let w=null;const k=K.isPointLight===!0?z.customDistanceMaterial:z.customDepthMaterial;if(k!==void 0)w=k;else if(w=K.isPointLight===!0?p:d,s.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0||F.alphaToCoverage===!0){const re=w.uuid,se=F.uuid;let pe=m[re];pe===void 0&&(pe={},m[re]=pe);let fe=pe[se];fe===void 0&&(fe=w.clone(),pe[se]=fe,F.addEventListener("dispose",I)),w=fe}if(w.visible=F.visible,w.wireframe=F.wireframe,C===ol?w.side=F.shadowSide!==null?F.shadowSide:F.side:w.side=F.shadowSide!==null?F.shadowSide:v[F.side],w.alphaMap=F.alphaMap,w.alphaTest=F.alphaToCoverage===!0?.5:F.alphaTest,w.map=F.map,w.clipShadows=F.clipShadows,w.clippingPlanes=F.clippingPlanes,w.clipIntersection=F.clipIntersection,w.displacementMap=F.displacementMap,w.displacementScale=F.displacementScale,w.displacementBias=F.displacementBias,w.wireframeLinewidth=F.wireframeLinewidth,w.linewidth=F.linewidth,K.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const re=s.properties.get(w);re.light=K}return w}function L(z,F,K,C,w){if(z.visible===!1)return;if(z.layers.test(F.layers)&&(z.isMesh||z.isLine||z.isPoints)&&(z.castShadow||z.receiveShadow&&w===ol)&&(!z.frustumCulled||r.intersectsObject(z))){z.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,z.matrixWorld);const se=e.update(z),pe=z.material;if(Array.isArray(pe)){const fe=se.groups;for(let P=0,H=fe.length;P<H;P++){const ae=fe[P],Me=pe[ae.materialIndex];if(Me&&Me.visible){const Se=O(z,Me,C,w);z.onBeforeShadow(s,z,F,K,se,Se,ae),s.renderBufferDirect(K,null,se,Se,z,ae),z.onAfterShadow(s,z,F,K,se,Se,ae)}}}else if(pe.visible){const fe=O(z,pe,C,w);z.onBeforeShadow(s,z,F,K,se,fe,null),s.renderBufferDirect(K,null,se,fe,z,null),z.onAfterShadow(s,z,F,K,se,fe,null)}}const re=z.children;for(let se=0,pe=re.length;se<pe;se++)L(re[se],F,K,C,w)}function I(z){z.target.removeEventListener("dispose",I);for(const K in m){const C=m[K],w=z.target.uuid;w in C&&(C[w].dispose(),delete C[w])}}}const u3={[Dh]:Uh,[Nh]:Ph,[Lh]:Fh,[jr]:Oh,[Uh]:Dh,[Ph]:Nh,[Fh]:Lh,[Oh]:jr};function f3(s,e){function i(){let X=!1;const Le=new nn;let Te=null;const Ie=new nn(0,0,0,0);return{setMask:function(ye){Te!==ye&&!X&&(s.colorMask(ye,ye,ye,ye),Te=ye)},setLocked:function(ye){X=ye},setClear:function(ye,_e,Ce,it,Ft){Ft===!0&&(ye*=it,_e*=it,Ce*=it),Le.set(ye,_e,Ce,it),Ie.equals(Le)===!1&&(s.clearColor(ye,_e,Ce,it),Ie.copy(Le))},reset:function(){X=!1,Te=null,Ie.set(-1,0,0,0)}}}function r(){let X=!1,Le=!1,Te=null,Ie=null,ye=null;return{setReversed:function(_e){if(Le!==_e){const Ce=e.get("EXT_clip_control");_e?Ce.clipControlEXT(Ce.LOWER_LEFT_EXT,Ce.ZERO_TO_ONE_EXT):Ce.clipControlEXT(Ce.LOWER_LEFT_EXT,Ce.NEGATIVE_ONE_TO_ONE_EXT),Le=_e;const it=ye;ye=null,this.setClear(it)}},getReversed:function(){return Le},setTest:function(_e){_e?ue(s.DEPTH_TEST):Ue(s.DEPTH_TEST)},setMask:function(_e){Te!==_e&&!X&&(s.depthMask(_e),Te=_e)},setFunc:function(_e){if(Le&&(_e=u3[_e]),Ie!==_e){switch(_e){case Dh:s.depthFunc(s.NEVER);break;case Uh:s.depthFunc(s.ALWAYS);break;case Nh:s.depthFunc(s.LESS);break;case jr:s.depthFunc(s.LEQUAL);break;case Lh:s.depthFunc(s.EQUAL);break;case Oh:s.depthFunc(s.GEQUAL);break;case Ph:s.depthFunc(s.GREATER);break;case Fh:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Ie=_e}},setLocked:function(_e){X=_e},setClear:function(_e){ye!==_e&&(Le&&(_e=1-_e),s.clearDepth(_e),ye=_e)},reset:function(){X=!1,Te=null,Ie=null,ye=null,Le=!1}}}function l(){let X=!1,Le=null,Te=null,Ie=null,ye=null,_e=null,Ce=null,it=null,Ft=null;return{setTest:function(Tt){X||(Tt?ue(s.STENCIL_TEST):Ue(s.STENCIL_TEST))},setMask:function(Tt){Le!==Tt&&!X&&(s.stencilMask(Tt),Le=Tt)},setFunc:function(Tt,Nn,Si){(Te!==Tt||Ie!==Nn||ye!==Si)&&(s.stencilFunc(Tt,Nn,Si),Te=Tt,Ie=Nn,ye=Si)},setOp:function(Tt,Nn,Si){(_e!==Tt||Ce!==Nn||it!==Si)&&(s.stencilOp(Tt,Nn,Si),_e=Tt,Ce=Nn,it=Si)},setLocked:function(Tt){X=Tt},setClear:function(Tt){Ft!==Tt&&(s.clearStencil(Tt),Ft=Tt)},reset:function(){X=!1,Le=null,Te=null,Ie=null,ye=null,_e=null,Ce=null,it=null,Ft=null}}}const c=new i,h=new r,d=new l,p=new WeakMap,m=new WeakMap;let g={},v={},S=new WeakMap,y=[],E=null,R=!1,M=null,_=null,N=null,O=null,L=null,I=null,z=null,F=new ht(0,0,0),K=0,C=!1,w=null,k=null,re=null,se=null,pe=null;const fe=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let P=!1,H=0;const ae=s.getParameter(s.VERSION);ae.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(ae)[1]),P=H>=1):ae.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(ae)[1]),P=H>=2);let Me=null,Se={};const U=s.getParameter(s.SCISSOR_BOX),ie=s.getParameter(s.VIEWPORT),ve=new nn().fromArray(U),Re=new nn().fromArray(ie);function He(X,Le,Te,Ie){const ye=new Uint8Array(4),_e=s.createTexture();s.bindTexture(X,_e),s.texParameteri(X,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(X,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Ce=0;Ce<Te;Ce++)X===s.TEXTURE_3D||X===s.TEXTURE_2D_ARRAY?s.texImage3D(Le,0,s.RGBA,1,1,Ie,0,s.RGBA,s.UNSIGNED_BYTE,ye):s.texImage2D(Le+Ce,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,ye);return _e}const ne={};ne[s.TEXTURE_2D]=He(s.TEXTURE_2D,s.TEXTURE_2D,1),ne[s.TEXTURE_CUBE_MAP]=He(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),ne[s.TEXTURE_2D_ARRAY]=He(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),ne[s.TEXTURE_3D]=He(s.TEXTURE_3D,s.TEXTURE_3D,1,1),c.setClear(0,0,0,1),h.setClear(1),d.setClear(0),ue(s.DEPTH_TEST),h.setFunc(jr),ot(!1),Jt(Zv),ue(s.CULL_FACE),mt(ya);function ue(X){g[X]!==!0&&(s.enable(X),g[X]=!0)}function Ue(X){g[X]!==!1&&(s.disable(X),g[X]=!1)}function Xe(X,Le){return v[X]!==Le?(s.bindFramebuffer(X,Le),v[X]=Le,X===s.DRAW_FRAMEBUFFER&&(v[s.FRAMEBUFFER]=Le),X===s.FRAMEBUFFER&&(v[s.DRAW_FRAMEBUFFER]=Le),!0):!1}function Ge(X,Le){let Te=y,Ie=!1;if(X){Te=S.get(Le),Te===void 0&&(Te=[],S.set(Le,Te));const ye=X.textures;if(Te.length!==ye.length||Te[0]!==s.COLOR_ATTACHMENT0){for(let _e=0,Ce=ye.length;_e<Ce;_e++)Te[_e]=s.COLOR_ATTACHMENT0+_e;Te.length=ye.length,Ie=!0}}else Te[0]!==s.BACK&&(Te[0]=s.BACK,Ie=!0);Ie&&s.drawBuffers(Te)}function pt(X){return E!==X?(s.useProgram(X),E=X,!0):!1}const $t={[Ls]:s.FUNC_ADD,[Qb]:s.FUNC_SUBTRACT,[$b]:s.FUNC_REVERSE_SUBTRACT};$t[Jb]=s.MIN,$t[eE]=s.MAX;const xt={[tE]:s.ZERO,[nE]:s.ONE,[iE]:s.SRC_COLOR,[Ch]:s.SRC_ALPHA,[cE]:s.SRC_ALPHA_SATURATE,[oE]:s.DST_COLOR,[sE]:s.DST_ALPHA,[aE]:s.ONE_MINUS_SRC_COLOR,[wh]:s.ONE_MINUS_SRC_ALPHA,[lE]:s.ONE_MINUS_DST_COLOR,[rE]:s.ONE_MINUS_DST_ALPHA,[uE]:s.CONSTANT_COLOR,[fE]:s.ONE_MINUS_CONSTANT_COLOR,[dE]:s.CONSTANT_ALPHA,[hE]:s.ONE_MINUS_CONSTANT_ALPHA};function mt(X,Le,Te,Ie,ye,_e,Ce,it,Ft,Tt){if(X===ya){R===!0&&(Ue(s.BLEND),R=!1);return}if(R===!1&&(ue(s.BLEND),R=!0),X!==Kb){if(X!==M||Tt!==C){if((_!==Ls||L!==Ls)&&(s.blendEquation(s.FUNC_ADD),_=Ls,L=Ls),Tt)switch(X){case Wr:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Kv:s.blendFunc(s.ONE,s.ONE);break;case Qv:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case $v:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:At("WebGLState: Invalid blending: ",X);break}else switch(X){case Wr:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Kv:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Qv:At("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case $v:At("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:At("WebGLState: Invalid blending: ",X);break}N=null,O=null,I=null,z=null,F.set(0,0,0),K=0,M=X,C=Tt}return}ye=ye||Le,_e=_e||Te,Ce=Ce||Ie,(Le!==_||ye!==L)&&(s.blendEquationSeparate($t[Le],$t[ye]),_=Le,L=ye),(Te!==N||Ie!==O||_e!==I||Ce!==z)&&(s.blendFuncSeparate(xt[Te],xt[Ie],xt[_e],xt[Ce]),N=Te,O=Ie,I=_e,z=Ce),(it.equals(F)===!1||Ft!==K)&&(s.blendColor(it.r,it.g,it.b,Ft),F.copy(it),K=Ft),M=X,C=!1}function Dt(X,Le){X.side===_a?Ue(s.CULL_FACE):ue(s.CULL_FACE);let Te=X.side===Gn;Le&&(Te=!Te),ot(Te),X.blending===Wr&&X.transparent===!1?mt(ya):mt(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),h.setFunc(X.depthFunc),h.setTest(X.depthTest),h.setMask(X.depthWrite),c.setMask(X.colorWrite);const Ie=X.stencilWrite;d.setTest(Ie),Ie&&(d.setMask(X.stencilWriteMask),d.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),d.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),Zt(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?ue(s.SAMPLE_ALPHA_TO_COVERAGE):Ue(s.SAMPLE_ALPHA_TO_COVERAGE)}function ot(X){w!==X&&(X?s.frontFace(s.CW):s.frontFace(s.CCW),w=X)}function Jt(X){X!==jb?(ue(s.CULL_FACE),X!==k&&(X===Zv?s.cullFace(s.BACK):X===Yb?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Ue(s.CULL_FACE),k=X}function G(X){X!==re&&(P&&s.lineWidth(X),re=X)}function Zt(X,Le,Te){X?(ue(s.POLYGON_OFFSET_FILL),(se!==Le||pe!==Te)&&(s.polygonOffset(Le,Te),se=Le,pe=Te)):Ue(s.POLYGON_OFFSET_FILL)}function Et(X){X?ue(s.SCISSOR_TEST):Ue(s.SCISSOR_TEST)}function Ot(X){X===void 0&&(X=s.TEXTURE0+fe-1),Me!==X&&(s.activeTexture(X),Me=X)}function Ye(X,Le,Te){Te===void 0&&(Me===null?Te=s.TEXTURE0+fe-1:Te=Me);let Ie=Se[Te];Ie===void 0&&(Ie={type:void 0,texture:void 0},Se[Te]=Ie),(Ie.type!==X||Ie.texture!==Le)&&(Me!==Te&&(s.activeTexture(Te),Me=Te),s.bindTexture(X,Le||ne[X]),Ie.type=X,Ie.texture=Le)}function D(){const X=Se[Me];X!==void 0&&X.type!==void 0&&(s.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function b(){try{s.compressedTexImage2D(...arguments)}catch(X){At("WebGLState:",X)}}function W(){try{s.compressedTexImage3D(...arguments)}catch(X){At("WebGLState:",X)}}function he(){try{s.texSubImage2D(...arguments)}catch(X){At("WebGLState:",X)}}function xe(){try{s.texSubImage3D(...arguments)}catch(X){At("WebGLState:",X)}}function ce(){try{s.compressedTexSubImage2D(...arguments)}catch(X){At("WebGLState:",X)}}function Ke(){try{s.compressedTexSubImage3D(...arguments)}catch(X){At("WebGLState:",X)}}function we(){try{s.texStorage2D(...arguments)}catch(X){At("WebGLState:",X)}}function We(){try{s.texStorage3D(...arguments)}catch(X){At("WebGLState:",X)}}function nt(){try{s.texImage2D(...arguments)}catch(X){At("WebGLState:",X)}}function be(){try{s.texImage3D(...arguments)}catch(X){At("WebGLState:",X)}}function Ee(X){ve.equals(X)===!1&&(s.scissor(X.x,X.y,X.z,X.w),ve.copy(X))}function Be(X){Re.equals(X)===!1&&(s.viewport(X.x,X.y,X.z,X.w),Re.copy(X))}function Fe(X,Le){let Te=m.get(Le);Te===void 0&&(Te=new WeakMap,m.set(Le,Te));let Ie=Te.get(X);Ie===void 0&&(Ie=s.getUniformBlockIndex(Le,X.name),Te.set(X,Ie))}function De(X,Le){const Ie=m.get(Le).get(X);p.get(Le)!==Ie&&(s.uniformBlockBinding(Le,Ie,X.__bindingPointIndex),p.set(Le,Ie))}function ct(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),h.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),g={},Me=null,Se={},v={},S=new WeakMap,y=[],E=null,R=!1,M=null,_=null,N=null,O=null,L=null,I=null,z=null,F=new ht(0,0,0),K=0,C=!1,w=null,k=null,re=null,se=null,pe=null,ve.set(0,0,s.canvas.width,s.canvas.height),Re.set(0,0,s.canvas.width,s.canvas.height),c.reset(),h.reset(),d.reset()}return{buffers:{color:c,depth:h,stencil:d},enable:ue,disable:Ue,bindFramebuffer:Xe,drawBuffers:Ge,useProgram:pt,setBlending:mt,setMaterial:Dt,setFlipSided:ot,setCullFace:Jt,setLineWidth:G,setPolygonOffset:Zt,setScissorTest:Et,activeTexture:Ot,bindTexture:Ye,unbindTexture:D,compressedTexImage2D:b,compressedTexImage3D:W,texImage2D:nt,texImage3D:be,updateUBOMapping:Fe,uniformBlockBinding:De,texStorage2D:we,texStorage3D:We,texSubImage2D:he,texSubImage3D:xe,compressedTexSubImage2D:ce,compressedTexSubImage3D:Ke,scissor:Ee,viewport:Be,reset:ct}}function d3(s,e,i,r,l,c,h){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new Mt,g=new WeakMap;let v;const S=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(D,b){return y?new OffscreenCanvas(D,b):Su("canvas")}function R(D,b,W){let he=1;const xe=Ye(D);if((xe.width>W||xe.height>W)&&(he=W/Math.max(xe.width,xe.height)),he<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const ce=Math.floor(he*xe.width),Ke=Math.floor(he*xe.height);v===void 0&&(v=E(ce,Ke));const we=b?E(ce,Ke):v;return we.width=ce,we.height=Ke,we.getContext("2d").drawImage(D,0,0,ce,Ke),st("WebGLRenderer: Texture has been resized from ("+xe.width+"x"+xe.height+") to ("+ce+"x"+Ke+")."),we}else return"data"in D&&st("WebGLRenderer: Image in DataTexture is too big ("+xe.width+"x"+xe.height+")."),D;return D}function M(D){return D.generateMipmaps}function _(D){s.generateMipmap(D)}function N(D){return D.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?s.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function O(D,b,W,he,xe=!1){if(D!==null){if(s[D]!==void 0)return s[D];st("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let ce=b;if(b===s.RED&&(W===s.FLOAT&&(ce=s.R32F),W===s.HALF_FLOAT&&(ce=s.R16F),W===s.UNSIGNED_BYTE&&(ce=s.R8)),b===s.RED_INTEGER&&(W===s.UNSIGNED_BYTE&&(ce=s.R8UI),W===s.UNSIGNED_SHORT&&(ce=s.R16UI),W===s.UNSIGNED_INT&&(ce=s.R32UI),W===s.BYTE&&(ce=s.R8I),W===s.SHORT&&(ce=s.R16I),W===s.INT&&(ce=s.R32I)),b===s.RG&&(W===s.FLOAT&&(ce=s.RG32F),W===s.HALF_FLOAT&&(ce=s.RG16F),W===s.UNSIGNED_BYTE&&(ce=s.RG8)),b===s.RG_INTEGER&&(W===s.UNSIGNED_BYTE&&(ce=s.RG8UI),W===s.UNSIGNED_SHORT&&(ce=s.RG16UI),W===s.UNSIGNED_INT&&(ce=s.RG32UI),W===s.BYTE&&(ce=s.RG8I),W===s.SHORT&&(ce=s.RG16I),W===s.INT&&(ce=s.RG32I)),b===s.RGB_INTEGER&&(W===s.UNSIGNED_BYTE&&(ce=s.RGB8UI),W===s.UNSIGNED_SHORT&&(ce=s.RGB16UI),W===s.UNSIGNED_INT&&(ce=s.RGB32UI),W===s.BYTE&&(ce=s.RGB8I),W===s.SHORT&&(ce=s.RGB16I),W===s.INT&&(ce=s.RGB32I)),b===s.RGBA_INTEGER&&(W===s.UNSIGNED_BYTE&&(ce=s.RGBA8UI),W===s.UNSIGNED_SHORT&&(ce=s.RGBA16UI),W===s.UNSIGNED_INT&&(ce=s.RGBA32UI),W===s.BYTE&&(ce=s.RGBA8I),W===s.SHORT&&(ce=s.RGBA16I),W===s.INT&&(ce=s.RGBA32I)),b===s.RGB&&(W===s.UNSIGNED_INT_5_9_9_9_REV&&(ce=s.RGB9_E5),W===s.UNSIGNED_INT_10F_11F_11F_REV&&(ce=s.R11F_G11F_B10F)),b===s.RGBA){const Ke=xe?_u:Rt.getTransfer(he);W===s.FLOAT&&(ce=s.RGBA32F),W===s.HALF_FLOAT&&(ce=s.RGBA16F),W===s.UNSIGNED_BYTE&&(ce=Ke===Ht?s.SRGB8_ALPHA8:s.RGBA8),W===s.UNSIGNED_SHORT_4_4_4_4&&(ce=s.RGBA4),W===s.UNSIGNED_SHORT_5_5_5_1&&(ce=s.RGB5_A1)}return(ce===s.R16F||ce===s.R32F||ce===s.RG16F||ce===s.RG32F||ce===s.RGBA16F||ce===s.RGBA32F)&&e.get("EXT_color_buffer_float"),ce}function L(D,b){let W;return D?b===null||b===qi||b===gl?W=s.DEPTH24_STENCIL8:b===Di?W=s.DEPTH32F_STENCIL8:b===ml&&(W=s.DEPTH24_STENCIL8,st("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===qi||b===gl?W=s.DEPTH_COMPONENT24:b===Di?W=s.DEPTH_COMPONENT32F:b===ml&&(W=s.DEPTH_COMPONENT16),W}function I(D,b){return M(D)===!0||D.isFramebufferTexture&&D.minFilter!==Un&&D.minFilter!==Fn?Math.log2(Math.max(b.width,b.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?b.mipmaps.length:1}function z(D){const b=D.target;b.removeEventListener("dispose",z),K(b),b.isVideoTexture&&g.delete(b)}function F(D){const b=D.target;b.removeEventListener("dispose",F),w(b)}function K(D){const b=r.get(D);if(b.__webglInit===void 0)return;const W=D.source,he=S.get(W);if(he){const xe=he[b.__cacheKey];xe.usedTimes--,xe.usedTimes===0&&C(D),Object.keys(he).length===0&&S.delete(W)}r.remove(D)}function C(D){const b=r.get(D);s.deleteTexture(b.__webglTexture);const W=D.source,he=S.get(W);delete he[b.__cacheKey],h.memory.textures--}function w(D){const b=r.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),r.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let he=0;he<6;he++){if(Array.isArray(b.__webglFramebuffer[he]))for(let xe=0;xe<b.__webglFramebuffer[he].length;xe++)s.deleteFramebuffer(b.__webglFramebuffer[he][xe]);else s.deleteFramebuffer(b.__webglFramebuffer[he]);b.__webglDepthbuffer&&s.deleteRenderbuffer(b.__webglDepthbuffer[he])}else{if(Array.isArray(b.__webglFramebuffer))for(let he=0;he<b.__webglFramebuffer.length;he++)s.deleteFramebuffer(b.__webglFramebuffer[he]);else s.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&s.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&s.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let he=0;he<b.__webglColorRenderbuffer.length;he++)b.__webglColorRenderbuffer[he]&&s.deleteRenderbuffer(b.__webglColorRenderbuffer[he]);b.__webglDepthRenderbuffer&&s.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const W=D.textures;for(let he=0,xe=W.length;he<xe;he++){const ce=r.get(W[he]);ce.__webglTexture&&(s.deleteTexture(ce.__webglTexture),h.memory.textures--),r.remove(W[he])}r.remove(D)}let k=0;function re(){k=0}function se(){const D=k;return D>=l.maxTextures&&st("WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+l.maxTextures),k+=1,D}function pe(D){const b=[];return b.push(D.wrapS),b.push(D.wrapT),b.push(D.wrapR||0),b.push(D.magFilter),b.push(D.minFilter),b.push(D.anisotropy),b.push(D.internalFormat),b.push(D.format),b.push(D.type),b.push(D.generateMipmaps),b.push(D.premultiplyAlpha),b.push(D.flipY),b.push(D.unpackAlignment),b.push(D.colorSpace),b.join()}function fe(D,b){const W=r.get(D);if(D.isVideoTexture&&Et(D),D.isRenderTargetTexture===!1&&D.isExternalTexture!==!0&&D.version>0&&W.__version!==D.version){const he=D.image;if(he===null)st("WebGLRenderer: Texture marked for update but no image data found.");else if(he.complete===!1)st("WebGLRenderer: Texture marked for update but image is incomplete");else{ne(W,D,b);return}}else D.isExternalTexture&&(W.__webglTexture=D.sourceTexture?D.sourceTexture:null);i.bindTexture(s.TEXTURE_2D,W.__webglTexture,s.TEXTURE0+b)}function P(D,b){const W=r.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&W.__version!==D.version){ne(W,D,b);return}else D.isExternalTexture&&(W.__webglTexture=D.sourceTexture?D.sourceTexture:null);i.bindTexture(s.TEXTURE_2D_ARRAY,W.__webglTexture,s.TEXTURE0+b)}function H(D,b){const W=r.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&W.__version!==D.version){ne(W,D,b);return}i.bindTexture(s.TEXTURE_3D,W.__webglTexture,s.TEXTURE0+b)}function ae(D,b){const W=r.get(D);if(D.isCubeDepthTexture!==!0&&D.version>0&&W.__version!==D.version){ue(W,D,b);return}i.bindTexture(s.TEXTURE_CUBE_MAP,W.__webglTexture,s.TEXTURE0+b)}const Me={[zh]:s.REPEAT,[Sa]:s.CLAMP_TO_EDGE,[Hh]:s.MIRRORED_REPEAT},Se={[Un]:s.NEAREST,[gE]:s.NEAREST_MIPMAP_NEAREST,[Bc]:s.NEAREST_MIPMAP_LINEAR,[Fn]:s.LINEAR,[Vd]:s.LINEAR_MIPMAP_NEAREST,[Fs]:s.LINEAR_MIPMAP_LINEAR},U={[xE]:s.NEVER,[EE]:s.ALWAYS,[SE]:s.LESS,[jp]:s.LEQUAL,[yE]:s.EQUAL,[Yp]:s.GEQUAL,[ME]:s.GREATER,[bE]:s.NOTEQUAL};function ie(D,b){if(b.type===Di&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===Fn||b.magFilter===Vd||b.magFilter===Bc||b.magFilter===Fs||b.minFilter===Fn||b.minFilter===Vd||b.minFilter===Bc||b.minFilter===Fs)&&st("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(D,s.TEXTURE_WRAP_S,Me[b.wrapS]),s.texParameteri(D,s.TEXTURE_WRAP_T,Me[b.wrapT]),(D===s.TEXTURE_3D||D===s.TEXTURE_2D_ARRAY)&&s.texParameteri(D,s.TEXTURE_WRAP_R,Me[b.wrapR]),s.texParameteri(D,s.TEXTURE_MAG_FILTER,Se[b.magFilter]),s.texParameteri(D,s.TEXTURE_MIN_FILTER,Se[b.minFilter]),b.compareFunction&&(s.texParameteri(D,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(D,s.TEXTURE_COMPARE_FUNC,U[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Un||b.minFilter!==Bc&&b.minFilter!==Fs||b.type===Di&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||r.get(b).__currentAnisotropy){const W=e.get("EXT_texture_filter_anisotropic");s.texParameterf(D,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,l.getMaxAnisotropy())),r.get(b).__currentAnisotropy=b.anisotropy}}}function ve(D,b){let W=!1;D.__webglInit===void 0&&(D.__webglInit=!0,b.addEventListener("dispose",z));const he=b.source;let xe=S.get(he);xe===void 0&&(xe={},S.set(he,xe));const ce=pe(b);if(ce!==D.__cacheKey){xe[ce]===void 0&&(xe[ce]={texture:s.createTexture(),usedTimes:0},h.memory.textures++,W=!0),xe[ce].usedTimes++;const Ke=xe[D.__cacheKey];Ke!==void 0&&(xe[D.__cacheKey].usedTimes--,Ke.usedTimes===0&&C(b)),D.__cacheKey=ce,D.__webglTexture=xe[ce].texture}return W}function Re(D,b,W){return Math.floor(Math.floor(D/W)/b)}function He(D,b,W,he){const ce=D.updateRanges;if(ce.length===0)i.texSubImage2D(s.TEXTURE_2D,0,0,0,b.width,b.height,W,he,b.data);else{ce.sort((be,Ee)=>be.start-Ee.start);let Ke=0;for(let be=1;be<ce.length;be++){const Ee=ce[Ke],Be=ce[be],Fe=Ee.start+Ee.count,De=Re(Be.start,b.width,4),ct=Re(Ee.start,b.width,4);Be.start<=Fe+1&&De===ct&&Re(Be.start+Be.count-1,b.width,4)===De?Ee.count=Math.max(Ee.count,Be.start+Be.count-Ee.start):(++Ke,ce[Ke]=Be)}ce.length=Ke+1;const we=s.getParameter(s.UNPACK_ROW_LENGTH),We=s.getParameter(s.UNPACK_SKIP_PIXELS),nt=s.getParameter(s.UNPACK_SKIP_ROWS);s.pixelStorei(s.UNPACK_ROW_LENGTH,b.width);for(let be=0,Ee=ce.length;be<Ee;be++){const Be=ce[be],Fe=Math.floor(Be.start/4),De=Math.ceil(Be.count/4),ct=Fe%b.width,X=Math.floor(Fe/b.width),Le=De,Te=1;s.pixelStorei(s.UNPACK_SKIP_PIXELS,ct),s.pixelStorei(s.UNPACK_SKIP_ROWS,X),i.texSubImage2D(s.TEXTURE_2D,0,ct,X,Le,Te,W,he,b.data)}D.clearUpdateRanges(),s.pixelStorei(s.UNPACK_ROW_LENGTH,we),s.pixelStorei(s.UNPACK_SKIP_PIXELS,We),s.pixelStorei(s.UNPACK_SKIP_ROWS,nt)}}function ne(D,b,W){let he=s.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(he=s.TEXTURE_2D_ARRAY),b.isData3DTexture&&(he=s.TEXTURE_3D);const xe=ve(D,b),ce=b.source;i.bindTexture(he,D.__webglTexture,s.TEXTURE0+W);const Ke=r.get(ce);if(ce.version!==Ke.__version||xe===!0){i.activeTexture(s.TEXTURE0+W);const we=Rt.getPrimaries(Rt.workingColorSpace),We=b.colorSpace===ss?null:Rt.getPrimaries(b.colorSpace),nt=b.colorSpace===ss||we===We?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,nt);let be=R(b.image,!1,l.maxTextureSize);be=Ot(b,be);const Ee=c.convert(b.format,b.colorSpace),Be=c.convert(b.type);let Fe=O(b.internalFormat,Ee,Be,b.colorSpace,b.isVideoTexture);ie(he,b);let De;const ct=b.mipmaps,X=b.isVideoTexture!==!0,Le=Ke.__version===void 0||xe===!0,Te=ce.dataReady,Ie=I(b,be);if(b.isDepthTexture)Fe=L(b.format===Is,b.type),Le&&(X?i.texStorage2D(s.TEXTURE_2D,1,Fe,be.width,be.height):i.texImage2D(s.TEXTURE_2D,0,Fe,be.width,be.height,0,Ee,Be,null));else if(b.isDataTexture)if(ct.length>0){X&&Le&&i.texStorage2D(s.TEXTURE_2D,Ie,Fe,ct[0].width,ct[0].height);for(let ye=0,_e=ct.length;ye<_e;ye++)De=ct[ye],X?Te&&i.texSubImage2D(s.TEXTURE_2D,ye,0,0,De.width,De.height,Ee,Be,De.data):i.texImage2D(s.TEXTURE_2D,ye,Fe,De.width,De.height,0,Ee,Be,De.data);b.generateMipmaps=!1}else X?(Le&&i.texStorage2D(s.TEXTURE_2D,Ie,Fe,be.width,be.height),Te&&He(b,be,Ee,Be)):i.texImage2D(s.TEXTURE_2D,0,Fe,be.width,be.height,0,Ee,Be,be.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){X&&Le&&i.texStorage3D(s.TEXTURE_2D_ARRAY,Ie,Fe,ct[0].width,ct[0].height,be.depth);for(let ye=0,_e=ct.length;ye<_e;ye++)if(De=ct[ye],b.format!==Ui)if(Ee!==null)if(X){if(Te)if(b.layerUpdates.size>0){const Ce=C_(De.width,De.height,b.format,b.type);for(const it of b.layerUpdates){const Ft=De.data.subarray(it*Ce/De.data.BYTES_PER_ELEMENT,(it+1)*Ce/De.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ye,0,0,it,De.width,De.height,1,Ee,Ft)}b.clearLayerUpdates()}else i.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ye,0,0,0,De.width,De.height,be.depth,Ee,De.data)}else i.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ye,Fe,De.width,De.height,be.depth,0,De.data,0,0);else st("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else X?Te&&i.texSubImage3D(s.TEXTURE_2D_ARRAY,ye,0,0,0,De.width,De.height,be.depth,Ee,Be,De.data):i.texImage3D(s.TEXTURE_2D_ARRAY,ye,Fe,De.width,De.height,be.depth,0,Ee,Be,De.data)}else{X&&Le&&i.texStorage2D(s.TEXTURE_2D,Ie,Fe,ct[0].width,ct[0].height);for(let ye=0,_e=ct.length;ye<_e;ye++)De=ct[ye],b.format!==Ui?Ee!==null?X?Te&&i.compressedTexSubImage2D(s.TEXTURE_2D,ye,0,0,De.width,De.height,Ee,De.data):i.compressedTexImage2D(s.TEXTURE_2D,ye,Fe,De.width,De.height,0,De.data):st("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):X?Te&&i.texSubImage2D(s.TEXTURE_2D,ye,0,0,De.width,De.height,Ee,Be,De.data):i.texImage2D(s.TEXTURE_2D,ye,Fe,De.width,De.height,0,Ee,Be,De.data)}else if(b.isDataArrayTexture)if(X){if(Le&&i.texStorage3D(s.TEXTURE_2D_ARRAY,Ie,Fe,be.width,be.height,be.depth),Te)if(b.layerUpdates.size>0){const ye=C_(be.width,be.height,b.format,b.type);for(const _e of b.layerUpdates){const Ce=be.data.subarray(_e*ye/be.data.BYTES_PER_ELEMENT,(_e+1)*ye/be.data.BYTES_PER_ELEMENT);i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,_e,be.width,be.height,1,Ee,Be,Ce)}b.clearLayerUpdates()}else i.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,be.width,be.height,be.depth,Ee,Be,be.data)}else i.texImage3D(s.TEXTURE_2D_ARRAY,0,Fe,be.width,be.height,be.depth,0,Ee,Be,be.data);else if(b.isData3DTexture)X?(Le&&i.texStorage3D(s.TEXTURE_3D,Ie,Fe,be.width,be.height,be.depth),Te&&i.texSubImage3D(s.TEXTURE_3D,0,0,0,0,be.width,be.height,be.depth,Ee,Be,be.data)):i.texImage3D(s.TEXTURE_3D,0,Fe,be.width,be.height,be.depth,0,Ee,Be,be.data);else if(b.isFramebufferTexture){if(Le)if(X)i.texStorage2D(s.TEXTURE_2D,Ie,Fe,be.width,be.height);else{let ye=be.width,_e=be.height;for(let Ce=0;Ce<Ie;Ce++)i.texImage2D(s.TEXTURE_2D,Ce,Fe,ye,_e,0,Ee,Be,null),ye>>=1,_e>>=1}}else if(ct.length>0){if(X&&Le){const ye=Ye(ct[0]);i.texStorage2D(s.TEXTURE_2D,Ie,Fe,ye.width,ye.height)}for(let ye=0,_e=ct.length;ye<_e;ye++)De=ct[ye],X?Te&&i.texSubImage2D(s.TEXTURE_2D,ye,0,0,Ee,Be,De):i.texImage2D(s.TEXTURE_2D,ye,Fe,Ee,Be,De);b.generateMipmaps=!1}else if(X){if(Le){const ye=Ye(be);i.texStorage2D(s.TEXTURE_2D,Ie,Fe,ye.width,ye.height)}Te&&i.texSubImage2D(s.TEXTURE_2D,0,0,0,Ee,Be,be)}else i.texImage2D(s.TEXTURE_2D,0,Fe,Ee,Be,be);M(b)&&_(he),Ke.__version=ce.version,b.onUpdate&&b.onUpdate(b)}D.__version=b.version}function ue(D,b,W){if(b.image.length!==6)return;const he=ve(D,b),xe=b.source;i.bindTexture(s.TEXTURE_CUBE_MAP,D.__webglTexture,s.TEXTURE0+W);const ce=r.get(xe);if(xe.version!==ce.__version||he===!0){i.activeTexture(s.TEXTURE0+W);const Ke=Rt.getPrimaries(Rt.workingColorSpace),we=b.colorSpace===ss?null:Rt.getPrimaries(b.colorSpace),We=b.colorSpace===ss||Ke===we?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,We);const nt=b.isCompressedTexture||b.image[0].isCompressedTexture,be=b.image[0]&&b.image[0].isDataTexture,Ee=[];for(let _e=0;_e<6;_e++)!nt&&!be?Ee[_e]=R(b.image[_e],!0,l.maxCubemapSize):Ee[_e]=be?b.image[_e].image:b.image[_e],Ee[_e]=Ot(b,Ee[_e]);const Be=Ee[0],Fe=c.convert(b.format,b.colorSpace),De=c.convert(b.type),ct=O(b.internalFormat,Fe,De,b.colorSpace),X=b.isVideoTexture!==!0,Le=ce.__version===void 0||he===!0,Te=xe.dataReady;let Ie=I(b,Be);ie(s.TEXTURE_CUBE_MAP,b);let ye;if(nt){X&&Le&&i.texStorage2D(s.TEXTURE_CUBE_MAP,Ie,ct,Be.width,Be.height);for(let _e=0;_e<6;_e++){ye=Ee[_e].mipmaps;for(let Ce=0;Ce<ye.length;Ce++){const it=ye[Ce];b.format!==Ui?Fe!==null?X?Te&&i.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Ce,0,0,it.width,it.height,Fe,it.data):i.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Ce,ct,it.width,it.height,0,it.data):st("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):X?Te&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Ce,0,0,it.width,it.height,Fe,De,it.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Ce,ct,it.width,it.height,0,Fe,De,it.data)}}}else{if(ye=b.mipmaps,X&&Le){ye.length>0&&Ie++;const _e=Ye(Ee[0]);i.texStorage2D(s.TEXTURE_CUBE_MAP,Ie,ct,_e.width,_e.height)}for(let _e=0;_e<6;_e++)if(be){X?Te&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,0,0,Ee[_e].width,Ee[_e].height,Fe,De,Ee[_e].data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,ct,Ee[_e].width,Ee[_e].height,0,Fe,De,Ee[_e].data);for(let Ce=0;Ce<ye.length;Ce++){const Ft=ye[Ce].image[_e].image;X?Te&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Ce+1,0,0,Ft.width,Ft.height,Fe,De,Ft.data):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Ce+1,ct,Ft.width,Ft.height,0,Fe,De,Ft.data)}}else{X?Te&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,0,0,Fe,De,Ee[_e]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,ct,Fe,De,Ee[_e]);for(let Ce=0;Ce<ye.length;Ce++){const it=ye[Ce];X?Te&&i.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Ce+1,0,0,Fe,De,it.image[_e]):i.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Ce+1,ct,Fe,De,it.image[_e])}}}M(b)&&_(s.TEXTURE_CUBE_MAP),ce.__version=xe.version,b.onUpdate&&b.onUpdate(b)}D.__version=b.version}function Ue(D,b,W,he,xe,ce){const Ke=c.convert(W.format,W.colorSpace),we=c.convert(W.type),We=O(W.internalFormat,Ke,we,W.colorSpace),nt=r.get(b),be=r.get(W);if(be.__renderTarget=b,!nt.__hasExternalTextures){const Ee=Math.max(1,b.width>>ce),Be=Math.max(1,b.height>>ce);xe===s.TEXTURE_3D||xe===s.TEXTURE_2D_ARRAY?i.texImage3D(xe,ce,We,Ee,Be,b.depth,0,Ke,we,null):i.texImage2D(xe,ce,We,Ee,Be,0,Ke,we,null)}i.bindFramebuffer(s.FRAMEBUFFER,D),Zt(b)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,he,xe,be.__webglTexture,0,G(b)):(xe===s.TEXTURE_2D||xe>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&xe<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,he,xe,be.__webglTexture,ce),i.bindFramebuffer(s.FRAMEBUFFER,null)}function Xe(D,b,W){if(s.bindRenderbuffer(s.RENDERBUFFER,D),b.depthBuffer){const he=b.depthTexture,xe=he&&he.isDepthTexture?he.type:null,ce=L(b.stencilBuffer,xe),Ke=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;Zt(b)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,G(b),ce,b.width,b.height):W?s.renderbufferStorageMultisample(s.RENDERBUFFER,G(b),ce,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,ce,b.width,b.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Ke,s.RENDERBUFFER,D)}else{const he=b.textures;for(let xe=0;xe<he.length;xe++){const ce=he[xe],Ke=c.convert(ce.format,ce.colorSpace),we=c.convert(ce.type),We=O(ce.internalFormat,Ke,we,ce.colorSpace);Zt(b)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,G(b),We,b.width,b.height):W?s.renderbufferStorageMultisample(s.RENDERBUFFER,G(b),We,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,We,b.width,b.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Ge(D,b,W){const he=b.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(s.FRAMEBUFFER,D),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const xe=r.get(b.depthTexture);if(xe.__renderTarget=b,(!xe.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),he){if(xe.__webglInit===void 0&&(xe.__webglInit=!0,b.depthTexture.addEventListener("dispose",z)),xe.__webglTexture===void 0){xe.__webglTexture=s.createTexture(),i.bindTexture(s.TEXTURE_CUBE_MAP,xe.__webglTexture),ie(s.TEXTURE_CUBE_MAP,b.depthTexture);const nt=c.convert(b.depthTexture.format),be=c.convert(b.depthTexture.type);let Ee;b.depthTexture.format===Ea?Ee=s.DEPTH_COMPONENT24:b.depthTexture.format===Is&&(Ee=s.DEPTH24_STENCIL8);for(let Be=0;Be<6;Be++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Be,0,Ee,b.width,b.height,0,nt,be,null)}}else fe(b.depthTexture,0);const ce=xe.__webglTexture,Ke=G(b),we=he?s.TEXTURE_CUBE_MAP_POSITIVE_X+W:s.TEXTURE_2D,We=b.depthTexture.format===Is?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(b.depthTexture.format===Ea)Zt(b)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,We,we,ce,0,Ke):s.framebufferTexture2D(s.FRAMEBUFFER,We,we,ce,0);else if(b.depthTexture.format===Is)Zt(b)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,We,we,ce,0,Ke):s.framebufferTexture2D(s.FRAMEBUFFER,We,we,ce,0);else throw new Error("Unknown depthTexture format")}function pt(D){const b=r.get(D),W=D.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==D.depthTexture){const he=D.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),he){const xe=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,he.removeEventListener("dispose",xe)};he.addEventListener("dispose",xe),b.__depthDisposeCallback=xe}b.__boundDepthTexture=he}if(D.depthTexture&&!b.__autoAllocateDepthBuffer)if(W)for(let he=0;he<6;he++)Ge(b.__webglFramebuffer[he],D,he);else{const he=D.texture.mipmaps;he&&he.length>0?Ge(b.__webglFramebuffer[0],D,0):Ge(b.__webglFramebuffer,D,0)}else if(W){b.__webglDepthbuffer=[];for(let he=0;he<6;he++)if(i.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer[he]),b.__webglDepthbuffer[he]===void 0)b.__webglDepthbuffer[he]=s.createRenderbuffer(),Xe(b.__webglDepthbuffer[he],D,!1);else{const xe=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ce=b.__webglDepthbuffer[he];s.bindRenderbuffer(s.RENDERBUFFER,ce),s.framebufferRenderbuffer(s.FRAMEBUFFER,xe,s.RENDERBUFFER,ce)}}else{const he=D.texture.mipmaps;if(he&&he.length>0?i.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer[0]):i.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=s.createRenderbuffer(),Xe(b.__webglDepthbuffer,D,!1);else{const xe=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ce=b.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,ce),s.framebufferRenderbuffer(s.FRAMEBUFFER,xe,s.RENDERBUFFER,ce)}}i.bindFramebuffer(s.FRAMEBUFFER,null)}function $t(D,b,W){const he=r.get(D);b!==void 0&&Ue(he.__webglFramebuffer,D,D.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),W!==void 0&&pt(D)}function xt(D){const b=D.texture,W=r.get(D),he=r.get(b);D.addEventListener("dispose",F);const xe=D.textures,ce=D.isWebGLCubeRenderTarget===!0,Ke=xe.length>1;if(Ke||(he.__webglTexture===void 0&&(he.__webglTexture=s.createTexture()),he.__version=b.version,h.memory.textures++),ce){W.__webglFramebuffer=[];for(let we=0;we<6;we++)if(b.mipmaps&&b.mipmaps.length>0){W.__webglFramebuffer[we]=[];for(let We=0;We<b.mipmaps.length;We++)W.__webglFramebuffer[we][We]=s.createFramebuffer()}else W.__webglFramebuffer[we]=s.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){W.__webglFramebuffer=[];for(let we=0;we<b.mipmaps.length;we++)W.__webglFramebuffer[we]=s.createFramebuffer()}else W.__webglFramebuffer=s.createFramebuffer();if(Ke)for(let we=0,We=xe.length;we<We;we++){const nt=r.get(xe[we]);nt.__webglTexture===void 0&&(nt.__webglTexture=s.createTexture(),h.memory.textures++)}if(D.samples>0&&Zt(D)===!1){W.__webglMultisampledFramebuffer=s.createFramebuffer(),W.__webglColorRenderbuffer=[],i.bindFramebuffer(s.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let we=0;we<xe.length;we++){const We=xe[we];W.__webglColorRenderbuffer[we]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,W.__webglColorRenderbuffer[we]);const nt=c.convert(We.format,We.colorSpace),be=c.convert(We.type),Ee=O(We.internalFormat,nt,be,We.colorSpace,D.isXRRenderTarget===!0),Be=G(D);s.renderbufferStorageMultisample(s.RENDERBUFFER,Be,Ee,D.width,D.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+we,s.RENDERBUFFER,W.__webglColorRenderbuffer[we])}s.bindRenderbuffer(s.RENDERBUFFER,null),D.depthBuffer&&(W.__webglDepthRenderbuffer=s.createRenderbuffer(),Xe(W.__webglDepthRenderbuffer,D,!0)),i.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ce){i.bindTexture(s.TEXTURE_CUBE_MAP,he.__webglTexture),ie(s.TEXTURE_CUBE_MAP,b);for(let we=0;we<6;we++)if(b.mipmaps&&b.mipmaps.length>0)for(let We=0;We<b.mipmaps.length;We++)Ue(W.__webglFramebuffer[we][We],D,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+we,We);else Ue(W.__webglFramebuffer[we],D,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+we,0);M(b)&&_(s.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Ke){for(let we=0,We=xe.length;we<We;we++){const nt=xe[we],be=r.get(nt);let Ee=s.TEXTURE_2D;(D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(Ee=D.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),i.bindTexture(Ee,be.__webglTexture),ie(Ee,nt),Ue(W.__webglFramebuffer,D,nt,s.COLOR_ATTACHMENT0+we,Ee,0),M(nt)&&_(Ee)}i.unbindTexture()}else{let we=s.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(we=D.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),i.bindTexture(we,he.__webglTexture),ie(we,b),b.mipmaps&&b.mipmaps.length>0)for(let We=0;We<b.mipmaps.length;We++)Ue(W.__webglFramebuffer[We],D,b,s.COLOR_ATTACHMENT0,we,We);else Ue(W.__webglFramebuffer,D,b,s.COLOR_ATTACHMENT0,we,0);M(b)&&_(we),i.unbindTexture()}D.depthBuffer&&pt(D)}function mt(D){const b=D.textures;for(let W=0,he=b.length;W<he;W++){const xe=b[W];if(M(xe)){const ce=N(D),Ke=r.get(xe).__webglTexture;i.bindTexture(ce,Ke),_(ce),i.unbindTexture()}}}const Dt=[],ot=[];function Jt(D){if(D.samples>0){if(Zt(D)===!1){const b=D.textures,W=D.width,he=D.height;let xe=s.COLOR_BUFFER_BIT;const ce=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ke=r.get(D),we=b.length>1;if(we)for(let nt=0;nt<b.length;nt++)i.bindFramebuffer(s.FRAMEBUFFER,Ke.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+nt,s.RENDERBUFFER,null),i.bindFramebuffer(s.FRAMEBUFFER,Ke.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+nt,s.TEXTURE_2D,null,0);i.bindFramebuffer(s.READ_FRAMEBUFFER,Ke.__webglMultisampledFramebuffer);const We=D.texture.mipmaps;We&&We.length>0?i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ke.__webglFramebuffer[0]):i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ke.__webglFramebuffer);for(let nt=0;nt<b.length;nt++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(xe|=s.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(xe|=s.STENCIL_BUFFER_BIT)),we){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Ke.__webglColorRenderbuffer[nt]);const be=r.get(b[nt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,be,0)}s.blitFramebuffer(0,0,W,he,0,0,W,he,xe,s.NEAREST),p===!0&&(Dt.length=0,ot.length=0,Dt.push(s.COLOR_ATTACHMENT0+nt),D.depthBuffer&&D.resolveDepthBuffer===!1&&(Dt.push(ce),ot.push(ce),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,ot)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Dt))}if(i.bindFramebuffer(s.READ_FRAMEBUFFER,null),i.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),we)for(let nt=0;nt<b.length;nt++){i.bindFramebuffer(s.FRAMEBUFFER,Ke.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+nt,s.RENDERBUFFER,Ke.__webglColorRenderbuffer[nt]);const be=r.get(b[nt]).__webglTexture;i.bindFramebuffer(s.FRAMEBUFFER,Ke.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+nt,s.TEXTURE_2D,be,0)}i.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ke.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&p){const b=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[b])}}}function G(D){return Math.min(l.maxSamples,D.samples)}function Zt(D){const b=r.get(D);return D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Et(D){const b=h.render.frame;g.get(D)!==b&&(g.set(D,b),D.update())}function Ot(D,b){const W=D.colorSpace,he=D.format,xe=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||W!==Kr&&W!==ss&&(Rt.getTransfer(W)===Ht?(he!==Ui||xe!==ri)&&st("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):At("WebGLTextures: Unsupported texture color space:",W)),b}function Ye(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(m.width=D.naturalWidth||D.width,m.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(m.width=D.displayWidth,m.height=D.displayHeight):(m.width=D.width,m.height=D.height),m}this.allocateTextureUnit=se,this.resetTextureUnits=re,this.setTexture2D=fe,this.setTexture2DArray=P,this.setTexture3D=H,this.setTextureCube=ae,this.rebindTextures=$t,this.setupRenderTarget=xt,this.updateRenderTargetMipmap=mt,this.updateMultisampleRenderTarget=Jt,this.setupDepthRenderbuffer=pt,this.setupFrameBufferTexture=Ue,this.useMultisampledRTT=Zt,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function h3(s,e){function i(r,l=ss){let c;const h=Rt.getTransfer(l);if(r===ri)return s.UNSIGNED_BYTE;if(r===Hp)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Gp)return s.UNSIGNED_SHORT_5_5_5_1;if(r===Fx)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===Ix)return s.UNSIGNED_INT_10F_11F_11F_REV;if(r===Ox)return s.BYTE;if(r===Px)return s.SHORT;if(r===ml)return s.UNSIGNED_SHORT;if(r===zp)return s.INT;if(r===qi)return s.UNSIGNED_INT;if(r===Di)return s.FLOAT;if(r===ba)return s.HALF_FLOAT;if(r===Bx)return s.ALPHA;if(r===zx)return s.RGB;if(r===Ui)return s.RGBA;if(r===Ea)return s.DEPTH_COMPONENT;if(r===Is)return s.DEPTH_STENCIL;if(r===Vp)return s.RED;if(r===kp)return s.RED_INTEGER;if(r===Zr)return s.RG;if(r===Xp)return s.RG_INTEGER;if(r===Wp)return s.RGBA_INTEGER;if(r===fu||r===du||r===hu||r===pu)if(h===Ht)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(r===fu)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===du)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===hu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===pu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(r===fu)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===du)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===hu)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===pu)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Gh||r===Vh||r===kh||r===Xh)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(r===Gh)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Vh)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===kh)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Xh)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Wh||r===qh||r===jh||r===Yh||r===Zh||r===Kh||r===Qh)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(r===Wh||r===qh)return h===Ht?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(r===jh)return h===Ht?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(r===Yh)return c.COMPRESSED_R11_EAC;if(r===Zh)return c.COMPRESSED_SIGNED_R11_EAC;if(r===Kh)return c.COMPRESSED_RG11_EAC;if(r===Qh)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===$h||r===Jh||r===ep||r===tp||r===np||r===ip||r===ap||r===sp||r===rp||r===op||r===lp||r===cp||r===up||r===fp)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(r===$h)return h===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Jh)return h===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===ep)return h===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===tp)return h===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===np)return h===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===ip)return h===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===ap)return h===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===sp)return h===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===rp)return h===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===op)return h===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===lp)return h===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===cp)return h===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===up)return h===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===fp)return h===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===dp||r===hp||r===pp)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(r===dp)return h===Ht?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===hp)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===pp)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===mp||r===gp||r===vp||r===_p)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(r===mp)return c.COMPRESSED_RED_RGTC1_EXT;if(r===gp)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===vp)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===_p)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===gl?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:i}}const p3=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,m3=`
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

}`;class g3{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const r=new eS(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,r=new ji({vertexShader:p3,fragmentShader:m3,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new Sn(new Tu(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class v3 extends Jr{constructor(e,i){super();const r=this;let l=null,c=1,h=null,d="local-floor",p=1,m=null,g=null,v=null,S=null,y=null,E=null;const R=typeof XRWebGLBinding<"u",M=new g3,_={},N=i.getContextAttributes();let O=null,L=null;const I=[],z=[],F=new Mt;let K=null;const C=new si;C.viewport=new nn;const w=new si;w.viewport=new nn;const k=[C,w],re=new T1;let se=null,pe=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ne){let ue=I[ne];return ue===void 0&&(ue=new ch,I[ne]=ue),ue.getTargetRaySpace()},this.getControllerGrip=function(ne){let ue=I[ne];return ue===void 0&&(ue=new ch,I[ne]=ue),ue.getGripSpace()},this.getHand=function(ne){let ue=I[ne];return ue===void 0&&(ue=new ch,I[ne]=ue),ue.getHandSpace()};function fe(ne){const ue=z.indexOf(ne.inputSource);if(ue===-1)return;const Ue=I[ue];Ue!==void 0&&(Ue.update(ne.inputSource,ne.frame,m||h),Ue.dispatchEvent({type:ne.type,data:ne.inputSource}))}function P(){l.removeEventListener("select",fe),l.removeEventListener("selectstart",fe),l.removeEventListener("selectend",fe),l.removeEventListener("squeeze",fe),l.removeEventListener("squeezestart",fe),l.removeEventListener("squeezeend",fe),l.removeEventListener("end",P),l.removeEventListener("inputsourceschange",H);for(let ne=0;ne<I.length;ne++){const ue=z[ne];ue!==null&&(z[ne]=null,I[ne].disconnect(ue))}se=null,pe=null,M.reset();for(const ne in _)delete _[ne];e.setRenderTarget(O),y=null,S=null,v=null,l=null,L=null,He.stop(),r.isPresenting=!1,e.setPixelRatio(K),e.setSize(F.width,F.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ne){c=ne,r.isPresenting===!0&&st("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ne){d=ne,r.isPresenting===!0&&st("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||h},this.setReferenceSpace=function(ne){m=ne},this.getBaseLayer=function(){return S!==null?S:y},this.getBinding=function(){return v===null&&R&&(v=new XRWebGLBinding(l,i)),v},this.getFrame=function(){return E},this.getSession=function(){return l},this.setSession=async function(ne){if(l=ne,l!==null){if(O=e.getRenderTarget(),l.addEventListener("select",fe),l.addEventListener("selectstart",fe),l.addEventListener("selectend",fe),l.addEventListener("squeeze",fe),l.addEventListener("squeezestart",fe),l.addEventListener("squeezeend",fe),l.addEventListener("end",P),l.addEventListener("inputsourceschange",H),N.xrCompatible!==!0&&await i.makeXRCompatible(),K=e.getPixelRatio(),e.getSize(F),R&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ue=null,Xe=null,Ge=null;N.depth&&(Ge=N.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Ue=N.stencil?Is:Ea,Xe=N.stencil?gl:qi);const pt={colorFormat:i.RGBA8,depthFormat:Ge,scaleFactor:c};v=this.getBinding(),S=v.createProjectionLayer(pt),l.updateRenderState({layers:[S]}),e.setPixelRatio(1),e.setSize(S.textureWidth,S.textureHeight,!1),L=new Wi(S.textureWidth,S.textureHeight,{format:Ui,type:ri,depthTexture:new xl(S.textureWidth,S.textureHeight,Xe,void 0,void 0,void 0,void 0,void 0,void 0,Ue),stencilBuffer:N.stencil,colorSpace:e.outputColorSpace,samples:N.antialias?4:0,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}else{const Ue={antialias:N.antialias,alpha:!0,depth:N.depth,stencil:N.stencil,framebufferScaleFactor:c};y=new XRWebGLLayer(l,i,Ue),l.updateRenderState({baseLayer:y}),e.setPixelRatio(1),e.setSize(y.framebufferWidth,y.framebufferHeight,!1),L=new Wi(y.framebufferWidth,y.framebufferHeight,{format:Ui,type:ri,colorSpace:e.outputColorSpace,stencilBuffer:N.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}L.isXRRenderTarget=!0,this.setFoveation(p),m=null,h=await l.requestReferenceSpace(d),He.setContext(l),He.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function H(ne){for(let ue=0;ue<ne.removed.length;ue++){const Ue=ne.removed[ue],Xe=z.indexOf(Ue);Xe>=0&&(z[Xe]=null,I[Xe].disconnect(Ue))}for(let ue=0;ue<ne.added.length;ue++){const Ue=ne.added[ue];let Xe=z.indexOf(Ue);if(Xe===-1){for(let pt=0;pt<I.length;pt++)if(pt>=z.length){z.push(Ue),Xe=pt;break}else if(z[pt]===null){z[pt]=Ue,Xe=pt;break}if(Xe===-1)break}const Ge=I[Xe];Ge&&Ge.connect(Ue)}}const ae=new Z,Me=new Z;function Se(ne,ue,Ue){ae.setFromMatrixPosition(ue.matrixWorld),Me.setFromMatrixPosition(Ue.matrixWorld);const Xe=ae.distanceTo(Me),Ge=ue.projectionMatrix.elements,pt=Ue.projectionMatrix.elements,$t=Ge[14]/(Ge[10]-1),xt=Ge[14]/(Ge[10]+1),mt=(Ge[9]+1)/Ge[5],Dt=(Ge[9]-1)/Ge[5],ot=(Ge[8]-1)/Ge[0],Jt=(pt[8]+1)/pt[0],G=$t*ot,Zt=$t*Jt,Et=Xe/(-ot+Jt),Ot=Et*-ot;if(ue.matrixWorld.decompose(ne.position,ne.quaternion,ne.scale),ne.translateX(Ot),ne.translateZ(Et),ne.matrixWorld.compose(ne.position,ne.quaternion,ne.scale),ne.matrixWorldInverse.copy(ne.matrixWorld).invert(),Ge[10]===-1)ne.projectionMatrix.copy(ue.projectionMatrix),ne.projectionMatrixInverse.copy(ue.projectionMatrixInverse);else{const Ye=$t+Et,D=xt+Et,b=G-Ot,W=Zt+(Xe-Ot),he=mt*xt/D*Ye,xe=Dt*xt/D*Ye;ne.projectionMatrix.makePerspective(b,W,he,xe,Ye,D),ne.projectionMatrixInverse.copy(ne.projectionMatrix).invert()}}function U(ne,ue){ue===null?ne.matrixWorld.copy(ne.matrix):ne.matrixWorld.multiplyMatrices(ue.matrixWorld,ne.matrix),ne.matrixWorldInverse.copy(ne.matrixWorld).invert()}this.updateCamera=function(ne){if(l===null)return;let ue=ne.near,Ue=ne.far;M.texture!==null&&(M.depthNear>0&&(ue=M.depthNear),M.depthFar>0&&(Ue=M.depthFar)),re.near=w.near=C.near=ue,re.far=w.far=C.far=Ue,(se!==re.near||pe!==re.far)&&(l.updateRenderState({depthNear:re.near,depthFar:re.far}),se=re.near,pe=re.far),re.layers.mask=ne.layers.mask|6,C.layers.mask=re.layers.mask&3,w.layers.mask=re.layers.mask&5;const Xe=ne.parent,Ge=re.cameras;U(re,Xe);for(let pt=0;pt<Ge.length;pt++)U(Ge[pt],Xe);Ge.length===2?Se(re,C,w):re.projectionMatrix.copy(C.projectionMatrix),ie(ne,re,Xe)};function ie(ne,ue,Ue){Ue===null?ne.matrix.copy(ue.matrixWorld):(ne.matrix.copy(Ue.matrixWorld),ne.matrix.invert(),ne.matrix.multiply(ue.matrixWorld)),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale),ne.updateMatrixWorld(!0),ne.projectionMatrix.copy(ue.projectionMatrix),ne.projectionMatrixInverse.copy(ue.projectionMatrixInverse),ne.isPerspectiveCamera&&(ne.fov=_l*2*Math.atan(1/ne.projectionMatrix.elements[5]),ne.zoom=1)}this.getCamera=function(){return re},this.getFoveation=function(){if(!(S===null&&y===null))return p},this.setFoveation=function(ne){p=ne,S!==null&&(S.fixedFoveation=ne),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=ne)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(re)},this.getCameraTexture=function(ne){return _[ne]};let ve=null;function Re(ne,ue){if(g=ue.getViewerPose(m||h),E=ue,g!==null){const Ue=g.views;y!==null&&(e.setRenderTargetFramebuffer(L,y.framebuffer),e.setRenderTarget(L));let Xe=!1;Ue.length!==re.cameras.length&&(re.cameras.length=0,Xe=!0);for(let xt=0;xt<Ue.length;xt++){const mt=Ue[xt];let Dt=null;if(y!==null)Dt=y.getViewport(mt);else{const Jt=v.getViewSubImage(S,mt);Dt=Jt.viewport,xt===0&&(e.setRenderTargetTextures(L,Jt.colorTexture,Jt.depthStencilTexture),e.setRenderTarget(L))}let ot=k[xt];ot===void 0&&(ot=new si,ot.layers.enable(xt),ot.viewport=new nn,k[xt]=ot),ot.matrix.fromArray(mt.transform.matrix),ot.matrix.decompose(ot.position,ot.quaternion,ot.scale),ot.projectionMatrix.fromArray(mt.projectionMatrix),ot.projectionMatrixInverse.copy(ot.projectionMatrix).invert(),ot.viewport.set(Dt.x,Dt.y,Dt.width,Dt.height),xt===0&&(re.matrix.copy(ot.matrix),re.matrix.decompose(re.position,re.quaternion,re.scale)),Xe===!0&&re.cameras.push(ot)}const Ge=l.enabledFeatures;if(Ge&&Ge.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&R){v=r.getBinding();const xt=v.getDepthInformation(Ue[0]);xt&&xt.isValid&&xt.texture&&M.init(xt,l.renderState)}if(Ge&&Ge.includes("camera-access")&&R){e.state.unbindTexture(),v=r.getBinding();for(let xt=0;xt<Ue.length;xt++){const mt=Ue[xt].camera;if(mt){let Dt=_[mt];Dt||(Dt=new eS,_[mt]=Dt);const ot=v.getCameraImage(mt);Dt.sourceTexture=ot}}}}for(let Ue=0;Ue<I.length;Ue++){const Xe=z[Ue],Ge=I[Ue];Xe!==null&&Ge!==void 0&&Ge.update(Xe,ue,m||h)}ve&&ve(ne,ue),ue.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:ue}),E=null}const He=new aS;He.setAnimationLoop(Re),this.setAnimationLoop=function(ne){ve=ne},this.dispose=function(){}}}const Ns=new Li,_3=new qt;function x3(s,e){function i(M,_){M.matrixAutoUpdate===!0&&M.updateMatrix(),_.value.copy(M.matrix)}function r(M,_){_.color.getRGB(M.fogColor.value,jx(s)),_.isFog?(M.fogNear.value=_.near,M.fogFar.value=_.far):_.isFogExp2&&(M.fogDensity.value=_.density)}function l(M,_,N,O,L){_.isMeshBasicMaterial||_.isMeshLambertMaterial?c(M,_):_.isMeshToonMaterial?(c(M,_),v(M,_)):_.isMeshPhongMaterial?(c(M,_),g(M,_)):_.isMeshStandardMaterial?(c(M,_),S(M,_),_.isMeshPhysicalMaterial&&y(M,_,L)):_.isMeshMatcapMaterial?(c(M,_),E(M,_)):_.isMeshDepthMaterial?c(M,_):_.isMeshDistanceMaterial?(c(M,_),R(M,_)):_.isMeshNormalMaterial?c(M,_):_.isLineBasicMaterial?(h(M,_),_.isLineDashedMaterial&&d(M,_)):_.isPointsMaterial?p(M,_,N,O):_.isSpriteMaterial?m(M,_):_.isShadowMaterial?(M.color.value.copy(_.color),M.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function c(M,_){M.opacity.value=_.opacity,_.color&&M.diffuse.value.copy(_.color),_.emissive&&M.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(M.map.value=_.map,i(_.map,M.mapTransform)),_.alphaMap&&(M.alphaMap.value=_.alphaMap,i(_.alphaMap,M.alphaMapTransform)),_.bumpMap&&(M.bumpMap.value=_.bumpMap,i(_.bumpMap,M.bumpMapTransform),M.bumpScale.value=_.bumpScale,_.side===Gn&&(M.bumpScale.value*=-1)),_.normalMap&&(M.normalMap.value=_.normalMap,i(_.normalMap,M.normalMapTransform),M.normalScale.value.copy(_.normalScale),_.side===Gn&&M.normalScale.value.negate()),_.displacementMap&&(M.displacementMap.value=_.displacementMap,i(_.displacementMap,M.displacementMapTransform),M.displacementScale.value=_.displacementScale,M.displacementBias.value=_.displacementBias),_.emissiveMap&&(M.emissiveMap.value=_.emissiveMap,i(_.emissiveMap,M.emissiveMapTransform)),_.specularMap&&(M.specularMap.value=_.specularMap,i(_.specularMap,M.specularMapTransform)),_.alphaTest>0&&(M.alphaTest.value=_.alphaTest);const N=e.get(_),O=N.envMap,L=N.envMapRotation;O&&(M.envMap.value=O,Ns.copy(L),Ns.x*=-1,Ns.y*=-1,Ns.z*=-1,O.isCubeTexture&&O.isRenderTargetTexture===!1&&(Ns.y*=-1,Ns.z*=-1),M.envMapRotation.value.setFromMatrix4(_3.makeRotationFromEuler(Ns)),M.flipEnvMap.value=O.isCubeTexture&&O.isRenderTargetTexture===!1?-1:1,M.reflectivity.value=_.reflectivity,M.ior.value=_.ior,M.refractionRatio.value=_.refractionRatio),_.lightMap&&(M.lightMap.value=_.lightMap,M.lightMapIntensity.value=_.lightMapIntensity,i(_.lightMap,M.lightMapTransform)),_.aoMap&&(M.aoMap.value=_.aoMap,M.aoMapIntensity.value=_.aoMapIntensity,i(_.aoMap,M.aoMapTransform))}function h(M,_){M.diffuse.value.copy(_.color),M.opacity.value=_.opacity,_.map&&(M.map.value=_.map,i(_.map,M.mapTransform))}function d(M,_){M.dashSize.value=_.dashSize,M.totalSize.value=_.dashSize+_.gapSize,M.scale.value=_.scale}function p(M,_,N,O){M.diffuse.value.copy(_.color),M.opacity.value=_.opacity,M.size.value=_.size*N,M.scale.value=O*.5,_.map&&(M.map.value=_.map,i(_.map,M.uvTransform)),_.alphaMap&&(M.alphaMap.value=_.alphaMap,i(_.alphaMap,M.alphaMapTransform)),_.alphaTest>0&&(M.alphaTest.value=_.alphaTest)}function m(M,_){M.diffuse.value.copy(_.color),M.opacity.value=_.opacity,M.rotation.value=_.rotation,_.map&&(M.map.value=_.map,i(_.map,M.mapTransform)),_.alphaMap&&(M.alphaMap.value=_.alphaMap,i(_.alphaMap,M.alphaMapTransform)),_.alphaTest>0&&(M.alphaTest.value=_.alphaTest)}function g(M,_){M.specular.value.copy(_.specular),M.shininess.value=Math.max(_.shininess,1e-4)}function v(M,_){_.gradientMap&&(M.gradientMap.value=_.gradientMap)}function S(M,_){M.metalness.value=_.metalness,_.metalnessMap&&(M.metalnessMap.value=_.metalnessMap,i(_.metalnessMap,M.metalnessMapTransform)),M.roughness.value=_.roughness,_.roughnessMap&&(M.roughnessMap.value=_.roughnessMap,i(_.roughnessMap,M.roughnessMapTransform)),_.envMap&&(M.envMapIntensity.value=_.envMapIntensity)}function y(M,_,N){M.ior.value=_.ior,_.sheen>0&&(M.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),M.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(M.sheenColorMap.value=_.sheenColorMap,i(_.sheenColorMap,M.sheenColorMapTransform)),_.sheenRoughnessMap&&(M.sheenRoughnessMap.value=_.sheenRoughnessMap,i(_.sheenRoughnessMap,M.sheenRoughnessMapTransform))),_.clearcoat>0&&(M.clearcoat.value=_.clearcoat,M.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(M.clearcoatMap.value=_.clearcoatMap,i(_.clearcoatMap,M.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,i(_.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(M.clearcoatNormalMap.value=_.clearcoatNormalMap,i(_.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===Gn&&M.clearcoatNormalScale.value.negate())),_.dispersion>0&&(M.dispersion.value=_.dispersion),_.iridescence>0&&(M.iridescence.value=_.iridescence,M.iridescenceIOR.value=_.iridescenceIOR,M.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(M.iridescenceMap.value=_.iridescenceMap,i(_.iridescenceMap,M.iridescenceMapTransform)),_.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=_.iridescenceThicknessMap,i(_.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),_.transmission>0&&(M.transmission.value=_.transmission,M.transmissionSamplerMap.value=N.texture,M.transmissionSamplerSize.value.set(N.width,N.height),_.transmissionMap&&(M.transmissionMap.value=_.transmissionMap,i(_.transmissionMap,M.transmissionMapTransform)),M.thickness.value=_.thickness,_.thicknessMap&&(M.thicknessMap.value=_.thicknessMap,i(_.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=_.attenuationDistance,M.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(M.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(M.anisotropyMap.value=_.anisotropyMap,i(_.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=_.specularIntensity,M.specularColor.value.copy(_.specularColor),_.specularColorMap&&(M.specularColorMap.value=_.specularColorMap,i(_.specularColorMap,M.specularColorMapTransform)),_.specularIntensityMap&&(M.specularIntensityMap.value=_.specularIntensityMap,i(_.specularIntensityMap,M.specularIntensityMapTransform))}function E(M,_){_.matcap&&(M.matcap.value=_.matcap)}function R(M,_){const N=e.get(_).light;M.referencePosition.value.setFromMatrixPosition(N.matrixWorld),M.nearDistance.value=N.shadow.camera.near,M.farDistance.value=N.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function S3(s,e,i,r){let l={},c={},h=[];const d=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function p(N,O){const L=O.program;r.uniformBlockBinding(N,L)}function m(N,O){let L=l[N.id];L===void 0&&(E(N),L=g(N),l[N.id]=L,N.addEventListener("dispose",M));const I=O.program;r.updateUBOMapping(N,I);const z=e.render.frame;c[N.id]!==z&&(S(N),c[N.id]=z)}function g(N){const O=v();N.__bindingPointIndex=O;const L=s.createBuffer(),I=N.__size,z=N.usage;return s.bindBuffer(s.UNIFORM_BUFFER,L),s.bufferData(s.UNIFORM_BUFFER,I,z),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,O,L),L}function v(){for(let N=0;N<d;N++)if(h.indexOf(N)===-1)return h.push(N),N;return At("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function S(N){const O=l[N.id],L=N.uniforms,I=N.__cache;s.bindBuffer(s.UNIFORM_BUFFER,O);for(let z=0,F=L.length;z<F;z++){const K=Array.isArray(L[z])?L[z]:[L[z]];for(let C=0,w=K.length;C<w;C++){const k=K[C];if(y(k,z,C,I)===!0){const re=k.__offset,se=Array.isArray(k.value)?k.value:[k.value];let pe=0;for(let fe=0;fe<se.length;fe++){const P=se[fe],H=R(P);typeof P=="number"||typeof P=="boolean"?(k.__data[0]=P,s.bufferSubData(s.UNIFORM_BUFFER,re+pe,k.__data)):P.isMatrix3?(k.__data[0]=P.elements[0],k.__data[1]=P.elements[1],k.__data[2]=P.elements[2],k.__data[3]=0,k.__data[4]=P.elements[3],k.__data[5]=P.elements[4],k.__data[6]=P.elements[5],k.__data[7]=0,k.__data[8]=P.elements[6],k.__data[9]=P.elements[7],k.__data[10]=P.elements[8],k.__data[11]=0):(P.toArray(k.__data,pe),pe+=H.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,re,k.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function y(N,O,L,I){const z=N.value,F=O+"_"+L;if(I[F]===void 0)return typeof z=="number"||typeof z=="boolean"?I[F]=z:I[F]=z.clone(),!0;{const K=I[F];if(typeof z=="number"||typeof z=="boolean"){if(K!==z)return I[F]=z,!0}else if(K.equals(z)===!1)return K.copy(z),!0}return!1}function E(N){const O=N.uniforms;let L=0;const I=16;for(let F=0,K=O.length;F<K;F++){const C=Array.isArray(O[F])?O[F]:[O[F]];for(let w=0,k=C.length;w<k;w++){const re=C[w],se=Array.isArray(re.value)?re.value:[re.value];for(let pe=0,fe=se.length;pe<fe;pe++){const P=se[pe],H=R(P),ae=L%I,Me=ae%H.boundary,Se=ae+Me;L+=Me,Se!==0&&I-Se<H.storage&&(L+=I-Se),re.__data=new Float32Array(H.storage/Float32Array.BYTES_PER_ELEMENT),re.__offset=L,L+=H.storage}}}const z=L%I;return z>0&&(L+=I-z),N.__size=L,N.__cache={},this}function R(N){const O={boundary:0,storage:0};return typeof N=="number"||typeof N=="boolean"?(O.boundary=4,O.storage=4):N.isVector2?(O.boundary=8,O.storage=8):N.isVector3||N.isColor?(O.boundary=16,O.storage=12):N.isVector4?(O.boundary=16,O.storage=16):N.isMatrix3?(O.boundary=48,O.storage=48):N.isMatrix4?(O.boundary=64,O.storage=64):N.isTexture?st("WebGLRenderer: Texture samplers can not be part of an uniforms group."):st("WebGLRenderer: Unsupported uniform value type.",N),O}function M(N){const O=N.target;O.removeEventListener("dispose",M);const L=h.indexOf(O.__bindingPointIndex);h.splice(L,1),s.deleteBuffer(l[O.id]),delete l[O.id],delete c[O.id]}function _(){for(const N in l)s.deleteBuffer(l[N]);h=[],l={},c={}}return{bind:p,update:m,dispose:_}}const y3=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Hi=null;function M3(){return Hi===null&&(Hi=new $x(y3,16,16,Zr,ba),Hi.name="DFG_LUT",Hi.minFilter=Fn,Hi.magFilter=Fn,Hi.wrapS=Sa,Hi.wrapT=Sa,Hi.generateMipmaps=!1,Hi.needsUpdate=!0),Hi}class b3{constructor(e={}){const{canvas:i=TE(),context:r=null,depth:l=!0,stencil:c=!1,alpha:h=!1,antialias:d=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:m=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:v=!1,reversedDepthBuffer:S=!1,outputBufferType:y=ri}=e;this.isWebGLRenderer=!0;let E;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");E=r.getContextAttributes().alpha}else E=h;const R=y,M=new Set([Wp,Xp,kp]),_=new Set([ri,qi,ml,gl,Hp,Gp]),N=new Uint32Array(4),O=new Int32Array(4);let L=null,I=null;const z=[],F=[];let K=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Xi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const C=this;let w=!1;this._outputColorSpace=ai;let k=0,re=0,se=null,pe=-1,fe=null;const P=new nn,H=new nn;let ae=null;const Me=new ht(0);let Se=0,U=i.width,ie=i.height,ve=1,Re=null,He=null;const ne=new nn(0,0,U,ie),ue=new nn(0,0,U,ie);let Ue=!1;const Xe=new $p;let Ge=!1,pt=!1;const $t=new qt,xt=new Z,mt=new nn,Dt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ot=!1;function Jt(){return se===null?ve:1}let G=r;function Zt(A,q){return i.getContext(A,q)}try{const A={alpha:!0,depth:l,stencil:c,antialias:d,premultipliedAlpha:p,preserveDrawingBuffer:m,powerPreference:g,failIfMajorPerformanceCaveat:v};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Fp}`),i.addEventListener("webglcontextlost",it,!1),i.addEventListener("webglcontextrestored",Ft,!1),i.addEventListener("webglcontextcreationerror",Tt,!1),G===null){const q="webgl2";if(G=Zt(q,A),G===null)throw Zt(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw At("WebGLRenderer: "+A.message),A}let Et,Ot,Ye,D,b,W,he,xe,ce,Ke,we,We,nt,be,Ee,Be,Fe,De,ct,X,Le,Te,Ie,ye;function _e(){Et=new M2(G),Et.init(),Te=new h3(G,Et),Ot=new h2(G,Et,e,Te),Ye=new f3(G,Et),Ot.reversedDepthBuffer&&S&&Ye.buffers.depth.setReversed(!0),D=new T2(G),b=new KR,W=new d3(G,Et,Ye,b,Ot,Te,D),he=new m2(C),xe=new y2(C),ce=new w1(G),Ie=new f2(G,ce),Ke=new b2(G,ce,D,Ie),we=new R2(G,Ke,ce,D),ct=new A2(G,Ot,W),Be=new p2(b),We=new ZR(C,he,xe,Et,Ot,Ie,Be),nt=new x3(C,b),be=new $R,Ee=new a3(Et),De=new u2(C,he,xe,Ye,we,E,p),Fe=new c3(C,we,Ot),ye=new S3(G,D,Ot,Ye),X=new d2(G,Et,D),Le=new E2(G,Et,D),D.programs=We.programs,C.capabilities=Ot,C.extensions=Et,C.properties=b,C.renderLists=be,C.shadowMap=Fe,C.state=Ye,C.info=D}_e(),R!==ri&&(K=new w2(R,i.width,i.height,l,c));const Ce=new v3(C,G);this.xr=Ce,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){const A=Et.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=Et.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return ve},this.setPixelRatio=function(A){A!==void 0&&(ve=A,this.setSize(U,ie,!1))},this.getSize=function(A){return A.set(U,ie)},this.setSize=function(A,q,oe=!0){if(Ce.isPresenting){st("WebGLRenderer: Can't change size while VR device is presenting.");return}U=A,ie=q,i.width=Math.floor(A*ve),i.height=Math.floor(q*ve),oe===!0&&(i.style.width=A+"px",i.style.height=q+"px"),K!==null&&K.setSize(i.width,i.height),this.setViewport(0,0,A,q)},this.getDrawingBufferSize=function(A){return A.set(U*ve,ie*ve).floor()},this.setDrawingBufferSize=function(A,q,oe){U=A,ie=q,ve=oe,i.width=Math.floor(A*oe),i.height=Math.floor(q*oe),this.setViewport(0,0,A,q)},this.setEffects=function(A){if(R===ri){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let q=0;q<A.length;q++)if(A[q].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}K.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(P)},this.getViewport=function(A){return A.copy(ne)},this.setViewport=function(A,q,oe,ee){A.isVector4?ne.set(A.x,A.y,A.z,A.w):ne.set(A,q,oe,ee),Ye.viewport(P.copy(ne).multiplyScalar(ve).round())},this.getScissor=function(A){return A.copy(ue)},this.setScissor=function(A,q,oe,ee){A.isVector4?ue.set(A.x,A.y,A.z,A.w):ue.set(A,q,oe,ee),Ye.scissor(H.copy(ue).multiplyScalar(ve).round())},this.getScissorTest=function(){return Ue},this.setScissorTest=function(A){Ye.setScissorTest(Ue=A)},this.setOpaqueSort=function(A){Re=A},this.setTransparentSort=function(A){He=A},this.getClearColor=function(A){return A.copy(De.getClearColor())},this.setClearColor=function(){De.setClearColor(...arguments)},this.getClearAlpha=function(){return De.getClearAlpha()},this.setClearAlpha=function(){De.setClearAlpha(...arguments)},this.clear=function(A=!0,q=!0,oe=!0){let ee=0;if(A){let Y=!1;if(se!==null){const Ne=se.texture.format;Y=M.has(Ne)}if(Y){const Ne=se.texture.type,ze=_.has(Ne),Oe=De.getClearColor(),Ve=De.getClearAlpha(),qe=Oe.r,Je=Oe.g,je=Oe.b;ze?(N[0]=qe,N[1]=Je,N[2]=je,N[3]=Ve,G.clearBufferuiv(G.COLOR,0,N)):(O[0]=qe,O[1]=Je,O[2]=je,O[3]=Ve,G.clearBufferiv(G.COLOR,0,O))}else ee|=G.COLOR_BUFFER_BIT}q&&(ee|=G.DEPTH_BUFFER_BIT),oe&&(ee|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G.clear(ee)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",it,!1),i.removeEventListener("webglcontextrestored",Ft,!1),i.removeEventListener("webglcontextcreationerror",Tt,!1),De.dispose(),be.dispose(),Ee.dispose(),b.dispose(),he.dispose(),xe.dispose(),we.dispose(),Ie.dispose(),ye.dispose(),We.dispose(),Ce.dispose(),Ce.removeEventListener("sessionstart",Vs),Ce.removeEventListener("sessionend",ro),Pi.stop()};function it(A){A.preventDefault(),i_("WebGLRenderer: Context Lost."),w=!0}function Ft(){i_("WebGLRenderer: Context Restored."),w=!1;const A=D.autoReset,q=Fe.enabled,oe=Fe.autoUpdate,ee=Fe.needsUpdate,Y=Fe.type;_e(),D.autoReset=A,Fe.enabled=q,Fe.autoUpdate=oe,Fe.needsUpdate=ee,Fe.type=Y}function Tt(A){At("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Nn(A){const q=A.target;q.removeEventListener("dispose",Nn),Si(q)}function Si(A){El(A),b.remove(A)}function El(A){const q=b.get(A).programs;q!==void 0&&(q.forEach(function(oe){We.releaseProgram(oe)}),A.isShaderMaterial&&We.releaseShaderCache(A))}this.renderBufferDirect=function(A,q,oe,ee,Y,Ne){q===null&&(q=Dt);const ze=Y.isMesh&&Y.matrixWorld.determinant()<0,Oe=cs(A,q,oe,ee,Y);Ye.setMaterial(ee,ze);let Ve=oe.index,qe=1;if(ee.wireframe===!0){if(Ve=Ke.getWireframeAttribute(oe),Ve===void 0)return;qe=2}const Je=oe.drawRange,je=oe.attributes.position;let et=Je.start*qe,Ut=(Je.start+Je.count)*qe;Ne!==null&&(et=Math.max(et,Ne.start*qe),Ut=Math.min(Ut,(Ne.start+Ne.count)*qe)),Ve!==null?(et=Math.max(et,0),Ut=Math.min(Ut,Ve.count)):je!=null&&(et=Math.max(et,0),Ut=Math.min(Ut,je.count));const Kt=Ut-et;if(Kt<0||Kt===1/0)return;Ie.setup(Y,ee,Oe,oe,Ve);let Wt,Pt=X;if(Ve!==null&&(Wt=ce.get(Ve),Pt=Le,Pt.setIndex(Wt)),Y.isMesh)ee.wireframe===!0?(Ye.setLineWidth(ee.wireframeLinewidth*Jt()),Pt.setMode(G.LINES)):Pt.setMode(G.TRIANGLES);else if(Y.isLine){let Qe=ee.linewidth;Qe===void 0&&(Qe=1),Ye.setLineWidth(Qe*Jt()),Y.isLineSegments?Pt.setMode(G.LINES):Y.isLineLoop?Pt.setMode(G.LINE_LOOP):Pt.setMode(G.LINE_STRIP)}else Y.isPoints?Pt.setMode(G.POINTS):Y.isSprite&&Pt.setMode(G.TRIANGLES);if(Y.isBatchedMesh)if(Y._multiDrawInstances!==null)vl("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Pt.renderMultiDrawInstances(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount,Y._multiDrawInstances);else if(Et.get("WEBGL_multi_draw"))Pt.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{const Qe=Y._multiDrawStarts,Nt=Y._multiDrawCounts,at=Y._multiDrawCount,Mn=Ve?ce.get(Ve).bytesPerElement:1,Zi=b.get(ee).currentProgram.getUniforms();for(let bn=0;bn<at;bn++)Zi.setValue(G,"_gl_DrawID",bn),Pt.render(Qe[bn]/Mn,Nt[bn])}else if(Y.isInstancedMesh)Pt.renderInstances(et,Kt,Y.count);else if(oe.isInstancedBufferGeometry){const Qe=oe._maxInstanceCount!==void 0?oe._maxInstanceCount:1/0,Nt=Math.min(oe.instanceCount,Qe);Pt.renderInstances(et,Kt,Nt)}else Pt.render(et,Kt)};function ao(A,q,oe){A.transparent===!0&&A.side===_a&&A.forceSinglePass===!1?(A.side=Gn,A.needsUpdate=!0,Xs(A,q,oe),A.side=os,A.needsUpdate=!0,Xs(A,q,oe),A.side=_a):Xs(A,q,oe)}this.compile=function(A,q,oe=null){oe===null&&(oe=A),I=Ee.get(oe),I.init(q),F.push(I),oe.traverseVisible(function(Y){Y.isLight&&Y.layers.test(q.layers)&&(I.pushLight(Y),Y.castShadow&&I.pushShadow(Y))}),A!==oe&&A.traverseVisible(function(Y){Y.isLight&&Y.layers.test(q.layers)&&(I.pushLight(Y),Y.castShadow&&I.pushShadow(Y))}),I.setupLights();const ee=new Set;return A.traverse(function(Y){if(!(Y.isMesh||Y.isPoints||Y.isLine||Y.isSprite))return;const Ne=Y.material;if(Ne)if(Array.isArray(Ne))for(let ze=0;ze<Ne.length;ze++){const Oe=Ne[ze];ao(Oe,oe,Y),ee.add(Oe)}else ao(Ne,oe,Y),ee.add(Ne)}),I=F.pop(),ee},this.compileAsync=function(A,q,oe=null){const ee=this.compile(A,q,oe);return new Promise(Y=>{function Ne(){if(ee.forEach(function(ze){b.get(ze).currentProgram.isReady()&&ee.delete(ze)}),ee.size===0){Y(A);return}setTimeout(Ne,10)}Et.get("KHR_parallel_shader_compile")!==null?Ne():setTimeout(Ne,10)})};let Gs=null;function so(A){Gs&&Gs(A)}function Vs(){Pi.stop()}function ro(){Pi.start()}const Pi=new aS;Pi.setAnimationLoop(so),typeof self<"u"&&Pi.setContext(self),this.setAnimationLoop=function(A){Gs=A,Ce.setAnimationLoop(A),A===null?Pi.stop():Pi.start()},Ce.addEventListener("sessionstart",Vs),Ce.addEventListener("sessionend",ro),this.render=function(A,q){if(q!==void 0&&q.isCamera!==!0){At("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;const oe=Ce.enabled===!0&&Ce.isPresenting===!0,ee=K!==null&&(se===null||oe)&&K.begin(C,se);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),Ce.enabled===!0&&Ce.isPresenting===!0&&(K===null||K.isCompositing()===!1)&&(Ce.cameraAutoUpdate===!0&&Ce.updateCamera(q),q=Ce.getCamera()),A.isScene===!0&&A.onBeforeRender(C,A,q,se),I=Ee.get(A,F.length),I.init(q),F.push(I),$t.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),Xe.setFromProjectionMatrix($t,Vi,q.reversedDepth),pt=this.localClippingEnabled,Ge=Be.init(this.clippingPlanes,pt),L=be.get(A,z.length),L.init(),z.push(L),Ce.enabled===!0&&Ce.isPresenting===!0){const ze=C.xr.getDepthSensingMesh();ze!==null&&li(ze,q,-1/0,C.sortObjects)}li(A,q,0,C.sortObjects),L.finish(),C.sortObjects===!0&&L.sort(Re,He),ot=Ce.enabled===!1||Ce.isPresenting===!1||Ce.hasDepthSensing()===!1,ot&&De.addToRenderList(L,A),this.info.render.frame++,Ge===!0&&Be.beginShadows();const Y=I.state.shadowsArray;if(Fe.render(Y,A,q),Ge===!0&&Be.endShadows(),this.info.autoReset===!0&&this.info.reset(),(ee&&K.hasRenderPass())===!1){const ze=L.opaque,Oe=L.transmissive;if(I.setupLights(),q.isArrayCamera){const Ve=q.cameras;if(Oe.length>0)for(let qe=0,Je=Ve.length;qe<Je;qe++){const je=Ve[qe];yn(ze,Oe,A,je)}ot&&De.render(A);for(let qe=0,Je=Ve.length;qe<Je;qe++){const je=Ve[qe];ln(L,A,je,je.viewport)}}else Oe.length>0&&yn(ze,Oe,A,q),ot&&De.render(A),ln(L,A,q)}se!==null&&re===0&&(W.updateMultisampleRenderTarget(se),W.updateRenderTargetMipmap(se)),ee&&K.end(C),A.isScene===!0&&A.onAfterRender(C,A,q),Ie.resetDefaultState(),pe=-1,fe=null,F.pop(),F.length>0?(I=F[F.length-1],Ge===!0&&Be.setGlobalState(C.clippingPlanes,I.state.camera)):I=null,z.pop(),z.length>0?L=z[z.length-1]:L=null};function li(A,q,oe,ee){if(A.visible===!1)return;if(A.layers.test(q.layers)){if(A.isGroup)oe=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(q);else if(A.isLight)I.pushLight(A),A.castShadow&&I.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Xe.intersectsSprite(A)){ee&&mt.setFromMatrixPosition(A.matrixWorld).applyMatrix4($t);const ze=we.update(A),Oe=A.material;Oe.visible&&L.push(A,ze,Oe,oe,mt.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Xe.intersectsObject(A))){const ze=we.update(A),Oe=A.material;if(ee&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),mt.copy(A.boundingSphere.center)):(ze.boundingSphere===null&&ze.computeBoundingSphere(),mt.copy(ze.boundingSphere.center)),mt.applyMatrix4(A.matrixWorld).applyMatrix4($t)),Array.isArray(Oe)){const Ve=ze.groups;for(let qe=0,Je=Ve.length;qe<Je;qe++){const je=Ve[qe],et=Oe[je.materialIndex];et&&et.visible&&L.push(A,ze,et,oe,mt.z,je)}}else Oe.visible&&L.push(A,ze,Oe,oe,mt.z,null)}}const Ne=A.children;for(let ze=0,Oe=Ne.length;ze<Oe;ze++)li(Ne[ze],q,oe,ee)}function ln(A,q,oe,ee){const{opaque:Y,transmissive:Ne,transparent:ze}=A;I.setupLightsView(oe),Ge===!0&&Be.setGlobalState(C.clippingPlanes,oe),ee&&Ye.viewport(P.copy(ee)),Y.length>0&&yi(Y,q,oe),Ne.length>0&&yi(Ne,q,oe),ze.length>0&&yi(ze,q,oe),Ye.buffers.depth.setTest(!0),Ye.buffers.depth.setMask(!0),Ye.buffers.color.setMask(!0),Ye.setPolygonOffset(!1)}function yn(A,q,oe,ee){if((oe.isScene===!0?oe.overrideMaterial:null)!==null)return;if(I.state.transmissionRenderTarget[ee.id]===void 0){const et=Et.has("EXT_color_buffer_half_float")||Et.has("EXT_color_buffer_float");I.state.transmissionRenderTarget[ee.id]=new Wi(1,1,{generateMipmaps:!0,type:et?ba:ri,minFilter:Fs,samples:Ot.samples,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Rt.workingColorSpace})}const Ne=I.state.transmissionRenderTarget[ee.id],ze=ee.viewport||P;Ne.setSize(ze.z*C.transmissionResolutionScale,ze.w*C.transmissionResolutionScale);const Oe=C.getRenderTarget(),Ve=C.getActiveCubeFace(),qe=C.getActiveMipmapLevel();C.setRenderTarget(Ne),C.getClearColor(Me),Se=C.getClearAlpha(),Se<1&&C.setClearColor(16777215,.5),C.clear(),ot&&De.render(oe);const Je=C.toneMapping;C.toneMapping=Xi;const je=ee.viewport;if(ee.viewport!==void 0&&(ee.viewport=void 0),I.setupLightsView(ee),Ge===!0&&Be.setGlobalState(C.clippingPlanes,ee),yi(A,oe,ee),W.updateMultisampleRenderTarget(Ne),W.updateRenderTargetMipmap(Ne),Et.has("WEBGL_multisampled_render_to_texture")===!1){let et=!1;for(let Ut=0,Kt=q.length;Ut<Kt;Ut++){const Wt=q[Ut],{object:Pt,geometry:Qe,material:Nt,group:at}=Wt;if(Nt.side===_a&&Pt.layers.test(ee.layers)){const Mn=Nt.side;Nt.side=Gn,Nt.needsUpdate=!0,ks(Pt,oe,ee,Qe,Nt,at),Nt.side=Mn,Nt.needsUpdate=!0,et=!0}}et===!0&&(W.updateMultisampleRenderTarget(Ne),W.updateRenderTargetMipmap(Ne))}C.setRenderTarget(Oe,Ve,qe),C.setClearColor(Me,Se),je!==void 0&&(ee.viewport=je),C.toneMapping=Je}function yi(A,q,oe){const ee=q.isScene===!0?q.overrideMaterial:null;for(let Y=0,Ne=A.length;Y<Ne;Y++){const ze=A[Y],{object:Oe,geometry:Ve,group:qe}=ze;let Je=ze.material;Je.allowOverride===!0&&ee!==null&&(Je=ee),Oe.layers.test(oe.layers)&&ks(Oe,q,oe,Ve,Je,qe)}}function ks(A,q,oe,ee,Y,Ne){A.onBeforeRender(C,q,oe,ee,Y,Ne),A.modelViewMatrix.multiplyMatrices(oe.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),Y.onBeforeRender(C,q,oe,ee,A,Ne),Y.transparent===!0&&Y.side===_a&&Y.forceSinglePass===!1?(Y.side=Gn,Y.needsUpdate=!0,C.renderBufferDirect(oe,q,ee,Y,A,Ne),Y.side=os,Y.needsUpdate=!0,C.renderBufferDirect(oe,q,ee,Y,A,Ne),Y.side=_a):C.renderBufferDirect(oe,q,ee,Y,A,Ne),A.onAfterRender(C,q,oe,ee,Y,Ne)}function Xs(A,q,oe){q.isScene!==!0&&(q=Dt);const ee=b.get(A),Y=I.state.lights,Ne=I.state.shadowsArray,ze=Y.state.version,Oe=We.getParameters(A,Y.state,Ne,q,oe),Ve=We.getProgramCacheKey(Oe);let qe=ee.programs;ee.environment=A.isMeshStandardMaterial?q.environment:null,ee.fog=q.fog,ee.envMap=(A.isMeshStandardMaterial?xe:he).get(A.envMap||ee.environment),ee.envMapRotation=ee.environment!==null&&A.envMap===null?q.environmentRotation:A.envMapRotation,qe===void 0&&(A.addEventListener("dispose",Nn),qe=new Map,ee.programs=qe);let Je=qe.get(Ve);if(Je!==void 0){if(ee.currentProgram===Je&&ee.lightsStateVersion===ze)return oo(A,Oe),Je}else Oe.uniforms=We.getUniforms(A),A.onBeforeCompile(Oe,C),Je=We.acquireProgram(Oe,Ve),qe.set(Ve,Je),ee.uniforms=Oe.uniforms;const je=ee.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(je.clippingPlanes=Be.uniform),oo(A,Oe),ee.needsLights=Ta(A),ee.lightsStateVersion=ze,ee.needsLights&&(je.ambientLightColor.value=Y.state.ambient,je.lightProbe.value=Y.state.probe,je.directionalLights.value=Y.state.directional,je.directionalLightShadows.value=Y.state.directionalShadow,je.spotLights.value=Y.state.spot,je.spotLightShadows.value=Y.state.spotShadow,je.rectAreaLights.value=Y.state.rectArea,je.ltc_1.value=Y.state.rectAreaLTC1,je.ltc_2.value=Y.state.rectAreaLTC2,je.pointLights.value=Y.state.point,je.pointLightShadows.value=Y.state.pointShadow,je.hemisphereLights.value=Y.state.hemi,je.directionalShadowMap.value=Y.state.directionalShadowMap,je.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,je.spotShadowMap.value=Y.state.spotShadowMap,je.spotLightMatrix.value=Y.state.spotLightMatrix,je.spotLightMap.value=Y.state.spotLightMap,je.pointShadowMap.value=Y.state.pointShadowMap,je.pointShadowMatrix.value=Y.state.pointShadowMatrix),ee.currentProgram=Je,ee.uniformsList=null,Je}function Tl(A){if(A.uniformsList===null){const q=A.currentProgram.getUniforms();A.uniformsList=mu.seqWithValue(q.seq,A.uniforms)}return A.uniformsList}function oo(A,q){const oe=b.get(A);oe.outputColorSpace=q.outputColorSpace,oe.batching=q.batching,oe.batchingColor=q.batchingColor,oe.instancing=q.instancing,oe.instancingColor=q.instancingColor,oe.instancingMorph=q.instancingMorph,oe.skinning=q.skinning,oe.morphTargets=q.morphTargets,oe.morphNormals=q.morphNormals,oe.morphColors=q.morphColors,oe.morphTargetsCount=q.morphTargetsCount,oe.numClippingPlanes=q.numClippingPlanes,oe.numIntersection=q.numClipIntersection,oe.vertexAlphas=q.vertexAlphas,oe.vertexTangents=q.vertexTangents,oe.toneMapping=q.toneMapping}function cs(A,q,oe,ee,Y){q.isScene!==!0&&(q=Dt),W.resetTextureUnits();const Ne=q.fog,ze=ee.isMeshStandardMaterial?q.environment:null,Oe=se===null?C.outputColorSpace:se.isXRRenderTarget===!0?se.texture.colorSpace:Kr,Ve=(ee.isMeshStandardMaterial?xe:he).get(ee.envMap||ze),qe=ee.vertexColors===!0&&!!oe.attributes.color&&oe.attributes.color.itemSize===4,Je=!!oe.attributes.tangent&&(!!ee.normalMap||ee.anisotropy>0),je=!!oe.morphAttributes.position,et=!!oe.morphAttributes.normal,Ut=!!oe.morphAttributes.color;let Kt=Xi;ee.toneMapped&&(se===null||se.isXRRenderTarget===!0)&&(Kt=C.toneMapping);const Wt=oe.morphAttributes.position||oe.morphAttributes.normal||oe.morphAttributes.color,Pt=Wt!==void 0?Wt.length:0,Qe=b.get(ee),Nt=I.state.lights;if(Ge===!0&&(pt===!0||A!==fe)){const Tn=A===fe&&ee.id===pe;Be.setState(ee,A,Tn)}let at=!1;ee.version===Qe.__version?(Qe.needsLights&&Qe.lightsStateVersion!==Nt.state.version||Qe.outputColorSpace!==Oe||Y.isBatchedMesh&&Qe.batching===!1||!Y.isBatchedMesh&&Qe.batching===!0||Y.isBatchedMesh&&Qe.batchingColor===!0&&Y.colorTexture===null||Y.isBatchedMesh&&Qe.batchingColor===!1&&Y.colorTexture!==null||Y.isInstancedMesh&&Qe.instancing===!1||!Y.isInstancedMesh&&Qe.instancing===!0||Y.isSkinnedMesh&&Qe.skinning===!1||!Y.isSkinnedMesh&&Qe.skinning===!0||Y.isInstancedMesh&&Qe.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&Qe.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&Qe.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&Qe.instancingMorph===!1&&Y.morphTexture!==null||Qe.envMap!==Ve||ee.fog===!0&&Qe.fog!==Ne||Qe.numClippingPlanes!==void 0&&(Qe.numClippingPlanes!==Be.numPlanes||Qe.numIntersection!==Be.numIntersection)||Qe.vertexAlphas!==qe||Qe.vertexTangents!==Je||Qe.morphTargets!==je||Qe.morphNormals!==et||Qe.morphColors!==Ut||Qe.toneMapping!==Kt||Qe.morphTargetsCount!==Pt)&&(at=!0):(at=!0,Qe.__version=ee.version);let Mn=Qe.currentProgram;at===!0&&(Mn=Xs(ee,q,Y));let Zi=!1,bn=!1,ci=!1;const It=Mn.getUniforms(),En=Qe.uniforms;if(Ye.useProgram(Mn.program)&&(Zi=!0,bn=!0,ci=!0),ee.id!==pe&&(pe=ee.id,bn=!0),Zi||fe!==A){Ye.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),It.setValue(G,"projectionMatrix",A.projectionMatrix),It.setValue(G,"viewMatrix",A.matrixWorldInverse);const An=It.map.cameraPosition;An!==void 0&&An.setValue(G,xt.setFromMatrixPosition(A.matrixWorld)),Ot.logarithmicDepthBuffer&&It.setValue(G,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(ee.isMeshPhongMaterial||ee.isMeshToonMaterial||ee.isMeshLambertMaterial||ee.isMeshBasicMaterial||ee.isMeshStandardMaterial||ee.isShaderMaterial)&&It.setValue(G,"isOrthographic",A.isOrthographicCamera===!0),fe!==A&&(fe=A,bn=!0,ci=!0)}if(Qe.needsLights&&(Nt.state.directionalShadowMap.length>0&&It.setValue(G,"directionalShadowMap",Nt.state.directionalShadowMap,W),Nt.state.spotShadowMap.length>0&&It.setValue(G,"spotShadowMap",Nt.state.spotShadowMap,W),Nt.state.pointShadowMap.length>0&&It.setValue(G,"pointShadowMap",Nt.state.pointShadowMap,W)),Y.isSkinnedMesh){It.setOptional(G,Y,"bindMatrix"),It.setOptional(G,Y,"bindMatrixInverse");const Tn=Y.skeleton;Tn&&(Tn.boneTexture===null&&Tn.computeBoneTexture(),It.setValue(G,"boneTexture",Tn.boneTexture,W))}Y.isBatchedMesh&&(It.setOptional(G,Y,"batchingTexture"),It.setValue(G,"batchingTexture",Y._matricesTexture,W),It.setOptional(G,Y,"batchingIdTexture"),It.setValue(G,"batchingIdTexture",Y._indirectTexture,W),It.setOptional(G,Y,"batchingColorTexture"),Y._colorsTexture!==null&&It.setValue(G,"batchingColorTexture",Y._colorsTexture,W));const pn=oe.morphAttributes;if((pn.position!==void 0||pn.normal!==void 0||pn.color!==void 0)&&ct.update(Y,oe,Mn),(bn||Qe.receiveShadow!==Y.receiveShadow)&&(Qe.receiveShadow=Y.receiveShadow,It.setValue(G,"receiveShadow",Y.receiveShadow)),ee.isMeshGouraudMaterial&&ee.envMap!==null&&(En.envMap.value=Ve,En.flipEnvMap.value=Ve.isCubeTexture&&Ve.isRenderTargetTexture===!1?-1:1),ee.isMeshStandardMaterial&&ee.envMap===null&&q.environment!==null&&(En.envMapIntensity.value=q.environmentIntensity),En.dfgLUT!==void 0&&(En.dfgLUT.value=M3()),bn&&(It.setValue(G,"toneMappingExposure",C.toneMappingExposure),Qe.needsLights&&lo(En,ci),Ne&&ee.fog===!0&&nt.refreshFogUniforms(En,Ne),nt.refreshMaterialUniforms(En,ee,ve,ie,I.state.transmissionRenderTarget[A.id]),mu.upload(G,Tl(Qe),En,W)),ee.isShaderMaterial&&ee.uniformsNeedUpdate===!0&&(mu.upload(G,Tl(Qe),En,W),ee.uniformsNeedUpdate=!1),ee.isSpriteMaterial&&It.setValue(G,"center",Y.center),It.setValue(G,"modelViewMatrix",Y.modelViewMatrix),It.setValue(G,"normalMatrix",Y.normalMatrix),It.setValue(G,"modelMatrix",Y.matrixWorld),ee.isShaderMaterial||ee.isRawShaderMaterial){const Tn=ee.uniformsGroups;for(let An=0,Ws=Tn.length;An<Ws;An++){const Mi=Tn[An];ye.update(Mi,Mn),ye.bind(Mi,Mn)}}return Mn}function lo(A,q){A.ambientLightColor.needsUpdate=q,A.lightProbe.needsUpdate=q,A.directionalLights.needsUpdate=q,A.directionalLightShadows.needsUpdate=q,A.pointLights.needsUpdate=q,A.pointLightShadows.needsUpdate=q,A.spotLights.needsUpdate=q,A.spotLightShadows.needsUpdate=q,A.rectAreaLights.needsUpdate=q,A.hemisphereLights.needsUpdate=q}function Ta(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return k},this.getActiveMipmapLevel=function(){return re},this.getRenderTarget=function(){return se},this.setRenderTargetTextures=function(A,q,oe){const ee=b.get(A);ee.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,ee.__autoAllocateDepthBuffer===!1&&(ee.__useRenderToTexture=!1),b.get(A.texture).__webglTexture=q,b.get(A.depthTexture).__webglTexture=ee.__autoAllocateDepthBuffer?void 0:oe,ee.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,q){const oe=b.get(A);oe.__webglFramebuffer=q,oe.__useDefaultFramebuffer=q===void 0};const Aa=G.createFramebuffer();this.setRenderTarget=function(A,q=0,oe=0){se=A,k=q,re=oe;let ee=null,Y=!1,Ne=!1;if(A){const Oe=b.get(A);if(Oe.__useDefaultFramebuffer!==void 0){Ye.bindFramebuffer(G.FRAMEBUFFER,Oe.__webglFramebuffer),P.copy(A.viewport),H.copy(A.scissor),ae=A.scissorTest,Ye.viewport(P),Ye.scissor(H),Ye.setScissorTest(ae),pe=-1;return}else if(Oe.__webglFramebuffer===void 0)W.setupRenderTarget(A);else if(Oe.__hasExternalTextures)W.rebindTextures(A,b.get(A.texture).__webglTexture,b.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Je=A.depthTexture;if(Oe.__boundDepthTexture!==Je){if(Je!==null&&b.has(Je)&&(A.width!==Je.image.width||A.height!==Je.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");W.setupDepthRenderbuffer(A)}}const Ve=A.texture;(Ve.isData3DTexture||Ve.isDataArrayTexture||Ve.isCompressedArrayTexture)&&(Ne=!0);const qe=b.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(qe[q])?ee=qe[q][oe]:ee=qe[q],Y=!0):A.samples>0&&W.useMultisampledRTT(A)===!1?ee=b.get(A).__webglMultisampledFramebuffer:Array.isArray(qe)?ee=qe[oe]:ee=qe,P.copy(A.viewport),H.copy(A.scissor),ae=A.scissorTest}else P.copy(ne).multiplyScalar(ve).floor(),H.copy(ue).multiplyScalar(ve).floor(),ae=Ue;if(oe!==0&&(ee=Aa),Ye.bindFramebuffer(G.FRAMEBUFFER,ee)&&Ye.drawBuffers(A,ee),Ye.viewport(P),Ye.scissor(H),Ye.setScissorTest(ae),Y){const Oe=b.get(A.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+q,Oe.__webglTexture,oe)}else if(Ne){const Oe=q;for(let Ve=0;Ve<A.textures.length;Ve++){const qe=b.get(A.textures[Ve]);G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0+Ve,qe.__webglTexture,oe,Oe)}}else if(A!==null&&oe!==0){const Oe=b.get(A.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Oe.__webglTexture,oe)}pe=-1},this.readRenderTargetPixels=function(A,q,oe,ee,Y,Ne,ze,Oe=0){if(!(A&&A.isWebGLRenderTarget)){At("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ve=b.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&ze!==void 0&&(Ve=Ve[ze]),Ve){Ye.bindFramebuffer(G.FRAMEBUFFER,Ve);try{const qe=A.textures[Oe],Je=qe.format,je=qe.type;if(!Ot.textureFormatReadable(Je)){At("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ot.textureTypeReadable(je)){At("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=A.width-ee&&oe>=0&&oe<=A.height-Y&&(A.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+Oe),G.readPixels(q,oe,ee,Y,Te.convert(Je),Te.convert(je),Ne))}finally{const qe=se!==null?b.get(se).__webglFramebuffer:null;Ye.bindFramebuffer(G.FRAMEBUFFER,qe)}}},this.readRenderTargetPixelsAsync=async function(A,q,oe,ee,Y,Ne,ze,Oe=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ve=b.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&ze!==void 0&&(Ve=Ve[ze]),Ve)if(q>=0&&q<=A.width-ee&&oe>=0&&oe<=A.height-Y){Ye.bindFramebuffer(G.FRAMEBUFFER,Ve);const qe=A.textures[Oe],Je=qe.format,je=qe.type;if(!Ot.textureFormatReadable(Je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ot.textureTypeReadable(je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const et=G.createBuffer();G.bindBuffer(G.PIXEL_PACK_BUFFER,et),G.bufferData(G.PIXEL_PACK_BUFFER,Ne.byteLength,G.STREAM_READ),A.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+Oe),G.readPixels(q,oe,ee,Y,Te.convert(Je),Te.convert(je),0);const Ut=se!==null?b.get(se).__webglFramebuffer:null;Ye.bindFramebuffer(G.FRAMEBUFFER,Ut);const Kt=G.fenceSync(G.SYNC_GPU_COMMANDS_COMPLETE,0);return G.flush(),await AE(G,Kt,4),G.bindBuffer(G.PIXEL_PACK_BUFFER,et),G.getBufferSubData(G.PIXEL_PACK_BUFFER,0,Ne),G.deleteBuffer(et),G.deleteSync(Kt),Ne}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,q=null,oe=0){const ee=Math.pow(2,-oe),Y=Math.floor(A.image.width*ee),Ne=Math.floor(A.image.height*ee),ze=q!==null?q.x:0,Oe=q!==null?q.y:0;W.setTexture2D(A,0),G.copyTexSubImage2D(G.TEXTURE_2D,oe,0,0,ze,Oe,Y,Ne),Ye.unbindTexture()};const us=G.createFramebuffer(),Ra=G.createFramebuffer();this.copyTextureToTexture=function(A,q,oe=null,ee=null,Y=0,Ne=null){Ne===null&&(Y!==0?(vl("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Ne=Y,Y=0):Ne=0);let ze,Oe,Ve,qe,Je,je,et,Ut,Kt;const Wt=A.isCompressedTexture?A.mipmaps[Ne]:A.image;if(oe!==null)ze=oe.max.x-oe.min.x,Oe=oe.max.y-oe.min.y,Ve=oe.isBox3?oe.max.z-oe.min.z:1,qe=oe.min.x,Je=oe.min.y,je=oe.isBox3?oe.min.z:0;else{const pn=Math.pow(2,-Y);ze=Math.floor(Wt.width*pn),Oe=Math.floor(Wt.height*pn),A.isDataArrayTexture?Ve=Wt.depth:A.isData3DTexture?Ve=Math.floor(Wt.depth*pn):Ve=1,qe=0,Je=0,je=0}ee!==null?(et=ee.x,Ut=ee.y,Kt=ee.z):(et=0,Ut=0,Kt=0);const Pt=Te.convert(q.format),Qe=Te.convert(q.type);let Nt;q.isData3DTexture?(W.setTexture3D(q,0),Nt=G.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(W.setTexture2DArray(q,0),Nt=G.TEXTURE_2D_ARRAY):(W.setTexture2D(q,0),Nt=G.TEXTURE_2D),G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,q.flipY),G.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),G.pixelStorei(G.UNPACK_ALIGNMENT,q.unpackAlignment);const at=G.getParameter(G.UNPACK_ROW_LENGTH),Mn=G.getParameter(G.UNPACK_IMAGE_HEIGHT),Zi=G.getParameter(G.UNPACK_SKIP_PIXELS),bn=G.getParameter(G.UNPACK_SKIP_ROWS),ci=G.getParameter(G.UNPACK_SKIP_IMAGES);G.pixelStorei(G.UNPACK_ROW_LENGTH,Wt.width),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,Wt.height),G.pixelStorei(G.UNPACK_SKIP_PIXELS,qe),G.pixelStorei(G.UNPACK_SKIP_ROWS,Je),G.pixelStorei(G.UNPACK_SKIP_IMAGES,je);const It=A.isDataArrayTexture||A.isData3DTexture,En=q.isDataArrayTexture||q.isData3DTexture;if(A.isDepthTexture){const pn=b.get(A),Tn=b.get(q),An=b.get(pn.__renderTarget),Ws=b.get(Tn.__renderTarget);Ye.bindFramebuffer(G.READ_FRAMEBUFFER,An.__webglFramebuffer),Ye.bindFramebuffer(G.DRAW_FRAMEBUFFER,Ws.__webglFramebuffer);for(let Mi=0;Mi<Ve;Mi++)It&&(G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,b.get(A).__webglTexture,Y,je+Mi),G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,b.get(q).__webglTexture,Ne,Kt+Mi)),G.blitFramebuffer(qe,Je,ze,Oe,et,Ut,ze,Oe,G.DEPTH_BUFFER_BIT,G.NEAREST);Ye.bindFramebuffer(G.READ_FRAMEBUFFER,null),Ye.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else if(Y!==0||A.isRenderTargetTexture||b.has(A)){const pn=b.get(A),Tn=b.get(q);Ye.bindFramebuffer(G.READ_FRAMEBUFFER,us),Ye.bindFramebuffer(G.DRAW_FRAMEBUFFER,Ra);for(let An=0;An<Ve;An++)It?G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,pn.__webglTexture,Y,je+An):G.framebufferTexture2D(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,pn.__webglTexture,Y),En?G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Tn.__webglTexture,Ne,Kt+An):G.framebufferTexture2D(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Tn.__webglTexture,Ne),Y!==0?G.blitFramebuffer(qe,Je,ze,Oe,et,Ut,ze,Oe,G.COLOR_BUFFER_BIT,G.NEAREST):En?G.copyTexSubImage3D(Nt,Ne,et,Ut,Kt+An,qe,Je,ze,Oe):G.copyTexSubImage2D(Nt,Ne,et,Ut,qe,Je,ze,Oe);Ye.bindFramebuffer(G.READ_FRAMEBUFFER,null),Ye.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else En?A.isDataTexture||A.isData3DTexture?G.texSubImage3D(Nt,Ne,et,Ut,Kt,ze,Oe,Ve,Pt,Qe,Wt.data):q.isCompressedArrayTexture?G.compressedTexSubImage3D(Nt,Ne,et,Ut,Kt,ze,Oe,Ve,Pt,Wt.data):G.texSubImage3D(Nt,Ne,et,Ut,Kt,ze,Oe,Ve,Pt,Qe,Wt):A.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,Ne,et,Ut,ze,Oe,Pt,Qe,Wt.data):A.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,Ne,et,Ut,Wt.width,Wt.height,Pt,Wt.data):G.texSubImage2D(G.TEXTURE_2D,Ne,et,Ut,ze,Oe,Pt,Qe,Wt);G.pixelStorei(G.UNPACK_ROW_LENGTH,at),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,Mn),G.pixelStorei(G.UNPACK_SKIP_PIXELS,Zi),G.pixelStorei(G.UNPACK_SKIP_ROWS,bn),G.pixelStorei(G.UNPACK_SKIP_IMAGES,ci),Ne===0&&q.generateMipmaps&&G.generateMipmap(Nt),Ye.unbindTexture()},this.initRenderTarget=function(A){b.get(A).__webglFramebuffer===void 0&&W.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?W.setTextureCube(A,0):A.isData3DTexture?W.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?W.setTexture2DArray(A,0):W.setTexture2D(A,0),Ye.unbindTexture()},this.resetState=function(){k=0,re=0,se=null,Ye.reset(),Ie.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Vi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=Rt._getDrawingBufferColorSpace(e),i.unpackColorSpace=Rt._getUnpackColorSpace()}}class E3 extends Qx{constructor(){super(),this.name="RoomEnvironment";const e=new no;e.deleteAttribute("uv");const i=new Sp({side:Gn}),r=new Sp,l=new nS(16777215,900,28,2);l.position.set(.418,16.199,.3),this.add(l);const c=new Sn(e,i);c.position.set(-.757,13.219,.717),c.scale.set(31.713,28.305,28.591),this.add(c);const h=new Jx(e,r,6),d=new In;d.position.set(-10.906,2.009,1.846),d.rotation.set(0,-.195,0),d.scale.set(2.328,7.905,4.651),d.updateMatrix(),h.setMatrixAt(0,d.matrix),d.position.set(-5.607,-.754,-.758),d.rotation.set(0,.994,0),d.scale.set(1.97,1.534,3.955),d.updateMatrix(),h.setMatrixAt(1,d.matrix),d.position.set(6.167,.857,7.803),d.rotation.set(0,.561,0),d.scale.set(3.927,6.285,3.687),d.updateMatrix(),h.setMatrixAt(2,d.matrix),d.position.set(-2.017,.018,6.124),d.rotation.set(0,.333,0),d.scale.set(2.002,4.566,2.064),d.updateMatrix(),h.setMatrixAt(3,d.matrix),d.position.set(2.291,-.756,-2.621),d.rotation.set(0,-.286,0),d.scale.set(1.546,1.552,1.496),d.updateMatrix(),h.setMatrixAt(4,d.matrix),d.position.set(-2.193,-.369,-5.547),d.rotation.set(0,.516,0),d.scale.set(3.875,3.487,2.986),d.updateMatrix(),h.setMatrixAt(5,d.matrix),this.add(h);const p=new Sn(e,zr(50));p.position.set(-16.116,14.37,8.208),p.scale.set(.1,2.428,2.739),this.add(p);const m=new Sn(e,zr(50));m.position.set(-16.109,18.021,-8.207),m.scale.set(.1,2.425,2.751),this.add(m);const g=new Sn(e,zr(17));g.position.set(14.904,12.198,-1.832),g.scale.set(.15,4.265,6.331),this.add(g);const v=new Sn(e,zr(43));v.position.set(-.462,8.89,14.52),v.scale.set(4.38,5.441,.088),this.add(v);const S=new Sn(e,zr(20));S.position.set(3.235,11.486,-12.541),S.scale.set(2.5,2,.1),this.add(S);const y=new Sn(e,zr(100));y.position.set(0,20,0),y.scale.set(1,.1,1),this.add(y)}dispose(){const e=new Set;this.traverse(i=>{i.isMesh&&(e.add(i.geometry),e.add(i.material))});for(const i of e)i.dispose()}}function zr(s){return new x1({color:0,emissive:16777215,emissiveIntensity:s})}class T3{#e;canvas;camera;cameraMinAspect;cameraMaxAspect;cameraFov;maxPixelRatio;minPixelRatio;scene;renderer;#n;size={width:0,height:0,wWidth:0,wHeight:0,ratio:0,pixelRatio:0};render=this.#b;onBeforeRender=()=>{};onAfterRender=()=>{};onAfterResize=()=>{};#a=!1;#i=!1;isDisposed=!1;#s;#r;#o;#l=new A1;#t={elapsed:0,delta:0};#f;constructor(e){this.#e={...e},this.#m(),this.#g(),this.#v(),this.resize(),this.#_()}#m(){this.camera=new si,this.cameraFov=this.camera.fov}#g(){this.scene=new Qx}#v(){this.#e.canvas?this.canvas=this.#e.canvas:this.#e.id?this.canvas=document.getElementById(this.#e.id):console.error("Three: Missing canvas or id parameter"),this.canvas.style.display="block";const e={canvas:this.canvas,powerPreference:"high-performance",...this.#e.rendererOptions??{}};this.renderer=new b3(e),this.renderer.outputColorSpace=ai}#_(){this.#e.size instanceof Object||(window.addEventListener("resize",this.#c.bind(this)),this.#e.size==="parent"&&this.canvas.parentNode&&(this.#r=new ResizeObserver(this.#c.bind(this)),this.#r.observe(this.canvas.parentNode))),this.#s=new IntersectionObserver(this.#S.bind(this),{root:null,rootMargin:"0px",threshold:0}),this.#s.observe(this.canvas),document.addEventListener("visibilitychange",this.#d.bind(this))}#x(){window.removeEventListener("resize",this.#c.bind(this)),this.#r?.disconnect(),this.#s?.disconnect(),document.removeEventListener("visibilitychange",this.#d.bind(this))}#S(e){this.#a=e[0].isIntersecting,this.#a?this.#p():this.#u()}#d(){this.#a&&(document.hidden?this.#u():this.#p())}#c(){this.#o&&clearTimeout(this.#o),this.#o=setTimeout(this.resize.bind(this),100)}resize(){let e,i;this.#e.size instanceof Object?(e=this.#e.size.width,i=this.#e.size.height):this.#e.size==="parent"&&this.canvas.parentNode?(e=this.canvas.parentNode.offsetWidth,i=this.canvas.parentNode.offsetHeight):(e=window.innerWidth,i=window.innerHeight),this.size.width=e,this.size.height=i,this.size.ratio=e/i,this.#y(),this.#M(),this.onAfterResize(this.size)}#y(){this.camera.aspect=this.size.width/this.size.height,this.camera.isPerspectiveCamera&&this.cameraFov&&(this.cameraMinAspect&&this.camera.aspect<this.cameraMinAspect?this.#h(this.cameraMinAspect):this.cameraMaxAspect&&this.camera.aspect>this.cameraMaxAspect?this.#h(this.cameraMaxAspect):this.camera.fov=this.cameraFov),this.camera.updateProjectionMatrix(),this.updateWorldSize()}#h(e){const i=Math.tan(xp.degToRad(this.cameraFov/2))/(this.camera.aspect/e);this.camera.fov=2*xp.radToDeg(Math.atan(i))}updateWorldSize(){if(this.camera.isPerspectiveCamera){const e=this.camera.fov*Math.PI/180;this.size.wHeight=2*Math.tan(e/2)*this.camera.position.length(),this.size.wWidth=this.size.wHeight*this.camera.aspect}else this.camera.isOrthographicCamera&&(this.size.wHeight=this.camera.top-this.camera.bottom,this.size.wWidth=this.camera.right-this.camera.left)}#M(){this.renderer.setSize(this.size.width,this.size.height),this.#n?.setSize(this.size.width,this.size.height);let e=window.devicePixelRatio;this.maxPixelRatio&&e>this.maxPixelRatio?e=this.maxPixelRatio:this.minPixelRatio&&e<this.minPixelRatio&&(e=this.minPixelRatio),this.renderer.setPixelRatio(e),this.size.pixelRatio=e}get postprocessing(){return this.#n}set postprocessing(e){this.#n=e,this.render=e.render.bind(e)}#p(){if(this.#i)return;const e=()=>{this.#f=requestAnimationFrame(e),this.#t.delta=this.#l.getDelta(),this.#t.elapsed+=this.#t.delta,this.onBeforeRender(this.#t),this.render(),this.onAfterRender(this.#t)};this.#i=!0,this.#l.start(),e()}#u(){this.#i&&(cancelAnimationFrame(this.#f),this.#i=!1,this.#l.stop())}#b(){this.renderer.render(this.scene,this.camera)}clear(){this.scene.traverse(e=>{e.isMesh&&typeof e.material=="object"&&e.material!==null&&(Object.keys(e.material).forEach(i=>{const r=e.material[i];r!==null&&typeof r=="object"&&typeof r.dispose=="function"&&r.dispose()}),e.material.dispose(),e.geometry.dispose())}),this.scene.clear()}dispose(){this.#x(),this.#u(),this.clear(),this.#n?.dispose(),this.renderer.dispose(),this.isDisposed=!0}}const ki=new Map,Oi=new Mt;let _h=!1;function A3(s){const e={position:new Mt,nPosition:new Mt,hover:!1,touching:!1,onEnter(){},onMove(){},onClick(){},onLeave(){},...s};return(function(i,r){ki.has(i)||(ki.set(i,r),_h||(document.body.addEventListener("pointermove",Q_),document.body.addEventListener("pointerleave",J_),document.body.addEventListener("click",$_),document.body.addEventListener("touchstart",ex,{passive:!1}),document.body.addEventListener("touchmove",tx,{passive:!1}),document.body.addEventListener("touchend",ru,{passive:!1}),document.body.addEventListener("touchcancel",ru,{passive:!1}),_h=!0))})(s.domElement,e),e.dispose=()=>{const i=s.domElement;ki.delete(i),ki.size===0&&(document.body.removeEventListener("pointermove",Q_),document.body.removeEventListener("pointerleave",J_),document.body.removeEventListener("click",$_),document.body.removeEventListener("touchstart",ex),document.body.removeEventListener("touchmove",tx),document.body.removeEventListener("touchend",ru),document.body.removeEventListener("touchcancel",ru),_h=!1)},e}function Q_(s){Oi.x=s.clientX,Oi.y=s.clientY,R3()}function R3(){for(const[s,e]of ki){const i=s.getBoundingClientRect();wu(i)?(Cu(e,i),e.hover||(e.hover=!0,e.onEnter(e)),e.onMove(e)):e.hover&&!e.touching&&(e.hover=!1,e.onLeave(e))}}function $_(s){Oi.x=s.clientX,Oi.y=s.clientY;for(const[e,i]of ki){const r=e.getBoundingClientRect();Cu(i,r),wu(r)&&i.onClick(i)}}function J_(){for(const s of ki.values())s.hover&&(s.hover=!1,s.onLeave(s))}function ex(s){if(s.touches.length>0){s.preventDefault(),Oi.x=s.touches[0].clientX,Oi.y=s.touches[0].clientY;for(const[e,i]of ki){const r=e.getBoundingClientRect();wu(r)&&(i.touching=!0,Cu(i,r),i.hover||(i.hover=!0,i.onEnter(i)),i.onMove(i))}}}function tx(s){if(s.touches.length>0){s.preventDefault(),Oi.x=s.touches[0].clientX,Oi.y=s.touches[0].clientY;for(const[e,i]of ki){const r=e.getBoundingClientRect();Cu(i,r),wu(r)?(i.hover||(i.hover=!0,i.touching=!0,i.onEnter(i)),i.onMove(i)):i.hover&&i.touching&&i.onMove(i)}}}function ru(){for(const[,s]of ki)s.touching&&(s.touching=!1,s.hover&&(s.hover=!1,s.onLeave(s)))}function Cu(s,e){const{position:i,nPosition:r}=s;i.x=Oi.x-e.left,i.y=Oi.y-e.top,r.x=i.x/e.width*2-1,r.y=-i.y/e.height*2+1}function wu(s){const{x:e,y:i}=Oi,{left:r,top:l,width:c,height:h}=s;return e>=r&&e<=r+c&&i>=l&&i<=l+h}const{randFloat:C3,randFloatSpread:xh}=xp,Sh=new Z,rn=new Z,ou=new Z,w3=new Z,on=new Z,lu=new Z,Hr=new Z,is=new Z,cu=new Z,nx=new Z;class D3{constructor(e){this.config=e,this.positionData=new Float32Array(3*e.count).fill(0),this.velocityData=new Float32Array(3*e.count).fill(0),this.sizeData=new Float32Array(e.count).fill(1),this.center=new Z,this.#e(),this.setSizes()}#e(){const{config:e,positionData:i}=this;this.center.toArray(i,0);for(let r=1;r<e.count;r++){const l=3*r;i[l]=xh(2*e.maxX),i[l+1]=xh(2*e.maxY),i[l+2]=xh(2*e.maxZ)}}setSizes(){const{config:e,sizeData:i}=this;i[0]=e.size0;for(let r=1;r<e.count;r++)i[r]=C3(e.minSize,e.maxSize)}update(e){const{config:i,center:r,positionData:l,sizeData:c,velocityData:h}=this;let d=0;i.controlSphere0&&(d=1,Sh.fromArray(l,0),Sh.lerp(r,.1).toArray(l,0),w3.set(0,0,0).toArray(h,0));for(let p=d;p<i.count;p++){const m=3*p;rn.fromArray(l,m),on.fromArray(h,m),on.y-=e.delta*i.gravity*c[p],on.multiplyScalar(i.friction),on.clampLength(0,i.maxVelocity),rn.add(on),rn.toArray(l,m),on.toArray(h,m)}for(let p=d;p<i.count;p++){const m=3*p;rn.fromArray(l,m),on.fromArray(h,m);const g=c[p];for(let S=p+1;S<i.count;S++){const y=3*S;ou.fromArray(l,y),lu.fromArray(h,y);const E=c[S];Hr.copy(ou).sub(rn);const R=Hr.length(),M=g+E;if(R<M){const _=M-R;is.copy(Hr).normalize().multiplyScalar(.5*_),cu.copy(is).multiplyScalar(Math.max(on.length(),1)),nx.copy(is).multiplyScalar(Math.max(lu.length(),1)),rn.sub(is),on.sub(cu),rn.toArray(l,m),on.toArray(h,m),ou.add(is),lu.add(nx),ou.toArray(l,y),lu.toArray(h,y)}}if(i.controlSphere0){Hr.copy(Sh).sub(rn);const S=Hr.length(),y=g+c[0];if(S<y){const E=y-S;is.copy(Hr.normalize()).multiplyScalar(E),cu.copy(is).multiplyScalar(Math.max(on.length(),2)),rn.sub(is),on.sub(cu)}}Math.abs(rn.x)+g>i.maxX&&(rn.x=Math.sign(rn.x)*(i.maxX-g),on.x=-on.x*i.wallBounce),i.gravity===0?Math.abs(rn.y)+g>i.maxY&&(rn.y=Math.sign(rn.y)*(i.maxY-g),on.y=-on.y*i.wallBounce):rn.y-g<-i.maxY&&(rn.y=-i.maxY+g,on.y=-on.y*i.wallBounce);const v=Math.max(i.maxZ,i.maxSize);Math.abs(rn.z)+g>v&&(rn.z=Math.sign(rn.z)*(i.maxZ-g),on.z=-on.z*i.wallBounce),rn.toArray(l,m),on.toArray(h,m)}}}class U3 extends _1{constructor(e){super(e),this.uniforms={thicknessDistortion:{value:.1},thicknessAmbient:{value:0},thicknessAttenuation:{value:.1},thicknessPower:{value:2},thicknessScale:{value:10}},this.defines.USE_UV="",this.onBeforeCompile=i=>{Object.assign(i.uniforms,this.uniforms),i.fragmentShader=`
        uniform float thicknessPower;
        uniform float thicknessScale;
        uniform float thicknessDistortion;
        uniform float thicknessAmbient;
        uniform float thicknessAttenuation;
      `+i.fragmentShader,i.fragmentShader=i.fragmentShader.replace("void main() {",`
        void RE_Direct_Scattering(const in IncidentLight directLight, const in vec2 uv, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, inout ReflectedLight reflectedLight) {
          vec3 scatteringHalf = normalize(directLight.direction + (geometryNormal * thicknessDistortion));
          float scatteringDot = pow(saturate(dot(geometryViewDir, -scatteringHalf)), thicknessPower) * thicknessScale;
          #ifdef USE_COLOR
            vec3 scatteringIllu = (scatteringDot + thicknessAmbient) * vColor;
          #else
            vec3 scatteringIllu = (scatteringDot + thicknessAmbient) * diffuse;
          #endif
          reflectedLight.directDiffuse += scatteringIllu * thicknessAttenuation * directLight.color;
        }

        void main() {
      `);const r=ft.lights_fragment_begin.replaceAll("RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );",`
          RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
          RE_Direct_Scattering(directLight, vUv, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, reflectedLight);
        `);i.fragmentShader=i.fragmentShader.replace("#include <lights_fragment_begin>",r),this.onBeforeCompile2&&this.onBeforeCompile2(i)}}}const N3={count:200,colors:[0,0,0],ambientColor:16777215,ambientIntensity:1,lightIntensity:200,materialParams:{metalness:.5,roughness:.5,clearcoat:1,clearcoatRoughness:.15},minSize:.5,maxSize:1,size0:1,gravity:.5,friction:.9975,wallBounce:.95,maxVelocity:.15,maxX:5,maxY:5,maxZ:2,controlSphere0:!1,followCursor:!0},Gr=new In;class L3 extends Jx{constructor(e,i={}){const r={...N3,...i},l=new E3,c=new Mp(e,.04).fromScene(l).texture,h=new Jp,d=new U3({envMap:c,...r.materialParams});d.envMapRotation.x=-Math.PI/2,super(h,d,r.count),this.config=r,this.physics=new D3(r),this.#e(),this.setColors(r.colors)}#e(){this.ambientLight=new E1(this.config.ambientColor,this.config.ambientIntensity),this.add(this.ambientLight),this.light=new nS(this.config.colors[0],this.config.lightIntensity),this.add(this.light)}setColors(e){if(Array.isArray(e)&&e.length>1){const i=(function(r){let l,c;function h(d){l=d,c=[],l.forEach(p=>{c.push(new ht(p))})}return h(r),{setColors:h,getColorAt:function(d,p=new ht){const m=Math.max(0,Math.min(1,d))*(l.length-1),g=Math.floor(m),v=c[g];if(g>=l.length-1)return v.clone();const S=m-g,y=c[g+1];return p.r=v.r+S*(y.r-v.r),p.g=v.g+S*(y.g-v.g),p.b=v.b+S*(y.b-v.b),p}}})(e);for(let r=0;r<this.count;r++)this.setColorAt(r,i.getColorAt(r/this.count)),r===0&&this.light.color.copy(i.getColorAt(r/this.count));this.instanceColor.needsUpdate=!0}}update(e){this.physics.update(e);for(let i=0;i<this.count;i++)Gr.position.fromArray(this.physics.positionData,3*i),i===0&&this.config.followCursor===!1?Gr.scale.setScalar(0):Gr.scale.setScalar(this.physics.sizeData[i]),Gr.updateMatrix(),this.setMatrixAt(i,Gr.matrix),i===0&&this.light.position.copy(Gr.position);this.instanceMatrix.needsUpdate=!0}}function O3(s,e={}){const i=new T3({canvas:s,size:"parent",rendererOptions:{antialias:!0,alpha:!0}});let r;i.renderer.toneMapping=Bp,i.camera.position.set(0,0,20),i.camera.lookAt(0,0,0),i.cameraMaxAspect=1.5,i.resize(),m(e);const l=new R1,c=new as(new Z(0,0,1),0),h=new Z;let d=!1;s.style.touchAction="none",s.style.userSelect="none",s.style.webkitUserSelect="none";const p=A3({domElement:s,onMove(){l.setFromCamera(p.nPosition,i.camera),i.camera.getWorldDirection(c.normal),l.ray.intersectPlane(c,h),r.physics.center.copy(h),r.config.controlSphere0=!0},onLeave(){r.config.controlSphere0=!1}});function m(g){r&&(i.clear(),i.scene.remove(r)),r=new L3(i.renderer,g),i.scene.add(r)}return i.onBeforeRender=g=>{d||r.update(g)},i.onAfterResize=g=>{r.config.maxX=g.wWidth/2,r.config.maxY=g.wHeight/2},{three:i,get spheres(){return r},setCount(g){m({...r.config,count:g})},togglePause(){d=!d},dispose(){p.dispose(),i.dispose()}}}const P3=({className:s="",followCursor:e=!0,...i})=>{const r=Ae.useRef(null),l=Ae.useRef(null);return Ae.useEffect(()=>{const c=r.current;if(c)return l.current=O3(c,{followCursor:e,...i}),()=>{l.current&&l.current.dispose()}},[]),J.jsx("canvas",{className:`${s} w-full h-full`,ref:r})},F3=[{name:"Graphic Designer",imageUrl:"./src/assets/techStack/Sampul/GP.png",techStack:["./src/assets/techStack/Affinity.svg","./src/assets/techStack/Canva.svg","./src/assets/techStack/Figma.svg"],Description:"Membuat Desain Poster, Banner, Display Videotron pada Event dan Bisa membuat Desain Sosial Media seperti Feed, Story Instagram, Twibbon, Thumbnail."},{name:"UI/UX Design",imageUrl:"./src/assets/techStack/Sampul/UIUX.png",techStack:["./src/assets/techStack/Figma.svg"],Description:"Mendesain Tampilan Website dengan pendekatan Mobile First Design dan Mendesain Aplikasi Mobile"},{name:"Front End",imageUrl:"./src/assets/techStack/Sampul/CODE.png",techStack:["./src/assets/techStack/Html.svg","./src/assets/techStack/CSS.svg","./src/assets/techStack/Javascript.svg","./src/assets/techStack/Gsap.svg","./src/assets/techStack/TailwindCss.svg"],Description:"Membuat Website dengan React dan TailwindCss dan animasi dengan GSAp"},{name:"Back End",imageUrl:"./src/assets/techStack/Sampul/CODE.png",techStack:["./src/assets/techStack/PHP.svg","./src/assets/techStack/Firebase.svg","./src/assets/techStack/Laravel.svg","./src/assets/techStack/Python.svg"],Description:"Membuat Website dengan Framework Laravel dan dengan Flask Python"}],I3=[{name:"HYDROSEE APP",mainImageUrl:"../src/assets/bestProject/smpl.png",image1Url:"../src/assets/bestProject/1.png",image2Url:"../src/assets/bestProject/2.png",techStackApp:["../src/assets/techStack/Figma.svg","../src/assets/techStack/Tinkercad.svg","../src/assets/techStack/Python.svg","../src/assets/techStack/Firebase.svg","../src/assets/techStack/Dart.svg","../src/assets/techStack/Flutter.svg"],description:"Pada Project Semester 5, Saya dan tim  membuat sebuah aplikasi mobile yang terintegrasi dengan sistem IoT. Di project kali ini kami menyelesaikan masalah terkait pertanian hidroponik yang selalu menjadi tempat main serangga belalang karena letakny yang di pinggir sawah. Dengan mengintegrasikan Sistem Cerdas berbasis machine learning yang dikolaborasikan dengan Sistem Pengolahan Citra dan Vision dalam mendeteksi belalang, Hasil dari deteksi ini digunakan untuk mentrigger Sistem IoT untuk bertindak."}],B3=[{url:"../src/assets/galery/feedEpim.webp",name:"Feed Epim"},{url:"../src/assets/galery/feedWorkshop.webp",name:"Feed Workshop Kelas Kreatif"},{url:"../src/assets/galery/posterHarlahPancasila.webp",name:"Poster Harlah Pancasila"}],z3=[{url:"../src/assets/galery/oprec.webp",name:"Flyer Oprec Imun"},{url:"../src/assets/galery/flyerGerakJalan.webp",name:"Flyer Gerak Jalan Kabupaten Nganjuk"},{url:"../src/assets/galery/posterWaisak.webp",name:"Poster Waisak"}],H3=[{url:"../src/assets/galery/demisioner.webp",name:"Feed Demisioner"},{url:"../src/assets/galery/FeedSubSektorApp.webp",name:"Feed SubSektor Aplikasi"},{url:"../src/assets/galery/posterUAS.webp",name:"Poster UAS"}],G3=[{url:"../src/assets/galery/posterMaulid.webp",name:"Poster Maulid"},{url:"../src/assets/galery/bannerWorkshop.webp",name:"Banner Workshop"},{url:"../src/assets/galery/posterImlek.webp",name:"Poster Imlek"}];function V3(){return J.jsxs("div",{className:"bg-transparent",children:[J.jsxs("section",{className:"pt-20",children:[J.jsxs("div",{className:"grid grid-cols-6 grid-rows-4 gap-2 px-2 sm:px-4 md:px-6 lg:px-10",children:[J.jsx("div",{className:"col-span-6",children:J.jsx("h1",{className:"lg:text-9xl leading-none font-extrabold bg-linear-to-r from-brand-700 to-brand-500 bg-clip-text text-transparent md:text-7xl sm:text-5xl text-3xl",children:"Hello, I’AM IVAN"})}),J.jsx("div",{className:"col-span-2 row-span-3 row-start-2",children:J.jsx("h2",{className:"text-white text-4xl font-normal",children:"PRADITYA IVAN RAHMADHANI"})}),J.jsxs("div",{className:"col-span-2 row-span-3 col-start-3 row-start-2",children:[J.jsx("img",{src:"./src/assets/no_bg_gradient.webp",alt:"its me bro",className:"h-full w-auto"}),J.jsx("img",{src:"",alt:""})]}),J.jsx("div",{className:"col-span-2 col-start-5 row-start-3 content-end",children:J.jsx("h3",{className:"text-white text-2xl font-bold",children:"I CAN DESIGN AND DEVELOP YOUR WEBSITE"})}),J.jsx("div",{className:"col-span-2 col-start-5 row-start-4",children:J.jsx("p",{className:"text-sm font-normal text-gray-300",children:"Fullstack Developer & Designer yang berfokus pada pengalaman pengguna. Memiliki pengalaman dalam membangun aplikasi web modern menggunakan React dan Laravel, serta dalam otomasi sistem melalui IoT dan manajemen database yang efisien."})})]}),J.jsxs("div",{className:"col-span-6 row-start-4 pt-8 overflow-hidden",children:[J.jsxs("div",{className:"flex gap-0 w-full  text-brand-100 border-brand-100 text-lg whitespace-nowrap mb-4",children:[J.jsx("span",{className:"bg-brand-1000 border-y-2 font-semibold py-2.5 px-4",children:"Graphic Designer"}),J.jsx("span",{className:"bg-brand-1000 border-y-2 py-2.5",children:"•"}),J.jsx("span",{className:"bg-brand-1000 border-y-2 font-semibold py-2.5 px-4",children:"UI/UX"}),J.jsx("span",{className:"bg-brand-1000 border-y-2 py-2.5",children:"•"}),J.jsx("span",{className:"bg-brand-1000 border-y-2 py-2.5 px-4",children:"IOT Dev"}),J.jsx("span",{className:"bg-brand-1000 border-y-2 py-2.5",children:"•"}),J.jsx("span",{className:"bg-brand-1000 border-y-2 font-semibold py-2.5 px-4",children:"Web Developer"}),J.jsx("span",{className:"bg-brand-1000 border-y-2 py-2.5",children:"•"}),J.jsx("span",{className:"bg-brand-1000 border-y-2 font-semibold py-2.5 px-4",children:"Graphic Designer"}),J.jsx("span",{className:"bg-brand-1000 border-y-2 py-2.5",children:"•"}),J.jsx("span",{className:"bg-brand-1000 border-y-2 py-2.5 px-4",children:"Video Editor"}),J.jsx("span",{className:"bg-brand-1000 border-y-2 py-2.5",children:"•"}),J.jsx("span",{className:"bg-brand-1000 border-y-2 font-semibold py-2.5 px-4",children:"Graphic Designer"}),J.jsx("span",{className:"bg-brand-1000 border-y-2 py-2.5",children:"•"}),J.jsx("span",{className:"bg-brand-1000 border-y-2 font-semibold py-2.5 px-4",children:"UI/UX"}),J.jsx("span",{className:"bg-brand-1000 border-y-2 py-2.5",children:"•"}),J.jsx("span",{className:"bg-brand-1000 border-y-2 py-2.5 px-4",children:"IOT Dev"}),J.jsx("span",{className:"bg-brand-1000 border-y-2 py-2.5",children:"•"}),J.jsx("span",{className:"bg-brand-1000 border-y-2 font-semibold py-2.5 px-4",children:"Web Developer"}),J.jsx("span",{className:"bg-brand-1000 border-y-2 py-2.5",children:"•"}),J.jsx("span",{className:"bg-brand-1000 border-y-2 font-semibold py-2.5 px-4",children:"Graphic Designer"}),J.jsx("span",{className:"bg-brand-1000 border-y-2 py-2.5",children:"•"}),J.jsx("span",{className:"bg-brand-1000 border-y-2 py-2.5 px-4",children:"Video Editor"})]}),J.jsxs("div",{className:"flex gap-0 w-full bg-brand-1000 text-brand-100 border-brand-100 text-lg whitespace-nowrap mb-4",children:[J.jsx("span",{className:"bg-brand-1000 border-y-2 py-2.5 px-4",children:"Video Editor"}),J.jsx("span",{className:"bg-brand-1000 border-y-2 py-2.5",children:"•"}),J.jsx("span",{className:"bg-brand-1000 border-y-2 font-semibold py-2.5 px-4",children:"UI/UX"}),J.jsx("span",{className:"bg-brand-1000 border-y-2 py-2.5",children:"•"}),J.jsx("span",{className:"bg-brand-1000 border-y-2 py-2.5 px-4",children:"IOT Dev"}),J.jsx("span",{className:"bg-brand-1000 border-y-2 py-2.5",children:"•"}),J.jsx("span",{className:"bg-brand-1000 border-y-2 font-semibold py-2.5 px-4",children:"Graphic Designer"}),J.jsx("span",{className:"bg-brand-1000 border-y-2 py-2.5",children:"•"}),J.jsx("span",{className:"bg-brand-1000 border-y-2 font-semibold py-2.5 px-4",children:"Web Developer"}),J.jsx("span",{className:"bg-brand-1000 border-y-2 py-2.5",children:"•"}),J.jsx("span",{className:"bg-brand-1000 border-y-2 py-2.5 px-4",children:"Video Editor"}),J.jsx("span",{className:"bg-brand-1000 border-y-2 py-2.5",children:"•"}),J.jsx("span",{className:"bg-brand-1000 border-y-2 font-semibold py-2.5 px-4",children:"UI/UX"}),J.jsx("span",{className:"bg-brand-1000 border-y-2 py-2.5",children:"•"}),J.jsx("span",{className:"bg-brand-1000 border-y-2 py-2.5 px-4",children:"IOT Dev"}),J.jsx("span",{className:"bg-brand-1000 border-y-2 py-2.5",children:"•"}),J.jsx("span",{className:"bg-brand-1000 border-y-2 font-semibold py-2.5 px-4",children:"Graphic Designer"}),J.jsx("span",{className:"bg-brand-1000 border-y-2 py-2.5",children:"•"}),J.jsx("span",{className:"bg-brand-1000 border-y-2 font-semibold py-2.5 px-4",children:"Web Developer"}),J.jsx("span",{className:"bg-brand-1000 border-y-2 py-2.5",children:"•"}),J.jsx("span",{className:"bg-brand-1000 border-y-2 py-2.5 px-4",children:"Video Editor"}),J.jsx("span",{className:"bg-brand-1000 border-y-2 py-2.5",children:"•"}),J.jsx("span",{className:"bg-brand-1000 border-y-2 font-semibold py-2.5 px-4",children:"UI/UX"}),J.jsx("span",{className:"bg-brand-1000 border-y-2 py-2.5",children:"•"}),J.jsx("span",{className:"bg-brand-1000 border-y-2 py-2.5 px-4",children:"IOT Dev"}),J.jsx("span",{className:"bg-brand-1000 border-y-2 py-2.5",children:"•"}),J.jsx("span",{className:"bg-brand-1000 border-y-2 font-semibold py-2.5 px-4",children:"Graphic Designer"}),J.jsx("span",{className:"bg-brand-1000 border-y-2 py-2.5",children:"•"}),J.jsx("span",{className:"bg-brand-1000 border-y-2 font-semibold py-2.5 px-4",children:"Web Developer"})]})]}),J.jsx("div",{className:"absolute w-screen top-0 left-0 min-h-screen -z-10",children:J.jsx(P3,{count:100,gravity:.01,friction:.9975,wallBounce:.95,followCursor:!1,colors:[3099,11620,17557],ambientColor:258,className:"bg-brand-1000"})})]}),J.jsx("section",{className:"flex min-h-screen px-2 sm:px-4 md:px-6 lg:px-10 pt-8 bg-brand-1000 ",children:J.jsxs("div",{className:"flex flex-col w-full h-full gap-5",children:[J.jsx("h2",{className:"text-brand-0 text-7xl font-medium",children:"MY SKILLS"}),J.jsx("div",{className:"flex justify-center flex-row gap-4",children:F3.map(s=>J.jsxs("div",{className:"bg-neutral-primary-soft block w-80 h-fit max-w-sm border border-default p-4 bg-brand-1000 hover:bg-brand-950 duration-500 group",children:[J.jsx("img",{className:"w-full h-auto mb-1.5",src:s.imageUrl,alt:""}),J.jsxs("div",{className:"flex flex-col gap-2.5",children:[J.jsx("h3",{className:"text-brand-300 text-2xl font-bold",children:s.name}),J.jsx("p",{className:"text-brand-100 text-lg font-normal",children:s.Description}),J.jsx("div",{className:"flex -space-x-4 rtl:space-x-reverse group-hover:space-x-3 transition-all duration-500",children:s.techStack.map((e,i)=>J.jsx("img",{class:"w-10 h-10 shadow-md shadow-black/80 transition-transform duration-300",src:e,alt:s-e-{}},i))})]})]}))}),J.jsx("h3",{className:"text-5xl font-medium bg-linear-to-r from-brand-700 to-brand-800 bg-clip-text text-transparent text-end",children:"TECH STACK"})]})}),J.jsxs("section",{className:"bg-brand-1000 px-2 sm:px-4 md:px-6 lg:px-10",children:[J.jsx("h2",{className:"text-7xl font-medium text-brand-0 mb-2",children:"BEST PROJECT"}),I3.map(s=>J.jsxs("div",{className:"flex flex-row gap-4 h-fit",children:[J.jsxs("div",{className:"grid grid-cols-2 grid-rows-2 gap-4 w-full h-fit",children:[J.jsx("div",{className:"col-span-2",children:J.jsx("img",{className:"aspect-video object-cover w-full",src:s.mainImageUrl,alt:""})}),J.jsx("div",{className:"row-start-2",children:J.jsx("img",{className:"aspect-video object-cover w-full",src:s.image1Url,alt:""})}),J.jsx("div",{className:"row-start-2",children:J.jsx("img",{className:"aspect-video object-cover w-full",src:s.image2Url,alt:""})})]}),J.jsxs("div",{className:"flex flex-col gap-5 w-full",children:[J.jsx("h3",{className:"text-5xl font-bold text-brand-0",children:s.name}),J.jsx("p",{className:"text-lg font-normal text-brand-50 ml-8",children:s.description}),J.jsx("div",{className:"flex flex-row gap-4",children:s.techStackApp.map((e,i)=>J.jsx("img",{class:"w-10 h-10 shadow-md shadow-black/80 transition-transform duration-300",src:e,alt:s-e-{}},i))})]})]}))]}),J.jsx("section",{className:"bg-brand-950 px-2 sm:px-4 md:px-6 lg:px-10 pb-10",children:J.jsxs("div",{className:"",children:[J.jsxs("div",{className:"relative mb-5",children:[J.jsxs("div",{className:"relative z-20 aspect-video p-4 w-full text-brand-0 text-7xl font-bold flex flex-col justify-between",children:[J.jsx("h2",{children:"BEST DESIGN"}),J.jsx("h3",{className:"text-end",children:"2025"})]}),J.jsx("img",{className:"absolute bottom-0 left-0 z-10 aspect-video object-cover w-full",src:"../src/assets/galery/sampul/bgBestDesign2025.webp",alt:""})]}),J.jsxs("div",{className:"flex flex-col gap-5",children:[J.jsx("div",{className:"",children:J.jsx("img",{className:"w-full h-fit",src:"../src/assets/galery/carousaleReor.webp",alt:""})}),J.jsxs("div",{className:"flex flex-row w-full h-fit gap-5",children:[J.jsx("div",{className:"flex flex-col w-full h-fit gap-5",children:B3.map(s=>J.jsx("img",{className:"w-full h-fit",src:s.url,alt:s.name}))}),J.jsx("div",{className:"flex flex-col w-full h-fit gap-5",children:z3.map(s=>J.jsx("img",{className:"w-full h-fit",src:s.url,alt:s.name}))}),J.jsx("div",{className:"flex flex-col w-full h-fit gap-5",children:H3.map(s=>J.jsx("img",{className:"w-full h-fit",src:s.url,alt:s.name}))}),J.jsx("div",{className:"flex flex-col w-full h-fit gap-5",children:G3.map(s=>J.jsx("img",{className:"w-full h-fit",src:s.url,alt:s.name}))})]})]})]})}),J.jsx("footer",{children:J.jsxs("div",{className:"flex flex-row justify-between py-4 px-10",children:[J.jsx("a",{className:"text-lg font-medium text-gray-500",href:"#",children:"← previous"}),J.jsx("a",{className:"text-lg font-medium text-brand-0",href:"#",children:J.jsx("p",{children:"Next →"})})]})})]})}function k3({title:s,titleId:e,...i},r){return Ae.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:r,"aria-labelledby":e},i),s?Ae.createElement("title",{id:e},s):null,Ae.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"}))}const X3=Ae.forwardRef(k3);function W3({title:s,titleId:e,...i},r){return Ae.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:r,"aria-labelledby":e},i),s?Ae.createElement("title",{id:e},s):null,Ae.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m10.5 21 5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 0 1 6-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 0 1-3.827-5.802"}))}const q3=Ae.forwardRef(W3);function j3({title:s,titleId:e,...i},r){return Ae.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:r,"aria-labelledby":e},i),s?Ae.createElement("title",{id:e},s):null,Ae.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"}))}const Y3=Ae.forwardRef(j3);function Z3({title:s,titleId:e,...i},r){return Ae.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:r,"aria-labelledby":e},i),s?Ae.createElement("title",{id:e},s):null,Ae.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6 18 18 6M6 6l12 12"}))}const K3=Ae.forwardRef(Z3),ix=[{name:"Home",href:"#",current:!0},{name:"About",href:"#",current:!1},{name:"Experience",href:"#",current:!1},{name:"My Project",href:"#",current:!1},{name:"My Design",href:"#",current:!1}];function ax(...s){return s.filter(Boolean).join(" ")}const Q3=()=>J.jsxs("body",{className:"min-h-screen overflow-x-hidden bg-brand-1000",children:[J.jsxs(qb,{as:"nav",className:"fixed w-full px-2 sm:px-4 md:px-6 lg:px-10 pr-2 sm:pr-4 md:pr-6 lg:pr-10 pt-5 z-20 bg-transparent after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-white/10",children:[J.jsx("div",{className:"mx-none w-full",children:J.jsxs("div",{className:"relative bg-brand-0 rounded-full px-2 sm:px-4 lg:px-5 py-8 flex h-16 items-center justify-between",children:[J.jsx("div",{className:"absolute inset-y-0 left-0 flex items-center lg:hidden",children:J.jsxs(Rh,{className:"group relative inline-flex items-center justify-center rounded-md p-5 text-brand-1000 hover:bg-white/5 hover:text-gray-500 focus:outline-2 focus:-outline-offset-1 focus:outline-indigo-500",children:[J.jsx("span",{className:"absolute -inset-0.5"}),J.jsx("span",{className:"sr-only",children:"Open main menu"}),J.jsx(X3,{"aria-hidden":"true",className:"block size-6 group-data-open:hidden"}),J.jsx(K3,{"aria-hidden":"true",className:"hidden size-6 group-data-open:block"})]})}),J.jsx("div",{className:"flex flex-1 lg:flex-none items-center pr-18 sm:pr-0 md:pr-0 pl-0 md:pl-8 lg:pl-0 justify-center sm:justify-center lg:items-stretch lg:justify-start",children:J.jsxs("div",{className:"flex shrink-0 items-center gap-1",children:[J.jsx("img",{alt:"Pradima_Creative",src:"./src/assets/logo-nobg2_3.webp",className:"h-12 w-auto"}),J.jsx("h2",{className:"text-sm font-semibold text-brand-900",children:"Pradima_Creative Porto"})]})}),J.jsx("div",{className:"hidden sm:ml-6 content-center lg:block",children:J.jsx("div",{className:"flex gap-1",children:ix.map(s=>J.jsx("a",{href:s.href,"aria-current":s.current?"page":void 0,className:ax(s.current?"bg-brand-500/50 text-white px-5":"text-brand-1000/50 hover:bg-white/5 hover:text-brand-300","rounded-full px-3 py-2 text-sm font-medium"),children:s.name},s.name))})}),J.jsxs("div",{className:"absolute inset-y-0 right-0 flex items-center pr-5 gap-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0",children:[J.jsx("button",{className:"hidden bg-brand-1000 text-brand-0 py-2 px-6 rounded-full lg:flex hover:bg-gray-700 active:bg-gray-500 duration-500",children:"Let's Connected"}),J.jsxs("button",{type:"button",className:"relative rounded-full p-2 text-brand-1000 bg-gray-300 hover:bg-gray-500 hover:text-brand-50 active:bg-gray-800 duration-500 focus:outline-2 focus:outline-offset-2 focus:outline-indigo-500",children:[J.jsx("span",{className:"absolute -inset-1.5"}),J.jsx("span",{className:"sr-only",children:"Theme"}),J.jsx(Y3,{"aria-hidden":"true",className:"size-6"})]}),J.jsxs("button",{type:"button",className:"relative rounded-full p-2 text-brand-1000 bg-gray-300 hover:bg-gray-500 hover:text-brand-50 active:bg-gray-800 duration-500 focus:outline-2 focus:outline-offset-2 focus:outline-indigo-500",children:[J.jsx("span",{className:"absolute -inset-1.5"}),J.jsx("span",{className:"sr-only",children:"Theme"}),J.jsx(q3,{"aria-hidden":"true",className:"size-6"})]})]})]})}),J.jsx(Ax,{className:"bg-brand-0 rounded-2xl mt-4 lg:hidden",children:J.jsxs("div",{className:"space-y-1 px-2 pt-2 pb-3",children:[ix.map(s=>J.jsx(Rh,{as:"a",href:s.href,"aria-current":s.current?"page":void 0,className:ax(s.current?"bg-brand-500/50 text-white":"text-brand-1000/50 hover:bg-brand-50 hover:text-shadow-brand-800 hover:text-brand-300","block rounded-md px-3 py-2 text-base font-medium"),children:s.name},s.name)),J.jsx("button",{className:"bg-brand-1000 text-brand-0 py-2 px-6 rounded-full",children:"Let's Connected"})]})})]}),J.jsx(V3,{})]});bM.createRoot(document.getElementById("root")).render(J.jsx(Ae.StrictMode,{children:J.jsx(Q3,{})}));
