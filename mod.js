// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");var e=Object.prototype.toString;var t=Object.prototype.hasOwnProperty;var n,i="function"==typeof Symbol?Symbol:void 0,a="function"==typeof i?i.toStringTag:"";n=r&&"symbol"==typeof Symbol.toStringTag?function(r){var n,i,o,c,f;if(null==r)return e.call(r);i=r[a],f=a,n=null!=(c=r)&&t.call(c,f);try{r[a]=void 0}catch(t){return e.call(r)}return o=e.call(r),n?r[a]=i:delete r[a],o}:function(r){return e.call(r)};var o=n,c="function"==typeof Uint32Array;var f="function"==typeof Uint32Array?Uint32Array:null;var u,l="function"==typeof Uint32Array?Uint32Array:void 0;u=function(){var r,e,t;if("function"!=typeof f)return!1;try{e=new f(e=[1,3.14,-3.14,4294967296,4294967297]),t=e,r=(c&&t instanceof Uint32Array||"[object Uint32Array]"===o(t))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?l:function(){throw new Error("not implemented")};var s=u,p="function"==typeof Float64Array;var y="function"==typeof Float64Array?Float64Array:null;var g,d="function"==typeof Float64Array?Float64Array:void 0;g=function(){var r,e,t;if("function"!=typeof y)return!1;try{e=new y([1,3.14,-3.14,NaN]),t=e,r=(p&&t instanceof Float64Array||"[object Float64Array]"===o(t))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?d:function(){throw new Error("not implemented")};var v=g,h="function"==typeof Uint8Array;var w="function"==typeof Uint8Array?Uint8Array:null;var b,m="function"==typeof Uint8Array?Uint8Array:void 0;b=function(){var r,e,t;if("function"!=typeof w)return!1;try{e=new w(e=[1,3.14,-3.14,256,257]),t=e,r=(h&&t instanceof Uint8Array||"[object Uint8Array]"===o(t))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?m:function(){throw new Error("not implemented")};var A=b,_="function"==typeof Uint16Array;var E="function"==typeof Uint16Array?Uint16Array:null;var U,S="function"==typeof Uint16Array?Uint16Array:void 0;U=function(){var r,e,t;if("function"!=typeof E)return!1;try{e=new E(e=[1,3.14,-3.14,65536,65537]),t=e,r=(_&&t instanceof Uint16Array||"[object Uint16Array]"===o(t))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?S:function(){throw new Error("not implemented")};var x,k={uint16:U,uint8:A};(x=new k.uint16(1))[0]=4660;var F=52===new k.uint8(x.buffer)[0],j=!0===F?1:0,I=new v(1),T=new s(I.buffer);var V=!0===F?1:0,O=new v(1),$=new s(O.buffer);var N=!0===F?0:1,C=new v(1),G=new s(C.buffer);var P="function"==typeof Object.defineProperty?Object.defineProperty:null;var R=Object.defineProperty;function W(r){return"number"==typeof r}function L(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function Z(r,e,t){var n=!1,i=e-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(n=!0,r=r.substr(1)),r=t?r+L(i):L(i)+r,n&&(r="-"+r)),r}var H=String.prototype.toLowerCase,X=String.prototype.toUpperCase;function z(r){var e,t,n;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,n=parseInt(t,10),!isFinite(n)){if(!W(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===r.specifier||10!==e)&&(n=4294967295+n+1),n<0?(t=(-n).toString(e),r.precision&&(t=Z(t,r.precision,r.padRight)),t="-"+t):(t=n.toString(e),n||r.precision?r.precision&&(t=Z(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===X.call(r.specifier)?X.call(t):H.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}var M=Math.abs,Y=String.prototype.toLowerCase,q=String.prototype.toUpperCase,B=String.prototype.replace,D=/e\+(\d)$/,J=/e-(\d)$/,K=/^(\d+)$/,Q=/^(\d+)e/,rr=/\.0$/,er=/\.0*e/,tr=/(\..*[^0])0*e/;function nr(r){var e,t,n=parseFloat(r.arg);if(!isFinite(n)){if(!W(r.arg))throw new Error("invalid floating-point number. Value: "+t);n=r.arg}switch(r.specifier){case"e":case"E":t=n.toExponential(r.precision);break;case"f":case"F":t=n.toFixed(r.precision);break;case"g":case"G":M(n)<1e-4?((e=r.precision)>0&&(e-=1),t=n.toExponential(e)):t=n.toPrecision(r.precision),r.alternate||(t=B.call(t,tr,"$1e"),t=B.call(t,er,"e"),t=B.call(t,rr,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=B.call(t,D,"e+0$1"),t=B.call(t,J,"e-0$1"),r.alternate&&(t=B.call(t,K,"$1."),t=B.call(t,Q,"$1.e")),n>=0&&r.sign&&(t=r.sign+t),t=r.specifier===q.call(r.specifier)?q.call(t):Y.call(t)}function ir(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}var ar=String.fromCharCode,or=Array.isArray;function cr(r){return r!=r}function fr(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function ur(r){var e,t,n,i,a,o,c,f,u,l,s,p,y;if(!or(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(o="",c=1,f=0;f<r.length;f++)if(n=r[f],"string"==typeof n)o+=n;else{if(e=void 0!==n.precision,!(n=fr(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+f+"`. Value: `"+n+"`.");for(n.mapping&&(c=n.mapping),t=n.flags,u=0;u<t.length;u++)switch(i=t.charAt(u)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[c],10),c+=1,cr(n.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[c],10),c+=1,cr(n.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[c],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=z(n);break;case"s":n.maxWidth=e?n.precision:-1,n.arg=String(n.arg);break;case"c":if(!cr(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=cr(a)?String(n.arg):ar(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=nr(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=Z(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=(l=n.arg,s=n.width,p=n.padRight,y=void 0,(y=s-l.length)<0?l:l=p?l+ir(y):ir(y)+l)),o+=n.arg||"",c+=1}return o}var lr=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function sr(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function pr(r){var e,t,n,i;for(t=[],i=0,n=lr.exec(r);n;)(e=r.slice(i,lr.lastIndex-n[0].length)).length&&t.push(e),t.push(sr(n)),i=lr.lastIndex,n=lr.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function yr(r){var e,t;if("string"!=typeof r)throw new TypeError(yr("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[pr(r)],t=1;t<arguments.length;t++)e.push(arguments[t]);return ur.apply(null,e)}var gr,dr=Object.prototype,vr=dr.toString,hr=dr.__defineGetter__,wr=dr.__defineSetter__,br=dr.__lookupGetter__,mr=dr.__lookupSetter__;gr=function(){try{return P({},"x",{}),!0}catch(r){return!1}}()?R:function(r,e,t){var n,i,a,o;if("object"!=typeof r||null===r||"[object Array]"===vr.call(r))throw new TypeError(yr("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===vr.call(t))throw new TypeError(yr("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(br.call(r,e)||mr.call(r,e)?(n=r.__proto__,r.__proto__=dr,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),a="get"in t,o="set"in t,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&hr&&hr.call(r,e,t.get),o&&wr&&wr.call(r,e,t.set),r};var Ar,_r,Er=gr;!0===F?(Ar=1,_r=0):(Ar=0,_r=1);var Ur={HIGH:Ar,LOW:_r},Sr=new v(1),xr=new s(Sr.buffer),kr=Ur.HIGH,Fr=Ur.LOW;function jr(r,e,t,n){return Sr[0]=r,e[n]=xr[kr],e[n+t]=xr[Fr],e}function Ir(r){return jr(r,[0,0],1,0)}Er(Ir,"assign",{configurable:!1,enumerable:!1,writable:!1,value:jr});var Tr=Number.NEGATIVE_INFINITY;var Vr=1.4426950407214463,Or=1048576,$r=1072693248,Nr=[0,0];function Cr(r){var e,t,n,i,a,o,c,f,u,l,s,p,y;if(function(r){return r!=r}(r)||r<0)return NaN;if(Ir.assign(r,Nr,1,0),a=Nr[1],y=0,(i=Nr[0])<Or){if(0==(2147483647&i|a))return Tr;y-=54,i=function(r){return I[0]=r,T[j]}(r*=0x40000000000000)}return i>=2146435072?r+r:i===$r&&0===a?0:(y+=(i>>20)-1023|0,s=y+=(p=(i&=1048575)+614244&Or|0)>>20|0,n=.5*(f=(r=function(r,e){return O[0]=r,$[V]=e>>>0,O[0]}(r,i|p^$r))-1)*f,u=function(r){var e,t,n,i,a,o;return e=(a=(i=(n=r/(2+r))*n)*i)*(0===(o=a)?.3999999999940942:.3999999999940942+o*(.22222198432149784+.15313837699209373*o)),t=i*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(a),n*(.5*r*r+(t+e))}(f),o=function(r,e){return C[0]=r,G[N]=e>>>0,C[0]}(o=f-n,0),t=1.6751713164886512e-10*((c=f-o-n+u)+o)+c*Vr,(t+=s-(l=s+(e=o*Vr))+e)+(e=l))}export{Cr as default};
//# sourceMappingURL=mod.js.map
