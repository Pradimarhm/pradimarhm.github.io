(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const h of c.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&s(h)}).observe(document,{childList:!0,subtree:!0});function i(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function s(l){if(l.ep)return;l.ep=!0;const c=i(l);fetch(l.href,c)}})();function pM(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var Pd={exports:{}},$o={};var Lv;function mM(){if(Lv)return $o;Lv=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function i(s,l,c){var h=null;if(c!==void 0&&(h=""+c),l.key!==void 0&&(h=""+l.key),"key"in l){c={};for(var d in l)d!=="key"&&(c[d]=l[d])}else c=l;return l=c.ref,{$$typeof:r,type:s,key:h,ref:l!==void 0?l:null,props:c}}return $o.Fragment=e,$o.jsx=i,$o.jsxs=i,$o}var Ov;function gM(){return Ov||(Ov=1,Pd.exports=mM()),Pd.exports}var J=gM(),Fd={exports:{}},st={};var Pv;function vM(){if(Pv)return st;Pv=1;var r=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.consumer"),h=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),v=Symbol.for("react.activity"),S=Symbol.iterator;function y(U){return U===null||typeof U!="object"?null:(U=S&&U[S]||U["@@iterator"],typeof U=="function"?U:null)}var E={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},R=Object.assign,M={};function _(U,ie,ve){this.props=U,this.context=ie,this.refs=M,this.updater=ve||E}_.prototype.isReactComponent={},_.prototype.setState=function(U,ie){if(typeof U!="object"&&typeof U!="function"&&U!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,U,ie,"setState")},_.prototype.forceUpdate=function(U){this.updater.enqueueForceUpdate(this,U,"forceUpdate")};function N(){}N.prototype=_.prototype;function O(U,ie,ve){this.props=U,this.context=ie,this.refs=M,this.updater=ve||E}var L=O.prototype=new N;L.constructor=O,R(L,_.prototype),L.isPureReactComponent=!0;var I=Array.isArray;function z(){}var F={H:null,A:null,T:null,S:null},K=Object.prototype.hasOwnProperty;function C(U,ie,ve){var Re=ve.ref;return{$$typeof:r,type:U,key:ie,ref:Re!==void 0?Re:null,props:ve}}function w(U,ie){return C(U.type,ie,U.props)}function k(U){return typeof U=="object"&&U!==null&&U.$$typeof===r}function se(U){var ie={"=":"=0",":":"=2"};return"$"+U.replace(/[=:]/g,function(ve){return ie[ve]})}var re=/\/+/g;function pe(U,ie){return typeof U=="object"&&U!==null&&U.key!=null?se(""+U.key):ie.toString(36)}function fe(U){switch(U.status){case"fulfilled":return U.value;case"rejected":throw U.reason;default:switch(typeof U.status=="string"?U.then(z,z):(U.status="pending",U.then(function(ie){U.status==="pending"&&(U.status="fulfilled",U.value=ie)},function(ie){U.status==="pending"&&(U.status="rejected",U.reason=ie)})),U.status){case"fulfilled":return U.value;case"rejected":throw U.reason}}throw U}function P(U,ie,ve,Re,He){var ne=typeof U;(ne==="undefined"||ne==="boolean")&&(U=null);var ue=!1;if(U===null)ue=!0;else switch(ne){case"bigint":case"string":case"number":ue=!0;break;case"object":switch(U.$$typeof){case r:case e:ue=!0;break;case g:return ue=U._init,P(ue(U._payload),ie,ve,Re,He)}}if(ue)return He=He(U),ue=Re===""?"."+pe(U,0):Re,I(He)?(ve="",ue!=null&&(ve=ue.replace(re,"$&/")+"/"),P(He,ie,ve,"",function(Ge){return Ge})):He!=null&&(k(He)&&(He=w(He,ve+(He.key==null||U&&U.key===He.key?"":(""+He.key).replace(re,"$&/")+"/")+ue)),ie.push(He)),1;ue=0;var Ue=Re===""?".":Re+":";if(I(U))for(var Xe=0;Xe<U.length;Xe++)Re=U[Xe],ne=Ue+pe(Re,Xe),ue+=P(Re,ie,ve,ne,He);else if(Xe=y(U),typeof Xe=="function")for(U=Xe.call(U),Xe=0;!(Re=U.next()).done;)Re=Re.value,ne=Ue+pe(Re,Xe++),ue+=P(Re,ie,ve,ne,He);else if(ne==="object"){if(typeof U.then=="function")return P(fe(U),ie,ve,Re,He);throw ie=String(U),Error("Objects are not valid as a React child (found: "+(ie==="[object Object]"?"object with keys {"+Object.keys(U).join(", ")+"}":ie)+"). If you meant to render a collection of children, use an array instead.")}return ue}function H(U,ie,ve){if(U==null)return U;var Re=[],He=0;return P(U,Re,"","",function(ne){return ie.call(ve,ne,He++)}),Re}function ae(U){if(U._status===-1){var ie=U._result;ie=ie(),ie.then(function(ve){(U._status===0||U._status===-1)&&(U._status=1,U._result=ve)},function(ve){(U._status===0||U._status===-1)&&(U._status=2,U._result=ve)}),U._status===-1&&(U._status=0,U._result=ie)}if(U._status===1)return U._result.default;throw U._result}var Me=typeof reportError=="function"?reportError:function(U){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var ie=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof U=="object"&&U!==null&&typeof U.message=="string"?String(U.message):String(U),error:U});if(!window.dispatchEvent(ie))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",U);return}console.error(U)},Se={map:H,forEach:function(U,ie,ve){H(U,function(){ie.apply(this,arguments)},ve)},count:function(U){var ie=0;return H(U,function(){ie++}),ie},toArray:function(U){return H(U,function(ie){return ie})||[]},only:function(U){if(!k(U))throw Error("React.Children.only expected to receive a single React element child.");return U}};return st.Activity=v,st.Children=Se,st.Component=_,st.Fragment=i,st.Profiler=l,st.PureComponent=O,st.StrictMode=s,st.Suspense=p,st.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=F,st.__COMPILER_RUNTIME={__proto__:null,c:function(U){return F.H.useMemoCache(U)}},st.cache=function(U){return function(){return U.apply(null,arguments)}},st.cacheSignal=function(){return null},st.cloneElement=function(U,ie,ve){if(U==null)throw Error("The argument must be a React element, but you passed "+U+".");var Re=R({},U.props),He=U.key;if(ie!=null)for(ne in ie.key!==void 0&&(He=""+ie.key),ie)!K.call(ie,ne)||ne==="key"||ne==="__self"||ne==="__source"||ne==="ref"&&ie.ref===void 0||(Re[ne]=ie[ne]);var ne=arguments.length-2;if(ne===1)Re.children=ve;else if(1<ne){for(var ue=Array(ne),Ue=0;Ue<ne;Ue++)ue[Ue]=arguments[Ue+2];Re.children=ue}return C(U.type,He,Re)},st.createContext=function(U){return U={$$typeof:h,_currentValue:U,_currentValue2:U,_threadCount:0,Provider:null,Consumer:null},U.Provider=U,U.Consumer={$$typeof:c,_context:U},U},st.createElement=function(U,ie,ve){var Re,He={},ne=null;if(ie!=null)for(Re in ie.key!==void 0&&(ne=""+ie.key),ie)K.call(ie,Re)&&Re!=="key"&&Re!=="__self"&&Re!=="__source"&&(He[Re]=ie[Re]);var ue=arguments.length-2;if(ue===1)He.children=ve;else if(1<ue){for(var Ue=Array(ue),Xe=0;Xe<ue;Xe++)Ue[Xe]=arguments[Xe+2];He.children=Ue}if(U&&U.defaultProps)for(Re in ue=U.defaultProps,ue)He[Re]===void 0&&(He[Re]=ue[Re]);return C(U,ne,He)},st.createRef=function(){return{current:null}},st.forwardRef=function(U){return{$$typeof:d,render:U}},st.isValidElement=k,st.lazy=function(U){return{$$typeof:g,_payload:{_status:-1,_result:U},_init:ae}},st.memo=function(U,ie){return{$$typeof:m,type:U,compare:ie===void 0?null:ie}},st.startTransition=function(U){var ie=F.T,ve={};F.T=ve;try{var Re=U(),He=F.S;He!==null&&He(ve,Re),typeof Re=="object"&&Re!==null&&typeof Re.then=="function"&&Re.then(z,Me)}catch(ne){Me(ne)}finally{ie!==null&&ve.types!==null&&(ie.types=ve.types),F.T=ie}},st.unstable_useCacheRefresh=function(){return F.H.useCacheRefresh()},st.use=function(U){return F.H.use(U)},st.useActionState=function(U,ie,ve){return F.H.useActionState(U,ie,ve)},st.useCallback=function(U,ie){return F.H.useCallback(U,ie)},st.useContext=function(U){return F.H.useContext(U)},st.useDebugValue=function(){},st.useDeferredValue=function(U,ie){return F.H.useDeferredValue(U,ie)},st.useEffect=function(U,ie){return F.H.useEffect(U,ie)},st.useEffectEvent=function(U){return F.H.useEffectEvent(U)},st.useId=function(){return F.H.useId()},st.useImperativeHandle=function(U,ie,ve){return F.H.useImperativeHandle(U,ie,ve)},st.useInsertionEffect=function(U,ie){return F.H.useInsertionEffect(U,ie)},st.useLayoutEffect=function(U,ie){return F.H.useLayoutEffect(U,ie)},st.useMemo=function(U,ie){return F.H.useMemo(U,ie)},st.useOptimistic=function(U,ie){return F.H.useOptimistic(U,ie)},st.useReducer=function(U,ie,ve){return F.H.useReducer(U,ie,ve)},st.useRef=function(U){return F.H.useRef(U)},st.useState=function(U){return F.H.useState(U)},st.useSyncExternalStore=function(U,ie,ve){return F.H.useSyncExternalStore(U,ie,ve)},st.useTransition=function(){return F.H.useTransition()},st.version="19.2.4",st}var Fv;function Ap(){return Fv||(Fv=1,Fd.exports=vM()),Fd.exports}var Ae=Ap();const li=pM(Ae);var Id={exports:{}},Jo={},Bd={exports:{}},zd={};var Iv;function _M(){return Iv||(Iv=1,(function(r){function e(P,H){var ae=P.length;P.push(H);e:for(;0<ae;){var Me=ae-1>>>1,Se=P[Me];if(0<l(Se,H))P[Me]=H,P[ae]=Se,ae=Me;else break e}}function i(P){return P.length===0?null:P[0]}function s(P){if(P.length===0)return null;var H=P[0],ae=P.pop();if(ae!==H){P[0]=ae;e:for(var Me=0,Se=P.length,U=Se>>>1;Me<U;){var ie=2*(Me+1)-1,ve=P[ie],Re=ie+1,He=P[Re];if(0>l(ve,ae))Re<Se&&0>l(He,ve)?(P[Me]=He,P[Re]=ae,Me=Re):(P[Me]=ve,P[ie]=ae,Me=ie);else if(Re<Se&&0>l(He,ae))P[Me]=He,P[Re]=ae,Me=Re;else break e}}return H}function l(P,H){var ae=P.sortIndex-H.sortIndex;return ae!==0?ae:P.id-H.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var c=performance;r.unstable_now=function(){return c.now()}}else{var h=Date,d=h.now();r.unstable_now=function(){return h.now()-d}}var p=[],m=[],g=1,v=null,S=3,y=!1,E=!1,R=!1,M=!1,_=typeof setTimeout=="function"?setTimeout:null,N=typeof clearTimeout=="function"?clearTimeout:null,O=typeof setImmediate<"u"?setImmediate:null;function L(P){for(var H=i(m);H!==null;){if(H.callback===null)s(m);else if(H.startTime<=P)s(m),H.sortIndex=H.expirationTime,e(p,H);else break;H=i(m)}}function I(P){if(R=!1,L(P),!E)if(i(p)!==null)E=!0,z||(z=!0,se());else{var H=i(m);H!==null&&fe(I,H.startTime-P)}}var z=!1,F=-1,K=5,C=-1;function w(){return M?!0:!(r.unstable_now()-C<K)}function k(){if(M=!1,z){var P=r.unstable_now();C=P;var H=!0;try{e:{E=!1,R&&(R=!1,N(F),F=-1),y=!0;var ae=S;try{t:{for(L(P),v=i(p);v!==null&&!(v.expirationTime>P&&w());){var Me=v.callback;if(typeof Me=="function"){v.callback=null,S=v.priorityLevel;var Se=Me(v.expirationTime<=P);if(P=r.unstable_now(),typeof Se=="function"){v.callback=Se,L(P),H=!0;break t}v===i(p)&&s(p),L(P)}else s(p);v=i(p)}if(v!==null)H=!0;else{var U=i(m);U!==null&&fe(I,U.startTime-P),H=!1}}break e}finally{v=null,S=ae,y=!1}H=void 0}}finally{H?se():z=!1}}}var se;if(typeof O=="function")se=function(){O(k)};else if(typeof MessageChannel<"u"){var re=new MessageChannel,pe=re.port2;re.port1.onmessage=k,se=function(){pe.postMessage(null)}}else se=function(){_(k,0)};function fe(P,H){F=_(function(){P(r.unstable_now())},H)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(P){P.callback=null},r.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):K=0<P?Math.floor(1e3/P):5},r.unstable_getCurrentPriorityLevel=function(){return S},r.unstable_next=function(P){switch(S){case 1:case 2:case 3:var H=3;break;default:H=S}var ae=S;S=H;try{return P()}finally{S=ae}},r.unstable_requestPaint=function(){M=!0},r.unstable_runWithPriority=function(P,H){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var ae=S;S=P;try{return H()}finally{S=ae}},r.unstable_scheduleCallback=function(P,H,ae){var Me=r.unstable_now();switch(typeof ae=="object"&&ae!==null?(ae=ae.delay,ae=typeof ae=="number"&&0<ae?Me+ae:Me):ae=Me,P){case 1:var Se=-1;break;case 2:Se=250;break;case 5:Se=1073741823;break;case 4:Se=1e4;break;default:Se=5e3}return Se=ae+Se,P={id:g++,callback:H,priorityLevel:P,startTime:ae,expirationTime:Se,sortIndex:-1},ae>Me?(P.sortIndex=ae,e(m,P),i(p)===null&&P===i(m)&&(R?(N(F),F=-1):R=!0,fe(I,ae-Me))):(P.sortIndex=Se,e(p,P),E||y||(E=!0,z||(z=!0,se()))),P},r.unstable_shouldYield=w,r.unstable_wrapCallback=function(P){var H=S;return function(){var ae=S;S=H;try{return P.apply(this,arguments)}finally{S=ae}}}})(zd)),zd}var Bv;function xM(){return Bv||(Bv=1,Bd.exports=_M()),Bd.exports}var Hd={exports:{}},On={};var zv;function SM(){if(zv)return On;zv=1;var r=Ap();function e(p){var m="https://react.dev/errors/"+p;if(1<arguments.length){m+="?args[]="+encodeURIComponent(arguments[1]);for(var g=2;g<arguments.length;g++)m+="&args[]="+encodeURIComponent(arguments[g])}return"Minified React error #"+p+"; visit "+m+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var s={d:{f:i,r:function(){throw Error(e(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},l=Symbol.for("react.portal");function c(p,m,g){var v=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:l,key:v==null?null:""+v,children:p,containerInfo:m,implementation:g}}var h=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(p,m){if(p==="font")return"";if(typeof m=="string")return m==="use-credentials"?m:""}return On.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=s,On.createPortal=function(p,m){var g=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!m||m.nodeType!==1&&m.nodeType!==9&&m.nodeType!==11)throw Error(e(299));return c(p,m,null,g)},On.flushSync=function(p){var m=h.T,g=s.p;try{if(h.T=null,s.p=2,p)return p()}finally{h.T=m,s.p=g,s.d.f()}},On.preconnect=function(p,m){typeof p=="string"&&(m?(m=m.crossOrigin,m=typeof m=="string"?m==="use-credentials"?m:"":void 0):m=null,s.d.C(p,m))},On.prefetchDNS=function(p){typeof p=="string"&&s.d.D(p)},On.preinit=function(p,m){if(typeof p=="string"&&m&&typeof m.as=="string"){var g=m.as,v=d(g,m.crossOrigin),S=typeof m.integrity=="string"?m.integrity:void 0,y=typeof m.fetchPriority=="string"?m.fetchPriority:void 0;g==="style"?s.d.S(p,typeof m.precedence=="string"?m.precedence:void 0,{crossOrigin:v,integrity:S,fetchPriority:y}):g==="script"&&s.d.X(p,{crossOrigin:v,integrity:S,fetchPriority:y,nonce:typeof m.nonce=="string"?m.nonce:void 0})}},On.preinitModule=function(p,m){if(typeof p=="string")if(typeof m=="object"&&m!==null){if(m.as==null||m.as==="script"){var g=d(m.as,m.crossOrigin);s.d.M(p,{crossOrigin:g,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0})}}else m==null&&s.d.M(p)},On.preload=function(p,m){if(typeof p=="string"&&typeof m=="object"&&m!==null&&typeof m.as=="string"){var g=m.as,v=d(g,m.crossOrigin);s.d.L(p,g,{crossOrigin:v,integrity:typeof m.integrity=="string"?m.integrity:void 0,nonce:typeof m.nonce=="string"?m.nonce:void 0,type:typeof m.type=="string"?m.type:void 0,fetchPriority:typeof m.fetchPriority=="string"?m.fetchPriority:void 0,referrerPolicy:typeof m.referrerPolicy=="string"?m.referrerPolicy:void 0,imageSrcSet:typeof m.imageSrcSet=="string"?m.imageSrcSet:void 0,imageSizes:typeof m.imageSizes=="string"?m.imageSizes:void 0,media:typeof m.media=="string"?m.media:void 0})}},On.preloadModule=function(p,m){if(typeof p=="string")if(m){var g=d(m.as,m.crossOrigin);s.d.m(p,{as:typeof m.as=="string"&&m.as!=="script"?m.as:void 0,crossOrigin:g,integrity:typeof m.integrity=="string"?m.integrity:void 0})}else s.d.m(p)},On.requestFormReset=function(p){s.d.r(p)},On.unstable_batchedUpdates=function(p,m){return p(m)},On.useFormState=function(p,m,g){return h.H.useFormState(p,m,g)},On.useFormStatus=function(){return h.H.useHostTransitionStatus()},On.version="19.2.4",On}var Hv;function yM(){if(Hv)return Hd.exports;Hv=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),Hd.exports=SM(),Hd.exports}var Gv;function MM(){if(Gv)return Jo;Gv=1;var r=xM(),e=Ap(),i=yM();function s(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)n+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function l(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function c(t){var n=t,a=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(a=n.return),t=n.return;while(t)}return n.tag===3?a:null}function h(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function d(t){if(t.tag===31){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function p(t){if(c(t)!==t)throw Error(s(188))}function m(t){var n=t.alternate;if(!n){if(n=c(t),n===null)throw Error(s(188));return n!==t?null:t}for(var a=t,o=n;;){var u=a.return;if(u===null)break;var f=u.alternate;if(f===null){if(o=u.return,o!==null){a=o;continue}break}if(u.child===f.child){for(f=u.child;f;){if(f===a)return p(u),t;if(f===o)return p(u),n;f=f.sibling}throw Error(s(188))}if(a.return!==o.return)a=u,o=f;else{for(var x=!1,T=u.child;T;){if(T===a){x=!0,a=u,o=f;break}if(T===o){x=!0,o=u,a=f;break}T=T.sibling}if(!x){for(T=f.child;T;){if(T===a){x=!0,a=f,o=u;break}if(T===o){x=!0,o=f,a=u;break}T=T.sibling}if(!x)throw Error(s(189))}}if(a.alternate!==o)throw Error(s(190))}if(a.tag!==3)throw Error(s(188));return a.stateNode.current===a?t:n}function g(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=g(t),n!==null)return n;t=t.sibling}return null}var v=Object.assign,S=Symbol.for("react.element"),y=Symbol.for("react.transitional.element"),E=Symbol.for("react.portal"),R=Symbol.for("react.fragment"),M=Symbol.for("react.strict_mode"),_=Symbol.for("react.profiler"),N=Symbol.for("react.consumer"),O=Symbol.for("react.context"),L=Symbol.for("react.forward_ref"),I=Symbol.for("react.suspense"),z=Symbol.for("react.suspense_list"),F=Symbol.for("react.memo"),K=Symbol.for("react.lazy"),C=Symbol.for("react.activity"),w=Symbol.for("react.memo_cache_sentinel"),k=Symbol.iterator;function se(t){return t===null||typeof t!="object"?null:(t=k&&t[k]||t["@@iterator"],typeof t=="function"?t:null)}var re=Symbol.for("react.client.reference");function pe(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===re?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case R:return"Fragment";case _:return"Profiler";case M:return"StrictMode";case I:return"Suspense";case z:return"SuspenseList";case C:return"Activity"}if(typeof t=="object")switch(t.$$typeof){case E:return"Portal";case O:return t.displayName||"Context";case N:return(t._context.displayName||"Context")+".Consumer";case L:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case F:return n=t.displayName||null,n!==null?n:pe(t.type)||"Memo";case K:n=t._payload,t=t._init;try{return pe(t(n))}catch{}}return null}var fe=Array.isArray,P=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,H=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ae={pending:!1,data:null,method:null,action:null},Me=[],Se=-1;function U(t){return{current:t}}function ie(t){0>Se||(t.current=Me[Se],Me[Se]=null,Se--)}function ve(t,n){Se++,Me[Se]=t.current,t.current=n}var Re=U(null),He=U(null),ne=U(null),ue=U(null);function Ue(t,n){switch(ve(ne,n),ve(He,t),ve(Re,null),n.nodeType){case 9:case 11:t=(t=n.documentElement)&&(t=t.namespaceURI)?nv(t):0;break;default:if(t=n.tagName,n=n.namespaceURI)n=nv(n),t=iv(n,t);else switch(t){case"svg":t=1;break;case"math":t=2;break;default:t=0}}ie(Re),ve(Re,t)}function Xe(){ie(Re),ie(He),ie(ne)}function Ge(t){t.memoizedState!==null&&ve(ue,t);var n=Re.current,a=iv(n,t.type);n!==a&&(ve(He,t),ve(Re,a))}function pt(t){He.current===t&&(ie(Re),ie(He)),ue.current===t&&(ie(ue),Yo._currentValue=ae)}var Jt,xt;function mt(t){if(Jt===void 0)try{throw Error()}catch(a){var n=a.stack.trim().match(/\n( *(at )?)/);Jt=n&&n[1]||"",xt=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Jt+t+xt}var Dt=!1;function ot(t,n){if(!t||Dt)return"";Dt=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var o={DetermineComponentFrameRoot:function(){try{if(n){var ge=function(){throw Error()};if(Object.defineProperty(ge.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(ge,[])}catch(le){var te=le}Reflect.construct(t,[],ge)}else{try{ge.call()}catch(le){te=le}t.call(ge.prototype)}}else{try{throw Error()}catch(le){te=le}(ge=t())&&typeof ge.catch=="function"&&ge.catch(function(){})}}catch(le){if(le&&te&&typeof le.stack=="string")return[le.stack,te.stack]}return[null,null]}};o.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var u=Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot,"name");u&&u.configurable&&Object.defineProperty(o.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var f=o.DetermineComponentFrameRoot(),x=f[0],T=f[1];if(x&&T){var B=x.split(`
`),$=T.split(`
`);for(u=o=0;o<B.length&&!B[o].includes("DetermineComponentFrameRoot");)o++;for(;u<$.length&&!$[u].includes("DetermineComponentFrameRoot");)u++;if(o===B.length||u===$.length)for(o=B.length-1,u=$.length-1;1<=o&&0<=u&&B[o]!==$[u];)u--;for(;1<=o&&0<=u;o--,u--)if(B[o]!==$[u]){if(o!==1||u!==1)do if(o--,u--,0>u||B[o]!==$[u]){var de=`
`+B[o].replace(" at new "," at ");return t.displayName&&de.includes("<anonymous>")&&(de=de.replace("<anonymous>",t.displayName)),de}while(1<=o&&0<=u);break}}}finally{Dt=!1,Error.prepareStackTrace=a}return(a=t?t.displayName||t.name:"")?mt(a):""}function en(t,n){switch(t.tag){case 26:case 27:case 5:return mt(t.type);case 16:return mt("Lazy");case 13:return t.child!==n&&n!==null?mt("Suspense Fallback"):mt("Suspense");case 19:return mt("SuspenseList");case 0:case 15:return ot(t.type,!1);case 11:return ot(t.type.render,!1);case 1:return ot(t.type,!0);case 31:return mt("Activity");default:return""}}function G(t){try{var n="",a=null;do n+=en(t,a),a=t,t=t.return;while(t);return n}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}var Kt=Object.prototype.hasOwnProperty,Et=r.unstable_scheduleCallback,Ot=r.unstable_cancelCallback,Ye=r.unstable_shouldYield,D=r.unstable_requestPaint,b=r.unstable_now,W=r.unstable_getCurrentPriorityLevel,he=r.unstable_ImmediatePriority,xe=r.unstable_UserBlockingPriority,ce=r.unstable_NormalPriority,Ke=r.unstable_LowPriority,we=r.unstable_IdlePriority,We=r.log,nt=r.unstable_setDisableYieldValue,be=null,Ee=null;function Be(t){if(typeof We=="function"&&nt(t),Ee&&typeof Ee.setStrictMode=="function")try{Ee.setStrictMode(be,t)}catch{}}var Fe=Math.clz32?Math.clz32:X,De=Math.log,ct=Math.LN2;function X(t){return t>>>=0,t===0?32:31-(De(t)/ct|0)|0}var Le=256,Te=262144,Ie=4194304;function ye(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return t&261888;case 262144:case 524288:case 1048576:case 2097152:return t&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function _e(t,n,a){var o=t.pendingLanes;if(o===0)return 0;var u=0,f=t.suspendedLanes,x=t.pingedLanes;t=t.warmLanes;var T=o&134217727;return T!==0?(o=T&~f,o!==0?u=ye(o):(x&=T,x!==0?u=ye(x):a||(a=T&~t,a!==0&&(u=ye(a))))):(T=o&~f,T!==0?u=ye(T):x!==0?u=ye(x):a||(a=o&~t,a!==0&&(u=ye(a)))),u===0?0:n!==0&&n!==u&&(n&f)===0&&(f=u&-u,a=n&-n,f>=a||f===32&&(a&4194048)!==0)?n:u}function Ce(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function it(t,n){switch(t){case 1:case 2:case 4:case 8:case 64:return n+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ft(){var t=Ie;return Ie<<=1,(Ie&62914560)===0&&(Ie=4194304),t}function Tt(t){for(var n=[],a=0;31>a;a++)n.push(t);return n}function Ln(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function yi(t,n,a,o,u,f){var x=t.pendingLanes;t.pendingLanes=a,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=a,t.entangledLanes&=a,t.errorRecoveryDisabledLanes&=a,t.shellSuspendCounter=0;var T=t.entanglements,B=t.expirationTimes,$=t.hiddenUpdates;for(a=x&~a;0<a;){var de=31-Fe(a),ge=1<<de;T[de]=0,B[de]=-1;var te=$[de];if(te!==null)for($[de]=null,de=0;de<te.length;de++){var le=te[de];le!==null&&(le.lane&=-536870913)}a&=~ge}o!==0&&Tl(t,o,0),f!==0&&u===0&&t.tag!==0&&(t.suspendedLanes|=f&~(x&~n))}function Tl(t,n,a){t.pendingLanes|=n,t.suspendedLanes&=~n;var o=31-Fe(n);t.entangledLanes|=n,t.entanglements[o]=t.entanglements[o]|1073741824|a&261930}function ro(t,n){var a=t.entangledLanes|=n;for(t=t.entanglements;a;){var o=31-Fe(a),u=1<<o;u&n|t[o]&n&&(t[o]|=n),a&=~u}}function Vr(t,n){var a=n&-n;return a=(a&42)!==0?1:so(a),(a&(t.suspendedLanes|n))!==0?0:a}function so(t){switch(t){case 2:t=1;break;case 8:t=4;break;case 32:t=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:t=128;break;case 268435456:t=134217728;break;default:t=0}return t}function kr(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function oo(){var t=H.p;return t!==0?t:(t=window.event,t===void 0?32:Av(t.type))}function Fi(t,n){var a=H.p;try{return H.p=t,n()}finally{H.p=a}}var ci=Math.random().toString(36).slice(2),cn="__reactFiber$"+ci,Mn="__reactProps$"+ci,Mi="__reactContainer$"+ci,Xr="__reactEvents$"+ci,Wr="__reactListeners$"+ci,Al="__reactHandles$"+ci,lo="__reactResources$"+ci,ur="__reactMarker$"+ci;function co(t){delete t[cn],delete t[Mn],delete t[Xr],delete t[Wr],delete t[Al]}function Aa(t){var n=t[cn];if(n)return n;for(var a=t.parentNode;a;){if(n=a[Mi]||a[cn]){if(a=n.alternate,n.child!==null||a!==null&&a.child!==null)for(t=uv(t);t!==null;){if(a=t[cn])return a;t=uv(t)}return n}t=a,a=t.parentNode}return null}function Ra(t){if(t=t[cn]||t[Mi]){var n=t.tag;if(n===5||n===6||n===13||n===31||n===26||n===27||n===3)return t}return null}function fr(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(s(33))}function Ca(t){var n=t[lo];return n||(n=t[lo]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function A(t){t[ur]=!0}var q=new Set,oe={};function ee(t,n){Y(t,n),Y(t+"Capture",n)}function Y(t,n){for(oe[t]=n,t=0;t<n.length;t++)q.add(n[t])}var Ne=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),ze={},Oe={};function Ve(t){return Kt.call(Oe,t)?!0:Kt.call(ze,t)?!1:Ne.test(t)?Oe[t]=!0:(ze[t]=!0,!1)}function qe(t,n,a){if(Ve(n))if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var o=n.toLowerCase().slice(0,5);if(o!=="data-"&&o!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+a)}}function Je(t,n,a){if(a===null)t.removeAttribute(n);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+a)}}function je(t,n,a,o){if(o===null)t.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(a);return}t.setAttributeNS(n,a,""+o)}}function et(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Ut(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Qt(t,n,a){var o=Object.getOwnPropertyDescriptor(t.constructor.prototype,n);if(!t.hasOwnProperty(n)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var u=o.get,f=o.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return u.call(this)},set:function(x){a=""+x,f.call(this,x)}}),Object.defineProperty(t,n,{enumerable:o.enumerable}),{getValue:function(){return a},setValue:function(x){a=""+x},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function Wt(t){if(!t._valueTracker){var n=Ut(t)?"checked":"value";t._valueTracker=Qt(t,n,""+t[n])}}function Pt(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var a=n.getValue(),o="";return t&&(o=Ut(t)?t.checked?"true":"false":t.value),t=o,t!==a?(n.setValue(t),!0):!1}function Qe(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Nt=/[\n"\\]/g;function at(t){return t.replace(Nt,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function bn(t,n,a,o,u,f,x,T){t.name="",x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"?t.type=x:t.removeAttribute("type"),n!=null?x==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+et(n)):t.value!==""+et(n)&&(t.value=""+et(n)):x!=="submit"&&x!=="reset"||t.removeAttribute("value"),n!=null?En(t,x,et(n)):a!=null?En(t,x,et(a)):o!=null&&t.removeAttribute("value"),u==null&&f!=null&&(t.defaultChecked=!!f),u!=null&&(t.checked=u&&typeof u!="function"&&typeof u!="symbol"),T!=null&&typeof T!="function"&&typeof T!="symbol"&&typeof T!="boolean"?t.name=""+et(T):t.removeAttribute("name")}function Ki(t,n,a,o,u,f,x,T){if(f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"&&(t.type=f),n!=null||a!=null){if(!(f!=="submit"&&f!=="reset"||n!=null)){Wt(t);return}a=a!=null?""+et(a):"",n=n!=null?""+et(n):a,T||n===t.value||(t.value=n),t.defaultValue=n}o=o??u,o=typeof o!="function"&&typeof o!="symbol"&&!!o,t.checked=T?t.checked:!!o,t.defaultChecked=!!o,x!=null&&typeof x!="function"&&typeof x!="symbol"&&typeof x!="boolean"&&(t.name=x),Wt(t)}function En(t,n,a){n==="number"&&Qe(t.ownerDocument)===t||t.defaultValue===""+a||(t.defaultValue=""+a)}function ui(t,n,a,o){if(t=t.options,n){n={};for(var u=0;u<a.length;u++)n["$"+a[u]]=!0;for(a=0;a<t.length;a++)u=n.hasOwnProperty("$"+t[a].value),t[a].selected!==u&&(t[a].selected=u),u&&o&&(t[a].defaultSelected=!0)}else{for(a=""+et(a),n=null,u=0;u<t.length;u++){if(t[u].value===a){t[u].selected=!0,o&&(t[u].defaultSelected=!0);return}n!==null||t[u].disabled||(n=t[u])}n!==null&&(n.selected=!0)}}function It(t,n,a){if(n!=null&&(n=""+et(n),n!==t.value&&(t.value=n),a==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=a!=null?""+et(a):""}function Tn(t,n,a,o){if(n==null){if(o!=null){if(a!=null)throw Error(s(92));if(fe(o)){if(1<o.length)throw Error(s(93));o=o[0]}a=o}a==null&&(a=""),n=a}a=et(n),t.defaultValue=a,o=t.textContent,o===a&&o!==""&&o!==null&&(t.value=o),Wt(t)}function mn(t,n){if(n){var a=t.firstChild;if(a&&a===t.lastChild&&a.nodeType===3){a.nodeValue=n;return}}t.textContent=n}var An=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Rn(t,n,a){var o=n.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?o?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":o?t.setProperty(n,a):typeof a!="number"||a===0||An.has(n)?n==="float"?t.cssFloat=a:t[n]=(""+a).trim():t[n]=a+"px"}function qr(t,n,a){if(n!=null&&typeof n!="object")throw Error(s(62));if(t=t.style,a!=null){for(var o in a)!a.hasOwnProperty(o)||n!=null&&n.hasOwnProperty(o)||(o.indexOf("--")===0?t.setProperty(o,""):o==="float"?t.cssFloat="":t[o]="");for(var u in n)o=n[u],n.hasOwnProperty(u)&&a[u]!==o&&Rn(t,u,o)}else for(var f in n)n.hasOwnProperty(f)&&Rn(t,f,n[f])}function bi(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var uS=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),fS=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Rl(t){return fS.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}function Qi(){}var Uu=null;function Nu(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var jr=null,Yr=null;function tm(t){var n=Ra(t);if(n&&(t=n.stateNode)){var a=t[Mn]||null;e:switch(t=n.stateNode,n.type){case"input":if(bn(t,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),n=a.name,a.type==="radio"&&n!=null){for(a=t;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+at(""+n)+'"][type="radio"]'),n=0;n<a.length;n++){var o=a[n];if(o!==t&&o.form===t.form){var u=o[Mn]||null;if(!u)throw Error(s(90));bn(o,u.value,u.defaultValue,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name)}}for(n=0;n<a.length;n++)o=a[n],o.form===t.form&&Pt(o)}break e;case"textarea":It(t,a.value,a.defaultValue);break e;case"select":n=a.value,n!=null&&ui(t,!!a.multiple,n,!1)}}}var Lu=!1;function nm(t,n,a){if(Lu)return t(n,a);Lu=!0;try{var o=t(n);return o}finally{if(Lu=!1,(jr!==null||Yr!==null)&&(pc(),jr&&(n=jr,t=Yr,Yr=jr=null,tm(n),t)))for(n=0;n<t.length;n++)tm(t[n])}}function uo(t,n){var a=t.stateNode;if(a===null)return null;var o=a[Mn]||null;if(o===null)return null;a=o[n];e:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(o=!o.disabled)||(t=t.type,o=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!o;break e;default:t=!1}if(t)return null;if(a&&typeof a!="function")throw Error(s(231,n,typeof a));return a}var $i=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ou=!1;if($i)try{var fo={};Object.defineProperty(fo,"passive",{get:function(){Ou=!0}}),window.addEventListener("test",fo,fo),window.removeEventListener("test",fo,fo)}catch{Ou=!1}var wa=null,Pu=null,Cl=null;function im(){if(Cl)return Cl;var t,n=Pu,a=n.length,o,u="value"in wa?wa.value:wa.textContent,f=u.length;for(t=0;t<a&&n[t]===u[t];t++);var x=a-t;for(o=1;o<=x&&n[a-o]===u[f-o];o++);return Cl=u.slice(t,1<o?1-o:void 0)}function wl(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function Dl(){return!0}function am(){return!1}function Xn(t){function n(a,o,u,f,x){this._reactName=a,this._targetInst=u,this.type=o,this.nativeEvent=f,this.target=x,this.currentTarget=null;for(var T in t)t.hasOwnProperty(T)&&(a=t[T],this[T]=a?a(f):f[T]);return this.isDefaultPrevented=(f.defaultPrevented!=null?f.defaultPrevented:f.returnValue===!1)?Dl:am,this.isPropagationStopped=am,this}return v(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Dl)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Dl)},persist:function(){},isPersistent:Dl}),n}var dr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ul=Xn(dr),ho=v({},dr,{view:0,detail:0}),dS=Xn(ho),Fu,Iu,po,Nl=v({},ho,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:zu,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==po&&(po&&t.type==="mousemove"?(Fu=t.screenX-po.screenX,Iu=t.screenY-po.screenY):Iu=Fu=0,po=t),Fu)},movementY:function(t){return"movementY"in t?t.movementY:Iu}}),rm=Xn(Nl),hS=v({},Nl,{dataTransfer:0}),pS=Xn(hS),mS=v({},ho,{relatedTarget:0}),Bu=Xn(mS),gS=v({},dr,{animationName:0,elapsedTime:0,pseudoElement:0}),vS=Xn(gS),_S=v({},dr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),xS=Xn(_S),SS=v({},dr,{data:0}),sm=Xn(SS),yS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},MS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},bS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ES(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=bS[t])?!!n[t]:!1}function zu(){return ES}var TS=v({},ho,{key:function(t){if(t.key){var n=yS[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=wl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?MS[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:zu,charCode:function(t){return t.type==="keypress"?wl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?wl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),AS=Xn(TS),RS=v({},Nl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),om=Xn(RS),CS=v({},ho,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:zu}),wS=Xn(CS),DS=v({},dr,{propertyName:0,elapsedTime:0,pseudoElement:0}),US=Xn(DS),NS=v({},Nl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),LS=Xn(NS),OS=v({},dr,{newState:0,oldState:0}),PS=Xn(OS),FS=[9,13,27,32],Hu=$i&&"CompositionEvent"in window,mo=null;$i&&"documentMode"in document&&(mo=document.documentMode);var IS=$i&&"TextEvent"in window&&!mo,lm=$i&&(!Hu||mo&&8<mo&&11>=mo),cm=" ",um=!1;function fm(t,n){switch(t){case"keyup":return FS.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function dm(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Zr=!1;function BS(t,n){switch(t){case"compositionend":return dm(n);case"keypress":return n.which!==32?null:(um=!0,cm);case"textInput":return t=n.data,t===cm&&um?null:t;default:return null}}function zS(t,n){if(Zr)return t==="compositionend"||!Hu&&fm(t,n)?(t=im(),Cl=Pu=wa=null,Zr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return lm&&n.locale!=="ko"?null:n.data;default:return null}}var HS={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function hm(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!HS[t.type]:n==="textarea"}function pm(t,n,a,o){jr?Yr?Yr.push(o):Yr=[o]:jr=o,n=yc(n,"onChange"),0<n.length&&(a=new Ul("onChange","change",null,a,o),t.push({event:a,listeners:n}))}var go=null,vo=null;function GS(t){K0(t,0)}function Ll(t){var n=fr(t);if(Pt(n))return t}function mm(t,n){if(t==="change")return n}var gm=!1;if($i){var Gu;if($i){var Vu="oninput"in document;if(!Vu){var vm=document.createElement("div");vm.setAttribute("oninput","return;"),Vu=typeof vm.oninput=="function"}Gu=Vu}else Gu=!1;gm=Gu&&(!document.documentMode||9<document.documentMode)}function _m(){go&&(go.detachEvent("onpropertychange",xm),vo=go=null)}function xm(t){if(t.propertyName==="value"&&Ll(vo)){var n=[];pm(n,vo,t,Nu(t)),nm(GS,n)}}function VS(t,n,a){t==="focusin"?(_m(),go=n,vo=a,go.attachEvent("onpropertychange",xm)):t==="focusout"&&_m()}function kS(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Ll(vo)}function XS(t,n){if(t==="click")return Ll(n)}function WS(t,n){if(t==="input"||t==="change")return Ll(n)}function qS(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var Kn=typeof Object.is=="function"?Object.is:qS;function _o(t,n){if(Kn(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var a=Object.keys(t),o=Object.keys(n);if(a.length!==o.length)return!1;for(o=0;o<a.length;o++){var u=a[o];if(!Kt.call(n,u)||!Kn(t[u],n[u]))return!1}return!0}function Sm(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function ym(t,n){var a=Sm(t);t=0;for(var o;a;){if(a.nodeType===3){if(o=t+a.textContent.length,t<=n&&o>=n)return{node:a,offset:n-t};t=o}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=Sm(a)}}function Mm(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?Mm(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function bm(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=Qe(t.document);n instanceof t.HTMLIFrameElement;){try{var a=typeof n.contentWindow.location.href=="string"}catch{a=!1}if(a)t=n.contentWindow;else break;n=Qe(t.document)}return n}function ku(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}var jS=$i&&"documentMode"in document&&11>=document.documentMode,Kr=null,Xu=null,xo=null,Wu=!1;function Em(t,n,a){var o=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Wu||Kr==null||Kr!==Qe(o)||(o=Kr,"selectionStart"in o&&ku(o)?o={start:o.selectionStart,end:o.selectionEnd}:(o=(o.ownerDocument&&o.ownerDocument.defaultView||window).getSelection(),o={anchorNode:o.anchorNode,anchorOffset:o.anchorOffset,focusNode:o.focusNode,focusOffset:o.focusOffset}),xo&&_o(xo,o)||(xo=o,o=yc(Xu,"onSelect"),0<o.length&&(n=new Ul("onSelect","select",null,n,a),t.push({event:n,listeners:o}),n.target=Kr)))}function hr(t,n){var a={};return a[t.toLowerCase()]=n.toLowerCase(),a["Webkit"+t]="webkit"+n,a["Moz"+t]="moz"+n,a}var Qr={animationend:hr("Animation","AnimationEnd"),animationiteration:hr("Animation","AnimationIteration"),animationstart:hr("Animation","AnimationStart"),transitionrun:hr("Transition","TransitionRun"),transitionstart:hr("Transition","TransitionStart"),transitioncancel:hr("Transition","TransitionCancel"),transitionend:hr("Transition","TransitionEnd")},qu={},Tm={};$i&&(Tm=document.createElement("div").style,"AnimationEvent"in window||(delete Qr.animationend.animation,delete Qr.animationiteration.animation,delete Qr.animationstart.animation),"TransitionEvent"in window||delete Qr.transitionend.transition);function pr(t){if(qu[t])return qu[t];if(!Qr[t])return t;var n=Qr[t],a;for(a in n)if(n.hasOwnProperty(a)&&a in Tm)return qu[t]=n[a];return t}var Am=pr("animationend"),Rm=pr("animationiteration"),Cm=pr("animationstart"),YS=pr("transitionrun"),ZS=pr("transitionstart"),KS=pr("transitioncancel"),wm=pr("transitionend"),Dm=new Map,ju="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");ju.push("scrollEnd");function Ei(t,n){Dm.set(t,n),ee(n,[t])}var Ol=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)},fi=[],$r=0,Yu=0;function Pl(){for(var t=$r,n=Yu=$r=0;n<t;){var a=fi[n];fi[n++]=null;var o=fi[n];fi[n++]=null;var u=fi[n];fi[n++]=null;var f=fi[n];if(fi[n++]=null,o!==null&&u!==null){var x=o.pending;x===null?u.next=u:(u.next=x.next,x.next=u),o.pending=u}f!==0&&Um(a,u,f)}}function Fl(t,n,a,o){fi[$r++]=t,fi[$r++]=n,fi[$r++]=a,fi[$r++]=o,Yu|=o,t.lanes|=o,t=t.alternate,t!==null&&(t.lanes|=o)}function Zu(t,n,a,o){return Fl(t,n,a,o),Il(t)}function mr(t,n){return Fl(t,null,null,n),Il(t)}function Um(t,n,a){t.lanes|=a;var o=t.alternate;o!==null&&(o.lanes|=a);for(var u=!1,f=t.return;f!==null;)f.childLanes|=a,o=f.alternate,o!==null&&(o.childLanes|=a),f.tag===22&&(t=f.stateNode,t===null||t._visibility&1||(u=!0)),t=f,f=f.return;return t.tag===3?(f=t.stateNode,u&&n!==null&&(u=31-Fe(a),t=f.hiddenUpdates,o=t[u],o===null?t[u]=[n]:o.push(n),n.lane=a|536870912),f):null}function Il(t){if(50<Go)throw Go=0,rd=null,Error(s(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var Jr={};function QS(t,n,a,o){this.tag=t,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=o,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Qn(t,n,a,o){return new QS(t,n,a,o)}function Ku(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Ji(t,n){var a=t.alternate;return a===null?(a=Qn(t.tag,n,t.key,t.mode),a.elementType=t.elementType,a.type=t.type,a.stateNode=t.stateNode,a.alternate=t,t.alternate=a):(a.pendingProps=n,a.type=t.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=t.flags&65011712,a.childLanes=t.childLanes,a.lanes=t.lanes,a.child=t.child,a.memoizedProps=t.memoizedProps,a.memoizedState=t.memoizedState,a.updateQueue=t.updateQueue,n=t.dependencies,a.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},a.sibling=t.sibling,a.index=t.index,a.ref=t.ref,a.refCleanup=t.refCleanup,a}function Nm(t,n){t.flags&=65011714;var a=t.alternate;return a===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=a.childLanes,t.lanes=a.lanes,t.child=a.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=a.memoizedProps,t.memoizedState=a.memoizedState,t.updateQueue=a.updateQueue,t.type=a.type,n=a.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function Bl(t,n,a,o,u,f){var x=0;if(o=t,typeof t=="function")Ku(t)&&(x=1);else if(typeof t=="string")x=nM(t,a,Re.current)?26:t==="html"||t==="head"||t==="body"?27:5;else e:switch(t){case C:return t=Qn(31,a,n,u),t.elementType=C,t.lanes=f,t;case R:return gr(a.children,u,f,n);case M:x=8,u|=24;break;case _:return t=Qn(12,a,n,u|2),t.elementType=_,t.lanes=f,t;case I:return t=Qn(13,a,n,u),t.elementType=I,t.lanes=f,t;case z:return t=Qn(19,a,n,u),t.elementType=z,t.lanes=f,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case O:x=10;break e;case N:x=9;break e;case L:x=11;break e;case F:x=14;break e;case K:x=16,o=null;break e}x=29,a=Error(s(130,t===null?"null":typeof t,"")),o=null}return n=Qn(x,a,n,u),n.elementType=t,n.type=o,n.lanes=f,n}function gr(t,n,a,o){return t=Qn(7,t,o,n),t.lanes=a,t}function Qu(t,n,a){return t=Qn(6,t,null,n),t.lanes=a,t}function Lm(t){var n=Qn(18,null,null,0);return n.stateNode=t,n}function $u(t,n,a){return n=Qn(4,t.children!==null?t.children:[],t.key,n),n.lanes=a,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}var Om=new WeakMap;function di(t,n){if(typeof t=="object"&&t!==null){var a=Om.get(t);return a!==void 0?a:(n={value:t,source:n,stack:G(n)},Om.set(t,n),n)}return{value:t,source:n,stack:G(n)}}var es=[],ts=0,zl=null,So=0,hi=[],pi=0,Da=null,Ii=1,Bi="";function ea(t,n){es[ts++]=So,es[ts++]=zl,zl=t,So=n}function Pm(t,n,a){hi[pi++]=Ii,hi[pi++]=Bi,hi[pi++]=Da,Da=t;var o=Ii;t=Bi;var u=32-Fe(o)-1;o&=~(1<<u),a+=1;var f=32-Fe(n)+u;if(30<f){var x=u-u%5;f=(o&(1<<x)-1).toString(32),o>>=x,u-=x,Ii=1<<32-Fe(n)+u|a<<u|o,Bi=f+t}else Ii=1<<f|a<<u|o,Bi=t}function Ju(t){t.return!==null&&(ea(t,1),Pm(t,1,0))}function ef(t){for(;t===zl;)zl=es[--ts],es[ts]=null,So=es[--ts],es[ts]=null;for(;t===Da;)Da=hi[--pi],hi[pi]=null,Bi=hi[--pi],hi[pi]=null,Ii=hi[--pi],hi[pi]=null}function Fm(t,n){hi[pi++]=Ii,hi[pi++]=Bi,hi[pi++]=Da,Ii=n.id,Bi=n.overflow,Da=t}var Cn=null,jt=null,bt=!1,Ua=null,mi=!1,tf=Error(s(519));function Na(t){var n=Error(s(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw yo(di(n,t)),tf}function Im(t){var n=t.stateNode,a=t.type,o=t.memoizedProps;switch(n[cn]=t,n[Mn]=o,a){case"dialog":vt("cancel",n),vt("close",n);break;case"iframe":case"object":case"embed":vt("load",n);break;case"video":case"audio":for(a=0;a<ko.length;a++)vt(ko[a],n);break;case"source":vt("error",n);break;case"img":case"image":case"link":vt("error",n),vt("load",n);break;case"details":vt("toggle",n);break;case"input":vt("invalid",n),Ki(n,o.value,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name,!0);break;case"select":vt("invalid",n);break;case"textarea":vt("invalid",n),Tn(n,o.value,o.defaultValue,o.children)}a=o.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||n.textContent===""+a||o.suppressHydrationWarning===!0||ev(n.textContent,a)?(o.popover!=null&&(vt("beforetoggle",n),vt("toggle",n)),o.onScroll!=null&&vt("scroll",n),o.onScrollEnd!=null&&vt("scrollend",n),o.onClick!=null&&(n.onclick=Qi),n=!0):n=!1,n||Na(t,!0)}function Bm(t){for(Cn=t.return;Cn;)switch(Cn.tag){case 5:case 31:case 13:mi=!1;return;case 27:case 3:mi=!0;return;default:Cn=Cn.return}}function ns(t){if(t!==Cn)return!1;if(!bt)return Bm(t),bt=!0,!1;var n=t.tag,a;if((a=n!==3&&n!==27)&&((a=n===5)&&(a=t.type,a=!(a!=="form"&&a!=="button")||Sd(t.type,t.memoizedProps)),a=!a),a&&jt&&Na(t),Bm(t),n===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));jt=cv(t)}else if(n===31){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(317));jt=cv(t)}else n===27?(n=jt,qa(t.type)?(t=Td,Td=null,jt=t):jt=n):jt=Cn?vi(t.stateNode.nextSibling):null;return!0}function vr(){jt=Cn=null,bt=!1}function nf(){var t=Ua;return t!==null&&(Yn===null?Yn=t:Yn.push.apply(Yn,t),Ua=null),t}function yo(t){Ua===null?Ua=[t]:Ua.push(t)}var af=U(null),_r=null,ta=null;function La(t,n,a){ve(af,n._currentValue),n._currentValue=a}function na(t){t._currentValue=af.current,ie(af)}function rf(t,n,a){for(;t!==null;){var o=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,o!==null&&(o.childLanes|=n)):o!==null&&(o.childLanes&n)!==n&&(o.childLanes|=n),t===a)break;t=t.return}}function sf(t,n,a,o){var u=t.child;for(u!==null&&(u.return=t);u!==null;){var f=u.dependencies;if(f!==null){var x=u.child;f=f.firstContext;e:for(;f!==null;){var T=f;f=u;for(var B=0;B<n.length;B++)if(T.context===n[B]){f.lanes|=a,T=f.alternate,T!==null&&(T.lanes|=a),rf(f.return,a,t),o||(x=null);break e}f=T.next}}else if(u.tag===18){if(x=u.return,x===null)throw Error(s(341));x.lanes|=a,f=x.alternate,f!==null&&(f.lanes|=a),rf(x,a,t),x=null}else x=u.child;if(x!==null)x.return=u;else for(x=u;x!==null;){if(x===t){x=null;break}if(u=x.sibling,u!==null){u.return=x.return,x=u;break}x=x.return}u=x}}function is(t,n,a,o){t=null;for(var u=n,f=!1;u!==null;){if(!f){if((u.flags&524288)!==0)f=!0;else if((u.flags&262144)!==0)break}if(u.tag===10){var x=u.alternate;if(x===null)throw Error(s(387));if(x=x.memoizedProps,x!==null){var T=u.type;Kn(u.pendingProps.value,x.value)||(t!==null?t.push(T):t=[T])}}else if(u===ue.current){if(x=u.alternate,x===null)throw Error(s(387));x.memoizedState.memoizedState!==u.memoizedState.memoizedState&&(t!==null?t.push(Yo):t=[Yo])}u=u.return}t!==null&&sf(n,t,a,o),n.flags|=262144}function Hl(t){for(t=t.firstContext;t!==null;){if(!Kn(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function xr(t){_r=t,ta=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function wn(t){return zm(_r,t)}function Gl(t,n){return _r===null&&xr(t),zm(t,n)}function zm(t,n){var a=n._currentValue;if(n={context:n,memoizedValue:a,next:null},ta===null){if(t===null)throw Error(s(308));ta=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else ta=ta.next=n;return a}var $S=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(a,o){t.push(o)}};this.abort=function(){n.aborted=!0,t.forEach(function(a){return a()})}},JS=r.unstable_scheduleCallback,ey=r.unstable_NormalPriority,un={$$typeof:O,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function of(){return{controller:new $S,data:new Map,refCount:0}}function Mo(t){t.refCount--,t.refCount===0&&JS(ey,function(){t.controller.abort()})}var bo=null,lf=0,as=0,rs=null;function ty(t,n){if(bo===null){var a=bo=[];lf=0,as=fd(),rs={status:"pending",value:void 0,then:function(o){a.push(o)}}}return lf++,n.then(Hm,Hm),n}function Hm(){if(--lf===0&&bo!==null){rs!==null&&(rs.status="fulfilled");var t=bo;bo=null,as=0,rs=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function ny(t,n){var a=[],o={status:"pending",value:null,reason:null,then:function(u){a.push(u)}};return t.then(function(){o.status="fulfilled",o.value=n;for(var u=0;u<a.length;u++)(0,a[u])(n)},function(u){for(o.status="rejected",o.reason=u,u=0;u<a.length;u++)(0,a[u])(void 0)}),o}var Gm=P.S;P.S=function(t,n){E0=b(),typeof n=="object"&&n!==null&&typeof n.then=="function"&&ty(t,n),Gm!==null&&Gm(t,n)};var Sr=U(null);function cf(){var t=Sr.current;return t!==null?t:Xt.pooledCache}function Vl(t,n){n===null?ve(Sr,Sr.current):ve(Sr,n.pool)}function Vm(){var t=cf();return t===null?null:{parent:un._currentValue,pool:t}}var ss=Error(s(460)),uf=Error(s(474)),kl=Error(s(542)),Xl={then:function(){}};function km(t){return t=t.status,t==="fulfilled"||t==="rejected"}function Xm(t,n,a){switch(a=t[a],a===void 0?t.push(n):a!==n&&(n.then(Qi,Qi),n=a),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,qm(t),t;default:if(typeof n.status=="string")n.then(Qi,Qi);else{if(t=Xt,t!==null&&100<t.shellSuspendCounter)throw Error(s(482));t=n,t.status="pending",t.then(function(o){if(n.status==="pending"){var u=n;u.status="fulfilled",u.value=o}},function(o){if(n.status==="pending"){var u=n;u.status="rejected",u.reason=o}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,qm(t),t}throw Mr=n,ss}}function yr(t){try{var n=t._init;return n(t._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(Mr=a,ss):a}}var Mr=null;function Wm(){if(Mr===null)throw Error(s(459));var t=Mr;return Mr=null,t}function qm(t){if(t===ss||t===kl)throw Error(s(483))}var os=null,Eo=0;function Wl(t){var n=Eo;return Eo+=1,os===null&&(os=[]),Xm(os,t,n)}function To(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function ql(t,n){throw n.$$typeof===S?Error(s(525)):(t=Object.prototype.toString.call(n),Error(s(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function jm(t){function n(j,V){if(t){var Q=j.deletions;Q===null?(j.deletions=[V],j.flags|=16):Q.push(V)}}function a(j,V){if(!t)return null;for(;V!==null;)n(j,V),V=V.sibling;return null}function o(j){for(var V=new Map;j!==null;)j.key!==null?V.set(j.key,j):V.set(j.index,j),j=j.sibling;return V}function u(j,V){return j=Ji(j,V),j.index=0,j.sibling=null,j}function f(j,V,Q){return j.index=Q,t?(Q=j.alternate,Q!==null?(Q=Q.index,Q<V?(j.flags|=67108866,V):Q):(j.flags|=67108866,V)):(j.flags|=1048576,V)}function x(j){return t&&j.alternate===null&&(j.flags|=67108866),j}function T(j,V,Q,me){return V===null||V.tag!==6?(V=Qu(Q,j.mode,me),V.return=j,V):(V=u(V,Q),V.return=j,V)}function B(j,V,Q,me){var $e=Q.type;return $e===R?de(j,V,Q.props.children,me,Q.key):V!==null&&(V.elementType===$e||typeof $e=="object"&&$e!==null&&$e.$$typeof===K&&yr($e)===V.type)?(V=u(V,Q.props),To(V,Q),V.return=j,V):(V=Bl(Q.type,Q.key,Q.props,null,j.mode,me),To(V,Q),V.return=j,V)}function $(j,V,Q,me){return V===null||V.tag!==4||V.stateNode.containerInfo!==Q.containerInfo||V.stateNode.implementation!==Q.implementation?(V=$u(Q,j.mode,me),V.return=j,V):(V=u(V,Q.children||[]),V.return=j,V)}function de(j,V,Q,me,$e){return V===null||V.tag!==7?(V=gr(Q,j.mode,me,$e),V.return=j,V):(V=u(V,Q),V.return=j,V)}function ge(j,V,Q){if(typeof V=="string"&&V!==""||typeof V=="number"||typeof V=="bigint")return V=Qu(""+V,j.mode,Q),V.return=j,V;if(typeof V=="object"&&V!==null){switch(V.$$typeof){case y:return Q=Bl(V.type,V.key,V.props,null,j.mode,Q),To(Q,V),Q.return=j,Q;case E:return V=$u(V,j.mode,Q),V.return=j,V;case K:return V=yr(V),ge(j,V,Q)}if(fe(V)||se(V))return V=gr(V,j.mode,Q,null),V.return=j,V;if(typeof V.then=="function")return ge(j,Wl(V),Q);if(V.$$typeof===O)return ge(j,Gl(j,V),Q);ql(j,V)}return null}function te(j,V,Q,me){var $e=V!==null?V.key:null;if(typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint")return $e!==null?null:T(j,V,""+Q,me);if(typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case y:return Q.key===$e?B(j,V,Q,me):null;case E:return Q.key===$e?$(j,V,Q,me):null;case K:return Q=yr(Q),te(j,V,Q,me)}if(fe(Q)||se(Q))return $e!==null?null:de(j,V,Q,me,null);if(typeof Q.then=="function")return te(j,V,Wl(Q),me);if(Q.$$typeof===O)return te(j,V,Gl(j,Q),me);ql(j,Q)}return null}function le(j,V,Q,me,$e){if(typeof me=="string"&&me!==""||typeof me=="number"||typeof me=="bigint")return j=j.get(Q)||null,T(V,j,""+me,$e);if(typeof me=="object"&&me!==null){switch(me.$$typeof){case y:return j=j.get(me.key===null?Q:me.key)||null,B(V,j,me,$e);case E:return j=j.get(me.key===null?Q:me.key)||null,$(V,j,me,$e);case K:return me=yr(me),le(j,V,Q,me,$e)}if(fe(me)||se(me))return j=j.get(Q)||null,de(V,j,me,$e,null);if(typeof me.then=="function")return le(j,V,Q,Wl(me),$e);if(me.$$typeof===O)return le(j,V,Q,Gl(V,me),$e);ql(V,me)}return null}function ke(j,V,Q,me){for(var $e=null,Ct=null,Ze=V,ut=V=0,yt=null;Ze!==null&&ut<Q.length;ut++){Ze.index>ut?(yt=Ze,Ze=null):yt=Ze.sibling;var wt=te(j,Ze,Q[ut],me);if(wt===null){Ze===null&&(Ze=yt);break}t&&Ze&&wt.alternate===null&&n(j,Ze),V=f(wt,V,ut),Ct===null?$e=wt:Ct.sibling=wt,Ct=wt,Ze=yt}if(ut===Q.length)return a(j,Ze),bt&&ea(j,ut),$e;if(Ze===null){for(;ut<Q.length;ut++)Ze=ge(j,Q[ut],me),Ze!==null&&(V=f(Ze,V,ut),Ct===null?$e=Ze:Ct.sibling=Ze,Ct=Ze);return bt&&ea(j,ut),$e}for(Ze=o(Ze);ut<Q.length;ut++)yt=le(Ze,j,ut,Q[ut],me),yt!==null&&(t&&yt.alternate!==null&&Ze.delete(yt.key===null?ut:yt.key),V=f(yt,V,ut),Ct===null?$e=yt:Ct.sibling=yt,Ct=yt);return t&&Ze.forEach(function(Qa){return n(j,Qa)}),bt&&ea(j,ut),$e}function tt(j,V,Q,me){if(Q==null)throw Error(s(151));for(var $e=null,Ct=null,Ze=V,ut=V=0,yt=null,wt=Q.next();Ze!==null&&!wt.done;ut++,wt=Q.next()){Ze.index>ut?(yt=Ze,Ze=null):yt=Ze.sibling;var Qa=te(j,Ze,wt.value,me);if(Qa===null){Ze===null&&(Ze=yt);break}t&&Ze&&Qa.alternate===null&&n(j,Ze),V=f(Qa,V,ut),Ct===null?$e=Qa:Ct.sibling=Qa,Ct=Qa,Ze=yt}if(wt.done)return a(j,Ze),bt&&ea(j,ut),$e;if(Ze===null){for(;!wt.done;ut++,wt=Q.next())wt=ge(j,wt.value,me),wt!==null&&(V=f(wt,V,ut),Ct===null?$e=wt:Ct.sibling=wt,Ct=wt);return bt&&ea(j,ut),$e}for(Ze=o(Ze);!wt.done;ut++,wt=Q.next())wt=le(Ze,j,ut,wt.value,me),wt!==null&&(t&&wt.alternate!==null&&Ze.delete(wt.key===null?ut:wt.key),V=f(wt,V,ut),Ct===null?$e=wt:Ct.sibling=wt,Ct=wt);return t&&Ze.forEach(function(hM){return n(j,hM)}),bt&&ea(j,ut),$e}function kt(j,V,Q,me){if(typeof Q=="object"&&Q!==null&&Q.type===R&&Q.key===null&&(Q=Q.props.children),typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case y:e:{for(var $e=Q.key;V!==null;){if(V.key===$e){if($e=Q.type,$e===R){if(V.tag===7){a(j,V.sibling),me=u(V,Q.props.children),me.return=j,j=me;break e}}else if(V.elementType===$e||typeof $e=="object"&&$e!==null&&$e.$$typeof===K&&yr($e)===V.type){a(j,V.sibling),me=u(V,Q.props),To(me,Q),me.return=j,j=me;break e}a(j,V);break}else n(j,V);V=V.sibling}Q.type===R?(me=gr(Q.props.children,j.mode,me,Q.key),me.return=j,j=me):(me=Bl(Q.type,Q.key,Q.props,null,j.mode,me),To(me,Q),me.return=j,j=me)}return x(j);case E:e:{for($e=Q.key;V!==null;){if(V.key===$e)if(V.tag===4&&V.stateNode.containerInfo===Q.containerInfo&&V.stateNode.implementation===Q.implementation){a(j,V.sibling),me=u(V,Q.children||[]),me.return=j,j=me;break e}else{a(j,V);break}else n(j,V);V=V.sibling}me=$u(Q,j.mode,me),me.return=j,j=me}return x(j);case K:return Q=yr(Q),kt(j,V,Q,me)}if(fe(Q))return ke(j,V,Q,me);if(se(Q)){if($e=se(Q),typeof $e!="function")throw Error(s(150));return Q=$e.call(Q),tt(j,V,Q,me)}if(typeof Q.then=="function")return kt(j,V,Wl(Q),me);if(Q.$$typeof===O)return kt(j,V,Gl(j,Q),me);ql(j,Q)}return typeof Q=="string"&&Q!==""||typeof Q=="number"||typeof Q=="bigint"?(Q=""+Q,V!==null&&V.tag===6?(a(j,V.sibling),me=u(V,Q),me.return=j,j=me):(a(j,V),me=Qu(Q,j.mode,me),me.return=j,j=me),x(j)):a(j,V)}return function(j,V,Q,me){try{Eo=0;var $e=kt(j,V,Q,me);return os=null,$e}catch(Ze){if(Ze===ss||Ze===kl)throw Ze;var Ct=Qn(29,Ze,null,j.mode);return Ct.lanes=me,Ct.return=j,Ct}}}var br=jm(!0),Ym=jm(!1),Oa=!1;function ff(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function df(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Pa(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Fa(t,n,a){var o=t.updateQueue;if(o===null)return null;if(o=o.shared,(Lt&2)!==0){var u=o.pending;return u===null?n.next=n:(n.next=u.next,u.next=n),o.pending=n,n=Il(t),Um(t,null,a),n}return Fl(t,o,n,a),Il(t)}function Ao(t,n,a){if(n=n.updateQueue,n!==null&&(n=n.shared,(a&4194048)!==0)){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,ro(t,a)}}function hf(t,n){var a=t.updateQueue,o=t.alternate;if(o!==null&&(o=o.updateQueue,a===o)){var u=null,f=null;if(a=a.firstBaseUpdate,a!==null){do{var x={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};f===null?u=f=x:f=f.next=x,a=a.next}while(a!==null);f===null?u=f=n:f=f.next=n}else u=f=n;a={baseState:o.baseState,firstBaseUpdate:u,lastBaseUpdate:f,shared:o.shared,callbacks:o.callbacks},t.updateQueue=a;return}t=a.lastBaseUpdate,t===null?a.firstBaseUpdate=n:t.next=n,a.lastBaseUpdate=n}var pf=!1;function Ro(){if(pf){var t=rs;if(t!==null)throw t}}function Co(t,n,a,o){pf=!1;var u=t.updateQueue;Oa=!1;var f=u.firstBaseUpdate,x=u.lastBaseUpdate,T=u.shared.pending;if(T!==null){u.shared.pending=null;var B=T,$=B.next;B.next=null,x===null?f=$:x.next=$,x=B;var de=t.alternate;de!==null&&(de=de.updateQueue,T=de.lastBaseUpdate,T!==x&&(T===null?de.firstBaseUpdate=$:T.next=$,de.lastBaseUpdate=B))}if(f!==null){var ge=u.baseState;x=0,de=$=B=null,T=f;do{var te=T.lane&-536870913,le=te!==T.lane;if(le?(St&te)===te:(o&te)===te){te!==0&&te===as&&(pf=!0),de!==null&&(de=de.next={lane:0,tag:T.tag,payload:T.payload,callback:null,next:null});e:{var ke=t,tt=T;te=n;var kt=a;switch(tt.tag){case 1:if(ke=tt.payload,typeof ke=="function"){ge=ke.call(kt,ge,te);break e}ge=ke;break e;case 3:ke.flags=ke.flags&-65537|128;case 0:if(ke=tt.payload,te=typeof ke=="function"?ke.call(kt,ge,te):ke,te==null)break e;ge=v({},ge,te);break e;case 2:Oa=!0}}te=T.callback,te!==null&&(t.flags|=64,le&&(t.flags|=8192),le=u.callbacks,le===null?u.callbacks=[te]:le.push(te))}else le={lane:te,tag:T.tag,payload:T.payload,callback:T.callback,next:null},de===null?($=de=le,B=ge):de=de.next=le,x|=te;if(T=T.next,T===null){if(T=u.shared.pending,T===null)break;le=T,T=le.next,le.next=null,u.lastBaseUpdate=le,u.shared.pending=null}}while(!0);de===null&&(B=ge),u.baseState=B,u.firstBaseUpdate=$,u.lastBaseUpdate=de,f===null&&(u.shared.lanes=0),Ga|=x,t.lanes=x,t.memoizedState=ge}}function Zm(t,n){if(typeof t!="function")throw Error(s(191,t));t.call(n)}function Km(t,n){var a=t.callbacks;if(a!==null)for(t.callbacks=null,t=0;t<a.length;t++)Zm(a[t],n)}var ls=U(null),jl=U(0);function Qm(t,n){t=fa,ve(jl,t),ve(ls,n),fa=t|n.baseLanes}function mf(){ve(jl,fa),ve(ls,ls.current)}function gf(){fa=jl.current,ie(ls),ie(jl)}var $n=U(null),gi=null;function Ia(t){var n=t.alternate;ve(rn,rn.current&1),ve($n,t),gi===null&&(n===null||ls.current!==null||n.memoizedState!==null)&&(gi=t)}function vf(t){ve(rn,rn.current),ve($n,t),gi===null&&(gi=t)}function $m(t){t.tag===22?(ve(rn,rn.current),ve($n,t),gi===null&&(gi=t)):Ba()}function Ba(){ve(rn,rn.current),ve($n,$n.current)}function Jn(t){ie($n),gi===t&&(gi=null),ie(rn)}var rn=U(0);function Yl(t){for(var n=t;n!==null;){if(n.tag===13){var a=n.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||bd(a)||Ed(a)))return n}else if(n.tag===19&&(n.memoizedProps.revealOrder==="forwards"||n.memoizedProps.revealOrder==="backwards"||n.memoizedProps.revealOrder==="unstable_legacy-backwards"||n.memoizedProps.revealOrder==="together")){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var ia=0,lt=null,Gt=null,fn=null,Zl=!1,cs=!1,Er=!1,Kl=0,wo=0,us=null,iy=0;function tn(){throw Error(s(321))}function _f(t,n){if(n===null)return!1;for(var a=0;a<n.length&&a<t.length;a++)if(!Kn(t[a],n[a]))return!1;return!0}function xf(t,n,a,o,u,f){return ia=f,lt=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,P.H=t===null||t.memoizedState===null?Pg:Of,Er=!1,f=a(o,u),Er=!1,cs&&(f=eg(n,a,o,u)),Jm(t),f}function Jm(t){P.H=No;var n=Gt!==null&&Gt.next!==null;if(ia=0,fn=Gt=lt=null,Zl=!1,wo=0,us=null,n)throw Error(s(300));t===null||dn||(t=t.dependencies,t!==null&&Hl(t)&&(dn=!0))}function eg(t,n,a,o){lt=t;var u=0;do{if(cs&&(us=null),wo=0,cs=!1,25<=u)throw Error(s(301));if(u+=1,fn=Gt=null,t.updateQueue!=null){var f=t.updateQueue;f.lastEffect=null,f.events=null,f.stores=null,f.memoCache!=null&&(f.memoCache.index=0)}P.H=Fg,f=n(a,o)}while(cs);return f}function ay(){var t=P.H,n=t.useState()[0];return n=typeof n.then=="function"?Do(n):n,t=t.useState()[0],(Gt!==null?Gt.memoizedState:null)!==t&&(lt.flags|=1024),n}function Sf(){var t=Kl!==0;return Kl=0,t}function yf(t,n,a){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~a}function Mf(t){if(Zl){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}Zl=!1}ia=0,fn=Gt=lt=null,cs=!1,wo=Kl=0,us=null}function zn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return fn===null?lt.memoizedState=fn=t:fn=fn.next=t,fn}function sn(){if(Gt===null){var t=lt.alternate;t=t!==null?t.memoizedState:null}else t=Gt.next;var n=fn===null?lt.memoizedState:fn.next;if(n!==null)fn=n,Gt=t;else{if(t===null)throw lt.alternate===null?Error(s(467)):Error(s(310));Gt=t,t={memoizedState:Gt.memoizedState,baseState:Gt.baseState,baseQueue:Gt.baseQueue,queue:Gt.queue,next:null},fn===null?lt.memoizedState=fn=t:fn=fn.next=t}return fn}function Ql(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Do(t){var n=wo;return wo+=1,us===null&&(us=[]),t=Xm(us,t,n),n=lt,(fn===null?n.memoizedState:fn.next)===null&&(n=n.alternate,P.H=n===null||n.memoizedState===null?Pg:Of),t}function $l(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return Do(t);if(t.$$typeof===O)return wn(t)}throw Error(s(438,String(t)))}function bf(t){var n=null,a=lt.updateQueue;if(a!==null&&(n=a.memoCache),n==null){var o=lt.alternate;o!==null&&(o=o.updateQueue,o!==null&&(o=o.memoCache,o!=null&&(n={data:o.data.map(function(u){return u.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),a===null&&(a=Ql(),lt.updateQueue=a),a.memoCache=n,a=n.data[n.index],a===void 0)for(a=n.data[n.index]=Array(t),o=0;o<t;o++)a[o]=w;return n.index++,a}function aa(t,n){return typeof n=="function"?n(t):n}function Jl(t){var n=sn();return Ef(n,Gt,t)}function Ef(t,n,a){var o=t.queue;if(o===null)throw Error(s(311));o.lastRenderedReducer=a;var u=t.baseQueue,f=o.pending;if(f!==null){if(u!==null){var x=u.next;u.next=f.next,f.next=x}n.baseQueue=u=f,o.pending=null}if(f=t.baseState,u===null)t.memoizedState=f;else{n=u.next;var T=x=null,B=null,$=n,de=!1;do{var ge=$.lane&-536870913;if(ge!==$.lane?(St&ge)===ge:(ia&ge)===ge){var te=$.revertLane;if(te===0)B!==null&&(B=B.next={lane:0,revertLane:0,gesture:null,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null}),ge===as&&(de=!0);else if((ia&te)===te){$=$.next,te===as&&(de=!0);continue}else ge={lane:0,revertLane:$.revertLane,gesture:null,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null},B===null?(T=B=ge,x=f):B=B.next=ge,lt.lanes|=te,Ga|=te;ge=$.action,Er&&a(f,ge),f=$.hasEagerState?$.eagerState:a(f,ge)}else te={lane:ge,revertLane:$.revertLane,gesture:$.gesture,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null},B===null?(T=B=te,x=f):B=B.next=te,lt.lanes|=ge,Ga|=ge;$=$.next}while($!==null&&$!==n);if(B===null?x=f:B.next=T,!Kn(f,t.memoizedState)&&(dn=!0,de&&(a=rs,a!==null)))throw a;t.memoizedState=f,t.baseState=x,t.baseQueue=B,o.lastRenderedState=f}return u===null&&(o.lanes=0),[t.memoizedState,o.dispatch]}function Tf(t){var n=sn(),a=n.queue;if(a===null)throw Error(s(311));a.lastRenderedReducer=t;var o=a.dispatch,u=a.pending,f=n.memoizedState;if(u!==null){a.pending=null;var x=u=u.next;do f=t(f,x.action),x=x.next;while(x!==u);Kn(f,n.memoizedState)||(dn=!0),n.memoizedState=f,n.baseQueue===null&&(n.baseState=f),a.lastRenderedState=f}return[f,o]}function tg(t,n,a){var o=lt,u=sn(),f=bt;if(f){if(a===void 0)throw Error(s(407));a=a()}else a=n();var x=!Kn((Gt||u).memoizedState,a);if(x&&(u.memoizedState=a,dn=!0),u=u.queue,Cf(ag.bind(null,o,u,t),[t]),u.getSnapshot!==n||x||fn!==null&&fn.memoizedState.tag&1){if(o.flags|=2048,fs(9,{destroy:void 0},ig.bind(null,o,u,a,n),null),Xt===null)throw Error(s(349));f||(ia&127)!==0||ng(o,n,a)}return a}function ng(t,n,a){t.flags|=16384,t={getSnapshot:n,value:a},n=lt.updateQueue,n===null?(n=Ql(),lt.updateQueue=n,n.stores=[t]):(a=n.stores,a===null?n.stores=[t]:a.push(t))}function ig(t,n,a,o){n.value=a,n.getSnapshot=o,rg(n)&&sg(t)}function ag(t,n,a){return a(function(){rg(n)&&sg(t)})}function rg(t){var n=t.getSnapshot;t=t.value;try{var a=n();return!Kn(t,a)}catch{return!0}}function sg(t){var n=mr(t,2);n!==null&&Zn(n,t,2)}function Af(t){var n=zn();if(typeof t=="function"){var a=t;if(t=a(),Er){Be(!0);try{a()}finally{Be(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:aa,lastRenderedState:t},n}function og(t,n,a,o){return t.baseState=a,Ef(t,Gt,typeof o=="function"?o:aa)}function ry(t,n,a,o,u){if(nc(t))throw Error(s(485));if(t=n.action,t!==null){var f={payload:u,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(x){f.listeners.push(x)}};P.T!==null?a(!0):f.isTransition=!1,o(f),a=n.pending,a===null?(f.next=n.pending=f,lg(n,f)):(f.next=a.next,n.pending=a.next=f)}}function lg(t,n){var a=n.action,o=n.payload,u=t.state;if(n.isTransition){var f=P.T,x={};P.T=x;try{var T=a(u,o),B=P.S;B!==null&&B(x,T),cg(t,n,T)}catch($){Rf(t,n,$)}finally{f!==null&&x.types!==null&&(f.types=x.types),P.T=f}}else try{f=a(u,o),cg(t,n,f)}catch($){Rf(t,n,$)}}function cg(t,n,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(o){ug(t,n,o)},function(o){return Rf(t,n,o)}):ug(t,n,a)}function ug(t,n,a){n.status="fulfilled",n.value=a,fg(n),t.state=a,n=t.pending,n!==null&&(a=n.next,a===n?t.pending=null:(a=a.next,n.next=a,lg(t,a)))}function Rf(t,n,a){var o=t.pending;if(t.pending=null,o!==null){o=o.next;do n.status="rejected",n.reason=a,fg(n),n=n.next;while(n!==o)}t.action=null}function fg(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function dg(t,n){return n}function hg(t,n){if(bt){var a=Xt.formState;if(a!==null){e:{var o=lt;if(bt){if(jt){t:{for(var u=jt,f=mi;u.nodeType!==8;){if(!f){u=null;break t}if(u=vi(u.nextSibling),u===null){u=null;break t}}f=u.data,u=f==="F!"||f==="F"?u:null}if(u){jt=vi(u.nextSibling),o=u.data==="F!";break e}}Na(o)}o=!1}o&&(n=a[0])}}return a=zn(),a.memoizedState=a.baseState=n,o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:dg,lastRenderedState:n},a.queue=o,a=Ng.bind(null,lt,o),o.dispatch=a,o=Af(!1),f=Lf.bind(null,lt,!1,o.queue),o=zn(),u={state:n,dispatch:null,action:t,pending:null},o.queue=u,a=ry.bind(null,lt,u,f,a),u.dispatch=a,o.memoizedState=t,[n,a,!1]}function pg(t){var n=sn();return mg(n,Gt,t)}function mg(t,n,a){if(n=Ef(t,n,dg)[0],t=Jl(aa)[0],typeof n=="object"&&n!==null&&typeof n.then=="function")try{var o=Do(n)}catch(x){throw x===ss?kl:x}else o=n;n=sn();var u=n.queue,f=u.dispatch;return a!==n.memoizedState&&(lt.flags|=2048,fs(9,{destroy:void 0},sy.bind(null,u,a),null)),[o,f,t]}function sy(t,n){t.action=n}function gg(t){var n=sn(),a=Gt;if(a!==null)return mg(n,a,t);sn(),n=n.memoizedState,a=sn();var o=a.queue.dispatch;return a.memoizedState=t,[n,o,!1]}function fs(t,n,a,o){return t={tag:t,create:a,deps:o,inst:n,next:null},n=lt.updateQueue,n===null&&(n=Ql(),lt.updateQueue=n),a=n.lastEffect,a===null?n.lastEffect=t.next=t:(o=a.next,a.next=t,t.next=o,n.lastEffect=t),t}function vg(){return sn().memoizedState}function ec(t,n,a,o){var u=zn();lt.flags|=t,u.memoizedState=fs(1|n,{destroy:void 0},a,o===void 0?null:o)}function tc(t,n,a,o){var u=sn();o=o===void 0?null:o;var f=u.memoizedState.inst;Gt!==null&&o!==null&&_f(o,Gt.memoizedState.deps)?u.memoizedState=fs(n,f,a,o):(lt.flags|=t,u.memoizedState=fs(1|n,f,a,o))}function _g(t,n){ec(8390656,8,t,n)}function Cf(t,n){tc(2048,8,t,n)}function oy(t){lt.flags|=4;var n=lt.updateQueue;if(n===null)n=Ql(),lt.updateQueue=n,n.events=[t];else{var a=n.events;a===null?n.events=[t]:a.push(t)}}function xg(t){var n=sn().memoizedState;return oy({ref:n,nextImpl:t}),function(){if((Lt&2)!==0)throw Error(s(440));return n.impl.apply(void 0,arguments)}}function Sg(t,n){return tc(4,2,t,n)}function yg(t,n){return tc(4,4,t,n)}function Mg(t,n){if(typeof n=="function"){t=t();var a=n(t);return function(){typeof a=="function"?a():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function bg(t,n,a){a=a!=null?a.concat([t]):null,tc(4,4,Mg.bind(null,n,t),a)}function wf(){}function Eg(t,n){var a=sn();n=n===void 0?null:n;var o=a.memoizedState;return n!==null&&_f(n,o[1])?o[0]:(a.memoizedState=[t,n],t)}function Tg(t,n){var a=sn();n=n===void 0?null:n;var o=a.memoizedState;if(n!==null&&_f(n,o[1]))return o[0];if(o=t(),Er){Be(!0);try{t()}finally{Be(!1)}}return a.memoizedState=[o,n],o}function Df(t,n,a){return a===void 0||(ia&1073741824)!==0&&(St&261930)===0?t.memoizedState=n:(t.memoizedState=a,t=A0(),lt.lanes|=t,Ga|=t,a)}function Ag(t,n,a,o){return Kn(a,n)?a:ls.current!==null?(t=Df(t,a,o),Kn(t,n)||(dn=!0),t):(ia&42)===0||(ia&1073741824)!==0&&(St&261930)===0?(dn=!0,t.memoizedState=a):(t=A0(),lt.lanes|=t,Ga|=t,n)}function Rg(t,n,a,o,u){var f=H.p;H.p=f!==0&&8>f?f:8;var x=P.T,T={};P.T=T,Lf(t,!1,n,a);try{var B=u(),$=P.S;if($!==null&&$(T,B),B!==null&&typeof B=="object"&&typeof B.then=="function"){var de=ny(B,o);Uo(t,n,de,ni(t))}else Uo(t,n,o,ni(t))}catch(ge){Uo(t,n,{then:function(){},status:"rejected",reason:ge},ni())}finally{H.p=f,x!==null&&T.types!==null&&(x.types=T.types),P.T=x}}function ly(){}function Uf(t,n,a,o){if(t.tag!==5)throw Error(s(476));var u=Cg(t).queue;Rg(t,u,n,ae,a===null?ly:function(){return wg(t),a(o)})}function Cg(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:ae,baseState:ae,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:aa,lastRenderedState:ae},next:null};var a={};return n.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:aa,lastRenderedState:a},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function wg(t){var n=Cg(t);n.next===null&&(n=t.alternate.memoizedState),Uo(t,n.next.queue,{},ni())}function Nf(){return wn(Yo)}function Dg(){return sn().memoizedState}function Ug(){return sn().memoizedState}function cy(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var a=ni();t=Pa(a);var o=Fa(n,t,a);o!==null&&(Zn(o,n,a),Ao(o,n,a)),n={cache:of()},t.payload=n;return}n=n.return}}function uy(t,n,a){var o=ni();a={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},nc(t)?Lg(n,a):(a=Zu(t,n,a,o),a!==null&&(Zn(a,t,o),Og(a,n,o)))}function Ng(t,n,a){var o=ni();Uo(t,n,a,o)}function Uo(t,n,a,o){var u={lane:o,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(nc(t))Lg(n,u);else{var f=t.alternate;if(t.lanes===0&&(f===null||f.lanes===0)&&(f=n.lastRenderedReducer,f!==null))try{var x=n.lastRenderedState,T=f(x,a);if(u.hasEagerState=!0,u.eagerState=T,Kn(T,x))return Fl(t,n,u,0),Xt===null&&Pl(),!1}catch{}if(a=Zu(t,n,u,o),a!==null)return Zn(a,t,o),Og(a,n,o),!0}return!1}function Lf(t,n,a,o){if(o={lane:2,revertLane:fd(),gesture:null,action:o,hasEagerState:!1,eagerState:null,next:null},nc(t)){if(n)throw Error(s(479))}else n=Zu(t,a,o,2),n!==null&&Zn(n,t,2)}function nc(t){var n=t.alternate;return t===lt||n!==null&&n===lt}function Lg(t,n){cs=Zl=!0;var a=t.pending;a===null?n.next=n:(n.next=a.next,a.next=n),t.pending=n}function Og(t,n,a){if((a&4194048)!==0){var o=n.lanes;o&=t.pendingLanes,a|=o,n.lanes=a,ro(t,a)}}var No={readContext:wn,use:$l,useCallback:tn,useContext:tn,useEffect:tn,useImperativeHandle:tn,useLayoutEffect:tn,useInsertionEffect:tn,useMemo:tn,useReducer:tn,useRef:tn,useState:tn,useDebugValue:tn,useDeferredValue:tn,useTransition:tn,useSyncExternalStore:tn,useId:tn,useHostTransitionStatus:tn,useFormState:tn,useActionState:tn,useOptimistic:tn,useMemoCache:tn,useCacheRefresh:tn};No.useEffectEvent=tn;var Pg={readContext:wn,use:$l,useCallback:function(t,n){return zn().memoizedState=[t,n===void 0?null:n],t},useContext:wn,useEffect:_g,useImperativeHandle:function(t,n,a){a=a!=null?a.concat([t]):null,ec(4194308,4,Mg.bind(null,n,t),a)},useLayoutEffect:function(t,n){return ec(4194308,4,t,n)},useInsertionEffect:function(t,n){ec(4,2,t,n)},useMemo:function(t,n){var a=zn();n=n===void 0?null:n;var o=t();if(Er){Be(!0);try{t()}finally{Be(!1)}}return a.memoizedState=[o,n],o},useReducer:function(t,n,a){var o=zn();if(a!==void 0){var u=a(n);if(Er){Be(!0);try{a(n)}finally{Be(!1)}}}else u=n;return o.memoizedState=o.baseState=u,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:u},o.queue=t,t=t.dispatch=uy.bind(null,lt,t),[o.memoizedState,t]},useRef:function(t){var n=zn();return t={current:t},n.memoizedState=t},useState:function(t){t=Af(t);var n=t.queue,a=Ng.bind(null,lt,n);return n.dispatch=a,[t.memoizedState,a]},useDebugValue:wf,useDeferredValue:function(t,n){var a=zn();return Df(a,t,n)},useTransition:function(){var t=Af(!1);return t=Rg.bind(null,lt,t.queue,!0,!1),zn().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,a){var o=lt,u=zn();if(bt){if(a===void 0)throw Error(s(407));a=a()}else{if(a=n(),Xt===null)throw Error(s(349));(St&127)!==0||ng(o,n,a)}u.memoizedState=a;var f={value:a,getSnapshot:n};return u.queue=f,_g(ag.bind(null,o,f,t),[t]),o.flags|=2048,fs(9,{destroy:void 0},ig.bind(null,o,f,a,n),null),a},useId:function(){var t=zn(),n=Xt.identifierPrefix;if(bt){var a=Bi,o=Ii;a=(o&~(1<<32-Fe(o)-1)).toString(32)+a,n="_"+n+"R_"+a,a=Kl++,0<a&&(n+="H"+a.toString(32)),n+="_"}else a=iy++,n="_"+n+"r_"+a.toString(32)+"_";return t.memoizedState=n},useHostTransitionStatus:Nf,useFormState:hg,useActionState:hg,useOptimistic:function(t){var n=zn();n.memoizedState=n.baseState=t;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=a,n=Lf.bind(null,lt,!0,a),a.dispatch=n,[t,n]},useMemoCache:bf,useCacheRefresh:function(){return zn().memoizedState=cy.bind(null,lt)},useEffectEvent:function(t){var n=zn(),a={impl:t};return n.memoizedState=a,function(){if((Lt&2)!==0)throw Error(s(440));return a.impl.apply(void 0,arguments)}}},Of={readContext:wn,use:$l,useCallback:Eg,useContext:wn,useEffect:Cf,useImperativeHandle:bg,useInsertionEffect:Sg,useLayoutEffect:yg,useMemo:Tg,useReducer:Jl,useRef:vg,useState:function(){return Jl(aa)},useDebugValue:wf,useDeferredValue:function(t,n){var a=sn();return Ag(a,Gt.memoizedState,t,n)},useTransition:function(){var t=Jl(aa)[0],n=sn().memoizedState;return[typeof t=="boolean"?t:Do(t),n]},useSyncExternalStore:tg,useId:Dg,useHostTransitionStatus:Nf,useFormState:pg,useActionState:pg,useOptimistic:function(t,n){var a=sn();return og(a,Gt,t,n)},useMemoCache:bf,useCacheRefresh:Ug};Of.useEffectEvent=xg;var Fg={readContext:wn,use:$l,useCallback:Eg,useContext:wn,useEffect:Cf,useImperativeHandle:bg,useInsertionEffect:Sg,useLayoutEffect:yg,useMemo:Tg,useReducer:Tf,useRef:vg,useState:function(){return Tf(aa)},useDebugValue:wf,useDeferredValue:function(t,n){var a=sn();return Gt===null?Df(a,t,n):Ag(a,Gt.memoizedState,t,n)},useTransition:function(){var t=Tf(aa)[0],n=sn().memoizedState;return[typeof t=="boolean"?t:Do(t),n]},useSyncExternalStore:tg,useId:Dg,useHostTransitionStatus:Nf,useFormState:gg,useActionState:gg,useOptimistic:function(t,n){var a=sn();return Gt!==null?og(a,Gt,t,n):(a.baseState=t,[t,a.queue.dispatch])},useMemoCache:bf,useCacheRefresh:Ug};Fg.useEffectEvent=xg;function Pf(t,n,a,o){n=t.memoizedState,a=a(o,n),a=a==null?n:v({},n,a),t.memoizedState=a,t.lanes===0&&(t.updateQueue.baseState=a)}var Ff={enqueueSetState:function(t,n,a){t=t._reactInternals;var o=ni(),u=Pa(o);u.payload=n,a!=null&&(u.callback=a),n=Fa(t,u,o),n!==null&&(Zn(n,t,o),Ao(n,t,o))},enqueueReplaceState:function(t,n,a){t=t._reactInternals;var o=ni(),u=Pa(o);u.tag=1,u.payload=n,a!=null&&(u.callback=a),n=Fa(t,u,o),n!==null&&(Zn(n,t,o),Ao(n,t,o))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var a=ni(),o=Pa(a);o.tag=2,n!=null&&(o.callback=n),n=Fa(t,o,a),n!==null&&(Zn(n,t,a),Ao(n,t,a))}};function Ig(t,n,a,o,u,f,x){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(o,f,x):n.prototype&&n.prototype.isPureReactComponent?!_o(a,o)||!_o(u,f):!0}function Bg(t,n,a,o){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(a,o),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(a,o),n.state!==t&&Ff.enqueueReplaceState(n,n.state,null)}function Tr(t,n){var a=n;if("ref"in n){a={};for(var o in n)o!=="ref"&&(a[o]=n[o])}if(t=t.defaultProps){a===n&&(a=v({},a));for(var u in t)a[u]===void 0&&(a[u]=t[u])}return a}function zg(t){Ol(t)}function Hg(t){console.error(t)}function Gg(t){Ol(t)}function ic(t,n){try{var a=t.onUncaughtError;a(n.value,{componentStack:n.stack})}catch(o){setTimeout(function(){throw o})}}function Vg(t,n,a){try{var o=t.onCaughtError;o(a.value,{componentStack:a.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(u){setTimeout(function(){throw u})}}function If(t,n,a){return a=Pa(a),a.tag=3,a.payload={element:null},a.callback=function(){ic(t,n)},a}function kg(t){return t=Pa(t),t.tag=3,t}function Xg(t,n,a,o){var u=a.type.getDerivedStateFromError;if(typeof u=="function"){var f=o.value;t.payload=function(){return u(f)},t.callback=function(){Vg(n,a,o)}}var x=a.stateNode;x!==null&&typeof x.componentDidCatch=="function"&&(t.callback=function(){Vg(n,a,o),typeof u!="function"&&(Va===null?Va=new Set([this]):Va.add(this));var T=o.stack;this.componentDidCatch(o.value,{componentStack:T!==null?T:""})})}function fy(t,n,a,o,u){if(a.flags|=32768,o!==null&&typeof o=="object"&&typeof o.then=="function"){if(n=a.alternate,n!==null&&is(n,a,u,!0),a=$n.current,a!==null){switch(a.tag){case 31:case 13:return gi===null?mc():a.alternate===null&&nn===0&&(nn=3),a.flags&=-257,a.flags|=65536,a.lanes=u,o===Xl?a.flags|=16384:(n=a.updateQueue,n===null?a.updateQueue=new Set([o]):n.add(o),ld(t,o,u)),!1;case 22:return a.flags|=65536,o===Xl?a.flags|=16384:(n=a.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([o])},a.updateQueue=n):(a=n.retryQueue,a===null?n.retryQueue=new Set([o]):a.add(o)),ld(t,o,u)),!1}throw Error(s(435,a.tag))}return ld(t,o,u),mc(),!1}if(bt)return n=$n.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=u,o!==tf&&(t=Error(s(422),{cause:o}),yo(di(t,a)))):(o!==tf&&(n=Error(s(423),{cause:o}),yo(di(n,a))),t=t.current.alternate,t.flags|=65536,u&=-u,t.lanes|=u,o=di(o,a),u=If(t.stateNode,o,u),hf(t,u),nn!==4&&(nn=2)),!1;var f=Error(s(520),{cause:o});if(f=di(f,a),Ho===null?Ho=[f]:Ho.push(f),nn!==4&&(nn=2),n===null)return!0;o=di(o,a),a=n;do{switch(a.tag){case 3:return a.flags|=65536,t=u&-u,a.lanes|=t,t=If(a.stateNode,o,t),hf(a,t),!1;case 1:if(n=a.type,f=a.stateNode,(a.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Va===null||!Va.has(f))))return a.flags|=65536,u&=-u,a.lanes|=u,u=kg(u),Xg(u,t,a,o),hf(a,u),!1}a=a.return}while(a!==null);return!1}var Bf=Error(s(461)),dn=!1;function Dn(t,n,a,o){n.child=t===null?Ym(n,null,a,o):br(n,t.child,a,o)}function Wg(t,n,a,o,u){a=a.render;var f=n.ref;if("ref"in o){var x={};for(var T in o)T!=="ref"&&(x[T]=o[T])}else x=o;return xr(n),o=xf(t,n,a,x,f,u),T=Sf(),t!==null&&!dn?(yf(t,n,u),ra(t,n,u)):(bt&&T&&Ju(n),n.flags|=1,Dn(t,n,o,u),n.child)}function qg(t,n,a,o,u){if(t===null){var f=a.type;return typeof f=="function"&&!Ku(f)&&f.defaultProps===void 0&&a.compare===null?(n.tag=15,n.type=f,jg(t,n,f,o,u)):(t=Bl(a.type,null,o,n,n.mode,u),t.ref=n.ref,t.return=n,n.child=t)}if(f=t.child,!qf(t,u)){var x=f.memoizedProps;if(a=a.compare,a=a!==null?a:_o,a(x,o)&&t.ref===n.ref)return ra(t,n,u)}return n.flags|=1,t=Ji(f,o),t.ref=n.ref,t.return=n,n.child=t}function jg(t,n,a,o,u){if(t!==null){var f=t.memoizedProps;if(_o(f,o)&&t.ref===n.ref)if(dn=!1,n.pendingProps=o=f,qf(t,u))(t.flags&131072)!==0&&(dn=!0);else return n.lanes=t.lanes,ra(t,n,u)}return zf(t,n,a,o,u)}function Yg(t,n,a,o){var u=o.children,f=t!==null?t.memoizedState:null;if(t===null&&n.stateNode===null&&(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),o.mode==="hidden"){if((n.flags&128)!==0){if(f=f!==null?f.baseLanes|a:a,t!==null){for(o=n.child=t.child,u=0;o!==null;)u=u|o.lanes|o.childLanes,o=o.sibling;o=u&~f}else o=0,n.child=null;return Zg(t,n,f,a,o)}if((a&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&Vl(n,f!==null?f.cachePool:null),f!==null?Qm(n,f):mf(),$m(n);else return o=n.lanes=536870912,Zg(t,n,f!==null?f.baseLanes|a:a,a,o)}else f!==null?(Vl(n,f.cachePool),Qm(n,f),Ba(),n.memoizedState=null):(t!==null&&Vl(n,null),mf(),Ba());return Dn(t,n,u,a),n.child}function Lo(t,n){return t!==null&&t.tag===22||n.stateNode!==null||(n.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.sibling}function Zg(t,n,a,o,u){var f=cf();return f=f===null?null:{parent:un._currentValue,pool:f},n.memoizedState={baseLanes:a,cachePool:f},t!==null&&Vl(n,null),mf(),$m(n),t!==null&&is(t,n,o,!0),n.childLanes=u,null}function ac(t,n){return n=sc({mode:n.mode,children:n.children},t.mode),n.ref=t.ref,t.child=n,n.return=t,n}function Kg(t,n,a){return br(n,t.child,null,a),t=ac(n,n.pendingProps),t.flags|=2,Jn(n),n.memoizedState=null,t}function dy(t,n,a){var o=n.pendingProps,u=(n.flags&128)!==0;if(n.flags&=-129,t===null){if(bt){if(o.mode==="hidden")return t=ac(n,o),n.lanes=536870912,Lo(null,t);if(vf(n),(t=jt)?(t=lv(t,mi),t=t!==null&&t.data==="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Da!==null?{id:Ii,overflow:Bi}:null,retryLane:536870912,hydrationErrors:null},a=Lm(t),a.return=n,n.child=a,Cn=n,jt=null)):t=null,t===null)throw Na(n);return n.lanes=536870912,null}return ac(n,o)}var f=t.memoizedState;if(f!==null){var x=f.dehydrated;if(vf(n),u)if(n.flags&256)n.flags&=-257,n=Kg(t,n,a);else if(n.memoizedState!==null)n.child=t.child,n.flags|=128,n=null;else throw Error(s(558));else if(dn||is(t,n,a,!1),u=(a&t.childLanes)!==0,dn||u){if(o=Xt,o!==null&&(x=Vr(o,a),x!==0&&x!==f.retryLane))throw f.retryLane=x,mr(t,x),Zn(o,t,x),Bf;mc(),n=Kg(t,n,a)}else t=f.treeContext,jt=vi(x.nextSibling),Cn=n,bt=!0,Ua=null,mi=!1,t!==null&&Fm(n,t),n=ac(n,o),n.flags|=4096;return n}return t=Ji(t.child,{mode:o.mode,children:o.children}),t.ref=n.ref,n.child=t,t.return=n,t}function rc(t,n){var a=n.ref;if(a===null)t!==null&&t.ref!==null&&(n.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(s(284));(t===null||t.ref!==a)&&(n.flags|=4194816)}}function zf(t,n,a,o,u){return xr(n),a=xf(t,n,a,o,void 0,u),o=Sf(),t!==null&&!dn?(yf(t,n,u),ra(t,n,u)):(bt&&o&&Ju(n),n.flags|=1,Dn(t,n,a,u),n.child)}function Qg(t,n,a,o,u,f){return xr(n),n.updateQueue=null,a=eg(n,o,a,u),Jm(t),o=Sf(),t!==null&&!dn?(yf(t,n,f),ra(t,n,f)):(bt&&o&&Ju(n),n.flags|=1,Dn(t,n,a,f),n.child)}function $g(t,n,a,o,u){if(xr(n),n.stateNode===null){var f=Jr,x=a.contextType;typeof x=="object"&&x!==null&&(f=wn(x)),f=new a(o,f),n.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,f.updater=Ff,n.stateNode=f,f._reactInternals=n,f=n.stateNode,f.props=o,f.state=n.memoizedState,f.refs={},ff(n),x=a.contextType,f.context=typeof x=="object"&&x!==null?wn(x):Jr,f.state=n.memoizedState,x=a.getDerivedStateFromProps,typeof x=="function"&&(Pf(n,a,x,o),f.state=n.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(x=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),x!==f.state&&Ff.enqueueReplaceState(f,f.state,null),Co(n,o,f,u),Ro(),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!0}else if(t===null){f=n.stateNode;var T=n.memoizedProps,B=Tr(a,T);f.props=B;var $=f.context,de=a.contextType;x=Jr,typeof de=="object"&&de!==null&&(x=wn(de));var ge=a.getDerivedStateFromProps;de=typeof ge=="function"||typeof f.getSnapshotBeforeUpdate=="function",T=n.pendingProps!==T,de||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(T||$!==x)&&Bg(n,f,o,x),Oa=!1;var te=n.memoizedState;f.state=te,Co(n,o,f,u),Ro(),$=n.memoizedState,T||te!==$||Oa?(typeof ge=="function"&&(Pf(n,a,ge,o),$=n.memoizedState),(B=Oa||Ig(n,a,B,o,te,$,x))?(de||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount()),typeof f.componentDidMount=="function"&&(n.flags|=4194308)):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=o,n.memoizedState=$),f.props=o,f.state=$,f.context=x,o=B):(typeof f.componentDidMount=="function"&&(n.flags|=4194308),o=!1)}else{f=n.stateNode,df(t,n),x=n.memoizedProps,de=Tr(a,x),f.props=de,ge=n.pendingProps,te=f.context,$=a.contextType,B=Jr,typeof $=="object"&&$!==null&&(B=wn($)),T=a.getDerivedStateFromProps,($=typeof T=="function"||typeof f.getSnapshotBeforeUpdate=="function")||typeof f.UNSAFE_componentWillReceiveProps!="function"&&typeof f.componentWillReceiveProps!="function"||(x!==ge||te!==B)&&Bg(n,f,o,B),Oa=!1,te=n.memoizedState,f.state=te,Co(n,o,f,u),Ro();var le=n.memoizedState;x!==ge||te!==le||Oa||t!==null&&t.dependencies!==null&&Hl(t.dependencies)?(typeof T=="function"&&(Pf(n,a,T,o),le=n.memoizedState),(de=Oa||Ig(n,a,de,o,te,le,B)||t!==null&&t.dependencies!==null&&Hl(t.dependencies))?($||typeof f.UNSAFE_componentWillUpdate!="function"&&typeof f.componentWillUpdate!="function"||(typeof f.componentWillUpdate=="function"&&f.componentWillUpdate(o,le,B),typeof f.UNSAFE_componentWillUpdate=="function"&&f.UNSAFE_componentWillUpdate(o,le,B)),typeof f.componentDidUpdate=="function"&&(n.flags|=4),typeof f.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof f.componentDidUpdate!="function"||x===t.memoizedProps&&te===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||x===t.memoizedProps&&te===t.memoizedState||(n.flags|=1024),n.memoizedProps=o,n.memoizedState=le),f.props=o,f.state=le,f.context=B,o=de):(typeof f.componentDidUpdate!="function"||x===t.memoizedProps&&te===t.memoizedState||(n.flags|=4),typeof f.getSnapshotBeforeUpdate!="function"||x===t.memoizedProps&&te===t.memoizedState||(n.flags|=1024),o=!1)}return f=o,rc(t,n),o=(n.flags&128)!==0,f||o?(f=n.stateNode,a=o&&typeof a.getDerivedStateFromError!="function"?null:f.render(),n.flags|=1,t!==null&&o?(n.child=br(n,t.child,null,u),n.child=br(n,null,a,u)):Dn(t,n,a,u),n.memoizedState=f.state,t=n.child):t=ra(t,n,u),t}function Jg(t,n,a,o){return vr(),n.flags|=256,Dn(t,n,a,o),n.child}var Hf={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Gf(t){return{baseLanes:t,cachePool:Vm()}}function Vf(t,n,a){return t=t!==null?t.childLanes&~a:0,n&&(t|=ti),t}function e0(t,n,a){var o=n.pendingProps,u=!1,f=(n.flags&128)!==0,x;if((x=f)||(x=t!==null&&t.memoizedState===null?!1:(rn.current&2)!==0),x&&(u=!0,n.flags&=-129),x=(n.flags&32)!==0,n.flags&=-33,t===null){if(bt){if(u?Ia(n):Ba(),(t=jt)?(t=lv(t,mi),t=t!==null&&t.data!=="&"?t:null,t!==null&&(n.memoizedState={dehydrated:t,treeContext:Da!==null?{id:Ii,overflow:Bi}:null,retryLane:536870912,hydrationErrors:null},a=Lm(t),a.return=n,n.child=a,Cn=n,jt=null)):t=null,t===null)throw Na(n);return Ed(t)?n.lanes=32:n.lanes=536870912,null}var T=o.children;return o=o.fallback,u?(Ba(),u=n.mode,T=sc({mode:"hidden",children:T},u),o=gr(o,u,a,null),T.return=n,o.return=n,T.sibling=o,n.child=T,o=n.child,o.memoizedState=Gf(a),o.childLanes=Vf(t,x,a),n.memoizedState=Hf,Lo(null,o)):(Ia(n),kf(n,T))}var B=t.memoizedState;if(B!==null&&(T=B.dehydrated,T!==null)){if(f)n.flags&256?(Ia(n),n.flags&=-257,n=Xf(t,n,a)):n.memoizedState!==null?(Ba(),n.child=t.child,n.flags|=128,n=null):(Ba(),T=o.fallback,u=n.mode,o=sc({mode:"visible",children:o.children},u),T=gr(T,u,a,null),T.flags|=2,o.return=n,T.return=n,o.sibling=T,n.child=o,br(n,t.child,null,a),o=n.child,o.memoizedState=Gf(a),o.childLanes=Vf(t,x,a),n.memoizedState=Hf,n=Lo(null,o));else if(Ia(n),Ed(T)){if(x=T.nextSibling&&T.nextSibling.dataset,x)var $=x.dgst;x=$,o=Error(s(419)),o.stack="",o.digest=x,yo({value:o,source:null,stack:null}),n=Xf(t,n,a)}else if(dn||is(t,n,a,!1),x=(a&t.childLanes)!==0,dn||x){if(x=Xt,x!==null&&(o=Vr(x,a),o!==0&&o!==B.retryLane))throw B.retryLane=o,mr(t,o),Zn(x,t,o),Bf;bd(T)||mc(),n=Xf(t,n,a)}else bd(T)?(n.flags|=192,n.child=t.child,n=null):(t=B.treeContext,jt=vi(T.nextSibling),Cn=n,bt=!0,Ua=null,mi=!1,t!==null&&Fm(n,t),n=kf(n,o.children),n.flags|=4096);return n}return u?(Ba(),T=o.fallback,u=n.mode,B=t.child,$=B.sibling,o=Ji(B,{mode:"hidden",children:o.children}),o.subtreeFlags=B.subtreeFlags&65011712,$!==null?T=Ji($,T):(T=gr(T,u,a,null),T.flags|=2),T.return=n,o.return=n,o.sibling=T,n.child=o,Lo(null,o),o=n.child,T=t.child.memoizedState,T===null?T=Gf(a):(u=T.cachePool,u!==null?(B=un._currentValue,u=u.parent!==B?{parent:B,pool:B}:u):u=Vm(),T={baseLanes:T.baseLanes|a,cachePool:u}),o.memoizedState=T,o.childLanes=Vf(t,x,a),n.memoizedState=Hf,Lo(t.child,o)):(Ia(n),a=t.child,t=a.sibling,a=Ji(a,{mode:"visible",children:o.children}),a.return=n,a.sibling=null,t!==null&&(x=n.deletions,x===null?(n.deletions=[t],n.flags|=16):x.push(t)),n.child=a,n.memoizedState=null,a)}function kf(t,n){return n=sc({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function sc(t,n){return t=Qn(22,t,null,n),t.lanes=0,t}function Xf(t,n,a){return br(n,t.child,null,a),t=kf(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function t0(t,n,a){t.lanes|=n;var o=t.alternate;o!==null&&(o.lanes|=n),rf(t.return,n,a)}function Wf(t,n,a,o,u,f){var x=t.memoizedState;x===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:o,tail:a,tailMode:u,treeForkCount:f}:(x.isBackwards=n,x.rendering=null,x.renderingStartTime=0,x.last=o,x.tail=a,x.tailMode=u,x.treeForkCount=f)}function n0(t,n,a){var o=n.pendingProps,u=o.revealOrder,f=o.tail;o=o.children;var x=rn.current,T=(x&2)!==0;if(T?(x=x&1|2,n.flags|=128):x&=1,ve(rn,x),Dn(t,n,o,a),o=bt?So:0,!T&&t!==null&&(t.flags&128)!==0)e:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&t0(t,a,n);else if(t.tag===19)t0(t,a,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break e;for(;t.sibling===null;){if(t.return===null||t.return===n)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}switch(u){case"forwards":for(a=n.child,u=null;a!==null;)t=a.alternate,t!==null&&Yl(t)===null&&(u=a),a=a.sibling;a=u,a===null?(u=n.child,n.child=null):(u=a.sibling,a.sibling=null),Wf(n,!1,u,a,f,o);break;case"backwards":case"unstable_legacy-backwards":for(a=null,u=n.child,n.child=null;u!==null;){if(t=u.alternate,t!==null&&Yl(t)===null){n.child=u;break}t=u.sibling,u.sibling=a,a=u,u=t}Wf(n,!0,a,null,f,o);break;case"together":Wf(n,!1,null,null,void 0,o);break;default:n.memoizedState=null}return n.child}function ra(t,n,a){if(t!==null&&(n.dependencies=t.dependencies),Ga|=n.lanes,(a&n.childLanes)===0)if(t!==null){if(is(t,n,a,!1),(a&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(s(153));if(n.child!==null){for(t=n.child,a=Ji(t,t.pendingProps),n.child=a,a.return=n;t.sibling!==null;)t=t.sibling,a=a.sibling=Ji(t,t.pendingProps),a.return=n;a.sibling=null}return n.child}function qf(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&Hl(t)))}function hy(t,n,a){switch(n.tag){case 3:Ue(n,n.stateNode.containerInfo),La(n,un,t.memoizedState.cache),vr();break;case 27:case 5:Ge(n);break;case 4:Ue(n,n.stateNode.containerInfo);break;case 10:La(n,n.type,n.memoizedProps.value);break;case 31:if(n.memoizedState!==null)return n.flags|=128,vf(n),null;break;case 13:var o=n.memoizedState;if(o!==null)return o.dehydrated!==null?(Ia(n),n.flags|=128,null):(a&n.child.childLanes)!==0?e0(t,n,a):(Ia(n),t=ra(t,n,a),t!==null?t.sibling:null);Ia(n);break;case 19:var u=(t.flags&128)!==0;if(o=(a&n.childLanes)!==0,o||(is(t,n,a,!1),o=(a&n.childLanes)!==0),u){if(o)return n0(t,n,a);n.flags|=128}if(u=n.memoizedState,u!==null&&(u.rendering=null,u.tail=null,u.lastEffect=null),ve(rn,rn.current),o)break;return null;case 22:return n.lanes=0,Yg(t,n,a,n.pendingProps);case 24:La(n,un,t.memoizedState.cache)}return ra(t,n,a)}function i0(t,n,a){if(t!==null)if(t.memoizedProps!==n.pendingProps)dn=!0;else{if(!qf(t,a)&&(n.flags&128)===0)return dn=!1,hy(t,n,a);dn=(t.flags&131072)!==0}else dn=!1,bt&&(n.flags&1048576)!==0&&Pm(n,So,n.index);switch(n.lanes=0,n.tag){case 16:e:{var o=n.pendingProps;if(t=yr(n.elementType),n.type=t,typeof t=="function")Ku(t)?(o=Tr(t,o),n.tag=1,n=$g(null,n,t,o,a)):(n.tag=0,n=zf(null,n,t,o,a));else{if(t!=null){var u=t.$$typeof;if(u===L){n.tag=11,n=Wg(null,n,t,o,a);break e}else if(u===F){n.tag=14,n=qg(null,n,t,o,a);break e}}throw n=pe(t)||t,Error(s(306,n,""))}}return n;case 0:return zf(t,n,n.type,n.pendingProps,a);case 1:return o=n.type,u=Tr(o,n.pendingProps),$g(t,n,o,u,a);case 3:e:{if(Ue(n,n.stateNode.containerInfo),t===null)throw Error(s(387));o=n.pendingProps;var f=n.memoizedState;u=f.element,df(t,n),Co(n,o,null,a);var x=n.memoizedState;if(o=x.cache,La(n,un,o),o!==f.cache&&sf(n,[un],a,!0),Ro(),o=x.element,f.isDehydrated)if(f={element:o,isDehydrated:!1,cache:x.cache},n.updateQueue.baseState=f,n.memoizedState=f,n.flags&256){n=Jg(t,n,o,a);break e}else if(o!==u){u=di(Error(s(424)),n),yo(u),n=Jg(t,n,o,a);break e}else for(t=n.stateNode.containerInfo,t.nodeType===9?t=t.body:t=t.nodeName==="HTML"?t.ownerDocument.body:t,jt=vi(t.firstChild),Cn=n,bt=!0,Ua=null,mi=!0,a=Ym(n,null,o,a),n.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(vr(),o===u){n=ra(t,n,a);break e}Dn(t,n,o,a)}n=n.child}return n;case 26:return rc(t,n),t===null?(a=pv(n.type,null,n.pendingProps,null))?n.memoizedState=a:bt||(a=n.type,t=n.pendingProps,o=Mc(ne.current).createElement(a),o[cn]=n,o[Mn]=t,Un(o,a,t),A(o),n.stateNode=o):n.memoizedState=pv(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return Ge(n),t===null&&bt&&(o=n.stateNode=fv(n.type,n.pendingProps,ne.current),Cn=n,mi=!0,u=jt,qa(n.type)?(Td=u,jt=vi(o.firstChild)):jt=u),Dn(t,n,n.pendingProps.children,a),rc(t,n),t===null&&(n.flags|=4194304),n.child;case 5:return t===null&&bt&&((u=o=jt)&&(o=ky(o,n.type,n.pendingProps,mi),o!==null?(n.stateNode=o,Cn=n,jt=vi(o.firstChild),mi=!1,u=!0):u=!1),u||Na(n)),Ge(n),u=n.type,f=n.pendingProps,x=t!==null?t.memoizedProps:null,o=f.children,Sd(u,f)?o=null:x!==null&&Sd(u,x)&&(n.flags|=32),n.memoizedState!==null&&(u=xf(t,n,ay,null,null,a),Yo._currentValue=u),rc(t,n),Dn(t,n,o,a),n.child;case 6:return t===null&&bt&&((t=a=jt)&&(a=Xy(a,n.pendingProps,mi),a!==null?(n.stateNode=a,Cn=n,jt=null,t=!0):t=!1),t||Na(n)),null;case 13:return e0(t,n,a);case 4:return Ue(n,n.stateNode.containerInfo),o=n.pendingProps,t===null?n.child=br(n,null,o,a):Dn(t,n,o,a),n.child;case 11:return Wg(t,n,n.type,n.pendingProps,a);case 7:return Dn(t,n,n.pendingProps,a),n.child;case 8:return Dn(t,n,n.pendingProps.children,a),n.child;case 12:return Dn(t,n,n.pendingProps.children,a),n.child;case 10:return o=n.pendingProps,La(n,n.type,o.value),Dn(t,n,o.children,a),n.child;case 9:return u=n.type._context,o=n.pendingProps.children,xr(n),u=wn(u),o=o(u),n.flags|=1,Dn(t,n,o,a),n.child;case 14:return qg(t,n,n.type,n.pendingProps,a);case 15:return jg(t,n,n.type,n.pendingProps,a);case 19:return n0(t,n,a);case 31:return dy(t,n,a);case 22:return Yg(t,n,a,n.pendingProps);case 24:return xr(n),o=wn(un),t===null?(u=cf(),u===null&&(u=Xt,f=of(),u.pooledCache=f,f.refCount++,f!==null&&(u.pooledCacheLanes|=a),u=f),n.memoizedState={parent:o,cache:u},ff(n),La(n,un,u)):((t.lanes&a)!==0&&(df(t,n),Co(n,null,null,a),Ro()),u=t.memoizedState,f=n.memoizedState,u.parent!==o?(u={parent:o,cache:o},n.memoizedState=u,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=u),La(n,un,o)):(o=f.cache,La(n,un,o),o!==u.cache&&sf(n,[un],a,!0))),Dn(t,n,n.pendingProps.children,a),n.child;case 29:throw n.pendingProps}throw Error(s(156,n.tag))}function sa(t){t.flags|=4}function jf(t,n,a,o,u){if((n=(t.mode&32)!==0)&&(n=!1),n){if(t.flags|=16777216,(u&335544128)===u)if(t.stateNode.complete)t.flags|=8192;else if(D0())t.flags|=8192;else throw Mr=Xl,uf}else t.flags&=-16777217}function a0(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!xv(n))if(D0())t.flags|=8192;else throw Mr=Xl,uf}function oc(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?Ft():536870912,t.lanes|=n,ms|=n)}function Oo(t,n){if(!bt)switch(t.tailMode){case"hidden":n=t.tail;for(var a=null;n!==null;)n.alternate!==null&&(a=n),n=n.sibling;a===null?t.tail=null:a.sibling=null;break;case"collapsed":a=t.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:o.sibling=null}}function Yt(t){var n=t.alternate!==null&&t.alternate.child===t.child,a=0,o=0;if(n)for(var u=t.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags&65011712,o|=u.flags&65011712,u.return=t,u=u.sibling;else for(u=t.child;u!==null;)a|=u.lanes|u.childLanes,o|=u.subtreeFlags,o|=u.flags,u.return=t,u=u.sibling;return t.subtreeFlags|=o,t.childLanes=a,n}function py(t,n,a){var o=n.pendingProps;switch(ef(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Yt(n),null;case 1:return Yt(n),null;case 3:return a=n.stateNode,o=null,t!==null&&(o=t.memoizedState.cache),n.memoizedState.cache!==o&&(n.flags|=2048),na(un),Xe(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(t===null||t.child===null)&&(ns(n)?sa(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,nf())),Yt(n),null;case 26:var u=n.type,f=n.memoizedState;return t===null?(sa(n),f!==null?(Yt(n),a0(n,f)):(Yt(n),jf(n,u,null,o,a))):f?f!==t.memoizedState?(sa(n),Yt(n),a0(n,f)):(Yt(n),n.flags&=-16777217):(t=t.memoizedProps,t!==o&&sa(n),Yt(n),jf(n,u,t,o,a)),null;case 27:if(pt(n),a=ne.current,u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&sa(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return Yt(n),null}t=Re.current,ns(n)?Im(n):(t=fv(u,o,a),n.stateNode=t,sa(n))}return Yt(n),null;case 5:if(pt(n),u=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==o&&sa(n);else{if(!o){if(n.stateNode===null)throw Error(s(166));return Yt(n),null}if(f=Re.current,ns(n))Im(n);else{var x=Mc(ne.current);switch(f){case 1:f=x.createElementNS("http://www.w3.org/2000/svg",u);break;case 2:f=x.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;default:switch(u){case"svg":f=x.createElementNS("http://www.w3.org/2000/svg",u);break;case"math":f=x.createElementNS("http://www.w3.org/1998/Math/MathML",u);break;case"script":f=x.createElement("div"),f.innerHTML="<script><\/script>",f=f.removeChild(f.firstChild);break;case"select":f=typeof o.is=="string"?x.createElement("select",{is:o.is}):x.createElement("select"),o.multiple?f.multiple=!0:o.size&&(f.size=o.size);break;default:f=typeof o.is=="string"?x.createElement(u,{is:o.is}):x.createElement(u)}}f[cn]=n,f[Mn]=o;e:for(x=n.child;x!==null;){if(x.tag===5||x.tag===6)f.appendChild(x.stateNode);else if(x.tag!==4&&x.tag!==27&&x.child!==null){x.child.return=x,x=x.child;continue}if(x===n)break e;for(;x.sibling===null;){if(x.return===null||x.return===n)break e;x=x.return}x.sibling.return=x.return,x=x.sibling}n.stateNode=f;e:switch(Un(f,u,o),u){case"button":case"input":case"select":case"textarea":o=!!o.autoFocus;break e;case"img":o=!0;break e;default:o=!1}o&&sa(n)}}return Yt(n),jf(n,n.type,t===null?null:t.memoizedProps,n.pendingProps,a),null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==o&&sa(n);else{if(typeof o!="string"&&n.stateNode===null)throw Error(s(166));if(t=ne.current,ns(n)){if(t=n.stateNode,a=n.memoizedProps,o=null,u=Cn,u!==null)switch(u.tag){case 27:case 5:o=u.memoizedProps}t[cn]=n,t=!!(t.nodeValue===a||o!==null&&o.suppressHydrationWarning===!0||ev(t.nodeValue,a)),t||Na(n,!0)}else t=Mc(t).createTextNode(o),t[cn]=n,n.stateNode=t}return Yt(n),null;case 31:if(a=n.memoizedState,t===null||t.memoizedState!==null){if(o=ns(n),a!==null){if(t===null){if(!o)throw Error(s(318));if(t=n.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(s(557));t[cn]=n}else vr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Yt(n),t=!1}else a=nf(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=a),t=!0;if(!t)return n.flags&256?(Jn(n),n):(Jn(n),null);if((n.flags&128)!==0)throw Error(s(558))}return Yt(n),null;case 13:if(o=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(u=ns(n),o!==null&&o.dehydrated!==null){if(t===null){if(!u)throw Error(s(318));if(u=n.memoizedState,u=u!==null?u.dehydrated:null,!u)throw Error(s(317));u[cn]=n}else vr(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;Yt(n),u=!1}else u=nf(),t!==null&&t.memoizedState!==null&&(t.memoizedState.hydrationErrors=u),u=!0;if(!u)return n.flags&256?(Jn(n),n):(Jn(n),null)}return Jn(n),(n.flags&128)!==0?(n.lanes=a,n):(a=o!==null,t=t!==null&&t.memoizedState!==null,a&&(o=n.child,u=null,o.alternate!==null&&o.alternate.memoizedState!==null&&o.alternate.memoizedState.cachePool!==null&&(u=o.alternate.memoizedState.cachePool.pool),f=null,o.memoizedState!==null&&o.memoizedState.cachePool!==null&&(f=o.memoizedState.cachePool.pool),f!==u&&(o.flags|=2048)),a!==t&&a&&(n.child.flags|=8192),oc(n,n.updateQueue),Yt(n),null);case 4:return Xe(),t===null&&md(n.stateNode.containerInfo),Yt(n),null;case 10:return na(n.type),Yt(n),null;case 19:if(ie(rn),o=n.memoizedState,o===null)return Yt(n),null;if(u=(n.flags&128)!==0,f=o.rendering,f===null)if(u)Oo(o,!1);else{if(nn!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(f=Yl(t),f!==null){for(n.flags|=128,Oo(o,!1),t=f.updateQueue,n.updateQueue=t,oc(n,t),n.subtreeFlags=0,t=a,a=n.child;a!==null;)Nm(a,t),a=a.sibling;return ve(rn,rn.current&1|2),bt&&ea(n,o.treeForkCount),n.child}t=t.sibling}o.tail!==null&&b()>dc&&(n.flags|=128,u=!0,Oo(o,!1),n.lanes=4194304)}else{if(!u)if(t=Yl(f),t!==null){if(n.flags|=128,u=!0,t=t.updateQueue,n.updateQueue=t,oc(n,t),Oo(o,!0),o.tail===null&&o.tailMode==="hidden"&&!f.alternate&&!bt)return Yt(n),null}else 2*b()-o.renderingStartTime>dc&&a!==536870912&&(n.flags|=128,u=!0,Oo(o,!1),n.lanes=4194304);o.isBackwards?(f.sibling=n.child,n.child=f):(t=o.last,t!==null?t.sibling=f:n.child=f,o.last=f)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=b(),t.sibling=null,a=rn.current,ve(rn,u?a&1|2:a&1),bt&&ea(n,o.treeForkCount),t):(Yt(n),null);case 22:case 23:return Jn(n),gf(),o=n.memoizedState!==null,t!==null?t.memoizedState!==null!==o&&(n.flags|=8192):o&&(n.flags|=8192),o?(a&536870912)!==0&&(n.flags&128)===0&&(Yt(n),n.subtreeFlags&6&&(n.flags|=8192)):Yt(n),a=n.updateQueue,a!==null&&oc(n,a.retryQueue),a=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),o=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(o=n.memoizedState.cachePool.pool),o!==a&&(n.flags|=2048),t!==null&&ie(Sr),null;case 24:return a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),na(un),Yt(n),null;case 25:return null;case 30:return null}throw Error(s(156,n.tag))}function my(t,n){switch(ef(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return na(un),Xe(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return pt(n),null;case 31:if(n.memoizedState!==null){if(Jn(n),n.alternate===null)throw Error(s(340));vr()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 13:if(Jn(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(s(340));vr()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return ie(rn),null;case 4:return Xe(),null;case 10:return na(n.type),null;case 22:case 23:return Jn(n),gf(),t!==null&&ie(Sr),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return na(un),null;case 25:return null;default:return null}}function r0(t,n){switch(ef(n),n.tag){case 3:na(un),Xe();break;case 26:case 27:case 5:pt(n);break;case 4:Xe();break;case 31:n.memoizedState!==null&&Jn(n);break;case 13:Jn(n);break;case 19:ie(rn);break;case 10:na(n.type);break;case 22:case 23:Jn(n),gf(),t!==null&&ie(Sr);break;case 24:na(un)}}function Po(t,n){try{var a=n.updateQueue,o=a!==null?a.lastEffect:null;if(o!==null){var u=o.next;a=u;do{if((a.tag&t)===t){o=void 0;var f=a.create,x=a.inst;o=f(),x.destroy=o}a=a.next}while(a!==u)}}catch(T){zt(n,n.return,T)}}function za(t,n,a){try{var o=n.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var f=u.next;o=f;do{if((o.tag&t)===t){var x=o.inst,T=x.destroy;if(T!==void 0){x.destroy=void 0,u=n;var B=a,$=T;try{$()}catch(de){zt(u,B,de)}}}o=o.next}while(o!==f)}}catch(de){zt(n,n.return,de)}}function s0(t){var n=t.updateQueue;if(n!==null){var a=t.stateNode;try{Km(n,a)}catch(o){zt(t,t.return,o)}}}function o0(t,n,a){a.props=Tr(t.type,t.memoizedProps),a.state=t.memoizedState;try{a.componentWillUnmount()}catch(o){zt(t,n,o)}}function Fo(t,n){try{var a=t.ref;if(a!==null){switch(t.tag){case 26:case 27:case 5:var o=t.stateNode;break;case 30:o=t.stateNode;break;default:o=t.stateNode}typeof a=="function"?t.refCleanup=a(o):a.current=o}}catch(u){zt(t,n,u)}}function zi(t,n){var a=t.ref,o=t.refCleanup;if(a!==null)if(typeof o=="function")try{o()}catch(u){zt(t,n,u)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(u){zt(t,n,u)}else a.current=null}function l0(t){var n=t.type,a=t.memoizedProps,o=t.stateNode;try{e:switch(n){case"button":case"input":case"select":case"textarea":a.autoFocus&&o.focus();break e;case"img":a.src?o.src=a.src:a.srcSet&&(o.srcset=a.srcSet)}}catch(u){zt(t,t.return,u)}}function Yf(t,n,a){try{var o=t.stateNode;Iy(o,t.type,a,n),o[Mn]=n}catch(u){zt(t,t.return,u)}}function c0(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27&&qa(t.type)||t.tag===4}function Zf(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||c0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.tag===27&&qa(t.type)||t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Kf(t,n,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(t,n):(n=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,n.appendChild(t),a=a._reactRootContainer,a!=null||n.onclick!==null||(n.onclick=Qi));else if(o!==4&&(o===27&&qa(t.type)&&(a=t.stateNode,n=null),t=t.child,t!==null))for(Kf(t,n,a),t=t.sibling;t!==null;)Kf(t,n,a),t=t.sibling}function lc(t,n,a){var o=t.tag;if(o===5||o===6)t=t.stateNode,n?a.insertBefore(t,n):a.appendChild(t);else if(o!==4&&(o===27&&qa(t.type)&&(a=t.stateNode),t=t.child,t!==null))for(lc(t,n,a),t=t.sibling;t!==null;)lc(t,n,a),t=t.sibling}function u0(t){var n=t.stateNode,a=t.memoizedProps;try{for(var o=t.type,u=n.attributes;u.length;)n.removeAttributeNode(u[0]);Un(n,o,a),n[cn]=t,n[Mn]=a}catch(f){zt(t,t.return,f)}}var oa=!1,hn=!1,Qf=!1,f0=typeof WeakSet=="function"?WeakSet:Set,xn=null;function gy(t,n){if(t=t.containerInfo,_d=wc,t=bm(t),ku(t)){if("selectionStart"in t)var a={start:t.selectionStart,end:t.selectionEnd};else e:{a=(a=t.ownerDocument)&&a.defaultView||window;var o=a.getSelection&&a.getSelection();if(o&&o.rangeCount!==0){a=o.anchorNode;var u=o.anchorOffset,f=o.focusNode;o=o.focusOffset;try{a.nodeType,f.nodeType}catch{a=null;break e}var x=0,T=-1,B=-1,$=0,de=0,ge=t,te=null;t:for(;;){for(var le;ge!==a||u!==0&&ge.nodeType!==3||(T=x+u),ge!==f||o!==0&&ge.nodeType!==3||(B=x+o),ge.nodeType===3&&(x+=ge.nodeValue.length),(le=ge.firstChild)!==null;)te=ge,ge=le;for(;;){if(ge===t)break t;if(te===a&&++$===u&&(T=x),te===f&&++de===o&&(B=x),(le=ge.nextSibling)!==null)break;ge=te,te=ge.parentNode}ge=le}a=T===-1||B===-1?null:{start:T,end:B}}else a=null}a=a||{start:0,end:0}}else a=null;for(xd={focusedElem:t,selectionRange:a},wc=!1,xn=n;xn!==null;)if(n=xn,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,xn=t;else for(;xn!==null;){switch(n=xn,f=n.alternate,t=n.flags,n.tag){case 0:if((t&4)!==0&&(t=n.updateQueue,t=t!==null?t.events:null,t!==null))for(a=0;a<t.length;a++)u=t[a],u.ref.impl=u.nextImpl;break;case 11:case 15:break;case 1:if((t&1024)!==0&&f!==null){t=void 0,a=n,u=f.memoizedProps,f=f.memoizedState,o=a.stateNode;try{var ke=Tr(a.type,u);t=o.getSnapshotBeforeUpdate(ke,f),o.__reactInternalSnapshotBeforeUpdate=t}catch(tt){zt(a,a.return,tt)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,a=t.nodeType,a===9)Md(t);else if(a===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Md(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(s(163))}if(t=n.sibling,t!==null){t.return=n.return,xn=t;break}xn=n.return}}function d0(t,n,a){var o=a.flags;switch(a.tag){case 0:case 11:case 15:ca(t,a),o&4&&Po(5,a);break;case 1:if(ca(t,a),o&4)if(t=a.stateNode,n===null)try{t.componentDidMount()}catch(x){zt(a,a.return,x)}else{var u=Tr(a.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(u,n,t.__reactInternalSnapshotBeforeUpdate)}catch(x){zt(a,a.return,x)}}o&64&&s0(a),o&512&&Fo(a,a.return);break;case 3:if(ca(t,a),o&64&&(t=a.updateQueue,t!==null)){if(n=null,a.child!==null)switch(a.child.tag){case 27:case 5:n=a.child.stateNode;break;case 1:n=a.child.stateNode}try{Km(t,n)}catch(x){zt(a,a.return,x)}}break;case 27:n===null&&o&4&&u0(a);case 26:case 5:ca(t,a),n===null&&o&4&&l0(a),o&512&&Fo(a,a.return);break;case 12:ca(t,a);break;case 31:ca(t,a),o&4&&m0(t,a);break;case 13:ca(t,a),o&4&&g0(t,a),o&64&&(t=a.memoizedState,t!==null&&(t=t.dehydrated,t!==null&&(a=Ty.bind(null,a),Wy(t,a))));break;case 22:if(o=a.memoizedState!==null||oa,!o){n=n!==null&&n.memoizedState!==null||hn,u=oa;var f=hn;oa=o,(hn=n)&&!f?ua(t,a,(a.subtreeFlags&8772)!==0):ca(t,a),oa=u,hn=f}break;case 30:break;default:ca(t,a)}}function h0(t){var n=t.alternate;n!==null&&(t.alternate=null,h0(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&co(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var $t=null,Wn=!1;function la(t,n,a){for(a=a.child;a!==null;)p0(t,n,a),a=a.sibling}function p0(t,n,a){if(Ee&&typeof Ee.onCommitFiberUnmount=="function")try{Ee.onCommitFiberUnmount(be,a)}catch{}switch(a.tag){case 26:hn||zi(a,n),la(t,n,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:hn||zi(a,n);var o=$t,u=Wn;qa(a.type)&&($t=a.stateNode,Wn=!1),la(t,n,a),Wo(a.stateNode),$t=o,Wn=u;break;case 5:hn||zi(a,n);case 6:if(o=$t,u=Wn,$t=null,la(t,n,a),$t=o,Wn=u,$t!==null)if(Wn)try{($t.nodeType===9?$t.body:$t.nodeName==="HTML"?$t.ownerDocument.body:$t).removeChild(a.stateNode)}catch(f){zt(a,n,f)}else try{$t.removeChild(a.stateNode)}catch(f){zt(a,n,f)}break;case 18:$t!==null&&(Wn?(t=$t,sv(t.nodeType===9?t.body:t.nodeName==="HTML"?t.ownerDocument.body:t,a.stateNode),bs(t)):sv($t,a.stateNode));break;case 4:o=$t,u=Wn,$t=a.stateNode.containerInfo,Wn=!0,la(t,n,a),$t=o,Wn=u;break;case 0:case 11:case 14:case 15:za(2,a,n),hn||za(4,a,n),la(t,n,a);break;case 1:hn||(zi(a,n),o=a.stateNode,typeof o.componentWillUnmount=="function"&&o0(a,n,o)),la(t,n,a);break;case 21:la(t,n,a);break;case 22:hn=(o=hn)||a.memoizedState!==null,la(t,n,a),hn=o;break;default:la(t,n,a)}}function m0(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null))){t=t.dehydrated;try{bs(t)}catch(a){zt(n,n.return,a)}}}function g0(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{bs(t)}catch(a){zt(n,n.return,a)}}function vy(t){switch(t.tag){case 31:case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new f0),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new f0),n;default:throw Error(s(435,t.tag))}}function cc(t,n){var a=vy(t);n.forEach(function(o){if(!a.has(o)){a.add(o);var u=Ay.bind(null,t,o);o.then(u,u)}})}function qn(t,n){var a=n.deletions;if(a!==null)for(var o=0;o<a.length;o++){var u=a[o],f=t,x=n,T=x;e:for(;T!==null;){switch(T.tag){case 27:if(qa(T.type)){$t=T.stateNode,Wn=!1;break e}break;case 5:$t=T.stateNode,Wn=!1;break e;case 3:case 4:$t=T.stateNode.containerInfo,Wn=!0;break e}T=T.return}if($t===null)throw Error(s(160));p0(f,x,u),$t=null,Wn=!1,f=u.alternate,f!==null&&(f.return=null),u.return=null}if(n.subtreeFlags&13886)for(n=n.child;n!==null;)v0(n,t),n=n.sibling}var Ti=null;function v0(t,n){var a=t.alternate,o=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:qn(n,t),jn(t),o&4&&(za(3,t,t.return),Po(3,t),za(5,t,t.return));break;case 1:qn(n,t),jn(t),o&512&&(hn||a===null||zi(a,a.return)),o&64&&oa&&(t=t.updateQueue,t!==null&&(o=t.callbacks,o!==null&&(a=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=a===null?o:a.concat(o))));break;case 26:var u=Ti;if(qn(n,t),jn(t),o&512&&(hn||a===null||zi(a,a.return)),o&4){var f=a!==null?a.memoizedState:null;if(o=t.memoizedState,a===null)if(o===null)if(t.stateNode===null){e:{o=t.type,a=t.memoizedProps,u=u.ownerDocument||u;t:switch(o){case"title":f=u.getElementsByTagName("title")[0],(!f||f[ur]||f[cn]||f.namespaceURI==="http://www.w3.org/2000/svg"||f.hasAttribute("itemprop"))&&(f=u.createElement(o),u.head.insertBefore(f,u.querySelector("head > title"))),Un(f,o,a),f[cn]=t,A(f),o=f;break e;case"link":var x=vv("link","href",u).get(o+(a.href||""));if(x){for(var T=0;T<x.length;T++)if(f=x[T],f.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&f.getAttribute("rel")===(a.rel==null?null:a.rel)&&f.getAttribute("title")===(a.title==null?null:a.title)&&f.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){x.splice(T,1);break t}}f=u.createElement(o),Un(f,o,a),u.head.appendChild(f);break;case"meta":if(x=vv("meta","content",u).get(o+(a.content||""))){for(T=0;T<x.length;T++)if(f=x[T],f.getAttribute("content")===(a.content==null?null:""+a.content)&&f.getAttribute("name")===(a.name==null?null:a.name)&&f.getAttribute("property")===(a.property==null?null:a.property)&&f.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&f.getAttribute("charset")===(a.charSet==null?null:a.charSet)){x.splice(T,1);break t}}f=u.createElement(o),Un(f,o,a),u.head.appendChild(f);break;default:throw Error(s(468,o))}f[cn]=t,A(f),o=f}t.stateNode=o}else _v(u,t.type,t.stateNode);else t.stateNode=gv(u,o,t.memoizedProps);else f!==o?(f===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):f.count--,o===null?_v(u,t.type,t.stateNode):gv(u,o,t.memoizedProps)):o===null&&t.stateNode!==null&&Yf(t,t.memoizedProps,a.memoizedProps)}break;case 27:qn(n,t),jn(t),o&512&&(hn||a===null||zi(a,a.return)),a!==null&&o&4&&Yf(t,t.memoizedProps,a.memoizedProps);break;case 5:if(qn(n,t),jn(t),o&512&&(hn||a===null||zi(a,a.return)),t.flags&32){u=t.stateNode;try{mn(u,"")}catch(ke){zt(t,t.return,ke)}}o&4&&t.stateNode!=null&&(u=t.memoizedProps,Yf(t,u,a!==null?a.memoizedProps:u)),o&1024&&(Qf=!0);break;case 6:if(qn(n,t),jn(t),o&4){if(t.stateNode===null)throw Error(s(162));o=t.memoizedProps,a=t.stateNode;try{a.nodeValue=o}catch(ke){zt(t,t.return,ke)}}break;case 3:if(Tc=null,u=Ti,Ti=bc(n.containerInfo),qn(n,t),Ti=u,jn(t),o&4&&a!==null&&a.memoizedState.isDehydrated)try{bs(n.containerInfo)}catch(ke){zt(t,t.return,ke)}Qf&&(Qf=!1,_0(t));break;case 4:o=Ti,Ti=bc(t.stateNode.containerInfo),qn(n,t),jn(t),Ti=o;break;case 12:qn(n,t),jn(t);break;case 31:qn(n,t),jn(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,cc(t,o)));break;case 13:qn(n,t),jn(t),t.child.flags&8192&&t.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(fc=b()),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,cc(t,o)));break;case 22:u=t.memoizedState!==null;var B=a!==null&&a.memoizedState!==null,$=oa,de=hn;if(oa=$||u,hn=de||B,qn(n,t),hn=de,oa=$,jn(t),o&8192)e:for(n=t.stateNode,n._visibility=u?n._visibility&-2:n._visibility|1,u&&(a===null||B||oa||hn||Ar(t)),a=null,n=t;;){if(n.tag===5||n.tag===26){if(a===null){B=a=n;try{if(f=B.stateNode,u)x=f.style,typeof x.setProperty=="function"?x.setProperty("display","none","important"):x.display="none";else{T=B.stateNode;var ge=B.memoizedProps.style,te=ge!=null&&ge.hasOwnProperty("display")?ge.display:null;T.style.display=te==null||typeof te=="boolean"?"":(""+te).trim()}}catch(ke){zt(B,B.return,ke)}}}else if(n.tag===6){if(a===null){B=n;try{B.stateNode.nodeValue=u?"":B.memoizedProps}catch(ke){zt(B,B.return,ke)}}}else if(n.tag===18){if(a===null){B=n;try{var le=B.stateNode;u?ov(le,!0):ov(B.stateNode,!1)}catch(ke){zt(B,B.return,ke)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break e;for(;n.sibling===null;){if(n.return===null||n.return===t)break e;a===n&&(a=null),n=n.return}a===n&&(a=null),n.sibling.return=n.return,n=n.sibling}o&4&&(o=t.updateQueue,o!==null&&(a=o.retryQueue,a!==null&&(o.retryQueue=null,cc(t,a))));break;case 19:qn(n,t),jn(t),o&4&&(o=t.updateQueue,o!==null&&(t.updateQueue=null,cc(t,o)));break;case 30:break;case 21:break;default:qn(n,t),jn(t)}}function jn(t){var n=t.flags;if(n&2){try{for(var a,o=t.return;o!==null;){if(c0(o)){a=o;break}o=o.return}if(a==null)throw Error(s(160));switch(a.tag){case 27:var u=a.stateNode,f=Zf(t);lc(t,f,u);break;case 5:var x=a.stateNode;a.flags&32&&(mn(x,""),a.flags&=-33);var T=Zf(t);lc(t,T,x);break;case 3:case 4:var B=a.stateNode.containerInfo,$=Zf(t);Kf(t,$,B);break;default:throw Error(s(161))}}catch(de){zt(t,t.return,de)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function _0(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;_0(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function ca(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)d0(t,n.alternate,n),n=n.sibling}function Ar(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:za(4,n,n.return),Ar(n);break;case 1:zi(n,n.return);var a=n.stateNode;typeof a.componentWillUnmount=="function"&&o0(n,n.return,a),Ar(n);break;case 27:Wo(n.stateNode);case 26:case 5:zi(n,n.return),Ar(n);break;case 22:n.memoizedState===null&&Ar(n);break;case 30:Ar(n);break;default:Ar(n)}t=t.sibling}}function ua(t,n,a){for(a=a&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var o=n.alternate,u=t,f=n,x=f.flags;switch(f.tag){case 0:case 11:case 15:ua(u,f,a),Po(4,f);break;case 1:if(ua(u,f,a),o=f,u=o.stateNode,typeof u.componentDidMount=="function")try{u.componentDidMount()}catch($){zt(o,o.return,$)}if(o=f,u=o.updateQueue,u!==null){var T=o.stateNode;try{var B=u.shared.hiddenCallbacks;if(B!==null)for(u.shared.hiddenCallbacks=null,u=0;u<B.length;u++)Zm(B[u],T)}catch($){zt(o,o.return,$)}}a&&x&64&&s0(f),Fo(f,f.return);break;case 27:u0(f);case 26:case 5:ua(u,f,a),a&&o===null&&x&4&&l0(f),Fo(f,f.return);break;case 12:ua(u,f,a);break;case 31:ua(u,f,a),a&&x&4&&m0(u,f);break;case 13:ua(u,f,a),a&&x&4&&g0(u,f);break;case 22:f.memoizedState===null&&ua(u,f,a),Fo(f,f.return);break;case 30:break;default:ua(u,f,a)}n=n.sibling}}function $f(t,n){var a=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(a=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==a&&(t!=null&&t.refCount++,a!=null&&Mo(a))}function Jf(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Mo(t))}function Ai(t,n,a,o){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)x0(t,n,a,o),n=n.sibling}function x0(t,n,a,o){var u=n.flags;switch(n.tag){case 0:case 11:case 15:Ai(t,n,a,o),u&2048&&Po(9,n);break;case 1:Ai(t,n,a,o);break;case 3:Ai(t,n,a,o),u&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&Mo(t)));break;case 12:if(u&2048){Ai(t,n,a,o),t=n.stateNode;try{var f=n.memoizedProps,x=f.id,T=f.onPostCommit;typeof T=="function"&&T(x,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(B){zt(n,n.return,B)}}else Ai(t,n,a,o);break;case 31:Ai(t,n,a,o);break;case 13:Ai(t,n,a,o);break;case 23:break;case 22:f=n.stateNode,x=n.alternate,n.memoizedState!==null?f._visibility&2?Ai(t,n,a,o):Io(t,n):f._visibility&2?Ai(t,n,a,o):(f._visibility|=2,ds(t,n,a,o,(n.subtreeFlags&10256)!==0||!1)),u&2048&&$f(x,n);break;case 24:Ai(t,n,a,o),u&2048&&Jf(n.alternate,n);break;default:Ai(t,n,a,o)}}function ds(t,n,a,o,u){for(u=u&&((n.subtreeFlags&10256)!==0||!1),n=n.child;n!==null;){var f=t,x=n,T=a,B=o,$=x.flags;switch(x.tag){case 0:case 11:case 15:ds(f,x,T,B,u),Po(8,x);break;case 23:break;case 22:var de=x.stateNode;x.memoizedState!==null?de._visibility&2?ds(f,x,T,B,u):Io(f,x):(de._visibility|=2,ds(f,x,T,B,u)),u&&$&2048&&$f(x.alternate,x);break;case 24:ds(f,x,T,B,u),u&&$&2048&&Jf(x.alternate,x);break;default:ds(f,x,T,B,u)}n=n.sibling}}function Io(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var a=t,o=n,u=o.flags;switch(o.tag){case 22:Io(a,o),u&2048&&$f(o.alternate,o);break;case 24:Io(a,o),u&2048&&Jf(o.alternate,o);break;default:Io(a,o)}n=n.sibling}}var Bo=8192;function hs(t,n,a){if(t.subtreeFlags&Bo)for(t=t.child;t!==null;)S0(t,n,a),t=t.sibling}function S0(t,n,a){switch(t.tag){case 26:hs(t,n,a),t.flags&Bo&&t.memoizedState!==null&&iM(a,Ti,t.memoizedState,t.memoizedProps);break;case 5:hs(t,n,a);break;case 3:case 4:var o=Ti;Ti=bc(t.stateNode.containerInfo),hs(t,n,a),Ti=o;break;case 22:t.memoizedState===null&&(o=t.alternate,o!==null&&o.memoizedState!==null?(o=Bo,Bo=16777216,hs(t,n,a),Bo=o):hs(t,n,a));break;default:hs(t,n,a)}}function y0(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function zo(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];xn=o,b0(o,t)}y0(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)M0(t),t=t.sibling}function M0(t){switch(t.tag){case 0:case 11:case 15:zo(t),t.flags&2048&&za(9,t,t.return);break;case 3:zo(t);break;case 12:zo(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&2&&(t.return===null||t.return.tag!==13)?(n._visibility&=-3,uc(t)):zo(t);break;default:zo(t)}}function uc(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var a=0;a<n.length;a++){var o=n[a];xn=o,b0(o,t)}y0(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:za(8,n,n.return),uc(n);break;case 22:a=n.stateNode,a._visibility&2&&(a._visibility&=-3,uc(n));break;default:uc(n)}t=t.sibling}}function b0(t,n){for(;xn!==null;){var a=xn;switch(a.tag){case 0:case 11:case 15:za(8,a,n);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var o=a.memoizedState.cachePool.pool;o!=null&&o.refCount++}break;case 24:Mo(a.memoizedState.cache)}if(o=a.child,o!==null)o.return=a,xn=o;else e:for(a=t;xn!==null;){o=xn;var u=o.sibling,f=o.return;if(h0(o),o===a){xn=null;break e}if(u!==null){u.return=f,xn=u;break e}xn=f}}}var _y={getCacheForType:function(t){var n=wn(un),a=n.data.get(t);return a===void 0&&(a=t(),n.data.set(t,a)),a},cacheSignal:function(){return wn(un).controller.signal}},xy=typeof WeakMap=="function"?WeakMap:Map,Lt=0,Xt=null,gt=null,St=0,Bt=0,ei=null,Ha=!1,ps=!1,ed=!1,fa=0,nn=0,Ga=0,Rr=0,td=0,ti=0,ms=0,Ho=null,Yn=null,nd=!1,fc=0,E0=0,dc=1/0,hc=null,Va=null,gn=0,ka=null,gs=null,da=0,id=0,ad=null,T0=null,Go=0,rd=null;function ni(){return(Lt&2)!==0&&St!==0?St&-St:P.T!==null?fd():oo()}function A0(){if(ti===0)if((St&536870912)===0||bt){var t=Te;Te<<=1,(Te&3932160)===0&&(Te=262144),ti=t}else ti=536870912;return t=$n.current,t!==null&&(t.flags|=32),ti}function Zn(t,n,a){(t===Xt&&(Bt===2||Bt===9)||t.cancelPendingCommit!==null)&&(vs(t,0),Xa(t,St,ti,!1)),Ln(t,a),((Lt&2)===0||t!==Xt)&&(t===Xt&&((Lt&2)===0&&(Rr|=a),nn===4&&Xa(t,St,ti,!1)),Hi(t))}function R0(t,n,a){if((Lt&6)!==0)throw Error(s(327));var o=!a&&(n&127)===0&&(n&t.expiredLanes)===0||Ce(t,n),u=o?My(t,n):od(t,n,!0),f=o;do{if(u===0){ps&&!o&&Xa(t,n,0,!1);break}else{if(a=t.current.alternate,f&&!Sy(a)){u=od(t,n,!1),f=!1;continue}if(u===2){if(f=n,t.errorRecoveryDisabledLanes&f)var x=0;else x=t.pendingLanes&-536870913,x=x!==0?x:x&536870912?536870912:0;if(x!==0){n=x;e:{var T=t;u=Ho;var B=T.current.memoizedState.isDehydrated;if(B&&(vs(T,x).flags|=256),x=od(T,x,!1),x!==2){if(ed&&!B){T.errorRecoveryDisabledLanes|=f,Rr|=f,u=4;break e}f=Yn,Yn=u,f!==null&&(Yn===null?Yn=f:Yn.push.apply(Yn,f))}u=x}if(f=!1,u!==2)continue}}if(u===1){vs(t,0),Xa(t,n,0,!0);break}e:{switch(o=t,f=u,f){case 0:case 1:throw Error(s(345));case 4:if((n&4194048)!==n)break;case 6:Xa(o,n,ti,!Ha);break e;case 2:Yn=null;break;case 3:case 5:break;default:throw Error(s(329))}if((n&62914560)===n&&(u=fc+300-b(),10<u)){if(Xa(o,n,ti,!Ha),_e(o,0,!0)!==0)break e;da=n,o.timeoutHandle=av(C0.bind(null,o,a,Yn,hc,nd,n,ti,Rr,ms,Ha,f,"Throttled",-0,0),u);break e}C0(o,a,Yn,hc,nd,n,ti,Rr,ms,Ha,f,null,-0,0)}}break}while(!0);Hi(t)}function C0(t,n,a,o,u,f,x,T,B,$,de,ge,te,le){if(t.timeoutHandle=-1,ge=n.subtreeFlags,ge&8192||(ge&16785408)===16785408){ge={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Qi},S0(n,f,ge);var ke=(f&62914560)===f?fc-b():(f&4194048)===f?E0-b():0;if(ke=aM(ge,ke),ke!==null){da=f,t.cancelPendingCommit=ke(F0.bind(null,t,n,f,a,o,u,x,T,B,de,ge,null,te,le)),Xa(t,f,x,!$);return}}F0(t,n,f,a,o,u,x,T,B)}function Sy(t){for(var n=t;;){var a=n.tag;if((a===0||a===11||a===15)&&n.flags&16384&&(a=n.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var o=0;o<a.length;o++){var u=a[o],f=u.getSnapshot;u=u.value;try{if(!Kn(f(),u))return!1}catch{return!1}}if(a=n.child,n.subtreeFlags&16384&&a!==null)a.return=n,n=a;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function Xa(t,n,a,o){n&=~td,n&=~Rr,t.suspendedLanes|=n,t.pingedLanes&=~n,o&&(t.warmLanes|=n),o=t.expirationTimes;for(var u=n;0<u;){var f=31-Fe(u),x=1<<f;o[f]=-1,u&=~x}a!==0&&Tl(t,a,n)}function pc(){return(Lt&6)===0?(Vo(0),!1):!0}function sd(){if(gt!==null){if(Bt===0)var t=gt.return;else t=gt,ta=_r=null,Mf(t),os=null,Eo=0,t=gt;for(;t!==null;)r0(t.alternate,t),t=t.return;gt=null}}function vs(t,n){var a=t.timeoutHandle;a!==-1&&(t.timeoutHandle=-1,Hy(a)),a=t.cancelPendingCommit,a!==null&&(t.cancelPendingCommit=null,a()),da=0,sd(),Xt=t,gt=a=Ji(t.current,null),St=n,Bt=0,ei=null,Ha=!1,ps=Ce(t,n),ed=!1,ms=ti=td=Rr=Ga=nn=0,Yn=Ho=null,nd=!1,(n&8)!==0&&(n|=n&32);var o=t.entangledLanes;if(o!==0)for(t=t.entanglements,o&=n;0<o;){var u=31-Fe(o),f=1<<u;n|=t[u],o&=~f}return fa=n,Pl(),a}function w0(t,n){lt=null,P.H=No,n===ss||n===kl?(n=Wm(),Bt=3):n===uf?(n=Wm(),Bt=4):Bt=n===Bf?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,ei=n,gt===null&&(nn=1,ic(t,di(n,t.current)))}function D0(){var t=$n.current;return t===null?!0:(St&4194048)===St?gi===null:(St&62914560)===St||(St&536870912)!==0?t===gi:!1}function U0(){var t=P.H;return P.H=No,t===null?No:t}function N0(){var t=P.A;return P.A=_y,t}function mc(){nn=4,Ha||(St&4194048)!==St&&$n.current!==null||(ps=!0),(Ga&134217727)===0&&(Rr&134217727)===0||Xt===null||Xa(Xt,St,ti,!1)}function od(t,n,a){var o=Lt;Lt|=2;var u=U0(),f=N0();(Xt!==t||St!==n)&&(hc=null,vs(t,n)),n=!1;var x=nn;e:do try{if(Bt!==0&&gt!==null){var T=gt,B=ei;switch(Bt){case 8:sd(),x=6;break e;case 3:case 2:case 9:case 6:$n.current===null&&(n=!0);var $=Bt;if(Bt=0,ei=null,_s(t,T,B,$),a&&ps){x=0;break e}break;default:$=Bt,Bt=0,ei=null,_s(t,T,B,$)}}yy(),x=nn;break}catch(de){w0(t,de)}while(!0);return n&&t.shellSuspendCounter++,ta=_r=null,Lt=o,P.H=u,P.A=f,gt===null&&(Xt=null,St=0,Pl()),x}function yy(){for(;gt!==null;)L0(gt)}function My(t,n){var a=Lt;Lt|=2;var o=U0(),u=N0();Xt!==t||St!==n?(hc=null,dc=b()+500,vs(t,n)):ps=Ce(t,n);e:do try{if(Bt!==0&&gt!==null){n=gt;var f=ei;t:switch(Bt){case 1:Bt=0,ei=null,_s(t,n,f,1);break;case 2:case 9:if(km(f)){Bt=0,ei=null,O0(n);break}n=function(){Bt!==2&&Bt!==9||Xt!==t||(Bt=7),Hi(t)},f.then(n,n);break e;case 3:Bt=7;break e;case 4:Bt=5;break e;case 7:km(f)?(Bt=0,ei=null,O0(n)):(Bt=0,ei=null,_s(t,n,f,7));break;case 5:var x=null;switch(gt.tag){case 26:x=gt.memoizedState;case 5:case 27:var T=gt;if(x?xv(x):T.stateNode.complete){Bt=0,ei=null;var B=T.sibling;if(B!==null)gt=B;else{var $=T.return;$!==null?(gt=$,gc($)):gt=null}break t}}Bt=0,ei=null,_s(t,n,f,5);break;case 6:Bt=0,ei=null,_s(t,n,f,6);break;case 8:sd(),nn=6;break e;default:throw Error(s(462))}}by();break}catch(de){w0(t,de)}while(!0);return ta=_r=null,P.H=o,P.A=u,Lt=a,gt!==null?0:(Xt=null,St=0,Pl(),nn)}function by(){for(;gt!==null&&!Ye();)L0(gt)}function L0(t){var n=i0(t.alternate,t,fa);t.memoizedProps=t.pendingProps,n===null?gc(t):gt=n}function O0(t){var n=t,a=n.alternate;switch(n.tag){case 15:case 0:n=Qg(a,n,n.pendingProps,n.type,void 0,St);break;case 11:n=Qg(a,n,n.pendingProps,n.type.render,n.ref,St);break;case 5:Mf(n);default:r0(a,n),n=gt=Nm(n,fa),n=i0(a,n,fa)}t.memoizedProps=t.pendingProps,n===null?gc(t):gt=n}function _s(t,n,a,o){ta=_r=null,Mf(n),os=null,Eo=0;var u=n.return;try{if(fy(t,u,n,a,St)){nn=1,ic(t,di(a,t.current)),gt=null;return}}catch(f){if(u!==null)throw gt=u,f;nn=1,ic(t,di(a,t.current)),gt=null;return}n.flags&32768?(bt||o===1?t=!0:ps||(St&536870912)!==0?t=!1:(Ha=t=!0,(o===2||o===9||o===3||o===6)&&(o=$n.current,o!==null&&o.tag===13&&(o.flags|=16384))),P0(n,t)):gc(n)}function gc(t){var n=t;do{if((n.flags&32768)!==0){P0(n,Ha);return}t=n.return;var a=py(n.alternate,n,fa);if(a!==null){gt=a;return}if(n=n.sibling,n!==null){gt=n;return}gt=n=t}while(n!==null);nn===0&&(nn=5)}function P0(t,n){do{var a=my(t.alternate,t);if(a!==null){a.flags&=32767,gt=a;return}if(a=t.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!n&&(t=t.sibling,t!==null)){gt=t;return}gt=t=a}while(t!==null);nn=6,gt=null}function F0(t,n,a,o,u,f,x,T,B){t.cancelPendingCommit=null;do vc();while(gn!==0);if((Lt&6)!==0)throw Error(s(327));if(n!==null){if(n===t.current)throw Error(s(177));if(f=n.lanes|n.childLanes,f|=Yu,yi(t,a,f,x,T,B),t===Xt&&(gt=Xt=null,St=0),gs=n,ka=t,da=a,id=f,ad=u,T0=o,(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?(t.callbackNode=null,t.callbackPriority=0,Ry(ce,function(){return G0(),null})):(t.callbackNode=null,t.callbackPriority=0),o=(n.flags&13878)!==0,(n.subtreeFlags&13878)!==0||o){o=P.T,P.T=null,u=H.p,H.p=2,x=Lt,Lt|=4;try{gy(t,n,a)}finally{Lt=x,H.p=u,P.T=o}}gn=1,I0(),B0(),z0()}}function I0(){if(gn===1){gn=0;var t=ka,n=gs,a=(n.flags&13878)!==0;if((n.subtreeFlags&13878)!==0||a){a=P.T,P.T=null;var o=H.p;H.p=2;var u=Lt;Lt|=4;try{v0(n,t);var f=xd,x=bm(t.containerInfo),T=f.focusedElem,B=f.selectionRange;if(x!==T&&T&&T.ownerDocument&&Mm(T.ownerDocument.documentElement,T)){if(B!==null&&ku(T)){var $=B.start,de=B.end;if(de===void 0&&(de=$),"selectionStart"in T)T.selectionStart=$,T.selectionEnd=Math.min(de,T.value.length);else{var ge=T.ownerDocument||document,te=ge&&ge.defaultView||window;if(te.getSelection){var le=te.getSelection(),ke=T.textContent.length,tt=Math.min(B.start,ke),kt=B.end===void 0?tt:Math.min(B.end,ke);!le.extend&&tt>kt&&(x=kt,kt=tt,tt=x);var j=ym(T,tt),V=ym(T,kt);if(j&&V&&(le.rangeCount!==1||le.anchorNode!==j.node||le.anchorOffset!==j.offset||le.focusNode!==V.node||le.focusOffset!==V.offset)){var Q=ge.createRange();Q.setStart(j.node,j.offset),le.removeAllRanges(),tt>kt?(le.addRange(Q),le.extend(V.node,V.offset)):(Q.setEnd(V.node,V.offset),le.addRange(Q))}}}}for(ge=[],le=T;le=le.parentNode;)le.nodeType===1&&ge.push({element:le,left:le.scrollLeft,top:le.scrollTop});for(typeof T.focus=="function"&&T.focus(),T=0;T<ge.length;T++){var me=ge[T];me.element.scrollLeft=me.left,me.element.scrollTop=me.top}}wc=!!_d,xd=_d=null}finally{Lt=u,H.p=o,P.T=a}}t.current=n,gn=2}}function B0(){if(gn===2){gn=0;var t=ka,n=gs,a=(n.flags&8772)!==0;if((n.subtreeFlags&8772)!==0||a){a=P.T,P.T=null;var o=H.p;H.p=2;var u=Lt;Lt|=4;try{d0(t,n.alternate,n)}finally{Lt=u,H.p=o,P.T=a}}gn=3}}function z0(){if(gn===4||gn===3){gn=0,D();var t=ka,n=gs,a=da,o=T0;(n.subtreeFlags&10256)!==0||(n.flags&10256)!==0?gn=5:(gn=0,gs=ka=null,H0(t,t.pendingLanes));var u=t.pendingLanes;if(u===0&&(Va=null),kr(a),n=n.stateNode,Ee&&typeof Ee.onCommitFiberRoot=="function")try{Ee.onCommitFiberRoot(be,n,void 0,(n.current.flags&128)===128)}catch{}if(o!==null){n=P.T,u=H.p,H.p=2,P.T=null;try{for(var f=t.onRecoverableError,x=0;x<o.length;x++){var T=o[x];f(T.value,{componentStack:T.stack})}}finally{P.T=n,H.p=u}}(da&3)!==0&&vc(),Hi(t),u=t.pendingLanes,(a&261930)!==0&&(u&42)!==0?t===rd?Go++:(Go=0,rd=t):Go=0,Vo(0)}}function H0(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,Mo(n)))}function vc(){return I0(),B0(),z0(),G0()}function G0(){if(gn!==5)return!1;var t=ka,n=id;id=0;var a=kr(da),o=P.T,u=H.p;try{H.p=32>a?32:a,P.T=null,a=ad,ad=null;var f=ka,x=da;if(gn=0,gs=ka=null,da=0,(Lt&6)!==0)throw Error(s(331));var T=Lt;if(Lt|=4,M0(f.current),x0(f,f.current,x,a),Lt=T,Vo(0,!1),Ee&&typeof Ee.onPostCommitFiberRoot=="function")try{Ee.onPostCommitFiberRoot(be,f)}catch{}return!0}finally{H.p=u,P.T=o,H0(t,n)}}function V0(t,n,a){n=di(a,n),n=If(t.stateNode,n,2),t=Fa(t,n,2),t!==null&&(Ln(t,2),Hi(t))}function zt(t,n,a){if(t.tag===3)V0(t,t,a);else for(;n!==null;){if(n.tag===3){V0(n,t,a);break}else if(n.tag===1){var o=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof o.componentDidCatch=="function"&&(Va===null||!Va.has(o))){t=di(a,t),a=kg(2),o=Fa(n,a,2),o!==null&&(Xg(a,o,n,t),Ln(o,2),Hi(o));break}}n=n.return}}function ld(t,n,a){var o=t.pingCache;if(o===null){o=t.pingCache=new xy;var u=new Set;o.set(n,u)}else u=o.get(n),u===void 0&&(u=new Set,o.set(n,u));u.has(a)||(ed=!0,u.add(a),t=Ey.bind(null,t,n,a),n.then(t,t))}function Ey(t,n,a){var o=t.pingCache;o!==null&&o.delete(n),t.pingedLanes|=t.suspendedLanes&a,t.warmLanes&=~a,Xt===t&&(St&a)===a&&(nn===4||nn===3&&(St&62914560)===St&&300>b()-fc?(Lt&2)===0&&vs(t,0):td|=a,ms===St&&(ms=0)),Hi(t)}function k0(t,n){n===0&&(n=Ft()),t=mr(t,n),t!==null&&(Ln(t,n),Hi(t))}function Ty(t){var n=t.memoizedState,a=0;n!==null&&(a=n.retryLane),k0(t,a)}function Ay(t,n){var a=0;switch(t.tag){case 31:case 13:var o=t.stateNode,u=t.memoizedState;u!==null&&(a=u.retryLane);break;case 19:o=t.stateNode;break;case 22:o=t.stateNode._retryCache;break;default:throw Error(s(314))}o!==null&&o.delete(n),k0(t,a)}function Ry(t,n){return Et(t,n)}var _c=null,xs=null,cd=!1,xc=!1,ud=!1,Wa=0;function Hi(t){t!==xs&&t.next===null&&(xs===null?_c=xs=t:xs=xs.next=t),xc=!0,cd||(cd=!0,wy())}function Vo(t,n){if(!ud&&xc){ud=!0;do for(var a=!1,o=_c;o!==null;){if(t!==0){var u=o.pendingLanes;if(u===0)var f=0;else{var x=o.suspendedLanes,T=o.pingedLanes;f=(1<<31-Fe(42|t)+1)-1,f&=u&~(x&~T),f=f&201326741?f&201326741|1:f?f|2:0}f!==0&&(a=!0,j0(o,f))}else f=St,f=_e(o,o===Xt?f:0,o.cancelPendingCommit!==null||o.timeoutHandle!==-1),(f&3)===0||Ce(o,f)||(a=!0,j0(o,f));o=o.next}while(a);ud=!1}}function Cy(){X0()}function X0(){xc=cd=!1;var t=0;Wa!==0&&zy()&&(t=Wa);for(var n=b(),a=null,o=_c;o!==null;){var u=o.next,f=W0(o,n);f===0?(o.next=null,a===null?_c=u:a.next=u,u===null&&(xs=a)):(a=o,(t!==0||(f&3)!==0)&&(xc=!0)),o=u}gn!==0&&gn!==5||Vo(t),Wa!==0&&(Wa=0)}function W0(t,n){for(var a=t.suspendedLanes,o=t.pingedLanes,u=t.expirationTimes,f=t.pendingLanes&-62914561;0<f;){var x=31-Fe(f),T=1<<x,B=u[x];B===-1?((T&a)===0||(T&o)!==0)&&(u[x]=it(T,n)):B<=n&&(t.expiredLanes|=T),f&=~T}if(n=Xt,a=St,a=_e(t,t===n?a:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o=t.callbackNode,a===0||t===n&&(Bt===2||Bt===9)||t.cancelPendingCommit!==null)return o!==null&&o!==null&&Ot(o),t.callbackNode=null,t.callbackPriority=0;if((a&3)===0||Ce(t,a)){if(n=a&-a,n===t.callbackPriority)return n;switch(o!==null&&Ot(o),kr(a)){case 2:case 8:a=xe;break;case 32:a=ce;break;case 268435456:a=we;break;default:a=ce}return o=q0.bind(null,t),a=Et(a,o),t.callbackPriority=n,t.callbackNode=a,n}return o!==null&&o!==null&&Ot(o),t.callbackPriority=2,t.callbackNode=null,2}function q0(t,n){if(gn!==0&&gn!==5)return t.callbackNode=null,t.callbackPriority=0,null;var a=t.callbackNode;if(vc()&&t.callbackNode!==a)return null;var o=St;return o=_e(t,t===Xt?o:0,t.cancelPendingCommit!==null||t.timeoutHandle!==-1),o===0?null:(R0(t,o,n),W0(t,b()),t.callbackNode!=null&&t.callbackNode===a?q0.bind(null,t):null)}function j0(t,n){if(vc())return null;R0(t,n,!0)}function wy(){Gy(function(){(Lt&6)!==0?Et(he,Cy):X0()})}function fd(){if(Wa===0){var t=as;t===0&&(t=Le,Le<<=1,(Le&261888)===0&&(Le=256)),Wa=t}return Wa}function Y0(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:Rl(""+t)}function Z0(t,n){var a=n.ownerDocument.createElement("input");return a.name=n.name,a.value=n.value,t.id&&a.setAttribute("form",t.id),n.parentNode.insertBefore(a,n),t=new FormData(t),a.parentNode.removeChild(a),t}function Dy(t,n,a,o,u){if(n==="submit"&&a&&a.stateNode===u){var f=Y0((u[Mn]||null).action),x=o.submitter;x&&(n=(n=x[Mn]||null)?Y0(n.formAction):x.getAttribute("formAction"),n!==null&&(f=n,x=null));var T=new Ul("action","action",null,o,u);t.push({event:T,listeners:[{instance:null,listener:function(){if(o.defaultPrevented){if(Wa!==0){var B=x?Z0(u,x):new FormData(u);Uf(a,{pending:!0,data:B,method:u.method,action:f},null,B)}}else typeof f=="function"&&(T.preventDefault(),B=x?Z0(u,x):new FormData(u),Uf(a,{pending:!0,data:B,method:u.method,action:f},f,B))},currentTarget:u}]})}}for(var dd=0;dd<ju.length;dd++){var hd=ju[dd],Uy=hd.toLowerCase(),Ny=hd[0].toUpperCase()+hd.slice(1);Ei(Uy,"on"+Ny)}Ei(Am,"onAnimationEnd"),Ei(Rm,"onAnimationIteration"),Ei(Cm,"onAnimationStart"),Ei("dblclick","onDoubleClick"),Ei("focusin","onFocus"),Ei("focusout","onBlur"),Ei(YS,"onTransitionRun"),Ei(ZS,"onTransitionStart"),Ei(KS,"onTransitionCancel"),Ei(wm,"onTransitionEnd"),Y("onMouseEnter",["mouseout","mouseover"]),Y("onMouseLeave",["mouseout","mouseover"]),Y("onPointerEnter",["pointerout","pointerover"]),Y("onPointerLeave",["pointerout","pointerover"]),ee("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),ee("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),ee("onBeforeInput",["compositionend","keypress","textInput","paste"]),ee("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),ee("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),ee("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ko="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ly=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ko));function K0(t,n){n=(n&4)!==0;for(var a=0;a<t.length;a++){var o=t[a],u=o.event;o=o.listeners;e:{var f=void 0;if(n)for(var x=o.length-1;0<=x;x--){var T=o[x],B=T.instance,$=T.currentTarget;if(T=T.listener,B!==f&&u.isPropagationStopped())break e;f=T,u.currentTarget=$;try{f(u)}catch(de){Ol(de)}u.currentTarget=null,f=B}else for(x=0;x<o.length;x++){if(T=o[x],B=T.instance,$=T.currentTarget,T=T.listener,B!==f&&u.isPropagationStopped())break e;f=T,u.currentTarget=$;try{f(u)}catch(de){Ol(de)}u.currentTarget=null,f=B}}}}function vt(t,n){var a=n[Xr];a===void 0&&(a=n[Xr]=new Set);var o=t+"__bubble";a.has(o)||(Q0(n,t,2,!1),a.add(o))}function pd(t,n,a){var o=0;n&&(o|=4),Q0(a,t,o,n)}var Sc="_reactListening"+Math.random().toString(36).slice(2);function md(t){if(!t[Sc]){t[Sc]=!0,q.forEach(function(a){a!=="selectionchange"&&(Ly.has(a)||pd(a,!1,t),pd(a,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[Sc]||(n[Sc]=!0,pd("selectionchange",!1,n))}}function Q0(t,n,a,o){switch(Av(n)){case 2:var u=oM;break;case 8:u=lM;break;default:u=Dd}a=u.bind(null,n,a,t),u=void 0,!Ou||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(u=!0),o?u!==void 0?t.addEventListener(n,a,{capture:!0,passive:u}):t.addEventListener(n,a,!0):u!==void 0?t.addEventListener(n,a,{passive:u}):t.addEventListener(n,a,!1)}function gd(t,n,a,o,u){var f=o;if((n&1)===0&&(n&2)===0&&o!==null)e:for(;;){if(o===null)return;var x=o.tag;if(x===3||x===4){var T=o.stateNode.containerInfo;if(T===u)break;if(x===4)for(x=o.return;x!==null;){var B=x.tag;if((B===3||B===4)&&x.stateNode.containerInfo===u)return;x=x.return}for(;T!==null;){if(x=Aa(T),x===null)return;if(B=x.tag,B===5||B===6||B===26||B===27){o=f=x;continue e}T=T.parentNode}}o=o.return}nm(function(){var $=f,de=Nu(a),ge=[];e:{var te=Dm.get(t);if(te!==void 0){var le=Ul,ke=t;switch(t){case"keypress":if(wl(a)===0)break e;case"keydown":case"keyup":le=AS;break;case"focusin":ke="focus",le=Bu;break;case"focusout":ke="blur",le=Bu;break;case"beforeblur":case"afterblur":le=Bu;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":le=rm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":le=pS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":le=wS;break;case Am:case Rm:case Cm:le=vS;break;case wm:le=US;break;case"scroll":case"scrollend":le=dS;break;case"wheel":le=LS;break;case"copy":case"cut":case"paste":le=xS;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":le=om;break;case"toggle":case"beforetoggle":le=PS}var tt=(n&4)!==0,kt=!tt&&(t==="scroll"||t==="scrollend"),j=tt?te!==null?te+"Capture":null:te;tt=[];for(var V=$,Q;V!==null;){var me=V;if(Q=me.stateNode,me=me.tag,me!==5&&me!==26&&me!==27||Q===null||j===null||(me=uo(V,j),me!=null&&tt.push(Xo(V,me,Q))),kt)break;V=V.return}0<tt.length&&(te=new le(te,ke,null,a,de),ge.push({event:te,listeners:tt}))}}if((n&7)===0){e:{if(te=t==="mouseover"||t==="pointerover",le=t==="mouseout"||t==="pointerout",te&&a!==Uu&&(ke=a.relatedTarget||a.fromElement)&&(Aa(ke)||ke[Mi]))break e;if((le||te)&&(te=de.window===de?de:(te=de.ownerDocument)?te.defaultView||te.parentWindow:window,le?(ke=a.relatedTarget||a.toElement,le=$,ke=ke?Aa(ke):null,ke!==null&&(kt=c(ke),tt=ke.tag,ke!==kt||tt!==5&&tt!==27&&tt!==6)&&(ke=null)):(le=null,ke=$),le!==ke)){if(tt=rm,me="onMouseLeave",j="onMouseEnter",V="mouse",(t==="pointerout"||t==="pointerover")&&(tt=om,me="onPointerLeave",j="onPointerEnter",V="pointer"),kt=le==null?te:fr(le),Q=ke==null?te:fr(ke),te=new tt(me,V+"leave",le,a,de),te.target=kt,te.relatedTarget=Q,me=null,Aa(de)===$&&(tt=new tt(j,V+"enter",ke,a,de),tt.target=Q,tt.relatedTarget=kt,me=tt),kt=me,le&&ke)t:{for(tt=Oy,j=le,V=ke,Q=0,me=j;me;me=tt(me))Q++;me=0;for(var $e=V;$e;$e=tt($e))me++;for(;0<Q-me;)j=tt(j),Q--;for(;0<me-Q;)V=tt(V),me--;for(;Q--;){if(j===V||V!==null&&j===V.alternate){tt=j;break t}j=tt(j),V=tt(V)}tt=null}else tt=null;le!==null&&$0(ge,te,le,tt,!1),ke!==null&&kt!==null&&$0(ge,kt,ke,tt,!0)}}e:{if(te=$?fr($):window,le=te.nodeName&&te.nodeName.toLowerCase(),le==="select"||le==="input"&&te.type==="file")var Ct=mm;else if(hm(te))if(gm)Ct=WS;else{Ct=kS;var Ze=VS}else le=te.nodeName,!le||le.toLowerCase()!=="input"||te.type!=="checkbox"&&te.type!=="radio"?$&&bi($.elementType)&&(Ct=mm):Ct=XS;if(Ct&&(Ct=Ct(t,$))){pm(ge,Ct,a,de);break e}Ze&&Ze(t,te,$),t==="focusout"&&$&&te.type==="number"&&$.memoizedProps.value!=null&&En(te,"number",te.value)}switch(Ze=$?fr($):window,t){case"focusin":(hm(Ze)||Ze.contentEditable==="true")&&(Kr=Ze,Xu=$,xo=null);break;case"focusout":xo=Xu=Kr=null;break;case"mousedown":Wu=!0;break;case"contextmenu":case"mouseup":case"dragend":Wu=!1,Em(ge,a,de);break;case"selectionchange":if(jS)break;case"keydown":case"keyup":Em(ge,a,de)}var ut;if(Hu)e:{switch(t){case"compositionstart":var yt="onCompositionStart";break e;case"compositionend":yt="onCompositionEnd";break e;case"compositionupdate":yt="onCompositionUpdate";break e}yt=void 0}else Zr?fm(t,a)&&(yt="onCompositionEnd"):t==="keydown"&&a.keyCode===229&&(yt="onCompositionStart");yt&&(lm&&a.locale!=="ko"&&(Zr||yt!=="onCompositionStart"?yt==="onCompositionEnd"&&Zr&&(ut=im()):(wa=de,Pu="value"in wa?wa.value:wa.textContent,Zr=!0)),Ze=yc($,yt),0<Ze.length&&(yt=new sm(yt,t,null,a,de),ge.push({event:yt,listeners:Ze}),ut?yt.data=ut:(ut=dm(a),ut!==null&&(yt.data=ut)))),(ut=IS?BS(t,a):zS(t,a))&&(yt=yc($,"onBeforeInput"),0<yt.length&&(Ze=new sm("onBeforeInput","beforeinput",null,a,de),ge.push({event:Ze,listeners:yt}),Ze.data=ut)),Dy(ge,t,$,a,de)}K0(ge,n)})}function Xo(t,n,a){return{instance:t,listener:n,currentTarget:a}}function yc(t,n){for(var a=n+"Capture",o=[];t!==null;){var u=t,f=u.stateNode;if(u=u.tag,u!==5&&u!==26&&u!==27||f===null||(u=uo(t,a),u!=null&&o.unshift(Xo(t,u,f)),u=uo(t,n),u!=null&&o.push(Xo(t,u,f))),t.tag===3)return o;t=t.return}return[]}function Oy(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function $0(t,n,a,o,u){for(var f=n._reactName,x=[];a!==null&&a!==o;){var T=a,B=T.alternate,$=T.stateNode;if(T=T.tag,B!==null&&B===o)break;T!==5&&T!==26&&T!==27||$===null||(B=$,u?($=uo(a,f),$!=null&&x.unshift(Xo(a,$,B))):u||($=uo(a,f),$!=null&&x.push(Xo(a,$,B)))),a=a.return}x.length!==0&&t.push({event:n,listeners:x})}var Py=/\r\n?/g,Fy=/\u0000|\uFFFD/g;function J0(t){return(typeof t=="string"?t:""+t).replace(Py,`
`).replace(Fy,"")}function ev(t,n){return n=J0(n),J0(t)===n}function Vt(t,n,a,o,u,f){switch(a){case"children":typeof o=="string"?n==="body"||n==="textarea"&&o===""||mn(t,o):(typeof o=="number"||typeof o=="bigint")&&n!=="body"&&mn(t,""+o);break;case"className":Je(t,"class",o);break;case"tabIndex":Je(t,"tabindex",o);break;case"dir":case"role":case"viewBox":case"width":case"height":Je(t,a,o);break;case"style":qr(t,o,f);break;case"data":if(n!=="object"){Je(t,"data",o);break}case"src":case"href":if(o===""&&(n!=="a"||a!=="href")){t.removeAttribute(a);break}if(o==null||typeof o=="function"||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=Rl(""+o),t.setAttribute(a,o);break;case"action":case"formAction":if(typeof o=="function"){t.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof f=="function"&&(a==="formAction"?(n!=="input"&&Vt(t,n,"name",u.name,u,null),Vt(t,n,"formEncType",u.formEncType,u,null),Vt(t,n,"formMethod",u.formMethod,u,null),Vt(t,n,"formTarget",u.formTarget,u,null)):(Vt(t,n,"encType",u.encType,u,null),Vt(t,n,"method",u.method,u,null),Vt(t,n,"target",u.target,u,null)));if(o==null||typeof o=="symbol"||typeof o=="boolean"){t.removeAttribute(a);break}o=Rl(""+o),t.setAttribute(a,o);break;case"onClick":o!=null&&(t.onclick=Qi);break;case"onScroll":o!=null&&vt("scroll",t);break;case"onScrollEnd":o!=null&&vt("scrollend",t);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"multiple":t.multiple=o&&typeof o!="function"&&typeof o!="symbol";break;case"muted":t.muted=o&&typeof o!="function"&&typeof o!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(o==null||typeof o=="function"||typeof o=="boolean"||typeof o=="symbol"){t.removeAttribute("xlink:href");break}a=Rl(""+o),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""+o):t.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":o&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,""):t.removeAttribute(a);break;case"capture":case"download":o===!0?t.setAttribute(a,""):o!==!1&&o!=null&&typeof o!="function"&&typeof o!="symbol"?t.setAttribute(a,o):t.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":o!=null&&typeof o!="function"&&typeof o!="symbol"&&!isNaN(o)&&1<=o?t.setAttribute(a,o):t.removeAttribute(a);break;case"rowSpan":case"start":o==null||typeof o=="function"||typeof o=="symbol"||isNaN(o)?t.removeAttribute(a):t.setAttribute(a,o);break;case"popover":vt("beforetoggle",t),vt("toggle",t),qe(t,"popover",o);break;case"xlinkActuate":je(t,"http://www.w3.org/1999/xlink","xlink:actuate",o);break;case"xlinkArcrole":je(t,"http://www.w3.org/1999/xlink","xlink:arcrole",o);break;case"xlinkRole":je(t,"http://www.w3.org/1999/xlink","xlink:role",o);break;case"xlinkShow":je(t,"http://www.w3.org/1999/xlink","xlink:show",o);break;case"xlinkTitle":je(t,"http://www.w3.org/1999/xlink","xlink:title",o);break;case"xlinkType":je(t,"http://www.w3.org/1999/xlink","xlink:type",o);break;case"xmlBase":je(t,"http://www.w3.org/XML/1998/namespace","xml:base",o);break;case"xmlLang":je(t,"http://www.w3.org/XML/1998/namespace","xml:lang",o);break;case"xmlSpace":je(t,"http://www.w3.org/XML/1998/namespace","xml:space",o);break;case"is":qe(t,"is",o);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=uS.get(a)||a,qe(t,a,o))}}function vd(t,n,a,o,u,f){switch(a){case"style":qr(t,o,f);break;case"dangerouslySetInnerHTML":if(o!=null){if(typeof o!="object"||!("__html"in o))throw Error(s(61));if(a=o.__html,a!=null){if(u.children!=null)throw Error(s(60));t.innerHTML=a}}break;case"children":typeof o=="string"?mn(t,o):(typeof o=="number"||typeof o=="bigint")&&mn(t,""+o);break;case"onScroll":o!=null&&vt("scroll",t);break;case"onScrollEnd":o!=null&&vt("scrollend",t);break;case"onClick":o!=null&&(t.onclick=Qi);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!oe.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(u=a.endsWith("Capture"),n=a.slice(2,u?a.length-7:void 0),f=t[Mn]||null,f=f!=null?f[a]:null,typeof f=="function"&&t.removeEventListener(n,f,u),typeof o=="function")){typeof f!="function"&&f!==null&&(a in t?t[a]=null:t.hasAttribute(a)&&t.removeAttribute(a)),t.addEventListener(n,o,u);break e}a in t?t[a]=o:o===!0?t.setAttribute(a,""):qe(t,a,o)}}}function Un(t,n,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":vt("error",t),vt("load",t);var o=!1,u=!1,f;for(f in a)if(a.hasOwnProperty(f)){var x=a[f];if(x!=null)switch(f){case"src":o=!0;break;case"srcSet":u=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Vt(t,n,f,x,a,null)}}u&&Vt(t,n,"srcSet",a.srcSet,a,null),o&&Vt(t,n,"src",a.src,a,null);return;case"input":vt("invalid",t);var T=f=x=u=null,B=null,$=null;for(o in a)if(a.hasOwnProperty(o)){var de=a[o];if(de!=null)switch(o){case"name":u=de;break;case"type":x=de;break;case"checked":B=de;break;case"defaultChecked":$=de;break;case"value":f=de;break;case"defaultValue":T=de;break;case"children":case"dangerouslySetInnerHTML":if(de!=null)throw Error(s(137,n));break;default:Vt(t,n,o,de,a,null)}}Ki(t,f,T,B,$,x,u,!1);return;case"select":vt("invalid",t),o=x=f=null;for(u in a)if(a.hasOwnProperty(u)&&(T=a[u],T!=null))switch(u){case"value":f=T;break;case"defaultValue":x=T;break;case"multiple":o=T;default:Vt(t,n,u,T,a,null)}n=f,a=x,t.multiple=!!o,n!=null?ui(t,!!o,n,!1):a!=null&&ui(t,!!o,a,!0);return;case"textarea":vt("invalid",t),f=u=o=null;for(x in a)if(a.hasOwnProperty(x)&&(T=a[x],T!=null))switch(x){case"value":o=T;break;case"defaultValue":u=T;break;case"children":f=T;break;case"dangerouslySetInnerHTML":if(T!=null)throw Error(s(91));break;default:Vt(t,n,x,T,a,null)}Tn(t,o,u,f);return;case"option":for(B in a)a.hasOwnProperty(B)&&(o=a[B],o!=null)&&(B==="selected"?t.selected=o&&typeof o!="function"&&typeof o!="symbol":Vt(t,n,B,o,a,null));return;case"dialog":vt("beforetoggle",t),vt("toggle",t),vt("cancel",t),vt("close",t);break;case"iframe":case"object":vt("load",t);break;case"video":case"audio":for(o=0;o<ko.length;o++)vt(ko[o],t);break;case"image":vt("error",t),vt("load",t);break;case"details":vt("toggle",t);break;case"embed":case"source":case"link":vt("error",t),vt("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for($ in a)if(a.hasOwnProperty($)&&(o=a[$],o!=null))switch($){case"children":case"dangerouslySetInnerHTML":throw Error(s(137,n));default:Vt(t,n,$,o,a,null)}return;default:if(bi(n)){for(de in a)a.hasOwnProperty(de)&&(o=a[de],o!==void 0&&vd(t,n,de,o,a,void 0));return}}for(T in a)a.hasOwnProperty(T)&&(o=a[T],o!=null&&Vt(t,n,T,o,a,null))}function Iy(t,n,a,o){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var u=null,f=null,x=null,T=null,B=null,$=null,de=null;for(le in a){var ge=a[le];if(a.hasOwnProperty(le)&&ge!=null)switch(le){case"checked":break;case"value":break;case"defaultValue":B=ge;default:o.hasOwnProperty(le)||Vt(t,n,le,null,o,ge)}}for(var te in o){var le=o[te];if(ge=a[te],o.hasOwnProperty(te)&&(le!=null||ge!=null))switch(te){case"type":f=le;break;case"name":u=le;break;case"checked":$=le;break;case"defaultChecked":de=le;break;case"value":x=le;break;case"defaultValue":T=le;break;case"children":case"dangerouslySetInnerHTML":if(le!=null)throw Error(s(137,n));break;default:le!==ge&&Vt(t,n,te,le,o,ge)}}bn(t,x,T,B,$,de,f,u);return;case"select":le=x=T=te=null;for(f in a)if(B=a[f],a.hasOwnProperty(f)&&B!=null)switch(f){case"value":break;case"multiple":le=B;default:o.hasOwnProperty(f)||Vt(t,n,f,null,o,B)}for(u in o)if(f=o[u],B=a[u],o.hasOwnProperty(u)&&(f!=null||B!=null))switch(u){case"value":te=f;break;case"defaultValue":T=f;break;case"multiple":x=f;default:f!==B&&Vt(t,n,u,f,o,B)}n=T,a=x,o=le,te!=null?ui(t,!!a,te,!1):!!o!=!!a&&(n!=null?ui(t,!!a,n,!0):ui(t,!!a,a?[]:"",!1));return;case"textarea":le=te=null;for(T in a)if(u=a[T],a.hasOwnProperty(T)&&u!=null&&!o.hasOwnProperty(T))switch(T){case"value":break;case"children":break;default:Vt(t,n,T,null,o,u)}for(x in o)if(u=o[x],f=a[x],o.hasOwnProperty(x)&&(u!=null||f!=null))switch(x){case"value":te=u;break;case"defaultValue":le=u;break;case"children":break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(s(91));break;default:u!==f&&Vt(t,n,x,u,o,f)}It(t,te,le);return;case"option":for(var ke in a)te=a[ke],a.hasOwnProperty(ke)&&te!=null&&!o.hasOwnProperty(ke)&&(ke==="selected"?t.selected=!1:Vt(t,n,ke,null,o,te));for(B in o)te=o[B],le=a[B],o.hasOwnProperty(B)&&te!==le&&(te!=null||le!=null)&&(B==="selected"?t.selected=te&&typeof te!="function"&&typeof te!="symbol":Vt(t,n,B,te,o,le));return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var tt in a)te=a[tt],a.hasOwnProperty(tt)&&te!=null&&!o.hasOwnProperty(tt)&&Vt(t,n,tt,null,o,te);for($ in o)if(te=o[$],le=a[$],o.hasOwnProperty($)&&te!==le&&(te!=null||le!=null))switch($){case"children":case"dangerouslySetInnerHTML":if(te!=null)throw Error(s(137,n));break;default:Vt(t,n,$,te,o,le)}return;default:if(bi(n)){for(var kt in a)te=a[kt],a.hasOwnProperty(kt)&&te!==void 0&&!o.hasOwnProperty(kt)&&vd(t,n,kt,void 0,o,te);for(de in o)te=o[de],le=a[de],!o.hasOwnProperty(de)||te===le||te===void 0&&le===void 0||vd(t,n,de,te,o,le);return}}for(var j in a)te=a[j],a.hasOwnProperty(j)&&te!=null&&!o.hasOwnProperty(j)&&Vt(t,n,j,null,o,te);for(ge in o)te=o[ge],le=a[ge],!o.hasOwnProperty(ge)||te===le||te==null&&le==null||Vt(t,n,ge,te,o,le)}function tv(t){switch(t){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function By(){if(typeof performance.getEntriesByType=="function"){for(var t=0,n=0,a=performance.getEntriesByType("resource"),o=0;o<a.length;o++){var u=a[o],f=u.transferSize,x=u.initiatorType,T=u.duration;if(f&&T&&tv(x)){for(x=0,T=u.responseEnd,o+=1;o<a.length;o++){var B=a[o],$=B.startTime;if($>T)break;var de=B.transferSize,ge=B.initiatorType;de&&tv(ge)&&(B=B.responseEnd,x+=de*(B<T?1:(T-$)/(B-$)))}if(--o,n+=8*(f+x)/(u.duration/1e3),t++,10<t)break}}if(0<t)return n/t/1e6}return navigator.connection&&(t=navigator.connection.downlink,typeof t=="number")?t:5}var _d=null,xd=null;function Mc(t){return t.nodeType===9?t:t.ownerDocument}function nv(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function iv(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function Sd(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var yd=null;function zy(){var t=window.event;return t&&t.type==="popstate"?t===yd?!1:(yd=t,!0):(yd=null,!1)}var av=typeof setTimeout=="function"?setTimeout:void 0,Hy=typeof clearTimeout=="function"?clearTimeout:void 0,rv=typeof Promise=="function"?Promise:void 0,Gy=typeof queueMicrotask=="function"?queueMicrotask:typeof rv<"u"?function(t){return rv.resolve(null).then(t).catch(Vy)}:av;function Vy(t){setTimeout(function(){throw t})}function qa(t){return t==="head"}function sv(t,n){var a=n,o=0;do{var u=a.nextSibling;if(t.removeChild(a),u&&u.nodeType===8)if(a=u.data,a==="/$"||a==="/&"){if(o===0){t.removeChild(u),bs(n);return}o--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")o++;else if(a==="html")Wo(t.ownerDocument.documentElement);else if(a==="head"){a=t.ownerDocument.head,Wo(a);for(var f=a.firstChild;f;){var x=f.nextSibling,T=f.nodeName;f[ur]||T==="SCRIPT"||T==="STYLE"||T==="LINK"&&f.rel.toLowerCase()==="stylesheet"||a.removeChild(f),f=x}}else a==="body"&&Wo(t.ownerDocument.body);a=u}while(a);bs(n)}function ov(t,n){var a=t;t=0;do{var o=a.nextSibling;if(a.nodeType===1?n?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(n?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),o&&o.nodeType===8)if(a=o.data,a==="/$"){if(t===0)break;t--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||t++;a=o}while(a)}function Md(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var a=n;switch(n=n.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Md(a),co(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}t.removeChild(a)}}function ky(t,n,a,o){for(;t.nodeType===1;){var u=a;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!o&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(o){if(!t[ur])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(f=t.getAttribute("rel"),f==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(f!==u.rel||t.getAttribute("href")!==(u.href==null||u.href===""?null:u.href)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin)||t.getAttribute("title")!==(u.title==null?null:u.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(f=t.getAttribute("src"),(f!==(u.src==null?null:u.src)||t.getAttribute("type")!==(u.type==null?null:u.type)||t.getAttribute("crossorigin")!==(u.crossOrigin==null?null:u.crossOrigin))&&f&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var f=u.name==null?null:""+u.name;if(u.type==="hidden"&&t.getAttribute("name")===f)return t}else return t;if(t=vi(t.nextSibling),t===null)break}return null}function Xy(t,n,a){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!a||(t=vi(t.nextSibling),t===null))return null;return t}function lv(t,n){for(;t.nodeType!==8;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!n||(t=vi(t.nextSibling),t===null))return null;return t}function bd(t){return t.data==="$?"||t.data==="$~"}function Ed(t){return t.data==="$!"||t.data==="$?"&&t.ownerDocument.readyState!=="loading"}function Wy(t,n){var a=t.ownerDocument;if(t.data==="$~")t._reactRetry=n;else if(t.data!=="$?"||a.readyState!=="loading")n();else{var o=function(){n(),a.removeEventListener("DOMContentLoaded",o)};a.addEventListener("DOMContentLoaded",o),t._reactRetry=o}}function vi(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="$~"||n==="&"||n==="F!"||n==="F")break;if(n==="/$"||n==="/&")return null}}return t}var Td=null;function cv(t){t=t.nextSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="/$"||a==="/&"){if(n===0)return vi(t.nextSibling);n--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||n++}t=t.nextSibling}return null}function uv(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var a=t.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(n===0)return t;n--}else a!=="/$"&&a!=="/&"||n++}t=t.previousSibling}return null}function fv(t,n,a){switch(n=Mc(a),t){case"html":if(t=n.documentElement,!t)throw Error(s(452));return t;case"head":if(t=n.head,!t)throw Error(s(453));return t;case"body":if(t=n.body,!t)throw Error(s(454));return t;default:throw Error(s(451))}}function Wo(t){for(var n=t.attributes;n.length;)t.removeAttributeNode(n[0]);co(t)}var _i=new Map,dv=new Set;function bc(t){return typeof t.getRootNode=="function"?t.getRootNode():t.nodeType===9?t:t.ownerDocument}var ha=H.d;H.d={f:qy,r:jy,D:Yy,C:Zy,L:Ky,m:Qy,X:Jy,S:$y,M:eM};function qy(){var t=ha.f(),n=pc();return t||n}function jy(t){var n=Ra(t);n!==null&&n.tag===5&&n.type==="form"?wg(n):ha.r(t)}var Ss=typeof document>"u"?null:document;function hv(t,n,a){var o=Ss;if(o&&typeof n=="string"&&n){var u=at(n);u='link[rel="'+t+'"][href="'+u+'"]',typeof a=="string"&&(u+='[crossorigin="'+a+'"]'),dv.has(u)||(dv.add(u),t={rel:t,crossOrigin:a,href:n},o.querySelector(u)===null&&(n=o.createElement("link"),Un(n,"link",t),A(n),o.head.appendChild(n)))}}function Yy(t){ha.D(t),hv("dns-prefetch",t,null)}function Zy(t,n){ha.C(t,n),hv("preconnect",t,n)}function Ky(t,n,a){ha.L(t,n,a);var o=Ss;if(o&&t&&n){var u='link[rel="preload"][as="'+at(n)+'"]';n==="image"&&a&&a.imageSrcSet?(u+='[imagesrcset="'+at(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(u+='[imagesizes="'+at(a.imageSizes)+'"]')):u+='[href="'+at(t)+'"]';var f=u;switch(n){case"style":f=ys(t);break;case"script":f=Ms(t)}_i.has(f)||(t=v({rel:"preload",href:n==="image"&&a&&a.imageSrcSet?void 0:t,as:n},a),_i.set(f,t),o.querySelector(u)!==null||n==="style"&&o.querySelector(qo(f))||n==="script"&&o.querySelector(jo(f))||(n=o.createElement("link"),Un(n,"link",t),A(n),o.head.appendChild(n)))}}function Qy(t,n){ha.m(t,n);var a=Ss;if(a&&t){var o=n&&typeof n.as=="string"?n.as:"script",u='link[rel="modulepreload"][as="'+at(o)+'"][href="'+at(t)+'"]',f=u;switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":f=Ms(t)}if(!_i.has(f)&&(t=v({rel:"modulepreload",href:t},n),_i.set(f,t),a.querySelector(u)===null)){switch(o){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(jo(f)))return}o=a.createElement("link"),Un(o,"link",t),A(o),a.head.appendChild(o)}}}function $y(t,n,a){ha.S(t,n,a);var o=Ss;if(o&&t){var u=Ca(o).hoistableStyles,f=ys(t);n=n||"default";var x=u.get(f);if(!x){var T={loading:0,preload:null};if(x=o.querySelector(qo(f)))T.loading=5;else{t=v({rel:"stylesheet",href:t,"data-precedence":n},a),(a=_i.get(f))&&Ad(t,a);var B=x=o.createElement("link");A(B),Un(B,"link",t),B._p=new Promise(function($,de){B.onload=$,B.onerror=de}),B.addEventListener("load",function(){T.loading|=1}),B.addEventListener("error",function(){T.loading|=2}),T.loading|=4,Ec(x,n,o)}x={type:"stylesheet",instance:x,count:1,state:T},u.set(f,x)}}}function Jy(t,n){ha.X(t,n);var a=Ss;if(a&&t){var o=Ca(a).hoistableScripts,u=Ms(t),f=o.get(u);f||(f=a.querySelector(jo(u)),f||(t=v({src:t,async:!0},n),(n=_i.get(u))&&Rd(t,n),f=a.createElement("script"),A(f),Un(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(u,f))}}function eM(t,n){ha.M(t,n);var a=Ss;if(a&&t){var o=Ca(a).hoistableScripts,u=Ms(t),f=o.get(u);f||(f=a.querySelector(jo(u)),f||(t=v({src:t,async:!0,type:"module"},n),(n=_i.get(u))&&Rd(t,n),f=a.createElement("script"),A(f),Un(f,"link",t),a.head.appendChild(f)),f={type:"script",instance:f,count:1,state:null},o.set(u,f))}}function pv(t,n,a,o){var u=(u=ne.current)?bc(u):null;if(!u)throw Error(s(446));switch(t){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(n=ys(a.href),a=Ca(u).hoistableStyles,o=a.get(n),o||(o={type:"style",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){t=ys(a.href);var f=Ca(u).hoistableStyles,x=f.get(t);if(x||(u=u.ownerDocument||u,x={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},f.set(t,x),(f=u.querySelector(qo(t)))&&!f._p&&(x.instance=f,x.state.loading=5),_i.has(t)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},_i.set(t,a),f||tM(u,t,a,x.state))),n&&o===null)throw Error(s(528,""));return x}if(n&&o!==null)throw Error(s(529,""));return null;case"script":return n=a.async,a=a.src,typeof a=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=Ms(a),a=Ca(u).hoistableScripts,o=a.get(n),o||(o={type:"script",instance:null,count:0,state:null},a.set(n,o)),o):{type:"void",instance:null,count:0,state:null};default:throw Error(s(444,t))}}function ys(t){return'href="'+at(t)+'"'}function qo(t){return'link[rel="stylesheet"]['+t+"]"}function mv(t){return v({},t,{"data-precedence":t.precedence,precedence:null})}function tM(t,n,a,o){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?o.loading=1:(n=t.createElement("link"),o.preload=n,n.addEventListener("load",function(){return o.loading|=1}),n.addEventListener("error",function(){return o.loading|=2}),Un(n,"link",a),A(n),t.head.appendChild(n))}function Ms(t){return'[src="'+at(t)+'"]'}function jo(t){return"script[async]"+t}function gv(t,n,a){if(n.count++,n.instance===null)switch(n.type){case"style":var o=t.querySelector('style[data-href~="'+at(a.href)+'"]');if(o)return n.instance=o,A(o),o;var u=v({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return o=(t.ownerDocument||t).createElement("style"),A(o),Un(o,"style",u),Ec(o,a.precedence,t),n.instance=o;case"stylesheet":u=ys(a.href);var f=t.querySelector(qo(u));if(f)return n.state.loading|=4,n.instance=f,A(f),f;o=mv(a),(u=_i.get(u))&&Ad(o,u),f=(t.ownerDocument||t).createElement("link"),A(f);var x=f;return x._p=new Promise(function(T,B){x.onload=T,x.onerror=B}),Un(f,"link",o),n.state.loading|=4,Ec(f,a.precedence,t),n.instance=f;case"script":return f=Ms(a.src),(u=t.querySelector(jo(f)))?(n.instance=u,A(u),u):(o=a,(u=_i.get(f))&&(o=v({},a),Rd(o,u)),t=t.ownerDocument||t,u=t.createElement("script"),A(u),Un(u,"link",o),t.head.appendChild(u),n.instance=u);case"void":return null;default:throw Error(s(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(o=n.instance,n.state.loading|=4,Ec(o,a.precedence,t));return n.instance}function Ec(t,n,a){for(var o=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),u=o.length?o[o.length-1]:null,f=u,x=0;x<o.length;x++){var T=o[x];if(T.dataset.precedence===n)f=T;else if(f!==u)break}f?f.parentNode.insertBefore(t,f.nextSibling):(n=a.nodeType===9?a.head:a,n.insertBefore(t,n.firstChild))}function Ad(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function Rd(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var Tc=null;function vv(t,n,a){if(Tc===null){var o=new Map,u=Tc=new Map;u.set(a,o)}else u=Tc,o=u.get(a),o||(o=new Map,u.set(a,o));if(o.has(t))return o;for(o.set(t,null),a=a.getElementsByTagName(t),u=0;u<a.length;u++){var f=a[u];if(!(f[ur]||f[cn]||t==="link"&&f.getAttribute("rel")==="stylesheet")&&f.namespaceURI!=="http://www.w3.org/2000/svg"){var x=f.getAttribute(n)||"";x=t+x;var T=o.get(x);T?T.push(f):o.set(x,[f])}}return o}function _v(t,n,a){t=t.ownerDocument||t,t.head.insertBefore(a,n==="title"?t.querySelector("head > title"):null)}function nM(t,n,a){if(a===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;return n.rel==="stylesheet"?(t=n.disabled,typeof n.precedence=="string"&&t==null):!0;case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function xv(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}function iM(t,n,a,o){if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var u=ys(o.href),f=n.querySelector(qo(u));if(f){n=f._p,n!==null&&typeof n=="object"&&typeof n.then=="function"&&(t.count++,t=Ac.bind(t),n.then(t,t)),a.state.loading|=4,a.instance=f,A(f);return}f=n.ownerDocument||n,o=mv(o),(u=_i.get(u))&&Ad(o,u),f=f.createElement("link"),A(f);var x=f;x._p=new Promise(function(T,B){x.onload=T,x.onerror=B}),Un(f,"link",o),a.instance=f}t.stylesheets===null&&(t.stylesheets=new Map),t.stylesheets.set(a,n),(n=a.state.preload)&&(a.state.loading&3)===0&&(t.count++,a=Ac.bind(t),n.addEventListener("load",a),n.addEventListener("error",a))}}var Cd=0;function aM(t,n){return t.stylesheets&&t.count===0&&Cc(t,t.stylesheets),0<t.count||0<t.imgCount?function(a){var o=setTimeout(function(){if(t.stylesheets&&Cc(t,t.stylesheets),t.unsuspend){var f=t.unsuspend;t.unsuspend=null,f()}},6e4+n);0<t.imgBytes&&Cd===0&&(Cd=62500*By());var u=setTimeout(function(){if(t.waitingForImages=!1,t.count===0&&(t.stylesheets&&Cc(t,t.stylesheets),t.unsuspend)){var f=t.unsuspend;t.unsuspend=null,f()}},(t.imgBytes>Cd?50:800)+n);return t.unsuspend=a,function(){t.unsuspend=null,clearTimeout(o),clearTimeout(u)}}:null}function Ac(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Cc(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var Rc=null;function Cc(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,Rc=new Map,n.forEach(rM,t),Rc=null,Ac.call(t))}function rM(t,n){if(!(n.state.loading&4)){var a=Rc.get(t);if(a)var o=a.get(null);else{a=new Map,Rc.set(t,a);for(var u=t.querySelectorAll("link[data-precedence],style[data-precedence]"),f=0;f<u.length;f++){var x=u[f];(x.nodeName==="LINK"||x.getAttribute("media")!=="not all")&&(a.set(x.dataset.precedence,x),o=x)}o&&a.set(null,o)}u=n.instance,x=u.getAttribute("data-precedence"),f=a.get(x)||o,f===o&&a.set(null,u),a.set(x,u),this.count++,o=Ac.bind(this),u.addEventListener("load",o),u.addEventListener("error",o),f?f.parentNode.insertBefore(u,f.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(u,t.firstChild)),n.state.loading|=4}}var Yo={$$typeof:O,Provider:null,Consumer:null,_currentValue:ae,_currentValue2:ae,_threadCount:0};function sM(t,n,a,o,u,f,x,T,B){this.tag=1,this.containerInfo=t,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Tt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Tt(0),this.hiddenUpdates=Tt(null),this.identifierPrefix=o,this.onUncaughtError=u,this.onCaughtError=f,this.onRecoverableError=x,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=B,this.incompleteTransitions=new Map}function Sv(t,n,a,o,u,f,x,T,B,$,de,ge){return t=new sM(t,n,a,x,B,$,de,ge,T),n=1,f===!0&&(n|=24),f=Qn(3,null,null,n),t.current=f,f.stateNode=t,n=of(),n.refCount++,t.pooledCache=n,n.refCount++,f.memoizedState={element:o,isDehydrated:a,cache:n},ff(f),t}function yv(t){return t?(t=Jr,t):Jr}function Mv(t,n,a,o,u,f){u=yv(u),o.context===null?o.context=u:o.pendingContext=u,o=Pa(n),o.payload={element:a},f=f===void 0?null:f,f!==null&&(o.callback=f),a=Fa(t,o,n),a!==null&&(Zn(a,t,n),Ao(a,t,n))}function bv(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var a=t.retryLane;t.retryLane=a!==0&&a<n?a:n}}function wd(t,n){bv(t,n),(t=t.alternate)&&bv(t,n)}function Ev(t){if(t.tag===13||t.tag===31){var n=mr(t,67108864);n!==null&&Zn(n,t,67108864),wd(t,67108864)}}function Tv(t){if(t.tag===13||t.tag===31){var n=ni();n=so(n);var a=mr(t,n);a!==null&&Zn(a,t,n),wd(t,n)}}var wc=!0;function oM(t,n,a,o){var u=P.T;P.T=null;var f=H.p;try{H.p=2,Dd(t,n,a,o)}finally{H.p=f,P.T=u}}function lM(t,n,a,o){var u=P.T;P.T=null;var f=H.p;try{H.p=8,Dd(t,n,a,o)}finally{H.p=f,P.T=u}}function Dd(t,n,a,o){if(wc){var u=Ud(o);if(u===null)gd(t,n,o,Dc,a),Rv(t,o);else if(uM(u,t,n,a,o))o.stopPropagation();else if(Rv(t,o),n&4&&-1<cM.indexOf(t)){for(;u!==null;){var f=Ra(u);if(f!==null)switch(f.tag){case 3:if(f=f.stateNode,f.current.memoizedState.isDehydrated){var x=ye(f.pendingLanes);if(x!==0){var T=f;for(T.pendingLanes|=2,T.entangledLanes|=2;x;){var B=1<<31-Fe(x);T.entanglements[1]|=B,x&=~B}Hi(f),(Lt&6)===0&&(dc=b()+500,Vo(0))}}break;case 31:case 13:T=mr(f,2),T!==null&&Zn(T,f,2),pc(),wd(f,2)}if(f=Ud(o),f===null&&gd(t,n,o,Dc,a),f===u)break;u=f}u!==null&&o.stopPropagation()}else gd(t,n,o,null,a)}}function Ud(t){return t=Nu(t),Nd(t)}var Dc=null;function Nd(t){if(Dc=null,t=Aa(t),t!==null){var n=c(t);if(n===null)t=null;else{var a=n.tag;if(a===13){if(t=h(n),t!==null)return t;t=null}else if(a===31){if(t=d(n),t!==null)return t;t=null}else if(a===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return Dc=t,null}function Av(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(W()){case he:return 2;case xe:return 8;case ce:case Ke:return 32;case we:return 268435456;default:return 32}default:return 32}}var Ld=!1,ja=null,Ya=null,Za=null,Zo=new Map,Ko=new Map,Ka=[],cM="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Rv(t,n){switch(t){case"focusin":case"focusout":ja=null;break;case"dragenter":case"dragleave":Ya=null;break;case"mouseover":case"mouseout":Za=null;break;case"pointerover":case"pointerout":Zo.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ko.delete(n.pointerId)}}function Qo(t,n,a,o,u,f){return t===null||t.nativeEvent!==f?(t={blockedOn:n,domEventName:a,eventSystemFlags:o,nativeEvent:f,targetContainers:[u]},n!==null&&(n=Ra(n),n!==null&&Ev(n)),t):(t.eventSystemFlags|=o,n=t.targetContainers,u!==null&&n.indexOf(u)===-1&&n.push(u),t)}function uM(t,n,a,o,u){switch(n){case"focusin":return ja=Qo(ja,t,n,a,o,u),!0;case"dragenter":return Ya=Qo(Ya,t,n,a,o,u),!0;case"mouseover":return Za=Qo(Za,t,n,a,o,u),!0;case"pointerover":var f=u.pointerId;return Zo.set(f,Qo(Zo.get(f)||null,t,n,a,o,u)),!0;case"gotpointercapture":return f=u.pointerId,Ko.set(f,Qo(Ko.get(f)||null,t,n,a,o,u)),!0}return!1}function Cv(t){var n=Aa(t.target);if(n!==null){var a=c(n);if(a!==null){if(n=a.tag,n===13){if(n=h(a),n!==null){t.blockedOn=n,Fi(t.priority,function(){Tv(a)});return}}else if(n===31){if(n=d(a),n!==null){t.blockedOn=n,Fi(t.priority,function(){Tv(a)});return}}else if(n===3&&a.stateNode.current.memoizedState.isDehydrated){t.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Uc(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var a=Ud(t.nativeEvent);if(a===null){a=t.nativeEvent;var o=new a.constructor(a.type,a);Uu=o,a.target.dispatchEvent(o),Uu=null}else return n=Ra(a),n!==null&&Ev(n),t.blockedOn=a,!1;n.shift()}return!0}function wv(t,n,a){Uc(t)&&a.delete(n)}function fM(){Ld=!1,ja!==null&&Uc(ja)&&(ja=null),Ya!==null&&Uc(Ya)&&(Ya=null),Za!==null&&Uc(Za)&&(Za=null),Zo.forEach(wv),Ko.forEach(wv)}function Nc(t,n){t.blockedOn===n&&(t.blockedOn=null,Ld||(Ld=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,fM)))}var Lc=null;function Dv(t){Lc!==t&&(Lc=t,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){Lc===t&&(Lc=null);for(var n=0;n<t.length;n+=3){var a=t[n],o=t[n+1],u=t[n+2];if(typeof o!="function"){if(Nd(o||a)===null)continue;break}var f=Ra(a);f!==null&&(t.splice(n,3),n-=3,Uf(f,{pending:!0,data:u,method:a.method,action:o},o,u))}}))}function bs(t){function n(B){return Nc(B,t)}ja!==null&&Nc(ja,t),Ya!==null&&Nc(Ya,t),Za!==null&&Nc(Za,t),Zo.forEach(n),Ko.forEach(n);for(var a=0;a<Ka.length;a++){var o=Ka[a];o.blockedOn===t&&(o.blockedOn=null)}for(;0<Ka.length&&(a=Ka[0],a.blockedOn===null);)Cv(a),a.blockedOn===null&&Ka.shift();if(a=(t.ownerDocument||t).$$reactFormReplay,a!=null)for(o=0;o<a.length;o+=3){var u=a[o],f=a[o+1],x=u[Mn]||null;if(typeof f=="function")x||Dv(a);else if(x){var T=null;if(f&&f.hasAttribute("formAction")){if(u=f,x=f[Mn]||null)T=x.formAction;else if(Nd(u)!==null)continue}else T=x.action;typeof T=="function"?a[o+1]=T:(a.splice(o,3),o-=3),Dv(a)}}}function Uv(){function t(f){f.canIntercept&&f.info==="react-transition"&&f.intercept({handler:function(){return new Promise(function(x){return u=x})},focusReset:"manual",scroll:"manual"})}function n(){u!==null&&(u(),u=null),o||setTimeout(a,20)}function a(){if(!o&&!navigation.transition){var f=navigation.currentEntry;f&&f.url!=null&&navigation.navigate(f.url,{state:f.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var o=!1,u=null;return navigation.addEventListener("navigate",t),navigation.addEventListener("navigatesuccess",n),navigation.addEventListener("navigateerror",n),setTimeout(a,100),function(){o=!0,navigation.removeEventListener("navigate",t),navigation.removeEventListener("navigatesuccess",n),navigation.removeEventListener("navigateerror",n),u!==null&&(u(),u=null)}}}function Od(t){this._internalRoot=t}Oc.prototype.render=Od.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(s(409));var a=n.current,o=ni();Mv(a,o,t,n,null,null)},Oc.prototype.unmount=Od.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;Mv(t.current,2,null,t,null,null),pc(),n[Mi]=null}};function Oc(t){this._internalRoot=t}Oc.prototype.unstable_scheduleHydration=function(t){if(t){var n=oo();t={blockedOn:null,target:t,priority:n};for(var a=0;a<Ka.length&&n!==0&&n<Ka[a].priority;a++);Ka.splice(a,0,t),a===0&&Cv(t)}};var Nv=e.version;if(Nv!=="19.2.4")throw Error(s(527,Nv,"19.2.4"));H.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(s(188)):(t=Object.keys(t).join(","),Error(s(268,t)));return t=m(n),t=t!==null?g(t):null,t=t===null?null:t.stateNode,t};var dM={bundleType:0,version:"19.2.4",rendererPackageName:"react-dom",currentDispatcherRef:P,reconcilerVersion:"19.2.4"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Pc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Pc.isDisabled&&Pc.supportsFiber)try{be=Pc.inject(dM),Ee=Pc}catch{}}return Jo.createRoot=function(t,n){if(!l(t))throw Error(s(299));var a=!1,o="",u=zg,f=Hg,x=Gg;return n!=null&&(n.unstable_strictMode===!0&&(a=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onUncaughtError!==void 0&&(u=n.onUncaughtError),n.onCaughtError!==void 0&&(f=n.onCaughtError),n.onRecoverableError!==void 0&&(x=n.onRecoverableError)),n=Sv(t,1,!1,null,null,a,o,null,u,f,x,Uv),t[Mi]=n.current,md(t),new Od(n)},Jo.hydrateRoot=function(t,n,a){if(!l(t))throw Error(s(299));var o=!1,u="",f=zg,x=Hg,T=Gg,B=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(f=a.onUncaughtError),a.onCaughtError!==void 0&&(x=a.onCaughtError),a.onRecoverableError!==void 0&&(T=a.onRecoverableError),a.formState!==void 0&&(B=a.formState)),n=Sv(t,1,!0,n,a??null,o,u,B,f,x,T,Uv),n.context=yv(null),a=n.current,o=ni(),o=so(o),u=Pa(o),u.callback=null,Fa(a,u,o),a=o,n.current.lanes=a,Ln(n,a),Hi(n),t[Mi]=n.current,md(t),new Oc(n)},Jo.version="19.2.4",Jo}var Vv;function bM(){if(Vv)return Id.exports;Vv=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),Id.exports=MM(),Id.exports}var EM=bM();const TM=typeof document<"u"?li.useLayoutEffect:()=>{},cr=r=>{var e;return(e=r?.ownerDocument)!==null&&e!==void 0?e:document},Fr=r=>r&&"window"in r&&r.window===r?r:cr(r).defaultView||window;function AM(r){return r!==null&&typeof r=="object"&&"nodeType"in r&&typeof r.nodeType=="number"}function RM(r){return AM(r)&&r.nodeType===Node.DOCUMENT_FRAGMENT_NODE&&"host"in r}let CM=!1;function Rp(){return CM}function sx(r,e){if(!Rp())return e&&r?r.contains(e):!1;if(!r||!e)return!1;let i=e;for(;i!==null;){if(i===r)return!0;i.tagName==="SLOT"&&i.assignedSlot?i=i.assignedSlot.parentNode:RM(i)?i=i.host:i=i.parentNode}return!1}const Mh=(r=document)=>{var e;if(!Rp())return r.activeElement;let i=r.activeElement;for(;i&&"shadowRoot"in i&&(!((e=i.shadowRoot)===null||e===void 0)&&e.activeElement);)i=i.shadowRoot.activeElement;return i};function ox(r){return Rp()&&r.target.shadowRoot&&r.composedPath?r.composedPath()[0]:r.target}function wM(r){if(DM())r.focus({preventScroll:!0});else{let e=UM(r);r.focus(),NM(e)}}let Fc=null;function DM(){if(Fc==null){Fc=!1;try{document.createElement("div").focus({get preventScroll(){return Fc=!0,!0}})}catch{}}return Fc}function UM(r){let e=r.parentNode,i=[],s=document.scrollingElement||document.documentElement;for(;e instanceof HTMLElement&&e!==s;)(e.offsetHeight<e.scrollHeight||e.offsetWidth<e.scrollWidth)&&i.push({element:e,scrollTop:e.scrollTop,scrollLeft:e.scrollLeft}),e=e.parentNode;return s instanceof HTMLElement&&i.push({element:s,scrollTop:s.scrollTop,scrollLeft:s.scrollLeft}),i}function NM(r){for(let{element:e,scrollTop:i,scrollLeft:s}of r)e.scrollTop=i,e.scrollLeft=s}function Mu(r){var e;if(typeof window>"u"||window.navigator==null)return!1;let i=(e=window.navigator.userAgentData)===null||e===void 0?void 0:e.brands;return Array.isArray(i)&&i.some(s=>r.test(s.brand))||r.test(window.navigator.userAgent)}function lx(r){var e;return typeof window<"u"&&window.navigator!=null?r.test(((e=window.navigator.userAgentData)===null||e===void 0?void 0:e.platform)||window.navigator.platform):!1}function Js(r){let e=null;return()=>(e==null&&(e=r()),e)}const vu=Js(function(){return lx(/^Mac/i)}),LM=Js(function(){return lx(/^iPad/i)||vu()&&navigator.maxTouchPoints>1}),OM=Js(function(){return Mu(/AppleWebKit/i)&&!PM()}),PM=Js(function(){return Mu(/Chrome/i)}),FM=Js(function(){return Mu(/Android/i)}),IM=Js(function(){return Mu(/Firefox/i)});function pl(r,e,i=!0){var s,l;let{metaKey:c,ctrlKey:h,altKey:d,shiftKey:p}=e;IM()&&(!((l=window.event)===null||l===void 0||(s=l.type)===null||s===void 0)&&s.startsWith("key"))&&r.target==="_blank"&&(vu()?c=!0:h=!0);let m=OM()&&vu()&&!LM()?new KeyboardEvent("keydown",{keyIdentifier:"Enter",metaKey:c,ctrlKey:h,altKey:d,shiftKey:p}):new MouseEvent("click",{metaKey:c,ctrlKey:h,altKey:d,shiftKey:p,detail:1,bubbles:!0,cancelable:!0});pl.isOpening=i,wM(r),r.dispatchEvent(m),pl.isOpening=!1}pl.isOpening=!1;function cx(){let r=Ae.useRef(new Map),e=Ae.useCallback((l,c,h,d)=>{let p=d?.once?(...m)=>{r.current.delete(h),h(...m)}:h;r.current.set(h,{type:c,eventTarget:l,fn:p,options:d}),l.addEventListener(c,p,d)},[]),i=Ae.useCallback((l,c,h,d)=>{var p;let m=((p=r.current.get(h))===null||p===void 0?void 0:p.fn)||h;l.removeEventListener(c,m,d),r.current.delete(h)},[]),s=Ae.useCallback(()=>{r.current.forEach((l,c)=>{i(l.eventTarget,l.type,c,l.options)})},[i]);return Ae.useEffect(()=>s,[s]),{addGlobalListener:e,removeGlobalListener:i,removeAllGlobalListeners:s}}function BM(r){return r.pointerType===""&&r.isTrusted?!0:FM()&&r.pointerType?r.type==="click"&&r.buttons===1:r.detail===0&&!r.pointerType}function ux(r){let e=r;return e.nativeEvent=r,e.isDefaultPrevented=()=>e.defaultPrevented,e.isPropagationStopped=()=>e.cancelBubble,e.persist=()=>{},e}function zM(r,e){Object.defineProperty(r,"target",{value:e}),Object.defineProperty(r,"currentTarget",{value:e})}function fx(r){let e=Ae.useRef({isFocused:!1,observer:null});return TM(()=>{const i=e.current;return()=>{i.observer&&(i.observer.disconnect(),i.observer=null)}},[]),Ae.useCallback(i=>{if(i.target instanceof HTMLButtonElement||i.target instanceof HTMLInputElement||i.target instanceof HTMLTextAreaElement||i.target instanceof HTMLSelectElement){e.current.isFocused=!0;let s=i.target,l=c=>{if(e.current.isFocused=!1,s.disabled){let h=ux(c);r?.(h)}e.current.observer&&(e.current.observer.disconnect(),e.current.observer=null)};s.addEventListener("focusout",l,{once:!0}),e.current.observer=new MutationObserver(()=>{if(e.current.isFocused&&s.disabled){var c;(c=e.current.observer)===null||c===void 0||c.disconnect();let h=s===document.activeElement?null:document.activeElement;s.dispatchEvent(new FocusEvent("blur",{relatedTarget:h})),s.dispatchEvent(new FocusEvent("focusout",{bubbles:!0,relatedTarget:h}))}}),e.current.observer.observe(s,{attributes:!0,attributeFilter:["disabled"]})}},[r])}let HM=!1,yl=null,bh=new Set,ul=new Map,zr=!1,Eh=!1;const GM={Tab:!0,Escape:!0};function Cp(r,e){for(let i of bh)i(r,e)}function VM(r){return!(r.metaKey||!vu()&&r.altKey||r.ctrlKey||r.key==="Control"||r.key==="Shift"||r.key==="Meta")}function _u(r){zr=!0,!pl.isOpening&&VM(r)&&(yl="keyboard",Cp("keyboard",r))}function Ws(r){yl="pointer","pointerType"in r&&r.pointerType,(r.type==="mousedown"||r.type==="pointerdown")&&(zr=!0,Cp("pointer",r))}function dx(r){!pl.isOpening&&BM(r)&&(zr=!0,yl="virtual")}function hx(r){r.target===window||r.target===document||HM||!r.isTrusted||(!zr&&!Eh&&(yl="virtual",Cp("virtual",r)),zr=!1,Eh=!1)}function px(){zr=!1,Eh=!0}function Th(r){if(typeof window>"u"||typeof document>"u"||ul.get(Fr(r)))return;const e=Fr(r),i=cr(r);let s=e.HTMLElement.prototype.focus;e.HTMLElement.prototype.focus=function(){zr=!0,s.apply(this,arguments)},i.addEventListener("keydown",_u,!0),i.addEventListener("keyup",_u,!0),i.addEventListener("click",dx,!0),e.addEventListener("focus",hx,!0),e.addEventListener("blur",px,!1),typeof PointerEvent<"u"&&(i.addEventListener("pointerdown",Ws,!0),i.addEventListener("pointermove",Ws,!0),i.addEventListener("pointerup",Ws,!0)),e.addEventListener("beforeunload",()=>{mx(r)},{once:!0}),ul.set(e,{focus:s})}const mx=(r,e)=>{const i=Fr(r),s=cr(r);e&&s.removeEventListener("DOMContentLoaded",e),ul.has(i)&&(i.HTMLElement.prototype.focus=ul.get(i).focus,s.removeEventListener("keydown",_u,!0),s.removeEventListener("keyup",_u,!0),s.removeEventListener("click",dx,!0),i.removeEventListener("focus",hx,!0),i.removeEventListener("blur",px,!1),typeof PointerEvent<"u"&&(s.removeEventListener("pointerdown",Ws,!0),s.removeEventListener("pointermove",Ws,!0),s.removeEventListener("pointerup",Ws,!0)),ul.delete(i))};function kM(r){const e=cr(r);let i;return e.readyState!=="loading"?Th(r):(i=()=>{Th(r)},e.addEventListener("DOMContentLoaded",i)),()=>mx(r,i)}typeof document<"u"&&kM();function gx(){return yl!=="pointer"}const XM=new Set(["checkbox","radio","range","color","file","image","button","submit","reset"]);function WM(r,e,i){let s=cr(i?.target);const l=typeof window<"u"?Fr(i?.target).HTMLInputElement:HTMLInputElement,c=typeof window<"u"?Fr(i?.target).HTMLTextAreaElement:HTMLTextAreaElement,h=typeof window<"u"?Fr(i?.target).HTMLElement:HTMLElement,d=typeof window<"u"?Fr(i?.target).KeyboardEvent:KeyboardEvent;return r=r||s.activeElement instanceof l&&!XM.has(s.activeElement.type)||s.activeElement instanceof c||s.activeElement instanceof h&&s.activeElement.isContentEditable,!(r&&e==="keyboard"&&i instanceof d&&!GM[i.key])}function qM(r,e,i){Th(),Ae.useEffect(()=>{let s=(l,c)=>{WM(!!i?.isTextInput,l,c)&&r(gx())};return bh.add(s),()=>{bh.delete(s)}},e)}function jM(r){let{isDisabled:e,onFocus:i,onBlur:s,onFocusChange:l}=r;const c=Ae.useCallback(p=>{if(p.target===p.currentTarget)return s&&s(p),l&&l(!1),!0},[s,l]),h=fx(c),d=Ae.useCallback(p=>{const m=cr(p.target),g=m?Mh(m):Mh();p.target===p.currentTarget&&g===ox(p.nativeEvent)&&(i&&i(p),l&&l(!0),h(p))},[l,i,h]);return{focusProps:{onFocus:!e&&(i||l||s)?d:void 0,onBlur:!e&&(s||l)?c:void 0}}}function YM(r){let{isDisabled:e,onBlurWithin:i,onFocusWithin:s,onFocusWithinChange:l}=r,c=Ae.useRef({isFocusWithin:!1}),{addGlobalListener:h,removeAllGlobalListeners:d}=cx(),p=Ae.useCallback(v=>{v.currentTarget.contains(v.target)&&c.current.isFocusWithin&&!v.currentTarget.contains(v.relatedTarget)&&(c.current.isFocusWithin=!1,d(),i&&i(v),l&&l(!1))},[i,l,c,d]),m=fx(p),g=Ae.useCallback(v=>{if(!v.currentTarget.contains(v.target))return;const S=cr(v.target),y=Mh(S);if(!c.current.isFocusWithin&&y===ox(v.nativeEvent)){s&&s(v),l&&l(!0),c.current.isFocusWithin=!0,m(v);let E=v.currentTarget;h(S,"focus",R=>{if(c.current.isFocusWithin&&!sx(E,R.target)){let M=new S.defaultView.FocusEvent("blur",{relatedTarget:R.target});zM(M,E);let _=ux(M);p(_)}},{capture:!0})}},[s,l,m,h,p]);return e?{focusWithinProps:{onFocus:void 0,onBlur:void 0}}:{focusWithinProps:{onFocus:g,onBlur:p}}}let Ah=!1,Ic=0;function ZM(){Ah=!0,setTimeout(()=>{Ah=!1},50)}function kv(r){r.pointerType==="touch"&&ZM()}function KM(){if(!(typeof document>"u"))return Ic===0&&typeof PointerEvent<"u"&&document.addEventListener("pointerup",kv),Ic++,()=>{Ic--,!(Ic>0)&&typeof PointerEvent<"u"&&document.removeEventListener("pointerup",kv)}}function QM(r){let{onHoverStart:e,onHoverChange:i,onHoverEnd:s,isDisabled:l}=r,[c,h]=Ae.useState(!1),d=Ae.useRef({isHovered:!1,ignoreEmulatedMouseEvents:!1,pointerType:"",target:null}).current;Ae.useEffect(KM,[]);let{addGlobalListener:p,removeAllGlobalListeners:m}=cx(),{hoverProps:g,triggerHoverEnd:v}=Ae.useMemo(()=>{let S=(R,M)=>{if(d.pointerType=M,l||M==="touch"||d.isHovered||!R.currentTarget.contains(R.target))return;d.isHovered=!0;let _=R.currentTarget;d.target=_,p(cr(R.target),"pointerover",N=>{d.isHovered&&d.target&&!sx(d.target,N.target)&&y(N,N.pointerType)},{capture:!0}),e&&e({type:"hoverstart",target:_,pointerType:M}),i&&i(!0),h(!0)},y=(R,M)=>{let _=d.target;d.pointerType="",d.target=null,!(M==="touch"||!d.isHovered||!_)&&(d.isHovered=!1,m(),s&&s({type:"hoverend",target:_,pointerType:M}),i&&i(!1),h(!1))},E={};return typeof PointerEvent<"u"&&(E.onPointerEnter=R=>{Ah&&R.pointerType==="mouse"||S(R,R.pointerType)},E.onPointerLeave=R=>{!l&&R.currentTarget.contains(R.target)&&y(R,R.pointerType)}),{hoverProps:E,triggerHoverEnd:y}},[e,i,s,l,d,p,m]);return Ae.useEffect(()=>{l&&v({currentTarget:d.target},d.pointerType)},[l]),{hoverProps:g,isHovered:c}}function $M(r={}){let{autoFocus:e=!1,isTextInput:i,within:s}=r,l=Ae.useRef({isFocused:!1,isFocusVisible:e||gx()}),[c,h]=Ae.useState(!1),[d,p]=Ae.useState(()=>l.current.isFocused&&l.current.isFocusVisible),m=Ae.useCallback(()=>p(l.current.isFocused&&l.current.isFocusVisible),[]),g=Ae.useCallback(y=>{l.current.isFocused=y,h(y),m()},[m]);qM(y=>{l.current.isFocusVisible=y,m()},[],{isTextInput:i});let{focusProps:v}=jM({isDisabled:s,onFocusChange:g}),{focusWithinProps:S}=YM({isDisabled:!s,onFocusWithinChange:g});return{isFocused:c,isFocusVisible:d,focusProps:s?S:v}}var JM=Object.defineProperty,eb=(r,e,i)=>e in r?JM(r,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):r[e]=i,Gd=(r,e,i)=>(eb(r,typeof e!="symbol"?e+"":e,i),i);let tb=class{constructor(){Gd(this,"current",this.detect()),Gd(this,"handoffState","pending"),Gd(this,"currentId",0)}set(e){this.current!==e&&(this.handoffState="pending",this.currentId=0,this.current=e)}reset(){this.set(this.detect())}nextId(){return++this.currentId}get isServer(){return this.current==="server"}get isClient(){return this.current==="client"}detect(){return typeof window>"u"||typeof document>"u"?"server":"client"}handoff(){this.handoffState==="pending"&&(this.handoffState="complete")}get isHandoffComplete(){return this.handoffState==="complete"}},vx=new tb;function _x(r){var e;return vx.isServer?null:r==null?document:(e=r?.ownerDocument)!=null?e:document}function nb(r){typeof queueMicrotask=="function"?queueMicrotask(r):Promise.resolve().then(r).catch(e=>setTimeout(()=>{throw e}))}function bu(){let r=[],e={addEventListener(i,s,l,c){return i.addEventListener(s,l,c),e.add(()=>i.removeEventListener(s,l,c))},requestAnimationFrame(...i){let s=requestAnimationFrame(...i);return e.add(()=>cancelAnimationFrame(s))},nextFrame(...i){return e.requestAnimationFrame(()=>e.requestAnimationFrame(...i))},setTimeout(...i){let s=setTimeout(...i);return e.add(()=>clearTimeout(s))},microTask(...i){let s={current:!0};return nb(()=>{s.current&&i[0]()}),e.add(()=>{s.current=!1})},style(i,s,l){let c=i.style.getPropertyValue(s);return Object.assign(i.style,{[s]:l}),this.add(()=>{Object.assign(i.style,{[s]:c})})},group(i){let s=bu();return i(s),this.add(()=>s.dispose())},add(i){return r.includes(i)||r.push(i),()=>{let s=r.indexOf(i);if(s>=0)for(let l of r.splice(s,1))l()}},dispose(){for(let i of r.splice(0))i()}};return e}function xx(){let[r]=Ae.useState(bu);return Ae.useEffect(()=>()=>r.dispose(),[r]),r}let Sx=(r,e)=>{vx.isServer?Ae.useEffect(r,e):Ae.useLayoutEffect(r,e)};function ib(r){let e=Ae.useRef(r);return Sx(()=>{e.current=r},[r]),e}let Sa=function(r){let e=ib(r);return li.useCallback((...i)=>e.current(...i),[e])};function ab(r){let e=r.width/2,i=r.height/2;return{top:r.clientY-i,right:r.clientX+e,bottom:r.clientY+i,left:r.clientX-e}}function rb(r,e){return!(!r||!e||r.right<e.left||r.left>e.right||r.bottom<e.top||r.top>e.bottom)}function sb({disabled:r=!1}={}){let e=Ae.useRef(null),[i,s]=Ae.useState(!1),l=xx(),c=Sa(()=>{e.current=null,s(!1),l.dispose()}),h=Sa(d=>{if(l.dispose(),e.current===null){e.current=d.currentTarget,s(!0);{let p=_x(d.currentTarget);l.addEventListener(p,"pointerup",c,!1),l.addEventListener(p,"pointermove",m=>{if(e.current){let g=ab(m);s(rb(g,e.current.getBoundingClientRect()))}},!1),l.addEventListener(p,"pointercancel",c,!1)}}});return{pressed:i,pressProps:r?{}:{onPointerDown:h,onPointerUp:c,onClick:c}}}function wp(r){return Ae.useMemo(()=>r,Object.values(r))}function Xv(...r){return Array.from(new Set(r.flatMap(e=>typeof e=="string"?e.split(" "):[]))).filter(Boolean).join(" ")}function Ml(r,e,...i){if(r in e){let l=e[r];return typeof l=="function"?l(...i):l}let s=new Error(`Tried to handle "${r}" but there is no handler defined. Only defined handlers are: ${Object.keys(e).map(l=>`"${l}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(s,Ml),s}var Rh=(r=>(r[r.None=0]="None",r[r.RenderStrategy=1]="RenderStrategy",r[r.Static=2]="Static",r))(Rh||{}),ob=(r=>(r[r.Unmount=0]="Unmount",r[r.Hidden=1]="Hidden",r))(ob||{});function Dp(){let r=cb();return Ae.useCallback(e=>lb({mergeRefs:r,...e}),[r])}function lb({ourProps:r,theirProps:e,slot:i,defaultTag:s,features:l,visible:c=!0,name:h,mergeRefs:d}){d=d??ub;let p=yx(e,r);if(c)return Bc(p,i,s,h,d);let m=l??0;if(m&2){let{static:g=!1,...v}=p;if(g)return Bc(v,i,s,h,d)}if(m&1){let{unmount:g=!0,...v}=p;return Ml(g?0:1,{0(){return null},1(){return Bc({...v,hidden:!0,style:{display:"none"}},i,s,h,d)}})}return Bc(p,i,s,h,d)}function Bc(r,e={},i,s,l){let{as:c=i,children:h,refName:d="ref",...p}=Vd(r,["unmount","static"]),m=r.ref!==void 0?{[d]:r.ref}:{},g=typeof h=="function"?h(e):h;"className"in p&&p.className&&typeof p.className=="function"&&(p.className=p.className(e)),p["aria-labelledby"]&&p["aria-labelledby"]===p.id&&(p["aria-labelledby"]=void 0);let v={};if(e){let S=!1,y=[];for(let[E,R]of Object.entries(e))typeof R=="boolean"&&(S=!0),R===!0&&y.push(E.replace(/([A-Z])/g,M=>`-${M.toLowerCase()}`));if(S){v["data-headlessui-state"]=y.join(" ");for(let E of y)v[`data-${E}`]=""}}if(fl(c)&&(Object.keys(Es(p)).length>0||Object.keys(Es(v)).length>0))if(!Ae.isValidElement(g)||Array.isArray(g)&&g.length>1||db(g)){if(Object.keys(Es(p)).length>0)throw new Error(['Passing props on "Fragment"!',"",`The current component <${s} /> is rendering a "Fragment".`,"However we need to passthrough the following props:",Object.keys(Es(p)).concat(Object.keys(Es(v))).map(S=>`  - ${S}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',"Render a single element as the child so that we can forward the props onto that element."].map(S=>`  - ${S}`).join(`
`)].join(`
`))}else{let S=g.props,y=S?.className,E=typeof y=="function"?(..._)=>Xv(y(..._),p.className):Xv(y,p.className),R=E?{className:E}:{},M=yx(g.props,Es(Vd(p,["ref"])));for(let _ in v)_ in M&&delete v[_];return Ae.cloneElement(g,Object.assign({},M,v,m,{ref:l(fb(g),m.ref)},R))}return Ae.createElement(c,Object.assign({},Vd(p,["ref"]),!fl(c)&&m,!fl(c)&&v),g)}function cb(){let r=Ae.useRef([]),e=Ae.useCallback(i=>{for(let s of r.current)s!=null&&(typeof s=="function"?s(i):s.current=i)},[]);return(...i)=>{if(!i.every(s=>s==null))return r.current=i,e}}function ub(...r){return r.every(e=>e==null)?void 0:e=>{for(let i of r)i!=null&&(typeof i=="function"?i(e):i.current=e)}}function yx(...r){if(r.length===0)return{};if(r.length===1)return r[0];let e={},i={};for(let s of r)for(let l in s)l.startsWith("on")&&typeof s[l]=="function"?(i[l]!=null||(i[l]=[]),i[l].push(s[l])):e[l]=s[l];if(e.disabled||e["aria-disabled"])for(let s in i)/^(on(?:Click|Pointer|Mouse|Key)(?:Down|Up|Press)?)$/.test(s)&&(i[s]=[l=>{var c;return(c=l?.preventDefault)==null?void 0:c.call(l)}]);for(let s in i)Object.assign(e,{[s](l,...c){let h=i[s];for(let d of h){if((l instanceof Event||l?.nativeEvent instanceof Event)&&l.defaultPrevented)return;d(l,...c)}}});return e}function Wv(...r){if(r.length===0)return{};if(r.length===1)return r[0];let e={},i={};for(let s of r)for(let l in s)l.startsWith("on")&&typeof s[l]=="function"?(i[l]!=null||(i[l]=[]),i[l].push(s[l])):e[l]=s[l];for(let s in i)Object.assign(e,{[s](...l){let c=i[s];for(let h of c)h?.(...l)}});return e}function Up(r){var e;return Object.assign(Ae.forwardRef(r),{displayName:(e=r.displayName)!=null?e:r.name})}function Es(r){let e=Object.assign({},r);for(let i in e)e[i]===void 0&&delete e[i];return e}function Vd(r,e=[]){let i=Object.assign({},r);for(let s of e)s in i&&delete i[s];return i}function fb(r){return li.version.split(".")[0]>="19"?r.props.ref:r.ref}function fl(r){return r===Ae.Fragment||r===Symbol.for("react.fragment")}function db(r){return fl(r.type)}function hb(r){return typeof r!="object"||r===null?!1:"nodeType"in r}function Mx(r){return hb(r)&&"tagName"in r}function bx(r){return Mx(r)&&"accessKey"in r}function qv(r){return Mx(r)&&"tabIndex"in r}function pb(r){return bx(r)&&r.nodeName==="FIELDSET"}function Ex(r){return bx(r)&&r.nodeName==="LEGEND"}function mb(r){let e=r.parentElement,i=null;for(;e&&!pb(e);)Ex(e)&&(i=e),e=e.parentElement;let s=e?.getAttribute("disabled")==="";return s&&gb(i)?!1:s}function gb(r){if(!r)return!1;let e=r.previousElementSibling;for(;e!==null;){if(Ex(e))return!1;e=e.previousElementSibling}return!0}let Tx=Symbol();function vb(r,e=!0){return Object.assign(r,{[Tx]:e})}function Np(...r){let e=Ae.useRef(r);Ae.useEffect(()=>{e.current=r},[r]);let i=Sa(s=>{for(let l of e.current)l!=null&&(typeof l=="function"?l(s):l.current=s)});return r.every(s=>s==null||s?.[Tx])?void 0:i}var ks=(r=>(r.Space=" ",r.Enter="Enter",r.Escape="Escape",r.Backspace="Backspace",r.Delete="Delete",r.ArrowLeft="ArrowLeft",r.ArrowUp="ArrowUp",r.ArrowRight="ArrowRight",r.ArrowDown="ArrowDown",r.Home="Home",r.End="End",r.PageUp="PageUp",r.PageDown="PageDown",r.Tab="Tab",r))(ks||{});let _b=Ae.createContext(()=>{});function xb({value:r,children:e}){return li.createElement(_b.Provider,{value:r},e)}function Sb(r,e){return Ae.useMemo(()=>{var i;if(r.type)return r.type;let s=(i=r.as)!=null?i:"button";if(typeof s=="string"&&s.toLowerCase()==="button"||e?.tagName==="BUTTON"&&!e.hasAttribute("type"))return"button"},[r.type,r.as,e])}function yb(r=0){let[e,i]=Ae.useState(r),s=Ae.useCallback(p=>i(p),[]),l=Ae.useCallback(p=>i(m=>m|p),[]),c=Ae.useCallback(p=>(e&p)===p,[e]),h=Ae.useCallback(p=>i(m=>m&~p),[]),d=Ae.useCallback(p=>i(m=>m^p),[]);return{flags:e,setFlag:s,addFlag:l,hasFlag:c,removeFlag:h,toggleFlag:d}}var Mb={},jv,Yv;typeof process<"u"&&typeof globalThis<"u"&&typeof Element<"u"&&((jv=process==null?void 0:Mb)==null?void 0:jv.NODE_ENV)==="test"&&typeof((Yv=Element?.prototype)==null?void 0:Yv.getAnimations)>"u"&&(Element.prototype.getAnimations=function(){return console.warn(["Headless UI has polyfilled `Element.prototype.getAnimations` for your tests.","Please install a proper polyfill e.g. `jsdom-testing-mocks`, to silence these warnings.","","Example usage:","```js","import { mockAnimationsApi } from 'jsdom-testing-mocks'","mockAnimationsApi()","```"].join(`
`)),[]});var bb=(r=>(r[r.None=0]="None",r[r.Closed=1]="Closed",r[r.Enter=2]="Enter",r[r.Leave=4]="Leave",r))(bb||{});function Eb(r){let e={};for(let i in r)r[i]===!0&&(e[`data-${i}`]="");return e}function Tb(r,e,i,s){let[l,c]=Ae.useState(i),{hasFlag:h,addFlag:d,removeFlag:p}=yb(r&&l?3:0),m=Ae.useRef(!1),g=Ae.useRef(!1),v=xx();return Sx(()=>{var S;if(r){if(i&&c(!0),!e){i&&d(3);return}return(S=void 0)==null||S.call(s,i),Ab(e,{inFlight:m,prepare(){g.current?g.current=!1:g.current=m.current,m.current=!0,!g.current&&(i?(d(3),p(4)):(d(4),p(2)))},run(){g.current?i?(p(3),d(4)):(p(4),d(3)):i?p(1):d(1)},done(){var y;g.current&&wb(e)||(m.current=!1,p(7),i||c(!1),(y=void 0)==null||y.call(s,i))}})}},[r,i,e,v]),r?[l,{closed:h(1),enter:h(2),leave:h(4),transition:h(2)||h(4)}]:[i,{closed:void 0,enter:void 0,leave:void 0,transition:void 0}]}function Ab(r,{prepare:e,run:i,done:s,inFlight:l}){let c=bu();return Cb(r,{prepare:e,inFlight:l}),c.nextFrame(()=>{i(),c.requestAnimationFrame(()=>{c.add(Rb(r,s))})}),c.dispose}function Rb(r,e){var i,s;let l=bu();if(!r)return l.dispose;let c=!1;l.add(()=>{c=!0});let h=(s=(i=r.getAnimations)==null?void 0:i.call(r).filter(d=>d instanceof CSSTransition))!=null?s:[];return h.length===0?(e(),l.dispose):(Promise.allSettled(h.map(d=>d.finished)).then(()=>{c||e()}),l.dispose)}function Cb(r,{inFlight:e,prepare:i}){if(e!=null&&e.current){i();return}let s=r.style.transition;r.style.transition="none",i(),r.offsetHeight,r.style.transition=s}function wb(r){var e,i;return((i=(e=r.getAnimations)==null?void 0:e.call(r))!=null?i:[]).some(s=>s instanceof CSSTransition&&s.playState!=="finished")}let Eu=Ae.createContext(null);Eu.displayName="OpenClosedContext";var ml=(r=>(r[r.Open=1]="Open",r[r.Closed=2]="Closed",r[r.Closing=4]="Closing",r[r.Opening=8]="Opening",r))(ml||{});function Db(){return Ae.useContext(Eu)}function Ub({value:r,children:e}){return li.createElement(Eu.Provider,{value:r},e)}function Nb({children:r}){return li.createElement(Eu.Provider,{value:null},r)}var Zv;let Lb=(Zv=li.startTransition)!=null?Zv:function(r){r()};var Ob=(r=>(r[r.Open=0]="Open",r[r.Closed=1]="Closed",r))(Ob||{}),Pb=(r=>(r[r.ToggleDisclosure=0]="ToggleDisclosure",r[r.CloseDisclosure=1]="CloseDisclosure",r[r.SetButtonId=2]="SetButtonId",r[r.SetPanelId=3]="SetPanelId",r[r.SetButtonElement=4]="SetButtonElement",r[r.SetPanelElement=5]="SetPanelElement",r))(Pb||{});let Fb={0:r=>({...r,disclosureState:Ml(r.disclosureState,{0:1,1:0})}),1:r=>r.disclosureState===1?r:{...r,disclosureState:1},2(r,e){return r.buttonId===e.buttonId?r:{...r,buttonId:e.buttonId}},3(r,e){return r.panelId===e.panelId?r:{...r,panelId:e.panelId}},4(r,e){return r.buttonElement===e.element?r:{...r,buttonElement:e.element}},5(r,e){return r.panelElement===e.element?r:{...r,panelElement:e.element}}},Lp=Ae.createContext(null);Lp.displayName="DisclosureContext";function Op(r){let e=Ae.useContext(Lp);if(e===null){let i=new Error(`<${r} /> is missing a parent <Disclosure /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(i,Op),i}return e}let Pp=Ae.createContext(null);Pp.displayName="DisclosureAPIContext";function Ax(r){let e=Ae.useContext(Pp);if(e===null){let i=new Error(`<${r} /> is missing a parent <Disclosure /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(i,Ax),i}return e}let Fp=Ae.createContext(null);Fp.displayName="DisclosurePanelContext";function Ib(){return Ae.useContext(Fp)}function Bb(r,e){return Ml(e.type,Fb,r,e)}let zb=Ae.Fragment;function Hb(r,e){let{defaultOpen:i=!1,...s}=r,l=Ae.useRef(null),c=Np(e,vb(R=>{l.current=R},r.as===void 0||fl(r.as))),h=Ae.useReducer(Bb,{disclosureState:i?0:1,buttonElement:null,panelElement:null,buttonId:null,panelId:null}),[{disclosureState:d,buttonId:p},m]=h,g=Sa(R=>{m({type:1});let M=_x(l.current);if(!M||!p)return;let _=R?qv(R)?R:"current"in R&&qv(R.current)?R.current:M.getElementById(p):M.getElementById(p);_?.focus()}),v=Ae.useMemo(()=>({close:g}),[g]),S=wp({open:d===0,close:g}),y={ref:c},E=Dp();return li.createElement(Lp.Provider,{value:h},li.createElement(Pp.Provider,{value:v},li.createElement(xb,{value:g},li.createElement(Ub,{value:Ml(d,{0:ml.Open,1:ml.Closed})},E({ourProps:y,theirProps:s,slot:S,defaultTag:zb,name:"Disclosure"})))))}let Gb="button";function Vb(r,e){let i=Ae.useId(),{id:s=`headlessui-disclosure-button-${i}`,disabled:l=!1,autoFocus:c=!1,...h}=r,[d,p]=Op("Disclosure.Button"),m=Ib(),g=m===null?!1:m===d.panelId,v=Ae.useRef(null),S=Np(v,e,Sa(C=>{if(!g)return p({type:4,element:C})}));Ae.useEffect(()=>{if(!g)return p({type:2,buttonId:s}),()=>{p({type:2,buttonId:null})}},[s,p,g]);let y=Sa(C=>{var w;if(g){if(d.disclosureState===1)return;switch(C.key){case ks.Space:case ks.Enter:C.preventDefault(),C.stopPropagation(),p({type:0}),(w=d.buttonElement)==null||w.focus();break}}else switch(C.key){case ks.Space:case ks.Enter:C.preventDefault(),C.stopPropagation(),p({type:0});break}}),E=Sa(C=>{C.key===ks.Space&&C.preventDefault()}),R=Sa(C=>{var w;mb(C.currentTarget)||l||(g?(p({type:0}),(w=d.buttonElement)==null||w.focus()):p({type:0}))}),{isFocusVisible:M,focusProps:_}=$M({autoFocus:c}),{isHovered:N,hoverProps:O}=QM({isDisabled:l}),{pressed:L,pressProps:I}=sb({disabled:l}),z=wp({open:d.disclosureState===0,hover:N,active:L,disabled:l,focus:M,autofocus:c}),F=Sb(r,d.buttonElement),K=Wv(g?{ref:S,type:F,disabled:l||void 0,autoFocus:c,onKeyDown:y,onClick:R}:{ref:S,id:s,type:F,"aria-expanded":d.disclosureState===0,"aria-controls":d.panelElement?d.panelId:void 0,disabled:l||void 0,autoFocus:c,onKeyDown:y,onKeyUp:E,onClick:R},_,O,I);return Dp()({ourProps:K,theirProps:h,slot:z,defaultTag:Gb,name:"Disclosure.Button"})}let kb="div",Xb=Rh.RenderStrategy|Rh.Static;function Wb(r,e){let i=Ae.useId(),{id:s=`headlessui-disclosure-panel-${i}`,transition:l=!1,...c}=r,[h,d]=Op("Disclosure.Panel"),{close:p}=Ax("Disclosure.Panel"),[m,g]=Ae.useState(null),v=Np(e,Sa(N=>{Lb(()=>d({type:5,element:N}))}),g);Ae.useEffect(()=>(d({type:3,panelId:s}),()=>{d({type:3,panelId:null})}),[s,d]);let S=Db(),[y,E]=Tb(l,m,S!==null?(S&ml.Open)===ml.Open:h.disclosureState===0),R=wp({open:h.disclosureState===0,close:p}),M={ref:v,id:s,...Eb(E)},_=Dp();return li.createElement(Nb,null,li.createElement(Fp.Provider,{value:h.panelId},_({ourProps:M,theirProps:c,slot:R,defaultTag:kb,features:Xb,visible:y,name:"Disclosure.Panel"})))}let qb=Up(Hb),Ch=Up(Vb),Rx=Up(Wb),jb=Object.assign(qb,{Button:Ch,Panel:Rx});const Ip="182",Yb=0,Kv=1,Zb=2,fu=1,Kb=2,ll=3,lr=0,Vn=1,xa=2,Ma=0,qs=1,Qv=2,$v=3,Jv=4,Qb=5,Or=100,$b=101,Jb=102,eE=103,tE=104,nE=200,iE=201,aE=202,rE=203,wh=204,Dh=205,sE=206,oE=207,lE=208,cE=209,uE=210,fE=211,dE=212,hE=213,pE=214,Uh=0,Nh=1,Lh=2,Ys=3,Oh=4,Ph=5,Fh=6,Ih=7,Bp=0,mE=1,gE=2,Wi=0,Cx=1,wx=2,Dx=3,zp=4,Ux=5,Nx=6,Lx=7,Ox=300,Hr=301,Zs=302,Bh=303,zh=304,Tu=306,Hh=1e3,ya=1001,Gh=1002,Nn=1003,vE=1004,zc=1005,In=1006,kd=1007,Ir=1008,oi=1009,Px=1010,Fx=1011,gl=1012,Hp=1013,ji=1014,Ui=1015,Ea=1016,Gp=1017,Vp=1018,vl=1020,Ix=35902,Bx=35899,zx=1021,Hx=1022,Ni=1023,Ta=1026,Br=1027,kp=1028,Xp=1029,Ks=1030,Wp=1031,qp=1033,du=33776,hu=33777,pu=33778,mu=33779,Vh=35840,kh=35841,Xh=35842,Wh=35843,qh=36196,jh=37492,Yh=37496,Zh=37488,Kh=37489,Qh=37490,$h=37491,Jh=37808,ep=37809,tp=37810,np=37811,ip=37812,ap=37813,rp=37814,sp=37815,op=37816,lp=37817,cp=37818,up=37819,fp=37820,dp=37821,hp=36492,pp=36494,mp=36495,gp=36283,vp=36284,_p=36285,xp=36286,_E=3200,jp=0,xE=1,sr="",ri="srgb",Qs="srgb-linear",xu="linear",Ht="srgb",Ts=7680,e_=519,SE=512,yE=513,ME=514,Yp=515,bE=516,EE=517,Zp=518,TE=519,t_=35044,n_="300 es",ki=2e3,Su=2001;function Gx(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function yu(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function AE(){const r=yu("canvas");return r.style.display="block",r}const i_={};function a_(...r){const e="THREE."+r.shift();console.log(e,...r)}function rt(...r){const e="THREE."+r.shift();console.warn(e,...r)}function At(...r){const e="THREE."+r.shift();console.error(e,...r)}function _l(...r){const e=r.join(" ");e in i_||(i_[e]=!0,rt(...r))}function RE(r,e,i){return new Promise(function(s,l){function c(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:l();break;case r.TIMEOUT_EXPIRED:setTimeout(c,i);break;default:s()}}setTimeout(c,i)})}class eo{addEventListener(e,i){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[e]===void 0&&(s[e]=[]),s[e].indexOf(i)===-1&&s[e].push(i)}hasEventListener(e,i){const s=this._listeners;return s===void 0?!1:s[e]!==void 0&&s[e].indexOf(i)!==-1}removeEventListener(e,i){const s=this._listeners;if(s===void 0)return;const l=s[e];if(l!==void 0){const c=l.indexOf(i);c!==-1&&l.splice(c,1)}}dispatchEvent(e){const i=this._listeners;if(i===void 0)return;const s=i[e.type];if(s!==void 0){e.target=this;const l=s.slice(0);for(let c=0,h=l.length;c<h;c++)l[c].call(this,e);e.target=null}}}const Pn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let r_=1234567;const dl=Math.PI/180,xl=180/Math.PI;function to(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(Pn[r&255]+Pn[r>>8&255]+Pn[r>>16&255]+Pn[r>>24&255]+"-"+Pn[e&255]+Pn[e>>8&255]+"-"+Pn[e>>16&15|64]+Pn[e>>24&255]+"-"+Pn[i&63|128]+Pn[i>>8&255]+"-"+Pn[i>>16&255]+Pn[i>>24&255]+Pn[s&255]+Pn[s>>8&255]+Pn[s>>16&255]+Pn[s>>24&255]).toLowerCase()}function _t(r,e,i){return Math.max(e,Math.min(i,r))}function Kp(r,e){return(r%e+e)%e}function CE(r,e,i,s,l){return s+(r-e)*(l-s)/(i-e)}function wE(r,e,i){return r!==e?(i-r)/(e-r):0}function hl(r,e,i){return(1-i)*r+i*e}function DE(r,e,i,s){return hl(r,e,1-Math.exp(-i*s))}function UE(r,e=1){return e-Math.abs(Kp(r,e*2)-e)}function NE(r,e,i){return r<=e?0:r>=i?1:(r=(r-e)/(i-e),r*r*(3-2*r))}function LE(r,e,i){return r<=e?0:r>=i?1:(r=(r-e)/(i-e),r*r*r*(r*(r*6-15)+10))}function OE(r,e){return r+Math.floor(Math.random()*(e-r+1))}function PE(r,e){return r+Math.random()*(e-r)}function FE(r){return r*(.5-Math.random())}function IE(r){r!==void 0&&(r_=r);let e=r_+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function BE(r){return r*dl}function zE(r){return r*xl}function HE(r){return(r&r-1)===0&&r!==0}function GE(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function VE(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function kE(r,e,i,s,l){const c=Math.cos,h=Math.sin,d=c(i/2),p=h(i/2),m=c((e+s)/2),g=h((e+s)/2),v=c((e-s)/2),S=h((e-s)/2),y=c((s-e)/2),E=h((s-e)/2);switch(l){case"XYX":r.set(d*g,p*v,p*S,d*m);break;case"YZY":r.set(p*S,d*g,p*v,d*m);break;case"ZXZ":r.set(p*v,p*S,d*g,d*m);break;case"XZX":r.set(d*g,p*E,p*y,d*m);break;case"YXY":r.set(p*y,d*g,p*E,d*m);break;case"ZYZ":r.set(p*E,p*y,d*g,d*m);break;default:rt("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+l)}}function Xs(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Hn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const Sp={DEG2RAD:dl,RAD2DEG:xl,generateUUID:to,clamp:_t,euclideanModulo:Kp,mapLinear:CE,inverseLerp:wE,lerp:hl,damp:DE,pingpong:UE,smoothstep:NE,smootherstep:LE,randInt:OE,randFloat:PE,randFloatSpread:FE,seededRandom:IE,degToRad:BE,radToDeg:zE,isPowerOfTwo:HE,ceilPowerOfTwo:GE,floorPowerOfTwo:VE,setQuaternionFromProperEuler:kE,normalize:Hn,denormalize:Xs};class Mt{constructor(e=0,i=0){Mt.prototype.isVector2=!0,this.x=e,this.y=i}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,i){return this.x=e,this.y=i,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const i=this.x,s=this.y,l=e.elements;return this.x=l[0]*i+l[3]*s+l[6],this.y=l[1]*i+l[4]*s+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,i){return this.x=_t(this.x,e.x,i.x),this.y=_t(this.y,e.y,i.y),this}clampScalar(e,i){return this.x=_t(this.x,e,i),this.y=_t(this.y,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(_t(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(_t(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y;return i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this}rotateAround(e,i){const s=Math.cos(i),l=Math.sin(i),c=this.x-e.x,h=this.y-e.y;return this.x=c*s-h*l+e.x,this.y=c*l+h*s+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class bl{constructor(e=0,i=0,s=0,l=1){this.isQuaternion=!0,this._x=e,this._y=i,this._z=s,this._w=l}static slerpFlat(e,i,s,l,c,h,d){let p=s[l+0],m=s[l+1],g=s[l+2],v=s[l+3],S=c[h+0],y=c[h+1],E=c[h+2],R=c[h+3];if(d<=0){e[i+0]=p,e[i+1]=m,e[i+2]=g,e[i+3]=v;return}if(d>=1){e[i+0]=S,e[i+1]=y,e[i+2]=E,e[i+3]=R;return}if(v!==R||p!==S||m!==y||g!==E){let M=p*S+m*y+g*E+v*R;M<0&&(S=-S,y=-y,E=-E,R=-R,M=-M);let _=1-d;if(M<.9995){const N=Math.acos(M),O=Math.sin(N);_=Math.sin(_*N)/O,d=Math.sin(d*N)/O,p=p*_+S*d,m=m*_+y*d,g=g*_+E*d,v=v*_+R*d}else{p=p*_+S*d,m=m*_+y*d,g=g*_+E*d,v=v*_+R*d;const N=1/Math.sqrt(p*p+m*m+g*g+v*v);p*=N,m*=N,g*=N,v*=N}}e[i]=p,e[i+1]=m,e[i+2]=g,e[i+3]=v}static multiplyQuaternionsFlat(e,i,s,l,c,h){const d=s[l],p=s[l+1],m=s[l+2],g=s[l+3],v=c[h],S=c[h+1],y=c[h+2],E=c[h+3];return e[i]=d*E+g*v+p*y-m*S,e[i+1]=p*E+g*S+m*v-d*y,e[i+2]=m*E+g*y+d*S-p*v,e[i+3]=g*E-d*v-p*S-m*y,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,i,s,l){return this._x=e,this._y=i,this._z=s,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,i=!0){const s=e._x,l=e._y,c=e._z,h=e._order,d=Math.cos,p=Math.sin,m=d(s/2),g=d(l/2),v=d(c/2),S=p(s/2),y=p(l/2),E=p(c/2);switch(h){case"XYZ":this._x=S*g*v+m*y*E,this._y=m*y*v-S*g*E,this._z=m*g*E+S*y*v,this._w=m*g*v-S*y*E;break;case"YXZ":this._x=S*g*v+m*y*E,this._y=m*y*v-S*g*E,this._z=m*g*E-S*y*v,this._w=m*g*v+S*y*E;break;case"ZXY":this._x=S*g*v-m*y*E,this._y=m*y*v+S*g*E,this._z=m*g*E+S*y*v,this._w=m*g*v-S*y*E;break;case"ZYX":this._x=S*g*v-m*y*E,this._y=m*y*v+S*g*E,this._z=m*g*E-S*y*v,this._w=m*g*v+S*y*E;break;case"YZX":this._x=S*g*v+m*y*E,this._y=m*y*v+S*g*E,this._z=m*g*E-S*y*v,this._w=m*g*v-S*y*E;break;case"XZY":this._x=S*g*v-m*y*E,this._y=m*y*v-S*g*E,this._z=m*g*E+S*y*v,this._w=m*g*v+S*y*E;break;default:rt("Quaternion: .setFromEuler() encountered an unknown order: "+h)}return i===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,i){const s=i/2,l=Math.sin(s);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(e){const i=e.elements,s=i[0],l=i[4],c=i[8],h=i[1],d=i[5],p=i[9],m=i[2],g=i[6],v=i[10],S=s+d+v;if(S>0){const y=.5/Math.sqrt(S+1);this._w=.25/y,this._x=(g-p)*y,this._y=(c-m)*y,this._z=(h-l)*y}else if(s>d&&s>v){const y=2*Math.sqrt(1+s-d-v);this._w=(g-p)/y,this._x=.25*y,this._y=(l+h)/y,this._z=(c+m)/y}else if(d>v){const y=2*Math.sqrt(1+d-s-v);this._w=(c-m)/y,this._x=(l+h)/y,this._y=.25*y,this._z=(p+g)/y}else{const y=2*Math.sqrt(1+v-s-d);this._w=(h-l)/y,this._x=(c+m)/y,this._y=(p+g)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(e,i){let s=e.dot(i)+1;return s<1e-8?(s=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=s):(this._x=0,this._y=-e.z,this._z=e.y,this._w=s)):(this._x=e.y*i.z-e.z*i.y,this._y=e.z*i.x-e.x*i.z,this._z=e.x*i.y-e.y*i.x,this._w=s),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(_t(this.dot(e),-1,1)))}rotateTowards(e,i){const s=this.angleTo(e);if(s===0)return this;const l=Math.min(1,i/s);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,i){const s=e._x,l=e._y,c=e._z,h=e._w,d=i._x,p=i._y,m=i._z,g=i._w;return this._x=s*g+h*d+l*m-c*p,this._y=l*g+h*p+c*d-s*m,this._z=c*g+h*m+s*p-l*d,this._w=h*g-s*d-l*p-c*m,this._onChangeCallback(),this}slerp(e,i){if(i<=0)return this;if(i>=1)return this.copy(e);let s=e._x,l=e._y,c=e._z,h=e._w,d=this.dot(e);d<0&&(s=-s,l=-l,c=-c,h=-h,d=-d);let p=1-i;if(d<.9995){const m=Math.acos(d),g=Math.sin(m);p=Math.sin(p*m)/g,i=Math.sin(i*m)/g,this._x=this._x*p+s*i,this._y=this._y*p+l*i,this._z=this._z*p+c*i,this._w=this._w*p+h*i,this._onChangeCallback()}else this._x=this._x*p+s*i,this._y=this._y*p+l*i,this._z=this._z*p+c*i,this._w=this._w*p+h*i,this.normalize();return this}slerpQuaternions(e,i,s){return this.copy(e).slerp(i,s)}random(){const e=2*Math.PI*Math.random(),i=2*Math.PI*Math.random(),s=Math.random(),l=Math.sqrt(1-s),c=Math.sqrt(s);return this.set(l*Math.sin(e),l*Math.cos(e),c*Math.sin(i),c*Math.cos(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,i=0){return this._x=e[i],this._y=e[i+1],this._z=e[i+2],this._w=e[i+3],this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._w,e}fromBufferAttribute(e,i){return this._x=e.getX(i),this._y=e.getY(i),this._z=e.getZ(i),this._w=e.getW(i),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class Z{constructor(e=0,i=0,s=0){Z.prototype.isVector3=!0,this.x=e,this.y=i,this.z=s}set(e,i,s){return s===void 0&&(s=this.z),this.x=e,this.y=i,this.z=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,i){return this.x=e.x*i.x,this.y=e.y*i.y,this.z=e.z*i.z,this}applyEuler(e){return this.applyQuaternion(s_.setFromEuler(e))}applyAxisAngle(e,i){return this.applyQuaternion(s_.setFromAxisAngle(e,i))}applyMatrix3(e){const i=this.x,s=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[3]*s+c[6]*l,this.y=c[1]*i+c[4]*s+c[7]*l,this.z=c[2]*i+c[5]*s+c[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,c=e.elements,h=1/(c[3]*i+c[7]*s+c[11]*l+c[15]);return this.x=(c[0]*i+c[4]*s+c[8]*l+c[12])*h,this.y=(c[1]*i+c[5]*s+c[9]*l+c[13])*h,this.z=(c[2]*i+c[6]*s+c[10]*l+c[14])*h,this}applyQuaternion(e){const i=this.x,s=this.y,l=this.z,c=e.x,h=e.y,d=e.z,p=e.w,m=2*(h*l-d*s),g=2*(d*i-c*l),v=2*(c*s-h*i);return this.x=i+p*m+h*v-d*g,this.y=s+p*g+d*m-c*v,this.z=l+p*v+c*g-h*m,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const i=this.x,s=this.y,l=this.z,c=e.elements;return this.x=c[0]*i+c[4]*s+c[8]*l,this.y=c[1]*i+c[5]*s+c[9]*l,this.z=c[2]*i+c[6]*s+c[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,i){return this.x=_t(this.x,e.x,i.x),this.y=_t(this.y,e.y,i.y),this.z=_t(this.z,e.z,i.z),this}clampScalar(e,i){return this.x=_t(this.x,e,i),this.y=_t(this.y,e,i),this.z=_t(this.z,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(_t(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,i){const s=e.x,l=e.y,c=e.z,h=i.x,d=i.y,p=i.z;return this.x=l*p-c*d,this.y=c*h-s*p,this.z=s*d-l*h,this}projectOnVector(e){const i=e.lengthSq();if(i===0)return this.set(0,0,0);const s=e.dot(this)/i;return this.copy(e).multiplyScalar(s)}projectOnPlane(e){return Xd.copy(this).projectOnVector(e),this.sub(Xd)}reflect(e){return this.sub(Xd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const i=Math.sqrt(this.lengthSq()*e.lengthSq());if(i===0)return Math.PI/2;const s=this.dot(e)/i;return Math.acos(_t(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const i=this.x-e.x,s=this.y-e.y,l=this.z-e.z;return i*i+s*s+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,i,s){const l=Math.sin(i)*e;return this.x=l*Math.sin(s),this.y=Math.cos(i)*e,this.z=l*Math.cos(s),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,i,s){return this.x=e*Math.sin(i),this.y=s,this.z=e*Math.cos(i),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this}setFromMatrixScale(e){const i=this.setFromMatrixColumn(e,0).length(),s=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=i,this.y=s,this.z=l,this}setFromMatrixColumn(e,i){return this.fromArray(e.elements,i*4)}setFromMatrix3Column(e,i){return this.fromArray(e.elements,i*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,i=Math.random()*2-1,s=Math.sqrt(1-i*i);return this.x=s*Math.cos(e),this.y=i,this.z=s*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Xd=new Z,s_=new bl;class dt{constructor(e,i,s,l,c,h,d,p,m){dt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,i,s,l,c,h,d,p,m)}set(e,i,s,l,c,h,d,p,m){const g=this.elements;return g[0]=e,g[1]=l,g[2]=d,g[3]=i,g[4]=c,g[5]=p,g[6]=s,g[7]=h,g[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],this}extractBasis(e,i,s){return e.setFromMatrix3Column(this,0),i.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const i=e.elements;return this.set(i[0],i[4],i[8],i[1],i[5],i[9],i[2],i[6],i[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,c=this.elements,h=s[0],d=s[3],p=s[6],m=s[1],g=s[4],v=s[7],S=s[2],y=s[5],E=s[8],R=l[0],M=l[3],_=l[6],N=l[1],O=l[4],L=l[7],I=l[2],z=l[5],F=l[8];return c[0]=h*R+d*N+p*I,c[3]=h*M+d*O+p*z,c[6]=h*_+d*L+p*F,c[1]=m*R+g*N+v*I,c[4]=m*M+g*O+v*z,c[7]=m*_+g*L+v*F,c[2]=S*R+y*N+E*I,c[5]=S*M+y*O+E*z,c[8]=S*_+y*L+E*F,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[3]*=e,i[6]*=e,i[1]*=e,i[4]*=e,i[7]*=e,i[2]*=e,i[5]*=e,i[8]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[1],l=e[2],c=e[3],h=e[4],d=e[5],p=e[6],m=e[7],g=e[8];return i*h*g-i*d*m-s*c*g+s*d*p+l*c*m-l*h*p}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],c=e[3],h=e[4],d=e[5],p=e[6],m=e[7],g=e[8],v=g*h-d*m,S=d*p-g*c,y=m*c-h*p,E=i*v+s*S+l*y;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const R=1/E;return e[0]=v*R,e[1]=(l*m-g*s)*R,e[2]=(d*s-l*h)*R,e[3]=S*R,e[4]=(g*i-l*p)*R,e[5]=(l*c-d*i)*R,e[6]=y*R,e[7]=(s*p-m*i)*R,e[8]=(h*i-s*c)*R,this}transpose(){let e;const i=this.elements;return e=i[1],i[1]=i[3],i[3]=e,e=i[2],i[2]=i[6],i[6]=e,e=i[5],i[5]=i[7],i[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const i=this.elements;return e[0]=i[0],e[1]=i[3],e[2]=i[6],e[3]=i[1],e[4]=i[4],e[5]=i[7],e[6]=i[2],e[7]=i[5],e[8]=i[8],this}setUvTransform(e,i,s,l,c,h,d){const p=Math.cos(c),m=Math.sin(c);return this.set(s*p,s*m,-s*(p*h+m*d)+h+e,-l*m,l*p,-l*(-m*h+p*d)+d+i,0,0,1),this}scale(e,i){return this.premultiply(Wd.makeScale(e,i)),this}rotate(e){return this.premultiply(Wd.makeRotation(-e)),this}translate(e,i){return this.premultiply(Wd.makeTranslation(e,i)),this}makeTranslation(e,i){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,i,0,0,1),this}makeRotation(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,s,i,0,0,0,1),this}makeScale(e,i){return this.set(e,0,0,0,i,0,0,0,1),this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<9;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<9;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Wd=new dt,o_=new dt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),l_=new dt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function XE(){const r={enabled:!0,workingColorSpace:Qs,spaces:{},convert:function(l,c,h){return this.enabled===!1||c===h||!c||!h||(this.spaces[c].transfer===Ht&&(l.r=ba(l.r),l.g=ba(l.g),l.b=ba(l.b)),this.spaces[c].primaries!==this.spaces[h].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[h].fromXYZ)),this.spaces[h].transfer===Ht&&(l.r=js(l.r),l.g=js(l.g),l.b=js(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===sr?xu:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,h){return l.copy(this.spaces[c].toXYZ).multiply(this.spaces[h].fromXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(l,c){return _l("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(l,c)},toWorkingColorSpace:function(l,c){return _l("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(l,c)}},e=[.64,.33,.3,.6,.15,.06],i=[.2126,.7152,.0722],s=[.3127,.329];return r.define({[Qs]:{primaries:e,whitePoint:s,transfer:xu,toXYZ:o_,fromXYZ:l_,luminanceCoefficients:i,workingColorSpaceConfig:{unpackColorSpace:ri},outputColorSpaceConfig:{drawingBufferColorSpace:ri}},[ri]:{primaries:e,whitePoint:s,transfer:Ht,toXYZ:o_,fromXYZ:l_,luminanceCoefficients:i,outputColorSpaceConfig:{drawingBufferColorSpace:ri}}}),r}const Rt=XE();function ba(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function js(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let As;class WE{static getDataURL(e,i="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let s;if(e instanceof HTMLCanvasElement)s=e;else{As===void 0&&(As=yu("canvas")),As.width=e.width,As.height=e.height;const l=As.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),s=As}return s.toDataURL(i)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const i=yu("canvas");i.width=e.width,i.height=e.height;const s=i.getContext("2d");s.drawImage(e,0,0,e.width,e.height);const l=s.getImageData(0,0,e.width,e.height),c=l.data;for(let h=0;h<c.length;h++)c[h]=ba(c[h]/255)*255;return s.putImageData(l,0,0),i}else if(e.data){const i=e.data.slice(0);for(let s=0;s<i.length;s++)i instanceof Uint8Array||i instanceof Uint8ClampedArray?i[s]=Math.floor(ba(i[s]/255)*255):i[s]=ba(i[s]);return{data:i,width:e.width,height:e.height}}else return rt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let qE=0;class Qp{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:qE++}),this.uuid=to(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const i=this.data;return typeof HTMLVideoElement<"u"&&i instanceof HTMLVideoElement?e.set(i.videoWidth,i.videoHeight,0):typeof VideoFrame<"u"&&i instanceof VideoFrame?e.set(i.displayHeight,i.displayWidth,0):i!==null?e.set(i.width,i.height,i.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const s={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let h=0,d=l.length;h<d;h++)l[h].isDataTexture?c.push(qd(l[h].image)):c.push(qd(l[h]))}else c=qd(l);s.url=c}return i||(e.images[this.uuid]=s),s}}function qd(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?WE.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(rt("Texture: Unable to serialize Texture."),{})}let jE=0;const jd=new Z;class kn extends eo{constructor(e=kn.DEFAULT_IMAGE,i=kn.DEFAULT_MAPPING,s=ya,l=ya,c=In,h=Ir,d=Ni,p=oi,m=kn.DEFAULT_ANISOTROPY,g=sr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:jE++}),this.uuid=to(),this.name="",this.source=new Qp(e),this.mipmaps=[],this.mapping=i,this.channel=0,this.wrapS=s,this.wrapT=l,this.magFilter=c,this.minFilter=h,this.anisotropy=m,this.format=d,this.internalFormat=null,this.type=p,this.offset=new Mt(0,0),this.repeat=new Mt(1,1),this.center=new Mt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new dt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(jd).x}get height(){return this.source.getSize(jd).y}get depth(){return this.source.getSize(jd).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const i in e){const s=e[i];if(s===void 0){rt(`Texture.setValues(): parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){rt(`Texture.setValues(): property '${i}' does not exist.`);continue}l&&s&&l.isVector2&&s.isVector2||l&&s&&l.isVector3&&s.isVector3||l&&s&&l.isMatrix3&&s.isMatrix3?l.copy(s):this[i]=s}}toJSON(e){const i=e===void 0||typeof e=="string";if(!i&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),i||(e.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ox)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Hh:e.x=e.x-Math.floor(e.x);break;case ya:e.x=e.x<0?0:1;break;case Gh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Hh:e.y=e.y-Math.floor(e.y);break;case ya:e.y=e.y<0?0:1;break;case Gh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}kn.DEFAULT_IMAGE=null;kn.DEFAULT_MAPPING=Ox;kn.DEFAULT_ANISOTROPY=1;class an{constructor(e=0,i=0,s=0,l=1){an.prototype.isVector4=!0,this.x=e,this.y=i,this.z=s,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,i,s,l){return this.x=e,this.y=i,this.z=s,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,i){switch(e){case 0:this.x=i;break;case 1:this.y=i;break;case 2:this.z=i;break;case 3:this.w=i;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,i){return this.x=e.x+i.x,this.y=e.y+i.y,this.z=e.z+i.z,this.w=e.w+i.w,this}addScaledVector(e,i){return this.x+=e.x*i,this.y+=e.y*i,this.z+=e.z*i,this.w+=e.w*i,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,i){return this.x=e.x-i.x,this.y=e.y-i.y,this.z=e.z-i.z,this.w=e.w-i.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const i=this.x,s=this.y,l=this.z,c=this.w,h=e.elements;return this.x=h[0]*i+h[4]*s+h[8]*l+h[12]*c,this.y=h[1]*i+h[5]*s+h[9]*l+h[13]*c,this.z=h[2]*i+h[6]*s+h[10]*l+h[14]*c,this.w=h[3]*i+h[7]*s+h[11]*l+h[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const i=Math.sqrt(1-e.w*e.w);return i<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/i,this.y=e.y/i,this.z=e.z/i),this}setAxisAngleFromRotationMatrix(e){let i,s,l,c;const p=e.elements,m=p[0],g=p[4],v=p[8],S=p[1],y=p[5],E=p[9],R=p[2],M=p[6],_=p[10];if(Math.abs(g-S)<.01&&Math.abs(v-R)<.01&&Math.abs(E-M)<.01){if(Math.abs(g+S)<.1&&Math.abs(v+R)<.1&&Math.abs(E+M)<.1&&Math.abs(m+y+_-3)<.1)return this.set(1,0,0,0),this;i=Math.PI;const O=(m+1)/2,L=(y+1)/2,I=(_+1)/2,z=(g+S)/4,F=(v+R)/4,K=(E+M)/4;return O>L&&O>I?O<.01?(s=0,l=.707106781,c=.707106781):(s=Math.sqrt(O),l=z/s,c=F/s):L>I?L<.01?(s=.707106781,l=0,c=.707106781):(l=Math.sqrt(L),s=z/l,c=K/l):I<.01?(s=.707106781,l=.707106781,c=0):(c=Math.sqrt(I),s=F/c,l=K/c),this.set(s,l,c,i),this}let N=Math.sqrt((M-E)*(M-E)+(v-R)*(v-R)+(S-g)*(S-g));return Math.abs(N)<.001&&(N=1),this.x=(M-E)/N,this.y=(v-R)/N,this.z=(S-g)/N,this.w=Math.acos((m+y+_-1)/2),this}setFromMatrixPosition(e){const i=e.elements;return this.x=i[12],this.y=i[13],this.z=i[14],this.w=i[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,i){return this.x=_t(this.x,e.x,i.x),this.y=_t(this.y,e.y,i.y),this.z=_t(this.z,e.z,i.z),this.w=_t(this.w,e.w,i.w),this}clampScalar(e,i){return this.x=_t(this.x,e,i),this.y=_t(this.y,e,i),this.z=_t(this.z,e,i),this.w=_t(this.w,e,i),this}clampLength(e,i){const s=this.length();return this.divideScalar(s||1).multiplyScalar(_t(s,e,i))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,i){return this.x+=(e.x-this.x)*i,this.y+=(e.y-this.y)*i,this.z+=(e.z-this.z)*i,this.w+=(e.w-this.w)*i,this}lerpVectors(e,i,s){return this.x=e.x+(i.x-e.x)*s,this.y=e.y+(i.y-e.y)*s,this.z=e.z+(i.z-e.z)*s,this.w=e.w+(i.w-e.w)*s,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,i=0){return this.x=e[i],this.y=e[i+1],this.z=e[i+2],this.w=e[i+3],this}toArray(e=[],i=0){return e[i]=this.x,e[i+1]=this.y,e[i+2]=this.z,e[i+3]=this.w,e}fromBufferAttribute(e,i){return this.x=e.getX(i),this.y=e.getY(i),this.z=e.getZ(i),this.w=e.getW(i),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class YE extends eo{constructor(e=1,i=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:In,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=e,this.height=i,this.depth=s.depth,this.scissor=new an(0,0,e,i),this.scissorTest=!1,this.viewport=new an(0,0,e,i);const l={width:e,height:i,depth:s.depth},c=new kn(l);this.textures=[];const h=s.count;for(let d=0;d<h;d++)this.textures[d]=c.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(e={}){const i={minFilter:In,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(i.mapping=e.mapping),e.wrapS!==void 0&&(i.wrapS=e.wrapS),e.wrapT!==void 0&&(i.wrapT=e.wrapT),e.wrapR!==void 0&&(i.wrapR=e.wrapR),e.magFilter!==void 0&&(i.magFilter=e.magFilter),e.minFilter!==void 0&&(i.minFilter=e.minFilter),e.format!==void 0&&(i.format=e.format),e.type!==void 0&&(i.type=e.type),e.anisotropy!==void 0&&(i.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(i.colorSpace=e.colorSpace),e.flipY!==void 0&&(i.flipY=e.flipY),e.generateMipmaps!==void 0&&(i.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(i.internalFormat=e.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(i)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,i,s=1){if(this.width!==e||this.height!==i||this.depth!==s){this.width=e,this.height=i,this.depth=s;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=e,this.textures[l].image.height=i,this.textures[l].image.depth=s,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,e,i),this.scissor.set(0,0,e,i)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,s=e.textures.length;i<s;i++){this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0,this.textures[i].renderTarget=this;const l=Object.assign({},e.textures[i].image);this.textures[i].source=new Qp(l)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class qi extends YE{constructor(e=1,i=1,s={}){super(e,i,s),this.isWebGLRenderTarget=!0}}class Vx extends kn{constructor(e=null,i=1,s=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=Nn,this.minFilter=Nn,this.wrapR=ya,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class ZE extends kn{constructor(e=null,i=1,s=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:i,height:s,depth:l},this.magFilter=Nn,this.minFilter=Nn,this.wrapR=ya,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Gr{constructor(e=new Z(1/0,1/0,1/0),i=new Z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=i}set(e,i){return this.min.copy(e),this.max.copy(i),this}setFromArray(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i+=3)this.expandByPoint(Ri.fromArray(e,i));return this}setFromBufferAttribute(e){this.makeEmpty();for(let i=0,s=e.count;i<s;i++)this.expandByPoint(Ri.fromBufferAttribute(e,i));return this}setFromPoints(e){this.makeEmpty();for(let i=0,s=e.length;i<s;i++)this.expandByPoint(e[i]);return this}setFromCenterAndSize(e,i){const s=Ri.copy(i).multiplyScalar(.5);return this.min.copy(e).sub(s),this.max.copy(e).add(s),this}setFromObject(e,i=!1){return this.makeEmpty(),this.expandByObject(e,i)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,i=!1){e.updateWorldMatrix(!1,!1);const s=e.geometry;if(s!==void 0){const c=s.getAttribute("position");if(i===!0&&c!==void 0&&e.isInstancedMesh!==!0)for(let h=0,d=c.count;h<d;h++)e.isMesh===!0?e.getVertexPosition(h,Ri):Ri.fromBufferAttribute(c,h),Ri.applyMatrix4(e.matrixWorld),this.expandByPoint(Ri);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Hc.copy(e.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),Hc.copy(s.boundingBox)),Hc.applyMatrix4(e.matrixWorld),this.union(Hc)}const l=e.children;for(let c=0,h=l.length;c<h;c++)this.expandByObject(l[c],i);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,i){return i.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ri),Ri.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let i,s;return e.normal.x>0?(i=e.normal.x*this.min.x,s=e.normal.x*this.max.x):(i=e.normal.x*this.max.x,s=e.normal.x*this.min.x),e.normal.y>0?(i+=e.normal.y*this.min.y,s+=e.normal.y*this.max.y):(i+=e.normal.y*this.max.y,s+=e.normal.y*this.min.y),e.normal.z>0?(i+=e.normal.z*this.min.z,s+=e.normal.z*this.max.z):(i+=e.normal.z*this.max.z,s+=e.normal.z*this.min.z),i<=-e.constant&&s>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(el),Gc.subVectors(this.max,el),Rs.subVectors(e.a,el),Cs.subVectors(e.b,el),ws.subVectors(e.c,el),$a.subVectors(Cs,Rs),Ja.subVectors(ws,Cs),Cr.subVectors(Rs,ws);let i=[0,-$a.z,$a.y,0,-Ja.z,Ja.y,0,-Cr.z,Cr.y,$a.z,0,-$a.x,Ja.z,0,-Ja.x,Cr.z,0,-Cr.x,-$a.y,$a.x,0,-Ja.y,Ja.x,0,-Cr.y,Cr.x,0];return!Yd(i,Rs,Cs,ws,Gc)||(i=[1,0,0,0,1,0,0,0,1],!Yd(i,Rs,Cs,ws,Gc))?!1:(Vc.crossVectors($a,Ja),i=[Vc.x,Vc.y,Vc.z],Yd(i,Rs,Cs,ws,Gc))}clampPoint(e,i){return i.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ri).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ri).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(pa[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),pa[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),pa[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),pa[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),pa[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),pa[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),pa[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),pa[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(pa),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const pa=[new Z,new Z,new Z,new Z,new Z,new Z,new Z,new Z],Ri=new Z,Hc=new Gr,Rs=new Z,Cs=new Z,ws=new Z,$a=new Z,Ja=new Z,Cr=new Z,el=new Z,Gc=new Z,Vc=new Z,wr=new Z;function Yd(r,e,i,s,l){for(let c=0,h=r.length-3;c<=h;c+=3){wr.fromArray(r,c);const d=l.x*Math.abs(wr.x)+l.y*Math.abs(wr.y)+l.z*Math.abs(wr.z),p=e.dot(wr),m=i.dot(wr),g=s.dot(wr);if(Math.max(-Math.max(p,m,g),Math.min(p,m,g))>d)return!1}return!0}const KE=new Gr,tl=new Z,Zd=new Z;class El{constructor(e=new Z,i=-1){this.isSphere=!0,this.center=e,this.radius=i}set(e,i){return this.center.copy(e),this.radius=i,this}setFromPoints(e,i){const s=this.center;i!==void 0?s.copy(i):KE.setFromPoints(e).getCenter(s);let l=0;for(let c=0,h=e.length;c<h;c++)l=Math.max(l,s.distanceToSquared(e[c]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const i=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=i*i}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,i){const s=this.center.distanceToSquared(e);return i.copy(e),s>this.radius*this.radius&&(i.sub(this.center).normalize(),i.multiplyScalar(this.radius).add(this.center)),i}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;tl.subVectors(e,this.center);const i=tl.lengthSq();if(i>this.radius*this.radius){const s=Math.sqrt(i),l=(s-this.radius)*.5;this.center.addScaledVector(tl,l/s),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Zd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(tl.copy(e.center).add(Zd)),this.expandByPoint(tl.copy(e.center).sub(Zd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const ma=new Z,Kd=new Z,kc=new Z,er=new Z,Qd=new Z,Xc=new Z,$d=new Z;class kx{constructor(e=new Z,i=new Z(0,0,-1)){this.origin=e,this.direction=i}set(e,i){return this.origin.copy(e),this.direction.copy(i),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,i){return i.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ma)),this}closestPointToPoint(e,i){i.subVectors(e,this.origin);const s=i.dot(this.direction);return s<0?i.copy(this.origin):i.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const i=ma.subVectors(e,this.origin).dot(this.direction);return i<0?this.origin.distanceToSquared(e):(ma.copy(this.origin).addScaledVector(this.direction,i),ma.distanceToSquared(e))}distanceSqToSegment(e,i,s,l){Kd.copy(e).add(i).multiplyScalar(.5),kc.copy(i).sub(e).normalize(),er.copy(this.origin).sub(Kd);const c=e.distanceTo(i)*.5,h=-this.direction.dot(kc),d=er.dot(this.direction),p=-er.dot(kc),m=er.lengthSq(),g=Math.abs(1-h*h);let v,S,y,E;if(g>0)if(v=h*p-d,S=h*d-p,E=c*g,v>=0)if(S>=-E)if(S<=E){const R=1/g;v*=R,S*=R,y=v*(v+h*S+2*d)+S*(h*v+S+2*p)+m}else S=c,v=Math.max(0,-(h*S+d)),y=-v*v+S*(S+2*p)+m;else S=-c,v=Math.max(0,-(h*S+d)),y=-v*v+S*(S+2*p)+m;else S<=-E?(v=Math.max(0,-(-h*c+d)),S=v>0?-c:Math.min(Math.max(-c,-p),c),y=-v*v+S*(S+2*p)+m):S<=E?(v=0,S=Math.min(Math.max(-c,-p),c),y=S*(S+2*p)+m):(v=Math.max(0,-(h*c+d)),S=v>0?c:Math.min(Math.max(-c,-p),c),y=-v*v+S*(S+2*p)+m);else S=h>0?-c:c,v=Math.max(0,-(h*S+d)),y=-v*v+S*(S+2*p)+m;return s&&s.copy(this.origin).addScaledVector(this.direction,v),l&&l.copy(Kd).addScaledVector(kc,S),y}intersectSphere(e,i){ma.subVectors(e.center,this.origin);const s=ma.dot(this.direction),l=ma.dot(ma)-s*s,c=e.radius*e.radius;if(l>c)return null;const h=Math.sqrt(c-l),d=s-h,p=s+h;return p<0?null:d<0?this.at(p,i):this.at(d,i)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const i=e.normal.dot(this.direction);if(i===0)return e.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(e.normal)+e.constant)/i;return s>=0?s:null}intersectPlane(e,i){const s=this.distanceToPlane(e);return s===null?null:this.at(s,i)}intersectsPlane(e){const i=e.distanceToPoint(this.origin);return i===0||e.normal.dot(this.direction)*i<0}intersectBox(e,i){let s,l,c,h,d,p;const m=1/this.direction.x,g=1/this.direction.y,v=1/this.direction.z,S=this.origin;return m>=0?(s=(e.min.x-S.x)*m,l=(e.max.x-S.x)*m):(s=(e.max.x-S.x)*m,l=(e.min.x-S.x)*m),g>=0?(c=(e.min.y-S.y)*g,h=(e.max.y-S.y)*g):(c=(e.max.y-S.y)*g,h=(e.min.y-S.y)*g),s>h||c>l||((c>s||isNaN(s))&&(s=c),(h<l||isNaN(l))&&(l=h),v>=0?(d=(e.min.z-S.z)*v,p=(e.max.z-S.z)*v):(d=(e.max.z-S.z)*v,p=(e.min.z-S.z)*v),s>p||d>l)||((d>s||s!==s)&&(s=d),(p<l||l!==l)&&(l=p),l<0)?null:this.at(s>=0?s:l,i)}intersectsBox(e){return this.intersectBox(e,ma)!==null}intersectTriangle(e,i,s,l,c){Qd.subVectors(i,e),Xc.subVectors(s,e),$d.crossVectors(Qd,Xc);let h=this.direction.dot($d),d;if(h>0){if(l)return null;d=1}else if(h<0)d=-1,h=-h;else return null;er.subVectors(this.origin,e);const p=d*this.direction.dot(Xc.crossVectors(er,Xc));if(p<0)return null;const m=d*this.direction.dot(Qd.cross(er));if(m<0||p+m>h)return null;const g=-d*er.dot($d);return g<0?null:this.at(g/h,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class qt{constructor(e,i,s,l,c,h,d,p,m,g,v,S,y,E,R,M){qt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,i,s,l,c,h,d,p,m,g,v,S,y,E,R,M)}set(e,i,s,l,c,h,d,p,m,g,v,S,y,E,R,M){const _=this.elements;return _[0]=e,_[4]=i,_[8]=s,_[12]=l,_[1]=c,_[5]=h,_[9]=d,_[13]=p,_[2]=m,_[6]=g,_[10]=v,_[14]=S,_[3]=y,_[7]=E,_[11]=R,_[15]=M,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new qt().fromArray(this.elements)}copy(e){const i=this.elements,s=e.elements;return i[0]=s[0],i[1]=s[1],i[2]=s[2],i[3]=s[3],i[4]=s[4],i[5]=s[5],i[6]=s[6],i[7]=s[7],i[8]=s[8],i[9]=s[9],i[10]=s[10],i[11]=s[11],i[12]=s[12],i[13]=s[13],i[14]=s[14],i[15]=s[15],this}copyPosition(e){const i=this.elements,s=e.elements;return i[12]=s[12],i[13]=s[13],i[14]=s[14],this}setFromMatrix3(e){const i=e.elements;return this.set(i[0],i[3],i[6],0,i[1],i[4],i[7],0,i[2],i[5],i[8],0,0,0,0,1),this}extractBasis(e,i,s){return this.determinant()===0?(e.set(1,0,0),i.set(0,1,0),s.set(0,0,1),this):(e.setFromMatrixColumn(this,0),i.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this)}makeBasis(e,i,s){return this.set(e.x,i.x,s.x,0,e.y,i.y,s.y,0,e.z,i.z,s.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const i=this.elements,s=e.elements,l=1/Ds.setFromMatrixColumn(e,0).length(),c=1/Ds.setFromMatrixColumn(e,1).length(),h=1/Ds.setFromMatrixColumn(e,2).length();return i[0]=s[0]*l,i[1]=s[1]*l,i[2]=s[2]*l,i[3]=0,i[4]=s[4]*c,i[5]=s[5]*c,i[6]=s[6]*c,i[7]=0,i[8]=s[8]*h,i[9]=s[9]*h,i[10]=s[10]*h,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromEuler(e){const i=this.elements,s=e.x,l=e.y,c=e.z,h=Math.cos(s),d=Math.sin(s),p=Math.cos(l),m=Math.sin(l),g=Math.cos(c),v=Math.sin(c);if(e.order==="XYZ"){const S=h*g,y=h*v,E=d*g,R=d*v;i[0]=p*g,i[4]=-p*v,i[8]=m,i[1]=y+E*m,i[5]=S-R*m,i[9]=-d*p,i[2]=R-S*m,i[6]=E+y*m,i[10]=h*p}else if(e.order==="YXZ"){const S=p*g,y=p*v,E=m*g,R=m*v;i[0]=S+R*d,i[4]=E*d-y,i[8]=h*m,i[1]=h*v,i[5]=h*g,i[9]=-d,i[2]=y*d-E,i[6]=R+S*d,i[10]=h*p}else if(e.order==="ZXY"){const S=p*g,y=p*v,E=m*g,R=m*v;i[0]=S-R*d,i[4]=-h*v,i[8]=E+y*d,i[1]=y+E*d,i[5]=h*g,i[9]=R-S*d,i[2]=-h*m,i[6]=d,i[10]=h*p}else if(e.order==="ZYX"){const S=h*g,y=h*v,E=d*g,R=d*v;i[0]=p*g,i[4]=E*m-y,i[8]=S*m+R,i[1]=p*v,i[5]=R*m+S,i[9]=y*m-E,i[2]=-m,i[6]=d*p,i[10]=h*p}else if(e.order==="YZX"){const S=h*p,y=h*m,E=d*p,R=d*m;i[0]=p*g,i[4]=R-S*v,i[8]=E*v+y,i[1]=v,i[5]=h*g,i[9]=-d*g,i[2]=-m*g,i[6]=y*v+E,i[10]=S-R*v}else if(e.order==="XZY"){const S=h*p,y=h*m,E=d*p,R=d*m;i[0]=p*g,i[4]=-v,i[8]=m*g,i[1]=S*v+R,i[5]=h*g,i[9]=y*v-E,i[2]=E*v-y,i[6]=d*g,i[10]=R*v+S}return i[3]=0,i[7]=0,i[11]=0,i[12]=0,i[13]=0,i[14]=0,i[15]=1,this}makeRotationFromQuaternion(e){return this.compose(QE,e,$E)}lookAt(e,i,s){const l=this.elements;return ii.subVectors(e,i),ii.lengthSq()===0&&(ii.z=1),ii.normalize(),tr.crossVectors(s,ii),tr.lengthSq()===0&&(Math.abs(s.z)===1?ii.x+=1e-4:ii.z+=1e-4,ii.normalize(),tr.crossVectors(s,ii)),tr.normalize(),Wc.crossVectors(ii,tr),l[0]=tr.x,l[4]=Wc.x,l[8]=ii.x,l[1]=tr.y,l[5]=Wc.y,l[9]=ii.y,l[2]=tr.z,l[6]=Wc.z,l[10]=ii.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,i){const s=e.elements,l=i.elements,c=this.elements,h=s[0],d=s[4],p=s[8],m=s[12],g=s[1],v=s[5],S=s[9],y=s[13],E=s[2],R=s[6],M=s[10],_=s[14],N=s[3],O=s[7],L=s[11],I=s[15],z=l[0],F=l[4],K=l[8],C=l[12],w=l[1],k=l[5],se=l[9],re=l[13],pe=l[2],fe=l[6],P=l[10],H=l[14],ae=l[3],Me=l[7],Se=l[11],U=l[15];return c[0]=h*z+d*w+p*pe+m*ae,c[4]=h*F+d*k+p*fe+m*Me,c[8]=h*K+d*se+p*P+m*Se,c[12]=h*C+d*re+p*H+m*U,c[1]=g*z+v*w+S*pe+y*ae,c[5]=g*F+v*k+S*fe+y*Me,c[9]=g*K+v*se+S*P+y*Se,c[13]=g*C+v*re+S*H+y*U,c[2]=E*z+R*w+M*pe+_*ae,c[6]=E*F+R*k+M*fe+_*Me,c[10]=E*K+R*se+M*P+_*Se,c[14]=E*C+R*re+M*H+_*U,c[3]=N*z+O*w+L*pe+I*ae,c[7]=N*F+O*k+L*fe+I*Me,c[11]=N*K+O*se+L*P+I*Se,c[15]=N*C+O*re+L*H+I*U,this}multiplyScalar(e){const i=this.elements;return i[0]*=e,i[4]*=e,i[8]*=e,i[12]*=e,i[1]*=e,i[5]*=e,i[9]*=e,i[13]*=e,i[2]*=e,i[6]*=e,i[10]*=e,i[14]*=e,i[3]*=e,i[7]*=e,i[11]*=e,i[15]*=e,this}determinant(){const e=this.elements,i=e[0],s=e[4],l=e[8],c=e[12],h=e[1],d=e[5],p=e[9],m=e[13],g=e[2],v=e[6],S=e[10],y=e[14],E=e[3],R=e[7],M=e[11],_=e[15],N=p*y-m*S,O=d*y-m*v,L=d*S-p*v,I=h*y-m*g,z=h*S-p*g,F=h*v-d*g;return i*(R*N-M*O+_*L)-s*(E*N-M*I+_*z)+l*(E*O-R*I+_*F)-c*(E*L-R*z+M*F)}transpose(){const e=this.elements;let i;return i=e[1],e[1]=e[4],e[4]=i,i=e[2],e[2]=e[8],e[8]=i,i=e[6],e[6]=e[9],e[9]=i,i=e[3],e[3]=e[12],e[12]=i,i=e[7],e[7]=e[13],e[13]=i,i=e[11],e[11]=e[14],e[14]=i,this}setPosition(e,i,s){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=i,l[14]=s),this}invert(){const e=this.elements,i=e[0],s=e[1],l=e[2],c=e[3],h=e[4],d=e[5],p=e[6],m=e[7],g=e[8],v=e[9],S=e[10],y=e[11],E=e[12],R=e[13],M=e[14],_=e[15],N=v*M*m-R*S*m+R*p*y-d*M*y-v*p*_+d*S*_,O=E*S*m-g*M*m-E*p*y+h*M*y+g*p*_-h*S*_,L=g*R*m-E*v*m+E*d*y-h*R*y-g*d*_+h*v*_,I=E*v*p-g*R*p-E*d*S+h*R*S+g*d*M-h*v*M,z=i*N+s*O+l*L+c*I;if(z===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const F=1/z;return e[0]=N*F,e[1]=(R*S*c-v*M*c-R*l*y+s*M*y+v*l*_-s*S*_)*F,e[2]=(d*M*c-R*p*c+R*l*m-s*M*m-d*l*_+s*p*_)*F,e[3]=(v*p*c-d*S*c-v*l*m+s*S*m+d*l*y-s*p*y)*F,e[4]=O*F,e[5]=(g*M*c-E*S*c+E*l*y-i*M*y-g*l*_+i*S*_)*F,e[6]=(E*p*c-h*M*c-E*l*m+i*M*m+h*l*_-i*p*_)*F,e[7]=(h*S*c-g*p*c+g*l*m-i*S*m-h*l*y+i*p*y)*F,e[8]=L*F,e[9]=(E*v*c-g*R*c-E*s*y+i*R*y+g*s*_-i*v*_)*F,e[10]=(h*R*c-E*d*c+E*s*m-i*R*m-h*s*_+i*d*_)*F,e[11]=(g*d*c-h*v*c-g*s*m+i*v*m+h*s*y-i*d*y)*F,e[12]=I*F,e[13]=(g*R*l-E*v*l+E*s*S-i*R*S-g*s*M+i*v*M)*F,e[14]=(E*d*l-h*R*l-E*s*p+i*R*p+h*s*M-i*d*M)*F,e[15]=(h*v*l-g*d*l+g*s*p-i*v*p-h*s*S+i*d*S)*F,this}scale(e){const i=this.elements,s=e.x,l=e.y,c=e.z;return i[0]*=s,i[4]*=l,i[8]*=c,i[1]*=s,i[5]*=l,i[9]*=c,i[2]*=s,i[6]*=l,i[10]*=c,i[3]*=s,i[7]*=l,i[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,i=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],s=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(i,s,l))}makeTranslation(e,i,s){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,i,0,0,1,s,0,0,0,1),this}makeRotationX(e){const i=Math.cos(e),s=Math.sin(e);return this.set(1,0,0,0,0,i,-s,0,0,s,i,0,0,0,0,1),this}makeRotationY(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,0,s,0,0,1,0,0,-s,0,i,0,0,0,0,1),this}makeRotationZ(e){const i=Math.cos(e),s=Math.sin(e);return this.set(i,-s,0,0,s,i,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,i){const s=Math.cos(i),l=Math.sin(i),c=1-s,h=e.x,d=e.y,p=e.z,m=c*h,g=c*d;return this.set(m*h+s,m*d-l*p,m*p+l*d,0,m*d+l*p,g*d+s,g*p-l*h,0,m*p-l*d,g*p+l*h,c*p*p+s,0,0,0,0,1),this}makeScale(e,i,s){return this.set(e,0,0,0,0,i,0,0,0,0,s,0,0,0,0,1),this}makeShear(e,i,s,l,c,h){return this.set(1,s,c,0,e,1,h,0,i,l,1,0,0,0,0,1),this}compose(e,i,s){const l=this.elements,c=i._x,h=i._y,d=i._z,p=i._w,m=c+c,g=h+h,v=d+d,S=c*m,y=c*g,E=c*v,R=h*g,M=h*v,_=d*v,N=p*m,O=p*g,L=p*v,I=s.x,z=s.y,F=s.z;return l[0]=(1-(R+_))*I,l[1]=(y+L)*I,l[2]=(E-O)*I,l[3]=0,l[4]=(y-L)*z,l[5]=(1-(S+_))*z,l[6]=(M+N)*z,l[7]=0,l[8]=(E+O)*F,l[9]=(M-N)*F,l[10]=(1-(S+R))*F,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,i,s){const l=this.elements;if(e.x=l[12],e.y=l[13],e.z=l[14],this.determinant()===0)return s.set(1,1,1),i.identity(),this;let c=Ds.set(l[0],l[1],l[2]).length();const h=Ds.set(l[4],l[5],l[6]).length(),d=Ds.set(l[8],l[9],l[10]).length();this.determinant()<0&&(c=-c),Ci.copy(this);const m=1/c,g=1/h,v=1/d;return Ci.elements[0]*=m,Ci.elements[1]*=m,Ci.elements[2]*=m,Ci.elements[4]*=g,Ci.elements[5]*=g,Ci.elements[6]*=g,Ci.elements[8]*=v,Ci.elements[9]*=v,Ci.elements[10]*=v,i.setFromRotationMatrix(Ci),s.x=c,s.y=h,s.z=d,this}makePerspective(e,i,s,l,c,h,d=ki,p=!1){const m=this.elements,g=2*c/(i-e),v=2*c/(s-l),S=(i+e)/(i-e),y=(s+l)/(s-l);let E,R;if(p)E=c/(h-c),R=h*c/(h-c);else if(d===ki)E=-(h+c)/(h-c),R=-2*h*c/(h-c);else if(d===Su)E=-h/(h-c),R=-h*c/(h-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return m[0]=g,m[4]=0,m[8]=S,m[12]=0,m[1]=0,m[5]=v,m[9]=y,m[13]=0,m[2]=0,m[6]=0,m[10]=E,m[14]=R,m[3]=0,m[7]=0,m[11]=-1,m[15]=0,this}makeOrthographic(e,i,s,l,c,h,d=ki,p=!1){const m=this.elements,g=2/(i-e),v=2/(s-l),S=-(i+e)/(i-e),y=-(s+l)/(s-l);let E,R;if(p)E=1/(h-c),R=h/(h-c);else if(d===ki)E=-2/(h-c),R=-(h+c)/(h-c);else if(d===Su)E=-1/(h-c),R=-c/(h-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return m[0]=g,m[4]=0,m[8]=0,m[12]=S,m[1]=0,m[5]=v,m[9]=0,m[13]=y,m[2]=0,m[6]=0,m[10]=E,m[14]=R,m[3]=0,m[7]=0,m[11]=0,m[15]=1,this}equals(e){const i=this.elements,s=e.elements;for(let l=0;l<16;l++)if(i[l]!==s[l])return!1;return!0}fromArray(e,i=0){for(let s=0;s<16;s++)this.elements[s]=e[s+i];return this}toArray(e=[],i=0){const s=this.elements;return e[i]=s[0],e[i+1]=s[1],e[i+2]=s[2],e[i+3]=s[3],e[i+4]=s[4],e[i+5]=s[5],e[i+6]=s[6],e[i+7]=s[7],e[i+8]=s[8],e[i+9]=s[9],e[i+10]=s[10],e[i+11]=s[11],e[i+12]=s[12],e[i+13]=s[13],e[i+14]=s[14],e[i+15]=s[15],e}}const Ds=new Z,Ci=new qt,QE=new Z(0,0,0),$E=new Z(1,1,1),tr=new Z,Wc=new Z,ii=new Z,c_=new qt,u_=new bl;class Oi{constructor(e=0,i=0,s=0,l=Oi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=i,this._z=s,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,i,s,l=this._order){return this._x=e,this._y=i,this._z=s,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,i=this._order,s=!0){const l=e.elements,c=l[0],h=l[4],d=l[8],p=l[1],m=l[5],g=l[9],v=l[2],S=l[6],y=l[10];switch(i){case"XYZ":this._y=Math.asin(_t(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-g,y),this._z=Math.atan2(-h,c)):(this._x=Math.atan2(S,m),this._z=0);break;case"YXZ":this._x=Math.asin(-_t(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(d,y),this._z=Math.atan2(p,m)):(this._y=Math.atan2(-v,c),this._z=0);break;case"ZXY":this._x=Math.asin(_t(S,-1,1)),Math.abs(S)<.9999999?(this._y=Math.atan2(-v,y),this._z=Math.atan2(-h,m)):(this._y=0,this._z=Math.atan2(p,c));break;case"ZYX":this._y=Math.asin(-_t(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(S,y),this._z=Math.atan2(p,c)):(this._x=0,this._z=Math.atan2(-h,m));break;case"YZX":this._z=Math.asin(_t(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-g,m),this._y=Math.atan2(-v,c)):(this._x=0,this._y=Math.atan2(d,y));break;case"XZY":this._z=Math.asin(-_t(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(S,m),this._y=Math.atan2(d,c)):(this._x=Math.atan2(-g,y),this._y=0);break;default:rt("Euler: .setFromRotationMatrix() encountered an unknown order: "+i)}return this._order=i,s===!0&&this._onChangeCallback(),this}setFromQuaternion(e,i,s){return c_.makeRotationFromQuaternion(e),this.setFromRotationMatrix(c_,i,s)}setFromVector3(e,i=this._order){return this.set(e.x,e.y,e.z,i)}reorder(e){return u_.setFromEuler(this),this.setFromQuaternion(u_,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],i=0){return e[i]=this._x,e[i+1]=this._y,e[i+2]=this._z,e[i+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Oi.DEFAULT_ORDER="XYZ";class $p{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let JE=0;const f_=new Z,Us=new bl,ga=new qt,qc=new Z,nl=new Z,e1=new Z,t1=new bl,d_=new Z(1,0,0),h_=new Z(0,1,0),p_=new Z(0,0,1),m_={type:"added"},n1={type:"removed"},Ns={type:"childadded",child:null},Jd={type:"childremoved",child:null};class Bn extends eo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:JE++}),this.uuid=to(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Bn.DEFAULT_UP.clone();const e=new Z,i=new Oi,s=new bl,l=new Z(1,1,1);function c(){s.setFromEuler(i,!1)}function h(){i.setFromQuaternion(s,void 0,!1)}i._onChange(c),s._onChange(h),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:i},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new qt},normalMatrix:{value:new dt}}),this.matrix=new qt,this.matrixWorld=new qt,this.matrixAutoUpdate=Bn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Bn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new $p,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,i){this.quaternion.setFromAxisAngle(e,i)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,i){return Us.setFromAxisAngle(e,i),this.quaternion.multiply(Us),this}rotateOnWorldAxis(e,i){return Us.setFromAxisAngle(e,i),this.quaternion.premultiply(Us),this}rotateX(e){return this.rotateOnAxis(d_,e)}rotateY(e){return this.rotateOnAxis(h_,e)}rotateZ(e){return this.rotateOnAxis(p_,e)}translateOnAxis(e,i){return f_.copy(e).applyQuaternion(this.quaternion),this.position.add(f_.multiplyScalar(i)),this}translateX(e){return this.translateOnAxis(d_,e)}translateY(e){return this.translateOnAxis(h_,e)}translateZ(e){return this.translateOnAxis(p_,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ga.copy(this.matrixWorld).invert())}lookAt(e,i,s){e.isVector3?qc.copy(e):qc.set(e,i,s);const l=this.parent;this.updateWorldMatrix(!0,!1),nl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ga.lookAt(nl,qc,this.up):ga.lookAt(qc,nl,this.up),this.quaternion.setFromRotationMatrix(ga),l&&(ga.extractRotation(l.matrixWorld),Us.setFromRotationMatrix(ga),this.quaternion.premultiply(Us.invert()))}add(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.add(arguments[i]);return this}return e===this?(At("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(m_),Ns.child=e,this.dispatchEvent(Ns),Ns.child=null):At("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const i=this.children.indexOf(e);return i!==-1&&(e.parent=null,this.children.splice(i,1),e.dispatchEvent(n1),Jd.child=e,this.dispatchEvent(Jd),Jd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ga.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ga.multiply(e.parent.matrixWorld)),e.applyMatrix4(ga),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(m_),Ns.child=e,this.dispatchEvent(Ns),Ns.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,i){if(this[e]===i)return this;for(let s=0,l=this.children.length;s<l;s++){const h=this.children[s].getObjectByProperty(e,i);if(h!==void 0)return h}}getObjectsByProperty(e,i,s=[]){this[e]===i&&s.push(this);const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].getObjectsByProperty(e,i,s);return s}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(nl,e,e1),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(nl,t1,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const i=this.matrixWorld.elements;return e.set(i[8],i[9],i[10]).normalize()}raycast(){}traverse(e){e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].traverseVisible(e)}traverseAncestors(e){const i=this.parent;i!==null&&(e(i),i.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const i=this.children;for(let s=0,l=i.length;s<l;s++)i[s].updateMatrixWorld(e)}updateWorldMatrix(e,i){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),i===!0){const l=this.children;for(let c=0,h=l.length;c<h;c++)l[c].updateWorldMatrix(!1,!0)}}toJSON(e){const i=e===void 0||typeof e=="string",s={};i&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,this.name!==""&&(l.name=this.name),this.castShadow===!0&&(l.castShadow=!0),this.receiveShadow===!0&&(l.receiveShadow=!0),this.visible===!1&&(l.visible=!1),this.frustumCulled===!1&&(l.frustumCulled=!1),this.renderOrder!==0&&(l.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(l.matrixAutoUpdate=!1),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(d=>({...d})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(d,p){return d[p.uuid]===void 0&&(d[p.uuid]=p.toJSON(e)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const p=d.shapes;if(Array.isArray(p))for(let m=0,g=p.length;m<g;m++){const v=p[m];c(e.shapes,v)}else c(e.shapes,p)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let p=0,m=this.material.length;p<m;p++)d.push(c(e.materials,this.material[p]));l.material=d}else l.material=c(e.materials,this.material);if(this.children.length>0){l.children=[];for(let d=0;d<this.children.length;d++)l.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let d=0;d<this.animations.length;d++){const p=this.animations[d];l.animations.push(c(e.animations,p))}}if(i){const d=h(e.geometries),p=h(e.materials),m=h(e.textures),g=h(e.images),v=h(e.shapes),S=h(e.skeletons),y=h(e.animations),E=h(e.nodes);d.length>0&&(s.geometries=d),p.length>0&&(s.materials=p),m.length>0&&(s.textures=m),g.length>0&&(s.images=g),v.length>0&&(s.shapes=v),S.length>0&&(s.skeletons=S),y.length>0&&(s.animations=y),E.length>0&&(s.nodes=E)}return s.object=l,s;function h(d){const p=[];for(const m in d){const g=d[m];delete g.metadata,p.push(g)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,i=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),i===!0)for(let s=0;s<e.children.length;s++){const l=e.children[s];this.add(l.clone())}return this}}Bn.DEFAULT_UP=new Z(0,1,0);Bn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Bn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const wi=new Z,va=new Z,eh=new Z,_a=new Z,Ls=new Z,Os=new Z,g_=new Z,th=new Z,nh=new Z,ih=new Z,ah=new an,rh=new an,sh=new an;class Di{constructor(e=new Z,i=new Z,s=new Z){this.a=e,this.b=i,this.c=s}static getNormal(e,i,s,l){l.subVectors(s,i),wi.subVectors(e,i),l.cross(wi);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(e,i,s,l,c){wi.subVectors(l,i),va.subVectors(s,i),eh.subVectors(e,i);const h=wi.dot(wi),d=wi.dot(va),p=wi.dot(eh),m=va.dot(va),g=va.dot(eh),v=h*m-d*d;if(v===0)return c.set(0,0,0),null;const S=1/v,y=(m*p-d*g)*S,E=(h*g-d*p)*S;return c.set(1-y-E,E,y)}static containsPoint(e,i,s,l){return this.getBarycoord(e,i,s,l,_a)===null?!1:_a.x>=0&&_a.y>=0&&_a.x+_a.y<=1}static getInterpolation(e,i,s,l,c,h,d,p){return this.getBarycoord(e,i,s,l,_a)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(c,_a.x),p.addScaledVector(h,_a.y),p.addScaledVector(d,_a.z),p)}static getInterpolatedAttribute(e,i,s,l,c,h){return ah.setScalar(0),rh.setScalar(0),sh.setScalar(0),ah.fromBufferAttribute(e,i),rh.fromBufferAttribute(e,s),sh.fromBufferAttribute(e,l),h.setScalar(0),h.addScaledVector(ah,c.x),h.addScaledVector(rh,c.y),h.addScaledVector(sh,c.z),h}static isFrontFacing(e,i,s,l){return wi.subVectors(s,i),va.subVectors(e,i),wi.cross(va).dot(l)<0}set(e,i,s){return this.a.copy(e),this.b.copy(i),this.c.copy(s),this}setFromPointsAndIndices(e,i,s,l){return this.a.copy(e[i]),this.b.copy(e[s]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,i,s,l){return this.a.fromBufferAttribute(e,i),this.b.fromBufferAttribute(e,s),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return wi.subVectors(this.c,this.b),va.subVectors(this.a,this.b),wi.cross(va).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Di.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,i){return Di.getBarycoord(e,this.a,this.b,this.c,i)}getInterpolation(e,i,s,l,c){return Di.getInterpolation(e,this.a,this.b,this.c,i,s,l,c)}containsPoint(e){return Di.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Di.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,i){const s=this.a,l=this.b,c=this.c;let h,d;Ls.subVectors(l,s),Os.subVectors(c,s),th.subVectors(e,s);const p=Ls.dot(th),m=Os.dot(th);if(p<=0&&m<=0)return i.copy(s);nh.subVectors(e,l);const g=Ls.dot(nh),v=Os.dot(nh);if(g>=0&&v<=g)return i.copy(l);const S=p*v-g*m;if(S<=0&&p>=0&&g<=0)return h=p/(p-g),i.copy(s).addScaledVector(Ls,h);ih.subVectors(e,c);const y=Ls.dot(ih),E=Os.dot(ih);if(E>=0&&y<=E)return i.copy(c);const R=y*m-p*E;if(R<=0&&m>=0&&E<=0)return d=m/(m-E),i.copy(s).addScaledVector(Os,d);const M=g*E-y*v;if(M<=0&&v-g>=0&&y-E>=0)return g_.subVectors(c,l),d=(v-g)/(v-g+(y-E)),i.copy(l).addScaledVector(g_,d);const _=1/(M+R+S);return h=R*_,d=S*_,i.copy(s).addScaledVector(Ls,h).addScaledVector(Os,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Xx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},nr={h:0,s:0,l:0},jc={h:0,s:0,l:0};function oh(r,e,i){return i<0&&(i+=1),i>1&&(i-=1),i<1/6?r+(e-r)*6*i:i<1/2?e:i<2/3?r+(e-r)*6*(2/3-i):r}class ht{constructor(e,i,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,i,s)}set(e,i,s){if(i===void 0&&s===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,i,s);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,i=ri){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Rt.colorSpaceToWorking(this,i),this}setRGB(e,i,s,l=Rt.workingColorSpace){return this.r=e,this.g=i,this.b=s,Rt.colorSpaceToWorking(this,l),this}setHSL(e,i,s,l=Rt.workingColorSpace){if(e=Kp(e,1),i=_t(i,0,1),s=_t(s,0,1),i===0)this.r=this.g=this.b=s;else{const c=s<=.5?s*(1+i):s+i-s*i,h=2*s-c;this.r=oh(h,c,e+1/3),this.g=oh(h,c,e),this.b=oh(h,c,e-1/3)}return Rt.colorSpaceToWorking(this,l),this}setStyle(e,i=ri){function s(c){c!==void 0&&parseFloat(c)<1&&rt("Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const h=l[1],d=l[2];switch(h){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,i);if(c=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setRGB(Math.min(100,parseInt(c[1],10))/100,Math.min(100,parseInt(c[2],10))/100,Math.min(100,parseInt(c[3],10))/100,i);break;case"hsl":case"hsla":if(c=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return s(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,i);break;default:rt("Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=l[1],h=c.length;if(h===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,i);if(h===6)return this.setHex(parseInt(c,16),i);rt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,i);return this}setColorName(e,i=ri){const s=Xx[e.toLowerCase()];return s!==void 0?this.setHex(s,i):rt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ba(e.r),this.g=ba(e.g),this.b=ba(e.b),this}copyLinearToSRGB(e){return this.r=js(e.r),this.g=js(e.g),this.b=js(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ri){return Rt.workingToColorSpace(Fn.copy(this),e),Math.round(_t(Fn.r*255,0,255))*65536+Math.round(_t(Fn.g*255,0,255))*256+Math.round(_t(Fn.b*255,0,255))}getHexString(e=ri){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,i=Rt.workingColorSpace){Rt.workingToColorSpace(Fn.copy(this),i);const s=Fn.r,l=Fn.g,c=Fn.b,h=Math.max(s,l,c),d=Math.min(s,l,c);let p,m;const g=(d+h)/2;if(d===h)p=0,m=0;else{const v=h-d;switch(m=g<=.5?v/(h+d):v/(2-h-d),h){case s:p=(l-c)/v+(l<c?6:0);break;case l:p=(c-s)/v+2;break;case c:p=(s-l)/v+4;break}p/=6}return e.h=p,e.s=m,e.l=g,e}getRGB(e,i=Rt.workingColorSpace){return Rt.workingToColorSpace(Fn.copy(this),i),e.r=Fn.r,e.g=Fn.g,e.b=Fn.b,e}getStyle(e=ri){Rt.workingToColorSpace(Fn.copy(this),e);const i=Fn.r,s=Fn.g,l=Fn.b;return e!==ri?`color(${e} ${i.toFixed(3)} ${s.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(i*255)},${Math.round(s*255)},${Math.round(l*255)})`}offsetHSL(e,i,s){return this.getHSL(nr),this.setHSL(nr.h+e,nr.s+i,nr.l+s)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,i){return this.r=e.r+i.r,this.g=e.g+i.g,this.b=e.b+i.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,i){return this.r+=(e.r-this.r)*i,this.g+=(e.g-this.g)*i,this.b+=(e.b-this.b)*i,this}lerpColors(e,i,s){return this.r=e.r+(i.r-e.r)*s,this.g=e.g+(i.g-e.g)*s,this.b=e.b+(i.b-e.b)*s,this}lerpHSL(e,i){this.getHSL(nr),e.getHSL(jc);const s=hl(nr.h,jc.h,i),l=hl(nr.s,jc.s,i),c=hl(nr.l,jc.l,i);return this.setHSL(s,l,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const i=this.r,s=this.g,l=this.b,c=e.elements;return this.r=c[0]*i+c[3]*s+c[6]*l,this.g=c[1]*i+c[4]*s+c[7]*l,this.b=c[2]*i+c[5]*s+c[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,i=0){return this.r=e[i],this.g=e[i+1],this.b=e[i+2],this}toArray(e=[],i=0){return e[i]=this.r,e[i+1]=this.g,e[i+2]=this.b,e}fromBufferAttribute(e,i){return this.r=e.getX(i),this.g=e.getY(i),this.b=e.getZ(i),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Fn=new ht;ht.NAMES=Xx;let i1=0;class no extends eo{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:i1++}),this.uuid=to(),this.name="",this.type="Material",this.blending=qs,this.side=lr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=wh,this.blendDst=Dh,this.blendEquation=Or,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ht(0,0,0),this.blendAlpha=0,this.depthFunc=Ys,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=e_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ts,this.stencilZFail=Ts,this.stencilZPass=Ts,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const i in e){const s=e[i];if(s===void 0){rt(`Material: parameter '${i}' has value of undefined.`);continue}const l=this[i];if(l===void 0){rt(`Material: '${i}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(s):l&&l.isVector3&&s&&s.isVector3?l.copy(s):this[i]=s}}toJSON(e){const i=e===void 0||typeof e=="string";i&&(e={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(s.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(s.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(e).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(e).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(e).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(e).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(e).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==qs&&(s.blending=this.blending),this.side!==lr&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==wh&&(s.blendSrc=this.blendSrc),this.blendDst!==Dh&&(s.blendDst=this.blendDst),this.blendEquation!==Or&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==Ys&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==e_&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ts&&(s.stencilFail=this.stencilFail),this.stencilZFail!==Ts&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==Ts&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.allowOverride===!1&&(s.allowOverride=!1),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function l(c){const h=[];for(const d in c){const p=c[d];delete p.metadata,h.push(p)}return h}if(i){const c=l(e.textures),h=l(e.images);c.length>0&&(s.textures=c),h.length>0&&(s.images=h)}return s}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const i=e.clippingPlanes;let s=null;if(i!==null){const l=i.length;s=new Array(l);for(let c=0;c!==l;++c)s[c]=i[c].clone()}return this.clippingPlanes=s,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Wx extends no{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ht(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Oi,this.combine=Bp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const pn=new Z,Yc=new Mt;let a1=0;class Li{constructor(e,i,s=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:a1++}),this.name="",this.array=e,this.itemSize=i,this.count=e!==void 0?e.length/i:0,this.normalized=s,this.usage=t_,this.updateRanges=[],this.gpuType=Ui,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,i){this.updateRanges.push({start:e,count:i})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,i,s){e*=this.itemSize,s*=i.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[e+l]=i.array[s+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let i=0,s=this.count;i<s;i++)Yc.fromBufferAttribute(this,i),Yc.applyMatrix3(e),this.setXY(i,Yc.x,Yc.y);else if(this.itemSize===3)for(let i=0,s=this.count;i<s;i++)pn.fromBufferAttribute(this,i),pn.applyMatrix3(e),this.setXYZ(i,pn.x,pn.y,pn.z);return this}applyMatrix4(e){for(let i=0,s=this.count;i<s;i++)pn.fromBufferAttribute(this,i),pn.applyMatrix4(e),this.setXYZ(i,pn.x,pn.y,pn.z);return this}applyNormalMatrix(e){for(let i=0,s=this.count;i<s;i++)pn.fromBufferAttribute(this,i),pn.applyNormalMatrix(e),this.setXYZ(i,pn.x,pn.y,pn.z);return this}transformDirection(e){for(let i=0,s=this.count;i<s;i++)pn.fromBufferAttribute(this,i),pn.transformDirection(e),this.setXYZ(i,pn.x,pn.y,pn.z);return this}set(e,i=0){return this.array.set(e,i),this}getComponent(e,i){let s=this.array[e*this.itemSize+i];return this.normalized&&(s=Xs(s,this.array)),s}setComponent(e,i,s){return this.normalized&&(s=Hn(s,this.array)),this.array[e*this.itemSize+i]=s,this}getX(e){let i=this.array[e*this.itemSize];return this.normalized&&(i=Xs(i,this.array)),i}setX(e,i){return this.normalized&&(i=Hn(i,this.array)),this.array[e*this.itemSize]=i,this}getY(e){let i=this.array[e*this.itemSize+1];return this.normalized&&(i=Xs(i,this.array)),i}setY(e,i){return this.normalized&&(i=Hn(i,this.array)),this.array[e*this.itemSize+1]=i,this}getZ(e){let i=this.array[e*this.itemSize+2];return this.normalized&&(i=Xs(i,this.array)),i}setZ(e,i){return this.normalized&&(i=Hn(i,this.array)),this.array[e*this.itemSize+2]=i,this}getW(e){let i=this.array[e*this.itemSize+3];return this.normalized&&(i=Xs(i,this.array)),i}setW(e,i){return this.normalized&&(i=Hn(i,this.array)),this.array[e*this.itemSize+3]=i,this}setXY(e,i,s){return e*=this.itemSize,this.normalized&&(i=Hn(i,this.array),s=Hn(s,this.array)),this.array[e+0]=i,this.array[e+1]=s,this}setXYZ(e,i,s,l){return e*=this.itemSize,this.normalized&&(i=Hn(i,this.array),s=Hn(s,this.array),l=Hn(l,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this}setXYZW(e,i,s,l,c){return e*=this.itemSize,this.normalized&&(i=Hn(i,this.array),s=Hn(s,this.array),l=Hn(l,this.array),c=Hn(c,this.array)),this.array[e+0]=i,this.array[e+1]=s,this.array[e+2]=l,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==t_&&(e.usage=this.usage),e}}class qx extends Li{constructor(e,i,s){super(new Uint16Array(e),i,s)}}class jx extends Li{constructor(e,i,s){super(new Uint32Array(e),i,s)}}class Si extends Li{constructor(e,i,s){super(new Float32Array(e),i,s)}}let r1=0;const xi=new qt,lh=new Bn,Ps=new Z,ai=new Gr,il=new Gr,Sn=new Z;class Zi extends eo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:r1++}),this.uuid=to(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Gx(e)?jx:qx)(e,1):this.index=e,this}setIndirect(e,i=0){return this.indirect=e,this.indirectOffset=i,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,i){return this.attributes[e]=i,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,i,s=0){this.groups.push({start:e,count:i,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(e,i){this.drawRange.start=e,this.drawRange.count=i}applyMatrix4(e){const i=this.attributes.position;i!==void 0&&(i.applyMatrix4(e),i.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const c=new dt().getNormalMatrix(e);s.applyNormalMatrix(c),s.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return xi.makeRotationFromQuaternion(e),this.applyMatrix4(xi),this}rotateX(e){return xi.makeRotationX(e),this.applyMatrix4(xi),this}rotateY(e){return xi.makeRotationY(e),this.applyMatrix4(xi),this}rotateZ(e){return xi.makeRotationZ(e),this.applyMatrix4(xi),this}translate(e,i,s){return xi.makeTranslation(e,i,s),this.applyMatrix4(xi),this}scale(e,i,s){return xi.makeScale(e,i,s),this.applyMatrix4(xi),this}lookAt(e){return lh.lookAt(e),lh.updateMatrix(),this.applyMatrix4(lh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ps).negate(),this.translate(Ps.x,Ps.y,Ps.z),this}setFromPoints(e){const i=this.getAttribute("position");if(i===void 0){const s=[];for(let l=0,c=e.length;l<c;l++){const h=e[l];s.push(h.x,h.y,h.z||0)}this.setAttribute("position",new Si(s,3))}else{const s=Math.min(e.length,i.count);for(let l=0;l<s;l++){const c=e[l];i.setXYZ(l,c.x,c.y,c.z||0)}e.length>i.count&&rt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),i.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Gr);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){At("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Z(-1/0,-1/0,-1/0),new Z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),i)for(let s=0,l=i.length;s<l;s++){const c=i[s];ai.setFromBufferAttribute(c),this.morphTargetsRelative?(Sn.addVectors(this.boundingBox.min,ai.min),this.boundingBox.expandByPoint(Sn),Sn.addVectors(this.boundingBox.max,ai.max),this.boundingBox.expandByPoint(Sn)):(this.boundingBox.expandByPoint(ai.min),this.boundingBox.expandByPoint(ai.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&At('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new El);const e=this.attributes.position,i=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){At("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Z,1/0);return}if(e){const s=this.boundingSphere.center;if(ai.setFromBufferAttribute(e),i)for(let c=0,h=i.length;c<h;c++){const d=i[c];il.setFromBufferAttribute(d),this.morphTargetsRelative?(Sn.addVectors(ai.min,il.min),ai.expandByPoint(Sn),Sn.addVectors(ai.max,il.max),ai.expandByPoint(Sn)):(ai.expandByPoint(il.min),ai.expandByPoint(il.max))}ai.getCenter(s);let l=0;for(let c=0,h=e.count;c<h;c++)Sn.fromBufferAttribute(e,c),l=Math.max(l,s.distanceToSquared(Sn));if(i)for(let c=0,h=i.length;c<h;c++){const d=i[c],p=this.morphTargetsRelative;for(let m=0,g=d.count;m<g;m++)Sn.fromBufferAttribute(d,m),p&&(Ps.fromBufferAttribute(e,m),Sn.add(Ps)),l=Math.max(l,s.distanceToSquared(Sn))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&At('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,i=this.attributes;if(e===null||i.position===void 0||i.normal===void 0||i.uv===void 0){At("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=i.position,l=i.normal,c=i.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Li(new Float32Array(4*s.count),4));const h=this.getAttribute("tangent"),d=[],p=[];for(let K=0;K<s.count;K++)d[K]=new Z,p[K]=new Z;const m=new Z,g=new Z,v=new Z,S=new Mt,y=new Mt,E=new Mt,R=new Z,M=new Z;function _(K,C,w){m.fromBufferAttribute(s,K),g.fromBufferAttribute(s,C),v.fromBufferAttribute(s,w),S.fromBufferAttribute(c,K),y.fromBufferAttribute(c,C),E.fromBufferAttribute(c,w),g.sub(m),v.sub(m),y.sub(S),E.sub(S);const k=1/(y.x*E.y-E.x*y.y);isFinite(k)&&(R.copy(g).multiplyScalar(E.y).addScaledVector(v,-y.y).multiplyScalar(k),M.copy(v).multiplyScalar(y.x).addScaledVector(g,-E.x).multiplyScalar(k),d[K].add(R),d[C].add(R),d[w].add(R),p[K].add(M),p[C].add(M),p[w].add(M))}let N=this.groups;N.length===0&&(N=[{start:0,count:e.count}]);for(let K=0,C=N.length;K<C;++K){const w=N[K],k=w.start,se=w.count;for(let re=k,pe=k+se;re<pe;re+=3)_(e.getX(re+0),e.getX(re+1),e.getX(re+2))}const O=new Z,L=new Z,I=new Z,z=new Z;function F(K){I.fromBufferAttribute(l,K),z.copy(I);const C=d[K];O.copy(C),O.sub(I.multiplyScalar(I.dot(C))).normalize(),L.crossVectors(z,C);const k=L.dot(p[K])<0?-1:1;h.setXYZW(K,O.x,O.y,O.z,k)}for(let K=0,C=N.length;K<C;++K){const w=N[K],k=w.start,se=w.count;for(let re=k,pe=k+se;re<pe;re+=3)F(e.getX(re+0)),F(e.getX(re+1)),F(e.getX(re+2))}}computeVertexNormals(){const e=this.index,i=this.getAttribute("position");if(i!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new Li(new Float32Array(i.count*3),3),this.setAttribute("normal",s);else for(let S=0,y=s.count;S<y;S++)s.setXYZ(S,0,0,0);const l=new Z,c=new Z,h=new Z,d=new Z,p=new Z,m=new Z,g=new Z,v=new Z;if(e)for(let S=0,y=e.count;S<y;S+=3){const E=e.getX(S+0),R=e.getX(S+1),M=e.getX(S+2);l.fromBufferAttribute(i,E),c.fromBufferAttribute(i,R),h.fromBufferAttribute(i,M),g.subVectors(h,c),v.subVectors(l,c),g.cross(v),d.fromBufferAttribute(s,E),p.fromBufferAttribute(s,R),m.fromBufferAttribute(s,M),d.add(g),p.add(g),m.add(g),s.setXYZ(E,d.x,d.y,d.z),s.setXYZ(R,p.x,p.y,p.z),s.setXYZ(M,m.x,m.y,m.z)}else for(let S=0,y=i.count;S<y;S+=3)l.fromBufferAttribute(i,S+0),c.fromBufferAttribute(i,S+1),h.fromBufferAttribute(i,S+2),g.subVectors(h,c),v.subVectors(l,c),g.cross(v),s.setXYZ(S+0,g.x,g.y,g.z),s.setXYZ(S+1,g.x,g.y,g.z),s.setXYZ(S+2,g.x,g.y,g.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let i=0,s=e.count;i<s;i++)Sn.fromBufferAttribute(e,i),Sn.normalize(),e.setXYZ(i,Sn.x,Sn.y,Sn.z)}toNonIndexed(){function e(d,p){const m=d.array,g=d.itemSize,v=d.normalized,S=new m.constructor(p.length*g);let y=0,E=0;for(let R=0,M=p.length;R<M;R++){d.isInterleavedBufferAttribute?y=p[R]*d.data.stride+d.offset:y=p[R]*g;for(let _=0;_<g;_++)S[E++]=m[y++]}return new Li(S,g,v)}if(this.index===null)return rt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const i=new Zi,s=this.index.array,l=this.attributes;for(const d in l){const p=l[d],m=e(p,s);i.setAttribute(d,m)}const c=this.morphAttributes;for(const d in c){const p=[],m=c[d];for(let g=0,v=m.length;g<v;g++){const S=m[g],y=e(S,s);p.push(y)}i.morphAttributes[d]=p}i.morphTargetsRelative=this.morphTargetsRelative;const h=this.groups;for(let d=0,p=h.length;d<p;d++){const m=h[d];i.addGroup(m.start,m.count,m.materialIndex)}return i}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const p=this.parameters;for(const m in p)p[m]!==void 0&&(e[m]=p[m]);return e}e.data={attributes:{}};const i=this.index;i!==null&&(e.data.index={type:i.array.constructor.name,array:Array.prototype.slice.call(i.array)});const s=this.attributes;for(const p in s){const m=s[p];e.data.attributes[p]=m.toJSON(e.data)}const l={};let c=!1;for(const p in this.morphAttributes){const m=this.morphAttributes[p],g=[];for(let v=0,S=m.length;v<S;v++){const y=m[v];g.push(y.toJSON(e.data))}g.length>0&&(l[p]=g,c=!0)}c&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const h=this.groups;h.length>0&&(e.data.groups=JSON.parse(JSON.stringify(h)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere=d.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const i={};this.name=e.name;const s=e.index;s!==null&&this.setIndex(s.clone());const l=e.attributes;for(const m in l){const g=l[m];this.setAttribute(m,g.clone(i))}const c=e.morphAttributes;for(const m in c){const g=[],v=c[m];for(let S=0,y=v.length;S<y;S++)g.push(v[S].clone(i));this.morphAttributes[m]=g}this.morphTargetsRelative=e.morphTargetsRelative;const h=e.groups;for(let m=0,g=h.length;m<g;m++){const v=h[m];this.addGroup(v.start,v.count,v.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const v_=new qt,Dr=new kx,Zc=new El,__=new Z,Kc=new Z,Qc=new Z,$c=new Z,ch=new Z,Jc=new Z,x_=new Z,eu=new Z;class yn extends Bn{constructor(e=new Zi,i=new Wx){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=i,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,i){return super.copy(e,i),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const i=this.geometry.morphAttributes,s=Object.keys(i);if(s.length>0){const l=i[s[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,h=l.length;c<h;c++){const d=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=c}}}}getVertexPosition(e,i){const s=this.geometry,l=s.attributes.position,c=s.morphAttributes.position,h=s.morphTargetsRelative;i.fromBufferAttribute(l,e);const d=this.morphTargetInfluences;if(c&&d){Jc.set(0,0,0);for(let p=0,m=c.length;p<m;p++){const g=d[p],v=c[p];g!==0&&(ch.fromBufferAttribute(v,e),h?Jc.addScaledVector(ch,g):Jc.addScaledVector(ch.sub(i),g))}i.add(Jc)}return i}raycast(e,i){const s=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),Zc.copy(s.boundingSphere),Zc.applyMatrix4(c),Dr.copy(e.ray).recast(e.near),!(Zc.containsPoint(Dr.origin)===!1&&(Dr.intersectSphere(Zc,__)===null||Dr.origin.distanceToSquared(__)>(e.far-e.near)**2))&&(v_.copy(c).invert(),Dr.copy(e.ray).applyMatrix4(v_),!(s.boundingBox!==null&&Dr.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(e,i,Dr)))}_computeIntersections(e,i,s){let l;const c=this.geometry,h=this.material,d=c.index,p=c.attributes.position,m=c.attributes.uv,g=c.attributes.uv1,v=c.attributes.normal,S=c.groups,y=c.drawRange;if(d!==null)if(Array.isArray(h))for(let E=0,R=S.length;E<R;E++){const M=S[E],_=h[M.materialIndex],N=Math.max(M.start,y.start),O=Math.min(d.count,Math.min(M.start+M.count,y.start+y.count));for(let L=N,I=O;L<I;L+=3){const z=d.getX(L),F=d.getX(L+1),K=d.getX(L+2);l=tu(this,_,e,s,m,g,v,z,F,K),l&&(l.faceIndex=Math.floor(L/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const E=Math.max(0,y.start),R=Math.min(d.count,y.start+y.count);for(let M=E,_=R;M<_;M+=3){const N=d.getX(M),O=d.getX(M+1),L=d.getX(M+2);l=tu(this,h,e,s,m,g,v,N,O,L),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}else if(p!==void 0)if(Array.isArray(h))for(let E=0,R=S.length;E<R;E++){const M=S[E],_=h[M.materialIndex],N=Math.max(M.start,y.start),O=Math.min(p.count,Math.min(M.start+M.count,y.start+y.count));for(let L=N,I=O;L<I;L+=3){const z=L,F=L+1,K=L+2;l=tu(this,_,e,s,m,g,v,z,F,K),l&&(l.faceIndex=Math.floor(L/3),l.face.materialIndex=M.materialIndex,i.push(l))}}else{const E=Math.max(0,y.start),R=Math.min(p.count,y.start+y.count);for(let M=E,_=R;M<_;M+=3){const N=M,O=M+1,L=M+2;l=tu(this,h,e,s,m,g,v,N,O,L),l&&(l.faceIndex=Math.floor(M/3),i.push(l))}}}}function s1(r,e,i,s,l,c,h,d){let p;if(e.side===Vn?p=s.intersectTriangle(h,c,l,!0,d):p=s.intersectTriangle(l,c,h,e.side===lr,d),p===null)return null;eu.copy(d),eu.applyMatrix4(r.matrixWorld);const m=i.ray.origin.distanceTo(eu);return m<i.near||m>i.far?null:{distance:m,point:eu.clone(),object:r}}function tu(r,e,i,s,l,c,h,d,p,m){r.getVertexPosition(d,Kc),r.getVertexPosition(p,Qc),r.getVertexPosition(m,$c);const g=s1(r,e,i,s,Kc,Qc,$c,x_);if(g){const v=new Z;Di.getBarycoord(x_,Kc,Qc,$c,v),l&&(g.uv=Di.getInterpolatedAttribute(l,d,p,m,v,new Mt)),c&&(g.uv1=Di.getInterpolatedAttribute(c,d,p,m,v,new Mt)),h&&(g.normal=Di.getInterpolatedAttribute(h,d,p,m,v,new Z),g.normal.dot(s.direction)>0&&g.normal.multiplyScalar(-1));const S={a:d,b:p,c:m,normal:new Z,materialIndex:0};Di.getNormal(Kc,Qc,$c,S.normal),g.face=S,g.barycoord=v}return g}class io extends Zi{constructor(e=1,i=1,s=1,l=1,c=1,h=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:i,depth:s,widthSegments:l,heightSegments:c,depthSegments:h};const d=this;l=Math.floor(l),c=Math.floor(c),h=Math.floor(h);const p=[],m=[],g=[],v=[];let S=0,y=0;E("z","y","x",-1,-1,s,i,e,h,c,0),E("z","y","x",1,-1,s,i,-e,h,c,1),E("x","z","y",1,1,e,s,i,l,h,2),E("x","z","y",1,-1,e,s,-i,l,h,3),E("x","y","z",1,-1,e,i,s,l,c,4),E("x","y","z",-1,-1,e,i,-s,l,c,5),this.setIndex(p),this.setAttribute("position",new Si(m,3)),this.setAttribute("normal",new Si(g,3)),this.setAttribute("uv",new Si(v,2));function E(R,M,_,N,O,L,I,z,F,K,C){const w=L/F,k=I/K,se=L/2,re=I/2,pe=z/2,fe=F+1,P=K+1;let H=0,ae=0;const Me=new Z;for(let Se=0;Se<P;Se++){const U=Se*k-re;for(let ie=0;ie<fe;ie++){const ve=ie*w-se;Me[R]=ve*N,Me[M]=U*O,Me[_]=pe,m.push(Me.x,Me.y,Me.z),Me[R]=0,Me[M]=0,Me[_]=z>0?1:-1,g.push(Me.x,Me.y,Me.z),v.push(ie/F),v.push(1-Se/K),H+=1}}for(let Se=0;Se<K;Se++)for(let U=0;U<F;U++){const ie=S+U+fe*Se,ve=S+U+fe*(Se+1),Re=S+(U+1)+fe*(Se+1),He=S+(U+1)+fe*Se;p.push(ie,ve,He),p.push(ve,Re,He),ae+=6}d.addGroup(y,ae,C),y+=ae,S+=H}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new io(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function $s(r){const e={};for(const i in r){e[i]={};for(const s in r[i]){const l=r[i][s];l&&(l.isColor||l.isMatrix3||l.isMatrix4||l.isVector2||l.isVector3||l.isVector4||l.isTexture||l.isQuaternion)?l.isRenderTargetTexture?(rt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[i][s]=null):e[i][s]=l.clone():Array.isArray(l)?e[i][s]=l.slice():e[i][s]=l}}return e}function Gn(r){const e={};for(let i=0;i<r.length;i++){const s=$s(r[i]);for(const l in s)e[l]=s[l]}return e}function o1(r){const e=[];for(let i=0;i<r.length;i++)e.push(r[i].clone());return e}function Yx(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Rt.workingColorSpace}const l1={clone:$s,merge:Gn};var c1=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,u1=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Yi extends no{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=c1,this.fragmentShader=u1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=$s(e.uniforms),this.uniformsGroups=o1(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const i=super.toJSON(e);i.glslVersion=this.glslVersion,i.uniforms={};for(const l in this.uniforms){const h=this.uniforms[l].value;h&&h.isTexture?i.uniforms[l]={type:"t",value:h.toJSON(e).uuid}:h&&h.isColor?i.uniforms[l]={type:"c",value:h.getHex()}:h&&h.isVector2?i.uniforms[l]={type:"v2",value:h.toArray()}:h&&h.isVector3?i.uniforms[l]={type:"v3",value:h.toArray()}:h&&h.isVector4?i.uniforms[l]={type:"v4",value:h.toArray()}:h&&h.isMatrix3?i.uniforms[l]={type:"m3",value:h.toArray()}:h&&h.isMatrix4?i.uniforms[l]={type:"m4",value:h.toArray()}:i.uniforms[l]={value:h}}Object.keys(this.defines).length>0&&(i.defines=this.defines),i.vertexShader=this.vertexShader,i.fragmentShader=this.fragmentShader,i.lights=this.lights,i.clipping=this.clipping;const s={};for(const l in this.extensions)this.extensions[l]===!0&&(s[l]=!0);return Object.keys(s).length>0&&(i.extensions=s),i}}class Zx extends Bn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new qt,this.projectionMatrix=new qt,this.projectionMatrixInverse=new qt,this.coordinateSystem=ki,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,i){return super.copy(e,i),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,i){super.updateWorldMatrix(e,i),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ir=new Z,S_=new Mt,y_=new Mt;class si extends Zx{constructor(e=50,i=1,s=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=s,this.far=l,this.focus=10,this.aspect=i,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const i=.5*this.getFilmHeight()/e;this.fov=xl*2*Math.atan(i),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(dl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return xl*2*Math.atan(Math.tan(dl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,i,s){ir.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ir.x,ir.y).multiplyScalar(-e/ir.z),ir.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(ir.x,ir.y).multiplyScalar(-e/ir.z)}getViewSize(e,i){return this.getViewBounds(e,S_,y_),i.subVectors(y_,S_)}setViewOffset(e,i,s,l,c,h){this.aspect=e/i,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let i=e*Math.tan(dl*.5*this.fov)/this.zoom,s=2*i,l=this.aspect*s,c=-.5*l;const h=this.view;if(this.view!==null&&this.view.enabled){const p=h.fullWidth,m=h.fullHeight;c+=h.offsetX*l/p,i-=h.offsetY*s/m,l*=h.width/p,s*=h.height/m}const d=this.filmOffset;d!==0&&(c+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,i,i-s,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.fov=this.fov,i.object.zoom=this.zoom,i.object.near=this.near,i.object.far=this.far,i.object.focus=this.focus,i.object.aspect=this.aspect,this.view!==null&&(i.object.view=Object.assign({},this.view)),i.object.filmGauge=this.filmGauge,i.object.filmOffset=this.filmOffset,i}}const Fs=-90,Is=1;class f1 extends Bn{constructor(e,i,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new si(Fs,Is,e,i);l.layers=this.layers,this.add(l);const c=new si(Fs,Is,e,i);c.layers=this.layers,this.add(c);const h=new si(Fs,Is,e,i);h.layers=this.layers,this.add(h);const d=new si(Fs,Is,e,i);d.layers=this.layers,this.add(d);const p=new si(Fs,Is,e,i);p.layers=this.layers,this.add(p);const m=new si(Fs,Is,e,i);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const e=this.coordinateSystem,i=this.children.concat(),[s,l,c,h,d,p]=i;for(const m of i)this.remove(m);if(e===ki)s.up.set(0,1,0),s.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),h.up.set(0,0,1),h.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(e===Su)s.up.set(0,-1,0),s.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),h.up.set(0,0,-1),h.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const m of i)this.add(m),m.updateMatrixWorld()}update(e,i){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,h,d,p,m,g]=this.children,v=e.getRenderTarget(),S=e.getActiveCubeFace(),y=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const R=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,e.setRenderTarget(s,0,l),e.render(i,c),e.setRenderTarget(s,1,l),e.render(i,h),e.setRenderTarget(s,2,l),e.render(i,d),e.setRenderTarget(s,3,l),e.render(i,p),e.setRenderTarget(s,4,l),e.render(i,m),s.texture.generateMipmaps=R,e.setRenderTarget(s,5,l),e.render(i,g),e.setRenderTarget(v,S,y),e.xr.enabled=E,s.texture.needsPMREMUpdate=!0}}class Kx extends kn{constructor(e=[],i=Hr,s,l,c,h,d,p,m,g){super(e,i,s,l,c,h,d,p,m,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Qx extends qi{constructor(e=1,i={}){super(e,e,i),this.isWebGLCubeRenderTarget=!0;const s={width:e,height:e,depth:1},l=[s,s,s,s,s,s];this.texture=new Kx(l),this._setTextureOptions(i),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,i){this.texture.type=i.type,this.texture.colorSpace=i.colorSpace,this.texture.generateMipmaps=i.generateMipmaps,this.texture.minFilter=i.minFilter,this.texture.magFilter=i.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new io(5,5,5),c=new Yi({name:"CubemapFromEquirect",uniforms:$s(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:Vn,blending:Ma});c.uniforms.tEquirect.value=i;const h=new yn(l,c),d=i.minFilter;return i.minFilter===Ir&&(i.minFilter=In),new f1(1,10,this).update(e,h),i.minFilter=d,h.geometry.dispose(),h.material.dispose(),this}clear(e,i=!0,s=!0,l=!0){const c=e.getRenderTarget();for(let h=0;h<6;h++)e.setRenderTarget(this,h),e.clear(i,s,l);e.setRenderTarget(c)}}class nu extends Bn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const d1={type:"move"};class uh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new nu,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new nu,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new nu,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Z),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const i=this._hand;if(i)for(const s of e.hand.values())this._getHandJoint(i,s)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,i,s){let l=null,c=null,h=null;const d=this._targetRay,p=this._grip,m=this._hand;if(e&&i.session.visibilityState!=="visible-blurred"){if(m&&e.hand){h=!0;for(const R of e.hand.values()){const M=i.getJointPose(R,s),_=this._getHandJoint(m,R);M!==null&&(_.matrix.fromArray(M.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=M.radius),_.visible=M!==null}const g=m.joints["index-finger-tip"],v=m.joints["thumb-tip"],S=g.position.distanceTo(v.position),y=.02,E=.005;m.inputState.pinching&&S>y+E?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!m.inputState.pinching&&S<=y-E&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else p!==null&&e.gripSpace&&(c=i.getPose(e.gripSpace,s),c!==null&&(p.matrix.fromArray(c.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,c.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(c.linearVelocity)):p.hasLinearVelocity=!1,c.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(c.angularVelocity)):p.hasAngularVelocity=!1));d!==null&&(l=i.getPose(e.targetRaySpace,s),l===null&&c!==null&&(l=c),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(d1)))}return d!==null&&(d.visible=l!==null),p!==null&&(p.visible=c!==null),m!==null&&(m.visible=h!==null),this}_getHandJoint(e,i){if(e.joints[i.jointName]===void 0){const s=new nu;s.matrixAutoUpdate=!1,s.visible=!1,e.joints[i.jointName]=s,e.add(s)}return e.joints[i.jointName]}}class $x extends Bn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Oi,this.environmentIntensity=1,this.environmentRotation=new Oi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,i){return super.copy(e,i),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const i=super.toJSON(e);return this.fog!==null&&(i.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(i.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(i.object.backgroundIntensity=this.backgroundIntensity),i.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(i.object.environmentIntensity=this.environmentIntensity),i.object.environmentRotation=this.environmentRotation.toArray(),i}}class Jx extends kn{constructor(e=null,i=1,s=1,l,c,h,d,p,m=Nn,g=Nn,v,S){super(null,h,d,p,m,g,l,c,v,S),this.isDataTexture=!0,this.image={data:e,width:i,height:s},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class M_ extends Li{constructor(e,i,s,l=1){super(e,i,s),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=l}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Bs=new qt,b_=new qt,iu=[],E_=new Gr,h1=new qt,al=new yn,rl=new El;class eS extends yn{constructor(e,i,s){super(e,i),this.isInstancedMesh=!0,this.instanceMatrix=new M_(new Float32Array(s*16),16),this.instanceColor=null,this.morphTexture=null,this.count=s,this.boundingBox=null,this.boundingSphere=null;for(let l=0;l<s;l++)this.setMatrixAt(l,h1)}computeBoundingBox(){const e=this.geometry,i=this.count;this.boundingBox===null&&(this.boundingBox=new Gr),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let s=0;s<i;s++)this.getMatrixAt(s,Bs),E_.copy(e.boundingBox).applyMatrix4(Bs),this.boundingBox.union(E_)}computeBoundingSphere(){const e=this.geometry,i=this.count;this.boundingSphere===null&&(this.boundingSphere=new El),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let s=0;s<i;s++)this.getMatrixAt(s,Bs),rl.copy(e.boundingSphere).applyMatrix4(Bs),this.boundingSphere.union(rl)}copy(e,i){return super.copy(e,i),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,i){i.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,i){i.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,i){const s=i.morphTargetInfluences,l=this.morphTexture.source.data.data,c=s.length+1,h=e*c+1;for(let d=0;d<s.length;d++)s[d]=l[h+d]}raycast(e,i){const s=this.matrixWorld,l=this.count;if(al.geometry=this.geometry,al.material=this.material,al.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),rl.copy(this.boundingSphere),rl.applyMatrix4(s),e.ray.intersectsSphere(rl)!==!1))for(let c=0;c<l;c++){this.getMatrixAt(c,Bs),b_.multiplyMatrices(s,Bs),al.matrixWorld=b_,al.raycast(e,iu);for(let h=0,d=iu.length;h<d;h++){const p=iu[h];p.instanceId=c,p.object=this,i.push(p)}iu.length=0}}setColorAt(e,i){this.instanceColor===null&&(this.instanceColor=new M_(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),i.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,i){i.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,i){const s=i.morphTargetInfluences,l=s.length+1;this.morphTexture===null&&(this.morphTexture=new Jx(new Float32Array(l*this.count),l,this.count,kp,Ui));const c=this.morphTexture.source.data.data;let h=0;for(let m=0;m<s.length;m++)h+=s[m];const d=this.geometry.morphTargetsRelative?1:1-h,p=l*e;c[p]=d,c.set(s,p+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const fh=new Z,p1=new Z,m1=new dt;class rr{constructor(e=new Z(1,0,0),i=0){this.isPlane=!0,this.normal=e,this.constant=i}set(e,i){return this.normal.copy(e),this.constant=i,this}setComponents(e,i,s,l){return this.normal.set(e,i,s),this.constant=l,this}setFromNormalAndCoplanarPoint(e,i){return this.normal.copy(e),this.constant=-i.dot(this.normal),this}setFromCoplanarPoints(e,i,s){const l=fh.subVectors(s,i).cross(p1.subVectors(e,i)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,i){return i.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,i){const s=e.delta(fh),l=this.normal.dot(s);if(l===0)return this.distanceToPoint(e.start)===0?i.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/l;return c<0||c>1?null:i.copy(e.start).addScaledVector(s,c)}intersectsLine(e){const i=this.distanceToPoint(e.start),s=this.distanceToPoint(e.end);return i<0&&s>0||s<0&&i>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,i){const s=i||m1.getNormalMatrix(e),l=this.coplanarPoint(fh).applyMatrix4(e),c=this.normal.applyMatrix3(s).normalize();return this.constant=-l.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ur=new El,g1=new Mt(.5,.5),au=new Z;class Jp{constructor(e=new rr,i=new rr,s=new rr,l=new rr,c=new rr,h=new rr){this.planes=[e,i,s,l,c,h]}set(e,i,s,l,c,h){const d=this.planes;return d[0].copy(e),d[1].copy(i),d[2].copy(s),d[3].copy(l),d[4].copy(c),d[5].copy(h),this}copy(e){const i=this.planes;for(let s=0;s<6;s++)i[s].copy(e.planes[s]);return this}setFromProjectionMatrix(e,i=ki,s=!1){const l=this.planes,c=e.elements,h=c[0],d=c[1],p=c[2],m=c[3],g=c[4],v=c[5],S=c[6],y=c[7],E=c[8],R=c[9],M=c[10],_=c[11],N=c[12],O=c[13],L=c[14],I=c[15];if(l[0].setComponents(m-h,y-g,_-E,I-N).normalize(),l[1].setComponents(m+h,y+g,_+E,I+N).normalize(),l[2].setComponents(m+d,y+v,_+R,I+O).normalize(),l[3].setComponents(m-d,y-v,_-R,I-O).normalize(),s)l[4].setComponents(p,S,M,L).normalize(),l[5].setComponents(m-p,y-S,_-M,I-L).normalize();else if(l[4].setComponents(m-p,y-S,_-M,I-L).normalize(),i===ki)l[5].setComponents(m+p,y+S,_+M,I+L).normalize();else if(i===Su)l[5].setComponents(p,S,M,L).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+i);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ur.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const i=e.geometry;i.boundingSphere===null&&i.computeBoundingSphere(),Ur.copy(i.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ur)}intersectsSprite(e){Ur.center.set(0,0,0);const i=g1.distanceTo(e.center);return Ur.radius=.7071067811865476+i,Ur.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ur)}intersectsSphere(e){const i=this.planes,s=e.center,l=-e.radius;for(let c=0;c<6;c++)if(i[c].distanceToPoint(s)<l)return!1;return!0}intersectsBox(e){const i=this.planes;for(let s=0;s<6;s++){const l=i[s];if(au.x=l.normal.x>0?e.max.x:e.min.x,au.y=l.normal.y>0?e.max.y:e.min.y,au.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(au)<0)return!1}return!0}containsPoint(e){const i=this.planes;for(let s=0;s<6;s++)if(i[s].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Sl extends kn{constructor(e,i,s=ji,l,c,h,d=Nn,p=Nn,m,g=Ta,v=1){if(g!==Ta&&g!==Br)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const S={width:e,height:i,depth:v};super(S,l,c,h,d,p,g,s,m),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Qp(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const i=super.toJSON(e);return this.compareFunction!==null&&(i.compareFunction=this.compareFunction),i}}class v1 extends Sl{constructor(e,i=ji,s=Hr,l,c,h=Nn,d=Nn,p,m=Ta){const g={width:e,height:e,depth:1},v=[g,g,g,g,g,g];super(e,e,i,s,l,c,h,d,p,m),this.image=v,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class tS extends kn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Au extends Zi{constructor(e=1,i=1,s=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:i,widthSegments:s,heightSegments:l};const c=e/2,h=i/2,d=Math.floor(s),p=Math.floor(l),m=d+1,g=p+1,v=e/d,S=i/p,y=[],E=[],R=[],M=[];for(let _=0;_<g;_++){const N=_*S-h;for(let O=0;O<m;O++){const L=O*v-c;E.push(L,-N,0),R.push(0,0,1),M.push(O/d),M.push(1-_/p)}}for(let _=0;_<p;_++)for(let N=0;N<d;N++){const O=N+m*_,L=N+m*(_+1),I=N+1+m*(_+1),z=N+1+m*_;y.push(O,L,z),y.push(L,I,z)}this.setIndex(y),this.setAttribute("position",new Si(E,3)),this.setAttribute("normal",new Si(R,3)),this.setAttribute("uv",new Si(M,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Au(e.width,e.height,e.widthSegments,e.heightSegments)}}class em extends Zi{constructor(e=1,i=32,s=16,l=0,c=Math.PI*2,h=0,d=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:i,heightSegments:s,phiStart:l,phiLength:c,thetaStart:h,thetaLength:d},i=Math.max(3,Math.floor(i)),s=Math.max(2,Math.floor(s));const p=Math.min(h+d,Math.PI);let m=0;const g=[],v=new Z,S=new Z,y=[],E=[],R=[],M=[];for(let _=0;_<=s;_++){const N=[],O=_/s;let L=0;_===0&&h===0?L=.5/i:_===s&&p===Math.PI&&(L=-.5/i);for(let I=0;I<=i;I++){const z=I/i;v.x=-e*Math.cos(l+z*c)*Math.sin(h+O*d),v.y=e*Math.cos(h+O*d),v.z=e*Math.sin(l+z*c)*Math.sin(h+O*d),E.push(v.x,v.y,v.z),S.copy(v).normalize(),R.push(S.x,S.y,S.z),M.push(z+L,1-O),N.push(m++)}g.push(N)}for(let _=0;_<s;_++)for(let N=0;N<i;N++){const O=g[_][N+1],L=g[_][N],I=g[_+1][N],z=g[_+1][N+1];(_!==0||h>0)&&y.push(O,L,z),(_!==s-1||p<Math.PI)&&y.push(L,I,z)}this.setIndex(y),this.setAttribute("position",new Si(E,3)),this.setAttribute("normal",new Si(R,3)),this.setAttribute("uv",new Si(M,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new em(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class _1 extends Yi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class yp extends no{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ht(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ht(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=jp,this.normalScale=new Mt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Oi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class x1 extends yp{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Mt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return _t(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(i){this.ior=(1+.4*i)/(1-.4*i)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ht(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ht(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ht(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class S1 extends no{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new ht(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ht(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=jp,this.normalScale=new Mt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Oi,this.combine=Bp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class y1 extends no{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=_E,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class M1 extends no{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class nS extends Bn{constructor(e,i=1){super(),this.isLight=!0,this.type="Light",this.color=new ht(e),this.intensity=i}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,i){return super.copy(e,i),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const i=super.toJSON(e);return i.object.color=this.color.getHex(),i.object.intensity=this.intensity,i}}const dh=new qt,T_=new Z,A_=new Z;class b1{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Mt(512,512),this.mapType=oi,this.map=null,this.mapPass=null,this.matrix=new qt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Jp,this._frameExtents=new Mt(1,1),this._viewportCount=1,this._viewports=[new an(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const i=this.camera,s=this.matrix;T_.setFromMatrixPosition(e.matrixWorld),i.position.copy(T_),A_.setFromMatrixPosition(e.target.matrixWorld),i.lookAt(A_),i.updateMatrixWorld(),dh.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(dh,i.coordinateSystem,i.reversedDepth),i.reversedDepth?s.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):s.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),s.multiply(dh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class E1 extends b1{constructor(){super(new si(90,1,.5,500)),this.isPointLightShadow=!0}}class iS extends nS{constructor(e,i,s=0,l=2){super(e,i),this.isPointLight=!0,this.type="PointLight",this.distance=s,this.decay=l,this.shadow=new E1}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,i){return super.copy(e,i),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const i=super.toJSON(e);return i.object.distance=this.distance,i.object.decay=this.decay,i.object.shadow=this.shadow.toJSON(),i}}class aS extends Zx{constructor(e=-1,i=1,s=1,l=-1,c=.1,h=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=i,this.top=s,this.bottom=l,this.near=c,this.far=h,this.updateProjectionMatrix()}copy(e,i){return super.copy(e,i),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,i,s,l,c,h){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=i,this.view.offsetX=s,this.view.offsetY=l,this.view.width=c,this.view.height=h,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),i=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=s-e,h=s+e,d=l+i,p=l-i;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=m*this.view.offsetX,h=c+m*this.view.width,d-=g*this.view.offsetY,p=d-g*this.view.height}this.projectionMatrix.makeOrthographic(c,h,d,p,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const i=super.toJSON(e);return i.object.zoom=this.zoom,i.object.left=this.left,i.object.right=this.right,i.object.top=this.top,i.object.bottom=this.bottom,i.object.near=this.near,i.object.far=this.far,this.view!==null&&(i.object.view=Object.assign({},this.view)),i}}class T1 extends nS{constructor(e,i){super(e,i),this.isAmbientLight=!0,this.type="AmbientLight"}}class A1 extends si{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class R1{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const i=performance.now();e=(i-this.oldTime)/1e3,this.oldTime=i,this.elapsedTime+=e}return e}}const R_=new qt;class C1{constructor(e,i,s=0,l=1/0){this.ray=new kx(e,i),this.near=s,this.far=l,this.camera=null,this.layers=new $p,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,i){this.ray.set(e,i)}setFromCamera(e,i){i.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(i.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(i).sub(this.ray.origin).normalize(),this.camera=i):i.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(i.near+i.far)/(i.near-i.far)).unproject(i),this.ray.direction.set(0,0,-1).transformDirection(i.matrixWorld),this.camera=i):At("Raycaster: Unsupported camera type: "+i.type)}setFromXRController(e){return R_.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(R_),this}intersectObject(e,i=!0,s=[]){return Mp(e,this,s,i),s.sort(C_),s}intersectObjects(e,i=!0,s=[]){for(let l=0,c=e.length;l<c;l++)Mp(e[l],this,s,i);return s.sort(C_),s}}function C_(r,e){return r.distance-e.distance}function Mp(r,e,i,s){let l=!0;if(r.layers.test(e.layers)&&r.raycast(e,i)===!1&&(l=!1),l===!0&&s===!0){const c=r.children;for(let h=0,d=c.length;h<d;h++)Mp(c[h],e,i,!0)}}function w_(r,e,i,s){const l=w1(s);switch(i){case zx:return r*e;case kp:return r*e/l.components*l.byteLength;case Xp:return r*e/l.components*l.byteLength;case Ks:return r*e*2/l.components*l.byteLength;case Wp:return r*e*2/l.components*l.byteLength;case Hx:return r*e*3/l.components*l.byteLength;case Ni:return r*e*4/l.components*l.byteLength;case qp:return r*e*4/l.components*l.byteLength;case du:case hu:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case pu:case mu:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case kh:case Wh:return Math.max(r,16)*Math.max(e,8)/4;case Vh:case Xh:return Math.max(r,8)*Math.max(e,8)/2;case qh:case jh:case Zh:case Kh:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Yh:case Qh:case $h:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Jh:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case ep:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case tp:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case np:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case ip:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case ap:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case rp:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case sp:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case op:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case lp:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case cp:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case up:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case fp:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case dp:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case hp:case pp:case mp:return Math.ceil(r/4)*Math.ceil(e/4)*16;case gp:case vp:return Math.ceil(r/4)*Math.ceil(e/4)*8;case _p:case xp:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${i} format.`)}function w1(r){switch(r){case oi:case Px:return{byteLength:1,components:1};case gl:case Fx:case Ea:return{byteLength:2,components:1};case Gp:case Vp:return{byteLength:2,components:4};case ji:case Hp:case Ui:return{byteLength:4,components:1};case Ix:case Bx:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ip}}));typeof window<"u"&&(window.__THREE__?rt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ip);function rS(){let r=null,e=!1,i=null,s=null;function l(c,h){i(c,h),s=r.requestAnimationFrame(l)}return{start:function(){e!==!0&&i!==null&&(s=r.requestAnimationFrame(l),e=!0)},stop:function(){r.cancelAnimationFrame(s),e=!1},setAnimationLoop:function(c){i=c},setContext:function(c){r=c}}}function D1(r){const e=new WeakMap;function i(d,p){const m=d.array,g=d.usage,v=m.byteLength,S=r.createBuffer();r.bindBuffer(p,S),r.bufferData(p,m,g),d.onUploadCallback();let y;if(m instanceof Float32Array)y=r.FLOAT;else if(typeof Float16Array<"u"&&m instanceof Float16Array)y=r.HALF_FLOAT;else if(m instanceof Uint16Array)d.isFloat16BufferAttribute?y=r.HALF_FLOAT:y=r.UNSIGNED_SHORT;else if(m instanceof Int16Array)y=r.SHORT;else if(m instanceof Uint32Array)y=r.UNSIGNED_INT;else if(m instanceof Int32Array)y=r.INT;else if(m instanceof Int8Array)y=r.BYTE;else if(m instanceof Uint8Array)y=r.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)y=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:S,type:y,bytesPerElement:m.BYTES_PER_ELEMENT,version:d.version,size:v}}function s(d,p,m){const g=p.array,v=p.updateRanges;if(r.bindBuffer(m,d),v.length===0)r.bufferSubData(m,0,g);else{v.sort((y,E)=>y.start-E.start);let S=0;for(let y=1;y<v.length;y++){const E=v[S],R=v[y];R.start<=E.start+E.count+1?E.count=Math.max(E.count,R.start+R.count-E.start):(++S,v[S]=R)}v.length=S+1;for(let y=0,E=v.length;y<E;y++){const R=v[y];r.bufferSubData(m,R.start*g.BYTES_PER_ELEMENT,g,R.start,R.count)}p.clearUpdateRanges()}p.onUploadCallback()}function l(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function c(d){d.isInterleavedBufferAttribute&&(d=d.data);const p=e.get(d);p&&(r.deleteBuffer(p.buffer),e.delete(d))}function h(d,p){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const g=e.get(d);(!g||g.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const m=e.get(d);if(m===void 0)e.set(d,i(d,p));else if(m.version<d.version){if(m.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(m.buffer,d,p),m.version=d.version}}return{get:l,remove:c,update:h}}var U1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,N1=`#ifdef USE_ALPHAHASH
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
#endif`,L1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,O1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,P1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,F1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,I1=`#ifdef USE_AOMAP
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
#endif`,B1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,z1=`#ifdef USE_BATCHING
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
#endif`,H1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,G1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,V1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,k1=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,X1=`#ifdef USE_IRIDESCENCE
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
#endif`,W1=`#ifdef USE_BUMPMAP
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
#endif`,q1=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,j1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Y1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Z1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,K1=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Q1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,$1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,J1=`#if defined( USE_COLOR_ALPHA )
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
#endif`,eT=`#define PI 3.141592653589793
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
} // validated`,tT=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,nT=`vec3 transformedNormal = objectNormal;
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
#endif`,iT=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,aT=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,rT=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,sT=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,oT="gl_FragColor = linearToOutputTexel( gl_FragColor );",lT=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,cT=`#ifdef USE_ENVMAP
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
#endif`,uT=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,fT=`#ifdef USE_ENVMAP
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
#endif`,dT=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,hT=`#ifdef USE_ENVMAP
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
#endif`,pT=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,mT=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,gT=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,vT=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,_T=`#ifdef USE_GRADIENTMAP
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
}`,xT=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ST=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,yT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,MT=`uniform bool receiveShadow;
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
#endif`,bT=`#ifdef USE_ENVMAP
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
#endif`,ET=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,TT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,AT=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,RT=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,CT=`PhysicalMaterial material;
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
#endif`,wT=`uniform sampler2D dfgLUT;
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
}`,DT=`
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
#endif`,UT=`#if defined( RE_IndirectDiffuse )
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
#endif`,NT=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,LT=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,OT=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,PT=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,FT=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,IT=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,BT=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,zT=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,HT=`#if defined( USE_POINTS_UV )
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
#endif`,GT=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,VT=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,kT=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,XT=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,WT=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,qT=`#ifdef USE_MORPHTARGETS
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
#endif`,jT=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,YT=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,ZT=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,KT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,QT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$T=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,JT=`#ifdef USE_NORMALMAP
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
#endif`,eA=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,tA=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,nA=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iA=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,aA=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,rA=`vec3 packNormalToRGB( const in vec3 normal ) {
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
#endif`,oA=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,lA=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,cA=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,uA=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,fA=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,dA=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,hA=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,pA=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,mA=`float getShadowMask() {
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
}`,gA=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,vA=`#ifdef USE_SKINNING
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
#endif`,_A=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,xA=`#ifdef USE_SKINNING
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
#endif`,SA=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,yA=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,MA=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,bA=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,EA=`#ifdef USE_TRANSMISSION
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
#endif`,TA=`#ifdef USE_TRANSMISSION
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
#endif`,AA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,RA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,CA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,wA=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const DA=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,UA=`uniform sampler2D t2D;
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
}`,NA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,LA=`#ifdef ENVMAP_TYPE_CUBE
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
}`,OA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,PA=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,FA=`#include <common>
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
}`,IA=`#if DEPTH_PACKING == 3200
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
}`,BA=`#define DISTANCE
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
}`,zA=`#define DISTANCE
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
}`,HA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,GA=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,VA=`uniform float scale;
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
}`,kA=`uniform vec3 diffuse;
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
}`,XA=`#include <common>
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
}`,WA=`uniform vec3 diffuse;
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
}`,qA=`#define LAMBERT
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
}`,jA=`#define LAMBERT
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
}`,YA=`#define MATCAP
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
}`,ZA=`#define MATCAP
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
}`,KA=`#define NORMAL
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
}`,QA=`#define NORMAL
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
}`,$A=`#define PHONG
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
}`,JA=`#define PHONG
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
}`,e2=`#define STANDARD
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
}`,t2=`#define STANDARD
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
}`,n2=`#define TOON
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
}`,i2=`#define TOON
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
}`,a2=`uniform float size;
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
}`,r2=`uniform vec3 diffuse;
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
}`,o2=`uniform vec3 color;
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
}`,l2=`uniform float rotation;
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
}`,c2=`uniform vec3 diffuse;
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
}`,ft={alphahash_fragment:U1,alphahash_pars_fragment:N1,alphamap_fragment:L1,alphamap_pars_fragment:O1,alphatest_fragment:P1,alphatest_pars_fragment:F1,aomap_fragment:I1,aomap_pars_fragment:B1,batching_pars_vertex:z1,batching_vertex:H1,begin_vertex:G1,beginnormal_vertex:V1,bsdfs:k1,iridescence_fragment:X1,bumpmap_pars_fragment:W1,clipping_planes_fragment:q1,clipping_planes_pars_fragment:j1,clipping_planes_pars_vertex:Y1,clipping_planes_vertex:Z1,color_fragment:K1,color_pars_fragment:Q1,color_pars_vertex:$1,color_vertex:J1,common:eT,cube_uv_reflection_fragment:tT,defaultnormal_vertex:nT,displacementmap_pars_vertex:iT,displacementmap_vertex:aT,emissivemap_fragment:rT,emissivemap_pars_fragment:sT,colorspace_fragment:oT,colorspace_pars_fragment:lT,envmap_fragment:cT,envmap_common_pars_fragment:uT,envmap_pars_fragment:fT,envmap_pars_vertex:dT,envmap_physical_pars_fragment:bT,envmap_vertex:hT,fog_vertex:pT,fog_pars_vertex:mT,fog_fragment:gT,fog_pars_fragment:vT,gradientmap_pars_fragment:_T,lightmap_pars_fragment:xT,lights_lambert_fragment:ST,lights_lambert_pars_fragment:yT,lights_pars_begin:MT,lights_toon_fragment:ET,lights_toon_pars_fragment:TT,lights_phong_fragment:AT,lights_phong_pars_fragment:RT,lights_physical_fragment:CT,lights_physical_pars_fragment:wT,lights_fragment_begin:DT,lights_fragment_maps:UT,lights_fragment_end:NT,logdepthbuf_fragment:LT,logdepthbuf_pars_fragment:OT,logdepthbuf_pars_vertex:PT,logdepthbuf_vertex:FT,map_fragment:IT,map_pars_fragment:BT,map_particle_fragment:zT,map_particle_pars_fragment:HT,metalnessmap_fragment:GT,metalnessmap_pars_fragment:VT,morphinstance_vertex:kT,morphcolor_vertex:XT,morphnormal_vertex:WT,morphtarget_pars_vertex:qT,morphtarget_vertex:jT,normal_fragment_begin:YT,normal_fragment_maps:ZT,normal_pars_fragment:KT,normal_pars_vertex:QT,normal_vertex:$T,normalmap_pars_fragment:JT,clearcoat_normal_fragment_begin:eA,clearcoat_normal_fragment_maps:tA,clearcoat_pars_fragment:nA,iridescence_pars_fragment:iA,opaque_fragment:aA,packing:rA,premultiplied_alpha_fragment:sA,project_vertex:oA,dithering_fragment:lA,dithering_pars_fragment:cA,roughnessmap_fragment:uA,roughnessmap_pars_fragment:fA,shadowmap_pars_fragment:dA,shadowmap_pars_vertex:hA,shadowmap_vertex:pA,shadowmask_pars_fragment:mA,skinbase_vertex:gA,skinning_pars_vertex:vA,skinning_vertex:_A,skinnormal_vertex:xA,specularmap_fragment:SA,specularmap_pars_fragment:yA,tonemapping_fragment:MA,tonemapping_pars_fragment:bA,transmission_fragment:EA,transmission_pars_fragment:TA,uv_pars_fragment:AA,uv_pars_vertex:RA,uv_vertex:CA,worldpos_vertex:wA,background_vert:DA,background_frag:UA,backgroundCube_vert:NA,backgroundCube_frag:LA,cube_vert:OA,cube_frag:PA,depth_vert:FA,depth_frag:IA,distance_vert:BA,distance_frag:zA,equirect_vert:HA,equirect_frag:GA,linedashed_vert:VA,linedashed_frag:kA,meshbasic_vert:XA,meshbasic_frag:WA,meshlambert_vert:qA,meshlambert_frag:jA,meshmatcap_vert:YA,meshmatcap_frag:ZA,meshnormal_vert:KA,meshnormal_frag:QA,meshphong_vert:$A,meshphong_frag:JA,meshphysical_vert:e2,meshphysical_frag:t2,meshtoon_vert:n2,meshtoon_frag:i2,points_vert:a2,points_frag:r2,shadow_vert:s2,shadow_frag:o2,sprite_vert:l2,sprite_frag:c2},Pe={common:{diffuse:{value:new ht(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new dt},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new dt}},envmap:{envMap:{value:null},envMapRotation:{value:new dt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new dt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new dt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new dt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new dt},normalScale:{value:new Mt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new dt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new dt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new dt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new dt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ht(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ht(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0},uvTransform:{value:new dt}},sprite:{diffuse:{value:new ht(16777215)},opacity:{value:1},center:{value:new Mt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new dt},alphaMap:{value:null},alphaMapTransform:{value:new dt},alphaTest:{value:0}}},Vi={basic:{uniforms:Gn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.fog]),vertexShader:ft.meshbasic_vert,fragmentShader:ft.meshbasic_frag},lambert:{uniforms:Gn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new ht(0)}}]),vertexShader:ft.meshlambert_vert,fragmentShader:ft.meshlambert_frag},phong:{uniforms:Gn([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new ht(0)},specular:{value:new ht(1118481)},shininess:{value:30}}]),vertexShader:ft.meshphong_vert,fragmentShader:ft.meshphong_frag},standard:{uniforms:Gn([Pe.common,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.roughnessmap,Pe.metalnessmap,Pe.fog,Pe.lights,{emissive:{value:new ht(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ft.meshphysical_vert,fragmentShader:ft.meshphysical_frag},toon:{uniforms:Gn([Pe.common,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.gradientmap,Pe.fog,Pe.lights,{emissive:{value:new ht(0)}}]),vertexShader:ft.meshtoon_vert,fragmentShader:ft.meshtoon_frag},matcap:{uniforms:Gn([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,{matcap:{value:null}}]),vertexShader:ft.meshmatcap_vert,fragmentShader:ft.meshmatcap_frag},points:{uniforms:Gn([Pe.points,Pe.fog]),vertexShader:ft.points_vert,fragmentShader:ft.points_frag},dashed:{uniforms:Gn([Pe.common,Pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ft.linedashed_vert,fragmentShader:ft.linedashed_frag},depth:{uniforms:Gn([Pe.common,Pe.displacementmap]),vertexShader:ft.depth_vert,fragmentShader:ft.depth_frag},normal:{uniforms:Gn([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,{opacity:{value:1}}]),vertexShader:ft.meshnormal_vert,fragmentShader:ft.meshnormal_frag},sprite:{uniforms:Gn([Pe.sprite,Pe.fog]),vertexShader:ft.sprite_vert,fragmentShader:ft.sprite_frag},background:{uniforms:{uvTransform:{value:new dt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ft.background_vert,fragmentShader:ft.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new dt}},vertexShader:ft.backgroundCube_vert,fragmentShader:ft.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ft.cube_vert,fragmentShader:ft.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ft.equirect_vert,fragmentShader:ft.equirect_frag},distance:{uniforms:Gn([Pe.common,Pe.displacementmap,{referencePosition:{value:new Z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ft.distance_vert,fragmentShader:ft.distance_frag},shadow:{uniforms:Gn([Pe.lights,Pe.fog,{color:{value:new ht(0)},opacity:{value:1}}]),vertexShader:ft.shadow_vert,fragmentShader:ft.shadow_frag}};Vi.physical={uniforms:Gn([Vi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new dt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new dt},clearcoatNormalScale:{value:new Mt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new dt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new dt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new dt},sheen:{value:0},sheenColor:{value:new ht(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new dt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new dt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new dt},transmissionSamplerSize:{value:new Mt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new dt},attenuationDistance:{value:0},attenuationColor:{value:new ht(0)},specularColor:{value:new ht(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new dt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new dt},anisotropyVector:{value:new Mt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new dt}}]),vertexShader:ft.meshphysical_vert,fragmentShader:ft.meshphysical_frag};const ru={r:0,b:0,g:0},Nr=new Oi,u2=new qt;function f2(r,e,i,s,l,c,h){const d=new ht(0);let p=c===!0?0:1,m,g,v=null,S=0,y=null;function E(O){let L=O.isScene===!0?O.background:null;return L&&L.isTexture&&(L=(O.backgroundBlurriness>0?i:e).get(L)),L}function R(O){let L=!1;const I=E(O);I===null?_(d,p):I&&I.isColor&&(_(I,1),L=!0);const z=r.xr.getEnvironmentBlendMode();z==="additive"?s.buffers.color.setClear(0,0,0,1,h):z==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,h),(r.autoClear||L)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function M(O,L){const I=E(L);I&&(I.isCubeTexture||I.mapping===Tu)?(g===void 0&&(g=new yn(new io(1,1,1),new Yi({name:"BackgroundCubeMaterial",uniforms:$s(Vi.backgroundCube.uniforms),vertexShader:Vi.backgroundCube.vertexShader,fragmentShader:Vi.backgroundCube.fragmentShader,side:Vn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(z,F,K){this.matrixWorld.copyPosition(K.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),l.update(g)),Nr.copy(L.backgroundRotation),Nr.x*=-1,Nr.y*=-1,Nr.z*=-1,I.isCubeTexture&&I.isRenderTargetTexture===!1&&(Nr.y*=-1,Nr.z*=-1),g.material.uniforms.envMap.value=I,g.material.uniforms.flipEnvMap.value=I.isCubeTexture&&I.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=L.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(u2.makeRotationFromEuler(Nr)),g.material.toneMapped=Rt.getTransfer(I.colorSpace)!==Ht,(v!==I||S!==I.version||y!==r.toneMapping)&&(g.material.needsUpdate=!0,v=I,S=I.version,y=r.toneMapping),g.layers.enableAll(),O.unshift(g,g.geometry,g.material,0,0,null)):I&&I.isTexture&&(m===void 0&&(m=new yn(new Au(2,2),new Yi({name:"BackgroundMaterial",uniforms:$s(Vi.background.uniforms),vertexShader:Vi.background.vertexShader,fragmentShader:Vi.background.fragmentShader,side:lr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),l.update(m)),m.material.uniforms.t2D.value=I,m.material.uniforms.backgroundIntensity.value=L.backgroundIntensity,m.material.toneMapped=Rt.getTransfer(I.colorSpace)!==Ht,I.matrixAutoUpdate===!0&&I.updateMatrix(),m.material.uniforms.uvTransform.value.copy(I.matrix),(v!==I||S!==I.version||y!==r.toneMapping)&&(m.material.needsUpdate=!0,v=I,S=I.version,y=r.toneMapping),m.layers.enableAll(),O.unshift(m,m.geometry,m.material,0,0,null))}function _(O,L){O.getRGB(ru,Yx(r)),s.buffers.color.setClear(ru.r,ru.g,ru.b,L,h)}function N(){g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return d},setClearColor:function(O,L=1){d.set(O),p=L,_(d,p)},getClearAlpha:function(){return p},setClearAlpha:function(O){p=O,_(d,p)},render:R,addToRenderList:M,dispose:N}}function d2(r,e){const i=r.getParameter(r.MAX_VERTEX_ATTRIBS),s={},l=S(null);let c=l,h=!1;function d(w,k,se,re,pe){let fe=!1;const P=v(re,se,k);c!==P&&(c=P,m(c.object)),fe=y(w,re,se,pe),fe&&E(w,re,se,pe),pe!==null&&e.update(pe,r.ELEMENT_ARRAY_BUFFER),(fe||h)&&(h=!1,L(w,k,se,re),pe!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(pe).buffer))}function p(){return r.createVertexArray()}function m(w){return r.bindVertexArray(w)}function g(w){return r.deleteVertexArray(w)}function v(w,k,se){const re=se.wireframe===!0;let pe=s[w.id];pe===void 0&&(pe={},s[w.id]=pe);let fe=pe[k.id];fe===void 0&&(fe={},pe[k.id]=fe);let P=fe[re];return P===void 0&&(P=S(p()),fe[re]=P),P}function S(w){const k=[],se=[],re=[];for(let pe=0;pe<i;pe++)k[pe]=0,se[pe]=0,re[pe]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:k,enabledAttributes:se,attributeDivisors:re,object:w,attributes:{},index:null}}function y(w,k,se,re){const pe=c.attributes,fe=k.attributes;let P=0;const H=se.getAttributes();for(const ae in H)if(H[ae].location>=0){const Se=pe[ae];let U=fe[ae];if(U===void 0&&(ae==="instanceMatrix"&&w.instanceMatrix&&(U=w.instanceMatrix),ae==="instanceColor"&&w.instanceColor&&(U=w.instanceColor)),Se===void 0||Se.attribute!==U||U&&Se.data!==U.data)return!0;P++}return c.attributesNum!==P||c.index!==re}function E(w,k,se,re){const pe={},fe=k.attributes;let P=0;const H=se.getAttributes();for(const ae in H)if(H[ae].location>=0){let Se=fe[ae];Se===void 0&&(ae==="instanceMatrix"&&w.instanceMatrix&&(Se=w.instanceMatrix),ae==="instanceColor"&&w.instanceColor&&(Se=w.instanceColor));const U={};U.attribute=Se,Se&&Se.data&&(U.data=Se.data),pe[ae]=U,P++}c.attributes=pe,c.attributesNum=P,c.index=re}function R(){const w=c.newAttributes;for(let k=0,se=w.length;k<se;k++)w[k]=0}function M(w){_(w,0)}function _(w,k){const se=c.newAttributes,re=c.enabledAttributes,pe=c.attributeDivisors;se[w]=1,re[w]===0&&(r.enableVertexAttribArray(w),re[w]=1),pe[w]!==k&&(r.vertexAttribDivisor(w,k),pe[w]=k)}function N(){const w=c.newAttributes,k=c.enabledAttributes;for(let se=0,re=k.length;se<re;se++)k[se]!==w[se]&&(r.disableVertexAttribArray(se),k[se]=0)}function O(w,k,se,re,pe,fe,P){P===!0?r.vertexAttribIPointer(w,k,se,pe,fe):r.vertexAttribPointer(w,k,se,re,pe,fe)}function L(w,k,se,re){R();const pe=re.attributes,fe=se.getAttributes(),P=k.defaultAttributeValues;for(const H in fe){const ae=fe[H];if(ae.location>=0){let Me=pe[H];if(Me===void 0&&(H==="instanceMatrix"&&w.instanceMatrix&&(Me=w.instanceMatrix),H==="instanceColor"&&w.instanceColor&&(Me=w.instanceColor)),Me!==void 0){const Se=Me.normalized,U=Me.itemSize,ie=e.get(Me);if(ie===void 0)continue;const ve=ie.buffer,Re=ie.type,He=ie.bytesPerElement,ne=Re===r.INT||Re===r.UNSIGNED_INT||Me.gpuType===Hp;if(Me.isInterleavedBufferAttribute){const ue=Me.data,Ue=ue.stride,Xe=Me.offset;if(ue.isInstancedInterleavedBuffer){for(let Ge=0;Ge<ae.locationSize;Ge++)_(ae.location+Ge,ue.meshPerAttribute);w.isInstancedMesh!==!0&&re._maxInstanceCount===void 0&&(re._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let Ge=0;Ge<ae.locationSize;Ge++)M(ae.location+Ge);r.bindBuffer(r.ARRAY_BUFFER,ve);for(let Ge=0;Ge<ae.locationSize;Ge++)O(ae.location+Ge,U/ae.locationSize,Re,Se,Ue*He,(Xe+U/ae.locationSize*Ge)*He,ne)}else{if(Me.isInstancedBufferAttribute){for(let ue=0;ue<ae.locationSize;ue++)_(ae.location+ue,Me.meshPerAttribute);w.isInstancedMesh!==!0&&re._maxInstanceCount===void 0&&(re._maxInstanceCount=Me.meshPerAttribute*Me.count)}else for(let ue=0;ue<ae.locationSize;ue++)M(ae.location+ue);r.bindBuffer(r.ARRAY_BUFFER,ve);for(let ue=0;ue<ae.locationSize;ue++)O(ae.location+ue,U/ae.locationSize,Re,Se,U*He,U/ae.locationSize*ue*He,ne)}}else if(P!==void 0){const Se=P[H];if(Se!==void 0)switch(Se.length){case 2:r.vertexAttrib2fv(ae.location,Se);break;case 3:r.vertexAttrib3fv(ae.location,Se);break;case 4:r.vertexAttrib4fv(ae.location,Se);break;default:r.vertexAttrib1fv(ae.location,Se)}}}}N()}function I(){K();for(const w in s){const k=s[w];for(const se in k){const re=k[se];for(const pe in re)g(re[pe].object),delete re[pe];delete k[se]}delete s[w]}}function z(w){if(s[w.id]===void 0)return;const k=s[w.id];for(const se in k){const re=k[se];for(const pe in re)g(re[pe].object),delete re[pe];delete k[se]}delete s[w.id]}function F(w){for(const k in s){const se=s[k];if(se[w.id]===void 0)continue;const re=se[w.id];for(const pe in re)g(re[pe].object),delete re[pe];delete se[w.id]}}function K(){C(),h=!0,c!==l&&(c=l,m(c.object))}function C(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:K,resetDefaultState:C,dispose:I,releaseStatesOfGeometry:z,releaseStatesOfProgram:F,initAttributes:R,enableAttribute:M,disableUnusedAttributes:N}}function h2(r,e,i){let s;function l(m){s=m}function c(m,g){r.drawArrays(s,m,g),i.update(g,s,1)}function h(m,g,v){v!==0&&(r.drawArraysInstanced(s,m,g,v),i.update(g,s,v))}function d(m,g,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,m,0,g,0,v);let y=0;for(let E=0;E<v;E++)y+=g[E];i.update(y,s,1)}function p(m,g,v,S){if(v===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let E=0;E<m.length;E++)h(m[E],g[E],S[E]);else{y.multiDrawArraysInstancedWEBGL(s,m,0,g,0,S,0,v);let E=0;for(let R=0;R<v;R++)E+=g[R]*S[R];i.update(E,s,1)}}this.setMode=l,this.render=c,this.renderInstances=h,this.renderMultiDraw=d,this.renderMultiDrawInstances=p}function p2(r,e,i,s){let l;function c(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const F=e.get("EXT_texture_filter_anisotropic");l=r.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function h(F){return!(F!==Ni&&s.convert(F)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(F){const K=F===Ea&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(F!==oi&&s.convert(F)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&F!==Ui&&!K)}function p(F){if(F==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=i.precision!==void 0?i.precision:"highp";const g=p(m);g!==m&&(rt("WebGLRenderer:",m,"not supported, using",g,"instead."),m=g);const v=i.logarithmicDepthBuffer===!0,S=i.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),y=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),E=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),R=r.getParameter(r.MAX_TEXTURE_SIZE),M=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),_=r.getParameter(r.MAX_VERTEX_ATTRIBS),N=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),O=r.getParameter(r.MAX_VARYING_VECTORS),L=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),I=r.getParameter(r.MAX_SAMPLES),z=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:p,textureFormatReadable:h,textureTypeReadable:d,precision:m,logarithmicDepthBuffer:v,reversedDepthBuffer:S,maxTextures:y,maxVertexTextures:E,maxTextureSize:R,maxCubemapSize:M,maxAttributes:_,maxVertexUniforms:N,maxVaryings:O,maxFragmentUniforms:L,maxSamples:I,samples:z}}function m2(r){const e=this;let i=null,s=0,l=!1,c=!1;const h=new rr,d=new dt,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(v,S){const y=v.length!==0||S||s!==0||l;return l=S,s=v.length,y},this.beginShadows=function(){c=!0,g(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(v,S){i=g(v,S,0)},this.setState=function(v,S,y){const E=v.clippingPlanes,R=v.clipIntersection,M=v.clipShadows,_=r.get(v);if(!l||E===null||E.length===0||c&&!M)c?g(null):m();else{const N=c?0:s,O=N*4;let L=_.clippingState||null;p.value=L,L=g(E,S,O,y);for(let I=0;I!==O;++I)L[I]=i[I];_.clippingState=L,this.numIntersection=R?this.numPlanes:0,this.numPlanes+=N}};function m(){p.value!==i&&(p.value=i,p.needsUpdate=s>0),e.numPlanes=s,e.numIntersection=0}function g(v,S,y,E){const R=v!==null?v.length:0;let M=null;if(R!==0){if(M=p.value,E!==!0||M===null){const _=y+R*4,N=S.matrixWorldInverse;d.getNormalMatrix(N),(M===null||M.length<_)&&(M=new Float32Array(_));for(let O=0,L=y;O!==R;++O,L+=4)h.copy(v[O]).applyMatrix4(N,d),h.normal.toArray(M,L),M[L+3]=h.constant}p.value=M,p.needsUpdate=!0}return e.numPlanes=R,e.numIntersection=0,M}}function g2(r){let e=new WeakMap;function i(h,d){return d===Bh?h.mapping=Hr:d===zh&&(h.mapping=Zs),h}function s(h){if(h&&h.isTexture){const d=h.mapping;if(d===Bh||d===zh)if(e.has(h)){const p=e.get(h).texture;return i(p,h.mapping)}else{const p=h.image;if(p&&p.height>0){const m=new Qx(p.height);return m.fromEquirectangularTexture(r,h),e.set(h,m),h.addEventListener("dispose",l),i(m.texture,h.mapping)}else return null}}return h}function l(h){const d=h.target;d.removeEventListener("dispose",l);const p=e.get(d);p!==void 0&&(e.delete(d),p.dispose())}function c(){e=new WeakMap}return{get:s,dispose:c}}const or=4,D_=[.125,.215,.35,.446,.526,.582],Pr=20,v2=256,sl=new aS,U_=new ht;let hh=null,ph=0,mh=0,gh=!1;const _2=new Z;class bp{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,i=0,s=.1,l=100,c={}){const{size:h=256,position:d=_2}=c;hh=this._renderer.getRenderTarget(),ph=this._renderer.getActiveCubeFace(),mh=this._renderer.getActiveMipmapLevel(),gh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(h);const p=this._allocateTargets();return p.depthBuffer=!0,this._sceneToCubeUV(e,s,l,p,d),i>0&&this._blur(p,0,0,i),this._applyPMREM(p),this._cleanup(p),p}fromEquirectangular(e,i=null){return this._fromTexture(e,i)}fromCubemap(e,i=null){return this._fromTexture(e,i)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=O_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=L_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(hh,ph,mh),this._renderer.xr.enabled=gh,e.scissorTest=!1,zs(e,0,0,e.width,e.height)}_fromTexture(e,i){e.mapping===Hr||e.mapping===Zs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),hh=this._renderer.getRenderTarget(),ph=this._renderer.getActiveCubeFace(),mh=this._renderer.getActiveMipmapLevel(),gh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=i||this._allocateTargets();return this._textureToCubeUV(e,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),i=4*this._cubeSize,s={magFilter:In,minFilter:In,generateMipmaps:!1,type:Ea,format:Ni,colorSpace:Qs,depthBuffer:!1},l=N_(e,i,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==i){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=N_(e,i,s);const{_lodMax:c}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=x2(c)),this._blurMaterial=y2(c,e,i),this._ggxMaterial=S2(c,e,i)}return l}_compileMaterial(e){const i=new yn(new Zi,e);this._renderer.compile(i,sl)}_sceneToCubeUV(e,i,s,l,c){const p=new si(90,1,i,s),m=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],v=this._renderer,S=v.autoClear,y=v.toneMapping;v.getClearColor(U_),v.toneMapping=Wi,v.autoClear=!1,v.state.buffers.depth.getReversed()&&(v.setRenderTarget(l),v.clearDepth(),v.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new yn(new io,new Wx({name:"PMREM.Background",side:Vn,depthWrite:!1,depthTest:!1})));const R=this._backgroundBox,M=R.material;let _=!1;const N=e.background;N?N.isColor&&(M.color.copy(N),e.background=null,_=!0):(M.color.copy(U_),_=!0);for(let O=0;O<6;O++){const L=O%3;L===0?(p.up.set(0,m[O],0),p.position.set(c.x,c.y,c.z),p.lookAt(c.x+g[O],c.y,c.z)):L===1?(p.up.set(0,0,m[O]),p.position.set(c.x,c.y,c.z),p.lookAt(c.x,c.y+g[O],c.z)):(p.up.set(0,m[O],0),p.position.set(c.x,c.y,c.z),p.lookAt(c.x,c.y,c.z+g[O]));const I=this._cubeSize;zs(l,L*I,O>2?I:0,I,I),v.setRenderTarget(l),_&&v.render(R,p),v.render(e,p)}v.toneMapping=y,v.autoClear=S,e.background=N}_textureToCubeUV(e,i){const s=this._renderer,l=e.mapping===Hr||e.mapping===Zs;l?(this._cubemapMaterial===null&&(this._cubemapMaterial=O_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=L_());const c=l?this._cubemapMaterial:this._equirectMaterial,h=this._lodMeshes[0];h.material=c;const d=c.uniforms;d.envMap.value=e;const p=this._cubeSize;zs(i,0,0,3*p,2*p),s.setRenderTarget(i),s.render(h,sl)}_applyPMREM(e){const i=this._renderer,s=i.autoClear;i.autoClear=!1;const l=this._lodMeshes.length;for(let c=1;c<l;c++)this._applyGGXFilter(e,c-1,c);i.autoClear=s}_applyGGXFilter(e,i,s){const l=this._renderer,c=this._pingPongRenderTarget,h=this._ggxMaterial,d=this._lodMeshes[s];d.material=h;const p=h.uniforms,m=s/(this._lodMeshes.length-1),g=i/(this._lodMeshes.length-1),v=Math.sqrt(m*m-g*g),S=0+m*1.25,y=v*S,{_lodMax:E}=this,R=this._sizeLods[s],M=3*R*(s>E-or?s-E+or:0),_=4*(this._cubeSize-R);p.envMap.value=e.texture,p.roughness.value=y,p.mipInt.value=E-i,zs(c,M,_,3*R,2*R),l.setRenderTarget(c),l.render(d,sl),p.envMap.value=c.texture,p.roughness.value=0,p.mipInt.value=E-s,zs(e,M,_,3*R,2*R),l.setRenderTarget(e),l.render(d,sl)}_blur(e,i,s,l,c){const h=this._pingPongRenderTarget;this._halfBlur(e,h,i,s,l,"latitudinal",c),this._halfBlur(h,e,s,s,l,"longitudinal",c)}_halfBlur(e,i,s,l,c,h,d){const p=this._renderer,m=this._blurMaterial;h!=="latitudinal"&&h!=="longitudinal"&&At("blur direction must be either latitudinal or longitudinal!");const g=3,v=this._lodMeshes[l];v.material=m;const S=m.uniforms,y=this._sizeLods[s]-1,E=isFinite(c)?Math.PI/(2*y):2*Math.PI/(2*Pr-1),R=c/E,M=isFinite(c)?1+Math.floor(g*R):Pr;M>Pr&&rt(`sigmaRadians, ${c}, is too large and will clip, as it requested ${M} samples when the maximum is set to ${Pr}`);const _=[];let N=0;for(let F=0;F<Pr;++F){const K=F/R,C=Math.exp(-K*K/2);_.push(C),F===0?N+=C:F<M&&(N+=2*C)}for(let F=0;F<_.length;F++)_[F]=_[F]/N;S.envMap.value=e.texture,S.samples.value=M,S.weights.value=_,S.latitudinal.value=h==="latitudinal",d&&(S.poleAxis.value=d);const{_lodMax:O}=this;S.dTheta.value=E,S.mipInt.value=O-s;const L=this._sizeLods[l],I=3*L*(l>O-or?l-O+or:0),z=4*(this._cubeSize-L);zs(i,I,z,3*L,2*L),p.setRenderTarget(i),p.render(v,sl)}}function x2(r){const e=[],i=[],s=[];let l=r;const c=r-or+1+D_.length;for(let h=0;h<c;h++){const d=Math.pow(2,l);e.push(d);let p=1/d;h>r-or?p=D_[h-r+or-1]:h===0&&(p=0),i.push(p);const m=1/(d-2),g=-m,v=1+m,S=[g,g,v,g,v,v,g,g,v,v,g,v],y=6,E=6,R=3,M=2,_=1,N=new Float32Array(R*E*y),O=new Float32Array(M*E*y),L=new Float32Array(_*E*y);for(let z=0;z<y;z++){const F=z%3*2/3-1,K=z>2?0:-1,C=[F,K,0,F+2/3,K,0,F+2/3,K+1,0,F,K,0,F+2/3,K+1,0,F,K+1,0];N.set(C,R*E*z),O.set(S,M*E*z);const w=[z,z,z,z,z,z];L.set(w,_*E*z)}const I=new Zi;I.setAttribute("position",new Li(N,R)),I.setAttribute("uv",new Li(O,M)),I.setAttribute("faceIndex",new Li(L,_)),s.push(new yn(I,null)),l>or&&l--}return{lodMeshes:s,sizeLods:e,sigmas:i}}function N_(r,e,i){const s=new qi(r,e,i);return s.texture.mapping=Tu,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function zs(r,e,i,s,l){r.viewport.set(e,i,s,l),r.scissor.set(e,i,s,l)}function S2(r,e,i){return new Yi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:v2,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Ru(),fragmentShader:`

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
		`,blending:Ma,depthTest:!1,depthWrite:!1})}function y2(r,e,i){const s=new Float32Array(Pr),l=new Z(0,1,0);return new Yi({name:"SphericalGaussianBlur",defines:{n:Pr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/i,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:l}},vertexShader:Ru(),fragmentShader:`

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
		`,blending:Ma,depthTest:!1,depthWrite:!1})}function L_(){return new Yi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ru(),fragmentShader:`

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
		`,blending:Ma,depthTest:!1,depthWrite:!1})}function O_(){return new Yi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ru(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ma,depthTest:!1,depthWrite:!1})}function Ru(){return`

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
	`}function M2(r){let e=new WeakMap,i=null;function s(d){if(d&&d.isTexture){const p=d.mapping,m=p===Bh||p===zh,g=p===Hr||p===Zs;if(m||g){let v=e.get(d);const S=v!==void 0?v.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==S)return i===null&&(i=new bp(r)),v=m?i.fromEquirectangular(d,v):i.fromCubemap(d,v),v.texture.pmremVersion=d.pmremVersion,e.set(d,v),v.texture;if(v!==void 0)return v.texture;{const y=d.image;return m&&y&&y.height>0||g&&y&&l(y)?(i===null&&(i=new bp(r)),v=m?i.fromEquirectangular(d):i.fromCubemap(d),v.texture.pmremVersion=d.pmremVersion,e.set(d,v),d.addEventListener("dispose",c),v.texture):null}}}return d}function l(d){let p=0;const m=6;for(let g=0;g<m;g++)d[g]!==void 0&&p++;return p===m}function c(d){const p=d.target;p.removeEventListener("dispose",c);const m=e.get(p);m!==void 0&&(e.delete(p),m.dispose())}function h(){e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:h}}function b2(r){const e={};function i(s){if(e[s]!==void 0)return e[s];const l=r.getExtension(s);return e[s]=l,l}return{has:function(s){return i(s)!==null},init:function(){i("EXT_color_buffer_float"),i("WEBGL_clip_cull_distance"),i("OES_texture_float_linear"),i("EXT_color_buffer_half_float"),i("WEBGL_multisampled_render_to_texture"),i("WEBGL_render_shared_exponent")},get:function(s){const l=i(s);return l===null&&_l("WebGLRenderer: "+s+" extension not supported."),l}}}function E2(r,e,i,s){const l={},c=new WeakMap;function h(v){const S=v.target;S.index!==null&&e.remove(S.index);for(const E in S.attributes)e.remove(S.attributes[E]);S.removeEventListener("dispose",h),delete l[S.id];const y=c.get(S);y&&(e.remove(y),c.delete(S)),s.releaseStatesOfGeometry(S),S.isInstancedBufferGeometry===!0&&delete S._maxInstanceCount,i.memory.geometries--}function d(v,S){return l[S.id]===!0||(S.addEventListener("dispose",h),l[S.id]=!0,i.memory.geometries++),S}function p(v){const S=v.attributes;for(const y in S)e.update(S[y],r.ARRAY_BUFFER)}function m(v){const S=[],y=v.index,E=v.attributes.position;let R=0;if(y!==null){const N=y.array;R=y.version;for(let O=0,L=N.length;O<L;O+=3){const I=N[O+0],z=N[O+1],F=N[O+2];S.push(I,z,z,F,F,I)}}else if(E!==void 0){const N=E.array;R=E.version;for(let O=0,L=N.length/3-1;O<L;O+=3){const I=O+0,z=O+1,F=O+2;S.push(I,z,z,F,F,I)}}else return;const M=new(Gx(S)?jx:qx)(S,1);M.version=R;const _=c.get(v);_&&e.remove(_),c.set(v,M)}function g(v){const S=c.get(v);if(S){const y=v.index;y!==null&&S.version<y.version&&m(v)}else m(v);return c.get(v)}return{get:d,update:p,getWireframeAttribute:g}}function T2(r,e,i){let s;function l(S){s=S}let c,h;function d(S){c=S.type,h=S.bytesPerElement}function p(S,y){r.drawElements(s,y,c,S*h),i.update(y,s,1)}function m(S,y,E){E!==0&&(r.drawElementsInstanced(s,y,c,S*h,E),i.update(y,s,E))}function g(S,y,E){if(E===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,y,0,c,S,0,E);let M=0;for(let _=0;_<E;_++)M+=y[_];i.update(M,s,1)}function v(S,y,E,R){if(E===0)return;const M=e.get("WEBGL_multi_draw");if(M===null)for(let _=0;_<S.length;_++)m(S[_]/h,y[_],R[_]);else{M.multiDrawElementsInstancedWEBGL(s,y,0,c,S,0,R,0,E);let _=0;for(let N=0;N<E;N++)_+=y[N]*R[N];i.update(_,s,1)}}this.setMode=l,this.setIndex=d,this.render=p,this.renderInstances=m,this.renderMultiDraw=g,this.renderMultiDrawInstances=v}function A2(r){const e={geometries:0,textures:0},i={frame:0,calls:0,triangles:0,points:0,lines:0};function s(c,h,d){switch(i.calls++,h){case r.TRIANGLES:i.triangles+=d*(c/3);break;case r.LINES:i.lines+=d*(c/2);break;case r.LINE_STRIP:i.lines+=d*(c-1);break;case r.LINE_LOOP:i.lines+=d*c;break;case r.POINTS:i.points+=d*c;break;default:At("WebGLInfo: Unknown draw mode:",h);break}}function l(){i.calls=0,i.triangles=0,i.points=0,i.lines=0}return{memory:e,render:i,programs:null,autoReset:!0,reset:l,update:s}}function R2(r,e,i){const s=new WeakMap,l=new an;function c(h,d,p){const m=h.morphTargetInfluences,g=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,v=g!==void 0?g.length:0;let S=s.get(d);if(S===void 0||S.count!==v){let w=function(){K.dispose(),s.delete(d),d.removeEventListener("dispose",w)};var y=w;S!==void 0&&S.texture.dispose();const E=d.morphAttributes.position!==void 0,R=d.morphAttributes.normal!==void 0,M=d.morphAttributes.color!==void 0,_=d.morphAttributes.position||[],N=d.morphAttributes.normal||[],O=d.morphAttributes.color||[];let L=0;E===!0&&(L=1),R===!0&&(L=2),M===!0&&(L=3);let I=d.attributes.position.count*L,z=1;I>e.maxTextureSize&&(z=Math.ceil(I/e.maxTextureSize),I=e.maxTextureSize);const F=new Float32Array(I*z*4*v),K=new Vx(F,I,z,v);K.type=Ui,K.needsUpdate=!0;const C=L*4;for(let k=0;k<v;k++){const se=_[k],re=N[k],pe=O[k],fe=I*z*4*k;for(let P=0;P<se.count;P++){const H=P*C;E===!0&&(l.fromBufferAttribute(se,P),F[fe+H+0]=l.x,F[fe+H+1]=l.y,F[fe+H+2]=l.z,F[fe+H+3]=0),R===!0&&(l.fromBufferAttribute(re,P),F[fe+H+4]=l.x,F[fe+H+5]=l.y,F[fe+H+6]=l.z,F[fe+H+7]=0),M===!0&&(l.fromBufferAttribute(pe,P),F[fe+H+8]=l.x,F[fe+H+9]=l.y,F[fe+H+10]=l.z,F[fe+H+11]=pe.itemSize===4?l.w:1)}}S={count:v,texture:K,size:new Mt(I,z)},s.set(d,S),d.addEventListener("dispose",w)}if(h.isInstancedMesh===!0&&h.morphTexture!==null)p.getUniforms().setValue(r,"morphTexture",h.morphTexture,i);else{let E=0;for(let M=0;M<m.length;M++)E+=m[M];const R=d.morphTargetsRelative?1:1-E;p.getUniforms().setValue(r,"morphTargetBaseInfluence",R),p.getUniforms().setValue(r,"morphTargetInfluences",m)}p.getUniforms().setValue(r,"morphTargetsTexture",S.texture,i),p.getUniforms().setValue(r,"morphTargetsTextureSize",S.size)}return{update:c}}function C2(r,e,i,s){let l=new WeakMap;function c(p){const m=s.render.frame,g=p.geometry,v=e.get(p,g);if(l.get(v)!==m&&(e.update(v),l.set(v,m)),p.isInstancedMesh&&(p.hasEventListener("dispose",d)===!1&&p.addEventListener("dispose",d),l.get(p)!==m&&(i.update(p.instanceMatrix,r.ARRAY_BUFFER),p.instanceColor!==null&&i.update(p.instanceColor,r.ARRAY_BUFFER),l.set(p,m))),p.isSkinnedMesh){const S=p.skeleton;l.get(S)!==m&&(S.update(),l.set(S,m))}return v}function h(){l=new WeakMap}function d(p){const m=p.target;m.removeEventListener("dispose",d),i.remove(m.instanceMatrix),m.instanceColor!==null&&i.remove(m.instanceColor)}return{update:c,dispose:h}}const w2={[Cx]:"LINEAR_TONE_MAPPING",[wx]:"REINHARD_TONE_MAPPING",[Dx]:"CINEON_TONE_MAPPING",[zp]:"ACES_FILMIC_TONE_MAPPING",[Nx]:"AGX_TONE_MAPPING",[Lx]:"NEUTRAL_TONE_MAPPING",[Ux]:"CUSTOM_TONE_MAPPING"};function D2(r,e,i,s,l){const c=new qi(e,i,{type:r,depthBuffer:s,stencilBuffer:l}),h=new qi(e,i,{type:Ea,depthBuffer:!1,stencilBuffer:!1}),d=new Zi;d.setAttribute("position",new Si([-1,3,0,-1,-1,0,3,-1,0],3)),d.setAttribute("uv",new Si([0,2,0,0,2,0],2));const p=new _1({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),m=new yn(d,p),g=new aS(-1,1,1,-1,0,1);let v=null,S=null,y=!1,E,R=null,M=[],_=!1;this.setSize=function(N,O){c.setSize(N,O),h.setSize(N,O);for(let L=0;L<M.length;L++){const I=M[L];I.setSize&&I.setSize(N,O)}},this.setEffects=function(N){M=N,_=M.length>0&&M[0].isRenderPass===!0;const O=c.width,L=c.height;for(let I=0;I<M.length;I++){const z=M[I];z.setSize&&z.setSize(O,L)}},this.begin=function(N,O){if(y||N.toneMapping===Wi&&M.length===0)return!1;if(R=O,O!==null){const L=O.width,I=O.height;(c.width!==L||c.height!==I)&&this.setSize(L,I)}return _===!1&&N.setRenderTarget(c),E=N.toneMapping,N.toneMapping=Wi,!0},this.hasRenderPass=function(){return _},this.end=function(N,O){N.toneMapping=E,y=!0;let L=c,I=h;for(let z=0;z<M.length;z++){const F=M[z];if(F.enabled!==!1&&(F.render(N,I,L,O),F.needsSwap!==!1)){const K=L;L=I,I=K}}if(v!==N.outputColorSpace||S!==N.toneMapping){v=N.outputColorSpace,S=N.toneMapping,p.defines={},Rt.getTransfer(v)===Ht&&(p.defines.SRGB_TRANSFER="");const z=w2[S];z&&(p.defines[z]=""),p.needsUpdate=!0}p.uniforms.tDiffuse.value=L.texture,N.setRenderTarget(R),N.render(m,g),R=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){c.dispose(),h.dispose(),d.dispose(),p.dispose()}}const sS=new kn,Ep=new Sl(1,1),oS=new Vx,lS=new ZE,cS=new Kx,P_=[],F_=[],I_=new Float32Array(16),B_=new Float32Array(9),z_=new Float32Array(4);function ao(r,e,i){const s=r[0];if(s<=0||s>0)return r;const l=e*i;let c=P_[l];if(c===void 0&&(c=new Float32Array(l),P_[l]=c),e!==0){s.toArray(c,0);for(let h=1,d=0;h!==e;++h)d+=i,r[h].toArray(c,d)}return c}function vn(r,e){if(r.length!==e.length)return!1;for(let i=0,s=r.length;i<s;i++)if(r[i]!==e[i])return!1;return!0}function _n(r,e){for(let i=0,s=e.length;i<s;i++)r[i]=e[i]}function Cu(r,e){let i=F_[e];i===void 0&&(i=new Int32Array(e),F_[e]=i);for(let s=0;s!==e;++s)i[s]=r.allocateTextureUnit();return i}function U2(r,e){const i=this.cache;i[0]!==e&&(r.uniform1f(this.addr,e),i[0]=e)}function N2(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(vn(i,e))return;r.uniform2fv(this.addr,e),_n(i,e)}}function L2(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else if(e.r!==void 0)(i[0]!==e.r||i[1]!==e.g||i[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),i[0]=e.r,i[1]=e.g,i[2]=e.b);else{if(vn(i,e))return;r.uniform3fv(this.addr,e),_n(i,e)}}function O2(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(vn(i,e))return;r.uniform4fv(this.addr,e),_n(i,e)}}function P2(r,e){const i=this.cache,s=e.elements;if(s===void 0){if(vn(i,e))return;r.uniformMatrix2fv(this.addr,!1,e),_n(i,e)}else{if(vn(i,s))return;z_.set(s),r.uniformMatrix2fv(this.addr,!1,z_),_n(i,s)}}function F2(r,e){const i=this.cache,s=e.elements;if(s===void 0){if(vn(i,e))return;r.uniformMatrix3fv(this.addr,!1,e),_n(i,e)}else{if(vn(i,s))return;B_.set(s),r.uniformMatrix3fv(this.addr,!1,B_),_n(i,s)}}function I2(r,e){const i=this.cache,s=e.elements;if(s===void 0){if(vn(i,e))return;r.uniformMatrix4fv(this.addr,!1,e),_n(i,e)}else{if(vn(i,s))return;I_.set(s),r.uniformMatrix4fv(this.addr,!1,I_),_n(i,s)}}function B2(r,e){const i=this.cache;i[0]!==e&&(r.uniform1i(this.addr,e),i[0]=e)}function z2(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(vn(i,e))return;r.uniform2iv(this.addr,e),_n(i,e)}}function H2(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(vn(i,e))return;r.uniform3iv(this.addr,e),_n(i,e)}}function G2(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(vn(i,e))return;r.uniform4iv(this.addr,e),_n(i,e)}}function V2(r,e){const i=this.cache;i[0]!==e&&(r.uniform1ui(this.addr,e),i[0]=e)}function k2(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),i[0]=e.x,i[1]=e.y);else{if(vn(i,e))return;r.uniform2uiv(this.addr,e),_n(i,e)}}function X2(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),i[0]=e.x,i[1]=e.y,i[2]=e.z);else{if(vn(i,e))return;r.uniform3uiv(this.addr,e),_n(i,e)}}function W2(r,e){const i=this.cache;if(e.x!==void 0)(i[0]!==e.x||i[1]!==e.y||i[2]!==e.z||i[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),i[0]=e.x,i[1]=e.y,i[2]=e.z,i[3]=e.w);else{if(vn(i,e))return;r.uniform4uiv(this.addr,e),_n(i,e)}}function q2(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l);let c;this.type===r.SAMPLER_2D_SHADOW?(Ep.compareFunction=i.isReversedDepthBuffer()?Zp:Yp,c=Ep):c=sS,i.setTexture2D(e||c,l)}function j2(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture3D(e||lS,l)}function Y2(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTextureCube(e||cS,l)}function Z2(r,e,i){const s=this.cache,l=i.allocateTextureUnit();s[0]!==l&&(r.uniform1i(this.addr,l),s[0]=l),i.setTexture2DArray(e||oS,l)}function K2(r){switch(r){case 5126:return U2;case 35664:return N2;case 35665:return L2;case 35666:return O2;case 35674:return P2;case 35675:return F2;case 35676:return I2;case 5124:case 35670:return B2;case 35667:case 35671:return z2;case 35668:case 35672:return H2;case 35669:case 35673:return G2;case 5125:return V2;case 36294:return k2;case 36295:return X2;case 36296:return W2;case 35678:case 36198:case 36298:case 36306:case 35682:return q2;case 35679:case 36299:case 36307:return j2;case 35680:case 36300:case 36308:case 36293:return Y2;case 36289:case 36303:case 36311:case 36292:return Z2}}function Q2(r,e){r.uniform1fv(this.addr,e)}function $2(r,e){const i=ao(e,this.size,2);r.uniform2fv(this.addr,i)}function J2(r,e){const i=ao(e,this.size,3);r.uniform3fv(this.addr,i)}function eR(r,e){const i=ao(e,this.size,4);r.uniform4fv(this.addr,i)}function tR(r,e){const i=ao(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,i)}function nR(r,e){const i=ao(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,i)}function iR(r,e){const i=ao(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,i)}function aR(r,e){r.uniform1iv(this.addr,e)}function rR(r,e){r.uniform2iv(this.addr,e)}function sR(r,e){r.uniform3iv(this.addr,e)}function oR(r,e){r.uniform4iv(this.addr,e)}function lR(r,e){r.uniform1uiv(this.addr,e)}function cR(r,e){r.uniform2uiv(this.addr,e)}function uR(r,e){r.uniform3uiv(this.addr,e)}function fR(r,e){r.uniform4uiv(this.addr,e)}function dR(r,e,i){const s=this.cache,l=e.length,c=Cu(i,l);vn(s,c)||(r.uniform1iv(this.addr,c),_n(s,c));let h;this.type===r.SAMPLER_2D_SHADOW?h=Ep:h=sS;for(let d=0;d!==l;++d)i.setTexture2D(e[d]||h,c[d])}function hR(r,e,i){const s=this.cache,l=e.length,c=Cu(i,l);vn(s,c)||(r.uniform1iv(this.addr,c),_n(s,c));for(let h=0;h!==l;++h)i.setTexture3D(e[h]||lS,c[h])}function pR(r,e,i){const s=this.cache,l=e.length,c=Cu(i,l);vn(s,c)||(r.uniform1iv(this.addr,c),_n(s,c));for(let h=0;h!==l;++h)i.setTextureCube(e[h]||cS,c[h])}function mR(r,e,i){const s=this.cache,l=e.length,c=Cu(i,l);vn(s,c)||(r.uniform1iv(this.addr,c),_n(s,c));for(let h=0;h!==l;++h)i.setTexture2DArray(e[h]||oS,c[h])}function gR(r){switch(r){case 5126:return Q2;case 35664:return $2;case 35665:return J2;case 35666:return eR;case 35674:return tR;case 35675:return nR;case 35676:return iR;case 5124:case 35670:return aR;case 35667:case 35671:return rR;case 35668:case 35672:return sR;case 35669:case 35673:return oR;case 5125:return lR;case 36294:return cR;case 36295:return uR;case 36296:return fR;case 35678:case 36198:case 36298:case 36306:case 35682:return dR;case 35679:case 36299:case 36307:return hR;case 35680:case 36300:case 36308:case 36293:return pR;case 36289:case 36303:case 36311:case 36292:return mR}}class vR{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.setValue=K2(i.type)}}class _R{constructor(e,i,s){this.id=e,this.addr=s,this.cache=[],this.type=i.type,this.size=i.size,this.setValue=gR(i.type)}}class xR{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,i,s){const l=this.seq;for(let c=0,h=l.length;c!==h;++c){const d=l[c];d.setValue(e,i[d.id],s)}}}const vh=/(\w+)(\])?(\[|\.)?/g;function H_(r,e){r.seq.push(e),r.map[e.id]=e}function SR(r,e,i){const s=r.name,l=s.length;for(vh.lastIndex=0;;){const c=vh.exec(s),h=vh.lastIndex;let d=c[1];const p=c[2]==="]",m=c[3];if(p&&(d=d|0),m===void 0||m==="["&&h+2===l){H_(i,m===void 0?new vR(d,r,e):new _R(d,r,e));break}else{let v=i.map[d];v===void 0&&(v=new xR(d),H_(i,v)),i=v}}}class gu{constructor(e,i){this.seq=[],this.map={};const s=e.getProgramParameter(i,e.ACTIVE_UNIFORMS);for(let h=0;h<s;++h){const d=e.getActiveUniform(i,h),p=e.getUniformLocation(i,d.name);SR(d,p,this)}const l=[],c=[];for(const h of this.seq)h.type===e.SAMPLER_2D_SHADOW||h.type===e.SAMPLER_CUBE_SHADOW||h.type===e.SAMPLER_2D_ARRAY_SHADOW?l.push(h):c.push(h);l.length>0&&(this.seq=l.concat(c))}setValue(e,i,s,l){const c=this.map[i];c!==void 0&&c.setValue(e,s,l)}setOptional(e,i,s){const l=i[s];l!==void 0&&this.setValue(e,s,l)}static upload(e,i,s,l){for(let c=0,h=i.length;c!==h;++c){const d=i[c],p=s[d.id];p.needsUpdate!==!1&&d.setValue(e,p.value,l)}}static seqWithValue(e,i){const s=[];for(let l=0,c=e.length;l!==c;++l){const h=e[l];h.id in i&&s.push(h)}return s}}function G_(r,e,i){const s=r.createShader(e);return r.shaderSource(s,i),r.compileShader(s),s}const yR=37297;let MR=0;function bR(r,e){const i=r.split(`
`),s=[],l=Math.max(e-6,0),c=Math.min(e+6,i.length);for(let h=l;h<c;h++){const d=h+1;s.push(`${d===e?">":" "} ${d}: ${i[h]}`)}return s.join(`
`)}const V_=new dt;function ER(r){Rt._getMatrix(V_,Rt.workingColorSpace,r);const e=`mat3( ${V_.elements.map(i=>i.toFixed(4))} )`;switch(Rt.getTransfer(r)){case xu:return[e,"LinearTransferOETF"];case Ht:return[e,"sRGBTransferOETF"];default:return rt("WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function k_(r,e,i){const s=r.getShaderParameter(e,r.COMPILE_STATUS),c=(r.getShaderInfoLog(e)||"").trim();if(s&&c==="")return"";const h=/ERROR: 0:(\d+)/.exec(c);if(h){const d=parseInt(h[1]);return i.toUpperCase()+`

`+c+`

`+bR(r.getShaderSource(e),d)}else return c}function TR(r,e){const i=ER(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${i[1]}( vec4( value.rgb * ${i[0]}, value.a ) );`,"}"].join(`
`)}const AR={[Cx]:"Linear",[wx]:"Reinhard",[Dx]:"Cineon",[zp]:"ACESFilmic",[Nx]:"AgX",[Lx]:"Neutral",[Ux]:"Custom"};function RR(r,e){const i=AR[e];return i===void 0?(rt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+i+"ToneMapping( color ); }"}const su=new Z;function CR(){Rt.getLuminanceCoefficients(su);const r=su.x.toFixed(4),e=su.y.toFixed(4),i=su.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${i} );`,"	return dot( weights, rgb );","}"].join(`
`)}function wR(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(cl).join(`
`)}function DR(r){const e=[];for(const i in r){const s=r[i];s!==!1&&e.push("#define "+i+" "+s)}return e.join(`
`)}function UR(r,e){const i={},s=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let l=0;l<s;l++){const c=r.getActiveAttrib(e,l),h=c.name;let d=1;c.type===r.FLOAT_MAT2&&(d=2),c.type===r.FLOAT_MAT3&&(d=3),c.type===r.FLOAT_MAT4&&(d=4),i[h]={type:c.type,location:r.getAttribLocation(e,h),locationSize:d}}return i}function cl(r){return r!==""}function X_(r,e){const i=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,i).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function W_(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const NR=/^[ \t]*#include +<([\w\d./]+)>/gm;function Tp(r){return r.replace(NR,OR)}const LR=new Map;function OR(r,e){let i=ft[e];if(i===void 0){const s=LR.get(e);if(s!==void 0)i=ft[s],rt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,s);else throw new Error("Can not resolve #include <"+e+">")}return Tp(i)}const PR=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function q_(r){return r.replace(PR,FR)}function FR(r,e,i,s){let l="";for(let c=parseInt(e);c<parseInt(i);c++)l+=s.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function j_(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const IR={[fu]:"SHADOWMAP_TYPE_PCF",[ll]:"SHADOWMAP_TYPE_VSM"};function BR(r){return IR[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const zR={[Hr]:"ENVMAP_TYPE_CUBE",[Zs]:"ENVMAP_TYPE_CUBE",[Tu]:"ENVMAP_TYPE_CUBE_UV"};function HR(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":zR[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const GR={[Zs]:"ENVMAP_MODE_REFRACTION"};function VR(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":GR[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const kR={[Bp]:"ENVMAP_BLENDING_MULTIPLY",[mE]:"ENVMAP_BLENDING_MIX",[gE]:"ENVMAP_BLENDING_ADD"};function XR(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":kR[r.combine]||"ENVMAP_BLENDING_NONE"}function WR(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const i=Math.log2(e)-2,s=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,i),112)),texelHeight:s,maxMip:i}}function qR(r,e,i,s){const l=r.getContext(),c=i.defines;let h=i.vertexShader,d=i.fragmentShader;const p=BR(i),m=HR(i),g=VR(i),v=XR(i),S=WR(i),y=wR(i),E=DR(c),R=l.createProgram();let M,_,N=i.glslVersion?"#version "+i.glslVersion+`
`:"";i.isRawShaderMaterial?(M=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(cl).join(`
`),M.length>0&&(M+=`
`),_=["#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E].filter(cl).join(`
`),_.length>0&&(_+=`
`)):(M=[j_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",i.batching?"#define USE_BATCHING":"",i.batchingColor?"#define USE_BATCHING_COLOR":"",i.instancing?"#define USE_INSTANCING":"",i.instancingColor?"#define USE_INSTANCING_COLOR":"",i.instancingMorph?"#define USE_INSTANCING_MORPH":"",i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.map?"#define USE_MAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+g:"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.displacementMap?"#define USE_DISPLACEMENTMAP":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.mapUv?"#define MAP_UV "+i.mapUv:"",i.alphaMapUv?"#define ALPHAMAP_UV "+i.alphaMapUv:"",i.lightMapUv?"#define LIGHTMAP_UV "+i.lightMapUv:"",i.aoMapUv?"#define AOMAP_UV "+i.aoMapUv:"",i.emissiveMapUv?"#define EMISSIVEMAP_UV "+i.emissiveMapUv:"",i.bumpMapUv?"#define BUMPMAP_UV "+i.bumpMapUv:"",i.normalMapUv?"#define NORMALMAP_UV "+i.normalMapUv:"",i.displacementMapUv?"#define DISPLACEMENTMAP_UV "+i.displacementMapUv:"",i.metalnessMapUv?"#define METALNESSMAP_UV "+i.metalnessMapUv:"",i.roughnessMapUv?"#define ROUGHNESSMAP_UV "+i.roughnessMapUv:"",i.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+i.anisotropyMapUv:"",i.clearcoatMapUv?"#define CLEARCOATMAP_UV "+i.clearcoatMapUv:"",i.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+i.clearcoatNormalMapUv:"",i.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+i.clearcoatRoughnessMapUv:"",i.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+i.iridescenceMapUv:"",i.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+i.iridescenceThicknessMapUv:"",i.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+i.sheenColorMapUv:"",i.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+i.sheenRoughnessMapUv:"",i.specularMapUv?"#define SPECULARMAP_UV "+i.specularMapUv:"",i.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+i.specularColorMapUv:"",i.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+i.specularIntensityMapUv:"",i.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+i.transmissionMapUv:"",i.thicknessMapUv?"#define THICKNESSMAP_UV "+i.thicknessMapUv:"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.flatShading?"#define FLAT_SHADED":"",i.skinning?"#define USE_SKINNING":"",i.morphTargets?"#define USE_MORPHTARGETS":"",i.morphNormals&&i.flatShading===!1?"#define USE_MORPHNORMALS":"",i.morphColors?"#define USE_MORPHCOLORS":"",i.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+i.morphTextureStride:"",i.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+i.morphTargetsCount:"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.sizeAttenuation?"#define USE_SIZEATTENUATION":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(cl).join(`
`),_=[j_(i),"#define SHADER_TYPE "+i.shaderType,"#define SHADER_NAME "+i.shaderName,E,i.useFog&&i.fog?"#define USE_FOG":"",i.useFog&&i.fogExp2?"#define FOG_EXP2":"",i.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",i.map?"#define USE_MAP":"",i.matcap?"#define USE_MATCAP":"",i.envMap?"#define USE_ENVMAP":"",i.envMap?"#define "+m:"",i.envMap?"#define "+g:"",i.envMap?"#define "+v:"",S?"#define CUBEUV_TEXEL_WIDTH "+S.texelWidth:"",S?"#define CUBEUV_TEXEL_HEIGHT "+S.texelHeight:"",S?"#define CUBEUV_MAX_MIP "+S.maxMip+".0":"",i.lightMap?"#define USE_LIGHTMAP":"",i.aoMap?"#define USE_AOMAP":"",i.bumpMap?"#define USE_BUMPMAP":"",i.normalMap?"#define USE_NORMALMAP":"",i.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",i.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",i.emissiveMap?"#define USE_EMISSIVEMAP":"",i.anisotropy?"#define USE_ANISOTROPY":"",i.anisotropyMap?"#define USE_ANISOTROPYMAP":"",i.clearcoat?"#define USE_CLEARCOAT":"",i.clearcoatMap?"#define USE_CLEARCOATMAP":"",i.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",i.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",i.dispersion?"#define USE_DISPERSION":"",i.iridescence?"#define USE_IRIDESCENCE":"",i.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",i.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",i.specularMap?"#define USE_SPECULARMAP":"",i.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",i.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",i.roughnessMap?"#define USE_ROUGHNESSMAP":"",i.metalnessMap?"#define USE_METALNESSMAP":"",i.alphaMap?"#define USE_ALPHAMAP":"",i.alphaTest?"#define USE_ALPHATEST":"",i.alphaHash?"#define USE_ALPHAHASH":"",i.sheen?"#define USE_SHEEN":"",i.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",i.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",i.transmission?"#define USE_TRANSMISSION":"",i.transmissionMap?"#define USE_TRANSMISSIONMAP":"",i.thicknessMap?"#define USE_THICKNESSMAP":"",i.vertexTangents&&i.flatShading===!1?"#define USE_TANGENT":"",i.vertexColors||i.instancingColor||i.batchingColor?"#define USE_COLOR":"",i.vertexAlphas?"#define USE_COLOR_ALPHA":"",i.vertexUv1s?"#define USE_UV1":"",i.vertexUv2s?"#define USE_UV2":"",i.vertexUv3s?"#define USE_UV3":"",i.pointsUvs?"#define USE_POINTS_UV":"",i.gradientMap?"#define USE_GRADIENTMAP":"",i.flatShading?"#define FLAT_SHADED":"",i.doubleSided?"#define DOUBLE_SIDED":"",i.flipSided?"#define FLIP_SIDED":"",i.shadowMapEnabled?"#define USE_SHADOWMAP":"",i.shadowMapEnabled?"#define "+p:"",i.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",i.numLightProbes>0?"#define USE_LIGHT_PROBES":"",i.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",i.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",i.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",i.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",i.toneMapping!==Wi?"#define TONE_MAPPING":"",i.toneMapping!==Wi?ft.tonemapping_pars_fragment:"",i.toneMapping!==Wi?RR("toneMapping",i.toneMapping):"",i.dithering?"#define DITHERING":"",i.opaque?"#define OPAQUE":"",ft.colorspace_pars_fragment,TR("linearToOutputTexel",i.outputColorSpace),CR(),i.useDepthPacking?"#define DEPTH_PACKING "+i.depthPacking:"",`
`].filter(cl).join(`
`)),h=Tp(h),h=X_(h,i),h=W_(h,i),d=Tp(d),d=X_(d,i),d=W_(d,i),h=q_(h),d=q_(d),i.isRawShaderMaterial!==!0&&(N=`#version 300 es
`,M=[y,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,_=["#define varying in",i.glslVersion===n_?"":"layout(location = 0) out highp vec4 pc_fragColor;",i.glslVersion===n_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const O=N+M+h,L=N+_+d,I=G_(l,l.VERTEX_SHADER,O),z=G_(l,l.FRAGMENT_SHADER,L);l.attachShader(R,I),l.attachShader(R,z),i.index0AttributeName!==void 0?l.bindAttribLocation(R,0,i.index0AttributeName):i.morphTargets===!0&&l.bindAttribLocation(R,0,"position"),l.linkProgram(R);function F(k){if(r.debug.checkShaderErrors){const se=l.getProgramInfoLog(R)||"",re=l.getShaderInfoLog(I)||"",pe=l.getShaderInfoLog(z)||"",fe=se.trim(),P=re.trim(),H=pe.trim();let ae=!0,Me=!0;if(l.getProgramParameter(R,l.LINK_STATUS)===!1)if(ae=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(l,R,I,z);else{const Se=k_(l,I,"vertex"),U=k_(l,z,"fragment");At("THREE.WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(R,l.VALIDATE_STATUS)+`

Material Name: `+k.name+`
Material Type: `+k.type+`

Program Info Log: `+fe+`
`+Se+`
`+U)}else fe!==""?rt("WebGLProgram: Program Info Log:",fe):(P===""||H==="")&&(Me=!1);Me&&(k.diagnostics={runnable:ae,programLog:fe,vertexShader:{log:P,prefix:M},fragmentShader:{log:H,prefix:_}})}l.deleteShader(I),l.deleteShader(z),K=new gu(l,R),C=UR(l,R)}let K;this.getUniforms=function(){return K===void 0&&F(this),K};let C;this.getAttributes=function(){return C===void 0&&F(this),C};let w=i.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return w===!1&&(w=l.getProgramParameter(R,yR)),w},this.destroy=function(){s.releaseStatesOfProgram(this),l.deleteProgram(R),this.program=void 0},this.type=i.shaderType,this.name=i.shaderName,this.id=MR++,this.cacheKey=e,this.usedTimes=1,this.program=R,this.vertexShader=I,this.fragmentShader=z,this}let jR=0;class YR{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const i=e.vertexShader,s=e.fragmentShader,l=this._getShaderStage(i),c=this._getShaderStage(s),h=this._getShaderCacheForMaterial(e);return h.has(l)===!1&&(h.add(l),l.usedTimes++),h.has(c)===!1&&(h.add(c),c.usedTimes++),this}remove(e){const i=this.materialCache.get(e);for(const s of i)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const i=this.materialCache;let s=i.get(e);return s===void 0&&(s=new Set,i.set(e,s)),s}_getShaderStage(e){const i=this.shaderCache;let s=i.get(e);return s===void 0&&(s=new ZR(e),i.set(e,s)),s}}class ZR{constructor(e){this.id=jR++,this.code=e,this.usedTimes=0}}function KR(r,e,i,s,l,c,h){const d=new $p,p=new YR,m=new Set,g=[],v=new Map,S=l.logarithmicDepthBuffer;let y=l.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function R(C){return m.add(C),C===0?"uv":`uv${C}`}function M(C,w,k,se,re){const pe=se.fog,fe=re.geometry,P=C.isMeshStandardMaterial?se.environment:null,H=(C.isMeshStandardMaterial?i:e).get(C.envMap||P),ae=H&&H.mapping===Tu?H.image.height:null,Me=E[C.type];C.precision!==null&&(y=l.getMaxPrecision(C.precision),y!==C.precision&&rt("WebGLProgram.getParameters:",C.precision,"not supported, using",y,"instead."));const Se=fe.morphAttributes.position||fe.morphAttributes.normal||fe.morphAttributes.color,U=Se!==void 0?Se.length:0;let ie=0;fe.morphAttributes.position!==void 0&&(ie=1),fe.morphAttributes.normal!==void 0&&(ie=2),fe.morphAttributes.color!==void 0&&(ie=3);let ve,Re,He,ne;if(Me){const Tt=Vi[Me];ve=Tt.vertexShader,Re=Tt.fragmentShader}else ve=C.vertexShader,Re=C.fragmentShader,p.update(C),He=p.getVertexShaderID(C),ne=p.getFragmentShaderID(C);const ue=r.getRenderTarget(),Ue=r.state.buffers.depth.getReversed(),Xe=re.isInstancedMesh===!0,Ge=re.isBatchedMesh===!0,pt=!!C.map,Jt=!!C.matcap,xt=!!H,mt=!!C.aoMap,Dt=!!C.lightMap,ot=!!C.bumpMap,en=!!C.normalMap,G=!!C.displacementMap,Kt=!!C.emissiveMap,Et=!!C.metalnessMap,Ot=!!C.roughnessMap,Ye=C.anisotropy>0,D=C.clearcoat>0,b=C.dispersion>0,W=C.iridescence>0,he=C.sheen>0,xe=C.transmission>0,ce=Ye&&!!C.anisotropyMap,Ke=D&&!!C.clearcoatMap,we=D&&!!C.clearcoatNormalMap,We=D&&!!C.clearcoatRoughnessMap,nt=W&&!!C.iridescenceMap,be=W&&!!C.iridescenceThicknessMap,Ee=he&&!!C.sheenColorMap,Be=he&&!!C.sheenRoughnessMap,Fe=!!C.specularMap,De=!!C.specularColorMap,ct=!!C.specularIntensityMap,X=xe&&!!C.transmissionMap,Le=xe&&!!C.thicknessMap,Te=!!C.gradientMap,Ie=!!C.alphaMap,ye=C.alphaTest>0,_e=!!C.alphaHash,Ce=!!C.extensions;let it=Wi;C.toneMapped&&(ue===null||ue.isXRRenderTarget===!0)&&(it=r.toneMapping);const Ft={shaderID:Me,shaderType:C.type,shaderName:C.name,vertexShader:ve,fragmentShader:Re,defines:C.defines,customVertexShaderID:He,customFragmentShaderID:ne,isRawShaderMaterial:C.isRawShaderMaterial===!0,glslVersion:C.glslVersion,precision:y,batching:Ge,batchingColor:Ge&&re._colorsTexture!==null,instancing:Xe,instancingColor:Xe&&re.instanceColor!==null,instancingMorph:Xe&&re.morphTexture!==null,outputColorSpace:ue===null?r.outputColorSpace:ue.isXRRenderTarget===!0?ue.texture.colorSpace:Qs,alphaToCoverage:!!C.alphaToCoverage,map:pt,matcap:Jt,envMap:xt,envMapMode:xt&&H.mapping,envMapCubeUVHeight:ae,aoMap:mt,lightMap:Dt,bumpMap:ot,normalMap:en,displacementMap:G,emissiveMap:Kt,normalMapObjectSpace:en&&C.normalMapType===xE,normalMapTangentSpace:en&&C.normalMapType===jp,metalnessMap:Et,roughnessMap:Ot,anisotropy:Ye,anisotropyMap:ce,clearcoat:D,clearcoatMap:Ke,clearcoatNormalMap:we,clearcoatRoughnessMap:We,dispersion:b,iridescence:W,iridescenceMap:nt,iridescenceThicknessMap:be,sheen:he,sheenColorMap:Ee,sheenRoughnessMap:Be,specularMap:Fe,specularColorMap:De,specularIntensityMap:ct,transmission:xe,transmissionMap:X,thicknessMap:Le,gradientMap:Te,opaque:C.transparent===!1&&C.blending===qs&&C.alphaToCoverage===!1,alphaMap:Ie,alphaTest:ye,alphaHash:_e,combine:C.combine,mapUv:pt&&R(C.map.channel),aoMapUv:mt&&R(C.aoMap.channel),lightMapUv:Dt&&R(C.lightMap.channel),bumpMapUv:ot&&R(C.bumpMap.channel),normalMapUv:en&&R(C.normalMap.channel),displacementMapUv:G&&R(C.displacementMap.channel),emissiveMapUv:Kt&&R(C.emissiveMap.channel),metalnessMapUv:Et&&R(C.metalnessMap.channel),roughnessMapUv:Ot&&R(C.roughnessMap.channel),anisotropyMapUv:ce&&R(C.anisotropyMap.channel),clearcoatMapUv:Ke&&R(C.clearcoatMap.channel),clearcoatNormalMapUv:we&&R(C.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:We&&R(C.clearcoatRoughnessMap.channel),iridescenceMapUv:nt&&R(C.iridescenceMap.channel),iridescenceThicknessMapUv:be&&R(C.iridescenceThicknessMap.channel),sheenColorMapUv:Ee&&R(C.sheenColorMap.channel),sheenRoughnessMapUv:Be&&R(C.sheenRoughnessMap.channel),specularMapUv:Fe&&R(C.specularMap.channel),specularColorMapUv:De&&R(C.specularColorMap.channel),specularIntensityMapUv:ct&&R(C.specularIntensityMap.channel),transmissionMapUv:X&&R(C.transmissionMap.channel),thicknessMapUv:Le&&R(C.thicknessMap.channel),alphaMapUv:Ie&&R(C.alphaMap.channel),vertexTangents:!!fe.attributes.tangent&&(en||Ye),vertexColors:C.vertexColors,vertexAlphas:C.vertexColors===!0&&!!fe.attributes.color&&fe.attributes.color.itemSize===4,pointsUvs:re.isPoints===!0&&!!fe.attributes.uv&&(pt||Ie),fog:!!pe,useFog:C.fog===!0,fogExp2:!!pe&&pe.isFogExp2,flatShading:C.flatShading===!0&&C.wireframe===!1,sizeAttenuation:C.sizeAttenuation===!0,logarithmicDepthBuffer:S,reversedDepthBuffer:Ue,skinning:re.isSkinnedMesh===!0,morphTargets:fe.morphAttributes.position!==void 0,morphNormals:fe.morphAttributes.normal!==void 0,morphColors:fe.morphAttributes.color!==void 0,morphTargetsCount:U,morphTextureStride:ie,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numLightProbes:w.numLightProbes,numClippingPlanes:h.numPlanes,numClipIntersection:h.numIntersection,dithering:C.dithering,shadowMapEnabled:r.shadowMap.enabled&&k.length>0,shadowMapType:r.shadowMap.type,toneMapping:it,decodeVideoTexture:pt&&C.map.isVideoTexture===!0&&Rt.getTransfer(C.map.colorSpace)===Ht,decodeVideoTextureEmissive:Kt&&C.emissiveMap.isVideoTexture===!0&&Rt.getTransfer(C.emissiveMap.colorSpace)===Ht,premultipliedAlpha:C.premultipliedAlpha,doubleSided:C.side===xa,flipSided:C.side===Vn,useDepthPacking:C.depthPacking>=0,depthPacking:C.depthPacking||0,index0AttributeName:C.index0AttributeName,extensionClipCullDistance:Ce&&C.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ce&&C.extensions.multiDraw===!0||Ge)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:C.customProgramCacheKey()};return Ft.vertexUv1s=m.has(1),Ft.vertexUv2s=m.has(2),Ft.vertexUv3s=m.has(3),m.clear(),Ft}function _(C){const w=[];if(C.shaderID?w.push(C.shaderID):(w.push(C.customVertexShaderID),w.push(C.customFragmentShaderID)),C.defines!==void 0)for(const k in C.defines)w.push(k),w.push(C.defines[k]);return C.isRawShaderMaterial===!1&&(N(w,C),O(w,C),w.push(r.outputColorSpace)),w.push(C.customProgramCacheKey),w.join()}function N(C,w){C.push(w.precision),C.push(w.outputColorSpace),C.push(w.envMapMode),C.push(w.envMapCubeUVHeight),C.push(w.mapUv),C.push(w.alphaMapUv),C.push(w.lightMapUv),C.push(w.aoMapUv),C.push(w.bumpMapUv),C.push(w.normalMapUv),C.push(w.displacementMapUv),C.push(w.emissiveMapUv),C.push(w.metalnessMapUv),C.push(w.roughnessMapUv),C.push(w.anisotropyMapUv),C.push(w.clearcoatMapUv),C.push(w.clearcoatNormalMapUv),C.push(w.clearcoatRoughnessMapUv),C.push(w.iridescenceMapUv),C.push(w.iridescenceThicknessMapUv),C.push(w.sheenColorMapUv),C.push(w.sheenRoughnessMapUv),C.push(w.specularMapUv),C.push(w.specularColorMapUv),C.push(w.specularIntensityMapUv),C.push(w.transmissionMapUv),C.push(w.thicknessMapUv),C.push(w.combine),C.push(w.fogExp2),C.push(w.sizeAttenuation),C.push(w.morphTargetsCount),C.push(w.morphAttributeCount),C.push(w.numDirLights),C.push(w.numPointLights),C.push(w.numSpotLights),C.push(w.numSpotLightMaps),C.push(w.numHemiLights),C.push(w.numRectAreaLights),C.push(w.numDirLightShadows),C.push(w.numPointLightShadows),C.push(w.numSpotLightShadows),C.push(w.numSpotLightShadowsWithMaps),C.push(w.numLightProbes),C.push(w.shadowMapType),C.push(w.toneMapping),C.push(w.numClippingPlanes),C.push(w.numClipIntersection),C.push(w.depthPacking)}function O(C,w){d.disableAll(),w.instancing&&d.enable(0),w.instancingColor&&d.enable(1),w.instancingMorph&&d.enable(2),w.matcap&&d.enable(3),w.envMap&&d.enable(4),w.normalMapObjectSpace&&d.enable(5),w.normalMapTangentSpace&&d.enable(6),w.clearcoat&&d.enable(7),w.iridescence&&d.enable(8),w.alphaTest&&d.enable(9),w.vertexColors&&d.enable(10),w.vertexAlphas&&d.enable(11),w.vertexUv1s&&d.enable(12),w.vertexUv2s&&d.enable(13),w.vertexUv3s&&d.enable(14),w.vertexTangents&&d.enable(15),w.anisotropy&&d.enable(16),w.alphaHash&&d.enable(17),w.batching&&d.enable(18),w.dispersion&&d.enable(19),w.batchingColor&&d.enable(20),w.gradientMap&&d.enable(21),C.push(d.mask),d.disableAll(),w.fog&&d.enable(0),w.useFog&&d.enable(1),w.flatShading&&d.enable(2),w.logarithmicDepthBuffer&&d.enable(3),w.reversedDepthBuffer&&d.enable(4),w.skinning&&d.enable(5),w.morphTargets&&d.enable(6),w.morphNormals&&d.enable(7),w.morphColors&&d.enable(8),w.premultipliedAlpha&&d.enable(9),w.shadowMapEnabled&&d.enable(10),w.doubleSided&&d.enable(11),w.flipSided&&d.enable(12),w.useDepthPacking&&d.enable(13),w.dithering&&d.enable(14),w.transmission&&d.enable(15),w.sheen&&d.enable(16),w.opaque&&d.enable(17),w.pointsUvs&&d.enable(18),w.decodeVideoTexture&&d.enable(19),w.decodeVideoTextureEmissive&&d.enable(20),w.alphaToCoverage&&d.enable(21),C.push(d.mask)}function L(C){const w=E[C.type];let k;if(w){const se=Vi[w];k=l1.clone(se.uniforms)}else k=C.uniforms;return k}function I(C,w){let k=v.get(w);return k!==void 0?++k.usedTimes:(k=new qR(r,w,C,c),g.push(k),v.set(w,k)),k}function z(C){if(--C.usedTimes===0){const w=g.indexOf(C);g[w]=g[g.length-1],g.pop(),v.delete(C.cacheKey),C.destroy()}}function F(C){p.remove(C)}function K(){p.dispose()}return{getParameters:M,getProgramCacheKey:_,getUniforms:L,acquireProgram:I,releaseProgram:z,releaseShaderCache:F,programs:g,dispose:K}}function QR(){let r=new WeakMap;function e(h){return r.has(h)}function i(h){let d=r.get(h);return d===void 0&&(d={},r.set(h,d)),d}function s(h){r.delete(h)}function l(h,d,p){r.get(h)[d]=p}function c(){r=new WeakMap}return{has:e,get:i,remove:s,update:l,dispose:c}}function $R(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function Y_(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Z_(){const r=[];let e=0;const i=[],s=[],l=[];function c(){e=0,i.length=0,s.length=0,l.length=0}function h(v,S,y,E,R,M){let _=r[e];return _===void 0?(_={id:v.id,object:v,geometry:S,material:y,groupOrder:E,renderOrder:v.renderOrder,z:R,group:M},r[e]=_):(_.id=v.id,_.object=v,_.geometry=S,_.material=y,_.groupOrder=E,_.renderOrder=v.renderOrder,_.z=R,_.group=M),e++,_}function d(v,S,y,E,R,M){const _=h(v,S,y,E,R,M);y.transmission>0?s.push(_):y.transparent===!0?l.push(_):i.push(_)}function p(v,S,y,E,R,M){const _=h(v,S,y,E,R,M);y.transmission>0?s.unshift(_):y.transparent===!0?l.unshift(_):i.unshift(_)}function m(v,S){i.length>1&&i.sort(v||$R),s.length>1&&s.sort(S||Y_),l.length>1&&l.sort(S||Y_)}function g(){for(let v=e,S=r.length;v<S;v++){const y=r[v];if(y.id===null)break;y.id=null,y.object=null,y.geometry=null,y.material=null,y.group=null}}return{opaque:i,transmissive:s,transparent:l,init:c,push:d,unshift:p,finish:g,sort:m}}function JR(){let r=new WeakMap;function e(s,l){const c=r.get(s);let h;return c===void 0?(h=new Z_,r.set(s,[h])):l>=c.length?(h=new Z_,c.push(h)):h=c[l],h}function i(){r=new WeakMap}return{get:e,dispose:i}}function e3(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let i;switch(e.type){case"DirectionalLight":i={direction:new Z,color:new ht};break;case"SpotLight":i={position:new Z,direction:new Z,color:new ht,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":i={position:new Z,color:new ht,distance:0,decay:0};break;case"HemisphereLight":i={direction:new Z,skyColor:new ht,groundColor:new ht};break;case"RectAreaLight":i={color:new ht,position:new Z,halfWidth:new Z,halfHeight:new Z};break}return r[e.id]=i,i}}}function t3(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let i;switch(e.type){case"DirectionalLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Mt};break;case"SpotLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Mt};break;case"PointLight":i={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Mt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=i,i}}}let n3=0;function i3(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function a3(r){const e=new e3,i=t3(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)s.probe.push(new Z);const l=new Z,c=new qt,h=new qt;function d(m){let g=0,v=0,S=0;for(let C=0;C<9;C++)s.probe[C].set(0,0,0);let y=0,E=0,R=0,M=0,_=0,N=0,O=0,L=0,I=0,z=0,F=0;m.sort(i3);for(let C=0,w=m.length;C<w;C++){const k=m[C],se=k.color,re=k.intensity,pe=k.distance;let fe=null;if(k.shadow&&k.shadow.map&&(k.shadow.map.texture.format===Ks?fe=k.shadow.map.texture:fe=k.shadow.map.depthTexture||k.shadow.map.texture),k.isAmbientLight)g+=se.r*re,v+=se.g*re,S+=se.b*re;else if(k.isLightProbe){for(let P=0;P<9;P++)s.probe[P].addScaledVector(k.sh.coefficients[P],re);F++}else if(k.isDirectionalLight){const P=e.get(k);if(P.color.copy(k.color).multiplyScalar(k.intensity),k.castShadow){const H=k.shadow,ae=i.get(k);ae.shadowIntensity=H.intensity,ae.shadowBias=H.bias,ae.shadowNormalBias=H.normalBias,ae.shadowRadius=H.radius,ae.shadowMapSize=H.mapSize,s.directionalShadow[y]=ae,s.directionalShadowMap[y]=fe,s.directionalShadowMatrix[y]=k.shadow.matrix,N++}s.directional[y]=P,y++}else if(k.isSpotLight){const P=e.get(k);P.position.setFromMatrixPosition(k.matrixWorld),P.color.copy(se).multiplyScalar(re),P.distance=pe,P.coneCos=Math.cos(k.angle),P.penumbraCos=Math.cos(k.angle*(1-k.penumbra)),P.decay=k.decay,s.spot[R]=P;const H=k.shadow;if(k.map&&(s.spotLightMap[I]=k.map,I++,H.updateMatrices(k),k.castShadow&&z++),s.spotLightMatrix[R]=H.matrix,k.castShadow){const ae=i.get(k);ae.shadowIntensity=H.intensity,ae.shadowBias=H.bias,ae.shadowNormalBias=H.normalBias,ae.shadowRadius=H.radius,ae.shadowMapSize=H.mapSize,s.spotShadow[R]=ae,s.spotShadowMap[R]=fe,L++}R++}else if(k.isRectAreaLight){const P=e.get(k);P.color.copy(se).multiplyScalar(re),P.halfWidth.set(k.width*.5,0,0),P.halfHeight.set(0,k.height*.5,0),s.rectArea[M]=P,M++}else if(k.isPointLight){const P=e.get(k);if(P.color.copy(k.color).multiplyScalar(k.intensity),P.distance=k.distance,P.decay=k.decay,k.castShadow){const H=k.shadow,ae=i.get(k);ae.shadowIntensity=H.intensity,ae.shadowBias=H.bias,ae.shadowNormalBias=H.normalBias,ae.shadowRadius=H.radius,ae.shadowMapSize=H.mapSize,ae.shadowCameraNear=H.camera.near,ae.shadowCameraFar=H.camera.far,s.pointShadow[E]=ae,s.pointShadowMap[E]=fe,s.pointShadowMatrix[E]=k.shadow.matrix,O++}s.point[E]=P,E++}else if(k.isHemisphereLight){const P=e.get(k);P.skyColor.copy(k.color).multiplyScalar(re),P.groundColor.copy(k.groundColor).multiplyScalar(re),s.hemi[_]=P,_++}}M>0&&(r.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Pe.LTC_FLOAT_1,s.rectAreaLTC2=Pe.LTC_FLOAT_2):(s.rectAreaLTC1=Pe.LTC_HALF_1,s.rectAreaLTC2=Pe.LTC_HALF_2)),s.ambient[0]=g,s.ambient[1]=v,s.ambient[2]=S;const K=s.hash;(K.directionalLength!==y||K.pointLength!==E||K.spotLength!==R||K.rectAreaLength!==M||K.hemiLength!==_||K.numDirectionalShadows!==N||K.numPointShadows!==O||K.numSpotShadows!==L||K.numSpotMaps!==I||K.numLightProbes!==F)&&(s.directional.length=y,s.spot.length=R,s.rectArea.length=M,s.point.length=E,s.hemi.length=_,s.directionalShadow.length=N,s.directionalShadowMap.length=N,s.pointShadow.length=O,s.pointShadowMap.length=O,s.spotShadow.length=L,s.spotShadowMap.length=L,s.directionalShadowMatrix.length=N,s.pointShadowMatrix.length=O,s.spotLightMatrix.length=L+I-z,s.spotLightMap.length=I,s.numSpotLightShadowsWithMaps=z,s.numLightProbes=F,K.directionalLength=y,K.pointLength=E,K.spotLength=R,K.rectAreaLength=M,K.hemiLength=_,K.numDirectionalShadows=N,K.numPointShadows=O,K.numSpotShadows=L,K.numSpotMaps=I,K.numLightProbes=F,s.version=n3++)}function p(m,g){let v=0,S=0,y=0,E=0,R=0;const M=g.matrixWorldInverse;for(let _=0,N=m.length;_<N;_++){const O=m[_];if(O.isDirectionalLight){const L=s.directional[v];L.direction.setFromMatrixPosition(O.matrixWorld),l.setFromMatrixPosition(O.target.matrixWorld),L.direction.sub(l),L.direction.transformDirection(M),v++}else if(O.isSpotLight){const L=s.spot[y];L.position.setFromMatrixPosition(O.matrixWorld),L.position.applyMatrix4(M),L.direction.setFromMatrixPosition(O.matrixWorld),l.setFromMatrixPosition(O.target.matrixWorld),L.direction.sub(l),L.direction.transformDirection(M),y++}else if(O.isRectAreaLight){const L=s.rectArea[E];L.position.setFromMatrixPosition(O.matrixWorld),L.position.applyMatrix4(M),h.identity(),c.copy(O.matrixWorld),c.premultiply(M),h.extractRotation(c),L.halfWidth.set(O.width*.5,0,0),L.halfHeight.set(0,O.height*.5,0),L.halfWidth.applyMatrix4(h),L.halfHeight.applyMatrix4(h),E++}else if(O.isPointLight){const L=s.point[S];L.position.setFromMatrixPosition(O.matrixWorld),L.position.applyMatrix4(M),S++}else if(O.isHemisphereLight){const L=s.hemi[R];L.direction.setFromMatrixPosition(O.matrixWorld),L.direction.transformDirection(M),R++}}}return{setup:d,setupView:p,state:s}}function K_(r){const e=new a3(r),i=[],s=[];function l(g){m.camera=g,i.length=0,s.length=0}function c(g){i.push(g)}function h(g){s.push(g)}function d(){e.setup(i)}function p(g){e.setupView(i,g)}const m={lightsArray:i,shadowsArray:s,camera:null,lights:e,transmissionRenderTarget:{}};return{init:l,state:m,setupLights:d,setupLightsView:p,pushLight:c,pushShadow:h}}function r3(r){let e=new WeakMap;function i(l,c=0){const h=e.get(l);let d;return h===void 0?(d=new K_(r),e.set(l,[d])):c>=h.length?(d=new K_(r),h.push(d)):d=h[c],d}function s(){e=new WeakMap}return{get:i,dispose:s}}const s3=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,o3=`uniform sampler2D shadow_pass;
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
}`,l3=[new Z(1,0,0),new Z(-1,0,0),new Z(0,1,0),new Z(0,-1,0),new Z(0,0,1),new Z(0,0,-1)],c3=[new Z(0,-1,0),new Z(0,-1,0),new Z(0,0,1),new Z(0,0,-1),new Z(0,-1,0),new Z(0,-1,0)],Q_=new qt,ol=new Z,_h=new Z;function u3(r,e,i){let s=new Jp;const l=new Mt,c=new Mt,h=new an,d=new y1,p=new M1,m={},g=i.maxTextureSize,v={[lr]:Vn,[Vn]:lr,[xa]:xa},S=new Yi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Mt},radius:{value:4}},vertexShader:s3,fragmentShader:o3}),y=S.clone();y.defines.HORIZONTAL_PASS=1;const E=new Zi;E.setAttribute("position",new Li(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const R=new yn(E,S),M=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=fu;let _=this.type;this.render=function(z,F,K){if(M.enabled===!1||M.autoUpdate===!1&&M.needsUpdate===!1||z.length===0)return;z.type===Kb&&(rt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),z.type=fu);const C=r.getRenderTarget(),w=r.getActiveCubeFace(),k=r.getActiveMipmapLevel(),se=r.state;se.setBlending(Ma),se.buffers.depth.getReversed()===!0?se.buffers.color.setClear(0,0,0,0):se.buffers.color.setClear(1,1,1,1),se.buffers.depth.setTest(!0),se.setScissorTest(!1);const re=_!==this.type;re&&F.traverse(function(pe){pe.material&&(Array.isArray(pe.material)?pe.material.forEach(fe=>fe.needsUpdate=!0):pe.material.needsUpdate=!0)});for(let pe=0,fe=z.length;pe<fe;pe++){const P=z[pe],H=P.shadow;if(H===void 0){rt("WebGLShadowMap:",P,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;l.copy(H.mapSize);const ae=H.getFrameExtents();if(l.multiply(ae),c.copy(H.mapSize),(l.x>g||l.y>g)&&(l.x>g&&(c.x=Math.floor(g/ae.x),l.x=c.x*ae.x,H.mapSize.x=c.x),l.y>g&&(c.y=Math.floor(g/ae.y),l.y=c.y*ae.y,H.mapSize.y=c.y)),H.map===null||re===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===ll){if(P.isPointLight){rt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new qi(l.x,l.y,{format:Ks,type:Ea,minFilter:In,magFilter:In,generateMipmaps:!1}),H.map.texture.name=P.name+".shadowMap",H.map.depthTexture=new Sl(l.x,l.y,Ui),H.map.depthTexture.name=P.name+".shadowMapDepth",H.map.depthTexture.format=Ta,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Nn,H.map.depthTexture.magFilter=Nn}else{P.isPointLight?(H.map=new Qx(l.x),H.map.depthTexture=new v1(l.x,ji)):(H.map=new qi(l.x,l.y),H.map.depthTexture=new Sl(l.x,l.y,ji)),H.map.depthTexture.name=P.name+".shadowMap",H.map.depthTexture.format=Ta;const Se=r.state.buffers.depth.getReversed();this.type===fu?(H.map.depthTexture.compareFunction=Se?Zp:Yp,H.map.depthTexture.minFilter=In,H.map.depthTexture.magFilter=In):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=Nn,H.map.depthTexture.magFilter=Nn)}H.camera.updateProjectionMatrix()}const Me=H.map.isWebGLCubeRenderTarget?6:1;for(let Se=0;Se<Me;Se++){if(H.map.isWebGLCubeRenderTarget)r.setRenderTarget(H.map,Se),r.clear();else{Se===0&&(r.setRenderTarget(H.map),r.clear());const U=H.getViewport(Se);h.set(c.x*U.x,c.y*U.y,c.x*U.z,c.y*U.w),se.viewport(h)}if(P.isPointLight){const U=H.camera,ie=H.matrix,ve=P.distance||U.far;ve!==U.far&&(U.far=ve,U.updateProjectionMatrix()),ol.setFromMatrixPosition(P.matrixWorld),U.position.copy(ol),_h.copy(U.position),_h.add(l3[Se]),U.up.copy(c3[Se]),U.lookAt(_h),U.updateMatrixWorld(),ie.makeTranslation(-ol.x,-ol.y,-ol.z),Q_.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),H._frustum.setFromProjectionMatrix(Q_,U.coordinateSystem,U.reversedDepth)}else H.updateMatrices(P);s=H.getFrustum(),L(F,K,H.camera,P,this.type)}H.isPointLightShadow!==!0&&this.type===ll&&N(H,K),H.needsUpdate=!1}_=this.type,M.needsUpdate=!1,r.setRenderTarget(C,w,k)};function N(z,F){const K=e.update(R);S.defines.VSM_SAMPLES!==z.blurSamples&&(S.defines.VSM_SAMPLES=z.blurSamples,y.defines.VSM_SAMPLES=z.blurSamples,S.needsUpdate=!0,y.needsUpdate=!0),z.mapPass===null&&(z.mapPass=new qi(l.x,l.y,{format:Ks,type:Ea})),S.uniforms.shadow_pass.value=z.map.depthTexture,S.uniforms.resolution.value=z.mapSize,S.uniforms.radius.value=z.radius,r.setRenderTarget(z.mapPass),r.clear(),r.renderBufferDirect(F,null,K,S,R,null),y.uniforms.shadow_pass.value=z.mapPass.texture,y.uniforms.resolution.value=z.mapSize,y.uniforms.radius.value=z.radius,r.setRenderTarget(z.map),r.clear(),r.renderBufferDirect(F,null,K,y,R,null)}function O(z,F,K,C){let w=null;const k=K.isPointLight===!0?z.customDistanceMaterial:z.customDepthMaterial;if(k!==void 0)w=k;else if(w=K.isPointLight===!0?p:d,r.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0||F.alphaToCoverage===!0){const se=w.uuid,re=F.uuid;let pe=m[se];pe===void 0&&(pe={},m[se]=pe);let fe=pe[re];fe===void 0&&(fe=w.clone(),pe[re]=fe,F.addEventListener("dispose",I)),w=fe}if(w.visible=F.visible,w.wireframe=F.wireframe,C===ll?w.side=F.shadowSide!==null?F.shadowSide:F.side:w.side=F.shadowSide!==null?F.shadowSide:v[F.side],w.alphaMap=F.alphaMap,w.alphaTest=F.alphaToCoverage===!0?.5:F.alphaTest,w.map=F.map,w.clipShadows=F.clipShadows,w.clippingPlanes=F.clippingPlanes,w.clipIntersection=F.clipIntersection,w.displacementMap=F.displacementMap,w.displacementScale=F.displacementScale,w.displacementBias=F.displacementBias,w.wireframeLinewidth=F.wireframeLinewidth,w.linewidth=F.linewidth,K.isPointLight===!0&&w.isMeshDistanceMaterial===!0){const se=r.properties.get(w);se.light=K}return w}function L(z,F,K,C,w){if(z.visible===!1)return;if(z.layers.test(F.layers)&&(z.isMesh||z.isLine||z.isPoints)&&(z.castShadow||z.receiveShadow&&w===ll)&&(!z.frustumCulled||s.intersectsObject(z))){z.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,z.matrixWorld);const re=e.update(z),pe=z.material;if(Array.isArray(pe)){const fe=re.groups;for(let P=0,H=fe.length;P<H;P++){const ae=fe[P],Me=pe[ae.materialIndex];if(Me&&Me.visible){const Se=O(z,Me,C,w);z.onBeforeShadow(r,z,F,K,re,Se,ae),r.renderBufferDirect(K,null,re,Se,z,ae),z.onAfterShadow(r,z,F,K,re,Se,ae)}}}else if(pe.visible){const fe=O(z,pe,C,w);z.onBeforeShadow(r,z,F,K,re,fe,null),r.renderBufferDirect(K,null,re,fe,z,null),z.onAfterShadow(r,z,F,K,re,fe,null)}}const se=z.children;for(let re=0,pe=se.length;re<pe;re++)L(se[re],F,K,C,w)}function I(z){z.target.removeEventListener("dispose",I);for(const K in m){const C=m[K],w=z.target.uuid;w in C&&(C[w].dispose(),delete C[w])}}}const f3={[Uh]:Nh,[Lh]:Fh,[Oh]:Ih,[Ys]:Ph,[Nh]:Uh,[Fh]:Lh,[Ih]:Oh,[Ph]:Ys};function d3(r,e){function i(){let X=!1;const Le=new an;let Te=null;const Ie=new an(0,0,0,0);return{setMask:function(ye){Te!==ye&&!X&&(r.colorMask(ye,ye,ye,ye),Te=ye)},setLocked:function(ye){X=ye},setClear:function(ye,_e,Ce,it,Ft){Ft===!0&&(ye*=it,_e*=it,Ce*=it),Le.set(ye,_e,Ce,it),Ie.equals(Le)===!1&&(r.clearColor(ye,_e,Ce,it),Ie.copy(Le))},reset:function(){X=!1,Te=null,Ie.set(-1,0,0,0)}}}function s(){let X=!1,Le=!1,Te=null,Ie=null,ye=null;return{setReversed:function(_e){if(Le!==_e){const Ce=e.get("EXT_clip_control");_e?Ce.clipControlEXT(Ce.LOWER_LEFT_EXT,Ce.ZERO_TO_ONE_EXT):Ce.clipControlEXT(Ce.LOWER_LEFT_EXT,Ce.NEGATIVE_ONE_TO_ONE_EXT),Le=_e;const it=ye;ye=null,this.setClear(it)}},getReversed:function(){return Le},setTest:function(_e){_e?ue(r.DEPTH_TEST):Ue(r.DEPTH_TEST)},setMask:function(_e){Te!==_e&&!X&&(r.depthMask(_e),Te=_e)},setFunc:function(_e){if(Le&&(_e=f3[_e]),Ie!==_e){switch(_e){case Uh:r.depthFunc(r.NEVER);break;case Nh:r.depthFunc(r.ALWAYS);break;case Lh:r.depthFunc(r.LESS);break;case Ys:r.depthFunc(r.LEQUAL);break;case Oh:r.depthFunc(r.EQUAL);break;case Ph:r.depthFunc(r.GEQUAL);break;case Fh:r.depthFunc(r.GREATER);break;case Ih:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Ie=_e}},setLocked:function(_e){X=_e},setClear:function(_e){ye!==_e&&(Le&&(_e=1-_e),r.clearDepth(_e),ye=_e)},reset:function(){X=!1,Te=null,Ie=null,ye=null,Le=!1}}}function l(){let X=!1,Le=null,Te=null,Ie=null,ye=null,_e=null,Ce=null,it=null,Ft=null;return{setTest:function(Tt){X||(Tt?ue(r.STENCIL_TEST):Ue(r.STENCIL_TEST))},setMask:function(Tt){Le!==Tt&&!X&&(r.stencilMask(Tt),Le=Tt)},setFunc:function(Tt,Ln,yi){(Te!==Tt||Ie!==Ln||ye!==yi)&&(r.stencilFunc(Tt,Ln,yi),Te=Tt,Ie=Ln,ye=yi)},setOp:function(Tt,Ln,yi){(_e!==Tt||Ce!==Ln||it!==yi)&&(r.stencilOp(Tt,Ln,yi),_e=Tt,Ce=Ln,it=yi)},setLocked:function(Tt){X=Tt},setClear:function(Tt){Ft!==Tt&&(r.clearStencil(Tt),Ft=Tt)},reset:function(){X=!1,Le=null,Te=null,Ie=null,ye=null,_e=null,Ce=null,it=null,Ft=null}}}const c=new i,h=new s,d=new l,p=new WeakMap,m=new WeakMap;let g={},v={},S=new WeakMap,y=[],E=null,R=!1,M=null,_=null,N=null,O=null,L=null,I=null,z=null,F=new ht(0,0,0),K=0,C=!1,w=null,k=null,se=null,re=null,pe=null;const fe=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let P=!1,H=0;const ae=r.getParameter(r.VERSION);ae.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(ae)[1]),P=H>=1):ae.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(ae)[1]),P=H>=2);let Me=null,Se={};const U=r.getParameter(r.SCISSOR_BOX),ie=r.getParameter(r.VIEWPORT),ve=new an().fromArray(U),Re=new an().fromArray(ie);function He(X,Le,Te,Ie){const ye=new Uint8Array(4),_e=r.createTexture();r.bindTexture(X,_e),r.texParameteri(X,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(X,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Ce=0;Ce<Te;Ce++)X===r.TEXTURE_3D||X===r.TEXTURE_2D_ARRAY?r.texImage3D(Le,0,r.RGBA,1,1,Ie,0,r.RGBA,r.UNSIGNED_BYTE,ye):r.texImage2D(Le+Ce,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,ye);return _e}const ne={};ne[r.TEXTURE_2D]=He(r.TEXTURE_2D,r.TEXTURE_2D,1),ne[r.TEXTURE_CUBE_MAP]=He(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),ne[r.TEXTURE_2D_ARRAY]=He(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),ne[r.TEXTURE_3D]=He(r.TEXTURE_3D,r.TEXTURE_3D,1,1),c.setClear(0,0,0,1),h.setClear(1),d.setClear(0),ue(r.DEPTH_TEST),h.setFunc(Ys),ot(!1),en(Kv),ue(r.CULL_FACE),mt(Ma);function ue(X){g[X]!==!0&&(r.enable(X),g[X]=!0)}function Ue(X){g[X]!==!1&&(r.disable(X),g[X]=!1)}function Xe(X,Le){return v[X]!==Le?(r.bindFramebuffer(X,Le),v[X]=Le,X===r.DRAW_FRAMEBUFFER&&(v[r.FRAMEBUFFER]=Le),X===r.FRAMEBUFFER&&(v[r.DRAW_FRAMEBUFFER]=Le),!0):!1}function Ge(X,Le){let Te=y,Ie=!1;if(X){Te=S.get(Le),Te===void 0&&(Te=[],S.set(Le,Te));const ye=X.textures;if(Te.length!==ye.length||Te[0]!==r.COLOR_ATTACHMENT0){for(let _e=0,Ce=ye.length;_e<Ce;_e++)Te[_e]=r.COLOR_ATTACHMENT0+_e;Te.length=ye.length,Ie=!0}}else Te[0]!==r.BACK&&(Te[0]=r.BACK,Ie=!0);Ie&&r.drawBuffers(Te)}function pt(X){return E!==X?(r.useProgram(X),E=X,!0):!1}const Jt={[Or]:r.FUNC_ADD,[$b]:r.FUNC_SUBTRACT,[Jb]:r.FUNC_REVERSE_SUBTRACT};Jt[eE]=r.MIN,Jt[tE]=r.MAX;const xt={[nE]:r.ZERO,[iE]:r.ONE,[aE]:r.SRC_COLOR,[wh]:r.SRC_ALPHA,[uE]:r.SRC_ALPHA_SATURATE,[lE]:r.DST_COLOR,[sE]:r.DST_ALPHA,[rE]:r.ONE_MINUS_SRC_COLOR,[Dh]:r.ONE_MINUS_SRC_ALPHA,[cE]:r.ONE_MINUS_DST_COLOR,[oE]:r.ONE_MINUS_DST_ALPHA,[fE]:r.CONSTANT_COLOR,[dE]:r.ONE_MINUS_CONSTANT_COLOR,[hE]:r.CONSTANT_ALPHA,[pE]:r.ONE_MINUS_CONSTANT_ALPHA};function mt(X,Le,Te,Ie,ye,_e,Ce,it,Ft,Tt){if(X===Ma){R===!0&&(Ue(r.BLEND),R=!1);return}if(R===!1&&(ue(r.BLEND),R=!0),X!==Qb){if(X!==M||Tt!==C){if((_!==Or||L!==Or)&&(r.blendEquation(r.FUNC_ADD),_=Or,L=Or),Tt)switch(X){case qs:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Qv:r.blendFunc(r.ONE,r.ONE);break;case $v:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Jv:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:At("WebGLState: Invalid blending: ",X);break}else switch(X){case qs:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Qv:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case $v:At("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Jv:At("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:At("WebGLState: Invalid blending: ",X);break}N=null,O=null,I=null,z=null,F.set(0,0,0),K=0,M=X,C=Tt}return}ye=ye||Le,_e=_e||Te,Ce=Ce||Ie,(Le!==_||ye!==L)&&(r.blendEquationSeparate(Jt[Le],Jt[ye]),_=Le,L=ye),(Te!==N||Ie!==O||_e!==I||Ce!==z)&&(r.blendFuncSeparate(xt[Te],xt[Ie],xt[_e],xt[Ce]),N=Te,O=Ie,I=_e,z=Ce),(it.equals(F)===!1||Ft!==K)&&(r.blendColor(it.r,it.g,it.b,Ft),F.copy(it),K=Ft),M=X,C=!1}function Dt(X,Le){X.side===xa?Ue(r.CULL_FACE):ue(r.CULL_FACE);let Te=X.side===Vn;Le&&(Te=!Te),ot(Te),X.blending===qs&&X.transparent===!1?mt(Ma):mt(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),h.setFunc(X.depthFunc),h.setTest(X.depthTest),h.setMask(X.depthWrite),c.setMask(X.colorWrite);const Ie=X.stencilWrite;d.setTest(Ie),Ie&&(d.setMask(X.stencilWriteMask),d.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),d.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),Kt(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?ue(r.SAMPLE_ALPHA_TO_COVERAGE):Ue(r.SAMPLE_ALPHA_TO_COVERAGE)}function ot(X){w!==X&&(X?r.frontFace(r.CW):r.frontFace(r.CCW),w=X)}function en(X){X!==Yb?(ue(r.CULL_FACE),X!==k&&(X===Kv?r.cullFace(r.BACK):X===Zb?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Ue(r.CULL_FACE),k=X}function G(X){X!==se&&(P&&r.lineWidth(X),se=X)}function Kt(X,Le,Te){X?(ue(r.POLYGON_OFFSET_FILL),(re!==Le||pe!==Te)&&(r.polygonOffset(Le,Te),re=Le,pe=Te)):Ue(r.POLYGON_OFFSET_FILL)}function Et(X){X?ue(r.SCISSOR_TEST):Ue(r.SCISSOR_TEST)}function Ot(X){X===void 0&&(X=r.TEXTURE0+fe-1),Me!==X&&(r.activeTexture(X),Me=X)}function Ye(X,Le,Te){Te===void 0&&(Me===null?Te=r.TEXTURE0+fe-1:Te=Me);let Ie=Se[Te];Ie===void 0&&(Ie={type:void 0,texture:void 0},Se[Te]=Ie),(Ie.type!==X||Ie.texture!==Le)&&(Me!==Te&&(r.activeTexture(Te),Me=Te),r.bindTexture(X,Le||ne[X]),Ie.type=X,Ie.texture=Le)}function D(){const X=Se[Me];X!==void 0&&X.type!==void 0&&(r.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function b(){try{r.compressedTexImage2D(...arguments)}catch(X){At("WebGLState:",X)}}function W(){try{r.compressedTexImage3D(...arguments)}catch(X){At("WebGLState:",X)}}function he(){try{r.texSubImage2D(...arguments)}catch(X){At("WebGLState:",X)}}function xe(){try{r.texSubImage3D(...arguments)}catch(X){At("WebGLState:",X)}}function ce(){try{r.compressedTexSubImage2D(...arguments)}catch(X){At("WebGLState:",X)}}function Ke(){try{r.compressedTexSubImage3D(...arguments)}catch(X){At("WebGLState:",X)}}function we(){try{r.texStorage2D(...arguments)}catch(X){At("WebGLState:",X)}}function We(){try{r.texStorage3D(...arguments)}catch(X){At("WebGLState:",X)}}function nt(){try{r.texImage2D(...arguments)}catch(X){At("WebGLState:",X)}}function be(){try{r.texImage3D(...arguments)}catch(X){At("WebGLState:",X)}}function Ee(X){ve.equals(X)===!1&&(r.scissor(X.x,X.y,X.z,X.w),ve.copy(X))}function Be(X){Re.equals(X)===!1&&(r.viewport(X.x,X.y,X.z,X.w),Re.copy(X))}function Fe(X,Le){let Te=m.get(Le);Te===void 0&&(Te=new WeakMap,m.set(Le,Te));let Ie=Te.get(X);Ie===void 0&&(Ie=r.getUniformBlockIndex(Le,X.name),Te.set(X,Ie))}function De(X,Le){const Ie=m.get(Le).get(X);p.get(Le)!==Ie&&(r.uniformBlockBinding(Le,Ie,X.__bindingPointIndex),p.set(Le,Ie))}function ct(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),h.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),g={},Me=null,Se={},v={},S=new WeakMap,y=[],E=null,R=!1,M=null,_=null,N=null,O=null,L=null,I=null,z=null,F=new ht(0,0,0),K=0,C=!1,w=null,k=null,se=null,re=null,pe=null,ve.set(0,0,r.canvas.width,r.canvas.height),Re.set(0,0,r.canvas.width,r.canvas.height),c.reset(),h.reset(),d.reset()}return{buffers:{color:c,depth:h,stencil:d},enable:ue,disable:Ue,bindFramebuffer:Xe,drawBuffers:Ge,useProgram:pt,setBlending:mt,setMaterial:Dt,setFlipSided:ot,setCullFace:en,setLineWidth:G,setPolygonOffset:Kt,setScissorTest:Et,activeTexture:Ot,bindTexture:Ye,unbindTexture:D,compressedTexImage2D:b,compressedTexImage3D:W,texImage2D:nt,texImage3D:be,updateUBOMapping:Fe,uniformBlockBinding:De,texStorage2D:we,texStorage3D:We,texSubImage2D:he,texSubImage3D:xe,compressedTexSubImage2D:ce,compressedTexSubImage3D:Ke,scissor:Ee,viewport:Be,reset:ct}}function h3(r,e,i,s,l,c,h){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new Mt,g=new WeakMap;let v;const S=new WeakMap;let y=!1;try{y=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(D,b){return y?new OffscreenCanvas(D,b):yu("canvas")}function R(D,b,W){let he=1;const xe=Ye(D);if((xe.width>W||xe.height>W)&&(he=W/Math.max(xe.width,xe.height)),he<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const ce=Math.floor(he*xe.width),Ke=Math.floor(he*xe.height);v===void 0&&(v=E(ce,Ke));const we=b?E(ce,Ke):v;return we.width=ce,we.height=Ke,we.getContext("2d").drawImage(D,0,0,ce,Ke),rt("WebGLRenderer: Texture has been resized from ("+xe.width+"x"+xe.height+") to ("+ce+"x"+Ke+")."),we}else return"data"in D&&rt("WebGLRenderer: Image in DataTexture is too big ("+xe.width+"x"+xe.height+")."),D;return D}function M(D){return D.generateMipmaps}function _(D){r.generateMipmap(D)}function N(D){return D.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?r.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function O(D,b,W,he,xe=!1){if(D!==null){if(r[D]!==void 0)return r[D];rt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let ce=b;if(b===r.RED&&(W===r.FLOAT&&(ce=r.R32F),W===r.HALF_FLOAT&&(ce=r.R16F),W===r.UNSIGNED_BYTE&&(ce=r.R8)),b===r.RED_INTEGER&&(W===r.UNSIGNED_BYTE&&(ce=r.R8UI),W===r.UNSIGNED_SHORT&&(ce=r.R16UI),W===r.UNSIGNED_INT&&(ce=r.R32UI),W===r.BYTE&&(ce=r.R8I),W===r.SHORT&&(ce=r.R16I),W===r.INT&&(ce=r.R32I)),b===r.RG&&(W===r.FLOAT&&(ce=r.RG32F),W===r.HALF_FLOAT&&(ce=r.RG16F),W===r.UNSIGNED_BYTE&&(ce=r.RG8)),b===r.RG_INTEGER&&(W===r.UNSIGNED_BYTE&&(ce=r.RG8UI),W===r.UNSIGNED_SHORT&&(ce=r.RG16UI),W===r.UNSIGNED_INT&&(ce=r.RG32UI),W===r.BYTE&&(ce=r.RG8I),W===r.SHORT&&(ce=r.RG16I),W===r.INT&&(ce=r.RG32I)),b===r.RGB_INTEGER&&(W===r.UNSIGNED_BYTE&&(ce=r.RGB8UI),W===r.UNSIGNED_SHORT&&(ce=r.RGB16UI),W===r.UNSIGNED_INT&&(ce=r.RGB32UI),W===r.BYTE&&(ce=r.RGB8I),W===r.SHORT&&(ce=r.RGB16I),W===r.INT&&(ce=r.RGB32I)),b===r.RGBA_INTEGER&&(W===r.UNSIGNED_BYTE&&(ce=r.RGBA8UI),W===r.UNSIGNED_SHORT&&(ce=r.RGBA16UI),W===r.UNSIGNED_INT&&(ce=r.RGBA32UI),W===r.BYTE&&(ce=r.RGBA8I),W===r.SHORT&&(ce=r.RGBA16I),W===r.INT&&(ce=r.RGBA32I)),b===r.RGB&&(W===r.UNSIGNED_INT_5_9_9_9_REV&&(ce=r.RGB9_E5),W===r.UNSIGNED_INT_10F_11F_11F_REV&&(ce=r.R11F_G11F_B10F)),b===r.RGBA){const Ke=xe?xu:Rt.getTransfer(he);W===r.FLOAT&&(ce=r.RGBA32F),W===r.HALF_FLOAT&&(ce=r.RGBA16F),W===r.UNSIGNED_BYTE&&(ce=Ke===Ht?r.SRGB8_ALPHA8:r.RGBA8),W===r.UNSIGNED_SHORT_4_4_4_4&&(ce=r.RGBA4),W===r.UNSIGNED_SHORT_5_5_5_1&&(ce=r.RGB5_A1)}return(ce===r.R16F||ce===r.R32F||ce===r.RG16F||ce===r.RG32F||ce===r.RGBA16F||ce===r.RGBA32F)&&e.get("EXT_color_buffer_float"),ce}function L(D,b){let W;return D?b===null||b===ji||b===vl?W=r.DEPTH24_STENCIL8:b===Ui?W=r.DEPTH32F_STENCIL8:b===gl&&(W=r.DEPTH24_STENCIL8,rt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===ji||b===vl?W=r.DEPTH_COMPONENT24:b===Ui?W=r.DEPTH_COMPONENT32F:b===gl&&(W=r.DEPTH_COMPONENT16),W}function I(D,b){return M(D)===!0||D.isFramebufferTexture&&D.minFilter!==Nn&&D.minFilter!==In?Math.log2(Math.max(b.width,b.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?b.mipmaps.length:1}function z(D){const b=D.target;b.removeEventListener("dispose",z),K(b),b.isVideoTexture&&g.delete(b)}function F(D){const b=D.target;b.removeEventListener("dispose",F),w(b)}function K(D){const b=s.get(D);if(b.__webglInit===void 0)return;const W=D.source,he=S.get(W);if(he){const xe=he[b.__cacheKey];xe.usedTimes--,xe.usedTimes===0&&C(D),Object.keys(he).length===0&&S.delete(W)}s.remove(D)}function C(D){const b=s.get(D);r.deleteTexture(b.__webglTexture);const W=D.source,he=S.get(W);delete he[b.__cacheKey],h.memory.textures--}function w(D){const b=s.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),s.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let he=0;he<6;he++){if(Array.isArray(b.__webglFramebuffer[he]))for(let xe=0;xe<b.__webglFramebuffer[he].length;xe++)r.deleteFramebuffer(b.__webglFramebuffer[he][xe]);else r.deleteFramebuffer(b.__webglFramebuffer[he]);b.__webglDepthbuffer&&r.deleteRenderbuffer(b.__webglDepthbuffer[he])}else{if(Array.isArray(b.__webglFramebuffer))for(let he=0;he<b.__webglFramebuffer.length;he++)r.deleteFramebuffer(b.__webglFramebuffer[he]);else r.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&r.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&r.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let he=0;he<b.__webglColorRenderbuffer.length;he++)b.__webglColorRenderbuffer[he]&&r.deleteRenderbuffer(b.__webglColorRenderbuffer[he]);b.__webglDepthRenderbuffer&&r.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const W=D.textures;for(let he=0,xe=W.length;he<xe;he++){const ce=s.get(W[he]);ce.__webglTexture&&(r.deleteTexture(ce.__webglTexture),h.memory.textures--),s.remove(W[he])}s.remove(D)}let k=0;function se(){k=0}function re(){const D=k;return D>=l.maxTextures&&rt("WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+l.maxTextures),k+=1,D}function pe(D){const b=[];return b.push(D.wrapS),b.push(D.wrapT),b.push(D.wrapR||0),b.push(D.magFilter),b.push(D.minFilter),b.push(D.anisotropy),b.push(D.internalFormat),b.push(D.format),b.push(D.type),b.push(D.generateMipmaps),b.push(D.premultiplyAlpha),b.push(D.flipY),b.push(D.unpackAlignment),b.push(D.colorSpace),b.join()}function fe(D,b){const W=s.get(D);if(D.isVideoTexture&&Et(D),D.isRenderTargetTexture===!1&&D.isExternalTexture!==!0&&D.version>0&&W.__version!==D.version){const he=D.image;if(he===null)rt("WebGLRenderer: Texture marked for update but no image data found.");else if(he.complete===!1)rt("WebGLRenderer: Texture marked for update but image is incomplete");else{ne(W,D,b);return}}else D.isExternalTexture&&(W.__webglTexture=D.sourceTexture?D.sourceTexture:null);i.bindTexture(r.TEXTURE_2D,W.__webglTexture,r.TEXTURE0+b)}function P(D,b){const W=s.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&W.__version!==D.version){ne(W,D,b);return}else D.isExternalTexture&&(W.__webglTexture=D.sourceTexture?D.sourceTexture:null);i.bindTexture(r.TEXTURE_2D_ARRAY,W.__webglTexture,r.TEXTURE0+b)}function H(D,b){const W=s.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&W.__version!==D.version){ne(W,D,b);return}i.bindTexture(r.TEXTURE_3D,W.__webglTexture,r.TEXTURE0+b)}function ae(D,b){const W=s.get(D);if(D.isCubeDepthTexture!==!0&&D.version>0&&W.__version!==D.version){ue(W,D,b);return}i.bindTexture(r.TEXTURE_CUBE_MAP,W.__webglTexture,r.TEXTURE0+b)}const Me={[Hh]:r.REPEAT,[ya]:r.CLAMP_TO_EDGE,[Gh]:r.MIRRORED_REPEAT},Se={[Nn]:r.NEAREST,[vE]:r.NEAREST_MIPMAP_NEAREST,[zc]:r.NEAREST_MIPMAP_LINEAR,[In]:r.LINEAR,[kd]:r.LINEAR_MIPMAP_NEAREST,[Ir]:r.LINEAR_MIPMAP_LINEAR},U={[SE]:r.NEVER,[TE]:r.ALWAYS,[yE]:r.LESS,[Yp]:r.LEQUAL,[ME]:r.EQUAL,[Zp]:r.GEQUAL,[bE]:r.GREATER,[EE]:r.NOTEQUAL};function ie(D,b){if(b.type===Ui&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===In||b.magFilter===kd||b.magFilter===zc||b.magFilter===Ir||b.minFilter===In||b.minFilter===kd||b.minFilter===zc||b.minFilter===Ir)&&rt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(D,r.TEXTURE_WRAP_S,Me[b.wrapS]),r.texParameteri(D,r.TEXTURE_WRAP_T,Me[b.wrapT]),(D===r.TEXTURE_3D||D===r.TEXTURE_2D_ARRAY)&&r.texParameteri(D,r.TEXTURE_WRAP_R,Me[b.wrapR]),r.texParameteri(D,r.TEXTURE_MAG_FILTER,Se[b.magFilter]),r.texParameteri(D,r.TEXTURE_MIN_FILTER,Se[b.minFilter]),b.compareFunction&&(r.texParameteri(D,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(D,r.TEXTURE_COMPARE_FUNC,U[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Nn||b.minFilter!==zc&&b.minFilter!==Ir||b.type===Ui&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||s.get(b).__currentAnisotropy){const W=e.get("EXT_texture_filter_anisotropic");r.texParameterf(D,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,l.getMaxAnisotropy())),s.get(b).__currentAnisotropy=b.anisotropy}}}function ve(D,b){let W=!1;D.__webglInit===void 0&&(D.__webglInit=!0,b.addEventListener("dispose",z));const he=b.source;let xe=S.get(he);xe===void 0&&(xe={},S.set(he,xe));const ce=pe(b);if(ce!==D.__cacheKey){xe[ce]===void 0&&(xe[ce]={texture:r.createTexture(),usedTimes:0},h.memory.textures++,W=!0),xe[ce].usedTimes++;const Ke=xe[D.__cacheKey];Ke!==void 0&&(xe[D.__cacheKey].usedTimes--,Ke.usedTimes===0&&C(b)),D.__cacheKey=ce,D.__webglTexture=xe[ce].texture}return W}function Re(D,b,W){return Math.floor(Math.floor(D/W)/b)}function He(D,b,W,he){const ce=D.updateRanges;if(ce.length===0)i.texSubImage2D(r.TEXTURE_2D,0,0,0,b.width,b.height,W,he,b.data);else{ce.sort((be,Ee)=>be.start-Ee.start);let Ke=0;for(let be=1;be<ce.length;be++){const Ee=ce[Ke],Be=ce[be],Fe=Ee.start+Ee.count,De=Re(Be.start,b.width,4),ct=Re(Ee.start,b.width,4);Be.start<=Fe+1&&De===ct&&Re(Be.start+Be.count-1,b.width,4)===De?Ee.count=Math.max(Ee.count,Be.start+Be.count-Ee.start):(++Ke,ce[Ke]=Be)}ce.length=Ke+1;const we=r.getParameter(r.UNPACK_ROW_LENGTH),We=r.getParameter(r.UNPACK_SKIP_PIXELS),nt=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,b.width);for(let be=0,Ee=ce.length;be<Ee;be++){const Be=ce[be],Fe=Math.floor(Be.start/4),De=Math.ceil(Be.count/4),ct=Fe%b.width,X=Math.floor(Fe/b.width),Le=De,Te=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,ct),r.pixelStorei(r.UNPACK_SKIP_ROWS,X),i.texSubImage2D(r.TEXTURE_2D,0,ct,X,Le,Te,W,he,b.data)}D.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,we),r.pixelStorei(r.UNPACK_SKIP_PIXELS,We),r.pixelStorei(r.UNPACK_SKIP_ROWS,nt)}}function ne(D,b,W){let he=r.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(he=r.TEXTURE_2D_ARRAY),b.isData3DTexture&&(he=r.TEXTURE_3D);const xe=ve(D,b),ce=b.source;i.bindTexture(he,D.__webglTexture,r.TEXTURE0+W);const Ke=s.get(ce);if(ce.version!==Ke.__version||xe===!0){i.activeTexture(r.TEXTURE0+W);const we=Rt.getPrimaries(Rt.workingColorSpace),We=b.colorSpace===sr?null:Rt.getPrimaries(b.colorSpace),nt=b.colorSpace===sr||we===We?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,b.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,b.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,nt);let be=R(b.image,!1,l.maxTextureSize);be=Ot(b,be);const Ee=c.convert(b.format,b.colorSpace),Be=c.convert(b.type);let Fe=O(b.internalFormat,Ee,Be,b.colorSpace,b.isVideoTexture);ie(he,b);let De;const ct=b.mipmaps,X=b.isVideoTexture!==!0,Le=Ke.__version===void 0||xe===!0,Te=ce.dataReady,Ie=I(b,be);if(b.isDepthTexture)Fe=L(b.format===Br,b.type),Le&&(X?i.texStorage2D(r.TEXTURE_2D,1,Fe,be.width,be.height):i.texImage2D(r.TEXTURE_2D,0,Fe,be.width,be.height,0,Ee,Be,null));else if(b.isDataTexture)if(ct.length>0){X&&Le&&i.texStorage2D(r.TEXTURE_2D,Ie,Fe,ct[0].width,ct[0].height);for(let ye=0,_e=ct.length;ye<_e;ye++)De=ct[ye],X?Te&&i.texSubImage2D(r.TEXTURE_2D,ye,0,0,De.width,De.height,Ee,Be,De.data):i.texImage2D(r.TEXTURE_2D,ye,Fe,De.width,De.height,0,Ee,Be,De.data);b.generateMipmaps=!1}else X?(Le&&i.texStorage2D(r.TEXTURE_2D,Ie,Fe,be.width,be.height),Te&&He(b,be,Ee,Be)):i.texImage2D(r.TEXTURE_2D,0,Fe,be.width,be.height,0,Ee,Be,be.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){X&&Le&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Ie,Fe,ct[0].width,ct[0].height,be.depth);for(let ye=0,_e=ct.length;ye<_e;ye++)if(De=ct[ye],b.format!==Ni)if(Ee!==null)if(X){if(Te)if(b.layerUpdates.size>0){const Ce=w_(De.width,De.height,b.format,b.type);for(const it of b.layerUpdates){const Ft=De.data.subarray(it*Ce/De.data.BYTES_PER_ELEMENT,(it+1)*Ce/De.data.BYTES_PER_ELEMENT);i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ye,0,0,it,De.width,De.height,1,Ee,Ft)}b.clearLayerUpdates()}else i.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ye,0,0,0,De.width,De.height,be.depth,Ee,De.data)}else i.compressedTexImage3D(r.TEXTURE_2D_ARRAY,ye,Fe,De.width,De.height,be.depth,0,De.data,0,0);else rt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else X?Te&&i.texSubImage3D(r.TEXTURE_2D_ARRAY,ye,0,0,0,De.width,De.height,be.depth,Ee,Be,De.data):i.texImage3D(r.TEXTURE_2D_ARRAY,ye,Fe,De.width,De.height,be.depth,0,Ee,Be,De.data)}else{X&&Le&&i.texStorage2D(r.TEXTURE_2D,Ie,Fe,ct[0].width,ct[0].height);for(let ye=0,_e=ct.length;ye<_e;ye++)De=ct[ye],b.format!==Ni?Ee!==null?X?Te&&i.compressedTexSubImage2D(r.TEXTURE_2D,ye,0,0,De.width,De.height,Ee,De.data):i.compressedTexImage2D(r.TEXTURE_2D,ye,Fe,De.width,De.height,0,De.data):rt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):X?Te&&i.texSubImage2D(r.TEXTURE_2D,ye,0,0,De.width,De.height,Ee,Be,De.data):i.texImage2D(r.TEXTURE_2D,ye,Fe,De.width,De.height,0,Ee,Be,De.data)}else if(b.isDataArrayTexture)if(X){if(Le&&i.texStorage3D(r.TEXTURE_2D_ARRAY,Ie,Fe,be.width,be.height,be.depth),Te)if(b.layerUpdates.size>0){const ye=w_(be.width,be.height,b.format,b.type);for(const _e of b.layerUpdates){const Ce=be.data.subarray(_e*ye/be.data.BYTES_PER_ELEMENT,(_e+1)*ye/be.data.BYTES_PER_ELEMENT);i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,_e,be.width,be.height,1,Ee,Be,Ce)}b.clearLayerUpdates()}else i.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,be.width,be.height,be.depth,Ee,Be,be.data)}else i.texImage3D(r.TEXTURE_2D_ARRAY,0,Fe,be.width,be.height,be.depth,0,Ee,Be,be.data);else if(b.isData3DTexture)X?(Le&&i.texStorage3D(r.TEXTURE_3D,Ie,Fe,be.width,be.height,be.depth),Te&&i.texSubImage3D(r.TEXTURE_3D,0,0,0,0,be.width,be.height,be.depth,Ee,Be,be.data)):i.texImage3D(r.TEXTURE_3D,0,Fe,be.width,be.height,be.depth,0,Ee,Be,be.data);else if(b.isFramebufferTexture){if(Le)if(X)i.texStorage2D(r.TEXTURE_2D,Ie,Fe,be.width,be.height);else{let ye=be.width,_e=be.height;for(let Ce=0;Ce<Ie;Ce++)i.texImage2D(r.TEXTURE_2D,Ce,Fe,ye,_e,0,Ee,Be,null),ye>>=1,_e>>=1}}else if(ct.length>0){if(X&&Le){const ye=Ye(ct[0]);i.texStorage2D(r.TEXTURE_2D,Ie,Fe,ye.width,ye.height)}for(let ye=0,_e=ct.length;ye<_e;ye++)De=ct[ye],X?Te&&i.texSubImage2D(r.TEXTURE_2D,ye,0,0,Ee,Be,De):i.texImage2D(r.TEXTURE_2D,ye,Fe,Ee,Be,De);b.generateMipmaps=!1}else if(X){if(Le){const ye=Ye(be);i.texStorage2D(r.TEXTURE_2D,Ie,Fe,ye.width,ye.height)}Te&&i.texSubImage2D(r.TEXTURE_2D,0,0,0,Ee,Be,be)}else i.texImage2D(r.TEXTURE_2D,0,Fe,Ee,Be,be);M(b)&&_(he),Ke.__version=ce.version,b.onUpdate&&b.onUpdate(b)}D.__version=b.version}function ue(D,b,W){if(b.image.length!==6)return;const he=ve(D,b),xe=b.source;i.bindTexture(r.TEXTURE_CUBE_MAP,D.__webglTexture,r.TEXTURE0+W);const ce=s.get(xe);if(xe.version!==ce.__version||he===!0){i.activeTexture(r.TEXTURE0+W);const Ke=Rt.getPrimaries(Rt.workingColorSpace),we=b.colorSpace===sr?null:Rt.getPrimaries(b.colorSpace),We=b.colorSpace===sr||Ke===we?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,b.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,b.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,We);const nt=b.isCompressedTexture||b.image[0].isCompressedTexture,be=b.image[0]&&b.image[0].isDataTexture,Ee=[];for(let _e=0;_e<6;_e++)!nt&&!be?Ee[_e]=R(b.image[_e],!0,l.maxCubemapSize):Ee[_e]=be?b.image[_e].image:b.image[_e],Ee[_e]=Ot(b,Ee[_e]);const Be=Ee[0],Fe=c.convert(b.format,b.colorSpace),De=c.convert(b.type),ct=O(b.internalFormat,Fe,De,b.colorSpace),X=b.isVideoTexture!==!0,Le=ce.__version===void 0||he===!0,Te=xe.dataReady;let Ie=I(b,Be);ie(r.TEXTURE_CUBE_MAP,b);let ye;if(nt){X&&Le&&i.texStorage2D(r.TEXTURE_CUBE_MAP,Ie,ct,Be.width,Be.height);for(let _e=0;_e<6;_e++){ye=Ee[_e].mipmaps;for(let Ce=0;Ce<ye.length;Ce++){const it=ye[Ce];b.format!==Ni?Fe!==null?X?Te&&i.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Ce,0,0,it.width,it.height,Fe,it.data):i.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Ce,ct,it.width,it.height,0,it.data):rt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):X?Te&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Ce,0,0,it.width,it.height,Fe,De,it.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Ce,ct,it.width,it.height,0,Fe,De,it.data)}}}else{if(ye=b.mipmaps,X&&Le){ye.length>0&&Ie++;const _e=Ye(Ee[0]);i.texStorage2D(r.TEXTURE_CUBE_MAP,Ie,ct,_e.width,_e.height)}for(let _e=0;_e<6;_e++)if(be){X?Te&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,0,0,Ee[_e].width,Ee[_e].height,Fe,De,Ee[_e].data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,ct,Ee[_e].width,Ee[_e].height,0,Fe,De,Ee[_e].data);for(let Ce=0;Ce<ye.length;Ce++){const Ft=ye[Ce].image[_e].image;X?Te&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Ce+1,0,0,Ft.width,Ft.height,Fe,De,Ft.data):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Ce+1,ct,Ft.width,Ft.height,0,Fe,De,Ft.data)}}else{X?Te&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,0,0,Fe,De,Ee[_e]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_e,0,ct,Fe,De,Ee[_e]);for(let Ce=0;Ce<ye.length;Ce++){const it=ye[Ce];X?Te&&i.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Ce+1,0,0,Fe,De,it.image[_e]):i.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+_e,Ce+1,ct,Fe,De,it.image[_e])}}}M(b)&&_(r.TEXTURE_CUBE_MAP),ce.__version=xe.version,b.onUpdate&&b.onUpdate(b)}D.__version=b.version}function Ue(D,b,W,he,xe,ce){const Ke=c.convert(W.format,W.colorSpace),we=c.convert(W.type),We=O(W.internalFormat,Ke,we,W.colorSpace),nt=s.get(b),be=s.get(W);if(be.__renderTarget=b,!nt.__hasExternalTextures){const Ee=Math.max(1,b.width>>ce),Be=Math.max(1,b.height>>ce);xe===r.TEXTURE_3D||xe===r.TEXTURE_2D_ARRAY?i.texImage3D(xe,ce,We,Ee,Be,b.depth,0,Ke,we,null):i.texImage2D(xe,ce,We,Ee,Be,0,Ke,we,null)}i.bindFramebuffer(r.FRAMEBUFFER,D),Kt(b)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,he,xe,be.__webglTexture,0,G(b)):(xe===r.TEXTURE_2D||xe>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&xe<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,he,xe,be.__webglTexture,ce),i.bindFramebuffer(r.FRAMEBUFFER,null)}function Xe(D,b,W){if(r.bindRenderbuffer(r.RENDERBUFFER,D),b.depthBuffer){const he=b.depthTexture,xe=he&&he.isDepthTexture?he.type:null,ce=L(b.stencilBuffer,xe),Ke=b.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;Kt(b)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,G(b),ce,b.width,b.height):W?r.renderbufferStorageMultisample(r.RENDERBUFFER,G(b),ce,b.width,b.height):r.renderbufferStorage(r.RENDERBUFFER,ce,b.width,b.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Ke,r.RENDERBUFFER,D)}else{const he=b.textures;for(let xe=0;xe<he.length;xe++){const ce=he[xe],Ke=c.convert(ce.format,ce.colorSpace),we=c.convert(ce.type),We=O(ce.internalFormat,Ke,we,ce.colorSpace);Kt(b)?d.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,G(b),We,b.width,b.height):W?r.renderbufferStorageMultisample(r.RENDERBUFFER,G(b),We,b.width,b.height):r.renderbufferStorage(r.RENDERBUFFER,We,b.width,b.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Ge(D,b,W){const he=b.isWebGLCubeRenderTarget===!0;if(i.bindFramebuffer(r.FRAMEBUFFER,D),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const xe=s.get(b.depthTexture);if(xe.__renderTarget=b,(!xe.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),he){if(xe.__webglInit===void 0&&(xe.__webglInit=!0,b.depthTexture.addEventListener("dispose",z)),xe.__webglTexture===void 0){xe.__webglTexture=r.createTexture(),i.bindTexture(r.TEXTURE_CUBE_MAP,xe.__webglTexture),ie(r.TEXTURE_CUBE_MAP,b.depthTexture);const nt=c.convert(b.depthTexture.format),be=c.convert(b.depthTexture.type);let Ee;b.depthTexture.format===Ta?Ee=r.DEPTH_COMPONENT24:b.depthTexture.format===Br&&(Ee=r.DEPTH24_STENCIL8);for(let Be=0;Be<6;Be++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Be,0,Ee,b.width,b.height,0,nt,be,null)}}else fe(b.depthTexture,0);const ce=xe.__webglTexture,Ke=G(b),we=he?r.TEXTURE_CUBE_MAP_POSITIVE_X+W:r.TEXTURE_2D,We=b.depthTexture.format===Br?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(b.depthTexture.format===Ta)Kt(b)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,We,we,ce,0,Ke):r.framebufferTexture2D(r.FRAMEBUFFER,We,we,ce,0);else if(b.depthTexture.format===Br)Kt(b)?d.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,We,we,ce,0,Ke):r.framebufferTexture2D(r.FRAMEBUFFER,We,we,ce,0);else throw new Error("Unknown depthTexture format")}function pt(D){const b=s.get(D),W=D.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==D.depthTexture){const he=D.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),he){const xe=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,he.removeEventListener("dispose",xe)};he.addEventListener("dispose",xe),b.__depthDisposeCallback=xe}b.__boundDepthTexture=he}if(D.depthTexture&&!b.__autoAllocateDepthBuffer)if(W)for(let he=0;he<6;he++)Ge(b.__webglFramebuffer[he],D,he);else{const he=D.texture.mipmaps;he&&he.length>0?Ge(b.__webglFramebuffer[0],D,0):Ge(b.__webglFramebuffer,D,0)}else if(W){b.__webglDepthbuffer=[];for(let he=0;he<6;he++)if(i.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer[he]),b.__webglDepthbuffer[he]===void 0)b.__webglDepthbuffer[he]=r.createRenderbuffer(),Xe(b.__webglDepthbuffer[he],D,!1);else{const xe=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ce=b.__webglDepthbuffer[he];r.bindRenderbuffer(r.RENDERBUFFER,ce),r.framebufferRenderbuffer(r.FRAMEBUFFER,xe,r.RENDERBUFFER,ce)}}else{const he=D.texture.mipmaps;if(he&&he.length>0?i.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer[0]):i.bindFramebuffer(r.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=r.createRenderbuffer(),Xe(b.__webglDepthbuffer,D,!1);else{const xe=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ce=b.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,ce),r.framebufferRenderbuffer(r.FRAMEBUFFER,xe,r.RENDERBUFFER,ce)}}i.bindFramebuffer(r.FRAMEBUFFER,null)}function Jt(D,b,W){const he=s.get(D);b!==void 0&&Ue(he.__webglFramebuffer,D,D.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),W!==void 0&&pt(D)}function xt(D){const b=D.texture,W=s.get(D),he=s.get(b);D.addEventListener("dispose",F);const xe=D.textures,ce=D.isWebGLCubeRenderTarget===!0,Ke=xe.length>1;if(Ke||(he.__webglTexture===void 0&&(he.__webglTexture=r.createTexture()),he.__version=b.version,h.memory.textures++),ce){W.__webglFramebuffer=[];for(let we=0;we<6;we++)if(b.mipmaps&&b.mipmaps.length>0){W.__webglFramebuffer[we]=[];for(let We=0;We<b.mipmaps.length;We++)W.__webglFramebuffer[we][We]=r.createFramebuffer()}else W.__webglFramebuffer[we]=r.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){W.__webglFramebuffer=[];for(let we=0;we<b.mipmaps.length;we++)W.__webglFramebuffer[we]=r.createFramebuffer()}else W.__webglFramebuffer=r.createFramebuffer();if(Ke)for(let we=0,We=xe.length;we<We;we++){const nt=s.get(xe[we]);nt.__webglTexture===void 0&&(nt.__webglTexture=r.createTexture(),h.memory.textures++)}if(D.samples>0&&Kt(D)===!1){W.__webglMultisampledFramebuffer=r.createFramebuffer(),W.__webglColorRenderbuffer=[],i.bindFramebuffer(r.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let we=0;we<xe.length;we++){const We=xe[we];W.__webglColorRenderbuffer[we]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,W.__webglColorRenderbuffer[we]);const nt=c.convert(We.format,We.colorSpace),be=c.convert(We.type),Ee=O(We.internalFormat,nt,be,We.colorSpace,D.isXRRenderTarget===!0),Be=G(D);r.renderbufferStorageMultisample(r.RENDERBUFFER,Be,Ee,D.width,D.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+we,r.RENDERBUFFER,W.__webglColorRenderbuffer[we])}r.bindRenderbuffer(r.RENDERBUFFER,null),D.depthBuffer&&(W.__webglDepthRenderbuffer=r.createRenderbuffer(),Xe(W.__webglDepthRenderbuffer,D,!0)),i.bindFramebuffer(r.FRAMEBUFFER,null)}}if(ce){i.bindTexture(r.TEXTURE_CUBE_MAP,he.__webglTexture),ie(r.TEXTURE_CUBE_MAP,b);for(let we=0;we<6;we++)if(b.mipmaps&&b.mipmaps.length>0)for(let We=0;We<b.mipmaps.length;We++)Ue(W.__webglFramebuffer[we][We],D,b,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+we,We);else Ue(W.__webglFramebuffer[we],D,b,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+we,0);M(b)&&_(r.TEXTURE_CUBE_MAP),i.unbindTexture()}else if(Ke){for(let we=0,We=xe.length;we<We;we++){const nt=xe[we],be=s.get(nt);let Ee=r.TEXTURE_2D;(D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(Ee=D.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(Ee,be.__webglTexture),ie(Ee,nt),Ue(W.__webglFramebuffer,D,nt,r.COLOR_ATTACHMENT0+we,Ee,0),M(nt)&&_(Ee)}i.unbindTexture()}else{let we=r.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(we=D.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),i.bindTexture(we,he.__webglTexture),ie(we,b),b.mipmaps&&b.mipmaps.length>0)for(let We=0;We<b.mipmaps.length;We++)Ue(W.__webglFramebuffer[We],D,b,r.COLOR_ATTACHMENT0,we,We);else Ue(W.__webglFramebuffer,D,b,r.COLOR_ATTACHMENT0,we,0);M(b)&&_(we),i.unbindTexture()}D.depthBuffer&&pt(D)}function mt(D){const b=D.textures;for(let W=0,he=b.length;W<he;W++){const xe=b[W];if(M(xe)){const ce=N(D),Ke=s.get(xe).__webglTexture;i.bindTexture(ce,Ke),_(ce),i.unbindTexture()}}}const Dt=[],ot=[];function en(D){if(D.samples>0){if(Kt(D)===!1){const b=D.textures,W=D.width,he=D.height;let xe=r.COLOR_BUFFER_BIT;const ce=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ke=s.get(D),we=b.length>1;if(we)for(let nt=0;nt<b.length;nt++)i.bindFramebuffer(r.FRAMEBUFFER,Ke.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+nt,r.RENDERBUFFER,null),i.bindFramebuffer(r.FRAMEBUFFER,Ke.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+nt,r.TEXTURE_2D,null,0);i.bindFramebuffer(r.READ_FRAMEBUFFER,Ke.__webglMultisampledFramebuffer);const We=D.texture.mipmaps;We&&We.length>0?i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ke.__webglFramebuffer[0]):i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ke.__webglFramebuffer);for(let nt=0;nt<b.length;nt++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(xe|=r.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(xe|=r.STENCIL_BUFFER_BIT)),we){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Ke.__webglColorRenderbuffer[nt]);const be=s.get(b[nt]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,be,0)}r.blitFramebuffer(0,0,W,he,0,0,W,he,xe,r.NEAREST),p===!0&&(Dt.length=0,ot.length=0,Dt.push(r.COLOR_ATTACHMENT0+nt),D.depthBuffer&&D.resolveDepthBuffer===!1&&(Dt.push(ce),ot.push(ce),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,ot)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Dt))}if(i.bindFramebuffer(r.READ_FRAMEBUFFER,null),i.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),we)for(let nt=0;nt<b.length;nt++){i.bindFramebuffer(r.FRAMEBUFFER,Ke.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+nt,r.RENDERBUFFER,Ke.__webglColorRenderbuffer[nt]);const be=s.get(b[nt]).__webglTexture;i.bindFramebuffer(r.FRAMEBUFFER,Ke.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+nt,r.TEXTURE_2D,be,0)}i.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ke.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&p){const b=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[b])}}}function G(D){return Math.min(l.maxSamples,D.samples)}function Kt(D){const b=s.get(D);return D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Et(D){const b=h.render.frame;g.get(D)!==b&&(g.set(D,b),D.update())}function Ot(D,b){const W=D.colorSpace,he=D.format,xe=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||W!==Qs&&W!==sr&&(Rt.getTransfer(W)===Ht?(he!==Ni||xe!==oi)&&rt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):At("WebGLTextures: Unsupported texture color space:",W)),b}function Ye(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(m.width=D.naturalWidth||D.width,m.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(m.width=D.displayWidth,m.height=D.displayHeight):(m.width=D.width,m.height=D.height),m}this.allocateTextureUnit=re,this.resetTextureUnits=se,this.setTexture2D=fe,this.setTexture2DArray=P,this.setTexture3D=H,this.setTextureCube=ae,this.rebindTextures=Jt,this.setupRenderTarget=xt,this.updateRenderTargetMipmap=mt,this.updateMultisampleRenderTarget=en,this.setupDepthRenderbuffer=pt,this.setupFrameBufferTexture=Ue,this.useMultisampledRTT=Kt,this.isReversedDepthBuffer=function(){return i.buffers.depth.getReversed()}}function p3(r,e){function i(s,l=sr){let c;const h=Rt.getTransfer(l);if(s===oi)return r.UNSIGNED_BYTE;if(s===Gp)return r.UNSIGNED_SHORT_4_4_4_4;if(s===Vp)return r.UNSIGNED_SHORT_5_5_5_1;if(s===Ix)return r.UNSIGNED_INT_5_9_9_9_REV;if(s===Bx)return r.UNSIGNED_INT_10F_11F_11F_REV;if(s===Px)return r.BYTE;if(s===Fx)return r.SHORT;if(s===gl)return r.UNSIGNED_SHORT;if(s===Hp)return r.INT;if(s===ji)return r.UNSIGNED_INT;if(s===Ui)return r.FLOAT;if(s===Ea)return r.HALF_FLOAT;if(s===zx)return r.ALPHA;if(s===Hx)return r.RGB;if(s===Ni)return r.RGBA;if(s===Ta)return r.DEPTH_COMPONENT;if(s===Br)return r.DEPTH_STENCIL;if(s===kp)return r.RED;if(s===Xp)return r.RED_INTEGER;if(s===Ks)return r.RG;if(s===Wp)return r.RG_INTEGER;if(s===qp)return r.RGBA_INTEGER;if(s===du||s===hu||s===pu||s===mu)if(h===Ht)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(s===du)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===hu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===pu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===mu)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(s===du)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===hu)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===pu)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===mu)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Vh||s===kh||s===Xh||s===Wh)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(s===Vh)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===kh)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Xh)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Wh)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===qh||s===jh||s===Yh||s===Zh||s===Kh||s===Qh||s===$h)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(s===qh||s===jh)return h===Ht?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(s===Yh)return h===Ht?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(s===Zh)return c.COMPRESSED_R11_EAC;if(s===Kh)return c.COMPRESSED_SIGNED_R11_EAC;if(s===Qh)return c.COMPRESSED_RG11_EAC;if(s===$h)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(s===Jh||s===ep||s===tp||s===np||s===ip||s===ap||s===rp||s===sp||s===op||s===lp||s===cp||s===up||s===fp||s===dp)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(s===Jh)return h===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===ep)return h===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===tp)return h===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===np)return h===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===ip)return h===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===ap)return h===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===rp)return h===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===sp)return h===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===op)return h===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===lp)return h===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===cp)return h===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===up)return h===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===fp)return h===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===dp)return h===Ht?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===hp||s===pp||s===mp)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(s===hp)return h===Ht?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===pp)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===mp)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===gp||s===vp||s===_p||s===xp)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(s===gp)return c.COMPRESSED_RED_RGTC1_EXT;if(s===vp)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===_p)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===xp)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===vl?r.UNSIGNED_INT_24_8:r[s]!==void 0?r[s]:null}return{convert:i}}const m3=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,g3=`
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

}`;class v3{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,i){if(this.texture===null){const s=new tS(e.texture);(e.depthNear!==i.depthNear||e.depthFar!==i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const i=e.cameras[0].viewport,s=new Yi({vertexShader:m3,fragmentShader:g3,uniforms:{depthColor:{value:this.texture},depthWidth:{value:i.z},depthHeight:{value:i.w}}});this.mesh=new yn(new Au(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class _3 extends eo{constructor(e,i){super();const s=this;let l=null,c=1,h=null,d="local-floor",p=1,m=null,g=null,v=null,S=null,y=null,E=null;const R=typeof XRWebGLBinding<"u",M=new v3,_={},N=i.getContextAttributes();let O=null,L=null;const I=[],z=[],F=new Mt;let K=null;const C=new si;C.viewport=new an;const w=new si;w.viewport=new an;const k=[C,w],se=new A1;let re=null,pe=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ne){let ue=I[ne];return ue===void 0&&(ue=new uh,I[ne]=ue),ue.getTargetRaySpace()},this.getControllerGrip=function(ne){let ue=I[ne];return ue===void 0&&(ue=new uh,I[ne]=ue),ue.getGripSpace()},this.getHand=function(ne){let ue=I[ne];return ue===void 0&&(ue=new uh,I[ne]=ue),ue.getHandSpace()};function fe(ne){const ue=z.indexOf(ne.inputSource);if(ue===-1)return;const Ue=I[ue];Ue!==void 0&&(Ue.update(ne.inputSource,ne.frame,m||h),Ue.dispatchEvent({type:ne.type,data:ne.inputSource}))}function P(){l.removeEventListener("select",fe),l.removeEventListener("selectstart",fe),l.removeEventListener("selectend",fe),l.removeEventListener("squeeze",fe),l.removeEventListener("squeezestart",fe),l.removeEventListener("squeezeend",fe),l.removeEventListener("end",P),l.removeEventListener("inputsourceschange",H);for(let ne=0;ne<I.length;ne++){const ue=z[ne];ue!==null&&(z[ne]=null,I[ne].disconnect(ue))}re=null,pe=null,M.reset();for(const ne in _)delete _[ne];e.setRenderTarget(O),y=null,S=null,v=null,l=null,L=null,He.stop(),s.isPresenting=!1,e.setPixelRatio(K),e.setSize(F.width,F.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ne){c=ne,s.isPresenting===!0&&rt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ne){d=ne,s.isPresenting===!0&&rt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||h},this.setReferenceSpace=function(ne){m=ne},this.getBaseLayer=function(){return S!==null?S:y},this.getBinding=function(){return v===null&&R&&(v=new XRWebGLBinding(l,i)),v},this.getFrame=function(){return E},this.getSession=function(){return l},this.setSession=async function(ne){if(l=ne,l!==null){if(O=e.getRenderTarget(),l.addEventListener("select",fe),l.addEventListener("selectstart",fe),l.addEventListener("selectend",fe),l.addEventListener("squeeze",fe),l.addEventListener("squeezestart",fe),l.addEventListener("squeezeend",fe),l.addEventListener("end",P),l.addEventListener("inputsourceschange",H),N.xrCompatible!==!0&&await i.makeXRCompatible(),K=e.getPixelRatio(),e.getSize(F),R&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ue=null,Xe=null,Ge=null;N.depth&&(Ge=N.stencil?i.DEPTH24_STENCIL8:i.DEPTH_COMPONENT24,Ue=N.stencil?Br:Ta,Xe=N.stencil?vl:ji);const pt={colorFormat:i.RGBA8,depthFormat:Ge,scaleFactor:c};v=this.getBinding(),S=v.createProjectionLayer(pt),l.updateRenderState({layers:[S]}),e.setPixelRatio(1),e.setSize(S.textureWidth,S.textureHeight,!1),L=new qi(S.textureWidth,S.textureHeight,{format:Ni,type:oi,depthTexture:new Sl(S.textureWidth,S.textureHeight,Xe,void 0,void 0,void 0,void 0,void 0,void 0,Ue),stencilBuffer:N.stencil,colorSpace:e.outputColorSpace,samples:N.antialias?4:0,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}else{const Ue={antialias:N.antialias,alpha:!0,depth:N.depth,stencil:N.stencil,framebufferScaleFactor:c};y=new XRWebGLLayer(l,i,Ue),l.updateRenderState({baseLayer:y}),e.setPixelRatio(1),e.setSize(y.framebufferWidth,y.framebufferHeight,!1),L=new qi(y.framebufferWidth,y.framebufferHeight,{format:Ni,type:oi,colorSpace:e.outputColorSpace,stencilBuffer:N.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1})}L.isXRRenderTarget=!0,this.setFoveation(p),m=null,h=await l.requestReferenceSpace(d),He.setContext(l),He.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return M.getDepthTexture()};function H(ne){for(let ue=0;ue<ne.removed.length;ue++){const Ue=ne.removed[ue],Xe=z.indexOf(Ue);Xe>=0&&(z[Xe]=null,I[Xe].disconnect(Ue))}for(let ue=0;ue<ne.added.length;ue++){const Ue=ne.added[ue];let Xe=z.indexOf(Ue);if(Xe===-1){for(let pt=0;pt<I.length;pt++)if(pt>=z.length){z.push(Ue),Xe=pt;break}else if(z[pt]===null){z[pt]=Ue,Xe=pt;break}if(Xe===-1)break}const Ge=I[Xe];Ge&&Ge.connect(Ue)}}const ae=new Z,Me=new Z;function Se(ne,ue,Ue){ae.setFromMatrixPosition(ue.matrixWorld),Me.setFromMatrixPosition(Ue.matrixWorld);const Xe=ae.distanceTo(Me),Ge=ue.projectionMatrix.elements,pt=Ue.projectionMatrix.elements,Jt=Ge[14]/(Ge[10]-1),xt=Ge[14]/(Ge[10]+1),mt=(Ge[9]+1)/Ge[5],Dt=(Ge[9]-1)/Ge[5],ot=(Ge[8]-1)/Ge[0],en=(pt[8]+1)/pt[0],G=Jt*ot,Kt=Jt*en,Et=Xe/(-ot+en),Ot=Et*-ot;if(ue.matrixWorld.decompose(ne.position,ne.quaternion,ne.scale),ne.translateX(Ot),ne.translateZ(Et),ne.matrixWorld.compose(ne.position,ne.quaternion,ne.scale),ne.matrixWorldInverse.copy(ne.matrixWorld).invert(),Ge[10]===-1)ne.projectionMatrix.copy(ue.projectionMatrix),ne.projectionMatrixInverse.copy(ue.projectionMatrixInverse);else{const Ye=Jt+Et,D=xt+Et,b=G-Ot,W=Kt+(Xe-Ot),he=mt*xt/D*Ye,xe=Dt*xt/D*Ye;ne.projectionMatrix.makePerspective(b,W,he,xe,Ye,D),ne.projectionMatrixInverse.copy(ne.projectionMatrix).invert()}}function U(ne,ue){ue===null?ne.matrixWorld.copy(ne.matrix):ne.matrixWorld.multiplyMatrices(ue.matrixWorld,ne.matrix),ne.matrixWorldInverse.copy(ne.matrixWorld).invert()}this.updateCamera=function(ne){if(l===null)return;let ue=ne.near,Ue=ne.far;M.texture!==null&&(M.depthNear>0&&(ue=M.depthNear),M.depthFar>0&&(Ue=M.depthFar)),se.near=w.near=C.near=ue,se.far=w.far=C.far=Ue,(re!==se.near||pe!==se.far)&&(l.updateRenderState({depthNear:se.near,depthFar:se.far}),re=se.near,pe=se.far),se.layers.mask=ne.layers.mask|6,C.layers.mask=se.layers.mask&3,w.layers.mask=se.layers.mask&5;const Xe=ne.parent,Ge=se.cameras;U(se,Xe);for(let pt=0;pt<Ge.length;pt++)U(Ge[pt],Xe);Ge.length===2?Se(se,C,w):se.projectionMatrix.copy(C.projectionMatrix),ie(ne,se,Xe)};function ie(ne,ue,Ue){Ue===null?ne.matrix.copy(ue.matrixWorld):(ne.matrix.copy(Ue.matrixWorld),ne.matrix.invert(),ne.matrix.multiply(ue.matrixWorld)),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale),ne.updateMatrixWorld(!0),ne.projectionMatrix.copy(ue.projectionMatrix),ne.projectionMatrixInverse.copy(ue.projectionMatrixInverse),ne.isPerspectiveCamera&&(ne.fov=xl*2*Math.atan(1/ne.projectionMatrix.elements[5]),ne.zoom=1)}this.getCamera=function(){return se},this.getFoveation=function(){if(!(S===null&&y===null))return p},this.setFoveation=function(ne){p=ne,S!==null&&(S.fixedFoveation=ne),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=ne)},this.hasDepthSensing=function(){return M.texture!==null},this.getDepthSensingMesh=function(){return M.getMesh(se)},this.getCameraTexture=function(ne){return _[ne]};let ve=null;function Re(ne,ue){if(g=ue.getViewerPose(m||h),E=ue,g!==null){const Ue=g.views;y!==null&&(e.setRenderTargetFramebuffer(L,y.framebuffer),e.setRenderTarget(L));let Xe=!1;Ue.length!==se.cameras.length&&(se.cameras.length=0,Xe=!0);for(let xt=0;xt<Ue.length;xt++){const mt=Ue[xt];let Dt=null;if(y!==null)Dt=y.getViewport(mt);else{const en=v.getViewSubImage(S,mt);Dt=en.viewport,xt===0&&(e.setRenderTargetTextures(L,en.colorTexture,en.depthStencilTexture),e.setRenderTarget(L))}let ot=k[xt];ot===void 0&&(ot=new si,ot.layers.enable(xt),ot.viewport=new an,k[xt]=ot),ot.matrix.fromArray(mt.transform.matrix),ot.matrix.decompose(ot.position,ot.quaternion,ot.scale),ot.projectionMatrix.fromArray(mt.projectionMatrix),ot.projectionMatrixInverse.copy(ot.projectionMatrix).invert(),ot.viewport.set(Dt.x,Dt.y,Dt.width,Dt.height),xt===0&&(se.matrix.copy(ot.matrix),se.matrix.decompose(se.position,se.quaternion,se.scale)),Xe===!0&&se.cameras.push(ot)}const Ge=l.enabledFeatures;if(Ge&&Ge.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&R){v=s.getBinding();const xt=v.getDepthInformation(Ue[0]);xt&&xt.isValid&&xt.texture&&M.init(xt,l.renderState)}if(Ge&&Ge.includes("camera-access")&&R){e.state.unbindTexture(),v=s.getBinding();for(let xt=0;xt<Ue.length;xt++){const mt=Ue[xt].camera;if(mt){let Dt=_[mt];Dt||(Dt=new tS,_[mt]=Dt);const ot=v.getCameraImage(mt);Dt.sourceTexture=ot}}}}for(let Ue=0;Ue<I.length;Ue++){const Xe=z[Ue],Ge=I[Ue];Xe!==null&&Ge!==void 0&&Ge.update(Xe,ue,m||h)}ve&&ve(ne,ue),ue.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:ue}),E=null}const He=new rS;He.setAnimationLoop(Re),this.setAnimationLoop=function(ne){ve=ne},this.dispose=function(){}}}const Lr=new Oi,x3=new qt;function S3(r,e){function i(M,_){M.matrixAutoUpdate===!0&&M.updateMatrix(),_.value.copy(M.matrix)}function s(M,_){_.color.getRGB(M.fogColor.value,Yx(r)),_.isFog?(M.fogNear.value=_.near,M.fogFar.value=_.far):_.isFogExp2&&(M.fogDensity.value=_.density)}function l(M,_,N,O,L){_.isMeshBasicMaterial||_.isMeshLambertMaterial?c(M,_):_.isMeshToonMaterial?(c(M,_),v(M,_)):_.isMeshPhongMaterial?(c(M,_),g(M,_)):_.isMeshStandardMaterial?(c(M,_),S(M,_),_.isMeshPhysicalMaterial&&y(M,_,L)):_.isMeshMatcapMaterial?(c(M,_),E(M,_)):_.isMeshDepthMaterial?c(M,_):_.isMeshDistanceMaterial?(c(M,_),R(M,_)):_.isMeshNormalMaterial?c(M,_):_.isLineBasicMaterial?(h(M,_),_.isLineDashedMaterial&&d(M,_)):_.isPointsMaterial?p(M,_,N,O):_.isSpriteMaterial?m(M,_):_.isShadowMaterial?(M.color.value.copy(_.color),M.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function c(M,_){M.opacity.value=_.opacity,_.color&&M.diffuse.value.copy(_.color),_.emissive&&M.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(M.map.value=_.map,i(_.map,M.mapTransform)),_.alphaMap&&(M.alphaMap.value=_.alphaMap,i(_.alphaMap,M.alphaMapTransform)),_.bumpMap&&(M.bumpMap.value=_.bumpMap,i(_.bumpMap,M.bumpMapTransform),M.bumpScale.value=_.bumpScale,_.side===Vn&&(M.bumpScale.value*=-1)),_.normalMap&&(M.normalMap.value=_.normalMap,i(_.normalMap,M.normalMapTransform),M.normalScale.value.copy(_.normalScale),_.side===Vn&&M.normalScale.value.negate()),_.displacementMap&&(M.displacementMap.value=_.displacementMap,i(_.displacementMap,M.displacementMapTransform),M.displacementScale.value=_.displacementScale,M.displacementBias.value=_.displacementBias),_.emissiveMap&&(M.emissiveMap.value=_.emissiveMap,i(_.emissiveMap,M.emissiveMapTransform)),_.specularMap&&(M.specularMap.value=_.specularMap,i(_.specularMap,M.specularMapTransform)),_.alphaTest>0&&(M.alphaTest.value=_.alphaTest);const N=e.get(_),O=N.envMap,L=N.envMapRotation;O&&(M.envMap.value=O,Lr.copy(L),Lr.x*=-1,Lr.y*=-1,Lr.z*=-1,O.isCubeTexture&&O.isRenderTargetTexture===!1&&(Lr.y*=-1,Lr.z*=-1),M.envMapRotation.value.setFromMatrix4(x3.makeRotationFromEuler(Lr)),M.flipEnvMap.value=O.isCubeTexture&&O.isRenderTargetTexture===!1?-1:1,M.reflectivity.value=_.reflectivity,M.ior.value=_.ior,M.refractionRatio.value=_.refractionRatio),_.lightMap&&(M.lightMap.value=_.lightMap,M.lightMapIntensity.value=_.lightMapIntensity,i(_.lightMap,M.lightMapTransform)),_.aoMap&&(M.aoMap.value=_.aoMap,M.aoMapIntensity.value=_.aoMapIntensity,i(_.aoMap,M.aoMapTransform))}function h(M,_){M.diffuse.value.copy(_.color),M.opacity.value=_.opacity,_.map&&(M.map.value=_.map,i(_.map,M.mapTransform))}function d(M,_){M.dashSize.value=_.dashSize,M.totalSize.value=_.dashSize+_.gapSize,M.scale.value=_.scale}function p(M,_,N,O){M.diffuse.value.copy(_.color),M.opacity.value=_.opacity,M.size.value=_.size*N,M.scale.value=O*.5,_.map&&(M.map.value=_.map,i(_.map,M.uvTransform)),_.alphaMap&&(M.alphaMap.value=_.alphaMap,i(_.alphaMap,M.alphaMapTransform)),_.alphaTest>0&&(M.alphaTest.value=_.alphaTest)}function m(M,_){M.diffuse.value.copy(_.color),M.opacity.value=_.opacity,M.rotation.value=_.rotation,_.map&&(M.map.value=_.map,i(_.map,M.mapTransform)),_.alphaMap&&(M.alphaMap.value=_.alphaMap,i(_.alphaMap,M.alphaMapTransform)),_.alphaTest>0&&(M.alphaTest.value=_.alphaTest)}function g(M,_){M.specular.value.copy(_.specular),M.shininess.value=Math.max(_.shininess,1e-4)}function v(M,_){_.gradientMap&&(M.gradientMap.value=_.gradientMap)}function S(M,_){M.metalness.value=_.metalness,_.metalnessMap&&(M.metalnessMap.value=_.metalnessMap,i(_.metalnessMap,M.metalnessMapTransform)),M.roughness.value=_.roughness,_.roughnessMap&&(M.roughnessMap.value=_.roughnessMap,i(_.roughnessMap,M.roughnessMapTransform)),_.envMap&&(M.envMapIntensity.value=_.envMapIntensity)}function y(M,_,N){M.ior.value=_.ior,_.sheen>0&&(M.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),M.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(M.sheenColorMap.value=_.sheenColorMap,i(_.sheenColorMap,M.sheenColorMapTransform)),_.sheenRoughnessMap&&(M.sheenRoughnessMap.value=_.sheenRoughnessMap,i(_.sheenRoughnessMap,M.sheenRoughnessMapTransform))),_.clearcoat>0&&(M.clearcoat.value=_.clearcoat,M.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(M.clearcoatMap.value=_.clearcoatMap,i(_.clearcoatMap,M.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(M.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,i(_.clearcoatRoughnessMap,M.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(M.clearcoatNormalMap.value=_.clearcoatNormalMap,i(_.clearcoatNormalMap,M.clearcoatNormalMapTransform),M.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===Vn&&M.clearcoatNormalScale.value.negate())),_.dispersion>0&&(M.dispersion.value=_.dispersion),_.iridescence>0&&(M.iridescence.value=_.iridescence,M.iridescenceIOR.value=_.iridescenceIOR,M.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],M.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(M.iridescenceMap.value=_.iridescenceMap,i(_.iridescenceMap,M.iridescenceMapTransform)),_.iridescenceThicknessMap&&(M.iridescenceThicknessMap.value=_.iridescenceThicknessMap,i(_.iridescenceThicknessMap,M.iridescenceThicknessMapTransform))),_.transmission>0&&(M.transmission.value=_.transmission,M.transmissionSamplerMap.value=N.texture,M.transmissionSamplerSize.value.set(N.width,N.height),_.transmissionMap&&(M.transmissionMap.value=_.transmissionMap,i(_.transmissionMap,M.transmissionMapTransform)),M.thickness.value=_.thickness,_.thicknessMap&&(M.thicknessMap.value=_.thicknessMap,i(_.thicknessMap,M.thicknessMapTransform)),M.attenuationDistance.value=_.attenuationDistance,M.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(M.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(M.anisotropyMap.value=_.anisotropyMap,i(_.anisotropyMap,M.anisotropyMapTransform))),M.specularIntensity.value=_.specularIntensity,M.specularColor.value.copy(_.specularColor),_.specularColorMap&&(M.specularColorMap.value=_.specularColorMap,i(_.specularColorMap,M.specularColorMapTransform)),_.specularIntensityMap&&(M.specularIntensityMap.value=_.specularIntensityMap,i(_.specularIntensityMap,M.specularIntensityMapTransform))}function E(M,_){_.matcap&&(M.matcap.value=_.matcap)}function R(M,_){const N=e.get(_).light;M.referencePosition.value.setFromMatrixPosition(N.matrixWorld),M.nearDistance.value=N.shadow.camera.near,M.farDistance.value=N.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:l}}function y3(r,e,i,s){let l={},c={},h=[];const d=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function p(N,O){const L=O.program;s.uniformBlockBinding(N,L)}function m(N,O){let L=l[N.id];L===void 0&&(E(N),L=g(N),l[N.id]=L,N.addEventListener("dispose",M));const I=O.program;s.updateUBOMapping(N,I);const z=e.render.frame;c[N.id]!==z&&(S(N),c[N.id]=z)}function g(N){const O=v();N.__bindingPointIndex=O;const L=r.createBuffer(),I=N.__size,z=N.usage;return r.bindBuffer(r.UNIFORM_BUFFER,L),r.bufferData(r.UNIFORM_BUFFER,I,z),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,O,L),L}function v(){for(let N=0;N<d;N++)if(h.indexOf(N)===-1)return h.push(N),N;return At("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function S(N){const O=l[N.id],L=N.uniforms,I=N.__cache;r.bindBuffer(r.UNIFORM_BUFFER,O);for(let z=0,F=L.length;z<F;z++){const K=Array.isArray(L[z])?L[z]:[L[z]];for(let C=0,w=K.length;C<w;C++){const k=K[C];if(y(k,z,C,I)===!0){const se=k.__offset,re=Array.isArray(k.value)?k.value:[k.value];let pe=0;for(let fe=0;fe<re.length;fe++){const P=re[fe],H=R(P);typeof P=="number"||typeof P=="boolean"?(k.__data[0]=P,r.bufferSubData(r.UNIFORM_BUFFER,se+pe,k.__data)):P.isMatrix3?(k.__data[0]=P.elements[0],k.__data[1]=P.elements[1],k.__data[2]=P.elements[2],k.__data[3]=0,k.__data[4]=P.elements[3],k.__data[5]=P.elements[4],k.__data[6]=P.elements[5],k.__data[7]=0,k.__data[8]=P.elements[6],k.__data[9]=P.elements[7],k.__data[10]=P.elements[8],k.__data[11]=0):(P.toArray(k.__data,pe),pe+=H.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,se,k.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function y(N,O,L,I){const z=N.value,F=O+"_"+L;if(I[F]===void 0)return typeof z=="number"||typeof z=="boolean"?I[F]=z:I[F]=z.clone(),!0;{const K=I[F];if(typeof z=="number"||typeof z=="boolean"){if(K!==z)return I[F]=z,!0}else if(K.equals(z)===!1)return K.copy(z),!0}return!1}function E(N){const O=N.uniforms;let L=0;const I=16;for(let F=0,K=O.length;F<K;F++){const C=Array.isArray(O[F])?O[F]:[O[F]];for(let w=0,k=C.length;w<k;w++){const se=C[w],re=Array.isArray(se.value)?se.value:[se.value];for(let pe=0,fe=re.length;pe<fe;pe++){const P=re[pe],H=R(P),ae=L%I,Me=ae%H.boundary,Se=ae+Me;L+=Me,Se!==0&&I-Se<H.storage&&(L+=I-Se),se.__data=new Float32Array(H.storage/Float32Array.BYTES_PER_ELEMENT),se.__offset=L,L+=H.storage}}}const z=L%I;return z>0&&(L+=I-z),N.__size=L,N.__cache={},this}function R(N){const O={boundary:0,storage:0};return typeof N=="number"||typeof N=="boolean"?(O.boundary=4,O.storage=4):N.isVector2?(O.boundary=8,O.storage=8):N.isVector3||N.isColor?(O.boundary=16,O.storage=12):N.isVector4?(O.boundary=16,O.storage=16):N.isMatrix3?(O.boundary=48,O.storage=48):N.isMatrix4?(O.boundary=64,O.storage=64):N.isTexture?rt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):rt("WebGLRenderer: Unsupported uniform value type.",N),O}function M(N){const O=N.target;O.removeEventListener("dispose",M);const L=h.indexOf(O.__bindingPointIndex);h.splice(L,1),r.deleteBuffer(l[O.id]),delete l[O.id],delete c[O.id]}function _(){for(const N in l)r.deleteBuffer(l[N]);h=[],l={},c={}}return{bind:p,update:m,dispose:_}}const M3=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Gi=null;function b3(){return Gi===null&&(Gi=new Jx(M3,16,16,Ks,Ea),Gi.name="DFG_LUT",Gi.minFilter=In,Gi.magFilter=In,Gi.wrapS=ya,Gi.wrapT=ya,Gi.generateMipmaps=!1,Gi.needsUpdate=!0),Gi}class E3{constructor(e={}){const{canvas:i=AE(),context:s=null,depth:l=!0,stencil:c=!1,alpha:h=!1,antialias:d=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:m=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:v=!1,reversedDepthBuffer:S=!1,outputBufferType:y=oi}=e;this.isWebGLRenderer=!0;let E;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");E=s.getContextAttributes().alpha}else E=h;const R=y,M=new Set([qp,Wp,Xp]),_=new Set([oi,ji,gl,vl,Gp,Vp]),N=new Uint32Array(4),O=new Int32Array(4);let L=null,I=null;const z=[],F=[];let K=null;this.domElement=i,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Wi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const C=this;let w=!1;this._outputColorSpace=ri;let k=0,se=0,re=null,pe=-1,fe=null;const P=new an,H=new an;let ae=null;const Me=new ht(0);let Se=0,U=i.width,ie=i.height,ve=1,Re=null,He=null;const ne=new an(0,0,U,ie),ue=new an(0,0,U,ie);let Ue=!1;const Xe=new Jp;let Ge=!1,pt=!1;const Jt=new qt,xt=new Z,mt=new an,Dt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ot=!1;function en(){return re===null?ve:1}let G=s;function Kt(A,q){return i.getContext(A,q)}try{const A={alpha:!0,depth:l,stencil:c,antialias:d,premultipliedAlpha:p,preserveDrawingBuffer:m,powerPreference:g,failIfMajorPerformanceCaveat:v};if("setAttribute"in i&&i.setAttribute("data-engine",`three.js r${Ip}`),i.addEventListener("webglcontextlost",it,!1),i.addEventListener("webglcontextrestored",Ft,!1),i.addEventListener("webglcontextcreationerror",Tt,!1),G===null){const q="webgl2";if(G=Kt(q,A),G===null)throw Kt(q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw At("WebGLRenderer: "+A.message),A}let Et,Ot,Ye,D,b,W,he,xe,ce,Ke,we,We,nt,be,Ee,Be,Fe,De,ct,X,Le,Te,Ie,ye;function _e(){Et=new b2(G),Et.init(),Te=new p3(G,Et),Ot=new p2(G,Et,e,Te),Ye=new d3(G,Et),Ot.reversedDepthBuffer&&S&&Ye.buffers.depth.setReversed(!0),D=new A2(G),b=new QR,W=new h3(G,Et,Ye,b,Ot,Te,D),he=new g2(C),xe=new M2(C),ce=new D1(G),Ie=new d2(G,ce),Ke=new E2(G,ce,D,Ie),we=new C2(G,Ke,ce,D),ct=new R2(G,Ot,W),Be=new m2(b),We=new KR(C,he,xe,Et,Ot,Ie,Be),nt=new S3(C,b),be=new JR,Ee=new r3(Et),De=new f2(C,he,xe,Ye,we,E,p),Fe=new u3(C,we,Ot),ye=new y3(G,D,Ot,Ye),X=new h2(G,Et,D),Le=new T2(G,Et,D),D.programs=We.programs,C.capabilities=Ot,C.extensions=Et,C.properties=b,C.renderLists=be,C.shadowMap=Fe,C.state=Ye,C.info=D}_e(),R!==oi&&(K=new D2(R,i.width,i.height,l,c));const Ce=new _3(C,G);this.xr=Ce,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){const A=Et.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=Et.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return ve},this.setPixelRatio=function(A){A!==void 0&&(ve=A,this.setSize(U,ie,!1))},this.getSize=function(A){return A.set(U,ie)},this.setSize=function(A,q,oe=!0){if(Ce.isPresenting){rt("WebGLRenderer: Can't change size while VR device is presenting.");return}U=A,ie=q,i.width=Math.floor(A*ve),i.height=Math.floor(q*ve),oe===!0&&(i.style.width=A+"px",i.style.height=q+"px"),K!==null&&K.setSize(i.width,i.height),this.setViewport(0,0,A,q)},this.getDrawingBufferSize=function(A){return A.set(U*ve,ie*ve).floor()},this.setDrawingBufferSize=function(A,q,oe){U=A,ie=q,ve=oe,i.width=Math.floor(A*oe),i.height=Math.floor(q*oe),this.setViewport(0,0,A,q)},this.setEffects=function(A){if(R===oi){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let q=0;q<A.length;q++)if(A[q].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}K.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(P)},this.getViewport=function(A){return A.copy(ne)},this.setViewport=function(A,q,oe,ee){A.isVector4?ne.set(A.x,A.y,A.z,A.w):ne.set(A,q,oe,ee),Ye.viewport(P.copy(ne).multiplyScalar(ve).round())},this.getScissor=function(A){return A.copy(ue)},this.setScissor=function(A,q,oe,ee){A.isVector4?ue.set(A.x,A.y,A.z,A.w):ue.set(A,q,oe,ee),Ye.scissor(H.copy(ue).multiplyScalar(ve).round())},this.getScissorTest=function(){return Ue},this.setScissorTest=function(A){Ye.setScissorTest(Ue=A)},this.setOpaqueSort=function(A){Re=A},this.setTransparentSort=function(A){He=A},this.getClearColor=function(A){return A.copy(De.getClearColor())},this.setClearColor=function(){De.setClearColor(...arguments)},this.getClearAlpha=function(){return De.getClearAlpha()},this.setClearAlpha=function(){De.setClearAlpha(...arguments)},this.clear=function(A=!0,q=!0,oe=!0){let ee=0;if(A){let Y=!1;if(re!==null){const Ne=re.texture.format;Y=M.has(Ne)}if(Y){const Ne=re.texture.type,ze=_.has(Ne),Oe=De.getClearColor(),Ve=De.getClearAlpha(),qe=Oe.r,Je=Oe.g,je=Oe.b;ze?(N[0]=qe,N[1]=Je,N[2]=je,N[3]=Ve,G.clearBufferuiv(G.COLOR,0,N)):(O[0]=qe,O[1]=Je,O[2]=je,O[3]=Ve,G.clearBufferiv(G.COLOR,0,O))}else ee|=G.COLOR_BUFFER_BIT}q&&(ee|=G.DEPTH_BUFFER_BIT),oe&&(ee|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G.clear(ee)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){i.removeEventListener("webglcontextlost",it,!1),i.removeEventListener("webglcontextrestored",Ft,!1),i.removeEventListener("webglcontextcreationerror",Tt,!1),De.dispose(),be.dispose(),Ee.dispose(),b.dispose(),he.dispose(),xe.dispose(),we.dispose(),Ie.dispose(),ye.dispose(),We.dispose(),Ce.dispose(),Ce.removeEventListener("sessionstart",kr),Ce.removeEventListener("sessionend",oo),Fi.stop()};function it(A){A.preventDefault(),a_("WebGLRenderer: Context Lost."),w=!0}function Ft(){a_("WebGLRenderer: Context Restored."),w=!1;const A=D.autoReset,q=Fe.enabled,oe=Fe.autoUpdate,ee=Fe.needsUpdate,Y=Fe.type;_e(),D.autoReset=A,Fe.enabled=q,Fe.autoUpdate=oe,Fe.needsUpdate=ee,Fe.type=Y}function Tt(A){At("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Ln(A){const q=A.target;q.removeEventListener("dispose",Ln),yi(q)}function yi(A){Tl(A),b.remove(A)}function Tl(A){const q=b.get(A).programs;q!==void 0&&(q.forEach(function(oe){We.releaseProgram(oe)}),A.isShaderMaterial&&We.releaseShaderCache(A))}this.renderBufferDirect=function(A,q,oe,ee,Y,Ne){q===null&&(q=Dt);const ze=Y.isMesh&&Y.matrixWorld.determinant()<0,Oe=ur(A,q,oe,ee,Y);Ye.setMaterial(ee,ze);let Ve=oe.index,qe=1;if(ee.wireframe===!0){if(Ve=Ke.getWireframeAttribute(oe),Ve===void 0)return;qe=2}const Je=oe.drawRange,je=oe.attributes.position;let et=Je.start*qe,Ut=(Je.start+Je.count)*qe;Ne!==null&&(et=Math.max(et,Ne.start*qe),Ut=Math.min(Ut,(Ne.start+Ne.count)*qe)),Ve!==null?(et=Math.max(et,0),Ut=Math.min(Ut,Ve.count)):je!=null&&(et=Math.max(et,0),Ut=Math.min(Ut,je.count));const Qt=Ut-et;if(Qt<0||Qt===1/0)return;Ie.setup(Y,ee,Oe,oe,Ve);let Wt,Pt=X;if(Ve!==null&&(Wt=ce.get(Ve),Pt=Le,Pt.setIndex(Wt)),Y.isMesh)ee.wireframe===!0?(Ye.setLineWidth(ee.wireframeLinewidth*en()),Pt.setMode(G.LINES)):Pt.setMode(G.TRIANGLES);else if(Y.isLine){let Qe=ee.linewidth;Qe===void 0&&(Qe=1),Ye.setLineWidth(Qe*en()),Y.isLineSegments?Pt.setMode(G.LINES):Y.isLineLoop?Pt.setMode(G.LINE_LOOP):Pt.setMode(G.LINE_STRIP)}else Y.isPoints?Pt.setMode(G.POINTS):Y.isSprite&&Pt.setMode(G.TRIANGLES);if(Y.isBatchedMesh)if(Y._multiDrawInstances!==null)_l("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Pt.renderMultiDrawInstances(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount,Y._multiDrawInstances);else if(Et.get("WEBGL_multi_draw"))Pt.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{const Qe=Y._multiDrawStarts,Nt=Y._multiDrawCounts,at=Y._multiDrawCount,bn=Ve?ce.get(Ve).bytesPerElement:1,Ki=b.get(ee).currentProgram.getUniforms();for(let En=0;En<at;En++)Ki.setValue(G,"_gl_DrawID",En),Pt.render(Qe[En]/bn,Nt[En])}else if(Y.isInstancedMesh)Pt.renderInstances(et,Qt,Y.count);else if(oe.isInstancedBufferGeometry){const Qe=oe._maxInstanceCount!==void 0?oe._maxInstanceCount:1/0,Nt=Math.min(oe.instanceCount,Qe);Pt.renderInstances(et,Qt,Nt)}else Pt.render(et,Qt)};function ro(A,q,oe){A.transparent===!0&&A.side===xa&&A.forceSinglePass===!1?(A.side=Vn,A.needsUpdate=!0,Wr(A,q,oe),A.side=lr,A.needsUpdate=!0,Wr(A,q,oe),A.side=xa):Wr(A,q,oe)}this.compile=function(A,q,oe=null){oe===null&&(oe=A),I=Ee.get(oe),I.init(q),F.push(I),oe.traverseVisible(function(Y){Y.isLight&&Y.layers.test(q.layers)&&(I.pushLight(Y),Y.castShadow&&I.pushShadow(Y))}),A!==oe&&A.traverseVisible(function(Y){Y.isLight&&Y.layers.test(q.layers)&&(I.pushLight(Y),Y.castShadow&&I.pushShadow(Y))}),I.setupLights();const ee=new Set;return A.traverse(function(Y){if(!(Y.isMesh||Y.isPoints||Y.isLine||Y.isSprite))return;const Ne=Y.material;if(Ne)if(Array.isArray(Ne))for(let ze=0;ze<Ne.length;ze++){const Oe=Ne[ze];ro(Oe,oe,Y),ee.add(Oe)}else ro(Ne,oe,Y),ee.add(Ne)}),I=F.pop(),ee},this.compileAsync=function(A,q,oe=null){const ee=this.compile(A,q,oe);return new Promise(Y=>{function Ne(){if(ee.forEach(function(ze){b.get(ze).currentProgram.isReady()&&ee.delete(ze)}),ee.size===0){Y(A);return}setTimeout(Ne,10)}Et.get("KHR_parallel_shader_compile")!==null?Ne():setTimeout(Ne,10)})};let Vr=null;function so(A){Vr&&Vr(A)}function kr(){Fi.stop()}function oo(){Fi.start()}const Fi=new rS;Fi.setAnimationLoop(so),typeof self<"u"&&Fi.setContext(self),this.setAnimationLoop=function(A){Vr=A,Ce.setAnimationLoop(A),A===null?Fi.stop():Fi.start()},Ce.addEventListener("sessionstart",kr),Ce.addEventListener("sessionend",oo),this.render=function(A,q){if(q!==void 0&&q.isCamera!==!0){At("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;const oe=Ce.enabled===!0&&Ce.isPresenting===!0,ee=K!==null&&(re===null||oe)&&K.begin(C,re);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),Ce.enabled===!0&&Ce.isPresenting===!0&&(K===null||K.isCompositing()===!1)&&(Ce.cameraAutoUpdate===!0&&Ce.updateCamera(q),q=Ce.getCamera()),A.isScene===!0&&A.onBeforeRender(C,A,q,re),I=Ee.get(A,F.length),I.init(q),F.push(I),Jt.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),Xe.setFromProjectionMatrix(Jt,ki,q.reversedDepth),pt=this.localClippingEnabled,Ge=Be.init(this.clippingPlanes,pt),L=be.get(A,z.length),L.init(),z.push(L),Ce.enabled===!0&&Ce.isPresenting===!0){const ze=C.xr.getDepthSensingMesh();ze!==null&&ci(ze,q,-1/0,C.sortObjects)}ci(A,q,0,C.sortObjects),L.finish(),C.sortObjects===!0&&L.sort(Re,He),ot=Ce.enabled===!1||Ce.isPresenting===!1||Ce.hasDepthSensing()===!1,ot&&De.addToRenderList(L,A),this.info.render.frame++,Ge===!0&&Be.beginShadows();const Y=I.state.shadowsArray;if(Fe.render(Y,A,q),Ge===!0&&Be.endShadows(),this.info.autoReset===!0&&this.info.reset(),(ee&&K.hasRenderPass())===!1){const ze=L.opaque,Oe=L.transmissive;if(I.setupLights(),q.isArrayCamera){const Ve=q.cameras;if(Oe.length>0)for(let qe=0,Je=Ve.length;qe<Je;qe++){const je=Ve[qe];Mn(ze,Oe,A,je)}ot&&De.render(A);for(let qe=0,Je=Ve.length;qe<Je;qe++){const je=Ve[qe];cn(L,A,je,je.viewport)}}else Oe.length>0&&Mn(ze,Oe,A,q),ot&&De.render(A),cn(L,A,q)}re!==null&&se===0&&(W.updateMultisampleRenderTarget(re),W.updateRenderTargetMipmap(re)),ee&&K.end(C),A.isScene===!0&&A.onAfterRender(C,A,q),Ie.resetDefaultState(),pe=-1,fe=null,F.pop(),F.length>0?(I=F[F.length-1],Ge===!0&&Be.setGlobalState(C.clippingPlanes,I.state.camera)):I=null,z.pop(),z.length>0?L=z[z.length-1]:L=null};function ci(A,q,oe,ee){if(A.visible===!1)return;if(A.layers.test(q.layers)){if(A.isGroup)oe=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(q);else if(A.isLight)I.pushLight(A),A.castShadow&&I.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Xe.intersectsSprite(A)){ee&&mt.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Jt);const ze=we.update(A),Oe=A.material;Oe.visible&&L.push(A,ze,Oe,oe,mt.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Xe.intersectsObject(A))){const ze=we.update(A),Oe=A.material;if(ee&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),mt.copy(A.boundingSphere.center)):(ze.boundingSphere===null&&ze.computeBoundingSphere(),mt.copy(ze.boundingSphere.center)),mt.applyMatrix4(A.matrixWorld).applyMatrix4(Jt)),Array.isArray(Oe)){const Ve=ze.groups;for(let qe=0,Je=Ve.length;qe<Je;qe++){const je=Ve[qe],et=Oe[je.materialIndex];et&&et.visible&&L.push(A,ze,et,oe,mt.z,je)}}else Oe.visible&&L.push(A,ze,Oe,oe,mt.z,null)}}const Ne=A.children;for(let ze=0,Oe=Ne.length;ze<Oe;ze++)ci(Ne[ze],q,oe,ee)}function cn(A,q,oe,ee){const{opaque:Y,transmissive:Ne,transparent:ze}=A;I.setupLightsView(oe),Ge===!0&&Be.setGlobalState(C.clippingPlanes,oe),ee&&Ye.viewport(P.copy(ee)),Y.length>0&&Mi(Y,q,oe),Ne.length>0&&Mi(Ne,q,oe),ze.length>0&&Mi(ze,q,oe),Ye.buffers.depth.setTest(!0),Ye.buffers.depth.setMask(!0),Ye.buffers.color.setMask(!0),Ye.setPolygonOffset(!1)}function Mn(A,q,oe,ee){if((oe.isScene===!0?oe.overrideMaterial:null)!==null)return;if(I.state.transmissionRenderTarget[ee.id]===void 0){const et=Et.has("EXT_color_buffer_half_float")||Et.has("EXT_color_buffer_float");I.state.transmissionRenderTarget[ee.id]=new qi(1,1,{generateMipmaps:!0,type:et?Ea:oi,minFilter:Ir,samples:Ot.samples,stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Rt.workingColorSpace})}const Ne=I.state.transmissionRenderTarget[ee.id],ze=ee.viewport||P;Ne.setSize(ze.z*C.transmissionResolutionScale,ze.w*C.transmissionResolutionScale);const Oe=C.getRenderTarget(),Ve=C.getActiveCubeFace(),qe=C.getActiveMipmapLevel();C.setRenderTarget(Ne),C.getClearColor(Me),Se=C.getClearAlpha(),Se<1&&C.setClearColor(16777215,.5),C.clear(),ot&&De.render(oe);const Je=C.toneMapping;C.toneMapping=Wi;const je=ee.viewport;if(ee.viewport!==void 0&&(ee.viewport=void 0),I.setupLightsView(ee),Ge===!0&&Be.setGlobalState(C.clippingPlanes,ee),Mi(A,oe,ee),W.updateMultisampleRenderTarget(Ne),W.updateRenderTargetMipmap(Ne),Et.has("WEBGL_multisampled_render_to_texture")===!1){let et=!1;for(let Ut=0,Qt=q.length;Ut<Qt;Ut++){const Wt=q[Ut],{object:Pt,geometry:Qe,material:Nt,group:at}=Wt;if(Nt.side===xa&&Pt.layers.test(ee.layers)){const bn=Nt.side;Nt.side=Vn,Nt.needsUpdate=!0,Xr(Pt,oe,ee,Qe,Nt,at),Nt.side=bn,Nt.needsUpdate=!0,et=!0}}et===!0&&(W.updateMultisampleRenderTarget(Ne),W.updateRenderTargetMipmap(Ne))}C.setRenderTarget(Oe,Ve,qe),C.setClearColor(Me,Se),je!==void 0&&(ee.viewport=je),C.toneMapping=Je}function Mi(A,q,oe){const ee=q.isScene===!0?q.overrideMaterial:null;for(let Y=0,Ne=A.length;Y<Ne;Y++){const ze=A[Y],{object:Oe,geometry:Ve,group:qe}=ze;let Je=ze.material;Je.allowOverride===!0&&ee!==null&&(Je=ee),Oe.layers.test(oe.layers)&&Xr(Oe,q,oe,Ve,Je,qe)}}function Xr(A,q,oe,ee,Y,Ne){A.onBeforeRender(C,q,oe,ee,Y,Ne),A.modelViewMatrix.multiplyMatrices(oe.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),Y.onBeforeRender(C,q,oe,ee,A,Ne),Y.transparent===!0&&Y.side===xa&&Y.forceSinglePass===!1?(Y.side=Vn,Y.needsUpdate=!0,C.renderBufferDirect(oe,q,ee,Y,A,Ne),Y.side=lr,Y.needsUpdate=!0,C.renderBufferDirect(oe,q,ee,Y,A,Ne),Y.side=xa):C.renderBufferDirect(oe,q,ee,Y,A,Ne),A.onAfterRender(C,q,oe,ee,Y,Ne)}function Wr(A,q,oe){q.isScene!==!0&&(q=Dt);const ee=b.get(A),Y=I.state.lights,Ne=I.state.shadowsArray,ze=Y.state.version,Oe=We.getParameters(A,Y.state,Ne,q,oe),Ve=We.getProgramCacheKey(Oe);let qe=ee.programs;ee.environment=A.isMeshStandardMaterial?q.environment:null,ee.fog=q.fog,ee.envMap=(A.isMeshStandardMaterial?xe:he).get(A.envMap||ee.environment),ee.envMapRotation=ee.environment!==null&&A.envMap===null?q.environmentRotation:A.envMapRotation,qe===void 0&&(A.addEventListener("dispose",Ln),qe=new Map,ee.programs=qe);let Je=qe.get(Ve);if(Je!==void 0){if(ee.currentProgram===Je&&ee.lightsStateVersion===ze)return lo(A,Oe),Je}else Oe.uniforms=We.getUniforms(A),A.onBeforeCompile(Oe,C),Je=We.acquireProgram(Oe,Ve),qe.set(Ve,Je),ee.uniforms=Oe.uniforms;const je=ee.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(je.clippingPlanes=Be.uniform),lo(A,Oe),ee.needsLights=Aa(A),ee.lightsStateVersion=ze,ee.needsLights&&(je.ambientLightColor.value=Y.state.ambient,je.lightProbe.value=Y.state.probe,je.directionalLights.value=Y.state.directional,je.directionalLightShadows.value=Y.state.directionalShadow,je.spotLights.value=Y.state.spot,je.spotLightShadows.value=Y.state.spotShadow,je.rectAreaLights.value=Y.state.rectArea,je.ltc_1.value=Y.state.rectAreaLTC1,je.ltc_2.value=Y.state.rectAreaLTC2,je.pointLights.value=Y.state.point,je.pointLightShadows.value=Y.state.pointShadow,je.hemisphereLights.value=Y.state.hemi,je.directionalShadowMap.value=Y.state.directionalShadowMap,je.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,je.spotShadowMap.value=Y.state.spotShadowMap,je.spotLightMatrix.value=Y.state.spotLightMatrix,je.spotLightMap.value=Y.state.spotLightMap,je.pointShadowMap.value=Y.state.pointShadowMap,je.pointShadowMatrix.value=Y.state.pointShadowMatrix),ee.currentProgram=Je,ee.uniformsList=null,Je}function Al(A){if(A.uniformsList===null){const q=A.currentProgram.getUniforms();A.uniformsList=gu.seqWithValue(q.seq,A.uniforms)}return A.uniformsList}function lo(A,q){const oe=b.get(A);oe.outputColorSpace=q.outputColorSpace,oe.batching=q.batching,oe.batchingColor=q.batchingColor,oe.instancing=q.instancing,oe.instancingColor=q.instancingColor,oe.instancingMorph=q.instancingMorph,oe.skinning=q.skinning,oe.morphTargets=q.morphTargets,oe.morphNormals=q.morphNormals,oe.morphColors=q.morphColors,oe.morphTargetsCount=q.morphTargetsCount,oe.numClippingPlanes=q.numClippingPlanes,oe.numIntersection=q.numClipIntersection,oe.vertexAlphas=q.vertexAlphas,oe.vertexTangents=q.vertexTangents,oe.toneMapping=q.toneMapping}function ur(A,q,oe,ee,Y){q.isScene!==!0&&(q=Dt),W.resetTextureUnits();const Ne=q.fog,ze=ee.isMeshStandardMaterial?q.environment:null,Oe=re===null?C.outputColorSpace:re.isXRRenderTarget===!0?re.texture.colorSpace:Qs,Ve=(ee.isMeshStandardMaterial?xe:he).get(ee.envMap||ze),qe=ee.vertexColors===!0&&!!oe.attributes.color&&oe.attributes.color.itemSize===4,Je=!!oe.attributes.tangent&&(!!ee.normalMap||ee.anisotropy>0),je=!!oe.morphAttributes.position,et=!!oe.morphAttributes.normal,Ut=!!oe.morphAttributes.color;let Qt=Wi;ee.toneMapped&&(re===null||re.isXRRenderTarget===!0)&&(Qt=C.toneMapping);const Wt=oe.morphAttributes.position||oe.morphAttributes.normal||oe.morphAttributes.color,Pt=Wt!==void 0?Wt.length:0,Qe=b.get(ee),Nt=I.state.lights;if(Ge===!0&&(pt===!0||A!==fe)){const An=A===fe&&ee.id===pe;Be.setState(ee,A,An)}let at=!1;ee.version===Qe.__version?(Qe.needsLights&&Qe.lightsStateVersion!==Nt.state.version||Qe.outputColorSpace!==Oe||Y.isBatchedMesh&&Qe.batching===!1||!Y.isBatchedMesh&&Qe.batching===!0||Y.isBatchedMesh&&Qe.batchingColor===!0&&Y.colorTexture===null||Y.isBatchedMesh&&Qe.batchingColor===!1&&Y.colorTexture!==null||Y.isInstancedMesh&&Qe.instancing===!1||!Y.isInstancedMesh&&Qe.instancing===!0||Y.isSkinnedMesh&&Qe.skinning===!1||!Y.isSkinnedMesh&&Qe.skinning===!0||Y.isInstancedMesh&&Qe.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&Qe.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&Qe.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&Qe.instancingMorph===!1&&Y.morphTexture!==null||Qe.envMap!==Ve||ee.fog===!0&&Qe.fog!==Ne||Qe.numClippingPlanes!==void 0&&(Qe.numClippingPlanes!==Be.numPlanes||Qe.numIntersection!==Be.numIntersection)||Qe.vertexAlphas!==qe||Qe.vertexTangents!==Je||Qe.morphTargets!==je||Qe.morphNormals!==et||Qe.morphColors!==Ut||Qe.toneMapping!==Qt||Qe.morphTargetsCount!==Pt)&&(at=!0):(at=!0,Qe.__version=ee.version);let bn=Qe.currentProgram;at===!0&&(bn=Wr(ee,q,Y));let Ki=!1,En=!1,ui=!1;const It=bn.getUniforms(),Tn=Qe.uniforms;if(Ye.useProgram(bn.program)&&(Ki=!0,En=!0,ui=!0),ee.id!==pe&&(pe=ee.id,En=!0),Ki||fe!==A){Ye.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),It.setValue(G,"projectionMatrix",A.projectionMatrix),It.setValue(G,"viewMatrix",A.matrixWorldInverse);const Rn=It.map.cameraPosition;Rn!==void 0&&Rn.setValue(G,xt.setFromMatrixPosition(A.matrixWorld)),Ot.logarithmicDepthBuffer&&It.setValue(G,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(ee.isMeshPhongMaterial||ee.isMeshToonMaterial||ee.isMeshLambertMaterial||ee.isMeshBasicMaterial||ee.isMeshStandardMaterial||ee.isShaderMaterial)&&It.setValue(G,"isOrthographic",A.isOrthographicCamera===!0),fe!==A&&(fe=A,En=!0,ui=!0)}if(Qe.needsLights&&(Nt.state.directionalShadowMap.length>0&&It.setValue(G,"directionalShadowMap",Nt.state.directionalShadowMap,W),Nt.state.spotShadowMap.length>0&&It.setValue(G,"spotShadowMap",Nt.state.spotShadowMap,W),Nt.state.pointShadowMap.length>0&&It.setValue(G,"pointShadowMap",Nt.state.pointShadowMap,W)),Y.isSkinnedMesh){It.setOptional(G,Y,"bindMatrix"),It.setOptional(G,Y,"bindMatrixInverse");const An=Y.skeleton;An&&(An.boneTexture===null&&An.computeBoneTexture(),It.setValue(G,"boneTexture",An.boneTexture,W))}Y.isBatchedMesh&&(It.setOptional(G,Y,"batchingTexture"),It.setValue(G,"batchingTexture",Y._matricesTexture,W),It.setOptional(G,Y,"batchingIdTexture"),It.setValue(G,"batchingIdTexture",Y._indirectTexture,W),It.setOptional(G,Y,"batchingColorTexture"),Y._colorsTexture!==null&&It.setValue(G,"batchingColorTexture",Y._colorsTexture,W));const mn=oe.morphAttributes;if((mn.position!==void 0||mn.normal!==void 0||mn.color!==void 0)&&ct.update(Y,oe,bn),(En||Qe.receiveShadow!==Y.receiveShadow)&&(Qe.receiveShadow=Y.receiveShadow,It.setValue(G,"receiveShadow",Y.receiveShadow)),ee.isMeshGouraudMaterial&&ee.envMap!==null&&(Tn.envMap.value=Ve,Tn.flipEnvMap.value=Ve.isCubeTexture&&Ve.isRenderTargetTexture===!1?-1:1),ee.isMeshStandardMaterial&&ee.envMap===null&&q.environment!==null&&(Tn.envMapIntensity.value=q.environmentIntensity),Tn.dfgLUT!==void 0&&(Tn.dfgLUT.value=b3()),En&&(It.setValue(G,"toneMappingExposure",C.toneMappingExposure),Qe.needsLights&&co(Tn,ui),Ne&&ee.fog===!0&&nt.refreshFogUniforms(Tn,Ne),nt.refreshMaterialUniforms(Tn,ee,ve,ie,I.state.transmissionRenderTarget[A.id]),gu.upload(G,Al(Qe),Tn,W)),ee.isShaderMaterial&&ee.uniformsNeedUpdate===!0&&(gu.upload(G,Al(Qe),Tn,W),ee.uniformsNeedUpdate=!1),ee.isSpriteMaterial&&It.setValue(G,"center",Y.center),It.setValue(G,"modelViewMatrix",Y.modelViewMatrix),It.setValue(G,"normalMatrix",Y.normalMatrix),It.setValue(G,"modelMatrix",Y.matrixWorld),ee.isShaderMaterial||ee.isRawShaderMaterial){const An=ee.uniformsGroups;for(let Rn=0,qr=An.length;Rn<qr;Rn++){const bi=An[Rn];ye.update(bi,bn),ye.bind(bi,bn)}}return bn}function co(A,q){A.ambientLightColor.needsUpdate=q,A.lightProbe.needsUpdate=q,A.directionalLights.needsUpdate=q,A.directionalLightShadows.needsUpdate=q,A.pointLights.needsUpdate=q,A.pointLightShadows.needsUpdate=q,A.spotLights.needsUpdate=q,A.spotLightShadows.needsUpdate=q,A.rectAreaLights.needsUpdate=q,A.hemisphereLights.needsUpdate=q}function Aa(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return k},this.getActiveMipmapLevel=function(){return se},this.getRenderTarget=function(){return re},this.setRenderTargetTextures=function(A,q,oe){const ee=b.get(A);ee.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,ee.__autoAllocateDepthBuffer===!1&&(ee.__useRenderToTexture=!1),b.get(A.texture).__webglTexture=q,b.get(A.depthTexture).__webglTexture=ee.__autoAllocateDepthBuffer?void 0:oe,ee.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,q){const oe=b.get(A);oe.__webglFramebuffer=q,oe.__useDefaultFramebuffer=q===void 0};const Ra=G.createFramebuffer();this.setRenderTarget=function(A,q=0,oe=0){re=A,k=q,se=oe;let ee=null,Y=!1,Ne=!1;if(A){const Oe=b.get(A);if(Oe.__useDefaultFramebuffer!==void 0){Ye.bindFramebuffer(G.FRAMEBUFFER,Oe.__webglFramebuffer),P.copy(A.viewport),H.copy(A.scissor),ae=A.scissorTest,Ye.viewport(P),Ye.scissor(H),Ye.setScissorTest(ae),pe=-1;return}else if(Oe.__webglFramebuffer===void 0)W.setupRenderTarget(A);else if(Oe.__hasExternalTextures)W.rebindTextures(A,b.get(A.texture).__webglTexture,b.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Je=A.depthTexture;if(Oe.__boundDepthTexture!==Je){if(Je!==null&&b.has(Je)&&(A.width!==Je.image.width||A.height!==Je.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");W.setupDepthRenderbuffer(A)}}const Ve=A.texture;(Ve.isData3DTexture||Ve.isDataArrayTexture||Ve.isCompressedArrayTexture)&&(Ne=!0);const qe=b.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(qe[q])?ee=qe[q][oe]:ee=qe[q],Y=!0):A.samples>0&&W.useMultisampledRTT(A)===!1?ee=b.get(A).__webglMultisampledFramebuffer:Array.isArray(qe)?ee=qe[oe]:ee=qe,P.copy(A.viewport),H.copy(A.scissor),ae=A.scissorTest}else P.copy(ne).multiplyScalar(ve).floor(),H.copy(ue).multiplyScalar(ve).floor(),ae=Ue;if(oe!==0&&(ee=Ra),Ye.bindFramebuffer(G.FRAMEBUFFER,ee)&&Ye.drawBuffers(A,ee),Ye.viewport(P),Ye.scissor(H),Ye.setScissorTest(ae),Y){const Oe=b.get(A.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+q,Oe.__webglTexture,oe)}else if(Ne){const Oe=q;for(let Ve=0;Ve<A.textures.length;Ve++){const qe=b.get(A.textures[Ve]);G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0+Ve,qe.__webglTexture,oe,Oe)}}else if(A!==null&&oe!==0){const Oe=b.get(A.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Oe.__webglTexture,oe)}pe=-1},this.readRenderTargetPixels=function(A,q,oe,ee,Y,Ne,ze,Oe=0){if(!(A&&A.isWebGLRenderTarget)){At("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ve=b.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&ze!==void 0&&(Ve=Ve[ze]),Ve){Ye.bindFramebuffer(G.FRAMEBUFFER,Ve);try{const qe=A.textures[Oe],Je=qe.format,je=qe.type;if(!Ot.textureFormatReadable(Je)){At("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ot.textureTypeReadable(je)){At("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=A.width-ee&&oe>=0&&oe<=A.height-Y&&(A.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+Oe),G.readPixels(q,oe,ee,Y,Te.convert(Je),Te.convert(je),Ne))}finally{const qe=re!==null?b.get(re).__webglFramebuffer:null;Ye.bindFramebuffer(G.FRAMEBUFFER,qe)}}},this.readRenderTargetPixelsAsync=async function(A,q,oe,ee,Y,Ne,ze,Oe=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ve=b.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&ze!==void 0&&(Ve=Ve[ze]),Ve)if(q>=0&&q<=A.width-ee&&oe>=0&&oe<=A.height-Y){Ye.bindFramebuffer(G.FRAMEBUFFER,Ve);const qe=A.textures[Oe],Je=qe.format,je=qe.type;if(!Ot.textureFormatReadable(Je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ot.textureTypeReadable(je))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const et=G.createBuffer();G.bindBuffer(G.PIXEL_PACK_BUFFER,et),G.bufferData(G.PIXEL_PACK_BUFFER,Ne.byteLength,G.STREAM_READ),A.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+Oe),G.readPixels(q,oe,ee,Y,Te.convert(Je),Te.convert(je),0);const Ut=re!==null?b.get(re).__webglFramebuffer:null;Ye.bindFramebuffer(G.FRAMEBUFFER,Ut);const Qt=G.fenceSync(G.SYNC_GPU_COMMANDS_COMPLETE,0);return G.flush(),await RE(G,Qt,4),G.bindBuffer(G.PIXEL_PACK_BUFFER,et),G.getBufferSubData(G.PIXEL_PACK_BUFFER,0,Ne),G.deleteBuffer(et),G.deleteSync(Qt),Ne}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,q=null,oe=0){const ee=Math.pow(2,-oe),Y=Math.floor(A.image.width*ee),Ne=Math.floor(A.image.height*ee),ze=q!==null?q.x:0,Oe=q!==null?q.y:0;W.setTexture2D(A,0),G.copyTexSubImage2D(G.TEXTURE_2D,oe,0,0,ze,Oe,Y,Ne),Ye.unbindTexture()};const fr=G.createFramebuffer(),Ca=G.createFramebuffer();this.copyTextureToTexture=function(A,q,oe=null,ee=null,Y=0,Ne=null){Ne===null&&(Y!==0?(_l("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Ne=Y,Y=0):Ne=0);let ze,Oe,Ve,qe,Je,je,et,Ut,Qt;const Wt=A.isCompressedTexture?A.mipmaps[Ne]:A.image;if(oe!==null)ze=oe.max.x-oe.min.x,Oe=oe.max.y-oe.min.y,Ve=oe.isBox3?oe.max.z-oe.min.z:1,qe=oe.min.x,Je=oe.min.y,je=oe.isBox3?oe.min.z:0;else{const mn=Math.pow(2,-Y);ze=Math.floor(Wt.width*mn),Oe=Math.floor(Wt.height*mn),A.isDataArrayTexture?Ve=Wt.depth:A.isData3DTexture?Ve=Math.floor(Wt.depth*mn):Ve=1,qe=0,Je=0,je=0}ee!==null?(et=ee.x,Ut=ee.y,Qt=ee.z):(et=0,Ut=0,Qt=0);const Pt=Te.convert(q.format),Qe=Te.convert(q.type);let Nt;q.isData3DTexture?(W.setTexture3D(q,0),Nt=G.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(W.setTexture2DArray(q,0),Nt=G.TEXTURE_2D_ARRAY):(W.setTexture2D(q,0),Nt=G.TEXTURE_2D),G.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,q.flipY),G.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),G.pixelStorei(G.UNPACK_ALIGNMENT,q.unpackAlignment);const at=G.getParameter(G.UNPACK_ROW_LENGTH),bn=G.getParameter(G.UNPACK_IMAGE_HEIGHT),Ki=G.getParameter(G.UNPACK_SKIP_PIXELS),En=G.getParameter(G.UNPACK_SKIP_ROWS),ui=G.getParameter(G.UNPACK_SKIP_IMAGES);G.pixelStorei(G.UNPACK_ROW_LENGTH,Wt.width),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,Wt.height),G.pixelStorei(G.UNPACK_SKIP_PIXELS,qe),G.pixelStorei(G.UNPACK_SKIP_ROWS,Je),G.pixelStorei(G.UNPACK_SKIP_IMAGES,je);const It=A.isDataArrayTexture||A.isData3DTexture,Tn=q.isDataArrayTexture||q.isData3DTexture;if(A.isDepthTexture){const mn=b.get(A),An=b.get(q),Rn=b.get(mn.__renderTarget),qr=b.get(An.__renderTarget);Ye.bindFramebuffer(G.READ_FRAMEBUFFER,Rn.__webglFramebuffer),Ye.bindFramebuffer(G.DRAW_FRAMEBUFFER,qr.__webglFramebuffer);for(let bi=0;bi<Ve;bi++)It&&(G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,b.get(A).__webglTexture,Y,je+bi),G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,b.get(q).__webglTexture,Ne,Qt+bi)),G.blitFramebuffer(qe,Je,ze,Oe,et,Ut,ze,Oe,G.DEPTH_BUFFER_BIT,G.NEAREST);Ye.bindFramebuffer(G.READ_FRAMEBUFFER,null),Ye.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else if(Y!==0||A.isRenderTargetTexture||b.has(A)){const mn=b.get(A),An=b.get(q);Ye.bindFramebuffer(G.READ_FRAMEBUFFER,fr),Ye.bindFramebuffer(G.DRAW_FRAMEBUFFER,Ca);for(let Rn=0;Rn<Ve;Rn++)It?G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,mn.__webglTexture,Y,je+Rn):G.framebufferTexture2D(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,mn.__webglTexture,Y),Tn?G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,An.__webglTexture,Ne,Qt+Rn):G.framebufferTexture2D(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,An.__webglTexture,Ne),Y!==0?G.blitFramebuffer(qe,Je,ze,Oe,et,Ut,ze,Oe,G.COLOR_BUFFER_BIT,G.NEAREST):Tn?G.copyTexSubImage3D(Nt,Ne,et,Ut,Qt+Rn,qe,Je,ze,Oe):G.copyTexSubImage2D(Nt,Ne,et,Ut,qe,Je,ze,Oe);Ye.bindFramebuffer(G.READ_FRAMEBUFFER,null),Ye.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else Tn?A.isDataTexture||A.isData3DTexture?G.texSubImage3D(Nt,Ne,et,Ut,Qt,ze,Oe,Ve,Pt,Qe,Wt.data):q.isCompressedArrayTexture?G.compressedTexSubImage3D(Nt,Ne,et,Ut,Qt,ze,Oe,Ve,Pt,Wt.data):G.texSubImage3D(Nt,Ne,et,Ut,Qt,ze,Oe,Ve,Pt,Qe,Wt):A.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,Ne,et,Ut,ze,Oe,Pt,Qe,Wt.data):A.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,Ne,et,Ut,Wt.width,Wt.height,Pt,Wt.data):G.texSubImage2D(G.TEXTURE_2D,Ne,et,Ut,ze,Oe,Pt,Qe,Wt);G.pixelStorei(G.UNPACK_ROW_LENGTH,at),G.pixelStorei(G.UNPACK_IMAGE_HEIGHT,bn),G.pixelStorei(G.UNPACK_SKIP_PIXELS,Ki),G.pixelStorei(G.UNPACK_SKIP_ROWS,En),G.pixelStorei(G.UNPACK_SKIP_IMAGES,ui),Ne===0&&q.generateMipmaps&&G.generateMipmap(Nt),Ye.unbindTexture()},this.initRenderTarget=function(A){b.get(A).__webglFramebuffer===void 0&&W.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?W.setTextureCube(A,0):A.isData3DTexture?W.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?W.setTexture2DArray(A,0):W.setTexture2D(A,0),Ye.unbindTexture()},this.resetState=function(){k=0,se=0,re=null,Ye.reset(),Ie.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ki}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const i=this.getContext();i.drawingBufferColorSpace=Rt._getDrawingBufferColorSpace(e),i.unpackColorSpace=Rt._getUnpackColorSpace()}}class T3 extends $x{constructor(){super(),this.name="RoomEnvironment";const e=new io;e.deleteAttribute("uv");const i=new yp({side:Vn}),s=new yp,l=new iS(16777215,900,28,2);l.position.set(.418,16.199,.3),this.add(l);const c=new yn(e,i);c.position.set(-.757,13.219,.717),c.scale.set(31.713,28.305,28.591),this.add(c);const h=new eS(e,s,6),d=new Bn;d.position.set(-10.906,2.009,1.846),d.rotation.set(0,-.195,0),d.scale.set(2.328,7.905,4.651),d.updateMatrix(),h.setMatrixAt(0,d.matrix),d.position.set(-5.607,-.754,-.758),d.rotation.set(0,.994,0),d.scale.set(1.97,1.534,3.955),d.updateMatrix(),h.setMatrixAt(1,d.matrix),d.position.set(6.167,.857,7.803),d.rotation.set(0,.561,0),d.scale.set(3.927,6.285,3.687),d.updateMatrix(),h.setMatrixAt(2,d.matrix),d.position.set(-2.017,.018,6.124),d.rotation.set(0,.333,0),d.scale.set(2.002,4.566,2.064),d.updateMatrix(),h.setMatrixAt(3,d.matrix),d.position.set(2.291,-.756,-2.621),d.rotation.set(0,-.286,0),d.scale.set(1.546,1.552,1.496),d.updateMatrix(),h.setMatrixAt(4,d.matrix),d.position.set(-2.193,-.369,-5.547),d.rotation.set(0,.516,0),d.scale.set(3.875,3.487,2.986),d.updateMatrix(),h.setMatrixAt(5,d.matrix),this.add(h);const p=new yn(e,Hs(50));p.position.set(-16.116,14.37,8.208),p.scale.set(.1,2.428,2.739),this.add(p);const m=new yn(e,Hs(50));m.position.set(-16.109,18.021,-8.207),m.scale.set(.1,2.425,2.751),this.add(m);const g=new yn(e,Hs(17));g.position.set(14.904,12.198,-1.832),g.scale.set(.15,4.265,6.331),this.add(g);const v=new yn(e,Hs(43));v.position.set(-.462,8.89,14.52),v.scale.set(4.38,5.441,.088),this.add(v);const S=new yn(e,Hs(20));S.position.set(3.235,11.486,-12.541),S.scale.set(2.5,2,.1),this.add(S);const y=new yn(e,Hs(100));y.position.set(0,20,0),y.scale.set(1,.1,1),this.add(y)}dispose(){const e=new Set;this.traverse(i=>{i.isMesh&&(e.add(i.geometry),e.add(i.material))});for(const i of e)i.dispose()}}function Hs(r){return new S1({color:0,emissive:16777215,emissiveIntensity:r})}class A3{#e;canvas;camera;cameraMinAspect;cameraMaxAspect;cameraFov;maxPixelRatio;minPixelRatio;scene;renderer;#n;size={width:0,height:0,wWidth:0,wHeight:0,ratio:0,pixelRatio:0};render=this.#b;onBeforeRender=()=>{};onAfterRender=()=>{};onAfterResize=()=>{};#a=!1;#i=!1;isDisposed=!1;#r;#s;#o;#l=new R1;#t={elapsed:0,delta:0};#f;constructor(e){this.#e={...e},this.#m(),this.#g(),this.#v(),this.resize(),this.#_()}#m(){this.camera=new si,this.cameraFov=this.camera.fov}#g(){this.scene=new $x}#v(){this.#e.canvas?this.canvas=this.#e.canvas:this.#e.id?this.canvas=document.getElementById(this.#e.id):console.error("Three: Missing canvas or id parameter"),this.canvas.style.display="block";const e={canvas:this.canvas,powerPreference:"high-performance",...this.#e.rendererOptions??{}};this.renderer=new E3(e),this.renderer.outputColorSpace=ri}#_(){this.#e.size instanceof Object||(window.addEventListener("resize",this.#c.bind(this)),this.#e.size==="parent"&&this.canvas.parentNode&&(this.#s=new ResizeObserver(this.#c.bind(this)),this.#s.observe(this.canvas.parentNode))),this.#r=new IntersectionObserver(this.#S.bind(this),{root:null,rootMargin:"0px",threshold:0}),this.#r.observe(this.canvas),document.addEventListener("visibilitychange",this.#d.bind(this))}#x(){window.removeEventListener("resize",this.#c.bind(this)),this.#s?.disconnect(),this.#r?.disconnect(),document.removeEventListener("visibilitychange",this.#d.bind(this))}#S(e){this.#a=e[0].isIntersecting,this.#a?this.#p():this.#u()}#d(){this.#a&&(document.hidden?this.#u():this.#p())}#c(){this.#o&&clearTimeout(this.#o),this.#o=setTimeout(this.resize.bind(this),100)}resize(){let e,i;this.#e.size instanceof Object?(e=this.#e.size.width,i=this.#e.size.height):this.#e.size==="parent"&&this.canvas.parentNode?(e=this.canvas.parentNode.offsetWidth,i=this.canvas.parentNode.offsetHeight):(e=window.innerWidth,i=window.innerHeight),this.size.width=e,this.size.height=i,this.size.ratio=e/i,this.#y(),this.#M(),this.onAfterResize(this.size)}#y(){this.camera.aspect=this.size.width/this.size.height,this.camera.isPerspectiveCamera&&this.cameraFov&&(this.cameraMinAspect&&this.camera.aspect<this.cameraMinAspect?this.#h(this.cameraMinAspect):this.cameraMaxAspect&&this.camera.aspect>this.cameraMaxAspect?this.#h(this.cameraMaxAspect):this.camera.fov=this.cameraFov),this.camera.updateProjectionMatrix(),this.updateWorldSize()}#h(e){const i=Math.tan(Sp.degToRad(this.cameraFov/2))/(this.camera.aspect/e);this.camera.fov=2*Sp.radToDeg(Math.atan(i))}updateWorldSize(){if(this.camera.isPerspectiveCamera){const e=this.camera.fov*Math.PI/180;this.size.wHeight=2*Math.tan(e/2)*this.camera.position.length(),this.size.wWidth=this.size.wHeight*this.camera.aspect}else this.camera.isOrthographicCamera&&(this.size.wHeight=this.camera.top-this.camera.bottom,this.size.wWidth=this.camera.right-this.camera.left)}#M(){this.renderer.setSize(this.size.width,this.size.height),this.#n?.setSize(this.size.width,this.size.height);let e=window.devicePixelRatio;this.maxPixelRatio&&e>this.maxPixelRatio?e=this.maxPixelRatio:this.minPixelRatio&&e<this.minPixelRatio&&(e=this.minPixelRatio),this.renderer.setPixelRatio(e),this.size.pixelRatio=e}get postprocessing(){return this.#n}set postprocessing(e){this.#n=e,this.render=e.render.bind(e)}#p(){if(this.#i)return;const e=()=>{this.#f=requestAnimationFrame(e),this.#t.delta=this.#l.getDelta(),this.#t.elapsed+=this.#t.delta,this.onBeforeRender(this.#t),this.render(),this.onAfterRender(this.#t)};this.#i=!0,this.#l.start(),e()}#u(){this.#i&&(cancelAnimationFrame(this.#f),this.#i=!1,this.#l.stop())}#b(){this.renderer.render(this.scene,this.camera)}clear(){this.scene.traverse(e=>{e.isMesh&&typeof e.material=="object"&&e.material!==null&&(Object.keys(e.material).forEach(i=>{const s=e.material[i];s!==null&&typeof s=="object"&&typeof s.dispose=="function"&&s.dispose()}),e.material.dispose(),e.geometry.dispose())}),this.scene.clear()}dispose(){this.#x(),this.#u(),this.clear(),this.#n?.dispose(),this.renderer.dispose(),this.isDisposed=!0}}const Xi=new Map,Pi=new Mt;let xh=!1;function R3(r){const e={position:new Mt,nPosition:new Mt,hover:!1,touching:!1,onEnter(){},onMove(){},onClick(){},onLeave(){},...r};return(function(i,s){Xi.has(i)||(Xi.set(i,s),xh||(document.body.addEventListener("pointermove",$_),document.body.addEventListener("pointerleave",ex),document.body.addEventListener("click",J_),document.body.addEventListener("touchstart",tx,{passive:!1}),document.body.addEventListener("touchmove",nx,{passive:!1}),document.body.addEventListener("touchend",ou,{passive:!1}),document.body.addEventListener("touchcancel",ou,{passive:!1}),xh=!0))})(r.domElement,e),e.dispose=()=>{const i=r.domElement;Xi.delete(i),Xi.size===0&&(document.body.removeEventListener("pointermove",$_),document.body.removeEventListener("pointerleave",ex),document.body.removeEventListener("click",J_),document.body.removeEventListener("touchstart",tx),document.body.removeEventListener("touchmove",nx),document.body.removeEventListener("touchend",ou),document.body.removeEventListener("touchcancel",ou),xh=!1)},e}function $_(r){Pi.x=r.clientX,Pi.y=r.clientY,C3()}function C3(){for(const[r,e]of Xi){const i=r.getBoundingClientRect();Du(i)?(wu(e,i),e.hover||(e.hover=!0,e.onEnter(e)),e.onMove(e)):e.hover&&!e.touching&&(e.hover=!1,e.onLeave(e))}}function J_(r){Pi.x=r.clientX,Pi.y=r.clientY;for(const[e,i]of Xi){const s=e.getBoundingClientRect();wu(i,s),Du(s)&&i.onClick(i)}}function ex(){for(const r of Xi.values())r.hover&&(r.hover=!1,r.onLeave(r))}function tx(r){if(r.touches.length>0){r.preventDefault(),Pi.x=r.touches[0].clientX,Pi.y=r.touches[0].clientY;for(const[e,i]of Xi){const s=e.getBoundingClientRect();Du(s)&&(i.touching=!0,wu(i,s),i.hover||(i.hover=!0,i.onEnter(i)),i.onMove(i))}}}function nx(r){if(r.touches.length>0){r.preventDefault(),Pi.x=r.touches[0].clientX,Pi.y=r.touches[0].clientY;for(const[e,i]of Xi){const s=e.getBoundingClientRect();wu(i,s),Du(s)?(i.hover||(i.hover=!0,i.touching=!0,i.onEnter(i)),i.onMove(i)):i.hover&&i.touching&&i.onMove(i)}}}function ou(){for(const[,r]of Xi)r.touching&&(r.touching=!1,r.hover&&(r.hover=!1,r.onLeave(r)))}function wu(r,e){const{position:i,nPosition:s}=r;i.x=Pi.x-e.left,i.y=Pi.y-e.top,s.x=i.x/e.width*2-1,s.y=-i.y/e.height*2+1}function Du(r){const{x:e,y:i}=Pi,{left:s,top:l,width:c,height:h}=r;return e>=s&&e<=s+c&&i>=l&&i<=l+h}const{randFloat:w3,randFloatSpread:Sh}=Sp,yh=new Z,on=new Z,lu=new Z,D3=new Z,ln=new Z,cu=new Z,Gs=new Z,ar=new Z,uu=new Z,ix=new Z;class U3{constructor(e){this.config=e,this.positionData=new Float32Array(3*e.count).fill(0),this.velocityData=new Float32Array(3*e.count).fill(0),this.sizeData=new Float32Array(e.count).fill(1),this.center=new Z,this.#e(),this.setSizes()}#e(){const{config:e,positionData:i}=this;this.center.toArray(i,0);for(let s=1;s<e.count;s++){const l=3*s;i[l]=Sh(2*e.maxX),i[l+1]=Sh(2*e.maxY),i[l+2]=Sh(2*e.maxZ)}}setSizes(){const{config:e,sizeData:i}=this;i[0]=e.size0;for(let s=1;s<e.count;s++)i[s]=w3(e.minSize,e.maxSize)}update(e){const{config:i,center:s,positionData:l,sizeData:c,velocityData:h}=this;let d=0;i.controlSphere0&&(d=1,yh.fromArray(l,0),yh.lerp(s,.1).toArray(l,0),D3.set(0,0,0).toArray(h,0));for(let p=d;p<i.count;p++){const m=3*p;on.fromArray(l,m),ln.fromArray(h,m),ln.y-=e.delta*i.gravity*c[p],ln.multiplyScalar(i.friction),ln.clampLength(0,i.maxVelocity),on.add(ln),on.toArray(l,m),ln.toArray(h,m)}for(let p=d;p<i.count;p++){const m=3*p;on.fromArray(l,m),ln.fromArray(h,m);const g=c[p];for(let S=p+1;S<i.count;S++){const y=3*S;lu.fromArray(l,y),cu.fromArray(h,y);const E=c[S];Gs.copy(lu).sub(on);const R=Gs.length(),M=g+E;if(R<M){const _=M-R;ar.copy(Gs).normalize().multiplyScalar(.5*_),uu.copy(ar).multiplyScalar(Math.max(ln.length(),1)),ix.copy(ar).multiplyScalar(Math.max(cu.length(),1)),on.sub(ar),ln.sub(uu),on.toArray(l,m),ln.toArray(h,m),lu.add(ar),cu.add(ix),lu.toArray(l,y),cu.toArray(h,y)}}if(i.controlSphere0){Gs.copy(yh).sub(on);const S=Gs.length(),y=g+c[0];if(S<y){const E=y-S;ar.copy(Gs.normalize()).multiplyScalar(E),uu.copy(ar).multiplyScalar(Math.max(ln.length(),2)),on.sub(ar),ln.sub(uu)}}Math.abs(on.x)+g>i.maxX&&(on.x=Math.sign(on.x)*(i.maxX-g),ln.x=-ln.x*i.wallBounce),i.gravity===0?Math.abs(on.y)+g>i.maxY&&(on.y=Math.sign(on.y)*(i.maxY-g),ln.y=-ln.y*i.wallBounce):on.y-g<-i.maxY&&(on.y=-i.maxY+g,ln.y=-ln.y*i.wallBounce);const v=Math.max(i.maxZ,i.maxSize);Math.abs(on.z)+g>v&&(on.z=Math.sign(on.z)*(i.maxZ-g),ln.z=-ln.z*i.wallBounce),on.toArray(l,m),ln.toArray(h,m)}}}class N3 extends x1{constructor(e){super(e),this.uniforms={thicknessDistortion:{value:.1},thicknessAmbient:{value:0},thicknessAttenuation:{value:.1},thicknessPower:{value:2},thicknessScale:{value:10}},this.defines.USE_UV="",this.onBeforeCompile=i=>{Object.assign(i.uniforms,this.uniforms),i.fragmentShader=`
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
      `);const s=ft.lights_fragment_begin.replaceAll("RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );",`
          RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
          RE_Direct_Scattering(directLight, vUv, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, reflectedLight);
        `);i.fragmentShader=i.fragmentShader.replace("#include <lights_fragment_begin>",s),this.onBeforeCompile2&&this.onBeforeCompile2(i)}}}const L3={count:200,colors:[0,0,0],ambientColor:16777215,ambientIntensity:1,lightIntensity:200,materialParams:{metalness:.5,roughness:.5,clearcoat:1,clearcoatRoughness:.15},minSize:.5,maxSize:1,size0:1,gravity:.5,friction:.9975,wallBounce:.95,maxVelocity:.15,maxX:5,maxY:5,maxZ:2,controlSphere0:!1,followCursor:!0},Vs=new Bn;class O3 extends eS{constructor(e,i={}){const s={...L3,...i},l=new T3,c=new bp(e,.04).fromScene(l).texture,h=new em,d=new N3({envMap:c,...s.materialParams});d.envMapRotation.x=-Math.PI/2,super(h,d,s.count),this.config=s,this.physics=new U3(s),this.#e(),this.setColors(s.colors)}#e(){this.ambientLight=new T1(this.config.ambientColor,this.config.ambientIntensity),this.add(this.ambientLight),this.light=new iS(this.config.colors[0],this.config.lightIntensity),this.add(this.light)}setColors(e){if(Array.isArray(e)&&e.length>1){const i=(function(s){let l,c;function h(d){l=d,c=[],l.forEach(p=>{c.push(new ht(p))})}return h(s),{setColors:h,getColorAt:function(d,p=new ht){const m=Math.max(0,Math.min(1,d))*(l.length-1),g=Math.floor(m),v=c[g];if(g>=l.length-1)return v.clone();const S=m-g,y=c[g+1];return p.r=v.r+S*(y.r-v.r),p.g=v.g+S*(y.g-v.g),p.b=v.b+S*(y.b-v.b),p}}})(e);for(let s=0;s<this.count;s++)this.setColorAt(s,i.getColorAt(s/this.count)),s===0&&this.light.color.copy(i.getColorAt(s/this.count));this.instanceColor.needsUpdate=!0}}update(e){this.physics.update(e);for(let i=0;i<this.count;i++)Vs.position.fromArray(this.physics.positionData,3*i),i===0&&this.config.followCursor===!1?Vs.scale.setScalar(0):Vs.scale.setScalar(this.physics.sizeData[i]),Vs.updateMatrix(),this.setMatrixAt(i,Vs.matrix),i===0&&this.light.position.copy(Vs.position);this.instanceMatrix.needsUpdate=!0}}function P3(r,e={}){const i=new A3({canvas:r,size:"parent",rendererOptions:{antialias:!0,alpha:!0}});let s;i.renderer.toneMapping=zp,i.camera.position.set(0,0,20),i.camera.lookAt(0,0,0),i.cameraMaxAspect=1.5,i.resize(),m(e);const l=new C1,c=new rr(new Z(0,0,1),0),h=new Z;let d=!1;r.style.touchAction="none",r.style.userSelect="none",r.style.webkitUserSelect="none";const p=R3({domElement:r,onMove(){l.setFromCamera(p.nPosition,i.camera),i.camera.getWorldDirection(c.normal),l.ray.intersectPlane(c,h),s.physics.center.copy(h),s.config.controlSphere0=!0},onLeave(){s.config.controlSphere0=!1}});function m(g){s&&(i.clear(),i.scene.remove(s)),s=new O3(i.renderer,g),i.scene.add(s)}return i.onBeforeRender=g=>{d||s.update(g)},i.onAfterResize=g=>{s.config.maxX=g.wWidth/2,s.config.maxY=g.wHeight/2},{three:i,get spheres(){return s},setCount(g){m({...s.config,count:g})},togglePause(){d=!d},dispose(){p.dispose(),i.dispose()}}}const F3=({className:r="",followCursor:e=!0,...i})=>{const s=Ae.useRef(null),l=Ae.useRef(null);return Ae.useEffect(()=>{const c=s.current;if(c)return l.current=P3(c,{followCursor:e,...i}),()=>{l.current&&l.current.dispose()}},[]),J.jsx("canvas",{className:`${r} w-full h-full`,ref:s})},Zt="../images",I3=[{name:"Graphic Designer",imageUrl:Zt+"/techStack/Sampul/GP.png",techStack:["../images/techStack/Affinity.svg","../images/techStack/Canva.svg","../images/techStack/Figma.svg"],Description:"Membuat Desain Poster, Banner, Display Videotron pada Event dan Bisa membuat Desain Sosial Media seperti Feed, Story Instagram, Twibbon, Thumbnail."},{name:"UI/UX Design",imageUrl:"../images/techStack/Sampul/UIUX.png",techStack:["../images/techStack/Figma.svg"],Description:"Mendesain Tampilan Website dengan pendekatan Mobile First Design dan Mendesain Aplikasi Mobile"},{name:"Front End",imageUrl:"../images/techStack/Sampul/CODE.png",techStack:["../images/techStack/Html.svg","../images/techStack/CSS.svg","../images/techStack/Javascript.svg","../images/techStack/Gsap.svg","../images/techStack/TailwindCss.svg"],Description:"Membuat Website dengan React dan TailwindCss dan animasi dengan GSAp"},{name:"Back End",imageUrl:"../images/techStack/Sampul/CODE.png",techStack:["../images/techStack/PHP.svg","../images/techStack/Firebase.svg","../images/techStack/Laravel.svg","../images/techStack/Python.svg"],Description:"Membuat Website dengan Framework Laravel dan dengan Flask Python"}],B3=[{name:"HYDROSEE APP",mainImageUrl:Zt+"/bestProject/smpl.png",image1Url:Zt+"/bestProject/1.png",image2Url:Zt+"/bestProject/2.png",techStackApp:[Zt+"/techStack/Figma.svg",Zt+"/techStack/Tinkercad.svg",Zt+"/techStack/Python.svg",Zt+"/techStack/Firebase.svg",Zt+"/techStack/Dart.svg",Zt+"/techStack/Flutter.svg"],description:"Pada Project Semester 5, Saya dan tim  membuat sebuah aplikasi mobile yang terintegrasi dengan sistem IoT. Di project kali ini kami menyelesaikan masalah terkait pertanian hidroponik yang selalu menjadi tempat main serangga belalang karena letakny yang di pinggir sawah. Dengan mengintegrasikan Sistem Cerdas berbasis machine learning yang dikolaborasikan dengan Sistem Pengolahan Citra dan Vision dalam mendeteksi belalang, Hasil dari deteksi ini digunakan untuk mentrigger Sistem IoT untuk bertindak."}],z3=[{url:Zt+"/galery/feedEpim.webp",name:"Feed Epim"},{url:Zt+"/galery/feedWorkshop.webp",name:"Feed Workshop Kelas Kreatif"},{url:Zt+"/galery/posterHarlahPancasila.webp",name:"Poster Harlah Pancasila"}],H3=[{url:Zt+"/galery/oprec.webp",name:"Flyer Oprec Imun"},{url:Zt+"/galery/flyerGerakJalan.webp",name:"Flyer Gerak Jalan Kabupaten Nganjuk"},{url:Zt+"/galery/posterWaisak.webp",name:"Poster Waisak"}],G3=[{url:Zt+"/galery/demisioner.webp",name:"Feed Demisioner"},{url:Zt+"/galery/feedSubSektorApp.webp",name:"Feed SubSektor Aplikasi"},{url:Zt+"/galery/posterUAS.webp",name:"Poster UAS"}],V3=[{url:Zt+"/galery/posterMaulid.webp",name:"Poster Maulid"},{url:Zt+"/galery/bannerWorkshop.webp",name:"Banner Workshop"},{url:Zt+"/galery/posterImlek.webp",name:"Poster Imlek"}];function k3(){return J.jsxs("div",{className:"bg-transparent",children:[J.jsxs("section",{className:"pt-20",children:[J.jsxs("div",{className:"grid grid-cols-6 grid-rows-4 gap-2 px-2 sm:px-4 md:px-6 lg:px-10",children:[J.jsx("div",{className:"col-span-6",children:J.jsx("h1",{className:"lg:text-9xl leading-none font-extrabold bg-linear-to-r from-brand-700 to-brand-500 bg-clip-text text-transparent md:text-7xl sm:text-5xl text-3xl",children:"Hello, I’AM IVAN"})}),J.jsx("div",{className:"col-span-2 row-span-3 row-start-2",children:J.jsx("h2",{className:"text-white text-4xl font-normal",children:"PRADITYA IVAN RAHMADHANI"})}),J.jsxs("div",{className:"col-span-2 row-span-3 col-start-3 row-start-2",children:[J.jsx("img",{src:Zt+"/no_bg_gradient.webp",alt:"its me bro",className:"h-full w-auto"}),J.jsx("img",{src:"",alt:""})]}),J.jsx("div",{className:"col-span-2 col-start-5 row-start-3 content-end",children:J.jsx("h3",{className:"text-white text-2xl font-bold",children:"I CAN DESIGN AND DEVELOP YOUR WEBSITE"})}),J.jsx("div",{className:"col-span-2 col-start-5 row-start-4",children:J.jsx("p",{className:"text-sm font-normal text-gray-300",children:"Fullstack Developer & Designer yang berfokus pada pengalaman pengguna. Memiliki pengalaman dalam membangun aplikasi web modern menggunakan React dan Laravel, serta dalam otomasi sistem melalui IoT dan manajemen database yang efisien."})})]}),J.jsxs("div",{className:"col-span-6 row-start-4 pt-8 overflow-hidden",children:[J.jsxs("div",{className:"flex gap-0 w-full  text-brand-100 border-brand-100 text-lg whitespace-nowrap mb-4",children:[J.jsx("span",{className:"bg-brand-1000 border-y-2 font-semibold py-2.5 px-4",children:"Graphic Designer"}),J.jsx("span",{className:"bg-brand-1000 border-y-2 py-2.5",children:"•"}),J.jsx("span",{className:"bg-brand-1000 border-y-2 font-semibold py-2.5 px-4",children:"UI/UX"}),J.jsx("span",{className:"bg-brand-1000 border-y-2 py-2.5",children:"•"}),J.jsx("span",{className:"bg-brand-1000 border-y-2 py-2.5 px-4",children:"IOT Dev"}),J.jsx("span",{className:"bg-brand-1000 border-y-2 py-2.5",children:"•"}),J.jsx("span",{className:"bg-brand-1000 border-y-2 font-semibold py-2.5 px-4",children:"Web Developer"}),J.jsx("span",{className:"bg-brand-1000 border-y-2 py-2.5",children:"•"}),J.jsx("span",{className:"bg-brand-1000 border-y-2 font-semibold py-2.5 px-4",children:"Graphic Designer"}),J.jsx("span",{className:"bg-brand-1000 border-y-2 py-2.5",children:"•"}),J.jsx("span",{className:"bg-brand-1000 border-y-2 py-2.5 px-4",children:"Video Editor"}),J.jsx("span",{className:"bg-brand-1000 border-y-2 py-2.5",children:"•"}),J.jsx("span",{className:"bg-brand-1000 border-y-2 font-semibold py-2.5 px-4",children:"Graphic Designer"}),J.jsx("span",{className:"bg-brand-1000 border-y-2 py-2.5",children:"•"}),J.jsx("span",{className:"bg-brand-1000 border-y-2 font-semibold py-2.5 px-4",children:"UI/UX"}),J.jsx("span",{className:"bg-brand-1000 border-y-2 py-2.5",children:"•"}),J.jsx("span",{className:"bg-brand-1000 border-y-2 py-2.5 px-4",children:"IOT Dev"}),J.jsx("span",{className:"bg-brand-1000 border-y-2 py-2.5",children:"•"}),J.jsx("span",{className:"bg-brand-1000 border-y-2 font-semibold py-2.5 px-4",children:"Web Developer"}),J.jsx("span",{className:"bg-brand-1000 border-y-2 py-2.5",children:"•"}),J.jsx("span",{className:"bg-brand-1000 border-y-2 font-semibold py-2.5 px-4",children:"Graphic Designer"}),J.jsx("span",{className:"bg-brand-1000 border-y-2 py-2.5",children:"•"}),J.jsx("span",{className:"bg-brand-1000 border-y-2 py-2.5 px-4",children:"Video Editor"})]}),J.jsxs("div",{className:"flex gap-0 w-full bg-brand-1000 text-brand-100 border-brand-100 text-lg whitespace-nowrap mb-4",children:[J.jsx("span",{className:"bg-brand-1000 border-y-2 py-2.5 px-4",children:"Video Editor"}),J.jsx("span",{className:"bg-brand-1000 border-y-2 py-2.5",children:"•"}),J.jsx("span",{className:"bg-brand-1000 border-y-2 font-semibold py-2.5 px-4",children:"UI/UX"}),J.jsx("span",{className:"bg-brand-1000 border-y-2 py-2.5",children:"•"}),J.jsx("span",{className:"bg-brand-1000 border-y-2 py-2.5 px-4",children:"IOT Dev"}),J.jsx("span",{className:"bg-brand-1000 border-y-2 py-2.5",children:"•"}),J.jsx("span",{className:"bg-brand-1000 border-y-2 font-semibold py-2.5 px-4",children:"Graphic Designer"}),J.jsx("span",{className:"bg-brand-1000 border-y-2 py-2.5",children:"•"}),J.jsx("span",{className:"bg-brand-1000 border-y-2 font-semibold py-2.5 px-4",children:"Web Developer"}),J.jsx("span",{className:"bg-brand-1000 border-y-2 py-2.5",children:"•"}),J.jsx("span",{className:"bg-brand-1000 border-y-2 py-2.5 px-4",children:"Video Editor"}),J.jsx("span",{className:"bg-brand-1000 border-y-2 py-2.5",children:"•"}),J.jsx("span",{className:"bg-brand-1000 border-y-2 font-semibold py-2.5 px-4",children:"UI/UX"}),J.jsx("span",{className:"bg-brand-1000 border-y-2 py-2.5",children:"•"}),J.jsx("span",{className:"bg-brand-1000 border-y-2 py-2.5 px-4",children:"IOT Dev"}),J.jsx("span",{className:"bg-brand-1000 border-y-2 py-2.5",children:"•"}),J.jsx("span",{className:"bg-brand-1000 border-y-2 font-semibold py-2.5 px-4",children:"Graphic Designer"}),J.jsx("span",{className:"bg-brand-1000 border-y-2 py-2.5",children:"•"}),J.jsx("span",{className:"bg-brand-1000 border-y-2 font-semibold py-2.5 px-4",children:"Web Developer"}),J.jsx("span",{className:"bg-brand-1000 border-y-2 py-2.5",children:"•"}),J.jsx("span",{className:"bg-brand-1000 border-y-2 py-2.5 px-4",children:"Video Editor"}),J.jsx("span",{className:"bg-brand-1000 border-y-2 py-2.5",children:"•"}),J.jsx("span",{className:"bg-brand-1000 border-y-2 font-semibold py-2.5 px-4",children:"UI/UX"}),J.jsx("span",{className:"bg-brand-1000 border-y-2 py-2.5",children:"•"}),J.jsx("span",{className:"bg-brand-1000 border-y-2 py-2.5 px-4",children:"IOT Dev"}),J.jsx("span",{className:"bg-brand-1000 border-y-2 py-2.5",children:"•"}),J.jsx("span",{className:"bg-brand-1000 border-y-2 font-semibold py-2.5 px-4",children:"Graphic Designer"}),J.jsx("span",{className:"bg-brand-1000 border-y-2 py-2.5",children:"•"}),J.jsx("span",{className:"bg-brand-1000 border-y-2 font-semibold py-2.5 px-4",children:"Web Developer"})]})]}),J.jsx("div",{className:"absolute w-screen top-0 left-0 min-h-screen -z-10",children:J.jsx(F3,{count:100,gravity:.01,friction:.9975,wallBounce:.95,followCursor:!1,colors:[3099,11620,17557],ambientColor:258,className:"bg-brand-1000"})})]}),J.jsx("section",{className:"flex min-h-screen px-2 sm:px-4 md:px-6 lg:px-10 pt-8 bg-brand-1000 ",children:J.jsxs("div",{className:"flex flex-col w-full h-full gap-5",children:[J.jsx("h2",{className:"text-brand-0 text-7xl font-medium",children:"MY SKILLS"}),J.jsx("div",{className:"flex justify-center flex-row gap-4",children:I3.map(r=>J.jsxs("div",{className:"bg-neutral-primary-soft block w-80 h-fit max-w-sm border border-default p-4 bg-brand-1000 hover:bg-brand-950 duration-500 group",children:[J.jsx("img",{className:"w-full h-auto mb-1.5",src:r.imageUrl,alt:""}),J.jsxs("div",{className:"flex flex-col gap-2.5",children:[J.jsx("h3",{className:"text-brand-300 text-2xl font-bold",children:r.name}),J.jsx("p",{className:"text-brand-100 text-lg font-normal",children:r.Description}),J.jsx("div",{className:"flex -space-x-4 rtl:space-x-reverse group-hover:space-x-3 transition-all duration-500",children:r.techStack.map((e,i)=>J.jsx("img",{class:"w-10 h-10 shadow-md shadow-black/80 transition-transform duration-300",src:e,alt:r-e-{}},i))})]})]}))}),J.jsx("h3",{className:"text-5xl font-medium bg-linear-to-r from-brand-700 to-brand-800 bg-clip-text text-transparent text-end",children:"TECH STACK"})]})}),J.jsxs("section",{className:"bg-brand-1000 px-2 sm:px-4 md:px-6 lg:px-10",children:[J.jsx("h2",{className:"text-7xl font-medium text-brand-0 mb-2",children:"BEST PROJECT"}),B3.map(r=>J.jsxs("div",{className:"flex flex-row gap-4 h-fit",children:[J.jsxs("div",{className:"grid grid-cols-2 grid-rows-2 gap-4 w-full h-fit",children:[J.jsx("div",{className:"col-span-2",children:J.jsx("img",{className:"aspect-video object-cover w-full",src:r.mainImageUrl,alt:""})}),J.jsx("div",{className:"row-start-2",children:J.jsx("img",{className:"aspect-video object-cover w-full",src:r.image1Url,alt:""})}),J.jsx("div",{className:"row-start-2",children:J.jsx("img",{className:"aspect-video object-cover w-full",src:r.image2Url,alt:""})})]}),J.jsxs("div",{className:"flex flex-col gap-5 w-full",children:[J.jsx("h3",{className:"text-5xl font-bold text-brand-0",children:r.name}),J.jsx("p",{className:"text-lg font-normal text-brand-50 ml-8",children:r.description}),J.jsx("div",{className:"flex flex-row gap-4",children:r.techStackApp.map((e,i)=>J.jsx("img",{class:"w-10 h-10 shadow-md shadow-black/80 transition-transform duration-300",src:e,alt:r-e-{}},i))})]})]}))]}),J.jsx("section",{className:"bg-brand-950 px-2 sm:px-4 md:px-6 lg:px-10 pb-10",children:J.jsxs("div",{className:"",children:[J.jsxs("div",{className:"relative mb-5",children:[J.jsxs("div",{className:"relative z-20 aspect-video p-4 w-full text-brand-0 text-7xl font-bold flex flex-col justify-between",children:[J.jsx("h2",{children:"BEST DESIGN"}),J.jsx("h3",{className:"text-end",children:"2025"})]}),J.jsx("img",{className:"absolute bottom-0 left-0 z-10 aspect-video object-cover w-full",src:Zt+"/galery/sampul/bgBestDesign2025.webp",alt:""})]}),J.jsxs("div",{className:"flex flex-col gap-5",children:[J.jsx("div",{className:"",children:J.jsx("img",{className:"w-full h-fit",src:Zt+"/galery/carousaleReor.webp",alt:""})}),J.jsxs("div",{className:"flex flex-row w-full h-fit gap-5",children:[J.jsx("div",{className:"flex flex-col w-full h-fit gap-5",children:z3.map(r=>J.jsx("img",{className:"w-full h-fit",src:r.url,alt:r.name}))}),J.jsx("div",{className:"flex flex-col w-full h-fit gap-5",children:H3.map(r=>J.jsx("img",{className:"w-full h-fit",src:r.url,alt:r.name}))}),J.jsx("div",{className:"flex flex-col w-full h-fit gap-5",children:G3.map(r=>J.jsx("img",{className:"w-full h-fit",src:r.url,alt:r.name}))}),J.jsx("div",{className:"flex flex-col w-full h-fit gap-5",children:V3.map(r=>J.jsx("img",{className:"w-full h-fit",src:r.url,alt:r.name}))})]})]})]})}),J.jsx("footer",{children:J.jsxs("div",{className:"flex flex-row justify-between py-4 px-10",children:[J.jsx("a",{className:"text-lg font-medium text-gray-500",href:"#",children:"← previous"}),J.jsx("a",{className:"text-lg font-medium text-brand-0",href:"#",children:J.jsx("p",{children:"Next →"})})]})})]})}function X3({title:r,titleId:e,...i},s){return Ae.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:s,"aria-labelledby":e},i),r?Ae.createElement("title",{id:e},r):null,Ae.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"}))}const W3=Ae.forwardRef(X3);function q3({title:r,titleId:e,...i},s){return Ae.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:s,"aria-labelledby":e},i),r?Ae.createElement("title",{id:e},r):null,Ae.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"m10.5 21 5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 0 1 6-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 0 1-3.827-5.802"}))}const j3=Ae.forwardRef(q3);function Y3({title:r,titleId:e,...i},s){return Ae.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:s,"aria-labelledby":e},i),r?Ae.createElement("title",{id:e},r):null,Ae.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"}))}const Z3=Ae.forwardRef(Y3);function K3({title:r,titleId:e,...i},s){return Ae.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true","data-slot":"icon",ref:s,"aria-labelledby":e},i),r?Ae.createElement("title",{id:e},r):null,Ae.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M6 18 18 6M6 6l12 12"}))}const Q3=Ae.forwardRef(K3),ax=[{name:"Home",href:"#",current:!0},{name:"About",href:"#",current:!1},{name:"Experience",href:"#",current:!1},{name:"My Project",href:"#",current:!1},{name:"My Design",href:"#",current:!1}];function rx(...r){return r.filter(Boolean).join(" ")}const $3=()=>J.jsxs("body",{className:"min-h-screen overflow-x-hidden bg-brand-1000",children:[J.jsxs(jb,{as:"nav",className:"fixed w-full px-2 sm:px-4 md:px-6 lg:px-10 pr-2 sm:pr-4 md:pr-6 lg:pr-10 pt-5 z-20 bg-transparent after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-white/10",children:[J.jsx("div",{className:"mx-none w-full",children:J.jsxs("div",{className:"relative bg-brand-0 rounded-full px-2 sm:px-4 lg:px-5 py-8 flex h-16 items-center justify-between",children:[J.jsx("div",{className:"absolute inset-y-0 left-0 flex items-center lg:hidden",children:J.jsxs(Ch,{className:"group relative inline-flex items-center justify-center rounded-md p-5 text-brand-1000 hover:bg-white/5 hover:text-gray-500 focus:outline-2 focus:-outline-offset-1 focus:outline-indigo-500",children:[J.jsx("span",{className:"absolute -inset-0.5"}),J.jsx("span",{className:"sr-only",children:"Open main menu"}),J.jsx(W3,{"aria-hidden":"true",className:"block size-6 group-data-open:hidden"}),J.jsx(Q3,{"aria-hidden":"true",className:"hidden size-6 group-data-open:block"})]})}),J.jsx("div",{className:"flex flex-1 lg:flex-none items-center pr-18 sm:pr-0 md:pr-0 pl-0 md:pl-8 lg:pl-0 justify-center sm:justify-center lg:items-stretch lg:justify-start",children:J.jsxs("div",{className:"flex shrink-0 items-center gap-1",children:[J.jsx("img",{alt:"Pradima_Creative",src:"../images/logo-nobg2_3.webp",className:"h-12 w-auto"}),J.jsx("h2",{className:"text-sm font-semibold text-brand-900",children:"Pradima_Creative Porto"})]})}),J.jsx("div",{className:"hidden sm:ml-6 content-center lg:block",children:J.jsx("div",{className:"flex gap-1",children:ax.map(r=>J.jsx("a",{href:r.href,"aria-current":r.current?"page":void 0,className:rx(r.current?"bg-brand-500/50 text-white px-5":"text-brand-1000/50 hover:bg-white/5 hover:text-brand-300","rounded-full px-3 py-2 text-sm font-medium"),children:r.name},r.name))})}),J.jsxs("div",{className:"absolute inset-y-0 right-0 flex items-center pr-5 gap-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0",children:[J.jsx("button",{className:"hidden bg-brand-1000 text-brand-0 py-2 px-6 rounded-full lg:flex hover:bg-gray-700 active:bg-gray-500 duration-500",children:"Let's Connected"}),J.jsxs("button",{type:"button",className:"relative rounded-full p-2 text-brand-1000 bg-gray-300 hover:bg-gray-500 hover:text-brand-50 active:bg-gray-800 duration-500 focus:outline-2 focus:outline-offset-2 focus:outline-indigo-500",children:[J.jsx("span",{className:"absolute -inset-1.5"}),J.jsx("span",{className:"sr-only",children:"Theme"}),J.jsx(Z3,{"aria-hidden":"true",className:"size-6"})]}),J.jsxs("button",{type:"button",className:"relative rounded-full p-2 text-brand-1000 bg-gray-300 hover:bg-gray-500 hover:text-brand-50 active:bg-gray-800 duration-500 focus:outline-2 focus:outline-offset-2 focus:outline-indigo-500",children:[J.jsx("span",{className:"absolute -inset-1.5"}),J.jsx("span",{className:"sr-only",children:"Theme"}),J.jsx(j3,{"aria-hidden":"true",className:"size-6"})]})]})]})}),J.jsx(Rx,{className:"bg-brand-0 rounded-2xl mt-4 lg:hidden",children:J.jsxs("div",{className:"space-y-1 px-2 pt-2 pb-3",children:[ax.map(r=>J.jsx(Ch,{as:"a",href:r.href,"aria-current":r.current?"page":void 0,className:rx(r.current?"bg-brand-500/50 text-white":"text-brand-1000/50 hover:bg-brand-50 hover:text-shadow-brand-800 hover:text-brand-300","block rounded-md px-3 py-2 text-base font-medium"),children:r.name},r.name)),J.jsx("button",{className:"bg-brand-1000 text-brand-0 py-2 px-6 rounded-full",children:"Let's Connected"})]})})]}),J.jsx(k3,{})]});EM.createRoot(document.getElementById("root")).render(J.jsx(Ae.StrictMode,{children:J.jsx($3,{})}));
