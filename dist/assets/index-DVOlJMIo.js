(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function Il(t){if(t===null||typeof t!="object")return!1;const e=Object.getPrototypeOf(t);return e!==null&&e!==Object.prototype&&Object.getPrototypeOf(e)!==null||Symbol.iterator in t?!1:Symbol.toStringTag in t?Object.prototype.toString.call(t)==="[object Module]":!0}function uc(t,e,n=".",r){if(!Il(e))return uc(t,{},n,r);const s=Object.assign({},e);for(const i in t){if(i==="__proto__"||i==="constructor")continue;const o=t[i];o!=null&&(r&&r(s,i,o,n)||(Array.isArray(o)&&Array.isArray(s[i])?s[i]=[...o,...s[i]]:Il(o)&&Il(s[i])?s[i]=uc(o,s[i],(n?`${n}.`:"")+i.toString(),r):s[i]=o))}return s}function k0(t){return(...e)=>e.reduce((n,r)=>uc(n,r,"",t),{})}const D0=k0();/**
* @vue/shared v3.4.22
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Ia(t,e){const n=new Set(t.split(","));return e?r=>n.has(r.toLowerCase()):r=>n.has(r)}const be={},Xr=[],kt=()=>{},V0=()=>!1,Aa=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Eu=t=>t.startsWith("onUpdate:"),ze=Object.assign,Tu=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},N0=Object.prototype.hasOwnProperty,fe=(t,e)=>N0.call(t,e),Q=Array.isArray,Zr=t=>ba(t)==="[object Map]",cm=t=>ba(t)==="[object Set]",se=t=>typeof t=="function",Be=t=>typeof t=="string",Nr=t=>typeof t=="symbol",Ce=t=>t!==null&&typeof t=="object",um=t=>(Ce(t)||se(t))&&se(t.then)&&se(t.catch),hm=Object.prototype.toString,ba=t=>hm.call(t),M0=t=>ba(t).slice(8,-1),dm=t=>ba(t)==="[object Object]",wu=t=>Be(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Ks=Ia(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ra=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},L0=/-(\w)/g,rn=Ra(t=>t.replace(L0,(e,n)=>n?n.toUpperCase():"")),F0=/\B([A-Z])/g,Mr=Ra(t=>t.replace(F0,"-$1").toLowerCase()),Sa=Ra(t=>t.charAt(0).toUpperCase()+t.slice(1)),Al=Ra(t=>t?`on${Sa(t)}`:""),Gn=(t,e)=>!Object.is(t,e),ko=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},fm=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},hc=t=>{const e=parseFloat(t);return isNaN(e)?t:e},U0=t=>{const e=Be(t)?Number(t):NaN;return isNaN(e)?t:e};let Td;const pm=()=>Td||(Td=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Ca(t){if(Q(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=Be(r)?q0(r):Ca(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(Be(t)||Ce(t))return t}const $0=/;(?![^(]*\))/g,B0=/:([^]+)/,j0=/\/\*[^]*?\*\//g;function q0(t){const e={};return t.replace(j0,"").split($0).forEach(n=>{if(n){const r=n.split(B0);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Iu(t){let e="";if(Be(t))e=t;else if(Q(t))for(let n=0;n<t.length;n++){const r=Iu(t[n]);r&&(e+=r+" ")}else if(Ce(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const H0="html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot",z0=Ia(H0),K0="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",W0=Ia(K0);function mm(t){return!!t||t===""}const Qe=t=>Be(t)?t:t==null?"":Q(t)||Ce(t)&&(t.toString===hm||!se(t.toString))?JSON.stringify(t,gm,2):String(t),gm=(t,e)=>e&&e.__v_isRef?gm(t,e.value):Zr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[bl(r,i)+" =>"]=s,n),{})}:cm(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>bl(n))}:Nr(e)?bl(e):Ce(e)&&!Q(e)&&!dm(e)?String(e):e,bl=(t,e="")=>{var n;return Nr(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.4.22
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let bt;class G0{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=bt,!e&&bt&&(this.index=(bt.scopes||(bt.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=bt;try{return bt=this,e()}finally{bt=n}}}on(){bt=this}off(){bt=this.parent}stop(e){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function Q0(t,e=bt){e&&e.active&&e.effects.push(t)}function _m(){return bt}function Y0(t){bt&&bt.cleanups.push(t)}let br;class Au{constructor(e,n,r,s){this.fn=e,this.trigger=n,this.scheduler=r,this.active=!0,this.deps=[],this._dirtyLevel=4,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,Q0(this,s)}get dirty(){if(this._dirtyLevel===2||this._dirtyLevel===3){this._dirtyLevel=1,nr();for(let e=0;e<this._depsLength;e++){const n=this.deps[e];if(n.computed&&(J0(n.computed),this._dirtyLevel>=4))break}this._dirtyLevel===1&&(this._dirtyLevel=0),rr()}return this._dirtyLevel>=4}set dirty(e){this._dirtyLevel=e?4:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let e=jn,n=br;try{return jn=!0,br=this,this._runnings++,wd(this),this.fn()}finally{Id(this),this._runnings--,br=n,jn=e}}stop(){var e;this.active&&(wd(this),Id(this),(e=this.onStop)==null||e.call(this),this.active=!1)}}function J0(t){return t.value}function wd(t){t._trackId++,t._depsLength=0}function Id(t){if(t.deps.length>t._depsLength){for(let e=t._depsLength;e<t.deps.length;e++)ym(t.deps[e],t);t.deps.length=t._depsLength}}function ym(t,e){const n=t.get(e);n!==void 0&&e._trackId!==n&&(t.delete(e),t.size===0&&t.cleanup())}let jn=!0,dc=0;const vm=[];function nr(){vm.push(jn),jn=!1}function rr(){const t=vm.pop();jn=t===void 0?!0:t}function bu(){dc++}function Ru(){for(dc--;!dc&&fc.length;)fc.shift()()}function Em(t,e,n){if(e.get(t)!==t._trackId){e.set(t,t._trackId);const r=t.deps[t._depsLength];r!==e?(r&&ym(r,t),t.deps[t._depsLength++]=e):t._depsLength++}}const fc=[];function Tm(t,e,n){bu();for(const r of t.keys()){let s;r._dirtyLevel<e&&(s??(s=t.get(r)===r._trackId))&&(r._shouldSchedule||(r._shouldSchedule=r._dirtyLevel===0),r._dirtyLevel=e),r._shouldSchedule&&(s??(s=t.get(r)===r._trackId))&&(r.trigger(),(!r._runnings||r.allowRecurse)&&r._dirtyLevel!==2&&(r._shouldSchedule=!1,r.scheduler&&fc.push(r.scheduler)))}Ru()}const wm=(t,e)=>{const n=new Map;return n.cleanup=t,n.computed=e,n},pc=new WeakMap,Rr=Symbol(""),mc=Symbol("");function wt(t,e,n){if(jn&&br){let r=pc.get(t);r||pc.set(t,r=new Map);let s=r.get(n);s||r.set(n,s=wm(()=>r.delete(n))),Em(br,s)}}function gn(t,e,n,r,s,i){const o=pc.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&Q(t)){const l=Number(r);o.forEach((c,u)=>{(u==="length"||!Nr(u)&&u>=l)&&a.push(c)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":Q(t)?wu(n)&&a.push(o.get("length")):(a.push(o.get(Rr)),Zr(t)&&a.push(o.get(mc)));break;case"delete":Q(t)||(a.push(o.get(Rr)),Zr(t)&&a.push(o.get(mc)));break;case"set":Zr(t)&&a.push(o.get(Rr));break}bu();for(const l of a)l&&Tm(l,4);Ru()}const X0=Ia("__proto__,__v_isRef,__isVue"),Im=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Nr)),Ad=Z0();function Z0(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=me(this);for(let i=0,o=this.length;i<o;i++)wt(r,"get",i+"");const s=r[e](...n);return s===-1||s===!1?r[e](...n.map(me)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){nr(),bu();const r=me(this)[e].apply(this,n);return Ru(),rr(),r}}),t}function eE(t){Nr(t)||(t=String(t));const e=me(this);return wt(e,"has",t),e.hasOwnProperty(t)}class Am{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?fE:Cm:i?Sm:Rm).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=Q(e);if(!s){if(o&&fe(Ad,n))return Reflect.get(Ad,n,r);if(n==="hasOwnProperty")return eE}const a=Reflect.get(e,n,r);return(Nr(n)?Im.has(n):X0(n))||(s||wt(e,"get",n),i)?a:It(a)?o&&wu(n)?a:a.value:Ce(a)?s?xm(a):sr(a):a}}class bm extends Am{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._isShallow){const l=ui(i);if(!Qo(r)&&!ui(r)&&(i=me(i),r=me(r)),!Q(e)&&It(i)&&!It(r))return l?!1:(i.value=r,!0)}const o=Q(e)&&wu(n)?Number(n)<e.length:fe(e,n),a=Reflect.set(e,n,r,s);return e===me(s)&&(o?Gn(r,i)&&gn(e,"set",n,r):gn(e,"add",n,r)),a}deleteProperty(e,n){const r=fe(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&gn(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!Nr(n)||!Im.has(n))&&wt(e,"has",n),r}ownKeys(e){return wt(e,"iterate",Q(e)?"length":Rr),Reflect.ownKeys(e)}}class tE extends Am{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const nE=new bm,rE=new tE,sE=new bm(!0),Su=t=>t,Pa=t=>Reflect.getPrototypeOf(t);function po(t,e,n=!1,r=!1){t=t.__v_raw;const s=me(t),i=me(e);n||(Gn(e,i)&&wt(s,"get",e),wt(s,"get",i));const{has:o}=Pa(s),a=r?Su:n?xu:hi;if(o.call(s,e))return a(t.get(e));if(o.call(s,i))return a(t.get(i));t!==s&&t.get(e)}function mo(t,e=!1){const n=this.__v_raw,r=me(n),s=me(t);return e||(Gn(t,s)&&wt(r,"has",t),wt(r,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function go(t,e=!1){return t=t.__v_raw,!e&&wt(me(t),"iterate",Rr),Reflect.get(t,"size",t)}function bd(t){t=me(t);const e=me(this);return Pa(e).has.call(e,t)||(e.add(t),gn(e,"add",t,t)),this}function Rd(t,e){e=me(e);const n=me(this),{has:r,get:s}=Pa(n);let i=r.call(n,t);i||(t=me(t),i=r.call(n,t));const o=s.call(n,t);return n.set(t,e),i?Gn(e,o)&&gn(n,"set",t,e):gn(n,"add",t,e),this}function Sd(t){const e=me(this),{has:n,get:r}=Pa(e);let s=n.call(e,t);s||(t=me(t),s=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return s&&gn(e,"delete",t,void 0),i}function Cd(){const t=me(this),e=t.size!==0,n=t.clear();return e&&gn(t,"clear",void 0,void 0),n}function _o(t,e){return function(r,s){const i=this,o=i.__v_raw,a=me(o),l=e?Su:t?xu:hi;return!t&&wt(a,"iterate",Rr),o.forEach((c,u)=>r.call(s,l(c),l(u),i))}}function yo(t,e,n){return function(...r){const s=this.__v_raw,i=me(s),o=Zr(i),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=s[t](...r),u=n?Su:e?xu:hi;return!e&&wt(i,"iterate",l?mc:Rr),{next(){const{value:h,done:d}=c.next();return d?{value:h,done:d}:{value:a?[u(h[0]),u(h[1])]:u(h),done:d}},[Symbol.iterator](){return this}}}}function Sn(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function iE(){const t={get(i){return po(this,i)},get size(){return go(this)},has:mo,add:bd,set:Rd,delete:Sd,clear:Cd,forEach:_o(!1,!1)},e={get(i){return po(this,i,!1,!0)},get size(){return go(this)},has:mo,add:bd,set:Rd,delete:Sd,clear:Cd,forEach:_o(!1,!0)},n={get(i){return po(this,i,!0)},get size(){return go(this,!0)},has(i){return mo.call(this,i,!0)},add:Sn("add"),set:Sn("set"),delete:Sn("delete"),clear:Sn("clear"),forEach:_o(!0,!1)},r={get(i){return po(this,i,!0,!0)},get size(){return go(this,!0)},has(i){return mo.call(this,i,!0)},add:Sn("add"),set:Sn("set"),delete:Sn("delete"),clear:Sn("clear"),forEach:_o(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=yo(i,!1,!1),n[i]=yo(i,!0,!1),e[i]=yo(i,!1,!0),r[i]=yo(i,!0,!0)}),[t,n,e,r]}const[oE,aE,lE,cE]=iE();function Cu(t,e){const n=e?t?cE:lE:t?aE:oE;return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(fe(n,s)&&s in r?n:r,s,i)}const uE={get:Cu(!1,!1)},hE={get:Cu(!1,!0)},dE={get:Cu(!0,!1)},Rm=new WeakMap,Sm=new WeakMap,Cm=new WeakMap,fE=new WeakMap;function pE(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function mE(t){return t.__v_skip||!Object.isExtensible(t)?0:pE(M0(t))}function sr(t){return ui(t)?t:Pu(t,!1,nE,uE,Rm)}function Pm(t){return Pu(t,!1,sE,hE,Sm)}function xm(t){return Pu(t,!0,rE,dE,Cm)}function Pu(t,e,n,r,s){if(!Ce(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=mE(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return s.set(t,a),a}function Ws(t){return ui(t)?Ws(t.__v_raw):!!(t&&t.__v_isReactive)}function ui(t){return!!(t&&t.__v_isReadonly)}function Qo(t){return!!(t&&t.__v_isShallow)}function Om(t){return t?!!t.__v_raw:!1}function me(t){const e=t&&t.__v_raw;return e?me(e):t}function gE(t){return Object.isExtensible(t)&&fm(t,"__v_skip",!0),t}const hi=t=>Ce(t)?sr(t):t,xu=t=>Ce(t)?xm(t):t;class km{constructor(e,n,r,s){this.getter=e,this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new Au(()=>e(this._value),()=>Do(this,this.effect._dirtyLevel===2?2:3)),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const e=me(this);return(!e._cacheable||e.effect.dirty)&&Gn(e._value,e._value=e.effect.run())&&Do(e,4),Dm(e),e.effect._dirtyLevel>=2&&Do(e,2),e._value}set value(e){this._setter(e)}get _dirty(){return this.effect.dirty}set _dirty(e){this.effect.dirty=e}}function _E(t,e,n=!1){let r,s;const i=se(t);return i?(r=t,s=kt):(r=t.get,s=t.set),new km(r,s,i||!s,n)}function Dm(t){var e;jn&&br&&(t=me(t),Em(br,(e=t.dep)!=null?e:t.dep=wm(()=>t.dep=void 0,t instanceof km?t:void 0)))}function Do(t,e=4,n){t=me(t);const r=t.dep;r&&Tm(r,e)}function It(t){return!!(t&&t.__v_isRef===!0)}function pe(t){return Vm(t,!1)}function yE(t){return Vm(t,!0)}function Vm(t,e){return It(t)?t:new vE(t,e)}class vE{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:me(e),this._value=n?e:hi(e)}get value(){return Dm(this),this._value}set value(e){const n=this.__v_isShallow||Qo(e)||ui(e);e=n?e:me(e),Gn(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:hi(e),Do(this,4))}}function ke(t){return It(t)?t.value:t}const EE={get:(t,e,n)=>ke(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return It(s)&&!It(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function Nm(t){return Ws(t)?t:new Proxy(t,EE)}/**
* @vue/runtime-core v3.4.22
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function qn(t,e,n,r){try{return r?t(...r):t()}catch(s){xa(s,e,n)}}function Dt(t,e,n,r){if(se(t)){const s=qn(t,e,n,r);return s&&um(s)&&s.catch(i=>{xa(i,e,n)}),s}if(Q(t)){const s=[];for(let i=0;i<t.length;i++)s.push(Dt(t[i],e,n,r));return s}}function xa(t,e,n,r=!0){const s=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=`https://vuejs.org/error-reference/#runtime-${n}`;for(;i;){const c=i.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](t,o,a)===!1)return}i=i.parent}const l=e.appContext.config.errorHandler;if(l){nr(),qn(l,null,10,[t,o,a]),rr();return}}TE(t,n,s,r)}function TE(t,e,n,r=!0){console.error(t)}let di=!1,gc=!1;const ct=[];let Gt=0;const es=[];let kn=null,mr=0;const Mm=Promise.resolve();let Ou=null;function Lm(t){const e=Ou||Mm;return t?e.then(this?t.bind(this):t):e}function wE(t){let e=Gt+1,n=ct.length;for(;e<n;){const r=e+n>>>1,s=ct[r],i=fi(s);i<t||i===t&&s.pre?e=r+1:n=r}return e}function ku(t){(!ct.length||!ct.includes(t,di&&t.allowRecurse?Gt+1:Gt))&&(t.id==null?ct.push(t):ct.splice(wE(t.id),0,t),Fm())}function Fm(){!di&&!gc&&(gc=!0,Ou=Mm.then($m))}function IE(t){const e=ct.indexOf(t);e>Gt&&ct.splice(e,1)}function AE(t){Q(t)?es.push(...t):(!kn||!kn.includes(t,t.allowRecurse?mr+1:mr))&&es.push(t),Fm()}function Pd(t,e,n=di?Gt+1:0){for(;n<ct.length;n++){const r=ct[n];if(r&&r.pre){if(t&&r.id!==t.uid)continue;ct.splice(n,1),n--,r()}}}function Um(t){if(es.length){const e=[...new Set(es)].sort((n,r)=>fi(n)-fi(r));if(es.length=0,kn){kn.push(...e);return}for(kn=e,mr=0;mr<kn.length;mr++)kn[mr]();kn=null,mr=0}}const fi=t=>t.id==null?1/0:t.id,bE=(t,e)=>{const n=fi(t)-fi(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function $m(t){gc=!1,di=!0,ct.sort(bE);try{for(Gt=0;Gt<ct.length;Gt++){const e=ct[Gt];e&&e.active!==!1&&qn(e,null,14)}}finally{Gt=0,ct.length=0,Um(),di=!1,Ou=null,(ct.length||es.length)&&$m()}}function RE(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||be;let s=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in r){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:d}=r[u]||be;d&&(s=n.map(f=>Be(f)?f.trim():f)),h&&(s=n.map(hc))}let a,l=r[a=Al(e)]||r[a=Al(rn(e))];!l&&i&&(l=r[a=Al(Mr(e))]),l&&Dt(l,t,6,s);const c=r[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Dt(c,t,6,s)}}function Bm(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},a=!1;if(!se(t)){const l=c=>{const u=Bm(c,e,!0);u&&(a=!0,ze(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!i&&!a?(Ce(t)&&r.set(t,null),null):(Q(i)?i.forEach(l=>o[l]=null):ze(o,i),Ce(t)&&r.set(t,o),o)}function Oa(t,e){return!t||!Aa(e)?!1:(e=e.slice(2).replace(/Once$/,""),fe(t,e[0].toLowerCase()+e.slice(1))||fe(t,Mr(e))||fe(t,e))}let mt=null,jm=null;function Yo(t){const e=mt;return mt=t,jm=t&&t.type.__scopeId||null,e}function ts(t,e=mt,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&Bd(-1);const i=Yo(e);let o;try{o=t(...s)}finally{Yo(i),r._d&&Bd(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function Rl(t){const{type:e,vnode:n,proxy:r,withProxy:s,props:i,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:h,data:d,setupState:f,ctx:g,inheritAttrs:y}=t;let v,E;const I=Yo(t);try{if(n.shapeFlag&4){const x=s||r,$=x;v=Wt(u.call($,x,h,i,f,d,g)),E=l}else{const x=e;v=Wt(x.length>1?x(i,{attrs:l,slots:a,emit:c}):x(i,null)),E=e.props?l:SE(l)}}catch(x){Ys.length=0,xa(x,t,1),v=Oe(Ft)}let T=v;if(E&&y!==!1){const x=Object.keys(E),{shapeFlag:$}=T;x.length&&$&7&&(o&&x.some(Eu)&&(E=CE(E,o)),T=Yn(T,E))}return n.dirs&&(T=Yn(T),T.dirs=T.dirs?T.dirs.concat(n.dirs):n.dirs),n.transition&&(T.transition=n.transition),v=T,Yo(I),v}const SE=t=>{let e;for(const n in t)(n==="class"||n==="style"||Aa(n))&&((e||(e={}))[n]=t[n]);return e},CE=(t,e)=>{const n={};for(const r in t)(!Eu(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function PE(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:a,patchFlag:l}=e,c=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?xd(r,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const d=u[h];if(o[d]!==r[d]&&!Oa(c,d))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?xd(r,o,c):!0:!!o;return!1}function xd(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!Oa(n,i))return!0}return!1}function xE({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const qm="components",OE="directives";function kE(t,e){return Hm(qm,t,!0,e)||t}const DE=Symbol.for("v-ndc");function VE(t){return Hm(OE,t)}function Hm(t,e,n=!0,r=!1){const s=mt||tt;if(s){const i=s.type;if(t===qm){const a=CT(i,!1);if(a&&(a===e||a===rn(e)||a===Sa(rn(e))))return i}const o=Od(s[t]||i[t],e)||Od(s.appContext[t],e);return!o&&r?i:o}}function Od(t,e){return t&&(t[e]||t[rn(e)]||t[Sa(rn(e))])}const NE=t=>t.__isSuspense;function ME(t,e){e&&e.pendingBranch?Q(t)?e.effects.push(...t):e.effects.push(t):AE(t)}const LE=Symbol.for("v-scx"),FE=()=>Lt(LE),vo={};function ut(t,e,n){return zm(t,e,n)}function zm(t,e,{immediate:n,deep:r,flush:s,once:i,onTrack:o,onTrigger:a}=be){if(e&&i){const M=e;e=(...ae)=>{M(...ae),$()}}const l=tt,c=M=>r===!0?M:yr(M,r===!1?1:void 0);let u,h=!1,d=!1;if(It(t)?(u=()=>t.value,h=Qo(t)):Ws(t)?(u=()=>c(t),h=!0):Q(t)?(d=!0,h=t.some(M=>Ws(M)||Qo(M)),u=()=>t.map(M=>{if(It(M))return M.value;if(Ws(M))return c(M);if(se(M))return qn(M,l,2)})):se(t)?e?u=()=>qn(t,l,2):u=()=>(f&&f(),Dt(t,l,3,[g])):u=kt,e&&r){const M=u;u=()=>yr(M())}let f,g=M=>{f=T.onStop=()=>{qn(M,l,4),f=T.onStop=void 0}},y;if(Ma)if(g=kt,e?n&&Dt(e,l,3,[u(),d?[]:void 0,g]):u(),s==="sync"){const M=FE();y=M.__watcherHandles||(M.__watcherHandles=[])}else return kt;let v=d?new Array(t.length).fill(vo):vo;const E=()=>{if(!(!T.active||!T.dirty))if(e){const M=T.run();(r||h||(d?M.some((ae,W)=>Gn(ae,v[W])):Gn(M,v)))&&(f&&f(),Dt(e,l,3,[M,v===vo?void 0:d&&v[0]===vo?[]:v,g]),v=M)}else T.run()};E.allowRecurse=!!e;let I;s==="sync"?I=E:s==="post"?I=()=>vt(E,l&&l.suspense):(E.pre=!0,l&&(E.id=l.uid),I=()=>ku(E));const T=new Au(u,kt,I),x=_m(),$=()=>{T.stop(),x&&Tu(x.effects,T)};return e?n?E():v=T.run():s==="post"?vt(T.run.bind(T),l&&l.suspense):T.run(),y&&y.push($),$}function UE(t,e,n){const r=this.proxy,s=Be(t)?t.includes(".")?Km(r,t):()=>r[t]:t.bind(r,r);let i;se(e)?i=e:(i=e.handler,n=e);const o=Ui(this),a=zm(s,i.bind(r),n);return o(),a}function Km(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function yr(t,e,n=0,r){if(!Ce(t)||t.__v_skip)return t;if(e&&e>0){if(n>=e)return t;n++}if(r=r||new Set,r.has(t))return t;if(r.add(t),It(t))yr(t.value,e,n,r);else if(Q(t))for(let s=0;s<t.length;s++)yr(t[s],e,n,r);else if(cm(t)||Zr(t))t.forEach(s=>{yr(s,e,n,r)});else if(dm(t))for(const s in t)yr(t[s],e,n,r);return t}function Yr(t,e){if(mt===null)return t;const n=La(mt)||mt.proxy,r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,a,l=be]=e[s];i&&(se(i)&&(i={mounted:i,updated:i}),i.deep&&yr(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:a,modifiers:l}))}return t}function lr(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let l=a.dir[r];l&&(nr(),Dt(l,n,8,[t.el,a,t,e]),rr())}}const Dn=Symbol("_leaveCb"),Eo=Symbol("_enterCb");function $E(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return St(()=>{t.isMounted=!0}),Xm(()=>{t.isUnmounting=!0}),t}const xt=[Function,Array],Wm={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:xt,onEnter:xt,onAfterEnter:xt,onEnterCancelled:xt,onBeforeLeave:xt,onLeave:xt,onAfterLeave:xt,onLeaveCancelled:xt,onBeforeAppear:xt,onAppear:xt,onAfterAppear:xt,onAppearCancelled:xt},BE={name:"BaseTransition",props:Wm,setup(t,{slots:e}){const n=Na(),r=$E();return()=>{const s=e.default&&Qm(e.default(),!0);if(!s||!s.length)return;let i=s[0];if(s.length>1){for(const d of s)if(d.type!==Ft){i=d;break}}const o=me(t),{mode:a}=o;if(r.isLeaving)return Sl(i);const l=kd(i);if(!l)return Sl(i);const c=_c(l,o,r,n);yc(l,c);const u=n.subTree,h=u&&kd(u);if(h&&h.type!==Ft&&!gr(l,h)){const d=_c(h,o,r,n);if(yc(h,d),a==="out-in")return r.isLeaving=!0,d.afterLeave=()=>{r.isLeaving=!1,n.update.active!==!1&&(n.effect.dirty=!0,n.update())},Sl(i);a==="in-out"&&l.type!==Ft&&(d.delayLeave=(f,g,y)=>{const v=Gm(r,h);v[String(h.key)]=h,f[Dn]=()=>{g(),f[Dn]=void 0,delete c.delayedLeave},c.delayedLeave=y})}return i}}},jE=BE;function Gm(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function _c(t,e,n,r){const{appear:s,mode:i,persisted:o=!1,onBeforeEnter:a,onEnter:l,onAfterEnter:c,onEnterCancelled:u,onBeforeLeave:h,onLeave:d,onAfterLeave:f,onLeaveCancelled:g,onBeforeAppear:y,onAppear:v,onAfterAppear:E,onAppearCancelled:I}=e,T=String(t.key),x=Gm(n,t),$=(W,ie)=>{W&&Dt(W,r,9,ie)},M=(W,ie)=>{const ue=ie[1];$(W,ie),Q(W)?W.every(Me=>Me.length<=1)&&ue():W.length<=1&&ue()},ae={mode:i,persisted:o,beforeEnter(W){let ie=a;if(!n.isMounted)if(s)ie=y||a;else return;W[Dn]&&W[Dn](!0);const ue=x[T];ue&&gr(t,ue)&&ue.el[Dn]&&ue.el[Dn](),$(ie,[W])},enter(W){let ie=l,ue=c,Me=u;if(!n.isMounted)if(s)ie=v||l,ue=E||c,Me=I||u;else return;let q=!1;const ge=W[Eo]=qe=>{q||(q=!0,qe?$(Me,[W]):$(ue,[W]),ae.delayedLeave&&ae.delayedLeave(),W[Eo]=void 0)};ie?M(ie,[W,ge]):ge()},leave(W,ie){const ue=String(t.key);if(W[Eo]&&W[Eo](!0),n.isUnmounting)return ie();$(h,[W]);let Me=!1;const q=W[Dn]=ge=>{Me||(Me=!0,ie(),ge?$(g,[W]):$(f,[W]),W[Dn]=void 0,x[ue]===t&&delete x[ue])};x[ue]=t,d?M(d,[W,q]):q()},clone(W){return _c(W,e,n,r)}};return ae}function Sl(t){if(ka(t))return t=Yn(t),t.children=null,t}function kd(t){return ka(t)?t.children?t.children[0]:void 0:t}function yc(t,e){t.shapeFlag&6&&t.component?yc(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Qm(t,e=!1,n){let r=[],s=0;for(let i=0;i<t.length;i++){let o=t[i];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===Ge?(o.patchFlag&128&&s++,r=r.concat(Qm(o.children,e,a))):(e||o.type!==Ft)&&r.push(a!=null?Yn(o,{key:a}):o)}if(s>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}/*! #__NO_SIDE_EFFECTS__ */function Du(t,e){return se(t)?ze({name:t.name},e,{setup:t}):t}const Vo=t=>!!t.type.__asyncLoader,ka=t=>t.type.__isKeepAlive;function qE(t,e){Ym(t,"a",e)}function HE(t,e){Ym(t,"da",e)}function Ym(t,e,n=tt){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(Da(e,r,n),n){let s=n.parent;for(;s&&s.parent;)ka(s.parent.vnode)&&zE(r,e,n,s),s=s.parent}}function zE(t,e,n,r){const s=Da(e,t,r,!0);An(()=>{Tu(r[e],s)},n)}function Da(t,e,n=tt,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;nr();const a=Ui(n),l=Dt(e,n,t,o);return a(),rr(),l});return r?s.unshift(i):s.push(i),i}}const In=t=>(e,n=tt)=>(!Ma||t==="sp")&&Da(t,(...r)=>e(...r),n),KE=In("bm"),St=In("m"),WE=In("bu"),Jm=In("u"),Xm=In("bum"),An=In("um"),GE=In("sp"),QE=In("rtg"),YE=In("rtc");function JE(t,e=tt){Da("ec",t,e)}function Qn(t,e,n,r){let s;const i=n&&n[r];if(Q(t)||Be(t)){s=new Array(t.length);for(let o=0,a=t.length;o<a;o++)s[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){s=new Array(t);for(let o=0;o<t;o++)s[o]=e(o+1,o,void 0,i&&i[o])}else if(Ce(t))if(t[Symbol.iterator])s=Array.from(t,(o,a)=>e(o,a,void 0,i&&i[a]));else{const o=Object.keys(t);s=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];s[a]=e(t[c],c,a,i&&i[a])}}else s=[];return n&&(n[r]=s),s}const vc=t=>t?dg(t)?La(t)||t.proxy:vc(t.parent):null,Gs=ze(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>vc(t.parent),$root:t=>vc(t.root),$emit:t=>t.emit,$options:t=>Vu(t),$forceUpdate:t=>t.f||(t.f=()=>{t.effect.dirty=!0,ku(t.update)}),$nextTick:t=>t.n||(t.n=Lm.bind(t.proxy)),$watch:t=>UE.bind(t)}),Cl=(t,e)=>t!==be&&!t.__isScriptSetup&&fe(t,e),XE={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const f=o[e];if(f!==void 0)switch(f){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(Cl(r,e))return o[e]=1,r[e];if(s!==be&&fe(s,e))return o[e]=2,s[e];if((c=t.propsOptions[0])&&fe(c,e))return o[e]=3,i[e];if(n!==be&&fe(n,e))return o[e]=4,n[e];Ec&&(o[e]=0)}}const u=Gs[e];let h,d;if(u)return e==="$attrs"&&wt(t,"get",e),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==be&&fe(n,e))return o[e]=4,n[e];if(d=l.config.globalProperties,fe(d,e))return d[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return Cl(s,e)?(s[e]=n,!0):r!==be&&fe(r,e)?(r[e]=n,!0):fe(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||t!==be&&fe(t,o)||Cl(e,o)||(a=i[0])&&fe(a,o)||fe(r,o)||fe(Gs,o)||fe(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:fe(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function ZE(){return eT().slots}function eT(){const t=Na();return t.setupContext||(t.setupContext=pg(t))}function Dd(t){return Q(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Ec=!0;function tT(t){const e=Vu(t),n=t.proxy,r=t.ctx;Ec=!1,e.beforeCreate&&Vd(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:h,mounted:d,beforeUpdate:f,updated:g,activated:y,deactivated:v,beforeDestroy:E,beforeUnmount:I,destroyed:T,unmounted:x,render:$,renderTracked:M,renderTriggered:ae,errorCaptured:W,serverPrefetch:ie,expose:ue,inheritAttrs:Me,components:q,directives:ge,filters:qe}=e;if(c&&nT(c,r,null),o)for(const we in o){const ye=o[we];se(ye)&&(r[we]=ye.bind(n))}if(s){const we=s.call(n,n);Ce(we)&&(t.data=sr(we))}if(Ec=!0,i)for(const we in i){const ye=i[we],cn=se(ye)?ye.bind(n,n):se(ye.get)?ye.get.bind(n,n):kt,Rn=!se(ye)&&se(ye.set)?ye.set.bind(n):kt,qt=Ve({get:cn,set:Rn});Object.defineProperty(r,we,{enumerable:!0,configurable:!0,get:()=>qt.value,set:yt=>qt.value=yt})}if(a)for(const we in a)Zm(a[we],r,n,we);if(l){const we=se(l)?l.call(n):l;Reflect.ownKeys(we).forEach(ye=>{No(ye,we[ye])})}u&&Vd(u,t,"c");function Le(we,ye){Q(ye)?ye.forEach(cn=>we(cn.bind(n))):ye&&we(ye.bind(n))}if(Le(KE,h),Le(St,d),Le(WE,f),Le(Jm,g),Le(qE,y),Le(HE,v),Le(JE,W),Le(YE,M),Le(QE,ae),Le(Xm,I),Le(An,x),Le(GE,ie),Q(ue))if(ue.length){const we=t.exposed||(t.exposed={});ue.forEach(ye=>{Object.defineProperty(we,ye,{get:()=>n[ye],set:cn=>n[ye]=cn})})}else t.exposed||(t.exposed={});$&&t.render===kt&&(t.render=$),Me!=null&&(t.inheritAttrs=Me),q&&(t.components=q),ge&&(t.directives=ge)}function nT(t,e,n=kt){Q(t)&&(t=Tc(t));for(const r in t){const s=t[r];let i;Ce(s)?"default"in s?i=Lt(s.from||r,s.default,!0):i=Lt(s.from||r):i=Lt(s),It(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function Vd(t,e,n){Dt(Q(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function Zm(t,e,n,r){const s=r.includes(".")?Km(n,r):()=>n[r];if(Be(t)){const i=e[t];se(i)&&ut(s,i)}else if(se(t))ut(s,t.bind(n));else if(Ce(t))if(Q(t))t.forEach(i=>Zm(i,e,n,r));else{const i=se(t.handler)?t.handler.bind(n):e[t.handler];se(i)&&ut(s,i,t)}}function Vu(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let l;return a?l=a:!s.length&&!n&&!r?l=e:(l={},s.length&&s.forEach(c=>Jo(l,c,o,!0)),Jo(l,e,o)),Ce(e)&&i.set(e,l),l}function Jo(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&Jo(t,i,n,!0),s&&s.forEach(o=>Jo(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=rT[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const rT={data:Nd,props:Md,emits:Md,methods:Us,computed:Us,beforeCreate:pt,created:pt,beforeMount:pt,mounted:pt,beforeUpdate:pt,updated:pt,beforeDestroy:pt,beforeUnmount:pt,destroyed:pt,unmounted:pt,activated:pt,deactivated:pt,errorCaptured:pt,serverPrefetch:pt,components:Us,directives:Us,watch:iT,provide:Nd,inject:sT};function Nd(t,e){return e?t?function(){return ze(se(t)?t.call(this,this):t,se(e)?e.call(this,this):e)}:e:t}function sT(t,e){return Us(Tc(t),Tc(e))}function Tc(t){if(Q(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function pt(t,e){return t?[...new Set([].concat(t,e))]:e}function Us(t,e){return t?ze(Object.create(null),t,e):e}function Md(t,e){return t?Q(t)&&Q(e)?[...new Set([...t,...e])]:ze(Object.create(null),Dd(t),Dd(e??{})):e}function iT(t,e){if(!t)return e;if(!e)return t;const n=ze(Object.create(null),t);for(const r in e)n[r]=pt(t[r],e[r]);return n}function eg(){return{app:null,config:{isNativeTag:V0,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let oT=0;function aT(t,e){return function(r,s=null){se(r)||(r=ze({},r)),s!=null&&!Ce(s)&&(s=null);const i=eg(),o=new WeakSet;let a=!1;const l=i.app={_uid:oT++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:xT,get config(){return i.config},set config(c){},use(c,...u){return o.has(c)||(c&&se(c.install)?(o.add(c),c.install(l,...u)):se(c)&&(o.add(c),c(l,...u))),l},mixin(c){return i.mixins.includes(c)||i.mixins.push(c),l},component(c,u){return u?(i.components[c]=u,l):i.components[c]},directive(c,u){return u?(i.directives[c]=u,l):i.directives[c]},mount(c,u,h){if(!a){const d=Oe(r,s);return d.appContext=i,h===!0?h="svg":h===!1&&(h=void 0),u&&e?e(d,c):t(d,c,h),a=!0,l._container=c,c.__vue_app__=l,La(d.component)||d.component.proxy}},unmount(){a&&(t(null,l._container),delete l._container.__vue_app__)},provide(c,u){return i.provides[c]=u,l},runWithContext(c){const u=Qs;Qs=l;try{return c()}finally{Qs=u}}};return l}}let Qs=null;function No(t,e){if(tt){let n=tt.provides;const r=tt.parent&&tt.parent.provides;r===n&&(n=tt.provides=Object.create(r)),n[t]=e}}function Lt(t,e,n=!1){const r=tt||mt;if(r||Qs){const s=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:Qs._context.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&se(e)?e.call(r&&r.proxy):e}}const tg={};function lT(t,e,n,r=!1){const s={},i=Object.create(tg);t.propsDefaults=Object.create(null),ng(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:Pm(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function cT(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,a=me(s),[l]=t.propsOptions;let c=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let d=u[h];if(Oa(t.emitsOptions,d))continue;const f=e[d];if(l)if(fe(i,d))f!==i[d]&&(i[d]=f,c=!0);else{const g=rn(d);s[g]=wc(l,a,g,f,t,!1)}else f!==i[d]&&(i[d]=f,c=!0)}}}else{ng(t,e,s,i)&&(c=!0);let u;for(const h in a)(!e||!fe(e,h)&&((u=Mr(h))===h||!fe(e,u)))&&(l?n&&(n[h]!==void 0||n[u]!==void 0)&&(s[h]=wc(l,a,h,void 0,t,!0)):delete s[h]);if(i!==a)for(const h in i)(!e||!fe(e,h))&&(delete i[h],c=!0)}c&&gn(t.attrs,"set","")}function ng(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(Ks(l))continue;const c=e[l];let u;s&&fe(s,u=rn(l))?!i||!i.includes(u)?n[u]=c:(a||(a={}))[u]=c:Oa(t.emitsOptions,l)||(!(l in r)||c!==r[l])&&(r[l]=c,o=!0)}if(i){const l=me(n),c=a||be;for(let u=0;u<i.length;u++){const h=i[u];n[h]=wc(s,l,h,c[h],t,!fe(c,h))}}return o}function wc(t,e,n,r,s,i){const o=t[n];if(o!=null){const a=fe(o,"default");if(a&&r===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&se(l)){const{propsDefaults:c}=s;if(n in c)r=c[n];else{const u=Ui(s);r=c[n]=l.call(null,e),u()}}else r=l}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===Mr(n))&&(r=!0))}return r}function rg(t,e,n=!1){const r=e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},a=[];let l=!1;if(!se(t)){const u=h=>{l=!0;const[d,f]=rg(h,e,!0);ze(o,d),f&&a.push(...f)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!l)return Ce(t)&&r.set(t,Xr),Xr;if(Q(i))for(let u=0;u<i.length;u++){const h=rn(i[u]);Ld(h)&&(o[h]=be)}else if(i)for(const u in i){const h=rn(u);if(Ld(h)){const d=i[u],f=o[h]=Q(d)||se(d)?{type:d}:ze({},d);if(f){const g=$d(Boolean,f.type),y=$d(String,f.type);f[0]=g>-1,f[1]=y<0||g<y,(g>-1||fe(f,"default"))&&a.push(h)}}}const c=[o,a];return Ce(t)&&r.set(t,c),c}function Ld(t){return t[0]!=="$"&&!Ks(t)}function Fd(t){return t===null?"null":typeof t=="function"?t.name||"":typeof t=="object"&&t.constructor&&t.constructor.name||""}function Ud(t,e){return Fd(t)===Fd(e)}function $d(t,e){return Q(e)?e.findIndex(n=>Ud(n,t)):se(e)&&Ud(e,t)?0:-1}const sg=t=>t[0]==="_"||t==="$stable",Nu=t=>Q(t)?t.map(Wt):[Wt(t)],uT=(t,e,n)=>{if(e._n)return e;const r=ts((...s)=>Nu(e(...s)),n);return r._c=!1,r},ig=(t,e,n)=>{const r=t._ctx;for(const s in t){if(sg(s))continue;const i=t[s];if(se(i))e[s]=uT(s,i,r);else if(i!=null){const o=Nu(i);e[s]=()=>o}}},og=(t,e)=>{const n=Nu(e);t.slots.default=()=>n},hT=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=me(e),fm(t.slots,"_",n)):ig(e,t.slots={})}else t.slots={},e&&og(t,e)},dT=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=be;if(r.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(ze(s,e),!n&&a===1&&delete s._):(i=!e.$stable,ig(e,s)),o=e}else e&&(og(t,e),o={default:1});if(i)for(const a in s)!sg(a)&&o[a]==null&&delete s[a]};function Ic(t,e,n,r,s=!1){if(Q(t)){t.forEach((d,f)=>Ic(d,e&&(Q(e)?e[f]:e),n,r,s));return}if(Vo(r)&&!s)return;const i=r.shapeFlag&4?La(r.component)||r.component.proxy:r.el,o=s?null:i,{i:a,r:l}=t,c=e&&e.r,u=a.refs===be?a.refs={}:a.refs,h=a.setupState;if(c!=null&&c!==l&&(Be(c)?(u[c]=null,fe(h,c)&&(h[c]=null)):It(c)&&(c.value=null)),se(l))qn(l,a,12,[o,u]);else{const d=Be(l),f=It(l);if(d||f){const g=()=>{if(t.f){const y=d?fe(h,l)?h[l]:u[l]:l.value;s?Q(y)&&Tu(y,i):Q(y)?y.includes(i)||y.push(i):d?(u[l]=[i],fe(h,l)&&(h[l]=u[l])):(l.value=[i],t.k&&(u[t.k]=l.value))}else d?(u[l]=o,fe(h,l)&&(h[l]=o)):f&&(l.value=o,t.k&&(u[t.k]=o))};o?(g.id=-1,vt(g,n)):g()}}}const vt=ME;function fT(t){return pT(t)}function pT(t,e){const n=pm();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:d,setScopeId:f=kt,insertStaticContent:g}=t,y=(p,m,_,R=null,w=null,k=null,F=void 0,O=null,D=!!m.dynamicChildren)=>{if(p===m)return;p&&!gr(p,m)&&(R=b(p),yt(p,w,k,!0),p=null),m.patchFlag===-2&&(D=!1,m.dynamicChildren=null);const{type:C,ref:j,shapeFlag:G}=m;switch(C){case Va:v(p,m,_,R);break;case Ft:E(p,m,_,R);break;case xl:p==null&&I(m,_,R,F);break;case Ge:q(p,m,_,R,w,k,F,O,D);break;default:G&1?$(p,m,_,R,w,k,F,O,D):G&6?ge(p,m,_,R,w,k,F,O,D):(G&64||G&128)&&C.process(p,m,_,R,w,k,F,O,D,H)}j!=null&&w&&Ic(j,p&&p.ref,k,m||p,!m)},v=(p,m,_,R)=>{if(p==null)r(m.el=a(m.children),_,R);else{const w=m.el=p.el;m.children!==p.children&&c(w,m.children)}},E=(p,m,_,R)=>{p==null?r(m.el=l(m.children||""),_,R):m.el=p.el},I=(p,m,_,R)=>{[p.el,p.anchor]=g(p.children,m,_,R,p.el,p.anchor)},T=({el:p,anchor:m},_,R)=>{let w;for(;p&&p!==m;)w=d(p),r(p,_,R),p=w;r(m,_,R)},x=({el:p,anchor:m})=>{let _;for(;p&&p!==m;)_=d(p),s(p),p=_;s(m)},$=(p,m,_,R,w,k,F,O,D)=>{m.type==="svg"?F="svg":m.type==="math"&&(F="mathml"),p==null?M(m,_,R,w,k,F,O,D):ie(p,m,w,k,F,O,D)},M=(p,m,_,R,w,k,F,O)=>{let D,C;const{props:j,shapeFlag:G,transition:z,dirs:Z}=p;if(D=p.el=o(p.type,k,j&&j.is,j),G&8?u(D,p.children):G&16&&W(p.children,D,null,R,w,Pl(p,k),F,O),Z&&lr(p,null,R,"created"),ae(D,p,p.scopeId,F,R),j){for(const Ie in j)Ie!=="value"&&!Ks(Ie)&&i(D,Ie,null,j[Ie],k,p.children,R,w,it);"value"in j&&i(D,"value",null,j.value,k),(C=j.onVnodeBeforeMount)&&zt(C,R,p)}Z&&lr(p,null,R,"beforeMount");const le=mT(w,z);le&&z.beforeEnter(D),r(D,m,_),((C=j&&j.onVnodeMounted)||le||Z)&&vt(()=>{C&&zt(C,R,p),le&&z.enter(D),Z&&lr(p,null,R,"mounted")},w)},ae=(p,m,_,R,w)=>{if(_&&f(p,_),R)for(let k=0;k<R.length;k++)f(p,R[k]);if(w){let k=w.subTree;if(m===k){const F=w.vnode;ae(p,F,F.scopeId,F.slotScopeIds,w.parent)}}},W=(p,m,_,R,w,k,F,O,D=0)=>{for(let C=D;C<p.length;C++){const j=p[C]=O?Vn(p[C]):Wt(p[C]);y(null,j,m,_,R,w,k,F,O)}},ie=(p,m,_,R,w,k,F)=>{const O=m.el=p.el;let{patchFlag:D,dynamicChildren:C,dirs:j}=m;D|=p.patchFlag&16;const G=p.props||be,z=m.props||be;let Z;if(_&&cr(_,!1),(Z=z.onVnodeBeforeUpdate)&&zt(Z,_,m,p),j&&lr(m,p,_,"beforeUpdate"),_&&cr(_,!0),C?ue(p.dynamicChildren,C,O,_,R,Pl(m,w),k):F||ye(p,m,O,null,_,R,Pl(m,w),k,!1),D>0){if(D&16)Me(O,m,G,z,_,R,w);else if(D&2&&G.class!==z.class&&i(O,"class",null,z.class,w),D&4&&i(O,"style",G.style,z.style,w),D&8){const le=m.dynamicProps;for(let Ie=0;Ie<le.length;Ie++){const xe=le[Ie],Ke=G[xe],Vt=z[xe];(Vt!==Ke||xe==="value")&&i(O,xe,Ke,Vt,w,p.children,_,R,it)}}D&1&&p.children!==m.children&&u(O,m.children)}else!F&&C==null&&Me(O,m,G,z,_,R,w);((Z=z.onVnodeUpdated)||j)&&vt(()=>{Z&&zt(Z,_,m,p),j&&lr(m,p,_,"updated")},R)},ue=(p,m,_,R,w,k,F)=>{for(let O=0;O<m.length;O++){const D=p[O],C=m[O],j=D.el&&(D.type===Ge||!gr(D,C)||D.shapeFlag&70)?h(D.el):_;y(D,C,j,null,R,w,k,F,!0)}},Me=(p,m,_,R,w,k,F)=>{if(_!==R){if(_!==be)for(const O in _)!Ks(O)&&!(O in R)&&i(p,O,_[O],null,F,m.children,w,k,it);for(const O in R){if(Ks(O))continue;const D=R[O],C=_[O];D!==C&&O!=="value"&&i(p,O,C,D,F,m.children,w,k,it)}"value"in R&&i(p,"value",_.value,R.value,F)}},q=(p,m,_,R,w,k,F,O,D)=>{const C=m.el=p?p.el:a(""),j=m.anchor=p?p.anchor:a("");let{patchFlag:G,dynamicChildren:z,slotScopeIds:Z}=m;Z&&(O=O?O.concat(Z):Z),p==null?(r(C,_,R),r(j,_,R),W(m.children||[],_,j,w,k,F,O,D)):G>0&&G&64&&z&&p.dynamicChildren?(ue(p.dynamicChildren,z,_,w,k,F,O),(m.key!=null||w&&m===w.subTree)&&ag(p,m,!0)):ye(p,m,_,j,w,k,F,O,D)},ge=(p,m,_,R,w,k,F,O,D)=>{m.slotScopeIds=O,p==null?m.shapeFlag&512?w.ctx.activate(m,_,R,F,D):qe(m,_,R,w,k,F,D):Pt(p,m,D)},qe=(p,m,_,R,w,k,F)=>{const O=p.component=AT(p,R,w);if(ka(p)&&(O.ctx.renderer=H),bT(O),O.asyncDep){if(w&&w.registerDep(O,Le),!p.el){const D=O.subTree=Oe(Ft);E(null,D,m,_)}}else Le(O,p,m,_,w,k,F)},Pt=(p,m,_)=>{const R=m.component=p.component;if(PE(p,m,_))if(R.asyncDep&&!R.asyncResolved){we(R,m,_);return}else R.next=m,IE(R.update),R.effect.dirty=!0,R.update();else m.el=p.el,R.vnode=m},Le=(p,m,_,R,w,k,F)=>{const O=()=>{if(p.isMounted){let{next:j,bu:G,u:z,parent:Z,vnode:le}=p;{const qr=lg(p);if(qr){j&&(j.el=le.el,we(p,j,F)),qr.asyncDep.then(()=>{p.isUnmounted||O()});return}}let Ie=j,xe;cr(p,!1),j?(j.el=le.el,we(p,j,F)):j=le,G&&ko(G),(xe=j.props&&j.props.onVnodeBeforeUpdate)&&zt(xe,Z,j,le),cr(p,!0);const Ke=Rl(p),Vt=p.subTree;p.subTree=Ke,y(Vt,Ke,h(Vt.el),b(Vt),p,w,k),j.el=Ke.el,Ie===null&&xE(p,Ke.el),z&&vt(z,w),(xe=j.props&&j.props.onVnodeUpdated)&&vt(()=>zt(xe,Z,j,le),w)}else{let j;const{el:G,props:z}=m,{bm:Z,m:le,parent:Ie}=p,xe=Vo(m);if(cr(p,!1),Z&&ko(Z),!xe&&(j=z&&z.onVnodeBeforeMount)&&zt(j,Ie,m),cr(p,!0),G&&Pe){const Ke=()=>{p.subTree=Rl(p),Pe(G,p.subTree,p,w,null)};xe?m.type.__asyncLoader().then(()=>!p.isUnmounted&&Ke()):Ke()}else{const Ke=p.subTree=Rl(p);y(null,Ke,_,R,p,w,k),m.el=Ke.el}if(le&&vt(le,w),!xe&&(j=z&&z.onVnodeMounted)){const Ke=m;vt(()=>zt(j,Ie,Ke),w)}(m.shapeFlag&256||Ie&&Vo(Ie.vnode)&&Ie.vnode.shapeFlag&256)&&p.a&&vt(p.a,w),p.isMounted=!0,m=_=R=null}},D=p.effect=new Au(O,kt,()=>ku(C),p.scope),C=p.update=()=>{D.dirty&&D.run()};C.id=p.uid,cr(p,!0),C()},we=(p,m,_)=>{m.component=p;const R=p.vnode.props;p.vnode=m,p.next=null,cT(p,m.props,R,_),dT(p,m.children,_),nr(),Pd(p),rr()},ye=(p,m,_,R,w,k,F,O,D=!1)=>{const C=p&&p.children,j=p?p.shapeFlag:0,G=m.children,{patchFlag:z,shapeFlag:Z}=m;if(z>0){if(z&128){Rn(C,G,_,R,w,k,F,O,D);return}else if(z&256){cn(C,G,_,R,w,k,F,O,D);return}}Z&8?(j&16&&it(C,w,k),G!==C&&u(_,G)):j&16?Z&16?Rn(C,G,_,R,w,k,F,O,D):it(C,w,k,!0):(j&8&&u(_,""),Z&16&&W(G,_,R,w,k,F,O,D))},cn=(p,m,_,R,w,k,F,O,D)=>{p=p||Xr,m=m||Xr;const C=p.length,j=m.length,G=Math.min(C,j);let z;for(z=0;z<G;z++){const Z=m[z]=D?Vn(m[z]):Wt(m[z]);y(p[z],Z,_,null,w,k,F,O,D)}C>j?it(p,w,k,!0,!1,G):W(m,_,R,w,k,F,O,D,G)},Rn=(p,m,_,R,w,k,F,O,D)=>{let C=0;const j=m.length;let G=p.length-1,z=j-1;for(;C<=G&&C<=z;){const Z=p[C],le=m[C]=D?Vn(m[C]):Wt(m[C]);if(gr(Z,le))y(Z,le,_,null,w,k,F,O,D);else break;C++}for(;C<=G&&C<=z;){const Z=p[G],le=m[z]=D?Vn(m[z]):Wt(m[z]);if(gr(Z,le))y(Z,le,_,null,w,k,F,O,D);else break;G--,z--}if(C>G){if(C<=z){const Z=z+1,le=Z<j?m[Z].el:R;for(;C<=z;)y(null,m[C]=D?Vn(m[C]):Wt(m[C]),_,le,w,k,F,O,D),C++}}else if(C>z)for(;C<=G;)yt(p[C],w,k,!0),C++;else{const Z=C,le=C,Ie=new Map;for(C=le;C<=z;C++){const At=m[C]=D?Vn(m[C]):Wt(m[C]);At.key!=null&&Ie.set(At.key,C)}let xe,Ke=0;const Vt=z-le+1;let qr=!1,yd=0;const Ds=new Array(Vt);for(C=0;C<Vt;C++)Ds[C]=0;for(C=Z;C<=G;C++){const At=p[C];if(Ke>=Vt){yt(At,w,k,!0);continue}let Ht;if(At.key!=null)Ht=Ie.get(At.key);else for(xe=le;xe<=z;xe++)if(Ds[xe-le]===0&&gr(At,m[xe])){Ht=xe;break}Ht===void 0?yt(At,w,k,!0):(Ds[Ht-le]=C+1,Ht>=yd?yd=Ht:qr=!0,y(At,m[Ht],_,null,w,k,F,O,D),Ke++)}const vd=qr?gT(Ds):Xr;for(xe=vd.length-1,C=Vt-1;C>=0;C--){const At=le+C,Ht=m[At],Ed=At+1<j?m[At+1].el:R;Ds[C]===0?y(null,Ht,_,Ed,w,k,F,O,D):qr&&(xe<0||C!==vd[xe]?qt(Ht,_,Ed,2):xe--)}}},qt=(p,m,_,R,w=null)=>{const{el:k,type:F,transition:O,children:D,shapeFlag:C}=p;if(C&6){qt(p.component.subTree,m,_,R);return}if(C&128){p.suspense.move(m,_,R);return}if(C&64){F.move(p,m,_,H);return}if(F===Ge){r(k,m,_);for(let G=0;G<D.length;G++)qt(D[G],m,_,R);r(p.anchor,m,_);return}if(F===xl){T(p,m,_);return}if(R!==2&&C&1&&O)if(R===0)O.beforeEnter(k),r(k,m,_),vt(()=>O.enter(k),w);else{const{leave:G,delayLeave:z,afterLeave:Z}=O,le=()=>r(k,m,_),Ie=()=>{G(k,()=>{le(),Z&&Z()})};z?z(k,le,Ie):Ie()}else r(k,m,_)},yt=(p,m,_,R=!1,w=!1)=>{const{type:k,props:F,ref:O,children:D,dynamicChildren:C,shapeFlag:j,patchFlag:G,dirs:z}=p;if(O!=null&&Ic(O,null,_,p,!0),j&256){m.ctx.deactivate(p);return}const Z=j&1&&z,le=!Vo(p);let Ie;if(le&&(Ie=F&&F.onVnodeBeforeUnmount)&&zt(Ie,m,p),j&6)fo(p.component,_,R);else{if(j&128){p.suspense.unmount(_,R);return}Z&&lr(p,null,m,"beforeUnmount"),j&64?p.type.remove(p,m,_,w,H,R):C&&(k!==Ge||G>0&&G&64)?it(C,m,_,!1,!0):(k===Ge&&G&384||!w&&j&16)&&it(D,m,_),R&&Br(p)}(le&&(Ie=F&&F.onVnodeUnmounted)||Z)&&vt(()=>{Ie&&zt(Ie,m,p),Z&&lr(p,null,m,"unmounted")},_)},Br=p=>{const{type:m,el:_,anchor:R,transition:w}=p;if(m===Ge){jr(_,R);return}if(m===xl){x(p);return}const k=()=>{s(_),w&&!w.persisted&&w.afterLeave&&w.afterLeave()};if(p.shapeFlag&1&&w&&!w.persisted){const{leave:F,delayLeave:O}=w,D=()=>F(_,k);O?O(p.el,k,D):D()}else k()},jr=(p,m)=>{let _;for(;p!==m;)_=d(p),s(p),p=_;s(m)},fo=(p,m,_)=>{const{bum:R,scope:w,update:k,subTree:F,um:O}=p;R&&ko(R),w.stop(),k&&(k.active=!1,yt(F,p,m,_)),O&&vt(O,m),vt(()=>{p.isUnmounted=!0},m),m&&m.pendingBranch&&!m.isUnmounted&&p.asyncDep&&!p.asyncResolved&&p.suspenseId===m.pendingId&&(m.deps--,m.deps===0&&m.resolve())},it=(p,m,_,R=!1,w=!1,k=0)=>{for(let F=k;F<p.length;F++)yt(p[F],m,_,R,w)},b=p=>p.shapeFlag&6?b(p.component.subTree):p.shapeFlag&128?p.suspense.next():d(p.anchor||p.el);let B=!1;const L=(p,m,_)=>{p==null?m._vnode&&yt(m._vnode,null,null,!0):y(m._vnode||null,p,m,null,null,null,_),B||(B=!0,Pd(),Um(),B=!1),m._vnode=p},H={p:y,um:yt,m:qt,r:Br,mt:qe,mc:W,pc:ye,pbc:ue,n:b,o:t};let ve,Pe;return e&&([ve,Pe]=e(H)),{render:L,hydrate:ve,createApp:aT(L,ve)}}function Pl({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function cr({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function mT(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function ag(t,e,n=!1){const r=t.children,s=e.children;if(Q(r)&&Q(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=Vn(s[i]),a.el=o.el),n||ag(o,a)),a.type===Va&&(a.el=o.el)}}function gT(t){const e=t.slice(),n=[0];let r,s,i,o,a;const l=t.length;for(r=0;r<l;r++){const c=t[r];if(c!==0){if(s=n[n.length-1],t[s]<c){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<c?i=a+1:o=a;c<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function lg(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:lg(e)}const _T=t=>t.__isTeleport,Ge=Symbol.for("v-fgt"),Va=Symbol.for("v-txt"),Ft=Symbol.for("v-cmt"),xl=Symbol.for("v-stc"),Ys=[];let Mt=null;function te(t=!1){Ys.push(Mt=t?null:[])}function yT(){Ys.pop(),Mt=Ys[Ys.length-1]||null}let pi=1;function Bd(t){pi+=t}function cg(t){return t.dynamicChildren=pi>0?Mt||Xr:null,yT(),pi>0&&Mt&&Mt.push(t),t}function re(t,e,n,r,s,i){return cg(P(t,e,n,r,s,i,!0))}function ug(t,e,n,r,s){return cg(Oe(t,e,n,r,s,!0))}function Ac(t){return t?t.__v_isVNode===!0:!1}function gr(t,e){return t.type===e.type&&t.key===e.key}const hg=({key:t})=>t??null,Mo=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Be(t)||It(t)||se(t)?{i:mt,r:t,k:e,f:!!n}:t:null);function P(t,e=null,n=null,r=0,s=null,i=t===Ge?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&hg(e),ref:e&&Mo(e),scopeId:jm,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:mt};return a?(Lu(l,n),i&128&&t.normalize(l)):n&&(l.shapeFlag|=Be(n)?8:16),pi>0&&!o&&Mt&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&Mt.push(l),l}const Oe=vT;function vT(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===DE)&&(t=Ft),Ac(t)){const a=Yn(t,e,!0);return n&&Lu(a,n),pi>0&&!i&&Mt&&(a.shapeFlag&6?Mt[Mt.indexOf(t)]=a:Mt.push(a)),a.patchFlag|=-2,a}if(PT(t)&&(t=t.__vccOpts),e){e=ET(e);let{class:a,style:l}=e;a&&!Be(a)&&(e.class=Iu(a)),Ce(l)&&(Om(l)&&!Q(l)&&(l=ze({},l)),e.style=Ca(l))}const o=Be(t)?1:NE(t)?128:_T(t)?64:Ce(t)?4:se(t)?2:0;return P(t,e,n,r,s,o,i,!0)}function ET(t){return t?Om(t)||Object.getPrototypeOf(t)===tg?ze({},t):t:null}function Yn(t,e,n=!1){const{props:r,ref:s,patchFlag:i,children:o}=t,a=e?TT(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&hg(a),ref:e&&e.ref?n&&s?Q(s)?s.concat(Mo(e)):[s,Mo(e)]:Mo(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Ge?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Yn(t.ssContent),ssFallback:t.ssFallback&&Yn(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function Mu(t=" ",e=0){return Oe(Va,null,t,e)}function Jn(t="",e=!1){return e?(te(),ug(Ft,null,t)):Oe(Ft,null,t)}function Wt(t){return t==null||typeof t=="boolean"?Oe(Ft):Q(t)?Oe(Ge,null,t.slice()):typeof t=="object"?Vn(t):Oe(Va,null,String(t))}function Vn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Yn(t)}function Lu(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(Q(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),Lu(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;s?s===3&&mt&&(mt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024)):e._ctx=mt}else se(e)?(e={default:e,_ctx:mt},n=32):(e=String(e),r&64?(n=16,e=[Mu(e)]):n=8);t.children=e,t.shapeFlag|=n}function TT(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=Iu([e.class,r.class]));else if(s==="style")e.style=Ca([e.style,r.style]);else if(Aa(s)){const i=e[s],o=r[s];o&&i!==o&&!(Q(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function zt(t,e,n,r=null){Dt(t,e,7,[n,r])}const wT=eg();let IT=0;function AT(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||wT,i={uid:IT++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new G0(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:rg(r,s),emitsOptions:Bm(r,s),emit:null,emitted:null,propsDefaults:be,inheritAttrs:r.inheritAttrs,ctx:be,data:be,props:be,attrs:be,slots:be,refs:be,setupState:be,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=RE.bind(null,i),t.ce&&t.ce(i),i}let tt=null;const Na=()=>tt||mt;let Xo,bc;{const t=pm(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};Xo=e("__VUE_INSTANCE_SETTERS__",n=>tt=n),bc=e("__VUE_SSR_SETTERS__",n=>Ma=n)}const Ui=t=>{const e=tt;return Xo(t),t.scope.on(),()=>{t.scope.off(),Xo(e)}},jd=()=>{tt&&tt.scope.off(),Xo(null)};function dg(t){return t.vnode.shapeFlag&4}let Ma=!1;function bT(t,e=!1){e&&bc(e);const{props:n,children:r}=t.vnode,s=dg(t);lT(t,n,s,e),hT(t,r);const i=s?RT(t,e):void 0;return e&&bc(!1),i}function RT(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,XE);const{setup:r}=n;if(r){const s=t.setupContext=r.length>1?pg(t):null,i=Ui(t);nr();const o=qn(r,t,0,[t.props,s]);if(rr(),i(),um(o)){if(o.then(jd,jd),e)return o.then(a=>{qd(t,a,e)}).catch(a=>{xa(a,t,0)});t.asyncDep=o}else qd(t,o,e)}else fg(t,e)}function qd(t,e,n){se(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Ce(e)&&(t.setupState=Nm(e)),fg(t,n)}let Hd;function fg(t,e,n){const r=t.type;if(!t.render){if(!e&&Hd&&!r.render){const s=r.template||Vu(t).template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:l}=r,c=ze(ze({isCustomElement:i,delimiters:a},o),l);r.render=Hd(s,c)}}t.render=r.render||kt}{const s=Ui(t);nr();try{tT(t)}finally{rr(),s()}}}const ST={get(t,e){return wt(t,"get",""),t[e]}};function pg(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,ST),slots:t.slots,emit:t.emit,expose:e}}function La(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Nm(gE(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Gs)return Gs[n](t)},has(e,n){return n in e||n in Gs}}))}function CT(t,e=!0){return se(t)?t.displayName||t.name:t.name||e&&t.__name}function PT(t){return se(t)&&"__vccOpts"in t}const Ve=(t,e)=>_E(t,e,Ma);function mi(t,e,n){const r=arguments.length;return r===2?Ce(e)&&!Q(e)?Ac(e)?Oe(t,null,[e]):Oe(t,e):Oe(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Ac(n)&&(n=[n]),Oe(t,e,n))}const xT="3.4.22";/**
* @vue/runtime-dom v3.4.22
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const OT="http://www.w3.org/2000/svg",kT="http://www.w3.org/1998/Math/MathML",Nn=typeof document<"u"?document:null,zd=Nn&&Nn.createElement("template"),DT={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?Nn.createElementNS(OT,t):e==="mathml"?Nn.createElementNS(kT,t):Nn.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>Nn.createTextNode(t),createComment:t=>Nn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Nn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{zd.innerHTML=r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t;const a=zd.content;if(r==="svg"||r==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},Cn="transition",Vs="animation",gi=Symbol("_vtc"),Fu=(t,{slots:e})=>mi(jE,VT(t),e);Fu.displayName="Transition";const mg={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};Fu.props=ze({},Wm,mg);const ur=(t,e=[])=>{Q(t)?t.forEach(n=>n(...e)):t&&t(...e)},Kd=t=>t?Q(t)?t.some(e=>e.length>1):t.length>1:!1;function VT(t){const e={};for(const q in t)q in mg||(e[q]=t[q]);if(t.css===!1)return e;const{name:n="v",type:r,duration:s,enterFromClass:i=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:l=i,appearActiveClass:c=o,appearToClass:u=a,leaveFromClass:h=`${n}-leave-from`,leaveActiveClass:d=`${n}-leave-active`,leaveToClass:f=`${n}-leave-to`}=t,g=NT(s),y=g&&g[0],v=g&&g[1],{onBeforeEnter:E,onEnter:I,onEnterCancelled:T,onLeave:x,onLeaveCancelled:$,onBeforeAppear:M=E,onAppear:ae=I,onAppearCancelled:W=T}=e,ie=(q,ge,qe)=>{hr(q,ge?u:a),hr(q,ge?c:o),qe&&qe()},ue=(q,ge)=>{q._isLeaving=!1,hr(q,h),hr(q,f),hr(q,d),ge&&ge()},Me=q=>(ge,qe)=>{const Pt=q?ae:I,Le=()=>ie(ge,q,qe);ur(Pt,[ge,Le]),Wd(()=>{hr(ge,q?l:i),Pn(ge,q?u:a),Kd(Pt)||Gd(ge,r,y,Le)})};return ze(e,{onBeforeEnter(q){ur(E,[q]),Pn(q,i),Pn(q,o)},onBeforeAppear(q){ur(M,[q]),Pn(q,l),Pn(q,c)},onEnter:Me(!1),onAppear:Me(!0),onLeave(q,ge){q._isLeaving=!0;const qe=()=>ue(q,ge);Pn(q,h),FT(),Pn(q,d),Wd(()=>{q._isLeaving&&(hr(q,h),Pn(q,f),Kd(x)||Gd(q,r,v,qe))}),ur(x,[q,qe])},onEnterCancelled(q){ie(q,!1),ur(T,[q])},onAppearCancelled(q){ie(q,!0),ur(W,[q])},onLeaveCancelled(q){ue(q),ur($,[q])}})}function NT(t){if(t==null)return null;if(Ce(t))return[Ol(t.enter),Ol(t.leave)];{const e=Ol(t);return[e,e]}}function Ol(t){return U0(t)}function Pn(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[gi]||(t[gi]=new Set)).add(e)}function hr(t,e){e.split(/\s+/).forEach(r=>r&&t.classList.remove(r));const n=t[gi];n&&(n.delete(e),n.size||(t[gi]=void 0))}function Wd(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let MT=0;function Gd(t,e,n,r){const s=t._endId=++MT,i=()=>{s===t._endId&&r()};if(n)return setTimeout(i,n);const{type:o,timeout:a,propCount:l}=LT(t,e);if(!o)return r();const c=o+"end";let u=0;const h=()=>{t.removeEventListener(c,d),i()},d=f=>{f.target===t&&++u>=l&&h()};setTimeout(()=>{u<l&&h()},a+1),t.addEventListener(c,d)}function LT(t,e){const n=window.getComputedStyle(t),r=g=>(n[g]||"").split(", "),s=r(`${Cn}Delay`),i=r(`${Cn}Duration`),o=Qd(s,i),a=r(`${Vs}Delay`),l=r(`${Vs}Duration`),c=Qd(a,l);let u=null,h=0,d=0;e===Cn?o>0&&(u=Cn,h=o,d=i.length):e===Vs?c>0&&(u=Vs,h=c,d=l.length):(h=Math.max(o,c),u=h>0?o>c?Cn:Vs:null,d=u?u===Cn?i.length:l.length:0);const f=u===Cn&&/\b(transform|all)(,|$)/.test(r(`${Cn}Property`).toString());return{type:u,timeout:h,propCount:d,hasTransform:f}}function Qd(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,r)=>Yd(n)+Yd(t[r])))}function Yd(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function FT(){return document.body.offsetHeight}function UT(t,e,n){const r=t[gi];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Jd=Symbol("_vod"),$T=Symbol("_vsh"),BT=Symbol(""),jT=/(^|;)\s*display\s*:/;function qT(t,e,n){const r=t.style,s=Be(n);let i=!1;if(n&&!s){if(e)if(Be(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&Lo(r,a,"")}else for(const o in e)n[o]==null&&Lo(r,o,"");for(const o in n)o==="display"&&(i=!0),Lo(r,o,n[o])}else if(s){if(e!==n){const o=r[BT];o&&(n+=";"+o),r.cssText=n,i=jT.test(n)}}else e&&t.removeAttribute("style");Jd in t&&(t[Jd]=i?r.display:"",t[$T]&&(r.display="none"))}const Xd=/\s*!important$/;function Lo(t,e,n){if(Q(n))n.forEach(r=>Lo(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=HT(t,e);Xd.test(n)?t.setProperty(Mr(r),n.replace(Xd,""),"important"):t[r]=n}}const Zd=["Webkit","Moz","ms"],kl={};function HT(t,e){const n=kl[e];if(n)return n;let r=rn(e);if(r!=="filter"&&r in t)return kl[e]=r;r=Sa(r);for(let s=0;s<Zd.length;s++){const i=Zd[s]+r;if(i in t)return kl[e]=i}return e}const ef="http://www.w3.org/1999/xlink";function zT(t,e,n,r,s){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(ef,e.slice(6,e.length)):t.setAttributeNS(ef,e,n);else{const i=W0(e);n==null||i&&!mm(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function KT(t,e,n,r,s,i,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,s,i),t[e]=n??"";return}const a=t.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){const c=a==="OPTION"?t.getAttribute("value")||"":t.value,u=n??"";(c!==u||!("_value"in t))&&(t.value=u),n==null&&t.removeAttribute(e),t._value=n;return}let l=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=mm(n):n==null&&c==="string"?(n="",l=!0):c==="number"&&(n=0,l=!0)}try{t[e]=n}catch{}l&&t.removeAttribute(e)}function zr(t,e,n,r){t.addEventListener(e,n,r)}function WT(t,e,n,r){t.removeEventListener(e,n,r)}const tf=Symbol("_vei");function GT(t,e,n,r,s=null){const i=t[tf]||(t[tf]={}),o=i[e];if(r&&o)o.value=r;else{const[a,l]=QT(e);if(r){const c=i[e]=XT(r,s);zr(t,a,c,l)}else o&&(WT(t,a,o,l),i[e]=void 0)}}const nf=/(?:Once|Passive|Capture)$/;function QT(t){let e;if(nf.test(t)){e={};let r;for(;r=t.match(nf);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Mr(t.slice(2)),e]}let Dl=0;const YT=Promise.resolve(),JT=()=>Dl||(YT.then(()=>Dl=0),Dl=Date.now());function XT(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Dt(ZT(r,n.value),e,5,[r])};return n.value=t,n.attached=JT(),n}function ZT(t,e){if(Q(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const rf=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,ew=(t,e,n,r,s,i,o,a,l)=>{const c=s==="svg";e==="class"?UT(t,r,c):e==="style"?qT(t,n,r):Aa(e)?Eu(e)||GT(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):tw(t,e,r,c))?KT(t,e,r,i,o,a,l):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),zT(t,e,r,c))};function tw(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&rf(e)&&se(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return rf(e)&&Be(n)?!1:e in t}const sf=t=>{const e=t.props["onUpdate:modelValue"]||!1;return Q(e)?n=>ko(e,n):e};function nw(t){t.target.composing=!0}function of(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Vl=Symbol("_assign"),$s={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[Vl]=sf(s);const i=r||s.props&&s.props.type==="number";zr(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=hc(a)),t[Vl](a)}),n&&zr(t,"change",()=>{t.value=t.value.trim()}),e||(zr(t,"compositionstart",nw),zr(t,"compositionend",of),zr(t,"change",of))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:r,number:s}},i){if(t[Vl]=sf(i),t.composing)return;const o=(s||t.type==="number")&&!/^0\d/.test(t.value)?hc(t.value):t.value,a=e??"";o!==a&&(document.activeElement===t&&t.type!=="range"&&(n||r&&t.value.trim()===a)||(t.value=a))}},rw={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},gg=(t,e)=>{const n=t._withKeys||(t._withKeys={}),r=e.join(".");return n[r]||(n[r]=s=>{if(!("key"in s))return;const i=Mr(s.key);if(e.some(o=>o===i||rw[o]===i))return t(s)})},sw=ze({patchProp:ew},DT);let af;function iw(){return af||(af=fT(sw))}const ow=(...t)=>{const e=iw().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=lw(r);if(!s)return;const i=e._component;!se(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,aw(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function aw(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function lw(t){return Be(t)?document.querySelector(t):t}function _g(t){return _m()?(Y0(t),!0):!1}function Uu(t){return typeof t=="function"?t():ke(t)}const cw=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const uw=t=>t!=null,hw=Object.prototype.toString,Zo=t=>hw.call(t)==="[object Object]",Fo=()=>{};function dw(t){return t||Na()}function fw(t,e){dw(e)&&An(t,e)}function Js(t){var e;const n=Uu(t);return(e=n==null?void 0:n.$el)!=null?e:n}const yg=cw?window:void 0;function Nt(...t){let e,n,r,s;if(typeof t[0]=="string"||Array.isArray(t[0])?([n,r,s]=t,e=yg):[e,n,r,s]=t,!e)return Fo;Array.isArray(n)||(n=[n]),Array.isArray(r)||(r=[r]);const i=[],o=()=>{i.forEach(u=>u()),i.length=0},a=(u,h,d,f)=>(u.addEventListener(h,d,f),()=>u.removeEventListener(h,d,f)),l=ut(()=>[Js(e),Uu(s)],([u,h])=>{if(o(),!u)return;const d=Zo(h)?{...h}:h;i.push(...n.flatMap(f=>r.map(g=>a(u,f,g,d))))},{immediate:!0,flush:"post"}),c=()=>{l(),o()};return _g(c),c}function pw(){const t=pe(!1),e=Na();return e&&St(()=>{t.value=!0},e),t}function mw(t){const e=pw();return Ve(()=>(e.value,!!t()))}function gw(t,e,n={}){const{root:r,rootMargin:s="0px",threshold:i=.1,window:o=yg,immediate:a=!0}=n,l=mw(()=>o&&"IntersectionObserver"in o),c=Ve(()=>{const g=Uu(t);return(Array.isArray(g)?g:[g]).map(Js).filter(uw)});let u=Fo;const h=pe(a),d=l.value?ut(()=>[c.value,Js(r),h.value],([g,y])=>{if(u(),!h.value||!g.length)return;const v=new IntersectionObserver(e,{root:Js(y),rootMargin:s,threshold:i});g.forEach(E=>E&&v.observe(E)),u=()=>{v.disconnect(),u=Fo}},{immediate:a,flush:"post"}):Fo,f=()=>{u(),d(),h.value=!1};return _g(f),{isSupported:l,isActive:h,pause(){u(),h.value=!1},resume(){h.value=!0},stop:f}}const vg=1/60*1e3,_w=typeof performance<"u"?()=>performance.now():()=>Date.now(),Eg=typeof window<"u"?t=>window.requestAnimationFrame(t):t=>setTimeout(()=>t(_w()),vg);function yw(t){let e=[],n=[],r=0,s=!1,i=!1;const o=new WeakSet,a={schedule:(l,c=!1,u=!1)=>{const h=u&&s,d=h?e:n;return c&&o.add(l),d.indexOf(l)===-1&&(d.push(l),h&&s&&(r=e.length)),l},cancel:l=>{const c=n.indexOf(l);c!==-1&&n.splice(c,1),o.delete(l)},process:l=>{if(s){i=!0;return}if(s=!0,[e,n]=[n,e],n.length=0,r=e.length,r)for(let c=0;c<r;c++){const u=e[c];u(l),o.has(u)&&(a.schedule(u),t())}s=!1,i&&(i=!1,a.process(l))}};return a}const vw=40;let Rc=!0,_i=!1,Sc=!1;const ns={delta:0,timestamp:0},$i=["read","update","preRender","render","postRender"],Fa=$i.reduce((t,e)=>(t[e]=yw(()=>_i=!0),t),{}),Cc=$i.reduce((t,e)=>{const n=Fa[e];return t[e]=(r,s=!1,i=!1)=>(_i||ww(),n.schedule(r,s,i)),t},{}),Ew=$i.reduce((t,e)=>(t[e]=Fa[e].cancel,t),{});$i.reduce((t,e)=>(t[e]=()=>Fa[e].process(ns),t),{});const Tw=t=>Fa[t].process(ns),Tg=t=>{_i=!1,ns.delta=Rc?vg:Math.max(Math.min(t-ns.timestamp,vw),1),ns.timestamp=t,Sc=!0,$i.forEach(Tw),Sc=!1,_i&&(Rc=!1,Eg(Tg))},ww=()=>{_i=!0,Rc=!0,Sc||Eg(Tg)},wg=()=>ns;function Ig(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}var lf=function(){};const Pc=(t,e,n)=>Math.min(Math.max(n,t),e),Nl=.001,Iw=.01,Aw=10,bw=.05,Rw=1;function Sw({duration:t=800,bounce:e=.25,velocity:n=0,mass:r=1}){let s,i,o=1-e;o=Pc(bw,Rw,o),t=Pc(Iw,Aw,t/1e3),o<1?(s=c=>{const u=c*o,h=u*t,d=u-n,f=xc(c,o),g=Math.exp(-h);return Nl-d/f*g},i=c=>{const h=c*o*t,d=h*n+n,f=Math.pow(o,2)*Math.pow(c,2)*t,g=Math.exp(-h),y=xc(Math.pow(c,2),o);return(-s(c)+Nl>0?-1:1)*((d-f)*g)/y}):(s=c=>{const u=Math.exp(-c*t),h=(c-n)*t+1;return-Nl+u*h},i=c=>{const u=Math.exp(-c*t),h=(n-c)*(t*t);return u*h});const a=5/t,l=Pw(s,i,a);if(t=t*1e3,isNaN(l))return{stiffness:100,damping:10,duration:t};{const c=Math.pow(l,2)*r;return{stiffness:c,damping:o*2*Math.sqrt(r*c),duration:t}}}const Cw=12;function Pw(t,e,n){let r=n;for(let s=1;s<Cw;s++)r=r-t(r)/e(r);return r}function xc(t,e){return t*Math.sqrt(1-e*e)}const xw=["duration","bounce"],Ow=["stiffness","damping","mass"];function cf(t,e){return e.some(n=>t[n]!==void 0)}function kw(t){let e=Object.assign({velocity:0,stiffness:100,damping:10,mass:1,isResolvedFromDuration:!1},t);if(!cf(t,Ow)&&cf(t,xw)){const n=Sw(t);e=Object.assign(Object.assign(Object.assign({},e),n),{velocity:0,mass:1}),e.isResolvedFromDuration=!0}return e}function $u(t){var{from:e=0,to:n=1,restSpeed:r=2,restDelta:s}=t,i=Ig(t,["from","to","restSpeed","restDelta"]);const o={done:!1,value:e};let{stiffness:a,damping:l,mass:c,velocity:u,duration:h,isResolvedFromDuration:d}=kw(i),f=uf,g=uf;function y(){const v=u?-(u/1e3):0,E=n-e,I=l/(2*Math.sqrt(a*c)),T=Math.sqrt(a/c)/1e3;if(s===void 0&&(s=Math.min(Math.abs(n-e)/100,.4)),I<1){const x=xc(T,I);f=$=>{const M=Math.exp(-I*T*$);return n-M*((v+I*T*E)/x*Math.sin(x*$)+E*Math.cos(x*$))},g=$=>{const M=Math.exp(-I*T*$);return I*T*M*(Math.sin(x*$)*(v+I*T*E)/x+E*Math.cos(x*$))-M*(Math.cos(x*$)*(v+I*T*E)-x*E*Math.sin(x*$))}}else if(I===1)f=x=>n-Math.exp(-T*x)*(E+(v+T*E)*x);else{const x=T*Math.sqrt(I*I-1);f=$=>{const M=Math.exp(-I*T*$),ae=Math.min(x*$,300);return n-M*((v+I*T*E)*Math.sinh(ae)+x*E*Math.cosh(ae))/x}}}return y(),{next:v=>{const E=f(v);if(d)o.done=v>=h;else{const I=g(v)*1e3,T=Math.abs(I)<=r,x=Math.abs(n-E)<=s;o.done=T&&x}return o.value=o.done?n:E,o},flipTarget:()=>{u=-u,[e,n]=[n,e],y()}}}$u.needsInterpolation=(t,e)=>typeof t=="string"||typeof e=="string";const uf=t=>0,Ag=(t,e,n)=>{const r=e-t;return r===0?1:(n-t)/r},Bu=(t,e,n)=>-n*t+n*e+t,bg=(t,e)=>n=>Math.max(Math.min(n,e),t),Xs=t=>t%1?Number(t.toFixed(5)):t,yi=/(-)?([\d]*\.?[\d])+/g,Oc=/(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,Dw=/^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;function Bi(t){return typeof t=="string"}const ji={test:t=>typeof t=="number",parse:parseFloat,transform:t=>t},Zs=Object.assign(Object.assign({},ji),{transform:bg(0,1)}),To=Object.assign(Object.assign({},ji),{default:1}),ju=t=>({test:e=>Bi(e)&&e.endsWith(t)&&e.split(" ").length===1,parse:parseFloat,transform:e=>`${e}${t}`}),dr=ju("deg"),ei=ju("%"),oe=ju("px"),hf=Object.assign(Object.assign({},ei),{parse:t=>ei.parse(t)/100,transform:t=>ei.transform(t*100)}),qu=(t,e)=>n=>!!(Bi(n)&&Dw.test(n)&&n.startsWith(t)||e&&Object.prototype.hasOwnProperty.call(n,e)),Rg=(t,e,n)=>r=>{if(!Bi(r))return r;const[s,i,o,a]=r.match(yi);return{[t]:parseFloat(s),[e]:parseFloat(i),[n]:parseFloat(o),alpha:a!==void 0?parseFloat(a):1}},vr={test:qu("hsl","hue"),parse:Rg("hue","saturation","lightness"),transform:({hue:t,saturation:e,lightness:n,alpha:r=1})=>"hsla("+Math.round(t)+", "+ei.transform(Xs(e))+", "+ei.transform(Xs(n))+", "+Xs(Zs.transform(r))+")"},Vw=bg(0,255),Ml=Object.assign(Object.assign({},ji),{transform:t=>Math.round(Vw(t))}),$n={test:qu("rgb","red"),parse:Rg("red","green","blue"),transform:({red:t,green:e,blue:n,alpha:r=1})=>"rgba("+Ml.transform(t)+", "+Ml.transform(e)+", "+Ml.transform(n)+", "+Xs(Zs.transform(r))+")"};function Nw(t){let e="",n="",r="",s="";return t.length>5?(e=t.substr(1,2),n=t.substr(3,2),r=t.substr(5,2),s=t.substr(7,2)):(e=t.substr(1,1),n=t.substr(2,1),r=t.substr(3,1),s=t.substr(4,1),e+=e,n+=n,r+=r,s+=s),{red:parseInt(e,16),green:parseInt(n,16),blue:parseInt(r,16),alpha:s?parseInt(s,16)/255:1}}const kc={test:qu("#"),parse:Nw,transform:$n.transform},Et={test:t=>$n.test(t)||kc.test(t)||vr.test(t),parse:t=>$n.test(t)?$n.parse(t):vr.test(t)?vr.parse(t):kc.parse(t),transform:t=>Bi(t)?t:t.hasOwnProperty("red")?$n.transform(t):vr.transform(t)},Sg="${c}",Cg="${n}";function Mw(t){var e,n,r,s;return isNaN(t)&&Bi(t)&&((n=(e=t.match(yi))===null||e===void 0?void 0:e.length)!==null&&n!==void 0?n:0)+((s=(r=t.match(Oc))===null||r===void 0?void 0:r.length)!==null&&s!==void 0?s:0)>0}function Pg(t){typeof t=="number"&&(t=`${t}`);const e=[];let n=0;const r=t.match(Oc);r&&(n=r.length,t=t.replace(Oc,Sg),e.push(...r.map(Et.parse)));const s=t.match(yi);return s&&(t=t.replace(yi,Cg),e.push(...s.map(ji.parse))),{values:e,numColors:n,tokenised:t}}function xg(t){return Pg(t).values}function Og(t){const{values:e,numColors:n,tokenised:r}=Pg(t),s=e.length;return i=>{let o=r;for(let a=0;a<s;a++)o=o.replace(a<n?Sg:Cg,a<n?Et.transform(i[a]):Xs(i[a]));return o}}const Lw=t=>typeof t=="number"?0:t;function Fw(t){const e=xg(t);return Og(t)(e.map(Lw))}const qi={test:Mw,parse:xg,createTransformer:Og,getAnimatableNone:Fw},Uw=new Set(["brightness","contrast","saturate","opacity"]);function $w(t){let[e,n]=t.slice(0,-1).split("(");if(e==="drop-shadow")return t;const[r]=n.match(yi)||[];if(!r)return t;const s=n.replace(r,"");let i=Uw.has(e)?1:0;return r!==n&&(i*=100),e+"("+i+s+")"}const Bw=/([a-z-]*)\(.*?\)/g,Dc=Object.assign(Object.assign({},qi),{getAnimatableNone:t=>{const e=t.match(Bw);return e?e.map($w).join(" "):t}});function Ll(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*(2/3-n)*6:t}function df({hue:t,saturation:e,lightness:n,alpha:r}){t/=360,e/=100,n/=100;let s=0,i=0,o=0;if(!e)s=i=o=n;else{const a=n<.5?n*(1+e):n+e-n*e,l=2*n-a;s=Ll(l,a,t+1/3),i=Ll(l,a,t),o=Ll(l,a,t-1/3)}return{red:Math.round(s*255),green:Math.round(i*255),blue:Math.round(o*255),alpha:r}}const jw=(t,e,n)=>{const r=t*t,s=e*e;return Math.sqrt(Math.max(0,n*(s-r)+r))},qw=[kc,$n,vr],ff=t=>qw.find(e=>e.test(t)),kg=(t,e)=>{let n=ff(t),r=ff(e),s=n.parse(t),i=r.parse(e);n===vr&&(s=df(s),n=$n),r===vr&&(i=df(i),r=$n);const o=Object.assign({},s);return a=>{for(const l in o)l!=="alpha"&&(o[l]=jw(s[l],i[l],a));return o.alpha=Bu(s.alpha,i.alpha,a),n.transform(o)}},Hw=t=>typeof t=="number",zw=(t,e)=>n=>e(t(n)),Dg=(...t)=>t.reduce(zw);function Vg(t,e){return Hw(t)?n=>Bu(t,e,n):Et.test(t)?kg(t,e):Mg(t,e)}const Ng=(t,e)=>{const n=[...t],r=n.length,s=t.map((i,o)=>Vg(i,e[o]));return i=>{for(let o=0;o<r;o++)n[o]=s[o](i);return n}},Kw=(t,e)=>{const n=Object.assign(Object.assign({},t),e),r={};for(const s in n)t[s]!==void 0&&e[s]!==void 0&&(r[s]=Vg(t[s],e[s]));return s=>{for(const i in r)n[i]=r[i](s);return n}};function pf(t){const e=qi.parse(t),n=e.length;let r=0,s=0,i=0;for(let o=0;o<n;o++)r||typeof e[o]=="number"?r++:e[o].hue!==void 0?i++:s++;return{parsed:e,numNumbers:r,numRGB:s,numHSL:i}}const Mg=(t,e)=>{const n=qi.createTransformer(e),r=pf(t),s=pf(e);return r.numHSL===s.numHSL&&r.numRGB===s.numRGB&&r.numNumbers>=s.numNumbers?Dg(Ng(r.parsed,s.parsed),n):o=>`${o>0?e:t}`},Ww=(t,e)=>n=>Bu(t,e,n);function Gw(t){if(typeof t=="number")return Ww;if(typeof t=="string")return Et.test(t)?kg:Mg;if(Array.isArray(t))return Ng;if(typeof t=="object")return Kw}function Qw(t,e,n){const r=[],s=n||Gw(t[0]),i=t.length-1;for(let o=0;o<i;o++){let a=s(t[o],t[o+1]);if(e){const l=Array.isArray(e)?e[o]:e;a=Dg(l,a)}r.push(a)}return r}function Yw([t,e],[n]){return r=>n(Ag(t,e,r))}function Jw(t,e){const n=t.length,r=n-1;return s=>{let i=0,o=!1;if(s<=t[0]?o=!0:s>=t[r]&&(i=r-1,o=!0),!o){let l=1;for(;l<n&&!(t[l]>s||l===r);l++);i=l-1}const a=Ag(t[i],t[i+1],s);return e[i](a)}}function Lg(t,e,{clamp:n=!0,ease:r,mixer:s}={}){const i=t.length;lf(i===e.length),lf(!r||!Array.isArray(r)||r.length===i-1),t[0]>t[i-1]&&(t=[].concat(t),e=[].concat(e),t.reverse(),e.reverse());const o=Qw(e,r,s),a=i===2?Yw(t,o):Jw(t,o);return n?l=>a(Pc(t[0],t[i-1],l)):a}const Ua=t=>e=>1-t(1-e),Hu=t=>e=>e<=.5?t(2*e)/2:(2-t(2*(1-e)))/2,Xw=t=>e=>Math.pow(e,t),Fg=t=>e=>e*e*((t+1)*e-t),Zw=t=>{const e=Fg(t);return n=>(n*=2)<1?.5*e(n):.5*(2-Math.pow(2,-10*(n-1)))},Ug=1.525,eI=4/11,tI=8/11,nI=9/10,$g=t=>t,zu=Xw(2),rI=Ua(zu),Bg=Hu(zu),jg=t=>1-Math.sin(Math.acos(t)),qg=Ua(jg),sI=Hu(qg),Ku=Fg(Ug),iI=Ua(Ku),oI=Hu(Ku),aI=Zw(Ug),lI=4356/361,cI=35442/1805,uI=16061/1805,ea=t=>{if(t===1||t===0)return t;const e=t*t;return t<eI?7.5625*e:t<tI?9.075*e-9.9*t+3.4:t<nI?lI*e-cI*t+uI:10.8*t*t-20.52*t+10.72},hI=Ua(ea),dI=t=>t<.5?.5*(1-ea(1-t*2)):.5*ea(t*2-1)+.5;function fI(t,e){return t.map(()=>e||Bg).splice(0,t.length-1)}function pI(t){const e=t.length;return t.map((n,r)=>r!==0?r/(e-1):0)}function mI(t,e){return t.map(n=>n*e)}function Uo({from:t=0,to:e=1,ease:n,offset:r,duration:s=300}){const i={done:!1,value:t},o=Array.isArray(e)?e:[t,e],a=mI(r&&r.length===o.length?r:pI(o),s);function l(){return Lg(a,o,{ease:Array.isArray(n)?n:fI(o,n)})}let c=l();return{next:u=>(i.value=c(u),i.done=u>=s,i),flipTarget:()=>{o.reverse(),c=l()}}}function gI({velocity:t=0,from:e=0,power:n=.8,timeConstant:r=350,restDelta:s=.5,modifyTarget:i}){const o={done:!1,value:e};let a=n*t;const l=e+a,c=i===void 0?l:i(l);return c!==l&&(a=c-e),{next:u=>{const h=-a*Math.exp(-u/r);return o.done=!(h>s||h<-s),o.value=o.done?c:c+h,o},flipTarget:()=>{}}}const mf={keyframes:Uo,spring:$u,decay:gI};function _I(t){if(Array.isArray(t.to))return Uo;if(mf[t.type])return mf[t.type];const e=new Set(Object.keys(t));return e.has("ease")||e.has("duration")&&!e.has("dampingRatio")?Uo:e.has("dampingRatio")||e.has("stiffness")||e.has("mass")||e.has("damping")||e.has("restSpeed")||e.has("restDelta")?$u:Uo}function Hg(t,e,n=0){return t-e-n}function yI(t,e,n=0,r=!0){return r?Hg(e+-t,e,n):e-(t-e)+n}function vI(t,e,n,r){return r?t>=e+n:t<=-n}const EI=t=>{const e=({delta:n})=>t(n);return{start:()=>Cc.update(e,!0),stop:()=>Ew.update(e)}};function zg(t){var e,n,{from:r,autoplay:s=!0,driver:i=EI,elapsed:o=0,repeat:a=0,repeatType:l="loop",repeatDelay:c=0,onPlay:u,onStop:h,onComplete:d,onRepeat:f,onUpdate:g}=t,y=Ig(t,["from","autoplay","driver","elapsed","repeat","repeatType","repeatDelay","onPlay","onStop","onComplete","onRepeat","onUpdate"]);let{to:v}=y,E,I=0,T=y.duration,x,$=!1,M=!0,ae;const W=_I(y);!((n=(e=W).needsInterpolation)===null||n===void 0)&&n.call(e,r,v)&&(ae=Lg([0,100],[r,v],{clamp:!1}),r=0,v=100);const ie=W(Object.assign(Object.assign({},y),{from:r,to:v}));function ue(){I++,l==="reverse"?(M=I%2===0,o=yI(o,T,c,M)):(o=Hg(o,T,c),l==="mirror"&&ie.flipTarget()),$=!1,f&&f()}function Me(){E.stop(),d&&d()}function q(qe){if(M||(qe=-qe),o+=qe,!$){const Pt=ie.next(Math.max(0,o));x=Pt.value,ae&&(x=ae(x)),$=M?Pt.done:o<=0}g==null||g(x),$&&(I===0&&(T??(T=o)),I<a?vI(o,T,c,M)&&ue():Me())}function ge(){u==null||u(),E=i(q),E.start()}return s&&ge(),{stop:()=>{h==null||h(),E.stop()}}}function Kg(t,e){return e?t*(1e3/e):0}function TI({from:t=0,velocity:e=0,min:n,max:r,power:s=.8,timeConstant:i=750,bounceStiffness:o=500,bounceDamping:a=10,restDelta:l=1,modifyTarget:c,driver:u,onUpdate:h,onComplete:d,onStop:f}){let g;function y(T){return n!==void 0&&T<n||r!==void 0&&T>r}function v(T){return n===void 0?r:r===void 0||Math.abs(n-T)<Math.abs(r-T)?n:r}function E(T){g==null||g.stop(),g=zg(Object.assign(Object.assign({},T),{driver:u,onUpdate:x=>{var $;h==null||h(x),($=T.onUpdate)===null||$===void 0||$.call(T,x)},onComplete:d,onStop:f}))}function I(T){E(Object.assign({type:"spring",stiffness:o,damping:a,restDelta:l},T))}if(y(t))I({from:t,velocity:e,to:v(t)});else{let T=s*e+t;typeof c<"u"&&(T=c(T));const x=v(T),$=x===n?-1:1;let M,ae;const W=ie=>{M=ae,ae=ie,e=Kg(ie-M,wg().delta),($===1&&ie>x||$===-1&&ie<x)&&I({from:ie,to:x,velocity:e})};E({type:"decay",from:t,velocity:e,timeConstant:i,power:s,restDelta:l,modifyTarget:c,onUpdate:y(T)?W:void 0})}return{stop:()=>g==null?void 0:g.stop()}}const Wg=(t,e)=>1-3*e+3*t,Gg=(t,e)=>3*e-6*t,Qg=t=>3*t,ta=(t,e,n)=>((Wg(e,n)*t+Gg(e,n))*t+Qg(e))*t,Yg=(t,e,n)=>3*Wg(e,n)*t*t+2*Gg(e,n)*t+Qg(e),wI=1e-7,II=10;function AI(t,e,n,r,s){let i,o,a=0;do o=e+(n-e)/2,i=ta(o,r,s)-t,i>0?n=o:e=o;while(Math.abs(i)>wI&&++a<II);return o}const bI=8,RI=.001;function SI(t,e,n,r){for(let s=0;s<bI;++s){const i=Yg(e,n,r);if(i===0)return e;const o=ta(e,n,r)-t;e-=o/i}return e}const $o=11,wo=1/($o-1);function CI(t,e,n,r){if(t===e&&n===r)return $g;const s=new Float32Array($o);for(let o=0;o<$o;++o)s[o]=ta(o*wo,t,n);function i(o){let a=0,l=1;const c=$o-1;for(;l!==c&&s[l]<=o;++l)a+=wo;--l;const u=(o-s[l])/(s[l+1]-s[l]),h=a+u*wo,d=Yg(h,t,n);return d>=RI?SI(o,h,t,n):d===0?h:AI(o,a,a+wo,t,n)}return o=>o===0||o===1?o:ta(i(o),e,r)}const Fl={};var PI=Object.defineProperty,xI=(t,e,n)=>e in t?PI(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,OI=(t,e,n)=>(xI(t,typeof e!="symbol"?e+"":e,n),n);class kI{constructor(){OI(this,"subscriptions",new Set)}add(e){return this.subscriptions.add(e),()=>this.subscriptions.delete(e)}notify(e,n,r){if(this.subscriptions.size)for(const s of this.subscriptions)s(e,n,r)}clear(){this.subscriptions.clear()}}var DI=Object.defineProperty,VI=(t,e,n)=>e in t?DI(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,Kt=(t,e,n)=>(VI(t,typeof e!="symbol"?e+"":e,n),n);function gf(t){return!isNaN(parseFloat(t))}class NI{constructor(e){Kt(this,"current"),Kt(this,"prev"),Kt(this,"timeDelta",0),Kt(this,"lastUpdated",0),Kt(this,"updateSubscribers",new kI),Kt(this,"stopAnimation"),Kt(this,"canTrackVelocity",!1),Kt(this,"updateAndNotify",n=>{this.prev=this.current,this.current=n;const{delta:r,timestamp:s}=wg();this.lastUpdated!==s&&(this.timeDelta=r,this.lastUpdated=s),Cc.postRender(this.scheduleVelocityCheck),this.updateSubscribers.notify(this.current)}),Kt(this,"scheduleVelocityCheck",()=>Cc.postRender(this.velocityCheck)),Kt(this,"velocityCheck",({timestamp:n})=>{this.canTrackVelocity||(this.canTrackVelocity=gf(this.current)),n!==this.lastUpdated&&(this.prev=this.current)}),this.prev=this.current=e,this.canTrackVelocity=gf(this.current)}onChange(e){return this.updateSubscribers.add(e)}clearListeners(){this.updateSubscribers.clear()}set(e){this.updateAndNotify(e)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){return this.canTrackVelocity?Kg(parseFloat(this.current)-parseFloat(this.prev),this.timeDelta):0}start(e){return this.stop(),new Promise(n=>{const{stop:r}=e(n);this.stopAnimation=r}).then(()=>this.clearAnimation())}stop(){this.stopAnimation&&this.stopAnimation(),this.clearAnimation()}isAnimating(){return!!this.stopAnimation}clearAnimation(){this.stopAnimation=null}destroy(){this.updateSubscribers.clear(),this.stop()}}function MI(t){return new NI(t)}const{isArray:LI}=Array;function FI(){const t=pe({}),e=r=>{const s=i=>{t.value[i]&&(t.value[i].stop(),t.value[i].destroy(),delete t.value[i])};r?LI(r)?r.forEach(s):s(r):Object.keys(t.value).forEach(s)},n=(r,s,i)=>{if(t.value[r])return t.value[r];const o=MI(s);return o.onChange(a=>i[r]=a),t.value[r]=o,o};return fw(e),{motionValues:t,get:n,stop:e}}function UI(t){return Array.isArray(t)}function fr(){return{type:"spring",stiffness:500,damping:25,restDelta:.5,restSpeed:10}}function Ul(t){return{type:"spring",stiffness:550,damping:t===0?2*Math.sqrt(550):30,restDelta:.01,restSpeed:10}}function $I(t){return{type:"spring",stiffness:550,damping:t===0?100:30,restDelta:.01,restSpeed:10}}function $l(){return{type:"keyframes",ease:"linear",duration:300}}function BI(t){return{type:"keyframes",duration:800,values:t}}const _f={default:$I,x:fr,y:fr,z:fr,rotate:fr,rotateX:fr,rotateY:fr,rotateZ:fr,scaleX:Ul,scaleY:Ul,scale:Ul,backgroundColor:$l,color:$l,opacity:$l};function Jg(t,e){let n;return UI(e)?n=BI:n=_f[t]||_f.default,{to:e,...n(e)}}const yf={...ji,transform:Math.round},Xg={color:Et,backgroundColor:Et,outlineColor:Et,fill:Et,stroke:Et,borderColor:Et,borderTopColor:Et,borderRightColor:Et,borderBottomColor:Et,borderLeftColor:Et,borderWidth:oe,borderTopWidth:oe,borderRightWidth:oe,borderBottomWidth:oe,borderLeftWidth:oe,borderRadius:oe,radius:oe,borderTopLeftRadius:oe,borderTopRightRadius:oe,borderBottomRightRadius:oe,borderBottomLeftRadius:oe,width:oe,maxWidth:oe,height:oe,maxHeight:oe,size:oe,top:oe,right:oe,bottom:oe,left:oe,padding:oe,paddingTop:oe,paddingRight:oe,paddingBottom:oe,paddingLeft:oe,margin:oe,marginTop:oe,marginRight:oe,marginBottom:oe,marginLeft:oe,rotate:dr,rotateX:dr,rotateY:dr,rotateZ:dr,scale:To,scaleX:To,scaleY:To,scaleZ:To,skew:dr,skewX:dr,skewY:dr,distance:oe,translateX:oe,translateY:oe,translateZ:oe,x:oe,y:oe,z:oe,perspective:oe,transformPerspective:oe,opacity:Zs,originX:hf,originY:hf,originZ:oe,zIndex:yf,filter:Dc,WebkitFilter:Dc,fillOpacity:Zs,strokeOpacity:Zs,numOctaves:yf},Wu=t=>Xg[t];function Zg(t,e){return e&&typeof t=="number"&&e.transform?e.transform(t):t}function jI(t,e){let n=Wu(t);return n!==Dc&&(n=qi),n.getAnimatableNone?n.getAnimatableNone(e):void 0}const qI={linear:$g,easeIn:zu,easeInOut:Bg,easeOut:rI,circIn:jg,circInOut:sI,circOut:qg,backIn:Ku,backInOut:oI,backOut:iI,anticipate:aI,bounceIn:hI,bounceInOut:dI,bounceOut:ea};function vf(t){if(Array.isArray(t)){const[e,n,r,s]=t;return CI(e,n,r,s)}else if(typeof t=="string")return qI[t];return t}function HI(t){return Array.isArray(t)&&typeof t[0]!="number"}function Ef(t,e){return t==="zIndex"?!1:!!(typeof e=="number"||Array.isArray(e)||typeof e=="string"&&qi.test(e)&&!e.startsWith("url("))}function zI(t){return Array.isArray(t.to)&&t.to[0]===null&&(t.to=[...t.to],t.to[0]=t.from),t}function KI({ease:t,times:e,delay:n,...r}){const s={...r};return e&&(s.offset=e),t&&(s.ease=HI(t)?t.map(vf):vf(t)),n&&(s.elapsed=-n),s}function WI(t,e,n){return Array.isArray(e.to)&&(t.duration||(t.duration=800)),zI(e),GI(t)||(t={...t,...Jg(n,e.to)}),{...e,...KI(t)}}function GI({delay:t,repeat:e,repeatType:n,repeatDelay:r,from:s,...i}){return!!Object.keys(i).length}function QI(t,e){return t[e]||t.default||t}function YI(t,e,n,r,s){const i=QI(r,t);let o=i.from===null||i.from===void 0?e.get():i.from;const a=Ef(t,n);o==="none"&&a&&typeof n=="string"&&(o=jI(t,n));const l=Ef(t,o);function c(h){const d={from:o,to:n,velocity:r.velocity?r.velocity:e.getVelocity(),onUpdate:f=>e.set(f)};return i.type==="inertia"||i.type==="decay"?TI({...d,...i}):zg({...WI(i,d,t),onUpdate:f=>{d.onUpdate(f),i.onUpdate&&i.onUpdate(f)},onComplete:()=>{r.onComplete&&r.onComplete(),s&&s(),h&&h()}})}function u(h){return e.set(n),r.onComplete&&r.onComplete(),s&&s(),h&&h(),{stop:()=>{}}}return!l||!a||i.type===!1?u:c}function JI(){const{motionValues:t,stop:e,get:n}=FI();return{motionValues:t,stop:e,push:(s,i,o,a={},l)=>{const c=o[s],u=n(s,c,o);if(a&&a.immediate){u.set(i);return}const h=YI(s,u,i,a,l);u.start(h)}}}function XI(t,e={},{motionValues:n,push:r,stop:s}=JI()){const i=ke(e),o=pe(!1);ut(n,h=>{o.value=Object.values(h).filter(d=>d.isAnimating()).length>0},{immediate:!0,deep:!0});const a=h=>{if(!i||!i[h])throw new Error(`The variant ${h} does not exist.`);return i[h]},l=h=>(typeof h=="string"&&(h=a(h)),Promise.all(Object.entries(h).map(([d,f])=>{if(d!=="transition")return new Promise(g=>r(d,f,t,h.transition||Jg(d,h[d]),g))}).filter(Boolean)));return{isAnimating:o,apply:l,set:h=>{const d=Zo(h)?h:a(h);Object.entries(d).forEach(([f,g])=>{f!=="transition"&&r(f,g,t,{immediate:!0})})},leave:async h=>{let d;if(i&&(i.leave&&(d=i.leave),!i.leave&&i.initial&&(d=i.initial)),!d){h();return}await l(d),h()},stop:s}}const Gu=typeof window<"u",ZI=()=>Gu&&window.onpointerdown===null,eA=()=>Gu&&window.ontouchstart===null,tA=()=>Gu&&window.onmousedown===null;function nA({target:t,state:e,variants:n,apply:r}){const s=ke(n),i=pe(!1),o=pe(!1),a=pe(!1),l=Ve(()=>{let u=[];return s&&(s.hovered&&(u=[...u,...Object.keys(s.hovered)]),s.tapped&&(u=[...u,...Object.keys(s.tapped)]),s.focused&&(u=[...u,...Object.keys(s.focused)])),u}),c=Ve(()=>{const u={};Object.assign(u,e.value),i.value&&s.hovered&&Object.assign(u,s.hovered),o.value&&s.tapped&&Object.assign(u,s.tapped),a.value&&s.focused&&Object.assign(u,s.focused);for(const h in u)l.value.includes(h)||delete u[h];return u});s.hovered&&(Nt(t,"mouseenter",()=>i.value=!0),Nt(t,"mouseleave",()=>{i.value=!1,o.value=!1}),Nt(t,"mouseout",()=>{i.value=!1,o.value=!1})),s.tapped&&(tA()&&(Nt(t,"mousedown",()=>o.value=!0),Nt(t,"mouseup",()=>o.value=!1)),ZI()&&(Nt(t,"pointerdown",()=>o.value=!0),Nt(t,"pointerup",()=>o.value=!1)),eA()&&(Nt(t,"touchstart",()=>o.value=!0),Nt(t,"touchend",()=>o.value=!1))),s.focused&&(Nt(t,"focus",()=>a.value=!0),Nt(t,"blur",()=>a.value=!1)),ut(c,r)}function rA({set:t,target:e,variants:n,variant:r}){const s=ke(n);ut(()=>e,()=>{s&&(s.initial&&t("initial"),s.enter&&(r.value="enter"))},{immediate:!0,flush:"pre"})}function sA({state:t,apply:e}){ut(t,n=>{n&&e(n)},{immediate:!0})}function e_({target:t,variants:e,variant:n}){const r=ke(e);r&&(r.visible||r.visibleOnce)&&gw(t,([{isIntersecting:s}])=>{r.visible?s?n.value="visible":n.value="initial":r.visibleOnce&&(s&&n.value!=="visibleOnce"?n.value="visibleOnce":n.value||(n.value="initial"))})}function iA(t,e={syncVariants:!0,lifeCycleHooks:!0,visibilityHooks:!0,eventListeners:!0}){e.lifeCycleHooks&&rA(t),e.syncVariants&&sA(t),e.visibilityHooks&&e_(t),e.eventListeners&&nA(t)}function t_(t={}){const e=sr({...t}),n=pe({});return ut(e,()=>{const r={};for(const[s,i]of Object.entries(e)){const o=Wu(s),a=Zg(i,o);r[s]=a}n.value=r},{immediate:!0,deep:!0}),{state:e,style:n}}function Qu(t,e){ut(()=>Js(t),n=>{n&&e(n)},{immediate:!0})}const oA={x:"translateX",y:"translateY",z:"translateZ"};function n_(t={},e=!0){const n=sr({...t}),r=pe("");return ut(n,s=>{let i="",o=!1;if(e&&(s.x||s.y||s.z)){const a=[s.x||0,s.y||0,s.z||0].map(oe.transform).join(",");i+=`translate3d(${a}) `,o=!0}for(const[a,l]of Object.entries(s)){if(e&&(a==="x"||a==="y"||a==="z"))continue;const c=Wu(a),u=Zg(l,c);i+=`${oA[a]||a}(${u}) `}e&&!o&&(i+="translateZ(0px) "),r.value=i.trim()},{immediate:!0,deep:!0}),{state:n,transform:r}}const aA=["","X","Y","Z"],lA=["perspective","translate","scale","rotate","skew"],r_=["transformPerspective","x","y","z"];lA.forEach(t=>{aA.forEach(e=>{const n=t+e;r_.push(n)})});const cA=new Set(r_);function Yu(t){return cA.has(t)}const uA=new Set(["originX","originY","originZ"]);function s_(t){return uA.has(t)}function hA(t){const e={},n={};return Object.entries(t).forEach(([r,s])=>{Yu(r)||s_(r)?e[r]=s:n[r]=s}),{transform:e,style:n}}function i_(t){const{transform:e,style:n}=hA(t),{transform:r}=n_(e),{style:s}=t_(n);return r.value&&(s.value.transform=r.value),s.value}function dA(t,e){let n,r;const{state:s,style:i}=t_();return Qu(t,o=>{r=o;for(const a of Object.keys(Xg))o.style[a]===null||o.style[a]===""||Yu(a)||s_(a)||(s[a]=o.style[a]);n&&Object.entries(n).forEach(([a,l])=>o.style[a]=l),e&&e(s)}),ut(i,o=>{if(!r){n=o;return}for(const a in o)r.style[a]=o[a]},{immediate:!0}),{style:s}}function fA(t){const e=t.trim().split(/\) |\)/);if(e.length===1)return{};const n=r=>r.endsWith("px")||r.endsWith("deg")?parseFloat(r):isNaN(Number(r))?Number(r):r;return e.reduce((r,s)=>{if(!s)return r;const[i,o]=s.split("("),l=o.split(",").map(u=>n(u.endsWith(")")?u.replace(")",""):u.trim())),c=l.length===1?l[0]:l;return{...r,[i]:c}},{})}function pA(t,e){Object.entries(fA(e)).forEach(([n,r])=>{const s=["x","y","z"];if(n==="translate3d"){if(r===0){s.forEach(i=>t[i]=0);return}r.forEach((i,o)=>t[s[o]]=i);return}if(r=parseFloat(r),n==="translateX"){t.x=r;return}if(n==="translateY"){t.y=r;return}if(n==="translateZ"){t.z=r;return}t[n]=r})}function mA(t,e){let n,r;const{state:s,transform:i}=n_();return Qu(t,o=>{r=o,o.style.transform&&pA(s,o.style.transform),n&&(o.style.transform=n),e&&e(s)}),ut(i,o=>{if(!r){n=o;return}r.style.transform=o},{immediate:!0}),{transform:s}}function gA(t,e){const n=sr({}),r=o=>Object.entries(o).forEach(([a,l])=>n[a]=l),{style:s}=dA(t,r),{transform:i}=mA(t,r);return ut(n,o=>{Object.entries(o).forEach(([a,l])=>{const c=Yu(a)?i:s;c[a]&&c[a]===l||(c[a]=l)})},{immediate:!0,deep:!0}),Qu(t,()=>e&&r(e)),{motionProperties:n,style:s,transform:i}}function _A(t={}){const e=ke(t),n=pe();return{state:Ve(()=>{if(n.value)return e[n.value]}),variant:n}}function o_(t,e={},n){const{motionProperties:r}=gA(t),{variant:s,state:i}=_A(e),o=XI(r,e),a={target:t,variant:s,variants:e,state:i,motionProperties:r,...o};return iA(a,n),a}const yA=["initial","enter","leave","visible","visible-once","visibleOnce","hovered","tapped","focused","delay"];function vA(t,e){const n=t.props?t.props:t.data&&t.data.attrs?t.data.attrs:{};n&&(n.variants&&Zo(n.variants)&&(e.value={...e.value,...n.variants}),yA.forEach(r=>{if(r==="delay"){if(n&&n[r]&&typeof n[r]=="number"){const s=n[r];e&&e.value&&(e.value.enter&&(e.value.enter.transition||(e.value.enter.transition={}),e.value.enter.transition={delay:s,...e.value.enter.transition}),e.value.visible&&(e.value.visible.transition||(e.value.visible.transition={}),e.value.visible.transition={delay:s,...e.value.visible.transition}),e.value.visibleOnce&&(e.value.visibleOnce.transition||(e.value.visibleOnce.transition={}),e.value.visibleOnce.transition={delay:s,...e.value.visibleOnce.transition}))}return}if(n&&n[r]&&Zo(n[r])){const s=n[r];r==="visible-once"&&(r="visibleOnce"),e.value[r]=s}}))}function Bl(t){return{created:(r,s,i)=>{const o=s.value&&typeof s.value=="string"?s.value:i.key;o&&Fl[o]&&Fl[o].stop();const a=pe(t||{});typeof s.value=="object"&&(a.value=s.value),vA(i,a);const c=o_(r,a,{eventListeners:!0,lifeCycleHooks:!0,syncVariants:!0,visibilityHooks:!1});r.motionInstance=c,o&&(Fl[o]=c)},mounted:(r,s,i)=>{r.motionInstance&&e_(r.motionInstance)},getSSRProps(r,s){let{initial:i}=r.value||s&&(s==null?void 0:s.props)||{};i=ke(i);const o=D0((t==null?void 0:t.initial)||{},i||{});return!o||Object.keys(o).length===0?void 0:{style:i_(o)}}}}const EA={initial:{opacity:0},enter:{opacity:1}},TA={initial:{opacity:0},visible:{opacity:1}},wA={initial:{opacity:0},visibleOnce:{opacity:1}},IA={initial:{scale:0,opacity:0},enter:{scale:1,opacity:1}},AA={initial:{scale:0,opacity:0},visible:{scale:1,opacity:1}},bA={initial:{scale:0,opacity:0},visibleOnce:{scale:1,opacity:1}},RA={initial:{x:-100,rotate:90,opacity:0},enter:{x:0,rotate:0,opacity:1}},SA={initial:{x:-100,rotate:90,opacity:0},visible:{x:0,rotate:0,opacity:1}},CA={initial:{x:-100,rotate:90,opacity:0},visibleOnce:{x:0,rotate:0,opacity:1}},PA={initial:{x:100,rotate:-90,opacity:0},enter:{x:0,rotate:0,opacity:1}},xA={initial:{x:100,rotate:-90,opacity:0},visible:{x:0,rotate:0,opacity:1}},OA={initial:{x:100,rotate:-90,opacity:0},visibleOnce:{x:0,rotate:0,opacity:1}},kA={initial:{y:-100,rotate:-90,opacity:0},enter:{y:0,rotate:0,opacity:1}},DA={initial:{y:-100,rotate:-90,opacity:0},visible:{y:0,rotate:0,opacity:1}},VA={initial:{y:-100,rotate:-90,opacity:0},visibleOnce:{y:0,rotate:0,opacity:1}},NA={initial:{y:100,rotate:90,opacity:0},enter:{y:0,rotate:0,opacity:1}},MA={initial:{y:100,rotate:90,opacity:0},visible:{y:0,rotate:0,opacity:1}},LA={initial:{y:100,rotate:90,opacity:0},visibleOnce:{y:0,rotate:0,opacity:1}},FA={initial:{x:-100,opacity:0},enter:{x:0,opacity:1}},UA={initial:{x:-100,opacity:0},visible:{x:0,opacity:1}},$A={initial:{x:-100,opacity:0},visibleOnce:{x:0,opacity:1}},BA={initial:{x:100,opacity:0},enter:{x:0,opacity:1}},jA={initial:{x:100,opacity:0},visible:{x:0,opacity:1}},qA={initial:{x:100,opacity:0},visibleOnce:{x:0,opacity:1}},HA={initial:{y:-100,opacity:0},enter:{y:0,opacity:1}},zA={initial:{y:-100,opacity:0},visible:{y:0,opacity:1}},KA={initial:{y:-100,opacity:0},visibleOnce:{y:0,opacity:1}},WA={initial:{y:100,opacity:0},enter:{y:0,opacity:1}},GA={initial:{y:100,opacity:0},visible:{y:0,opacity:1}},QA={initial:{y:100,opacity:0},visibleOnce:{y:0,opacity:1}},Vc={__proto__:null,fade:EA,fadeVisible:TA,fadeVisibleOnce:wA,pop:IA,popVisible:AA,popVisibleOnce:bA,rollBottom:NA,rollLeft:RA,rollRight:PA,rollTop:kA,rollVisibleBottom:MA,rollVisibleLeft:SA,rollVisibleOnceBottom:LA,rollVisibleOnceLeft:CA,rollVisibleOnceRight:OA,rollVisibleOnceTop:VA,rollVisibleRight:xA,rollVisibleTop:DA,slideBottom:WA,slideLeft:FA,slideRight:BA,slideTop:HA,slideVisibleBottom:GA,slideVisibleLeft:UA,slideVisibleOnceBottom:QA,slideVisibleOnceLeft:$A,slideVisibleOnceRight:qA,slideVisibleOnceTop:KA,slideVisibleRight:jA,slideVisibleTop:zA},YA=Du({props:{is:{type:[String,Object],required:!1},preset:{type:String,required:!1},instance:{type:Object,required:!1},variants:{type:Object,required:!1},initial:{type:Object,required:!1},enter:{type:Object,required:!1},leave:{type:Object,required:!1},visible:{type:Object,required:!1},visibleOnce:{type:Object,required:!1},hovered:{type:Object,required:!1},tapped:{type:Object,required:!1},focused:{type:Object,required:!1},delay:{type:[Number,String],required:!1}},setup(t){var a;const e=ZE(),n=sr({});if(!t.is&&!e.default)return()=>mi("div",{});const r=Ve(()=>{let l;return t.preset&&(l=Vc[t.preset]),l}),s=Ve(()=>({initial:t.initial,enter:t.enter,leave:t.leave,visible:t.visible,visibleOnce:t.visibleOnce,hovered:t.hovered,tapped:t.tapped,focused:t.focused})),i=Ve(()=>{const l={...s.value,...r.value||{},...t.variants||{}};return t.delay&&(l.enter.transition={...l.enter.transition},l.enter.transition.delay=parseInt(t.delay)),l}),o=Ve(()=>{if(!t.is)return;let l=t.is;return typeof o.value=="string"&&!z0(l)&&(l=kE(l)),l});if(((a=process==null?void 0:process.env)==null?void 0:a.NODE_ENV)==="development"||process!=null&&process.dev){const l=c=>{var u;(u=c.variants)!=null&&u.initial&&c.set("initial"),setTimeout(()=>{var h,d,f;(h=c.variants)!=null&&h.enter&&c.apply("enter"),(d=c.variants)!=null&&d.visible&&c.apply("visible"),(f=c.variants)!=null&&f.visibleOnce&&c.apply("visibleOnce")},10)};Jm(()=>Object.entries(n).forEach(([c,u])=>l(u)))}return{slots:e,component:o,motionConfig:i,instances:n}},render({slots:t,motionConfig:e,instances:n,component:r}){var a;const s=i_(e.initial||{}),i=(l,c)=>(l.props||(l.props={}),l.props.style=s,l.props.onVnodeMounted=({el:u})=>{const h=o_(u,e);n[c]=h},l);if(r){const l=mi(r,void 0,t);return i(l,0),l}return(((a=t.default)==null?void 0:a.call(t))||[]).map((l,c)=>i(l,c))}});function JA(t){const e="àáâäæãåāăąçćčđďèéêëēėęěğǵḧîïíīįìłḿñńǹňôöòóœøōõőṕŕřßśšşșťțûüùúūǘůűųẃẍÿýžźż·/_,:;",n="aaaaaaaaaacccddeeeeeeeegghiiiiiilmnnnnoooooooooprrsssssttuuuuuuuuuwxyyzzz------",r=new RegExp(e.split("").join("|"),"g");return t.toString().replace(/[A-Z]/g,s=>`-${s}`).toLowerCase().replace(/\s+/g,"-").replace(r,s=>n.charAt(e.indexOf(s))).replace(/&/g,"-and-").replace(/[^\w\-]+/g,"").replace(/\-\-+/g,"-").replace(/^-+/,"").replace(/-+$/,"")}const XA={install(t,e){if(t.directive("motion",Bl()),t.component("Motion",YA),!e||e&&!e.excludePresets)for(const n in Vc){const r=Vc[n];t.directive(`motion-${JA(n)}`,Bl(r))}if(e&&e.directives)for(const n in e.directives){const r=e.directives[n];!r.initial&&__DEV__&&console.warn(`Your directive v-motion-${n} is missing initial variant!`),t.directive(`motion-${n}`,Bl(r))}}};/*!
  * vue-router v4.3.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const Kr=typeof document<"u";function ZA(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const Ee=Object.assign;function jl(t,e){const n={};for(const r in e){const s=e[r];n[r]=$t(s)?s.map(t):t(s)}return n}const ti=()=>{},$t=Array.isArray,a_=/#/g,eb=/&/g,tb=/\//g,nb=/=/g,rb=/\?/g,l_=/\+/g,sb=/%5B/g,ib=/%5D/g,c_=/%5E/g,ob=/%60/g,u_=/%7B/g,ab=/%7C/g,h_=/%7D/g,lb=/%20/g;function Ju(t){return encodeURI(""+t).replace(ab,"|").replace(sb,"[").replace(ib,"]")}function cb(t){return Ju(t).replace(u_,"{").replace(h_,"}").replace(c_,"^")}function Nc(t){return Ju(t).replace(l_,"%2B").replace(lb,"+").replace(a_,"%23").replace(eb,"%26").replace(ob,"`").replace(u_,"{").replace(h_,"}").replace(c_,"^")}function ub(t){return Nc(t).replace(nb,"%3D")}function hb(t){return Ju(t).replace(a_,"%23").replace(rb,"%3F")}function db(t){return t==null?"":hb(t).replace(tb,"%2F")}function vi(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const fb=/\/$/,pb=t=>t.replace(fb,"");function ql(t,e,n="/"){let r,s={},i="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(r=e.slice(0,l),i=e.slice(l+1,a>-1?a:e.length),s=t(i)),a>-1&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=yb(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:vi(o)}}function mb(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Tf(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function gb(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&cs(e.matched[r],n.matched[s])&&d_(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function cs(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function d_(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!_b(t[n],e[n]))return!1;return!0}function _b(t,e){return $t(t)?wf(t,e):$t(e)?wf(e,t):t===e}function wf(t,e){return $t(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function yb(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,a;for(o=0;o<r.length;o++)if(a=r[o],a!==".")if(a==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o).join("/")}var Ei;(function(t){t.pop="pop",t.push="push"})(Ei||(Ei={}));var ni;(function(t){t.back="back",t.forward="forward",t.unknown=""})(ni||(ni={}));function vb(t){if(!t)if(Kr){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),pb(t)}const Eb=/^[^#]+#/;function Tb(t,e){return t.replace(Eb,"#")+e}function wb(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const $a=()=>({left:window.scrollX,top:window.scrollY});function Ib(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=wb(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function If(t,e){return(history.state?history.state.position-e:-1)+t}const Mc=new Map;function Ab(t,e){Mc.set(t,e)}function bb(t){const e=Mc.get(t);return Mc.delete(t),e}let Rb=()=>location.protocol+"//"+location.host;function f_(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let a=s.includes(t.slice(i))?t.slice(i).length:1,l=s.slice(a);return l[0]!=="/"&&(l="/"+l),Tf(l,"")}return Tf(n,t)+r+s}function Sb(t,e,n,r){let s=[],i=[],o=null;const a=({state:d})=>{const f=f_(t,location),g=n.value,y=e.value;let v=0;if(d){if(n.value=f,e.value=d,o&&o===g){o=null;return}v=y?d.position-y.position:0}else r(f);s.forEach(E=>{E(n.value,g,{delta:v,type:Ei.pop,direction:v?v>0?ni.forward:ni.back:ni.unknown})})};function l(){o=n.value}function c(d){s.push(d);const f=()=>{const g=s.indexOf(d);g>-1&&s.splice(g,1)};return i.push(f),f}function u(){const{history:d}=window;d.state&&d.replaceState(Ee({},d.state,{scroll:$a()}),"")}function h(){for(const d of i)d();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:l,listen:c,destroy:h}}function Af(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?$a():null}}function Cb(t){const{history:e,location:n}=window,r={value:f_(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(l,c,u){const h=t.indexOf("#"),d=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+l:Rb()+t+l;try{e[u?"replaceState":"pushState"](c,"",d),s.value=c}catch(f){console.error(f),n[u?"replace":"assign"](d)}}function o(l,c){const u=Ee({},e.state,Af(s.value.back,l,s.value.forward,!0),c,{position:s.value.position});i(l,u,!0),r.value=l}function a(l,c){const u=Ee({},s.value,e.state,{forward:l,scroll:$a()});i(u.current,u,!0);const h=Ee({},Af(r.value,l,null),{position:u.position+1},c);i(l,h,!1),r.value=l}return{location:r,state:s,push:a,replace:o}}function Pb(t){t=vb(t);const e=Cb(t),n=Sb(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=Ee({location:"",base:t,go:r,createHref:Tb.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function xb(t){return typeof t=="string"||t&&typeof t=="object"}function p_(t){return typeof t=="string"||typeof t=="symbol"}const xn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},m_=Symbol("");var bf;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(bf||(bf={}));function us(t,e){return Ee(new Error,{type:t,[m_]:!0},e)}function un(t,e){return t instanceof Error&&m_ in t&&(e==null||!!(t.type&e))}const Rf="[^/]+?",Ob={sensitive:!1,strict:!1,start:!0,end:!0},kb=/[.+*?^${}()[\]/\\]/g;function Db(t,e){const n=Ee({},Ob,e),r=[];let s=n.start?"^":"";const i=[];for(const c of t){const u=c.length?[]:[90];n.strict&&!c.length&&(s+="/");for(let h=0;h<c.length;h++){const d=c[h];let f=40+(n.sensitive?.25:0);if(d.type===0)h||(s+="/"),s+=d.value.replace(kb,"\\$&"),f+=40;else if(d.type===1){const{value:g,repeatable:y,optional:v,regexp:E}=d;i.push({name:g,repeatable:y,optional:v});const I=E||Rf;if(I!==Rf){f+=10;try{new RegExp(`(${I})`)}catch(x){throw new Error(`Invalid custom RegExp for param "${g}" (${I}): `+x.message)}}let T=y?`((?:${I})(?:/(?:${I}))*)`:`(${I})`;h||(T=v&&c.length<2?`(?:/${T})`:"/"+T),v&&(T+="?"),s+=T,f+=20,v&&(f+=-8),y&&(f+=-20),I===".*"&&(f+=-50)}u.push(f)}r.push(u)}if(n.strict&&n.end){const c=r.length-1;r[c][r[c].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(c){const u=c.match(o),h={};if(!u)return null;for(let d=1;d<u.length;d++){const f=u[d]||"",g=i[d-1];h[g.name]=f&&g.repeatable?f.split("/"):f}return h}function l(c){let u="",h=!1;for(const d of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const f of d)if(f.type===0)u+=f.value;else if(f.type===1){const{value:g,repeatable:y,optional:v}=f,E=g in c?c[g]:"";if($t(E)&&!y)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const I=$t(E)?E.join("/"):E;if(!I)if(v)d.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${g}"`);u+=I}}return u||"/"}return{re:o,score:r,keys:i,parse:a,stringify:l}}function Vb(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function Nb(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=Vb(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(Sf(r))return 1;if(Sf(s))return-1}return s.length-r.length}function Sf(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const Mb={type:0,value:""},Lb=/[a-zA-Z0-9_]/;function Fb(t){if(!t)return[[]];if(t==="/")return[[Mb]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(f){throw new Error(`ERR (${n})/"${c}": ${f}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,l,c="",u="";function h(){c&&(n===0?i.push({type:0,value:c}):n===1||n===2||n===3?(i.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function d(){c+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:l==="/"?(c&&h(),o()):l===":"?(h(),n=1):d();break;case 4:d(),n=r;break;case 1:l==="("?n=2:Lb.test(l)?d():(h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=3:u+=l;break;case 3:h(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${c}"`),h(),o(),s}function Ub(t,e,n){const r=Db(Fb(t.path),n),s=Ee(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function $b(t,e){const n=[],r=new Map;e=xf({strict:!1,end:!0,sensitive:!1},e);function s(u){return r.get(u)}function i(u,h,d){const f=!d,g=Bb(u);g.aliasOf=d&&d.record;const y=xf(e,u),v=[g];if("alias"in u){const T=typeof u.alias=="string"?[u.alias]:u.alias;for(const x of T)v.push(Ee({},g,{components:d?d.record.components:g.components,path:x,aliasOf:d?d.record:g}))}let E,I;for(const T of v){const{path:x}=T;if(h&&x[0]!=="/"){const $=h.record.path,M=$[$.length-1]==="/"?"":"/";T.path=h.record.path+(x&&M+x)}if(E=Ub(T,h,y),d?d.alias.push(E):(I=I||E,I!==E&&I.alias.push(E),f&&u.name&&!Pf(E)&&o(u.name)),g.children){const $=g.children;for(let M=0;M<$.length;M++)i($[M],E,d&&d.children[M])}d=d||E,(E.record.components&&Object.keys(E.record.components).length||E.record.name||E.record.redirect)&&l(E)}return I?()=>{o(I)}:ti}function o(u){if(p_(u)){const h=r.get(u);h&&(r.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&r.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function l(u){let h=0;for(;h<n.length&&Nb(u,n[h])>=0&&(u.record.path!==n[h].record.path||!g_(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!Pf(u)&&r.set(u.record.name,u)}function c(u,h){let d,f={},g,y;if("name"in u&&u.name){if(d=r.get(u.name),!d)throw us(1,{location:u});y=d.record.name,f=Ee(Cf(h.params,d.keys.filter(I=>!I.optional).concat(d.parent?d.parent.keys.filter(I=>I.optional):[]).map(I=>I.name)),u.params&&Cf(u.params,d.keys.map(I=>I.name))),g=d.stringify(f)}else if(u.path!=null)g=u.path,d=n.find(I=>I.re.test(g)),d&&(f=d.parse(g),y=d.record.name);else{if(d=h.name?r.get(h.name):n.find(I=>I.re.test(h.path)),!d)throw us(1,{location:u,currentLocation:h});y=d.record.name,f=Ee({},h.params,u.params),g=d.stringify(f)}const v=[];let E=d;for(;E;)v.unshift(E.record),E=E.parent;return{name:y,path:g,params:f,matched:v,meta:qb(v)}}return t.forEach(u=>i(u)),{addRoute:i,resolve:c,removeRoute:o,getRoutes:a,getRecordMatcher:s}}function Cf(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function Bb(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:jb(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function jb(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function Pf(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function qb(t){return t.reduce((e,n)=>Ee(e,n.meta),{})}function xf(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function g_(t,e){return e.children.some(n=>n===t||g_(t,n))}function Hb(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(l_," "),o=i.indexOf("="),a=vi(o<0?i:i.slice(0,o)),l=o<0?null:vi(i.slice(o+1));if(a in e){let c=e[a];$t(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function Of(t){let e="";for(let n in t){const r=t[n];if(n=ub(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}($t(r)?r.map(i=>i&&Nc(i)):[r&&Nc(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function zb(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=$t(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const Kb=Symbol(""),kf=Symbol(""),Ba=Symbol(""),Xu=Symbol(""),Lc=Symbol("");function Ns(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function Mn(t,e,n,r,s,i=o=>o()){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((a,l)=>{const c=d=>{d===!1?l(us(4,{from:n,to:e})):d instanceof Error?l(d):xb(d)?l(us(2,{from:e,to:d})):(o&&r.enterCallbacks[s]===o&&typeof d=="function"&&o.push(d),a())},u=i(()=>t.call(r&&r.instances[s],e,n,c));let h=Promise.resolve(u);t.length<3&&(h=h.then(c)),h.catch(d=>l(d))})}function Hl(t,e,n,r,s=i=>i()){const i=[];for(const o of t)for(const a in o.components){let l=o.components[a];if(!(e!=="beforeRouteEnter"&&!o.instances[a]))if(Wb(l)){const u=(l.__vccOpts||l)[e];u&&i.push(Mn(u,n,r,o,a,s))}else{let c=l();i.push(()=>c.then(u=>{if(!u)return Promise.reject(new Error(`Couldn't resolve component "${a}" at "${o.path}"`));const h=ZA(u)?u.default:u;o.components[a]=h;const f=(h.__vccOpts||h)[e];return f&&Mn(f,n,r,o,a,s)()}))}}return i}function Wb(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function Df(t){const e=Lt(Ba),n=Lt(Xu),r=Ve(()=>e.resolve(ke(t.to))),s=Ve(()=>{const{matched:l}=r.value,{length:c}=l,u=l[c-1],h=n.matched;if(!u||!h.length)return-1;const d=h.findIndex(cs.bind(null,u));if(d>-1)return d;const f=Vf(l[c-2]);return c>1&&Vf(u)===f&&h[h.length-1].path!==f?h.findIndex(cs.bind(null,l[c-2])):d}),i=Ve(()=>s.value>-1&&Yb(n.params,r.value.params)),o=Ve(()=>s.value>-1&&s.value===n.matched.length-1&&d_(n.params,r.value.params));function a(l={}){return Qb(l)?e[ke(t.replace)?"replace":"push"](ke(t.to)).catch(ti):Promise.resolve()}return{route:r,href:Ve(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}const Gb=Du({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Df,setup(t,{slots:e}){const n=sr(Df(t)),{options:r}=Lt(Ba),s=Ve(()=>({[Nf(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Nf(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:mi("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),Ti=Gb;function Qb(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function Yb(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!$t(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function Vf(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Nf=(t,e,n)=>t??e??n,Jb=Du({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=Lt(Lc),s=Ve(()=>t.route||r.value),i=Lt(kf,0),o=Ve(()=>{let c=ke(i);const{matched:u}=s.value;let h;for(;(h=u[c])&&!h.components;)c++;return c}),a=Ve(()=>s.value.matched[o.value]);No(kf,Ve(()=>o.value+1)),No(Kb,a),No(Lc,s);const l=pe();return ut(()=>[l.value,a.value,t.name],([c,u,h],[d,f,g])=>{u&&(u.instances[h]=c,f&&f!==u&&c&&c===d&&(u.leaveGuards.size||(u.leaveGuards=f.leaveGuards),u.updateGuards.size||(u.updateGuards=f.updateGuards))),c&&u&&(!f||!cs(u,f)||!d)&&(u.enterCallbacks[h]||[]).forEach(y=>y(c))},{flush:"post"}),()=>{const c=s.value,u=t.name,h=a.value,d=h&&h.components[u];if(!d)return Mf(n.default,{Component:d,route:c});const f=h.props[u],g=f?f===!0?c.params:typeof f=="function"?f(c):f:null,v=mi(d,Ee({},g,e,{onVnodeUnmounted:E=>{E.component.isUnmounted&&(h.instances[u]=null)},ref:l}));return Mf(n.default,{Component:v,route:c})||v}}});function Mf(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const __=Jb;function Xb(t){const e=$b(t.routes,t),n=t.parseQuery||Hb,r=t.stringifyQuery||Of,s=t.history,i=Ns(),o=Ns(),a=Ns(),l=yE(xn);let c=xn;Kr&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=jl.bind(null,b=>""+b),h=jl.bind(null,db),d=jl.bind(null,vi);function f(b,B){let L,H;return p_(b)?(L=e.getRecordMatcher(b),H=B):H=b,e.addRoute(H,L)}function g(b){const B=e.getRecordMatcher(b);B&&e.removeRoute(B)}function y(){return e.getRoutes().map(b=>b.record)}function v(b){return!!e.getRecordMatcher(b)}function E(b,B){if(B=Ee({},B||l.value),typeof b=="string"){const m=ql(n,b,B.path),_=e.resolve({path:m.path},B),R=s.createHref(m.fullPath);return Ee(m,_,{params:d(_.params),hash:vi(m.hash),redirectedFrom:void 0,href:R})}let L;if(b.path!=null)L=Ee({},b,{path:ql(n,b.path,B.path).path});else{const m=Ee({},b.params);for(const _ in m)m[_]==null&&delete m[_];L=Ee({},b,{params:h(m)}),B.params=h(B.params)}const H=e.resolve(L,B),ve=b.hash||"";H.params=u(d(H.params));const Pe=mb(r,Ee({},b,{hash:cb(ve),path:H.path})),p=s.createHref(Pe);return Ee({fullPath:Pe,hash:ve,query:r===Of?zb(b.query):b.query||{}},H,{redirectedFrom:void 0,href:p})}function I(b){return typeof b=="string"?ql(n,b,l.value.path):Ee({},b)}function T(b,B){if(c!==b)return us(8,{from:B,to:b})}function x(b){return ae(b)}function $(b){return x(Ee(I(b),{replace:!0}))}function M(b){const B=b.matched[b.matched.length-1];if(B&&B.redirect){const{redirect:L}=B;let H=typeof L=="function"?L(b):L;return typeof H=="string"&&(H=H.includes("?")||H.includes("#")?H=I(H):{path:H},H.params={}),Ee({query:b.query,hash:b.hash,params:H.path!=null?{}:b.params},H)}}function ae(b,B){const L=c=E(b),H=l.value,ve=b.state,Pe=b.force,p=b.replace===!0,m=M(L);if(m)return ae(Ee(I(m),{state:typeof m=="object"?Ee({},ve,m.state):ve,force:Pe,replace:p}),B||L);const _=L;_.redirectedFrom=B;let R;return!Pe&&gb(r,H,L)&&(R=us(16,{to:_,from:H}),qt(H,H,!0,!1)),(R?Promise.resolve(R):ue(_,H)).catch(w=>un(w)?un(w,2)?w:Rn(w):ye(w,_,H)).then(w=>{if(w){if(un(w,2))return ae(Ee({replace:p},I(w.to),{state:typeof w.to=="object"?Ee({},ve,w.to.state):ve,force:Pe}),B||_)}else w=q(_,H,!0,p,ve);return Me(_,H,w),w})}function W(b,B){const L=T(b,B);return L?Promise.reject(L):Promise.resolve()}function ie(b){const B=jr.values().next().value;return B&&typeof B.runWithContext=="function"?B.runWithContext(b):b()}function ue(b,B){let L;const[H,ve,Pe]=Zb(b,B);L=Hl(H.reverse(),"beforeRouteLeave",b,B);for(const m of H)m.leaveGuards.forEach(_=>{L.push(Mn(_,b,B))});const p=W.bind(null,b,B);return L.push(p),it(L).then(()=>{L=[];for(const m of i.list())L.push(Mn(m,b,B));return L.push(p),it(L)}).then(()=>{L=Hl(ve,"beforeRouteUpdate",b,B);for(const m of ve)m.updateGuards.forEach(_=>{L.push(Mn(_,b,B))});return L.push(p),it(L)}).then(()=>{L=[];for(const m of Pe)if(m.beforeEnter)if($t(m.beforeEnter))for(const _ of m.beforeEnter)L.push(Mn(_,b,B));else L.push(Mn(m.beforeEnter,b,B));return L.push(p),it(L)}).then(()=>(b.matched.forEach(m=>m.enterCallbacks={}),L=Hl(Pe,"beforeRouteEnter",b,B,ie),L.push(p),it(L))).then(()=>{L=[];for(const m of o.list())L.push(Mn(m,b,B));return L.push(p),it(L)}).catch(m=>un(m,8)?m:Promise.reject(m))}function Me(b,B,L){a.list().forEach(H=>ie(()=>H(b,B,L)))}function q(b,B,L,H,ve){const Pe=T(b,B);if(Pe)return Pe;const p=B===xn,m=Kr?history.state:{};L&&(H||p?s.replace(b.fullPath,Ee({scroll:p&&m&&m.scroll},ve)):s.push(b.fullPath,ve)),l.value=b,qt(b,B,L,p),Rn()}let ge;function qe(){ge||(ge=s.listen((b,B,L)=>{if(!fo.listening)return;const H=E(b),ve=M(H);if(ve){ae(Ee(ve,{replace:!0}),H).catch(ti);return}c=H;const Pe=l.value;Kr&&Ab(If(Pe.fullPath,L.delta),$a()),ue(H,Pe).catch(p=>un(p,12)?p:un(p,2)?(ae(p.to,H).then(m=>{un(m,20)&&!L.delta&&L.type===Ei.pop&&s.go(-1,!1)}).catch(ti),Promise.reject()):(L.delta&&s.go(-L.delta,!1),ye(p,H,Pe))).then(p=>{p=p||q(H,Pe,!1),p&&(L.delta&&!un(p,8)?s.go(-L.delta,!1):L.type===Ei.pop&&un(p,20)&&s.go(-1,!1)),Me(H,Pe,p)}).catch(ti)}))}let Pt=Ns(),Le=Ns(),we;function ye(b,B,L){Rn(b);const H=Le.list();return H.length?H.forEach(ve=>ve(b,B,L)):console.error(b),Promise.reject(b)}function cn(){return we&&l.value!==xn?Promise.resolve():new Promise((b,B)=>{Pt.add([b,B])})}function Rn(b){return we||(we=!b,qe(),Pt.list().forEach(([B,L])=>b?L(b):B()),Pt.reset()),b}function qt(b,B,L,H){const{scrollBehavior:ve}=t;if(!Kr||!ve)return Promise.resolve();const Pe=!L&&bb(If(b.fullPath,0))||(H||!L)&&history.state&&history.state.scroll||null;return Lm().then(()=>ve(b,B,Pe)).then(p=>p&&Ib(p)).catch(p=>ye(p,b,B))}const yt=b=>s.go(b);let Br;const jr=new Set,fo={currentRoute:l,listening:!0,addRoute:f,removeRoute:g,hasRoute:v,getRoutes:y,resolve:E,options:t,push:x,replace:$,go:yt,back:()=>yt(-1),forward:()=>yt(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:Le.add,isReady:cn,install(b){const B=this;b.component("RouterLink",Ti),b.component("RouterView",__),b.config.globalProperties.$router=B,Object.defineProperty(b.config.globalProperties,"$route",{enumerable:!0,get:()=>ke(l)}),Kr&&!Br&&l.value===xn&&(Br=!0,x(s.location).catch(ve=>{}));const L={};for(const ve in xn)Object.defineProperty(L,ve,{get:()=>l.value[ve],enumerable:!0});b.provide(Ba,B),b.provide(Xu,Pm(L)),b.provide(Lc,l);const H=b.unmount;jr.add(b),b.unmount=function(){jr.delete(b),jr.size<1&&(c=xn,ge&&ge(),ge=null,l.value=xn,Br=!1,we=!1),H()}}};function it(b){return b.reduce((B,L)=>B.then(()=>ie(L)),Promise.resolve())}return fo}function Zb(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(c=>cs(c,a))?r.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(c=>cs(c,l))||s.push(l))}return[n,r,s]}function Hi(){return Lt(Ba)}function Zu(){return Lt(Xu)}var Lf={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const y_=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},eR=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],l=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},v_={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,l=s+2<t.length,c=l?t[s+2]:0,u=i>>2,h=(i&3)<<4|a>>4;let d=(a&15)<<2|c>>6,f=c&63;l||(f=64,o||(d=64)),r.push(n[u],n[h],n[d],n[f])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(y_(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):eR(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const c=s<t.length?n[t.charAt(s)]:64;++s;const h=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||c==null||h==null)throw new tR;const d=i<<2|a>>4;if(r.push(d),c!==64){const f=a<<4&240|c>>2;if(r.push(f),h!==64){const g=c<<6&192|h;r.push(g)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class tR extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const nR=function(t){const e=y_(t);return v_.encodeByteArray(e,!0)},na=function(t){return nR(t).replace(/\./g,"")},E_=function(t){try{return v_.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rR(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sR=()=>rR().__FIREBASE_DEFAULTS__,iR=()=>{if(typeof process>"u"||typeof Lf>"u")return;const t=Lf.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},oR=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&E_(t[1]);return e&&JSON.parse(e)},ja=()=>{try{return sR()||iR()||oR()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},T_=t=>{var e,n;return(n=(e=ja())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},aR=t=>{const e=T_(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},w_=()=>{var t;return(t=ja())===null||t===void 0?void 0:t.config},I_=t=>{var e;return(e=ja())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lR{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cR(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[na(JSON.stringify(n)),na(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function je(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function uR(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(je())}function hR(){var t;const e=(t=ja())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function dR(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function fR(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function pR(){const t=je();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function mR(){return!hR()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function A_(){try{return typeof indexedDB=="object"}catch{return!1}}function gR(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _R="FirebaseError";class bn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=_R,Object.setPrototypeOf(this,bn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,zi.prototype.create)}}class zi{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?yR(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new bn(s,a,r)}}function yR(t,e){return t.replace(vR,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const vR=/\{\$([^}]+)}/g;function ER(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function ra(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(Ff(i)&&Ff(o)){if(!ra(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Ff(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ki(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function TR(t,e){const n=new wR(t,e);return n.subscribe.bind(n)}class wR{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");IR(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=zl),s.error===void 0&&(s.error=zl),s.complete===void 0&&(s.complete=zl);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function IR(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function zl(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ye(t){return t&&t._delegate?t._delegate:t}class Pr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AR{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new lR;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(RR(e))try{this.getOrInitializeService({instanceIdentifier:pr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=pr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=pr){return this.instances.has(e)}getOptions(e=pr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:bR(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=pr){return this.component?this.component.multipleInstances?e:pr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function bR(t){return t===pr?void 0:t}function RR(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SR{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new AR(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var he;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(he||(he={}));const CR={debug:he.DEBUG,verbose:he.VERBOSE,info:he.INFO,warn:he.WARN,error:he.ERROR,silent:he.SILENT},PR=he.INFO,xR={[he.DEBUG]:"log",[he.VERBOSE]:"log",[he.INFO]:"info",[he.WARN]:"warn",[he.ERROR]:"error"},OR=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=xR[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class eh{constructor(e){this.name=e,this._logLevel=PR,this._logHandler=OR,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in he))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?CR[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,he.DEBUG,...e),this._logHandler(this,he.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,he.VERBOSE,...e),this._logHandler(this,he.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,he.INFO,...e),this._logHandler(this,he.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,he.WARN,...e),this._logHandler(this,he.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,he.ERROR,...e),this._logHandler(this,he.ERROR,...e)}}const kR=(t,e)=>e.some(n=>t instanceof n);let Uf,$f;function DR(){return Uf||(Uf=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function VR(){return $f||($f=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const b_=new WeakMap,Fc=new WeakMap,R_=new WeakMap,Kl=new WeakMap,th=new WeakMap;function NR(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Hn(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&b_.set(n,t)}).catch(()=>{}),th.set(e,t),e}function MR(t){if(Fc.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Fc.set(t,e)}let Uc={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Fc.get(t);if(e==="objectStoreNames")return t.objectStoreNames||R_.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Hn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function LR(t){Uc=t(Uc)}function FR(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Wl(this),e,...n);return R_.set(r,e.sort?e.sort():[e]),Hn(r)}:VR().includes(t)?function(...e){return t.apply(Wl(this),e),Hn(b_.get(this))}:function(...e){return Hn(t.apply(Wl(this),e))}}function UR(t){return typeof t=="function"?FR(t):(t instanceof IDBTransaction&&MR(t),kR(t,DR())?new Proxy(t,Uc):t)}function Hn(t){if(t instanceof IDBRequest)return NR(t);if(Kl.has(t))return Kl.get(t);const e=UR(t);return e!==t&&(Kl.set(t,e),th.set(e,t)),e}const Wl=t=>th.get(t);function $R(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=Hn(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Hn(o.result),l.oldVersion,l.newVersion,Hn(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{i&&l.addEventListener("close",()=>i()),s&&l.addEventListener("versionchange",c=>s(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const BR=["get","getKey","getAll","getAllKeys","count"],jR=["put","add","delete","clear"],Gl=new Map;function Bf(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Gl.get(e))return Gl.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=jR.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||BR.includes(n)))return;const i=async function(o,...a){const l=this.transaction(o,s?"readwrite":"readonly");let c=l.store;return r&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),s&&l.done]))[0]};return Gl.set(e,i),i}LR(t=>({...t,get:(e,n,r)=>Bf(e,n)||t.get(e,n,r),has:(e,n)=>!!Bf(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qR{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(HR(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function HR(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const $c="@firebase/app",jf="0.10.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xr=new eh("@firebase/app"),zR="@firebase/app-compat",KR="@firebase/analytics-compat",WR="@firebase/analytics",GR="@firebase/app-check-compat",QR="@firebase/app-check",YR="@firebase/auth",JR="@firebase/auth-compat",XR="@firebase/database",ZR="@firebase/database-compat",eS="@firebase/functions",tS="@firebase/functions-compat",nS="@firebase/installations",rS="@firebase/installations-compat",sS="@firebase/messaging",iS="@firebase/messaging-compat",oS="@firebase/performance",aS="@firebase/performance-compat",lS="@firebase/remote-config",cS="@firebase/remote-config-compat",uS="@firebase/storage",hS="@firebase/storage-compat",dS="@firebase/firestore",fS="@firebase/firestore-compat",pS="firebase",mS="10.11.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bc="[DEFAULT]",gS={[$c]:"fire-core",[zR]:"fire-core-compat",[WR]:"fire-analytics",[KR]:"fire-analytics-compat",[QR]:"fire-app-check",[GR]:"fire-app-check-compat",[YR]:"fire-auth",[JR]:"fire-auth-compat",[XR]:"fire-rtdb",[ZR]:"fire-rtdb-compat",[eS]:"fire-fn",[tS]:"fire-fn-compat",[nS]:"fire-iid",[rS]:"fire-iid-compat",[sS]:"fire-fcm",[iS]:"fire-fcm-compat",[oS]:"fire-perf",[aS]:"fire-perf-compat",[lS]:"fire-rc",[cS]:"fire-rc-compat",[uS]:"fire-gcs",[hS]:"fire-gcs-compat",[dS]:"fire-fst",[fS]:"fire-fst-compat","fire-js":"fire-js",[pS]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sa=new Map,_S=new Map,jc=new Map;function qf(t,e){try{t.container.addComponent(e)}catch(n){xr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function hs(t){const e=t.name;if(jc.has(e))return xr.debug(`There were multiple attempts to register component ${e}.`),!1;jc.set(e,t);for(const n of sa.values())qf(n,t);for(const n of _S.values())qf(n,t);return!0}function nh(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function hn(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yS={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},zn=new zi("app","Firebase",yS);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vS{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Pr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw zn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ws=mS;function S_(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Bc,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw zn.create("bad-app-name",{appName:String(s)});if(n||(n=w_()),!n)throw zn.create("no-options");const i=sa.get(s);if(i){if(ra(n,i.options)&&ra(r,i.config))return i;throw zn.create("duplicate-app",{appName:s})}const o=new SR(s);for(const l of jc.values())o.addComponent(l);const a=new vS(n,r,o);return sa.set(s,a),a}function C_(t=Bc){const e=sa.get(t);if(!e&&t===Bc&&w_())return S_();if(!e)throw zn.create("no-app",{appName:t});return e}function Kn(t,e,n){var r;let s=(r=gS[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),xr.warn(a.join(" "));return}hs(new Pr(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ES="firebase-heartbeat-database",TS=1,wi="firebase-heartbeat-store";let Ql=null;function P_(){return Ql||(Ql=$R(ES,TS,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(wi)}catch(n){console.warn(n)}}}}).catch(t=>{throw zn.create("idb-open",{originalErrorMessage:t.message})})),Ql}async function wS(t){try{const n=(await P_()).transaction(wi),r=await n.objectStore(wi).get(x_(t));return await n.done,r}catch(e){if(e instanceof bn)xr.warn(e.message);else{const n=zn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});xr.warn(n.message)}}}async function Hf(t,e){try{const r=(await P_()).transaction(wi,"readwrite");await r.objectStore(wi).put(e,x_(t)),await r.done}catch(n){if(n instanceof bn)xr.warn(n.message);else{const r=zn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});xr.warn(r.message)}}}function x_(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const IS=1024,AS=30*24*60*60*1e3;class bS{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new SS(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=zf();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=AS}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=zf(),{heartbeatsToSend:r,unsentEntries:s}=RS(this._heartbeatsCache.heartbeats),i=na(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function zf(){return new Date().toISOString().substring(0,10)}function RS(t,e=IS){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Kf(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Kf(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class SS{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return A_()?gR().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await wS(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Hf(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Hf(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Kf(t){return na(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CS(t){hs(new Pr("platform-logger",e=>new qR(e),"PRIVATE")),hs(new Pr("heartbeat",e=>new bS(e),"PRIVATE")),Kn($c,jf,t),Kn($c,jf,"esm2017"),Kn("fire-js","")}CS("");function rh(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function O_(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const PS=O_,k_=new zi("auth","Firebase",O_());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ia=new eh("@firebase/auth");function xS(t,...e){ia.logLevel<=he.WARN&&ia.warn(`Auth (${ws}): ${t}`,...e)}function Bo(t,...e){ia.logLevel<=he.ERROR&&ia.error(`Auth (${ws}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sn(t,...e){throw ih(t,...e)}function Ut(t,...e){return ih(t,...e)}function sh(t,e,n){const r=Object.assign(Object.assign({},PS()),{[e]:n});return new zi("auth","Firebase",r).create(e,{appName:t.name})}function Sr(t){return sh(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function OS(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&sn(t,"argument-error"),sh(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function ih(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return k_.create(t,...e)}function Y(t,e,...n){if(!t)throw ih(e,...n)}function dn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Bo(e),new Error(e)}function vn(t,e){t||dn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qc(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function kS(){return Wf()==="http:"||Wf()==="https:"}function Wf(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DS(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(kS()||dR()||"connection"in navigator)?navigator.onLine:!0}function VS(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wi{constructor(e,n){this.shortDelay=e,this.longDelay=n,vn(n>e,"Short delay should be less than long delay!"),this.isMobile=uR()||fR()}get(){return DS()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oh(t,e){vn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D_{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;dn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;dn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;dn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NS={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MS=new Wi(3e4,6e4);function ah(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Is(t,e,n,r,s={}){return V_(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=Ki(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),D_.fetch()(N_(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},i))})}async function V_(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},NS),e);try{const s=new FS(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Io(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Io(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Io(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw Io(t,"user-disabled",o);const u=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw sh(t,u,c);sn(t,u)}}catch(s){if(s instanceof bn)throw s;sn(t,"network-request-failed",{message:String(s)})}}async function LS(t,e,n,r,s={}){const i=await Is(t,e,n,r,s);return"mfaPendingCredential"in i&&sn(t,"multi-factor-auth-required",{_serverResponse:i}),i}function N_(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?oh(t.config,s):`${t.config.apiScheme}://${s}`}class FS{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Ut(this.auth,"network-request-failed")),MS.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Io(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=Ut(t,e,r);return s.customData._tokenResponse=n,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function US(t,e){return Is(t,"POST","/v1/accounts:delete",e)}async function M_(t,e){return Is(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ri(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function $S(t,e=!1){const n=Ye(t),r=await n.getIdToken(e),s=lh(r);Y(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:ri(Yl(s.auth_time)),issuedAtTime:ri(Yl(s.iat)),expirationTime:ri(Yl(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Yl(t){return Number(t)*1e3}function lh(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Bo("JWT malformed, contained fewer than 3 sections"),null;try{const s=E_(n);return s?JSON.parse(s):(Bo("Failed to decode base64 JWT payload"),null)}catch(s){return Bo("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Gf(t){const e=lh(t);return Y(e,"internal-error"),Y(typeof e.exp<"u","internal-error"),Y(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ii(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof bn&&BS(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function BS({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jS{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hc{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ri(this.lastLoginAt),this.creationTime=ri(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oa(t){var e;const n=t.auth,r=await t.getIdToken(),s=await Ii(t,M_(n,{idToken:r}));Y(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?L_(i.providerUserInfo):[],a=HS(t.providerData,o),l=t.isAnonymous,c=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),u=l?c:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new Hc(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function qS(t){const e=Ye(t);await oa(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function HS(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function L_(t){return t.map(e=>{var{providerId:n}=e,r=rh(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zS(t,e){const n=await V_(t,{},async()=>{const r=Ki({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=N_(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",D_.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function KS(t,e){return Is(t,"POST","/v2/accounts:revokeToken",ah(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rs{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Y(e.idToken,"internal-error"),Y(typeof e.idToken<"u","internal-error"),Y(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Gf(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){Y(e.length!==0,"internal-error");const n=Gf(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(Y(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await zS(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new rs;return r&&(Y(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(Y(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(Y(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new rs,this.toJSON())}_performRefresh(){return dn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function On(t,e){Y(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class fn{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=rh(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new jS(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Hc(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await Ii(this,this.stsTokenManager.getToken(this.auth,e));return Y(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return $S(this,e)}reload(){return qS(this)}_assign(e){this!==e&&(Y(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new fn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){Y(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await oa(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(hn(this.auth.app))return Promise.reject(Sr(this.auth));const e=await this.getIdToken();return await Ii(this,US(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,a,l,c,u;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(s=n.email)!==null&&s!==void 0?s:void 0,f=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,g=(o=n.photoURL)!==null&&o!==void 0?o:void 0,y=(a=n.tenantId)!==null&&a!==void 0?a:void 0,v=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,E=(c=n.createdAt)!==null&&c!==void 0?c:void 0,I=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:T,emailVerified:x,isAnonymous:$,providerData:M,stsTokenManager:ae}=n;Y(T&&ae,e,"internal-error");const W=rs.fromJSON(this.name,ae);Y(typeof T=="string",e,"internal-error"),On(h,e.name),On(d,e.name),Y(typeof x=="boolean",e,"internal-error"),Y(typeof $=="boolean",e,"internal-error"),On(f,e.name),On(g,e.name),On(y,e.name),On(v,e.name),On(E,e.name),On(I,e.name);const ie=new fn({uid:T,auth:e,email:d,emailVerified:x,displayName:h,isAnonymous:$,photoURL:g,phoneNumber:f,tenantId:y,stsTokenManager:W,createdAt:E,lastLoginAt:I});return M&&Array.isArray(M)&&(ie.providerData=M.map(ue=>Object.assign({},ue))),v&&(ie._redirectEventId=v),ie}static async _fromIdTokenResponse(e,n,r=!1){const s=new rs;s.updateFromServerResponse(n);const i=new fn({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await oa(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];Y(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?L_(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),a=new rs;a.updateFromIdToken(r);const l=new fn({uid:s.localId,auth:e,stsTokenManager:a,isAnonymous:o}),c={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Hc(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(l,c),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qf=new Map;function pn(t){vn(t instanceof Function,"Expected a class definition");let e=Qf.get(t);return e?(vn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Qf.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F_{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}F_.type="NONE";const Yf=F_;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jo(t,e,n){return`firebase:${t}:${e}:${n}`}class ss{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=jo(this.userKey,s.apiKey,i),this.fullPersistenceKey=jo("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?fn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new ss(pn(Yf),e,r);const s=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let i=s[0]||pn(Yf);const o=jo(r,e.config.apiKey,e.name);let a=null;for(const c of n)try{const u=await c._get(o);if(u){const h=fn._fromJSON(e,u);c!==i&&(a=h),i=c;break}}catch{}const l=s.filter(c=>c._shouldAllowMigration);return!i._shouldAllowMigration||!l.length?new ss(i,e,r):(i=l[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==i)try{await c._remove(o)}catch{}})),new ss(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jf(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(B_(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(U_(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(q_(e))return"Blackberry";if(H_(e))return"Webos";if(ch(e))return"Safari";if((e.includes("chrome/")||$_(e))&&!e.includes("edge/"))return"Chrome";if(j_(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function U_(t=je()){return/firefox\//i.test(t)}function ch(t=je()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function $_(t=je()){return/crios\//i.test(t)}function B_(t=je()){return/iemobile/i.test(t)}function j_(t=je()){return/android/i.test(t)}function q_(t=je()){return/blackberry/i.test(t)}function H_(t=je()){return/webos/i.test(t)}function qa(t=je()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function WS(t=je()){var e;return qa(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function GS(){return pR()&&document.documentMode===10}function z_(t=je()){return qa(t)||j_(t)||H_(t)||q_(t)||/windows phone/i.test(t)||B_(t)}function QS(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function K_(t,e=[]){let n;switch(t){case"Browser":n=Jf(je());break;case"Worker":n=`${Jf(je())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ws}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YS{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,a)=>{try{const l=e(i);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function JS(t,e={}){return Is(t,"GET","/v2/passwordPolicy",ah(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XS=6;class ZS{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:XS,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(r=l.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(s=l.containsLowercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(i=l.containsUppercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e1{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Xf(this),this.idTokenSubscription=new Xf(this),this.beforeStateQueue=new YS(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=k_,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=pn(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await ss.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await M_(this,{idToken:e}),r=await fn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(hn(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(s=l.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return Y(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await oa(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=VS()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(hn(this.app))return Promise.reject(Sr(this));const n=e?Ye(e):null;return n&&Y(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&Y(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return hn(this.app)?Promise.reject(Sr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return hn(this.app)?Promise.reject(Sr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(pn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await JS(this),n=new ZS(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new zi("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await KS(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&pn(e)||this._popupRedirectResolver;Y(n,this,"argument-error"),this.redirectPersistenceManager=await ss.create(this,[pn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(Y(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,r,s);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Y(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=K_(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&xS(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Ha(t){return Ye(t)}class Xf{constructor(e){this.auth=e,this.observer=null,this.addObserver=TR(n=>this.observer=n)}get next(){return Y(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let uh={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function t1(t){uh=t}function n1(t){return uh.loadJS(t)}function r1(){return uh.gapiScript}function s1(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function i1(t,e){const n=nh(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(ra(i,e??{}))return s;sn(s,"already-initialized")}return n.initialize({options:e})}function o1(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(pn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function a1(t,e,n){const r=Ha(t);Y(r._canInitEmulator,r,"emulator-config-failed"),Y(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!!(n!=null&&n.disableWarnings),i=W_(e),{host:o,port:a}=l1(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${i}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||c1()}function W_(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function l1(t){const e=W_(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Zf(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:Zf(o)}}}function Zf(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function c1(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G_{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return dn("not implemented")}_getIdTokenResponse(e){return dn("not implemented")}_linkToIdToken(e,n){return dn("not implemented")}_getReauthenticationResolver(e){return dn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function is(t,e){return LS(t,"POST","/v1/accounts:signInWithIdp",ah(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const u1="http://localhost";class Or extends G_{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Or(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):sn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=rh(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new Or(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return is(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,is(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,is(e,n)}buildRequest(){const e={requestUri:u1,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Ki(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hh{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gi extends hh{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ln extends Gi{constructor(){super("facebook.com")}static credential(e){return Or._fromParams({providerId:Ln.PROVIDER_ID,signInMethod:Ln.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ln.credentialFromTaggedObject(e)}static credentialFromError(e){return Ln.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ln.credential(e.oauthAccessToken)}catch{return null}}}Ln.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ln.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fn extends Gi{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Or._fromParams({providerId:Fn.PROVIDER_ID,signInMethod:Fn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Fn.credentialFromTaggedObject(e)}static credentialFromError(e){return Fn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Fn.credential(n,r)}catch{return null}}}Fn.GOOGLE_SIGN_IN_METHOD="google.com";Fn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qt extends Gi{constructor(){super("github.com")}static credential(e){return Or._fromParams({providerId:Qt.PROVIDER_ID,signInMethod:Qt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Qt.credentialFromTaggedObject(e)}static credentialFromError(e){return Qt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Qt.credential(e.oauthAccessToken)}catch{return null}}}Qt.GITHUB_SIGN_IN_METHOD="github.com";Qt.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Un extends Gi{constructor(){super("twitter.com")}static credential(e,n){return Or._fromParams({providerId:Un.PROVIDER_ID,signInMethod:Un.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Un.credentialFromTaggedObject(e)}static credentialFromError(e){return Un.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Un.credential(n,r)}catch{return null}}}Un.TWITTER_SIGN_IN_METHOD="twitter.com";Un.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ds{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await fn._fromIdTokenResponse(e,r,s),o=ep(r);return new ds({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=ep(r);return new ds({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function ep(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aa extends bn{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,aa.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new aa(e,n,r,s)}}function Q_(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?aa._fromErrorAndOperation(t,i,e,r):i})}async function h1(t,e,n=!1){const r=await Ii(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return ds._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function d1(t,e,n=!1){const{auth:r}=t;if(hn(r.app))return Promise.reject(Sr(r));const s="reauthenticate";try{const i=await Ii(t,Q_(r,s,e,t),n);Y(i.idToken,r,"internal-error");const o=lh(i.idToken);Y(o,r,"internal-error");const{sub:a}=o;return Y(t.uid===a,r,"user-mismatch"),ds._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&sn(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function f1(t,e,n=!1){if(hn(t.app))return Promise.reject(Sr(t));const r="signIn",s=await Q_(t,r,e),i=await ds._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}function p1(t,e,n,r){return Ye(t).onIdTokenChanged(e,n,r)}function m1(t,e,n){return Ye(t).beforeAuthStateChanged(e,n)}function As(t,e,n,r){return Ye(t).onAuthStateChanged(e,n,r)}function g1(t){return Ye(t).signOut()}const la="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y_{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(la,"1"),this.storage.removeItem(la),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _1(){const t=je();return ch(t)||qa(t)}const y1=1e3,v1=10;class J_ extends Y_{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=_1()&&QS(),this.fallbackToPolling=z_(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);GS()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,v1):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},y1)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}J_.type="LOCAL";const E1=J_;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X_ extends Y_{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}X_.type="SESSION";const Z_=X_;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function T1(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class za{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new za(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async c=>c(n.origin,i)),l=await T1(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}za.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dh(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w1{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,l)=>{const c=dh("",20);s.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(h){const d=h;if(d.data.eventId===c)switch(d.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(d.data.response);break;default:clearTimeout(u),clearTimeout(i),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zt(){return window}function I1(t){Zt().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ey(){return typeof Zt().WorkerGlobalScope<"u"&&typeof Zt().importScripts=="function"}async function A1(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function b1(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function R1(){return ey()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ty="firebaseLocalStorageDb",S1=1,ca="firebaseLocalStorage",ny="fbase_key";class Qi{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Ka(t,e){return t.transaction([ca],e?"readwrite":"readonly").objectStore(ca)}function C1(){const t=indexedDB.deleteDatabase(ty);return new Qi(t).toPromise()}function zc(){const t=indexedDB.open(ty,S1);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(ca,{keyPath:ny})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(ca)?e(r):(r.close(),await C1(),e(await zc()))})})}async function tp(t,e,n){const r=Ka(t,!0).put({[ny]:e,value:n});return new Qi(r).toPromise()}async function P1(t,e){const n=Ka(t,!1).get(e),r=await new Qi(n).toPromise();return r===void 0?null:r.value}function np(t,e){const n=Ka(t,!0).delete(e);return new Qi(n).toPromise()}const x1=800,O1=3;class ry{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await zc(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>O1)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return ey()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=za._getInstance(R1()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await A1(),!this.activeServiceWorker)return;this.sender=new w1(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||b1()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await zc();return await tp(e,la,"1"),await np(e,la),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>tp(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>P1(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>np(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Ka(s,!1).getAll();return new Qi(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),x1)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}ry.type="LOCAL";const k1=ry;new Wi(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sy(t,e){return e?pn(e):(Y(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fh extends G_{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return is(e,this._buildIdpRequest())}_linkToIdToken(e,n){return is(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return is(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function D1(t){return f1(t.auth,new fh(t),t.bypassAuthState)}function V1(t){const{auth:e,user:n}=t;return Y(n,e,"internal-error"),d1(n,new fh(t),t.bypassAuthState)}async function N1(t){const{auth:e,user:n}=t;return Y(n,e,"internal-error"),h1(n,new fh(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iy{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return D1;case"linkViaPopup":case"linkViaRedirect":return N1;case"reauthViaPopup":case"reauthViaRedirect":return V1;default:sn(this.auth,"internal-error")}}resolve(e){vn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){vn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M1=new Wi(2e3,1e4);async function oy(t,e,n){if(hn(t.app))return Promise.reject(Ut(t,"operation-not-supported-in-this-environment"));const r=Ha(t);OS(t,e,hh);const s=sy(r,n);return new Er(r,"signInViaPopup",e,s).executeNotNull()}class Er extends iy{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Er.currentPopupAction&&Er.currentPopupAction.cancel(),Er.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Y(e,this.auth,"internal-error"),e}async onExecution(){vn(this.filter.length===1,"Popup operations only handle one event");const e=dh();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Ut(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Ut(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Er.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ut(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,M1.get())};e()}}Er.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L1="pendingRedirect",qo=new Map;class F1 extends iy{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=qo.get(this.auth._key());if(!e){try{const r=await U1(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}qo.set(this.auth._key(),e)}return this.bypassAuthState||qo.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function U1(t,e){const n=j1(e),r=B1(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function $1(t,e){qo.set(t._key(),e)}function B1(t){return pn(t._redirectPersistence)}function j1(t){return jo(L1,t.config.apiKey,t.name)}async function q1(t,e,n=!1){if(hn(t.app))return Promise.reject(Sr(t));const r=Ha(t),s=sy(r,e),o=await new F1(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H1=10*60*1e3;class z1{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!K1(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!ay(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Ut(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=H1&&this.cachedEventUids.clear(),this.cachedEventUids.has(rp(e))}saveEventToCache(e){this.cachedEventUids.add(rp(e)),this.lastProcessedEventTime=Date.now()}}function rp(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function ay({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function K1(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return ay(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function W1(t,e={}){return Is(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const G1=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Q1=/^https?/;async function Y1(t){if(t.config.emulator)return;const{authorizedDomains:e}=await W1(t);for(const n of e)try{if(J1(n))return}catch{}sn(t,"unauthorized-domain")}function J1(t){const e=qc(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!Q1.test(n))return!1;if(G1.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X1=new Wi(3e4,6e4);function sp(){const t=Zt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Z1(t){return new Promise((e,n)=>{var r,s,i;function o(){sp(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{sp(),n(Ut(t,"network-request-failed"))},timeout:X1.get()})}if(!((s=(r=Zt().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=Zt().gapi)===null||i===void 0)&&i.load)o();else{const a=s1("iframefcb");return Zt()[a]=()=>{gapi.load?o():n(Ut(t,"network-request-failed"))},n1(`${r1()}?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Ho=null,e})}let Ho=null;function eC(t){return Ho=Ho||Z1(t),Ho}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tC=new Wi(5e3,15e3),nC="__/auth/iframe",rC="emulator/auth/iframe",sC={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},iC=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function oC(t){const e=t.config;Y(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?oh(e,rC):`https://${t.config.authDomain}/${nC}`,r={apiKey:e.apiKey,appName:t.name,v:ws},s=iC.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Ki(r).slice(1)}`}async function aC(t){const e=await eC(t),n=Zt().gapi;return Y(n,t,"internal-error"),e.open({where:document.body,url:oC(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:sC,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=Ut(t,"network-request-failed"),a=Zt().setTimeout(()=>{i(o)},tC.get());function l(){Zt().clearTimeout(a),s(r)}r.ping(l).then(l,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lC={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},cC=500,uC=600,hC="_blank",dC="http://localhost";class ip{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function fC(t,e,n,r=cC,s=uC){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},lC),{width:r.toString(),height:s.toString(),top:i,left:o}),c=je().toLowerCase();n&&(a=$_(c)?hC:n),U_(c)&&(e=e||dC,l.scrollbars="yes");const u=Object.entries(l).reduce((d,[f,g])=>`${d}${f}=${g},`,"");if(WS(c)&&a!=="_self")return pC(e||"",a),new ip(null);const h=window.open(e||"",a,u);Y(h,t,"popup-blocked");try{h.focus()}catch{}return new ip(h)}function pC(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mC="__/auth/handler",gC="emulator/auth/handler",_C=encodeURIComponent("fac");async function op(t,e,n,r,s,i){Y(t.config.authDomain,t,"auth-domain-config-required"),Y(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:ws,eventId:s};if(e instanceof hh){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",ER(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,h]of Object.entries(i||{}))o[u]=h}if(e instanceof Gi){const u=e.getScopes().filter(h=>h!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const l=await t._getAppCheckToken(),c=l?`#${_C}=${encodeURIComponent(l)}`:"";return`${yC(t)}?${Ki(a).slice(1)}${c}`}function yC({config:t}){return t.emulator?oh(t,gC):`https://${t.authDomain}/${mC}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jl="webStorageSupport";class vC{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Z_,this._completeRedirectFn=q1,this._overrideRedirectResult=$1}async _openPopup(e,n,r,s){var i;vn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await op(e,n,r,qc(),s);return fC(e,o,dh())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await op(e,n,r,qc(),s);return I1(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(vn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await aC(e),r=new z1(e);return n.register("authEvent",s=>(Y(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Jl,{type:Jl},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Jl];o!==void 0&&n(!!o),sn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Y1(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return z_()||ch()||qa()}}const EC=vC;var ap="@firebase/auth",lp="1.7.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TC{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){Y(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wC(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function IC(t){hs(new Pr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;Y(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:K_(t)},c=new e1(r,s,i,l);return o1(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),hs(new Pr("auth-internal",e=>{const n=Ha(e.getProvider("auth").getImmediate());return(r=>new TC(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Kn(ap,lp,wC(t)),Kn(ap,lp,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AC=5*60,bC=I_("authIdTokenMaxAge")||AC;let cp=null;const RC=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>bC)return;const s=n==null?void 0:n.token;cp!==s&&(cp=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function Xn(t=C_()){const e=nh(t,"auth");if(e.isInitialized())return e.getImmediate();const n=i1(t,{popupRedirectResolver:EC,persistence:[k1,E1,Z_]}),r=I_("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=RC(i.toString());m1(n,o,()=>o(n.currentUser)),p1(n,a=>o(a))}}const s=T_("auth");return s&&a1(n,`http://${s}`),n}function SC(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}t1({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=Ut("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",SC().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});IC("Browser");const CC={class:"text-[--main-white] flex justify-between pt-8 md:pt-14 sm:px-[1%] lg:px-[7%]"},PC={class:"flex gap-2 justify-center items-center"},xC=P("i",{class:"fa-regular fa-face-surprise text-yellow-400 text-lg duration-100 animate-bounce"},null,-1),OC=["src"],kC=P("i",{class:"fa-brands fa-github"},null,-1),DC=P("h2",null,"Login",-1),VC=[kC,DC],NC={key:0,class:"fixed opacity"},MC={class:"bg-[rgba(22,20,22,255)] border border-[#53494954] p-2 flex flex-col gap-2 w-64 rounded-lg text-base font-medium text-[--text2-color]"},LC=P("div",null,"Create",-1),FC=P("i",{class:"fa-solid fa-plus text-[#999595]"},null,-1),UC={class:"flex flex-col gap-2"},$C=P("div",{class:"border border-[#53494954]"},null,-1),BC=P("div",null,"Logout",-1),jC=P("i",{class:"fa-solid fa-unlock text-[#999595]"},null,-1),qC=[BC,jC],HC={__name:"Header",setup(t){const e=pe(!1),n=pe(!1),r=Hi(),s=Xn();let i=[];St(()=>{As(s,l=>{if(l){n.value=!0,l.displayName;let c=l.photoURL;i.value=c}else n.value=!1})});const o=()=>{const l=new Qt;oy(Xn(),l).then(c=>{console.log(c.user),displayNames(),r.push("/home")}).catch(c=>{})},a=()=>{g1(s).then(()=>{r.push("/")})};return(l,c)=>{const u=VE("motion-slide-top");return te(),re("header",CC,[P("div",PC,[Oe(ke(Ti),{to:"/",class:"text-3xl font-bold"},{default:ts(()=>[Mu("BestTakes")]),_:1}),xC]),n.value?(te(),re("button",{key:0,onClick:c[0]||(c[0]=h=>e.value=!e.value),class:"rounded-full border-green-500 border-2"},[P("img",{src:ke(i).value,alt:"",srcset:"",class:"w-14 rounded-full"},null,8,OC)])):(te(),re("button",{key:1,onClick:o,class:"bg-transparent flex px-3 lg:px-5 py-2 duration-300 hover:bg-zinc-700 gap-2 justify-center items-center border rounded-md 2xl:text-[17px]"},VC)),Yr((te(),ug(Fu,{name:"nav",class:"right-0 mt-16 px-[17%] z-10"},{default:ts(()=>[e.value?(te(),re("div",NC,[P("div",MC,[Oe(ke(Ti),{to:"/create",onClick:c[1]||(c[1]=h=>e.value=!e.value),class:"flex justify-between items-center gap-4 hover:bg-[#09090B] px-4 py-2 rounded-md"},{default:ts(()=>[LC,FC]),_:1}),P("div",UC,[$C,n.value?(te(),re("button",{key:0,to:"/create",onClick:c[2]||(c[2]=h=>(a(),e.value=!e.value)),class:"flex justify-between items-center gap-4 hover:bg-[#09090B] px-4 py-2 rounded-md"},qC)):Jn("",!0)])])])):Jn("",!0)]),_:1})),[[u]])])}}};var zC=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},N,ph=ph||{},X=zC||self;function Wa(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Yi(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function KC(t){return Object.prototype.hasOwnProperty.call(t,Xl)&&t[Xl]||(t[Xl]=++WC)}var Xl="closure_uid_"+(1e9*Math.random()>>>0),WC=0;function GC(t,e,n){return t.call.apply(t.bind,arguments)}function QC(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var s=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(s,r),t.apply(e,s)}}return function(){return t.apply(e,arguments)}}function ht(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?ht=GC:ht=QC,ht.apply(null,arguments)}function Ao(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function Xe(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(r,s,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[s].apply(r,o)}}function ir(){this.s=this.s,this.o=this.o}var YC=0;ir.prototype.s=!1;ir.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),YC!=0)&&KC(this)};ir.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const ly=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function mh(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function up(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(Wa(r)){const s=t.length||0,i=r.length||0;t.length=s+i;for(let o=0;o<i;o++)t[s+o]=r[o]}else t.push(r)}}function dt(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}dt.prototype.h=function(){this.defaultPrevented=!0};var JC=function(){if(!X.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{const n=()=>{};X.addEventListener("test",n,e),X.removeEventListener("test",n,e)}catch{}return t}();function Ai(t){return/^[\s\xa0]*$/.test(t)}function Ga(){var t=X.navigator;return t&&(t=t.userAgent)?t:""}function Yt(t){return Ga().indexOf(t)!=-1}function gh(t){return gh[" "](t),t}gh[" "]=function(){};function XC(t,e){var n=HP;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var ZC=Yt("Opera"),fs=Yt("Trident")||Yt("MSIE"),cy=Yt("Edge"),Kc=cy||fs,uy=Yt("Gecko")&&!(Ga().toLowerCase().indexOf("webkit")!=-1&&!Yt("Edge"))&&!(Yt("Trident")||Yt("MSIE"))&&!Yt("Edge"),eP=Ga().toLowerCase().indexOf("webkit")!=-1&&!Yt("Edge");function hy(){var t=X.document;return t?t.documentMode:void 0}var Wc;e:{var Zl="",ec=function(){var t=Ga();if(uy)return/rv:([^\);]+)(\)|;)/.exec(t);if(cy)return/Edge\/([\d\.]+)/.exec(t);if(fs)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(eP)return/WebKit\/(\S+)/.exec(t);if(ZC)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(ec&&(Zl=ec?ec[1]:""),fs){var tc=hy();if(tc!=null&&tc>parseFloat(Zl)){Wc=String(tc);break e}}Wc=Zl}var Gc;if(X.document&&fs){var hp=hy();Gc=hp||parseInt(Wc,10)||void 0}else Gc=void 0;var tP=Gc;function bi(t,e){if(dt.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(uy){e:{try{gh(e.nodeName);var s=!0;break e}catch{}s=!1}s||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:nP[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&bi.$.h.call(this)}}Xe(bi,dt);var nP={2:"touch",3:"pen",4:"mouse"};bi.prototype.h=function(){bi.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Ji="closure_listenable_"+(1e6*Math.random()|0),rP=0;function sP(t,e,n,r,s){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.la=s,this.key=++rP,this.fa=this.ia=!1}function Qa(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function _h(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function iP(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function dy(t){const e={};for(const n in t)e[n]=t[n];return e}const dp="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function fy(t,e){let n,r;for(let s=1;s<arguments.length;s++){r=arguments[s];for(n in r)t[n]=r[n];for(let i=0;i<dp.length;i++)n=dp[i],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function Ya(t){this.src=t,this.g={},this.h=0}Ya.prototype.add=function(t,e,n,r,s){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=Yc(t,e,r,s);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new sP(e,this.src,i,!!r,s),e.ia=n,t.push(e)),e};function Qc(t,e){var n=e.type;if(n in t.g){var r=t.g[n],s=ly(r,e),i;(i=0<=s)&&Array.prototype.splice.call(r,s,1),i&&(Qa(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Yc(t,e,n,r){for(var s=0;s<t.length;++s){var i=t[s];if(!i.fa&&i.listener==e&&i.capture==!!n&&i.la==r)return s}return-1}var yh="closure_lm_"+(1e6*Math.random()|0),nc={};function py(t,e,n,r,s){if(r&&r.once)return gy(t,e,n,r,s);if(Array.isArray(e)){for(var i=0;i<e.length;i++)py(t,e[i],n,r,s);return null}return n=Th(n),t&&t[Ji]?t.O(e,n,Yi(r)?!!r.capture:!!r,s):my(t,e,n,!1,r,s)}function my(t,e,n,r,s,i){if(!e)throw Error("Invalid event type");var o=Yi(s)?!!s.capture:!!s,a=Eh(t);if(a||(t[yh]=a=new Ya(t)),n=a.add(e,n,r,o,i),n.proxy)return n;if(r=oP(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)JC||(s=o),s===void 0&&(s=!1),t.addEventListener(e.toString(),r,s);else if(t.attachEvent)t.attachEvent(yy(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function oP(){function t(n){return e.call(t.src,t.listener,n)}const e=aP;return t}function gy(t,e,n,r,s){if(Array.isArray(e)){for(var i=0;i<e.length;i++)gy(t,e[i],n,r,s);return null}return n=Th(n),t&&t[Ji]?t.P(e,n,Yi(r)?!!r.capture:!!r,s):my(t,e,n,!0,r,s)}function _y(t,e,n,r,s){if(Array.isArray(e))for(var i=0;i<e.length;i++)_y(t,e[i],n,r,s);else r=Yi(r)?!!r.capture:!!r,n=Th(n),t&&t[Ji]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=Yc(i,n,r,s),-1<n&&(Qa(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete t.g[e],t.h--)))):t&&(t=Eh(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Yc(e,n,r,s)),(n=-1<t?e[t]:null)&&vh(n))}function vh(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[Ji])Qc(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(yy(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=Eh(e))?(Qc(n,t),n.h==0&&(n.src=null,e[yh]=null)):Qa(t)}}}function yy(t){return t in nc?nc[t]:nc[t]="on"+t}function aP(t,e){if(t.fa)t=!0;else{e=new bi(e,this);var n=t.listener,r=t.la||t.src;t.ia&&vh(t),t=n.call(r,e)}return t}function Eh(t){return t=t[yh],t instanceof Ya?t:null}var rc="__closure_events_fn_"+(1e9*Math.random()>>>0);function Th(t){return typeof t=="function"?t:(t[rc]||(t[rc]=function(e){return t.handleEvent(e)}),t[rc])}function Je(){ir.call(this),this.i=new Ya(this),this.S=this,this.J=null}Xe(Je,ir);Je.prototype[Ji]=!0;Je.prototype.removeEventListener=function(t,e,n,r){_y(this,t,e,n,r)};function rt(t,e){var n,r=t.J;if(r)for(n=[];r;r=r.J)n.push(r);if(t=t.S,r=e.type||e,typeof e=="string")e=new dt(e,t);else if(e instanceof dt)e.target=e.target||t;else{var s=e;e=new dt(r,t),fy(e,s)}if(s=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];s=bo(o,r,!0,e)&&s}if(o=e.g=t,s=bo(o,r,!0,e)&&s,s=bo(o,r,!1,e)&&s,n)for(i=0;i<n.length;i++)o=e.g=n[i],s=bo(o,r,!1,e)&&s}Je.prototype.N=function(){if(Je.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)Qa(n[r]);delete t.g[e],t.h--}}this.J=null};Je.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};Je.prototype.P=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function bo(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var s=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.fa&&o.capture==n){var a=o.listener,l=o.la||o.src;o.ia&&Qc(t.i,o),s=a.call(l,r)!==!1&&s}}return s&&!r.defaultPrevented}var wh=X.JSON.stringify;class lP{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function cP(){var t=Ih;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class uP{constructor(){this.h=this.g=null}add(e,n){const r=vy.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var vy=new lP(()=>new hP,t=>t.reset());class hP{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function dP(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function fP(t){X.setTimeout(()=>{throw t},0)}let Ri,Si=!1,Ih=new uP,Ey=()=>{const t=X.Promise.resolve(void 0);Ri=()=>{t.then(pP)}};var pP=()=>{for(var t;t=cP();){try{t.h.call(t.g)}catch(n){fP(n)}var e=vy;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Si=!1};function Ja(t,e){Je.call(this),this.h=t||1,this.g=e||X,this.j=ht(this.qb,this),this.l=Date.now()}Xe(Ja,Je);N=Ja.prototype;N.ga=!1;N.T=null;N.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),rt(this,"tick"),this.ga&&(Ah(this),this.start()))}};N.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Ah(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}N.N=function(){Ja.$.N.call(this),Ah(this),delete this.g};function bh(t,e,n){if(typeof t=="function")n&&(t=ht(t,n));else if(t&&typeof t.handleEvent=="function")t=ht(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:X.setTimeout(t,e||0)}function Ty(t){t.g=bh(()=>{t.g=null,t.i&&(t.i=!1,Ty(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class mP extends ir{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Ty(this)}N(){super.N(),this.g&&(X.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ci(t){ir.call(this),this.h=t,this.g={}}Xe(Ci,ir);var fp=[];function wy(t,e,n,r){Array.isArray(n)||(n&&(fp[0]=n.toString()),n=fp);for(var s=0;s<n.length;s++){var i=py(e,n[s],r||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function Iy(t){_h(t.g,function(e,n){this.g.hasOwnProperty(n)&&vh(e)},t),t.g={}}Ci.prototype.N=function(){Ci.$.N.call(this),Iy(this)};Ci.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Xa(){this.g=!0}Xa.prototype.Ea=function(){this.g=!1};function gP(t,e,n,r,s,i){t.info(function(){if(t.g)if(i)for(var o="",a=i.split("&"),l=0;l<a.length;l++){var c=a[l].split("=");if(1<c.length){var u=c[0];c=c[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+c+"&"):o+(u+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+r+") [attempt "+s+"]: "+e+`
`+n+`
`+o})}function _P(t,e,n,r,s,i,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+s+"]: "+e+`
`+n+`
`+i+" "+o})}function Jr(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+vP(t,n)+(r?" "+r:"")})}function yP(t,e){t.info(function(){return"TIMEOUT: "+e})}Xa.prototype.info=function(){};function vP(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var s=r[1];if(Array.isArray(s)&&!(1>s.length)){var i=s[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<s.length;o++)s[o]=""}}}}return wh(n)}catch{return e}}var Lr={},pp=null;function Za(){return pp=pp||new Je}Lr.Ta="serverreachability";function Ay(t){dt.call(this,Lr.Ta,t)}Xe(Ay,dt);function Pi(t){const e=Za();rt(e,new Ay(e))}Lr.STAT_EVENT="statevent";function by(t,e){dt.call(this,Lr.STAT_EVENT,t),this.stat=e}Xe(by,dt);function gt(t){const e=Za();rt(e,new by(e,t))}Lr.Ua="timingevent";function Ry(t,e){dt.call(this,Lr.Ua,t),this.size=e}Xe(Ry,dt);function Xi(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return X.setTimeout(function(){t()},e)}var el={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},Sy={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Rh(){}Rh.prototype.h=null;function mp(t){return t.h||(t.h=t.i())}function Cy(){}var Zi={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Sh(){dt.call(this,"d")}Xe(Sh,dt);function Ch(){dt.call(this,"c")}Xe(Ch,dt);var Jc;function tl(){}Xe(tl,Rh);tl.prototype.g=function(){return new XMLHttpRequest};tl.prototype.i=function(){return{}};Jc=new tl;function eo(t,e,n,r){this.l=t,this.j=e,this.m=n,this.W=r||1,this.U=new Ci(this),this.P=EP,t=Kc?125:void 0,this.V=new Ja(t),this.I=null,this.i=!1,this.u=this.B=this.A=this.L=this.G=this.Y=this.C=null,this.F=[],this.g=null,this.o=0,this.s=this.v=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new Py}function Py(){this.i=null,this.g="",this.h=!1}var EP=45e3,xy={},Xc={};N=eo.prototype;N.setTimeout=function(t){this.P=t};function Zc(t,e,n){t.L=1,t.A=rl(En(e)),t.u=n,t.S=!0,Oy(t,null)}function Oy(t,e){t.G=Date.now(),to(t),t.B=En(t.A);var n=t.B,r=t.W;Array.isArray(r)||(r=[String(r)]),Uy(n.i,"t",r),t.o=0,n=t.l.J,t.h=new Py,t.g=ov(t.l,n?e:null,!t.u),0<t.O&&(t.M=new mP(ht(t.Pa,t,t.g),t.O)),wy(t.U,t.g,"readystatechange",t.nb),e=t.I?dy(t.I):{},t.u?(t.v||(t.v="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.B,t.v,t.u,e)):(t.v="GET",t.g.ha(t.B,t.v,null,e)),Pi(),gP(t.j,t.v,t.B,t.m,t.W,t.u)}N.nb=function(t){t=t.target;const e=this.M;e&&Jt(t)==3?e.l():this.Pa(t)};N.Pa=function(t){try{if(t==this.g)e:{const u=Jt(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>u)&&(u!=3||Kc||this.g&&(this.h.h||this.g.ja()||vp(this.g)))){this.J||u!=4||e==7||(e==8||0>=h?Pi(3):Pi(2)),nl(this);var n=this.g.da();this.ca=n;t:if(ky(this)){var r=vp(this.g);t="";var s=r.length,i=Jt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Tr(this),si(this);var o="";break t}this.h.i=new X.TextDecoder}for(e=0;e<s;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:i&&e==s-1});r.length=0,this.h.g+=t,this.o=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,_P(this.j,this.v,this.B,this.m,this.W,u,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Ai(a)){var c=a;break t}}c=null}if(n=c)Jr(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,eu(this,n);else{this.i=!1,this.s=3,gt(12),Tr(this),si(this);break e}}this.S?(Dy(this,u,o),Kc&&this.i&&u==3&&(wy(this.U,this.V,"tick",this.mb),this.V.start())):(Jr(this.j,this.m,o,null),eu(this,o)),u==4&&Tr(this),this.i&&!this.J&&(u==4?nv(this.l,this):(this.i=!1,to(this)))}else BP(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.s=3,gt(12)):(this.s=0,gt(13)),Tr(this),si(this)}}}catch{}finally{}};function ky(t){return t.g?t.v=="GET"&&t.L!=2&&t.l.Ha:!1}function Dy(t,e,n){let r=!0,s;for(;!t.J&&t.o<n.length;)if(s=TP(t,n),s==Xc){e==4&&(t.s=4,gt(14),r=!1),Jr(t.j,t.m,null,"[Incomplete Response]");break}else if(s==xy){t.s=4,gt(15),Jr(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else Jr(t.j,t.m,s,null),eu(t,s);ky(t)&&t.o!=0&&(t.h.g=t.h.g.slice(t.o),t.o=0),e!=4||n.length!=0||t.h.h||(t.s=1,gt(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),Vh(e),e.M=!0,gt(11))):(Jr(t.j,t.m,n,"[Invalid Chunked Response]"),Tr(t),si(t))}N.mb=function(){if(this.g){var t=Jt(this.g),e=this.g.ja();this.o<e.length&&(nl(this),Dy(this,t,e),this.i&&t!=4&&to(this))}};function TP(t,e){var n=t.o,r=e.indexOf(`
`,n);return r==-1?Xc:(n=Number(e.substring(n,r)),isNaN(n)?xy:(r+=1,r+n>e.length?Xc:(e=e.slice(r,r+n),t.o=r+n,e)))}N.cancel=function(){this.J=!0,Tr(this)};function to(t){t.Y=Date.now()+t.P,Vy(t,t.P)}function Vy(t,e){if(t.C!=null)throw Error("WatchDog timer not null");t.C=Xi(ht(t.lb,t),e)}function nl(t){t.C&&(X.clearTimeout(t.C),t.C=null)}N.lb=function(){this.C=null;const t=Date.now();0<=t-this.Y?(yP(this.j,this.B),this.L!=2&&(Pi(),gt(17)),Tr(this),this.s=2,si(this)):Vy(this,this.Y-t)};function si(t){t.l.H==0||t.J||nv(t.l,t)}function Tr(t){nl(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,Ah(t.V),Iy(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function eu(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||tu(n.i,t))){if(!t.K&&tu(n.i,t)&&n.H==3){try{var r=n.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var s=r;if(s[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)da(n),al(n);else break e;Dh(n),gt(18)}}else n.Fa=s[1],0<n.Fa-n.V&&37500>s[2]&&n.G&&n.A==0&&!n.v&&(n.v=Xi(ht(n.ib,n),6e3));if(1>=jy(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else wr(n,11)}else if((t.K||n.g==t)&&da(n),!Ai(e))for(s=n.Ja.g.parse(e),e=0;e<s.length;e++){let c=s[e];if(n.V=c[0],c=c[1],n.H==2)if(c[0]=="c"){n.K=c[1],n.pa=c[2];const u=c[3];u!=null&&(n.ra=u,n.l.info("VER="+n.ra));const h=c[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));const d=c[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const f=t.g;if(f){const g=f.g?f.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(g){var i=r.i;i.g||g.indexOf("spdy")==-1&&g.indexOf("quic")==-1&&g.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(Ph(i,i.h),i.h=null))}if(r.F){const y=f.g?f.g.getResponseHeader("X-HTTP-Session-Id"):null;y&&(r.Da=y,Re(r.I,r.F,y))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=t;if(r.wa=iv(r,r.J?r.pa:null,r.Y),o.K){qy(r.i,o);var a=o,l=r.L;l&&a.setTimeout(l),a.C&&(nl(a),to(a)),r.g=o}else ev(r);0<n.j.length&&ll(n)}else c[0]!="stop"&&c[0]!="close"||wr(n,7);else n.H==3&&(c[0]=="stop"||c[0]=="close"?c[0]=="stop"?wr(n,7):kh(n):c[0]!="noop"&&n.h&&n.h.Aa(c),n.A=0)}}Pi(4)}catch{}}function wP(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Wa(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function IP(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Wa(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function Ny(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Wa(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=IP(t),r=wP(t),s=r.length,i=0;i<s;i++)e.call(void 0,r[i],n&&n[i],t)}var My=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function AP(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),s=null;if(0<=r){var i=t[n].substring(0,r);s=t[n].substring(r+1)}else i=t[n];e(i,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function Cr(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Cr){this.h=t.h,ua(this,t.j),this.s=t.s,this.g=t.g,ha(this,t.m),this.l=t.l;var e=t.i,n=new xi;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),gp(this,n),this.o=t.o}else t&&(e=String(t).match(My))?(this.h=!1,ua(this,e[1]||"",!0),this.s=Bs(e[2]||""),this.g=Bs(e[3]||"",!0),ha(this,e[4]),this.l=Bs(e[5]||"",!0),gp(this,e[6]||"",!0),this.o=Bs(e[7]||"")):(this.h=!1,this.i=new xi(null,this.h))}Cr.prototype.toString=function(){var t=[],e=this.j;e&&t.push(js(e,_p,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(js(e,_p,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(js(n,n.charAt(0)=="/"?SP:RP,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",js(n,PP)),t.join("")};function En(t){return new Cr(t)}function ua(t,e,n){t.j=n?Bs(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function ha(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function gp(t,e,n){e instanceof xi?(t.i=e,xP(t.i,t.h)):(n||(e=js(e,CP)),t.i=new xi(e,t.h))}function Re(t,e,n){t.i.set(e,n)}function rl(t){return Re(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Bs(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function js(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,bP),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function bP(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var _p=/[#\/\?@]/g,RP=/[#\?:]/g,SP=/[#\?]/g,CP=/[#\?@]/g,PP=/#/g;function xi(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function or(t){t.g||(t.g=new Map,t.h=0,t.i&&AP(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}N=xi.prototype;N.add=function(t,e){or(this),this.i=null,t=bs(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function Ly(t,e){or(t),e=bs(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function Fy(t,e){return or(t),e=bs(t,e),t.g.has(e)}N.forEach=function(t,e){or(this),this.g.forEach(function(n,r){n.forEach(function(s){t.call(e,s,r,this)},this)},this)};N.ta=function(){or(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const s=t[r];for(let i=0;i<s.length;i++)n.push(e[r])}return n};N.Z=function(t){or(this);let e=[];if(typeof t=="string")Fy(this,t)&&(e=e.concat(this.g.get(bs(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};N.set=function(t,e){return or(this),this.i=null,t=bs(this,t),Fy(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};N.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function Uy(t,e,n){Ly(t,e),0<n.length&&(t.i=null,t.g.set(bs(t,e),mh(n)),t.h+=n.length)}N.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const i=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var s=i;o[r]!==""&&(s+="="+encodeURIComponent(String(o[r]))),t.push(s)}}return this.i=t.join("&")};function bs(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function xP(t,e){e&&!t.j&&(or(t),t.i=null,t.g.forEach(function(n,r){var s=r.toLowerCase();r!=s&&(Ly(this,r),Uy(this,s,n))},t)),t.j=e}var OP=class{constructor(t,e){this.g=t,this.map=e}};function $y(t){this.l=t||kP,X.PerformanceNavigationTiming?(t=X.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(X.g&&X.g.Ka&&X.g.Ka()&&X.g.Ka().dc),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var kP=10;function By(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function jy(t){return t.h?1:t.g?t.g.size:0}function tu(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Ph(t,e){t.g?t.g.add(e):t.h=e}function qy(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}$y.prototype.cancel=function(){if(this.i=Hy(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function Hy(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return mh(t.i)}var DP=class{stringify(t){return X.JSON.stringify(t,void 0)}parse(t){return X.JSON.parse(t,void 0)}};function VP(){this.g=new DP}function NP(t,e,n){const r=n||"";try{Ny(t,function(s,i){let o=s;Yi(s)&&(o=wh(s)),e.push(r+i+"="+encodeURIComponent(o))})}catch(s){throw e.push(r+"type="+encodeURIComponent("_badmap")),s}}function MP(t,e){const n=new Xa;if(X.Image){const r=new Image;r.onload=Ao(Ro,n,r,"TestLoadImage: loaded",!0,e),r.onerror=Ao(Ro,n,r,"TestLoadImage: error",!1,e),r.onabort=Ao(Ro,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=Ao(Ro,n,r,"TestLoadImage: timeout",!1,e),X.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function Ro(t,e,n,r,s){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,s(r)}catch{}}function sl(t){this.l=t.ec||null,this.j=t.ob||!1}Xe(sl,Rh);sl.prototype.g=function(){return new il(this.l,this.j)};sl.prototype.i=function(t){return function(){return t}}({});function il(t,e){Je.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=xh,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Xe(il,Je);var xh=0;N=il.prototype;N.open=function(t,e){if(this.readyState!=xh)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Oi(this)};N.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||X).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};N.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,no(this)),this.readyState=xh};N.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Oi(this)),this.g&&(this.readyState=3,Oi(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof X.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;zy(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function zy(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}N.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?no(this):Oi(this),this.readyState==3&&zy(this)}};N.Za=function(t){this.g&&(this.response=this.responseText=t,no(this))};N.Ya=function(t){this.g&&(this.response=t,no(this))};N.ka=function(){this.g&&no(this)};function no(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Oi(t)}N.setRequestHeader=function(t,e){this.v.append(t,e)};N.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};N.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Oi(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(il.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var LP=X.JSON.parse;function Ne(t){Je.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=Ky,this.L=this.M=!1}Xe(Ne,Je);var Ky="",FP=/^https?$/i,UP=["POST","PUT"];N=Ne.prototype;N.Oa=function(t){this.M=t};N.ha=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Jc.g(),this.C=this.u?mp(this.u):mp(Jc),this.g.onreadystatechange=ht(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(i){yp(this,i);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var s in r)n.set(s,r[s]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const i of r.keys())n.set(i,r.get(i));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(i=>i.toLowerCase()=="content-type"),s=X.FormData&&t instanceof X.FormData,!(0<=ly(UP,e))||r||s||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of n)this.g.setRequestHeader(i,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{Qy(this),0<this.B&&((this.L=$P(this.g))?(this.g.timeout=this.B,this.g.ontimeout=ht(this.ua,this)):this.A=bh(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){yp(this,i)}};function $P(t){return fs&&typeof t.timeout=="number"&&t.ontimeout!==void 0}N.ua=function(){typeof ph<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,rt(this,"timeout"),this.abort(8))};function yp(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Wy(t),ol(t)}function Wy(t){t.F||(t.F=!0,rt(t,"complete"),rt(t,"error"))}N.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,rt(this,"complete"),rt(this,"abort"),ol(this))};N.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),ol(this,!0)),Ne.$.N.call(this)};N.La=function(){this.s||(this.G||this.v||this.l?Gy(this):this.kb())};N.kb=function(){Gy(this)};function Gy(t){if(t.h&&typeof ph<"u"&&(!t.C[1]||Jt(t)!=4||t.da()!=2)){if(t.v&&Jt(t)==4)bh(t.La,0,t);else if(rt(t,"readystatechange"),Jt(t)==4){t.h=!1;try{const o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=o===0){var s=String(t.I).match(My)[1]||null;!s&&X.self&&X.self.location&&(s=X.self.location.protocol.slice(0,-1)),r=!FP.test(s?s.toLowerCase():"")}n=r}if(n)rt(t,"complete"),rt(t,"success");else{t.m=6;try{var i=2<Jt(t)?t.g.statusText:""}catch{i=""}t.j=i+" ["+t.da()+"]",Wy(t)}}finally{ol(t)}}}}function ol(t,e){if(t.g){Qy(t);const n=t.g,r=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||rt(t,"ready");try{n.onreadystatechange=r}catch{}}}function Qy(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(X.clearTimeout(t.A),t.A=null)}N.isActive=function(){return!!this.g};function Jt(t){return t.g?t.g.readyState:0}N.da=function(){try{return 2<Jt(this)?this.g.status:-1}catch{return-1}};N.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};N.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),LP(e)}};function vp(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case Ky:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function BP(t){const e={};t=(t.g&&2<=Jt(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<t.length;r++){if(Ai(t[r]))continue;var n=dP(t[r]);const s=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const i=e[s]||[];e[s]=i,i.push(n)}iP(e,function(r){return r.join(", ")})}N.Ia=function(){return this.m};N.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Yy(t){let e="";return _h(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function Oh(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=Yy(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):Re(t,e,n))}function Ms(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Jy(t){this.Ga=0,this.j=[],this.l=new Xa,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=Ms("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=Ms("baseRetryDelayMs",5e3,t),this.hb=Ms("retryDelaySeedMs",1e4,t),this.eb=Ms("forwardChannelMaxRetries",2,t),this.xa=Ms("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.useFetchStreams||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new $y(t&&t.concurrentRequestLimit),this.Ja=new VP,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}N=Jy.prototype;N.ra=8;N.H=1;function kh(t){if(Xy(t),t.H==3){var e=t.W++,n=En(t.I);if(Re(n,"SID",t.K),Re(n,"RID",e),Re(n,"TYPE","terminate"),ro(t,n),e=new eo(t,t.l,e),e.L=2,e.A=rl(En(n)),n=!1,X.navigator&&X.navigator.sendBeacon)try{n=X.navigator.sendBeacon(e.A.toString(),"")}catch{}!n&&X.Image&&(new Image().src=e.A,n=!0),n||(e.g=ov(e.l,null),e.g.ha(e.A)),e.G=Date.now(),to(e)}sv(t)}function al(t){t.g&&(Vh(t),t.g.cancel(),t.g=null)}function Xy(t){al(t),t.u&&(X.clearTimeout(t.u),t.u=null),da(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&X.clearTimeout(t.m),t.m=null)}function ll(t){if(!By(t.i)&&!t.m){t.m=!0;var e=t.Na;Ri||Ey(),Si||(Ri(),Si=!0),Ih.add(e,t),t.C=0}}function jP(t,e){return jy(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=Xi(ht(t.Na,t,e),rv(t,t.C)),t.C++,!0)}N.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const s=new eo(this,this.l,t);let i=this.s;if(this.U&&(i?(i=dy(i),fy(i,this.U)):i=this.U),this.o!==null||this.O||(s.I=i,i=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=Zy(this,s,e),n=En(this.I),Re(n,"RID",t),Re(n,"CVER",22),this.F&&Re(n,"X-HTTP-Session-Id",this.F),ro(this,n),i&&(this.O?e="headers="+encodeURIComponent(String(Yy(i)))+"&"+e:this.o&&Oh(n,this.o,i)),Ph(this.i,s),this.bb&&Re(n,"TYPE","init"),this.P?(Re(n,"$req",e),Re(n,"SID","null"),s.aa=!0,Zc(s,n,null)):Zc(s,n,e),this.H=2}}else this.H==3&&(t?Ep(this,t):this.j.length==0||By(this.i)||Ep(this))};function Ep(t,e){var n;e?n=e.m:n=t.W++;const r=En(t.I);Re(r,"SID",t.K),Re(r,"RID",n),Re(r,"AID",t.V),ro(t,r),t.o&&t.s&&Oh(r,t.o,t.s),n=new eo(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=Zy(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),Ph(t.i,n),Zc(n,r,e)}function ro(t,e){t.na&&_h(t.na,function(n,r){Re(e,r,n)}),t.h&&Ny({},function(n,r){Re(e,r,n)})}function Zy(t,e,n){n=Math.min(t.j.length,n);var r=t.h?ht(t.h.Va,t.h,t):null;e:{var s=t.j;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=s[0].g,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let l=0;l<n;l++){let c=s[l].g;const u=s[l].map;if(c-=i,0>c)i=Math.max(0,s[l].g-100),a=!1;else try{NP(u,o,"req"+c+"_")}catch{r&&r(u)}}if(a){r=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,r}function ev(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;Ri||Ey(),Si||(Ri(),Si=!0),Ih.add(e,t),t.A=0}}function Dh(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=Xi(ht(t.Ma,t),rv(t,t.A)),t.A++,!0)}N.Ma=function(){if(this.u=null,tv(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=Xi(ht(this.jb,this),t)}};N.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,gt(10),al(this),tv(this))};function Vh(t){t.B!=null&&(X.clearTimeout(t.B),t.B=null)}function tv(t){t.g=new eo(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=En(t.wa);Re(e,"RID","rpc"),Re(e,"SID",t.K),Re(e,"AID",t.V),Re(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&Re(e,"TO",t.qa),Re(e,"TYPE","xmlhttp"),ro(t,e),t.o&&t.s&&Oh(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.A=rl(En(e)),n.u=null,n.S=!0,Oy(n,t)}N.ib=function(){this.v!=null&&(this.v=null,al(this),Dh(this),gt(19))};function da(t){t.v!=null&&(X.clearTimeout(t.v),t.v=null)}function nv(t,e){var n=null;if(t.g==e){da(t),Vh(t),t.g=null;var r=2}else if(tu(t.i,e))n=e.F,qy(t.i,e),r=1;else return;if(t.H!=0){if(e.i)if(r==1){n=e.u?e.u.length:0,e=Date.now()-e.G;var s=t.C;r=Za(),rt(r,new Ry(r,n)),ll(t)}else ev(t);else if(s=e.s,s==3||s==0&&0<e.ca||!(r==1&&jP(t,e)||r==2&&Dh(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),s){case 1:wr(t,5);break;case 4:wr(t,10);break;case 3:wr(t,6);break;default:wr(t,2)}}}function rv(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function wr(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var r=ht(t.pb,t);n||(n=new Cr("//www.google.com/images/cleardot.gif"),X.location&&X.location.protocol=="http"||ua(n,"https"),rl(n)),MP(n.toString(),r)}else gt(2);t.H=0,t.h&&t.h.za(e),sv(t),Xy(t)}N.pb=function(t){t?(this.l.info("Successfully pinged google.com"),gt(2)):(this.l.info("Failed to ping google.com"),gt(1))};function sv(t){if(t.H=0,t.ma=[],t.h){const e=Hy(t.i);(e.length!=0||t.j.length!=0)&&(up(t.ma,e),up(t.ma,t.j),t.i.i.length=0,mh(t.j),t.j.length=0),t.h.ya()}}function iv(t,e,n){var r=n instanceof Cr?En(n):new Cr(n);if(r.g!="")e&&(r.g=e+"."+r.g),ha(r,r.m);else{var s=X.location;r=s.protocol,e=e?e+"."+s.hostname:s.hostname,s=+s.port;var i=new Cr(null);r&&ua(i,r),e&&(i.g=e),s&&ha(i,s),n&&(i.l=n),r=i}return n=t.F,e=t.Da,n&&e&&Re(r,n,e),Re(r,"VER",t.ra),ro(t,r),r}function ov(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=t.Ha&&!t.va?new Ne(new sl({ob:n})):new Ne(t.va),e.Oa(t.J),e}N.isActive=function(){return!!this.h&&this.h.isActive(this)};function av(){}N=av.prototype;N.Ba=function(){};N.Aa=function(){};N.za=function(){};N.ya=function(){};N.isActive=function(){return!0};N.Va=function(){};function fa(){if(fs&&!(10<=Number(tP)))throw Error("Environmental error: no available transport.")}fa.prototype.g=function(t,e){return new Ct(t,e)};function Ct(t,e){Je.call(this),this.g=new Jy(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!Ai(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Ai(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Rs(this)}Xe(Ct,Je);Ct.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;gt(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=iv(t,null,t.Y),ll(t)};Ct.prototype.close=function(){kh(this.g)};Ct.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=wh(t),t=n);e.j.push(new OP(e.fb++,t)),e.H==3&&ll(e)};Ct.prototype.N=function(){this.g.h=null,delete this.j,kh(this.g),delete this.g,Ct.$.N.call(this)};function lv(t){Sh.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Xe(lv,Sh);function cv(){Ch.call(this),this.status=1}Xe(cv,Ch);function Rs(t){this.g=t}Xe(Rs,av);Rs.prototype.Ba=function(){rt(this.g,"a")};Rs.prototype.Aa=function(t){rt(this.g,new lv(t))};Rs.prototype.za=function(t){rt(this.g,new cv)};Rs.prototype.ya=function(){rt(this.g,"b")};function qP(){this.blockSize=-1}function Bt(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}Xe(Bt,qP);Bt.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function sc(t,e,n){n||(n=0);var r=Array(16);if(typeof e=="string")for(var s=0;16>s;++s)r[s]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(s=0;16>s;++s)r[s]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],s=t.g[2];var i=t.g[3],o=e+(i^n&(s^i))+r[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[1]+3905402710&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[2]+606105819&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[3]+3250441966&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(i^n&(s^i))+r[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[5]+1200080426&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[6]+2821735955&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[7]+4249261313&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(i^n&(s^i))+r[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[9]+2336552879&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[10]+4294925233&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[11]+2304563134&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(i^n&(s^i))+r[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[13]+4254626195&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[14]+2792965006&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[15]+1236535329&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(s^i&(n^s))+r[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[6]+3225465664&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[11]+643717713&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[0]+3921069994&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(n^s))+r[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[10]+38016083&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[15]+3634488961&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[4]+3889429448&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(n^s))+r[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[14]+3275163606&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[3]+4107603335&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[8]+1163531501&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(n^s))+r[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[2]+4243563512&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[7]+1735328473&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[12]+2368359562&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(n^s^i)+r[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[8]+2272392833&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[11]+1839030562&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[14]+4259657740&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^i)+r[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[4]+1272893353&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[7]+4139469664&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[10]+3200236656&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^i)+r[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[0]+3936430074&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[3]+3572445317&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[6]+76029189&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^i)+r[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[12]+3873151461&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[15]+530742520&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[2]+3299628645&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(s^(n|~i))+r[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[7]+1126891415&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[14]+2878612391&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[5]+4237533241&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~i))+r[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[3]+2399980690&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[10]+4293915773&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[1]+2240044497&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~i))+r[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[15]+4264355552&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[6]+2734768916&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[13]+1309151649&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~i))+r[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[11]+3174756917&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[2]+718787259&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(s+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+s&4294967295,t.g[3]=t.g[3]+i&4294967295}Bt.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,r=this.m,s=this.h,i=0;i<e;){if(s==0)for(;i<=n;)sc(this,t,i),i+=this.blockSize;if(typeof t=="string"){for(;i<e;)if(r[s++]=t.charCodeAt(i++),s==this.blockSize){sc(this,r),s=0;break}}else for(;i<e;)if(r[s++]=t[i++],s==this.blockSize){sc(this,r),s=0;break}}this.h=s,this.i+=e};Bt.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};function Te(t,e){this.h=e;for(var n=[],r=!0,s=t.length-1;0<=s;s--){var i=t[s]|0;r&&i==e||(n[s]=i,r=!1)}this.g=n}var HP={};function Nh(t){return-128<=t&&128>t?XC(t,function(e){return new Te([e|0],0>e?-1:0)}):new Te([t|0],0>t?-1:0)}function Xt(t){if(isNaN(t)||!isFinite(t))return os;if(0>t)return et(Xt(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=nu;return new Te(e,0)}function uv(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return et(uv(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=Xt(Math.pow(e,8)),r=os,s=0;s<t.length;s+=8){var i=Math.min(8,t.length-s),o=parseInt(t.substring(s,s+i),e);8>i?(i=Xt(Math.pow(e,i)),r=r.R(i).add(Xt(o))):(r=r.R(n),r=r.add(Xt(o)))}return r}var nu=4294967296,os=Nh(0),ru=Nh(1),Tp=Nh(16777216);N=Te.prototype;N.ea=function(){if(Ot(this))return-et(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.D(n);t+=(0<=r?r:nu+r)*e,e*=nu}return t};N.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(mn(this))return"0";if(Ot(this))return"-"+et(this).toString(t);for(var e=Xt(Math.pow(t,6)),n=this,r="";;){var s=ma(n,e).g;n=pa(n,s.R(e));var i=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=s,mn(n))return i+r;for(;6>i.length;)i="0"+i;r=i+r}};N.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function mn(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function Ot(t){return t.h==-1}N.X=function(t){return t=pa(this,t),Ot(t)?-1:mn(t)?0:1};function et(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new Te(n,~t.h).add(ru)}N.abs=function(){return Ot(this)?et(this):this};N.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,s=0;s<=e;s++){var i=r+(this.D(s)&65535)+(t.D(s)&65535),o=(i>>>16)+(this.D(s)>>>16)+(t.D(s)>>>16);r=o>>>16,i&=65535,o&=65535,n[s]=o<<16|i}return new Te(n,n[n.length-1]&-2147483648?-1:0)};function pa(t,e){return t.add(et(e))}N.R=function(t){if(mn(this)||mn(t))return os;if(Ot(this))return Ot(t)?et(this).R(et(t)):et(et(this).R(t));if(Ot(t))return et(this.R(et(t)));if(0>this.X(Tp)&&0>t.X(Tp))return Xt(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var s=0;s<t.g.length;s++){var i=this.D(r)>>>16,o=this.D(r)&65535,a=t.D(s)>>>16,l=t.D(s)&65535;n[2*r+2*s]+=o*l,So(n,2*r+2*s),n[2*r+2*s+1]+=i*l,So(n,2*r+2*s+1),n[2*r+2*s+1]+=o*a,So(n,2*r+2*s+1),n[2*r+2*s+2]+=i*a,So(n,2*r+2*s+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new Te(n,0)};function So(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function Ls(t,e){this.g=t,this.h=e}function ma(t,e){if(mn(e))throw Error("division by zero");if(mn(t))return new Ls(os,os);if(Ot(t))return e=ma(et(t),e),new Ls(et(e.g),et(e.h));if(Ot(e))return e=ma(t,et(e)),new Ls(et(e.g),e.h);if(30<t.g.length){if(Ot(t)||Ot(e))throw Error("slowDivide_ only works with positive integers.");for(var n=ru,r=e;0>=r.X(t);)n=wp(n),r=wp(r);var s=Hr(n,1),i=Hr(r,1);for(r=Hr(r,2),n=Hr(n,2);!mn(r);){var o=i.add(r);0>=o.X(t)&&(s=s.add(n),i=o),r=Hr(r,1),n=Hr(n,1)}return e=pa(t,s.R(e)),new Ls(s,e)}for(s=os;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),i=Xt(n),o=i.R(e);Ot(o)||0<o.X(t);)n-=r,i=Xt(n),o=i.R(e);mn(i)&&(i=ru),s=s.add(i),t=pa(t,o)}return new Ls(s,t)}N.gb=function(t){return ma(this,t).h};N.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)&t.D(r);return new Te(n,this.h&t.h)};N.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)|t.D(r);return new Te(n,this.h|t.h)};N.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)^t.D(r);return new Te(n,this.h^t.h)};function wp(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.D(r)<<1|t.D(r-1)>>>31;return new Te(n,t.h)}function Hr(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,s=[],i=0;i<r;i++)s[i]=0<e?t.D(i+n)>>>e|t.D(i+n+1)<<32-e:t.D(i+n);return new Te(s,t.h)}fa.prototype.createWebChannel=fa.prototype.g;Ct.prototype.send=Ct.prototype.u;Ct.prototype.open=Ct.prototype.m;Ct.prototype.close=Ct.prototype.close;el.NO_ERROR=0;el.TIMEOUT=8;el.HTTP_ERROR=6;Sy.COMPLETE="complete";Cy.EventType=Zi;Zi.OPEN="a";Zi.CLOSE="b";Zi.ERROR="c";Zi.MESSAGE="d";Je.prototype.listen=Je.prototype.O;Ne.prototype.listenOnce=Ne.prototype.P;Ne.prototype.getLastError=Ne.prototype.Sa;Ne.prototype.getLastErrorCode=Ne.prototype.Ia;Ne.prototype.getStatus=Ne.prototype.da;Ne.prototype.getResponseJson=Ne.prototype.Wa;Ne.prototype.getResponseText=Ne.prototype.ja;Ne.prototype.send=Ne.prototype.ha;Ne.prototype.setWithCredentials=Ne.prototype.Oa;Bt.prototype.digest=Bt.prototype.l;Bt.prototype.reset=Bt.prototype.reset;Bt.prototype.update=Bt.prototype.j;Te.prototype.add=Te.prototype.add;Te.prototype.multiply=Te.prototype.R;Te.prototype.modulo=Te.prototype.gb;Te.prototype.compare=Te.prototype.X;Te.prototype.toNumber=Te.prototype.ea;Te.prototype.toString=Te.prototype.toString;Te.prototype.getBits=Te.prototype.D;Te.fromNumber=Xt;Te.fromString=uv;var zP=function(){return new fa},KP=function(){return Za()},ic=el,WP=Sy,GP=Lr,Ip={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},Co=Cy,QP=Ne,YP=Bt,as=Te;const Ap="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}at.UNAUTHENTICATED=new at(null),at.GOOGLE_CREDENTIALS=new at("google-credentials-uid"),at.FIRST_PARTY=new at("first-party-uid"),at.MOCK_USER=new at("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ss="10.11.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kr=new eh("@firebase/firestore");function Fs(){return kr.logLevel}function V(t,...e){if(kr.logLevel<=he.DEBUG){const n=e.map(Mh);kr.debug(`Firestore (${Ss}): ${t}`,...n)}}function on(t,...e){if(kr.logLevel<=he.ERROR){const n=e.map(Mh);kr.error(`Firestore (${Ss}): ${t}`,...n)}}function ps(t,...e){if(kr.logLevel<=he.WARN){const n=e.map(Mh);kr.warn(`Firestore (${Ss}): ${t}`,...n)}}function Mh(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function J(t="Unexpected state"){const e=`FIRESTORE (${Ss}) INTERNAL ASSERTION FAILED: `+t;throw on(e),new Error(e)}function Ae(t,e){t||J()}function ne(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const A={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class U extends bn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _n{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hv{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class JP{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(at.UNAUTHENTICATED))}shutdown(){}}class XP{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class ZP{constructor(e){this.t=e,this.currentUser=at.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const s=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let i=new _n;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new _n,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const l=i;e.enqueueRetryable(async()=>{await l.promise,await s(this.currentUser)})},a=l=>{V("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(V("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new _n)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(V("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Ae(typeof r.accessToken=="string"),new hv(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Ae(e===null||typeof e=="string"),new at(e)}}class ex{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=at.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class tx{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new ex(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(at.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class nx{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class rx{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=i=>{i.error!=null&&V("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,V("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{V("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):V("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Ae(typeof n.token=="string"),this.R=n.token,new nx(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sx(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dv{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=sx(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function _e(t,e){return t<e?-1:t>e?1:0}function ms(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class He{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new U(A.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new U(A.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new U(A.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new U(A.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return He.fromMillis(Date.now())}static fromDate(e){return He.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new He(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?_e(this.nanoseconds,e.nanoseconds):_e(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ee{constructor(e){this.timestamp=e}static fromTimestamp(e){return new ee(e)}static min(){return new ee(new He(0,0))}static max(){return new ee(new He(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ki{constructor(e,n,r){n===void 0?n=0:n>e.length&&J(),r===void 0?r=e.length-n:r>e.length-n&&J(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return ki.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof ki?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Se extends ki{construct(e,n,r){return new Se(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new U(A.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new Se(n)}static emptyPath(){return new Se([])}}const ix=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class nt extends ki{construct(e,n,r){return new nt(e,n,r)}static isValidIdentifier(e){return ix.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),nt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new nt(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new U(A.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const a=e[s];if(a==="\\"){if(s+1===e.length)throw new U(A.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[s+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new U(A.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(r+=a,s++):(i(),s++)}if(i(),o)throw new U(A.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new nt(n)}static emptyPath(){return new nt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K{constructor(e){this.path=e}static fromPath(e){return new K(Se.fromString(e))}static fromName(e){return new K(Se.fromString(e).popFirst(5))}static empty(){return new K(Se.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Se.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Se.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new K(new Se(e.slice()))}}function ox(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=ee.fromTimestamp(r===1e9?new He(n+1,0):new He(n,r));return new Zn(s,K.empty(),e)}function ax(t){return new Zn(t.readTime,t.key,-1)}class Zn{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Zn(ee.min(),K.empty(),-1)}static max(){return new Zn(ee.max(),K.empty(),-1)}}function lx(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=K.comparator(t.documentKey,e.documentKey),n!==0?n:_e(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cx="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class ux{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function so(t){if(t.code!==A.FAILED_PRECONDITION||t.message!==cx)throw t;V("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&J(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new S((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof S?n:S.resolve(n)}catch(n){return S.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):S.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):S.reject(n)}static resolve(e){return new S((n,r)=>{n(e)})}static reject(e){return new S((n,r)=>{r(e)})}static waitFor(e){return new S((n,r)=>{let s=0,i=0,o=!1;e.forEach(a=>{++s,a.next(()=>{++i,o&&i===s&&n()},l=>r(l))}),o=!0,i===s&&n()})}static or(e){let n=S.resolve(!1);for(const r of e)n=n.next(s=>s?S.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new S((r,s)=>{const i=e.length,o=new Array(i);let a=0;for(let l=0;l<i;l++){const c=l;n(e[c]).next(u=>{o[c]=u,++a,a===i&&r(o)},u=>s(u))}})}static doWhile(e,n){return new S((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lh{constructor(e,n){this.action=e,this.transaction=n,this.aborted=!1,this.V=new _n,this.transaction.oncomplete=()=>{this.V.resolve()},this.transaction.onabort=()=>{n.error?this.V.reject(new ii(e,n.error)):this.V.resolve()},this.transaction.onerror=r=>{const s=Fh(r.target.error);this.V.reject(new ii(e,s))}}static open(e,n,r,s){try{return new Lh(n,e.transaction(s,r))}catch(i){throw new ii(n,i)}}get m(){return this.V.promise}abort(e){e&&this.V.reject(e),this.aborted||(V("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}g(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const n=this.transaction.objectStore(e);return new dx(n)}}class Ir{constructor(e,n,r){this.name=e,this.version=n,this.p=r,Ir.S(je())===12.2&&on("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return V("SimpleDb","Removing database:",e),_r(window.indexedDB.deleteDatabase(e)).toPromise()}static D(){if(!A_())return!1;if(Ir.C())return!0;const e=je(),n=Ir.S(e),r=0<n&&n<10,s=Ir.v(e),i=0<s&&s<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||r||i)}static C(){var e;return typeof process<"u"&&((e=process.__PRIVATE_env)===null||e===void 0?void 0:e.F)==="YES"}static M(e,n){return e.store(n)}static S(e){const n=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=n?n[1].split("_").slice(0,2).join("."):"-1";return Number(r)}static v(e){const n=e.match(/Android ([\d.]+)/i),r=n?n[1].split(".").slice(0,2).join("."):"-1";return Number(r)}async O(e){return this.db||(V("SimpleDb","Opening database:",this.name),this.db=await new Promise((n,r)=>{const s=indexedDB.open(this.name,this.version);s.onsuccess=i=>{const o=i.target.result;n(o)},s.onblocked=()=>{r(new ii(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},s.onerror=i=>{const o=i.target.error;o.name==="VersionError"?r(new U(A.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?r(new U(A.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):r(new ii(e,o))},s.onupgradeneeded=i=>{V("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',i.oldVersion);const o=i.target.result;this.p.N(o,s.transaction,i.oldVersion,this.version).next(()=>{V("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.L&&(this.db.onversionchange=n=>this.L(n)),this.db}B(e){this.L=e,this.db&&(this.db.onversionchange=n=>e(n))}async runTransaction(e,n,r,s){const i=n==="readonly";let o=0;for(;;){++o;try{this.db=await this.O(e);const a=Lh.open(this.db,e,i?"readonly":"readwrite",r),l=s(a).next(c=>(a.g(),c)).catch(c=>(a.abort(c),S.reject(c))).toPromise();return l.catch(()=>{}),await a.m,l}catch(a){const l=a,c=l.name!=="FirebaseError"&&o<3;if(V("SimpleDb","Transaction failed with error:",l.message,"Retrying:",c),this.close(),!c)return Promise.reject(l)}}}close(){this.db&&this.db.close(),this.db=void 0}}class hx{constructor(e){this.k=e,this.q=!1,this.K=null}get isDone(){return this.q}get $(){return this.K}set cursor(e){this.k=e}done(){this.q=!0}U(e){this.K=e}delete(){return _r(this.k.delete())}}class ii extends U{constructor(e,n){super(A.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${n}`),this.name="IndexedDbTransactionError"}}function io(t){return t.name==="IndexedDbTransactionError"}class dx{constructor(e){this.store=e}put(e,n){let r;return n!==void 0?(V("SimpleDb","PUT",this.store.name,e,n),r=this.store.put(n,e)):(V("SimpleDb","PUT",this.store.name,"<auto-key>",e),r=this.store.put(e)),_r(r)}add(e){return V("SimpleDb","ADD",this.store.name,e,e),_r(this.store.add(e))}get(e){return _r(this.store.get(e)).next(n=>(n===void 0&&(n=null),V("SimpleDb","GET",this.store.name,e,n),n))}delete(e){return V("SimpleDb","DELETE",this.store.name,e),_r(this.store.delete(e))}count(){return V("SimpleDb","COUNT",this.store.name),_r(this.store.count())}W(e,n){const r=this.options(e,n),s=r.index?this.store.index(r.index):this.store;if(typeof s.getAll=="function"){const i=s.getAll(r.range);return new S((o,a)=>{i.onerror=l=>{a(l.target.error)},i.onsuccess=l=>{o(l.target.result)}})}{const i=this.cursor(r),o=[];return this.G(i,(a,l)=>{o.push(l)}).next(()=>o)}}j(e,n){const r=this.store.getAll(e,n===null?void 0:n);return new S((s,i)=>{r.onerror=o=>{i(o.target.error)},r.onsuccess=o=>{s(o.target.result)}})}H(e,n){V("SimpleDb","DELETE ALL",this.store.name);const r=this.options(e,n);r.J=!1;const s=this.cursor(r);return this.G(s,(i,o,a)=>a.delete())}Y(e,n){let r;n?r=e:(r={},n=e);const s=this.cursor(r);return this.G(s,n)}Z(e){const n=this.cursor({});return new S((r,s)=>{n.onerror=i=>{const o=Fh(i.target.error);s(o)},n.onsuccess=i=>{const o=i.target.result;o?e(o.primaryKey,o.value).next(a=>{a?o.continue():r()}):r()}})}G(e,n){const r=[];return new S((s,i)=>{e.onerror=o=>{i(o.target.error)},e.onsuccess=o=>{const a=o.target.result;if(!a)return void s();const l=new hx(a),c=n(a.primaryKey,a.value,l);if(c instanceof S){const u=c.catch(h=>(l.done(),S.reject(h)));r.push(u)}l.isDone?s():l.$===null?a.continue():a.continue(l.$)}}).next(()=>S.waitFor(r))}options(e,n){let r;return e!==void 0&&(typeof e=="string"?r=e:n=e),{index:r,range:n}}cursor(e){let n="next";if(e.reverse&&(n="prev"),e.index){const r=this.store.index(e.index);return e.J?r.openKeyCursor(e.range,n):r.openCursor(e.range,n)}return this.store.openCursor(e.range,n)}}function _r(t){return new S((e,n)=>{t.onsuccess=r=>{const s=r.target.result;e(s)},t.onerror=r=>{const s=Fh(r.target.error);n(s)}})}let bp=!1;function Fh(t){const e=Ir.S(je());if(e>=12.2&&e<13){const n="An internal error was encountered in the Indexed Database server";if(t.message.indexOf(n)>=0){const r=new U("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${n}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return bp||(bp=!0,setTimeout(()=>{throw r},0)),r}}return t}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uh{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.se(r),this.oe=r=>n.writeSequenceNumber(r))}se(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.oe&&this.oe(e),e}}Uh._e=-1;function cl(t){return t==null}function ga(t){return t===0&&1/t==-1/0}function fx(t){return typeof t=="number"&&Number.isInteger(t)&&!ga(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rp(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Fr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function fv(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class De{constructor(e,n){this.comparator=e,this.root=n||Ze.EMPTY}insert(e,n){return new De(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Ze.BLACK,null,null))}remove(e){return new De(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ze.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Po(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Po(this.root,e,this.comparator,!1)}getReverseIterator(){return new Po(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Po(this.root,e,this.comparator,!0)}}class Po{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ze{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??Ze.RED,this.left=s??Ze.EMPTY,this.right=i??Ze.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new Ze(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Ze.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return Ze.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ze.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ze.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw J();const e=this.left.check();if(e!==this.right.check())throw J();return e+(this.isRed()?0:1)}}Ze.EMPTY=null,Ze.RED=!0,Ze.BLACK=!1;Ze.EMPTY=new class{constructor(){this.size=0}get key(){throw J()}get value(){throw J()}get color(){throw J()}get left(){throw J()}get right(){throw J()}copy(e,n,r,s,i){return this}insert(e,n,r){return new Ze(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st{constructor(e){this.comparator=e,this.data=new De(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Sp(this.data.getIterator())}getIteratorFrom(e){return new Sp(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof st)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new st(this.comparator);return n.data=e,n}}class Sp{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rt{constructor(e){this.fields=e,e.sort(nt.comparator)}static empty(){return new Rt([])}unionWith(e){let n=new st(nt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Rt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return ms(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pv extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new pv("Invalid base64 string: "+i):i}}(e);return new ft(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new ft(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return _e(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ft.EMPTY_BYTE_STRING=new ft("");const px=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function er(t){if(Ae(!!t),typeof t=="string"){let e=0;const n=px.exec(t);if(Ae(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ue(t.seconds),nanos:Ue(t.nanos)}}function Ue(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Dr(t){return typeof t=="string"?ft.fromBase64String(t):ft.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $h(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Bh(t){const e=t.mapValue.fields.__previous_value__;return $h(e)?Bh(e):e}function Di(t){const e=er(t.mapValue.fields.__local_write_time__.timestampValue);return new He(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mx{constructor(e,n,r,s,i,o,a,l,c){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=l,this.useFetchStreams=c}}class Vi{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Vi("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Vi&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xo={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Vr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?$h(t)?4:gx(t)?9007199254740991:10:J()}function an(t,e){if(t===e)return!0;const n=Vr(t);if(n!==Vr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Di(t).isEqual(Di(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=er(s.timestampValue),a=er(i.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return Dr(s.bytesValue).isEqual(Dr(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return Ue(s.geoPointValue.latitude)===Ue(i.geoPointValue.latitude)&&Ue(s.geoPointValue.longitude)===Ue(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return Ue(s.integerValue)===Ue(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=Ue(s.doubleValue),a=Ue(i.doubleValue);return o===a?ga(o)===ga(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return ms(t.arrayValue.values||[],e.arrayValue.values||[],an);case 10:return function(s,i){const o=s.mapValue.fields||{},a=i.mapValue.fields||{};if(Rp(o)!==Rp(a))return!1;for(const l in o)if(o.hasOwnProperty(l)&&(a[l]===void 0||!an(o[l],a[l])))return!1;return!0}(t,e);default:return J()}}function Ni(t,e){return(t.values||[]).find(n=>an(n,e))!==void 0}function gs(t,e){if(t===e)return 0;const n=Vr(t),r=Vr(e);if(n!==r)return _e(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return _e(t.booleanValue,e.booleanValue);case 2:return function(i,o){const a=Ue(i.integerValue||i.doubleValue),l=Ue(o.integerValue||o.doubleValue);return a<l?-1:a>l?1:a===l?0:isNaN(a)?isNaN(l)?0:-1:1}(t,e);case 3:return Cp(t.timestampValue,e.timestampValue);case 4:return Cp(Di(t),Di(e));case 5:return _e(t.stringValue,e.stringValue);case 6:return function(i,o){const a=Dr(i),l=Dr(o);return a.compareTo(l)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const a=i.split("/"),l=o.split("/");for(let c=0;c<a.length&&c<l.length;c++){const u=_e(a[c],l[c]);if(u!==0)return u}return _e(a.length,l.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const a=_e(Ue(i.latitude),Ue(o.latitude));return a!==0?a:_e(Ue(i.longitude),Ue(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,o){const a=i.values||[],l=o.values||[];for(let c=0;c<a.length&&c<l.length;++c){const u=gs(a[c],l[c]);if(u)return u}return _e(a.length,l.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,o){if(i===xo.mapValue&&o===xo.mapValue)return 0;if(i===xo.mapValue)return 1;if(o===xo.mapValue)return-1;const a=i.fields||{},l=Object.keys(a),c=o.fields||{},u=Object.keys(c);l.sort(),u.sort();for(let h=0;h<l.length&&h<u.length;++h){const d=_e(l[h],u[h]);if(d!==0)return d;const f=gs(a[l[h]],c[u[h]]);if(f!==0)return f}return _e(l.length,u.length)}(t.mapValue,e.mapValue);default:throw J()}}function Cp(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return _e(t,e);const n=er(t),r=er(e),s=_e(n.seconds,r.seconds);return s!==0?s:_e(n.nanos,r.nanos)}function _s(t){return su(t)}function su(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=er(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Dr(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return K.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=su(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${su(n.fields[o])}`;return s+"}"}(t.mapValue):J()}function Pp(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function iu(t){return!!t&&"integerValue"in t}function jh(t){return!!t&&"arrayValue"in t}function xp(t){return!!t&&"nullValue"in t}function Op(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function zo(t){return!!t&&"mapValue"in t}function oi(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Fr(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=oi(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=oi(t.arrayValue.values[n]);return e}return Object.assign({},t)}function gx(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt{constructor(e){this.value=e}static empty(){return new Tt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!zo(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=oi(n)}setAll(e){let n=nt.emptyPath(),r={},s=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,s),r={},s=[],n=a.popLast()}o?r[a.lastSegment()]=oi(o):s.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());zo(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return an(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];zo(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){Fr(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Tt(oi(this.value))}}function mv(t){const e=[];return Fr(t.fields,(n,r)=>{const s=new nt([n]);if(zo(r)){const i=mv(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new Rt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lt{constructor(e,n,r,s,i,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new lt(e,0,ee.min(),ee.min(),ee.min(),Tt.empty(),0)}static newFoundDocument(e,n,r,s){return new lt(e,1,n,ee.min(),r,s,0)}static newNoDocument(e,n){return new lt(e,2,n,ee.min(),ee.min(),Tt.empty(),0)}static newUnknownDocument(e,n){return new lt(e,3,n,ee.min(),ee.min(),Tt.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(ee.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Tt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Tt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ee.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof lt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new lt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _a{constructor(e,n){this.position=e,this.inclusive=n}}function kp(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=K.comparator(K.fromName(o.referenceValue),n.key):r=gs(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Dp(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!an(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mi{constructor(e,n="asc"){this.field=e,this.dir=n}}function _x(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gv{}class $e extends gv{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new vx(e,n,r):n==="array-contains"?new wx(e,r):n==="in"?new Ix(e,r):n==="not-in"?new Ax(e,r):n==="array-contains-any"?new bx(e,r):new $e(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new Ex(e,r):new Tx(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(gs(n,this.value)):n!==null&&Vr(this.value)===Vr(n)&&this.matchesComparison(gs(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return J()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class jt extends gv{constructor(e,n){super(),this.filters=e,this.op=n,this.ue=null}static create(e,n){return new jt(e,n)}matches(e){return _v(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ue!==null||(this.ue=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ue}getFilters(){return Object.assign([],this.filters)}}function _v(t){return t.op==="and"}function yv(t){return yx(t)&&_v(t)}function yx(t){for(const e of t.filters)if(e instanceof jt)return!1;return!0}function ou(t){if(t instanceof $e)return t.field.canonicalString()+t.op.toString()+_s(t.value);if(yv(t))return t.filters.map(e=>ou(e)).join(",");{const e=t.filters.map(n=>ou(n)).join(",");return`${t.op}(${e})`}}function vv(t,e){return t instanceof $e?function(r,s){return s instanceof $e&&r.op===s.op&&r.field.isEqual(s.field)&&an(r.value,s.value)}(t,e):t instanceof jt?function(r,s){return s instanceof jt&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,a)=>i&&vv(o,s.filters[a]),!0):!1}(t,e):void J()}function Ev(t){return t instanceof $e?function(n){return`${n.field.canonicalString()} ${n.op} ${_s(n.value)}`}(t):t instanceof jt?function(n){return n.op.toString()+" {"+n.getFilters().map(Ev).join(" ,")+"}"}(t):"Filter"}class vx extends $e{constructor(e,n,r){super(e,n,r),this.key=K.fromName(r.referenceValue)}matches(e){const n=K.comparator(e.key,this.key);return this.matchesComparison(n)}}class Ex extends $e{constructor(e,n){super(e,"in",n),this.keys=Tv("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class Tx extends $e{constructor(e,n){super(e,"not-in",n),this.keys=Tv("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Tv(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>K.fromName(r.referenceValue))}class wx extends $e{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return jh(n)&&Ni(n.arrayValue,this.value)}}class Ix extends $e{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Ni(this.value.arrayValue,n)}}class Ax extends $e{constructor(e,n){super(e,"not-in",n)}matches(e){if(Ni(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Ni(this.value.arrayValue,n)}}class bx extends $e{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!jh(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Ni(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rx{constructor(e,n=null,r=[],s=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=a,this.ce=null}}function Vp(t,e=null,n=[],r=[],s=null,i=null,o=null){return new Rx(t,e,n,r,s,i,o)}function qh(t){const e=ne(t);if(e.ce===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>ou(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),cl(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>_s(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>_s(r)).join(",")),e.ce=n}return e.ce}function Hh(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!_x(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!vv(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Dp(t.startAt,e.startAt)&&Dp(t.endAt,e.endAt)}function au(t){return K.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cs{constructor(e,n=null,r=[],s=[],i=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=l,this.le=null,this.he=null,this.Pe=null,this.startAt,this.endAt}}function Sx(t,e,n,r,s,i,o,a){return new Cs(t,e,n,r,s,i,o,a)}function ul(t){return new Cs(t)}function Np(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function wv(t){return t.collectionGroup!==null}function ai(t){const e=ne(t);if(e.le===null){e.le=[];const n=new Set;for(const i of e.explicitOrderBy)e.le.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new st(nt.comparator);return o.filters.forEach(l=>{l.getFlattenedFilters().forEach(c=>{c.isInequality()&&(a=a.add(c.field))})}),a})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.le.push(new Mi(i,r))}),n.has(nt.keyField().canonicalString())||e.le.push(new Mi(nt.keyField(),r))}return e.le}function en(t){const e=ne(t);return e.he||(e.he=Cx(e,ai(t))),e.he}function Cx(t,e){if(t.limitType==="F")return Vp(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new Mi(s.field,i)});const n=t.endAt?new _a(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new _a(t.startAt.position,t.startAt.inclusive):null;return Vp(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function lu(t,e){const n=t.filters.concat([e]);return new Cs(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function cu(t,e,n){return new Cs(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function hl(t,e){return Hh(en(t),en(e))&&t.limitType===e.limitType}function Iv(t){return`${qh(en(t))}|lt:${t.limitType}`}function Wr(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>Ev(s)).join(", ")}]`),cl(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>_s(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>_s(s)).join(",")),`Target(${r})`}(en(t))}; limitType=${t.limitType})`}function dl(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):K.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of ai(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,a,l){const c=kp(o,a,l);return o.inclusive?c<=0:c<0}(r.startAt,ai(r),s)||r.endAt&&!function(o,a,l){const c=kp(o,a,l);return o.inclusive?c>=0:c>0}(r.endAt,ai(r),s))}(t,e)}function Px(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Av(t){return(e,n)=>{let r=!1;for(const s of ai(t)){const i=xx(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function xx(t,e,n){const r=t.field.isKeyField()?K.comparator(e.key,n.key):function(i,o,a){const l=o.data.field(i),c=a.data.field(i);return l!==null&&c!==null?gs(l,c):J()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return J()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ps{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Fr(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return fv(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ox=new De(K.comparator);function Tn(){return Ox}const bv=new De(K.comparator);function qs(...t){let e=bv;for(const n of t)e=e.insert(n.key,n);return e}function Rv(t){let e=bv;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Ar(){return li()}function Sv(){return li()}function li(){return new Ps(t=>t.toString(),(t,e)=>t.isEqual(e))}const kx=new De(K.comparator),Dx=new st(K.comparator);function ce(...t){let e=Dx;for(const n of t)e=e.add(n);return e}const Vx=new st(_e);function Nx(){return Vx}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cv(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ga(e)?"-0":e}}function Pv(t){return{integerValue:""+t}}function Mx(t,e){return fx(e)?Pv(e):Cv(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fl{constructor(){this._=void 0}}function Lx(t,e,n){return t instanceof ya?function(s,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&$h(i)&&(i=Bh(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(n,e):t instanceof Li?Ov(t,e):t instanceof Fi?kv(t,e):function(s,i){const o=xv(s,i),a=Mp(o)+Mp(s.Ie);return iu(o)&&iu(s.Ie)?Pv(a):Cv(s.serializer,a)}(t,e)}function Fx(t,e,n){return t instanceof Li?Ov(t,e):t instanceof Fi?kv(t,e):n}function xv(t,e){return t instanceof va?function(r){return iu(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class ya extends fl{}class Li extends fl{constructor(e){super(),this.elements=e}}function Ov(t,e){const n=Dv(e);for(const r of t.elements)n.some(s=>an(s,r))||n.push(r);return{arrayValue:{values:n}}}class Fi extends fl{constructor(e){super(),this.elements=e}}function kv(t,e){let n=Dv(e);for(const r of t.elements)n=n.filter(s=>!an(s,r));return{arrayValue:{values:n}}}class va extends fl{constructor(e,n){super(),this.serializer=e,this.Ie=n}}function Mp(t){return Ue(t.integerValue||t.doubleValue)}function Dv(t){return jh(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function Ux(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof Li&&s instanceof Li||r instanceof Fi&&s instanceof Fi?ms(r.elements,s.elements,an):r instanceof va&&s instanceof va?an(r.Ie,s.Ie):r instanceof ya&&s instanceof ya}(t.transform,e.transform)}class $x{constructor(e,n){this.version=e,this.transformResults=n}}class tn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new tn}static exists(e){return new tn(void 0,e)}static updateTime(e){return new tn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Ko(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class pl{}function Vv(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Mv(t.key,tn.none()):new oo(t.key,t.data,tn.none());{const n=t.data,r=Tt.empty();let s=new st(nt.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new ar(t.key,r,new Rt(s.toArray()),tn.none())}}function Bx(t,e,n){t instanceof oo?function(s,i,o){const a=s.value.clone(),l=Fp(s.fieldTransforms,i,o.transformResults);a.setAll(l),i.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof ar?function(s,i,o){if(!Ko(s.precondition,i))return void i.convertToUnknownDocument(o.version);const a=Fp(s.fieldTransforms,i,o.transformResults),l=i.data;l.setAll(Nv(s)),l.setAll(a),i.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function ci(t,e,n,r){return t instanceof oo?function(i,o,a,l){if(!Ko(i.precondition,o))return a;const c=i.value.clone(),u=Up(i.fieldTransforms,l,o);return c.setAll(u),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),null}(t,e,n,r):t instanceof ar?function(i,o,a,l){if(!Ko(i.precondition,o))return a;const c=Up(i.fieldTransforms,l,o),u=o.data;return u.setAll(Nv(i)),u.setAll(c),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),a===null?null:a.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(h=>h.field))}(t,e,n,r):function(i,o,a){return Ko(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function jx(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=xv(r.transform,s||null);i!=null&&(n===null&&(n=Tt.empty()),n.set(r.field,i))}return n||null}function Lp(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&ms(r,s,(i,o)=>Ux(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class oo extends pl{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class ar extends pl{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Nv(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Fp(t,e,n){const r=new Map;Ae(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,a=e.data.field(i.field);r.set(i.field,Fx(o,a,n[s]))}return r}function Up(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,Lx(i,o,e))}return r}class Mv extends pl{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class qx extends pl{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hx{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&Bx(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=ci(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=ci(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=Sv();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(s.key)?null:a;const l=Vv(o,a);l!==null&&r.set(s.key,l),o.isValidDocument()||o.convertToNoDocument(ee.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ce())}isEqual(e){return this.batchId===e.batchId&&ms(this.mutations,e.mutations,(n,r)=>Lp(n,r))&&ms(this.baseMutations,e.baseMutations,(n,r)=>Lp(n,r))}}class zh{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){Ae(e.mutations.length===r.length);let s=function(){return kx}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new zh(e,n,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zx{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kx{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Fe,de;function Wx(t){switch(t){default:return J();case A.CANCELLED:case A.UNKNOWN:case A.DEADLINE_EXCEEDED:case A.RESOURCE_EXHAUSTED:case A.INTERNAL:case A.UNAVAILABLE:case A.UNAUTHENTICATED:return!1;case A.INVALID_ARGUMENT:case A.NOT_FOUND:case A.ALREADY_EXISTS:case A.PERMISSION_DENIED:case A.FAILED_PRECONDITION:case A.ABORTED:case A.OUT_OF_RANGE:case A.UNIMPLEMENTED:case A.DATA_LOSS:return!0}}function Lv(t){if(t===void 0)return on("GRPC error has no .code"),A.UNKNOWN;switch(t){case Fe.OK:return A.OK;case Fe.CANCELLED:return A.CANCELLED;case Fe.UNKNOWN:return A.UNKNOWN;case Fe.DEADLINE_EXCEEDED:return A.DEADLINE_EXCEEDED;case Fe.RESOURCE_EXHAUSTED:return A.RESOURCE_EXHAUSTED;case Fe.INTERNAL:return A.INTERNAL;case Fe.UNAVAILABLE:return A.UNAVAILABLE;case Fe.UNAUTHENTICATED:return A.UNAUTHENTICATED;case Fe.INVALID_ARGUMENT:return A.INVALID_ARGUMENT;case Fe.NOT_FOUND:return A.NOT_FOUND;case Fe.ALREADY_EXISTS:return A.ALREADY_EXISTS;case Fe.PERMISSION_DENIED:return A.PERMISSION_DENIED;case Fe.FAILED_PRECONDITION:return A.FAILED_PRECONDITION;case Fe.ABORTED:return A.ABORTED;case Fe.OUT_OF_RANGE:return A.OUT_OF_RANGE;case Fe.UNIMPLEMENTED:return A.UNIMPLEMENTED;case Fe.DATA_LOSS:return A.DATA_LOSS;default:return J()}}(de=Fe||(Fe={}))[de.OK=0]="OK",de[de.CANCELLED=1]="CANCELLED",de[de.UNKNOWN=2]="UNKNOWN",de[de.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",de[de.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",de[de.NOT_FOUND=5]="NOT_FOUND",de[de.ALREADY_EXISTS=6]="ALREADY_EXISTS",de[de.PERMISSION_DENIED=7]="PERMISSION_DENIED",de[de.UNAUTHENTICATED=16]="UNAUTHENTICATED",de[de.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",de[de.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",de[de.ABORTED=10]="ABORTED",de[de.OUT_OF_RANGE=11]="OUT_OF_RANGE",de[de.UNIMPLEMENTED=12]="UNIMPLEMENTED",de[de.INTERNAL=13]="INTERNAL",de[de.UNAVAILABLE=14]="UNAVAILABLE",de[de.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gx(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qx=new as([4294967295,4294967295],0);function $p(t){const e=Gx().encode(t),n=new YP;return n.update(e),new Uint8Array(n.digest())}function Bp(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new as([n,r],0),new as([s,i],0)]}class Kh{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new Hs(`Invalid padding: ${n}`);if(r<0)throw new Hs(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Hs(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new Hs(`Invalid padding when bitmap length is 0: ${n}`);this.Te=8*e.length-n,this.Ee=as.fromNumber(this.Te)}de(e,n,r){let s=e.add(n.multiply(as.fromNumber(r)));return s.compare(Qx)===1&&(s=new as([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Ee).toNumber()}Ae(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Te===0)return!1;const n=$p(e),[r,s]=Bp(n);for(let i=0;i<this.hashCount;i++){const o=this.de(r,s,i);if(!this.Ae(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new Kh(i,s,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Te===0)return;const n=$p(e),[r,s]=Bp(n);for(let i=0;i<this.hashCount;i++){const o=this.de(r,s,i);this.Re(o)}}Re(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class Hs extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ml{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,ao.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new ml(ee.min(),s,new De(_e),Tn(),ce())}}class ao{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new ao(r,n,ce(),ce(),ce())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wo{constructor(e,n,r,s){this.Ve=e,this.removedTargetIds=n,this.key=r,this.me=s}}class Fv{constructor(e,n){this.targetId=e,this.fe=n}}class Uv{constructor(e,n,r=ft.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class jp{constructor(){this.ge=0,this.pe=Hp(),this.ye=ft.EMPTY_BYTE_STRING,this.we=!1,this.Se=!0}get current(){return this.we}get resumeToken(){return this.ye}get be(){return this.ge!==0}get De(){return this.Se}Ce(e){e.approximateByteSize()>0&&(this.Se=!0,this.ye=e)}ve(){let e=ce(),n=ce(),r=ce();return this.pe.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:J()}}),new ao(this.ye,this.we,e,n,r)}Fe(){this.Se=!1,this.pe=Hp()}Me(e,n){this.Se=!0,this.pe=this.pe.insert(e,n)}xe(e){this.Se=!0,this.pe=this.pe.remove(e)}Oe(){this.ge+=1}Ne(){this.ge-=1,Ae(this.ge>=0)}Le(){this.Se=!0,this.we=!0}}class Yx{constructor(e){this.Be=e,this.ke=new Map,this.qe=Tn(),this.Qe=qp(),this.Ke=new De(_e)}$e(e){for(const n of e.Ve)e.me&&e.me.isFoundDocument()?this.Ue(n,e.me):this.We(n,e.key,e.me);for(const n of e.removedTargetIds)this.We(n,e.key,e.me)}Ge(e){this.forEachTarget(e,n=>{const r=this.ze(n);switch(e.state){case 0:this.je(n)&&r.Ce(e.resumeToken);break;case 1:r.Ne(),r.be||r.Fe(),r.Ce(e.resumeToken);break;case 2:r.Ne(),r.be||this.removeTarget(n);break;case 3:this.je(n)&&(r.Le(),r.Ce(e.resumeToken));break;case 4:this.je(n)&&(this.He(n),r.Ce(e.resumeToken));break;default:J()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ke.forEach((r,s)=>{this.je(s)&&n(s)})}Je(e){const n=e.targetId,r=e.fe.count,s=this.Ye(n);if(s){const i=s.target;if(au(i))if(r===0){const o=new K(i.path);this.We(n,o,lt.newNoDocument(o,ee.min()))}else Ae(r===1);else{const o=this.Ze(n);if(o!==r){const a=this.Xe(e),l=a?this.et(a,e,o):1;if(l!==0){this.He(n);const c=l===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(n,c)}}}}}Xe(e){const n=e.fe.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,a;try{o=Dr(r).toUint8Array()}catch(l){if(l instanceof pv)return ps("Decoding the base64 bloom filter in existence filter failed ("+l.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw l}try{a=new Kh(o,s,i)}catch(l){return ps(l instanceof Hs?"BloomFilter error: ":"Applying bloom filter failed: ",l),null}return a.Te===0?null:a}et(e,n,r){return n.fe.count===r-this.rt(e,n.targetId)?0:2}rt(e,n){const r=this.Be.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Be.nt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(a)||(this.We(n,i,null),s++)}),s}it(e){const n=new Map;this.ke.forEach((i,o)=>{const a=this.Ye(o);if(a){if(i.current&&au(a.target)){const l=new K(a.target.path);this.qe.get(l)!==null||this.st(o,l)||this.We(o,l,lt.newNoDocument(l,e))}i.De&&(n.set(o,i.ve()),i.Fe())}});let r=ce();this.Qe.forEach((i,o)=>{let a=!0;o.forEachWhile(l=>{const c=this.Ye(l);return!c||c.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(i))}),this.qe.forEach((i,o)=>o.setReadTime(e));const s=new ml(e,n,this.Ke,this.qe,r);return this.qe=Tn(),this.Qe=qp(),this.Ke=new De(_e),s}Ue(e,n){if(!this.je(e))return;const r=this.st(e,n.key)?2:0;this.ze(e).Me(n.key,r),this.qe=this.qe.insert(n.key,n),this.Qe=this.Qe.insert(n.key,this.ot(n.key).add(e))}We(e,n,r){if(!this.je(e))return;const s=this.ze(e);this.st(e,n)?s.Me(n,1):s.xe(n),this.Qe=this.Qe.insert(n,this.ot(n).delete(e)),r&&(this.qe=this.qe.insert(n,r))}removeTarget(e){this.ke.delete(e)}Ze(e){const n=this.ze(e).ve();return this.Be.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Oe(e){this.ze(e).Oe()}ze(e){let n=this.ke.get(e);return n||(n=new jp,this.ke.set(e,n)),n}ot(e){let n=this.Qe.get(e);return n||(n=new st(_e),this.Qe=this.Qe.insert(e,n)),n}je(e){const n=this.Ye(e)!==null;return n||V("WatchChangeAggregator","Detected inactive target",e),n}Ye(e){const n=this.ke.get(e);return n&&n.be?null:this.Be._t(e)}He(e){this.ke.set(e,new jp),this.Be.getRemoteKeysForTarget(e).forEach(n=>{this.We(e,n,null)})}st(e,n){return this.Be.getRemoteKeysForTarget(e).has(n)}}function qp(){return new De(K.comparator)}function Hp(){return new De(K.comparator)}const Jx={asc:"ASCENDING",desc:"DESCENDING"},Xx={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Zx={and:"AND",or:"OR"};class eO{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function uu(t,e){return t.useProto3Json||cl(e)?e:{value:e}}function Ea(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function $v(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function tO(t,e){return Ea(t,e.toTimestamp())}function nn(t){return Ae(!!t),ee.fromTimestamp(function(n){const r=er(n);return new He(r.seconds,r.nanos)}(t))}function Wh(t,e){return hu(t,e).canonicalString()}function hu(t,e){const n=function(s){return new Se(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function Bv(t){const e=Se.fromString(t);return Ae(Kv(e)),e}function du(t,e){return Wh(t.databaseId,e.path)}function oc(t,e){const n=Bv(e);if(n.get(1)!==t.databaseId.projectId)throw new U(A.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new U(A.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new K(qv(n))}function jv(t,e){return Wh(t.databaseId,e)}function nO(t){const e=Bv(t);return e.length===4?Se.emptyPath():qv(e)}function fu(t){return new Se(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function qv(t){return Ae(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function zp(t,e,n){return{name:du(t,e),fields:n.value.mapValue.fields}}function rO(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:J()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(c,u){return c.useProto3Json?(Ae(u===void 0||typeof u=="string"),ft.fromBase64String(u||"")):(Ae(u===void 0||u instanceof Buffer||u instanceof Uint8Array),ft.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const u=c.code===void 0?A.UNKNOWN:Lv(c.code);return new U(u,c.message||"")}(o);n=new Uv(r,s,i,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=oc(t,r.document.name),i=nn(r.document.updateTime),o=r.document.createTime?nn(r.document.createTime):ee.min(),a=new Tt({mapValue:{fields:r.document.fields}}),l=lt.newFoundDocument(s,i,o,a),c=r.targetIds||[],u=r.removedTargetIds||[];n=new Wo(c,u,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=oc(t,r.document),i=r.readTime?nn(r.readTime):ee.min(),o=lt.newNoDocument(s,i),a=r.removedTargetIds||[];n=new Wo([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=oc(t,r.document),i=r.removedTargetIds||[];n=new Wo([],i,s,null)}else{if(!("filter"in e))return J();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new Kx(s,i),a=r.targetId;n=new Fv(a,o)}}return n}function sO(t,e){let n;if(e instanceof oo)n={update:zp(t,e.key,e.value)};else if(e instanceof Mv)n={delete:du(t,e.key)};else if(e instanceof ar)n={update:zp(t,e.key,e.data),updateMask:fO(e.fieldMask)};else{if(!(e instanceof qx))return J();n={verify:du(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const a=o.transform;if(a instanceof ya)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof Li)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof Fi)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof va)return{fieldPath:o.field.canonicalString(),increment:a.Ie};throw J()}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:tO(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:J()}(t,e.precondition)),n}function iO(t,e){return t&&t.length>0?(Ae(e!==void 0),t.map(n=>function(s,i){let o=s.updateTime?nn(s.updateTime):nn(i);return o.isEqual(ee.min())&&(o=nn(i)),new $x(o,s.transformResults||[])}(n,e))):[]}function oO(t,e){return{documents:[jv(t,e.path)]}}function aO(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=jv(t,s);const i=function(c){if(c.length!==0)return zv(jt.create(c,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(c){if(c.length!==0)return c.map(u=>function(d){return{field:Gr(d.field),direction:uO(d.dir)}}(u))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const a=uu(t,e.limit);return a!==null&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=function(c){return{before:c.inclusive,values:c.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),{ut:n,parent:s}}function lO(t){let e=nO(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){Ae(r===1);const u=n.from[0];u.allDescendants?s=u.collectionId:e=e.child(u.collectionId)}let i=[];n.where&&(i=function(h){const d=Hv(h);return d instanceof jt&&yv(d)?d.getFilters():[d]}(n.where));let o=[];n.orderBy&&(o=function(h){return h.map(d=>function(g){return new Mi(Qr(g.field),function(v){switch(v){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(g.direction))}(d))}(n.orderBy));let a=null;n.limit&&(a=function(h){let d;return d=typeof h=="object"?h.value:h,cl(d)?null:d}(n.limit));let l=null;n.startAt&&(l=function(h){const d=!!h.before,f=h.values||[];return new _a(f,d)}(n.startAt));let c=null;return n.endAt&&(c=function(h){const d=!h.before,f=h.values||[];return new _a(f,d)}(n.endAt)),Sx(e,s,o,i,a,"F",l,c)}function cO(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return J()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function Hv(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Qr(n.unaryFilter.field);return $e.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Qr(n.unaryFilter.field);return $e.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Qr(n.unaryFilter.field);return $e.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Qr(n.unaryFilter.field);return $e.create(o,"!=",{nullValue:"NULL_VALUE"});default:return J()}}(t):t.fieldFilter!==void 0?function(n){return $e.create(Qr(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return J()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return jt.create(n.compositeFilter.filters.map(r=>Hv(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return J()}}(n.compositeFilter.op))}(t):J()}function uO(t){return Jx[t]}function hO(t){return Xx[t]}function dO(t){return Zx[t]}function Gr(t){return{fieldPath:t.canonicalString()}}function Qr(t){return nt.fromServerFormat(t.fieldPath)}function zv(t){return t instanceof $e?function(n){if(n.op==="=="){if(Op(n.value))return{unaryFilter:{field:Gr(n.field),op:"IS_NAN"}};if(xp(n.value))return{unaryFilter:{field:Gr(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Op(n.value))return{unaryFilter:{field:Gr(n.field),op:"IS_NOT_NAN"}};if(xp(n.value))return{unaryFilter:{field:Gr(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Gr(n.field),op:hO(n.op),value:n.value}}}(t):t instanceof jt?function(n){const r=n.getFilters().map(s=>zv(s));return r.length===1?r[0]:{compositeFilter:{op:dO(n.op),filters:r}}}(t):J()}function fO(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Kv(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bn{constructor(e,n,r,s,i=ee.min(),o=ee.min(),a=ft.EMPTY_BYTE_STRING,l=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=l}withSequenceNumber(e){return new Bn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Bn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Bn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Bn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pO{constructor(e){this.ct=e}}function mO(t){const e=lO({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?cu(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gO{constructor(){this._n=new _O}addToCollectionParentIndex(e,n){return this._n.add(n),S.resolve()}getCollectionParents(e,n){return S.resolve(this._n.getEntries(n))}addFieldIndex(e,n){return S.resolve()}deleteFieldIndex(e,n){return S.resolve()}deleteAllFieldIndexes(e){return S.resolve()}createTargetIndexes(e,n){return S.resolve()}getDocumentsMatchingTarget(e,n){return S.resolve(null)}getIndexType(e,n){return S.resolve(0)}getFieldIndexes(e,n){return S.resolve([])}getNextCollectionGroupToUpdate(e){return S.resolve(null)}getMinOffset(e,n){return S.resolve(Zn.min())}getMinOffsetFromCollectionGroup(e,n){return S.resolve(Zn.min())}updateCollectionGroup(e,n,r){return S.resolve()}updateIndexEntries(e,n){return S.resolve()}}class _O{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new st(Se.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new st(Se.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ys{constructor(e){this.On=e}next(){return this.On+=2,this.On}static Nn(){return new ys(0)}static Ln(){return new ys(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yO{constructor(){this.changes=new Ps(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,lt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?S.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vO{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EO{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&ci(r.mutation,s,Rt.empty(),He.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ce()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ce()){const s=Ar();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=qs();return i.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Ar();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ce()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,s){let i=Tn();const o=li(),a=function(){return li()}();return n.forEach((l,c)=>{const u=r.get(c.key);s.has(c.key)&&(u===void 0||u.mutation instanceof ar)?i=i.insert(c.key,c):u!==void 0?(o.set(c.key,u.mutation.getFieldMask()),ci(u.mutation,c,u.mutation.getFieldMask(),He.now())):o.set(c.key,Rt.empty())}),this.recalculateAndSaveOverlays(e,i).next(l=>(l.forEach((c,u)=>o.set(c,u)),n.forEach((c,u)=>{var h;return a.set(c,new vO(u,(h=o.get(c))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=li();let s=new De((o,a)=>o-a),i=ce();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const c=n.get(l);if(c===null)return;let u=r.get(l)||Rt.empty();u=a.applyToLocalView(c,u),r.set(l,u);const h=(s.get(a.batchId)||ce()).add(l);s=s.insert(a.batchId,h)})}).next(()=>{const o=[],a=s.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),c=l.key,u=l.value,h=Sv();u.forEach(d=>{if(!i.has(d)){const f=Vv(n.get(d),r.get(d));f!==null&&h.set(d,f),i=i.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,c,h))}return S.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(o){return K.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):wv(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):S.resolve(Ar());let a=-1,l=i;return o.next(c=>S.forEach(c,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(u)?S.resolve():this.remoteDocumentCache.getEntry(e,u).next(d=>{l=l.insert(u,d)}))).next(()=>this.populateOverlays(e,c,i)).next(()=>this.computeViews(e,l,c,ce())).next(u=>({batchId:a,changes:Rv(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new K(n)).next(r=>{let s=qs();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=qs();return this.indexManager.getCollectionParents(e,i).next(a=>S.forEach(a,l=>{const c=function(h,d){return new Cs(d,null,h.explicitOrderBy.slice(),h.filters.slice(),h.limit,h.limitType,h.startAt,h.endAt)}(n,l.child(i));return this.getDocumentsMatchingCollectionQuery(e,c,r,s).next(u=>{u.forEach((h,d)=>{o=o.insert(h,d)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((l,c)=>{const u=c.getKey();o.get(u)===null&&(o=o.insert(u,lt.newInvalidDocument(u)))});let a=qs();return o.forEach((l,c)=>{const u=i.get(l);u!==void 0&&ci(u.mutation,c,Rt.empty(),He.now()),dl(n,c)&&(a=a.insert(l,c))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TO{constructor(e){this.serializer=e,this.cr=new Map,this.lr=new Map}getBundleMetadata(e,n){return S.resolve(this.cr.get(n))}saveBundleMetadata(e,n){return this.cr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:nn(s.createTime)}}(n)),S.resolve()}getNamedQuery(e,n){return S.resolve(this.lr.get(n))}saveNamedQuery(e,n){return this.lr.set(n.name,function(s){return{name:s.name,query:mO(s.bundledQuery),readTime:nn(s.readTime)}}(n)),S.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wO{constructor(){this.overlays=new De(K.comparator),this.hr=new Map}getOverlay(e,n){return S.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Ar();return S.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.ht(e,n,i)}),S.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.hr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.hr.delete(r)),S.resolve()}getOverlaysForCollection(e,n,r){const s=Ar(),i=n.length+1,o=new K(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,c=l.getKey();if(!n.isPrefixOf(c.path))break;c.path.length===i&&l.largestBatchId>r&&s.set(l.getKey(),l)}return S.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new De((c,u)=>c-u);const o=this.overlays.getIterator();for(;o.hasNext();){const c=o.getNext().value;if(c.getKey().getCollectionGroup()===n&&c.largestBatchId>r){let u=i.get(c.largestBatchId);u===null&&(u=Ar(),i=i.insert(c.largestBatchId,u)),u.set(c.getKey(),c)}}const a=Ar(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((c,u)=>a.set(c,u)),!(a.size()>=s)););return S.resolve(a)}ht(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.hr.get(s.largestBatchId).delete(r.key);this.hr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new zx(n,r));let i=this.hr.get(n);i===void 0&&(i=ce(),this.hr.set(n,i)),this.hr.set(n,i.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gh{constructor(){this.Pr=new st(We.Ir),this.Tr=new st(We.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(e,n){const r=new We(e,n);this.Pr=this.Pr.add(r),this.Tr=this.Tr.add(r)}dr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Ar(new We(e,n))}Rr(e,n){e.forEach(r=>this.removeReference(r,n))}Vr(e){const n=new K(new Se([])),r=new We(n,e),s=new We(n,e+1),i=[];return this.Tr.forEachInRange([r,s],o=>{this.Ar(o),i.push(o.key)}),i}mr(){this.Pr.forEach(e=>this.Ar(e))}Ar(e){this.Pr=this.Pr.delete(e),this.Tr=this.Tr.delete(e)}gr(e){const n=new K(new Se([])),r=new We(n,e),s=new We(n,e+1);let i=ce();return this.Tr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new We(e,0),r=this.Pr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class We{constructor(e,n){this.key=e,this.pr=n}static Ir(e,n){return K.comparator(e.key,n.key)||_e(e.pr,n.pr)}static Er(e,n){return _e(e.pr,n.pr)||K.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IO{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.yr=1,this.wr=new st(We.Ir)}checkEmpty(e){return S.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Hx(i,n,r,s);this.mutationQueue.push(o);for(const a of s)this.wr=this.wr.add(new We(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return S.resolve(o)}lookupMutationBatch(e,n){return S.resolve(this.Sr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.br(r),i=s<0?0:s;return S.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return S.resolve(this.mutationQueue.length===0?-1:this.yr-1)}getAllMutationBatches(e){return S.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new We(n,0),s=new We(n,Number.POSITIVE_INFINITY),i=[];return this.wr.forEachInRange([r,s],o=>{const a=this.Sr(o.pr);i.push(a)}),S.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new st(_e);return n.forEach(s=>{const i=new We(s,0),o=new We(s,Number.POSITIVE_INFINITY);this.wr.forEachInRange([i,o],a=>{r=r.add(a.pr)})}),S.resolve(this.Dr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;K.isDocumentKey(i)||(i=i.child(""));const o=new We(new K(i),0);let a=new st(_e);return this.wr.forEachWhile(l=>{const c=l.key.path;return!!r.isPrefixOf(c)&&(c.length===s&&(a=a.add(l.pr)),!0)},o),S.resolve(this.Dr(a))}Dr(e){const n=[];return e.forEach(r=>{const s=this.Sr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){Ae(this.Cr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.wr;return S.forEach(n.mutations,s=>{const i=new We(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.wr=r})}Mn(e){}containsKey(e,n){const r=new We(n,0),s=this.wr.firstAfterOrEqual(r);return S.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,S.resolve()}Cr(e,n){return this.br(e)}br(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Sr(e){const n=this.br(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AO{constructor(e){this.vr=e,this.docs=function(){return new De(K.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.vr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return S.resolve(r?r.document.mutableCopy():lt.newInvalidDocument(n))}getEntries(e,n){let r=Tn();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():lt.newInvalidDocument(s))}),S.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=Tn();const o=n.path,a=new K(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:c,value:{document:u}}=l.getNext();if(!o.isPrefixOf(c.path))break;c.path.length>o.length+1||lx(ax(u),r)<=0||(s.has(u.key)||dl(n,u))&&(i=i.insert(u.key,u.mutableCopy()))}return S.resolve(i)}getAllFromCollectionGroup(e,n,r,s){J()}Fr(e,n){return S.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new bO(this)}getSize(e){return S.resolve(this.size)}}class bO extends yO{constructor(e){super(),this.ar=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.ar.addEntry(e,s)):this.ar.removeEntry(r)}),S.waitFor(n)}getFromCache(e,n){return this.ar.getEntry(e,n)}getAllFromCache(e,n){return this.ar.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RO{constructor(e){this.persistence=e,this.Mr=new Ps(n=>qh(n),Hh),this.lastRemoteSnapshotVersion=ee.min(),this.highestTargetId=0,this.Or=0,this.Nr=new Gh,this.targetCount=0,this.Lr=ys.Nn()}forEachTarget(e,n){return this.Mr.forEach((r,s)=>n(s)),S.resolve()}getLastRemoteSnapshotVersion(e){return S.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return S.resolve(this.Or)}allocateTargetId(e){return this.highestTargetId=this.Lr.next(),S.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Or&&(this.Or=n),S.resolve()}qn(e){this.Mr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Lr=new ys(n),this.highestTargetId=n),e.sequenceNumber>this.Or&&(this.Or=e.sequenceNumber)}addTargetData(e,n){return this.qn(n),this.targetCount+=1,S.resolve()}updateTargetData(e,n){return this.qn(n),S.resolve()}removeTargetData(e,n){return this.Mr.delete(n.target),this.Nr.Vr(n.targetId),this.targetCount-=1,S.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Mr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Mr.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),s++)}),S.waitFor(i).next(()=>s)}getTargetCount(e){return S.resolve(this.targetCount)}getTargetData(e,n){const r=this.Mr.get(n)||null;return S.resolve(r)}addMatchingKeys(e,n,r){return this.Nr.dr(n,r),S.resolve()}removeMatchingKeys(e,n,r){this.Nr.Rr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),S.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Nr.Vr(n),S.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Nr.gr(n);return S.resolve(r)}containsKey(e,n){return S.resolve(this.Nr.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SO{constructor(e,n){this.Br={},this.overlays={},this.kr=new Uh(0),this.qr=!1,this.qr=!0,this.referenceDelegate=e(this),this.Qr=new RO(this),this.indexManager=new gO,this.remoteDocumentCache=function(s){return new AO(s)}(r=>this.referenceDelegate.Kr(r)),this.serializer=new pO(n),this.$r=new TO(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new wO,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Br[e.toKey()];return r||(r=new IO(n,this.referenceDelegate),this.Br[e.toKey()]=r),r}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(e,n,r){V("MemoryPersistence","Starting transaction:",e);const s=new CO(this.kr.next());return this.referenceDelegate.Ur(),r(s).next(i=>this.referenceDelegate.Wr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Gr(e,n){return S.or(Object.values(this.Br).map(r=>()=>r.containsKey(e,n)))}}class CO extends ux{constructor(e){super(),this.currentSequenceNumber=e}}class Qh{constructor(e){this.persistence=e,this.zr=new Gh,this.jr=null}static Hr(e){return new Qh(e)}get Jr(){if(this.jr)return this.jr;throw J()}addReference(e,n,r){return this.zr.addReference(r,n),this.Jr.delete(r.toString()),S.resolve()}removeReference(e,n,r){return this.zr.removeReference(r,n),this.Jr.add(r.toString()),S.resolve()}markPotentiallyOrphaned(e,n){return this.Jr.add(n.toString()),S.resolve()}removeTarget(e,n){this.zr.Vr(n.targetId).forEach(s=>this.Jr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.Jr.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}Ur(){this.jr=new Set}Wr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return S.forEach(this.Jr,r=>{const s=K.fromPath(r);return this.Yr(e,s).next(i=>{i||n.removeEntry(s,ee.min())})}).next(()=>(this.jr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Yr(e,n).next(r=>{r?this.Jr.delete(n.toString()):this.Jr.add(n.toString())})}Kr(e){return 0}Yr(e,n){return S.or([()=>S.resolve(this.zr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Gr(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yh{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.qi=r,this.Qi=s}static Ki(e,n){let r=ce(),s=ce();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Yh(e,n.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PO{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xO{constructor(){this.$i=!1,this.Ui=!1,this.Wi=100,this.Gi=function(){return mR()?8:Ir.v(je())>0?6:4}()}initialize(e,n){this.zi=e,this.indexManager=n,this.$i=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.ji(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.Hi(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new PO;return this.Ji(e,n,o).next(a=>{if(i.result=a,this.Ui)return this.Yi(e,n,o,a.size)})}).next(()=>i.result)}Yi(e,n,r,s){return r.documentReadCount<this.Wi?(Fs()<=he.DEBUG&&V("QueryEngine","SDK will not create cache indexes for query:",Wr(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Wi,"documents"),S.resolve()):(Fs()<=he.DEBUG&&V("QueryEngine","Query:",Wr(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Gi*s?(Fs()<=he.DEBUG&&V("QueryEngine","The SDK decides to create cache indexes for query:",Wr(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,en(n))):S.resolve())}ji(e,n){if(Np(n))return S.resolve(null);let r=en(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=cu(n,null,"F"),r=en(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=ce(...i);return this.zi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const c=this.Zi(n,a);return this.Xi(n,c,o,l.readTime)?this.ji(e,cu(n,null,"F")):this.es(e,c,n,l)}))})))}Hi(e,n,r,s){return Np(n)||s.isEqual(ee.min())?S.resolve(null):this.zi.getDocuments(e,r).next(i=>{const o=this.Zi(n,i);return this.Xi(n,o,r,s)?S.resolve(null):(Fs()<=he.DEBUG&&V("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Wr(n)),this.es(e,o,n,ox(s,-1)).next(a=>a))})}Zi(e,n){let r=new st(Av(e));return n.forEach((s,i)=>{dl(e,i)&&(r=r.add(i))}),r}Xi(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Ji(e,n,r){return Fs()<=he.DEBUG&&V("QueryEngine","Using full collection scan to execute query:",Wr(n)),this.zi.getDocumentsMatchingQuery(e,n,Zn.min(),r)}es(e,n,r,s){return this.zi.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OO{constructor(e,n,r,s){this.persistence=e,this.ts=n,this.serializer=s,this.ns=new De(_e),this.rs=new Ps(i=>qh(i),Hh),this.ss=new Map,this.os=e.getRemoteDocumentCache(),this.Qr=e.getTargetCache(),this.$r=e.getBundleCache(),this._s(r)}_s(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new EO(this.os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.os.setIndexManager(this.indexManager),this.ts.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.ns))}}function kO(t,e,n,r){return new OO(t,e,n,r)}async function Wv(t,e){const n=ne(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n._s(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],a=[];let l=ce();for(const c of s){o.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}for(const c of i){a.push(c.batchId);for(const u of c.mutations)l=l.add(u.key)}return n.localDocuments.getDocuments(r,l).next(c=>({us:c,removedBatchIds:o,addedBatchIds:a}))})})}function DO(t,e){const n=ne(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.os.newChangeBuffer({trackRemovals:!0});return function(a,l,c,u){const h=c.batch,d=h.keys();let f=S.resolve();return d.forEach(g=>{f=f.next(()=>u.getEntry(l,g)).next(y=>{const v=c.docVersions.get(g);Ae(v!==null),y.version.compareTo(v)<0&&(h.applyToRemoteDocument(y,c),y.isValidDocument()&&(y.setReadTime(c.commitVersion),u.addEntry(y)))})}),f.next(()=>a.mutationQueue.removeMutationBatch(l,h))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let l=ce();for(let c=0;c<a.mutationResults.length;++c)a.mutationResults[c].transformResults.length>0&&(l=l.add(a.batch.mutations[c].key));return l}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function Gv(t){const e=ne(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Qr.getLastRemoteSnapshotVersion(n))}function VO(t,e){const n=ne(t),r=e.snapshotVersion;let s=n.ns;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.os.newChangeBuffer({trackRemovals:!0});s=n.ns;const a=[];e.targetChanges.forEach((u,h)=>{const d=s.get(h);if(!d)return;a.push(n.Qr.removeMatchingKeys(i,u.removedDocuments,h).next(()=>n.Qr.addMatchingKeys(i,u.addedDocuments,h)));let f=d.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(h)!==null?f=f.withResumeToken(ft.EMPTY_BYTE_STRING,ee.min()).withLastLimboFreeSnapshotVersion(ee.min()):u.resumeToken.approximateByteSize()>0&&(f=f.withResumeToken(u.resumeToken,r)),s=s.insert(h,f),function(y,v,E){return y.resumeToken.approximateByteSize()===0||v.snapshotVersion.toMicroseconds()-y.snapshotVersion.toMicroseconds()>=3e8?!0:E.addedDocuments.size+E.modifiedDocuments.size+E.removedDocuments.size>0}(d,f,u)&&a.push(n.Qr.updateTargetData(i,f))});let l=Tn(),c=ce();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,u))}),a.push(NO(i,o,e.documentUpdates).next(u=>{l=u.cs,c=u.ls})),!r.isEqual(ee.min())){const u=n.Qr.getLastRemoteSnapshotVersion(i).next(h=>n.Qr.setTargetsMetadata(i,i.currentSequenceNumber,r));a.push(u)}return S.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,l,c)).next(()=>l)}).then(i=>(n.ns=s,i))}function NO(t,e,n){let r=ce(),s=ce();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=Tn();return n.forEach((a,l)=>{const c=i.get(a);l.isFoundDocument()!==c.isFoundDocument()&&(s=s.add(a)),l.isNoDocument()&&l.version.isEqual(ee.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!c.isValidDocument()||l.version.compareTo(c.version)>0||l.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):V("LocalStore","Ignoring outdated watch update for ",a,". Current version:",c.version," Watch version:",l.version)}),{cs:o,ls:s}})}function MO(t,e){const n=ne(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function LO(t,e){const n=ne(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Qr.getTargetData(r,e).next(i=>i?(s=i,S.resolve(s)):n.Qr.allocateTargetId(r).next(o=>(s=new Bn(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Qr.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.ns.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.ns=n.ns.insert(r.targetId,r),n.rs.set(e,r.targetId)),r})}async function pu(t,e,n){const r=ne(t),s=r.ns.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!io(o))throw o;V("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.ns=r.ns.remove(e),r.rs.delete(s.target)}function Kp(t,e,n){const r=ne(t);let s=ee.min(),i=ce();return r.persistence.runTransaction("Execute query","readwrite",o=>function(l,c,u){const h=ne(l),d=h.rs.get(u);return d!==void 0?S.resolve(h.ns.get(d)):h.Qr.getTargetData(c,u)}(r,o,en(e)).next(a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,r.Qr.getMatchingKeysForTargetId(o,a.targetId).next(l=>{i=l})}).next(()=>r.ts.getDocumentsMatchingQuery(o,e,n?s:ee.min(),n?i:ce())).next(a=>(FO(r,Px(e),a),{documents:a,hs:i})))}function FO(t,e,n){let r=t.ss.get(e)||ee.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.ss.set(e,r)}class Wp{constructor(){this.activeTargetIds=Nx()}As(e){this.activeTargetIds=this.activeTargetIds.add(e)}Rs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ds(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class UO{constructor(){this.no=new Wp,this.ro={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.no.As(e),this.ro[e]||"not-current"}updateQueryState(e,n,r){this.ro[e]=n}removeLocalQueryTarget(e){this.no.Rs(e)}isLocalQueryTarget(e){return this.no.activeTargetIds.has(e)}clearQueryState(e){delete this.ro[e]}getAllActiveQueryTargets(){return this.no.activeTargetIds}isActiveQueryTarget(e){return this.no.activeTargetIds.has(e)}start(){return this.no=new Wp,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $O{io(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gp{constructor(){this.so=()=>this.oo(),this._o=()=>this.ao(),this.uo=[],this.co()}io(e){this.uo.push(e)}shutdown(){window.removeEventListener("online",this.so),window.removeEventListener("offline",this._o)}co(){window.addEventListener("online",this.so),window.addEventListener("offline",this._o)}oo(){V("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.uo)e(0)}ao(){V("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.uo)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Oo=null;function ac(){return Oo===null?Oo=function(){return 268435456+Math.round(2147483648*Math.random())}():Oo++,"0x"+Oo.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BO={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jO{constructor(e){this.lo=e.lo,this.ho=e.ho}Po(e){this.Io=e}To(e){this.Eo=e}onMessage(e){this.Ao=e}close(){this.ho()}send(e){this.lo(e)}Ro(){this.Io()}Vo(e){this.Eo(e)}mo(e){this.Ao(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ot="WebChannelConnection";class qO extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.fo=r+"://"+n.host,this.po=`projects/${s}/databases/${i}`,this.yo=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get wo(){return!1}So(n,r,s,i,o){const a=ac(),l=this.bo(n,r.toUriEncodedString());V("RestConnection",`Sending RPC '${n}' ${a}:`,l,s);const c={"google-cloud-resource-prefix":this.po,"x-goog-request-params":this.yo};return this.Do(c,i,o),this.Co(n,l,c,s).then(u=>(V("RestConnection",`Received RPC '${n}' ${a}: `,u),u),u=>{throw ps("RestConnection",`RPC '${n}' ${a} failed with error: `,u,"url: ",l,"request:",s),u})}vo(n,r,s,i,o,a){return this.So(n,r,s,i,o)}Do(n,r,s){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Ss}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,o)=>n[o]=i),s&&s.headers.forEach((i,o)=>n[o]=i)}bo(n,r){const s=BO[n];return`${this.fo}/v1/${r}:${s}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Co(e,n,r,s){const i=ac();return new Promise((o,a)=>{const l=new QP;l.setWithCredentials(!0),l.listenOnce(WP.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case ic.NO_ERROR:const u=l.getResponseJson();V(ot,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(u)),o(u);break;case ic.TIMEOUT:V(ot,`RPC '${e}' ${i} timed out`),a(new U(A.DEADLINE_EXCEEDED,"Request time out"));break;case ic.HTTP_ERROR:const h=l.getStatus();if(V(ot,`RPC '${e}' ${i} failed with status:`,h,"response text:",l.getResponseText()),h>0){let d=l.getResponseJson();Array.isArray(d)&&(d=d[0]);const f=d==null?void 0:d.error;if(f&&f.status&&f.message){const g=function(v){const E=v.toLowerCase().replace(/_/g,"-");return Object.values(A).indexOf(E)>=0?E:A.UNKNOWN}(f.status);a(new U(g,f.message))}else a(new U(A.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new U(A.UNAVAILABLE,"Connection failed."));break;default:J()}}finally{V(ot,`RPC '${e}' ${i} completed.`)}});const c=JSON.stringify(s);V(ot,`RPC '${e}' ${i} sending request:`,s),l.send(n,"POST",c,r,15)})}Fo(e,n,r){const s=ac(),i=[this.fo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=zP(),a=KP(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;c!==void 0&&(l.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Do(l.initMessageHeaders,n,r),l.encodeInitMessageHeaders=!0;const u=i.join("");V(ot,`Creating RPC '${e}' stream ${s}: ${u}`,l);const h=o.createWebChannel(u,l);let d=!1,f=!1;const g=new jO({lo:v=>{f?V(ot,`Not sending because RPC '${e}' stream ${s} is closed:`,v):(d||(V(ot,`Opening RPC '${e}' stream ${s} transport.`),h.open(),d=!0),V(ot,`RPC '${e}' stream ${s} sending:`,v),h.send(v))},ho:()=>h.close()}),y=(v,E,I)=>{v.listen(E,T=>{try{I(T)}catch(x){setTimeout(()=>{throw x},0)}})};return y(h,Co.EventType.OPEN,()=>{f||V(ot,`RPC '${e}' stream ${s} transport opened.`)}),y(h,Co.EventType.CLOSE,()=>{f||(f=!0,V(ot,`RPC '${e}' stream ${s} transport closed`),g.Vo())}),y(h,Co.EventType.ERROR,v=>{f||(f=!0,ps(ot,`RPC '${e}' stream ${s} transport errored:`,v),g.Vo(new U(A.UNAVAILABLE,"The operation could not be completed")))}),y(h,Co.EventType.MESSAGE,v=>{var E;if(!f){const I=v.data[0];Ae(!!I);const T=I,x=T.error||((E=T[0])===null||E===void 0?void 0:E.error);if(x){V(ot,`RPC '${e}' stream ${s} received error:`,x);const $=x.status;let M=function(ie){const ue=Fe[ie];if(ue!==void 0)return Lv(ue)}($),ae=x.message;M===void 0&&(M=A.INTERNAL,ae="Unknown error status: "+$+" with message "+x.message),f=!0,g.Vo(new U(M,ae)),h.close()}else V(ot,`RPC '${e}' stream ${s} received:`,I),g.mo(I)}}),y(a,GP.STAT_EVENT,v=>{v.stat===Ip.PROXY?V(ot,`RPC '${e}' stream ${s} detected buffering proxy`):v.stat===Ip.NOPROXY&&V(ot,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{g.Ro()},0),g}}function lc(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gl(t){return new eO(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qv{constructor(e,n,r=1e3,s=1.5,i=6e4){this.oi=e,this.timerId=n,this.Mo=r,this.xo=s,this.Oo=i,this.No=0,this.Lo=null,this.Bo=Date.now(),this.reset()}reset(){this.No=0}ko(){this.No=this.Oo}qo(e){this.cancel();const n=Math.floor(this.No+this.Qo()),r=Math.max(0,Date.now()-this.Bo),s=Math.max(0,n-r);s>0&&V("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.No} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Lo=this.oi.enqueueAfterDelay(this.timerId,s,()=>(this.Bo=Date.now(),e())),this.No*=this.xo,this.No<this.Mo&&(this.No=this.Mo),this.No>this.Oo&&(this.No=this.Oo)}Ko(){this.Lo!==null&&(this.Lo.skipDelay(),this.Lo=null)}cancel(){this.Lo!==null&&(this.Lo.cancel(),this.Lo=null)}Qo(){return(Math.random()-.5)*this.No}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yv{constructor(e,n,r,s,i,o,a,l){this.oi=e,this.$o=r,this.Uo=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Wo=0,this.Go=null,this.zo=null,this.stream=null,this.jo=new Qv(e,n)}Ho(){return this.state===1||this.state===5||this.Jo()}Jo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Yo()}async stop(){this.Ho()&&await this.close(0)}Zo(){this.state=0,this.jo.reset()}Xo(){this.Jo()&&this.Go===null&&(this.Go=this.oi.enqueueAfterDelay(this.$o,6e4,()=>this.e_()))}t_(e){this.n_(),this.stream.send(e)}async e_(){if(this.Jo())return this.close(0)}n_(){this.Go&&(this.Go.cancel(),this.Go=null)}r_(){this.zo&&(this.zo.cancel(),this.zo=null)}async close(e,n){this.n_(),this.r_(),this.jo.cancel(),this.Wo++,e!==4?this.jo.reset():n&&n.code===A.RESOURCE_EXHAUSTED?(on(n.toString()),on("Using maximum backoff delay to prevent overloading the backend."),this.jo.ko()):n&&n.code===A.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.i_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.To(n)}i_(){}auth(){this.state=1;const e=this.s_(this.Wo),n=this.Wo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Wo===n&&this.o_(r,s)},r=>{e(()=>{const s=new U(A.UNKNOWN,"Fetching auth token failed: "+r.message);return this.__(s)})})}o_(e,n){const r=this.s_(this.Wo);this.stream=this.a_(e,n),this.stream.Po(()=>{r(()=>(this.state=2,this.zo=this.oi.enqueueAfterDelay(this.Uo,1e4,()=>(this.Jo()&&(this.state=3),Promise.resolve())),this.listener.Po()))}),this.stream.To(s=>{r(()=>this.__(s))}),this.stream.onMessage(s=>{r(()=>this.onMessage(s))})}Yo(){this.state=5,this.jo.qo(async()=>{this.state=0,this.start()})}__(e){return V("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}s_(e){return n=>{this.oi.enqueueAndForget(()=>this.Wo===e?n():(V("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class HO extends Yv{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}a_(e,n){return this.connection.Fo("Listen",e,n)}onMessage(e){this.jo.reset();const n=rO(this.serializer,e),r=function(i){if(!("targetChange"in i))return ee.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?ee.min():o.readTime?nn(o.readTime):ee.min()}(e);return this.listener.u_(n,r)}c_(e){const n={};n.database=fu(this.serializer),n.addTarget=function(i,o){let a;const l=o.target;if(a=au(l)?{documents:oO(i,l)}:{query:aO(i,l).ut},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=$v(i,o.resumeToken);const c=uu(i,o.expectedCount);c!==null&&(a.expectedCount=c)}else if(o.snapshotVersion.compareTo(ee.min())>0){a.readTime=Ea(i,o.snapshotVersion.toTimestamp());const c=uu(i,o.expectedCount);c!==null&&(a.expectedCount=c)}return a}(this.serializer,e);const r=cO(this.serializer,e);r&&(n.labels=r),this.t_(n)}l_(e){const n={};n.database=fu(this.serializer),n.removeTarget=e,this.t_(n)}}class zO extends Yv{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i,this.h_=!1}get P_(){return this.h_}start(){this.h_=!1,this.lastStreamToken=void 0,super.start()}i_(){this.h_&&this.I_([])}a_(e,n){return this.connection.Fo("Write",e,n)}onMessage(e){if(Ae(!!e.streamToken),this.lastStreamToken=e.streamToken,this.h_){this.jo.reset();const n=iO(e.writeResults,e.commitTime),r=nn(e.commitTime);return this.listener.T_(r,n)}return Ae(!e.writeResults||e.writeResults.length===0),this.h_=!0,this.listener.E_()}d_(){const e={};e.database=fu(this.serializer),this.t_(e)}I_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>sO(this.serializer,r))};this.t_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KO extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.A_=!1}R_(){if(this.A_)throw new U(A.FAILED_PRECONDITION,"The client has already been terminated.")}So(e,n,r,s){return this.R_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.So(e,hu(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===A.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new U(A.UNKNOWN,i.toString())})}vo(e,n,r,s,i){return this.R_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.vo(e,hu(n,r),s,o,a,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===A.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new U(A.UNKNOWN,o.toString())})}terminate(){this.A_=!0,this.connection.terminate()}}class WO{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.m_=0,this.f_=null,this.g_=!0}p_(){this.m_===0&&(this.y_("Unknown"),this.f_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.f_=null,this.w_("Backend didn't respond within 10 seconds."),this.y_("Offline"),Promise.resolve())))}S_(e){this.state==="Online"?this.y_("Unknown"):(this.m_++,this.m_>=1&&(this.b_(),this.w_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.y_("Offline")))}set(e){this.b_(),this.m_=0,e==="Online"&&(this.g_=!1),this.y_(e)}y_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}w_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.g_?(on(n),this.g_=!1):V("OnlineStateTracker",n)}b_(){this.f_!==null&&(this.f_.cancel(),this.f_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GO{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.D_=[],this.C_=new Map,this.v_=new Set,this.F_=[],this.M_=i,this.M_.io(o=>{r.enqueueAndForget(async()=>{Ur(this)&&(V("RemoteStore","Restarting streams for network reachability change."),await async function(l){const c=ne(l);c.v_.add(4),await lo(c),c.x_.set("Unknown"),c.v_.delete(4),await _l(c)}(this))})}),this.x_=new WO(r,s)}}async function _l(t){if(Ur(t))for(const e of t.F_)await e(!0)}async function lo(t){for(const e of t.F_)await e(!1)}function Jv(t,e){const n=ne(t);n.C_.has(e.targetId)||(n.C_.set(e.targetId,e),ed(n)?Zh(n):xs(n).Jo()&&Xh(n,e))}function Jh(t,e){const n=ne(t),r=xs(n);n.C_.delete(e),r.Jo()&&Xv(n,e),n.C_.size===0&&(r.Jo()?r.Xo():Ur(n)&&n.x_.set("Unknown"))}function Xh(t,e){if(t.O_.Oe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ee.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}xs(t).c_(e)}function Xv(t,e){t.O_.Oe(e),xs(t).l_(e)}function Zh(t){t.O_=new Yx({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),_t:e=>t.C_.get(e)||null,nt:()=>t.datastore.serializer.databaseId}),xs(t).start(),t.x_.p_()}function ed(t){return Ur(t)&&!xs(t).Ho()&&t.C_.size>0}function Ur(t){return ne(t).v_.size===0}function Zv(t){t.O_=void 0}async function QO(t){t.C_.forEach((e,n)=>{Xh(t,e)})}async function YO(t,e){Zv(t),ed(t)?(t.x_.S_(e),Zh(t)):t.x_.set("Unknown")}async function JO(t,e,n){if(t.x_.set("Online"),e instanceof Uv&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const a of i.targetIds)s.C_.has(a)&&(await s.remoteSyncer.rejectListen(a,o),s.C_.delete(a),s.O_.removeTarget(a))}(t,e)}catch(r){V("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Ta(t,r)}else if(e instanceof Wo?t.O_.$e(e):e instanceof Fv?t.O_.Je(e):t.O_.Ge(e),!n.isEqual(ee.min()))try{const r=await Gv(t.localStore);n.compareTo(r)>=0&&await function(i,o){const a=i.O_.it(o);return a.targetChanges.forEach((l,c)=>{if(l.resumeToken.approximateByteSize()>0){const u=i.C_.get(c);u&&i.C_.set(c,u.withResumeToken(l.resumeToken,o))}}),a.targetMismatches.forEach((l,c)=>{const u=i.C_.get(l);if(!u)return;i.C_.set(l,u.withResumeToken(ft.EMPTY_BYTE_STRING,u.snapshotVersion)),Xv(i,l);const h=new Bn(u.target,l,c,u.sequenceNumber);Xh(i,h)}),i.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){V("RemoteStore","Failed to raise snapshot:",r),await Ta(t,r)}}async function Ta(t,e,n){if(!io(e))throw e;t.v_.add(1),await lo(t),t.x_.set("Offline"),n||(n=()=>Gv(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{V("RemoteStore","Retrying IndexedDB access"),await n(),t.v_.delete(1),await _l(t)})}function e0(t,e){return e().catch(n=>Ta(t,n,e))}async function yl(t){const e=ne(t),n=tr(e);let r=e.D_.length>0?e.D_[e.D_.length-1].batchId:-1;for(;XO(e);)try{const s=await MO(e.localStore,r);if(s===null){e.D_.length===0&&n.Xo();break}r=s.batchId,ZO(e,s)}catch(s){await Ta(e,s)}t0(e)&&n0(e)}function XO(t){return Ur(t)&&t.D_.length<10}function ZO(t,e){t.D_.push(e);const n=tr(t);n.Jo()&&n.P_&&n.I_(e.mutations)}function t0(t){return Ur(t)&&!tr(t).Ho()&&t.D_.length>0}function n0(t){tr(t).start()}async function ek(t){tr(t).d_()}async function tk(t){const e=tr(t);for(const n of t.D_)e.I_(n.mutations)}async function nk(t,e,n){const r=t.D_.shift(),s=zh.from(r,e,n);await e0(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await yl(t)}async function rk(t,e){e&&tr(t).P_&&await async function(r,s){if(function(o){return Wx(o)&&o!==A.ABORTED}(s.code)){const i=r.D_.shift();tr(r).Zo(),await e0(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await yl(r)}}(t,e),t0(t)&&n0(t)}async function Qp(t,e){const n=ne(t);n.asyncQueue.verifyOperationInProgress(),V("RemoteStore","RemoteStore received new credentials");const r=Ur(n);n.v_.add(3),await lo(n),r&&n.x_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.v_.delete(3),await _l(n)}async function sk(t,e){const n=ne(t);e?(n.v_.delete(2),await _l(n)):e||(n.v_.add(2),await lo(n),n.x_.set("Unknown"))}function xs(t){return t.N_||(t.N_=function(n,r,s){const i=ne(n);return i.R_(),new HO(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Po:QO.bind(null,t),To:YO.bind(null,t),u_:JO.bind(null,t)}),t.F_.push(async e=>{e?(t.N_.Zo(),ed(t)?Zh(t):t.x_.set("Unknown")):(await t.N_.stop(),Zv(t))})),t.N_}function tr(t){return t.L_||(t.L_=function(n,r,s){const i=ne(n);return i.R_(),new zO(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Po:ek.bind(null,t),To:rk.bind(null,t),E_:tk.bind(null,t),T_:nk.bind(null,t)}),t.F_.push(async e=>{e?(t.L_.Zo(),await yl(t)):(await t.L_.stop(),t.D_.length>0&&(V("RemoteStore",`Stopping write stream with ${t.D_.length} pending writes`),t.D_=[]))})),t.L_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class td{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new _n,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,a=new td(e,n,o,s,i);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new U(A.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function nd(t,e){if(on("AsyncQueue",`${e}: ${t}`),io(t))return new U(A.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ls{constructor(e){this.comparator=e?(n,r)=>e(n,r)||K.comparator(n.key,r.key):(n,r)=>K.comparator(n.key,r.key),this.keyedMap=qs(),this.sortedSet=new De(this.comparator)}static emptySet(e){return new ls(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof ls)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new ls;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yp{constructor(){this.B_=new De(K.comparator)}track(e){const n=e.doc.key,r=this.B_.get(n);r?e.type!==0&&r.type===3?this.B_=this.B_.insert(n,e):e.type===3&&r.type!==1?this.B_=this.B_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.B_=this.B_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.B_=this.B_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.B_=this.B_.remove(n):e.type===1&&r.type===2?this.B_=this.B_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.B_=this.B_.insert(n,{type:2,doc:e.doc}):J():this.B_=this.B_.insert(n,e)}k_(){const e=[];return this.B_.inorderTraversal((n,r)=>{e.push(r)}),e}}class vs{constructor(e,n,r,s,i,o,a,l,c){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=c}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new vs(e,n,ls.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&hl(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ik{constructor(){this.q_=void 0,this.Q_=[]}K_(){return this.Q_.some(e=>e.U_())}}class ok{constructor(){this.queries=new Ps(e=>Iv(e),hl),this.onlineState="Unknown",this.W_=new Set}}async function r0(t,e){const n=ne(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.K_()&&e.U_()&&(r=2):(i=new ik,r=e.U_()?0:1);try{switch(r){case 0:i.q_=await n.onListen(s,!0);break;case 1:i.q_=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const a=nd(o,`Initialization of query '${Wr(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,i),i.Q_.push(e),e.G_(n.onlineState),i.q_&&e.z_(i.q_)&&rd(n)}async function s0(t,e){const n=ne(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.Q_.indexOf(e);o>=0&&(i.Q_.splice(o,1),i.Q_.length===0?s=e.U_()?0:1:!i.K_()&&e.U_()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function ak(t,e){const n=ne(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const a of o.Q_)a.z_(s)&&(r=!0);o.q_=s}}r&&rd(n)}function lk(t,e,n){const r=ne(t),s=r.queries.get(e);if(s)for(const i of s.Q_)i.onError(n);r.queries.delete(e)}function rd(t){t.W_.forEach(e=>{e.next()})}var mu,Jp;(Jp=mu||(mu={})).j_="default",Jp.Cache="cache";class i0{constructor(e,n,r){this.query=e,this.H_=n,this.J_=!1,this.Y_=null,this.onlineState="Unknown",this.options=r||{}}z_(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new vs(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.J_?this.Z_(e)&&(this.H_.next(e),n=!0):this.X_(e,this.onlineState)&&(this.ea(e),n=!0),this.Y_=e,n}onError(e){this.H_.error(e)}G_(e){this.onlineState=e;let n=!1;return this.Y_&&!this.J_&&this.X_(this.Y_,e)&&(this.ea(this.Y_),n=!0),n}X_(e,n){if(!e.fromCache||!this.U_())return!0;const r=n!=="Offline";return(!this.options.ta||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Z_(e){if(e.docChanges.length>0)return!0;const n=this.Y_&&this.Y_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ea(e){e=vs.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.J_=!0,this.H_.next(e)}U_(){return this.options.source!==mu.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o0{constructor(e){this.key=e}}class a0{constructor(e){this.key=e}}class ck{constructor(e,n){this.query=e,this.ua=n,this.ca=null,this.hasCachedResults=!1,this.current=!1,this.la=ce(),this.mutatedKeys=ce(),this.ha=Av(e),this.Pa=new ls(this.ha)}get Ia(){return this.ua}Ta(e,n){const r=n?n.Ea:new Yp,s=n?n.Pa:this.Pa;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,a=!1;const l=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,c=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((u,h)=>{const d=s.get(u),f=dl(this.query,h)?h:null,g=!!d&&this.mutatedKeys.has(d.key),y=!!f&&(f.hasLocalMutations||this.mutatedKeys.has(f.key)&&f.hasCommittedMutations);let v=!1;d&&f?d.data.isEqual(f.data)?g!==y&&(r.track({type:3,doc:f}),v=!0):this.da(d,f)||(r.track({type:2,doc:f}),v=!0,(l&&this.ha(f,l)>0||c&&this.ha(f,c)<0)&&(a=!0)):!d&&f?(r.track({type:0,doc:f}),v=!0):d&&!f&&(r.track({type:1,doc:d}),v=!0,(l||c)&&(a=!0)),v&&(f?(o=o.add(f),i=y?i.add(u):i.delete(u)):(o=o.delete(u),i=i.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),i=i.delete(u.key),r.track({type:1,doc:u})}return{Pa:o,Ea:r,Xi:a,mutatedKeys:i}}da(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.Pa;this.Pa=e.Pa,this.mutatedKeys=e.mutatedKeys;const o=e.Ea.k_();o.sort((u,h)=>function(f,g){const y=v=>{switch(v){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return J()}};return y(f)-y(g)}(u.type,h.type)||this.ha(u.doc,h.doc)),this.Aa(r),s=s!=null&&s;const a=n&&!s?this.Ra():[],l=this.la.size===0&&this.current&&!s?1:0,c=l!==this.ca;return this.ca=l,o.length!==0||c?{snapshot:new vs(this.query,e.Pa,i,o,e.mutatedKeys,l===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),Va:a}:{Va:a}}G_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Pa:this.Pa,Ea:new Yp,mutatedKeys:this.mutatedKeys,Xi:!1},!1)):{Va:[]}}ma(e){return!this.ua.has(e)&&!!this.Pa.has(e)&&!this.Pa.get(e).hasLocalMutations}Aa(e){e&&(e.addedDocuments.forEach(n=>this.ua=this.ua.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.ua=this.ua.delete(n)),this.current=e.current)}Ra(){if(!this.current)return[];const e=this.la;this.la=ce(),this.Pa.forEach(r=>{this.ma(r.key)&&(this.la=this.la.add(r.key))});const n=[];return e.forEach(r=>{this.la.has(r)||n.push(new a0(r))}),this.la.forEach(r=>{e.has(r)||n.push(new o0(r))}),n}fa(e){this.ua=e.hs,this.la=ce();const n=this.Ta(e.documents);return this.applyChanges(n,!0)}ga(){return vs.fromInitialDocuments(this.query,this.Pa,this.mutatedKeys,this.ca===0,this.hasCachedResults)}}class uk{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class hk{constructor(e){this.key=e,this.pa=!1}}class dk{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.ya={},this.wa=new Ps(a=>Iv(a),hl),this.Sa=new Map,this.ba=new Set,this.Da=new De(K.comparator),this.Ca=new Map,this.va=new Gh,this.Fa={},this.Ma=new Map,this.xa=ys.Ln(),this.onlineState="Unknown",this.Oa=void 0}get isPrimaryClient(){return this.Oa===!0}}async function fk(t,e,n=!0){const r=f0(t);let s;const i=r.wa.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.ga()):s=await l0(r,e,n,!0),s}async function pk(t,e){const n=f0(t);await l0(n,e,!0,!1)}async function l0(t,e,n,r){const s=await LO(t.localStore,en(e)),i=s.targetId,o=n?t.sharedClientState.addLocalQueryTarget(i):"not-current";let a;return r&&(a=await mk(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&Jv(t.remoteStore,s),a}async function mk(t,e,n,r,s){t.Na=(h,d,f)=>async function(y,v,E,I){let T=v.view.Ta(E);T.Xi&&(T=await Kp(y.localStore,v.query,!1).then(({documents:ae})=>v.view.Ta(ae,T)));const x=I&&I.targetChanges.get(v.targetId),$=I&&I.targetMismatches.get(v.targetId)!=null,M=v.view.applyChanges(T,y.isPrimaryClient,x,$);return Zp(y,v.targetId,M.Va),M.snapshot}(t,h,d,f);const i=await Kp(t.localStore,e,!0),o=new ck(e,i.hs),a=o.Ta(i.documents),l=ao.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),c=o.applyChanges(a,t.isPrimaryClient,l);Zp(t,n,c.Va);const u=new uk(e,n,o);return t.wa.set(e,u),t.Sa.has(n)?t.Sa.get(n).push(e):t.Sa.set(n,[e]),c.snapshot}async function gk(t,e,n){const r=ne(t),s=r.wa.get(e),i=r.Sa.get(s.targetId);if(i.length>1)return r.Sa.set(s.targetId,i.filter(o=>!hl(o,e))),void r.wa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await pu(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&Jh(r.remoteStore,s.targetId),gu(r,s.targetId)}).catch(so)):(gu(r,s.targetId),await pu(r.localStore,s.targetId,!0))}async function _k(t,e){const n=ne(t),r=n.wa.get(e),s=n.Sa.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Jh(n.remoteStore,r.targetId))}async function yk(t,e,n){const r=bk(t);try{const s=await function(o,a){const l=ne(o),c=He.now(),u=a.reduce((f,g)=>f.add(g.key),ce());let h,d;return l.persistence.runTransaction("Locally write mutations","readwrite",f=>{let g=Tn(),y=ce();return l.os.getEntries(f,u).next(v=>{g=v,g.forEach((E,I)=>{I.isValidDocument()||(y=y.add(E))})}).next(()=>l.localDocuments.getOverlayedDocuments(f,g)).next(v=>{h=v;const E=[];for(const I of a){const T=jx(I,h.get(I.key).overlayedDocument);T!=null&&E.push(new ar(I.key,T,mv(T.value.mapValue),tn.exists(!0)))}return l.mutationQueue.addMutationBatch(f,c,E,a)}).next(v=>{d=v;const E=v.applyToLocalDocumentSet(h,y);return l.documentOverlayCache.saveOverlays(f,v.batchId,E)})}).then(()=>({batchId:d.batchId,changes:Rv(h)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,a,l){let c=o.Fa[o.currentUser.toKey()];c||(c=new De(_e)),c=c.insert(a,l),o.Fa[o.currentUser.toKey()]=c}(r,s.batchId,n),await co(r,s.changes),await yl(r.remoteStore)}catch(s){const i=nd(s,"Failed to persist write");n.reject(i)}}async function c0(t,e){const n=ne(t);try{const r=await VO(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Ca.get(i);o&&(Ae(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.pa=!0:s.modifiedDocuments.size>0?Ae(o.pa):s.removedDocuments.size>0&&(Ae(o.pa),o.pa=!1))}),await co(n,r,e)}catch(r){await so(r)}}function Xp(t,e,n){const r=ne(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.wa.forEach((i,o)=>{const a=o.view.G_(e);a.snapshot&&s.push(a.snapshot)}),function(o,a){const l=ne(o);l.onlineState=a;let c=!1;l.queries.forEach((u,h)=>{for(const d of h.Q_)d.G_(a)&&(c=!0)}),c&&rd(l)}(r.eventManager,e),s.length&&r.ya.u_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function vk(t,e,n){const r=ne(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Ca.get(e),i=s&&s.key;if(i){let o=new De(K.comparator);o=o.insert(i,lt.newNoDocument(i,ee.min()));const a=ce().add(i),l=new ml(ee.min(),new Map,new De(_e),o,a);await c0(r,l),r.Da=r.Da.remove(i),r.Ca.delete(e),sd(r)}else await pu(r.localStore,e,!1).then(()=>gu(r,e,n)).catch(so)}async function Ek(t,e){const n=ne(t),r=e.batch.batchId;try{const s=await DO(n.localStore,e);h0(n,r,null),u0(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await co(n,s)}catch(s){await so(s)}}async function Tk(t,e,n){const r=ne(t);try{const s=await function(o,a){const l=ne(o);return l.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let u;return l.mutationQueue.lookupMutationBatch(c,a).next(h=>(Ae(h!==null),u=h.keys(),l.mutationQueue.removeMutationBatch(c,h))).next(()=>l.mutationQueue.performConsistencyCheck(c)).next(()=>l.documentOverlayCache.removeOverlaysForBatchId(c,u,a)).next(()=>l.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,u)).next(()=>l.localDocuments.getDocuments(c,u))})}(r.localStore,e);h0(r,e,n),u0(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await co(r,s)}catch(s){await so(s)}}function u0(t,e){(t.Ma.get(e)||[]).forEach(n=>{n.resolve()}),t.Ma.delete(e)}function h0(t,e,n){const r=ne(t);let s=r.Fa[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Fa[r.currentUser.toKey()]=s}}function gu(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Sa.get(e))t.wa.delete(r),n&&t.ya.La(r,n);t.Sa.delete(e),t.isPrimaryClient&&t.va.Vr(e).forEach(r=>{t.va.containsKey(r)||d0(t,r)})}function d0(t,e){t.ba.delete(e.path.canonicalString());const n=t.Da.get(e);n!==null&&(Jh(t.remoteStore,n),t.Da=t.Da.remove(e),t.Ca.delete(n),sd(t))}function Zp(t,e,n){for(const r of n)r instanceof o0?(t.va.addReference(r.key,e),wk(t,r)):r instanceof a0?(V("SyncEngine","Document no longer in limbo: "+r.key),t.va.removeReference(r.key,e),t.va.containsKey(r.key)||d0(t,r.key)):J()}function wk(t,e){const n=e.key,r=n.path.canonicalString();t.Da.get(n)||t.ba.has(r)||(V("SyncEngine","New document in limbo: "+n),t.ba.add(r),sd(t))}function sd(t){for(;t.ba.size>0&&t.Da.size<t.maxConcurrentLimboResolutions;){const e=t.ba.values().next().value;t.ba.delete(e);const n=new K(Se.fromString(e)),r=t.xa.next();t.Ca.set(r,new hk(n)),t.Da=t.Da.insert(n,r),Jv(t.remoteStore,new Bn(en(ul(n.path)),r,"TargetPurposeLimboResolution",Uh._e))}}async function co(t,e,n){const r=ne(t),s=[],i=[],o=[];r.wa.isEmpty()||(r.wa.forEach((a,l)=>{o.push(r.Na(l,e,n).then(c=>{if((c||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,c!=null&&c.fromCache?"not-current":"current"),c){s.push(c);const u=Yh.Ki(l.targetId,c);i.push(u)}}))}),await Promise.all(o),r.ya.u_(s),await async function(l,c){const u=ne(l);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>S.forEach(c,d=>S.forEach(d.qi,f=>u.persistence.referenceDelegate.addReference(h,d.targetId,f)).next(()=>S.forEach(d.Qi,f=>u.persistence.referenceDelegate.removeReference(h,d.targetId,f)))))}catch(h){if(!io(h))throw h;V("LocalStore","Failed to update sequence numbers: "+h)}for(const h of c){const d=h.targetId;if(!h.fromCache){const f=u.ns.get(d),g=f.snapshotVersion,y=f.withLastLimboFreeSnapshotVersion(g);u.ns=u.ns.insert(d,y)}}}(r.localStore,i))}async function Ik(t,e){const n=ne(t);if(!n.currentUser.isEqual(e)){V("SyncEngine","User change. New user:",e.toKey());const r=await Wv(n.localStore,e);n.currentUser=e,function(i,o){i.Ma.forEach(a=>{a.forEach(l=>{l.reject(new U(A.CANCELLED,o))})}),i.Ma.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await co(n,r.us)}}function Ak(t,e){const n=ne(t),r=n.Ca.get(e);if(r&&r.pa)return ce().add(r.key);{let s=ce();const i=n.Sa.get(e);if(!i)return s;for(const o of i){const a=n.wa.get(o);s=s.unionWith(a.view.Ia)}return s}}function f0(t){const e=ne(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=c0.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Ak.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=vk.bind(null,e),e.ya.u_=ak.bind(null,e.eventManager),e.ya.La=lk.bind(null,e.eventManager),e}function bk(t){const e=ne(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Ek.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Tk.bind(null,e),e}class em{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=gl(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return kO(this.persistence,new xO,e.initialUser,this.serializer)}createPersistence(e){return new SO(Qh.Hr,this.serializer)}createSharedClientState(e){return new UO}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Rk{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Xp(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Ik.bind(null,this.syncEngine),await sk(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new ok}()}createDatastore(e){const n=gl(e.databaseInfo.databaseId),r=function(i){return new qO(i)}(e.databaseInfo);return function(i,o,a,l){return new KO(i,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,a){return new GO(r,s,i,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>Xp(this.syncEngine,n,0),function(){return Gp.D()?new Gp:new $O}())}createSyncEngine(e,n){return function(s,i,o,a,l,c,u){const h=new dk(s,i,o,a,l,c);return u&&(h.Oa=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e;await async function(r){const s=ne(r);V("RemoteStore","RemoteStore shutting down."),s.v_.add(5),await lo(s),s.M_.shutdown(),s.x_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p0{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.qa(this.observer.next,e)}error(e){this.observer.error?this.qa(this.observer.error,e):on("Uncaught Error in snapshot listener:",e.toString())}Qa(){this.muted=!0}qa(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sk{constructor(e,n,r,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=at.UNAUTHENTICATED,this.clientId=dv.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async i=>{V("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(r,i=>(V("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new U(A.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new _n;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=nd(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function cc(t,e){t.asyncQueue.verifyOperationInProgress(),V("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await Wv(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function tm(t,e){t.asyncQueue.verifyOperationInProgress();const n=await Pk(t);V("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>Qp(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>Qp(e.remoteStore,s)),t._onlineComponents=e}function Ck(t){return t.name==="FirebaseError"?t.code===A.FAILED_PRECONDITION||t.code===A.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function Pk(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){V("FirestoreClient","Using user provided OfflineComponentProvider");try{await cc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!Ck(n))throw n;ps("Error using user provided cache. Falling back to memory cache: "+n),await cc(t,new em)}}else V("FirestoreClient","Using default OfflineComponentProvider"),await cc(t,new em);return t._offlineComponents}async function m0(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(V("FirestoreClient","Using user provided OnlineComponentProvider"),await tm(t,t._uninitializedComponentsProvider._online)):(V("FirestoreClient","Using default OnlineComponentProvider"),await tm(t,new Rk))),t._onlineComponents}function xk(t){return m0(t).then(e=>e.syncEngine)}async function _u(t){const e=await m0(t),n=e.eventManager;return n.onListen=fk.bind(null,e.syncEngine),n.onUnlisten=gk.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=pk.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=_k.bind(null,e.syncEngine),n}function Ok(t,e,n={}){const r=new _n;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,a,l,c){const u=new p0({next:d=>{o.enqueueAndForget(()=>s0(i,h));const f=d.docs.has(a);!f&&d.fromCache?c.reject(new U(A.UNAVAILABLE,"Failed to get document because the client is offline.")):f&&d.fromCache&&l&&l.source==="server"?c.reject(new U(A.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(d)},error:d=>c.reject(d)}),h=new i0(ul(a.path),u,{includeMetadataChanges:!0,ta:!0});return r0(i,h)}(await _u(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function g0(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nm=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _0(t,e,n){if(!n)throw new U(A.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function kk(t,e,n,r){if(e===!0&&r===!0)throw new U(A.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function rm(t){if(!K.isDocumentKey(t))throw new U(A.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function sm(t){if(K.isDocumentKey(t))throw new U(A.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function vl(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":J()}function yn(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new U(A.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=vl(t);throw new U(A.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class im{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new U(A.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new U(A.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}kk("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=g0((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new U(A.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new U(A.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new U(A.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class El{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new im({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new U(A.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new U(A.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new im(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new JP;switch(r.type){case"firstParty":return new tx(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new U(A.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=nm.get(n);r&&(V("ComponentProvider","Removing Datastore"),nm.delete(n),r.terminate())}(this),Promise.resolve()}}function Dk(t,e,n,r={}){var s;const i=(t=yn(t,El))._getSettings(),o=`${e}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&ps("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),r.mockUserToken){let a,l;if(typeof r.mockUserToken=="string")a=r.mockUserToken,l=at.MOCK_USER;else{a=cR(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new U(A.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");l=new at(c)}t._authCredentials=new XP(new hv(a,l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $r{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new $r(this.firestore,e,this._query)}}class _t{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Wn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new _t(this.firestore,e,this._key)}}class Wn extends $r{constructor(e,n,r){super(e,n,ul(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new _t(this.firestore,null,new K(e))}withConverter(e){return new Wn(this.firestore,e,this._path)}}function wn(t,e,...n){if(t=Ye(t),_0("collection","path",e),t instanceof El){const r=Se.fromString(e,...n);return sm(r),new Wn(t,null,r)}{if(!(t instanceof _t||t instanceof Wn))throw new U(A.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Se.fromString(e,...n));return sm(r),new Wn(t.firestore,null,r)}}function y0(t,e,...n){if(t=Ye(t),arguments.length===1&&(e=dv.newId()),_0("doc","path",e),t instanceof El){const r=Se.fromString(e,...n);return rm(r),new _t(t,null,new K(r))}{if(!(t instanceof _t||t instanceof Wn))throw new U(A.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Se.fromString(e,...n));return rm(r),new _t(t.firestore,t instanceof Wn?t.converter:null,new K(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vk{constructor(){this.nu=Promise.resolve(),this.ru=[],this.iu=!1,this.su=[],this.ou=null,this._u=!1,this.au=!1,this.uu=[],this.jo=new Qv(this,"async_queue_retry"),this.cu=()=>{const n=lc();n&&V("AsyncQueue","Visibility state changed to "+n.visibilityState),this.jo.Ko()};const e=lc();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.cu)}get isShuttingDown(){return this.iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.lu(),this.hu(e)}enterRestrictedMode(e){if(!this.iu){this.iu=!0,this.au=e||!1;const n=lc();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.cu)}}enqueue(e){if(this.lu(),this.iu)return new Promise(()=>{});const n=new _n;return this.hu(()=>this.iu&&this.au?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.ru.push(e),this.Pu()))}async Pu(){if(this.ru.length!==0){try{await this.ru[0](),this.ru.shift(),this.jo.reset()}catch(e){if(!io(e))throw e;V("AsyncQueue","Operation failed with retryable error: "+e)}this.ru.length>0&&this.jo.qo(()=>this.Pu())}}hu(e){const n=this.nu.then(()=>(this._u=!0,e().catch(r=>{this.ou=r,this._u=!1;const s=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw on("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this._u=!1,r))));return this.nu=n,n}enqueueAfterDelay(e,n,r){this.lu(),this.uu.indexOf(e)>-1&&(n=0);const s=td.createAndSchedule(this,e,n,r,i=>this.Iu(i));return this.su.push(s),s}lu(){this.ou&&J()}verifyOperationInProgress(){}async Tu(){let e;do e=this.nu,await e;while(e!==this.nu)}Eu(e){for(const n of this.su)if(n.timerId===e)return!0;return!1}du(e){return this.Tu().then(()=>{this.su.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.su)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Tu()})}Au(e){this.uu.push(e)}Iu(e){const n=this.su.indexOf(e);this.su.splice(n,1)}}function om(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const s=n;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1}(t,["next","error","complete"])}class Es extends El{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=function(){return new Vk}(),this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||v0(this),this._firestoreClient.terminate()}}function Nk(t,e){const n=typeof t=="object"?t:C_(),r=typeof t=="string"?t:e||"(default)",s=nh(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=aR("firestore");i&&Dk(s,...i)}return s}function id(t){return t._firestoreClient||v0(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function v0(t){var e,n,r;const s=t._freezeSettings(),i=function(a,l,c,u){return new mx(a,l,c,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,g0(u.experimentalLongPollingOptions),u.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._firestoreClient=new Sk(t._authCredentials,t._appCheckCredentials,t._queue,i),!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.localCache.kind,_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ts{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Ts(ft.fromBase64String(e))}catch(n){throw new U(A.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Ts(ft.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tl{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new U(A.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new nt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class od{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ad{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new U(A.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new U(A.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return _e(this._lat,e._lat)||_e(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mk=/^__.*__$/;class Lk{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new ar(e,this.data,this.fieldMask,n,this.fieldTransforms):new oo(e,this.data,n,this.fieldTransforms)}}class E0{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new ar(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function T0(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw J()}}class ld{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Ru(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Vu(){return this.settings.Vu}mu(e){return new ld(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}fu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.mu({path:r,gu:!1});return s.pu(e),s}yu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.mu({path:r,gu:!1});return s.Ru(),s}wu(e){return this.mu({path:void 0,gu:!0})}Su(e){return wa(e,this.settings.methodName,this.settings.bu||!1,this.path,this.settings.Du)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Ru(){if(this.path)for(let e=0;e<this.path.length;e++)this.pu(this.path.get(e))}pu(e){if(e.length===0)throw this.Su("Document fields must not be empty");if(T0(this.Vu)&&Mk.test(e))throw this.Su('Document fields cannot begin and end with "__"')}}class Fk{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||gl(e)}Cu(e,n,r,s=!1){return new ld({Vu:e,methodName:n,Du:r,path:nt.emptyPath(),gu:!1,bu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function cd(t){const e=t._freezeSettings(),n=gl(t._databaseId);return new Fk(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Uk(t,e,n,r,s,i={}){const o=t.Cu(i.merge||i.mergeFields?2:0,e,n,s);ud("Data must be an object, but it was:",o,r);const a=w0(r,o);let l,c;if(i.merge)l=new Rt(o.fieldMask),c=o.fieldTransforms;else if(i.mergeFields){const u=[];for(const h of i.mergeFields){const d=yu(e,h,n);if(!o.contains(d))throw new U(A.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);A0(u,d)||u.push(d)}l=new Rt(u),c=o.fieldTransforms.filter(h=>l.covers(h.field))}else l=null,c=o.fieldTransforms;return new Lk(new Tt(a),l,c)}class wl extends od{_toFieldTransform(e){if(e.Vu!==2)throw e.Vu===1?e.Su(`${this._methodName}() can only appear at the top level of your update data`):e.Su(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof wl}}function $k(t,e,n,r){const s=t.Cu(1,e,n);ud("Data must be an object, but it was:",s,r);const i=[],o=Tt.empty();Fr(r,(l,c)=>{const u=hd(e,l,n);c=Ye(c);const h=s.yu(u);if(c instanceof wl)i.push(u);else{const d=uo(c,h);d!=null&&(i.push(u),o.set(u,d))}});const a=new Rt(i);return new E0(o,a,s.fieldTransforms)}function Bk(t,e,n,r,s,i){const o=t.Cu(1,e,n),a=[yu(e,r,n)],l=[s];if(i.length%2!=0)throw new U(A.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<i.length;d+=2)a.push(yu(e,i[d])),l.push(i[d+1]);const c=[],u=Tt.empty();for(let d=a.length-1;d>=0;--d)if(!A0(c,a[d])){const f=a[d];let g=l[d];g=Ye(g);const y=o.yu(f);if(g instanceof wl)c.push(f);else{const v=uo(g,y);v!=null&&(c.push(f),u.set(f,v))}}const h=new Rt(c);return new E0(u,h,o.fieldTransforms)}function jk(t,e,n,r=!1){return uo(n,t.Cu(r?4:3,e))}function uo(t,e){if(I0(t=Ye(t)))return ud("Unsupported field value:",e,t),w0(t,e);if(t instanceof od)return function(r,s){if(!T0(s.Vu))throw s.Su(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Su(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.gu&&e.Vu!==4)throw e.Su("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const a of r){let l=uo(a,s.wu(o));l==null&&(l={nullValue:"NULL_VALUE"}),i.push(l),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=Ye(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Mx(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=He.fromDate(r);return{timestampValue:Ea(s.serializer,i)}}if(r instanceof He){const i=new He(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Ea(s.serializer,i)}}if(r instanceof ad)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Ts)return{bytesValue:$v(s.serializer,r._byteString)};if(r instanceof _t){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.Su(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Wh(r.firestore._databaseId||s.databaseId,r._key.path)}}throw s.Su(`Unsupported field value: ${vl(r)}`)}(t,e)}function w0(t,e){const n={};return fv(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Fr(t,(r,s)=>{const i=uo(s,e.fu(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function I0(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof He||t instanceof ad||t instanceof Ts||t instanceof _t||t instanceof od)}function ud(t,e,n){if(!I0(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=vl(n);throw r==="an object"?e.Su(t+" a custom object"):e.Su(t+" "+r)}}function yu(t,e,n){if((e=Ye(e))instanceof Tl)return e._internalPath;if(typeof e=="string")return hd(t,e);throw wa("Field path arguments must be of type string or ",t,!1,void 0,n)}const qk=new RegExp("[~\\*/\\[\\]]");function hd(t,e,n){if(e.search(qk)>=0)throw wa(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Tl(...e.split("."))._internalPath}catch{throw wa(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function wa(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(i||o)&&(l+=" (found",i&&(l+=` in field ${r}`),o&&(l+=` in document ${s}`),l+=")"),new U(A.INVALID_ARGUMENT,a+t+l)}function A0(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b0{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new _t(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Hk(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(dd("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class Hk extends b0{data(){return super.data()}}function dd(t,e){return typeof e=="string"?hd(t,e):e instanceof Tl?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zk(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new U(A.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class fd{}class R0 extends fd{}function Os(t,e,...n){let r=[];e instanceof fd&&r.push(e),r=r.concat(n),function(i){const o=i.filter(l=>l instanceof md).length,a=i.filter(l=>l instanceof pd).length;if(o>1||o>0&&a>0)throw new U(A.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)t=s._apply(t);return t}class pd extends R0{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new pd(e,n,r)}_apply(e){const n=this._parse(e);return S0(e._query,n),new $r(e.firestore,e.converter,lu(e._query,n))}_parse(e){const n=cd(e.firestore);return function(i,o,a,l,c,u,h){let d;if(c.isKeyField()){if(u==="array-contains"||u==="array-contains-any")throw new U(A.INVALID_ARGUMENT,`Invalid Query. You can't perform '${u}' queries on documentId().`);if(u==="in"||u==="not-in"){lm(h,u);const f=[];for(const g of h)f.push(am(l,i,g));d={arrayValue:{values:f}}}else d=am(l,i,h)}else u!=="in"&&u!=="not-in"&&u!=="array-contains-any"||lm(h,u),d=jk(a,o,h,u==="in"||u==="not-in");return $e.create(c,u,d)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}class md extends fd{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new md(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:jt.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,i){let o=s;const a=i.getFlattenedFilters();for(const l of a)S0(o,l),o=lu(o,l)}(e._query,n),new $r(e.firestore,e.converter,lu(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class gd extends R0{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new gd(e,n)}_apply(e){const n=function(s,i,o){if(s.startAt!==null)throw new U(A.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new U(A.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Mi(i,o)}(e._query,this._field,this._direction);return new $r(e.firestore,e.converter,function(s,i){const o=s.explicitOrderBy.concat([i]);return new Cs(s.path,s.collectionGroup,o,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(e._query,n))}}function ho(t,e="asc"){const n=e,r=dd("orderBy",t);return gd._create(r,n)}function am(t,e,n){if(typeof(n=Ye(n))=="string"){if(n==="")throw new U(A.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!wv(e)&&n.indexOf("/")!==-1)throw new U(A.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Se.fromString(n));if(!K.isDocumentKey(r))throw new U(A.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Pp(t,new K(r))}if(n instanceof _t)return Pp(t,n._key);throw new U(A.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${vl(n)}.`)}function lm(t,e){if(!Array.isArray(t)||t.length===0)throw new U(A.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function S0(t,e){const n=function(s,i){for(const o of s)for(const a of o.getFlattenedFilters())if(i.indexOf(a.op)>=0)return a.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new U(A.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new U(A.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class Kk{convertValue(e,n="none"){switch(Vr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ue(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Dr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw J()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Fr(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertGeoPoint(e){return new ad(Ue(e.latitude),Ue(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Bh(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Di(e));default:return null}}convertTimestamp(e){const n=er(e);return new He(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Se.fromString(e);Ae(Kv(r));const s=new Vi(r.get(1),r.get(3)),i=new K(r.popFirst(5));return s.isEqual(n)||on(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wk(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zs{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class C0 extends b0{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Go(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(dd("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Go extends C0{data(e={}){return super.data(e)}}class Gk{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new zs(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Go(this._firestore,this._userDataWriter,r.key,r,new zs(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new U(A.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(a=>{const l=new Go(s._firestore,s._userDataWriter,a.doc.key,a.doc,new zs(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);return a.doc,{type:"added",doc:l,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(a=>i||a.type!==3).map(a=>{const l=new Go(s._firestore,s._userDataWriter,a.doc.key,a.doc,new zs(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);let c=-1,u=-1;return a.type!==0&&(c=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),u=o.indexOf(a.doc.key)),{type:Qk(a.type),doc:l,oldIndex:c,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function Qk(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return J()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yk(t){t=yn(t,_t);const e=yn(t.firestore,Es);return Ok(id(e),t._key).then(n=>O0(e,t,n))}class P0 extends Kk{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ts(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new _t(this.firestore,null,n)}}function Jk(t,e,n,...r){t=yn(t,_t);const s=yn(t.firestore,Es),i=cd(s);let o;return o=typeof(e=Ye(e))=="string"||e instanceof Tl?Bk(i,"updateDoc",t._key,e,n,r):$k(i,"updateDoc",t._key,e),x0(s,[o.toMutation(t._key,tn.exists(!0))])}function vu(t,e){const n=yn(t.firestore,Es),r=y0(t),s=Wk(t.converter,e);return x0(n,[Uk(cd(t.firestore),"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,tn.exists(!1))]).then(()=>r)}function ks(t,...e){var n,r,s;t=Ye(t);let i={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||om(e[o])||(i=e[o],o++);const a={includeMetadataChanges:i.includeMetadataChanges,source:i.source};if(om(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(r=h.error)===null||r===void 0?void 0:r.bind(h),e[o+2]=(s=h.complete)===null||s===void 0?void 0:s.bind(h)}let l,c,u;if(t instanceof _t)c=yn(t.firestore,Es),u=ul(t._key.path),l={next:h=>{e[o]&&e[o](O0(c,t,h))},error:e[o+1],complete:e[o+2]};else{const h=yn(t,$r);c=yn(h.firestore,Es),u=h._query;const d=new P0(c);l={next:f=>{e[o]&&e[o](new Gk(c,d,h,f))},error:e[o+1],complete:e[o+2]},zk(t._query)}return function(d,f,g,y){const v=new p0(y),E=new i0(f,v,g);return d.asyncQueue.enqueueAndForget(async()=>r0(await _u(d),E)),()=>{v.Qa(),d.asyncQueue.enqueueAndForget(async()=>s0(await _u(d),E))}}(id(c),u,a,l)}function x0(t,e){return function(r,s){const i=new _n;return r.asyncQueue.enqueueAndForget(async()=>yk(await xk(r),s,i)),i.promise}(id(t),e)}function O0(t,e,n){const r=n.docs.get(e._key),s=new P0(t);return new C0(t,s,e._key,r,new zs(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(s){Ss=s})(ws),hs(new Pr("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),a=new Es(new ZP(r.getProvider("auth-internal")),new rx(r.getProvider("app-check-internal")),function(c,u){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new U(A.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Vi(c.options.projectId,u)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),a._setSettings(i),a},"PUBLIC").setMultipleInstances(!0)),Kn(Ap,"4.6.0",e),Kn(Ap,"4.6.0","esm2017")})();const Xk={class:"w-full grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 md:gap-6 xl:gap-8 text-[16px] text-[#E5E7EB] font-medium px-[2%] items-start"},Zk={class:"flex gap-2 items-center"},eD=["src"],tD={key:0},nD={class:"text-sm"},rD={key:1,class:"text-sm"},sD={class:"text-[19px]"},iD={class:"text-gray-400"},oD={__name:"Active",setup(t){const e=new Date,n=pe([]),r=Ve(()=>n.value.filter(i=>new Date(i.deadline)>=e)),s=i=>{const o={weekday:"long",month:"long",day:"numeric",year:"numeric"};return new Date(i).toLocaleDateString("en-US",o)};return St(()=>{const i=Os(wn(ln,"Takes"),ho("date","desc")),o=ks(i,a=>{n.value=a.docs.map(l=>({id:l.data().id,description:l.data().description,title:l.data().title,options:l.data().options,deadline:l.data().endDate,created:l.data().date,uid:l.data().uid,uicon:l.data().uicon,user:l.data().user,email:l.data().email}))});An(o)}),(i,o)=>(te(),re("section",Xk,[(te(!0),re(Ge,null,Qn(r.value,a=>(te(),re("div",{key:a.id,class:"w-full border rounded-lg border-green-700 md:hover:border-green-600 duration-200 md:skew-x-6 md:hover:skew-x-0 bg-[#19702713]"},[Oe(ke(Ti),{to:/Take/+a.id,class:"flex flex-col gap-4 bg-[#161313] p-3 rounded-lg border border-gray-700 md:skew-x-4 md:translate-x-[-10px] md:translate-y-[-10px] duration-300 md:hover:translate-x-0 md:hover:translate-y-0"},{default:ts(()=>[P("div",Zk,[P("img",{src:a.uicon,alt:"",srcset:"",class:"w-8 rounded-full"},null,8,eD),a.user?(te(),re("div",tD,[P("h2",nD,Qe(a.user),1)])):(te(),re("div",rD,[P("h2",null,Qe(a.email.slice(0,10)),1)]))]),P("h2",sD,Qe(a.title),1),P("div",iD," Until "+Qe(s(a.deadline)),1)]),_:2},1032,["to"])]))),128))]))}},aD={class:"w-full grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-3 md:gap-6 xl:gap-8 text-[16px] text-[#E5E7EB] font-medium px-[2%] items-start"},lD={class:"flex gap-2 items-center"},cD=["src"],uD={class:"text-sm"},hD={class:"text-[20px]"},dD=P("div",{class:"flex justify-start"},[P("div",{class:"bg-yellow-400 rounded-full text-black py-1 px-2 text-sm font-medium"}," Expired ")],-1),fD={__name:"Past",setup(t){const e=new Date,n=pe([]),r=Ve(()=>n.value.filter(s=>new Date(s.deadline)<e));return St(()=>{const s=Os(wn(ln,"Takes"),ho("date","desc")),i=ks(s,o=>{n.value=o.docs.map(a=>({id:a.data().id,description:a.data().description,title:a.data().title,options:a.data().options,deadline:a.data().endDate,created:a.data().date,uid:a.data().uid,uicon:a.data().uicon,user:a.data().user}))});An(i)}),(s,i)=>(te(),re("section",aD,[(te(!0),re(Ge,null,Qn(r.value,o=>(te(),re("div",{key:o.id,class:"w-full border rounded-lg border-red-700 md:hover:border-red-600 duration-200 md:skew-x-6 md:hover:skew-x-0 bg-[#7a1d1d10]"},[Oe(ke(Ti),{to:/Take/+o.id,class:"flex flex-col gap-4 bg-[#161313] p-3 rounded-lg border border-gray-700 md:skew-x-4 md:translate-x-[-10px] md:translate-y-[-10px] duration-300 hover:translate-x-0 hover:translate-y-0"},{default:ts(()=>[P("div",lD,[P("img",{src:o.uicon,alt:"",srcset:"",class:"w-8 rounded-full"},null,8,cD),P("h2",uD,Qe(o.user),1)]),P("h2",hD,Qe(o.title),1),dD]),_:2},1032,["to"])]))),128))]))}},pD={class:"flex flex-col gap-8 lg:px-[7%]"},mD={class:"flex flex-col gap-10"},gD=P("div",{class:"flex items-center gap-2"},[P("h2",{class:"text-green-400 takes font-medium"},"Active Takes"),P("i",{class:"fa-solid fa-bowling-ball text-gray-100 animate-spin xl:text-[18px]"})],-1),_D={class:"flex flex-col gap-10"},yD=P("div",{class:"flex items-center gap-2"},[P("h2",{class:"text-red-400 takes font-medium"},"Past Takes"),P("i",{class:"fa-regular fa-clock text-gray-100 animate-pulse xl:text-[18px]"})],-1),vD={__name:"AllTakes",setup(t){const e=pe([]);return St(()=>{const n=Os(wn(ln,"Takes"),ho("date","desc")),r=ks(n,s=>{e.value=s.docs.map(i=>({id:i.data().id,description:i.data().Description,title:i.data().title,options:i.data().options,deadline:i.data().endDate,created:i.data().date,uid:i.data().uid,uicon:i.data().uicon,user:i.data().user}))});console.log(e),An(r)}),(n,r)=>(te(),re("div",pD,[P("div",mD,[gD,Oe(oD)]),P("div",_D,[yD,Oe(fD)])]))}},ED={class:"flex flex-col gap-8 w-full"},TD={__name:"App",setup(t){return(e,n)=>(te(),re("section",ED,[Oe(HC),Oe(ke(__))]))}},wD={class:"w-full px-[3%] md:px-[14%] flex flex-col gap-7 text-[--text2-color] text-sm placeholder-[rgba(255,255,255,0.7)]"},ID={class:"flex flex-col gap-2"},AD=P("span",{class:"text-base font-medium"},"Title",-1),bD={class:"flex flex-col gap-2"},RD=P("span",{class:"text-base font-medium"},"Description",-1),SD={class:"flex flex-col gap-2"},CD=P("div",{class:"flex gap-1 flex-col"},[P("span",{class:"text-base font-medium"},"Voting Options"),P("div",{class:"text-[rgba(255,255,255,0.7)] text-[13px]"},"You can not edit your vote option. Please double check 📌.")],-1),PD={class:"flex flex-col gap-1 font-semibold"},xD={class:"flex justify-between text-yellow-400 text-base"},OD=["onClick"],kD={class:"flex flex-col gap-2"},DD=P("span",{class:"text-base font-medium"},"End date",-1),VD={class:"flex rounded-lg justify-between items-center p-1 bg-[#5349492d] border border-[#53494954] duration-300 hover:bg-[#53494954] hover:border-[#53494954] hover:text-[rgba(255,255,255,0.7)] px-2"},ND=P("span",{class:"text-[rgba(255,255,255,0.7)]"},"Pick a date",-1),MD={__name:"CreateTake",setup(t){const e=pe(!1),n=Hi(),r=Xn();let s=[],i=[],o=[],a=[];St(()=>{As(r,E=>{if(E){e.value=!0;let I=E.displayName,T=E.photoURL,x=E.uid,$=E.email;return s.value=I,i.value=T,o.value=x,a.value=$,s}else e.value=!1})});const l=Math.floor(Math.random()*1e6),c=pe(""),u=pe(""),h=pe(""),d=pe(""),f=pe([]),g=()=>{if(h.value.length>0)return f.value.push({option:h.value,percent:0}),h.value="",f.value},y=()=>{vu(wn(ln,"Takes"),{id:l,title:c.value,description:u.value,options:f.value,endDate:d.value,date:new Date(Date.now()).toLocaleString(),uid:o.value,uicon:i.value,user:s.value,email:a.value}),c.value="",d.value="",f.value="",u.value="",n.push("/")},v=()=>{const E=f.value.map(I=>typeof I=="string"?{option:I,percent:0}:I);vu(wn(ln,"Votes"),{author:{uid:o.value,profileImg:i.value,name:s.value},totalVotes:0,voters:[],options:E,title:c.value,id:l})};return(E,I)=>(te(),re("div",wD,[P("div",ID,[AD,Yr(P("input",{type:"text","onUpdate:modelValue":I[0]||(I[0]=T=>c.value=T),name:"Name",placeholder:"Your best take is...",class:"px-3 py-2 rounded-lg bg-[#5349492d] duration-300 border hover:border-[#3c4a88] border-[#53494954] placeholder-[rgba(255,255,255,0.7)] outline ring-1 ring-[#53494954] outline-0 outline-gray-100"},null,512),[[$s,c.value]])]),P("div",bD,[RD,Yr(P("input",{"onUpdate:modelValue":I[1]||(I[1]=T=>u.value=T),name:"note",id:"note",cols:"30",rows:"2",class:"rounded-lg p-3 bg-[#5349492d] duration-300 border hover:border-[#3c4a88] border-[#53494954] placeholder-[rgba(255,255,255,0.7)] py-3 outline ring-1 ring-[#53494954] outline-0 outline-gray-100",placeholder:"(optional) Take description..."},null,512),[[$s,u.value]])]),P("div",SD,[CD,(te(!0),re(Ge,null,Qn(f.value,(T,x)=>(te(),re("div",PD,[P("div",xD,[P("div",null,Qe(T.option),1),P("i",{class:"fa-regular fa-trash-can",onClick:$=>{f.value.splice(x,1)}},null,8,OD)])]))),256)),Yr(P("input",{onKeyup:gg(g,["enter"]),"onUpdate:modelValue":I[2]||(I[2]=T=>h.value=T),name:"note",id:"note",cols:"30",rows:"2",class:"rounded-lg p-3 bg-[#5349492d] duration-300 border hover:border-[#3c4a88] border-[#53494954] placeholder-[rgba(255,255,255,0.7)] outline ring-1 ring-[#53494954] outline-0 outline-gray-100",placeholder:"Press enter to add more options",required:""},null,544),[[$s,h.value]])]),P("div",kD,[DD,P("div",VD,[ND,Yr(P("input",{"onUpdate:modelValue":I[3]||(I[3]=T=>d.value=T),type:"date",class:"rounded-lg p-1 text-[17px] text-white bg-transparent text-[rgba(255,255,255,0.7)]",required:""},null,512),[[$s,d.value]])])]),P("button",{onClick:I[4]||(I[4]=T=>(v(),y())),class:"text-base w-full bg-green-500 border-none rounded-lg text-gray-900 cursor-pointer p-2 font-semibold"},"Create")]))}},LD={key:0},FD={__name:"Create",setup(t){pe(!1);const e=pe(!1);Hi();const n=Xn();let r=[];return St(()=>{As(n,s=>{if(s){e.value=!0;let i=s.displayName;return s.photoURL,r.value=i,r}else e.value=!1})}),(s,i)=>e.value?(te(),re("div",LD,[Oe(MD)])):Jn("",!0)}},UD={class:"pt-4 md:pt-6 md:p-3 w-full"},$D={class:"text-white"},BD={key:0,class:"flex gap-6 xl:gap-10 w-full"},jD={key:0,class:"flex flex-col w-full"},qD=["onClick","id"],HD={class:"text-sm md:text-base text-left font-semibold 2xl:text-xl w-[60%]"},zD={class:"flex gap-2 bg-[#dcfd1e00] rounded-r-lg py-3 border border-l-2 border-l-gray-300 border-y-0 border-r-0 items-center w-[60%]"},KD={key:0,class:"text-white"},WD={key:1,class:"text-sm md:text-base xl:text-lg text-white"},GD={class:"text-sm lg:text-base font-medium text-blue-300 pt-6"},QD={__name:"Voting",setup(t){const e=Zu(),n=pe([]),r=pe(!1),s=Xn();let i=[],o=[];St(()=>{As(s,l=>{if(l){r.value=!0;let c=l.displayName;l.photoURL;let u=l.uid;return i.value=c,o.value=u,i}else r.value=!1})}),St(()=>{const l=Os(wn(ln,"Votes")),c=ks(l,u=>{n.value=u.docs.map(h=>({options:h.data().options,totalVotes:h.data().totalVotes,author:h.data().author,id:h.data().id,docId:h.id}))});An(c)});const a=async(l,c,u,h)=>{try{const d=o.value,f=y0(ln,"Votes",l),g=await Yk(f);if(g.exists()){const y=g.data();if(y.voters&&y.voters.includes(d))return;y.options[c].percent=(u+1)/(h+1),y.options[c].percent=u+1,y.totalVotes=h+1,y.voters?y.voters.push(d):y.voters=[d],await Jk(f,y),console.log("Vote option updated successfully")}else console.error("Document does not exist")}catch(d){console.error("Error updating vote option:",d)}};return(l,c)=>(te(),re("div",UD,[(te(!0),re(Ge,null,Qn(n.value,u=>(te(),re("div",$D,[u.id==ke(e).params.id?(te(),re("div",BD,[u.options?(te(),re("div",jD,[(te(!0),re(Ge,null,Qn(u.options,(h,d)=>(te(),re("div",{key:h,class:"text-[20px] gap-3 xl:gap-5 w-full"},[P("button",{onClick:f=>a(u.docId,d,h.percent,u.totalVotes),class:"flex w-full justify-between items-center gap-2 rounded-lg text-gray-300 duration-300 hover:text-green-400",id:d},[P("div",HD,Qe(h.option),1),P("div",zD,[P("div",{class:"flex gap-1 bg-yellow-600 rounded-r-full rounded-l-2xl py-3 lg:py-5",style:Ca({width:h.percent/u.totalVotes.toFixed(2)*100+"%"})},null,4),h.percent==0?(te(),re("div",KD,"0%")):(te(),re("div",WD,Qe((h.percent/u.totalVotes).toFixed(2)*100)+"%",1))])],8,qD)]))),128)),P("div",GD,Qe(u.totalVotes)+" votes",1)])):Jn("",!0)])):Jn("",!0)]))),256))]))}},YD={class:"w-full md:px-[5%] flex flex-col gap-3"},JD=P("div",{class:"text-white font-semibold text-base lg:text-lg 2xl:text-[26px] pt-5 flex gap-2 items-center"},[P("div",{class:""},"Comments"),P("i",{class:"fa-regular fa-comment-dots"})],-1),XD={class:"w-full border border-[#53494954] rounded-lg p-[4%] md:p-[5%] flex flex-col gap-4 md:gap-5"},ZD={key:0,class:""},eV={class:"flex items-center gap-2 lg:gap-3 border border-x-0 border-t-0 border-[#53494954]"},tV=["src"],nV={class:"text-white"},rV={class:"flex items-center gap-1 text-yellow-200"},sV={key:0},iV={class:"text-sm"},oV={key:1,class:"text-sm"},aV={class:"flex items-center text-xs text-gray-400"},lV={class:"text-gray-100"},cV={__name:"Comments",setup(t){const e=Zu(),n=pe(""),r=pe(!1);Hi();const s=Xn(),i=pe([]);let o=[],a=[],l=[];const c=d=>{const f={weekday:"long",month:"long",day:"numeric",year:"numeric"};return new Date(d).toLocaleDateString("en-US",f)};St(()=>{As(s,g=>{if(g){r.value=!0;let y=g.displayName,v=g.photoURL;g.uid;let E=g.email;return o.value=y,a.value=v,l.value=E,o}else r.value=!1});const d=Os(wn(ln,"Comments"),ho("date","desc")),f=ks(d,g=>{i.value=g.docs.map(y=>({id:y.data().id,Routeid:y.data().Routeid,comment:y.data().comment,uicon:y.data().uicon,date:y.data().date,user:y.data().user,email:y.data().email})),console.log(i)});An(f)});const u=Math.floor(Math.random()*1e6),h=()=>{vu(wn(ln,"Comments"),{id:u,Routeid:e.params.id,comment:n.value,uicon:a.value,date:new Date(Date.now()).toLocaleString(),user:o.value,email:l.value}),n.value=""};return(d,f)=>(te(),re("div",YD,[JD,P("section",XD,[Yr(P("input",{type:"text",onKeyup:gg(h,["enter"]),"onUpdate:modelValue":f[0]||(f[0]=g=>n.value=g),name:"Name",placeholder:"Comment...",class:"px-3 py-2 rounded-lg bg-[#5349492d] placeholder-[rgba(255,255,255,0.77)] outline ring-1 ring-[#26722dab] outline-0 outline-gray-100 w-full text-white text-xs sm:text-sm"},null,544),[[$s,n.value]]),(te(!0),re(Ge,null,Qn(i.value,g=>(te(),re("div",null,[g.Routeid==ke(e).params.id?(te(),re("div",ZD,[P("div",eV,[P("img",{src:g.uicon,alt:"",srcset:"",class:"w-7 md:w-8 xl:w-10 rounded-full"},null,8,tV),P("div",nV,[P("div",rV,[g.user?(te(),re("div",sV,[P("h2",iV,Qe(g.user),1)])):(te(),re("div",oV,[P("h2",null,Qe(g.email.slice(0,10)),1)])),P("div",aV," on "+Qe(c(g.date)),1)]),P("div",lV,Qe(g.comment),1)])])])):Jn("",!0)]))),256))])]))}},uV={key:0,class:"sm:px-[1%] lg:px-[7%]"},hV={class:"grid md:grid-cols-2 gap-2"},dV={class:"flex flex-col"},fV={class:"text-white"},pV={key:0,class:"flex flex-col gap-3"},mV={class:"flex flex-col gap-2 w-full"},gV={class:"text-[28px] font-semibold text-gray-100"},_V={class:"text-gray-400 text-sm lg:text-base"},yV={class:"text-gray-400 flex gap-2 items-center text-lg"},vV=P("i",{class:"fa-solid fa-clock-rotate-left text-green-400"},null,-1),EV={class:"flex items-center"},TV={key:1,class:"text-white flex flex-col gap-24 px-[2%] lg:px-[8%]"},wV={class:"text-white"},IV={key:0,class:"flex flex-col gap-3"},AV={class:"text-[28px] font-semibold text-yellow-400"},bV=P("div",{class:"text-3xl font-bold"},"Login to vote",-1),RV=P("i",{class:"fa-brands fa-github"},null,-1),SV=P("h2",null,"Login with Github",-1),CV=[RV,SV],PV={__name:"Details",setup(t){const e=Zu(),n=pe(!1),r=Hi(),s=Xn(),i=pe([]),o=()=>{const a=new Qt;oy(Xn(),a).then(l=>{console.log(l.user),displayNames(),r.push("/home")}).catch(l=>{})};return St(()=>{As(s,h=>{h?(n.value=!0,h.displayName,h.photoURL):n.value=!1});const a=new Date,l=h=>{const f=new Date(h)-a,g=Math.floor(f/(1e3*60*60*24)),y=Math.floor(f%(1e3*60*60*24)/(1e3*60*60)),v=Math.floor(f%(1e3*60*60)/(1e3*60));return g<0||y<0||v<0?"0d: 0h: 0m":`${g}d: ${y}h: ${v}m`},c=Os(wn(ln,"Takes"),ho("date","desc")),u=ks(c,h=>{i.value=h.docs.map(d=>({id:d.data().id,description:d.data().description,title:d.data().title,options:d.data().options,deadline:d.data().endDate,created:d.data().date,uid:d.data().uid,uicon:d.data().uicon,user:d.data().user,email:d.data().email,remainingTime:l(d.data().endDate)}))});An(u)}),(a,l)=>n.value?(te(),re("div",uV,[P("div",hV,[P("div",dV,[P("div",fV,[(te(!0),re(Ge,null,Qn(i.value,c=>(te(),re("div",null,[c.id==ke(e).params.id?(te(),re("div",pV,[P("div",mV,[P("div",gV,Qe(c.title),1),P("div",_V,Qe(c.description),1),P("div",yV,[vV,Mu(" "+Qe(c.remainingTime),1)])])])):Jn("",!0)]))),256))]),Oe(QD)]),P("div",EV,[Oe(cV)])])])):(te(),re("div",TV,[P("div",wV,[(te(!0),re(Ge,null,Qn(i.value,c=>(te(),re("div",null,[c.id==ke(e).params.id?(te(),re("div",IV,[P("div",AV,Qe(c.title),1)])):Jn("",!0)]))),256))]),P("div",{class:"w-full border border-gray-300 border-dashed rounded-sm h-[40vh] flex flex-col gap-5 justify-center items-center"},[bV,P("button",{onClick:o,class:"bg-purple-900 flex px-3 lg:px-5 py-2 duration-300 hover:bg-zinc-700 gap-2 justify-center items-center rounded-md 2xl:text-[17px]"},CV)])]))}},xV=Xb({history:Pb("/"),routes:[{path:"/",name:"home",component:vD},{path:"/create",name:"create",component:FD},{path:"/Take/:id",name:"take details",component:PV}]});var OV="firebase",kV="10.11.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Kn(OV,kV,"app");const DV={apiKey:"AIzaSyDkjxUiWC5qbLkxQfYY2N9-tXwq2U9n7FY",authDomain:"best-takes.firebaseapp.com",projectId:"best-takes",storageBucket:"best-takes.appspot.com",messagingSenderId:"371863040811",appId:"1:371863040811:web:3bfc5940946da0d71c4b6e"},VV=S_(DV),ln=Nk(VV),_d=ow(TD);_d.use(xV);_d.use(XA);_d.mount("#app");
