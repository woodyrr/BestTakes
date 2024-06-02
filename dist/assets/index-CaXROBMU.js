(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();function Ac(t){if(t===null||typeof t!="object")return!1;const e=Object.getPrototypeOf(t);return e!==null&&e!==Object.prototype&&Object.getPrototypeOf(e)!==null||Symbol.iterator in t?!1:Symbol.toStringTag in t?Object.prototype.toString.call(t)==="[object Module]":!0}function hl(t,e,n=".",r){if(!Ac(e))return hl(t,{},n,r);const s=Object.assign({},e);for(const i in t){if(i==="__proto__"||i==="constructor")continue;const o=t[i];o!=null&&(r&&r(s,i,o,n)||(Array.isArray(o)&&Array.isArray(s[i])?s[i]=[...o,...s[i]]:Ac(o)&&Ac(s[i])?s[i]=hl(o,s[i],(n?`${n}.`:"")+i.toString(),r):s[i]=o))}return s}function V0(t){return(...e)=>e.reduce((n,r)=>hl(n,r,"",t),{})}const N0=V0();/**
* @vue/shared v3.4.22
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function wa(t,e){const n=new Set(t.split(","));return e?r=>n.has(r.toLowerCase()):r=>n.has(r)}const be={},Yr=[],Ot=()=>{},M0=()=>!1,Ia=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),Eu=t=>t.startsWith("onUpdate:"),ze=Object.assign,Tu=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},L0=Object.prototype.hasOwnProperty,fe=(t,e)=>L0.call(t,e),Q=Array.isArray,Jr=t=>Aa(t)==="[object Map]",lm=t=>Aa(t)==="[object Set]",ne=t=>typeof t=="function",Be=t=>typeof t=="string",Vr=t=>typeof t=="symbol",Pe=t=>t!==null&&typeof t=="object",um=t=>(Pe(t)||ne(t))&&ne(t.then)&&ne(t.catch),hm=Object.prototype.toString,Aa=t=>hm.call(t),F0=t=>Aa(t).slice(8,-1),dm=t=>Aa(t)==="[object Object]",wu=t=>Be(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,js=wa(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ba=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},U0=/-(\w)/g,sn=ba(t=>t.replace(U0,(e,n)=>n?n.toUpperCase():"")),$0=/\B([A-Z])/g,Nr=ba(t=>t.replace($0,"-$1").toLowerCase()),Ra=ba(t=>t.charAt(0).toUpperCase()+t.slice(1)),bc=ba(t=>t?`on${Ra(t)}`:""),Kn=(t,e)=>!Object.is(t,e),Oo=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},fm=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},dl=t=>{const e=parseFloat(t);return isNaN(e)?t:e},B0=t=>{const e=Be(t)?Number(t):NaN;return isNaN(e)?t:e};let Ed;const pm=()=>Ed||(Ed=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Sa(t){if(Q(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=Be(r)?z0(r):Sa(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(Be(t)||Pe(t))return t}const j0=/;(?![^(]*\))/g,q0=/:([^]+)/,H0=/\/\*[^]*?\*\//g;function z0(t){const e={};return t.replace(H0,"").split(j0).forEach(n=>{if(n){const r=n.split(q0);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Iu(t){let e="";if(Be(t))e=t;else if(Q(t))for(let n=0;n<t.length;n++){const r=Iu(t[n]);r&&(e+=r+" ")}else if(Pe(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const K0="html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot",W0=wa(K0),G0="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Q0=wa(G0);function mm(t){return!!t||t===""}const bt=t=>Be(t)?t:t==null?"":Q(t)||Pe(t)&&(t.toString===hm||!ne(t.toString))?JSON.stringify(t,gm,2):String(t),gm=(t,e)=>e&&e.__v_isRef?gm(t,e.value):Jr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s],i)=>(n[Rc(r,i)+" =>"]=s,n),{})}:lm(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Rc(n))}:Vr(e)?Rc(e):Pe(e)&&!Q(e)&&!dm(e)?String(e):e,Rc=(t,e="")=>{var n;return Vr(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.4.22
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let At;class Y0{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=At,!e&&At&&(this.index=(At.scopes||(At.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=At;try{return At=this,e()}finally{At=n}}}on(){At=this}off(){At=this.parent}stop(e){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function J0(t,e=At){e&&e.active&&e.effects.push(t)}function _m(){return At}function X0(t){At&&At.cleanups.push(t)}let wr;class Au{constructor(e,n,r,s){this.fn=e,this.trigger=n,this.scheduler=r,this.active=!0,this.deps=[],this._dirtyLevel=4,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,J0(this,s)}get dirty(){if(this._dirtyLevel===2||this._dirtyLevel===3){this._dirtyLevel=1,Xn();for(let e=0;e<this._depsLength;e++){const n=this.deps[e];if(n.computed&&(Z0(n.computed),this._dirtyLevel>=4))break}this._dirtyLevel===1&&(this._dirtyLevel=0),Zn()}return this._dirtyLevel>=4}set dirty(e){this._dirtyLevel=e?4:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let e=Un,n=wr;try{return Un=!0,wr=this,this._runnings++,Td(this),this.fn()}finally{wd(this),this._runnings--,wr=n,Un=e}}stop(){var e;this.active&&(Td(this),wd(this),(e=this.onStop)==null||e.call(this),this.active=!1)}}function Z0(t){return t.value}function Td(t){t._trackId++,t._depsLength=0}function wd(t){if(t.deps.length>t._depsLength){for(let e=t._depsLength;e<t.deps.length;e++)ym(t.deps[e],t);t.deps.length=t._depsLength}}function ym(t,e){const n=t.get(e);n!==void 0&&e._trackId!==n&&(t.delete(e),t.size===0&&t.cleanup())}let Un=!0,fl=0;const vm=[];function Xn(){vm.push(Un),Un=!1}function Zn(){const t=vm.pop();Un=t===void 0?!0:t}function bu(){fl++}function Ru(){for(fl--;!fl&&pl.length;)pl.shift()()}function Em(t,e,n){if(e.get(t)!==t._trackId){e.set(t,t._trackId);const r=t.deps[t._depsLength];r!==e?(r&&ym(r,t),t.deps[t._depsLength++]=e):t._depsLength++}}const pl=[];function Tm(t,e,n){bu();for(const r of t.keys()){let s;r._dirtyLevel<e&&(s??(s=t.get(r)===r._trackId))&&(r._shouldSchedule||(r._shouldSchedule=r._dirtyLevel===0),r._dirtyLevel=e),r._shouldSchedule&&(s??(s=t.get(r)===r._trackId))&&(r.trigger(),(!r._runnings||r.allowRecurse)&&r._dirtyLevel!==2&&(r._shouldSchedule=!1,r.scheduler&&pl.push(r.scheduler)))}Ru()}const wm=(t,e)=>{const n=new Map;return n.cleanup=t,n.computed=e,n},ml=new WeakMap,Ir=Symbol(""),gl=Symbol("");function Tt(t,e,n){if(Un&&wr){let r=ml.get(t);r||ml.set(t,r=new Map);let s=r.get(n);s||r.set(n,s=wm(()=>r.delete(n))),Em(wr,s)}}function mn(t,e,n,r,s,i){const o=ml.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&Q(t)){const c=Number(r);o.forEach((l,u)=>{(u==="length"||!Vr(u)&&u>=c)&&a.push(l)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":Q(t)?wu(n)&&a.push(o.get("length")):(a.push(o.get(Ir)),Jr(t)&&a.push(o.get(gl)));break;case"delete":Q(t)||(a.push(o.get(Ir)),Jr(t)&&a.push(o.get(gl)));break;case"set":Jr(t)&&a.push(o.get(Ir));break}bu();for(const c of a)c&&Tm(c,4);Ru()}const eE=wa("__proto__,__v_isRef,__isVue"),Im=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Vr)),Id=tE();function tE(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=pe(this);for(let i=0,o=this.length;i<o;i++)Tt(r,"get",i+"");const s=r[e](...n);return s===-1||s===!1?r[e](...n.map(pe)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Xn(),bu();const r=pe(this)[e].apply(this,n);return Ru(),Zn(),r}}),t}function nE(t){Vr(t)||(t=String(t));const e=pe(this);return Tt(e,"has",t),e.hasOwnProperty(t)}class Am{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,r){const s=this._isReadonly,i=this._isShallow;if(n==="__v_isReactive")return!s;if(n==="__v_isReadonly")return s;if(n==="__v_isShallow")return i;if(n==="__v_raw")return r===(s?i?mE:Pm:i?Sm:Rm).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const o=Q(e);if(!s){if(o&&fe(Id,n))return Reflect.get(Id,n,r);if(n==="hasOwnProperty")return nE}const a=Reflect.get(e,n,r);return(Vr(n)?Im.has(n):eE(n))||(s||Tt(e,"get",n),i)?a:wt(a)?o&&wu(n)?a:a.value:Pe(a)?s?xm(a):er(a):a}}class bm extends Am{constructor(e=!1){super(!1,e)}set(e,n,r,s){let i=e[n];if(!this._isShallow){const c=oi(i);if(!Go(r)&&!oi(r)&&(i=pe(i),r=pe(r)),!Q(e)&&wt(i)&&!wt(r))return c?!1:(i.value=r,!0)}const o=Q(e)&&wu(n)?Number(n)<e.length:fe(e,n),a=Reflect.set(e,n,r,s);return e===pe(s)&&(o?Kn(r,i)&&mn(e,"set",n,r):mn(e,"add",n,r)),a}deleteProperty(e,n){const r=fe(e,n);e[n];const s=Reflect.deleteProperty(e,n);return s&&r&&mn(e,"delete",n,void 0),s}has(e,n){const r=Reflect.has(e,n);return(!Vr(n)||!Im.has(n))&&Tt(e,"has",n),r}ownKeys(e){return Tt(e,"iterate",Q(e)?"length":Ir),Reflect.ownKeys(e)}}class rE extends Am{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const sE=new bm,iE=new rE,oE=new bm(!0),Su=t=>t,Pa=t=>Reflect.getPrototypeOf(t);function ho(t,e,n=!1,r=!1){t=t.__v_raw;const s=pe(t),i=pe(e);n||(Kn(e,i)&&Tt(s,"get",e),Tt(s,"get",i));const{has:o}=Pa(s),a=r?Su:n?xu:ai;if(o.call(s,e))return a(t.get(e));if(o.call(s,i))return a(t.get(i));t!==s&&t.get(e)}function fo(t,e=!1){const n=this.__v_raw,r=pe(n),s=pe(t);return e||(Kn(t,s)&&Tt(r,"has",t),Tt(r,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function po(t,e=!1){return t=t.__v_raw,!e&&Tt(pe(t),"iterate",Ir),Reflect.get(t,"size",t)}function Ad(t){t=pe(t);const e=pe(this);return Pa(e).has.call(e,t)||(e.add(t),mn(e,"add",t,t)),this}function bd(t,e){e=pe(e);const n=pe(this),{has:r,get:s}=Pa(n);let i=r.call(n,t);i||(t=pe(t),i=r.call(n,t));const o=s.call(n,t);return n.set(t,e),i?Kn(e,o)&&mn(n,"set",t,e):mn(n,"add",t,e),this}function Rd(t){const e=pe(this),{has:n,get:r}=Pa(e);let s=n.call(e,t);s||(t=pe(t),s=n.call(e,t)),r&&r.call(e,t);const i=e.delete(t);return s&&mn(e,"delete",t,void 0),i}function Sd(){const t=pe(this),e=t.size!==0,n=t.clear();return e&&mn(t,"clear",void 0,void 0),n}function mo(t,e){return function(r,s){const i=this,o=i.__v_raw,a=pe(o),c=e?Su:t?xu:ai;return!t&&Tt(a,"iterate",Ir),o.forEach((l,u)=>r.call(s,c(l),c(u),i))}}function go(t,e,n){return function(...r){const s=this.__v_raw,i=pe(s),o=Jr(i),a=t==="entries"||t===Symbol.iterator&&o,c=t==="keys"&&o,l=s[t](...r),u=n?Su:e?xu:ai;return!e&&Tt(i,"iterate",c?gl:Ir),{next(){const{value:h,done:d}=l.next();return d?{value:h,done:d}:{value:a?[u(h[0]),u(h[1])]:u(h),done:d}},[Symbol.iterator](){return this}}}}function An(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function aE(){const t={get(i){return ho(this,i)},get size(){return po(this)},has:fo,add:Ad,set:bd,delete:Rd,clear:Sd,forEach:mo(!1,!1)},e={get(i){return ho(this,i,!1,!0)},get size(){return po(this)},has:fo,add:Ad,set:bd,delete:Rd,clear:Sd,forEach:mo(!1,!0)},n={get(i){return ho(this,i,!0)},get size(){return po(this,!0)},has(i){return fo.call(this,i,!0)},add:An("add"),set:An("set"),delete:An("delete"),clear:An("clear"),forEach:mo(!0,!1)},r={get(i){return ho(this,i,!0,!0)},get size(){return po(this,!0)},has(i){return fo.call(this,i,!0)},add:An("add"),set:An("set"),delete:An("delete"),clear:An("clear"),forEach:mo(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{t[i]=go(i,!1,!1),n[i]=go(i,!0,!1),e[i]=go(i,!1,!0),r[i]=go(i,!0,!0)}),[t,n,e,r]}const[cE,lE,uE,hE]=aE();function Pu(t,e){const n=e?t?hE:uE:t?lE:cE;return(r,s,i)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(fe(n,s)&&s in r?n:r,s,i)}const dE={get:Pu(!1,!1)},fE={get:Pu(!1,!0)},pE={get:Pu(!0,!1)},Rm=new WeakMap,Sm=new WeakMap,Pm=new WeakMap,mE=new WeakMap;function gE(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function _E(t){return t.__v_skip||!Object.isExtensible(t)?0:gE(F0(t))}function er(t){return oi(t)?t:Cu(t,!1,sE,dE,Rm)}function Cm(t){return Cu(t,!1,oE,fE,Sm)}function xm(t){return Cu(t,!0,iE,pE,Pm)}function Cu(t,e,n,r,s){if(!Pe(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const i=s.get(t);if(i)return i;const o=_E(t);if(o===0)return t;const a=new Proxy(t,o===2?r:n);return s.set(t,a),a}function qs(t){return oi(t)?qs(t.__v_raw):!!(t&&t.__v_isReactive)}function oi(t){return!!(t&&t.__v_isReadonly)}function Go(t){return!!(t&&t.__v_isShallow)}function Om(t){return t?!!t.__v_raw:!1}function pe(t){const e=t&&t.__v_raw;return e?pe(e):t}function yE(t){return Object.isExtensible(t)&&fm(t,"__v_skip",!0),t}const ai=t=>Pe(t)?er(t):t,xu=t=>Pe(t)?xm(t):t;class km{constructor(e,n,r,s){this.getter=e,this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new Au(()=>e(this._value),()=>ko(this,this.effect._dirtyLevel===2?2:3)),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const e=pe(this);return(!e._cacheable||e.effect.dirty)&&Kn(e._value,e._value=e.effect.run())&&ko(e,4),Dm(e),e.effect._dirtyLevel>=2&&ko(e,2),e._value}set value(e){this._setter(e)}get _dirty(){return this.effect.dirty}set _dirty(e){this.effect.dirty=e}}function vE(t,e,n=!1){let r,s;const i=ne(t);return i?(r=t,s=Ot):(r=t.get,s=t.set),new km(r,s,i||!s,n)}function Dm(t){var e;Un&&wr&&(t=pe(t),Em(wr,(e=t.dep)!=null?e:t.dep=wm(()=>t.dep=void 0,t instanceof km?t:void 0)))}function ko(t,e=4,n){t=pe(t);const r=t.dep;r&&Tm(r,e)}function wt(t){return!!(t&&t.__v_isRef===!0)}function Ee(t){return Vm(t,!1)}function EE(t){return Vm(t,!0)}function Vm(t,e){return wt(t)?t:new TE(t,e)}class TE{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:pe(e),this._value=n?e:ai(e)}get value(){return Dm(this),this._value}set value(e){const n=this.__v_isShallow||Go(e)||oi(e);e=n?e:pe(e),Kn(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:ai(e),ko(this,4))}}function Ve(t){return wt(t)?t.value:t}const wE={get:(t,e,n)=>Ve(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return wt(s)&&!wt(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function Nm(t){return qs(t)?t:new Proxy(t,wE)}/**
* @vue/runtime-core v3.4.22
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function $n(t,e,n,r){try{return r?t(...r):t()}catch(s){Ca(s,e,n)}}function kt(t,e,n,r){if(ne(t)){const s=$n(t,e,n,r);return s&&um(s)&&s.catch(i=>{Ca(i,e,n)}),s}if(Q(t)){const s=[];for(let i=0;i<t.length;i++)s.push(kt(t[i],e,n,r));return s}}function Ca(t,e,n,r=!0){const s=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=`https://vuejs.org/error-reference/#runtime-${n}`;for(;i;){const l=i.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](t,o,a)===!1)return}i=i.parent}const c=e.appContext.config.errorHandler;if(c){Xn(),$n(c,null,10,[t,o,a]),Zn();return}}IE(t,n,s,r)}function IE(t,e,n,r=!0){console.error(t)}let ci=!1,_l=!1;const ct=[];let Gt=0;const Xr=[];let Cn=null,dr=0;const Mm=Promise.resolve();let Ou=null;function Lm(t){const e=Ou||Mm;return t?e.then(this?t.bind(this):t):e}function AE(t){let e=Gt+1,n=ct.length;for(;e<n;){const r=e+n>>>1,s=ct[r],i=li(s);i<t||i===t&&s.pre?e=r+1:n=r}return e}function ku(t){(!ct.length||!ct.includes(t,ci&&t.allowRecurse?Gt+1:Gt))&&(t.id==null?ct.push(t):ct.splice(AE(t.id),0,t),Fm())}function Fm(){!ci&&!_l&&(_l=!0,Ou=Mm.then($m))}function bE(t){const e=ct.indexOf(t);e>Gt&&ct.splice(e,1)}function RE(t){Q(t)?Xr.push(...t):(!Cn||!Cn.includes(t,t.allowRecurse?dr+1:dr))&&Xr.push(t),Fm()}function Pd(t,e,n=ci?Gt+1:0){for(;n<ct.length;n++){const r=ct[n];if(r&&r.pre){if(t&&r.id!==t.uid)continue;ct.splice(n,1),n--,r()}}}function Um(t){if(Xr.length){const e=[...new Set(Xr)].sort((n,r)=>li(n)-li(r));if(Xr.length=0,Cn){Cn.push(...e);return}for(Cn=e,dr=0;dr<Cn.length;dr++)Cn[dr]();Cn=null,dr=0}}const li=t=>t.id==null?1/0:t.id,SE=(t,e)=>{const n=li(t)-li(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function $m(t){_l=!1,ci=!0,ct.sort(SE);try{for(Gt=0;Gt<ct.length;Gt++){const e=ct[Gt];e&&e.active!==!1&&$n(e,null,14)}}finally{Gt=0,ct.length=0,Um(),ci=!1,Ou=null,(ct.length||Xr.length)&&$m()}}function PE(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||be;let s=n;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in r){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:d}=r[u]||be;d&&(s=n.map(f=>Be(f)?f.trim():f)),h&&(s=n.map(dl))}let a,c=r[a=bc(e)]||r[a=bc(sn(e))];!c&&i&&(c=r[a=bc(Nr(e))]),c&&kt(c,t,6,s);const l=r[a+"Once"];if(l){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,kt(l,t,6,s)}}function Bm(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const i=t.emits;let o={},a=!1;if(!ne(t)){const c=l=>{const u=Bm(l,e,!0);u&&(a=!0,ze(o,u))};!n&&e.mixins.length&&e.mixins.forEach(c),t.extends&&c(t.extends),t.mixins&&t.mixins.forEach(c)}return!i&&!a?(Pe(t)&&r.set(t,null),null):(Q(i)?i.forEach(c=>o[c]=null):ze(o,i),Pe(t)&&r.set(t,o),o)}function xa(t,e){return!t||!Ia(e)?!1:(e=e.slice(2).replace(/Once$/,""),fe(t,e[0].toLowerCase()+e.slice(1))||fe(t,Nr(e))||fe(t,e))}let pt=null,jm=null;function Qo(t){const e=pt;return pt=t,jm=t&&t.type.__scopeId||null,e}function Zr(t,e=pt,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&$d(-1);const i=Qo(e);let o;try{o=t(...s)}finally{Qo(i),r._d&&$d(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function Sc(t){const{type:e,vnode:n,proxy:r,withProxy:s,props:i,propsOptions:[o],slots:a,attrs:c,emit:l,render:u,renderCache:h,data:d,setupState:f,ctx:g,inheritAttrs:v}=t;let y,E;const I=Qo(t);try{if(n.shapeFlag&4){const C=s||r,$=C;y=Wt(u.call($,C,h,i,f,d,g)),E=c}else{const C=e;y=Wt(C.length>1?C(i,{attrs:c,slots:a,emit:l}):C(i,null)),E=e.props?c:CE(c)}}catch(C){Ks.length=0,Ca(C,t,1),y=Oe(Ft)}let T=y;if(E&&v!==!1){const C=Object.keys(E),{shapeFlag:$}=T;C.length&&$&7&&(o&&C.some(Eu)&&(E=xE(E,o)),T=Wn(T,E))}return n.dirs&&(T=Wn(T),T.dirs=T.dirs?T.dirs.concat(n.dirs):n.dirs),n.transition&&(T.transition=n.transition),y=T,Qo(I),y}const CE=t=>{let e;for(const n in t)(n==="class"||n==="style"||Ia(n))&&((e||(e={}))[n]=t[n]);return e},xE=(t,e)=>{const n={};for(const r in t)(!Eu(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function OE(t,e,n){const{props:r,children:s,component:i}=t,{props:o,children:a,patchFlag:c}=e,l=i.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?Cd(r,o,l):!!o;if(c&8){const u=e.dynamicProps;for(let h=0;h<u.length;h++){const d=u[h];if(o[d]!==r[d]&&!xa(l,d))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?Cd(r,o,l):!0:!!o;return!1}function Cd(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==t[i]&&!xa(n,i))return!0}return!1}function kE({vnode:t,parent:e},n){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===t&&(r.el=t.el),r===t)(t=e.vnode).el=n,e=e.parent;else break}}const qm="components",DE="directives";function VE(t,e){return Hm(qm,t,!0,e)||t}const NE=Symbol.for("v-ndc");function ME(t){return Hm(DE,t)}function Hm(t,e,n=!0,r=!1){const s=pt||et;if(s){const i=s.type;if(t===qm){const a=xT(i,!1);if(a&&(a===e||a===sn(e)||a===Ra(sn(e))))return i}const o=xd(s[t]||i[t],e)||xd(s.appContext[t],e);return!o&&r?i:o}}function xd(t,e){return t&&(t[e]||t[sn(e)]||t[Ra(sn(e))])}const LE=t=>t.__isSuspense;function FE(t,e){e&&e.pendingBranch?Q(t)?e.effects.push(...t):e.effects.push(t):RE(t)}const UE=Symbol.for("v-scx"),$E=()=>Lt(UE),_o={};function lt(t,e,n){return zm(t,e,n)}function zm(t,e,{immediate:n,deep:r,flush:s,once:i,onTrack:o,onTrigger:a}=be){if(e&&i){const M=e;e=(...ie)=>{M(...ie),$()}}const c=et,l=M=>r===!0?M:mr(M,r===!1?1:void 0);let u,h=!1,d=!1;if(wt(t)?(u=()=>t.value,h=Go(t)):qs(t)?(u=()=>l(t),h=!0):Q(t)?(d=!0,h=t.some(M=>qs(M)||Go(M)),u=()=>t.map(M=>{if(wt(M))return M.value;if(qs(M))return l(M);if(ne(M))return $n(M,c,2)})):ne(t)?e?u=()=>$n(t,c,2):u=()=>(f&&f(),kt(t,c,3,[g])):u=Ot,e&&r){const M=u;u=()=>mr(M())}let f,g=M=>{f=T.onStop=()=>{$n(M,c,4),f=T.onStop=void 0}},v;if(Na)if(g=Ot,e?n&&kt(e,c,3,[u(),d?[]:void 0,g]):u(),s==="sync"){const M=$E();v=M.__watcherHandles||(M.__watcherHandles=[])}else return Ot;let y=d?new Array(t.length).fill(_o):_o;const E=()=>{if(!(!T.active||!T.dirty))if(e){const M=T.run();(r||h||(d?M.some((ie,W)=>Kn(ie,y[W])):Kn(M,y)))&&(f&&f(),kt(e,c,3,[M,y===_o?void 0:d&&y[0]===_o?[]:y,g]),y=M)}else T.run()};E.allowRecurse=!!e;let I;s==="sync"?I=E:s==="post"?I=()=>yt(E,c&&c.suspense):(E.pre=!0,c&&(E.id=c.uid),I=()=>ku(E));const T=new Au(u,Ot,I),C=_m(),$=()=>{T.stop(),C&&Tu(C.effects,T)};return e?n?E():y=T.run():s==="post"?yt(T.run.bind(T),c&&c.suspense):T.run(),v&&v.push($),$}function BE(t,e,n){const r=this.proxy,s=Be(t)?t.includes(".")?Km(r,t):()=>r[t]:t.bind(r,r);let i;ne(e)?i=e:(i=e.handler,n=e);const o=Ni(this),a=zm(s,i.bind(r),n);return o(),a}function Km(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function mr(t,e,n=0,r){if(!Pe(t)||t.__v_skip)return t;if(e&&e>0){if(n>=e)return t;n++}if(r=r||new Set,r.has(t))return t;if(r.add(t),wt(t))mr(t.value,e,n,r);else if(Q(t))for(let s=0;s<t.length;s++)mr(t[s],e,n,r);else if(lm(t)||Jr(t))t.forEach(s=>{mr(s,e,n,r)});else if(dm(t))for(const s in t)mr(t[s],e,n,r);return t}function Ns(t,e){if(pt===null)return t;const n=Ma(pt)||pt.proxy,r=t.dirs||(t.dirs=[]);for(let s=0;s<e.length;s++){let[i,o,a,c=be]=e[s];i&&(ne(i)&&(i={mounted:i,updated:i}),i.deep&&mr(o),r.push({dir:i,instance:n,value:o,oldValue:void 0,arg:a,modifiers:c}))}return t}function ir(t,e,n,r){const s=t.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let c=a.dir[r];c&&(Xn(),kt(c,n,8,[t.el,a,t,e]),Zn())}}const xn=Symbol("_leaveCb"),yo=Symbol("_enterCb");function jE(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Dt(()=>{t.isMounted=!0}),Xm(()=>{t.isUnmounting=!0}),t}const Ct=[Function,Array],Wm={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Ct,onEnter:Ct,onAfterEnter:Ct,onEnterCancelled:Ct,onBeforeLeave:Ct,onLeave:Ct,onAfterLeave:Ct,onLeaveCancelled:Ct,onBeforeAppear:Ct,onAppear:Ct,onAfterAppear:Ct,onAppearCancelled:Ct},qE={name:"BaseTransition",props:Wm,setup(t,{slots:e}){const n=Va(),r=jE();return()=>{const s=e.default&&Qm(e.default(),!0);if(!s||!s.length)return;let i=s[0];if(s.length>1){for(const d of s)if(d.type!==Ft){i=d;break}}const o=pe(t),{mode:a}=o;if(r.isLeaving)return Pc(i);const c=Od(i);if(!c)return Pc(i);const l=yl(c,o,r,n);vl(c,l);const u=n.subTree,h=u&&Od(u);if(h&&h.type!==Ft&&!fr(c,h)){const d=yl(h,o,r,n);if(vl(h,d),a==="out-in")return r.isLeaving=!0,d.afterLeave=()=>{r.isLeaving=!1,n.update.active!==!1&&(n.effect.dirty=!0,n.update())},Pc(i);a==="in-out"&&c.type!==Ft&&(d.delayLeave=(f,g,v)=>{const y=Gm(r,h);y[String(h.key)]=h,f[xn]=()=>{g(),f[xn]=void 0,delete l.delayedLeave},l.delayedLeave=v})}return i}}},HE=qE;function Gm(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function yl(t,e,n,r){const{appear:s,mode:i,persisted:o=!1,onBeforeEnter:a,onEnter:c,onAfterEnter:l,onEnterCancelled:u,onBeforeLeave:h,onLeave:d,onAfterLeave:f,onLeaveCancelled:g,onBeforeAppear:v,onAppear:y,onAfterAppear:E,onAppearCancelled:I}=e,T=String(t.key),C=Gm(n,t),$=(W,re)=>{W&&kt(W,r,9,re)},M=(W,re)=>{const le=re[1];$(W,re),Q(W)?W.every(Me=>Me.length<=1)&&le():W.length<=1&&le()},ie={mode:i,persisted:o,beforeEnter(W){let re=a;if(!n.isMounted)if(s)re=v||a;else return;W[xn]&&W[xn](!0);const le=C[T];le&&fr(t,le)&&le.el[xn]&&le.el[xn](),$(re,[W])},enter(W){let re=c,le=l,Me=u;if(!n.isMounted)if(s)re=y||c,le=E||l,Me=I||u;else return;let q=!1;const me=W[yo]=qe=>{q||(q=!0,qe?$(Me,[W]):$(le,[W]),ie.delayedLeave&&ie.delayedLeave(),W[yo]=void 0)};re?M(re,[W,me]):me()},leave(W,re){const le=String(t.key);if(W[yo]&&W[yo](!0),n.isUnmounting)return re();$(h,[W]);let Me=!1;const q=W[xn]=me=>{Me||(Me=!0,re(),me?$(g,[W]):$(f,[W]),W[xn]=void 0,C[le]===t&&delete C[le])};C[le]=t,d?M(d,[W,q]):q()},clone(W){return yl(W,e,n,r)}};return ie}function Pc(t){if(Oa(t))return t=Wn(t),t.children=null,t}function Od(t){return Oa(t)?t.children?t.children[0]:void 0:t}function vl(t,e){t.shapeFlag&6&&t.component?vl(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function Qm(t,e=!1,n){let r=[],s=0;for(let i=0;i<t.length;i++){let o=t[i];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:i);o.type===Xe?(o.patchFlag&128&&s++,r=r.concat(Qm(o.children,e,a))):(e||o.type!==Ft)&&r.push(a!=null?Wn(o,{key:a}):o)}if(s>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}/*! #__NO_SIDE_EFFECTS__ */function Du(t,e){return ne(t)?ze({name:t.name},e,{setup:t}):t}const Do=t=>!!t.type.__asyncLoader,Oa=t=>t.type.__isKeepAlive;function zE(t,e){Ym(t,"a",e)}function KE(t,e){Ym(t,"da",e)}function Ym(t,e,n=et){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(ka(e,r,n),n){let s=n.parent;for(;s&&s.parent;)Oa(s.parent.vnode)&&WE(r,e,n,s),s=s.parent}}function WE(t,e,n,r){const s=ka(e,t,r,!0);tr(()=>{Tu(r[e],s)},n)}function ka(t,e,n=et,r=!1){if(n){const s=n[t]||(n[t]=[]),i=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Xn();const a=Ni(n),c=kt(e,n,t,o);return a(),Zn(),c});return r?s.unshift(i):s.push(i),i}}const Tn=t=>(e,n=et)=>(!Na||t==="sp")&&ka(t,(...r)=>e(...r),n),GE=Tn("bm"),Dt=Tn("m"),QE=Tn("bu"),Jm=Tn("u"),Xm=Tn("bum"),tr=Tn("um"),YE=Tn("sp"),JE=Tn("rtg"),XE=Tn("rtc");function ZE(t,e=et){ka("ec",t,e)}function br(t,e,n,r){let s;const i=n&&n[r];if(Q(t)||Be(t)){s=new Array(t.length);for(let o=0,a=t.length;o<a;o++)s[o]=e(t[o],o,void 0,i&&i[o])}else if(typeof t=="number"){s=new Array(t);for(let o=0;o<t;o++)s[o]=e(o+1,o,void 0,i&&i[o])}else if(Pe(t))if(t[Symbol.iterator])s=Array.from(t,(o,a)=>e(o,a,void 0,i&&i[a]));else{const o=Object.keys(t);s=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const l=o[a];s[a]=e(t[l],l,a,i&&i[a])}}else s=[];return n&&(n[r]=s),s}const El=t=>t?dg(t)?Ma(t)||t.proxy:El(t.parent):null,Hs=ze(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>El(t.parent),$root:t=>El(t.root),$emit:t=>t.emit,$options:t=>Vu(t),$forceUpdate:t=>t.f||(t.f=()=>{t.effect.dirty=!0,ku(t.update)}),$nextTick:t=>t.n||(t.n=Lm.bind(t.proxy)),$watch:t=>BE.bind(t)}),Cc=(t,e)=>t!==be&&!t.__isScriptSetup&&fe(t,e),eT={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:c}=t;let l;if(e[0]!=="$"){const f=o[e];if(f!==void 0)switch(f){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return i[e]}else{if(Cc(r,e))return o[e]=1,r[e];if(s!==be&&fe(s,e))return o[e]=2,s[e];if((l=t.propsOptions[0])&&fe(l,e))return o[e]=3,i[e];if(n!==be&&fe(n,e))return o[e]=4,n[e];Tl&&(o[e]=0)}}const u=Hs[e];let h,d;if(u)return e==="$attrs"&&Tt(t,"get",e),u(t);if((h=a.__cssModules)&&(h=h[e]))return h;if(n!==be&&fe(n,e))return o[e]=4,n[e];if(d=c.config.globalProperties,fe(d,e))return d[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:i}=t;return Cc(s,e)?(s[e]=n,!0):r!==be&&fe(r,e)?(r[e]=n,!0):fe(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(i[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!n[o]||t!==be&&fe(t,o)||Cc(e,o)||(a=i[0])&&fe(a,o)||fe(r,o)||fe(Hs,o)||fe(s.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:fe(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function tT(){return nT().slots}function nT(){const t=Va();return t.setupContext||(t.setupContext=pg(t))}function kd(t){return Q(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Tl=!0;function rT(t){const e=Vu(t),n=t.proxy,r=t.ctx;Tl=!1,e.beforeCreate&&Dd(e.beforeCreate,t,"bc");const{data:s,computed:i,methods:o,watch:a,provide:c,inject:l,created:u,beforeMount:h,mounted:d,beforeUpdate:f,updated:g,activated:v,deactivated:y,beforeDestroy:E,beforeUnmount:I,destroyed:T,unmounted:C,render:$,renderTracked:M,renderTriggered:ie,errorCaptured:W,serverPrefetch:re,expose:le,inheritAttrs:Me,components:q,directives:me,filters:qe}=e;if(l&&sT(l,r,null),o)for(const we in o){const _e=o[we];ne(_e)&&(r[we]=_e.bind(n))}if(s){const we=s.call(n,n);Pe(we)&&(t.data=er(we))}if(Tl=!0,i)for(const we in i){const _e=i[we],ln=ne(_e)?_e.bind(n,n):ne(_e.get)?_e.get.bind(n,n):Ot,In=!ne(_e)&&ne(_e.set)?_e.set.bind(n):Ot,qt=De({get:ln,set:In});Object.defineProperty(r,we,{enumerable:!0,configurable:!0,get:()=>qt.value,set:_t=>qt.value=_t})}if(a)for(const we in a)Zm(a[we],r,n,we);if(c){const we=ne(c)?c.call(n):c;Reflect.ownKeys(we).forEach(_e=>{Vo(_e,we[_e])})}u&&Dd(u,t,"c");function Le(we,_e){Q(_e)?_e.forEach(ln=>we(ln.bind(n))):_e&&we(_e.bind(n))}if(Le(GE,h),Le(Dt,d),Le(QE,f),Le(Jm,g),Le(zE,v),Le(KE,y),Le(ZE,W),Le(XE,M),Le(JE,ie),Le(Xm,I),Le(tr,C),Le(YE,re),Q(le))if(le.length){const we=t.exposed||(t.exposed={});le.forEach(_e=>{Object.defineProperty(we,_e,{get:()=>n[_e],set:ln=>n[_e]=ln})})}else t.exposed||(t.exposed={});$&&t.render===Ot&&(t.render=$),Me!=null&&(t.inheritAttrs=Me),q&&(t.components=q),me&&(t.directives=me)}function sT(t,e,n=Ot){Q(t)&&(t=wl(t));for(const r in t){const s=t[r];let i;Pe(s)?"default"in s?i=Lt(s.from||r,s.default,!0):i=Lt(s.from||r):i=Lt(s),wt(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):e[r]=i}}function Dd(t,e,n){kt(Q(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function Zm(t,e,n,r){const s=r.includes(".")?Km(n,r):()=>n[r];if(Be(t)){const i=e[t];ne(i)&&lt(s,i)}else if(ne(t))lt(s,t.bind(n));else if(Pe(t))if(Q(t))t.forEach(i=>Zm(i,e,n,r));else{const i=ne(t.handler)?t.handler.bind(n):e[t.handler];ne(i)&&lt(s,i,t)}}function Vu(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=t.appContext,a=i.get(e);let c;return a?c=a:!s.length&&!n&&!r?c=e:(c={},s.length&&s.forEach(l=>Yo(c,l,o,!0)),Yo(c,e,o)),Pe(e)&&i.set(e,c),c}function Yo(t,e,n,r=!1){const{mixins:s,extends:i}=e;i&&Yo(t,i,n,!0),s&&s.forEach(o=>Yo(t,o,n,!0));for(const o in e)if(!(r&&o==="expose")){const a=iT[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const iT={data:Vd,props:Nd,emits:Nd,methods:Ms,computed:Ms,beforeCreate:ft,created:ft,beforeMount:ft,mounted:ft,beforeUpdate:ft,updated:ft,beforeDestroy:ft,beforeUnmount:ft,destroyed:ft,unmounted:ft,activated:ft,deactivated:ft,errorCaptured:ft,serverPrefetch:ft,components:Ms,directives:Ms,watch:aT,provide:Vd,inject:oT};function Vd(t,e){return e?t?function(){return ze(ne(t)?t.call(this,this):t,ne(e)?e.call(this,this):e)}:e:t}function oT(t,e){return Ms(wl(t),wl(e))}function wl(t){if(Q(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function ft(t,e){return t?[...new Set([].concat(t,e))]:e}function Ms(t,e){return t?ze(Object.create(null),t,e):e}function Nd(t,e){return t?Q(t)&&Q(e)?[...new Set([...t,...e])]:ze(Object.create(null),kd(t),kd(e??{})):e}function aT(t,e){if(!t)return e;if(!e)return t;const n=ze(Object.create(null),t);for(const r in e)n[r]=ft(t[r],e[r]);return n}function eg(){return{app:null,config:{isNativeTag:M0,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let cT=0;function lT(t,e){return function(r,s=null){ne(r)||(r=ze({},r)),s!=null&&!Pe(s)&&(s=null);const i=eg(),o=new WeakSet;let a=!1;const c=i.app={_uid:cT++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:kT,get config(){return i.config},set config(l){},use(l,...u){return o.has(l)||(l&&ne(l.install)?(o.add(l),l.install(c,...u)):ne(l)&&(o.add(l),l(c,...u))),c},mixin(l){return i.mixins.includes(l)||i.mixins.push(l),c},component(l,u){return u?(i.components[l]=u,c):i.components[l]},directive(l,u){return u?(i.directives[l]=u,c):i.directives[l]},mount(l,u,h){if(!a){const d=Oe(r,s);return d.appContext=i,h===!0?h="svg":h===!1&&(h=void 0),u&&e?e(d,l):t(d,l,h),a=!0,c._container=l,l.__vue_app__=c,Ma(d.component)||d.component.proxy}},unmount(){a&&(t(null,c._container),delete c._container.__vue_app__)},provide(l,u){return i.provides[l]=u,c},runWithContext(l){const u=zs;zs=c;try{return l()}finally{zs=u}}};return c}}let zs=null;function Vo(t,e){if(et){let n=et.provides;const r=et.parent&&et.parent.provides;r===n&&(n=et.provides=Object.create(r)),n[t]=e}}function Lt(t,e,n=!1){const r=et||pt;if(r||zs){const s=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:zs._context.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&ne(e)?e.call(r&&r.proxy):e}}const tg={};function uT(t,e,n,r=!1){const s={},i=Object.create(tg);t.propsDefaults=Object.create(null),ng(t,e,s,i);for(const o in t.propsOptions[0])o in s||(s[o]=void 0);n?t.props=r?s:Cm(s):t.type.props?t.props=s:t.props=i,t.attrs=i}function hT(t,e,n,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=t,a=pe(s),[c]=t.propsOptions;let l=!1;if((r||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let h=0;h<u.length;h++){let d=u[h];if(xa(t.emitsOptions,d))continue;const f=e[d];if(c)if(fe(i,d))f!==i[d]&&(i[d]=f,l=!0);else{const g=sn(d);s[g]=Il(c,a,g,f,t,!1)}else f!==i[d]&&(i[d]=f,l=!0)}}}else{ng(t,e,s,i)&&(l=!0);let u;for(const h in a)(!e||!fe(e,h)&&((u=Nr(h))===h||!fe(e,u)))&&(c?n&&(n[h]!==void 0||n[u]!==void 0)&&(s[h]=Il(c,a,h,void 0,t,!0)):delete s[h]);if(i!==a)for(const h in i)(!e||!fe(e,h))&&(delete i[h],l=!0)}l&&mn(t.attrs,"set","")}function ng(t,e,n,r){const[s,i]=t.propsOptions;let o=!1,a;if(e)for(let c in e){if(js(c))continue;const l=e[c];let u;s&&fe(s,u=sn(c))?!i||!i.includes(u)?n[u]=l:(a||(a={}))[u]=l:xa(t.emitsOptions,c)||(!(c in r)||l!==r[c])&&(r[c]=l,o=!0)}if(i){const c=pe(n),l=a||be;for(let u=0;u<i.length;u++){const h=i[u];n[h]=Il(s,c,h,l[h],t,!fe(l,h))}}return o}function Il(t,e,n,r,s,i){const o=t[n];if(o!=null){const a=fe(o,"default");if(a&&r===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&ne(c)){const{propsDefaults:l}=s;if(n in l)r=l[n];else{const u=Ni(s);r=l[n]=c.call(null,e),u()}}else r=c}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===Nr(n))&&(r=!0))}return r}function rg(t,e,n=!1){const r=e.propsCache,s=r.get(t);if(s)return s;const i=t.props,o={},a=[];let c=!1;if(!ne(t)){const u=h=>{c=!0;const[d,f]=rg(h,e,!0);ze(o,d),f&&a.push(...f)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!i&&!c)return Pe(t)&&r.set(t,Yr),Yr;if(Q(i))for(let u=0;u<i.length;u++){const h=sn(i[u]);Md(h)&&(o[h]=be)}else if(i)for(const u in i){const h=sn(u);if(Md(h)){const d=i[u],f=o[h]=Q(d)||ne(d)?{type:d}:ze({},d);if(f){const g=Ud(Boolean,f.type),v=Ud(String,f.type);f[0]=g>-1,f[1]=v<0||g<v,(g>-1||fe(f,"default"))&&a.push(h)}}}const l=[o,a];return Pe(t)&&r.set(t,l),l}function Md(t){return t[0]!=="$"&&!js(t)}function Ld(t){return t===null?"null":typeof t=="function"?t.name||"":typeof t=="object"&&t.constructor&&t.constructor.name||""}function Fd(t,e){return Ld(t)===Ld(e)}function Ud(t,e){return Q(e)?e.findIndex(n=>Fd(n,t)):ne(e)&&Fd(e,t)?0:-1}const sg=t=>t[0]==="_"||t==="$stable",Nu=t=>Q(t)?t.map(Wt):[Wt(t)],dT=(t,e,n)=>{if(e._n)return e;const r=Zr((...s)=>Nu(e(...s)),n);return r._c=!1,r},ig=(t,e,n)=>{const r=t._ctx;for(const s in t){if(sg(s))continue;const i=t[s];if(ne(i))e[s]=dT(s,i,r);else if(i!=null){const o=Nu(i);e[s]=()=>o}}},og=(t,e)=>{const n=Nu(e);t.slots.default=()=>n},fT=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=pe(e),fm(t.slots,"_",n)):ig(e,t.slots={})}else t.slots={},e&&og(t,e)},pT=(t,e,n)=>{const{vnode:r,slots:s}=t;let i=!0,o=be;if(r.shapeFlag&32){const a=e._;a?n&&a===1?i=!1:(ze(s,e),!n&&a===1&&delete s._):(i=!e.$stable,ig(e,s)),o=e}else e&&(og(t,e),o={default:1});if(i)for(const a in s)!sg(a)&&o[a]==null&&delete s[a]};function Al(t,e,n,r,s=!1){if(Q(t)){t.forEach((d,f)=>Al(d,e&&(Q(e)?e[f]:e),n,r,s));return}if(Do(r)&&!s)return;const i=r.shapeFlag&4?Ma(r.component)||r.component.proxy:r.el,o=s?null:i,{i:a,r:c}=t,l=e&&e.r,u=a.refs===be?a.refs={}:a.refs,h=a.setupState;if(l!=null&&l!==c&&(Be(l)?(u[l]=null,fe(h,l)&&(h[l]=null)):wt(l)&&(l.value=null)),ne(c))$n(c,a,12,[o,u]);else{const d=Be(c),f=wt(c);if(d||f){const g=()=>{if(t.f){const v=d?fe(h,c)?h[c]:u[c]:c.value;s?Q(v)&&Tu(v,i):Q(v)?v.includes(i)||v.push(i):d?(u[c]=[i],fe(h,c)&&(h[c]=u[c])):(c.value=[i],t.k&&(u[t.k]=c.value))}else d?(u[c]=o,fe(h,c)&&(h[c]=o)):f&&(c.value=o,t.k&&(u[t.k]=o))};o?(g.id=-1,yt(g,n)):g()}}}const yt=FE;function mT(t){return gT(t)}function gT(t,e){const n=pm();n.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:c,setText:l,setElementText:u,parentNode:h,nextSibling:d,setScopeId:f=Ot,insertStaticContent:g}=t,v=(p,m,_,R=null,w=null,O=null,F=void 0,x=null,k=!!m.dynamicChildren)=>{if(p===m)return;p&&!fr(p,m)&&(R=b(p),_t(p,w,O,!0),p=null),m.patchFlag===-2&&(k=!1,m.dynamicChildren=null);const{type:P,ref:j,shapeFlag:G}=m;switch(P){case Da:y(p,m,_,R);break;case Ft:E(p,m,_,R);break;case Oc:p==null&&I(m,_,R,F);break;case Xe:q(p,m,_,R,w,O,F,x,k);break;default:G&1?$(p,m,_,R,w,O,F,x,k):G&6?me(p,m,_,R,w,O,F,x,k):(G&64||G&128)&&P.process(p,m,_,R,w,O,F,x,k,H)}j!=null&&w&&Al(j,p&&p.ref,O,m||p,!m)},y=(p,m,_,R)=>{if(p==null)r(m.el=a(m.children),_,R);else{const w=m.el=p.el;m.children!==p.children&&l(w,m.children)}},E=(p,m,_,R)=>{p==null?r(m.el=c(m.children||""),_,R):m.el=p.el},I=(p,m,_,R)=>{[p.el,p.anchor]=g(p.children,m,_,R,p.el,p.anchor)},T=({el:p,anchor:m},_,R)=>{let w;for(;p&&p!==m;)w=d(p),r(p,_,R),p=w;r(m,_,R)},C=({el:p,anchor:m})=>{let _;for(;p&&p!==m;)_=d(p),s(p),p=_;s(m)},$=(p,m,_,R,w,O,F,x,k)=>{m.type==="svg"?F="svg":m.type==="math"&&(F="mathml"),p==null?M(m,_,R,w,O,F,x,k):re(p,m,w,O,F,x,k)},M=(p,m,_,R,w,O,F,x)=>{let k,P;const{props:j,shapeFlag:G,transition:z,dirs:Z}=p;if(k=p.el=o(p.type,O,j&&j.is,j),G&8?u(k,p.children):G&16&&W(p.children,k,null,R,w,xc(p,O),F,x),Z&&ir(p,null,R,"created"),ie(k,p,p.scopeId,F,R),j){for(const Ie in j)Ie!=="value"&&!js(Ie)&&i(k,Ie,null,j[Ie],O,p.children,R,w,st);"value"in j&&i(k,"value",null,j.value,O),(P=j.onVnodeBeforeMount)&&zt(P,R,p)}Z&&ir(p,null,R,"beforeMount");const ae=_T(w,z);ae&&z.beforeEnter(k),r(k,m,_),((P=j&&j.onVnodeMounted)||ae||Z)&&yt(()=>{P&&zt(P,R,p),ae&&z.enter(k),Z&&ir(p,null,R,"mounted")},w)},ie=(p,m,_,R,w)=>{if(_&&f(p,_),R)for(let O=0;O<R.length;O++)f(p,R[O]);if(w){let O=w.subTree;if(m===O){const F=w.vnode;ie(p,F,F.scopeId,F.slotScopeIds,w.parent)}}},W=(p,m,_,R,w,O,F,x,k=0)=>{for(let P=k;P<p.length;P++){const j=p[P]=x?On(p[P]):Wt(p[P]);v(null,j,m,_,R,w,O,F,x)}},re=(p,m,_,R,w,O,F)=>{const x=m.el=p.el;let{patchFlag:k,dynamicChildren:P,dirs:j}=m;k|=p.patchFlag&16;const G=p.props||be,z=m.props||be;let Z;if(_&&or(_,!1),(Z=z.onVnodeBeforeUpdate)&&zt(Z,_,m,p),j&&ir(m,p,_,"beforeUpdate"),_&&or(_,!0),P?le(p.dynamicChildren,P,x,_,R,xc(m,w),O):F||_e(p,m,x,null,_,R,xc(m,w),O,!1),k>0){if(k&16)Me(x,m,G,z,_,R,w);else if(k&2&&G.class!==z.class&&i(x,"class",null,z.class,w),k&4&&i(x,"style",G.style,z.style,w),k&8){const ae=m.dynamicProps;for(let Ie=0;Ie<ae.length;Ie++){const xe=ae[Ie],Ke=G[xe],Vt=z[xe];(Vt!==Ke||xe==="value")&&i(x,xe,Ke,Vt,w,p.children,_,R,st)}}k&1&&p.children!==m.children&&u(x,m.children)}else!F&&P==null&&Me(x,m,G,z,_,R,w);((Z=z.onVnodeUpdated)||j)&&yt(()=>{Z&&zt(Z,_,m,p),j&&ir(m,p,_,"updated")},R)},le=(p,m,_,R,w,O,F)=>{for(let x=0;x<m.length;x++){const k=p[x],P=m[x],j=k.el&&(k.type===Xe||!fr(k,P)||k.shapeFlag&70)?h(k.el):_;v(k,P,j,null,R,w,O,F,!0)}},Me=(p,m,_,R,w,O,F)=>{if(_!==R){if(_!==be)for(const x in _)!js(x)&&!(x in R)&&i(p,x,_[x],null,F,m.children,w,O,st);for(const x in R){if(js(x))continue;const k=R[x],P=_[x];k!==P&&x!=="value"&&i(p,x,P,k,F,m.children,w,O,st)}"value"in R&&i(p,"value",_.value,R.value,F)}},q=(p,m,_,R,w,O,F,x,k)=>{const P=m.el=p?p.el:a(""),j=m.anchor=p?p.anchor:a("");let{patchFlag:G,dynamicChildren:z,slotScopeIds:Z}=m;Z&&(x=x?x.concat(Z):Z),p==null?(r(P,_,R),r(j,_,R),W(m.children||[],_,j,w,O,F,x,k)):G>0&&G&64&&z&&p.dynamicChildren?(le(p.dynamicChildren,z,_,w,O,F,x),(m.key!=null||w&&m===w.subTree)&&ag(p,m,!0)):_e(p,m,_,j,w,O,F,x,k)},me=(p,m,_,R,w,O,F,x,k)=>{m.slotScopeIds=x,p==null?m.shapeFlag&512?w.ctx.activate(m,_,R,F,k):qe(m,_,R,w,O,F,k):Pt(p,m,k)},qe=(p,m,_,R,w,O,F)=>{const x=p.component=RT(p,R,w);if(Oa(p)&&(x.ctx.renderer=H),ST(x),x.asyncDep){if(w&&w.registerDep(x,Le),!p.el){const k=x.subTree=Oe(Ft);E(null,k,m,_)}}else Le(x,p,m,_,w,O,F)},Pt=(p,m,_)=>{const R=m.component=p.component;if(OE(p,m,_))if(R.asyncDep&&!R.asyncResolved){we(R,m,_);return}else R.next=m,bE(R.update),R.effect.dirty=!0,R.update();else m.el=p.el,R.vnode=m},Le=(p,m,_,R,w,O,F)=>{const x=()=>{if(p.isMounted){let{next:j,bu:G,u:z,parent:Z,vnode:ae}=p;{const jr=cg(p);if(jr){j&&(j.el=ae.el,we(p,j,F)),jr.asyncDep.then(()=>{p.isUnmounted||x()});return}}let Ie=j,xe;or(p,!1),j?(j.el=ae.el,we(p,j,F)):j=ae,G&&Oo(G),(xe=j.props&&j.props.onVnodeBeforeUpdate)&&zt(xe,Z,j,ae),or(p,!0);const Ke=Sc(p),Vt=p.subTree;p.subTree=Ke,v(Vt,Ke,h(Vt.el),b(Vt),p,w,O),j.el=Ke.el,Ie===null&&kE(p,Ke.el),z&&yt(z,w),(xe=j.props&&j.props.onVnodeUpdated)&&yt(()=>zt(xe,Z,j,ae),w)}else{let j;const{el:G,props:z}=m,{bm:Z,m:ae,parent:Ie}=p,xe=Do(m);if(or(p,!1),Z&&Oo(Z),!xe&&(j=z&&z.onVnodeBeforeMount)&&zt(j,Ie,m),or(p,!0),G&&Ce){const Ke=()=>{p.subTree=Sc(p),Ce(G,p.subTree,p,w,null)};xe?m.type.__asyncLoader().then(()=>!p.isUnmounted&&Ke()):Ke()}else{const Ke=p.subTree=Sc(p);v(null,Ke,_,R,p,w,O),m.el=Ke.el}if(ae&&yt(ae,w),!xe&&(j=z&&z.onVnodeMounted)){const Ke=m;yt(()=>zt(j,Ie,Ke),w)}(m.shapeFlag&256||Ie&&Do(Ie.vnode)&&Ie.vnode.shapeFlag&256)&&p.a&&yt(p.a,w),p.isMounted=!0,m=_=R=null}},k=p.effect=new Au(x,Ot,()=>ku(P),p.scope),P=p.update=()=>{k.dirty&&k.run()};P.id=p.uid,or(p,!0),P()},we=(p,m,_)=>{m.component=p;const R=p.vnode.props;p.vnode=m,p.next=null,hT(p,m.props,R,_),pT(p,m.children,_),Xn(),Pd(p),Zn()},_e=(p,m,_,R,w,O,F,x,k=!1)=>{const P=p&&p.children,j=p?p.shapeFlag:0,G=m.children,{patchFlag:z,shapeFlag:Z}=m;if(z>0){if(z&128){In(P,G,_,R,w,O,F,x,k);return}else if(z&256){ln(P,G,_,R,w,O,F,x,k);return}}Z&8?(j&16&&st(P,w,O),G!==P&&u(_,G)):j&16?Z&16?In(P,G,_,R,w,O,F,x,k):st(P,w,O,!0):(j&8&&u(_,""),Z&16&&W(G,_,R,w,O,F,x,k))},ln=(p,m,_,R,w,O,F,x,k)=>{p=p||Yr,m=m||Yr;const P=p.length,j=m.length,G=Math.min(P,j);let z;for(z=0;z<G;z++){const Z=m[z]=k?On(m[z]):Wt(m[z]);v(p[z],Z,_,null,w,O,F,x,k)}P>j?st(p,w,O,!0,!1,G):W(m,_,R,w,O,F,x,k,G)},In=(p,m,_,R,w,O,F,x,k)=>{let P=0;const j=m.length;let G=p.length-1,z=j-1;for(;P<=G&&P<=z;){const Z=p[P],ae=m[P]=k?On(m[P]):Wt(m[P]);if(fr(Z,ae))v(Z,ae,_,null,w,O,F,x,k);else break;P++}for(;P<=G&&P<=z;){const Z=p[G],ae=m[z]=k?On(m[z]):Wt(m[z]);if(fr(Z,ae))v(Z,ae,_,null,w,O,F,x,k);else break;G--,z--}if(P>G){if(P<=z){const Z=z+1,ae=Z<j?m[Z].el:R;for(;P<=z;)v(null,m[P]=k?On(m[P]):Wt(m[P]),_,ae,w,O,F,x,k),P++}}else if(P>z)for(;P<=G;)_t(p[P],w,O,!0),P++;else{const Z=P,ae=P,Ie=new Map;for(P=ae;P<=z;P++){const It=m[P]=k?On(m[P]):Wt(m[P]);It.key!=null&&Ie.set(It.key,P)}let xe,Ke=0;const Vt=z-ae+1;let jr=!1,_d=0;const Cs=new Array(Vt);for(P=0;P<Vt;P++)Cs[P]=0;for(P=Z;P<=G;P++){const It=p[P];if(Ke>=Vt){_t(It,w,O,!0);continue}let Ht;if(It.key!=null)Ht=Ie.get(It.key);else for(xe=ae;xe<=z;xe++)if(Cs[xe-ae]===0&&fr(It,m[xe])){Ht=xe;break}Ht===void 0?_t(It,w,O,!0):(Cs[Ht-ae]=P+1,Ht>=_d?_d=Ht:jr=!0,v(It,m[Ht],_,null,w,O,F,x,k),Ke++)}const yd=jr?yT(Cs):Yr;for(xe=yd.length-1,P=Vt-1;P>=0;P--){const It=ae+P,Ht=m[It],vd=It+1<j?m[It+1].el:R;Cs[P]===0?v(null,Ht,_,vd,w,O,F,x,k):jr&&(xe<0||P!==yd[xe]?qt(Ht,_,vd,2):xe--)}}},qt=(p,m,_,R,w=null)=>{const{el:O,type:F,transition:x,children:k,shapeFlag:P}=p;if(P&6){qt(p.component.subTree,m,_,R);return}if(P&128){p.suspense.move(m,_,R);return}if(P&64){F.move(p,m,_,H);return}if(F===Xe){r(O,m,_);for(let G=0;G<k.length;G++)qt(k[G],m,_,R);r(p.anchor,m,_);return}if(F===Oc){T(p,m,_);return}if(R!==2&&P&1&&x)if(R===0)x.beforeEnter(O),r(O,m,_),yt(()=>x.enter(O),w);else{const{leave:G,delayLeave:z,afterLeave:Z}=x,ae=()=>r(O,m,_),Ie=()=>{G(O,()=>{ae(),Z&&Z()})};z?z(O,ae,Ie):Ie()}else r(O,m,_)},_t=(p,m,_,R=!1,w=!1)=>{const{type:O,props:F,ref:x,children:k,dynamicChildren:P,shapeFlag:j,patchFlag:G,dirs:z}=p;if(x!=null&&Al(x,null,_,p,!0),j&256){m.ctx.deactivate(p);return}const Z=j&1&&z,ae=!Do(p);let Ie;if(ae&&(Ie=F&&F.onVnodeBeforeUnmount)&&zt(Ie,m,p),j&6)uo(p.component,_,R);else{if(j&128){p.suspense.unmount(_,R);return}Z&&ir(p,null,m,"beforeUnmount"),j&64?p.type.remove(p,m,_,w,H,R):P&&(O!==Xe||G>0&&G&64)?st(P,m,_,!1,!0):(O===Xe&&G&384||!w&&j&16)&&st(k,m,_),R&&$r(p)}(ae&&(Ie=F&&F.onVnodeUnmounted)||Z)&&yt(()=>{Ie&&zt(Ie,m,p),Z&&ir(p,null,m,"unmounted")},_)},$r=p=>{const{type:m,el:_,anchor:R,transition:w}=p;if(m===Xe){Br(_,R);return}if(m===Oc){C(p);return}const O=()=>{s(_),w&&!w.persisted&&w.afterLeave&&w.afterLeave()};if(p.shapeFlag&1&&w&&!w.persisted){const{leave:F,delayLeave:x}=w,k=()=>F(_,O);x?x(p.el,O,k):k()}else O()},Br=(p,m)=>{let _;for(;p!==m;)_=d(p),s(p),p=_;s(m)},uo=(p,m,_)=>{const{bum:R,scope:w,update:O,subTree:F,um:x}=p;R&&Oo(R),w.stop(),O&&(O.active=!1,_t(F,p,m,_)),x&&yt(x,m),yt(()=>{p.isUnmounted=!0},m),m&&m.pendingBranch&&!m.isUnmounted&&p.asyncDep&&!p.asyncResolved&&p.suspenseId===m.pendingId&&(m.deps--,m.deps===0&&m.resolve())},st=(p,m,_,R=!1,w=!1,O=0)=>{for(let F=O;F<p.length;F++)_t(p[F],m,_,R,w)},b=p=>p.shapeFlag&6?b(p.component.subTree):p.shapeFlag&128?p.suspense.next():d(p.anchor||p.el);let B=!1;const L=(p,m,_)=>{p==null?m._vnode&&_t(m._vnode,null,null,!0):v(m._vnode||null,p,m,null,null,null,_),B||(B=!0,Pd(),Um(),B=!1),m._vnode=p},H={p:v,um:_t,m:qt,r:$r,mt:qe,mc:W,pc:_e,pbc:le,n:b,o:t};let ye,Ce;return e&&([ye,Ce]=e(H)),{render:L,hydrate:ye,createApp:lT(L,ye)}}function xc({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function or({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function _T(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function ag(t,e,n=!1){const r=t.children,s=e.children;if(Q(r)&&Q(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=On(s[i]),a.el=o.el),n||ag(o,a)),a.type===Da&&(a.el=o.el)}}function yT(t){const e=t.slice(),n=[0];let r,s,i,o,a;const c=t.length;for(r=0;r<c;r++){const l=t[r];if(l!==0){if(s=n[n.length-1],t[s]<l){e[r]=s,n.push(r);continue}for(i=0,o=n.length-1;i<o;)a=i+o>>1,t[n[a]]<l?i=a+1:o=a;l<t[n[i]]&&(i>0&&(e[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=e[o];return n}function cg(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:cg(e)}const vT=t=>t.__isTeleport,Xe=Symbol.for("v-fgt"),Da=Symbol.for("v-txt"),Ft=Symbol.for("v-cmt"),Oc=Symbol.for("v-stc"),Ks=[];let Mt=null;function oe(t=!1){Ks.push(Mt=t?null:[])}function ET(){Ks.pop(),Mt=Ks[Ks.length-1]||null}let ui=1;function $d(t){ui+=t}function lg(t){return t.dynamicChildren=ui>0?Mt||Yr:null,ET(),ui>0&&Mt&&Mt.push(t),t}function he(t,e,n,r,s,i){return lg(D(t,e,n,r,s,i,!0))}function ug(t,e,n,r,s){return lg(Oe(t,e,n,r,s,!0))}function bl(t){return t?t.__v_isVNode===!0:!1}function fr(t,e){return t.type===e.type&&t.key===e.key}const hg=({key:t})=>t??null,No=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Be(t)||wt(t)||ne(t)?{i:pt,r:t,k:e,f:!!n}:t:null);function D(t,e=null,n=null,r=0,s=null,i=t===Xe?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&hg(e),ref:e&&No(e),scopeId:jm,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:pt};return a?(Lu(c,n),i&128&&t.normalize(c)):n&&(c.shapeFlag|=Be(n)?8:16),ui>0&&!o&&Mt&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Mt.push(c),c}const Oe=TT;function TT(t,e=null,n=null,r=0,s=null,i=!1){if((!t||t===NE)&&(t=Ft),bl(t)){const a=Wn(t,e,!0);return n&&Lu(a,n),ui>0&&!i&&Mt&&(a.shapeFlag&6?Mt[Mt.indexOf(t)]=a:Mt.push(a)),a.patchFlag|=-2,a}if(OT(t)&&(t=t.__vccOpts),e){e=wT(e);let{class:a,style:c}=e;a&&!Be(a)&&(e.class=Iu(a)),Pe(c)&&(Om(c)&&!Q(c)&&(c=ze({},c)),e.style=Sa(c))}const o=Be(t)?1:LE(t)?128:vT(t)?64:Pe(t)?4:ne(t)?2:0;return D(t,e,n,r,s,o,i,!0)}function wT(t){return t?Om(t)||Object.getPrototypeOf(t)===tg?ze({},t):t:null}function Wn(t,e,n=!1){const{props:r,ref:s,patchFlag:i,children:o}=t,a=e?IT(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&hg(a),ref:e&&e.ref?n&&s?Q(s)?s.concat(No(e)):[s,No(e)]:No(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Xe?i===-1?16:i|16:i,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Wn(t.ssContent),ssFallback:t.ssFallback&&Wn(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function Mu(t=" ",e=0){return Oe(Da,null,t,e)}function Rr(t="",e=!1){return e?(oe(),ug(Ft,null,t)):Oe(Ft,null,t)}function Wt(t){return t==null||typeof t=="boolean"?Oe(Ft):Q(t)?Oe(Xe,null,t.slice()):typeof t=="object"?On(t):Oe(Da,null,String(t))}function On(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Wn(t)}function Lu(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(Q(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),Lu(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;s?s===3&&pt&&(pt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024)):e._ctx=pt}else ne(e)?(e={default:e,_ctx:pt},n=32):(e=String(e),r&64?(n=16,e=[Mu(e)]):n=8);t.children=e,t.shapeFlag|=n}function IT(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=Iu([e.class,r.class]));else if(s==="style")e.style=Sa([e.style,r.style]);else if(Ia(s)){const i=e[s],o=r[s];o&&i!==o&&!(Q(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function zt(t,e,n,r=null){kt(t,e,7,[n,r])}const AT=eg();let bT=0;function RT(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||AT,i={uid:bT++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new Y0(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:rg(r,s),emitsOptions:Bm(r,s),emit:null,emitted:null,propsDefaults:be,inheritAttrs:r.inheritAttrs,ctx:be,data:be,props:be,attrs:be,slots:be,refs:be,setupState:be,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=PE.bind(null,i),t.ce&&t.ce(i),i}let et=null;const Va=()=>et||pt;let Jo,Rl;{const t=pm(),e=(n,r)=>{let s;return(s=t[n])||(s=t[n]=[]),s.push(r),i=>{s.length>1?s.forEach(o=>o(i)):s[0](i)}};Jo=e("__VUE_INSTANCE_SETTERS__",n=>et=n),Rl=e("__VUE_SSR_SETTERS__",n=>Na=n)}const Ni=t=>{const e=et;return Jo(t),t.scope.on(),()=>{t.scope.off(),Jo(e)}},Bd=()=>{et&&et.scope.off(),Jo(null)};function dg(t){return t.vnode.shapeFlag&4}let Na=!1;function ST(t,e=!1){e&&Rl(e);const{props:n,children:r}=t.vnode,s=dg(t);uT(t,n,s,e),fT(t,r);const i=s?PT(t,e):void 0;return e&&Rl(!1),i}function PT(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,eT);const{setup:r}=n;if(r){const s=t.setupContext=r.length>1?pg(t):null,i=Ni(t);Xn();const o=$n(r,t,0,[t.props,s]);if(Zn(),i(),um(o)){if(o.then(Bd,Bd),e)return o.then(a=>{jd(t,a,e)}).catch(a=>{Ca(a,t,0)});t.asyncDep=o}else jd(t,o,e)}else fg(t,e)}function jd(t,e,n){ne(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Pe(e)&&(t.setupState=Nm(e)),fg(t,n)}let qd;function fg(t,e,n){const r=t.type;if(!t.render){if(!e&&qd&&!r.render){const s=r.template||Vu(t).template;if(s){const{isCustomElement:i,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:c}=r,l=ze(ze({isCustomElement:i,delimiters:a},o),c);r.render=qd(s,l)}}t.render=r.render||Ot}{const s=Ni(t);Xn();try{rT(t)}finally{Zn(),s()}}}const CT={get(t,e){return Tt(t,"get",""),t[e]}};function pg(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,CT),slots:t.slots,emit:t.emit,expose:e}}function Ma(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Nm(yE(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in Hs)return Hs[n](t)},has(e,n){return n in e||n in Hs}}))}function xT(t,e=!0){return ne(t)?t.displayName||t.name:t.name||e&&t.__name}function OT(t){return ne(t)&&"__vccOpts"in t}const De=(t,e)=>vE(t,e,Na);function hi(t,e,n){const r=arguments.length;return r===2?Pe(e)&&!Q(e)?bl(e)?Oe(t,null,[e]):Oe(t,e):Oe(t,null,e):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&bl(n)&&(n=[n]),Oe(t,e,n))}const kT="3.4.22";/**
* @vue/runtime-dom v3.4.22
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const DT="http://www.w3.org/2000/svg",VT="http://www.w3.org/1998/Math/MathML",kn=typeof document<"u"?document:null,Hd=kn&&kn.createElement("template"),NT={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e==="svg"?kn.createElementNS(DT,t):e==="mathml"?kn.createElementNS(VT,t):kn.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>kn.createTextNode(t),createComment:t=>kn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>kn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,i){const o=n?n.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===i||!(s=s.nextSibling)););else{Hd.innerHTML=r==="svg"?`<svg>${t}</svg>`:r==="mathml"?`<math>${t}</math>`:t;const a=Hd.content;if(r==="svg"||r==="mathml"){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},bn="transition",xs="animation",di=Symbol("_vtc"),Fu=(t,{slots:e})=>hi(HE,MT(t),e);Fu.displayName="Transition";const mg={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};Fu.props=ze({},Wm,mg);const ar=(t,e=[])=>{Q(t)?t.forEach(n=>n(...e)):t&&t(...e)},zd=t=>t?Q(t)?t.some(e=>e.length>1):t.length>1:!1;function MT(t){const e={};for(const q in t)q in mg||(e[q]=t[q]);if(t.css===!1)return e;const{name:n="v",type:r,duration:s,enterFromClass:i=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:c=i,appearActiveClass:l=o,appearToClass:u=a,leaveFromClass:h=`${n}-leave-from`,leaveActiveClass:d=`${n}-leave-active`,leaveToClass:f=`${n}-leave-to`}=t,g=LT(s),v=g&&g[0],y=g&&g[1],{onBeforeEnter:E,onEnter:I,onEnterCancelled:T,onLeave:C,onLeaveCancelled:$,onBeforeAppear:M=E,onAppear:ie=I,onAppearCancelled:W=T}=e,re=(q,me,qe)=>{cr(q,me?u:a),cr(q,me?l:o),qe&&qe()},le=(q,me)=>{q._isLeaving=!1,cr(q,h),cr(q,f),cr(q,d),me&&me()},Me=q=>(me,qe)=>{const Pt=q?ie:I,Le=()=>re(me,q,qe);ar(Pt,[me,Le]),Kd(()=>{cr(me,q?c:i),Rn(me,q?u:a),zd(Pt)||Wd(me,r,v,Le)})};return ze(e,{onBeforeEnter(q){ar(E,[q]),Rn(q,i),Rn(q,o)},onBeforeAppear(q){ar(M,[q]),Rn(q,c),Rn(q,l)},onEnter:Me(!1),onAppear:Me(!0),onLeave(q,me){q._isLeaving=!0;const qe=()=>le(q,me);Rn(q,h),$T(),Rn(q,d),Kd(()=>{q._isLeaving&&(cr(q,h),Rn(q,f),zd(C)||Wd(q,r,y,qe))}),ar(C,[q,qe])},onEnterCancelled(q){re(q,!1),ar(T,[q])},onAppearCancelled(q){re(q,!0),ar(W,[q])},onLeaveCancelled(q){le(q),ar($,[q])}})}function LT(t){if(t==null)return null;if(Pe(t))return[kc(t.enter),kc(t.leave)];{const e=kc(t);return[e,e]}}function kc(t){return B0(t)}function Rn(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[di]||(t[di]=new Set)).add(e)}function cr(t,e){e.split(/\s+/).forEach(r=>r&&t.classList.remove(r));const n=t[di];n&&(n.delete(e),n.size||(t[di]=void 0))}function Kd(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let FT=0;function Wd(t,e,n,r){const s=t._endId=++FT,i=()=>{s===t._endId&&r()};if(n)return setTimeout(i,n);const{type:o,timeout:a,propCount:c}=UT(t,e);if(!o)return r();const l=o+"end";let u=0;const h=()=>{t.removeEventListener(l,d),i()},d=f=>{f.target===t&&++u>=c&&h()};setTimeout(()=>{u<c&&h()},a+1),t.addEventListener(l,d)}function UT(t,e){const n=window.getComputedStyle(t),r=g=>(n[g]||"").split(", "),s=r(`${bn}Delay`),i=r(`${bn}Duration`),o=Gd(s,i),a=r(`${xs}Delay`),c=r(`${xs}Duration`),l=Gd(a,c);let u=null,h=0,d=0;e===bn?o>0&&(u=bn,h=o,d=i.length):e===xs?l>0&&(u=xs,h=l,d=c.length):(h=Math.max(o,l),u=h>0?o>l?bn:xs:null,d=u?u===bn?i.length:c.length:0);const f=u===bn&&/\b(transform|all)(,|$)/.test(r(`${bn}Property`).toString());return{type:u,timeout:h,propCount:d,hasTransform:f}}function Gd(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,r)=>Qd(n)+Qd(t[r])))}function Qd(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function $T(){return document.body.offsetHeight}function BT(t,e,n){const r=t[di];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Yd=Symbol("_vod"),jT=Symbol("_vsh"),qT=Symbol(""),HT=/(^|;)\s*display\s*:/;function zT(t,e,n){const r=t.style,s=Be(n);let i=!1;if(n&&!s){if(e)if(Be(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&Mo(r,a,"")}else for(const o in e)n[o]==null&&Mo(r,o,"");for(const o in n)o==="display"&&(i=!0),Mo(r,o,n[o])}else if(s){if(e!==n){const o=r[qT];o&&(n+=";"+o),r.cssText=n,i=HT.test(n)}}else e&&t.removeAttribute("style");Yd in t&&(t[Yd]=i?r.display:"",t[jT]&&(r.display="none"))}const Jd=/\s*!important$/;function Mo(t,e,n){if(Q(n))n.forEach(r=>Mo(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=KT(t,e);Jd.test(n)?t.setProperty(Nr(r),n.replace(Jd,""),"important"):t[r]=n}}const Xd=["Webkit","Moz","ms"],Dc={};function KT(t,e){const n=Dc[e];if(n)return n;let r=sn(e);if(r!=="filter"&&r in t)return Dc[e]=r;r=Ra(r);for(let s=0;s<Xd.length;s++){const i=Xd[s]+r;if(i in t)return Dc[e]=i}return e}const Zd="http://www.w3.org/1999/xlink";function WT(t,e,n,r,s){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Zd,e.slice(6,e.length)):t.setAttributeNS(Zd,e,n);else{const i=Q0(e);n==null||i&&!mm(n)?t.removeAttribute(e):t.setAttribute(e,i?"":n)}}function GT(t,e,n,r,s,i,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,s,i),t[e]=n??"";return}const a=t.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){const l=a==="OPTION"?t.getAttribute("value")||"":t.value,u=n??"";(l!==u||!("_value"in t))&&(t.value=u),n==null&&t.removeAttribute(e),t._value=n;return}let c=!1;if(n===""||n==null){const l=typeof t[e];l==="boolean"?n=mm(n):n==null&&l==="string"?(n="",c=!0):l==="number"&&(n=0,c=!0)}try{t[e]=n}catch{}c&&t.removeAttribute(e)}function Hr(t,e,n,r){t.addEventListener(e,n,r)}function QT(t,e,n,r){t.removeEventListener(e,n,r)}const ef=Symbol("_vei");function YT(t,e,n,r,s=null){const i=t[ef]||(t[ef]={}),o=i[e];if(r&&o)o.value=r;else{const[a,c]=JT(e);if(r){const l=i[e]=ew(r,s);Hr(t,a,l,c)}else o&&(QT(t,a,o,c),i[e]=void 0)}}const tf=/(?:Once|Passive|Capture)$/;function JT(t){let e;if(tf.test(t)){e={};let r;for(;r=t.match(tf);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Nr(t.slice(2)),e]}let Vc=0;const XT=Promise.resolve(),ZT=()=>Vc||(XT.then(()=>Vc=0),Vc=Date.now());function ew(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;kt(tw(r,n.value),e,5,[r])};return n.value=t,n.attached=ZT(),n}function tw(t,e){if(Q(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const nf=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,nw=(t,e,n,r,s,i,o,a,c)=>{const l=s==="svg";e==="class"?BT(t,r,l):e==="style"?zT(t,n,r):Ia(e)?Eu(e)||YT(t,e,n,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):rw(t,e,r,l))?GT(t,e,r,i,o,a,c):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),WT(t,e,r,l))};function rw(t,e,n,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in t&&nf(e)&&ne(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=t.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return nf(e)&&Be(n)?!1:e in t}const rf=t=>{const e=t.props["onUpdate:modelValue"]||!1;return Q(e)?n=>Oo(e,n):e};function sw(t){t.target.composing=!0}function sf(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Nc=Symbol("_assign"),vo={created(t,{modifiers:{lazy:e,trim:n,number:r}},s){t[Nc]=rf(s);const i=r||s.props&&s.props.type==="number";Hr(t,e?"change":"input",o=>{if(o.target.composing)return;let a=t.value;n&&(a=a.trim()),i&&(a=dl(a)),t[Nc](a)}),n&&Hr(t,"change",()=>{t.value=t.value.trim()}),e||(Hr(t,"compositionstart",sw),Hr(t,"compositionend",sf),Hr(t,"change",sf))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:r,number:s}},i){if(t[Nc]=rf(i),t.composing)return;const o=(s||t.type==="number")&&!/^0\d/.test(t.value)?dl(t.value):t.value,a=e??"";o!==a&&(document.activeElement===t&&t.type!=="range"&&(n||r&&t.value.trim()===a)||(t.value=a))}},iw={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},ow=(t,e)=>{const n=t._withKeys||(t._withKeys={}),r=e.join(".");return n[r]||(n[r]=s=>{if(!("key"in s))return;const i=Nr(s.key);if(e.some(o=>o===i||iw[o]===i))return t(s)})},aw=ze({patchProp:nw},NT);let of;function cw(){return of||(of=mT(aw))}const lw=(...t)=>{const e=cw().createApp(...t),{mount:n}=e;return e.mount=r=>{const s=hw(r);if(!s)return;const i=e._component;!ne(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=n(s,!1,uw(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function uw(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function hw(t){return Be(t)?document.querySelector(t):t}function gg(t){return _m()?(X0(t),!0):!1}function Uu(t){return typeof t=="function"?t():Ve(t)}const dw=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const fw=t=>t!=null,pw=Object.prototype.toString,Xo=t=>pw.call(t)==="[object Object]",Lo=()=>{};function mw(t){return t||Va()}function gw(t,e){mw(e)&&tr(t,e)}function Ws(t){var e;const n=Uu(t);return(e=n==null?void 0:n.$el)!=null?e:n}const _g=dw?window:void 0;function Nt(...t){let e,n,r,s;if(typeof t[0]=="string"||Array.isArray(t[0])?([n,r,s]=t,e=_g):[e,n,r,s]=t,!e)return Lo;Array.isArray(n)||(n=[n]),Array.isArray(r)||(r=[r]);const i=[],o=()=>{i.forEach(u=>u()),i.length=0},a=(u,h,d,f)=>(u.addEventListener(h,d,f),()=>u.removeEventListener(h,d,f)),c=lt(()=>[Ws(e),Uu(s)],([u,h])=>{if(o(),!u)return;const d=Xo(h)?{...h}:h;i.push(...n.flatMap(f=>r.map(g=>a(u,f,g,d))))},{immediate:!0,flush:"post"}),l=()=>{c(),o()};return gg(l),l}function _w(){const t=Ee(!1),e=Va();return e&&Dt(()=>{t.value=!0},e),t}function yw(t){const e=_w();return De(()=>(e.value,!!t()))}function vw(t,e,n={}){const{root:r,rootMargin:s="0px",threshold:i=.1,window:o=_g,immediate:a=!0}=n,c=yw(()=>o&&"IntersectionObserver"in o),l=De(()=>{const g=Uu(t);return(Array.isArray(g)?g:[g]).map(Ws).filter(fw)});let u=Lo;const h=Ee(a),d=c.value?lt(()=>[l.value,Ws(r),h.value],([g,v])=>{if(u(),!h.value||!g.length)return;const y=new IntersectionObserver(e,{root:Ws(v),rootMargin:s,threshold:i});g.forEach(E=>E&&y.observe(E)),u=()=>{y.disconnect(),u=Lo}},{immediate:a,flush:"post"}):Lo,f=()=>{u(),d(),h.value=!1};return gg(f),{isSupported:c,isActive:h,pause(){u(),h.value=!1},resume(){h.value=!0},stop:f}}const yg=1/60*1e3,Ew=typeof performance<"u"?()=>performance.now():()=>Date.now(),vg=typeof window<"u"?t=>window.requestAnimationFrame(t):t=>setTimeout(()=>t(Ew()),yg);function Tw(t){let e=[],n=[],r=0,s=!1,i=!1;const o=new WeakSet,a={schedule:(c,l=!1,u=!1)=>{const h=u&&s,d=h?e:n;return l&&o.add(c),d.indexOf(c)===-1&&(d.push(c),h&&s&&(r=e.length)),c},cancel:c=>{const l=n.indexOf(c);l!==-1&&n.splice(l,1),o.delete(c)},process:c=>{if(s){i=!0;return}if(s=!0,[e,n]=[n,e],n.length=0,r=e.length,r)for(let l=0;l<r;l++){const u=e[l];u(c),o.has(u)&&(a.schedule(u),t())}s=!1,i&&(i=!1,a.process(c))}};return a}const ww=40;let Sl=!0,fi=!1,Pl=!1;const es={delta:0,timestamp:0},Mi=["read","update","preRender","render","postRender"],La=Mi.reduce((t,e)=>(t[e]=Tw(()=>fi=!0),t),{}),Cl=Mi.reduce((t,e)=>{const n=La[e];return t[e]=(r,s=!1,i=!1)=>(fi||bw(),n.schedule(r,s,i)),t},{}),Iw=Mi.reduce((t,e)=>(t[e]=La[e].cancel,t),{});Mi.reduce((t,e)=>(t[e]=()=>La[e].process(es),t),{});const Aw=t=>La[t].process(es),Eg=t=>{fi=!1,es.delta=Sl?yg:Math.max(Math.min(t-es.timestamp,ww),1),es.timestamp=t,Pl=!0,Mi.forEach(Aw),Pl=!1,fi&&(Sl=!1,vg(Eg))},bw=()=>{fi=!0,Sl=!0,Pl||vg(Eg)},Tg=()=>es;function wg(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}var af=function(){};const xl=(t,e,n)=>Math.min(Math.max(n,t),e),Mc=.001,Rw=.01,Sw=10,Pw=.05,Cw=1;function xw({duration:t=800,bounce:e=.25,velocity:n=0,mass:r=1}){let s,i,o=1-e;o=xl(Pw,Cw,o),t=xl(Rw,Sw,t/1e3),o<1?(s=l=>{const u=l*o,h=u*t,d=u-n,f=Ol(l,o),g=Math.exp(-h);return Mc-d/f*g},i=l=>{const h=l*o*t,d=h*n+n,f=Math.pow(o,2)*Math.pow(l,2)*t,g=Math.exp(-h),v=Ol(Math.pow(l,2),o);return(-s(l)+Mc>0?-1:1)*((d-f)*g)/v}):(s=l=>{const u=Math.exp(-l*t),h=(l-n)*t+1;return-Mc+u*h},i=l=>{const u=Math.exp(-l*t),h=(n-l)*(t*t);return u*h});const a=5/t,c=kw(s,i,a);if(t=t*1e3,isNaN(c))return{stiffness:100,damping:10,duration:t};{const l=Math.pow(c,2)*r;return{stiffness:l,damping:o*2*Math.sqrt(r*l),duration:t}}}const Ow=12;function kw(t,e,n){let r=n;for(let s=1;s<Ow;s++)r=r-t(r)/e(r);return r}function Ol(t,e){return t*Math.sqrt(1-e*e)}const Dw=["duration","bounce"],Vw=["stiffness","damping","mass"];function cf(t,e){return e.some(n=>t[n]!==void 0)}function Nw(t){let e=Object.assign({velocity:0,stiffness:100,damping:10,mass:1,isResolvedFromDuration:!1},t);if(!cf(t,Vw)&&cf(t,Dw)){const n=xw(t);e=Object.assign(Object.assign(Object.assign({},e),n),{velocity:0,mass:1}),e.isResolvedFromDuration=!0}return e}function $u(t){var{from:e=0,to:n=1,restSpeed:r=2,restDelta:s}=t,i=wg(t,["from","to","restSpeed","restDelta"]);const o={done:!1,value:e};let{stiffness:a,damping:c,mass:l,velocity:u,duration:h,isResolvedFromDuration:d}=Nw(i),f=lf,g=lf;function v(){const y=u?-(u/1e3):0,E=n-e,I=c/(2*Math.sqrt(a*l)),T=Math.sqrt(a/l)/1e3;if(s===void 0&&(s=Math.min(Math.abs(n-e)/100,.4)),I<1){const C=Ol(T,I);f=$=>{const M=Math.exp(-I*T*$);return n-M*((y+I*T*E)/C*Math.sin(C*$)+E*Math.cos(C*$))},g=$=>{const M=Math.exp(-I*T*$);return I*T*M*(Math.sin(C*$)*(y+I*T*E)/C+E*Math.cos(C*$))-M*(Math.cos(C*$)*(y+I*T*E)-C*E*Math.sin(C*$))}}else if(I===1)f=C=>n-Math.exp(-T*C)*(E+(y+T*E)*C);else{const C=T*Math.sqrt(I*I-1);f=$=>{const M=Math.exp(-I*T*$),ie=Math.min(C*$,300);return n-M*((y+I*T*E)*Math.sinh(ie)+C*E*Math.cosh(ie))/C}}}return v(),{next:y=>{const E=f(y);if(d)o.done=y>=h;else{const I=g(y)*1e3,T=Math.abs(I)<=r,C=Math.abs(n-E)<=s;o.done=T&&C}return o.value=o.done?n:E,o},flipTarget:()=>{u=-u,[e,n]=[n,e],v()}}}$u.needsInterpolation=(t,e)=>typeof t=="string"||typeof e=="string";const lf=t=>0,Ig=(t,e,n)=>{const r=e-t;return r===0?1:(n-t)/r},Bu=(t,e,n)=>-n*t+n*e+t,Ag=(t,e)=>n=>Math.max(Math.min(n,e),t),Gs=t=>t%1?Number(t.toFixed(5)):t,pi=/(-)?([\d]*\.?[\d])+/g,kl=/(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,Mw=/^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;function Li(t){return typeof t=="string"}const Fi={test:t=>typeof t=="number",parse:parseFloat,transform:t=>t},Qs=Object.assign(Object.assign({},Fi),{transform:Ag(0,1)}),Eo=Object.assign(Object.assign({},Fi),{default:1}),ju=t=>({test:e=>Li(e)&&e.endsWith(t)&&e.split(" ").length===1,parse:parseFloat,transform:e=>`${e}${t}`}),lr=ju("deg"),Ys=ju("%"),se=ju("px"),uf=Object.assign(Object.assign({},Ys),{parse:t=>Ys.parse(t)/100,transform:t=>Ys.transform(t*100)}),qu=(t,e)=>n=>!!(Li(n)&&Mw.test(n)&&n.startsWith(t)||e&&Object.prototype.hasOwnProperty.call(n,e)),bg=(t,e,n)=>r=>{if(!Li(r))return r;const[s,i,o,a]=r.match(pi);return{[t]:parseFloat(s),[e]:parseFloat(i),[n]:parseFloat(o),alpha:a!==void 0?parseFloat(a):1}},gr={test:qu("hsl","hue"),parse:bg("hue","saturation","lightness"),transform:({hue:t,saturation:e,lightness:n,alpha:r=1})=>"hsla("+Math.round(t)+", "+Ys.transform(Gs(e))+", "+Ys.transform(Gs(n))+", "+Gs(Qs.transform(r))+")"},Lw=Ag(0,255),Lc=Object.assign(Object.assign({},Fi),{transform:t=>Math.round(Lw(t))}),Ln={test:qu("rgb","red"),parse:bg("red","green","blue"),transform:({red:t,green:e,blue:n,alpha:r=1})=>"rgba("+Lc.transform(t)+", "+Lc.transform(e)+", "+Lc.transform(n)+", "+Gs(Qs.transform(r))+")"};function Fw(t){let e="",n="",r="",s="";return t.length>5?(e=t.substr(1,2),n=t.substr(3,2),r=t.substr(5,2),s=t.substr(7,2)):(e=t.substr(1,1),n=t.substr(2,1),r=t.substr(3,1),s=t.substr(4,1),e+=e,n+=n,r+=r,s+=s),{red:parseInt(e,16),green:parseInt(n,16),blue:parseInt(r,16),alpha:s?parseInt(s,16)/255:1}}const Dl={test:qu("#"),parse:Fw,transform:Ln.transform},vt={test:t=>Ln.test(t)||Dl.test(t)||gr.test(t),parse:t=>Ln.test(t)?Ln.parse(t):gr.test(t)?gr.parse(t):Dl.parse(t),transform:t=>Li(t)?t:t.hasOwnProperty("red")?Ln.transform(t):gr.transform(t)},Rg="${c}",Sg="${n}";function Uw(t){var e,n,r,s;return isNaN(t)&&Li(t)&&((n=(e=t.match(pi))===null||e===void 0?void 0:e.length)!==null&&n!==void 0?n:0)+((s=(r=t.match(kl))===null||r===void 0?void 0:r.length)!==null&&s!==void 0?s:0)>0}function Pg(t){typeof t=="number"&&(t=`${t}`);const e=[];let n=0;const r=t.match(kl);r&&(n=r.length,t=t.replace(kl,Rg),e.push(...r.map(vt.parse)));const s=t.match(pi);return s&&(t=t.replace(pi,Sg),e.push(...s.map(Fi.parse))),{values:e,numColors:n,tokenised:t}}function Cg(t){return Pg(t).values}function xg(t){const{values:e,numColors:n,tokenised:r}=Pg(t),s=e.length;return i=>{let o=r;for(let a=0;a<s;a++)o=o.replace(a<n?Rg:Sg,a<n?vt.transform(i[a]):Gs(i[a]));return o}}const $w=t=>typeof t=="number"?0:t;function Bw(t){const e=Cg(t);return xg(t)(e.map($w))}const Ui={test:Uw,parse:Cg,createTransformer:xg,getAnimatableNone:Bw},jw=new Set(["brightness","contrast","saturate","opacity"]);function qw(t){let[e,n]=t.slice(0,-1).split("(");if(e==="drop-shadow")return t;const[r]=n.match(pi)||[];if(!r)return t;const s=n.replace(r,"");let i=jw.has(e)?1:0;return r!==n&&(i*=100),e+"("+i+s+")"}const Hw=/([a-z-]*)\(.*?\)/g,Vl=Object.assign(Object.assign({},Ui),{getAnimatableNone:t=>{const e=t.match(Hw);return e?e.map(qw).join(" "):t}});function Fc(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*(2/3-n)*6:t}function hf({hue:t,saturation:e,lightness:n,alpha:r}){t/=360,e/=100,n/=100;let s=0,i=0,o=0;if(!e)s=i=o=n;else{const a=n<.5?n*(1+e):n+e-n*e,c=2*n-a;s=Fc(c,a,t+1/3),i=Fc(c,a,t),o=Fc(c,a,t-1/3)}return{red:Math.round(s*255),green:Math.round(i*255),blue:Math.round(o*255),alpha:r}}const zw=(t,e,n)=>{const r=t*t,s=e*e;return Math.sqrt(Math.max(0,n*(s-r)+r))},Kw=[Dl,Ln,gr],df=t=>Kw.find(e=>e.test(t)),Og=(t,e)=>{let n=df(t),r=df(e),s=n.parse(t),i=r.parse(e);n===gr&&(s=hf(s),n=Ln),r===gr&&(i=hf(i),r=Ln);const o=Object.assign({},s);return a=>{for(const c in o)c!=="alpha"&&(o[c]=zw(s[c],i[c],a));return o.alpha=Bu(s.alpha,i.alpha,a),n.transform(o)}},Ww=t=>typeof t=="number",Gw=(t,e)=>n=>e(t(n)),kg=(...t)=>t.reduce(Gw);function Dg(t,e){return Ww(t)?n=>Bu(t,e,n):vt.test(t)?Og(t,e):Ng(t,e)}const Vg=(t,e)=>{const n=[...t],r=n.length,s=t.map((i,o)=>Dg(i,e[o]));return i=>{for(let o=0;o<r;o++)n[o]=s[o](i);return n}},Qw=(t,e)=>{const n=Object.assign(Object.assign({},t),e),r={};for(const s in n)t[s]!==void 0&&e[s]!==void 0&&(r[s]=Dg(t[s],e[s]));return s=>{for(const i in r)n[i]=r[i](s);return n}};function ff(t){const e=Ui.parse(t),n=e.length;let r=0,s=0,i=0;for(let o=0;o<n;o++)r||typeof e[o]=="number"?r++:e[o].hue!==void 0?i++:s++;return{parsed:e,numNumbers:r,numRGB:s,numHSL:i}}const Ng=(t,e)=>{const n=Ui.createTransformer(e),r=ff(t),s=ff(e);return r.numHSL===s.numHSL&&r.numRGB===s.numRGB&&r.numNumbers>=s.numNumbers?kg(Vg(r.parsed,s.parsed),n):o=>`${o>0?e:t}`},Yw=(t,e)=>n=>Bu(t,e,n);function Jw(t){if(typeof t=="number")return Yw;if(typeof t=="string")return vt.test(t)?Og:Ng;if(Array.isArray(t))return Vg;if(typeof t=="object")return Qw}function Xw(t,e,n){const r=[],s=n||Jw(t[0]),i=t.length-1;for(let o=0;o<i;o++){let a=s(t[o],t[o+1]);if(e){const c=Array.isArray(e)?e[o]:e;a=kg(c,a)}r.push(a)}return r}function Zw([t,e],[n]){return r=>n(Ig(t,e,r))}function eI(t,e){const n=t.length,r=n-1;return s=>{let i=0,o=!1;if(s<=t[0]?o=!0:s>=t[r]&&(i=r-1,o=!0),!o){let c=1;for(;c<n&&!(t[c]>s||c===r);c++);i=c-1}const a=Ig(t[i],t[i+1],s);return e[i](a)}}function Mg(t,e,{clamp:n=!0,ease:r,mixer:s}={}){const i=t.length;af(i===e.length),af(!r||!Array.isArray(r)||r.length===i-1),t[0]>t[i-1]&&(t=[].concat(t),e=[].concat(e),t.reverse(),e.reverse());const o=Xw(e,r,s),a=i===2?Zw(t,o):eI(t,o);return n?c=>a(xl(t[0],t[i-1],c)):a}const Fa=t=>e=>1-t(1-e),Hu=t=>e=>e<=.5?t(2*e)/2:(2-t(2*(1-e)))/2,tI=t=>e=>Math.pow(e,t),Lg=t=>e=>e*e*((t+1)*e-t),nI=t=>{const e=Lg(t);return n=>(n*=2)<1?.5*e(n):.5*(2-Math.pow(2,-10*(n-1)))},Fg=1.525,rI=4/11,sI=8/11,iI=9/10,Ug=t=>t,zu=tI(2),oI=Fa(zu),$g=Hu(zu),Bg=t=>1-Math.sin(Math.acos(t)),jg=Fa(Bg),aI=Hu(jg),Ku=Lg(Fg),cI=Fa(Ku),lI=Hu(Ku),uI=nI(Fg),hI=4356/361,dI=35442/1805,fI=16061/1805,Zo=t=>{if(t===1||t===0)return t;const e=t*t;return t<rI?7.5625*e:t<sI?9.075*e-9.9*t+3.4:t<iI?hI*e-dI*t+fI:10.8*t*t-20.52*t+10.72},pI=Fa(Zo),mI=t=>t<.5?.5*(1-Zo(1-t*2)):.5*Zo(t*2-1)+.5;function gI(t,e){return t.map(()=>e||$g).splice(0,t.length-1)}function _I(t){const e=t.length;return t.map((n,r)=>r!==0?r/(e-1):0)}function yI(t,e){return t.map(n=>n*e)}function Fo({from:t=0,to:e=1,ease:n,offset:r,duration:s=300}){const i={done:!1,value:t},o=Array.isArray(e)?e:[t,e],a=yI(r&&r.length===o.length?r:_I(o),s);function c(){return Mg(a,o,{ease:Array.isArray(n)?n:gI(o,n)})}let l=c();return{next:u=>(i.value=l(u),i.done=u>=s,i),flipTarget:()=>{o.reverse(),l=c()}}}function vI({velocity:t=0,from:e=0,power:n=.8,timeConstant:r=350,restDelta:s=.5,modifyTarget:i}){const o={done:!1,value:e};let a=n*t;const c=e+a,l=i===void 0?c:i(c);return l!==c&&(a=l-e),{next:u=>{const h=-a*Math.exp(-u/r);return o.done=!(h>s||h<-s),o.value=o.done?l:l+h,o},flipTarget:()=>{}}}const pf={keyframes:Fo,spring:$u,decay:vI};function EI(t){if(Array.isArray(t.to))return Fo;if(pf[t.type])return pf[t.type];const e=new Set(Object.keys(t));return e.has("ease")||e.has("duration")&&!e.has("dampingRatio")?Fo:e.has("dampingRatio")||e.has("stiffness")||e.has("mass")||e.has("damping")||e.has("restSpeed")||e.has("restDelta")?$u:Fo}function qg(t,e,n=0){return t-e-n}function TI(t,e,n=0,r=!0){return r?qg(e+-t,e,n):e-(t-e)+n}function wI(t,e,n,r){return r?t>=e+n:t<=-n}const II=t=>{const e=({delta:n})=>t(n);return{start:()=>Cl.update(e,!0),stop:()=>Iw.update(e)}};function Hg(t){var e,n,{from:r,autoplay:s=!0,driver:i=II,elapsed:o=0,repeat:a=0,repeatType:c="loop",repeatDelay:l=0,onPlay:u,onStop:h,onComplete:d,onRepeat:f,onUpdate:g}=t,v=wg(t,["from","autoplay","driver","elapsed","repeat","repeatType","repeatDelay","onPlay","onStop","onComplete","onRepeat","onUpdate"]);let{to:y}=v,E,I=0,T=v.duration,C,$=!1,M=!0,ie;const W=EI(v);!((n=(e=W).needsInterpolation)===null||n===void 0)&&n.call(e,r,y)&&(ie=Mg([0,100],[r,y],{clamp:!1}),r=0,y=100);const re=W(Object.assign(Object.assign({},v),{from:r,to:y}));function le(){I++,c==="reverse"?(M=I%2===0,o=TI(o,T,l,M)):(o=qg(o,T,l),c==="mirror"&&re.flipTarget()),$=!1,f&&f()}function Me(){E.stop(),d&&d()}function q(qe){if(M||(qe=-qe),o+=qe,!$){const Pt=re.next(Math.max(0,o));C=Pt.value,ie&&(C=ie(C)),$=M?Pt.done:o<=0}g==null||g(C),$&&(I===0&&(T??(T=o)),I<a?wI(o,T,l,M)&&le():Me())}function me(){u==null||u(),E=i(q),E.start()}return s&&me(),{stop:()=>{h==null||h(),E.stop()}}}function zg(t,e){return e?t*(1e3/e):0}function AI({from:t=0,velocity:e=0,min:n,max:r,power:s=.8,timeConstant:i=750,bounceStiffness:o=500,bounceDamping:a=10,restDelta:c=1,modifyTarget:l,driver:u,onUpdate:h,onComplete:d,onStop:f}){let g;function v(T){return n!==void 0&&T<n||r!==void 0&&T>r}function y(T){return n===void 0?r:r===void 0||Math.abs(n-T)<Math.abs(r-T)?n:r}function E(T){g==null||g.stop(),g=Hg(Object.assign(Object.assign({},T),{driver:u,onUpdate:C=>{var $;h==null||h(C),($=T.onUpdate)===null||$===void 0||$.call(T,C)},onComplete:d,onStop:f}))}function I(T){E(Object.assign({type:"spring",stiffness:o,damping:a,restDelta:c},T))}if(v(t))I({from:t,velocity:e,to:y(t)});else{let T=s*e+t;typeof l<"u"&&(T=l(T));const C=y(T),$=C===n?-1:1;let M,ie;const W=re=>{M=ie,ie=re,e=zg(re-M,Tg().delta),($===1&&re>C||$===-1&&re<C)&&I({from:re,to:C,velocity:e})};E({type:"decay",from:t,velocity:e,timeConstant:i,power:s,restDelta:c,modifyTarget:l,onUpdate:v(T)?W:void 0})}return{stop:()=>g==null?void 0:g.stop()}}const Kg=(t,e)=>1-3*e+3*t,Wg=(t,e)=>3*e-6*t,Gg=t=>3*t,ea=(t,e,n)=>((Kg(e,n)*t+Wg(e,n))*t+Gg(e))*t,Qg=(t,e,n)=>3*Kg(e,n)*t*t+2*Wg(e,n)*t+Gg(e),bI=1e-7,RI=10;function SI(t,e,n,r,s){let i,o,a=0;do o=e+(n-e)/2,i=ea(o,r,s)-t,i>0?n=o:e=o;while(Math.abs(i)>bI&&++a<RI);return o}const PI=8,CI=.001;function xI(t,e,n,r){for(let s=0;s<PI;++s){const i=Qg(e,n,r);if(i===0)return e;const o=ea(e,n,r)-t;e-=o/i}return e}const Uo=11,To=1/(Uo-1);function OI(t,e,n,r){if(t===e&&n===r)return Ug;const s=new Float32Array(Uo);for(let o=0;o<Uo;++o)s[o]=ea(o*To,t,n);function i(o){let a=0,c=1;const l=Uo-1;for(;c!==l&&s[c]<=o;++c)a+=To;--c;const u=(o-s[c])/(s[c+1]-s[c]),h=a+u*To,d=Qg(h,t,n);return d>=CI?xI(o,h,t,n):d===0?h:SI(o,a,a+To,t,n)}return o=>o===0||o===1?o:ea(i(o),e,r)}const Uc={};var kI=Object.defineProperty,DI=(t,e,n)=>e in t?kI(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,VI=(t,e,n)=>(DI(t,typeof e!="symbol"?e+"":e,n),n);class NI{constructor(){VI(this,"subscriptions",new Set)}add(e){return this.subscriptions.add(e),()=>this.subscriptions.delete(e)}notify(e,n,r){if(this.subscriptions.size)for(const s of this.subscriptions)s(e,n,r)}clear(){this.subscriptions.clear()}}var MI=Object.defineProperty,LI=(t,e,n)=>e in t?MI(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,Kt=(t,e,n)=>(LI(t,typeof e!="symbol"?e+"":e,n),n);function mf(t){return!isNaN(parseFloat(t))}class FI{constructor(e){Kt(this,"current"),Kt(this,"prev"),Kt(this,"timeDelta",0),Kt(this,"lastUpdated",0),Kt(this,"updateSubscribers",new NI),Kt(this,"stopAnimation"),Kt(this,"canTrackVelocity",!1),Kt(this,"updateAndNotify",n=>{this.prev=this.current,this.current=n;const{delta:r,timestamp:s}=Tg();this.lastUpdated!==s&&(this.timeDelta=r,this.lastUpdated=s),Cl.postRender(this.scheduleVelocityCheck),this.updateSubscribers.notify(this.current)}),Kt(this,"scheduleVelocityCheck",()=>Cl.postRender(this.velocityCheck)),Kt(this,"velocityCheck",({timestamp:n})=>{this.canTrackVelocity||(this.canTrackVelocity=mf(this.current)),n!==this.lastUpdated&&(this.prev=this.current)}),this.prev=this.current=e,this.canTrackVelocity=mf(this.current)}onChange(e){return this.updateSubscribers.add(e)}clearListeners(){this.updateSubscribers.clear()}set(e){this.updateAndNotify(e)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){return this.canTrackVelocity?zg(parseFloat(this.current)-parseFloat(this.prev),this.timeDelta):0}start(e){return this.stop(),new Promise(n=>{const{stop:r}=e(n);this.stopAnimation=r}).then(()=>this.clearAnimation())}stop(){this.stopAnimation&&this.stopAnimation(),this.clearAnimation()}isAnimating(){return!!this.stopAnimation}clearAnimation(){this.stopAnimation=null}destroy(){this.updateSubscribers.clear(),this.stop()}}function UI(t){return new FI(t)}const{isArray:$I}=Array;function BI(){const t=Ee({}),e=r=>{const s=i=>{t.value[i]&&(t.value[i].stop(),t.value[i].destroy(),delete t.value[i])};r?$I(r)?r.forEach(s):s(r):Object.keys(t.value).forEach(s)},n=(r,s,i)=>{if(t.value[r])return t.value[r];const o=UI(s);return o.onChange(a=>i[r]=a),t.value[r]=o,o};return gw(e),{motionValues:t,get:n,stop:e}}function jI(t){return Array.isArray(t)}function ur(){return{type:"spring",stiffness:500,damping:25,restDelta:.5,restSpeed:10}}function $c(t){return{type:"spring",stiffness:550,damping:t===0?2*Math.sqrt(550):30,restDelta:.01,restSpeed:10}}function qI(t){return{type:"spring",stiffness:550,damping:t===0?100:30,restDelta:.01,restSpeed:10}}function Bc(){return{type:"keyframes",ease:"linear",duration:300}}function HI(t){return{type:"keyframes",duration:800,values:t}}const gf={default:qI,x:ur,y:ur,z:ur,rotate:ur,rotateX:ur,rotateY:ur,rotateZ:ur,scaleX:$c,scaleY:$c,scale:$c,backgroundColor:Bc,color:Bc,opacity:Bc};function Yg(t,e){let n;return jI(e)?n=HI:n=gf[t]||gf.default,{to:e,...n(e)}}const _f={...Fi,transform:Math.round},Jg={color:vt,backgroundColor:vt,outlineColor:vt,fill:vt,stroke:vt,borderColor:vt,borderTopColor:vt,borderRightColor:vt,borderBottomColor:vt,borderLeftColor:vt,borderWidth:se,borderTopWidth:se,borderRightWidth:se,borderBottomWidth:se,borderLeftWidth:se,borderRadius:se,radius:se,borderTopLeftRadius:se,borderTopRightRadius:se,borderBottomRightRadius:se,borderBottomLeftRadius:se,width:se,maxWidth:se,height:se,maxHeight:se,size:se,top:se,right:se,bottom:se,left:se,padding:se,paddingTop:se,paddingRight:se,paddingBottom:se,paddingLeft:se,margin:se,marginTop:se,marginRight:se,marginBottom:se,marginLeft:se,rotate:lr,rotateX:lr,rotateY:lr,rotateZ:lr,scale:Eo,scaleX:Eo,scaleY:Eo,scaleZ:Eo,skew:lr,skewX:lr,skewY:lr,distance:se,translateX:se,translateY:se,translateZ:se,x:se,y:se,z:se,perspective:se,transformPerspective:se,opacity:Qs,originX:uf,originY:uf,originZ:se,zIndex:_f,filter:Vl,WebkitFilter:Vl,fillOpacity:Qs,strokeOpacity:Qs,numOctaves:_f},Wu=t=>Jg[t];function Xg(t,e){return e&&typeof t=="number"&&e.transform?e.transform(t):t}function zI(t,e){let n=Wu(t);return n!==Vl&&(n=Ui),n.getAnimatableNone?n.getAnimatableNone(e):void 0}const KI={linear:Ug,easeIn:zu,easeInOut:$g,easeOut:oI,circIn:Bg,circInOut:aI,circOut:jg,backIn:Ku,backInOut:lI,backOut:cI,anticipate:uI,bounceIn:pI,bounceInOut:mI,bounceOut:Zo};function yf(t){if(Array.isArray(t)){const[e,n,r,s]=t;return OI(e,n,r,s)}else if(typeof t=="string")return KI[t];return t}function WI(t){return Array.isArray(t)&&typeof t[0]!="number"}function vf(t,e){return t==="zIndex"?!1:!!(typeof e=="number"||Array.isArray(e)||typeof e=="string"&&Ui.test(e)&&!e.startsWith("url("))}function GI(t){return Array.isArray(t.to)&&t.to[0]===null&&(t.to=[...t.to],t.to[0]=t.from),t}function QI({ease:t,times:e,delay:n,...r}){const s={...r};return e&&(s.offset=e),t&&(s.ease=WI(t)?t.map(yf):yf(t)),n&&(s.elapsed=-n),s}function YI(t,e,n){return Array.isArray(e.to)&&(t.duration||(t.duration=800)),GI(e),JI(t)||(t={...t,...Yg(n,e.to)}),{...e,...QI(t)}}function JI({delay:t,repeat:e,repeatType:n,repeatDelay:r,from:s,...i}){return!!Object.keys(i).length}function XI(t,e){return t[e]||t.default||t}function ZI(t,e,n,r,s){const i=XI(r,t);let o=i.from===null||i.from===void 0?e.get():i.from;const a=vf(t,n);o==="none"&&a&&typeof n=="string"&&(o=zI(t,n));const c=vf(t,o);function l(h){const d={from:o,to:n,velocity:r.velocity?r.velocity:e.getVelocity(),onUpdate:f=>e.set(f)};return i.type==="inertia"||i.type==="decay"?AI({...d,...i}):Hg({...YI(i,d,t),onUpdate:f=>{d.onUpdate(f),i.onUpdate&&i.onUpdate(f)},onComplete:()=>{r.onComplete&&r.onComplete(),s&&s(),h&&h()}})}function u(h){return e.set(n),r.onComplete&&r.onComplete(),s&&s(),h&&h(),{stop:()=>{}}}return!c||!a||i.type===!1?u:l}function eA(){const{motionValues:t,stop:e,get:n}=BI();return{motionValues:t,stop:e,push:(s,i,o,a={},c)=>{const l=o[s],u=n(s,l,o);if(a&&a.immediate){u.set(i);return}const h=ZI(s,u,i,a,c);u.start(h)}}}function tA(t,e={},{motionValues:n,push:r,stop:s}=eA()){const i=Ve(e),o=Ee(!1);lt(n,h=>{o.value=Object.values(h).filter(d=>d.isAnimating()).length>0},{immediate:!0,deep:!0});const a=h=>{if(!i||!i[h])throw new Error(`The variant ${h} does not exist.`);return i[h]},c=h=>(typeof h=="string"&&(h=a(h)),Promise.all(Object.entries(h).map(([d,f])=>{if(d!=="transition")return new Promise(g=>r(d,f,t,h.transition||Yg(d,h[d]),g))}).filter(Boolean)));return{isAnimating:o,apply:c,set:h=>{const d=Xo(h)?h:a(h);Object.entries(d).forEach(([f,g])=>{f!=="transition"&&r(f,g,t,{immediate:!0})})},leave:async h=>{let d;if(i&&(i.leave&&(d=i.leave),!i.leave&&i.initial&&(d=i.initial)),!d){h();return}await c(d),h()},stop:s}}const Gu=typeof window<"u",nA=()=>Gu&&window.onpointerdown===null,rA=()=>Gu&&window.ontouchstart===null,sA=()=>Gu&&window.onmousedown===null;function iA({target:t,state:e,variants:n,apply:r}){const s=Ve(n),i=Ee(!1),o=Ee(!1),a=Ee(!1),c=De(()=>{let u=[];return s&&(s.hovered&&(u=[...u,...Object.keys(s.hovered)]),s.tapped&&(u=[...u,...Object.keys(s.tapped)]),s.focused&&(u=[...u,...Object.keys(s.focused)])),u}),l=De(()=>{const u={};Object.assign(u,e.value),i.value&&s.hovered&&Object.assign(u,s.hovered),o.value&&s.tapped&&Object.assign(u,s.tapped),a.value&&s.focused&&Object.assign(u,s.focused);for(const h in u)c.value.includes(h)||delete u[h];return u});s.hovered&&(Nt(t,"mouseenter",()=>i.value=!0),Nt(t,"mouseleave",()=>{i.value=!1,o.value=!1}),Nt(t,"mouseout",()=>{i.value=!1,o.value=!1})),s.tapped&&(sA()&&(Nt(t,"mousedown",()=>o.value=!0),Nt(t,"mouseup",()=>o.value=!1)),nA()&&(Nt(t,"pointerdown",()=>o.value=!0),Nt(t,"pointerup",()=>o.value=!1)),rA()&&(Nt(t,"touchstart",()=>o.value=!0),Nt(t,"touchend",()=>o.value=!1))),s.focused&&(Nt(t,"focus",()=>a.value=!0),Nt(t,"blur",()=>a.value=!1)),lt(l,r)}function oA({set:t,target:e,variants:n,variant:r}){const s=Ve(n);lt(()=>e,()=>{s&&(s.initial&&t("initial"),s.enter&&(r.value="enter"))},{immediate:!0,flush:"pre"})}function aA({state:t,apply:e}){lt(t,n=>{n&&e(n)},{immediate:!0})}function Zg({target:t,variants:e,variant:n}){const r=Ve(e);r&&(r.visible||r.visibleOnce)&&vw(t,([{isIntersecting:s}])=>{r.visible?s?n.value="visible":n.value="initial":r.visibleOnce&&(s&&n.value!=="visibleOnce"?n.value="visibleOnce":n.value||(n.value="initial"))})}function cA(t,e={syncVariants:!0,lifeCycleHooks:!0,visibilityHooks:!0,eventListeners:!0}){e.lifeCycleHooks&&oA(t),e.syncVariants&&aA(t),e.visibilityHooks&&Zg(t),e.eventListeners&&iA(t)}function e_(t={}){const e=er({...t}),n=Ee({});return lt(e,()=>{const r={};for(const[s,i]of Object.entries(e)){const o=Wu(s),a=Xg(i,o);r[s]=a}n.value=r},{immediate:!0,deep:!0}),{state:e,style:n}}function Qu(t,e){lt(()=>Ws(t),n=>{n&&e(n)},{immediate:!0})}const lA={x:"translateX",y:"translateY",z:"translateZ"};function t_(t={},e=!0){const n=er({...t}),r=Ee("");return lt(n,s=>{let i="",o=!1;if(e&&(s.x||s.y||s.z)){const a=[s.x||0,s.y||0,s.z||0].map(se.transform).join(",");i+=`translate3d(${a}) `,o=!0}for(const[a,c]of Object.entries(s)){if(e&&(a==="x"||a==="y"||a==="z"))continue;const l=Wu(a),u=Xg(c,l);i+=`${lA[a]||a}(${u}) `}e&&!o&&(i+="translateZ(0px) "),r.value=i.trim()},{immediate:!0,deep:!0}),{state:n,transform:r}}const uA=["","X","Y","Z"],hA=["perspective","translate","scale","rotate","skew"],n_=["transformPerspective","x","y","z"];hA.forEach(t=>{uA.forEach(e=>{const n=t+e;n_.push(n)})});const dA=new Set(n_);function Yu(t){return dA.has(t)}const fA=new Set(["originX","originY","originZ"]);function r_(t){return fA.has(t)}function pA(t){const e={},n={};return Object.entries(t).forEach(([r,s])=>{Yu(r)||r_(r)?e[r]=s:n[r]=s}),{transform:e,style:n}}function s_(t){const{transform:e,style:n}=pA(t),{transform:r}=t_(e),{style:s}=e_(n);return r.value&&(s.value.transform=r.value),s.value}function mA(t,e){let n,r;const{state:s,style:i}=e_();return Qu(t,o=>{r=o;for(const a of Object.keys(Jg))o.style[a]===null||o.style[a]===""||Yu(a)||r_(a)||(s[a]=o.style[a]);n&&Object.entries(n).forEach(([a,c])=>o.style[a]=c),e&&e(s)}),lt(i,o=>{if(!r){n=o;return}for(const a in o)r.style[a]=o[a]},{immediate:!0}),{style:s}}function gA(t){const e=t.trim().split(/\) |\)/);if(e.length===1)return{};const n=r=>r.endsWith("px")||r.endsWith("deg")?parseFloat(r):isNaN(Number(r))?Number(r):r;return e.reduce((r,s)=>{if(!s)return r;const[i,o]=s.split("("),c=o.split(",").map(u=>n(u.endsWith(")")?u.replace(")",""):u.trim())),l=c.length===1?c[0]:c;return{...r,[i]:l}},{})}function _A(t,e){Object.entries(gA(e)).forEach(([n,r])=>{const s=["x","y","z"];if(n==="translate3d"){if(r===0){s.forEach(i=>t[i]=0);return}r.forEach((i,o)=>t[s[o]]=i);return}if(r=parseFloat(r),n==="translateX"){t.x=r;return}if(n==="translateY"){t.y=r;return}if(n==="translateZ"){t.z=r;return}t[n]=r})}function yA(t,e){let n,r;const{state:s,transform:i}=t_();return Qu(t,o=>{r=o,o.style.transform&&_A(s,o.style.transform),n&&(o.style.transform=n),e&&e(s)}),lt(i,o=>{if(!r){n=o;return}r.style.transform=o},{immediate:!0}),{transform:s}}function vA(t,e){const n=er({}),r=o=>Object.entries(o).forEach(([a,c])=>n[a]=c),{style:s}=mA(t,r),{transform:i}=yA(t,r);return lt(n,o=>{Object.entries(o).forEach(([a,c])=>{const l=Yu(a)?i:s;l[a]&&l[a]===c||(l[a]=c)})},{immediate:!0,deep:!0}),Qu(t,()=>e&&r(e)),{motionProperties:n,style:s,transform:i}}function EA(t={}){const e=Ve(t),n=Ee();return{state:De(()=>{if(n.value)return e[n.value]}),variant:n}}function i_(t,e={},n){const{motionProperties:r}=vA(t),{variant:s,state:i}=EA(e),o=tA(r,e),a={target:t,variant:s,variants:e,state:i,motionProperties:r,...o};return cA(a,n),a}const TA=["initial","enter","leave","visible","visible-once","visibleOnce","hovered","tapped","focused","delay"];function wA(t,e){const n=t.props?t.props:t.data&&t.data.attrs?t.data.attrs:{};n&&(n.variants&&Xo(n.variants)&&(e.value={...e.value,...n.variants}),TA.forEach(r=>{if(r==="delay"){if(n&&n[r]&&typeof n[r]=="number"){const s=n[r];e&&e.value&&(e.value.enter&&(e.value.enter.transition||(e.value.enter.transition={}),e.value.enter.transition={delay:s,...e.value.enter.transition}),e.value.visible&&(e.value.visible.transition||(e.value.visible.transition={}),e.value.visible.transition={delay:s,...e.value.visible.transition}),e.value.visibleOnce&&(e.value.visibleOnce.transition||(e.value.visibleOnce.transition={}),e.value.visibleOnce.transition={delay:s,...e.value.visibleOnce.transition}))}return}if(n&&n[r]&&Xo(n[r])){const s=n[r];r==="visible-once"&&(r="visibleOnce"),e.value[r]=s}}))}function jc(t){return{created:(r,s,i)=>{const o=s.value&&typeof s.value=="string"?s.value:i.key;o&&Uc[o]&&Uc[o].stop();const a=Ee(t||{});typeof s.value=="object"&&(a.value=s.value),wA(i,a);const l=i_(r,a,{eventListeners:!0,lifeCycleHooks:!0,syncVariants:!0,visibilityHooks:!1});r.motionInstance=l,o&&(Uc[o]=l)},mounted:(r,s,i)=>{r.motionInstance&&Zg(r.motionInstance)},getSSRProps(r,s){let{initial:i}=r.value||s&&(s==null?void 0:s.props)||{};i=Ve(i);const o=N0((t==null?void 0:t.initial)||{},i||{});return!o||Object.keys(o).length===0?void 0:{style:s_(o)}}}}const IA={initial:{opacity:0},enter:{opacity:1}},AA={initial:{opacity:0},visible:{opacity:1}},bA={initial:{opacity:0},visibleOnce:{opacity:1}},RA={initial:{scale:0,opacity:0},enter:{scale:1,opacity:1}},SA={initial:{scale:0,opacity:0},visible:{scale:1,opacity:1}},PA={initial:{scale:0,opacity:0},visibleOnce:{scale:1,opacity:1}},CA={initial:{x:-100,rotate:90,opacity:0},enter:{x:0,rotate:0,opacity:1}},xA={initial:{x:-100,rotate:90,opacity:0},visible:{x:0,rotate:0,opacity:1}},OA={initial:{x:-100,rotate:90,opacity:0},visibleOnce:{x:0,rotate:0,opacity:1}},kA={initial:{x:100,rotate:-90,opacity:0},enter:{x:0,rotate:0,opacity:1}},DA={initial:{x:100,rotate:-90,opacity:0},visible:{x:0,rotate:0,opacity:1}},VA={initial:{x:100,rotate:-90,opacity:0},visibleOnce:{x:0,rotate:0,opacity:1}},NA={initial:{y:-100,rotate:-90,opacity:0},enter:{y:0,rotate:0,opacity:1}},MA={initial:{y:-100,rotate:-90,opacity:0},visible:{y:0,rotate:0,opacity:1}},LA={initial:{y:-100,rotate:-90,opacity:0},visibleOnce:{y:0,rotate:0,opacity:1}},FA={initial:{y:100,rotate:90,opacity:0},enter:{y:0,rotate:0,opacity:1}},UA={initial:{y:100,rotate:90,opacity:0},visible:{y:0,rotate:0,opacity:1}},$A={initial:{y:100,rotate:90,opacity:0},visibleOnce:{y:0,rotate:0,opacity:1}},BA={initial:{x:-100,opacity:0},enter:{x:0,opacity:1}},jA={initial:{x:-100,opacity:0},visible:{x:0,opacity:1}},qA={initial:{x:-100,opacity:0},visibleOnce:{x:0,opacity:1}},HA={initial:{x:100,opacity:0},enter:{x:0,opacity:1}},zA={initial:{x:100,opacity:0},visible:{x:0,opacity:1}},KA={initial:{x:100,opacity:0},visibleOnce:{x:0,opacity:1}},WA={initial:{y:-100,opacity:0},enter:{y:0,opacity:1}},GA={initial:{y:-100,opacity:0},visible:{y:0,opacity:1}},QA={initial:{y:-100,opacity:0},visibleOnce:{y:0,opacity:1}},YA={initial:{y:100,opacity:0},enter:{y:0,opacity:1}},JA={initial:{y:100,opacity:0},visible:{y:0,opacity:1}},XA={initial:{y:100,opacity:0},visibleOnce:{y:0,opacity:1}},Nl={__proto__:null,fade:IA,fadeVisible:AA,fadeVisibleOnce:bA,pop:RA,popVisible:SA,popVisibleOnce:PA,rollBottom:FA,rollLeft:CA,rollRight:kA,rollTop:NA,rollVisibleBottom:UA,rollVisibleLeft:xA,rollVisibleOnceBottom:$A,rollVisibleOnceLeft:OA,rollVisibleOnceRight:VA,rollVisibleOnceTop:LA,rollVisibleRight:DA,rollVisibleTop:MA,slideBottom:YA,slideLeft:BA,slideRight:HA,slideTop:WA,slideVisibleBottom:JA,slideVisibleLeft:jA,slideVisibleOnceBottom:XA,slideVisibleOnceLeft:qA,slideVisibleOnceRight:KA,slideVisibleOnceTop:QA,slideVisibleRight:zA,slideVisibleTop:GA},ZA=Du({props:{is:{type:[String,Object],required:!1},preset:{type:String,required:!1},instance:{type:Object,required:!1},variants:{type:Object,required:!1},initial:{type:Object,required:!1},enter:{type:Object,required:!1},leave:{type:Object,required:!1},visible:{type:Object,required:!1},visibleOnce:{type:Object,required:!1},hovered:{type:Object,required:!1},tapped:{type:Object,required:!1},focused:{type:Object,required:!1},delay:{type:[Number,String],required:!1}},setup(t){var a;const e=tT(),n=er({});if(!t.is&&!e.default)return()=>hi("div",{});const r=De(()=>{let c;return t.preset&&(c=Nl[t.preset]),c}),s=De(()=>({initial:t.initial,enter:t.enter,leave:t.leave,visible:t.visible,visibleOnce:t.visibleOnce,hovered:t.hovered,tapped:t.tapped,focused:t.focused})),i=De(()=>{const c={...s.value,...r.value||{},...t.variants||{}};return t.delay&&(c.enter.transition={...c.enter.transition},c.enter.transition.delay=parseInt(t.delay)),c}),o=De(()=>{if(!t.is)return;let c=t.is;return typeof o.value=="string"&&!W0(c)&&(c=VE(c)),c});if(((a=process==null?void 0:process.env)==null?void 0:a.NODE_ENV)==="development"||process!=null&&process.dev){const c=l=>{var u;(u=l.variants)!=null&&u.initial&&l.set("initial"),setTimeout(()=>{var h,d,f;(h=l.variants)!=null&&h.enter&&l.apply("enter"),(d=l.variants)!=null&&d.visible&&l.apply("visible"),(f=l.variants)!=null&&f.visibleOnce&&l.apply("visibleOnce")},10)};Jm(()=>Object.entries(n).forEach(([l,u])=>c(u)))}return{slots:e,component:o,motionConfig:i,instances:n}},render({slots:t,motionConfig:e,instances:n,component:r}){var a;const s=s_(e.initial||{}),i=(c,l)=>(c.props||(c.props={}),c.props.style=s,c.props.onVnodeMounted=({el:u})=>{const h=i_(u,e);n[l]=h},c);if(r){const c=hi(r,void 0,t);return i(c,0),c}return(((a=t.default)==null?void 0:a.call(t))||[]).map((c,l)=>i(c,l))}});function eb(t){const e="àáâäæãåāăąçćčđďèéêëēėęěğǵḧîïíīįìłḿñńǹňôöòóœøōõőṕŕřßśšşșťțûüùúūǘůűųẃẍÿýžźż·/_,:;",n="aaaaaaaaaacccddeeeeeeeegghiiiiiilmnnnnoooooooooprrsssssttuuuuuuuuuwxyyzzz------",r=new RegExp(e.split("").join("|"),"g");return t.toString().replace(/[A-Z]/g,s=>`-${s}`).toLowerCase().replace(/\s+/g,"-").replace(r,s=>n.charAt(e.indexOf(s))).replace(/&/g,"-and-").replace(/[^\w\-]+/g,"").replace(/\-\-+/g,"-").replace(/^-+/,"").replace(/-+$/,"")}const tb={install(t,e){if(t.directive("motion",jc()),t.component("Motion",ZA),!e||e&&!e.excludePresets)for(const n in Nl){const r=Nl[n];t.directive(`motion-${eb(n)}`,jc(r))}if(e&&e.directives)for(const n in e.directives){const r=e.directives[n];!r.initial&&__DEV__&&console.warn(`Your directive v-motion-${n} is missing initial variant!`),t.directive(`motion-${n}`,jc(r))}}};/*!
  * vue-router v4.3.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const zr=typeof document<"u";function nb(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const ve=Object.assign;function qc(t,e){const n={};for(const r in e){const s=e[r];n[r]=$t(s)?s.map(t):t(s)}return n}const Js=()=>{},$t=Array.isArray,o_=/#/g,rb=/&/g,sb=/\//g,ib=/=/g,ob=/\?/g,a_=/\+/g,ab=/%5B/g,cb=/%5D/g,c_=/%5E/g,lb=/%60/g,l_=/%7B/g,ub=/%7C/g,u_=/%7D/g,hb=/%20/g;function Ju(t){return encodeURI(""+t).replace(ub,"|").replace(ab,"[").replace(cb,"]")}function db(t){return Ju(t).replace(l_,"{").replace(u_,"}").replace(c_,"^")}function Ml(t){return Ju(t).replace(a_,"%2B").replace(hb,"+").replace(o_,"%23").replace(rb,"%26").replace(lb,"`").replace(l_,"{").replace(u_,"}").replace(c_,"^")}function fb(t){return Ml(t).replace(ib,"%3D")}function pb(t){return Ju(t).replace(o_,"%23").replace(ob,"%3F")}function mb(t){return t==null?"":pb(t).replace(sb,"%2F")}function mi(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const gb=/\/$/,_b=t=>t.replace(gb,"");function Hc(t,e,n="/"){let r,s={},i="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(r=e.slice(0,c),i=e.slice(c+1,a>-1?a:e.length),s=t(i)),a>-1&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=Tb(r??e,n),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:mi(o)}}function yb(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Ef(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function vb(t,e,n){const r=e.matched.length-1,s=n.matched.length-1;return r>-1&&r===s&&as(e.matched[r],n.matched[s])&&h_(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function as(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function h_(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!Eb(t[n],e[n]))return!1;return!0}function Eb(t,e){return $t(t)?Tf(t,e):$t(e)?Tf(e,t):t===e}function Tf(t,e){return $t(e)?t.length===e.length&&t.every((n,r)=>n===e[r]):t.length===1&&t[0]===e}function Tb(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),r=t.split("/"),s=r[r.length-1];(s===".."||s===".")&&r.push("");let i=n.length-1,o,a;for(o=0;o<r.length;o++)if(a=r[o],a!==".")if(a==="..")i>1&&i--;else break;return n.slice(0,i).join("/")+"/"+r.slice(o).join("/")}var gi;(function(t){t.pop="pop",t.push="push"})(gi||(gi={}));var Xs;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Xs||(Xs={}));function wb(t){if(!t)if(zr){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),_b(t)}const Ib=/^[^#]+#/;function Ab(t,e){return t.replace(Ib,"#")+e}function bb(t,e){const n=document.documentElement.getBoundingClientRect(),r=t.getBoundingClientRect();return{behavior:e.behavior,left:r.left-n.left-(e.left||0),top:r.top-n.top-(e.top||0)}}const Ua=()=>({left:window.scrollX,top:window.scrollY});function Rb(t){let e;if("el"in t){const n=t.el,r=typeof n=="string"&&n.startsWith("#"),s=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!s)return;e=bb(s,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function wf(t,e){return(history.state?history.state.position-e:-1)+t}const Ll=new Map;function Sb(t,e){Ll.set(t,e)}function Pb(t){const e=Ll.get(t);return Ll.delete(t),e}let Cb=()=>location.protocol+"//"+location.host;function d_(t,e){const{pathname:n,search:r,hash:s}=e,i=t.indexOf("#");if(i>-1){let a=s.includes(t.slice(i))?t.slice(i).length:1,c=s.slice(a);return c[0]!=="/"&&(c="/"+c),Ef(c,"")}return Ef(n,t)+r+s}function xb(t,e,n,r){let s=[],i=[],o=null;const a=({state:d})=>{const f=d_(t,location),g=n.value,v=e.value;let y=0;if(d){if(n.value=f,e.value=d,o&&o===g){o=null;return}y=v?d.position-v.position:0}else r(f);s.forEach(E=>{E(n.value,g,{delta:y,type:gi.pop,direction:y?y>0?Xs.forward:Xs.back:Xs.unknown})})};function c(){o=n.value}function l(d){s.push(d);const f=()=>{const g=s.indexOf(d);g>-1&&s.splice(g,1)};return i.push(f),f}function u(){const{history:d}=window;d.state&&d.replaceState(ve({},d.state,{scroll:Ua()}),"")}function h(){for(const d of i)d();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:c,listen:l,destroy:h}}function If(t,e,n,r=!1,s=!1){return{back:t,current:e,forward:n,replaced:r,position:window.history.length,scroll:s?Ua():null}}function Ob(t){const{history:e,location:n}=window,r={value:d_(t,n)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,l,u){const h=t.indexOf("#"),d=h>-1?(n.host&&document.querySelector("base")?t:t.slice(h))+c:Cb()+t+c;try{e[u?"replaceState":"pushState"](l,"",d),s.value=l}catch(f){console.error(f),n[u?"replace":"assign"](d)}}function o(c,l){const u=ve({},e.state,If(s.value.back,c,s.value.forward,!0),l,{position:s.value.position});i(c,u,!0),r.value=c}function a(c,l){const u=ve({},s.value,e.state,{forward:c,scroll:Ua()});i(u.current,u,!0);const h=ve({},If(r.value,c,null),{position:u.position+1},l);i(c,h,!1),r.value=c}return{location:r,state:s,push:a,replace:o}}function kb(t){t=wb(t);const e=Ob(t),n=xb(t,e.state,e.location,e.replace);function r(i,o=!0){o||n.pauseListeners(),history.go(i)}const s=ve({location:"",base:t,go:r,createHref:Ab.bind(null,t)},e,n);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function Db(t){return typeof t=="string"||t&&typeof t=="object"}function f_(t){return typeof t=="string"||typeof t=="symbol"}const Sn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},p_=Symbol("");var Af;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Af||(Af={}));function cs(t,e){return ve(new Error,{type:t,[p_]:!0},e)}function un(t,e){return t instanceof Error&&p_ in t&&(e==null||!!(t.type&e))}const bf="[^/]+?",Vb={sensitive:!1,strict:!1,start:!0,end:!0},Nb=/[.+*?^${}()[\]/\\]/g;function Mb(t,e){const n=ve({},Vb,e),r=[];let s=n.start?"^":"";const i=[];for(const l of t){const u=l.length?[]:[90];n.strict&&!l.length&&(s+="/");for(let h=0;h<l.length;h++){const d=l[h];let f=40+(n.sensitive?.25:0);if(d.type===0)h||(s+="/"),s+=d.value.replace(Nb,"\\$&"),f+=40;else if(d.type===1){const{value:g,repeatable:v,optional:y,regexp:E}=d;i.push({name:g,repeatable:v,optional:y});const I=E||bf;if(I!==bf){f+=10;try{new RegExp(`(${I})`)}catch(C){throw new Error(`Invalid custom RegExp for param "${g}" (${I}): `+C.message)}}let T=v?`((?:${I})(?:/(?:${I}))*)`:`(${I})`;h||(T=y&&l.length<2?`(?:/${T})`:"/"+T),y&&(T+="?"),s+=T,f+=20,y&&(f+=-8),v&&(f+=-20),I===".*"&&(f+=-50)}u.push(f)}r.push(u)}if(n.strict&&n.end){const l=r.length-1;r[l][r[l].length-1]+=.7000000000000001}n.strict||(s+="/?"),n.end?s+="$":n.strict&&(s+="(?:/|$)");const o=new RegExp(s,n.sensitive?"":"i");function a(l){const u=l.match(o),h={};if(!u)return null;for(let d=1;d<u.length;d++){const f=u[d]||"",g=i[d-1];h[g.name]=f&&g.repeatable?f.split("/"):f}return h}function c(l){let u="",h=!1;for(const d of t){(!h||!u.endsWith("/"))&&(u+="/"),h=!1;for(const f of d)if(f.type===0)u+=f.value;else if(f.type===1){const{value:g,repeatable:v,optional:y}=f,E=g in l?l[g]:"";if($t(E)&&!v)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const I=$t(E)?E.join("/"):E;if(!I)if(y)d.length<2&&(u.endsWith("/")?u=u.slice(0,-1):h=!0);else throw new Error(`Missing required param "${g}"`);u+=I}}return u||"/"}return{re:o,score:r,keys:i,parse:a,stringify:c}}function Lb(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=e[n]-t[n];if(r)return r;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function Fb(t,e){let n=0;const r=t.score,s=e.score;for(;n<r.length&&n<s.length;){const i=Lb(r[n],s[n]);if(i)return i;n++}if(Math.abs(s.length-r.length)===1){if(Rf(r))return 1;if(Rf(s))return-1}return s.length-r.length}function Rf(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const Ub={type:0,value:""},$b=/[a-zA-Z0-9_]/;function Bb(t){if(!t)return[[]];if(t==="/")return[[Ub]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(f){throw new Error(`ERR (${n})/"${l}": ${f}`)}let n=0,r=n;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,c,l="",u="";function h(){l&&(n===0?i.push({type:0,value:l}):n===1||n===2||n===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),l="")}function d(){l+=c}for(;a<t.length;){if(c=t[a++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(l&&h(),o()):c===":"?(h(),n=1):d();break;case 4:d(),n=r;break;case 1:c==="("?n=2:$b.test(c)?d():(h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:h(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${l}"`),h(),o(),s}function jb(t,e,n){const r=Mb(Bb(t.path),n),s=ve(r,{record:t,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function qb(t,e){const n=[],r=new Map;e=Cf({strict:!1,end:!0,sensitive:!1},e);function s(u){return r.get(u)}function i(u,h,d){const f=!d,g=Hb(u);g.aliasOf=d&&d.record;const v=Cf(e,u),y=[g];if("alias"in u){const T=typeof u.alias=="string"?[u.alias]:u.alias;for(const C of T)y.push(ve({},g,{components:d?d.record.components:g.components,path:C,aliasOf:d?d.record:g}))}let E,I;for(const T of y){const{path:C}=T;if(h&&C[0]!=="/"){const $=h.record.path,M=$[$.length-1]==="/"?"":"/";T.path=h.record.path+(C&&M+C)}if(E=jb(T,h,v),d?d.alias.push(E):(I=I||E,I!==E&&I.alias.push(E),f&&u.name&&!Pf(E)&&o(u.name)),g.children){const $=g.children;for(let M=0;M<$.length;M++)i($[M],E,d&&d.children[M])}d=d||E,(E.record.components&&Object.keys(E.record.components).length||E.record.name||E.record.redirect)&&c(E)}return I?()=>{o(I)}:Js}function o(u){if(f_(u)){const h=r.get(u);h&&(r.delete(u),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(u);h>-1&&(n.splice(h,1),u.record.name&&r.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function c(u){let h=0;for(;h<n.length&&Fb(u,n[h])>=0&&(u.record.path!==n[h].record.path||!m_(u,n[h]));)h++;n.splice(h,0,u),u.record.name&&!Pf(u)&&r.set(u.record.name,u)}function l(u,h){let d,f={},g,v;if("name"in u&&u.name){if(d=r.get(u.name),!d)throw cs(1,{location:u});v=d.record.name,f=ve(Sf(h.params,d.keys.filter(I=>!I.optional).concat(d.parent?d.parent.keys.filter(I=>I.optional):[]).map(I=>I.name)),u.params&&Sf(u.params,d.keys.map(I=>I.name))),g=d.stringify(f)}else if(u.path!=null)g=u.path,d=n.find(I=>I.re.test(g)),d&&(f=d.parse(g),v=d.record.name);else{if(d=h.name?r.get(h.name):n.find(I=>I.re.test(h.path)),!d)throw cs(1,{location:u,currentLocation:h});v=d.record.name,f=ve({},h.params,u.params),g=d.stringify(f)}const y=[];let E=d;for(;E;)y.unshift(E.record),E=E.parent;return{name:v,path:g,params:f,matched:y,meta:Kb(y)}}return t.forEach(u=>i(u)),{addRoute:i,resolve:l,removeRoute:o,getRoutes:a,getRecordMatcher:s}}function Sf(t,e){const n={};for(const r of e)r in t&&(n[r]=t[r]);return n}function Hb(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:zb(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function zb(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const r in t.components)e[r]=typeof n=="object"?n[r]:n;return e}function Pf(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function Kb(t){return t.reduce((e,n)=>ve(e,n.meta),{})}function Cf(t,e){const n={};for(const r in t)n[r]=r in e?e[r]:t[r];return n}function m_(t,e){return e.children.some(n=>n===t||m_(t,n))}function Wb(t){const e={};if(t===""||t==="?")return e;const r=(t[0]==="?"?t.slice(1):t).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(a_," "),o=i.indexOf("="),a=mi(o<0?i:i.slice(0,o)),c=o<0?null:mi(i.slice(o+1));if(a in e){let l=e[a];$t(l)||(l=e[a]=[l]),l.push(c)}else e[a]=c}return e}function xf(t){let e="";for(let n in t){const r=t[n];if(n=fb(n),r==null){r!==void 0&&(e+=(e.length?"&":"")+n);continue}($t(r)?r.map(i=>i&&Ml(i)):[r&&Ml(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+n,i!=null&&(e+="="+i))})}return e}function Gb(t){const e={};for(const n in t){const r=t[n];r!==void 0&&(e[n]=$t(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const Qb=Symbol(""),Of=Symbol(""),$a=Symbol(""),Xu=Symbol(""),Fl=Symbol("");function Os(){let t=[];function e(r){return t.push(r),()=>{const s=t.indexOf(r);s>-1&&t.splice(s,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function Dn(t,e,n,r,s,i=o=>o()){const o=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((a,c)=>{const l=d=>{d===!1?c(cs(4,{from:n,to:e})):d instanceof Error?c(d):Db(d)?c(cs(2,{from:e,to:d})):(o&&r.enterCallbacks[s]===o&&typeof d=="function"&&o.push(d),a())},u=i(()=>t.call(r&&r.instances[s],e,n,l));let h=Promise.resolve(u);t.length<3&&(h=h.then(l)),h.catch(d=>c(d))})}function zc(t,e,n,r,s=i=>i()){const i=[];for(const o of t)for(const a in o.components){let c=o.components[a];if(!(e!=="beforeRouteEnter"&&!o.instances[a]))if(Yb(c)){const u=(c.__vccOpts||c)[e];u&&i.push(Dn(u,n,r,o,a,s))}else{let l=c();i.push(()=>l.then(u=>{if(!u)return Promise.reject(new Error(`Couldn't resolve component "${a}" at "${o.path}"`));const h=nb(u)?u.default:u;o.components[a]=h;const f=(h.__vccOpts||h)[e];return f&&Dn(f,n,r,o,a,s)()}))}}return i}function Yb(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function kf(t){const e=Lt($a),n=Lt(Xu),r=De(()=>e.resolve(Ve(t.to))),s=De(()=>{const{matched:c}=r.value,{length:l}=c,u=c[l-1],h=n.matched;if(!u||!h.length)return-1;const d=h.findIndex(as.bind(null,u));if(d>-1)return d;const f=Df(c[l-2]);return l>1&&Df(u)===f&&h[h.length-1].path!==f?h.findIndex(as.bind(null,c[l-2])):d}),i=De(()=>s.value>-1&&Zb(n.params,r.value.params)),o=De(()=>s.value>-1&&s.value===n.matched.length-1&&h_(n.params,r.value.params));function a(c={}){return Xb(c)?e[Ve(t.replace)?"replace":"push"](Ve(t.to)).catch(Js):Promise.resolve()}return{route:r,href:De(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}const Jb=Du({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:kf,setup(t,{slots:e}){const n=er(kf(t)),{options:r}=Lt($a),s=De(()=>({[Vf(t.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Vf(t.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=e.default&&e.default(n);return t.custom?i:hi("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:s.value},i)}}}),_i=Jb;function Xb(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function Zb(t,e){for(const n in e){const r=e[n],s=t[n];if(typeof r=="string"){if(r!==s)return!1}else if(!$t(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function Df(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Vf=(t,e,n)=>t??e??n,eR=Du({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const r=Lt(Fl),s=De(()=>t.route||r.value),i=Lt(Of,0),o=De(()=>{let l=Ve(i);const{matched:u}=s.value;let h;for(;(h=u[l])&&!h.components;)l++;return l}),a=De(()=>s.value.matched[o.value]);Vo(Of,De(()=>o.value+1)),Vo(Qb,a),Vo(Fl,s);const c=Ee();return lt(()=>[c.value,a.value,t.name],([l,u,h],[d,f,g])=>{u&&(u.instances[h]=l,f&&f!==u&&l&&l===d&&(u.leaveGuards.size||(u.leaveGuards=f.leaveGuards),u.updateGuards.size||(u.updateGuards=f.updateGuards))),l&&u&&(!f||!as(u,f)||!d)&&(u.enterCallbacks[h]||[]).forEach(v=>v(l))},{flush:"post"}),()=>{const l=s.value,u=t.name,h=a.value,d=h&&h.components[u];if(!d)return Nf(n.default,{Component:d,route:l});const f=h.props[u],g=f?f===!0?l.params:typeof f=="function"?f(l):f:null,y=hi(d,ve({},g,e,{onVnodeUnmounted:E=>{E.component.isUnmounted&&(h.instances[u]=null)},ref:c}));return Nf(n.default,{Component:y,route:l})||y}}});function Nf(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const g_=eR;function tR(t){const e=qb(t.routes,t),n=t.parseQuery||Wb,r=t.stringifyQuery||xf,s=t.history,i=Os(),o=Os(),a=Os(),c=EE(Sn);let l=Sn;zr&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=qc.bind(null,b=>""+b),h=qc.bind(null,mb),d=qc.bind(null,mi);function f(b,B){let L,H;return f_(b)?(L=e.getRecordMatcher(b),H=B):H=b,e.addRoute(H,L)}function g(b){const B=e.getRecordMatcher(b);B&&e.removeRoute(B)}function v(){return e.getRoutes().map(b=>b.record)}function y(b){return!!e.getRecordMatcher(b)}function E(b,B){if(B=ve({},B||c.value),typeof b=="string"){const m=Hc(n,b,B.path),_=e.resolve({path:m.path},B),R=s.createHref(m.fullPath);return ve(m,_,{params:d(_.params),hash:mi(m.hash),redirectedFrom:void 0,href:R})}let L;if(b.path!=null)L=ve({},b,{path:Hc(n,b.path,B.path).path});else{const m=ve({},b.params);for(const _ in m)m[_]==null&&delete m[_];L=ve({},b,{params:h(m)}),B.params=h(B.params)}const H=e.resolve(L,B),ye=b.hash||"";H.params=u(d(H.params));const Ce=yb(r,ve({},b,{hash:db(ye),path:H.path})),p=s.createHref(Ce);return ve({fullPath:Ce,hash:ye,query:r===xf?Gb(b.query):b.query||{}},H,{redirectedFrom:void 0,href:p})}function I(b){return typeof b=="string"?Hc(n,b,c.value.path):ve({},b)}function T(b,B){if(l!==b)return cs(8,{from:B,to:b})}function C(b){return ie(b)}function $(b){return C(ve(I(b),{replace:!0}))}function M(b){const B=b.matched[b.matched.length-1];if(B&&B.redirect){const{redirect:L}=B;let H=typeof L=="function"?L(b):L;return typeof H=="string"&&(H=H.includes("?")||H.includes("#")?H=I(H):{path:H},H.params={}),ve({query:b.query,hash:b.hash,params:H.path!=null?{}:b.params},H)}}function ie(b,B){const L=l=E(b),H=c.value,ye=b.state,Ce=b.force,p=b.replace===!0,m=M(L);if(m)return ie(ve(I(m),{state:typeof m=="object"?ve({},ye,m.state):ye,force:Ce,replace:p}),B||L);const _=L;_.redirectedFrom=B;let R;return!Ce&&vb(r,H,L)&&(R=cs(16,{to:_,from:H}),qt(H,H,!0,!1)),(R?Promise.resolve(R):le(_,H)).catch(w=>un(w)?un(w,2)?w:In(w):_e(w,_,H)).then(w=>{if(w){if(un(w,2))return ie(ve({replace:p},I(w.to),{state:typeof w.to=="object"?ve({},ye,w.to.state):ye,force:Ce}),B||_)}else w=q(_,H,!0,p,ye);return Me(_,H,w),w})}function W(b,B){const L=T(b,B);return L?Promise.reject(L):Promise.resolve()}function re(b){const B=Br.values().next().value;return B&&typeof B.runWithContext=="function"?B.runWithContext(b):b()}function le(b,B){let L;const[H,ye,Ce]=nR(b,B);L=zc(H.reverse(),"beforeRouteLeave",b,B);for(const m of H)m.leaveGuards.forEach(_=>{L.push(Dn(_,b,B))});const p=W.bind(null,b,B);return L.push(p),st(L).then(()=>{L=[];for(const m of i.list())L.push(Dn(m,b,B));return L.push(p),st(L)}).then(()=>{L=zc(ye,"beforeRouteUpdate",b,B);for(const m of ye)m.updateGuards.forEach(_=>{L.push(Dn(_,b,B))});return L.push(p),st(L)}).then(()=>{L=[];for(const m of Ce)if(m.beforeEnter)if($t(m.beforeEnter))for(const _ of m.beforeEnter)L.push(Dn(_,b,B));else L.push(Dn(m.beforeEnter,b,B));return L.push(p),st(L)}).then(()=>(b.matched.forEach(m=>m.enterCallbacks={}),L=zc(Ce,"beforeRouteEnter",b,B,re),L.push(p),st(L))).then(()=>{L=[];for(const m of o.list())L.push(Dn(m,b,B));return L.push(p),st(L)}).catch(m=>un(m,8)?m:Promise.reject(m))}function Me(b,B,L){a.list().forEach(H=>re(()=>H(b,B,L)))}function q(b,B,L,H,ye){const Ce=T(b,B);if(Ce)return Ce;const p=B===Sn,m=zr?history.state:{};L&&(H||p?s.replace(b.fullPath,ve({scroll:p&&m&&m.scroll},ye)):s.push(b.fullPath,ye)),c.value=b,qt(b,B,L,p),In()}let me;function qe(){me||(me=s.listen((b,B,L)=>{if(!uo.listening)return;const H=E(b),ye=M(H);if(ye){ie(ve(ye,{replace:!0}),H).catch(Js);return}l=H;const Ce=c.value;zr&&Sb(wf(Ce.fullPath,L.delta),Ua()),le(H,Ce).catch(p=>un(p,12)?p:un(p,2)?(ie(p.to,H).then(m=>{un(m,20)&&!L.delta&&L.type===gi.pop&&s.go(-1,!1)}).catch(Js),Promise.reject()):(L.delta&&s.go(-L.delta,!1),_e(p,H,Ce))).then(p=>{p=p||q(H,Ce,!1),p&&(L.delta&&!un(p,8)?s.go(-L.delta,!1):L.type===gi.pop&&un(p,20)&&s.go(-1,!1)),Me(H,Ce,p)}).catch(Js)}))}let Pt=Os(),Le=Os(),we;function _e(b,B,L){In(b);const H=Le.list();return H.length?H.forEach(ye=>ye(b,B,L)):console.error(b),Promise.reject(b)}function ln(){return we&&c.value!==Sn?Promise.resolve():new Promise((b,B)=>{Pt.add([b,B])})}function In(b){return we||(we=!b,qe(),Pt.list().forEach(([B,L])=>b?L(b):B()),Pt.reset()),b}function qt(b,B,L,H){const{scrollBehavior:ye}=t;if(!zr||!ye)return Promise.resolve();const Ce=!L&&Pb(wf(b.fullPath,0))||(H||!L)&&history.state&&history.state.scroll||null;return Lm().then(()=>ye(b,B,Ce)).then(p=>p&&Rb(p)).catch(p=>_e(p,b,B))}const _t=b=>s.go(b);let $r;const Br=new Set,uo={currentRoute:c,listening:!0,addRoute:f,removeRoute:g,hasRoute:y,getRoutes:v,resolve:E,options:t,push:C,replace:$,go:_t,back:()=>_t(-1),forward:()=>_t(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:Le.add,isReady:ln,install(b){const B=this;b.component("RouterLink",_i),b.component("RouterView",g_),b.config.globalProperties.$router=B,Object.defineProperty(b.config.globalProperties,"$route",{enumerable:!0,get:()=>Ve(c)}),zr&&!$r&&c.value===Sn&&($r=!0,C(s.location).catch(ye=>{}));const L={};for(const ye in Sn)Object.defineProperty(L,ye,{get:()=>c.value[ye],enumerable:!0});b.provide($a,B),b.provide(Xu,Cm(L)),b.provide(Fl,c);const H=b.unmount;Br.add(b),b.unmount=function(){Br.delete(b),Br.size<1&&(l=Sn,me&&me(),me=null,c.value=Sn,$r=!1,we=!1),H()}}};function st(b){return b.reduce((B,L)=>B.then(()=>re(L)),Promise.resolve())}return uo}function nR(t,e){const n=[],r=[],s=[],i=Math.max(e.matched.length,t.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(t.matched.find(l=>as(l,a))?r.push(a):n.push(a));const c=t.matched[o];c&&(e.matched.find(l=>as(l,c))||s.push(c))}return[n,r,s]}function Ba(){return Lt($a)}function __(){return Lt(Xu)}var Mf={};/**
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
 */const y_=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},rR=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=t[n++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=t[n++],o=t[n++],a=t[n++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=t[n++],o=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},v_={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const i=t[s],o=s+1<t.length,a=o?t[s+1]:0,c=s+2<t.length,l=c?t[s+2]:0,u=i>>2,h=(i&3)<<4|a>>4;let d=(a&15)<<2|l>>6,f=l&63;c||(f=64,o||(d=64)),r.push(n[u],n[h],n[d],n[f])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(y_(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):rR(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const i=n[t.charAt(s++)],a=s<t.length?n[t.charAt(s)]:0;++s;const l=s<t.length?n[t.charAt(s)]:64;++s;const h=s<t.length?n[t.charAt(s)]:64;if(++s,i==null||a==null||l==null||h==null)throw new sR;const d=i<<2|a>>4;if(r.push(d),l!==64){const f=a<<4&240|l>>2;if(r.push(f),h!==64){const g=l<<6&192|h;r.push(g)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class sR extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const iR=function(t){const e=y_(t);return v_.encodeByteArray(e,!0)},ta=function(t){return iR(t).replace(/\./g,"")},E_=function(t){try{return v_.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function oR(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const aR=()=>oR().__FIREBASE_DEFAULTS__,cR=()=>{if(typeof process>"u"||typeof Mf>"u")return;const t=Mf.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},lR=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&E_(t[1]);return e&&JSON.parse(e)},ja=()=>{try{return aR()||cR()||lR()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},T_=t=>{var e,n;return(n=(e=ja())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},uR=t=>{const e=T_(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},w_=()=>{var t;return(t=ja())===null||t===void 0?void 0:t.config},I_=t=>{var e;return(e=ja())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class hR{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function dR(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[ta(JSON.stringify(n)),ta(JSON.stringify(o)),""].join(".")}/**
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
 */function je(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function fR(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(je())}function pR(){var t;const e=(t=ja())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function mR(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function gR(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function _R(){const t=je();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function yR(){return!pR()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function A_(){try{return typeof indexedDB=="object"}catch{return!1}}function vR(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(n){e(n)}})}/**
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
 */const ER="FirebaseError";class wn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=ER,Object.setPrototypeOf(this,wn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,$i.prototype.create)}}class $i{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?TR(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new wn(s,a,r)}}function TR(t,e){return t.replace(wR,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const wR=/\{\$([^}]+)}/g;function IR(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function na(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const i=t[s],o=e[s];if(Lf(i)&&Lf(o)){if(!na(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Lf(t){return t!==null&&typeof t=="object"}/**
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
 */function Bi(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function AR(t,e){const n=new bR(t,e);return n.subscribe.bind(n)}class bR{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");RR(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=Kc),s.error===void 0&&(s.error=Kc),s.complete===void 0&&(s.complete=Kc);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function RR(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Kc(){}/**
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
 */function Ge(t){return t&&t._delegate?t._delegate:t}class Sr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const hr="[DEFAULT]";/**
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
 */class SR{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new hR;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(CR(e))try{this.getOrInitializeService({instanceIdentifier:hr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=hr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=hr){return this.instances.has(e)}getOptions(e=hr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:PR(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=hr){return this.component?this.component.multipleInstances?e:hr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function PR(t){return t===hr?void 0:t}function CR(t){return t.instantiationMode==="EAGER"}/**
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
 */class xR{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new SR(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ue;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ue||(ue={}));const OR={debug:ue.DEBUG,verbose:ue.VERBOSE,info:ue.INFO,warn:ue.WARN,error:ue.ERROR,silent:ue.SILENT},kR=ue.INFO,DR={[ue.DEBUG]:"log",[ue.VERBOSE]:"log",[ue.INFO]:"info",[ue.WARN]:"warn",[ue.ERROR]:"error"},VR=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=DR[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Zu{constructor(e){this.name=e,this._logLevel=kR,this._logHandler=VR,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ue))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?OR[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ue.DEBUG,...e),this._logHandler(this,ue.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ue.VERBOSE,...e),this._logHandler(this,ue.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ue.INFO,...e),this._logHandler(this,ue.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ue.WARN,...e),this._logHandler(this,ue.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ue.ERROR,...e),this._logHandler(this,ue.ERROR,...e)}}const NR=(t,e)=>e.some(n=>t instanceof n);let Ff,Uf;function MR(){return Ff||(Ff=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function LR(){return Uf||(Uf=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const b_=new WeakMap,Ul=new WeakMap,R_=new WeakMap,Wc=new WeakMap,eh=new WeakMap;function FR(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",i),t.removeEventListener("error",o)},i=()=>{n(Bn(t.result)),s()},o=()=>{r(t.error),s()};t.addEventListener("success",i),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&b_.set(n,t)}).catch(()=>{}),eh.set(e,t),e}function UR(t){if(Ul.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",o),t.removeEventListener("abort",o)},i=()=>{n(),s()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",i),t.addEventListener("error",o),t.addEventListener("abort",o)});Ul.set(t,e)}let $l={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Ul.get(t);if(e==="objectStoreNames")return t.objectStoreNames||R_.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Bn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function $R(t){$l=t($l)}function BR(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Gc(this),e,...n);return R_.set(r,e.sort?e.sort():[e]),Bn(r)}:LR().includes(t)?function(...e){return t.apply(Gc(this),e),Bn(b_.get(this))}:function(...e){return Bn(t.apply(Gc(this),e))}}function jR(t){return typeof t=="function"?BR(t):(t instanceof IDBTransaction&&UR(t),NR(t,MR())?new Proxy(t,$l):t)}function Bn(t){if(t instanceof IDBRequest)return FR(t);if(Wc.has(t))return Wc.get(t);const e=jR(t);return e!==t&&(Wc.set(t,e),eh.set(e,t)),e}const Gc=t=>eh.get(t);function qR(t,e,{blocked:n,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(t,e),a=Bn(o);return r&&o.addEventListener("upgradeneeded",c=>{r(Bn(o.result),c.oldVersion,c.newVersion,Bn(o.transaction),c)}),n&&o.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",l=>s(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const HR=["get","getKey","getAll","getAllKeys","count"],zR=["put","add","delete","clear"],Qc=new Map;function $f(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Qc.get(e))return Qc.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=zR.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||HR.includes(n)))return;const i=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),s&&c.done]))[0]};return Qc.set(e,i),i}$R(t=>({...t,get:(e,n,r)=>$f(e,n)||t.get(e,n,r),has:(e,n)=>!!$f(e,n)||t.has(e,n)}));/**
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
 */class KR{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(WR(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function WR(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Bl="@firebase/app",Bf="0.10.1";/**
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
 */const Pr=new Zu("@firebase/app"),GR="@firebase/app-compat",QR="@firebase/analytics-compat",YR="@firebase/analytics",JR="@firebase/app-check-compat",XR="@firebase/app-check",ZR="@firebase/auth",eS="@firebase/auth-compat",tS="@firebase/database",nS="@firebase/database-compat",rS="@firebase/functions",sS="@firebase/functions-compat",iS="@firebase/installations",oS="@firebase/installations-compat",aS="@firebase/messaging",cS="@firebase/messaging-compat",lS="@firebase/performance",uS="@firebase/performance-compat",hS="@firebase/remote-config",dS="@firebase/remote-config-compat",fS="@firebase/storage",pS="@firebase/storage-compat",mS="@firebase/firestore",gS="@firebase/firestore-compat",_S="firebase",yS="10.11.0";/**
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
 */const jl="[DEFAULT]",vS={[Bl]:"fire-core",[GR]:"fire-core-compat",[YR]:"fire-analytics",[QR]:"fire-analytics-compat",[XR]:"fire-app-check",[JR]:"fire-app-check-compat",[ZR]:"fire-auth",[eS]:"fire-auth-compat",[tS]:"fire-rtdb",[nS]:"fire-rtdb-compat",[rS]:"fire-fn",[sS]:"fire-fn-compat",[iS]:"fire-iid",[oS]:"fire-iid-compat",[aS]:"fire-fcm",[cS]:"fire-fcm-compat",[lS]:"fire-perf",[uS]:"fire-perf-compat",[hS]:"fire-rc",[dS]:"fire-rc-compat",[fS]:"fire-gcs",[pS]:"fire-gcs-compat",[mS]:"fire-fst",[gS]:"fire-fst-compat","fire-js":"fire-js",[_S]:"fire-js-all"};/**
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
 */const ra=new Map,ES=new Map,ql=new Map;function jf(t,e){try{t.container.addComponent(e)}catch(n){Pr.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ls(t){const e=t.name;if(ql.has(e))return Pr.debug(`There were multiple attempts to register component ${e}.`),!1;ql.set(e,t);for(const n of ra.values())jf(n,t);for(const n of ES.values())jf(n,t);return!0}function th(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Jt(t){return t.settings!==void 0}/**
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
 */const TS={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},jn=new $i("app","Firebase",TS);/**
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
 */class wS{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Sr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw jn.create("app-deleted",{appName:this._name})}}/**
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
 */const Ts=yS;function S_(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:jl,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw jn.create("bad-app-name",{appName:String(s)});if(n||(n=w_()),!n)throw jn.create("no-options");const i=ra.get(s);if(i){if(na(n,i.options)&&na(r,i.config))return i;throw jn.create("duplicate-app",{appName:s})}const o=new xR(s);for(const c of ql.values())o.addComponent(c);const a=new wS(n,r,o);return ra.set(s,a),a}function P_(t=jl){const e=ra.get(t);if(!e&&t===jl&&w_())return S_();if(!e)throw jn.create("no-app",{appName:t});return e}function qn(t,e,n){var r;let s=(r=vS[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Pr.warn(a.join(" "));return}ls(new Sr(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const IS="firebase-heartbeat-database",AS=1,yi="firebase-heartbeat-store";let Yc=null;function C_(){return Yc||(Yc=qR(IS,AS,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(yi)}catch(n){console.warn(n)}}}}).catch(t=>{throw jn.create("idb-open",{originalErrorMessage:t.message})})),Yc}async function bS(t){try{const n=(await C_()).transaction(yi),r=await n.objectStore(yi).get(x_(t));return await n.done,r}catch(e){if(e instanceof wn)Pr.warn(e.message);else{const n=jn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Pr.warn(n.message)}}}async function qf(t,e){try{const r=(await C_()).transaction(yi,"readwrite");await r.objectStore(yi).put(e,x_(t)),await r.done}catch(n){if(n instanceof wn)Pr.warn(n.message);else{const r=jn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Pr.warn(r.message)}}}function x_(t){return`${t.name}!${t.options.appId}`}/**
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
 */const RS=1024,SS=30*24*60*60*1e3;class PS{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new xS(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Hf();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(o=>o.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const a=new Date(o.date).valueOf();return Date.now()-a<=SS}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Hf(),{heartbeatsToSend:r,unsentEntries:s}=CS(this._heartbeatsCache.heartbeats),i=ta(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Hf(){return new Date().toISOString().substring(0,10)}function CS(t,e=RS){const n=[];let r=t.slice();for(const s of t){const i=n.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),zf(n)>e){i.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),zf(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class xS{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return A_()?vR().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await bS(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return qf(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return qf(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function zf(t){return ta(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function OS(t){ls(new Sr("platform-logger",e=>new KR(e),"PRIVATE")),ls(new Sr("heartbeat",e=>new PS(e),"PRIVATE")),qn(Bl,Bf,t),qn(Bl,Bf,"esm2017"),qn("fire-js","")}OS("");function nh(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function O_(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const kS=O_,k_=new $i("auth","Firebase",O_());/**
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
 */const sa=new Zu("@firebase/auth");function DS(t,...e){sa.logLevel<=ue.WARN&&sa.warn(`Auth (${Ts}): ${t}`,...e)}function $o(t,...e){sa.logLevel<=ue.ERROR&&sa.error(`Auth (${Ts}): ${t}`,...e)}/**
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
 */function on(t,...e){throw sh(t,...e)}function Ut(t,...e){return sh(t,...e)}function rh(t,e,n){const r=Object.assign(Object.assign({},kS()),{[e]:n});return new $i("auth","Firebase",r).create(e,{appName:t.name})}function Hn(t){return rh(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function D_(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&on(t,"argument-error"),rh(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function sh(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return k_.create(t,...e)}function Y(t,e,...n){if(!t)throw sh(e,...n)}function hn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw $o(e),new Error(e)}function yn(t,e){t||hn(e)}/**
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
 */function Hl(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function VS(){return Kf()==="http:"||Kf()==="https:"}function Kf(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function NS(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(VS()||mR()||"connection"in navigator)?navigator.onLine:!0}function MS(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class ji{constructor(e,n){this.shortDelay=e,this.longDelay=n,yn(n>e,"Short delay should be less than long delay!"),this.isMobile=fR()||gR()}get(){return NS()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function ih(t,e){yn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class V_{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;hn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;hn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;hn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const LS={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const FS=new ji(3e4,6e4);function oh(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function ws(t,e,n,r,s={}){return N_(t,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=Bi(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),V_.fetch()(M_(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function N_(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},LS),e);try{const s=new $S(t),i=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw wo(t,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,l]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw wo(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw wo(t,"email-already-in-use",o);if(c==="USER_DISABLED")throw wo(t,"user-disabled",o);const u=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw rh(t,u,l);on(t,u)}}catch(s){if(s instanceof wn)throw s;on(t,"network-request-failed",{message:String(s)})}}async function US(t,e,n,r,s={}){const i=await ws(t,e,n,r,s);return"mfaPendingCredential"in i&&on(t,"multi-factor-auth-required",{_serverResponse:i}),i}function M_(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?ih(t.config,s):`${t.config.apiScheme}://${s}`}class $S{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Ut(this.auth,"network-request-failed")),FS.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function wo(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=Ut(t,e,r);return s.customData._tokenResponse=n,s}/**
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
 */async function BS(t,e){return ws(t,"POST","/v1/accounts:delete",e)}async function L_(t,e){return ws(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Zs(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function jS(t,e=!1){const n=Ge(t),r=await n.getIdToken(e),s=ah(r);Y(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Zs(Jc(s.auth_time)),issuedAtTime:Zs(Jc(s.iat)),expirationTime:Zs(Jc(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Jc(t){return Number(t)*1e3}function ah(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return $o("JWT malformed, contained fewer than 3 sections"),null;try{const s=E_(n);return s?JSON.parse(s):($o("Failed to decode base64 JWT payload"),null)}catch(s){return $o("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Wf(t){const e=ah(t);return Y(e,"internal-error"),Y(typeof e.exp<"u","internal-error"),Y(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function vi(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof wn&&qS(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function qS({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class HS{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class zl{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Zs(this.lastLoginAt),this.creationTime=Zs(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function ia(t){var e;const n=t.auth,r=await t.getIdToken(),s=await vi(t,L_(n,{idToken:r}));Y(s==null?void 0:s.users.length,n,"internal-error");const i=s.users[0];t._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?F_(i.providerUserInfo):[],a=KS(t.providerData,o),c=t.isAnonymous,l=!(t.email&&i.passwordHash)&&!(a!=null&&a.length),u=c?l:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new zl(i.createdAt,i.lastLoginAt),isAnonymous:u};Object.assign(t,h)}async function zS(t){const e=Ge(t);await ia(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function KS(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function F_(t){return t.map(e=>{var{providerId:n}=e,r=nh(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function WS(t,e){const n=await N_(t,{},async()=>{const r=Bi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=t.config,o=M_(t,s,"/v1/token",`key=${i}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",V_.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function GS(t,e){return ws(t,"POST","/v2/accounts:revokeToken",oh(t,e))}/**
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
 */class ts{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Y(e.idToken,"internal-error"),Y(typeof e.idToken<"u","internal-error"),Y(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Wf(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){Y(e.length!==0,"internal-error");const n=Wf(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(Y(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:i}=await WS(e,n);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:i}=n,o=new ts;return r&&(Y(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(Y(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(Y(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ts,this.toJSON())}_performRefresh(){return hn("not implemented")}}/**
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
 */function Pn(t,e){Y(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class dn{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,i=nh(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new HS(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new zl(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const n=await vi(this,this.stsTokenManager.getToken(this.auth,e));return Y(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return jS(this,e)}reload(){return zS(this)}_assign(e){this!==e&&(Y(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new dn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){Y(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await ia(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Jt(this.auth.app))return Promise.reject(Hn(this.auth));const e=await this.getIdToken();return await vi(this,BS(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,i,o,a,c,l,u;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(s=n.email)!==null&&s!==void 0?s:void 0,f=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,g=(o=n.photoURL)!==null&&o!==void 0?o:void 0,v=(a=n.tenantId)!==null&&a!==void 0?a:void 0,y=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,E=(l=n.createdAt)!==null&&l!==void 0?l:void 0,I=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:T,emailVerified:C,isAnonymous:$,providerData:M,stsTokenManager:ie}=n;Y(T&&ie,e,"internal-error");const W=ts.fromJSON(this.name,ie);Y(typeof T=="string",e,"internal-error"),Pn(h,e.name),Pn(d,e.name),Y(typeof C=="boolean",e,"internal-error"),Y(typeof $=="boolean",e,"internal-error"),Pn(f,e.name),Pn(g,e.name),Pn(v,e.name),Pn(y,e.name),Pn(E,e.name),Pn(I,e.name);const re=new dn({uid:T,auth:e,email:d,emailVerified:C,displayName:h,isAnonymous:$,photoURL:g,phoneNumber:f,tenantId:v,stsTokenManager:W,createdAt:E,lastLoginAt:I});return M&&Array.isArray(M)&&(re.providerData=M.map(le=>Object.assign({},le))),y&&(re._redirectEventId=y),re}static async _fromIdTokenResponse(e,n,r=!1){const s=new ts;s.updateFromServerResponse(n);const i=new dn({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await ia(i),i}static async _fromGetAccountInfoResponse(e,n,r){const s=n.users[0];Y(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?F_(s.providerUserInfo):[],o=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),a=new ts;a.updateFromIdToken(r);const c=new dn({uid:s.localId,auth:e,stsTokenManager:a,isAnonymous:o}),l={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new zl(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(c,l),c}}/**
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
 */const Gf=new Map;function fn(t){yn(t instanceof Function,"Expected a class definition");let e=Gf.get(t);return e?(yn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Gf.set(t,e),e)}/**
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
 */class U_{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}U_.type="NONE";const Qf=U_;/**
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
 */function Bo(t,e,n){return`firebase:${t}:${e}:${n}`}class ns{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Bo(this.userKey,s.apiKey,i),this.fullPersistenceKey=Bo("persistence",s.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?dn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new ns(fn(Qf),e,r);const s=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let i=s[0]||fn(Qf);const o=Bo(r,e.config.apiKey,e.name);let a=null;for(const l of n)try{const u=await l._get(o);if(u){const h=dn._fromJSON(e,u);l!==i&&(a=h),i=l;break}}catch{}const c=s.filter(l=>l._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new ns(i,e,r):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==i)try{await l._remove(o)}catch{}})),new ns(i,e,r))}}/**
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
 */function Yf(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(j_(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if($_(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(H_(e))return"Blackberry";if(z_(e))return"Webos";if(ch(e))return"Safari";if((e.includes("chrome/")||B_(e))&&!e.includes("edge/"))return"Chrome";if(q_(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function $_(t=je()){return/firefox\//i.test(t)}function ch(t=je()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function B_(t=je()){return/crios\//i.test(t)}function j_(t=je()){return/iemobile/i.test(t)}function q_(t=je()){return/android/i.test(t)}function H_(t=je()){return/blackberry/i.test(t)}function z_(t=je()){return/webos/i.test(t)}function qa(t=je()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function QS(t=je()){var e;return qa(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function YS(){return _R()&&document.documentMode===10}function K_(t=je()){return qa(t)||q_(t)||z_(t)||H_(t)||/windows phone/i.test(t)||j_(t)}function JS(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function W_(t,e=[]){let n;switch(t){case"Browser":n=Yf(je());break;case"Worker":n=`${Yf(je())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ts}/${r}`}/**
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
 */class XS{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function ZS(t,e={}){return ws(t,"GET","/v2/passwordPolicy",oh(t,e))}/**
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
 */const eP=6;class tP{constructor(e){var n,r,s,i;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:eP,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,s,i,o,a;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(n=c.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(s=c.containsLowercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(i=c.containsUppercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(o=c.containsNumericCharacter)!==null&&o!==void 0?o:!0),c.isValid&&(c.isValid=(a=c.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),c}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),s&&(n.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class nP{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Jf(this),this.idTokenSubscription=new Jf(this),this.beforeStateQueue=new XS(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=k_,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=fn(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await ns.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await L_(this,{idToken:e}),r=await dn._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Jt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return Y(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await ia(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=MS()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Jt(this.app))return Promise.reject(Hn(this));const n=e?Ge(e):null;return n&&Y(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&Y(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Jt(this.app)?Promise.reject(Hn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Jt(this.app)?Promise.reject(Hn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(fn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await ZS(this),n=new tP(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new $i("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await GS(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&fn(e)||this._popupRedirectResolver;Y(n,this,"argument-error"),this.redirectPersistenceManager=await ns.create(this,[fn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(Y(a,this,"internal-error"),a.then(()=>{o||i(this.currentUser)}),typeof n=="function"){const c=e.addObserver(n,r,s);return()=>{o=!0,c()}}else{const c=e.addObserver(n);return()=>{o=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Y(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=W_(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&DS(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function qi(t){return Ge(t)}class Jf{constructor(e){this.auth=e,this.observer=null,this.addObserver=AR(n=>this.observer=n)}get next(){return Y(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let lh={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function rP(t){lh=t}function sP(t){return lh.loadJS(t)}function iP(){return lh.gapiScript}function oP(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
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
 */function aP(t,e){const n=th(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),i=n.getOptions();if(na(i,e??{}))return s;on(s,"already-initialized")}return n.initialize({options:e})}function cP(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(fn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function lP(t,e,n){const r=qi(t);Y(r._canInitEmulator,r,"emulator-config-failed"),Y(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!!(n!=null&&n.disableWarnings),i=G_(e),{host:o,port:a}=uP(e),c=a===null?"":`:${a}`;r.config.emulator={url:`${i}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||hP()}function G_(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function uP(t){const e=G_(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Xf(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:Xf(o)}}}function Xf(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function hP(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Q_{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return hn("not implemented")}_getIdTokenResponse(e){return hn("not implemented")}_linkToIdToken(e,n){return hn("not implemented")}_getReauthenticationResolver(e){return hn("not implemented")}}/**
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
 */async function rs(t,e){return US(t,"POST","/v1/accounts:signInWithIdp",oh(t,e))}/**
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
 */const dP="http://localhost";class Cr extends Q_{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Cr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):on("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,i=nh(n,["providerId","signInMethod"]);if(!r||!s)return null;const o=new Cr(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return rs(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,rs(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,rs(e,n)}buildRequest(){const e={requestUri:dP,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Bi(n)}return e}}/**
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
 */class Ha{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Hi extends Ha{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Vn extends Hi{constructor(){super("facebook.com")}static credential(e){return Cr._fromParams({providerId:Vn.PROVIDER_ID,signInMethod:Vn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Vn.credentialFromTaggedObject(e)}static credentialFromError(e){return Vn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Vn.credential(e.oauthAccessToken)}catch{return null}}}Vn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Vn.PROVIDER_ID="facebook.com";/**
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
 */class Nn extends Hi{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Cr._fromParams({providerId:Nn.PROVIDER_ID,signInMethod:Nn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Nn.credentialFromTaggedObject(e)}static credentialFromError(e){return Nn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Nn.credential(n,r)}catch{return null}}}Nn.GOOGLE_SIGN_IN_METHOD="google.com";Nn.PROVIDER_ID="google.com";/**
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
 */class Qt extends Hi{constructor(){super("github.com")}static credential(e){return Cr._fromParams({providerId:Qt.PROVIDER_ID,signInMethod:Qt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Qt.credentialFromTaggedObject(e)}static credentialFromError(e){return Qt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Qt.credential(e.oauthAccessToken)}catch{return null}}}Qt.GITHUB_SIGN_IN_METHOD="github.com";Qt.PROVIDER_ID="github.com";/**
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
 */class Mn extends Hi{constructor(){super("twitter.com")}static credential(e,n){return Cr._fromParams({providerId:Mn.PROVIDER_ID,signInMethod:Mn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Mn.credentialFromTaggedObject(e)}static credentialFromError(e){return Mn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Mn.credential(n,r)}catch{return null}}}Mn.TWITTER_SIGN_IN_METHOD="twitter.com";Mn.PROVIDER_ID="twitter.com";/**
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
 */class us{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const i=await dn._fromIdTokenResponse(e,r,s),o=Zf(r);return new us({user:i,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=Zf(r);return new us({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function Zf(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class oa extends wn{constructor(e,n,r,s){var i;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,oa.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new oa(e,n,r,s)}}function Y_(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?oa._fromErrorAndOperation(t,i,e,r):i})}async function fP(t,e,n=!1){const r=await vi(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return us._forOperation(t,"link",r)}/**
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
 */async function pP(t,e,n=!1){const{auth:r}=t;if(Jt(r.app))return Promise.reject(Hn(r));const s="reauthenticate";try{const i=await vi(t,Y_(r,s,e,t),n);Y(i.idToken,r,"internal-error");const o=ah(i.idToken);Y(o,r,"internal-error");const{sub:a}=o;return Y(t.uid===a,r,"user-mismatch"),us._forOperation(t,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&on(r,"user-mismatch"),i}}/**
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
 */async function mP(t,e,n=!1){if(Jt(t.app))return Promise.reject(Hn(t));const r="signIn",s=await Y_(t,r,e),i=await us._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(i.user),i}function gP(t,e,n,r){return Ge(t).onIdTokenChanged(e,n,r)}function _P(t,e,n){return Ge(t).beforeAuthStateChanged(e,n)}function zi(t,e,n,r){return Ge(t).onAuthStateChanged(e,n,r)}function yP(t){return Ge(t).signOut()}const aa="__sak";/**
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
 */class J_{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(aa,"1"),this.storage.removeItem(aa),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function vP(){const t=je();return ch(t)||qa(t)}const EP=1e3,TP=10;class X_ extends J_{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=vP()&&JS(),this.fallbackToPolling=K_(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const s=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);YS()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,TP):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},EP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}X_.type="LOCAL";const wP=X_;/**
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
 */class Z_ extends J_{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Z_.type="SESSION";const ey=Z_;/**
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
 */function IP(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class za{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new za(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:i}=n.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async l=>l(n.origin,i)),c=await IP(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}za.receivers=[];/**
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
 */function uh(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class AP{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const l=uh("",20);s.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(h){const d=h;if(d.data.eventId===l)switch(d.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(d.data.response);break;default:clearTimeout(u),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function en(){return window}function bP(t){en().location.href=t}/**
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
 */function ty(){return typeof en().WorkerGlobalScope<"u"&&typeof en().importScripts=="function"}async function RP(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function SP(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function PP(){return ty()?self:null}/**
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
 */const ny="firebaseLocalStorageDb",CP=1,ca="firebaseLocalStorage",ry="fbase_key";class Ki{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Ka(t,e){return t.transaction([ca],e?"readwrite":"readonly").objectStore(ca)}function xP(){const t=indexedDB.deleteDatabase(ny);return new Ki(t).toPromise()}function Kl(){const t=indexedDB.open(ny,CP);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(ca,{keyPath:ry})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(ca)?e(r):(r.close(),await xP(),e(await Kl()))})})}async function ep(t,e,n){const r=Ka(t,!0).put({[ry]:e,value:n});return new Ki(r).toPromise()}async function OP(t,e){const n=Ka(t,!1).get(e),r=await new Ki(n).toPromise();return r===void 0?null:r.value}function tp(t,e){const n=Ka(t,!0).delete(e);return new Ki(n).toPromise()}const kP=800,DP=3;class sy{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Kl(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>DP)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return ty()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=za._getInstance(PP()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await RP(),!this.activeServiceWorker)return;this.sender=new AP(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||SP()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Kl();return await ep(e,aa,"1"),await tp(e,aa),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>ep(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>OP(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>tp(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Ka(s,!1).getAll();return new Ki(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),kP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}sy.type="LOCAL";const VP=sy;new ji(3e4,6e4);/**
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
 */function hh(t,e){return e?fn(e):(Y(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class dh extends Q_{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return rs(e,this._buildIdpRequest())}_linkToIdToken(e,n){return rs(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return rs(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function NP(t){return mP(t.auth,new dh(t),t.bypassAuthState)}function MP(t){const{auth:e,user:n}=t;return Y(n,e,"internal-error"),pP(n,new dh(t),t.bypassAuthState)}async function LP(t){const{auth:e,user:n}=t;return Y(n,e,"internal-error"),fP(n,new dh(t),t.bypassAuthState)}/**
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
 */class iy{constructor(e,n,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return NP;case"linkViaPopup":case"linkViaRedirect":return LP;case"reauthViaPopup":case"reauthViaRedirect":return MP;default:on(this.auth,"internal-error")}}resolve(e){yn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){yn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const FP=new ji(2e3,1e4);async function oy(t,e,n){if(Jt(t.app))return Promise.reject(Ut(t,"operation-not-supported-in-this-environment"));const r=qi(t);D_(t,e,Ha);const s=hh(r,n);return new _r(r,"signInViaPopup",e,s).executeNotNull()}class _r extends iy{constructor(e,n,r,s,i){super(e,n,s,i),this.provider=r,this.authWindow=null,this.pollId=null,_r.currentPopupAction&&_r.currentPopupAction.cancel(),_r.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Y(e,this.auth,"internal-error"),e}async onExecution(){yn(this.filter.length===1,"Popup operations only handle one event");const e=uh();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Ut(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Ut(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,_r.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ut(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,FP.get())};e()}}_r.currentPopupAction=null;/**
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
 */const UP="pendingRedirect",jo=new Map;class $P extends iy{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=jo.get(this.auth._key());if(!e){try{const r=await BP(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}jo.set(this.auth._key(),e)}return this.bypassAuthState||jo.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function BP(t,e){const n=cy(e),r=ay(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}async function jP(t,e){return ay(t)._set(cy(e),"true")}function qP(t,e){jo.set(t._key(),e)}function ay(t){return fn(t._redirectPersistence)}function cy(t){return Bo(UP,t.config.apiKey,t.name)}/**
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
 */function HP(t,e,n){return zP(t,e,n)}async function zP(t,e,n){if(Jt(t.app))return Promise.reject(Hn(t));const r=qi(t);D_(t,e,Ha),await r._initializationPromise;const s=hh(r,n);return await jP(s,r),s._openRedirect(r,e,"signInViaRedirect")}async function KP(t,e,n=!1){if(Jt(t.app))return Promise.reject(Hn(t));const r=qi(t),s=hh(r,e),o=await new $P(r,s,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
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
 */const WP=10*60*1e3;class GP{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!QP(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!ly(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Ut(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=WP&&this.cachedEventUids.clear(),this.cachedEventUids.has(np(e))}saveEventToCache(e){this.cachedEventUids.add(np(e)),this.lastProcessedEventTime=Date.now()}}function np(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function ly({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function QP(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return ly(t);default:return!1}}/**
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
 */async function YP(t,e={}){return ws(t,"GET","/v1/projects",e)}/**
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
 */const JP=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,XP=/^https?/;async function ZP(t){if(t.config.emulator)return;const{authorizedDomains:e}=await YP(t);for(const n of e)try{if(e1(n))return}catch{}on(t,"unauthorized-domain")}function e1(t){const e=Hl(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!XP.test(n))return!1;if(JP.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const t1=new ji(3e4,6e4);function rp(){const t=en().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function n1(t){return new Promise((e,n)=>{var r,s,i;function o(){rp(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{rp(),n(Ut(t,"network-request-failed"))},timeout:t1.get()})}if(!((s=(r=en().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=en().gapi)===null||i===void 0)&&i.load)o();else{const a=oP("iframefcb");return en()[a]=()=>{gapi.load?o():n(Ut(t,"network-request-failed"))},sP(`${iP()}?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw qo=null,e})}let qo=null;function r1(t){return qo=qo||n1(t),qo}/**
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
 */const s1=new ji(5e3,15e3),i1="__/auth/iframe",o1="emulator/auth/iframe",a1={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},c1=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function l1(t){const e=t.config;Y(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?ih(e,o1):`https://${t.config.authDomain}/${i1}`,r={apiKey:e.apiKey,appName:t.name,v:Ts},s=c1.get(t.config.apiHost);s&&(r.eid=s);const i=t._getFrameworks();return i.length&&(r.fw=i.join(",")),`${n}?${Bi(r).slice(1)}`}async function u1(t){const e=await r1(t),n=en().gapi;return Y(n,t,"internal-error"),e.open({where:document.body,url:l1(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:a1,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=Ut(t,"network-request-failed"),a=en().setTimeout(()=>{i(o)},s1.get());function c(){en().clearTimeout(a),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const h1={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},d1=500,f1=600,p1="_blank",m1="http://localhost";class sp{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function g1(t,e,n,r=d1,s=f1){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},h1),{width:r.toString(),height:s.toString(),top:i,left:o}),l=je().toLowerCase();n&&(a=B_(l)?p1:n),$_(l)&&(e=e||m1,c.scrollbars="yes");const u=Object.entries(c).reduce((d,[f,g])=>`${d}${f}=${g},`,"");if(QS(l)&&a!=="_self")return _1(e||"",a),new sp(null);const h=window.open(e||"",a,u);Y(h,t,"popup-blocked");try{h.focus()}catch{}return new sp(h)}function _1(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const y1="__/auth/handler",v1="emulator/auth/handler",E1=encodeURIComponent("fac");async function ip(t,e,n,r,s,i){Y(t.config.authDomain,t,"auth-domain-config-required"),Y(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Ts,eventId:s};if(e instanceof Ha){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",IR(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,h]of Object.entries(i||{}))o[u]=h}if(e instanceof Hi){const u=e.getScopes().filter(h=>h!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const c=await t._getAppCheckToken(),l=c?`#${E1}=${encodeURIComponent(c)}`:"";return`${T1(t)}?${Bi(a).slice(1)}${l}`}function T1({config:t}){return t.emulator?ih(t,v1):`https://${t.authDomain}/${y1}`}/**
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
 */const Xc="webStorageSupport";class w1{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=ey,this._completeRedirectFn=KP,this._overrideRedirectResult=qP}async _openPopup(e,n,r,s){var i;yn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=await ip(e,n,r,Hl(),s);return g1(e,o,uh())}async _openRedirect(e,n,r,s){await this._originValidation(e);const i=await ip(e,n,r,Hl(),s);return bP(i),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:i}=this.eventManagers[n];return s?Promise.resolve(s):(yn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await u1(e),r=new GP(e);return n.register("authEvent",s=>(Y(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Xc,{type:Xc},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Xc];o!==void 0&&n(!!o),on(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=ZP(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return K_()||ch()||qa()}}const I1=w1;var op="@firebase/auth",ap="1.7.1";/**
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
 */class A1{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){Y(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function b1(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function R1(t){ls(new Sr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;Y(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:W_(t)},l=new nP(r,s,i,c);return cP(l,n),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),ls(new Sr("auth-internal",e=>{const n=qi(e.getProvider("auth").getImmediate());return(r=>new A1(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),qn(op,ap,b1(t)),qn(op,ap,"esm2017")}/**
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
 */const S1=5*60,P1=I_("authIdTokenMaxAge")||S1;let cp=null;const C1=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>P1)return;const s=n==null?void 0:n.token;cp!==s&&(cp=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function hs(t=P_()){const e=th(t,"auth");if(e.isInitialized())return e.getImmediate();const n=aP(t,{popupRedirectResolver:I1,persistence:[VP,wP,ey]}),r=I_("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const o=C1(i.toString());_P(n,o,()=>o(n.currentUser)),gP(n,a=>o(a))}}const s=T_("auth");return s&&lP(n,`http://${s}`),n}function x1(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}rP({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const i=Ut("internal-error");i.customData=s,n(i)},r.type="text/javascript",r.charset="UTF-8",x1().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});R1("Browser");const O1={class:"text-[--main-white] flex justify-between pt-8 md:pt-14 md:px-[7%]"},k1={class:"flex gap-2 justify-center items-center"},D1=D("i",{class:"fa-regular fa-face-surprise text-yellow-400 text-lg duration-100 animate-bounce"},null,-1),V1=["src"],N1=D("i",{class:"fa-brands fa-github"},null,-1),M1=D("h2",null,"Login",-1),L1=[N1,M1],F1={key:0,class:"fixed opacity"},U1={class:"bg-[rgba(22,20,22,255)] border border-[#53494954] p-2 flex flex-col gap-2 w-64 rounded-lg text-base font-medium text-[--text2-color]"},$1=D("div",null,"Create",-1),B1=D("i",{class:"fa-solid fa-plus text-[#999595]"},null,-1),j1={class:"flex flex-col gap-2"},q1=D("div",{class:"border border-[#53494954]"},null,-1),H1=D("div",null,"Logout",-1),z1=D("i",{class:"fa-solid fa-unlock text-[#999595]"},null,-1),K1=[H1,z1],W1={__name:"Header",setup(t){const e=Ee(!1),n=Ee(!1),r=Ba(),s=hs();let i=[];Dt(()=>{zi(s,l=>{if(l){n.value=!0,l.displayName;let u=l.photoURL;i.value=u}else n.value=!1})});const o=async()=>{const l=new Qt;a()?await HP(s,l):await oy(s,l)},a=()=>{const l=navigator.userAgent.toLowerCase();return/android|iphone|ipad|ipod/.test(l)},c=()=>{yP(s).then(()=>{r.push("/")})};return(l,u)=>{const h=ME("motion-slide-top");return oe(),he("header",O1,[D("div",k1,[Oe(Ve(_i),{to:"/",class:"text-3xl font-bold"},{default:Zr(()=>[Mu("BestTakes")]),_:1}),D1]),n.value?(oe(),he("button",{key:0,onClick:u[0]||(u[0]=d=>e.value=!e.value),class:"rounded-full border-green-500 border-2"},[D("img",{src:Ve(i).value,alt:"",srcset:"",class:"w-14 rounded-full"},null,8,V1)])):(oe(),he("button",{key:1,onClick:o,class:"bg-transparent flex px-3 lg:px-5 py-2 duration-300 hover:bg-zinc-700 gap-2 justify-center items-center border rounded-md 2xl:text-[17px]"},L1)),Ns((oe(),ug(Fu,{name:"nav",class:"right-0 mt-16 px-[17%] z-10"},{default:Zr(()=>[e.value?(oe(),he("div",F1,[D("div",U1,[Oe(Ve(_i),{to:"/create",onClick:u[1]||(u[1]=d=>e.value=!e.value),class:"flex justify-between items-center gap-4 hover:bg-[#09090B] px-4 py-2 rounded-md"},{default:Zr(()=>[$1,B1]),_:1}),D("div",j1,[q1,n.value?(oe(),he("button",{key:0,to:"/create",onClick:u[2]||(u[2]=d=>(c(),e.value=!e.value)),class:"flex justify-between items-center gap-4 hover:bg-[#09090B] px-4 py-2 rounded-md"},K1)):Rr("",!0)])])])):Rr("",!0)]),_:1})),[[h]])])}}};var G1=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},N,fh=fh||{},X=G1||self;function Wa(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Wi(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function Q1(t){return Object.prototype.hasOwnProperty.call(t,Zc)&&t[Zc]||(t[Zc]=++Y1)}var Zc="closure_uid_"+(1e9*Math.random()>>>0),Y1=0;function J1(t,e,n){return t.call.apply(t.bind,arguments)}function X1(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var s=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(s,r),t.apply(e,s)}}return function(){return t.apply(e,arguments)}}function ut(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?ut=J1:ut=X1,ut.apply(null,arguments)}function Io(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function Ye(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(r,s,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[s].apply(r,o)}}function nr(){this.s=this.s,this.o=this.o}var Z1=0;nr.prototype.s=!1;nr.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),Z1!=0)&&Q1(this)};nr.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const uy=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function ph(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function lp(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(Wa(r)){const s=t.length||0,i=r.length||0;t.length=s+i;for(let o=0;o<i;o++)t[s+o]=r[o]}else t.push(r)}}function ht(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}ht.prototype.h=function(){this.defaultPrevented=!0};var eC=function(){if(!X.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{const n=()=>{};X.addEventListener("test",n,e),X.removeEventListener("test",n,e)}catch{}return t}();function Ei(t){return/^[\s\xa0]*$/.test(t)}function Ga(){var t=X.navigator;return t&&(t=t.userAgent)?t:""}function Yt(t){return Ga().indexOf(t)!=-1}function mh(t){return mh[" "](t),t}mh[" "]=function(){};function tC(t,e){var n=WC;return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e(t)}var nC=Yt("Opera"),ds=Yt("Trident")||Yt("MSIE"),hy=Yt("Edge"),Wl=hy||ds,dy=Yt("Gecko")&&!(Ga().toLowerCase().indexOf("webkit")!=-1&&!Yt("Edge"))&&!(Yt("Trident")||Yt("MSIE"))&&!Yt("Edge"),rC=Ga().toLowerCase().indexOf("webkit")!=-1&&!Yt("Edge");function fy(){var t=X.document;return t?t.documentMode:void 0}var Gl;e:{var el="",tl=function(){var t=Ga();if(dy)return/rv:([^\);]+)(\)|;)/.exec(t);if(hy)return/Edge\/([\d\.]+)/.exec(t);if(ds)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(rC)return/WebKit\/(\S+)/.exec(t);if(nC)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(tl&&(el=tl?tl[1]:""),ds){var nl=fy();if(nl!=null&&nl>parseFloat(el)){Gl=String(nl);break e}}Gl=el}var Ql;if(X.document&&ds){var up=fy();Ql=up||parseInt(Gl,10)||void 0}else Ql=void 0;var sC=Ql;function Ti(t,e){if(ht.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(dy){e:{try{mh(e.nodeName);var s=!0;break e}catch{}s=!1}s||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:iC[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Ti.$.h.call(this)}}Ye(Ti,ht);var iC={2:"touch",3:"pen",4:"mouse"};Ti.prototype.h=function(){Ti.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Gi="closure_listenable_"+(1e6*Math.random()|0),oC=0;function aC(t,e,n,r,s){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.la=s,this.key=++oC,this.fa=this.ia=!1}function Qa(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function gh(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function cC(t,e){for(const n in t)e.call(void 0,t[n],n,t)}function py(t){const e={};for(const n in t)e[n]=t[n];return e}const hp="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function my(t,e){let n,r;for(let s=1;s<arguments.length;s++){r=arguments[s];for(n in r)t[n]=r[n];for(let i=0;i<hp.length;i++)n=hp[i],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function Ya(t){this.src=t,this.g={},this.h=0}Ya.prototype.add=function(t,e,n,r,s){var i=t.toString();t=this.g[i],t||(t=this.g[i]=[],this.h++);var o=Jl(t,e,r,s);return-1<o?(e=t[o],n||(e.ia=!1)):(e=new aC(e,this.src,i,!!r,s),e.ia=n,t.push(e)),e};function Yl(t,e){var n=e.type;if(n in t.g){var r=t.g[n],s=uy(r,e),i;(i=0<=s)&&Array.prototype.splice.call(r,s,1),i&&(Qa(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Jl(t,e,n,r){for(var s=0;s<t.length;++s){var i=t[s];if(!i.fa&&i.listener==e&&i.capture==!!n&&i.la==r)return s}return-1}var _h="closure_lm_"+(1e6*Math.random()|0),rl={};function gy(t,e,n,r,s){if(r&&r.once)return yy(t,e,n,r,s);if(Array.isArray(e)){for(var i=0;i<e.length;i++)gy(t,e[i],n,r,s);return null}return n=Eh(n),t&&t[Gi]?t.O(e,n,Wi(r)?!!r.capture:!!r,s):_y(t,e,n,!1,r,s)}function _y(t,e,n,r,s,i){if(!e)throw Error("Invalid event type");var o=Wi(s)?!!s.capture:!!s,a=vh(t);if(a||(t[_h]=a=new Ya(t)),n=a.add(e,n,r,o,i),n.proxy)return n;if(r=lC(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)eC||(s=o),s===void 0&&(s=!1),t.addEventListener(e.toString(),r,s);else if(t.attachEvent)t.attachEvent(Ey(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function lC(){function t(n){return e.call(t.src,t.listener,n)}const e=uC;return t}function yy(t,e,n,r,s){if(Array.isArray(e)){for(var i=0;i<e.length;i++)yy(t,e[i],n,r,s);return null}return n=Eh(n),t&&t[Gi]?t.P(e,n,Wi(r)?!!r.capture:!!r,s):_y(t,e,n,!0,r,s)}function vy(t,e,n,r,s){if(Array.isArray(e))for(var i=0;i<e.length;i++)vy(t,e[i],n,r,s);else r=Wi(r)?!!r.capture:!!r,n=Eh(n),t&&t[Gi]?(t=t.i,e=String(e).toString(),e in t.g&&(i=t.g[e],n=Jl(i,n,r,s),-1<n&&(Qa(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete t.g[e],t.h--)))):t&&(t=vh(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Jl(e,n,r,s)),(n=-1<t?e[t]:null)&&yh(n))}function yh(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[Gi])Yl(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(Ey(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=vh(e))?(Yl(n,t),n.h==0&&(n.src=null,e[_h]=null)):Qa(t)}}}function Ey(t){return t in rl?rl[t]:rl[t]="on"+t}function uC(t,e){if(t.fa)t=!0;else{e=new Ti(e,this);var n=t.listener,r=t.la||t.src;t.ia&&yh(t),t=n.call(r,e)}return t}function vh(t){return t=t[_h],t instanceof Ya?t:null}var sl="__closure_events_fn_"+(1e9*Math.random()>>>0);function Eh(t){return typeof t=="function"?t:(t[sl]||(t[sl]=function(e){return t.handleEvent(e)}),t[sl])}function Qe(){nr.call(this),this.i=new Ya(this),this.S=this,this.J=null}Ye(Qe,nr);Qe.prototype[Gi]=!0;Qe.prototype.removeEventListener=function(t,e,n,r){vy(this,t,e,n,r)};function nt(t,e){var n,r=t.J;if(r)for(n=[];r;r=r.J)n.push(r);if(t=t.S,r=e.type||e,typeof e=="string")e=new ht(e,t);else if(e instanceof ht)e.target=e.target||t;else{var s=e;e=new ht(r,t),my(e,s)}if(s=!0,n)for(var i=n.length-1;0<=i;i--){var o=e.g=n[i];s=Ao(o,r,!0,e)&&s}if(o=e.g=t,s=Ao(o,r,!0,e)&&s,s=Ao(o,r,!1,e)&&s,n)for(i=0;i<n.length;i++)o=e.g=n[i],s=Ao(o,r,!1,e)&&s}Qe.prototype.N=function(){if(Qe.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)Qa(n[r]);delete t.g[e],t.h--}}this.J=null};Qe.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};Qe.prototype.P=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function Ao(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var s=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.fa&&o.capture==n){var a=o.listener,c=o.la||o.src;o.ia&&Yl(t.i,o),s=a.call(c,r)!==!1&&s}}return s&&!r.defaultPrevented}var Th=X.JSON.stringify;class hC{constructor(e,n){this.i=e,this.j=n,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}function dC(){var t=wh;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class fC{constructor(){this.h=this.g=null}add(e,n){const r=Ty.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var Ty=new hC(()=>new pC,t=>t.reset());class pC{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function mC(t){var e=1;t=t.split(":");const n=[];for(;0<e&&t.length;)n.push(t.shift()),e--;return t.length&&n.push(t.join(":")),n}function gC(t){X.setTimeout(()=>{throw t},0)}let wi,Ii=!1,wh=new fC,wy=()=>{const t=X.Promise.resolve(void 0);wi=()=>{t.then(_C)}};var _C=()=>{for(var t;t=dC();){try{t.h.call(t.g)}catch(n){gC(n)}var e=Ty;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Ii=!1};function Ja(t,e){Qe.call(this),this.h=t||1,this.g=e||X,this.j=ut(this.qb,this),this.l=Date.now()}Ye(Ja,Qe);N=Ja.prototype;N.ga=!1;N.T=null;N.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),nt(this,"tick"),this.ga&&(Ih(this),this.start()))}};N.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Ih(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}N.N=function(){Ja.$.N.call(this),Ih(this),delete this.g};function Ah(t,e,n){if(typeof t=="function")n&&(t=ut(t,n));else if(t&&typeof t.handleEvent=="function")t=ut(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:X.setTimeout(t,e||0)}function Iy(t){t.g=Ah(()=>{t.g=null,t.i&&(t.i=!1,Iy(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class yC extends nr{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Iy(this)}N(){super.N(),this.g&&(X.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ai(t){nr.call(this),this.h=t,this.g={}}Ye(Ai,nr);var dp=[];function Ay(t,e,n,r){Array.isArray(n)||(n&&(dp[0]=n.toString()),n=dp);for(var s=0;s<n.length;s++){var i=gy(e,n[s],r||t.handleEvent,!1,t.h||t);if(!i)break;t.g[i.key]=i}}function by(t){gh(t.g,function(e,n){this.g.hasOwnProperty(n)&&yh(e)},t),t.g={}}Ai.prototype.N=function(){Ai.$.N.call(this),by(this)};Ai.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Xa(){this.g=!0}Xa.prototype.Ea=function(){this.g=!1};function vC(t,e,n,r,s,i){t.info(function(){if(t.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var l=a[c].split("=");if(1<l.length){var u=l[0];l=l[1];var h=u.split("_");o=2<=h.length&&h[1]=="type"?o+(u+"="+l+"&"):o+(u+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+r+") [attempt "+s+"]: "+e+`
`+n+`
`+o})}function EC(t,e,n,r,s,i,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+s+"]: "+e+`
`+n+`
`+i+" "+o})}function Qr(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+wC(t,n)+(r?" "+r:"")})}function TC(t,e){t.info(function(){return"TIMEOUT: "+e})}Xa.prototype.info=function(){};function wC(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var s=r[1];if(Array.isArray(s)&&!(1>s.length)){var i=s[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<s.length;o++)s[o]=""}}}}return Th(n)}catch{return e}}var Mr={},fp=null;function Za(){return fp=fp||new Qe}Mr.Ta="serverreachability";function Ry(t){ht.call(this,Mr.Ta,t)}Ye(Ry,ht);function bi(t){const e=Za();nt(e,new Ry(e))}Mr.STAT_EVENT="statevent";function Sy(t,e){ht.call(this,Mr.STAT_EVENT,t),this.stat=e}Ye(Sy,ht);function mt(t){const e=Za();nt(e,new Sy(e,t))}Mr.Ua="timingevent";function Py(t,e){ht.call(this,Mr.Ua,t),this.size=e}Ye(Py,ht);function Qi(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return X.setTimeout(function(){t()},e)}var ec={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},Cy={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function bh(){}bh.prototype.h=null;function pp(t){return t.h||(t.h=t.i())}function xy(){}var Yi={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Rh(){ht.call(this,"d")}Ye(Rh,ht);function Sh(){ht.call(this,"c")}Ye(Sh,ht);var Xl;function tc(){}Ye(tc,bh);tc.prototype.g=function(){return new XMLHttpRequest};tc.prototype.i=function(){return{}};Xl=new tc;function Ji(t,e,n,r){this.l=t,this.j=e,this.m=n,this.W=r||1,this.U=new Ai(this),this.P=IC,t=Wl?125:void 0,this.V=new Ja(t),this.I=null,this.i=!1,this.u=this.B=this.A=this.L=this.G=this.Y=this.C=null,this.F=[],this.g=null,this.o=0,this.s=this.v=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new Oy}function Oy(){this.i=null,this.g="",this.h=!1}var IC=45e3,ky={},Zl={};N=Ji.prototype;N.setTimeout=function(t){this.P=t};function eu(t,e,n){t.L=1,t.A=rc(vn(e)),t.u=n,t.S=!0,Dy(t,null)}function Dy(t,e){t.G=Date.now(),Xi(t),t.B=vn(t.A);var n=t.B,r=t.W;Array.isArray(r)||(r=[String(r)]),By(n.i,"t",r),t.o=0,n=t.l.J,t.h=new Oy,t.g=cv(t.l,n?e:null,!t.u),0<t.O&&(t.M=new yC(ut(t.Pa,t,t.g),t.O)),Ay(t.U,t.g,"readystatechange",t.nb),e=t.I?py(t.I):{},t.u?(t.v||(t.v="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.B,t.v,t.u,e)):(t.v="GET",t.g.ha(t.B,t.v,null,e)),bi(),vC(t.j,t.v,t.B,t.m,t.W,t.u)}N.nb=function(t){t=t.target;const e=this.M;e&&Xt(t)==3?e.l():this.Pa(t)};N.Pa=function(t){try{if(t==this.g)e:{const u=Xt(this.g);var e=this.g.Ia();const h=this.g.da();if(!(3>u)&&(u!=3||Wl||this.g&&(this.h.h||this.g.ja()||yp(this.g)))){this.J||u!=4||e==7||(e==8||0>=h?bi(3):bi(2)),nc(this);var n=this.g.da();this.ca=n;t:if(Vy(this)){var r=yp(this.g);t="";var s=r.length,i=Xt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){yr(this),ei(this);var o="";break t}this.h.i=new X.TextDecoder}for(e=0;e<s;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:i&&e==s-1});r.length=0,this.h.g+=t,this.o=0,o=this.h.g}else o=this.g.ja();if(this.i=n==200,EC(this.j,this.v,this.B,this.m,this.W,u,n),this.i){if(this.aa&&!this.K){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Ei(a)){var l=a;break t}}l=null}if(n=l)Qr(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,tu(this,n);else{this.i=!1,this.s=3,mt(12),yr(this),ei(this);break e}}this.S?(Ny(this,u,o),Wl&&this.i&&u==3&&(Ay(this.U,this.V,"tick",this.mb),this.V.start())):(Qr(this.j,this.m,o,null),tu(this,o)),u==4&&yr(this),this.i&&!this.J&&(u==4?sv(this.l,this):(this.i=!1,Xi(this)))}else HC(this.g),n==400&&0<o.indexOf("Unknown SID")?(this.s=3,mt(12)):(this.s=0,mt(13)),yr(this),ei(this)}}}catch{}finally{}};function Vy(t){return t.g?t.v=="GET"&&t.L!=2&&t.l.Ha:!1}function Ny(t,e,n){let r=!0,s;for(;!t.J&&t.o<n.length;)if(s=AC(t,n),s==Zl){e==4&&(t.s=4,mt(14),r=!1),Qr(t.j,t.m,null,"[Incomplete Response]");break}else if(s==ky){t.s=4,mt(15),Qr(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else Qr(t.j,t.m,s,null),tu(t,s);Vy(t)&&t.o!=0&&(t.h.g=t.h.g.slice(t.o),t.o=0),e!=4||n.length!=0||t.h.h||(t.s=1,mt(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.ba&&(t.ba=!0,e=t.l,e.g==t&&e.ca&&!e.M&&(e.l.info("Great, no buffering proxy detected. Bytes received: "+n.length),Dh(e),e.M=!0,mt(11))):(Qr(t.j,t.m,n,"[Invalid Chunked Response]"),yr(t),ei(t))}N.mb=function(){if(this.g){var t=Xt(this.g),e=this.g.ja();this.o<e.length&&(nc(this),Ny(this,t,e),this.i&&t!=4&&Xi(this))}};function AC(t,e){var n=t.o,r=e.indexOf(`
`,n);return r==-1?Zl:(n=Number(e.substring(n,r)),isNaN(n)?ky:(r+=1,r+n>e.length?Zl:(e=e.slice(r,r+n),t.o=r+n,e)))}N.cancel=function(){this.J=!0,yr(this)};function Xi(t){t.Y=Date.now()+t.P,My(t,t.P)}function My(t,e){if(t.C!=null)throw Error("WatchDog timer not null");t.C=Qi(ut(t.lb,t),e)}function nc(t){t.C&&(X.clearTimeout(t.C),t.C=null)}N.lb=function(){this.C=null;const t=Date.now();0<=t-this.Y?(TC(this.j,this.B),this.L!=2&&(bi(),mt(17)),yr(this),this.s=2,ei(this)):My(this,this.Y-t)};function ei(t){t.l.H==0||t.J||sv(t.l,t)}function yr(t){nc(t);var e=t.M;e&&typeof e.sa=="function"&&e.sa(),t.M=null,Ih(t.V),by(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.sa())}function tu(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||nu(n.i,t))){if(!t.K&&nu(n.i,t)&&n.H==3){try{var r=n.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var s=r;if(s[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)ha(n),ac(n);else break e;kh(n),mt(18)}}else n.Fa=s[1],0<n.Fa-n.V&&37500>s[2]&&n.G&&n.A==0&&!n.v&&(n.v=Qi(ut(n.ib,n),6e3));if(1>=Hy(n.i)&&n.oa){try{n.oa()}catch{}n.oa=void 0}}else vr(n,11)}else if((t.K||n.g==t)&&ha(n),!Ei(e))for(s=n.Ja.g.parse(e),e=0;e<s.length;e++){let l=s[e];if(n.V=l[0],l=l[1],n.H==2)if(l[0]=="c"){n.K=l[1],n.pa=l[2];const u=l[3];u!=null&&(n.ra=u,n.l.info("VER="+n.ra));const h=l[4];h!=null&&(n.Ga=h,n.l.info("SVER="+n.Ga));const d=l[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,n.L=r,n.l.info("backChannelRequestTimeoutMs_="+r)),r=n;const f=t.g;if(f){const g=f.g?f.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(g){var i=r.i;i.g||g.indexOf("spdy")==-1&&g.indexOf("quic")==-1&&g.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(Ph(i,i.h),i.h=null))}if(r.F){const v=f.g?f.g.getResponseHeader("X-HTTP-Session-Id"):null;v&&(r.Da=v,Re(r.I,r.F,v))}}n.H=3,n.h&&n.h.Ba(),n.ca&&(n.S=Date.now()-t.G,n.l.info("Handshake RTT: "+n.S+"ms")),r=n;var o=t;if(r.wa=av(r,r.J?r.pa:null,r.Y),o.K){zy(r.i,o);var a=o,c=r.L;c&&a.setTimeout(c),a.C&&(nc(a),Xi(a)),r.g=o}else nv(r);0<n.j.length&&cc(n)}else l[0]!="stop"&&l[0]!="close"||vr(n,7);else n.H==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?vr(n,7):Oh(n):l[0]!="noop"&&n.h&&n.h.Aa(l),n.A=0)}}bi(4)}catch{}}function bC(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(Wa(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function RC(t){if(t.ta&&typeof t.ta=="function")return t.ta();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(Wa(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function Ly(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(Wa(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=RC(t),r=bC(t),s=r.length,i=0;i<s;i++)e.call(void 0,r[i],n&&n[i],t)}var Fy=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function SC(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),s=null;if(0<=r){var i=t[n].substring(0,r);s=t[n].substring(r+1)}else i=t[n];e(i,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function Ar(t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Ar){this.h=t.h,la(this,t.j),this.s=t.s,this.g=t.g,ua(this,t.m),this.l=t.l;var e=t.i,n=new Ri;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),mp(this,n),this.o=t.o}else t&&(e=String(t).match(Fy))?(this.h=!1,la(this,e[1]||"",!0),this.s=Ls(e[2]||""),this.g=Ls(e[3]||"",!0),ua(this,e[4]),this.l=Ls(e[5]||"",!0),mp(this,e[6]||"",!0),this.o=Ls(e[7]||"")):(this.h=!1,this.i=new Ri(null,this.h))}Ar.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Fs(e,gp,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(Fs(e,gp,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(Fs(n,n.charAt(0)=="/"?xC:CC,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Fs(n,kC)),t.join("")};function vn(t){return new Ar(t)}function la(t,e,n){t.j=n?Ls(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function ua(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function mp(t,e,n){e instanceof Ri?(t.i=e,DC(t.i,t.h)):(n||(e=Fs(e,OC)),t.i=new Ri(e,t.h))}function Re(t,e,n){t.i.set(e,n)}function rc(t){return Re(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Ls(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Fs(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,PC),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function PC(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var gp=/[#\/\?@]/g,CC=/[#\?:]/g,xC=/[#\?]/g,OC=/[#\?@]/g,kC=/#/g;function Ri(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function rr(t){t.g||(t.g=new Map,t.h=0,t.i&&SC(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}N=Ri.prototype;N.add=function(t,e){rr(this),this.i=null,t=Is(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function Uy(t,e){rr(t),e=Is(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function $y(t,e){return rr(t),e=Is(t,e),t.g.has(e)}N.forEach=function(t,e){rr(this),this.g.forEach(function(n,r){n.forEach(function(s){t.call(e,s,r,this)},this)},this)};N.ta=function(){rr(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const s=t[r];for(let i=0;i<s.length;i++)n.push(e[r])}return n};N.Z=function(t){rr(this);let e=[];if(typeof t=="string")$y(this,t)&&(e=e.concat(this.g.get(Is(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};N.set=function(t,e){return rr(this),this.i=null,t=Is(this,t),$y(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};N.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function By(t,e,n){Uy(t,e),0<n.length&&(t.i=null,t.g.set(Is(t,e),ph(n)),t.h+=n.length)}N.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const i=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var s=i;o[r]!==""&&(s+="="+encodeURIComponent(String(o[r]))),t.push(s)}}return this.i=t.join("&")};function Is(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function DC(t,e){e&&!t.j&&(rr(t),t.i=null,t.g.forEach(function(n,r){var s=r.toLowerCase();r!=s&&(Uy(this,r),By(this,s,n))},t)),t.j=e}var VC=class{constructor(t,e){this.g=t,this.map=e}};function jy(t){this.l=t||NC,X.PerformanceNavigationTiming?(t=X.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(X.g&&X.g.Ka&&X.g.Ka()&&X.g.Ka().dc),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var NC=10;function qy(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function Hy(t){return t.h?1:t.g?t.g.size:0}function nu(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Ph(t,e){t.g?t.g.add(e):t.h=e}function zy(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}jy.prototype.cancel=function(){if(this.i=Ky(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function Ky(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return ph(t.i)}var MC=class{stringify(t){return X.JSON.stringify(t,void 0)}parse(t){return X.JSON.parse(t,void 0)}};function LC(){this.g=new MC}function FC(t,e,n){const r=n||"";try{Ly(t,function(s,i){let o=s;Wi(s)&&(o=Th(s)),e.push(r+i+"="+encodeURIComponent(o))})}catch(s){throw e.push(r+"type="+encodeURIComponent("_badmap")),s}}function UC(t,e){const n=new Xa;if(X.Image){const r=new Image;r.onload=Io(bo,n,r,"TestLoadImage: loaded",!0,e),r.onerror=Io(bo,n,r,"TestLoadImage: error",!1,e),r.onabort=Io(bo,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=Io(bo,n,r,"TestLoadImage: timeout",!1,e),X.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function bo(t,e,n,r,s){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,s(r)}catch{}}function sc(t){this.l=t.ec||null,this.j=t.ob||!1}Ye(sc,bh);sc.prototype.g=function(){return new ic(this.l,this.j)};sc.prototype.i=function(t){return function(){return t}}({});function ic(t,e){Qe.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=Ch,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Ye(ic,Qe);var Ch=0;N=ic.prototype;N.open=function(t,e){if(this.readyState!=Ch)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Si(this)};N.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||X).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};N.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Zi(this)),this.readyState=Ch};N.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Si(this)),this.g&&(this.readyState=3,Si(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof X.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Wy(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function Wy(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}N.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Zi(this):Si(this),this.readyState==3&&Wy(this)}};N.Za=function(t){this.g&&(this.response=this.responseText=t,Zi(this))};N.Ya=function(t){this.g&&(this.response=t,Zi(this))};N.ka=function(){this.g&&Zi(this)};function Zi(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Si(t)}N.setRequestHeader=function(t,e){this.v.append(t,e)};N.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};N.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Si(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(ic.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var $C=X.JSON.parse;function Ne(t){Qe.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=Gy,this.L=this.M=!1}Ye(Ne,Qe);var Gy="",BC=/^https?$/i,jC=["POST","PUT"];N=Ne.prototype;N.Oa=function(t){this.M=t};N.ha=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Xl.g(),this.C=this.u?pp(this.u):pp(Xl),this.g.onreadystatechange=ut(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(i){_p(this,i);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var s in r)n.set(s,r[s]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const i of r.keys())n.set(i,r.get(i));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(i=>i.toLowerCase()=="content-type"),s=X.FormData&&t instanceof X.FormData,!(0<=uy(jC,e))||r||s||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of n)this.g.setRequestHeader(i,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{Jy(this),0<this.B&&((this.L=qC(this.g))?(this.g.timeout=this.B,this.g.ontimeout=ut(this.ua,this)):this.A=Ah(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(i){_p(this,i)}};function qC(t){return ds&&typeof t.timeout=="number"&&t.ontimeout!==void 0}N.ua=function(){typeof fh<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,nt(this,"timeout"),this.abort(8))};function _p(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Qy(t),oc(t)}function Qy(t){t.F||(t.F=!0,nt(t,"complete"),nt(t,"error"))}N.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,nt(this,"complete"),nt(this,"abort"),oc(this))};N.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),oc(this,!0)),Ne.$.N.call(this)};N.La=function(){this.s||(this.G||this.v||this.l?Yy(this):this.kb())};N.kb=function(){Yy(this)};function Yy(t){if(t.h&&typeof fh<"u"&&(!t.C[1]||Xt(t)!=4||t.da()!=2)){if(t.v&&Xt(t)==4)Ah(t.La,0,t);else if(nt(t,"readystatechange"),Xt(t)==4){t.h=!1;try{const o=t.da();e:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=o===0){var s=String(t.I).match(Fy)[1]||null;!s&&X.self&&X.self.location&&(s=X.self.location.protocol.slice(0,-1)),r=!BC.test(s?s.toLowerCase():"")}n=r}if(n)nt(t,"complete"),nt(t,"success");else{t.m=6;try{var i=2<Xt(t)?t.g.statusText:""}catch{i=""}t.j=i+" ["+t.da()+"]",Qy(t)}}finally{oc(t)}}}}function oc(t,e){if(t.g){Jy(t);const n=t.g,r=t.C[0]?()=>{}:null;t.g=null,t.C=null,e||nt(t,"ready");try{n.onreadystatechange=r}catch{}}}function Jy(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(X.clearTimeout(t.A),t.A=null)}N.isActive=function(){return!!this.g};function Xt(t){return t.g?t.g.readyState:0}N.da=function(){try{return 2<Xt(this)?this.g.status:-1}catch{return-1}};N.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};N.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),$C(e)}};function yp(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case Gy:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function HC(t){const e={};t=(t.g&&2<=Xt(t)&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<t.length;r++){if(Ei(t[r]))continue;var n=mC(t[r]);const s=n[0];if(n=n[1],typeof n!="string")continue;n=n.trim();const i=e[s]||[];e[s]=i,i.push(n)}cC(e,function(r){return r.join(", ")})}N.Ia=function(){return this.m};N.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Xy(t){let e="";return gh(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function xh(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=Xy(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):Re(t,e,n))}function ks(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Zy(t){this.Ga=0,this.j=[],this.l=new Xa,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=ks("failFast",!1,t),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=ks("baseRetryDelayMs",5e3,t),this.hb=ks("retryDelaySeedMs",1e4,t),this.eb=ks("forwardChannelMaxRetries",2,t),this.xa=ks("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.useFetchStreams||!1,this.L=void 0,this.J=t&&t.supportsCrossDomainXhr||!1,this.K="",this.i=new jy(t&&t.concurrentRequestLimit),this.Ja=new LC,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.l.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.qa=void 0,t&&t.longPollingTimeout&&0<t.longPollingTimeout&&(this.qa=t.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}N=Zy.prototype;N.ra=8;N.H=1;function Oh(t){if(ev(t),t.H==3){var e=t.W++,n=vn(t.I);if(Re(n,"SID",t.K),Re(n,"RID",e),Re(n,"TYPE","terminate"),eo(t,n),e=new Ji(t,t.l,e),e.L=2,e.A=rc(vn(n)),n=!1,X.navigator&&X.navigator.sendBeacon)try{n=X.navigator.sendBeacon(e.A.toString(),"")}catch{}!n&&X.Image&&(new Image().src=e.A,n=!0),n||(e.g=cv(e.l,null),e.g.ha(e.A)),e.G=Date.now(),Xi(e)}ov(t)}function ac(t){t.g&&(Dh(t),t.g.cancel(),t.g=null)}function ev(t){ac(t),t.u&&(X.clearTimeout(t.u),t.u=null),ha(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&X.clearTimeout(t.m),t.m=null)}function cc(t){if(!qy(t.i)&&!t.m){t.m=!0;var e=t.Na;wi||wy(),Ii||(wi(),Ii=!0),wh.add(e,t),t.C=0}}function zC(t,e){return Hy(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.j=e.F.concat(t.j),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=Qi(ut(t.Na,t,e),iv(t,t.C)),t.C++,!0)}N.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const s=new Ji(this,this.l,t);let i=this.s;if(this.U&&(i?(i=py(i),my(i,this.U)):i=this.U),this.o!==null||this.O||(s.I=i,i=null),this.P)e:{for(var e=0,n=0;n<this.j.length;n++){t:{var r=this.j[n];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.j.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=tv(this,s,e),n=vn(this.I),Re(n,"RID",t),Re(n,"CVER",22),this.F&&Re(n,"X-HTTP-Session-Id",this.F),eo(this,n),i&&(this.O?e="headers="+encodeURIComponent(String(Xy(i)))+"&"+e:this.o&&xh(n,this.o,i)),Ph(this.i,s),this.bb&&Re(n,"TYPE","init"),this.P?(Re(n,"$req",e),Re(n,"SID","null"),s.aa=!0,eu(s,n,null)):eu(s,n,e),this.H=2}}else this.H==3&&(t?vp(this,t):this.j.length==0||qy(this.i)||vp(this))};function vp(t,e){var n;e?n=e.m:n=t.W++;const r=vn(t.I);Re(r,"SID",t.K),Re(r,"RID",n),Re(r,"AID",t.V),eo(t,r),t.o&&t.s&&xh(r,t.o,t.s),n=new Ji(t,t.l,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.j=e.F.concat(t.j)),e=tv(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),Ph(t.i,n),eu(n,r,e)}function eo(t,e){t.na&&gh(t.na,function(n,r){Re(e,r,n)}),t.h&&Ly({},function(n,r){Re(e,r,n)})}function tv(t,e,n){n=Math.min(t.j.length,n);var r=t.h?ut(t.h.Va,t.h,t):null;e:{var s=t.j;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=s[0].g,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let c=0;c<n;c++){let l=s[c].g;const u=s[c].map;if(l-=i,0>l)i=Math.max(0,s[c].g-100),a=!1;else try{FC(u,o,"req"+l+"_")}catch{r&&r(u)}}if(a){r=o.join("&");break e}}}return t=t.j.splice(0,n),e.F=t,r}function nv(t){if(!t.g&&!t.u){t.ba=1;var e=t.Ma;wi||wy(),Ii||(wi(),Ii=!0),wh.add(e,t),t.A=0}}function kh(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=Qi(ut(t.Ma,t),iv(t,t.A)),t.A++,!0)}N.Ma=function(){if(this.u=null,rv(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var t=2*this.S;this.l.info("BP detection timer enabled: "+t),this.B=Qi(ut(this.jb,this),t)}};N.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,mt(10),ac(this),rv(this))};function Dh(t){t.B!=null&&(X.clearTimeout(t.B),t.B=null)}function rv(t){t.g=new Ji(t,t.l,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=vn(t.wa);Re(e,"RID","rpc"),Re(e,"SID",t.K),Re(e,"AID",t.V),Re(e,"CI",t.G?"0":"1"),!t.G&&t.qa&&Re(e,"TO",t.qa),Re(e,"TYPE","xmlhttp"),eo(t,e),t.o&&t.s&&xh(e,t.o,t.s),t.L&&t.g.setTimeout(t.L);var n=t.g;t=t.pa,n.L=1,n.A=rc(vn(e)),n.u=null,n.S=!0,Dy(n,t)}N.ib=function(){this.v!=null&&(this.v=null,ac(this),kh(this),mt(19))};function ha(t){t.v!=null&&(X.clearTimeout(t.v),t.v=null)}function sv(t,e){var n=null;if(t.g==e){ha(t),Dh(t),t.g=null;var r=2}else if(nu(t.i,e))n=e.F,zy(t.i,e),r=1;else return;if(t.H!=0){if(e.i)if(r==1){n=e.u?e.u.length:0,e=Date.now()-e.G;var s=t.C;r=Za(),nt(r,new Py(r,n)),cc(t)}else nv(t);else if(s=e.s,s==3||s==0&&0<e.ca||!(r==1&&zC(t,e)||r==2&&kh(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),s){case 1:vr(t,5);break;case 4:vr(t,10);break;case 3:vr(t,6);break;default:vr(t,2)}}}function iv(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.isActive()||(n*=2),n*e}function vr(t,e){if(t.l.info("Error code "+e),e==2){var n=null;t.h&&(n=null);var r=ut(t.pb,t);n||(n=new Ar("//www.google.com/images/cleardot.gif"),X.location&&X.location.protocol=="http"||la(n,"https"),rc(n)),UC(n.toString(),r)}else mt(2);t.H=0,t.h&&t.h.za(e),ov(t),ev(t)}N.pb=function(t){t?(this.l.info("Successfully pinged google.com"),mt(2)):(this.l.info("Failed to ping google.com"),mt(1))};function ov(t){if(t.H=0,t.ma=[],t.h){const e=Ky(t.i);(e.length!=0||t.j.length!=0)&&(lp(t.ma,e),lp(t.ma,t.j),t.i.i.length=0,ph(t.j),t.j.length=0),t.h.ya()}}function av(t,e,n){var r=n instanceof Ar?vn(n):new Ar(n);if(r.g!="")e&&(r.g=e+"."+r.g),ua(r,r.m);else{var s=X.location;r=s.protocol,e=e?e+"."+s.hostname:s.hostname,s=+s.port;var i=new Ar(null);r&&la(i,r),e&&(i.g=e),s&&ua(i,s),n&&(i.l=n),r=i}return n=t.F,e=t.Da,n&&e&&Re(r,n,e),Re(r,"VER",t.ra),eo(t,r),r}function cv(t,e,n){if(e&&!t.J)throw Error("Can't create secondary domain capable XhrIo object.");return e=t.Ha&&!t.va?new Ne(new sc({ob:n})):new Ne(t.va),e.Oa(t.J),e}N.isActive=function(){return!!this.h&&this.h.isActive(this)};function lv(){}N=lv.prototype;N.Ba=function(){};N.Aa=function(){};N.za=function(){};N.ya=function(){};N.isActive=function(){return!0};N.Va=function(){};function da(){if(ds&&!(10<=Number(sC)))throw Error("Environmental error: no available transport.")}da.prototype.g=function(t,e){return new St(t,e)};function St(t,e){Qe.call(this),this.g=new Zy(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!Ei(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Ei(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new As(this)}Ye(St,Qe);St.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var t=this.g,e=this.l,n=this.h||void 0;mt(0),t.Y=e,t.na=n||{},t.G=t.aa,t.I=av(t,null,t.Y),cc(t)};St.prototype.close=function(){Oh(this.g)};St.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Th(t),t=n);e.j.push(new VC(e.fb++,t)),e.H==3&&cc(e)};St.prototype.N=function(){this.g.h=null,delete this.j,Oh(this.g),delete this.g,St.$.N.call(this)};function uv(t){Rh.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Ye(uv,Rh);function hv(){Sh.call(this),this.status=1}Ye(hv,Sh);function As(t){this.g=t}Ye(As,lv);As.prototype.Ba=function(){nt(this.g,"a")};As.prototype.Aa=function(t){nt(this.g,new uv(t))};As.prototype.za=function(t){nt(this.g,new hv)};As.prototype.ya=function(){nt(this.g,"b")};function KC(){this.blockSize=-1}function Bt(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}Ye(Bt,KC);Bt.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function il(t,e,n){n||(n=0);var r=Array(16);if(typeof e=="string")for(var s=0;16>s;++s)r[s]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(s=0;16>s;++s)r[s]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],s=t.g[2];var i=t.g[3],o=e+(i^n&(s^i))+r[0]+3614090360&4294967295;e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[1]+3905402710&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[2]+606105819&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[3]+3250441966&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(i^n&(s^i))+r[4]+4118548399&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[5]+1200080426&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[6]+2821735955&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[7]+4249261313&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(i^n&(s^i))+r[8]+1770035416&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[9]+2336552879&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[10]+4294925233&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[11]+2304563134&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(i^n&(s^i))+r[12]+1804603682&4294967295,e=n+(o<<7&4294967295|o>>>25),o=i+(s^e&(n^s))+r[13]+4254626195&4294967295,i=e+(o<<12&4294967295|o>>>20),o=s+(n^i&(e^n))+r[14]+2792965006&4294967295,s=i+(o<<17&4294967295|o>>>15),o=n+(e^s&(i^e))+r[15]+1236535329&4294967295,n=s+(o<<22&4294967295|o>>>10),o=e+(s^i&(n^s))+r[1]+4129170786&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[6]+3225465664&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[11]+643717713&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[0]+3921069994&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(n^s))+r[5]+3593408605&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[10]+38016083&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[15]+3634488961&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[4]+3889429448&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(n^s))+r[9]+568446438&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[14]+3275163606&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[3]+4107603335&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[8]+1163531501&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(s^i&(n^s))+r[13]+2850285829&4294967295,e=n+(o<<5&4294967295|o>>>27),o=i+(n^s&(e^n))+r[2]+4243563512&4294967295,i=e+(o<<9&4294967295|o>>>23),o=s+(e^n&(i^e))+r[7]+1735328473&4294967295,s=i+(o<<14&4294967295|o>>>18),o=n+(i^e&(s^i))+r[12]+2368359562&4294967295,n=s+(o<<20&4294967295|o>>>12),o=e+(n^s^i)+r[5]+4294588738&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[8]+2272392833&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[11]+1839030562&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[14]+4259657740&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^i)+r[1]+2763975236&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[4]+1272893353&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[7]+4139469664&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[10]+3200236656&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^i)+r[13]+681279174&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[0]+3936430074&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[3]+3572445317&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[6]+76029189&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(n^s^i)+r[9]+3654602809&4294967295,e=n+(o<<4&4294967295|o>>>28),o=i+(e^n^s)+r[12]+3873151461&4294967295,i=e+(o<<11&4294967295|o>>>21),o=s+(i^e^n)+r[15]+530742520&4294967295,s=i+(o<<16&4294967295|o>>>16),o=n+(s^i^e)+r[2]+3299628645&4294967295,n=s+(o<<23&4294967295|o>>>9),o=e+(s^(n|~i))+r[0]+4096336452&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[7]+1126891415&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[14]+2878612391&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[5]+4237533241&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~i))+r[12]+1700485571&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[3]+2399980690&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[10]+4293915773&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[1]+2240044497&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~i))+r[8]+1873313359&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[15]+4264355552&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[6]+2734768916&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[13]+1309151649&4294967295,n=s+(o<<21&4294967295|o>>>11),o=e+(s^(n|~i))+r[4]+4149444226&4294967295,e=n+(o<<6&4294967295|o>>>26),o=i+(n^(e|~s))+r[11]+3174756917&4294967295,i=e+(o<<10&4294967295|o>>>22),o=s+(e^(i|~n))+r[2]+718787259&4294967295,s=i+(o<<15&4294967295|o>>>17),o=n+(i^(s|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(s+(o<<21&4294967295|o>>>11))&4294967295,t.g[2]=t.g[2]+s&4294967295,t.g[3]=t.g[3]+i&4294967295}Bt.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,r=this.m,s=this.h,i=0;i<e;){if(s==0)for(;i<=n;)il(this,t,i),i+=this.blockSize;if(typeof t=="string"){for(;i<e;)if(r[s++]=t.charCodeAt(i++),s==this.blockSize){il(this,r),s=0;break}}else for(;i<e;)if(r[s++]=t[i++],s==this.blockSize){il(this,r),s=0;break}}this.h=s,this.i+=e};Bt.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};function Te(t,e){this.h=e;for(var n=[],r=!0,s=t.length-1;0<=s;s--){var i=t[s]|0;r&&i==e||(n[s]=i,r=!1)}this.g=n}var WC={};function Vh(t){return-128<=t&&128>t?tC(t,function(e){return new Te([e|0],0>e?-1:0)}):new Te([t|0],0>t?-1:0)}function Zt(t){if(isNaN(t)||!isFinite(t))return ss;if(0>t)return Ze(Zt(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=ru;return new Te(e,0)}function dv(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return Ze(dv(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=Zt(Math.pow(e,8)),r=ss,s=0;s<t.length;s+=8){var i=Math.min(8,t.length-s),o=parseInt(t.substring(s,s+i),e);8>i?(i=Zt(Math.pow(e,i)),r=r.R(i).add(Zt(o))):(r=r.R(n),r=r.add(Zt(o)))}return r}var ru=4294967296,ss=Vh(0),su=Vh(1),Ep=Vh(16777216);N=Te.prototype;N.ea=function(){if(xt(this))return-Ze(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.D(n);t+=(0<=r?r:ru+r)*e,e*=ru}return t};N.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(pn(this))return"0";if(xt(this))return"-"+Ze(this).toString(t);for(var e=Zt(Math.pow(t,6)),n=this,r="";;){var s=pa(n,e).g;n=fa(n,s.R(e));var i=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=s,pn(n))return i+r;for(;6>i.length;)i="0"+i;r=i+r}};N.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function pn(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function xt(t){return t.h==-1}N.X=function(t){return t=fa(this,t),xt(t)?-1:pn(t)?0:1};function Ze(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new Te(n,~t.h).add(su)}N.abs=function(){return xt(this)?Ze(this):this};N.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,s=0;s<=e;s++){var i=r+(this.D(s)&65535)+(t.D(s)&65535),o=(i>>>16)+(this.D(s)>>>16)+(t.D(s)>>>16);r=o>>>16,i&=65535,o&=65535,n[s]=o<<16|i}return new Te(n,n[n.length-1]&-2147483648?-1:0)};function fa(t,e){return t.add(Ze(e))}N.R=function(t){if(pn(this)||pn(t))return ss;if(xt(this))return xt(t)?Ze(this).R(Ze(t)):Ze(Ze(this).R(t));if(xt(t))return Ze(this.R(Ze(t)));if(0>this.X(Ep)&&0>t.X(Ep))return Zt(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var s=0;s<t.g.length;s++){var i=this.D(r)>>>16,o=this.D(r)&65535,a=t.D(s)>>>16,c=t.D(s)&65535;n[2*r+2*s]+=o*c,Ro(n,2*r+2*s),n[2*r+2*s+1]+=i*c,Ro(n,2*r+2*s+1),n[2*r+2*s+1]+=o*a,Ro(n,2*r+2*s+1),n[2*r+2*s+2]+=i*a,Ro(n,2*r+2*s+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new Te(n,0)};function Ro(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function Ds(t,e){this.g=t,this.h=e}function pa(t,e){if(pn(e))throw Error("division by zero");if(pn(t))return new Ds(ss,ss);if(xt(t))return e=pa(Ze(t),e),new Ds(Ze(e.g),Ze(e.h));if(xt(e))return e=pa(t,Ze(e)),new Ds(Ze(e.g),e.h);if(30<t.g.length){if(xt(t)||xt(e))throw Error("slowDivide_ only works with positive integers.");for(var n=su,r=e;0>=r.X(t);)n=Tp(n),r=Tp(r);var s=qr(n,1),i=qr(r,1);for(r=qr(r,2),n=qr(n,2);!pn(r);){var o=i.add(r);0>=o.X(t)&&(s=s.add(n),i=o),r=qr(r,1),n=qr(n,1)}return e=fa(t,s.R(e)),new Ds(s,e)}for(s=ss;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),i=Zt(n),o=i.R(e);xt(o)||0<o.X(t);)n-=r,i=Zt(n),o=i.R(e);pn(i)&&(i=su),s=s.add(i),t=fa(t,o)}return new Ds(s,t)}N.gb=function(t){return pa(this,t).h};N.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)&t.D(r);return new Te(n,this.h&t.h)};N.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)|t.D(r);return new Te(n,this.h|t.h)};N.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)^t.D(r);return new Te(n,this.h^t.h)};function Tp(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.D(r)<<1|t.D(r-1)>>>31;return new Te(n,t.h)}function qr(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,s=[],i=0;i<r;i++)s[i]=0<e?t.D(i+n)>>>e|t.D(i+n+1)<<32-e:t.D(i+n);return new Te(s,t.h)}da.prototype.createWebChannel=da.prototype.g;St.prototype.send=St.prototype.u;St.prototype.open=St.prototype.m;St.prototype.close=St.prototype.close;ec.NO_ERROR=0;ec.TIMEOUT=8;ec.HTTP_ERROR=6;Cy.COMPLETE="complete";xy.EventType=Yi;Yi.OPEN="a";Yi.CLOSE="b";Yi.ERROR="c";Yi.MESSAGE="d";Qe.prototype.listen=Qe.prototype.O;Ne.prototype.listenOnce=Ne.prototype.P;Ne.prototype.getLastError=Ne.prototype.Sa;Ne.prototype.getLastErrorCode=Ne.prototype.Ia;Ne.prototype.getStatus=Ne.prototype.da;Ne.prototype.getResponseJson=Ne.prototype.Wa;Ne.prototype.getResponseText=Ne.prototype.ja;Ne.prototype.send=Ne.prototype.ha;Ne.prototype.setWithCredentials=Ne.prototype.Oa;Bt.prototype.digest=Bt.prototype.l;Bt.prototype.reset=Bt.prototype.reset;Bt.prototype.update=Bt.prototype.j;Te.prototype.add=Te.prototype.add;Te.prototype.multiply=Te.prototype.R;Te.prototype.modulo=Te.prototype.gb;Te.prototype.compare=Te.prototype.X;Te.prototype.toNumber=Te.prototype.ea;Te.prototype.toString=Te.prototype.toString;Te.prototype.getBits=Te.prototype.D;Te.fromNumber=Zt;Te.fromString=dv;var GC=function(){return new da},QC=function(){return Za()},ol=ec,YC=Cy,JC=Mr,wp={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},So=xy,XC=Ne,ZC=Bt,is=Te;const Ip="@firebase/firestore";/**
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
 */class ot{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ot.UNAUTHENTICATED=new ot(null),ot.GOOGLE_CREDENTIALS=new ot("google-credentials-uid"),ot.FIRST_PARTY=new ot("first-party-uid"),ot.MOCK_USER=new ot("mock-user");/**
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
 */let bs="10.11.0";/**
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
 */const xr=new Zu("@firebase/firestore");function Vs(){return xr.logLevel}function V(t,...e){if(xr.logLevel<=ue.DEBUG){const n=e.map(Nh);xr.debug(`Firestore (${bs}): ${t}`,...n)}}function an(t,...e){if(xr.logLevel<=ue.ERROR){const n=e.map(Nh);xr.error(`Firestore (${bs}): ${t}`,...n)}}function fs(t,...e){if(xr.logLevel<=ue.WARN){const n=e.map(Nh);xr.warn(`Firestore (${bs}): ${t}`,...n)}}function Nh(t){if(typeof t=="string")return t;try{/**
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
 */function J(t="Unexpected state"){const e=`FIRESTORE (${bs}) INTERNAL ASSERTION FAILED: `+t;throw an(e),new Error(e)}function Ae(t,e){t||J()}function te(t,e){return t}/**
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
 */const A={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class U extends wn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class gn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class fv{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class ex{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(ot.UNAUTHENTICATED))}shutdown(){}}class tx{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class nx{constructor(e){this.t=e,this.currentUser=ot.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const s=c=>this.i!==r?(r=this.i,n(c)):Promise.resolve();let i=new gn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new gn,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},a=c=>{V("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(V("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new gn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(V("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Ae(typeof r.accessToken=="string"),new fv(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Ae(e===null||typeof e=="string"),new ot(e)}}class rx{constructor(e,n,r){this.l=e,this.h=n,this.P=r,this.type="FirstParty",this.user=ot.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class sx{constructor(e,n,r){this.l=e,this.h=n,this.P=r}getToken(){return Promise.resolve(new rx(this.l,this.h,this.P))}start(e,n){e.enqueueRetryable(()=>n(ot.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class ix{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class ox{constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(e,n){const r=i=>{i.error!=null&&V("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.R;return this.R=i.token,V("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{V("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.A.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.A.getImmediate({optional:!0});i?s(i):V("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Ae(typeof n.token=="string"),this.R=n.token,new ix(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function ax(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class pv{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=ax(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<n&&(r+=e.charAt(s[i]%e.length))}return r}}function ge(t,e){return t<e?-1:t>e?1:0}function ps(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
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
 */class He{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new U(A.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new U(A.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new U(A.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new U(A.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return He.fromMillis(Date.now())}static fromDate(e){return He.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new He(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ge(this.nanoseconds,e.nanoseconds):ge(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class Pi{constructor(e,n,r){n===void 0?n=0:n>e.length&&J(),r===void 0?r=e.length-n:r>e.length-n&&J(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Pi.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Pi?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const i=e.get(s),o=n.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Se extends Pi{construct(e,n,r){return new Se(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new U(A.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new Se(n)}static emptyPath(){return new Se([])}}const cx=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class tt extends Pi{construct(e,n,r){return new tt(e,n,r)}static isValidIdentifier(e){return cx.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),tt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new tt(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const i=()=>{if(r.length===0)throw new U(A.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;s<e.length;){const a=e[s];if(a==="\\"){if(s+1===e.length)throw new U(A.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new U(A.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(r+=a,s++):(i(),s++)}if(i(),o)throw new U(A.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new tt(n)}static emptyPath(){return new tt([])}}/**
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
 */class K{constructor(e){this.path=e}static fromPath(e){return new K(Se.fromString(e))}static fromName(e){return new K(Se.fromString(e).popFirst(5))}static empty(){return new K(Se.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Se.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Se.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new K(new Se(e.slice()))}}function lx(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=ee.fromTimestamp(r===1e9?new He(n+1,0):new He(n,r));return new Gn(s,K.empty(),e)}function ux(t){return new Gn(t.readTime,t.key,-1)}class Gn{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Gn(ee.min(),K.empty(),-1)}static max(){return new Gn(ee.max(),K.empty(),-1)}}function hx(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=K.comparator(t.documentKey,e.documentKey),n!==0?n:ge(t.largestBatchId,e.largestBatchId))}/**
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
 */const dx="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class fx{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function to(t){if(t.code!==A.FAILED_PRECONDITION||t.message!==dx)throw t;V("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class S{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&J(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new S((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(n,i).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof S?n:S.resolve(n)}catch(n){return S.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):S.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):S.reject(n)}static resolve(e){return new S((n,r)=>{n(e)})}static reject(e){return new S((n,r)=>{r(e)})}static waitFor(e){return new S((n,r)=>{let s=0,i=0,o=!1;e.forEach(a=>{++s,a.next(()=>{++i,o&&i===s&&n()},c=>r(c))}),o=!0,i===s&&n()})}static or(e){let n=S.resolve(!1);for(const r of e)n=n.next(s=>s?S.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,i)=>{r.push(n.call(this,s,i))}),this.waitFor(r)}static mapArray(e,n){return new S((r,s)=>{const i=e.length,o=new Array(i);let a=0;for(let c=0;c<i;c++){const l=c;n(e[l]).next(u=>{o[l]=u,++a,a===i&&r(o)},u=>s(u))}})}static doWhile(e,n){return new S((r,s)=>{const i=()=>{e()===!0?n().next(()=>{i()},s):r()};i()})}}/**
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
 */class Mh{constructor(e,n){this.action=e,this.transaction=n,this.aborted=!1,this.V=new gn,this.transaction.oncomplete=()=>{this.V.resolve()},this.transaction.onabort=()=>{n.error?this.V.reject(new ti(e,n.error)):this.V.resolve()},this.transaction.onerror=r=>{const s=Lh(r.target.error);this.V.reject(new ti(e,s))}}static open(e,n,r,s){try{return new Mh(n,e.transaction(s,r))}catch(i){throw new ti(n,i)}}get m(){return this.V.promise}abort(e){e&&this.V.reject(e),this.aborted||(V("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}g(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const n=this.transaction.objectStore(e);return new mx(n)}}class Er{constructor(e,n,r){this.name=e,this.version=n,this.p=r,Er.S(je())===12.2&&an("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return V("SimpleDb","Removing database:",e),pr(window.indexedDB.deleteDatabase(e)).toPromise()}static D(){if(!A_())return!1;if(Er.C())return!0;const e=je(),n=Er.S(e),r=0<n&&n<10,s=Er.v(e),i=0<s&&s<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||r||i)}static C(){var e;return typeof process<"u"&&((e=process.__PRIVATE_env)===null||e===void 0?void 0:e.F)==="YES"}static M(e,n){return e.store(n)}static S(e){const n=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=n?n[1].split("_").slice(0,2).join("."):"-1";return Number(r)}static v(e){const n=e.match(/Android ([\d.]+)/i),r=n?n[1].split(".").slice(0,2).join("."):"-1";return Number(r)}async O(e){return this.db||(V("SimpleDb","Opening database:",this.name),this.db=await new Promise((n,r)=>{const s=indexedDB.open(this.name,this.version);s.onsuccess=i=>{const o=i.target.result;n(o)},s.onblocked=()=>{r(new ti(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},s.onerror=i=>{const o=i.target.error;o.name==="VersionError"?r(new U(A.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?r(new U(A.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):r(new ti(e,o))},s.onupgradeneeded=i=>{V("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',i.oldVersion);const o=i.target.result;this.p.N(o,s.transaction,i.oldVersion,this.version).next(()=>{V("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.L&&(this.db.onversionchange=n=>this.L(n)),this.db}B(e){this.L=e,this.db&&(this.db.onversionchange=n=>e(n))}async runTransaction(e,n,r,s){const i=n==="readonly";let o=0;for(;;){++o;try{this.db=await this.O(e);const a=Mh.open(this.db,e,i?"readonly":"readwrite",r),c=s(a).next(l=>(a.g(),l)).catch(l=>(a.abort(l),S.reject(l))).toPromise();return c.catch(()=>{}),await a.m,c}catch(a){const c=a,l=c.name!=="FirebaseError"&&o<3;if(V("SimpleDb","Transaction failed with error:",c.message,"Retrying:",l),this.close(),!l)return Promise.reject(c)}}}close(){this.db&&this.db.close(),this.db=void 0}}class px{constructor(e){this.k=e,this.q=!1,this.K=null}get isDone(){return this.q}get $(){return this.K}set cursor(e){this.k=e}done(){this.q=!0}U(e){this.K=e}delete(){return pr(this.k.delete())}}class ti extends U{constructor(e,n){super(A.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${n}`),this.name="IndexedDbTransactionError"}}function no(t){return t.name==="IndexedDbTransactionError"}class mx{constructor(e){this.store=e}put(e,n){let r;return n!==void 0?(V("SimpleDb","PUT",this.store.name,e,n),r=this.store.put(n,e)):(V("SimpleDb","PUT",this.store.name,"<auto-key>",e),r=this.store.put(e)),pr(r)}add(e){return V("SimpleDb","ADD",this.store.name,e,e),pr(this.store.add(e))}get(e){return pr(this.store.get(e)).next(n=>(n===void 0&&(n=null),V("SimpleDb","GET",this.store.name,e,n),n))}delete(e){return V("SimpleDb","DELETE",this.store.name,e),pr(this.store.delete(e))}count(){return V("SimpleDb","COUNT",this.store.name),pr(this.store.count())}W(e,n){const r=this.options(e,n),s=r.index?this.store.index(r.index):this.store;if(typeof s.getAll=="function"){const i=s.getAll(r.range);return new S((o,a)=>{i.onerror=c=>{a(c.target.error)},i.onsuccess=c=>{o(c.target.result)}})}{const i=this.cursor(r),o=[];return this.G(i,(a,c)=>{o.push(c)}).next(()=>o)}}j(e,n){const r=this.store.getAll(e,n===null?void 0:n);return new S((s,i)=>{r.onerror=o=>{i(o.target.error)},r.onsuccess=o=>{s(o.target.result)}})}H(e,n){V("SimpleDb","DELETE ALL",this.store.name);const r=this.options(e,n);r.J=!1;const s=this.cursor(r);return this.G(s,(i,o,a)=>a.delete())}Y(e,n){let r;n?r=e:(r={},n=e);const s=this.cursor(r);return this.G(s,n)}Z(e){const n=this.cursor({});return new S((r,s)=>{n.onerror=i=>{const o=Lh(i.target.error);s(o)},n.onsuccess=i=>{const o=i.target.result;o?e(o.primaryKey,o.value).next(a=>{a?o.continue():r()}):r()}})}G(e,n){const r=[];return new S((s,i)=>{e.onerror=o=>{i(o.target.error)},e.onsuccess=o=>{const a=o.target.result;if(!a)return void s();const c=new px(a),l=n(a.primaryKey,a.value,c);if(l instanceof S){const u=l.catch(h=>(c.done(),S.reject(h)));r.push(u)}c.isDone?s():c.$===null?a.continue():a.continue(c.$)}}).next(()=>S.waitFor(r))}options(e,n){let r;return e!==void 0&&(typeof e=="string"?r=e:n=e),{index:r,range:n}}cursor(e){let n="next";if(e.reverse&&(n="prev"),e.index){const r=this.store.index(e.index);return e.J?r.openKeyCursor(e.range,n):r.openCursor(e.range,n)}return this.store.openCursor(e.range,n)}}function pr(t){return new S((e,n)=>{t.onsuccess=r=>{const s=r.target.result;e(s)},t.onerror=r=>{const s=Lh(r.target.error);n(s)}})}let Ap=!1;function Lh(t){const e=Er.S(je());if(e>=12.2&&e<13){const n="An internal error was encountered in the Indexed Database server";if(t.message.indexOf(n)>=0){const r=new U("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${n}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return Ap||(Ap=!0,setTimeout(()=>{throw r},0)),r}}return t}/**
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
 */class Fh{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.se(r),this.oe=r=>n.writeSequenceNumber(r))}se(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.oe&&this.oe(e),e}}Fh._e=-1;function lc(t){return t==null}function ma(t){return t===0&&1/t==-1/0}function gx(t){return typeof t=="number"&&Number.isInteger(t)&&!ma(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function bp(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Lr(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function mv(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class ke{constructor(e,n){this.comparator=e,this.root=n||Je.EMPTY}insert(e,n){return new ke(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Je.BLACK,null,null))}remove(e){return new ke(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Je.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Po(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Po(this.root,e,this.comparator,!1)}getReverseIterator(){return new Po(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Po(this.root,e,this.comparator,!0)}}class Po{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=n?r(e.key,n):1,n&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Je{constructor(e,n,r,s,i){this.key=e,this.value=n,this.color=r??Je.RED,this.left=s??Je.EMPTY,this.right=i??Je.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,i){return new Je(e??this.key,n??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,n,r),null):i===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Je.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return Je.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Je.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Je.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw J();const e=this.left.check();if(e!==this.right.check())throw J();return e+(this.isRed()?0:1)}}Je.EMPTY=null,Je.RED=!0,Je.BLACK=!1;Je.EMPTY=new class{constructor(){this.size=0}get key(){throw J()}get value(){throw J()}get color(){throw J()}get left(){throw J()}get right(){throw J()}copy(e,n,r,s,i){return this}insert(e,n,r){return new Je(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class rt{constructor(e){this.comparator=e,this.data=new ke(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Rp(this.data.getIterator())}getIteratorFrom(e){return new Rp(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof rt)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new rt(this.comparator);return n.data=e,n}}class Rp{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Rt{constructor(e){this.fields=e,e.sort(tt.comparator)}static empty(){return new Rt([])}unionWith(e){let n=new rt(tt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Rt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return ps(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class gv extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class dt{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new gv("Invalid base64 string: "+i):i}}(e);return new dt(n)}static fromUint8Array(e){const n=function(s){let i="";for(let o=0;o<s.length;++o)i+=String.fromCharCode(s[o]);return i}(e);return new dt(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let s=0;s<n.length;s++)r[s]=n.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ge(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}dt.EMPTY_BYTE_STRING=new dt("");const _x=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Qn(t){if(Ae(!!t),typeof t=="string"){let e=0;const n=_x.exec(t);if(Ae(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ue(t.seconds),nanos:Ue(t.nanos)}}function Ue(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Or(t){return typeof t=="string"?dt.fromBase64String(t):dt.fromUint8Array(t)}/**
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
 */function Uh(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function $h(t){const e=t.mapValue.fields.__previous_value__;return Uh(e)?$h(e):e}function Ci(t){const e=Qn(t.mapValue.fields.__local_write_time__.timestampValue);return new He(e.seconds,e.nanos)}/**
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
 */class yx{constructor(e,n,r,s,i,o,a,c,l){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=c,this.useFetchStreams=l}}class xi{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new xi("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof xi&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Co={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function kr(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Uh(t)?4:vx(t)?9007199254740991:10:J()}function cn(t,e){if(t===e)return!0;const n=kr(t);if(n!==kr(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Ci(t).isEqual(Ci(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const o=Qn(s.timestampValue),a=Qn(i.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return Or(s.bytesValue).isEqual(Or(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return Ue(s.geoPointValue.latitude)===Ue(i.geoPointValue.latitude)&&Ue(s.geoPointValue.longitude)===Ue(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return Ue(s.integerValue)===Ue(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const o=Ue(s.doubleValue),a=Ue(i.doubleValue);return o===a?ma(o)===ma(a):isNaN(o)&&isNaN(a)}return!1}(t,e);case 9:return ps(t.arrayValue.values||[],e.arrayValue.values||[],cn);case 10:return function(s,i){const o=s.mapValue.fields||{},a=i.mapValue.fields||{};if(bp(o)!==bp(a))return!1;for(const c in o)if(o.hasOwnProperty(c)&&(a[c]===void 0||!cn(o[c],a[c])))return!1;return!0}(t,e);default:return J()}}function Oi(t,e){return(t.values||[]).find(n=>cn(n,e))!==void 0}function ms(t,e){if(t===e)return 0;const n=kr(t),r=kr(e);if(n!==r)return ge(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ge(t.booleanValue,e.booleanValue);case 2:return function(i,o){const a=Ue(i.integerValue||i.doubleValue),c=Ue(o.integerValue||o.doubleValue);return a<c?-1:a>c?1:a===c?0:isNaN(a)?isNaN(c)?0:-1:1}(t,e);case 3:return Sp(t.timestampValue,e.timestampValue);case 4:return Sp(Ci(t),Ci(e));case 5:return ge(t.stringValue,e.stringValue);case 6:return function(i,o){const a=Or(i),c=Or(o);return a.compareTo(c)}(t.bytesValue,e.bytesValue);case 7:return function(i,o){const a=i.split("/"),c=o.split("/");for(let l=0;l<a.length&&l<c.length;l++){const u=ge(a[l],c[l]);if(u!==0)return u}return ge(a.length,c.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,o){const a=ge(Ue(i.latitude),Ue(o.latitude));return a!==0?a:ge(Ue(i.longitude),Ue(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,o){const a=i.values||[],c=o.values||[];for(let l=0;l<a.length&&l<c.length;++l){const u=ms(a[l],c[l]);if(u)return u}return ge(a.length,c.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,o){if(i===Co.mapValue&&o===Co.mapValue)return 0;if(i===Co.mapValue)return 1;if(o===Co.mapValue)return-1;const a=i.fields||{},c=Object.keys(a),l=o.fields||{},u=Object.keys(l);c.sort(),u.sort();for(let h=0;h<c.length&&h<u.length;++h){const d=ge(c[h],u[h]);if(d!==0)return d;const f=ms(a[c[h]],l[u[h]]);if(f!==0)return f}return ge(c.length,u.length)}(t.mapValue,e.mapValue);default:throw J()}}function Sp(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ge(t,e);const n=Qn(t),r=Qn(e),s=ge(n.seconds,r.seconds);return s!==0?s:ge(n.nanos,r.nanos)}function gs(t){return iu(t)}function iu(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Qn(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return Or(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return K.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",s=!0;for(const i of n.values||[])s?s=!1:r+=",",r+=iu(i);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let s="{",i=!0;for(const o of r)i?i=!1:s+=",",s+=`${o}:${iu(n.fields[o])}`;return s+"}"}(t.mapValue):J()}function Pp(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function ou(t){return!!t&&"integerValue"in t}function Bh(t){return!!t&&"arrayValue"in t}function Cp(t){return!!t&&"nullValue"in t}function xp(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Ho(t){return!!t&&"mapValue"in t}function ni(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Lr(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=ni(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=ni(t.arrayValue.values[n]);return e}return Object.assign({},t)}function vx(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class Et{constructor(e){this.value=e}static empty(){return new Et({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Ho(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=ni(n)}setAll(e){let n=tt.emptyPath(),r={},s=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const c=this.getFieldsMap(n);this.applyChanges(c,r,s),r={},s=[],n=a.popLast()}o?r[a.lastSegment()]=ni(o):s.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,r,s)}delete(e){const n=this.field(e.popLast());Ho(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return cn(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];Ho(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){Lr(n,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new Et(ni(this.value))}}function _v(t){const e=[];return Lr(t.fields,(n,r)=>{const s=new tt([n]);if(Ho(r)){const i=_v(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new Rt(e)}/**
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
 */class at{constructor(e,n,r,s,i,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new at(e,0,ee.min(),ee.min(),ee.min(),Et.empty(),0)}static newFoundDocument(e,n,r,s){return new at(e,1,n,ee.min(),r,s,0)}static newNoDocument(e,n){return new at(e,2,n,ee.min(),ee.min(),Et.empty(),0)}static newUnknownDocument(e,n){return new at(e,3,n,ee.min(),ee.min(),Et.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(ee.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Et.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Et.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ee.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof at&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new at(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class ga{constructor(e,n){this.position=e,this.inclusive=n}}function Op(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const i=e[s],o=t.position[s];if(i.field.isKeyField()?r=K.comparator(K.fromName(o.referenceValue),n.key):r=ms(o,n.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function kp(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!cn(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class ki{constructor(e,n="asc"){this.field=e,this.dir=n}}function Ex(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class yv{}class $e extends yv{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new wx(e,n,r):n==="array-contains"?new bx(e,r):n==="in"?new Rx(e,r):n==="not-in"?new Sx(e,r):n==="array-contains-any"?new Px(e,r):new $e(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new Ix(e,r):new Ax(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(ms(n,this.value)):n!==null&&kr(this.value)===kr(n)&&this.matchesComparison(ms(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return J()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class jt extends yv{constructor(e,n){super(),this.filters=e,this.op=n,this.ue=null}static create(e,n){return new jt(e,n)}matches(e){return vv(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ue!==null||(this.ue=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ue}getFilters(){return Object.assign([],this.filters)}}function vv(t){return t.op==="and"}function Ev(t){return Tx(t)&&vv(t)}function Tx(t){for(const e of t.filters)if(e instanceof jt)return!1;return!0}function au(t){if(t instanceof $e)return t.field.canonicalString()+t.op.toString()+gs(t.value);if(Ev(t))return t.filters.map(e=>au(e)).join(",");{const e=t.filters.map(n=>au(n)).join(",");return`${t.op}(${e})`}}function Tv(t,e){return t instanceof $e?function(r,s){return s instanceof $e&&r.op===s.op&&r.field.isEqual(s.field)&&cn(r.value,s.value)}(t,e):t instanceof jt?function(r,s){return s instanceof jt&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,o,a)=>i&&Tv(o,s.filters[a]),!0):!1}(t,e):void J()}function wv(t){return t instanceof $e?function(n){return`${n.field.canonicalString()} ${n.op} ${gs(n.value)}`}(t):t instanceof jt?function(n){return n.op.toString()+" {"+n.getFilters().map(wv).join(" ,")+"}"}(t):"Filter"}class wx extends $e{constructor(e,n,r){super(e,n,r),this.key=K.fromName(r.referenceValue)}matches(e){const n=K.comparator(e.key,this.key);return this.matchesComparison(n)}}class Ix extends $e{constructor(e,n){super(e,"in",n),this.keys=Iv("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class Ax extends $e{constructor(e,n){super(e,"not-in",n),this.keys=Iv("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Iv(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>K.fromName(r.referenceValue))}class bx extends $e{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Bh(n)&&Oi(n.arrayValue,this.value)}}class Rx extends $e{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Oi(this.value.arrayValue,n)}}class Sx extends $e{constructor(e,n){super(e,"not-in",n)}matches(e){if(Oi(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Oi(this.value.arrayValue,n)}}class Px extends $e{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Bh(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>Oi(this.value.arrayValue,r))}}/**
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
 */class Cx{constructor(e,n=null,r=[],s=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=a,this.ce=null}}function Dp(t,e=null,n=[],r=[],s=null,i=null,o=null){return new Cx(t,e,n,r,s,i,o)}function jh(t){const e=te(t);if(e.ce===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>au(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),lc(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>gs(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>gs(r)).join(",")),e.ce=n}return e.ce}function qh(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!Ex(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Tv(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!kp(t.startAt,e.startAt)&&kp(t.endAt,e.endAt)}function cu(t){return K.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class Rs{constructor(e,n=null,r=[],s=[],i=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.le=null,this.he=null,this.Pe=null,this.startAt,this.endAt}}function xx(t,e,n,r,s,i,o,a){return new Rs(t,e,n,r,s,i,o,a)}function uc(t){return new Rs(t)}function Vp(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Av(t){return t.collectionGroup!==null}function ri(t){const e=te(t);if(e.le===null){e.le=[];const n=new Set;for(const i of e.explicitOrderBy)e.le.push(i),n.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new rt(tt.comparator);return o.filters.forEach(c=>{c.getFlattenedFilters().forEach(l=>{l.isInequality()&&(a=a.add(l.field))})}),a})(e).forEach(i=>{n.has(i.canonicalString())||i.isKeyField()||e.le.push(new ki(i,r))}),n.has(tt.keyField().canonicalString())||e.le.push(new ki(tt.keyField(),r))}return e.le}function tn(t){const e=te(t);return e.he||(e.he=Ox(e,ri(t))),e.he}function Ox(t,e){if(t.limitType==="F")return Dp(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new ki(s.field,i)});const n=t.endAt?new ga(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new ga(t.startAt.position,t.startAt.inclusive):null;return Dp(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function lu(t,e){const n=t.filters.concat([e]);return new Rs(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function uu(t,e,n){return new Rs(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function hc(t,e){return qh(tn(t),tn(e))&&t.limitType===e.limitType}function bv(t){return`${jh(tn(t))}|lt:${t.limitType}`}function Kr(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(s=>wv(s)).join(", ")}]`),lc(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(s=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(s)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(s=>gs(s)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(s=>gs(s)).join(",")),`Target(${r})`}(tn(t))}; limitType=${t.limitType})`}function dc(t,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):K.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(t,e)&&function(r,s){for(const i of ri(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(r,s){return!(r.startAt&&!function(o,a,c){const l=Op(o,a,c);return o.inclusive?l<=0:l<0}(r.startAt,ri(r),s)||r.endAt&&!function(o,a,c){const l=Op(o,a,c);return o.inclusive?l>=0:l>0}(r.endAt,ri(r),s))}(t,e)}function kx(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function Rv(t){return(e,n)=>{let r=!1;for(const s of ri(t)){const i=Dx(s,e,n);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function Dx(t,e,n){const r=t.field.isKeyField()?K.comparator(e.key,n.key):function(i,o,a){const c=o.data.field(i),l=a.data.field(i);return c!==null&&l!==null?ms(c,l):J()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return J()}}/**
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
 */class Ss{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Lr(this.inner,(n,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return mv(this.inner)}size(){return this.innerSize}}/**
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
 */const Vx=new ke(K.comparator);function En(){return Vx}const Sv=new ke(K.comparator);function Us(...t){let e=Sv;for(const n of t)e=e.insert(n.key,n);return e}function Pv(t){let e=Sv;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Tr(){return si()}function Cv(){return si()}function si(){return new Ss(t=>t.toString(),(t,e)=>t.isEqual(e))}const Nx=new ke(K.comparator),Mx=new rt(K.comparator);function ce(...t){let e=Mx;for(const n of t)e=e.add(n);return e}const Lx=new rt(ge);function Fx(){return Lx}/**
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
 */function xv(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ma(e)?"-0":e}}function Ov(t){return{integerValue:""+t}}function Ux(t,e){return gx(e)?Ov(e):xv(t,e)}/**
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
 */class fc{constructor(){this._=void 0}}function $x(t,e,n){return t instanceof _a?function(s,i){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Uh(i)&&(i=$h(i)),i&&(o.fields.__previous_value__=i),{mapValue:o}}(n,e):t instanceof Di?Dv(t,e):t instanceof Vi?Vv(t,e):function(s,i){const o=kv(s,i),a=Np(o)+Np(s.Ie);return ou(o)&&ou(s.Ie)?Ov(a):xv(s.serializer,a)}(t,e)}function Bx(t,e,n){return t instanceof Di?Dv(t,e):t instanceof Vi?Vv(t,e):n}function kv(t,e){return t instanceof ya?function(r){return ou(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class _a extends fc{}class Di extends fc{constructor(e){super(),this.elements=e}}function Dv(t,e){const n=Nv(e);for(const r of t.elements)n.some(s=>cn(s,r))||n.push(r);return{arrayValue:{values:n}}}class Vi extends fc{constructor(e){super(),this.elements=e}}function Vv(t,e){let n=Nv(e);for(const r of t.elements)n=n.filter(s=>!cn(s,r));return{arrayValue:{values:n}}}class ya extends fc{constructor(e,n){super(),this.serializer=e,this.Ie=n}}function Np(t){return Ue(t.integerValue||t.doubleValue)}function Nv(t){return Bh(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function jx(t,e){return t.field.isEqual(e.field)&&function(r,s){return r instanceof Di&&s instanceof Di||r instanceof Vi&&s instanceof Vi?ps(r.elements,s.elements,cn):r instanceof ya&&s instanceof ya?cn(r.Ie,s.Ie):r instanceof _a&&s instanceof _a}(t.transform,e.transform)}class qx{constructor(e,n){this.version=e,this.transformResults=n}}class nn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new nn}static exists(e){return new nn(void 0,e)}static updateTime(e){return new nn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function zo(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class pc{}function Mv(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Fv(t.key,nn.none()):new ro(t.key,t.data,nn.none());{const n=t.data,r=Et.empty();let s=new rt(tt.comparator);for(let i of e.fields)if(!s.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new sr(t.key,r,new Rt(s.toArray()),nn.none())}}function Hx(t,e,n){t instanceof ro?function(s,i,o){const a=s.value.clone(),c=Lp(s.fieldTransforms,i,o.transformResults);a.setAll(c),i.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(t,e,n):t instanceof sr?function(s,i,o){if(!zo(s.precondition,i))return void i.convertToUnknownDocument(o.version);const a=Lp(s.fieldTransforms,i,o.transformResults),c=i.data;c.setAll(Lv(s)),c.setAll(a),i.convertToFoundDocument(o.version,c).setHasCommittedMutations()}(t,e,n):function(s,i,o){i.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function ii(t,e,n,r){return t instanceof ro?function(i,o,a,c){if(!zo(i.precondition,o))return a;const l=i.value.clone(),u=Fp(i.fieldTransforms,c,o);return l.setAll(u),o.convertToFoundDocument(o.version,l).setHasLocalMutations(),null}(t,e,n,r):t instanceof sr?function(i,o,a,c){if(!zo(i.precondition,o))return a;const l=Fp(i.fieldTransforms,c,o),u=o.data;return u.setAll(Lv(i)),u.setAll(l),o.convertToFoundDocument(o.version,u).setHasLocalMutations(),a===null?null:a.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(h=>h.field))}(t,e,n,r):function(i,o,a){return zo(i.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(t,e,n)}function zx(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),i=kv(r.transform,s||null);i!=null&&(n===null&&(n=Et.empty()),n.set(r.field,i))}return n||null}function Mp(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&ps(r,s,(i,o)=>jx(i,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class ro extends pc{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class sr extends pc{constructor(e,n,r,s,i=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Lv(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Lp(t,e,n){const r=new Map;Ae(t.length===n.length);for(let s=0;s<n.length;s++){const i=t[s],o=i.transform,a=e.data.field(i.field);r.set(i.field,Bx(o,a,n[s]))}return r}function Fp(t,e,n){const r=new Map;for(const s of t){const i=s.transform,o=n.data.field(s.field);r.set(s.field,$x(i,o,e))}return r}class Fv extends pc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Kx extends pc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class Wx{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&Hx(i,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=ii(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=ii(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=Cv();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(s.key)?null:a;const c=Mv(o,a);c!==null&&r.set(s.key,c),o.isValidDocument()||o.convertToNoDocument(ee.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ce())}isEqual(e){return this.batchId===e.batchId&&ps(this.mutations,e.mutations,(n,r)=>Mp(n,r))&&ps(this.baseMutations,e.baseMutations,(n,r)=>Mp(n,r))}}class Hh{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){Ae(e.mutations.length===r.length);let s=function(){return Nx}();const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new Hh(e,n,r,s)}}/**
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
 */class Gx{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class Qx{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
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
 */var Fe,de;function Yx(t){switch(t){default:return J();case A.CANCELLED:case A.UNKNOWN:case A.DEADLINE_EXCEEDED:case A.RESOURCE_EXHAUSTED:case A.INTERNAL:case A.UNAVAILABLE:case A.UNAUTHENTICATED:return!1;case A.INVALID_ARGUMENT:case A.NOT_FOUND:case A.ALREADY_EXISTS:case A.PERMISSION_DENIED:case A.FAILED_PRECONDITION:case A.ABORTED:case A.OUT_OF_RANGE:case A.UNIMPLEMENTED:case A.DATA_LOSS:return!0}}function Uv(t){if(t===void 0)return an("GRPC error has no .code"),A.UNKNOWN;switch(t){case Fe.OK:return A.OK;case Fe.CANCELLED:return A.CANCELLED;case Fe.UNKNOWN:return A.UNKNOWN;case Fe.DEADLINE_EXCEEDED:return A.DEADLINE_EXCEEDED;case Fe.RESOURCE_EXHAUSTED:return A.RESOURCE_EXHAUSTED;case Fe.INTERNAL:return A.INTERNAL;case Fe.UNAVAILABLE:return A.UNAVAILABLE;case Fe.UNAUTHENTICATED:return A.UNAUTHENTICATED;case Fe.INVALID_ARGUMENT:return A.INVALID_ARGUMENT;case Fe.NOT_FOUND:return A.NOT_FOUND;case Fe.ALREADY_EXISTS:return A.ALREADY_EXISTS;case Fe.PERMISSION_DENIED:return A.PERMISSION_DENIED;case Fe.FAILED_PRECONDITION:return A.FAILED_PRECONDITION;case Fe.ABORTED:return A.ABORTED;case Fe.OUT_OF_RANGE:return A.OUT_OF_RANGE;case Fe.UNIMPLEMENTED:return A.UNIMPLEMENTED;case Fe.DATA_LOSS:return A.DATA_LOSS;default:return J()}}(de=Fe||(Fe={}))[de.OK=0]="OK",de[de.CANCELLED=1]="CANCELLED",de[de.UNKNOWN=2]="UNKNOWN",de[de.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",de[de.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",de[de.NOT_FOUND=5]="NOT_FOUND",de[de.ALREADY_EXISTS=6]="ALREADY_EXISTS",de[de.PERMISSION_DENIED=7]="PERMISSION_DENIED",de[de.UNAUTHENTICATED=16]="UNAUTHENTICATED",de[de.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",de[de.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",de[de.ABORTED=10]="ABORTED",de[de.OUT_OF_RANGE=11]="OUT_OF_RANGE",de[de.UNIMPLEMENTED=12]="UNIMPLEMENTED",de[de.INTERNAL=13]="INTERNAL",de[de.UNAVAILABLE=14]="UNAVAILABLE",de[de.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function Jx(){return new TextEncoder}/**
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
 */const Xx=new is([4294967295,4294967295],0);function Up(t){const e=Jx().encode(t),n=new ZC;return n.update(e),new Uint8Array(n.digest())}function $p(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new is([n,r],0),new is([s,i],0)]}class zh{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new $s(`Invalid padding: ${n}`);if(r<0)throw new $s(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new $s(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new $s(`Invalid padding when bitmap length is 0: ${n}`);this.Te=8*e.length-n,this.Ee=is.fromNumber(this.Te)}de(e,n,r){let s=e.add(n.multiply(is.fromNumber(r)));return s.compare(Xx)===1&&(s=new is([s.getBits(0),s.getBits(1)],0)),s.modulo(this.Ee).toNumber()}Ae(e){return(this.bitmap[Math.floor(e/8)]&1<<e%8)!=0}mightContain(e){if(this.Te===0)return!1;const n=Up(e),[r,s]=$p(n);for(let i=0;i<this.hashCount;i++){const o=this.de(r,s,i);if(!this.Ae(o))return!1}return!0}static create(e,n,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),o=new zh(i,s,n);return r.forEach(a=>o.insert(a)),o}insert(e){if(this.Te===0)return;const n=Up(e),[r,s]=$p(n);for(let i=0;i<this.hashCount;i++){const o=this.de(r,s,i);this.Re(o)}}Re(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class $s extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class mc{constructor(e,n,r,s,i){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const s=new Map;return s.set(e,so.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new mc(ee.min(),s,new ke(ge),En(),ce())}}class so{constructor(e,n,r,s,i){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new so(r,n,ce(),ce(),ce())}}/**
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
 */class Ko{constructor(e,n,r,s){this.Ve=e,this.removedTargetIds=n,this.key=r,this.me=s}}class $v{constructor(e,n){this.targetId=e,this.fe=n}}class Bv{constructor(e,n,r=dt.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=s}}class Bp{constructor(){this.ge=0,this.pe=qp(),this.ye=dt.EMPTY_BYTE_STRING,this.we=!1,this.Se=!0}get current(){return this.we}get resumeToken(){return this.ye}get be(){return this.ge!==0}get De(){return this.Se}Ce(e){e.approximateByteSize()>0&&(this.Se=!0,this.ye=e)}ve(){let e=ce(),n=ce(),r=ce();return this.pe.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:n=n.add(s);break;case 1:r=r.add(s);break;default:J()}}),new so(this.ye,this.we,e,n,r)}Fe(){this.Se=!1,this.pe=qp()}Me(e,n){this.Se=!0,this.pe=this.pe.insert(e,n)}xe(e){this.Se=!0,this.pe=this.pe.remove(e)}Oe(){this.ge+=1}Ne(){this.ge-=1,Ae(this.ge>=0)}Le(){this.Se=!0,this.we=!0}}class Zx{constructor(e){this.Be=e,this.ke=new Map,this.qe=En(),this.Qe=jp(),this.Ke=new ke(ge)}$e(e){for(const n of e.Ve)e.me&&e.me.isFoundDocument()?this.Ue(n,e.me):this.We(n,e.key,e.me);for(const n of e.removedTargetIds)this.We(n,e.key,e.me)}Ge(e){this.forEachTarget(e,n=>{const r=this.ze(n);switch(e.state){case 0:this.je(n)&&r.Ce(e.resumeToken);break;case 1:r.Ne(),r.be||r.Fe(),r.Ce(e.resumeToken);break;case 2:r.Ne(),r.be||this.removeTarget(n);break;case 3:this.je(n)&&(r.Le(),r.Ce(e.resumeToken));break;case 4:this.je(n)&&(this.He(n),r.Ce(e.resumeToken));break;default:J()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.ke.forEach((r,s)=>{this.je(s)&&n(s)})}Je(e){const n=e.targetId,r=e.fe.count,s=this.Ye(n);if(s){const i=s.target;if(cu(i))if(r===0){const o=new K(i.path);this.We(n,o,at.newNoDocument(o,ee.min()))}else Ae(r===1);else{const o=this.Ze(n);if(o!==r){const a=this.Xe(e),c=a?this.et(a,e,o):1;if(c!==0){this.He(n);const l=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(n,l)}}}}}Xe(e){const n=e.fe.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=n;let o,a;try{o=Or(r).toUint8Array()}catch(c){if(c instanceof gv)return fs("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{a=new zh(o,s,i)}catch(c){return fs(c instanceof $s?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return a.Te===0?null:a}et(e,n,r){return n.fe.count===r-this.rt(e,n.targetId)?0:2}rt(e,n){const r=this.Be.getRemoteKeysForTarget(n);let s=0;return r.forEach(i=>{const o=this.Be.nt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${i.path.canonicalString()}`;e.mightContain(a)||(this.We(n,i,null),s++)}),s}it(e){const n=new Map;this.ke.forEach((i,o)=>{const a=this.Ye(o);if(a){if(i.current&&cu(a.target)){const c=new K(a.target.path);this.qe.get(c)!==null||this.st(o,c)||this.We(o,c,at.newNoDocument(c,e))}i.De&&(n.set(o,i.ve()),i.Fe())}});let r=ce();this.Qe.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const l=this.Ye(c);return!l||l.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(i))}),this.qe.forEach((i,o)=>o.setReadTime(e));const s=new mc(e,n,this.Ke,this.qe,r);return this.qe=En(),this.Qe=jp(),this.Ke=new ke(ge),s}Ue(e,n){if(!this.je(e))return;const r=this.st(e,n.key)?2:0;this.ze(e).Me(n.key,r),this.qe=this.qe.insert(n.key,n),this.Qe=this.Qe.insert(n.key,this.ot(n.key).add(e))}We(e,n,r){if(!this.je(e))return;const s=this.ze(e);this.st(e,n)?s.Me(n,1):s.xe(n),this.Qe=this.Qe.insert(n,this.ot(n).delete(e)),r&&(this.qe=this.qe.insert(n,r))}removeTarget(e){this.ke.delete(e)}Ze(e){const n=this.ze(e).ve();return this.Be.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Oe(e){this.ze(e).Oe()}ze(e){let n=this.ke.get(e);return n||(n=new Bp,this.ke.set(e,n)),n}ot(e){let n=this.Qe.get(e);return n||(n=new rt(ge),this.Qe=this.Qe.insert(e,n)),n}je(e){const n=this.Ye(e)!==null;return n||V("WatchChangeAggregator","Detected inactive target",e),n}Ye(e){const n=this.ke.get(e);return n&&n.be?null:this.Be._t(e)}He(e){this.ke.set(e,new Bp),this.Be.getRemoteKeysForTarget(e).forEach(n=>{this.We(e,n,null)})}st(e,n){return this.Be.getRemoteKeysForTarget(e).has(n)}}function jp(){return new ke(K.comparator)}function qp(){return new ke(K.comparator)}const eO={asc:"ASCENDING",desc:"DESCENDING"},tO={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},nO={and:"AND",or:"OR"};class rO{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function hu(t,e){return t.useProto3Json||lc(e)?e:{value:e}}function va(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function jv(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function sO(t,e){return va(t,e.toTimestamp())}function rn(t){return Ae(!!t),ee.fromTimestamp(function(n){const r=Qn(n);return new He(r.seconds,r.nanos)}(t))}function Kh(t,e){return du(t,e).canonicalString()}function du(t,e){const n=function(s){return new Se(["projects",s.projectId,"databases",s.database])}(t).child("documents");return e===void 0?n:n.child(e)}function qv(t){const e=Se.fromString(t);return Ae(Gv(e)),e}function fu(t,e){return Kh(t.databaseId,e.path)}function al(t,e){const n=qv(e);if(n.get(1)!==t.databaseId.projectId)throw new U(A.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new U(A.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new K(zv(n))}function Hv(t,e){return Kh(t.databaseId,e)}function iO(t){const e=qv(t);return e.length===4?Se.emptyPath():zv(e)}function pu(t){return new Se(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function zv(t){return Ae(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function Hp(t,e,n){return{name:fu(t,e),fields:n.value.mapValue.fields}}function oO(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:J()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(l,u){return l.useProto3Json?(Ae(u===void 0||typeof u=="string"),dt.fromBase64String(u||"")):(Ae(u===void 0||u instanceof Buffer||u instanceof Uint8Array),dt.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(l){const u=l.code===void 0?A.UNKNOWN:Uv(l.code);return new U(u,l.message||"")}(o);n=new Bv(r,s,i,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=al(t,r.document.name),i=rn(r.document.updateTime),o=r.document.createTime?rn(r.document.createTime):ee.min(),a=new Et({mapValue:{fields:r.document.fields}}),c=at.newFoundDocument(s,i,o,a),l=r.targetIds||[],u=r.removedTargetIds||[];n=new Ko(l,u,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=al(t,r.document),i=r.readTime?rn(r.readTime):ee.min(),o=at.newNoDocument(s,i),a=r.removedTargetIds||[];n=new Ko([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=al(t,r.document),i=r.removedTargetIds||[];n=new Ko([],i,s,null)}else{if(!("filter"in e))return J();{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,o=new Qx(s,i),a=r.targetId;n=new $v(a,o)}}return n}function aO(t,e){let n;if(e instanceof ro)n={update:Hp(t,e.key,e.value)};else if(e instanceof Fv)n={delete:fu(t,e.key)};else if(e instanceof sr)n={update:Hp(t,e.key,e.data),updateMask:gO(e.fieldMask)};else{if(!(e instanceof Kx))return J();n={verify:fu(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,o){const a=o.transform;if(a instanceof _a)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof Di)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof Vi)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof ya)return{fieldPath:o.field.canonicalString(),increment:a.Ie};throw J()}(0,r))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:sO(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:J()}(t,e.precondition)),n}function cO(t,e){return t&&t.length>0?(Ae(e!==void 0),t.map(n=>function(s,i){let o=s.updateTime?rn(s.updateTime):rn(i);return o.isEqual(ee.min())&&(o=rn(i)),new qx(o,s.transformResults||[])}(n,e))):[]}function lO(t,e){return{documents:[Hv(t,e.path)]}}function uO(t,e){const n={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=Hv(t,s);const i=function(l){if(l.length!==0)return Wv(jt.create(l,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const o=function(l){if(l.length!==0)return l.map(u=>function(d){return{field:Wr(d.field),direction:fO(d.dir)}}(u))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const a=hu(t,e.limit);return a!==null&&(n.structuredQuery.limit=a),e.startAt&&(n.structuredQuery.startAt=function(l){return{before:l.inclusive,values:l.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),{ut:n,parent:s}}function hO(t){let e=iO(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){Ae(r===1);const u=n.from[0];u.allDescendants?s=u.collectionId:e=e.child(u.collectionId)}let i=[];n.where&&(i=function(h){const d=Kv(h);return d instanceof jt&&Ev(d)?d.getFilters():[d]}(n.where));let o=[];n.orderBy&&(o=function(h){return h.map(d=>function(g){return new ki(Gr(g.field),function(y){switch(y){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(g.direction))}(d))}(n.orderBy));let a=null;n.limit&&(a=function(h){let d;return d=typeof h=="object"?h.value:h,lc(d)?null:d}(n.limit));let c=null;n.startAt&&(c=function(h){const d=!!h.before,f=h.values||[];return new ga(f,d)}(n.startAt));let l=null;return n.endAt&&(l=function(h){const d=!h.before,f=h.values||[];return new ga(f,d)}(n.endAt)),xx(e,s,o,i,a,"F",c,l)}function dO(t,e){const n=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return J()}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function Kv(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=Gr(n.unaryFilter.field);return $e.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Gr(n.unaryFilter.field);return $e.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Gr(n.unaryFilter.field);return $e.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=Gr(n.unaryFilter.field);return $e.create(o,"!=",{nullValue:"NULL_VALUE"});default:return J()}}(t):t.fieldFilter!==void 0?function(n){return $e.create(Gr(n.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return J()}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return jt.create(n.compositeFilter.filters.map(r=>Kv(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return J()}}(n.compositeFilter.op))}(t):J()}function fO(t){return eO[t]}function pO(t){return tO[t]}function mO(t){return nO[t]}function Wr(t){return{fieldPath:t.canonicalString()}}function Gr(t){return tt.fromServerFormat(t.fieldPath)}function Wv(t){return t instanceof $e?function(n){if(n.op==="=="){if(xp(n.value))return{unaryFilter:{field:Wr(n.field),op:"IS_NAN"}};if(Cp(n.value))return{unaryFilter:{field:Wr(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(xp(n.value))return{unaryFilter:{field:Wr(n.field),op:"IS_NOT_NAN"}};if(Cp(n.value))return{unaryFilter:{field:Wr(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Wr(n.field),op:pO(n.op),value:n.value}}}(t):t instanceof jt?function(n){const r=n.getFilters().map(s=>Wv(s));return r.length===1?r[0]:{compositeFilter:{op:mO(n.op),filters:r}}}(t):J()}function gO(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Gv(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class Fn{constructor(e,n,r,s,i=ee.min(),o=ee.min(),a=dt.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=c}withSequenceNumber(e){return new Fn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new Fn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Fn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Fn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class _O{constructor(e){this.ct=e}}function yO(t){const e=hO({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?uu(e,e.limit,"L"):e}/**
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
 */class vO{constructor(){this._n=new EO}addToCollectionParentIndex(e,n){return this._n.add(n),S.resolve()}getCollectionParents(e,n){return S.resolve(this._n.getEntries(n))}addFieldIndex(e,n){return S.resolve()}deleteFieldIndex(e,n){return S.resolve()}deleteAllFieldIndexes(e){return S.resolve()}createTargetIndexes(e,n){return S.resolve()}getDocumentsMatchingTarget(e,n){return S.resolve(null)}getIndexType(e,n){return S.resolve(0)}getFieldIndexes(e,n){return S.resolve([])}getNextCollectionGroupToUpdate(e){return S.resolve(null)}getMinOffset(e,n){return S.resolve(Gn.min())}getMinOffsetFromCollectionGroup(e,n){return S.resolve(Gn.min())}updateCollectionGroup(e,n,r){return S.resolve()}updateIndexEntries(e,n){return S.resolve()}}class EO{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new rt(Se.comparator),i=!s.has(r);return this.index[n]=s.add(r),i}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new rt(Se.comparator)).toArray()}}/**
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
 */class _s{constructor(e){this.On=e}next(){return this.On+=2,this.On}static Nn(){return new _s(0)}static Ln(){return new _s(-1)}}/**
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
 */class TO{constructor(){this.changes=new Ss(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,at.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?S.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class wO{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class IO{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&ii(r.mutation,s,Rt.empty(),He.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,ce()).next(()=>r))}getLocalViewOfDocuments(e,n,r=ce()){const s=Tr();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(i=>{let o=Us();return i.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=Tr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,ce()))}populateOverlays(e,n,r){const s=[];return r.forEach(i=>{n.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,s){let i=En();const o=si(),a=function(){return si()}();return n.forEach((c,l)=>{const u=r.get(l.key);s.has(l.key)&&(u===void 0||u.mutation instanceof sr)?i=i.insert(l.key,l):u!==void 0?(o.set(l.key,u.mutation.getFieldMask()),ii(u.mutation,l,u.mutation.getFieldMask(),He.now())):o.set(l.key,Rt.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((l,u)=>o.set(l,u)),n.forEach((l,u)=>{var h;return a.set(l,new wO(u,(h=o.get(l))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,n){const r=si();let s=new ke((o,a)=>o-a),i=ce();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(c=>{const l=n.get(c);if(l===null)return;let u=r.get(c)||Rt.empty();u=a.applyToLocalView(l,u),r.set(c,u);const h=(s.get(a.batchId)||ce()).add(c);s=s.insert(a.batchId,h)})}).next(()=>{const o=[],a=s.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),l=c.key,u=c.value,h=Cv();u.forEach(d=>{if(!i.has(d)){const f=Mv(n.get(d),r.get(d));f!==null&&h.set(d,f),i=i.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,l,h))}return S.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,s){return function(o){return K.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):Av(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,s):this.getDocumentsMatchingCollectionQuery(e,n,r,s)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-i.size):S.resolve(Tr());let a=-1,c=i;return o.next(l=>S.forEach(l,(u,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(u)?S.resolve():this.remoteDocumentCache.getEntry(e,u).next(d=>{c=c.insert(u,d)}))).next(()=>this.populateOverlays(e,l,i)).next(()=>this.computeViews(e,c,l,ce())).next(u=>({batchId:a,changes:Pv(u)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new K(n)).next(r=>{let s=Us();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r,s){const i=n.collectionGroup;let o=Us();return this.indexManager.getCollectionParents(e,i).next(a=>S.forEach(a,c=>{const l=function(h,d){return new Rs(d,null,h.explicitOrderBy.slice(),h.filters.slice(),h.limit,h.limitType,h.startAt,h.endAt)}(n,c.child(i));return this.getDocumentsMatchingCollectionQuery(e,l,r,s).next(u=>{u.forEach((h,d)=>{o=o.insert(h,d)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(i=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,i,s))).next(o=>{i.forEach((c,l)=>{const u=l.getKey();o.get(u)===null&&(o=o.insert(u,at.newInvalidDocument(u)))});let a=Us();return o.forEach((c,l)=>{const u=i.get(c);u!==void 0&&ii(u.mutation,l,Rt.empty(),He.now()),dc(n,l)&&(a=a.insert(c,l))}),a})}}/**
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
 */class AO{constructor(e){this.serializer=e,this.cr=new Map,this.lr=new Map}getBundleMetadata(e,n){return S.resolve(this.cr.get(n))}saveBundleMetadata(e,n){return this.cr.set(n.id,function(s){return{id:s.id,version:s.version,createTime:rn(s.createTime)}}(n)),S.resolve()}getNamedQuery(e,n){return S.resolve(this.lr.get(n))}saveNamedQuery(e,n){return this.lr.set(n.name,function(s){return{name:s.name,query:yO(s.bundledQuery),readTime:rn(s.readTime)}}(n)),S.resolve()}}/**
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
 */class bO{constructor(){this.overlays=new ke(K.comparator),this.hr=new Map}getOverlay(e,n){return S.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Tr();return S.forEach(n,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,i)=>{this.ht(e,n,i)}),S.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.hr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.hr.delete(r)),S.resolve()}getOverlaysForCollection(e,n,r){const s=Tr(),i=n.length+1,o=new K(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,l=c.getKey();if(!n.isPrefixOf(l.path))break;l.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return S.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let i=new ke((l,u)=>l-u);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===n&&l.largestBatchId>r){let u=i.get(l.largestBatchId);u===null&&(u=Tr(),i=i.insert(l.largestBatchId,u)),u.set(l.getKey(),l)}}const a=Tr(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((l,u)=>a.set(l,u)),!(a.size()>=s)););return S.resolve(a)}ht(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.hr.get(s.largestBatchId).delete(r.key);this.hr.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new Gx(n,r));let i=this.hr.get(n);i===void 0&&(i=ce(),this.hr.set(n,i)),this.hr.set(n,i.add(r.key))}}/**
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
 */class Wh{constructor(){this.Pr=new rt(We.Ir),this.Tr=new rt(We.Er)}isEmpty(){return this.Pr.isEmpty()}addReference(e,n){const r=new We(e,n);this.Pr=this.Pr.add(r),this.Tr=this.Tr.add(r)}dr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.Ar(new We(e,n))}Rr(e,n){e.forEach(r=>this.removeReference(r,n))}Vr(e){const n=new K(new Se([])),r=new We(n,e),s=new We(n,e+1),i=[];return this.Tr.forEachInRange([r,s],o=>{this.Ar(o),i.push(o.key)}),i}mr(){this.Pr.forEach(e=>this.Ar(e))}Ar(e){this.Pr=this.Pr.delete(e),this.Tr=this.Tr.delete(e)}gr(e){const n=new K(new Se([])),r=new We(n,e),s=new We(n,e+1);let i=ce();return this.Tr.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const n=new We(e,0),r=this.Pr.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class We{constructor(e,n){this.key=e,this.pr=n}static Ir(e,n){return K.comparator(e.key,n.key)||ge(e.pr,n.pr)}static Er(e,n){return ge(e.pr,n.pr)||K.comparator(e.key,n.key)}}/**
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
 */class RO{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.yr=1,this.wr=new rt(We.Ir)}checkEmpty(e){return S.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const i=this.yr;this.yr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new Wx(i,n,r,s);this.mutationQueue.push(o);for(const a of s)this.wr=this.wr.add(new We(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return S.resolve(o)}lookupMutationBatch(e,n){return S.resolve(this.Sr(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.br(r),i=s<0?0:s;return S.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return S.resolve(this.mutationQueue.length===0?-1:this.yr-1)}getAllMutationBatches(e){return S.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new We(n,0),s=new We(n,Number.POSITIVE_INFINITY),i=[];return this.wr.forEachInRange([r,s],o=>{const a=this.Sr(o.pr);i.push(a)}),S.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new rt(ge);return n.forEach(s=>{const i=new We(s,0),o=new We(s,Number.POSITIVE_INFINITY);this.wr.forEachInRange([i,o],a=>{r=r.add(a.pr)})}),S.resolve(this.Dr(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let i=r;K.isDocumentKey(i)||(i=i.child(""));const o=new We(new K(i),0);let a=new rt(ge);return this.wr.forEachWhile(c=>{const l=c.key.path;return!!r.isPrefixOf(l)&&(l.length===s&&(a=a.add(c.pr)),!0)},o),S.resolve(this.Dr(a))}Dr(e){const n=[];return e.forEach(r=>{const s=this.Sr(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){Ae(this.Cr(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.wr;return S.forEach(n.mutations,s=>{const i=new We(s.key,n.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.wr=r})}Mn(e){}containsKey(e,n){const r=new We(n,0),s=this.wr.firstAfterOrEqual(r);return S.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,S.resolve()}Cr(e,n){return this.br(e)}br(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Sr(e){const n=this.br(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class SO{constructor(e){this.vr=e,this.docs=function(){return new ke(K.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),i=s?s.size:0,o=this.vr(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return S.resolve(r?r.document.mutableCopy():at.newInvalidDocument(n))}getEntries(e,n){let r=En();return n.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():at.newInvalidDocument(s))}),S.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let i=En();const o=n.path,a=new K(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:l,value:{document:u}}=c.getNext();if(!o.isPrefixOf(l.path))break;l.path.length>o.length+1||hx(ux(u),r)<=0||(s.has(u.key)||dc(n,u))&&(i=i.insert(u.key,u.mutableCopy()))}return S.resolve(i)}getAllFromCollectionGroup(e,n,r,s){J()}Fr(e,n){return S.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new PO(this)}getSize(e){return S.resolve(this.size)}}class PO extends TO{constructor(e){super(),this.ar=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.ar.addEntry(e,s)):this.ar.removeEntry(r)}),S.waitFor(n)}getFromCache(e,n){return this.ar.getEntry(e,n)}getAllFromCache(e,n){return this.ar.getEntries(e,n)}}/**
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
 */class CO{constructor(e){this.persistence=e,this.Mr=new Ss(n=>jh(n),qh),this.lastRemoteSnapshotVersion=ee.min(),this.highestTargetId=0,this.Or=0,this.Nr=new Wh,this.targetCount=0,this.Lr=_s.Nn()}forEachTarget(e,n){return this.Mr.forEach((r,s)=>n(s)),S.resolve()}getLastRemoteSnapshotVersion(e){return S.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return S.resolve(this.Or)}allocateTargetId(e){return this.highestTargetId=this.Lr.next(),S.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.Or&&(this.Or=n),S.resolve()}qn(e){this.Mr.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.Lr=new _s(n),this.highestTargetId=n),e.sequenceNumber>this.Or&&(this.Or=e.sequenceNumber)}addTargetData(e,n){return this.qn(n),this.targetCount+=1,S.resolve()}updateTargetData(e,n){return this.qn(n),S.resolve()}removeTargetData(e,n){return this.Mr.delete(n.target),this.Nr.Vr(n.targetId),this.targetCount-=1,S.resolve()}removeTargets(e,n,r){let s=0;const i=[];return this.Mr.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Mr.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),s++)}),S.waitFor(i).next(()=>s)}getTargetCount(e){return S.resolve(this.targetCount)}getTargetData(e,n){const r=this.Mr.get(n)||null;return S.resolve(r)}addMatchingKeys(e,n,r){return this.Nr.dr(n,r),S.resolve()}removeMatchingKeys(e,n,r){this.Nr.Rr(n,r);const s=this.persistence.referenceDelegate,i=[];return s&&n.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),S.waitFor(i)}removeMatchingKeysForTargetId(e,n){return this.Nr.Vr(n),S.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Nr.gr(n);return S.resolve(r)}containsKey(e,n){return S.resolve(this.Nr.containsKey(n))}}/**
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
 */class xO{constructor(e,n){this.Br={},this.overlays={},this.kr=new Fh(0),this.qr=!1,this.qr=!0,this.referenceDelegate=e(this),this.Qr=new CO(this),this.indexManager=new vO,this.remoteDocumentCache=function(s){return new SO(s)}(r=>this.referenceDelegate.Kr(r)),this.serializer=new _O(n),this.$r=new AO(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.qr=!1,Promise.resolve()}get started(){return this.qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new bO,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Br[e.toKey()];return r||(r=new RO(n,this.referenceDelegate),this.Br[e.toKey()]=r),r}getTargetCache(){return this.Qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.$r}runTransaction(e,n,r){V("MemoryPersistence","Starting transaction:",e);const s=new OO(this.kr.next());return this.referenceDelegate.Ur(),r(s).next(i=>this.referenceDelegate.Wr(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Gr(e,n){return S.or(Object.values(this.Br).map(r=>()=>r.containsKey(e,n)))}}class OO extends fx{constructor(e){super(),this.currentSequenceNumber=e}}class Gh{constructor(e){this.persistence=e,this.zr=new Wh,this.jr=null}static Hr(e){return new Gh(e)}get Jr(){if(this.jr)return this.jr;throw J()}addReference(e,n,r){return this.zr.addReference(r,n),this.Jr.delete(r.toString()),S.resolve()}removeReference(e,n,r){return this.zr.removeReference(r,n),this.Jr.add(r.toString()),S.resolve()}markPotentiallyOrphaned(e,n){return this.Jr.add(n.toString()),S.resolve()}removeTarget(e,n){this.zr.Vr(n.targetId).forEach(s=>this.Jr.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(i=>this.Jr.add(i.toString()))}).next(()=>r.removeTargetData(e,n))}Ur(){this.jr=new Set}Wr(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return S.forEach(this.Jr,r=>{const s=K.fromPath(r);return this.Yr(e,s).next(i=>{i||n.removeEntry(s,ee.min())})}).next(()=>(this.jr=null,n.apply(e)))}updateLimboDocument(e,n){return this.Yr(e,n).next(r=>{r?this.Jr.delete(n.toString()):this.Jr.add(n.toString())})}Kr(e){return 0}Yr(e,n){return S.or([()=>S.resolve(this.zr.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Gr(e,n)])}}/**
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
 */class Qh{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.qi=r,this.Qi=s}static Ki(e,n){let r=ce(),s=ce();for(const i of n.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Qh(e,n.fromCache,r,s)}}/**
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
 */class kO{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class DO{constructor(){this.$i=!1,this.Ui=!1,this.Wi=100,this.Gi=function(){return yR()?8:Er.v(je())>0?6:4}()}initialize(e,n){this.zi=e,this.indexManager=n,this.$i=!0}getDocumentsMatchingQuery(e,n,r,s){const i={result:null};return this.ji(e,n).next(o=>{i.result=o}).next(()=>{if(!i.result)return this.Hi(e,n,s,r).next(o=>{i.result=o})}).next(()=>{if(i.result)return;const o=new kO;return this.Ji(e,n,o).next(a=>{if(i.result=a,this.Ui)return this.Yi(e,n,o,a.size)})}).next(()=>i.result)}Yi(e,n,r,s){return r.documentReadCount<this.Wi?(Vs()<=ue.DEBUG&&V("QueryEngine","SDK will not create cache indexes for query:",Kr(n),"since it only creates cache indexes for collection contains","more than or equal to",this.Wi,"documents"),S.resolve()):(Vs()<=ue.DEBUG&&V("QueryEngine","Query:",Kr(n),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.Gi*s?(Vs()<=ue.DEBUG&&V("QueryEngine","The SDK decides to create cache indexes for query:",Kr(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,tn(n))):S.resolve())}ji(e,n){if(Vp(n))return S.resolve(null);let r=tn(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=uu(n,null,"F"),r=tn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=ce(...i);return this.zi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(c=>{const l=this.Zi(n,a);return this.Xi(n,l,o,c.readTime)?this.ji(e,uu(n,null,"F")):this.es(e,l,n,c)}))})))}Hi(e,n,r,s){return Vp(n)||s.isEqual(ee.min())?S.resolve(null):this.zi.getDocuments(e,r).next(i=>{const o=this.Zi(n,i);return this.Xi(n,o,r,s)?S.resolve(null):(Vs()<=ue.DEBUG&&V("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Kr(n)),this.es(e,o,n,lx(s,-1)).next(a=>a))})}Zi(e,n){let r=new rt(Rv(e));return n.forEach((s,i)=>{dc(e,i)&&(r=r.add(i))}),r}Xi(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const i=e.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Ji(e,n,r){return Vs()<=ue.DEBUG&&V("QueryEngine","Using full collection scan to execute query:",Kr(n)),this.zi.getDocumentsMatchingQuery(e,n,Gn.min(),r)}es(e,n,r,s){return this.zi.getDocumentsMatchingQuery(e,r,s).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */class VO{constructor(e,n,r,s){this.persistence=e,this.ts=n,this.serializer=s,this.ns=new ke(ge),this.rs=new Ss(i=>jh(i),qh),this.ss=new Map,this.os=e.getRemoteDocumentCache(),this.Qr=e.getTargetCache(),this.$r=e.getBundleCache(),this._s(r)}_s(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new IO(this.os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.os.setIndexManager(this.indexManager),this.ts.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.ns))}}function NO(t,e,n,r){return new VO(t,e,n,r)}async function Qv(t,e){const n=te(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,n._s(e),n.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],a=[];let c=ce();for(const l of s){o.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}for(const l of i){a.push(l.batchId);for(const u of l.mutations)c=c.add(u.key)}return n.localDocuments.getDocuments(r,c).next(l=>({us:l,removedBatchIds:o,addedBatchIds:a}))})})}function MO(t,e){const n=te(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=n.os.newChangeBuffer({trackRemovals:!0});return function(a,c,l,u){const h=l.batch,d=h.keys();let f=S.resolve();return d.forEach(g=>{f=f.next(()=>u.getEntry(c,g)).next(v=>{const y=l.docVersions.get(g);Ae(y!==null),v.version.compareTo(y)<0&&(h.applyToRemoteDocument(v,l),v.isValidDocument()&&(v.setReadTime(l.commitVersion),u.addEntry(v)))})}),f.next(()=>a.mutationQueue.removeMutationBatch(c,h))}(n,r,e,i).next(()=>i.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let c=ce();for(let l=0;l<a.mutationResults.length;++l)a.mutationResults[l].transformResults.length>0&&(c=c.add(a.batch.mutations[l].key));return c}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function Yv(t){const e=te(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Qr.getLastRemoteSnapshotVersion(n))}function LO(t,e){const n=te(t),r=e.snapshotVersion;let s=n.ns;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.os.newChangeBuffer({trackRemovals:!0});s=n.ns;const a=[];e.targetChanges.forEach((u,h)=>{const d=s.get(h);if(!d)return;a.push(n.Qr.removeMatchingKeys(i,u.removedDocuments,h).next(()=>n.Qr.addMatchingKeys(i,u.addedDocuments,h)));let f=d.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(h)!==null?f=f.withResumeToken(dt.EMPTY_BYTE_STRING,ee.min()).withLastLimboFreeSnapshotVersion(ee.min()):u.resumeToken.approximateByteSize()>0&&(f=f.withResumeToken(u.resumeToken,r)),s=s.insert(h,f),function(v,y,E){return v.resumeToken.approximateByteSize()===0||y.snapshotVersion.toMicroseconds()-v.snapshotVersion.toMicroseconds()>=3e8?!0:E.addedDocuments.size+E.modifiedDocuments.size+E.removedDocuments.size>0}(d,f,u)&&a.push(n.Qr.updateTargetData(i,f))});let c=En(),l=ce();if(e.documentUpdates.forEach(u=>{e.resolvedLimboDocuments.has(u)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,u))}),a.push(FO(i,o,e.documentUpdates).next(u=>{c=u.cs,l=u.ls})),!r.isEqual(ee.min())){const u=n.Qr.getLastRemoteSnapshotVersion(i).next(h=>n.Qr.setTargetsMetadata(i,i.currentSequenceNumber,r));a.push(u)}return S.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,c,l)).next(()=>c)}).then(i=>(n.ns=s,i))}function FO(t,e,n){let r=ce(),s=ce();return n.forEach(i=>r=r.add(i)),e.getEntries(t,r).next(i=>{let o=En();return n.forEach((a,c)=>{const l=i.get(a);c.isFoundDocument()!==l.isFoundDocument()&&(s=s.add(a)),c.isNoDocument()&&c.version.isEqual(ee.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!l.isValidDocument()||c.version.compareTo(l.version)>0||c.version.compareTo(l.version)===0&&l.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):V("LocalStore","Ignoring outdated watch update for ",a,". Current version:",l.version," Watch version:",c.version)}),{cs:o,ls:s}})}function UO(t,e){const n=te(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function $O(t,e){const n=te(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return n.Qr.getTargetData(r,e).next(i=>i?(s=i,S.resolve(s)):n.Qr.allocateTargetId(r).next(o=>(s=new Fn(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Qr.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=n.ns.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(n.ns=n.ns.insert(r.targetId,r),n.rs.set(e,r.targetId)),r})}async function mu(t,e,n){const r=te(t),s=r.ns.get(e),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!no(o))throw o;V("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.ns=r.ns.remove(e),r.rs.delete(s.target)}function zp(t,e,n){const r=te(t);let s=ee.min(),i=ce();return r.persistence.runTransaction("Execute query","readwrite",o=>function(c,l,u){const h=te(c),d=h.rs.get(u);return d!==void 0?S.resolve(h.ns.get(d)):h.Qr.getTargetData(l,u)}(r,o,tn(e)).next(a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,r.Qr.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>r.ts.getDocumentsMatchingQuery(o,e,n?s:ee.min(),n?i:ce())).next(a=>(BO(r,kx(e),a),{documents:a,hs:i})))}function BO(t,e,n){let r=t.ss.get(e)||ee.min();n.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),t.ss.set(e,r)}class Kp{constructor(){this.activeTargetIds=Fx()}As(e){this.activeTargetIds=this.activeTargetIds.add(e)}Rs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ds(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class jO{constructor(){this.no=new Kp,this.ro={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.no.As(e),this.ro[e]||"not-current"}updateQueryState(e,n,r){this.ro[e]=n}removeLocalQueryTarget(e){this.no.Rs(e)}isLocalQueryTarget(e){return this.no.activeTargetIds.has(e)}clearQueryState(e){delete this.ro[e]}getAllActiveQueryTargets(){return this.no.activeTargetIds}isActiveQueryTarget(e){return this.no.activeTargetIds.has(e)}start(){return this.no=new Kp,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class qO{io(e){}shutdown(){}}/**
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
 */class Wp{constructor(){this.so=()=>this.oo(),this._o=()=>this.ao(),this.uo=[],this.co()}io(e){this.uo.push(e)}shutdown(){window.removeEventListener("online",this.so),window.removeEventListener("offline",this._o)}co(){window.addEventListener("online",this.so),window.addEventListener("offline",this._o)}oo(){V("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.uo)e(0)}ao(){V("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.uo)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let xo=null;function cl(){return xo===null?xo=function(){return 268435456+Math.round(2147483648*Math.random())}():xo++,"0x"+xo.toString(16)}/**
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
 */const HO={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class zO{constructor(e){this.lo=e.lo,this.ho=e.ho}Po(e){this.Io=e}To(e){this.Eo=e}onMessage(e){this.Ao=e}close(){this.ho()}send(e){this.lo(e)}Ro(){this.Io()}Vo(e){this.Eo(e)}mo(e){this.Ao(e)}}/**
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
 */const it="WebChannelConnection";class KO extends class{constructor(n){this.databaseInfo=n,this.databaseId=n.databaseId;const r=n.ssl?"https":"http",s=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.fo=r+"://"+n.host,this.po=`projects/${s}/databases/${i}`,this.yo=this.databaseId.database==="(default)"?`project_id=${s}`:`project_id=${s}&database_id=${i}`}get wo(){return!1}So(n,r,s,i,o){const a=cl(),c=this.bo(n,r.toUriEncodedString());V("RestConnection",`Sending RPC '${n}' ${a}:`,c,s);const l={"google-cloud-resource-prefix":this.po,"x-goog-request-params":this.yo};return this.Do(l,i,o),this.Co(n,c,l,s).then(u=>(V("RestConnection",`Received RPC '${n}' ${a}: `,u),u),u=>{throw fs("RestConnection",`RPC '${n}' ${a} failed with error: `,u,"url: ",c,"request:",s),u})}vo(n,r,s,i,o,a){return this.So(n,r,s,i,o)}Do(n,r,s){n["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+bs}(),n["Content-Type"]="text/plain",this.databaseInfo.appId&&(n["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((i,o)=>n[o]=i),s&&s.headers.forEach((i,o)=>n[o]=i)}bo(n,r){const s=HO[n];return`${this.fo}/v1/${r}:${s}`}terminate(){}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Co(e,n,r,s){const i=cl();return new Promise((o,a)=>{const c=new XC;c.setWithCredentials(!0),c.listenOnce(YC.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case ol.NO_ERROR:const u=c.getResponseJson();V(it,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(u)),o(u);break;case ol.TIMEOUT:V(it,`RPC '${e}' ${i} timed out`),a(new U(A.DEADLINE_EXCEEDED,"Request time out"));break;case ol.HTTP_ERROR:const h=c.getStatus();if(V(it,`RPC '${e}' ${i} failed with status:`,h,"response text:",c.getResponseText()),h>0){let d=c.getResponseJson();Array.isArray(d)&&(d=d[0]);const f=d==null?void 0:d.error;if(f&&f.status&&f.message){const g=function(y){const E=y.toLowerCase().replace(/_/g,"-");return Object.values(A).indexOf(E)>=0?E:A.UNKNOWN}(f.status);a(new U(g,f.message))}else a(new U(A.UNKNOWN,"Server responded with status "+c.getStatus()))}else a(new U(A.UNAVAILABLE,"Connection failed."));break;default:J()}}finally{V(it,`RPC '${e}' ${i} completed.`)}});const l=JSON.stringify(s);V(it,`RPC '${e}' ${i} sending request:`,s),c.send(n,"POST",l,r,15)})}Fo(e,n,r){const s=cl(),i=[this.fo,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=GC(),a=QC(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},l=this.longPollingOptions.timeoutSeconds;l!==void 0&&(c.longPollingTimeout=Math.round(1e3*l)),this.useFetchStreams&&(c.useFetchStreams=!0),this.Do(c.initMessageHeaders,n,r),c.encodeInitMessageHeaders=!0;const u=i.join("");V(it,`Creating RPC '${e}' stream ${s}: ${u}`,c);const h=o.createWebChannel(u,c);let d=!1,f=!1;const g=new zO({lo:y=>{f?V(it,`Not sending because RPC '${e}' stream ${s} is closed:`,y):(d||(V(it,`Opening RPC '${e}' stream ${s} transport.`),h.open(),d=!0),V(it,`RPC '${e}' stream ${s} sending:`,y),h.send(y))},ho:()=>h.close()}),v=(y,E,I)=>{y.listen(E,T=>{try{I(T)}catch(C){setTimeout(()=>{throw C},0)}})};return v(h,So.EventType.OPEN,()=>{f||V(it,`RPC '${e}' stream ${s} transport opened.`)}),v(h,So.EventType.CLOSE,()=>{f||(f=!0,V(it,`RPC '${e}' stream ${s} transport closed`),g.Vo())}),v(h,So.EventType.ERROR,y=>{f||(f=!0,fs(it,`RPC '${e}' stream ${s} transport errored:`,y),g.Vo(new U(A.UNAVAILABLE,"The operation could not be completed")))}),v(h,So.EventType.MESSAGE,y=>{var E;if(!f){const I=y.data[0];Ae(!!I);const T=I,C=T.error||((E=T[0])===null||E===void 0?void 0:E.error);if(C){V(it,`RPC '${e}' stream ${s} received error:`,C);const $=C.status;let M=function(re){const le=Fe[re];if(le!==void 0)return Uv(le)}($),ie=C.message;M===void 0&&(M=A.INTERNAL,ie="Unknown error status: "+$+" with message "+C.message),f=!0,g.Vo(new U(M,ie)),h.close()}else V(it,`RPC '${e}' stream ${s} received:`,I),g.mo(I)}}),v(a,JC.STAT_EVENT,y=>{y.stat===wp.PROXY?V(it,`RPC '${e}' stream ${s} detected buffering proxy`):y.stat===wp.NOPROXY&&V(it,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{g.Ro()},0),g}}function ll(){return typeof document<"u"?document:null}/**
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
 */function gc(t){return new rO(t,!0)}/**
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
 */class Jv{constructor(e,n,r=1e3,s=1.5,i=6e4){this.oi=e,this.timerId=n,this.Mo=r,this.xo=s,this.Oo=i,this.No=0,this.Lo=null,this.Bo=Date.now(),this.reset()}reset(){this.No=0}ko(){this.No=this.Oo}qo(e){this.cancel();const n=Math.floor(this.No+this.Qo()),r=Math.max(0,Date.now()-this.Bo),s=Math.max(0,n-r);s>0&&V("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.No} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Lo=this.oi.enqueueAfterDelay(this.timerId,s,()=>(this.Bo=Date.now(),e())),this.No*=this.xo,this.No<this.Mo&&(this.No=this.Mo),this.No>this.Oo&&(this.No=this.Oo)}Ko(){this.Lo!==null&&(this.Lo.skipDelay(),this.Lo=null)}cancel(){this.Lo!==null&&(this.Lo.cancel(),this.Lo=null)}Qo(){return(Math.random()-.5)*this.No}}/**
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
 */class Xv{constructor(e,n,r,s,i,o,a,c){this.oi=e,this.$o=r,this.Uo=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Wo=0,this.Go=null,this.zo=null,this.stream=null,this.jo=new Jv(e,n)}Ho(){return this.state===1||this.state===5||this.Jo()}Jo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Yo()}async stop(){this.Ho()&&await this.close(0)}Zo(){this.state=0,this.jo.reset()}Xo(){this.Jo()&&this.Go===null&&(this.Go=this.oi.enqueueAfterDelay(this.$o,6e4,()=>this.e_()))}t_(e){this.n_(),this.stream.send(e)}async e_(){if(this.Jo())return this.close(0)}n_(){this.Go&&(this.Go.cancel(),this.Go=null)}r_(){this.zo&&(this.zo.cancel(),this.zo=null)}async close(e,n){this.n_(),this.r_(),this.jo.cancel(),this.Wo++,e!==4?this.jo.reset():n&&n.code===A.RESOURCE_EXHAUSTED?(an(n.toString()),an("Using maximum backoff delay to prevent overloading the backend."),this.jo.ko()):n&&n.code===A.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.i_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.To(n)}i_(){}auth(){this.state=1;const e=this.s_(this.Wo),n=this.Wo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Wo===n&&this.o_(r,s)},r=>{e(()=>{const s=new U(A.UNKNOWN,"Fetching auth token failed: "+r.message);return this.__(s)})})}o_(e,n){const r=this.s_(this.Wo);this.stream=this.a_(e,n),this.stream.Po(()=>{r(()=>(this.state=2,this.zo=this.oi.enqueueAfterDelay(this.Uo,1e4,()=>(this.Jo()&&(this.state=3),Promise.resolve())),this.listener.Po()))}),this.stream.To(s=>{r(()=>this.__(s))}),this.stream.onMessage(s=>{r(()=>this.onMessage(s))})}Yo(){this.state=5,this.jo.qo(async()=>{this.state=0,this.start()})}__(e){return V("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}s_(e){return n=>{this.oi.enqueueAndForget(()=>this.Wo===e?n():(V("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class WO extends Xv{constructor(e,n,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i}a_(e,n){return this.connection.Fo("Listen",e,n)}onMessage(e){this.jo.reset();const n=oO(this.serializer,e),r=function(i){if(!("targetChange"in i))return ee.min();const o=i.targetChange;return o.targetIds&&o.targetIds.length?ee.min():o.readTime?rn(o.readTime):ee.min()}(e);return this.listener.u_(n,r)}c_(e){const n={};n.database=pu(this.serializer),n.addTarget=function(i,o){let a;const c=o.target;if(a=cu(c)?{documents:lO(i,c)}:{query:uO(i,c).ut},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=jv(i,o.resumeToken);const l=hu(i,o.expectedCount);l!==null&&(a.expectedCount=l)}else if(o.snapshotVersion.compareTo(ee.min())>0){a.readTime=va(i,o.snapshotVersion.toTimestamp());const l=hu(i,o.expectedCount);l!==null&&(a.expectedCount=l)}return a}(this.serializer,e);const r=dO(this.serializer,e);r&&(n.labels=r),this.t_(n)}l_(e){const n={};n.database=pu(this.serializer),n.removeTarget=e,this.t_(n)}}class GO extends Xv{constructor(e,n,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,o),this.serializer=i,this.h_=!1}get P_(){return this.h_}start(){this.h_=!1,this.lastStreamToken=void 0,super.start()}i_(){this.h_&&this.I_([])}a_(e,n){return this.connection.Fo("Write",e,n)}onMessage(e){if(Ae(!!e.streamToken),this.lastStreamToken=e.streamToken,this.h_){this.jo.reset();const n=cO(e.writeResults,e.commitTime),r=rn(e.commitTime);return this.listener.T_(r,n)}return Ae(!e.writeResults||e.writeResults.length===0),this.h_=!0,this.listener.E_()}d_(){const e={};e.database=pu(this.serializer),this.t_(e)}I_(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>aO(this.serializer,r))};this.t_(n)}}/**
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
 */class QO extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.A_=!1}R_(){if(this.A_)throw new U(A.FAILED_PRECONDITION,"The client has already been terminated.")}So(e,n,r,s){return this.R_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.So(e,du(n,r),s,i,o)).catch(i=>{throw i.name==="FirebaseError"?(i.code===A.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new U(A.UNKNOWN,i.toString())})}vo(e,n,r,s,i){return this.R_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,a])=>this.connection.vo(e,du(n,r),s,o,a,i)).catch(o=>{throw o.name==="FirebaseError"?(o.code===A.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new U(A.UNKNOWN,o.toString())})}terminate(){this.A_=!0,this.connection.terminate()}}class YO{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.m_=0,this.f_=null,this.g_=!0}p_(){this.m_===0&&(this.y_("Unknown"),this.f_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.f_=null,this.w_("Backend didn't respond within 10 seconds."),this.y_("Offline"),Promise.resolve())))}S_(e){this.state==="Online"?this.y_("Unknown"):(this.m_++,this.m_>=1&&(this.b_(),this.w_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.y_("Offline")))}set(e){this.b_(),this.m_=0,e==="Online"&&(this.g_=!1),this.y_(e)}y_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}w_(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.g_?(an(n),this.g_=!1):V("OnlineStateTracker",n)}b_(){this.f_!==null&&(this.f_.cancel(),this.f_=null)}}/**
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
 */class JO{constructor(e,n,r,s,i){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.D_=[],this.C_=new Map,this.v_=new Set,this.F_=[],this.M_=i,this.M_.io(o=>{r.enqueueAndForget(async()=>{Fr(this)&&(V("RemoteStore","Restarting streams for network reachability change."),await async function(c){const l=te(c);l.v_.add(4),await io(l),l.x_.set("Unknown"),l.v_.delete(4),await _c(l)}(this))})}),this.x_=new YO(r,s)}}async function _c(t){if(Fr(t))for(const e of t.F_)await e(!0)}async function io(t){for(const e of t.F_)await e(!1)}function Zv(t,e){const n=te(t);n.C_.has(e.targetId)||(n.C_.set(e.targetId,e),Zh(n)?Xh(n):Ps(n).Jo()&&Jh(n,e))}function Yh(t,e){const n=te(t),r=Ps(n);n.C_.delete(e),r.Jo()&&e0(n,e),n.C_.size===0&&(r.Jo()?r.Xo():Fr(n)&&n.x_.set("Unknown"))}function Jh(t,e){if(t.O_.Oe(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ee.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}Ps(t).c_(e)}function e0(t,e){t.O_.Oe(e),Ps(t).l_(e)}function Xh(t){t.O_=new Zx({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),_t:e=>t.C_.get(e)||null,nt:()=>t.datastore.serializer.databaseId}),Ps(t).start(),t.x_.p_()}function Zh(t){return Fr(t)&&!Ps(t).Ho()&&t.C_.size>0}function Fr(t){return te(t).v_.size===0}function t0(t){t.O_=void 0}async function XO(t){t.C_.forEach((e,n)=>{Jh(t,e)})}async function ZO(t,e){t0(t),Zh(t)?(t.x_.S_(e),Xh(t)):t.x_.set("Unknown")}async function ek(t,e,n){if(t.x_.set("Online"),e instanceof Bv&&e.state===2&&e.cause)try{await async function(s,i){const o=i.cause;for(const a of i.targetIds)s.C_.has(a)&&(await s.remoteSyncer.rejectListen(a,o),s.C_.delete(a),s.O_.removeTarget(a))}(t,e)}catch(r){V("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Ea(t,r)}else if(e instanceof Ko?t.O_.$e(e):e instanceof $v?t.O_.Je(e):t.O_.Ge(e),!n.isEqual(ee.min()))try{const r=await Yv(t.localStore);n.compareTo(r)>=0&&await function(i,o){const a=i.O_.it(o);return a.targetChanges.forEach((c,l)=>{if(c.resumeToken.approximateByteSize()>0){const u=i.C_.get(l);u&&i.C_.set(l,u.withResumeToken(c.resumeToken,o))}}),a.targetMismatches.forEach((c,l)=>{const u=i.C_.get(c);if(!u)return;i.C_.set(c,u.withResumeToken(dt.EMPTY_BYTE_STRING,u.snapshotVersion)),e0(i,c);const h=new Fn(u.target,c,l,u.sequenceNumber);Jh(i,h)}),i.remoteSyncer.applyRemoteEvent(a)}(t,n)}catch(r){V("RemoteStore","Failed to raise snapshot:",r),await Ea(t,r)}}async function Ea(t,e,n){if(!no(e))throw e;t.v_.add(1),await io(t),t.x_.set("Offline"),n||(n=()=>Yv(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{V("RemoteStore","Retrying IndexedDB access"),await n(),t.v_.delete(1),await _c(t)})}function n0(t,e){return e().catch(n=>Ea(t,n,e))}async function yc(t){const e=te(t),n=Yn(e);let r=e.D_.length>0?e.D_[e.D_.length-1].batchId:-1;for(;tk(e);)try{const s=await UO(e.localStore,r);if(s===null){e.D_.length===0&&n.Xo();break}r=s.batchId,nk(e,s)}catch(s){await Ea(e,s)}r0(e)&&s0(e)}function tk(t){return Fr(t)&&t.D_.length<10}function nk(t,e){t.D_.push(e);const n=Yn(t);n.Jo()&&n.P_&&n.I_(e.mutations)}function r0(t){return Fr(t)&&!Yn(t).Ho()&&t.D_.length>0}function s0(t){Yn(t).start()}async function rk(t){Yn(t).d_()}async function sk(t){const e=Yn(t);for(const n of t.D_)e.I_(n.mutations)}async function ik(t,e,n){const r=t.D_.shift(),s=Hh.from(r,e,n);await n0(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await yc(t)}async function ok(t,e){e&&Yn(t).P_&&await async function(r,s){if(function(o){return Yx(o)&&o!==A.ABORTED}(s.code)){const i=r.D_.shift();Yn(r).Zo(),await n0(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await yc(r)}}(t,e),r0(t)&&s0(t)}async function Gp(t,e){const n=te(t);n.asyncQueue.verifyOperationInProgress(),V("RemoteStore","RemoteStore received new credentials");const r=Fr(n);n.v_.add(3),await io(n),r&&n.x_.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.v_.delete(3),await _c(n)}async function ak(t,e){const n=te(t);e?(n.v_.delete(2),await _c(n)):e||(n.v_.add(2),await io(n),n.x_.set("Unknown"))}function Ps(t){return t.N_||(t.N_=function(n,r,s){const i=te(n);return i.R_(),new WO(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Po:XO.bind(null,t),To:ZO.bind(null,t),u_:ek.bind(null,t)}),t.F_.push(async e=>{e?(t.N_.Zo(),Zh(t)?Xh(t):t.x_.set("Unknown")):(await t.N_.stop(),t0(t))})),t.N_}function Yn(t){return t.L_||(t.L_=function(n,r,s){const i=te(n);return i.R_(),new GO(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Po:rk.bind(null,t),To:ok.bind(null,t),E_:sk.bind(null,t),T_:ik.bind(null,t)}),t.F_.push(async e=>{e?(t.L_.Zo(),await yc(t)):(await t.L_.stop(),t.D_.length>0&&(V("RemoteStore",`Stopping write stream with ${t.D_.length} pending writes`),t.D_=[]))})),t.L_}/**
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
 */class ed{constructor(e,n,r,s,i){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new gn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,s,i){const o=Date.now()+r,a=new ed(e,n,o,s,i);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new U(A.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function td(t,e){if(an("AsyncQueue",`${e}: ${t}`),no(t))return new U(A.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class os{constructor(e){this.comparator=e?(n,r)=>e(n,r)||K.comparator(n.key,r.key):(n,r)=>K.comparator(n.key,r.key),this.keyedMap=Us(),this.sortedSet=new ke(this.comparator)}static emptySet(e){return new os(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof os)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const s=n.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new os;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
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
 */class Qp{constructor(){this.B_=new ke(K.comparator)}track(e){const n=e.doc.key,r=this.B_.get(n);r?e.type!==0&&r.type===3?this.B_=this.B_.insert(n,e):e.type===3&&r.type!==1?this.B_=this.B_.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.B_=this.B_.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.B_=this.B_.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.B_=this.B_.remove(n):e.type===1&&r.type===2?this.B_=this.B_.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.B_=this.B_.insert(n,{type:2,doc:e.doc}):J():this.B_=this.B_.insert(n,e)}k_(){const e=[];return this.B_.inorderTraversal((n,r)=>{e.push(r)}),e}}class ys{constructor(e,n,r,s,i,o,a,c,l){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=l}static fromInitialDocuments(e,n,r,s,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new ys(e,n,os.emptySet(n),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&hc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let s=0;s<n.length;s++)if(n[s].type!==r[s].type||!n[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class ck{constructor(){this.q_=void 0,this.Q_=[]}K_(){return this.Q_.some(e=>e.U_())}}class lk{constructor(){this.queries=new Ss(e=>bv(e),hc),this.onlineState="Unknown",this.W_=new Set}}async function i0(t,e){const n=te(t);let r=3;const s=e.query;let i=n.queries.get(s);i?!i.K_()&&e.U_()&&(r=2):(i=new ck,r=e.U_()?0:1);try{switch(r){case 0:i.q_=await n.onListen(s,!0);break;case 1:i.q_=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const a=td(o,`Initialization of query '${Kr(e.query)}' failed`);return void e.onError(a)}n.queries.set(s,i),i.Q_.push(e),e.G_(n.onlineState),i.q_&&e.z_(i.q_)&&nd(n)}async function o0(t,e){const n=te(t),r=e.query;let s=3;const i=n.queries.get(r);if(i){const o=i.Q_.indexOf(e);o>=0&&(i.Q_.splice(o,1),i.Q_.length===0?s=e.U_()?0:1:!i.K_()&&e.U_()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function uk(t,e){const n=te(t);let r=!1;for(const s of e){const i=s.query,o=n.queries.get(i);if(o){for(const a of o.Q_)a.z_(s)&&(r=!0);o.q_=s}}r&&nd(n)}function hk(t,e,n){const r=te(t),s=r.queries.get(e);if(s)for(const i of s.Q_)i.onError(n);r.queries.delete(e)}function nd(t){t.W_.forEach(e=>{e.next()})}var gu,Yp;(Yp=gu||(gu={})).j_="default",Yp.Cache="cache";class a0{constructor(e,n,r){this.query=e,this.H_=n,this.J_=!1,this.Y_=null,this.onlineState="Unknown",this.options=r||{}}z_(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new ys(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.J_?this.Z_(e)&&(this.H_.next(e),n=!0):this.X_(e,this.onlineState)&&(this.ea(e),n=!0),this.Y_=e,n}onError(e){this.H_.error(e)}G_(e){this.onlineState=e;let n=!1;return this.Y_&&!this.J_&&this.X_(this.Y_,e)&&(this.ea(this.Y_),n=!0),n}X_(e,n){if(!e.fromCache||!this.U_())return!0;const r=n!=="Offline";return(!this.options.ta||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Z_(e){if(e.docChanges.length>0)return!0;const n=this.Y_&&this.Y_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}ea(e){e=ys.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.J_=!0,this.H_.next(e)}U_(){return this.options.source!==gu.Cache}}/**
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
 */class c0{constructor(e){this.key=e}}class l0{constructor(e){this.key=e}}class dk{constructor(e,n){this.query=e,this.ua=n,this.ca=null,this.hasCachedResults=!1,this.current=!1,this.la=ce(),this.mutatedKeys=ce(),this.ha=Rv(e),this.Pa=new os(this.ha)}get Ia(){return this.ua}Ta(e,n){const r=n?n.Ea:new Qp,s=n?n.Pa:this.Pa;let i=n?n.mutatedKeys:this.mutatedKeys,o=s,a=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,l=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((u,h)=>{const d=s.get(u),f=dc(this.query,h)?h:null,g=!!d&&this.mutatedKeys.has(d.key),v=!!f&&(f.hasLocalMutations||this.mutatedKeys.has(f.key)&&f.hasCommittedMutations);let y=!1;d&&f?d.data.isEqual(f.data)?g!==v&&(r.track({type:3,doc:f}),y=!0):this.da(d,f)||(r.track({type:2,doc:f}),y=!0,(c&&this.ha(f,c)>0||l&&this.ha(f,l)<0)&&(a=!0)):!d&&f?(r.track({type:0,doc:f}),y=!0):d&&!f&&(r.track({type:1,doc:d}),y=!0,(c||l)&&(a=!0)),y&&(f?(o=o.add(f),i=v?i.add(u):i.delete(u)):(o=o.delete(u),i=i.delete(u)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const u=this.query.limitType==="F"?o.last():o.first();o=o.delete(u.key),i=i.delete(u.key),r.track({type:1,doc:u})}return{Pa:o,Ea:r,Xi:a,mutatedKeys:i}}da(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,s){const i=this.Pa;this.Pa=e.Pa,this.mutatedKeys=e.mutatedKeys;const o=e.Ea.k_();o.sort((u,h)=>function(f,g){const v=y=>{switch(y){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return J()}};return v(f)-v(g)}(u.type,h.type)||this.ha(u.doc,h.doc)),this.Aa(r),s=s!=null&&s;const a=n&&!s?this.Ra():[],c=this.la.size===0&&this.current&&!s?1:0,l=c!==this.ca;return this.ca=c,o.length!==0||l?{snapshot:new ys(this.query,e.Pa,i,o,e.mutatedKeys,c===0,l,!1,!!r&&r.resumeToken.approximateByteSize()>0),Va:a}:{Va:a}}G_(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Pa:this.Pa,Ea:new Qp,mutatedKeys:this.mutatedKeys,Xi:!1},!1)):{Va:[]}}ma(e){return!this.ua.has(e)&&!!this.Pa.has(e)&&!this.Pa.get(e).hasLocalMutations}Aa(e){e&&(e.addedDocuments.forEach(n=>this.ua=this.ua.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.ua=this.ua.delete(n)),this.current=e.current)}Ra(){if(!this.current)return[];const e=this.la;this.la=ce(),this.Pa.forEach(r=>{this.ma(r.key)&&(this.la=this.la.add(r.key))});const n=[];return e.forEach(r=>{this.la.has(r)||n.push(new l0(r))}),this.la.forEach(r=>{e.has(r)||n.push(new c0(r))}),n}fa(e){this.ua=e.hs,this.la=ce();const n=this.Ta(e.documents);return this.applyChanges(n,!0)}ga(){return ys.fromInitialDocuments(this.query,this.Pa,this.mutatedKeys,this.ca===0,this.hasCachedResults)}}class fk{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class pk{constructor(e){this.key=e,this.pa=!1}}class mk{constructor(e,n,r,s,i,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.ya={},this.wa=new Ss(a=>bv(a),hc),this.Sa=new Map,this.ba=new Set,this.Da=new ke(K.comparator),this.Ca=new Map,this.va=new Wh,this.Fa={},this.Ma=new Map,this.xa=_s.Ln(),this.onlineState="Unknown",this.Oa=void 0}get isPrimaryClient(){return this.Oa===!0}}async function gk(t,e,n=!0){const r=m0(t);let s;const i=r.wa.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.ga()):s=await u0(r,e,n,!0),s}async function _k(t,e){const n=m0(t);await u0(n,e,!0,!1)}async function u0(t,e,n,r){const s=await $O(t.localStore,tn(e)),i=s.targetId,o=n?t.sharedClientState.addLocalQueryTarget(i):"not-current";let a;return r&&(a=await yk(t,e,i,o==="current",s.resumeToken)),t.isPrimaryClient&&n&&Zv(t.remoteStore,s),a}async function yk(t,e,n,r,s){t.Na=(h,d,f)=>async function(v,y,E,I){let T=y.view.Ta(E);T.Xi&&(T=await zp(v.localStore,y.query,!1).then(({documents:ie})=>y.view.Ta(ie,T)));const C=I&&I.targetChanges.get(y.targetId),$=I&&I.targetMismatches.get(y.targetId)!=null,M=y.view.applyChanges(T,v.isPrimaryClient,C,$);return Xp(v,y.targetId,M.Va),M.snapshot}(t,h,d,f);const i=await zp(t.localStore,e,!0),o=new dk(e,i.hs),a=o.Ta(i.documents),c=so.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",s),l=o.applyChanges(a,t.isPrimaryClient,c);Xp(t,n,l.Va);const u=new fk(e,n,o);return t.wa.set(e,u),t.Sa.has(n)?t.Sa.get(n).push(e):t.Sa.set(n,[e]),l.snapshot}async function vk(t,e,n){const r=te(t),s=r.wa.get(e),i=r.Sa.get(s.targetId);if(i.length>1)return r.Sa.set(s.targetId,i.filter(o=>!hc(o,e))),void r.wa.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await mu(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&Yh(r.remoteStore,s.targetId),_u(r,s.targetId)}).catch(to)):(_u(r,s.targetId),await mu(r.localStore,s.targetId,!0))}async function Ek(t,e){const n=te(t),r=n.wa.get(e),s=n.Sa.get(r.targetId);n.isPrimaryClient&&s.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),Yh(n.remoteStore,r.targetId))}async function Tk(t,e,n){const r=Pk(t);try{const s=await function(o,a){const c=te(o),l=He.now(),u=a.reduce((f,g)=>f.add(g.key),ce());let h,d;return c.persistence.runTransaction("Locally write mutations","readwrite",f=>{let g=En(),v=ce();return c.os.getEntries(f,u).next(y=>{g=y,g.forEach((E,I)=>{I.isValidDocument()||(v=v.add(E))})}).next(()=>c.localDocuments.getOverlayedDocuments(f,g)).next(y=>{h=y;const E=[];for(const I of a){const T=zx(I,h.get(I.key).overlayedDocument);T!=null&&E.push(new sr(I.key,T,_v(T.value.mapValue),nn.exists(!0)))}return c.mutationQueue.addMutationBatch(f,l,E,a)}).next(y=>{d=y;const E=y.applyToLocalDocumentSet(h,v);return c.documentOverlayCache.saveOverlays(f,y.batchId,E)})}).then(()=>({batchId:d.batchId,changes:Pv(h)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(o,a,c){let l=o.Fa[o.currentUser.toKey()];l||(l=new ke(ge)),l=l.insert(a,c),o.Fa[o.currentUser.toKey()]=l}(r,s.batchId,n),await oo(r,s.changes),await yc(r.remoteStore)}catch(s){const i=td(s,"Failed to persist write");n.reject(i)}}async function h0(t,e){const n=te(t);try{const r=await LO(n.localStore,e);e.targetChanges.forEach((s,i)=>{const o=n.Ca.get(i);o&&(Ae(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.pa=!0:s.modifiedDocuments.size>0?Ae(o.pa):s.removedDocuments.size>0&&(Ae(o.pa),o.pa=!1))}),await oo(n,r,e)}catch(r){await to(r)}}function Jp(t,e,n){const r=te(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.wa.forEach((i,o)=>{const a=o.view.G_(e);a.snapshot&&s.push(a.snapshot)}),function(o,a){const c=te(o);c.onlineState=a;let l=!1;c.queries.forEach((u,h)=>{for(const d of h.Q_)d.G_(a)&&(l=!0)}),l&&nd(c)}(r.eventManager,e),s.length&&r.ya.u_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function wk(t,e,n){const r=te(t);r.sharedClientState.updateQueryState(e,"rejected",n);const s=r.Ca.get(e),i=s&&s.key;if(i){let o=new ke(K.comparator);o=o.insert(i,at.newNoDocument(i,ee.min()));const a=ce().add(i),c=new mc(ee.min(),new Map,new ke(ge),o,a);await h0(r,c),r.Da=r.Da.remove(i),r.Ca.delete(e),rd(r)}else await mu(r.localStore,e,!1).then(()=>_u(r,e,n)).catch(to)}async function Ik(t,e){const n=te(t),r=e.batch.batchId;try{const s=await MO(n.localStore,e);f0(n,r,null),d0(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await oo(n,s)}catch(s){await to(s)}}async function Ak(t,e,n){const r=te(t);try{const s=await function(o,a){const c=te(o);return c.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let u;return c.mutationQueue.lookupMutationBatch(l,a).next(h=>(Ae(h!==null),u=h.keys(),c.mutationQueue.removeMutationBatch(l,h))).next(()=>c.mutationQueue.performConsistencyCheck(l)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(l,u,a)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,u)).next(()=>c.localDocuments.getDocuments(l,u))})}(r.localStore,e);f0(r,e,n),d0(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await oo(r,s)}catch(s){await to(s)}}function d0(t,e){(t.Ma.get(e)||[]).forEach(n=>{n.resolve()}),t.Ma.delete(e)}function f0(t,e,n){const r=te(t);let s=r.Fa[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(n?i.reject(n):i.resolve(),s=s.remove(e)),r.Fa[r.currentUser.toKey()]=s}}function _u(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Sa.get(e))t.wa.delete(r),n&&t.ya.La(r,n);t.Sa.delete(e),t.isPrimaryClient&&t.va.Vr(e).forEach(r=>{t.va.containsKey(r)||p0(t,r)})}function p0(t,e){t.ba.delete(e.path.canonicalString());const n=t.Da.get(e);n!==null&&(Yh(t.remoteStore,n),t.Da=t.Da.remove(e),t.Ca.delete(n),rd(t))}function Xp(t,e,n){for(const r of n)r instanceof c0?(t.va.addReference(r.key,e),bk(t,r)):r instanceof l0?(V("SyncEngine","Document no longer in limbo: "+r.key),t.va.removeReference(r.key,e),t.va.containsKey(r.key)||p0(t,r.key)):J()}function bk(t,e){const n=e.key,r=n.path.canonicalString();t.Da.get(n)||t.ba.has(r)||(V("SyncEngine","New document in limbo: "+n),t.ba.add(r),rd(t))}function rd(t){for(;t.ba.size>0&&t.Da.size<t.maxConcurrentLimboResolutions;){const e=t.ba.values().next().value;t.ba.delete(e);const n=new K(Se.fromString(e)),r=t.xa.next();t.Ca.set(r,new pk(n)),t.Da=t.Da.insert(n,r),Zv(t.remoteStore,new Fn(tn(uc(n.path)),r,"TargetPurposeLimboResolution",Fh._e))}}async function oo(t,e,n){const r=te(t),s=[],i=[],o=[];r.wa.isEmpty()||(r.wa.forEach((a,c)=>{o.push(r.Na(c,e,n).then(l=>{if((l||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(c.targetId,l!=null&&l.fromCache?"not-current":"current"),l){s.push(l);const u=Qh.Ki(c.targetId,l);i.push(u)}}))}),await Promise.all(o),r.ya.u_(s),await async function(c,l){const u=te(c);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>S.forEach(l,d=>S.forEach(d.qi,f=>u.persistence.referenceDelegate.addReference(h,d.targetId,f)).next(()=>S.forEach(d.Qi,f=>u.persistence.referenceDelegate.removeReference(h,d.targetId,f)))))}catch(h){if(!no(h))throw h;V("LocalStore","Failed to update sequence numbers: "+h)}for(const h of l){const d=h.targetId;if(!h.fromCache){const f=u.ns.get(d),g=f.snapshotVersion,v=f.withLastLimboFreeSnapshotVersion(g);u.ns=u.ns.insert(d,v)}}}(r.localStore,i))}async function Rk(t,e){const n=te(t);if(!n.currentUser.isEqual(e)){V("SyncEngine","User change. New user:",e.toKey());const r=await Qv(n.localStore,e);n.currentUser=e,function(i,o){i.Ma.forEach(a=>{a.forEach(c=>{c.reject(new U(A.CANCELLED,o))})}),i.Ma.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await oo(n,r.us)}}function Sk(t,e){const n=te(t),r=n.Ca.get(e);if(r&&r.pa)return ce().add(r.key);{let s=ce();const i=n.Sa.get(e);if(!i)return s;for(const o of i){const a=n.wa.get(o);s=s.unionWith(a.view.Ia)}return s}}function m0(t){const e=te(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=h0.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=Sk.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=wk.bind(null,e),e.ya.u_=uk.bind(null,e.eventManager),e.ya.La=hk.bind(null,e.eventManager),e}function Pk(t){const e=te(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Ik.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Ak.bind(null,e),e}class Zp{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=gc(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return NO(this.persistence,new DO,e.initialUser,this.serializer)}createPersistence(e){return new xO(Gh.Hr,this.serializer)}createSharedClientState(e){return new jO}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Ck{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Jp(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Rk.bind(null,this.syncEngine),await ak(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new lk}()}createDatastore(e){const n=gc(e.databaseInfo.databaseId),r=function(i){return new KO(i)}(e.databaseInfo);return function(i,o,a,c){return new QO(i,o,a,c)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,s,i,o,a){return new JO(r,s,i,o,a)}(this.localStore,this.datastore,e.asyncQueue,n=>Jp(this.syncEngine,n,0),function(){return Wp.D()?new Wp:new qO}())}createSyncEngine(e,n){return function(s,i,o,a,c,l,u){const h=new mk(s,i,o,a,c,l);return u&&(h.Oa=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e;await async function(r){const s=te(r);V("RemoteStore","RemoteStore shutting down."),s.v_.add(5),await io(s),s.M_.shutdown(),s.x_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate()}}/**
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
 */class g0{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.qa(this.observer.next,e)}error(e){this.observer.error?this.qa(this.observer.error,e):an("Uncaught Error in snapshot listener:",e.toString())}Qa(){this.muted=!0}qa(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class xk{constructor(e,n,r,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=ot.UNAUTHENTICATED,this.clientId=pv.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async i=>{V("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(r,i=>(V("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new U(A.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new gn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=td(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function ul(t,e){t.asyncQueue.verifyOperationInProgress(),V("FirestoreClient","Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await Qv(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function em(t,e){t.asyncQueue.verifyOperationInProgress();const n=await kk(t);V("FirestoreClient","Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>Gp(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,s)=>Gp(e.remoteStore,s)),t._onlineComponents=e}function Ok(t){return t.name==="FirebaseError"?t.code===A.FAILED_PRECONDITION||t.code===A.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function kk(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){V("FirestoreClient","Using user provided OfflineComponentProvider");try{await ul(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!Ok(n))throw n;fs("Error using user provided cache. Falling back to memory cache: "+n),await ul(t,new Zp)}}else V("FirestoreClient","Using default OfflineComponentProvider"),await ul(t,new Zp);return t._offlineComponents}async function _0(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(V("FirestoreClient","Using user provided OnlineComponentProvider"),await em(t,t._uninitializedComponentsProvider._online)):(V("FirestoreClient","Using default OnlineComponentProvider"),await em(t,new Ck))),t._onlineComponents}function Dk(t){return _0(t).then(e=>e.syncEngine)}async function yu(t){const e=await _0(t),n=e.eventManager;return n.onListen=gk.bind(null,e.syncEngine),n.onUnlisten=vk.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=_k.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=Ek.bind(null,e.syncEngine),n}function Vk(t,e,n={}){const r=new gn;return t.asyncQueue.enqueueAndForget(async()=>function(i,o,a,c,l){const u=new g0({next:d=>{o.enqueueAndForget(()=>o0(i,h));const f=d.docs.has(a);!f&&d.fromCache?l.reject(new U(A.UNAVAILABLE,"Failed to get document because the client is offline.")):f&&d.fromCache&&c&&c.source==="server"?l.reject(new U(A.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):l.resolve(d)},error:d=>l.reject(d)}),h=new a0(uc(a.path),u,{includeMetadataChanges:!0,ta:!0});return i0(i,h)}(await yu(t),t.asyncQueue,e,n,r)),r.promise}/**
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
 */function y0(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
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
 */const tm=new Map;/**
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
 */function v0(t,e,n){if(!n)throw new U(A.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function Nk(t,e,n,r){if(e===!0&&r===!0)throw new U(A.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function nm(t){if(!K.isDocumentKey(t))throw new U(A.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function rm(t){if(K.isDocumentKey(t))throw new U(A.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function vc(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":J()}function _n(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new U(A.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=vc(t);throw new U(A.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class sm{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new U(A.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new U(A.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Nk("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=y0((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new U(A.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new U(A.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new U(A.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Ec{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new sm({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new U(A.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new U(A.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new sm(e),e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new ex;switch(r.type){case"firstParty":return new sx(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new U(A.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=tm.get(n);r&&(V("ComponentProvider","Removing Datastore"),tm.delete(n),r.terminate())}(this),Promise.resolve()}}function Mk(t,e,n,r={}){var s;const i=(t=_n(t,Ec))._getSettings(),o=`${e}:${n}`;if(i.host!=="firestore.googleapis.com"&&i.host!==o&&fs("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),t._setSettings(Object.assign(Object.assign({},i),{host:o,ssl:!1})),r.mockUserToken){let a,c;if(typeof r.mockUserToken=="string")a=r.mockUserToken,c=ot.MOCK_USER;else{a=dR(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const l=r.mockUserToken.sub||r.mockUserToken.user_id;if(!l)throw new U(A.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new ot(l)}t._authCredentials=new tx(new fv(a,c))}}/**
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
 */class Ur{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Ur(this.firestore,e,this._query)}}class gt{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new zn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new gt(this.firestore,e,this._key)}}class zn extends Ur{constructor(e,n,r){super(e,n,uc(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new gt(this.firestore,null,new K(e))}withConverter(e){return new zn(this.firestore,e,this._path)}}function Dr(t,e,...n){if(t=Ge(t),v0("collection","path",e),t instanceof Ec){const r=Se.fromString(e,...n);return rm(r),new zn(t,null,r)}{if(!(t instanceof gt||t instanceof zn))throw new U(A.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Se.fromString(e,...n));return rm(r),new zn(t.firestore,null,r)}}function E0(t,e,...n){if(t=Ge(t),arguments.length===1&&(e=pv.newId()),v0("doc","path",e),t instanceof Ec){const r=Se.fromString(e,...n);return nm(r),new gt(t,null,new K(r))}{if(!(t instanceof gt||t instanceof zn))throw new U(A.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Se.fromString(e,...n));return nm(r),new gt(t.firestore,t instanceof zn?t.converter:null,new K(r))}}/**
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
 */class Lk{constructor(){this.nu=Promise.resolve(),this.ru=[],this.iu=!1,this.su=[],this.ou=null,this._u=!1,this.au=!1,this.uu=[],this.jo=new Jv(this,"async_queue_retry"),this.cu=()=>{const n=ll();n&&V("AsyncQueue","Visibility state changed to "+n.visibilityState),this.jo.Ko()};const e=ll();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.cu)}get isShuttingDown(){return this.iu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.lu(),this.hu(e)}enterRestrictedMode(e){if(!this.iu){this.iu=!0,this.au=e||!1;const n=ll();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.cu)}}enqueue(e){if(this.lu(),this.iu)return new Promise(()=>{});const n=new gn;return this.hu(()=>this.iu&&this.au?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.ru.push(e),this.Pu()))}async Pu(){if(this.ru.length!==0){try{await this.ru[0](),this.ru.shift(),this.jo.reset()}catch(e){if(!no(e))throw e;V("AsyncQueue","Operation failed with retryable error: "+e)}this.ru.length>0&&this.jo.qo(()=>this.Pu())}}hu(e){const n=this.nu.then(()=>(this._u=!0,e().catch(r=>{this.ou=r,this._u=!1;const s=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw an("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this._u=!1,r))));return this.nu=n,n}enqueueAfterDelay(e,n,r){this.lu(),this.uu.indexOf(e)>-1&&(n=0);const s=ed.createAndSchedule(this,e,n,r,i=>this.Iu(i));return this.su.push(s),s}lu(){this.ou&&J()}verifyOperationInProgress(){}async Tu(){let e;do e=this.nu,await e;while(e!==this.nu)}Eu(e){for(const n of this.su)if(n.timerId===e)return!0;return!1}du(e){return this.Tu().then(()=>{this.su.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.su)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Tu()})}Au(e){this.uu.push(e)}Iu(e){const n=this.su.indexOf(e);this.su.splice(n,1)}}function im(t){return function(n,r){if(typeof n!="object"||n===null)return!1;const s=n;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1}(t,["next","error","complete"])}class vs extends Ec{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=function(){return new Lk}(),this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||T0(this),this._firestoreClient.terminate()}}function Fk(t,e){const n=typeof t=="object"?t:P_(),r=typeof t=="string"?t:e||"(default)",s=th(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=uR("firestore");i&&Mk(s,...i)}return s}function sd(t){return t._firestoreClient||T0(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function T0(t){var e,n,r;const s=t._freezeSettings(),i=function(a,c,l,u){return new yx(a,c,l,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,y0(u.experimentalLongPollingOptions),u.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._firestoreClient=new xk(t._authCredentials,t._appCheckCredentials,t._queue,i),!((n=s.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.localCache.kind,_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider})}/**
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
 */class Es{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Es(dt.fromBase64String(e))}catch(n){throw new U(A.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Es(dt.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class Tc{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new U(A.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new tt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class id{constructor(e){this._methodName=e}}/**
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
 */class od{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new U(A.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new U(A.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ge(this._lat,e._lat)||ge(this._long,e._long)}}/**
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
 */const Uk=/^__.*__$/;class $k{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new sr(e,this.data,this.fieldMask,n,this.fieldTransforms):new ro(e,this.data,n,this.fieldTransforms)}}class w0{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new sr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function I0(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw J()}}class ad{constructor(e,n,r,s,i,o){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Ru(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Vu(){return this.settings.Vu}mu(e){return new ad(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}fu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.mu({path:r,gu:!1});return s.pu(e),s}yu(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.mu({path:r,gu:!1});return s.Ru(),s}wu(e){return this.mu({path:void 0,gu:!0})}Su(e){return Ta(e,this.settings.methodName,this.settings.bu||!1,this.path,this.settings.Du)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Ru(){if(this.path)for(let e=0;e<this.path.length;e++)this.pu(this.path.get(e))}pu(e){if(e.length===0)throw this.Su("Document fields must not be empty");if(I0(this.Vu)&&Uk.test(e))throw this.Su('Document fields cannot begin and end with "__"')}}class Bk{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||gc(e)}Cu(e,n,r,s=!1){return new ad({Vu:e,methodName:n,Du:r,path:tt.emptyPath(),gu:!1,bu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function cd(t){const e=t._freezeSettings(),n=gc(t._databaseId);return new Bk(t._databaseId,!!e.ignoreUndefinedProperties,n)}function jk(t,e,n,r,s,i={}){const o=t.Cu(i.merge||i.mergeFields?2:0,e,n,s);ld("Data must be an object, but it was:",o,r);const a=A0(r,o);let c,l;if(i.merge)c=new Rt(o.fieldMask),l=o.fieldTransforms;else if(i.mergeFields){const u=[];for(const h of i.mergeFields){const d=vu(e,h,n);if(!o.contains(d))throw new U(A.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);R0(u,d)||u.push(d)}c=new Rt(u),l=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,l=o.fieldTransforms;return new $k(new Et(a),c,l)}class wc extends id{_toFieldTransform(e){if(e.Vu!==2)throw e.Vu===1?e.Su(`${this._methodName}() can only appear at the top level of your update data`):e.Su(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof wc}}function qk(t,e,n,r){const s=t.Cu(1,e,n);ld("Data must be an object, but it was:",s,r);const i=[],o=Et.empty();Lr(r,(c,l)=>{const u=ud(e,c,n);l=Ge(l);const h=s.yu(u);if(l instanceof wc)i.push(u);else{const d=ao(l,h);d!=null&&(i.push(u),o.set(u,d))}});const a=new Rt(i);return new w0(o,a,s.fieldTransforms)}function Hk(t,e,n,r,s,i){const o=t.Cu(1,e,n),a=[vu(e,r,n)],c=[s];if(i.length%2!=0)throw new U(A.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<i.length;d+=2)a.push(vu(e,i[d])),c.push(i[d+1]);const l=[],u=Et.empty();for(let d=a.length-1;d>=0;--d)if(!R0(l,a[d])){const f=a[d];let g=c[d];g=Ge(g);const v=o.yu(f);if(g instanceof wc)l.push(f);else{const y=ao(g,v);y!=null&&(l.push(f),u.set(f,y))}}const h=new Rt(l);return new w0(u,h,o.fieldTransforms)}function zk(t,e,n,r=!1){return ao(n,t.Cu(r?4:3,e))}function ao(t,e){if(b0(t=Ge(t)))return ld("Unsupported field value:",e,t),A0(t,e);if(t instanceof id)return function(r,s){if(!I0(s.Vu))throw s.Su(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Su(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.gu&&e.Vu!==4)throw e.Su("Nested arrays are not supported");return function(r,s){const i=[];let o=0;for(const a of r){let c=ao(a,s.wu(o));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),o++}return{arrayValue:{values:i}}}(t,e)}return function(r,s){if((r=Ge(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Ux(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=He.fromDate(r);return{timestampValue:va(s.serializer,i)}}if(r instanceof He){const i=new He(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:va(s.serializer,i)}}if(r instanceof od)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Es)return{bytesValue:jv(s.serializer,r._byteString)};if(r instanceof gt){const i=s.databaseId,o=r.firestore._databaseId;if(!o.isEqual(i))throw s.Su(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Kh(r.firestore._databaseId||s.databaseId,r._key.path)}}throw s.Su(`Unsupported field value: ${vc(r)}`)}(t,e)}function A0(t,e){const n={};return mv(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Lr(t,(r,s)=>{const i=ao(s,e.fu(r));i!=null&&(n[r]=i)}),{mapValue:{fields:n}}}function b0(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof He||t instanceof od||t instanceof Es||t instanceof gt||t instanceof id)}function ld(t,e,n){if(!b0(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const r=vc(n);throw r==="an object"?e.Su(t+" a custom object"):e.Su(t+" "+r)}}function vu(t,e,n){if((e=Ge(e))instanceof Tc)return e._internalPath;if(typeof e=="string")return ud(t,e);throw Ta("Field path arguments must be of type string or ",t,!1,void 0,n)}const Kk=new RegExp("[~\\*/\\[\\]]");function ud(t,e,n){if(e.search(Kk)>=0)throw Ta(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Tc(...e.split("."))._internalPath}catch{throw Ta(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Ta(t,e,n,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new U(A.INVALID_ARGUMENT,a+t+c)}function R0(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class S0{constructor(e,n,r,s,i){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new gt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Wk(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(hd("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class Wk extends S0{data(){return super.data()}}function hd(t,e){return typeof e=="string"?ud(t,e):e instanceof Tc?e._internalPath:e._delegate._internalPath}/**
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
 */function Gk(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new U(A.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class dd{}class P0 extends dd{}function co(t,e,...n){let r=[];e instanceof dd&&r.push(e),r=r.concat(n),function(i){const o=i.filter(c=>c instanceof pd).length,a=i.filter(c=>c instanceof fd).length;if(o>1||o>0&&a>0)throw new U(A.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)t=s._apply(t);return t}class fd extends P0{constructor(e,n,r){super(),this._field=e,this._op=n,this._value=r,this.type="where"}static _create(e,n,r){return new fd(e,n,r)}_apply(e){const n=this._parse(e);return C0(e._query,n),new Ur(e.firestore,e.converter,lu(e._query,n))}_parse(e){const n=cd(e.firestore);return function(i,o,a,c,l,u,h){let d;if(l.isKeyField()){if(u==="array-contains"||u==="array-contains-any")throw new U(A.INVALID_ARGUMENT,`Invalid Query. You can't perform '${u}' queries on documentId().`);if(u==="in"||u==="not-in"){am(h,u);const f=[];for(const g of h)f.push(om(c,i,g));d={arrayValue:{values:f}}}else d=om(c,i,h)}else u!=="in"&&u!=="not-in"&&u!=="array-contains-any"||am(h,u),d=zk(a,o,h,u==="in"||u==="not-in");return $e.create(l,u,d)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}class pd extends dd{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new pd(e,n)}_parse(e){const n=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return n.length===1?n[0]:jt.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,i){let o=s;const a=i.getFlattenedFilters();for(const c of a)C0(o,c),o=lu(o,c)}(e._query,n),new Ur(e.firestore,e.converter,lu(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class md extends P0{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new md(e,n)}_apply(e){const n=function(s,i,o){if(s.startAt!==null)throw new U(A.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new U(A.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new ki(i,o)}(e._query,this._field,this._direction);return new Ur(e.firestore,e.converter,function(s,i){const o=s.explicitOrderBy.concat([i]);return new Rs(s.path,s.collectionGroup,o,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(e._query,n))}}function Ic(t,e="asc"){const n=e,r=hd("orderBy",t);return md._create(r,n)}function om(t,e,n){if(typeof(n=Ge(n))=="string"){if(n==="")throw new U(A.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Av(e)&&n.indexOf("/")!==-1)throw new U(A.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(Se.fromString(n));if(!K.isDocumentKey(r))throw new U(A.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Pp(t,new K(r))}if(n instanceof gt)return Pp(t,n._key);throw new U(A.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${vc(n)}.`)}function am(t,e){if(!Array.isArray(t)||t.length===0)throw new U(A.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function C0(t,e){const n=function(s,i){for(const o of s)for(const a of o.getFlattenedFilters())if(i.indexOf(a.op)>=0)return a.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new U(A.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new U(A.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}class Qk{convertValue(e,n="none"){switch(kr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ue(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Or(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw J()}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return Lr(e,(s,i)=>{r[s]=this.convertValue(i,n)}),r}convertGeoPoint(e){return new od(Ue(e.latitude),Ue(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=$h(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(Ci(e));default:return null}}convertTimestamp(e){const n=Qn(e);return new He(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Se.fromString(e);Ae(Gv(r));const s=new xi(r.get(1),r.get(3)),i=new K(r.popFirst(5));return s.isEqual(n)||an(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
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
 */function Yk(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
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
 */class Bs{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class x0 extends S0{constructor(e,n,r,s,i,o){super(e,n,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Wo(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(hd("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Wo extends x0{data(e={}){return super.data(e)}}class Jk{constructor(e,n,r,s){this._firestore=e,this._userDataWriter=n,this._snapshot=s,this.metadata=new Bs(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Wo(this._firestore,this._userDataWriter,r.key,r,new Bs(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new U(A.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let o=0;return s._snapshot.docChanges.map(a=>{const c=new Wo(s._firestore,s._userDataWriter,a.doc.key,a.doc,new Bs(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);return a.doc,{type:"added",doc:c,oldIndex:-1,newIndex:o++}})}{let o=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(a=>i||a.type!==3).map(a=>{const c=new Wo(s._firestore,s._userDataWriter,a.doc.key,a.doc,new Bs(s._snapshot.mutatedKeys.has(a.doc.key),s._snapshot.fromCache),s.query.converter);let l=-1,u=-1;return a.type!==0&&(l=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),u=o.indexOf(a.doc.key)),{type:Xk(a.type),doc:c,oldIndex:l,newIndex:u}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function Xk(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return J()}}/**
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
 */function Zk(t){t=_n(t,gt);const e=_n(t.firestore,vs);return Vk(sd(e),t._key).then(n=>D0(e,t,n))}class O0 extends Qk{constructor(e){super(),this.firestore=e}convertBytes(e){return new Es(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new gt(this.firestore,null,n)}}function eD(t,e,n,...r){t=_n(t,gt);const s=_n(t.firestore,vs),i=cd(s);let o;return o=typeof(e=Ge(e))=="string"||e instanceof Tc?Hk(i,"updateDoc",t._key,e,n,r):qk(i,"updateDoc",t._key,e),k0(s,[o.toMutation(t._key,nn.exists(!0))])}function cm(t,e){const n=_n(t.firestore,vs),r=E0(t),s=Yk(t.converter,e);return k0(n,[jk(cd(t.firestore),"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,nn.exists(!1))]).then(()=>r)}function lo(t,...e){var n,r,s;t=Ge(t);let i={includeMetadataChanges:!1,source:"default"},o=0;typeof e[o]!="object"||im(e[o])||(i=e[o],o++);const a={includeMetadataChanges:i.includeMetadataChanges,source:i.source};if(im(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(r=h.error)===null||r===void 0?void 0:r.bind(h),e[o+2]=(s=h.complete)===null||s===void 0?void 0:s.bind(h)}let c,l,u;if(t instanceof gt)l=_n(t.firestore,vs),u=uc(t._key.path),c={next:h=>{e[o]&&e[o](D0(l,t,h))},error:e[o+1],complete:e[o+2]};else{const h=_n(t,Ur);l=_n(h.firestore,vs),u=h._query;const d=new O0(l);c={next:f=>{e[o]&&e[o](new Jk(l,d,h,f))},error:e[o+1],complete:e[o+2]},Gk(t._query)}return function(d,f,g,v){const y=new g0(v),E=new a0(f,y,g);return d.asyncQueue.enqueueAndForget(async()=>i0(await yu(d),E)),()=>{y.Qa(),d.asyncQueue.enqueueAndForget(async()=>o0(await yu(d),E))}}(sd(l),u,a,c)}function k0(t,e){return function(r,s){const i=new gn;return r.asyncQueue.enqueueAndForget(async()=>Tk(await Dk(r),s,i)),i.promise}(sd(t),e)}function D0(t,e,n){const r=n.docs.get(e._key),s=new O0(t);return new x0(t,s,e._key,r,new Bs(n.hasPendingWrites,n.fromCache),e.converter)}(function(e,n=!0){(function(s){bs=s})(Ts),ls(new Sr("firestore",(r,{instanceIdentifier:s,options:i})=>{const o=r.getProvider("app").getImmediate(),a=new vs(new nx(r.getProvider("auth-internal")),new ox(r.getProvider("app-check-internal")),function(l,u){if(!Object.prototype.hasOwnProperty.apply(l.options,["projectId"]))throw new U(A.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new xi(l.options.projectId,u)}(o,s),o);return i=Object.assign({useFetchStreams:n},i),a._setSettings(i),a},"PUBLIC").setMultipleInstances(!0)),qn(Ip,"4.6.0",e),qn(Ip,"4.6.0","esm2017")})();const tD={class:"w-full grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 md:gap-6 xl:gap-8 text-[16px] text-[#E5E7EB] font-medium px-[2%] items-start"},nD={class:"flex gap-2 items-center"},rD=["src"],sD={key:0},iD={class:"text-sm"},oD={key:1,class:"text-sm"},aD={class:"text-[19px]"},cD={class:"text-gray-400"},lD={__name:"Active",setup(t){const e=new Date,n=Ee([]),r=De(()=>n.value.filter(i=>new Date(i.deadline)>=e)),s=i=>{const o={weekday:"long",month:"long",day:"numeric",year:"numeric"};return new Date(i).toLocaleDateString("en-US",o)};return Dt(()=>{const i=co(Dr(Jn,"Takes"),Ic("date","desc")),o=lo(i,a=>{n.value=a.docs.map(c=>({id:c.data().id,description:c.data().description,title:c.data().title,options:c.data().options,deadline:c.data().endDate,created:c.data().date,uid:c.data().uid,uicon:c.data().uicon,user:c.data().user,email:c.data().email}))});tr(o)}),(i,o)=>(oe(),he("section",tD,[(oe(!0),he(Xe,null,br(r.value,a=>(oe(),he("div",{key:a.id,class:"w-full border rounded-lg border-green-700 md:hover:border-green-600 duration-200 md:skew-x-6 md:hover:skew-x-0 bg-[#19702713]"},[Oe(Ve(_i),{to:/Take/+a.id,class:"flex flex-col gap-4 bg-[#161313] p-3 rounded-lg border border-gray-700 md:skew-x-4 md:translate-x-[-10px] md:translate-y-[-10px] duration-300 md:hover:translate-x-0 md:hover:translate-y-0"},{default:Zr(()=>[D("div",nD,[D("img",{src:a.uicon,alt:"",srcset:"",class:"w-8 rounded-full"},null,8,rD),a.user?(oe(),he("div",sD,[D("h2",iD,bt(a.user),1)])):(oe(),he("div",oD,[D("h2",null,bt(a.email.slice(0,10)),1)]))]),D("h2",aD,bt(a.title),1),D("div",cD," Until "+bt(s(a.deadline)),1)]),_:2},1032,["to"])]))),128))]))}},uD={class:"w-full grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-3 md:gap-6 xl:gap-8 text-[16px] text-[#E5E7EB] font-medium px-[2%] items-start"},hD={class:"flex gap-2 items-center"},dD=["src"],fD={class:"text-sm"},pD={class:"text-[20px]"},mD=D("div",{class:"flex justify-start"},[D("div",{class:"bg-yellow-400 rounded-full text-black py-1 px-2 text-sm font-medium"}," Expired ")],-1),gD={__name:"Past",setup(t){const e=new Date,n=Ee([]),r=De(()=>n.value.filter(s=>new Date(s.deadline)<e));return Dt(()=>{const s=co(Dr(Jn,"Takes"),Ic("date","desc")),i=lo(s,o=>{n.value=o.docs.map(a=>({id:a.data().id,description:a.data().description,title:a.data().title,options:a.data().options,deadline:a.data().endDate,created:a.data().date,uid:a.data().uid,uicon:a.data().uicon,user:a.data().user}))});tr(i)}),(s,i)=>(oe(),he("section",uD,[(oe(!0),he(Xe,null,br(r.value,o=>(oe(),he("div",{key:o.id,class:"w-full border rounded-lg border-red-700 md:hover:border-red-600 duration-200 md:skew-x-6 md:hover:skew-x-0 bg-[#7a1d1d10]"},[Oe(Ve(_i),{to:/Take/+o.id,class:"flex flex-col gap-4 bg-[#161313] p-3 rounded-lg border border-gray-700 md:skew-x-4 md:translate-x-[-10px] md:translate-y-[-10px] duration-300 hover:translate-x-0 hover:translate-y-0"},{default:Zr(()=>[D("div",hD,[D("img",{src:o.uicon,alt:"",srcset:"",class:"w-8 rounded-full"},null,8,dD),D("h2",fD,bt(o.user),1)]),D("h2",pD,bt(o.title),1),mD]),_:2},1032,["to"])]))),128))]))}},_D={class:"flex flex-col gap-8 lg:px-[7%]"},yD={class:"flex flex-col gap-10"},vD=D("div",{class:"flex items-center gap-2"},[D("h2",{class:"text-green-400 takes font-medium"},"Active Takes"),D("i",{class:"fa-solid fa-bowling-ball text-gray-100 animate-spin xl:text-[18px]"})],-1),ED={class:"flex flex-col gap-10"},TD=D("div",{class:"flex items-center gap-2"},[D("h2",{class:"text-red-400 takes font-medium"},"Past Takes"),D("i",{class:"fa-regular fa-clock text-gray-100 animate-pulse xl:text-[18px]"})],-1),wD={__name:"AllTakes",setup(t){const e=Ee([]);return Dt(()=>{const n=co(Dr(Jn,"Takes"),Ic("date","desc")),r=lo(n,s=>{e.value=s.docs.map(i=>({id:i.data().id,description:i.data().Description,title:i.data().title,options:i.data().options,deadline:i.data().endDate,created:i.data().date,uid:i.data().uid,uicon:i.data().uicon,user:i.data().user}))});console.log(e),tr(r)}),(n,r)=>(oe(),he("div",_D,[D("div",yD,[vD,Oe(lD)]),D("div",ED,[TD,Oe(gD)])]))}},ID={class:"flex flex-col gap-8 w-full"},AD={__name:"App",setup(t){return(e,n)=>(oe(),he("section",ID,[Oe(W1),Oe(Ve(g_))]))}},bD={class:"w-full px-[3%] md:px-[14%] flex flex-col gap-7 text-[--text2-color] text-sm placeholder-[rgba(255,255,255,0.7)]"},RD={class:"flex flex-col gap-2"},SD=D("span",{class:"text-base font-medium"},"Title",-1),PD={class:"flex flex-col gap-2"},CD=D("span",{class:"text-base font-medium"},"Description",-1),xD={class:"flex flex-col gap-2"},OD=D("div",{class:"flex gap-1 flex-col"},[D("span",{class:"text-base font-medium"},"Voting Options"),D("div",{class:"text-[rgba(255,255,255,0.7)] text-[13px]"},"You can not edit your vote option. Please double check 📌.")],-1),kD={class:"flex flex-col gap-1 font-semibold"},DD={class:"flex justify-between text-yellow-400 text-base"},VD=["onClick"],ND={class:"flex flex-col gap-2"},MD=D("span",{class:"text-base font-medium"},"End date",-1),LD={class:"flex rounded-lg justify-between items-center p-1 bg-[#5349492d] border border-[#53494954] duration-300 hover:bg-[#53494971] hover:border-[#53494954] hover:text-[rgba(255,255,255,0.7)] px-2"},FD=D("span",{class:"text-[rgba(255,255,255,0.7)]"},"Pick a date",-1),UD={__name:"CreateTake",setup(t){const e=Ee(!1),n=Ba(),r=hs();let s=[],i=[],o=[],a=[];Dt(()=>{zi(r,E=>{if(E){e.value=!0;let I=E.displayName,T=E.photoURL,C=E.uid,$=E.email;return s.value=I,i.value=T,o.value=C,a.value=$,s}else e.value=!1})});const c=Math.floor(Math.random()*1e6),l=Ee(""),u=Ee(""),h=Ee(""),d=Ee(""),f=Ee([]),g=()=>{if(h.value.length>0)return f.value.push({option:h.value,percent:0}),h.value="",f.value},v=()=>{cm(Dr(Jn,"Takes"),{id:c,title:l.value,description:u.value,options:f.value,endDate:d.value,date:new Date(Date.now()).toLocaleString(),uid:o.value,uicon:i.value,user:s.value,email:a.value}),l.value="",d.value="",f.value="",u.value="",n.push("/")},y=()=>{const E=f.value.map(I=>typeof I=="string"?{option:I,percent:0}:I);cm(Dr(Jn,"Votes"),{author:{uid:o.value,profileImg:i.value,name:s.value},totalVotes:0,voters:[],options:E,title:l.value,id:c})};return(E,I)=>(oe(),he("div",bD,[D("div",RD,[SD,Ns(D("input",{type:"text","onUpdate:modelValue":I[0]||(I[0]=T=>l.value=T),name:"Name",placeholder:"Your best take is...",class:"px-3 py-2 rounded-lg bg-[#5349492d] border border-[#53494954] placeholder-[rgba(255,255,255,0.7)]"},null,512),[[vo,l.value]])]),D("div",PD,[CD,Ns(D("input",{"onUpdate:modelValue":I[1]||(I[1]=T=>u.value=T),name:"note",id:"note",cols:"30",rows:"2",class:"rounded-lg p-3 bg-[#5349492d] border border-[#53494954] placeholder-[rgba(255,255,255,0.7)] py-3",placeholder:"(optional) Take description..."},null,512),[[vo,u.value]])]),D("div",xD,[OD,(oe(!0),he(Xe,null,br(f.value,(T,C)=>(oe(),he("div",kD,[D("div",DD,[D("div",null,bt(T.option),1),D("i",{class:"fa-regular fa-trash-can",onClick:$=>{f.value.splice(C,1)}},null,8,VD)])]))),256)),Ns(D("input",{onKeyup:ow(g,["enter"]),"onUpdate:modelValue":I[2]||(I[2]=T=>h.value=T),name:"note",id:"note",cols:"30",rows:"2",class:"rounded-lg p-3 bg-[#5349492d] border border-[#53494954] placeholder-[rgba(255,255,255,0.7)]",placeholder:"Press enter to add more options",required:""},null,544),[[vo,h.value]])]),D("div",ND,[MD,D("div",LD,[FD,Ns(D("input",{"onUpdate:modelValue":I[3]||(I[3]=T=>d.value=T),type:"date",class:"rounded-lg p-1 text-[17px] text-white bg-transparent text-[rgba(255,255,255,0.7)]",required:""},null,512),[[vo,d.value]])])]),D("button",{onClick:I[4]||(I[4]=T=>(y(),v())),class:"text-base w-full bg-green-500 border-none rounded-lg text-gray-900 cursor-pointer p-2 font-semibold"},"Create")]))}},$D={key:0},BD={__name:"Create",setup(t){Ee(!1);const e=Ee(!1);Ba();const n=hs();let r=[];return Dt(()=>{zi(n,s=>{if(s){e.value=!0;let i=s.displayName;return s.photoURL,r.value=i,r}else e.value=!1})}),(s,i)=>e.value?(oe(),he("div",$D,[Oe(UD)])):Rr("",!0)}},jD={class:"pt-4 md:pt-6"},qD={class:"text-white"},HD={key:0,class:"flex flex-col gap-6 xl:gap-10"},zD={key:0,class:""},KD=["onClick","id"],WD={class:"flex gap-2 justify-between bg-[#dcfd1e00] w-full rounded-r-lg relative py-[1px]"},GD=D("div",null,null,-1),QD={class:"text-sm lg:text-base font-medium text-gray-300"},YD={__name:"Voting",setup(t){const e=__(),n=Ee([]),r=Ee(!1),s=hs();let i=[],o=[];Dt(()=>{zi(s,c=>{if(c){r.value=!0;let l=c.displayName;c.photoURL;let u=c.uid;return i.value=l,o.value=u,i}else r.value=!1})}),Dt(()=>{const c=co(Dr(Jn,"Votes")),l=lo(c,u=>{n.value=u.docs.map(h=>({options:h.data().options,totalVotes:h.data().totalVotes,author:h.data().author,id:h.data().id,docId:h.id}))});tr(l)});const a=async(c,l,u,h)=>{try{const d=o.value,f=E0(Jn,"Votes",c),g=await Zk(f);if(g.exists()){const v=g.data();if(v.voters&&v.voters.includes(d)){console.error("User has already voted for this item");return}v.options[l].percent=(u+1)/(h+1),v.options[l].percent=u+1,v.totalVotes=h+1,v.voters?v.voters.push(d):v.voters=[d],await eD(f,v),console.log("Vote option updated successfully")}else console.error("Document does not exist")}catch(d){console.error("Error updating vote option:",d)}};return(c,l)=>(oe(),he("div",jD,[(oe(!0),he(Xe,null,br(n.value,u=>(oe(),he("div",qD,[u.id==Ve(e).params.id?(oe(),he("div",HD,[u.options?(oe(),he("div",zD,[(oe(!0),he(Xe,null,br(u.options,(h,d)=>(oe(),he("div",{key:h,class:"text-[20px] flex flex-col gap-4 xl:gap-5 w-full"},[D("button",{onClick:f=>a(u.docId,d,h.percent,u.totalVotes),class:"flex justify-between gap-2 items-center",id:d},[D("div",WD,[D("div",{class:"flex justify-between gap-1 bg-green-600 rounded-r-full lg:p-2",style:Sa({width:h.percent/u.totalVotes.toFixed(2)*100+"%"})},[D("div",null,bt(h.option),1)],4)]),D("div",null,bt((h.percent/u.totalVotes).toFixed(2)*100)+"%",1)],8,KD),GD]))),128)),D("div",QD,bt(u.totalVotes)+" votes",1)])):Rr("",!0)])):Rr("",!0)]))),256))]))}},JD=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},XD={},ZD={class:"text-yellow-400 font-bold text-2xl"};function eV(t,e){return oe(),he("div",ZD,"heyyy")}const tV=JD(XD,[["render",eV]]),nV={key:0,class:"px-[2%] lg:px-[8%]"},rV={class:"grid grid-cols-2 gap-2"},sV={class:"flex flex-col"},iV={class:"text-white"},oV={key:0,class:"flex flex-col gap-3"},aV={class:"flex flex-col gap-2 w-full"},cV={class:"text-[28px] font-semibold text-yellow-400"},lV={class:"text-gray-400 flex gap-2 items-center text-lg"},uV=D("i",{class:"fa-solid fa-clock-rotate-left text-green-400"},null,-1),hV={class:""},dV={key:1,class:"text-white flex flex-col gap-24 px-[2%] lg:px-[8%]"},fV={class:"text-white"},pV={key:0,class:"flex flex-col gap-3"},mV={class:"text-[28px] font-semibold text-yellow-400"},gV=D("div",{class:"text-3xl font-bold"},"Login to vote",-1),_V=D("i",{class:"fa-brands fa-github"},null,-1),yV=D("h2",null,"Login with Github",-1),vV=[_V,yV],EV={__name:"Details",setup(t){const e=__(),n=Ee(!1),r=Ba(),s=hs(),i=Ee([]),o=()=>{const a=new Qt;oy(hs(),a).then(c=>{console.log(c.user),displayNames(),r.push("/home")}).catch(c=>{})};return Dt(()=>{zi(s,h=>{h?(n.value=!0,h.displayName,h.photoURL):n.value=!1});const a=new Date,c=h=>{const f=new Date(h)-a,g=Math.floor(f/(1e3*60*60*24)),v=Math.floor(f%(1e3*60*60*24)/(1e3*60*60)),y=Math.floor(f%(1e3*60*60)/(1e3*60));return g<0||v<0||y<0?"0d: 0h: 0m":`${g}d: ${v}h: ${y}m`},l=co(Dr(Jn,"Takes"),Ic("date","desc")),u=lo(l,h=>{i.value=h.docs.map(d=>({id:d.data().id,description:d.data().description,title:d.data().title,options:d.data().options,deadline:d.data().endDate,created:d.data().date,uid:d.data().uid,uicon:d.data().uicon,user:d.data().user,email:d.data().email,remainingTime:c(d.data().endDate)}))});tr(u)}),(a,c)=>n.value?(oe(),he("div",nV,[D("div",rV,[D("div",sV,[D("div",iV,[(oe(!0),he(Xe,null,br(i.value,l=>(oe(),he("div",null,[l.id==Ve(e).params.id?(oe(),he("div",oV,[D("div",aV,[D("div",cV,bt(l.title),1),D("div",lV,[uV,Mu(" "+bt(l.remainingTime),1)])])])):Rr("",!0)]))),256))]),Oe(YD)]),D("div",hV,[Oe(tV)])])])):(oe(),he("div",dV,[D("div",fV,[(oe(!0),he(Xe,null,br(i.value,l=>(oe(),he("div",null,[l.id==Ve(e).params.id?(oe(),he("div",pV,[D("div",mV,bt(l.title),1)])):Rr("",!0)]))),256))]),D("div",{class:"w-full border border-gray-300 border-dashed rounded-sm h-[40vh] flex flex-col gap-5 justify-center items-center"},[gV,D("button",{onClick:o,class:"bg-purple-900 flex px-3 lg:px-5 py-2 duration-300 hover:bg-zinc-700 gap-2 justify-center items-center rounded-md 2xl:text-[17px]"},vV)])]))}},TV=tR({history:kb("/"),routes:[{path:"/",name:"home",component:wD},{path:"/create",name:"create",component:BD},{path:"/Take/:id",name:"take details",component:EV}]});var wV="firebase",IV="10.11.0";/**
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
 */qn(wV,IV,"app");const AV={apiKey:"AIzaSyDkjxUiWC5qbLkxQfYY2N9-tXwq2U9n7FY",authDomain:"best-takes.firebaseapp.com",projectId:"best-takes",storageBucket:"best-takes.appspot.com",messagingSenderId:"371863040811",appId:"1:371863040811:web:3bfc5940946da0d71c4b6e"},bV=S_(AV),Jn=Fk(bV),gd=lw(AD);gd.use(TV);gd.use(tb);gd.mount("#app");
