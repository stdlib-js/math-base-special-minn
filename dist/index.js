"use strict";var m=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(t){throw (r=0, t)}};};var N=m(function(l,v){
var s=require('@stdlib/math-base-assert-is-negative-zero/dist'),f=require('@stdlib/math-base-assert-is-nan/dist'),a=require('@stdlib/constants-float64-ninf/dist'),o=require('@stdlib/constants-float64-pinf/dist');function q(e,r){var t,n,i,u;if(t=arguments.length,t===2)return f(e)||f(r)?NaN:e===a||r===a?a:e===r&&e===0?s(e)?e:r:e<r?e:r;for(n=o,u=0;u<t;u++){if(i=arguments[u],f(i)||i===a)return i;(i<n||i===n&&i===0&&s(i))&&(n=i)}return n}v.exports=q
});var g=N();module.exports=g;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
