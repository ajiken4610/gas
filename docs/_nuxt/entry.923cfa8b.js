function os(e,t){const n=Object.create(null),r=e.split(",");for(let s=0;s<r.length;s++)n[r[s]]=!0;return t?s=>!!n[s.toLowerCase()]:s=>!!n[s]}const se={},At=[],Oe=()=>{},Ic=()=>!1,Tc=/^on[^a-z]/,cn=e=>Tc.test(e),is=e=>e.startsWith("onUpdate:"),fe=Object.assign,as=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},Ac=Object.prototype.hasOwnProperty,K=(e,t)=>Ac.call(e,t),N=Array.isArray,Ct=e=>Kn(e)==="[object Map]",ci=e=>Kn(e)==="[object Set]",B=e=>typeof e=="function",oe=e=>typeof e=="string",cs=e=>typeof e=="symbol",ne=e=>e!==null&&typeof e=="object",li=e=>ne(e)&&B(e.then)&&B(e.catch),ui=Object.prototype.toString,Kn=e=>ui.call(e),Cc=e=>Kn(e).slice(8,-1),fi=e=>Kn(e)==="[object Object]",ls=e=>oe(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,zt=os(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),qn=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},Rc=/-(\w)/g,Fe=qn(e=>e.replace(Rc,(t,n)=>n?n.toUpperCase():"")),Hc=/\B([A-Z])/g,Dt=qn(e=>e.replace(Hc,"-$1").toLowerCase()),zn=qn(e=>e.charAt(0).toUpperCase()+e.slice(1)),ur=qn(e=>e?`on${zn(e)}`:""),en=(e,t)=>!Object.is(e,t),fr=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},Rn=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},Sc=e=>{const t=parseFloat(e);return isNaN(t)?e:t},Pc=e=>{const t=oe(e)?Number(e):NaN;return isNaN(t)?e:t};let qs;const xr=()=>qs||(qs=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Jn(e){if(N(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],s=oe(r)?$c(r):Jn(r);if(s)for(const o in s)t[o]=s[o]}return t}else{if(oe(e))return e;if(ne(e))return e}}const xc=/;(?![^(]*\))/g,Oc=/:([^]+)/,Mc=/\/\*[^]*?\*\//g;function $c(e){const t={};return e.replace(Mc,"").split(xc).forEach(n=>{if(n){const r=n.split(Oc);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function ln(e){let t="";if(oe(e))t=e;else if(N(e))for(let n=0;n<e.length;n++){const r=ln(e[n]);r&&(t+=r+" ")}else if(ne(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}function kc(e){if(!e)return null;let{class:t,style:n}=e;return t&&!oe(t)&&(e.class=ln(t)),n&&(e.style=Jn(n)),e}const Dc="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Nc=os(Dc);function di(e){return!!e||e===""}const Le=e=>oe(e)?e:e==null?"":N(e)||ne(e)&&(e.toString===ui||!B(e.toString))?JSON.stringify(e,hi,2):String(e),hi=(e,t)=>t&&t.__v_isRef?hi(e,t.value):Ct(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,s])=>(n[`${r} =>`]=s,n),{})}:ci(t)?{[`Set(${t.size})`]:[...t.values()]}:ne(t)&&!N(t)&&!fi(t)?String(t):t;let Se;class Lc{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Se,!t&&Se&&(this.index=(Se.scopes||(Se.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const n=Se;try{return Se=this,t()}finally{Se=n}}}on(){Se=this}off(){Se=this.parent}stop(t){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function Fc(e,t=Se){t&&t.active&&t.effects.push(e)}function Bc(){return Se}const us=e=>{const t=new Set(e);return t.w=0,t.n=0,t},pi=e=>(e.w&nt)>0,gi=e=>(e.n&nt)>0,jc=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=nt},Uc=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const s=t[r];pi(s)&&!gi(s)?s.delete(e):t[n++]=s,s.w&=~nt,s.n&=~nt}t.length=n}},Hn=new WeakMap;let Kt=0,nt=1;const Or=30;let Pe;const dt=Symbol(""),Mr=Symbol("");class fs{constructor(t,n=null,r){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Fc(this,r)}run(){if(!this.active)return this.fn();let t=Pe,n=Ge;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=Pe,Pe=this,Ge=!0,nt=1<<++Kt,Kt<=Or?jc(this):zs(this),this.fn()}finally{Kt<=Or&&Uc(this),nt=1<<--Kt,Pe=this.parent,Ge=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Pe===this?this.deferStop=!0:this.active&&(zs(this),this.onStop&&this.onStop(),this.active=!1)}}function zs(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let Ge=!0;const mi=[];function Nt(){mi.push(Ge),Ge=!1}function Lt(){const e=mi.pop();Ge=e===void 0?!0:e}function _e(e,t,n){if(Ge&&Pe){let r=Hn.get(e);r||Hn.set(e,r=new Map);let s=r.get(n);s||r.set(n,s=us()),yi(s)}}function yi(e,t){let n=!1;Kt<=Or?gi(e)||(e.n|=nt,n=!pi(e)):n=!e.has(Pe),n&&(e.add(Pe),Pe.deps.push(e))}function We(e,t,n,r,s,o){const i=Hn.get(e);if(!i)return;let a=[];if(t==="clear")a=[...i.values()];else if(n==="length"&&N(e)){const c=Number(r);i.forEach((l,d)=>{(d==="length"||d>=c)&&a.push(l)})}else switch(n!==void 0&&a.push(i.get(n)),t){case"add":N(e)?ls(n)&&a.push(i.get("length")):(a.push(i.get(dt)),Ct(e)&&a.push(i.get(Mr)));break;case"delete":N(e)||(a.push(i.get(dt)),Ct(e)&&a.push(i.get(Mr)));break;case"set":Ct(e)&&a.push(i.get(dt));break}if(a.length===1)a[0]&&$r(a[0]);else{const c=[];for(const l of a)l&&c.push(...l);$r(us(c))}}function $r(e,t){const n=N(e)?e:[...e];for(const r of n)r.computed&&Js(r);for(const r of n)r.computed||Js(r)}function Js(e,t){(e!==Pe||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}function Wc(e,t){var n;return(n=Hn.get(e))==null?void 0:n.get(t)}const Vc=os("__proto__,__v_isRef,__isVue"),bi=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(cs)),Kc=ds(),qc=ds(!1,!0),zc=ds(!0),Gs=Jc();function Jc(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=q(this);for(let o=0,i=this.length;o<i;o++)_e(r,"get",o+"");const s=r[t](...n);return s===-1||s===!1?r[t](...n.map(q)):s}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){Nt();const r=q(this)[t].apply(this,n);return Lt(),r}}),e}function Gc(e){const t=q(this);return _e(t,"has",e),t.hasOwnProperty(e)}function ds(e=!1,t=!1){return function(r,s,o){if(s==="__v_isReactive")return!e;if(s==="__v_isReadonly")return e;if(s==="__v_isShallow")return t;if(s==="__v_raw"&&o===(e?t?fl:Ii:t?Ei:vi).get(r))return r;const i=N(r);if(!e){if(i&&K(Gs,s))return Reflect.get(Gs,s,o);if(s==="hasOwnProperty")return Gc}const a=Reflect.get(r,s,o);return(cs(s)?bi.has(s):Vc(s))||(e||_e(r,"get",s),t)?a:ue(a)?i&&ls(s)?a:a.value:ne(a)?e?Ai(a):rt(a):a}}const Yc=_i(),Xc=_i(!0);function _i(e=!1){return function(n,r,s,o){let i=n[r];if(pt(i)&&ue(i)&&!ue(s))return!1;if(!e&&(!Sn(s)&&!pt(s)&&(i=q(i),s=q(s)),!N(n)&&ue(i)&&!ue(s)))return i.value=s,!0;const a=N(n)&&ls(r)?Number(r)<n.length:K(n,r),c=Reflect.set(n,r,s,o);return n===q(o)&&(a?en(s,i)&&We(n,"set",r,s):We(n,"add",r,s)),c}}function Zc(e,t){const n=K(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&n&&We(e,"delete",t,void 0),r}function Qc(e,t){const n=Reflect.has(e,t);return(!cs(t)||!bi.has(t))&&_e(e,"has",t),n}function el(e){return _e(e,"iterate",N(e)?"length":dt),Reflect.ownKeys(e)}const wi={get:Kc,set:Yc,deleteProperty:Zc,has:Qc,ownKeys:el},tl={get:zc,set(e,t){return!0},deleteProperty(e,t){return!0}},nl=fe({},wi,{get:qc,set:Xc}),hs=e=>e,Gn=e=>Reflect.getPrototypeOf(e);function hn(e,t,n=!1,r=!1){e=e.__v_raw;const s=q(e),o=q(t);n||(t!==o&&_e(s,"get",t),_e(s,"get",o));const{has:i}=Gn(s),a=r?hs:n?ms:tn;if(i.call(s,t))return a(e.get(t));if(i.call(s,o))return a(e.get(o));e!==s&&e.get(t)}function pn(e,t=!1){const n=this.__v_raw,r=q(n),s=q(e);return t||(e!==s&&_e(r,"has",e),_e(r,"has",s)),e===s?n.has(e):n.has(e)||n.has(s)}function gn(e,t=!1){return e=e.__v_raw,!t&&_e(q(e),"iterate",dt),Reflect.get(e,"size",e)}function Ys(e){e=q(e);const t=q(this);return Gn(t).has.call(t,e)||(t.add(e),We(t,"add",e,e)),this}function Xs(e,t){t=q(t);const n=q(this),{has:r,get:s}=Gn(n);let o=r.call(n,e);o||(e=q(e),o=r.call(n,e));const i=s.call(n,e);return n.set(e,t),o?en(t,i)&&We(n,"set",e,t):We(n,"add",e,t),this}function Zs(e){const t=q(this),{has:n,get:r}=Gn(t);let s=n.call(t,e);s||(e=q(e),s=n.call(t,e)),r&&r.call(t,e);const o=t.delete(e);return s&&We(t,"delete",e,void 0),o}function Qs(){const e=q(this),t=e.size!==0,n=e.clear();return t&&We(e,"clear",void 0,void 0),n}function mn(e,t){return function(r,s){const o=this,i=o.__v_raw,a=q(i),c=t?hs:e?ms:tn;return!e&&_e(a,"iterate",dt),i.forEach((l,d)=>r.call(s,c(l),c(d),o))}}function yn(e,t,n){return function(...r){const s=this.__v_raw,o=q(s),i=Ct(o),a=e==="entries"||e===Symbol.iterator&&i,c=e==="keys"&&i,l=s[e](...r),d=n?hs:t?ms:tn;return!t&&_e(o,"iterate",c?Mr:dt),{next(){const{value:f,done:p}=l.next();return p?{value:f,done:p}:{value:a?[d(f[0]),d(f[1])]:d(f),done:p}},[Symbol.iterator](){return this}}}}function Ke(e){return function(...t){return e==="delete"?!1:this}}function rl(){const e={get(o){return hn(this,o)},get size(){return gn(this)},has:pn,add:Ys,set:Xs,delete:Zs,clear:Qs,forEach:mn(!1,!1)},t={get(o){return hn(this,o,!1,!0)},get size(){return gn(this)},has:pn,add:Ys,set:Xs,delete:Zs,clear:Qs,forEach:mn(!1,!0)},n={get(o){return hn(this,o,!0)},get size(){return gn(this,!0)},has(o){return pn.call(this,o,!0)},add:Ke("add"),set:Ke("set"),delete:Ke("delete"),clear:Ke("clear"),forEach:mn(!0,!1)},r={get(o){return hn(this,o,!0,!0)},get size(){return gn(this,!0)},has(o){return pn.call(this,o,!0)},add:Ke("add"),set:Ke("set"),delete:Ke("delete"),clear:Ke("clear"),forEach:mn(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(o=>{e[o]=yn(o,!1,!1),n[o]=yn(o,!0,!1),t[o]=yn(o,!1,!0),r[o]=yn(o,!0,!0)}),[e,n,t,r]}const[sl,ol,il,al]=rl();function ps(e,t){const n=t?e?al:il:e?ol:sl;return(r,s,o)=>s==="__v_isReactive"?!e:s==="__v_isReadonly"?e:s==="__v_raw"?r:Reflect.get(K(n,s)&&s in r?n:r,s,o)}const cl={get:ps(!1,!1)},ll={get:ps(!1,!0)},ul={get:ps(!0,!1)},vi=new WeakMap,Ei=new WeakMap,Ii=new WeakMap,fl=new WeakMap;function dl(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function hl(e){return e.__v_skip||!Object.isExtensible(e)?0:dl(Cc(e))}function rt(e){return pt(e)?e:gs(e,!1,wi,cl,vi)}function Ti(e){return gs(e,!1,nl,ll,Ei)}function Ai(e){return gs(e,!0,tl,ul,Ii)}function gs(e,t,n,r,s){if(!ne(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const o=s.get(e);if(o)return o;const i=hl(e);if(i===0)return e;const a=new Proxy(e,i===2?r:n);return s.set(e,a),a}function Rt(e){return pt(e)?Rt(e.__v_raw):!!(e&&e.__v_isReactive)}function pt(e){return!!(e&&e.__v_isReadonly)}function Sn(e){return!!(e&&e.__v_isShallow)}function Ci(e){return Rt(e)||pt(e)}function q(e){const t=e&&e.__v_raw;return t?q(t):e}function Ri(e){return Rn(e,"__v_skip",!0),e}const tn=e=>ne(e)?rt(e):e,ms=e=>ne(e)?Ai(e):e;function Hi(e){Ge&&Pe&&(e=q(e),yi(e.dep||(e.dep=us())))}function Si(e,t){e=q(e);const n=e.dep;n&&$r(n)}function ue(e){return!!(e&&e.__v_isRef===!0)}function he(e){return Pi(e,!1)}function eo(e){return Pi(e,!0)}function Pi(e,t){return ue(e)?e:new pl(e,t)}class pl{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:q(t),this._value=n?t:tn(t)}get value(){return Hi(this),this._value}set value(t){const n=this.__v_isShallow||Sn(t)||pt(t);t=n?t:q(t),en(t,this._rawValue)&&(this._rawValue=t,this._value=n?t:tn(t),Si(this))}}function V(e){return ue(e)?e.value:e}const gl={get:(e,t,n)=>V(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const s=e[t];return ue(s)&&!ue(n)?(s.value=n,!0):Reflect.set(e,t,n,r)}};function xi(e){return Rt(e)?e:new Proxy(e,gl)}class ml{constructor(t,n,r){this._object=t,this._key=n,this._defaultValue=r,this.__v_isRef=!0}get value(){const t=this._object[this._key];return t===void 0?this._defaultValue:t}set value(t){this._object[this._key]=t}get dep(){return Wc(q(this._object),this._key)}}class yl{constructor(t){this._getter=t,this.__v_isRef=!0,this.__v_isReadonly=!0}get value(){return this._getter()}}function Oi(e,t,n){return ue(e)?e:B(e)?new yl(e):ne(e)&&arguments.length>1?bl(e,t,n):he(e)}function bl(e,t,n){const r=e[t];return ue(r)?r:new ml(e,t,n)}class _l{constructor(t,n,r,s){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new fs(t,()=>{this._dirty||(this._dirty=!0,Si(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const t=q(this);return Hi(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function wl(e,t,n=!1){let r,s;const o=B(e);return o?(r=e,s=Oe):(r=e.get,s=e.set),new _l(r,s,o||!s,n)}function Ye(e,t,n,r){let s;try{s=r?e(...r):e()}catch(o){Ft(o,t,n)}return s}function Me(e,t,n,r){if(B(e)){const o=Ye(e,t,n,r);return o&&li(o)&&o.catch(i=>{Ft(i,t,n)}),o}const s=[];for(let o=0;o<e.length;o++)s.push(Me(e[o],t,n,r));return s}function Ft(e,t,n,r=!0){const s=t?t.vnode:null;if(t){let o=t.parent;const i=t.proxy,a=n;for(;o;){const l=o.ec;if(l){for(let d=0;d<l.length;d++)if(l[d](e,i,a)===!1)return}o=o.parent}const c=t.appContext.config.errorHandler;if(c){Ye(c,null,10,[e,i,a]);return}}vl(e,n,s,r)}function vl(e,t,n,r=!0){console.error(e)}let nn=!1,kr=!1;const pe=[];let Ne=0;const Ht=[];let Ue=null,lt=0;const Mi=Promise.resolve();let ys=null;function Yn(e){const t=ys||Mi;return e?t.then(this?e.bind(this):e):t}function El(e){let t=Ne+1,n=pe.length;for(;t<n;){const r=t+n>>>1;rn(pe[r])<e?t=r+1:n=r}return t}function Xn(e){(!pe.length||!pe.includes(e,nn&&e.allowRecurse?Ne+1:Ne))&&(e.id==null?pe.push(e):pe.splice(El(e.id),0,e),$i())}function $i(){!nn&&!kr&&(kr=!0,ys=Mi.then(Di))}function Il(e){const t=pe.indexOf(e);t>Ne&&pe.splice(t,1)}function ki(e){N(e)?Ht.push(...e):(!Ue||!Ue.includes(e,e.allowRecurse?lt+1:lt))&&Ht.push(e),$i()}function to(e,t=nn?Ne+1:0){for(;t<pe.length;t++){const n=pe[t];n&&n.pre&&(pe.splice(t,1),t--,n())}}function Pn(e){if(Ht.length){const t=[...new Set(Ht)];if(Ht.length=0,Ue){Ue.push(...t);return}for(Ue=t,Ue.sort((n,r)=>rn(n)-rn(r)),lt=0;lt<Ue.length;lt++)Ue[lt]();Ue=null,lt=0}}const rn=e=>e.id==null?1/0:e.id,Tl=(e,t)=>{const n=rn(e)-rn(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function Di(e){kr=!1,nn=!0,pe.sort(Tl);const t=Oe;try{for(Ne=0;Ne<pe.length;Ne++){const n=pe[Ne];n&&n.active!==!1&&Ye(n,null,14)}}finally{Ne=0,pe.length=0,Pn(),nn=!1,ys=null,(pe.length||Ht.length)&&Di()}}function Al(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||se;let s=n;const o=t.startsWith("update:"),i=o&&t.slice(7);if(i&&i in r){const d=`${i==="modelValue"?"model":i}Modifiers`,{number:f,trim:p}=r[d]||se;p&&(s=n.map(y=>oe(y)?y.trim():y)),f&&(s=n.map(Sc))}let a,c=r[a=ur(t)]||r[a=ur(Fe(t))];!c&&o&&(c=r[a=ur(Dt(t))]),c&&Me(c,e,6,s);const l=r[a+"Once"];if(l){if(!e.emitted)e.emitted={};else if(e.emitted[a])return;e.emitted[a]=!0,Me(l,e,6,s)}}function Ni(e,t,n=!1){const r=t.emitsCache,s=r.get(e);if(s!==void 0)return s;const o=e.emits;let i={},a=!1;if(!B(e)){const c=l=>{const d=Ni(l,t,!0);d&&(a=!0,fe(i,d))};!n&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}return!o&&!a?(ne(e)&&r.set(e,null),null):(N(o)?o.forEach(c=>i[c]=null):fe(i,o),ne(e)&&r.set(e,i),i)}function Zn(e,t){return!e||!cn(t)?!1:(t=t.slice(2).replace(/Once$/,""),K(e,t[0].toLowerCase()+t.slice(1))||K(e,Dt(t))||K(e,t))}let Ie=null,Qn=null;function xn(e){const t=Ie;return Ie=e,Qn=e&&e.type.__scopeId||null,t}function Xm(e){Qn=e}function Zm(){Qn=null}function bs(e,t=Ie,n){if(!t||e._n)return e;const r=(...s)=>{r._d&&go(-1);const o=xn(t);let i;try{i=e(...s)}finally{xn(o),r._d&&go(1)}return i};return r._n=!0,r._c=!0,r._d=!0,r}function dr(e){const{type:t,vnode:n,proxy:r,withProxy:s,props:o,propsOptions:[i],slots:a,attrs:c,emit:l,render:d,renderCache:f,data:p,setupState:y,ctx:g,inheritAttrs:T}=e;let D,_;const b=xn(e);try{if(n.shapeFlag&4){const I=s||r;D=Ce(d.call(I,I,f,o,y,p,g)),_=c}else{const I=t;D=Ce(I.length>1?I(o,{attrs:c,slots:a,emit:l}):I(o,null)),_=t.props?c:Rl(c)}}catch(I){Xt.length=0,Ft(I,e,1),D=ie(Be)}let $=D;if(_&&T!==!1){const I=Object.keys(_),{shapeFlag:x}=$;I.length&&x&7&&(i&&I.some(is)&&(_=Hl(_,i)),$=Mt($,_))}return n.dirs&&($=Mt($),$.dirs=$.dirs?$.dirs.concat(n.dirs):n.dirs),n.transition&&($.transition=n.transition),D=$,xn(b),D}function Cl(e){let t;for(let n=0;n<e.length;n++){const r=e[n];if($n(r)){if(r.type!==Be||r.children==="v-if"){if(t)return;t=r}}else return}return t}const Rl=e=>{let t;for(const n in e)(n==="class"||n==="style"||cn(n))&&((t||(t={}))[n]=e[n]);return t},Hl=(e,t)=>{const n={};for(const r in e)(!is(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function Sl(e,t,n){const{props:r,children:s,component:o}=e,{props:i,children:a,patchFlag:c}=t,l=o.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?no(r,i,l):!!i;if(c&8){const d=t.dynamicProps;for(let f=0;f<d.length;f++){const p=d[f];if(i[p]!==r[p]&&!Zn(l,p))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===i?!1:r?i?no(r,i,l):!0:!!i;return!1}function no(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let s=0;s<r.length;s++){const o=r[s];if(t[o]!==e[o]&&!Zn(n,o))return!0}return!1}function _s({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const Pl=e=>e.__isSuspense,xl={name:"Suspense",__isSuspense:!0,process(e,t,n,r,s,o,i,a,c,l){e==null?Ml(t,n,r,s,o,i,a,c,l):$l(e,t,n,r,s,i,a,c,l)},hydrate:kl,create:ws,normalize:Dl},Ol=xl;function sn(e,t){const n=e.props&&e.props[t];B(n)&&n()}function Ml(e,t,n,r,s,o,i,a,c){const{p:l,o:{createElement:d}}=c,f=d("div"),p=e.suspense=ws(e,s,r,t,f,n,o,i,a,c);l(null,p.pendingBranch=e.ssContent,f,null,r,p,o,i),p.deps>0?(sn(e,"onPending"),sn(e,"onFallback"),l(null,e.ssFallback,t,n,r,null,o,i),St(p,e.ssFallback)):p.resolve(!1,!0)}function $l(e,t,n,r,s,o,i,a,{p:c,um:l,o:{createElement:d}}){const f=t.suspense=e.suspense;f.vnode=t,t.el=e.el;const p=t.ssContent,y=t.ssFallback,{activeBranch:g,pendingBranch:T,isInFallback:D,isHydrating:_}=f;if(T)f.pendingBranch=p,Je(p,T)?(c(T,p,f.hiddenContainer,null,s,f,o,i,a),f.deps<=0?f.resolve():D&&(c(g,y,n,r,s,null,o,i,a),St(f,y))):(f.pendingId++,_?(f.isHydrating=!1,f.activeBranch=T):l(T,s,f),f.deps=0,f.effects.length=0,f.hiddenContainer=d("div"),D?(c(null,p,f.hiddenContainer,null,s,f,o,i,a),f.deps<=0?f.resolve():(c(g,y,n,r,s,null,o,i,a),St(f,y))):g&&Je(p,g)?(c(g,p,n,r,s,f,o,i,a),f.resolve(!0)):(c(null,p,f.hiddenContainer,null,s,f,o,i,a),f.deps<=0&&f.resolve()));else if(g&&Je(p,g))c(g,p,n,r,s,f,o,i,a),St(f,p);else if(sn(t,"onPending"),f.pendingBranch=p,f.pendingId++,c(null,p,f.hiddenContainer,null,s,f,o,i,a),f.deps<=0)f.resolve();else{const{timeout:b,pendingId:$}=f;b>0?setTimeout(()=>{f.pendingId===$&&f.fallback(y)},b):b===0&&f.fallback(y)}}function ws(e,t,n,r,s,o,i,a,c,l,d=!1){const{p:f,m:p,um:y,n:g,o:{parentNode:T,remove:D}}=l;let _;const b=Nl(e);b&&t!=null&&t.pendingBranch&&(_=t.pendingId,t.deps++);const $=e.props?Pc(e.props.timeout):void 0,I={vnode:e,parent:t,parentComponent:n,isSVG:i,container:r,hiddenContainer:s,anchor:o,deps:0,pendingId:0,timeout:typeof $=="number"?$:-1,activeBranch:null,pendingBranch:null,isInFallback:!0,isHydrating:d,isUnmounted:!1,effects:[],resolve(x=!1,U=!1){const{vnode:L,activeBranch:S,pendingBranch:j,pendingId:z,effects:J,parentComponent:ge,container:re}=I;if(I.isHydrating)I.isHydrating=!1;else if(!x){const G=S&&j.transition&&j.transition.mode==="out-in";G&&(S.transition.afterLeave=()=>{z===I.pendingId&&p(j,re,Z,0)});let{anchor:Z}=I;S&&(Z=g(S),y(S,ge,I,!0)),G||p(j,re,Z,0)}St(I,j),I.pendingBranch=null,I.isInFallback=!1;let k=I.parent,we=!1;for(;k;){if(k.pendingBranch){k.effects.push(...J),we=!0;break}k=k.parent}we||ki(J),I.effects=[],b&&t&&t.pendingBranch&&_===t.pendingId&&(t.deps--,t.deps===0&&!U&&t.resolve()),sn(L,"onResolve")},fallback(x){if(!I.pendingBranch)return;const{vnode:U,activeBranch:L,parentComponent:S,container:j,isSVG:z}=I;sn(U,"onFallback");const J=g(L),ge=()=>{I.isInFallback&&(f(null,x,j,J,S,null,z,a,c),St(I,x))},re=x.transition&&x.transition.mode==="out-in";re&&(L.transition.afterLeave=ge),I.isInFallback=!0,y(L,S,null,!0),re||ge()},move(x,U,L){I.activeBranch&&p(I.activeBranch,x,U,L),I.container=x},next(){return I.activeBranch&&g(I.activeBranch)},registerDep(x,U){const L=!!I.pendingBranch;L&&I.deps++;const S=x.vnode.el;x.asyncDep.catch(j=>{Ft(j,x,0)}).then(j=>{if(x.isUnmounted||I.isUnmounted||I.pendingId!==x.suspenseId)return;x.asyncResolved=!0;const{vnode:z}=x;Br(x,j,!1),S&&(z.el=S);const J=!S&&x.subTree.el;U(x,z,T(S||x.subTree.el),S?null:g(x.subTree),I,i,c),J&&D(J),_s(x,z.el),L&&--I.deps===0&&I.resolve()})},unmount(x,U){I.isUnmounted=!0,I.activeBranch&&y(I.activeBranch,n,x,U),I.pendingBranch&&y(I.pendingBranch,n,x,U)}};return I}function kl(e,t,n,r,s,o,i,a,c){const l=t.suspense=ws(t,r,n,e.parentNode,document.createElement("div"),null,s,o,i,a,!0),d=c(e,l.pendingBranch=t.ssContent,n,l,o,i);return l.deps===0&&l.resolve(!1,!0),d}function Dl(e){const{shapeFlag:t,children:n}=e,r=t&32;e.ssContent=ro(r?n.default:n),e.ssFallback=r?ro(n.fallback):ie(Be)}function ro(e){let t;if(B(e)){const n=Ot&&e._c;n&&(e._d=!1,ce()),e=e(),n&&(e._d=!0,t=Re,ia())}return N(e)&&(e=Cl(e)),e=Ce(e),t&&!e.dynamicChildren&&(e.dynamicChildren=t.filter(n=>n!==e)),e}function Li(e,t){t&&t.pendingBranch?N(e)?t.effects.push(...e):t.effects.push(e):ki(e)}function St(e,t){e.activeBranch=t;const{vnode:n,parentComponent:r}=e,s=n.el=t.el;r&&r.subTree===n&&(r.vnode.el=s,_s(r,s))}function Nl(e){var t;return((t=e.props)==null?void 0:t.suspensible)!=null&&e.props.suspensible!==!1}function Ll(e,t){return vs(e,null,t)}const bn={};function Jt(e,t,n){return vs(e,t,n)}function vs(e,t,{immediate:n,deep:r,flush:s,onTrack:o,onTrigger:i}=se){var a;const c=Bc()===((a=le)==null?void 0:a.scope)?le:null;let l,d=!1,f=!1;if(ue(e)?(l=()=>e.value,d=Sn(e)):Rt(e)?(l=()=>e,r=!0):N(e)?(f=!0,d=e.some(I=>Rt(I)||Sn(I)),l=()=>e.map(I=>{if(ue(I))return I.value;if(Rt(I))return Tt(I);if(B(I))return Ye(I,c,2)})):B(e)?t?l=()=>Ye(e,c,2):l=()=>{if(!(c&&c.isUnmounted))return p&&p(),Me(e,c,3,[y])}:l=Oe,t&&r){const I=l;l=()=>Tt(I())}let p,y=I=>{p=b.onStop=()=>{Ye(I,c,4)}},g;if(kt)if(y=Oe,t?n&&Me(t,c,3,[l(),f?[]:void 0,y]):l(),s==="sync"){const I=Ru();g=I.__watcherHandles||(I.__watcherHandles=[])}else return Oe;let T=f?new Array(e.length).fill(bn):bn;const D=()=>{if(b.active)if(t){const I=b.run();(r||d||(f?I.some((x,U)=>en(x,T[U])):en(I,T)))&&(p&&p(),Me(t,c,3,[I,T===bn?void 0:f&&T[0]===bn?[]:T,y]),T=I)}else b.run()};D.allowRecurse=!!t;let _;s==="sync"?_=D:s==="post"?_=()=>ye(D,c&&c.suspense):(D.pre=!0,c&&(D.id=c.uid),_=()=>Xn(D));const b=new fs(l,_);t?n?D():T=b.run():s==="post"?ye(b.run.bind(b),c&&c.suspense):b.run();const $=()=>{b.stop(),c&&c.scope&&as(c.scope.effects,b)};return g&&g.push($),$}function Fl(e,t,n){const r=this.proxy,s=oe(e)?e.includes(".")?Fi(r,e):()=>r[e]:e.bind(r,r);let o;B(t)?o=t:(o=t.handler,n=t);const i=le;$t(this);const a=vs(s,o.bind(r),n);return i?$t(i):ht(),a}function Fi(e,t){const n=t.split(".");return()=>{let r=e;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function Tt(e,t){if(!ne(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),ue(e))Tt(e.value,t);else if(N(e))for(let n=0;n<e.length;n++)Tt(e[n],t);else if(ci(e)||Ct(e))e.forEach(n=>{Tt(n,t)});else if(fi(e))for(const n in e)Tt(e[n],t);return e}function De(e,t,n,r){const s=e.dirs,o=t&&t.dirs;for(let i=0;i<s.length;i++){const a=s[i];o&&(a.oldValue=o[i].value);let c=a.dir[r];c&&(Nt(),Me(c,n,8,[e.el,a,e,t]),Lt())}}function _t(e,t){return B(e)?(()=>fe({name:e.name},t,{setup:e}))():e}const Gt=e=>!!e.type.__asyncLoader;function so(e){B(e)&&(e={loader:e});const{loader:t,loadingComponent:n,errorComponent:r,delay:s=200,timeout:o,suspensible:i=!0,onError:a}=e;let c=null,l,d=0;const f=()=>(d++,c=null,p()),p=()=>{let y;return c||(y=c=t().catch(g=>{if(g=g instanceof Error?g:new Error(String(g)),a)return new Promise((T,D)=>{a(g,()=>T(f()),()=>D(g),d+1)});throw g}).then(g=>y!==c&&c?c:(g&&(g.__esModule||g[Symbol.toStringTag]==="Module")&&(g=g.default),l=g,g)))};return _t({name:"AsyncComponentWrapper",__asyncLoader:p,get __asyncResolved(){return l},setup(){const y=le;if(l)return()=>hr(l,y);const g=b=>{c=null,Ft(b,y,13,!r)};if(i&&y.suspense||kt)return p().then(b=>()=>hr(b,y)).catch(b=>(g(b),()=>r?ie(r,{error:b}):null));const T=he(!1),D=he(),_=he(!!s);return s&&setTimeout(()=>{_.value=!1},s),o!=null&&setTimeout(()=>{if(!T.value&&!D.value){const b=new Error(`Async component timed out after ${o}ms.`);g(b),D.value=b}},o),p().then(()=>{T.value=!0,y.parent&&Es(y.parent.vnode)&&Xn(y.parent.update)}).catch(b=>{g(b),D.value=b}),()=>{if(T.value&&l)return hr(l,y);if(D.value&&r)return ie(r,{error:D.value});if(n&&!_.value)return ie(n)}}})}function hr(e,t){const{ref:n,props:r,children:s,ce:o}=t.vnode,i=ie(e,r,s);return i.ref=n,i.ce=o,delete t.vnode.ce,i}const Es=e=>e.type.__isKeepAlive;function Bi(e,t){Ui(e,"a",t)}function ji(e,t){Ui(e,"da",t)}function Ui(e,t,n=le){const r=e.__wdc||(e.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return e()});if(er(t,r,n),n){let s=n.parent;for(;s&&s.parent;)Es(s.parent.vnode)&&Bl(r,t,n,s),s=s.parent}}function Bl(e,t,n,r){const s=er(t,e,r,!0);Vi(()=>{as(r[t],s)},n)}function er(e,t,n=le,r=!1){if(n){const s=n[e]||(n[e]=[]),o=t.__weh||(t.__weh=(...i)=>{if(n.isUnmounted)return;Nt(),$t(n);const a=Me(t,n,e,i);return ht(),Lt(),a});return r?s.unshift(o):s.push(o),o}}const Ve=e=>(t,n=le)=>(!kt||e==="sp")&&er(e,(...r)=>t(...r),n),jl=Ve("bm"),Ul=Ve("m"),Wl=Ve("bu"),Vl=Ve("u"),Wi=Ve("bum"),Vi=Ve("um"),Kl=Ve("sp"),ql=Ve("rtg"),zl=Ve("rtc");function Ki(e,t=le){er("ec",e,t)}const Is="components";function Qm(e,t){return zi(Is,e,!0,t)||e}const qi=Symbol.for("v-ndc");function Jl(e){return oe(e)?zi(Is,e,!1)||e:e||qi}function zi(e,t,n=!0,r=!1){const s=Ie||le;if(s){const o=s.type;if(e===Is){const a=Eu(o,!1);if(a&&(a===t||a===Fe(t)||a===zn(Fe(t))))return o}const i=oo(s[e]||o[e],t)||oo(s.appContext[e],t);return!i&&r?o:i}}function oo(e,t){return e&&(e[t]||e[Fe(t)]||e[zn(Fe(t))])}function Ji(e,t,n,r){let s;const o=n&&n[r];if(N(e)||oe(e)){s=new Array(e.length);for(let i=0,a=e.length;i<a;i++)s[i]=t(e[i],i,void 0,o&&o[i])}else if(typeof e=="number"){s=new Array(e);for(let i=0;i<e;i++)s[i]=t(i+1,i,void 0,o&&o[i])}else if(ne(e))if(e[Symbol.iterator])s=Array.from(e,(i,a)=>t(i,a,void 0,o&&o[a]));else{const i=Object.keys(e);s=new Array(i.length);for(let a=0,c=i.length;a<c;a++){const l=i[a];s[a]=t(e[l],l,a,o&&o[a])}}else s=[];return n&&(n[r]=s),s}const Dr=e=>e?ua(e)?Ps(e)||e.proxy:Dr(e.parent):null,Yt=fe(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Dr(e.parent),$root:e=>Dr(e.root),$emit:e=>e.emit,$options:e=>Ts(e),$forceUpdate:e=>e.f||(e.f=()=>Xn(e.update)),$nextTick:e=>e.n||(e.n=Yn.bind(e.proxy)),$watch:e=>Fl.bind(e)}),pr=(e,t)=>e!==se&&!e.__isScriptSetup&&K(e,t),Gl={get({_:e},t){const{ctx:n,setupState:r,data:s,props:o,accessCache:i,type:a,appContext:c}=e;let l;if(t[0]!=="$"){const y=i[t];if(y!==void 0)switch(y){case 1:return r[t];case 2:return s[t];case 4:return n[t];case 3:return o[t]}else{if(pr(r,t))return i[t]=1,r[t];if(s!==se&&K(s,t))return i[t]=2,s[t];if((l=e.propsOptions[0])&&K(l,t))return i[t]=3,o[t];if(n!==se&&K(n,t))return i[t]=4,n[t];Nr&&(i[t]=0)}}const d=Yt[t];let f,p;if(d)return t==="$attrs"&&_e(e,"get",t),d(e);if((f=a.__cssModules)&&(f=f[t]))return f;if(n!==se&&K(n,t))return i[t]=4,n[t];if(p=c.config.globalProperties,K(p,t))return p[t]},set({_:e},t,n){const{data:r,setupState:s,ctx:o}=e;return pr(s,t)?(s[t]=n,!0):r!==se&&K(r,t)?(r[t]=n,!0):K(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(o[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:s,propsOptions:o}},i){let a;return!!n[i]||e!==se&&K(e,i)||pr(t,i)||(a=o[0])&&K(a,i)||K(r,i)||K(Yt,i)||K(s.config.globalProperties,i)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:K(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function io(e){return N(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let Nr=!0;function Yl(e){const t=Ts(e),n=e.proxy,r=e.ctx;Nr=!1,t.beforeCreate&&ao(t.beforeCreate,e,"bc");const{data:s,computed:o,methods:i,watch:a,provide:c,inject:l,created:d,beforeMount:f,mounted:p,beforeUpdate:y,updated:g,activated:T,deactivated:D,beforeDestroy:_,beforeUnmount:b,destroyed:$,unmounted:I,render:x,renderTracked:U,renderTriggered:L,errorCaptured:S,serverPrefetch:j,expose:z,inheritAttrs:J,components:ge,directives:re,filters:k}=t;if(l&&Xl(l,r,null),i)for(const Z in i){const Q=i[Z];B(Q)&&(r[Z]=Q.bind(n))}if(s){const Z=s.call(n,n);ne(Z)&&(e.data=rt(Z))}if(Nr=!0,o)for(const Z in o){const Q=o[Z],ot=B(Q)?Q.bind(n,n):B(Q.get)?Q.get.bind(n,n):Oe,fn=!B(Q)&&B(Q.set)?Q.set.bind(n):Oe,it=Tu({get:ot,set:fn});Object.defineProperty(r,Z,{enumerable:!0,configurable:!0,get:()=>it.value,set:$e=>it.value=$e})}if(a)for(const Z in a)Gi(a[Z],r,n,Z);if(c){const Z=B(c)?c.call(n):c;Reflect.ownKeys(Z).forEach(Q=>{Xi(Q,Z[Q])})}d&&ao(d,e,"c");function G(Z,Q){N(Q)?Q.forEach(ot=>Z(ot.bind(n))):Q&&Z(Q.bind(n))}if(G(jl,f),G(Ul,p),G(Wl,y),G(Vl,g),G(Bi,T),G(ji,D),G(Ki,S),G(zl,U),G(ql,L),G(Wi,b),G(Vi,I),G(Kl,j),N(z))if(z.length){const Z=e.exposed||(e.exposed={});z.forEach(Q=>{Object.defineProperty(Z,Q,{get:()=>n[Q],set:ot=>n[Q]=ot})})}else e.exposed||(e.exposed={});x&&e.render===Oe&&(e.render=x),J!=null&&(e.inheritAttrs=J),ge&&(e.components=ge),re&&(e.directives=re)}function Xl(e,t,n=Oe){N(e)&&(e=Lr(e));for(const r in e){const s=e[r];let o;ne(s)?"default"in s?o=Pt(s.from||r,s.default,!0):o=Pt(s.from||r):o=Pt(s),ue(o)?Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>o.value,set:i=>o.value=i}):t[r]=o}}function ao(e,t,n){Me(N(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function Gi(e,t,n,r){const s=r.includes(".")?Fi(n,r):()=>n[r];if(oe(e)){const o=t[e];B(o)&&Jt(s,o)}else if(B(e))Jt(s,e.bind(n));else if(ne(e))if(N(e))e.forEach(o=>Gi(o,t,n,r));else{const o=B(e.handler)?e.handler.bind(n):t[e.handler];B(o)&&Jt(s,o,e)}}function Ts(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:s,optionsCache:o,config:{optionMergeStrategies:i}}=e.appContext,a=o.get(t);let c;return a?c=a:!s.length&&!n&&!r?c=t:(c={},s.length&&s.forEach(l=>On(c,l,i,!0)),On(c,t,i)),ne(t)&&o.set(t,c),c}function On(e,t,n,r=!1){const{mixins:s,extends:o}=t;o&&On(e,o,n,!0),s&&s.forEach(i=>On(e,i,n,!0));for(const i in t)if(!(r&&i==="expose")){const a=Zl[i]||n&&n[i];e[i]=a?a(e[i],t[i]):t[i]}return e}const Zl={data:co,props:lo,emits:lo,methods:qt,computed:qt,beforeCreate:me,created:me,beforeMount:me,mounted:me,beforeUpdate:me,updated:me,beforeDestroy:me,beforeUnmount:me,destroyed:me,unmounted:me,activated:me,deactivated:me,errorCaptured:me,serverPrefetch:me,components:qt,directives:qt,watch:eu,provide:co,inject:Ql};function co(e,t){return t?e?function(){return fe(B(e)?e.call(this,this):e,B(t)?t.call(this,this):t)}:t:e}function Ql(e,t){return qt(Lr(e),Lr(t))}function Lr(e){if(N(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function me(e,t){return e?[...new Set([].concat(e,t))]:t}function qt(e,t){return e?fe(Object.create(null),e,t):t}function lo(e,t){return e?N(e)&&N(t)?[...new Set([...e,...t])]:fe(Object.create(null),io(e),io(t??{})):t}function eu(e,t){if(!e)return t;if(!t)return e;const n=fe(Object.create(null),e);for(const r in t)n[r]=me(e[r],t[r]);return n}function Yi(){return{app:null,config:{isNativeTag:Ic,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let tu=0;function nu(e,t){return function(r,s=null){B(r)||(r=fe({},r)),s!=null&&!ne(s)&&(s=null);const o=Yi(),i=new Set;let a=!1;const c=o.app={_uid:tu++,_component:r,_props:s,_container:null,_context:o,_instance:null,version:da,get config(){return o.config},set config(l){},use(l,...d){return i.has(l)||(l&&B(l.install)?(i.add(l),l.install(c,...d)):B(l)&&(i.add(l),l(c,...d))),c},mixin(l){return o.mixins.includes(l)||o.mixins.push(l),c},component(l,d){return d?(o.components[l]=d,c):o.components[l]},directive(l,d){return d?(o.directives[l]=d,c):o.directives[l]},mount(l,d,f){if(!a){const p=ie(r,s);return p.appContext=o,d&&t?t(p,l):e(p,l,f),a=!0,c._container=l,l.__vue_app__=c,Ps(p.component)||p.component.proxy}},unmount(){a&&(e(null,c._container),delete c._container.__vue_app__)},provide(l,d){return o.provides[l]=d,c},runWithContext(l){on=c;try{return l()}finally{on=null}}};return c}}let on=null;function Xi(e,t){if(le){let n=le.provides;const r=le.parent&&le.parent.provides;r===n&&(n=le.provides=Object.create(r)),n[e]=t}}function Pt(e,t,n=!1){const r=le||Ie;if(r||on){const s=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:on._context.provides;if(s&&e in s)return s[e];if(arguments.length>1)return n&&B(t)?t.call(r&&r.proxy):t}}function Zi(){return!!(le||Ie||on)}function ru(e,t,n,r=!1){const s={},o={};Rn(o,tr,1),e.propsDefaults=Object.create(null),Qi(e,t,s,o);for(const i in e.propsOptions[0])i in s||(s[i]=void 0);n?e.props=r?s:Ti(s):e.type.props?e.props=s:e.props=o,e.attrs=o}function su(e,t,n,r){const{props:s,attrs:o,vnode:{patchFlag:i}}=e,a=q(s),[c]=e.propsOptions;let l=!1;if((r||i>0)&&!(i&16)){if(i&8){const d=e.vnode.dynamicProps;for(let f=0;f<d.length;f++){let p=d[f];if(Zn(e.emitsOptions,p))continue;const y=t[p];if(c)if(K(o,p))y!==o[p]&&(o[p]=y,l=!0);else{const g=Fe(p);s[g]=Fr(c,a,g,y,e,!1)}else y!==o[p]&&(o[p]=y,l=!0)}}}else{Qi(e,t,s,o)&&(l=!0);let d;for(const f in a)(!t||!K(t,f)&&((d=Dt(f))===f||!K(t,d)))&&(c?n&&(n[f]!==void 0||n[d]!==void 0)&&(s[f]=Fr(c,a,f,void 0,e,!0)):delete s[f]);if(o!==a)for(const f in o)(!t||!K(t,f))&&(delete o[f],l=!0)}l&&We(e,"set","$attrs")}function Qi(e,t,n,r){const[s,o]=e.propsOptions;let i=!1,a;if(t)for(let c in t){if(zt(c))continue;const l=t[c];let d;s&&K(s,d=Fe(c))?!o||!o.includes(d)?n[d]=l:(a||(a={}))[d]=l:Zn(e.emitsOptions,c)||(!(c in r)||l!==r[c])&&(r[c]=l,i=!0)}if(o){const c=q(n),l=a||se;for(let d=0;d<o.length;d++){const f=o[d];n[f]=Fr(s,c,f,l[f],e,!K(l,f))}}return i}function Fr(e,t,n,r,s,o){const i=e[n];if(i!=null){const a=K(i,"default");if(a&&r===void 0){const c=i.default;if(i.type!==Function&&!i.skipFactory&&B(c)){const{propsDefaults:l}=s;n in l?r=l[n]:($t(s),r=l[n]=c.call(null,t),ht())}else r=c}i[0]&&(o&&!a?r=!1:i[1]&&(r===""||r===Dt(n))&&(r=!0))}return r}function ea(e,t,n=!1){const r=t.propsCache,s=r.get(e);if(s)return s;const o=e.props,i={},a=[];let c=!1;if(!B(e)){const d=f=>{c=!0;const[p,y]=ea(f,t,!0);fe(i,p),y&&a.push(...y)};!n&&t.mixins.length&&t.mixins.forEach(d),e.extends&&d(e.extends),e.mixins&&e.mixins.forEach(d)}if(!o&&!c)return ne(e)&&r.set(e,At),At;if(N(o))for(let d=0;d<o.length;d++){const f=Fe(o[d]);uo(f)&&(i[f]=se)}else if(o)for(const d in o){const f=Fe(d);if(uo(f)){const p=o[d],y=i[f]=N(p)||B(p)?{type:p}:fe({},p);if(y){const g=po(Boolean,y.type),T=po(String,y.type);y[0]=g>-1,y[1]=T<0||g<T,(g>-1||K(y,"default"))&&a.push(f)}}}const l=[i,a];return ne(e)&&r.set(e,l),l}function uo(e){return e[0]!=="$"}function fo(e){const t=e&&e.toString().match(/^\s*(function|class) (\w+)/);return t?t[2]:e===null?"null":""}function ho(e,t){return fo(e)===fo(t)}function po(e,t){return N(t)?t.findIndex(n=>ho(n,e)):B(t)&&ho(t,e)?0:-1}const ta=e=>e[0]==="_"||e==="$stable",As=e=>N(e)?e.map(Ce):[Ce(e)],ou=(e,t,n)=>{if(t._n)return t;const r=bs((...s)=>As(t(...s)),n);return r._c=!1,r},na=(e,t,n)=>{const r=e._ctx;for(const s in e){if(ta(s))continue;const o=e[s];if(B(o))t[s]=ou(s,o,r);else if(o!=null){const i=As(o);t[s]=()=>i}}},ra=(e,t)=>{const n=As(t);e.slots.default=()=>n},iu=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=q(t),Rn(t,"_",n)):na(t,e.slots={})}else e.slots={},t&&ra(e,t);Rn(e.slots,tr,1)},au=(e,t,n)=>{const{vnode:r,slots:s}=e;let o=!0,i=se;if(r.shapeFlag&32){const a=t._;a?n&&a===1?o=!1:(fe(s,t),!n&&a===1&&delete s._):(o=!t.$stable,na(t,s)),i=t}else t&&(ra(e,t),i={default:1});if(o)for(const a in s)!ta(a)&&!(a in i)&&delete s[a]};function Mn(e,t,n,r,s=!1){if(N(e)){e.forEach((p,y)=>Mn(p,t&&(N(t)?t[y]:t),n,r,s));return}if(Gt(r)&&!s)return;const o=r.shapeFlag&4?Ps(r.component)||r.component.proxy:r.el,i=s?null:o,{i:a,r:c}=e,l=t&&t.r,d=a.refs===se?a.refs={}:a.refs,f=a.setupState;if(l!=null&&l!==c&&(oe(l)?(d[l]=null,K(f,l)&&(f[l]=null)):ue(l)&&(l.value=null)),B(c))Ye(c,a,12,[i,d]);else{const p=oe(c),y=ue(c);if(p||y){const g=()=>{if(e.f){const T=p?K(f,c)?f[c]:d[c]:c.value;s?N(T)&&as(T,o):N(T)?T.includes(o)||T.push(o):p?(d[c]=[o],K(f,c)&&(f[c]=d[c])):(c.value=[o],e.k&&(d[e.k]=c.value))}else p?(d[c]=i,K(f,c)&&(f[c]=i)):y&&(c.value=i,e.k&&(d[e.k]=i))};i?(g.id=-1,ye(g,n)):g()}}}let qe=!1;const _n=e=>/svg/.test(e.namespaceURI)&&e.tagName!=="foreignObject",wn=e=>e.nodeType===8;function cu(e){const{mt:t,p:n,o:{patchProp:r,createText:s,nextSibling:o,parentNode:i,remove:a,insert:c,createComment:l}}=e,d=(_,b)=>{if(!b.hasChildNodes()){n(null,_,b),Pn(),b._vnode=_;return}qe=!1,f(b.firstChild,_,null,null,null),Pn(),b._vnode=_,qe&&console.error("Hydration completed but contains mismatches.")},f=(_,b,$,I,x,U=!1)=>{const L=wn(_)&&_.data==="[",S=()=>T(_,b,$,I,x,L),{type:j,ref:z,shapeFlag:J,patchFlag:ge}=b;let re=_.nodeType;b.el=_,ge===-2&&(U=!1,b.dynamicChildren=null);let k=null;switch(j){case xt:re!==3?b.children===""?(c(b.el=s(""),i(_),_),k=_):k=S():(_.data!==b.children&&(qe=!0,_.data=b.children),k=o(_));break;case Be:re!==8||L?k=S():k=o(_);break;case Tn:if(L&&(_=o(_),re=_.nodeType),re===1||re===3){k=_;const we=!b.children.length;for(let G=0;G<b.staticCount;G++)we&&(b.children+=k.nodeType===1?k.outerHTML:k.data),G===b.staticCount-1&&(b.anchor=k),k=o(k);return L?o(k):k}else S();break;case Ee:L?k=g(_,b,$,I,x,U):k=S();break;default:if(J&1)re!==1||b.type.toLowerCase()!==_.tagName.toLowerCase()?k=S():k=p(_,b,$,I,x,U);else if(J&6){b.slotScopeIds=x;const we=i(_);if(t(b,we,null,$,I,_n(we),U),k=L?D(_):o(_),k&&wn(k)&&k.data==="teleport end"&&(k=o(k)),Gt(b)){let G;L?(G=ie(Ee),G.anchor=k?k.previousSibling:we.lastChild):G=_.nodeType===3?Cs(""):ie("div"),G.el=_,b.component.subTree=G}}else J&64?re!==8?k=S():k=b.type.hydrate(_,b,$,I,x,U,e,y):J&128&&(k=b.type.hydrate(_,b,$,I,_n(i(_)),x,U,e,f))}return z!=null&&Mn(z,null,I,b),k},p=(_,b,$,I,x,U)=>{U=U||!!b.dynamicChildren;const{type:L,props:S,patchFlag:j,shapeFlag:z,dirs:J}=b,ge=L==="input"&&J||L==="option";if(ge||j!==-1){if(J&&De(b,null,$,"created"),S)if(ge||!U||j&48)for(const k in S)(ge&&k.endsWith("value")||cn(k)&&!zt(k))&&r(_,k,null,S[k],!1,void 0,$);else S.onClick&&r(_,"onClick",null,S.onClick,!1,void 0,$);let re;if((re=S&&S.onVnodeBeforeMount)&&Ae(re,$,b),J&&De(b,null,$,"beforeMount"),((re=S&&S.onVnodeMounted)||J)&&Li(()=>{re&&Ae(re,$,b),J&&De(b,null,$,"mounted")},I),z&16&&!(S&&(S.innerHTML||S.textContent))){let k=y(_.firstChild,b,_,$,I,x,U);for(;k;){qe=!0;const we=k;k=k.nextSibling,a(we)}}else z&8&&_.textContent!==b.children&&(qe=!0,_.textContent=b.children)}return _.nextSibling},y=(_,b,$,I,x,U,L)=>{L=L||!!b.dynamicChildren;const S=b.children,j=S.length;for(let z=0;z<j;z++){const J=L?S[z]:S[z]=Ce(S[z]);if(_)_=f(_,J,I,x,U,L);else{if(J.type===xt&&!J.children)continue;qe=!0,n(null,J,$,null,I,x,_n($),U)}}return _},g=(_,b,$,I,x,U)=>{const{slotScopeIds:L}=b;L&&(x=x?x.concat(L):L);const S=i(_),j=y(o(_),b,S,$,I,x,U);return j&&wn(j)&&j.data==="]"?o(b.anchor=j):(qe=!0,c(b.anchor=l("]"),S,j),j)},T=(_,b,$,I,x,U)=>{if(qe=!0,b.el=null,U){const j=D(_);for(;;){const z=o(_);if(z&&z!==j)a(z);else break}}const L=o(_),S=i(_);return a(_),n(null,b,S,L,$,I,_n(S),x),L},D=_=>{let b=0;for(;_;)if(_=o(_),_&&wn(_)&&(_.data==="["&&b++,_.data==="]")){if(b===0)return o(_);b--}return _};return[d,f]}const ye=Li;function lu(e){return sa(e)}function uu(e){return sa(e,cu)}function sa(e,t){const n=xr();n.__VUE__=!0;const{insert:r,remove:s,patchProp:o,createElement:i,createText:a,createComment:c,setText:l,setElementText:d,parentNode:f,nextSibling:p,setScopeId:y=Oe,insertStaticContent:g}=e,T=(u,h,m,v=null,w=null,C=null,H=!1,A=null,R=!!h.dynamicChildren)=>{if(u===h)return;u&&!Je(u,h)&&(v=dn(u),$e(u,w,C,!0),u=null),h.patchFlag===-2&&(R=!1,h.dynamicChildren=null);const{type:E,ref:O,shapeFlag:P}=h;switch(E){case xt:D(u,h,m,v);break;case Be:_(u,h,m,v);break;case Tn:u==null&&b(h,m,v,H);break;case Ee:ge(u,h,m,v,w,C,H,A,R);break;default:P&1?x(u,h,m,v,w,C,H,A,R):P&6?re(u,h,m,v,w,C,H,A,R):(P&64||P&128)&&E.process(u,h,m,v,w,C,H,A,R,vt)}O!=null&&w&&Mn(O,u&&u.ref,C,h||u,!h)},D=(u,h,m,v)=>{if(u==null)r(h.el=a(h.children),m,v);else{const w=h.el=u.el;h.children!==u.children&&l(w,h.children)}},_=(u,h,m,v)=>{u==null?r(h.el=c(h.children||""),m,v):h.el=u.el},b=(u,h,m,v)=>{[u.el,u.anchor]=g(u.children,h,m,v,u.el,u.anchor)},$=({el:u,anchor:h},m,v)=>{let w;for(;u&&u!==h;)w=p(u),r(u,m,v),u=w;r(h,m,v)},I=({el:u,anchor:h})=>{let m;for(;u&&u!==h;)m=p(u),s(u),u=m;s(h)},x=(u,h,m,v,w,C,H,A,R)=>{H=H||h.type==="svg",u==null?U(h,m,v,w,C,H,A,R):j(u,h,w,C,H,A,R)},U=(u,h,m,v,w,C,H,A)=>{let R,E;const{type:O,props:P,shapeFlag:M,transition:F,dirs:W}=u;if(R=u.el=i(u.type,C,P&&P.is,P),M&8?d(R,u.children):M&16&&S(u.children,R,null,v,w,C&&O!=="foreignObject",H,A),W&&De(u,null,v,"created"),L(R,u,u.scopeId,H,v),P){for(const Y in P)Y!=="value"&&!zt(Y)&&o(R,Y,null,P[Y],C,u.children,v,w,je);"value"in P&&o(R,"value",null,P.value),(E=P.onVnodeBeforeMount)&&Ae(E,v,u)}W&&De(u,null,v,"beforeMount");const ee=(!w||w&&!w.pendingBranch)&&F&&!F.persisted;ee&&F.beforeEnter(R),r(R,h,m),((E=P&&P.onVnodeMounted)||ee||W)&&ye(()=>{E&&Ae(E,v,u),ee&&F.enter(R),W&&De(u,null,v,"mounted")},w)},L=(u,h,m,v,w)=>{if(m&&y(u,m),v)for(let C=0;C<v.length;C++)y(u,v[C]);if(w){let C=w.subTree;if(h===C){const H=w.vnode;L(u,H,H.scopeId,H.slotScopeIds,w.parent)}}},S=(u,h,m,v,w,C,H,A,R=0)=>{for(let E=R;E<u.length;E++){const O=u[E]=A?ze(u[E]):Ce(u[E]);T(null,O,h,m,v,w,C,H,A)}},j=(u,h,m,v,w,C,H)=>{const A=h.el=u.el;let{patchFlag:R,dynamicChildren:E,dirs:O}=h;R|=u.patchFlag&16;const P=u.props||se,M=h.props||se;let F;m&&at(m,!1),(F=M.onVnodeBeforeUpdate)&&Ae(F,m,h,u),O&&De(h,u,m,"beforeUpdate"),m&&at(m,!0);const W=w&&h.type!=="foreignObject";if(E?z(u.dynamicChildren,E,A,m,v,W,C):H||Q(u,h,A,null,m,v,W,C,!1),R>0){if(R&16)J(A,h,P,M,m,v,w);else if(R&2&&P.class!==M.class&&o(A,"class",null,M.class,w),R&4&&o(A,"style",P.style,M.style,w),R&8){const ee=h.dynamicProps;for(let Y=0;Y<ee.length;Y++){const ae=ee[Y],He=P[ae],Et=M[ae];(Et!==He||ae==="value")&&o(A,ae,He,Et,w,u.children,m,v,je)}}R&1&&u.children!==h.children&&d(A,h.children)}else!H&&E==null&&J(A,h,P,M,m,v,w);((F=M.onVnodeUpdated)||O)&&ye(()=>{F&&Ae(F,m,h,u),O&&De(h,u,m,"updated")},v)},z=(u,h,m,v,w,C,H)=>{for(let A=0;A<h.length;A++){const R=u[A],E=h[A],O=R.el&&(R.type===Ee||!Je(R,E)||R.shapeFlag&70)?f(R.el):m;T(R,E,O,null,v,w,C,H,!0)}},J=(u,h,m,v,w,C,H)=>{if(m!==v){if(m!==se)for(const A in m)!zt(A)&&!(A in v)&&o(u,A,m[A],null,H,h.children,w,C,je);for(const A in v){if(zt(A))continue;const R=v[A],E=m[A];R!==E&&A!=="value"&&o(u,A,E,R,H,h.children,w,C,je)}"value"in v&&o(u,"value",m.value,v.value)}},ge=(u,h,m,v,w,C,H,A,R)=>{const E=h.el=u?u.el:a(""),O=h.anchor=u?u.anchor:a("");let{patchFlag:P,dynamicChildren:M,slotScopeIds:F}=h;F&&(A=A?A.concat(F):F),u==null?(r(E,m,v),r(O,m,v),S(h.children,m,O,w,C,H,A,R)):P>0&&P&64&&M&&u.dynamicChildren?(z(u.dynamicChildren,M,m,w,C,H,A),(h.key!=null||w&&h===w.subTree)&&oa(u,h,!0)):Q(u,h,m,O,w,C,H,A,R)},re=(u,h,m,v,w,C,H,A,R)=>{h.slotScopeIds=A,u==null?h.shapeFlag&512?w.ctx.activate(h,m,v,H,R):k(h,m,v,w,C,H,R):we(u,h,R)},k=(u,h,m,v,w,C,H)=>{const A=u.component=yu(u,v,w);if(Es(u)&&(A.ctx.renderer=vt),bu(A),A.asyncDep){if(w&&w.registerDep(A,G),!u.el){const R=A.subTree=ie(Be);_(null,R,h,m)}return}G(A,u,h,m,w,C,H)},we=(u,h,m)=>{const v=h.component=u.component;if(Sl(u,h,m))if(v.asyncDep&&!v.asyncResolved){Z(v,h,m);return}else v.next=h,Il(v.update),v.update();else h.el=u.el,v.vnode=h},G=(u,h,m,v,w,C,H)=>{const A=()=>{if(u.isMounted){let{next:O,bu:P,u:M,parent:F,vnode:W}=u,ee=O,Y;at(u,!1),O?(O.el=W.el,Z(u,O,H)):O=W,P&&fr(P),(Y=O.props&&O.props.onVnodeBeforeUpdate)&&Ae(Y,F,O,W),at(u,!0);const ae=dr(u),He=u.subTree;u.subTree=ae,T(He,ae,f(He.el),dn(He),u,w,C),O.el=ae.el,ee===null&&_s(u,ae.el),M&&ye(M,w),(Y=O.props&&O.props.onVnodeUpdated)&&ye(()=>Ae(Y,F,O,W),w)}else{let O;const{el:P,props:M}=h,{bm:F,m:W,parent:ee}=u,Y=Gt(h);if(at(u,!1),F&&fr(F),!Y&&(O=M&&M.onVnodeBeforeMount)&&Ae(O,ee,h),at(u,!0),P&&lr){const ae=()=>{u.subTree=dr(u),lr(P,u.subTree,u,w,null)};Y?h.type.__asyncLoader().then(()=>!u.isUnmounted&&ae()):ae()}else{const ae=u.subTree=dr(u);T(null,ae,m,v,u,w,C),h.el=ae.el}if(W&&ye(W,w),!Y&&(O=M&&M.onVnodeMounted)){const ae=h;ye(()=>Ae(O,ee,ae),w)}(h.shapeFlag&256||ee&&Gt(ee.vnode)&&ee.vnode.shapeFlag&256)&&u.a&&ye(u.a,w),u.isMounted=!0,h=m=v=null}},R=u.effect=new fs(A,()=>Xn(E),u.scope),E=u.update=()=>R.run();E.id=u.uid,at(u,!0),E()},Z=(u,h,m)=>{h.component=u;const v=u.vnode.props;u.vnode=h,u.next=null,su(u,h.props,v,m),au(u,h.children,m),Nt(),to(),Lt()},Q=(u,h,m,v,w,C,H,A,R=!1)=>{const E=u&&u.children,O=u?u.shapeFlag:0,P=h.children,{patchFlag:M,shapeFlag:F}=h;if(M>0){if(M&128){fn(E,P,m,v,w,C,H,A,R);return}else if(M&256){ot(E,P,m,v,w,C,H,A,R);return}}F&8?(O&16&&je(E,w,C),P!==E&&d(m,P)):O&16?F&16?fn(E,P,m,v,w,C,H,A,R):je(E,w,C,!0):(O&8&&d(m,""),F&16&&S(P,m,v,w,C,H,A,R))},ot=(u,h,m,v,w,C,H,A,R)=>{u=u||At,h=h||At;const E=u.length,O=h.length,P=Math.min(E,O);let M;for(M=0;M<P;M++){const F=h[M]=R?ze(h[M]):Ce(h[M]);T(u[M],F,m,null,w,C,H,A,R)}E>O?je(u,w,C,!0,!1,P):S(h,m,v,w,C,H,A,R,P)},fn=(u,h,m,v,w,C,H,A,R)=>{let E=0;const O=h.length;let P=u.length-1,M=O-1;for(;E<=P&&E<=M;){const F=u[E],W=h[E]=R?ze(h[E]):Ce(h[E]);if(Je(F,W))T(F,W,m,null,w,C,H,A,R);else break;E++}for(;E<=P&&E<=M;){const F=u[P],W=h[M]=R?ze(h[M]):Ce(h[M]);if(Je(F,W))T(F,W,m,null,w,C,H,A,R);else break;P--,M--}if(E>P){if(E<=M){const F=M+1,W=F<O?h[F].el:v;for(;E<=M;)T(null,h[E]=R?ze(h[E]):Ce(h[E]),m,W,w,C,H,A,R),E++}}else if(E>M)for(;E<=P;)$e(u[E],w,C,!0),E++;else{const F=E,W=E,ee=new Map;for(E=W;E<=M;E++){const ve=h[E]=R?ze(h[E]):Ce(h[E]);ve.key!=null&&ee.set(ve.key,E)}let Y,ae=0;const He=M-W+1;let Et=!1,Ws=0;const Ut=new Array(He);for(E=0;E<He;E++)Ut[E]=0;for(E=F;E<=P;E++){const ve=u[E];if(ae>=He){$e(ve,w,C,!0);continue}let ke;if(ve.key!=null)ke=ee.get(ve.key);else for(Y=W;Y<=M;Y++)if(Ut[Y-W]===0&&Je(ve,h[Y])){ke=Y;break}ke===void 0?$e(ve,w,C,!0):(Ut[ke-W]=E+1,ke>=Ws?Ws=ke:Et=!0,T(ve,h[ke],m,null,w,C,H,A,R),ae++)}const Vs=Et?fu(Ut):At;for(Y=Vs.length-1,E=He-1;E>=0;E--){const ve=W+E,ke=h[ve],Ks=ve+1<O?h[ve+1].el:v;Ut[E]===0?T(null,ke,m,Ks,w,C,H,A,R):Et&&(Y<0||E!==Vs[Y]?it(ke,m,Ks,2):Y--)}}},it=(u,h,m,v,w=null)=>{const{el:C,type:H,transition:A,children:R,shapeFlag:E}=u;if(E&6){it(u.component.subTree,h,m,v);return}if(E&128){u.suspense.move(h,m,v);return}if(E&64){H.move(u,h,m,vt);return}if(H===Ee){r(C,h,m);for(let P=0;P<R.length;P++)it(R[P],h,m,v);r(u.anchor,h,m);return}if(H===Tn){$(u,h,m);return}if(v!==2&&E&1&&A)if(v===0)A.beforeEnter(C),r(C,h,m),ye(()=>A.enter(C),w);else{const{leave:P,delayLeave:M,afterLeave:F}=A,W=()=>r(C,h,m),ee=()=>{P(C,()=>{W(),F&&F()})};M?M(C,W,ee):ee()}else r(C,h,m)},$e=(u,h,m,v=!1,w=!1)=>{const{type:C,props:H,ref:A,children:R,dynamicChildren:E,shapeFlag:O,patchFlag:P,dirs:M}=u;if(A!=null&&Mn(A,null,m,u,!0),O&256){h.ctx.deactivate(u);return}const F=O&1&&M,W=!Gt(u);let ee;if(W&&(ee=H&&H.onVnodeBeforeUnmount)&&Ae(ee,h,u),O&6)Ec(u.component,m,v);else{if(O&128){u.suspense.unmount(m,v);return}F&&De(u,null,h,"beforeUnmount"),O&64?u.type.remove(u,h,m,w,vt,v):E&&(C!==Ee||P>0&&P&64)?je(E,h,m,!1,!0):(C===Ee&&P&384||!w&&O&16)&&je(R,h,m),v&&js(u)}(W&&(ee=H&&H.onVnodeUnmounted)||F)&&ye(()=>{ee&&Ae(ee,h,u),F&&De(u,null,h,"unmounted")},m)},js=u=>{const{type:h,el:m,anchor:v,transition:w}=u;if(h===Ee){vc(m,v);return}if(h===Tn){I(u);return}const C=()=>{s(m),w&&!w.persisted&&w.afterLeave&&w.afterLeave()};if(u.shapeFlag&1&&w&&!w.persisted){const{leave:H,delayLeave:A}=w,R=()=>H(m,C);A?A(u.el,C,R):R()}else C()},vc=(u,h)=>{let m;for(;u!==h;)m=p(u),s(u),u=m;s(h)},Ec=(u,h,m)=>{const{bum:v,scope:w,update:C,subTree:H,um:A}=u;v&&fr(v),w.stop(),C&&(C.active=!1,$e(H,u,h,m)),A&&ye(A,h),ye(()=>{u.isUnmounted=!0},h),h&&h.pendingBranch&&!h.isUnmounted&&u.asyncDep&&!u.asyncResolved&&u.suspenseId===h.pendingId&&(h.deps--,h.deps===0&&h.resolve())},je=(u,h,m,v=!1,w=!1,C=0)=>{for(let H=C;H<u.length;H++)$e(u[H],h,m,v,w)},dn=u=>u.shapeFlag&6?dn(u.component.subTree):u.shapeFlag&128?u.suspense.next():p(u.anchor||u.el),Us=(u,h,m)=>{u==null?h._vnode&&$e(h._vnode,null,null,!0):T(h._vnode||null,u,h,null,null,null,m),to(),Pn(),h._vnode=u},vt={p:T,um:$e,m:it,r:js,mt:k,mc:S,pc:Q,pbc:z,n:dn,o:e};let cr,lr;return t&&([cr,lr]=t(vt)),{render:Us,hydrate:cr,createApp:nu(Us,cr)}}function at({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function oa(e,t,n=!1){const r=e.children,s=t.children;if(N(r)&&N(s))for(let o=0;o<r.length;o++){const i=r[o];let a=s[o];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[o]=ze(s[o]),a.el=i.el),n||oa(i,a)),a.type===xt&&(a.el=i.el)}}function fu(e){const t=e.slice(),n=[0];let r,s,o,i,a;const c=e.length;for(r=0;r<c;r++){const l=e[r];if(l!==0){if(s=n[n.length-1],e[s]<l){t[r]=s,n.push(r);continue}for(o=0,i=n.length-1;o<i;)a=o+i>>1,e[n[a]]<l?o=a+1:i=a;l<e[n[o]]&&(o>0&&(t[r]=n[o-1]),n[o]=r)}}for(o=n.length,i=n[o-1];o-- >0;)n[o]=i,i=t[i];return n}const du=e=>e.__isTeleport,Ee=Symbol.for("v-fgt"),xt=Symbol.for("v-txt"),Be=Symbol.for("v-cmt"),Tn=Symbol.for("v-stc"),Xt=[];let Re=null;function ce(e=!1){Xt.push(Re=e?null:[])}function ia(){Xt.pop(),Re=Xt[Xt.length-1]||null}let Ot=1;function go(e){Ot+=e}function aa(e){return e.dynamicChildren=Ot>0?Re||At:null,ia(),Ot>0&&Re&&Re.push(e),e}function Xe(e,t,n,r,s,o){return aa(X(e,t,n,r,s,o,!0))}function xe(e,t,n,r,s){return aa(ie(e,t,n,r,s,!0))}function $n(e){return e?e.__v_isVNode===!0:!1}function Je(e,t){return e.type===t.type&&e.key===t.key}const tr="__vInternal",ca=({key:e})=>e??null,An=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?oe(e)||ue(e)||B(e)?{i:Ie,r:e,k:t,f:!!n}:e:null);function X(e,t=null,n=null,r=0,s=null,o=e===Ee?0:1,i=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&ca(t),ref:t&&An(t),scopeId:Qn,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Ie};return a?(Rs(c,n),o&128&&e.normalize(c)):n&&(c.shapeFlag|=oe(n)?8:16),Ot>0&&!i&&Re&&(c.patchFlag>0||o&6)&&c.patchFlag!==32&&Re.push(c),c}const ie=hu;function hu(e,t=null,n=null,r=0,s=null,o=!1){if((!e||e===qi)&&(e=Be),$n(e)){const a=Mt(e,t,!0);return n&&Rs(a,n),Ot>0&&!o&&Re&&(a.shapeFlag&6?Re[Re.indexOf(e)]=a:Re.push(a)),a.patchFlag|=-2,a}if(Iu(e)&&(e=e.__vccOpts),t){t=la(t);let{class:a,style:c}=t;a&&!oe(a)&&(t.class=ln(a)),ne(c)&&(Ci(c)&&!N(c)&&(c=fe({},c)),t.style=Jn(c))}const i=oe(e)?1:Pl(e)?128:du(e)?64:ne(e)?4:B(e)?2:0;return X(e,t,n,r,s,i,o,!0)}function la(e){return e?Ci(e)||tr in e?fe({},e):e:null}function Mt(e,t,n=!1){const{props:r,ref:s,patchFlag:o,children:i}=e,a=t?pu(r||{},t):r;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:a,key:a&&ca(a),ref:t&&t.ref?n&&s?N(s)?s.concat(An(t)):[s,An(t)]:An(t):s,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:i,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Ee?o===-1?16:o|16:o,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Mt(e.ssContent),ssFallback:e.ssFallback&&Mt(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce}}function Cs(e=" ",t=0){return ie(xt,null,e,t)}function Cn(e="",t=!1){return t?(ce(),xe(Be,null,e)):ie(Be,null,e)}function Ce(e){return e==null||typeof e=="boolean"?ie(Be):N(e)?ie(Ee,null,e.slice()):typeof e=="object"?ze(e):ie(xt,null,String(e))}function ze(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Mt(e)}function Rs(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(N(t))n=16;else if(typeof t=="object")if(r&65){const s=t.default;s&&(s._c&&(s._d=!1),Rs(e,s()),s._c&&(s._d=!0));return}else{n=32;const s=t._;!s&&!(tr in t)?t._ctx=Ie:s===3&&Ie&&(Ie.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else B(t)?(t={default:t,_ctx:Ie},n=32):(t=String(t),r&64?(n=16,t=[Cs(t)]):n=8);e.children=t,e.shapeFlag|=n}function pu(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const s in r)if(s==="class")t.class!==r.class&&(t.class=ln([t.class,r.class]));else if(s==="style")t.style=Jn([t.style,r.style]);else if(cn(s)){const o=t[s],i=r[s];i&&o!==i&&!(N(o)&&o.includes(i))&&(t[s]=o?[].concat(o,i):i)}else s!==""&&(t[s]=r[s])}return t}function Ae(e,t,n,r=null){Me(e,t,7,[n,r])}const gu=Yi();let mu=0;function yu(e,t,n){const r=e.type,s=(t?t.appContext:e.appContext)||gu,o={uid:mu++,vnode:e,type:r,parent:t,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new Lc(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:ea(r,s),emitsOptions:Ni(r,s),emit:null,emitted:null,propsDefaults:se,inheritAttrs:r.inheritAttrs,ctx:se,data:se,props:se,attrs:se,slots:se,refs:se,setupState:se,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return o.ctx={_:o},o.root=t?t.root:o,o.emit=Al.bind(null,o),e.ce&&e.ce(o),o}let le=null;const Hs=()=>le||Ie;let Ss,It,mo="__VUE_INSTANCE_SETTERS__";(It=xr()[mo])||(It=xr()[mo]=[]),It.push(e=>le=e),Ss=e=>{It.length>1?It.forEach(t=>t(e)):It[0](e)};const $t=e=>{Ss(e),e.scope.on()},ht=()=>{le&&le.scope.off(),Ss(null)};function ua(e){return e.vnode.shapeFlag&4}let kt=!1;function bu(e,t=!1){kt=t;const{props:n,children:r}=e.vnode,s=ua(e);ru(e,n,s,t),iu(e,r);const o=s?_u(e,t):void 0;return kt=!1,o}function _u(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=Ri(new Proxy(e.ctx,Gl));const{setup:r}=n;if(r){const s=e.setupContext=r.length>1?vu(e):null;$t(e),Nt();const o=Ye(r,e,0,[e.props,s]);if(Lt(),ht(),li(o)){if(o.then(ht,ht),t)return o.then(i=>{Br(e,i,t)}).catch(i=>{Ft(i,e,0)});e.asyncDep=o}else Br(e,o,t)}else fa(e,t)}function Br(e,t,n){B(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:ne(t)&&(e.setupState=xi(t)),fa(e,n)}let yo;function fa(e,t,n){const r=e.type;if(!e.render){if(!t&&yo&&!r.render){const s=r.template||Ts(e).template;if(s){const{isCustomElement:o,compilerOptions:i}=e.appContext.config,{delimiters:a,compilerOptions:c}=r,l=fe(fe({isCustomElement:o,delimiters:a},i),c);r.render=yo(s,l)}}e.render=r.render||Oe}$t(e),Nt(),Yl(e),Lt(),ht()}function wu(e){return e.attrsProxy||(e.attrsProxy=new Proxy(e.attrs,{get(t,n){return _e(e,"get","$attrs"),t[n]}}))}function vu(e){const t=n=>{e.exposed=n||{}};return{get attrs(){return wu(e)},slots:e.slots,emit:e.emit,expose:t}}function Ps(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(xi(Ri(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Yt)return Yt[n](e)},has(t,n){return n in t||n in Yt}}))}function Eu(e,t=!0){return B(e)?e.displayName||e.name:e.name||t&&e.__name}function Iu(e){return B(e)&&"__vccOpts"in e}const Tu=(e,t)=>wl(e,t,kt);function Au(e,t,n){const r=arguments.length;return r===2?ne(t)&&!N(t)?$n(t)?ie(e,null,[t]):ie(e,t):ie(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&$n(n)&&(n=[n]),ie(e,t,n))}const Cu=Symbol.for("v-scx"),Ru=()=>Pt(Cu),da="3.3.4",Hu="http://www.w3.org/2000/svg",ut=typeof document<"u"?document:null,bo=ut&&ut.createElement("template"),Su={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const s=t?ut.createElementNS(Hu,e):ut.createElement(e,n?{is:n}:void 0);return e==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:e=>ut.createTextNode(e),createComment:e=>ut.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>ut.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,s,o){const i=n?n.previousSibling:t.lastChild;if(s&&(s===o||s.nextSibling))for(;t.insertBefore(s.cloneNode(!0),n),!(s===o||!(s=s.nextSibling)););else{bo.innerHTML=r?`<svg>${e}</svg>`:e;const a=bo.content;if(r){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}t.insertBefore(a,n)}return[i?i.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function Pu(e,t,n){const r=e._vtc;r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function xu(e,t,n){const r=e.style,s=oe(n);if(n&&!s){if(t&&!oe(t))for(const o in t)n[o]==null&&jr(r,o,"");for(const o in n)jr(r,o,n[o])}else{const o=r.display;s?t!==n&&(r.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(r.display=o)}}const _o=/\s*!important$/;function jr(e,t,n){if(N(n))n.forEach(r=>jr(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=Ou(e,t);_o.test(n)?e.setProperty(Dt(r),n.replace(_o,""),"important"):e[r]=n}}const wo=["Webkit","Moz","ms"],gr={};function Ou(e,t){const n=gr[t];if(n)return n;let r=Fe(t);if(r!=="filter"&&r in e)return gr[t]=r;r=zn(r);for(let s=0;s<wo.length;s++){const o=wo[s]+r;if(o in e)return gr[t]=o}return t}const vo="http://www.w3.org/1999/xlink";function Mu(e,t,n,r,s){if(r&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(vo,t.slice(6,t.length)):e.setAttributeNS(vo,t,n);else{const o=Nc(t);n==null||o&&!di(n)?e.removeAttribute(t):e.setAttribute(t,o?"":n)}}function $u(e,t,n,r,s,o,i){if(t==="innerHTML"||t==="textContent"){r&&i(r,s,o),e[t]=n??"";return}const a=e.tagName;if(t==="value"&&a!=="PROGRESS"&&!a.includes("-")){e._value=n;const l=a==="OPTION"?e.getAttribute("value"):e.value,d=n??"";l!==d&&(e.value=d),n==null&&e.removeAttribute(t);return}let c=!1;if(n===""||n==null){const l=typeof e[t];l==="boolean"?n=di(n):n==null&&l==="string"?(n="",c=!0):l==="number"&&(n=0,c=!0)}try{e[t]=n}catch{}c&&e.removeAttribute(t)}function ku(e,t,n,r){e.addEventListener(t,n,r)}function Du(e,t,n,r){e.removeEventListener(t,n,r)}function Nu(e,t,n,r,s=null){const o=e._vei||(e._vei={}),i=o[t];if(r&&i)i.value=r;else{const[a,c]=Lu(t);if(r){const l=o[t]=ju(r,s);ku(e,a,l,c)}else i&&(Du(e,a,i,c),o[t]=void 0)}}const Eo=/(?:Once|Passive|Capture)$/;function Lu(e){let t;if(Eo.test(e)){t={};let r;for(;r=e.match(Eo);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):Dt(e.slice(2)),t]}let mr=0;const Fu=Promise.resolve(),Bu=()=>mr||(Fu.then(()=>mr=0),mr=Date.now());function ju(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Me(Uu(r,n.value),t,5,[r])};return n.value=e,n.attached=Bu(),n}function Uu(e,t){if(N(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>s=>!s._stopped&&r&&r(s))}else return t}const Io=/^on[a-z]/,Wu=(e,t,n,r,s=!1,o,i,a,c)=>{t==="class"?Pu(e,r,s):t==="style"?xu(e,n,r):cn(t)?is(t)||Nu(e,t,n,r,i):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Vu(e,t,r,s))?$u(e,t,r,o,i,a,c):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),Mu(e,t,r,s))};function Vu(e,t,n,r){return r?!!(t==="innerHTML"||t==="textContent"||t in e&&Io.test(t)&&B(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||Io.test(t)&&oe(n)?!1:t in e}const ha=fe({patchProp:Wu},Su);let Zt,To=!1;function Ku(){return Zt||(Zt=lu(ha))}function qu(){return Zt=To?Zt:uu(ha),To=!0,Zt}const zu=(...e)=>{const t=Ku().createApp(...e),{mount:n}=t;return t.mount=r=>{const s=pa(r);if(!s)return;const o=t._component;!B(o)&&!o.render&&!o.template&&(o.template=s.innerHTML),s.innerHTML="";const i=n(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),i},t},Ju=(...e)=>{const t=qu().createApp(...e),{mount:n}=t;return t.mount=r=>{const s=pa(r);if(s)return n(s,!0,s instanceof SVGElement)},t};function pa(e){return oe(e)?document.querySelector(e):e}const Gu=/"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/,Yu=/"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/,Xu=/^\s*["[{]|^\s*-?\d[\d.]{0,14}\s*$/;function Zu(e,t){if(e==="__proto__"||e==="constructor"&&t&&typeof t=="object"&&"prototype"in t){Qu(e);return}return t}function Qu(e){console.warn(`[destr] Dropping "${e}" key to prevent prototype pollution.`)}function ef(e,t={}){if(typeof e!="string")return e;const n=e.trim();if(e[0]==='"'&&e[e.length-1]==='"')return n.slice(1,-1);if(n.length<=9){const r=n.toLowerCase();if(r==="true")return!0;if(r==="false")return!1;if(r==="undefined")return;if(r==="null")return null;if(r==="nan")return Number.NaN;if(r==="infinity")return Number.POSITIVE_INFINITY;if(r==="-infinity")return Number.NEGATIVE_INFINITY}if(!Xu.test(e)){if(t.strict)throw new SyntaxError("[destr] Invalid JSON");return e}try{if(Gu.test(e)||Yu.test(e)){if(t.strict)throw new Error("[destr] Possible prototype pollution");return JSON.parse(e,Zu)}return JSON.parse(e)}catch(r){if(t.strict)throw r;return e}}const tf=/#/g,nf=/&/g,rf=/=/g,xs=/\+/g,sf=/%5e/gi,of=/%60/gi,af=/%7c/gi,cf=/%20/gi;function lf(e){return encodeURI(""+e).replace(af,"|")}function Ur(e){return lf(typeof e=="string"?e:JSON.stringify(e)).replace(xs,"%2B").replace(cf,"+").replace(tf,"%23").replace(nf,"%26").replace(of,"`").replace(sf,"^")}function yr(e){return Ur(e).replace(rf,"%3D")}function kn(e=""){try{return decodeURIComponent(""+e)}catch{return""+e}}function uf(e){return kn(e.replace(xs," "))}function ff(e){return kn(e.replace(xs," "))}function ga(e=""){const t={};e[0]==="?"&&(e=e.slice(1));for(const n of e.split("&")){const r=n.match(/([^=]+)=?(.*)/)||[];if(r.length<2)continue;const s=uf(r[1]);if(s==="__proto__"||s==="constructor")continue;const o=ff(r[2]||"");t[s]===void 0?t[s]=o:Array.isArray(t[s])?t[s].push(o):t[s]=[t[s],o]}return t}function df(e,t){return(typeof t=="number"||typeof t=="boolean")&&(t=String(t)),t?Array.isArray(t)?t.map(n=>`${yr(e)}=${Ur(n)}`).join("&"):`${yr(e)}=${Ur(t)}`:yr(e)}function ma(e){return Object.keys(e).filter(t=>e[t]!==void 0).map(t=>df(t,e[t])).filter(Boolean).join("&")}const hf=/^\w{2,}:([/\\]{1,2})/,pf=/^\w{2,}:([/\\]{2})?/,gf=/^([/\\]\s*){2,}[^/\\]/;function nr(e,t={}){return typeof t=="boolean"&&(t={acceptRelative:t}),t.strict?hf.test(e):pf.test(e)||(t.acceptRelative?gf.test(e):!1)}const mf=/\/$|\/\?/;function Wr(e="",t=!1){return t?mf.test(e):e.endsWith("/")}function ya(e="",t=!1){if(!t)return(Wr(e)?e.slice(0,-1):e)||"/";if(!Wr(e,!0))return e||"/";const[n,...r]=e.split("?");return(n.slice(0,-1)||"/")+(r.length>0?`?${r.join("?")}`:"")}function Vr(e="",t=!1){if(!t)return e.endsWith("/")?e:e+"/";if(Wr(e,!0))return e||"/";const[n,...r]=e.split("?");return n+"/"+(r.length>0?`?${r.join("?")}`:"")}function yf(e=""){return e.startsWith("/")}function Ao(e=""){return yf(e)?e:"/"+e}function bf(e,t){if(_a(t)||nr(e))return e;const n=ya(t);return e.startsWith(n)?e:Bt(n,e)}function _f(e,t){if(_a(t))return e;const n=ya(t);if(!e.startsWith(n))return e;const r=e.slice(n.length);return r[0]==="/"?r:"/"+r}function ba(e,t){const n=un(e),r={...ga(n.search),...t};return n.search=ma(r),wa(n)}function _a(e){return!e||e==="/"}function wf(e){return e&&e!=="/"}const vf=/^\.?\//;function Bt(e,...t){let n=e||"";for(const r of t.filter(s=>wf(s)))if(n){const s=r.replace(vf,"");n=Vr(n)+s}else n=r;return n}function Ef(e,t,n={}){return n.trailingSlash||(e=Vr(e),t=Vr(t)),n.leadingSlash||(e=Ao(e),t=Ao(t)),n.encoding||(e=kn(e),t=kn(t)),e===t}function un(e="",t){if(!nr(e,{acceptRelative:!0}))return t?un(t+e):Co(e);const[n="",r,s=""]=(e.replace(/\\/g,"/").match(/([^/:]+:)?\/\/([^/@]+@)?(.*)/)||[]).splice(1),[o="",i=""]=(s.match(/([^#/?]*)(.*)?/)||[]).splice(1),{pathname:a,search:c,hash:l}=Co(i.replace(/\/(?=[A-Za-z]:)/,""));return{protocol:n,auth:r?r.slice(0,Math.max(0,r.length-1)):"",host:o,pathname:a,search:c,hash:l}}function Co(e=""){const[t="",n="",r=""]=(e.match(/([^#?]*)(\?[^#]*)?(#.*)?/)||[]).splice(1);return{pathname:t,search:n,hash:r}}function wa(e){const t=e.pathname+(e.search?(e.search.startsWith("?")?"":"?")+e.search:"")+e.hash;return e.protocol?e.protocol+"//"+(e.auth?e.auth+"@":"")+e.host+t:t}class If extends Error{constructor(){super(...arguments),this.name="FetchError"}}function Tf(e,t,n){let r="";t&&(r=t.message),e&&n?r=`${r} (${n.status} ${n.statusText} (${e.toString()}))`:e&&(r=`${r} (${e.toString()})`);const s=new If(r);return Object.defineProperty(s,"request",{get(){return e}}),Object.defineProperty(s,"response",{get(){return n}}),Object.defineProperty(s,"data",{get(){return n&&n._data}}),Object.defineProperty(s,"status",{get(){return n&&n.status}}),Object.defineProperty(s,"statusText",{get(){return n&&n.statusText}}),Object.defineProperty(s,"statusCode",{get(){return n&&n.status}}),Object.defineProperty(s,"statusMessage",{get(){return n&&n.statusText}}),s}const Af=new Set(Object.freeze(["PATCH","POST","PUT","DELETE"]));function Ro(e="GET"){return Af.has(e.toUpperCase())}function Cf(e){if(e===void 0)return!1;const t=typeof e;return t==="string"||t==="number"||t==="boolean"||t===null?!0:t!=="object"?!1:Array.isArray(e)?!0:e.constructor&&e.constructor.name==="Object"||typeof e.toJSON=="function"}const Rf=new Set(["image/svg","application/xml","application/xhtml","application/html"]),Hf=/^application\/(?:[\w!#$%&*.^`~-]*\+)?json(;.+)?$/i;function Sf(e=""){if(!e)return"json";const t=e.split(";").shift()||"";return Hf.test(t)?"json":Rf.has(t)||t.startsWith("text/")?"text":"blob"}function Pf(e,t,n=globalThis.Headers){const r={...t,...e};if(t!=null&&t.params&&(e!=null&&e.params)&&(r.params={...t==null?void 0:t.params,...e==null?void 0:e.params}),t!=null&&t.query&&(e!=null&&e.query)&&(r.query={...t==null?void 0:t.query,...e==null?void 0:e.query}),t!=null&&t.headers&&(e!=null&&e.headers)){r.headers=new n((t==null?void 0:t.headers)||{});for(const[s,o]of new n((e==null?void 0:e.headers)||{}))r.headers.set(s,o)}return r}const xf=new Set([408,409,425,429,500,502,503,504]);function va(e){const{fetch:t,Headers:n}=e;function r(i){const a=i.error&&i.error.name==="AbortError"||!1;if(i.options.retry!==!1&&!a){let l;typeof i.options.retry=="number"?l=i.options.retry:l=Ro(i.options.method)?0:1;const d=i.response&&i.response.status||500;if(l>0&&xf.has(d))return s(i.request,{...i.options,retry:l-1})}const c=Tf(i.request,i.error,i.response);throw Error.captureStackTrace&&Error.captureStackTrace(c,s),c}const s=async function(a,c={}){const l={request:a,options:Pf(c,e.defaults,n),response:void 0,error:void 0};l.options.onRequest&&await l.options.onRequest(l),typeof l.request=="string"&&(l.options.baseURL&&(l.request=bf(l.request,l.options.baseURL)),(l.options.query||l.options.params)&&(l.request=ba(l.request,{...l.options.params,...l.options.query})),l.options.body&&Ro(l.options.method)&&Cf(l.options.body)&&(l.options.body=typeof l.options.body=="string"?l.options.body:JSON.stringify(l.options.body),l.options.headers=new n(l.options.headers||{}),l.options.headers.has("content-type")||l.options.headers.set("content-type","application/json"),l.options.headers.has("accept")||l.options.headers.set("accept","application/json")));try{l.response=await t(l.request,l.options)}catch(f){return l.error=f,l.options.onRequestError&&await l.options.onRequestError(l),await r(l)}const d=(l.options.parseResponse?"json":l.options.responseType)||Sf(l.response.headers.get("content-type")||"");if(d==="json"){const f=await l.response.text(),p=l.options.parseResponse||ef;l.response._data=p(f)}else d==="stream"?l.response._data=l.response.body:l.response._data=await l.response[d]();return l.options.onResponse&&await l.options.onResponse(l),!l.options.ignoreResponseError&&l.response.status>=400&&l.response.status<600?(l.options.onResponseError&&await l.options.onResponseError(l),await r(l)):l.response},o=async function(a,c){return(await s(a,c))._data};return o.raw=s,o.native=t,o.create=(i={})=>va({...e,defaults:{...e.defaults,...i}}),o}const Ea=function(){if(typeof globalThis<"u")return globalThis;if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("unable to locate global object")}(),Of=Ea.fetch||(()=>Promise.reject(new Error("[ofetch] global.fetch is not supported!"))),Mf=Ea.Headers,$f=va({fetch:Of,Headers:Mf}),kf=$f,Df=()=>{var e;return((e=window==null?void 0:window.__NUXT__)==null?void 0:e.config)||{}},Dn=Df().app,Nf=()=>Dn.baseURL,Lf=()=>Dn.buildAssetsDir,Ff=(...e)=>Bt(Ia(),Lf(),...e),Ia=(...e)=>{const t=Dn.cdnURL||Dn.baseURL;return e.length?Bt(t,...e):t};globalThis.__buildAssetsURL=Ff,globalThis.__publicAssetsURL=Ia;function Kr(e,t={},n){for(const r in e){const s=e[r],o=n?`${n}:${r}`:r;typeof s=="object"&&s!==null?Kr(s,t,o):typeof s=="function"&&(t[o]=s)}return t}const Bf={run:e=>e()},jf=()=>Bf,Ta=typeof console.createTask<"u"?console.createTask:jf;function Uf(e,t){const n=t.shift(),r=Ta(n);return e.reduce((s,o)=>s.then(()=>r.run(()=>o(...t))),Promise.resolve())}function Wf(e,t){const n=t.shift(),r=Ta(n);return Promise.all(e.map(s=>r.run(()=>s(...t))))}function br(e,t){for(const n of[...e])n(t)}class Vf{constructor(){this._hooks={},this._before=void 0,this._after=void 0,this._deprecatedMessages=void 0,this._deprecatedHooks={},this.hook=this.hook.bind(this),this.callHook=this.callHook.bind(this),this.callHookWith=this.callHookWith.bind(this)}hook(t,n,r={}){if(!t||typeof n!="function")return()=>{};const s=t;let o;for(;this._deprecatedHooks[t];)o=this._deprecatedHooks[t],t=o.to;if(o&&!r.allowDeprecated){let i=o.message;i||(i=`${s} hook has been deprecated`+(o.to?`, please use ${o.to}`:"")),this._deprecatedMessages||(this._deprecatedMessages=new Set),this._deprecatedMessages.has(i)||(console.warn(i),this._deprecatedMessages.add(i))}if(!n.name)try{Object.defineProperty(n,"name",{get:()=>"_"+t.replace(/\W+/g,"_")+"_hook_cb",configurable:!0})}catch{}return this._hooks[t]=this._hooks[t]||[],this._hooks[t].push(n),()=>{n&&(this.removeHook(t,n),n=void 0)}}hookOnce(t,n){let r,s=(...o)=>(typeof r=="function"&&r(),r=void 0,s=void 0,n(...o));return r=this.hook(t,s),r}removeHook(t,n){if(this._hooks[t]){const r=this._hooks[t].indexOf(n);r!==-1&&this._hooks[t].splice(r,1),this._hooks[t].length===0&&delete this._hooks[t]}}deprecateHook(t,n){this._deprecatedHooks[t]=typeof n=="string"?{to:n}:n;const r=this._hooks[t]||[];delete this._hooks[t];for(const s of r)this.hook(t,s)}deprecateHooks(t){Object.assign(this._deprecatedHooks,t);for(const n in t)this.deprecateHook(n,t[n])}addHooks(t){const n=Kr(t),r=Object.keys(n).map(s=>this.hook(s,n[s]));return()=>{for(const s of r.splice(0,r.length))s()}}removeHooks(t){const n=Kr(t);for(const r in n)this.removeHook(r,n[r])}removeAllHooks(){for(const t in this._hooks)delete this._hooks[t]}callHook(t,...n){return n.unshift(t),this.callHookWith(Uf,t,...n)}callHookParallel(t,...n){return n.unshift(t),this.callHookWith(Wf,t,...n)}callHookWith(t,n,...r){const s=this._before||this._after?{name:n,args:r,context:{}}:void 0;this._before&&br(this._before,s);const o=t(n in this._hooks?[...this._hooks[n]]:[],r);return o instanceof Promise?o.finally(()=>{this._after&&s&&br(this._after,s)}):(this._after&&s&&br(this._after,s),o)}beforeEach(t){return this._before=this._before||[],this._before.push(t),()=>{if(this._before!==void 0){const n=this._before.indexOf(t);n!==-1&&this._before.splice(n,1)}}}afterEach(t){return this._after=this._after||[],this._after.push(t),()=>{if(this._after!==void 0){const n=this._after.indexOf(t);n!==-1&&this._after.splice(n,1)}}}}function Aa(){return new Vf}function Kf(e={}){let t,n=!1;const r=i=>{if(t&&t!==i)throw new Error("Context conflict")};let s;if(e.asyncContext){const i=e.AsyncLocalStorage||globalThis.AsyncLocalStorage;i?s=new i:console.warn("[unctx] `AsyncLocalStorage` is not provided.")}const o=()=>{if(s&&t===void 0){const i=s.getStore();if(i!==void 0)return i}return t};return{use:()=>{const i=o();if(i===void 0)throw new Error("Context is not available");return i},tryUse:()=>o(),set:(i,a)=>{a||r(i),t=i,n=!0},unset:()=>{t=void 0,n=!1},call:(i,a)=>{r(i),t=i;try{return s?s.run(i,a):a()}finally{n||(t=void 0)}},async callAsync(i,a){t=i;const c=()=>{t=i},l=()=>t===i?c:void 0;qr.add(l);try{const d=s?s.run(i,a):a();return n||(t=void 0),await d}finally{qr.delete(l)}}}}function qf(e={}){const t={};return{get(n,r={}){return t[n]||(t[n]=Kf({...e,...r})),t[n],t[n]}}}const Nn=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof global<"u"?global:typeof window<"u"?window:{},Ho="__unctx__",zf=Nn[Ho]||(Nn[Ho]=qf()),Jf=(e,t={})=>zf.get(e,t),So="__unctx_async_handlers__",qr=Nn[So]||(Nn[So]=new Set);function Gf(e){const t=[];for(const s of qr){const o=s();o&&t.push(o)}const n=()=>{for(const s of t)s()};let r=e();return r&&typeof r=="object"&&"catch"in r&&(r=r.catch(s=>{throw n(),s})),[r,n]}const Ca=Jf("nuxt-app"),Yf="__nuxt_plugin";function Xf(e){let t=0;const n={provide:void 0,globalName:"nuxt",versions:{get nuxt(){return"3.6.5"},get vue(){return n.vueApp.version}},payload:rt({data:{},state:{},_errors:{},...window.__NUXT__??{}}),static:{data:{}},runWithContext:s=>ed(n,s),isHydrating:!0,deferHydration(){if(!n.isHydrating)return()=>{};t++;let s=!1;return()=>{if(!s&&(s=!0,t--,t===0))return n.isHydrating=!1,n.callHook("app:suspense:resolve")}},_asyncDataPromises:{},_asyncData:{},_payloadRevivers:{},...e};n.hooks=Aa(),n.hook=n.hooks.hook,n.callHook=n.hooks.callHook,n.provide=(s,o)=>{const i="$"+s;vn(n,i,o),vn(n.vueApp.config.globalProperties,i,o)},vn(n.vueApp,"$nuxt",n),vn(n.vueApp.config.globalProperties,"$nuxt",n);{window.addEventListener("nuxt.preloadError",o=>{n.callHook("app:chunkError",{error:o.payload})}),window.useNuxtApp=window.useNuxtApp||de;const s=n.hook("app:error",(...o)=>{console.error("[nuxt] error caught during app initialization",...o)});n.hook("app:mounted",s)}const r=rt(n.payload.config);return n.provide("config",r),n}async function Zf(e,t){if(t.hooks&&e.hooks.addHooks(t.hooks),typeof t=="function"){const{provide:n}=await e.runWithContext(()=>t(e))||{};if(n&&typeof n=="object")for(const r in n)e.provide(r,n[r])}}async function Qf(e,t){const n=[],r=[];for(const s of t){const o=Zf(e,s);s.parallel?n.push(o.catch(i=>r.push(i))):await o}if(await Promise.all(n),r.length)throw r[0]}/*! @__NO_SIDE_EFFECTS__ */function jt(e){return typeof e=="function"?e:(delete e.name,Object.assign(e.setup||(()=>{}),e,{[Yf]:!0}))}function ed(e,t,n){const r=()=>n?t(...n):t();return Ca.set(e),e.vueApp.runWithContext(r)}/*! @__NO_SIDE_EFFECTS__ */function de(){var t;let e;if(Zi()&&(e=(t=Hs())==null?void 0:t.appContext.app.$nuxt),e=e||Ca.tryUse(),!e)throw new Error("[nuxt] instance unavailable");return e}/*! @__NO_SIDE_EFFECTS__ */function Ln(){return de().$config}function vn(e,t,n){Object.defineProperty(e,t,{get:()=>n})}const td="modulepreload",nd=function(e,t){return e.startsWith(".")?new URL(e,t).href:e},Po={},rd=function(t,n,r){if(!n||n.length===0)return t();const s=document.getElementsByTagName("link");return Promise.all(n.map(o=>{if(o=nd(o,r),o in Po)return;Po[o]=!0;const i=o.endsWith(".css"),a=i?'[rel="stylesheet"]':"";if(!!r)for(let d=s.length-1;d>=0;d--){const f=s[d];if(f.href===o&&(!i||f.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${o}"]${a}`))return;const l=document.createElement("link");if(l.rel=i?"stylesheet":td,i||(l.as="script",l.crossOrigin=""),l.href=o,document.head.appendChild(l),i)return new Promise((d,f)=>{l.addEventListener("load",d),l.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${o}`)))})})).then(()=>t())},zr=(...e)=>rd(...e).catch(t=>{const n=new Event("nuxt.preloadError");throw n.payload=t,window.dispatchEvent(n),t}),sd=-1,od=-2,id=-3,ad=-4,cd=-5,ld=-6;function ud(e,t){return fd(JSON.parse(e),t)}function fd(e,t){if(typeof e=="number")return s(e,!0);if(!Array.isArray(e)||e.length===0)throw new Error("Invalid input");const n=e,r=Array(n.length);function s(o,i=!1){if(o===sd)return;if(o===id)return NaN;if(o===ad)return 1/0;if(o===cd)return-1/0;if(o===ld)return-0;if(i)throw new Error("Invalid input");if(o in r)return r[o];const a=n[o];if(!a||typeof a!="object")r[o]=a;else if(Array.isArray(a))if(typeof a[0]=="string"){const c=a[0],l=t==null?void 0:t[c];if(l)return r[o]=l(s(a[1]));switch(c){case"Date":r[o]=new Date(a[1]);break;case"Set":const d=new Set;r[o]=d;for(let y=1;y<a.length;y+=1)d.add(s(a[y]));break;case"Map":const f=new Map;r[o]=f;for(let y=1;y<a.length;y+=2)f.set(s(a[y]),s(a[y+1]));break;case"RegExp":r[o]=new RegExp(a[1],a[2]);break;case"Object":r[o]=Object(a[1]);break;case"BigInt":r[o]=BigInt(a[1]);break;case"null":const p=Object.create(null);r[o]=p;for(let y=1;y<a.length;y+=2)p[a[y]]=s(a[y+1]);break;default:throw new Error(`Unknown type ${c}`)}}else{const c=new Array(a.length);r[o]=c;for(let l=0;l<a.length;l+=1){const d=a[l];d!==od&&(c[l]=s(d))}}else{const c={};r[o]=c;for(const l in a){const d=a[l];c[l]=s(d)}}return r[o]}return s(0)}function dd(e){return Array.isArray(e)?e:[e]}const Ra=["title","script","style","noscript"],Ha=["base","meta","link","style","script","noscript"],hd=["title","titleTemplate","templateParams","base","htmlAttrs","bodyAttrs","meta","link","style","script","noscript"],pd=["base","title","titleTemplate","bodyAttrs","htmlAttrs","templateParams"],xo=["tagPosition","tagPriority","tagDuplicateStrategy","innerHTML","textContent"];function Sa(e){let t=9;for(let n=0;n<e.length;)t=Math.imul(t^e.charCodeAt(n++),9**9);return((t^t>>>9)+65536).toString(16).substring(1,8).toLowerCase()}function Jr(e){return Sa(`${e.tag}:${e.textContent||e.innerHTML||""}:${Object.entries(e.props).map(([t,n])=>`${t}:${String(n)}`).join(",")}`)}function gd(e){let t=9;for(const n of e)for(let r=0;r<n.length;)t=Math.imul(t^n.charCodeAt(r++),9**9);return((t^t>>>9)+65536).toString(16).substring(1,8).toLowerCase()}function Pa(e,t){const{props:n,tag:r}=e;if(pd.includes(r))return r;if(r==="link"&&n.rel==="canonical")return"canonical";if(n.charset)return"charset";const s=["id"];r==="meta"&&s.push("name","property","http-equiv");for(const o of s)if(typeof n[o]<"u"){const i=String(n[o]);return t&&!t(i)?!1:`${r}:${o}:${i}`}return!1}function Oo(e,t){return e==null?t||null:typeof e=="function"?e(t):e}function En(e,t=!1,n){const{tag:r,$el:s}=e;s&&(Object.entries(r.props).forEach(([o,i])=>{i=String(i);const a=`attr:${o}`;if(o==="class"){if(!i)return;for(const c of i.split(" ")){const l=`${a}:${c}`;n&&n(e,l,()=>s.classList.remove(c)),s.classList.contains(c)||s.classList.add(c)}return}n&&!o.startsWith("data-h-")&&n(e,a,()=>s.removeAttribute(o)),(t||s.getAttribute(o)!==i)&&s.setAttribute(o,i)}),Ra.includes(r.tag)&&(r.textContent&&r.textContent!==s.textContent?s.textContent=r.textContent:r.innerHTML&&r.innerHTML!==s.innerHTML&&(s.innerHTML=r.innerHTML)))}let Wt=!1;async function md(e,t={}){var p,y;const n={shouldRender:!0};if(await e.hooks.callHook("dom:beforeRender",n),!n.shouldRender)return;const r=t.document||e.resolvedOptions.document||window.document,s=(await e.resolveTags()).map(a);if(e.resolvedOptions.experimentalHashHydration&&(Wt=Wt||e._hash||!1,Wt)){const g=gd(s.map(T=>T.tag._h));if(Wt===g)return;Wt=g}const o=e._popSideEffectQueue();e.headEntries().map(g=>g._sde).forEach(g=>{Object.entries(g).forEach(([T,D])=>{o[T]=D})});const i=(g,T,D)=>{T=`${g.renderId}:${T}`,g.entry&&(g.entry._sde[T]=D),delete o[T]};function a(g){const T=e.headEntries().find(_=>_._i===g._e),D={renderId:g._d||Jr(g),$el:null,shouldRender:!0,tag:g,entry:T,markSideEffect:(_,b)=>i(D,_,b)};return D}const c=[],l={body:[],head:[]},d=g=>{e._elMap[g.renderId]=g.$el,c.push(g),i(g,"el",()=>{var T;(T=g.$el)==null||T.remove(),delete e._elMap[g.renderId]})};for(const g of s){if(await e.hooks.callHook("dom:beforeRenderTag",g),!g.shouldRender)continue;const{tag:T}=g;if(T.tag==="title"){r.title=T.textContent||"",c.push(g);continue}if(T.tag==="htmlAttrs"||T.tag==="bodyAttrs"){g.$el=r[T.tag==="htmlAttrs"?"documentElement":"body"],En(g,!1,i),c.push(g);continue}if(g.$el=e._elMap[g.renderId],!g.$el&&T.key&&(g.$el=r.querySelector(`${(p=T.tagPosition)!=null&&p.startsWith("body")?"body":"head"} > ${T.tag}[data-h-${T._h}]`)),g.$el){g.tag._d&&En(g),d(g);continue}l[(y=T.tagPosition)!=null&&y.startsWith("body")?"body":"head"].push(g)}const f={bodyClose:void 0,bodyOpen:void 0,head:void 0};Object.entries(l).forEach(([g,T])=>{var _;if(!T.length)return;const D=(_=r==null?void 0:r[g])==null?void 0:_.children;if(D){for(const b of[...D].reverse()){const $=b.tagName.toLowerCase();if(!Ha.includes($))continue;const I=b.getAttributeNames().reduce((S,j)=>({...S,[j]:b.getAttribute(j)}),{}),x={tag:$,props:I};b.innerHTML&&(x.innerHTML=b.innerHTML);const U=Jr(x);let L=T.findIndex(S=>(S==null?void 0:S.renderId)===U);if(L===-1){const S=Pa(x);L=T.findIndex(j=>(j==null?void 0:j.tag._d)&&j.tag._d===S)}if(L!==-1){const S=T[L];S.$el=b,En(S),d(S),delete T[L]}}T.forEach(b=>{const $=b.tag.tagPosition||"head";f[$]=f[$]||r.createDocumentFragment(),b.$el||(b.$el=r.createElement(b.tag.tag),En(b,!0)),f[$].appendChild(b.$el),d(b)})}}),f.head&&r.head.appendChild(f.head),f.bodyOpen&&r.body.insertBefore(f.bodyOpen,r.body.firstChild),f.bodyClose&&r.body.appendChild(f.bodyClose);for(const g of c)await e.hooks.callHook("dom:renderTag",g);Object.values(o).forEach(g=>g())}let _r=null;async function yd(e,t={}){function n(){return _r=null,md(e,t)}const r=t.delayFn||(s=>setTimeout(s,10));return _r=_r||new Promise(s=>r(()=>s(n())))}function bd(e){return{hooks:{"entries:updated":function(t){if(typeof(e==null?void 0:e.document)>"u"&&typeof window>"u")return;let n=e==null?void 0:e.delayFn;!n&&typeof requestAnimationFrame<"u"&&(n=requestAnimationFrame),yd(t,{document:(e==null?void 0:e.document)||window.document,delayFn:n})}}}}function _d(e){var t;return((t=e==null?void 0:e.head.querySelector('meta[name="unhead:ssr"]'))==null?void 0:t.getAttribute("content"))||!1}const Mo={base:-1,title:1},$o={critical:-8,high:-1,low:2};function Fn(e){let t=10;const n=e.tagPriority;return typeof n=="number"?n:(e.tag==="meta"?(e.props.charset&&(t=-2),e.props["http-equiv"]==="content-security-policy"&&(t=0)):e.tag=="link"&&e.props.rel==="preconnect"?t=2:e.tag in Mo&&(t=Mo[e.tag]),typeof n=="string"&&n in $o?t+$o[n]:t)}const wd=[{prefix:"before:",offset:-1},{prefix:"after:",offset:1}];function vd(){return{hooks:{"tags:resolve":e=>{const t=n=>{var r;return(r=e.tags.find(s=>s._d===n))==null?void 0:r._p};for(const{prefix:n,offset:r}of wd)for(const s of e.tags.filter(o=>typeof o.tagPriority=="string"&&o.tagPriority.startsWith(n))){const o=t(s.tagPriority.replace(n,""));typeof o<"u"&&(s._p=o+r)}e.tags.sort((n,r)=>n._p-r._p).sort((n,r)=>Fn(n)-Fn(r))}}}}function Ed(){return{hooks:{"tags:resolve":e=>{const{tags:t}=e;let n=t.findIndex(s=>s.tag==="titleTemplate");const r=t.findIndex(s=>s.tag==="title");if(r!==-1&&n!==-1){const s=Oo(t[n].textContent,t[r].textContent);s!==null?t[r].textContent=s||t[r].textContent:delete t[r]}else if(n!==-1){const s=Oo(t[n].textContent);s!==null&&(t[n].textContent=s,t[n].tag="title",n=-1)}n!==-1&&delete t[n],e.tags=t.filter(Boolean)}}}}function Id(){return{hooks:{"tag:normalise":function({tag:e}){typeof e.props.body<"u"&&(e.tagPosition="bodyClose",delete e.props.body)}}}}const Td=["link","style","script","noscript"];function Ad(){return{hooks:{"tag:normalise":({tag:e,resolvedOptions:t})=>{t.experimentalHashHydration===!0&&(e._h=Jr(e)),e.key&&Td.includes(e.tag)&&(e._h=Sa(e.key),e.props[`data-h-${e._h}`]="")}}}}const ko=["script","link","bodyAttrs"];function Cd(){const e=(t,n)=>{const r={},s={};Object.entries(n.props).forEach(([i,a])=>{i.startsWith("on")&&typeof a=="function"?s[i]=a:r[i]=a});let o;return t==="dom"&&n.tag==="script"&&typeof r.src=="string"&&typeof s.onload<"u"&&(o=r.src,delete r.src),{props:r,eventHandlers:s,delayedSrc:o}};return{hooks:{"ssr:render":function(t){t.tags=t.tags.map(n=>(!ko.includes(n.tag)||!Object.entries(n.props).find(([r,s])=>r.startsWith("on")&&typeof s=="function")||(n.props=e("ssr",n).props),n))},"dom:beforeRenderTag":function(t){if(!ko.includes(t.tag.tag)||!Object.entries(t.tag.props).find(([o,i])=>o.startsWith("on")&&typeof i=="function"))return;const{props:n,eventHandlers:r,delayedSrc:s}=e("dom",t.tag);Object.keys(r).length&&(t.tag.props=n,t.tag._eventHandlers=r,t.tag._delayedSrc=s)},"dom:renderTag":function(t){const n=t.$el;if(!t.tag._eventHandlers||!n)return;const r=t.tag.tag==="bodyAttrs"&&typeof window<"u"?window:n;Object.entries(t.tag._eventHandlers).forEach(([s,o])=>{const i=`${t.tag._d||t.tag._p}:${s}`,a=s.slice(2).toLowerCase(),c=`data-h-${a}`;if(t.markSideEffect(i,()=>{}),n.hasAttribute(c))return;const l=o;n.setAttribute(c,""),r.addEventListener(a,l),t.entry&&(t.entry._sde[i]=()=>{r.removeEventListener(a,l),n.removeAttribute(c)})}),t.tag._delayedSrc&&n.setAttribute("src",t.tag._delayedSrc)}}}}const Rd=["templateParams","htmlAttrs","bodyAttrs"];function Hd(){return{hooks:{"tag:normalise":function({tag:e}){["hid","vmid","key"].forEach(r=>{e.props[r]&&(e.key=e.props[r],delete e.props[r])});const n=Pa(e)||(e.key?`${e.tag}:${e.key}`:!1);n&&(e._d=n)},"tags:resolve":function(e){const t={};e.tags.forEach(r=>{const s=(r.key?`${r.tag}:${r.key}`:r._d)||r._p,o=t[s];if(o){let a=r==null?void 0:r.tagDuplicateStrategy;if(!a&&Rd.includes(r.tag)&&(a="merge"),a==="merge"){const c=o.props;["class","style"].forEach(l=>{r.props[l]&&c[l]&&(l==="style"&&!c[l].endsWith(";")&&(c[l]+=";"),r.props[l]=`${c[l]} ${r.props[l]}`)}),t[s].props={...c,...r.props};return}else if(r._e===o._e){o._duped=o._duped||[],r._d=`${o._d}:${o._duped.length+1}`,o._duped.push(r);return}else if(Fn(r)>Fn(o))return}const i=Object.keys(r.props).length+(r.innerHTML?1:0)+(r.textContent?1:0);if(Ha.includes(r.tag)&&i===0){delete t[s];return}t[s]=r});const n=[];Object.values(t).forEach(r=>{const s=r._duped;delete r._duped,n.push(r),s&&n.push(...s)}),e.tags=n}}}}function Vt(e,t){if(typeof e!="string")return e;function n(i){if(["s","pageTitle"].includes(i))return t.pageTitle;let a;return i.includes(".")?a=i.split(".").reduce((c,l)=>c&&c[l]||void 0,t):a=t[i],typeof a<"u"?a||"":!1}let r=e;try{r=decodeURI(e)}catch{}(r.match(/%(\w+\.+\w+)|%(\w+)/g)||[]).sort().reverse().forEach(i=>{const a=n(i.slice(1));typeof a=="string"&&(e=e.replace(new RegExp(`\\${i}(\\W|$)`,"g"),(c,l)=>`${a}${l}`).trim())});const o=t.separator;return e.includes(o)&&(e.endsWith(o)&&(e=e.slice(0,-o.length).trim()),e.startsWith(o)&&(e=e.slice(o.length).trim()),e=e.replace(new RegExp(`\\${o}\\s*\\${o}`,"g"),o)),e}function Sd(){return{hooks:{"tags:resolve":e=>{var o;const{tags:t}=e,n=(o=t.find(i=>i.tag==="title"))==null?void 0:o.textContent,r=t.findIndex(i=>i.tag==="templateParams"),s=r!==-1?t[r].props:{};s.separator=s.separator||"|",s.pageTitle=Vt(s.pageTitle||n||"",s);for(const i of t)if(["titleTemplate","title"].includes(i.tag)&&typeof i.textContent=="string")i.textContent=Vt(i.textContent,s);else if(i.tag==="meta"&&typeof i.props.content=="string")i.props.content=Vt(i.props.content,s);else if(i.tag==="link"&&typeof i.props.href=="string")i.props.href=Vt(i.props.href,s);else if(i.tag==="script"&&["application/json","application/ld+json"].includes(i.props.type)&&typeof i.innerHTML=="string")try{i.innerHTML=JSON.stringify(JSON.parse(i.innerHTML),(a,c)=>typeof c=="string"?Vt(c,s):c)}catch{}e.tags=t.filter(i=>i.tag!=="templateParams")}}}}const Pd=typeof window<"u";let xa;function xd(e){return xa=e}function Od(){return xa}async function Md(e,t,n){const r={tag:e,props:{}};return t instanceof Promise&&(t=await t),e==="templateParams"?(r.props=t,r):["title","titleTemplate"].includes(e)?(t&&typeof t=="object"?(r.textContent=t.textContent,t.tagPriority&&(r.tagPriority=t.tagPriority)):r.textContent=t,r):typeof t=="string"?["script","noscript","style"].includes(e)?(e==="script"&&(/^(https?:)?\/\//.test(t)||t.startsWith("/"))?r.props.src=t:r.innerHTML=t,r):!1:(r.props=await kd(e,{...t}),r.props.children&&(r.props.innerHTML=r.props.children),delete r.props.children,Object.keys(r.props).filter(s=>xo.includes(s)).forEach(s=>{(!["innerHTML","textContent"].includes(s)||Ra.includes(r.tag))&&(r[s]=r.props[s]),delete r.props[s]}),xo.forEach(s=>{!r[s]&&n[s]&&(r[s]=n[s])}),["innerHTML","textContent"].forEach(s=>{if(r.tag==="script"&&typeof r[s]=="string"&&["application/ld+json","application/json"].includes(r.props.type))try{r[s]=JSON.parse(r[s])}catch{r[s]=""}typeof r[s]=="object"&&(r[s]=JSON.stringify(r[s]))}),r.props.class&&(r.props.class=$d(r.props.class)),r.props.content&&Array.isArray(r.props.content)?r.props.content.map(s=>({...r,props:{...r.props,content:s}})):r)}function $d(e){return typeof e=="object"&&!Array.isArray(e)&&(e=Object.keys(e).filter(t=>e[t])),(Array.isArray(e)?e.join(" "):e).split(" ").filter(t=>t.trim()).filter(Boolean).join(" ")}async function kd(e,t){for(const n of Object.keys(t)){const r=n.startsWith("data-");t[n]instanceof Promise&&(t[n]=await t[n]),String(t[n])==="true"?t[n]=r?"true":"":String(t[n])==="false"&&(r?t[n]="false":delete t[n])}return t}const Dd=10;async function Nd(e){const t=[];return Object.entries(e.resolvedInput).filter(([n,r])=>typeof r<"u"&&hd.includes(n)).forEach(([n,r])=>{const s=dd(r);t.push(...s.map(o=>Md(n,o,e)).flat())}),(await Promise.all(t)).flat().filter(Boolean).map((n,r)=>(n._e=e._i,n._p=(e._i<<Dd)+r,n))}function Ld(){return[Hd(),vd(),Sd(),Ed(),Ad(),Cd(),Id()]}function Fd(e={}){return[bd({document:e==null?void 0:e.document,delayFn:e==null?void 0:e.domDelayFn})]}function Bd(e={}){const t=jd({...e,plugins:[...Fd(e),...(e==null?void 0:e.plugins)||[]]});return e.experimentalHashHydration&&t.resolvedOptions.document&&(t._hash=_d(t.resolvedOptions.document)),xd(t),t}function jd(e={}){let t=[],n={},r=0;const s=Aa();e!=null&&e.hooks&&s.addHooks(e.hooks),e.plugins=[...Ld(),...(e==null?void 0:e.plugins)||[]],e.plugins.forEach(a=>a.hooks&&s.addHooks(a.hooks)),e.document=e.document||(Pd?document:void 0);const o=()=>s.callHook("entries:updated",i),i={resolvedOptions:e,headEntries(){return t},get hooks(){return s},use(a){a.hooks&&s.addHooks(a.hooks)},push(a,c){const l={_i:r++,input:a,_sde:{},...c},d=(l==null?void 0:l.mode)||e.mode;return d&&(l.mode=d),t.push(l),o(),{dispose(){t=t.filter(f=>f._i!==l._i?!0:(n={...n,...f._sde||{}},f._sde={},o(),!1))},patch(f){t=t.map(p=>(p._i===l._i&&(l.input=p.input=f,o()),p))}}},async resolveTags(){const a={tags:[],entries:[...t]};await s.callHook("entries:resolve",a);for(const c of a.entries){const l=c.resolvedInput||c.input;if(c.resolvedInput=await(c.transform?c.transform(l):l),c.resolvedInput)for(const d of await Nd(c)){const f={tag:d,entry:c,resolvedOptions:i.resolvedOptions};await s.callHook("tag:normalise",f),a.tags.push(f.tag)}}return await s.callHook("tags:beforeResolve",a),await s.callHook("tags:resolve",a),a.tags},_popSideEffectQueue(){const a={...n};return n={},a},_elMap:{}};return i.hooks.callHook("init",i),i}function Ud(e){return typeof e=="function"?e():V(e)}function Bn(e,t=""){if(e instanceof Promise)return e;const n=Ud(e);return!e||!n?n:Array.isArray(n)?n.map(r=>Bn(r,t)):typeof n=="object"?Object.fromEntries(Object.entries(n).map(([r,s])=>r==="titleTemplate"||r.startsWith("on")?[r,V(s)]:[r,Bn(s,r)])):n}const Wd=da.startsWith("3"),Vd=typeof window<"u",Oa="usehead";function Os(){return Hs()&&Pt(Oa)||Od()}function Kd(e){return{install(n){Wd&&(n.config.globalProperties.$unhead=e,n.config.globalProperties.$head=e,n.provide(Oa,e))}}.install}function qd(e={}){const t=Bd({...e,domDelayFn:n=>setTimeout(()=>Yn(()=>n()),10),plugins:[zd(),...(e==null?void 0:e.plugins)||[]]});return t.install=Kd(t),t}function zd(){return{hooks:{"entries:resolve":function(e){for(const t of e.entries)t.resolvedInput=Bn(t.input)}}}}function Jd(e,t={}){const n=Os(),r=he(!1),s=he({});Ll(()=>{s.value=r.value?{}:Bn(e)});const o=n.push(s.value,t);return Jt(s,a=>{o.patch(a)}),Hs()&&(Wi(()=>{o.dispose()}),ji(()=>{r.value=!0}),Bi(()=>{r.value=!1})),o}function Gd(e,t={}){return Os().push(e,t)}function Yd(e,t={}){var r;const n=Os();if(n){const s=Vd||!!((r=n.resolvedOptions)!=null&&r.document);return t.mode==="server"&&s||t.mode==="client"&&!s?void 0:s?Jd(e,t):Gd(e,t)}}const Xd={meta:[{name:"viewport",content:"width=device-width, initial-scale=1"},{charset:"utf-8"}],link:[],style:[],script:[],noscript:[]},Zd="__nuxt",Qd=!0;function Do(e,t={}){const n=eh(e,t),r=de(),s=r._payloadCache=r._payloadCache||{};return s[n]||(s[n]=Ma(n).then(o=>o||(delete s[n],null))),s[n]}const No="json";function eh(e,t={}){const n=new URL(e,"http://localhost");if(n.search)throw new Error("Payload URL cannot contain search params: "+e);if(n.host!=="localhost"||nr(n.pathname,{acceptRelative:!0}))throw new Error("Payload URL must not include hostname: "+e);const r=t.hash||(t.fresh?Date.now():"");return Bt(Ln().app.baseURL,n.pathname,r?`_payload.${r}.${No}`:`_payload.${No}`)}async function Ma(e){try{return Qd?$a(await fetch(e).then(t=>t.text())):await zr(()=>import(e),[],import.meta.url).then(t=>t.default||t)}catch(t){console.warn("[nuxt] Cannot load payload ",e,t)}return null}function th(){return!!de().payload.prerenderedAt}let In=null;async function nh(){if(In)return In;const e=document.getElementById("__NUXT_DATA__");if(!e)return{};const t=$a(e.textContent||""),n=e.dataset.src?await Ma(e.dataset.src):void 0;return In={...t,...n,...window.__NUXT__},In}function $a(e){return ud(e,de()._payloadRevivers)}function rh(e,t){de()._payloadRevivers[e]=t}class Gr extends Error{constructor(){super(...arguments),this.statusCode=500,this.fatal=!1,this.unhandled=!1}toJSON(){const t={message:this.message,statusCode:Yr(this.statusCode,500)};return this.statusMessage&&(t.statusMessage=ka(this.statusMessage)),this.data!==void 0&&(t.data=this.data),t}}Gr.__h3_error__=!0;function sh(e){if(typeof e=="string")return new Gr(e);if(oh(e))return e;const t=new Gr(e.message??e.statusMessage??"",e.cause?{cause:e.cause}:void 0);if("stack"in e)try{Object.defineProperty(t,"stack",{get(){return e.stack}})}catch{try{t.stack=e.stack}catch{}}if(e.data&&(t.data=e.data),e.statusCode?t.statusCode=Yr(e.statusCode,t.statusCode):e.status&&(t.statusCode=Yr(e.status,t.statusCode)),e.statusMessage?t.statusMessage=e.statusMessage:e.statusText&&(t.statusMessage=e.statusText),t.statusMessage){const n=t.statusMessage;ka(t.statusMessage)!==n&&console.warn("[h3] Please prefer using `message` for longer error messages instead of `statusMessage`. In the future, `statusMessage` will be sanitized by default.")}return e.fatal!==void 0&&(t.fatal=e.fatal),e.unhandled!==void 0&&(t.unhandled=e.unhandled),t}function oh(e){var t;return((t=e==null?void 0:e.constructor)==null?void 0:t.__h3_error__)===!0}const ih=/[^\u0009\u0020-\u007E]/g;function ka(e=""){return e.replace(ih,"")}function Yr(e,t=200){return!e||(typeof e=="string"&&(e=Number.parseInt(e,10)),e<100||e>999)?t:e}const ah="$s";function ch(...e){const t=typeof e[e.length-1]=="string"?e.pop():void 0;typeof e[0]!="string"&&e.unshift(t);const[n,r]=e;if(!n||typeof n!="string")throw new TypeError("[nuxt] [useState] key must be a string: "+n);if(r!==void 0&&typeof r!="function")throw new Error("[nuxt] [useState] init must be a function: "+r);const s=ah+n,o=de(),i=Oi(o.payload.state,s);if(i.value===void 0&&r){const a=r();if(ue(a))return o.payload.state[s]=a,a;i.value=a}return i}const Da=Symbol("route"),rr=()=>{var e;return(e=de())==null?void 0:e.$router},lh=()=>Zi()?Pt(Da,de()._route):de()._route,uh=()=>{try{if(de()._processingMiddleware)return!0}catch{return!0}return!1},fh=(e,t)=>{e||(e="/");const n=typeof e=="string"?e:ba(e.path||"/",e.query||{})+(e.hash||"");if(t!=null&&t.open){{const{target:a="_blank",windowFeatures:c={}}=t.open,l=Object.entries(c).filter(([d,f])=>f!==void 0).map(([d,f])=>`${d.toLowerCase()}=${f}`).join(", ");open(n,a,l)}return Promise.resolve()}const r=(t==null?void 0:t.external)||nr(n,{acceptRelative:!0});if(r&&!(t!=null&&t.external))throw new Error("Navigating to external URL is not allowed by default. Use `navigateTo (url, { external: true })`.");if(r&&un(n).protocol==="script:")throw new Error("Cannot navigate to an URL with script protocol.");const s=uh();if(!r&&s)return e;const o=rr(),i=de();return r?(t!=null&&t.replace?location.replace(n):location.href=n,s?i.isHydrating?new Promise(()=>{}):!1:Promise.resolve()):t!=null&&t.replace?o.replace(e):o.push(e)},Ms=()=>Oi(de().payload,"error"),dh=e=>{const t=Na(e);try{const n=de(),r=Ms();n.hooks.callHook("app:error",t),r.value=r.value||t}catch{throw t}return t},hh=async(e={})=>{const t=de(),n=Ms();t.callHook("app:error:cleared",e),e.redirect&&await rr().replace(e.redirect),n.value=null},ph=e=>!!(e&&typeof e=="object"&&"__nuxt_error"in e),Na=e=>{const t=sh(e);return t.__nuxt_error=!0,t},Lo={NuxtError:e=>Na(e),EmptyShallowRef:e=>eo(e==="_"?void 0:e==="0n"?BigInt(0):JSON.parse(e)),EmptyRef:e=>he(e==="_"?void 0:e==="0n"?BigInt(0):JSON.parse(e)),ShallowRef:e=>eo(e),ShallowReactive:e=>Ti(e),Ref:e=>he(e),Reactive:e=>rt(e)},gh=jt({name:"nuxt:revive-payload:client",order:-30,async setup(e){let t,n;for(const r in Lo)rh(r,Lo[r]);Object.assign(e.payload,([t,n]=Gf(()=>e.runWithContext(nh)),t=await t,n(),t)),window.__NUXT__=e.payload}}),mh=[];function wr(e){typeof e=="object"&&(e=wa({pathname:e.path||"",search:ma(e.query||{}),hash:e.hash||""}));const t=un(e.toString());return{path:t.pathname,fullPath:e,query:ga(t.search),hash:t.hash,params:{},name:void 0,matched:[],redirectedFrom:void 0,meta:{},href:e}}const yh=jt({name:"nuxt:router",enforce:"pre",setup(e){const t=_f(window.location.pathname,Ln().app.baseURL)+window.location.search+window.location.hash,n=[],r={"navigate:before":[],"resolve:before":[],"navigate:after":[],error:[]},s=(d,f)=>(r[d].push(f),()=>r[d].splice(r[d].indexOf(f),1)),o=Ln().app.baseURL,i=rt(wr(t));async function a(d,f){try{const p=wr(d);for(const y of r["navigate:before"]){const g=await y(p,i);if(g===!1||g instanceof Error)return;if(g)return a(g,!0)}for(const y of r["resolve:before"])await y(p,i);Object.assign(i,p),window.history[f?"replaceState":"pushState"]({},"",Bt(o,p.fullPath)),e.isHydrating||await e.runWithContext(hh);for(const y of r["navigate:after"])await y(p,i)}catch(p){for(const y of r.error)await y(p)}}const c={currentRoute:i,isReady:()=>Promise.resolve(),options:{},install:()=>Promise.resolve(),push:d=>a(d,!1),replace:d=>a(d,!0),back:()=>window.history.go(-1),go:d=>window.history.go(d),forward:()=>window.history.go(1),beforeResolve:d=>s("resolve:before",d),beforeEach:d=>s("navigate:before",d),afterEach:d=>s("navigate:after",d),onError:d=>s("error",d),resolve:wr,addRoute:(d,f)=>{n.push(f)},getRoutes:()=>n,hasRoute:d=>n.some(f=>f.name===d),removeRoute:d=>{const f=n.findIndex(p=>p.name===d);f!==-1&&n.splice(f,1)}};e.vueApp.component("RouterLink",{functional:!0,props:{to:String,custom:Boolean,replace:Boolean,activeClass:String,exactActiveClass:String,ariaCurrentValue:String},setup:(d,{slots:f})=>{const p=()=>a(d.to,d.replace);return()=>{var g;const y=c.resolve(d.to);return d.custom?(g=f.default)==null?void 0:g.call(f,{href:d.to,navigate:p,route:y}):Au("a",{href:d.to,onClick:T=>(T.preventDefault(),p())},f)}}}),window.addEventListener("popstate",d=>{const f=d.target.location;c.replace(f.href.replace(f.origin,""))}),e._route=i,e._middleware=e._middleware||{global:[],named:{}};const l=ch("_layout");return e.hooks.hookOnce("app:created",async()=>{c.beforeEach(async(d,f)=>{d.meta=rt(d.meta||{}),e.isHydrating&&l.value&&!pt(d.meta.layout)&&(d.meta.layout=l.value),e._processingMiddleware=!0;{const p=new Set([...mh,...e._middleware.global]);for(const y of p){const g=await e.runWithContext(()=>y(d,f));if(g||g===!1)return g}}}),c.afterEach(()=>{delete e._processingMiddleware}),await c.replace(t),Ef(i.fullPath,t)||await e.runWithContext(()=>fh(i.fullPath))}),{provide:{route:i,router:c}}}}),bh=jt({name:"nuxt:payload",setup(e){th()&&(e.hooks.hook("link:prefetch",async t=>{un(t).protocol||await Do(t)}),rr().beforeResolve(async(t,n)=>{if(t.path===n.path)return;const r=await Do(t.path);r&&Object.assign(e.static.data,r.data)}))}}),_h=jt({name:"nuxt:global-components"}),wh=jt({name:"nuxt:head",setup(e){const n=qd();n.push(Xd),e.vueApp.use(n);{let r=!0;const s=()=>{r=!1,n.hooks.callHook("entries:updated",n)};n.hooks.hook("dom:beforeRender",o=>{o.shouldRender=!r}),e.hooks.hook("page:start",()=>{r=!0}),e.hooks.hook("page:finish",s),e.hooks.hook("app:suspense:resolve",s)}}});function vh(e={}){const t=e.path||window.location.pathname;let n={};try{n=JSON.parse(sessionStorage.getItem("nuxt:reload")||"{}")}catch{}if(e.force||(n==null?void 0:n.path)!==t||(n==null?void 0:n.expires)<Date.now()){try{sessionStorage.setItem("nuxt:reload",JSON.stringify({path:t,expires:Date.now()+(e.ttl??1e4)}))}catch{}if(e.persistState)try{sessionStorage.setItem("nuxt:reload:state",JSON.stringify({state:de().payload.state}))}catch{}window.location.pathname!==t?window.location.href=t:window.location.reload()}}const Eh=jt({name:"nuxt:chunk-reload",setup(e){const t=rr(),n=Ln(),r=new Set;t.beforeEach(()=>{r.clear()}),e.hook("app:chunkError",({error:s})=>{r.add(s)}),t.onError((s,o)=>{if(r.has(s)){const a="href"in o&&o.href.startsWith("#")?n.app.baseURL+o.href:Bt(n.app.baseURL,o.fullPath);vh({path:a,persistState:!0})}})}}),Ih=[gh,yh,bh,_h,wh,Eh],Th=e=>Object.fromEntries(Object.entries(e).filter(([,t])=>t!==void 0)),Ah=(e,t)=>(n,r)=>(Yd(()=>e({...Th(n),...r.attrs},r)),()=>{var s,o;return t?(o=(s=r.slots).default)==null?void 0:o.call(s):null}),Ch=_t({name:"Title",inheritAttrs:!1,setup:Ah((e,{slots:t})=>{var n,r,s;return{title:((s=(r=(n=t.default)==null?void 0:n.call(t))==null?void 0:r[0])==null?void 0:s.children)||null}})}),Rh={class:"text-center"},Hh=["textContent"],Sh={class:"btn-group"},Ph=_t({__name:"Problem",props:{problem:{}},emits:["answer"],setup(e,{emit:t}){const n=e;return(r,s)=>(ce(),Xe("div",Rh,[X("div",{class:"h1",textContent:Le(n.problem)},null,8,Hh),X("div",Sh,[X("button",{class:"btn btn-outline-primary",onClick:s[0]||(s[0]=o=>t("answer",!1))},"X"),X("button",{class:"btn btn-primary",onClick:s[1]||(s[1]=o=>t("answer",!0))},"O")])]))}}),xh={class:"text-center"},Oh=["textContent"],Mh={class:"h2"},$h={class:"h2"},kh={class:"h2"},Dh=_t({__name:"ProblemResult",props:{problem:{},userAnswer:{type:Boolean},correctAnswer:{type:Boolean}},emits:["next"],setup(e,{emit:t}){const n=e;return(r,s)=>(ce(),Xe("div",xh,[X("div",{class:"h1",textContent:Le(n.problem)},null,8,Oh),X("div",Mh,"あなたの回答 : "+Le(r.userAnswer?"O":"X"),1),X("div",$h,"正しい回答 : "+Le(r.correctAnswer?"O":"X"),1),X("div",kh,"正誤 : "+Le(r.userAnswer===r.correctAnswer?"正":"誤"),1),X("button",{class:"btn btn-primary",onClick:s[0]||(s[0]=o=>t("next"))},"次へ")]))}}),Nh={class:"text-center"},Lh={class:"table table-striped table-responsive"},Fh=X("thead",null,[X("tr",null,[X("th",null,"問題"),X("th",null,"あなた"),X("th",null,"正解"),X("th",null,"正誤")])],-1),Bh=_t({__name:"Result",props:{result:{}},emits:["next"],setup(e,{emit:t}){return(n,r)=>(ce(),Xe("div",Nh,[X("table",Lh,[Fh,X("tbody",null,[(ce(!0),Xe(Ee,null,Ji(n.result,s=>(ce(),Xe("tr",null,[X("th",null,Le(s.problem),1),X("th",null,Le(s.userAnswer?"O":"X"),1),X("th",null,Le(s.correctAnswer?"O":"X"),1),X("th",null,Le(s.userAnswer===s.correctAnswer?"正":"誤"),1)]))),256))])]),X("button",{class:"btn btn-primary",onClick:r[0]||(r[0]=s=>t("next"))},"次へ")]))}}),jh=_t({__name:"Session",props:{data:{}},setup(e){const n=e.data,r=he(!1),s=he(!1),o=he(!1);let i,a,c=he([]);const l=he(!1),d=he({problem:"",answer:!1}),p=n.split(`
`).map(y=>y.split(","));return(async()=>{for(;;){const g=[];for(var y=0;y<5;y++){const T=p[Math.floor(Math.random()*p.length)];d.value={problem:T[0],answer:T[1]==="○"},r.value=!0,await new Promise(D=>{i=_=>{l.value=_,D()}}),r.value=!1,s.value=!0,await new Promise(D=>{a=()=>{D()}}),s.value=!1,g.push({problem:d.value.problem,userAnswer:l.value,correctAnswer:d.value.answer})}await new Promise(T=>{c.value=g,o.value=!0,a=()=>T()}),o.value=!1}})(),(y,g)=>{const T=Ph,D=Dh,_=Bh;return ce(),Xe("div",null,[V(r)?(ce(),xe(T,{key:0,problem:V(d).problem,onAnswer:g[0]||(g[0]=b=>V(i)&&V(i)(b))},null,8,["problem"])):Cn("",!0),V(s)?(ce(),xe(D,{key:1,problem:V(d).problem,userAnswer:V(l),correctAnswer:V(d).answer,onNext:g[1]||(g[1]=b=>V(a)&&V(a)())},null,8,["problem","userAnswer","correctAnswer"])):Cn("",!0),V(o)?(ce(),xe(_,{key:2,result:V(c),onNext:g[2]||(g[2]=b=>V(a)&&V(a)())},null,8,["result"])):Cn("",!0)])}}}),Fo=`25-1-1 空気と混合する可燃性ガス濃度を変えて、燃焼速度を測ると、爆発下限界から単調に増加し、爆発上限界で最も大きくなる。,×
25-1-2 伝播する火炎が消炎する最大の隙間を消炎距離といい、消炎の可燃性ガス濃度依存および背圧の影響を考慮して最大安全隙間が決まる。,○
25-1-3 可燃性混合ガスの爆発下限界は、火炎温度が一定以上になる条件で概ね決まり、燃焼前の初期温度を上げると下限界濃度は低下する。,○
25-1-4 加圧された液体が常圧の沸点以上の温度にあるとき、容器の破壊などで圧力が解放されると液体が爆発的に蒸発する現象は蒸気爆発である。,○
26-1-1 可燃性混合ガスに火花で点火するとき、火花のエネルギーを小さくするほど発火する可燃性ガスの濃度範囲は狭くなっていき、あるエネルギー以下では発火しなくなる。,○
26-1-2 可燃性ガスの発火温度は、測定法によって異なる値をとるため、複数のガスで発火温度を比較する場合には、同じ測定法で得られた値を用いなければならない。,○
26-1-3 可燃性ガスの爆発危険性を緩和するために不活性ガスで希釈する場合、同じ体積を添加するのであれば不活性ガスの種類によらず、同等な効果が得られる。,×
26-1-4 爆ごうは、衝撃波を伴う強力な爆発であるため、爆ごう範囲は通常の爆発範囲より広い。,×
27-1-1 アセチレンやゲルマンは、支燃性ガスがなくとも単独で分解・爆発する性質がある。,○
27-1-2 可燃性液体の蒸気圧が低く、混合ガス中の濃度が爆発範囲に入っていなくても、炎を近づけると可燃性液体の温度が上がって蒸気圧が上昇し、引火することがある。,○
27-1-3 すべての可燃性ガスにおいて、圧力が上昇すると爆発上限界が上昇し、爆発下限界が低下して爆発範囲は広がる。,×
27-1-4 ボンベのバルブを急激に開くと、減圧調整器内が高温となり発火・爆発に至ることがあるが、これは高圧ガスの流入により静電気による火花が生じるためである。,×
28-1-1 空気中に可燃性液体のミストが白雲状に広がっていても、ミストが完全に蒸発しない限り爆発することはない。,×
28-1-2 管内で燃焼開始から爆ごうに転移するまでの距離は、管内の初期圧力と管径が同じであれば、可燃性ガスの種類によらない。,×
28-1-3 混合ガスを点火する場合にフランジのない棒状電極を用いると、電極間距離が消炎距離より短くても、火花のエネルギーが十分大きければ発火（着火）することがある。,○
28-1-4 一般に、爆発下限界における混合ガスの断熱火炎温度は、初期温度によらず一定である。,○
29-1-1 可燃性ガスを不活性ガスで希釈して爆発危険性を緩和する場合、不活性ガスとしてモル熱容量の小さな窒素を用いたほうが、二酸化炭素よりも効果が大きい。,×
29-1-2 一般に密閉容器内燃焼における断熱火炎温度は、常圧下における断熱火炎温度よりも高くなる。,○
29-1-3 爆発範囲の圧力依存性は可燃性ガスの種類により異なるが、温度依存性については可燃性ガスの種類によらず、高温になるほど爆発範囲が広がる。,○
29-1-4 可燃性ガスの発火温度は、実験条件下における発熱と放熱の釣り合いで決まるので、測定方法を変えても同じ値となる。,×
30-1-1 容器内で発生した火炎が狭い隙間を通り抜けて外部に伝播するときには、容器内の圧力が上昇しているため、常温、大気圧での消炎距離よりも狭い隙間としなければ消炎することができない。,○
30-1-2 可燃性混合ガスの最小発火エネルギーは化学量論組成付近で最小となり、圧力の増大とともにその値は大きくなり発火の危険性は減少する。,×
30-1-3 可燃性ガスと支燃性ガスの組み合わせが同じであれば、爆ごう範囲と爆発範囲はほぼ一致する。,×
30-1-4 水素と空気の混合ガスの最大燃焼速度は、プロパンと空気の混合ガスのそれよりも小さい。,○
R2-1-1 可燃性ガスを不活性ガスで希釈する場合、爆発上限界はあまり変化しないが、爆発下限界を上昇させる効果は大きい。,×
R2-1-2 ボンベのバルブを急激に開くと、減圧調整器内に高圧ガスが流入し、断熱圧縮により一時的に減圧調整器内のガスが高温となって発火源となることがある。,○
R2-1-3 フランジ付き電極間の放電による最小発火エネルギーの測定では、電極間隔を狭くしていくと急激に最小発火エネルギーが大きくなり発火しなくなる。このときのフランジ間隔が消炎距離である。,○
R2-1-4 管内の一端で可燃性混合ガスに点火すると、はじめは通常の燃焼波が伝播するが、やがて爆ごうに転移することがある。このとき、可燃性混合ガスの燃焼速度が大きいほど、圧力が高いほど、爆ごうへ転移するまでの距離（爆ごう誘導距離）は短くなる。,○
R3-1-1 飽和炭化水素では、爆発下限界濃度[vol%]と燃焼熱[kJ/mol]の積がほぼ一定である。,○
R3-1-2 一般に、密閉容器内燃焼における断熱火炎温度は常圧下における断熱火炎温度と等しい。,×
R3-1-3 可燃性ガスの発火温度は測定方法によって値が異なるので、異なったガス間で発火温度を比較するときは、同じ測定方法を用いる必要がある。,○
R3-1-4 容器内で加圧・加熱された液体が常圧の沸点以上の温度になっている時、容器が破れて圧力が急に解放されると液体が爆発的に蒸発することがあり、これを蒸気爆発という。,○
R4-1-1 可燃性液体の蒸気圧が低く、空気との混合ガスの濃度が爆発範囲に入っていなくても、炎を近づけると可燃性液体の温度が上がって蒸気圧が上昇し、引火することがある。,○
R4-1-2 断熱火炎温度とは、可燃性混合ガスの燃焼により発生した熱が外部に逃げずに、燃焼生成物の加熱にすべて使われると仮定して計算される温度である。,○
R4-1-3 空気中の酸素のモル分率をおよそ0.2とすれば、メタンと空気の混合体積比率がおよそ1：10のときに化学量論組成となり、爆発しやすい混合気となる。,○
R4-1-4 爆ごうは衝撃波を伴う強力な爆発であるため、同じ可燃性ガスと支燃性ガスの組み合わせであれば、爆ごう範囲は爆発範囲よりも広い。,×
25-2-1 水素は熱に対して不安定で拡散速度が大きく、配管や容器から高速で噴出したとき、固体微粉や液滴の混入があると静電気が発生し、その放電により発火することがある。,×
25-2-2 エチレンは、無色で独特の甘いにおいを持つ可燃性ガスで、水、アルコール、エーテルによく溶け、漏洩時には大量の水で吸収する方法が有効である。,×
25-2-3 二酸化硫黄は、強い刺激臭を持つ不燃性で毒性の強いガスであり、水に溶けると酸性を示す。,○
25-2-4 ホスゲンは、常温において乾燥状態では鉄をほとんど腐食しないが、水分が存在すると加水分解して塩酸を生じるため鉄を腐食する。,○
26-2-1 一酸化炭素は、可燃性かつ毒性のガスで極めて酸化性が強く、また、鉄族の金属と反応して金属カルボニルを生成する。,×
26-2-2 ヘリウムは、化学的に不活性であり、液体ヘリウムの沸点は物質の中で最も低い。,○
26-2-3 硫化水素は、無色で特有の腐卵臭を有する可燃性ガスであり、酸化性が強く、濃硝酸と激しく反応する。,×
26-2-4 アセチレンは、吸熱化合物であり、分解爆発を起こす危険性が高いので、容器に充填するときに溶解充填した。,○
27-2-1?水素は、高温高圧において、鋼材中の炭化物と反応してメタンを生成し、水素侵食を起こす。,○
27-2-2?炭酸ガスは、マグネシウムやナトリウムの消火にも有効である。,×
27-2-3?アンモニアは、空気中で可燃性を有し、エタンより最小発火エネルギーが小さい。,×
27-2-4?水分を含んだ塩素ガスは、常温で極めて腐食性が強く、チタン以外のほとんどの金属材料を激しく腐食する。,○
28-2-1?ブタジエンは三重結合をもっており、反応性に富み、種々の生成物が得られる。,×
28-2-2?亜酸化窒素は、分解爆発性があり、自動車用のエアバッグ・インフレーターに使用されている。,○
28-2-3?フッ素は常温で特有な刺激臭を持ち、塩素と同様の極めて強い毒性のある可燃性ガスである。,×
28-2-4?ゲルマンは無色、吐き気を催すような不快臭のあるガスで、毒性がある。,○
29-2-1?フッ素は、すべての元素の中で最も強い酸化力を持つ元素である。,○
29-2-2?塩素は水に溶解すると、塩酸と次亜塩素酸とを生ずる。,○
29-2-3?二酸化炭素は、大気圧で冷却すると液体になり、その液体を加圧すると固体のドライアイスになる。,×
29-2-4?酸素不足は生命の危険を招くが、純酸素は人体にとって無害である。,×
30-2-1 水素は、最小発火エネルギーが小さく、静電気放電は容易に発火源となりうる。,○
30-2-2 酸化エチレンは、常温大気圧下の爆発範囲の上限値が100vol%であり、大気圧下で空気が存在しなくても発火源があれば爆発を起こす分解爆発性がある。,○
30-2-3 アンモニアは、強い刺激臭を持つ可燃性かつ毒性のガスであり、銅及び銅合金に対して腐食性を示さない。,×
30-2-4 シランおよびジシランは、純水あるいは酸性水溶液とはほとんど反応しないが、アルカリ性水溶液とは反応して水素を発生する。,○
R1-2-2 硫化水素は、腐乱臭を有する毒性ガスで、水分がある環境では腐食性は小さい。,×
R1-2-3 塩素は、酸化力が強いので可燃性物質に対して支燃性を示すが、常温で乾燥した状態では鉄に対する腐食性がほとんどない。,○
R1-2-4 フッ素は、常温では特有な刺激臭を持ち極めて強い毒性のある可燃性ガスである。,×
R2-2-1 シアン化水素は、水分が含まれると重合により爆発することがあるので、安定剤としてアルカリ性物質を少量加える。,×
R2-2-2 二酸化炭素は、消火剤として用いられ、マグネシウムやナトリウムの消火にも有効である。,×
R2-2-3 液状のLPガスは、電気絶縁性がよく静電気が蓄積されやすいので、その放電による火花で発火する危険がある。,○
R2-2-4 アセチレンは、酸素ガスによって燃焼させると3000℃を越える温度の火炎を生成できるので、金属の溶断などに用いられる。,○
R3-2-1 窒素は、高温、高圧では触媒上で水素と反応してアンモニアを生成し、高温では酸素と反応して酸化窒素となる。,○
R3-2-2 希ガス類のアルゴンは、不活性ガスとしてステンレス鋼の溶接用保護ガスに用いられる。,○
R3-2-3 アンモニアは、銅及び銅合金に対して腐食性を示さないが、鉄に対しては激しい腐食性を示す。,×
R3-2-4 塩化水素は、水に溶けると塩酸となり、イオン化傾向が水素より小さい金属は、塩化水素に侵され、水素を発生して塩化物となる。,×
R4-2-1 酸素を化学反応に使用する場合、過酸化物などが生成して爆発の原因となることがある。,○
R4-2-2 メタンは、天然ガスの主成分であり空気より重く、空気中で燃焼させると淡青色の炎を発する。,×
R4-2-3 ブタジエンは、無色の可燃性ガスで、常温でも空気中の酸素と反応して重合性の過酸化物をつくる。,○
R4-2-4 フッ化水素は、腐食性や毒性が強いガスで、反応性が高く有機化合物とも反応してフッ化物となる。,○
H25-3-1 炭素鋼への亜鉛めっきは、クロムめっきに比べて、ピンホール、きずなどにより炭素鋼が露出した場合に、耐食性が悪くなる。,×
H25-3-2 オーステナイト系ステンレスであるSUS304は、耐食性、高温強度、低温靭性に優れているが、使用環境によっては粒界腐食、孔食、応力腐食割れを生じる欠点がある。,○
H25-3-3 Cr-Mo鋼は、クロムの酸化物皮膜を生成し、皮膜は緻密で保護性があるので、炭素鋼に比べて耐酸化性に優れている。,○
H25-3-4 水素侵食は、高温高圧の水素ガス環境で鋼中に侵入した水素が鋼中の炭化物と反応し、生成するメタンの圧力で鋼に微細な亀裂を発生させる現象で、クロム、モリブデンの含有量を増すと耐水素侵食性は向上する。,○
H26-3-1 炭素鋼の機械的性質は、炭素量によって大きく変化し、引張強さ、降伏点は炭素量の増加とともに低下する。,×
H26-3-2 乾燥した塩素ガス中での高温ガス腐食に対する耐用温度は、SUS304のほうが炭素鋼よりも高い。 ,○
H26-3-3 オーステナイト系ステンレス鋼容器の溶接熱影響部に生じる粒界腐食を防止するため、炭素量の少ない材料を使用した。,○
H26-3-4 配管の外面への塗装には腐食反応を生じさせる水、酸素などを金属表面に触れさせないことにより防食する役割がある。,○
H27-3-1 炭素鋼に対する電気防食法は、土壌埋設物及び海洋構造物への水没部への適用が多く、電流を流入させる方法として犠牲陽極法と外部電源法がある。,○
H27-3-2 オーステナイト系ステンレス鋼とアルミニウム合金は、結晶構造が面心立方格子であり、低温脆性を示さない。,○
H27-3-3 応力腐食割れは、圧縮応力の高い部分に発生しやすい。,×
H27-3-4 炭素鋼の炭素を増加させると、引張強さが低下し、シャルピー衝撃試験の延性?脆性遷移温度も低下する。,×
H28-3-1 常温の98%の濃硫酸の配管材料に、炭素鋼を採用した。,○
H28-3-2 往復圧縮機などに接続する配管の機械振動による疲労破壊を防止するには、共振は避けたうえで、配管の支持点の間隔を広げて変形に対する拘束を緩めることが有効である。,×
H28-3-3 装置の耐用年数に見合う腐食しろを、計算上必要な肉厚に付加する対策は、侵食速度が大きい局部腐食に有効でない場合が多い。,○
H28-3-4 炭素鋼へのクロムめっきは、亜鉛めっきに比べて、キズなどにより炭素鋼が露出した場合に、炭素鋼の腐食を促進する。,○
H29-3-1 フェライト系ステンレスSUS430は、オーステナイト系ステンレス鋼SUS304に比べて塩化物による応力腐食割れが生じにくい。,○
H29-3-2 Cr-Mo鋼は、クロムの酸化物皮膜を生成し、皮膜は緻密で保護性があるので、クロムの増加とともに耐酸化性を増す。,○
H29-3-3 炭素鋼配管に施した樹脂ライニングが損傷した場合に、さらに電気防食法を適用しても防食の効果はない。,×
H29-3-4 9%ニッケル鋼は、アルミニウム合金またはオーステナイト系ステンレス鋼と同様に、液体窒素温度より低い極低温領域であっても低温脆性を示さない。,×
H30-3-1 オーステナイト系ステンレス鋼は、耐食性、高温強度、低温靭性に優れているが、SUS304は使用環境によっては粒界腐食、孔食、応力腐食割れを生じる欠点がある。,○
H30-3-2 炭素鋼の電気防食の犠牲陽極として、土壌中では亜鉛を、海水中ではアルミニウム系の合金を採用した。,○
H30-3-3 150℃の乾燥した塩素ガスに使用する配管材料にチタンを使用した。,×
H30-3-4 応力腐食割れは圧縮応力が高い部分に発生しやすい。,×
R1-3-1 炭素鋼の機械的性質は、炭素量によって大きく変化し、引張強さ、降伏点は炭素量の増加とともに低下する。,×
R1-3-2 オーステナイト系ステンレス鋼は、結晶構造が面心立方格子であり、低温脆性を示さない。,○
R1-3-3 亜鉛めっきした炭素鋼は、クロムめっきした炭素鋼に比べて、ピンホール、きずなどにより露出した部分の耐食性が劣る。,×
R1-3-4 水素侵食は、高温高圧の水素ガス環境で鋼中に侵入した水素が鋼中の炭化物と反応し、生成するメタンの圧力で鋼に微細な亀裂を発生させる現象で、クロム、モリブデンの含有量を増やすと耐水素侵食性は向上する。,○
R2-3-1 オーステナイト系ステンレス鋼容器の溶接熱影響部に生じる粒界腐食を発生しにくくするために、炭素量の少ない材料を使用した。,○
R2-3-2 応力腐食割れは、圧縮応力が高い部分に発生しやすい。,×
R2-3-3 オーステナイト系ステンレス鋼は表面に不働態皮膜を形成し、不動態皮膜が溶解する塩酸中、希塩酸中では腐食するが、不動態皮膜が安定な濃硫酸中では腐食しない。,○
R2-3-4 Cr-Mo鋼は高温クリープ特性が優れているため高温の反応器などに使用されるが、不純物の偏析に起因する焼き戻し脆化の感受性が高いことに注意する必要がある。,○
R3-3-1 ph3の酸性水溶液中で、炭素鋼は腐食し、オーステナイト系ステンレス鋼は不動態化して腐食しにくい。,○
R3-3-2 オーステナイト系ステンレス鋼およびフェライト系ステンレス鋼は、高温海水環境での引張応力のもとで、塩素イオンに起因する応力腐食割れが生じやすい。,×
R3-3-3 ステンレス鋼の孔食が比較的高濃度の塩化物イオンを含む環境で起こるのは、塩化物イオンが不動態皮膜を局所的に破壊するためである。,○
R3-3-4 クロムモリブデン鋼は、クロムの酸化物皮膜を生成し、皮膜は緻密で保護性があるので、炭素鋼に比べて耐酸化性に優れている。,○
R4-3-1 電解質溶液中で異種金属を接触させると電池を形成し、腐食電位列がプラス側となる金属は腐食が促進される。,×
R4-3-2 炭素鋼水配管に生じた錆こぶの下が溶存酸素の供給を受けにくい結果、局部的に孔食を生じる現象は通気差腐食の一例である。,○
R4-3-3 鋭敏化したステンレス鋼では、多くの腐食環境中で結晶粒界が選択的に腐食する。,○
R4-3-4 窒化は、高温の窒素ガスに接する金属に窒素が侵入して、金属が脆くなる現象であり、炭素鋼に比べてオーステナイト系ステンレス鋼に発生しやすい。,×
H25-5-1 電磁流量計は、導電性流体の流量を測定できるが、混入物を含む流体には適さない。,×
H25-5-2 抵抗温度計は、温度とともに変化する熱起電力を測定することにより温度を計測する。,×
H25-5-3 ブルドン管圧力計のブルドン管材料には、一般に、黄銅、りん青銅、ステンレス鋼が用いられている。,○
H25-5-4 金属管式マグネットゲージは、ゲージグラスに比べて液面高さの測定範囲が広く、高い圧力の液体でもより安全である。,○
H26-5-1 腐食性があり固形物が混入した流体の圧力計に、隔膜式圧力計を使用した。,○
H26-5-2 バイメタル式温度計は、2種類の金属銅線を接続したループの2つの接合点の温度差に正比例して起電力が生じることを利用している。,×
H26-5-3 コリオリ式流量計は、流体の質量流量を直接測定できるが、レンジアビリティは狭く、スラリー流体には使用できない。,×
H26-5-4 気層が凝縮性の液化ガス貯槽に、差圧発信機本体と受圧部をキャピラリチューブで連結したリモートシール型差圧液面計を採用した。,○
H27-5-1?フロート型面積流量計は、鉛直配管、水平配管どちらにも設置できる。,×
H27-5-2?被測定物から放射される赤外線を赤外線カメラでとらえ、それを画像処理して温度分布を視覚に表したものがサーモグラフィである。,○
H27-5-3差圧発信機を、圧力測定のみならず流量測定の信号伝送器としても使用した。,○
H27-5-5?タンクゲージに、フロート式よりも精度が高く、保守性の良いワイヤドラム式を採用した。,○
H28-4-1?ブルドン管圧力計には、ケース背面に安全窓を取り付けたものがあるが、これはブルドン管が破裂した場合にケース前面のガラス窓の破損及び飛散を防止するためである。,○
H28-4-2?空気式差圧伝送器は、信号の伝送に時間遅れを生じるなどの欠点があり、伝送距離は100m以内にすることが望ましい。,○
H28-4-3?調節弁のうち、ケージ弁は高差圧流体に対して不安定な動作になり、プラグの振動が発生するので、高差圧流体に適さない。,×
H28-4-4?温度制御ループにおいて正特性の温度伝送器を使用した場合、伝送信号が喪失すると調節器は高温であると判断して低温になるように調節する。,×
H29-4-1?渦流量計は、流れに垂直に挿入された渦発生体の下流に発生するカルマン渦列の周波数が、流速に正比例することを利用した流量計である。,○
H29-4-2?予測制御の一種であるフィードフォワード制御は、それだけでは目標値と制御量が一致したかどうかを確認することができず、偏差を修正することもできないため、フィードバック制御と組み合わせて使用される。,○
H29-4-3?調節弁の駆動用電源が喪失した場合でも、プラントが危険な状態にならないように弁の駆動方式を選定することはフール・プルーフである。,×
H29-4-4?並列冗長系の冗長システムは、機器が故障した場合に待機している危機に切り替える方式である。,×
H30-4-1 腐食性流体や凝固しやすい流体などの圧力測定には、隔膜式圧力計が適している。,○
H30-4-2 リニア特性の調節弁においては、弁開度と流量はほぼ正比例する。,○
H30-4-3 ゲージグラスにおいて、一般に不透明な液体や界面の測定には反射式を用いる。,×
H30-4-4 近年、警報システムにおいて、スタートアップなどの非定常時に警報が一時的に多発することを抑制したり、不必要な警報を削減したりする取り組みがなされている。,○
R1-4-1 コリオリ式流量計は質量流量が測定でき、スラリー流体にも適用できる。,○
R1-4-2 １つの調節計（一次調節計）の出力値により他の調節計（二次調節計）の目標値を制御する方法をフィードフォワード制御という。,×
R1-4-3 積分動作は比例動作で生ずるオフセットを消すことができるので、通常比例動作と組み合わせてPI動作として広く用いられる。,○
R1-4-4 機器、設備に異常および故障が生じた時でも、装置が安全な状態になるよう設計上配慮することをフェール・セーフという。,○
R2-4-1 運転温度1000℃の設備の温度監視に白金ロジウム合金-白金の熱電温度計を使用した。,○
R2-4-2 コリオリ式流量計をスラリー流体の流量測定に使用した。,○
R2-4-3 ガスクロマトグラフは、ガスの種類のよりカラムを通過する速さが異なることを利用して、ガスのそれぞれの成分を検出する。,○
R2-4-4 調節弁の駆動用電源が喪失した場合でも、プラントが危険な状態にならないように弁の駆動方式を選定することはフール・プルーフである。,×
R3-4-1 オリフィス流量計は差圧式流量計の一つであり、流量計での圧力損失を小さくしたい場合に用いられる。,×
R3-4-2 腐食性流体や凝固しやすい流体などの圧力測定には、隔膜式圧力計が適している。,○
R3-4-3 警報システムにおいて、オペレータの負荷低減を図るため、スタートアップなどの非定常時に不必要な警報が一時的に多発することを抑制する取り組みを行った。,○
R3-4-4 弁駆動用の空気および電源が喪失した場合でもプラントが危険な状態にならないよう、弁を全開にする、全閉にする、または開度を保持するなどを考慮して駆動方式を選定することは、フール・プルーフの具体的な例である。,×
ブルドン管圧力計は、断面がだ円、平円形などの金属管を円弧状に曲げ、管内に圧力を加えたときの弾性変形を利用して目盛盤上の指針の位置で圧力を読みとるものである。,○
ゲージグラスは、ガラスを通して液面を直視するもので、一般に2つの液体の界面の測定には反射式を用いる。,×
微分動作は、偏差の変化速度に比例して操作量を変える制御動作であり、外乱などで生じた偏差をできるだけ早く減少させたいときに有効である。,○
圧縮機を起動するとき、間違って操作したとしても安全のために必要な条件が確保されていなければスタートしないようなインターロックシステムは、フェールセーフの具体的な例である。,×
H25-4-1 液化プロパンを高圧で貯蔵するのに高張力鋼製の球形貯槽を設置した。,○
H25-4-2 50?100m3程度以下の小型圧力容器では、円筒形貯槽が経済的な形式と考えられ、構造が単純で製作も容易なため、一般的に使用されている。,○
H25-4-3 二重殻式円筒型低温貯槽は、内槽、外槽間に適切な断熱材が充填されるが、外槽にも低温材料を用いる必要がある。,×
H25-4-4 二重殻式平底円筒型低温貯槽の基礎を地盤中に直接埋設し、基礎が凍結して変形を起こさないように、基礎中に電熱ヒーターを設置した。,○
H26-4-1?固定床式反応器では、触媒層の高さが大きくなる場合は、偏流の発生を抑えるため、触媒層を分割して再分散器を設ける方法がある。,○
H26-4-2?固定床式反応器で、発熱量が大きい場合の反応温度の制御には、触媒層を分割し、各触媒層の間にクエンチ用流体を送入する方法がある。,○
H26-4-3?流動床式反応器は、反応器の底部などから送入した流体により固体粒子の触媒を浮遊流動化させて、流体と固体の間で反応を行う反応器である。,○
H26-4-4?反応器内の触媒を連続的に再生するには、固定床式反応器が適している。,×
H27-4-1?吸着等に用いられる吸着剤は、分離目的成分との親和性と吸着速度を考慮して選定される。,○
H27-4-2?蒸留塔のトレイは、十字流接触型と向流接触型に分類され、バブルキャップトレイは、向流接触型である。,×
H27-4-3?連続式反応器のうち管式反応器は、反応速度が小さい場合によく用いられる。,×
H27-4-4?二重殻式平底円筒型低温貯槽の内槽には、強め輪（スティフナ）が取り付けられることがあるが、これは保冷・断熱用のパーライトの沈降により圧力がかかることによる座屈防止を主な目的としている。,○
H28-5-1?配管設計において、変動荷重には想定が困難な管外部に付着する雪や氷は考慮しない。,×
H28-5-2?配管設計における熱変位合成応力は、合成曲げ応力とねじり応力から算出される。,○
H28-5-3?配管設計において、往復圧縮機などによる圧力脈動に対しては、配管長さを変えたり、オリフィスを挿入するなどにより気柱振動との共振を避ける。,○
H28-5-4?高圧ガス設備にかかる耐震対策については、設備の使用期間中に発生する確率の低い直下型、海溝型の巨大地震による高いレベルの地震動と、発生する確率の高い地震動を想定し、その重要度に応じて設計が行われる。,○
H29-5-1?固定床式反応器における触媒層の分割は、偏流防止のための再分散だけでなく、総発熱量が大きくクエンチングで反応温度を制御する必要がある場合にも採用されることがある。,○
H29-5-2?多管円筒型熱交換器は、固定頭部、胴部、後頭部の組み合わせにより多くのバリエーションがあり、様々な条件に応じた適切な構造を採用することができる。,○
H29-5-3?配管系への機械振動に対しては、応力が局部に集中して疲労破壊を起こさないように、配管を強制的に拘束せず、フレキシビリティを持たせるようにする。,×
H29-5-4?超低温容器は、-50℃以下の液化ガスを充てんすることができる容器で、可搬式のものは内装と外装の間に断熱材を積層し、その部分を常温において10Pa程度まで真空引きされている。,○
30-5-1 空冷式熱交換器は、冷媒側に空気を使用するため、水冷式熱交換器に比べ、伝熱面積を小さくできる。,×
30-5-2 塔のトレイは、十字流接触型と向流接触型に分類され、ダウンカマーを有するシーブトレイは、十字流接触型である。,○
30-5-3 塔の充填物は、不規則充填物と規則充填物に分類され、ラシヒリングは、不規則充填物である。,○
30-5-4 流動床式反応器は、反応器の底部などから送入した流体により固体粒子の触媒を浮遊流動化させて反応を行うものであり、再生塔を併設することにより連続的に再生された触媒を反応器に導入することも可能である。,○
1-5-1 二重管式熱交換器は、多管円筒形熱交換器に比べて、熱交換器の大きなものが要求される場合に用いられる。,×
1-5-2 プレート式熱交換器は、分解組立が容易で清掃しやすいが、圧力損失が大きく、また、ガスケットを介してプレートを重ね合わせた構造であるために温度・圧力条件、流体性状に制限がある。,○
1-5-3 多管円筒形熱交換器は、プレート式熱交換器に比べて熱伝達率が大きく取れることから、熱伝達量が同じであれば、小型化が図れる。,×
1-5-4 二重殻式円筒型低温貯槽は、内槽と外槽の間に適切な断熱材が充填されるので、外槽に低温用材料を用いる必要はない。,○
2-5-1 平底円筒形貯槽は、プロパン、ブタンなどの液化ガスを高圧で大容量貯蔵するのに最適な形式である。,×
2-5-2 50～100m3程度以下の小型圧力容器では、円筒形貯槽が構造が単純で製作が容易なため経済的な形式と考えられ、一般的に使用されている。,○
2-5-3 二重殻式平底円筒型低温貯槽の基礎を地盤中に直接埋設したので、基礎が凍結して変形を起こさないように、基礎中に不凍液を循環させた。,○
2-5-4 二重殻式平底円筒型低温貯槽において、内槽と外槽の間に断熱用にパーライト粒を充填し、内槽にはパーライト粒が及ぼす圧力による座屈防止のため強め輪（スティフナ）を取り付けた。,○
3-5-1 プレート式熱交換器は、プレートを介して熱交換を行う構造であり、圧力損失が小さく、温度・圧力条件、流体性状に対する制限が少ない。,×
3-5-2 空温式蒸発器は運転において熱源が大気であるという利点を持つ反面、その他の熱源を持つ蒸発器と比較して設置面積が大きくなるという欠点がある。,○
3-5-3 エアフィンクーラーは冷却媒体が空気であり、その熱伝導率や比熱の低さを補う目的で、通常は伝熱管外側にフィンを設けて伝熱面積を大きくしている。,○
3-5-4 二重管式熱交換器は、多管円筒形熱交換器に比べて、熱交換量の大きなものが要求される場合に用いられる。,×
H25-6-1 キャビテーションを防止するために、液化ガス貯槽の液温を上げてポンプ吸い込み圧力を上げた。,×
H25-6-2 配管系の水撃（ウォータハンマ）を防止する対策の一つとして、遮断弁の開閉速度をできる限り大きくなるように設定した。,×
H25-6-3 同一特性のポンプを2台直列運転するとき、吐出し弁絞りなどによる流量調節をしなければ、流量は増加してポンプ1台あたりの所要軸動力は1台単独運転の時より大きくなる。,○
H25-6-4 ポンプの取り扱い液を粘性係数（粘度）の高い液に替えると、駆動電動機が過負荷になる可能性がある。,○
H26-6-1 遠心ポンプの羽根車やケーシング内面はキャビテーションにより損傷することがある。,○
H26-6-2 高揚程の遠心ポンプの羽根車出口に設けられた案内羽根（ディフューザ）は、流体に対し効率よく速度エネルギーを与えるためのものである。,×
H26-6-3 特性の異なる遠心ポンプを2台並列運転するときは、低流量域では片方のポンプの吐出し量がゼロ近くになる可能性があり、このような状態での連続運転は避ける。,○
H26-4-4 歯車ポンプは、通常吐出し弁閉で起動し、流量調整は吐出し弁で行う。,×
H27-6-1?羽根車に汚れが付着して発生するロータの異常振動の主周波数は、ロータの回転数に等しい。,○
H27-6-2?定常運転時の回転数は、ロータの一次危険速度を超えてはならない。,×
H27-6-3?吐き出し側の抵抗が大きくなると、圧縮機の運転がサージング領域に入る可能性がある。,○
H27-6-4?風量を下げる操作において、吐き出し側の絞り弁を操作する方法と、回転数を操作する方法とでは、駆動電動機の省エネルギー面での差異はない。,×
H28-6-1?給油式往復圧縮機では、多段化により各段の圧力比を小さくすることで、潤滑油の温度上昇を抑え、潤滑油の酸化劣化を抑える効果もある。,○
H28-6-2?多段往復圧縮機の各段圧力が低下する原因としては、後段の、吸い込み弁、吐出し弁の漏れ、ピストンリングの摩耗、冷却器の能力低下などの諸トラブルが考えられる。,×
H28-6-3?サージング限界付近まで遠心圧縮機の風量を下げる場合、一般的に吸い込み絞り弁操作より吐き出し絞り弁操作の方が制御範囲は広くとれる。,×
H28-6-4?遠心圧縮機の振動周波数分析の結果、主周波数(f)として圧縮機回転数(N)に対し、f=N、2N、3Nの成分の波形が検出された。原因として主軸（シャフト）と軸シールとの接触、心ずれなどが考えられる。,○
H29-6-1?キャビテーションが発生したので、低温液化ガスポンプの吸い込み配管の断熱材を取り外した。,×
H29-6-2?同一特性の遠心ポンプを2台直列運転する場合の一台当たりの所要軸動力は、抵抗曲線が変わらなければ、1台単独運転の時より大きくなる。,○
H29-6-3?吐出し弁を締め切って軸流ポンプを起動できるようバイパスを設け、可動羽根を使用した。,○
H29-6-4?往復ポンプでは、液体の脈動により生じる水撃作用を防止するために、吸込み弁、吐出し弁の異常の有無、吸込み配管のストレーナの詰まりなどをチェックした上で、配管系の弁を慎重に操作する。,○
30-6-1 遠心圧縮機の吐き出し管の絞り弁の開度調整で流量を減らす方法では、絞り弁の抵抗がエネルギーロスとなり、動力はあまり減らない。,○
30-6-2 遠心圧縮機の一つのケーシングの段数は、主に軸の危険回転数によって制約を受け、段数が多い場合は一次危険速度を超えて運転はできない。,×
30-6-3 多段往復圧縮機の2段の吐出圧力および吐出ガス温度が異常上昇したとき、2段の吐出中間冷却器の冷却水通水弁の開度と、3段の吸入弁および吐出弁を点検した。,○
30-6-4 給油式の往復圧縮機には、ラビリンスピストン式、ダイヤフラム式がある。,×
1-6-1 液化ガスの遠心ポンプのキャビテーションを避けるため、吸入貯槽の液温を上げることによりポンプの吸入圧力を上げた。,×
1-6-2 遠心ポンプの軸動力は、吐き出し管の絞り弁が全閉の時に最大となる。,×
1-6-3 遠心ポンプの取り扱い液の密度が上がると、駆動電動機の過負荷（オーバーロード）の可能性がある。,○
1-6-4 遠心ポンプは、揚程が低いものでは締切り起動・停止ができるが、軸流ポンプは、バイパスや可動羽根の採用などの対策を講じない場合には、締切り起動・停止ができない。,○
2-6-1 遠心圧縮機の吐き出し側の抵抗が大きくなったので、サージングを避けるためにバイパス管を閉じて回転数を上げた。,×
2-6-2 遠心圧縮機の定常運転時の回転数は、ロータの一次危険速度を超えてはならない。,×
2-6-3 往復圧縮機による空気の圧縮では、ラビリンスピストン式の無給油圧縮機が使用できる。,○
2-6-4 往復圧縮機の容量調整に使用されるバイパス方式は、遠心圧縮機でも適用される。,○
3-6-1 遠心圧縮機の吐き出し側の抵抗が大きくなると、圧縮機の運転がサージング領域に入る可能性は低くなる。,×
3-6-2 連続的に吐出し風量の一部を吸込み間に戻すバイパスコントロールで吸込み温度が上昇する場合には、これを防止するために冷却器をバイパス管路に設ける方法がある。,○
3-6-3 遠心圧縮機の異常振動の主周波数がロータの回転数に等しい場合、振動の原因の一つとして、羽根車への汚れの付着が考えられる。,○
3-6-4 遠心圧縮機の一つのケーシングの段数は、主に軸の危険回転数によって制約を受け、段数が多い場合には数個のケーシングに分ける。,○
遠心ポンプのキャビテーションを避けるためには、吸入貯槽の液面を上げること、取り扱い液の温度を下げることが有効である。,○
遠心ポンプの水撃作用を防止するため、吐出し配管の逆止弁にバイパス弁を設けて圧力上昇を抑える方法がある。,○
脈動が発生する往復ポンプでは、必要NPSHに対して利用できるNPSHの余裕は小さくすることができる。,×
往復ポンプの流量調整は、バイパス弁開度、回転速度（単位時間あたりの回転数）またはストローク長さの変更により行える。,○
H25-7-1 冬季になり吸込みガス温度が下がっても、回転数、圧力比が変わらなければ、駆動電動機の過負荷の心配はない。,○
H25-7-2 炭酸ガス（分子量44、比熱容量の比1.31）用圧縮機の試運転を空気（分子量29、比熱容量の比1.4）にて行うが、回転数、吸込み温度、圧力比が同じ範囲であれば、駆動電動機の過負荷の心配はない。,×
H25-7-3 多段圧縮機の2段の冷却器の出口側温度が異常上昇したので、1、2段の冷却器および2段の吸込み弁、吐出し弁も点検した。,○
H25-7-4 容量調整方法の一つである吸込み弁アンローダ方式は、シリンダに設けられたクリアランスボックスの弁を開閉し、すきま容積を変化させて流量調整を行う。,×
H27-7-1?遠心ポンプの軸動力は、流量が増加するほど大きくなるが、軸流ポンプの軸動力は、締め切り運転時に最大になる。,○
H27-7-2?プランジャポンプは容積型で、弁の開閉により液体を吸い込み圧送するものであるが、NPSH（有効吸い込み揚程）を考慮しなければならない。,○
H27-7-3?遠心ポンプを分解点検したとき、羽車とケーシング内面にエロージョンが見られたので、原因として水撃作用（ウォータハンマ）を取り上げ、対策を講じた。,×
H27-7-4?送水配管の水撃作用（ウォータハンマ）の発生を防止する対策の一つとして、遮断弁の開閉時間が長くなるようにした。,○
H26-7-1 火災・爆発による環境汚染を未然に防止するにはマネジメントシステムを構築し、環境に対する管理を行うことが重要であり、環境保全に特化したシステムがレスポンシブル・ケア（RC）である。,×
H26-7-2 災害・事故件数の推移をみると、昭和40年代の設備の新設、大型化に伴い、その件数が増加したが、その後の新たな規制法の施行、技術の進歩により、事故件数は現在に至るまで着実に減少している。,×
H26-7-3 災害・事故を防ぐには認知確認ミス、誤操作などの人が関係するミスを少なくし、あわせて設備の点検を十分行って、機器材料の劣化・腐食の早期発見に努めることが有効である。,○
H26-7-4 災害・事故の教訓として、ハードおよびソフトを見直し、あらゆるケースに対応できる保安管理システムを確立しておくとともに、このシステムに基づき、全従業員に対し教育や訓練を通じて、保安管理を意識及び行動の両面で徹底させることが重要である。,○
H28-7-1?環境基準は、人の健康を保護する観点から特定の物質について定められているが、連続測定機により常時モニタリングが行われているものはない。,×
H28-7-2?化学物質を扱う化学産業では、環境保全、保安防災、化学品安全、労働安全衛生および物流安全の全分野を一体とした総合管理が重要である。,○
H28-7-3?高圧ガス災害・事故の原因として、設備の設計及び製作の不良、設備の維持管理の不良、ヒューマンファクターなどがある。,○
H28-7-4?災害や事故は、その主な原因である認知確認ミス、誤操作、誤判断など、人が関係するミスをなくすことができればほとんど防止できる。,×
H29-7-1?事故防止のため、事業者は設備メーカーに点検整備を依頼するに当たって、保守管理にかかわる役割分担を明確にし、安全性に対し漏れがないようにした。,○
H29-7-2?事業活動に伴って発生する大気汚染の原因となる有害な物質には、ばい煙、粉じん、特定物質があるが、それぞれの規制措置はない。,×
H29-7-3?温室効果は物質によって異なり、大気中の存在濃度と地球温暖化係数によって温室効果の寄与度が算出される。,○
H29-7-4 ISO14001の環境マネジメントシステムにおける環境方針は、経営者が環境保全を継続的に改善していくことを示す重要な社内情報であり、一般の人が入手することはできない。,×
30-7-1 成層圏のオゾンは有害な紫外線を吸収して、それが地表面に届くことを防いでいる。地上で排出された塩素、塩化水素は成層圏に到達してオゾンを破壊する。,×
大気環境基準に定められている物質のうち、一酸化炭素は、連続測定機による常時モニタリングが行われている。,○
30-7-3 ベンゼンは、長期暴露による発がん性を有するが、揮発性有機化合物ではなく、有害大気汚染物質には含まれない。,×
30-7-4 最近の高圧ガス関係の災害・事後の原因を分析した結果では、腐食管理不良、検査管理不良などの設備の維持管理不良による原因が全体の約半数を占めている。,○
1-7-1 大気汚染の原因となる有害な物質であるばい煙は、4種類に区分され、それぞれに排出基準が定められている。,○
1-7-2 浮遊粒子状物質は、大気環境基準で1日平均値が定められており、月1～2回の24時間測定が行われている。,×
1-7-3 温室効果は、大気のガス成分が地表からの赤外線を吸収し、再び地表および大気に返すために生じる。亜酸化窒素（N2O）は温室効果ガスの一種である。,○
1-7-4 高圧ガス災害事故は、その主な原因である、設備の設計、製作の不良、設備の維持管理の不良など、設備に関係するものをなくすことができれば、ほとんど防止できる。,×
2-7-1 大気環境基準で1時間値が定められている二酸化硫黄は、常時モニタリングが行われ、年平均値が定められているベンゼンは月1～2回の24時間測定が行われる。,○
2-7-2 温室効果の寄与度の算出に使用される温室効果ガスの地球温暖化係数は、各温室効果ガス1kgの一定期間における温室効果を二酸化炭素を1として表したものである。,○
2-7-3 化学物質を扱う化学産業では、環境保全、保安防災、化学品安全、労働安全衛生、および物流安全の全分野を一体とした総合管理が重要である。,○
2-7-4 最近の高圧ガス災害・事故の原因割合では、設備の維持管理の不良より、設備の設計および製作の不良の方が多い。,×
3-7-1 化学物質の審査及び製造等の規制に関する法律では、環境を経由して人に健康影響を及ぼす恐れのある化学物質を規制している。,○
3-7-2 大気環境基準では、人の健康を保護する観点から特定の物質について、連続測定機による常時モニタリングが行われている。,○
3-7-3 ISO14001は、環境マネジメントシステムの仕様を定めた規格であり、レスポンシブル・ケア（RC）の環境保全分野とは重なってはいない。,×
3-7-4 最近の高圧ガス災害事故は、その主な原因である設計不良、製作不良、施工管理不良など設備の設計、製作に関するミスをなくせばほとんど防止できる。,×
温室効果ガスである二酸化炭素、メタン、亜酸化窒素、CFC-12（フルオロカーボンの一種）のうち、地球温暖化係数がもっとも大きいのはCFC-12 である。,○
大気汚染防止法において、特定施設から発生する特定物質として、アンモニアは規制されているが、二酸化窒素は規制されていない。,×
レスポンシブル茜ケア（RC）活動を推進するにはRC コードという基本的実施事項に従って行う必要があり、その構成のひとつに社会との対話コードがある。,○
最近（平成23～30年）の高圧ガス災害事故の原因割合では、設備の維持管理の不良が最も多く、次いでヒューマンファクター、設備の設計製作の不良の順で多い。,×
H25-8-1 2Bの高圧バルブのボディーフランジに、メタルジャケットガスケットを使用しているものを用いた。,○
H25-8-2 フランジボルトの締め付け管理方法の一つに、ボルトの伸びを超音波軸力計で測定しながら締め付ける方法がある。（伸び測定法）,○
H25-8-3 高温配管でホットボルティングを省略するために、金属リングガスケットを使用した。,×
H25-8-4 細長い円筒状のピンホールなどから気体または液体が少量漏洩する場合は、漏洩量はピンホールの穴径の4乗に比例し、穴の長さに反比例する。,○
H26-8-1 継手からのガスの漏れ量（体積流量）は、圧力が高いガスほど、密度が高いガスほど、粘度が大きいガスほど大きくなる。,×
H26-8-2 継手などの漏れ止め機構を総称してシールというが、シール材のうち一般的に、静止接合面に挿入するものをガスケット、往復運動や回転運動の摺動部に使用するものをパッキンと呼んでいる。,○
H26-8-3 細長い円筒状のピンホールなどから気体または液体が少量漏洩する場合、穴径が拡大していくと漏洩量は加速度的に増大するので、すぐに措置を講じることが大切である。,○
H26-8-4 ピンホール状ではなく相当に大きい破断口から漏洩する場合の漏洩量は、液体の場合では破断口の断面積の0.5乗に比例する。,×
H27-8-1 メカニカルシールについて、高速の遠心圧縮機では、周速がメカニカルシールの周速限界を超えることがあるので、若干のガス漏洩が許される場合には、一般にドライガスシールが使用される。,○
H27-8-2 メカニカルシールは、漏洩を完全に止めることができず、可燃性、毒性の液体には使用できない。,×
H27-8-3 メカニカルシールは、端面密封方式で、軸に直角にセットされる部品であり、振動に強い。,×
H27-8-4 遠心ポンプに用いられるメカニカルシールの冷却、潤滑方法のうち、フラッシングは熱を除去するとともに、摺動面に異物や不純物が停滞することを防ぐ働きも兼ねている。,○
H28-8-1 フランジ継手においては、内圧が上昇するとボルトが伸びてガスケットに残る圧縮荷重が小さくなり、ある限界値以下になると流体は漏れ始める。,○
H28-8-2 細長い円筒状のピンホールなどから気体が少量漏洩する場合、漏洩量はピンホールの穴径の2乗に、また圧力差に比例し、穴の長さに反比例する。,×
H28-8-3 金属リングガスケットは変形後の復元力が小さいので、高温配管に使用するときは、座屈を避けるためにホットボルティングを行ってはならない。,×
H28-8-4 往復圧縮機の軸封装置に用いられるラビリンスシールは、ケーシングの内周にラビリンスを切ったリングをピストンロッドとごくわずかな隙間を保ち、数組挿入する形式が一般的に用いられる。,○
H29-8-1?細長い円筒状のピンホールから気体が少量漏洩する場合、漏洩量はピンホールにかかる内外圧力差の二乗に比例する。,×
H29-8-2?ピンホール状ではなく相当に大きい破断口から液体が漏洩する場合、漏洩量は破断口にかかる内外圧力差の0.5乗に比例する。,○
H29-8-3?バルブのグランドパッキンの材質には、カーボン、フッ素樹脂などの繊維、黒鉛を主材とし潤滑剤で表面処理したものがある。,○
H29-8-4?ボルトの締め付け管理法のうち、ボルトの伸びを超音波軸力計や伸びゲージなどで測定しながら締め付ける方法をテンション法という。,×
30-8-1 相当大きな破断口から液体が漏洩する場合の漏洩量は、流出係数および破断口にかかる内外圧力差（液頭）に正比例する。,×
30-8-2 高温、高圧の場合、塔・槽のフランジガスケットにジョイントシート、渦巻型ガスケット、金属リングガスケットが用いられる。,×
30-8-3 毒性の液体を取り扱う遠心ポンプの軸封装置にメカニカルシールを選定した。,○
30-8-4 フランジの漏洩防止には、内容物および使用圧力・温度に応じたガスケットの材質・形状の選定、配管の振動に対する振れ止めの施工などがある。,○
1-8-1 細長い円筒状のピンホールなどから気体または液体が少量漏洩する場合は、漏洩量はピンホールの孔径の4乗に比例し、孔の長さに反比例する。,○
1-8-2 ガスケット係数は、流体の漏れを防止できる最小必要残留圧縮応力の内圧に対する比をいい、ガスケットの材質と構造により決定される数値である。,○
1-8-3 遠心圧縮機のオイルフィルムシールは、漏洩を完全に止めることができず、可燃性、毒性の気体には使用できない。,×
1-8-4 圧縮機のラビリンスシールは、高圧の気体が狭い隙間から広い隙間へ流れ出るごとに、逐次圧力を失い、気体の流れを生じる圧力勾配を小さくし有効に漏れを止めようというものである。,○
2-8-1　貯槽において、ピンホールに比べて相当に大きい破断口から液体が漏洩する場合、漏洩量[m3/s]は、破断口の断面積[m2]に正比例し、破断口にかかる内外圧力差（液頭）[m]の1/2乗に比例する。,○
2-8-2 自己緊密式のガスケットは、内圧の上昇に伴い、それに見合うガスケットの面圧が生じ、自己締め付けを行う構造になっているので、超高圧装置のフランジに使用されている。,○
2-8-3 遠心圧縮機の軸封部に用いるドライガスシールは、軸とシール部材が常に非接触のためシールの摩耗は発生せず、異物の影響を受けにくい。,×
2-8-4 メカニカルシールは、端面密封方式で軸に直角にセットされている精密な部品なので、振動には弱く、漏れ出したら止めることができないので早めの処置が必要である。,○
3-8-1 ガスケット係数は、内圧が作用する前の初期締め付け応力の内圧に対する比をいい、ガスケットの材質フランジ継ぎ手の構造により決定される数値である。,×
3-8-2 金属リングガスケットはシール性能、強度に優れており、締付けによる変形後の復元力も大きく、高温・高圧配管でのホットボルティングを省略できる。,×
3-8-3 無給油式の往復圧縮機の軸封装置に使用されているピストンロッドパッキンには、主にカーボンまたはテフロンが用いられる。,○
3-8-4 低温液化ガス送液ポンプの軸封にメカニカルシールを用い、固定環を冷却し、エコライジングパイプによるガス抜きを行った。,○
相当大きい破断口から液体が漏えいする場合、漏えい量は流出係数、破断口の断面積、破断口にかかる内外圧力差に比例する。,×
フランジ継手からの漏えいを防止するためには、内圧が作用してもガスケットには最小必要圧縮力が残る必要がある。,○
オイルフィルムシールは、水素ガスのように大気中へのガス漏れが許されない遠心圧縮機の軸封装置には用いられない。,×
遠心ポンプのメカニカルシールは、端面密封方式であり、しゅう動面（シール端面）は摩耗するので一方をカーボン、他方に超硬合金を採用した。,○
H25-9-1 FTAは、事故発生原因となる複数の事象の組み合わせを解析することができ、また、事故の発生確率も計算することができる。,○
H25-9-2 ETAは、事故の拡大する確率を求めることができず、事故拡大防止対策の重要性を認識することに適していない。,×
H25-9-3 HAZOPは、操業条件の変化を定められた手引き用語に従って調べ、その変化の原因と結果および取るべき対策を表にまとめて検討する手法で、プロセス異常に対するイメージトレーニングのツールとしても有効である。,○
H25-9-4 FMEAは、評価対象の機器、システムを構成する部位に着目し、あらかじめ想定した故障モードを選択することにより潜在危険を洗い出す手法である。,○
H26-9-1 ダウ方式は、プラントを構成するそれぞれの機器のプロセス条件、危険性物質の保有量などに対し、評価点をつけて、機器、設備全体の危険度を算出する手法であり、危険性の絶対的な評価が可能である。,×
H26-9-2 FMEAで、評価対象部位の故障率データを取り入れた場合は、システムに致命的な影響を与える故障モードの定量的な評価が可能となる。,○
H26-9-3 HAZOPは、プロセスの安全対策の妥当性を確認して、不足している安全対策を探すのに有効な手法である。,○
H26-9-4 事故の発生確率をFTAにより算出し、爆風圧計算などにより事故による損失の程度を算出して、リスクの評価を行った。,○
H27-9-1 FTAは、事故発生に関係するあらゆる要因を明らかにするのに役立つが、各要因の事故に対する寄与の度合いを知ることはできない。,×
H27-9-2 HAZOPは、網羅的に検討を進めるので、プラントの潜在危険性を見落とす可能性が少ない手法であり、単一事象のトラブルの解析に適用する。,○
H27-9-3 ETAは、一つの引き金事象が、事故、災害に拡大する確率の推定が可能であるが、事故災害のすべての要因を網羅するものではない。,○
H27-9-4 What-Ifは、あらかじめチェックリストなどで機能喪失状況や故障を定めておけば網羅性を高めることができるが、複数の事象の組み合わせを想定することはできない。,×
H28-9-1?プラント全体のリスクアセスメントにおいて、プラントを類似条件のユニットごとに複数に分割し、個別にリスク評価を行った。,○
H28-9-2 FTAにより同定したハザードを最終事象とし、HAZOPによってハザードの発生確率を算出した。,×
H28-9-3?ガス拡散計算と火炎からの放射熱計算で、ハザードの影響評価を行い、経済的損失や被災者レベルを定量化した。,○
H28-9-4?ハザードの影響度と発生確率から定量化したリスクが許容されるレベルであったので、リスク低減対策の検討は不要と判断した。,○
H29-9-1 HAZOPは、対象設備について実施者が仮想した機能喪失があった場合に、設備が陥る状態を想定して対策を考える手法であり、仮想する条件をあらかじめ定めておけば、網羅性が高い。,×
H29-9-2 HAZOPは、複数事象の組み合わせに最も適した手法である。,×
H29-9-3 HAZOPは、FTAのトップ事象の選定にも用いられる手法である。,○
H29-9-4 HAZOPは、プロセス異常に対するイメージトレーニングにも有効であるが、解析に長時間を要する。,○
特性要因図は、事故とそれに影響していると思われる要因との関連を整理して、図に体系的にまとめた解析手法で、要因を分類し、どこに管理の重点を置いたらよいかを知るのに便利である。,○
FTAは、事故などを頂上事象として設定し、その事象を引き起こす原因を次々に掘り下げていく手法であり、設定した頂上事象の発生確率の推算はできない。,×
HAZOPは、設計などで意図した操業状態からの「ずれ」がどのような危険となるかを検討する手法であり、単一事象ではなく複数の事象が複合して起こる事故の解析に適用される。,×
FMEAは、機器、システムを構成する部位の故障を想定し、潜在危険を洗い出す手法であり、対象部位の故障率データを取り入れた場合は、システムに影響を与える故障モードを定量的に評価できる。,○
What-ifは、設備面、運転面でのハザードを特定し、機器故障や誤操作などの正常状態と異なった事象発生の影響を考えるのに便利であるが、複数の事象を組み合わせることはできない。,×
HAZOP、FMEAは化学プラントのリスクアセスメントにおいてハザードの特定に用いることができる手法である。,○
FTA、ETA、は機器の故障確率やヒューマンエラーの発生確率などのデータを使用すれば、事故の発生確率を算出できる手法である。,○
特性要因図は、問題とする特性に影響していると思われる要因相互の因果関係を明確に把握し、管理の重点化すべきところを知るのに便利な手法である。,×
Wha-ifは、機器故障などの正常状態と異なった事象発生の影響を考える手法であり、複数事象の組み合わせを想定することはできない。,×
プラントのスタートアップ操作におけるハザードを特定するのに、連続系HAZOPのガイドワードに加えて、タイミングと時間に関するずれを想定するためのガイドワードを追加して解析を実施した。,○
FTAは、事故を発生させる複数の要因の組み合わせを解析することができ、また、事故の発生確率も推定することができる。,○
ETAは、ある引金事象がどのような結果を引き起こしうるかを、樹木の枝分かれ式に追求し分析する手法であり、引金事象が事故に拡大する確率の推定も可能である。,○
What-ifは、ハザードの特定において、正常状態とは異なった事象発生の影響を考える手法として、用いることができる。,○
FTAで事故の発生確率を算出する場合、安全弁設置による確率の低減は算入しない。,×
ETAで、一つの小規模トラブルが事故に拡大していくシナリオを作成し、シナリオに沿って、機器の故障などの確率を使用して、その事故の発生確率を推定した。,○
FMEA は、機器を構成する部品の管理方法の見直しには適用できない。,×
リスク解析の手法のうち、FTAは結果（事故）から原因にさかのぼる方向で解析を進めるのに対し、HAZOPは原因から解析を進める方向の異なった手法であるため、同一の設備について両手法を併用してのリスク解析は避けるべきである。,×
リスクの見積りにあたり、ETAで冷却ポンプが停止した場合に発生する事故の発生確率を推算するのに、異常を知らせる警報装置や、インターロックなどの安全装置は設置されていないものとして計算した。,×
FMEA で、システムを構成する機器に考えられる故障モードを定量的に評価し、また、FMEA をFTAでの頂上事象に関係する構成基本事象の選択にも利用した。,○
製造設備の反応器において、撹拌機が故障したり、冷却水が停止した場合などの異常を想定し、それぞれの影響・結果をWhat-ifで解析して必要な安全対策を検討した。,○
25-10-1 油入防爆構造での点火源となる部分を納める絶縁油の温度は、対象とする爆発性ガスの発火温度に対応して定められた値を超えないようにする必要がある。,○
25-10-2 最大安全隙間は、ガス固有の値であり、この値は内圧防爆構造の電気機器の選定に用いられる。,×
25-10-3 最小点火電流は、爆発性ガスの種類によって異なり、この値は本質安全防爆構造の電気機器の選定に用いられる。,○
25-10-4 爆発危険箇所の区分を検討する場合、爆発性ガスの存在確率は、そのガスの放出源からのみ決定されるものである。,×
26-10-1 静電気の発生による帯電機構には、摩擦、混合・攪拌による帯電のほか、滴下帯電、粉砕帯電など多くの過程があり、電荷の供給がなくなれば、電荷は減少していく。,○
26-10-2 帯電物質の放出エネルギーは、物質の導電率が小さくなるほど放電の直前に持っていた静電エネルギーに近くなる。,×
26-10-3 帯電物質の静電エネルギーは、電荷量と物質の静電容量の積に比例する。,×
26-10-4 タンクに導電率の小さい液を流入させる場合、タンクが金属製で接地が施されていても、液の帯電を緩和するには液の導電率、容積に応じた静置時間が必要である。,○
27-10-1 導電性の液体が配管中を乱流で流れる場合、流動による帯電量は、流速の他に配管径の影響も受ける。,○
27-10-2 帯電物質からの放電エネルギーは電荷量の2乗に比例し、帯電物質の電気伝導率に反比例する。,×
27-10-3 体積抵抗率の大きな液体を静電設置が施された導電性のタンクに貯液する場合、タンク流入直後では、流入時に発生した静電気によりタンク中央部は壁面に比べて液体の電位は高くなりやすい。,○
27-10-4 外部雷保護システムにおける避雷接地は、接地抵抗値を極力小さくするとともに被保護物とその周辺の設置電位を一様にすることが重要である。,○
28-10-1 通常の状態において、爆発性雰囲気がしばしば発生する可能性のある電気機器の設置場所は、第二類危険箇所である。,×
28-10-2 耐圧防爆構造の容器は、内部保護ガスの圧力に耐え、内圧低下時の保護装置を備えていなければならない。,×
28-10-3安全増防爆構造は、正常運転時において対象とする爆発性ガスの点火源とならない電気機器に対して適用される。,○
28-10-4 本質安全防爆構造とは、正常時及び故障時において、対象とする爆発性ガスの点火源とならないことを公的機関が確認したものである。,○
29-10-1 帯電物質からの放電で可燃物が発火する災害発生限界の帯電電位は、帯電物質の体積抵抗率に反比例する。,×
29-10-2導体のタンクに静電気が帯電しやすい液体を貯蔵する場合、静電気の帯電を緩和するために設ける静置時間は、貯蔵容量と貯蔵液体の導電率を考慮して決められる。,○
29-10-3 静電気の発生を抑制する方法として、流体中の夾雑物の除去などがあり、静電気の緩和、除去を促進する方法として、湿度を上げることなどがある。,○
29-10-4 体積抵抗率が大きな物質は、体積抵抗率が小さな物質に比べ、設置をしても帯電した電荷は逃がしにくい。,○
30-10-1 耐圧防爆構造は、周囲の爆発性ガスの最小点火電流値によって分類されている。,×
30-10-2 安全増防爆構造は、周囲の爆発性ガスに点火することがないように電気回路の消費エネルギーを制御したもので、適用は計測機器の発振器のような弱電機器に限られている。,×
30-10-3 内圧防爆構造は、電気機器を収納する容器内に保護期待を封入したもので、容器内の圧力が所定の圧力以下になった場合に作動する保護装置が必要である。,○
30-10-4 樹脂充填防爆構造は、電気機器を構成する部分であって、火花、アークを発するもの、または、高温部を樹脂の中に納めることにより点火しないようにした構造である。,○
1-10-1 静電気が発生してもそれ以後に電荷の供給がなければ、物質中の電荷の中や外部への導電によって電荷は減少していき、湿度が高いと電荷の減少が促進される。,○
1-10-2 帯電物質の火花放電で放出するエネルギーは、導電率が異なっていても帯電電位が同じであれば、同じ大きさとなる。,×
1-10-3 石油製品などの可燃性液体を金属製タンクに貯蔵するとき、静電気の帯電を緩和させるための静置時間は、導電率が小さな液体ほど長くする。,○
1-10-4 配管などの金属導体同士をボルトで接続した場合は、電気的にはボンディングしたのと同じ効果が得られている場合もある。,○
2-10-1?耐圧防爆構造は、内部で発生した爆発に耐え、かつ、火炎が外部に伝播しない容器の中に、着火源となる電気機器を収容した構造で、最小点火電流値により分類されている。,×
2-10-2?爆発危険箇所における非点火防爆構造の設置は、第二類危険箇所に限定されている。,○
2-10-3?無停電電源装置（UPS）は、常用電源を直流に変換して蓄電池に充電するとともに、再度交流に変換して電力を供給する。,○
2-10-4?非常用電源に供する蓄電池の容量は、非常用発電設備が設置されている場合は、その起動までの時間、設置されていない場合は、常用電源が回復するまでの総定時間から決定する。,×
静電気が帯電した液体を、静電接地された金属製の貯槽に静置した時の液体の電荷は、導電率が高い液体ほど早く減少する。,○
帯電した物質が一度で放電するエネルギーは、放電直前にもっていた静電エネルギーが同じ場合には、導電率が低いほど大きくなる。,×
可燃物を取り扱う作業者の、火災・爆発の災害発生限界の帯電電位は、可燃物の最小発火エネルギーと作業者の静電容量から計算することができる。,○
外部雷保護システムにおける避雷接地は、接地抵抗値を極力小さくするとともに被保護物とその周辺の接地電位を一様にすることが重要である。,○
耐圧防爆構造および内圧防爆構造は、電気機器を収納する容器内部で爆発が起こっても、外部の爆発性ガスに点火しないようにした仕組みである。,×
油入防爆構造および樹脂充てん防爆構造は、電気機器の点火源と、爆発性ガスが直接接触しないようにした仕組みである。,○
絶縁物を介する継ぎ手で接続されている金属配管は、ボンディングや金属ボルトでの接続などで電気的に同電位にすることができれば、複数の配管をまとめて一か所に静電接地を施すことも可能である。,○
保安接地は、電気機器の外箱の大きさに応じて規定された接地抵抗値とする必要がある。,×
25-11-1 ばね式安全弁は、内圧がばねの力より大きくなると弁体が上がり内部流体を放出して圧力を降下させ、内圧が降下してばねの力のほうが大きくなると閉じるようになっている。,○
25-11-2 破裂板には、金属製またはグラファイト製のものがあり、ばね式安全弁と比較して吹き出し抵抗が大きく、高粘性や固着性の流体に適していない。,×
25-11-3 大気圧付近の圧力で取り扱う低温の液化ガス貯槽の負圧防止対策としてほかの貯槽からの均圧管を設置した。,○
25-11-4 溶栓式安全弁に用いられる溶栓は、ビスマス、カドミウム、鉛、スズなどを主成分とする合金で、規定以上の温度になると溶融するものが使用されている。,○
26-11-1 ばね式安全弁のリフト形式のうち、全量式は弁座流路面積が、弁体と弁座の当たり面より下部にあるノズルののど部の面積より十分大きいものとなるようなリフトが得られる形式である。,○
26-11-2 破裂板は、ばね式安全弁に比べて、防食処理が容易であり、腐食性流体に適している。,○
26-11-3 圧縮機のバイパスラインを使用して、吐き出しガスをその吸い込み側に戻す方式の自動圧力制御装置では、吸い込み量の約半分までの量を戻す容量であればよい。,×
26-11-4 液体を移送する長距離配管に緊急遮断弁を設置するときには、ウォータハンマの発生を防止するために、弁の閉止に要する時間が短すぎないようにする。,○
27-11-1 ばね式安全弁のリフト形式は、揚程式と全量式に分けられ、揚程式はリフトが弁座口の径の1/40以上1/4未満で、弁体が開いた時の流路面積の中で弁座流路面積が最小となる形式である。,○
27-11-2 破裂板は、構造が単純で吹き出し抵抗が小さく、取り扱い、点検が容易であるが、腐食性、固着性の流体には適していない。,×
27-11-3 容器に設ける安全弁は、車両に固定した容器ではばね式のもの、一般高圧ガスの容器では破裂板式、溶栓式のものが一般に使用される。,○
27-11-4 弁体が流体の排圧によって逆流を防止するように作動するバルブを逆止弁といい、リフト逆止弁、スイング逆止弁などがある。,○
28-11-1 圧縮機のバイパスラインを使用して吐き出しガスをその吸い込み側に戻す方式の自動圧力制御装置では、吸い込み量の全量を戻すことができる容量が必要である。,○
28-11-2 屋外の窒素ガス貯槽に、開放型ばね式安全弁を設置した。,○
28-11-3 ばね式安全弁は、破裂板に比べて高粘性流体に適していないが点検が容易である。,×
28-11-4 破裂板は、ばね式安全弁に比べて防食処理が容易であり、破裂するまで交換の必要がない。,×
29-11-1 ばね式安全弁が設置できない設備に、急激な圧力上昇に対する安全装置として、破裂板を設置した。,○
29-11-2 配管に取り付けるばね式安全弁の入口配管は、内容物にかかわらず、配管の下側から取り出す。,×
29-11-3 液体の長距離配管に緊急遮断弁を設置する場合は、瞬時に弁が閉止するようにする。,×
29-11-4 ガス火災で消化困難な場合には、火災により加熱される装置を散水冷却して二次的な火災を防止することが重要である。,○
30-11-1 ばね式安全弁のうち、揚程式安全弁は、弁座流路面積が弁体と弁座との当たり面より下部にあるノズルののど面の面積より十分大きなものとなるようなリフトが得られる形式である。,×
30-11-2 破裂板は、製作ロットごとに決められた数を試験して、その作動圧力を確認する措置などがとられた上で使用される。,○
30-11-3 破裂板は、ばね式安全弁に比べると、高粘性流体に適しているが、異常圧力の上昇速度が大きい場合に対応できない。,×
30-11-4 緊急遮断弁の定期的な作動チェックや弁座漏れ検査を運転中に行えるように、バイパス弁を設置することがあるが、通常運転時には確実に閉止しておく。,○
多段式往復圧縮機全体の保護のために、往復圧縮機の最終段の出口配管のみに、ばね式安全弁を設置した。,×
貯槽の元弁に近接して取り付けた緊急遮断弁を、地震発生時に貯槽の揺れの影響を受けないように、貯槽本体とは別の基礎に設置した。,×
計装用空気を使用する緊急遮断装置に、緊急時に弁が確実に作動するように計装用空気溜を設け、作動に必要な計装用空気を確保した。,○
可燃性の液化ガス貯槽の負圧防止対策として、圧力計、圧力警報設備および同種の液化ガス貯槽からのガス導入配管（均一管）を設置した。,○
全量式のばね式安全弁は、弁体と弁座の当たり面より下部にあるノズルののど面の面積より、弁座流路面積が十分大きくなるようなリフトが得られる。,○
破裂板は、負圧による容器の破損を防止する目的では使用できない。,×
逃し弁の出口配管の圧力損失は、規定吹き出し量算出式における排圧に見合う値以上にしないよう考慮する必要がある。,○
緊急遮断弁の閉止時に発生するウォータハンマの衝撃の強さは、長距離配管より短距離配管の方が大きい。,×
可燃性ガスの貯槽に、密閉型ばね式安全弁を取り付けた。,○
破裂板は、ばね式安全弁に比べ防食処理が容易であり、破裂するまで交換の必要がない。,×
貯槽の元弁に近接して取り付けた緊急遮断弁を、地震発生時に貯槽の揺れの影響を受けないように貯槽本体とは別の基礎に設置した。,×
遠心圧縮機の吐出しガスを吸込み側に戻す自動圧力制御装置を、圧縮する吐出しガスの全量を戻せる容量とした。,○
ばね式安全弁のうち、揚程式安全弁は、弁体が開いたときの流路面積の中で弁座流路面積が最小となるリフト形式である。,○
破裂板は、ばね式安全弁に比べ、内部圧力を降下させるまでの時間は短いが、高粘性、固着性の流体には適さない。,×
弁体が流体の背圧によって逆流を防止するように作動するバルブを逆止弁といい、リフト逆止弁、スイング逆止弁、ボール逆止弁などがある。,○
緊急遮断弁の閉止時にウォータハンマが発生した場合、その衝撃の大きさは、弁の径、その上流側の配管の長さ、流体の流速および質量にほぼ比例し、弁の閉止時間に反比例する。,○
25-12-1 接触燃焼式と半導体式のガス漏洩検知警報設備は、検知素子の電気抵抗値が、可燃性ガスなどの濃度により変化する原理を利用している。,○
25-12-2 アンモニアガスを大気に放出するための除外設備として、苛性ソーダ水溶液を用いる吸収塔を設置した。,×
25-12-3 フレアースタックから発生する黒煙、騒音などを低減するため、エレベーテッドフレアーではなくグランドフレアーを採用した。,○
25-12-4 フレアースタックで燃焼速度の大きいガスを処理する場合は、逆火が起こりにくい。,×
26-12-1 塩素ガスをベントスタックから放出するため、水吸収塔を設置した。,×
26-12-2 エレベーテッドフレアスタックから放出するガス流速が、ガス固有の燃焼速度に比べて過大になると逆火現象が起きる。,×
26-12-3 エレベーテッドフレアスタックでスチーム吹込み量を増加させると、空気が吸引され燃焼効率が向上するとともに、水性ガス反応により黒煙の発生が抑制できる。,○
26-12-4 定電位電解式ガス漏洩警報設備は、一酸化炭素、硫化水素の測定に適している。,○
27-12-1 亜硫酸ガスの除害剤として水は適さない。,×
27-12-2 ベントスタックから放出するガスの着地濃度を小さくするため、スタック径を大きくし放出ガス流速を小さくした。,×
27-12-3 ガス漏洩検知警報設備の応答時間のテストを、サンプリング部と検知部だけでなく指示警報部とも組み合わせて実施した。,○
27-12-4 スチームカーテンは、漏洩ガスの流れを遮断するとともに、漏洩ガスを希釈する効果もある。,○
28-12-1 不活性ガス中の可燃性ガスを接触燃焼式ガス検知器で測定する場合は、測定精度が落ちるため空気を混入させてはならない。,×
28-12-2 水溶性で毒性のある液化ガスが漏洩した場合、水によって希釈し、ガスの分圧を下げる措置は、拡散防止に有効である。,○
28-12-3 炭化水素をエレベーテッドフレアーで燃焼させる場合、水素が含まれていると、火炎の安定域が広くなる。,○
28-12-4 エレベーテッドフレアーで、浮上りと逆火の起こる流速は、燃焼速度の大きいガスほど大きい。,○
29-12-1 エレベーテッドフレアーの安定燃焼のため、噴出ガス流速を燃焼速度より大きくし、かつ、マッハ数が0.2程度になるように設計した。,○
29-12-2 接触燃焼式および半導体式のガス漏洩検知警報設備では、不活性ガスを検出することはできない。,○
29-12-3 毒性ガスのうち、アンモニアと亜硫酸ガスには、除害剤として大量の水が使用できる。,○
29-12-4 スチームカーテンは、漏洩したガスの流れを遮断する効果はない。,×
半導体式ガス漏洩検知警報設備は、金属酸化物半導体の電気抵抗値がガスの濃度に応じて変化する現象を利用するもので、不活性ガスを含むすべてのガスの検知が可能である。,×
ガス漏洩検知警報設備は、金属酸化物半導体の電気抵抗値がガスの濃度に応じて変化する現象を利用するもので、不活性ガスを含むすべてのガスの検知が可能である。,○
スチームカーテンは、漏洩した可燃性ガスを付近の加熱炉などと遮断したり、漏洩ガスを希釈する効果があり、上方噴射の場合は拡散させる効果も期待できる。,○
エレベーテッドフレアースタックにガス流量に見合ったスチーム吹込み量を自動的に調整するシステムを設置し、黒煙と火炎息継ぎの防止対策とした。,○
接触燃焼式ガス漏洩検知警報設備は、検知素子である白金コイルの電気抵抗が燃焼反応により増大することを利用したもので、爆発下限界以下の濃度の可燃性ガスには適用できない。,×
ガルバニ電池式ガス漏洩検知警報設備で酸素を測定する原理は、検知ガス中の酸素が電解液中へ溶解すると、電極間に溶存酸素濃度に比例した還元電流が流れることを利用したものである。,○
ガス漏洩検知警報装置に関して、ポンプのメカニカルシール部のように漏洩しやすい場所のガスサンプリング方式は、吸引型の方が拡散型よりも測定が確実である。,○
フレアースタックから発生する黒煙、騒音などを低減するため、エレベーテッドフレアーではなく、グランドフレアーを採用した。,○
ガス漏洩検知警報設備における隔膜イオン電極式は、検知ガスが隔膜を透過して内部液に溶解して生じたイオンが、イオン電極に作用して発生する起電力を測定するものであり、アンモニアやシアン化水素の検知に適用できる。,○
液化ガス貯槽の防液堤内の雨水を外部に排出するため、防液堤外において操作できる排水弁を設置し、常時開とした。,×
フレアースタックのフレアー装置の逆火防止対策を目的として、流入経路にシールドラムを設置した。,○
塩素ガスの除害設備として、カセイソーダ水溶液を用いる吸収塔を設置した。,○
地震の加速度を測定するのに、落球型感震器を設置した。,×
半導体式のガス漏洩検知警報設備は、半導体を加熱して、これに触れる可燃性ガスの濃度により半導体の電気抵抗値が変化する現象を利用したもので、低濃度のガス検知に優れている。,○
スチームカーテンには、漏えいした可燃性ガスを加熱炉など火気を取扱う機器から遮断したり、希釈したり、拡散させたりする効果がある。,○
塩素の除害用に、消石灰を微粉化したものを加圧して散布する装置がある。,○
接触燃焼式は、ホイートストンブリッジに組み込まれた白金コイル表面上で検知ガスの接触燃焼反応が起こり、電気抵抗値が増大することを利用したもので、可燃性ガスの測定に適している。,○
半導体式は、加熱された金属酸化物半導体に測定ガスが触れると、金属酸化物の電気抵抗値が変化することを利用したもので、可燃性ガス、不活性ガスのすべてのガスを検知することができる。,×
隔膜イオン電極式は、検知ガスが隔膜を透過して内部液に溶解し、イオン化することで発生する起電力を利用したもので、毒性ガスの測定に適している。,○
ガルバニ電池式で酸素濃度を測定する場合は、検知ガス中の酸素が電解液中に溶解すると濃度に比例した還元電流が発生することを利用している。,○
25-13-1 配管のラインアップ時に安全弁などが取り付けられていること、安全弁の元弁が「開」で封印されていること、仕切り板が取り外されていることなどを２人で確認した。,○
25-13-2 遠心圧縮機では、吐き出し圧力が上昇すると流量が低下し、サージングが起こることがある。,○
25-13-3 流体が液体である配管のバルブを閉止するときに発生する衝撃の大きさは、バルブの径、その上流側の配管の長さ、流速、密度に反比例する。,×
25-13-4 ガス火災では、いったん消化しても漏洩が続く限り二次災害を引き起こす危険があるため、ごく小規模の火炎（開放空間に限る）以外は消火せずに周囲への散水冷却を行い、並行して漏洩量を減少させる措置をとる。,○
26-13-1 加熱炉における加熱管では、管内のスケールが付着するところ、ロングフレームにより加熱されるところなどにホットスポットが発生しやすい。,○
26-13-2 貯槽に残留している温度の高い液化天然ガス（LNG）に温度が低いLNGを下部から注入することで、LNGが上下2液層に分化し安定な境界面を形成している場合、貯槽の壁面から熱の侵入によってロールオーバが起こることがある。,○
26-13-3 配管内の閉塞は、流体成分が反応して固形物を生成したり、流体成分のいずれかが氷結、凝固または析出するなど固体が配管内に蓄積して発生する現象で、流速による影響はない。,×
26-13-4 ウィーピングは、棚段塔の段液の液深が浅く、蒸気によって液が吹き飛ばされる現象である。,×
27-13-1 飛沫同伴（エントレインメント）は、塔内の蒸気速度が大きくなると、液滴が蒸気に同伴して上のトレイまで到達する現象であり、トレイの段効率低下の原因となる。,○
27-13-2 緊急時にすぐに高圧ガス製造設備の安全弁の元弁を操作できるように封印、施錠などを施さずに運転を開始した。,×
27-13-3 バルブの開閉に必要な標準トルクに見合う長さのハンドル回しを使用して、一人でバルブの操作を行った。,○
27-13-4 製造設備の運転中に地震が起こった場合は、液面で制御するシステムにおいては、液面のスロッシングによる影響を受けて運転に支障をきたすことがある。,○
28-13-1 安全弁の元弁は、安全弁が作動したときに閉止措置をするので施錠せず、かつ、ハンドル回しを近くにおいて確実な操作ができるようにする。,×
28-13-2 配管内の閉塞は、内部の流体が反応して固形物が発生したり、流体の温度条件によっては不純物としての水分などが凍結して発生する現象であり、流速による影響はない。　26-13-3と同じ,×
28-13-3 発熱反応を行わせる反応器内の触媒の充填が不均一な場合、また、加熱炉のチューブ内にスケールが付着して伝熱が阻害される場合にホットスポットが発生する恐れがある。,○
28-13-4 蒸留塔においてトレイ上の液深が深い場合または蒸気量が少ない場合、蒸気がトレイから断続的に吹き出し、段効率が低下することがある。,○
29-13-1 遠心ポンプが不安定な脈動を起こしており、所定の流量に達していない状態になっていたので、原因究明の一つの手段として吸い込み側の条件（液温、ストレーナーのつまり、液面など）を確認した。,○
29-13-2 毒性ガスが漏洩した場合に使用する呼吸保護具のうち、送気式マスクは、空気呼吸器に比べ機動的であるが使用可能時間の制約を受ける。,×
29-13-3 ヒューマンエラーによる誤操作などの防止には、人間個々の特性を考慮した対策だけでなく、職場において良好なコミュニケーションを維持することも重要である。,○
29-13-4 漏洩した水溶性の液化ガスの散水による拡散防止を行うにあたり、溶解熱による温度上昇を小さくするために大量の水を用いた。,○
流体が液体である配管の弁を閉止するときに配管や弁に衝撃を与えることがあり、その際に発生する衝撃の大きさは、弁の閉止時間に比例する。,×
遠心ポンプのキャビテーションは、液温が沸点に近い場合に液が気化することで発生し、羽根車の出口付近において生じやすい。,×
ブローイングは、塔の液量が少ない場合、または段液の液深が浅い場合、蒸気によって液が吹き飛ばされる現象で、多孔板トレイで発生する。,○
フランジからの漏れの発生に対して加圧下で増し締めを行う場合には、片締めを起こし、許容応力を超える締め付け力でボルトが伸び、かえって漏洩量が増加する危険がある。,○
ポンプの吸い込み側にあるストレーナが閉塞すると、液から分離したガスによりハンチング（不安定な脈動）を起こすことがある。,○
常温の液化石油ガスを常圧に近い容器に移送する場合に、急激なバルブ操作を行うと、容器に亀裂を生ずる危険性がある。,○
液化天然ガス（LNG）貯槽では、密度の小さいLNGが残留しているところに、密度の大きなLNGを下部から静かに注入すると、ロールオーバによって大量のガスを発生させることがある。,○
蒸留塔で起こるウィーピングは、塔の蒸気量が減少すると蒸気が出なくなり、段液だけが降下する現象で、泡鐘トレイで多く発生する。,×
計装パネルに設けた保安上重要なスイッチは、緊急時に直ちに操作できるように、カバーをかけてはならない。,×
塔内の蒸気速度が増加し、トレイの泡沫層が高くなり飛沫同伴量が増大し、ついには降下液が冗談に運ばれる現象を、フラッディングという。,○
ガス火災は、いったん消火しても漏洩が続く限り、再発火や爆発で二次災害を引き起こす危険があるため、開放空間におけるごく小規模の火炎以外は、消化してはならない。,○
ポンプの空引き現象とは、所定の揚程や流量に達せずにハンチングを起こす現象であり、ケーシング内に液が満たされず、気体が溜まったときに起こる。,○
運転開始前にフランジの締付けを適正に実施したが、運転後の温度上昇幅が大きいので、運転開始時の昇温過程でホットボルティングを実施した。,○
計装パネルに設けた保安上重要なスイッチは、緊急時に直ちに操作できるようにカバーをかけてはならない。,×
規定のハンドル廻しを用いてバルブを開けようとしたが、非常にかたく操作が困難だったので、運転管理責任者に報告した。,○
多孔板トレイで、塔の液量が少ない場合や段液の液深が浅い場合には、ブローイングが発生し、蒸気によって液が吹き飛ばされることがある。,○
液体が流れる配管のバルブを急激に閉止すると配管内に液柱分離が起こり、背圧があると真空部に液体が逆流し、衝突力が衝撃となって、構造破壊を起こすおそれがある。,○
塔のトレイ上の液（段液）の液深が深くなると、蒸気がトレイから断続的に吹き出し、段効率が高くなる。,×
ホットスポットは、発熱反応における反応器内の触媒充てんの不均一で発生することがあり、加熱炉の加熱管においては、スケールが付着して伝熱が阻害されることにより発生することがある。,○
常温の液化ガスを常圧に近い容器に移送する場合に急激なバルブ操作を行うと、噴出した液化ガスが蒸発して液温が沸点近くまで低下し、容器などにき裂を生じる危険がある。,○
25-14-1 状態基準保全（CBM）は、モニタリングシステムの構築や定期的な監視のための設備と工数が必要になるが、異常の早期発見に適している。,○
25-14-2 定期保全（時間基準保全TBM）は、設備が故障または要求された性能の低下をきたしてから計画的に整備または修理を行う方式であり、設備を寿命まで使い切るので費用が安い。,×
25-14-3 製造設備の異常は運転中でなければ発見しにくい場合があり、定期検査だけでは運転中の経時的変化を把握しにくいので、日常検査（OSI）はそれを補う役割がある。,○
25-14-4 あらかじめ想定される設備の異常や劣化の状態を的確に把握することによって、設備の健全性を総合的に診断する技術は、設備診断技術である。,○
26-14-1 磁粉探傷試験は、試験体の表面または表面近くにある欠陥の位置や形状を検出する方法であり、オーステナイト系ステンレス鋼などの非磁性体材料には適用できない。,○
26-14-2 浸透探傷試験は、肉眼では確認できない微細な表面欠陥を検出するのに最も広く用いられている方法であり、プラスチック、ガラス、セラミックスなどには適用できない。,×
26-14-3 火気工事は、可燃性ガスに対する遮断などの環境確保、消火器などの設置、溶接時の火花飛散防止処置、緊急時の措置などを条件に許可される。,○
26-14-4 入槽する際の空気による再置換に先立つガス置換完了時には、可燃性ガスは爆発下限界以下、毒性ガスは許容濃度以下であることを確認する。,×
27-14-1 工事内容を周知する場合、工事仕様書などの書面で示し、口頭で内容を補足するとともに、工事対象の設備を現地で関係者立会いの下で確認する。,○
27-14-2 電動機、ヒータなどの外部温度が極めて高い機器類を使用することも火気工事であり、周囲の可燃性ガスに対する遮断などの環境確保を図る必要がある。,○
27-14-3 設備を開放し、修理、検査などを行う場合には、他の部分からのガスの漏れ込みを防止するため、開放する部分の前後のバルブを閉止すればよく、仕切り板の挿入は必要ない。,×
27-14-4 槽内で作業をする場合、酸素欠乏症を防ぐには、自然換気の他、十分な換気を行えるようなブロワ、ファンなどの強制換気設備の設置が有効である。,○
28-14-1 製造設備は安全性、生産性、保全性などの観点により重要度ランクの分類が行われている。,○
28-14-2 保全方式のうち、時間基準保全（TBM）は設備の劣化傾向を連続的または定期的に監視、把握しながら設備の寿命などを予測し、次の整備の時期を決める方式である。,×
28-14-3 日常検査は、損傷要因、過去の検査データ、運転条件の変化、類似設備の事故情報などを参考にして検査内容を決める。,○
28-14-4 取り外して点検清掃した熱交換機などの機器は、単独での気密試験は必要なく、接続配管と接合したのち、ガスケット部、配管部などに漏洩のないことを確認する。,×
29-14-1 生産保全（Productive Maintenance）は、安全性を前提に生産目的に合致した保全を経営的な視点から実施するものであり、生産性を高めた、経済的な保全方式として取り入れられてきている。,○
29-14-2 状態基準保全で部品交換または修理を行う周期は、摩耗、詰まり、腐食、劣化などの要因を考慮して実績や同種設備の事例を参考に決める。,×
29-14-3 赤外線サーモグラフィは加熱炉の外面の温度分布を測定することで、内面に用いられているキャスタブル耐火物の剥離、脱落の診断に利用できる。,○
29-14-4 インターロック機構の定期検査の要点は、構成する遮断弁などの目視検査およびインターロック機構の作動検査を行い、円滑、確実な作動を確認することである。,○
TBM、CBMなどの保全方式の決定において、一つの製造施設内で機器ごとに異なる保全方式を用いてもよい。,○
毒性ガス貯槽の不活性ガス置換および空気による再置換を槽内作業の前日に実施し、ガス濃度が許容値以下であることを確認したので、朝からすぐに作業を開始した。,×
設備を開放し、修理、検査などを行うので、他の部分からのガスの漏れ込みを防止するため、仕切り版を挿入する代わりに配管自体を取り外し、非開放側の配管に閉止フランジを取り付けた。,○
工事内容を周知する場合、工事仕様書などの書面で示し、口頭で内容を補足するとともに、工事対象の設備を現地で関係者立会いの下で確認する,○
時間基準保全では、摩耗、詰まり、腐食、劣化などを考慮して、あらかじめ定められた周期ごとに部品交換または修理を行う。,○
時間基準保全や、状態基準保全などの保全方式の決定には、機器の重要度も考慮する必要がある。,○
工事における安全確認では、施工部分の状態が重要であり、工事の周囲の環境変化には注意する必要はない。,×
可燃性ガスや毒性ガスの置換に窒素ガスを用いることはできるが、水で置換を行うことはできない。,×
予防保全とは、設備が機能を停止するかまたは要求された性能を下回る前に計画的に設備を整備し、突発故障を防止する保全方法で、時間基準保全や状態基準保全はこれの1つである。,○
事業所全体の塗装計画と費用の大きな機器の更新について、年間の保全計画とは別に、長期の保全計画を作成した。,○
毒性ガスの貯槽で槽内作業を行うため、まず毒性ガスを窒素で置換し、その後空気で再置換したが、毒性ガスの濃度は窒素ガス置換後に測定したので、作業前には酸素濃度を測定してから入槽した。,×
事業所内において、溶接作業におけるアーク発生、ガス切断などの裸火は火気工事としての管理対象であるが、工事用簡易発電機の内燃機関の火気は管理対象には含まれない。,×
予防保全は設備が故障する前に計画的に設備を整備し、突発故障を防止することを目的とする方式で、時間基準保全や計画事後保全はこれに含まれる。,×
状態基準保全は、モニタリングシステムの構築や定期的な監視のための設備と工数が必要になるが、異常の早期発見に適している。,○
改良保全は、設備の性能や健全性、保全性などを向上させる目的で設備を改善する方式であり、機器設計上の改良点を提案する行為も含むことがある。,○
可燃性ガス貯槽の内部作業を実施するため、まず槽内の可燃性ガスを空気で置換し、酸素濃度を測定し、作業許可を得たのち作業を実施した。,×
設備の保全計画は、その設備の材質や構造、使用される環境や履歴だけでなく、予想される劣化損傷に対する理解をもとに立案する。,○
時間基準保全は、設備の劣化傾向を連続的または定期的に監視、把握しながら設備が故障するまでの時間を予測し、次の整備の時期を決める方式である。,×
ハンマ、グラインダの使用による火花は、火気工事として管理する対象ではないため消火器などの設置は必要ないが、火花の飛散防止対策を行う。,×
設備を開放し、その設備の中で人が作業を行う場合、開放する部分に接続されているバルブを閉止するだけでなく、開放する部分におけるバルブまたは配管の継手に仕切板を挿入するなどにより、設備の他の部分からのガスの漏れ込みを防止する。,○
25-15-1 工事業者への工事内容の周知に際しては、工事仕様書などの書面で示し、口頭で補足するとともに、関係者立会いの下で工事対象設備を現地で確認する。,○
25-15-2 事業所内において、溶接作業におけるアーク発生、ガス切断などの裸火は火気工事としての管理対象であるが、工事用簡易発電機の内燃機の火花は、管理対象には含まれない。,×
25-15-3 毒性ガスを扱う貯槽の中で作業を行うために、前日に窒素によるガス置換を行って毒性ガス濃度が許容濃度以下であることを確認し、当日は空気による再置換を行って、直ちに入槽した。,×
25-15-4 解放した設備の中で人が作業を行う場合は、開放部分の前後のバルブを閉止するだけでなく、バルブまたは継ぎ手に仕切り板を挿入して、設備の他の部分からのガスの漏れ込みを防止する。,○
26-15-1 時間基準保全（TBM）は、設備の劣化傾向を連続的または定期的に監視、把握しながら設備の寿命などを予測し、次の整備の時期を決める方式である。,×
26-15-2 製造設備の異常は、設備を止めて行う検査のみでは発見しにくい場合があり、これを補うものとして運転中検査（OSI）がある。,○
26-15-3 貯槽配管の緊急遮断装置は緊急時の遮断に重要な装置であり、定期保全は欠かせない。目視検査の他、作動検査とその緊急遮断装置にかかる貯槽の解放時などに弁座の漏れ検査を行う。,○
26-15-4 貯槽の配管に設けたバルブの定期検査において、耐圧性能および強度に支障を及ぼす減肉、劣化損傷などの有無の検査、および作動検査を行った。,○
27-15-1 保全方式は以下のツリーのように分類されており、機器、部品の重要度、経済性、故障予知技術の有無に応じて選択する。,○
27-15-2 改良保全(CM)は、設備の性能や健全性、保全性などを向上させる目的で設備を改善する方式であり、機器設計上の改良点を提案する行為も含むことがある。,○
27-15-3 製造設備の維持管理のために行う定期検査の方法の一つに、OSI（On Stream Inspection）と呼ばれる設備の停止中に行う検査がある。,×
27-15-4 浸透探傷試験は金属に限らず、プラスチック、ガラス、セラミックスなどにも適用でき、磁粉探傷試験は、オーステナイト系ステンレス鋼などの非磁性体材料には適用できない。,○
28-15-1 浸透探傷試験の浸透液および磁粉探傷試験の磁粉には蛍光性のものがあり、これらは赤外線を照射して観察する。,×
28-15-2 超音波探傷試験において音波の中でも波長の短い（周波数の高い）超音波を使用するのは、指向性が強く、欠陥による反射率が高く、欠陥の位置検出精度を高めるためである。,○
28-15-3 腐食減肉を想定した肉厚測定、割れおよび接合部不良を想定したガス検知または発砲液による検査は、配管および塔槽類の漏洩に対する診断・検査方法として有効である。,○
28-15-4 異物による配管の閉塞や弁の作動不良に対する診断方法としては、差圧測定のほかに、放射線透過試験も有効である。,○
29-15-1 浸透探傷試験の浸透液および磁粉探傷試験の磁粉には蛍光性のものがあり、これらは紫外線を照射して観察する。,○
29-15-2 放射線透過試験は、放射線が物質を透過する性質を利用した非破壊試験方法であって、ブローホールなどの溶接欠陥の検出に有効である。,○
29-15-3 事業所内において、溶接作業で発生するアークなどの裸火は下記工事としての管理対象であるが、工事用簡易発電機の内燃機関の火気は管理対象ではない。,×
29-15-4 開放した設備の中で人が作業を行う場合のガス遮断では、開放部分の前後のバルブを閉止するだけでなく、バルブまたは配管の接手に仕切り版を挿入するなどして、設備のほかの部分からのガスの漏れ込みを防止する。,○
浸透探傷試験では、まず試験体表面の油脂などを除去し、次に試験体表面に染色浸透液を塗って欠陥部に浸透させた状態で、欠陥の形状などを観察する。,×
異物による配管の閉塞や弁の作動不良に対する診断方法としては、差圧測定のほかに、放射線透過試験も有効である。,○
日常検査は、損傷要因、過去の検査データ、運転条件の変化、類似設備での事故情報などを参考にして検査内容を決定する。,○
アコースティック・エミッション試験は、材料が外力を受けたときに、材料内部の欠陥から放出された弾性波（主に超音波）を検知する非破壊試験方法である。,○
取り外して点検清掃や補修をした熱交換器は、単独での気密試験は必要なく、接続配管と接合したのちガスケット部、配管部などに漏洩のないことを確認する。,×
赤外線サーモグラフィは加熱炉の外面の温度分布を測定することで、内面に用いられている耐火物の剥離、脱落の診断に利用できる。,○
磁気探傷試験（磁粉探傷試験）と渦電流探傷試験（渦流探傷試験）は、電磁気現象を利用した非破壊試験方法であり、いずれも非磁性体材料には適用できない。,×
異物による配管の閉塞や弁の作動不良に対する診断方法としては、差圧測定のほかに、放射線透過試験も有効である。,○
試験体に放射線を照射し、内部の欠陥によって反射・散乱された放射線を検出して欠陥の有無や形状を検査するのが放射線透過試験である。,×
貯槽配管の緊急遮断装置では、定期的な目視検査と作動検査に加えて、貯槽の解放時などに弁座の漏れ検査を行う。,○
製造設備の維持管理のために行う定期検査の方法の一つに、OSIと呼ばれる設備の停止中に行う検査がある。,×
設備診断技術とは、対象とする設備の異常や劣化状態を的確に把握し、これに機器の使用環境や材料の特性などを加味していつまで使用可能であるかを予測し、設備の健全性を診断する技術である。,○
赤外線サーモグラフィは、日常検査において、外面の温度分布を測定することにより、加熱炉内面のキャスタブル耐火物の剥離・脱落の診断に適用できる。,○
設備を開放した場合の気密試験は、原則として当該高圧ガス設備によって貯蔵・処理される気体を使用して行う。,×
浸透探傷試験では、まず試験体表面の油脂などを除去し、次に試験体表面に染色浸透液を塗って欠陥部に浸透させた状態で、欠陥の形状などを観察する。,×
アコースティック・エミッション試験は、材料が外力を受けて変形している状態で、材料内部の欠陥から放出された弾性波（主に超音波）を検知する非破壊試験方法である。,○
設備の保全計画は、その設備の材質や構造、使用される環境や履歴だけでなく、予想される劣化損傷に対する理解をもとに立案する。,○
時間基準保全は、設備の劣化傾向を連続的または定期的に監視、把握しながら設備が故障するまでの時間を予測し、次の整備の時期を決める方式である。,×
ハンマ、グラインダの使用による火花は、火気工事として管理する対象ではないため消火器などの設置は必要ないが、火花の飛散防止対策を行う。,×
設備を開放し、その設備の中で人が作業を行う場合、開放する部分に接続されているバルブを閉止するだけでなく、開放する部分におけるバルブまたは配管の継手に仕切板を挿入するなどにより、設備の他の部分からのガスの漏れ込みを防止する。,○
放射線透過試験は、溶接部の表面欠陥の定期検査に広く適用され、特に超音波探傷試験に比べて、厚肉配管の溶接継手の内表面に生じる疲労き裂の検出に適している。,×
超音波探傷試験において、音波の中でも波長の短い超音波を使用するのは、指向性が強く、欠陥による反射率が高くなり、欠陥の位置検出精度が高まるからである。,○
渦電流探傷試験（渦流探傷試験）は、交流電流を流したコイルによって生じる磁場を試験体に加えたときに、試験体に生じる渦電流が試験体中の減肉、割れなどによって変化することを利用する試験方法である。,○
磁気探傷試験（磁粉探傷試験）は、試験体を磁化したとき欠陥部に磁極が発生して強磁性体の磁粉が表面に付着することを利用した方法であって、表面に開口している欠陥のみならず、表面近傍の欠陥も検出できる。,○
`,Uh=`25-1-1 第一種ガス以外の高圧ガスのみの製造をしようとするものが、事業所ごとに、都道府県知事の許可を受けなければならない場合の処理することができるガス容量の最小値は、1日300立方メートルである。,×
25-1-2 第一種製造者は、その製造をする高圧ガスの種類を変更しようとするときは、あらかじめ、その旨を都道府県知事に届けなければならない。,×
25-1-3 高圧ガス保安法は、高圧ガスによる災害を防止するため、高圧ガスの製造、貯蔵、販売等を規制するとともに、民間事業者及び高圧ガス保安協会による高圧ガスの保安に関する自主的な活動を促進し、もって公共の安全を確保することを目的としている。,○
26-1-1 高圧ガス保安法は、高圧ガスによる災害を防止して公共の安全を確保する目的のため、民間事業者及び高圧ガス保安協会による高圧ガスの保安に関する自主的な活動を促進することも定めている。,○
26-1-2 現在の圧力が0.9MPaの圧縮ガス（圧縮アセチレンガスを除く）であって、温度35度において圧力が1MPaとなるものは高圧ガスではない。,×
26-1-3 圧力が0.2MPaとなる場合の温度が35度以下である液化ガスであっても、現在の圧力が0.1MPaであるものは高圧ガスではない。,×
27-1-1 液化ガスであって、その圧力が0.2MPaとなる場合の温度が30度であるものは、常用の温度において圧力が0.2MPa未満であっても高圧ガスである。,○
27-1-2 圧縮アセチレンガスであって、温度15度において圧力が0.2MPa以上となるものは高圧ガスである。,○
27-1-3 内容積が1デシリットル以下の容器に充填された高圧ガスは、いかなる場合であっても高圧ガス保安法の適用を受けない。,×
28-1-1 高圧ガス保安法は、高圧ガスによる災害を防止して公共の安全を確保する目的のために、高圧ガスの製造、貯蔵、販売、移動その他の取扱及び消費並びに容器の製造及び取扱について規制するとともに、民間事業者及び高圧ガス保安協会による高圧ガスの保安に関する自主的な活動を促進することを定めている。,○
28-1-2 常用の温度においても温度35度においても、その圧力が1MPa未満である圧縮ガス（圧縮アセチレンガスを除く）は、高圧ガスではない。,○
28-1-3 液化酸化エチレンは、高圧ガスである。,○
29-1-1 高圧ガス保安法は、容器の製造及び取り扱いについて規制することも定めている。,○
29-1-2 常用の温度において圧力が1MPa以上となる圧縮ガスであって、現にその圧力が1MPa以上であるものは、高圧ガスである。,○
29-1-3 圧力が0.2MPaとなる場合の温度が35度以下である液化ガスは高圧ガスである。,○
高圧ガス保安法は、高圧ガスによる災害を防止して公共の安全を確保する目的のために、高圧ガスの製造、貯蔵、販売、移動その他の取扱及び消費の規制をすることのみを定めている。,×
常用の温度40度において圧力が1MPaとなる圧縮ガス（圧縮アセチレンガスを除く）であって、現在の圧力が0.9MPaのものは高圧ガスではない。,○
圧力が0.2MPaとなる場合の温度が35度以下である液化ガスであって、常用の温度において圧力が0.2MPa未満であるものは高圧ガスではない。,×
高圧ガス保安法は、高圧ガスによる災害を防止して公共の安全を確保する目的のために、高圧ガスの製造、貯蔵、販売、移動その他の取扱及び消費並びに容器の製造及び取り扱いについて規制するとともに、民間事業者及び高圧ガス保安協会による高圧ガスの保安に関する自主的な活動を推進することを定めている。,○
常用の温度35度において圧力が1MPaとなる圧縮ガス（圧縮アセチレンガスを除く）であって、現在の圧力が0.9MPaのものは高圧ガスではない。,×
液化ガスであって、その圧力が0.2MPaとなる温度が25度であるものは、現在の圧力が0.19MPaであっても高圧ガスである。,○
高圧ガス保安法は、高圧ガスによる災害を防止して公共の安全を確保する目的のために、民間事業者による高圧ガスの保安に関する自主的な活動を促進することを定めているが、高圧ガス保安協会による高圧ガスの保安に関する自主的な活動を促進することは定めていない。,×
圧力が0.2MPaとなる温度が零下10度である液化ガスは、現在の圧力が0Paであっても高圧ガスである。,○
現在の圧力が0.1MPaの圧縮ガス（圧縮アセチレンガスを除く）であって、温度35度において圧力が0.2MPaとなるものは、高圧ガスである。,×
高圧ガス保安法は、高圧ガスによる災害を防止して公共の安全を確保する目的のために、高圧ガスの製造、貯蔵、販売、移動その他の取扱及び消費について規制するほか、容器の製造及び取扱について規制することも定めている。,○
圧力が0.2 MPaとなる場合の温度が35 度以下である液化ガス（液化シアン化水素、液化ブロムメチル及び液化酸化エチレンを除く。）であって、常用の温度において圧力が0.2 MPa未満であるものは高圧ガスではない。,×
常用の温度40度において圧力が1MPaとなる圧縮ガス（圧縮アセチレンガスを除く。）であって、現在の圧力が0.9 MPaのものは高圧ガスではない。,○
高圧ガス保安法は、高圧ガスによる災害を防止して公共の安全を確保する目的のために、高圧ガスの製造、貯蔵、販売、移動その他の取扱及び消費の規制をすることのみを定めている。,×
常用の温度40 度において圧力が0.2メガパスカルとなる液化ガス（特に定めるものを除く。）であって、現在の圧力が0.19 メガパスカルのものは高圧ガスではない。,○
常用の温度25度において圧力が0.2メガパスカル未満である圧縮アセチレンガスであっても、温度35 度において圧力が0.2 メガパスカルとなるものは高圧ガスである。,×
第一種製造者は、事業所ごとに帳簿を備え、製造施設に異常があった場合、異常があった年月日及びそれに対してとった措置をその帳簿に記載しなければならない。また、その帳簿は製造開始の日から10年間保存しなければならない。,×
第一種製造者（冷凍のため高圧ガスの製造をする者を除く。）は、その製造をした高圧ガスをその事業所において販売しようとするときは、その旨を都道府県知事等に届け出る必要はない。,○
特定高圧ガス消費者は、事業所ごとに、消費開始後遅滞なく、特定高圧ガスの消費について所定の書面を添えて都道府県知事等に届け出なければならない。,×
25-2-1 販売業者が高圧ガスの販売のため、質量3000kg未満の液化フルオロカーボン134aのみを貯蔵するときは、第一種貯蔵所または第二種貯蔵所において貯蔵する必要はない。,○
25-2-2 温度35度において圧力が1MPa以上となる圧縮ガスは、常用の温度における圧力が1MPa未満であっても高圧ガスである。,○
25-2-3 常用の温度25度において圧力が0.2MPaとなる液化ガスは、現在の圧力が0.1MPaであっても高圧ガスである。,○
26-2-1 オートクレーブ内における高圧ガスは、そのガスの種類にかかわらず高圧ガス保安法の適用を受けない。,×
26-2-2 第一種ガス以外のガスの高圧ガスの製造をしようとするものが、事業所ごとに都道府県知事の許可を受けなければならない場合の処理することができるガスの容積の最小の値は1日100立方メートルである。,○
26-2-3 高圧ガスの製造のための施設が危険な状態となったとき、その施設の所有者または占有者が直ちに応急の措置を講じなければならないのは、第一種製造者の製造施設及び第二種製造施設に限られている。,×
27-2-1 処理することができるガスの容積が200m3である「第一種ガス」を製造する場合は、許可を受けなければならない ,×
27-2-2 処理することができるガスの容積が210m3である「第一種ガス」及び30m3である「第一種ガス以外のガス」を製造する場合は、許可を受けなければならない ,○
27-2-3 処理することができるガスの容積が200m3である「第一種以外のガス」を製造する場合は、許可を受けなければならない ,○
28-2-1 高圧ガスの製造（冷凍にかかるものを除く）について都道府県知事の許可を受けなければならない場合の処理することができるガスの最小の値は、第一種と第一種以外のガスで異なる。,○
28-2-2 オートクレーブ内における水素は、いかなる場合であっても高圧ガス保安法の適用を受けない。,×
28-2-3 特定高圧ガス消費者であり、かつ、第一種製造者でもあるものは、その製造について都道府県知事の許可を受けているので、特定高圧ガスの消費をすることについて都道府県知事に届けなくてよい。,×
29-2-1 一つの処理設備を使用して高圧ガスの製造をしようとするものが、事業所ごとに、都道府県知事の許可を受けなければならない場合の処理することができるガスの容積の最小の値は、製造をする高圧ガスの種類にかかわらず、1日100m3である。,×
29-2-2 第二種製造者が、容積3000m3以上の高圧ガスを貯蔵しようとするときは、その高圧ガスの種類にかかわらず、第一種貯蔵所において貯蔵しなければならない。,○
29-2-3 特定高圧ガス消費者は、事業所ごとに事業開始の日の20日前までに、その旨を都道府県知事に届け出なければならない。,○
一つの事業所において高圧ガスの製造をしようとする者は、その使用する一つの設備の1日に処理することができるガスの容積が300m3以上である場合には、その製造をするガスの種類に関係なく、都道府県知事の許可を得なければならない。,○
第一種製造者は、高圧ガスの製造の許可を受けたところに従って容積3000m3の高圧ガスである水素を貯蔵するときであっても、その貯蔵する場所は第一種貯蔵所として都道府県知事の許可を受けた場所でなければならない。,×
第一種製造者がその事業所において指定した場所では、何人も火気を取り扱ってはならない。,○
一つの設備（指定設備を除く）のみを使用して第一種ガスである高圧ガスのみの製造をしようとする者が、事業所ごとに、都道府県知事などの許可を受けなければならない場合の処理することができるガスの容積の最小の値は、一日100m3である。,×
第一種製造者は、高圧ガスの製造の許可を受けたところに従って貯蔵能力が1000トンの貯槽により液化プロプレンを貯蔵するときは、その貯槽は第一種貯蔵所として都道府県知事などの許可を受けなくてよい。,○
第一種製造者、第二種製造者又は販売業者以外のものであっても、高圧ガスを取り扱う者は、その所有し、又は占有する高圧ガスについて災害が発生したときは、遅滞なく、その旨を都道府県知事等又は警察官に届けなければならない。,○
窒素と酸素の混合ガスを製造するため、一つの設備（処理することができる窒素ガスの容積が1日210m3及び処理することができる酸素ガスの容積が1日30m3のものであって、指定設備でないもの）を使用して高圧ガスの製造を使用する者は、事業所ごとに、都道府県知事などの許可を受けなければならないものに該当する。,○
販売業者が高圧ガスの販売のため、容積3000m3の第一種ガスを貯蔵するときは、第一種貯蔵所においてしなければならないが、容積1000m3の第二種ガスを貯蔵するときは、第二種貯蔵所において貯蔵することができる。,×
第一種製造者及び第一種貯蔵所の所有者又は占有者は、その所有し又は占有する高圧ガスについて災害が発生したときは、遅滞なくその旨を都道府県知事等又は警察官に届け出なければならないが、第二種製造者及び第二種貯蔵所の所有者又は占有者にあっては、その必要はない。,×
第一種製造者がその高圧ガスの製造事業の全部を譲り渡したときは、その事業の全部を譲り受けた者はその第一種製造者の地位を承継する。,×
一つの定置式製造設備（指定設備であるものを除く。）を使用して高圧ガスの製造をしようとする者は、その設備の処理することができるガスの容積が日300立方メートルを超えている場合には、その製造をするガスの種類に関係なく、事業所ごとに、都道府県知事等の許可を受けなければならない。,○
第二種貯蔵所の所有者又は占有者は、その第二種貯蔵所を定められた技術上の基準に適合するように維持しなければならないが、その技術上の基準は、第一種貯蔵所に適用される技術上の基準と同じである。,○
一つの定置式製造設備（指定設備を除く。）を使用して高圧ガスの製造（冷凍のためのものを除く。）をしようとする者であって、事業所ごとに、都道府県知事等の許可を受けなければならない者は、その製造をするガスの種類に関係なく、その設備の処理することができるガスの容積が日100立方メートルを超えている場合に限られている。,×
第一種製造者がその事業所において指定した場所では、何人も火気を取り扱ってはならない。,○
第一種製造者である法人について合併があり、その合併により新たに法人を設立した場合、その法人は第一種製造者の地位を承継する。,○
25-3-1 質量1000kgの液化塩素を貯蔵するものは事業所ごとに、消費開始の日の20日前までに、その旨を都道府県知事に届け出なければならない。,○
25-3-2 販売業者は、同一の都道府県内に新たに販売所を設けて高圧ガスの販売の事業を営もうとする場合、その販売所における高圧ガスの販売の事業開始後遅滞なく、その旨を都道府県知事に届けなければならない。,×
25-3-3 酸素を廃棄するときは、バルブ及び廃棄に使用する器具の石油類、油脂類その他の可燃性のものを除去した後に行わなければならない。,○
26-3-1 貯蔵設備の貯蔵能力が質量1000kgである液化塩素の消費設備によりそのガスを消費するものは、特定高圧ガス消費者である。,○
26-3-2 第二種製造者が、高圧ガスの製造のため容積3000m3の高圧ガスである圧縮水素を貯蔵しようとするときは、あらかじめ都道府県知事の許可を受けた第一種貯蔵所において貯蔵しなければならない。,○
26-3-3 第一種製造者が定めた危害予防規定を守るべきものは、この第一種製造者、その従業者および協力会社の従業者であると定められている。,×
27-3-2 第一種製造者は、高圧ガスの製造を開始したときは、遅滞なく、その旨を都道府県知事に届けなければならないがい、高圧ガスの製造を廃止したときは、その旨を届け出る必要はない。,×
27-3-3 第一種製造者が製造設備の高圧ガスのポンプを処理能力が350m3増加するものに取り替える工事は、その完成後遅滞なく、その旨を都道府県知事に届けなければならない軽微な変更の工事に該当する。,×
28-3-1 第一種製造者が製造施設の位置、構造、設備の変更の工事をし、または製造する高圧ガスの種類、方法を変更しようとするとき、許可と同様の基準が準用される。,○
28-3-2 高圧ガスの販売の事業を営む者は、事業の開始後30日以内に、販売所ごとに、その旨を都道府県知事に届けなければならない。,×
28-3-3 容器に充填された高圧ガスの輸入をしたものが、その高圧ガス及び容器について都道府県知事が行う輸入検査を受けた場合、これらが輸入検査技術基準に適合していると認められた後、これを移動することができる。,○
29-3-1 第一種製造者は、製造のための施設の位置、構造、設備を変更することなく、製造する高圧ガスの種類を変更したときは、軽微な変更として、変更後遅滞なく、その旨を都道府県知事に届けなければならない。,×
29-3-2 第一種製造者は、その製造をした高圧ガスをその事業所において販売しようとするときは、その旨を都道府県知事に届け出る必要はない。,○
29-3-3 第一種製造者は、高圧ガスの製造を開始し、または廃止したときは遅滞なくその旨を都道府県知事に届けなければならない。,○
第一種製造者は、製造をする高圧ガスの種類又は製造の方法を変更しようとするときは、あらかじめ、都道府県知事などにその旨を届け出なければならない。,×
第一種製造者は、所有し、又は占有する高圧ガスを製造するための施設が危険な状態となったときは、直ちに、所定の応急の措置を講じなければならない。,○
高圧ガスである液化ガスを車両により移動するとき、その質量が1.5kg以下であるものは、いかなる場合であっても、移動の方法にかかる技術上の基準に従って移動する必要はない。,×
第一種製造者は、高圧ガスの製造施設の位置、構造又は設備の変更の工事をしようとするときは、その工事が定められた軽微なものである場合を除き、都道府県知事の許可を受けなければならない。,○
「製造施設が危険な状態になったときは、直ちに、応急の措置を行うとともに、製造の作業を中止し、製造設備内のガスを安全な場所に移し、又は大気中に安全に放出し、この作業に特に必要な作業員のほかは退避させること。」の定めは第二種製造者には適用されない。,×
一般高圧ガス保安規則に定められている高圧ガスの移動にかかる技術上の基準などに従うべき高圧ガスは、可燃性ガス、毒性ガス及び酸素の種類に限られている。,×
第一種製造者は、その製造をする高圧ガスの種類を変更しようとするときは都道府県知事などの許可を受ける必要はないが、変更後遅滞なく、その旨を都道府県知事などに届けなければならない。,×
高圧ガスの製造のための施設が危険な状態となったとき、その施設の所有者または占有者が直ちに応急の措置を講じなければならない製造施設には、第一種製造者の製造施設及び第二種製造者の製造施設以外のものも含まれている。,○
高圧ガスである圧縮ガスを車両により移動するとき、その容積が0.15m3以下であるものは、いかなる場合であっても、移動の方法にかかる技術上の基準に従って移動する必要はない。,×
第一種製造者は、製造をする高圧ガスの種類を変更することなく製造の方法を変更しようとするときには、都道府県知事等の許可を受けなければならない。,○
高圧ガスの販売の事業を営もうとする者は、販売所ごとに、事業の開始後遅滞なく、その旨を都道府県知事等に届け出なければならない｡,×
オートクレーブ内における高圧ガスは、そのガスの種類にかかわらず高圧ガス保安法の適用を受けない。,×
第一種製造者は、事業所ごとに帳簿を備え、製造施設に異常があった場合、異常があった年月日及びそれに対してとった措置をその帳簿に記載しなければならない。また、その帳簿は製造開始の日から10年間保存しなければならない。,×
第一種製造者（冷凍のため高圧ガスの製造をする者を除く。）は、その製造をした高圧ガスをその事業所において販売しようとするときは、その旨を都道府県知事等に届け出る必要はない。,○
特定高圧ガス消費者は、事業所ごとに、消費開始後遅滞なく、特定高圧ガスの消費について所定の書面を添えて都道府県知事等に届け出なければならない。,×
25-4-1 第二種製造者には、「高圧ガスの製造施設が危険な状態になった時、直ちに、応急の措置を行うとともに、製造の作業を中止し、、、、」の定めは適用されない。,×
25-4-2 第一種製造者が高圧ガスを容器により授受した場合、所定の事項を記載した帳簿の保存期間は、記載の日から2年と定められている。,○
25-4-3 第一種製造者がその事業所内において指定した場所では、その第一種製造者の従業者を除き、何人も火気を取り扱ってはならない。,×
26-4-1 スクーバダイビング用の空気を内容積10リットル以上の容器に充填する第二種製造者が、その製造した圧縮空気の販売の事業をその事業所において営むときは、その旨を都道府県知事に届け出る必要はない。,×
26-4-2 内容積が47リットルの容器に充填された高圧ガスを輸入し、陸揚げ地を管轄する都道府県知事又は高圧ガス保安協会もしくは指定輸入検査機関が行う輸入検査を受ける場合、その検査対象は高圧ガスのみである。,×
26-4-3 第一種製造者、第二種製造者又は販売業者以外のものであっても、高圧ガスを取り扱うものは、その所有し、または占有する高圧ガスについて災害が発生したときは、遅滞なく、その旨を都道府県知事又は警察官に届けなければならない。,○
27-4-1 第一種製造者は、その製造をした高圧ガスをその事業所において販売しようとするときは、その旨を都道府県知事に届け出なくてもよい。,○
27-4-2 販売業者が高圧ガスの販売のため、質量50kg入りの液化石油ガスの充填容器70個を一つの容器置き場に貯蔵するとき、第二種貯蔵所において貯蔵することができる。,○
27-4-3 2以上の製造事業所を有する第一種製造者は、主たる事務所に帳簿を備え、各々の製造事業所にかかる異常があった場合に所定の事項を記載し、保存することと定められている。,×
2200m3の第一種ガスは、第一種貯蔵所において貯蔵しなければならない。,×
1200m3の第一種ガスと600m3の第二種ガスは、第一種貯蔵所において貯蔵しなければならない。,○
900m3の第二種ガスは、第一種貯蔵所において貯蔵しなければならない。,×
29-4-1 高圧ガスである酸素を廃棄するときは、一般高圧ガス保安規則で定める廃棄にかかる技術上の基準に従って行わなければならない。,○
29-4-2 第一種製造者がその事業所内において指定した場所では、その第一種製造者の従業者を除き、何人も火気を取り扱ってはならない。,×
29-4-3 第一種製造者は、その所有又は占有する製造施設の高圧ガスについて災害が発生したときは、遅滞なく、その旨を都道府県知事又は警察官に届け出なければならない。,○
第一種製造者は、事業所ごとに帳簿を備え、その製造施設に異常があった場合、異常があった年月日及びそれに対してとった措置をその帳簿に記載し、記載の日から10年間保存しなければならない。,○
オートクレーブ内における高圧ガスは、そのガスの種類にかかわらず高圧ガス保安法の適用を受けない。,×
高圧ガスの輸入をしたものは、輸入をした高圧ガス及びその容器について、指定輸入検査機関が行う輸入検査を受け、これらが輸入検査技術基準に適合していると認められ、その旨を都道府県知事に届け出た場合は、その都道府県知事などが行う輸入検査を受けることなく、その高圧ガスを移動することができる。,○
高圧ガスの販売の事業を営もうとする者は、特に定められた場合を除き、販売所ごとに、事業開始の日の20日前までに、その旨を都道府県知事などに届け出なければならない。,○
第一種製造者であっても、特定高圧ガス消費者に該当する場合は、事業所ごとに消費開始の20日前までに、その特定高圧ガスの消費について都道府県知事に届け出る必要がある。,○
第一種製造者がその事業所において指定する場所では、その第一種製造者の従業者を除き、何人も火気を取り扱ってはならない。,×
第一種貯蔵所の所有者又は占有者が特定高圧ガス消費者にも該当する場合は、特定高圧ガスの消費についての都道府県知事などへの届け出は不要である。,×
第一種製造者（冷凍にかかるものを除く）が、その製造をした高圧ガスの販売の事業をその事業所において営むときは、その旨を都道府県知事などに届け出る必要はない。,○
第一種製造者がその事業所において指定した場所では、何人も火気を取り扱ってはならない。,○
第一種製造者は、事業所ごとに帳簿を備え、その製造施設に異常があった場合、異常があった年月日及びそれに対してとった措置をその帳簿に記載し、記載の日から10年間保存しなければならない。,○
特定不活性ガス以外の不活性ガスを廃棄する場合の廃棄の場所、数量その他廃棄の方法についての技術上の基準は、定められていない。,○
第一種製造者は、その所有又は占有する高圧ガスについて災害が発生したときは、遅滞なく、その旨を都道府県知事等又は警察官に届け出なければならない｡,○
容器に充填された高圧ガスの輸入をした者は、輸入をした高圧ガス及びその容器について、指定輸入検査機関が行う輸入検査を受け、これらが輸入検査技術基準に適合していると認められ、その旨を都道府県知事等に届け出た場合は、都道府県知事等が行う輸入検査を受けることなく、その高圧ガスを移動することができる。,○
第一種製造者（冷凍のため高圧ガスの製造をする者を除く。）は、高圧ガスの製造の許可を受けたところに従って容積3000立方メートルの高圧ガスである酸素を貯蔵するときであっても、その貯蔵は都道府県知事等の許可を受けた第一種貯蔵所においてしなければならないと定められている。,×
第一種製造者は、その製造をする高圧ガスの種類を変更したときは、遅滞なく、その旨を都道府県知事等に届け出なければならない。,×
25-5-1 圧縮ガスを充てんする容器の刻印のうち、「FP 14.7M」は、その容器の最高充填圧力が14.7MPaであることを表している。,○
25-5-2 容器に充填することができる液化アンモニアの質量は、次の算式により表される。G=0.9wV　w密度　V容積,×
25-5-3 容器の表示が減失したとき、その容器の所有者が表示をし直すことは禁じられている。,×
26-5-1 容器に充填する液化ガスは、その容器の内容積に関係なく、容器に刻印など又は自主検査刻印などで示された最高充填質量以下のものでなければならない。,×
26-5-2 一般継ぎ目なし容器の容器再検査の期間は、容器の製造後の経過年数に関係なく定められている。,○
26-5-3 容器の付属品であるバルブの付属品再検査の期間は、そのバルブが容器に装置されているかどうかに関係なく2年と定められている。,×
27-5-1 容器の製造又は輸入をしたものは、特に定められた容器を除き、所定の容器検査を受け、これに合格したものとして所定の刻印または商標の掲示がされているものでなければ、容器を譲渡し、又は引き渡してはならない。,○
27-5-2 容器検査に合格した容器に刻印をすべき事項の一つに、その容器が受けるべき次回の容器再検査の年月がある。,×
27-5-3 容器に充填する高圧ガスは、圧縮ガスにあってはその容器に刻印等又は自主検査刻印等で示された容器の内容積に応じて所定の方法により計算した圧力以下のものでなければならないと定められている。,
28-5-1 容器は、容器検査を受け、これに合格した場合においては所定の刻印又は標章の掲示がされるが、容器が容器再検査に合格した場合は、その定めはない。,×
28-5-2 溶接容器の容器再検査の期間は、容器の製造後の経過年数に関係して定められている。,○
28-5-3 容器に装備されているバルブの付属品再検査の期間は、そのバルブが装置されている容器の容器再検査の期間に関係して定められている。,○
29-5-1 容器検査に合格した容器に、充填することができる高圧ガスの名称を明示すれば、その容器に充填すべき高圧ガスの種類の刻印等又は自主検査刻印等をする必要はない。,×
29-5-2 容器検査に合格した容器には、その外面の見やすい箇所に、その表面積の2分の1以上について黄色の塗色を行わなければならない。,○
29-5-3 容器検査に合格した容器には、充填することのできる液化ガスの質量の数値が、容器の刻印等または自主検査等において示されている。,×
圧縮酸素を容器に充填する場合は、容器の刻印等又は自主検査刻印等において示されている圧力以下で充填することと定められている。,○
液化アンモニアを充填する容器には、その最大充填質量を容器の刻印等又は自主検査刻印等において示すことと定められている。,×
液化塩素を充填する容器の外面に表示すべき事項として、充填する高圧ガスの製造者及び高圧ガスの性質を示す文字「危」を明示することが定められている。,×
高圧ガスが充填されている容器を輸入し、所定の輸入検査に合格したときは、所定の容器検査を受けることなくその容器を譲渡し、又は引き渡すことができる。,○
容器に充填する液化ガスは、その容器の内容積に関係なく、容器に刻印等又は自主検査刻印等において示された最大充填質量以下のものでなければならない。,×
容器の廃棄をする者は、その容器をくず化し、その他容器として使用することができないように処分しなければならないが、容器の付属品の廃棄については、その定めはない。,×
容器が損傷を受けた場合、容器再検査を受け、これに合格し、かつ、所定の刻印又は標章の掲示がされたものでなければ充填してはならない。,○
容器に充填する場合は、その容器に刻印又は自主検査刻印等で示されている圧力以下としなければならない。,○
容器の所有者は、容器再検査に合格しなかった容器について、所定の期間内に所定の刻印等がされたなかったときは、遅滞なく、この容器を容器として使用することができないように処分すること又はその外面に使用禁止である旨の表示をすることと定められている。,×
容器の製造をした者は、特に定められた容器を除き、所定の容器検査を受け、これに合格したものとして所定の刻印等がされているものでなければ、その容器を譲渡し、又は引き渡してはならない。,○
高圧ガスが充?されている容器を輸入し、所定の輸入検査に合格したときは、所定の容器検査を受けることなくその容器を譲渡し、又は引き渡すことができる。,○
圧縮ガスを容器に充?する場合は、その容器に刻印等又は自主検査刻印等において示されている圧力以下で充?しなければならない。,○
容器が容器検査に合格したときは、特に定められた場合を除き、容器の厚肉の部分の見やすい箇所に、明瞭に、かつ、消えないように所定の事項が刻印される。,○
損傷を受けた容器は、その容器の定められた容器再検査期間内において容器再検査を受ければ、所定の刻印等がされていなくても高圧ガスを充?することができる。,×
附属品を廃棄するときは、その附属品をくず化し、その他附属品として使用することができないように処分しなくてよい｡,×
25-6-1 圧縮酸素を充てんする一般継目なし容器の容器の容器再検査において行われる耐圧試験は、容器ごとに行う必要はなく、刻印等において示された内容積、形状および製造年月を同じくするもののうちから任意に採取した1個について行い、採取した容器が合格したときは、残余のものは、合格したものとみなされると定められている。,×
25-6-2 容器又は付属品の廃棄をするものは、くず化し、その他容器又は付属品として使用することができないように処分しなければならない。,○
25-6-3 容器に装置されているバルブの付属品再検査の期間は、そのバルブが装置されている容器の容器再検査の期間に関係なく定められている。,×
26-6-1 容器検査に合格した容器に刻印をすべき事項の一つに、その容器が受けるべき容器再検査の年月がある。,×
26-6-2 付属品検査に合格したバルブには、そのバルブが装置される容器の種類ごとに定められた刻印がされている。,○
26-6-3 容器の製造又は輸入をしたものは、容器検査を受け、これに合格したものとして所定の刻印又は標章の掲示がされているものでなければ、特に定められた容器を除き、容器を譲渡し、又は引き渡してはならない。,○
27-6-1 毒性ガスを充てんする容器には、その充填すべき高圧ガスの名称が刻印で示されているので、そのガスの名称を明示する必要はなく、その高圧ガスの性質を示す文字を明示することと定められている。,×
27-6-2 容器の所有者は、その容器が容器再検査に合格しなかった場合であって、所定の期間内に高圧ガスの種類又は圧力の変更に伴う刻印等がされなかった場合には、遅滞なく、その容器をくず化し、その他容器として使用することができないように処分しなければならない。,○
27-6-3 超低温容器の容器再検査においては耐圧試験は行われるが、断熱性能試験は行われない。,×
28-6-1 容器に装置されるバルブであって付属品検査に合格したものに刻印すべき事項の一つに、耐圧試験における圧力（記号 TP、単位 メガパスカル）及びMがある。,○
28-6-2 容器又は付属品の廃棄をするものは、くず化し、その他容器又は付属品として使用することができないように処分しなければならない。,○
28-6-3 容器の外面には、その容器に充填することができる液化アンモニアの最高充填質量を明示しなければならない。,×
29-6-1 付属品検査に合格したバルブには、そのバルブが装置されるべき容器の内容積を示す記号の刻印がなされている。,×
29-6-2 一般継ぎ目なし容器の容器の再検査の期間は、容器の製造後の経過年数により定められているが、容器の所有者が変わる場合は容器再検査の期間も変更される。,×
29-6-3 容器の所有者は、容器再検査に合格しなかった容器について所定の期間内に所定の刻印等がされなかったときは、遅滞なく、これをくず化し、その他容器として使用することができないように処分しなければならない。,○
30-6-1 高圧ガスを充填していない容器を輸入したものは、特に定められた容器を除き、所定の容器検査を受け、これに合格したものとして所定の刻印又は標章の掲示がされているものでなければ、その容器を譲渡してはならない。,○
30-6-2 液化アンモニアを充填するための溶接容器の容器再検査の期間は、容器の製造後の経過年数に応じて定められているが、圧縮窒素を充填するための一般継目なし容器の容器再検査の期間は、容器の製造後の経過年数に関係なく一律に定められている。,○
30-6-3 容器に装置されていない付属品の付属品再検査の期間は定められていないが、その付属品が容器に装置された場合は装置された日から1年以内に付属品再検査を受けることと定められている。,×
容器検査に合格した容器に刻印等をすべき事項の一つに、その容器の内容積があるが、それをすべき容器は液化ガスを充填する容器のみである。,×
容器の外面に所有者の氏名などを明示した容器の所有者は、その氏名などに変更があったときは、次回の容器再検査時にその事項を明示しなおさなければならない。,×
容器の付属品であるバルブに刻印をすべき事項の一つに、そのバルブが装置されるべき容器の種類がある。,○
容器の外面の見やすい箇所に行う塗色は、高圧ガスの種類が液化炭酸ガスである場合は「緑色」と定められている。,○
容器検査に合格した容器には所定の刻印等をしなければならないが、その一つに「最大充填質量の数値」が定められている。,×
附属品検査に合格したバルブには装置されるべき容器の種類を刻印しなければならないが、液化塩素の容器である場合の刻印は「LG」定められている。,○
容器検査に合格した容器であって、液化ガスを充?するものに刻印等をすべき事項の一つに容器の内容積があるが、圧縮ガスを充?するものについてはその定めはない。,×
酸素ガスを充?する容器に装置するバルブであって附属品検査に合格したものに刻印をすべき事項の一つに、「耐圧試験における圧力（記号TP、単位メガパスカル）及びM」がある。,○
水素ガスを充?する容器に表示すべき事項のうちには、「その容器の表面積の2分の1以上について行う青色の塗色」及び「水素ガスの性質を示す文字「爆」の明示」がある。,×
容器検査に合格した容器に、充?することができる高圧ガスの名称を明示すれば、その容器に充?すべき高圧ガスの種類の刻印等をする必要はない。,×
容器に充?することができる液化塩素の質量は、次の式で表される。G=PxV/C,×
液化アンモニアを充?するための溶接容器の容器再検査の期間は、容器の製造後の経過年数に関係して定められている。,○
25-7-1 減圧設備の外面から第一種保安物件に対して有すべき第一種設備距離は、その減圧設備の処理能力の値から算出される。,×
25-7-2 この貯槽の周囲5m以内においては、所定の措置を講じた場合を除き、引火性または発火性のものを置いてはならない。,○
25-7-3 液化石油ガスの製造に関し１年以上の経験を有するものであれば、所定の製造保安責任者免状の交付を受けていないものを取扱主任者に選任することができる。,○
26-7-1 減圧設備の外面から、第一種保安物件に対して有すべき第一種設備距離が確保できない場合の措置として、その減圧設備を地盤面下に埋設する措置が定められている。,×
26-7-2 貯槽の基礎は、その立地する地盤が堅固であれば、その支柱を同一の基礎に緊結する必要はない。,×
26-7-3 丙種化学責任者免状の交付を受けているものを、この事業所の取扱主任者に選任することができる。,○
27-7-1 減圧設備の外面から第一種保安物件に対し第一種設備距離以上の距離を有しなければならないが、その設備距離は貯蔵能力にかかわらず常に一定である。,×
27-7-2 消費設備において、貯槽の基礎は不同沈下等によりその消費設備に有害なひずみが生じないようにしなければならないが、蒸発器についてはその定めはない。,×
27-7-3 定められた措置を講じた場合を除き、貯蔵設備などの周囲5m以内においては、火気（その設備内のものを除く。）の使用を禁じ、かつ、引火性又は発火性のものを置いてはならない。,○
28-7-1 消費施設の立地する地盤が堅固であっても、貯槽の支柱は同一の基礎に緊結しなければならない。,○
28-7-2 貯槽設備に生じる静電気を除去する措置を講じた場合は、その貯蔵設備の周囲5m以内に引火性又は発火性のものを置くことができる。,×
28-7-3 所定の製造保安責任者免状の交付を受けていないが液化石油ガスの製造に関し1年以上の経験を有するものを、この事業所の取扱主任者として選任することができる。,○
29-7-1 貯蔵設備の外面から第一種保安物件及び第二種保安物件に対し、それぞれ所定の距離以上の距離を有しなければならないが、減圧設備については、その定めはない。,×
29-7-2 この貯槽の周囲5m以内においては、所定の措置を講じた場合を除き、引火性又は発火性のものを置いてはならない。,○
29-7-3 取扱主任者には、所定の製造保安責任者免状の交付を受けているもののほか、液化石油ガスの製造又は消費に関し1年以上の経験を有するものも選任することができる。,○
消費施設は、その減圧設備の外面から第一種保安物件に対し第一種設備距離以上、第二種保安物件に対し第二種設備距離以上の距離を有しなければならない。,○
消費設備のうちその周囲5m以内において火気の使用を禁じられているのは貯蔵設備のみである。,×
液化石油ガスの消費に関し1年以上の経験を有するものを取扱主任者に選任することができる。,○
消費施設は、第一種保安物件に対して所定の強度を有する構造の障壁を設ければ、その減圧設備の外面から第一種保安物件に対して有すべき第一種設備距離は減じられる。,×
貯蔵設備などの周囲5m以内においては、引火性又は発火性のものを置いてはならないが、適切な防消火設備を適切な箇所に設けた場合は、貯蔵設備などの周囲5m以内に引火性又は発火性のものを置くことができる。,×
甲種化学責任者免状の交付を受けているが、液化石油ガスの消費に関する1年以上の経験を有していないものを、この消費施設の特定高圧ガス取扱主任者として選任することができる。,○
消費設備のうち、貯槽の基礎は不動沈下などによりその設備に有害なひずみが生じないようにしなければならないと定められているが、蒸発器の基礎についてはその定めはない。,×
減圧設備の外面から第一種保安物件に対して有すべき第一種設備距離は、減圧設備の処理能力から算出すると定められている。,×
所定の製造保安責任者免状の交付を受けていなくても、特定高圧ガスの消費者としての液化石油ガスの消費に関し1年以上の経験を有するものを取扱主任者として選任することができると定められている。,○
この貯槽の基礎は、その立地する地盤が堅固であれば、貯槽の支柱を同一の基礎に緊結する必要はない。,×
貯蔵設備等の周囲5メートル以内においては、特に定める場合を除き、火気（その設備内のものを除く。）の使用を禁じ、かつ、引火性又は発火性の物を置いてはならない。,○
消費施設は、第一種保安物件に対して所定の強度を有する構造の障壁を設ければ、その減圧設備の外面から第一種保安物件に対して有すべき第一種設備距離は減じられる。,×
液化石油ガスの消費（特定高圧ガスの消費者としての消費に限る。）に関し1年以上の経験を有する者を取扱主任者に選任することができる。,○
貯蔵設備である貯槽に適切な防消火設備を適切な箇所に設けた場合は、その貯槽の周囲5メートル以内に引火性又は発火性の物を置くことができる。,×
貯蔵設備の外面から第一種保安物件及び第二種保安物件に対し、それぞれ所定の距離以上の距離を有しなければならないが、減圧設備については、その定めはない。,×
25-8-1 認定完成検査実施者であるので、認定を受けた製造施設の特定変更工事については、工事を完成したときに都道府県知事が行う完成検査を受けてはならないと定められている。,×
25-8-2 認定保安検査実施者として、自ら保安検査を行うことができる特定施設を追加するため、経済産業大臣の認定を受ける場合、その施設は、継続して2年以上高圧ガスを製造している特定施設でなければならない。,○
25-8-3 定期に保安のための自主検査を行わなければならない製造のための施設として、高圧ガス設備を除くガス設備は対象として定められていない。,×
26-8-1 製造施設の位置、構造又は設備の変更の工事をしようとするときは、都道府県知事の許可を受けなければならないが、製造をする高圧ガスの種類又は製造の方法の変更については、その変更後遅滞なく都道府県知事に届け出ればよい。,×
26-8-2 製造施設の特定変更工事以外の変更の工事を行った場合、都道府県知事又は高圧ガス保安協会もしくは指定完成検査機関が行う完成検査を受けず、もしくは自ら完成検査を行うことなく、その製造施設を使用することができる。,○
26-8-3 従業者に対する保安教育計画を定め、これを忠実に実行しなければならないが、その保安教育計画を変更した場合であっても、都道府県知事に届け出る必要はない。,○
27-8-1 認定完成検査実施者であるので、製造施設の特定変更工事にかかる完成検査を自ら実施した後、その検査記録を都道府県知事に届け出ることなく、その製造施設を使用することができる。,×
27-8-2 危害予防規定を変更したときは、変更の明細を記載した書面を添えて、都道府県知事に届け出なければならない。,○
27-8-3 従業者に対する保安教育計画を定め、都道府県知事に届け出るとともに、その計画を忠実に実行しなければならない。,×
28-8-1 製造施設の特定変更工事以外の変更の工事を完成したときは、都道府県知事又は高圧ガス保安協会若しくは指定完成検査機関が行う完成検査を受けず、もしくは自ら完成検査を行うことなく、その製造施設を使用することができる。,○
28-8-2 従業者に対する保安教育計画を定め、これを忠実に実行しなければならないが、その保安教育計画を変更した場合であっても、都道府県知事に届け出る必要はない。,○
28-8-3 この事業所には、製造施設の区分ごとに所定の製造保安責任者免状の交付を受け、かつ、所定の経験を有するもののうちから保安主任者を選任しなければならないが、この場合の製造保安責任者免状は、甲種化学責任者免状又は甲種機械責任者免状に限られている。,×
29-8-1 この事業者が都道府県知事の許可を受けた製造施設の位置、構造又は設備の変更の工事であっても、都道府県知事、高圧ガス保安協会又は指定完成検査機関が行う完成検査を受けることなく、もしくは自ら完成検査を行うことなく、その製造施設を使用することができる変更の工事がある。,○
29-8-2 この事業者が危害予防規定に定めるべき事項の一つに、「製造施設の新増設にかかる工事及び修理作業の管理に関すること。」がある。,○
29-8-3 この事業者は認定完成検査実施者及び認定保安検査実施者であるので、その従業者に保安教育を施せば、保安教育計画を定める必要はない。,×
認定完成検査実施者であるので、製造施設の特定変更工事にかかる完成検査を自ら行い所定の技術上の基準に適合していることを確認したときは、その検査記録を都道府県知事などに届け出ることなく、その製造施設を使用することができる。,×
危害予防規定を変更したときは、都道府県知事などに届け出なければならない。,○
従業者に対する保安教育計画を変更したときは、都道府県知事などに届け出るとともに、その計画を忠実に実行しなければならない。,×
保安区画内の高圧ガス設備は、その燃焼熱量の数値が所定の数値以下であっても、その外面からその保安区画に隣接する保安区画内の高圧ガス設備に対して30m以上の距離を有しなければならない。,○
特殊反応設備に設けた内部反応監視装置のうち、異常な温度又は圧力の上昇その他の異常な事態の発生を最も早期に検知することができるものであって、かつ、自動的に警報を発することができるものは、その計測結果を自動的に記録することができるものである必要はない。,×
この事業所に窒素の製造設備を増設する場合、この窒素の貯蔵設備及び処理設備は、特に定められたものを除きその外面から保安物件に対し50m以上の距離を有しなければならない。,○
保安統括者が高圧ガスの製造にかかる保安に関する企画又は指導の業務に通算して3年以上従事したものである場合には、保安企画推進員を選任しなくてよい。,×
保安企画推進員に受講させなければならない高圧ガスの災害の防止に関する所定の講習は、選任した後1回のみ受講させればよい。,×
保安係員を選任するときは、定められた製造施設区分ごとに選任しなければならないが、設備の配置などから見て一体として管理されるものとして設計されたものであり、かつ、同一の計器室において制御され適切な保安管理が行えるときは、異なる2以上の製造施設であっても同一の製造施設区分に属するものとみなして選任することができる。,○
保安統括者として選任した者が交付を受けている製造保安責任者免状の種類及びその者が有している高圧ガスの製造に関する経験にかかわらず、この事業所には保安技術管理者を必ず選任しなければならないと定められている。,×
保安主任者には、乙種化学責任者免状の交付を受け、かつ、所定の高圧ガスの製造に関する経験を有する者を選任することができる。,○
保安係員の代理者は、所定の製造保安責任者免状の交付を受けている者であって、かつ、所定の高圧ガスの製造に関する経験を有する者のうちから、あらかじめ選任しておかなければならない。,○
認定を受けた特定施設について自ら保安検査を実施し、その検査の記録を都道府県知事等に届け出た後に、都道府県知事等が行うその記録による保安検査を受けなければならない。,×
定期自主検査を行うときは、選任した保安係員に、その定期自主検査の実施について監督を行わせなければならない。,○
選任した保安主任者の定められた職務の一つに、製造施設の設計・施工に関し、保安上の観点から助言、指導及び勧告を行うことがある。,×
25-9-1 危害予防規定を定め、都道府県知事の認可を受けなければならない。また、これを変更したときも同様である。,×
25-9-2 従業者に対する保安教育計画を定め、その計画を都道府県知事に届け出なければならない。,×
25-9-3 この事業者が選任した保安技術管理者には、所定の期間内に高圧ガス保安協会又は指定講習機関が行う高圧ガスによる災害の防止に関する講習を受けさせるべき定めはない。,○
26-9-1 認定完成検査実施者として完成検査のための組織または完成検査の方法に変更があったときは、その変更後の認定の更新時にその旨を経済産業大臣に届け出なければならない。,×
26-9-2 新たな製造施設を追加する変更の工事について、自ら完成検査を行い、検査の記録を都道府県知事に届け出た場合は、都道府県知事又は高圧ガス保安協会若しくは指定完成検査機関が行う完成検査を受けることなく、その製造施設を使用することができる。,×
26-9-3 定期自主検査は、ガス設備が製造施設の位置、構造及び設備の技術上の基準（耐圧試験にかかるものを除く）に適合しているかどうかについて行わなければならない。,○
27-9-1 保安統括者が所定の製造保安責任者免状の交付を受けていない場合、甲種化学責任者免状又は甲種機械責任者免状の交付を受け、かつ、高圧ガスの製造に関する所定の経験を有するもののうちから保安技術管理者を選任しなければならない。,○
27-9-2 保安係員は製造施設区分ごとに選任しなければならないが、異なる製造施設区分に属する2以上の製造施設とが設備の配置などから見て一体として管理されるものとして設計されたものであり、かつ、同一の計器室において制御され適切な保安管理が行えるときは、これら２以上の製造施設を同一の製造施設区分に属するものとみなして選任することができる。,○
27-9-3 保安係員の代理者は、あらかじめ、所定の製造保安責任者免状の交付を受けているものであって、かつ、所定の高圧ガスの製造に関する経験を有するもののうちから選任しておかなければならない。,○
28-9-1 この事業所に保安技術管理者を選任する場合、甲種化学責任者免状又は甲種機械責任者免状の交付を受けていないものであっても、乙種化学責任者免状又は乙種機械責任者免状の交付を受け、かつ、所定の経験を有するものを選任することができる。,×
28-9-2 選任した保安主任者が、旅行、疾病、その他の事故によってその職務を行うことができなくなったときは、遅滞なく、高圧ガスの製造に関する所定の経験を有するもののうちから代理者を選任し、その職務を代行させなければならない。,×
28-9-3 選任した保安係員の定められた職務の一つに、「災害の発生またはその恐れがある場合における応急措置を実施すること。」がある。,○
29-9-1 保安統括者として選任したものが交付を受けている製造保安責任者免状の種類及び経験した高圧ガスの製造の内容にかかわらず、この事業所には保安技術管理者を必ず選任しなければならない。,×
29-9-2 選任する保安企画推進員は、保安技術管理者、保安主任者又は保安係員のいずれかに選任され、それらの職務に所定の期間従事したものに限られている。,×
29-9-3 選任する保安係員は、所定の製造保安責任者免状の交付を受け、かつ、所定の高圧ガスの製造に関する経験を有するものでなければならない。,○
保安企画推進員には、製造保安責任者免状の交付を受けていないが、所定の高圧ガスの製造にかかる保安に関する知識経験を有するものを選任することができる。,○
保安主任者には、特別試験科目に係る丙種化学責任者免状の交付を受け、かつ、高圧ガスの製造に関する所定の経験を有するものを選任することができる。,×
保安係員には、所定の製造保安責任者免状の交付を受け、かつ、高圧ガスの製造に関する6か月の経験を有するものを選任することができる。,×
貯蔵能力2000トン、最大直径20mの液化ブタジエンの貯槽に隣接して、貯蔵能力2000トン、最大直径20mの液化ブタジエンの貯槽を地盤面上に増設するとき、これら貯槽に防火上及び消火上有効な措置を講じた場合であっても、これら貯槽相互間に有すべき最小の距離は10mである。,○
この事業所が必要とする保安用不活性ガス等の数量は、事業所内で最も大きな貯蔵能力を持つ貯槽が危険な状態になった場合に、その貯槽内のガスのパージ、シールその他の災害の発生防止のための応急の措置を講じるために必要な不活性ガス又はスチームの数量である。,×
エチレンの導管には、市街地を横断するものに限り、所定の緊急遮断装置またはこれと同等以上の効果のある装置を設けなければならない。,×
危害予防規定を守っていない場合、公共の安全の維持又は災害の発生の防止のため必要があると都道府県知事などが認めるときは、都道府県知事等から危害予防規定を守るよう勧告されることがある。,○
保安統括者、保安企画推進員、保安技術管理者、保安主任者、および保安係員について、これらの代理者を選任又は解任した場合、遅滞なく、その旨を都道府県知事等に届け出なければならない旨の定めがあるのは、保安統括者の代理者を選任又は解任した場合のみである。,○
認定保安検査実施者の認定にかかる特定施設については、その施設のガス設備が所定の技術上の基準に適合しているかどうかについて、1年に1回以上、定期に自主検査を行うべき定めはない。,×
選任した保安企画推進員の定められた職務の一つに、災害が発生した場合におけるその原因の調査及び対策の検討を行うこと。がある。,○
認定保安検査実施者の認定に係る特定施設について自ら保安検査を行い、所定の技術上の基準に適合していることを確認し、その検査の記録を都道府県知事等に届け出た場合は、都道府県知事等が行う保安検査を受けなくてよい。,○
従業者に対する保安教育計画を定め、これを忠実に実行しなければならない。また、その実行の結果を都道府県知事等に届け出なければならない。,×
この事業所の保安企画推進員には、製造保安責任者免状の交付を受けていない者であっても、高圧ガスの製造に係る保安に関する企画又は指導の業務に所定の期間従事した者を選任することができる。,○
この事業所には、製造施設の区分ごとに保安主任者を選任しなければならないが、この場合、その者が交付を受けている製造保安責任者免状の種類は、甲種化学責任者免状又は甲種機械責任者免状に限られている。,×
所定の製造保安責任者免状の交付を受けている者又は高圧ガスの製造に関する所定の経験を有している者のいずれか一方の要件を満たす者を、保安係員に選任することができる。,×
25-10-1 この事業所の保安技術管理者には、乙種化学責任者免状又は乙種機械責任者免状の交付を受け、かつ、所定の高圧ガスの製造に関する経験を有するものを選任することができる。,×
25-10-2 この事業所の保安企画推進員には、製造保安責任者免状の交付を受けていないものであっても、高圧ガスの製造にかかる保安に関する企画又は指導の業務に所定の期間従事したものを選任することができる。,○
25-10-3 保安統括者、保安企画推進員、保安技術管理者、保安主任者及び保安係員について、これらの代理者を選任又は解任した場合、遅滞なくその旨を都道府県知事に届け出なければならない旨の定めがあるのは、保安統括者の代理者を選任又は解任した場合のみである。,○
26-10-1 保安統括者に所定の製造保安責任者免状の交付を受け、かつ、高圧ガスの製造に関する所定の経験を有するものを選任した場合であっても保安企画推進員を選任しなければならない。,○
26-10-2 選任した保安係員の定められた職務の一つに、製造施設の設計・施工に関し、保安上の観点から助言、指導、及び勧告を行うことがある。,×
26-10-3 所定の期間内に、高圧ガス保安協会又は指定講習機関が行う高圧ガスによる災害の防止に関する講習を受けさせなければならないのは、保安企画推進員、保安主任者及び保安係員に限られている。,○
27-10-1 保安主任者に平成26年7月1日に高圧ガス保安協会が行う高圧ガスの災害の防止に関する講習を受けさせた場合、その保安主任者には平成32年3月31日までに次回の講習を受けさせなければならない。,○
27-10-2 保安企画推進員が、旅行、疾病、その他の事故によって、その職務を行うことができない場合、保安企画推進員の代理者にその職務を代行させなければならない。,○
27-10-3 選任した保安主任者の定められた職務は、保安企画推進員を補佐して、保安係員を指揮することである。,
28-10-1 所定の事項を記載した危害予防規定を定め、これを都道府県知事に届け出なければならない。また、この危害予防規定を守るべきものは、この事業者及びその従業者である。,○
28-10-2 保安企画推進員には、保安主任者に選任され、その職務に所定の期間以上従事したものを選任することができる。,○
28-10-3 選任していた保安統括者を解任し、新たな保安統括者を選任した場合は、遅滞なく、その選任の旨を都道府県知事に届け出なければならないが、解任についても遅滞なくその旨を届け出なければならない。,○
29-10-1 選任した保安企画推進員、保安主任者、及び保安係員には所定の期間内に高圧ガス保安協会又は指定講習機関が行う高圧ガスによる災害の防止に関する講習を受けさせなければならないが、保安技術管理者にはこの講習を受けさせる必要はない。,○
29-10-2 保安主任者の選任及び解任については、その旨を都道府県知事に届け出なければならないが、保安主任者の代理者の選任及び解任については、その届出をしなくてよい。,○
29-10-3 選任した保安企画推進員の定められた職務の一つに、「高圧ガスの製造にかかる保安に関する基本的方針の立案を行うこと。」がある。,○
保安技術管理者の定められた職務は、保安統括者を補佐して、高圧ガスの製造にかかる保安に関する技術的な事項を管理することである。,○
保安統括者を直接補佐する職務を行う者のうちから保安統括者の代理者をあらかじめ選任し、遅滞なく、その旨を都道府県知事などに届け出なければならない。,○
選任した保安係員に、高圧ガス保安協会又は指定講習機関が行う高圧ガスによる災害の防止に関する講習を所定の期間内に受けさせることができない場合、保安係員の代理者にその講習を受けさせることと定められている。,×
認定完成検査実施者及び認定保安検査実施者であるので、甲種化学責任者免状又は甲種機械責任者免状の交付を受けているが、高圧ガスの製造に関する所定の経験を有しないものを保安統括者として選任した場合は、保安技術管理者を選任しなくてよい。,×
製造保安責任者免状の交付を受けていないが、高圧ガスの製造にかかる保安に関する企画又は指導の業務に通算して3年以上従事したものを保安企画推進員に選任することができる。,○
保安主任者の定められた職務は、保安統括者を保安技術者とともに補佐し、事業所全体の高圧ガスに関する保安を管理・監督することである。,×
特殊反応設備に設けた内部反応監視装置は、その計装回路に所定のインターロック機構を設けた場合であっても、その設備内の温度、圧力及び流量などが正常な反応条件を逸脱し、又は逸脱する恐れがあるときに自動的に警報を発するものでなければならない。,○
保安区画内の高圧ガス設備の外面から隣接する保安区画内の高圧ガス設備に対して有すべき距離は、保安区画内の高圧ガス設備の燃焼熱量の数値に応じて算定される。,×
これらの導管は、地盤面下に埋設されている場合に限り、その見やすい箇所に高圧ガスの種類、導管に異常を認めた時の連絡先その他必要な事項を明瞭に記載した標識を設けなければならない。,×
液化エチレンの貯槽の外面から、この事業所の存する敷地外にある保安のための宿直施設に対して、所定の距離以上の距離を有しなければならない。,○
保安区画内の高圧ガス設備（特に定めるものを除く。）の外面から、隣接する保安区画内の高圧ガス設備（特に定めるものを除く。）に対して有すべき距離は、保安区画内の高圧ガス設備の燃焼熱量の数値には関係なく、一律に30 メートル以上と定められている。,○
可燃性ガスの製造施設には、その規模に応じ、適切な防消火設備を適切な箇所に設けなければならないが、この場合、この設備の作動のために必要な数量の水を常時保有することについての定めはない。,×
特殊反応設備には、緊急時に安全に、かつ、速やかに遮断するための措置を講じなければならないが、その措置は計器室において操作することができる措置又は自動的に遮断する措置でなければならない。,○
エチレンの導管には、市街地を横断するものに限り、所定の緊急遮断装置又はこれと同等以上の効果のある装置を設けなければならない。,×
エチレンの導管系に、圧力又は流量の異常な変動等の異常な事態が発生したときにその旨を警報する装置が設けられている場合であっても、その輸送を停止しようとするときにはその旨を関連事業所に連絡しなければならない。,○
25-11-1 保安主任者には、特別試験科目にかかる丙種化学責任者免状の交付を受け、かつ、所定の高圧ガスの製造に関する経験を有するものを選任することができる。,×
25-11-2 保安係員には、所定の製造保安責任者免状の交付を受け、かつ、高圧ガスの製造に関する6か月の経験を有するものを選任することができる。,×
25-11-3 選任した保安企画推進員の定められた職務の一つに、災害が発生した場合におけるその原因の調査及び対策の検討を行うことがある。,○
26-11-1 保安技術管理者、保安企画推進員、保安主任者、保安係員について、これらの代理者を選任又は解任した場合、その旨を都道府県知事に届け出なくてよい。,○
26-11-2 保安主任者は所定の製造施設区分ごとに選任しなければならないが、異なる製造施設区分に属する2以上の製造施設とが設備の配置などから見て一体として管理されるものとして設計されたものであり、かつ、同一の計器室において制御され適切な保安管理が行えるときは、これらの製造施設は同一の製造施設区分に属するものとみなして保安主任者の選任ができる。,○
26-11-3 選任した保安統括者の代理者の定められた職務は、保安統括者を補佐して、高圧ガスの製造にかかる保安に関する技術的な事項を管理することである。,×
27-11-1 認定保安検査実施者の認定にかかる特定施設について自ら保安検査を行い、所定の技術上の基準に適合していることを確認し、その検査の記録を都道府県知事に届け出た場合は、都道府県知事が行う保安検査を受けなくてよい。,○
27-11-2 ガス設備がその位置、構造および設備の技術上の基準に適合しているかどうかについて、定期に保安のための自主検査を行い、その検査記録を作成し、これを保存しなければならない。,○
27-11-3 自ら保安検査を行うことができる特定施設を追加しようとする場合、継続して1年間高圧ガスを製造している施設について申請することができる。,×
28-11-1 定期自主検査を行うときは、選任した保安係員に、その定期自主検査の実施について監督を行わせなければならない。,○
28-11-2 特定変更工事のうち、新たな製造施設を追加する工事についても自らその完成検査を行うことができる。,×
28-11-3 認定を受けた特定施設について自ら保安検査を実施し、その検査の記録を都道府県知事に提出した後に、都道府県知事が行う記録による保安検査を受けなければならない。,×
29-11-1 認定にかかる特定施設について行う保安検査は、製造の方法が所定の技術上の基準に適合しているかどうかについて行わなければならない。,×
29-11-2 ガス設備が製造施設にかかる所定の技術上の基準に適合しているかどうかについて、定期に、保安のための自主検査を行わなければならない。,○
29-11-3 特定変更工事の完成検査を自ら行い、所定の基準に適合していることを確認したときに都道府県知事に届け出る所定の記録に記載すべき事項の一つに、「特定変更工事の設備ごとの検査方法、記録及びその結果」がある。,○
認定にかかる特定施設について保安検査を自ら行い、その検査の記録を都道府県知事等に届け出た場合は、都道府県知事等が行う保安検査を受けなくてよい。,○
ガス設備について定期自主検査を行ったときは、その検査結果を都道府県知事等に遅滞なく届け出なければならない。,×
認定完成検査実施者であるが、新たな製造施設を追加する工事については自らその完成検査を行うことができない。,○
保安主任者の代理者を選任する場合は、所定の製造保安責任者免状の交付を受け、かつ、高圧ガスの製造に関する所定の経験を有していれば、保安主任者を直接補佐する職務を行うもの以外のものを選任することができる。,×
認定保安検査実施者であるので、認定にかかる特定施設が所定の技術上の基準に適合しているかどうかについて自ら保安検査を行うことができる。,○
この事業者が行う定期自主検査の検査記録の記載事項の一つに、検査したガス設備の設備ごとの検査の方法および結果がある。,○
特定製造事業所のすべての製造設備が危険な状態になった場合において製造設備内のガスのパージ、シールその他の災害の発生を防止するための応急の措置を講じるために保有し、又は供給を確実に受けるための措置を講じなければならないものと定められているのは、必要な数量及び圧力の窒素のみである。,×
可燃性ガスの製造施設にかかる計器室を、その製造設備において発生する恐れのある危険の程度及び製造設備からの距離に応じ安全な構造とした場合であっても、その計器室の扉および窓は、耐火性のものとしなければならない。,○
この特定製造事業所に隣接するコンビナート製造事業所との境界線から所定の距離以内にベントスタックを設置したときは、その事業所に所定の事項を記載した書面を送付する必要があるが、その所定の距離以内に屋外消火栓を設置したときには、その必要はない。,×
特殊反応設備には、内部反応監視装置を設けた場合であっても、緊急時に安全に、かつ、速やかに遮断するための措置を講じなければならないが、その措置は計器室において操作することができるもの又は自動的に遮断するものでなければならない。,○
エチレンの製造設備に設ける計器室は、その扉及び窓を耐火性のものとすれば、その設置位置については制限を受けない。,×
この事業所に隣接するコンビナート製造事業所との境界線から所定の距離以内にベントスタックを設置したときは、所定の事項を記載した書面をその事業所に送付する必要があるが、その所定の距離以内に屋外消火栓を設置したときには、その必要はない。,×
この事業所が必要とする保安用不活性ガス等の数量は、事業所内で最も大きな貯蔵能力を持つ貯槽が危険な状態になった場合に、その貯槽内のガスのパージ、シールその他の災害の発生防止のための応急の措置を講じるために必要な不活性ガス又はスチームの数量である。,×
保安用不活性ガスの製造施設を新たに設置する場合、特に定められたものを除き、その貯蔵設備及び処理設備の外面から保安物件に対し、50メートル以上の距離を有しなければならない。,○
保安用不活性ガスとして用いるための窒素の製造設備を増設する場合であっても、その高圧ガス設備を設置する場所は、所定の保安区画内としなければならない。,○
25-12-1 貯蔵能力3000トンの液化プロピレンの貯槽を新たに1基設置する場合、その貯槽の外面から保安物件に対して50m又は所定の算式により得られた距離のいずれか大なるものに等しい距離以上の距離を有しなければならない。,×
25-12-2 保安用不活性ガスとして用いるための窒素の製造設備を増設する場合であっても、配管を除くその高圧ガス設備の外面から隣接する保安区画内にある高圧ガス設備に対し30m以上の距離を有しなければならない。,○
25-12-3 貯蔵能力が15トンの液化酸化エチレンの貯槽を地盤面下に新たに2基埋設する場合であっても、これらの貯槽の外面からの相互間の距離は、1m又はこれらの貯槽の最大直径の和の1/4のいずれか大なるものに等しい距離以上の距離を有しなければならない。,○
26-12-1 特殊反応設備には、緊急時に安全に、かつ、速やかに遮断するための措置を講じなければならないが、この措置は計器室において操作することができるもの又は自動的に遮断するものに限られている。,○
26-12-2 これらの導管の経路には、高圧ガスの種類及び圧力並びに導管の周囲の状況に応じ、必要な箇所に、地盤の震動を的確に検知し、かつ、警報するための感震装置を設けなければならない。,○
26-12-3 この事業所に隣接するコンビナート製造事業所との境界線から所定の距離以内にベントスタックを設置したときは、その事業所に所定の事項を記載した書面を送付する必要があるが、その所定の距離以内に屋外消火栓を設置したときにはその必要はない。,×
27-12-1 製造施設は、その貯蔵設備及び処理設備の外面から、この事業所敷地外の保安のための宿直施設に対し、所定の距離を有しなければならない。,○
27-12-2 特殊反応設備は、緊急時に安全に、かつ、速やかに遮断するため、計器室において操作できる措置又は自動的に遮断する措置を講じなければならない。,○
27-12-3 液化エチレンの貯蔵能力1000トンの球形貯槽を増設するとき、この貯槽に防火上及び消火上有効な措置を講じた場合、他の隣接する可燃性ガスの貯槽に対して有すべき距離は、一律に1m以上と定められている。,○
28-12-1 保安用不活性ガスの高圧ガス製造施設を新たに設置する場合、その処理設備又は貯蔵設備の外面から保安物件に対して有すべき距離は、定められていない。,×
28-12-2 特に認められた場合を除き高圧ガス設備が設置されている敷地は所定の面積以下の保安区画に区分しなければならないが、この保安区画内の高圧ガス設備の燃焼熱量の数値は所定の値以下でなければならないと定められている。,○
28-12-3 地盤面上に設置されている液化エチレンの貯槽、液化プロピレンの貯槽及び液化ブタジエンの貯槽の外面の相互間に有すべき距離は、これらの貯槽に貯蔵できる可燃性ガスの燃焼熱量から算出される。　直径で決まる,×
29-12-1 地盤面上に設置されている液化エチレンの貯槽と液化プロピレンの貯槽の相互間に有すべき距離は、どちらも可燃性ガスであるので、貯槽の最大直径に関係なく一律に定められている。,×
29-12-2 特殊反応設備に設けた内部反応監視装置は、その設備内の温度、圧力及び流量などが正常な反応条件を逸脱し、又は逸脱する恐れがあるときに自動的に警報を発するものでなければならない。,○
29-12-3 保安区画内の高圧ガス設備の外面から隣接する保安区画内の高圧ガス設備に対して有すべき距離は、保安区画内の高圧ガス設備の燃焼熱量の数値に応じて算定しなければならない。,×
貯蔵能力1000トンの液化プロピレンの貯槽を増設する場合、その外面から隣接する液化エチレンの貯槽に対して有すべき距離は、これらの貯槽に防火上及び消火上有効な措置を講じたときは、これを短縮することができる。,×
保安区画内の高圧ガス設備の外面から隣接する保安区画内の高圧ガス設備に対して有すべき距離は、その燃焼熱量により算定される。,×
保安用不活性ガスの製造施設を新たに設置する場合、特に定められたものを除き、その貯蔵設備及び処理設備の外面から保安物件に対し、50メートル以上の距離を有しなければならない。,○
新たな製造施設を追加する変更の工事について、自ら完成検査を行い、検査の記録を都道府県知事などに届け出れば、都道府県知事等又は高圧ガス保安協会若しくは指定完成検査機関が行う完成検査を受けることなく、その製造施設を使用することができる。,×
特定設備検査合格証の交付を受けた凝縮器への取り換え工事として都道府県知事等の許可を受けた工事であっても、その処理能力の変更が所定の範囲である場合は、都道府県知事など又は高圧ガス保安協会若しくは指定完成検査機関が行う完成検査を受けず、又は自ら完成検査を行うことなく、その製造施設を使用することができる。,○
製造施設のうち、高圧ガス設備以外のガス設備の変更の工事は、軽微な変更の工事に該当する。,○
認定を受けた製造施設の特定変更工事にかかる完成検査を自ら行い、その検査の記録を都道府県知事等に届け出た場合は、都道府県知事等が行う完成検査を受けることなく、その製造施設を使用することができる。,○
都道府県知事等の許可を受けた製造施設の位置、構造又は設備の変更の工事であっても、都道府県知事等、高圧ガス保安協会又は指定完成検査機関が行う完成検査を受けることなく、もしくは自ら完成検査を行うことなく、その製造施設を使用することができる変更の工事がある。,○
特定設備の取り換えの工事であって、その設備の処理能力の変更を伴うものは、その完成後遅滞なく、その旨を都道府県知事等に届け出なければならない軽微な変更の工事に該当する。,×
特定設備検査合格証の交付を受けた設備（耐震設計構造物でないもの）への取替え工事として都道府県知事等の許可を受けた工事であっても、その処理能力の変更がない場合は、完成検査を受けず、又は自ら完成検査を行うことなく、この製造施設を使用することができる。,○
特定変更工事であって、事業者が自ら完成検査を実施する場合は、都道府県知事等による完成検査を受けることなく、また、検査の記録を都道府県知事等に届け出ることなくこの製造施設を使用することができる。,×
高圧ガス設備以外のガス設備の変更の工事については、都道府県知事等の許可を受けることなく工事を行うことができるが、完成後に遅滞なくその旨を都道府県知事等に届け出なければならない。,○
新たな製造施設を追加する変更の工事について、自ら完成検査を行い、検査の記録を都道府県知事等に届け出た場合は、都道府県知事等、高圧ガス保安協会又は指定完成検査機関が行う完成検査を受けることなく、その製造施設を使用することができる。,×
製造施設の位置、構造又は設備の変更の工事について、都道府県知事等の許可を受けた場合であっても、都道府県知事等、高圧ガス保安協会又は指定完成検査機関が行う完成検査を受けることなく、若しくは自ら完成検査を行うことなく、その製造施設を使用することができる変更の工事がある。,○
製造施設の高圧ガス設備以外のガス設備の変更の工事は、軽微な変更の工事に該当する。,○
25-13-1 可燃性ガスの製造施設には、その規模に応じ、適切な防消火設備を適切な箇所に設けなければならないが、この場合、この設備の作動のために必要な数量の水を常時保有することについての定めはない。,×
25-13-2 可燃性ガス又は毒性ガス以外の製造設備を新たに設けた場合には、その製造設備にかかる計装回路には、製造をする高圧ガスの種類、温度、圧力並びに製造設備の態様に応じ、保安上重要な箇所に所定のインターロック機構を設けなければならない旨の定めはない。,○
25-13-3 エチレンの製造施設、プロピレンの製造施設、ブタジエンの製造施設にかかる計器室内は、特に定める場合を除き、外部からのガスの侵入を防ぐために必要な措置を講じなければならないと定められている。,○
26-13-1 製造施設の貯蔵設備及び処理設備の外面から、この事業所の敷地外の保安のための宿直施設に対し、所定の距離を有しなければならない。,○
26-13-2 保安区画内の高圧ガス設備の外面から、隣接する保安区画内の高圧ガス設備に対して有すべき距離は、保安区画内の高圧ガス設備の燃焼熱量の数値には関係なく、一律に30m以上と定められている。,○
26-13-3 貯蔵能力2000トンの液化プロピレンの貯槽を増設するとき、この貯槽に防火上及び消火上有効な措置を講じた場合は、この貯槽の外面から隣接する貯蔵能力2000トンの液化ブタジエンの貯槽に対して所定の距離を有する必要はない。,×
27-13-1 これらの製造設備にかかる計器室は、その製造設備において発生する恐れのある危険の程度に応じた安全な位置に設置した場合、その計器室の扉および窓を耐火性のものとしなくてよい。,×
27-13-2 これらの製造設備又は製造設備にかかる計装回路には、製造をする高圧ガスの種類、温度、及び圧力並びにその製造設備の態様に応じて、保安上重要な箇所に所定のインターロック機構を設けなければならない。,○
27-13-3 これらエチレン、プロピレン及びブタジエンの製造施設には、その規模に応じ適切な防消火設備を適切な箇所に設置し、事業所には、その作動のために必要な数量の水を常時保有しなければならない。,○
28-13-1 特殊反応設備には、緊急時に安全に、かつ、速やかに遮断するための措置を講じなければならないが、この措置は自動的に遮断するものに限られており、計器室において操作することができるものは認められていない。,×
28-13-2 これらの導管にかかる導管系には、その導管系の運転状態を監視する装置の他、圧力又は流量の異常な変動等の異常な事態が発生した場合にその旨を警報する装置を設けなければならない。,○
28-13-3 この事業所に隣接するコンビナート製造事業所の境界線から所定の距離以内において、火気を扱おうとするときは、その旨を隣接するコンビナート製造事業所に連絡しなければならない。,○
29-13-1 エチレンの製造設備にかかる計装回路の保安上重要な箇所には、その製造設備の態様に応じて、所定のインターロック機構を設けなければならない。,○
29-13-2 エチレンの製造設備にかかる計器室の構造は、その製造設備において発生する恐れのある危険の程度およびその製造設備からの距離に応じて安全なものであれば、扉及び窓は耐火性のものとしなくてよい。,×
29-13-3 この事業所からほかのコンビナート製造事業所との間に新たに導管を地盤面下に埋設するときは、高圧ガスの種類に応じ、その外面から建築物、ずい道などの定められた工作物に対し、所定の水平距離を有しなければならない。,○
特殊反応設備には、緊急時に安全に、かつ、速やかに遮断するための措置を講じなければならないが、この措置は計器室において操作することができるもの又は自動的に遮断するものに限られている。,○
エチレンの製造施設、プロピレンの製造施設及びブタジエンの製造施設にかかる計器室は、その製造設備において、発生する恐れのある危険の程度及び製造設備からの距離に応じて安全なものであれば、その扉および窓は、耐火性のものとしなくてよい。,×
地盤面下に埋設した導管には、その見やすい箇所に高圧ガスの種類、導管に異常を認めた時の連絡先、その他必要な事項を明瞭に記載した標識を設けなければならない。,○
危害予防規定を定め、都道府県知事等の認可を受けなければならない。また、これを変更したときも同様である。,×
従業者に対する保安教育計画を定め、これを忠実に実行しなければならないが、その保安教育計画を変更した場合であっても、都道府県知事等に届け出る必要はない。,○
自ら保安検査を行うことができる特定施設を追加しようとする場合、継続して1年間高圧ガスを製造している施設について経済産業大臣に申請することができる。,×
認定保安検査実施者として保安検査のための組織又は保安検査の方法に変更があったときは、その変更後の認定の更新時にその旨を経済産業大臣に届け出なければならない。,×
認定完成検査実施者であるが、新たな製造施設を追加する工事については自らその完成検査を行うことができない。,○
認定保安検査実施者の認定を申請する特定施設は、その施設についての認定完成検査実施者の認定を受けた後、所定の期間を経過していなければならないと定められている。,×
この事業所において、都道府県知事等の許可を受けて新たな高圧ガスの製造施設を追加する特定変更工事を行う場合、認定完成検査実施者であるこの事業者が自らその完成検査を行うことができる。,×
この事業所に新たに高圧ガス製造施設を追加し、これを自ら保安検査を行うことができる特定施設とするためには、その施設が高圧ガスの製造を開始した後に継続して1年以上経過し、2年経過する前に経済産業大臣に申請しなければならないと定められている。,×
認定保安検査実施者に係る保安検査のための組織又は保安検査の方法に変更があったときは、遅滞なく、その旨を経済産業大臣に届け出なければならない。,○
所定の事項を記載した危害予防規程を定め、これを都道府県知事等に届け出なければならない。また、この危害予防規程を守るべき者は、この事業者及びその従業者である。,○
認定保安検査実施者として保安検査のための組織又は保安検査の方法に変更があったときは、その変更後の認定の更新時にその旨を経済産業大臣に届け出なければならない。,×
認定を受けた特定施設の保安検査を行ったときに都道府県知事等に届け出る検査の記録は、検査をした特定施設とその施設の設備ごとの検査の方法、記録及びその結果について記載したものである。,○
14-1-1 窒素のガス設備に使用する材料は、高圧ガス設備を除く部分についても、ガスの種類、性状、温度、圧力などに応じ、その設備の材料に及ぼす化学的影響および物理的影響に対し、安全な化学的成分および機械的性質を有しなければならないと定められている。,×
14-1-2 液化酸素の貯槽は、所定の耐震設計の基準により地震の影響に対して安全な構造としなければならないが、液化酸素のポンプについてはその定めはない。,○
14-1-3 この事業所の製造施設のうち、その規模に応じ、適切な防消火設備を適切な箇所に設けなければならないと定められているのは、アセチレンの製造施設および酸素の製造施設に限られている。,×
26-14-1 アンモニアの高圧ガス設備である配管の変更工事の完成検査において、水などの安全な液体を使用することが困難であると認められ、空気、窒素等の気体を使用して行う耐圧試験に合格した場合は、気密試験の実施を省略することができる。,×
26-14-2 液化アンモニア及び液化酸素の貯槽は、所定の耐震設計の基準により、地震の影響に対して安全な構造としなければならないが、液化窒素の貯槽についてはその定めはない。,×
26-14-3 酸素の高圧ガス設備に設けた安全弁にかかる放出管の開口部の位置は、放出する酸素の性質に応じた適切な位置としなければならない。,○
27-14-1 この事業所の製造設備のうち、その外面から火気を取り扱う施設に対し8m以上の距離を有し、または定められた措置を講じなければならないのは、アセチレンの製造設備のみである。,×
27-14-2 アセチレンの処理設備である圧縮機は、その外面から液化酸素のポンプに対し、10m以上の距離を有しなければならない。,○
27-14-3 高圧ガス設備の変更の工事後の完成検査において気密試験を行うとき、その試験圧力は常用の圧力の1.5倍以上と定められている。,×
28-14-1 アセチレンの製造設備の高圧ガス設備は、その外面から、酸素の製造設備の液化酸素の貯槽に対して所定の距離を有しなければならないが、窒素の製造設備の液化窒素の貯槽に対して距離を有するべき定めはない。,○
28-14-2 アセチレンの製造施設には、漏洩するガスが滞留するおそれのある場所に、そのガスの漏洩を検知し、かつ、警報するための設備を設けなければならないが、酸素の製造施設にはその定めはない。,○
28-14-3 アセチレンの製造施設には、その規模に応じ、適切な防消火設備を設けなければならないが、酸素の製造施設にはその定めはない。,×
29-14-1 アンモニア、アセチレンおよび酸素の高圧ガス設備の配管の取り換え工事後の完成検査における気密試験は、常用の圧力以上の圧力で行わなければならないが、窒素の高圧ガス設備の配管についてはその定めはない。,×
29-14-2 高圧ガス設備には、その設備内の圧力が常用の圧力を超えた場合に直ちにその圧力を常用の圧力以下に戻すことができる安全装置を設けなければならないと定められている。,×
29-14-3 窒素のガス設備のうち、高圧ガス設備に使用する材料は、ガスの種類、性状、温度、圧力に応じ、その設備の材料に及ぼす化学的影響および物理的影響に対し、安全な化学的成分及び機械的性質を有するものであることと定められている。,○
アンモニアの高圧ガス設備である配管の変更の工事の完成検査において、安全な液体を使用して所定の耐圧試験を実施し合格したので、気密試験の実施を省略した。,×
アンモニア及びアセチレンの製造施設には、漏洩するガスが滞留する恐れのある場所に、そのガスの漏洩を検知し、かつ、警報するための設備を設けたが、酸素及び窒素の製造施設にはその設備を設けなかった。,○
窒素の高圧ガス設備には、その設備内の圧力が許容圧力を超えた場合に直ちにその圧力を許容圧力以下に戻すことができる安全装置を設置したので圧力計は設けなかった。,×
アセチレンの製造施設及びアンモニアの製造施設には、その規模に応じ、適切な防消火設備を適切な箇所に設けなければならないが、酸素の製造設備にはその定めはない。,×
液化窒素の貯槽は、その基礎を不動沈下等により、その貯槽に有害なひずみを生じないものとし、その支柱は同一の基礎に緊結しなければならない。,○
高圧ガス設備のうち、所定の耐震に関する性能を有しなければならない旨の定めがあるのは、液化アンモニアの貯槽及びこれらの支持構造物に限られている。,×
アセチレンの製造設備のうちアセチレンが通る部分は、その外面からその製造設備外の火気を取り扱う施設に対し8メートル以上の距離を有しなければならないが、酸素の製造設備のうち酸素が通る部分については、その定めはない。,○
アセチレンの製造設備の高圧ガス設備のうち、アセチレンが通る部分は、その外面から酸素の製造設備の高圧ガス設備のうち、酸素が通る部分に対し所定の距離を有しなければならない。,○
窒素のガス設備のうち、高圧ガス設備に使用する材料は、ガスの種類、性状、温度、圧力等に応じ、その設備の材料に及ぼす化学的影響及び物理的影響に対し安全な化学的成分及び機械的性質を有するものでなければならない。,○
アンモニアの製造設備のアンモニアが通る部分の外面からその製造設備外の火気を取り扱う施設まで8メートル以上の距離を有している場合は、その設備から漏えいしたアンモニアがその火気を取り扱う施設に流動することを防止するための措置を講じる必要はない。,○
高圧ガス設備には、その設備内の圧力が一定の圧力を超えた場合に直ちにその圧力を一定の圧力以下に戻すことができる安全装置を設けなければならないが、その一定の圧力とはその高圧ガス設備の許容圧力である。,○
酸素は可燃性ガスに該当しないので、液化酸素の貯槽に設置した安全弁には放出管を設けなくてよい。,×
ガス設備内の圧力が許容圧力を超えた場合、直ちにその圧力を許容圧力以下に戻すことができる安全装置を設けなければならない定めがあるのは、高圧ガス設備のみである。,○
アンモニアの製造施設、アセチレンの製造施設及び酸素の製造施設には、その規模に応じ、適切な防消火設備を適切な箇所に設けなければならないが、窒素の製造施設については、その定めはない。,○
この事業所の製造設備（ガスが通る部分に限る。）のうち、特に定められた場合を除き、その外面から火気（その製造設備内のものを除く。）を取り扱う施設に対し8メートル以上の距離を有しなければならないと定められているものは、窒素の製造設備以外の製造設備である。,×
25-15-1 液化アンモニアのポンプの外面から液化酸素のポンプに対して有すべき距離は、これらの設備の間に所定の強度を有する障壁を設けることにより減じることができる。,×
25-15-2 アンモニアの製造設備のアンモニアの通る部分の外面からその製造設備外の火気を取り扱う施設まで8メートル以上の距離を有している場合は、その設備から漏洩したアンモニアがその火気を取り扱う施設に流動することを防止するための措置を講じる必要はない。,×
25-15-3 高圧ガス設備である配管の取り換え工事後の完成検査における気密試験は、常用の圧力以上の圧力で行わなければならない。,○
26-15-1 液化アンモニアの配管の外面からその製造設備外の火気を取扱う施設に対して8m以上の距離を確保できない場合は、アンモニアの流動防止措置又はアンモニアが漏洩したときに連動装置により直ちに使用中の火気を消すための措置を講じなければならない。,○
26-15-2 窒素及び酸素のガス設備のうち、高圧ガス設備を除く部分に使用する材料は、ガスの種類、性状、温度、圧力に応じ、その設備の材料に及ぼす化学的影響及び物理的影響に対し、安全な化学的成分及び機械的性質を有するものでなくてよい。,×
26-15-1 これらの高圧ガス設備には、所定の圧力計を設け、かつ、その設備内の圧力が許容圧力を超えた場合に直ちにその圧力を許容圧力以下に戻すことができる所定の安全装置を設けなければならない。,○
27-15-1 窒素のガス設備に使用する材料のうち、その材料が「ガスの種類、性状、温度、圧力などに応じ、その設備の材料に及ぼす化学的影響および物理的影響に対し、安全な化学的成分及び機械的性質を有するものであること。」の定めがあるのは、高圧ガス設備に使用するものに限られている。,○
27-15-2 高圧ガス設備に設けた安全装置のうち、安全弁又は破裂板に放出管を設けなければならない旨の定めがあるのは、アンモニア及びアセチレンの高圧ガス設備に設けられたものに限られている。,×
27-15-3 高圧ガス設備のうち、地震の影響に対して安全な構造としなければならない旨の定めがあるのは、貯槽及びこれらの支持構造物に限られている。,×
28-15-1 アセチレンの製造設備に使用する材料のうち、その材料が、ガスの種類、性状、温度、圧力などに応じ、その設備の材料に及ぼす化学的影響及び物理的影響に対し、安全な化学的成分及び機械的性質を有するものであることと定められているのは、高圧ガス設備に使用する材料に限られている。,×
28-15-2液化窒素の貯槽は、貯槽本体だけでなく、その支持構造物および基礎も、所定の耐震設計の基準により地震の影響に対して安全な構造としなければならない。,○
28-15-3 液化アンモニアの貯槽には、その貯槽内の圧力が許容圧力の1.5倍の圧力を超えた場合に直ちにその圧力を許容圧力以下に戻すことができる安全装置を設けなければならない。,×
29-15-1 アンモニアの製造設備のアンモニアの通る部分の外面から、その製造設備以外の火気を取り扱う施設に対し、8m以上の距離を確保できないので、アンモニアが漏洩したときに連動装置により直ちに使用中の火気を消すための措置を講じた。,○
29-15-2 これらの製造施設のうち、アンモニア、アセチレン及び酸素の製造施設には、その規模に応じた適切な防消火設備を適切な箇所に設けたが、窒素の製造施設には設けなかった。,○
29-15-3 液化アンモニアの貯槽の支柱及び液化酸素の貯槽の支柱は、それぞれ同一の基礎に緊結したが、液化窒素の貯槽の支柱は、同一の基礎に緊結しなかった。,×
アセチレンの製造設備の高圧ガス設備は、その外面から酸素の製造設備の液化酸素の貯槽に対して所定の距離を有しなければならないが、液化酸素のポンプに対しては所定の距離を有するべき定めはない。,×
酸素の製造設備において、高圧ガス設備に使用する材料は、ガスの種類、性状、温度、圧力等に応じ、その設備の材料に及ぼす化学的影響及び物理的影響に対し、安全な化学的成分及び機械的性質を有するものでなければならないが、高圧ガス設備以外のガス設備の材料についてもその定めがある。,○
液化窒素の貯槽は、液化アンモニアの貯槽及び液化酸素の貯槽に対して所定の距離を有し、かつ、その基礎を不動沈下等によりその貯槽に有害なひずみが生じないようなものとした場合は、液化窒素の貯槽の支柱は同一の基礎に緊結しなくてよいと定められている。,×
アンモニアの製造施設には、漏洩するガスが滞留する恐れのある場所に、そのガスの漏洩を検知し、かつ、警報するための設備を設けなければならないが、窒素の製造施設には、その定めはない。,○
窒素の高圧ガス設備に使用する材料は、ガスの種類、性状、温度、圧力等に応じ、その設備の材料に及ぼす化学的影響および物理的影響に対し、安全な化学的成分、機械的性質を有するものとしなければならない。,○
アンモニアの製造設備及びアセチレンの製造設備のそれぞれの高圧ガス設備は、その外面から酸素の高圧ガス設備に対し、所定の距離を有しなければならない。,○
液化窒素の貯槽は、その基礎を不動沈下等によりその貯槽に有害なひずみが生じないものとすれば、その貯槽の支柱を同一の基礎に緊結しなくてもよい。,×
所定の耐震に関する性能を有しなければならないものは、これらの貯槽及びその支持構造物に限られている。,×
酸素の高圧ガス設備には、所定の圧力計を設け、かつ、その設備内の圧力が許容圧力を超えた場合に直ちにその圧力を許容圧力以下に戻すことができる安全装置を設けなければならない。,○
アンモニアの製造設備の高圧ガス設備は、その外面から酸素の製造設備の高圧ガス設備（酸素が通る部分に限る。）に対して5メートル以上の距離を有しなければならないと定められている。,×
アセチレンの製造施設の圧縮アセチレンガスに係る圧縮機とそのガスを容器に充?する場所との間、その充?する場所とその充?容器に係る容器置場との間及び圧縮アセチレンガスに係る圧縮機とその充?容器に係る容器置場との間の全てに、所定の強度を有する構造の障壁を設けなければならない。,○
これらの製造施設のうち、その製造施設の規模に応じ、適切な防消火設備を適切な箇所に設けなければならないのは、アンモニアの製造施設及びアセチレンの製造施設に限られている。,×
耐震設計構造物は、所定の耐震に関する性能を有するものとしなければならないが、ポンプ、圧縮機及び容器置場はその耐震設計構造物に該当しない。,○
アセチレンの製造設備に使用する材料のうち、その材料が、ガスの種類、性状、温度、圧力等に応じ、その設備の材料に及ぼす化学的影響及び物理的影響に対し、安全な化学的成分及び機械的性質を有するものであることと定められているのは、高圧ガス設備に使用する材料に限られている。,×
液化アンモニアのポンプの外面から液化酸素のポンプに対して有すべき距離は、これらの設備の間に所定の強度を有する障壁を設けることにより減じることができる。,×
25-16-1 圧縮アセチレンの充填容器については、その温度を常に40度以下に保つべき定めがあるが、その残ガス容器についてはその定めはない。,×
25-16-2 これらの貯槽に液化ガスを充てんする場合において、その液化ガスの容量がその貯槽の常用の温度においてその内容積の90％を超えることを自動的に検知し、かつ、警報するための措置を講じなければならない旨の定めがあるのは、液化アンモニア及び液化酸素の貯槽に限られている。,×
を超えることを自動的に検知し、かつ、警報するための措置を講じるべき定めがあるのは、液化アンモニアの貯槽のみである。,○
25-16-3 液化アンモニアのポンプの逃し弁に付帯して設けた止め弁は、そのポンプの運転中を除き、閉止しておかなければならない。,×
26-16-1 液化酸素及び液化アンモニアの貯槽は、所定の基準によりその沈下状況を測定しなければならないが、不活性ガスである液化窒素の貯槽はその必要はない。,×
26-16-2 液化アンモニアの貯槽の周囲には、液化アンモニアが漏洩した場合に、その流出を防止するための措置を講じるべき定めがある。,○
26-16-3 液化アンモニアの貯槽からアンモニアを送り出すための配管に設けられたバルブのうち、貯槽の直近に設けたバルブは、使用時以外は閉鎖しておかなければならない。,○
27-16-1 高圧ガス設備の安全弁又は逃し弁に付帯して設けた止め弁は、修理又は清掃のため特に必要な場合以外は常に全開しておかなければならない。,○
27-16-2 貯槽に液化ガスを充てんするときに、その貯槽の常用の温度においてその内容積の90%を超えることを自動的に検知し、かつ、警報するための措置を講じなければならない旨の定めがあるのは、液化アンモニア及び液化酸素の貯槽に限られている。,×
27-16-3 アンモニア、アセチレン及び酸素の製造においては、その製造設備の使用開始時及び使用終了時のほか、1日に1回以上、頻繁に、その製造設備の属する製造施設の異常の有無を点検しなければならないが、窒素の製造においては、使用開始時または使用終了時のいずれか1回でよい。,×
28-16-1 液化窒素の貯槽の安全弁に付帯して設けた止め弁は、修理又は清掃のため特に必要な場合を除き、常に全開にしておいたが、液化窒素のポンプの逃し弁に付帯して設けた止め弁は、運転終了後は常に閉止しておいた。,×
28-16-2 毒性ガスである液化アンモニアの容器は、充填容器と残ガス容器にそれぞれ区分して容器置き場に置いたが、不活性ガスである圧縮窒素の容器は、充填容器と残ガス容器に区分しないで容器置き場に置いた。,×
28-16-3 液化アンモニアの容器置き場の中には、作業に必要な計量器を置いたが、携帯電燈以外の燈火は持ち込まなかった。,○
29-16-1 液化アンモニアの貯槽及び液化酸素の貯槽の周囲には、液状のガスが漏洩した場合にその流出を防止するための措置を講じるべき定めはない。,×
29-16-2 全ての貯槽は、所定の基準によりその沈下状況を測定しなければならない。,○
29-16-3 液化アンモニアの貯槽の周囲に可燃性物質を取り扱う設備がない場合であっても、その貯槽及び支柱には温度の上昇を防止するための措置を講じなければならない。,○
液化アンモニアの貯槽に設ける液面計は、丸形ガラス管えきめんけいいがいのものでなければならない。,○
液化アンモニアの貯槽は内容積が5000L以上であるので、この貯槽に取り付けた液化アンモニアを送り出すための配管又は受け入れるための配管のいずれか一方には、その液化アンモニアが漏洩したときに安全に、かつ、速やかに遮断するための措置を講じなければならない。,×
高圧ガスであるアセチレンの配管の取替え工事後の完成検査における耐圧試験は、水その他の安全な液体を使用するときは常用の圧力の1.25倍の圧力で行わなければならない。,×
液化アンモニア及び液化酸素の貯槽はそれぞれ貯蔵能力が1000トン未満であるため、いずれの貯槽も、その周囲に液状のガスが漏洩した場合にその流出を防止するための措置を講じるべき定めはない。,×
内容積が5000L以上の貯槽には、その貯槽に取り付けた液化ガスを送り出すための配管及び受け入れる配管に、その液化ガスが漏洩したときに安全に、かつ、速やかに遮断するための措置を講じなければならないものがあるが、液化窒素の貯槽にはその定めはない。,○
液化窒素の貯槽は、その周辺に可燃性物質を取り扱う設備がある場合、貯槽及び支柱に温度の上昇を防止するための措置を講じなければならないが、液化アンモニアの貯槽は周辺に可燃性物質を取り扱う設備がない場合でも、貯槽及び支柱に温度の上昇を防止するための措置を講じるべき定めがある。,○
アンモニアの製造設備及びアセチレンの製造設備を設置する室は、それらのガスが漏洩したとき滞留しないような構造とすべき定めがあるが、酸素の製造設備を設置する室についてはその定めはない。,○
アンモニアの製造施設には、保安の確保に必要な所定の設備が停電などによりその設備の機能が失われることのないよう措置を講じるべき定めがあるが、窒素の製造施設についてはその定めはない。,×
高圧ガス設備の配管の変更工事を行った後の完成検査における耐圧試験は、液化ガスが通る配管の場合は水その他の安全な液体を使用し、圧縮ガスが通る配管の場合は窒素又は空気を使用して行うことと定められている。,×
高圧ガス設備の配管の変更の工事の完成検査における耐圧試験は、水その他の安全な液体を使用して行う場合は、常用の圧力の1.25倍以上の圧力で行わなければならないと定められている。,×
液化アンモニアの貯槽に丸形ガラス管液面計を使用するときは、その貯槽とガラス液面計とを接続する配管には、そのガラス液面計の破損による液化アンモニアの漏えいを防止するための措置を講じなければならない。,×
液化アンモニアの貯槽の周囲に、液状のガスが漏えいした場合にその流出を防止するための措置として防液堤を設置する場合、その内側及びその外面から所定の距離以内には、その貯槽の付属設備その他の設備又は施設であって定められたもの以外のものを設けてはならない。,○
アセチレンの高圧ガス設備に係る配管の耐圧試験を行うときは、空気、窒素等の気体を使用して常用の圧力の1.25倍以上の圧力で行うことと定められており、水を使用することは禁じられている。,×
これらの貯槽は、所定の基準によりその沈下状況を測定しなければならない。,○
この液化アンモニア貯槽に設ける液面計は、丸形ガラス管液面計以外のものとし、ガラス液面計を使用する場合は、その破損を防止するための措置及びその貯槽とその液面計とを接続する配管には、その液面計の破損による液化アンモニアの漏えいを防止するための措置が講じられたものでなければならない。,○
25-17-1 高圧ガスを容器に充填するとき、あらかじめ、バルブ、容器及び充填用配管とバルブとの接触部に付着した石油類、油脂類又は汚れ等の付着物を除去しなければならないとの定めは、アセチレンを容器に充填するときには適用されない。,○
25-17-2 この液化アンモニアの容器置場には、携帯電燈以外の燈火を携えて立ち入ってはならないと定められている。,○
25-17-3 ガス設備の修理が終了したときは、そのガス設備が正常に作動することを確認した後でなければ高圧ガスの製造をしてはならないと定められている。,○
26-17-1 アセチレンの高圧ガス設備にかかる配管の耐圧試験を行うときは、空気、窒素などの気体を使用して常用の圧力の1.25倍以上の圧力で行うことと定められており、水を使用することは禁じられている。,×
26-17-2 液化アンモニアの貯槽には、液面計を設けなければならないが、この液面計には丸形ガラス管液面計を使用することは禁じられている。,○
26-17-3 アンモニアのガス設備にかかる配管とバルブの接合は、保安上必要な強度を有するフランジ接合としなければならず、溶接により接合することは禁じられている。,×
27-17-1 液化アンモニアの貯槽の周囲に、液状のガスが漏洩した場合にその流出を防止するための措置として防液堤を設置する場合、その内側及びその外面から所定の距離以内には、その貯槽の付属設備その他の設備又は施設であって定められたもの以外のものを設けてはならない。,○
27-17-2 製造設備のうち、沈下状況を測定するための措置を講じ、かつ、所定の基準により沈下状況を測定しなければならない旨の定めがあるのは、液化アンモニアの貯槽、液化酸素の貯槽及び液化窒素の貯槽に限られている。,○
27-17-3 液化アンモニアの貯槽に取り付けた液化アンモニアを送り出し、又は受け入れるために用いられる配管には、その貯槽の直近にバルブを設けるほか、1以上のバルブ（緊急遮断措置にかかるバルブを除く。）を設けることと定められている。,○
28-17-1 窒素のガス設備であっても、ガス設備を開放して修理するときは、そのガス設備のうち開放する部分に他の部分からガスが漏洩することを防止するための措置を講じなければならないと定められている。,○
28-17-2 窒素の製造においても、製造設備の使用開始時および使用終了時にその製造設備の属する製造施設の異常の有無を点検するほか、1日に1回以上製造をする高圧ガスの種類及び製造設備の態様に応じ頻繁に製造設備の作動状況について点検しなければならないと定められている。,○
28-17-3 液化アンモニアの貯槽に液化ガスを充てんするとき、保安係員が充填の開始時から終了時までその作業を監視する体制をとっている場合は、その貯槽の内容積の90%を超えることを自動的に検知し、かつ、警報するための措置を講じなくてもよいと定められている。,×
29-17-1 液化アンモニアの貯槽の液面計にガラス液面計を使用するときは、そのガラス液面計にはその破損を防止するための措置を講じ、貯槽とガラス液面計とを接続する配管には、その破損を防止するための措置を講じ、貯槽とガラス液面計とを接続する配管には、そのガラス液面計の破損による液化アンモニアの漏洩を防止するための措置を講じなければならない。,○
29-17-2 酸素及び窒素の製造設備を設置する室は、それらのガスが漏洩したとき、滞留しないような構造としなければならない旨の定めがある。,×
29-17-3 酸素の製造施設には、その製造施設の保安の確保に必要な所定の設備が、停電などによりその設備の機能が失われることの内容措置を講じるべき定めはない。,×
液化アンモニアの貯槽及びその支柱には、温度の上昇を防止するための措置を講じなくてよい。,×
容器置場の外面から第二保安物件に対して有しなければならない第二種置場距離は、その容器置場の面積に応じて算出される。,○
液化アンモニアの貯槽は、貯槽の基礎を所定の耐震設計の基準により、地震の影響に対して安全な構造とした場合、その沈下状況を測定するための措置を講じる必要はない。,×
高圧ガスの製造をしていないときであっても、高圧ガスの製造施設の保安の確保に必要な所定の設備に、停電などによりその機能を失うことのないよう措置を講じた。,○
高圧ガス設備の配管の工事を行った後の完成検査における耐圧試験において、水を使用することが困難であると認められたため、気体の窒素を使用して常用の圧力で耐圧試験を行った。,×
液化アンモニアの貯槽に取り付けられた液化アンモニアを受け入れるために用いる配管には、貯槽の直近に設けたバルブのほかに1以上のバルブを設けたが、このうち貯槽の直近に設けたバルブは使用時以外は閉鎖しておいた。,○
液化酸素の貯槽は、所定の耐震に関する性能を有する構造とし、かつ、その基礎は不動沈下等により有害なひずみが生じないようなものとしたので、貯槽の沈下状況にかかる所定の測定は行わないこととした。,×
液化アンモニアの貯槽の液化ガスを送り出すための配管には、貯槽の直近にバルブを設けたほか一つ以上のバルブを設け、更に、液化ガスが漏洩したときに安全に、かつ、速やかに遮断する措置を講じたので、貯槽の直近に設けたバルブは、使用時以外でも閉鎖しなかった。,×
液化アンモニアの貯槽に取り付けた液化ガスを受け入れるための配管には、液化ガスが漏洩したときに安全に、かつ、速やかに遮断するための措置を講じた。,○
アセチレンの高圧ガス設備に係る電気設備は、その設置場所及びそのガスの種類に応じた防爆性能を有する構造のものとしなければならない。,○
液化アンモニアの貯槽には、温度の上昇を防止するための措置を講じなければならないが、その支柱にはその措置を講じる必要はない。,×
液化窒素の貯槽の基礎については、所定の耐震に関する性能を有するものとした場合、その貯槽の沈下状況を測定する必要はない。,×
内容積が5000リットル以上の貯槽には、その貯槽に取り付けた液化ガスを送り出すための配管及び受け入れるための配管に、その液化ガスが漏えいしたときに安全に、かつ、速やかに遮断するための措置を講じなければならないものがあるが、液化窒素の貯槽にはその定めはない。,○
この事業所が夜間には稼働しない場合であっても、製造施設にはその保安の確保に必要な所定の設備が、停電等によりその機能が失われることのないよう措置を講じるべき定めがある。,○
液化酸素の貯槽及び液化窒素の貯槽並びにそれらの支柱には、可燃性ガスの貯槽又は可燃性物質を取り扱う設備が周辺にある場合、温度の上昇を防止するための措置を講じなければならない。,○
25-18-1 アンモニアのガス設備の配管の変更の工事を行う場合、その接合は溶接により行わなければならないが、溶接によることが適当でない場合は、保安上必要な強度を有するフランジ接合又はねじ接合継ぎ手による接合とすることができる。,○
25-18-2 製造設備に設けたバルブまたはコックには、作業員がそのバルブまたはコックを適切に操作する措置を講じなければならないが、そのバルブまたはコックを開閉する操作ボタンなどには、その措置を講じる必要はない。,×
25-18-3 液化酸素及び液化窒素の貯槽には、液面計を設置する必要はない。,×
26-18-1 この容器置き場の外面から第一種保安物件及び第二種保安物件に対し有すべき距離は、アンモニア、アセチレン、酸素及び窒素の処理設備の処理能力の合計から算出される。,×
26-18-2 アンモニアの製造設備には、そのガスが漏洩したときに安全に、かつ、速やかに除害するための措置を講じなければならないが、アセチレンの製造設備には、その定めはない。,○
26-18-3 この事業所が夜間には稼働しない場合であっても、製造施設の保安の確保に必要な所定の設備が、停電などによりその機能が失われることのないよう措置を講じるべき定めがある。,○
27-18-1 高圧ガス設備である配管の変更工事後の完成検査において、耐圧試験を空気、窒素などの気体を使用して行うことができるのは、水その他の安全な液体を使用して行うことが困難であると認められるときに限られている。,○
27-18-2 液化アンモニアの貯槽は内容積が5000L以上であるので、この貯槽に取り付けた液化アンモニアを送り出し、又は受け入れるために用いられる配管のいずれか一方に、その液化アンモニアが漏洩したときに安全に、かつ、速やかに遮断するための措置を講じなければならない。,×
27-18-3 液化アンモニアの配管の接合は、溶接によることが適当でない場合は、保安上必要な強度を有するフランジ接合を持って代えることができるが、ねじ接合継ぎ手による接合はいかなる場合であっても認められていない。,×
28-18-1 液化アンモニアの貯槽の周囲には、液状のアンモニアが漏洩した場合に、その流出を防止するための措置を講じなければならないが、液化窒素の貯槽の周囲には、その措置を講じるべき定めはない。,○
28-18-2 液化アンモニアの製造設備を設置する室は、アンモニアガスが漏洩したときに滞留しない構造としなければならない。,○
28-18-3 高圧ガス設備は所定の耐圧試験に合格するものでなければならないが、その試験圧力は、常用の圧力に関係なく、製造する高圧ガスの種類によって定められている。,×
29-18-1 液化窒素の貯槽の内容積は、5000L以上であるため、この貯槽に取り付けた配管のうち、液化ガスを送り出し、又は受け入れるために用いられるものには、その液化窒素が漏洩したときに安全に、かつ、速やかに遮断するための措置を講じなければならない旨の定めがある。,×
29-18-2 アンモニアの製造設備には、アンモニアが漏洩したときに安全に、かつ、速やかに除害するための措置を講じなければならない。,○
29-18-3 製造設備に設けたバルブまたはコックには、作業員がそのバルブまたはコックを適切に操作する措置を講じなければならないが、そのバルブまたはコックを開閉する操作ボタンなどには、その措置を講じる必要がない。,×
液化アンモニアの貯槽の液状のガスを送り出すための配管又は受け入れるための配管に、液化アンモニアが漏洩したときに安全に、かつ、速やかに遮断するためのバルブを設け、そのバルブを使用時以外に閉止している場合は、その配管に設けたバルブのうち貯槽の直近にあるものは、使用時以外でも常時開とすることができる。,×
この液化アンモニアの貯槽の周囲には、液状のアンモニアが漏洩した場合に流出を防止するための措置を講じなくてよい。,×
アンモニアのガス設備の配管の接合は、溶接によることが適当でない場合、保安上必要な強度を有するねじ接合継ぎ手によることができる。,○
アンモニアのガス設備にかかる配管、管継手及びバルブの接合を溶接により行った場合であっても、ポンプ、バルブ及び継手その他アンモニアが漏洩する恐れのある箇所にはその旨の危険標識を掲げなければならない。,○
窒素の製造設備に設けたバルブには、作業員がそのバルブを適切に操作することができるような措置を講じなければならない旨の定めはない。,×
この容器置場の外面から第一種保安物件及び第二種保安物件に対し有すべき距離は、アンモニア、アセチレン、酸素及び窒素の処理設備の処理能力の合計から算出される。,×
アンモニアの製造施設及びアセチレンの製造施設には、それぞれ製造施設から漏洩するガスが滞留する恐れのある場所に、そのガスの漏洩を検知し、かつ、警報するための設備を設けなければならない。,○
容器置場の外面から第一種保安物件及び第二種保安物件に対して有すべき第一種置場距離及び第二種置場距離は、その容器置場の面積に応じて算出される。,○
これらの製造設備に設けたバルブまたはコックには、作業員が適切に操作することができる措置を講じなければならない。,○
アンモニアの製造施設には、ポンプ、バルブ及び継手その他アンモニアが漏えいするおそれのある箇所に、その旨の危険標識を掲げれば、他の製造施設と区分して、その外部から毒性ガスの製造施設である旨を容易に識別することができるような措置を講じる必要はない。,×
アンモニアの製造設備及び容器置場には、アンモニアが漏えいしたときに安全に、かつ、速やかに除害するための措置を講じなければならない。,○
この高圧ガス製造施設に係る容器置場の外面から第一種保安物件及び第二種保安物件に対し有すべき距離は、その処理能力及び貯蔵能力に応じて算出される。,×
これらの高圧ガスの製造施設のうち、ポンプ、バルブ及び継手その他ガスが漏えいするおそれのある箇所に、その旨の危険標識を掲げなければならない製造施設は、アンモニアのものに限られている。,○
アンモニアの製造施設のガス設備に係る配管の接合は、いかなる場合であっても、溶接以外は認められていない。,×
この容器置場の外面から第一種保安物件に対して有すべき距離は、第一種保安物件に対して所定の強度を有する構造の障壁を設けた場合には、第一種置場距離の分の1/2の距離となる。,○
25-19-1 液化アンモニアの貯槽の周囲に可燃性物質を取り扱う設備がない場合であっても、その貯槽及び支柱には温度の上昇を防止するための措置を講じなければならない。,○
25-19-2 これらの貯槽はその内容積が5000リットルを超えているが、貯槽に取り付けた配管に、その液化ガスが漏洩したときに安全に、かつ、速やかに除害するための措置を講じなければならない貯槽は、液化アンモニア及び液化酸素の貯槽に限られている。,○
25-19-3 アセチレンの製造施設のうち、高圧ガス設備以外のガス設備の変更工事を行ったときは、常用の圧力の1.5倍以上の圧力で、水その他の安全な液体を使用して行う耐圧試験に合格しなければならないと定められている。,×
26-19-1 アンモニアの高圧ガス設備の安全弁に付帯して設けた止め弁は、アンモニアの漏洩を防止するため、充填作業の終了後は閉止しておかなければならない。,×
26-19-2 窒素の高圧ガスを製造する場合であっても、その製造設備の使用開始時及び使用終了時にその製造設備の属する製造施設の異常の有無を点検するほか、1日に1回以上製造をする高圧ガスの種類及び製造設備の態様に応じ頻繁に製造設備の作動状況について点検しなければならない。,○
26-19-3 高圧ガスを充てんした容器は圧縮窒素のものであっても、充填容器及び残ガス容器にそれぞれ区分して容器置き場に置かなければならない。,○
27-19-1 高圧ガス設備にかかる電気設備を、その設置場所及びそのガスの種類に応じた防爆性能を有する構造にしなければならないと定められているのは、アセチレンの製造施設に限られている。,○
27-19-2 製造設備に設けたバルブのうち、作業員が頻繁に操作をするバルブ以外のバルブには作業員が適切に操作することができるような措置を講じる必要はない。,×
27-19-3 容器置き場の増築を行い、面積を1200平方メートルとした場合であっても、容器置き場の外面から第一種保安物件及び第二種保安物件に対して有すべき距離は増築前と変わらない。,○
28-19-1 全ての貯槽について、その沈下状況を測定するための措置を講じ、所定の基準により沈下状況を測定しなければならない。,○
28-19-2 全ての貯槽は内容積が5000L以上であるため、それぞれの貯槽に取り付けた配管には、その液化ガスが漏洩したときに安全に、かつ、速やかに遮断するための措置を講じなければならないと定められている。,×
28-19-3 液化酸素の貯槽及び液化窒素の貯槽並びにそれらの支柱には、可燃性ガスの貯槽又は可燃性物質を取り扱う設備が周辺にある場合に、温度の上昇を防止する措置を講じなければならない。,○
29-19-1 高圧ガス設備の安全弁又は逃し弁に付帯して設けた止め弁は、修理又は清掃のため特に必要な場合を除き、常に全開しておかなければならない。,○
29-19-2 これらの貯槽に液化ガスを充てんするときは、それぞれの液化ガスの容量がそれぞれの貯槽の常用の温度においてその内容積の90%を超えないように充填しなければならない。,○
29-19-3 これらの高圧ガスの製造においては、その製造設備の使用開始時及び使用終了時にその製造設備の属する製造施設の異常の有無を点検するほか、1日に1回以上製造する高圧ガスの種類及び製造設備の態様に応じ頻繁に製造設備の作動状況を点検しなければならない。,○
高圧ガス設備の安全弁又は逃し弁に付帯して設けた止め弁は、修理又は清掃のため特に必要な場合以外は常に全開しておかなければならない。,○
液化アンモニア、液化酸素、液化窒素の貯槽に液化ガスを充填するときは、液化ガスの容量がそれぞれ貯槽の常用の温度においてその内容積の90%を超えないように充填しなければならない。また、これらすべての貯槽には、その90%を超えることを自動的に検知し、かつ、警報するための措置を講じなければならないと定められている。,×
窒素の製造は、製造設備の使用開始時及び使用終了時にその製造設備に属する製造施設の異常の有無を点検すれば、1日に1回以上製造をする製造設備の作動状況について点検しなくてよい。,×
液化窒素の貯槽の安全弁に付帯して設けた止め弁は、修理又は清掃のために必要な場合を除き、常に全開しなければならないが、液化窒素のポンプの逃し弁に付帯して設けた止め弁は、運転終了後は常に閉止しておかなければならない。,×
これらの貯槽に液化ガスを充填する場合においてその液化ガスの容量がその貯槽の常用の温度においてその内容積の90%を超えることを自動的に検知し、かつ、警報するための措置を講じるべき定めがあるのは、液化アンモニアの貯槽のみである。,○
容器置場には、計量器等作業に必要なもの以外のものを置いてはならない。,○
処理設備である液化アンモニアのポンプの逃し弁に付帯して設けた止め弁は、そのポンプの運転中を除き、閉止しておかなければならない。,×
液化アンモニアの貯槽に液化アンモニアを充填するとき、その貯槽には、液化アンモニアの容量がその貯槽の常用の温度においてその内容積の90%を超えることを自動的に検知し、かつ、警報するための措置を講じておかなければならない。,○
圧縮窒素の製造は、その製造設備の使用開始時及び使用終了時にその製造設備の属する製造施設の異常の有無を点検するほか、1日に1回以上製造をする高圧ガスの種類及び製造設備の態様に応じ頻繁に製造設備の作動状況について点検して行わなければならない。,○
高圧ガス設備の安全弁に付帯して設けた止め弁は、高圧ガス設備の使用終了後は、ガスの漏えいを防止するため閉止しておかなければならない。,×
液化アンモニアの貯槽に液化ガスを充?するときは、常用の温度においてその内容積の90パーセントを超えないように充?しなければならない。また、貯槽には90パーセントを超えることを自動的に検知し、警報するための措置を講じなければならない。,○
窒素の製造については、その製造設備の使用開始時又は使用終了時に1日1回以上異常の有無を点検すればよい。,×
高圧ガス設備の安全弁に付帯して設けた止め弁は、製造設備の使用終了時から使用開始時までの間は、不用意なガスの放出を防ぐため、閉止しておかなければならない。,×
全ての高圧ガスの製造は、その製造設備の使用開始時及び使用終了時にその製造設備の属する製造施設の異常の有無を点検するほか、1日に1回以上製造をする高圧ガスの種類及び製造設備の態様に応じ頻繁に製造設備の作動状況について点検し、異常のあるときは、その設備の補修その他の危険を防止する措置を講じて行わなければならない。,○
液化窒素のポンプについて、その修理が終了したときはそのポンプが正常に作動することを確認した後でなければ高圧ガスの製造をしてはならないが、その内部の清掃の場合はそのポンプが正常に作動することを確認することなく高圧ガスの製造をすることができる。,×
25-20-1 アンモニアの製造施設には、ポンプ、バルブ及び継手その他アンモニアが漏洩する恐れのある箇所に、その旨の危険標識を掲げれば、他の製造施設と区分して、その外部から毒性ガスの製造施設である旨を容易に識別することができるような措置を講じる必要はない。,×
25-20-2 窒素の高圧ガス設備には、その設備内の圧力が許容圧力を超えた場合に直ちにその圧力を許容圧力以下に戻すことができる安全装置を設ける必要はない。,×
25-20-3 アンモニアの製造設備には、アンモニアが漏洩したときに安全に、かつ、速やかに除害するための措置を講じなければならない。,○
26-20-1 液化アンモニア及び液化窒素のそれぞれの貯槽に充填するときは、その液化ガスの容量がその貯槽の常用の温度において、その内容積の90%を超えないように充填しなければならないが、液化窒素を貯槽に充填するときはその定めはない。,×
26-20-2 窒素のガス設備の修理又は清掃を行うとき、あらかじめ、その作業の責任者を定め、かつ、その責任者の監視のもとに作業を行う場合は、その作業計画を定める必要はない。,×
26-20-3 充填容器および残ガス容器であって、それぞれ内容積が5リットルを超えるものには、転落、転倒による衝撃を防止する措置を講じなければならない。,○
27-20-1 これらの製造設備のうち、ガス設備を開放して修理するときに、その開放する部分に他の部分からガスが漏洩することを防止するための措置を講じなければならない旨の定めがあるのは、アセチレンとアンモニアの製造設備に限られている。,×
27-10-2 容器置場には、計量器等作業に必要なもの以外のものを置いてはならない。,○
27-10-3 アンモニア、アセチレン及び酸素を充てんした容器は、それぞれ区分するとともに、これらの充填容器及び残ガス容器にそれぞれ区分して容器置場に置かなければならない。,○
28-20-1 アンモニアの製造施設には、他の製造施設と区分して、その外部から毒性ガスの製造施設である旨を容易に識別することができるような措置を講じた場合は、ポンプ、バルブ及び継手その他アンモニアが漏洩する恐れのある箇所に、その旨の危険標識を掲げる必要はない。,×
28-20-2 液化アンモニアの配管の接合は、溶接によることが適当でない場合は、保安上必要な強度を有するねじ接合継ぎ手によることができる。,○
28-20-3 容器置場は、その外面から第一種保安物件及び第二種保安物件に対し、それぞれ所定の距離以上の距離を有しなければならない。,○
29-20-1 窒素のガス設備の修理又は清掃を行うとき、あらかじめ、その作業の責任者を定め、かつ、その責任者の監視のもとに作業を行う場合は、その作業計画を定める必要はない。,×
29-20-2 圧縮アセチレンの充填容器及び残ガス容器は、それぞれ区分して容器置き場に置かなければならないが、圧縮窒素の充填容器及び残ガス容器は、それぞれ区分して容器置き場に置く必要はない。,×
29-20-3 充填容器及び残ガス容器であって、それぞれ内容積が5Lを超えるものには、転落、転倒などによる衝撃及びバルブの損傷を防止する措置を講じ、かつ、粗暴な取り扱いをしてはならない。,○
これらの製造施設のガス設備のうち、その修理又は清掃をするときに危険を防止するための措置を講じなければならない旨の定めがあるのは、高圧ガス設備の修理又は清掃をするときに限られている。,×
液化アンモニアの充填容器及び残ガス容器は、それぞれ区分して容器置き場に置かなければならないが、圧縮窒素の充填容器及び残ガス容器は、それぞれ区分して容器置場に置くべき定めはない。,×
圧縮アセチレン、圧縮酸素及び圧縮窒素にかかる充填容器及び残ガス容器は、常に温度40度以下に保たなければならない。,○
窒素のガス設備であっても、ガス設備を開放して修理をするときは、そのガス設備のうち開放する部分にほかの部分からガスが漏洩することを防止するための措置を講じなければならないと定められている。,○
この事業所が製造施設につき従業員の交代制をとっていない場合、高圧ガスの製造は、製造設備の使用開始時及び使用終了時にその製造設備の属する製造施設の異常の有無を点検すれば、製造設備の作動状況について点検する必要はない。,×
ガス設備の修理を行うときは、あらかじめ、その修理の作業計画及びその作業の責任者を定め、修理はその作業計画に従うとともに、その作業の責任者の監視の下で行うか、または、異常があったときに直ちにその旨をその責任者に通報するための措置を講じて行わなければならない。,○
これらの製造施設のうち、その修理又は清掃をするときに危険を防止するための措置を講じなければならないのは、アンモニアのガス設備、アセチレンのガス設備、酸素のガス設備及び窒素の高圧ガス設備に限られている。,×
圧縮酸素の容器置場の周囲2m以内において火気を使用する場合、容器と火気の間を有効に遮る措置を講じたうえで火気を使用しなければならない。,○
液化アンモニアの容器置場及び圧縮アセチレンの容器置場には、携帯電燈以外の燈火を携えて立ち入ってはならないと定められている。,○
これらの製造設備のうち、ガス設備を開放して修理するときにその開放する部分に他の部分からガスが漏えいすることを防止するための措置を講じなければならない旨の定めがあるのは、アセチレンとアンモニアの製造設備に限られている。,×
液化アンモニアの充?容器及び残ガス容器は、それぞれ区分して容器置場に置かなければならないが、圧縮窒素の充?容器及び残ガス容器は、それぞれ区分して容器置場に置くべき定めはない。,×
液化アンモニアの容器置場の周囲2メートル以内においては、特に定める場合を除き、火気の使用を禁止し、かつ、引火性又は発火性の物を置いてはならない。,○
圧縮酸素の容器置場については、容器と火気又は引火性若しくは発火性の物の間を有効に遮る措置を講じていない場合、その容器置場の周囲2メートル以内においては、火気の使用を禁じ、かつ、引火性又は発火性の物を置いてはならない。,○
圧縮窒素の容器のみを容器置場に置くときは、充?容器及び残ガス容器にそれぞれ区分して置くべき定めはない。,×
液化アンモニアの充?容器と圧縮酸素の充?容器は、それぞれ区分して容器置場に置かなければならないが、液化アンモニアの充?容器と圧縮窒素の充?容器をそれぞれ区分して容器置場に置くべき定めはない。,○
`;/**
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
 */const La=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let s=e.charCodeAt(r);s<128?t[n++]=s:s<2048?(t[n++]=s>>6|192,t[n++]=s&63|128):(s&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=s>>18|240,t[n++]=s>>12&63|128,t[n++]=s>>6&63|128,t[n++]=s&63|128):(t[n++]=s>>12|224,t[n++]=s>>6&63|128,t[n++]=s&63|128)}return t},Wh=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const s=e[n++];if(s<128)t[r++]=String.fromCharCode(s);else if(s>191&&s<224){const o=e[n++];t[r++]=String.fromCharCode((s&31)<<6|o&63)}else if(s>239&&s<365){const o=e[n++],i=e[n++],a=e[n++],c=((s&7)<<18|(o&63)<<12|(i&63)<<6|a&63)-65536;t[r++]=String.fromCharCode(55296+(c>>10)),t[r++]=String.fromCharCode(56320+(c&1023))}else{const o=e[n++],i=e[n++];t[r++]=String.fromCharCode((s&15)<<12|(o&63)<<6|i&63)}}return t.join("")},Fa={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<e.length;s+=3){const o=e[s],i=s+1<e.length,a=i?e[s+1]:0,c=s+2<e.length,l=c?e[s+2]:0,d=o>>2,f=(o&3)<<4|a>>4;let p=(a&15)<<2|l>>6,y=l&63;c||(y=64,i||(p=64)),r.push(n[d],n[f],n[p],n[y])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(La(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):Wh(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<e.length;){const o=n[e.charAt(s++)],a=s<e.length?n[e.charAt(s)]:0;++s;const l=s<e.length?n[e.charAt(s)]:64;++s;const f=s<e.length?n[e.charAt(s)]:64;if(++s,o==null||a==null||l==null||f==null)throw new Vh;const p=o<<2|a>>4;if(r.push(p),l!==64){const y=a<<4&240|l>>2;if(r.push(y),f!==64){const g=l<<6&192|f;r.push(g)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class Vh extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Kh=function(e){const t=La(e);return Fa.encodeByteArray(t,!0)},Ba=function(e){return Kh(e).replace(/\./g,"")},qh=function(e){try{return Fa.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function zh(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Jh=()=>zh().__FIREBASE_DEFAULTS__,Gh=()=>{if(typeof process>"u"||typeof process.env>"u")return;const e={}.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},Yh=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&qh(e[1]);return t&&JSON.parse(t)},Xh=()=>{try{return Jh()||Gh()||Yh()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},ja=()=>{var e;return(e=Xh())===null||e===void 0?void 0:e.config};/**
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
 */class Zh{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}function Qh(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function Ua(){try{return typeof indexedDB=="object"}catch{return!1}}function Wa(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var o;t(((o=s.error)===null||o===void 0?void 0:o.message)||"")}}catch(n){t(n)}})}function ep(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const tp="FirebaseError";class wt extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=tp,Object.setPrototypeOf(this,wt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,sr.prototype.create)}}class sr{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},s=`${this.service}/${t}`,o=this.errors[t],i=o?np(o,r):"Error",a=`${this.serviceName}: ${i} (${s}).`;return new wt(s,a,r)}}function np(e,t){return e.replace(rp,(n,r)=>{const s=t[r];return s!=null?String(s):`<${r}?>`})}const rp=/\{\$([^}]+)}/g;function jn(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const s of n){if(!r.includes(s))return!1;const o=e[s],i=t[s];if(Bo(o)&&Bo(i)){if(!jn(o,i))return!1}else if(o!==i)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Bo(e){return e!==null&&typeof e=="object"}/**
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
 */const sp=1e3,op=2,ip=4*60*60*1e3,ap=.5;function jo(e,t=sp,n=op){const r=t*Math.pow(n,e),s=Math.round(ap*r*(Math.random()-.5)*2);return Math.min(ip,r+s)}/**
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
 */function Va(e){return e&&e._delegate?e._delegate:e}class st{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const ct="[DEFAULT]";/**
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
 */class cp{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new Zh;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),s=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(s)return null;throw o}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(up(t))try{this.getOrInitializeService({instanceIdentifier:ct})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const o=this.getOrInitializeService({instanceIdentifier:s});r.resolve(o)}catch{}}}}clearInstance(t=ct){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=ct){return this.instances.has(t)}getOptions(t=ct){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[o,i]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(o);r===a&&i.resolve(s)}return s}onInit(t,n){var r;const s=this.normalizeInstanceIdentifier(n),o=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;o.add(t),this.onInitCallbacks.set(s,o);const i=this.instances.get(s);return i&&t(i,s),()=>{o.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:lp(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=ct){return this.component?this.component.multipleInstances?t:ct:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function lp(e){return e===ct?void 0:e}function up(e){return e.instantiationMode==="EAGER"}/**
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
 */class fp{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new cp(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var te;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(te||(te={}));const dp={debug:te.DEBUG,verbose:te.VERBOSE,info:te.INFO,warn:te.WARN,error:te.ERROR,silent:te.SILENT},hp=te.INFO,pp={[te.DEBUG]:"log",[te.VERBOSE]:"log",[te.INFO]:"info",[te.WARN]:"warn",[te.ERROR]:"error"},gp=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),s=pp[t];if(s)console[s](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Ka{constructor(t){this.name=t,this._logLevel=hp,this._logHandler=gp,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in te))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?dp[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,te.DEBUG,...t),this._logHandler(this,te.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,te.VERBOSE,...t),this._logHandler(this,te.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,te.INFO,...t),this._logHandler(this,te.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,te.WARN,...t),this._logHandler(this,te.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,te.ERROR,...t),this._logHandler(this,te.ERROR,...t)}}const mp=(e,t)=>t.some(n=>e instanceof n);let Uo,Wo;function yp(){return Uo||(Uo=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function bp(){return Wo||(Wo=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const qa=new WeakMap,Xr=new WeakMap,za=new WeakMap,vr=new WeakMap,$s=new WeakMap;function _p(e){const t=new Promise((n,r)=>{const s=()=>{e.removeEventListener("success",o),e.removeEventListener("error",i)},o=()=>{n(Ze(e.result)),s()},i=()=>{r(e.error),s()};e.addEventListener("success",o),e.addEventListener("error",i)});return t.then(n=>{n instanceof IDBCursor&&qa.set(n,e)}).catch(()=>{}),$s.set(t,e),t}function wp(e){if(Xr.has(e))return;const t=new Promise((n,r)=>{const s=()=>{e.removeEventListener("complete",o),e.removeEventListener("error",i),e.removeEventListener("abort",i)},o=()=>{n(),s()},i=()=>{r(e.error||new DOMException("AbortError","AbortError")),s()};e.addEventListener("complete",o),e.addEventListener("error",i),e.addEventListener("abort",i)});Xr.set(e,t)}let Zr={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return Xr.get(e);if(t==="objectStoreNames")return e.objectStoreNames||za.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Ze(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function vp(e){Zr=e(Zr)}function Ep(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(Er(this),t,...n);return za.set(r,t.sort?t.sort():[t]),Ze(r)}:bp().includes(e)?function(...t){return e.apply(Er(this),t),Ze(qa.get(this))}:function(...t){return Ze(e.apply(Er(this),t))}}function Ip(e){return typeof e=="function"?Ep(e):(e instanceof IDBTransaction&&wp(e),mp(e,yp())?new Proxy(e,Zr):e)}function Ze(e){if(e instanceof IDBRequest)return _p(e);if(vr.has(e))return vr.get(e);const t=Ip(e);return t!==e&&(vr.set(e,t),$s.set(t,e)),t}const Er=e=>$s.get(e);function Tp(e,t,{blocked:n,upgrade:r,blocking:s,terminated:o}={}){const i=indexedDB.open(e,t),a=Ze(i);return r&&i.addEventListener("upgradeneeded",c=>{r(Ze(i.result),c.oldVersion,c.newVersion,Ze(i.transaction),c)}),n&&i.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{o&&c.addEventListener("close",()=>o()),s&&c.addEventListener("versionchange",l=>s(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const Ap=["get","getKey","getAll","getAllKeys","count"],Cp=["put","add","delete","clear"],Ir=new Map;function Vo(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(Ir.get(t))return Ir.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,s=Cp.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Ap.includes(n)))return;const o=async function(i,...a){const c=this.transaction(i,s?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),s&&c.done]))[0]};return Ir.set(t,o),o}vp(e=>({...e,get:(t,n,r)=>Vo(t,n)||e.get(t,n,r),has:(t,n)=>!!Vo(t,n)||e.has(t,n)}));/**
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
 */class Rp{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Hp(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Hp(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Qr="@firebase/app",Ko="0.9.15";/**
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
 */const gt=new Ka("@firebase/app"),Sp="@firebase/app-compat",Pp="@firebase/analytics-compat",xp="@firebase/analytics",Op="@firebase/app-check-compat",Mp="@firebase/app-check",$p="@firebase/auth",kp="@firebase/auth-compat",Dp="@firebase/database",Np="@firebase/database-compat",Lp="@firebase/functions",Fp="@firebase/functions-compat",Bp="@firebase/installations",jp="@firebase/installations-compat",Up="@firebase/messaging",Wp="@firebase/messaging-compat",Vp="@firebase/performance",Kp="@firebase/performance-compat",qp="@firebase/remote-config",zp="@firebase/remote-config-compat",Jp="@firebase/storage",Gp="@firebase/storage-compat",Yp="@firebase/firestore",Xp="@firebase/firestore-compat",Zp="firebase";/**
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
 */const es="[DEFAULT]",Qp={[Qr]:"fire-core",[Sp]:"fire-core-compat",[xp]:"fire-analytics",[Pp]:"fire-analytics-compat",[Mp]:"fire-app-check",[Op]:"fire-app-check-compat",[$p]:"fire-auth",[kp]:"fire-auth-compat",[Dp]:"fire-rtdb",[Np]:"fire-rtdb-compat",[Lp]:"fire-fn",[Fp]:"fire-fn-compat",[Bp]:"fire-iid",[jp]:"fire-iid-compat",[Up]:"fire-fcm",[Wp]:"fire-fcm-compat",[Vp]:"fire-perf",[Kp]:"fire-perf-compat",[qp]:"fire-rc",[zp]:"fire-rc-compat",[Jp]:"fire-gcs",[Gp]:"fire-gcs-compat",[Yp]:"fire-fst",[Xp]:"fire-fst-compat","fire-js":"fire-js",[Zp]:"fire-js-all"};/**
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
 */const Un=new Map,ts=new Map;function eg(e,t){try{e.container.addComponent(t)}catch(n){gt.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function mt(e){const t=e.name;if(ts.has(t))return gt.debug(`There were multiple attempts to register component ${t}.`),!1;ts.set(t,e);for(const n of Un.values())eg(n,e);return!0}function or(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
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
 */const tg={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Qe=new sr("app","Firebase",tg);/**
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
 */class ng{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new st("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Qe.create("app-deleted",{appName:this._name})}}function Ja(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:es,automaticDataCollectionEnabled:!1},t),s=r.name;if(typeof s!="string"||!s)throw Qe.create("bad-app-name",{appName:String(s)});if(n||(n=ja()),!n)throw Qe.create("no-options");const o=Un.get(s);if(o){if(jn(n,o.options)&&jn(r,o.config))return o;throw Qe.create("duplicate-app",{appName:s})}const i=new fp(s);for(const c of ts.values())i.addComponent(c);const a=new ng(n,r,i);return Un.set(s,a),a}function rg(e=es){const t=Un.get(e);if(!t&&e===es&&ja())return Ja();if(!t)throw Qe.create("no-app",{appName:e});return t}function et(e,t,n){var r;let s=(r=Qp[e])!==null&&r!==void 0?r:e;n&&(s+=`-${n}`);const o=s.match(/\s|\//),i=t.match(/\s|\//);if(o||i){const a=[`Unable to register library "${s}" with version "${t}":`];o&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&i&&a.push("and"),i&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),gt.warn(a.join(" "));return}mt(new st(`${s}-version`,()=>({library:s,version:t}),"VERSION"))}/**
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
 */const sg="firebase-heartbeat-database",og=1,an="firebase-heartbeat-store";let Tr=null;function Ga(){return Tr||(Tr=Tp(sg,og,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(an)}}}).catch(e=>{throw Qe.create("idb-open",{originalErrorMessage:e.message})})),Tr}async function ig(e){try{return await(await Ga()).transaction(an).objectStore(an).get(Ya(e))}catch(t){if(t instanceof wt)gt.warn(t.message);else{const n=Qe.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});gt.warn(n.message)}}}async function qo(e,t){try{const r=(await Ga()).transaction(an,"readwrite");await r.objectStore(an).put(t,Ya(e)),await r.done}catch(n){if(n instanceof wt)gt.warn(n.message);else{const r=Qe.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});gt.warn(r.message)}}}function Ya(e){return`${e.name}!${e.options.appId}`}/**
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
 */const ag=1024,cg=30*24*60*60*1e3;class lg{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new fg(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=zo();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const o=new Date(s.date).valueOf();return Date.now()-o<=cg}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const t=zo(),{heartbeatsToSend:n,unsentEntries:r}=ug(this._heartbeatsCache.heartbeats),s=Ba(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function zo(){return new Date().toISOString().substring(0,10)}function ug(e,t=ag){const n=[];let r=e.slice();for(const s of e){const o=n.find(i=>i.agent===s.agent);if(o){if(o.dates.push(s.date),Jo(n)>t){o.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Jo(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class fg{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Ua()?Wa().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await ig(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return qo(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return qo(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...t.heartbeats]})}else return}}function Jo(e){return Ba(JSON.stringify({version:2,heartbeats:e})).length}/**
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
 */function dg(e){mt(new st("platform-logger",t=>new Rp(t),"PRIVATE")),mt(new st("heartbeat",t=>new lg(t),"PRIVATE")),et(Qr,Ko,e),et(Qr,Ko,"esm2017"),et("fire-js","")}dg("");var hg="firebase",pg="10.1.0";/**
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
 */et(hg,pg,"app");const gg=(e,t)=>t.some(n=>e instanceof n);let Go,Yo;function mg(){return Go||(Go=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function yg(){return Yo||(Yo=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Xa=new WeakMap,ns=new WeakMap,Za=new WeakMap,Ar=new WeakMap,ks=new WeakMap;function bg(e){const t=new Promise((n,r)=>{const s=()=>{e.removeEventListener("success",o),e.removeEventListener("error",i)},o=()=>{n(tt(e.result)),s()},i=()=>{r(e.error),s()};e.addEventListener("success",o),e.addEventListener("error",i)});return t.then(n=>{n instanceof IDBCursor&&Xa.set(n,e)}).catch(()=>{}),ks.set(t,e),t}function _g(e){if(ns.has(e))return;const t=new Promise((n,r)=>{const s=()=>{e.removeEventListener("complete",o),e.removeEventListener("error",i),e.removeEventListener("abort",i)},o=()=>{n(),s()},i=()=>{r(e.error||new DOMException("AbortError","AbortError")),s()};e.addEventListener("complete",o),e.addEventListener("error",i),e.addEventListener("abort",i)});ns.set(e,t)}let rs={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return ns.get(e);if(t==="objectStoreNames")return e.objectStoreNames||Za.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return tt(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function wg(e){rs=e(rs)}function vg(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(Cr(this),t,...n);return Za.set(r,t.sort?t.sort():[t]),tt(r)}:yg().includes(e)?function(...t){return e.apply(Cr(this),t),tt(Xa.get(this))}:function(...t){return tt(e.apply(Cr(this),t))}}function Eg(e){return typeof e=="function"?vg(e):(e instanceof IDBTransaction&&_g(e),gg(e,mg())?new Proxy(e,rs):e)}function tt(e){if(e instanceof IDBRequest)return bg(e);if(Ar.has(e))return Ar.get(e);const t=Eg(e);return t!==e&&(Ar.set(e,t),ks.set(t,e)),t}const Cr=e=>ks.get(e);function Ig(e,t,{blocked:n,upgrade:r,blocking:s,terminated:o}={}){const i=indexedDB.open(e,t),a=tt(i);return r&&i.addEventListener("upgradeneeded",c=>{r(tt(i.result),c.oldVersion,c.newVersion,tt(i.transaction))}),n&&i.addEventListener("blocked",()=>n()),a.then(c=>{o&&c.addEventListener("close",()=>o()),s&&c.addEventListener("versionchange",()=>s())}).catch(()=>{}),a}const Tg=["get","getKey","getAll","getAllKeys","count"],Ag=["put","add","delete","clear"],Rr=new Map;function Xo(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(Rr.get(t))return Rr.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,s=Ag.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Tg.includes(n)))return;const o=async function(i,...a){const c=this.transaction(i,s?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),s&&c.done]))[0]};return Rr.set(t,o),o}wg(e=>({...e,get:(t,n,r)=>Xo(t,n)||e.get(t,n,r),has:(t,n)=>!!Xo(t,n)||e.has(t,n)}));const Qa="@firebase/installations",Ds="0.6.4";/**
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
 */const ec=1e4,tc=`w:${Ds}`,nc="FIS_v2",Cg="https://firebaseinstallations.googleapis.com/v1",Rg=60*60*1e3,Hg="installations",Sg="Installations";/**
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
 */const Pg={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},yt=new sr(Hg,Sg,Pg);function rc(e){return e instanceof wt&&e.code.includes("request-failed")}/**
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
 */function sc({projectId:e}){return`${Cg}/projects/${e}/installations`}function oc(e){return{token:e.token,requestStatus:2,expiresIn:Og(e.expiresIn),creationTime:Date.now()}}async function ic(e,t){const r=(await t.json()).error;return yt.create("request-failed",{requestName:e,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function ac({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function xg(e,{refreshToken:t}){const n=ac(e);return n.append("Authorization",Mg(t)),n}async function cc(e){const t=await e();return t.status>=500&&t.status<600?e():t}function Og(e){return Number(e.replace("s","000"))}function Mg(e){return`${nc} ${e}`}/**
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
 */async function $g({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const r=sc(e),s=ac(e),o=t.getImmediate({optional:!0});if(o){const l=await o.getHeartbeatsHeader();l&&s.append("x-firebase-client",l)}const i={fid:n,authVersion:nc,appId:e.appId,sdkVersion:tc},a={method:"POST",headers:s,body:JSON.stringify(i)},c=await cc(()=>fetch(r,a));if(c.ok){const l=await c.json();return{fid:l.fid||n,registrationStatus:2,refreshToken:l.refreshToken,authToken:oc(l.authToken)}}else throw await ic("Create Installation",c)}/**
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
 */function lc(e){return new Promise(t=>{setTimeout(t,e)})}/**
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
 */function kg(e){return btoa(String.fromCharCode(...e)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const Dg=/^[cdef][\w-]{21}$/,ss="";function Ng(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const n=Lg(e);return Dg.test(n)?n:ss}catch{return ss}}function Lg(e){return kg(e).substr(0,22)}/**
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
 */function ir(e){return`${e.appName}!${e.appId}`}/**
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
 */const uc=new Map;function fc(e,t){const n=ir(e);dc(n,t),Fg(n,t)}function dc(e,t){const n=uc.get(e);if(n)for(const r of n)r(t)}function Fg(e,t){const n=Bg();n&&n.postMessage({key:e,fid:t}),jg()}let ft=null;function Bg(){return!ft&&"BroadcastChannel"in self&&(ft=new BroadcastChannel("[Firebase] FID Change"),ft.onmessage=e=>{dc(e.data.key,e.data.fid)}),ft}function jg(){uc.size===0&&ft&&(ft.close(),ft=null)}/**
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
 */const Ug="firebase-installations-database",Wg=1,bt="firebase-installations-store";let Hr=null;function Ns(){return Hr||(Hr=Ig(Ug,Wg,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(bt)}}})),Hr}async function Wn(e,t){const n=ir(e),s=(await Ns()).transaction(bt,"readwrite"),o=s.objectStore(bt),i=await o.get(n);return await o.put(t,n),await s.done,(!i||i.fid!==t.fid)&&fc(e,t.fid),t}async function hc(e){const t=ir(e),r=(await Ns()).transaction(bt,"readwrite");await r.objectStore(bt).delete(t),await r.done}async function ar(e,t){const n=ir(e),s=(await Ns()).transaction(bt,"readwrite"),o=s.objectStore(bt),i=await o.get(n),a=t(i);return a===void 0?await o.delete(n):await o.put(a,n),await s.done,a&&(!i||i.fid!==a.fid)&&fc(e,a.fid),a}/**
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
 */async function Ls(e){let t;const n=await ar(e.appConfig,r=>{const s=Vg(r),o=Kg(e,s);return t=o.registrationPromise,o.installationEntry});return n.fid===ss?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}function Vg(e){const t=e||{fid:Ng(),registrationStatus:0};return pc(t)}function Kg(e,t){if(t.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(yt.create("app-offline"));return{installationEntry:t,registrationPromise:s}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=qg(e,n);return{installationEntry:n,registrationPromise:r}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:zg(e)}:{installationEntry:t}}async function qg(e,t){try{const n=await $g(e,t);return Wn(e.appConfig,n)}catch(n){throw rc(n)&&n.customData.serverCode===409?await hc(e.appConfig):await Wn(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function zg(e){let t=await Zo(e.appConfig);for(;t.registrationStatus===1;)await lc(100),t=await Zo(e.appConfig);if(t.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await Ls(e);return r||n}return t}function Zo(e){return ar(e,t=>{if(!t)throw yt.create("installation-not-found");return pc(t)})}function pc(e){return Jg(e)?{fid:e.fid,registrationStatus:0}:e}function Jg(e){return e.registrationStatus===1&&e.registrationTime+ec<Date.now()}/**
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
 */async function Gg({appConfig:e,heartbeatServiceProvider:t},n){const r=Yg(e,n),s=xg(e,n),o=t.getImmediate({optional:!0});if(o){const l=await o.getHeartbeatsHeader();l&&s.append("x-firebase-client",l)}const i={installation:{sdkVersion:tc,appId:e.appId}},a={method:"POST",headers:s,body:JSON.stringify(i)},c=await cc(()=>fetch(r,a));if(c.ok){const l=await c.json();return oc(l)}else throw await ic("Generate Auth Token",c)}function Yg(e,{fid:t}){return`${sc(e)}/${t}/authTokens:generate`}/**
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
 */async function Fs(e,t=!1){let n;const r=await ar(e.appConfig,o=>{if(!gc(o))throw yt.create("not-registered");const i=o.authToken;if(!t&&Qg(i))return o;if(i.requestStatus===1)return n=Xg(e,t),o;{if(!navigator.onLine)throw yt.create("app-offline");const a=tm(o);return n=Zg(e,a),a}});return n?await n:r.authToken}async function Xg(e,t){let n=await Qo(e.appConfig);for(;n.authToken.requestStatus===1;)await lc(100),n=await Qo(e.appConfig);const r=n.authToken;return r.requestStatus===0?Fs(e,t):r}function Qo(e){return ar(e,t=>{if(!gc(t))throw yt.create("not-registered");const n=t.authToken;return nm(n)?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t})}async function Zg(e,t){try{const n=await Gg(e,t),r=Object.assign(Object.assign({},t),{authToken:n});return await Wn(e.appConfig,r),n}catch(n){if(rc(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await hc(e.appConfig);else{const r=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await Wn(e.appConfig,r)}throw n}}function gc(e){return e!==void 0&&e.registrationStatus===2}function Qg(e){return e.requestStatus===2&&!em(e)}function em(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+Rg}function tm(e){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}function nm(e){return e.requestStatus===1&&e.requestTime+ec<Date.now()}/**
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
 */async function rm(e){const t=e,{installationEntry:n,registrationPromise:r}=await Ls(t);return r?r.catch(console.error):Fs(t).catch(console.error),n.fid}/**
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
 */async function sm(e,t=!1){const n=e;return await om(n),(await Fs(n,t)).token}async function om(e){const{registrationPromise:t}=await Ls(e);t&&await t}/**
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
 */function im(e){if(!e||!e.options)throw Sr("App Configuration");if(!e.name)throw Sr("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw Sr(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}function Sr(e){return yt.create("missing-app-config-values",{valueName:e})}/**
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
 */const mc="installations",am="installations-internal",cm=e=>{const t=e.getProvider("app").getImmediate(),n=im(t),r=or(t,"heartbeat");return{app:t,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},lm=e=>{const t=e.getProvider("app").getImmediate(),n=or(t,mc).getImmediate();return{getId:()=>rm(n),getToken:s=>sm(n,s)}};function um(){mt(new st(mc,cm,"PUBLIC")),mt(new st(am,lm,"PRIVATE"))}um();et(Qa,Ds);et(Qa,Ds,"esm2017");/**
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
 */const Vn="analytics",fm="firebase_id",dm="origin",hm=60*1e3,pm="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Bs="https://www.googletagmanager.com/gtag/js";/**
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
 */const be=new Ka("@firebase/analytics");/**
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
 */const gm={["already-exists"]:"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.",["already-initialized"]:"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.",["already-initialized-settings"]:"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",["interop-component-reg-failed"]:"Firebase Analytics Interop Component failed to instantiate: {$reason}",["invalid-analytics-context"]:"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["indexeddb-unavailable"]:"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["fetch-throttle"]:"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.",["config-fetch-failed"]:"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}",["no-api-key"]:'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',["no-app-id"]:'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',["no-client-id"]:'The "client_id" field is empty.',["invalid-gtag-resource"]:"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Te=new sr("analytics","Analytics",gm);/**
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
 */function mm(e){if(!e.startsWith(Bs)){const t=Te.create("invalid-gtag-resource",{gtagURL:e});return be.warn(t.message),""}return e}function yc(e){return Promise.all(e.map(t=>t.catch(n=>n)))}function ym(e,t){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(e,t)),n}function bm(e,t){const n=ym("firebase-js-sdk-policy",{createScriptURL:mm}),r=document.createElement("script"),s=`${Bs}?l=${e}&id=${t}`;r.src=n?n==null?void 0:n.createScriptURL(s):s,r.async=!0,document.head.appendChild(r)}function _m(e){let t=[];return Array.isArray(window[e])?t=window[e]:window[e]=t,t}async function wm(e,t,n,r,s,o){const i=r[s];try{if(i)await t[i];else{const c=(await yc(n)).find(l=>l.measurementId===s);c&&await t[c.appId]}}catch(a){be.error(a)}e("config",s,o)}async function vm(e,t,n,r,s){try{let o=[];if(s&&s.send_to){let i=s.send_to;Array.isArray(i)||(i=[i]);const a=await yc(n);for(const c of i){const l=a.find(f=>f.measurementId===c),d=l&&t[l.appId];if(d)o.push(d);else{o=[];break}}}o.length===0&&(o=Object.values(t)),await Promise.all(o),e("event",r,s||{})}catch(o){be.error(o)}}function Em(e,t,n,r){async function s(o,...i){try{if(o==="event"){const[a,c]=i;await vm(e,t,n,a,c)}else if(o==="config"){const[a,c]=i;await wm(e,t,n,r,a,c)}else if(o==="consent"){const[a]=i;e("consent","update",a)}else if(o==="get"){const[a,c,l]=i;e("get",a,c,l)}else if(o==="set"){const[a]=i;e("set",a)}else e(o,...i)}catch(a){be.error(a)}}return s}function Im(e,t,n,r,s){let o=function(...i){window[r].push(arguments)};return window[s]&&typeof window[s]=="function"&&(o=window[s]),window[s]=Em(o,e,t,n),{gtagCore:o,wrappedGtag:window[s]}}function Tm(e){const t=window.document.getElementsByTagName("script");for(const n of Object.values(t))if(n.src&&n.src.includes(Bs)&&n.src.includes(e))return n;return null}/**
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
 */const Am=30,Cm=1e3;class Rm{constructor(t={},n=Cm){this.throttleMetadata=t,this.intervalMillis=n}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,n){this.throttleMetadata[t]=n}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}}const bc=new Rm;function Hm(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}async function Sm(e){var t;const{appId:n,apiKey:r}=e,s={method:"GET",headers:Hm(r)},o=pm.replace("{app-id}",n),i=await fetch(o,s);if(i.status!==200&&i.status!==304){let a="";try{const c=await i.json();!((t=c.error)===null||t===void 0)&&t.message&&(a=c.error.message)}catch{}throw Te.create("config-fetch-failed",{httpStatus:i.status,responseMessage:a})}return i.json()}async function Pm(e,t=bc,n){const{appId:r,apiKey:s,measurementId:o}=e.options;if(!r)throw Te.create("no-app-id");if(!s){if(o)return{measurementId:o,appId:r};throw Te.create("no-api-key")}const i=t.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new Mm;return setTimeout(async()=>{a.abort()},n!==void 0?n:hm),_c({appId:r,apiKey:s,measurementId:o},i,a,t)}async function _c(e,{throttleEndTimeMillis:t,backoffCount:n},r,s=bc){var o;const{appId:i,measurementId:a}=e;try{await xm(r,t)}catch(c){if(a)return be.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:i,measurementId:a};throw c}try{const c=await Sm(e);return s.deleteThrottleMetadata(i),c}catch(c){const l=c;if(!Om(l)){if(s.deleteThrottleMetadata(i),a)return be.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:i,measurementId:a};throw c}const d=Number((o=l==null?void 0:l.customData)===null||o===void 0?void 0:o.httpStatus)===503?jo(n,s.intervalMillis,Am):jo(n,s.intervalMillis),f={throttleEndTimeMillis:Date.now()+d,backoffCount:n+1};return s.setThrottleMetadata(i,f),be.debug(`Calling attemptFetch again in ${d} millis`),_c(e,f,r,s)}}function xm(e,t){return new Promise((n,r)=>{const s=Math.max(t-Date.now(),0),o=setTimeout(n,s);e.addEventListener(()=>{clearTimeout(o),r(Te.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}function Om(e){if(!(e instanceof wt)||!e.customData)return!1;const t=Number(e.customData.httpStatus);return t===429||t===500||t===503||t===504}class Mm{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach(t=>t())}}async function $m(e,t,n,r,s){if(s&&s.global){e("event",n,r);return}else{const o=await t,i=Object.assign(Object.assign({},r),{send_to:o});e("event",n,i)}}/**
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
 */async function km(){if(Ua())try{await Wa()}catch(e){return be.warn(Te.create("indexeddb-unavailable",{errorInfo:e==null?void 0:e.toString()}).message),!1}else return be.warn(Te.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function Dm(e,t,n,r,s,o,i){var a;const c=Pm(e);c.then(y=>{n[y.measurementId]=y.appId,e.options.measurementId&&y.measurementId!==e.options.measurementId&&be.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${y.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(y=>be.error(y)),t.push(c);const l=km().then(y=>{if(y)return r.getId()}),[d,f]=await Promise.all([c,l]);Tm(o)||bm(o,d.measurementId),s("js",new Date);const p=(a=i==null?void 0:i.config)!==null&&a!==void 0?a:{};return p[dm]="firebase",p.update=!0,f!=null&&(p[fm]=f),s("config",d.measurementId,p),d.measurementId}/**
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
 */class Nm{constructor(t){this.app=t}_delete(){return delete Qt[this.app.options.appId],Promise.resolve()}}let Qt={},ei=[];const ti={};let Pr="dataLayer",Lm="gtag",ni,wc,ri=!1;function Fm(){const e=[];if(Qh()&&e.push("This is a browser extension environment."),ep()||e.push("Cookies are not available."),e.length>0){const t=e.map((r,s)=>`(${s+1}) ${r}`).join(" "),n=Te.create("invalid-analytics-context",{errorInfo:t});be.warn(n.message)}}function Bm(e,t,n){Fm();const r=e.options.appId;if(!r)throw Te.create("no-app-id");if(!e.options.apiKey)if(e.options.measurementId)be.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Te.create("no-api-key");if(Qt[r]!=null)throw Te.create("already-exists",{id:r});if(!ri){_m(Pr);const{wrappedGtag:o,gtagCore:i}=Im(Qt,ei,ti,Pr,Lm);wc=o,ni=i,ri=!0}return Qt[r]=Dm(e,ei,ti,t,ni,Pr,n),new Nm(e)}function jm(e=rg()){e=Va(e);const t=or(e,Vn);return t.isInitialized()?t.getImmediate():Um(e)}function Um(e,t={}){const n=or(e,Vn);if(n.isInitialized()){const s=n.getImmediate();if(jn(t,n.getOptions()))return s;throw Te.create("already-initialized")}return n.initialize({options:t})}function Wm(e,t,n,r){e=Va(e),$m(wc,Qt[e.app.options.appId],t,n,r).catch(s=>be.error(s))}const si="@firebase/analytics",oi="0.10.0";function Vm(){mt(new st(Vn,(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),s=t.getProvider("installations-internal").getImmediate();return Bm(r,s,n)},"PUBLIC")),mt(new st("analytics-internal",e,"PRIVATE")),et(si,oi),et(si,oi,"esm2017");function e(t){try{const n=t.getProvider(Vn).getImmediate();return{logEvent:(r,s,o)=>Wm(n,r,s,o)}}catch(n){throw Te.create("interop-component-reg-failed",{reason:n})}}}Vm();const Km={class:"container my-4"},qm={class:"text-center"},zm={class:"btn-group"},Jm=["onClick"],Gm=_t({__name:"app",setup(e){const n=Ja({apiKey:"AIzaSyCeIOuLIWPTdi6hr5XC1bk0RKbLtSVlJ9o",authDomain:"dad-problem.firebaseapp.com",projectId:"dad-problem",storageBucket:"dad-problem.appspot.com",messagingSenderId:"615926471970",appId:"1:615926471970:web:93876343f7a893c5fb997b",measurementId:"G-69RDZPP64C"});jm(n);const r=he("保安"),s={保安:Fo,法令:Uh},o=he("");return o.value=Fo,Jt(r,async()=>{o.value="",await Yn(),o.value=s[r.value]}),(i,a)=>{const c=Ch,l=jh;return ce(),Xe("div",Km,[ie(c,null,{default:bs(()=>[Cs("ごまの問題集")]),_:1}),X("div",qm,[X("div",zm,[(ce(),Xe(Ee,null,Ji(s,(d,f)=>X("button",{class:ln(["btn",V(r)===f?"btn-primary":"btn-outline-primary"]),onClick:p=>r.value=f.toString()},Le(f),11,Jm)),64))])]),V(o)?(ce(),xe(l,{key:0,data:V(o)},null,8,["data"])):Cn("",!0)])}}});const Ym={__name:"nuxt-error-page",props:{error:Object},setup(e){const n=e.error;(n.stack||"").split(`
`).splice(1).map(f=>({text:f.replace("webpack:/","").replace(".vue",".js").trim(),internal:f.includes("node_modules")&&!f.includes(".cache")||f.includes("internal")||f.includes("new Promise")})).map(f=>`<span class="stack${f.internal?" internal":""}">${f.text}</span>`).join(`
`);const r=Number(n.statusCode||500),s=r===404,o=n.statusMessage??(s?"Page Not Found":"Internal Server Error"),i=n.message||n.toString(),a=void 0,d=s?so(()=>zr(()=>import("./error-404.e5f97723.js"),["./error-404.e5f97723.js","./_plugin-vue_export-helper.c27b6911.js","./error-404.7fc72018.css"],import.meta.url).then(f=>f.default||f)):so(()=>zr(()=>import("./error-500.97abdfdc.js"),["./error-500.97abdfdc.js","./_plugin-vue_export-helper.c27b6911.js","./error-500.c5df6088.css"],import.meta.url).then(f=>f.default||f));return(f,p)=>(ce(),xe(V(d),kc(la({statusCode:V(r),statusMessage:V(o),description:V(i),stack:V(a)})),null,16))}},ii={__name:"nuxt-root",setup(e){const t=()=>null,n=de(),r=n.deferHydration(),s=!1;Xi(Da,lh()),n.hooks.callHookWith(a=>a.map(c=>c()),"vue:setup");const o=Ms();Ki((a,c,l)=>{if(n.hooks.callHook("vue:error",a,c,l).catch(d=>console.error("[nuxt] Error in `vue:error` hook",d)),ph(a)&&(a.fatal||a.unhandled))return n.runWithContext(()=>dh(a)),!1});const{islandContext:i}=!1;return(a,c)=>(ce(),xe(Ol,{onResolve:V(r)},{default:bs(()=>[V(o)?(ce(),xe(V(Ym),{key:0,error:V(o)},null,8,["error"])):V(i)?(ce(),xe(V(t),{key:1,context:V(i)},null,8,["context"])):V(s)?(ce(),xe(Jl(V(s)),{key:2})):(ce(),xe(V(Gm),{key:3}))]),_:1},8,["onResolve"]))}};globalThis.$fetch||(globalThis.$fetch=kf.create({baseURL:Nf()}));let ai;{let e;ai=async function(){var o,i;if(e)return e;const r=!!((o=window.__NUXT__)!=null&&o.serverRendered||((i=document.getElementById("__NUXT_DATA__"))==null?void 0:i.dataset.ssr)==="true")?Ju(ii):zu(ii),s=Xf({vueApp:r});try{await Qf(s,Ih)}catch(a){await s.callHook("app:error",a),s.payload.error=s.payload.error||a}try{await s.hooks.callHook("app:created",r),await s.hooks.callHook("app:beforeMount",r),r.mount("#"+Zd),await s.hooks.callHook("app:mounted",r),await Yn()}catch(a){await s.callHook("app:error",a),s.payload.error=s.payload.error||a}return r},e=ai().catch(t=>{console.error("Error while mounting app:",t)})}export{de as a,Wi as b,Tu as c,_t as d,Au as e,Qm as f,ga as g,nr as h,ya as i,Yd as j,ce as k,Xe as l,X as m,fh as n,Ul as o,un as p,ie as q,he as r,bs as s,Le as t,rr as u,Cs as v,Vr as w,Xm as x,Zm as y};
