function os(e,t){const n=Object.create(null),r=e.split(",");for(let s=0;s<r.length;s++)n[r[s]]=!0;return t?s=>!!n[s.toLowerCase()]:s=>!!n[s]}const se={},At=[],Pe=()=>{},Ic=()=>!1,Tc=/^on[^a-z]/,cn=e=>Tc.test(e),is=e=>e.startsWith("onUpdate:"),fe=Object.assign,as=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},Ac=Object.prototype.hasOwnProperty,V=(e,t)=>Ac.call(e,t),N=Array.isArray,Ct=e=>Vn(e)==="[object Map]",ci=e=>Vn(e)==="[object Set]",F=e=>typeof e=="function",oe=e=>typeof e=="string",cs=e=>typeof e=="symbol",ne=e=>e!==null&&typeof e=="object",li=e=>ne(e)&&F(e.then)&&F(e.catch),ui=Object.prototype.toString,Vn=e=>ui.call(e),Cc=e=>Vn(e).slice(8,-1),fi=e=>Vn(e)==="[object Object]",ls=e=>oe(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,zt=os(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),qn=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},Rc=/-(\w)/g,Le=qn(e=>e.replace(Rc,(t,n)=>n?n.toUpperCase():"")),Hc=/\B([A-Z])/g,Dt=qn(e=>e.replace(Hc,"-$1").toLowerCase()),zn=qn(e=>e.charAt(0).toUpperCase()+e.slice(1)),ur=qn(e=>e?`on${zn(e)}`:""),en=(e,t)=>!Object.is(e,t),fr=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},Rn=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},Sc=e=>{const t=parseFloat(e);return isNaN(t)?e:t},xc=e=>{const t=oe(e)?Number(e):NaN;return isNaN(t)?e:t};let qs;const Or=()=>qs||(qs=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Jn(e){if(N(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],s=oe(r)?Mc(r):Jn(r);if(s)for(const o in s)t[o]=s[o]}return t}else{if(oe(e))return e;if(ne(e))return e}}const Oc=/;(?![^(]*\))/g,Pc=/:([^]+)/,$c=/\/\*[^]*?\*\//g;function Mc(e){const t={};return e.replace($c,"").split(Oc).forEach(n=>{if(n){const r=n.split(Pc);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function ln(e){let t="";if(oe(e))t=e;else if(N(e))for(let n=0;n<e.length;n++){const r=ln(e[n]);r&&(t+=r+" ")}else if(ne(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}function kc(e){if(!e)return null;let{class:t,style:n}=e;return t&&!oe(t)&&(e.class=ln(t)),n&&(e.style=Jn(n)),e}const Dc="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Nc=os(Dc);function di(e){return!!e||e===""}const Be=e=>oe(e)?e:e==null?"":N(e)||ne(e)&&(e.toString===ui||!F(e.toString))?JSON.stringify(e,hi,2):String(e),hi=(e,t)=>t&&t.__v_isRef?hi(e,t.value):Ct(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,s])=>(n[`${r} =>`]=s,n),{})}:ci(t)?{[`Set(${t.size})`]:[...t.values()]}:ne(t)&&!N(t)&&!fi(t)?String(t):t;let Se;class Bc{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Se,!t&&Se&&(this.index=(Se.scopes||(Se.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const n=Se;try{return Se=this,t()}finally{Se=n}}}on(){Se=this}off(){Se=this.parent}stop(t){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function Lc(e,t=Se){t&&t.active&&t.effects.push(e)}function Fc(){return Se}const us=e=>{const t=new Set(e);return t.w=0,t.n=0,t},pi=e=>(e.w&nt)>0,gi=e=>(e.n&nt)>0,jc=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=nt},Uc=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const s=t[r];pi(s)&&!gi(s)?s.delete(e):t[n++]=s,s.w&=~nt,s.n&=~nt}t.length=n}},Hn=new WeakMap;let Vt=0,nt=1;const Pr=30;let xe;const dt=Symbol(""),$r=Symbol("");class fs{constructor(t,n=null,r){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Lc(this,r)}run(){if(!this.active)return this.fn();let t=xe,n=Ge;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=xe,xe=this,Ge=!0,nt=1<<++Vt,Vt<=Pr?jc(this):zs(this),this.fn()}finally{Vt<=Pr&&Uc(this),nt=1<<--Vt,xe=this.parent,Ge=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){xe===this?this.deferStop=!0:this.active&&(zs(this),this.onStop&&this.onStop(),this.active=!1)}}function zs(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let Ge=!0;const mi=[];function Nt(){mi.push(Ge),Ge=!1}function Bt(){const e=mi.pop();Ge=e===void 0?!0:e}function _e(e,t,n){if(Ge&&xe){let r=Hn.get(e);r||Hn.set(e,r=new Map);let s=r.get(n);s||r.set(n,s=us()),yi(s)}}function yi(e,t){let n=!1;Vt<=Pr?gi(e)||(e.n|=nt,n=!pi(e)):n=!e.has(xe),n&&(e.add(xe),xe.deps.push(e))}function We(e,t,n,r,s,o){const i=Hn.get(e);if(!i)return;let a=[];if(t==="clear")a=[...i.values()];else if(n==="length"&&N(e)){const c=Number(r);i.forEach((l,d)=>{(d==="length"||d>=c)&&a.push(l)})}else switch(n!==void 0&&a.push(i.get(n)),t){case"add":N(e)?ls(n)&&a.push(i.get("length")):(a.push(i.get(dt)),Ct(e)&&a.push(i.get($r)));break;case"delete":N(e)||(a.push(i.get(dt)),Ct(e)&&a.push(i.get($r)));break;case"set":Ct(e)&&a.push(i.get(dt));break}if(a.length===1)a[0]&&Mr(a[0]);else{const c=[];for(const l of a)l&&c.push(...l);Mr(us(c))}}function Mr(e,t){const n=N(e)?e:[...e];for(const r of n)r.computed&&Js(r);for(const r of n)r.computed||Js(r)}function Js(e,t){(e!==xe||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}function Wc(e,t){var n;return(n=Hn.get(e))==null?void 0:n.get(t)}const Kc=os("__proto__,__v_isRef,__isVue"),bi=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(cs)),Vc=ds(),qc=ds(!1,!0),zc=ds(!0),Gs=Jc();function Jc(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=q(this);for(let o=0,i=this.length;o<i;o++)_e(r,"get",o+"");const s=r[t](...n);return s===-1||s===!1?r[t](...n.map(q)):s}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){Nt();const r=q(this)[t].apply(this,n);return Bt(),r}}),e}function Gc(e){const t=q(this);return _e(t,"has",e),t.hasOwnProperty(e)}function ds(e=!1,t=!1){return function(r,s,o){if(s==="__v_isReactive")return!e;if(s==="__v_isReadonly")return e;if(s==="__v_isShallow")return t;if(s==="__v_raw"&&o===(e?t?fl:Ii:t?Ei:vi).get(r))return r;const i=N(r);if(!e){if(i&&V(Gs,s))return Reflect.get(Gs,s,o);if(s==="hasOwnProperty")return Gc}const a=Reflect.get(r,s,o);return(cs(s)?bi.has(s):Kc(s))||(e||_e(r,"get",s),t)?a:ue(a)?i&&ls(s)?a:a.value:ne(a)?e?Ai(a):rt(a):a}}const Yc=_i(),Xc=_i(!0);function _i(e=!1){return function(n,r,s,o){let i=n[r];if(pt(i)&&ue(i)&&!ue(s))return!1;if(!e&&(!Sn(s)&&!pt(s)&&(i=q(i),s=q(s)),!N(n)&&ue(i)&&!ue(s)))return i.value=s,!0;const a=N(n)&&ls(r)?Number(r)<n.length:V(n,r),c=Reflect.set(n,r,s,o);return n===q(o)&&(a?en(s,i)&&We(n,"set",r,s):We(n,"add",r,s)),c}}function Zc(e,t){const n=V(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&n&&We(e,"delete",t,void 0),r}function Qc(e,t){const n=Reflect.has(e,t);return(!cs(t)||!bi.has(t))&&_e(e,"has",t),n}function el(e){return _e(e,"iterate",N(e)?"length":dt),Reflect.ownKeys(e)}const wi={get:Vc,set:Yc,deleteProperty:Zc,has:Qc,ownKeys:el},tl={get:zc,set(e,t){return!0},deleteProperty(e,t){return!0}},nl=fe({},wi,{get:qc,set:Xc}),hs=e=>e,Gn=e=>Reflect.getPrototypeOf(e);function hn(e,t,n=!1,r=!1){e=e.__v_raw;const s=q(e),o=q(t);n||(t!==o&&_e(s,"get",t),_e(s,"get",o));const{has:i}=Gn(s),a=r?hs:n?ms:tn;if(i.call(s,t))return a(e.get(t));if(i.call(s,o))return a(e.get(o));e!==s&&e.get(t)}function pn(e,t=!1){const n=this.__v_raw,r=q(n),s=q(e);return t||(e!==s&&_e(r,"has",e),_e(r,"has",s)),e===s?n.has(e):n.has(e)||n.has(s)}function gn(e,t=!1){return e=e.__v_raw,!t&&_e(q(e),"iterate",dt),Reflect.get(e,"size",e)}function Ys(e){e=q(e);const t=q(this);return Gn(t).has.call(t,e)||(t.add(e),We(t,"add",e,e)),this}function Xs(e,t){t=q(t);const n=q(this),{has:r,get:s}=Gn(n);let o=r.call(n,e);o||(e=q(e),o=r.call(n,e));const i=s.call(n,e);return n.set(e,t),o?en(t,i)&&We(n,"set",e,t):We(n,"add",e,t),this}function Zs(e){const t=q(this),{has:n,get:r}=Gn(t);let s=n.call(t,e);s||(e=q(e),s=n.call(t,e)),r&&r.call(t,e);const o=t.delete(e);return s&&We(t,"delete",e,void 0),o}function Qs(){const e=q(this),t=e.size!==0,n=e.clear();return t&&We(e,"clear",void 0,void 0),n}function mn(e,t){return function(r,s){const o=this,i=o.__v_raw,a=q(i),c=t?hs:e?ms:tn;return!e&&_e(a,"iterate",dt),i.forEach((l,d)=>r.call(s,c(l),c(d),o))}}function yn(e,t,n){return function(...r){const s=this.__v_raw,o=q(s),i=Ct(o),a=e==="entries"||e===Symbol.iterator&&i,c=e==="keys"&&i,l=s[e](...r),d=n?hs:t?ms:tn;return!t&&_e(o,"iterate",c?$r:dt),{next(){const{value:f,done:p}=l.next();return p?{value:f,done:p}:{value:a?[d(f[0]),d(f[1])]:d(f),done:p}},[Symbol.iterator](){return this}}}}function Ve(e){return function(...t){return e==="delete"?!1:this}}function rl(){const e={get(o){return hn(this,o)},get size(){return gn(this)},has:pn,add:Ys,set:Xs,delete:Zs,clear:Qs,forEach:mn(!1,!1)},t={get(o){return hn(this,o,!1,!0)},get size(){return gn(this)},has:pn,add:Ys,set:Xs,delete:Zs,clear:Qs,forEach:mn(!1,!0)},n={get(o){return hn(this,o,!0)},get size(){return gn(this,!0)},has(o){return pn.call(this,o,!0)},add:Ve("add"),set:Ve("set"),delete:Ve("delete"),clear:Ve("clear"),forEach:mn(!0,!1)},r={get(o){return hn(this,o,!0,!0)},get size(){return gn(this,!0)},has(o){return pn.call(this,o,!0)},add:Ve("add"),set:Ve("set"),delete:Ve("delete"),clear:Ve("clear"),forEach:mn(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(o=>{e[o]=yn(o,!1,!1),n[o]=yn(o,!0,!1),t[o]=yn(o,!1,!0),r[o]=yn(o,!0,!0)}),[e,n,t,r]}const[sl,ol,il,al]=rl();function ps(e,t){const n=t?e?al:il:e?ol:sl;return(r,s,o)=>s==="__v_isReactive"?!e:s==="__v_isReadonly"?e:s==="__v_raw"?r:Reflect.get(V(n,s)&&s in r?n:r,s,o)}const cl={get:ps(!1,!1)},ll={get:ps(!1,!0)},ul={get:ps(!0,!1)},vi=new WeakMap,Ei=new WeakMap,Ii=new WeakMap,fl=new WeakMap;function dl(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function hl(e){return e.__v_skip||!Object.isExtensible(e)?0:dl(Cc(e))}function rt(e){return pt(e)?e:gs(e,!1,wi,cl,vi)}function Ti(e){return gs(e,!1,nl,ll,Ei)}function Ai(e){return gs(e,!0,tl,ul,Ii)}function gs(e,t,n,r,s){if(!ne(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const o=s.get(e);if(o)return o;const i=hl(e);if(i===0)return e;const a=new Proxy(e,i===2?r:n);return s.set(e,a),a}function Rt(e){return pt(e)?Rt(e.__v_raw):!!(e&&e.__v_isReactive)}function pt(e){return!!(e&&e.__v_isReadonly)}function Sn(e){return!!(e&&e.__v_isShallow)}function Ci(e){return Rt(e)||pt(e)}function q(e){const t=e&&e.__v_raw;return t?q(t):e}function Ri(e){return Rn(e,"__v_skip",!0),e}const tn=e=>ne(e)?rt(e):e,ms=e=>ne(e)?Ai(e):e;function Hi(e){Ge&&xe&&(e=q(e),yi(e.dep||(e.dep=us())))}function Si(e,t){e=q(e);const n=e.dep;n&&Mr(n)}function ue(e){return!!(e&&e.__v_isRef===!0)}function he(e){return xi(e,!1)}function eo(e){return xi(e,!0)}function xi(e,t){return ue(e)?e:new pl(e,t)}class pl{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:q(t),this._value=n?t:tn(t)}get value(){return Hi(this),this._value}set value(t){const n=this.__v_isShallow||Sn(t)||pt(t);t=n?t:q(t),en(t,this._rawValue)&&(this._rawValue=t,this._value=n?t:tn(t),Si(this))}}function K(e){return ue(e)?e.value:e}const gl={get:(e,t,n)=>K(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const s=e[t];return ue(s)&&!ue(n)?(s.value=n,!0):Reflect.set(e,t,n,r)}};function Oi(e){return Rt(e)?e:new Proxy(e,gl)}class ml{constructor(t,n,r){this._object=t,this._key=n,this._defaultValue=r,this.__v_isRef=!0}get value(){const t=this._object[this._key];return t===void 0?this._defaultValue:t}set value(t){this._object[this._key]=t}get dep(){return Wc(q(this._object),this._key)}}class yl{constructor(t){this._getter=t,this.__v_isRef=!0,this.__v_isReadonly=!0}get value(){return this._getter()}}function Pi(e,t,n){return ue(e)?e:F(e)?new yl(e):ne(e)&&arguments.length>1?bl(e,t,n):he(e)}function bl(e,t,n){const r=e[t];return ue(r)?r:new ml(e,t,n)}class _l{constructor(t,n,r,s){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new fs(t,()=>{this._dirty||(this._dirty=!0,Si(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const t=q(this);return Hi(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function wl(e,t,n=!1){let r,s;const o=F(e);return o?(r=e,s=Pe):(r=e.get,s=e.set),new _l(r,s,o||!s,n)}function Ye(e,t,n,r){let s;try{s=r?e(...r):e()}catch(o){Lt(o,t,n)}return s}function $e(e,t,n,r){if(F(e)){const o=Ye(e,t,n,r);return o&&li(o)&&o.catch(i=>{Lt(i,t,n)}),o}const s=[];for(let o=0;o<e.length;o++)s.push($e(e[o],t,n,r));return s}function Lt(e,t,n,r=!0){const s=t?t.vnode:null;if(t){let o=t.parent;const i=t.proxy,a=n;for(;o;){const l=o.ec;if(l){for(let d=0;d<l.length;d++)if(l[d](e,i,a)===!1)return}o=o.parent}const c=t.appContext.config.errorHandler;if(c){Ye(c,null,10,[e,i,a]);return}}vl(e,n,s,r)}function vl(e,t,n,r=!0){console.error(e)}let nn=!1,kr=!1;const pe=[];let Ne=0;const Ht=[];let Ue=null,lt=0;const $i=Promise.resolve();let ys=null;function Yn(e){const t=ys||$i;return e?t.then(this?e.bind(this):e):t}function El(e){let t=Ne+1,n=pe.length;for(;t<n;){const r=t+n>>>1;rn(pe[r])<e?t=r+1:n=r}return t}function Xn(e){(!pe.length||!pe.includes(e,nn&&e.allowRecurse?Ne+1:Ne))&&(e.id==null?pe.push(e):pe.splice(El(e.id),0,e),Mi())}function Mi(){!nn&&!kr&&(kr=!0,ys=$i.then(Di))}function Il(e){const t=pe.indexOf(e);t>Ne&&pe.splice(t,1)}function ki(e){N(e)?Ht.push(...e):(!Ue||!Ue.includes(e,e.allowRecurse?lt+1:lt))&&Ht.push(e),Mi()}function to(e,t=nn?Ne+1:0){for(;t<pe.length;t++){const n=pe[t];n&&n.pre&&(pe.splice(t,1),t--,n())}}function xn(e){if(Ht.length){const t=[...new Set(Ht)];if(Ht.length=0,Ue){Ue.push(...t);return}for(Ue=t,Ue.sort((n,r)=>rn(n)-rn(r)),lt=0;lt<Ue.length;lt++)Ue[lt]();Ue=null,lt=0}}const rn=e=>e.id==null?1/0:e.id,Tl=(e,t)=>{const n=rn(e)-rn(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function Di(e){kr=!1,nn=!0,pe.sort(Tl);const t=Pe;try{for(Ne=0;Ne<pe.length;Ne++){const n=pe[Ne];n&&n.active!==!1&&Ye(n,null,14)}}finally{Ne=0,pe.length=0,xn(),nn=!1,ys=null,(pe.length||Ht.length)&&Di()}}function Al(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||se;let s=n;const o=t.startsWith("update:"),i=o&&t.slice(7);if(i&&i in r){const d=`${i==="modelValue"?"model":i}Modifiers`,{number:f,trim:p}=r[d]||se;p&&(s=n.map(y=>oe(y)?y.trim():y)),f&&(s=n.map(Sc))}let a,c=r[a=ur(t)]||r[a=ur(Le(t))];!c&&o&&(c=r[a=ur(Dt(t))]),c&&$e(c,e,6,s);const l=r[a+"Once"];if(l){if(!e.emitted)e.emitted={};else if(e.emitted[a])return;e.emitted[a]=!0,$e(l,e,6,s)}}function Ni(e,t,n=!1){const r=t.emitsCache,s=r.get(e);if(s!==void 0)return s;const o=e.emits;let i={},a=!1;if(!F(e)){const c=l=>{const d=Ni(l,t,!0);d&&(a=!0,fe(i,d))};!n&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}return!o&&!a?(ne(e)&&r.set(e,null),null):(N(o)?o.forEach(c=>i[c]=null):fe(i,o),ne(e)&&r.set(e,i),i)}function Zn(e,t){return!e||!cn(t)?!1:(t=t.slice(2).replace(/Once$/,""),V(e,t[0].toLowerCase()+t.slice(1))||V(e,Dt(t))||V(e,t))}let Ie=null,Qn=null;function On(e){const t=Ie;return Ie=e,Qn=e&&e.type.__scopeId||null,t}function Xm(e){Qn=e}function Zm(){Qn=null}function bs(e,t=Ie,n){if(!t||e._n)return e;const r=(...s)=>{r._d&&go(-1);const o=On(t);let i;try{i=e(...s)}finally{On(o),r._d&&go(1)}return i};return r._n=!0,r._c=!0,r._d=!0,r}function dr(e){const{type:t,vnode:n,proxy:r,withProxy:s,props:o,propsOptions:[i],slots:a,attrs:c,emit:l,render:d,renderCache:f,data:p,setupState:y,ctx:g,inheritAttrs:T}=e;let D,_;const b=On(e);try{if(n.shapeFlag&4){const I=s||r;D=Ce(d.call(I,I,f,o,y,p,g)),_=c}else{const I=t;D=Ce(I.length>1?I(o,{attrs:c,slots:a,emit:l}):I(o,null)),_=t.props?c:Rl(c)}}catch(I){Xt.length=0,Lt(I,e,1),D=ie(Fe)}let M=D;if(_&&T!==!1){const I=Object.keys(_),{shapeFlag:O}=M;I.length&&O&7&&(i&&I.some(is)&&(_=Hl(_,i)),M=$t(M,_))}return n.dirs&&(M=$t(M),M.dirs=M.dirs?M.dirs.concat(n.dirs):n.dirs),n.transition&&(M.transition=n.transition),D=M,On(b),D}function Cl(e){let t;for(let n=0;n<e.length;n++){const r=e[n];if(Mn(r)){if(r.type!==Fe||r.children==="v-if"){if(t)return;t=r}}else return}return t}const Rl=e=>{let t;for(const n in e)(n==="class"||n==="style"||cn(n))&&((t||(t={}))[n]=e[n]);return t},Hl=(e,t)=>{const n={};for(const r in e)(!is(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function Sl(e,t,n){const{props:r,children:s,component:o}=e,{props:i,children:a,patchFlag:c}=t,l=o.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?no(r,i,l):!!i;if(c&8){const d=t.dynamicProps;for(let f=0;f<d.length;f++){const p=d[f];if(i[p]!==r[p]&&!Zn(l,p))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===i?!1:r?i?no(r,i,l):!0:!!i;return!1}function no(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let s=0;s<r.length;s++){const o=r[s];if(t[o]!==e[o]&&!Zn(n,o))return!0}return!1}function _s({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const xl=e=>e.__isSuspense,Ol={name:"Suspense",__isSuspense:!0,process(e,t,n,r,s,o,i,a,c,l){e==null?$l(t,n,r,s,o,i,a,c,l):Ml(e,t,n,r,s,i,a,c,l)},hydrate:kl,create:ws,normalize:Dl},Pl=Ol;function sn(e,t){const n=e.props&&e.props[t];F(n)&&n()}function $l(e,t,n,r,s,o,i,a,c){const{p:l,o:{createElement:d}}=c,f=d("div"),p=e.suspense=ws(e,s,r,t,f,n,o,i,a,c);l(null,p.pendingBranch=e.ssContent,f,null,r,p,o,i),p.deps>0?(sn(e,"onPending"),sn(e,"onFallback"),l(null,e.ssFallback,t,n,r,null,o,i),St(p,e.ssFallback)):p.resolve(!1,!0)}function Ml(e,t,n,r,s,o,i,a,{p:c,um:l,o:{createElement:d}}){const f=t.suspense=e.suspense;f.vnode=t,t.el=e.el;const p=t.ssContent,y=t.ssFallback,{activeBranch:g,pendingBranch:T,isInFallback:D,isHydrating:_}=f;if(T)f.pendingBranch=p,Je(p,T)?(c(T,p,f.hiddenContainer,null,s,f,o,i,a),f.deps<=0?f.resolve():D&&(c(g,y,n,r,s,null,o,i,a),St(f,y))):(f.pendingId++,_?(f.isHydrating=!1,f.activeBranch=T):l(T,s,f),f.deps=0,f.effects.length=0,f.hiddenContainer=d("div"),D?(c(null,p,f.hiddenContainer,null,s,f,o,i,a),f.deps<=0?f.resolve():(c(g,y,n,r,s,null,o,i,a),St(f,y))):g&&Je(p,g)?(c(g,p,n,r,s,f,o,i,a),f.resolve(!0)):(c(null,p,f.hiddenContainer,null,s,f,o,i,a),f.deps<=0&&f.resolve()));else if(g&&Je(p,g))c(g,p,n,r,s,f,o,i,a),St(f,p);else if(sn(t,"onPending"),f.pendingBranch=p,f.pendingId++,c(null,p,f.hiddenContainer,null,s,f,o,i,a),f.deps<=0)f.resolve();else{const{timeout:b,pendingId:M}=f;b>0?setTimeout(()=>{f.pendingId===M&&f.fallback(y)},b):b===0&&f.fallback(y)}}function ws(e,t,n,r,s,o,i,a,c,l,d=!1){const{p:f,m:p,um:y,n:g,o:{parentNode:T,remove:D}}=l;let _;const b=Nl(e);b&&t!=null&&t.pendingBranch&&(_=t.pendingId,t.deps++);const M=e.props?xc(e.props.timeout):void 0,I={vnode:e,parent:t,parentComponent:n,isSVG:i,container:r,hiddenContainer:s,anchor:o,deps:0,pendingId:0,timeout:typeof M=="number"?M:-1,activeBranch:null,pendingBranch:null,isInFallback:!0,isHydrating:d,isUnmounted:!1,effects:[],resolve(O=!1,U=!1){const{vnode:B,activeBranch:S,pendingBranch:j,pendingId:z,effects:J,parentComponent:ge,container:re}=I;if(I.isHydrating)I.isHydrating=!1;else if(!O){const G=S&&j.transition&&j.transition.mode==="out-in";G&&(S.transition.afterLeave=()=>{z===I.pendingId&&p(j,re,Z,0)});let{anchor:Z}=I;S&&(Z=g(S),y(S,ge,I,!0)),G||p(j,re,Z,0)}St(I,j),I.pendingBranch=null,I.isInFallback=!1;let k=I.parent,we=!1;for(;k;){if(k.pendingBranch){k.effects.push(...J),we=!0;break}k=k.parent}we||ki(J),I.effects=[],b&&t&&t.pendingBranch&&_===t.pendingId&&(t.deps--,t.deps===0&&!U&&t.resolve()),sn(B,"onResolve")},fallback(O){if(!I.pendingBranch)return;const{vnode:U,activeBranch:B,parentComponent:S,container:j,isSVG:z}=I;sn(U,"onFallback");const J=g(B),ge=()=>{I.isInFallback&&(f(null,O,j,J,S,null,z,a,c),St(I,O))},re=O.transition&&O.transition.mode==="out-in";re&&(B.transition.afterLeave=ge),I.isInFallback=!0,y(B,S,null,!0),re||ge()},move(O,U,B){I.activeBranch&&p(I.activeBranch,O,U,B),I.container=O},next(){return I.activeBranch&&g(I.activeBranch)},registerDep(O,U){const B=!!I.pendingBranch;B&&I.deps++;const S=O.vnode.el;O.asyncDep.catch(j=>{Lt(j,O,0)}).then(j=>{if(O.isUnmounted||I.isUnmounted||I.pendingId!==O.suspenseId)return;O.asyncResolved=!0;const{vnode:z}=O;Fr(O,j,!1),S&&(z.el=S);const J=!S&&O.subTree.el;U(O,z,T(S||O.subTree.el),S?null:g(O.subTree),I,i,c),J&&D(J),_s(O,z.el),B&&--I.deps===0&&I.resolve()})},unmount(O,U){I.isUnmounted=!0,I.activeBranch&&y(I.activeBranch,n,O,U),I.pendingBranch&&y(I.pendingBranch,n,O,U)}};return I}function kl(e,t,n,r,s,o,i,a,c){const l=t.suspense=ws(t,r,n,e.parentNode,document.createElement("div"),null,s,o,i,a,!0),d=c(e,l.pendingBranch=t.ssContent,n,l,o,i);return l.deps===0&&l.resolve(!1,!0),d}function Dl(e){const{shapeFlag:t,children:n}=e,r=t&32;e.ssContent=ro(r?n.default:n),e.ssFallback=r?ro(n.fallback):ie(Fe)}function ro(e){let t;if(F(e)){const n=Pt&&e._c;n&&(e._d=!1,ce()),e=e(),n&&(e._d=!0,t=Re,ia())}return N(e)&&(e=Cl(e)),e=Ce(e),t&&!e.dynamicChildren&&(e.dynamicChildren=t.filter(n=>n!==e)),e}function Bi(e,t){t&&t.pendingBranch?N(e)?t.effects.push(...e):t.effects.push(e):ki(e)}function St(e,t){e.activeBranch=t;const{vnode:n,parentComponent:r}=e,s=n.el=t.el;r&&r.subTree===n&&(r.vnode.el=s,_s(r,s))}function Nl(e){var t;return((t=e.props)==null?void 0:t.suspensible)!=null&&e.props.suspensible!==!1}function Bl(e,t){return vs(e,null,t)}const bn={};function Jt(e,t,n){return vs(e,t,n)}function vs(e,t,{immediate:n,deep:r,flush:s,onTrack:o,onTrigger:i}=se){var a;const c=Fc()===((a=le)==null?void 0:a.scope)?le:null;let l,d=!1,f=!1;if(ue(e)?(l=()=>e.value,d=Sn(e)):Rt(e)?(l=()=>e,r=!0):N(e)?(f=!0,d=e.some(I=>Rt(I)||Sn(I)),l=()=>e.map(I=>{if(ue(I))return I.value;if(Rt(I))return Tt(I);if(F(I))return Ye(I,c,2)})):F(e)?t?l=()=>Ye(e,c,2):l=()=>{if(!(c&&c.isUnmounted))return p&&p(),$e(e,c,3,[y])}:l=Pe,t&&r){const I=l;l=()=>Tt(I())}let p,y=I=>{p=b.onStop=()=>{Ye(I,c,4)}},g;if(kt)if(y=Pe,t?n&&$e(t,c,3,[l(),f?[]:void 0,y]):l(),s==="sync"){const I=Ru();g=I.__watcherHandles||(I.__watcherHandles=[])}else return Pe;let T=f?new Array(e.length).fill(bn):bn;const D=()=>{if(b.active)if(t){const I=b.run();(r||d||(f?I.some((O,U)=>en(O,T[U])):en(I,T)))&&(p&&p(),$e(t,c,3,[I,T===bn?void 0:f&&T[0]===bn?[]:T,y]),T=I)}else b.run()};D.allowRecurse=!!t;let _;s==="sync"?_=D:s==="post"?_=()=>ye(D,c&&c.suspense):(D.pre=!0,c&&(D.id=c.uid),_=()=>Xn(D));const b=new fs(l,_);t?n?D():T=b.run():s==="post"?ye(b.run.bind(b),c&&c.suspense):b.run();const M=()=>{b.stop(),c&&c.scope&&as(c.scope.effects,b)};return g&&g.push(M),M}function Ll(e,t,n){const r=this.proxy,s=oe(e)?e.includes(".")?Li(r,e):()=>r[e]:e.bind(r,r);let o;F(t)?o=t:(o=t.handler,n=t);const i=le;Mt(this);const a=vs(s,o.bind(r),n);return i?Mt(i):ht(),a}function Li(e,t){const n=t.split(".");return()=>{let r=e;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function Tt(e,t){if(!ne(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),ue(e))Tt(e.value,t);else if(N(e))for(let n=0;n<e.length;n++)Tt(e[n],t);else if(ci(e)||Ct(e))e.forEach(n=>{Tt(n,t)});else if(fi(e))for(const n in e)Tt(e[n],t);return e}function De(e,t,n,r){const s=e.dirs,o=t&&t.dirs;for(let i=0;i<s.length;i++){const a=s[i];o&&(a.oldValue=o[i].value);let c=a.dir[r];c&&(Nt(),$e(c,n,8,[e.el,a,e,t]),Bt())}}function _t(e,t){return F(e)?(()=>fe({name:e.name},t,{setup:e}))():e}const Gt=e=>!!e.type.__asyncLoader;function so(e){F(e)&&(e={loader:e});const{loader:t,loadingComponent:n,errorComponent:r,delay:s=200,timeout:o,suspensible:i=!0,onError:a}=e;let c=null,l,d=0;const f=()=>(d++,c=null,p()),p=()=>{let y;return c||(y=c=t().catch(g=>{if(g=g instanceof Error?g:new Error(String(g)),a)return new Promise((T,D)=>{a(g,()=>T(f()),()=>D(g),d+1)});throw g}).then(g=>y!==c&&c?c:(g&&(g.__esModule||g[Symbol.toStringTag]==="Module")&&(g=g.default),l=g,g)))};return _t({name:"AsyncComponentWrapper",__asyncLoader:p,get __asyncResolved(){return l},setup(){const y=le;if(l)return()=>hr(l,y);const g=b=>{c=null,Lt(b,y,13,!r)};if(i&&y.suspense||kt)return p().then(b=>()=>hr(b,y)).catch(b=>(g(b),()=>r?ie(r,{error:b}):null));const T=he(!1),D=he(),_=he(!!s);return s&&setTimeout(()=>{_.value=!1},s),o!=null&&setTimeout(()=>{if(!T.value&&!D.value){const b=new Error(`Async component timed out after ${o}ms.`);g(b),D.value=b}},o),p().then(()=>{T.value=!0,y.parent&&Es(y.parent.vnode)&&Xn(y.parent.update)}).catch(b=>{g(b),D.value=b}),()=>{if(T.value&&l)return hr(l,y);if(D.value&&r)return ie(r,{error:D.value});if(n&&!_.value)return ie(n)}}})}function hr(e,t){const{ref:n,props:r,children:s,ce:o}=t.vnode,i=ie(e,r,s);return i.ref=n,i.ce=o,delete t.vnode.ce,i}const Es=e=>e.type.__isKeepAlive;function Fi(e,t){Ui(e,"a",t)}function ji(e,t){Ui(e,"da",t)}function Ui(e,t,n=le){const r=e.__wdc||(e.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return e()});if(er(t,r,n),n){let s=n.parent;for(;s&&s.parent;)Es(s.parent.vnode)&&Fl(r,t,n,s),s=s.parent}}function Fl(e,t,n,r){const s=er(t,e,r,!0);Ki(()=>{as(r[t],s)},n)}function er(e,t,n=le,r=!1){if(n){const s=n[e]||(n[e]=[]),o=t.__weh||(t.__weh=(...i)=>{if(n.isUnmounted)return;Nt(),Mt(n);const a=$e(t,n,e,i);return ht(),Bt(),a});return r?s.unshift(o):s.push(o),o}}const Ke=e=>(t,n=le)=>(!kt||e==="sp")&&er(e,(...r)=>t(...r),n),jl=Ke("bm"),Ul=Ke("m"),Wl=Ke("bu"),Kl=Ke("u"),Wi=Ke("bum"),Ki=Ke("um"),Vl=Ke("sp"),ql=Ke("rtg"),zl=Ke("rtc");function Vi(e,t=le){er("ec",e,t)}const Is="components";function Qm(e,t){return zi(Is,e,!0,t)||e}const qi=Symbol.for("v-ndc");function Jl(e){return oe(e)?zi(Is,e,!1)||e:e||qi}function zi(e,t,n=!0,r=!1){const s=Ie||le;if(s){const o=s.type;if(e===Is){const a=Eu(o,!1);if(a&&(a===t||a===Le(t)||a===zn(Le(t))))return o}const i=oo(s[e]||o[e],t)||oo(s.appContext[e],t);return!i&&r?o:i}}function oo(e,t){return e&&(e[t]||e[Le(t)]||e[zn(Le(t))])}function Ji(e,t,n,r){let s;const o=n&&n[r];if(N(e)||oe(e)){s=new Array(e.length);for(let i=0,a=e.length;i<a;i++)s[i]=t(e[i],i,void 0,o&&o[i])}else if(typeof e=="number"){s=new Array(e);for(let i=0;i<e;i++)s[i]=t(i+1,i,void 0,o&&o[i])}else if(ne(e))if(e[Symbol.iterator])s=Array.from(e,(i,a)=>t(i,a,void 0,o&&o[a]));else{const i=Object.keys(e);s=new Array(i.length);for(let a=0,c=i.length;a<c;a++){const l=i[a];s[a]=t(e[l],l,a,o&&o[a])}}else s=[];return n&&(n[r]=s),s}const Dr=e=>e?ua(e)?xs(e)||e.proxy:Dr(e.parent):null,Yt=fe(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Dr(e.parent),$root:e=>Dr(e.root),$emit:e=>e.emit,$options:e=>Ts(e),$forceUpdate:e=>e.f||(e.f=()=>Xn(e.update)),$nextTick:e=>e.n||(e.n=Yn.bind(e.proxy)),$watch:e=>Ll.bind(e)}),pr=(e,t)=>e!==se&&!e.__isScriptSetup&&V(e,t),Gl={get({_:e},t){const{ctx:n,setupState:r,data:s,props:o,accessCache:i,type:a,appContext:c}=e;let l;if(t[0]!=="$"){const y=i[t];if(y!==void 0)switch(y){case 1:return r[t];case 2:return s[t];case 4:return n[t];case 3:return o[t]}else{if(pr(r,t))return i[t]=1,r[t];if(s!==se&&V(s,t))return i[t]=2,s[t];if((l=e.propsOptions[0])&&V(l,t))return i[t]=3,o[t];if(n!==se&&V(n,t))return i[t]=4,n[t];Nr&&(i[t]=0)}}const d=Yt[t];let f,p;if(d)return t==="$attrs"&&_e(e,"get",t),d(e);if((f=a.__cssModules)&&(f=f[t]))return f;if(n!==se&&V(n,t))return i[t]=4,n[t];if(p=c.config.globalProperties,V(p,t))return p[t]},set({_:e},t,n){const{data:r,setupState:s,ctx:o}=e;return pr(s,t)?(s[t]=n,!0):r!==se&&V(r,t)?(r[t]=n,!0):V(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(o[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:s,propsOptions:o}},i){let a;return!!n[i]||e!==se&&V(e,i)||pr(t,i)||(a=o[0])&&V(a,i)||V(r,i)||V(Yt,i)||V(s.config.globalProperties,i)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:V(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function io(e){return N(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let Nr=!0;function Yl(e){const t=Ts(e),n=e.proxy,r=e.ctx;Nr=!1,t.beforeCreate&&ao(t.beforeCreate,e,"bc");const{data:s,computed:o,methods:i,watch:a,provide:c,inject:l,created:d,beforeMount:f,mounted:p,beforeUpdate:y,updated:g,activated:T,deactivated:D,beforeDestroy:_,beforeUnmount:b,destroyed:M,unmounted:I,render:O,renderTracked:U,renderTriggered:B,errorCaptured:S,serverPrefetch:j,expose:z,inheritAttrs:J,components:ge,directives:re,filters:k}=t;if(l&&Xl(l,r,null),i)for(const Z in i){const Q=i[Z];F(Q)&&(r[Z]=Q.bind(n))}if(s){const Z=s.call(n,n);ne(Z)&&(e.data=rt(Z))}if(Nr=!0,o)for(const Z in o){const Q=o[Z],ot=F(Q)?Q.bind(n,n):F(Q.get)?Q.get.bind(n,n):Pe,fn=!F(Q)&&F(Q.set)?Q.set.bind(n):Pe,it=Tu({get:ot,set:fn});Object.defineProperty(r,Z,{enumerable:!0,configurable:!0,get:()=>it.value,set:Me=>it.value=Me})}if(a)for(const Z in a)Gi(a[Z],r,n,Z);if(c){const Z=F(c)?c.call(n):c;Reflect.ownKeys(Z).forEach(Q=>{Xi(Q,Z[Q])})}d&&ao(d,e,"c");function G(Z,Q){N(Q)?Q.forEach(ot=>Z(ot.bind(n))):Q&&Z(Q.bind(n))}if(G(jl,f),G(Ul,p),G(Wl,y),G(Kl,g),G(Fi,T),G(ji,D),G(Vi,S),G(zl,U),G(ql,B),G(Wi,b),G(Ki,I),G(Vl,j),N(z))if(z.length){const Z=e.exposed||(e.exposed={});z.forEach(Q=>{Object.defineProperty(Z,Q,{get:()=>n[Q],set:ot=>n[Q]=ot})})}else e.exposed||(e.exposed={});O&&e.render===Pe&&(e.render=O),J!=null&&(e.inheritAttrs=J),ge&&(e.components=ge),re&&(e.directives=re)}function Xl(e,t,n=Pe){N(e)&&(e=Br(e));for(const r in e){const s=e[r];let o;ne(s)?"default"in s?o=xt(s.from||r,s.default,!0):o=xt(s.from||r):o=xt(s),ue(o)?Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>o.value,set:i=>o.value=i}):t[r]=o}}function ao(e,t,n){$e(N(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function Gi(e,t,n,r){const s=r.includes(".")?Li(n,r):()=>n[r];if(oe(e)){const o=t[e];F(o)&&Jt(s,o)}else if(F(e))Jt(s,e.bind(n));else if(ne(e))if(N(e))e.forEach(o=>Gi(o,t,n,r));else{const o=F(e.handler)?e.handler.bind(n):t[e.handler];F(o)&&Jt(s,o,e)}}function Ts(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:s,optionsCache:o,config:{optionMergeStrategies:i}}=e.appContext,a=o.get(t);let c;return a?c=a:!s.length&&!n&&!r?c=t:(c={},s.length&&s.forEach(l=>Pn(c,l,i,!0)),Pn(c,t,i)),ne(t)&&o.set(t,c),c}function Pn(e,t,n,r=!1){const{mixins:s,extends:o}=t;o&&Pn(e,o,n,!0),s&&s.forEach(i=>Pn(e,i,n,!0));for(const i in t)if(!(r&&i==="expose")){const a=Zl[i]||n&&n[i];e[i]=a?a(e[i],t[i]):t[i]}return e}const Zl={data:co,props:lo,emits:lo,methods:qt,computed:qt,beforeCreate:me,created:me,beforeMount:me,mounted:me,beforeUpdate:me,updated:me,beforeDestroy:me,beforeUnmount:me,destroyed:me,unmounted:me,activated:me,deactivated:me,errorCaptured:me,serverPrefetch:me,components:qt,directives:qt,watch:eu,provide:co,inject:Ql};function co(e,t){return t?e?function(){return fe(F(e)?e.call(this,this):e,F(t)?t.call(this,this):t)}:t:e}function Ql(e,t){return qt(Br(e),Br(t))}function Br(e){if(N(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function me(e,t){return e?[...new Set([].concat(e,t))]:t}function qt(e,t){return e?fe(Object.create(null),e,t):t}function lo(e,t){return e?N(e)&&N(t)?[...new Set([...e,...t])]:fe(Object.create(null),io(e),io(t??{})):t}function eu(e,t){if(!e)return t;if(!t)return e;const n=fe(Object.create(null),e);for(const r in t)n[r]=me(e[r],t[r]);return n}function Yi(){return{app:null,config:{isNativeTag:Ic,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let tu=0;function nu(e,t){return function(r,s=null){F(r)||(r=fe({},r)),s!=null&&!ne(s)&&(s=null);const o=Yi(),i=new Set;let a=!1;const c=o.app={_uid:tu++,_component:r,_props:s,_container:null,_context:o,_instance:null,version:da,get config(){return o.config},set config(l){},use(l,...d){return i.has(l)||(l&&F(l.install)?(i.add(l),l.install(c,...d)):F(l)&&(i.add(l),l(c,...d))),c},mixin(l){return o.mixins.includes(l)||o.mixins.push(l),c},component(l,d){return d?(o.components[l]=d,c):o.components[l]},directive(l,d){return d?(o.directives[l]=d,c):o.directives[l]},mount(l,d,f){if(!a){const p=ie(r,s);return p.appContext=o,d&&t?t(p,l):e(p,l,f),a=!0,c._container=l,l.__vue_app__=c,xs(p.component)||p.component.proxy}},unmount(){a&&(e(null,c._container),delete c._container.__vue_app__)},provide(l,d){return o.provides[l]=d,c},runWithContext(l){on=c;try{return l()}finally{on=null}}};return c}}let on=null;function Xi(e,t){if(le){let n=le.provides;const r=le.parent&&le.parent.provides;r===n&&(n=le.provides=Object.create(r)),n[e]=t}}function xt(e,t,n=!1){const r=le||Ie;if(r||on){const s=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:on._context.provides;if(s&&e in s)return s[e];if(arguments.length>1)return n&&F(t)?t.call(r&&r.proxy):t}}function Zi(){return!!(le||Ie||on)}function ru(e,t,n,r=!1){const s={},o={};Rn(o,tr,1),e.propsDefaults=Object.create(null),Qi(e,t,s,o);for(const i in e.propsOptions[0])i in s||(s[i]=void 0);n?e.props=r?s:Ti(s):e.type.props?e.props=s:e.props=o,e.attrs=o}function su(e,t,n,r){const{props:s,attrs:o,vnode:{patchFlag:i}}=e,a=q(s),[c]=e.propsOptions;let l=!1;if((r||i>0)&&!(i&16)){if(i&8){const d=e.vnode.dynamicProps;for(let f=0;f<d.length;f++){let p=d[f];if(Zn(e.emitsOptions,p))continue;const y=t[p];if(c)if(V(o,p))y!==o[p]&&(o[p]=y,l=!0);else{const g=Le(p);s[g]=Lr(c,a,g,y,e,!1)}else y!==o[p]&&(o[p]=y,l=!0)}}}else{Qi(e,t,s,o)&&(l=!0);let d;for(const f in a)(!t||!V(t,f)&&((d=Dt(f))===f||!V(t,d)))&&(c?n&&(n[f]!==void 0||n[d]!==void 0)&&(s[f]=Lr(c,a,f,void 0,e,!0)):delete s[f]);if(o!==a)for(const f in o)(!t||!V(t,f))&&(delete o[f],l=!0)}l&&We(e,"set","$attrs")}function Qi(e,t,n,r){const[s,o]=e.propsOptions;let i=!1,a;if(t)for(let c in t){if(zt(c))continue;const l=t[c];let d;s&&V(s,d=Le(c))?!o||!o.includes(d)?n[d]=l:(a||(a={}))[d]=l:Zn(e.emitsOptions,c)||(!(c in r)||l!==r[c])&&(r[c]=l,i=!0)}if(o){const c=q(n),l=a||se;for(let d=0;d<o.length;d++){const f=o[d];n[f]=Lr(s,c,f,l[f],e,!V(l,f))}}return i}function Lr(e,t,n,r,s,o){const i=e[n];if(i!=null){const a=V(i,"default");if(a&&r===void 0){const c=i.default;if(i.type!==Function&&!i.skipFactory&&F(c)){const{propsDefaults:l}=s;n in l?r=l[n]:(Mt(s),r=l[n]=c.call(null,t),ht())}else r=c}i[0]&&(o&&!a?r=!1:i[1]&&(r===""||r===Dt(n))&&(r=!0))}return r}function ea(e,t,n=!1){const r=t.propsCache,s=r.get(e);if(s)return s;const o=e.props,i={},a=[];let c=!1;if(!F(e)){const d=f=>{c=!0;const[p,y]=ea(f,t,!0);fe(i,p),y&&a.push(...y)};!n&&t.mixins.length&&t.mixins.forEach(d),e.extends&&d(e.extends),e.mixins&&e.mixins.forEach(d)}if(!o&&!c)return ne(e)&&r.set(e,At),At;if(N(o))for(let d=0;d<o.length;d++){const f=Le(o[d]);uo(f)&&(i[f]=se)}else if(o)for(const d in o){const f=Le(d);if(uo(f)){const p=o[d],y=i[f]=N(p)||F(p)?{type:p}:fe({},p);if(y){const g=po(Boolean,y.type),T=po(String,y.type);y[0]=g>-1,y[1]=T<0||g<T,(g>-1||V(y,"default"))&&a.push(f)}}}const l=[i,a];return ne(e)&&r.set(e,l),l}function uo(e){return e[0]!=="$"}function fo(e){const t=e&&e.toString().match(/^\s*(function|class) (\w+)/);return t?t[2]:e===null?"null":""}function ho(e,t){return fo(e)===fo(t)}function po(e,t){return N(t)?t.findIndex(n=>ho(n,e)):F(t)&&ho(t,e)?0:-1}const ta=e=>e[0]==="_"||e==="$stable",As=e=>N(e)?e.map(Ce):[Ce(e)],ou=(e,t,n)=>{if(t._n)return t;const r=bs((...s)=>As(t(...s)),n);return r._c=!1,r},na=(e,t,n)=>{const r=e._ctx;for(const s in e){if(ta(s))continue;const o=e[s];if(F(o))t[s]=ou(s,o,r);else if(o!=null){const i=As(o);t[s]=()=>i}}},ra=(e,t)=>{const n=As(t);e.slots.default=()=>n},iu=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=q(t),Rn(t,"_",n)):na(t,e.slots={})}else e.slots={},t&&ra(e,t);Rn(e.slots,tr,1)},au=(e,t,n)=>{const{vnode:r,slots:s}=e;let o=!0,i=se;if(r.shapeFlag&32){const a=t._;a?n&&a===1?o=!1:(fe(s,t),!n&&a===1&&delete s._):(o=!t.$stable,na(t,s)),i=t}else t&&(ra(e,t),i={default:1});if(o)for(const a in s)!ta(a)&&!(a in i)&&delete s[a]};function $n(e,t,n,r,s=!1){if(N(e)){e.forEach((p,y)=>$n(p,t&&(N(t)?t[y]:t),n,r,s));return}if(Gt(r)&&!s)return;const o=r.shapeFlag&4?xs(r.component)||r.component.proxy:r.el,i=s?null:o,{i:a,r:c}=e,l=t&&t.r,d=a.refs===se?a.refs={}:a.refs,f=a.setupState;if(l!=null&&l!==c&&(oe(l)?(d[l]=null,V(f,l)&&(f[l]=null)):ue(l)&&(l.value=null)),F(c))Ye(c,a,12,[i,d]);else{const p=oe(c),y=ue(c);if(p||y){const g=()=>{if(e.f){const T=p?V(f,c)?f[c]:d[c]:c.value;s?N(T)&&as(T,o):N(T)?T.includes(o)||T.push(o):p?(d[c]=[o],V(f,c)&&(f[c]=d[c])):(c.value=[o],e.k&&(d[e.k]=c.value))}else p?(d[c]=i,V(f,c)&&(f[c]=i)):y&&(c.value=i,e.k&&(d[e.k]=i))};i?(g.id=-1,ye(g,n)):g()}}}let qe=!1;const _n=e=>/svg/.test(e.namespaceURI)&&e.tagName!=="foreignObject",wn=e=>e.nodeType===8;function cu(e){const{mt:t,p:n,o:{patchProp:r,createText:s,nextSibling:o,parentNode:i,remove:a,insert:c,createComment:l}}=e,d=(_,b)=>{if(!b.hasChildNodes()){n(null,_,b),xn(),b._vnode=_;return}qe=!1,f(b.firstChild,_,null,null,null),xn(),b._vnode=_,qe&&console.error("Hydration completed but contains mismatches.")},f=(_,b,M,I,O,U=!1)=>{const B=wn(_)&&_.data==="[",S=()=>T(_,b,M,I,O,B),{type:j,ref:z,shapeFlag:J,patchFlag:ge}=b;let re=_.nodeType;b.el=_,ge===-2&&(U=!1,b.dynamicChildren=null);let k=null;switch(j){case Ot:re!==3?b.children===""?(c(b.el=s(""),i(_),_),k=_):k=S():(_.data!==b.children&&(qe=!0,_.data=b.children),k=o(_));break;case Fe:re!==8||B?k=S():k=o(_);break;case Tn:if(B&&(_=o(_),re=_.nodeType),re===1||re===3){k=_;const we=!b.children.length;for(let G=0;G<b.staticCount;G++)we&&(b.children+=k.nodeType===1?k.outerHTML:k.data),G===b.staticCount-1&&(b.anchor=k),k=o(k);return B?o(k):k}else S();break;case Ee:B?k=g(_,b,M,I,O,U):k=S();break;default:if(J&1)re!==1||b.type.toLowerCase()!==_.tagName.toLowerCase()?k=S():k=p(_,b,M,I,O,U);else if(J&6){b.slotScopeIds=O;const we=i(_);if(t(b,we,null,M,I,_n(we),U),k=B?D(_):o(_),k&&wn(k)&&k.data==="teleport end"&&(k=o(k)),Gt(b)){let G;B?(G=ie(Ee),G.anchor=k?k.previousSibling:we.lastChild):G=_.nodeType===3?Cs(""):ie("div"),G.el=_,b.component.subTree=G}}else J&64?re!==8?k=S():k=b.type.hydrate(_,b,M,I,O,U,e,y):J&128&&(k=b.type.hydrate(_,b,M,I,_n(i(_)),O,U,e,f))}return z!=null&&$n(z,null,I,b),k},p=(_,b,M,I,O,U)=>{U=U||!!b.dynamicChildren;const{type:B,props:S,patchFlag:j,shapeFlag:z,dirs:J}=b,ge=B==="input"&&J||B==="option";if(ge||j!==-1){if(J&&De(b,null,M,"created"),S)if(ge||!U||j&48)for(const k in S)(ge&&k.endsWith("value")||cn(k)&&!zt(k))&&r(_,k,null,S[k],!1,void 0,M);else S.onClick&&r(_,"onClick",null,S.onClick,!1,void 0,M);let re;if((re=S&&S.onVnodeBeforeMount)&&Ae(re,M,b),J&&De(b,null,M,"beforeMount"),((re=S&&S.onVnodeMounted)||J)&&Bi(()=>{re&&Ae(re,M,b),J&&De(b,null,M,"mounted")},I),z&16&&!(S&&(S.innerHTML||S.textContent))){let k=y(_.firstChild,b,_,M,I,O,U);for(;k;){qe=!0;const we=k;k=k.nextSibling,a(we)}}else z&8&&_.textContent!==b.children&&(qe=!0,_.textContent=b.children)}return _.nextSibling},y=(_,b,M,I,O,U,B)=>{B=B||!!b.dynamicChildren;const S=b.children,j=S.length;for(let z=0;z<j;z++){const J=B?S[z]:S[z]=Ce(S[z]);if(_)_=f(_,J,I,O,U,B);else{if(J.type===Ot&&!J.children)continue;qe=!0,n(null,J,M,null,I,O,_n(M),U)}}return _},g=(_,b,M,I,O,U)=>{const{slotScopeIds:B}=b;B&&(O=O?O.concat(B):B);const S=i(_),j=y(o(_),b,S,M,I,O,U);return j&&wn(j)&&j.data==="]"?o(b.anchor=j):(qe=!0,c(b.anchor=l("]"),S,j),j)},T=(_,b,M,I,O,U)=>{if(qe=!0,b.el=null,U){const j=D(_);for(;;){const z=o(_);if(z&&z!==j)a(z);else break}}const B=o(_),S=i(_);return a(_),n(null,b,S,B,M,I,_n(S),O),B},D=_=>{let b=0;for(;_;)if(_=o(_),_&&wn(_)&&(_.data==="["&&b++,_.data==="]")){if(b===0)return o(_);b--}return _};return[d,f]}const ye=Bi;function lu(e){return sa(e)}function uu(e){return sa(e,cu)}function sa(e,t){const n=Or();n.__VUE__=!0;const{insert:r,remove:s,patchProp:o,createElement:i,createText:a,createComment:c,setText:l,setElementText:d,parentNode:f,nextSibling:p,setScopeId:y=Pe,insertStaticContent:g}=e,T=(u,h,m,v=null,w=null,C=null,H=!1,A=null,R=!!h.dynamicChildren)=>{if(u===h)return;u&&!Je(u,h)&&(v=dn(u),Me(u,w,C,!0),u=null),h.patchFlag===-2&&(R=!1,h.dynamicChildren=null);const{type:E,ref:P,shapeFlag:x}=h;switch(E){case Ot:D(u,h,m,v);break;case Fe:_(u,h,m,v);break;case Tn:u==null&&b(h,m,v,H);break;case Ee:ge(u,h,m,v,w,C,H,A,R);break;default:x&1?O(u,h,m,v,w,C,H,A,R):x&6?re(u,h,m,v,w,C,H,A,R):(x&64||x&128)&&E.process(u,h,m,v,w,C,H,A,R,vt)}P!=null&&w&&$n(P,u&&u.ref,C,h||u,!h)},D=(u,h,m,v)=>{if(u==null)r(h.el=a(h.children),m,v);else{const w=h.el=u.el;h.children!==u.children&&l(w,h.children)}},_=(u,h,m,v)=>{u==null?r(h.el=c(h.children||""),m,v):h.el=u.el},b=(u,h,m,v)=>{[u.el,u.anchor]=g(u.children,h,m,v,u.el,u.anchor)},M=({el:u,anchor:h},m,v)=>{let w;for(;u&&u!==h;)w=p(u),r(u,m,v),u=w;r(h,m,v)},I=({el:u,anchor:h})=>{let m;for(;u&&u!==h;)m=p(u),s(u),u=m;s(h)},O=(u,h,m,v,w,C,H,A,R)=>{H=H||h.type==="svg",u==null?U(h,m,v,w,C,H,A,R):j(u,h,w,C,H,A,R)},U=(u,h,m,v,w,C,H,A)=>{let R,E;const{type:P,props:x,shapeFlag:$,transition:L,dirs:W}=u;if(R=u.el=i(u.type,C,x&&x.is,x),$&8?d(R,u.children):$&16&&S(u.children,R,null,v,w,C&&P!=="foreignObject",H,A),W&&De(u,null,v,"created"),B(R,u,u.scopeId,H,v),x){for(const Y in x)Y!=="value"&&!zt(Y)&&o(R,Y,null,x[Y],C,u.children,v,w,je);"value"in x&&o(R,"value",null,x.value),(E=x.onVnodeBeforeMount)&&Ae(E,v,u)}W&&De(u,null,v,"beforeMount");const ee=(!w||w&&!w.pendingBranch)&&L&&!L.persisted;ee&&L.beforeEnter(R),r(R,h,m),((E=x&&x.onVnodeMounted)||ee||W)&&ye(()=>{E&&Ae(E,v,u),ee&&L.enter(R),W&&De(u,null,v,"mounted")},w)},B=(u,h,m,v,w)=>{if(m&&y(u,m),v)for(let C=0;C<v.length;C++)y(u,v[C]);if(w){let C=w.subTree;if(h===C){const H=w.vnode;B(u,H,H.scopeId,H.slotScopeIds,w.parent)}}},S=(u,h,m,v,w,C,H,A,R=0)=>{for(let E=R;E<u.length;E++){const P=u[E]=A?ze(u[E]):Ce(u[E]);T(null,P,h,m,v,w,C,H,A)}},j=(u,h,m,v,w,C,H)=>{const A=h.el=u.el;let{patchFlag:R,dynamicChildren:E,dirs:P}=h;R|=u.patchFlag&16;const x=u.props||se,$=h.props||se;let L;m&&at(m,!1),(L=$.onVnodeBeforeUpdate)&&Ae(L,m,h,u),P&&De(h,u,m,"beforeUpdate"),m&&at(m,!0);const W=w&&h.type!=="foreignObject";if(E?z(u.dynamicChildren,E,A,m,v,W,C):H||Q(u,h,A,null,m,v,W,C,!1),R>0){if(R&16)J(A,h,x,$,m,v,w);else if(R&2&&x.class!==$.class&&o(A,"class",null,$.class,w),R&4&&o(A,"style",x.style,$.style,w),R&8){const ee=h.dynamicProps;for(let Y=0;Y<ee.length;Y++){const ae=ee[Y],He=x[ae],Et=$[ae];(Et!==He||ae==="value")&&o(A,ae,He,Et,w,u.children,m,v,je)}}R&1&&u.children!==h.children&&d(A,h.children)}else!H&&E==null&&J(A,h,x,$,m,v,w);((L=$.onVnodeUpdated)||P)&&ye(()=>{L&&Ae(L,m,h,u),P&&De(h,u,m,"updated")},v)},z=(u,h,m,v,w,C,H)=>{for(let A=0;A<h.length;A++){const R=u[A],E=h[A],P=R.el&&(R.type===Ee||!Je(R,E)||R.shapeFlag&70)?f(R.el):m;T(R,E,P,null,v,w,C,H,!0)}},J=(u,h,m,v,w,C,H)=>{if(m!==v){if(m!==se)for(const A in m)!zt(A)&&!(A in v)&&o(u,A,m[A],null,H,h.children,w,C,je);for(const A in v){if(zt(A))continue;const R=v[A],E=m[A];R!==E&&A!=="value"&&o(u,A,E,R,H,h.children,w,C,je)}"value"in v&&o(u,"value",m.value,v.value)}},ge=(u,h,m,v,w,C,H,A,R)=>{const E=h.el=u?u.el:a(""),P=h.anchor=u?u.anchor:a("");let{patchFlag:x,dynamicChildren:$,slotScopeIds:L}=h;L&&(A=A?A.concat(L):L),u==null?(r(E,m,v),r(P,m,v),S(h.children,m,P,w,C,H,A,R)):x>0&&x&64&&$&&u.dynamicChildren?(z(u.dynamicChildren,$,m,w,C,H,A),(h.key!=null||w&&h===w.subTree)&&oa(u,h,!0)):Q(u,h,m,P,w,C,H,A,R)},re=(u,h,m,v,w,C,H,A,R)=>{h.slotScopeIds=A,u==null?h.shapeFlag&512?w.ctx.activate(h,m,v,H,R):k(h,m,v,w,C,H,R):we(u,h,R)},k=(u,h,m,v,w,C,H)=>{const A=u.component=yu(u,v,w);if(Es(u)&&(A.ctx.renderer=vt),bu(A),A.asyncDep){if(w&&w.registerDep(A,G),!u.el){const R=A.subTree=ie(Fe);_(null,R,h,m)}return}G(A,u,h,m,w,C,H)},we=(u,h,m)=>{const v=h.component=u.component;if(Sl(u,h,m))if(v.asyncDep&&!v.asyncResolved){Z(v,h,m);return}else v.next=h,Il(v.update),v.update();else h.el=u.el,v.vnode=h},G=(u,h,m,v,w,C,H)=>{const A=()=>{if(u.isMounted){let{next:P,bu:x,u:$,parent:L,vnode:W}=u,ee=P,Y;at(u,!1),P?(P.el=W.el,Z(u,P,H)):P=W,x&&fr(x),(Y=P.props&&P.props.onVnodeBeforeUpdate)&&Ae(Y,L,P,W),at(u,!0);const ae=dr(u),He=u.subTree;u.subTree=ae,T(He,ae,f(He.el),dn(He),u,w,C),P.el=ae.el,ee===null&&_s(u,ae.el),$&&ye($,w),(Y=P.props&&P.props.onVnodeUpdated)&&ye(()=>Ae(Y,L,P,W),w)}else{let P;const{el:x,props:$}=h,{bm:L,m:W,parent:ee}=u,Y=Gt(h);if(at(u,!1),L&&fr(L),!Y&&(P=$&&$.onVnodeBeforeMount)&&Ae(P,ee,h),at(u,!0),x&&lr){const ae=()=>{u.subTree=dr(u),lr(x,u.subTree,u,w,null)};Y?h.type.__asyncLoader().then(()=>!u.isUnmounted&&ae()):ae()}else{const ae=u.subTree=dr(u);T(null,ae,m,v,u,w,C),h.el=ae.el}if(W&&ye(W,w),!Y&&(P=$&&$.onVnodeMounted)){const ae=h;ye(()=>Ae(P,ee,ae),w)}(h.shapeFlag&256||ee&&Gt(ee.vnode)&&ee.vnode.shapeFlag&256)&&u.a&&ye(u.a,w),u.isMounted=!0,h=m=v=null}},R=u.effect=new fs(A,()=>Xn(E),u.scope),E=u.update=()=>R.run();E.id=u.uid,at(u,!0),E()},Z=(u,h,m)=>{h.component=u;const v=u.vnode.props;u.vnode=h,u.next=null,su(u,h.props,v,m),au(u,h.children,m),Nt(),to(),Bt()},Q=(u,h,m,v,w,C,H,A,R=!1)=>{const E=u&&u.children,P=u?u.shapeFlag:0,x=h.children,{patchFlag:$,shapeFlag:L}=h;if($>0){if($&128){fn(E,x,m,v,w,C,H,A,R);return}else if($&256){ot(E,x,m,v,w,C,H,A,R);return}}L&8?(P&16&&je(E,w,C),x!==E&&d(m,x)):P&16?L&16?fn(E,x,m,v,w,C,H,A,R):je(E,w,C,!0):(P&8&&d(m,""),L&16&&S(x,m,v,w,C,H,A,R))},ot=(u,h,m,v,w,C,H,A,R)=>{u=u||At,h=h||At;const E=u.length,P=h.length,x=Math.min(E,P);let $;for($=0;$<x;$++){const L=h[$]=R?ze(h[$]):Ce(h[$]);T(u[$],L,m,null,w,C,H,A,R)}E>P?je(u,w,C,!0,!1,x):S(h,m,v,w,C,H,A,R,x)},fn=(u,h,m,v,w,C,H,A,R)=>{let E=0;const P=h.length;let x=u.length-1,$=P-1;for(;E<=x&&E<=$;){const L=u[E],W=h[E]=R?ze(h[E]):Ce(h[E]);if(Je(L,W))T(L,W,m,null,w,C,H,A,R);else break;E++}for(;E<=x&&E<=$;){const L=u[x],W=h[$]=R?ze(h[$]):Ce(h[$]);if(Je(L,W))T(L,W,m,null,w,C,H,A,R);else break;x--,$--}if(E>x){if(E<=$){const L=$+1,W=L<P?h[L].el:v;for(;E<=$;)T(null,h[E]=R?ze(h[E]):Ce(h[E]),m,W,w,C,H,A,R),E++}}else if(E>$)for(;E<=x;)Me(u[E],w,C,!0),E++;else{const L=E,W=E,ee=new Map;for(E=W;E<=$;E++){const ve=h[E]=R?ze(h[E]):Ce(h[E]);ve.key!=null&&ee.set(ve.key,E)}let Y,ae=0;const He=$-W+1;let Et=!1,Ws=0;const Ut=new Array(He);for(E=0;E<He;E++)Ut[E]=0;for(E=L;E<=x;E++){const ve=u[E];if(ae>=He){Me(ve,w,C,!0);continue}let ke;if(ve.key!=null)ke=ee.get(ve.key);else for(Y=W;Y<=$;Y++)if(Ut[Y-W]===0&&Je(ve,h[Y])){ke=Y;break}ke===void 0?Me(ve,w,C,!0):(Ut[ke-W]=E+1,ke>=Ws?Ws=ke:Et=!0,T(ve,h[ke],m,null,w,C,H,A,R),ae++)}const Ks=Et?fu(Ut):At;for(Y=Ks.length-1,E=He-1;E>=0;E--){const ve=W+E,ke=h[ve],Vs=ve+1<P?h[ve+1].el:v;Ut[E]===0?T(null,ke,m,Vs,w,C,H,A,R):Et&&(Y<0||E!==Ks[Y]?it(ke,m,Vs,2):Y--)}}},it=(u,h,m,v,w=null)=>{const{el:C,type:H,transition:A,children:R,shapeFlag:E}=u;if(E&6){it(u.component.subTree,h,m,v);return}if(E&128){u.suspense.move(h,m,v);return}if(E&64){H.move(u,h,m,vt);return}if(H===Ee){r(C,h,m);for(let x=0;x<R.length;x++)it(R[x],h,m,v);r(u.anchor,h,m);return}if(H===Tn){M(u,h,m);return}if(v!==2&&E&1&&A)if(v===0)A.beforeEnter(C),r(C,h,m),ye(()=>A.enter(C),w);else{const{leave:x,delayLeave:$,afterLeave:L}=A,W=()=>r(C,h,m),ee=()=>{x(C,()=>{W(),L&&L()})};$?$(C,W,ee):ee()}else r(C,h,m)},Me=(u,h,m,v=!1,w=!1)=>{const{type:C,props:H,ref:A,children:R,dynamicChildren:E,shapeFlag:P,patchFlag:x,dirs:$}=u;if(A!=null&&$n(A,null,m,u,!0),P&256){h.ctx.deactivate(u);return}const L=P&1&&$,W=!Gt(u);let ee;if(W&&(ee=H&&H.onVnodeBeforeUnmount)&&Ae(ee,h,u),P&6)Ec(u.component,m,v);else{if(P&128){u.suspense.unmount(m,v);return}L&&De(u,null,h,"beforeUnmount"),P&64?u.type.remove(u,h,m,w,vt,v):E&&(C!==Ee||x>0&&x&64)?je(E,h,m,!1,!0):(C===Ee&&x&384||!w&&P&16)&&je(R,h,m),v&&js(u)}(W&&(ee=H&&H.onVnodeUnmounted)||L)&&ye(()=>{ee&&Ae(ee,h,u),L&&De(u,null,h,"unmounted")},m)},js=u=>{const{type:h,el:m,anchor:v,transition:w}=u;if(h===Ee){vc(m,v);return}if(h===Tn){I(u);return}const C=()=>{s(m),w&&!w.persisted&&w.afterLeave&&w.afterLeave()};if(u.shapeFlag&1&&w&&!w.persisted){const{leave:H,delayLeave:A}=w,R=()=>H(m,C);A?A(u.el,C,R):R()}else C()},vc=(u,h)=>{let m;for(;u!==h;)m=p(u),s(u),u=m;s(h)},Ec=(u,h,m)=>{const{bum:v,scope:w,update:C,subTree:H,um:A}=u;v&&fr(v),w.stop(),C&&(C.active=!1,Me(H,u,h,m)),A&&ye(A,h),ye(()=>{u.isUnmounted=!0},h),h&&h.pendingBranch&&!h.isUnmounted&&u.asyncDep&&!u.asyncResolved&&u.suspenseId===h.pendingId&&(h.deps--,h.deps===0&&h.resolve())},je=(u,h,m,v=!1,w=!1,C=0)=>{for(let H=C;H<u.length;H++)Me(u[H],h,m,v,w)},dn=u=>u.shapeFlag&6?dn(u.component.subTree):u.shapeFlag&128?u.suspense.next():p(u.anchor||u.el),Us=(u,h,m)=>{u==null?h._vnode&&Me(h._vnode,null,null,!0):T(h._vnode||null,u,h,null,null,null,m),to(),xn(),h._vnode=u},vt={p:T,um:Me,m:it,r:js,mt:k,mc:S,pc:Q,pbc:z,n:dn,o:e};let cr,lr;return t&&([cr,lr]=t(vt)),{render:Us,hydrate:cr,createApp:nu(Us,cr)}}function at({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function oa(e,t,n=!1){const r=e.children,s=t.children;if(N(r)&&N(s))for(let o=0;o<r.length;o++){const i=r[o];let a=s[o];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[o]=ze(s[o]),a.el=i.el),n||oa(i,a)),a.type===Ot&&(a.el=i.el)}}function fu(e){const t=e.slice(),n=[0];let r,s,o,i,a;const c=e.length;for(r=0;r<c;r++){const l=e[r];if(l!==0){if(s=n[n.length-1],e[s]<l){t[r]=s,n.push(r);continue}for(o=0,i=n.length-1;o<i;)a=o+i>>1,e[n[a]]<l?o=a+1:i=a;l<e[n[o]]&&(o>0&&(t[r]=n[o-1]),n[o]=r)}}for(o=n.length,i=n[o-1];o-- >0;)n[o]=i,i=t[i];return n}const du=e=>e.__isTeleport,Ee=Symbol.for("v-fgt"),Ot=Symbol.for("v-txt"),Fe=Symbol.for("v-cmt"),Tn=Symbol.for("v-stc"),Xt=[];let Re=null;function ce(e=!1){Xt.push(Re=e?null:[])}function ia(){Xt.pop(),Re=Xt[Xt.length-1]||null}let Pt=1;function go(e){Pt+=e}function aa(e){return e.dynamicChildren=Pt>0?Re||At:null,ia(),Pt>0&&Re&&Re.push(e),e}function Xe(e,t,n,r,s,o){return aa(X(e,t,n,r,s,o,!0))}function Oe(e,t,n,r,s){return aa(ie(e,t,n,r,s,!0))}function Mn(e){return e?e.__v_isVNode===!0:!1}function Je(e,t){return e.type===t.type&&e.key===t.key}const tr="__vInternal",ca=({key:e})=>e??null,An=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?oe(e)||ue(e)||F(e)?{i:Ie,r:e,k:t,f:!!n}:e:null);function X(e,t=null,n=null,r=0,s=null,o=e===Ee?0:1,i=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&ca(t),ref:t&&An(t),scopeId:Qn,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Ie};return a?(Rs(c,n),o&128&&e.normalize(c)):n&&(c.shapeFlag|=oe(n)?8:16),Pt>0&&!i&&Re&&(c.patchFlag>0||o&6)&&c.patchFlag!==32&&Re.push(c),c}const ie=hu;function hu(e,t=null,n=null,r=0,s=null,o=!1){if((!e||e===qi)&&(e=Fe),Mn(e)){const a=$t(e,t,!0);return n&&Rs(a,n),Pt>0&&!o&&Re&&(a.shapeFlag&6?Re[Re.indexOf(e)]=a:Re.push(a)),a.patchFlag|=-2,a}if(Iu(e)&&(e=e.__vccOpts),t){t=la(t);let{class:a,style:c}=t;a&&!oe(a)&&(t.class=ln(a)),ne(c)&&(Ci(c)&&!N(c)&&(c=fe({},c)),t.style=Jn(c))}const i=oe(e)?1:xl(e)?128:du(e)?64:ne(e)?4:F(e)?2:0;return X(e,t,n,r,s,i,o,!0)}function la(e){return e?Ci(e)||tr in e?fe({},e):e:null}function $t(e,t,n=!1){const{props:r,ref:s,patchFlag:o,children:i}=e,a=t?pu(r||{},t):r;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:a,key:a&&ca(a),ref:t&&t.ref?n&&s?N(s)?s.concat(An(t)):[s,An(t)]:An(t):s,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:i,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Ee?o===-1?16:o|16:o,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&$t(e.ssContent),ssFallback:e.ssFallback&&$t(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce}}function Cs(e=" ",t=0){return ie(Ot,null,e,t)}function Cn(e="",t=!1){return t?(ce(),Oe(Fe,null,e)):ie(Fe,null,e)}function Ce(e){return e==null||typeof e=="boolean"?ie(Fe):N(e)?ie(Ee,null,e.slice()):typeof e=="object"?ze(e):ie(Ot,null,String(e))}function ze(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:$t(e)}function Rs(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(N(t))n=16;else if(typeof t=="object")if(r&65){const s=t.default;s&&(s._c&&(s._d=!1),Rs(e,s()),s._c&&(s._d=!0));return}else{n=32;const s=t._;!s&&!(tr in t)?t._ctx=Ie:s===3&&Ie&&(Ie.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else F(t)?(t={default:t,_ctx:Ie},n=32):(t=String(t),r&64?(n=16,t=[Cs(t)]):n=8);e.children=t,e.shapeFlag|=n}function pu(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const s in r)if(s==="class")t.class!==r.class&&(t.class=ln([t.class,r.class]));else if(s==="style")t.style=Jn([t.style,r.style]);else if(cn(s)){const o=t[s],i=r[s];i&&o!==i&&!(N(o)&&o.includes(i))&&(t[s]=o?[].concat(o,i):i)}else s!==""&&(t[s]=r[s])}return t}function Ae(e,t,n,r=null){$e(e,t,7,[n,r])}const gu=Yi();let mu=0;function yu(e,t,n){const r=e.type,s=(t?t.appContext:e.appContext)||gu,o={uid:mu++,vnode:e,type:r,parent:t,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new Bc(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:ea(r,s),emitsOptions:Ni(r,s),emit:null,emitted:null,propsDefaults:se,inheritAttrs:r.inheritAttrs,ctx:se,data:se,props:se,attrs:se,slots:se,refs:se,setupState:se,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return o.ctx={_:o},o.root=t?t.root:o,o.emit=Al.bind(null,o),e.ce&&e.ce(o),o}let le=null;const Hs=()=>le||Ie;let Ss,It,mo="__VUE_INSTANCE_SETTERS__";(It=Or()[mo])||(It=Or()[mo]=[]),It.push(e=>le=e),Ss=e=>{It.length>1?It.forEach(t=>t(e)):It[0](e)};const Mt=e=>{Ss(e),e.scope.on()},ht=()=>{le&&le.scope.off(),Ss(null)};function ua(e){return e.vnode.shapeFlag&4}let kt=!1;function bu(e,t=!1){kt=t;const{props:n,children:r}=e.vnode,s=ua(e);ru(e,n,s,t),iu(e,r);const o=s?_u(e,t):void 0;return kt=!1,o}function _u(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=Ri(new Proxy(e.ctx,Gl));const{setup:r}=n;if(r){const s=e.setupContext=r.length>1?vu(e):null;Mt(e),Nt();const o=Ye(r,e,0,[e.props,s]);if(Bt(),ht(),li(o)){if(o.then(ht,ht),t)return o.then(i=>{Fr(e,i,t)}).catch(i=>{Lt(i,e,0)});e.asyncDep=o}else Fr(e,o,t)}else fa(e,t)}function Fr(e,t,n){F(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:ne(t)&&(e.setupState=Oi(t)),fa(e,n)}let yo;function fa(e,t,n){const r=e.type;if(!e.render){if(!t&&yo&&!r.render){const s=r.template||Ts(e).template;if(s){const{isCustomElement:o,compilerOptions:i}=e.appContext.config,{delimiters:a,compilerOptions:c}=r,l=fe(fe({isCustomElement:o,delimiters:a},i),c);r.render=yo(s,l)}}e.render=r.render||Pe}Mt(e),Nt(),Yl(e),Bt(),ht()}function wu(e){return e.attrsProxy||(e.attrsProxy=new Proxy(e.attrs,{get(t,n){return _e(e,"get","$attrs"),t[n]}}))}function vu(e){const t=n=>{e.exposed=n||{}};return{get attrs(){return wu(e)},slots:e.slots,emit:e.emit,expose:t}}function xs(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(Oi(Ri(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Yt)return Yt[n](e)},has(t,n){return n in t||n in Yt}}))}function Eu(e,t=!0){return F(e)?e.displayName||e.name:e.name||t&&e.__name}function Iu(e){return F(e)&&"__vccOpts"in e}const Tu=(e,t)=>wl(e,t,kt);function Au(e,t,n){const r=arguments.length;return r===2?ne(t)&&!N(t)?Mn(t)?ie(e,null,[t]):ie(e,t):ie(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Mn(n)&&(n=[n]),ie(e,t,n))}const Cu=Symbol.for("v-scx"),Ru=()=>xt(Cu),da="3.3.4",Hu="http://www.w3.org/2000/svg",ut=typeof document<"u"?document:null,bo=ut&&ut.createElement("template"),Su={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const s=t?ut.createElementNS(Hu,e):ut.createElement(e,n?{is:n}:void 0);return e==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:e=>ut.createTextNode(e),createComment:e=>ut.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>ut.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,s,o){const i=n?n.previousSibling:t.lastChild;if(s&&(s===o||s.nextSibling))for(;t.insertBefore(s.cloneNode(!0),n),!(s===o||!(s=s.nextSibling)););else{bo.innerHTML=r?`<svg>${e}</svg>`:e;const a=bo.content;if(r){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}t.insertBefore(a,n)}return[i?i.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function xu(e,t,n){const r=e._vtc;r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function Ou(e,t,n){const r=e.style,s=oe(n);if(n&&!s){if(t&&!oe(t))for(const o in t)n[o]==null&&jr(r,o,"");for(const o in n)jr(r,o,n[o])}else{const o=r.display;s?t!==n&&(r.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(r.display=o)}}const _o=/\s*!important$/;function jr(e,t,n){if(N(n))n.forEach(r=>jr(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=Pu(e,t);_o.test(n)?e.setProperty(Dt(r),n.replace(_o,""),"important"):e[r]=n}}const wo=["Webkit","Moz","ms"],gr={};function Pu(e,t){const n=gr[t];if(n)return n;let r=Le(t);if(r!=="filter"&&r in e)return gr[t]=r;r=zn(r);for(let s=0;s<wo.length;s++){const o=wo[s]+r;if(o in e)return gr[t]=o}return t}const vo="http://www.w3.org/1999/xlink";function $u(e,t,n,r,s){if(r&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(vo,t.slice(6,t.length)):e.setAttributeNS(vo,t,n);else{const o=Nc(t);n==null||o&&!di(n)?e.removeAttribute(t):e.setAttribute(t,o?"":n)}}function Mu(e,t,n,r,s,o,i){if(t==="innerHTML"||t==="textContent"){r&&i(r,s,o),e[t]=n??"";return}const a=e.tagName;if(t==="value"&&a!=="PROGRESS"&&!a.includes("-")){e._value=n;const l=a==="OPTION"?e.getAttribute("value"):e.value,d=n??"";l!==d&&(e.value=d),n==null&&e.removeAttribute(t);return}let c=!1;if(n===""||n==null){const l=typeof e[t];l==="boolean"?n=di(n):n==null&&l==="string"?(n="",c=!0):l==="number"&&(n=0,c=!0)}try{e[t]=n}catch{}c&&e.removeAttribute(t)}function ku(e,t,n,r){e.addEventListener(t,n,r)}function Du(e,t,n,r){e.removeEventListener(t,n,r)}function Nu(e,t,n,r,s=null){const o=e._vei||(e._vei={}),i=o[t];if(r&&i)i.value=r;else{const[a,c]=Bu(t);if(r){const l=o[t]=ju(r,s);ku(e,a,l,c)}else i&&(Du(e,a,i,c),o[t]=void 0)}}const Eo=/(?:Once|Passive|Capture)$/;function Bu(e){let t;if(Eo.test(e)){t={};let r;for(;r=e.match(Eo);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):Dt(e.slice(2)),t]}let mr=0;const Lu=Promise.resolve(),Fu=()=>mr||(Lu.then(()=>mr=0),mr=Date.now());function ju(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;$e(Uu(r,n.value),t,5,[r])};return n.value=e,n.attached=Fu(),n}function Uu(e,t){if(N(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>s=>!s._stopped&&r&&r(s))}else return t}const Io=/^on[a-z]/,Wu=(e,t,n,r,s=!1,o,i,a,c)=>{t==="class"?xu(e,r,s):t==="style"?Ou(e,n,r):cn(t)?is(t)||Nu(e,t,n,r,i):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Ku(e,t,r,s))?Mu(e,t,r,o,i,a,c):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),$u(e,t,r,s))};function Ku(e,t,n,r){return r?!!(t==="innerHTML"||t==="textContent"||t in e&&Io.test(t)&&F(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||Io.test(t)&&oe(n)?!1:t in e}const ha=fe({patchProp:Wu},Su);let Zt,To=!1;function Vu(){return Zt||(Zt=lu(ha))}function qu(){return Zt=To?Zt:uu(ha),To=!0,Zt}const zu=(...e)=>{const t=Vu().createApp(...e),{mount:n}=t;return t.mount=r=>{const s=pa(r);if(!s)return;const o=t._component;!F(o)&&!o.render&&!o.template&&(o.template=s.innerHTML),s.innerHTML="";const i=n(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),i},t},Ju=(...e)=>{const t=qu().createApp(...e),{mount:n}=t;return t.mount=r=>{const s=pa(r);if(s)return n(s,!0,s instanceof SVGElement)},t};function pa(e){return oe(e)?document.querySelector(e):e}const Gu=/"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/,Yu=/"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/,Xu=/^\s*["[{]|^\s*-?\d[\d.]{0,14}\s*$/;function Zu(e,t){if(e==="__proto__"||e==="constructor"&&t&&typeof t=="object"&&"prototype"in t){Qu(e);return}return t}function Qu(e){console.warn(`[destr] Dropping "${e}" key to prevent prototype pollution.`)}function ef(e,t={}){if(typeof e!="string")return e;const n=e.trim();if(e[0]==='"'&&e[e.length-1]==='"')return n.slice(1,-1);if(n.length<=9){const r=n.toLowerCase();if(r==="true")return!0;if(r==="false")return!1;if(r==="undefined")return;if(r==="null")return null;if(r==="nan")return Number.NaN;if(r==="infinity")return Number.POSITIVE_INFINITY;if(r==="-infinity")return Number.NEGATIVE_INFINITY}if(!Xu.test(e)){if(t.strict)throw new SyntaxError("[destr] Invalid JSON");return e}try{if(Gu.test(e)||Yu.test(e)){if(t.strict)throw new Error("[destr] Possible prototype pollution");return JSON.parse(e,Zu)}return JSON.parse(e)}catch(r){if(t.strict)throw r;return e}}const tf=/#/g,nf=/&/g,rf=/=/g,Os=/\+/g,sf=/%5e/gi,of=/%60/gi,af=/%7c/gi,cf=/%20/gi;function lf(e){return encodeURI(""+e).replace(af,"|")}function Ur(e){return lf(typeof e=="string"?e:JSON.stringify(e)).replace(Os,"%2B").replace(cf,"+").replace(tf,"%23").replace(nf,"%26").replace(of,"`").replace(sf,"^")}function yr(e){return Ur(e).replace(rf,"%3D")}function kn(e=""){try{return decodeURIComponent(""+e)}catch{return""+e}}function uf(e){return kn(e.replace(Os," "))}function ff(e){return kn(e.replace(Os," "))}function ga(e=""){const t={};e[0]==="?"&&(e=e.slice(1));for(const n of e.split("&")){const r=n.match(/([^=]+)=?(.*)/)||[];if(r.length<2)continue;const s=uf(r[1]);if(s==="__proto__"||s==="constructor")continue;const o=ff(r[2]||"");t[s]===void 0?t[s]=o:Array.isArray(t[s])?t[s].push(o):t[s]=[t[s],o]}return t}function df(e,t){return(typeof t=="number"||typeof t=="boolean")&&(t=String(t)),t?Array.isArray(t)?t.map(n=>`${yr(e)}=${Ur(n)}`).join("&"):`${yr(e)}=${Ur(t)}`:yr(e)}function ma(e){return Object.keys(e).filter(t=>e[t]!==void 0).map(t=>df(t,e[t])).filter(Boolean).join("&")}const hf=/^\w{2,}:([/\\]{1,2})/,pf=/^\w{2,}:([/\\]{2})?/,gf=/^([/\\]\s*){2,}[^/\\]/;function nr(e,t={}){return typeof t=="boolean"&&(t={acceptRelative:t}),t.strict?hf.test(e):pf.test(e)||(t.acceptRelative?gf.test(e):!1)}const mf=/\/$|\/\?/;function Wr(e="",t=!1){return t?mf.test(e):e.endsWith("/")}function ya(e="",t=!1){if(!t)return(Wr(e)?e.slice(0,-1):e)||"/";if(!Wr(e,!0))return e||"/";const[n,...r]=e.split("?");return(n.slice(0,-1)||"/")+(r.length>0?`?${r.join("?")}`:"")}function Kr(e="",t=!1){if(!t)return e.endsWith("/")?e:e+"/";if(Wr(e,!0))return e||"/";const[n,...r]=e.split("?");return n+"/"+(r.length>0?`?${r.join("?")}`:"")}function yf(e=""){return e.startsWith("/")}function Ao(e=""){return yf(e)?e:"/"+e}function bf(e,t){if(_a(t)||nr(e))return e;const n=ya(t);return e.startsWith(n)?e:Ft(n,e)}function _f(e,t){if(_a(t))return e;const n=ya(t);if(!e.startsWith(n))return e;const r=e.slice(n.length);return r[0]==="/"?r:"/"+r}function ba(e,t){const n=un(e),r={...ga(n.search),...t};return n.search=ma(r),wa(n)}function _a(e){return!e||e==="/"}function wf(e){return e&&e!=="/"}const vf=/^\.?\//;function Ft(e,...t){let n=e||"";for(const r of t.filter(s=>wf(s)))if(n){const s=r.replace(vf,"");n=Kr(n)+s}else n=r;return n}function Ef(e,t,n={}){return n.trailingSlash||(e=Kr(e),t=Kr(t)),n.leadingSlash||(e=Ao(e),t=Ao(t)),n.encoding||(e=kn(e),t=kn(t)),e===t}function un(e="",t){if(!nr(e,{acceptRelative:!0}))return t?un(t+e):Co(e);const[n="",r,s=""]=(e.replace(/\\/g,"/").match(/([^/:]+:)?\/\/([^/@]+@)?(.*)/)||[]).splice(1),[o="",i=""]=(s.match(/([^#/?]*)(.*)?/)||[]).splice(1),{pathname:a,search:c,hash:l}=Co(i.replace(/\/(?=[A-Za-z]:)/,""));return{protocol:n,auth:r?r.slice(0,Math.max(0,r.length-1)):"",host:o,pathname:a,search:c,hash:l}}function Co(e=""){const[t="",n="",r=""]=(e.match(/([^#?]*)(\?[^#]*)?(#.*)?/)||[]).splice(1);return{pathname:t,search:n,hash:r}}function wa(e){const t=e.pathname+(e.search?(e.search.startsWith("?")?"":"?")+e.search:"")+e.hash;return e.protocol?e.protocol+"//"+(e.auth?e.auth+"@":"")+e.host+t:t}class If extends Error{constructor(){super(...arguments),this.name="FetchError"}}function Tf(e,t,n){let r="";t&&(r=t.message),e&&n?r=`${r} (${n.status} ${n.statusText} (${e.toString()}))`:e&&(r=`${r} (${e.toString()})`);const s=new If(r);return Object.defineProperty(s,"request",{get(){return e}}),Object.defineProperty(s,"response",{get(){return n}}),Object.defineProperty(s,"data",{get(){return n&&n._data}}),Object.defineProperty(s,"status",{get(){return n&&n.status}}),Object.defineProperty(s,"statusText",{get(){return n&&n.statusText}}),Object.defineProperty(s,"statusCode",{get(){return n&&n.status}}),Object.defineProperty(s,"statusMessage",{get(){return n&&n.statusText}}),s}const Af=new Set(Object.freeze(["PATCH","POST","PUT","DELETE"]));function Ro(e="GET"){return Af.has(e.toUpperCase())}function Cf(e){if(e===void 0)return!1;const t=typeof e;return t==="string"||t==="number"||t==="boolean"||t===null?!0:t!=="object"?!1:Array.isArray(e)?!0:e.constructor&&e.constructor.name==="Object"||typeof e.toJSON=="function"}const Rf=new Set(["image/svg","application/xml","application/xhtml","application/html"]),Hf=/^application\/(?:[\w!#$%&*.^`~-]*\+)?json(;.+)?$/i;function Sf(e=""){if(!e)return"json";const t=e.split(";").shift()||"";return Hf.test(t)?"json":Rf.has(t)||t.startsWith("text/")?"text":"blob"}function xf(e,t,n=globalThis.Headers){const r={...t,...e};if(t!=null&&t.params&&(e!=null&&e.params)&&(r.params={...t==null?void 0:t.params,...e==null?void 0:e.params}),t!=null&&t.query&&(e!=null&&e.query)&&(r.query={...t==null?void 0:t.query,...e==null?void 0:e.query}),t!=null&&t.headers&&(e!=null&&e.headers)){r.headers=new n((t==null?void 0:t.headers)||{});for(const[s,o]of new n((e==null?void 0:e.headers)||{}))r.headers.set(s,o)}return r}const Of=new Set([408,409,425,429,500,502,503,504]);function va(e){const{fetch:t,Headers:n}=e;function r(i){const a=i.error&&i.error.name==="AbortError"||!1;if(i.options.retry!==!1&&!a){let l;typeof i.options.retry=="number"?l=i.options.retry:l=Ro(i.options.method)?0:1;const d=i.response&&i.response.status||500;if(l>0&&Of.has(d))return s(i.request,{...i.options,retry:l-1})}const c=Tf(i.request,i.error,i.response);throw Error.captureStackTrace&&Error.captureStackTrace(c,s),c}const s=async function(a,c={}){const l={request:a,options:xf(c,e.defaults,n),response:void 0,error:void 0};l.options.onRequest&&await l.options.onRequest(l),typeof l.request=="string"&&(l.options.baseURL&&(l.request=bf(l.request,l.options.baseURL)),(l.options.query||l.options.params)&&(l.request=ba(l.request,{...l.options.params,...l.options.query})),l.options.body&&Ro(l.options.method)&&Cf(l.options.body)&&(l.options.body=typeof l.options.body=="string"?l.options.body:JSON.stringify(l.options.body),l.options.headers=new n(l.options.headers||{}),l.options.headers.has("content-type")||l.options.headers.set("content-type","application/json"),l.options.headers.has("accept")||l.options.headers.set("accept","application/json")));try{l.response=await t(l.request,l.options)}catch(f){return l.error=f,l.options.onRequestError&&await l.options.onRequestError(l),await r(l)}const d=(l.options.parseResponse?"json":l.options.responseType)||Sf(l.response.headers.get("content-type")||"");if(d==="json"){const f=await l.response.text(),p=l.options.parseResponse||ef;l.response._data=p(f)}else d==="stream"?l.response._data=l.response.body:l.response._data=await l.response[d]();return l.options.onResponse&&await l.options.onResponse(l),!l.options.ignoreResponseError&&l.response.status>=400&&l.response.status<600?(l.options.onResponseError&&await l.options.onResponseError(l),await r(l)):l.response},o=async function(a,c){return(await s(a,c))._data};return o.raw=s,o.native=t,o.create=(i={})=>va({...e,defaults:{...e.defaults,...i}}),o}const Ea=function(){if(typeof globalThis<"u")return globalThis;if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("unable to locate global object")}(),Pf=Ea.fetch||(()=>Promise.reject(new Error("[ofetch] global.fetch is not supported!"))),$f=Ea.Headers,Mf=va({fetch:Pf,Headers:$f}),kf=Mf,Df=()=>{var e;return((e=window==null?void 0:window.__NUXT__)==null?void 0:e.config)||{}},Dn=Df().app,Nf=()=>Dn.baseURL,Bf=()=>Dn.buildAssetsDir,Lf=(...e)=>Ft(Ia(),Bf(),...e),Ia=(...e)=>{const t=Dn.cdnURL||Dn.baseURL;return e.length?Ft(t,...e):t};globalThis.__buildAssetsURL=Lf,globalThis.__publicAssetsURL=Ia;function Vr(e,t={},n){for(const r in e){const s=e[r],o=n?`${n}:${r}`:r;typeof s=="object"&&s!==null?Vr(s,t,o):typeof s=="function"&&(t[o]=s)}return t}const Ff={run:e=>e()},jf=()=>Ff,Ta=typeof console.createTask<"u"?console.createTask:jf;function Uf(e,t){const n=t.shift(),r=Ta(n);return e.reduce((s,o)=>s.then(()=>r.run(()=>o(...t))),Promise.resolve())}function Wf(e,t){const n=t.shift(),r=Ta(n);return Promise.all(e.map(s=>r.run(()=>s(...t))))}function br(e,t){for(const n of[...e])n(t)}class Kf{constructor(){this._hooks={},this._before=void 0,this._after=void 0,this._deprecatedMessages=void 0,this._deprecatedHooks={},this.hook=this.hook.bind(this),this.callHook=this.callHook.bind(this),this.callHookWith=this.callHookWith.bind(this)}hook(t,n,r={}){if(!t||typeof n!="function")return()=>{};const s=t;let o;for(;this._deprecatedHooks[t];)o=this._deprecatedHooks[t],t=o.to;if(o&&!r.allowDeprecated){let i=o.message;i||(i=`${s} hook has been deprecated`+(o.to?`, please use ${o.to}`:"")),this._deprecatedMessages||(this._deprecatedMessages=new Set),this._deprecatedMessages.has(i)||(console.warn(i),this._deprecatedMessages.add(i))}if(!n.name)try{Object.defineProperty(n,"name",{get:()=>"_"+t.replace(/\W+/g,"_")+"_hook_cb",configurable:!0})}catch{}return this._hooks[t]=this._hooks[t]||[],this._hooks[t].push(n),()=>{n&&(this.removeHook(t,n),n=void 0)}}hookOnce(t,n){let r,s=(...o)=>(typeof r=="function"&&r(),r=void 0,s=void 0,n(...o));return r=this.hook(t,s),r}removeHook(t,n){if(this._hooks[t]){const r=this._hooks[t].indexOf(n);r!==-1&&this._hooks[t].splice(r,1),this._hooks[t].length===0&&delete this._hooks[t]}}deprecateHook(t,n){this._deprecatedHooks[t]=typeof n=="string"?{to:n}:n;const r=this._hooks[t]||[];delete this._hooks[t];for(const s of r)this.hook(t,s)}deprecateHooks(t){Object.assign(this._deprecatedHooks,t);for(const n in t)this.deprecateHook(n,t[n])}addHooks(t){const n=Vr(t),r=Object.keys(n).map(s=>this.hook(s,n[s]));return()=>{for(const s of r.splice(0,r.length))s()}}removeHooks(t){const n=Vr(t);for(const r in n)this.removeHook(r,n[r])}removeAllHooks(){for(const t in this._hooks)delete this._hooks[t]}callHook(t,...n){return n.unshift(t),this.callHookWith(Uf,t,...n)}callHookParallel(t,...n){return n.unshift(t),this.callHookWith(Wf,t,...n)}callHookWith(t,n,...r){const s=this._before||this._after?{name:n,args:r,context:{}}:void 0;this._before&&br(this._before,s);const o=t(n in this._hooks?[...this._hooks[n]]:[],r);return o instanceof Promise?o.finally(()=>{this._after&&s&&br(this._after,s)}):(this._after&&s&&br(this._after,s),o)}beforeEach(t){return this._before=this._before||[],this._before.push(t),()=>{if(this._before!==void 0){const n=this._before.indexOf(t);n!==-1&&this._before.splice(n,1)}}}afterEach(t){return this._after=this._after||[],this._after.push(t),()=>{if(this._after!==void 0){const n=this._after.indexOf(t);n!==-1&&this._after.splice(n,1)}}}}function Aa(){return new Kf}function Vf(e={}){let t,n=!1;const r=i=>{if(t&&t!==i)throw new Error("Context conflict")};let s;if(e.asyncContext){const i=e.AsyncLocalStorage||globalThis.AsyncLocalStorage;i?s=new i:console.warn("[unctx] `AsyncLocalStorage` is not provided.")}const o=()=>{if(s&&t===void 0){const i=s.getStore();if(i!==void 0)return i}return t};return{use:()=>{const i=o();if(i===void 0)throw new Error("Context is not available");return i},tryUse:()=>o(),set:(i,a)=>{a||r(i),t=i,n=!0},unset:()=>{t=void 0,n=!1},call:(i,a)=>{r(i),t=i;try{return s?s.run(i,a):a()}finally{n||(t=void 0)}},async callAsync(i,a){t=i;const c=()=>{t=i},l=()=>t===i?c:void 0;qr.add(l);try{const d=s?s.run(i,a):a();return n||(t=void 0),await d}finally{qr.delete(l)}}}}function qf(e={}){const t={};return{get(n,r={}){return t[n]||(t[n]=Vf({...e,...r})),t[n],t[n]}}}const Nn=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof global<"u"?global:typeof window<"u"?window:{},Ho="__unctx__",zf=Nn[Ho]||(Nn[Ho]=qf()),Jf=(e,t={})=>zf.get(e,t),So="__unctx_async_handlers__",qr=Nn[So]||(Nn[So]=new Set);function Gf(e){const t=[];for(const s of qr){const o=s();o&&t.push(o)}const n=()=>{for(const s of t)s()};let r=e();return r&&typeof r=="object"&&"catch"in r&&(r=r.catch(s=>{throw n(),s})),[r,n]}const Ca=Jf("nuxt-app"),Yf="__nuxt_plugin";function Xf(e){let t=0;const n={provide:void 0,globalName:"nuxt",versions:{get nuxt(){return"3.6.5"},get vue(){return n.vueApp.version}},payload:rt({data:{},state:{},_errors:{},...window.__NUXT__??{}}),static:{data:{}},runWithContext:s=>ed(n,s),isHydrating:!0,deferHydration(){if(!n.isHydrating)return()=>{};t++;let s=!1;return()=>{if(!s&&(s=!0,t--,t===0))return n.isHydrating=!1,n.callHook("app:suspense:resolve")}},_asyncDataPromises:{},_asyncData:{},_payloadRevivers:{},...e};n.hooks=Aa(),n.hook=n.hooks.hook,n.callHook=n.hooks.callHook,n.provide=(s,o)=>{const i="$"+s;vn(n,i,o),vn(n.vueApp.config.globalProperties,i,o)},vn(n.vueApp,"$nuxt",n),vn(n.vueApp.config.globalProperties,"$nuxt",n);{window.addEventListener("nuxt.preloadError",o=>{n.callHook("app:chunkError",{error:o.payload})}),window.useNuxtApp=window.useNuxtApp||de;const s=n.hook("app:error",(...o)=>{console.error("[nuxt] error caught during app initialization",...o)});n.hook("app:mounted",s)}const r=rt(n.payload.config);return n.provide("config",r),n}async function Zf(e,t){if(t.hooks&&e.hooks.addHooks(t.hooks),typeof t=="function"){const{provide:n}=await e.runWithContext(()=>t(e))||{};if(n&&typeof n=="object")for(const r in n)e.provide(r,n[r])}}async function Qf(e,t){const n=[],r=[];for(const s of t){const o=Zf(e,s);s.parallel?n.push(o.catch(i=>r.push(i))):await o}if(await Promise.all(n),r.length)throw r[0]}/*! @__NO_SIDE_EFFECTS__ */function jt(e){return typeof e=="function"?e:(delete e.name,Object.assign(e.setup||(()=>{}),e,{[Yf]:!0}))}function ed(e,t,n){const r=()=>n?t(...n):t();return Ca.set(e),e.vueApp.runWithContext(r)}/*! @__NO_SIDE_EFFECTS__ */function de(){var t;let e;if(Zi()&&(e=(t=Hs())==null?void 0:t.appContext.app.$nuxt),e=e||Ca.tryUse(),!e)throw new Error("[nuxt] instance unavailable");return e}/*! @__NO_SIDE_EFFECTS__ */function Bn(){return de().$config}function vn(e,t,n){Object.defineProperty(e,t,{get:()=>n})}const td="modulepreload",nd=function(e,t){return e.startsWith(".")?new URL(e,t).href:e},xo={},rd=function(t,n,r){if(!n||n.length===0)return t();const s=document.getElementsByTagName("link");return Promise.all(n.map(o=>{if(o=nd(o,r),o in xo)return;xo[o]=!0;const i=o.endsWith(".css"),a=i?'[rel="stylesheet"]':"";if(!!r)for(let d=s.length-1;d>=0;d--){const f=s[d];if(f.href===o&&(!i||f.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${o}"]${a}`))return;const l=document.createElement("link");if(l.rel=i?"stylesheet":td,i||(l.as="script",l.crossOrigin=""),l.href=o,document.head.appendChild(l),i)return new Promise((d,f)=>{l.addEventListener("load",d),l.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${o}`)))})})).then(()=>t())},zr=(...e)=>rd(...e).catch(t=>{const n=new Event("nuxt.preloadError");throw n.payload=t,window.dispatchEvent(n),t}),sd=-1,od=-2,id=-3,ad=-4,cd=-5,ld=-6;function ud(e,t){return fd(JSON.parse(e),t)}function fd(e,t){if(typeof e=="number")return s(e,!0);if(!Array.isArray(e)||e.length===0)throw new Error("Invalid input");const n=e,r=Array(n.length);function s(o,i=!1){if(o===sd)return;if(o===id)return NaN;if(o===ad)return 1/0;if(o===cd)return-1/0;if(o===ld)return-0;if(i)throw new Error("Invalid input");if(o in r)return r[o];const a=n[o];if(!a||typeof a!="object")r[o]=a;else if(Array.isArray(a))if(typeof a[0]=="string"){const c=a[0],l=t==null?void 0:t[c];if(l)return r[o]=l(s(a[1]));switch(c){case"Date":r[o]=new Date(a[1]);break;case"Set":const d=new Set;r[o]=d;for(let y=1;y<a.length;y+=1)d.add(s(a[y]));break;case"Map":const f=new Map;r[o]=f;for(let y=1;y<a.length;y+=2)f.set(s(a[y]),s(a[y+1]));break;case"RegExp":r[o]=new RegExp(a[1],a[2]);break;case"Object":r[o]=Object(a[1]);break;case"BigInt":r[o]=BigInt(a[1]);break;case"null":const p=Object.create(null);r[o]=p;for(let y=1;y<a.length;y+=2)p[a[y]]=s(a[y+1]);break;default:throw new Error(`Unknown type ${c}`)}}else{const c=new Array(a.length);r[o]=c;for(let l=0;l<a.length;l+=1){const d=a[l];d!==od&&(c[l]=s(d))}}else{const c={};r[o]=c;for(const l in a){const d=a[l];c[l]=s(d)}}return r[o]}return s(0)}function dd(e){return Array.isArray(e)?e:[e]}const Ra=["title","script","style","noscript"],Ha=["base","meta","link","style","script","noscript"],hd=["title","titleTemplate","templateParams","base","htmlAttrs","bodyAttrs","meta","link","style","script","noscript"],pd=["base","title","titleTemplate","bodyAttrs","htmlAttrs","templateParams"],Oo=["tagPosition","tagPriority","tagDuplicateStrategy","innerHTML","textContent"];function Sa(e){let t=9;for(let n=0;n<e.length;)t=Math.imul(t^e.charCodeAt(n++),9**9);return((t^t>>>9)+65536).toString(16).substring(1,8).toLowerCase()}function Jr(e){return Sa(`${e.tag}:${e.textContent||e.innerHTML||""}:${Object.entries(e.props).map(([t,n])=>`${t}:${String(n)}`).join(",")}`)}function gd(e){let t=9;for(const n of e)for(let r=0;r<n.length;)t=Math.imul(t^n.charCodeAt(r++),9**9);return((t^t>>>9)+65536).toString(16).substring(1,8).toLowerCase()}function xa(e,t){const{props:n,tag:r}=e;if(pd.includes(r))return r;if(r==="link"&&n.rel==="canonical")return"canonical";if(n.charset)return"charset";const s=["id"];r==="meta"&&s.push("name","property","http-equiv");for(const o of s)if(typeof n[o]<"u"){const i=String(n[o]);return t&&!t(i)?!1:`${r}:${o}:${i}`}return!1}function Po(e,t){return e==null?t||null:typeof e=="function"?e(t):e}function En(e,t=!1,n){const{tag:r,$el:s}=e;s&&(Object.entries(r.props).forEach(([o,i])=>{i=String(i);const a=`attr:${o}`;if(o==="class"){if(!i)return;for(const c of i.split(" ")){const l=`${a}:${c}`;n&&n(e,l,()=>s.classList.remove(c)),s.classList.contains(c)||s.classList.add(c)}return}n&&!o.startsWith("data-h-")&&n(e,a,()=>s.removeAttribute(o)),(t||s.getAttribute(o)!==i)&&s.setAttribute(o,i)}),Ra.includes(r.tag)&&(r.textContent&&r.textContent!==s.textContent?s.textContent=r.textContent:r.innerHTML&&r.innerHTML!==s.innerHTML&&(s.innerHTML=r.innerHTML)))}let Wt=!1;async function md(e,t={}){var p,y;const n={shouldRender:!0};if(await e.hooks.callHook("dom:beforeRender",n),!n.shouldRender)return;const r=t.document||e.resolvedOptions.document||window.document,s=(await e.resolveTags()).map(a);if(e.resolvedOptions.experimentalHashHydration&&(Wt=Wt||e._hash||!1,Wt)){const g=gd(s.map(T=>T.tag._h));if(Wt===g)return;Wt=g}const o=e._popSideEffectQueue();e.headEntries().map(g=>g._sde).forEach(g=>{Object.entries(g).forEach(([T,D])=>{o[T]=D})});const i=(g,T,D)=>{T=`${g.renderId}:${T}`,g.entry&&(g.entry._sde[T]=D),delete o[T]};function a(g){const T=e.headEntries().find(_=>_._i===g._e),D={renderId:g._d||Jr(g),$el:null,shouldRender:!0,tag:g,entry:T,markSideEffect:(_,b)=>i(D,_,b)};return D}const c=[],l={body:[],head:[]},d=g=>{e._elMap[g.renderId]=g.$el,c.push(g),i(g,"el",()=>{var T;(T=g.$el)==null||T.remove(),delete e._elMap[g.renderId]})};for(const g of s){if(await e.hooks.callHook("dom:beforeRenderTag",g),!g.shouldRender)continue;const{tag:T}=g;if(T.tag==="title"){r.title=T.textContent||"",c.push(g);continue}if(T.tag==="htmlAttrs"||T.tag==="bodyAttrs"){g.$el=r[T.tag==="htmlAttrs"?"documentElement":"body"],En(g,!1,i),c.push(g);continue}if(g.$el=e._elMap[g.renderId],!g.$el&&T.key&&(g.$el=r.querySelector(`${(p=T.tagPosition)!=null&&p.startsWith("body")?"body":"head"} > ${T.tag}[data-h-${T._h}]`)),g.$el){g.tag._d&&En(g),d(g);continue}l[(y=T.tagPosition)!=null&&y.startsWith("body")?"body":"head"].push(g)}const f={bodyClose:void 0,bodyOpen:void 0,head:void 0};Object.entries(l).forEach(([g,T])=>{var _;if(!T.length)return;const D=(_=r==null?void 0:r[g])==null?void 0:_.children;if(D){for(const b of[...D].reverse()){const M=b.tagName.toLowerCase();if(!Ha.includes(M))continue;const I=b.getAttributeNames().reduce((S,j)=>({...S,[j]:b.getAttribute(j)}),{}),O={tag:M,props:I};b.innerHTML&&(O.innerHTML=b.innerHTML);const U=Jr(O);let B=T.findIndex(S=>(S==null?void 0:S.renderId)===U);if(B===-1){const S=xa(O);B=T.findIndex(j=>(j==null?void 0:j.tag._d)&&j.tag._d===S)}if(B!==-1){const S=T[B];S.$el=b,En(S),d(S),delete T[B]}}T.forEach(b=>{const M=b.tag.tagPosition||"head";f[M]=f[M]||r.createDocumentFragment(),b.$el||(b.$el=r.createElement(b.tag.tag),En(b,!0)),f[M].appendChild(b.$el),d(b)})}}),f.head&&r.head.appendChild(f.head),f.bodyOpen&&r.body.insertBefore(f.bodyOpen,r.body.firstChild),f.bodyClose&&r.body.appendChild(f.bodyClose);for(const g of c)await e.hooks.callHook("dom:renderTag",g);Object.values(o).forEach(g=>g())}let _r=null;async function yd(e,t={}){function n(){return _r=null,md(e,t)}const r=t.delayFn||(s=>setTimeout(s,10));return _r=_r||new Promise(s=>r(()=>s(n())))}function bd(e){return{hooks:{"entries:updated":function(t){if(typeof(e==null?void 0:e.document)>"u"&&typeof window>"u")return;let n=e==null?void 0:e.delayFn;!n&&typeof requestAnimationFrame<"u"&&(n=requestAnimationFrame),yd(t,{document:(e==null?void 0:e.document)||window.document,delayFn:n})}}}}function _d(e){var t;return((t=e==null?void 0:e.head.querySelector('meta[name="unhead:ssr"]'))==null?void 0:t.getAttribute("content"))||!1}const $o={base:-1,title:1},Mo={critical:-8,high:-1,low:2};function Ln(e){let t=10;const n=e.tagPriority;return typeof n=="number"?n:(e.tag==="meta"?(e.props.charset&&(t=-2),e.props["http-equiv"]==="content-security-policy"&&(t=0)):e.tag=="link"&&e.props.rel==="preconnect"?t=2:e.tag in $o&&(t=$o[e.tag]),typeof n=="string"&&n in Mo?t+Mo[n]:t)}const wd=[{prefix:"before:",offset:-1},{prefix:"after:",offset:1}];function vd(){return{hooks:{"tags:resolve":e=>{const t=n=>{var r;return(r=e.tags.find(s=>s._d===n))==null?void 0:r._p};for(const{prefix:n,offset:r}of wd)for(const s of e.tags.filter(o=>typeof o.tagPriority=="string"&&o.tagPriority.startsWith(n))){const o=t(s.tagPriority.replace(n,""));typeof o<"u"&&(s._p=o+r)}e.tags.sort((n,r)=>n._p-r._p).sort((n,r)=>Ln(n)-Ln(r))}}}}function Ed(){return{hooks:{"tags:resolve":e=>{const{tags:t}=e;let n=t.findIndex(s=>s.tag==="titleTemplate");const r=t.findIndex(s=>s.tag==="title");if(r!==-1&&n!==-1){const s=Po(t[n].textContent,t[r].textContent);s!==null?t[r].textContent=s||t[r].textContent:delete t[r]}else if(n!==-1){const s=Po(t[n].textContent);s!==null&&(t[n].textContent=s,t[n].tag="title",n=-1)}n!==-1&&delete t[n],e.tags=t.filter(Boolean)}}}}function Id(){return{hooks:{"tag:normalise":function({tag:e}){typeof e.props.body<"u"&&(e.tagPosition="bodyClose",delete e.props.body)}}}}const Td=["link","style","script","noscript"];function Ad(){return{hooks:{"tag:normalise":({tag:e,resolvedOptions:t})=>{t.experimentalHashHydration===!0&&(e._h=Jr(e)),e.key&&Td.includes(e.tag)&&(e._h=Sa(e.key),e.props[`data-h-${e._h}`]="")}}}}const ko=["script","link","bodyAttrs"];function Cd(){const e=(t,n)=>{const r={},s={};Object.entries(n.props).forEach(([i,a])=>{i.startsWith("on")&&typeof a=="function"?s[i]=a:r[i]=a});let o;return t==="dom"&&n.tag==="script"&&typeof r.src=="string"&&typeof s.onload<"u"&&(o=r.src,delete r.src),{props:r,eventHandlers:s,delayedSrc:o}};return{hooks:{"ssr:render":function(t){t.tags=t.tags.map(n=>(!ko.includes(n.tag)||!Object.entries(n.props).find(([r,s])=>r.startsWith("on")&&typeof s=="function")||(n.props=e("ssr",n).props),n))},"dom:beforeRenderTag":function(t){if(!ko.includes(t.tag.tag)||!Object.entries(t.tag.props).find(([o,i])=>o.startsWith("on")&&typeof i=="function"))return;const{props:n,eventHandlers:r,delayedSrc:s}=e("dom",t.tag);Object.keys(r).length&&(t.tag.props=n,t.tag._eventHandlers=r,t.tag._delayedSrc=s)},"dom:renderTag":function(t){const n=t.$el;if(!t.tag._eventHandlers||!n)return;const r=t.tag.tag==="bodyAttrs"&&typeof window<"u"?window:n;Object.entries(t.tag._eventHandlers).forEach(([s,o])=>{const i=`${t.tag._d||t.tag._p}:${s}`,a=s.slice(2).toLowerCase(),c=`data-h-${a}`;if(t.markSideEffect(i,()=>{}),n.hasAttribute(c))return;const l=o;n.setAttribute(c,""),r.addEventListener(a,l),t.entry&&(t.entry._sde[i]=()=>{r.removeEventListener(a,l),n.removeAttribute(c)})}),t.tag._delayedSrc&&n.setAttribute("src",t.tag._delayedSrc)}}}}const Rd=["templateParams","htmlAttrs","bodyAttrs"];function Hd(){return{hooks:{"tag:normalise":function({tag:e}){["hid","vmid","key"].forEach(r=>{e.props[r]&&(e.key=e.props[r],delete e.props[r])});const n=xa(e)||(e.key?`${e.tag}:${e.key}`:!1);n&&(e._d=n)},"tags:resolve":function(e){const t={};e.tags.forEach(r=>{const s=(r.key?`${r.tag}:${r.key}`:r._d)||r._p,o=t[s];if(o){let a=r==null?void 0:r.tagDuplicateStrategy;if(!a&&Rd.includes(r.tag)&&(a="merge"),a==="merge"){const c=o.props;["class","style"].forEach(l=>{r.props[l]&&c[l]&&(l==="style"&&!c[l].endsWith(";")&&(c[l]+=";"),r.props[l]=`${c[l]} ${r.props[l]}`)}),t[s].props={...c,...r.props};return}else if(r._e===o._e){o._duped=o._duped||[],r._d=`${o._d}:${o._duped.length+1}`,o._duped.push(r);return}else if(Ln(r)>Ln(o))return}const i=Object.keys(r.props).length+(r.innerHTML?1:0)+(r.textContent?1:0);if(Ha.includes(r.tag)&&i===0){delete t[s];return}t[s]=r});const n=[];Object.values(t).forEach(r=>{const s=r._duped;delete r._duped,n.push(r),s&&n.push(...s)}),e.tags=n}}}}function Kt(e,t){if(typeof e!="string")return e;function n(i){if(["s","pageTitle"].includes(i))return t.pageTitle;let a;return i.includes(".")?a=i.split(".").reduce((c,l)=>c&&c[l]||void 0,t):a=t[i],typeof a<"u"?a||"":!1}let r=e;try{r=decodeURI(e)}catch{}(r.match(/%(\w+\.+\w+)|%(\w+)/g)||[]).sort().reverse().forEach(i=>{const a=n(i.slice(1));typeof a=="string"&&(e=e.replace(new RegExp(`\\${i}(\\W|$)`,"g"),(c,l)=>`${a}${l}`).trim())});const o=t.separator;return e.includes(o)&&(e.endsWith(o)&&(e=e.slice(0,-o.length).trim()),e.startsWith(o)&&(e=e.slice(o.length).trim()),e=e.replace(new RegExp(`\\${o}\\s*\\${o}`,"g"),o)),e}function Sd(){return{hooks:{"tags:resolve":e=>{var o;const{tags:t}=e,n=(o=t.find(i=>i.tag==="title"))==null?void 0:o.textContent,r=t.findIndex(i=>i.tag==="templateParams"),s=r!==-1?t[r].props:{};s.separator=s.separator||"|",s.pageTitle=Kt(s.pageTitle||n||"",s);for(const i of t)if(["titleTemplate","title"].includes(i.tag)&&typeof i.textContent=="string")i.textContent=Kt(i.textContent,s);else if(i.tag==="meta"&&typeof i.props.content=="string")i.props.content=Kt(i.props.content,s);else if(i.tag==="link"&&typeof i.props.href=="string")i.props.href=Kt(i.props.href,s);else if(i.tag==="script"&&["application/json","application/ld+json"].includes(i.props.type)&&typeof i.innerHTML=="string")try{i.innerHTML=JSON.stringify(JSON.parse(i.innerHTML),(a,c)=>typeof c=="string"?Kt(c,s):c)}catch{}e.tags=t.filter(i=>i.tag!=="templateParams")}}}}const xd=typeof window<"u";let Oa;function Od(e){return Oa=e}function Pd(){return Oa}async function $d(e,t,n){const r={tag:e,props:{}};return t instanceof Promise&&(t=await t),e==="templateParams"?(r.props=t,r):["title","titleTemplate"].includes(e)?(t&&typeof t=="object"?(r.textContent=t.textContent,t.tagPriority&&(r.tagPriority=t.tagPriority)):r.textContent=t,r):typeof t=="string"?["script","noscript","style"].includes(e)?(e==="script"&&(/^(https?:)?\/\//.test(t)||t.startsWith("/"))?r.props.src=t:r.innerHTML=t,r):!1:(r.props=await kd(e,{...t}),r.props.children&&(r.props.innerHTML=r.props.children),delete r.props.children,Object.keys(r.props).filter(s=>Oo.includes(s)).forEach(s=>{(!["innerHTML","textContent"].includes(s)||Ra.includes(r.tag))&&(r[s]=r.props[s]),delete r.props[s]}),Oo.forEach(s=>{!r[s]&&n[s]&&(r[s]=n[s])}),["innerHTML","textContent"].forEach(s=>{if(r.tag==="script"&&typeof r[s]=="string"&&["application/ld+json","application/json"].includes(r.props.type))try{r[s]=JSON.parse(r[s])}catch{r[s]=""}typeof r[s]=="object"&&(r[s]=JSON.stringify(r[s]))}),r.props.class&&(r.props.class=Md(r.props.class)),r.props.content&&Array.isArray(r.props.content)?r.props.content.map(s=>({...r,props:{...r.props,content:s}})):r)}function Md(e){return typeof e=="object"&&!Array.isArray(e)&&(e=Object.keys(e).filter(t=>e[t])),(Array.isArray(e)?e.join(" "):e).split(" ").filter(t=>t.trim()).filter(Boolean).join(" ")}async function kd(e,t){for(const n of Object.keys(t)){const r=n.startsWith("data-");t[n]instanceof Promise&&(t[n]=await t[n]),String(t[n])==="true"?t[n]=r?"true":"":String(t[n])==="false"&&(r?t[n]="false":delete t[n])}return t}const Dd=10;async function Nd(e){const t=[];return Object.entries(e.resolvedInput).filter(([n,r])=>typeof r<"u"&&hd.includes(n)).forEach(([n,r])=>{const s=dd(r);t.push(...s.map(o=>$d(n,o,e)).flat())}),(await Promise.all(t)).flat().filter(Boolean).map((n,r)=>(n._e=e._i,n._p=(e._i<<Dd)+r,n))}function Bd(){return[Hd(),vd(),Sd(),Ed(),Ad(),Cd(),Id()]}function Ld(e={}){return[bd({document:e==null?void 0:e.document,delayFn:e==null?void 0:e.domDelayFn})]}function Fd(e={}){const t=jd({...e,plugins:[...Ld(e),...(e==null?void 0:e.plugins)||[]]});return e.experimentalHashHydration&&t.resolvedOptions.document&&(t._hash=_d(t.resolvedOptions.document)),Od(t),t}function jd(e={}){let t=[],n={},r=0;const s=Aa();e!=null&&e.hooks&&s.addHooks(e.hooks),e.plugins=[...Bd(),...(e==null?void 0:e.plugins)||[]],e.plugins.forEach(a=>a.hooks&&s.addHooks(a.hooks)),e.document=e.document||(xd?document:void 0);const o=()=>s.callHook("entries:updated",i),i={resolvedOptions:e,headEntries(){return t},get hooks(){return s},use(a){a.hooks&&s.addHooks(a.hooks)},push(a,c){const l={_i:r++,input:a,_sde:{},...c},d=(l==null?void 0:l.mode)||e.mode;return d&&(l.mode=d),t.push(l),o(),{dispose(){t=t.filter(f=>f._i!==l._i?!0:(n={...n,...f._sde||{}},f._sde={},o(),!1))},patch(f){t=t.map(p=>(p._i===l._i&&(l.input=p.input=f,o()),p))}}},async resolveTags(){const a={tags:[],entries:[...t]};await s.callHook("entries:resolve",a);for(const c of a.entries){const l=c.resolvedInput||c.input;if(c.resolvedInput=await(c.transform?c.transform(l):l),c.resolvedInput)for(const d of await Nd(c)){const f={tag:d,entry:c,resolvedOptions:i.resolvedOptions};await s.callHook("tag:normalise",f),a.tags.push(f.tag)}}return await s.callHook("tags:beforeResolve",a),await s.callHook("tags:resolve",a),a.tags},_popSideEffectQueue(){const a={...n};return n={},a},_elMap:{}};return i.hooks.callHook("init",i),i}function Ud(e){return typeof e=="function"?e():K(e)}function Fn(e,t=""){if(e instanceof Promise)return e;const n=Ud(e);return!e||!n?n:Array.isArray(n)?n.map(r=>Fn(r,t)):typeof n=="object"?Object.fromEntries(Object.entries(n).map(([r,s])=>r==="titleTemplate"||r.startsWith("on")?[r,K(s)]:[r,Fn(s,r)])):n}const Wd=da.startsWith("3"),Kd=typeof window<"u",Pa="usehead";function Ps(){return Hs()&&xt(Pa)||Pd()}function Vd(e){return{install(n){Wd&&(n.config.globalProperties.$unhead=e,n.config.globalProperties.$head=e,n.provide(Pa,e))}}.install}function qd(e={}){const t=Fd({...e,domDelayFn:n=>setTimeout(()=>Yn(()=>n()),10),plugins:[zd(),...(e==null?void 0:e.plugins)||[]]});return t.install=Vd(t),t}function zd(){return{hooks:{"entries:resolve":function(e){for(const t of e.entries)t.resolvedInput=Fn(t.input)}}}}function Jd(e,t={}){const n=Ps(),r=he(!1),s=he({});Bl(()=>{s.value=r.value?{}:Fn(e)});const o=n.push(s.value,t);return Jt(s,a=>{o.patch(a)}),Hs()&&(Wi(()=>{o.dispose()}),ji(()=>{r.value=!0}),Fi(()=>{r.value=!1})),o}function Gd(e,t={}){return Ps().push(e,t)}function Yd(e,t={}){var r;const n=Ps();if(n){const s=Kd||!!((r=n.resolvedOptions)!=null&&r.document);return t.mode==="server"&&s||t.mode==="client"&&!s?void 0:s?Jd(e,t):Gd(e,t)}}const Xd={meta:[{name:"viewport",content:"width=device-width, initial-scale=1"},{charset:"utf-8"}],link:[],style:[],script:[],noscript:[]},Zd="__nuxt",Qd=!0;function Do(e,t={}){const n=eh(e,t),r=de(),s=r._payloadCache=r._payloadCache||{};return s[n]||(s[n]=$a(n).then(o=>o||(delete s[n],null))),s[n]}const No="json";function eh(e,t={}){const n=new URL(e,"http://localhost");if(n.search)throw new Error("Payload URL cannot contain search params: "+e);if(n.host!=="localhost"||nr(n.pathname,{acceptRelative:!0}))throw new Error("Payload URL must not include hostname: "+e);const r=t.hash||(t.fresh?Date.now():"");return Ft(Bn().app.baseURL,n.pathname,r?`_payload.${r}.${No}`:`_payload.${No}`)}async function $a(e){try{return Qd?Ma(await fetch(e).then(t=>t.text())):await zr(()=>import(e),[],import.meta.url).then(t=>t.default||t)}catch(t){console.warn("[nuxt] Cannot load payload ",e,t)}return null}function th(){return!!de().payload.prerenderedAt}let In=null;async function nh(){if(In)return In;const e=document.getElementById("__NUXT_DATA__");if(!e)return{};const t=Ma(e.textContent||""),n=e.dataset.src?await $a(e.dataset.src):void 0;return In={...t,...n,...window.__NUXT__},In}function Ma(e){return ud(e,de()._payloadRevivers)}function rh(e,t){de()._payloadRevivers[e]=t}class Gr extends Error{constructor(){super(...arguments),this.statusCode=500,this.fatal=!1,this.unhandled=!1}toJSON(){const t={message:this.message,statusCode:Yr(this.statusCode,500)};return this.statusMessage&&(t.statusMessage=ka(this.statusMessage)),this.data!==void 0&&(t.data=this.data),t}}Gr.__h3_error__=!0;function sh(e){if(typeof e=="string")return new Gr(e);if(oh(e))return e;const t=new Gr(e.message??e.statusMessage??"",e.cause?{cause:e.cause}:void 0);if("stack"in e)try{Object.defineProperty(t,"stack",{get(){return e.stack}})}catch{try{t.stack=e.stack}catch{}}if(e.data&&(t.data=e.data),e.statusCode?t.statusCode=Yr(e.statusCode,t.statusCode):e.status&&(t.statusCode=Yr(e.status,t.statusCode)),e.statusMessage?t.statusMessage=e.statusMessage:e.statusText&&(t.statusMessage=e.statusText),t.statusMessage){const n=t.statusMessage;ka(t.statusMessage)!==n&&console.warn("[h3] Please prefer using `message` for longer error messages instead of `statusMessage`. In the future, `statusMessage` will be sanitized by default.")}return e.fatal!==void 0&&(t.fatal=e.fatal),e.unhandled!==void 0&&(t.unhandled=e.unhandled),t}function oh(e){var t;return((t=e==null?void 0:e.constructor)==null?void 0:t.__h3_error__)===!0}const ih=/[^\u0009\u0020-\u007E]/g;function ka(e=""){return e.replace(ih,"")}function Yr(e,t=200){return!e||(typeof e=="string"&&(e=Number.parseInt(e,10)),e<100||e>999)?t:e}const ah="$s";function ch(...e){const t=typeof e[e.length-1]=="string"?e.pop():void 0;typeof e[0]!="string"&&e.unshift(t);const[n,r]=e;if(!n||typeof n!="string")throw new TypeError("[nuxt] [useState] key must be a string: "+n);if(r!==void 0&&typeof r!="function")throw new Error("[nuxt] [useState] init must be a function: "+r);const s=ah+n,o=de(),i=Pi(o.payload.state,s);if(i.value===void 0&&r){const a=r();if(ue(a))return o.payload.state[s]=a,a;i.value=a}return i}const Da=Symbol("route"),rr=()=>{var e;return(e=de())==null?void 0:e.$router},lh=()=>Zi()?xt(Da,de()._route):de()._route,uh=()=>{try{if(de()._processingMiddleware)return!0}catch{return!0}return!1},fh=(e,t)=>{e||(e="/");const n=typeof e=="string"?e:ba(e.path||"/",e.query||{})+(e.hash||"");if(t!=null&&t.open){{const{target:a="_blank",windowFeatures:c={}}=t.open,l=Object.entries(c).filter(([d,f])=>f!==void 0).map(([d,f])=>`${d.toLowerCase()}=${f}`).join(", ");open(n,a,l)}return Promise.resolve()}const r=(t==null?void 0:t.external)||nr(n,{acceptRelative:!0});if(r&&!(t!=null&&t.external))throw new Error("Navigating to external URL is not allowed by default. Use `navigateTo (url, { external: true })`.");if(r&&un(n).protocol==="script:")throw new Error("Cannot navigate to an URL with script protocol.");const s=uh();if(!r&&s)return e;const o=rr(),i=de();return r?(t!=null&&t.replace?location.replace(n):location.href=n,s?i.isHydrating?new Promise(()=>{}):!1:Promise.resolve()):t!=null&&t.replace?o.replace(e):o.push(e)},$s=()=>Pi(de().payload,"error"),dh=e=>{const t=Na(e);try{const n=de(),r=$s();n.hooks.callHook("app:error",t),r.value=r.value||t}catch{throw t}return t},hh=async(e={})=>{const t=de(),n=$s();t.callHook("app:error:cleared",e),e.redirect&&await rr().replace(e.redirect),n.value=null},ph=e=>!!(e&&typeof e=="object"&&"__nuxt_error"in e),Na=e=>{const t=sh(e);return t.__nuxt_error=!0,t},Bo={NuxtError:e=>Na(e),EmptyShallowRef:e=>eo(e==="_"?void 0:e==="0n"?BigInt(0):JSON.parse(e)),EmptyRef:e=>he(e==="_"?void 0:e==="0n"?BigInt(0):JSON.parse(e)),ShallowRef:e=>eo(e),ShallowReactive:e=>Ti(e),Ref:e=>he(e),Reactive:e=>rt(e)},gh=jt({name:"nuxt:revive-payload:client",order:-30,async setup(e){let t,n;for(const r in Bo)rh(r,Bo[r]);Object.assign(e.payload,([t,n]=Gf(()=>e.runWithContext(nh)),t=await t,n(),t)),window.__NUXT__=e.payload}}),mh=[];function wr(e){typeof e=="object"&&(e=wa({pathname:e.path||"",search:ma(e.query||{}),hash:e.hash||""}));const t=un(e.toString());return{path:t.pathname,fullPath:e,query:ga(t.search),hash:t.hash,params:{},name:void 0,matched:[],redirectedFrom:void 0,meta:{},href:e}}const yh=jt({name:"nuxt:router",enforce:"pre",setup(e){const t=_f(window.location.pathname,Bn().app.baseURL)+window.location.search+window.location.hash,n=[],r={"navigate:before":[],"resolve:before":[],"navigate:after":[],error:[]},s=(d,f)=>(r[d].push(f),()=>r[d].splice(r[d].indexOf(f),1)),o=Bn().app.baseURL,i=rt(wr(t));async function a(d,f){try{const p=wr(d);for(const y of r["navigate:before"]){const g=await y(p,i);if(g===!1||g instanceof Error)return;if(g)return a(g,!0)}for(const y of r["resolve:before"])await y(p,i);Object.assign(i,p),window.history[f?"replaceState":"pushState"]({},"",Ft(o,p.fullPath)),e.isHydrating||await e.runWithContext(hh);for(const y of r["navigate:after"])await y(p,i)}catch(p){for(const y of r.error)await y(p)}}const c={currentRoute:i,isReady:()=>Promise.resolve(),options:{},install:()=>Promise.resolve(),push:d=>a(d,!1),replace:d=>a(d,!0),back:()=>window.history.go(-1),go:d=>window.history.go(d),forward:()=>window.history.go(1),beforeResolve:d=>s("resolve:before",d),beforeEach:d=>s("navigate:before",d),afterEach:d=>s("navigate:after",d),onError:d=>s("error",d),resolve:wr,addRoute:(d,f)=>{n.push(f)},getRoutes:()=>n,hasRoute:d=>n.some(f=>f.name===d),removeRoute:d=>{const f=n.findIndex(p=>p.name===d);f!==-1&&n.splice(f,1)}};e.vueApp.component("RouterLink",{functional:!0,props:{to:String,custom:Boolean,replace:Boolean,activeClass:String,exactActiveClass:String,ariaCurrentValue:String},setup:(d,{slots:f})=>{const p=()=>a(d.to,d.replace);return()=>{var g;const y=c.resolve(d.to);return d.custom?(g=f.default)==null?void 0:g.call(f,{href:d.to,navigate:p,route:y}):Au("a",{href:d.to,onClick:T=>(T.preventDefault(),p())},f)}}}),window.addEventListener("popstate",d=>{const f=d.target.location;c.replace(f.href.replace(f.origin,""))}),e._route=i,e._middleware=e._middleware||{global:[],named:{}};const l=ch("_layout");return e.hooks.hookOnce("app:created",async()=>{c.beforeEach(async(d,f)=>{d.meta=rt(d.meta||{}),e.isHydrating&&l.value&&!pt(d.meta.layout)&&(d.meta.layout=l.value),e._processingMiddleware=!0;{const p=new Set([...mh,...e._middleware.global]);for(const y of p){const g=await e.runWithContext(()=>y(d,f));if(g||g===!1)return g}}}),c.afterEach(()=>{delete e._processingMiddleware}),await c.replace(t),Ef(i.fullPath,t)||await e.runWithContext(()=>fh(i.fullPath))}),{provide:{route:i,router:c}}}}),bh=jt({name:"nuxt:payload",setup(e){th()&&(e.hooks.hook("link:prefetch",async t=>{un(t).protocol||await Do(t)}),rr().beforeResolve(async(t,n)=>{if(t.path===n.path)return;const r=await Do(t.path);r&&Object.assign(e.static.data,r.data)}))}}),_h=jt({name:"nuxt:global-components"}),wh=jt({name:"nuxt:head",setup(e){const n=qd();n.push(Xd),e.vueApp.use(n);{let r=!0;const s=()=>{r=!1,n.hooks.callHook("entries:updated",n)};n.hooks.hook("dom:beforeRender",o=>{o.shouldRender=!r}),e.hooks.hook("page:start",()=>{r=!0}),e.hooks.hook("page:finish",s),e.hooks.hook("app:suspense:resolve",s)}}});function vh(e={}){const t=e.path||window.location.pathname;let n={};try{n=JSON.parse(sessionStorage.getItem("nuxt:reload")||"{}")}catch{}if(e.force||(n==null?void 0:n.path)!==t||(n==null?void 0:n.expires)<Date.now()){try{sessionStorage.setItem("nuxt:reload",JSON.stringify({path:t,expires:Date.now()+(e.ttl??1e4)}))}catch{}if(e.persistState)try{sessionStorage.setItem("nuxt:reload:state",JSON.stringify({state:de().payload.state}))}catch{}window.location.pathname!==t?window.location.href=t:window.location.reload()}}const Eh=jt({name:"nuxt:chunk-reload",setup(e){const t=rr(),n=Bn(),r=new Set;t.beforeEach(()=>{r.clear()}),e.hook("app:chunkError",({error:s})=>{r.add(s)}),t.onError((s,o)=>{if(r.has(s)){const a="href"in o&&o.href.startsWith("#")?n.app.baseURL+o.href:Ft(n.app.baseURL,o.fullPath);vh({path:a,persistState:!0})}})}}),Ih=[gh,yh,bh,_h,wh,Eh],Th=e=>Object.fromEntries(Object.entries(e).filter(([,t])=>t!==void 0)),Ah=(e,t)=>(n,r)=>(Yd(()=>e({...Th(n),...r.attrs},r)),()=>{var s,o;return t?(o=(s=r.slots).default)==null?void 0:o.call(s):null}),Ch=_t({name:"Title",inheritAttrs:!1,setup:Ah((e,{slots:t})=>{var n,r,s;return{title:((s=(r=(n=t.default)==null?void 0:n.call(t))==null?void 0:r[0])==null?void 0:s.children)||null}})}),Rh={class:"text-center"},Hh=["textContent"],Sh={class:"btn-group"},xh=_t({__name:"Problem",props:{problem:{}},emits:["answer"],setup(e,{emit:t}){const n=e;return(r,s)=>(ce(),Xe("div",Rh,[X("div",{class:"h1",textContent:Be(n.problem)},null,8,Hh),X("div",Sh,[X("button",{class:"btn btn-outline-primary",onClick:s[0]||(s[0]=o=>t("answer",!1))},"X"),X("button",{class:"btn btn-primary",onClick:s[1]||(s[1]=o=>t("answer",!0))},"O")])]))}}),Oh={class:"text-center"},Ph=["textContent"],$h={class:"h2"},Mh={class:"h2"},kh={class:"h2"},Dh=_t({__name:"ProblemResult",props:{problem:{},userAnswer:{type:Boolean},correctAnswer:{type:Boolean}},emits:["next"],setup(e,{emit:t}){const n=e;return(r,s)=>(ce(),Xe("div",Oh,[X("div",{class:"h1",textContent:Be(n.problem)},null,8,Ph),X("div",$h,"あなたの回答 : "+Be(r.userAnswer?"O":"X"),1),X("div",Mh,"正しい回答 : "+Be(r.correctAnswer?"O":"X"),1),X("div",kh,"正誤 : "+Be(r.userAnswer===r.correctAnswer?"正":"誤"),1),X("button",{class:"btn btn-primary",onClick:s[0]||(s[0]=o=>t("next"))},"次へ")]))}}),Nh={class:"text-center"},Bh={class:"table table-striped table-responsive"},Lh=X("thead",null,[X("tr",null,[X("th",null,"問題"),X("th",null,"あなた"),X("th",null,"正解"),X("th",null,"正誤")])],-1),Fh=_t({__name:"Result",props:{result:{}},emits:["next"],setup(e,{emit:t}){return(n,r)=>(ce(),Xe("div",Nh,[X("table",Bh,[Lh,X("tbody",null,[(ce(!0),Xe(Ee,null,Ji(n.result,s=>(ce(),Xe("tr",null,[X("th",null,Be(s.problem),1),X("th",null,Be(s.userAnswer?"O":"X"),1),X("th",null,Be(s.correctAnswer?"O":"X"),1),X("th",null,Be(s.userAnswer===s.correctAnswer?"正":"誤"),1)]))),256))])]),X("button",{class:"btn btn-primary",onClick:r[0]||(r[0]=s=>t("next"))},"次へ")]))}}),jh=_t({__name:"Session",props:{data:{}},setup(e){const n=e.data,r=he(!1),s=he(!1),o=he(!1);let i,a,c=he([]);const l=he(!1),d=he({problem:"",answer:!1}),p=n.split(`
`).map(y=>y.split(","));return(async()=>{for(;;){const g=[];for(var y=0;y<5;y++){const T=p[Math.floor(Math.random()*p.length)];d.value={problem:T[0],answer:T[1]==="○"},r.value=!0,await new Promise(D=>{i=_=>{l.value=_,D()}}),r.value=!1,s.value=!0,await new Promise(D=>{a=()=>{D()}}),s.value=!1,g.push({problem:d.value.problem,userAnswer:l.value,correctAnswer:d.value.answer})}await new Promise(T=>{c.value=g,o.value=!0,a=()=>T()}),o.value=!1}})(),(y,g)=>{const T=xh,D=Dh,_=Fh;return ce(),Xe("div",null,[K(r)?(ce(),Oe(T,{key:0,problem:K(d).problem,onAnswer:g[0]||(g[0]=b=>K(i)&&K(i)(b))},null,8,["problem"])):Cn("",!0),K(s)?(ce(),Oe(D,{key:1,problem:K(d).problem,userAnswer:K(l),correctAnswer:K(d).answer,onNext:g[1]||(g[1]=b=>K(a)&&K(a)())},null,8,["problem","userAnswer","correctAnswer"])):Cn("",!0),K(o)?(ce(),Oe(_,{key:2,result:K(c),onNext:g[2]||(g[2]=b=>K(a)&&K(a)())},null,8,["result"])):Cn("",!0)])}}}),Lo=`25-1-1 空気と混合する可燃性ガス濃度を変えて、燃焼速度を測ると、爆発下限界から単調に増加し、爆発上限界で最も大きくなる。,×\r
25-1-2 伝播する火炎が消炎する最大の隙間を消炎距離といい、消炎の可燃性ガス濃度依存および背圧の影響を考慮して最大安全隙間が決まる。,○\r
25-1-3 可燃性混合ガスの爆発下限界は、火炎温度が一定以上になる条件で概ね決まり、燃焼前の初期温度を上げると下限界濃度は低下する。,○\r
25-1-4 加圧された液体が常圧の沸点以上の温度にあるとき、容器の破壊などで圧力が解放されると液体が爆発的に蒸発する現象は蒸気爆発である。,○\r
26-1-1 可燃性混合ガスに火花で点火するとき、火花のエネルギーを小さくするほど発火する可燃性ガスの濃度範囲は狭くなっていき、あるエネルギー以下では発火しなくなる。,○\r
26-1-2 可燃性ガスの発火温度は、測定法によって異なる値をとるため、複数のガスで発火温度を比較する場合には、同じ測定法で得られた値を用いなければならない。,○\r
26-1-3 可燃性ガスの爆発危険性を緩和するために不活性ガスで希釈する場合、同じ体積を添加するのであれば不活性ガスの種類によらず、同等な効果が得られる。,×\r
26-1-4 爆ごうは、衝撃波を伴う強力な爆発であるため、爆ごう範囲は通常の爆発範囲より広い。,×\r
27-1-1 アセチレンやゲルマンは、支燃性ガスがなくとも単独で分解・爆発する性質がある。,○\r
27-1-2 可燃性液体の蒸気圧が低く、混合ガス中の濃度が爆発範囲に入っていなくても、炎を近づけると可燃性液体の温度が上がって蒸気圧が上昇し、引火することがある。,○\r
27-1-3 すべての可燃性ガスにおいて、圧力が上昇すると爆発上限界が上昇し、爆発下限界が低下して爆発範囲は広がる。,×\r
27-1-4 ボンベのバルブを急激に開くと、減圧調整器内が高温となり発火・爆発に至ることがあるが、これは高圧ガスの流入により静電気による火花が生じるためである。,×\r
28-1-1 空気中に可燃性液体のミストが白雲状に広がっていても、ミストが完全に蒸発しない限り爆発することはない。,×\r
28-1-2 管内で燃焼開始から爆ごうに転移するまでの距離は、管内の初期圧力と管径が同じであれば、可燃性ガスの種類によらない。,×\r
28-1-3 混合ガスを点火する場合にフランジのない棒状電極を用いると、電極間距離が消炎距離より短くても、火花のエネルギーが十分大きければ発火（着火）することがある。,○\r
28-1-4 一般に、爆発下限界における混合ガスの断熱火炎温度は、初期温度によらず一定である。,○\r
29-1-1 可燃性ガスを不活性ガスで希釈して爆発危険性を緩和する場合、不活性ガスとしてモル熱容量の小さな窒素を用いたほうが、二酸化炭素よりも効果が大きい。,×\r
29-1-2 一般に密閉容器内燃焼における断熱火炎温度は、常圧下における断熱火炎温度よりも高くなる。,○\r
29-1-3 爆発範囲の圧力依存性は可燃性ガスの種類により異なるが、温度依存性については可燃性ガスの種類によらず、高温になるほど爆発範囲が広がる。,○\r
29-1-4 可燃性ガスの発火温度は、実験条件下における発熱と放熱の釣り合いで決まるので、測定方法を変えても同じ値となる。,×\r
30-1-1 容器内で発生した火炎が狭い隙間を通り抜けて外部に伝播するときには、容器内の圧力が上昇しているため、常温、大気圧での消炎距離よりも狭い隙間としなければ消炎することができない。,○\r
30-1-2 可燃性混合ガスの最小発火エネルギーは化学量論組成付近で最小となり、圧力の増大とともにその値は大きくなり発火の危険性は減少する。,×\r
30-1-3 可燃性ガスと支燃性ガスの組み合わせが同じであれば、爆ごう範囲と爆発範囲はほぼ一致する。,×\r
30-1-4 水素と空気の混合ガスの最大燃焼速度は、プロパンと空気の混合ガスのそれよりも小さい。,○\r
R2-1-1 可燃性ガスを不活性ガスで希釈する場合、爆発上限界はあまり変化しないが、爆発下限界を上昇させる効果は大きい。,×\r
R2-1-2 ボンベのバルブを急激に開くと、減圧調整器内に高圧ガスが流入し、断熱圧縮により一時的に減圧調整器内のガスが高温となって発火源となることがある。,○\r
R2-1-3 フランジ付き電極間の放電による最小発火エネルギーの測定では、電極間隔を狭くしていくと急激に最小発火エネルギーが大きくなり発火しなくなる。このときのフランジ間隔が消炎距離である。,○\r
R2-1-4 管内の一端で可燃性混合ガスに点火すると、はじめは通常の燃焼波が伝播するが、やがて爆ごうに転移することがある。このとき、可燃性混合ガスの燃焼速度が大きいほど、圧力が高いほど、爆ごうへ転移するまでの距離（爆ごう誘導距離）は短くなる。,○\r
R3-1-1 飽和炭化水素では、爆発下限界濃度[vol%]と燃焼熱[kJ/mol]の積がほぼ一定である。,○\r
R3-1-2 一般に、密閉容器内燃焼における断熱火炎温度は常圧下における断熱火炎温度と等しい。,×\r
R3-1-3 可燃性ガスの発火温度は測定方法によって値が異なるので、異なったガス間で発火温度を比較するときは、同じ測定方法を用いる必要がある。,○\r
R3-1-4 容器内で加圧・加熱された液体が常圧の沸点以上の温度になっている時、容器が破れて圧力が急に解放されると液体が爆発的に蒸発することがあり、これを蒸気爆発という。,○\r
R4-1-1 可燃性液体の蒸気圧が低く、空気との混合ガスの濃度が爆発範囲に入っていなくても、炎を近づけると可燃性液体の温度が上がって蒸気圧が上昇し、引火することがある。,○\r
R4-1-2 断熱火炎温度とは、可燃性混合ガスの燃焼により発生した熱が外部に逃げずに、燃焼生成物の加熱にすべて使われると仮定して計算される温度である。,○\r
R4-1-3 空気中の酸素のモル分率をおよそ0.2とすれば、メタンと空気の混合体積比率がおよそ1：10のときに化学量論組成となり、爆発しやすい混合気となる。,○\r
R4-1-4 爆ごうは衝撃波を伴う強力な爆発であるため、同じ可燃性ガスと支燃性ガスの組み合わせであれば、爆ごう範囲は爆発範囲よりも広い。,×\r
25-2-1 水素は熱に対して不安定で拡散速度が大きく、配管や容器から高速で噴出したとき、固体微粉や液滴の混入があると静電気が発生し、その放電により発火することがある。,×\r
25-2-2 エチレンは、無色で独特の甘いにおいを持つ可燃性ガスで、水、アルコール、エーテルによく溶け、漏洩時には大量の水で吸収する方法が有効である。,×\r
25-2-3 二酸化硫黄は、強い刺激臭を持つ不燃性で毒性の強いガスであり、水に溶けると酸性を示す。,○\r
25-2-4 ホスゲンは、常温において乾燥状態では鉄をほとんど腐食しないが、水分が存在すると加水分解して塩酸を生じるため鉄を腐食する。,○\r
26-2-1 一酸化炭素は、可燃性かつ毒性のガスで極めて酸化性が強く、また、鉄族の金属と反応して金属カルボニルを生成する。,×\r
26-2-2 ヘリウムは、化学的に不活性であり、液体ヘリウムの沸点は物質の中で最も低い。,○\r
26-2-3 硫化水素は、無色で特有の腐卵臭を有する可燃性ガスであり、酸化性が強く、濃硝酸と激しく反応する。,×\r
26-2-4 アセチレンは、吸熱化合物であり、分解爆発を起こす危険性が高いので、容器に充填するときに溶解充填した。,○\r
27-2-1?水素は、高温高圧において、鋼材中の炭化物と反応してメタンを生成し、水素侵食を起こす。,○\r
27-2-2?炭酸ガスは、マグネシウムやナトリウムの消火にも有効である。,×\r
27-2-3?アンモニアは、空気中で可燃性を有し、エタンより最小発火エネルギーが小さい。,×\r
27-2-4?水分を含んだ塩素ガスは、常温で極めて腐食性が強く、チタン以外のほとんどの金属材料を激しく腐食する。,○\r
28-2-1?ブタジエンは三重結合をもっており、反応性に富み、種々の生成物が得られる。,×\r
28-2-2?亜酸化窒素は、分解爆発性があり、自動車用のエアバッグ・インフレーターに使用されている。,○\r
28-2-3?フッ素は常温で特有な刺激臭を持ち、塩素と同様の極めて強い毒性のある可燃性ガスである。,×\r
28-2-4?ゲルマンは無色、吐き気を催すような不快臭のあるガスで、毒性がある。,○\r
29-2-1?フッ素は、すべての元素の中で最も強い酸化力を持つ元素である。,○\r
29-2-2?塩素は水に溶解すると、塩酸と次亜塩素酸とを生ずる。,○\r
29-2-3?二酸化炭素は、大気圧で冷却すると液体になり、その液体を加圧すると固体のドライアイスになる。,×\r
29-2-4?酸素不足は生命の危険を招くが、純酸素は人体にとって無害である。,×\r
30-2-1 水素は、最小発火エネルギーが小さく、静電気放電は容易に発火源となりうる。,○\r
30-2-2 酸化エチレンは、常温大気圧下の爆発範囲の上限値が100vol%であり、大気圧下で空気が存在しなくても発火源があれば爆発を起こす分解爆発性がある。,○\r
30-2-3 アンモニアは、強い刺激臭を持つ可燃性かつ毒性のガスであり、銅及び銅合金に対して腐食性を示さない。,×\r
30-2-4 シランおよびジシランは、純水あるいは酸性水溶液とはほとんど反応しないが、アルカリ性水溶液とは反応して水素を発生する。,○\r
R1-2-2 硫化水素は、腐乱臭を有する毒性ガスで、水分がある環境では腐食性は小さい。,×\r
R1-2-3 塩素は、酸化力が強いので可燃性物質に対して支燃性を示すが、常温で乾燥した状態では鉄に対する腐食性がほとんどない。,○\r
R1-2-4 フッ素は、常温では特有な刺激臭を持ち極めて強い毒性のある可燃性ガスである。,×\r
R2-2-1 シアン化水素は、水分が含まれると重合により爆発することがあるので、安定剤としてアルカリ性物質を少量加える。,×\r
R2-2-2 二酸化炭素は、消火剤として用いられ、マグネシウムやナトリウムの消火にも有効である。,×\r
R2-2-3 液状のLPガスは、電気絶縁性がよく静電気が蓄積されやすいので、その放電による火花で発火する危険がある。,○\r
R2-2-4 アセチレンは、酸素ガスによって燃焼させると3000℃を越える温度の火炎を生成できるので、金属の溶断などに用いられる。,○\r
R3-2-1 窒素は、高温、高圧では触媒上で水素と反応してアンモニアを生成し、高温では酸素と反応して酸化窒素となる。,○\r
R3-2-2 希ガス類のアルゴンは、不活性ガスとしてステンレス鋼の溶接用保護ガスに用いられる。,○\r
R3-2-3 アンモニアは、銅及び銅合金に対して腐食性を示さないが、鉄に対しては激しい腐食性を示す。,×\r
R3-2-4 塩化水素は、水に溶けると塩酸となり、イオン化傾向が水素より小さい金属は、塩化水素に侵され、水素を発生して塩化物となる。,×\r
R4-2-1 酸素を化学反応に使用する場合、過酸化物などが生成して爆発の原因となることがある。,○\r
R4-2-2 メタンは、天然ガスの主成分であり空気より重く、空気中で燃焼させると淡青色の炎を発する。,×\r
R4-2-3 ブタジエンは、無色の可燃性ガスで、常温でも空気中の酸素と反応して重合性の過酸化物をつくる。,○\r
R4-2-4 フッ化水素は、腐食性や毒性が強いガスで、反応性が高く有機化合物とも反応してフッ化物となる。,○\r
H25-3-1 炭素鋼への亜鉛めっきは、クロムめっきに比べて、ピンホール、きずなどにより炭素鋼が露出した場合に、耐食性が悪くなる。,×\r
H25-3-2 オーステナイト系ステンレスであるSUS304は、耐食性、高温強度、低温靭性に優れているが、使用環境によっては粒界腐食、孔食、応力腐食割れを生じる欠点がある。,○\r
H25-3-3 Cr-Mo鋼は、クロムの酸化物皮膜を生成し、皮膜は緻密で保護性があるので、炭素鋼に比べて耐酸化性に優れている。,○\r
H25-3-4 水素侵食は、高温高圧の水素ガス環境で鋼中に侵入した水素が鋼中の炭化物と反応し、生成するメタンの圧力で鋼に微細な亀裂を発生させる現象で、クロム、モリブデンの含有量を増すと耐水素侵食性は向上する。,○\r
H26-3-1 炭素鋼の機械的性質は、炭素量によって大きく変化し、引張強さ、降伏点は炭素量の増加とともに低下する。,×\r
H26-3-2 乾燥した塩素ガス中での高温ガス腐食に対する耐用温度は、SUS304のほうが炭素鋼よりも高い。 ,○\r
H26-3-3 オーステナイト系ステンレス鋼容器の溶接熱影響部に生じる粒界腐食を防止するため、炭素量の少ない材料を使用した。,○\r
H26-3-4 配管の外面への塗装には腐食反応を生じさせる水、酸素などを金属表面に触れさせないことにより防食する役割がある。,○\r
H27-3-1 炭素鋼に対する電気防食法は、土壌埋設物及び海洋構造物への水没部への適用が多く、電流を流入させる方法として犠牲陽極法と外部電源法がある。,○\r
H27-3-2 オーステナイト系ステンレス鋼とアルミニウム合金は、結晶構造が面心立方格子であり、低温脆性を示さない。,○\r
H27-3-3 応力腐食割れは、圧縮応力の高い部分に発生しやすい。,×\r
H27-3-4 炭素鋼の炭素を増加させると、引張強さが低下し、シャルピー衝撃試験の延性?脆性遷移温度も低下する。,×\r
H28-3-1 常温の98%の濃硫酸の配管材料に、炭素鋼を採用した。,○\r
H28-3-2 往復圧縮機などに接続する配管の機械振動による疲労破壊を防止するには、共振は避けたうえで、配管の支持点の間隔を広げて変形に対する拘束を緩めることが有効である。,×\r
H28-3-3 装置の耐用年数に見合う腐食しろを、計算上必要な肉厚に付加する対策は、侵食速度が大きい局部腐食に有効でない場合が多い。,○\r
H28-3-4 炭素鋼へのクロムめっきは、亜鉛めっきに比べて、キズなどにより炭素鋼が露出した場合に、炭素鋼の腐食を促進する。,○\r
H29-3-1 フェライト系ステンレスSUS430は、オーステナイト系ステンレス鋼SUS304に比べて塩化物による応力腐食割れが生じにくい。,○\r
H29-3-2 Cr-Mo鋼は、クロムの酸化物皮膜を生成し、皮膜は緻密で保護性があるので、クロムの増加とともに耐酸化性を増す。,○\r
H29-3-3 炭素鋼配管に施した樹脂ライニングが損傷した場合に、さらに電気防食法を適用しても防食の効果はない。,×\r
H29-3-4 9%ニッケル鋼は、アルミニウム合金またはオーステナイト系ステンレス鋼と同様に、液体窒素温度より低い極低温領域であっても低温脆性を示さない。,×\r
H30-3-1 オーステナイト系ステンレス鋼は、耐食性、高温強度、低温靭性に優れているが、SUS304は使用環境によっては粒界腐食、孔食、応力腐食割れを生じる欠点がある。,○\r
H30-3-2 炭素鋼の電気防食の犠牲陽極として、土壌中では亜鉛を、海水中ではアルミニウム系の合金を採用した。,○\r
H30-3-3 150℃の乾燥した塩素ガスに使用する配管材料にチタンを使用した。,×\r
H30-3-4 応力腐食割れは圧縮応力が高い部分に発生しやすい。,×\r
R1-3-1 炭素鋼の機械的性質は、炭素量によって大きく変化し、引張強さ、降伏点は炭素量の増加とともに低下する。,×\r
R1-3-2 オーステナイト系ステンレス鋼は、結晶構造が面心立方格子であり、低温脆性を示さない。,○\r
R1-3-3 亜鉛めっきした炭素鋼は、クロムめっきした炭素鋼に比べて、ピンホール、きずなどにより露出した部分の耐食性が劣る。,×\r
R1-3-4 水素侵食は、高温高圧の水素ガス環境で鋼中に侵入した水素が鋼中の炭化物と反応し、生成するメタンの圧力で鋼に微細な亀裂を発生させる現象で、クロム、モリブデンの含有量を増やすと耐水素侵食性は向上する。,○\r
R2-3-1 オーステナイト系ステンレス鋼容器の溶接熱影響部に生じる粒界腐食を発生しにくくするために、炭素量の少ない材料を使用した。,○\r
R2-3-2 応力腐食割れは、圧縮応力が高い部分に発生しやすい。,×\r
R2-3-3 オーステナイト系ステンレス鋼は表面に不働態皮膜を形成し、不動態皮膜が溶解する塩酸中、希塩酸中では腐食するが、不動態皮膜が安定な濃硫酸中では腐食しない。,○\r
R2-3-4 Cr-Mo鋼は高温クリープ特性が優れているため高温の反応器などに使用されるが、不純物の偏析に起因する焼き戻し脆化の感受性が高いことに注意する必要がある。,○\r
R3-3-1 ph3の酸性水溶液中で、炭素鋼は腐食し、オーステナイト系ステンレス鋼は不動態化して腐食しにくい。,○\r
R3-3-2 オーステナイト系ステンレス鋼およびフェライト系ステンレス鋼は、高温海水環境での引張応力のもとで、塩素イオンに起因する応力腐食割れが生じやすい。,×\r
R3-3-3 ステンレス鋼の孔食が比較的高濃度の塩化物イオンを含む環境で起こるのは、塩化物イオンが不動態皮膜を局所的に破壊するためである。,○\r
R3-3-4 クロムモリブデン鋼は、クロムの酸化物皮膜を生成し、皮膜は緻密で保護性があるので、炭素鋼に比べて耐酸化性に優れている。,○\r
R4-3-1 電解質溶液中で異種金属を接触させると電池を形成し、腐食電位列がプラス側となる金属は腐食が促進される。,×\r
R4-3-2 炭素鋼水配管に生じた錆こぶの下が溶存酸素の供給を受けにくい結果、局部的に孔食を生じる現象は通気差腐食の一例である。,○\r
R4-3-3 鋭敏化したステンレス鋼では、多くの腐食環境中で結晶粒界が選択的に腐食する。,○\r
R4-3-4 窒化は、高温の窒素ガスに接する金属に窒素が侵入して、金属が脆くなる現象であり、炭素鋼に比べてオーステナイト系ステンレス鋼に発生しやすい。,×\r
H25-5-1 電磁流量計は、導電性流体の流量を測定できるが、混入物を含む流体には適さない。,×\r
H25-5-2 抵抗温度計は、温度とともに変化する熱起電力を測定することにより温度を計測する。,×\r
H25-5-3 ブルドン管圧力計のブルドン管材料には、一般に、黄銅、りん青銅、ステンレス鋼が用いられている。,○\r
H25-5-4 金属管式マグネットゲージは、ゲージグラスに比べて液面高さの測定範囲が広く、高い圧力の液体でもより安全である。,○\r
H26-5-1 腐食性があり固形物が混入した流体の圧力計に、隔膜式圧力計を使用した。,○\r
H26-5-2 バイメタル式温度計は、2種類の金属銅線を接続したループの2つの接合点の温度差に正比例して起電力が生じることを利用している。,×\r
H26-5-3 コリオリ式流量計は、流体の質量流量を直接測定できるが、レンジアビリティは狭く、スラリー流体には使用できない。,×\r
H26-5-4 気層が凝縮性の液化ガス貯槽に、差圧発信機本体と受圧部をキャピラリチューブで連結したリモートシール型差圧液面計を採用した。,○\r
H27-5-1?フロート型面積流量計は、鉛直配管、水平配管どちらにも設置できる。,×\r
H27-5-2?被測定物から放射される赤外線を赤外線カメラでとらえ、それを画像処理して温度分布を視覚に表したものがサーモグラフィである。,○\r
H27-5-3差圧発信機を、圧力測定のみならず流量測定の信号伝送器としても使用した。,○\r
H27-5-5?タンクゲージに、フロート式よりも精度が高く、保守性の良いワイヤドラム式を採用した。,○\r
H28-4-1?ブルドン管圧力計には、ケース背面に安全窓を取り付けたものがあるが、これはブルドン管が破裂した場合にケース前面のガラス窓の破損及び飛散を防止するためである。,○\r
H28-4-2?空気式差圧伝送器は、信号の伝送に時間遅れを生じるなどの欠点があり、伝送距離は100m以内にすることが望ましい。,○\r
H28-4-3?調節弁のうち、ケージ弁は高差圧流体に対して不安定な動作になり、プラグの振動が発生するので、高差圧流体に適さない。,×\r
H28-4-4?温度制御ループにおいて正特性の温度伝送器を使用した場合、伝送信号が喪失すると調節器は高温であると判断して低温になるように調節する。,×\r
H29-4-1?渦流量計は、流れに垂直に挿入された渦発生体の下流に発生するカルマン渦列の周波数が、流速に正比例することを利用した流量計である。,○\r
H29-4-2?予測制御の一種であるフィードフォワード制御は、それだけでは目標値と制御量が一致したかどうかを確認することができず、偏差を修正することもできないため、フィードバック制御と組み合わせて使用される。,○\r
H29-4-3?調節弁の駆動用電源が喪失した場合でも、プラントが危険な状態にならないように弁の駆動方式を選定することはフール・プルーフである。,×\r
H29-4-4?並列冗長系の冗長システムは、機器が故障した場合に待機している危機に切り替える方式である。,×\r
H30-4-1 腐食性流体や凝固しやすい流体などの圧力測定には、隔膜式圧力計が適している。,○\r
H30-4-2 リニア特性の調節弁においては、弁開度と流量はほぼ正比例する。,○\r
H30-4-3 ゲージグラスにおいて、一般に不透明な液体や界面の測定には反射式を用いる。,×\r
H30-4-4 近年、警報システムにおいて、スタートアップなどの非定常時に警報が一時的に多発することを抑制したり、不必要な警報を削減したりする取り組みがなされている。,○\r
R1-4-1 コリオリ式流量計は質量流量が測定でき、スラリー流体にも適用できる。,○\r
R1-4-2 １つの調節計（一次調節計）の出力値により他の調節計（二次調節計）の目標値を制御する方法をフィードフォワード制御という。,×\r
R1-4-3 積分動作は比例動作で生ずるオフセットを消すことができるので、通常比例動作と組み合わせてPI動作として広く用いられる。,○\r
R1-4-4 機器、設備に異常および故障が生じた時でも、装置が安全な状態になるよう設計上配慮することをフェール・セーフという。,○\r
R2-4-1 運転温度1000℃の設備の温度監視に白金ロジウム合金-白金の熱電温度計を使用した。,○\r
R2-4-2 コリオリ式流量計をスラリー流体の流量測定に使用した。,○\r
R2-4-3 ガスクロマトグラフは、ガスの種類のよりカラムを通過する速さが異なることを利用して、ガスのそれぞれの成分を検出する。,○\r
R2-4-4 調節弁の駆動用電源が喪失した場合でも、プラントが危険な状態にならないように弁の駆動方式を選定することはフール・プルーフである。,×\r
R3-4-1 オリフィス流量計は差圧式流量計の一つであり、流量計での圧力損失を小さくしたい場合に用いられる。,×\r
R3-4-2 腐食性流体や凝固しやすい流体などの圧力測定には、隔膜式圧力計が適している。,○\r
R3-4-3 警報システムにおいて、オペレータの負荷低減を図るため、スタートアップなどの非定常時に不必要な警報が一時的に多発することを抑制する取り組みを行った。,○\r
R3-4-4 弁駆動用の空気および電源が喪失した場合でもプラントが危険な状態にならないよう、弁を全開にする、全閉にする、または開度を保持するなどを考慮して駆動方式を選定することは、フール・プルーフの具体的な例である。,×\r
ブルドン管圧力計は、断面がだ円、平円形などの金属管を円弧状に曲げ、管内に圧力を加えたときの弾性変形を利用して目盛盤上の指針の位置で圧力を読みとるものである。,○\r
ゲージグラスは、ガラスを通して液面を直視するもので、一般に2つの液体の界面の測定には反射式を用いる。,×\r
微分動作は、偏差の変化速度に比例して操作量を変える制御動作であり、外乱などで生じた偏差をできるだけ早く減少させたいときに有効である。,○\r
圧縮機を起動するとき、間違って操作したとしても安全のために必要な条件が確保されていなければスタートしないようなインターロックシステムは、フェールセーフの具体的な例である。,×\r
H25-4-1 液化プロパンを高圧で貯蔵するのに高張力鋼製の球形貯槽を設置した。,○\r
H25-4-2 50?100m3程度以下の小型圧力容器では、円筒形貯槽が経済的な形式と考えられ、構造が単純で製作も容易なため、一般的に使用されている。,○\r
H25-4-3 二重殻式円筒型低温貯槽は、内槽、外槽間に適切な断熱材が充填されるが、外槽にも低温材料を用いる必要がある。,×\r
H25-4-4 二重殻式平底円筒型低温貯槽の基礎を地盤中に直接埋設し、基礎が凍結して変形を起こさないように、基礎中に電熱ヒーターを設置した。,○\r
H26-4-1?固定床式反応器では、触媒層の高さが大きくなる場合は、偏流の発生を抑えるため、触媒層を分割して再分散器を設ける方法がある。,○\r
H26-4-2?固定床式反応器で、発熱量が大きい場合の反応温度の制御には、触媒層を分割し、各触媒層の間にクエンチ用流体を送入する方法がある。,○\r
H26-4-3?流動床式反応器は、反応器の底部などから送入した流体により固体粒子の触媒を浮遊流動化させて、流体と固体の間で反応を行う反応器である。,○\r
H26-4-4?反応器内の触媒を連続的に再生するには、固定床式反応器が適している。,×\r
H27-4-1?吸着等に用いられる吸着剤は、分離目的成分との親和性と吸着速度を考慮して選定される。,○\r
H27-4-2?蒸留塔のトレイは、十字流接触型と向流接触型に分類され、バブルキャップトレイは、向流接触型である。,×\r
H27-4-3?連続式反応器のうち管式反応器は、反応速度が小さい場合によく用いられる。,×\r
H27-4-4?二重殻式平底円筒型低温貯槽の内槽には、強め輪（スティフナ）が取り付けられることがあるが、これは保冷・断熱用のパーライトの沈降により圧力がかかることによる座屈防止を主な目的としている。,○\r
H28-5-1?配管設計において、変動荷重には想定が困難な管外部に付着する雪や氷は考慮しない。,×\r
H28-5-2?配管設計における熱変位合成応力は、合成曲げ応力とねじり応力から算出される。,○\r
H28-5-3?配管設計において、往復圧縮機などによる圧力脈動に対しては、配管長さを変えたり、オリフィスを挿入するなどにより気柱振動との共振を避ける。,○\r
H28-5-4?高圧ガス設備にかかる耐震対策については、設備の使用期間中に発生する確率の低い直下型、海溝型の巨大地震による高いレベルの地震動と、発生する確率の高い地震動を想定し、その重要度に応じて設計が行われる。,○\r
H29-5-1?固定床式反応器における触媒層の分割は、偏流防止のための再分散だけでなく、総発熱量が大きくクエンチングで反応温度を制御する必要がある場合にも採用されることがある。,○\r
H29-5-2?多管円筒型熱交換器は、固定頭部、胴部、後頭部の組み合わせにより多くのバリエーションがあり、様々な条件に応じた適切な構造を採用することができる。,○\r
H29-5-3?配管系への機械振動に対しては、応力が局部に集中して疲労破壊を起こさないように、配管を強制的に拘束せず、フレキシビリティを持たせるようにする。,×\r
H29-5-4?超低温容器は、-50℃以下の液化ガスを充てんすることができる容器で、可搬式のものは内装と外装の間に断熱材を積層し、その部分を常温において10Pa程度まで真空引きされている。,○\r
30-5-1 空冷式熱交換器は、冷媒側に空気を使用するため、水冷式熱交換器に比べ、伝熱面積を小さくできる。,×\r
30-5-2 塔のトレイは、十字流接触型と向流接触型に分類され、ダウンカマーを有するシーブトレイは、十字流接触型である。,○\r
30-5-3 塔の充填物は、不規則充填物と規則充填物に分類され、ラシヒリングは、不規則充填物である。,○\r
30-5-4 流動床式反応器は、反応器の底部などから送入した流体により固体粒子の触媒を浮遊流動化させて反応を行うものであり、再生塔を併設することにより連続的に再生された触媒を反応器に導入することも可能である。,○\r
1-5-1 二重管式熱交換器は、多管円筒形熱交換器に比べて、熱交換器の大きなものが要求される場合に用いられる。,×\r
1-5-2 プレート式熱交換器は、分解組立が容易で清掃しやすいが、圧力損失が大きく、また、ガスケットを介してプレートを重ね合わせた構造であるために温度・圧力条件、流体性状に制限がある。,○\r
1-5-3 多管円筒形熱交換器は、プレート式熱交換器に比べて熱伝達率が大きく取れることから、熱伝達量が同じであれば、小型化が図れる。,×\r
1-5-4 二重殻式円筒型低温貯槽は、内槽と外槽の間に適切な断熱材が充填されるので、外槽に低温用材料を用いる必要はない。,○\r
2-5-1 平底円筒形貯槽は、プロパン、ブタンなどの液化ガスを高圧で大容量貯蔵するのに最適な形式である。,×\r
2-5-2 50～100m3程度以下の小型圧力容器では、円筒形貯槽が構造が単純で製作が容易なため経済的な形式と考えられ、一般的に使用されている。,○\r
2-5-3 二重殻式平底円筒型低温貯槽の基礎を地盤中に直接埋設したので、基礎が凍結して変形を起こさないように、基礎中に不凍液を循環させた。,○\r
2-5-4 二重殻式平底円筒型低温貯槽において、内槽と外槽の間に断熱用にパーライト粒を充填し、内槽にはパーライト粒が及ぼす圧力による座屈防止のため強め輪（スティフナ）を取り付けた。,○\r
3-5-1 プレート式熱交換器は、プレートを介して熱交換を行う構造であり、圧力損失が小さく、温度・圧力条件、流体性状に対する制限が少ない。,×\r
3-5-2 空温式蒸発器は運転において熱源が大気であるという利点を持つ反面、その他の熱源を持つ蒸発器と比較して設置面積が大きくなるという欠点がある。,○\r
3-5-3 エアフィンクーラーは冷却媒体が空気であり、その熱伝導率や比熱の低さを補う目的で、通常は伝熱管外側にフィンを設けて伝熱面積を大きくしている。,○\r
3-5-4 二重管式熱交換器は、多管円筒形熱交換器に比べて、熱交換量の大きなものが要求される場合に用いられる。,×\r
H25-6-1 キャビテーションを防止するために、液化ガス貯槽の液温を上げてポンプ吸い込み圧力を上げた。,×\r
H25-6-2 配管系の水撃（ウォータハンマ）を防止する対策の一つとして、遮断弁の開閉速度をできる限り大きくなるように設定した。,×\r
H25-6-3 同一特性のポンプを2台直列運転するとき、吐出し弁絞りなどによる流量調節をしなければ、流量は増加してポンプ1台あたりの所要軸動力は1台単独運転の時より大きくなる。,○\r
H25-6-4 ポンプの取り扱い液を粘性係数（粘度）の高い液に替えると、駆動電動機が過負荷になる可能性がある。,○\r
H26-6-1 遠心ポンプの羽根車やケーシング内面はキャビテーションにより損傷することがある。,○\r
H26-6-2 高揚程の遠心ポンプの羽根車出口に設けられた案内羽根（ディフューザ）は、流体に対し効率よく速度エネルギーを与えるためのものである。,×\r
H26-6-3 特性の異なる遠心ポンプを2台並列運転するときは、低流量域では片方のポンプの吐出し量がゼロ近くになる可能性があり、このような状態での連続運転は避ける。,○\r
H26-4-4 歯車ポンプは、通常吐出し弁閉で起動し、流量調整は吐出し弁で行う。,×\r
H27-6-1?羽根車に汚れが付着して発生するロータの異常振動の主周波数は、ロータの回転数に等しい。,○\r
H27-6-2?定常運転時の回転数は、ロータの一次危険速度を超えてはならない。,×\r
H27-6-3?吐き出し側の抵抗が大きくなると、圧縮機の運転がサージング領域に入る可能性がある。,○\r
H27-6-4?風量を下げる操作において、吐き出し側の絞り弁を操作する方法と、回転数を操作する方法とでは、駆動電動機の省エネルギー面での差異はない。,×\r
H28-6-1?給油式往復圧縮機では、多段化により各段の圧力比を小さくすることで、潤滑油の温度上昇を抑え、潤滑油の酸化劣化を抑える効果もある。,○\r
H28-6-2?多段往復圧縮機の各段圧力が低下する原因としては、後段の、吸い込み弁、吐出し弁の漏れ、ピストンリングの摩耗、冷却器の能力低下などの諸トラブルが考えられる。,×\r
H28-6-3?サージング限界付近まで遠心圧縮機の風量を下げる場合、一般的に吸い込み絞り弁操作より吐き出し絞り弁操作の方が制御範囲は広くとれる。,×\r
H28-6-4?遠心圧縮機の振動周波数分析の結果、主周波数(f)として圧縮機回転数(N)に対し、f=N、2N、3Nの成分の波形が検出された。原因として主軸（シャフト）と軸シールとの接触、心ずれなどが考えられる。,○\r
H29-6-1?キャビテーションが発生したので、低温液化ガスポンプの吸い込み配管の断熱材を取り外した。,×\r
H29-6-2?同一特性の遠心ポンプを2台直列運転する場合の一台当たりの所要軸動力は、抵抗曲線が変わらなければ、1台単独運転の時より大きくなる。,○\r
H29-6-3?吐出し弁を締め切って軸流ポンプを起動できるようバイパスを設け、可動羽根を使用した。,○\r
H29-6-4?往復ポンプでは、液体の脈動により生じる水撃作用を防止するために、吸込み弁、吐出し弁の異常の有無、吸込み配管のストレーナの詰まりなどをチェックした上で、配管系の弁を慎重に操作する。,○\r
30-6-1 遠心圧縮機の吐き出し管の絞り弁の開度調整で流量を減らす方法では、絞り弁の抵抗がエネルギーロスとなり、動力はあまり減らない。,○\r
30-6-2 遠心圧縮機の一つのケーシングの段数は、主に軸の危険回転数によって制約を受け、段数が多い場合は一次危険速度を超えて運転はできない。,×\r
30-6-3 多段往復圧縮機の2段の吐出圧力および吐出ガス温度が異常上昇したとき、2段の吐出中間冷却器の冷却水通水弁の開度と、3段の吸入弁および吐出弁を点検した。,○\r
30-6-4 給油式の往復圧縮機には、ラビリンスピストン式、ダイヤフラム式がある。,×\r
1-6-1 液化ガスの遠心ポンプのキャビテーションを避けるため、吸入貯槽の液温を上げることによりポンプの吸入圧力を上げた。,×\r
1-6-2 遠心ポンプの軸動力は、吐き出し管の絞り弁が全閉の時に最大となる。,×\r
1-6-3 遠心ポンプの取り扱い液の密度が上がると、駆動電動機の過負荷（オーバーロード）の可能性がある。,○\r
1-6-4 遠心ポンプは、揚程が低いものでは締切り起動・停止ができるが、軸流ポンプは、バイパスや可動羽根の採用などの対策を講じない場合には、締切り起動・停止ができない。,○\r
2-6-1 遠心圧縮機の吐き出し側の抵抗が大きくなったので、サージングを避けるためにバイパス管を閉じて回転数を上げた。,×\r
2-6-2 遠心圧縮機の定常運転時の回転数は、ロータの一次危険速度を超えてはならない。,×\r
2-6-3 往復圧縮機による空気の圧縮では、ラビリンスピストン式の無給油圧縮機が使用できる。,○\r
2-6-4 往復圧縮機の容量調整に使用されるバイパス方式は、遠心圧縮機でも適用される。,○\r
3-6-1 遠心圧縮機の吐き出し側の抵抗が大きくなると、圧縮機の運転がサージング領域に入る可能性は低くなる。,×\r
3-6-2 連続的に吐出し風量の一部を吸込み間に戻すバイパスコントロールで吸込み温度が上昇する場合には、これを防止するために冷却器をバイパス管路に設ける方法がある。,○\r
3-6-3 遠心圧縮機の異常振動の主周波数がロータの回転数に等しい場合、振動の原因の一つとして、羽根車への汚れの付着が考えられる。,○\r
3-6-4 遠心圧縮機の一つのケーシングの段数は、主に軸の危険回転数によって制約を受け、段数が多い場合には数個のケーシングに分ける。,○\r
遠心ポンプのキャビテーションを避けるためには、吸入貯槽の液面を上げること、取り扱い液の温度を下げることが有効である。,○\r
遠心ポンプの水撃作用を防止するため、吐出し配管の逆止弁にバイパス弁を設けて圧力上昇を抑える方法がある。,○\r
脈動が発生する往復ポンプでは、必要NPSHに対して利用できるNPSHの余裕は小さくすることができる。,×\r
往復ポンプの流量調整は、バイパス弁開度、回転速度（単位時間あたりの回転数）またはストローク長さの変更により行える。,○\r
H25-7-1 冬季になり吸込みガス温度が下がっても、回転数、圧力比が変わらなければ、駆動電動機の過負荷の心配はない。,○\r
H25-7-2 炭酸ガス（分子量44、比熱容量の比1.31）用圧縮機の試運転を空気（分子量29、比熱容量の比1.4）にて行うが、回転数、吸込み温度、圧力比が同じ範囲であれば、駆動電動機の過負荷の心配はない。,×\r
H25-7-3 多段圧縮機の2段の冷却器の出口側温度が異常上昇したので、1、2段の冷却器および2段の吸込み弁、吐出し弁も点検した。,○\r
H25-7-4 容量調整方法の一つである吸込み弁アンローダ方式は、シリンダに設けられたクリアランスボックスの弁を開閉し、すきま容積を変化させて流量調整を行う。,×\r
H27-7-1?遠心ポンプの軸動力は、流量が増加するほど大きくなるが、軸流ポンプの軸動力は、締め切り運転時に最大になる。,○\r
H27-7-2?プランジャポンプは容積型で、弁の開閉により液体を吸い込み圧送するものであるが、NPSH（有効吸い込み揚程）を考慮しなければならない。,○\r
H27-7-3?遠心ポンプを分解点検したとき、羽車とケーシング内面にエロージョンが見られたので、原因として水撃作用（ウォータハンマ）を取り上げ、対策を講じた。,×\r
H27-7-4?送水配管の水撃作用（ウォータハンマ）の発生を防止する対策の一つとして、遮断弁の開閉時間が長くなるようにした。,○\r
H26-7-1 火災・爆発による環境汚染を未然に防止するにはマネジメントシステムを構築し、環境に対する管理を行うことが重要であり、環境保全に特化したシステムがレスポンシブル・ケア（RC）である。,×\r
H26-7-2 災害・事故件数の推移をみると、昭和40年代の設備の新設、大型化に伴い、その件数が増加したが、その後の新たな規制法の施行、技術の進歩により、事故件数は現在に至るまで着実に減少している。,×\r
H26-7-3 災害・事故を防ぐには認知確認ミス、誤操作などの人が関係するミスを少なくし、あわせて設備の点検を十分行って、機器材料の劣化・腐食の早期発見に努めることが有効である。,○\r
H26-7-4 災害・事故の教訓として、ハードおよびソフトを見直し、あらゆるケースに対応できる保安管理システムを確立しておくとともに、このシステムに基づき、全従業員に対し教育や訓練を通じて、保安管理を意識及び行動の両面で徹底させることが重要である。,○\r
H28-7-1?環境基準は、人の健康を保護する観点から特定の物質について定められているが、連続測定機により常時モニタリングが行われているものはない。,×\r
H28-7-2?化学物質を扱う化学産業では、環境保全、保安防災、化学品安全、労働安全衛生および物流安全の全分野を一体とした総合管理が重要である。,○\r
H28-7-3?高圧ガス災害・事故の原因として、設備の設計及び製作の不良、設備の維持管理の不良、ヒューマンファクターなどがある。,○\r
H28-7-4?災害や事故は、その主な原因である認知確認ミス、誤操作、誤判断など、人が関係するミスをなくすことができればほとんど防止できる。,×\r
H29-7-1?事故防止のため、事業者は設備メーカーに点検整備を依頼するに当たって、保守管理にかかわる役割分担を明確にし、安全性に対し漏れがないようにした。,○\r
H29-7-2?事業活動に伴って発生する大気汚染の原因となる有害な物質には、ばい煙、粉じん、特定物質があるが、それぞれの規制措置はない。,×\r
H29-7-3?温室効果は物質によって異なり、大気中の存在濃度と地球温暖化係数によって温室効果の寄与度が算出される。,○\r
H29-7-4 ISO14001の環境マネジメントシステムにおける環境方針は、経営者が環境保全を継続的に改善していくことを示す重要な社内情報であり、一般の人が入手することはできない。,×\r
30-7-1 成層圏のオゾンは有害な紫外線を吸収して、それが地表面に届くことを防いでいる。地上で排出された塩素、塩化水素は成層圏に到達してオゾンを破壊する。,×\r
大気環境基準に定められている物質のうち、一酸化炭素は、連続測定機による常時モニタリングが行われている。,○\r
30-7-3 ベンゼンは、長期暴露による発がん性を有するが、揮発性有機化合物ではなく、有害大気汚染物質には含まれない。,×\r
30-7-4 最近の高圧ガス関係の災害・事後の原因を分析した結果では、腐食管理不良、検査管理不良などの設備の維持管理不良による原因が全体の約半数を占めている。,○\r
1-7-1 大気汚染の原因となる有害な物質であるばい煙は、4種類に区分され、それぞれに排出基準が定められている。,○\r
1-7-2 浮遊粒子状物質は、大気環境基準で1日平均値が定められており、月1～2回の24時間測定が行われている。,×\r
1-7-3 温室効果は、大気のガス成分が地表からの赤外線を吸収し、再び地表および大気に返すために生じる。亜酸化窒素（N2O）は温室効果ガスの一種である。,○\r
1-7-4 高圧ガス災害事故は、その主な原因である、設備の設計、製作の不良、設備の維持管理の不良など、設備に関係するものをなくすことができれば、ほとんど防止できる。,×\r
2-7-1 大気環境基準で1時間値が定められている二酸化硫黄は、常時モニタリングが行われ、年平均値が定められているベンゼンは月1～2回の24時間測定が行われる。,○\r
2-7-2 温室効果の寄与度の算出に使用される温室効果ガスの地球温暖化係数は、各温室効果ガス1kgの一定期間における温室効果を二酸化炭素を1として表したものである。,○\r
2-7-3 化学物質を扱う化学産業では、環境保全、保安防災、化学品安全、労働安全衛生、および物流安全の全分野を一体とした総合管理が重要である。,○\r
2-7-4 最近の高圧ガス災害・事故の原因割合では、設備の維持管理の不良より、設備の設計および製作の不良の方が多い。,×\r
3-7-1 化学物質の審査及び製造等の規制に関する法律では、環境を経由して人に健康影響を及ぼす恐れのある化学物質を規制している。,○\r
3-7-2 大気環境基準では、人の健康を保護する観点から特定の物質について、連続測定機による常時モニタリングが行われている。,○\r
3-7-3 ISO14001は、環境マネジメントシステムの仕様を定めた規格であり、レスポンシブル・ケア（RC）の環境保全分野とは重なってはいない。,×\r
3-7-4 最近の高圧ガス災害事故は、その主な原因である設計不良、製作不良、施工管理不良など設備の設計、製作に関するミスをなくせばほとんど防止できる。,×\r
温室効果ガスである二酸化炭素、メタン、亜酸化窒素、CFC-12（フルオロカーボンの一種）のうち、地球温暖化係数がもっとも大きいのはCFC-12 である。,○\r
大気汚染防止法において、特定施設から発生する特定物質として、アンモニアは規制されているが、二酸化窒素は規制されていない。,×\r
レスポンシブル茜ケア（RC）活動を推進するにはRC コードという基本的実施事項に従って行う必要があり、その構成のひとつに社会との対話コードがある。,○\r
最近（平成23～30年）の高圧ガス災害事故の原因割合では、設備の維持管理の不良が最も多く、次いでヒューマンファクター、設備の設計製作の不良の順で多い。,×\r
H25-8-1 2Bの高圧バルブのボディーフランジに、メタルジャケットガスケットを使用しているものを用いた。,○\r
H25-8-2 フランジボルトの締め付け管理方法の一つに、ボルトの伸びを超音波軸力計で測定しながら締め付ける方法がある。（伸び測定法）,○\r
H25-8-3 高温配管でホットボルティングを省略するために、金属リングガスケットを使用した。,×\r
H25-8-4 細長い円筒状のピンホールなどから気体または液体が少量漏洩する場合は、漏洩量はピンホールの穴径の4乗に比例し、穴の長さに反比例する。,○\r
H26-8-1 継手からのガスの漏れ量（体積流量）は、圧力が高いガスほど、密度が高いガスほど、粘度が大きいガスほど大きくなる。,×\r
H26-8-2 継手などの漏れ止め機構を総称してシールというが、シール材のうち一般的に、静止接合面に挿入するものをガスケット、往復運動や回転運動の摺動部に使用するものをパッキンと呼んでいる。,○\r
H26-8-3 細長い円筒状のピンホールなどから気体または液体が少量漏洩する場合、穴径が拡大していくと漏洩量は加速度的に増大するので、すぐに措置を講じることが大切である。,○\r
H26-8-4 ピンホール状ではなく相当に大きい破断口から漏洩する場合の漏洩量は、液体の場合では破断口の断面積の0.5乗に比例する。,×\r
H27-8-1 メカニカルシールについて、高速の遠心圧縮機では、周速がメカニカルシールの周速限界を超えることがあるので、若干のガス漏洩が許される場合には、一般にドライガスシールが使用される。,○\r
H27-8-2 メカニカルシールは、漏洩を完全に止めることができず、可燃性、毒性の液体には使用できない。,×\r
H27-8-3 メカニカルシールは、端面密封方式で、軸に直角にセットされる部品であり、振動に強い。,×\r
H27-8-4 遠心ポンプに用いられるメカニカルシールの冷却、潤滑方法のうち、フラッシングは熱を除去するとともに、摺動面に異物や不純物が停滞することを防ぐ働きも兼ねている。,○\r
H28-8-1 フランジ継手においては、内圧が上昇するとボルトが伸びてガスケットに残る圧縮荷重が小さくなり、ある限界値以下になると流体は漏れ始める。,○\r
H28-8-2 細長い円筒状のピンホールなどから気体が少量漏洩する場合、漏洩量はピンホールの穴径の2乗に、また圧力差に比例し、穴の長さに反比例する。,×\r
H28-8-3 金属リングガスケットは変形後の復元力が小さいので、高温配管に使用するときは、座屈を避けるためにホットボルティングを行ってはならない。,×\r
H28-8-4 往復圧縮機の軸封装置に用いられるラビリンスシールは、ケーシングの内周にラビリンスを切ったリングをピストンロッドとごくわずかな隙間を保ち、数組挿入する形式が一般的に用いられる。,○\r
H29-8-1?細長い円筒状のピンホールから気体が少量漏洩する場合、漏洩量はピンホールにかかる内外圧力差の二乗に比例する。,×\r
H29-8-2?ピンホール状ではなく相当に大きい破断口から液体が漏洩する場合、漏洩量は破断口にかかる内外圧力差の0.5乗に比例する。,○\r
H29-8-3?バルブのグランドパッキンの材質には、カーボン、フッ素樹脂などの繊維、黒鉛を主材とし潤滑剤で表面処理したものがある。,○\r
H29-8-4?ボルトの締め付け管理法のうち、ボルトの伸びを超音波軸力計や伸びゲージなどで測定しながら締め付ける方法をテンション法という。,×\r
30-8-1 相当大きな破断口から液体が漏洩する場合の漏洩量は、流出係数および破断口にかかる内外圧力差（液頭）に正比例する。,×\r
30-8-2 高温、高圧の場合、塔・槽のフランジガスケットにジョイントシート、渦巻型ガスケット、金属リングガスケットが用いられる。,×\r
30-8-3 毒性の液体を取り扱う遠心ポンプの軸封装置にメカニカルシールを選定した。,○\r
30-8-4 フランジの漏洩防止には、内容物および使用圧力・温度に応じたガスケットの材質・形状の選定、配管の振動に対する振れ止めの施工などがある。,○\r
1-8-1 細長い円筒状のピンホールなどから気体または液体が少量漏洩する場合は、漏洩量はピンホールの孔径の4乗に比例し、孔の長さに反比例する。,○\r
1-8-2 ガスケット係数は、流体の漏れを防止できる最小必要残留圧縮応力の内圧に対する比をいい、ガスケットの材質と構造により決定される数値である。,○\r
1-8-3 遠心圧縮機のオイルフィルムシールは、漏洩を完全に止めることができず、可燃性、毒性の気体には使用できない。,×\r
1-8-4 圧縮機のラビリンスシールは、高圧の気体が狭い隙間から広い隙間へ流れ出るごとに、逐次圧力を失い、気体の流れを生じる圧力勾配を小さくし有効に漏れを止めようというものである。,○\r
2-8-1　貯槽において、ピンホールに比べて相当に大きい破断口から液体が漏洩する場合、漏洩量[m3/s]は、破断口の断面積[m2]に正比例し、破断口にかかる内外圧力差（液頭）[m]の1/2乗に比例する。,○\r
2-8-2 自己緊密式のガスケットは、内圧の上昇に伴い、それに見合うガスケットの面圧が生じ、自己締め付けを行う構造になっているので、超高圧装置のフランジに使用されている。,○\r
2-8-3 遠心圧縮機の軸封部に用いるドライガスシールは、軸とシール部材が常に非接触のためシールの摩耗は発生せず、異物の影響を受けにくい。,×\r
2-8-4 メカニカルシールは、端面密封方式で軸に直角にセットされている精密な部品なので、振動には弱く、漏れ出したら止めることができないので早めの処置が必要である。,○\r
3-8-1 ガスケット係数は、内圧が作用する前の初期締め付け応力の内圧に対する比をいい、ガスケットの材質フランジ継ぎ手の構造により決定される数値である。,×\r
3-8-2 金属リングガスケットはシール性能、強度に優れており、締付けによる変形後の復元力も大きく、高温・高圧配管でのホットボルティングを省略できる。,×\r
3-8-3 無給油式の往復圧縮機の軸封装置に使用されているピストンロッドパッキンには、主にカーボンまたはテフロンが用いられる。,○\r
3-8-4 低温液化ガス送液ポンプの軸封にメカニカルシールを用い、固定環を冷却し、エコライジングパイプによるガス抜きを行った。,○\r
相当大きい破断口から液体が漏えいする場合、漏えい量は流出係数、破断口の断面積、破断口にかかる内外圧力差に比例する。,×\r
フランジ継手からの漏えいを防止するためには、内圧が作用してもガスケットには最小必要圧縮力が残る必要がある。,○\r
オイルフィルムシールは、水素ガスのように大気中へのガス漏れが許されない遠心圧縮機の軸封装置には用いられない。,×\r
遠心ポンプのメカニカルシールは、端面密封方式であり、しゅう動面（シール端面）は摩耗するので一方をカーボン、他方に超硬合金を採用した。,○\r
H25-9-1 FTAは、事故発生原因となる複数の事象の組み合わせを解析することができ、また、事故の発生確率も計算することができる。,○\r
H25-9-2 ETAは、事故の拡大する確率を求めることができず、事故拡大防止対策の重要性を認識することに適していない。,×\r
H25-9-3 HAZOPは、操業条件の変化を定められた手引き用語に従って調べ、その変化の原因と結果および取るべき対策を表にまとめて検討する手法で、プロセス異常に対するイメージトレーニングのツールとしても有効である。,○\r
H25-9-4 FMEAは、評価対象の機器、システムを構成する部位に着目し、あらかじめ想定した故障モードを選択することにより潜在危険を洗い出す手法である。,○\r
H26-9-1 ダウ方式は、プラントを構成するそれぞれの機器のプロセス条件、危険性物質の保有量などに対し、評価点をつけて、機器、設備全体の危険度を算出する手法であり、危険性の絶対的な評価が可能である。,×\r
H26-9-2 FMEAで、評価対象部位の故障率データを取り入れた場合は、システムに致命的な影響を与える故障モードの定量的な評価が可能となる。,○\r
H26-9-3 HAZOPは、プロセスの安全対策の妥当性を確認して、不足している安全対策を探すのに有効な手法である。,○\r
H26-9-4 事故の発生確率をFTAにより算出し、爆風圧計算などにより事故による損失の程度を算出して、リスクの評価を行った。,○\r
H27-9-1 FTAは、事故発生に関係するあらゆる要因を明らかにするのに役立つが、各要因の事故に対する寄与の度合いを知ることはできない。,×\r
H27-9-2 HAZOPは、網羅的に検討を進めるので、プラントの潜在危険性を見落とす可能性が少ない手法であり、単一事象のトラブルの解析に適用する。,○\r
H27-9-3 ETAは、一つの引き金事象が、事故、災害に拡大する確率の推定が可能であるが、事故災害のすべての要因を網羅するものではない。,○\r
H27-9-4 What-Ifは、あらかじめチェックリストなどで機能喪失状況や故障を定めておけば網羅性を高めることができるが、複数の事象の組み合わせを想定することはできない。,×\r
H28-9-1?プラント全体のリスクアセスメントにおいて、プラントを類似条件のユニットごとに複数に分割し、個別にリスク評価を行った。,○\r
H28-9-2 FTAにより同定したハザードを最終事象とし、HAZOPによってハザードの発生確率を算出した。,×\r
H28-9-3?ガス拡散計算と火炎からの放射熱計算で、ハザードの影響評価を行い、経済的損失や被災者レベルを定量化した。,○\r
H28-9-4?ハザードの影響度と発生確率から定量化したリスクが許容されるレベルであったので、リスク低減対策の検討は不要と判断した。,○\r
H29-9-1 HAZOPは、対象設備について実施者が仮想した機能喪失があった場合に、設備が陥る状態を想定して対策を考える手法であり、仮想する条件をあらかじめ定めておけば、網羅性が高い。,×\r
H29-9-2 HAZOPは、複数事象の組み合わせに最も適した手法である。,×\r
H29-9-3 HAZOPは、FTAのトップ事象の選定にも用いられる手法である。,○\r
H29-9-4 HAZOPは、プロセス異常に対するイメージトレーニングにも有効であるが、解析に長時間を要する。,○\r
特性要因図は、事故とそれに影響していると思われる要因との関連を整理して、図に体系的にまとめた解析手法で、要因を分類し、どこに管理の重点を置いたらよいかを知るのに便利である。,○\r
FTAは、事故などを頂上事象として設定し、その事象を引き起こす原因を次々に掘り下げていく手法であり、設定した頂上事象の発生確率の推算はできない。,×\r
HAZOPは、設計などで意図した操業状態からの「ずれ」がどのような危険となるかを検討する手法であり、単一事象ではなく複数の事象が複合して起こる事故の解析に適用される。,×\r
FMEAは、機器、システムを構成する部位の故障を想定し、潜在危険を洗い出す手法であり、対象部位の故障率データを取り入れた場合は、システムに影響を与える故障モードを定量的に評価できる。,○\r
What-ifは、設備面、運転面でのハザードを特定し、機器故障や誤操作などの正常状態と異なった事象発生の影響を考えるのに便利であるが、複数の事象を組み合わせることはできない。,×\r
HAZOP、FMEAは化学プラントのリスクアセスメントにおいてハザードの特定に用いることができる手法である。,○\r
FTA、ETA、は機器の故障確率やヒューマンエラーの発生確率などのデータを使用すれば、事故の発生確率を算出できる手法である。,○\r
特性要因図は、問題とする特性に影響していると思われる要因相互の因果関係を明確に把握し、管理の重点化すべきところを知るのに便利な手法である。,×\r
Wha-ifは、機器故障などの正常状態と異なった事象発生の影響を考える手法であり、複数事象の組み合わせを想定することはできない。,×\r
プラントのスタートアップ操作におけるハザードを特定するのに、連続系HAZOPのガイドワードに加えて、タイミングと時間に関するずれを想定するためのガイドワードを追加して解析を実施した。,○\r
FTAは、事故を発生させる複数の要因の組み合わせを解析することができ、また、事故の発生確率も推定することができる。,○\r
ETAは、ある引金事象がどのような結果を引き起こしうるかを、樹木の枝分かれ式に追求し分析する手法であり、引金事象が事故に拡大する確率の推定も可能である。,○\r
What-ifは、ハザードの特定において、正常状態とは異なった事象発生の影響を考える手法として、用いることができる。,○\r
FTAで事故の発生確率を算出する場合、安全弁設置による確率の低減は算入しない。,×\r
ETAで、一つの小規模トラブルが事故に拡大していくシナリオを作成し、シナリオに沿って、機器の故障などの確率を使用して、その事故の発生確率を推定した。,○\r
FMEA は、機器を構成する部品の管理方法の見直しには適用できない。,×\r
リスク解析の手法のうち、FTAは結果（事故）から原因にさかのぼる方向で解析を進めるのに対し、HAZOPは原因から解析を進める方向の異なった手法であるため、同一の設備について両手法を併用してのリスク解析は避けるべきである。,×\r
リスクの見積りにあたり、ETAで冷却ポンプが停止した場合に発生する事故の発生確率を推算するのに、異常を知らせる警報装置や、インターロックなどの安全装置は設置されていないものとして計算した。,×\r
FMEA で、システムを構成する機器に考えられる故障モードを定量的に評価し、また、FMEA をFTAでの頂上事象に関係する構成基本事象の選択にも利用した。,○\r
製造設備の反応器において、撹拌機が故障したり、冷却水が停止した場合などの異常を想定し、それぞれの影響・結果をWhat-ifで解析して必要な安全対策を検討した。,○\r
25-10-1 油入防爆構造での点火源となる部分を納める絶縁油の温度は、対象とする爆発性ガスの発火温度に対応して定められた値を超えないようにする必要がある。,○\r
25-10-2 最大安全隙間は、ガス固有の値であり、この値は内圧防爆構造の電気機器の選定に用いられる。,×\r
25-10-3 最小点火電流は、爆発性ガスの種類によって異なり、この値は本質安全防爆構造の電気機器の選定に用いられる。,○\r
25-10-4 爆発危険箇所の区分を検討する場合、爆発性ガスの存在確率は、そのガスの放出源からのみ決定されるものである。,×\r
26-10-1 静電気の発生による帯電機構には、摩擦、混合・攪拌による帯電のほか、滴下帯電、粉砕帯電など多くの過程があり、電荷の供給がなくなれば、電荷は減少していく。,○\r
26-10-2 帯電物質の放出エネルギーは、物質の導電率が小さくなるほど放電の直前に持っていた静電エネルギーに近くなる。,×\r
26-10-3 帯電物質の静電エネルギーは、電荷量と物質の静電容量の積に比例する。,×\r
26-10-4 タンクに導電率の小さい液を流入させる場合、タンクが金属製で接地が施されていても、液の帯電を緩和するには液の導電率、容積に応じた静置時間が必要である。,○\r
27-10-1 導電性の液体が配管中を乱流で流れる場合、流動による帯電量は、流速の他に配管径の影響も受ける。,○\r
27-10-2 帯電物質からの放電エネルギーは電荷量の2乗に比例し、帯電物質の電気伝導率に反比例する。,×\r
27-10-3 体積抵抗率の大きな液体を静電設置が施された導電性のタンクに貯液する場合、タンク流入直後では、流入時に発生した静電気によりタンク中央部は壁面に比べて液体の電位は高くなりやすい。,○\r
27-10-4 外部雷保護システムにおける避雷接地は、接地抵抗値を極力小さくするとともに被保護物とその周辺の設置電位を一様にすることが重要である。,○\r
28-10-1 通常の状態において、爆発性雰囲気がしばしば発生する可能性のある電気機器の設置場所は、第二類危険箇所である。,×\r
28-10-2 耐圧防爆構造の容器は、内部保護ガスの圧力に耐え、内圧低下時の保護装置を備えていなければならない。,×\r
28-10-3安全増防爆構造は、正常運転時において対象とする爆発性ガスの点火源とならない電気機器に対して適用される。,○\r
28-10-4 本質安全防爆構造とは、正常時及び故障時において、対象とする爆発性ガスの点火源とならないことを公的機関が確認したものである。,○\r
29-10-1 帯電物質からの放電で可燃物が発火する災害発生限界の帯電電位は、帯電物質の体積抵抗率に反比例する。,×\r
29-10-2導体のタンクに静電気が帯電しやすい液体を貯蔵する場合、静電気の帯電を緩和するために設ける静置時間は、貯蔵容量と貯蔵液体の導電率を考慮して決められる。,○\r
29-10-3 静電気の発生を抑制する方法として、流体中の夾雑物の除去などがあり、静電気の緩和、除去を促進する方法として、湿度を上げることなどがある。,○\r
29-10-4 体積抵抗率が大きな物質は、体積抵抗率が小さな物質に比べ、設置をしても帯電した電荷は逃がしにくい。,○\r
30-10-1 耐圧防爆構造は、周囲の爆発性ガスの最小点火電流値によって分類されている。,×\r
30-10-2 安全増防爆構造は、周囲の爆発性ガスに点火することがないように電気回路の消費エネルギーを制御したもので、適用は計測機器の発振器のような弱電機器に限られている。,×\r
30-10-3 内圧防爆構造は、電気機器を収納する容器内に保護期待を封入したもので、容器内の圧力が所定の圧力以下になった場合に作動する保護装置が必要である。,○\r
30-10-4 樹脂充填防爆構造は、電気機器を構成する部分であって、火花、アークを発するもの、または、高温部を樹脂の中に納めることにより点火しないようにした構造である。,○\r
1-10-1 静電気が発生してもそれ以後に電荷の供給がなければ、物質中の電荷の中や外部への導電によって電荷は減少していき、湿度が高いと電荷の減少が促進される。,○\r
1-10-2 帯電物質の火花放電で放出するエネルギーは、導電率が異なっていても帯電電位が同じであれば、同じ大きさとなる。,×\r
1-10-3 石油製品などの可燃性液体を金属製タンクに貯蔵するとき、静電気の帯電を緩和させるための静置時間は、導電率が小さな液体ほど長くする。,○\r
1-10-4 配管などの金属導体同士をボルトで接続した場合は、電気的にはボンディングしたのと同じ効果が得られている場合もある。,○\r
2-10-1?耐圧防爆構造は、内部で発生した爆発に耐え、かつ、火炎が外部に伝播しない容器の中に、着火源となる電気機器を収容した構造で、最小点火電流値により分類されている。,×\r
2-10-2?爆発危険箇所における非点火防爆構造の設置は、第二類危険箇所に限定されている。,○\r
2-10-3?無停電電源装置（UPS）は、常用電源を直流に変換して蓄電池に充電するとともに、再度交流に変換して電力を供給する。,○\r
2-10-4?非常用電源に供する蓄電池の容量は、非常用発電設備が設置されている場合は、その起動までの時間、設置されていない場合は、常用電源が回復するまでの総定時間から決定する。,×\r
静電気が帯電した液体を、静電接地された金属製の貯槽に静置した時の液体の電荷は、導電率が高い液体ほど早く減少する。,○\r
帯電した物質が一度で放電するエネルギーは、放電直前にもっていた静電エネルギーが同じ場合には、導電率が低いほど大きくなる。,×\r
可燃物を取り扱う作業者の、火災・爆発の災害発生限界の帯電電位は、可燃物の最小発火エネルギーと作業者の静電容量から計算することができる。,○\r
外部雷保護システムにおける避雷接地は、接地抵抗値を極力小さくするとともに被保護物とその周辺の接地電位を一様にすることが重要である。,○\r
耐圧防爆構造および内圧防爆構造は、電気機器を収納する容器内部で爆発が起こっても、外部の爆発性ガスに点火しないようにした仕組みである。,×\r
油入防爆構造および樹脂充てん防爆構造は、電気機器の点火源と、爆発性ガスが直接接触しないようにした仕組みである。,○\r
絶縁物を介する継ぎ手で接続されている金属配管は、ボンディングや金属ボルトでの接続などで電気的に同電位にすることができれば、複数の配管をまとめて一か所に静電接地を施すことも可能である。,○\r
保安接地は、電気機器の外箱の大きさに応じて規定された接地抵抗値とする必要がある。,×\r
25-11-1 ばね式安全弁は、内圧がばねの力より大きくなると弁体が上がり内部流体を放出して圧力を降下させ、内圧が降下してばねの力のほうが大きくなると閉じるようになっている。,○\r
25-11-2 破裂板には、金属製またはグラファイト製のものがあり、ばね式安全弁と比較して吹き出し抵抗が大きく、高粘性や固着性の流体に適していない。,×\r
25-11-3 大気圧付近の圧力で取り扱う低温の液化ガス貯槽の負圧防止対策としてほかの貯槽からの均圧管を設置した。,○\r
25-11-4 溶栓式安全弁に用いられる溶栓は、ビスマス、カドミウム、鉛、スズなどを主成分とする合金で、規定以上の温度になると溶融するものが使用されている。,○\r
26-11-1 ばね式安全弁のリフト形式のうち、全量式は弁座流路面積が、弁体と弁座の当たり面より下部にあるノズルののど部の面積より十分大きいものとなるようなリフトが得られる形式である。,○\r
26-11-2 破裂板は、ばね式安全弁に比べて、防食処理が容易であり、腐食性流体に適している。,○\r
26-11-3 圧縮機のバイパスラインを使用して、吐き出しガスをその吸い込み側に戻す方式の自動圧力制御装置では、吸い込み量の約半分までの量を戻す容量であればよい。,×\r
26-11-4 液体を移送する長距離配管に緊急遮断弁を設置するときには、ウォータハンマの発生を防止するために、弁の閉止に要する時間が短すぎないようにする。,○\r
27-11-1 ばね式安全弁のリフト形式は、揚程式と全量式に分けられ、揚程式はリフトが弁座口の径の1/40以上1/4未満で、弁体が開いた時の流路面積の中で弁座流路面積が最小となる形式である。,○\r
27-11-2 破裂板は、構造が単純で吹き出し抵抗が小さく、取り扱い、点検が容易であるが、腐食性、固着性の流体には適していない。,×\r
27-11-3 容器に設ける安全弁は、車両に固定した容器ではばね式のもの、一般高圧ガスの容器では破裂板式、溶栓式のものが一般に使用される。,○\r
27-11-4 弁体が流体の排圧によって逆流を防止するように作動するバルブを逆止弁といい、リフト逆止弁、スイング逆止弁などがある。,○\r
28-11-1 圧縮機のバイパスラインを使用して吐き出しガスをその吸い込み側に戻す方式の自動圧力制御装置では、吸い込み量の全量を戻すことができる容量が必要である。,○\r
28-11-2 屋外の窒素ガス貯槽に、開放型ばね式安全弁を設置した。,○\r
28-11-3 ばね式安全弁は、破裂板に比べて高粘性流体に適していないが点検が容易である。,×\r
28-11-4 破裂板は、ばね式安全弁に比べて防食処理が容易であり、破裂するまで交換の必要がない。,×\r
29-11-1 ばね式安全弁が設置できない設備に、急激な圧力上昇に対する安全装置として、破裂板を設置した。,○\r
29-11-2 配管に取り付けるばね式安全弁の入口配管は、内容物にかかわらず、配管の下側から取り出す。,×\r
29-11-3 液体の長距離配管に緊急遮断弁を設置する場合は、瞬時に弁が閉止するようにする。,×\r
29-11-4 ガス火災で消化困難な場合には、火災により加熱される装置を散水冷却して二次的な火災を防止することが重要である。,○\r
30-11-1 ばね式安全弁のうち、揚程式安全弁は、弁座流路面積が弁体と弁座との当たり面より下部にあるノズルののど面の面積より十分大きなものとなるようなリフトが得られる形式である。,×\r
30-11-2 破裂板は、製作ロットごとに決められた数を試験して、その作動圧力を確認する措置などがとられた上で使用される。,○\r
30-11-3 破裂板は、ばね式安全弁に比べると、高粘性流体に適しているが、異常圧力の上昇速度が大きい場合に対応できない。,×\r
30-11-4 緊急遮断弁の定期的な作動チェックや弁座漏れ検査を運転中に行えるように、バイパス弁を設置することがあるが、通常運転時には確実に閉止しておく。,○\r
多段式往復圧縮機全体の保護のために、往復圧縮機の最終段の出口配管のみに、ばね式安全弁を設置した。,×\r
貯槽の元弁に近接して取り付けた緊急遮断弁を、地震発生時に貯槽の揺れの影響を受けないように、貯槽本体とは別の基礎に設置した。,×\r
計装用空気を使用する緊急遮断装置に、緊急時に弁が確実に作動するように計装用空気溜を設け、作動に必要な計装用空気を確保した。,○\r
可燃性の液化ガス貯槽の負圧防止対策として、圧力計、圧力警報設備および同種の液化ガス貯槽からのガス導入配管（均一管）を設置した。,○\r
全量式のばね式安全弁は、弁体と弁座の当たり面より下部にあるノズルののど面の面積より、弁座流路面積が十分大きくなるようなリフトが得られる。,○\r
破裂板は、負圧による容器の破損を防止する目的では使用できない。,×\r
逃し弁の出口配管の圧力損失は、規定吹き出し量算出式における排圧に見合う値以上にしないよう考慮する必要がある。,○\r
緊急遮断弁の閉止時に発生するウォータハンマの衝撃の強さは、長距離配管より短距離配管の方が大きい。,×\r
可燃性ガスの貯槽に、密閉型ばね式安全弁を取り付けた。,○\r
破裂板は、ばね式安全弁に比べ防食処理が容易であり、破裂するまで交換の必要がない。,×\r
貯槽の元弁に近接して取り付けた緊急遮断弁を、地震発生時に貯槽の揺れの影響を受けないように貯槽本体とは別の基礎に設置した。,×\r
遠心圧縮機の吐出しガスを吸込み側に戻す自動圧力制御装置を、圧縮する吐出しガスの全量を戻せる容量とした。,○\r
ばね式安全弁のうち、揚程式安全弁は、弁体が開いたときの流路面積の中で弁座流路面積が最小となるリフト形式である。,○\r
破裂板は、ばね式安全弁に比べ、内部圧力を降下させるまでの時間は短いが、高粘性、固着性の流体には適さない。,×\r
弁体が流体の背圧によって逆流を防止するように作動するバルブを逆止弁といい、リフト逆止弁、スイング逆止弁、ボール逆止弁などがある。,○\r
緊急遮断弁の閉止時にウォータハンマが発生した場合、その衝撃の大きさは、弁の径、その上流側の配管の長さ、流体の流速および質量にほぼ比例し、弁の閉止時間に反比例する。,○\r
25-12-1 接触燃焼式と半導体式のガス漏洩検知警報設備は、検知素子の電気抵抗値が、可燃性ガスなどの濃度により変化する原理を利用している。,○\r
25-12-2 アンモニアガスを大気に放出するための除外設備として、苛性ソーダ水溶液を用いる吸収塔を設置した。,×\r
25-12-3 フレアースタックから発生する黒煙、騒音などを低減するため、エレベーテッドフレアーではなくグランドフレアーを採用した。,○\r
25-12-4 フレアースタックで燃焼速度の大きいガスを処理する場合は、逆火が起こりにくい。,×\r
26-12-1 塩素ガスをベントスタックから放出するため、水吸収塔を設置した。,×\r
26-12-2 エレベーテッドフレアスタックから放出するガス流速が、ガス固有の燃焼速度に比べて過大になると逆火現象が起きる。,×\r
26-12-3 エレベーテッドフレアスタックでスチーム吹込み量を増加させると、空気が吸引され燃焼効率が向上するとともに、水性ガス反応により黒煙の発生が抑制できる。,○\r
26-12-4 定電位電解式ガス漏洩警報設備は、一酸化炭素、硫化水素の測定に適している。,○\r
27-12-1 亜硫酸ガスの除害剤として水は適さない。,×\r
27-12-2 ベントスタックから放出するガスの着地濃度を小さくするため、スタック径を大きくし放出ガス流速を小さくした。,×\r
27-12-3 ガス漏洩検知警報設備の応答時間のテストを、サンプリング部と検知部だけでなく指示警報部とも組み合わせて実施した。,○\r
27-12-4 スチームカーテンは、漏洩ガスの流れを遮断するとともに、漏洩ガスを希釈する効果もある。,○\r
28-12-1 不活性ガス中の可燃性ガスを接触燃焼式ガス検知器で測定する場合は、測定精度が落ちるため空気を混入させてはならない。,×\r
28-12-2 水溶性で毒性のある液化ガスが漏洩した場合、水によって希釈し、ガスの分圧を下げる措置は、拡散防止に有効である。,○\r
28-12-3 炭化水素をエレベーテッドフレアーで燃焼させる場合、水素が含まれていると、火炎の安定域が広くなる。,○\r
28-12-4 エレベーテッドフレアーで、浮上りと逆火の起こる流速は、燃焼速度の大きいガスほど大きい。,○\r
29-12-1 エレベーテッドフレアーの安定燃焼のため、噴出ガス流速を燃焼速度より大きくし、かつ、マッハ数が0.2程度になるように設計した。,○\r
29-12-2 接触燃焼式および半導体式のガス漏洩検知警報設備では、不活性ガスを検出することはできない。,○\r
29-12-3 毒性ガスのうち、アンモニアと亜硫酸ガスには、除害剤として大量の水が使用できる。,○\r
29-12-4 スチームカーテンは、漏洩したガスの流れを遮断する効果はない。,×\r
半導体式ガス漏洩検知警報設備は、金属酸化物半導体の電気抵抗値がガスの濃度に応じて変化する現象を利用するもので、不活性ガスを含むすべてのガスの検知が可能である。,×\r
ガス漏洩検知警報設備は、金属酸化物半導体の電気抵抗値がガスの濃度に応じて変化する現象を利用するもので、不活性ガスを含むすべてのガスの検知が可能である。,○\r
スチームカーテンは、漏洩した可燃性ガスを付近の加熱炉などと遮断したり、漏洩ガスを希釈する効果があり、上方噴射の場合は拡散させる効果も期待できる。,○\r
エレベーテッドフレアースタックにガス流量に見合ったスチーム吹込み量を自動的に調整するシステムを設置し、黒煙と火炎息継ぎの防止対策とした。,○\r
接触燃焼式ガス漏洩検知警報設備は、検知素子である白金コイルの電気抵抗が燃焼反応により増大することを利用したもので、爆発下限界以下の濃度の可燃性ガスには適用できない。,×\r
ガルバニ電池式ガス漏洩検知警報設備で酸素を測定する原理は、検知ガス中の酸素が電解液中へ溶解すると、電極間に溶存酸素濃度に比例した還元電流が流れることを利用したものである。,○\r
ガス漏洩検知警報装置に関して、ポンプのメカニカルシール部のように漏洩しやすい場所のガスサンプリング方式は、吸引型の方が拡散型よりも測定が確実である。,○\r
フレアースタックから発生する黒煙、騒音などを低減するため、エレベーテッドフレアーではなく、グランドフレアーを採用した。,○\r
ガス漏洩検知警報設備における隔膜イオン電極式は、検知ガスが隔膜を透過して内部液に溶解して生じたイオンが、イオン電極に作用して発生する起電力を測定するものであり、アンモニアやシアン化水素の検知に適用できる。,○\r
液化ガス貯槽の防液堤内の雨水を外部に排出するため、防液堤外において操作できる排水弁を設置し、常時開とした。,×\r
フレアースタックのフレアー装置の逆火防止対策を目的として、流入経路にシールドラムを設置した。,○\r
塩素ガスの除害設備として、カセイソーダ水溶液を用いる吸収塔を設置した。,○\r
地震の加速度を測定するのに、落球型感震器を設置した。,×\r
半導体式のガス漏洩検知警報設備は、半導体を加熱して、これに触れる可燃性ガスの濃度により半導体の電気抵抗値が変化する現象を利用したもので、低濃度のガス検知に優れている。,○\r
スチームカーテンには、漏えいした可燃性ガスを加熱炉など火気を取扱う機器から遮断したり、希釈したり、拡散させたりする効果がある。,○\r
塩素の除害用に、消石灰を微粉化したものを加圧して散布する装置がある。,○\r
接触燃焼式は、ホイートストンブリッジに組み込まれた白金コイル表面上で検知ガスの接触燃焼反応が起こり、電気抵抗値が増大することを利用したもので、可燃性ガスの測定に適している。,○\r
半導体式は、加熱された金属酸化物半導体に測定ガスが触れると、金属酸化物の電気抵抗値が変化することを利用したもので、可燃性ガス、不活性ガスのすべてのガスを検知することができる。,×\r
隔膜イオン電極式は、検知ガスが隔膜を透過して内部液に溶解し、イオン化することで発生する起電力を利用したもので、毒性ガスの測定に適している。,○\r
ガルバニ電池式で酸素濃度を測定する場合は、検知ガス中の酸素が電解液中に溶解すると濃度に比例した還元電流が発生することを利用している。,○\r
25-13-1 配管のラインアップ時に安全弁などが取り付けられていること、安全弁の元弁が「開」で封印されていること、仕切り板が取り外されていることなどを２人で確認した。,○\r
25-13-2 遠心圧縮機では、吐き出し圧力が上昇すると流量が低下し、サージングが起こることがある。,○\r
25-13-3 流体が液体である配管のバルブを閉止するときに発生する衝撃の大きさは、バルブの径、その上流側の配管の長さ、流速、密度に反比例する。,×\r
25-13-4 ガス火災では、いったん消化しても漏洩が続く限り二次災害を引き起こす危険があるため、ごく小規模の火炎（開放空間に限る）以外は消火せずに周囲への散水冷却を行い、並行して漏洩量を減少させる措置をとる。,○\r
26-13-1 加熱炉における加熱管では、管内のスケールが付着するところ、ロングフレームにより加熱されるところなどにホットスポットが発生しやすい。,○\r
26-13-2 貯槽に残留している温度の高い液化天然ガス（LNG）に温度が低いLNGを下部から注入することで、LNGが上下2液層に分化し安定な境界面を形成している場合、貯槽の壁面から熱の侵入によってロールオーバが起こることがある。,○\r
26-13-3 配管内の閉塞は、流体成分が反応して固形物を生成したり、流体成分のいずれかが氷結、凝固または析出するなど固体が配管内に蓄積して発生する現象で、流速による影響はない。,×\r
26-13-4 ウィーピングは、棚段塔の段液の液深が浅く、蒸気によって液が吹き飛ばされる現象である。,×\r
27-13-1 飛沫同伴（エントレインメント）は、塔内の蒸気速度が大きくなると、液滴が蒸気に同伴して上のトレイまで到達する現象であり、トレイの段効率低下の原因となる。,○\r
27-13-2 緊急時にすぐに高圧ガス製造設備の安全弁の元弁を操作できるように封印、施錠などを施さずに運転を開始した。,×\r
27-13-3 バルブの開閉に必要な標準トルクに見合う長さのハンドル回しを使用して、一人でバルブの操作を行った。,○\r
27-13-4 製造設備の運転中に地震が起こった場合は、液面で制御するシステムにおいては、液面のスロッシングによる影響を受けて運転に支障をきたすことがある。,○\r
28-13-1 安全弁の元弁は、安全弁が作動したときに閉止措置をするので施錠せず、かつ、ハンドル回しを近くにおいて確実な操作ができるようにする。,×\r
28-13-2 配管内の閉塞は、内部の流体が反応して固形物が発生したり、流体の温度条件によっては不純物としての水分などが凍結して発生する現象であり、流速による影響はない。　26-13-3と同じ,×\r
28-13-3 発熱反応を行わせる反応器内の触媒の充填が不均一な場合、また、加熱炉のチューブ内にスケールが付着して伝熱が阻害される場合にホットスポットが発生する恐れがある。,○\r
28-13-4 蒸留塔においてトレイ上の液深が深い場合または蒸気量が少ない場合、蒸気がトレイから断続的に吹き出し、段効率が低下することがある。,○\r
29-13-1 遠心ポンプが不安定な脈動を起こしており、所定の流量に達していない状態になっていたので、原因究明の一つの手段として吸い込み側の条件（液温、ストレーナーのつまり、液面など）を確認した。,○\r
29-13-2 毒性ガスが漏洩した場合に使用する呼吸保護具のうち、送気式マスクは、空気呼吸器に比べ機動的であるが使用可能時間の制約を受ける。,×\r
29-13-3 ヒューマンエラーによる誤操作などの防止には、人間個々の特性を考慮した対策だけでなく、職場において良好なコミュニケーションを維持することも重要である。,○\r
29-13-4 漏洩した水溶性の液化ガスの散水による拡散防止を行うにあたり、溶解熱による温度上昇を小さくするために大量の水を用いた。,○\r
流体が液体である配管の弁を閉止するときに配管や弁に衝撃を与えることがあり、その際に発生する衝撃の大きさは、弁の閉止時間に比例する。,×\r
遠心ポンプのキャビテーションは、液温が沸点に近い場合に液が気化することで発生し、羽根車の出口付近において生じやすい。,×\r
ブローイングは、塔の液量が少ない場合、または段液の液深が浅い場合、蒸気によって液が吹き飛ばされる現象で、多孔板トレイで発生する。,○\r
フランジからの漏れの発生に対して加圧下で増し締めを行う場合には、片締めを起こし、許容応力を超える締め付け力でボルトが伸び、かえって漏洩量が増加する危険がある。,○\r
ポンプの吸い込み側にあるストレーナが閉塞すると、液から分離したガスによりハンチング（不安定な脈動）を起こすことがある。,○\r
常温の液化石油ガスを常圧に近い容器に移送する場合に、急激なバルブ操作を行うと、容器に亀裂を生ずる危険性がある。,○\r
液化天然ガス（LNG）貯槽では、密度の小さいLNGが残留しているところに、密度の大きなLNGを下部から静かに注入すると、ロールオーバによって大量のガスを発生させることがある。,○\r
蒸留塔で起こるウィーピングは、塔の蒸気量が減少すると蒸気が出なくなり、段液だけが降下する現象で、泡鐘トレイで多く発生する。,×\r
計装パネルに設けた保安上重要なスイッチは、緊急時に直ちに操作できるように、カバーをかけてはならない。,×\r
塔内の蒸気速度が増加し、トレイの泡沫層が高くなり飛沫同伴量が増大し、ついには降下液が冗談に運ばれる現象を、フラッディングという。,○\r
ガス火災は、いったん消火しても漏洩が続く限り、再発火や爆発で二次災害を引き起こす危険があるため、開放空間におけるごく小規模の火炎以外は、消化してはならない。,○\r
ポンプの空引き現象とは、所定の揚程や流量に達せずにハンチングを起こす現象であり、ケーシング内に液が満たされず、気体が溜まったときに起こる。,○\r
運転開始前にフランジの締付けを適正に実施したが、運転後の温度上昇幅が大きいので、運転開始時の昇温過程でホットボルティングを実施した。,○\r
計装パネルに設けた保安上重要なスイッチは、緊急時に直ちに操作できるようにカバーをかけてはならない。,×\r
規定のハンドル廻しを用いてバルブを開けようとしたが、非常にかたく操作が困難だったので、運転管理責任者に報告した。,○\r
多孔板トレイで、塔の液量が少ない場合や段液の液深が浅い場合には、ブローイングが発生し、蒸気によって液が吹き飛ばされることがある。,○\r
液体が流れる配管のバルブを急激に閉止すると配管内に液柱分離が起こり、背圧があると真空部に液体が逆流し、衝突力が衝撃となって、構造破壊を起こすおそれがある。,○\r
塔のトレイ上の液（段液）の液深が深くなると、蒸気がトレイから断続的に吹き出し、段効率が高くなる。,×\r
ホットスポットは、発熱反応における反応器内の触媒充てんの不均一で発生することがあり、加熱炉の加熱管においては、スケールが付着して伝熱が阻害されることにより発生することがある。,○\r
常温の液化ガスを常圧に近い容器に移送する場合に急激なバルブ操作を行うと、噴出した液化ガスが蒸発して液温が沸点近くまで低下し、容器などにき裂を生じる危険がある。,○\r
25-14-1 状態基準保全（CBM）は、モニタリングシステムの構築や定期的な監視のための設備と工数が必要になるが、異常の早期発見に適している。,○\r
25-14-2 定期保全（時間基準保全TBM）は、設備が故障または要求された性能の低下をきたしてから計画的に整備または修理を行う方式であり、設備を寿命まで使い切るので費用が安い。,×\r
25-14-3 製造設備の異常は運転中でなければ発見しにくい場合があり、定期検査だけでは運転中の経時的変化を把握しにくいので、日常検査（OSI）はそれを補う役割がある。,○\r
25-14-4 あらかじめ想定される設備の異常や劣化の状態を的確に把握することによって、設備の健全性を総合的に診断する技術は、設備診断技術である。,○\r
26-14-1 磁粉探傷試験は、試験体の表面または表面近くにある欠陥の位置や形状を検出する方法であり、オーステナイト系ステンレス鋼などの非磁性体材料には適用できない。,○\r
26-14-2 浸透探傷試験は、肉眼では確認できない微細な表面欠陥を検出するのに最も広く用いられている方法であり、プラスチック、ガラス、セラミックスなどには適用できない。,×\r
26-14-3 火気工事は、可燃性ガスに対する遮断などの環境確保、消火器などの設置、溶接時の火花飛散防止処置、緊急時の措置などを条件に許可される。,○\r
26-14-4 入槽する際の空気による再置換に先立つガス置換完了時には、可燃性ガスは爆発下限界以下、毒性ガスは許容濃度以下であることを確認する。,×\r
27-14-1 工事内容を周知する場合、工事仕様書などの書面で示し、口頭で内容を補足するとともに、工事対象の設備を現地で関係者立会いの下で確認する。,○\r
27-14-2 電動機、ヒータなどの外部温度が極めて高い機器類を使用することも火気工事であり、周囲の可燃性ガスに対する遮断などの環境確保を図る必要がある。,○\r
27-14-3 設備を開放し、修理、検査などを行う場合には、他の部分からのガスの漏れ込みを防止するため、開放する部分の前後のバルブを閉止すればよく、仕切り板の挿入は必要ない。,×\r
27-14-4 槽内で作業をする場合、酸素欠乏症を防ぐには、自然換気の他、十分な換気を行えるようなブロワ、ファンなどの強制換気設備の設置が有効である。,○\r
28-14-1 製造設備は安全性、生産性、保全性などの観点により重要度ランクの分類が行われている。,○\r
28-14-2 保全方式のうち、時間基準保全（TBM）は設備の劣化傾向を連続的または定期的に監視、把握しながら設備の寿命などを予測し、次の整備の時期を決める方式である。,×\r
28-14-3 日常検査は、損傷要因、過去の検査データ、運転条件の変化、類似設備の事故情報などを参考にして検査内容を決める。,○\r
28-14-4 取り外して点検清掃した熱交換機などの機器は、単独での気密試験は必要なく、接続配管と接合したのち、ガスケット部、配管部などに漏洩のないことを確認する。,×\r
29-14-1 生産保全（Productive Maintenance）は、安全性を前提に生産目的に合致した保全を経営的な視点から実施するものであり、生産性を高めた、経済的な保全方式として取り入れられてきている。,○\r
29-14-2 状態基準保全で部品交換または修理を行う周期は、摩耗、詰まり、腐食、劣化などの要因を考慮して実績や同種設備の事例を参考に決める。,×\r
29-14-3 赤外線サーモグラフィは加熱炉の外面の温度分布を測定することで、内面に用いられているキャスタブル耐火物の剥離、脱落の診断に利用できる。,○\r
29-14-4 インターロック機構の定期検査の要点は、構成する遮断弁などの目視検査およびインターロック機構の作動検査を行い、円滑、確実な作動を確認することである。,○\r
TBM、CBMなどの保全方式の決定において、一つの製造施設内で機器ごとに異なる保全方式を用いてもよい。,○\r
毒性ガス貯槽の不活性ガス置換および空気による再置換を槽内作業の前日に実施し、ガス濃度が許容値以下であることを確認したので、朝からすぐに作業を開始した。,×\r
設備を開放し、修理、検査などを行うので、他の部分からのガスの漏れ込みを防止するため、仕切り版を挿入する代わりに配管自体を取り外し、非開放側の配管に閉止フランジを取り付けた。,○\r
工事内容を周知する場合、工事仕様書などの書面で示し、口頭で内容を補足するとともに、工事対象の設備を現地で関係者立会いの下で確認する,○\r
時間基準保全では、摩耗、詰まり、腐食、劣化などを考慮して、あらかじめ定められた周期ごとに部品交換または修理を行う。,○\r
時間基準保全や、状態基準保全などの保全方式の決定には、機器の重要度も考慮する必要がある。,○\r
工事における安全確認では、施工部分の状態が重要であり、工事の周囲の環境変化には注意する必要はない。,×\r
可燃性ガスや毒性ガスの置換に窒素ガスを用いることはできるが、水で置換を行うことはできない。,×\r
予防保全とは、設備が機能を停止するかまたは要求された性能を下回る前に計画的に設備を整備し、突発故障を防止する保全方法で、時間基準保全や状態基準保全はこれの1つである。,○\r
事業所全体の塗装計画と費用の大きな機器の更新について、年間の保全計画とは別に、長期の保全計画を作成した。,○\r
毒性ガスの貯槽で槽内作業を行うため、まず毒性ガスを窒素で置換し、その後空気で再置換したが、毒性ガスの濃度は窒素ガス置換後に測定したので、作業前には酸素濃度を測定してから入槽した。,×\r
事業所内において、溶接作業におけるアーク発生、ガス切断などの裸火は火気工事としての管理対象であるが、工事用簡易発電機の内燃機関の火気は管理対象には含まれない。,×\r
予防保全は設備が故障する前に計画的に設備を整備し、突発故障を防止することを目的とする方式で、時間基準保全や計画事後保全はこれに含まれる。,×\r
状態基準保全は、モニタリングシステムの構築や定期的な監視のための設備と工数が必要になるが、異常の早期発見に適している。,○\r
改良保全は、設備の性能や健全性、保全性などを向上させる目的で設備を改善する方式であり、機器設計上の改良点を提案する行為も含むことがある。,○\r
可燃性ガス貯槽の内部作業を実施するため、まず槽内の可燃性ガスを空気で置換し、酸素濃度を測定し、作業許可を得たのち作業を実施した。,×\r
設備の保全計画は、その設備の材質や構造、使用される環境や履歴だけでなく、予想される劣化損傷に対する理解をもとに立案する。,○\r
時間基準保全は、設備の劣化傾向を連続的または定期的に監視、把握しながら設備が故障するまでの時間を予測し、次の整備の時期を決める方式である。,×\r
ハンマ、グラインダの使用による火花は、火気工事として管理する対象ではないため消火器などの設置は必要ないが、火花の飛散防止対策を行う。,×\r
設備を開放し、その設備の中で人が作業を行う場合、開放する部分に接続されているバルブを閉止するだけでなく、開放する部分におけるバルブまたは配管の継手に仕切板を挿入するなどにより、設備の他の部分からのガスの漏れ込みを防止する。,○\r
25-15-1 工事業者への工事内容の周知に際しては、工事仕様書などの書面で示し、口頭で補足するとともに、関係者立会いの下で工事対象設備を現地で確認する。,○\r
25-15-2 事業所内において、溶接作業におけるアーク発生、ガス切断などの裸火は火気工事としての管理対象であるが、工事用簡易発電機の内燃機の火花は、管理対象には含まれない。,×\r
25-15-3 毒性ガスを扱う貯槽の中で作業を行うために、前日に窒素によるガス置換を行って毒性ガス濃度が許容濃度以下であることを確認し、当日は空気による再置換を行って、直ちに入槽した。,×\r
25-15-4 解放した設備の中で人が作業を行う場合は、開放部分の前後のバルブを閉止するだけでなく、バルブまたは継ぎ手に仕切り板を挿入して、設備の他の部分からのガスの漏れ込みを防止する。,○\r
26-15-1 時間基準保全（TBM）は、設備の劣化傾向を連続的または定期的に監視、把握しながら設備の寿命などを予測し、次の整備の時期を決める方式である。,×\r
26-15-2 製造設備の異常は、設備を止めて行う検査のみでは発見しにくい場合があり、これを補うものとして運転中検査（OSI）がある。,○\r
26-15-3 貯槽配管の緊急遮断装置は緊急時の遮断に重要な装置であり、定期保全は欠かせない。目視検査の他、作動検査とその緊急遮断装置にかかる貯槽の解放時などに弁座の漏れ検査を行う。,○\r
26-15-4 貯槽の配管に設けたバルブの定期検査において、耐圧性能および強度に支障を及ぼす減肉、劣化損傷などの有無の検査、および作動検査を行った。,○\r
27-15-1 保全方式は以下のツリーのように分類されており、機器、部品の重要度、経済性、故障予知技術の有無に応じて選択する。,○\r
27-15-2 改良保全(CM)は、設備の性能や健全性、保全性などを向上させる目的で設備を改善する方式であり、機器設計上の改良点を提案する行為も含むことがある。,○\r
27-15-3 製造設備の維持管理のために行う定期検査の方法の一つに、OSI（On Stream Inspection）と呼ばれる設備の停止中に行う検査がある。,×\r
27-15-4 浸透探傷試験は金属に限らず、プラスチック、ガラス、セラミックスなどにも適用でき、磁粉探傷試験は、オーステナイト系ステンレス鋼などの非磁性体材料には適用できない。,○\r
28-15-1 浸透探傷試験の浸透液および磁粉探傷試験の磁粉には蛍光性のものがあり、これらは赤外線を照射して観察する。,×\r
28-15-2 超音波探傷試験において音波の中でも波長の短い（周波数の高い）超音波を使用するのは、指向性が強く、欠陥による反射率が高く、欠陥の位置検出精度を高めるためである。,○\r
28-15-3 腐食減肉を想定した肉厚測定、割れおよび接合部不良を想定したガス検知または発砲液による検査は、配管および塔槽類の漏洩に対する診断・検査方法として有効である。,○\r
28-15-4 異物による配管の閉塞や弁の作動不良に対する診断方法としては、差圧測定のほかに、放射線透過試験も有効である。,○\r
29-15-1 浸透探傷試験の浸透液および磁粉探傷試験の磁粉には蛍光性のものがあり、これらは紫外線を照射して観察する。,○\r
29-15-2 放射線透過試験は、放射線が物質を透過する性質を利用した非破壊試験方法であって、ブローホールなどの溶接欠陥の検出に有効である。,○\r
29-15-3 事業所内において、溶接作業で発生するアークなどの裸火は下記工事としての管理対象であるが、工事用簡易発電機の内燃機関の火気は管理対象ではない。,×\r
29-15-4 開放した設備の中で人が作業を行う場合のガス遮断では、開放部分の前後のバルブを閉止するだけでなく、バルブまたは配管の接手に仕切り版を挿入するなどして、設備のほかの部分からのガスの漏れ込みを防止する。,○\r
浸透探傷試験では、まず試験体表面の油脂などを除去し、次に試験体表面に染色浸透液を塗って欠陥部に浸透させた状態で、欠陥の形状などを観察する。,×\r
異物による配管の閉塞や弁の作動不良に対する診断方法としては、差圧測定のほかに、放射線透過試験も有効である。,○\r
日常検査は、損傷要因、過去の検査データ、運転条件の変化、類似設備での事故情報などを参考にして検査内容を決定する。,○\r
アコースティック・エミッション試験は、材料が外力を受けたときに、材料内部の欠陥から放出された弾性波（主に超音波）を検知する非破壊試験方法である。,○\r
取り外して点検清掃や補修をした熱交換器は、単独での気密試験は必要なく、接続配管と接合したのちガスケット部、配管部などに漏洩のないことを確認する。,×\r
赤外線サーモグラフィは加熱炉の外面の温度分布を測定することで、内面に用いられている耐火物の剥離、脱落の診断に利用できる。,○\r
磁気探傷試験（磁粉探傷試験）と渦電流探傷試験（渦流探傷試験）は、電磁気現象を利用した非破壊試験方法であり、いずれも非磁性体材料には適用できない。,×\r
異物による配管の閉塞や弁の作動不良に対する診断方法としては、差圧測定のほかに、放射線透過試験も有効である。,○\r
試験体に放射線を照射し、内部の欠陥によって反射・散乱された放射線を検出して欠陥の有無や形状を検査するのが放射線透過試験である。,×\r
貯槽配管の緊急遮断装置では、定期的な目視検査と作動検査に加えて、貯槽の解放時などに弁座の漏れ検査を行う。,○\r
製造設備の維持管理のために行う定期検査の方法の一つに、OSIと呼ばれる設備の停止中に行う検査がある。,×\r
設備診断技術とは、対象とする設備の異常や劣化状態を的確に把握し、これに機器の使用環境や材料の特性などを加味していつまで使用可能であるかを予測し、設備の健全性を診断する技術である。,○\r
赤外線サーモグラフィは、日常検査において、外面の温度分布を測定することにより、加熱炉内面のキャスタブル耐火物の剥離・脱落の診断に適用できる。,○\r
設備を開放した場合の気密試験は、原則として当該高圧ガス設備によって貯蔵・処理される気体を使用して行う。,×\r
浸透探傷試験では、まず試験体表面の油脂などを除去し、次に試験体表面に染色浸透液を塗って欠陥部に浸透させた状態で、欠陥の形状などを観察する。,×\r
アコースティック・エミッション試験は、材料が外力を受けて変形している状態で、材料内部の欠陥から放出された弾性波（主に超音波）を検知する非破壊試験方法である。,○\r
設備の保全計画は、その設備の材質や構造、使用される環境や履歴だけでなく、予想される劣化損傷に対する理解をもとに立案する。,○\r
時間基準保全は、設備の劣化傾向を連続的または定期的に監視、把握しながら設備が故障するまでの時間を予測し、次の整備の時期を決める方式である。,×\r
ハンマ、グラインダの使用による火花は、火気工事として管理する対象ではないため消火器などの設置は必要ないが、火花の飛散防止対策を行う。,×\r
設備を開放し、その設備の中で人が作業を行う場合、開放する部分に接続されているバルブを閉止するだけでなく、開放する部分におけるバルブまたは配管の継手に仕切板を挿入するなどにより、設備の他の部分からのガスの漏れ込みを防止する。,○\r
放射線透過試験は、溶接部の表面欠陥の定期検査に広く適用され、特に超音波探傷試験に比べて、厚肉配管の溶接継手の内表面に生じる疲労き裂の検出に適している。,×\r
超音波探傷試験において、音波の中でも波長の短い超音波を使用するのは、指向性が強く、欠陥による反射率が高くなり、欠陥の位置検出精度が高まるからである。,○\r
渦電流探傷試験（渦流探傷試験）は、交流電流を流したコイルによって生じる磁場を試験体に加えたときに、試験体に生じる渦電流が試験体中の減肉、割れなどによって変化することを利用する試験方法である。,○\r
磁気探傷試験（磁粉探傷試験）は、試験体を磁化したとき欠陥部に磁極が発生して強磁性体の磁粉が表面に付着することを利用した方法であって、表面に開口している欠陥のみならず、表面近傍の欠陥も検出できる。,○\r
`,Uh=`abc,def
fjfj,fejai`;/**
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
 */const Ba=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let s=e.charCodeAt(r);s<128?t[n++]=s:s<2048?(t[n++]=s>>6|192,t[n++]=s&63|128):(s&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=s>>18|240,t[n++]=s>>12&63|128,t[n++]=s>>6&63|128,t[n++]=s&63|128):(t[n++]=s>>12|224,t[n++]=s>>6&63|128,t[n++]=s&63|128)}return t},Wh=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const s=e[n++];if(s<128)t[r++]=String.fromCharCode(s);else if(s>191&&s<224){const o=e[n++];t[r++]=String.fromCharCode((s&31)<<6|o&63)}else if(s>239&&s<365){const o=e[n++],i=e[n++],a=e[n++],c=((s&7)<<18|(o&63)<<12|(i&63)<<6|a&63)-65536;t[r++]=String.fromCharCode(55296+(c>>10)),t[r++]=String.fromCharCode(56320+(c&1023))}else{const o=e[n++],i=e[n++];t[r++]=String.fromCharCode((s&15)<<12|(o&63)<<6|i&63)}}return t.join("")},La={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<e.length;s+=3){const o=e[s],i=s+1<e.length,a=i?e[s+1]:0,c=s+2<e.length,l=c?e[s+2]:0,d=o>>2,f=(o&3)<<4|a>>4;let p=(a&15)<<2|l>>6,y=l&63;c||(y=64,i||(p=64)),r.push(n[d],n[f],n[p],n[y])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(Ba(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):Wh(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<e.length;){const o=n[e.charAt(s++)],a=s<e.length?n[e.charAt(s)]:0;++s;const l=s<e.length?n[e.charAt(s)]:64;++s;const f=s<e.length?n[e.charAt(s)]:64;if(++s,o==null||a==null||l==null||f==null)throw new Kh;const p=o<<2|a>>4;if(r.push(p),l!==64){const y=a<<4&240|l>>2;if(r.push(y),f!==64){const g=l<<6&192|f;r.push(g)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class Kh extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Vh=function(e){const t=Ba(e);return La.encodeByteArray(t,!0)},Fa=function(e){return Vh(e).replace(/\./g,"")},qh=function(e){try{return La.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */const tp="FirebaseError";class wt extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=tp,Object.setPrototypeOf(this,wt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,sr.prototype.create)}}class sr{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},s=`${this.service}/${t}`,o=this.errors[t],i=o?np(o,r):"Error",a=`${this.serviceName}: ${i} (${s}).`;return new wt(s,a,r)}}function np(e,t){return e.replace(rp,(n,r)=>{const s=t[r];return s!=null?String(s):`<${r}?>`})}const rp=/\{\$([^}]+)}/g;function jn(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const s of n){if(!r.includes(s))return!1;const o=e[s],i=t[s];if(Fo(o)&&Fo(i)){if(!jn(o,i))return!1}else if(o!==i)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Fo(e){return e!==null&&typeof e=="object"}/**
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
 */function Ka(e){return e&&e._delegate?e._delegate:e}class st{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */var te;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(te||(te={}));const dp={debug:te.DEBUG,verbose:te.VERBOSE,info:te.INFO,warn:te.WARN,error:te.ERROR,silent:te.SILENT},hp=te.INFO,pp={[te.DEBUG]:"log",[te.VERBOSE]:"log",[te.INFO]:"info",[te.WARN]:"warn",[te.ERROR]:"error"},gp=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),s=pp[t];if(s)console[s](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Va{constructor(t){this.name=t,this._logLevel=hp,this._logHandler=gp,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in te))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?dp[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,te.DEBUG,...t),this._logHandler(this,te.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,te.VERBOSE,...t),this._logHandler(this,te.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,te.INFO,...t),this._logHandler(this,te.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,te.WARN,...t),this._logHandler(this,te.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,te.ERROR,...t),this._logHandler(this,te.ERROR,...t)}}const mp=(e,t)=>t.some(n=>e instanceof n);let Uo,Wo;function yp(){return Uo||(Uo=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function bp(){return Wo||(Wo=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const qa=new WeakMap,Xr=new WeakMap,za=new WeakMap,vr=new WeakMap,Ms=new WeakMap;function _p(e){const t=new Promise((n,r)=>{const s=()=>{e.removeEventListener("success",o),e.removeEventListener("error",i)},o=()=>{n(Ze(e.result)),s()},i=()=>{r(e.error),s()};e.addEventListener("success",o),e.addEventListener("error",i)});return t.then(n=>{n instanceof IDBCursor&&qa.set(n,e)}).catch(()=>{}),Ms.set(t,e),t}function wp(e){if(Xr.has(e))return;const t=new Promise((n,r)=>{const s=()=>{e.removeEventListener("complete",o),e.removeEventListener("error",i),e.removeEventListener("abort",i)},o=()=>{n(),s()},i=()=>{r(e.error||new DOMException("AbortError","AbortError")),s()};e.addEventListener("complete",o),e.addEventListener("error",i),e.addEventListener("abort",i)});Xr.set(e,t)}let Zr={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return Xr.get(e);if(t==="objectStoreNames")return e.objectStoreNames||za.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Ze(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function vp(e){Zr=e(Zr)}function Ep(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(Er(this),t,...n);return za.set(r,t.sort?t.sort():[t]),Ze(r)}:bp().includes(e)?function(...t){return e.apply(Er(this),t),Ze(qa.get(this))}:function(...t){return Ze(e.apply(Er(this),t))}}function Ip(e){return typeof e=="function"?Ep(e):(e instanceof IDBTransaction&&wp(e),mp(e,yp())?new Proxy(e,Zr):e)}function Ze(e){if(e instanceof IDBRequest)return _p(e);if(vr.has(e))return vr.get(e);const t=Ip(e);return t!==e&&(vr.set(e,t),Ms.set(t,e)),t}const Er=e=>Ms.get(e);function Tp(e,t,{blocked:n,upgrade:r,blocking:s,terminated:o}={}){const i=indexedDB.open(e,t),a=Ze(i);return r&&i.addEventListener("upgradeneeded",c=>{r(Ze(i.result),c.oldVersion,c.newVersion,Ze(i.transaction),c)}),n&&i.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{o&&c.addEventListener("close",()=>o()),s&&c.addEventListener("versionchange",l=>s(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const Ap=["get","getKey","getAll","getAllKeys","count"],Cp=["put","add","delete","clear"],Ir=new Map;function Ko(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(Ir.get(t))return Ir.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,s=Cp.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||Ap.includes(n)))return;const o=async function(i,...a){const c=this.transaction(i,s?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),s&&c.done]))[0]};return Ir.set(t,o),o}vp(e=>({...e,get:(t,n,r)=>Ko(t,n)||e.get(t,n,r),has:(t,n)=>!!Ko(t,n)||e.has(t,n)}));/**
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
 */class Rp{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Hp(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Hp(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Qr="@firebase/app",Vo="0.9.15";/**
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
 */const gt=new Va("@firebase/app"),Sp="@firebase/app-compat",xp="@firebase/analytics-compat",Op="@firebase/analytics",Pp="@firebase/app-check-compat",$p="@firebase/app-check",Mp="@firebase/auth",kp="@firebase/auth-compat",Dp="@firebase/database",Np="@firebase/database-compat",Bp="@firebase/functions",Lp="@firebase/functions-compat",Fp="@firebase/installations",jp="@firebase/installations-compat",Up="@firebase/messaging",Wp="@firebase/messaging-compat",Kp="@firebase/performance",Vp="@firebase/performance-compat",qp="@firebase/remote-config",zp="@firebase/remote-config-compat",Jp="@firebase/storage",Gp="@firebase/storage-compat",Yp="@firebase/firestore",Xp="@firebase/firestore-compat",Zp="firebase";/**
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
 */const es="[DEFAULT]",Qp={[Qr]:"fire-core",[Sp]:"fire-core-compat",[Op]:"fire-analytics",[xp]:"fire-analytics-compat",[$p]:"fire-app-check",[Pp]:"fire-app-check-compat",[Mp]:"fire-auth",[kp]:"fire-auth-compat",[Dp]:"fire-rtdb",[Np]:"fire-rtdb-compat",[Bp]:"fire-fn",[Lp]:"fire-fn-compat",[Fp]:"fire-iid",[jp]:"fire-iid-compat",[Up]:"fire-fcm",[Wp]:"fire-fcm-compat",[Kp]:"fire-perf",[Vp]:"fire-perf-compat",[qp]:"fire-rc",[zp]:"fire-rc-compat",[Jp]:"fire-gcs",[Gp]:"fire-gcs-compat",[Yp]:"fire-fst",[Xp]:"fire-fst-compat","fire-js":"fire-js",[Zp]:"fire-js-all"};/**
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
 */const ag=1024,cg=30*24*60*60*1e3;class lg{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new fg(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=zo();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const o=new Date(s.date).valueOf();return Date.now()-o<=cg}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const t=zo(),{heartbeatsToSend:n,unsentEntries:r}=ug(this._heartbeatsCache.heartbeats),s=Fa(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function zo(){return new Date().toISOString().substring(0,10)}function ug(e,t=ag){const n=[];let r=e.slice();for(const s of e){const o=n.find(i=>i.agent===s.agent);if(o){if(o.dates.push(s.date),Jo(n)>t){o.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Jo(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class fg{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Ua()?Wa().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await ig(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return qo(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return qo(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...t.heartbeats]})}else return}}function Jo(e){return Fa(JSON.stringify({version:2,heartbeats:e})).length}/**
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
 */function dg(e){mt(new st("platform-logger",t=>new Rp(t),"PRIVATE")),mt(new st("heartbeat",t=>new lg(t),"PRIVATE")),et(Qr,Vo,e),et(Qr,Vo,"esm2017"),et("fire-js","")}dg("");var hg="firebase",pg="10.1.0";/**
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
 */const xg={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},yt=new sr(Hg,Sg,xg);function rc(e){return e instanceof wt&&e.code.includes("request-failed")}/**
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
 */function sc({projectId:e}){return`${Cg}/projects/${e}/installations`}function oc(e){return{token:e.token,requestStatus:2,expiresIn:Pg(e.expiresIn),creationTime:Date.now()}}async function ic(e,t){const r=(await t.json()).error;return yt.create("request-failed",{requestName:e,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function ac({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function Og(e,{refreshToken:t}){const n=ac(e);return n.append("Authorization",$g(t)),n}async function cc(e){const t=await e();return t.status>=500&&t.status<600?e():t}function Pg(e){return Number(e.replace("s","000"))}function $g(e){return`${nc} ${e}`}/**
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
 */async function Mg({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const r=sc(e),s=ac(e),o=t.getImmediate({optional:!0});if(o){const l=await o.getHeartbeatsHeader();l&&s.append("x-firebase-client",l)}const i={fid:n,authVersion:nc,appId:e.appId,sdkVersion:tc},a={method:"POST",headers:s,body:JSON.stringify(i)},c=await cc(()=>fetch(r,a));if(c.ok){const l=await c.json();return{fid:l.fid||n,registrationStatus:2,refreshToken:l.refreshToken,authToken:oc(l.authToken)}}else throw await ic("Create Installation",c)}/**
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
 */const Dg=/^[cdef][\w-]{21}$/,ss="";function Ng(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const n=Bg(e);return Dg.test(n)?n:ss}catch{return ss}}function Bg(e){return kg(e).substr(0,22)}/**
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
 */const uc=new Map;function fc(e,t){const n=ir(e);dc(n,t),Lg(n,t)}function dc(e,t){const n=uc.get(e);if(n)for(const r of n)r(t)}function Lg(e,t){const n=Fg();n&&n.postMessage({key:e,fid:t}),jg()}let ft=null;function Fg(){return!ft&&"BroadcastChannel"in self&&(ft=new BroadcastChannel("[Firebase] FID Change"),ft.onmessage=e=>{dc(e.data.key,e.data.fid)}),ft}function jg(){uc.size===0&&ft&&(ft.close(),ft=null)}/**
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
 */async function Bs(e){let t;const n=await ar(e.appConfig,r=>{const s=Kg(r),o=Vg(e,s);return t=o.registrationPromise,o.installationEntry});return n.fid===ss?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}function Kg(e){const t=e||{fid:Ng(),registrationStatus:0};return pc(t)}function Vg(e,t){if(t.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(yt.create("app-offline"));return{installationEntry:t,registrationPromise:s}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=qg(e,n);return{installationEntry:n,registrationPromise:r}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:zg(e)}:{installationEntry:t}}async function qg(e,t){try{const n=await Mg(e,t);return Wn(e.appConfig,n)}catch(n){throw rc(n)&&n.customData.serverCode===409?await hc(e.appConfig):await Wn(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function zg(e){let t=await Zo(e.appConfig);for(;t.registrationStatus===1;)await lc(100),t=await Zo(e.appConfig);if(t.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await Bs(e);return r||n}return t}function Zo(e){return ar(e,t=>{if(!t)throw yt.create("installation-not-found");return pc(t)})}function pc(e){return Jg(e)?{fid:e.fid,registrationStatus:0}:e}function Jg(e){return e.registrationStatus===1&&e.registrationTime+ec<Date.now()}/**
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
 */async function Gg({appConfig:e,heartbeatServiceProvider:t},n){const r=Yg(e,n),s=Og(e,n),o=t.getImmediate({optional:!0});if(o){const l=await o.getHeartbeatsHeader();l&&s.append("x-firebase-client",l)}const i={installation:{sdkVersion:tc,appId:e.appId}},a={method:"POST",headers:s,body:JSON.stringify(i)},c=await cc(()=>fetch(r,a));if(c.ok){const l=await c.json();return oc(l)}else throw await ic("Generate Auth Token",c)}function Yg(e,{fid:t}){return`${sc(e)}/${t}/authTokens:generate`}/**
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
 */async function Ls(e,t=!1){let n;const r=await ar(e.appConfig,o=>{if(!gc(o))throw yt.create("not-registered");const i=o.authToken;if(!t&&Qg(i))return o;if(i.requestStatus===1)return n=Xg(e,t),o;{if(!navigator.onLine)throw yt.create("app-offline");const a=tm(o);return n=Zg(e,a),a}});return n?await n:r.authToken}async function Xg(e,t){let n=await Qo(e.appConfig);for(;n.authToken.requestStatus===1;)await lc(100),n=await Qo(e.appConfig);const r=n.authToken;return r.requestStatus===0?Ls(e,t):r}function Qo(e){return ar(e,t=>{if(!gc(t))throw yt.create("not-registered");const n=t.authToken;return nm(n)?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t})}async function Zg(e,t){try{const n=await Gg(e,t),r=Object.assign(Object.assign({},t),{authToken:n});return await Wn(e.appConfig,r),n}catch(n){if(rc(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await hc(e.appConfig);else{const r=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await Wn(e.appConfig,r)}throw n}}function gc(e){return e!==void 0&&e.registrationStatus===2}function Qg(e){return e.requestStatus===2&&!em(e)}function em(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+Rg}function tm(e){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}function nm(e){return e.requestStatus===1&&e.requestTime+ec<Date.now()}/**
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
 */async function rm(e){const t=e,{installationEntry:n,registrationPromise:r}=await Bs(t);return r?r.catch(console.error):Ls(t).catch(console.error),n.fid}/**
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
 */async function sm(e,t=!1){const n=e;return await om(n),(await Ls(n,t)).token}async function om(e){const{registrationPromise:t}=await Bs(e);t&&await t}/**
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
 */const Kn="analytics",fm="firebase_id",dm="origin",hm=60*1e3,pm="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Fs="https://www.googletagmanager.com/gtag/js";/**
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
 */const be=new Va("@firebase/analytics");/**
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
 */function mm(e){if(!e.startsWith(Fs)){const t=Te.create("invalid-gtag-resource",{gtagURL:e});return be.warn(t.message),""}return e}function yc(e){return Promise.all(e.map(t=>t.catch(n=>n)))}function ym(e,t){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(e,t)),n}function bm(e,t){const n=ym("firebase-js-sdk-policy",{createScriptURL:mm}),r=document.createElement("script"),s=`${Fs}?l=${e}&id=${t}`;r.src=n?n==null?void 0:n.createScriptURL(s):s,r.async=!0,document.head.appendChild(r)}function _m(e){let t=[];return Array.isArray(window[e])?t=window[e]:window[e]=t,t}async function wm(e,t,n,r,s,o){const i=r[s];try{if(i)await t[i];else{const c=(await yc(n)).find(l=>l.measurementId===s);c&&await t[c.appId]}}catch(a){be.error(a)}e("config",s,o)}async function vm(e,t,n,r,s){try{let o=[];if(s&&s.send_to){let i=s.send_to;Array.isArray(i)||(i=[i]);const a=await yc(n);for(const c of i){const l=a.find(f=>f.measurementId===c),d=l&&t[l.appId];if(d)o.push(d);else{o=[];break}}}o.length===0&&(o=Object.values(t)),await Promise.all(o),e("event",r,s||{})}catch(o){be.error(o)}}function Em(e,t,n,r){async function s(o,...i){try{if(o==="event"){const[a,c]=i;await vm(e,t,n,a,c)}else if(o==="config"){const[a,c]=i;await wm(e,t,n,r,a,c)}else if(o==="consent"){const[a]=i;e("consent","update",a)}else if(o==="get"){const[a,c,l]=i;e("get",a,c,l)}else if(o==="set"){const[a]=i;e("set",a)}else e(o,...i)}catch(a){be.error(a)}}return s}function Im(e,t,n,r,s){let o=function(...i){window[r].push(arguments)};return window[s]&&typeof window[s]=="function"&&(o=window[s]),window[s]=Em(o,e,t,n),{gtagCore:o,wrappedGtag:window[s]}}function Tm(e){const t=window.document.getElementsByTagName("script");for(const n of Object.values(t))if(n.src&&n.src.includes(Fs)&&n.src.includes(e))return n;return null}/**
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
 */const Am=30,Cm=1e3;class Rm{constructor(t={},n=Cm){this.throttleMetadata=t,this.intervalMillis=n}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,n){this.throttleMetadata[t]=n}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}}const bc=new Rm;function Hm(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}async function Sm(e){var t;const{appId:n,apiKey:r}=e,s={method:"GET",headers:Hm(r)},o=pm.replace("{app-id}",n),i=await fetch(o,s);if(i.status!==200&&i.status!==304){let a="";try{const c=await i.json();!((t=c.error)===null||t===void 0)&&t.message&&(a=c.error.message)}catch{}throw Te.create("config-fetch-failed",{httpStatus:i.status,responseMessage:a})}return i.json()}async function xm(e,t=bc,n){const{appId:r,apiKey:s,measurementId:o}=e.options;if(!r)throw Te.create("no-app-id");if(!s){if(o)return{measurementId:o,appId:r};throw Te.create("no-api-key")}const i=t.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new $m;return setTimeout(async()=>{a.abort()},n!==void 0?n:hm),_c({appId:r,apiKey:s,measurementId:o},i,a,t)}async function _c(e,{throttleEndTimeMillis:t,backoffCount:n},r,s=bc){var o;const{appId:i,measurementId:a}=e;try{await Om(r,t)}catch(c){if(a)return be.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:i,measurementId:a};throw c}try{const c=await Sm(e);return s.deleteThrottleMetadata(i),c}catch(c){const l=c;if(!Pm(l)){if(s.deleteThrottleMetadata(i),a)return be.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:i,measurementId:a};throw c}const d=Number((o=l==null?void 0:l.customData)===null||o===void 0?void 0:o.httpStatus)===503?jo(n,s.intervalMillis,Am):jo(n,s.intervalMillis),f={throttleEndTimeMillis:Date.now()+d,backoffCount:n+1};return s.setThrottleMetadata(i,f),be.debug(`Calling attemptFetch again in ${d} millis`),_c(e,f,r,s)}}function Om(e,t){return new Promise((n,r)=>{const s=Math.max(t-Date.now(),0),o=setTimeout(n,s);e.addEventListener(()=>{clearTimeout(o),r(Te.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}function Pm(e){if(!(e instanceof wt)||!e.customData)return!1;const t=Number(e.customData.httpStatus);return t===429||t===500||t===503||t===504}class $m{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach(t=>t())}}async function Mm(e,t,n,r,s){if(s&&s.global){e("event",n,r);return}else{const o=await t,i=Object.assign(Object.assign({},r),{send_to:o});e("event",n,i)}}/**
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
 */async function km(){if(Ua())try{await Wa()}catch(e){return be.warn(Te.create("indexeddb-unavailable",{errorInfo:e==null?void 0:e.toString()}).message),!1}else return be.warn(Te.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function Dm(e,t,n,r,s,o,i){var a;const c=xm(e);c.then(y=>{n[y.measurementId]=y.appId,e.options.measurementId&&y.measurementId!==e.options.measurementId&&be.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${y.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(y=>be.error(y)),t.push(c);const l=km().then(y=>{if(y)return r.getId()}),[d,f]=await Promise.all([c,l]);Tm(o)||bm(o,d.measurementId),s("js",new Date);const p=(a=i==null?void 0:i.config)!==null&&a!==void 0?a:{};return p[dm]="firebase",p.update=!0,f!=null&&(p[fm]=f),s("config",d.measurementId,p),d.measurementId}/**
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
 */class Nm{constructor(t){this.app=t}_delete(){return delete Qt[this.app.options.appId],Promise.resolve()}}let Qt={},ei=[];const ti={};let xr="dataLayer",Bm="gtag",ni,wc,ri=!1;function Lm(){const e=[];if(Qh()&&e.push("This is a browser extension environment."),ep()||e.push("Cookies are not available."),e.length>0){const t=e.map((r,s)=>`(${s+1}) ${r}`).join(" "),n=Te.create("invalid-analytics-context",{errorInfo:t});be.warn(n.message)}}function Fm(e,t,n){Lm();const r=e.options.appId;if(!r)throw Te.create("no-app-id");if(!e.options.apiKey)if(e.options.measurementId)be.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Te.create("no-api-key");if(Qt[r]!=null)throw Te.create("already-exists",{id:r});if(!ri){_m(xr);const{wrappedGtag:o,gtagCore:i}=Im(Qt,ei,ti,xr,Bm);wc=o,ni=i,ri=!0}return Qt[r]=Dm(e,ei,ti,t,ni,xr,n),new Nm(e)}function jm(e=rg()){e=Ka(e);const t=or(e,Kn);return t.isInitialized()?t.getImmediate():Um(e)}function Um(e,t={}){const n=or(e,Kn);if(n.isInitialized()){const s=n.getImmediate();if(jn(t,n.getOptions()))return s;throw Te.create("already-initialized")}return n.initialize({options:t})}function Wm(e,t,n,r){e=Ka(e),Mm(wc,Qt[e.app.options.appId],t,n,r).catch(s=>be.error(s))}const si="@firebase/analytics",oi="0.10.0";function Km(){mt(new st(Kn,(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),s=t.getProvider("installations-internal").getImmediate();return Fm(r,s,n)},"PUBLIC")),mt(new st("analytics-internal",e,"PRIVATE")),et(si,oi),et(si,oi,"esm2017");function e(t){try{const n=t.getProvider(Kn).getImmediate();return{logEvent:(r,s,o)=>Wm(n,r,s,o)}}catch(n){throw Te.create("interop-component-reg-failed",{reason:n})}}}Km();const Vm={class:"container my-4"},qm={class:"text-center"},zm={class:"btn-group"},Jm=["onClick"],Gm=_t({__name:"app",setup(e){const n=Ja({apiKey:"AIzaSyCeIOuLIWPTdi6hr5XC1bk0RKbLtSVlJ9o",authDomain:"dad-problem.firebaseapp.com",projectId:"dad-problem",storageBucket:"dad-problem.appspot.com",messagingSenderId:"615926471970",appId:"1:615926471970:web:93876343f7a893c5fb997b",measurementId:"G-69RDZPP64C"});jm(n);const r=he("保安"),s={保安:Lo,問題セットB:Uh},o=he("");return o.value=Lo,Jt(r,async()=>{o.value="",await Yn(),o.value=s[r.value]}),(i,a)=>{const c=Ch,l=jh;return ce(),Xe("div",Vm,[ie(c,null,{default:bs(()=>[Cs("ごまの問題集")]),_:1}),X("div",qm,[X("div",zm,[(ce(),Xe(Ee,null,Ji(s,(d,f)=>X("button",{class:ln(["btn",K(r)===f?"btn-primary":"btn-outline-primary"]),onClick:p=>r.value=f.toString()},Be(f),11,Jm)),64))])]),K(o)?(ce(),Oe(l,{key:0,data:K(o)},null,8,["data"])):Cn("",!0)])}}});const Ym={__name:"nuxt-error-page",props:{error:Object},setup(e){const n=e.error;(n.stack||"").split(`
