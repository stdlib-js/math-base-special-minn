"use strict";var m=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var N=m(function(l,v){
var s=require('@stdlib/math-base-assert-is-negative-zero/dist'),f=require('@stdlib/math-base-assert-is-nan/dist'),u=require('@stdlib/constants-float64-ninf/dist'),o=require('@stdlib/constants-float64-pinf/dist');function q(e,r){var a,n,i,t;if(a=arguments.length,a===2)return f(e)||f(r)?NaN:e===u||r===u?u:e===r&&e===0?s(e)?e:r:e<r?e:r;for(n=o,t=0;t<a;t++){if(i=arguments[t],f(i)||i===u)return i;(i<n||i===n&&i===0&&s(i))&&(n=i)}return n}v.exports=q
});var g=N();module.exports=g;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
