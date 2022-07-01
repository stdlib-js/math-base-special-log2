// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var n=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var r=function(){return n&&"symbol"==typeof Symbol.toStringTag},t=Object.prototype.toString,o=t;var e=function(n){return o.call(n)},i=Object.prototype.hasOwnProperty;var u=function(n,r){return null!=n&&i.call(n,r)},a="function"==typeof Symbol?Symbol.toStringTag:"",f=u,c=a,y=t;var l=e,v=function(n){var r,t,o;if(null==n)return y.call(n);t=n[c],r=f(n,c);try{n[c]=void 0}catch(r){return y.call(n)}return o=y.call(n),r?n[c]=t:delete n[c],o},p=r()?v:l,A=p,w="function"==typeof Uint32Array;var U="function"==typeof Uint32Array?Uint32Array:null,b=function(n){return w&&n instanceof Uint32Array||"[object Uint32Array]"===A(n)},m=U;var d=function(){var n,r;if("function"!=typeof m)return!1;try{r=new m(r=[1,3.14,-3.14,4294967296,4294967297]),n=b(r)&&1===r[0]&&3===r[1]&&4294967293===r[2]&&0===r[3]&&1===r[4]}catch(r){n=!1}return n};var h="function"==typeof Uint32Array?Uint32Array:void 0,s=function(){throw new Error("not implemented")},F=d()?h:s,N=p,S="function"==typeof Float64Array;var g="function"==typeof Float64Array?Float64Array:null,j=function(n){return S&&n instanceof Float64Array||"[object Float64Array]"===N(n)},E=g;var I=function(){var n,r;if("function"!=typeof E)return!1;try{r=new E([1,3.14,-3.14,NaN]),n=j(r)&&1===r[0]&&3.14===r[1]&&-3.14===r[2]&&r[3]!=r[3]}catch(r){n=!1}return n};var O="function"==typeof Float64Array?Float64Array:void 0,H=function(){throw new Error("not implemented")},T=I()?O:H,G=p,x="function"==typeof Uint8Array;var L="function"==typeof Uint8Array?Uint8Array:null,W=function(n){return x&&n instanceof Uint8Array||"[object Uint8Array]"===G(n)},P=L;var V=function(){var n,r;if("function"!=typeof P)return!1;try{r=new P(r=[1,3.14,-3.14,256,257]),n=W(r)&&1===r[0]&&3===r[1]&&253===r[2]&&0===r[3]&&1===r[4]}catch(r){n=!1}return n};var Y="function"==typeof Uint8Array?Uint8Array:void 0,_=function(){throw new Error("not implemented")},k=V()?Y:_,q=p,z="function"==typeof Uint16Array;var B="function"==typeof Uint16Array?Uint16Array:null,C=function(n){return z&&n instanceof Uint16Array||"[object Uint16Array]"===q(n)},D=B;var J=function(){var n,r;if("function"!=typeof D)return!1;try{r=new D(r=[1,3.14,-3.14,65536,65537]),n=C(r)&&1===r[0]&&3===r[1]&&65533===r[2]&&0===r[3]&&1===r[4]}catch(r){n=!1}return n};var K,M="function"==typeof Uint16Array?Uint16Array:void 0,Q=function(){throw new Error("not implemented")},R={uint16:J()?M:Q,uint8:k};(K=new R.uint16(1))[0]=4660;var X=52===new R.uint8(K.buffer)[0],Z=F,$=!0===X?1:0,nn=new T(1),rn=new Z(nn.buffer);var tn=function(n){return nn[0]=n,rn[$]},on=F,en=!0===X?1:0,un=new T(1),an=new on(un.buffer);var fn=function(n,r){return un[0]=n,an[en]=r>>>0,un[0]},cn=fn,yn=F,ln=!0===X?0:1,vn=new T(1),pn=new yn(vn.buffer);var An,wn,Un=function(n,r){return vn[0]=n,pn[ln]=r>>>0,vn[0]},bn=Un;!0===X?(An=1,wn=0):(An=0,wn=1);var mn=F,dn={HIGH:An,LOW:wn},hn=new T(1),sn=new mn(hn.buffer),Fn=dn.HIGH,Nn=dn.LOW;var Sn=function(n,r){return hn[0]=r,n[0]=sn[Fn],n[1]=sn[Nn],n};var gn=function(n,r){return 1===arguments.length?Sn([0,0],n):Sn(n,r)};var jn=function(n){return n!=n},En=Number.NEGATIVE_INFINITY;var In=[0,0];function On(n){var r,t,o,e,i;if(jn(n)||n<0)return NaN;if(gn(In,n),i=0,(t=In[0])<1048576){if(0==(2147483647&t|In[1]))return En;i-=54,t=tn(n*=0x40000000000000)}return t>=2146435072?n+n:(i+=(t>>20)-1023|0,i+=(e=(t&=1048575)+614244&1048576|0)>>20|0,o=function(n){var r,t,o,e,i,u,a,f,c,y,l;return i=n-1,(1048575&2+(e=tn(n)))<3?0===i?0:i*i*(.3333333333333333*i-.5):(y=(e&=1048575)-398458|0,l=440401-e|0,t=(c=(a=(u=i/(2+i))*u)*a)*function(n){return 0===n?.3999999999940942:.3999999999940942+n*(.22222198432149784+.15313837699209373*n)}(c),o=a*function(n){return 0===n?.6666666666666735:.6666666666666735+n*(.2857142874366239+n*(.1818357216161805+.14798198605116586*n))}(c),f=o+t,(y|=l)>0?u*((r=.5*i*i)+f)-r:u*(f-i))}(n=cn(n,t|1072693248^e)),1.6751713164886512e-10*((n-=1)+o)+1.4426950407214463*(n-(r=bn(n,0))+o)+1.4426950407214463*r+i)}export{On as default};
//# sourceMappingURL=mod.js.map
