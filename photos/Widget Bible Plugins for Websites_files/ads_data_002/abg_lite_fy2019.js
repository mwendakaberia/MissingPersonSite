(function(){/* 
 
 Copyright The Closure Library Authors. 
 SPDX-License-Identifier: Apache-2.0 
*/ 
'use strict';var k=this||self,aa=/^[\w+/_-]+[=]{0,2}$/,m=null; 
function p(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null"; 
else if("function"==b&&"undefined"==typeof a.call)return"object";return b}function q(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}var r="closure_uid_"+(1E9*Math.random()>>>0),ba=0;function ca(a,b,c){return a.call.apply(a.bind,arguments)} 
function da(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}function t(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?t=ca:t=da;return t.apply(null,arguments)}var ea=Date.now||function(){return+new Date}; 
function fa(a,b){function c(){}c.prototype=b.prototype;a.prototype=new c;a.prototype.constructor=a};var v;a:{var ha=k.navigator;if(ha){var ia=ha.userAgent;if(ia){v=ia;break a}}v=""};function w(a,b){this.h=a===la&&b||"";this.g=ma}var ma={},la={};function na(a){na[" "](a);return a}na[" "]=function(){};var oa=-1!=v.indexOf("Trident")||-1!=v.indexOf("MSIE");function pa(){}var qa="function"==typeof Uint8Array;function ra(a,b,c){a.h=null;b||(b=[]);a.u=void 0;a.l=-1;a.g=b;a:{if(b=a.g.length){--b;var d=a.g[b];if(!(null===d||"object"!=typeof d||Array.isArray(d)||qa&&d instanceof Uint8Array)){a.m=b-a.l;a.j=d;break a}}a.m=Number.MAX_VALUE}a.o={};if(c)for(b=0;b<c.length;b++)if(d=c[b],d<a.m)d+=a.l,a.g[d]=a.g[d]||z;else{var e=a.m+a.l;a.g[e]||(a.j=a.g[e]={});a.j[d]=a.j[d]||z}}var z=[]; 
function A(a,b){if(b<a.m){b+=a.l;var c=a.g[b];return c===z?a.g[b]=[]:c}if(a.j)return c=a.j[b],c===z?a.j[b]=[]:c}function B(a,b,c){a=A(a,b);return null==a?c:a}function C(a,b){a=A(a,b);a=null==a?a:!!a;return null==a?!1:a}function sa(a){var b=ta;a.h||(a.h={});if(!a.h[1]){var c=A(a,1);c&&(a.h[1]=new b(c))}return a.h[1]}function ua(a){if(a.h)for(var b in a.h){var c=a.h[b];if("array"==p(c))for(var d=0;d<c.length;d++)c[d]&&ua(c[d]);else c&&ua(c)}}pa.prototype.toString=function(){ua(this);return this.g.toString()};function ta(a){ra(this,a,va)}fa(ta,pa);var va=[28];function wa(a){ra(this,a,xa)}fa(wa,pa);var xa=[21];function D(a,b,c){a.addEventListener&&a.addEventListener(b,c,!1)}function ya(a,b){a.removeEventListener&&a.removeEventListener("message",b,!1)};function E(a){var b=document;return"string"===typeof a?b.getElementById(a):a}function za(a){var b=document;b.getElementsByClassName?a=b.getElementsByClassName(a)[0]:(b=document,a=b.querySelectorAll&&b.querySelector&&a?b.querySelector(a?"."+a:""):Aa(b,a)[0]||null);return a||null} 
function Aa(a,b){var c,d;if(a.querySelectorAll&&a.querySelector&&b)return a.querySelectorAll(b?"."+b:"");if(b&&a.getElementsByClassName){var e=a.getElementsByClassName(b);return e}e=a.getElementsByTagName("*");if(b){var f={};for(c=d=0;a=e[c];c++){var g=a.className,h;if(h="function"==typeof g.split)h=0<=Array.prototype.indexOf.call(g.split(/\s+/),b,void 0);h&&(f[d++]=a)}f.length=d;return f}return e}function Ba(a){a&&a.parentNode&&a.parentNode.removeChild(a)};function F(a){try{var b;if(b=!!a&&null!=a.location.href)a:{try{na(a.foo);b=!0;break a}catch(c){}b=!1}return b}catch(c){return!1}}function Ca(a,b){if(a)for(const c in a)Object.prototype.hasOwnProperty.call(a,c)&&b.call(void 0,a[c],c,a)};var Da=/^true$/.test("false"),Ea=/^true$/.test("false"),Fa=/^true$/.test("true");let Ga=Fa||!Ea;var H=document,I=window;function Ha(a,b){a.google_image_requests||(a.google_image_requests=[]);const c=a.document.createElement("img");c.src=b;a.google_image_requests.push(c)};var Ia=(a,b)=>{if(a)for(let c in a)Object.prototype.hasOwnProperty.call(a,c)&&b.call(void 0,a[c],c,a)},Ja=!!window.google_async_iframe_id;let J=Ja&&window.parent||window;var Ka=a=>{try{let b=I;a=a||I;for(let c=0;20>c;c++){if(b==a)return!0;if(b==a.top)break;b=b.parent}}catch(b){}return!1},K=(a,b)=>{a&&Ia(b,(c,d)=>{a.style[d]=c})};class La{constructor(a,b,c={}){this.error=a;this.context=b.context;this.msg=b.message||"";this.id=b.id||"jserror";this.meta=c}};const Na=/^https?:\/\/(\w|-)+\.cdn\.ampproject\.(net|org)(\?|\/|$)/;var Oa=class{constructor(a,b){this.g=a;this.h=b}},Pa=class{constructor(a,b,c,d,e){this.url=a;this.M=!!d;this.depth="number"===typeof e?e:null}};function Qa(a,b){const c={};c[a]=b;return[c]}function Ra(a,b,c,d,e){const f=[];Ca(a,function(g,h){(g=Sa(g,b,c,d,e))&&f.push(h+"="+g)});return f.join(b)} 
function Sa(a,b,c,d,e){if(null==a)return"";b=b||"&";c=c||",$";"string"==typeof c&&(c=c.split(""));if(a instanceof Array){if(d=d||0,d<c.length){const f=[];for(let g=0;g<a.length;g++)f.push(Sa(a[g],b,c,d+1,e));return f.join(c[d])}}else if("object"==typeof a)return e=e||0,2>e?encodeURIComponent(Ra(a,b,c,d,e+1)):"...";return encodeURIComponent(String(a))}function L(a,b,c,d){a.g.push(b);a.h[b]=Qa(c,d)} 
function Ta(a){if(!a.l)return a.o;let b=1;for(const c in a.h)b=c.length>b?c.length:b;return a.o-a.l.length-b-a.j.length-1} 
function Ua(a,b,c,d){b=b+"//"+c+d;let e=Ta(a)-d.length;if(0>e)return"";a.g.sort(function(g,h){return g-h});d=null;c="";for(var f=0;f<a.g.length;f++){const g=a.g[f],h=a.h[g];for(let n=0;n<h.length;n++){if(!e){d=null==d?g:d;break}let l=Ra(h[n],a.j,a.u);if(l){l=c+l;if(e>=l.length){e-=l.length;b+=l;c=a.j;break}a.m&&(c=e,l[c-1]==a.j&&--c,b+=l.substr(0,c),c=a.j,e=0);d=null==d?g:d}}}f="";a.l&&null!=d&&(f=c+a.l+"="+(a.w||d));return b+f} 
class Va{constructor(a,b,c,d,e){this.o=c||4E3;this.j=a||"&";this.u=b||",$";this.l=void 0!==d?d:"trn";this.w=e||null;this.m=!1;this.h={};this.v=0;this.g=[]}};function Wa(){var a=Xa,b=N.google_srt;0<=b&&1>=b&&(a.g=b)}function Ya(a,b,c,d,e){if((d?a.g:Math.random())<(e||a.h))try{let f;c instanceof Va?f=c:(f=new Va,Ca(c,(h,n)=>{var l=f,x=l.v++;h=Qa(n,h);l.g.push(x);l.h[x]=h}));const g=Ua(f,a.m,a.j,a.l+b+"&");g&&Ha(k,g)}catch(f){}}class Za{constructor(a,b,c,d){this.m=a;this.j=b;this.l=c;this.h=d;this.g=Math.random()}};let O=null;var $a=()=>{const a=k.performance;return a&&a.now&&a.timing?Math.floor(a.now()+a.timing.navigationStart):ea()},ab=()=>{const a=k.performance;return a&&a.now?a.now():null};class bb{constructor(a,b,c,d=0,e){this.label=a;this.type=b;this.value=c;this.duration=d;this.uniqueId=Math.random();this.slotId=e}};const P=k.performance,cb=!!(P&&P.mark&&P.measure&&P.clearMarks),Q=function(a){let b=!1,c;return function(){b||(c=a(),b=!0);return c}}(()=>{var a;if(a=cb){var b;if(null===O){O="";try{a="";try{a=k.top.location.hash}catch(c){a=k.location.hash}a&&(O=(b=a.match(/\bdeid=([\d,]+)/))?b[1]:"")}catch(c){}}b=O;a=!!b.indexOf&&0<=b.indexOf("1337")}return a});function db(a){a&&P&&Q()&&(P.clearMarks(`goog_${a.label}_${a.uniqueId}_start`),P.clearMarks(`goog_${a.label}_${a.uniqueId}_end`))} 
class eb{constructor(a,b){this.h=[];this.j=b||k;let c=null;b&&(b.google_js_reporting_queue=b.google_js_reporting_queue||[],this.h=b.google_js_reporting_queue,c=b.google_measure_js_timing);this.g=Q()||(null!=c?c:Math.random()<a)}start(a,b){if(!this.g)return null;const c=ab()||$a();a=new bb(a,b,c);b=`goog_${a.label}_${a.uniqueId}_start`;P&&Q()&&P.mark(b);return a}};function fb(a){let b=a.toString();a.name&&-1==b.indexOf(a.name)&&(b+=": "+a.name);a.message&&-1==b.indexOf(a.message)&&(b+=": "+a.message);if(a.stack){a=a.stack;try{-1==a.indexOf(b)&&(a=b+"\n"+a);let c;for(;a!=c;)c=a,a=a.replace(/((https?:\/..*\/)[^\/:]*:\d+(?:.|\n)*)\2/,"$1");b=a.replace(/\n */g,"\n")}catch(c){}}return b} 
function gb(a,b,c){let d,e;try{if(a.g&&a.g.g){e=a.g.start(b.toString(),3);d=c();var f=a.g;c=e;if(f.g&&"number"===typeof c.value){var g=ab()||$a();c.duration=g-c.value;var h=`goog_${c.label}_${c.uniqueId}_end`;P&&Q()&&P.mark(h);!f.g||2048<f.h.length||f.h.push(c)}}else d=c()}catch(n){f=a.o;try{db(e),f=a.u(b,new La(n,{message:fb(n)}),void 0,void 0)}catch(l){a.l(217,l)}if(!f)throw n;}return d}function hb(a,b){var c=R;return(...d)=>gb(c,a,()=>b.apply(void 0,d))} 
class ib{constructor(a,b,c,d=null){this.m=a;this.v=b;this.o=c;this.h=null;this.u=this.l;this.g=d;this.j=!1}l(a,b,c,d,e){e=e||this.v;let f;try{const u=new Va;u.m=!0;L(u,1,"context",a);b.error&&b.meta&&b.id||(b=new La(b,{message:fb(b)}));b.msg&&L(u,2,"msg",b.msg.substring(0,512));var g=b.meta||{};b=g;if(this.h)try{this.h(b)}catch(G){}if(d)try{d(b)}catch(G){}d=u;g=[g];d.g.push(3);d.h[3]=g;{{d=k;g=[];b=null;let ja;do{var h=d;if(F(h)){var n=h.location.href;b=h.document&&h.document.referrer||null;ja=!0}else n= 
b,b=null,ja=!1;g.push(new Pa(n||"",h,ja));try{d=h.parent}catch(M){d=null}}while(d&&h!=d);for(let M=0,Ma=g.length-1;M<=Ma;++M)g[M].depth=Ma-M;h=k;if(h.location&&h.location.ancestorOrigins&&h.location.ancestorOrigins.length==g.length-1)for(n=1;n<g.length;++n){var l=g[n];l.url||(l.url=h.location.ancestorOrigins[n-1]||"",l.M=!0)}var x=g}let G=new Pa(k.location.href,k,!0,!1);h=null;const ka=x.length-1;for(l=ka;0<=l;--l){var y=x[l];!h&&Na.test(y.url)&&(h=y);if(y.url&&!y.M){G=y;break}}y=null;const wb=x.length&& 
x[ka].url;0!=G.depth&&wb&&(y=x[ka]);f=new Oa(G,y,h)}f.h&&L(u,4,"top",f.h.url||"");L(u,5,"url",f.g.url||"");Ya(this.m,e,u,this.j,c)}catch(u){try{Ya(this.m,e,{context:"ecmserr",rctx:a,msg:fb(u),url:f&&f.g.url},this.j,c)}catch(G){}}return this.o}};let Xa,R,jb;if(Ja&&!F(J)){let a="."+H.domain;try{for(;2<a.split(".").length&&!F(J);)H.domain=a=a.substr(a.indexOf(".")+1),J=window.parent}catch(b){}F(J)||(J=window)}const N=J,S=new eb(1,N);var kb=()=>{N.google_measure_js_timing||(S.g=!1,S.h!=S.j.google_js_reporting_queue&&(Q()&&Array.prototype.forEach.call(S.h,db,void 0),S.h.length=0))}; 
(()=>{Xa=new Za("http:"===I.location.protocol?"http:":"https:","pagead2.googlesyndication.com","/pagead/gen_204?id=",.01);"number"!==typeof N.google_srt&&(N.google_srt=Math.random());Wa();R=new ib(Xa,"jserror",!0,S);R.h=b=>{var c=I.jerExpIds;if("array"==p(c)&&0!==c.length){var d=b.eid;if(d){d=[...d.split(","),...c];c={};for(var e=0,f=0;f<d.length;){var g=d[f++];var h=g;h=q(h)?"o"+(Object.prototype.hasOwnProperty.call(h,r)&&h[r]||(h[r]=++ba)):(typeof h).charAt(0)+h;Object.prototype.hasOwnProperty.call(c, 
h)||(c[h]=!0,d[e++]=g)}d.length=e;b.eid=d.join(",")}else b.eid=c.join(",")}jb&&(b.jc=jb);(d=I.jerUserAgent)&&(b.useragent=d)};R.j=!0;"complete"==N.document.readyState?kb():S.g&&D(N,"load",()=>{kb()});const a=H.currentScript;jb=a?a.dataset.jc:""})();var T=(a,b)=>hb(a,b);var lb=class{constructor(a,b,c,d,e){this.xOffset=b;this.yOffset=c;this.height=e;this.width=d;this.g=null}}; 
function mb(a){var b=new nb,c=0,d=0;for(let f=0;20>f;++f){{var e=a.document.body;const g=e.parentElement;e={height:a===k.top?e.scrollHeight||g.scrollHeight:a.innerHeight,width:a===k.top?e.scrollWidth||g.scrollWidth:a.innerWidth}}d=new lb(a,c,d,e.width,e.height);c=b;d.g=c;c.referenceFrameArray.push(d);if(!(c=!a.frameElement)){c=!1;try{a.parent.document.body&&(c=!1)}catch(g){c=!0}}if(c)break;else d=a.frameElement.getBoundingClientRect(),c=d.left+a.parent.pageXOffset,d=d.top+a.parent.pageYOffset,a=a.parent}return b} 
function ob(a){return{referenceFrameArray:a.referenceFrameArray.map(b=>({xOffset:b.xOffset,yOffset:b.yOffset,height:b.height,width:b.width}))}}var nb=class{constructor(){this.referenceFrameArray=[]}};function U(){this.h=this.h;this.w=this.w}U.prototype.h=!1;U.prototype.g=function(){if(this.w)for(;this.w.length;)this.w.shift()()};function pb(a){let b={};b.c=a.o;b.i=a.v;a.F&&(b.e=a.F);a.j.postMessage(JSON.stringify(b),a.m)}function V(a,b,c){a.B[b]=c} 
class qb extends U{constructor(a,b,c,d,e,f){super();this.o=a;this.status=1;this.j=b;this.m=c;this.I=d;this.G=!!e;this.v=Math.random();this.B={};this.u=null;this.A=t(this.H,this);this.F=f}H(a){if(a.origin===this.m&&(this.G||a.source==this.j)){var b=null;try{b=JSON.parse(a.data)}catch(c){}if(q(b)&&(a=b.i,b.c===this.o&&a!=this.v)){if(2!==this.status)try{this.status=2,pb(this),this.u&&(this.u(),this.u=null)}catch(c){}a=b.s;b=b.p;if("string"===typeof a&&("string"===typeof b||q(b))&&this.B.hasOwnProperty(a))this.B[a](b)}}}D(){if(1=== 
this.status){try{this.j.postMessage&&pb(this)}catch(a){}window.setTimeout(t(this.D,this),50)}}connect(a){a&&(this.u=a);D(window,"message",this.A);this.I&&this.D()}l(a,b){let c={};c.c=this.o;c.i=this.v;c.s=a;c.p=b;try{this.j.postMessage(JSON.stringify(c),this.m)}catch(d){}}g(){this.status=3;ya(window,this.A);super.g()}};function rb(a,b){return new Promise((c,d)=>{k.setTimeout(()=>d(Error("apmc:timeout")),4E3);try{const e=JSON.parse(a.data),f=e.c;if("apmc:bc:cr"===e.s&&f===b&&null!=a.source&&"string"==typeof a.origin){const g=new sb(f,a.source,a.origin,!0);tb(g,a).then(()=>c(g),()=>{g.h||(g.h=!0,g.g())})}else throw Error("Invalid connection event");}catch(e){d(Error("apmc:error"))}})} 
function tb(a,b){const c=new Promise((d,e)=>{k.setTimeout(()=>e(Error("apmc:nocon")),4E3);oa?k.setTimeout(()=>a.connect(d),0):a.connect(d)});c.then(()=>a.A(b),()=>{});return c}function ub(a,b,c={}){const d={["c"]:a.o,["i"]:a.v,["s"]:b,["p"]:c};a.C&&(d.msg_type=a.C);oa?k.setTimeout(()=>{a.j.postMessage(JSON.stringify(d),a.m)},0):a.j.postMessage(JSON.stringify(d),a.m)}class sb extends qb{constructor(a,b,c,d,e){super(a,b,c,d);this.C=e}l(a,b){ub(this,a,b)}};class vb{constructor(){this.h=new Promise(a=>{this.g=a})}};function xb(a,b){Ka(b.source)&&!a.l&&(a.l=!0,rb(b,a.u).then(c=>{ya(I,a.j);a.o=c;a.m.g&&a.m.g(c)},()=>{a.l=!1}))}function yb(a){const b={["msg_type"]:a.v};D(I,"message",a.j);a=I.top;b.googMsgType="sth";a.postMessage(JSON.stringify(b),"*")}class zb extends U{constructor(a,b){super();this.v=a;this.o=null;this.m=new vb;this.l=!1;this.u=b;this.j=T(276,c=>xb(this,c))}g(){ya(I,this.j);if(this.o){var a=this.o;a.h||(a.h=!0,a.g())}super.g()}};function Ab(a){return"string"==typeof a.className?a.className:a.getAttribute&&a.getAttribute("class")||""}function Bb(a,b){a.classList?b=a.classList.contains(b):(a=a.classList?a.classList:Ab(a).match(/\S+/g)||[],b=0<=Array.prototype.indexOf.call(a,b,void 0));return b}function W(a,b){if(a.classList)a.classList.add(b);else if(!Bb(a,b)){var c=Ab(a);b=c+(0<c.length?" "+b:b);"string"==typeof a.className?a.className=b:a.setAttribute&&a.setAttribute("class",b)}};class Cb{constructor(a){this.g=(this.serializedAttributionData=a)?new wa(a):null;this.isMutableImpression=null!=A(this.g,1)&&!!C(sa(this.g),33);this.R=B(this.g,30,"")||"";this.Y=!!C(this.g,11);this.hasUserFeedbackData=!!this.g&&null!=A(this.g,1);this.P=!!C(this.g,4);this.U=!!C(this.g,6);this.G=!!C(this.g,13);B(this.g,8,0);this.creativeIndexSuffix=1<B(this.g,8,0)?B(this.g,7,0).toString():"";this.Z=!!C(this.g,17);this.X=!!C(this.g,18);this.O=!!C(this.g,14);this.H=!!C(this.g,15);this.V=1==C(this.g,9); 
this.openAttributionInline=1==C(this.g,10);this.isMobileDevice=!!C(this.g,12);this.L=null;this.T=(a=H.querySelector("[data-slide]"))?"true"===a.getAttribute("data-slide"):!1;(this.J=""!==this.creativeIndexSuffix)&&void 0===I.goog_multislot_cache&&(I.goog_multislot_cache={});if(this.J&&!this.T){if(a=I.goog_multislot_cache.hd,void 0===a){a=!1;var b=H.querySelector("[data-dim]");if(b)if(b=b.getBoundingClientRect(),150<=b.right-b.left&&150<=b.bottom-b.top)a=!1;else{var c=document.body.getBoundingClientRect(); 
150>(1>=Math.abs(c.left-b.left)&&1>=Math.abs(c.right-b.right)?b.bottom-b.top:b.right-b.left)&&(a=!0)}else a=!1;window.goog_multislot_cache.hd=a}}else a=!1;this.I=a;this.w=E("abgcp"+this.creativeIndexSuffix);this.C=E("abgc"+this.creativeIndexSuffix);this.h=E("abgs"+this.creativeIndexSuffix);this.B=E("abgl"+this.creativeIndexSuffix);this.u=E("abgb"+this.creativeIndexSuffix);this.F=E("abgac"+this.creativeIndexSuffix);E("mute_panel"+this.creativeIndexSuffix);this.D=za("goog_delegate_attribution"+this.creativeIndexSuffix); 
this.isDelegateAttributionActive=!!this.D&&!!this.O&&!za("goog_delegate_disabled")&&!this.H;if(this.h)a:{a=this.h;b="A";c=a.childNodes;for(let d=0;d<c.length;d++){const e=c.item(d);if("undefined"!=typeof e.tagName&&e.tagName.toUpperCase()==b){a=e;break a}}}else a=null;this.l=a;this.W="left"==this.R;this.m=this.isDelegateAttributionActive?this.D:E("cbb"+this.creativeIndexSuffix);this.S=this.I?"0"===this.creativeIndexSuffix:!0;this.enableDelegateDismissableMenu=!!this.m&&Bb(this.m,"goog_dismissable_menu"); 
this.o=null;this.K=0;this.j=this.isDelegateAttributionActive?this.D:this.U&&this.w?this.w:this.C;this.A=null;this.v=I;this.N=!!C(this.g,19);this.adbadgeEnabled=!!C(this.g,24);this.enableNativeJakeUi=!!C(this.g,27)}};class Db{constructor(a,b,c){if(!a)throw Error("bad conv util ctor args");this.h=a;this.g=c}};function Eb(a){if(a.g.l&&a.g.X){const b=sa(a.g.g);b&&null!=A(b,5)&&null!=A(b,6)&&(a.j=new Db(B(b,5,""),B(b,6,""),B(b,19,"")));D(a.g.l,"click",T(452,()=>{if(!a.o&&(a.o=!0,a.j)){{var c=a.j;let d=c.h+"&label=closebutton_whythisad_click";d+="&label_instance=1";c.g&&(d+="&cid="+c.g);Ha(window,d)}}}))}} 
function Fb(a){if(a.g.Y)D(a.g.j,"click",T(365,b=>{const c=I.goog_interstitial_display;c&&(c(b),b&&(b.stopPropagation(),b.preventDefault()))}));else if(a.g.isMutableImpression&&a.g.isMobileDevice)D(a.g.j,"click",()=>a.h());else if(a.g.isMutableImpression&&!a.g.isMobileDevice&&a.g.m&&D(a.g.m,"click",()=>a.h()),a.g.P)Gb(a);else{D(a.g.j,"mouseover",T(367,()=>Gb(a)));D(a.g.j,"mouseout",T(369,()=>Hb(a,500)));D(a.g.j,"touchstart",T(368,()=>Gb(a)));const b=T(370,()=>Hb(a,4E3));D(a.g.j,"mouseup",b);D(a.g.j, 
"touchend",b);D(a.g.j,"touchcancel",b);a.g.l&&D(a.g.l,"click",T(371,c=>a.preventDefault(c)))}} 
function Ib(a){a.g.G&&(a.l=new zb("xcat","xca-ch"),a.l.m.h.then(b=>{V(b,"xca-rdy",()=>{a.g.A=mb(a.g.v);const c={abgp:a.g.v.abgp,name:a.g.v.name,abg_href:a.g.B.getAttribute("href"),abg_target:a.g.B.getAttribute("target"),is_mutable_impression:a.g.isMutableImpression,is_mobile:!!a.g.w,is_rtl:a.g.W,has_aria_hidden:"true"===a.g.B.getAttribute("aria-hidden"),serializable_reference_frame_set:ob(a.g.A)};b.l("render-xca",c)});V(b,"req-pos-xca",()=>{a.g.A=mb(a.g.v);const c={serializable_reference_frame_set:ob(a.g.A)}; 
b.l("pos-xca",c)});V(b,"xca-dis",()=>{clearTimeout(a.m);a.m=null;W(document.body,"jaa")});V(b,"xca-clk",()=>{a.g.L.expandAttributionCard();b.l("hide-xca",{})});b.l("chk-xca",{})}),yb(a.l))}function Gb(a){window.clearTimeout(a.g.o);a.g.o=null;a.g.h&&"block"==a.g.h.style.display||(a.g.K=Date.now(),a.g.u&&a.g.h&&(a.g.u.style.display="none",a.g.h.style.display="block",window.goog_extracreative_attribution&&window.postMessage("xca_exp","*")))} 
function Hb(a,b){window.clearTimeout(a.g.o);a.g.o=window.setTimeout(()=>Jb(a),b)}function Kb(a){const b=a.g.F;b.style.display="block";a.g.enableNativeJakeUi&&window.requestAnimationFrame(()=>{W(b,"abgacfo")})}function Jb(a){window.clearTimeout(a.g.o);a.g.o=null;a.g.u&&a.g.h&&(a.g.u.style.display="block",a.g.h.style.display="none");window.goog_extracreative_attribution&&window.postMessage("xca_col","*")} 
class Lb{constructor(a,b){this.g=a;this.h=b;this.g.Z||(this.o=!1,this.l=this.m=this.j=null,!this.g.I||this.g.adbadgeEnabled||this.g.S?Eb(this):(a={display:"none"},b={width:"15px",height:"15px"},this.g.isMobileDevice?(K(this.g.u,a),K(this.g.h,a),K(this.g.w,b),K(this.g.C,b)):K(this.g.C,a)),Fb(this),this.g.enableNativeJakeUi&&W(this.g.F,"abgnac"),this.g.isDelegateAttributionActive?(W(document.body,"goog_delegate_active"),W(document.body,"jaa")):(!this.g.isMutableImpression&&this.g.m&&Ba(this.g.m),this.m= 
setTimeout(()=>{W(document.body,"jar")},this.g.G?750:100)),this.g.H&&W(document.body,"goog_delegate_disabled"),this.g.N&&I.addEventListener("load",()=>this.h()),Ib(this))}preventDefault(a){if(this.g.h&&"block"==this.g.h.style.display&&500>Date.now()-this.g.K)a.preventDefault?a.preventDefault():a.returnValue=!1;else if(this.g.openAttributionInline){var b=this.g.l.getAttribute("href");window.adSlot?window.adSlot.openAttribution(b)&&(a.preventDefault?a.preventDefault():a.returnValue=!1):window.openAttribution&& 
(window.openAttribution(b),a.preventDefault?a.preventDefault():a.returnValue=!1)}else this.g.V&&(b=this.g.l.getAttribute("href"),window.adSlot?window.adSlot.openSystemBrowser(b)&&(a.preventDefault?a.preventDefault():a.returnValue=!1):window.openSystemBrowser&&(window.openSystemBrowser(b),a.preventDefault?a.preventDefault():a.returnValue=!1))}};function Mb(a){if(!a.g&&(a.g=!0,I.goog_delegate_deferred_token=void 0,a.h)){var b=a.j;a=a.h;if(!a)throw Error("bad attrdata");a=new Cb(a);new b(a)}}class Nb{constructor(a,b){if(!a)throw Error("bad ctor");this.j=a;this.h=b;this.g=!1;za("goog_delegate_deferred")?void 0!==I.goog_delegate_deferred_token?Mb(this):(a=()=>{Mb(this)},I.goog_delegate_deferred_token=a,setTimeout(a,5E3)):Mb(this)}};var Ob=()=>{a:{if(Da)try{var a=I.google_cafe_host||I.top.google_cafe_host;if(a){var b=a;break a}}catch(c){}b="pagead2.googlesyndication.com"}a=Fa?"https":"http";if("relative"===b)return"/pagead/js/r20200305/r20110914/abg_survey.js";a||(a=Ga?"https":"http");k.location&&"https:"==k.location.protocol&&"http"==a&&(a="https");return[a,"://",b,"/pagead/js/r20200305/r20110914/abg_survey.js"].join("")};var Pb=(a=[])=>{k.google_logging_queue||(k.google_logging_queue=[]);k.google_logging_queue.push([11,a])};var Qb=class{constructor(){const a=new vb;this.promise=a.h;this.resolve=a.g}};function Rb(a,b){a.google_llp||(a.google_llp={});a=a.google_llp;a[5]||(a[5]=new Qb,b&&b());return a[5]} 
function Sb(){var a=window,b=Ob();return Rb(a,function(){{var c=a.document;const e=c.createElement("script");var d=new w(la,b);d instanceof w&&d.constructor===w&&d.g===ma?d=d.h:(p(d),d="type_error:TrustedResourceUrl");e.src=d;if(null===m)a:{d=k.document;if((d=d.querySelector&&d.querySelector("script[nonce]"))&&(d=d.nonce||d.getAttribute("nonce"))&&aa.test(d)){m=d;break a}m=""}(d=m)&&e.setAttribute("nonce",d);(c=c.getElementsByTagName("script")[0])&&c.parentNode&&c.parentNode.insertBefore(e,c)}}).promise} 
;function Tb(a){gb(R,373,()=>{Jb(a.h);Kb(a.h)});window.goog_extracreative_attribution||Sb().then(b=>{b.createAttributionCard(a.g);a.g.L=b;b.expandAttributionCard()})}class Ub{constructor(a){this.g=a;this.h=new Lb(this.g,T(359,()=>Tb(this)))}};function Vb(a){Pb([a]);new Nb(Ub,a)}var X=["buildAttribution"],Y=k;X[0]in Y||"undefined"==typeof Y.execScript||Y.execScript("var "+X[0]);for(var Z;X.length&&(Z=X.shift());)X.length||void 0===Vb?Y[Z]&&Y[Z]!==Object.prototype[Z]?Y=Y[Z]:Y=Y[Z]={}:Y[Z]=Vb;}).call(this);
