"use strict";var S=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var l=S(function(F,g){
var M=require('@stdlib/number-float64-base-get-high-word/dist'),W=require('@stdlib/number-float64-base-set-high-word/dist'),h=require('@stdlib/number-float64-base-set-low-word/dist'),G=require('@stdlib/number-float64-base-to-words/dist'),O=require('@stdlib/math-base-assert-is-nan/dist'),d=require('@stdlib/constants-float64-high-word-abs-mask/dist'),E=require('@stdlib/constants-float64-high-word-significand-mask/dist'),R=require('@stdlib/constants-float64-exponent-bias/dist'),X=require('@stdlib/constants-float64-ninf/dist'),c=require('@stdlib/math-base-special-kernel-log1p/dist'),p=0x40000000000000,N=1.4426950407214463,B=16751713164886512e-26,D=2146435072,A=1048576,L=1072693248,_=[0,0];function P(r){var e,t,o,a,I,v,f,i,n,s,q,H,u;if(O(r)||r<0)return NaN;if(G.assign(r,_,1,0),a=_[0],I=_[1],u=0,a<A){if(!(a&d|I))return X;u-=54,r*=p,a=M(r)}return a>=D?r+r:a===L&&I===0?0:(u+=(a>>20)-R|0,a&=E,H=a+614244&A|0,r=W(r,a|H^L),u+=H>>20|0,q=u,i=r-1,o=.5*i*i,n=c(i),v=i-o,v=h(v,0),f=i-v-o+n,e=v*N,t=(f+v)*B+f*N,s=q+e,t+=q-s+e,e=s,t+e)}g.exports=P
});var k=l();module.exports=k;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
