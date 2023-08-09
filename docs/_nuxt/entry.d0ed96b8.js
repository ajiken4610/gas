function os(e,t){const n=Object.create(null),r=e.split(",");for(let s=0;s<r.length;s++)n[r[s]]=!0;return t?s=>!!n[s.toLowerCase()]:s=>!!n[s]}const se={},Tt=[],Pe=()=>{},Ic=()=>!1,Tc=/^on[^a-z]/,cn=e=>Tc.test(e),is=e=>e.startsWith("onUpdate:"),ue=Object.assign,as=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},Ac=Object.prototype.hasOwnProperty,V=(e,t)=>Ac.call(e,t),N=Array.isArray,At=e=>Vn(e)==="[object Map]",ii=e=>Vn(e)==="[object Set]",F=e=>typeof e=="function",oe=e=>typeof e=="string",cs=e=>typeof e=="symbol",ne=e=>e!==null&&typeof e=="object",ai=e=>ne(e)&&F(e.then)&&F(e.catch),ci=Object.prototype.toString,Vn=e=>ci.call(e),Cc=e=>Vn(e).slice(8,-1),li=e=>Vn(e)==="[object Object]",ls=e=>oe(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,zt=os(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),qn=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},Rc=/-(\w)/g,Le=qn(e=>e.replace(Rc,(t,n)=>n?n.toUpperCase():"")),Hc=/\B([A-Z])/g,Mt=qn(e=>e.replace(Hc,"-$1").toLowerCase()),zn=qn(e=>e.charAt(0).toUpperCase()+e.slice(1)),fr=qn(e=>e?`on${zn(e)}`:""),en=(e,t)=>!Object.is(e,t),ur=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},Rn=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},Sc=e=>{const t=parseFloat(e);return isNaN(t)?e:t},xc=e=>{const t=oe(e)?Number(e):NaN;return isNaN(t)?e:t};let Ks;const Or=()=>Ks||(Ks=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Jn(e){if(N(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],s=oe(r)?kc(r):Jn(r);if(s)for(const o in s)t[o]=s[o]}return t}else{if(oe(e))return e;if(ne(e))return e}}const Oc=/;(?![^(]*\))/g,Pc=/:([^]+)/,$c=/\/\*[^]*?\*\//g;function kc(e){const t={};return e.replace($c,"").split(Oc).forEach(n=>{if(n){const r=n.split(Pc);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function ln(e){let t="";if(oe(e))t=e;else if(N(e))for(let n=0;n<e.length;n++){const r=ln(e[n]);r&&(t+=r+" ")}else if(ne(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}function Mc(e){if(!e)return null;let{class:t,style:n}=e;return t&&!oe(t)&&(e.class=ln(t)),n&&(e.style=Jn(n)),e}const Dc="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Nc=os(Dc);function fi(e){return!!e||e===""}const Be=e=>oe(e)?e:e==null?"":N(e)||ne(e)&&(e.toString===ci||!F(e.toString))?JSON.stringify(e,ui,2):String(e),ui=(e,t)=>t&&t.__v_isRef?ui(e,t.value):At(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,s])=>(n[`${r} =>`]=s,n),{})}:ii(t)?{[`Set(${t.size})`]:[...t.values()]}:ne(t)&&!N(t)&&!li(t)?String(t):t;let Se;class Bc{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Se,!t&&Se&&(this.index=(Se.scopes||(Se.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const n=Se;try{return Se=this,t()}finally{Se=n}}}on(){Se=this}off(){Se=this.parent}stop(t){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function Lc(e,t=Se){t&&t.active&&t.effects.push(e)}function Fc(){return Se}const fs=e=>{const t=new Set(e);return t.w=0,t.n=0,t},di=e=>(e.w&nt)>0,hi=e=>(e.n&nt)>0,jc=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=nt},Uc=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const s=t[r];di(s)&&!hi(s)?s.delete(e):t[n++]=s,s.w&=~nt,s.n&=~nt}t.length=n}},Hn=new WeakMap;let Vt=0,nt=1;const Pr=30;let xe;const dt=Symbol(""),$r=Symbol("");class us{constructor(t,n=null,r){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Lc(this,r)}run(){if(!this.active)return this.fn();let t=xe,n=Ge;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=xe,xe=this,Ge=!0,nt=1<<++Vt,Vt<=Pr?jc(this):Vs(this),this.fn()}finally{Vt<=Pr&&Uc(this),nt=1<<--Vt,xe=this.parent,Ge=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){xe===this?this.deferStop=!0:this.active&&(Vs(this),this.onStop&&this.onStop(),this.active=!1)}}function Vs(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let Ge=!0;const pi=[];function Dt(){pi.push(Ge),Ge=!1}function Nt(){const e=pi.pop();Ge=e===void 0?!0:e}function _e(e,t,n){if(Ge&&xe){let r=Hn.get(e);r||Hn.set(e,r=new Map);let s=r.get(n);s||r.set(n,s=fs()),gi(s)}}function gi(e,t){let n=!1;Vt<=Pr?hi(e)||(e.n|=nt,n=!di(e)):n=!e.has(xe),n&&(e.add(xe),xe.deps.push(e))}function We(e,t,n,r,s,o){const i=Hn.get(e);if(!i)return;let a=[];if(t==="clear")a=[...i.values()];else if(n==="length"&&N(e)){const c=Number(r);i.forEach((l,d)=>{(d==="length"||d>=c)&&a.push(l)})}else switch(n!==void 0&&a.push(i.get(n)),t){case"add":N(e)?ls(n)&&a.push(i.get("length")):(a.push(i.get(dt)),At(e)&&a.push(i.get($r)));break;case"delete":N(e)||(a.push(i.get(dt)),At(e)&&a.push(i.get($r)));break;case"set":At(e)&&a.push(i.get(dt));break}if(a.length===1)a[0]&&kr(a[0]);else{const c=[];for(const l of a)l&&c.push(...l);kr(fs(c))}}function kr(e,t){const n=N(e)?e:[...e];for(const r of n)r.computed&&qs(r);for(const r of n)r.computed||qs(r)}function qs(e,t){(e!==xe||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}function Wc(e,t){var n;return(n=Hn.get(e))==null?void 0:n.get(t)}const Kc=os("__proto__,__v_isRef,__isVue"),mi=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(cs)),Vc=ds(),qc=ds(!1,!0),zc=ds(!0),zs=Jc();function Jc(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=q(this);for(let o=0,i=this.length;o<i;o++)_e(r,"get",o+"");const s=r[t](...n);return s===-1||s===!1?r[t](...n.map(q)):s}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){Dt();const r=q(this)[t].apply(this,n);return Nt(),r}}),e}function Gc(e){const t=q(this);return _e(t,"has",e),t.hasOwnProperty(e)}function ds(e=!1,t=!1){return function(r,s,o){if(s==="__v_isReactive")return!e;if(s==="__v_isReadonly")return e;if(s==="__v_isShallow")return t;if(s==="__v_raw"&&o===(e?t?ul:vi:t?wi:_i).get(r))return r;const i=N(r);if(!e){if(i&&V(zs,s))return Reflect.get(zs,s,o);if(s==="hasOwnProperty")return Gc}const a=Reflect.get(r,s,o);return(cs(s)?mi.has(s):Kc(s))||(e||_e(r,"get",s),t)?a:fe(a)?i&&ls(s)?a:a.value:ne(a)?e?Ii(a):rt(a):a}}const Yc=yi(),Xc=yi(!0);function yi(e=!1){return function(n,r,s,o){let i=n[r];if(pt(i)&&fe(i)&&!fe(s))return!1;if(!e&&(!Sn(s)&&!pt(s)&&(i=q(i),s=q(s)),!N(n)&&fe(i)&&!fe(s)))return i.value=s,!0;const a=N(n)&&ls(r)?Number(r)<n.length:V(n,r),c=Reflect.set(n,r,s,o);return n===q(o)&&(a?en(s,i)&&We(n,"set",r,s):We(n,"add",r,s)),c}}function Zc(e,t){const n=V(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&n&&We(e,"delete",t,void 0),r}function Qc(e,t){const n=Reflect.has(e,t);return(!cs(t)||!mi.has(t))&&_e(e,"has",t),n}function el(e){return _e(e,"iterate",N(e)?"length":dt),Reflect.ownKeys(e)}const bi={get:Vc,set:Yc,deleteProperty:Zc,has:Qc,ownKeys:el},tl={get:zc,set(e,t){return!0},deleteProperty(e,t){return!0}},nl=ue({},bi,{get:qc,set:Xc}),hs=e=>e,Gn=e=>Reflect.getPrototypeOf(e);function hn(e,t,n=!1,r=!1){e=e.__v_raw;const s=q(e),o=q(t);n||(t!==o&&_e(s,"get",t),_e(s,"get",o));const{has:i}=Gn(s),a=r?hs:n?ms:tn;if(i.call(s,t))return a(e.get(t));if(i.call(s,o))return a(e.get(o));e!==s&&e.get(t)}function pn(e,t=!1){const n=this.__v_raw,r=q(n),s=q(e);return t||(e!==s&&_e(r,"has",e),_e(r,"has",s)),e===s?n.has(e):n.has(e)||n.has(s)}function gn(e,t=!1){return e=e.__v_raw,!t&&_e(q(e),"iterate",dt),Reflect.get(e,"size",e)}function Js(e){e=q(e);const t=q(this);return Gn(t).has.call(t,e)||(t.add(e),We(t,"add",e,e)),this}function Gs(e,t){t=q(t);const n=q(this),{has:r,get:s}=Gn(n);let o=r.call(n,e);o||(e=q(e),o=r.call(n,e));const i=s.call(n,e);return n.set(e,t),o?en(t,i)&&We(n,"set",e,t):We(n,"add",e,t),this}function Ys(e){const t=q(this),{has:n,get:r}=Gn(t);let s=n.call(t,e);s||(e=q(e),s=n.call(t,e)),r&&r.call(t,e);const o=t.delete(e);return s&&We(t,"delete",e,void 0),o}function Xs(){const e=q(this),t=e.size!==0,n=e.clear();return t&&We(e,"clear",void 0,void 0),n}function mn(e,t){return function(r,s){const o=this,i=o.__v_raw,a=q(i),c=t?hs:e?ms:tn;return!e&&_e(a,"iterate",dt),i.forEach((l,d)=>r.call(s,c(l),c(d),o))}}function yn(e,t,n){return function(...r){const s=this.__v_raw,o=q(s),i=At(o),a=e==="entries"||e===Symbol.iterator&&i,c=e==="keys"&&i,l=s[e](...r),d=n?hs:t?ms:tn;return!t&&_e(o,"iterate",c?$r:dt),{next(){const{value:u,done:p}=l.next();return p?{value:u,done:p}:{value:a?[d(u[0]),d(u[1])]:d(u),done:p}},[Symbol.iterator](){return this}}}}function Ve(e){return function(...t){return e==="delete"?!1:this}}function rl(){const e={get(o){return hn(this,o)},get size(){return gn(this)},has:pn,add:Js,set:Gs,delete:Ys,clear:Xs,forEach:mn(!1,!1)},t={get(o){return hn(this,o,!1,!0)},get size(){return gn(this)},has:pn,add:Js,set:Gs,delete:Ys,clear:Xs,forEach:mn(!1,!0)},n={get(o){return hn(this,o,!0)},get size(){return gn(this,!0)},has(o){return pn.call(this,o,!0)},add:Ve("add"),set:Ve("set"),delete:Ve("delete"),clear:Ve("clear"),forEach:mn(!0,!1)},r={get(o){return hn(this,o,!0,!0)},get size(){return gn(this,!0)},has(o){return pn.call(this,o,!0)},add:Ve("add"),set:Ve("set"),delete:Ve("delete"),clear:Ve("clear"),forEach:mn(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(o=>{e[o]=yn(o,!1,!1),n[o]=yn(o,!0,!1),t[o]=yn(o,!1,!0),r[o]=yn(o,!0,!0)}),[e,n,t,r]}const[sl,ol,il,al]=rl();function ps(e,t){const n=t?e?al:il:e?ol:sl;return(r,s,o)=>s==="__v_isReactive"?!e:s==="__v_isReadonly"?e:s==="__v_raw"?r:Reflect.get(V(n,s)&&s in r?n:r,s,o)}const cl={get:ps(!1,!1)},ll={get:ps(!1,!0)},fl={get:ps(!0,!1)},_i=new WeakMap,wi=new WeakMap,vi=new WeakMap,ul=new WeakMap;function dl(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function hl(e){return e.__v_skip||!Object.isExtensible(e)?0:dl(Cc(e))}function rt(e){return pt(e)?e:gs(e,!1,bi,cl,_i)}function Ei(e){return gs(e,!1,nl,ll,wi)}function Ii(e){return gs(e,!0,tl,fl,vi)}function gs(e,t,n,r,s){if(!ne(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const o=s.get(e);if(o)return o;const i=hl(e);if(i===0)return e;const a=new Proxy(e,i===2?r:n);return s.set(e,a),a}function Ct(e){return pt(e)?Ct(e.__v_raw):!!(e&&e.__v_isReactive)}function pt(e){return!!(e&&e.__v_isReadonly)}function Sn(e){return!!(e&&e.__v_isShallow)}function Ti(e){return Ct(e)||pt(e)}function q(e){const t=e&&e.__v_raw;return t?q(t):e}function Ai(e){return Rn(e,"__v_skip",!0),e}const tn=e=>ne(e)?rt(e):e,ms=e=>ne(e)?Ii(e):e;function Ci(e){Ge&&xe&&(e=q(e),gi(e.dep||(e.dep=fs())))}function Ri(e,t){e=q(e);const n=e.dep;n&&kr(n)}function fe(e){return!!(e&&e.__v_isRef===!0)}function he(e){return Hi(e,!1)}function Zs(e){return Hi(e,!0)}function Hi(e,t){return fe(e)?e:new pl(e,t)}class pl{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:q(t),this._value=n?t:tn(t)}get value(){return Ci(this),this._value}set value(t){const n=this.__v_isShallow||Sn(t)||pt(t);t=n?t:q(t),en(t,this._rawValue)&&(this._rawValue=t,this._value=n?t:tn(t),Ri(this))}}function K(e){return fe(e)?e.value:e}const gl={get:(e,t,n)=>K(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const s=e[t];return fe(s)&&!fe(n)?(s.value=n,!0):Reflect.set(e,t,n,r)}};function Si(e){return Ct(e)?e:new Proxy(e,gl)}class ml{constructor(t,n,r){this._object=t,this._key=n,this._defaultValue=r,this.__v_isRef=!0}get value(){const t=this._object[this._key];return t===void 0?this._defaultValue:t}set value(t){this._object[this._key]=t}get dep(){return Wc(q(this._object),this._key)}}class yl{constructor(t){this._getter=t,this.__v_isRef=!0,this.__v_isReadonly=!0}get value(){return this._getter()}}function xi(e,t,n){return fe(e)?e:F(e)?new yl(e):ne(e)&&arguments.length>1?bl(e,t,n):he(e)}function bl(e,t,n){const r=e[t];return fe(r)?r:new ml(e,t,n)}class _l{constructor(t,n,r,s){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new us(t,()=>{this._dirty||(this._dirty=!0,Ri(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const t=q(this);return Ci(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function wl(e,t,n=!1){let r,s;const o=F(e);return o?(r=e,s=Pe):(r=e.get,s=e.set),new _l(r,s,o||!s,n)}function Ye(e,t,n,r){let s;try{s=r?e(...r):e()}catch(o){Bt(o,t,n)}return s}function $e(e,t,n,r){if(F(e)){const o=Ye(e,t,n,r);return o&&ai(o)&&o.catch(i=>{Bt(i,t,n)}),o}const s=[];for(let o=0;o<e.length;o++)s.push($e(e[o],t,n,r));return s}function Bt(e,t,n,r=!0){const s=t?t.vnode:null;if(t){let o=t.parent;const i=t.proxy,a=n;for(;o;){const l=o.ec;if(l){for(let d=0;d<l.length;d++)if(l[d](e,i,a)===!1)return}o=o.parent}const c=t.appContext.config.errorHandler;if(c){Ye(c,null,10,[e,i,a]);return}}vl(e,n,s,r)}function vl(e,t,n,r=!0){console.error(e)}let nn=!1,Mr=!1;const pe=[];let Ne=0;const Rt=[];let Ue=null,lt=0;const Oi=Promise.resolve();let ys=null;function Yn(e){const t=ys||Oi;return e?t.then(this?e.bind(this):e):t}function El(e){let t=Ne+1,n=pe.length;for(;t<n;){const r=t+n>>>1;rn(pe[r])<e?t=r+1:n=r}return t}function Xn(e){(!pe.length||!pe.includes(e,nn&&e.allowRecurse?Ne+1:Ne))&&(e.id==null?pe.push(e):pe.splice(El(e.id),0,e),Pi())}function Pi(){!nn&&!Mr&&(Mr=!0,ys=Oi.then(ki))}function Il(e){const t=pe.indexOf(e);t>Ne&&pe.splice(t,1)}function $i(e){N(e)?Rt.push(...e):(!Ue||!Ue.includes(e,e.allowRecurse?lt+1:lt))&&Rt.push(e),Pi()}function Qs(e,t=nn?Ne+1:0){for(;t<pe.length;t++){const n=pe[t];n&&n.pre&&(pe.splice(t,1),t--,n())}}function xn(e){if(Rt.length){const t=[...new Set(Rt)];if(Rt.length=0,Ue){Ue.push(...t);return}for(Ue=t,Ue.sort((n,r)=>rn(n)-rn(r)),lt=0;lt<Ue.length;lt++)Ue[lt]();Ue=null,lt=0}}const rn=e=>e.id==null?1/0:e.id,Tl=(e,t)=>{const n=rn(e)-rn(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function ki(e){Mr=!1,nn=!0,pe.sort(Tl);const t=Pe;try{for(Ne=0;Ne<pe.length;Ne++){const n=pe[Ne];n&&n.active!==!1&&Ye(n,null,14)}}finally{Ne=0,pe.length=0,xn(),nn=!1,ys=null,(pe.length||Rt.length)&&ki()}}function Al(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||se;let s=n;const o=t.startsWith("update:"),i=o&&t.slice(7);if(i&&i in r){const d=`${i==="modelValue"?"model":i}Modifiers`,{number:u,trim:p}=r[d]||se;p&&(s=n.map(y=>oe(y)?y.trim():y)),u&&(s=n.map(Sc))}let a,c=r[a=fr(t)]||r[a=fr(Le(t))];!c&&o&&(c=r[a=fr(Mt(t))]),c&&$e(c,e,6,s);const l=r[a+"Once"];if(l){if(!e.emitted)e.emitted={};else if(e.emitted[a])return;e.emitted[a]=!0,$e(l,e,6,s)}}function Mi(e,t,n=!1){const r=t.emitsCache,s=r.get(e);if(s!==void 0)return s;const o=e.emits;let i={},a=!1;if(!F(e)){const c=l=>{const d=Mi(l,t,!0);d&&(a=!0,ue(i,d))};!n&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}return!o&&!a?(ne(e)&&r.set(e,null),null):(N(o)?o.forEach(c=>i[c]=null):ue(i,o),ne(e)&&r.set(e,i),i)}function Zn(e,t){return!e||!cn(t)?!1:(t=t.slice(2).replace(/Once$/,""),V(e,t[0].toLowerCase()+t.slice(1))||V(e,Mt(t))||V(e,t))}let Ie=null,Qn=null;function On(e){const t=Ie;return Ie=e,Qn=e&&e.type.__scopeId||null,t}function zm(e){Qn=e}function Jm(){Qn=null}function Di(e,t=Ie,n){if(!t||e._n)return e;const r=(...s)=>{r._d&&ho(-1);const o=On(t);let i;try{i=e(...s)}finally{On(o),r._d&&ho(1)}return i};return r._n=!0,r._c=!0,r._d=!0,r}function dr(e){const{type:t,vnode:n,proxy:r,withProxy:s,props:o,propsOptions:[i],slots:a,attrs:c,emit:l,render:d,renderCache:u,data:p,setupState:y,ctx:g,inheritAttrs:T}=e;let D,_;const b=On(e);try{if(n.shapeFlag&4){const I=s||r;D=Ce(d.call(I,I,u,o,y,p,g)),_=c}else{const I=t;D=Ce(I.length>1?I(o,{attrs:c,slots:a,emit:l}):I(o,null)),_=t.props?c:Rl(c)}}catch(I){Xt.length=0,Bt(I,e,1),D=le(Fe)}let k=D;if(_&&T!==!1){const I=Object.keys(_),{shapeFlag:O}=k;I.length&&O&7&&(i&&I.some(is)&&(_=Hl(_,i)),k=Pt(k,_))}return n.dirs&&(k=Pt(k),k.dirs=k.dirs?k.dirs.concat(n.dirs):n.dirs),n.transition&&(k.transition=n.transition),D=k,On(b),D}function Cl(e){let t;for(let n=0;n<e.length;n++){const r=e[n];if(kn(r)){if(r.type!==Fe||r.children==="v-if"){if(t)return;t=r}}else return}return t}const Rl=e=>{let t;for(const n in e)(n==="class"||n==="style"||cn(n))&&((t||(t={}))[n]=e[n]);return t},Hl=(e,t)=>{const n={};for(const r in e)(!is(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function Sl(e,t,n){const{props:r,children:s,component:o}=e,{props:i,children:a,patchFlag:c}=t,l=o.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?eo(r,i,l):!!i;if(c&8){const d=t.dynamicProps;for(let u=0;u<d.length;u++){const p=d[u];if(i[p]!==r[p]&&!Zn(l,p))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===i?!1:r?i?eo(r,i,l):!0:!!i;return!1}function eo(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let s=0;s<r.length;s++){const o=r[s];if(t[o]!==e[o]&&!Zn(n,o))return!0}return!1}function bs({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const xl=e=>e.__isSuspense,Ol={name:"Suspense",__isSuspense:!0,process(e,t,n,r,s,o,i,a,c,l){e==null?$l(t,n,r,s,o,i,a,c,l):kl(e,t,n,r,s,i,a,c,l)},hydrate:Ml,create:_s,normalize:Dl},Pl=Ol;function sn(e,t){const n=e.props&&e.props[t];F(n)&&n()}function $l(e,t,n,r,s,o,i,a,c){const{p:l,o:{createElement:d}}=c,u=d("div"),p=e.suspense=_s(e,s,r,t,u,n,o,i,a,c);l(null,p.pendingBranch=e.ssContent,u,null,r,p,o,i),p.deps>0?(sn(e,"onPending"),sn(e,"onFallback"),l(null,e.ssFallback,t,n,r,null,o,i),Ht(p,e.ssFallback)):p.resolve(!1,!0)}function kl(e,t,n,r,s,o,i,a,{p:c,um:l,o:{createElement:d}}){const u=t.suspense=e.suspense;u.vnode=t,t.el=e.el;const p=t.ssContent,y=t.ssFallback,{activeBranch:g,pendingBranch:T,isInFallback:D,isHydrating:_}=u;if(T)u.pendingBranch=p,Je(p,T)?(c(T,p,u.hiddenContainer,null,s,u,o,i,a),u.deps<=0?u.resolve():D&&(c(g,y,n,r,s,null,o,i,a),Ht(u,y))):(u.pendingId++,_?(u.isHydrating=!1,u.activeBranch=T):l(T,s,u),u.deps=0,u.effects.length=0,u.hiddenContainer=d("div"),D?(c(null,p,u.hiddenContainer,null,s,u,o,i,a),u.deps<=0?u.resolve():(c(g,y,n,r,s,null,o,i,a),Ht(u,y))):g&&Je(p,g)?(c(g,p,n,r,s,u,o,i,a),u.resolve(!0)):(c(null,p,u.hiddenContainer,null,s,u,o,i,a),u.deps<=0&&u.resolve()));else if(g&&Je(p,g))c(g,p,n,r,s,u,o,i,a),Ht(u,p);else if(sn(t,"onPending"),u.pendingBranch=p,u.pendingId++,c(null,p,u.hiddenContainer,null,s,u,o,i,a),u.deps<=0)u.resolve();else{const{timeout:b,pendingId:k}=u;b>0?setTimeout(()=>{u.pendingId===k&&u.fallback(y)},b):b===0&&u.fallback(y)}}function _s(e,t,n,r,s,o,i,a,c,l,d=!1){const{p:u,m:p,um:y,n:g,o:{parentNode:T,remove:D}}=l;let _;const b=Nl(e);b&&t!=null&&t.pendingBranch&&(_=t.pendingId,t.deps++);const k=e.props?xc(e.props.timeout):void 0,I={vnode:e,parent:t,parentComponent:n,isSVG:i,container:r,hiddenContainer:s,anchor:o,deps:0,pendingId:0,timeout:typeof k=="number"?k:-1,activeBranch:null,pendingBranch:null,isInFallback:!0,isHydrating:d,isUnmounted:!1,effects:[],resolve(O=!1,U=!1){const{vnode:B,activeBranch:S,pendingBranch:j,pendingId:z,effects:J,parentComponent:ge,container:re}=I;if(I.isHydrating)I.isHydrating=!1;else if(!O){const G=S&&j.transition&&j.transition.mode==="out-in";G&&(S.transition.afterLeave=()=>{z===I.pendingId&&p(j,re,Z,0)});let{anchor:Z}=I;S&&(Z=g(S),y(S,ge,I,!0)),G||p(j,re,Z,0)}Ht(I,j),I.pendingBranch=null,I.isInFallback=!1;let M=I.parent,we=!1;for(;M;){if(M.pendingBranch){M.effects.push(...J),we=!0;break}M=M.parent}we||$i(J),I.effects=[],b&&t&&t.pendingBranch&&_===t.pendingId&&(t.deps--,t.deps===0&&!U&&t.resolve()),sn(B,"onResolve")},fallback(O){if(!I.pendingBranch)return;const{vnode:U,activeBranch:B,parentComponent:S,container:j,isSVG:z}=I;sn(U,"onFallback");const J=g(B),ge=()=>{I.isInFallback&&(u(null,O,j,J,S,null,z,a,c),Ht(I,O))},re=O.transition&&O.transition.mode==="out-in";re&&(B.transition.afterLeave=ge),I.isInFallback=!0,y(B,S,null,!0),re||ge()},move(O,U,B){I.activeBranch&&p(I.activeBranch,O,U,B),I.container=O},next(){return I.activeBranch&&g(I.activeBranch)},registerDep(O,U){const B=!!I.pendingBranch;B&&I.deps++;const S=O.vnode.el;O.asyncDep.catch(j=>{Bt(j,O,0)}).then(j=>{if(O.isUnmounted||I.isUnmounted||I.pendingId!==O.suspenseId)return;O.asyncResolved=!0;const{vnode:z}=O;Fr(O,j,!1),S&&(z.el=S);const J=!S&&O.subTree.el;U(O,z,T(S||O.subTree.el),S?null:g(O.subTree),I,i,c),J&&D(J),bs(O,z.el),B&&--I.deps===0&&I.resolve()})},unmount(O,U){I.isUnmounted=!0,I.activeBranch&&y(I.activeBranch,n,O,U),I.pendingBranch&&y(I.pendingBranch,n,O,U)}};return I}function Ml(e,t,n,r,s,o,i,a,c){const l=t.suspense=_s(t,r,n,e.parentNode,document.createElement("div"),null,s,o,i,a,!0),d=c(e,l.pendingBranch=t.ssContent,n,l,o,i);return l.deps===0&&l.resolve(!1,!0),d}function Dl(e){const{shapeFlag:t,children:n}=e,r=t&32;e.ssContent=to(r?n.default:n),e.ssFallback=r?to(n.fallback):le(Fe)}function to(e){let t;if(F(e)){const n=Ot&&e._c;n&&(e._d=!1,ae()),e=e(),n&&(e._d=!0,t=Re,oa())}return N(e)&&(e=Cl(e)),e=Ce(e),t&&!e.dynamicChildren&&(e.dynamicChildren=t.filter(n=>n!==e)),e}function Ni(e,t){t&&t.pendingBranch?N(e)?t.effects.push(...e):t.effects.push(e):$i(e)}function Ht(e,t){e.activeBranch=t;const{vnode:n,parentComponent:r}=e,s=n.el=t.el;r&&r.subTree===n&&(r.vnode.el=s,bs(r,s))}function Nl(e){var t;return((t=e.props)==null?void 0:t.suspensible)!=null&&e.props.suspensible!==!1}function Bl(e,t){return ws(e,null,t)}const bn={};function Jt(e,t,n){return ws(e,t,n)}function ws(e,t,{immediate:n,deep:r,flush:s,onTrack:o,onTrigger:i}=se){var a;const c=Fc()===((a=ce)==null?void 0:a.scope)?ce:null;let l,d=!1,u=!1;if(fe(e)?(l=()=>e.value,d=Sn(e)):Ct(e)?(l=()=>e,r=!0):N(e)?(u=!0,d=e.some(I=>Ct(I)||Sn(I)),l=()=>e.map(I=>{if(fe(I))return I.value;if(Ct(I))return It(I);if(F(I))return Ye(I,c,2)})):F(e)?t?l=()=>Ye(e,c,2):l=()=>{if(!(c&&c.isUnmounted))return p&&p(),$e(e,c,3,[y])}:l=Pe,t&&r){const I=l;l=()=>It(I())}let p,y=I=>{p=b.onStop=()=>{Ye(I,c,4)}},g;if(kt)if(y=Pe,t?n&&$e(t,c,3,[l(),u?[]:void 0,y]):l(),s==="sync"){const I=Hf();g=I.__watcherHandles||(I.__watcherHandles=[])}else return Pe;let T=u?new Array(e.length).fill(bn):bn;const D=()=>{if(b.active)if(t){const I=b.run();(r||d||(u?I.some((O,U)=>en(O,T[U])):en(I,T)))&&(p&&p(),$e(t,c,3,[I,T===bn?void 0:u&&T[0]===bn?[]:T,y]),T=I)}else b.run()};D.allowRecurse=!!t;let _;s==="sync"?_=D:s==="post"?_=()=>ye(D,c&&c.suspense):(D.pre=!0,c&&(D.id=c.uid),_=()=>Xn(D));const b=new us(l,_);t?n?D():T=b.run():s==="post"?ye(b.run.bind(b),c&&c.suspense):b.run();const k=()=>{b.stop(),c&&c.scope&&as(c.scope.effects,b)};return g&&g.push(k),k}function Ll(e,t,n){const r=this.proxy,s=oe(e)?e.includes(".")?Bi(r,e):()=>r[e]:e.bind(r,r);let o;F(t)?o=t:(o=t.handler,n=t);const i=ce;$t(this);const a=ws(s,o.bind(r),n);return i?$t(i):ht(),a}function Bi(e,t){const n=t.split(".");return()=>{let r=e;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function It(e,t){if(!ne(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),fe(e))It(e.value,t);else if(N(e))for(let n=0;n<e.length;n++)It(e[n],t);else if(ii(e)||At(e))e.forEach(n=>{It(n,t)});else if(li(e))for(const n in e)It(e[n],t);return e}function De(e,t,n,r){const s=e.dirs,o=t&&t.dirs;for(let i=0;i<s.length;i++){const a=s[i];o&&(a.oldValue=o[i].value);let c=a.dir[r];c&&(Dt(),$e(c,n,8,[e.el,a,e,t]),Nt())}}function Lt(e,t){return F(e)?(()=>ue({name:e.name},t,{setup:e}))():e}const Gt=e=>!!e.type.__asyncLoader;function no(e){F(e)&&(e={loader:e});const{loader:t,loadingComponent:n,errorComponent:r,delay:s=200,timeout:o,suspensible:i=!0,onError:a}=e;let c=null,l,d=0;const u=()=>(d++,c=null,p()),p=()=>{let y;return c||(y=c=t().catch(g=>{if(g=g instanceof Error?g:new Error(String(g)),a)return new Promise((T,D)=>{a(g,()=>T(u()),()=>D(g),d+1)});throw g}).then(g=>y!==c&&c?c:(g&&(g.__esModule||g[Symbol.toStringTag]==="Module")&&(g=g.default),l=g,g)))};return Lt({name:"AsyncComponentWrapper",__asyncLoader:p,get __asyncResolved(){return l},setup(){const y=ce;if(l)return()=>hr(l,y);const g=b=>{c=null,Bt(b,y,13,!r)};if(i&&y.suspense||kt)return p().then(b=>()=>hr(b,y)).catch(b=>(g(b),()=>r?le(r,{error:b}):null));const T=he(!1),D=he(),_=he(!!s);return s&&setTimeout(()=>{_.value=!1},s),o!=null&&setTimeout(()=>{if(!T.value&&!D.value){const b=new Error(`Async component timed out after ${o}ms.`);g(b),D.value=b}},o),p().then(()=>{T.value=!0,y.parent&&vs(y.parent.vnode)&&Xn(y.parent.update)}).catch(b=>{g(b),D.value=b}),()=>{if(T.value&&l)return hr(l,y);if(D.value&&r)return le(r,{error:D.value});if(n&&!_.value)return le(n)}}})}function hr(e,t){const{ref:n,props:r,children:s,ce:o}=t.vnode,i=le(e,r,s);return i.ref=n,i.ce=o,delete t.vnode.ce,i}const vs=e=>e.type.__isKeepAlive;function Li(e,t){ji(e,"a",t)}function Fi(e,t){ji(e,"da",t)}function ji(e,t,n=ce){const r=e.__wdc||(e.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return e()});if(er(t,r,n),n){let s=n.parent;for(;s&&s.parent;)vs(s.parent.vnode)&&Fl(r,t,n,s),s=s.parent}}function Fl(e,t,n,r){const s=er(t,e,r,!0);Wi(()=>{as(r[t],s)},n)}function er(e,t,n=ce,r=!1){if(n){const s=n[e]||(n[e]=[]),o=t.__weh||(t.__weh=(...i)=>{if(n.isUnmounted)return;Dt(),$t(n);const a=$e(t,n,e,i);return ht(),Nt(),a});return r?s.unshift(o):s.push(o),o}}const Ke=e=>(t,n=ce)=>(!kt||e==="sp")&&er(e,(...r)=>t(...r),n),jl=Ke("bm"),Ul=Ke("m"),Wl=Ke("bu"),Kl=Ke("u"),Ui=Ke("bum"),Wi=Ke("um"),Vl=Ke("sp"),ql=Ke("rtg"),zl=Ke("rtc");function Ki(e,t=ce){er("ec",e,t)}const Es="components";function Gm(e,t){return qi(Es,e,!0,t)||e}const Vi=Symbol.for("v-ndc");function Jl(e){return oe(e)?qi(Es,e,!1)||e:e||Vi}function qi(e,t,n=!0,r=!1){const s=Ie||ce;if(s){const o=s.type;if(e===Es){const a=If(o,!1);if(a&&(a===t||a===Le(t)||a===zn(Le(t))))return o}const i=ro(s[e]||o[e],t)||ro(s.appContext[e],t);return!i&&r?o:i}}function ro(e,t){return e&&(e[t]||e[Le(t)]||e[zn(Le(t))])}function zi(e,t,n,r){let s;const o=n&&n[r];if(N(e)||oe(e)){s=new Array(e.length);for(let i=0,a=e.length;i<a;i++)s[i]=t(e[i],i,void 0,o&&o[i])}else if(typeof e=="number"){s=new Array(e);for(let i=0;i<e;i++)s[i]=t(i+1,i,void 0,o&&o[i])}else if(ne(e))if(e[Symbol.iterator])s=Array.from(e,(i,a)=>t(i,a,void 0,o&&o[a]));else{const i=Object.keys(e);s=new Array(i.length);for(let a=0,c=i.length;a<c;a++){const l=i[a];s[a]=t(e[l],l,a,o&&o[a])}}else s=[];return n&&(n[r]=s),s}const Dr=e=>e?fa(e)?Hs(e)||e.proxy:Dr(e.parent):null,Yt=ue(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Dr(e.parent),$root:e=>Dr(e.root),$emit:e=>e.emit,$options:e=>Is(e),$forceUpdate:e=>e.f||(e.f=()=>Xn(e.update)),$nextTick:e=>e.n||(e.n=Yn.bind(e.proxy)),$watch:e=>Ll.bind(e)}),pr=(e,t)=>e!==se&&!e.__isScriptSetup&&V(e,t),Gl={get({_:e},t){const{ctx:n,setupState:r,data:s,props:o,accessCache:i,type:a,appContext:c}=e;let l;if(t[0]!=="$"){const y=i[t];if(y!==void 0)switch(y){case 1:return r[t];case 2:return s[t];case 4:return n[t];case 3:return o[t]}else{if(pr(r,t))return i[t]=1,r[t];if(s!==se&&V(s,t))return i[t]=2,s[t];if((l=e.propsOptions[0])&&V(l,t))return i[t]=3,o[t];if(n!==se&&V(n,t))return i[t]=4,n[t];Nr&&(i[t]=0)}}const d=Yt[t];let u,p;if(d)return t==="$attrs"&&_e(e,"get",t),d(e);if((u=a.__cssModules)&&(u=u[t]))return u;if(n!==se&&V(n,t))return i[t]=4,n[t];if(p=c.config.globalProperties,V(p,t))return p[t]},set({_:e},t,n){const{data:r,setupState:s,ctx:o}=e;return pr(s,t)?(s[t]=n,!0):r!==se&&V(r,t)?(r[t]=n,!0):V(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(o[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:s,propsOptions:o}},i){let a;return!!n[i]||e!==se&&V(e,i)||pr(t,i)||(a=o[0])&&V(a,i)||V(r,i)||V(Yt,i)||V(s.config.globalProperties,i)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:V(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function so(e){return N(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let Nr=!0;function Yl(e){const t=Is(e),n=e.proxy,r=e.ctx;Nr=!1,t.beforeCreate&&oo(t.beforeCreate,e,"bc");const{data:s,computed:o,methods:i,watch:a,provide:c,inject:l,created:d,beforeMount:u,mounted:p,beforeUpdate:y,updated:g,activated:T,deactivated:D,beforeDestroy:_,beforeUnmount:b,destroyed:k,unmounted:I,render:O,renderTracked:U,renderTriggered:B,errorCaptured:S,serverPrefetch:j,expose:z,inheritAttrs:J,components:ge,directives:re,filters:M}=t;if(l&&Xl(l,r,null),i)for(const Z in i){const Q=i[Z];F(Q)&&(r[Z]=Q.bind(n))}if(s){const Z=s.call(n,n);ne(Z)&&(e.data=rt(Z))}if(Nr=!0,o)for(const Z in o){const Q=o[Z],ot=F(Q)?Q.bind(n,n):F(Q.get)?Q.get.bind(n,n):Pe,un=!F(Q)&&F(Q.set)?Q.set.bind(n):Pe,it=Af({get:ot,set:un});Object.defineProperty(r,Z,{enumerable:!0,configurable:!0,get:()=>it.value,set:ke=>it.value=ke})}if(a)for(const Z in a)Ji(a[Z],r,n,Z);if(c){const Z=F(c)?c.call(n):c;Reflect.ownKeys(Z).forEach(Q=>{Yi(Q,Z[Q])})}d&&oo(d,e,"c");function G(Z,Q){N(Q)?Q.forEach(ot=>Z(ot.bind(n))):Q&&Z(Q.bind(n))}if(G(jl,u),G(Ul,p),G(Wl,y),G(Kl,g),G(Li,T),G(Fi,D),G(Ki,S),G(zl,U),G(ql,B),G(Ui,b),G(Wi,I),G(Vl,j),N(z))if(z.length){const Z=e.exposed||(e.exposed={});z.forEach(Q=>{Object.defineProperty(Z,Q,{get:()=>n[Q],set:ot=>n[Q]=ot})})}else e.exposed||(e.exposed={});O&&e.render===Pe&&(e.render=O),J!=null&&(e.inheritAttrs=J),ge&&(e.components=ge),re&&(e.directives=re)}function Xl(e,t,n=Pe){N(e)&&(e=Br(e));for(const r in e){const s=e[r];let o;ne(s)?"default"in s?o=St(s.from||r,s.default,!0):o=St(s.from||r):o=St(s),fe(o)?Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>o.value,set:i=>o.value=i}):t[r]=o}}function oo(e,t,n){$e(N(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function Ji(e,t,n,r){const s=r.includes(".")?Bi(n,r):()=>n[r];if(oe(e)){const o=t[e];F(o)&&Jt(s,o)}else if(F(e))Jt(s,e.bind(n));else if(ne(e))if(N(e))e.forEach(o=>Ji(o,t,n,r));else{const o=F(e.handler)?e.handler.bind(n):t[e.handler];F(o)&&Jt(s,o,e)}}function Is(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:s,optionsCache:o,config:{optionMergeStrategies:i}}=e.appContext,a=o.get(t);let c;return a?c=a:!s.length&&!n&&!r?c=t:(c={},s.length&&s.forEach(l=>Pn(c,l,i,!0)),Pn(c,t,i)),ne(t)&&o.set(t,c),c}function Pn(e,t,n,r=!1){const{mixins:s,extends:o}=t;o&&Pn(e,o,n,!0),s&&s.forEach(i=>Pn(e,i,n,!0));for(const i in t)if(!(r&&i==="expose")){const a=Zl[i]||n&&n[i];e[i]=a?a(e[i],t[i]):t[i]}return e}const Zl={data:io,props:ao,emits:ao,methods:qt,computed:qt,beforeCreate:me,created:me,beforeMount:me,mounted:me,beforeUpdate:me,updated:me,beforeDestroy:me,beforeUnmount:me,destroyed:me,unmounted:me,activated:me,deactivated:me,errorCaptured:me,serverPrefetch:me,components:qt,directives:qt,watch:ef,provide:io,inject:Ql};function io(e,t){return t?e?function(){return ue(F(e)?e.call(this,this):e,F(t)?t.call(this,this):t)}:t:e}function Ql(e,t){return qt(Br(e),Br(t))}function Br(e){if(N(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function me(e,t){return e?[...new Set([].concat(e,t))]:t}function qt(e,t){return e?ue(Object.create(null),e,t):t}function ao(e,t){return e?N(e)&&N(t)?[...new Set([...e,...t])]:ue(Object.create(null),so(e),so(t??{})):t}function ef(e,t){if(!e)return t;if(!t)return e;const n=ue(Object.create(null),e);for(const r in t)n[r]=me(e[r],t[r]);return n}function Gi(){return{app:null,config:{isNativeTag:Ic,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let tf=0;function nf(e,t){return function(r,s=null){F(r)||(r=ue({},r)),s!=null&&!ne(s)&&(s=null);const o=Gi(),i=new Set;let a=!1;const c=o.app={_uid:tf++,_component:r,_props:s,_container:null,_context:o,_instance:null,version:da,get config(){return o.config},set config(l){},use(l,...d){return i.has(l)||(l&&F(l.install)?(i.add(l),l.install(c,...d)):F(l)&&(i.add(l),l(c,...d))),c},mixin(l){return o.mixins.includes(l)||o.mixins.push(l),c},component(l,d){return d?(o.components[l]=d,c):o.components[l]},directive(l,d){return d?(o.directives[l]=d,c):o.directives[l]},mount(l,d,u){if(!a){const p=le(r,s);return p.appContext=o,d&&t?t(p,l):e(p,l,u),a=!0,c._container=l,l.__vue_app__=c,Hs(p.component)||p.component.proxy}},unmount(){a&&(e(null,c._container),delete c._container.__vue_app__)},provide(l,d){return o.provides[l]=d,c},runWithContext(l){on=c;try{return l()}finally{on=null}}};return c}}let on=null;function Yi(e,t){if(ce){let n=ce.provides;const r=ce.parent&&ce.parent.provides;r===n&&(n=ce.provides=Object.create(r)),n[e]=t}}function St(e,t,n=!1){const r=ce||Ie;if(r||on){const s=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:on._context.provides;if(s&&e in s)return s[e];if(arguments.length>1)return n&&F(t)?t.call(r&&r.proxy):t}}function Xi(){return!!(ce||Ie||on)}function rf(e,t,n,r=!1){const s={},o={};Rn(o,tr,1),e.propsDefaults=Object.create(null),Zi(e,t,s,o);for(const i in e.propsOptions[0])i in s||(s[i]=void 0);n?e.props=r?s:Ei(s):e.type.props?e.props=s:e.props=o,e.attrs=o}function sf(e,t,n,r){const{props:s,attrs:o,vnode:{patchFlag:i}}=e,a=q(s),[c]=e.propsOptions;let l=!1;if((r||i>0)&&!(i&16)){if(i&8){const d=e.vnode.dynamicProps;for(let u=0;u<d.length;u++){let p=d[u];if(Zn(e.emitsOptions,p))continue;const y=t[p];if(c)if(V(o,p))y!==o[p]&&(o[p]=y,l=!0);else{const g=Le(p);s[g]=Lr(c,a,g,y,e,!1)}else y!==o[p]&&(o[p]=y,l=!0)}}}else{Zi(e,t,s,o)&&(l=!0);let d;for(const u in a)(!t||!V(t,u)&&((d=Mt(u))===u||!V(t,d)))&&(c?n&&(n[u]!==void 0||n[d]!==void 0)&&(s[u]=Lr(c,a,u,void 0,e,!0)):delete s[u]);if(o!==a)for(const u in o)(!t||!V(t,u))&&(delete o[u],l=!0)}l&&We(e,"set","$attrs")}function Zi(e,t,n,r){const[s,o]=e.propsOptions;let i=!1,a;if(t)for(let c in t){if(zt(c))continue;const l=t[c];let d;s&&V(s,d=Le(c))?!o||!o.includes(d)?n[d]=l:(a||(a={}))[d]=l:Zn(e.emitsOptions,c)||(!(c in r)||l!==r[c])&&(r[c]=l,i=!0)}if(o){const c=q(n),l=a||se;for(let d=0;d<o.length;d++){const u=o[d];n[u]=Lr(s,c,u,l[u],e,!V(l,u))}}return i}function Lr(e,t,n,r,s,o){const i=e[n];if(i!=null){const a=V(i,"default");if(a&&r===void 0){const c=i.default;if(i.type!==Function&&!i.skipFactory&&F(c)){const{propsDefaults:l}=s;n in l?r=l[n]:($t(s),r=l[n]=c.call(null,t),ht())}else r=c}i[0]&&(o&&!a?r=!1:i[1]&&(r===""||r===Mt(n))&&(r=!0))}return r}function Qi(e,t,n=!1){const r=t.propsCache,s=r.get(e);if(s)return s;const o=e.props,i={},a=[];let c=!1;if(!F(e)){const d=u=>{c=!0;const[p,y]=Qi(u,t,!0);ue(i,p),y&&a.push(...y)};!n&&t.mixins.length&&t.mixins.forEach(d),e.extends&&d(e.extends),e.mixins&&e.mixins.forEach(d)}if(!o&&!c)return ne(e)&&r.set(e,Tt),Tt;if(N(o))for(let d=0;d<o.length;d++){const u=Le(o[d]);co(u)&&(i[u]=se)}else if(o)for(const d in o){const u=Le(d);if(co(u)){const p=o[d],y=i[u]=N(p)||F(p)?{type:p}:ue({},p);if(y){const g=uo(Boolean,y.type),T=uo(String,y.type);y[0]=g>-1,y[1]=T<0||g<T,(g>-1||V(y,"default"))&&a.push(u)}}}const l=[i,a];return ne(e)&&r.set(e,l),l}function co(e){return e[0]!=="$"}function lo(e){const t=e&&e.toString().match(/^\s*(function|class) (\w+)/);return t?t[2]:e===null?"null":""}function fo(e,t){return lo(e)===lo(t)}function uo(e,t){return N(t)?t.findIndex(n=>fo(n,e)):F(t)&&fo(t,e)?0:-1}const ea=e=>e[0]==="_"||e==="$stable",Ts=e=>N(e)?e.map(Ce):[Ce(e)],of=(e,t,n)=>{if(t._n)return t;const r=Di((...s)=>Ts(t(...s)),n);return r._c=!1,r},ta=(e,t,n)=>{const r=e._ctx;for(const s in e){if(ea(s))continue;const o=e[s];if(F(o))t[s]=of(s,o,r);else if(o!=null){const i=Ts(o);t[s]=()=>i}}},na=(e,t)=>{const n=Ts(t);e.slots.default=()=>n},af=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=q(t),Rn(t,"_",n)):ta(t,e.slots={})}else e.slots={},t&&na(e,t);Rn(e.slots,tr,1)},cf=(e,t,n)=>{const{vnode:r,slots:s}=e;let o=!0,i=se;if(r.shapeFlag&32){const a=t._;a?n&&a===1?o=!1:(ue(s,t),!n&&a===1&&delete s._):(o=!t.$stable,ta(t,s)),i=t}else t&&(na(e,t),i={default:1});if(o)for(const a in s)!ea(a)&&!(a in i)&&delete s[a]};function $n(e,t,n,r,s=!1){if(N(e)){e.forEach((p,y)=>$n(p,t&&(N(t)?t[y]:t),n,r,s));return}if(Gt(r)&&!s)return;const o=r.shapeFlag&4?Hs(r.component)||r.component.proxy:r.el,i=s?null:o,{i:a,r:c}=e,l=t&&t.r,d=a.refs===se?a.refs={}:a.refs,u=a.setupState;if(l!=null&&l!==c&&(oe(l)?(d[l]=null,V(u,l)&&(u[l]=null)):fe(l)&&(l.value=null)),F(c))Ye(c,a,12,[i,d]);else{const p=oe(c),y=fe(c);if(p||y){const g=()=>{if(e.f){const T=p?V(u,c)?u[c]:d[c]:c.value;s?N(T)&&as(T,o):N(T)?T.includes(o)||T.push(o):p?(d[c]=[o],V(u,c)&&(u[c]=d[c])):(c.value=[o],e.k&&(d[e.k]=c.value))}else p?(d[c]=i,V(u,c)&&(u[c]=i)):y&&(c.value=i,e.k&&(d[e.k]=i))};i?(g.id=-1,ye(g,n)):g()}}}let qe=!1;const _n=e=>/svg/.test(e.namespaceURI)&&e.tagName!=="foreignObject",wn=e=>e.nodeType===8;function lf(e){const{mt:t,p:n,o:{patchProp:r,createText:s,nextSibling:o,parentNode:i,remove:a,insert:c,createComment:l}}=e,d=(_,b)=>{if(!b.hasChildNodes()){n(null,_,b),xn(),b._vnode=_;return}qe=!1,u(b.firstChild,_,null,null,null),xn(),b._vnode=_,qe&&console.error("Hydration completed but contains mismatches.")},u=(_,b,k,I,O,U=!1)=>{const B=wn(_)&&_.data==="[",S=()=>T(_,b,k,I,O,B),{type:j,ref:z,shapeFlag:J,patchFlag:ge}=b;let re=_.nodeType;b.el=_,ge===-2&&(U=!1,b.dynamicChildren=null);let M=null;switch(j){case xt:re!==3?b.children===""?(c(b.el=s(""),i(_),_),M=_):M=S():(_.data!==b.children&&(qe=!0,_.data=b.children),M=o(_));break;case Fe:re!==8||B?M=S():M=o(_);break;case Tn:if(B&&(_=o(_),re=_.nodeType),re===1||re===3){M=_;const we=!b.children.length;for(let G=0;G<b.staticCount;G++)we&&(b.children+=M.nodeType===1?M.outerHTML:M.data),G===b.staticCount-1&&(b.anchor=M),M=o(M);return B?o(M):M}else S();break;case Ee:B?M=g(_,b,k,I,O,U):M=S();break;default:if(J&1)re!==1||b.type.toLowerCase()!==_.tagName.toLowerCase()?M=S():M=p(_,b,k,I,O,U);else if(J&6){b.slotScopeIds=O;const we=i(_);if(t(b,we,null,k,I,_n(we),U),M=B?D(_):o(_),M&&wn(M)&&M.data==="teleport end"&&(M=o(M)),Gt(b)){let G;B?(G=le(Ee),G.anchor=M?M.previousSibling:we.lastChild):G=_.nodeType===3?la(""):le("div"),G.el=_,b.component.subTree=G}}else J&64?re!==8?M=S():M=b.type.hydrate(_,b,k,I,O,U,e,y):J&128&&(M=b.type.hydrate(_,b,k,I,_n(i(_)),O,U,e,u))}return z!=null&&$n(z,null,I,b),M},p=(_,b,k,I,O,U)=>{U=U||!!b.dynamicChildren;const{type:B,props:S,patchFlag:j,shapeFlag:z,dirs:J}=b,ge=B==="input"&&J||B==="option";if(ge||j!==-1){if(J&&De(b,null,k,"created"),S)if(ge||!U||j&48)for(const M in S)(ge&&M.endsWith("value")||cn(M)&&!zt(M))&&r(_,M,null,S[M],!1,void 0,k);else S.onClick&&r(_,"onClick",null,S.onClick,!1,void 0,k);let re;if((re=S&&S.onVnodeBeforeMount)&&Ae(re,k,b),J&&De(b,null,k,"beforeMount"),((re=S&&S.onVnodeMounted)||J)&&Ni(()=>{re&&Ae(re,k,b),J&&De(b,null,k,"mounted")},I),z&16&&!(S&&(S.innerHTML||S.textContent))){let M=y(_.firstChild,b,_,k,I,O,U);for(;M;){qe=!0;const we=M;M=M.nextSibling,a(we)}}else z&8&&_.textContent!==b.children&&(qe=!0,_.textContent=b.children)}return _.nextSibling},y=(_,b,k,I,O,U,B)=>{B=B||!!b.dynamicChildren;const S=b.children,j=S.length;for(let z=0;z<j;z++){const J=B?S[z]:S[z]=Ce(S[z]);if(_)_=u(_,J,I,O,U,B);else{if(J.type===xt&&!J.children)continue;qe=!0,n(null,J,k,null,I,O,_n(k),U)}}return _},g=(_,b,k,I,O,U)=>{const{slotScopeIds:B}=b;B&&(O=O?O.concat(B):B);const S=i(_),j=y(o(_),b,S,k,I,O,U);return j&&wn(j)&&j.data==="]"?o(b.anchor=j):(qe=!0,c(b.anchor=l("]"),S,j),j)},T=(_,b,k,I,O,U)=>{if(qe=!0,b.el=null,U){const j=D(_);for(;;){const z=o(_);if(z&&z!==j)a(z);else break}}const B=o(_),S=i(_);return a(_),n(null,b,S,B,k,I,_n(S),O),B},D=_=>{let b=0;for(;_;)if(_=o(_),_&&wn(_)&&(_.data==="["&&b++,_.data==="]")){if(b===0)return o(_);b--}return _};return[d,u]}const ye=Ni;function ff(e){return ra(e)}function uf(e){return ra(e,lf)}function ra(e,t){const n=Or();n.__VUE__=!0;const{insert:r,remove:s,patchProp:o,createElement:i,createText:a,createComment:c,setText:l,setElementText:d,parentNode:u,nextSibling:p,setScopeId:y=Pe,insertStaticContent:g}=e,T=(f,h,m,v=null,w=null,C=null,H=!1,A=null,R=!!h.dynamicChildren)=>{if(f===h)return;f&&!Je(f,h)&&(v=dn(f),ke(f,w,C,!0),f=null),h.patchFlag===-2&&(R=!1,h.dynamicChildren=null);const{type:E,ref:P,shapeFlag:x}=h;switch(E){case xt:D(f,h,m,v);break;case Fe:_(f,h,m,v);break;case Tn:f==null&&b(h,m,v,H);break;case Ee:ge(f,h,m,v,w,C,H,A,R);break;default:x&1?O(f,h,m,v,w,C,H,A,R):x&6?re(f,h,m,v,w,C,H,A,R):(x&64||x&128)&&E.process(f,h,m,v,w,C,H,A,R,wt)}P!=null&&w&&$n(P,f&&f.ref,C,h||f,!h)},D=(f,h,m,v)=>{if(f==null)r(h.el=a(h.children),m,v);else{const w=h.el=f.el;h.children!==f.children&&l(w,h.children)}},_=(f,h,m,v)=>{f==null?r(h.el=c(h.children||""),m,v):h.el=f.el},b=(f,h,m,v)=>{[f.el,f.anchor]=g(f.children,h,m,v,f.el,f.anchor)},k=({el:f,anchor:h},m,v)=>{let w;for(;f&&f!==h;)w=p(f),r(f,m,v),f=w;r(h,m,v)},I=({el:f,anchor:h})=>{let m;for(;f&&f!==h;)m=p(f),s(f),f=m;s(h)},O=(f,h,m,v,w,C,H,A,R)=>{H=H||h.type==="svg",f==null?U(h,m,v,w,C,H,A,R):j(f,h,w,C,H,A,R)},U=(f,h,m,v,w,C,H,A)=>{let R,E;const{type:P,props:x,shapeFlag:$,transition:L,dirs:W}=f;if(R=f.el=i(f.type,C,x&&x.is,x),$&8?d(R,f.children):$&16&&S(f.children,R,null,v,w,C&&P!=="foreignObject",H,A),W&&De(f,null,v,"created"),B(R,f,f.scopeId,H,v),x){for(const Y in x)Y!=="value"&&!zt(Y)&&o(R,Y,null,x[Y],C,f.children,v,w,je);"value"in x&&o(R,"value",null,x.value),(E=x.onVnodeBeforeMount)&&Ae(E,v,f)}W&&De(f,null,v,"beforeMount");const ee=(!w||w&&!w.pendingBranch)&&L&&!L.persisted;ee&&L.beforeEnter(R),r(R,h,m),((E=x&&x.onVnodeMounted)||ee||W)&&ye(()=>{E&&Ae(E,v,f),ee&&L.enter(R),W&&De(f,null,v,"mounted")},w)},B=(f,h,m,v,w)=>{if(m&&y(f,m),v)for(let C=0;C<v.length;C++)y(f,v[C]);if(w){let C=w.subTree;if(h===C){const H=w.vnode;B(f,H,H.scopeId,H.slotScopeIds,w.parent)}}},S=(f,h,m,v,w,C,H,A,R=0)=>{for(let E=R;E<f.length;E++){const P=f[E]=A?ze(f[E]):Ce(f[E]);T(null,P,h,m,v,w,C,H,A)}},j=(f,h,m,v,w,C,H)=>{const A=h.el=f.el;let{patchFlag:R,dynamicChildren:E,dirs:P}=h;R|=f.patchFlag&16;const x=f.props||se,$=h.props||se;let L;m&&at(m,!1),(L=$.onVnodeBeforeUpdate)&&Ae(L,m,h,f),P&&De(h,f,m,"beforeUpdate"),m&&at(m,!0);const W=w&&h.type!=="foreignObject";if(E?z(f.dynamicChildren,E,A,m,v,W,C):H||Q(f,h,A,null,m,v,W,C,!1),R>0){if(R&16)J(A,h,x,$,m,v,w);else if(R&2&&x.class!==$.class&&o(A,"class",null,$.class,w),R&4&&o(A,"style",x.style,$.style,w),R&8){const ee=h.dynamicProps;for(let Y=0;Y<ee.length;Y++){const ie=ee[Y],He=x[ie],vt=$[ie];(vt!==He||ie==="value")&&o(A,ie,He,vt,w,f.children,m,v,je)}}R&1&&f.children!==h.children&&d(A,h.children)}else!H&&E==null&&J(A,h,x,$,m,v,w);((L=$.onVnodeUpdated)||P)&&ye(()=>{L&&Ae(L,m,h,f),P&&De(h,f,m,"updated")},v)},z=(f,h,m,v,w,C,H)=>{for(let A=0;A<h.length;A++){const R=f[A],E=h[A],P=R.el&&(R.type===Ee||!Je(R,E)||R.shapeFlag&70)?u(R.el):m;T(R,E,P,null,v,w,C,H,!0)}},J=(f,h,m,v,w,C,H)=>{if(m!==v){if(m!==se)for(const A in m)!zt(A)&&!(A in v)&&o(f,A,m[A],null,H,h.children,w,C,je);for(const A in v){if(zt(A))continue;const R=v[A],E=m[A];R!==E&&A!=="value"&&o(f,A,E,R,H,h.children,w,C,je)}"value"in v&&o(f,"value",m.value,v.value)}},ge=(f,h,m,v,w,C,H,A,R)=>{const E=h.el=f?f.el:a(""),P=h.anchor=f?f.anchor:a("");let{patchFlag:x,dynamicChildren:$,slotScopeIds:L}=h;L&&(A=A?A.concat(L):L),f==null?(r(E,m,v),r(P,m,v),S(h.children,m,P,w,C,H,A,R)):x>0&&x&64&&$&&f.dynamicChildren?(z(f.dynamicChildren,$,m,w,C,H,A),(h.key!=null||w&&h===w.subTree)&&sa(f,h,!0)):Q(f,h,m,P,w,C,H,A,R)},re=(f,h,m,v,w,C,H,A,R)=>{h.slotScopeIds=A,f==null?h.shapeFlag&512?w.ctx.activate(h,m,v,H,R):M(h,m,v,w,C,H,R):we(f,h,R)},M=(f,h,m,v,w,C,H)=>{const A=f.component=bf(f,v,w);if(vs(f)&&(A.ctx.renderer=wt),_f(A),A.asyncDep){if(w&&w.registerDep(A,G),!f.el){const R=A.subTree=le(Fe);_(null,R,h,m)}return}G(A,f,h,m,w,C,H)},we=(f,h,m)=>{const v=h.component=f.component;if(Sl(f,h,m))if(v.asyncDep&&!v.asyncResolved){Z(v,h,m);return}else v.next=h,Il(v.update),v.update();else h.el=f.el,v.vnode=h},G=(f,h,m,v,w,C,H)=>{const A=()=>{if(f.isMounted){let{next:P,bu:x,u:$,parent:L,vnode:W}=f,ee=P,Y;at(f,!1),P?(P.el=W.el,Z(f,P,H)):P=W,x&&ur(x),(Y=P.props&&P.props.onVnodeBeforeUpdate)&&Ae(Y,L,P,W),at(f,!0);const ie=dr(f),He=f.subTree;f.subTree=ie,T(He,ie,u(He.el),dn(He),f,w,C),P.el=ie.el,ee===null&&bs(f,ie.el),$&&ye($,w),(Y=P.props&&P.props.onVnodeUpdated)&&ye(()=>Ae(Y,L,P,W),w)}else{let P;const{el:x,props:$}=h,{bm:L,m:W,parent:ee}=f,Y=Gt(h);if(at(f,!1),L&&ur(L),!Y&&(P=$&&$.onVnodeBeforeMount)&&Ae(P,ee,h),at(f,!0),x&&lr){const ie=()=>{f.subTree=dr(f),lr(x,f.subTree,f,w,null)};Y?h.type.__asyncLoader().then(()=>!f.isUnmounted&&ie()):ie()}else{const ie=f.subTree=dr(f);T(null,ie,m,v,f,w,C),h.el=ie.el}if(W&&ye(W,w),!Y&&(P=$&&$.onVnodeMounted)){const ie=h;ye(()=>Ae(P,ee,ie),w)}(h.shapeFlag&256||ee&&Gt(ee.vnode)&&ee.vnode.shapeFlag&256)&&f.a&&ye(f.a,w),f.isMounted=!0,h=m=v=null}},R=f.effect=new us(A,()=>Xn(E),f.scope),E=f.update=()=>R.run();E.id=f.uid,at(f,!0),E()},Z=(f,h,m)=>{h.component=f;const v=f.vnode.props;f.vnode=h,f.next=null,sf(f,h.props,v,m),cf(f,h.children,m),Dt(),Qs(),Nt()},Q=(f,h,m,v,w,C,H,A,R=!1)=>{const E=f&&f.children,P=f?f.shapeFlag:0,x=h.children,{patchFlag:$,shapeFlag:L}=h;if($>0){if($&128){un(E,x,m,v,w,C,H,A,R);return}else if($&256){ot(E,x,m,v,w,C,H,A,R);return}}L&8?(P&16&&je(E,w,C),x!==E&&d(m,x)):P&16?L&16?un(E,x,m,v,w,C,H,A,R):je(E,w,C,!0):(P&8&&d(m,""),L&16&&S(x,m,v,w,C,H,A,R))},ot=(f,h,m,v,w,C,H,A,R)=>{f=f||Tt,h=h||Tt;const E=f.length,P=h.length,x=Math.min(E,P);let $;for($=0;$<x;$++){const L=h[$]=R?ze(h[$]):Ce(h[$]);T(f[$],L,m,null,w,C,H,A,R)}E>P?je(f,w,C,!0,!1,x):S(h,m,v,w,C,H,A,R,x)},un=(f,h,m,v,w,C,H,A,R)=>{let E=0;const P=h.length;let x=f.length-1,$=P-1;for(;E<=x&&E<=$;){const L=f[E],W=h[E]=R?ze(h[E]):Ce(h[E]);if(Je(L,W))T(L,W,m,null,w,C,H,A,R);else break;E++}for(;E<=x&&E<=$;){const L=f[x],W=h[$]=R?ze(h[$]):Ce(h[$]);if(Je(L,W))T(L,W,m,null,w,C,H,A,R);else break;x--,$--}if(E>x){if(E<=$){const L=$+1,W=L<P?h[L].el:v;for(;E<=$;)T(null,h[E]=R?ze(h[E]):Ce(h[E]),m,W,w,C,H,A,R),E++}}else if(E>$)for(;E<=x;)ke(f[E],w,C,!0),E++;else{const L=E,W=E,ee=new Map;for(E=W;E<=$;E++){const ve=h[E]=R?ze(h[E]):Ce(h[E]);ve.key!=null&&ee.set(ve.key,E)}let Y,ie=0;const He=$-W+1;let vt=!1,js=0;const Ut=new Array(He);for(E=0;E<He;E++)Ut[E]=0;for(E=L;E<=x;E++){const ve=f[E];if(ie>=He){ke(ve,w,C,!0);continue}let Me;if(ve.key!=null)Me=ee.get(ve.key);else for(Y=W;Y<=$;Y++)if(Ut[Y-W]===0&&Je(ve,h[Y])){Me=Y;break}Me===void 0?ke(ve,w,C,!0):(Ut[Me-W]=E+1,Me>=js?js=Me:vt=!0,T(ve,h[Me],m,null,w,C,H,A,R),ie++)}const Us=vt?df(Ut):Tt;for(Y=Us.length-1,E=He-1;E>=0;E--){const ve=W+E,Me=h[ve],Ws=ve+1<P?h[ve+1].el:v;Ut[E]===0?T(null,Me,m,Ws,w,C,H,A,R):vt&&(Y<0||E!==Us[Y]?it(Me,m,Ws,2):Y--)}}},it=(f,h,m,v,w=null)=>{const{el:C,type:H,transition:A,children:R,shapeFlag:E}=f;if(E&6){it(f.component.subTree,h,m,v);return}if(E&128){f.suspense.move(h,m,v);return}if(E&64){H.move(f,h,m,wt);return}if(H===Ee){r(C,h,m);for(let x=0;x<R.length;x++)it(R[x],h,m,v);r(f.anchor,h,m);return}if(H===Tn){k(f,h,m);return}if(v!==2&&E&1&&A)if(v===0)A.beforeEnter(C),r(C,h,m),ye(()=>A.enter(C),w);else{const{leave:x,delayLeave:$,afterLeave:L}=A,W=()=>r(C,h,m),ee=()=>{x(C,()=>{W(),L&&L()})};$?$(C,W,ee):ee()}else r(C,h,m)},ke=(f,h,m,v=!1,w=!1)=>{const{type:C,props:H,ref:A,children:R,dynamicChildren:E,shapeFlag:P,patchFlag:x,dirs:$}=f;if(A!=null&&$n(A,null,m,f,!0),P&256){h.ctx.deactivate(f);return}const L=P&1&&$,W=!Gt(f);let ee;if(W&&(ee=H&&H.onVnodeBeforeUnmount)&&Ae(ee,h,f),P&6)Ec(f.component,m,v);else{if(P&128){f.suspense.unmount(m,v);return}L&&De(f,null,h,"beforeUnmount"),P&64?f.type.remove(f,h,m,w,wt,v):E&&(C!==Ee||x>0&&x&64)?je(E,h,m,!1,!0):(C===Ee&&x&384||!w&&P&16)&&je(R,h,m),v&&Ls(f)}(W&&(ee=H&&H.onVnodeUnmounted)||L)&&ye(()=>{ee&&Ae(ee,h,f),L&&De(f,null,h,"unmounted")},m)},Ls=f=>{const{type:h,el:m,anchor:v,transition:w}=f;if(h===Ee){vc(m,v);return}if(h===Tn){I(f);return}const C=()=>{s(m),w&&!w.persisted&&w.afterLeave&&w.afterLeave()};if(f.shapeFlag&1&&w&&!w.persisted){const{leave:H,delayLeave:A}=w,R=()=>H(m,C);A?A(f.el,C,R):R()}else C()},vc=(f,h)=>{let m;for(;f!==h;)m=p(f),s(f),f=m;s(h)},Ec=(f,h,m)=>{const{bum:v,scope:w,update:C,subTree:H,um:A}=f;v&&ur(v),w.stop(),C&&(C.active=!1,ke(H,f,h,m)),A&&ye(A,h),ye(()=>{f.isUnmounted=!0},h),h&&h.pendingBranch&&!h.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===h.pendingId&&(h.deps--,h.deps===0&&h.resolve())},je=(f,h,m,v=!1,w=!1,C=0)=>{for(let H=C;H<f.length;H++)ke(f[H],h,m,v,w)},dn=f=>f.shapeFlag&6?dn(f.component.subTree):f.shapeFlag&128?f.suspense.next():p(f.anchor||f.el),Fs=(f,h,m)=>{f==null?h._vnode&&ke(h._vnode,null,null,!0):T(h._vnode||null,f,h,null,null,null,m),Qs(),xn(),h._vnode=f},wt={p:T,um:ke,m:it,r:Ls,mt:M,mc:S,pc:Q,pbc:z,n:dn,o:e};let cr,lr;return t&&([cr,lr]=t(wt)),{render:Fs,hydrate:cr,createApp:nf(Fs,cr)}}function at({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function sa(e,t,n=!1){const r=e.children,s=t.children;if(N(r)&&N(s))for(let o=0;o<r.length;o++){const i=r[o];let a=s[o];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[o]=ze(s[o]),a.el=i.el),n||sa(i,a)),a.type===xt&&(a.el=i.el)}}function df(e){const t=e.slice(),n=[0];let r,s,o,i,a;const c=e.length;for(r=0;r<c;r++){const l=e[r];if(l!==0){if(s=n[n.length-1],e[s]<l){t[r]=s,n.push(r);continue}for(o=0,i=n.length-1;o<i;)a=o+i>>1,e[n[a]]<l?o=a+1:i=a;l<e[n[o]]&&(o>0&&(t[r]=n[o-1]),n[o]=r)}}for(o=n.length,i=n[o-1];o-- >0;)n[o]=i,i=t[i];return n}const hf=e=>e.__isTeleport,Ee=Symbol.for("v-fgt"),xt=Symbol.for("v-txt"),Fe=Symbol.for("v-cmt"),Tn=Symbol.for("v-stc"),Xt=[];let Re=null;function ae(e=!1){Xt.push(Re=e?null:[])}function oa(){Xt.pop(),Re=Xt[Xt.length-1]||null}let Ot=1;function ho(e){Ot+=e}function ia(e){return e.dynamicChildren=Ot>0?Re||Tt:null,oa(),Ot>0&&Re&&Re.push(e),e}function Xe(e,t,n,r,s,o){return ia(X(e,t,n,r,s,o,!0))}function Oe(e,t,n,r,s){return ia(le(e,t,n,r,s,!0))}function kn(e){return e?e.__v_isVNode===!0:!1}function Je(e,t){return e.type===t.type&&e.key===t.key}const tr="__vInternal",aa=({key:e})=>e??null,An=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?oe(e)||fe(e)||F(e)?{i:Ie,r:e,k:t,f:!!n}:e:null);function X(e,t=null,n=null,r=0,s=null,o=e===Ee?0:1,i=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&aa(t),ref:t&&An(t),scopeId:Qn,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Ie};return a?(As(c,n),o&128&&e.normalize(c)):n&&(c.shapeFlag|=oe(n)?8:16),Ot>0&&!i&&Re&&(c.patchFlag>0||o&6)&&c.patchFlag!==32&&Re.push(c),c}const le=pf;function pf(e,t=null,n=null,r=0,s=null,o=!1){if((!e||e===Vi)&&(e=Fe),kn(e)){const a=Pt(e,t,!0);return n&&As(a,n),Ot>0&&!o&&Re&&(a.shapeFlag&6?Re[Re.indexOf(e)]=a:Re.push(a)),a.patchFlag|=-2,a}if(Tf(e)&&(e=e.__vccOpts),t){t=ca(t);let{class:a,style:c}=t;a&&!oe(a)&&(t.class=ln(a)),ne(c)&&(Ti(c)&&!N(c)&&(c=ue({},c)),t.style=Jn(c))}const i=oe(e)?1:xl(e)?128:hf(e)?64:ne(e)?4:F(e)?2:0;return X(e,t,n,r,s,i,o,!0)}function ca(e){return e?Ti(e)||tr in e?ue({},e):e:null}function Pt(e,t,n=!1){const{props:r,ref:s,patchFlag:o,children:i}=e,a=t?gf(r||{},t):r;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:a,key:a&&aa(a),ref:t&&t.ref?n&&s?N(s)?s.concat(An(t)):[s,An(t)]:An(t):s,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:i,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Ee?o===-1?16:o|16:o,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Pt(e.ssContent),ssFallback:e.ssFallback&&Pt(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce}}function la(e=" ",t=0){return le(xt,null,e,t)}function Cn(e="",t=!1){return t?(ae(),Oe(Fe,null,e)):le(Fe,null,e)}function Ce(e){return e==null||typeof e=="boolean"?le(Fe):N(e)?le(Ee,null,e.slice()):typeof e=="object"?ze(e):le(xt,null,String(e))}function ze(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Pt(e)}function As(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(N(t))n=16;else if(typeof t=="object")if(r&65){const s=t.default;s&&(s._c&&(s._d=!1),As(e,s()),s._c&&(s._d=!0));return}else{n=32;const s=t._;!s&&!(tr in t)?t._ctx=Ie:s===3&&Ie&&(Ie.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else F(t)?(t={default:t,_ctx:Ie},n=32):(t=String(t),r&64?(n=16,t=[la(t)]):n=8);e.children=t,e.shapeFlag|=n}function gf(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const s in r)if(s==="class")t.class!==r.class&&(t.class=ln([t.class,r.class]));else if(s==="style")t.style=Jn([t.style,r.style]);else if(cn(s)){const o=t[s],i=r[s];i&&o!==i&&!(N(o)&&o.includes(i))&&(t[s]=o?[].concat(o,i):i)}else s!==""&&(t[s]=r[s])}return t}function Ae(e,t,n,r=null){$e(e,t,7,[n,r])}const mf=Gi();let yf=0;function bf(e,t,n){const r=e.type,s=(t?t.appContext:e.appContext)||mf,o={uid:yf++,vnode:e,type:r,parent:t,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new Bc(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Qi(r,s),emitsOptions:Mi(r,s),emit:null,emitted:null,propsDefaults:se,inheritAttrs:r.inheritAttrs,ctx:se,data:se,props:se,attrs:se,slots:se,refs:se,setupState:se,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return o.ctx={_:o},o.root=t?t.root:o,o.emit=Al.bind(null,o),e.ce&&e.ce(o),o}let ce=null;const Cs=()=>ce||Ie;let Rs,Et,po="__VUE_INSTANCE_SETTERS__";(Et=Or()[po])||(Et=Or()[po]=[]),Et.push(e=>ce=e),Rs=e=>{Et.length>1?Et.forEach(t=>t(e)):Et[0](e)};const $t=e=>{Rs(e),e.scope.on()},ht=()=>{ce&&ce.scope.off(),Rs(null)};function fa(e){return e.vnode.shapeFlag&4}let kt=!1;function _f(e,t=!1){kt=t;const{props:n,children:r}=e.vnode,s=fa(e);rf(e,n,s,t),af(e,r);const o=s?wf(e,t):void 0;return kt=!1,o}function wf(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=Ai(new Proxy(e.ctx,Gl));const{setup:r}=n;if(r){const s=e.setupContext=r.length>1?Ef(e):null;$t(e),Dt();const o=Ye(r,e,0,[e.props,s]);if(Nt(),ht(),ai(o)){if(o.then(ht,ht),t)return o.then(i=>{Fr(e,i,t)}).catch(i=>{Bt(i,e,0)});e.asyncDep=o}else Fr(e,o,t)}else ua(e,t)}function Fr(e,t,n){F(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:ne(t)&&(e.setupState=Si(t)),ua(e,n)}let go;function ua(e,t,n){const r=e.type;if(!e.render){if(!t&&go&&!r.render){const s=r.template||Is(e).template;if(s){const{isCustomElement:o,compilerOptions:i}=e.appContext.config,{delimiters:a,compilerOptions:c}=r,l=ue(ue({isCustomElement:o,delimiters:a},i),c);r.render=go(s,l)}}e.render=r.render||Pe}$t(e),Dt(),Yl(e),Nt(),ht()}function vf(e){return e.attrsProxy||(e.attrsProxy=new Proxy(e.attrs,{get(t,n){return _e(e,"get","$attrs"),t[n]}}))}function Ef(e){const t=n=>{e.exposed=n||{}};return{get attrs(){return vf(e)},slots:e.slots,emit:e.emit,expose:t}}function Hs(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(Si(Ai(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Yt)return Yt[n](e)},has(t,n){return n in t||n in Yt}}))}function If(e,t=!0){return F(e)?e.displayName||e.name:e.name||t&&e.__name}function Tf(e){return F(e)&&"__vccOpts"in e}const Af=(e,t)=>wl(e,t,kt);function Cf(e,t,n){const r=arguments.length;return r===2?ne(t)&&!N(t)?kn(t)?le(e,null,[t]):le(e,t):le(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&kn(n)&&(n=[n]),le(e,t,n))}const Rf=Symbol.for("v-scx"),Hf=()=>St(Rf),da="3.3.4",Sf="http://www.w3.org/2000/svg",ft=typeof document<"u"?document:null,mo=ft&&ft.createElement("template"),xf={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const s=t?ft.createElementNS(Sf,e):ft.createElement(e,n?{is:n}:void 0);return e==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:e=>ft.createTextNode(e),createComment:e=>ft.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>ft.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,s,o){const i=n?n.previousSibling:t.lastChild;if(s&&(s===o||s.nextSibling))for(;t.insertBefore(s.cloneNode(!0),n),!(s===o||!(s=s.nextSibling)););else{mo.innerHTML=r?`<svg>${e}</svg>`:e;const a=mo.content;if(r){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}t.insertBefore(a,n)}return[i?i.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function Of(e,t,n){const r=e._vtc;r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function Pf(e,t,n){const r=e.style,s=oe(n);if(n&&!s){if(t&&!oe(t))for(const o in t)n[o]==null&&jr(r,o,"");for(const o in n)jr(r,o,n[o])}else{const o=r.display;s?t!==n&&(r.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(r.display=o)}}const yo=/\s*!important$/;function jr(e,t,n){if(N(n))n.forEach(r=>jr(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=$f(e,t);yo.test(n)?e.setProperty(Mt(r),n.replace(yo,""),"important"):e[r]=n}}const bo=["Webkit","Moz","ms"],gr={};function $f(e,t){const n=gr[t];if(n)return n;let r=Le(t);if(r!=="filter"&&r in e)return gr[t]=r;r=zn(r);for(let s=0;s<bo.length;s++){const o=bo[s]+r;if(o in e)return gr[t]=o}return t}const _o="http://www.w3.org/1999/xlink";function kf(e,t,n,r,s){if(r&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(_o,t.slice(6,t.length)):e.setAttributeNS(_o,t,n);else{const o=Nc(t);n==null||o&&!fi(n)?e.removeAttribute(t):e.setAttribute(t,o?"":n)}}function Mf(e,t,n,r,s,o,i){if(t==="innerHTML"||t==="textContent"){r&&i(r,s,o),e[t]=n??"";return}const a=e.tagName;if(t==="value"&&a!=="PROGRESS"&&!a.includes("-")){e._value=n;const l=a==="OPTION"?e.getAttribute("value"):e.value,d=n??"";l!==d&&(e.value=d),n==null&&e.removeAttribute(t);return}let c=!1;if(n===""||n==null){const l=typeof e[t];l==="boolean"?n=fi(n):n==null&&l==="string"?(n="",c=!0):l==="number"&&(n=0,c=!0)}try{e[t]=n}catch{}c&&e.removeAttribute(t)}function Df(e,t,n,r){e.addEventListener(t,n,r)}function Nf(e,t,n,r){e.removeEventListener(t,n,r)}function Bf(e,t,n,r,s=null){const o=e._vei||(e._vei={}),i=o[t];if(r&&i)i.value=r;else{const[a,c]=Lf(t);if(r){const l=o[t]=Uf(r,s);Df(e,a,l,c)}else i&&(Nf(e,a,i,c),o[t]=void 0)}}const wo=/(?:Once|Passive|Capture)$/;function Lf(e){let t;if(wo.test(e)){t={};let r;for(;r=e.match(wo);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):Mt(e.slice(2)),t]}let mr=0;const Ff=Promise.resolve(),jf=()=>mr||(Ff.then(()=>mr=0),mr=Date.now());function Uf(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;$e(Wf(r,n.value),t,5,[r])};return n.value=e,n.attached=jf(),n}function Wf(e,t){if(N(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>s=>!s._stopped&&r&&r(s))}else return t}const vo=/^on[a-z]/,Kf=(e,t,n,r,s=!1,o,i,a,c)=>{t==="class"?Of(e,r,s):t==="style"?Pf(e,n,r):cn(t)?is(t)||Bf(e,t,n,r,i):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Vf(e,t,r,s))?Mf(e,t,r,o,i,a,c):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),kf(e,t,r,s))};function Vf(e,t,n,r){return r?!!(t==="innerHTML"||t==="textContent"||t in e&&vo.test(t)&&F(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||vo.test(t)&&oe(n)?!1:t in e}const ha=ue({patchProp:Kf},xf);let Zt,Eo=!1;function qf(){return Zt||(Zt=ff(ha))}function zf(){return Zt=Eo?Zt:uf(ha),Eo=!0,Zt}const Jf=(...e)=>{const t=qf().createApp(...e),{mount:n}=t;return t.mount=r=>{const s=pa(r);if(!s)return;const o=t._component;!F(o)&&!o.render&&!o.template&&(o.template=s.innerHTML),s.innerHTML="";const i=n(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),i},t},Gf=(...e)=>{const t=zf().createApp(...e),{mount:n}=t;return t.mount=r=>{const s=pa(r);if(s)return n(s,!0,s instanceof SVGElement)},t};function pa(e){return oe(e)?document.querySelector(e):e}const Yf=/"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/,Xf=/"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/,Zf=/^\s*["[{]|^\s*-?\d[\d.]{0,14}\s*$/;function Qf(e,t){if(e==="__proto__"||e==="constructor"&&t&&typeof t=="object"&&"prototype"in t){eu(e);return}return t}function eu(e){console.warn(`[destr] Dropping "${e}" key to prevent prototype pollution.`)}function tu(e,t={}){if(typeof e!="string")return e;const n=e.trim();if(e[0]==='"'&&e[e.length-1]==='"')return n.slice(1,-1);if(n.length<=9){const r=n.toLowerCase();if(r==="true")return!0;if(r==="false")return!1;if(r==="undefined")return;if(r==="null")return null;if(r==="nan")return Number.NaN;if(r==="infinity")return Number.POSITIVE_INFINITY;if(r==="-infinity")return Number.NEGATIVE_INFINITY}if(!Zf.test(e)){if(t.strict)throw new SyntaxError("[destr] Invalid JSON");return e}try{if(Yf.test(e)||Xf.test(e)){if(t.strict)throw new Error("[destr] Possible prototype pollution");return JSON.parse(e,Qf)}return JSON.parse(e)}catch(r){if(t.strict)throw r;return e}}const nu=/#/g,ru=/&/g,su=/=/g,Ss=/\+/g,ou=/%5e/gi,iu=/%60/gi,au=/%7c/gi,cu=/%20/gi;function lu(e){return encodeURI(""+e).replace(au,"|")}function Ur(e){return lu(typeof e=="string"?e:JSON.stringify(e)).replace(Ss,"%2B").replace(cu,"+").replace(nu,"%23").replace(ru,"%26").replace(iu,"`").replace(ou,"^")}function yr(e){return Ur(e).replace(su,"%3D")}function Mn(e=""){try{return decodeURIComponent(""+e)}catch{return""+e}}function fu(e){return Mn(e.replace(Ss," "))}function uu(e){return Mn(e.replace(Ss," "))}function ga(e=""){const t={};e[0]==="?"&&(e=e.slice(1));for(const n of e.split("&")){const r=n.match(/([^=]+)=?(.*)/)||[];if(r.length<2)continue;const s=fu(r[1]);if(s==="__proto__"||s==="constructor")continue;const o=uu(r[2]||"");t[s]===void 0?t[s]=o:Array.isArray(t[s])?t[s].push(o):t[s]=[t[s],o]}return t}function du(e,t){return(typeof t=="number"||typeof t=="boolean")&&(t=String(t)),t?Array.isArray(t)?t.map(n=>`${yr(e)}=${Ur(n)}`).join("&"):`${yr(e)}=${Ur(t)}`:yr(e)}function ma(e){return Object.keys(e).filter(t=>e[t]!==void 0).map(t=>du(t,e[t])).filter(Boolean).join("&")}const hu=/^\w{2,}:([/\\]{1,2})/,pu=/^\w{2,}:([/\\]{2})?/,gu=/^([/\\]\s*){2,}[^/\\]/;function nr(e,t={}){return typeof t=="boolean"&&(t={acceptRelative:t}),t.strict?hu.test(e):pu.test(e)||(t.acceptRelative?gu.test(e):!1)}const mu=/\/$|\/\?/;function Wr(e="",t=!1){return t?mu.test(e):e.endsWith("/")}function ya(e="",t=!1){if(!t)return(Wr(e)?e.slice(0,-1):e)||"/";if(!Wr(e,!0))return e||"/";const[n,...r]=e.split("?");return(n.slice(0,-1)||"/")+(r.length>0?`?${r.join("?")}`:"")}function Kr(e="",t=!1){if(!t)return e.endsWith("/")?e:e+"/";if(Wr(e,!0))return e||"/";const[n,...r]=e.split("?");return n+"/"+(r.length>0?`?${r.join("?")}`:"")}function yu(e=""){return e.startsWith("/")}function Io(e=""){return yu(e)?e:"/"+e}function bu(e,t){if(_a(t)||nr(e))return e;const n=ya(t);return e.startsWith(n)?e:Ft(n,e)}function _u(e,t){if(_a(t))return e;const n=ya(t);if(!e.startsWith(n))return e;const r=e.slice(n.length);return r[0]==="/"?r:"/"+r}function ba(e,t){const n=fn(e),r={...ga(n.search),...t};return n.search=ma(r),wa(n)}function _a(e){return!e||e==="/"}function wu(e){return e&&e!=="/"}const vu=/^\.?\//;function Ft(e,...t){let n=e||"";for(const r of t.filter(s=>wu(s)))if(n){const s=r.replace(vu,"");n=Kr(n)+s}else n=r;return n}function Eu(e,t,n={}){return n.trailingSlash||(e=Kr(e),t=Kr(t)),n.leadingSlash||(e=Io(e),t=Io(t)),n.encoding||(e=Mn(e),t=Mn(t)),e===t}function fn(e="",t){if(!nr(e,{acceptRelative:!0}))return t?fn(t+e):To(e);const[n="",r,s=""]=(e.replace(/\\/g,"/").match(/([^/:]+:)?\/\/([^/@]+@)?(.*)/)||[]).splice(1),[o="",i=""]=(s.match(/([^#/?]*)(.*)?/)||[]).splice(1),{pathname:a,search:c,hash:l}=To(i.replace(/\/(?=[A-Za-z]:)/,""));return{protocol:n,auth:r?r.slice(0,Math.max(0,r.length-1)):"",host:o,pathname:a,search:c,hash:l}}function To(e=""){const[t="",n="",r=""]=(e.match(/([^#?]*)(\?[^#]*)?(#.*)?/)||[]).splice(1);return{pathname:t,search:n,hash:r}}function wa(e){const t=e.pathname+(e.search?(e.search.startsWith("?")?"":"?")+e.search:"")+e.hash;return e.protocol?e.protocol+"//"+(e.auth?e.auth+"@":"")+e.host+t:t}class Iu extends Error{constructor(){super(...arguments),this.name="FetchError"}}function Tu(e,t,n){let r="";t&&(r=t.message),e&&n?r=`${r} (${n.status} ${n.statusText} (${e.toString()}))`:e&&(r=`${r} (${e.toString()})`);const s=new Iu(r);return Object.defineProperty(s,"request",{get(){return e}}),Object.defineProperty(s,"response",{get(){return n}}),Object.defineProperty(s,"data",{get(){return n&&n._data}}),Object.defineProperty(s,"status",{get(){return n&&n.status}}),Object.defineProperty(s,"statusText",{get(){return n&&n.statusText}}),Object.defineProperty(s,"statusCode",{get(){return n&&n.status}}),Object.defineProperty(s,"statusMessage",{get(){return n&&n.statusText}}),s}const Au=new Set(Object.freeze(["PATCH","POST","PUT","DELETE"]));function Ao(e="GET"){return Au.has(e.toUpperCase())}function Cu(e){if(e===void 0)return!1;const t=typeof e;return t==="string"||t==="number"||t==="boolean"||t===null?!0:t!=="object"?!1:Array.isArray(e)?!0:e.constructor&&e.constructor.name==="Object"||typeof e.toJSON=="function"}const Ru=new Set(["image/svg","application/xml","application/xhtml","application/html"]),Hu=/^application\/(?:[\w!#$%&*.^`~-]*\+)?json(;.+)?$/i;function Su(e=""){if(!e)return"json";const t=e.split(";").shift()||"";return Hu.test(t)?"json":Ru.has(t)||t.startsWith("text/")?"text":"blob"}function xu(e,t,n=globalThis.Headers){const r={...t,...e};if(t!=null&&t.params&&(e!=null&&e.params)&&(r.params={...t==null?void 0:t.params,...e==null?void 0:e.params}),t!=null&&t.query&&(e!=null&&e.query)&&(r.query={...t==null?void 0:t.query,...e==null?void 0:e.query}),t!=null&&t.headers&&(e!=null&&e.headers)){r.headers=new n((t==null?void 0:t.headers)||{});for(const[s,o]of new n((e==null?void 0:e.headers)||{}))r.headers.set(s,o)}return r}const Ou=new Set([408,409,425,429,500,502,503,504]);function va(e){const{fetch:t,Headers:n}=e;function r(i){const a=i.error&&i.error.name==="AbortError"||!1;if(i.options.retry!==!1&&!a){let l;typeof i.options.retry=="number"?l=i.options.retry:l=Ao(i.options.method)?0:1;const d=i.response&&i.response.status||500;if(l>0&&Ou.has(d))return s(i.request,{...i.options,retry:l-1})}const c=Tu(i.request,i.error,i.response);throw Error.captureStackTrace&&Error.captureStackTrace(c,s),c}const s=async function(a,c={}){const l={request:a,options:xu(c,e.defaults,n),response:void 0,error:void 0};l.options.onRequest&&await l.options.onRequest(l),typeof l.request=="string"&&(l.options.baseURL&&(l.request=bu(l.request,l.options.baseURL)),(l.options.query||l.options.params)&&(l.request=ba(l.request,{...l.options.params,...l.options.query})),l.options.body&&Ao(l.options.method)&&Cu(l.options.body)&&(l.options.body=typeof l.options.body=="string"?l.options.body:JSON.stringify(l.options.body),l.options.headers=new n(l.options.headers||{}),l.options.headers.has("content-type")||l.options.headers.set("content-type","application/json"),l.options.headers.has("accept")||l.options.headers.set("accept","application/json")));try{l.response=await t(l.request,l.options)}catch(u){return l.error=u,l.options.onRequestError&&await l.options.onRequestError(l),await r(l)}const d=(l.options.parseResponse?"json":l.options.responseType)||Su(l.response.headers.get("content-type")||"");if(d==="json"){const u=await l.response.text(),p=l.options.parseResponse||tu;l.response._data=p(u)}else d==="stream"?l.response._data=l.response.body:l.response._data=await l.response[d]();return l.options.onResponse&&await l.options.onResponse(l),!l.options.ignoreResponseError&&l.response.status>=400&&l.response.status<600?(l.options.onResponseError&&await l.options.onResponseError(l),await r(l)):l.response},o=async function(a,c){return(await s(a,c))._data};return o.raw=s,o.native=t,o.create=(i={})=>va({...e,defaults:{...e.defaults,...i}}),o}const Ea=function(){if(typeof globalThis<"u")return globalThis;if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("unable to locate global object")}(),Pu=Ea.fetch||(()=>Promise.reject(new Error("[ofetch] global.fetch is not supported!"))),$u=Ea.Headers,ku=va({fetch:Pu,Headers:$u}),Mu=ku,Du=()=>{var e;return((e=window==null?void 0:window.__NUXT__)==null?void 0:e.config)||{}},Dn=Du().app,Nu=()=>Dn.baseURL,Bu=()=>Dn.buildAssetsDir,Lu=(...e)=>Ft(Ia(),Bu(),...e),Ia=(...e)=>{const t=Dn.cdnURL||Dn.baseURL;return e.length?Ft(t,...e):t};globalThis.__buildAssetsURL=Lu,globalThis.__publicAssetsURL=Ia;function Vr(e,t={},n){for(const r in e){const s=e[r],o=n?`${n}:${r}`:r;typeof s=="object"&&s!==null?Vr(s,t,o):typeof s=="function"&&(t[o]=s)}return t}const Fu={run:e=>e()},ju=()=>Fu,Ta=typeof console.createTask<"u"?console.createTask:ju;function Uu(e,t){const n=t.shift(),r=Ta(n);return e.reduce((s,o)=>s.then(()=>r.run(()=>o(...t))),Promise.resolve())}function Wu(e,t){const n=t.shift(),r=Ta(n);return Promise.all(e.map(s=>r.run(()=>s(...t))))}function br(e,t){for(const n of[...e])n(t)}class Ku{constructor(){this._hooks={},this._before=void 0,this._after=void 0,this._deprecatedMessages=void 0,this._deprecatedHooks={},this.hook=this.hook.bind(this),this.callHook=this.callHook.bind(this),this.callHookWith=this.callHookWith.bind(this)}hook(t,n,r={}){if(!t||typeof n!="function")return()=>{};const s=t;let o;for(;this._deprecatedHooks[t];)o=this._deprecatedHooks[t],t=o.to;if(o&&!r.allowDeprecated){let i=o.message;i||(i=`${s} hook has been deprecated`+(o.to?`, please use ${o.to}`:"")),this._deprecatedMessages||(this._deprecatedMessages=new Set),this._deprecatedMessages.has(i)||(console.warn(i),this._deprecatedMessages.add(i))}if(!n.name)try{Object.defineProperty(n,"name",{get:()=>"_"+t.replace(/\W+/g,"_")+"_hook_cb",configurable:!0})}catch{}return this._hooks[t]=this._hooks[t]||[],this._hooks[t].push(n),()=>{n&&(this.removeHook(t,n),n=void 0)}}hookOnce(t,n){let r,s=(...o)=>(typeof r=="function"&&r(),r=void 0,s=void 0,n(...o));return r=this.hook(t,s),r}removeHook(t,n){if(this._hooks[t]){const r=this._hooks[t].indexOf(n);r!==-1&&this._hooks[t].splice(r,1),this._hooks[t].length===0&&delete this._hooks[t]}}deprecateHook(t,n){this._deprecatedHooks[t]=typeof n=="string"?{to:n}:n;const r=this._hooks[t]||[];delete this._hooks[t];for(const s of r)this.hook(t,s)}deprecateHooks(t){Object.assign(this._deprecatedHooks,t);for(const n in t)this.deprecateHook(n,t[n])}addHooks(t){const n=Vr(t),r=Object.keys(n).map(s=>this.hook(s,n[s]));return()=>{for(const s of r.splice(0,r.length))s()}}removeHooks(t){const n=Vr(t);for(const r in n)this.removeHook(r,n[r])}removeAllHooks(){for(const t in this._hooks)delete this._hooks[t]}callHook(t,...n){return n.unshift(t),this.callHookWith(Uu,t,...n)}callHookParallel(t,...n){return n.unshift(t),this.callHookWith(Wu,t,...n)}callHookWith(t,n,...r){const s=this._before||this._after?{name:n,args:r,context:{}}:void 0;this._before&&br(this._before,s);const o=t(n in this._hooks?[...this._hooks[n]]:[],r);return o instanceof Promise?o.finally(()=>{this._after&&s&&br(this._after,s)}):(this._after&&s&&br(this._after,s),o)}beforeEach(t){return this._before=this._before||[],this._before.push(t),()=>{if(this._before!==void 0){const n=this._before.indexOf(t);n!==-1&&this._before.splice(n,1)}}}afterEach(t){return this._after=this._after||[],this._after.push(t),()=>{if(this._after!==void 0){const n=this._after.indexOf(t);n!==-1&&this._after.splice(n,1)}}}}function Aa(){return new Ku}function Vu(e={}){let t,n=!1;const r=i=>{if(t&&t!==i)throw new Error("Context conflict")};let s;if(e.asyncContext){const i=e.AsyncLocalStorage||globalThis.AsyncLocalStorage;i?s=new i:console.warn("[unctx] `AsyncLocalStorage` is not provided.")}const o=()=>{if(s&&t===void 0){const i=s.getStore();if(i!==void 0)return i}return t};return{use:()=>{const i=o();if(i===void 0)throw new Error("Context is not available");return i},tryUse:()=>o(),set:(i,a)=>{a||r(i),t=i,n=!0},unset:()=>{t=void 0,n=!1},call:(i,a)=>{r(i),t=i;try{return s?s.run(i,a):a()}finally{n||(t=void 0)}},async callAsync(i,a){t=i;const c=()=>{t=i},l=()=>t===i?c:void 0;qr.add(l);try{const d=s?s.run(i,a):a();return n||(t=void 0),await d}finally{qr.delete(l)}}}}function qu(e={}){const t={};return{get(n,r={}){return t[n]||(t[n]=Vu({...e,...r})),t[n],t[n]}}}const Nn=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof global<"u"?global:typeof window<"u"?window:{},Co="__unctx__",zu=Nn[Co]||(Nn[Co]=qu()),Ju=(e,t={})=>zu.get(e,t),Ro="__unctx_async_handlers__",qr=Nn[Ro]||(Nn[Ro]=new Set);function Gu(e){const t=[];for(const s of qr){const o=s();o&&t.push(o)}const n=()=>{for(const s of t)s()};let r=e();return r&&typeof r=="object"&&"catch"in r&&(r=r.catch(s=>{throw n(),s})),[r,n]}const Ca=Ju("nuxt-app"),Yu="__nuxt_plugin";function Xu(e){let t=0;const n={provide:void 0,globalName:"nuxt",versions:{get nuxt(){return"3.6.5"},get vue(){return n.vueApp.version}},payload:rt({data:{},state:{},_errors:{},...window.__NUXT__??{}}),static:{data:{}},runWithContext:s=>ed(n,s),isHydrating:!0,deferHydration(){if(!n.isHydrating)return()=>{};t++;let s=!1;return()=>{if(!s&&(s=!0,t--,t===0))return n.isHydrating=!1,n.callHook("app:suspense:resolve")}},_asyncDataPromises:{},_asyncData:{},_payloadRevivers:{},...e};n.hooks=Aa(),n.hook=n.hooks.hook,n.callHook=n.hooks.callHook,n.provide=(s,o)=>{const i="$"+s;vn(n,i,o),vn(n.vueApp.config.globalProperties,i,o)},vn(n.vueApp,"$nuxt",n),vn(n.vueApp.config.globalProperties,"$nuxt",n);{window.addEventListener("nuxt.preloadError",o=>{n.callHook("app:chunkError",{error:o.payload})}),window.useNuxtApp=window.useNuxtApp||de;const s=n.hook("app:error",(...o)=>{console.error("[nuxt] error caught during app initialization",...o)});n.hook("app:mounted",s)}const r=rt(n.payload.config);return n.provide("config",r),n}async function Zu(e,t){if(t.hooks&&e.hooks.addHooks(t.hooks),typeof t=="function"){const{provide:n}=await e.runWithContext(()=>t(e))||{};if(n&&typeof n=="object")for(const r in n)e.provide(r,n[r])}}async function Qu(e,t){const n=[],r=[];for(const s of t){const o=Zu(e,s);s.parallel?n.push(o.catch(i=>r.push(i))):await o}if(await Promise.all(n),r.length)throw r[0]}/*! @__NO_SIDE_EFFECTS__ */function jt(e){return typeof e=="function"?e:(delete e.name,Object.assign(e.setup||(()=>{}),e,{[Yu]:!0}))}function ed(e,t,n){const r=()=>n?t(...n):t();return Ca.set(e),e.vueApp.runWithContext(r)}/*! @__NO_SIDE_EFFECTS__ */function de(){var t;let e;if(Xi()&&(e=(t=Cs())==null?void 0:t.appContext.app.$nuxt),e=e||Ca.tryUse(),!e)throw new Error("[nuxt] instance unavailable");return e}/*! @__NO_SIDE_EFFECTS__ */function Bn(){return de().$config}function vn(e,t,n){Object.defineProperty(e,t,{get:()=>n})}const td="modulepreload",nd=function(e,t){return e.startsWith(".")?new URL(e,t).href:e},Ho={},rd=function(t,n,r){if(!n||n.length===0)return t();const s=document.getElementsByTagName("link");return Promise.all(n.map(o=>{if(o=nd(o,r),o in Ho)return;Ho[o]=!0;const i=o.endsWith(".css"),a=i?'[rel="stylesheet"]':"";if(!!r)for(let d=s.length-1;d>=0;d--){const u=s[d];if(u.href===o&&(!i||u.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${o}"]${a}`))return;const l=document.createElement("link");if(l.rel=i?"stylesheet":td,i||(l.as="script",l.crossOrigin=""),l.href=o,document.head.appendChild(l),i)return new Promise((d,u)=>{l.addEventListener("load",d),l.addEventListener("error",()=>u(new Error(`Unable to preload CSS for ${o}`)))})})).then(()=>t())},zr=(...e)=>rd(...e).catch(t=>{const n=new Event("nuxt.preloadError");throw n.payload=t,window.dispatchEvent(n),t}),sd=-1,od=-2,id=-3,ad=-4,cd=-5,ld=-6;function fd(e,t){return ud(JSON.parse(e),t)}function ud(e,t){if(typeof e=="number")return s(e,!0);if(!Array.isArray(e)||e.length===0)throw new Error("Invalid input");const n=e,r=Array(n.length);function s(o,i=!1){if(o===sd)return;if(o===id)return NaN;if(o===ad)return 1/0;if(o===cd)return-1/0;if(o===ld)return-0;if(i)throw new Error("Invalid input");if(o in r)return r[o];const a=n[o];if(!a||typeof a!="object")r[o]=a;else if(Array.isArray(a))if(typeof a[0]=="string"){const c=a[0],l=t==null?void 0:t[c];if(l)return r[o]=l(s(a[1]));switch(c){case"Date":r[o]=new Date(a[1]);break;case"Set":const d=new Set;r[o]=d;for(let y=1;y<a.length;y+=1)d.add(s(a[y]));break;case"Map":const u=new Map;r[o]=u;for(let y=1;y<a.length;y+=2)u.set(s(a[y]),s(a[y+1]));break;case"RegExp":r[o]=new RegExp(a[1],a[2]);break;case"Object":r[o]=Object(a[1]);break;case"BigInt":r[o]=BigInt(a[1]);break;case"null":const p=Object.create(null);r[o]=p;for(let y=1;y<a.length;y+=2)p[a[y]]=s(a[y+1]);break;default:throw new Error(`Unknown type ${c}`)}}else{const c=new Array(a.length);r[o]=c;for(let l=0;l<a.length;l+=1){const d=a[l];d!==od&&(c[l]=s(d))}}else{const c={};r[o]=c;for(const l in a){const d=a[l];c[l]=s(d)}}return r[o]}return s(0)}function dd(e){return Array.isArray(e)?e:[e]}const Ra=["title","script","style","noscript"],Ha=["base","meta","link","style","script","noscript"],hd=["title","titleTemplate","templateParams","base","htmlAttrs","bodyAttrs","meta","link","style","script","noscript"],pd=["base","title","titleTemplate","bodyAttrs","htmlAttrs","templateParams"],So=["tagPosition","tagPriority","tagDuplicateStrategy","innerHTML","textContent"];function Sa(e){let t=9;for(let n=0;n<e.length;)t=Math.imul(t^e.charCodeAt(n++),9**9);return((t^t>>>9)+65536).toString(16).substring(1,8).toLowerCase()}function Jr(e){return Sa(`${e.tag}:${e.textContent||e.innerHTML||""}:${Object.entries(e.props).map(([t,n])=>`${t}:${String(n)}`).join(",")}`)}function gd(e){let t=9;for(const n of e)for(let r=0;r<n.length;)t=Math.imul(t^n.charCodeAt(r++),9**9);return((t^t>>>9)+65536).toString(16).substring(1,8).toLowerCase()}function xa(e,t){const{props:n,tag:r}=e;if(pd.includes(r))return r;if(r==="link"&&n.rel==="canonical")return"canonical";if(n.charset)return"charset";const s=["id"];r==="meta"&&s.push("name","property","http-equiv");for(const o of s)if(typeof n[o]<"u"){const i=String(n[o]);return t&&!t(i)?!1:`${r}:${o}:${i}`}return!1}function xo(e,t){return e==null?t||null:typeof e=="function"?e(t):e}function En(e,t=!1,n){const{tag:r,$el:s}=e;s&&(Object.entries(r.props).forEach(([o,i])=>{i=String(i);const a=`attr:${o}`;if(o==="class"){if(!i)return;for(const c of i.split(" ")){const l=`${a}:${c}`;n&&n(e,l,()=>s.classList.remove(c)),s.classList.contains(c)||s.classList.add(c)}return}n&&!o.startsWith("data-h-")&&n(e,a,()=>s.removeAttribute(o)),(t||s.getAttribute(o)!==i)&&s.setAttribute(o,i)}),Ra.includes(r.tag)&&(r.textContent&&r.textContent!==s.textContent?s.textContent=r.textContent:r.innerHTML&&r.innerHTML!==s.innerHTML&&(s.innerHTML=r.innerHTML)))}let Wt=!1;async function md(e,t={}){var p,y;const n={shouldRender:!0};if(await e.hooks.callHook("dom:beforeRender",n),!n.shouldRender)return;const r=t.document||e.resolvedOptions.document||window.document,s=(await e.resolveTags()).map(a);if(e.resolvedOptions.experimentalHashHydration&&(Wt=Wt||e._hash||!1,Wt)){const g=gd(s.map(T=>T.tag._h));if(Wt===g)return;Wt=g}const o=e._popSideEffectQueue();e.headEntries().map(g=>g._sde).forEach(g=>{Object.entries(g).forEach(([T,D])=>{o[T]=D})});const i=(g,T,D)=>{T=`${g.renderId}:${T}`,g.entry&&(g.entry._sde[T]=D),delete o[T]};function a(g){const T=e.headEntries().find(_=>_._i===g._e),D={renderId:g._d||Jr(g),$el:null,shouldRender:!0,tag:g,entry:T,markSideEffect:(_,b)=>i(D,_,b)};return D}const c=[],l={body:[],head:[]},d=g=>{e._elMap[g.renderId]=g.$el,c.push(g),i(g,"el",()=>{var T;(T=g.$el)==null||T.remove(),delete e._elMap[g.renderId]})};for(const g of s){if(await e.hooks.callHook("dom:beforeRenderTag",g),!g.shouldRender)continue;const{tag:T}=g;if(T.tag==="title"){r.title=T.textContent||"",c.push(g);continue}if(T.tag==="htmlAttrs"||T.tag==="bodyAttrs"){g.$el=r[T.tag==="htmlAttrs"?"documentElement":"body"],En(g,!1,i),c.push(g);continue}if(g.$el=e._elMap[g.renderId],!g.$el&&T.key&&(g.$el=r.querySelector(`${(p=T.tagPosition)!=null&&p.startsWith("body")?"body":"head"} > ${T.tag}[data-h-${T._h}]`)),g.$el){g.tag._d&&En(g),d(g);continue}l[(y=T.tagPosition)!=null&&y.startsWith("body")?"body":"head"].push(g)}const u={bodyClose:void 0,bodyOpen:void 0,head:void 0};Object.entries(l).forEach(([g,T])=>{var _;if(!T.length)return;const D=(_=r==null?void 0:r[g])==null?void 0:_.children;if(D){for(const b of[...D].reverse()){const k=b.tagName.toLowerCase();if(!Ha.includes(k))continue;const I=b.getAttributeNames().reduce((S,j)=>({...S,[j]:b.getAttribute(j)}),{}),O={tag:k,props:I};b.innerHTML&&(O.innerHTML=b.innerHTML);const U=Jr(O);let B=T.findIndex(S=>(S==null?void 0:S.renderId)===U);if(B===-1){const S=xa(O);B=T.findIndex(j=>(j==null?void 0:j.tag._d)&&j.tag._d===S)}if(B!==-1){const S=T[B];S.$el=b,En(S),d(S),delete T[B]}}T.forEach(b=>{const k=b.tag.tagPosition||"head";u[k]=u[k]||r.createDocumentFragment(),b.$el||(b.$el=r.createElement(b.tag.tag),En(b,!0)),u[k].appendChild(b.$el),d(b)})}}),u.head&&r.head.appendChild(u.head),u.bodyOpen&&r.body.insertBefore(u.bodyOpen,r.body.firstChild),u.bodyClose&&r.body.appendChild(u.bodyClose);for(const g of c)await e.hooks.callHook("dom:renderTag",g);Object.values(o).forEach(g=>g())}let _r=null;async function yd(e,t={}){function n(){return _r=null,md(e,t)}const r=t.delayFn||(s=>setTimeout(s,10));return _r=_r||new Promise(s=>r(()=>s(n())))}function bd(e){return{hooks:{"entries:updated":function(t){if(typeof(e==null?void 0:e.document)>"u"&&typeof window>"u")return;let n=e==null?void 0:e.delayFn;!n&&typeof requestAnimationFrame<"u"&&(n=requestAnimationFrame),yd(t,{document:(e==null?void 0:e.document)||window.document,delayFn:n})}}}}function _d(e){var t;return((t=e==null?void 0:e.head.querySelector('meta[name="unhead:ssr"]'))==null?void 0:t.getAttribute("content"))||!1}const Oo={base:-1,title:1},Po={critical:-8,high:-1,low:2};function Ln(e){let t=10;const n=e.tagPriority;return typeof n=="number"?n:(e.tag==="meta"?(e.props.charset&&(t=-2),e.props["http-equiv"]==="content-security-policy"&&(t=0)):e.tag=="link"&&e.props.rel==="preconnect"?t=2:e.tag in Oo&&(t=Oo[e.tag]),typeof n=="string"&&n in Po?t+Po[n]:t)}const wd=[{prefix:"before:",offset:-1},{prefix:"after:",offset:1}];function vd(){return{hooks:{"tags:resolve":e=>{const t=n=>{var r;return(r=e.tags.find(s=>s._d===n))==null?void 0:r._p};for(const{prefix:n,offset:r}of wd)for(const s of e.tags.filter(o=>typeof o.tagPriority=="string"&&o.tagPriority.startsWith(n))){const o=t(s.tagPriority.replace(n,""));typeof o<"u"&&(s._p=o+r)}e.tags.sort((n,r)=>n._p-r._p).sort((n,r)=>Ln(n)-Ln(r))}}}}function Ed(){return{hooks:{"tags:resolve":e=>{const{tags:t}=e;let n=t.findIndex(s=>s.tag==="titleTemplate");const r=t.findIndex(s=>s.tag==="title");if(r!==-1&&n!==-1){const s=xo(t[n].textContent,t[r].textContent);s!==null?t[r].textContent=s||t[r].textContent:delete t[r]}else if(n!==-1){const s=xo(t[n].textContent);s!==null&&(t[n].textContent=s,t[n].tag="title",n=-1)}n!==-1&&delete t[n],e.tags=t.filter(Boolean)}}}}function Id(){return{hooks:{"tag:normalise":function({tag:e}){typeof e.props.body<"u"&&(e.tagPosition="bodyClose",delete e.props.body)}}}}const Td=["link","style","script","noscript"];function Ad(){return{hooks:{"tag:normalise":({tag:e,resolvedOptions:t})=>{t.experimentalHashHydration===!0&&(e._h=Jr(e)),e.key&&Td.includes(e.tag)&&(e._h=Sa(e.key),e.props[`data-h-${e._h}`]="")}}}}const $o=["script","link","bodyAttrs"];function Cd(){const e=(t,n)=>{const r={},s={};Object.entries(n.props).forEach(([i,a])=>{i.startsWith("on")&&typeof a=="function"?s[i]=a:r[i]=a});let o;return t==="dom"&&n.tag==="script"&&typeof r.src=="string"&&typeof s.onload<"u"&&(o=r.src,delete r.src),{props:r,eventHandlers:s,delayedSrc:o}};return{hooks:{"ssr:render":function(t){t.tags=t.tags.map(n=>(!$o.includes(n.tag)||!Object.entries(n.props).find(([r,s])=>r.startsWith("on")&&typeof s=="function")||(n.props=e("ssr",n).props),n))},"dom:beforeRenderTag":function(t){if(!$o.includes(t.tag.tag)||!Object.entries(t.tag.props).find(([o,i])=>o.startsWith("on")&&typeof i=="function"))return;const{props:n,eventHandlers:r,delayedSrc:s}=e("dom",t.tag);Object.keys(r).length&&(t.tag.props=n,t.tag._eventHandlers=r,t.tag._delayedSrc=s)},"dom:renderTag":function(t){const n=t.$el;if(!t.tag._eventHandlers||!n)return;const r=t.tag.tag==="bodyAttrs"&&typeof window<"u"?window:n;Object.entries(t.tag._eventHandlers).forEach(([s,o])=>{const i=`${t.tag._d||t.tag._p}:${s}`,a=s.slice(2).toLowerCase(),c=`data-h-${a}`;if(t.markSideEffect(i,()=>{}),n.hasAttribute(c))return;const l=o;n.setAttribute(c,""),r.addEventListener(a,l),t.entry&&(t.entry._sde[i]=()=>{r.removeEventListener(a,l),n.removeAttribute(c)})}),t.tag._delayedSrc&&n.setAttribute("src",t.tag._delayedSrc)}}}}const Rd=["templateParams","htmlAttrs","bodyAttrs"];function Hd(){return{hooks:{"tag:normalise":function({tag:e}){["hid","vmid","key"].forEach(r=>{e.props[r]&&(e.key=e.props[r],delete e.props[r])});const n=xa(e)||(e.key?`${e.tag}:${e.key}`:!1);n&&(e._d=n)},"tags:resolve":function(e){const t={};e.tags.forEach(r=>{const s=(r.key?`${r.tag}:${r.key}`:r._d)||r._p,o=t[s];if(o){let a=r==null?void 0:r.tagDuplicateStrategy;if(!a&&Rd.includes(r.tag)&&(a="merge"),a==="merge"){const c=o.props;["class","style"].forEach(l=>{r.props[l]&&c[l]&&(l==="style"&&!c[l].endsWith(";")&&(c[l]+=";"),r.props[l]=`${c[l]} ${r.props[l]}`)}),t[s].props={...c,...r.props};return}else if(r._e===o._e){o._duped=o._duped||[],r._d=`${o._d}:${o._duped.length+1}`,o._duped.push(r);return}else if(Ln(r)>Ln(o))return}const i=Object.keys(r.props).length+(r.innerHTML?1:0)+(r.textContent?1:0);if(Ha.includes(r.tag)&&i===0){delete t[s];return}t[s]=r});const n=[];Object.values(t).forEach(r=>{const s=r._duped;delete r._duped,n.push(r),s&&n.push(...s)}),e.tags=n}}}}function Kt(e,t){if(typeof e!="string")return e;function n(i){if(["s","pageTitle"].includes(i))return t.pageTitle;let a;return i.includes(".")?a=i.split(".").reduce((c,l)=>c&&c[l]||void 0,t):a=t[i],typeof a<"u"?a||"":!1}let r=e;try{r=decodeURI(e)}catch{}(r.match(/%(\w+\.+\w+)|%(\w+)/g)||[]).sort().reverse().forEach(i=>{const a=n(i.slice(1));typeof a=="string"&&(e=e.replace(new RegExp(`\\${i}(\\W|$)`,"g"),(c,l)=>`${a}${l}`).trim())});const o=t.separator;return e.includes(o)&&(e.endsWith(o)&&(e=e.slice(0,-o.length).trim()),e.startsWith(o)&&(e=e.slice(o.length).trim()),e=e.replace(new RegExp(`\\${o}\\s*\\${o}`,"g"),o)),e}function Sd(){return{hooks:{"tags:resolve":e=>{var o;const{tags:t}=e,n=(o=t.find(i=>i.tag==="title"))==null?void 0:o.textContent,r=t.findIndex(i=>i.tag==="templateParams"),s=r!==-1?t[r].props:{};s.separator=s.separator||"|",s.pageTitle=Kt(s.pageTitle||n||"",s);for(const i of t)if(["titleTemplate","title"].includes(i.tag)&&typeof i.textContent=="string")i.textContent=Kt(i.textContent,s);else if(i.tag==="meta"&&typeof i.props.content=="string")i.props.content=Kt(i.props.content,s);else if(i.tag==="link"&&typeof i.props.href=="string")i.props.href=Kt(i.props.href,s);else if(i.tag==="script"&&["application/json","application/ld+json"].includes(i.props.type)&&typeof i.innerHTML=="string")try{i.innerHTML=JSON.stringify(JSON.parse(i.innerHTML),(a,c)=>typeof c=="string"?Kt(c,s):c)}catch{}e.tags=t.filter(i=>i.tag!=="templateParams")}}}}const xd=typeof window<"u";let Oa;function Od(e){return Oa=e}function Pd(){return Oa}async function $d(e,t,n){const r={tag:e,props:{}};return t instanceof Promise&&(t=await t),e==="templateParams"?(r.props=t,r):["title","titleTemplate"].includes(e)?(t&&typeof t=="object"?(r.textContent=t.textContent,t.tagPriority&&(r.tagPriority=t.tagPriority)):r.textContent=t,r):typeof t=="string"?["script","noscript","style"].includes(e)?(e==="script"&&(/^(https?:)?\/\//.test(t)||t.startsWith("/"))?r.props.src=t:r.innerHTML=t,r):!1:(r.props=await Md(e,{...t}),r.props.children&&(r.props.innerHTML=r.props.children),delete r.props.children,Object.keys(r.props).filter(s=>So.includes(s)).forEach(s=>{(!["innerHTML","textContent"].includes(s)||Ra.includes(r.tag))&&(r[s]=r.props[s]),delete r.props[s]}),So.forEach(s=>{!r[s]&&n[s]&&(r[s]=n[s])}),["innerHTML","textContent"].forEach(s=>{if(r.tag==="script"&&typeof r[s]=="string"&&["application/ld+json","application/json"].includes(r.props.type))try{r[s]=JSON.parse(r[s])}catch{r[s]=""}typeof r[s]=="object"&&(r[s]=JSON.stringify(r[s]))}),r.props.class&&(r.props.class=kd(r.props.class)),r.props.content&&Array.isArray(r.props.content)?r.props.content.map(s=>({...r,props:{...r.props,content:s}})):r)}function kd(e){return typeof e=="object"&&!Array.isArray(e)&&(e=Object.keys(e).filter(t=>e[t])),(Array.isArray(e)?e.join(" "):e).split(" ").filter(t=>t.trim()).filter(Boolean).join(" ")}async function Md(e,t){for(const n of Object.keys(t)){const r=n.startsWith("data-");t[n]instanceof Promise&&(t[n]=await t[n]),String(t[n])==="true"?t[n]=r?"true":"":String(t[n])==="false"&&(r?t[n]="false":delete t[n])}return t}const Dd=10;async function Nd(e){const t=[];return Object.entries(e.resolvedInput).filter(([n,r])=>typeof r<"u"&&hd.includes(n)).forEach(([n,r])=>{const s=dd(r);t.push(...s.map(o=>$d(n,o,e)).flat())}),(await Promise.all(t)).flat().filter(Boolean).map((n,r)=>(n._e=e._i,n._p=(e._i<<Dd)+r,n))}function Bd(){return[Hd(),vd(),Sd(),Ed(),Ad(),Cd(),Id()]}function Ld(e={}){return[bd({document:e==null?void 0:e.document,delayFn:e==null?void 0:e.domDelayFn})]}function Fd(e={}){const t=jd({...e,plugins:[...Ld(e),...(e==null?void 0:e.plugins)||[]]});return e.experimentalHashHydration&&t.resolvedOptions.document&&(t._hash=_d(t.resolvedOptions.document)),Od(t),t}function jd(e={}){let t=[],n={},r=0;const s=Aa();e!=null&&e.hooks&&s.addHooks(e.hooks),e.plugins=[...Bd(),...(e==null?void 0:e.plugins)||[]],e.plugins.forEach(a=>a.hooks&&s.addHooks(a.hooks)),e.document=e.document||(xd?document:void 0);const o=()=>s.callHook("entries:updated",i),i={resolvedOptions:e,headEntries(){return t},get hooks(){return s},use(a){a.hooks&&s.addHooks(a.hooks)},push(a,c){const l={_i:r++,input:a,_sde:{},...c},d=(l==null?void 0:l.mode)||e.mode;return d&&(l.mode=d),t.push(l),o(),{dispose(){t=t.filter(u=>u._i!==l._i?!0:(n={...n,...u._sde||{}},u._sde={},o(),!1))},patch(u){t=t.map(p=>(p._i===l._i&&(l.input=p.input=u,o()),p))}}},async resolveTags(){const a={tags:[],entries:[...t]};await s.callHook("entries:resolve",a);for(const c of a.entries){const l=c.resolvedInput||c.input;if(c.resolvedInput=await(c.transform?c.transform(l):l),c.resolvedInput)for(const d of await Nd(c)){const u={tag:d,entry:c,resolvedOptions:i.resolvedOptions};await s.callHook("tag:normalise",u),a.tags.push(u.tag)}}return await s.callHook("tags:beforeResolve",a),await s.callHook("tags:resolve",a),a.tags},_popSideEffectQueue(){const a={...n};return n={},a},_elMap:{}};return i.hooks.callHook("init",i),i}function Ud(e){return typeof e=="function"?e():K(e)}function Fn(e,t=""){if(e instanceof Promise)return e;const n=Ud(e);return!e||!n?n:Array.isArray(n)?n.map(r=>Fn(r,t)):typeof n=="object"?Object.fromEntries(Object.entries(n).map(([r,s])=>r==="titleTemplate"||r.startsWith("on")?[r,K(s)]:[r,Fn(s,r)])):n}const Wd=da.startsWith("3"),Kd=typeof window<"u",Pa="usehead";function xs(){return Cs()&&St(Pa)||Pd()}function Vd(e){return{install(n){Wd&&(n.config.globalProperties.$unhead=e,n.config.globalProperties.$head=e,n.provide(Pa,e))}}.install}function qd(e={}){const t=Fd({...e,domDelayFn:n=>setTimeout(()=>Yn(()=>n()),10),plugins:[zd(),...(e==null?void 0:e.plugins)||[]]});return t.install=Vd(t),t}function zd(){return{hooks:{"entries:resolve":function(e){for(const t of e.entries)t.resolvedInput=Fn(t.input)}}}}function Jd(e,t={}){const n=xs(),r=he(!1),s=he({});Bl(()=>{s.value=r.value?{}:Fn(e)});const o=n.push(s.value,t);return Jt(s,a=>{o.patch(a)}),Cs()&&(Ui(()=>{o.dispose()}),Fi(()=>{r.value=!0}),Li(()=>{r.value=!1})),o}function Gd(e,t={}){return xs().push(e,t)}function Ym(e,t={}){var r;const n=xs();if(n){const s=Kd||!!((r=n.resolvedOptions)!=null&&r.document);return t.mode==="server"&&s||t.mode==="client"&&!s?void 0:s?Jd(e,t):Gd(e,t)}}const Yd={meta:[{name:"viewport",content:"width=device-width, initial-scale=1"},{charset:"utf-8"}],link:[],style:[],script:[],noscript:[]},Xd="__nuxt",Zd=!0;function ko(e,t={}){const n=Qd(e,t),r=de(),s=r._payloadCache=r._payloadCache||{};return s[n]||(s[n]=$a(n).then(o=>o||(delete s[n],null))),s[n]}const Mo="json";function Qd(e,t={}){const n=new URL(e,"http://localhost");if(n.search)throw new Error("Payload URL cannot contain search params: "+e);if(n.host!=="localhost"||nr(n.pathname,{acceptRelative:!0}))throw new Error("Payload URL must not include hostname: "+e);const r=t.hash||(t.fresh?Date.now():"");return Ft(Bn().app.baseURL,n.pathname,r?`_payload.${r}.${Mo}`:`_payload.${Mo}`)}async function $a(e){try{return Zd?ka(await fetch(e).then(t=>t.text())):await zr(()=>import(e),[],import.meta.url).then(t=>t.default||t)}catch(t){console.warn("[nuxt] Cannot load payload ",e,t)}return null}function eh(){return!!de().payload.prerenderedAt}let In=null;async function th(){if(In)return In;const e=document.getElementById("__NUXT_DATA__");if(!e)return{};const t=ka(e.textContent||""),n=e.dataset.src?await $a(e.dataset.src):void 0;return In={...t,...n,...window.__NUXT__},In}function ka(e){return fd(e,de()._payloadRevivers)}function nh(e,t){de()._payloadRevivers[e]=t}class Gr extends Error{constructor(){super(...arguments),this.statusCode=500,this.fatal=!1,this.unhandled=!1}toJSON(){const t={message:this.message,statusCode:Yr(this.statusCode,500)};return this.statusMessage&&(t.statusMessage=Ma(this.statusMessage)),this.data!==void 0&&(t.data=this.data),t}}Gr.__h3_error__=!0;function rh(e){if(typeof e=="string")return new Gr(e);if(sh(e))return e;const t=new Gr(e.message??e.statusMessage??"",e.cause?{cause:e.cause}:void 0);if("stack"in e)try{Object.defineProperty(t,"stack",{get(){return e.stack}})}catch{try{t.stack=e.stack}catch{}}if(e.data&&(t.data=e.data),e.statusCode?t.statusCode=Yr(e.statusCode,t.statusCode):e.status&&(t.statusCode=Yr(e.status,t.statusCode)),e.statusMessage?t.statusMessage=e.statusMessage:e.statusText&&(t.statusMessage=e.statusText),t.statusMessage){const n=t.statusMessage;Ma(t.statusMessage)!==n&&console.warn("[h3] Please prefer using `message` for longer error messages instead of `statusMessage`. In the future, `statusMessage` will be sanitized by default.")}return e.fatal!==void 0&&(t.fatal=e.fatal),e.unhandled!==void 0&&(t.unhandled=e.unhandled),t}function sh(e){var t;return((t=e==null?void 0:e.constructor)==null?void 0:t.__h3_error__)===!0}const oh=/[^\u0009\u0020-\u007E]/g;function Ma(e=""){return e.replace(oh,"")}function Yr(e,t=200){return!e||(typeof e=="string"&&(e=Number.parseInt(e,10)),e<100||e>999)?t:e}const ih="$s";function ah(...e){const t=typeof e[e.length-1]=="string"?e.pop():void 0;typeof e[0]!="string"&&e.unshift(t);const[n,r]=e;if(!n||typeof n!="string")throw new TypeError("[nuxt] [useState] key must be a string: "+n);if(r!==void 0&&typeof r!="function")throw new Error("[nuxt] [useState] init must be a function: "+r);const s=ih+n,o=de(),i=xi(o.payload.state,s);if(i.value===void 0&&r){const a=r();if(fe(a))return o.payload.state[s]=a,a;i.value=a}return i}const Da=Symbol("route"),rr=()=>{var e;return(e=de())==null?void 0:e.$router},ch=()=>Xi()?St(Da,de()._route):de()._route,lh=()=>{try{if(de()._processingMiddleware)return!0}catch{return!0}return!1},fh=(e,t)=>{e||(e="/");const n=typeof e=="string"?e:ba(e.path||"/",e.query||{})+(e.hash||"");if(t!=null&&t.open){{const{target:a="_blank",windowFeatures:c={}}=t.open,l=Object.entries(c).filter(([d,u])=>u!==void 0).map(([d,u])=>`${d.toLowerCase()}=${u}`).join(", ");open(n,a,l)}return Promise.resolve()}const r=(t==null?void 0:t.external)||nr(n,{acceptRelative:!0});if(r&&!(t!=null&&t.external))throw new Error("Navigating to external URL is not allowed by default. Use `navigateTo (url, { external: true })`.");if(r&&fn(n).protocol==="script:")throw new Error("Cannot navigate to an URL with script protocol.");const s=lh();if(!r&&s)return e;const o=rr(),i=de();return r?(t!=null&&t.replace?location.replace(n):location.href=n,s?i.isHydrating?new Promise(()=>{}):!1:Promise.resolve()):t!=null&&t.replace?o.replace(e):o.push(e)},Os=()=>xi(de().payload,"error"),uh=e=>{const t=Na(e);try{const n=de(),r=Os();n.hooks.callHook("app:error",t),r.value=r.value||t}catch{throw t}return t},dh=async(e={})=>{const t=de(),n=Os();t.callHook("app:error:cleared",e),e.redirect&&await rr().replace(e.redirect),n.value=null},hh=e=>!!(e&&typeof e=="object"&&"__nuxt_error"in e),Na=e=>{const t=rh(e);return t.__nuxt_error=!0,t},Do={NuxtError:e=>Na(e),EmptyShallowRef:e=>Zs(e==="_"?void 0:e==="0n"?BigInt(0):JSON.parse(e)),EmptyRef:e=>he(e==="_"?void 0:e==="0n"?BigInt(0):JSON.parse(e)),ShallowRef:e=>Zs(e),ShallowReactive:e=>Ei(e),Ref:e=>he(e),Reactive:e=>rt(e)},ph=jt({name:"nuxt:revive-payload:client",order:-30,async setup(e){let t,n;for(const r in Do)nh(r,Do[r]);Object.assign(e.payload,([t,n]=Gu(()=>e.runWithContext(th)),t=await t,n(),t)),window.__NUXT__=e.payload}}),gh=[];function wr(e){typeof e=="object"&&(e=wa({pathname:e.path||"",search:ma(e.query||{}),hash:e.hash||""}));const t=fn(e.toString());return{path:t.pathname,fullPath:e,query:ga(t.search),hash:t.hash,params:{},name:void 0,matched:[],redirectedFrom:void 0,meta:{},href:e}}const mh=jt({name:"nuxt:router",enforce:"pre",setup(e){const t=_u(window.location.pathname,Bn().app.baseURL)+window.location.search+window.location.hash,n=[],r={"navigate:before":[],"resolve:before":[],"navigate:after":[],error:[]},s=(d,u)=>(r[d].push(u),()=>r[d].splice(r[d].indexOf(u),1)),o=Bn().app.baseURL,i=rt(wr(t));async function a(d,u){try{const p=wr(d);for(const y of r["navigate:before"]){const g=await y(p,i);if(g===!1||g instanceof Error)return;if(g)return a(g,!0)}for(const y of r["resolve:before"])await y(p,i);Object.assign(i,p),window.history[u?"replaceState":"pushState"]({},"",Ft(o,p.fullPath)),e.isHydrating||await e.runWithContext(dh);for(const y of r["navigate:after"])await y(p,i)}catch(p){for(const y of r.error)await y(p)}}const c={currentRoute:i,isReady:()=>Promise.resolve(),options:{},install:()=>Promise.resolve(),push:d=>a(d,!1),replace:d=>a(d,!0),back:()=>window.history.go(-1),go:d=>window.history.go(d),forward:()=>window.history.go(1),beforeResolve:d=>s("resolve:before",d),beforeEach:d=>s("navigate:before",d),afterEach:d=>s("navigate:after",d),onError:d=>s("error",d),resolve:wr,addRoute:(d,u)=>{n.push(u)},getRoutes:()=>n,hasRoute:d=>n.some(u=>u.name===d),removeRoute:d=>{const u=n.findIndex(p=>p.name===d);u!==-1&&n.splice(u,1)}};e.vueApp.component("RouterLink",{functional:!0,props:{to:String,custom:Boolean,replace:Boolean,activeClass:String,exactActiveClass:String,ariaCurrentValue:String},setup:(d,{slots:u})=>{const p=()=>a(d.to,d.replace);return()=>{var g;const y=c.resolve(d.to);return d.custom?(g=u.default)==null?void 0:g.call(u,{href:d.to,navigate:p,route:y}):Cf("a",{href:d.to,onClick:T=>(T.preventDefault(),p())},u)}}}),window.addEventListener("popstate",d=>{const u=d.target.location;c.replace(u.href.replace(u.origin,""))}),e._route=i,e._middleware=e._middleware||{global:[],named:{}};const l=ah("_layout");return e.hooks.hookOnce("app:created",async()=>{c.beforeEach(async(d,u)=>{d.meta=rt(d.meta||{}),e.isHydrating&&l.value&&!pt(d.meta.layout)&&(d.meta.layout=l.value),e._processingMiddleware=!0;{const p=new Set([...gh,...e._middleware.global]);for(const y of p){const g=await e.runWithContext(()=>y(d,u));if(g||g===!1)return g}}}),c.afterEach(()=>{delete e._processingMiddleware}),await c.replace(t),Eu(i.fullPath,t)||await e.runWithContext(()=>fh(i.fullPath))}),{provide:{route:i,router:c}}}}),yh=jt({name:"nuxt:payload",setup(e){eh()&&(e.hooks.hook("link:prefetch",async t=>{fn(t).protocol||await ko(t)}),rr().beforeResolve(async(t,n)=>{if(t.path===n.path)return;const r=await ko(t.path);r&&Object.assign(e.static.data,r.data)}))}}),bh=jt({name:"nuxt:global-components"}),_h=jt({name:"nuxt:head",setup(e){const n=qd();n.push(Yd),e.vueApp.use(n);{let r=!0;const s=()=>{r=!1,n.hooks.callHook("entries:updated",n)};n.hooks.hook("dom:beforeRender",o=>{o.shouldRender=!r}),e.hooks.hook("page:start",()=>{r=!0}),e.hooks.hook("page:finish",s),e.hooks.hook("app:suspense:resolve",s)}}});function wh(e={}){const t=e.path||window.location.pathname;let n={};try{n=JSON.parse(sessionStorage.getItem("nuxt:reload")||"{}")}catch{}if(e.force||(n==null?void 0:n.path)!==t||(n==null?void 0:n.expires)<Date.now()){try{sessionStorage.setItem("nuxt:reload",JSON.stringify({path:t,expires:Date.now()+(e.ttl??1e4)}))}catch{}if(e.persistState)try{sessionStorage.setItem("nuxt:reload:state",JSON.stringify({state:de().payload.state}))}catch{}window.location.pathname!==t?window.location.href=t:window.location.reload()}}const vh=jt({name:"nuxt:chunk-reload",setup(e){const t=rr(),n=Bn(),r=new Set;t.beforeEach(()=>{r.clear()}),e.hook("app:chunkError",({error:s})=>{r.add(s)}),t.onError((s,o)=>{if(r.has(s)){const a="href"in o&&o.href.startsWith("#")?n.app.baseURL+o.href:Ft(n.app.baseURL,o.fullPath);wh({path:a,persistState:!0})}})}}),Eh=[ph,mh,yh,bh,_h,vh],Ih={class:"text-center"},Th=["textContent"],Ah={class:"btn-group"},Ch=Lt({__name:"Problem",props:{problem:{}},emits:["answer"],setup(e,{emit:t}){const n=e;return(r,s)=>(ae(),Xe("div",Ih,[X("div",{class:"h1",textContent:Be(n.problem)},null,8,Th),X("div",Ah,[X("button",{class:"btn btn-outline-primary",onClick:s[0]||(s[0]=o=>t("answer",!1))},"X"),X("button",{class:"btn btn-primary",onClick:s[1]||(s[1]=o=>t("answer",!0))},"O")])]))}}),Rh={class:"text-center"},Hh=["textContent"],Sh={class:"h2"},xh={class:"h2"},Oh={class:"h2"},Ph=Lt({__name:"ProblemResult",props:{problem:{},userAnswer:{type:Boolean},correctAnswer:{type:Boolean}},emits:["next"],setup(e,{emit:t}){const n=e;return(r,s)=>(ae(),Xe("div",Rh,[X("div",{class:"h1",textContent:Be(n.problem)},null,8,Hh),X("div",Sh,"あなたの回答 : "+Be(r.userAnswer?"O":"X"),1),X("div",xh,"正しい回答 : "+Be(r.correctAnswer?"O":"X"),1),X("div",Oh,"正誤 : "+Be(r.userAnswer===r.correctAnswer?"正":"誤"),1),X("button",{class:"btn btn-primary",onClick:s[0]||(s[0]=o=>t("next"))},"次へ")]))}}),$h={class:"text-center"},kh={class:"table table-striped table-responsive"},Mh=X("thead",null,[X("tr",null,[X("th",null,"問題"),X("th",null,"あなた"),X("th",null,"正解"),X("th",null,"正誤")])],-1),Dh=Lt({__name:"Result",props:{result:{}},emits:["next"],setup(e,{emit:t}){return(n,r)=>(ae(),Xe("div",$h,[X("table",kh,[Mh,X("tbody",null,[(ae(!0),Xe(Ee,null,zi(n.result,s=>(ae(),Xe("tr",null,[X("th",null,Be(s.problem),1),X("th",null,Be(s.userAnswer?"O":"X"),1),X("th",null,Be(s.correctAnswer?"O":"X"),1),X("th",null,Be(s.userAnswer===s.correctAnswer?"正":"誤"),1)]))),256))])]),X("button",{class:"btn btn-primary",onClick:r[0]||(r[0]=s=>t("next"))},"次へ")]))}}),Nh=Lt({__name:"Session",props:{data:{}},setup(e){const n=e.data,r=he(!1),s=he(!1),o=he(!1);let i,a,c=he([]);const l=he(!1),d=he({problem:"",answer:!1}),p=n.split(`
`).map(y=>y.split(","));return(async()=>{for(;;){const g=[];for(var y=0;y<5;y++){const T=p[Math.floor(Math.random()*p.length)];d.value={problem:T[0],answer:T[1]==="○"},r.value=!0,await new Promise(D=>{i=_=>{l.value=_,D()}}),r.value=!1,s.value=!0,await new Promise(D=>{a=()=>{D()}}),s.value=!1,g.push({problem:d.value.problem,userAnswer:l.value,correctAnswer:d.value.answer})}await new Promise(T=>{c.value=g,o.value=!0,a=()=>T()}),o.value=!1}})(),(y,g)=>{const T=Ch,D=Ph,_=Dh;return ae(),Xe("div",null,[K(r)?(ae(),Oe(T,{key:0,problem:K(d).problem,onAnswer:g[0]||(g[0]=b=>K(i)&&K(i)(b))},null,8,["problem"])):Cn("",!0),K(s)?(ae(),Oe(D,{key:1,problem:K(d).problem,userAnswer:K(l),correctAnswer:K(d).answer,onNext:g[1]||(g[1]=b=>K(a)&&K(a)())},null,8,["problem","userAnswer","correctAnswer"])):Cn("",!0),K(o)?(ae(),Oe(_,{key:2,result:K(c),onNext:g[2]||(g[2]=b=>K(a)&&K(a)())},null,8,["result"])):Cn("",!0)])}}}),No=`\uFEFF25-1-1 空気と混合する可燃性ガス濃度を変えて、燃焼速度を測ると、爆発下限界から単調に増加し、爆発上限界で最も大きくなる。,×
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
"相当大きい破断口から液体が漏えいする場合、漏えい量は流出係数、破断口の断面積、破断
口にかかる内外圧力差に比例する。",×
"フランジ継手からの漏えいを防止するためには、内圧が作用してもガスケットには最小必要
圧縮力が残る必要がある。",○
オイルフィルムシールは、水素ガスのように大気中へのガス漏れが許されない遠心圧縮機の軸封装置には用いられない。,×
"遠心ポンプのメカニカルシールは、端面密封方式であり、しゅう動面（シール端面）は摩耗
するので一方をカーボン、他方に超硬合金を採用した。",○
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
`,Bh=`abc,def
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
 */const Ba=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let s=e.charCodeAt(r);s<128?t[n++]=s:s<2048?(t[n++]=s>>6|192,t[n++]=s&63|128):(s&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=s>>18|240,t[n++]=s>>12&63|128,t[n++]=s>>6&63|128,t[n++]=s&63|128):(t[n++]=s>>12|224,t[n++]=s>>6&63|128,t[n++]=s&63|128)}return t},Lh=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const s=e[n++];if(s<128)t[r++]=String.fromCharCode(s);else if(s>191&&s<224){const o=e[n++];t[r++]=String.fromCharCode((s&31)<<6|o&63)}else if(s>239&&s<365){const o=e[n++],i=e[n++],a=e[n++],c=((s&7)<<18|(o&63)<<12|(i&63)<<6|a&63)-65536;t[r++]=String.fromCharCode(55296+(c>>10)),t[r++]=String.fromCharCode(56320+(c&1023))}else{const o=e[n++],i=e[n++];t[r++]=String.fromCharCode((s&15)<<12|(o&63)<<6|i&63)}}return t.join("")},La={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<e.length;s+=3){const o=e[s],i=s+1<e.length,a=i?e[s+1]:0,c=s+2<e.length,l=c?e[s+2]:0,d=o>>2,u=(o&3)<<4|a>>4;let p=(a&15)<<2|l>>6,y=l&63;c||(y=64,i||(p=64)),r.push(n[d],n[u],n[p],n[y])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(Ba(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):Lh(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<e.length;){const o=n[e.charAt(s++)],a=s<e.length?n[e.charAt(s)]:0;++s;const l=s<e.length?n[e.charAt(s)]:64;++s;const u=s<e.length?n[e.charAt(s)]:64;if(++s,o==null||a==null||l==null||u==null)throw new Fh;const p=o<<2|a>>4;if(r.push(p),l!==64){const y=a<<4&240|l>>2;if(r.push(y),u!==64){const g=l<<6&192|u;r.push(g)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class Fh extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const jh=function(e){const t=Ba(e);return La.encodeByteArray(t,!0)},Fa=function(e){return jh(e).replace(/\./g,"")},Uh=function(e){try{return La.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function Wh(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Kh=()=>Wh().__FIREBASE_DEFAULTS__,Vh=()=>{if(typeof process>"u"||typeof process.env>"u")return;const e={}.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},qh=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&Uh(e[1]);return t&&JSON.parse(t)},zh=()=>{try{return Kh()||Vh()||qh()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},ja=()=>{var e;return(e=zh())===null||e===void 0?void 0:e.config};/**
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
 */class Jh{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}function Gh(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function Ua(){try{return typeof indexedDB=="object"}catch{return!1}}function Wa(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var o;t(((o=s.error)===null||o===void 0?void 0:o.message)||"")}}catch(n){t(n)}})}function Yh(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const Xh="FirebaseError";class _t extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=Xh,Object.setPrototypeOf(this,_t.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,sr.prototype.create)}}class sr{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},s=`${this.service}/${t}`,o=this.errors[t],i=o?Zh(o,r):"Error",a=`${this.serviceName}: ${i} (${s}).`;return new _t(s,a,r)}}function Zh(e,t){return e.replace(Qh,(n,r)=>{const s=t[r];return s!=null?String(s):`<${r}?>`})}const Qh=/\{\$([^}]+)}/g;function jn(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const s of n){if(!r.includes(s))return!1;const o=e[s],i=t[s];if(Bo(o)&&Bo(i)){if(!jn(o,i))return!1}else if(o!==i)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Bo(e){return e!==null&&typeof e=="object"}/**
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
 */const ep=1e3,tp=2,np=4*60*60*1e3,rp=.5;function Lo(e,t=ep,n=tp){const r=t*Math.pow(n,e),s=Math.round(rp*r*(Math.random()-.5)*2);return Math.min(np,r+s)}/**
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
 */class sp{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new Jh;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),s=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(s)return null;throw o}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(ip(t))try{this.getOrInitializeService({instanceIdentifier:ct})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const o=this.getOrInitializeService({instanceIdentifier:s});r.resolve(o)}catch{}}}}clearInstance(t=ct){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=ct){return this.instances.has(t)}getOptions(t=ct){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[o,i]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(o);r===a&&i.resolve(s)}return s}onInit(t,n){var r;const s=this.normalizeInstanceIdentifier(n),o=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;o.add(t),this.onInitCallbacks.set(s,o);const i=this.instances.get(s);return i&&t(i,s),()=>{o.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:op(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=ct){return this.component?this.component.multipleInstances?t:ct:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function op(e){return e===ct?void 0:e}function ip(e){return e.instantiationMode==="EAGER"}/**
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
 */class ap{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new sp(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var te;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(te||(te={}));const cp={debug:te.DEBUG,verbose:te.VERBOSE,info:te.INFO,warn:te.WARN,error:te.ERROR,silent:te.SILENT},lp=te.INFO,fp={[te.DEBUG]:"log",[te.VERBOSE]:"log",[te.INFO]:"info",[te.WARN]:"warn",[te.ERROR]:"error"},up=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),s=fp[t];if(s)console[s](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Va{constructor(t){this.name=t,this._logLevel=lp,this._logHandler=up,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in te))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?cp[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,te.DEBUG,...t),this._logHandler(this,te.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,te.VERBOSE,...t),this._logHandler(this,te.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,te.INFO,...t),this._logHandler(this,te.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,te.WARN,...t),this._logHandler(this,te.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,te.ERROR,...t),this._logHandler(this,te.ERROR,...t)}}const dp=(e,t)=>t.some(n=>e instanceof n);let Fo,jo;function hp(){return Fo||(Fo=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function pp(){return jo||(jo=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const qa=new WeakMap,Xr=new WeakMap,za=new WeakMap,vr=new WeakMap,Ps=new WeakMap;function gp(e){const t=new Promise((n,r)=>{const s=()=>{e.removeEventListener("success",o),e.removeEventListener("error",i)},o=()=>{n(Ze(e.result)),s()},i=()=>{r(e.error),s()};e.addEventListener("success",o),e.addEventListener("error",i)});return t.then(n=>{n instanceof IDBCursor&&qa.set(n,e)}).catch(()=>{}),Ps.set(t,e),t}function mp(e){if(Xr.has(e))return;const t=new Promise((n,r)=>{const s=()=>{e.removeEventListener("complete",o),e.removeEventListener("error",i),e.removeEventListener("abort",i)},o=()=>{n(),s()},i=()=>{r(e.error||new DOMException("AbortError","AbortError")),s()};e.addEventListener("complete",o),e.addEventListener("error",i),e.addEventListener("abort",i)});Xr.set(e,t)}let Zr={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return Xr.get(e);if(t==="objectStoreNames")return e.objectStoreNames||za.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Ze(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function yp(e){Zr=e(Zr)}function bp(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(Er(this),t,...n);return za.set(r,t.sort?t.sort():[t]),Ze(r)}:pp().includes(e)?function(...t){return e.apply(Er(this),t),Ze(qa.get(this))}:function(...t){return Ze(e.apply(Er(this),t))}}function _p(e){return typeof e=="function"?bp(e):(e instanceof IDBTransaction&&mp(e),dp(e,hp())?new Proxy(e,Zr):e)}function Ze(e){if(e instanceof IDBRequest)return gp(e);if(vr.has(e))return vr.get(e);const t=_p(e);return t!==e&&(vr.set(e,t),Ps.set(t,e)),t}const Er=e=>Ps.get(e);function wp(e,t,{blocked:n,upgrade:r,blocking:s,terminated:o}={}){const i=indexedDB.open(e,t),a=Ze(i);return r&&i.addEventListener("upgradeneeded",c=>{r(Ze(i.result),c.oldVersion,c.newVersion,Ze(i.transaction),c)}),n&&i.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),a.then(c=>{o&&c.addEventListener("close",()=>o()),s&&c.addEventListener("versionchange",l=>s(l.oldVersion,l.newVersion,l))}).catch(()=>{}),a}const vp=["get","getKey","getAll","getAllKeys","count"],Ep=["put","add","delete","clear"],Ir=new Map;function Uo(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(Ir.get(t))return Ir.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,s=Ep.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||vp.includes(n)))return;const o=async function(i,...a){const c=this.transaction(i,s?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),s&&c.done]))[0]};return Ir.set(t,o),o}yp(e=>({...e,get:(t,n,r)=>Uo(t,n)||e.get(t,n,r),has:(t,n)=>!!Uo(t,n)||e.has(t,n)}));/**
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
 */class Ip{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Tp(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Tp(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const Qr="@firebase/app",Wo="0.9.15";/**
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
 */const gt=new Va("@firebase/app"),Ap="@firebase/app-compat",Cp="@firebase/analytics-compat",Rp="@firebase/analytics",Hp="@firebase/app-check-compat",Sp="@firebase/app-check",xp="@firebase/auth",Op="@firebase/auth-compat",Pp="@firebase/database",$p="@firebase/database-compat",kp="@firebase/functions",Mp="@firebase/functions-compat",Dp="@firebase/installations",Np="@firebase/installations-compat",Bp="@firebase/messaging",Lp="@firebase/messaging-compat",Fp="@firebase/performance",jp="@firebase/performance-compat",Up="@firebase/remote-config",Wp="@firebase/remote-config-compat",Kp="@firebase/storage",Vp="@firebase/storage-compat",qp="@firebase/firestore",zp="@firebase/firestore-compat",Jp="firebase";/**
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
 */const es="[DEFAULT]",Gp={[Qr]:"fire-core",[Ap]:"fire-core-compat",[Rp]:"fire-analytics",[Cp]:"fire-analytics-compat",[Sp]:"fire-app-check",[Hp]:"fire-app-check-compat",[xp]:"fire-auth",[Op]:"fire-auth-compat",[Pp]:"fire-rtdb",[$p]:"fire-rtdb-compat",[kp]:"fire-fn",[Mp]:"fire-fn-compat",[Dp]:"fire-iid",[Np]:"fire-iid-compat",[Bp]:"fire-fcm",[Lp]:"fire-fcm-compat",[Fp]:"fire-perf",[jp]:"fire-perf-compat",[Up]:"fire-rc",[Wp]:"fire-rc-compat",[Kp]:"fire-gcs",[Vp]:"fire-gcs-compat",[qp]:"fire-fst",[zp]:"fire-fst-compat","fire-js":"fire-js",[Jp]:"fire-js-all"};/**
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
 */const Un=new Map,ts=new Map;function Yp(e,t){try{e.container.addComponent(t)}catch(n){gt.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function mt(e){const t=e.name;if(ts.has(t))return gt.debug(`There were multiple attempts to register component ${t}.`),!1;ts.set(t,e);for(const n of Un.values())Yp(n,e);return!0}function or(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
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
 */const Xp={["no-app"]:"No Firebase App '{$appName}' has been created - call initializeApp() first",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Qe=new sr("app","Firebase",Xp);/**
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
 */class Zp{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new st("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Qe.create("app-deleted",{appName:this._name})}}function Ja(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:es,automaticDataCollectionEnabled:!1},t),s=r.name;if(typeof s!="string"||!s)throw Qe.create("bad-app-name",{appName:String(s)});if(n||(n=ja()),!n)throw Qe.create("no-options");const o=Un.get(s);if(o){if(jn(n,o.options)&&jn(r,o.config))return o;throw Qe.create("duplicate-app",{appName:s})}const i=new ap(s);for(const c of ts.values())i.addComponent(c);const a=new Zp(n,r,i);return Un.set(s,a),a}function Qp(e=es){const t=Un.get(e);if(!t&&e===es&&ja())return Ja();if(!t)throw Qe.create("no-app",{appName:e});return t}function et(e,t,n){var r;let s=(r=Gp[e])!==null&&r!==void 0?r:e;n&&(s+=`-${n}`);const o=s.match(/\s|\//),i=t.match(/\s|\//);if(o||i){const a=[`Unable to register library "${s}" with version "${t}":`];o&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&i&&a.push("and"),i&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),gt.warn(a.join(" "));return}mt(new st(`${s}-version`,()=>({library:s,version:t}),"VERSION"))}/**
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
 */const eg="firebase-heartbeat-database",tg=1,an="firebase-heartbeat-store";let Tr=null;function Ga(){return Tr||(Tr=wp(eg,tg,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(an)}}}).catch(e=>{throw Qe.create("idb-open",{originalErrorMessage:e.message})})),Tr}async function ng(e){try{return await(await Ga()).transaction(an).objectStore(an).get(Ya(e))}catch(t){if(t instanceof _t)gt.warn(t.message);else{const n=Qe.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});gt.warn(n.message)}}}async function Ko(e,t){try{const r=(await Ga()).transaction(an,"readwrite");await r.objectStore(an).put(t,Ya(e)),await r.done}catch(n){if(n instanceof _t)gt.warn(n.message);else{const r=Qe.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});gt.warn(r.message)}}}function Ya(e){return`${e.name}!${e.options.appId}`}/**
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
 */const rg=1024,sg=30*24*60*60*1e3;class og{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new ag(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Vo();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const o=new Date(s.date).valueOf();return Date.now()-o<=sg}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Vo(),{heartbeatsToSend:n,unsentEntries:r}=ig(this._heartbeatsCache.heartbeats),s=Fa(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function Vo(){return new Date().toISOString().substring(0,10)}function ig(e,t=rg){const n=[];let r=e.slice();for(const s of e){const o=n.find(i=>i.agent===s.agent);if(o){if(o.dates.push(s.date),qo(n)>t){o.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),qo(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class ag{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Ua()?Wa().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await ng(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Ko(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Ko(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...t.heartbeats]})}else return}}function qo(e){return Fa(JSON.stringify({version:2,heartbeats:e})).length}/**
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
 */function cg(e){mt(new st("platform-logger",t=>new Ip(t),"PRIVATE")),mt(new st("heartbeat",t=>new og(t),"PRIVATE")),et(Qr,Wo,e),et(Qr,Wo,"esm2017"),et("fire-js","")}cg("");var lg="firebase",fg="10.1.0";/**
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
 */et(lg,fg,"app");const ug=(e,t)=>t.some(n=>e instanceof n);let zo,Jo;function dg(){return zo||(zo=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function hg(){return Jo||(Jo=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Xa=new WeakMap,ns=new WeakMap,Za=new WeakMap,Ar=new WeakMap,$s=new WeakMap;function pg(e){const t=new Promise((n,r)=>{const s=()=>{e.removeEventListener("success",o),e.removeEventListener("error",i)},o=()=>{n(tt(e.result)),s()},i=()=>{r(e.error),s()};e.addEventListener("success",o),e.addEventListener("error",i)});return t.then(n=>{n instanceof IDBCursor&&Xa.set(n,e)}).catch(()=>{}),$s.set(t,e),t}function gg(e){if(ns.has(e))return;const t=new Promise((n,r)=>{const s=()=>{e.removeEventListener("complete",o),e.removeEventListener("error",i),e.removeEventListener("abort",i)},o=()=>{n(),s()},i=()=>{r(e.error||new DOMException("AbortError","AbortError")),s()};e.addEventListener("complete",o),e.addEventListener("error",i),e.addEventListener("abort",i)});ns.set(e,t)}let rs={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return ns.get(e);if(t==="objectStoreNames")return e.objectStoreNames||Za.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return tt(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function mg(e){rs=e(rs)}function yg(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(Cr(this),t,...n);return Za.set(r,t.sort?t.sort():[t]),tt(r)}:hg().includes(e)?function(...t){return e.apply(Cr(this),t),tt(Xa.get(this))}:function(...t){return tt(e.apply(Cr(this),t))}}function bg(e){return typeof e=="function"?yg(e):(e instanceof IDBTransaction&&gg(e),ug(e,dg())?new Proxy(e,rs):e)}function tt(e){if(e instanceof IDBRequest)return pg(e);if(Ar.has(e))return Ar.get(e);const t=bg(e);return t!==e&&(Ar.set(e,t),$s.set(t,e)),t}const Cr=e=>$s.get(e);function _g(e,t,{blocked:n,upgrade:r,blocking:s,terminated:o}={}){const i=indexedDB.open(e,t),a=tt(i);return r&&i.addEventListener("upgradeneeded",c=>{r(tt(i.result),c.oldVersion,c.newVersion,tt(i.transaction))}),n&&i.addEventListener("blocked",()=>n()),a.then(c=>{o&&c.addEventListener("close",()=>o()),s&&c.addEventListener("versionchange",()=>s())}).catch(()=>{}),a}const wg=["get","getKey","getAll","getAllKeys","count"],vg=["put","add","delete","clear"],Rr=new Map;function Go(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(Rr.get(t))return Rr.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,s=vg.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||wg.includes(n)))return;const o=async function(i,...a){const c=this.transaction(i,s?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(a.shift())),(await Promise.all([l[n](...a),s&&c.done]))[0]};return Rr.set(t,o),o}mg(e=>({...e,get:(t,n,r)=>Go(t,n)||e.get(t,n,r),has:(t,n)=>!!Go(t,n)||e.has(t,n)}));const Qa="@firebase/installations",ks="0.6.4";/**
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
 */const ec=1e4,tc=`w:${ks}`,nc="FIS_v2",Eg="https://firebaseinstallations.googleapis.com/v1",Ig=60*60*1e3,Tg="installations",Ag="Installations";/**
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
 */const Cg={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},yt=new sr(Tg,Ag,Cg);function rc(e){return e instanceof _t&&e.code.includes("request-failed")}/**
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
 */function sc({projectId:e}){return`${Eg}/projects/${e}/installations`}function oc(e){return{token:e.token,requestStatus:2,expiresIn:Hg(e.expiresIn),creationTime:Date.now()}}async function ic(e,t){const r=(await t.json()).error;return yt.create("request-failed",{requestName:e,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function ac({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function Rg(e,{refreshToken:t}){const n=ac(e);return n.append("Authorization",Sg(t)),n}async function cc(e){const t=await e();return t.status>=500&&t.status<600?e():t}function Hg(e){return Number(e.replace("s","000"))}function Sg(e){return`${nc} ${e}`}/**
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
 */async function xg({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const r=sc(e),s=ac(e),o=t.getImmediate({optional:!0});if(o){const l=await o.getHeartbeatsHeader();l&&s.append("x-firebase-client",l)}const i={fid:n,authVersion:nc,appId:e.appId,sdkVersion:tc},a={method:"POST",headers:s,body:JSON.stringify(i)},c=await cc(()=>fetch(r,a));if(c.ok){const l=await c.json();return{fid:l.fid||n,registrationStatus:2,refreshToken:l.refreshToken,authToken:oc(l.authToken)}}else throw await ic("Create Installation",c)}/**
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
 */function Og(e){return btoa(String.fromCharCode(...e)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const Pg=/^[cdef][\w-]{21}$/,ss="";function $g(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const n=kg(e);return Pg.test(n)?n:ss}catch{return ss}}function kg(e){return Og(e).substr(0,22)}/**
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
 */const fc=new Map;function uc(e,t){const n=ir(e);dc(n,t),Mg(n,t)}function dc(e,t){const n=fc.get(e);if(n)for(const r of n)r(t)}function Mg(e,t){const n=Dg();n&&n.postMessage({key:e,fid:t}),Ng()}let ut=null;function Dg(){return!ut&&"BroadcastChannel"in self&&(ut=new BroadcastChannel("[Firebase] FID Change"),ut.onmessage=e=>{dc(e.data.key,e.data.fid)}),ut}function Ng(){fc.size===0&&ut&&(ut.close(),ut=null)}/**
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
 */const Bg="firebase-installations-database",Lg=1,bt="firebase-installations-store";let Hr=null;function Ms(){return Hr||(Hr=_g(Bg,Lg,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(bt)}}})),Hr}async function Wn(e,t){const n=ir(e),s=(await Ms()).transaction(bt,"readwrite"),o=s.objectStore(bt),i=await o.get(n);return await o.put(t,n),await s.done,(!i||i.fid!==t.fid)&&uc(e,t.fid),t}async function hc(e){const t=ir(e),r=(await Ms()).transaction(bt,"readwrite");await r.objectStore(bt).delete(t),await r.done}async function ar(e,t){const n=ir(e),s=(await Ms()).transaction(bt,"readwrite"),o=s.objectStore(bt),i=await o.get(n),a=t(i);return a===void 0?await o.delete(n):await o.put(a,n),await s.done,a&&(!i||i.fid!==a.fid)&&uc(e,a.fid),a}/**
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
 */async function Ds(e){let t;const n=await ar(e.appConfig,r=>{const s=Fg(r),o=jg(e,s);return t=o.registrationPromise,o.installationEntry});return n.fid===ss?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}function Fg(e){const t=e||{fid:$g(),registrationStatus:0};return pc(t)}function jg(e,t){if(t.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(yt.create("app-offline"));return{installationEntry:t,registrationPromise:s}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=Ug(e,n);return{installationEntry:n,registrationPromise:r}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:Wg(e)}:{installationEntry:t}}async function Ug(e,t){try{const n=await xg(e,t);return Wn(e.appConfig,n)}catch(n){throw rc(n)&&n.customData.serverCode===409?await hc(e.appConfig):await Wn(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function Wg(e){let t=await Yo(e.appConfig);for(;t.registrationStatus===1;)await lc(100),t=await Yo(e.appConfig);if(t.registrationStatus===0){const{installationEntry:n,registrationPromise:r}=await Ds(e);return r||n}return t}function Yo(e){return ar(e,t=>{if(!t)throw yt.create("installation-not-found");return pc(t)})}function pc(e){return Kg(e)?{fid:e.fid,registrationStatus:0}:e}function Kg(e){return e.registrationStatus===1&&e.registrationTime+ec<Date.now()}/**
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
 */async function Vg({appConfig:e,heartbeatServiceProvider:t},n){const r=qg(e,n),s=Rg(e,n),o=t.getImmediate({optional:!0});if(o){const l=await o.getHeartbeatsHeader();l&&s.append("x-firebase-client",l)}const i={installation:{sdkVersion:tc,appId:e.appId}},a={method:"POST",headers:s,body:JSON.stringify(i)},c=await cc(()=>fetch(r,a));if(c.ok){const l=await c.json();return oc(l)}else throw await ic("Generate Auth Token",c)}function qg(e,{fid:t}){return`${sc(e)}/${t}/authTokens:generate`}/**
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
 */async function Ns(e,t=!1){let n;const r=await ar(e.appConfig,o=>{if(!gc(o))throw yt.create("not-registered");const i=o.authToken;if(!t&&Gg(i))return o;if(i.requestStatus===1)return n=zg(e,t),o;{if(!navigator.onLine)throw yt.create("app-offline");const a=Xg(o);return n=Jg(e,a),a}});return n?await n:r.authToken}async function zg(e,t){let n=await Xo(e.appConfig);for(;n.authToken.requestStatus===1;)await lc(100),n=await Xo(e.appConfig);const r=n.authToken;return r.requestStatus===0?Ns(e,t):r}function Xo(e){return ar(e,t=>{if(!gc(t))throw yt.create("not-registered");const n=t.authToken;return Zg(n)?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t})}async function Jg(e,t){try{const n=await Vg(e,t),r=Object.assign(Object.assign({},t),{authToken:n});return await Wn(e.appConfig,r),n}catch(n){if(rc(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await hc(e.appConfig);else{const r=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await Wn(e.appConfig,r)}throw n}}function gc(e){return e!==void 0&&e.registrationStatus===2}function Gg(e){return e.requestStatus===2&&!Yg(e)}function Yg(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+Ig}function Xg(e){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}function Zg(e){return e.requestStatus===1&&e.requestTime+ec<Date.now()}/**
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
 */async function Qg(e){const t=e,{installationEntry:n,registrationPromise:r}=await Ds(t);return r?r.catch(console.error):Ns(t).catch(console.error),n.fid}/**
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
 */async function em(e,t=!1){const n=e;return await tm(n),(await Ns(n,t)).token}async function tm(e){const{registrationPromise:t}=await Ds(e);t&&await t}/**
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
 */function nm(e){if(!e||!e.options)throw Sr("App Configuration");if(!e.name)throw Sr("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw Sr(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}function Sr(e){return yt.create("missing-app-config-values",{valueName:e})}/**
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
 */const mc="installations",rm="installations-internal",sm=e=>{const t=e.getProvider("app").getImmediate(),n=nm(t),r=or(t,"heartbeat");return{app:t,appConfig:n,heartbeatServiceProvider:r,_delete:()=>Promise.resolve()}},om=e=>{const t=e.getProvider("app").getImmediate(),n=or(t,mc).getImmediate();return{getId:()=>Qg(n),getToken:s=>em(n,s)}};function im(){mt(new st(mc,sm,"PUBLIC")),mt(new st(rm,om,"PRIVATE"))}im();et(Qa,ks);et(Qa,ks,"esm2017");/**
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
 */const Kn="analytics",am="firebase_id",cm="origin",lm=60*1e3,fm="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Bs="https://www.googletagmanager.com/gtag/js";/**
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
 */const um={["already-exists"]:"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.",["already-initialized"]:"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.",["already-initialized-settings"]:"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",["interop-component-reg-failed"]:"Firebase Analytics Interop Component failed to instantiate: {$reason}",["invalid-analytics-context"]:"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["indexeddb-unavailable"]:"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["fetch-throttle"]:"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.",["config-fetch-failed"]:"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}",["no-api-key"]:'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',["no-app-id"]:'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',["no-client-id"]:'The "client_id" field is empty.',["invalid-gtag-resource"]:"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Te=new sr("analytics","Analytics",um);/**
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
 */function dm(e){if(!e.startsWith(Bs)){const t=Te.create("invalid-gtag-resource",{gtagURL:e});return be.warn(t.message),""}return e}function yc(e){return Promise.all(e.map(t=>t.catch(n=>n)))}function hm(e,t){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(e,t)),n}function pm(e,t){const n=hm("firebase-js-sdk-policy",{createScriptURL:dm}),r=document.createElement("script"),s=`${Bs}?l=${e}&id=${t}`;r.src=n?n==null?void 0:n.createScriptURL(s):s,r.async=!0,document.head.appendChild(r)}function gm(e){let t=[];return Array.isArray(window[e])?t=window[e]:window[e]=t,t}async function mm(e,t,n,r,s,o){const i=r[s];try{if(i)await t[i];else{const c=(await yc(n)).find(l=>l.measurementId===s);c&&await t[c.appId]}}catch(a){be.error(a)}e("config",s,o)}async function ym(e,t,n,r,s){try{let o=[];if(s&&s.send_to){let i=s.send_to;Array.isArray(i)||(i=[i]);const a=await yc(n);for(const c of i){const l=a.find(u=>u.measurementId===c),d=l&&t[l.appId];if(d)o.push(d);else{o=[];break}}}o.length===0&&(o=Object.values(t)),await Promise.all(o),e("event",r,s||{})}catch(o){be.error(o)}}function bm(e,t,n,r){async function s(o,...i){try{if(o==="event"){const[a,c]=i;await ym(e,t,n,a,c)}else if(o==="config"){const[a,c]=i;await mm(e,t,n,r,a,c)}else if(o==="consent"){const[a]=i;e("consent","update",a)}else if(o==="get"){const[a,c,l]=i;e("get",a,c,l)}else if(o==="set"){const[a]=i;e("set",a)}else e(o,...i)}catch(a){be.error(a)}}return s}function _m(e,t,n,r,s){let o=function(...i){window[r].push(arguments)};return window[s]&&typeof window[s]=="function"&&(o=window[s]),window[s]=bm(o,e,t,n),{gtagCore:o,wrappedGtag:window[s]}}function wm(e){const t=window.document.getElementsByTagName("script");for(const n of Object.values(t))if(n.src&&n.src.includes(Bs)&&n.src.includes(e))return n;return null}/**
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
 */const vm=30,Em=1e3;class Im{constructor(t={},n=Em){this.throttleMetadata=t,this.intervalMillis=n}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,n){this.throttleMetadata[t]=n}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}}const bc=new Im;function Tm(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}async function Am(e){var t;const{appId:n,apiKey:r}=e,s={method:"GET",headers:Tm(r)},o=fm.replace("{app-id}",n),i=await fetch(o,s);if(i.status!==200&&i.status!==304){let a="";try{const c=await i.json();!((t=c.error)===null||t===void 0)&&t.message&&(a=c.error.message)}catch{}throw Te.create("config-fetch-failed",{httpStatus:i.status,responseMessage:a})}return i.json()}async function Cm(e,t=bc,n){const{appId:r,apiKey:s,measurementId:o}=e.options;if(!r)throw Te.create("no-app-id");if(!s){if(o)return{measurementId:o,appId:r};throw Te.create("no-api-key")}const i=t.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new Sm;return setTimeout(async()=>{a.abort()},n!==void 0?n:lm),_c({appId:r,apiKey:s,measurementId:o},i,a,t)}async function _c(e,{throttleEndTimeMillis:t,backoffCount:n},r,s=bc){var o;const{appId:i,measurementId:a}=e;try{await Rm(r,t)}catch(c){if(a)return be.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:i,measurementId:a};throw c}try{const c=await Am(e);return s.deleteThrottleMetadata(i),c}catch(c){const l=c;if(!Hm(l)){if(s.deleteThrottleMetadata(i),a)return be.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${l==null?void 0:l.message}]`),{appId:i,measurementId:a};throw c}const d=Number((o=l==null?void 0:l.customData)===null||o===void 0?void 0:o.httpStatus)===503?Lo(n,s.intervalMillis,vm):Lo(n,s.intervalMillis),u={throttleEndTimeMillis:Date.now()+d,backoffCount:n+1};return s.setThrottleMetadata(i,u),be.debug(`Calling attemptFetch again in ${d} millis`),_c(e,u,r,s)}}function Rm(e,t){return new Promise((n,r)=>{const s=Math.max(t-Date.now(),0),o=setTimeout(n,s);e.addEventListener(()=>{clearTimeout(o),r(Te.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}function Hm(e){if(!(e instanceof _t)||!e.customData)return!1;const t=Number(e.customData.httpStatus);return t===429||t===500||t===503||t===504}class Sm{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach(t=>t())}}async function xm(e,t,n,r,s){if(s&&s.global){e("event",n,r);return}else{const o=await t,i=Object.assign(Object.assign({},r),{send_to:o});e("event",n,i)}}/**
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
 */async function Om(){if(Ua())try{await Wa()}catch(e){return be.warn(Te.create("indexeddb-unavailable",{errorInfo:e==null?void 0:e.toString()}).message),!1}else return be.warn(Te.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function Pm(e,t,n,r,s,o,i){var a;const c=Cm(e);c.then(y=>{n[y.measurementId]=y.appId,e.options.measurementId&&y.measurementId!==e.options.measurementId&&be.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${y.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(y=>be.error(y)),t.push(c);const l=Om().then(y=>{if(y)return r.getId()}),[d,u]=await Promise.all([c,l]);wm(o)||pm(o,d.measurementId),s("js",new Date);const p=(a=i==null?void 0:i.config)!==null&&a!==void 0?a:{};return p[cm]="firebase",p.update=!0,u!=null&&(p[am]=u),s("config",d.measurementId,p),d.measurementId}/**
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
 */class $m{constructor(t){this.app=t}_delete(){return delete Qt[this.app.options.appId],Promise.resolve()}}let Qt={},Zo=[];const Qo={};let xr="dataLayer",km="gtag",ei,wc,ti=!1;function Mm(){const e=[];if(Gh()&&e.push("This is a browser extension environment."),Yh()||e.push("Cookies are not available."),e.length>0){const t=e.map((r,s)=>`(${s+1}) ${r}`).join(" "),n=Te.create("invalid-analytics-context",{errorInfo:t});be.warn(n.message)}}function Dm(e,t,n){Mm();const r=e.options.appId;if(!r)throw Te.create("no-app-id");if(!e.options.apiKey)if(e.options.measurementId)be.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Te.create("no-api-key");if(Qt[r]!=null)throw Te.create("already-exists",{id:r});if(!ti){gm(xr);const{wrappedGtag:o,gtagCore:i}=_m(Qt,Zo,Qo,xr,km);wc=o,ei=i,ti=!0}return Qt[r]=Pm(e,Zo,Qo,t,ei,xr,n),new $m(e)}function Nm(e=Qp()){e=Ka(e);const t=or(e,Kn);return t.isInitialized()?t.getImmediate():Bm(e)}function Bm(e,t={}){const n=or(e,Kn);if(n.isInitialized()){const s=n.getImmediate();if(jn(t,n.getOptions()))return s;throw Te.create("already-initialized")}return n.initialize({options:t})}function Lm(e,t,n,r){e=Ka(e),xm(wc,Qt[e.app.options.appId],t,n,r).catch(s=>be.error(s))}const ni="@firebase/analytics",ri="0.10.0";function Fm(){mt(new st(Kn,(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),s=t.getProvider("installations-internal").getImmediate();return Dm(r,s,n)},"PUBLIC")),mt(new st("analytics-internal",e,"PRIVATE")),et(ni,ri),et(ni,ri,"esm2017");function e(t){try{const n=t.getProvider(Kn).getImmediate();return{logEvent:(r,s,o)=>Lm(n,r,s,o)}}catch(n){throw Te.create("interop-component-reg-failed",{reason:n})}}}Fm();const jm={class:"container my-4"},Um={class:"text-center"},Wm={class:"btn-group"},Km=["onClick"],Vm=Lt({__name:"app",setup(e){const n=Ja({apiKey:"AIzaSyCeIOuLIWPTdi6hr5XC1bk0RKbLtSVlJ9o",authDomain:"dad-problem.firebaseapp.com",projectId:"dad-problem",storageBucket:"dad-problem.appspot.com",messagingSenderId:"615926471970",appId:"1:615926471970:web:93876343f7a893c5fb997b",measurementId:"G-69RDZPP64C"});Nm(n);const r=he("保安"),s={保安:No,問題セットB:Bh},o=he("");return o.value=No,Jt(r,async()=>{o.value="",await Yn(),o.value=s[r.value]}),(i,a)=>{const c=Nh;return ae(),Xe("div",jm,[X("div",Um,[X("div",Wm,[(ae(),Xe(Ee,null,zi(s,(l,d)=>X("button",{class:ln(["btn",K(r)===d?"btn-primary":"btn-outline-primary"]),onClick:u=>r.value=d.toString()},Be(d),11,Km)),64))])]),K(o)?(ae(),Oe(c,{key:0,data:K(o)},null,8,["data"])):Cn("",!0)])}}});const qm={__name:"nuxt-error-page",props:{error:Object},setup(e){const n=e.error;(n.stack||"").split(`
`).splice(1).map(u=>({text:u.replace("webpack:/","").replace(".vue",".js").trim(),internal:u.includes("node_modules")&&!u.includes(".cache")||u.includes("internal")||u.includes("new Promise")})).map(u=>`<span class="stack${u.internal?" internal":""}">${u.text}</span>`).join(`
`);const r=Number(n.statusCode||500),s=r===404,o=n.statusMessage??(s?"Page Not Found":"Internal Server Error"),i=n.message||n.toString(),a=void 0,d=s?no(()=>zr(()=>import("./error-404.1d347191.js"),["./error-404.1d347191.js","./_plugin-vue_export-helper.c27b6911.js","./error-404.7fc72018.css"],import.meta.url).then(u=>u.default||u)):no(()=>zr(()=>import("./error-500.d8fe2be7.js"),["./error-500.d8fe2be7.js","./_plugin-vue_export-helper.c27b6911.js","./error-500.c5df6088.css"],import.meta.url).then(u=>u.default||u));return(u,p)=>(ae(),Oe(K(d),Mc(ca({statusCode:K(r),statusMessage:K(o),description:K(i),stack:K(a)})),null,16))}},si={__name:"nuxt-root",setup(e){const t=()=>null,n=de(),r=n.deferHydration(),s=!1;Yi(Da,ch()),n.hooks.callHookWith(a=>a.map(c=>c()),"vue:setup");const o=Os();Ki((a,c,l)=>{if(n.hooks.callHook("vue:error",a,c,l).catch(d=>console.error("[nuxt] Error in `vue:error` hook",d)),hh(a)&&(a.fatal||a.unhandled))return n.runWithContext(()=>uh(a)),!1});const{islandContext:i}=!1;return(a,c)=>(ae(),Oe(Pl,{onResolve:K(r)},{default:Di(()=>[K(o)?(ae(),Oe(K(qm),{key:0,error:K(o)},null,8,["error"])):K(i)?(ae(),Oe(K(t),{key:1,context:K(i)},null,8,["context"])):K(s)?(ae(),Oe(Jl(K(s)),{key:2})):(ae(),Oe(K(Vm),{key:3}))]),_:1},8,["onResolve"]))}};globalThis.$fetch||(globalThis.$fetch=Mu.create({baseURL:Nu()}));let oi;{let e;oi=async function(){var o,i;if(e)return e;const r=!!((o=window.__NUXT__)!=null&&o.serverRendered||((i=document.getElementById("__NUXT_DATA__"))==null?void 0:i.dataset.ssr)==="true")?Gf(si):Jf(si),s=Xu({vueApp:r});try{await Qu(s,Eh)}catch(a){await s.callHook("app:error",a),s.payload.error=s.payload.error||a}try{await s.hooks.callHook("app:created",r),await s.hooks.callHook("app:beforeMount",r),r.mount("#"+Xd),await s.hooks.callHook("app:mounted",r),await Yn()}catch(a){await s.callHook("app:error",a),s.payload.error=s.payload.error||a}return r},e=oi().catch(t=>{console.error("Error while mounting app:",t)})}export{de as a,Ui as b,Af as c,Lt as d,Cf as e,Gm as f,ga as g,nr as h,ya as i,Ym as j,ae as k,Xe as l,X as m,fh as n,Ul as o,fn as p,le as q,he as r,Di as s,Be as t,rr as u,la as v,Kr as w,zm as x,Jm as y};
