"use strict";var n=function(r,a){return function(){return a||r((a={exports:{}}).exports,a),a.exports}};var l=n(function(U,_){
function M(r){return r===0?.3999999999940942:.3999999999940942+r*(.22222198432149784+r*.15313837699209373)}_.exports=M
});var A=n(function(Y,N){
function W(r){return r===0?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+r*.14798198605116586))}N.exports=W
});var p=n(function(Z,c){
var L=require('@stdlib/number-float64-base-get-high-word/dist'),O=l(),d=A(),g=1048575,D=.3333333333333333;function E(r){var a,f,v,u,e,t,i,s,o,I,H;return u=L(r),e=r-1,(g&2+u)<3?e===0?0:e*e*(D*e-.5):(t=e/(2+e),i=t*t,u&=g,I=u-398458|0,o=i*i,H=440401-u|0,f=o*O(o),v=i*d(o),I|=H,s=v+f,I>0?(a=.5*e*e,t*(a+s)-a):t*(s-e))}c.exports=E
});var G=n(function($,h){
var R=require('@stdlib/number-float64-base-get-high-word/dist'),y=require('@stdlib/number-float64-base-set-high-word/dist'),P=require('@stdlib/number-float64-base-set-low-word/dist'),X=require('@stdlib/number-float64-base-to-words/dist'),k=require('@stdlib/math-base-assert-is-nan/dist'),B=require('@stdlib/constants-float64-high-word-abs-mask/dist'),F=require('@stdlib/constants-float64-high-word-significand-mask/dist'),K=require('@stdlib/constants-float64-exponent-bias/dist'),w=require('@stdlib/constants-float64-ninf/dist'),C=p(),T=0x40000000000000,S=1.4426950407214463,V=16751713164886512e-26,b=2146435072,j=1048576,z=1072693248,q=[0,0];function Q(r){var a,f,v,u,e,t,i;if(k(r)||r<0)return NaN;if(X.assign(r,q,1,0),v=q[0],u=q[1],i=0,v<j){if(!(v&B|u))return w;i-=54,r*=T,v=R(r)}return v>=b?r+r:(i+=(v>>20)-K|0,v&=F,t=v+614244&1048576|0,r=y(r,v|t^z),i+=t>>20|0,e=C(r),r-=1,a=P(r,0),f=r-a,(r+e)*V+(f+e)*S+a*S+i)}h.exports=Q
});var m=G();module.exports=m;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