`).splice(1).map(f=>({text:f.replace("webpack:/","").replace(".vue",".js").trim(),internal:f.includes("node_modules")&&!f.includes(".cache")||f.includes("internal")||f.includes("new Promise")})).map(f=>`<span class="stack${f.internal?" internal":""}">${f.text}</span>`).join(`
`);const r=Number(n.statusCode||500),s=r===404,o=n.statusMessage??(s?"Page Not Found":"Internal Server Error"),i=n.message||n.toString(),a=void 0,d=s?so(()=>zr(()=>import("./error-404.2c7df569.js"),["./error-404.2c7df569.js","./_plugin-vue_export-helper.c27b6911.js","./error-404.7fc72018.css"],import.meta.url).then(f=>f.default||f)):so(()=>zr(()=>import("./error-500.dc0ee78c.js"),["./error-500.dc0ee78c.js","./_plugin-vue_export-helper.c27b6911.js","./error-500.c5df6088.css"],import.meta.url).then(f=>f.default||f));return(f,p)=>(ce(),Oe(K(d),kc(la({statusCode:K(r),statusMessage:K(o),description:K(i),stack:K(a)})),null,16))}},ii={__name:"nuxt-root",setup(e){const t=()=>null,n=de(),r=n.deferHydration(),s=!1;Xi(Da,lh()),n.hooks.callHookWith(a=>a.map(c=>c()),"vue:setup");const o=$s();Vi((a,c,l)=>{if(n.hooks.callHook("vue:error",a,c,l).catch(d=>console.error("[nuxt] Error in `vue:error` hook",d)),ph(a)&&(a.fatal||a.unhandled))return n.runWithContext(()=>dh(a)),!1});const{islandContext:i}=!1;return(a,c)=>(ce(),Oe(Pl,{onResolve:K(r)},{default:bs(()=>[K(o)?(ce(),Oe(K(Ym),{key:0,error:K(o)},null,8,["error"])):K(i)?(ce(),Oe(K(t),{key:1,context:K(i)},null,8,["context"])):K(s)?(ce(),Oe(Jl(K(s)),{key:2})):(ce(),Oe(K(Gm),{key:3}))]),_:1},8,["onResolve"]))}};globalThis.$fetch||(globalThis.$fetch=kf.create({baseURL:Nf()}));let ai;{let e;ai=async function(){var o,i;if(e)return e;const r=!!((o=window.__NUXT__)!=null&&o.serverRendered||((i=document.getElementById("__NUXT_DATA__"))==null?void 0:i.dataset.ssr)==="true")?Ju(ii):zu(ii),s=Xf({vueApp:r});try{await Qf(s,Ih)}catch(a){await s.callHook("app:error",a),s.payload.error=s.payload.error||a}try{await s.hooks.callHook("app:created",r),await s.hooks.callHook("app:beforeMount",r),r.mount("#"+Zd),await s.hooks.callHook("app:mounted",r),await Yn()}catch(a){await s.callHook("app:error",a),s.payload.error=s.payload.error||a}return r},e=ai().catch(t=>{console.error("Error while mounting app:",t)})}export{de as a,Wi as b,Tu as c,_t as d,Au as e,Qm as f,ga as g,nr as h,ya as i,Yd as j,ce as k,Xe as l,X as m,fh as n,Ul as o,un as p,ie as q,he as r,bs as s,Be as t,rr as u,Cs as v,Kr as w,Xm as x,Zm as y};
