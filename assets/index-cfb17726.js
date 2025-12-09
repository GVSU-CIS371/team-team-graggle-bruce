(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=t(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.25
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function dc(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const we={},kr=[],At=()=>{},uf=()=>!1,Io=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),pc=n=>n.startsWith("onUpdate:"),Ge=Object.assign,gc=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},em=Object.prototype.hasOwnProperty,ge=(n,e)=>em.call(n,e),se=Array.isArray,Nr=n=>vo(n)==="[object Map]",hf=n=>vo(n)==="[object Set]",oe=n=>typeof n=="function",Oe=n=>typeof n=="string",qn=n=>typeof n=="symbol",Re=n=>n!==null&&typeof n=="object",ff=n=>(Re(n)||oe(n))&&oe(n.then)&&oe(n.catch),df=Object.prototype.toString,vo=n=>df.call(n),tm=n=>vo(n).slice(8,-1),pf=n=>vo(n)==="[object Object]",mc=n=>Oe(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,Cs=dc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),wo=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},nm=/-\w/g,On=wo(n=>n.replace(nm,e=>e.slice(1).toUpperCase())),rm=/\B([A-Z])/g,dr=wo(n=>n.replace(rm,"-$1").toLowerCase()),gf=wo(n=>n.charAt(0).toUpperCase()+n.slice(1)),aa=wo(n=>n?`on${gf(n)}`:""),rr=(n,e)=>!Object.is(n,e),ca=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},mf=(n,e,t,r=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:r,value:t})},sm=n=>{const e=parseFloat(n);return isNaN(e)?n:e};let uu;const Ao=()=>uu||(uu=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function _c(n){if(se(n)){const e={};for(let t=0;t<n.length;t++){const r=n[t],s=Oe(r)?cm(r):_c(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(Oe(n)||Re(n))return n}const im=/;(?![^(]*\))/g,om=/:([^]+)/,am=/\/\*[^]*?\*\//g;function cm(n){const e={};return n.replace(am,"").split(im).forEach(t=>{if(t){const r=t.split(om);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function bo(n){let e="";if(Oe(n))e=n;else if(se(n))for(let t=0;t<n.length;t++){const r=bo(n[t]);r&&(e+=r+" ")}else if(Re(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const lm="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",um=dc(lm);function _f(n){return!!n||n===""}const yf=n=>!!(n&&n.__v_isRef===!0),Tt=n=>Oe(n)?n:n==null?"":se(n)||Re(n)&&(n.toString===df||!oe(n.toString))?yf(n)?Tt(n.value):JSON.stringify(n,Ef,2):String(n),Ef=(n,e)=>yf(e)?Ef(n,e.value):Nr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[r,s],i)=>(t[la(r,i)+" =>"]=s,t),{})}:hf(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>la(t))}:qn(e)?la(e):Re(e)&&!se(e)&&!pf(e)?String(e):e,la=(n,e="")=>{var t;return qn(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};/**
* @vue/reactivity v3.5.25
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let lt;class hm{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=lt,!e&&lt&&(this.index=(lt.scopes||(lt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=lt;try{return lt=this,e()}finally{lt=t}}}on(){++this._on===1&&(this.prevScope=lt,lt=this)}off(){this._on>0&&--this._on===0&&(lt=this.prevScope,this.prevScope=void 0)}stop(e){if(this._active){this._active=!1;let t,r;for(t=0,r=this.effects.length;t<r;t++)this.effects[t].stop();for(this.effects.length=0,t=0,r=this.cleanups.length;t<r;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,r=this.scopes.length;t<r;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function fm(){return lt}let ve;const ua=new WeakSet;class Tf{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,lt&&lt.active&&lt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,ua.has(this)&&(ua.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||vf(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,hu(this),wf(this);const e=ve,t=bt;ve=this,bt=!0;try{return this.fn()}finally{Af(this),ve=e,bt=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Tc(e);this.deps=this.depsTail=void 0,hu(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?ua.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){ka(this)&&this.run()}get dirty(){return ka(this)}}let If=0,Vs,Ds;function vf(n,e=!1){if(n.flags|=8,e){n.next=Ds,Ds=n;return}n.next=Vs,Vs=n}function yc(){If++}function Ec(){if(--If>0)return;if(Ds){let e=Ds;for(Ds=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;Vs;){let e=Vs;for(Vs=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){n||(n=r)}e=t}}if(n)throw n}function wf(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Af(n){let e,t=n.depsTail,r=t;for(;r;){const s=r.prevDep;r.version===-1?(r===t&&(t=s),Tc(r),dm(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}n.deps=e,n.depsTail=t}function ka(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(bf(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function bf(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===qs)||(n.globalVersion=qs,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!ka(n))))return;n.flags|=2;const e=n.dep,t=ve,r=bt;ve=n,bt=!0;try{wf(n);const s=n.fn(n._value);(e.version===0||rr(s,n._value))&&(n.flags|=128,n._value=s,e.version++)}catch(s){throw e.version++,s}finally{ve=t,bt=r,Af(n),n.flags&=-3}}function Tc(n,e=!1){const{dep:t,prevSub:r,nextSub:s}=n;if(r&&(r.nextSub=s,n.prevSub=void 0),s&&(s.prevSub=r,n.nextSub=void 0),t.subs===n&&(t.subs=r,!r&&t.computed)){t.computed.flags&=-5;for(let i=t.computed.deps;i;i=i.nextDep)Tc(i,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function dm(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let bt=!0;const Sf=[];function rn(){Sf.push(bt),bt=!1}function sn(){const n=Sf.pop();bt=n===void 0?!0:n}function hu(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=ve;ve=void 0;try{e()}finally{ve=t}}}let qs=0;class pm{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Rf{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!ve||!bt||ve===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==ve)t=this.activeLink=new pm(ve,this),ve.deps?(t.prevDep=ve.depsTail,ve.depsTail.nextDep=t,ve.depsTail=t):ve.deps=ve.depsTail=t,Pf(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const r=t.nextDep;r.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=r),t.prevDep=ve.depsTail,t.nextDep=void 0,ve.depsTail.nextDep=t,ve.depsTail=t,ve.deps===t&&(ve.deps=r)}return t}trigger(e){this.version++,qs++,this.notify(e)}notify(e){yc();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{Ec()}}}function Pf(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)Pf(r)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const Na=new WeakMap,sr=Symbol(""),Oa=Symbol(""),Hs=Symbol("");function et(n,e,t){if(bt&&ve){let r=Na.get(n);r||Na.set(n,r=new Map);let s=r.get(t);s||(r.set(t,s=new Rf),s.map=r,s.key=t),s.track()}}function Xt(n,e,t,r,s,i){const a=Na.get(n);if(!a){qs++;return}const c=u=>{u&&u.trigger()};if(yc(),e==="clear")a.forEach(c);else{const u=se(n),f=u&&mc(t);if(u&&t==="length"){const d=Number(r);a.forEach((g,E)=>{(E==="length"||E===Hs||!qn(E)&&E>=d)&&c(g)})}else switch((t!==void 0||a.has(void 0))&&c(a.get(t)),f&&c(a.get(Hs)),e){case"add":u?f&&c(a.get("length")):(c(a.get(sr)),Nr(n)&&c(a.get(Oa)));break;case"delete":u||(c(a.get(sr)),Nr(n)&&c(a.get(Oa)));break;case"set":Nr(n)&&c(a.get(sr));break}}Ec()}function br(n){const e=Te(n);return e===n?e:(et(e,"iterate",Hs),St(n)?e:e.map(on))}function So(n){return et(n=Te(n),"iterate",Hs),n}function In(n,e){return xn(n)?ir(n)?Br(on(e)):Br(e):on(e)}const gm={__proto__:null,[Symbol.iterator](){return ha(this,Symbol.iterator,n=>In(this,n))},concat(...n){return br(this).concat(...n.map(e=>se(e)?br(e):e))},entries(){return ha(this,"entries",n=>(n[1]=In(this,n[1]),n))},every(n,e){return Qt(this,"every",n,e,void 0,arguments)},filter(n,e){return Qt(this,"filter",n,e,t=>t.map(r=>In(this,r)),arguments)},find(n,e){return Qt(this,"find",n,e,t=>In(this,t),arguments)},findIndex(n,e){return Qt(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return Qt(this,"findLast",n,e,t=>In(this,t),arguments)},findLastIndex(n,e){return Qt(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return Qt(this,"forEach",n,e,void 0,arguments)},includes(...n){return fa(this,"includes",n)},indexOf(...n){return fa(this,"indexOf",n)},join(n){return br(this).join(n)},lastIndexOf(...n){return fa(this,"lastIndexOf",n)},map(n,e){return Qt(this,"map",n,e,void 0,arguments)},pop(){return vs(this,"pop")},push(...n){return vs(this,"push",n)},reduce(n,...e){return fu(this,"reduce",n,e)},reduceRight(n,...e){return fu(this,"reduceRight",n,e)},shift(){return vs(this,"shift")},some(n,e){return Qt(this,"some",n,e,void 0,arguments)},splice(...n){return vs(this,"splice",n)},toReversed(){return br(this).toReversed()},toSorted(n){return br(this).toSorted(n)},toSpliced(...n){return br(this).toSpliced(...n)},unshift(...n){return vs(this,"unshift",n)},values(){return ha(this,"values",n=>In(this,n))}};function ha(n,e,t){const r=So(n),s=r[e]();return r!==n&&!St(n)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.done||(i.value=t(i.value)),i}),s}const mm=Array.prototype;function Qt(n,e,t,r,s,i){const a=So(n),c=a!==n&&!St(n),u=a[e];if(u!==mm[e]){const g=u.apply(n,i);return c?on(g):g}let f=t;a!==n&&(c?f=function(g,E){return t.call(this,In(n,g),E,n)}:t.length>2&&(f=function(g,E){return t.call(this,g,E,n)}));const d=u.call(a,f,r);return c&&s?s(d):d}function fu(n,e,t,r){const s=So(n);let i=t;return s!==n&&(St(n)?t.length>3&&(i=function(a,c,u){return t.call(this,a,c,u,n)}):i=function(a,c,u){return t.call(this,a,In(n,c),u,n)}),s[e](i,...r)}function fa(n,e,t){const r=Te(n);et(r,"iterate",Hs);const s=r[e](...t);return(s===-1||s===!1)&&Ac(t[0])?(t[0]=Te(t[0]),r[e](...t)):s}function vs(n,e,t=[]){rn(),yc();const r=Te(n)[e].apply(n,t);return Ec(),sn(),r}const _m=dc("__proto__,__v_isRef,__isVue"),Cf=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(qn));function ym(n){qn(n)||(n=String(n));const e=Te(this);return et(e,"has",n),e.hasOwnProperty(n)}class Vf{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,r){if(t==="__v_skip")return e.__v_skip;const s=this._isReadonly,i=this._isShallow;if(t==="__v_isReactive")return!s;if(t==="__v_isReadonly")return s;if(t==="__v_isShallow")return i;if(t==="__v_raw")return r===(s?i?Pm:Of:i?Nf:kf).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const a=se(e);if(!s){let u;if(a&&(u=gm[t]))return u;if(t==="hasOwnProperty")return ym}const c=Reflect.get(e,t,at(e)?e:r);if((qn(t)?Cf.has(t):_m(t))||(s||et(e,"get",t),i))return c;if(at(c)){const u=a&&mc(t)?c:c.value;return s&&Re(u)?Ma(u):u}return Re(c)?s?Ma(c):vc(c):c}}class Df extends Vf{constructor(e=!1){super(!1,e)}set(e,t,r,s){let i=e[t];const a=se(e)&&mc(t);if(!this._isShallow){const f=xn(i);if(!St(r)&&!xn(r)&&(i=Te(i),r=Te(r)),!a&&at(i)&&!at(r))return f||(i.value=r),!0}const c=a?Number(t)<e.length:ge(e,t),u=Reflect.set(e,t,r,at(e)?e:s);return e===Te(s)&&(c?rr(r,i)&&Xt(e,"set",t,r):Xt(e,"add",t,r)),u}deleteProperty(e,t){const r=ge(e,t);e[t];const s=Reflect.deleteProperty(e,t);return s&&r&&Xt(e,"delete",t,void 0),s}has(e,t){const r=Reflect.has(e,t);return(!qn(t)||!Cf.has(t))&&et(e,"has",t),r}ownKeys(e){return et(e,"iterate",se(e)?"length":sr),Reflect.ownKeys(e)}}class Em extends Vf{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const Tm=new Df,Im=new Em,vm=new Df(!0);const xa=n=>n,Si=n=>Reflect.getPrototypeOf(n);function wm(n,e,t){return function(...r){const s=this.__v_raw,i=Te(s),a=Nr(i),c=n==="entries"||n===Symbol.iterator&&a,u=n==="keys"&&a,f=s[n](...r),d=t?xa:e?Br:on;return!e&&et(i,"iterate",u?Oa:sr),{next(){const{value:g,done:E}=f.next();return E?{value:g,done:E}:{value:c?[d(g[0]),d(g[1])]:d(g),done:E}},[Symbol.iterator](){return this}}}}function Ri(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function Am(n,e){const t={get(s){const i=this.__v_raw,a=Te(i),c=Te(s);n||(rr(s,c)&&et(a,"get",s),et(a,"get",c));const{has:u}=Si(a),f=e?xa:n?Br:on;if(u.call(a,s))return f(i.get(s));if(u.call(a,c))return f(i.get(c));i!==a&&i.get(s)},get size(){const s=this.__v_raw;return!n&&et(Te(s),"iterate",sr),s.size},has(s){const i=this.__v_raw,a=Te(i),c=Te(s);return n||(rr(s,c)&&et(a,"has",s),et(a,"has",c)),s===c?i.has(s):i.has(s)||i.has(c)},forEach(s,i){const a=this,c=a.__v_raw,u=Te(c),f=e?xa:n?Br:on;return!n&&et(u,"iterate",sr),c.forEach((d,g)=>s.call(i,f(d),f(g),a))}};return Ge(t,n?{add:Ri("add"),set:Ri("set"),delete:Ri("delete"),clear:Ri("clear")}:{add(s){!e&&!St(s)&&!xn(s)&&(s=Te(s));const i=Te(this);return Si(i).has.call(i,s)||(i.add(s),Xt(i,"add",s,s)),this},set(s,i){!e&&!St(i)&&!xn(i)&&(i=Te(i));const a=Te(this),{has:c,get:u}=Si(a);let f=c.call(a,s);f||(s=Te(s),f=c.call(a,s));const d=u.call(a,s);return a.set(s,i),f?rr(i,d)&&Xt(a,"set",s,i):Xt(a,"add",s,i),this},delete(s){const i=Te(this),{has:a,get:c}=Si(i);let u=a.call(i,s);u||(s=Te(s),u=a.call(i,s)),c&&c.call(i,s);const f=i.delete(s);return u&&Xt(i,"delete",s,void 0),f},clear(){const s=Te(this),i=s.size!==0,a=s.clear();return i&&Xt(s,"clear",void 0,void 0),a}}),["keys","values","entries",Symbol.iterator].forEach(s=>{t[s]=wm(s,n,e)}),t}function Ic(n,e){const t=Am(n,e);return(r,s,i)=>s==="__v_isReactive"?!n:s==="__v_isReadonly"?n:s==="__v_raw"?r:Reflect.get(ge(t,s)&&s in r?t:r,s,i)}const bm={get:Ic(!1,!1)},Sm={get:Ic(!1,!0)},Rm={get:Ic(!0,!1)};const kf=new WeakMap,Nf=new WeakMap,Of=new WeakMap,Pm=new WeakMap;function Cm(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Vm(n){return n.__v_skip||!Object.isExtensible(n)?0:Cm(tm(n))}function vc(n){return xn(n)?n:wc(n,!1,Tm,bm,kf)}function Dm(n){return wc(n,!1,vm,Sm,Nf)}function Ma(n){return wc(n,!0,Im,Rm,Of)}function wc(n,e,t,r,s){if(!Re(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const i=Vm(n);if(i===0)return n;const a=s.get(n);if(a)return a;const c=new Proxy(n,i===2?r:t);return s.set(n,c),c}function ir(n){return xn(n)?ir(n.__v_raw):!!(n&&n.__v_isReactive)}function xn(n){return!!(n&&n.__v_isReadonly)}function St(n){return!!(n&&n.__v_isShallow)}function Ac(n){return n?!!n.__v_raw:!1}function Te(n){const e=n&&n.__v_raw;return e?Te(e):n}function km(n){return!ge(n,"__v_skip")&&Object.isExtensible(n)&&mf(n,"__v_skip",!0),n}const on=n=>Re(n)?vc(n):n,Br=n=>Re(n)?Ma(n):n;function at(n){return n?n.__v_isRef===!0:!1}function Nm(n){return at(n)?n.value:n}const Om={get:(n,e,t)=>e==="__v_raw"?n:Nm(Reflect.get(n,e,t)),set:(n,e,t,r)=>{const s=n[e];return at(s)&&!at(t)?(s.value=t,!0):Reflect.set(n,e,t,r)}};function xf(n){return ir(n)?n:new Proxy(n,Om)}class xm{constructor(e,t,r){this.fn=e,this.setter=t,this._value=void 0,this.dep=new Rf(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=qs-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&ve!==this)return vf(this,!0),!0}get value(){const e=this.dep.track();return bf(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function Mm(n,e,t=!1){let r,s;return oe(n)?r=n:(r=n.get,s=n.set),new xm(r,s,t)}const Pi={},Gi=new WeakMap;let Yn;function Lm(n,e=!1,t=Yn){if(t){let r=Gi.get(t);r||Gi.set(t,r=[]),r.push(n)}}function Fm(n,e,t=we){const{immediate:r,deep:s,once:i,scheduler:a,augmentJob:c,call:u}=t,f=W=>s?W:St(W)||s===!1||s===0?An(W,1):An(W);let d,g,E,R,x=!1,U=!1;if(at(n)?(g=()=>n.value,x=St(n)):ir(n)?(g=()=>f(n),x=!0):se(n)?(U=!0,x=n.some(W=>ir(W)||St(W)),g=()=>n.map(W=>{if(at(W))return W.value;if(ir(W))return f(W);if(oe(W))return u?u(W,2):W()})):oe(n)?e?g=u?()=>u(n,2):n:g=()=>{if(E){rn();try{E()}finally{sn()}}const W=Yn;Yn=d;try{return u?u(n,3,[R]):n(R)}finally{Yn=W}}:g=At,e&&s){const W=g,fe=s===!0?1/0:s;g=()=>An(W(),fe)}const B=fm(),z=()=>{d.stop(),B&&B.active&&gc(B.effects,d)};if(i&&e){const W=e;e=(...fe)=>{W(...fe),z()}}let K=U?new Array(n.length).fill(Pi):Pi;const J=W=>{if(!(!(d.flags&1)||!d.dirty&&!W))if(e){const fe=d.run();if(s||x||(U?fe.some((Ee,v)=>rr(Ee,K[v])):rr(fe,K))){E&&E();const Ee=Yn;Yn=d;try{const v=[fe,K===Pi?void 0:U&&K[0]===Pi?[]:K,R];K=fe,u?u(e,3,v):e(...v)}finally{Yn=Ee}}}else d.run()};return c&&c(J),d=new Tf(g),d.scheduler=a?()=>a(J,!1):J,R=W=>Lm(W,!1,d),E=d.onStop=()=>{const W=Gi.get(d);if(W){if(u)u(W,4);else for(const fe of W)fe();Gi.delete(d)}},e?r?J(!0):K=d.run():a?a(J.bind(null,!0),!0):d.run(),z.pause=d.pause.bind(d),z.resume=d.resume.bind(d),z.stop=z,z}function An(n,e=1/0,t){if(e<=0||!Re(n)||n.__v_skip||(t=t||new Map,(t.get(n)||0)>=e))return n;if(t.set(n,e),e--,at(n))An(n.value,e,t);else if(se(n))for(let r=0;r<n.length;r++)An(n[r],e,t);else if(hf(n)||Nr(n))n.forEach(r=>{An(r,e,t)});else if(pf(n)){for(const r in n)An(n[r],e,t);for(const r of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,r)&&An(n[r],e,t)}return n}/**
* @vue/runtime-core v3.5.25
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function si(n,e,t,r){try{return r?n(...r):n()}catch(s){Ro(s,e,t)}}function $t(n,e,t,r){if(oe(n)){const s=si(n,e,t,r);return s&&ff(s)&&s.catch(i=>{Ro(i,e,t)}),s}if(se(n)){const s=[];for(let i=0;i<n.length;i++)s.push($t(n[i],e,t,r));return s}}function Ro(n,e,t,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:a}=e&&e.appContext.config||we;if(e){let c=e.parent;const u=e.proxy,f=`https://vuejs.org/error-reference/#runtime-${t}`;for(;c;){const d=c.ec;if(d){for(let g=0;g<d.length;g++)if(d[g](n,u,f)===!1)return}c=c.parent}if(i){rn(),si(i,null,10,[n,u,f]),sn();return}}Um(n,t,s,r,a)}function Um(n,e,t,r=!0,s=!1){if(s)throw n;console.error(n)}const it=[];let kt=-1;const Or=[];let vn=null,Rr=0;const Mf=Promise.resolve();let Qi=null;function Bm(n){const e=Qi||Mf;return n?e.then(this?n.bind(this):n):e}function jm(n){let e=kt+1,t=it.length;for(;e<t;){const r=e+t>>>1,s=it[r],i=zs(s);i<n||i===n&&s.flags&2?e=r+1:t=r}return e}function bc(n){if(!(n.flags&1)){const e=zs(n),t=it[it.length-1];!t||!(n.flags&2)&&e>=zs(t)?it.push(n):it.splice(jm(e),0,n),n.flags|=1,Lf()}}function Lf(){Qi||(Qi=Mf.then(Uf))}function $m(n){se(n)?Or.push(...n):vn&&n.id===-1?vn.splice(Rr+1,0,n):n.flags&1||(Or.push(n),n.flags|=1),Lf()}function du(n,e,t=kt+1){for(;t<it.length;t++){const r=it[t];if(r&&r.flags&2){if(n&&r.id!==n.uid)continue;it.splice(t,1),t--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function Ff(n){if(Or.length){const e=[...new Set(Or)].sort((t,r)=>zs(t)-zs(r));if(Or.length=0,vn){vn.push(...e);return}for(vn=e,Rr=0;Rr<vn.length;Rr++){const t=vn[Rr];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}vn=null,Rr=0}}const zs=n=>n.id==null?n.flags&2?-1:1/0:n.id;function Uf(n){const e=At;try{for(kt=0;kt<it.length;kt++){const t=it[kt];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),si(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;kt<it.length;kt++){const t=it[kt];t&&(t.flags&=-2)}kt=-1,it.length=0,Ff(),Qi=null,(it.length||Or.length)&&Uf()}}let Mt=null,Bf=null;function Ji(n){const e=Mt;return Mt=n,Bf=n&&n.type.__scopeId||null,e}function qm(n,e=Mt,t){if(!e||n._n)return n;const r=(...s)=>{r._d&&vu(-1);const i=Ji(e);let a;try{a=n(...s)}finally{Ji(i),r._d&&vu(1)}return a};return r._n=!0,r._c=!0,r._d=!0,r}function Jn(n,e,t,r){const s=n.dirs,i=e&&e.dirs;for(let a=0;a<s.length;a++){const c=s[a];i&&(c.oldValue=i[a].value);let u=c.dir[r];u&&(rn(),$t(u,t,8,[n.el,c,n,e]),sn())}}const Hm=Symbol("_vte"),zm=n=>n.__isTeleport,Wm=Symbol("_leaveCb");function Sc(n,e){n.shapeFlag&6&&n.component?(n.transition=e,Sc(n.component.subTree,e)):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function jf(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}const Xi=new WeakMap;function ks(n,e,t,r,s=!1){if(se(n)){n.forEach((x,U)=>ks(x,e&&(se(e)?e[U]:e),t,r,s));return}if(Ns(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&ks(n,e,t,r.component.subTree);return}const i=r.shapeFlag&4?Dc(r.component):r.el,a=s?null:i,{i:c,r:u}=n,f=e&&e.r,d=c.refs===we?c.refs={}:c.refs,g=c.setupState,E=Te(g),R=g===we?uf:x=>ge(E,x);if(f!=null&&f!==u){if(pu(e),Oe(f))d[f]=null,R(f)&&(g[f]=null);else if(at(f)){f.value=null;const x=e;x.k&&(d[x.k]=null)}}if(oe(u))si(u,c,12,[a,d]);else{const x=Oe(u),U=at(u);if(x||U){const B=()=>{if(n.f){const z=x?R(u)?g[u]:d[u]:u.value;if(s)se(z)&&gc(z,i);else if(se(z))z.includes(i)||z.push(i);else if(x)d[u]=[i],R(u)&&(g[u]=d[u]);else{const K=[i];u.value=K,n.k&&(d[n.k]=K)}}else x?(d[u]=a,R(u)&&(g[u]=a)):U&&(u.value=a,n.k&&(d[n.k]=a))};if(a){const z=()=>{B(),Xi.delete(n)};z.id=-1,Xi.set(n,z),dt(z,t)}else pu(n),B()}}}function pu(n){const e=Xi.get(n);e&&(e.flags|=8,Xi.delete(n))}Ao().requestIdleCallback;Ao().cancelIdleCallback;const Ns=n=>!!n.type.__asyncLoader,$f=n=>n.type.__isKeepAlive;function Km(n,e){qf(n,"a",e)}function Gm(n,e){qf(n,"da",e)}function qf(n,e,t=ot){const r=n.__wdc||(n.__wdc=()=>{let s=t;for(;s;){if(s.isDeactivated)return;s=s.parent}return n()});if(Po(e,r,t),t){let s=t.parent;for(;s&&s.parent;)$f(s.parent.vnode)&&Qm(r,e,t,s),s=s.parent}}function Qm(n,e,t,r){const s=Po(e,n,r,!0);Hf(()=>{gc(r[e],s)},t)}function Po(n,e,t=ot,r=!1){if(t){const s=t[n]||(t[n]=[]),i=e.__weh||(e.__weh=(...a)=>{rn();const c=ii(t),u=$t(e,t,n,a);return c(),sn(),u});return r?s.unshift(i):s.push(i),i}}const hn=n=>(e,t=ot)=>{(!Ks||n==="sp")&&Po(n,(...r)=>e(...r),t)},Jm=hn("bm"),Xm=hn("m"),Ym=hn("bu"),Zm=hn("u"),e_=hn("bum"),Hf=hn("um"),t_=hn("sp"),n_=hn("rtg"),r_=hn("rtc");function s_(n,e=ot){Po("ec",n,e)}const i_=Symbol.for("v-ndc");function o_(n,e,t,r){let s;const i=t&&t[r],a=se(n);if(a||Oe(n)){const c=a&&ir(n);let u=!1,f=!1;c&&(u=!St(n),f=xn(n),n=So(n)),s=new Array(n.length);for(let d=0,g=n.length;d<g;d++)s[d]=e(u?f?Br(on(n[d])):on(n[d]):n[d],d,void 0,i&&i[d])}else if(typeof n=="number"){s=new Array(n);for(let c=0;c<n;c++)s[c]=e(c+1,c,void 0,i&&i[c])}else if(Re(n))if(n[Symbol.iterator])s=Array.from(n,(c,u)=>e(c,u,void 0,i&&i[u]));else{const c=Object.keys(n);s=new Array(c.length);for(let u=0,f=c.length;u<f;u++){const d=c[u];s[u]=e(n[d],d,u,i&&i[u])}}else s=[];return t&&(t[r]=s),s}const La=n=>n?ud(n)?Dc(n):La(n.parent):null,Os=Ge(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>La(n.parent),$root:n=>La(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>Rc(n),$forceUpdate:n=>n.f||(n.f=()=>{bc(n.update)}),$nextTick:n=>n.n||(n.n=Bm.bind(n.proxy)),$watch:n=>y_.bind(n)}),da=(n,e)=>n!==we&&!n.__isScriptSetup&&ge(n,e),a_={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:r,data:s,props:i,accessCache:a,type:c,appContext:u}=n;if(e[0]!=="$"){const E=a[e];if(E!==void 0)switch(E){case 1:return r[e];case 2:return s[e];case 4:return t[e];case 3:return i[e]}else{if(da(r,e))return a[e]=1,r[e];if(s!==we&&ge(s,e))return a[e]=2,s[e];if(ge(i,e))return a[e]=3,i[e];if(t!==we&&ge(t,e))return a[e]=4,t[e];Fa&&(a[e]=0)}}const f=Os[e];let d,g;if(f)return e==="$attrs"&&et(n.attrs,"get",""),f(n);if((d=c.__cssModules)&&(d=d[e]))return d;if(t!==we&&ge(t,e))return a[e]=4,t[e];if(g=u.config.globalProperties,ge(g,e))return g[e]},set({_:n},e,t){const{data:r,setupState:s,ctx:i}=n;return da(s,e)?(s[e]=t,!0):r!==we&&ge(r,e)?(r[e]=t,!0):ge(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(i[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:r,appContext:s,props:i,type:a}},c){let u;return!!(t[c]||n!==we&&c[0]!=="$"&&ge(n,c)||da(e,c)||ge(i,c)||ge(r,c)||ge(Os,c)||ge(s.config.globalProperties,c)||(u=a.__cssModules)&&u[c])},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:ge(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function gu(n){return se(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let Fa=!0;function c_(n){const e=Rc(n),t=n.proxy,r=n.ctx;Fa=!1,e.beforeCreate&&mu(e.beforeCreate,n,"bc");const{data:s,computed:i,methods:a,watch:c,provide:u,inject:f,created:d,beforeMount:g,mounted:E,beforeUpdate:R,updated:x,activated:U,deactivated:B,beforeDestroy:z,beforeUnmount:K,destroyed:J,unmounted:W,render:fe,renderTracked:Ee,renderTriggered:v,errorCaptured:m,serverPrefetch:T,expose:w,inheritAttrs:I,components:S,directives:y,filters:Fe}=e;if(f&&l_(f,r,null),a)for(const Ae in a){const pe=a[Ae];oe(pe)&&(r[Ae]=pe.bind(t))}if(s){const Ae=s.call(t,t);Re(Ae)&&(n.data=vc(Ae))}if(Fa=!0,i)for(const Ae in i){const pe=i[Ae],gt=oe(pe)?pe.bind(t,t):oe(pe.get)?pe.get.bind(t,t):At,yr=!oe(pe)&&oe(pe.set)?pe.set.bind(t):At,Pt=Z_({get:gt,set:yr});Object.defineProperty(r,Ae,{enumerable:!0,configurable:!0,get:()=>Pt.value,set:ht=>Pt.value=ht})}if(c)for(const Ae in c)zf(c[Ae],r,t,Ae);if(u){const Ae=oe(u)?u.call(t):u;Reflect.ownKeys(Ae).forEach(pe=>{g_(pe,Ae[pe])})}d&&mu(d,n,"c");function He(Ae,pe){se(pe)?pe.forEach(gt=>Ae(gt.bind(t))):pe&&Ae(pe.bind(t))}if(He(Jm,g),He(Xm,E),He(Ym,R),He(Zm,x),He(Km,U),He(Gm,B),He(s_,m),He(r_,Ee),He(n_,v),He(e_,K),He(Hf,W),He(t_,T),se(w))if(w.length){const Ae=n.exposed||(n.exposed={});w.forEach(pe=>{Object.defineProperty(Ae,pe,{get:()=>t[pe],set:gt=>t[pe]=gt,enumerable:!0})})}else n.exposed||(n.exposed={});fe&&n.render===At&&(n.render=fe),I!=null&&(n.inheritAttrs=I),S&&(n.components=S),y&&(n.directives=y),T&&jf(n)}function l_(n,e,t=At){se(n)&&(n=Ua(n));for(const r in n){const s=n[r];let i;Re(s)?"default"in s?i=xi(s.from||r,s.default,!0):i=xi(s.from||r):i=xi(s),at(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:a=>i.value=a}):e[r]=i}}function mu(n,e,t){$t(se(n)?n.map(r=>r.bind(e.proxy)):n.bind(e.proxy),e,t)}function zf(n,e,t,r){let s=r.includes(".")?Gf(t,r):()=>t[r];if(Oe(n)){const i=e[n];oe(i)&&pa(s,i)}else if(oe(n))pa(s,n.bind(t));else if(Re(n))if(se(n))n.forEach(i=>zf(i,e,t,r));else{const i=oe(n.handler)?n.handler.bind(t):e[n.handler];oe(i)&&pa(s,i,n)}}function Rc(n){const e=n.type,{mixins:t,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:a}}=n.appContext,c=i.get(e);let u;return c?u=c:!s.length&&!t&&!r?u=e:(u={},s.length&&s.forEach(f=>Yi(u,f,a,!0)),Yi(u,e,a)),Re(e)&&i.set(e,u),u}function Yi(n,e,t,r=!1){const{mixins:s,extends:i}=e;i&&Yi(n,i,t,!0),s&&s.forEach(a=>Yi(n,a,t,!0));for(const a in e)if(!(r&&a==="expose")){const c=u_[a]||t&&t[a];n[a]=c?c(n[a],e[a]):e[a]}return n}const u_={data:_u,props:yu,emits:yu,methods:As,computed:As,beforeCreate:st,created:st,beforeMount:st,mounted:st,beforeUpdate:st,updated:st,beforeDestroy:st,beforeUnmount:st,destroyed:st,unmounted:st,activated:st,deactivated:st,errorCaptured:st,serverPrefetch:st,components:As,directives:As,watch:f_,provide:_u,inject:h_};function _u(n,e){return e?n?function(){return Ge(oe(n)?n.call(this,this):n,oe(e)?e.call(this,this):e)}:e:n}function h_(n,e){return As(Ua(n),Ua(e))}function Ua(n){if(se(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function st(n,e){return n?[...new Set([].concat(n,e))]:e}function As(n,e){return n?Ge(Object.create(null),n,e):e}function yu(n,e){return n?se(n)&&se(e)?[...new Set([...n,...e])]:Ge(Object.create(null),gu(n),gu(e??{})):e}function f_(n,e){if(!n)return e;if(!e)return n;const t=Ge(Object.create(null),n);for(const r in e)t[r]=st(n[r],e[r]);return t}function Wf(){return{app:null,config:{isNativeTag:uf,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let d_=0;function p_(n,e){return function(r,s=null){oe(r)||(r=Ge({},r)),s!=null&&!Re(s)&&(s=null);const i=Wf(),a=new WeakSet,c=[];let u=!1;const f=i.app={_uid:d_++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:ey,get config(){return i.config},set config(d){},use(d,...g){return a.has(d)||(d&&oe(d.install)?(a.add(d),d.install(f,...g)):oe(d)&&(a.add(d),d(f,...g))),f},mixin(d){return i.mixins.includes(d)||i.mixins.push(d),f},component(d,g){return g?(i.components[d]=g,f):i.components[d]},directive(d,g){return g?(i.directives[d]=g,f):i.directives[d]},mount(d,g,E){if(!u){const R=f._ceVNode||tn(r,s);return R.appContext=i,E===!0?E="svg":E===!1&&(E=void 0),g&&e?e(R,d):n(R,d,E),u=!0,f._container=d,d.__vue_app__=f,Dc(R.component)}},onUnmount(d){c.push(d)},unmount(){u&&($t(c,f._instance,16),n(null,f._container),delete f._container.__vue_app__)},provide(d,g){return i.provides[d]=g,f},runWithContext(d){const g=xr;xr=f;try{return d()}finally{xr=g}}};return f}}let xr=null;function g_(n,e){if(ot){let t=ot.provides;const r=ot.parent&&ot.parent.provides;r===t&&(t=ot.provides=Object.create(r)),t[n]=e}}function xi(n,e,t=!1){const r=K_();if(r||xr){let s=xr?xr._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&n in s)return s[n];if(arguments.length>1)return t&&oe(e)?e.call(r&&r.proxy):e}}const m_=Symbol.for("v-scx"),__=()=>xi(m_);function pa(n,e,t){return Kf(n,e,t)}function Kf(n,e,t=we){const{immediate:r,deep:s,flush:i,once:a}=t,c=Ge({},t),u=e&&r||!e&&i!=="post";let f;if(Ks){if(i==="sync"){const R=__();f=R.__watcherHandles||(R.__watcherHandles=[])}else if(!u){const R=()=>{};return R.stop=At,R.resume=At,R.pause=At,R}}const d=ot;c.call=(R,x,U)=>$t(R,d,x,U);let g=!1;i==="post"?c.scheduler=R=>{dt(R,d&&d.suspense)}:i!=="sync"&&(g=!0,c.scheduler=(R,x)=>{x?R():bc(R)}),c.augmentJob=R=>{e&&(R.flags|=4),g&&(R.flags|=2,d&&(R.id=d.uid,R.i=d))};const E=Fm(n,e,c);return Ks&&(f?f.push(E):u&&E()),E}function y_(n,e,t){const r=this.proxy,s=Oe(n)?n.includes(".")?Gf(r,n):()=>r[n]:n.bind(r,r);let i;oe(e)?i=e:(i=e.handler,t=e);const a=ii(this),c=Kf(s,i.bind(r),t);return a(),c}function Gf(n,e){const t=e.split(".");return()=>{let r=n;for(let s=0;s<t.length&&r;s++)r=r[t[s]];return r}}const E_=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${On(e)}Modifiers`]||n[`${dr(e)}Modifiers`];function T_(n,e,...t){if(n.isUnmounted)return;const r=n.vnode.props||we;let s=t;const i=e.startsWith("update:"),a=i&&E_(r,e.slice(7));a&&(a.trim&&(s=t.map(d=>Oe(d)?d.trim():d)),a.number&&(s=t.map(sm)));let c,u=r[c=aa(e)]||r[c=aa(On(e))];!u&&i&&(u=r[c=aa(dr(e))]),u&&$t(u,n,6,s);const f=r[c+"Once"];if(f){if(!n.emitted)n.emitted={};else if(n.emitted[c])return;n.emitted[c]=!0,$t(f,n,6,s)}}const I_=new WeakMap;function Qf(n,e,t=!1){const r=t?I_:e.emitsCache,s=r.get(n);if(s!==void 0)return s;const i=n.emits;let a={},c=!1;if(!oe(n)){const u=f=>{const d=Qf(f,e,!0);d&&(c=!0,Ge(a,d))};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}return!i&&!c?(Re(n)&&r.set(n,null),null):(se(i)?i.forEach(u=>a[u]=null):Ge(a,i),Re(n)&&r.set(n,a),a)}function Co(n,e){return!n||!Io(e)?!1:(e=e.slice(2).replace(/Once$/,""),ge(n,e[0].toLowerCase()+e.slice(1))||ge(n,dr(e))||ge(n,e))}function ga(n){const{type:e,vnode:t,proxy:r,withProxy:s,propsOptions:[i],slots:a,attrs:c,emit:u,render:f,renderCache:d,props:g,data:E,setupState:R,ctx:x,inheritAttrs:U}=n,B=Ji(n);let z,K;try{if(t.shapeFlag&4){const W=s||r,fe=W;z=xt(f.call(fe,W,d,g,R,E,x)),K=c}else{const W=e;z=xt(W.length>1?W(g,{attrs:c,slots:a,emit:u}):W(g,null)),K=e.props?c:v_(c)}}catch(W){xs.length=0,Ro(W,n,1),z=tn(Mn)}let J=z;if(K&&U!==!1){const W=Object.keys(K),{shapeFlag:fe}=J;W.length&&fe&7&&(i&&W.some(pc)&&(K=w_(K,i)),J=jr(J,K,!1,!0))}return t.dirs&&(J=jr(J,null,!1,!0),J.dirs=J.dirs?J.dirs.concat(t.dirs):t.dirs),t.transition&&Sc(J,t.transition),z=J,Ji(B),z}const v_=n=>{let e;for(const t in n)(t==="class"||t==="style"||Io(t))&&((e||(e={}))[t]=n[t]);return e},w_=(n,e)=>{const t={};for(const r in n)(!pc(r)||!(r.slice(9)in e))&&(t[r]=n[r]);return t};function A_(n,e,t){const{props:r,children:s,component:i}=n,{props:a,children:c,patchFlag:u}=e,f=i.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&u>=0){if(u&1024)return!0;if(u&16)return r?Eu(r,a,f):!!a;if(u&8){const d=e.dynamicProps;for(let g=0;g<d.length;g++){const E=d[g];if(a[E]!==r[E]&&!Co(f,E))return!0}}}else return(s||c)&&(!c||!c.$stable)?!0:r===a?!1:r?a?Eu(r,a,f):!0:!!a;return!1}function Eu(n,e,t){const r=Object.keys(e);if(r.length!==Object.keys(n).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==n[i]&&!Co(t,i))return!0}return!1}function b_({vnode:n,parent:e},t){for(;e;){const r=e.subTree;if(r.suspense&&r.suspense.activeBranch===n&&(r.el=n.el),r===n)(n=e.vnode).el=t,e=e.parent;else break}}const Jf={},Xf=()=>Object.create(Jf),Yf=n=>Object.getPrototypeOf(n)===Jf;function S_(n,e,t,r=!1){const s={},i=Xf();n.propsDefaults=Object.create(null),Zf(n,e,s,i);for(const a in n.propsOptions[0])a in s||(s[a]=void 0);t?n.props=r?s:Dm(s):n.type.props?n.props=s:n.props=i,n.attrs=i}function R_(n,e,t,r){const{props:s,attrs:i,vnode:{patchFlag:a}}=n,c=Te(s),[u]=n.propsOptions;let f=!1;if((r||a>0)&&!(a&16)){if(a&8){const d=n.vnode.dynamicProps;for(let g=0;g<d.length;g++){let E=d[g];if(Co(n.emitsOptions,E))continue;const R=e[E];if(u)if(ge(i,E))R!==i[E]&&(i[E]=R,f=!0);else{const x=On(E);s[x]=Ba(u,c,x,R,n,!1)}else R!==i[E]&&(i[E]=R,f=!0)}}}else{Zf(n,e,s,i)&&(f=!0);let d;for(const g in c)(!e||!ge(e,g)&&((d=dr(g))===g||!ge(e,d)))&&(u?t&&(t[g]!==void 0||t[d]!==void 0)&&(s[g]=Ba(u,c,g,void 0,n,!0)):delete s[g]);if(i!==c)for(const g in i)(!e||!ge(e,g))&&(delete i[g],f=!0)}f&&Xt(n.attrs,"set","")}function Zf(n,e,t,r){const[s,i]=n.propsOptions;let a=!1,c;if(e)for(let u in e){if(Cs(u))continue;const f=e[u];let d;s&&ge(s,d=On(u))?!i||!i.includes(d)?t[d]=f:(c||(c={}))[d]=f:Co(n.emitsOptions,u)||(!(u in r)||f!==r[u])&&(r[u]=f,a=!0)}if(i){const u=Te(t),f=c||we;for(let d=0;d<i.length;d++){const g=i[d];t[g]=Ba(s,u,g,f[g],n,!ge(f,g))}}return a}function Ba(n,e,t,r,s,i){const a=n[t];if(a!=null){const c=ge(a,"default");if(c&&r===void 0){const u=a.default;if(a.type!==Function&&!a.skipFactory&&oe(u)){const{propsDefaults:f}=s;if(t in f)r=f[t];else{const d=ii(s);r=f[t]=u.call(null,e),d()}}else r=u;s.ce&&s.ce._setProp(t,r)}a[0]&&(i&&!c?r=!1:a[1]&&(r===""||r===dr(t))&&(r=!0))}return r}const P_=new WeakMap;function ed(n,e,t=!1){const r=t?P_:e.propsCache,s=r.get(n);if(s)return s;const i=n.props,a={},c=[];let u=!1;if(!oe(n)){const d=g=>{u=!0;const[E,R]=ed(g,e,!0);Ge(a,E),R&&c.push(...R)};!t&&e.mixins.length&&e.mixins.forEach(d),n.extends&&d(n.extends),n.mixins&&n.mixins.forEach(d)}if(!i&&!u)return Re(n)&&r.set(n,kr),kr;if(se(i))for(let d=0;d<i.length;d++){const g=On(i[d]);Tu(g)&&(a[g]=we)}else if(i)for(const d in i){const g=On(d);if(Tu(g)){const E=i[d],R=a[g]=se(E)||oe(E)?{type:E}:Ge({},E),x=R.type;let U=!1,B=!0;if(se(x))for(let z=0;z<x.length;++z){const K=x[z],J=oe(K)&&K.name;if(J==="Boolean"){U=!0;break}else J==="String"&&(B=!1)}else U=oe(x)&&x.name==="Boolean";R[0]=U,R[1]=B,(U||ge(R,"default"))&&c.push(g)}}const f=[a,c];return Re(n)&&r.set(n,f),f}function Tu(n){return n[0]!=="$"&&!Cs(n)}const Pc=n=>n==="_"||n==="_ctx"||n==="$stable",Cc=n=>se(n)?n.map(xt):[xt(n)],C_=(n,e,t)=>{if(e._n)return e;const r=qm((...s)=>Cc(e(...s)),t);return r._c=!1,r},td=(n,e,t)=>{const r=n._ctx;for(const s in n){if(Pc(s))continue;const i=n[s];if(oe(i))e[s]=C_(s,i,r);else if(i!=null){const a=Cc(i);e[s]=()=>a}}},nd=(n,e)=>{const t=Cc(e);n.slots.default=()=>t},rd=(n,e,t)=>{for(const r in e)(t||!Pc(r))&&(n[r]=e[r])},V_=(n,e,t)=>{const r=n.slots=Xf();if(n.vnode.shapeFlag&32){const s=e._;s?(rd(r,e,t),t&&mf(r,"_",s,!0)):td(e,r)}else e&&nd(n,e)},D_=(n,e,t)=>{const{vnode:r,slots:s}=n;let i=!0,a=we;if(r.shapeFlag&32){const c=e._;c?t&&c===1?i=!1:rd(s,e,t):(i=!e.$stable,td(e,s)),a=e}else e&&(nd(n,e),a={default:1});if(i)for(const c in s)!Pc(c)&&a[c]==null&&delete s[c]},dt=M_;function k_(n){return N_(n)}function N_(n,e){const t=Ao();t.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:a,createText:c,createComment:u,setText:f,setElementText:d,parentNode:g,nextSibling:E,setScopeId:R=At,insertStaticContent:x}=n,U=(_,A,C,F=null,D=null,k=null,$=void 0,L=null,M=!!A.dynamicChildren)=>{if(_===A)return;_&&!ws(_,A)&&(F=dn(_),ht(_,D,k,!0),_=null),A.patchFlag===-2&&(M=!1,A.dynamicChildren=null);const{type:N,ref:X,shapeFlag:q}=A;switch(N){case Vo:B(_,A,C,F);break;case Mn:z(_,A,C,F);break;case _a:_==null&&K(A,C,F,$);break;case Ot:S(_,A,C,F,D,k,$,L,M);break;default:q&1?fe(_,A,C,F,D,k,$,L,M):q&6?y(_,A,C,F,D,k,$,L,M):(q&64||q&128)&&N.process(_,A,C,F,D,k,$,L,M,Gt)}X!=null&&D?ks(X,_&&_.ref,k,A||_,!A):X==null&&_&&_.ref!=null&&ks(_.ref,null,k,_,!0)},B=(_,A,C,F)=>{if(_==null)r(A.el=c(A.children),C,F);else{const D=A.el=_.el;A.children!==_.children&&f(D,A.children)}},z=(_,A,C,F)=>{_==null?r(A.el=u(A.children||""),C,F):A.el=_.el},K=(_,A,C,F)=>{[_.el,_.anchor]=x(_.children,A,C,F,_.el,_.anchor)},J=({el:_,anchor:A},C,F)=>{let D;for(;_&&_!==A;)D=E(_),r(_,C,F),_=D;r(A,C,F)},W=({el:_,anchor:A})=>{let C;for(;_&&_!==A;)C=E(_),s(_),_=C;s(A)},fe=(_,A,C,F,D,k,$,L,M)=>{if(A.type==="svg"?$="svg":A.type==="math"&&($="mathml"),_==null)Ee(A,C,F,D,k,$,L,M);else{const N=_.el&&_.el._isVueCE?_.el:null;try{N&&N._beginPatch(),T(_,A,D,k,$,L,M)}finally{N&&N._endPatch()}}},Ee=(_,A,C,F,D,k,$,L)=>{let M,N;const{props:X,shapeFlag:q,transition:G,dirs:Z}=_;if(M=_.el=a(_.type,k,X&&X.is,X),q&8?d(M,_.children):q&16&&m(_.children,M,null,F,D,ma(_,k),$,L),Z&&Jn(_,null,F,"created"),v(M,_,_.scopeId,$,F),X){for(const _e in X)_e!=="value"&&!Cs(_e)&&i(M,_e,null,X[_e],k,F);"value"in X&&i(M,"value",null,X.value,k),(N=X.onVnodeBeforeMount)&&Dt(N,F,_)}Z&&Jn(_,null,F,"beforeMount");const ae=O_(D,G);ae&&G.beforeEnter(M),r(M,A,C),((N=X&&X.onVnodeMounted)||ae||Z)&&dt(()=>{N&&Dt(N,F,_),ae&&G.enter(M),Z&&Jn(_,null,F,"mounted")},D)},v=(_,A,C,F,D)=>{if(C&&R(_,C),F)for(let k=0;k<F.length;k++)R(_,F[k]);if(D){let k=D.subTree;if(A===k||od(k.type)&&(k.ssContent===A||k.ssFallback===A)){const $=D.vnode;v(_,$,$.scopeId,$.slotScopeIds,D.parent)}}},m=(_,A,C,F,D,k,$,L,M=0)=>{for(let N=M;N<_.length;N++){const X=_[N]=L?wn(_[N]):xt(_[N]);U(null,X,A,C,F,D,k,$,L)}},T=(_,A,C,F,D,k,$)=>{const L=A.el=_.el;let{patchFlag:M,dynamicChildren:N,dirs:X}=A;M|=_.patchFlag&16;const q=_.props||we,G=A.props||we;let Z;if(C&&Xn(C,!1),(Z=G.onVnodeBeforeUpdate)&&Dt(Z,C,A,_),X&&Jn(A,_,C,"beforeUpdate"),C&&Xn(C,!0),(q.innerHTML&&G.innerHTML==null||q.textContent&&G.textContent==null)&&d(L,""),N?w(_.dynamicChildren,N,L,C,F,ma(A,D),k):$||pe(_,A,L,null,C,F,ma(A,D),k,!1),M>0){if(M&16)I(L,q,G,C,D);else if(M&2&&q.class!==G.class&&i(L,"class",null,G.class,D),M&4&&i(L,"style",q.style,G.style,D),M&8){const ae=A.dynamicProps;for(let _e=0;_e<ae.length;_e++){const de=ae[_e],Je=q[de],Ue=G[de];(Ue!==Je||de==="value")&&i(L,de,Je,Ue,D,C)}}M&1&&_.children!==A.children&&d(L,A.children)}else!$&&N==null&&I(L,q,G,C,D);((Z=G.onVnodeUpdated)||X)&&dt(()=>{Z&&Dt(Z,C,A,_),X&&Jn(A,_,C,"updated")},F)},w=(_,A,C,F,D,k,$)=>{for(let L=0;L<A.length;L++){const M=_[L],N=A[L],X=M.el&&(M.type===Ot||!ws(M,N)||M.shapeFlag&198)?g(M.el):C;U(M,N,X,null,F,D,k,$,!0)}},I=(_,A,C,F,D)=>{if(A!==C){if(A!==we)for(const k in A)!Cs(k)&&!(k in C)&&i(_,k,A[k],null,D,F);for(const k in C){if(Cs(k))continue;const $=C[k],L=A[k];$!==L&&k!=="value"&&i(_,k,L,$,D,F)}"value"in C&&i(_,"value",A.value,C.value,D)}},S=(_,A,C,F,D,k,$,L,M)=>{const N=A.el=_?_.el:c(""),X=A.anchor=_?_.anchor:c("");let{patchFlag:q,dynamicChildren:G,slotScopeIds:Z}=A;Z&&(L=L?L.concat(Z):Z),_==null?(r(N,C,F),r(X,C,F),m(A.children||[],C,X,D,k,$,L,M)):q>0&&q&64&&G&&_.dynamicChildren?(w(_.dynamicChildren,G,C,D,k,$,L),(A.key!=null||D&&A===D.subTree)&&sd(_,A,!0)):pe(_,A,C,X,D,k,$,L,M)},y=(_,A,C,F,D,k,$,L,M)=>{A.slotScopeIds=L,_==null?A.shapeFlag&512?D.ctx.activate(A,C,F,$,M):Fe(A,C,F,D,k,$,M):yt(_,A,M)},Fe=(_,A,C,F,D,k,$)=>{const L=_.component=W_(_,F,D);if($f(_)&&(L.ctx.renderer=Gt),G_(L,!1,$),L.asyncDep){if(D&&D.registerDep(L,He,$),!_.el){const M=L.subTree=tn(Mn);z(null,M,A,C),_.placeholder=M.el}}else He(L,_,A,C,D,k,$)},yt=(_,A,C)=>{const F=A.component=_.component;if(A_(_,A,C))if(F.asyncDep&&!F.asyncResolved){Ae(F,A,C);return}else F.next=A,F.update();else A.el=_.el,F.vnode=A},He=(_,A,C,F,D,k,$)=>{const L=()=>{if(_.isMounted){let{next:q,bu:G,u:Z,parent:ae,vnode:_e}=_;{const Xe=id(_);if(Xe){q&&(q.el=_e.el,Ae(_,q,$)),Xe.asyncDep.then(()=>{_.isUnmounted||L()});return}}let de=q,Je;Xn(_,!1),q?(q.el=_e.el,Ae(_,q,$)):q=_e,G&&ca(G),(Je=q.props&&q.props.onVnodeBeforeUpdate)&&Dt(Je,ae,q,_e),Xn(_,!0);const Ue=ga(_),ct=_.subTree;_.subTree=Ue,U(ct,Ue,g(ct.el),dn(ct),_,D,k),q.el=Ue.el,de===null&&b_(_,Ue.el),Z&&dt(Z,D),(Je=q.props&&q.props.onVnodeUpdated)&&dt(()=>Dt(Je,ae,q,_e),D)}else{let q;const{el:G,props:Z}=A,{bm:ae,m:_e,parent:de,root:Je,type:Ue}=_,ct=Ns(A);if(Xn(_,!1),ae&&ca(ae),!ct&&(q=Z&&Z.onVnodeBeforeMount)&&Dt(q,de,A),Xn(_,!0),G&&Tr){const Xe=()=>{_.subTree=ga(_),Tr(G,_.subTree,_,D,null)};ct&&Ue.__asyncHydrate?Ue.__asyncHydrate(G,_,Xe):Xe()}else{Je.ce&&Je.ce._def.shadowRoot!==!1&&Je.ce._injectChildStyle(Ue);const Xe=_.subTree=ga(_);U(null,Xe,C,F,_,D,k),A.el=Xe.el}if(_e&&dt(_e,D),!ct&&(q=Z&&Z.onVnodeMounted)){const Xe=A;dt(()=>Dt(q,de,Xe),D)}(A.shapeFlag&256||de&&Ns(de.vnode)&&de.vnode.shapeFlag&256)&&_.a&&dt(_.a,D),_.isMounted=!0,A=C=F=null}};_.scope.on();const M=_.effect=new Tf(L);_.scope.off();const N=_.update=M.run.bind(M),X=_.job=M.runIfDirty.bind(M);X.i=_,X.id=_.uid,M.scheduler=()=>bc(X),Xn(_,!0),N()},Ae=(_,A,C)=>{A.component=_;const F=_.vnode.props;_.vnode=A,_.next=null,R_(_,A.props,F,C),D_(_,A.children,C),rn(),du(_),sn()},pe=(_,A,C,F,D,k,$,L,M=!1)=>{const N=_&&_.children,X=_?_.shapeFlag:0,q=A.children,{patchFlag:G,shapeFlag:Z}=A;if(G>0){if(G&128){yr(N,q,C,F,D,k,$,L,M);return}else if(G&256){gt(N,q,C,F,D,k,$,L,M);return}}Z&8?(X&16&&Kt(N,D,k),q!==N&&d(C,q)):X&16?Z&16?yr(N,q,C,F,D,k,$,L,M):Kt(N,D,k,!0):(X&8&&d(C,""),Z&16&&m(q,C,F,D,k,$,L,M))},gt=(_,A,C,F,D,k,$,L,M)=>{_=_||kr,A=A||kr;const N=_.length,X=A.length,q=Math.min(N,X);let G;for(G=0;G<q;G++){const Z=A[G]=M?wn(A[G]):xt(A[G]);U(_[G],Z,C,null,D,k,$,L,M)}N>X?Kt(_,D,k,!0,!1,q):m(A,C,F,D,k,$,L,M,q)},yr=(_,A,C,F,D,k,$,L,M)=>{let N=0;const X=A.length;let q=_.length-1,G=X-1;for(;N<=q&&N<=G;){const Z=_[N],ae=A[N]=M?wn(A[N]):xt(A[N]);if(ws(Z,ae))U(Z,ae,C,null,D,k,$,L,M);else break;N++}for(;N<=q&&N<=G;){const Z=_[q],ae=A[G]=M?wn(A[G]):xt(A[G]);if(ws(Z,ae))U(Z,ae,C,null,D,k,$,L,M);else break;q--,G--}if(N>q){if(N<=G){const Z=G+1,ae=Z<X?A[Z].el:F;for(;N<=G;)U(null,A[N]=M?wn(A[N]):xt(A[N]),C,ae,D,k,$,L,M),N++}}else if(N>G)for(;N<=q;)ht(_[N],D,k,!0),N++;else{const Z=N,ae=N,_e=new Map;for(N=ae;N<=G;N++){const ze=A[N]=M?wn(A[N]):xt(A[N]);ze.key!=null&&_e.set(ze.key,N)}let de,Je=0;const Ue=G-ae+1;let ct=!1,Xe=0;const Et=new Array(Ue);for(N=0;N<Ue;N++)Et[N]=0;for(N=Z;N<=q;N++){const ze=_[N];if(Je>=Ue){ht(ze,D,k,!0);continue}let Be;if(ze.key!=null)Be=_e.get(ze.key);else for(de=ae;de<=G;de++)if(Et[de-ae]===0&&ws(ze,A[de])){Be=de;break}Be===void 0?ht(ze,D,k,!0):(Et[Be-ae]=N+1,Be>=Xe?Xe=Be:ct=!0,U(ze,A[Be],C,null,D,k,$,L,M),Je++)}const Ir=ct?x_(Et):kr;for(de=Ir.length-1,N=Ue-1;N>=0;N--){const ze=ae+N,Be=A[ze],as=A[ze+1],zn=ze+1<X?as.el||as.placeholder:F;Et[N]===0?U(null,Be,C,zn,D,k,$,L,M):ct&&(de<0||N!==Ir[de]?Pt(Be,C,zn,2):de--)}}},Pt=(_,A,C,F,D=null)=>{const{el:k,type:$,transition:L,children:M,shapeFlag:N}=_;if(N&6){Pt(_.component.subTree,A,C,F);return}if(N&128){_.suspense.move(A,C,F);return}if(N&64){$.move(_,A,C,Gt);return}if($===Ot){r(k,A,C);for(let q=0;q<M.length;q++)Pt(M[q],A,C,F);r(_.anchor,A,C);return}if($===_a){J(_,A,C);return}if(F!==2&&N&1&&L)if(F===0)L.beforeEnter(k),r(k,A,C),dt(()=>L.enter(k),D);else{const{leave:q,delayLeave:G,afterLeave:Z}=L,ae=()=>{_.ctx.isUnmounted?s(k):r(k,A,C)},_e=()=>{k._isLeaving&&k[Wm](!0),q(k,()=>{ae(),Z&&Z()})};G?G(k,ae,_e):_e()}else r(k,A,C)},ht=(_,A,C,F=!1,D=!1)=>{const{type:k,props:$,ref:L,children:M,dynamicChildren:N,shapeFlag:X,patchFlag:q,dirs:G,cacheIndex:Z}=_;if(q===-2&&(D=!1),L!=null&&(rn(),ks(L,null,C,_,!0),sn()),Z!=null&&(A.renderCache[Z]=void 0),X&256){A.ctx.deactivate(_);return}const ae=X&1&&G,_e=!Ns(_);let de;if(_e&&(de=$&&$.onVnodeBeforeUnmount)&&Dt(de,A,_),X&6)ss(_.component,C,F);else{if(X&128){_.suspense.unmount(C,F);return}ae&&Jn(_,null,A,"beforeUnmount"),X&64?_.type.remove(_,A,C,Gt,F):N&&!N.hasOnce&&(k!==Ot||q>0&&q&64)?Kt(N,A,C,!1,!0):(k===Ot&&q&384||!D&&X&16)&&Kt(M,A,C),F&&rs(_)}(_e&&(de=$&&$.onVnodeUnmounted)||ae)&&dt(()=>{de&&Dt(de,A,_),ae&&Jn(_,null,A,"unmounted")},C)},rs=_=>{const{type:A,el:C,anchor:F,transition:D}=_;if(A===Ot){Er(C,F);return}if(A===_a){W(_);return}const k=()=>{s(C),D&&!D.persisted&&D.afterLeave&&D.afterLeave()};if(_.shapeFlag&1&&D&&!D.persisted){const{leave:$,delayLeave:L}=D,M=()=>$(C,k);L?L(_.el,k,M):M()}else k()},Er=(_,A)=>{let C;for(;_!==A;)C=E(_),s(_),_=C;s(A)},ss=(_,A,C)=>{const{bum:F,scope:D,job:k,subTree:$,um:L,m:M,a:N}=_;Iu(M),Iu(N),F&&ca(F),D.stop(),k&&(k.flags|=8,ht($,_,A,C)),L&&dt(L,A),dt(()=>{_.isUnmounted=!0},A)},Kt=(_,A,C,F=!1,D=!1,k=0)=>{for(let $=k;$<_.length;$++)ht(_[$],A,C,F,D)},dn=_=>{if(_.shapeFlag&6)return dn(_.component.subTree);if(_.shapeFlag&128)return _.suspense.next();const A=E(_.anchor||_.el),C=A&&A[Hm];return C?E(C):A};let Hn=!1;const is=(_,A,C)=>{_==null?A._vnode&&ht(A._vnode,null,null,!0):U(A._vnode||null,_,A,null,null,null,C),A._vnode=_,Hn||(Hn=!0,du(),Ff(),Hn=!1)},Gt={p:U,um:ht,m:Pt,r:rs,mt:Fe,mc:m,pc:pe,pbc:w,n:dn,o:n};let os,Tr;return e&&([os,Tr]=e(Gt)),{render:is,hydrate:os,createApp:p_(is,os)}}function ma({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function Xn({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function O_(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function sd(n,e,t=!1){const r=n.children,s=e.children;if(se(r)&&se(s))for(let i=0;i<r.length;i++){const a=r[i];let c=s[i];c.shapeFlag&1&&!c.dynamicChildren&&((c.patchFlag<=0||c.patchFlag===32)&&(c=s[i]=wn(s[i]),c.el=a.el),!t&&c.patchFlag!==-2&&sd(a,c)),c.type===Vo&&c.patchFlag!==-1&&(c.el=a.el),c.type===Mn&&!c.el&&(c.el=a.el)}}function x_(n){const e=n.slice(),t=[0];let r,s,i,a,c;const u=n.length;for(r=0;r<u;r++){const f=n[r];if(f!==0){if(s=t[t.length-1],n[s]<f){e[r]=s,t.push(r);continue}for(i=0,a=t.length-1;i<a;)c=i+a>>1,n[t[c]]<f?i=c+1:a=c;f<n[t[i]]&&(i>0&&(e[r]=t[i-1]),t[i]=r)}}for(i=t.length,a=t[i-1];i-- >0;)t[i]=a,a=e[a];return t}function id(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:id(e)}function Iu(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}const od=n=>n.__isSuspense;function M_(n,e){e&&e.pendingBranch?se(n)?e.effects.push(...n):e.effects.push(n):$m(n)}const Ot=Symbol.for("v-fgt"),Vo=Symbol.for("v-txt"),Mn=Symbol.for("v-cmt"),_a=Symbol.for("v-stc"),xs=[];let pt=null;function Zn(n=!1){xs.push(pt=n?null:[])}function L_(){xs.pop(),pt=xs[xs.length-1]||null}let Ws=1;function vu(n,e=!1){Ws+=n,n<0&&pt&&e&&(pt.hasOnce=!0)}function ad(n){return n.dynamicChildren=Ws>0?pt||kr:null,L_(),Ws>0&&pt&&pt.push(n),n}function Sr(n,e,t,r,s,i){return ad(ye(n,e,t,r,s,i,!0))}function F_(n,e,t,r,s){return ad(tn(n,e,t,r,s,!0))}function cd(n){return n?n.__v_isVNode===!0:!1}function ws(n,e){return n.type===e.type&&n.key===e.key}const ld=({key:n})=>n??null,Mi=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?Oe(n)||at(n)||oe(n)?{i:Mt,r:n,k:e,f:!!t}:n:null);function ye(n,e=null,t=null,r=0,s=null,i=n===Ot?0:1,a=!1,c=!1){const u={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&ld(e),ref:e&&Mi(e),scopeId:Bf,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Mt};return c?(Vc(u,t),i&128&&n.normalize(u)):t&&(u.shapeFlag|=Oe(t)?8:16),Ws>0&&!a&&pt&&(u.patchFlag>0||i&6)&&u.patchFlag!==32&&pt.push(u),u}const tn=U_;function U_(n,e=null,t=null,r=0,s=null,i=!1){if((!n||n===i_)&&(n=Mn),cd(n)){const c=jr(n,e,!0);return t&&Vc(c,t),Ws>0&&!i&&pt&&(c.shapeFlag&6?pt[pt.indexOf(n)]=c:pt.push(c)),c.patchFlag=-2,c}if(Y_(n)&&(n=n.__vccOpts),e){e=B_(e);let{class:c,style:u}=e;c&&!Oe(c)&&(e.class=bo(c)),Re(u)&&(Ac(u)&&!se(u)&&(u=Ge({},u)),e.style=_c(u))}const a=Oe(n)?1:od(n)?128:zm(n)?64:Re(n)?4:oe(n)?2:0;return ye(n,e,t,r,s,a,i,!0)}function B_(n){return n?Ac(n)||Yf(n)?Ge({},n):n:null}function jr(n,e,t=!1,r=!1){const{props:s,ref:i,patchFlag:a,children:c,transition:u}=n,f=e?q_(s||{},e):s,d={__v_isVNode:!0,__v_skip:!0,type:n.type,props:f,key:f&&ld(f),ref:e&&e.ref?t&&i?se(i)?i.concat(Mi(e)):[i,Mi(e)]:Mi(e):i,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:c,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==Ot?a===-1?16:a|16:a,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:u,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&jr(n.ssContent),ssFallback:n.ssFallback&&jr(n.ssFallback),placeholder:n.placeholder,el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return u&&r&&Sc(d,u.clone(d)),d}function j_(n=" ",e=0){return tn(Vo,null,n,e)}function $_(n="",e=!1){return e?(Zn(),F_(Mn,null,n)):tn(Mn,null,n)}function xt(n){return n==null||typeof n=="boolean"?tn(Mn):se(n)?tn(Ot,null,n.slice()):cd(n)?wn(n):tn(Vo,null,String(n))}function wn(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:jr(n)}function Vc(n,e){let t=0;const{shapeFlag:r}=n;if(e==null)e=null;else if(se(e))t=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),Vc(n,s()),s._c&&(s._d=!0));return}else{t=32;const s=e._;!s&&!Yf(e)?e._ctx=Mt:s===3&&Mt&&(Mt.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else oe(e)?(e={default:e,_ctx:Mt},t=32):(e=String(e),r&64?(t=16,e=[j_(e)]):t=8);n.children=e,n.shapeFlag|=t}function q_(...n){const e={};for(let t=0;t<n.length;t++){const r=n[t];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=bo([e.class,r.class]));else if(s==="style")e.style=_c([e.style,r.style]);else if(Io(s)){const i=e[s],a=r[s];a&&i!==a&&!(se(i)&&i.includes(a))&&(e[s]=i?[].concat(i,a):a)}else s!==""&&(e[s]=r[s])}return e}function Dt(n,e,t,r=null){$t(n,e,7,[t,r])}const H_=Wf();let z_=0;function W_(n,e,t){const r=n.type,s=(e?e.appContext:n.appContext)||H_,i={uid:z_++,vnode:n,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new hm(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:ed(r,s),emitsOptions:Qf(r,s),emit:null,emitted:null,propsDefaults:we,inheritAttrs:r.inheritAttrs,ctx:we,data:we,props:we,attrs:we,slots:we,refs:we,setupState:we,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=T_.bind(null,i),n.ce&&n.ce(i),i}let ot=null;const K_=()=>ot||Mt;let Zi,ja;{const n=Ao(),e=(t,r)=>{let s;return(s=n[t])||(s=n[t]=[]),s.push(r),i=>{s.length>1?s.forEach(a=>a(i)):s[0](i)}};Zi=e("__VUE_INSTANCE_SETTERS__",t=>ot=t),ja=e("__VUE_SSR_SETTERS__",t=>Ks=t)}const ii=n=>{const e=ot;return Zi(n),n.scope.on(),()=>{n.scope.off(),Zi(e)}},wu=()=>{ot&&ot.scope.off(),Zi(null)};function ud(n){return n.vnode.shapeFlag&4}let Ks=!1;function G_(n,e=!1,t=!1){e&&ja(e);const{props:r,children:s}=n.vnode,i=ud(n);S_(n,r,i,e),V_(n,s,t||e);const a=i?Q_(n,e):void 0;return e&&ja(!1),a}function Q_(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,a_);const{setup:r}=t;if(r){rn();const s=n.setupContext=r.length>1?X_(n):null,i=ii(n),a=si(r,n,0,[n.props,s]),c=ff(a);if(sn(),i(),(c||n.sp)&&!Ns(n)&&jf(n),c){if(a.then(wu,wu),e)return a.then(u=>{Au(n,u,e)}).catch(u=>{Ro(u,n,0)});n.asyncDep=a}else Au(n,a,e)}else hd(n,e)}function Au(n,e,t){oe(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:Re(e)&&(n.setupState=xf(e)),hd(n,t)}let bu;function hd(n,e,t){const r=n.type;if(!n.render){if(!e&&bu&&!r.render){const s=r.template||Rc(n).template;if(s){const{isCustomElement:i,compilerOptions:a}=n.appContext.config,{delimiters:c,compilerOptions:u}=r,f=Ge(Ge({isCustomElement:i,delimiters:c},a),u);r.render=bu(s,f)}}n.render=r.render||At}{const s=ii(n);rn();try{c_(n)}finally{sn(),s()}}}const J_={get(n,e){return et(n,"get",""),n[e]}};function X_(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,J_),slots:n.slots,emit:n.emit,expose:e}}function Dc(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(xf(km(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in Os)return Os[t](n)},has(e,t){return t in e||t in Os}})):n.proxy}function Y_(n){return oe(n)&&"__vccOpts"in n}const Z_=(n,e)=>Mm(n,e,Ks),ey="3.5.25";/**
* @vue/runtime-dom v3.5.25
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let $a;const Su=typeof window<"u"&&window.trustedTypes;if(Su)try{$a=Su.createPolicy("vue",{createHTML:n=>n})}catch{}const fd=$a?n=>$a.createHTML(n):n=>n,ty="http://www.w3.org/2000/svg",ny="http://www.w3.org/1998/Math/MathML",Jt=typeof document<"u"?document:null,Ru=Jt&&Jt.createElement("template"),ry={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,r)=>{const s=e==="svg"?Jt.createElementNS(ty,n):e==="mathml"?Jt.createElementNS(ny,n):t?Jt.createElement(n,{is:t}):Jt.createElement(n);return n==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:n=>Jt.createTextNode(n),createComment:n=>Jt.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>Jt.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,r,s,i){const a=t?t.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),t),!(s===i||!(s=s.nextSibling)););else{Ru.innerHTML=fd(r==="svg"?`<svg>${n}</svg>`:r==="mathml"?`<math>${n}</math>`:n);const c=Ru.content;if(r==="svg"||r==="mathml"){const u=c.firstChild;for(;u.firstChild;)c.appendChild(u.firstChild);c.removeChild(u)}e.insertBefore(c,t)}return[a?a.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},sy=Symbol("_vtc");function iy(n,e,t){const r=n[sy];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const Pu=Symbol("_vod"),oy=Symbol("_vsh"),ay=Symbol(""),cy=/(?:^|;)\s*display\s*:/;function ly(n,e,t){const r=n.style,s=Oe(t);let i=!1;if(t&&!s){if(e)if(Oe(e))for(const a of e.split(";")){const c=a.slice(0,a.indexOf(":")).trim();t[c]==null&&Li(r,c,"")}else for(const a in e)t[a]==null&&Li(r,a,"");for(const a in t)a==="display"&&(i=!0),Li(r,a,t[a])}else if(s){if(e!==t){const a=r[ay];a&&(t+=";"+a),r.cssText=t,i=cy.test(t)}}else e&&n.removeAttribute("style");Pu in n&&(n[Pu]=i?r.display:"",n[oy]&&(r.display="none"))}const Cu=/\s*!important$/;function Li(n,e,t){if(se(t))t.forEach(r=>Li(n,e,r));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const r=uy(n,e);Cu.test(t)?n.setProperty(dr(r),t.replace(Cu,""),"important"):n[r]=t}}const Vu=["Webkit","Moz","ms"],ya={};function uy(n,e){const t=ya[e];if(t)return t;let r=On(e);if(r!=="filter"&&r in n)return ya[e]=r;r=gf(r);for(let s=0;s<Vu.length;s++){const i=Vu[s]+r;if(i in n)return ya[e]=i}return e}const Du="http://www.w3.org/1999/xlink";function ku(n,e,t,r,s,i=um(e)){r&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(Du,e.slice(6,e.length)):n.setAttributeNS(Du,e,t):t==null||i&&!_f(t)?n.removeAttribute(e):n.setAttribute(e,i?"":qn(t)?String(t):t)}function Nu(n,e,t,r,s){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?fd(t):t);return}const i=n.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const c=i==="OPTION"?n.getAttribute("value")||"":n.value,u=t==null?n.type==="checkbox"?"on":"":String(t);(c!==u||!("_value"in n))&&(n.value=u),t==null&&n.removeAttribute(e),n._value=t;return}let a=!1;if(t===""||t==null){const c=typeof n[e];c==="boolean"?t=_f(t):t==null&&c==="string"?(t="",a=!0):c==="number"&&(t=0,a=!0)}try{n[e]=t}catch{}a&&n.removeAttribute(s||e)}function hy(n,e,t,r){n.addEventListener(e,t,r)}function fy(n,e,t,r){n.removeEventListener(e,t,r)}const Ou=Symbol("_vei");function dy(n,e,t,r,s=null){const i=n[Ou]||(n[Ou]={}),a=i[e];if(r&&a)a.value=r;else{const[c,u]=py(e);if(r){const f=i[e]=_y(r,s);hy(n,c,f,u)}else a&&(fy(n,c,a,u),i[e]=void 0)}}const xu=/(?:Once|Passive|Capture)$/;function py(n){let e;if(xu.test(n)){e={};let r;for(;r=n.match(xu);)n=n.slice(0,n.length-r[0].length),e[r[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):dr(n.slice(2)),e]}let Ea=0;const gy=Promise.resolve(),my=()=>Ea||(gy.then(()=>Ea=0),Ea=Date.now());function _y(n,e){const t=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=t.attached)return;$t(yy(r,t.value),e,5,[r])};return t.value=n,t.attached=my(),t}function yy(n,e){if(se(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Mu=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,Ey=(n,e,t,r,s,i)=>{const a=s==="svg";e==="class"?iy(n,r,a):e==="style"?ly(n,t,r):Io(e)?pc(e)||dy(n,e,t,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Ty(n,e,r,a))?(Nu(n,e,r),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&ku(n,e,r,a,i,e!=="value")):n._isVueCE&&(/[A-Z]/.test(e)||!Oe(r))?Nu(n,On(e),r,i,e):(e==="true-value"?n._trueValue=r:e==="false-value"&&(n._falseValue=r),ku(n,e,r,a))};function Ty(n,e,t,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in n&&Mu(e)&&oe(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&n.tagName==="IFRAME"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=n.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Mu(e)&&Oe(t)?!1:e in n}const Iy=["ctrl","shift","alt","meta"],vy={stop:n=>n.stopPropagation(),prevent:n=>n.preventDefault(),self:n=>n.target!==n.currentTarget,ctrl:n=>!n.ctrlKey,shift:n=>!n.shiftKey,alt:n=>!n.altKey,meta:n=>!n.metaKey,left:n=>"button"in n&&n.button!==0,middle:n=>"button"in n&&n.button!==1,right:n=>"button"in n&&n.button!==2,exact:(n,e)=>Iy.some(t=>n[`${t}Key`]&&!e.includes(t))},wy=(n,e)=>{const t=n._withMods||(n._withMods={}),r=e.join(".");return t[r]||(t[r]=(s,...i)=>{for(let a=0;a<e.length;a++){const c=vy[e[a]];if(c&&c(s,e))return}return n(s,...i)})},Ay=Ge({patchProp:Ey},ry);let Lu;function by(){return Lu||(Lu=k_(Ay))}const Sy=(...n)=>{const e=by().createApp(...n),{mount:t}=e;return e.mount=r=>{const s=Py(r);if(!s)return;const i=e._component;!oe(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const a=t(s,!1,Ry(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),a},e};function Ry(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function Py(n){return Oe(n)?document.querySelector(n):n}const Cy=()=>{};/**
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
 */const dd=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},Vy=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const s=n[t++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=n[t++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=n[t++],a=n[t++],c=n[t++],u=((s&7)<<18|(i&63)<<12|(a&63)<<6|c&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const i=n[t++],a=n[t++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|a&63)}}return e.join("")},pd={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const i=n[s],a=s+1<n.length,c=a?n[s+1]:0,u=s+2<n.length,f=u?n[s+2]:0,d=i>>2,g=(i&3)<<4|c>>4;let E=(c&15)<<2|f>>6,R=f&63;u||(R=64,a||(E=64)),r.push(t[d],t[g],t[E],t[R])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(dd(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Vy(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const i=t[n.charAt(s++)],c=s<n.length?t[n.charAt(s)]:0;++s;const f=s<n.length?t[n.charAt(s)]:64;++s;const g=s<n.length?t[n.charAt(s)]:64;if(++s,i==null||c==null||f==null||g==null)throw new Dy;const E=i<<2|c>>4;if(r.push(E),f!==64){const R=c<<4&240|f>>2;if(r.push(R),g!==64){const x=f<<6&192|g;r.push(x)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Dy extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const ky=function(n){const e=dd(n);return pd.encodeByteArray(e,!0)},eo=function(n){return ky(n).replace(/\./g,"")},gd=function(n){try{return pd.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Ny(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Oy=()=>Ny().__FIREBASE_DEFAULTS__,xy=()=>{if(typeof process>"u"||typeof process.env>"u")return;const n={}.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},My=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&gd(n[1]);return e&&JSON.parse(e)},Do=()=>{try{return Cy()||Oy()||xy()||My()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},md=n=>{var e,t;return(t=(e=Do())==null?void 0:e.emulatorHosts)==null?void 0:t[n]},Ly=n=>{const e=md(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},_d=()=>{var n;return(n=Do())==null?void 0:n.config},yd=n=>{var e;return(e=Do())==null?void 0:e[`_${n}`]};/**
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
 */class Fy{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jr(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function Ed(n){return(await fetch(n,{credentials:"include"})).ok}/**
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
 */function Uy(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",s=n.iat||0,i=n.sub||n.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a={iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}},...n},c="";return[eo(JSON.stringify(t)),eo(JSON.stringify(a)),c].join(".")}const Ms={};function By(){const n={prod:[],emulator:[]};for(const e of Object.keys(Ms))Ms[e]?n.emulator.push(e):n.prod.push(e);return n}function jy(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let Fu=!1;function Td(n,e){if(typeof window>"u"||typeof document>"u"||!Jr(window.location.host)||Ms[n]===e||Ms[n]||Fu)return;Ms[n]=e;function t(E){return`__firebase__banner__${E}`}const r="__firebase__banner",i=By().prod.length>0;function a(){const E=document.getElementById(r);E&&E.remove()}function c(E){E.style.display="flex",E.style.background="#7faaf0",E.style.position="fixed",E.style.bottom="5px",E.style.left="5px",E.style.padding=".5em",E.style.borderRadius="5px",E.style.alignItems="center"}function u(E,R){E.setAttribute("width","24"),E.setAttribute("id",R),E.setAttribute("height","24"),E.setAttribute("viewBox","0 0 24 24"),E.setAttribute("fill","none"),E.style.marginLeft="-6px"}function f(){const E=document.createElement("span");return E.style.cursor="pointer",E.style.marginLeft="16px",E.style.fontSize="24px",E.innerHTML=" &times;",E.onclick=()=>{Fu=!0,a()},E}function d(E,R){E.setAttribute("id",R),E.innerText="Learn more",E.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",E.setAttribute("target","__blank"),E.style.paddingLeft="5px",E.style.textDecoration="underline"}function g(){const E=jy(r),R=t("text"),x=document.getElementById(R)||document.createElement("span"),U=t("learnmore"),B=document.getElementById(U)||document.createElement("a"),z=t("preprendIcon"),K=document.getElementById(z)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(E.created){const J=E.element;c(J),d(B,U);const W=f();u(K,z),J.append(K,x,B,W),document.body.appendChild(J)}i?(x.innerText="Preview backend disconnected.",K.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(K.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,x.innerText="Preview backend running in this workspace."),x.setAttribute("id",R)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",g):g()}/**
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
 */function nt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function $y(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(nt())}function qy(){var e;const n=(e=Do())==null?void 0:e.forceEnvironment;if(n==="node")return!0;if(n==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Hy(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function zy(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Wy(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Ky(){const n=nt();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function Gy(){return!qy()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Qy(){try{return typeof indexedDB=="object"}catch{return!1}}function Jy(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var i;e(((i=s.error)==null?void 0:i.message)||"")}}catch(t){e(t)}})}/**
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
 */const Xy="FirebaseError";class fn extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=Xy,Object.setPrototypeOf(this,fn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,oi.prototype.create)}}class oi{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},s=`${this.service}/${e}`,i=this.errors[e],a=i?Yy(i,r):"Error",c=`${this.serviceName}: ${a} (${s}).`;return new fn(s,c,r)}}function Yy(n,e){return n.replace(Zy,(t,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const Zy=/\{\$([^}]+)}/g;function eE(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function cr(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const s of t){if(!r.includes(s))return!1;const i=n[s],a=e[s];if(Uu(i)&&Uu(a)){if(!cr(i,a))return!1}else if(i!==a)return!1}for(const s of r)if(!t.includes(s))return!1;return!0}function Uu(n){return n!==null&&typeof n=="object"}/**
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
 */function ai(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function tE(n,e){const t=new nE(n,e);return t.subscribe.bind(t)}class nE{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let s;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");rE(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:r},s.next===void 0&&(s.next=Ta),s.error===void 0&&(s.error=Ta),s.complete===void 0&&(s.complete=Ta);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function rE(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Ta(){}/**
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
 */function qt(n){return n&&n._delegate?n._delegate:n}class lr{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const er="[DEFAULT]";/**
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
 */class sE{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new Fy;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),r=(e==null?void 0:e.optional)??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(s){if(r)return null;throw s}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(oE(e))try{this.getOrInitializeService({instanceIdentifier:er})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=er){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=er){return this.instances.has(e)}getOptions(e=er){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[i,a]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(i);r===c&&a.resolve(s)}return s}onInit(e,t){const r=this.normalizeInstanceIdentifier(t),s=this.onInitCallbacks.get(r)??new Set;s.add(e),this.onInitCallbacks.set(r,s);const i=this.instances.get(r);return i&&e(i,r),()=>{s.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const s of r)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:iE(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=er){return this.component?this.component.multipleInstances?e:er:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function iE(n){return n===er?void 0:n}function oE(n){return n.instantiationMode==="EAGER"}/**
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
 */class aE{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new sE(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ce;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(ce||(ce={}));const cE={debug:ce.DEBUG,verbose:ce.VERBOSE,info:ce.INFO,warn:ce.WARN,error:ce.ERROR,silent:ce.SILENT},lE=ce.INFO,uE={[ce.DEBUG]:"log",[ce.VERBOSE]:"log",[ce.INFO]:"info",[ce.WARN]:"warn",[ce.ERROR]:"error"},hE=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),s=uE[e];if(s)console[s](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class kc{constructor(e){this.name=e,this._logLevel=lE,this._logHandler=hE,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ce))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?cE[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ce.DEBUG,...e),this._logHandler(this,ce.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ce.VERBOSE,...e),this._logHandler(this,ce.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ce.INFO,...e),this._logHandler(this,ce.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ce.WARN,...e),this._logHandler(this,ce.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ce.ERROR,...e),this._logHandler(this,ce.ERROR,...e)}}const fE=(n,e)=>e.some(t=>n instanceof t);let Bu,ju;function dE(){return Bu||(Bu=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function pE(){return ju||(ju=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Id=new WeakMap,qa=new WeakMap,vd=new WeakMap,Ia=new WeakMap,Nc=new WeakMap;function gE(n){const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("success",i),n.removeEventListener("error",a)},i=()=>{t(Cn(n.result)),s()},a=()=>{r(n.error),s()};n.addEventListener("success",i),n.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&Id.set(t,n)}).catch(()=>{}),Nc.set(e,n),e}function mE(n){if(qa.has(n))return;const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("complete",i),n.removeEventListener("error",a),n.removeEventListener("abort",a)},i=()=>{t(),s()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",i),n.addEventListener("error",a),n.addEventListener("abort",a)});qa.set(n,e)}let Ha={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return qa.get(n);if(e==="objectStoreNames")return n.objectStoreNames||vd.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Cn(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function _E(n){Ha=n(Ha)}function yE(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(va(this),e,...t);return vd.set(r,e.sort?e.sort():[e]),Cn(r)}:pE().includes(n)?function(...e){return n.apply(va(this),e),Cn(Id.get(this))}:function(...e){return Cn(n.apply(va(this),e))}}function EE(n){return typeof n=="function"?yE(n):(n instanceof IDBTransaction&&mE(n),fE(n,dE())?new Proxy(n,Ha):n)}function Cn(n){if(n instanceof IDBRequest)return gE(n);if(Ia.has(n))return Ia.get(n);const e=EE(n);return e!==n&&(Ia.set(n,e),Nc.set(e,n)),e}const va=n=>Nc.get(n);function TE(n,e,{blocked:t,upgrade:r,blocking:s,terminated:i}={}){const a=indexedDB.open(n,e),c=Cn(a);return r&&a.addEventListener("upgradeneeded",u=>{r(Cn(a.result),u.oldVersion,u.newVersion,Cn(a.transaction),u)}),t&&a.addEventListener("blocked",u=>t(u.oldVersion,u.newVersion,u)),c.then(u=>{i&&u.addEventListener("close",()=>i()),s&&u.addEventListener("versionchange",f=>s(f.oldVersion,f.newVersion,f))}).catch(()=>{}),c}const IE=["get","getKey","getAll","getAllKeys","count"],vE=["put","add","delete","clear"],wa=new Map;function $u(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(wa.get(e))return wa.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,s=vE.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(s||IE.includes(t)))return;const i=async function(a,...c){const u=this.transaction(a,s?"readwrite":"readonly");let f=u.store;return r&&(f=f.index(c.shift())),(await Promise.all([f[t](...c),s&&u.done]))[0]};return wa.set(e,i),i}_E(n=>({...n,get:(e,t,r)=>$u(e,t)||n.get(e,t,r),has:(e,t)=>!!$u(e,t)||n.has(e,t)}));/**
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
 */class wE{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(AE(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function AE(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const za="@firebase/app",qu="0.14.6";/**
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
 */const an=new kc("@firebase/app"),bE="@firebase/app-compat",SE="@firebase/analytics-compat",RE="@firebase/analytics",PE="@firebase/app-check-compat",CE="@firebase/app-check",VE="@firebase/auth",DE="@firebase/auth-compat",kE="@firebase/database",NE="@firebase/data-connect",OE="@firebase/database-compat",xE="@firebase/functions",ME="@firebase/functions-compat",LE="@firebase/installations",FE="@firebase/installations-compat",UE="@firebase/messaging",BE="@firebase/messaging-compat",jE="@firebase/performance",$E="@firebase/performance-compat",qE="@firebase/remote-config",HE="@firebase/remote-config-compat",zE="@firebase/storage",WE="@firebase/storage-compat",KE="@firebase/firestore",GE="@firebase/ai",QE="@firebase/firestore-compat",JE="firebase",XE="12.6.0";/**
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
 */const Wa="[DEFAULT]",YE={[za]:"fire-core",[bE]:"fire-core-compat",[RE]:"fire-analytics",[SE]:"fire-analytics-compat",[CE]:"fire-app-check",[PE]:"fire-app-check-compat",[VE]:"fire-auth",[DE]:"fire-auth-compat",[kE]:"fire-rtdb",[NE]:"fire-data-connect",[OE]:"fire-rtdb-compat",[xE]:"fire-fn",[ME]:"fire-fn-compat",[LE]:"fire-iid",[FE]:"fire-iid-compat",[UE]:"fire-fcm",[BE]:"fire-fcm-compat",[jE]:"fire-perf",[$E]:"fire-perf-compat",[qE]:"fire-rc",[HE]:"fire-rc-compat",[zE]:"fire-gcs",[WE]:"fire-gcs-compat",[KE]:"fire-fst",[QE]:"fire-fst-compat",[GE]:"fire-vertex","fire-js":"fire-js",[JE]:"fire-js-all"};/**
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
 */const to=new Map,ZE=new Map,Ka=new Map;function Hu(n,e){try{n.container.addComponent(e)}catch(t){an.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function $r(n){const e=n.name;if(Ka.has(e))return an.debug(`There were multiple attempts to register component ${e}.`),!1;Ka.set(e,n);for(const t of to.values())Hu(t,n);for(const t of ZE.values())Hu(t,n);return!0}function Oc(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function It(n){return n==null?!1:n.settings!==void 0}/**
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
 */const eT={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Vn=new oi("app","Firebase",eT);/**
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
 */class tT{constructor(e,t,r){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new lr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Vn.create("app-deleted",{appName:this._name})}}/**
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
 */const Xr=XE;function wd(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r={name:Wa,automaticDataCollectionEnabled:!0,...e},s=r.name;if(typeof s!="string"||!s)throw Vn.create("bad-app-name",{appName:String(s)});if(t||(t=_d()),!t)throw Vn.create("no-options");const i=to.get(s);if(i){if(cr(t,i.options)&&cr(r,i.config))return i;throw Vn.create("duplicate-app",{appName:s})}const a=new aE(s);for(const u of Ka.values())a.addComponent(u);const c=new tT(t,r,a);return to.set(s,c),c}function Ad(n=Wa){const e=to.get(n);if(!e&&n===Wa&&_d())return wd();if(!e)throw Vn.create("no-app",{appName:n});return e}function Dn(n,e,t){let r=YE[n]??n;t&&(r+=`-${t}`);const s=r.match(/\s|\//),i=e.match(/\s|\//);if(s||i){const a=[`Unable to register library "${r}" with version "${e}":`];s&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),s&&i&&a.push("and"),i&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),an.warn(a.join(" "));return}$r(new lr(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
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
 */const nT="firebase-heartbeat-database",rT=1,Gs="firebase-heartbeat-store";let Aa=null;function bd(){return Aa||(Aa=TE(nT,rT,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Gs)}catch(t){console.warn(t)}}}}).catch(n=>{throw Vn.create("idb-open",{originalErrorMessage:n.message})})),Aa}async function sT(n){try{const t=(await bd()).transaction(Gs),r=await t.objectStore(Gs).get(Sd(n));return await t.done,r}catch(e){if(e instanceof fn)an.warn(e.message);else{const t=Vn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});an.warn(t.message)}}}async function zu(n,e){try{const r=(await bd()).transaction(Gs,"readwrite");await r.objectStore(Gs).put(e,Sd(n)),await r.done}catch(t){if(t instanceof fn)an.warn(t.message);else{const r=Vn.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});an.warn(r.message)}}}function Sd(n){return`${n.name}!${n.options.appId}`}/**
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
 */const iT=1024,oT=30;class aT{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new lT(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Wu();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(a=>a.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>oT){const a=uT(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){an.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Wu(),{heartbeatsToSend:r,unsentEntries:s}=cT(this._heartbeatsCache.heartbeats),i=eo(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(t){return an.warn(t),""}}}function Wu(){return new Date().toISOString().substring(0,10)}function cT(n,e=iT){const t=[];let r=n.slice();for(const s of n){const i=t.find(a=>a.agent===s.agent);if(i){if(i.dates.push(s.date),Ku(t)>e){i.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),Ku(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class lT{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Qy()?Jy().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await sT(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return zu(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return zu(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function Ku(n){return eo(JSON.stringify({version:2,heartbeats:n})).length}function uT(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let r=1;r<n.length;r++)n[r].date<t&&(t=n[r].date,e=r);return e}/**
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
 */function hT(n){$r(new lr("platform-logger",e=>new wE(e),"PRIVATE")),$r(new lr("heartbeat",e=>new aT(e),"PRIVATE")),Dn(za,qu,n),Dn(za,qu,"esm2020"),Dn("fire-js","")}hT("");var fT="firebase",dT="12.6.0";/**
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
 */Dn(fT,dT,"app");function Rd(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const pT=Rd,Pd=new oi("auth","Firebase",Rd());/**
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
 */const no=new kc("@firebase/auth");function gT(n,...e){no.logLevel<=ce.WARN&&no.warn(`Auth (${Xr}): ${n}`,...e)}function Fi(n,...e){no.logLevel<=ce.ERROR&&no.error(`Auth (${Xr}): ${n}`,...e)}/**
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
 */function Ht(n,...e){throw Mc(n,...e)}function Rt(n,...e){return Mc(n,...e)}function xc(n,e,t){const r={...pT(),[e]:t};return new oi("auth","Firebase",r).create(e,{appName:n.name})}function or(n){return xc(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function mT(n,e,t){const r=t;if(!(e instanceof r))throw r.name!==e.constructor.name&&Ht(n,"argument-error"),xc(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Mc(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return Pd.create(n,...e)}function te(n,e,...t){if(!n)throw Mc(e,...t)}function Zt(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Fi(e),new Error(e)}function cn(n,e){n||Zt(e)}/**
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
 */function Ga(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.href)||""}function _T(){return Gu()==="http:"||Gu()==="https:"}function Gu(){var n;return typeof self<"u"&&((n=self.location)==null?void 0:n.protocol)||null}/**
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
 */function yT(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(_T()||zy()||"connection"in navigator)?navigator.onLine:!0}function ET(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class ci{constructor(e,t){this.shortDelay=e,this.longDelay=t,cn(t>e,"Short delay should be less than long delay!"),this.isMobile=$y()||Wy()}get(){return yT()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Lc(n,e){cn(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class Cd{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Zt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Zt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Zt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const TT={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const IT=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],vT=new ci(3e4,6e4);function Fc(n,e){return n.tenantId&&!e.tenantId?{...e,tenantId:n.tenantId}:e}async function Yr(n,e,t,r,s={}){return Vd(n,s,async()=>{let i={},a={};r&&(e==="GET"?a=r:i={body:JSON.stringify(r)});const c=ai({key:n.config.apiKey,...a}).slice(1),u=await n._getAdditionalHeaders();u["Content-Type"]="application/json",n.languageCode&&(u["X-Firebase-Locale"]=n.languageCode);const f={method:e,headers:u,...i};return Hy()||(f.referrerPolicy="no-referrer"),n.emulatorConfig&&Jr(n.emulatorConfig.host)&&(f.credentials="include"),Cd.fetch()(await Dd(n,n.config.apiHost,t,c),f)})}async function Vd(n,e,t){n._canInitEmulator=!1;const r={...TT,...e};try{const s=new AT(n),i=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const a=await i.json();if("needConfirmation"in a)throw Ci(n,"account-exists-with-different-credential",a);if(i.ok&&!("errorMessage"in a))return a;{const c=i.ok?a.errorMessage:a.error.message,[u,f]=c.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ci(n,"credential-already-in-use",a);if(u==="EMAIL_EXISTS")throw Ci(n,"email-already-in-use",a);if(u==="USER_DISABLED")throw Ci(n,"user-disabled",a);const d=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(f)throw xc(n,d,f);Ht(n,d)}}catch(s){if(s instanceof fn)throw s;Ht(n,"network-request-failed",{message:String(s)})}}async function wT(n,e,t,r,s={}){const i=await Yr(n,e,t,r,s);return"mfaPendingCredential"in i&&Ht(n,"multi-factor-auth-required",{_serverResponse:i}),i}async function Dd(n,e,t,r){const s=`${e}${t}?${r}`,i=n,a=i.config.emulator?Lc(n.config,s):`${n.config.apiScheme}://${s}`;return IT.includes(t)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(a).toString():a}class AT{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(Rt(this.auth,"network-request-failed")),vT.get())})}}function Ci(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const s=Rt(n,e,r);return s.customData._tokenResponse=t,s}/**
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
 */async function bT(n,e){return Yr(n,"POST","/v1/accounts:delete",e)}async function ro(n,e){return Yr(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function Ls(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function ST(n,e=!1){const t=qt(n),r=await t.getIdToken(e),s=Uc(r);te(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,a=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:Ls(ba(s.auth_time)),issuedAtTime:Ls(ba(s.iat)),expirationTime:Ls(ba(s.exp)),signInProvider:a||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function ba(n){return Number(n)*1e3}function Uc(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return Fi("JWT malformed, contained fewer than 3 sections"),null;try{const s=gd(t);return s?JSON.parse(s):(Fi("Failed to decode base64 JWT payload"),null)}catch(s){return Fi("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Qu(n){const e=Uc(n);return te(e,"internal-error"),te(typeof e.exp<"u","internal-error"),te(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Qs(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof fn&&RT(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function RT({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class PT{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Qa{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ls(this.lastLoginAt),this.creationTime=Ls(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function so(n){var g;const e=n.auth,t=await n.getIdToken(),r=await Qs(n,ro(e,{idToken:t}));te(r==null?void 0:r.users.length,e,"internal-error");const s=r.users[0];n._notifyReloadListener(s);const i=(g=s.providerUserInfo)!=null&&g.length?kd(s.providerUserInfo):[],a=VT(n.providerData,i),c=n.isAnonymous,u=!(n.email&&s.passwordHash)&&!(a!=null&&a.length),f=c?u:!1,d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Qa(s.createdAt,s.lastLoginAt),isAnonymous:f};Object.assign(n,d)}async function CT(n){const e=qt(n);await so(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function VT(n,e){return[...n.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function kd(n){return n.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
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
 */async function DT(n,e){const t=await Vd(n,{},async()=>{const r=ai({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=n.config,a=await Dd(n,s,"/v1/token",`key=${i}`),c=await n._getAdditionalHeaders();c["Content-Type"]="application/x-www-form-urlencoded";const u={method:"POST",headers:c,body:r};return n.emulatorConfig&&Jr(n.emulatorConfig.host)&&(u.credentials="include"),Cd.fetch()(a,u)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function kT(n,e){return Yr(n,"POST","/v2/accounts:revokeToken",Fc(n,e))}/**
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
 */class Mr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){te(e.idToken,"internal-error"),te(typeof e.idToken<"u","internal-error"),te(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Qu(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){te(e.length!==0,"internal-error");const t=Qu(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(te(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:s,expiresIn:i}=await DT(e,t);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:s,expirationTime:i}=t,a=new Mr;return r&&(te(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),s&&(te(typeof s=="string","internal-error",{appName:e}),a.accessToken=s),i&&(te(typeof i=="number","internal-error",{appName:e}),a.expirationTime=i),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Mr,this.toJSON())}_performRefresh(){return Zt("not implemented")}}/**
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
 */function Tn(n,e){te(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class vt{constructor({uid:e,auth:t,stsTokenManager:r,...s}){this.providerId="firebase",this.proactiveRefresh=new PT(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Qa(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const t=await Qs(this,this.stsTokenManager.getToken(this.auth,e));return te(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return ST(this,e)}reload(){return CT(this)}_assign(e){this!==e&&(te(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new vt({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){te(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await so(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(It(this.auth.app))return Promise.reject(or(this.auth));const e=await this.getIdToken();return await Qs(this,bT(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const r=t.displayName??void 0,s=t.email??void 0,i=t.phoneNumber??void 0,a=t.photoURL??void 0,c=t.tenantId??void 0,u=t._redirectEventId??void 0,f=t.createdAt??void 0,d=t.lastLoginAt??void 0,{uid:g,emailVerified:E,isAnonymous:R,providerData:x,stsTokenManager:U}=t;te(g&&U,e,"internal-error");const B=Mr.fromJSON(this.name,U);te(typeof g=="string",e,"internal-error"),Tn(r,e.name),Tn(s,e.name),te(typeof E=="boolean",e,"internal-error"),te(typeof R=="boolean",e,"internal-error"),Tn(i,e.name),Tn(a,e.name),Tn(c,e.name),Tn(u,e.name),Tn(f,e.name),Tn(d,e.name);const z=new vt({uid:g,auth:e,email:s,emailVerified:E,displayName:r,isAnonymous:R,photoURL:a,phoneNumber:i,tenantId:c,stsTokenManager:B,createdAt:f,lastLoginAt:d});return x&&Array.isArray(x)&&(z.providerData=x.map(K=>({...K}))),u&&(z._redirectEventId=u),z}static async _fromIdTokenResponse(e,t,r=!1){const s=new Mr;s.updateFromServerResponse(t);const i=new vt({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await so(i),i}static async _fromGetAccountInfoResponse(e,t,r){const s=t.users[0];te(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?kd(s.providerUserInfo):[],a=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),c=new Mr;c.updateFromIdToken(r);const u=new vt({uid:s.localId,auth:e,stsTokenManager:c,isAnonymous:a}),f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new Qa(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(u,f),u}}/**
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
 */const Ju=new Map;function en(n){cn(n instanceof Function,"Expected a class definition");let e=Ju.get(n);return e?(cn(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Ju.set(n,e),e)}/**
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
 */class Nd{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Nd.type="NONE";const Xu=Nd;/**
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
 */function Ui(n,e,t){return`firebase:${n}:${e}:${t}`}class Lr{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=Ui(this.userKey,s.apiKey,i),this.fullPersistenceKey=Ui("persistence",s.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await ro(this.auth,{idToken:e}).catch(()=>{});return t?vt._fromGetAccountInfoResponse(this.auth,t,e):null}return vt._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new Lr(en(Xu),e,r);const s=(await Promise.all(t.map(async f=>{if(await f._isAvailable())return f}))).filter(f=>f);let i=s[0]||en(Xu);const a=Ui(r,e.config.apiKey,e.name);let c=null;for(const f of t)try{const d=await f._get(a);if(d){let g;if(typeof d=="string"){const E=await ro(e,{idToken:d}).catch(()=>{});if(!E)break;g=await vt._fromGetAccountInfoResponse(e,E,d)}else g=vt._fromJSON(e,d);f!==i&&(c=g),i=f;break}}catch{}const u=s.filter(f=>f._shouldAllowMigration);return!i._shouldAllowMigration||!u.length?new Lr(i,e,r):(i=u[0],c&&await i._set(a,c.toJSON()),await Promise.all(t.map(async f=>{if(f!==i)try{await f._remove(a)}catch{}})),new Lr(i,e,r))}}/**
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
 */function Yu(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Ld(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Od(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Ud(e))return"Blackberry";if(Bd(e))return"Webos";if(xd(e))return"Safari";if((e.includes("chrome/")||Md(e))&&!e.includes("edge/"))return"Chrome";if(Fd(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Od(n=nt()){return/firefox\//i.test(n)}function xd(n=nt()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Md(n=nt()){return/crios\//i.test(n)}function Ld(n=nt()){return/iemobile/i.test(n)}function Fd(n=nt()){return/android/i.test(n)}function Ud(n=nt()){return/blackberry/i.test(n)}function Bd(n=nt()){return/webos/i.test(n)}function Bc(n=nt()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function NT(n=nt()){var e;return Bc(n)&&!!((e=window.navigator)!=null&&e.standalone)}function OT(){return Ky()&&document.documentMode===10}function jd(n=nt()){return Bc(n)||Fd(n)||Bd(n)||Ud(n)||/windows phone/i.test(n)||Ld(n)}/**
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
 */function $d(n,e=[]){let t;switch(n){case"Browser":t=Yu(nt());break;case"Worker":t=`${Yu(nt())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Xr}/${r}`}/**
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
 */class xT{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=i=>new Promise((a,c)=>{try{const u=e(i);a(u)}catch(u){c(u)}});r.onAbort=t,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function MT(n,e={}){return Yr(n,"GET","/v2/passwordPolicy",Fc(n,e))}/**
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
 */const LT=6;class FT{constructor(e){var r;const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??LT,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=((r=e.allowedNonAlphanumericCharacters)==null?void 0:r.join(""))??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class UT{constructor(e,t,r,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Zu(this),this.idTokenSubscription=new Zu(this),this.beforeStateQueue=new xT(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Pd,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=en(t)),this._initializationPromise=this.queue(async()=>{var r,s,i;if(!this._deleted&&(this.persistenceManager=await Lr.create(this,e),(r=this._resolvePersistenceManagerAvailable)==null||r.call(this),!this._deleted)){if((s=this._popupRedirectResolver)!=null&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)==null?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await ro(this,{idToken:e}),r=await vt._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var i;if(It(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(c,c))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let r=t,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(i=this.redirectUser)==null?void 0:i._redirectEventId,c=r==null?void 0:r._redirectEventId,u=await this.tryRedirectSignIn(e);(!a||a===c)&&(u!=null&&u.user)&&(r=u.user,s=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(r)}catch(a){r=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return te(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await so(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=ET()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(It(this.app))return Promise.reject(or(this));const t=e?qt(e):null;return t&&te(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&te(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return It(this.app)?Promise.reject(or(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return It(this.app)?Promise.reject(or(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(en(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await MT(this),t=new FT(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new oi("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await kT(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)==null?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&en(e)||this._popupRedirectResolver;te(t,this,"argument-error"),this.redirectPersistenceManager=await Lr.create(this,[en(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)==null?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)==null?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=((t=this.currentUser)==null?void 0:t.uid)??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,s){if(this._deleted)return()=>{};const i=typeof t=="function"?t:t.next.bind(t);let a=!1;const c=this._isInitialized?Promise.resolve():this._initializationPromise;if(te(c,this,"internal-error"),c.then(()=>{a||i(this.currentUser)}),typeof t=="function"){const u=e.addObserver(t,r,s);return()=>{a=!0,u()}}else{const u=e.addObserver(t);return()=>{a=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return te(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=$d(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var s;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await((s=this.heartbeatServiceProvider.getImmediate({optional:!0}))==null?void 0:s.getHeartbeatsHeader());t&&(e["X-Firebase-Client"]=t);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){var t;if(It(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))==null?void 0:t.getToken());return e!=null&&e.error&&gT(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function ko(n){return qt(n)}class Zu{constructor(e){this.auth=e,this.observer=null,this.addObserver=tE(t=>this.observer=t)}get next(){return te(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let jc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function BT(n){jc=n}function jT(n){return jc.loadJS(n)}function $T(){return jc.gapiScript}function qT(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
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
 */function HT(n,e){const t=Oc(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),i=t.getOptions();if(cr(i,e??{}))return s;Ht(s,"already-initialized")}return t.initialize({options:e})}function zT(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(en);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function WT(n,e,t){const r=ko(n);te(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!!(t!=null&&t.disableWarnings),i=qd(e),{host:a,port:c}=KT(e),u=c===null?"":`:${c}`,f={url:`${i}//${a}${u}/`},d=Object.freeze({host:a,port:c,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){te(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),te(cr(f,r.config.emulator)&&cr(d,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=f,r.emulatorConfig=d,r.settings.appVerificationDisabledForTesting=!0,Jr(a)?(Ed(`${i}//${a}${u}`),Td("Auth",!0)):s||GT()}function qd(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function KT(n){const e=qd(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:eh(r.substr(i.length+1))}}else{const[i,a]=r.split(":");return{host:i,port:eh(a)}}}function eh(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function GT(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class Hd{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Zt("not implemented")}_getIdTokenResponse(e){return Zt("not implemented")}_linkToIdToken(e,t){return Zt("not implemented")}_getReauthenticationResolver(e){return Zt("not implemented")}}/**
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
 */async function Fr(n,e){return wT(n,"POST","/v1/accounts:signInWithIdp",Fc(n,e))}/**
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
 */const QT="http://localhost";class ur extends Hd{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new ur(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Ht("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s,...i}=t;if(!r||!s)return null;const a=new ur(r,s);return a.idToken=i.idToken||void 0,a.accessToken=i.accessToken||void 0,a.secret=i.secret,a.nonce=i.nonce,a.pendingToken=i.pendingToken||null,a}_getIdTokenResponse(e){const t=this.buildRequest();return Fr(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,Fr(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Fr(e,t)}buildRequest(){const e={requestUri:QT,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=ai(t)}return e}}/**
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
 */class $c{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class li extends $c{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class bn extends li{constructor(){super("facebook.com")}static credential(e){return ur._fromParams({providerId:bn.PROVIDER_ID,signInMethod:bn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return bn.credentialFromTaggedObject(e)}static credentialFromError(e){return bn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return bn.credential(e.oauthAccessToken)}catch{return null}}}bn.FACEBOOK_SIGN_IN_METHOD="facebook.com";bn.PROVIDER_ID="facebook.com";/**
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
 */class Yt extends li{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return ur._fromParams({providerId:Yt.PROVIDER_ID,signInMethod:Yt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Yt.credentialFromTaggedObject(e)}static credentialFromError(e){return Yt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return Yt.credential(t,r)}catch{return null}}}Yt.GOOGLE_SIGN_IN_METHOD="google.com";Yt.PROVIDER_ID="google.com";/**
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
 */class Sn extends li{constructor(){super("github.com")}static credential(e){return ur._fromParams({providerId:Sn.PROVIDER_ID,signInMethod:Sn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Sn.credentialFromTaggedObject(e)}static credentialFromError(e){return Sn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Sn.credential(e.oauthAccessToken)}catch{return null}}}Sn.GITHUB_SIGN_IN_METHOD="github.com";Sn.PROVIDER_ID="github.com";/**
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
 */class Rn extends li{constructor(){super("twitter.com")}static credential(e,t){return ur._fromParams({providerId:Rn.PROVIDER_ID,signInMethod:Rn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Rn.credentialFromTaggedObject(e)}static credentialFromError(e){return Rn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return Rn.credential(t,r)}catch{return null}}}Rn.TWITTER_SIGN_IN_METHOD="twitter.com";Rn.PROVIDER_ID="twitter.com";/**
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
 */class qr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,s=!1){const i=await vt._fromIdTokenResponse(e,r,s),a=th(r);return new qr({user:i,providerId:a,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const s=th(r);return new qr({user:e,providerId:s,_tokenResponse:r,operationType:t})}}function th(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */class io extends fn{constructor(e,t,r,s){super(t.code,t.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,io.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,s){return new io(e,t,r,s)}}function zd(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?io._fromErrorAndOperation(n,i,e,r):i})}async function JT(n,e,t=!1){const r=await Qs(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return qr._forOperation(n,"link",r)}/**
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
 */async function XT(n,e,t=!1){const{auth:r}=n;if(It(r.app))return Promise.reject(or(r));const s="reauthenticate";try{const i=await Qs(n,zd(r,s,e,n),t);te(i.idToken,r,"internal-error");const a=Uc(i.idToken);te(a,r,"internal-error");const{sub:c}=a;return te(n.uid===c,r,"user-mismatch"),qr._forOperation(n,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Ht(r,"user-mismatch"),i}}/**
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
 */async function YT(n,e,t=!1){if(It(n.app))return Promise.reject(or(n));const r="signIn",s=await zd(n,r,e),i=await qr._fromIdTokenResponse(n,r,s);return t||await n._updateCurrentUser(i.user),i}function ZT(n,e,t,r){return qt(n).onIdTokenChanged(e,t,r)}function eI(n,e,t){return qt(n).beforeAuthStateChanged(e,t)}const oo="__sak";/**
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
 */class Wd{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(oo,"1"),this.storage.removeItem(oo),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const tI=1e3,nI=10;class Kd extends Wd{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=jd(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),s=this.localCache[t];r!==s&&e(t,s,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((a,c,u)=>{this.notifyListeners(a,u)});return}const r=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const a=this.storage.getItem(r);!t&&this.localCache[r]===a||this.notifyListeners(r,a)},i=this.storage.getItem(r);OT()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,nI):s()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},tI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Kd.type="LOCAL";const rI=Kd;/**
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
 */class Gd extends Wd{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Gd.type="SESSION";const Qd=Gd;/**
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
 */function sI(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class No{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const r=new No(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:s,data:i}=t.data,a=this.handlersMap[s];if(!(a!=null&&a.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const c=Array.from(a).map(async f=>f(t.origin,i)),u=await sI(c);t.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:u})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}No.receivers=[];/**
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
 */function qc(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class iI{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,a;return new Promise((c,u)=>{const f=qc("",20);s.port1.start();const d=setTimeout(()=>{u(new Error("unsupported_event"))},r);a={messageChannel:s,onMessage(g){const E=g;if(E.data.eventId===f)switch(E.data.status){case"ack":clearTimeout(d),i=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),c(E.data.response);break;default:clearTimeout(d),clearTimeout(i),u(new Error("invalid_response"));break}}},this.handlers.add(a),s.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:f,data:t},[s.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
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
 */function Lt(){return window}function oI(n){Lt().location.href=n}/**
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
 */function Jd(){return typeof Lt().WorkerGlobalScope<"u"&&typeof Lt().importScripts=="function"}async function aI(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function cI(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)==null?void 0:n.controller)||null}function lI(){return Jd()?self:null}/**
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
 */const Xd="firebaseLocalStorageDb",uI=1,ao="firebaseLocalStorage",Yd="fbase_key";class ui{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Oo(n,e){return n.transaction([ao],e?"readwrite":"readonly").objectStore(ao)}function hI(){const n=indexedDB.deleteDatabase(Xd);return new ui(n).toPromise()}function Ja(){const n=indexedDB.open(Xd,uI);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(ao,{keyPath:Yd})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(ao)?e(r):(r.close(),await hI(),e(await Ja()))})})}async function nh(n,e,t){const r=Oo(n,!0).put({[Yd]:e,value:t});return new ui(r).toPromise()}async function fI(n,e){const t=Oo(n,!1).get(e),r=await new ui(t).toPromise();return r===void 0?null:r.value}function rh(n,e){const t=Oo(n,!0).delete(e);return new ui(t).toPromise()}const dI=800,pI=3;class Zd{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ja(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>pI)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Jd()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=No._getInstance(lI()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var t,r;if(this.activeServiceWorker=await aI(),!this.activeServiceWorker)return;this.sender=new iI(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&(t=e[0])!=null&&t.fulfilled&&(r=e[0])!=null&&r.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||cI()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ja();return await nh(e,oo,"1"),await rh(e,oo),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>nh(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>fI(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>rh(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Oo(s,!1).getAll();return new ui(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),dI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Zd.type="LOCAL";const gI=Zd;new ci(3e4,6e4);/**
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
 */function ep(n,e){return e?en(e):(te(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class Hc extends Hd{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Fr(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Fr(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Fr(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function mI(n){return YT(n.auth,new Hc(n),n.bypassAuthState)}function _I(n){const{auth:e,user:t}=n;return te(t,e,"internal-error"),XT(t,new Hc(n),n.bypassAuthState)}async function yI(n){const{auth:e,user:t}=n;return te(t,e,"internal-error"),JT(t,new Hc(n),n.bypassAuthState)}/**
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
 */class tp{constructor(e,t,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:s,tenantId:i,error:a,type:c}=e;if(a){this.reject(a);return}const u={auth:this.auth,requestUri:t,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(u))}catch(f){this.reject(f)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return mI;case"linkViaPopup":case"linkViaRedirect":return yI;case"reauthViaPopup":case"reauthViaRedirect":return _I;default:Ht(this.auth,"internal-error")}}resolve(e){cn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){cn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const EI=new ci(2e3,1e4);async function TI(n,e,t){if(It(n.app))return Promise.reject(Rt(n,"operation-not-supported-in-this-environment"));const r=ko(n);mT(n,e,$c);const s=ep(r,t);return new tr(r,"signInViaPopup",e,s).executeNotNull()}class tr extends tp{constructor(e,t,r,s,i){super(e,t,s,i),this.provider=r,this.authWindow=null,this.pollId=null,tr.currentPopupAction&&tr.currentPopupAction.cancel(),tr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return te(e,this.auth,"internal-error"),e}async onExecution(){cn(this.filter.length===1,"Popup operations only handle one event");const e=qc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Rt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)==null?void 0:e.associatedEvent)||null}cancel(){this.reject(Rt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,tr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if((r=(t=this.authWindow)==null?void 0:t.window)!=null&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Rt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,EI.get())};e()}}tr.currentPopupAction=null;/**
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
 */const II="pendingRedirect",Bi=new Map;class vI extends tp{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=Bi.get(this.auth._key());if(!e){try{const r=await wI(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}Bi.set(this.auth._key(),e)}return this.bypassAuthState||Bi.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function wI(n,e){const t=SI(e),r=bI(n);if(!await r._isAvailable())return!1;const s=await r._get(t)==="true";return await r._remove(t),s}function AI(n,e){Bi.set(n._key(),e)}function bI(n){return en(n._redirectPersistence)}function SI(n){return Ui(II,n.config.apiKey,n.name)}async function RI(n,e,t=!1){if(It(n.app))return Promise.reject(or(n));const r=ko(n),s=ep(r,e),a=await new vI(r,s,t).execute();return a&&!t&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}/**
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
 */const PI=10*60*1e3;class CI{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!VI(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!np(e)){const s=((r=e.error.code)==null?void 0:r.split("auth/")[1])||"internal-error";t.onError(Rt(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=PI&&this.cachedEventUids.clear(),this.cachedEventUids.has(sh(e))}saveEventToCache(e){this.cachedEventUids.add(sh(e)),this.lastProcessedEventTime=Date.now()}}function sh(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function np({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function VI(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return np(n);default:return!1}}/**
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
 */async function DI(n,e={}){return Yr(n,"GET","/v1/projects",e)}/**
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
 */const kI=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,NI=/^https?/;async function OI(n){if(n.config.emulator)return;const{authorizedDomains:e}=await DI(n);for(const t of e)try{if(xI(t))return}catch{}Ht(n,"unauthorized-domain")}function xI(n){const e=Ga(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const a=new URL(n);return a.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&a.hostname===r}if(!NI.test(t))return!1;if(kI.test(n))return r===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const MI=new ci(3e4,6e4);function ih(){const n=Lt().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function LI(n){return new Promise((e,t)=>{var s,i,a;function r(){ih(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{ih(),t(Rt(n,"network-request-failed"))},timeout:MI.get()})}if((i=(s=Lt().gapi)==null?void 0:s.iframes)!=null&&i.Iframe)e(gapi.iframes.getContext());else if((a=Lt().gapi)!=null&&a.load)r();else{const c=qT("iframefcb");return Lt()[c]=()=>{gapi.load?r():t(Rt(n,"network-request-failed"))},jT(`${$T()}?onload=${c}`).catch(u=>t(u))}}).catch(e=>{throw ji=null,e})}let ji=null;function FI(n){return ji=ji||LI(n),ji}/**
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
 */const UI=new ci(5e3,15e3),BI="__/auth/iframe",jI="emulator/auth/iframe",$I={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},qI=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function HI(n){const e=n.config;te(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?Lc(e,jI):`https://${n.config.authDomain}/${BI}`,r={apiKey:e.apiKey,appName:n.name,v:Xr},s=qI.get(n.config.apiHost);s&&(r.eid=s);const i=n._getFrameworks();return i.length&&(r.fw=i.join(",")),`${t}?${ai(r).slice(1)}`}async function zI(n){const e=await FI(n),t=Lt().gapi;return te(t,n,"internal-error"),e.open({where:document.body,url:HI(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:$I,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const a=Rt(n,"network-request-failed"),c=Lt().setTimeout(()=>{i(a)},UI.get());function u(){Lt().clearTimeout(c),s(r)}r.ping(u).then(u,()=>{i(a)})}))}/**
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
 */const WI={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},KI=500,GI=600,QI="_blank",JI="http://localhost";class oh{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function XI(n,e,t,r=KI,s=GI){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let c="";const u={...WI,width:r.toString(),height:s.toString(),top:i,left:a},f=nt().toLowerCase();t&&(c=Md(f)?QI:t),Od(f)&&(e=e||JI,u.scrollbars="yes");const d=Object.entries(u).reduce((E,[R,x])=>`${E}${R}=${x},`,"");if(NT(f)&&c!=="_self")return YI(e||"",c),new oh(null);const g=window.open(e||"",c,d);te(g,n,"popup-blocked");try{g.focus()}catch{}return new oh(g)}function YI(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
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
 */const ZI="__/auth/handler",ev="emulator/auth/handler",tv=encodeURIComponent("fac");async function ah(n,e,t,r,s,i){te(n.config.authDomain,n,"auth-domain-config-required"),te(n.config.apiKey,n,"invalid-api-key");const a={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:Xr,eventId:s};if(e instanceof $c){e.setDefaultLanguage(n.languageCode),a.providerId=e.providerId||"",eE(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,g]of Object.entries(i||{}))a[d]=g}if(e instanceof li){const d=e.getScopes().filter(g=>g!=="");d.length>0&&(a.scopes=d.join(","))}n.tenantId&&(a.tid=n.tenantId);const c=a;for(const d of Object.keys(c))c[d]===void 0&&delete c[d];const u=await n._getAppCheckToken(),f=u?`#${tv}=${encodeURIComponent(u)}`:"";return`${nv(n)}?${ai(c).slice(1)}${f}`}function nv({config:n}){return n.emulator?Lc(n,ev):`https://${n.authDomain}/${ZI}`}/**
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
 */const Sa="webStorageSupport";class rv{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Qd,this._completeRedirectFn=RI,this._overrideRedirectResult=AI}async _openPopup(e,t,r,s){var a;cn((a=this.eventManagers[e._key()])==null?void 0:a.manager,"_initialize() not called before _openPopup()");const i=await ah(e,t,r,Ga(),s);return XI(e,i,qc())}async _openRedirect(e,t,r,s){await this._originValidation(e);const i=await ah(e,t,r,Ga(),s);return oI(i),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:i}=this.eventManagers[t];return s?Promise.resolve(s):(cn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await zI(e),r=new CI(e);return t.register("authEvent",s=>(te(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Sa,{type:Sa},s=>{var a;const i=(a=s==null?void 0:s[0])==null?void 0:a[Sa];i!==void 0&&t(!!i),Ht(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=OI(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return jd()||xd()||Bc()}}const sv=rv;var ch="@firebase/auth",lh="1.11.1";/**
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
 */class iv{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)==null?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){te(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function ov(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function av(n){$r(new lr("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:a,authDomain:c}=r.options;te(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:a,authDomain:c,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:$d(n)},f=new UT(r,s,i,u);return zT(f,t),f},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),$r(new lr("auth-internal",e=>{const t=ko(e.getProvider("auth").getImmediate());return(r=>new iv(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Dn(ch,lh,ov(n)),Dn(ch,lh,"esm2020")}/**
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
 */const cv=5*60,lv=yd("authIdTokenMaxAge")||cv;let uh=null;const uv=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>lv)return;const s=t==null?void 0:t.token;uh!==s&&(uh=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function hv(n=Ad()){const e=Oc(n,"auth");if(e.isInitialized())return e.getImmediate();const t=HT(n,{popupRedirectResolver:sv,persistence:[gI,rI,Qd]}),r=yd("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const a=uv(i.toString());eI(t,a,()=>a(t.currentUser)),ZT(t,c=>a(c))}}const s=md("auth");return s&&WT(t,`http://${s}`),t}function fv(){var n;return((n=document.getElementsByTagName("head"))==null?void 0:n[0])??document}BT({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=s=>{const i=Rt("internal-error");i.customData=s,t(i)},r.type="text/javascript",r.charset="UTF-8",fv().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});av("Browser");var hh=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var kn,rp;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(v,m){function T(){}T.prototype=m.prototype,v.F=m.prototype,v.prototype=new T,v.prototype.constructor=v,v.D=function(w,I,S){for(var y=Array(arguments.length-2),Fe=2;Fe<arguments.length;Fe++)y[Fe-2]=arguments[Fe];return m.prototype[I].apply(w,y)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,t),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(v,m,T){T||(T=0);const w=Array(16);if(typeof m=="string")for(var I=0;I<16;++I)w[I]=m.charCodeAt(T++)|m.charCodeAt(T++)<<8|m.charCodeAt(T++)<<16|m.charCodeAt(T++)<<24;else for(I=0;I<16;++I)w[I]=m[T++]|m[T++]<<8|m[T++]<<16|m[T++]<<24;m=v.g[0],T=v.g[1],I=v.g[2];let S=v.g[3],y;y=m+(S^T&(I^S))+w[0]+3614090360&4294967295,m=T+(y<<7&4294967295|y>>>25),y=S+(I^m&(T^I))+w[1]+3905402710&4294967295,S=m+(y<<12&4294967295|y>>>20),y=I+(T^S&(m^T))+w[2]+606105819&4294967295,I=S+(y<<17&4294967295|y>>>15),y=T+(m^I&(S^m))+w[3]+3250441966&4294967295,T=I+(y<<22&4294967295|y>>>10),y=m+(S^T&(I^S))+w[4]+4118548399&4294967295,m=T+(y<<7&4294967295|y>>>25),y=S+(I^m&(T^I))+w[5]+1200080426&4294967295,S=m+(y<<12&4294967295|y>>>20),y=I+(T^S&(m^T))+w[6]+2821735955&4294967295,I=S+(y<<17&4294967295|y>>>15),y=T+(m^I&(S^m))+w[7]+4249261313&4294967295,T=I+(y<<22&4294967295|y>>>10),y=m+(S^T&(I^S))+w[8]+1770035416&4294967295,m=T+(y<<7&4294967295|y>>>25),y=S+(I^m&(T^I))+w[9]+2336552879&4294967295,S=m+(y<<12&4294967295|y>>>20),y=I+(T^S&(m^T))+w[10]+4294925233&4294967295,I=S+(y<<17&4294967295|y>>>15),y=T+(m^I&(S^m))+w[11]+2304563134&4294967295,T=I+(y<<22&4294967295|y>>>10),y=m+(S^T&(I^S))+w[12]+1804603682&4294967295,m=T+(y<<7&4294967295|y>>>25),y=S+(I^m&(T^I))+w[13]+4254626195&4294967295,S=m+(y<<12&4294967295|y>>>20),y=I+(T^S&(m^T))+w[14]+2792965006&4294967295,I=S+(y<<17&4294967295|y>>>15),y=T+(m^I&(S^m))+w[15]+1236535329&4294967295,T=I+(y<<22&4294967295|y>>>10),y=m+(I^S&(T^I))+w[1]+4129170786&4294967295,m=T+(y<<5&4294967295|y>>>27),y=S+(T^I&(m^T))+w[6]+3225465664&4294967295,S=m+(y<<9&4294967295|y>>>23),y=I+(m^T&(S^m))+w[11]+643717713&4294967295,I=S+(y<<14&4294967295|y>>>18),y=T+(S^m&(I^S))+w[0]+3921069994&4294967295,T=I+(y<<20&4294967295|y>>>12),y=m+(I^S&(T^I))+w[5]+3593408605&4294967295,m=T+(y<<5&4294967295|y>>>27),y=S+(T^I&(m^T))+w[10]+38016083&4294967295,S=m+(y<<9&4294967295|y>>>23),y=I+(m^T&(S^m))+w[15]+3634488961&4294967295,I=S+(y<<14&4294967295|y>>>18),y=T+(S^m&(I^S))+w[4]+3889429448&4294967295,T=I+(y<<20&4294967295|y>>>12),y=m+(I^S&(T^I))+w[9]+568446438&4294967295,m=T+(y<<5&4294967295|y>>>27),y=S+(T^I&(m^T))+w[14]+3275163606&4294967295,S=m+(y<<9&4294967295|y>>>23),y=I+(m^T&(S^m))+w[3]+4107603335&4294967295,I=S+(y<<14&4294967295|y>>>18),y=T+(S^m&(I^S))+w[8]+1163531501&4294967295,T=I+(y<<20&4294967295|y>>>12),y=m+(I^S&(T^I))+w[13]+2850285829&4294967295,m=T+(y<<5&4294967295|y>>>27),y=S+(T^I&(m^T))+w[2]+4243563512&4294967295,S=m+(y<<9&4294967295|y>>>23),y=I+(m^T&(S^m))+w[7]+1735328473&4294967295,I=S+(y<<14&4294967295|y>>>18),y=T+(S^m&(I^S))+w[12]+2368359562&4294967295,T=I+(y<<20&4294967295|y>>>12),y=m+(T^I^S)+w[5]+4294588738&4294967295,m=T+(y<<4&4294967295|y>>>28),y=S+(m^T^I)+w[8]+2272392833&4294967295,S=m+(y<<11&4294967295|y>>>21),y=I+(S^m^T)+w[11]+1839030562&4294967295,I=S+(y<<16&4294967295|y>>>16),y=T+(I^S^m)+w[14]+4259657740&4294967295,T=I+(y<<23&4294967295|y>>>9),y=m+(T^I^S)+w[1]+2763975236&4294967295,m=T+(y<<4&4294967295|y>>>28),y=S+(m^T^I)+w[4]+1272893353&4294967295,S=m+(y<<11&4294967295|y>>>21),y=I+(S^m^T)+w[7]+4139469664&4294967295,I=S+(y<<16&4294967295|y>>>16),y=T+(I^S^m)+w[10]+3200236656&4294967295,T=I+(y<<23&4294967295|y>>>9),y=m+(T^I^S)+w[13]+681279174&4294967295,m=T+(y<<4&4294967295|y>>>28),y=S+(m^T^I)+w[0]+3936430074&4294967295,S=m+(y<<11&4294967295|y>>>21),y=I+(S^m^T)+w[3]+3572445317&4294967295,I=S+(y<<16&4294967295|y>>>16),y=T+(I^S^m)+w[6]+76029189&4294967295,T=I+(y<<23&4294967295|y>>>9),y=m+(T^I^S)+w[9]+3654602809&4294967295,m=T+(y<<4&4294967295|y>>>28),y=S+(m^T^I)+w[12]+3873151461&4294967295,S=m+(y<<11&4294967295|y>>>21),y=I+(S^m^T)+w[15]+530742520&4294967295,I=S+(y<<16&4294967295|y>>>16),y=T+(I^S^m)+w[2]+3299628645&4294967295,T=I+(y<<23&4294967295|y>>>9),y=m+(I^(T|~S))+w[0]+4096336452&4294967295,m=T+(y<<6&4294967295|y>>>26),y=S+(T^(m|~I))+w[7]+1126891415&4294967295,S=m+(y<<10&4294967295|y>>>22),y=I+(m^(S|~T))+w[14]+2878612391&4294967295,I=S+(y<<15&4294967295|y>>>17),y=T+(S^(I|~m))+w[5]+4237533241&4294967295,T=I+(y<<21&4294967295|y>>>11),y=m+(I^(T|~S))+w[12]+1700485571&4294967295,m=T+(y<<6&4294967295|y>>>26),y=S+(T^(m|~I))+w[3]+2399980690&4294967295,S=m+(y<<10&4294967295|y>>>22),y=I+(m^(S|~T))+w[10]+4293915773&4294967295,I=S+(y<<15&4294967295|y>>>17),y=T+(S^(I|~m))+w[1]+2240044497&4294967295,T=I+(y<<21&4294967295|y>>>11),y=m+(I^(T|~S))+w[8]+1873313359&4294967295,m=T+(y<<6&4294967295|y>>>26),y=S+(T^(m|~I))+w[15]+4264355552&4294967295,S=m+(y<<10&4294967295|y>>>22),y=I+(m^(S|~T))+w[6]+2734768916&4294967295,I=S+(y<<15&4294967295|y>>>17),y=T+(S^(I|~m))+w[13]+1309151649&4294967295,T=I+(y<<21&4294967295|y>>>11),y=m+(I^(T|~S))+w[4]+4149444226&4294967295,m=T+(y<<6&4294967295|y>>>26),y=S+(T^(m|~I))+w[11]+3174756917&4294967295,S=m+(y<<10&4294967295|y>>>22),y=I+(m^(S|~T))+w[2]+718787259&4294967295,I=S+(y<<15&4294967295|y>>>17),y=T+(S^(I|~m))+w[9]+3951481745&4294967295,v.g[0]=v.g[0]+m&4294967295,v.g[1]=v.g[1]+(I+(y<<21&4294967295|y>>>11))&4294967295,v.g[2]=v.g[2]+I&4294967295,v.g[3]=v.g[3]+S&4294967295}r.prototype.v=function(v,m){m===void 0&&(m=v.length);const T=m-this.blockSize,w=this.C;let I=this.h,S=0;for(;S<m;){if(I==0)for(;S<=T;)s(this,v,S),S+=this.blockSize;if(typeof v=="string"){for(;S<m;)if(w[I++]=v.charCodeAt(S++),I==this.blockSize){s(this,w),I=0;break}}else for(;S<m;)if(w[I++]=v[S++],I==this.blockSize){s(this,w),I=0;break}}this.h=I,this.o+=m},r.prototype.A=function(){var v=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);v[0]=128;for(var m=1;m<v.length-8;++m)v[m]=0;m=this.o*8;for(var T=v.length-8;T<v.length;++T)v[T]=m&255,m/=256;for(this.v(v),v=Array(16),m=0,T=0;T<4;++T)for(let w=0;w<32;w+=8)v[m++]=this.g[T]>>>w&255;return v};function i(v,m){var T=c;return Object.prototype.hasOwnProperty.call(T,v)?T[v]:T[v]=m(v)}function a(v,m){this.h=m;const T=[];let w=!0;for(let I=v.length-1;I>=0;I--){const S=v[I]|0;w&&S==m||(T[I]=S,w=!1)}this.g=T}var c={};function u(v){return-128<=v&&v<128?i(v,function(m){return new a([m|0],m<0?-1:0)}):new a([v|0],v<0?-1:0)}function f(v){if(isNaN(v)||!isFinite(v))return g;if(v<0)return B(f(-v));const m=[];let T=1;for(let w=0;v>=T;w++)m[w]=v/T|0,T*=4294967296;return new a(m,0)}function d(v,m){if(v.length==0)throw Error("number format error: empty string");if(m=m||10,m<2||36<m)throw Error("radix out of range: "+m);if(v.charAt(0)=="-")return B(d(v.substring(1),m));if(v.indexOf("-")>=0)throw Error('number format error: interior "-" character');const T=f(Math.pow(m,8));let w=g;for(let S=0;S<v.length;S+=8){var I=Math.min(8,v.length-S);const y=parseInt(v.substring(S,S+I),m);I<8?(I=f(Math.pow(m,I)),w=w.j(I).add(f(y))):(w=w.j(T),w=w.add(f(y)))}return w}var g=u(0),E=u(1),R=u(16777216);n=a.prototype,n.m=function(){if(U(this))return-B(this).m();let v=0,m=1;for(let T=0;T<this.g.length;T++){const w=this.i(T);v+=(w>=0?w:4294967296+w)*m,m*=4294967296}return v},n.toString=function(v){if(v=v||10,v<2||36<v)throw Error("radix out of range: "+v);if(x(this))return"0";if(U(this))return"-"+B(this).toString(v);const m=f(Math.pow(v,6));var T=this;let w="";for(;;){const I=W(T,m).g;T=z(T,I.j(m));let S=((T.g.length>0?T.g[0]:T.h)>>>0).toString(v);if(T=I,x(T))return S+w;for(;S.length<6;)S="0"+S;w=S+w}},n.i=function(v){return v<0?0:v<this.g.length?this.g[v]:this.h};function x(v){if(v.h!=0)return!1;for(let m=0;m<v.g.length;m++)if(v.g[m]!=0)return!1;return!0}function U(v){return v.h==-1}n.l=function(v){return v=z(this,v),U(v)?-1:x(v)?0:1};function B(v){const m=v.g.length,T=[];for(let w=0;w<m;w++)T[w]=~v.g[w];return new a(T,~v.h).add(E)}n.abs=function(){return U(this)?B(this):this},n.add=function(v){const m=Math.max(this.g.length,v.g.length),T=[];let w=0;for(let I=0;I<=m;I++){let S=w+(this.i(I)&65535)+(v.i(I)&65535),y=(S>>>16)+(this.i(I)>>>16)+(v.i(I)>>>16);w=y>>>16,S&=65535,y&=65535,T[I]=y<<16|S}return new a(T,T[T.length-1]&-2147483648?-1:0)};function z(v,m){return v.add(B(m))}n.j=function(v){if(x(this)||x(v))return g;if(U(this))return U(v)?B(this).j(B(v)):B(B(this).j(v));if(U(v))return B(this.j(B(v)));if(this.l(R)<0&&v.l(R)<0)return f(this.m()*v.m());const m=this.g.length+v.g.length,T=[];for(var w=0;w<2*m;w++)T[w]=0;for(w=0;w<this.g.length;w++)for(let I=0;I<v.g.length;I++){const S=this.i(w)>>>16,y=this.i(w)&65535,Fe=v.i(I)>>>16,yt=v.i(I)&65535;T[2*w+2*I]+=y*yt,K(T,2*w+2*I),T[2*w+2*I+1]+=S*yt,K(T,2*w+2*I+1),T[2*w+2*I+1]+=y*Fe,K(T,2*w+2*I+1),T[2*w+2*I+2]+=S*Fe,K(T,2*w+2*I+2)}for(v=0;v<m;v++)T[v]=T[2*v+1]<<16|T[2*v];for(v=m;v<2*m;v++)T[v]=0;return new a(T,0)};function K(v,m){for(;(v[m]&65535)!=v[m];)v[m+1]+=v[m]>>>16,v[m]&=65535,m++}function J(v,m){this.g=v,this.h=m}function W(v,m){if(x(m))throw Error("division by zero");if(x(v))return new J(g,g);if(U(v))return m=W(B(v),m),new J(B(m.g),B(m.h));if(U(m))return m=W(v,B(m)),new J(B(m.g),m.h);if(v.g.length>30){if(U(v)||U(m))throw Error("slowDivide_ only works with positive integers.");for(var T=E,w=m;w.l(v)<=0;)T=fe(T),w=fe(w);var I=Ee(T,1),S=Ee(w,1);for(w=Ee(w,2),T=Ee(T,2);!x(w);){var y=S.add(w);y.l(v)<=0&&(I=I.add(T),S=y),w=Ee(w,1),T=Ee(T,1)}return m=z(v,I.j(m)),new J(I,m)}for(I=g;v.l(m)>=0;){for(T=Math.max(1,Math.floor(v.m()/m.m())),w=Math.ceil(Math.log(T)/Math.LN2),w=w<=48?1:Math.pow(2,w-48),S=f(T),y=S.j(m);U(y)||y.l(v)>0;)T-=w,S=f(T),y=S.j(m);x(S)&&(S=E),I=I.add(S),v=z(v,y)}return new J(I,v)}n.B=function(v){return W(this,v).h},n.and=function(v){const m=Math.max(this.g.length,v.g.length),T=[];for(let w=0;w<m;w++)T[w]=this.i(w)&v.i(w);return new a(T,this.h&v.h)},n.or=function(v){const m=Math.max(this.g.length,v.g.length),T=[];for(let w=0;w<m;w++)T[w]=this.i(w)|v.i(w);return new a(T,this.h|v.h)},n.xor=function(v){const m=Math.max(this.g.length,v.g.length),T=[];for(let w=0;w<m;w++)T[w]=this.i(w)^v.i(w);return new a(T,this.h^v.h)};function fe(v){const m=v.g.length+1,T=[];for(let w=0;w<m;w++)T[w]=v.i(w)<<1|v.i(w-1)>>>31;return new a(T,v.h)}function Ee(v,m){const T=m>>5;m%=32;const w=v.g.length-T,I=[];for(let S=0;S<w;S++)I[S]=m>0?v.i(S+T)>>>m|v.i(S+T+1)<<32-m:v.i(S+T);return new a(I,v.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,rp=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.B,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=f,a.fromString=d,kn=a}).apply(typeof hh<"u"?hh:typeof self<"u"?self:typeof window<"u"?window:{});var Vi=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var sp,bs,ip,$i,Xa,op,ap,cp;(function(){var n,e=Object.defineProperty;function t(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof Vi=="object"&&Vi];for(var l=0;l<o.length;++l){var h=o[l];if(h&&h.Math==Math)return h}throw Error("Cannot find global object")}var r=t(this);function s(o,l){if(l)e:{var h=r;o=o.split(".");for(var p=0;p<o.length-1;p++){var b=o[p];if(!(b in h))break e;h=h[b]}o=o[o.length-1],p=h[o],l=l(p),l!=p&&l!=null&&e(h,o,{configurable:!0,writable:!0,value:l})}}s("Symbol.dispose",function(o){return o||Symbol("Symbol.dispose")}),s("Array.prototype.values",function(o){return o||function(){return this[Symbol.iterator]()}}),s("Object.entries",function(o){return o||function(l){var h=[],p;for(p in l)Object.prototype.hasOwnProperty.call(l,p)&&h.push([p,l[p]]);return h}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var i=i||{},a=this||self;function c(o){var l=typeof o;return l=="object"&&o!=null||l=="function"}function u(o,l,h){return o.call.apply(o.bind,arguments)}function f(o,l,h){return f=u,f.apply(null,arguments)}function d(o,l){var h=Array.prototype.slice.call(arguments,1);return function(){var p=h.slice();return p.push.apply(p,arguments),o.apply(this,p)}}function g(o,l){function h(){}h.prototype=l.prototype,o.Z=l.prototype,o.prototype=new h,o.prototype.constructor=o,o.Ob=function(p,b,P){for(var j=Array(arguments.length-2),ie=2;ie<arguments.length;ie++)j[ie-2]=arguments[ie];return l.prototype[b].apply(p,j)}}var E=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?o=>o&&AsyncContext.Snapshot.wrap(o):o=>o;function R(o){const l=o.length;if(l>0){const h=Array(l);for(let p=0;p<l;p++)h[p]=o[p];return h}return[]}function x(o,l){for(let p=1;p<arguments.length;p++){const b=arguments[p];var h=typeof b;if(h=h!="object"?h:b?Array.isArray(b)?"array":h:"null",h=="array"||h=="object"&&typeof b.length=="number"){h=o.length||0;const P=b.length||0;o.length=h+P;for(let j=0;j<P;j++)o[h+j]=b[j]}else o.push(b)}}class U{constructor(l,h){this.i=l,this.j=h,this.h=0,this.g=null}get(){let l;return this.h>0?(this.h--,l=this.g,this.g=l.next,l.next=null):l=this.i(),l}}function B(o){a.setTimeout(()=>{throw o},0)}function z(){var o=v;let l=null;return o.g&&(l=o.g,o.g=o.g.next,o.g||(o.h=null),l.next=null),l}class K{constructor(){this.h=this.g=null}add(l,h){const p=J.get();p.set(l,h),this.h?this.h.next=p:this.g=p,this.h=p}}var J=new U(()=>new W,o=>o.reset());class W{constructor(){this.next=this.g=this.h=null}set(l,h){this.h=l,this.g=h,this.next=null}reset(){this.next=this.g=this.h=null}}let fe,Ee=!1,v=new K,m=()=>{const o=Promise.resolve(void 0);fe=()=>{o.then(T)}};function T(){for(var o;o=z();){try{o.h.call(o.g)}catch(h){B(h)}var l=J;l.j(o),l.h<100&&(l.h++,o.next=l.g,l.g=o)}Ee=!1}function w(){this.u=this.u,this.C=this.C}w.prototype.u=!1,w.prototype.dispose=function(){this.u||(this.u=!0,this.N())},w.prototype[Symbol.dispose]=function(){this.dispose()},w.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function I(o,l){this.type=o,this.g=this.target=l,this.defaultPrevented=!1}I.prototype.h=function(){this.defaultPrevented=!0};var S=function(){if(!a.addEventListener||!Object.defineProperty)return!1;var o=!1,l=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const h=()=>{};a.addEventListener("test",h,l),a.removeEventListener("test",h,l)}catch{}return o}();function y(o){return/^[\s\xa0]*$/.test(o)}function Fe(o,l){I.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o&&this.init(o,l)}g(Fe,I),Fe.prototype.init=function(o,l){const h=this.type=o.type,p=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;this.target=o.target||o.srcElement,this.g=l,l=o.relatedTarget,l||(h=="mouseover"?l=o.fromElement:h=="mouseout"&&(l=o.toElement)),this.relatedTarget=l,p?(this.clientX=p.clientX!==void 0?p.clientX:p.pageX,this.clientY=p.clientY!==void 0?p.clientY:p.pageY,this.screenX=p.screenX||0,this.screenY=p.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=o.pointerType,this.state=o.state,this.i=o,o.defaultPrevented&&Fe.Z.h.call(this)},Fe.prototype.h=function(){Fe.Z.h.call(this);const o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var yt="closure_listenable_"+(Math.random()*1e6|0),He=0;function Ae(o,l,h,p,b){this.listener=o,this.proxy=null,this.src=l,this.type=h,this.capture=!!p,this.ha=b,this.key=++He,this.da=this.fa=!1}function pe(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function gt(o,l,h){for(const p in o)l.call(h,o[p],p,o)}function yr(o,l){for(const h in o)l.call(void 0,o[h],h,o)}function Pt(o){const l={};for(const h in o)l[h]=o[h];return l}const ht="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function rs(o,l){let h,p;for(let b=1;b<arguments.length;b++){p=arguments[b];for(h in p)o[h]=p[h];for(let P=0;P<ht.length;P++)h=ht[P],Object.prototype.hasOwnProperty.call(p,h)&&(o[h]=p[h])}}function Er(o){this.src=o,this.g={},this.h=0}Er.prototype.add=function(o,l,h,p,b){const P=o.toString();o=this.g[P],o||(o=this.g[P]=[],this.h++);const j=Kt(o,l,p,b);return j>-1?(l=o[j],h||(l.fa=!1)):(l=new Ae(l,this.src,P,!!p,b),l.fa=h,o.push(l)),l};function ss(o,l){const h=l.type;if(h in o.g){var p=o.g[h],b=Array.prototype.indexOf.call(p,l,void 0),P;(P=b>=0)&&Array.prototype.splice.call(p,b,1),P&&(pe(l),o.g[h].length==0&&(delete o.g[h],o.h--))}}function Kt(o,l,h,p){for(let b=0;b<o.length;++b){const P=o[b];if(!P.da&&P.listener==l&&P.capture==!!h&&P.ha==p)return b}return-1}var dn="closure_lm_"+(Math.random()*1e6|0),Hn={};function is(o,l,h,p,b){if(p&&p.once)return Tr(o,l,h,p,b);if(Array.isArray(l)){for(let P=0;P<l.length;P++)is(o,l[P],h,p,b);return null}return h=$(h),o&&o[yt]?o.J(l,h,c(p)?!!p.capture:!!p,b):Gt(o,l,h,!1,p,b)}function Gt(o,l,h,p,b,P){if(!l)throw Error("Invalid event type");const j=c(b)?!!b.capture:!!b;let ie=D(o);if(ie||(o[dn]=ie=new Er(o)),h=ie.add(l,h,p,j,P),h.proxy)return h;if(p=os(),h.proxy=p,p.src=o,p.listener=h,o.addEventListener)S||(b=j),b===void 0&&(b=!1),o.addEventListener(l.toString(),p,b);else if(o.attachEvent)o.attachEvent(C(l.toString()),p);else if(o.addListener&&o.removeListener)o.addListener(p);else throw Error("addEventListener and attachEvent are unavailable.");return h}function os(){function o(h){return l.call(o.src,o.listener,h)}const l=F;return o}function Tr(o,l,h,p,b){if(Array.isArray(l)){for(let P=0;P<l.length;P++)Tr(o,l[P],h,p,b);return null}return h=$(h),o&&o[yt]?o.K(l,h,c(p)?!!p.capture:!!p,b):Gt(o,l,h,!0,p,b)}function _(o,l,h,p,b){if(Array.isArray(l))for(var P=0;P<l.length;P++)_(o,l[P],h,p,b);else p=c(p)?!!p.capture:!!p,h=$(h),o&&o[yt]?(o=o.i,P=String(l).toString(),P in o.g&&(l=o.g[P],h=Kt(l,h,p,b),h>-1&&(pe(l[h]),Array.prototype.splice.call(l,h,1),l.length==0&&(delete o.g[P],o.h--)))):o&&(o=D(o))&&(l=o.g[l.toString()],o=-1,l&&(o=Kt(l,h,p,b)),(h=o>-1?l[o]:null)&&A(h))}function A(o){if(typeof o!="number"&&o&&!o.da){var l=o.src;if(l&&l[yt])ss(l.i,o);else{var h=o.type,p=o.proxy;l.removeEventListener?l.removeEventListener(h,p,o.capture):l.detachEvent?l.detachEvent(C(h),p):l.addListener&&l.removeListener&&l.removeListener(p),(h=D(l))?(ss(h,o),h.h==0&&(h.src=null,l[dn]=null)):pe(o)}}}function C(o){return o in Hn?Hn[o]:Hn[o]="on"+o}function F(o,l){if(o.da)o=!0;else{l=new Fe(l,this);const h=o.listener,p=o.ha||o.src;o.fa&&A(o),o=h.call(p,l)}return o}function D(o){return o=o[dn],o instanceof Er?o:null}var k="__closure_events_fn_"+(Math.random()*1e9>>>0);function $(o){return typeof o=="function"?o:(o[k]||(o[k]=function(l){return o.handleEvent(l)}),o[k])}function L(){w.call(this),this.i=new Er(this),this.M=this,this.G=null}g(L,w),L.prototype[yt]=!0,L.prototype.removeEventListener=function(o,l,h,p){_(this,o,l,h,p)};function M(o,l){var h,p=o.G;if(p)for(h=[];p;p=p.G)h.push(p);if(o=o.M,p=l.type||l,typeof l=="string")l=new I(l,o);else if(l instanceof I)l.target=l.target||o;else{var b=l;l=new I(p,o),rs(l,b)}b=!0;let P,j;if(h)for(j=h.length-1;j>=0;j--)P=l.g=h[j],b=N(P,p,!0,l)&&b;if(P=l.g=o,b=N(P,p,!0,l)&&b,b=N(P,p,!1,l)&&b,h)for(j=0;j<h.length;j++)P=l.g=h[j],b=N(P,p,!1,l)&&b}L.prototype.N=function(){if(L.Z.N.call(this),this.i){var o=this.i;for(const l in o.g){const h=o.g[l];for(let p=0;p<h.length;p++)pe(h[p]);delete o.g[l],o.h--}}this.G=null},L.prototype.J=function(o,l,h,p){return this.i.add(String(o),l,!1,h,p)},L.prototype.K=function(o,l,h,p){return this.i.add(String(o),l,!0,h,p)};function N(o,l,h,p){if(l=o.i.g[String(l)],!l)return!0;l=l.concat();let b=!0;for(let P=0;P<l.length;++P){const j=l[P];if(j&&!j.da&&j.capture==h){const ie=j.listener,xe=j.ha||j.src;j.fa&&ss(o.i,j),b=ie.call(xe,p)!==!1&&b}}return b&&!p.defaultPrevented}function X(o,l){if(typeof o!="function")if(o&&typeof o.handleEvent=="function")o=f(o.handleEvent,o);else throw Error("Invalid listener argument");return Number(l)>2147483647?-1:a.setTimeout(o,l||0)}function q(o){o.g=X(()=>{o.g=null,o.i&&(o.i=!1,q(o))},o.l);const l=o.h;o.h=null,o.m.apply(null,l)}class G extends w{constructor(l,h){super(),this.m=l,this.l=h,this.h=null,this.i=!1,this.g=null}j(l){this.h=arguments,this.g?this.i=!0:q(this)}N(){super.N(),this.g&&(a.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Z(o){w.call(this),this.h=o,this.g={}}g(Z,w);var ae=[];function _e(o){gt(o.g,function(l,h){this.g.hasOwnProperty(h)&&A(l)},o),o.g={}}Z.prototype.N=function(){Z.Z.N.call(this),_e(this)},Z.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var de=a.JSON.stringify,Je=a.JSON.parse,Ue=class{stringify(o){return a.JSON.stringify(o,void 0)}parse(o){return a.JSON.parse(o,void 0)}};function ct(){}function Xe(){}var Et={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function Ir(){I.call(this,"d")}g(Ir,I);function ze(){I.call(this,"c")}g(ze,I);var Be={},as=null;function zn(){return as=as||new L}Be.Ia="serverreachability";function vl(o){I.call(this,Be.Ia,o)}g(vl,I);function cs(o){const l=zn();M(l,new vl(l))}Be.STAT_EVENT="statevent";function wl(o,l){I.call(this,Be.STAT_EVENT,o),this.stat=l}g(wl,I);function rt(o){const l=zn();M(l,new wl(l,o))}Be.Ja="timingevent";function Al(o,l){I.call(this,Be.Ja,o),this.size=l}g(Al,I);function ls(o,l){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return a.setTimeout(function(){o()},l)}function us(){this.g=!0}us.prototype.ua=function(){this.g=!1};function kg(o,l,h,p,b,P){o.info(function(){if(o.g)if(P){var j="",ie=P.split("&");for(let Ie=0;Ie<ie.length;Ie++){var xe=ie[Ie].split("=");if(xe.length>1){const je=xe[0];xe=xe[1];const Vt=je.split("_");j=Vt.length>=2&&Vt[1]=="type"?j+(je+"="+xe+"&"):j+(je+"=redacted&")}}}else j=null;else j=P;return"XMLHTTP REQ ("+p+") [attempt "+b+"]: "+l+`
`+h+`
`+j})}function Ng(o,l,h,p,b,P,j){o.info(function(){return"XMLHTTP RESP ("+p+") [ attempt "+b+"]: "+l+`
`+h+`
`+P+" "+j})}function vr(o,l,h,p){o.info(function(){return"XMLHTTP TEXT ("+l+"): "+xg(o,h)+(p?" "+p:"")})}function Og(o,l){o.info(function(){return"TIMEOUT: "+l})}us.prototype.info=function(){};function xg(o,l){if(!o.g)return l;if(!l)return null;try{const P=JSON.parse(l);if(P){for(o=0;o<P.length;o++)if(Array.isArray(P[o])){var h=P[o];if(!(h.length<2)){var p=h[1];if(Array.isArray(p)&&!(p.length<1)){var b=p[0];if(b!="noop"&&b!="stop"&&b!="close")for(let j=1;j<p.length;j++)p[j]=""}}}}return de(P)}catch{return l}}var mi={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},bl={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},Sl;function Ko(){}g(Ko,ct),Ko.prototype.g=function(){return new XMLHttpRequest},Sl=new Ko;function hs(o){return encodeURIComponent(String(o))}function Mg(o){var l=1;o=o.split(":");const h=[];for(;l>0&&o.length;)h.push(o.shift()),l--;return o.length&&h.push(o.join(":")),h}function pn(o,l,h,p){this.j=o,this.i=l,this.l=h,this.S=p||1,this.V=new Z(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new Rl}function Rl(){this.i=null,this.g="",this.h=!1}var Pl={},Go={};function Qo(o,l,h){o.M=1,o.A=yi(Ct(l)),o.u=h,o.R=!0,Cl(o,null)}function Cl(o,l){o.F=Date.now(),_i(o),o.B=Ct(o.A);var h=o.B,p=o.S;Array.isArray(p)||(p=[String(p)]),$l(h.i,"t",p),o.C=0,h=o.j.L,o.h=new Rl,o.g=ou(o.j,h?l:null,!o.u),o.P>0&&(o.O=new G(f(o.Y,o,o.g),o.P)),l=o.V,h=o.g,p=o.ba;var b="readystatechange";Array.isArray(b)||(b&&(ae[0]=b.toString()),b=ae);for(let P=0;P<b.length;P++){const j=is(h,b[P],p||l.handleEvent,!1,l.h||l);if(!j)break;l.g[j.key]=j}l=o.J?Pt(o.J):{},o.u?(o.v||(o.v="POST"),l["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.B,o.v,o.u,l)):(o.v="GET",o.g.ea(o.B,o.v,null,l)),cs(),kg(o.i,o.v,o.B,o.l,o.S,o.u)}pn.prototype.ba=function(o){o=o.target;const l=this.O;l&&_n(o)==3?l.j():this.Y(o)},pn.prototype.Y=function(o){try{if(o==this.g)e:{const ie=_n(this.g),xe=this.g.ya(),Ie=this.g.ca();if(!(ie<3)&&(ie!=3||this.g&&(this.h.h||this.g.la()||Ql(this.g)))){this.K||ie!=4||xe==7||(xe==8||Ie<=0?cs(3):cs(2)),Jo(this);var l=this.g.ca();this.X=l;var h=Lg(this);if(this.o=l==200,Ng(this.i,this.v,this.B,this.l,this.S,ie,l),this.o){if(this.U&&!this.L){t:{if(this.g){var p,b=this.g;if((p=b.g?b.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!y(p)){var P=p;break t}}P=null}if(o=P)vr(this.i,this.l,o,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Xo(this,o);else{this.o=!1,this.m=3,rt(12),Wn(this),fs(this);break e}}if(this.R){o=!0;let je;for(;!this.K&&this.C<h.length;)if(je=Fg(this,h),je==Go){ie==4&&(this.m=4,rt(14),o=!1),vr(this.i,this.l,null,"[Incomplete Response]");break}else if(je==Pl){this.m=4,rt(15),vr(this.i,this.l,h,"[Invalid Chunk]"),o=!1;break}else vr(this.i,this.l,je,null),Xo(this,je);if(Vl(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),ie!=4||h.length!=0||this.h.h||(this.m=1,rt(16),o=!1),this.o=this.o&&o,!o)vr(this.i,this.l,h,"[Invalid Chunked Response]"),Wn(this),fs(this);else if(h.length>0&&!this.W){this.W=!0;var j=this.j;j.g==this&&j.aa&&!j.P&&(j.j.info("Great, no buffering proxy detected. Bytes received: "+h.length),ia(j),j.P=!0,rt(11))}}else vr(this.i,this.l,h,null),Xo(this,h);ie==4&&Wn(this),this.o&&!this.K&&(ie==4?nu(this.j,this):(this.o=!1,_i(this)))}else Yg(this.g),l==400&&h.indexOf("Unknown SID")>0?(this.m=3,rt(12)):(this.m=0,rt(13)),Wn(this),fs(this)}}}catch{}finally{}};function Lg(o){if(!Vl(o))return o.g.la();const l=Ql(o.g);if(l==="")return"";let h="";const p=l.length,b=_n(o.g)==4;if(!o.h.i){if(typeof TextDecoder>"u")return Wn(o),fs(o),"";o.h.i=new a.TextDecoder}for(let P=0;P<p;P++)o.h.h=!0,h+=o.h.i.decode(l[P],{stream:!(b&&P==p-1)});return l.length=0,o.h.g+=h,o.C=0,o.h.g}function Vl(o){return o.g?o.v=="GET"&&o.M!=2&&o.j.Aa:!1}function Fg(o,l){var h=o.C,p=l.indexOf(`
`,h);return p==-1?Go:(h=Number(l.substring(h,p)),isNaN(h)?Pl:(p+=1,p+h>l.length?Go:(l=l.slice(p,p+h),o.C=p+h,l)))}pn.prototype.cancel=function(){this.K=!0,Wn(this)};function _i(o){o.T=Date.now()+o.H,Dl(o,o.H)}function Dl(o,l){if(o.D!=null)throw Error("WatchDog timer not null");o.D=ls(f(o.aa,o),l)}function Jo(o){o.D&&(a.clearTimeout(o.D),o.D=null)}pn.prototype.aa=function(){this.D=null;const o=Date.now();o-this.T>=0?(Og(this.i,this.B),this.M!=2&&(cs(),rt(17)),Wn(this),this.m=2,fs(this)):Dl(this,this.T-o)};function fs(o){o.j.I==0||o.K||nu(o.j,o)}function Wn(o){Jo(o);var l=o.O;l&&typeof l.dispose=="function"&&l.dispose(),o.O=null,_e(o.V),o.g&&(l=o.g,o.g=null,l.abort(),l.dispose())}function Xo(o,l){try{var h=o.j;if(h.I!=0&&(h.g==o||Yo(h.h,o))){if(!o.L&&Yo(h.h,o)&&h.I==3){try{var p=h.Ba.g.parse(l)}catch{p=null}if(Array.isArray(p)&&p.length==3){var b=p;if(b[0]==0){e:if(!h.v){if(h.g)if(h.g.F+3e3<o.F)wi(h),Ii(h);else break e;sa(h),rt(18)}}else h.xa=b[1],0<h.xa-h.K&&b[2]<37500&&h.F&&h.A==0&&!h.C&&(h.C=ls(f(h.Va,h),6e3));Ol(h.h)<=1&&h.ta&&(h.ta=void 0)}else Gn(h,11)}else if((o.L||h.g==o)&&wi(h),!y(l))for(b=h.Ba.g.parse(l),l=0;l<b.length;l++){let Ie=b[l];const je=Ie[0];if(!(je<=h.K))if(h.K=je,Ie=Ie[1],h.I==2)if(Ie[0]=="c"){h.M=Ie[1],h.ba=Ie[2];const Vt=Ie[3];Vt!=null&&(h.ka=Vt,h.j.info("VER="+h.ka));const Qn=Ie[4];Qn!=null&&(h.za=Qn,h.j.info("SVER="+h.za));const yn=Ie[5];yn!=null&&typeof yn=="number"&&yn>0&&(p=1.5*yn,h.O=p,h.j.info("backChannelRequestTimeoutMs_="+p)),p=h;const En=o.g;if(En){const bi=En.g?En.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(bi){var P=p.h;P.g||bi.indexOf("spdy")==-1&&bi.indexOf("quic")==-1&&bi.indexOf("h2")==-1||(P.j=P.l,P.g=new Set,P.h&&(Zo(P,P.h),P.h=null))}if(p.G){const oa=En.g?En.g.getResponseHeader("X-HTTP-Session-Id"):null;oa&&(p.wa=oa,be(p.J,p.G,oa))}}h.I=3,h.l&&h.l.ra(),h.aa&&(h.T=Date.now()-o.F,h.j.info("Handshake RTT: "+h.T+"ms")),p=h;var j=o;if(p.na=iu(p,p.L?p.ba:null,p.W),j.L){xl(p.h,j);var ie=j,xe=p.O;xe&&(ie.H=xe),ie.D&&(Jo(ie),_i(ie)),p.g=j}else eu(p);h.i.length>0&&vi(h)}else Ie[0]!="stop"&&Ie[0]!="close"||Gn(h,7);else h.I==3&&(Ie[0]=="stop"||Ie[0]=="close"?Ie[0]=="stop"?Gn(h,7):ra(h):Ie[0]!="noop"&&h.l&&h.l.qa(Ie),h.A=0)}}cs(4)}catch{}}var Ug=class{constructor(o,l){this.g=o,this.map=l}};function kl(o){this.l=o||10,a.PerformanceNavigationTiming?(o=a.performance.getEntriesByType("navigation"),o=o.length>0&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(a.chrome&&a.chrome.loadTimes&&a.chrome.loadTimes()&&a.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function Nl(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function Ol(o){return o.h?1:o.g?o.g.size:0}function Yo(o,l){return o.h?o.h==l:o.g?o.g.has(l):!1}function Zo(o,l){o.g?o.g.add(l):o.h=l}function xl(o,l){o.h&&o.h==l?o.h=null:o.g&&o.g.has(l)&&o.g.delete(l)}kl.prototype.cancel=function(){if(this.i=Ml(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function Ml(o){if(o.h!=null)return o.i.concat(o.h.G);if(o.g!=null&&o.g.size!==0){let l=o.i;for(const h of o.g.values())l=l.concat(h.G);return l}return R(o.i)}var Ll=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Bg(o,l){if(o){o=o.split("&");for(let h=0;h<o.length;h++){const p=o[h].indexOf("=");let b,P=null;p>=0?(b=o[h].substring(0,p),P=o[h].substring(p+1)):b=o[h],l(b,P?decodeURIComponent(P.replace(/\+/g," ")):"")}}}function gn(o){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let l;o instanceof gn?(this.l=o.l,ds(this,o.j),this.o=o.o,this.g=o.g,ps(this,o.u),this.h=o.h,ea(this,ql(o.i)),this.m=o.m):o&&(l=String(o).match(Ll))?(this.l=!1,ds(this,l[1]||"",!0),this.o=gs(l[2]||""),this.g=gs(l[3]||"",!0),ps(this,l[4]),this.h=gs(l[5]||"",!0),ea(this,l[6]||"",!0),this.m=gs(l[7]||"")):(this.l=!1,this.i=new _s(null,this.l))}gn.prototype.toString=function(){const o=[];var l=this.j;l&&o.push(ms(l,Fl,!0),":");var h=this.g;return(h||l=="file")&&(o.push("//"),(l=this.o)&&o.push(ms(l,Fl,!0),"@"),o.push(hs(h).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),h=this.u,h!=null&&o.push(":",String(h))),(h=this.h)&&(this.g&&h.charAt(0)!="/"&&o.push("/"),o.push(ms(h,h.charAt(0)=="/"?qg:$g,!0))),(h=this.i.toString())&&o.push("?",h),(h=this.m)&&o.push("#",ms(h,zg)),o.join("")},gn.prototype.resolve=function(o){const l=Ct(this);let h=!!o.j;h?ds(l,o.j):h=!!o.o,h?l.o=o.o:h=!!o.g,h?l.g=o.g:h=o.u!=null;var p=o.h;if(h)ps(l,o.u);else if(h=!!o.h){if(p.charAt(0)!="/")if(this.g&&!this.h)p="/"+p;else{var b=l.h.lastIndexOf("/");b!=-1&&(p=l.h.slice(0,b+1)+p)}if(b=p,b==".."||b==".")p="";else if(b.indexOf("./")!=-1||b.indexOf("/.")!=-1){p=b.lastIndexOf("/",0)==0,b=b.split("/");const P=[];for(let j=0;j<b.length;){const ie=b[j++];ie=="."?p&&j==b.length&&P.push(""):ie==".."?((P.length>1||P.length==1&&P[0]!="")&&P.pop(),p&&j==b.length&&P.push("")):(P.push(ie),p=!0)}p=P.join("/")}else p=b}return h?l.h=p:h=o.i.toString()!=="",h?ea(l,ql(o.i)):h=!!o.m,h&&(l.m=o.m),l};function Ct(o){return new gn(o)}function ds(o,l,h){o.j=h?gs(l,!0):l,o.j&&(o.j=o.j.replace(/:$/,""))}function ps(o,l){if(l){if(l=Number(l),isNaN(l)||l<0)throw Error("Bad port number "+l);o.u=l}else o.u=null}function ea(o,l,h){l instanceof _s?(o.i=l,Wg(o.i,o.l)):(h||(l=ms(l,Hg)),o.i=new _s(l,o.l))}function be(o,l,h){o.i.set(l,h)}function yi(o){return be(o,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),o}function gs(o,l){return o?l?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function ms(o,l,h){return typeof o=="string"?(o=encodeURI(o).replace(l,jg),h&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function jg(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var Fl=/[#\/\?@]/g,$g=/[#\?:]/g,qg=/[#\?]/g,Hg=/[#\?@]/g,zg=/#/g;function _s(o,l){this.h=this.g=null,this.i=o||null,this.j=!!l}function Kn(o){o.g||(o.g=new Map,o.h=0,o.i&&Bg(o.i,function(l,h){o.add(decodeURIComponent(l.replace(/\+/g," ")),h)}))}n=_s.prototype,n.add=function(o,l){Kn(this),this.i=null,o=wr(this,o);let h=this.g.get(o);return h||this.g.set(o,h=[]),h.push(l),this.h+=1,this};function Ul(o,l){Kn(o),l=wr(o,l),o.g.has(l)&&(o.i=null,o.h-=o.g.get(l).length,o.g.delete(l))}function Bl(o,l){return Kn(o),l=wr(o,l),o.g.has(l)}n.forEach=function(o,l){Kn(this),this.g.forEach(function(h,p){h.forEach(function(b){o.call(l,b,p,this)},this)},this)};function jl(o,l){Kn(o);let h=[];if(typeof l=="string")Bl(o,l)&&(h=h.concat(o.g.get(wr(o,l))));else for(o=Array.from(o.g.values()),l=0;l<o.length;l++)h=h.concat(o[l]);return h}n.set=function(o,l){return Kn(this),this.i=null,o=wr(this,o),Bl(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[l]),this.h+=1,this},n.get=function(o,l){return o?(o=jl(this,o),o.length>0?String(o[0]):l):l};function $l(o,l,h){Ul(o,l),h.length>0&&(o.i=null,o.g.set(wr(o,l),R(h)),o.h+=h.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],l=Array.from(this.g.keys());for(let p=0;p<l.length;p++){var h=l[p];const b=hs(h);h=jl(this,h);for(let P=0;P<h.length;P++){let j=b;h[P]!==""&&(j+="="+hs(h[P])),o.push(j)}}return this.i=o.join("&")};function ql(o){const l=new _s;return l.i=o.i,o.g&&(l.g=new Map(o.g),l.h=o.h),l}function wr(o,l){return l=String(l),o.j&&(l=l.toLowerCase()),l}function Wg(o,l){l&&!o.j&&(Kn(o),o.i=null,o.g.forEach(function(h,p){const b=p.toLowerCase();p!=b&&(Ul(this,p),$l(this,b,h))},o)),o.j=l}function Kg(o,l){const h=new us;if(a.Image){const p=new Image;p.onload=d(mn,h,"TestLoadImage: loaded",!0,l,p),p.onerror=d(mn,h,"TestLoadImage: error",!1,l,p),p.onabort=d(mn,h,"TestLoadImage: abort",!1,l,p),p.ontimeout=d(mn,h,"TestLoadImage: timeout",!1,l,p),a.setTimeout(function(){p.ontimeout&&p.ontimeout()},1e4),p.src=o}else l(!1)}function Gg(o,l){const h=new us,p=new AbortController,b=setTimeout(()=>{p.abort(),mn(h,"TestPingServer: timeout",!1,l)},1e4);fetch(o,{signal:p.signal}).then(P=>{clearTimeout(b),P.ok?mn(h,"TestPingServer: ok",!0,l):mn(h,"TestPingServer: server error",!1,l)}).catch(()=>{clearTimeout(b),mn(h,"TestPingServer: error",!1,l)})}function mn(o,l,h,p,b){try{b&&(b.onload=null,b.onerror=null,b.onabort=null,b.ontimeout=null),p(h)}catch{}}function Qg(){this.g=new Ue}function ta(o){this.i=o.Sb||null,this.h=o.ab||!1}g(ta,ct),ta.prototype.g=function(){return new Ei(this.i,this.h)};function Ei(o,l){L.call(this),this.H=o,this.o=l,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}g(Ei,L),n=Ei.prototype,n.open=function(o,l){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=o,this.D=l,this.readyState=1,Es(this)},n.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const l={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};o&&(l.body=o),(this.H||a).fetch(new Request(this.D,l)).then(this.Pa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,ys(this)),this.readyState=0},n.Pa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,Es(this)),this.g&&(this.readyState=3,Es(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof a.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Hl(this)}else o.text().then(this.Oa.bind(this),this.ga.bind(this))};function Hl(o){o.j.read().then(o.Ma.bind(o)).catch(o.ga.bind(o))}n.Ma=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var l=o.value?o.value:new Uint8Array(0);(l=this.B.decode(l,{stream:!o.done}))&&(this.response=this.responseText+=l)}o.done?ys(this):Es(this),this.readyState==3&&Hl(this)}},n.Oa=function(o){this.g&&(this.response=this.responseText=o,ys(this))},n.Na=function(o){this.g&&(this.response=o,ys(this))},n.ga=function(){this.g&&ys(this)};function ys(o){o.readyState=4,o.l=null,o.j=null,o.B=null,Es(o)}n.setRequestHeader=function(o,l){this.A.append(o,l)},n.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],l=this.h.entries();for(var h=l.next();!h.done;)h=h.value,o.push(h[0]+": "+h[1]),h=l.next();return o.join(`\r
`)};function Es(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(Ei.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function zl(o){let l="";return gt(o,function(h,p){l+=p,l+=":",l+=h,l+=`\r
`}),l}function na(o,l,h){e:{for(p in h){var p=!1;break e}p=!0}p||(h=zl(h),typeof o=="string"?h!=null&&hs(h):be(o,l,h))}function Ve(o){L.call(this),this.headers=new Map,this.L=o||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}g(Ve,L);var Jg=/^https?$/i,Xg=["POST","PUT"];n=Ve.prototype,n.Fa=function(o){this.H=o},n.ea=function(o,l,h,p){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);l=l?l.toUpperCase():"GET",this.D=o,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():Sl.g(),this.g.onreadystatechange=E(f(this.Ca,this));try{this.B=!0,this.g.open(l,String(o),!0),this.B=!1}catch(P){Wl(this,P);return}if(o=h||"",h=new Map(this.headers),p)if(Object.getPrototypeOf(p)===Object.prototype)for(var b in p)h.set(b,p[b]);else if(typeof p.keys=="function"&&typeof p.get=="function")for(const P of p.keys())h.set(P,p.get(P));else throw Error("Unknown input type for opt_headers: "+String(p));p=Array.from(h.keys()).find(P=>P.toLowerCase()=="content-type"),b=a.FormData&&o instanceof a.FormData,!(Array.prototype.indexOf.call(Xg,l,void 0)>=0)||p||b||h.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[P,j]of h)this.g.setRequestHeader(P,j);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(o),this.v=!1}catch(P){Wl(this,P)}};function Wl(o,l){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=l,o.o=5,Kl(o),Ti(o)}function Kl(o){o.A||(o.A=!0,M(o,"complete"),M(o,"error"))}n.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=o||7,M(this,"complete"),M(this,"abort"),Ti(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Ti(this,!0)),Ve.Z.N.call(this)},n.Ca=function(){this.u||(this.B||this.v||this.j?Gl(this):this.Xa())},n.Xa=function(){Gl(this)};function Gl(o){if(o.h&&typeof i<"u"){if(o.v&&_n(o)==4)setTimeout(o.Ca.bind(o),0);else if(M(o,"readystatechange"),_n(o)==4){o.h=!1;try{const P=o.ca();e:switch(P){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var l=!0;break e;default:l=!1}var h;if(!(h=l)){var p;if(p=P===0){let j=String(o.D).match(Ll)[1]||null;!j&&a.self&&a.self.location&&(j=a.self.location.protocol.slice(0,-1)),p=!Jg.test(j?j.toLowerCase():"")}h=p}if(h)M(o,"complete"),M(o,"success");else{o.o=6;try{var b=_n(o)>2?o.g.statusText:""}catch{b=""}o.l=b+" ["+o.ca()+"]",Kl(o)}}finally{Ti(o)}}}}function Ti(o,l){if(o.g){o.m&&(clearTimeout(o.m),o.m=null);const h=o.g;o.g=null,l||M(o,"ready");try{h.onreadystatechange=null}catch{}}}n.isActive=function(){return!!this.g};function _n(o){return o.g?o.g.readyState:0}n.ca=function(){try{return _n(this)>2?this.g.status:-1}catch{return-1}},n.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.La=function(o){if(this.g){var l=this.g.responseText;return o&&l.indexOf(o)==0&&(l=l.substring(o.length)),Je(l)}};function Ql(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.F){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function Yg(o){const l={};o=(o.g&&_n(o)>=2&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let p=0;p<o.length;p++){if(y(o[p]))continue;var h=Mg(o[p]);const b=h[0];if(h=h[1],typeof h!="string")continue;h=h.trim();const P=l[b]||[];l[b]=P,P.push(h)}yr(l,function(p){return p.join(", ")})}n.ya=function(){return this.o},n.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ts(o,l,h){return h&&h.internalChannelParams&&h.internalChannelParams[o]||l}function Jl(o){this.za=0,this.i=[],this.j=new us,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Ts("failFast",!1,o),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Ts("baseRetryDelayMs",5e3,o),this.Za=Ts("retryDelaySeedMs",1e4,o),this.Ta=Ts("forwardChannelMaxRetries",2,o),this.va=Ts("forwardChannelRequestTimeoutMs",2e4,o),this.ma=o&&o.xmlHttpFactory||void 0,this.Ua=o&&o.Rb||void 0,this.Aa=o&&o.useFetchStreams||!1,this.O=void 0,this.L=o&&o.supportsCrossDomainXhr||!1,this.M="",this.h=new kl(o&&o.concurrentRequestLimit),this.Ba=new Qg,this.S=o&&o.fastHandshake||!1,this.R=o&&o.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=o&&o.Pb||!1,o&&o.ua&&this.j.ua(),o&&o.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&o&&o.detectBufferingProxy||!1,this.ia=void 0,o&&o.longPollingTimeout&&o.longPollingTimeout>0&&(this.ia=o.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}n=Jl.prototype,n.ka=8,n.I=1,n.connect=function(o,l,h,p){rt(0),this.W=o,this.H=l||{},h&&p!==void 0&&(this.H.OSID=h,this.H.OAID=p),this.F=this.X,this.J=iu(this,null,this.W),vi(this)};function ra(o){if(Xl(o),o.I==3){var l=o.V++,h=Ct(o.J);if(be(h,"SID",o.M),be(h,"RID",l),be(h,"TYPE","terminate"),Is(o,h),l=new pn(o,o.j,l),l.M=2,l.A=yi(Ct(h)),h=!1,a.navigator&&a.navigator.sendBeacon)try{h=a.navigator.sendBeacon(l.A.toString(),"")}catch{}!h&&a.Image&&(new Image().src=l.A,h=!0),h||(l.g=ou(l.j,null),l.g.ea(l.A)),l.F=Date.now(),_i(l)}su(o)}function Ii(o){o.g&&(ia(o),o.g.cancel(),o.g=null)}function Xl(o){Ii(o),o.v&&(a.clearTimeout(o.v),o.v=null),wi(o),o.h.cancel(),o.m&&(typeof o.m=="number"&&a.clearTimeout(o.m),o.m=null)}function vi(o){if(!Nl(o.h)&&!o.m){o.m=!0;var l=o.Ea;fe||m(),Ee||(fe(),Ee=!0),v.add(l,o),o.D=0}}function Zg(o,l){return Ol(o.h)>=o.h.j-(o.m?1:0)?!1:o.m?(o.i=l.G.concat(o.i),!0):o.I==1||o.I==2||o.D>=(o.Sa?0:o.Ta)?!1:(o.m=ls(f(o.Ea,o,l),ru(o,o.D)),o.D++,!0)}n.Ea=function(o){if(this.m)if(this.m=null,this.I==1){if(!o){this.V=Math.floor(Math.random()*1e5),o=this.V++;const b=new pn(this,this.j,o);let P=this.o;if(this.U&&(P?(P=Pt(P),rs(P,this.U)):P=this.U),this.u!==null||this.R||(b.J=P,P=null),this.S)e:{for(var l=0,h=0;h<this.i.length;h++){t:{var p=this.i[h];if("__data__"in p.map&&(p=p.map.__data__,typeof p=="string")){p=p.length;break t}p=void 0}if(p===void 0)break;if(l+=p,l>4096){l=h;break e}if(l===4096||h===this.i.length-1){l=h+1;break e}}l=1e3}else l=1e3;l=Zl(this,b,l),h=Ct(this.J),be(h,"RID",o),be(h,"CVER",22),this.G&&be(h,"X-HTTP-Session-Id",this.G),Is(this,h),P&&(this.R?l="headers="+hs(zl(P))+"&"+l:this.u&&na(h,this.u,P)),Zo(this.h,b),this.Ra&&be(h,"TYPE","init"),this.S?(be(h,"$req",l),be(h,"SID","null"),b.U=!0,Qo(b,h,null)):Qo(b,h,l),this.I=2}}else this.I==3&&(o?Yl(this,o):this.i.length==0||Nl(this.h)||Yl(this))};function Yl(o,l){var h;l?h=l.l:h=o.V++;const p=Ct(o.J);be(p,"SID",o.M),be(p,"RID",h),be(p,"AID",o.K),Is(o,p),o.u&&o.o&&na(p,o.u,o.o),h=new pn(o,o.j,h,o.D+1),o.u===null&&(h.J=o.o),l&&(o.i=l.G.concat(o.i)),l=Zl(o,h,1e3),h.H=Math.round(o.va*.5)+Math.round(o.va*.5*Math.random()),Zo(o.h,h),Qo(h,p,l)}function Is(o,l){o.H&&gt(o.H,function(h,p){be(l,p,h)}),o.l&&gt({},function(h,p){be(l,p,h)})}function Zl(o,l,h){h=Math.min(o.i.length,h);const p=o.l?f(o.l.Ka,o.l,o):null;e:{var b=o.i;let ie=-1;for(;;){const xe=["count="+h];ie==-1?h>0?(ie=b[0].g,xe.push("ofs="+ie)):ie=0:xe.push("ofs="+ie);let Ie=!0;for(let je=0;je<h;je++){var P=b[je].g;const Vt=b[je].map;if(P-=ie,P<0)ie=Math.max(0,b[je].g-100),Ie=!1;else try{P="req"+P+"_"||"";try{var j=Vt instanceof Map?Vt:Object.entries(Vt);for(const[Qn,yn]of j){let En=yn;c(yn)&&(En=de(yn)),xe.push(P+Qn+"="+encodeURIComponent(En))}}catch(Qn){throw xe.push(P+"type="+encodeURIComponent("_badmap")),Qn}}catch{p&&p(Vt)}}if(Ie){j=xe.join("&");break e}}j=void 0}return o=o.i.splice(0,h),l.G=o,j}function eu(o){if(!o.g&&!o.v){o.Y=1;var l=o.Da;fe||m(),Ee||(fe(),Ee=!0),v.add(l,o),o.A=0}}function sa(o){return o.g||o.v||o.A>=3?!1:(o.Y++,o.v=ls(f(o.Da,o),ru(o,o.A)),o.A++,!0)}n.Da=function(){if(this.v=null,tu(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var o=4*this.T;this.j.info("BP detection timer enabled: "+o),this.B=ls(f(this.Wa,this),o)}},n.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,rt(10),Ii(this),tu(this))};function ia(o){o.B!=null&&(a.clearTimeout(o.B),o.B=null)}function tu(o){o.g=new pn(o,o.j,"rpc",o.Y),o.u===null&&(o.g.J=o.o),o.g.P=0;var l=Ct(o.na);be(l,"RID","rpc"),be(l,"SID",o.M),be(l,"AID",o.K),be(l,"CI",o.F?"0":"1"),!o.F&&o.ia&&be(l,"TO",o.ia),be(l,"TYPE","xmlhttp"),Is(o,l),o.u&&o.o&&na(l,o.u,o.o),o.O&&(o.g.H=o.O);var h=o.g;o=o.ba,h.M=1,h.A=yi(Ct(l)),h.u=null,h.R=!0,Cl(h,o)}n.Va=function(){this.C!=null&&(this.C=null,Ii(this),sa(this),rt(19))};function wi(o){o.C!=null&&(a.clearTimeout(o.C),o.C=null)}function nu(o,l){var h=null;if(o.g==l){wi(o),ia(o),o.g=null;var p=2}else if(Yo(o.h,l))h=l.G,xl(o.h,l),p=1;else return;if(o.I!=0){if(l.o)if(p==1){h=l.u?l.u.length:0,l=Date.now()-l.F;var b=o.D;p=zn(),M(p,new Al(p,h)),vi(o)}else eu(o);else if(b=l.m,b==3||b==0&&l.X>0||!(p==1&&Zg(o,l)||p==2&&sa(o)))switch(h&&h.length>0&&(l=o.h,l.i=l.i.concat(h)),b){case 1:Gn(o,5);break;case 4:Gn(o,10);break;case 3:Gn(o,6);break;default:Gn(o,2)}}}function ru(o,l){let h=o.Qa+Math.floor(Math.random()*o.Za);return o.isActive()||(h*=2),h*l}function Gn(o,l){if(o.j.info("Error code "+l),l==2){var h=f(o.bb,o),p=o.Ua;const b=!p;p=new gn(p||"//www.google.com/images/cleardot.gif"),a.location&&a.location.protocol=="http"||ds(p,"https"),yi(p),b?Kg(p.toString(),h):Gg(p.toString(),h)}else rt(2);o.I=0,o.l&&o.l.pa(l),su(o),Xl(o)}n.bb=function(o){o?(this.j.info("Successfully pinged google.com"),rt(2)):(this.j.info("Failed to ping google.com"),rt(1))};function su(o){if(o.I=0,o.ja=[],o.l){const l=Ml(o.h);(l.length!=0||o.i.length!=0)&&(x(o.ja,l),x(o.ja,o.i),o.h.i.length=0,R(o.i),o.i.length=0),o.l.oa()}}function iu(o,l,h){var p=h instanceof gn?Ct(h):new gn(h);if(p.g!="")l&&(p.g=l+"."+p.g),ps(p,p.u);else{var b=a.location;p=b.protocol,l=l?l+"."+b.hostname:b.hostname,b=+b.port;const P=new gn(null);p&&ds(P,p),l&&(P.g=l),b&&ps(P,b),h&&(P.h=h),p=P}return h=o.G,l=o.wa,h&&l&&be(p,h,l),be(p,"VER",o.ka),Is(o,p),p}function ou(o,l,h){if(l&&!o.L)throw Error("Can't create secondary domain capable XhrIo object.");return l=o.Aa&&!o.ma?new Ve(new ta({ab:h})):new Ve(o.ma),l.Fa(o.L),l}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function au(){}n=au.prototype,n.ra=function(){},n.qa=function(){},n.pa=function(){},n.oa=function(){},n.isActive=function(){return!0},n.Ka=function(){};function Ai(){}Ai.prototype.g=function(o,l){return new ft(o,l)};function ft(o,l){L.call(this),this.g=new Jl(l),this.l=o,this.h=l&&l.messageUrlParams||null,o=l&&l.messageHeaders||null,l&&l.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=l&&l.initMessageHeaders||null,l&&l.messageContentType&&(o?o["X-WebChannel-Content-Type"]=l.messageContentType:o={"X-WebChannel-Content-Type":l.messageContentType}),l&&l.sa&&(o?o["X-WebChannel-Client-Profile"]=l.sa:o={"X-WebChannel-Client-Profile":l.sa}),this.g.U=o,(o=l&&l.Qb)&&!y(o)&&(this.g.u=o),this.A=l&&l.supportsCrossDomainXhr||!1,this.v=l&&l.sendRawJson||!1,(l=l&&l.httpSessionIdParam)&&!y(l)&&(this.g.G=l,o=this.h,o!==null&&l in o&&(o=this.h,l in o&&delete o[l])),this.j=new Ar(this)}g(ft,L),ft.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},ft.prototype.close=function(){ra(this.g)},ft.prototype.o=function(o){var l=this.g;if(typeof o=="string"){var h={};h.__data__=o,o=h}else this.v&&(h={},h.__data__=de(o),o=h);l.i.push(new Ug(l.Ya++,o)),l.I==3&&vi(l)},ft.prototype.N=function(){this.g.l=null,delete this.j,ra(this.g),delete this.g,ft.Z.N.call(this)};function cu(o){Ir.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var l=o.__sm__;if(l){e:{for(const h in l){o=h;break e}o=void 0}(this.i=o)&&(o=this.i,l=l!==null&&o in l?l[o]:void 0),this.data=l}else this.data=o}g(cu,Ir);function lu(){ze.call(this),this.status=1}g(lu,ze);function Ar(o){this.g=o}g(Ar,au),Ar.prototype.ra=function(){M(this.g,"a")},Ar.prototype.qa=function(o){M(this.g,new cu(o))},Ar.prototype.pa=function(o){M(this.g,new lu)},Ar.prototype.oa=function(){M(this.g,"b")},Ai.prototype.createWebChannel=Ai.prototype.g,ft.prototype.send=ft.prototype.o,ft.prototype.open=ft.prototype.m,ft.prototype.close=ft.prototype.close,cp=function(){return new Ai},ap=function(){return zn()},op=Be,Xa={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},mi.NO_ERROR=0,mi.TIMEOUT=8,mi.HTTP_ERROR=6,$i=mi,bl.COMPLETE="complete",ip=bl,Xe.EventType=Et,Et.OPEN="a",Et.CLOSE="b",Et.ERROR="c",Et.MESSAGE="d",L.prototype.listen=L.prototype.J,bs=Xe,Ve.prototype.listenOnce=Ve.prototype.K,Ve.prototype.getLastError=Ve.prototype.Ha,Ve.prototype.getLastErrorCode=Ve.prototype.ya,Ve.prototype.getStatus=Ve.prototype.ca,Ve.prototype.getResponseJson=Ve.prototype.La,Ve.prototype.getResponseText=Ve.prototype.la,Ve.prototype.send=Ve.prototype.ea,Ve.prototype.setWithCredentials=Ve.prototype.Fa,sp=Ve}).apply(typeof Vi<"u"?Vi:typeof self<"u"?self:typeof window<"u"?window:{});const fh="@firebase/firestore",dh="4.9.2";/**
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
 */class Ze{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ze.UNAUTHENTICATED=new Ze(null),Ze.GOOGLE_CREDENTIALS=new Ze("google-credentials-uid"),Ze.FIRST_PARTY=new Ze("first-party-uid"),Ze.MOCK_USER=new Ze("mock-user");/**
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
 */let Zr="12.3.0";/**
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
 */const hr=new kc("@firebase/firestore");function Pr(){return hr.logLevel}function H(n,...e){if(hr.logLevel<=ce.DEBUG){const t=e.map(zc);hr.debug(`Firestore (${Zr}): ${n}`,...t)}}function ln(n,...e){if(hr.logLevel<=ce.ERROR){const t=e.map(zc);hr.error(`Firestore (${Zr}): ${n}`,...t)}}function Hr(n,...e){if(hr.logLevel<=ce.WARN){const t=e.map(zc);hr.warn(`Firestore (${Zr}): ${n}`,...t)}}function zc(n){if(typeof n=="string")return n;try{/**
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
*/return function(t){return JSON.stringify(t)}(n)}catch{return n}}/**
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
 */function ee(n,e,t){let r="Unexpected state";typeof e=="string"?r=e:t=e,lp(n,r,t)}function lp(n,e,t){let r=`FIRESTORE (${Zr}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{r+=" CONTEXT: "+JSON.stringify(t)}catch{r+=" CONTEXT: "+t}throw ln(r),new Error(r)}function me(n,e,t,r){let s="Unexpected state";typeof t=="string"?s=t:r=t,n||lp(e,s,r)}function re(n,e){return n}/**
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
 */const O={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Q extends fn{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Nn{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
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
 */class up{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class dv{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(Ze.UNAUTHENTICATED))}shutdown(){}}class pv{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class gv{constructor(e){this.t=e,this.currentUser=Ze.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){me(this.o===void 0,42304);let r=this.i;const s=u=>this.i!==r?(r=this.i,t(u)):Promise.resolve();let i=new Nn;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Nn,e.enqueueRetryable(()=>s(this.currentUser))};const a=()=>{const u=i;e.enqueueRetryable(async()=>{await u.promise,await s(this.currentUser)})},c=u=>{H("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit(u=>c(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?c(u):(H("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Nn)}},0),a()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(H("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(me(typeof r.accessToken=="string",31837,{l:r}),new up(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return me(e===null||typeof e=="string",2055,{h:e}),new Ze(e)}}class mv{constructor(e,t,r){this.P=e,this.T=t,this.I=r,this.type="FirstParty",this.user=Ze.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class _v{constructor(e,t,r){this.P=e,this.T=t,this.I=r}getToken(){return Promise.resolve(new mv(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable(()=>t(Ze.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class ph{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class yv{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,It(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){me(this.o===void 0,3512);const r=i=>{i.error!=null&&H("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const a=i.token!==this.m;return this.m=i.token,H("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{H("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):H("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new ph(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(me(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new ph(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function Ev(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
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
 */class Wc{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=Ev(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<t&&(r+=e.charAt(s[i]%62))}return r}}function le(n,e){return n<e?-1:n>e?1:0}function Ya(n,e){const t=Math.min(n.length,e.length);for(let r=0;r<t;r++){const s=n.charAt(r),i=e.charAt(r);if(s!==i)return Ra(s)===Ra(i)?le(s,i):Ra(s)?1:-1}return le(n.length,e.length)}const Tv=55296,Iv=57343;function Ra(n){const e=n.charCodeAt(0);return e>=Tv&&e<=Iv}function zr(n,e,t){return n.length===e.length&&n.every((r,s)=>t(r,e[s]))}/**
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
 */const gh="__name__";class Nt{constructor(e,t,r){t===void 0?t=0:t>e.length&&ee(637,{offset:t,range:e.length}),r===void 0?r=e.length-t:r>e.length-t&&ee(1746,{length:r,range:e.length-t}),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return Nt.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Nt?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let s=0;s<r;s++){const i=Nt.compareSegments(e.get(s),t.get(s));if(i!==0)return i}return le(e.length,t.length)}static compareSegments(e,t){const r=Nt.isNumericId(e),s=Nt.isNumericId(t);return r&&!s?-1:!r&&s?1:r&&s?Nt.extractNumericId(e).compare(Nt.extractNumericId(t)):Ya(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return kn.fromString(e.substring(4,e.length-2))}}class Pe extends Nt{construct(e,t,r){return new Pe(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new Q(O.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(s=>s.length>0))}return new Pe(t)}static emptyPath(){return new Pe([])}}const vv=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ke extends Nt{construct(e,t,r){return new Ke(e,t,r)}static isValidIdentifier(e){return vv.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ke.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===gh}static keyField(){return new Ke([gh])}static fromServerFormat(e){const t=[];let r="",s=0;const i=()=>{if(r.length===0)throw new Q(O.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let a=!1;for(;s<e.length;){const c=e[s];if(c==="\\"){if(s+1===e.length)throw new Q(O.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[s+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new Q(O.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,s+=2}else c==="`"?(a=!a,s++):c!=="."||a?(r+=c,s++):(i(),s++)}if(i(),a)throw new Q(O.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ke(t)}static emptyPath(){return new Ke([])}}/**
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
 */class Y{constructor(e){this.path=e}static fromPath(e){return new Y(Pe.fromString(e))}static fromName(e){return new Y(Pe.fromString(e).popFirst(5))}static empty(){return new Y(Pe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Pe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return Pe.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Y(new Pe(e.slice()))}}/**
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
 */function wv(n,e,t){if(!t)throw new Q(O.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function Av(n,e,t,r){if(e===!0&&r===!0)throw new Q(O.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function mh(n){if(!Y.isDocumentKey(n))throw new Q(O.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function hp(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function Kc(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":ee(12329,{type:typeof n})}function Js(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new Q(O.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Kc(n);throw new Q(O.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ne(n,e){const t={typeString:n};return e&&(t.value=e),t}function hi(n,e){if(!hp(n))throw new Q(O.INVALID_ARGUMENT,"JSON must be an object");let t;for(const r in e)if(e[r]){const s=e[r].typeString,i="value"in e[r]?{value:e[r].value}:void 0;if(!(r in n)){t=`JSON missing required field: '${r}'`;break}const a=n[r];if(s&&typeof a!==s){t=`JSON field '${r}' must be a ${s}.`;break}if(i!==void 0&&a!==i.value){t=`Expected '${r}' field to equal '${i.value}'`;break}}if(t)throw new Q(O.INVALID_ARGUMENT,t);return!0}/**
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
 */const _h=-62135596800,yh=1e6;class Se{static now(){return Se.fromMillis(Date.now())}static fromDate(e){return Se.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor((e-1e3*t)*yh);return new Se(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new Q(O.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new Q(O.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<_h)throw new Q(O.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new Q(O.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/yh}_compareTo(e){return this.seconds===e.seconds?le(this.nanoseconds,e.nanoseconds):le(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Se._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(hi(e,Se._jsonSchema))return new Se(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-_h;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Se._jsonSchemaVersion="firestore/timestamp/1.0",Se._jsonSchema={type:Ne("string",Se._jsonSchemaVersion),seconds:Ne("number"),nanoseconds:Ne("number")};/**
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
 */class ne{static fromTimestamp(e){return new ne(e)}static min(){return new ne(new Se(0,0))}static max(){return new ne(new Se(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const Xs=-1;function bv(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=ne.fromTimestamp(r===1e9?new Se(t+1,0):new Se(t,r));return new Ln(s,Y.empty(),e)}function Sv(n){return new Ln(n.readTime,n.key,Xs)}class Ln{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new Ln(ne.min(),Y.empty(),Xs)}static max(){return new Ln(ne.max(),Y.empty(),Xs)}}function Rv(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=Y.comparator(n.documentKey,e.documentKey),t!==0?t:le(n.largestBatchId,e.largestBatchId))}/**
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
 */const Pv="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Cv{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function es(n){if(n.code!==O.FAILED_PRECONDITION||n.message!==Pv)throw n;H("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class V{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&ee(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new V((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(t,i).next(r,s)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof V?t:V.resolve(t)}catch(t){return V.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):V.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):V.reject(t)}static resolve(e){return new V((t,r)=>{t(e)})}static reject(e){return new V((t,r)=>{r(e)})}static waitFor(e){return new V((t,r)=>{let s=0,i=0,a=!1;e.forEach(c=>{++s,c.next(()=>{++i,a&&i===s&&t()},u=>r(u))}),a=!0,i===s&&t()})}static or(e){let t=V.resolve(!1);for(const r of e)t=t.next(s=>s?V.resolve(s):r());return t}static forEach(e,t){const r=[];return e.forEach((s,i)=>{r.push(t.call(this,s,i))}),this.waitFor(r)}static mapArray(e,t){return new V((r,s)=>{const i=e.length,a=new Array(i);let c=0;for(let u=0;u<i;u++){const f=u;t(e[f]).next(d=>{a[f]=d,++c,c===i&&r(a)},d=>s(d))}})}static doWhile(e,t){return new V((r,s)=>{const i=()=>{e()===!0?t().next(()=>{i()},s):r()};i()})}}function Vv(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function ts(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class xo{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>t.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}xo.ce=-1;/**
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
 */const Gc=-1;function Mo(n){return n==null}function co(n){return n===0&&1/n==-1/0}function Dv(n){return typeof n=="number"&&Number.isInteger(n)&&!co(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */const fp="";function kv(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=Eh(e)),e=Nv(n.get(t),e);return Eh(e)}function Nv(n,e){let t=e;const r=n.length;for(let s=0;s<r;s++){const i=n.charAt(s);switch(i){case"\0":t+="";break;case fp:t+="";break;default:t+=i}}return t}function Eh(n){return n+fp+""}/**
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
 */function Th(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function pr(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function dp(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
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
 */class Ce{constructor(e,t){this.comparator=e,this.root=t||We.EMPTY}insert(e,t){return new Ce(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,We.BLACK,null,null))}remove(e){return new Ce(this.comparator,this.root.remove(e,this.comparator).copy(null,null,We.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return t+r.left.size;s<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Di(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Di(this.root,e,this.comparator,!1)}getReverseIterator(){return new Di(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Di(this.root,e,this.comparator,!0)}}class Di{constructor(e,t,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?r(e.key,t):1,t&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class We{constructor(e,t,r,s,i){this.key=e,this.value=t,this.color=r??We.RED,this.left=s??We.EMPTY,this.right=i??We.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,s,i){return new We(e??this.key,t??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,t,r),null):i===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return We.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return We.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,We.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,We.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw ee(43730,{key:this.key,value:this.value});if(this.right.isRed())throw ee(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw ee(27949);return e+(this.isRed()?0:1)}}We.EMPTY=null,We.RED=!0,We.BLACK=!1;We.EMPTY=new class{constructor(){this.size=0}get key(){throw ee(57766)}get value(){throw ee(16141)}get color(){throw ee(16727)}get left(){throw ee(29726)}get right(){throw ee(36894)}copy(e,t,r,s,i){return this}insert(e,t,r){return new We(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Le{constructor(e){this.comparator=e,this.data=new Ce(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Ih(this.data.getIterator())}getIteratorFrom(e){return new Ih(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof Le)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new Le(this.comparator);return t.data=e,t}}class Ih{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class wt{constructor(e){this.fields=e,e.sort(Ke.comparator)}static empty(){return new wt([])}unionWith(e){let t=new Le(Ke.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new wt(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return zr(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
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
 */class pp extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Qe{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new pp("Invalid base64 string: "+i):i}}(e);return new Qe(t)}static fromUint8Array(e){const t=function(s){let i="";for(let a=0;a<s.length;++a)i+=String.fromCharCode(s[a]);return i}(e);return new Qe(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return le(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Qe.EMPTY_BYTE_STRING=new Qe("");const Ov=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Fn(n){if(me(!!n,39018),typeof n=="string"){let e=0;const t=Ov.exec(n);if(me(!!t,46558,{timestamp:n}),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:De(n.seconds),nanos:De(n.nanos)}}function De(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Un(n){return typeof n=="string"?Qe.fromBase64String(n):Qe.fromUint8Array(n)}/**
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
 */const gp="server_timestamp",mp="__type__",_p="__previous_value__",yp="__local_write_time__";function Qc(n){var t,r;return((r=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[mp])==null?void 0:r.stringValue)===gp}function Lo(n){const e=n.mapValue.fields[_p];return Qc(e)?Lo(e):e}function Ys(n){const e=Fn(n.mapValue.fields[yp].timestampValue);return new Se(e.seconds,e.nanos)}/**
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
 */class xv{constructor(e,t,r,s,i,a,c,u,f,d){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=a,this.autoDetectLongPolling=c,this.longPollingOptions=u,this.useFetchStreams=f,this.isUsingEmulator=d}}const lo="(default)";class Zs{constructor(e,t){this.projectId=e,this.database=t||lo}static empty(){return new Zs("","")}get isDefaultDatabase(){return this.database===lo}isEqual(e){return e instanceof Zs&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Ep="__type__",Tp="__max__",ki={mapValue:{fields:{__type__:{stringValue:Tp}}}},Ip="__vector__",uo="value";function Bn(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Qc(n)?4:Lv(n)?9007199254740991:Mv(n)?10:11:ee(28295,{value:n})}function zt(n,e){if(n===e)return!0;const t=Bn(n);if(t!==Bn(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Ys(n).isEqual(Ys(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const a=Fn(s.timestampValue),c=Fn(i.timestampValue);return a.seconds===c.seconds&&a.nanos===c.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(s,i){return Un(s.bytesValue).isEqual(Un(i.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(s,i){return De(s.geoPointValue.latitude)===De(i.geoPointValue.latitude)&&De(s.geoPointValue.longitude)===De(i.geoPointValue.longitude)}(n,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return De(s.integerValue)===De(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const a=De(s.doubleValue),c=De(i.doubleValue);return a===c?co(a)===co(c):isNaN(a)&&isNaN(c)}return!1}(n,e);case 9:return zr(n.arrayValue.values||[],e.arrayValue.values||[],zt);case 10:case 11:return function(s,i){const a=s.mapValue.fields||{},c=i.mapValue.fields||{};if(Th(a)!==Th(c))return!1;for(const u in a)if(a.hasOwnProperty(u)&&(c[u]===void 0||!zt(a[u],c[u])))return!1;return!0}(n,e);default:return ee(52216,{left:n})}}function ei(n,e){return(n.values||[]).find(t=>zt(t,e))!==void 0}function Wr(n,e){if(n===e)return 0;const t=Bn(n),r=Bn(e);if(t!==r)return le(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return le(n.booleanValue,e.booleanValue);case 2:return function(i,a){const c=De(i.integerValue||i.doubleValue),u=De(a.integerValue||a.doubleValue);return c<u?-1:c>u?1:c===u?0:isNaN(c)?isNaN(u)?0:-1:1}(n,e);case 3:return vh(n.timestampValue,e.timestampValue);case 4:return vh(Ys(n),Ys(e));case 5:return Ya(n.stringValue,e.stringValue);case 6:return function(i,a){const c=Un(i),u=Un(a);return c.compareTo(u)}(n.bytesValue,e.bytesValue);case 7:return function(i,a){const c=i.split("/"),u=a.split("/");for(let f=0;f<c.length&&f<u.length;f++){const d=le(c[f],u[f]);if(d!==0)return d}return le(c.length,u.length)}(n.referenceValue,e.referenceValue);case 8:return function(i,a){const c=le(De(i.latitude),De(a.latitude));return c!==0?c:le(De(i.longitude),De(a.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return wh(n.arrayValue,e.arrayValue);case 10:return function(i,a){var E,R,x,U;const c=i.fields||{},u=a.fields||{},f=(E=c[uo])==null?void 0:E.arrayValue,d=(R=u[uo])==null?void 0:R.arrayValue,g=le(((x=f==null?void 0:f.values)==null?void 0:x.length)||0,((U=d==null?void 0:d.values)==null?void 0:U.length)||0);return g!==0?g:wh(f,d)}(n.mapValue,e.mapValue);case 11:return function(i,a){if(i===ki.mapValue&&a===ki.mapValue)return 0;if(i===ki.mapValue)return 1;if(a===ki.mapValue)return-1;const c=i.fields||{},u=Object.keys(c),f=a.fields||{},d=Object.keys(f);u.sort(),d.sort();for(let g=0;g<u.length&&g<d.length;++g){const E=Ya(u[g],d[g]);if(E!==0)return E;const R=Wr(c[u[g]],f[d[g]]);if(R!==0)return R}return le(u.length,d.length)}(n.mapValue,e.mapValue);default:throw ee(23264,{he:t})}}function vh(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return le(n,e);const t=Fn(n),r=Fn(e),s=le(t.seconds,r.seconds);return s!==0?s:le(t.nanos,r.nanos)}function wh(n,e){const t=n.values||[],r=e.values||[];for(let s=0;s<t.length&&s<r.length;++s){const i=Wr(t[s],r[s]);if(i)return i}return le(t.length,r.length)}function Kr(n){return Za(n)}function Za(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const r=Fn(t);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return Un(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return Y.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let r="[",s=!0;for(const i of t.values||[])s?s=!1:r+=",",r+=Za(i);return r+"]"}(n.arrayValue):"mapValue"in n?function(t){const r=Object.keys(t.fields||{}).sort();let s="{",i=!0;for(const a of r)i?i=!1:s+=",",s+=`${a}:${Za(t.fields[a])}`;return s+"}"}(n.mapValue):ee(61005,{value:n})}function qi(n){switch(Bn(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Lo(n);return e?16+qi(e):16;case 5:return 2*n.stringValue.length;case 6:return Un(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((s,i)=>s+qi(i),0)}(n.arrayValue);case 10:case 11:return function(r){let s=0;return pr(r.fields,(i,a)=>{s+=i.length+qi(a)}),s}(n.mapValue);default:throw ee(13486,{value:n})}}function ec(n){return!!n&&"integerValue"in n}function Jc(n){return!!n&&"arrayValue"in n}function Ah(n){return!!n&&"nullValue"in n}function bh(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Hi(n){return!!n&&"mapValue"in n}function Mv(n){var t,r;return((r=(((t=n==null?void 0:n.mapValue)==null?void 0:t.fields)||{})[Ep])==null?void 0:r.stringValue)===Ip}function Fs(n){if(n.geoPointValue)return{geoPointValue:{...n.geoPointValue}};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:{...n.timestampValue}};if(n.mapValue){const e={mapValue:{fields:{}}};return pr(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=Fs(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Fs(n.arrayValue.values[t]);return e}return{...n}}function Lv(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===Tp}/**
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
 */class mt{constructor(e){this.value=e}static empty(){return new mt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!Hi(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Fs(t)}setAll(e){let t=Ke.emptyPath(),r={},s=[];e.forEach((a,c)=>{if(!t.isImmediateParentOf(c)){const u=this.getFieldsMap(t);this.applyChanges(u,r,s),r={},s=[],t=c.popLast()}a?r[c.lastSegment()]=Fs(a):s.push(c.lastSegment())});const i=this.getFieldsMap(t);this.applyChanges(i,r,s)}delete(e){const t=this.field(e.popLast());Hi(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return zt(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=t.mapValue.fields[e.get(r)];Hi(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,r){pr(t,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new mt(Fs(this.value))}}function vp(n){const e=[];return pr(n.fields,(t,r)=>{const s=new Ke([t]);if(Hi(r)){const i=vp(r.mapValue).fields;if(i.length===0)e.push(s);else for(const a of i)e.push(s.child(a))}else e.push(s)}),new wt(e)}/**
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
 */class tt{constructor(e,t,r,s,i,a,c){this.key=e,this.documentType=t,this.version=r,this.readTime=s,this.createTime=i,this.data=a,this.documentState=c}static newInvalidDocument(e){return new tt(e,0,ne.min(),ne.min(),ne.min(),mt.empty(),0)}static newFoundDocument(e,t,r,s){return new tt(e,1,t,ne.min(),r,s,0)}static newNoDocument(e,t){return new tt(e,2,t,ne.min(),ne.min(),mt.empty(),0)}static newUnknownDocument(e,t){return new tt(e,3,t,ne.min(),ne.min(),mt.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(ne.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=mt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=mt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=ne.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof tt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new tt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class ho{constructor(e,t){this.position=e,this.inclusive=t}}function Sh(n,e,t){let r=0;for(let s=0;s<n.position.length;s++){const i=e[s],a=n.position[s];if(i.field.isKeyField()?r=Y.comparator(Y.fromName(a.referenceValue),t.key):r=Wr(a,t.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Rh(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!zt(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class fo{constructor(e,t="asc"){this.field=e,this.dir=t}}function Fv(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class wp{}class Me extends wp{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new Bv(e,t,r):t==="array-contains"?new qv(e,r):t==="in"?new Hv(e,r):t==="not-in"?new zv(e,r):t==="array-contains-any"?new Wv(e,r):new Me(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new jv(e,r):new $v(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(Wr(t,this.value)):t!==null&&Bn(this.value)===Bn(t)&&this.matchesComparison(Wr(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return ee(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Wt extends wp{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new Wt(e,t)}matches(e){return Ap(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function Ap(n){return n.op==="and"}function bp(n){return Uv(n)&&Ap(n)}function Uv(n){for(const e of n.filters)if(e instanceof Wt)return!1;return!0}function tc(n){if(n instanceof Me)return n.field.canonicalString()+n.op.toString()+Kr(n.value);if(bp(n))return n.filters.map(e=>tc(e)).join(",");{const e=n.filters.map(t=>tc(t)).join(",");return`${n.op}(${e})`}}function Sp(n,e){return n instanceof Me?function(r,s){return s instanceof Me&&r.op===s.op&&r.field.isEqual(s.field)&&zt(r.value,s.value)}(n,e):n instanceof Wt?function(r,s){return s instanceof Wt&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce((i,a,c)=>i&&Sp(a,s.filters[c]),!0):!1}(n,e):void ee(19439)}function Rp(n){return n instanceof Me?function(t){return`${t.field.canonicalString()} ${t.op} ${Kr(t.value)}`}(n):n instanceof Wt?function(t){return t.op.toString()+" {"+t.getFilters().map(Rp).join(" ,")+"}"}(n):"Filter"}class Bv extends Me{constructor(e,t,r){super(e,t,r),this.key=Y.fromName(r.referenceValue)}matches(e){const t=Y.comparator(e.key,this.key);return this.matchesComparison(t)}}class jv extends Me{constructor(e,t){super(e,"in",t),this.keys=Pp("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class $v extends Me{constructor(e,t){super(e,"not-in",t),this.keys=Pp("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function Pp(n,e){var t;return(((t=e.arrayValue)==null?void 0:t.values)||[]).map(r=>Y.fromName(r.referenceValue))}class qv extends Me{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Jc(t)&&ei(t.arrayValue,this.value)}}class Hv extends Me{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&ei(this.value.arrayValue,t)}}class zv extends Me{constructor(e,t){super(e,"not-in",t)}matches(e){if(ei(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!ei(this.value.arrayValue,t)}}class Wv extends Me{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Jc(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>ei(this.value.arrayValue,r))}}/**
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
 */class Kv{constructor(e,t=null,r=[],s=[],i=null,a=null,c=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=a,this.endAt=c,this.Te=null}}function Ph(n,e=null,t=[],r=[],s=null,i=null,a=null){return new Kv(n,e,t,r,s,i,a)}function Xc(n){const e=re(n);if(e.Te===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>tc(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Mo(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>Kr(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>Kr(r)).join(",")),e.Te=t}return e.Te}function Yc(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!Fv(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!Sp(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!Rh(n.startAt,e.startAt)&&Rh(n.endAt,e.endAt)}function nc(n){return Y.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class Fo{constructor(e,t=null,r=[],s=[],i=null,a="F",c=null,u=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=a,this.startAt=c,this.endAt=u,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function Gv(n,e,t,r,s,i,a,c){return new Fo(n,e,t,r,s,i,a,c)}function Zc(n){return new Fo(n)}function Ch(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Qv(n){return n.collectionGroup!==null}function Us(n){const e=re(n);if(e.Ie===null){e.Ie=[];const t=new Set;for(const i of e.explicitOrderBy)e.Ie.push(i),t.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let c=new Le(Ke.comparator);return a.filters.forEach(u=>{u.getFlattenedFilters().forEach(f=>{f.isInequality()&&(c=c.add(f.field))})}),c})(e).forEach(i=>{t.has(i.canonicalString())||i.isKeyField()||e.Ie.push(new fo(i,r))}),t.has(Ke.keyField().canonicalString())||e.Ie.push(new fo(Ke.keyField(),r))}return e.Ie}function Ft(n){const e=re(n);return e.Ee||(e.Ee=Jv(e,Us(n))),e.Ee}function Jv(n,e){if(n.limitType==="F")return Ph(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(s=>{const i=s.dir==="desc"?"asc":"desc";return new fo(s.field,i)});const t=n.endAt?new ho(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new ho(n.startAt.position,n.startAt.inclusive):null;return Ph(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function rc(n,e,t){return new Fo(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Uo(n,e){return Yc(Ft(n),Ft(e))&&n.limitType===e.limitType}function Cp(n){return`${Xc(Ft(n))}|lt:${n.limitType}`}function Cr(n){return`Query(target=${function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map(s=>Rp(s)).join(", ")}]`),Mo(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map(s=>function(a){return`${a.field.canonicalString()} (${a.dir})`}(s)).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map(s=>Kr(s)).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map(s=>Kr(s)).join(",")),`Target(${r})`}(Ft(n))}; limitType=${n.limitType})`}function Bo(n,e){return e.isFoundDocument()&&function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):Y.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)}(n,e)&&function(r,s){for(const i of Us(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(n,e)&&function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0}(n,e)&&function(r,s){return!(r.startAt&&!function(a,c,u){const f=Sh(a,c,u);return a.inclusive?f<=0:f<0}(r.startAt,Us(r),s)||r.endAt&&!function(a,c,u){const f=Sh(a,c,u);return a.inclusive?f>=0:f>0}(r.endAt,Us(r),s))}(n,e)}function Xv(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Vp(n){return(e,t)=>{let r=!1;for(const s of Us(n)){const i=Yv(s,e,t);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function Yv(n,e,t){const r=n.field.isKeyField()?Y.comparator(e.key,t.key):function(i,a,c){const u=a.data.field(i),f=c.data.field(i);return u!==null&&f!==null?Wr(u,f):ee(42886)}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return ee(19790,{direction:n.dir})}}/**
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
 */class gr{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[t]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){pr(this.inner,(t,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return dp(this.inner)}size(){return this.innerSize}}/**
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
 */const Zv=new Ce(Y.comparator);function un(){return Zv}const Dp=new Ce(Y.comparator);function Ss(...n){let e=Dp;for(const t of n)e=e.insert(t.key,t);return e}function kp(n){let e=Dp;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function nr(){return Bs()}function Np(){return Bs()}function Bs(){return new gr(n=>n.toString(),(n,e)=>n.isEqual(e))}const ew=new Ce(Y.comparator),tw=new Le(Y.comparator);function ue(...n){let e=tw;for(const t of n)e=e.add(t);return e}const nw=new Le(le);function rw(){return nw}/**
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
 */function el(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:co(e)?"-0":e}}function Op(n){return{integerValue:""+n}}function sw(n,e){return Dv(e)?Op(e):el(n,e)}/**
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
 */class jo{constructor(){this._=void 0}}function iw(n,e,t){return n instanceof po?function(s,i){const a={fields:{[mp]:{stringValue:gp},[yp]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&Qc(i)&&(i=Lo(i)),i&&(a.fields[_p]=i),{mapValue:a}}(t,e):n instanceof ti?Mp(n,e):n instanceof ni?Lp(n,e):function(s,i){const a=xp(s,i),c=Vh(a)+Vh(s.Ae);return ec(a)&&ec(s.Ae)?Op(c):el(s.serializer,c)}(n,e)}function ow(n,e,t){return n instanceof ti?Mp(n,e):n instanceof ni?Lp(n,e):t}function xp(n,e){return n instanceof go?function(r){return ec(r)||function(i){return!!i&&"doubleValue"in i}(r)}(e)?e:{integerValue:0}:null}class po extends jo{}class ti extends jo{constructor(e){super(),this.elements=e}}function Mp(n,e){const t=Fp(e);for(const r of n.elements)t.some(s=>zt(s,r))||t.push(r);return{arrayValue:{values:t}}}class ni extends jo{constructor(e){super(),this.elements=e}}function Lp(n,e){let t=Fp(e);for(const r of n.elements)t=t.filter(s=>!zt(s,r));return{arrayValue:{values:t}}}class go extends jo{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function Vh(n){return De(n.integerValue||n.doubleValue)}function Fp(n){return Jc(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function aw(n,e){return n.field.isEqual(e.field)&&function(r,s){return r instanceof ti&&s instanceof ti||r instanceof ni&&s instanceof ni?zr(r.elements,s.elements,zt):r instanceof go&&s instanceof go?zt(r.Ae,s.Ae):r instanceof po&&s instanceof po}(n.transform,e.transform)}class cw{constructor(e,t){this.version=e,this.transformResults=t}}class nn{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new nn}static exists(e){return new nn(void 0,e)}static updateTime(e){return new nn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function zi(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class $o{}function Up(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new jp(n.key,nn.none()):new fi(n.key,n.data,nn.none());{const t=n.data,r=mt.empty();let s=new Le(Ke.comparator);for(let i of e.fields)if(!s.has(i)){let a=t.field(i);a===null&&i.length>1&&(i=i.popLast(),a=t.field(i)),a===null?r.delete(i):r.set(i,a),s=s.add(i)}return new mr(n.key,r,new wt(s.toArray()),nn.none())}}function lw(n,e,t){n instanceof fi?function(s,i,a){const c=s.value.clone(),u=kh(s.fieldTransforms,i,a.transformResults);c.setAll(u),i.convertToFoundDocument(a.version,c).setHasCommittedMutations()}(n,e,t):n instanceof mr?function(s,i,a){if(!zi(s.precondition,i))return void i.convertToUnknownDocument(a.version);const c=kh(s.fieldTransforms,i,a.transformResults),u=i.data;u.setAll(Bp(s)),u.setAll(c),i.convertToFoundDocument(a.version,u).setHasCommittedMutations()}(n,e,t):function(s,i,a){i.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,t)}function js(n,e,t,r){return n instanceof fi?function(i,a,c,u){if(!zi(i.precondition,a))return c;const f=i.value.clone(),d=Nh(i.fieldTransforms,u,a);return f.setAll(d),a.convertToFoundDocument(a.version,f).setHasLocalMutations(),null}(n,e,t,r):n instanceof mr?function(i,a,c,u){if(!zi(i.precondition,a))return c;const f=Nh(i.fieldTransforms,u,a),d=a.data;return d.setAll(Bp(i)),d.setAll(f),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),c===null?null:c.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(g=>g.field))}(n,e,t,r):function(i,a,c){return zi(i.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):c}(n,e,t)}function uw(n,e){let t=null;for(const r of n.fieldTransforms){const s=e.data.field(r.field),i=xp(r.transform,s||null);i!=null&&(t===null&&(t=mt.empty()),t.set(r.field,i))}return t||null}function Dh(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&zr(r,s,(i,a)=>aw(i,a))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class fi extends $o{constructor(e,t,r,s=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class mr extends $o{constructor(e,t,r,s,i=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Bp(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function kh(n,e,t){const r=new Map;me(n.length===t.length,32656,{Re:t.length,Ve:n.length});for(let s=0;s<t.length;s++){const i=n[s],a=i.transform,c=e.data.field(i.field);r.set(i.field,ow(a,c,t[s]))}return r}function Nh(n,e,t){const r=new Map;for(const s of n){const i=s.transform,a=t.data.field(s.field);r.set(s.field,iw(i,a,e))}return r}class jp extends $o{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class hw extends $o{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class fw{constructor(e,t,r,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&lw(i,e,r[s])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=js(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=js(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=Np();return this.mutations.forEach(s=>{const i=e.get(s.key),a=i.overlayedDocument;let c=this.applyToLocalView(a,i.mutatedFields);c=t.has(s.key)?null:c;const u=Up(a,c);u!==null&&r.set(s.key,u),a.isValidDocument()||a.convertToNoDocument(ne.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),ue())}isEqual(e){return this.batchId===e.batchId&&zr(this.mutations,e.mutations,(t,r)=>Dh(t,r))&&zr(this.baseMutations,e.baseMutations,(t,r)=>Dh(t,r))}}class tl{constructor(e,t,r,s){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=s}static from(e,t,r){me(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let s=function(){return ew}();const i=e.mutations;for(let a=0;a<i.length;a++)s=s.insert(i[a].key,r[a].version);return new tl(e,t,r,s)}}/**
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
 */class dw{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class pw{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var ke,he;function gw(n){switch(n){case O.OK:return ee(64938);case O.CANCELLED:case O.UNKNOWN:case O.DEADLINE_EXCEEDED:case O.RESOURCE_EXHAUSTED:case O.INTERNAL:case O.UNAVAILABLE:case O.UNAUTHENTICATED:return!1;case O.INVALID_ARGUMENT:case O.NOT_FOUND:case O.ALREADY_EXISTS:case O.PERMISSION_DENIED:case O.FAILED_PRECONDITION:case O.ABORTED:case O.OUT_OF_RANGE:case O.UNIMPLEMENTED:case O.DATA_LOSS:return!0;default:return ee(15467,{code:n})}}function $p(n){if(n===void 0)return ln("GRPC error has no .code"),O.UNKNOWN;switch(n){case ke.OK:return O.OK;case ke.CANCELLED:return O.CANCELLED;case ke.UNKNOWN:return O.UNKNOWN;case ke.DEADLINE_EXCEEDED:return O.DEADLINE_EXCEEDED;case ke.RESOURCE_EXHAUSTED:return O.RESOURCE_EXHAUSTED;case ke.INTERNAL:return O.INTERNAL;case ke.UNAVAILABLE:return O.UNAVAILABLE;case ke.UNAUTHENTICATED:return O.UNAUTHENTICATED;case ke.INVALID_ARGUMENT:return O.INVALID_ARGUMENT;case ke.NOT_FOUND:return O.NOT_FOUND;case ke.ALREADY_EXISTS:return O.ALREADY_EXISTS;case ke.PERMISSION_DENIED:return O.PERMISSION_DENIED;case ke.FAILED_PRECONDITION:return O.FAILED_PRECONDITION;case ke.ABORTED:return O.ABORTED;case ke.OUT_OF_RANGE:return O.OUT_OF_RANGE;case ke.UNIMPLEMENTED:return O.UNIMPLEMENTED;case ke.DATA_LOSS:return O.DATA_LOSS;default:return ee(39323,{code:n})}}(he=ke||(ke={}))[he.OK=0]="OK",he[he.CANCELLED=1]="CANCELLED",he[he.UNKNOWN=2]="UNKNOWN",he[he.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",he[he.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",he[he.NOT_FOUND=5]="NOT_FOUND",he[he.ALREADY_EXISTS=6]="ALREADY_EXISTS",he[he.PERMISSION_DENIED=7]="PERMISSION_DENIED",he[he.UNAUTHENTICATED=16]="UNAUTHENTICATED",he[he.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",he[he.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",he[he.ABORTED=10]="ABORTED",he[he.OUT_OF_RANGE=11]="OUT_OF_RANGE",he[he.UNIMPLEMENTED=12]="UNIMPLEMENTED",he[he.INTERNAL=13]="INTERNAL",he[he.UNAVAILABLE=14]="UNAVAILABLE",he[he.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function mw(){return new TextEncoder}/**
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
 */const _w=new kn([4294967295,4294967295],0);function Oh(n){const e=mw().encode(n),t=new rp;return t.update(e),new Uint8Array(t.digest())}function xh(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new kn([t,r],0),new kn([s,i],0)]}class nl{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new Rs(`Invalid padding: ${t}`);if(r<0)throw new Rs(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Rs(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new Rs(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.pe=kn.fromNumber(this.ge)}ye(e,t,r){let s=e.add(t.multiply(kn.fromNumber(r)));return s.compare(_w)===1&&(s=new kn([s.getBits(0),s.getBits(1)],0)),s.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const t=Oh(e),[r,s]=xh(t);for(let i=0;i<this.hashCount;i++){const a=this.ye(r,s,i);if(!this.we(a))return!1}return!0}static create(e,t,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),a=new nl(i,s,t);return r.forEach(c=>a.insert(c)),a}insert(e){if(this.ge===0)return;const t=Oh(e),[r,s]=xh(t);for(let i=0;i<this.hashCount;i++){const a=this.ye(r,s,i);this.Se(a)}}Se(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class Rs extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class qo{constructor(e,t,r,s,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const s=new Map;return s.set(e,di.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new qo(ne.min(),s,new Ce(le),un(),ue())}}class di{constructor(e,t,r,s,i){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new di(r,t,ue(),ue(),ue())}}/**
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
 */class Wi{constructor(e,t,r,s){this.be=e,this.removedTargetIds=t,this.key=r,this.De=s}}class qp{constructor(e,t){this.targetId=e,this.Ce=t}}class Hp{constructor(e,t,r=Qe.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=s}}class Mh{constructor(){this.ve=0,this.Fe=Lh(),this.Me=Qe.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=ue(),t=ue(),r=ue();return this.Fe.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:r=r.add(s);break;default:ee(38017,{changeType:i})}}),new di(this.Me,this.xe,e,t,r)}qe(){this.Oe=!1,this.Fe=Lh()}Qe(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,me(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class yw{constructor(e){this.Ge=e,this.ze=new Map,this.je=un(),this.Je=Ni(),this.He=Ni(),this.Ye=new Ce(le)}Ze(e){for(const t of e.be)e.De&&e.De.isFoundDocument()?this.Xe(t,e.De):this.et(t,e.key,e.De);for(const t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,t=>{const r=this.nt(t);switch(e.state){case 0:this.rt(t)&&r.Le(e.resumeToken);break;case 1:r.Ke(),r.Ne||r.qe(),r.Le(e.resumeToken);break;case 2:r.Ke(),r.Ne||this.removeTarget(t);break;case 3:this.rt(t)&&(r.We(),r.Le(e.resumeToken));break;case 4:this.rt(t)&&(this.it(t),r.Le(e.resumeToken));break;default:ee(56790,{state:e.state})}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach((r,s)=>{this.rt(s)&&t(s)})}st(e){const t=e.targetId,r=e.Ce.count,s=this.ot(t);if(s){const i=s.target;if(nc(i))if(r===0){const a=new Y(i.path);this.et(t,a,tt.newNoDocument(a,ne.min()))}else me(r===1,20013,{expectedCount:r});else{const a=this._t(t);if(a!==r){const c=this.ut(e),u=c?this.ct(c,e,a):1;if(u!==0){this.it(t);const f=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(t,f)}}}}}ut(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=t;let a,c;try{a=Un(r).toUint8Array()}catch(u){if(u instanceof pp)return Hr("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{c=new nl(a,s,i)}catch(u){return Hr(u instanceof Rs?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return c.ge===0?null:c}ct(e,t,r){return t.Ce.count===r-this.Pt(e,t.targetId)?0:2}Pt(e,t){const r=this.Ge.getRemoteKeysForTarget(t);let s=0;return r.forEach(i=>{const a=this.Ge.ht(),c=`projects/${a.projectId}/databases/${a.database}/documents/${i.path.canonicalString()}`;e.mightContain(c)||(this.et(t,i,null),s++)}),s}Tt(e){const t=new Map;this.ze.forEach((i,a)=>{const c=this.ot(a);if(c){if(i.current&&nc(c.target)){const u=new Y(c.target.path);this.It(u).has(a)||this.Et(a,u)||this.et(a,u,tt.newNoDocument(u,e))}i.Be&&(t.set(a,i.ke()),i.qe())}});let r=ue();this.He.forEach((i,a)=>{let c=!0;a.forEachWhile(u=>{const f=this.ot(u);return!f||f.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)}),c&&(r=r.add(i))}),this.je.forEach((i,a)=>a.setReadTime(e));const s=new qo(e,t,this.Ye,this.je,r);return this.je=un(),this.Je=Ni(),this.He=Ni(),this.Ye=new Ce(le),s}Xe(e,t){if(!this.rt(e))return;const r=this.Et(e,t.key)?2:0;this.nt(e).Qe(t.key,r),this.je=this.je.insert(t.key,t),this.Je=this.Je.insert(t.key,this.It(t.key).add(e)),this.He=this.He.insert(t.key,this.dt(t.key).add(e))}et(e,t,r){if(!this.rt(e))return;const s=this.nt(e);this.Et(e,t)?s.Qe(t,1):s.$e(t),this.He=this.He.insert(t,this.dt(t).delete(e)),this.He=this.He.insert(t,this.dt(t).add(e)),r&&(this.je=this.je.insert(t,r))}removeTarget(e){this.ze.delete(e)}_t(e){const t=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let t=this.ze.get(e);return t||(t=new Mh,this.ze.set(e,t)),t}dt(e){let t=this.He.get(e);return t||(t=new Le(le),this.He=this.He.insert(e,t)),t}It(e){let t=this.Je.get(e);return t||(t=new Le(le),this.Je=this.Je.insert(e,t)),t}rt(e){const t=this.ot(e)!==null;return t||H("WatchChangeAggregator","Detected inactive target",e),t}ot(e){const t=this.ze.get(e);return t&&t.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new Mh),this.Ge.getRemoteKeysForTarget(e).forEach(t=>{this.et(e,t,null)})}Et(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}}function Ni(){return new Ce(Y.comparator)}function Lh(){return new Ce(Y.comparator)}const Ew=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),Tw=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),Iw=(()=>({and:"AND",or:"OR"}))();class vw{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function sc(n,e){return n.useProto3Json||Mo(e)?e:{value:e}}function mo(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function zp(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function ww(n,e){return mo(n,e.toTimestamp())}function Ut(n){return me(!!n,49232),ne.fromTimestamp(function(t){const r=Fn(t);return new Se(r.seconds,r.nanos)}(n))}function rl(n,e){return ic(n,e).canonicalString()}function ic(n,e){const t=function(s){return new Pe(["projects",s.projectId,"databases",s.database])}(n).child("documents");return e===void 0?t:t.child(e)}function Wp(n){const e=Pe.fromString(n);return me(Xp(e),10190,{key:e.toString()}),e}function oc(n,e){return rl(n.databaseId,e.path)}function Pa(n,e){const t=Wp(e);if(t.get(1)!==n.databaseId.projectId)throw new Q(O.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new Q(O.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new Y(Gp(t))}function Kp(n,e){return rl(n.databaseId,e)}function Aw(n){const e=Wp(n);return e.length===4?Pe.emptyPath():Gp(e)}function ac(n){return new Pe(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Gp(n){return me(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function Fh(n,e,t){return{name:oc(n,e),fields:t.value.mapValue.fields}}function bw(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(f){return f==="NO_CHANGE"?0:f==="ADD"?1:f==="REMOVE"?2:f==="CURRENT"?3:f==="RESET"?4:ee(39313,{state:f})}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(f,d){return f.useProto3Json?(me(d===void 0||typeof d=="string",58123),Qe.fromBase64String(d||"")):(me(d===void 0||d instanceof Buffer||d instanceof Uint8Array,16193),Qe.fromUint8Array(d||new Uint8Array))}(n,e.targetChange.resumeToken),a=e.targetChange.cause,c=a&&function(f){const d=f.code===void 0?O.UNKNOWN:$p(f.code);return new Q(d,f.message||"")}(a);t=new Hp(r,s,i,c||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Pa(n,r.document.name),i=Ut(r.document.updateTime),a=r.document.createTime?Ut(r.document.createTime):ne.min(),c=new mt({mapValue:{fields:r.document.fields}}),u=tt.newFoundDocument(s,i,a,c),f=r.targetIds||[],d=r.removedTargetIds||[];t=new Wi(f,d,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Pa(n,r.document),i=r.readTime?Ut(r.readTime):ne.min(),a=tt.newNoDocument(s,i),c=r.removedTargetIds||[];t=new Wi([],c,a.key,a)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Pa(n,r.document),i=r.removedTargetIds||[];t=new Wi([],i,s,null)}else{if(!("filter"in e))return ee(11601,{Rt:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,a=new pw(s,i),c=r.targetId;t=new qp(c,a)}}return t}function Sw(n,e){let t;if(e instanceof fi)t={update:Fh(n,e.key,e.value)};else if(e instanceof jp)t={delete:oc(n,e.key)};else if(e instanceof mr)t={update:Fh(n,e.key,e.data),updateMask:xw(e.fieldMask)};else{if(!(e instanceof hw))return ee(16599,{Vt:e.type});t={verify:oc(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(i,a){const c=a.transform;if(c instanceof po)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof ti)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof ni)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof go)return{fieldPath:a.field.canonicalString(),increment:c.Ae};throw ee(20930,{transform:a.transform})}(0,r))),e.precondition.isNone||(t.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:ww(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:ee(27497)}(n,e.precondition)),t}function Rw(n,e){return n&&n.length>0?(me(e!==void 0,14353),n.map(t=>function(s,i){let a=s.updateTime?Ut(s.updateTime):Ut(i);return a.isEqual(ne.min())&&(a=Ut(i)),new cw(a,s.transformResults||[])}(t,e))):[]}function Pw(n,e){return{documents:[Kp(n,e.path)]}}function Cw(n,e){const t={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=Kp(n,s);const i=function(f){if(f.length!==0)return Jp(Wt.create(f,"and"))}(e.filters);i&&(t.structuredQuery.where=i);const a=function(f){if(f.length!==0)return f.map(d=>function(E){return{field:Vr(E.field),direction:kw(E.dir)}}(d))}(e.orderBy);a&&(t.structuredQuery.orderBy=a);const c=sc(n,e.limit);return c!==null&&(t.structuredQuery.limit=c),e.startAt&&(t.structuredQuery.startAt=function(f){return{before:f.inclusive,values:f.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(f){return{before:!f.inclusive,values:f.position}}(e.endAt)),{ft:t,parent:s}}function Vw(n){let e=Aw(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let s=null;if(r>0){me(r===1,65062);const d=t.from[0];d.allDescendants?s=d.collectionId:e=e.child(d.collectionId)}let i=[];t.where&&(i=function(g){const E=Qp(g);return E instanceof Wt&&bp(E)?E.getFilters():[E]}(t.where));let a=[];t.orderBy&&(a=function(g){return g.map(E=>function(x){return new fo(Dr(x.field),function(B){switch(B){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(x.direction))}(E))}(t.orderBy));let c=null;t.limit&&(c=function(g){let E;return E=typeof g=="object"?g.value:g,Mo(E)?null:E}(t.limit));let u=null;t.startAt&&(u=function(g){const E=!!g.before,R=g.values||[];return new ho(R,E)}(t.startAt));let f=null;return t.endAt&&(f=function(g){const E=!g.before,R=g.values||[];return new ho(R,E)}(t.endAt)),Gv(e,s,a,i,c,"F",u,f)}function Dw(n,e){const t=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return ee(28987,{purpose:s})}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function Qp(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=Dr(t.unaryFilter.field);return Me.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=Dr(t.unaryFilter.field);return Me.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Dr(t.unaryFilter.field);return Me.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=Dr(t.unaryFilter.field);return Me.create(a,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return ee(61313);default:return ee(60726)}}(n):n.fieldFilter!==void 0?function(t){return Me.create(Dr(t.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return ee(58110);default:return ee(50506)}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return Wt.create(t.compositeFilter.filters.map(r=>Qp(r)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return ee(1026)}}(t.compositeFilter.op))}(n):ee(30097,{filter:n})}function kw(n){return Ew[n]}function Nw(n){return Tw[n]}function Ow(n){return Iw[n]}function Vr(n){return{fieldPath:n.canonicalString()}}function Dr(n){return Ke.fromServerFormat(n.fieldPath)}function Jp(n){return n instanceof Me?function(t){if(t.op==="=="){if(bh(t.value))return{unaryFilter:{field:Vr(t.field),op:"IS_NAN"}};if(Ah(t.value))return{unaryFilter:{field:Vr(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(bh(t.value))return{unaryFilter:{field:Vr(t.field),op:"IS_NOT_NAN"}};if(Ah(t.value))return{unaryFilter:{field:Vr(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Vr(t.field),op:Nw(t.op),value:t.value}}}(n):n instanceof Wt?function(t){const r=t.getFilters().map(s=>Jp(s));return r.length===1?r[0]:{compositeFilter:{op:Ow(t.op),filters:r}}}(n):ee(54877,{filter:n})}function xw(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function Xp(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class Pn{constructor(e,t,r,s,i=ne.min(),a=ne.min(),c=Qe.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=c,this.expectedCount=u}withSequenceNumber(e){return new Pn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Pn(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Pn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Pn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class Mw{constructor(e){this.yt=e}}function Lw(n){const e=Vw({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?rc(e,e.limit,"L"):e}/**
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
 */class Fw{constructor(){this.Cn=new Uw}addToCollectionParentIndex(e,t){return this.Cn.add(t),V.resolve()}getCollectionParents(e,t){return V.resolve(this.Cn.getEntries(t))}addFieldIndex(e,t){return V.resolve()}deleteFieldIndex(e,t){return V.resolve()}deleteAllFieldIndexes(e){return V.resolve()}createTargetIndexes(e,t){return V.resolve()}getDocumentsMatchingTarget(e,t){return V.resolve(null)}getIndexType(e,t){return V.resolve(0)}getFieldIndexes(e,t){return V.resolve([])}getNextCollectionGroupToUpdate(e){return V.resolve(null)}getMinOffset(e,t){return V.resolve(Ln.min())}getMinOffsetFromCollectionGroup(e,t){return V.resolve(Ln.min())}updateCollectionGroup(e,t,r){return V.resolve()}updateIndexEntries(e,t){return V.resolve()}}class Uw{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t]||new Le(Pe.comparator),i=!s.has(r);return this.index[t]=s.add(r),i}has(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t];return s&&s.has(r)}getEntries(e){return(this.index[e]||new Le(Pe.comparator)).toArray()}}/**
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
 */const Uh={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Yp=41943040;class ut{static withCacheSize(e){return new ut(e,ut.DEFAULT_COLLECTION_PERCENTILE,ut.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}/**
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
 */ut.DEFAULT_COLLECTION_PERCENTILE=10,ut.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,ut.DEFAULT=new ut(Yp,ut.DEFAULT_COLLECTION_PERCENTILE,ut.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),ut.DISABLED=new ut(-1,0,0);/**
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
 */class Gr{constructor(e){this.ar=e}next(){return this.ar+=2,this.ar}static ur(){return new Gr(0)}static cr(){return new Gr(-1)}}/**
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
 */const Bh="LruGarbageCollector",Bw=1048576;function jh([n,e],[t,r]){const s=le(n,t);return s===0?le(e,r):s}class jw{constructor(e){this.Ir=e,this.buffer=new Le(jh),this.Er=0}dr(){return++this.Er}Ar(e){const t=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();jh(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class $w{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){H(Bh,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){ts(t)?H(Bh,"Ignoring IndexedDB error during garbage collection: ",t):await es(t)}await this.Vr(3e5)})}}class qw{constructor(e,t){this.mr=e,this.params=t}calculateTargetCount(e,t){return this.mr.gr(e).next(r=>Math.floor(t/100*r))}nthSequenceNumber(e,t){if(t===0)return V.resolve(xo.ce);const r=new jw(t);return this.mr.forEachTarget(e,s=>r.Ar(s.sequenceNumber)).next(()=>this.mr.pr(e,s=>r.Ar(s))).next(()=>r.maxValue)}removeTargets(e,t,r){return this.mr.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.mr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(H("LruGarbageCollector","Garbage collection skipped; disabled"),V.resolve(Uh)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(H("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Uh):this.yr(e,t))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,t){let r,s,i,a,c,u,f;const d=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(g=>(g>this.params.maximumSequenceNumbersToCollect?(H("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${g}`),s=this.params.maximumSequenceNumbersToCollect):s=g,a=Date.now(),this.nthSequenceNumber(e,s))).next(g=>(r=g,c=Date.now(),this.removeTargets(e,r,t))).next(g=>(i=g,u=Date.now(),this.removeOrphanedDocuments(e,r))).next(g=>(f=Date.now(),Pr()<=ce.DEBUG&&H("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-d}ms
	Determined least recently used ${s} in `+(c-a)+`ms
	Removed ${i} targets in `+(u-c)+`ms
	Removed ${g} documents in `+(f-u)+`ms
Total Duration: ${f-d}ms`),V.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:g})))}}function Hw(n,e){return new qw(n,e)}/**
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
 */class zw{constructor(){this.changes=new gr(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,tt.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?V.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class Ww{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class Kw{constructor(e,t,r,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,t))).next(s=>(r!==null&&js(r.mutation,s,wt.empty(),Se.now()),s))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,ue()).next(()=>r))}getLocalViewOfDocuments(e,t,r=ue()){const s=nr();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,r).next(i=>{let a=Ss();return i.forEach((c,u)=>{a=a.insert(c,u.overlayedDocument)}),a}))}getOverlayedDocuments(e,t){const r=nr();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,ue()))}populateOverlays(e,t,r){const s=[];return r.forEach(i=>{t.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((a,c)=>{t.set(a,c)})})}computeViews(e,t,r,s){let i=un();const a=Bs(),c=function(){return Bs()}();return t.forEach((u,f)=>{const d=r.get(f.key);s.has(f.key)&&(d===void 0||d.mutation instanceof mr)?i=i.insert(f.key,f):d!==void 0?(a.set(f.key,d.mutation.getFieldMask()),js(d.mutation,f,d.mutation.getFieldMask(),Se.now())):a.set(f.key,wt.empty())}),this.recalculateAndSaveOverlays(e,i).next(u=>(u.forEach((f,d)=>a.set(f,d)),t.forEach((f,d)=>c.set(f,new Ww(d,a.get(f)??null))),c))}recalculateAndSaveOverlays(e,t){const r=Bs();let s=new Ce((a,c)=>a-c),i=ue();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(a=>{for(const c of a)c.keys().forEach(u=>{const f=t.get(u);if(f===null)return;let d=r.get(u)||wt.empty();d=c.applyToLocalView(f,d),r.set(u,d);const g=(s.get(c.batchId)||ue()).add(u);s=s.insert(c.batchId,g)})}).next(()=>{const a=[],c=s.getReverseIterator();for(;c.hasNext();){const u=c.getNext(),f=u.key,d=u.value,g=Np();d.forEach(E=>{if(!i.has(E)){const R=Up(t.get(E),r.get(E));R!==null&&g.set(E,R),i=i.add(E)}}),a.push(this.documentOverlayCache.saveOverlays(e,f,g))}return V.waitFor(a)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r,s){return function(a){return Y.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Qv(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,s):this.getDocumentsMatchingCollectionQuery(e,t,r,s)}getNextDocuments(e,t,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,s).next(i=>{const a=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,s-i.size):V.resolve(nr());let c=Xs,u=i;return a.next(f=>V.forEach(f,(d,g)=>(c<g.largestBatchId&&(c=g.largestBatchId),i.get(d)?V.resolve():this.remoteDocumentCache.getEntry(e,d).next(E=>{u=u.insert(d,E)}))).next(()=>this.populateOverlays(e,f,i)).next(()=>this.computeViews(e,u,f,ue())).next(d=>({batchId:c,changes:kp(d)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new Y(t)).next(r=>{let s=Ss();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,t,r,s){const i=t.collectionGroup;let a=Ss();return this.indexManager.getCollectionParents(e,i).next(c=>V.forEach(c,u=>{const f=function(g,E){return new Fo(E,null,g.explicitOrderBy.slice(),g.filters.slice(),g.limit,g.limitType,g.startAt,g.endAt)}(t,u.child(i));return this.getDocumentsMatchingCollectionQuery(e,f,r,s).next(d=>{d.forEach((g,E)=>{a=a.insert(g,E)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,t,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(a=>(i=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,i,s))).next(a=>{i.forEach((u,f)=>{const d=f.getKey();a.get(d)===null&&(a=a.insert(d,tt.newInvalidDocument(d)))});let c=Ss();return a.forEach((u,f)=>{const d=i.get(u);d!==void 0&&js(d.mutation,f,wt.empty(),Se.now()),Bo(t,f)&&(c=c.insert(u,f))}),c})}}/**
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
 */class Gw{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,t){return V.resolve(this.Lr.get(t))}saveBundleMetadata(e,t){return this.Lr.set(t.id,function(s){return{id:s.id,version:s.version,createTime:Ut(s.createTime)}}(t)),V.resolve()}getNamedQuery(e,t){return V.resolve(this.kr.get(t))}saveNamedQuery(e,t){return this.kr.set(t.name,function(s){return{name:s.name,query:Lw(s.bundledQuery),readTime:Ut(s.readTime)}}(t)),V.resolve()}}/**
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
 */class Qw{constructor(){this.overlays=new Ce(Y.comparator),this.qr=new Map}getOverlay(e,t){return V.resolve(this.overlays.get(t))}getOverlays(e,t){const r=nr();return V.forEach(t,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((s,i)=>{this.St(e,t,i)}),V.resolve()}removeOverlaysForBatchId(e,t,r){const s=this.qr.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.qr.delete(r)),V.resolve()}getOverlaysForCollection(e,t,r){const s=nr(),i=t.length+1,a=new Y(t.child("")),c=this.overlays.getIteratorFrom(a);for(;c.hasNext();){const u=c.getNext().value,f=u.getKey();if(!t.isPrefixOf(f.path))break;f.path.length===i&&u.largestBatchId>r&&s.set(u.getKey(),u)}return V.resolve(s)}getOverlaysForCollectionGroup(e,t,r,s){let i=new Ce((f,d)=>f-d);const a=this.overlays.getIterator();for(;a.hasNext();){const f=a.getNext().value;if(f.getKey().getCollectionGroup()===t&&f.largestBatchId>r){let d=i.get(f.largestBatchId);d===null&&(d=nr(),i=i.insert(f.largestBatchId,d)),d.set(f.getKey(),f)}}const c=nr(),u=i.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((f,d)=>c.set(f,d)),!(c.size()>=s)););return V.resolve(c)}St(e,t,r){const s=this.overlays.get(r.key);if(s!==null){const a=this.qr.get(s.largestBatchId).delete(r.key);this.qr.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new dw(t,r));let i=this.qr.get(t);i===void 0&&(i=ue(),this.qr.set(t,i)),this.qr.set(t,i.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jw{constructor(){this.sessionToken=Qe.EMPTY_BYTE_STRING}getSessionToken(e){return V.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,V.resolve()}}/**
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
 */class sl{constructor(){this.Qr=new Le($e.$r),this.Ur=new Le($e.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,t){const r=new $e(e,t);this.Qr=this.Qr.add(r),this.Ur=this.Ur.add(r)}Wr(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.Gr(new $e(e,t))}zr(e,t){e.forEach(r=>this.removeReference(r,t))}jr(e){const t=new Y(new Pe([])),r=new $e(t,e),s=new $e(t,e+1),i=[];return this.Ur.forEachInRange([r,s],a=>{this.Gr(a),i.push(a.key)}),i}Jr(){this.Qr.forEach(e=>this.Gr(e))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const t=new Y(new Pe([])),r=new $e(t,e),s=new $e(t,e+1);let i=ue();return this.Ur.forEachInRange([r,s],a=>{i=i.add(a.key)}),i}containsKey(e){const t=new $e(e,0),r=this.Qr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class $e{constructor(e,t){this.key=e,this.Yr=t}static $r(e,t){return Y.comparator(e.key,t.key)||le(e.Yr,t.Yr)}static Kr(e,t){return le(e.Yr,t.Yr)||Y.comparator(e.key,t.key)}}/**
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
 */class Xw{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.tr=1,this.Zr=new Le($e.$r)}checkEmpty(e){return V.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,s){const i=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new fw(i,t,r,s);this.mutationQueue.push(a);for(const c of s)this.Zr=this.Zr.add(new $e(c.key,i)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return V.resolve(a)}lookupMutationBatch(e,t){return V.resolve(this.Xr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,s=this.ei(r),i=s<0?0:s;return V.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return V.resolve(this.mutationQueue.length===0?Gc:this.tr-1)}getAllMutationBatches(e){return V.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new $e(t,0),s=new $e(t,Number.POSITIVE_INFINITY),i=[];return this.Zr.forEachInRange([r,s],a=>{const c=this.Xr(a.Yr);i.push(c)}),V.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new Le(le);return t.forEach(s=>{const i=new $e(s,0),a=new $e(s,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([i,a],c=>{r=r.add(c.Yr)})}),V.resolve(this.ti(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,s=r.length+1;let i=r;Y.isDocumentKey(i)||(i=i.child(""));const a=new $e(new Y(i),0);let c=new Le(le);return this.Zr.forEachWhile(u=>{const f=u.key.path;return!!r.isPrefixOf(f)&&(f.length===s&&(c=c.add(u.Yr)),!0)},a),V.resolve(this.ti(c))}ti(e){const t=[];return e.forEach(r=>{const s=this.Xr(r);s!==null&&t.push(s)}),t}removeMutationBatch(e,t){me(this.ni(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Zr;return V.forEach(t.mutations,s=>{const i=new $e(s.key,t.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Zr=r})}ir(e){}containsKey(e,t){const r=new $e(t,0),s=this.Zr.firstAfterOrEqual(r);return V.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,V.resolve()}ni(e,t){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const t=this.ei(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class Yw{constructor(e){this.ri=e,this.docs=function(){return new Ce(Y.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,s=this.docs.get(r),i=s?s.size:0,a=this.ri(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:a}),this.size+=a-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return V.resolve(r?r.document.mutableCopy():tt.newInvalidDocument(t))}getEntries(e,t){let r=un();return t.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():tt.newInvalidDocument(s))}),V.resolve(r)}getDocumentsMatchingQuery(e,t,r,s){let i=un();const a=t.path,c=new Y(a.child("__id-9223372036854775808__")),u=this.docs.getIteratorFrom(c);for(;u.hasNext();){const{key:f,value:{document:d}}=u.getNext();if(!a.isPrefixOf(f.path))break;f.path.length>a.length+1||Rv(Sv(d),r)<=0||(s.has(d.key)||Bo(t,d))&&(i=i.insert(d.key,d.mutableCopy()))}return V.resolve(i)}getAllFromCollectionGroup(e,t,r,s){ee(9500)}ii(e,t){return V.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new Zw(this)}getSize(e){return V.resolve(this.size)}}class Zw extends zw{constructor(e){super(),this.Nr=e}applyChanges(e){const t=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?t.push(this.Nr.addEntry(e,s)):this.Nr.removeEntry(r)}),V.waitFor(t)}getFromCache(e,t){return this.Nr.getEntry(e,t)}getAllFromCache(e,t){return this.Nr.getEntries(e,t)}}/**
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
 */class eA{constructor(e){this.persistence=e,this.si=new gr(t=>Xc(t),Yc),this.lastRemoteSnapshotVersion=ne.min(),this.highestTargetId=0,this.oi=0,this._i=new sl,this.targetCount=0,this.ai=Gr.ur()}forEachTarget(e,t){return this.si.forEach((r,s)=>t(s)),V.resolve()}getLastRemoteSnapshotVersion(e){return V.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return V.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),V.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.oi&&(this.oi=t),V.resolve()}Pr(e){this.si.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.ai=new Gr(t),this.highestTargetId=t),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,t){return this.Pr(t),this.targetCount+=1,V.resolve()}updateTargetData(e,t){return this.Pr(t),V.resolve()}removeTargetData(e,t){return this.si.delete(t.target),this._i.jr(t.targetId),this.targetCount-=1,V.resolve()}removeTargets(e,t,r){let s=0;const i=[];return this.si.forEach((a,c)=>{c.sequenceNumber<=t&&r.get(c.targetId)===null&&(this.si.delete(a),i.push(this.removeMatchingKeysForTargetId(e,c.targetId)),s++)}),V.waitFor(i).next(()=>s)}getTargetCount(e){return V.resolve(this.targetCount)}getTargetData(e,t){const r=this.si.get(t)||null;return V.resolve(r)}addMatchingKeys(e,t,r){return this._i.Wr(t,r),V.resolve()}removeMatchingKeys(e,t,r){this._i.zr(t,r);const s=this.persistence.referenceDelegate,i=[];return s&&t.forEach(a=>{i.push(s.markPotentiallyOrphaned(e,a))}),V.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this._i.jr(t),V.resolve()}getMatchingKeysForTargetId(e,t){const r=this._i.Hr(t);return V.resolve(r)}containsKey(e,t){return V.resolve(this._i.containsKey(t))}}/**
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
 */class Zp{constructor(e,t){this.ui={},this.overlays={},this.ci=new xo(0),this.li=!1,this.li=!0,this.hi=new Jw,this.referenceDelegate=e(this),this.Pi=new eA(this),this.indexManager=new Fw,this.remoteDocumentCache=function(s){return new Yw(s)}(r=>this.referenceDelegate.Ti(r)),this.serializer=new Mw(t),this.Ii=new Gw(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new Qw,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.ui[e.toKey()];return r||(r=new Xw(t,this.referenceDelegate),this.ui[e.toKey()]=r),r}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,t,r){H("MemoryPersistence","Starting transaction:",e);const s=new tA(this.ci.next());return this.referenceDelegate.Ei(),r(s).next(i=>this.referenceDelegate.di(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Ai(e,t){return V.or(Object.values(this.ui).map(r=>()=>r.containsKey(e,t)))}}class tA extends Cv{constructor(e){super(),this.currentSequenceNumber=e}}class il{constructor(e){this.persistence=e,this.Ri=new sl,this.Vi=null}static mi(e){return new il(e)}get fi(){if(this.Vi)return this.Vi;throw ee(60996)}addReference(e,t,r){return this.Ri.addReference(r,t),this.fi.delete(r.toString()),V.resolve()}removeReference(e,t,r){return this.Ri.removeReference(r,t),this.fi.add(r.toString()),V.resolve()}markPotentiallyOrphaned(e,t){return this.fi.add(t.toString()),V.resolve()}removeTarget(e,t){this.Ri.jr(t.targetId).forEach(s=>this.fi.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(s=>{s.forEach(i=>this.fi.add(i.toString()))}).next(()=>r.removeTargetData(e,t))}Ei(){this.Vi=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return V.forEach(this.fi,r=>{const s=Y.fromPath(r);return this.gi(e,s).next(i=>{i||t.removeEntry(s,ne.min())})}).next(()=>(this.Vi=null,t.apply(e)))}updateLimboDocument(e,t){return this.gi(e,t).next(r=>{r?this.fi.delete(t.toString()):this.fi.add(t.toString())})}Ti(e){return 0}gi(e,t){return V.or([()=>V.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ai(e,t)])}}class _o{constructor(e,t){this.persistence=e,this.pi=new gr(r=>kv(r.path),(r,s)=>r.isEqual(s)),this.garbageCollector=Hw(this,t)}static mi(e,t){return new _o(e,t)}Ei(){}di(e){return V.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}gr(e){const t=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>t.next(s=>r+s))}wr(e){let t=0;return this.pr(e,r=>{t++}).next(()=>t)}pr(e,t){return V.forEach(this.pi,(r,s)=>this.br(e,r,s).next(i=>i?V.resolve():t(s)))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.ii(e,a=>this.br(e,a,t).next(c=>{c||(r++,i.removeEntry(a,ne.min()))})).next(()=>i.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,t){return this.pi.set(t,e.currentSequenceNumber),V.resolve()}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.pi.set(r,e.currentSequenceNumber),V.resolve()}removeReference(e,t,r){return this.pi.set(r,e.currentSequenceNumber),V.resolve()}updateLimboDocument(e,t){return this.pi.set(t,e.currentSequenceNumber),V.resolve()}Ti(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=qi(e.data.value)),t}br(e,t,r){return V.or([()=>this.persistence.Ai(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const s=this.pi.get(t);return V.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class ol{constructor(e,t,r,s){this.targetId=e,this.fromCache=t,this.Es=r,this.ds=s}static As(e,t){let r=ue(),s=ue();for(const i of t.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new ol(e,t.fromCache,r,s)}}/**
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
 */class nA{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class rA{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=function(){return Gy()?8:Vv(nt())>0?6:4}()}initialize(e,t){this.ps=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,r,s){const i={result:null};return this.ys(e,t).next(a=>{i.result=a}).next(()=>{if(!i.result)return this.ws(e,t,s,r).next(a=>{i.result=a})}).next(()=>{if(i.result)return;const a=new nA;return this.Ss(e,t,a).next(c=>{if(i.result=c,this.Vs)return this.bs(e,t,a,c.size)})}).next(()=>i.result)}bs(e,t,r,s){return r.documentReadCount<this.fs?(Pr()<=ce.DEBUG&&H("QueryEngine","SDK will not create cache indexes for query:",Cr(t),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),V.resolve()):(Pr()<=ce.DEBUG&&H("QueryEngine","Query:",Cr(t),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.gs*s?(Pr()<=ce.DEBUG&&H("QueryEngine","The SDK decides to create cache indexes for query:",Cr(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Ft(t))):V.resolve())}ys(e,t){if(Ch(t))return V.resolve(null);let r=Ft(t);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(t.limit!==null&&s===1&&(t=rc(t,null,"F"),r=Ft(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const a=ue(...i);return this.ps.getDocuments(e,a).next(c=>this.indexManager.getMinOffset(e,r).next(u=>{const f=this.Ds(t,c);return this.Cs(t,f,a,u.readTime)?this.ys(e,rc(t,null,"F")):this.vs(e,f,t,u)}))})))}ws(e,t,r,s){return Ch(t)||s.isEqual(ne.min())?V.resolve(null):this.ps.getDocuments(e,r).next(i=>{const a=this.Ds(t,i);return this.Cs(t,a,r,s)?V.resolve(null):(Pr()<=ce.DEBUG&&H("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Cr(t)),this.vs(e,a,t,bv(s,Xs)).next(c=>c))})}Ds(e,t){let r=new Le(Vp(e));return t.forEach((s,i)=>{Bo(e,i)&&(r=r.add(i))}),r}Cs(e,t,r,s){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Ss(e,t,r){return Pr()<=ce.DEBUG&&H("QueryEngine","Using full collection scan to execute query:",Cr(t)),this.ps.getDocumentsMatchingQuery(e,t,Ln.min(),r)}vs(e,t,r,s){return this.ps.getDocumentsMatchingQuery(e,r,s).next(i=>(t.forEach(a=>{i=i.insert(a.key,a)}),i))}}/**
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
 */const al="LocalStore",sA=3e8;class iA{constructor(e,t,r,s){this.persistence=e,this.Fs=t,this.serializer=s,this.Ms=new Ce(le),this.xs=new gr(i=>Xc(i),Yc),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(r)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Kw(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Ms))}}function oA(n,e,t,r){return new iA(n,e,t,r)}async function eg(n,e){const t=re(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let s;return t.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,t.Bs(e),t.mutationQueue.getAllMutationBatches(r))).next(i=>{const a=[],c=[];let u=ue();for(const f of s){a.push(f.batchId);for(const d of f.mutations)u=u.add(d.key)}for(const f of i){c.push(f.batchId);for(const d of f.mutations)u=u.add(d.key)}return t.localDocuments.getDocuments(r,u).next(f=>({Ls:f,removedBatchIds:a,addedBatchIds:c}))})})}function aA(n,e){const t=re(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=t.Ns.newChangeBuffer({trackRemovals:!0});return function(c,u,f,d){const g=f.batch,E=g.keys();let R=V.resolve();return E.forEach(x=>{R=R.next(()=>d.getEntry(u,x)).next(U=>{const B=f.docVersions.get(x);me(B!==null,48541),U.version.compareTo(B)<0&&(g.applyToRemoteDocument(U,f),U.isValidDocument()&&(U.setReadTime(f.commitVersion),d.addEntry(U)))})}),R.next(()=>c.mutationQueue.removeMutationBatch(u,g))}(t,r,e,i).next(()=>i.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(c){let u=ue();for(let f=0;f<c.mutationResults.length;++f)c.mutationResults[f].transformResults.length>0&&(u=u.add(c.batch.mutations[f].key));return u}(e))).next(()=>t.localDocuments.getDocuments(r,s))})}function tg(n){const e=re(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Pi.getLastRemoteSnapshotVersion(t))}function cA(n,e){const t=re(n),r=e.snapshotVersion;let s=t.Ms;return t.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const a=t.Ns.newChangeBuffer({trackRemovals:!0});s=t.Ms;const c=[];e.targetChanges.forEach((d,g)=>{const E=s.get(g);if(!E)return;c.push(t.Pi.removeMatchingKeys(i,d.removedDocuments,g).next(()=>t.Pi.addMatchingKeys(i,d.addedDocuments,g)));let R=E.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(g)!==null?R=R.withResumeToken(Qe.EMPTY_BYTE_STRING,ne.min()).withLastLimboFreeSnapshotVersion(ne.min()):d.resumeToken.approximateByteSize()>0&&(R=R.withResumeToken(d.resumeToken,r)),s=s.insert(g,R),function(U,B,z){return U.resumeToken.approximateByteSize()===0||B.snapshotVersion.toMicroseconds()-U.snapshotVersion.toMicroseconds()>=sA?!0:z.addedDocuments.size+z.modifiedDocuments.size+z.removedDocuments.size>0}(E,R,d)&&c.push(t.Pi.updateTargetData(i,R))});let u=un(),f=ue();if(e.documentUpdates.forEach(d=>{e.resolvedLimboDocuments.has(d)&&c.push(t.persistence.referenceDelegate.updateLimboDocument(i,d))}),c.push(lA(i,a,e.documentUpdates).next(d=>{u=d.ks,f=d.qs})),!r.isEqual(ne.min())){const d=t.Pi.getLastRemoteSnapshotVersion(i).next(g=>t.Pi.setTargetsMetadata(i,i.currentSequenceNumber,r));c.push(d)}return V.waitFor(c).next(()=>a.apply(i)).next(()=>t.localDocuments.getLocalViewOfDocuments(i,u,f)).next(()=>u)}).then(i=>(t.Ms=s,i))}function lA(n,e,t){let r=ue(),s=ue();return t.forEach(i=>r=r.add(i)),e.getEntries(n,r).next(i=>{let a=un();return t.forEach((c,u)=>{const f=i.get(c);u.isFoundDocument()!==f.isFoundDocument()&&(s=s.add(c)),u.isNoDocument()&&u.version.isEqual(ne.min())?(e.removeEntry(c,u.readTime),a=a.insert(c,u)):!f.isValidDocument()||u.version.compareTo(f.version)>0||u.version.compareTo(f.version)===0&&f.hasPendingWrites?(e.addEntry(u),a=a.insert(c,u)):H(al,"Ignoring outdated watch update for ",c,". Current version:",f.version," Watch version:",u.version)}),{ks:a,qs:s}})}function uA(n,e){const t=re(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=Gc),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function hA(n,e){const t=re(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return t.Pi.getTargetData(r,e).next(i=>i?(s=i,V.resolve(s)):t.Pi.allocateTargetId(r).next(a=>(s=new Pn(e,a,"TargetPurposeListen",r.currentSequenceNumber),t.Pi.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=t.Ms.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.Ms=t.Ms.insert(r.targetId,r),t.xs.set(e,r.targetId)),r})}async function cc(n,e,t){const r=re(n),s=r.Ms.get(e),i=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",i,a=>r.persistence.referenceDelegate.removeTarget(a,s))}catch(a){if(!ts(a))throw a;H(al,`Failed to update sequence numbers for target ${e}: ${a}`)}r.Ms=r.Ms.remove(e),r.xs.delete(s.target)}function $h(n,e,t){const r=re(n);let s=ne.min(),i=ue();return r.persistence.runTransaction("Execute query","readwrite",a=>function(u,f,d){const g=re(u),E=g.xs.get(d);return E!==void 0?V.resolve(g.Ms.get(E)):g.Pi.getTargetData(f,d)}(r,a,Ft(e)).next(c=>{if(c)return s=c.lastLimboFreeSnapshotVersion,r.Pi.getMatchingKeysForTargetId(a,c.targetId).next(u=>{i=u})}).next(()=>r.Fs.getDocumentsMatchingQuery(a,e,t?s:ne.min(),t?i:ue())).next(c=>(fA(r,Xv(e),c),{documents:c,Qs:i})))}function fA(n,e,t){let r=n.Os.get(e)||ne.min();t.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),n.Os.set(e,r)}class qh{constructor(){this.activeTargetIds=rw()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class dA{constructor(){this.Mo=new qh,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,t,r){this.xo[e]=t}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new qh,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class pA{Oo(e){}shutdown(){}}/**
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
 */const Hh="ConnectivityMonitor";class zh{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){H(Hh,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){H(Hh,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Oi=null;function lc(){return Oi===null?Oi=function(){return 268435456+Math.round(2147483648*Math.random())}():Oi++,"0x"+Oi.toString(16)}/**
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
 */const Ca="RestConnection",gA={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class mA{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.Uo=t+"://"+e.host,this.Ko=`projects/${r}/databases/${s}`,this.Wo=this.databaseId.database===lo?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Go(e,t,r,s,i){const a=lc(),c=this.zo(e,t.toUriEncodedString());H(Ca,`Sending RPC '${e}' ${a}:`,c,r);const u={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(u,s,i);const{host:f}=new URL(c),d=Jr(f);return this.Jo(e,c,u,r,d).then(g=>(H(Ca,`Received RPC '${e}' ${a}: `,g),g),g=>{throw Hr(Ca,`RPC '${e}' ${a} failed with error: `,g,"url: ",c,"request:",r),g})}Ho(e,t,r,s,i,a){return this.Go(e,t,r,s,i)}jo(e,t,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Zr}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}zo(e,t){const r=gA[e];return`${this.Uo}/v1/${t}:${r}`}terminate(){}}/**
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
 */class _A{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
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
 */const Ye="WebChannelConnection";class yA extends mA{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,t,r,s,i){const a=lc();return new Promise((c,u)=>{const f=new sp;f.setWithCredentials(!0),f.listenOnce(ip.COMPLETE,()=>{try{switch(f.getLastErrorCode()){case $i.NO_ERROR:const g=f.getResponseJson();H(Ye,`XHR for RPC '${e}' ${a} received:`,JSON.stringify(g)),c(g);break;case $i.TIMEOUT:H(Ye,`RPC '${e}' ${a} timed out`),u(new Q(O.DEADLINE_EXCEEDED,"Request time out"));break;case $i.HTTP_ERROR:const E=f.getStatus();if(H(Ye,`RPC '${e}' ${a} failed with status:`,E,"response text:",f.getResponseText()),E>0){let R=f.getResponseJson();Array.isArray(R)&&(R=R[0]);const x=R==null?void 0:R.error;if(x&&x.status&&x.message){const U=function(z){const K=z.toLowerCase().replace(/_/g,"-");return Object.values(O).indexOf(K)>=0?K:O.UNKNOWN}(x.status);u(new Q(U,x.message))}else u(new Q(O.UNKNOWN,"Server responded with status "+f.getStatus()))}else u(new Q(O.UNAVAILABLE,"Connection failed."));break;default:ee(9055,{l_:e,streamId:a,h_:f.getLastErrorCode(),P_:f.getLastError()})}}finally{H(Ye,`RPC '${e}' ${a} completed.`)}});const d=JSON.stringify(s);H(Ye,`RPC '${e}' ${a} sending request:`,s),f.send(t,"POST",d,r,15)})}T_(e,t,r){const s=lc(),i=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=cp(),c=ap(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},f=this.longPollingOptions.timeoutSeconds;f!==void 0&&(u.longPollingTimeout=Math.round(1e3*f)),this.useFetchStreams&&(u.useFetchStreams=!0),this.jo(u.initMessageHeaders,t,r),u.encodeInitMessageHeaders=!0;const d=i.join("");H(Ye,`Creating RPC '${e}' stream ${s}: ${d}`,u);const g=a.createWebChannel(d,u);this.I_(g);let E=!1,R=!1;const x=new _A({Yo:B=>{R?H(Ye,`Not sending because RPC '${e}' stream ${s} is closed:`,B):(E||(H(Ye,`Opening RPC '${e}' stream ${s} transport.`),g.open(),E=!0),H(Ye,`RPC '${e}' stream ${s} sending:`,B),g.send(B))},Zo:()=>g.close()}),U=(B,z,K)=>{B.listen(z,J=>{try{K(J)}catch(W){setTimeout(()=>{throw W},0)}})};return U(g,bs.EventType.OPEN,()=>{R||(H(Ye,`RPC '${e}' stream ${s} transport opened.`),x.o_())}),U(g,bs.EventType.CLOSE,()=>{R||(R=!0,H(Ye,`RPC '${e}' stream ${s} transport closed`),x.a_(),this.E_(g))}),U(g,bs.EventType.ERROR,B=>{R||(R=!0,Hr(Ye,`RPC '${e}' stream ${s} transport errored. Name:`,B.name,"Message:",B.message),x.a_(new Q(O.UNAVAILABLE,"The operation could not be completed")))}),U(g,bs.EventType.MESSAGE,B=>{var z;if(!R){const K=B.data[0];me(!!K,16349);const J=K,W=(J==null?void 0:J.error)||((z=J[0])==null?void 0:z.error);if(W){H(Ye,`RPC '${e}' stream ${s} received error:`,W);const fe=W.status;let Ee=function(T){const w=ke[T];if(w!==void 0)return $p(w)}(fe),v=W.message;Ee===void 0&&(Ee=O.INTERNAL,v="Unknown error status: "+fe+" with message "+W.message),R=!0,x.a_(new Q(Ee,v)),g.close()}else H(Ye,`RPC '${e}' stream ${s} received:`,K),x.u_(K)}}),U(c,op.STAT_EVENT,B=>{B.stat===Xa.PROXY?H(Ye,`RPC '${e}' stream ${s} detected buffering proxy`):B.stat===Xa.NOPROXY&&H(Ye,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{x.__()},0),x}terminate(){this.c_.forEach(e=>e.close()),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter(t=>t===e)}}function Va(){return typeof document<"u"?document:null}/**
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
 */function Ho(n){return new vw(n,!0)}/**
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
 */class ng{constructor(e,t,r=1e3,s=1.5,i=6e4){this.Mi=e,this.timerId=t,this.d_=r,this.A_=s,this.R_=i,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const t=Math.floor(this.V_+this.y_()),r=Math.max(0,Date.now()-this.f_),s=Math.max(0,t-r);s>0&&H("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.V_} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,s,()=>(this.f_=Date.now(),e())),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
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
 */const Wh="PersistentStream";class rg{constructor(e,t,r,s,i,a,c,u){this.Mi=e,this.S_=r,this.b_=s,this.connection=i,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=c,this.listener=u,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new ng(e,t)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,()=>this.k_()))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():t&&t.code===O.RESOURCE_EXHAUSTED?(ln(t.toString()),ln("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===O.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(t)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.D_===t&&this.G_(r,s)},r=>{e(()=>{const s=new Q(O.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(s)})})}G_(e,t){const r=this.W_(this.D_);this.stream=this.j_(e,t),this.stream.Xo(()=>{r(()=>this.listener.Xo())}),this.stream.t_(()=>{r(()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,()=>(this.O_()&&(this.state=3),Promise.resolve())),this.listener.t_()))}),this.stream.r_(s=>{r(()=>this.z_(s))}),this.stream.onMessage(s=>{r(()=>++this.F_==1?this.J_(s):this.onNext(s))})}N_(){this.state=5,this.M_.p_(async()=>{this.state=0,this.start()})}z_(e){return H(Wh,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return t=>{this.Mi.enqueueAndForget(()=>this.D_===e?t():(H(Wh,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class EA extends rg{constructor(e,t,r,s,i,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,s,a),this.serializer=i}j_(e,t){return this.connection.T_("Listen",e,t)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const t=bw(this.serializer,e),r=function(i){if(!("targetChange"in i))return ne.min();const a=i.targetChange;return a.targetIds&&a.targetIds.length?ne.min():a.readTime?Ut(a.readTime):ne.min()}(e);return this.listener.H_(t,r)}Y_(e){const t={};t.database=ac(this.serializer),t.addTarget=function(i,a){let c;const u=a.target;if(c=nc(u)?{documents:Pw(i,u)}:{query:Cw(i,u).ft},c.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){c.resumeToken=zp(i,a.resumeToken);const f=sc(i,a.expectedCount);f!==null&&(c.expectedCount=f)}else if(a.snapshotVersion.compareTo(ne.min())>0){c.readTime=mo(i,a.snapshotVersion.toTimestamp());const f=sc(i,a.expectedCount);f!==null&&(c.expectedCount=f)}return c}(this.serializer,e);const r=Dw(this.serializer,e);r&&(t.labels=r),this.q_(t)}Z_(e){const t={};t.database=ac(this.serializer),t.removeTarget=e,this.q_(t)}}class TA extends rg{constructor(e,t,r,s,i,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,s,a),this.serializer=i}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,t){return this.connection.T_("Write",e,t)}J_(e){return me(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,me(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){me(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const t=Rw(e.writeResults,e.commitTime),r=Ut(e.commitTime);return this.listener.na(r,t)}ra(){const e={};e.database=ac(this.serializer),this.q_(e)}ea(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>Sw(this.serializer,r))};this.q_(t)}}/**
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
 */class IA{}class vA extends IA{constructor(e,t,r,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=s,this.ia=!1}sa(){if(this.ia)throw new Q(O.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,t,r,s){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,a])=>this.connection.Go(e,ic(t,r),s,i,a)).catch(i=>{throw i.name==="FirebaseError"?(i.code===O.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new Q(O.UNKNOWN,i.toString())})}Ho(e,t,r,s,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,c])=>this.connection.Ho(e,ic(t,r),s,a,c,i)).catch(a=>{throw a.name==="FirebaseError"?(a.code===O.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new Q(O.UNKNOWN,a.toString())})}terminate(){this.ia=!0,this.connection.terminate()}}class wA{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve())))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(ln(t),this.aa=!1):H("OnlineStateTracker",t)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
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
 */const fr="RemoteStore";class AA{constructor(e,t,r,s,i){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=i,this.Aa.Oo(a=>{r.enqueueAndForget(async()=>{_r(this)&&(H(fr,"Restarting streams for network reachability change."),await async function(u){const f=re(u);f.Ea.add(4),await pi(f),f.Ra.set("Unknown"),f.Ea.delete(4),await zo(f)}(this))})}),this.Ra=new wA(r,s)}}async function zo(n){if(_r(n))for(const e of n.da)await e(!0)}async function pi(n){for(const e of n.da)await e(!1)}function sg(n,e){const t=re(n);t.Ia.has(e.targetId)||(t.Ia.set(e.targetId,e),hl(t)?ul(t):ns(t).O_()&&ll(t,e))}function cl(n,e){const t=re(n),r=ns(t);t.Ia.delete(e),r.O_()&&ig(t,e),t.Ia.size===0&&(r.O_()?r.L_():_r(t)&&t.Ra.set("Unknown"))}function ll(n,e){if(n.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(ne.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}ns(n).Y_(e)}function ig(n,e){n.Va.Ue(e),ns(n).Z_(e)}function ul(n){n.Va=new yw({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),At:e=>n.Ia.get(e)||null,ht:()=>n.datastore.serializer.databaseId}),ns(n).start(),n.Ra.ua()}function hl(n){return _r(n)&&!ns(n).x_()&&n.Ia.size>0}function _r(n){return re(n).Ea.size===0}function og(n){n.Va=void 0}async function bA(n){n.Ra.set("Online")}async function SA(n){n.Ia.forEach((e,t)=>{ll(n,e)})}async function RA(n,e){og(n),hl(n)?(n.Ra.ha(e),ul(n)):n.Ra.set("Unknown")}async function PA(n,e,t){if(n.Ra.set("Online"),e instanceof Hp&&e.state===2&&e.cause)try{await async function(s,i){const a=i.cause;for(const c of i.targetIds)s.Ia.has(c)&&(await s.remoteSyncer.rejectListen(c,a),s.Ia.delete(c),s.Va.removeTarget(c))}(n,e)}catch(r){H(fr,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await yo(n,r)}else if(e instanceof Wi?n.Va.Ze(e):e instanceof qp?n.Va.st(e):n.Va.tt(e),!t.isEqual(ne.min()))try{const r=await tg(n.localStore);t.compareTo(r)>=0&&await function(i,a){const c=i.Va.Tt(a);return c.targetChanges.forEach((u,f)=>{if(u.resumeToken.approximateByteSize()>0){const d=i.Ia.get(f);d&&i.Ia.set(f,d.withResumeToken(u.resumeToken,a))}}),c.targetMismatches.forEach((u,f)=>{const d=i.Ia.get(u);if(!d)return;i.Ia.set(u,d.withResumeToken(Qe.EMPTY_BYTE_STRING,d.snapshotVersion)),ig(i,u);const g=new Pn(d.target,u,f,d.sequenceNumber);ll(i,g)}),i.remoteSyncer.applyRemoteEvent(c)}(n,t)}catch(r){H(fr,"Failed to raise snapshot:",r),await yo(n,r)}}async function yo(n,e,t){if(!ts(e))throw e;n.Ea.add(1),await pi(n),n.Ra.set("Offline"),t||(t=()=>tg(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{H(fr,"Retrying IndexedDB access"),await t(),n.Ea.delete(1),await zo(n)})}function ag(n,e){return e().catch(t=>yo(n,t,e))}async function Wo(n){const e=re(n),t=jn(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:Gc;for(;CA(e);)try{const s=await uA(e.localStore,r);if(s===null){e.Ta.length===0&&t.L_();break}r=s.batchId,VA(e,s)}catch(s){await yo(e,s)}cg(e)&&lg(e)}function CA(n){return _r(n)&&n.Ta.length<10}function VA(n,e){n.Ta.push(e);const t=jn(n);t.O_()&&t.X_&&t.ea(e.mutations)}function cg(n){return _r(n)&&!jn(n).x_()&&n.Ta.length>0}function lg(n){jn(n).start()}async function DA(n){jn(n).ra()}async function kA(n){const e=jn(n);for(const t of n.Ta)e.ea(t.mutations)}async function NA(n,e,t){const r=n.Ta.shift(),s=tl.from(r,e,t);await ag(n,()=>n.remoteSyncer.applySuccessfulWrite(s)),await Wo(n)}async function OA(n,e){e&&jn(n).X_&&await async function(r,s){if(function(a){return gw(a)&&a!==O.ABORTED}(s.code)){const i=r.Ta.shift();jn(r).B_(),await ag(r,()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s)),await Wo(r)}}(n,e),cg(n)&&lg(n)}async function Kh(n,e){const t=re(n);t.asyncQueue.verifyOperationInProgress(),H(fr,"RemoteStore received new credentials");const r=_r(t);t.Ea.add(3),await pi(t),r&&t.Ra.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ea.delete(3),await zo(t)}async function xA(n,e){const t=re(n);e?(t.Ea.delete(2),await zo(t)):e||(t.Ea.add(2),await pi(t),t.Ra.set("Unknown"))}function ns(n){return n.ma||(n.ma=function(t,r,s){const i=re(t);return i.sa(),new EA(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{Xo:bA.bind(null,n),t_:SA.bind(null,n),r_:RA.bind(null,n),H_:PA.bind(null,n)}),n.da.push(async e=>{e?(n.ma.B_(),hl(n)?ul(n):n.Ra.set("Unknown")):(await n.ma.stop(),og(n))})),n.ma}function jn(n){return n.fa||(n.fa=function(t,r,s){const i=re(t);return i.sa(),new TA(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(n.datastore,n.asyncQueue,{Xo:()=>Promise.resolve(),t_:DA.bind(null,n),r_:OA.bind(null,n),ta:kA.bind(null,n),na:NA.bind(null,n)}),n.da.push(async e=>{e?(n.fa.B_(),await Wo(n)):(await n.fa.stop(),n.Ta.length>0&&(H(fr,`Stopping write stream with ${n.Ta.length} pending writes`),n.Ta=[]))})),n.fa}/**
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
 */class fl{constructor(e,t,r,s,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new Nn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(a=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,s,i){const a=Date.now()+r,c=new fl(e,t,a,s,i);return c.start(r),c}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new Q(O.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function dl(n,e){if(ln("AsyncQueue",`${e}: ${n}`),ts(n))return new Q(O.UNAVAILABLE,`${e}: ${n}`);throw n}/**
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
 */class Ur{static emptySet(e){return new Ur(e.comparator)}constructor(e){this.comparator=e?(t,r)=>e(t,r)||Y.comparator(t.key,r.key):(t,r)=>Y.comparator(t.key,r.key),this.keyedMap=Ss(),this.sortedSet=new Ce(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Ur)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new Ur;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
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
 */class Gh{constructor(){this.ga=new Ce(Y.comparator)}track(e){const t=e.doc.key,r=this.ga.get(t);r?e.type!==0&&r.type===3?this.ga=this.ga.insert(t,e):e.type===3&&r.type!==1?this.ga=this.ga.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.ga=this.ga.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.ga=this.ga.remove(t):e.type===1&&r.type===2?this.ga=this.ga.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):ee(63341,{Rt:e,pa:r}):this.ga=this.ga.insert(t,e)}ya(){const e=[];return this.ga.inorderTraversal((t,r)=>{e.push(r)}),e}}class Qr{constructor(e,t,r,s,i,a,c,u,f){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=a,this.syncStateChanged=c,this.excludesMetadataChanges=u,this.hasCachedResults=f}static fromInitialDocuments(e,t,r,s,i){const a=[];return t.forEach(c=>{a.push({type:0,doc:c})}),new Qr(e,t,Ur.emptySet(t),a,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Uo(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==r[s].type||!t[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class MA{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some(e=>e.Da())}}class LA{constructor(){this.queries=Qh(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(t,r){const s=re(t),i=s.queries;s.queries=Qh(),i.forEach((a,c)=>{for(const u of c.Sa)u.onError(r)})})(this,new Q(O.ABORTED,"Firestore shutting down"))}}function Qh(){return new gr(n=>Cp(n),Uo)}async function FA(n,e){const t=re(n);let r=3;const s=e.query;let i=t.queries.get(s);i?!i.ba()&&e.Da()&&(r=2):(i=new MA,r=e.Da()?0:1);try{switch(r){case 0:i.wa=await t.onListen(s,!0);break;case 1:i.wa=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(a){const c=dl(a,`Initialization of query '${Cr(e.query)}' failed`);return void e.onError(c)}t.queries.set(s,i),i.Sa.push(e),e.va(t.onlineState),i.wa&&e.Fa(i.wa)&&pl(t)}async function UA(n,e){const t=re(n),r=e.query;let s=3;const i=t.queries.get(r);if(i){const a=i.Sa.indexOf(e);a>=0&&(i.Sa.splice(a,1),i.Sa.length===0?s=e.Da()?0:1:!i.ba()&&e.Da()&&(s=2))}switch(s){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function BA(n,e){const t=re(n);let r=!1;for(const s of e){const i=s.query,a=t.queries.get(i);if(a){for(const c of a.Sa)c.Fa(s)&&(r=!0);a.wa=s}}r&&pl(t)}function jA(n,e,t){const r=re(n),s=r.queries.get(e);if(s)for(const i of s.Sa)i.onError(t);r.queries.delete(e)}function pl(n){n.Ca.forEach(e=>{e.next()})}var uc,Jh;(Jh=uc||(uc={})).Ma="default",Jh.Cache="cache";class $A{constructor(e,t,r){this.query=e,this.xa=t,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Qr(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),t=!0):this.La(e,this.onlineState)&&(this.ka(e),t=!0),this.Na=e,t}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let t=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),t=!0),t}La(e,t){if(!e.fromCache||!this.Da())return!0;const r=t!=="Offline";return(!this.options.qa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const t=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}ka(e){e=Qr.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==uc.Cache}}/**
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
 */class ug{constructor(e){this.key=e}}class hg{constructor(e){this.key=e}}class qA{constructor(e,t){this.query=e,this.Ya=t,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=ue(),this.mutatedKeys=ue(),this.eu=Vp(e),this.tu=new Ur(this.eu)}get nu(){return this.Ya}ru(e,t){const r=t?t.iu:new Gh,s=t?t.tu:this.tu;let i=t?t.mutatedKeys:this.mutatedKeys,a=s,c=!1;const u=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,f=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((d,g)=>{const E=s.get(d),R=Bo(this.query,g)?g:null,x=!!E&&this.mutatedKeys.has(E.key),U=!!R&&(R.hasLocalMutations||this.mutatedKeys.has(R.key)&&R.hasCommittedMutations);let B=!1;E&&R?E.data.isEqual(R.data)?x!==U&&(r.track({type:3,doc:R}),B=!0):this.su(E,R)||(r.track({type:2,doc:R}),B=!0,(u&&this.eu(R,u)>0||f&&this.eu(R,f)<0)&&(c=!0)):!E&&R?(r.track({type:0,doc:R}),B=!0):E&&!R&&(r.track({type:1,doc:E}),B=!0,(u||f)&&(c=!0)),B&&(R?(a=a.add(R),i=U?i.add(d):i.delete(d)):(a=a.delete(d),i=i.delete(d)))}),this.query.limit!==null)for(;a.size>this.query.limit;){const d=this.query.limitType==="F"?a.last():a.first();a=a.delete(d.key),i=i.delete(d.key),r.track({type:1,doc:d})}return{tu:a,iu:r,Cs:c,mutatedKeys:i}}su(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,s){const i=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const a=e.iu.ya();a.sort((d,g)=>function(R,x){const U=B=>{switch(B){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return ee(20277,{Rt:B})}};return U(R)-U(x)}(d.type,g.type)||this.eu(d.doc,g.doc)),this.ou(r),s=s??!1;const c=t&&!s?this._u():[],u=this.Xa.size===0&&this.current&&!s?1:0,f=u!==this.Za;return this.Za=u,a.length!==0||f?{snapshot:new Qr(this.query,e.tu,i,a,e.mutatedKeys,u===0,f,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:c}:{au:c}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new Gh,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach(t=>this.Ya=this.Ya.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Ya=this.Ya.delete(t)),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=ue(),this.tu.forEach(r=>{this.uu(r.key)&&(this.Xa=this.Xa.add(r.key))});const t=[];return e.forEach(r=>{this.Xa.has(r)||t.push(new hg(r))}),this.Xa.forEach(r=>{e.has(r)||t.push(new ug(r))}),t}cu(e){this.Ya=e.Qs,this.Xa=ue();const t=this.ru(e.documents);return this.applyChanges(t,!0)}lu(){return Qr.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const gl="SyncEngine";class HA{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class zA{constructor(e){this.key=e,this.hu=!1}}class WA{constructor(e,t,r,s,i,a){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=a,this.Pu={},this.Tu=new gr(c=>Cp(c),Uo),this.Iu=new Map,this.Eu=new Set,this.du=new Ce(Y.comparator),this.Au=new Map,this.Ru=new sl,this.Vu={},this.mu=new Map,this.fu=Gr.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function KA(n,e,t=!0){const r=_g(n);let s;const i=r.Tu.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.lu()):s=await fg(r,e,t,!0),s}async function GA(n,e){const t=_g(n);await fg(t,e,!0,!1)}async function fg(n,e,t,r){const s=await hA(n.localStore,Ft(e)),i=s.targetId,a=n.sharedClientState.addLocalQueryTarget(i,t);let c;return r&&(c=await QA(n,e,i,a==="current",s.resumeToken)),n.isPrimaryClient&&t&&sg(n.remoteStore,s),c}async function QA(n,e,t,r,s){n.pu=(g,E,R)=>async function(U,B,z,K){let J=B.view.ru(z);J.Cs&&(J=await $h(U.localStore,B.query,!1).then(({documents:v})=>B.view.ru(v,J)));const W=K&&K.targetChanges.get(B.targetId),fe=K&&K.targetMismatches.get(B.targetId)!=null,Ee=B.view.applyChanges(J,U.isPrimaryClient,W,fe);return Yh(U,B.targetId,Ee.au),Ee.snapshot}(n,g,E,R);const i=await $h(n.localStore,e,!0),a=new qA(e,i.Qs),c=a.ru(i.documents),u=di.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",s),f=a.applyChanges(c,n.isPrimaryClient,u);Yh(n,t,f.au);const d=new HA(e,t,a);return n.Tu.set(e,d),n.Iu.has(t)?n.Iu.get(t).push(e):n.Iu.set(t,[e]),f.snapshot}async function JA(n,e,t){const r=re(n),s=r.Tu.get(e),i=r.Iu.get(s.targetId);if(i.length>1)return r.Iu.set(s.targetId,i.filter(a=>!Uo(a,e))),void r.Tu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await cc(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),t&&cl(r.remoteStore,s.targetId),hc(r,s.targetId)}).catch(es)):(hc(r,s.targetId),await cc(r.localStore,s.targetId,!0))}async function XA(n,e){const t=re(n),r=t.Tu.get(e),s=t.Iu.get(r.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),cl(t.remoteStore,r.targetId))}async function YA(n,e,t){const r=i0(n);try{const s=await function(a,c){const u=re(a),f=Se.now(),d=c.reduce((R,x)=>R.add(x.key),ue());let g,E;return u.persistence.runTransaction("Locally write mutations","readwrite",R=>{let x=un(),U=ue();return u.Ns.getEntries(R,d).next(B=>{x=B,x.forEach((z,K)=>{K.isValidDocument()||(U=U.add(z))})}).next(()=>u.localDocuments.getOverlayedDocuments(R,x)).next(B=>{g=B;const z=[];for(const K of c){const J=uw(K,g.get(K.key).overlayedDocument);J!=null&&z.push(new mr(K.key,J,vp(J.value.mapValue),nn.exists(!0)))}return u.mutationQueue.addMutationBatch(R,f,z,c)}).next(B=>{E=B;const z=B.applyToLocalDocumentSet(g,U);return u.documentOverlayCache.saveOverlays(R,B.batchId,z)})}).then(()=>({batchId:E.batchId,changes:kp(g)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(a,c,u){let f=a.Vu[a.currentUser.toKey()];f||(f=new Ce(le)),f=f.insert(c,u),a.Vu[a.currentUser.toKey()]=f}(r,s.batchId,t),await gi(r,s.changes),await Wo(r.remoteStore)}catch(s){const i=dl(s,"Failed to persist write");t.reject(i)}}async function dg(n,e){const t=re(n);try{const r=await cA(t.localStore,e);e.targetChanges.forEach((s,i)=>{const a=t.Au.get(i);a&&(me(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?a.hu=!0:s.modifiedDocuments.size>0?me(a.hu,14607):s.removedDocuments.size>0&&(me(a.hu,42227),a.hu=!1))}),await gi(t,r,e)}catch(r){await es(r)}}function Xh(n,e,t){const r=re(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const s=[];r.Tu.forEach((i,a)=>{const c=a.view.va(e);c.snapshot&&s.push(c.snapshot)}),function(a,c){const u=re(a);u.onlineState=c;let f=!1;u.queries.forEach((d,g)=>{for(const E of g.Sa)E.va(c)&&(f=!0)}),f&&pl(u)}(r.eventManager,e),s.length&&r.Pu.H_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function ZA(n,e,t){const r=re(n);r.sharedClientState.updateQueryState(e,"rejected",t);const s=r.Au.get(e),i=s&&s.key;if(i){let a=new Ce(Y.comparator);a=a.insert(i,tt.newNoDocument(i,ne.min()));const c=ue().add(i),u=new qo(ne.min(),new Map,new Ce(le),a,c);await dg(r,u),r.du=r.du.remove(i),r.Au.delete(e),ml(r)}else await cc(r.localStore,e,!1).then(()=>hc(r,e,t)).catch(es)}async function e0(n,e){const t=re(n),r=e.batch.batchId;try{const s=await aA(t.localStore,e);gg(t,r,null),pg(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await gi(t,s)}catch(s){await es(s)}}async function t0(n,e,t){const r=re(n);try{const s=await function(a,c){const u=re(a);return u.persistence.runTransaction("Reject batch","readwrite-primary",f=>{let d;return u.mutationQueue.lookupMutationBatch(f,c).next(g=>(me(g!==null,37113),d=g.keys(),u.mutationQueue.removeMutationBatch(f,g))).next(()=>u.mutationQueue.performConsistencyCheck(f)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(f,d,c)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(f,d)).next(()=>u.localDocuments.getDocuments(f,d))})}(r.localStore,e);gg(r,e,t),pg(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await gi(r,s)}catch(s){await es(s)}}function pg(n,e){(n.mu.get(e)||[]).forEach(t=>{t.resolve()}),n.mu.delete(e)}function gg(n,e,t){const r=re(n);let s=r.Vu[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(t?i.reject(t):i.resolve(),s=s.remove(e)),r.Vu[r.currentUser.toKey()]=s}}function hc(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Iu.get(e))n.Tu.delete(r),t&&n.Pu.yu(r,t);n.Iu.delete(e),n.isPrimaryClient&&n.Ru.jr(e).forEach(r=>{n.Ru.containsKey(r)||mg(n,r)})}function mg(n,e){n.Eu.delete(e.path.canonicalString());const t=n.du.get(e);t!==null&&(cl(n.remoteStore,t),n.du=n.du.remove(e),n.Au.delete(t),ml(n))}function Yh(n,e,t){for(const r of t)r instanceof ug?(n.Ru.addReference(r.key,e),n0(n,r)):r instanceof hg?(H(gl,"Document no longer in limbo: "+r.key),n.Ru.removeReference(r.key,e),n.Ru.containsKey(r.key)||mg(n,r.key)):ee(19791,{wu:r})}function n0(n,e){const t=e.key,r=t.path.canonicalString();n.du.get(t)||n.Eu.has(r)||(H(gl,"New document in limbo: "+t),n.Eu.add(r),ml(n))}function ml(n){for(;n.Eu.size>0&&n.du.size<n.maxConcurrentLimboResolutions;){const e=n.Eu.values().next().value;n.Eu.delete(e);const t=new Y(Pe.fromString(e)),r=n.fu.next();n.Au.set(r,new zA(t)),n.du=n.du.insert(t,r),sg(n.remoteStore,new Pn(Ft(Zc(t.path)),r,"TargetPurposeLimboResolution",xo.ce))}}async function gi(n,e,t){const r=re(n),s=[],i=[],a=[];r.Tu.isEmpty()||(r.Tu.forEach((c,u)=>{a.push(r.pu(u,e,t).then(f=>{var d;if((f||t)&&r.isPrimaryClient){const g=f?!f.fromCache:(d=t==null?void 0:t.targetChanges.get(u.targetId))==null?void 0:d.current;r.sharedClientState.updateQueryState(u.targetId,g?"current":"not-current")}if(f){s.push(f);const g=ol.As(u.targetId,f);i.push(g)}}))}),await Promise.all(a),r.Pu.H_(s),await async function(u,f){const d=re(u);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",g=>V.forEach(f,E=>V.forEach(E.Es,R=>d.persistence.referenceDelegate.addReference(g,E.targetId,R)).next(()=>V.forEach(E.ds,R=>d.persistence.referenceDelegate.removeReference(g,E.targetId,R)))))}catch(g){if(!ts(g))throw g;H(al,"Failed to update sequence numbers: "+g)}for(const g of f){const E=g.targetId;if(!g.fromCache){const R=d.Ms.get(E),x=R.snapshotVersion,U=R.withLastLimboFreeSnapshotVersion(x);d.Ms=d.Ms.insert(E,U)}}}(r.localStore,i))}async function r0(n,e){const t=re(n);if(!t.currentUser.isEqual(e)){H(gl,"User change. New user:",e.toKey());const r=await eg(t.localStore,e);t.currentUser=e,function(i,a){i.mu.forEach(c=>{c.forEach(u=>{u.reject(new Q(O.CANCELLED,a))})}),i.mu.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await gi(t,r.Ls)}}function s0(n,e){const t=re(n),r=t.Au.get(e);if(r&&r.hu)return ue().add(r.key);{let s=ue();const i=t.Iu.get(e);if(!i)return s;for(const a of i){const c=t.Tu.get(a);s=s.unionWith(c.view.nu)}return s}}function _g(n){const e=re(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=dg.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=s0.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=ZA.bind(null,e),e.Pu.H_=BA.bind(null,e.eventManager),e.Pu.yu=jA.bind(null,e.eventManager),e}function i0(n){const e=re(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=e0.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=t0.bind(null,e),e}class Eo{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Ho(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,t){return null}Mu(e,t){return null}vu(e){return oA(this.persistence,new rA,e.initialUser,this.serializer)}Cu(e){return new Zp(il.mi,this.serializer)}Du(e){return new dA}async terminate(){var e,t;(e=this.gcScheduler)==null||e.stop(),(t=this.indexBackfillerScheduler)==null||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}Eo.provider={build:()=>new Eo};class o0 extends Eo{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,t){me(this.persistence.referenceDelegate instanceof _o,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new $w(r,e.asyncQueue,t)}Cu(e){const t=this.cacheSizeBytes!==void 0?ut.withCacheSize(this.cacheSizeBytes):ut.DEFAULT;return new Zp(r=>_o.mi(r,t),this.serializer)}}class fc{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Xh(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=r0.bind(null,this.syncEngine),await xA(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new LA}()}createDatastore(e){const t=Ho(e.databaseInfo.databaseId),r=function(i){return new yA(i)}(e.databaseInfo);return function(i,a,c,u){return new vA(i,a,c,u)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return function(r,s,i,a,c){return new AA(r,s,i,a,c)}(this.localStore,this.datastore,e.asyncQueue,t=>Xh(this.syncEngine,t,0),function(){return zh.v()?new zh:new pA}())}createSyncEngine(e,t){return function(s,i,a,c,u,f,d){const g=new WA(s,i,a,c,u,f);return d&&(g.gu=!0),g}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(s){const i=re(s);H(fr,"RemoteStore shutting down."),i.Ea.add(5),await pi(i),i.Aa.shutdown(),i.Ra.set("Unknown")}(this.remoteStore),(e=this.datastore)==null||e.terminate(),(t=this.eventManager)==null||t.terminate()}}fc.provider={build:()=>new fc};/**
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
 */class a0{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):ln("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
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
 */const $n="FirestoreClient";class c0{constructor(e,t,r,s,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=s,this.user=Ze.UNAUTHENTICATED,this.clientId=Wc.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,async a=>{H($n,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>(H($n,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Nn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=dl(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Da(n,e){n.asyncQueue.verifyOperationInProgress(),H($n,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async s=>{r.isEqual(s)||(await eg(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function Zh(n,e){n.asyncQueue.verifyOperationInProgress();const t=await l0(n);H($n,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(r=>Kh(e.remoteStore,r)),n.setAppCheckTokenChangeListener((r,s)=>Kh(e.remoteStore,s)),n._onlineComponents=e}async function l0(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){H($n,"Using user provided OfflineComponentProvider");try{await Da(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(s){return s.name==="FirebaseError"?s.code===O.FAILED_PRECONDITION||s.code===O.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(t))throw t;Hr("Error using user provided cache. Falling back to memory cache: "+t),await Da(n,new Eo)}}else H($n,"Using default OfflineComponentProvider"),await Da(n,new o0(void 0));return n._offlineComponents}async function yg(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(H($n,"Using user provided OnlineComponentProvider"),await Zh(n,n._uninitializedComponentsProvider._online)):(H($n,"Using default OnlineComponentProvider"),await Zh(n,new fc))),n._onlineComponents}function u0(n){return yg(n).then(e=>e.syncEngine)}async function h0(n){const e=await yg(n),t=e.eventManager;return t.onListen=KA.bind(null,e.syncEngine),t.onUnlisten=JA.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=GA.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=XA.bind(null,e.syncEngine),t}function f0(n,e,t={}){const r=new Nn;return n.asyncQueue.enqueueAndForget(async()=>function(i,a,c,u,f){const d=new a0({next:E=>{d.Nu(),a.enqueueAndForget(()=>UA(i,g));const R=E.docs.has(c);!R&&E.fromCache?f.reject(new Q(O.UNAVAILABLE,"Failed to get document because the client is offline.")):R&&E.fromCache&&u&&u.source==="server"?f.reject(new Q(O.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):f.resolve(E)},error:E=>f.reject(E)}),g=new $A(Zc(c.path),d,{includeMetadataChanges:!0,qa:!0});return FA(i,g)}(await h0(n),n.asyncQueue,e,t,r)),r.promise}/**
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
 */function Eg(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
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
 */const ef=new Map;/**
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
 */const Tg="firestore.googleapis.com",tf=!0;class nf{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new Q(O.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Tg,this.ssl=tf}else this.host=e.host,this.ssl=e.ssl??tf;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Yp;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<Bw)throw new Q(O.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Av("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Eg(e.experimentalLongPollingOptions??{}),function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new Q(O.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new Q(O.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new Q(O.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,s){return r.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class _l{constructor(e,t,r,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new nf({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new Q(O.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new Q(O.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new nf(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new dv;switch(r.type){case"firstParty":return new _v(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new Q(O.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const r=ef.get(t);r&&(H("ComponentProvider","Removing Datastore"),ef.delete(t),r.terminate())}(this),Promise.resolve()}}function d0(n,e,t,r={}){var f;n=Js(n,_l);const s=Jr(e),i=n._getSettings(),a={...i,emulatorOptions:n._getEmulatorOptions()},c=`${e}:${t}`;s&&(Ed(`https://${c}`),Td("Firestore",!0)),i.host!==Tg&&i.host!==c&&Hr("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const u={...i,host:c,ssl:s,emulatorOptions:r};if(!cr(u,a)&&(n._setSettings(u),r.mockUserToken)){let d,g;if(typeof r.mockUserToken=="string")d=r.mockUserToken,g=Ze.MOCK_USER;else{d=Uy(r.mockUserToken,(f=n._app)==null?void 0:f.options.projectId);const E=r.mockUserToken.sub||r.mockUserToken.user_id;if(!E)throw new Q(O.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");g=new Ze(E)}n._authCredentials=new pv(new up(d,g))}}/**
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
 */class yl{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new yl(this.firestore,e,this._query)}}class qe{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ri(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new qe(this.firestore,e,this._key)}toJSON(){return{type:qe._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,r){if(hi(t,qe._jsonSchema))return new qe(e,r||null,new Y(Pe.fromString(t.referencePath)))}}qe._jsonSchemaVersion="firestore/documentReference/1.0",qe._jsonSchema={type:Ne("string",qe._jsonSchemaVersion),referencePath:Ne("string")};class ri extends yl{constructor(e,t,r){super(e,t,Zc(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new qe(this.firestore,null,new Y(e))}withConverter(e){return new ri(this.firestore,e,this._path)}}function rf(n,e,...t){if(n=qt(n),arguments.length===1&&(e=Wc.newId()),wv("doc","path",e),n instanceof _l){const r=Pe.fromString(e,...t);return mh(r),new qe(n,null,new Y(r))}{if(!(n instanceof qe||n instanceof ri))throw new Q(O.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(Pe.fromString(e,...t));return mh(r),new qe(n.firestore,n instanceof ri?n.converter:null,new Y(r))}}/**
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
 */const sf="AsyncQueue";class of{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new ng(this,"async_queue_retry"),this._c=()=>{const r=Va();r&&H(sf,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const t=Va();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const t=Va();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise(()=>{});const t=new Nn;return this.cc(()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Xu.push(e),this.lc()))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!ts(e))throw e;H(sf,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_(()=>this.lc())}}cc(e){const t=this.ac.then(()=>(this.rc=!0,e().catch(r=>{throw this.nc=r,this.rc=!1,ln("INTERNAL UNHANDLED ERROR: ",af(r)),r}).then(r=>(this.rc=!1,r))));return this.ac=t,t}enqueueAfterDelay(e,t,r){this.uc(),this.oc.indexOf(e)>-1&&(t=0);const s=fl.createAndSchedule(this,e,t,r,i=>this.hc(i));return this.tc.push(s),s}uc(){this.nc&&ee(47125,{Pc:af(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const t of this.tc)if(t.timerId===e)return!0;return!1}Ec(e){return this.Tc().then(()=>{this.tc.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.tc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Tc()})}dc(e){this.oc.push(e)}hc(e){const t=this.tc.indexOf(e);this.tc.splice(t,1)}}function af(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}class El extends _l{constructor(e,t,r,s){super(e,t,r,s),this.type="firestore",this._queue=new of,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new of(e),this._firestoreClient=void 0,await e}}}function p0(n,e){const t=typeof n=="object"?n:Ad(),r=typeof n=="string"?n:e||lo,s=Oc(t,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=Ly("firestore");i&&d0(s,...i)}return s}function Ig(n){if(n._terminated)throw new Q(O.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||g0(n),n._firestoreClient}function g0(n){var r,s,i;const e=n._freezeSettings(),t=function(c,u,f,d){return new xv(c,u,f,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,Eg(d.experimentalLongPollingOptions),d.useFetchStreams,d.isUsingEmulator)}(n._databaseId,((r=n._app)==null?void 0:r.options.appId)||"",n._persistenceKey,e);n._componentsProvider||(s=e.localCache)!=null&&s._offlineComponentProvider&&((i=e.localCache)!=null&&i._onlineComponentProvider)&&(n._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),n._firestoreClient=new c0(n._authCredentials,n._appCheckCredentials,n._queue,t,n._componentsProvider&&function(c){const u=c==null?void 0:c._online.build();return{_offline:c==null?void 0:c._offline.build(u),_online:u}}(n._componentsProvider))}/**
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
 */class _t{constructor(e){this._byteString=e}static fromBase64String(e){try{return new _t(Qe.fromBase64String(e))}catch(t){throw new Q(O.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new _t(Qe.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:_t._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(hi(e,_t._jsonSchema))return _t.fromBase64String(e.bytes)}}_t._jsonSchemaVersion="firestore/bytes/1.0",_t._jsonSchema={type:Ne("string",_t._jsonSchemaVersion),bytes:Ne("string")};/**
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
 */class Tl{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new Q(O.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ke(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class vg{constructor(e){this._methodName=e}}/**
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
 */class Bt{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new Q(O.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new Q(O.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return le(this._lat,e._lat)||le(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Bt._jsonSchemaVersion}}static fromJSON(e){if(hi(e,Bt._jsonSchema))return new Bt(e.latitude,e.longitude)}}Bt._jsonSchemaVersion="firestore/geoPoint/1.0",Bt._jsonSchema={type:Ne("string",Bt._jsonSchemaVersion),latitude:Ne("number"),longitude:Ne("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jt{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0}(this._values,e._values)}toJSON(){return{type:jt._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(hi(e,jt._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(t=>typeof t=="number"))return new jt(e.vectorValues);throw new Q(O.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}jt._jsonSchemaVersion="firestore/vectorValue/1.0",jt._jsonSchema={type:Ne("string",jt._jsonSchemaVersion),vectorValues:Ne("object")};/**
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
 */const m0=/^__.*__$/;class _0{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new mr(e,this.data,this.fieldMask,t,this.fieldTransforms):new fi(e,this.data,t,this.fieldTransforms)}}function wg(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw ee(40011,{Ac:n})}}class Il{constructor(e,t,r,s,i,a){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Rc(),this.fieldTransforms=i||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new Il({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){var s;const t=(s=this.path)==null?void 0:s.child(e),r=this.Vc({path:t,fc:!1});return r.gc(e),r}yc(e){var s;const t=(s=this.path)==null?void 0:s.child(e),r=this.Vc({path:t,fc:!1});return r.Rc(),r}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return To(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(wg(this.Ac)&&m0.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class y0{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||Ho(e)}Cc(e,t,r,s=!1){return new Il({Ac:e,methodName:t,Dc:r,path:Ke.emptyPath(),fc:!1,bc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function E0(n){const e=n._freezeSettings(),t=Ho(n._databaseId);return new y0(n._databaseId,!!e.ignoreUndefinedProperties,t)}function T0(n,e,t,r,s,i={}){const a=n.Cc(i.merge||i.mergeFields?2:0,e,t,s);Rg("Data must be an object, but it was:",a,r);const c=bg(r,a);let u,f;if(i.merge)u=new wt(a.fieldMask),f=a.fieldTransforms;else if(i.mergeFields){const d=[];for(const g of i.mergeFields){const E=I0(e,g,t);if(!a.contains(E))throw new Q(O.INVALID_ARGUMENT,`Field '${E}' is specified in your field mask but missing from your input data.`);w0(d,E)||d.push(E)}u=new wt(d),f=a.fieldTransforms.filter(g=>u.covers(g.field))}else u=null,f=a.fieldTransforms;return new _0(new mt(c),u,f)}function Ag(n,e){if(Sg(n=qt(n)))return Rg("Unsupported field value:",e,n),bg(n,e);if(n instanceof vg)return function(r,s){if(!wg(s.Ac))throw s.Sc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Sc(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return function(r,s){const i=[];let a=0;for(const c of r){let u=Ag(c,s.wc(a));u==null&&(u={nullValue:"NULL_VALUE"}),i.push(u),a++}return{arrayValue:{values:i}}}(n,e)}return function(r,s){if((r=qt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return sw(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=Se.fromDate(r);return{timestampValue:mo(s.serializer,i)}}if(r instanceof Se){const i=new Se(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:mo(s.serializer,i)}}if(r instanceof Bt)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof _t)return{bytesValue:zp(s.serializer,r._byteString)};if(r instanceof qe){const i=s.databaseId,a=r.firestore._databaseId;if(!a.isEqual(i))throw s.Sc(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:rl(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof jt)return function(a,c){return{mapValue:{fields:{[Ep]:{stringValue:Ip},[uo]:{arrayValue:{values:a.toArray().map(f=>{if(typeof f!="number")throw c.Sc("VectorValues must only contain numeric values.");return el(c.serializer,f)})}}}}}}(r,s);throw s.Sc(`Unsupported field value: ${Kc(r)}`)}(n,e)}function bg(n,e){const t={};return dp(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):pr(n,(r,s)=>{const i=Ag(s,e.mc(r));i!=null&&(t[r]=i)}),{mapValue:{fields:t}}}function Sg(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof Se||n instanceof Bt||n instanceof _t||n instanceof qe||n instanceof vg||n instanceof jt)}function Rg(n,e,t){if(!Sg(t)||!hp(t)){const r=Kc(t);throw r==="an object"?e.Sc(n+" a custom object"):e.Sc(n+" "+r)}}function I0(n,e,t){if((e=qt(e))instanceof Tl)return e._internalPath;if(typeof e=="string")return Pg(n,e);throw To("Field path arguments must be of type string or ",n,!1,void 0,t)}const v0=new RegExp("[~\\*/\\[\\]]");function Pg(n,e,t){if(e.search(v0)>=0)throw To(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Tl(...e.split("."))._internalPath}catch{throw To(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function To(n,e,t,r,s){const i=r&&!r.isEmpty(),a=s!==void 0;let c=`Function ${e}() called with invalid data`;t&&(c+=" (via `toFirestore()`)"),c+=". ";let u="";return(i||a)&&(u+=" (found",i&&(u+=` in field ${r}`),a&&(u+=` in document ${s}`),u+=")"),new Q(O.INVALID_ARGUMENT,c+n+u)}function w0(n,e){return n.some(t=>t.isEqual(e))}/**
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
 */class Cg{constructor(e,t,r,s,i){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new qe(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new A0(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Vg("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class A0 extends Cg{data(){return super.data()}}function Vg(n,e){return typeof e=="string"?Pg(n,e):e instanceof Tl?e._internalPath:e._delegate._internalPath}class b0{convertValue(e,t="none"){switch(Bn(e)){case 0:return null;case 1:return e.booleanValue;case 2:return De(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Un(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw ee(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return pr(e,(s,i)=>{r[s]=this.convertValue(i,t)}),r}convertVectorValue(e){var r,s,i;const t=(i=(s=(r=e.fields)==null?void 0:r[uo].arrayValue)==null?void 0:s.values)==null?void 0:i.map(a=>De(a.doubleValue));return new jt(t)}convertGeoPoint(e){return new Bt(De(e.latitude),De(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=Lo(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(Ys(e));default:return null}}convertTimestamp(e){const t=Fn(e);return new Se(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=Pe.fromString(e);me(Xp(r),9688,{name:e});const s=new Zs(r.get(1),r.get(3)),i=new Y(r.popFirst(5));return s.isEqual(t)||ln(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
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
 */function S0(n,e,t){let r;return r=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,r}class Ps{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class ar extends Cg{constructor(e,t,r,s,i,a){super(e,t,r,s,a),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Ki(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(Vg("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new Q(O.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=ar._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}ar._jsonSchemaVersion="firestore/documentSnapshot/1.0",ar._jsonSchema={type:Ne("string",ar._jsonSchemaVersion),bundleSource:Ne("string","DocumentSnapshot"),bundleName:Ne("string"),bundle:Ne("string")};class Ki extends ar{data(e={}){return super.data(e)}}class $s{constructor(e,t,r,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new Ps(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new Ki(this._firestore,this._userDataWriter,r.key,r,new Ps(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new Q(O.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map(c=>{const u=new Ki(s._firestore,s._userDataWriter,c.doc.key,c.doc,new Ps(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);return c.doc,{type:"added",doc:u,oldIndex:-1,newIndex:a++}})}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(c=>i||c.type!==3).map(c=>{const u=new Ki(s._firestore,s._userDataWriter,c.doc.key,c.doc,new Ps(s._snapshot.mutatedKeys.has(c.doc.key),s._snapshot.fromCache),s.query.converter);let f=-1,d=-1;return c.type!==0&&(f=a.indexOf(c.doc.key),a=a.delete(c.doc.key)),c.type!==1&&(a=a.add(c.doc),d=a.indexOf(c.doc.key)),{type:R0(c.type),doc:u,oldIndex:f,newIndex:d}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new Q(O.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=$s._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Wc.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],r=[],s=[];return this.docs.forEach(i=>{i._document!==null&&(t.push(i._document),r.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function R0(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ee(61501,{type:n})}}/**
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
 */function P0(n){n=Js(n,qe);const e=Js(n.firestore,El);return f0(Ig(e),n._key).then(t=>k0(e,n,t))}$s._jsonSchemaVersion="firestore/querySnapshot/1.0",$s._jsonSchema={type:Ne("string",$s._jsonSchemaVersion),bundleSource:Ne("string","QuerySnapshot"),bundleName:Ne("string"),bundle:Ne("string")};class C0 extends b0{constructor(e){super(),this.firestore=e}convertBytes(e){return new _t(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new qe(this.firestore,null,t)}}function V0(n,e,t){n=Js(n,qe);const r=Js(n.firestore,El),s=S0(n.converter,e,t);return D0(r,[T0(E0(r),"setDoc",n._key,s,n.converter!==null,t).toMutation(n._key,nn.none())])}function D0(n,e){return function(r,s){const i=new Nn;return r.asyncQueue.enqueueAndForget(async()=>YA(await u0(r),s,i)),i.promise}(Ig(n),e)}function k0(n,e,t){const r=t.docs.get(e._key),s=new C0(n);return new ar(n,s,e._key,r,new Ps(t.hasPendingWrites,t.fromCache),e.converter)}(function(e,t=!0){(function(s){Zr=s})(Xr),$r(new lr("firestore",(r,{instanceIdentifier:s,options:i})=>{const a=r.getProvider("app").getImmediate(),c=new El(new gv(r.getProvider("auth-internal")),new yv(a,r.getProvider("app-check-internal")),function(f,d){if(!Object.prototype.hasOwnProperty.apply(f.options,["projectId"]))throw new Q(O.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Zs(f.options.projectId,d)}(a,s),a);return i={useFetchStreams:t,...i},c._setSettings(i),c},"PUBLIC").setMultipleInstances(!0)),Dn(fh,dh,e),Dn(fh,dh,"esm2020")})();const N0={apiKey:"AIzaSyAtChx9NwjePZvtG-3ACWh8ke16MTRvi1c",authDomain:"sports-site-daa20.firebaseapp.com",projectId:"sports-site-daa20",storageBucket:"sports-site-daa20.firebasestorage.app",messagingSenderId:"8941509170",appId:"1:8941509170:web:15db6b7dabae8f4f7e3a2b"},Dg=wd(N0),cf=hv(Dg),O0=new Yt,lf=p0(Dg),x0="/team-team-graggle-bruce/assets/allen-d678c656.png",M0="/team-team-graggle-bruce/assets/bam-e581316a.png",L0="/team-team-graggle-bruce/assets/brunson-ce3dd937.png",F0="/team-team-graggle-bruce/assets/div-bad217da.png",U0="/team-team-graggle-bruce/assets/draymond-46952876.png",B0="/team-team-graggle-bruce/assets/herro-65b8fd7b.png",j0="/team-team-graggle-bruce/assets/rodgers-c4e6edb1.png",$0="/team-team-graggle-bruce/assets/sga-f4c2608f.png",q0="/team-team-graggle-bruce/assets/logo-cdddef51.png";const H0=(n,e)=>{const t=n.__vccOpts||n;for(const[r,s]of e)t[r]=s;return t},z0={data(){return{selectedPlayer:null,userFavorites:[],user:null,players:[{name:"Grayson Allen",image:x0,position:"Shooting Guard - Milwaukee Bucks",bio:"Known for his sharpshooting and unjustified aggression on the court.",overall:90,ppg:14.2,rpg:4.1,apg:3.3},{name:"Bam Adebayo",image:M0,position:"Center - Miami Heat",bio:"Recognized for his defensive prowess and versatility. Known for being one of the greatest players of all time.",overall:100,ppg:19.5,rpg:10.2,apg:4.7},{name:"Jalen Brunson",image:L0,position:"Point Guard - New York Knicks",bio:"Celebrated for his leadership and clutch performances at the free throw line.",overall:80,ppg:25.3,rpg:4.2,apg:6.8},{name:"Donte DiVincenzo",image:F0,position:"Shooting Guard - Milwaukee Bucks",bio:"Known for his performance in that AT&T commercial.",overall:80,ppg:10.4,rpg:5.1,apg:3.2},{name:"Draymond Green",image:U0,position:"Power Forward - Golden State Warriors",bio:"Renowned for his defensive skills and friendship with Wizards legend Jordan Poole.",overall:84,ppg:8.3,rpg:7.5,apg:6.9},{name:"Tyler Herro",image:B0,position:"Shooting Guard - Miami Heat",bio:"Known for his clutch shooting in critical moments and making that face.",overall:80,ppg:20.1,rpg:5.3,apg:4.2},{name:"Aaron Rodgers",image:j0,position:"Quarterback - New York Jets",bio:'Famous for his precision passing and "leadership" on the field.',overall:76,ppg:18.6,rpg:5.2,apg:3.8},{name:"Shai Gilgeous-Alexander",image:$0,position:"Point Guard - Oklahoma City Thunder",bio:"Admired for his scoring ability at the line and corny Instagram captions.",overall:86,ppg:31.4,rpg:5.9,apg:6.2}]}},methods:{async login(){try{const n=await TI(cf,O0);this.user=n.user;const e=rf(lf,"favorites",this.user.uid),t=await P0(e);t.exists()?this.userFavorites=t.data().playerNames:this.userFavorites=[]}catch(n){console.error("Login failed:",n)}},async logout(){try{await cf.signOut(),this.user=null,this.userFavorites=[]}catch(n){console.error("Logout failed:",n)}},async toggleFavorite(n){if(!this.user){alert("Please log in first!");return}this.userFavorites.includes(n)?this.userFavorites=this.userFavorites.filter(e=>e!==n):this.userFavorites.push(n),await V0(rf(lf,"favorites",this.user.uid),{playerNames:this.userFavorites})},isFavorited(n){return this.userFavorites.includes(n)},openModal(n){this.selectedPlayer=n}}},W0={id:"app"},K0={key:0},G0={key:1,class:"user-info"},Q0={class:"welcome-text"},J0=["onClick"],X0=["src","alt","onClick"],Y0=["onClick"],Z0=["onClick"],eb={class:"modal-header"},tb=["src","alt"],nb={class:"position"},rb={class:"modal-stats"},sb={class:"modal-stat"},ib={class:"modal-stat"},ob={class:"modal-stat"},ab={class:"modal-stat"};function cb(n,e,t,r,s,i){return Zn(),Sr("div",W0,[ye("header",null,[e[5]||(e[5]=ye("div",{class:"header-content"},[ye("img",{src:q0,alt:"SportsZone logo",class:"logo"}),ye("h1",null,"SportsZone")],-1)),s.user?(Zn(),Sr("div",G0,[ye("span",Q0,"Welcome, "+Tt(s.user.displayName),1),ye("button",{onClick:e[1]||(e[1]=(...a)=>i.logout&&i.logout(...a)),class:"logout-btn"},"Logout")])):(Zn(),Sr("div",K0,[ye("button",{onClick:e[0]||(e[0]=(...a)=>i.login&&i.login(...a)),class:"login-btn"},"Login with Google")]))]),ye("main",null,[(Zn(!0),Sr(Ot,null,o_(s.players,a=>(Zn(),Sr("div",{class:"player-card",key:a.name},[ye("span",{class:bo(["star",{favorited:i.isFavorited(a.name)}]),onClick:c=>i.toggleFavorite(a.name)}," ★ ",10,J0),ye("img",{src:a.image,alt:a.name+" portrait",onClick:c=>i.openModal(a),style:{cursor:"pointer"}},null,8,X0),ye("h3",{onClick:c=>i.openModal(a),style:{cursor:"pointer"}},Tt(a.name),9,Y0),ye("p",{class:"bio",onClick:c=>i.openModal(a),style:{cursor:"pointer"}},Tt(a.bio),9,Z0)]))),128))]),e[6]||(e[6]=ye("footer",null,[ye("p",null,"© 2025 SportsZone. All rights reserved.")],-1)),s.selectedPlayer?(Zn(),Sr("div",{key:0,class:"modal",onClick:e[4]||(e[4]=a=>s.selectedPlayer=null)},[ye("div",{class:"modal-content",onClick:e[3]||(e[3]=wy(()=>{},["stop"]))},[ye("span",{class:"close-btn",onClick:e[2]||(e[2]=a=>s.selectedPlayer=null)},"×"),ye("div",eb,[ye("img",{src:s.selectedPlayer.image,alt:s.selectedPlayer.name+" portrait"},null,8,tb),ye("div",null,[ye("h2",null,Tt(s.selectedPlayer.name),1),ye("p",nb,Tt(s.selectedPlayer.position),1),ye("p",null,Tt(s.selectedPlayer.bio),1)])]),ye("div",rb,[ye("div",sb,"PPG: "+Tt(s.selectedPlayer.ppg.toFixed(1)),1),ye("div",ib,"RPG: "+Tt(s.selectedPlayer.rpg.toFixed(1)),1),ye("div",ob,"APG: "+Tt(s.selectedPlayer.apg.toFixed(1)),1),ye("div",ab,"Overall: "+Tt(s.selectedPlayer.overall.toFixed(1))+"/100",1)])])])):$_("",!0)])}const lb=H0(z0,[["render",cb],["__scopeId","data-v-1bb2a463"]]);Sy(lb).mount("#app");
