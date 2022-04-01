// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(n,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(n="undefined"!=typeof globalThis?globalThis:n||self).log2=r()}(this,(function(){"use strict";var n=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var r=function(){return n&&"symbol"==typeof Symbol.toStringTag},t=Object.prototype.toString,o=t;var e=function(n){return o.call(n)},i=Object.prototype.hasOwnProperty;var f=function(n,r){return null!=n&&i.call(n,r)},u="function"==typeof Symbol?Symbol.toStringTag:"",a=f,c=u,y=t;var l=e,v=function(n){var r,t,o;if(null==n)return y.call(n);t=n[c],r=a(n,c);try{n[c]=void 0}catch(r){return y.call(n)}return o=y.call(n),r?n[c]=t:delete n[c],o},p=r()?v:l,A=p,w="function"==typeof Uint32Array;var b="function"==typeof Uint32Array?Uint32Array:null,U=function(n){return w&&n instanceof Uint32Array||"[object Uint32Array]"===A(n)},d=b;var m=function(){var n,r;if("function"!=typeof d)return!1;try{r=new d(r=[1,3.14,-3.14,4294967296,4294967297]),n=U(r)&&1===r[0]&&3===r[1]&&4294967293===r[2]&&0===r[3]&&1===r[4]}catch(r){n=!1}return n};var s="function"==typeof Uint32Array?Uint32Array:void 0,h=function(){throw new Error("not implemented")},g=m()?s:h,F=p,N="function"==typeof Float64Array;var S="function"==typeof Float64Array?Float64Array:null,j=function(n){return N&&n instanceof Float64Array||"[object Float64Array]"===F(n)},E=S;var I=function(){var n,r;if("function"!=typeof E)return!1;try{r=new E([1,3.14,-3.14,NaN]),n=j(r)&&1===r[0]&&3.14===r[1]&&-3.14===r[2]&&r[3]!=r[3]}catch(r){n=!1}return n};var T="function"==typeof Float64Array?Float64Array:void 0,O=function(){throw new Error("not implemented")},H=I()?T:O,x=p,G="function"==typeof Uint8Array;var L="function"==typeof Uint8Array?Uint8Array:null,W=function(n){return G&&n instanceof Uint8Array||"[object Uint8Array]"===x(n)},P=L;var V=function(){var n,r;if("function"!=typeof P)return!1;try{r=new P(r=[1,3.14,-3.14,256,257]),n=W(r)&&1===r[0]&&3===r[1]&&253===r[2]&&0===r[3]&&1===r[4]}catch(r){n=!1}return n};var Y="function"==typeof Uint8Array?Uint8Array:void 0,_=function(){throw new Error("not implemented")},k=V()?Y:_,q=p,z="function"==typeof Uint16Array;var B="function"==typeof Uint16Array?Uint16Array:null,C=function(n){return z&&n instanceof Uint16Array||"[object Uint16Array]"===q(n)},D=B;var J=function(){var n,r;if("function"!=typeof D)return!1;try{r=new D(r=[1,3.14,-3.14,65536,65537]),n=C(r)&&1===r[0]&&3===r[1]&&65533===r[2]&&0===r[3]&&1===r[4]}catch(r){n=!1}return n};var K,M="function"==typeof Uint16Array?Uint16Array:void 0,Q=function(){throw new Error("not implemented")},R={uint16:J()?M:Q,uint8:k};(K=new R.uint16(1))[0]=4660;var X=52===new R.uint8(K.buffer)[0],Z=g,$=!0===X?1:0,nn=new H(1),rn=new Z(nn.buffer);var tn=function(n){return nn[0]=n,rn[$]},on=g,en=!0===X?1:0,fn=new H(1),un=new on(fn.buffer);var an=function(n,r){return fn[0]=n,un[en]=r>>>0,fn[0]},cn=an,yn=g,ln=!0===X?0:1,vn=new H(1),pn=new yn(vn.buffer);var An,wn,bn=function(n,r){return vn[0]=n,pn[ln]=r>>>0,vn[0]},Un=bn;!0===X?(An=1,wn=0):(An=0,wn=1);var dn=g,mn={HIGH:An,LOW:wn},sn=new H(1),hn=new dn(sn.buffer),gn=mn.HIGH,Fn=mn.LOW;var Nn=function(n,r){return sn[0]=r,n[0]=hn[gn],n[1]=hn[Fn],n};var Sn=function(n,r){return 1===arguments.length?Nn([0,0],n):Nn(n,r)},jn=Sn;var En=function(n){return n!=n},In=Number.NEGATIVE_INFINITY;var Tn=tn,On=function(n){return 0===n?.3999999999940942:.3999999999940942+n*(.22222198432149784+.15313837699209373*n)},Hn=function(n){return 0===n?.6666666666666735:.6666666666666735+n*(.2857142874366239+n*(.1818357216161805+.14798198605116586*n))},xn=1048575;var Gn=tn,Ln=cn,Wn=Un,Pn=jn,Vn=En,Yn=In,_n=function(n){var r,t,o,e,i,f,u,a,c,y;return o=Tn(n),e=n-1,(xn&2+o)<3?0===e?0:e*e*(.3333333333333333*e-.5):(c=(o&=xn)-398458|0,y=440401-o|0,t=(a=(f=(i=e/(2+e))*i)*f)*On(a),u=f*Hn(a)+t,(c|=y)>0?i*((r=.5*e*e)+u)-r:i*(u-e))},kn=1.4426950407214463,qn=[0,0];return function(n){var r,t,o,e,i;if(Vn(n)||n<0)return NaN;if(Pn(qn,n),i=0,(t=qn[0])<1048576){if(0==(2147483647&t|qn[1]))return Yn;i-=54,t=Gn(n*=0x40000000000000)}return t>=2146435072?n+n:(i+=(t>>20)-1023|0,n=Ln(n,(t&=1048575)|1072693248^(e=t+614244&1048576|0)),i+=e>>20|0,o=_n(n),1.6751713164886512e-10*((n-=1)+o)+(n-(r=Wn(n,0))+o)*kn+r*kn+i)}}));
//# sourceMappingURL=bundle.js.map
