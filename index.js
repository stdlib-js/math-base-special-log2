// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var t,n;t=this,n=function(){"use strict";var t,n="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),r=Object.prototype.toString,e=Object.prototype.hasOwnProperty,o="function"==typeof Symbol?Symbol.toStringTag:"";t=n&&"symbol"==typeof Symbol.toStringTag?function(t){var n,i,a,u,f;if(null==t)return r.call(t);i=t[o],f=o,n=null!=(u=t)&&e.call(u,f);try{t[o]=void 0}catch(n){return r.call(t)}return a=r.call(t),n?t[o]=i:delete t[o],a}:function(t){return r.call(t)};var i,a=t,u="function"==typeof Uint32Array,f="function"==typeof Uint32Array?Uint32Array:null,c="function"==typeof Uint32Array?Uint32Array:void 0;i=function(){var t,n,r;if("function"!=typeof f)return!1;try{n=new f(n=[1,3.14,-3.14,4294967296,4294967297]),r=n,t=(u&&r instanceof Uint32Array||"[object Uint32Array]"===a(r))&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){t=!1}return t}()?c:function(){throw new Error("not implemented")};var l,y=i,p="function"==typeof Float64Array,b="function"==typeof Float64Array?Float64Array:null,v="function"==typeof Float64Array?Float64Array:void 0;l=function(){var t,n,r;if("function"!=typeof b)return!1;try{n=new b([1,3.14,-3.14,NaN]),r=n,t=(p&&r instanceof Float64Array||"[object Float64Array]"===a(r))&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){t=!1}return t}()?v:function(){throw new Error("not implemented")};var d,w=l,A="function"==typeof Uint8Array,s="function"==typeof Uint8Array?Uint8Array:null,_="function"==typeof Uint8Array?Uint8Array:void 0;d=function(){var t,n,r;if("function"!=typeof s)return!1;try{n=new s(n=[1,3.14,-3.14,256,257]),r=n,t=(A&&r instanceof Uint8Array||"[object Uint8Array]"===a(r))&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){t=!1}return t}()?_:function(){throw new Error("not implemented")};var m,U=d,g="function"==typeof Uint16Array,h="function"==typeof Uint16Array?Uint16Array:null,j="function"==typeof Uint16Array?Uint16Array:void 0;m=function(){var t,n,r;if("function"!=typeof h)return!1;try{n=new h(n=[1,3.14,-3.14,65536,65537]),r=n,t=(g&&r instanceof Uint16Array||"[object Uint16Array]"===a(r))&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){t=!1}return t}()?j:function(){throw new Error("not implemented")};var S,E={uint16:m,uint8:U};(S=new E.uint16(1))[0]=4660;var F=52===new E.uint8(S.buffer)[0],O=!0===F?1:0,N=new w(1),T=new y(N.buffer);function I(t){return N[0]=t,T[O]}var G,P=!0===F?1:0,x=new w(1),H=new y(x.buffer),V=!0===F?0:1,k=new w(1),L=new y(k.buffer),W="function"==typeof Object.defineProperty?Object.defineProperty:null,C=Object.defineProperty,Y=Object.prototype,q=Y.toString,z=Y.__defineGetter__,B=Y.__defineSetter__,D=Y.__lookupGetter__,J=Y.__lookupSetter__;G=function(){try{return W({},"x",{}),!0}catch(t){return!1}}()?C:function(t,n,r){var e,o,i,a;if("object"!=typeof t||null===t||"[object Array]"===q.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof r||null===r||"[object Array]"===q.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((o="value"in r)&&(D.call(t,n)||J.call(t,n)?(e=t.__proto__,t.__proto__=Y,delete t[n],t[n]=r.value,t.__proto__=e):t[n]=r.value),i="get"in r,a="set"in r,o&&(i||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return i&&z&&z.call(t,n,r.get),a&&B&&B.call(t,n,r.set),t};var K,M,Q=G;!0===F?(K=1,M=0):(K=0,M=1);var R={HIGH:K,LOW:M},X=new w(1),Z=new y(X.buffer),$=R.HIGH,tt=R.LOW;function nt(t,n,r,e){return X[0]=t,n[e]=Z[$],n[e+r]=Z[tt],n}function rt(t){return nt(t,[0,0],1,0)}Q(rt,"assign",{configurable:!1,enumerable:!1,writable:!1,value:nt});var et=Number.NEGATIVE_INFINITY,ot=1048575,it=1.4426950407214463,at=[0,0];return function(t){var n,r,e,o,i;if(function(t){return t!=t}(t)||t<0)return NaN;if(rt.assign(t,at,1,0),i=0,(r=at[0])<1048576){if(0==(2147483647&r|at[1]))return et;i-=54,r=I(t*=0x40000000000000)}return r>=2146435072?t+t:(i+=(r>>20)-1023|0,i+=(o=614244+(r&=1048575)&1048576|0)>>20|0,e=function(t){var n,r,e,o,i,a,u,f,c,l,y;return o=I(t),i=t-1,(ot&2+o)<3?0===i?0:i*i*(.3333333333333333*i-.5):(l=(o&=ot)-398458|0,y=440401-o|0,r=(c=(u=(a=i/(2+i))*a)*u)*function(t){return 0===t?.3999999999940942:.3999999999940942+t*(.22222198432149784+.15313837699209373*t)}(c),e=u*function(t){return 0===t?.6666666666666735:.6666666666666735+t*(.2857142874366239+t*(.1818357216161805+.14798198605116586*t))}(c),f=e+r,(l|=y)>0?a*((n=.5*i*i)+f)-n:a*(f-i))}(t=function(t,n){return x[0]=t,H[P]=n>>>0,x[0]}(t,r|1072693248^o)),n=function(t,n){return k[0]=t,L[V]=n>>>0,k[0]}(t-=1,0),1.6751713164886512e-10*(t+e)+(t-n+e)*it+n*it+i)}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(t="undefined"!=typeof globalThis?globalThis:t||self).log2=n();
//# sourceMappingURL=index.js.map
