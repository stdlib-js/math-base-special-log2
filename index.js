// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var n,t;n=this,t=function(){"use strict";var n,t="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),r=Object.prototype.toString,o=r,e=function(n){return o.call(n)},i=Object.prototype.hasOwnProperty,f=function(n,t){return null!=n&&i.call(n,t)},u="function"==typeof Symbol?Symbol.toStringTag:"",c=f,a=u,y=r,l=e,p=function(n){var t,r,o;if(null==n)return y.call(n);r=n[a],t=c(n,a);try{n[a]=void 0}catch(t){return y.call(n)}return o=y.call(n),t?n[a]=r:delete n[a],o},A=t&&"symbol"==typeof Symbol.toStringTag?p:l,w=A,b="function"==typeof Uint32Array,U="function"==typeof Uint32Array?Uint32Array:null,d=function(n){return b&&n instanceof Uint32Array||"[object Uint32Array]"===w(n)},m=U,v=function(){var n,t;if("function"!=typeof m)return!1;try{t=new m(t=[1,3.14,-3.14,4294967296,4294967297]),n=d(t)&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){n=!1}return n},s="function"==typeof Uint32Array?Uint32Array:void 0,h=function(){throw new Error("not implemented")},g=v()?s:h,F=A,N="function"==typeof Float64Array,S="function"==typeof Float64Array?Float64Array:null,j=function(n){return N&&n instanceof Float64Array||"[object Float64Array]"===F(n)},E=S,I=function(){var n,t;if("function"!=typeof E)return!1;try{t=new E([1,3.14,-3.14,NaN]),n=j(t)&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){n=!1}return n},T="function"==typeof Float64Array?Float64Array:void 0,O=function(){throw new Error("not implemented")},H=I()?T:O,x=A,G="function"==typeof Uint8Array,L="function"==typeof Uint8Array?Uint8Array:null,W=function(n){return G&&n instanceof Uint8Array||"[object Uint8Array]"===x(n)},P=L,V=function(){var n,t;if("function"!=typeof P)return!1;try{t=new P(t=[1,3.14,-3.14,256,257]),n=W(t)&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){n=!1}return n},Y="function"==typeof Uint8Array?Uint8Array:void 0,_=function(){throw new Error("not implemented")},k=V()?Y:_,q=A,z="function"==typeof Uint16Array,B="function"==typeof Uint16Array?Uint16Array:null,C=function(n){return z&&n instanceof Uint16Array||"[object Uint16Array]"===q(n)},D=B,J=function(){var n,t;if("function"!=typeof D)return!1;try{t=new D(t=[1,3.14,-3.14,65536,65537]),n=C(t)&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){n=!1}return n},K="function"==typeof Uint16Array?Uint16Array:void 0,M=function(){throw new Error("not implemented")},Q={uint16:J()?K:M,uint8:k};(n=new Q.uint16(1))[0]=4660;var R,X,Z=52===new Q.uint8(n.buffer)[0],$=g,nn=!0===Z?1:0,tn=new H(1),rn=new $(tn.buffer),on=function(n){return tn[0]=n,rn[nn]},en=g,fn=!0===Z?1:0,un=new H(1),cn=new en(un.buffer),an=function(n,t){return un[0]=n,cn[fn]=t>>>0,un[0]},yn=an,ln=g,pn=!0===Z?0:1,An=new H(1),wn=new ln(An.buffer),bn=function(n,t){return An[0]=n,wn[pn]=t>>>0,An[0]},Un=bn;!0===Z?(R=1,X=0):(R=0,X=1);var dn=g,mn={HIGH:R,LOW:X},vn=new H(1),sn=new dn(vn.buffer),hn=mn.HIGH,gn=mn.LOW,Fn=function(n,t){return vn[0]=t,n[0]=sn[hn],n[1]=sn[gn],n},Nn=function(n,t){return 1===arguments.length?Fn([0,0],n):Fn(n,t)},Sn=Nn,jn=function(n){return n!=n},En=Number.NEGATIVE_INFINITY,In=1048575,Tn=1.4426950407214463,On=[0,0];return function(n){var t,r,o,e,i;if(jn(n)||n<0)return NaN;if(Sn(On,n),i=0,(r=On[0])<1048576){if(0==(2147483647&r|On[1]))return En;i-=54,r=on(n*=0x40000000000000)}return r>=2146435072?n+n:(i+=(r>>20)-1023|0,i+=(e=614244+(r&=1048575)&1048576|0)>>20|0,o=function(n){var t,r,o,e,i,f,u,c,a,y,l;return e=on(n),i=n-1,(In&2+e)<3?0===i?0:i*i*(.3333333333333333*i-.5):(y=(e&=In)-398458|0,l=440401-e|0,r=(a=(u=(f=i/(2+i))*f)*u)*function(n){return 0===n?.3999999999940942:.3999999999940942+n*(.22222198432149784+.15313837699209373*n)}(a),o=u*function(n){return 0===n?.6666666666666735:.6666666666666735+n*(.2857142874366239+n*(.1818357216161805+.14798198605116586*n))}(a),c=o+r,(y|=l)>0?f*((t=.5*i*i)+c)-t:f*(c-i))}(n=yn(n,r|1072693248^e)),1.6751713164886512e-10*((n-=1)+o)+(n-(t=Un(n,0))+o)*Tn+t*Tn+i)}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(n="undefined"!=typeof globalThis?globalThis:n||self).log2=t();
//# sourceMappingURL=index.js.map
