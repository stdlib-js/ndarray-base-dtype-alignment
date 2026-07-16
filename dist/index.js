"use strict";var e=function(i,t){return function(){try{return t||i((t={exports:{}}).exports,t),t.exports}catch(s){throw (t=0, s)}};};var u=e(function(b,n){
function f(){return{binary:1,bool:1,complex32:2,complex64:4,complex128:8,float16:2,bfloat16:2,float32:4,float64:8,float128:16,generic:null,int8:1,int16:2,int32:4,int64:8,int128:16,int256:32,uint8:1,uint8c:1,uint16:2,uint32:4,uint64:8,uint128:16,uint256:32}}n.exports=f
});var a=e(function(p,o){
var v=require('@stdlib/assert-is-positive-integer/dist').isPrimitive,c=require('@stdlib/ndarray-base-dtype-resolve-str/dist'),l=u(),r;function m(i){var t;return arguments.length===0?l():(r===void 0&&(r=l()),i?(t=i.alignment,v(t)?t:r[c(i)]||null):null)}o.exports=m
});var g=a();module.exports=g;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
