(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))n(l);new MutationObserver(l=>{for(const i of l)if(i.type==="childList")for(const f of i.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&n(f)}).observe(document,{childList:!0,subtree:!0});function r(l){const i={};return l.integrity&&(i.integrity=l.integrity),l.referrerPolicy&&(i.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?i.credentials="include":l.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(l){if(l.ep)return;l.ep=!0;const i=r(l);fetch(l.href,i)}})();const ht=!1;var Ze=Array.isArray,_r=Array.prototype.indexOf,ze=Array.from,dr=Object.defineProperty,se=Object.getOwnPropertyDescriptor,hr=Object.prototype,pr=Array.prototype,gr=Object.getPrototypeOf,pt=Object.isExtensible;function wr(e){for(var t=0;t<e.length;t++)e[t]()}const q=2,At=4,Ce=8,Je=16,X=32,te=64,me=128,D=256,ye=512,I=1024,Y=2048,re=4096,W=8192,Oe=16384,mr=32768,Qe=65536,yr=1<<19,St=1<<20,Ge=1<<21,Ve=Symbol("$state");function Ct(e){return e===this.v}function Er(e,t){return e!=e?t==t:e!==t||e!==null&&typeof e=="object"||typeof e=="function"}function Ot(e){return!Er(e,this.v)}function br(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function xr(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function Tr(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function kr(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}let Nr=!1;const Ar=1,Sr=2,Cr=16,Or=1,Ir=2,S=Symbol(),Mr="http://www.w3.org/1999/xhtml";let V=null;function gt(e){V=e}function It(e,t=!1,r){var n=V={p:V,c:null,d:!1,e:null,m:!1,s:e,x:null,l:null};Ht(()=>{n.d=!0})}function Mt(e){const t=V;if(t!==null){const f=t.e;if(f!==null){var r=E,n=g;t.e=null;try{for(var l=0;l<f.length;l++){var i=f[l];j(i.effect),U(i.reaction),Wt(i.fn)}}finally{j(r),U(n)}}V=t.p,t.m=!0}return{}}function Lt(){return!0}function Z(e,t){if(typeof e!="object"||e===null||Ve in e)return e;const r=gr(e);if(r!==hr&&r!==pr)return e;var n=new Map,l=Ze(e),i=R(0),f=g,v=s=>{var a=g;U(f);var o;return o=s(),U(a),o};return l&&n.set("length",R(e.length)),new Proxy(e,{defineProperty(s,a,o){(!("value"in o)||o.configurable===!1||o.enumerable===!1||o.writable===!1)&&xr();var c=n.get(a);return c===void 0?(c=v(()=>R(o.value)),n.set(a,c)):b(c,v(()=>Z(o.value))),!0},deleteProperty(s,a){var o=n.get(a);if(o===void 0)a in s&&n.set(a,v(()=>R(S)));else{if(l&&typeof a=="string"){var c=n.get("length"),u=Number(a);Number.isInteger(u)&&u<c.v&&b(c,u)}b(o,S),wt(i)}return!0},get(s,a,o){var h;if(a===Ve)return e;var c=n.get(a),u=a in s;if(c===void 0&&(!u||(h=se(s,a))!=null&&h.writable)&&(c=v(()=>R(Z(u?s[a]:S))),n.set(a,c)),c!==void 0){var _=d(c);return _===S?void 0:_}return Reflect.get(s,a,o)},getOwnPropertyDescriptor(s,a){var o=Reflect.getOwnPropertyDescriptor(s,a);if(o&&"value"in o){var c=n.get(a);c&&(o.value=d(c))}else if(o===void 0){var u=n.get(a),_=u==null?void 0:u.v;if(u!==void 0&&_!==S)return{enumerable:!0,configurable:!0,value:_,writable:!0}}return o},has(s,a){var _;if(a===Ve)return!0;var o=n.get(a),c=o!==void 0&&o.v!==S||Reflect.has(s,a);if(o!==void 0||E!==null&&(!c||(_=se(s,a))!=null&&_.writable)){o===void 0&&(o=v(()=>R(c?Z(s[a]):S)),n.set(a,o));var u=d(o);if(u===S)return!1}return c},set(s,a,o,c){var y;var u=n.get(a),_=a in s;if(l&&a==="length")for(var h=o;h<u.v;h+=1){var m=n.get(h+"");m!==void 0?b(m,S):h in s&&(m=v(()=>R(S)),n.set(h+"",m))}u===void 0?(!_||(y=se(s,a))!=null&&y.writable)&&(u=v(()=>R(void 0)),b(u,v(()=>Z(o))),n.set(a,u)):(_=u.v!==S,b(u,v(()=>Z(o))));var N=Reflect.getOwnPropertyDescriptor(s,a);if(N!=null&&N.set&&N.set.call(c,o),!_){if(l&&typeof a=="string"){var w=n.get("length"),p=Number(a);Number.isInteger(p)&&p>=w.v&&b(w,p+1)}wt(i)}return!0},ownKeys(s){d(i);var a=Reflect.ownKeys(s).filter(u=>{var _=n.get(u);return _===void 0||_.v!==S});for(var[o,c]of n)c.v!==S&&!(o in s)&&a.push(o);return a},setPrototypeOf(){Tr()}})}function wt(e,t=1){b(e,e.v+t)}const ce=new Map;function Ee(e,t){var r={f:0,v:e,reactions:null,equals:Ct,rv:0,wv:0};return r}function R(e,t){const r=Ee(e);return Zt(r),r}function Lr(e,t=!1){const r=Ee(e);return t||(r.equals=Ot),r}function b(e,t,r=!1){g!==null&&!F&&Lt()&&(g.f&(q|Je))!==0&&!(k!=null&&k.includes(e))&&kr();let n=r?Z(t):t;return Pt(e,n)}function Pt(e,t){if(!e.equals(t)){var r=e.v;Me?ce.set(e,t):ce.set(e,r),e.v=t,e.wv=Jt(),Rt(e,Y),E!==null&&(E.f&I)!==0&&(E.f&(X|te))===0&&(P===null?Gr([e]):P.push(e))}return t}function Rt(e,t){var r=e.reactions;if(r!==null)for(var n=r.length,l=0;l<n;l++){var i=r[l],f=i.f;(f&Y)===0&&(B(i,t),(f&(I|D))!==0&&((f&q)!==0?Rt(i,re):Pe(i)))}}let Pr=!1;var mt,Dt,Ft,qt;function Rr(){if(mt===void 0){mt=window,Dt=/Firefox/.test(navigator.userAgent);var e=Element.prototype,t=Node.prototype,r=Text.prototype;Ft=se(t,"firstChild").get,qt=se(t,"nextSibling").get,pt(e)&&(e.__click=void 0,e.__className=void 0,e.__attributes=null,e.__style=void 0,e.__e=void 0),pt(r)&&(r.__t=void 0)}}function Vt(e=""){return document.createTextNode(e)}function be(e){return Ft.call(e)}function Ie(e){return qt.call(e)}function C(e,t){return be(e)}function Dr(e,t){{var r=be(e);return r instanceof Comment&&r.data===""?Ie(r):r}}function L(e,t=1,r=!1){let n=e;for(;t--;)n=Ie(n);return n}function Fr(e){e.textContent=""}function et(e){var t=q|Y,r=g!==null&&(g.f&q)!==0?g:null;return E===null||r!==null&&(r.f&D)!==0?t|=D:E.f|=St,{ctx:V,deps:null,effects:null,equals:Ct,f:t,fn:e,reactions:null,rv:0,v:null,wv:0,parent:r??E}}function Ue(e){const t=et(e);return Zt(t),t}function qr(e){const t=et(e);return t.equals=Ot,t}function Ut(e){var t=e.effects;if(t!==null){e.effects=null;for(var r=0;r<t.length;r+=1)G(t[r])}}function Vr(e){for(var t=e.parent;t!==null;){if((t.f&q)===0)return t;t=t.parent}return null}function Ur(e){var t,r=E;j(Vr(e));try{Ut(e),t=er(e)}finally{j(r)}return t}function Bt(e){var t=Ur(e),r=($||(e.f&D)!==0)&&e.deps!==null?re:I;B(e,r),e.equals(t)||(e.v=t,e.wv=Jt())}function Br(e,t){var r=t.last;r===null?t.last=t.first=e:(r.next=e,e.prev=r,t.last=e)}function ne(e,t,r,n=!0){var l=E,i={ctx:V,deps:null,nodes_start:null,nodes_end:null,f:e|Y,first:null,fn:t,last:null,next:null,parent:l,prev:null,teardown:null,transitions:null,wv:0};if(r)try{nt(i),i.f|=mr}catch(s){throw G(i),s}else t!==null&&Pe(i);var f=r&&i.deps===null&&i.first===null&&i.nodes_start===null&&i.teardown===null&&(i.f&(St|me))===0;if(!f&&n&&(l!==null&&Br(i,l),g!==null&&(g.f&q)!==0)){var v=g;(v.effects??(v.effects=[])).push(i)}return i}function Ht(e){const t=ne(Ce,null,!1);return B(t,I),t.teardown=e,t}function Hr(e){const t=ne(te,e,!0);return(r={})=>new Promise(n=>{r.outro?xe(t,()=>{G(t),n(void 0)}):(G(t),n(void 0))})}function Wt(e){return ne(At,e,!1)}function Wr(e){return ne(Ce,e,!0)}function Be(e,t=[],r=et){const n=t.map(r);return tt(()=>e(...n.map(d)))}function tt(e,t=0){return ne(Ce|Je|t,e,!0)}function ve(e,t=!0){return ne(Ce|X,e,!0,t)}function Yt(e){var t=e.teardown;if(t!==null){const r=Me,n=g;yt(!0),U(null);try{t.call(null)}finally{yt(r),U(n)}}}function Kt(e,t=!1){var r=e.first;for(e.first=e.last=null;r!==null;){var n=r.next;(r.f&te)!==0?r.parent=null:G(r,t),r=n}}function Yr(e){for(var t=e.first;t!==null;){var r=t.next;(t.f&X)===0&&G(t),t=r}}function G(e,t=!0){var r=!1;if((t||(e.f&yr)!==0)&&e.nodes_start!==null){for(var n=e.nodes_start,l=e.nodes_end;n!==null;){var i=n===l?null:Ie(n);n.remove(),n=i}r=!0}Kt(e,t&&!r),Se(e,0),B(e,Oe);var f=e.transitions;if(f!==null)for(const s of f)s.stop();Yt(e);var v=e.parent;v!==null&&v.first!==null&&$t(e),e.next=e.prev=e.teardown=e.ctx=e.deps=e.fn=e.nodes_start=e.nodes_end=null}function $t(e){var t=e.parent,r=e.prev,n=e.next;r!==null&&(r.next=n),n!==null&&(n.prev=r),t!==null&&(t.first===e&&(t.first=n),t.last===e&&(t.last=r))}function xe(e,t){var r=[];rt(e,r,!0),Gt(r,()=>{G(e),t&&t()})}function Gt(e,t){var r=e.length;if(r>0){var n=()=>--r||t();for(var l of e)l.out(n)}else t()}function rt(e,t,r){if((e.f&W)===0){if(e.f^=W,e.transitions!==null)for(const f of e.transitions)(f.is_global||r)&&t.push(f);for(var n=e.first;n!==null;){var l=n.next,i=(n.f&Qe)!==0||(n.f&X)!==0;rt(n,t,i?r:!1),n=l}}}function Te(e){jt(e,!0)}function jt(e,t){if((e.f&W)!==0){e.f^=W,(e.f&I)===0&&(e.f^=I),_e(e)&&(B(e,Y),Pe(e));for(var r=e.first;r!==null;){var n=r.next,l=(r.f&Qe)!==0||(r.f&X)!==0;jt(r,l?t:!1),r=n}if(e.transitions!==null)for(const i of e.transitions)(i.is_global||t)&&i.in()}}let ke=[];function Kr(){var e=ke;ke=[],wr(e)}function Xt(e){ke.length===0&&queueMicrotask(Kr),ke.push(e)}let ge=!1,je=!1,Ne=null,z=!1,Me=!1;function yt(e){Me=e}let we=[];let g=null,F=!1;function U(e){g=e}let E=null;function j(e){E=e}let k=null;function $r(e){k=e}function Zt(e){g!==null&&g.f&Ge&&(k===null?$r([e]):k.push(e))}let T=null,O=0,P=null;function Gr(e){P=e}let zt=1,Ae=0,$=!1;function Jt(){return++zt}function _e(e){var c;var t=e.f;if((t&Y)!==0)return!0;if((t&re)!==0){var r=e.deps,n=(t&D)!==0;if(r!==null){var l,i,f=(t&ye)!==0,v=n&&E!==null&&!$,s=r.length;if(f||v){var a=e,o=a.parent;for(l=0;l<s;l++)i=r[l],(f||!((c=i==null?void 0:i.reactions)!=null&&c.includes(a)))&&(i.reactions??(i.reactions=[])).push(a);f&&(a.f^=ye),v&&o!==null&&(o.f&D)===0&&(a.f^=D)}for(l=0;l<s;l++)if(i=r[l],_e(i)&&Bt(i),i.wv>e.wv)return!0}(!n||E!==null&&!$)&&B(e,I)}return!1}function jr(e,t){for(var r=t;r!==null;){if((r.f&me)!==0)try{r.fn(e);return}catch{r.f^=me}r=r.parent}throw ge=!1,e}function Xr(e){return(e.f&Oe)===0&&(e.parent===null||(e.parent.f&me)===0)}function Le(e,t,r,n){if(ge){if(r===null&&(ge=!1),Xr(t))throw e;return}r!==null&&(ge=!0);{jr(e,t);return}}function Qt(e,t,r=!0){var n=e.reactions;if(n!==null)for(var l=0;l<n.length;l++){var i=n[l];k!=null&&k.includes(e)||((i.f&q)!==0?Qt(i,t,!1):t===i&&(r?B(i,Y):(i.f&I)!==0&&B(i,re),Pe(i)))}}function er(e){var _;var t=T,r=O,n=P,l=g,i=$,f=k,v=V,s=F,a=e.f;T=null,O=0,P=null,$=(a&D)!==0&&(F||!z||g===null),g=(a&(X|te))===0?e:null,k=null,gt(e.ctx),F=!1,Ae++,e.f|=Ge;try{var o=(0,e.fn)(),c=e.deps;if(T!==null){var u;if(Se(e,O),c!==null&&O>0)for(c.length=O+T.length,u=0;u<T.length;u++)c[O+u]=T[u];else e.deps=c=T;if(!$)for(u=O;u<c.length;u++)((_=c[u]).reactions??(_.reactions=[])).push(e)}else c!==null&&O<c.length&&(Se(e,O),c.length=O);if(Lt()&&P!==null&&!F&&c!==null&&(e.f&(q|re|Y))===0)for(u=0;u<P.length;u++)Qt(P[u],e);return l!==null&&(Ae++,P!==null&&(n===null?n=P:n.push(...P))),o}finally{T=t,O=r,P=n,g=l,$=i,k=f,gt(v),F=s,e.f^=Ge}}function Zr(e,t){let r=t.reactions;if(r!==null){var n=_r.call(r,e);if(n!==-1){var l=r.length-1;l===0?r=t.reactions=null:(r[n]=r[l],r.pop())}}r===null&&(t.f&q)!==0&&(T===null||!T.includes(t))&&(B(t,re),(t.f&(D|ye))===0&&(t.f^=ye),Ut(t),Se(t,0))}function Se(e,t){var r=e.deps;if(r!==null)for(var n=t;n<r.length;n++)Zr(e,r[n])}function nt(e){var t=e.f;if((t&Oe)===0){B(e,I);var r=E,n=V,l=z;E=e,z=!0;try{(t&Je)!==0?Yr(e):Kt(e),Yt(e);var i=er(e);e.teardown=typeof i=="function"?i:null,e.wv=zt;var f=e.deps,v;ht&&Nr&&e.f&Y}catch(s){Le(s,e,r,n||e.ctx)}finally{z=l,E=r}}}function zr(){try{br()}catch(e){if(Ne!==null)Le(e,Ne,null);else throw e}}function Jr(){var e=z;try{var t=0;for(z=!0;we.length>0;){t++>1e3&&zr();var r=we,n=r.length;we=[];for(var l=0;l<n;l++){var i=en(r[l]);Qr(i)}ce.clear()}}finally{je=!1,z=e,Ne=null}}function Qr(e){var t=e.length;if(t!==0)for(var r=0;r<t;r++){var n=e[r];if((n.f&(Oe|W))===0)try{_e(n)&&(nt(n),n.deps===null&&n.first===null&&n.nodes_start===null&&(n.teardown===null?$t(n):n.fn=null))}catch(l){Le(l,n,null,n.ctx)}}}function Pe(e){je||(je=!0,queueMicrotask(Jr));for(var t=Ne=e;t.parent!==null;){t=t.parent;var r=t.f;if((r&(te|X))!==0){if((r&I)===0)return;t.f^=I}}we.push(t)}function en(e){for(var t=[],r=e;r!==null;){var n=r.f,l=(n&(X|te))!==0,i=l&&(n&I)!==0;if(!i&&(n&W)===0){if((n&At)!==0)t.push(r);else if(l)r.f^=I;else{var f=g;try{g=r,_e(r)&&nt(r)}catch(a){Le(a,r,null,r.ctx)}finally{g=f}}var v=r.first;if(v!==null){r=v;continue}}var s=r.parent;for(r=r.next;r===null&&s!==null;)r=s.next,s=s.parent}return t}function d(e){var t=e.f,r=(t&q)!==0;if(g!==null&&!F){if(!(k!=null&&k.includes(e))){var n=g.deps;e.rv<Ae&&(e.rv=Ae,T===null&&n!==null&&n[O]===e?O++:T===null?T=[e]:(!$||!T.includes(e))&&T.push(e))}}else if(r&&e.deps===null&&e.effects===null){var l=e,i=l.parent;i!==null&&(i.f&D)===0&&(l.f^=D)}return r&&(l=e,_e(l)&&Bt(l)),Me&&ce.has(e)?ce.get(e):e.v}function tr(e){var t=F;try{return F=!0,e()}finally{F=t}}const tn=-7169;function B(e,t){e.f=e.f&tn|t}const rn=["touchstart","touchmove"];function nn(e){return rn.includes(e)}function ln(e,t){{const r=document.body;e.autofocus=!0,Xt(()=>{document.activeElement===r&&e.focus()})}}let Et=!1;function un(){Et||(Et=!0,document.addEventListener("reset",e=>{Promise.resolve().then(()=>{var t;if(!e.defaultPrevented)for(const r of e.target.elements)(t=r.__on_r)==null||t.call(r)})},{capture:!0}))}function rr(e){var t=g,r=E;U(null),j(null);try{return e()}finally{U(t),j(r)}}function an(e,t,r,n=r){e.addEventListener(t,()=>rr(r));const l=e.__on_r;l?e.__on_r=()=>{l(),n(!0)}:e.__on_r=()=>n(!0),un()}const nr=new Set,Xe=new Set;function fn(e,t,r,n={}){function l(i){if(n.capture||oe.call(t,i),!i.cancelBubble)return rr(()=>r==null?void 0:r.call(this,i))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?Xt(()=>{t.addEventListener(e,l,n)}):t.addEventListener(e,l,n),l}function on(e,t,r,n,l){var i={capture:n,passive:l},f=fn(e,t,r,i);(t===document.body||t===window||t===document)&&Ht(()=>{t.removeEventListener(e,f,i)})}function sn(e){for(var t=0;t<e.length;t++)nr.add(e[t]);for(var r of Xe)r(e)}function oe(e){var p;var t=this,r=t.ownerDocument,n=e.type,l=((p=e.composedPath)==null?void 0:p.call(e))||[],i=l[0]||e.target,f=0,v=e.__root;if(v){var s=l.indexOf(v);if(s!==-1&&(t===document||t===window)){e.__root=t;return}var a=l.indexOf(t);if(a===-1)return;s<=a&&(f=s)}if(i=l[f]||e.target,i!==t){dr(e,"currentTarget",{configurable:!0,get(){return i||r}});var o=g,c=E;U(null),j(null);try{for(var u,_=[];i!==null;){var h=i.assignedSlot||i.parentNode||i.host||null;try{var m=i["__"+n];if(m!=null&&(!i.disabled||e.target===i))if(Ze(m)){var[N,...w]=m;N.apply(i,[e,...w])}else m.call(i,e)}catch(y){u?_.push(y):u=y}if(e.cancelBubble||h===t||h===null)break;i=h}if(u){for(let y of _)queueMicrotask(()=>{throw y});throw u}}finally{e.__root=t,delete e.currentTarget,U(o),j(c)}}}function cn(e){var t=document.createElement("template");return t.innerHTML=e,t.content}function bt(e,t){var r=E;r.nodes_start===null&&(r.nodes_start=e,r.nodes_end=t)}function de(e,t){var r=(t&Or)!==0,n=(t&Ir)!==0,l,i=!e.startsWith("<!>");return()=>{l===void 0&&(l=cn(i?e:"<!>"+e),r||(l=be(l)));var f=n||Dt?document.importNode(l,!0):l.cloneNode(!0);if(r){var v=be(f),s=f.lastChild;bt(v,s)}else bt(f,f);return f}}function fe(e,t){e!==null&&e.before(t)}function He(e,t){var r=t==null?"":typeof t=="object"?t+"":t;r!==(e.__t??(e.__t=e.nodeValue))&&(e.__t=r,e.nodeValue=r+"")}function vn(e,t){return _n(e,t)}const ee=new Map;function _n(e,{target:t,anchor:r,props:n={},events:l,context:i,intro:f=!0}){Rr();var v=new Set,s=c=>{for(var u=0;u<c.length;u++){var _=c[u];if(!v.has(_)){v.add(_);var h=nn(_);t.addEventListener(_,oe,{passive:h});var m=ee.get(_);m===void 0?(document.addEventListener(_,oe,{passive:h}),ee.set(_,1)):ee.set(_,m+1)}}};s(ze(nr)),Xe.add(s);var a=void 0,o=Hr(()=>{var c=r??t.appendChild(Vt());return ve(()=>{if(i){It({});var u=V;u.c=i}l&&(n.$$events=l),a=e(c,n)||{},i&&Mt()}),()=>{var h;for(var u of v){t.removeEventListener(u,oe);var _=ee.get(u);--_===0?(document.removeEventListener(u,oe),ee.delete(u)):ee.set(u,_)}Xe.delete(s),c!==r&&((h=c.parentNode)==null||h.removeChild(c))}});return dn.set(a,o),a}let dn=new WeakMap;function We(e,t,[r,n]=[0,0]){var l=e,i=null,f=null,v=S,s=r>0?Qe:0,a=!1;const o=(u,_=!0)=>{a=!0,c(_,u)},c=(u,_)=>{v!==(v=u)&&(v?(i?Te(i):_&&(i=ve(()=>_(l))),f&&xe(f,()=>{f=null})):(f?Te(f):_&&(f=ve(()=>_(l,[r+1,n]))),i&&xe(i,()=>{i=null})))};tt(()=>{a=!1,t(o),a||c(null,null)},s)}function hn(e,t,r,n){for(var l=[],i=t.length,f=0;f<i;f++)rt(t[f].e,l,!0);var v=i>0&&l.length===0&&r!==null;if(v){var s=r.parentNode;Fr(s),s.append(r),n.clear(),K(e,t[0].prev,t[i-1].next)}Gt(l,()=>{for(var a=0;a<i;a++){var o=t[a];v||(n.delete(o.k),K(e,o.prev,o.next)),G(o.e,!v)}})}function pn(e,t,r,n,l,i=null){var f=e,v={flags:t,items:new Map,first:null};{var s=e;f=s.appendChild(Vt())}var a=null,o=!1,c=qr(()=>{var u=r();return Ze(u)?u:u==null?[]:ze(u)});tt(()=>{var u=d(c),_=u.length;o&&_===0||(o=_===0,gn(u,v,f,l,t,n,r),i!==null&&(_===0?a?Te(a):a=ve(()=>i(f)):a!==null&&xe(a,()=>{a=null})),d(c))})}function gn(e,t,r,n,l,i,f){var v=e.length,s=t.items,a=t.first,o=a,c,u=null,_=[],h=[],m,N,w,p;for(p=0;p<v;p+=1){if(m=e[p],N=i(m,p),w=s.get(N),w===void 0){var y=o?o.e.nodes_start:r;u=mn(y,t,u,u===null?t.first:u.next,m,N,p,n,l,f),s.set(N,u),_=[],h=[],o=u.next;continue}if(wn(w,m,p),(w.e.f&W)!==0&&Te(w.e),w!==o){if(c!==void 0&&c.has(w)){if(_.length<h.length){var M=h[0],A;u=M.prev;var J=_[0],le=_[_.length-1];for(A=0;A<_.length;A+=1)xt(_[A],M,r);for(A=0;A<h.length;A+=1)c.delete(h[A]);K(t,J.prev,le.next),K(t,u,J),K(t,le,M),o=M,u=le,p-=1,_=[],h=[]}else c.delete(w),xt(w,o,r),K(t,w.prev,w.next),K(t,w,u===null?t.first:u.next),K(t,u,w),u=w;continue}for(_=[],h=[];o!==null&&o.k!==N;)(o.e.f&W)===0&&(c??(c=new Set)).add(o),h.push(o),o=o.next;if(o===null)continue;w=o}_.push(w),u=w,o=w.next}if(o!==null||c!==void 0){for(var Q=c===void 0?[]:ze(c);o!==null;)(o.e.f&W)===0&&Q.push(o),o=o.next;var he=Q.length;if(he>0){var Re=v===0?r:null;hn(t,Q,Re,s)}}E.first=t.first&&t.first.e,E.last=u&&u.e}function wn(e,t,r,n){Pt(e.v,t),e.i=r}function mn(e,t,r,n,l,i,f,v,s,a){var o=(s&Ar)!==0,c=(s&Cr)===0,u=o?c?Lr(l):Ee(l):l,_=(s&Sr)===0?f:Ee(f),h={i:_,v:u,k:i,a:null,e:null,prev:r,next:n};try{return h.e=ve(()=>v(e,u,_,a),Pr),h.e.prev=r&&r.e,h.e.next=n&&n.e,r===null?t.first=h:(r.next=h,r.e.next=h.e),n!==null&&(n.prev=h,n.e.prev=h.e),h}finally{}}function xt(e,t,r){for(var n=e.next?e.next.e.nodes_start:r,l=t?t.e.nodes_start:r,i=e.e.nodes_start;i!==n;){var f=Ie(i);l.before(i),i=f}}function K(e,t,r){t===null?e.first=r:(t.next=r,t.e.next=r&&r.e),r!==null&&(r.prev=t,r.e.prev=t&&t.e)}function yn(e,t,r){Wt(()=>{var n=tr(()=>t(e,r==null?void 0:r())||{});if(n!=null&&n.destroy)return()=>n.destroy()})}const Tt=[...` 	
\r\f \v\uFEFF`];function En(e,t,r){var n=""+e;if(r){for(var l in r)if(r[l])n=n?n+" "+l:l;else if(n.length)for(var i=l.length,f=0;(f=n.indexOf(l,f))>=0;){var v=f+i;(f===0||Tt.includes(n[f-1]))&&(v===n.length||Tt.includes(n[v]))?n=(f===0?"":n.substring(0,f))+n.substring(v+1):f=v}}return n===""?null:n}function pe(e,t,r,n,l,i){var f=e.__className;if(f!==r||f===void 0){var v=En(r,n,i);v==null?e.removeAttribute("class"):e.className=v,e.__className=r}else if(i&&l!==i)for(var s in i){var a=!!i[s];(l==null||a!==!!l[s])&&e.classList.toggle(s,a)}return i}const bn=Symbol("is custom element"),xn=Symbol("is html");function Tn(e,t){var r=lr(e);r.value===(r.value=t??void 0)||e.value===t&&(t!==0||e.nodeName!=="PROGRESS")||(e.value=t??"")}function kt(e,t){var r=lr(e);r.checked!==(r.checked=t??void 0)&&(e.checked=t)}function lr(e){return e.__attributes??(e.__attributes={[bn]:e.nodeName.includes("-"),[xn]:e.namespaceURI===Mr})}function kn(e,t,r=t){an(e,"input",n=>{var l=n?e.defaultValue:e.value;if(l=Ye(e)?Ke(l):l,r(l),l!==(l=t())){var i=e.selectionStart,f=e.selectionEnd;e.value=l??"",f!==null&&(e.selectionStart=i,e.selectionEnd=Math.min(f,e.value.length))}}),tr(t)==null&&e.value&&r(Ye(e)?Ke(e.value):e.value),Wr(()=>{var n=t();Ye(e)&&n===Ke(e.value)||e.type==="date"&&!n&&!e.value||n!==e.value&&(e.value=n??"")})}function Ye(e){var t=e.type;return t==="number"||t==="range"}function Ke(e){return e===""?null:+e}const Nn="5";var Nt;typeof window<"u"&&((Nt=window.__svelte??(window.__svelte={})).v??(Nt.v=new Set)).add(Nn);function $e(e){return e.focus(),{destroy(){}}}function An(e,t,r){if(e.key==="Enter"||e.type==="click"){const n=d(t).trim();n&&(d(r).push({id:Date.now(),text:n,completed:!1}),b(t,""))}}function Sn(e,t,r){const n=!d(t);for(const l of d(r))l.completed=n}function Cn(e,t){b(t,d(t).filter(r=>!r.completed),!0)}var On=(e,t,r)=>t(d(r).id),In=(e,t,r)=>t(d(r).id),Mn=(e,t,r)=>t(d(r).id),Ln=(e,t,r)=>t(d(r).id,e),Pn=de('<input class="edit">'),Rn=de('<li><div class="view"><input class="toggle" type="checkbox"> <label> </label> <button class="destroy"></button></div> <!></li>'),Dn=(e,t)=>b(t,"all"),Fn=(e,t)=>b(t,"active"),qn=(e,t)=>b(t,"completed"),Vn=de('<button class="clear-completed">Clear completed</button>'),Un=de('<section class="main"><input id="toggle-all" class="toggle-all" type="checkbox"> <label for="toggle-all">Mark all as complete</label> <ul class="todo-list"></ul></section> <footer class="footer"><span class="todo-count"><strong> </strong> </span> <ul class="filters"><li><a href="#/">All</a></li> <li><a href="#/active">Active</a></li> <li><a href="#/completed">Completed</a></li></ul> <!></footer>',1),Bn=de('<section class="todoapp"><header class="header"><h1>todos</h1> <input class="new-todo" placeholder="What needs to be done?"></header> <!></section>');function Hn(e,t){It(t,!0);let r=R(Z([])),n=R("all"),l=R(null),i=R(""),f=Ue(()=>{switch(d(n)){case"active":return d(r).filter(p=>!p.completed);case"completed":return d(r).filter(p=>p.completed);default:return d(r)}}),v=Ue(()=>d(r).filter(p=>!p.completed).length),s=Ue(()=>d(r).length>0&&d(v)===0);function a(p){b(r,d(r).filter(y=>y.id!==p),!0)}function o(p){const y=d(r).find(M=>M.id===p);y.completed=!y.completed}function c(p){b(l,p,!0)}function u(p,y){const M=y.target.value.trim();if(y.key==="Enter"||y.type==="blur"){if(M){const A=d(r).find(J=>J.id===p);A.text=M}else a(p);b(l,null)}}var _=Bn(),h=C(_),m=L(C(h),2);m.__keydown=[An,i,r],ln(m);var N=L(h,2);{var w=p=>{var y=Un(),M=Dr(y),A=C(M);A.__change=[Sn,s,r];var J=L(A,4);pn(J,21,()=>d(f),H=>H.id,(H,x)=>{var ie=Rn();let _t;var dt=C(ie),De=C(dt);De.__change=[On,o,x];var Fe=L(De,2);Fe.__dblclick=[In,c,x];var or=C(Fe),sr=L(Fe,2);sr.__click=[Mn,a,x];var cr=L(dt,2);{var vr=ue=>{var ae=Pn();ae.__keydown=[Ln,u,x],yn(ae,qe=>$e==null?void 0:$e(qe)),Be(()=>Tn(ae,d(x).text)),on("blur",ae,qe=>u(d(x).id,qe)),fe(ue,ae)};We(cr,ue=>{d(l)===d(x).id&&ue(vr)})}Be(ue=>{_t=pe(ie,1,"",null,_t,ue),kt(De,d(x).completed),He(or,d(x).text)},[()=>({completed:d(x).completed,editing:d(l)===d(x).id})]),fe(H,ie)});var le=L(M,2),Q=C(le),he=C(Q),Re=C(he),ir=L(he),lt=L(Q,2),it=C(lt),ut=C(it);ut.__click=[Dn,n];let at;var ft=L(it,2),ot=C(ft);ot.__click=[Fn,n];let st;var ur=L(ft,2),ct=C(ur);ct.__click=[qn,n];let vt;var ar=L(lt,2);{var fr=H=>{var x=Vn();x.__click=[Cn,r],fe(H,x)};We(ar,H=>{d(r).length>d(v)&&H(fr)})}Be((H,x,ie)=>{kt(A,d(s)),He(Re,d(v)),He(ir,` ${(d(v)===1?"item":"items")??""} left`),at=pe(ut,1,"",null,at,H),st=pe(ot,1,"",null,st,x),vt=pe(ct,1,"",null,vt,ie)},[()=>({selected:d(n)==="all"}),()=>({selected:d(n)==="active"}),()=>({selected:d(n)==="completed"})]),fe(p,y)};We(N,p=>{d(r).length>0&&p(w)})}kn(m,()=>d(i),p=>b(i,p)),fe(e,_),Mt()}sn(["keydown","change","dblclick","click"]);vn(Hn,{target:document.querySelector(".todoapp")});
