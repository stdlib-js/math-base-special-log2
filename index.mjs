// Copyright (c) 2025 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import s from"https://cdn.jsdelivr.net/gh/stdlib-js/number-float64-base-get-high-word@v0.2.2-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/number-float64-base-set-high-word@v0.2.2-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/number-float64-base-set-low-word@v0.2.2-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/number-float64-base-to-words@v0.2.2-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@v0.2.2-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-high-word-abs-mask@v0.2.2-esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-high-word-significand-mask@v0.2.2-esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-exponent-bias@v0.2.2-esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-ninf@v0.2.2-esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-kernel-log1p@v0.0.2-esm/index.mjs";var l=1.4426950407214463,h=1048576,j=1072693248,f=[0,0];function p(p){var b,v,g,c,x,u,w,k,N,q,y,z,A;if(i(p)||p<0)return NaN;if(n.assign(p,f,1,0),x=f[1],A=0,(c=f[0])<h){if(0==(c&r|x))return o;A-=54,c=s(p*=0x40000000000000)}return c>=2146435072?p+p:c===j&&0===x?0:(A+=(c>>20)-m|0,y=A+=(z=(c&=d)+614244&h|0)>>20|0,g=.5*(k=(p=t(p,c|z^j))-1)*k,N=a(k),v=1.6751713164886512e-10*((w=k-(u=e(u=k-g,0))-g+N)+u)+w*l,(v+=y-(q=y+(b=u*l))+b)+(b=q))}export{p as default};
//# sourceMappingURL=index.mjs.map
