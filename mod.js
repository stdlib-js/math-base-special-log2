// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var n="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");var r=Object.prototype.toString;var t=Object.prototype.hasOwnProperty;var o="function"==typeof Symbol?Symbol.toStringTag:"";var e=n&&"symbol"==typeof Symbol.toStringTag?function(n){var e,i,a,f,u;if(null==n)return r.call(n);i=n[o],u=o,e=null!=(f=n)&&t.call(f,u);try{n[o]=void 0}catch(t){return r.call(n)}return a=r.call(n),e?n[o]=i:delete n[o],a}:function(n){return r.call(n)},i="function"==typeof Uint32Array;var a="function"==typeof Uint32Array?Uint32Array:null;var f,u="function"==typeof Uint32Array?Uint32Array:void 0;f=function(){var n,r,t;if("function"!=typeof a)return!1;try{r=new a(r=[1,3.14,-3.14,4294967296,4294967297]),t=r,n=(i&&t instanceof Uint32Array||"[object Uint32Array]"===e(t))&&1===r[0]&&3===r[1]&&4294967293===r[2]&&0===r[3]&&1===r[4]}catch(r){n=!1}return n}()?u:function(){throw new Error("not implemented")};var c=f,y="function"==typeof Float64Array;var l="function"==typeof Float64Array?Float64Array:null;var v,p="function"==typeof Float64Array?Float64Array:void 0;v=function(){var n,r,t;if("function"!=typeof l)return!1;try{r=new l([1,3.14,-3.14,NaN]),t=r,n=(y&&t instanceof Float64Array||"[object Float64Array]"===e(t))&&1===r[0]&&3.14===r[1]&&-3.14===r[2]&&r[3]!=r[3]}catch(r){n=!1}return n}()?p:function(){throw new Error("not implemented")};var A=v,w="function"==typeof Uint8Array;var U="function"==typeof Uint8Array?Uint8Array:null;var b,m="function"==typeof Uint8Array?Uint8Array:void 0;b=function(){var n,r,t;if("function"!=typeof U)return!1;try{r=new U(r=[1,3.14,-3.14,256,257]),t=r,n=(w&&t instanceof Uint8Array||"[object Uint8Array]"===e(t))&&1===r[0]&&3===r[1]&&253===r[2]&&0===r[3]&&1===r[4]}catch(r){n=!1}return n}()?m:function(){throw new Error("not implemented")};var d=b,h="function"==typeof Uint16Array;var s="function"==typeof Uint16Array?Uint16Array:null;var F,N="function"==typeof Uint16Array?Uint16Array:void 0;F=function(){var n,r,t;if("function"!=typeof s)return!1;try{r=new s(r=[1,3.14,-3.14,65536,65537]),t=r,n=(h&&t instanceof Uint16Array||"[object Uint16Array]"===e(t))&&1===r[0]&&3===r[1]&&65533===r[2]&&0===r[3]&&1===r[4]}catch(r){n=!1}return n}()?N:function(){throw new Error("not implemented")};var S,g={uint16:F,uint8:d};(S=new g.uint16(1))[0]=4660;var j=52===new g.uint8(S.buffer)[0],E=!0===j?1:0,I=new A(1),O=new c(I.buffer);function H(n){return I[0]=n,O[E]}var T=!0===j?1:0,G=new A(1),x=new c(G.buffer);var L,W,P=!0===j?0:1,V=new A(1),Y=new c(V.buffer);!0===j?(L=1,W=0):(L=0,W=1);var _={HIGH:L,LOW:W},k=new A(1),q=new c(k.buffer),z=_.HIGH,B=_.LOW;function C(n,r){return k[0]=r,n[0]=q[z],n[1]=q[B],n}var D=Number.NEGATIVE_INFINITY;var J=[0,0];function K(n){var r,t,o,e,i;if(function(n){return n!=n}(n)||n<0)return NaN;if(function(n,r){1===arguments.length?C([0,0],n):C(n,r)}(J,n),i=0,(t=J[0])<1048576){if(0==(2147483647&t|J[1]))return D;i-=54,t=H(n*=0x40000000000000)}return t>=2146435072?n+n:(i+=(t>>20)-1023|0,i+=(e=(t&=1048575)+614244&1048576|0)>>20|0,o=function(n){var r,t,o,e,i,a,f,u,c,y,l;return i=n-1,(1048575&2+(e=H(n)))<3?0===i?0:i*i*(.3333333333333333*i-.5):(y=(e&=1048575)-398458|0,l=440401-e|0,t=(c=(f=(a=i/(2+i))*a)*f)*function(n){return 0===n?.3999999999940942:.3999999999940942+n*(.22222198432149784+.15313837699209373*n)}(c),o=f*function(n){return 0===n?.6666666666666735:.6666666666666735+n*(.2857142874366239+n*(.1818357216161805+.14798198605116586*n))}(c),u=o+t,(y|=l)>0?a*((r=.5*i*i)+u)-r:a*(u-i))}(n=function(n,r){return G[0]=n,x[T]=r>>>0,G[0]}(n,t|1072693248^e)),r=function(n,r){return V[0]=n,Y[P]=r>>>0,V[0]}(n-=1,0),1.6751713164886512e-10*(n+o)+1.4426950407214463*(n-r+o)+1.4426950407214463*r+i)}export{K as default};
//# sourceMappingURL=mod.js.map