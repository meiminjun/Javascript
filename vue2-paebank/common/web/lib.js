var lib =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, aladdin) {/*! Aladdin.web.min.js v1.0.7 (c) 2016-2017 Aladdin */
!function(t,e){ true?module.exports=e():"function"==typeof define&&define.amd?define(e):t.aladdin=e()}(this,function(){"use strict";function readonlyProperty(t,e,i){Object.defineProperty(t,e,{value:i,writable:!1})}function callbackWrapper(t){var e=function(e){e&&this.emit("error",e),t&&"function"==typeof t&&t.apply(null,arguments)}.bind(this);return e.keep=t.keep,e}function Aladdin(){this._ts=(new Date).getTime(),this._counter=0,this._handlers={},this._subscribers={},this._middlewares=[],this._datas={}}function BigInteger(t,e,i){null!=t&&("number"==typeof t?this.fromNumber(t,e,i):null==e&&"string"!=typeof t?this.fromString(t,256):this.fromString(t,e))}function nbi(){return new BigInteger(null)}function am1(t,e,i,r,n,o){for(var s=this;--o>=0;){var a=e*s[t++]+i[r]+n;n=Math.floor(a/67108864),i[r++]=67108863&a}return n}function am2(t,e,i,r,n,o){for(var s=this,a=32767&e,c=e>>15;--o>=0;){var h=32767&s[t],p=s[t++]>>15,u=c*h+p*a;h=a*h+((32767&u)<<15)+i[r]+(1073741823&n),n=(h>>>30)+(u>>>15)+c*p+(n>>>30),i[r++]=1073741823&h}return n}function am3(t,e,i,r,n,o){for(var s=this,a=16383&e,c=e>>14;--o>=0;){var h=16383&s[t],p=s[t++]>>14,u=c*h+p*a;h=a*h+((16383&u)<<14)+i[r]+n,n=(h>>28)+(u>>14)+c*p,i[r++]=268435455&h}return n}function int2char(t){return BI_RM.charAt(t)}function intAt(t,e){var i=BI_RC[t.charCodeAt(e)];return null==i?-1:i}function bnpCopyTo(t){for(var e=this,i=this.t-1;i>=0;--i)t[i]=e[i];t.t=this.t,t.s=this.s}function bnpFromInt(t){this.t=1,this.s=t<0?-1:0,t>0?this[0]=t:t<-1?this[0]=t+DV:this.t=0}function nbv(t){var e=nbi();return e.fromInt(t),e}function bnpFromString(t,e){var i,r=this;if(16==e)i=4;else if(8==e)i=3;else if(256==e)i=8;else if(2==e)i=1;else if(32==e)i=5;else{if(4!=e)return void this.fromRadix(t,e);i=2}this.t=0,this.s=0;for(var n=t.length,o=!1,s=0;--n>=0;){var a=8==i?255&t[n]:intAt(t,n);a<0?"-"==t.charAt(n)&&(o=!0):(o=!1,0==s?r[r.t++]=a:s+i>r.DB?(r[r.t-1]|=(a&(1<<r.DB-s)-1)<<s,r[r.t++]=a>>r.DB-s):r[r.t-1]|=a<<s,s+=i,s>=r.DB&&(s-=r.DB))}8==i&&0!=(128&t[0])&&(this.s=-1,s>0&&(this[this.t-1]|=(1<<this.DB-s)-1<<s)),this.clamp(),o&&BigInteger.ZERO.subTo(this,this)}function bnpClamp(){for(var t=this,e=this.s&this.DM;this.t>0&&this[this.t-1]==e;)--t.t}function bnToString(t){var e=this;if(this.s<0)return"-"+this.negate().toString(t);var i;if(16==t)i=4;else if(8==t)i=3;else if(2==t)i=1;else if(32==t)i=5;else{if(4!=t)return this.toRadix(t);i=2}var r,n=(1<<i)-1,o=!1,s="",a=this.t,c=this.DB-a*this.DB%i;if(a-- >0)for(c<this.DB&&(r=this[a]>>c)>0&&(o=!0,s=int2char(r));a>=0;)c<i?(r=(e[a]&(1<<c)-1)<<i-c,r|=e[--a]>>(c+=e.DB-i)):(r=e[a]>>(c-=i)&n,c<=0&&(c+=e.DB,--a)),r>0&&(o=!0),o&&(s+=int2char(r));return o?s:"0"}function bnNegate(){var t=nbi();return BigInteger.ZERO.subTo(this,t),t}function bnAbs(){return this.s<0?this.negate():this}function bnCompareTo(t){var e=this,i=this.s-t.s;if(0!=i)return i;var r=this.t;if(i=r-t.t,0!=i)return i;for(;--r>=0;)if(0!=(i=e[r]-t[r]))return i;return 0}function nbits(t){var e,i=1;return 0!=(e=t>>>16)&&(t=e,i+=16),0!=(e=t>>8)&&(t=e,i+=8),0!=(e=t>>4)&&(t=e,i+=4),0!=(e=t>>2)&&(t=e,i+=2),0!=(e=t>>1)&&(t=e,i+=1),i}function bnBitLength(){return this.t<=0?0:this.DB*(this.t-1)+nbits(this[this.t-1]^this.s&this.DM)}function bnpDLShiftTo(t,e){var i,r=this;for(i=this.t-1;i>=0;--i)e[i+t]=r[i];for(i=t-1;i>=0;--i)e[i]=0;e.t=this.t+t,e.s=this.s}function bnpDRShiftTo(t,e){for(var i=this,r=t;r<this.t;++r)e[r-t]=i[r];e.t=Math.max(this.t-t,0),e.s=this.s}function bnpLShiftTo(t,e){var i,r=this,n=t%this.DB,o=this.DB-n,s=(1<<o)-1,a=Math.floor(t/this.DB),c=this.s<<n&this.DM;for(i=this.t-1;i>=0;--i)e[i+a+1]=r[i]>>o|c,c=(r[i]&s)<<n;for(i=a-1;i>=0;--i)e[i]=0;e[a]=c,e.t=this.t+a+1,e.s=this.s,e.clamp()}function bnpRShiftTo(t,e){var i=this;e.s=this.s;var r=Math.floor(t/this.DB);if(r>=this.t)return void(e.t=0);var n=t%this.DB,o=this.DB-n,s=(1<<n)-1;e[0]=this[r]>>n;for(var a=r+1;a<this.t;++a)e[a-r-1]|=(i[a]&s)<<o,e[a-r]=i[a]>>n;n>0&&(e[this.t-r-1]|=(this.s&s)<<o),e.t=this.t-r,e.clamp()}function bnpSubTo(t,e){for(var i=this,r=0,n=0,o=Math.min(t.t,this.t);r<o;)n+=i[r]-t[r],e[r++]=n&i.DM,n>>=i.DB;if(t.t<this.t){for(n-=t.s;r<this.t;)n+=i[r],e[r++]=n&i.DM,n>>=i.DB;n+=this.s}else{for(n+=this.s;r<t.t;)n-=t[r],e[r++]=n&i.DM,n>>=i.DB;n-=t.s}e.s=n<0?-1:0,n<-1?e[r++]=this.DV+n:n>0&&(e[r++]=n),e.t=r,e.clamp()}function bnpMultiplyTo(t,e){var i=this.abs(),r=t.abs(),n=i.t;for(e.t=n+r.t;--n>=0;)e[n]=0;for(n=0;n<r.t;++n)e[n+i.t]=i.am(0,r[n],e,n,0,i.t);e.s=0,e.clamp(),this.s!=t.s&&BigInteger.ZERO.subTo(e,e)}function bnpSquareTo(t){for(var e=this.abs(),i=t.t=2*e.t;--i>=0;)t[i]=0;for(i=0;i<e.t-1;++i){var r=e.am(i,e[i],t,2*i,0,1);(t[i+e.t]+=e.am(i+1,2*e[i],t,2*i+1,r,e.t-i-1))>=e.DV&&(t[i+e.t]-=e.DV,t[i+e.t+1]=1)}t.t>0&&(t[t.t-1]+=e.am(i,e[i],t,2*i,0,1)),t.s=0,t.clamp()}function bnpDivRemTo(t,e,i){var r=this,n=t.abs();if(!(n.t<=0)){var o=this.abs();if(o.t<n.t)return null!=e&&e.fromInt(0),void(null!=i&&this.copyTo(i));null==i&&(i=nbi());var s=nbi(),a=this.s,c=t.s,h=this.DB-nbits(n[n.t-1]);h>0?(n.lShiftTo(h,s),o.lShiftTo(h,i)):(n.copyTo(s),o.copyTo(i));var p=s.t,u=s[p-1];if(0!=u){var l=u*(1<<this.F1)+(p>1?s[p-2]>>this.F2:0),f=this.FV/l,d=(1<<this.F1)/l,g=1<<this.F2,F=i.t,y=F-p,v=null==e?nbi():e;for(s.dlShiftTo(y,v),i.compareTo(v)>=0&&(i[i.t++]=1,i.subTo(v,i)),BigInteger.ONE.dlShiftTo(p,v),v.subTo(s,s);s.t<p;)s[s.t++]=0;for(;--y>=0;){var m=i[--F]==u?r.DM:Math.floor(i[F]*f+(i[F-1]+g)*d);if((i[F]+=s.am(0,m,i,y,0,p))<m)for(s.dlShiftTo(y,v),i.subTo(v,i);i[F]<--m;)i.subTo(v,i)}null!=e&&(i.drShiftTo(p,e),a!=c&&BigInteger.ZERO.subTo(e,e)),i.t=p,i.clamp(),h>0&&i.rShiftTo(h,i),a<0&&BigInteger.ZERO.subTo(i,i)}}}function bnMod(t){var e=nbi();return this.abs().divRemTo(t,null,e),this.s<0&&e.compareTo(BigInteger.ZERO)>0&&t.subTo(e,e),e}function Classic(t){this.m=t}function cConvert(t){return t.s<0||t.compareTo(this.m)>=0?t.mod(this.m):t}function cRevert(t){return t}function cReduce(t){t.divRemTo(this.m,null,t)}function cMulTo(t,e,i){t.multiplyTo(e,i),this.reduce(i)}function cSqrTo(t,e){t.squareTo(e),this.reduce(e)}function bnpInvDigit(){if(this.t<1)return 0;var t=this[0];if(0==(1&t))return 0;var e=3&t;return e=e*(2-(15&t)*e)&15,e=e*(2-(255&t)*e)&255,e=e*(2-((65535&t)*e&65535))&65535,e=e*(2-t*e%this.DV)%this.DV,e>0?this.DV-e:-e}function Montgomery(t){this.m=t,this.mp=t.invDigit(),this.mpl=32767&this.mp,this.mph=this.mp>>15,this.um=(1<<t.DB-15)-1,this.mt2=2*t.t}function montConvert(t){var e=nbi();return t.abs().dlShiftTo(this.m.t,e),e.divRemTo(this.m,null,e),t.s<0&&e.compareTo(BigInteger.ZERO)>0&&this.m.subTo(e,e),e}function montRevert(t){var e=nbi();return t.copyTo(e),this.reduce(e),e}function montReduce(t){for(var e=this;t.t<=this.mt2;)t[t.t++]=0;for(var i=0;i<this.m.t;++i){var r=32767&t[i],n=r*e.mpl+((r*e.mph+(t[i]>>15)*e.mpl&e.um)<<15)&t.DM;for(r=i+e.m.t,t[r]+=e.m.am(0,n,t,i,0,e.m.t);t[r]>=t.DV;)t[r]-=t.DV,t[++r]++}t.clamp(),t.drShiftTo(this.m.t,t),t.compareTo(this.m)>=0&&t.subTo(this.m,t)}function montSqrTo(t,e){t.squareTo(e),this.reduce(e)}function montMulTo(t,e,i){t.multiplyTo(e,i),this.reduce(i)}function bnpIsEven(){return 0==(this.t>0?1&this[0]:this.s)}function bnpExp(t,e){if(t>4294967295||t<1)return BigInteger.ONE;var i=nbi(),r=nbi(),n=e.convert(this),o=nbits(t)-1;for(n.copyTo(i);--o>=0;)if(e.sqrTo(i,r),(t&1<<o)>0)e.mulTo(r,n,i);else{var s=i;i=r,r=s}return e.revert(i)}function bnModPowInt(t,e){var i;return i=t<256||e.isEven()?new Classic(e):new Montgomery(e),this.exp(t,i)}function Arcfour(){this.i=0,this.j=0,this.S=new Array}function ARC4init(t){var e,i,r,n=this;for(e=0;e<256;++e)n.S[e]=e;for(i=0,e=0;e<256;++e)i=i+n.S[e]+t[e%t.length]&255,r=n.S[e],n.S[e]=n.S[i],n.S[i]=r;this.i=0,this.j=0}function ARC4next(){var t;return this.i=this.i+1&255,this.j=this.j+this.S[this.i]&255,t=this.S[this.i],this.S[this.i]=this.S[this.j],this.S[this.j]=t,this.S[t+this.S[this.i]&255]}function prng_newstate(){return new Arcfour}function rng_seed_int(t){rng_pool[rng_pptr++]^=255&t,rng_pool[rng_pptr++]^=t>>8&255,rng_pool[rng_pptr++]^=t>>16&255,rng_pool[rng_pptr++]^=t>>24&255,rng_pptr>=rng_psize&&(rng_pptr-=rng_psize)}function rng_seed_time(){rng_seed_int((new Date).getTime())}function rng_get_byte(){if(null==rng_state){for(rng_seed_time(),rng_state=prng_newstate(),rng_state.init(rng_pool),rng_pptr=0;rng_pptr<rng_pool.length;++rng_pptr)rng_pool[rng_pptr]=0;rng_pptr=0}return rng_state.next()}function rng_get_bytes(t){var e;for(e=0;e<t.length;++e)t[e]=rng_get_byte()}function SecureRandom(){}function parseBigInt(t,e){return new BigInteger(t,e)}function pkcs1pad2(t,e){if(e<t.length+2)return alert("\u5bc6\u7801\u592a\u957f!"),null;var i=new Array,r=t.length-1,n=t.length;if(!(n<100))return alert("\u5bc6\u7801\u592a\u957f!"),null;i[0]=48+n/10,i[1]=48+n%10;var o=2;for(r=0;r<n&&e>0;)i[o++]=t.charCodeAt(r++);for(var s=new SecureRandom,a=new Array;o<e;){for(a[0]=0;0==a[0];)s.nextBytes(a);i[o++]=a[0]}return new BigInteger(i)}function RSASetPublic(t,e){null!=t&&null!=e&&t.length>0&&e.length>0?(this.n=parseBigInt(t,16),this.e=parseInt(e,16)):alert("Invalid RSA public key")}function RSADoPublic(t){return t.modPowInt(this.e,this.n)}function RSAEncrypt(t){var e=pkcs1pad2(t,this.n.bitLength()+7>>3);if(null==e)return null;var i=this.doPublic(e);if(null==i)return null;for(var r=i.toString(16).toUpperCase(),n=256-r.length,o=0;o<n;o+=1)r="0"+r;return r}function b64tohex(t){var e,i,r="",n=0;for(e=0;e<t.length&&t.charAt(e)!=b64pad;++e)v=b64map.indexOf(t.charAt(e)),v<0||(0==n?(r+=int2char(v>>2),i=3&v,n=1):1==n?(r+=int2char(i<<2|v>>4),i=15&v,n=2):2==n?(r+=int2char(i),r+=int2char(v>>2),i=3&v,n=3):(r+=int2char(i<<2|v>>4),r+=int2char(15&v),n=0));return 1==n&&(r+=int2char(i<<2)),r}function BigInteger$1(t,e,i){null!=t&&("number"==typeof t?this.fromNumber(t,e,i):null==e&&"string"!=typeof t?this.fromString(t,256):this.fromString(t,e))}function nbi$1(){return new BigInteger$1(null)}function am1$1(t,e,i,r,n,o){for(var s=this;0<=--o;){var a=e*s[t++]+i[r]+n;n=Math.floor(a/67108864),i[r++]=67108863&a}return n}function am2$1(t,e,i,r,n,o){var s=this,a=32767&e;for(e>>=15;0<=--o;){var c=32767&s[t],h=s[t++]>>15,p=e*c+h*a,c=a*c+((32767&p)<<15)+i[r]+(1073741823&n);n=(c>>>30)+(p>>>15)+e*h+(n>>>30),i[r++]=1073741823&c}return n}function am3$1(t,e,i,r,n,o){var s=this,a=16383&e;for(e>>=14;0<=--o;){var c=16383&s[t],h=s[t++]>>14,p=e*c+h*a,c=a*c+((16383&p)<<14)+i[r]+n;n=(c>>28)+(p>>14)+e*h,i[r++]=268435455&c}return n}function int2char$1(t){return BI_RM$1.charAt(t)}function intAt$1(t,e){var i=BI_RC$1[t.charCodeAt(e)];return null==i?-1:i}function bnpCopyTo$1(t){for(var e=this,i=this.t-1;0<=i;--i)t[i]=e[i];t.t=this.t,t.s=this.s}function bnpFromInt$1(t){this.t=1,this.s=0>t?-1:0,0<t?this[0]=t:-1>t?this[0]=t+this.DV:this.t=0}function nbv$1(t){var e=nbi$1();return e.fromInt(t),e}function bnpFromString$1(t,e){var i,r=this;if(16==e)i=4;else if(8==e)i=3;else if(256==e)i=8;else if(2==e)i=1;else if(32==e)i=5;else{if(4!=e)return void this.fromRadix(t,e);i=2}this.s=this.t=0;for(var n=t.length,o=!1,s=0;0<=--n;){var a=8==i?255&t[n]:intAt$1(t,n);0>a?"-"==t.charAt(n)&&(o=!0):(o=!1,0==s?r[r.t++]=a:s+i>r.DB?(r[r.t-1]|=(a&(1<<r.DB-s)-1)<<s,r[r.t++]=a>>r.DB-s):r[r.t-1]|=a<<s,s+=i,s>=r.DB&&(s-=r.DB))}8==i&&0!=(128&t[0])&&(this.s=-1,0<s&&(this[this.t-1]|=(1<<this.DB-s)-1<<s)),this.clamp(),o&&BigInteger$1.ZERO.subTo(this,this)}function bnpClamp$1(){for(var t=this,e=this.s&this.DM;0<this.t&&this[this.t-1]==e;)--t.t}function bnToString$1(t){var e=this;if(0>this.s)return"-"+this.negate().toString(t);if(16==t)t=4;else if(8==t)t=3;else if(2==t)t=1;else if(32==t)t=5;else{if(4!=t)return this.toRadix(t);t=2}var i,r=(1<<t)-1,n=!1,o="",s=this.t,a=this.DB-s*this.DB%t;if(0<s--)for(a<this.DB&&0<(i=this[s]>>a)&&(n=!0,o=int2char$1(i));0<=s;)a<t?(i=(e[s]&(1<<a)-1)<<t-a,i|=e[--s]>>(a+=e.DB-t)):(i=e[s]>>(a-=t)&r,0>=a&&(a+=e.DB,--s)),0<i&&(n=!0),n&&(o+=int2char$1(i));return n?o:"0"}function bnNegate$1(){var t=nbi$1();return BigInteger$1.ZERO.subTo(this,t),t}function bnAbs$1(){return 0>this.s?this.negate():this}function bnCompareTo$1(t){var e=this,i=this.s-t.s;if(0!=i)return i;var r=this.t,i=r-t.t;if(0!=i)return 0>this.s?-i:i;for(;0<=--r;)if(0!=(i=e[r]-t[r]))return i;return 0}function nbits$1(t){var e,i=1;return 0!=(e=t>>>16)&&(t=e,i+=16),0!=(e=t>>8)&&(t=e,i+=8),0!=(e=t>>4)&&(t=e,i+=4),0!=(e=t>>2)&&(t=e,i+=2),0!=t>>1&&(i+=1),i}function bnBitLength$1(){return 0>=this.t?0:this.DB*(this.t-1)+nbits$1(this[this.t-1]^this.s&this.DM)}function bnpDLShiftTo$1(t,e){var i,r=this;for(i=this.t-1;0<=i;--i)e[i+t]=r[i];for(i=t-1;0<=i;--i)e[i]=0;e.t=this.t+t,e.s=this.s}function bnpDRShiftTo$1(t,e){for(var i=this,r=t;r<this.t;++r)e[r-t]=i[r];e.t=Math.max(this.t-t,0),e.s=this.s}function bnpLShiftTo$1(t,e){var i,r=this,n=t%this.DB,o=this.DB-n,s=(1<<o)-1,a=Math.floor(t/this.DB),c=this.s<<n&this.DM;for(i=this.t-1;0<=i;--i)e[i+a+1]=r[i]>>o|c,c=(r[i]&s)<<n;for(i=a-1;0<=i;--i)e[i]=0;e[a]=c,e.t=this.t+a+1,e.s=this.s,e.clamp()}function bnpRShiftTo$1(t,e){var i=this;e.s=this.s;var r=Math.floor(t/this.DB);if(r>=this.t)e.t=0;else{var n=t%this.DB,o=this.DB-n,s=(1<<n)-1;e[0]=this[r]>>n;for(var a=r+1;a<this.t;++a)e[a-r-1]|=(i[a]&s)<<o,e[a-r]=i[a]>>n;0<n&&(e[this.t-r-1]|=(this.s&s)<<o),e.t=this.t-r,e.clamp()}}function bnpSubTo$1(t,e){for(var i=this,r=0,n=0,o=Math.min(t.t,this.t);r<o;)n+=i[r]-t[r],e[r++]=n&i.DM,n>>=i.DB;if(t.t<this.t){for(n-=t.s;r<this.t;)n+=i[r],e[r++]=n&i.DM,n>>=i.DB;n+=this.s}else{for(n+=this.s;r<t.t;)n-=t[r],e[r++]=n&i.DM,n>>=i.DB;n-=t.s}e.s=0>n?-1:0,-1>n?e[r++]=this.DV+n:0<n&&(e[r++]=n),e.t=r,e.clamp()}function bnpMultiplyTo$1(t,e){var i=this.abs(),r=t.abs(),n=i.t;for(e.t=n+r.t;0<=--n;)e[n]=0;for(n=0;n<r.t;++n)e[n+i.t]=i.am(0,r[n],e,n,0,i.t);e.s=0,e.clamp(),this.s!=t.s&&BigInteger$1.ZERO.subTo(e,e)}function bnpSquareTo$1(t){for(var e=this.abs(),i=t.t=2*e.t;0<=--i;)t[i]=0;for(i=0;i<e.t-1;++i){var r=e.am(i,e[i],t,2*i,0,1);(t[i+e.t]+=e.am(i+1,2*e[i],t,2*i+1,r,e.t-i-1))>=e.DV&&(t[i+e.t]-=e.DV,t[i+e.t+1]=1)}0<t.t&&(t[t.t-1]+=e.am(i,e[i],t,2*i,0,1)),t.s=0,t.clamp()}function bnpDivRemTo$1(t,e,i){var r=this,n=t.abs();if(!(0>=n.t)){var o=this.abs();if(o.t<n.t)null!=e&&e.fromInt(0),null!=i&&this.copyTo(i);else{null==i&&(i=nbi$1());var s=nbi$1(),a=this.s;t=t.s;var c=this.DB-nbits$1(n[n.t-1]);if(0<c?(n.lShiftTo(c,s),o.lShiftTo(c,i)):(n.copyTo(s),o.copyTo(i)),n=s.t,o=s[n-1],0!=o){var h=o*(1<<this.F1)+(1<n?s[n-2]>>this.F2:0),p=this.FV/h,h=(1<<this.F1)/h,u=1<<this.F2,l=i.t,f=l-n,d=null==e?nbi$1():e;for(s.dlShiftTo(f,d),0<=i.compareTo(d)&&(i[i.t++]=1,i.subTo(d,i)),BigInteger$1.ONE.dlShiftTo(n,d),d.subTo(s,s);s.t<n;)s[s.t++]=0;for(;0<=--f;){var g=i[--l]==o?r.DM:Math.floor(i[l]*p+(i[l-1]+u)*h);if((i[l]+=s.am(0,g,i,f,0,n))<g)for(s.dlShiftTo(f,d),i.subTo(d,i);i[l]<--g;)i.subTo(d,i)}null!=e&&(i.drShiftTo(n,e),a!=t&&BigInteger$1.ZERO.subTo(e,e)),i.t=n,i.clamp(),0<c&&i.rShiftTo(c,i),0>a&&BigInteger$1.ZERO.subTo(i,i)}}}}function bnMod$1(t){var e=nbi$1();return this.abs().divRemTo(t,null,e),0>this.s&&0<e.compareTo(BigInteger$1.ZERO)&&t.subTo(e,e),e}function Classic$1(t){this.m=t}function cConvert$1(t){return 0>t.s||0<=t.compareTo(this.m)?t.mod(this.m):t}function cRevert$1(t){return t}function cReduce$1(t){t.divRemTo(this.m,null,t)}function cMulTo$1(t,e,i){t.multiplyTo(e,i),this.reduce(i)}function cSqrTo$1(t,e){t.squareTo(e),this.reduce(e)}function bnpInvDigit$1(){if(1>this.t)return 0;var t=this[0];if(0==(1&t))return 0;var e=3&t,e=e*(2-(15&t)*e)&15,e=e*(2-(255&t)*e)&255,e=e*(2-((65535&t)*e&65535))&65535,e=e*(2-t*e%this.DV)%this.DV;return 0<e?this.DV-e:-e}function Montgomery$1(t){this.m=t,this.mp=t.invDigit(),this.mpl=32767&this.mp,this.mph=this.mp>>15,this.um=(1<<t.DB-15)-1,this.mt2=2*t.t}function montConvert$1(t){var e=nbi$1();return t.abs().dlShiftTo(this.m.t,e),e.divRemTo(this.m,null,e),0>t.s&&0<e.compareTo(BigInteger$1.ZERO)&&this.m.subTo(e,e),e}function montRevert$1(t){var e=nbi$1();return t.copyTo(e),this.reduce(e),e}function montReduce$1(t){for(var e=this;t.t<=this.mt2;)t[t.t++]=0;for(var i=0;i<this.m.t;++i){var r=32767&t[i],n=r*e.mpl+((r*e.mph+(t[i]>>15)*e.mpl&e.um)<<15)&t.DM,r=i+e.m.t;for(t[r]+=this.m.am(0,n,t,i,0,this.m.t);t[r]>=t.DV;)t[r]-=t.DV,t[++r]++}t.clamp(),t.drShiftTo(this.m.t,t),0<=t.compareTo(this.m)&&t.subTo(this.m,t)}function montSqrTo$1(t,e){t.squareTo(e),this.reduce(e)}function montMulTo$1(t,e,i){t.multiplyTo(e,i),this.reduce(i)}function bnpIsEven$1(){return 0==(0<this.t?1&this[0]:this.s)}function bnpExp$1(t,e){if(4294967295<t||1>t)return BigInteger$1.ONE;var i=nbi$1(),r=nbi$1(),n=e.convert(this),o=nbits$1(t)-1;for(n.copyTo(i);0<=--o;)if(e.sqrTo(i,r),0<(t&1<<o))e.mulTo(r,n,i);else var s=i,i=r,r=s;return e.revert(i)}function bnModPowInt$1(t,e){var i;return i=256>t||e.isEven()?new Classic$1(e):new Montgomery$1(e),this.exp(t,i)}function bnClone(){var t=nbi$1();return this.copyTo(t),t}function bnIntValue(){if(0>this.s){if(1==this.t)return this[0]-this.DV;if(0==this.t)return-1}else{if(1==this.t)return this[0];if(0==this.t)return 0}return(this[1]&(1<<32-this.DB)-1)<<this.DB|this[0]}function bnByteValue(){return 0==this.t?this.s:this[0]<<24>>24}function bnShortValue(){return 0==this.t?this.s:this[0]<<16>>16}function bnpChunkSize(t){return Math.floor(Math.LN2*this.DB/Math.log(t))}function bnSigNum(){return 0>this.s?-1:0>=this.t||1==this.t&&0>=this[0]?0:1}function bnpToRadix(t){if(null==t&&(t=10),0==this.signum()||2>t||36<t)return"0";var e=this.chunkSize(t),e=Math.pow(t,e),i=nbv$1(e),r=nbi$1(),n=nbi$1(),o="";for(this.divRemTo(i,r,n);0<r.signum();)o=(e+n.intValue()).toString(t).substr(1)+o,r.divRemTo(i,r,n);return n.intValue().toString(t)+o}function bnpFromRadix(t,e){var i=this;this.fromInt(0),null==e&&(e=10);for(var r=this.chunkSize(e),n=Math.pow(e,r),o=!1,s=0,a=0,c=0;c<t.length;++c){var h=intAt$1(t,c);0>h?"-"==t.charAt(c)&&0==i.signum()&&(o=!0):(a=e*a+h,++s>=r&&(i.dMultiply(n),i.dAddOffset(a,0),a=s=0))}0<s&&(this.dMultiply(Math.pow(e,s)),this.dAddOffset(a,0)),o&&BigInteger$1.ZERO.subTo(this,this)}function bnpFromNumber(t,e,i){var r=this;if("number"==typeof e)if(2>t)this.fromInt(1);else for(this.fromNumber(t,i),this.testBit(t-1)||this.bitwiseTo(BigInteger$1.ONE.shiftLeft(t-1),op_or,this),this.isEven()&&this.dAddOffset(1,0);!this.isProbablePrime(e);)r.dAddOffset(2,0),r.bitLength()>t&&r.subTo(BigInteger$1.ONE.shiftLeft(t-1),r);else{i=[];var n=7&t;i.length=(t>>3)+1,e.nextBytes(i),i[0]=0<n?i[0]&(1<<n)-1:0,this.fromString(i,256)}}function bnToByteArray(){var t=this,e=this.t,i=[];i[0]=this.s;var r,n=this.DB-e*this.DB%8,o=0;if(0<e--)for(n<this.DB&&(r=this[e]>>n)!=(this.s&this.DM)>>n&&(i[o++]=r|this.s<<this.DB-n);0<=e;)8>n?(r=(t[e]&(1<<n)-1)<<8-n,r|=t[--e]>>(n+=t.DB-8)):(r=t[e]>>(n-=8)&255,0>=n&&(n+=t.DB,--e)),0!=(128&r)&&(r|=-256),0==o&&(128&t.s)!=(128&r)&&++o,(0<o||r!=t.s)&&(i[o++]=r);return i}function bnEquals(t){return 0==this.compareTo(t)}function bnMin(t){return 0>this.compareTo(t)?this:t}function bnMax(t){return 0<this.compareTo(t)?this:t}function bnpBitwiseTo(t,e,i){var r,n,o=this,s=Math.min(t.t,this.t);for(r=0;r<s;++r)i[r]=e(o[r],t[r]);if(t.t<this.t){for(n=t.s&this.DM,r=s;r<this.t;++r)i[r]=e(o[r],n);i.t=this.t}else{for(n=this.s&this.DM,r=s;r<t.t;++r)i[r]=e(n,t[r]);i.t=t.t}i.s=e(this.s,t.s),i.clamp()}function op_and(t,e){return t&e}function bnAnd(t){var e=nbi$1();return this.bitwiseTo(t,op_and,e),e}function op_or(t,e){return t|e}function bnOr(t){var e=nbi$1();return this.bitwiseTo(t,op_or,e),e}function op_xor(t,e){return t^e}function bnXor(t){var e=nbi$1();return this.bitwiseTo(t,op_xor,e),e}function op_andnot(t,e){return t&~e}function bnAndNot(t){var e=nbi$1();return this.bitwiseTo(t,op_andnot,e),e}function bnNot(){for(var t=this,e=nbi$1(),i=0;i<this.t;++i)e[i]=t.DM&~t[i];return e.t=this.t,e.s=~this.s,e}function bnShiftLeft(t){var e=nbi$1();return 0>t?this.rShiftTo(-t,e):this.lShiftTo(t,e),e}function bnShiftRight(t){var e=nbi$1();return 0>t?this.lShiftTo(-t,e):this.rShiftTo(t,e),e}function lbit(t){if(0==t)return-1;var e=0;return 0==(65535&t)&&(t>>=16,e+=16),0==(255&t)&&(t>>=8,e+=8),0==(15&t)&&(t>>=4,e+=4),0==(3&t)&&(t>>=2,e+=2),0==(1&t)&&++e,e}function bnGetLowestSetBit(){for(var t=this,e=0;e<this.t;++e)if(0!=t[e])return e*t.DB+lbit(t[e]);return 0>this.s?this.t*this.DB:-1}function cbit(t){for(var e=0;0!=t;)t&=t-1,++e;return e}function bnBitCount(){for(var t=this,e=0,i=this.s&this.DM,r=0;r<this.t;++r)e+=cbit(t[r]^i);return e}function bnTestBit(t){var e=Math.floor(t/this.DB);return e>=this.t?0!=this.s:0!=(this[e]&1<<t%this.DB)}function bnpChangeBit(t,e){var i=BigInteger$1.ONE.shiftLeft(t);return this.bitwiseTo(i,e,i),i}function bnSetBit(t){return this.changeBit(t,op_or)}function bnClearBit(t){return this.changeBit(t,op_andnot)}function bnFlipBit(t){return this.changeBit(t,op_xor)}function bnpAddTo(t,e){for(var i=this,r=0,n=0,o=Math.min(t.t,this.t);r<o;)n+=i[r]+t[r],e[r++]=n&i.DM,n>>=i.DB;if(t.t<this.t){for(n+=t.s;r<this.t;)n+=i[r],e[r++]=n&i.DM,n>>=i.DB;n+=this.s}else{for(n+=this.s;r<t.t;)n+=t[r],e[r++]=n&i.DM,n>>=i.DB;n+=t.s}e.s=0>n?-1:0,0<n?e[r++]=n:-1>n&&(e[r++]=this.DV+n),e.t=r,e.clamp()}function bnAdd(t){var e=nbi$1();return this.addTo(t,e),e}function bnSubtract(t){var e=nbi$1();return this.subTo(t,e),e}function bnMultiply(t){var e=nbi$1();return this.multiplyTo(t,e),e}function bnSquare(){var t=nbi$1();return this.squareTo(t),t}function bnDivide(t){var e=nbi$1();return this.divRemTo(t,e,null),e}function bnRemainder(t){var e=nbi$1();return this.divRemTo(t,null,e),e}function bnDivideAndRemainder(t){var e=nbi$1(),i=nbi$1();return this.divRemTo(t,e,i),[e,i]}function bnpDMultiply(t){this[this.t]=this.am(0,t-1,this,0,0,this.t),++this.t,this.clamp()}function bnpDAddOffset(t,e){var i=this;if(0!=t){for(;this.t<=e;)i[i.t++]=0;for(this[e]+=t;this[e]>=this.DV;)i[e]-=i.DV,++e>=i.t&&(i[i.t++]=0),++i[e]}}function NullExp(){}function nNop(t){return t}function nMulTo(t,e,i){t.multiplyTo(e,i)}function nSqrTo(t,e){t.squareTo(e)}function bnPow(t){return this.exp(t,new NullExp)}function bnpMultiplyLowerTo(t,e,i){var r=this,n=Math.min(this.t+t.t,e);for(i.s=0,i.t=n;0<n;)i[--n]=0;var o;for(o=i.t-this.t;n<o;++n)i[n+r.t]=r.am(0,t[n],i,n,0,r.t);for(o=Math.min(t.t,e);n<o;++n)r.am(0,t[n],i,n,0,e-n);i.clamp()}function bnpMultiplyUpperTo(t,e,i){var r=this;--e;var n=i.t=this.t+t.t-e;for(i.s=0;0<=--n;)i[n]=0;for(n=Math.max(e-this.t,0);n<t.t;++n)i[r.t+n-e]=r.am(e-n,t[n],i,0,0,r.t+n-e);i.clamp(),i.drShiftTo(1,i)}function Barrett(t){this.r2=nbi$1(),this.q3=nbi$1(),BigInteger$1.ONE.dlShiftTo(2*t.t,this.r2),this.mu=this.r2.divide(t),this.m=t}function barrettConvert(t){if(0>t.s||t.t>2*this.m.t)return t.mod(this.m);if(0>t.compareTo(this.m))return t;var e=nbi$1();return t.copyTo(e),this.reduce(e),e}function barrettRevert(t){return t}function barrettReduce(t){var e=this;for(t.drShiftTo(this.m.t-1,this.r2),t.t>this.m.t+1&&(t.t=this.m.t+1,t.clamp()),this.mu.multiplyUpperTo(this.r2,this.m.t+1,this.q3),this.m.multiplyLowerTo(this.q3,this.m.t+1,this.r2);0>t.compareTo(this.r2);)t.dAddOffset(1,e.m.t+1);for(t.subTo(this.r2,t);0<=t.compareTo(this.m);)t.subTo(e.m,t)}function barrettSqrTo(t,e){t.squareTo(e),this.reduce(e)}function barrettMulTo(t,e,i){t.multiplyTo(e,i),this.reduce(i)}function bnModPow(t,e){var i,r,n=this,o=t.bitLength(),s=nbv$1(1);if(0>=o)return s;i=18>o?1:48>o?3:144>o?4:768>o?5:6,r=8>o?new Classic$1(e):e.isEven()?new Barrett(e):new Montgomery$1(e);var a=[],c=3,h=i-1,p=(1<<i)-1;if(a[1]=r.convert(this),1<i)for(o=nbi$1(),r.sqrTo(a[1],o);c<=p;)a[c]=nbi$1(),r.mulTo(o,a[c-2],a[c]),c+=2;for(var u,l=t.t-1,f=!0,d=nbi$1(),o=nbits$1(t[l])-1;0<=l;){for(o>=h?u=t[l]>>o-h&p:(u=(t[l]&(1<<o+1)-1)<<h-o,0<l&&(u|=t[l-1]>>n.DB+o-h)),c=i;0==(1&u);)u>>=1,--c;if(0>(o-=c)&&(o+=n.DB,--l),f)a[u].copyTo(s),f=!1;else{for(;1<c;)r.sqrTo(s,d),r.sqrTo(d,s),c-=2;0<c?r.sqrTo(s,d):(c=s,s=d,d=c),r.mulTo(d,a[u],s)}for(;0<=l&&0==(t[l]&1<<o);)r.sqrTo(s,d),c=s,s=d,d=c,0>--o&&(o=n.DB-1,--l)}return r.revert(s)}function bnGCD(t){var e=0>this.s?this.negate():this.clone();if(t=0>t.s?t.negate():t.clone(),0>e.compareTo(t)){var i=e,e=t;t=i}var i=e.getLowestSetBit(),r=t.getLowestSetBit();if(0>r)return e;for(i<r&&(r=i),0<r&&(e.rShiftTo(r,e),t.rShiftTo(r,t));0<e.signum();)0<(i=e.getLowestSetBit())&&e.rShiftTo(i,e),0<(i=t.getLowestSetBit())&&t.rShiftTo(i,t),0<=e.compareTo(t)?(e.subTo(t,e),e.rShiftTo(1,e)):(t.subTo(e,t),t.rShiftTo(1,t));return 0<r&&t.lShiftTo(r,t),t}function bnpModInt(t){var e=this;if(0>=t)return 0;var i=this.DV%t,r=0>this.s?t-1:0;if(0<this.t)if(0==i)r=this[0]%t;else for(var n=this.t-1;0<=n;--n)r=(i*r+e[n])%t;return r}function bnModInverse(t){var e=this,i=t.isEven();if(this.isEven()&&i||0==t.signum())return BigInteger$1.ZERO;for(var r=t.clone(),n=this.clone(),o=nbv$1(1),s=nbv$1(0),a=nbv$1(0),c=nbv$1(1);0!=r.signum();){for(;r.isEven();)r.rShiftTo(1,r),i?(o.isEven()&&s.isEven()||(o.addTo(e,o),s.subTo(t,s)),o.rShiftTo(1,o)):s.isEven()||s.subTo(t,s),s.rShiftTo(1,s);for(;n.isEven();)n.rShiftTo(1,n),i?(a.isEven()&&c.isEven()||(a.addTo(e,a),c.subTo(t,c)),a.rShiftTo(1,a)):c.isEven()||c.subTo(t,c),c.rShiftTo(1,c);0<=r.compareTo(n)?(r.subTo(n,r),i&&o.subTo(a,o),s.subTo(c,s)):(n.subTo(r,n),i&&a.subTo(o,a),c.subTo(s,c))}return 0!=n.compareTo(BigInteger$1.ONE)?BigInteger$1.ZERO:0<=c.compareTo(t)?c.subtract(t):0>c.signum()?(c.addTo(t,c),0>c.signum()?c.add(t):c):c}function bnIsProbablePrime(t){var e,i=this.abs();if(1==i.t&&i[0]<=lowprimes[lowprimes.length-1]){for(e=0;e<lowprimes.length;++e)if(i[0]==lowprimes[e])return!0;return!1}if(i.isEven())return!1;for(e=1;e<lowprimes.length;){for(var r=lowprimes[e],n=e+1;n<lowprimes.length&&r<lplim;)r*=lowprimes[n++];for(r=i.modInt(r);e<n;)if(0==r%lowprimes[e++])return!1}return i.millerRabin(t)}function bnpMillerRabin(t){var e=this,i=this.subtract(BigInteger$1.ONE),r=i.getLowestSetBit();if(0>=r)return!1;var n=i.shiftRight(r);t=t+1>>1,t>lowprimes.length&&(t=lowprimes.length);for(var o=nbi$1(),s=0;s<t;++s){o.fromInt(lowprimes[Math.floor(Math.random()*lowprimes.length)]);var a=o.modPow(n,e);if(0!=a.compareTo(BigInteger$1.ONE)&&0!=a.compareTo(i)){for(var c=1;c++<r&&0!=a.compareTo(i);)if(a=a.modPowInt(2,e),0==a.compareTo(BigInteger$1.ONE))return!1;if(0!=a.compareTo(i))return!1}}return!0}function Arcfour$1(){this.j=this.i=0,this.S=[]}function ARC4init$1(t){var e,i,r,n=this;for(e=0;256>e;++e)n.S[e]=e;for(e=i=0;256>e;++e)i=i+n.S[e]+t[e%t.length]&255,r=n.S[e],n.S[e]=n.S[i],n.S[i]=r;this.j=this.i=0}function ARC4next$1(){var t;return this.i=this.i+1&255,this.j=this.j+this.S[this.i]&255,t=this.S[this.i],this.S[this.i]=this.S[this.j],this.S[this.j]=t,this.S[t+this.S[this.i]&255]}function prng_newstate$1(){return new Arcfour$1}function rng_seed_int$1(t){rng_pool$1[rng_pptr$1++]^=255&t,rng_pool$1[rng_pptr$1++]^=t>>8&255,rng_pool$1[rng_pptr$1++]^=t>>16&255,rng_pool$1[rng_pptr$1++]^=t>>24&255,rng_pptr$1>=rng_psize$1&&(rng_pptr$1-=rng_psize$1)}function rng_seed_time$1(){rng_seed_int$1((new Date).getTime())}function rng_get_byte$1(){if(null==rng_state$1){for(rng_seed_time$1(),rng_state$1=prng_newstate$1(),rng_state$1.init(rng_pool$1),rng_pptr$1=0;rng_pptr$1<rng_pool$1.length;++rng_pptr$1)rng_pool$1[rng_pptr$1]=0;rng_pptr$1=0}return rng_state$1.next()}function rng_get_bytes$1(t){var e;for(e=0;e<t.length;++e)t[e]=rng_get_byte$1()}function SecureRandom$1(){}function ECFieldElementFp(t,e){this.x=e,this.q=t}function feFpEquals(t){return t==this||this.q.equals(t.q)&&this.x.equals(t.x)}function feFpToBigInteger(){return this.x}function feFpNegate(){return new ECFieldElementFp(this.q,this.x.negate().mod(this.q))}function feFpAdd(t){return new ECFieldElementFp(this.q,this.x.add(t.toBigInteger()).mod(this.q))}function feFpSubtract(t){return new ECFieldElementFp(this.q,this.x.subtract(t.toBigInteger()).mod(this.q))}function feFpMultiply(t){return new ECFieldElementFp(this.q,this.x.multiply(t.toBigInteger()).mod(this.q))}function feFpSquare(){return new ECFieldElementFp(this.q,this.x.square().mod(this.q))}function feFpDivide(t){return new ECFieldElementFp(this.q,this.x.multiply(t.toBigInteger().modInverse(this.q)).mod(this.q))}function ECPointFp(t,e,i,r){this.curve=t,this.x=e,this.y=i,this.z=null==r?BigInteger$1.ONE:r,this.zinv=null}function pointFpGetX(){return null==this.zinv&&(this.zinv=this.z.modInverse(this.curve.q)),this.curve.fromBigInteger(this.x.toBigInteger().multiply(this.zinv).mod(this.curve.q))}function pointFpGetY(){return null==this.zinv&&(this.zinv=this.z.modInverse(this.curve.q)),this.curve.fromBigInteger(this.y.toBigInteger().multiply(this.zinv).mod(this.curve.q))}function pointFpEquals(t){return t==this||(this.isInfinity()?t.isInfinity():t.isInfinity()?this.isInfinity():!!t.y.toBigInteger().multiply(this.z).subtract(this.y.toBigInteger().multiply(t.z)).mod(this.curve.q).equals(BigInteger$1.ZERO)&&t.x.toBigInteger().multiply(this.z).subtract(this.x.toBigInteger().multiply(t.z)).mod(this.curve.q).equals(BigInteger$1.ZERO))}function pointFpIsInfinity(){return null==this.x&&null==this.y||this.z.equals(BigInteger$1.ZERO)&&!this.y.toBigInteger().equals(BigInteger$1.ZERO)}function pointFpNegate(){return new ECPointFp(this.curve,this.x,this.y.negate(),this.z)}function pointFpAdd(t){if(this.isInfinity())return t;if(t.isInfinity())return this;var e=t.y.toBigInteger().multiply(this.z).subtract(this.y.toBigInteger().multiply(t.z)).mod(this.curve.q),i=t.x.toBigInteger().multiply(this.z).subtract(this.x.toBigInteger().multiply(t.z)).mod(this.curve.q);if(BigInteger$1.ZERO.equals(i))return BigInteger$1.ZERO.equals(e)?this.twice():this.curve.getInfinity();var r=new BigInteger$1("3"),n=this.x.toBigInteger(),o=this.y.toBigInteger();t.x.toBigInteger(),t.y.toBigInteger();var s=i.square(),a=s.multiply(i),n=n.multiply(s),s=e.square().multiply(this.z),i=s.subtract(n.shiftLeft(1)).multiply(t.z).subtract(a).multiply(i).mod(this.curve.q),e=n.multiply(r).multiply(e).subtract(o.multiply(a)).subtract(s.multiply(e)).multiply(t.z).add(e.multiply(a)).mod(this.curve.q);return t=a.multiply(this.z).multiply(t.z).mod(this.curve.q),new ECPointFp(this.curve,this.curve.fromBigInteger(i),this.curve.fromBigInteger(e),t)}function pointFpTwice(){if(this.isInfinity())return this;if(0==this.y.toBigInteger().signum())return this.curve.getInfinity();var t=new BigInteger$1("3"),e=this.x.toBigInteger(),i=this.y.toBigInteger(),r=i.multiply(this.z),n=r.multiply(i).mod(this.curve.q),i=this.curve.a.toBigInteger(),o=e.square().multiply(t);return BigInteger$1.ZERO.equals(i)||(o=o.add(this.z.square().multiply(i))),o=o.mod(this.curve.q),i=o.square().subtract(e.shiftLeft(3).multiply(n)).shiftLeft(1).multiply(r).mod(this.curve.q),t=o.multiply(t).multiply(e).subtract(n.shiftLeft(1)).shiftLeft(2).multiply(n).subtract(o.square().multiply(o)).mod(this.curve.q),r=r.square().multiply(r).shiftLeft(3).mod(this.curve.q),new ECPointFp(this.curve,this.curve.fromBigInteger(i),this.curve.fromBigInteger(t),r)}function pointFpMultiply(t){var e=this;if(this.isInfinity())return this;if(0==t.signum())return this.curve.getInfinity();var i,r=t.multiply(new BigInteger$1("3")),n=this.negate(),o=this;for(i=r.bitLength()-2;0<i;--i){var o=o.twice(),s=r.testBit(i),a=t.testBit(i);s!=a&&(o=o.add(s?e:n))}return o}function pointFpMultiplyTwo(t,e,i){var r,n=this;r=t.bitLength()>i.bitLength()?t.bitLength()-1:i.bitLength()-1;for(var o=this.curve.getInfinity(),s=this.add(e);0<=r;)o=o.twice(),t.testBit(r)?o=i.testBit(r)?o.add(s):o.add(n):i.testBit(r)&&(o=o.add(e)),--r;return o}function ECCurveFp(t,e,i){this.q=t,this.a=this.fromBigInteger(e),this.b=this.fromBigInteger(i),this.infinity=new ECPointFp(this,null,null)}function curveFpGetQ(){return this.q}function curveFpGetA(){return this.a}function curveFpGetB(){return this.b}function curveFpEquals(t){return t==this||this.q.equals(t.q)&&this.a.equals(t.a)&&this.b.equals(t.b)}function curveFpGetInfinity(){return this.infinity}function curveFpFromBigInteger(t){return new ECFieldElementFp(this.q,t)}function curveFpDecodePointHex(t){switch(parseInt(t.substr(0,2),16)){case 0:return this.infinity;case 2:case 3:return null;case 4:case 6:case 7:var e=(t.length-2)/2,i=t.substr(2,e);return t=t.substr(e+2,e),new ECPointFp(this,this.fromBigInteger(new BigInteger$1(i,16)),this.fromBigInteger(new BigInteger$1(t,16)));default:return null}}function SM3Digest(){this.BYTE_LENGTH=64,this.xBuf=[],this.byteCount=this.xBufOff=0,this.DIGEST_LENGTH=32,
this.v0=[1937774191,1226093241,388252375,3666478592,2842636476,372324522,3817729613,2969243214],this.v0=[1937774191,1226093241,388252375,-628488704,-1452330820,372324522,-477237683,-1325724082],this.v=Array(8),this.v_=Array(8),this.X0=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],this.X=Array(68),this.xOff=0,this.T_00_15=2043430169,this.T_16_63=2055708042,0<arguments.length?this.InitDigest(arguments[0]):this.Init()}function SM2Cipher(t){this.ct=1,this.sm3c3=this.sm3keybase=this.p2=null,this.key=Array(32),this.keyOff=0,this.cipherMode="undefined"!=typeof t?t:SM2CipherMode.C1C3C2}function SM2SetKey(t){t&&"object"==typeof t?(this.eccX=t.eccX,this.eccY=t.eccY):(this.eccX="F1342ADB38855E1F8C37D1181378DE446E52788389F7DB3DEA022A1FC4D4D856",this.eccY="66FC6DE253C822F1E52914D9E0B80C5D825759CE696CF039A8449F98017510B7")}function SM2Encrypt(t){var e=SM2CipherMode.C1C3C2,i=new SM2Cipher(e),r=CryptoJS.enc.Utf8.parse(t),i=new SM2Cipher(e),n=i.CreatePoint(this.eccX,this.eccY),o=i.GetWords(r.toString());return i.Encrypt(n,o)}function createCommonjsModule(t,e){return e={exports:{}},t(e,e.exports),e.exports}function Crypto(t){}function Device(t){}function Header(t){this.aladdin=t;var e=this;e._injectStyle()}function stringify(t,e){if(void 0===e&&(e=!1),!t||"object"!=typeof t)return"";var i=[];for(var r in t){var n=t[r];if(Array.isArray(n))for(var o in n)i.push((e?r:r+"[]")+"="+encodeURIComponent(n[o]));else i.push(r+"="+encodeURIComponent(n))}return i.join("&")}function join(t,e,i){void 0===i&&(i=!1);var r=stringify(e,i);return""!==r&&(r=(/\?/.test(t)?"&":"?")+r),t+r}function Http(t){}function filterOpts(t){return t=t||{},t.method=t.method.toLowerCase()||"get",t.headers||(t.headers={}),"post"!==t.method&&"put"!==t.method&&"patch"!==t.method&&"delete"!==t.method||t.headers["Content-Type"]||(t.headers["Content-Type"]="application/x-www-form-urlencoded"),t.qs&&"[object Object]"===Object.prototype.toString.call(t.qs)&&(t.url=join(t.url,t.qs,t.traditional)),t.body&&"[object Object]"===Object.prototype.toString.call(t.body)&&(/x-www-form-urlencoded/.test(t.headers["Content-Type"])?t.body=stringify(t.body,t.traditional):t.body=JSON.stringify(t.body)),t}function LocalStorage(t){this._aladdin=t,this._secretKey="123456781234567812345678"}function Navigator(t){for(var e=!1,i=historyStack.length;i>0;i--)if(historyStack[i-1]===location.href){historyStack.splice(i),e=!0;break}e||historyStack.push(location.href),window.sessionStorage.setItem(PAGE_HISTORY_STACK_KEY,JSON.stringify(historyStack))}function Network(t){}function SessionStorage(t){this._aladdin=t,this._secretKey="123456781234567812345678"}function Page(t){}var installGlobalApi=function(t){if(t.env.isBrowser)try{var e=JSON.parse(sessionStorage.getItem("aladdinChromeExtensionInfo"));e&&(sessionStorage.removeItem("aladdinChromeExtensionInfo"),e.activeRequire?window.aladdinChromeExtension&&window.aladdinChromeExtension.startListen(t):"complete"!==document.readyState&&document.write('<script src="'+e.injectScriptPath+'"></script>'))}catch(t){console.log("Browser plug-in loading failure")}window.__ALADDIN_CALLBACK__=function(){var e=arguments;setTimeout(function(){t.callback.apply(t,e)},0)},window.__ALADDIN_EVENT_EMIT__=function(){var e=arguments;setTimeout(function(){t.emit.apply(t,e)},0)},window.__ALADDIN_FETCH__=function(e){return t.fetch(e)}},ua=navigator.userAgent,_hybridVersion,_appName,_appVersion,infos=/AladdinHybrid\/(\d+\.\d+\.?\d*.*?) \((.*?) (\d+\.\d+\.?\d*.*?)\)/i.exec(ua);Array.isArray(infos)&&(_hybridVersion=infos[1],_appName=infos[2],_appVersion=infos[3]);var env={hybridVersion:_hybridVersion,appName:_appName,appVersion:_appVersion,isMobile:/Mobile/i.test(ua),isAndroid:/Android/i.test(ua),isiOS:!!ua.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/i),isiPhone:/iPhone/i.test(ua),isiPad:/iPad/i.test(ua),isiPod:/iPod/i.test(ua),isHybrid:!!_hybridVersion,isBrowser:!_hybridVersion,isWechat:/MicroMessenger/i.test(ua),isQQ:/ QQ\//i.test(ua)},PROTOCOL="aladdin:";readonlyProperty(Aladdin.prototype,"version","1.0.7"),Aladdin.prototype.on=function(t,e){return t&&"string"==typeof t&&e&&"function"==typeof e?((this._subscribers[t]||(this._subscribers[t]=[])).push(e),this):this},Aladdin.prototype.once=function(t,e){var i=this,r=function(){i.off(t,r),e.apply(this,arguments)};return r.listener=e,this.on(t,r),this},Aladdin.prototype.off=function(t,e){var i=this;if(!arguments.length){for(t in this._subscribers)delete i._subscribers[t];return this}if(!t||"string"!=typeof t)return this;if(!e&&this._subscribers[t])return delete this._subscribers[t],this;var r=this._subscribers[t];if(!r)return this;for(var n,o=r.length;o--;)if(n=r[o],n===e||n.listener===e){i._subscribers[t].splice(o,1);break}return this},Aladdin.prototype.emit=function(t){for(var e=[],i=arguments.length-1;i-- >0;)e[i]=arguments[i+1];if(t&&"string"==typeof t){var r=this._subscribers[t];if(r)for(var n in r)r[n].apply(null,e)}return this},Aladdin.prototype.broadcast=function(t,e,i,r){if(!t)return this;"function"==typeof e?(r=e,e={}):"function"==typeof i&&(r=i,i="");var n={eventName:t,event:e,url:i};return this.call("aladdin","broadcast",n,r),this},Aladdin.prototype.use=function(t){if("function"==typeof t){var e=new t(this),i=e.name||t.name.replace(/^([A-Z])/,function(t){return t.toLowerCase()});if(!i)throw new Error("The Component's name is required");this[i]=e}return this},Aladdin.prototype.middleware=function(t){return"function"==typeof t&&this._middlewares.push(t),this},Aladdin.prototype.support=function(t,e,i){if(!t)return this;"function"==typeof e&&(i=e,e="");var r={component:t,action:e};return this.call("aladdin","support",r,i),this},Aladdin.prototype._transformHandlers=function(t,e,i,r){var n=this;for(var o in i){var s=i[o];if(s){var a=Object.prototype.toString.call(s);if("[object Object]"!==a&&"[object Array]"!==a||n._transformHandlers(t,e,s,r),"[object Function]"===a){var c=r+"_function_"+t+"_"+e+"_"+(isNaN(o)?o:"callback");i[o]=c,n._handlers[c]=callbackWrapper.call(n,s)}}}},Aladdin.prototype.call=function(t,e){for(var i=[],r=arguments.length-2;r-- >0;)i[r]=arguments[r+2];var n={component:t,action:e,args:i,callId:(this._ts+ ++this._counter).toString(16)};if(this._middlewares.length>0&&(n=this._middlewares.reduce(function(t,e){return e(t)},n),!n))return this;this._transformHandlers(n.component,n.action,n.args,n.callId),n.message=n.component+"."+n.action+"?"+encodeURIComponent(JSON.stringify(n.args)),n.url=PROTOCOL+"//"+n.message,this.emit("call",n);var o;if(env.isAndroid)o=prompt(n.url);else if(env.isiOS){n.message.length>1024&&(this._datas[n.callId]=n.message,n.url=PROTOCOL+"//delay-fetch?callId="+n.callId),window.__ALADDIN__||(window.__ALADDIN__={});var s=document.createElement("IFRAME");s.setAttribute("src",n.url),s.setAttribute("style","display: none;"),document.documentElement.appendChild(s),s.parentNode.removeChild(s),s=null,o=window.__ALADDIN__.retValue,window.__ALADDIN__.retValue=void 0}return o},Aladdin.prototype.callback=function(t){for(var e=[],i=arguments.length-1;i-- >0;)e[i]=arguments[i+1];if(t){var r=this._handlers[t];this.emit("callback",{handlerKey:t,handler:r,args:e}),r&&"function"==typeof r&&(r.apply(null,e),r.keep||delete this._handlers[t])}},Aladdin.prototype.fetch=function(t){var e=this._datas[t];return e&&delete this._datas[t],e};var dbits,canary=0xdeadbeefcafe,j_lm=15715070==(16777215&canary);j_lm&&"Microsoft Internet Explorer"==navigator.appName?(BigInteger.prototype.am=am2,dbits=30):j_lm&&"Netscape"!=navigator.appName?(BigInteger.prototype.am=am1,dbits=26):(BigInteger.prototype.am=am3,dbits=28),BigInteger.prototype.DB=dbits,BigInteger.prototype.DM=(1<<dbits)-1,BigInteger.prototype.DV=1<<dbits;var BI_FP=52;BigInteger.prototype.FV=Math.pow(2,BI_FP),BigInteger.prototype.F1=BI_FP-dbits,BigInteger.prototype.F2=2*dbits-BI_FP;var BI_RM="0123456789abcdefghijklmnopqrstuvwxyz",BI_RC=new Array,rr,vv;for(rr="0".charCodeAt(0),vv=0;vv<=9;++vv)BI_RC[rr++]=vv;for(rr="a".charCodeAt(0),vv=10;vv<36;++vv)BI_RC[rr++]=vv;for(rr="A".charCodeAt(0),vv=10;vv<36;++vv)BI_RC[rr++]=vv;Classic.prototype.convert=cConvert,Classic.prototype.revert=cRevert,Classic.prototype.reduce=cReduce,Classic.prototype.mulTo=cMulTo,Classic.prototype.sqrTo=cSqrTo,Montgomery.prototype.convert=montConvert,Montgomery.prototype.revert=montRevert,Montgomery.prototype.reduce=montReduce,Montgomery.prototype.mulTo=montMulTo,Montgomery.prototype.sqrTo=montSqrTo,BigInteger.prototype.copyTo=bnpCopyTo,BigInteger.prototype.fromInt=bnpFromInt,BigInteger.prototype.fromString=bnpFromString,BigInteger.prototype.clamp=bnpClamp,BigInteger.prototype.dlShiftTo=bnpDLShiftTo,BigInteger.prototype.drShiftTo=bnpDRShiftTo,BigInteger.prototype.lShiftTo=bnpLShiftTo,BigInteger.prototype.rShiftTo=bnpRShiftTo,BigInteger.prototype.subTo=bnpSubTo,BigInteger.prototype.multiplyTo=bnpMultiplyTo,BigInteger.prototype.squareTo=bnpSquareTo,BigInteger.prototype.divRemTo=bnpDivRemTo,BigInteger.prototype.invDigit=bnpInvDigit,BigInteger.prototype.isEven=bnpIsEven,BigInteger.prototype.exp=bnpExp,BigInteger.prototype.toString=bnToString,BigInteger.prototype.negate=bnNegate,BigInteger.prototype.abs=bnAbs,BigInteger.prototype.compareTo=bnCompareTo,BigInteger.prototype.bitLength=bnBitLength,BigInteger.prototype.mod=bnMod,BigInteger.prototype.modPowInt=bnModPowInt,BigInteger.ZERO=nbv(0),BigInteger.ONE=nbv(1),Arcfour.prototype.init=ARC4init,Arcfour.prototype.next=ARC4next;var rng_psize=256,rng_state,rng_pool,rng_pptr;if(null==rng_pool){rng_pool=new Array,rng_pptr=0;for(var t;rng_pptr<rng_psize;)t=Math.floor(65536*Math.random()),rng_pool[rng_pptr++]=t>>>8,rng_pool[rng_pptr++]=255&t;rng_pptr=0,rng_seed_time()}SecureRandom.prototype.nextBytes=rng_get_bytes;var RSAKey$1=function(){this.n=null,this.e=0,this.d=null,this.p=null,this.q=null,this.dmp1=null,this.dmq1=null,this.coeff=null};RSAKey$1.prototype.doPublic=RSADoPublic,RSAKey$1.prototype.setPublic=RSASetPublic,RSAKey$1.prototype.encrypt=RSAEncrypt;var b64map="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",b64pad="=",SM2CipherMode={C1C2C3:"0",C1C3C2:"1"},CryptoJS=CryptoJS||function(t,e){var i={},r=i.lib={},n=r.Base=function(){function t(){}return{extend:function(e){t.prototype=this;var i=new t;return e&&i.mixIn(e),i.hasOwnProperty("init")||(i.init=function(){i.$super.init.apply(this,arguments)}),i.init.prototype=i,i.$super=this,i},create:function(){var t=this.extend();return t.init.apply(t,arguments),t},init:function(){},mixIn:function(t){var e=this;for(var i in t)t.hasOwnProperty(i)&&(e[i]=t[i]);t.hasOwnProperty("toString")&&(this.toString=t.toString)},clone:function(){return this.init.prototype.extend(this)}}}(),o=r.WordArray=n.extend({init:function(t,i){t=this.words=t||[],this.sigBytes=i!=e?i:4*t.length},toString:function(t){return(t||a).stringify(this)},concat:function(t){var e=this.words,i=t.words,r=this.sigBytes;if(t=t.sigBytes,this.clamp(),r%4)for(var n=0;n<t;n++)e[r+n>>>2]|=(i[n>>>2]>>>24-n%4*8&255)<<24-(r+n)%4*8;else if(65535<i.length)for(n=0;n<t;n+=4)e[r+n>>>2]=i[n>>>2];else e.push.apply(e,i);return this.sigBytes+=t,this},clamp:function(){var e=this.words,i=this.sigBytes;e[i>>>2]&=4294967295<<32-i%4*8,e.length=t.ceil(i/4)},clone:function(){var t=n.clone.call(this);return t.words=this.words.slice(0),t},random:function(e){for(var i=[],r=0;r<e;r+=4)i.push(4294967296*t.random()|0);return new o.init(i,e)}}),s=i.enc={},a=s.Hex={stringify:function(t){var e=t.words;t=t.sigBytes;for(var i=[],r=0;r<t;r++){var n=e[r>>>2]>>>24-r%4*8&255;i.push((n>>>4).toString(16)),i.push((15&n).toString(16))}return i.join("")},parse:function(t){for(var e=t.length,i=[],r=0;r<e;r+=2)i[r>>>3]|=parseInt(t.substr(r,2),16)<<24-r%8*4;return new o.init(i,e/2)}},c=s.Latin1={stringify:function(t){var e=t.words;t=t.sigBytes;for(var i=[],r=0;r<t;r++)i.push(String.fromCharCode(e[r>>>2]>>>24-r%4*8&255));return i.join("")},parse:function(t){for(var e=t.length,i=[],r=0;r<e;r++)i[r>>>2]|=(255&t.charCodeAt(r))<<24-r%4*8;return new o.init(i,e)}},h=s.Utf8={stringify:function(t){try{return decodeURIComponent(escape(c.stringify(t)))}catch(t){throw Error("Malformed UTF-8 data")}},parse:function(t){return c.parse(unescape(encodeURIComponent(t)))}},p=r.BufferedBlockAlgorithm=n.extend({reset:function(){this._data=new o.init,this._nDataBytes=0},_append:function(t){"string"==typeof t&&(t=h.parse(t)),this._data.concat(t),this._nDataBytes+=t.sigBytes},_process:function(e){var i=this,r=this._data,n=r.words,s=r.sigBytes,a=this.blockSize,c=s/(4*a),c=e?t.ceil(c):t.max((0|c)-this._minBufferSize,0);if(e=c*a,s=t.min(4*e,s),e){for(var h=0;h<e;h+=a)i._doProcessBlock(n,h);h=n.splice(0,e),r.sigBytes-=s}return new o.init(h,s)},clone:function(){var t=n.clone.call(this);return t._data=this._data.clone(),t},_minBufferSize:0});r.Hasher=p.extend({cfg:n.extend(),init:function(t){this.cfg=this.cfg.extend(t),this.reset()},reset:function(){p.reset.call(this),this._doReset()},update:function(t){return this._append(t),this._process(),this},finalize:function(t){return t&&this._append(t),this._doFinalize()},blockSize:16,_createHelper:function(t){return function(e,i){return new t.init(i).finalize(e)}},_createHmacHelper:function(t){return function(e,i){return new u.HMAC.init(t,i).finalize(e)}}});var u=i.algo={};return i}(Math);CryptoJS.lib.Cipher||function(t){var e=CryptoJS,i=e.lib,r=i.Base,n=i.WordArray,o=i.BufferedBlockAlgorithm,s=e.enc.Base64,a=e.algo.EvpKDF,c=i.Cipher=o.extend({cfg:r.extend(),createEncryptor:function(t,e){return this.create(this._ENC_XFORM_MODE,t,e)},createDecryptor:function(t,e){return this.create(this._DEC_XFORM_MODE,t,e)},init:function(t,e,i){this.cfg=this.cfg.extend(i),this._xformMode=t,this._key=e,this.reset()},reset:function(){o.reset.call(this),this._doReset()},process:function(t){return this._append(t),this._process()},finalize:function(t){return t&&this._append(t),this._doFinalize()},keySize:4,ivSize:4,_ENC_XFORM_MODE:1,_DEC_XFORM_MODE:2,_createHelper:function(){return function(t){return{encrypt:function(e,i,r){return("string"==typeof i?d:f).encrypt(t,e,i,r)},decrypt:function(e,i,r){return("string"==typeof i?d:f).decrypt(t,e,i,r)}}}}()});i.StreamCipher=c.extend({_doFinalize:function(){return this._process(!0)},blockSize:1});var h=e.mode={},p=i.BlockCipherMode=r.extend({createEncryptor:function(t,e){return this.Encryptor.create(t,e)},createDecryptor:function(t,e){return this.Decryptor.create(t,e)},init:function(t,e){this._cipher=t,this._iv=e}}),h=h.CBC=function(){function e(e,i,r){var n=this._iv;n?this._iv=t:n=this._prevBlock;for(var o=0;o<r;o++)e[i+o]^=n[o]}var i=p.extend();return i.Encryptor=i.extend({processBlock:function(t,i){var r=this._cipher,n=r.blockSize;e.call(this,t,i,n),r.encryptBlock(t,i),this._prevBlock=t.slice(i,i+n)}}),i.Decryptor=i.extend({processBlock:function(t,i){var r=this._cipher,n=r.blockSize,o=t.slice(i,i+n);r.decryptBlock(t,i),e.call(this,t,i,n),this._prevBlock=o}}),i}(),u=(e.pad={}).Pkcs7={pad:function(t,e){for(var i=4*e,i=i-t.sigBytes%i,r=i<<24|i<<16|i<<8|i,o=[],s=0;s<i;s+=4)o.push(r);i=n.create(o,i),t.concat(i)},unpad:function(t){t.sigBytes-=255&t.words[t.sigBytes-1>>>2]}};i.BlockCipher=c.extend({cfg:c.cfg.extend({mode:h,padding:u}),reset:function(){c.reset.call(this);var t=this.cfg,e=t.iv,t=t.mode;if(this._xformMode==this._ENC_XFORM_MODE)var i=t.createEncryptor;else i=t.createDecryptor,this._minBufferSize=1;this._mode=i.call(t,this,e&&e.words)},_doProcessBlock:function(t,e){this._mode.processBlock(t,e)},_doFinalize:function(){var t=this.cfg.padding;if(this._xformMode==this._ENC_XFORM_MODE){t.pad(this._data,this.blockSize);var e=this._process(!0)}else e=this._process(!0),t.unpad(e);return e},blockSize:4});var l=i.CipherParams=r.extend({init:function(t){this.mixIn(t)},toString:function(t){return(t||this.formatter).stringify(this)}}),h=(e.format={}).OpenSSL={stringify:function(t){var e=t.ciphertext;return t=t.salt,(t?n.create([1398893684,1701076831]).concat(t).concat(e):e).toString(s)},parse:function(t){t=s.parse(t);var e=t.words;if(1398893684==e[0]&&1701076831==e[1]){var i=n.create(e.slice(2,4));e.splice(0,4),t.sigBytes-=16}return l.create({ciphertext:t,salt:i})}},f=i.SerializableCipher=r.extend({cfg:r.extend({format:h}),encrypt:function(t,e,i,r){r=this.cfg.extend(r);var n=t.createEncryptor(i,r);return e=n.finalize(e),n=n.cfg,l.create({ciphertext:e,key:i,iv:n.iv,algorithm:t,mode:n.mode,padding:n.padding,blockSize:t.blockSize,formatter:r.format})},decrypt:function(t,e,i,r){return r=this.cfg.extend(r),e=this._parse(e,r.format),t.createDecryptor(i,r).finalize(e.ciphertext)},_parse:function(t,e){return"string"==typeof t?e.parse(t,this):t}}),e=(e.kdf={}).OpenSSL={execute:function(t,e,i,r){return r||(r=n.random(8)),t=a.create({keySize:e+i}).compute(t,r),i=n.create(t.words.slice(e),4*i),t.sigBytes=4*e,l.create({key:t,iv:i,salt:r})}},d=i.PasswordBasedCipher=f.extend({cfg:f.cfg.extend({kdf:e}),encrypt:function(t,e,i,r){return r=this.cfg.extend(r),i=r.kdf.execute(i,t.keySize,t.ivSize),r.iv=i.iv,t=f.encrypt.call(this,t,e,i.key,r),t.mixIn(i),t},decrypt:function(t,e,i,r){return r=this.cfg.extend(r),e=this._parse(e,r.format),i=r.kdf.execute(i,t.keySize,t.ivSize,e.salt),r.iv=i.iv,f.decrypt.call(this,t,e,i.key,r)}})}(),function(){function t(t,e){var i=(this._lBlock>>>t^this._rBlock)&e;this._rBlock^=i,this._lBlock^=i<<t}function e(t,e){var i=(this._rBlock>>>t^this._lBlock)&e;this._lBlock^=i,this._rBlock^=i<<t}var i=CryptoJS,r=i.lib,n=r.WordArray,r=r.BlockCipher,o=i.algo,s=[57,49,41,33,25,17,9,1,58,50,42,34,26,18,10,2,59,51,43,35,27,19,11,3,60,52,44,36,63,55,47,39,31,23,15,7,62,54,46,38,30,22,14,6,61,53,45,37,29,21,13,5,28,20,12,4],a=[14,17,11,24,1,5,3,28,15,6,21,10,23,19,12,4,26,8,16,7,27,20,13,2,41,52,31,37,47,55,30,40,51,45,33,48,44,49,39,56,34,53,46,42,50,36,29,32],c=[1,2,4,6,8,10,12,14,15,17,19,21,23,25,27,28],h=[{0:8421888,268435456:32768,536870912:8421378,805306368:2,1073741824:512,1342177280:8421890,1610612736:8389122,1879048192:8388608,2147483648:514,2415919104:8389120,2684354560:33280,2952790016:8421376,3221225472:32770,3489660928:8388610,3758096384:0,4026531840:33282,134217728:0,402653184:8421890,671088640:33282,939524096:32768,1207959552:8421888,1476395008:512,1744830464:8421378,2013265920:2,2281701376:8389120,2550136832:33280,2818572288:8421376,3087007744:8389122,3355443200:8388610,3623878656:32770,3892314112:514,4160749568:8388608,1:32768,268435457:2,536870913:8421888,805306369:8388608,1073741825:8421378,1342177281:33280,1610612737:512,1879048193:8389122,2147483649:8421890,2415919105:8421376,2684354561:8388610,2952790017:33282,3221225473:514,3489660929:8389120,3758096385:32770,4026531841:0,134217729:8421890,402653185:8421376,671088641:8388608,939524097:512,1207959553:32768,1476395009:8388610,1744830465:2,2013265921:33282,2281701377:32770,2550136833:8389122,2818572289:514,3087007745:8421888,3355443201:8389120,3623878657:0,3892314113:33280,4160749569:8421378},{0:1074282512,16777216:16384,33554432:524288,50331648:1074266128,67108864:1073741840,83886080:1074282496,100663296:1073758208,117440512:16,134217728:540672,150994944:1073758224,167772160:1073741824,184549376:540688,201326592:524304,218103808:0,234881024:16400,251658240:1074266112,8388608:1073758208,25165824:540688,41943040:16,58720256:1073758224,75497472:1074282512,92274688:1073741824,109051904:524288,125829120:1074266128,142606336:524304,159383552:0,176160768:16384,192937984:1074266112,209715200:1073741840,226492416:540672,243269632:1074282496,260046848:16400,268435456:0,285212672:1074266128,301989888:1073758224,318767104:1074282496,335544320:1074266112,352321536:16,369098752:540688,385875968:16384,402653184:16400,419430400:524288,436207616:524304,452984832:1073741840,469762048:540672,486539264:1073758208,503316480:1073741824,520093696:1074282512,276824064:540688,293601280:524288,310378496:1074266112,327155712:16384,343932928:1073758208,360710144:1074282512,377487360:16,394264576:1073741824,411041792:1074282496,427819008:1073741840,444596224:1073758224,461373440:524304,478150656:0,494927872:16400,511705088:1074266128,528482304:540672},{0:260,1048576:0,2097152:67109120,3145728:65796,4194304:65540,5242880:67108868,6291456:67174660,7340032:67174400,8388608:67108864,9437184:67174656,10485760:65792,11534336:67174404,12582912:67109124,13631488:65536,14680064:4,15728640:256,524288:67174656,1572864:67174404,2621440:0,3670016:67109120,4718592:67108868,5767168:65536,6815744:65540,7864320:260,8912896:4,9961472:256,11010048:67174400,12058624:65796,13107200:65792,14155776:67109124,15204352:67174660,16252928:67108864,16777216:67174656,17825792:65540,18874368:65536,19922944:67109120,20971520:256,22020096:67174660,23068672:67108868,24117248:0,25165824:67109124,26214400:67108864,27262976:4,28311552:65792,29360128:67174400,30408704:260,31457280:65796,32505856:67174404,17301504:67108864,18350080:260,19398656:67174656,20447232:0,21495808:65540,22544384:67109120,23592960:256,24641536:67174404,25690112:65536,26738688:67174660,27787264:65796,28835840:67108868,29884416:67109124,30932992:67174400,31981568:4,33030144:65792},{0:2151682048,65536:2147487808,131072:4198464,196608:2151677952,262144:0,327680:4198400,393216:2147483712,458752:4194368,524288:2147483648,589824:4194304,655360:64,720896:2147487744,786432:2151678016,851968:4160,917504:4096,983040:2151682112,32768:2147487808,98304:64,163840:2151678016,229376:2147487744,294912:4198400,360448:2151682112,425984:0,491520:2151677952,557056:4096,622592:2151682048,688128:4194304,753664:4160,819200:2147483648,884736:4194368,950272:4198464,1015808:2147483712,1048576:4194368,1114112:4198400,1179648:2147483712,1245184:0,1310720:4160,1376256:2151678016,1441792:2151682048,1507328:2147487808,1572864:2151682112,1638400:2147483648,1703936:2151677952,1769472:4198464,1835008:2147487744,1900544:4194304,1966080:64,2031616:4096,1081344:2151677952,1146880:2151682112,1212416:0,1277952:4198400,1343488:4194368,1409024:2147483648,1474560:2147487808,1540096:64,1605632:2147483712,1671168:4096,1736704:2147487744,1802240:2151678016,1867776:4160,1933312:2151682048,1998848:4194304,2064384:4198464},{0:128,4096:17039360,8192:262144,12288:536870912,16384:537133184,20480:16777344,24576:553648256,28672:262272,32768:16777216,36864:537133056,40960:536871040,45056:553910400,49152:553910272,53248:0,57344:17039488,61440:553648128,2048:17039488,6144:553648256,10240:128,14336:17039360,18432:262144,22528:537133184,26624:553910272,30720:536870912,34816:537133056,38912:0,43008:553910400,47104:16777344,51200:536871040,55296:553648128,59392:16777216,63488:262272,65536:262144,69632:128,73728:536870912,77824:553648256,81920:16777344,86016:553910272,90112:537133184,94208:16777216,98304:553910400,102400:553648128,106496:17039360,110592:537133056,114688:262272,118784:536871040,122880:0,126976:17039488,67584:553648256,71680:16777216,75776:17039360,79872:537133184,83968:536870912,88064:17039488,92160:128,96256:553910272,100352:262272,104448:553910400,108544:0,112640:553648128,116736:16777344,120832:262144,124928:537133056,129024:536871040},{0:268435464,256:8192,512:270532608,768:270540808,1024:268443648,1280:2097152,1536:2097160,1792:268435456,2048:0,2304:268443656,2560:2105344,2816:8,3072:270532616,3328:2105352,3584:8200,3840:270540800,128:270532608,384:270540808,640:8,896:2097152,1152:2105352,1408:268435464,1664:268443648,1920:8200,2176:2097160,2432:8192,2688:268443656,2944:270532616,3200:0,3456:270540800,3712:2105344,3968:268435456,4096:268443648,4352:270532616,4608:270540808,4864:8200,5120:2097152,5376:268435456,5632:268435464,5888:2105344,6144:2105352,6400:0,6656:8,6912:270532608,7168:8192,7424:268443656,7680:270540800,7936:2097160,4224:8,4480:2105344,4736:2097152,4992:268435464,5248:268443648,5504:8200,5760:270540808,6016:270532608,6272:270540800,6528:270532616,6784:8192,7040:2105352,7296:2097160,7552:0,7808:268435456,8064:268443656},{0:1048576,16:33555457,32:1024,48:1049601,64:34604033,80:0,96:1,112:34603009,128:33555456,144:1048577,160:33554433,176:34604032,192:34603008,208:1025,224:1049600,240:33554432,8:34603009,24:0,40:33555457,56:34604032,72:1048576,88:33554433,104:33554432,120:1025,136:1049601,152:33555456,168:34603008,184:1048577,200:1024,216:34604033,232:1,248:1049600,256:33554432,272:1048576,288:33555457,304:34603009,320:1048577,336:33555456,352:34604032,368:1049601,384:1025,400:34604033,416:1049600,432:1,448:0,464:34603008,480:33554433,496:1024,264:1049600,280:33555457,296:34603009,312:1,328:33554432,344:1048576,360:1025,376:34604032,392:33554433,408:34603008,424:0,440:34604033,456:1049601,472:1024,488:33555456,504:1048577},{0:134219808,1:131072,2:134217728,3:32,4:131104,5:134350880,6:134350848,7:2048,8:134348800,9:134219776,10:133120,11:134348832,12:2080,13:0,14:134217760,15:133152,2147483648:2048,2147483649:134350880,2147483650:134219808,2147483651:134217728,2147483652:134348800,2147483653:133120,2147483654:133152,2147483655:32,2147483656:134217760,2147483657:2080,2147483658:131104,2147483659:134350848,2147483660:0,2147483661:134348832,2147483662:134219776,2147483663:131072,16:133152,17:134350848,18:32,19:2048,20:134219776,21:134217760,22:134348832,23:131072,24:0,25:131104,26:134348800,27:134219808,28:134350880,29:133120,30:2080,31:134217728,2147483664:131072,2147483665:2048,2147483666:134348832,2147483667:133152,2147483668:32,2147483669:134348800,2147483670:134217728,2147483671:134219808,2147483672:134350880,2147483673:134217760,2147483674:134219776,2147483675:0,2147483676:133120,2147483677:2080,2147483678:131104,2147483679:134350848}],p=[4160749569,528482304,33030144,2064384,129024,8064,504,2147483679],u=o.DES=r.extend({_doReset:function(){for(var t=this._key.words,e=[],i=0;56>i;i++){var r=s[i]-1;e[i]=t[r>>>5]>>>31-r%32&1}for(t=this._subKeys=[],r=0;16>r;r++){for(var n=t[r]=[],o=c[r],i=0;24>i;i++)n[i/6|0]|=e[(a[i]-1+o)%28]<<31-i%6,n[4+(i/6|0)]|=e[28+(a[i+24]-1+o)%28]<<31-i%6;for(n[0]=n[0]<<1|n[0]>>>31,i=1;7>i;i++)n[i]>>>=4*(i-1)+3;n[7]=n[7]<<5|n[7]>>>27}for(e=this._invSubKeys=[],i=0;16>i;i++)e[i]=t[15-i]},encryptBlock:function(t,e){this._doCryptBlock(t,e,this._subKeys)},decryptBlock:function(t,e){this._doCryptBlock(t,e,this._invSubKeys)},_doCryptBlock:function(i,r,n){var o=this;this._lBlock=i[r],this._rBlock=i[r+1],t.call(this,4,252645135),t.call(this,16,65535),e.call(this,2,858993459),e.call(this,8,16711935),t.call(this,1,1431655765);for(var s=0;16>s;s++){for(var a=n[s],c=this._lBlock,u=this._rBlock,l=0,f=0;8>f;f++)l|=h[f][((u^a[f])&p[f])>>>0];o._lBlock=u,o._rBlock=c^l}n=this._lBlock,this._lBlock=this._rBlock,this._rBlock=n,t.call(this,1,1431655765),e.call(this,8,16711935),e.call(this,2,858993459),t.call(this,16,65535),t.call(this,4,252645135),i[r]=this._lBlock,i[r+1]=this._rBlock},keySize:2,ivSize:2,blockSize:2});i.DES=r._createHelper(u),o=o.TripleDES=r.extend({_doReset:function(){var t=this._key.words;this._des1=u.createEncryptor(n.create(t.slice(0,2))),this._des2=u.createEncryptor(n.create(t.slice(2,4))),this._des3=u.createEncryptor(n.create(t.slice(4,6)))},encryptBlock:function(t,e){this._des1.encryptBlock(t,e),this._des2.decryptBlock(t,e),this._des3.encryptBlock(t,e)},decryptBlock:function(t,e){this._des3.decryptBlock(t,e),this._des2.encryptBlock(t,e),this._des1.decryptBlock(t,e)},keySize:6,ivSize:2,blockSize:2}),i.TripleDES=r._createHelper(o)}(),function(){var t=CryptoJS,e=t.lib.WordArray;t.enc.Base64={stringify:function(t){var e=t.words,i=t.sigBytes,r=this._map;t.clamp(),t=[];for(var n=0;n<i;n+=3)for(var o=(e[n>>>2]>>>24-n%4*8&255)<<16|(e[n+1>>>2]>>>24-(n+1)%4*8&255)<<8|e[n+2>>>2]>>>24-(n+2)%4*8&255,s=0;4>s&&n+.75*s<i;s++)t.push(r.charAt(o>>>6*(3-s)&63));if(e=r.charAt(64))for(;t.length%4;)t.push(e);return t.join("")},parse:function(t){var i=t.length,r=this._map,n=r.charAt(64);n&&(n=t.indexOf(n),-1!=n&&(i=n));for(var n=[],o=0,s=0;s<i;s++)if(s%4){var a=r.indexOf(t.charAt(s-1))<<s%4*2,c=r.indexOf(t.charAt(s))>>>6-s%4*2;n[o>>>2]|=(a|c)<<24-o%4*8,o++}return e.create(n,o)},_map:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="}}();var dbits$1,canary$1=0xdeadbeefcafe,j_lm$1=15715070==(16777215&canary$1);j_lm$1&&"Microsoft Internet Explorer"==navigator.appName?(BigInteger$1.prototype.am=am2$1,dbits$1=30):j_lm$1&&"Netscape"!=navigator.appName?(BigInteger$1.prototype.am=am1$1,dbits$1=26):(BigInteger$1.prototype.am=am3$1,dbits$1=28),BigInteger$1.prototype.DB=dbits$1,BigInteger$1.prototype.DM=(1<<dbits$1)-1,BigInteger$1.prototype.DV=1<<dbits$1;var BI_FP$1=52;BigInteger$1.prototype.FV=Math.pow(2,BI_FP$1),BigInteger$1.prototype.F1=BI_FP$1-dbits$1,BigInteger$1.prototype.F2=2*dbits$1-BI_FP$1;var BI_RM$1="0123456789abcdefghijklmnopqrstuvwxyz",BI_RC$1=[],rr$1,vv$1;for(rr$1=48,vv$1=0;9>=vv$1;++vv$1)BI_RC$1[rr$1++]=vv$1;for(rr$1=97,vv$1=10;36>vv$1;++vv$1)BI_RC$1[rr$1++]=vv$1;for(rr$1=65,vv$1=10;36>vv$1;++vv$1)BI_RC$1[rr$1++]=vv$1;Classic$1.prototype.convert=cConvert$1,Classic$1.prototype.revert=cRevert$1,Classic$1.prototype.reduce=cReduce$1,Classic$1.prototype.mulTo=cMulTo$1,Classic$1.prototype.sqrTo=cSqrTo$1,Montgomery$1.prototype.convert=montConvert$1,Montgomery$1.prototype.revert=montRevert$1,Montgomery$1.prototype.reduce=montReduce$1,Montgomery$1.prototype.mulTo=montMulTo$1,Montgomery$1.prototype.sqrTo=montSqrTo$1,BigInteger$1.prototype.copyTo=bnpCopyTo$1,BigInteger$1.prototype.fromInt=bnpFromInt$1,BigInteger$1.prototype.fromString=bnpFromString$1,BigInteger$1.prototype.clamp=bnpClamp$1,BigInteger$1.prototype.dlShiftTo=bnpDLShiftTo$1,BigInteger$1.prototype.drShiftTo=bnpDRShiftTo$1,BigInteger$1.prototype.lShiftTo=bnpLShiftTo$1,BigInteger$1.prototype.rShiftTo=bnpRShiftTo$1,BigInteger$1.prototype.subTo=bnpSubTo$1,BigInteger$1.prototype.multiplyTo=bnpMultiplyTo$1,BigInteger$1.prototype.squareTo=bnpSquareTo$1,BigInteger$1.prototype.divRemTo=bnpDivRemTo$1,BigInteger$1.prototype.invDigit=bnpInvDigit$1,BigInteger$1.prototype.isEven=bnpIsEven$1,BigInteger$1.prototype.exp=bnpExp$1,BigInteger$1.prototype.toString=bnToString$1,BigInteger$1.prototype.negate=bnNegate$1,BigInteger$1.prototype.abs=bnAbs$1,BigInteger$1.prototype.compareTo=bnCompareTo$1,BigInteger$1.prototype.bitLength=bnBitLength$1,BigInteger$1.prototype.mod=bnMod$1,BigInteger$1.prototype.modPowInt=bnModPowInt$1,BigInteger$1.ZERO=nbv$1(0),BigInteger$1.ONE=nbv$1(1),NullExp.prototype.convert=nNop,NullExp.prototype.revert=nNop,NullExp.prototype.mulTo=nMulTo,NullExp.prototype.sqrTo=nSqrTo,Barrett.prototype.convert=barrettConvert,Barrett.prototype.revert=barrettRevert,Barrett.prototype.reduce=barrettReduce,Barrett.prototype.mulTo=barrettMulTo,Barrett.prototype.sqrTo=barrettSqrTo;var lowprimes=[2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97,101,103,107,109,113,127,131,137,139,149,151,157,163,167,173,179,181,191,193,197,199,211,223,227,229,233,239,241,251,257,263,269,271,277,281,283,293,307,311,313,317,331,337,347,349,353,359,367,373,379,383,389,397,401,409,419,421,431,433,439,443,449,457,461,463,467,479,487,491,499,503,509,521,523,541,547,557,563,569,571,577,587,593,599,601,607,613,617,619,631,641,643,647,653,659,661,673,677,683,691,701,709,719,727,733,739,743,751,757,761,769,773,787,797,809,811,821,823,827,829,839,853,857,859,863,877,881,883,887,907,911,919,929,937,941,947,953,967,971,977,983,991,997],lplim=67108864/lowprimes[lowprimes.length-1];BigInteger$1.prototype.chunkSize=bnpChunkSize,BigInteger$1.prototype.toRadix=bnpToRadix,BigInteger$1.prototype.fromRadix=bnpFromRadix,BigInteger$1.prototype.fromNumber=bnpFromNumber,BigInteger$1.prototype.bitwiseTo=bnpBitwiseTo,BigInteger$1.prototype.changeBit=bnpChangeBit,BigInteger$1.prototype.addTo=bnpAddTo,BigInteger$1.prototype.dMultiply=bnpDMultiply,BigInteger$1.prototype.dAddOffset=bnpDAddOffset,BigInteger$1.prototype.multiplyLowerTo=bnpMultiplyLowerTo,BigInteger$1.prototype.multiplyUpperTo=bnpMultiplyUpperTo,BigInteger$1.prototype.modInt=bnpModInt,BigInteger$1.prototype.millerRabin=bnpMillerRabin,BigInteger$1.prototype.clone=bnClone,BigInteger$1.prototype.intValue=bnIntValue,BigInteger$1.prototype.byteValue=bnByteValue,BigInteger$1.prototype.shortValue=bnShortValue,BigInteger$1.prototype.signum=bnSigNum,BigInteger$1.prototype.toByteArray=bnToByteArray,BigInteger$1.prototype.equals=bnEquals,BigInteger$1.prototype.min=bnMin,BigInteger$1.prototype.max=bnMax,BigInteger$1.prototype.and=bnAnd,
BigInteger$1.prototype.or=bnOr,BigInteger$1.prototype.xor=bnXor,BigInteger$1.prototype.andNot=bnAndNot,BigInteger$1.prototype.not=bnNot,BigInteger$1.prototype.shiftLeft=bnShiftLeft,BigInteger$1.prototype.shiftRight=bnShiftRight,BigInteger$1.prototype.getLowestSetBit=bnGetLowestSetBit,BigInteger$1.prototype.bitCount=bnBitCount,BigInteger$1.prototype.testBit=bnTestBit,BigInteger$1.prototype.setBit=bnSetBit,BigInteger$1.prototype.clearBit=bnClearBit,BigInteger$1.prototype.flipBit=bnFlipBit,BigInteger$1.prototype.add=bnAdd,BigInteger$1.prototype.subtract=bnSubtract,BigInteger$1.prototype.multiply=bnMultiply,BigInteger$1.prototype.divide=bnDivide,BigInteger$1.prototype.remainder=bnRemainder,BigInteger$1.prototype.divideAndRemainder=bnDivideAndRemainder,BigInteger$1.prototype.modPow=bnModPow,BigInteger$1.prototype.modInverse=bnModInverse,BigInteger$1.prototype.pow=bnPow,BigInteger$1.prototype.gcd=bnGCD,BigInteger$1.prototype.isProbablePrime=bnIsProbablePrime,BigInteger$1.prototype.square=bnSquare,Arcfour$1.prototype.init=ARC4init$1,Arcfour$1.prototype.next=ARC4next$1;var rng_psize$1=256,rng_state$1,rng_pool$1,rng_pptr$1;if(null==rng_pool$1){rng_pool$1=[],rng_pptr$1=0;var t$1;if("Netscape"==navigator.appName&&"5">navigator.appVersion&&window.crypto){var z=window.crypto.random(32);for(t$1=0;t$1<z.length;++t$1)rng_pool$1[rng_pptr$1++]=255&z.charCodeAt(t$1)}for(;rng_pptr$1<rng_psize$1;)t$1=Math.floor(65536*Math.random()),rng_pool$1[rng_pptr$1++]=t$1>>>8,rng_pool$1[rng_pptr$1++]=255&t$1;rng_pptr$1=0,rng_seed_time$1()}SecureRandom$1.prototype.nextBytes=rng_get_bytes$1;var KJUR={};"undefined"!=typeof KJUR.crypto&&KJUR.crypto||(KJUR.crypto={}),KJUR.crypto.Util=new function(){this.DIGESTINFOHEAD={sha1:"3021300906052b0e03021a05000414",sha224:"302d300d06096086480165030402040500041c",sha256:"3031300d060960864801650304020105000420",sha384:"3041300d060960864801650304020205000430",sha512:"3051300d060960864801650304020305000440",md2:"3020300c06082a864886f70d020205000410",md5:"3020300c06082a864886f70d020505000410",ripemd160:"3021300906052b2403020105000414"},this.DEFAULTPROVIDER={md5:"cryptojs",sha1:"cryptojs",sha224:"cryptojs",sha256:"cryptojs",sha384:"cryptojs",sha512:"cryptojs",ripemd160:"cryptojs",hmacmd5:"cryptojs",hmacsha1:"cryptojs",hmacsha224:"cryptojs",hmacsha256:"cryptojs",hmacsha384:"cryptojs",hmacsha512:"cryptojs",hmacripemd160:"cryptojs",sm3:"cryptojs",MD5withRSA:"cryptojs/jsrsa",SHA1withRSA:"cryptojs/jsrsa",SHA224withRSA:"cryptojs/jsrsa",SHA256withRSA:"cryptojs/jsrsa",SHA384withRSA:"cryptojs/jsrsa",SHA512withRSA:"cryptojs/jsrsa",RIPEMD160withRSA:"cryptojs/jsrsa",MD5withECDSA:"cryptojs/jsrsa",SHA1withECDSA:"cryptojs/jsrsa",SHA224withECDSA:"cryptojs/jsrsa",SHA256withECDSA:"cryptojs/jsrsa",SHA384withECDSA:"cryptojs/jsrsa",SHA512withECDSA:"cryptojs/jsrsa",RIPEMD160withECDSA:"cryptojs/jsrsa",SHA1withDSA:"cryptojs/jsrsa",SHA224withDSA:"cryptojs/jsrsa",SHA256withDSA:"cryptojs/jsrsa",MD5withRSAandMGF1:"cryptojs/jsrsa",SHA1withRSAandMGF1:"cryptojs/jsrsa",SHA224withRSAandMGF1:"cryptojs/jsrsa",SHA256withRSAandMGF1:"cryptojs/jsrsa",SHA384withRSAandMGF1:"cryptojs/jsrsa",SHA512withRSAandMGF1:"cryptojs/jsrsa",RIPEMD160withRSAandMGF1:"cryptojs/jsrsa"},this.CRYPTOJSMESSAGEDIGESTNAME={md5:"CryptoJS.algo.MD5",sha1:"CryptoJS.algo.SHA1",sha224:"CryptoJS.algo.SHA224",sha256:"CryptoJS.algo.SHA256",sha384:"CryptoJS.algo.SHA384",sha512:"CryptoJS.algo.SHA512",ripemd160:"CryptoJS.algo.RIPEMD160",sm3:"CryptoJS.algo.SM3"},this.getDigestInfoHex=function(t,e){if("undefined"==typeof this.DIGESTINFOHEAD[e])throw"alg not supported in Util.DIGESTINFOHEAD: "+e;return this.DIGESTINFOHEAD[e]+t},this.getPaddedDigestInfoHex=function(t,e,i){var r=this.getDigestInfoHex(t,e);if(t=i/4,r.length+22>t)throw"key is too short for SigAlg: keylen="+i+","+e;for(e="00"+r,i="",t=t-4-e.length,r=0;r<t;r+=2)i+="ff";return"0001"+i+e},this.hashString=function(t,e){return new KJUR.crypto.MessageDigest({alg:e}).digestString(t)},this.hashHex=function(t,e){return new KJUR.crypto.MessageDigest({alg:e}).digestHex(t)},this.sha1=function(t){return new KJUR.crypto.MessageDigest({alg:"sha1",prov:"cryptojs"}).digestString(t)},this.sha256=function(t){return new KJUR.crypto.MessageDigest({alg:"sha256",prov:"cryptojs"}).digestString(t)},this.sha256Hex=function(t){return new KJUR.crypto.MessageDigest({alg:"sha256",prov:"cryptojs"}).digestHex(t)},this.sha512=function(t){return new KJUR.crypto.MessageDigest({alg:"sha512",prov:"cryptojs"}).digestString(t)},this.sha512Hex=function(t){return new KJUR.crypto.MessageDigest({alg:"sha512",prov:"cryptojs"}).digestHex(t)},this.md5=function(t){return new KJUR.crypto.MessageDigest({alg:"md5",prov:"cryptojs"}).digestString(t)},this.ripemd160=function(t){return new KJUR.crypto.MessageDigest({alg:"ripemd160",prov:"cryptojs"}).digestString(t)},this.getCryptoJSMDByName=function(t){}},KJUR.crypto.MessageDigest=function(a){this.setAlgAndProvider=function(a,c){if(null!=a&&void 0===c&&(c=KJUR.crypto.Util.DEFAULTPROVIDER[a]),-1!=":md5:sha1:sha224:sha256:sha384:sha512:ripemd160:sm3:".indexOf(a)&&"cryptojs"==c){try{this.md=eval(KJUR.crypto.Util.CRYPTOJSMESSAGEDIGESTNAME[a]).create()}catch(t){throw"setAlgAndProvider hash alg set fail alg="+a+"/"+t}this.updateString=function(t){this.md.update(t)},this.updateHex=function(t){t=CryptoJS.enc.Hex.parse(t),this.md.update(t)},this.digest=function(){return this.md.finalize().toString(CryptoJS.enc.Hex)},this.digestString=function(t){return this.updateString(t),this.digest()},this.digestHex=function(t){return this.updateHex(t),this.digest()}}if(-1!=":sha256:".indexOf(a)&&"sjcl"==c){try{this.md=new sjcl.hash.sha256}catch(t){throw"setAlgAndProvider hash alg set fail alg="+a+"/"+t}this.updateString=function(t){this.md.update(t)},this.updateHex=function(t){t=sjcl.codec.hex.toBits(t),this.md.update(t)},this.digest=function(){var t=this.md.finalize();return sjcl.codec.hex.fromBits(t)},this.digestString=function(t){return this.updateString(t),this.digest()},this.digestHex=function(t){return this.updateHex(t),this.digest()}}},this.updateString=function(t){throw"updateString(str) not supported for this alg/prov: "+this.algName+"/"+this.provName},this.updateHex=function(t){throw"updateHex(hex) not supported for this alg/prov: "+this.algName+"/"+this.provName},this.digest=function(){throw"digest() not supported for this alg/prov: "+this.algName+"/"+this.provName},this.digestString=function(t){throw"digestString(str) not supported for this alg/prov: "+this.algName+"/"+this.provName},this.digestHex=function(t){throw"digestHex(hex) not supported for this alg/prov: "+this.algName+"/"+this.provName},void 0!==a&&void 0!==a.alg&&(this.algName=a.alg,void 0===a.prov&&(this.provName=KJUR.crypto.Util.DEFAULTPROVIDER[this.algName]),this.setAlgAndProvider(this.algName,this.provName))},KJUR.crypto.Mac=function(a){this.setAlgAndProvider=function(a,c){if(null==a&&(a="hmacsha1"),a=a.toLowerCase(),"hmac"!=a.substr(0,4))throw"setAlgAndProvider unsupported HMAC alg: "+a;void 0===c&&(c=KJUR.crypto.Util.DEFAULTPROVIDER[a]),this.algProv=a+"/"+c;var d=a.substr(4);if(-1!=":md5:sha1:sha224:sha256:sha384:sha512:ripemd160:".indexOf(d)&&"cryptojs"==c){try{var e=eval(KJUR.crypto.Util.CRYPTOJSMESSAGEDIGESTNAME[d]);this.mac=CryptoJS.algo.HMAC.create(e,this.pass)}catch(t){throw"setAlgAndProvider hash alg set fail hashAlg="+d+"/"+t}this.updateString=function(t){this.mac.update(t)},this.updateHex=function(t){t=CryptoJS.enc.Hex.parse(t),this.mac.update(t)},this.doFinal=function(){return this.mac.finalize().toString(CryptoJS.enc.Hex)},this.doFinalString=function(t){return this.updateString(t),this.doFinal()},this.doFinalHex=function(t){return this.updateHex(t),this.doFinal()}}},this.updateString=function(t){throw"updateString(str) not supported for this alg/prov: "+this.algProv},this.updateHex=function(t){throw"updateHex(hex) not supported for this alg/prov: "+this.algProv},this.doFinal=function(){throw"digest() not supported for this alg/prov: "+this.algProv},this.doFinalString=function(t){throw"digestString(str) not supported for this alg/prov: "+this.algProv},this.doFinalHex=function(t){throw"digestHex(hex) not supported for this alg/prov: "+this.algProv},void 0!==a&&(void 0!==a.pass&&(this.pass=a.pass),void 0!==a.alg&&(this.algName=a.alg,void 0===a.prov&&(this.provName=KJUR.crypto.Util.DEFAULTPROVIDER[this.algName]),this.setAlgAndProvider(this.algName,this.provName)))},KJUR.crypto.Signature=function(t){var e=null;if(this._setAlgNames=function(){this.algName.match(/^(.+)with(.+)$/)&&(this.mdAlgName=RegExp.$1.toLowerCase(),this.pubkeyAlgName=RegExp.$2.toLowerCase())},this._zeroPaddingOfSignature=function(t,e){for(var i="",r=e/4-t.length,n=0;n<r;n++)i+="0";return i+t},this.setAlgAndProvider=function(t,e){if(this._setAlgNames(),"cryptojs/jsrsa"!=e)throw"provider not supported: "+e;if(-1!=":md5:sha1:sha224:sha256:sha384:sha512:ripemd160:sm3:".indexOf(this.mdAlgName)){try{this.md=new KJUR.crypto.MessageDigest({alg:this.mdAlgName})}catch(t){throw"setAlgAndProvider hash alg set fail alg="+this.mdAlgName+"/"+t}this.init=function(t,e){var i=null;try{i=void 0===e?KEYUTIL.getKey(t):KEYUTIL.getKey(t,e)}catch(t){throw"init failed:"+t}if(!0===i.isPrivate)this.prvKey=i,this.state="SIGN";else{if(!0!==i.isPublic)throw"init failed.:"+i;this.pubKey=i,this.state="VERIFY"}},this.initSign=function(t){"string"==typeof t.ecprvhex&&"string"==typeof t.eccurvename?(this.ecprvhex=t.ecprvhex,this.eccurvename=t.eccurvename):this.prvKey=t,this.state="SIGN"},this.initVerifyByPublicKey=function(t){"string"==typeof t.ecpubhex&&"string"==typeof t.eccurvename?(this.ecpubhex=t.ecpubhex,this.eccurvename=t.eccurvename):t instanceof KJUR.crypto.ECDSA?this.pubKey=t:t instanceof RSAKey&&(this.pubKey=t),this.state="VERIFY"},this.initVerifyByCertificatePEM=function(t){var e=new X509;e.readCertPEM(t),this.pubKey=e.subjectPublicKeyRSA,this.state="VERIFY"},this.updateString=function(t){this.md.updateString(t)},this.updateHex=function(t){this.md.updateHex(t)},this.sign=function(){if("sm2"!=this.eccurvename&&(this.sHashHex=this.md.digest()),"undefined"!=typeof this.ecprvhex&&"undefined"!=typeof this.eccurvename){if("sm2"==this.eccurvename){var t=new KJUR.crypto.SM3withSM2({curve:this.eccurvename}),e=t.ecparams.G,i=e.multiply(new BigInteger$1(this.ecprvhex,16)),r=i.getX().toBigInteger().toRadix(16)+i.getY().toBigInteger().toRadix(16),i=new SM3Digest,e=(new SM3Digest).GetZ(e,r),e=i.GetWords(i.GetHex(e).toString()),r=CryptoJS.enc.Utf8.stringify(this.md.md._data),r=CryptoJS.enc.Utf8.parse(r).toString(),r=i.GetWords(r),n=Array(i.GetDigestSize());i.BlockUpdate(e,0,e.length),i.BlockUpdate(r,0,r.length),i.DoFinal(n,0),this.sHashHex=i.GetHex(n).toString()}else t=new KJUR.crypto.ECDSA({curve:this.eccurvename});this.hSign=t.signHex(this.sHashHex,this.ecprvhex)}else if("rsaandmgf1"==this.pubkeyAlgName)this.hSign=this.prvKey.signWithMessageHashPSS(this.sHashHex,this.mdAlgName,this.pssSaltLen);else if("rsa"==this.pubkeyAlgName)this.hSign=this.prvKey.signWithMessageHash(this.sHashHex,this.mdAlgName);else if(this.prvKey instanceof KJUR.crypto.ECDSA)this.hSign=this.prvKey.signWithMessageHash(this.sHashHex);else{if(!(this.prvKey instanceof KJUR.crypto.DSA))throw"Signature: unsupported public key alg: "+this.pubkeyAlgName;this.hSign=this.prvKey.signWithMessageHash(this.sHashHex)}return this.hSign},this.signString=function(t){this.updateString(t),this.sign()},this.signHex=function(t){this.updateHex(t),this.sign()},this.verify=function(t){if("sm2"!=this.eccurvename&&(this.sHashHex=this.md.digest()),"undefined"!=typeof this.ecpubhex&&"undefined"!=typeof this.eccurvename){if("sm2"==this.eccurvename){var e=new KJUR.crypto.SM3withSM2({curve:this.eccurvename}),i=e.ecparams.G,r=this.ecpubhex.substr(2,128),n=new SM3Digest,i=(new SM3Digest).GetZ(i,r),i=n.GetWords(n.GetHex(i).toString()),r=CryptoJS.enc.Utf8.stringify(this.md.md._data),r=CryptoJS.enc.Utf8.parse(r).toString(),r=n.GetWords(r),o=Array(n.GetDigestSize());n.BlockUpdate(i,0,i.length),n.BlockUpdate(r,0,r.length),n.DoFinal(o,0),this.sHashHex=n.GetHex(o).toString()}else e=new KJUR.crypto.ECDSA({curve:this.eccurvename});return e.verifyHex(this.sHashHex,t,this.ecpubhex)}if("rsaandmgf1"==this.pubkeyAlgName)return this.pubKey.verifyWithMessageHashPSS(this.sHashHex,t,this.mdAlgName,this.pssSaltLen);if("rsa"==this.pubkeyAlgName||this.pubKey instanceof KJUR.crypto.ECDSA||this.pubKey instanceof KJUR.crypto.DSA)return this.pubKey.verifyWithMessageHash(this.sHashHex,t);throw"Signature: unsupported public key alg: "+this.pubkeyAlgName}}},this.init=function(t,e){throw"init(key, pass) not supported for this alg:prov="+this.algProvName},this.initVerifyByPublicKey=function(t){throw"initVerifyByPublicKey(rsaPubKeyy) not supported for this alg:prov="+this.algProvName},this.initVerifyByCertificatePEM=function(t){throw"initVerifyByCertificatePEM(certPEM) not supported for this alg:prov="+this.algProvName},this.initSign=function(t){throw"initSign(prvKey) not supported for this alg:prov="+this.algProvName},this.updateString=function(t){throw"updateString(str) not supported for this alg:prov="+this.algProvName},this.updateHex=function(t){throw"updateHex(hex) not supported for this alg:prov="+this.algProvName},this.sign=function(){throw"sign() not supported for this alg:prov="+this.algProvName},this.signString=function(t){throw"digestString(str) not supported for this alg:prov="+this.algProvName},this.signHex=function(t){throw"digestHex(hex) not supported for this alg:prov="+this.algProvName},this.verify=function(t){throw"verify(hSigVal) not supported for this alg:prov="+this.algProvName},this.initParams=t,void 0!==t&&(void 0!==t.alg&&(this.algName=t.alg,this.provName=void 0===t.prov?KJUR.crypto.Util.DEFAULTPROVIDER[this.algName]:t.prov,this.algProvName=this.algName+":"+this.provName,this.setAlgAndProvider(this.algName,this.provName),this._setAlgNames()),void 0!==t.psssaltlen&&(this.pssSaltLen=t.psssaltlen),void 0!==t.prvkeypem)){if(void 0!==t.prvkeypas)throw"both prvkeypem and prvkeypas parameters not supported";try{e=new RSAKey,e.readPrivateKeyFromPEMString(t.prvkeypem),this.initSign(e)}catch(t){throw"fatal error to load pem private key: "+t}}},KJUR.crypto.OID=new function(){this.oidhex2name={"2a864886f70d010101":"rsaEncryption","2a8648ce3d0201":"ecPublicKey","2a8648ce380401":"dsa","2a8648ce3d030107":"secp256r1","2b8104001f":"secp192k1","2b81040021":"secp224r1","2b8104000a":"secp256k1","2b81040023":"secp521r1","2b81040022":"secp384r1","2a8648ce380403":"SHA1withDSA","608648016503040301":"SHA224withDSA","608648016503040302":"SHA256withDSA"}},ECFieldElementFp.prototype.equals=feFpEquals,ECFieldElementFp.prototype.toBigInteger=feFpToBigInteger,ECFieldElementFp.prototype.negate=feFpNegate,ECFieldElementFp.prototype.add=feFpAdd,ECFieldElementFp.prototype.subtract=feFpSubtract,ECFieldElementFp.prototype.multiply=feFpMultiply,ECFieldElementFp.prototype.square=feFpSquare,ECFieldElementFp.prototype.divide=feFpDivide,ECPointFp.prototype.getX=pointFpGetX,ECPointFp.prototype.getY=pointFpGetY,ECPointFp.prototype.equals=pointFpEquals,ECPointFp.prototype.isInfinity=pointFpIsInfinity,ECPointFp.prototype.negate=pointFpNegate,ECPointFp.prototype.add=pointFpAdd,ECPointFp.prototype.twice=pointFpTwice,ECPointFp.prototype.multiply=pointFpMultiply,ECPointFp.prototype.multiplyTwo=pointFpMultiplyTwo,ECCurveFp.prototype.getQ=curveFpGetQ,ECCurveFp.prototype.getA=curveFpGetA,ECCurveFp.prototype.getB=curveFpGetB,ECCurveFp.prototype.equals=curveFpEquals,ECCurveFp.prototype.getInfinity=curveFpGetInfinity,ECCurveFp.prototype.fromBigInteger=curveFpFromBigInteger,ECCurveFp.prototype.decodePointHex=curveFpDecodePointHex,ECFieldElementFp.prototype.getByteLength=function(){return Math.floor((this.toBigInteger().bitLength()+7)/8)},ECPointFp.prototype.getEncoded=function(t){var e=function(t,e){var i=t.toByteArrayUnsigned();if(e<i.length)i=i.slice(i.length-e);else for(;e>i.length;)i.unshift(0);return i},i=this.getX().toBigInteger(),r=this.getY().toBigInteger(),i=e(i,32);return t?r.isEven()?i.unshift(2):i.unshift(3):(i.unshift(4),i=i.concat(e(r,32))),i},ECPointFp.decodeFrom=function(t,e){var i=e.length-1,r=e.slice(1,1+i/2),i=e.slice(1+i/2,1+i);return r.unshift(0),i.unshift(0),r=new BigInteger$1(r),i=new BigInteger$1(i),new ECPointFp(t,t.fromBigInteger(r),t.fromBigInteger(i))},ECPointFp.decodeFromHex=function(t,e){e.substr(0,2);var i=e.length-2,r=e.substr(2,i/2),i=e.substr(2+i/2,i/2),r=new BigInteger$1(r,16),i=new BigInteger$1(i,16);return new ECPointFp(t,t.fromBigInteger(r),t.fromBigInteger(i))},ECPointFp.prototype.add2D=function(t){if(this.isInfinity())return t;if(t.isInfinity())return this;if(this.x.equals(t.x))return this.y.equals(t.y)?this.twice():this.curve.getInfinity();var e=t.x.subtract(this.x),e=t.y.subtract(this.y).divide(e);return t=e.square().subtract(this.x).subtract(t.x),e=e.multiply(this.x.subtract(t)).subtract(this.y),new ECPointFp(this.curve,t,e)},ECPointFp.prototype.twice2D=function(){if(this.isInfinity())return this;if(0==this.y.toBigInteger().signum())return this.curve.getInfinity();var t=this.curve.fromBigInteger(BigInteger$1.valueOf(2)),e=this.curve.fromBigInteger(BigInteger$1.valueOf(3)),e=this.x.square().multiply(e).add(this.curve.a).divide(this.y.multiply(t)),t=e.square().subtract(this.x.multiply(t)),e=e.multiply(this.x.subtract(t)).subtract(this.y);return new ECPointFp(this.curve,t,e)},ECPointFp.prototype.multiply2D=function(t){var e=this;if(this.isInfinity())return this;if(0==t.signum())return this.curve.getInfinity();var i,r=t.multiply(new BigInteger$1("3")),n=this.negate(),o=this;for(i=r.bitLength()-2;0<i;--i){var o=o.twice(),s=r.testBit(i),a=t.testBit(i);s!=a&&(o=o.add2D(s?e:n))}return o},ECPointFp.prototype.isOnCurve=function(){var t=this.getX().toBigInteger(),e=this.getY().toBigInteger(),i=this.curve.getA().toBigInteger(),r=this.curve.getB().toBigInteger(),n=this.curve.getQ(),e=e.multiply(e).mod(n),t=t.multiply(t).multiply(t).add(i.multiply(t)).add(r).mod(n);return e.equals(t)},ECPointFp.prototype.toString=function(){return"("+this.getX().toBigInteger().toString()+","+this.getY().toBigInteger().toString()+")"},ECPointFp.prototype.validate=function(){var t=this.curve.getQ();if(this.isInfinity())throw Error("Point is at infinity.");var e=this.getX().toBigInteger(),i=this.getY().toBigInteger();if(0>e.compareTo(BigInteger$1.ONE)||0<e.compareTo(t.subtract(BigInteger$1.ONE)))throw Error("x coordinate out of bounds");if(0>i.compareTo(BigInteger$1.ONE)||0<i.compareTo(t.subtract(BigInteger$1.ONE)))throw Error("y coordinate out of bounds");if(!this.isOnCurve())throw Error("Point is not on the curve.");if(this.multiply(t).isInfinity())throw Error("Point is not a scalar multiple of G.");return!0},"undefined"!=typeof KJUR&&KJUR||(KJUR={}),"undefined"!=typeof KJUR.crypto&&KJUR.crypto||(KJUR.crypto={}),KJUR.crypto.ECDSA=function(t){var e=new SecureRandom$1;this.type="EC",this.getBigRandom=function(t){return new BigInteger$1(t.bitLength(),e).mod(t.subtract(BigInteger$1.ONE)).add(BigInteger$1.ONE)},this.setNamedCurve=function(t){this.ecparams=KJUR.crypto.ECParameterDB.getByName(t),this.pubKeyHex=this.prvKeyHex=null,this.curveName=t},this.setPrivateKeyHex=function(t){this.isPrivate=!0,this.prvKeyHex=t},this.setPublicKeyHex=function(t){this.isPublic=!0,this.pubKeyHex=t},this.generateKeyPairHex=function(){var t=this.getBigRandom(this.ecparams.n),e=this.ecparams.G.multiply(t),i=e.getX().toBigInteger(),e=e.getY().toBigInteger(),r=this.ecparams.keylen/4,t=("0000000000"+t.toString(16)).slice(-r),i=("0000000000"+i.toString(16)).slice(-r),e=("0000000000"+e.toString(16)).slice(-r),i="04"+i+e;return this.setPrivateKeyHex(t),this.setPublicKeyHex(i),{ecprvhex:t,ecpubhex:i}},this.signWithMessageHash=function(t){return this.signHex(t,this.prvKeyHex)},this.signHex=function(t,e){var i=this,r=new BigInteger$1(e,16),n=this.ecparams.n,o=new BigInteger$1(t,16);do var s=i.getBigRandom(n),a=i.ecparams.G.multiply(s).getX().toBigInteger().mod(n);while(0>=a.compareTo(BigInteger$1.ZERO));return r=s.modInverse(n).multiply(o.add(r.multiply(a))).mod(n),KJUR.crypto.ECDSA.biRSSigToASN1Sig(a,r)},this.sign=function(t,e){var i=this,r=this.ecparams.n,n=BigInteger$1.fromByteArrayUnsigned(t);do var o=i.getBigRandom(r),s=i.ecparams.G.multiply(o).getX().toBigInteger().mod(r);while(0>=s.compareTo(BigInteger$1.ZERO));return r=o.modInverse(r).multiply(n.add(e.multiply(s))).mod(r),this.serializeSig(s,r)},this.verifyWithMessageHash=function(t,e){return this.verifyHex(t,e,this.pubKeyHex)},this.verifyHex=function(t,e,i){var r;return r=KJUR.crypto.ECDSA.parseSigHex(e),e=r.r,r=r.s,i=ECPointFp.decodeFromHex(this.ecparams.curve,i),t=new BigInteger$1(t,16),this.verifyRaw(t,e,r,i)},this.verify=function(t,e,i){var r;if(Bitcoin.Util.isArray(e))e=this.parseSig(e),r=e.r,e=e.s;else{if("object"!=typeof e||!e.r||!e.s)throw"Invalid value for signature";r=e.r,e=e.s}if(!(i instanceof ECPointFp)){if(!Bitcoin.Util.isArray(i))throw"Invalid format for pubkey value, must be byte array or ECPointFp";i=ECPointFp.decodeFrom(this.ecparams.curve,i)}return t=BigInteger$1.fromByteArrayUnsigned(t),this.verifyRaw(t,r,e,i)},this.verifyRaw=function(t,e,i,r){var n=this.ecparams.n,o=this.ecparams.G;return!(0>e.compareTo(BigInteger$1.ONE)||0<=e.compareTo(n)||0>i.compareTo(BigInteger$1.ONE)||0<=i.compareTo(n))&&(i=i.modInverse(n),t=t.multiply(i).mod(n),i=e.multiply(i).mod(n),o.multiply(t).add(r.multiply(i)).getX().toBigInteger().mod(n).equals(e))},this.serializeSig=function(t,e){var i=t.toByteArraySigned(),r=e.toByteArraySigned(),n=[];return n.push(2),n.push(i.length),n=n.concat(i),n.push(2),n.push(r.length),n=n.concat(r),n.unshift(n.length),n.unshift(48),n},this.parseSig=function(t){var e;if(48!=t[0])throw Error("Signature not a valid DERSequence");if(e=2,2!=t[e])throw Error("First element in signature must be a DERInteger");var i=t.slice(e+2,e+2+t[e+1]);if(e+=2+t[e+1],2!=t[e])throw Error("Second element in signature must be a DERInteger");return t=t.slice(e+2,e+2+t[e+1]),i=BigInteger$1.fromByteArrayUnsigned(i),t=BigInteger$1.fromByteArrayUnsigned(t),{r:i,s:t}},this.parseSigCompact=function(t){if(65!==t.length)throw"Signature has the wrong length";var e=t[0]-27;if(0>e||7<e)throw"Invalid signature type";var i=this.ecparams.n,r=BigInteger$1.fromByteArrayUnsigned(t.slice(1,33)).mod(i);return t=BigInteger$1.fromByteArrayUnsigned(t.slice(33,65)).mod(i),{r:r,s:t,i:e}},void 0!==t&&void 0!==t.curve&&(this.curveName=t.curve),void 0===this.curveName&&(this.curveName="secp256r1"),this.setNamedCurve(this.curveName),void 0!==t&&(void 0!==t.prv&&this.setPrivateKeyHex(t.prv),void 0!==t.pub&&this.setPublicKeyHex(t.pub))},KJUR.crypto.ECDSA.parseSigHex=function(t){var e=KJUR.crypto.ECDSA.parseSigHexInHexRS(t);return t=new BigInteger$1(e.r,16),e=new BigInteger$1(e.s,16),{r:t,s:e}},KJUR.crypto.ECDSA.parseSigHexInHexRS=function(t){if("30"!=t.substr(0,2))throw"signature is not a ASN.1 sequence";var e=ASN1HEX.getPosArrayOfChildren_AtObj(t,0);if(2!=e.length)throw"number of signature ASN.1 sequence elements seem wrong";var i=e[0],e=e[1];if("02"!=t.substr(i,2))throw"1st item of sequene of signature is not ASN.1 integer";if("02"!=t.substr(e,2))throw"2nd item of sequene of signature is not ASN.1 integer";return i=ASN1HEX.getHexOfV_AtObj(t,i),t=ASN1HEX.getHexOfV_AtObj(t,e),{r:i,s:t}},KJUR.crypto.ECDSA.asn1SigToConcatSig=function(t){var e=KJUR.crypto.ECDSA.parseSigHexInHexRS(t);if(t=e.r,e=e.s,"00"==t.substr(0,2)&&8==t.length/2*8%128&&(t=t.substr(2)),"00"==e.substr(0,2)&&8==e.length/2*8%128&&(e=e.substr(2)),0!=t.length/2*8%128)throw"unknown ECDSA sig r length error";if(0!=e.length/2*8%128)throw"unknown ECDSA sig s length error";return t+e},KJUR.crypto.ECDSA.concatSigToASN1Sig=function(t){if(0!=t.length/2*8%128)throw"unknown ECDSA concatinated r-s sig  length error";var e=t.substr(0,t.length/2);return t=t.substr(t.length/2),KJUR.crypto.ECDSA.hexRSSigToASN1Sig(e,t)},KJUR.crypto.ECDSA.hexRSSigToASN1Sig=function(t,e){var i=new BigInteger$1(t,16),r=new BigInteger$1(e,16);return KJUR.crypto.ECDSA.biRSSigToASN1Sig(i,r)},KJUR.crypto.ECDSA.biRSSigToASN1Sig=function(t,e){var i=new KJUR.asn1.DERInteger({bigint:t}),r=new KJUR.asn1.DERInteger({bigint:e});return new KJUR.asn1.DERSequence({array:[i,r]}).getEncodedHex()},function(){var t=CryptoJS,e=t.lib,i=e.WordArray,r=e.Hasher,n=[],e=t.algo.SM3=r.extend({_doReset:function(){this._hash=new i.init([1937774191,1226093241,388252375,3666478592,2842636476,372324522,3817729613,2969243214])},_doProcessBlock:function(t,e){for(var i=this._hash.words,r=i[0],o=i[1],s=i[2],a=i[3],c=i[4],h=0;80>h;h++){if(16>h)n[h]=0|t[e+h];else{var p=n[h-3]^n[h-8]^n[h-14]^n[h-16];n[h]=p<<1|p>>>31}p=(r<<5|r>>>27)+c+n[h],p=20>h?p+((o&s|~o&a)+1518500249):40>h?p+((o^s^a)+1859775393):60>h?p+((o&s|o&a|s&a)-1894007588):p+((o^s^a)-899497514),c=a,a=s,s=o<<30|o>>>2,o=r,r=p}i[0]=i[0]+r|0,i[1]=i[1]+o|0,i[2]=i[2]+s|0,i[3]=i[3]+a|0,i[4]=i[4]+c|0},_doFinalize:function(){var t=this._data,e=t.words,i=8*this._nDataBytes,r=8*t.sigBytes;return e[r>>>5]|=128<<24-r%32,e[(r+64>>>9<<4)+14]=Math.floor(i/4294967296),e[(r+64>>>9<<4)+15]=i,t.sigBytes=4*e.length,this._process(),this._hash},clone:function(){var t=r.clone.call(this);return t._hash=this._hash.clone(),t}});t.SM3=r._createHelper(e),t.HmacSM3=r._createHmacHelper(e)}(),SM3Digest.prototype={Init:function(){this.xBuf=Array(4),this.Reset()},InitDigest:function(t){this.xBuf=Array(t.xBuf.length),Array.Copy(t.xBuf,0,this.xBuf,0,t.xBuf.length),this.xBufOff=t.xBufOff,this.byteCount=t.byteCount,Array.Copy(t.X,0,this.X,0,t.X.length),this.xOff=t.xOff,Array.Copy(t.v,0,this.v,0,t.v.length)},GetDigestSize:function(){return this.DIGEST_LENGTH},Reset:function(){this.xBufOff=this.byteCount=0,Array.Clear(this.xBuf,0,this.xBuf.length),Array.Copy(this.v0,0,this.v,0,this.v0.length),this.xOff=0,Array.Copy(this.X0,0,this.X,0,this.X0.length)},GetByteLength:function(){return this.BYTE_LENGTH},ProcessBlock:function(){var t,e=this,i=this.X,r=Array(64);for(t=16;68>t;t++)i[t]=e.P1(i[t-16]^i[t-9]^e.ROTATE(i[t-3],15))^e.ROTATE(i[t-13],7)^i[t-6];for(t=0;64>t;t++)r[t]=i[t]^i[t+4];var n=this.v,o=this.v_;Array.Copy(n,0,o,0,this.v0.length);var s,a;for(t=0;16>t;t++)a=e.ROTATE(o[0],12),s=Int32.parse(Int32.parse(a+o[4])+e.ROTATE(e.T_00_15,t)),s=e.ROTATE(s,7),a^=s,a=Int32.parse(Int32.parse(e.FF_00_15(o[0],o[1],o[2])+o[3])+a)+r[t],s=Int32.parse(Int32.parse(e.GG_00_15(o[4],o[5],o[6])+o[7])+s)+i[t],o[3]=o[2],o[2]=e.ROTATE(o[1],9),o[1]=o[0],o[0]=a,o[7]=o[6],o[6]=e.ROTATE(o[5],19),o[5]=o[4],o[4]=e.P0(s);for(t=16;64>t;t++)a=e.ROTATE(o[0],12),s=Int32.parse(Int32.parse(a+o[4])+e.ROTATE(e.T_16_63,t)),s=e.ROTATE(s,7),a^=s,a=Int32.parse(Int32.parse(e.FF_16_63(o[0],o[1],o[2])+o[3])+a)+r[t],s=Int32.parse(Int32.parse(e.GG_16_63(o[4],o[5],o[6])+o[7])+s)+i[t],o[3]=o[2],o[2]=e.ROTATE(o[1],9),o[1]=o[0],o[0]=a,o[7]=o[6],o[6]=e.ROTATE(o[5],19),o[5]=o[4],o[4]=e.P0(s);for(t=0;8>t;t++)n[t]^=Int32.parse(o[t]);this.xOff=0,Array.Copy(this.X0,0,this.X,0,this.X0.length)},ProcessWord:function(t,e){var i=t[e]<<24,i=i|(255&t[++e])<<16,i=i|(255&t[++e])<<8,i=i|255&t[++e];this.X[this.xOff]=i,16==++this.xOff&&this.ProcessBlock()},ProcessLength:function(t){14<this.xOff&&this.ProcessBlock(),this.X[14]=this.URShiftLong(t,32),this.X[15]=4294967295&t},IntToBigEndian:function(t,e,i){e[i]=Int32.parseByte(this.URShift(t,24)),e[++i]=Int32.parseByte(this.URShift(t,16)),e[++i]=Int32.parseByte(this.URShift(t,8)),e[++i]=Int32.parseByte(t)},DoFinal:function(t,e){var i=this;this.Finish();for(var r=0;8>r;r++)i.IntToBigEndian(i.v[r],t,e+4*r);this.Reset();for(var n=t.length,r=0;r<n;r++)t[r]&=255;return this.DIGEST_LENGTH},Update:function(t){this.xBuf[this.xBufOff++]=t,this.xBufOff==this.xBuf.length&&(this.ProcessWord(this.xBuf,0),this.xBufOff=0),this.byteCount++},BlockUpdate:function(t,e,i){for(var r=this;0!=this.xBufOff&&0<i;)r.Update(t[e]),e++,i--;for(;i>this.xBuf.length;)r.ProcessWord(t,e),e+=r.xBuf.length,i-=r.xBuf.length,r.byteCount+=r.xBuf.length;for(;0<i;)r.Update(t[e]),e++,i--},Finish:function(){var t=this,e=this.byteCount<<3;for(this.Update(128);0!=this.xBufOff;)t.Update(0);this.ProcessLength(e),this.ProcessBlock()},ROTATE:function(t,e){return t<<e|this.URShift(t,32-e)},P0:function(t){return t^this.ROTATE(t,9)^this.ROTATE(t,17)},P1:function(t){return t^this.ROTATE(t,15)^this.ROTATE(t,23)},FF_00_15:function(t,e,i){return t^e^i},FF_16_63:function(t,e,i){return t&e|t&i|e&i},GG_00_15:function(t,e,i){return t^e^i},GG_16_63:function(t,e,i){return t&e|~t&i},URShift:function(t,e){return(t>Int32.maxValue||t<Int32.minValue)&&(t=Int32.parse(t)),0<=t?t>>e:(t>>e)+(2<<~e)},URShiftLong:function(t,e){var i;if(i=new BigInteger$1,i.fromInt(t),0<=i.signum())i=i.shiftRight(e).intValue();else{var r=new BigInteger$1;r.fromInt(2);var n=~e;if(i="",0>n){for(r=64+n,n=0;n<r;n++)i+="0";r=new BigInteger$1,r.fromInt(t>>e),i=new BigInteger$1("10"+i,2),i.toRadix(10),i=i.add(r).toRadix(10)}else i=r.shiftLeft(~e).intValue(),i=(t>>e)+i}return i},GetZ:function(t,e){var i=CryptoJS.enc.Utf8.parse("1234567812345678"),r=32*i.words.length;this.Update(r>>8&255),this.Update(255&r),i=this.GetWords(i.toString()),this.BlockUpdate(i,0,i.length);var i=this.GetWords(t.curve.a.toBigInteger().toRadix(16)),r=this.GetWords(t.curve.b.toBigInteger().toRadix(16)),n=this.GetWords(t.getX().toBigInteger().toRadix(16)),o=this.GetWords(t.getY().toBigInteger().toRadix(16)),s=this.GetWords(e.substr(0,64)),a=this.GetWords(e.substr(64,64));return this.BlockUpdate(i,0,i.length),this.BlockUpdate(r,0,r.length),this.BlockUpdate(n,0,n.length),this.BlockUpdate(o,0,o.length),this.BlockUpdate(s,0,s.length),this.BlockUpdate(a,0,a.length),i=Array(this.GetDigestSize()),this.DoFinal(i,0),i},GetWords:function(t){for(var e=[],i=t.length,r=0;r<i;r+=2)e[e.length]=parseInt(t.substr(r,2),16);return e},GetHex:function(t){for(var e=[],i=0,r=0;r<2*t.length;r+=2)e[r>>>3]|=parseInt(t[i])<<24-r%8*4,i++;return new CryptoJS.lib.WordArray.init(e,t.length)}},Array.Clear=function(t,e,i){for(var r in t)t[r]=null},Array.Copy=function(t,e,i,r,n){for(t=t.slice(e,e+n),e=0;e<t.length;e++)i[r]=t[e],r++};var Int32={minValue:-parseInt("10000000000000000000000000000000",2),maxValue:2147483647,parse:function(t){if(t<this.minValue){t=new Number(-t),t=t.toString(2),t=t.substr(t.length-31,31);for(var e="",i=0;i<t.length;i++)var r=t.substr(i,1),e=e+("0"==r?"1":"0");return t=parseInt(e,2),t+1}if(t>this.maxValue){for(t=Number(t),t=t.toString(2),t=t.substr(t.length-31,31),e="",i=0;i<t.length;i++)r=t.substr(i,1),e+="0"==r?"1":"0";return t=parseInt(e,2),-(t+1)}return t},parseByte:function(t){if(0>t){t=new Number(-t),t=t.toString(2),t=t.substr(t.length-8,8);for(var e="",i=0;i<t.length;i++)var r=t.substr(i,1),e=e+("0"==r?"1":"0");return parseInt(e,2)+1}return 255<t?(t=Number(t),t=t.toString(2),parseInt(t.substr(t.length-8,8),2)):t}};"undefined"!=typeof KJUR&&KJUR||(KJUR={}),"undefined"!=typeof KJUR.crypto&&KJUR.crypto||(KJUR.crypto={}),KJUR.crypto.SM3withSM2=function(t){var e=new SecureRandom$1;this.type="SM2",this.getBigRandom=function(t){return new BigInteger$1(t.bitLength(),e).mod(t.subtract(BigInteger$1.ONE)).add(BigInteger$1.ONE)},this.setNamedCurve=function(t){this.ecparams=KJUR.crypto.ECParameterDB.getByName(t),this.pubKeyHex=this.prvKeyHex=null,this.curveName=t},this.setPrivateKeyHex=function(t){this.isPrivate=!0,this.prvKeyHex=t},this.setPublicKeyHex=function(t){this.isPublic=!0,this.pubKeyHex=t},this.generateKeyPairHex=function(){var t=this.getBigRandom(this.ecparams.n),e=this.ecparams.G.multiply(t),i=e.getX().toBigInteger(),e=e.getY().toBigInteger(),r=this.ecparams.keylen/4,t=("0000000000"+t.toString(16)).slice(-r),i=("0000000000"+i.toString(16)).slice(-r),e=("0000000000"+e.toString(16)).slice(-r),i="04"+i+e;return this.setPrivateKeyHex(t),this.setPublicKeyHex(i),{ecprvhex:t,ecpubhex:i}},this.signWithMessageHash=function(t){return this.signHex(t,this.prvKeyHex)},this.signHex=function(t,e){var i=this,r=new BigInteger$1(e,16),n=this.ecparams.n,o=new BigInteger$1(t,16),s=null,a=null,c=a=null;do{do a=i.generateKeyPairHex(),s=new BigInteger$1(a.ecprvhex,16),a=ECPointFp.decodeFromHex(i.ecparams.curve,a.ecpubhex),a=o.add(a.getX().toBigInteger()),a=a.mod(n);while(a.equals(BigInteger$1.ZERO)||a.add(s).equals(n));
var h=r.add(BigInteger$1.ONE),h=h.modInverse(n),c=a.multiply(r),c=s.subtract(c).mod(n),c=h.multiply(c).mod(n)}while(c.equals(BigInteger$1.ZERO));return KJUR.crypto.ECDSA.biRSSigToASN1Sig(a,c)},this.sign=function(t,e){var i=this,r=this.ecparams.n,n=BigInteger$1.fromByteArrayUnsigned(t);do var o=i.getBigRandom(r),s=i.ecparams.G.multiply(o).getX().toBigInteger().mod(r);while(0>=s.compareTo(BigInteger$1.ZERO));return r=o.modInverse(r).multiply(n.add(e.multiply(s))).mod(r),this.serializeSig(s,r)},this.verifyWithMessageHash=function(t,e){return this.verifyHex(t,e,this.pubKeyHex)},this.verifyHex=function(t,e,i){var r;return r=KJUR.crypto.ECDSA.parseSigHex(e),e=r.r,r=r.s,i=ECPointFp.decodeFromHex(this.ecparams.curve,i),t=new BigInteger$1(t,16),this.verifyRaw(t,e,r,i)},this.verify=function(t,e,i){var r;if(Bitcoin.Util.isArray(e))e=this.parseSig(e),r=e.r,e=e.s;else{if("object"!=typeof e||!e.r||!e.s)throw"Invalid value for signature";r=e.r,e=e.s}if(!(i instanceof ECPointFp)){if(!Bitcoin.Util.isArray(i))throw"Invalid format for pubkey value, must be byte array or ECPointFp";i=ECPointFp.decodeFrom(this.ecparams.curve,i)}return t=BigInteger$1.fromByteArrayUnsigned(t),this.verifyRaw(t,r,e,i)},this.verifyRaw=function(t,e,i,r){var n=this.ecparams.n,o=this.ecparams.G,s=e.add(i).mod(n);return!s.equals(BigInteger$1.ZERO)&&(i=o.multiply(i),i=i.add(r.multiply(s)),t=t.add(i.getX().toBigInteger()).mod(n),e.equals(t))},this.serializeSig=function(t,e){var i=t.toByteArraySigned(),r=e.toByteArraySigned(),n=[];return n.push(2),n.push(i.length),n=n.concat(i),n.push(2),n.push(r.length),n=n.concat(r),n.unshift(n.length),n.unshift(48),n},this.parseSig=function(t){var e;if(48!=t[0])throw Error("Signature not a valid DERSequence");if(e=2,2!=t[e])throw Error("First element in signature must be a DERInteger");var i=t.slice(e+2,e+2+t[e+1]);if(e+=2+t[e+1],2!=t[e])throw Error("Second element in signature must be a DERInteger");return t=t.slice(e+2,e+2+t[e+1]),i=BigInteger$1.fromByteArrayUnsigned(i),t=BigInteger$1.fromByteArrayUnsigned(t),{r:i,s:t}},this.parseSigCompact=function(t){if(65!==t.length)throw"Signature has the wrong length";var e=t[0]-27;if(0>e||7<e)throw"Invalid signature type";var i=this.ecparams.n,r=BigInteger$1.fromByteArrayUnsigned(t.slice(1,33)).mod(i);return t=BigInteger$1.fromByteArrayUnsigned(t.slice(33,65)).mod(i),{r:r,s:t,i:e}},void 0!==t&&void 0!==t.curve&&(this.curveName=t.curve),void 0===this.curveName&&(this.curveName="sm2"),this.setNamedCurve(this.curveName),void 0!==t&&(void 0!==t.prv&&this.setPrivateKeyHex(t.prv),void 0!==t.pub&&this.setPublicKeyHex(t.pub))},"undefined"!=typeof KJUR&&KJUR||(KJUR={}),"undefined"!=typeof KJUR.crypto&&KJUR.crypto||(KJUR.crypto={}),KJUR.crypto.ECParameterDB=new function(){var t={},e={};this.getByName=function(i){var r=i;if("undefined"!=typeof e[r]&&(r=e[i]),"undefined"!=typeof t[r])return t[r];throw"unregistered EC curve name: "+r},this.regist=function(i,r,n,o,s,a,c,h,p,u,l,f){for(t[i]={},n=new BigInteger$1(n,16),o=new BigInteger$1(o,16),s=new BigInteger$1(s,16),a=new BigInteger$1(a,16),c=new BigInteger$1(c,16),n=new ECCurveFp(n,o,s),h=n.decodePointHex("04"+h+p),t[i].name=i,t[i].keylen=r,t[i].curve=n,t[i].G=h,t[i].n=a,t[i].h=c,t[i].oid=l,t[i].info=f,r=0;r<u.length;r++)e[u[r]]=i}},KJUR.crypto.ECParameterDB.regist("secp128r1",128,"FFFFFFFDFFFFFFFFFFFFFFFFFFFFFFFF","FFFFFFFDFFFFFFFFFFFFFFFFFFFFFFFC","E87579C11079F43DD824993C2CEE5ED3","FFFFFFFE0000000075A30D1B9038A115","1","161FF7528B899B2D0C28607CA52C5B86","CF5AC8395BAFEB13C02DA292DDED7A83",[],"","secp128r1 : SECG curve over a 128 bit prime field"),KJUR.crypto.ECParameterDB.regist("secp160k1",160,"FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEFFFFAC73","0","7","0100000000000000000001B8FA16DFAB9ACA16B6B3","1","3B4C382CE37AA192A4019E763036F4F5DD4D7EBB","938CF935318FDCED6BC28286531733C3F03C4FEE",[],"","secp160k1 : SECG curve over a 160 bit prime field"),KJUR.crypto.ECParameterDB.regist("secp160r1",160,"FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF7FFFFFFF","FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF7FFFFFFC","1C97BEFC54BD7A8B65ACF89F81D4D4ADC565FA45","0100000000000000000001F4C8F927AED3CA752257","1","4A96B5688EF573284664698968C38BB913CBFC82","23A628553168947D59DCC912042351377AC5FB32",[],"","secp160r1 : SECG curve over a 160 bit prime field"),KJUR.crypto.ECParameterDB.regist("secp192k1",192,"FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEFFFFEE37","0","3","FFFFFFFFFFFFFFFFFFFFFFFE26F2FC170F69466A74DEFD8D","1","DB4FF10EC057E9AE26B07D0280B7F4341DA5D1B1EAE06C7D","9B2F2F6D9C5628A7844163D015BE86344082AA88D95E2F9D",[]),KJUR.crypto.ECParameterDB.regist("secp192r1",192,"FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEFFFFFFFFFFFFFFFF","FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEFFFFFFFFFFFFFFFC","64210519E59C80E70FA7E9AB72243049FEB8DEECC146B9B1","FFFFFFFFFFFFFFFFFFFFFFFF99DEF836146BC9B1B4D22831","1","188DA80EB03090F67CBF20EB43A18800F4FF0AFD82FF1012","07192B95FFC8DA78631011ED6B24CDD573F977A11E794811",[]),KJUR.crypto.ECParameterDB.regist("secp224r1",224,"FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF000000000000000000000001","FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEFFFFFFFFFFFFFFFFFFFFFFFE","B4050A850C04B3ABF54132565044B0B7D7BFD8BA270B39432355FFB4","FFFFFFFFFFFFFFFFFFFFFFFFFFFF16A2E0B8F03E13DD29455C5C2A3D","1","B70E0CBD6BB4BF7F321390B94A03C1D356C21122343280D6115C1D21","BD376388B5F723FB4C22DFE6CD4375A05A07476444D5819985007E34",[]),KJUR.crypto.ECParameterDB.regist("secp256k1",256,"FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEFFFFFC2F","0","7","FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEBAAEDCE6AF48A03BBFD25E8CD0364141","1","79BE667EF9DCBBAC55A06295CE870B07029BFCDB2DCE28D959F2815B16F81798","483ADA7726A3C4655DA4FBFC0E1108A8FD17B448A68554199C47D08FFB10D4B8",[]),KJUR.crypto.ECParameterDB.regist("secp256r1",256,"FFFFFFFF00000001000000000000000000000000FFFFFFFFFFFFFFFFFFFFFFFF","FFFFFFFF00000001000000000000000000000000FFFFFFFFFFFFFFFFFFFFFFFC","5AC635D8AA3A93E7B3EBBD55769886BC651D06B0CC53B0F63BCE3C3E27D2604B","FFFFFFFF00000000FFFFFFFFFFFFFFFFBCE6FAADA7179E84F3B9CAC2FC632551","1","6B17D1F2E12C4247F8BCE6E563A440F277037D812DEB33A0F4A13945D898C296","4FE342E2FE1A7F9B8EE7EB4A7C0F9E162BCE33576B315ECECBB6406837BF51F5",["NIST P-256","P-256","prime256v1"]),KJUR.crypto.ECParameterDB.regist("secp384r1",384,"FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEFFFFFFFF0000000000000000FFFFFFFF","FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEFFFFFFFF0000000000000000FFFFFFFC","B3312FA7E23EE7E4988E056BE3F82D19181D9C6EFE8141120314088F5013875AC656398D8A2ED19D2A85C8EDD3EC2AEF","FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFC7634D81F4372DDF581A0DB248B0A77AECEC196ACCC52973","1","AA87CA22BE8B05378EB1C71EF320AD746E1D3B628BA79B9859F741E082542A385502F25DBF55296C3A545E3872760AB7","3617de4a96262c6f5d9e98bf9292dc29f8f41dbd289a147ce9da3113b5f0b8c00a60b1ce1d7e819d7a431d7c90ea0e5f",["NIST P-384","P-384"]),KJUR.crypto.ECParameterDB.regist("secp521r1",521,"1FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF","1FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFC","051953EB9618E1C9A1F929A21A0B68540EEA2DA725B99B315F3B8B489918EF109E156193951EC7E937B1652C0BD3BB1BF073573DF883D2C34F1EF451FD46B503F00","1FFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFA51868783BF2F966B7FCC0148F709A5D03BB5C9B8899C47AEBB6FB71E91386409","1","C6858E06B70404E9CD9E3ECB662395B4429C648139053FB521F828AF606B4D3DBAA14B5E77EFE75928FE1DC127A2FFA8DE3348B3C1856A429BF97E7E31C2E5BD66","011839296a789a3bc0045c8a5fb42c7d1bd998f54449579b446817afbd17273e662c97ee72995ef42640c550b9013fad0761353c7086a272c24088be94769fd16650",["NIST P-521","P-521"]),KJUR.crypto.ECParameterDB.regist("sm2",256,"FFFFFFFEFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF00000000FFFFFFFFFFFFFFFF","FFFFFFFEFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFF00000000FFFFFFFFFFFFFFFC","28E9FA9E9D9F5E344D5A9E4BCF6509A7F39789F515AB8F92DDBCBD414D940E93","FFFFFFFEFFFFFFFFFFFFFFFFFFFFFFFF7203DF6B21C6052B53BBF40939D54123","1","32C4AE2C1F1981195F9904466A39C9948FE30BBFF2660BE1715A4589334C74C7","BC3736A2F4F6779C59BDCEE36B692153D0A9877CC62A474002DF32E52139F0A0",["sm2","SM2"]),SM2Cipher.prototype={Reset:function(){this.sm3keybase=new SM3Digest,this.sm3c3=new SM3Digest;for(var t=this.p2.getX().toBigInteger().toRadix(16);64>t.length;)t="0"+t;for(var t=this.GetWords(t),e=this.p2.getY().toBigInteger().toRadix(16);64>e.length;)e="0"+e;e=this.GetWords(e),this.sm3keybase.BlockUpdate(t,0,t.length),this.sm3c3.BlockUpdate(t,0,t.length),this.sm3keybase.BlockUpdate(e,0,e.length),this.ct=1,this.NextKey()},NextKey:function(){var t=new SM3Digest(this.sm3keybase);t.Update(this.ct>>24&255),t.Update(this.ct>>16&255),t.Update(this.ct>>8&255),t.Update(255&this.ct),t.DoFinal(this.key,0),this.keyOff=0,this.ct++},KDF:function(t){var e=Array(t),i=new SM3Digest,r=Array(32),n=1,o=t/32;t%=32;for(var s=this.p2.getX().toBigInteger().toRadix(16);64>s.length;)s="0"+s;for(var s=this.GetWords(s),a=this.p2.getY().toBigInteger().toRadix(16);64>a.length;)a="0"+a;for(var a=this.GetWords(a),c=0,h=0;h<o;h++)i.BlockUpdate(s,0,s.length),i.BlockUpdate(a,0,a.length),i.Update(n>>24&255),i.Update(n>>16&255),i.Update(n>>8&255),i.Update(255&n),i.DoFinal(e,c),c+=32,n++;for(0!=t&&(i.BlockUpdate(s,0,s.length),i.BlockUpdate(a,0,a.length),i.Update(n>>24&255),i.Update(n>>16&255),i.Update(n>>8&255),i.Update(255&n),i.DoFinal(r,0)),Array.Copy(r,0,e,c,t),h=0;h<e.length;h++)e[h]&=255;return e},InitEncipher:function(t){var e=null,i=null,i=new KJUR.crypto.ECDSA({curve:"sm2"}),r=i.generateKeyPairHex(),e=new BigInteger$1(r.ecprvhex,16),i=ECPointFp.decodeFromHex(i.ecparams.curve,r.ecpubhex);return this.p2=t.multiply(e),this.Reset(),i},EncryptBlock:function(t){this.sm3c3.BlockUpdate(t,0,t.length);for(var e=this.KDF(t.length),i=0;i<t.length;i++)t[i]^=e[i]},InitDecipher:function(t,e){this.p2=e.multiply(t),this.p2.getX().toBigInteger().toRadix(16),this.p2.getY().toBigInteger().toRadix(16),this.Reset()},DecryptBlock:function(t){for(var e=this.KDF(t.length),i=0,r="",i=0;i<e.length;i++)r+=e[i].toString(16);for(i=0;i<t.length;i++)t[i]^=e[i];this.sm3c3.BlockUpdate(t,0,t.length)},Dofinal:function(t){for(var e=this.p2.getY().toBigInteger().toRadix(16);64>e.length;)e="0"+e;e=this.GetWords(e),this.sm3c3.BlockUpdate(e,0,e.length),this.sm3c3.DoFinal(t,0),this.Reset()},Encrypt:function(t,e){var i=Array(e.length);Array.Copy(e,0,i,0,e.length);var r=this.InitEncipher(t);this.EncryptBlock(i);var n=Array(32);this.Dofinal(n);for(var o=r.getX().toBigInteger().toRadix(16),r=r.getY().toBigInteger().toRadix(16);64>o.length;)o="0"+o;for(;64>r.length;)r="0"+r;return o+=r,i=this.GetHex(i).toString(),0!=i.length%2&&(i="0"+i),n=this.GetHex(n).toString(),r=o+i+n,this.cipherMode==SM2CipherMode.C1C3C2&&(r=o+n+i),r},GetWords:function(t){for(var e=[],i=t.length,r=0;r<i;r+=2)e[e.length]=parseInt(t.substr(r,2),16);return e},GetHex:function(t){for(var e=[],i=0,r=0;r<2*t.length;r+=2)e[r>>>3]|=parseInt(t[i])<<24-r%8*4,i++;return new CryptoJS.lib.WordArray.init(e,t.length)},Decrypt:function(t,e){var i=e.substr(0,64),r=e.substr(0+i.length,64),n=e.substr(i.length+r.length,e.length-i.length-r.length-64),o=e.substr(e.length-64);return this.cipherMode==SM2CipherMode.C1C3C2&&(o=e.substr(i.length+r.length,64),n=e.substr(i.length+r.length+64)),n=this.GetWords(n),i=this.CreatePoint(i,r),this.InitDecipher(t,i),this.DecryptBlock(n),i=Array(32),this.Dofinal(i),this.GetHex(i).toString()==o?(o=this.GetHex(n),CryptoJS.enc.Utf8.stringify(o)):""},CreatePoint:function(t,e){var i=new KJUR.crypto.ECDSA({curve:"sm2"});return ECPointFp.decodeFromHex(i.ecparams.curve,"04"+t+e)}};var SM2Key=function(t){this.setKey(t)};SM2Key.prototype.setKey=SM2SetKey,SM2Key.prototype.encrypt=SM2Encrypt;var SM2={SM2CipherMode:SM2CipherMode,SM2Cipher:SM2Cipher,CryptoJS:CryptoJS},commonjsGlobal="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},core=createCommonjsModule(function(t,e){!function(i,r){"object"==typeof e?t.exports=e=r():i.CryptoJS=r()}(commonjsGlobal,function(){var t=t||function(t,e){var i=Object.create||function(){function t(){}return function(e){var i;return t.prototype=e,i=new t,t.prototype=null,i}}(),r={},n=r.lib={},o=n.Base=function(){return{extend:function(t){var e=i(this);return t&&e.mixIn(t),e.hasOwnProperty("init")&&this.init!==e.init||(e.init=function(){e.$super.init.apply(this,arguments)}),e.init.prototype=e,e.$super=this,e},create:function(){var t=this.extend();return t.init.apply(t,arguments),t},init:function(){},mixIn:function(t){var e=this;for(var i in t)t.hasOwnProperty(i)&&(e[i]=t[i]);t.hasOwnProperty("toString")&&(this.toString=t.toString)},clone:function(){return this.init.prototype.extend(this)}}}(),s=n.WordArray=o.extend({init:function(t,i){t=this.words=t||[],i!=e?this.sigBytes=i:this.sigBytes=4*t.length},toString:function(t){return(t||c).stringify(this)},concat:function(t){var e=this.words,i=t.words,r=this.sigBytes,n=t.sigBytes;if(this.clamp(),r%4)for(var o=0;o<n;o++){var s=i[o>>>2]>>>24-o%4*8&255;e[r+o>>>2]|=s<<24-(r+o)%4*8}else for(var o=0;o<n;o+=4)e[r+o>>>2]=i[o>>>2];return this.sigBytes+=n,this},clamp:function(){var e=this.words,i=this.sigBytes;e[i>>>2]&=4294967295<<32-i%4*8,e.length=t.ceil(i/4)},clone:function(){var t=o.clone.call(this);return t.words=this.words.slice(0),t},random:function(e){for(var i,r=[],n=function(e){var e=e,i=987654321,r=4294967295;return function(){i=36969*(65535&i)+(i>>16)&r,e=18e3*(65535&e)+(e>>16)&r;var n=(i<<16)+e&r;return n/=4294967296,n+=.5,n*(t.random()>.5?1:-1)}},o=0;o<e;o+=4){var a=n(4294967296*(i||t.random()));i=987654071*a(),r.push(4294967296*a()|0)}return new s.init(r,e)}}),a=r.enc={},c=a.Hex={stringify:function(t){for(var e=t.words,i=t.sigBytes,r=[],n=0;n<i;n++){var o=e[n>>>2]>>>24-n%4*8&255;r.push((o>>>4).toString(16)),r.push((15&o).toString(16))}return r.join("")},parse:function(t){for(var e=t.length,i=[],r=0;r<e;r+=2)i[r>>>3]|=parseInt(t.substr(r,2),16)<<24-r%8*4;return new s.init(i,e/2)}},h=a.Latin1={stringify:function(t){for(var e=t.words,i=t.sigBytes,r=[],n=0;n<i;n++){var o=e[n>>>2]>>>24-n%4*8&255;r.push(String.fromCharCode(o))}return r.join("")},parse:function(t){for(var e=t.length,i=[],r=0;r<e;r++)i[r>>>2]|=(255&t.charCodeAt(r))<<24-r%4*8;return new s.init(i,e)}},p=a.Utf8={stringify:function(t){try{return decodeURIComponent(escape(h.stringify(t)))}catch(t){throw new Error("Malformed UTF-8 data")}},parse:function(t){return h.parse(unescape(encodeURIComponent(t)))}},u=n.BufferedBlockAlgorithm=o.extend({reset:function(){this._data=new s.init,this._nDataBytes=0},_append:function(t){"string"==typeof t&&(t=p.parse(t)),this._data.concat(t),this._nDataBytes+=t.sigBytes},_process:function(e){var i=this,r=this._data,n=r.words,o=r.sigBytes,a=this.blockSize,c=4*a,h=o/c;h=e?t.ceil(h):t.max((0|h)-this._minBufferSize,0);var p=h*a,u=t.min(4*p,o);if(p){for(var l=0;l<p;l+=a)i._doProcessBlock(n,l);var f=n.splice(0,p);r.sigBytes-=u}return new s.init(f,u)},clone:function(){var t=o.clone.call(this);return t._data=this._data.clone(),t},_minBufferSize:0}),l=(n.Hasher=u.extend({cfg:o.extend(),init:function(t){this.cfg=this.cfg.extend(t),this.reset()},reset:function(){u.reset.call(this),this._doReset()},update:function(t){return this._append(t),this._process(),this},finalize:function(t){t&&this._append(t);var e=this._doFinalize();return e},blockSize:16,_createHelper:function(t){return function(e,i){return new t.init(i).finalize(e)}},_createHmacHelper:function(t){return function(e,i){return new l.HMAC.init(t,i).finalize(e)}}}),r.algo={});return r}(Math);return t})}),x64Core=createCommonjsModule(function(t,e){!function(i,r){"object"==typeof e?t.exports=e=r(core):r(i.CryptoJS)}(commonjsGlobal,function(t){return function(e){var i=t,r=i.lib,n=r.Base,o=r.WordArray,s=i.x64={};s.Word=n.extend({init:function(t,e){this.high=t,this.low=e}}),s.WordArray=n.extend({init:function(t,i){t=this.words=t||[],i!=e?this.sigBytes=i:this.sigBytes=8*t.length},toX32:function(){for(var t=this.words,e=t.length,i=[],r=0;r<e;r++){var n=t[r];i.push(n.high),i.push(n.low)}return o.create(i,this.sigBytes)},clone:function(){for(var t=n.clone.call(this),e=t.words=this.words.slice(0),i=e.length,r=0;r<i;r++)e[r]=e[r].clone();return t}})}(),t})}),libTypedarrays=createCommonjsModule(function(t,e){!function(i,r){"object"==typeof e?t.exports=e=r(core):r(i.CryptoJS)}(commonjsGlobal,function(t){return function(){if("function"==typeof ArrayBuffer){var e=t,i=e.lib,r=i.WordArray,n=r.init,o=r.init=function(t){if(t instanceof ArrayBuffer&&(t=new Uint8Array(t)),(t instanceof Int8Array||"undefined"!=typeof Uint8ClampedArray&&t instanceof Uint8ClampedArray||t instanceof Int16Array||t instanceof Uint16Array||t instanceof Int32Array||t instanceof Uint32Array||t instanceof Float32Array||t instanceof Float64Array)&&(t=new Uint8Array(t.buffer,t.byteOffset,t.byteLength)),t instanceof Uint8Array){for(var e=t.byteLength,i=[],r=0;r<e;r++)i[r>>>2]|=t[r]<<24-r%4*8;n.call(this,i,e)}else n.apply(this,arguments)};o.prototype=r}}(),t.lib.WordArray})}),encUtf16=createCommonjsModule(function(t,e){!function(i,r){"object"==typeof e?t.exports=e=r(core):r(i.CryptoJS)}(commonjsGlobal,function(t){return function(){function e(t){return t<<8&4278255360|t>>>8&16711935}var i=t,r=i.lib,n=r.WordArray,o=i.enc;o.Utf16=o.Utf16BE={stringify:function(t){for(var e=t.words,i=t.sigBytes,r=[],n=0;n<i;n+=2){var o=e[n>>>2]>>>16-n%4*8&65535;r.push(String.fromCharCode(o))}return r.join("")},parse:function(t){for(var e=t.length,i=[],r=0;r<e;r++)i[r>>>1]|=t.charCodeAt(r)<<16-r%2*16;return n.create(i,2*e)}};o.Utf16LE={stringify:function(t){for(var i=t.words,r=t.sigBytes,n=[],o=0;o<r;o+=2){var s=e(i[o>>>2]>>>16-o%4*8&65535);n.push(String.fromCharCode(s))}return n.join("")},parse:function(t){for(var i=t.length,r=[],o=0;o<i;o++)r[o>>>1]|=e(t.charCodeAt(o)<<16-o%2*16);return n.create(r,2*i)}}}(),t.enc.Utf16})}),encBase64=createCommonjsModule(function(t,e){!function(i,r){"object"==typeof e?t.exports=e=r(core):r(i.CryptoJS)}(commonjsGlobal,function(t){return function(){function e(t,e,i){for(var r=[],o=0,s=0;s<e;s++)if(s%4){var a=i[t.charCodeAt(s-1)]<<s%4*2,c=i[t.charCodeAt(s)]>>>6-s%4*2;r[o>>>2]|=(a|c)<<24-o%4*8,o++}return n.create(r,o)}var i=t,r=i.lib,n=r.WordArray,o=i.enc;o.Base64={stringify:function(t){var e=t.words,i=t.sigBytes,r=this._map;t.clamp();for(var n=[],o=0;o<i;o+=3)for(var s=e[o>>>2]>>>24-o%4*8&255,a=e[o+1>>>2]>>>24-(o+1)%4*8&255,c=e[o+2>>>2]>>>24-(o+2)%4*8&255,h=s<<16|a<<8|c,p=0;p<4&&o+.75*p<i;p++)n.push(r.charAt(h>>>6*(3-p)&63));var u=r.charAt(64);if(u)for(;n.length%4;)n.push(u);return n.join("")},parse:function(t){var i=t.length,r=this._map,n=this._reverseMap;if(!n){n=this._reverseMap=[];for(var o=0;o<r.length;o++)n[r.charCodeAt(o)]=o}var s=r.charAt(64);if(s){var a=t.indexOf(s);a!==-1&&(i=a)}return e(t,i,n)},_map:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="}}(),t.enc.Base64})}),md5=createCommonjsModule(function(t,e){!function(i,r){"object"==typeof e?t.exports=e=r(core):r(i.CryptoJS)}(commonjsGlobal,function(t){return function(e){function i(t,e,i,r,n,o,s){var a=t+(e&i|~e&r)+n+s;return(a<<o|a>>>32-o)+e}function r(t,e,i,r,n,o,s){var a=t+(e&r|i&~r)+n+s;return(a<<o|a>>>32-o)+e}function n(t,e,i,r,n,o,s){var a=t+(e^i^r)+n+s;return(a<<o|a>>>32-o)+e}function o(t,e,i,r,n,o,s){var a=t+(i^(e|~r))+n+s;return(a<<o|a>>>32-o)+e}var s=t,a=s.lib,c=a.WordArray,h=a.Hasher,p=s.algo,u=[];!function(){for(var t=0;t<64;t++)u[t]=4294967296*e.abs(e.sin(t+1))|0}();var l=p.MD5=h.extend({_doReset:function(){this._hash=new c.init([1732584193,4023233417,2562383102,271733878])},_doProcessBlock:function(t,e){for(var s=0;s<16;s++){var a=e+s,c=t[a];t[a]=16711935&(c<<8|c>>>24)|4278255360&(c<<24|c>>>8)}var h=this._hash.words,p=t[e+0],l=t[e+1],f=t[e+2],d=t[e+3],g=t[e+4],F=t[e+5],y=t[e+6],v=t[e+7],m=t[e+8],B=t[e+9],b=t[e+10],S=t[e+11],_=t[e+12],C=t[e+13],E=t[e+14],w=t[e+15],A=h[0],I=h[1],x=h[2],D=h[3];A=i(A,I,x,D,p,7,u[0]),D=i(D,A,I,x,l,12,u[1]),x=i(x,D,A,I,f,17,u[2]),I=i(I,x,D,A,d,22,u[3]),A=i(A,I,x,D,g,7,u[4]),D=i(D,A,I,x,F,12,u[5]),x=i(x,D,A,I,y,17,u[6]),I=i(I,x,D,A,v,22,u[7]),A=i(A,I,x,D,m,7,u[8]),D=i(D,A,I,x,B,12,u[9]),x=i(x,D,A,I,b,17,u[10]),I=i(I,x,D,A,S,22,u[11]),A=i(A,I,x,D,_,7,u[12]),D=i(D,A,I,x,C,12,u[13]),x=i(x,D,A,I,E,17,u[14]),I=i(I,x,D,A,w,22,u[15]),A=r(A,I,x,D,l,5,u[16]),D=r(D,A,I,x,y,9,u[17]),x=r(x,D,A,I,S,14,u[18]),I=r(I,x,D,A,p,20,u[19]),A=r(A,I,x,D,F,5,u[20]),D=r(D,A,I,x,b,9,u[21]),x=r(x,D,A,I,w,14,u[22]),I=r(I,x,D,A,g,20,u[23]),A=r(A,I,x,D,B,5,u[24]),D=r(D,A,I,x,E,9,u[25]),x=r(x,D,A,I,d,14,u[26]),I=r(I,x,D,A,m,20,u[27]),A=r(A,I,x,D,C,5,u[28]),D=r(D,A,I,x,f,9,u[29]),x=r(x,D,A,I,v,14,u[30]),I=r(I,x,D,A,_,20,u[31]),A=n(A,I,x,D,F,4,u[32]),D=n(D,A,I,x,m,11,u[33]),x=n(x,D,A,I,S,16,u[34]),I=n(I,x,D,A,E,23,u[35]),A=n(A,I,x,D,l,4,u[36]),D=n(D,A,I,x,g,11,u[37]),x=n(x,D,A,I,v,16,u[38]),I=n(I,x,D,A,b,23,u[39]),A=n(A,I,x,D,C,4,u[40]),D=n(D,A,I,x,p,11,u[41]),x=n(x,D,A,I,d,16,u[42]),I=n(I,x,D,A,y,23,u[43]),A=n(A,I,x,D,B,4,u[44]),D=n(D,A,I,x,_,11,u[45]),x=n(x,D,A,I,w,16,u[46]),I=n(I,x,D,A,f,23,u[47]),A=o(A,I,x,D,p,6,u[48]),D=o(D,A,I,x,v,10,u[49]),x=o(x,D,A,I,E,15,u[50]),I=o(I,x,D,A,F,21,u[51]),A=o(A,I,x,D,_,6,u[52]),D=o(D,A,I,x,d,10,u[53]),x=o(x,D,A,I,b,15,u[54]),I=o(I,x,D,A,l,21,u[55]),A=o(A,I,x,D,m,6,u[56]),D=o(D,A,I,x,w,10,u[57]),x=o(x,D,A,I,y,15,u[58]),I=o(I,x,D,A,C,21,u[59]),A=o(A,I,x,D,g,6,u[60]),D=o(D,A,I,x,S,10,u[61]),x=o(x,D,A,I,f,15,u[62]),I=o(I,x,D,A,B,21,u[63]),h[0]=h[0]+A|0,h[1]=h[1]+I|0,h[2]=h[2]+x|0,h[3]=h[3]+D|0},_doFinalize:function(){var t=this._data,i=t.words,r=8*this._nDataBytes,n=8*t.sigBytes;i[n>>>5]|=128<<24-n%32;var o=e.floor(r/4294967296),s=r;i[(n+64>>>9<<4)+15]=16711935&(o<<8|o>>>24)|4278255360&(o<<24|o>>>8),i[(n+64>>>9<<4)+14]=16711935&(s<<8|s>>>24)|4278255360&(s<<24|s>>>8),t.sigBytes=4*(i.length+1),this._process();for(var a=this._hash,c=a.words,h=0;h<4;h++){var p=c[h];c[h]=16711935&(p<<8|p>>>24)|4278255360&(p<<24|p>>>8)}return a},clone:function(){var t=h.clone.call(this);return t._hash=this._hash.clone(),t}});s.MD5=h._createHelper(l),s.HmacMD5=h._createHmacHelper(l)}(Math),t.MD5})}),sha1=createCommonjsModule(function(t,e){!function(i,r){"object"==typeof e?t.exports=e=r(core):r(i.CryptoJS)}(commonjsGlobal,function(t){return function(){var e=t,i=e.lib,r=i.WordArray,n=i.Hasher,o=e.algo,s=[],a=o.SHA1=n.extend({_doReset:function(){this._hash=new r.init([1732584193,4023233417,2562383102,271733878,3285377520])},_doProcessBlock:function(t,e){for(var i=this._hash.words,r=i[0],n=i[1],o=i[2],a=i[3],c=i[4],h=0;h<80;h++){if(h<16)s[h]=0|t[e+h];else{var p=s[h-3]^s[h-8]^s[h-14]^s[h-16];s[h]=p<<1|p>>>31}var u=(r<<5|r>>>27)+c+s[h];u+=h<20?(n&o|~n&a)+1518500249:h<40?(n^o^a)+1859775393:h<60?(n&o|n&a|o&a)-1894007588:(n^o^a)-899497514,c=a,a=o,o=n<<30|n>>>2,n=r,r=u}i[0]=i[0]+r|0,i[1]=i[1]+n|0,i[2]=i[2]+o|0,i[3]=i[3]+a|0,i[4]=i[4]+c|0},_doFinalize:function(){var t=this._data,e=t.words,i=8*this._nDataBytes,r=8*t.sigBytes;return e[r>>>5]|=128<<24-r%32,e[(r+64>>>9<<4)+14]=Math.floor(i/4294967296),e[(r+64>>>9<<4)+15]=i,t.sigBytes=4*e.length,this._process(),this._hash},clone:function(){var t=n.clone.call(this);return t._hash=this._hash.clone(),t}});e.SHA1=n._createHelper(a),e.HmacSHA1=n._createHmacHelper(a)}(),t.SHA1})}),sha256=createCommonjsModule(function(t,e){!function(i,r){"object"==typeof e?t.exports=e=r(core):r(i.CryptoJS)}(commonjsGlobal,function(t){return function(e){var i=t,r=i.lib,n=r.WordArray,o=r.Hasher,s=i.algo,a=[],c=[];!function(){function t(t){for(var i=e.sqrt(t),r=2;r<=i;r++)if(!(t%r))return!1;return!0}function i(t){return 4294967296*(t-(0|t))|0}for(var r=2,n=0;n<64;)t(r)&&(n<8&&(a[n]=i(e.pow(r,.5))),c[n]=i(e.pow(r,1/3)),n++),r++}();var h=[],p=s.SHA256=o.extend({_doReset:function(){this._hash=new n.init(a.slice(0))},_doProcessBlock:function(t,e){for(var i=this._hash.words,r=i[0],n=i[1],o=i[2],s=i[3],a=i[4],p=i[5],u=i[6],l=i[7],f=0;f<64;f++){if(f<16)h[f]=0|t[e+f];else{var d=h[f-15],g=(d<<25|d>>>7)^(d<<14|d>>>18)^d>>>3,F=h[f-2],y=(F<<15|F>>>17)^(F<<13|F>>>19)^F>>>10;h[f]=g+h[f-7]+y+h[f-16]}var v=a&p^~a&u,m=r&n^r&o^n&o,B=(r<<30|r>>>2)^(r<<19|r>>>13)^(r<<10|r>>>22),b=(a<<26|a>>>6)^(a<<21|a>>>11)^(a<<7|a>>>25),S=l+b+v+c[f]+h[f],_=B+m;l=u,u=p,p=a,a=s+S|0,s=o,o=n,n=r,r=S+_|0}i[0]=i[0]+r|0,i[1]=i[1]+n|0,i[2]=i[2]+o|0,i[3]=i[3]+s|0,i[4]=i[4]+a|0,i[5]=i[5]+p|0,i[6]=i[6]+u|0,i[7]=i[7]+l|0},_doFinalize:function(){var t=this._data,i=t.words,r=8*this._nDataBytes,n=8*t.sigBytes;return i[n>>>5]|=128<<24-n%32,i[(n+64>>>9<<4)+14]=e.floor(r/4294967296),i[(n+64>>>9<<4)+15]=r,t.sigBytes=4*i.length,this._process(),this._hash},clone:function(){var t=o.clone.call(this);return t._hash=this._hash.clone(),t}});i.SHA256=o._createHelper(p),i.HmacSHA256=o._createHmacHelper(p)}(Math),t.SHA256})}),sha224=createCommonjsModule(function(t,e){!function(i,r,n){"object"==typeof e?t.exports=e=r(core,sha256):r(i.CryptoJS)}(commonjsGlobal,function(t){return function(){var e=t,i=e.lib,r=i.WordArray,n=e.algo,o=n.SHA256,s=n.SHA224=o.extend({_doReset:function(){this._hash=new r.init([3238371032,914150663,812702999,4144912697,4290775857,1750603025,1694076839,3204075428])},_doFinalize:function(){var t=o._doFinalize.call(this);return t.sigBytes-=4,t}});e.SHA224=o._createHelper(s),e.HmacSHA224=o._createHmacHelper(s)}(),t.SHA224})}),sha512=createCommonjsModule(function(t,e){!function(i,r,n){"object"==typeof e?t.exports=e=r(core,x64Core):r(i.CryptoJS)}(commonjsGlobal,function(t){return function(){function e(){return s.create.apply(s,arguments)}var i=t,r=i.lib,n=r.Hasher,o=i.x64,s=o.Word,a=o.WordArray,c=i.algo,h=[e(1116352408,3609767458),e(1899447441,602891725),e(3049323471,3964484399),e(3921009573,2173295548),e(961987163,4081628472),e(1508970993,3053834265),e(2453635748,2937671579),e(2870763221,3664609560),e(3624381080,2734883394),e(310598401,1164996542),e(607225278,1323610764),e(1426881987,3590304994),e(1925078388,4068182383),e(2162078206,991336113),e(2614888103,633803317),e(3248222580,3479774868),e(3835390401,2666613458),e(4022224774,944711139),e(264347078,2341262773),e(604807628,2007800933),e(770255983,1495990901),e(1249150122,1856431235),e(1555081692,3175218132),e(1996064986,2198950837),e(2554220882,3999719339),e(2821834349,766784016),e(2952996808,2566594879),e(3210313671,3203337956),e(3336571891,1034457026),e(3584528711,2466948901),e(113926993,3758326383),e(338241895,168717936),e(666307205,1188179964),e(773529912,1546045734),e(1294757372,1522805485),e(1396182291,2643833823),e(1695183700,2343527390),e(1986661051,1014477480),e(2177026350,1206759142),e(2456956037,344077627),e(2730485921,1290863460),e(2820302411,3158454273),e(3259730800,3505952657),e(3345764771,106217008),e(3516065817,3606008344),e(3600352804,1432725776),e(4094571909,1467031594),e(275423344,851169720),e(430227734,3100823752),e(506948616,1363258195),e(659060556,3750685593),e(883997877,3785050280),e(958139571,3318307427),e(1322822218,3812723403),e(1537002063,2003034995),e(1747873779,3602036899),e(1955562222,1575990012),e(2024104815,1125592928),e(2227730452,2716904306),e(2361852424,442776044),e(2428436474,593698344),e(2756734187,3733110249),e(3204031479,2999351573),e(3329325298,3815920427),e(3391569614,3928383900),e(3515267271,566280711),e(3940187606,3454069534),e(4118630271,4000239992),e(116418474,1914138554),e(174292421,2731055270),e(289380356,3203993006),e(460393269,320620315),e(685471733,587496836),e(852142971,1086792851),e(1017036298,365543100),e(1126000580,2618297676),e(1288033470,3409855158),e(1501505948,4234509866),e(1607167915,987167468),e(1816402316,1246189591)],p=[];!function(){for(var t=0;t<80;t++)p[t]=e()}();var u=c.SHA512=n.extend({_doReset:function(){this._hash=new a.init([new s.init(1779033703,4089235720),new s.init(3144134277,2227873595),new s.init(1013904242,4271175723),new s.init(2773480762,1595750129),new s.init(1359893119,2917565137),new s.init(2600822924,725511199),new s.init(528734635,4215389547),new s.init(1541459225,327033209)])},_doProcessBlock:function(t,e){for(var i=this._hash.words,r=i[0],n=i[1],o=i[2],s=i[3],a=i[4],c=i[5],u=i[6],l=i[7],f=r.high,d=r.low,g=n.high,F=n.low,y=o.high,v=o.low,m=s.high,B=s.low,b=a.high,S=a.low,_=c.high,C=c.low,E=u.high,w=u.low,A=l.high,I=l.low,x=f,D=d,$=g,T=F,R=y,k=v,M=m,H=B,P=b,j=S,N=_,O=C,U=E,K=w,z=A,J=I,q=0;q<80;q++){var G=p[q];if(q<16)var L=G.high=0|t[e+2*q],V=G.low=0|t[e+2*q+1];else{var X=p[q-15],W=X.high,Z=X.low,Y=(W>>>1|Z<<31)^(W>>>8|Z<<24)^W>>>7,Q=(Z>>>1|W<<31)^(Z>>>8|W<<24)^(Z>>>7|W<<25),tt=p[q-2],et=tt.high,it=tt.low,rt=(et>>>19|it<<13)^(et<<3|it>>>29)^et>>>6,nt=(it>>>19|et<<13)^(it<<3|et>>>29)^(it>>>6|et<<26),ot=p[q-7],st=ot.high,at=ot.low,ct=p[q-16],ht=ct.high,pt=ct.low,V=Q+at,L=Y+st+(V>>>0<Q>>>0?1:0),V=V+nt,L=L+rt+(V>>>0<nt>>>0?1:0),V=V+pt,L=L+ht+(V>>>0<pt>>>0?1:0);G.high=L,G.low=V}var ut=P&N^~P&U,lt=j&O^~j&K,ft=x&$^x&R^$&R,dt=D&T^D&k^T&k,gt=(x>>>28|D<<4)^(x<<30|D>>>2)^(x<<25|D>>>7),Ft=(D>>>28|x<<4)^(D<<30|x>>>2)^(D<<25|x>>>7),yt=(P>>>14|j<<18)^(P>>>18|j<<14)^(P<<23|j>>>9),vt=(j>>>14|P<<18)^(j>>>18|P<<14)^(j<<23|P>>>9),mt=h[q],Bt=mt.high,bt=mt.low,St=J+vt,_t=z+yt+(St>>>0<J>>>0?1:0),St=St+lt,_t=_t+ut+(St>>>0<lt>>>0?1:0),St=St+bt,_t=_t+Bt+(St>>>0<bt>>>0?1:0),St=St+V,_t=_t+L+(St>>>0<V>>>0?1:0),Ct=Ft+dt,Et=gt+ft+(Ct>>>0<Ft>>>0?1:0);z=U,J=K,U=N,K=O,N=P,O=j,j=H+St|0,P=M+_t+(j>>>0<H>>>0?1:0)|0,M=R,H=k,R=$,k=T,$=x,T=D,D=St+Ct|0,x=_t+Et+(D>>>0<St>>>0?1:0)|0}d=r.low=d+D,r.high=f+x+(d>>>0<D>>>0?1:0),F=n.low=F+T,n.high=g+$+(F>>>0<T>>>0?1:0),v=o.low=v+k,o.high=y+R+(v>>>0<k>>>0?1:0),B=s.low=B+H,s.high=m+M+(B>>>0<H>>>0?1:0),S=a.low=S+j,a.high=b+P+(S>>>0<j>>>0?1:0),C=c.low=C+O,c.high=_+N+(C>>>0<O>>>0?1:0),w=u.low=w+K,u.high=E+U+(w>>>0<K>>>0?1:0),I=l.low=I+J,l.high=A+z+(I>>>0<J>>>0?1:0)},_doFinalize:function(){var t=this._data,e=t.words,i=8*this._nDataBytes,r=8*t.sigBytes;e[r>>>5]|=128<<24-r%32,e[(r+128>>>10<<5)+30]=Math.floor(i/4294967296),e[(r+128>>>10<<5)+31]=i,t.sigBytes=4*e.length,this._process();var n=this._hash.toX32();return n},clone:function(){var t=n.clone.call(this);return t._hash=this._hash.clone(),t},blockSize:32});i.SHA512=n._createHelper(u),i.HmacSHA512=n._createHmacHelper(u)}(),t.SHA512})}),sha384=createCommonjsModule(function(t,e){!function(i,r,n){"object"==typeof e?t.exports=e=r(core,x64Core,sha512):r(i.CryptoJS)}(commonjsGlobal,function(t){return function(){var e=t,i=e.x64,r=i.Word,n=i.WordArray,o=e.algo,s=o.SHA512,a=o.SHA384=s.extend({_doReset:function(){this._hash=new n.init([new r.init(3418070365,3238371032),new r.init(1654270250,914150663),new r.init(2438529370,812702999),new r.init(355462360,4144912697),new r.init(1731405415,4290775857),new r.init(2394180231,1750603025),new r.init(3675008525,1694076839),new r.init(1203062813,3204075428)])},_doFinalize:function(){var t=s._doFinalize.call(this);return t.sigBytes-=16,t}});e.SHA384=s._createHelper(a),e.HmacSHA384=s._createHmacHelper(a)}(),t.SHA384})}),sha3=createCommonjsModule(function(t,e){!function(i,r,n){"object"==typeof e?t.exports=e=r(core,x64Core):r(i.CryptoJS)}(commonjsGlobal,function(t){return function(e){var i=t,r=i.lib,n=r.WordArray,o=r.Hasher,s=i.x64,a=s.Word,c=i.algo,h=[],p=[],u=[];!function(){for(var t=1,e=0,i=0;i<24;i++){h[t+5*e]=(i+1)*(i+2)/2%64;var r=e%5,n=(2*t+3*e)%5;t=r,e=n}for(var t=0;t<5;t++)for(var e=0;e<5;e++)p[t+5*e]=e+(2*t+3*e)%5*5;for(var o=1,s=0;s<24;s++){for(var c=0,l=0,f=0;f<7;f++){if(1&o){var d=(1<<f)-1;d<32?l^=1<<d:c^=1<<d-32}128&o?o=o<<1^113:o<<=1}u[s]=a.create(c,l)}}();var l=[];!function(){for(var t=0;t<25;t++)l[t]=a.create()}();var f=c.SHA3=o.extend({cfg:o.cfg.extend({outputLength:512}),_doReset:function(){for(var t=this._state=[],e=0;e<25;e++)t[e]=new a.init;this.blockSize=(1600-2*this.cfg.outputLength)/32},_doProcessBlock:function(t,e){for(var i=this._state,r=this.blockSize/2,n=0;n<r;n++){var o=t[e+2*n],s=t[e+2*n+1];o=16711935&(o<<8|o>>>24)|4278255360&(o<<24|o>>>8),s=16711935&(s<<8|s>>>24)|4278255360&(s<<24|s>>>8);var a=i[n];a.high^=s,a.low^=o}for(var c=0;c<24;c++){for(var f=0;f<5;f++){for(var d=0,g=0,F=0;F<5;F++){var a=i[f+5*F];d^=a.high,g^=a.low}var y=l[f];y.high=d,y.low=g}for(var f=0;f<5;f++)for(var v=l[(f+4)%5],m=l[(f+1)%5],B=m.high,b=m.low,d=v.high^(B<<1|b>>>31),g=v.low^(b<<1|B>>>31),F=0;F<5;F++){var a=i[f+5*F];a.high^=d,a.low^=g;
}for(var S=1;S<25;S++){var a=i[S],_=a.high,C=a.low,E=h[S];if(E<32)var d=_<<E|C>>>32-E,g=C<<E|_>>>32-E;else var d=C<<E-32|_>>>64-E,g=_<<E-32|C>>>64-E;var w=l[p[S]];w.high=d,w.low=g}var A=l[0],I=i[0];A.high=I.high,A.low=I.low;for(var f=0;f<5;f++)for(var F=0;F<5;F++){var S=f+5*F,a=i[S],x=l[S],D=l[(f+1)%5+5*F],$=l[(f+2)%5+5*F];a.high=x.high^~D.high&$.high,a.low=x.low^~D.low&$.low}var a=i[0],T=u[c];a.high^=T.high,a.low^=T.low}},_doFinalize:function(){var t=this._data,i=t.words,r=(8*this._nDataBytes,8*t.sigBytes),o=32*this.blockSize;i[r>>>5]|=1<<24-r%32,i[(e.ceil((r+1)/o)*o>>>5)-1]|=128,t.sigBytes=4*i.length,this._process();for(var s=this._state,a=this.cfg.outputLength/8,c=a/8,h=[],p=0;p<c;p++){var u=s[p],l=u.high,f=u.low;l=16711935&(l<<8|l>>>24)|4278255360&(l<<24|l>>>8),f=16711935&(f<<8|f>>>24)|4278255360&(f<<24|f>>>8),h.push(f),h.push(l)}return new n.init(h,a)},clone:function(){for(var t=o.clone.call(this),e=t._state=this._state.slice(0),i=0;i<25;i++)e[i]=e[i].clone();return t}});i.SHA3=o._createHelper(f),i.HmacSHA3=o._createHmacHelper(f)}(Math),t.SHA3})}),ripemd160=createCommonjsModule(function(t,e){!function(i,r){"object"==typeof e?t.exports=e=r(core):r(i.CryptoJS)}(commonjsGlobal,function(t){return function(e){function i(t,e,i){return t^e^i}function r(t,e,i){return t&e|~t&i}function n(t,e,i){return(t|~e)^i}function o(t,e,i){return t&i|e&~i}function s(t,e,i){return t^(e|~i)}function a(t,e){return t<<e|t>>>32-e}var c=t,h=c.lib,p=h.WordArray,u=h.Hasher,l=c.algo,f=p.create([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,7,4,13,1,10,6,15,3,12,0,9,5,2,14,11,8,3,10,14,4,9,15,8,1,2,7,0,6,13,11,5,12,1,9,11,10,0,8,12,4,13,3,7,15,14,5,6,2,4,0,5,9,7,12,2,10,14,1,3,8,11,6,15,13]),d=p.create([5,14,7,0,9,2,11,4,13,6,15,8,1,10,3,12,6,11,3,7,0,13,5,10,14,15,8,12,4,9,1,2,15,5,1,3,7,14,6,9,11,8,12,2,10,0,4,13,8,6,4,1,3,11,15,0,5,12,2,13,9,7,10,14,12,15,10,4,1,5,8,7,6,2,13,14,0,3,9,11]),g=p.create([11,14,15,12,5,8,7,9,11,13,14,15,6,7,9,8,7,6,8,13,11,9,7,15,7,12,15,9,11,7,13,12,11,13,6,7,14,9,13,15,14,8,13,6,5,12,7,5,11,12,14,15,14,15,9,8,9,14,5,6,8,6,5,12,9,15,5,11,6,8,13,12,5,12,13,14,11,8,5,6]),F=p.create([8,9,9,11,13,15,15,5,7,7,8,11,14,14,12,6,9,13,15,7,12,8,9,11,7,7,12,7,6,15,13,11,9,7,15,11,8,6,6,14,12,13,5,14,13,13,7,5,15,5,8,11,14,14,6,14,6,9,12,9,12,5,15,8,8,5,12,9,12,5,14,6,8,13,6,5,15,13,11,11]),y=p.create([0,1518500249,1859775393,2400959708,2840853838]),v=p.create([1352829926,1548603684,1836072691,2053994217,0]),m=l.RIPEMD160=u.extend({_doReset:function(){this._hash=p.create([1732584193,4023233417,2562383102,271733878,3285377520])},_doProcessBlock:function(t,e){for(var c=0;c<16;c++){var h=e+c,p=t[h];t[h]=16711935&(p<<8|p>>>24)|4278255360&(p<<24|p>>>8)}var u,l,m,B,b,S,_,C,E,w,A=this._hash.words,I=y.words,x=v.words,D=f.words,$=d.words,T=g.words,R=F.words;S=u=A[0],_=l=A[1],C=m=A[2],E=B=A[3],w=b=A[4];for(var k,c=0;c<80;c+=1)k=u+t[e+D[c]]|0,k+=c<16?i(l,m,B)+I[0]:c<32?r(l,m,B)+I[1]:c<48?n(l,m,B)+I[2]:c<64?o(l,m,B)+I[3]:s(l,m,B)+I[4],k=0|k,k=a(k,T[c]),k=k+b|0,u=b,b=B,B=a(m,10),m=l,l=k,k=S+t[e+$[c]]|0,k+=c<16?s(_,C,E)+x[0]:c<32?o(_,C,E)+x[1]:c<48?n(_,C,E)+x[2]:c<64?r(_,C,E)+x[3]:i(_,C,E)+x[4],k=0|k,k=a(k,R[c]),k=k+w|0,S=w,w=E,E=a(C,10),C=_,_=k;k=A[1]+m+E|0,A[1]=A[2]+B+w|0,A[2]=A[3]+b+S|0,A[3]=A[4]+u+_|0,A[4]=A[0]+l+C|0,A[0]=k},_doFinalize:function(){var t=this._data,e=t.words,i=8*this._nDataBytes,r=8*t.sigBytes;e[r>>>5]|=128<<24-r%32,e[(r+64>>>9<<4)+14]=16711935&(i<<8|i>>>24)|4278255360&(i<<24|i>>>8),t.sigBytes=4*(e.length+1),this._process();for(var n=this._hash,o=n.words,s=0;s<5;s++){var a=o[s];o[s]=16711935&(a<<8|a>>>24)|4278255360&(a<<24|a>>>8)}return n},clone:function(){var t=u.clone.call(this);return t._hash=this._hash.clone(),t}});c.RIPEMD160=u._createHelper(m),c.HmacRIPEMD160=u._createHmacHelper(m)}(Math),t.RIPEMD160})}),hmac=createCommonjsModule(function(t,e){!function(i,r){"object"==typeof e?t.exports=e=r(core):r(i.CryptoJS)}(commonjsGlobal,function(t){!function(){var e=t,i=e.lib,r=i.Base,n=e.enc,o=n.Utf8,s=e.algo;s.HMAC=r.extend({init:function(t,e){t=this._hasher=new t.init,"string"==typeof e&&(e=o.parse(e));var i=t.blockSize,r=4*i;e.sigBytes>r&&(e=t.finalize(e)),e.clamp();for(var n=this._oKey=e.clone(),s=this._iKey=e.clone(),a=n.words,c=s.words,h=0;h<i;h++)a[h]^=1549556828,c[h]^=909522486;n.sigBytes=s.sigBytes=r,this.reset()},reset:function(){var t=this._hasher;t.reset(),t.update(this._iKey)},update:function(t){return this._hasher.update(t),this},finalize:function(t){var e=this._hasher,i=e.finalize(t);e.reset();var r=e.finalize(this._oKey.clone().concat(i));return r}})}()})}),pbkdf2=createCommonjsModule(function(t,e){!function(i,r,n){"object"==typeof e?t.exports=e=r(core,sha1,hmac):r(i.CryptoJS)}(commonjsGlobal,function(t){return function(){var e=t,i=e.lib,r=i.Base,n=i.WordArray,o=e.algo,s=o.SHA1,a=o.HMAC,c=o.PBKDF2=r.extend({cfg:r.extend({keySize:4,hasher:s,iterations:1}),init:function(t){this.cfg=this.cfg.extend(t)},compute:function(t,e){for(var i=this.cfg,r=a.create(i.hasher,t),o=n.create(),s=n.create([1]),c=o.words,h=s.words,p=i.keySize,u=i.iterations;c.length<p;){var l=r.update(e).finalize(s);r.reset();for(var f=l.words,d=f.length,g=l,F=1;F<u;F++){g=r.finalize(g),r.reset();for(var y=g.words,v=0;v<d;v++)f[v]^=y[v]}o.concat(l),h[0]++}return o.sigBytes=4*p,o}});e.PBKDF2=function(t,e,i){return c.create(i).compute(t,e)}}(),t.PBKDF2})}),evpkdf=createCommonjsModule(function(t,e){!function(i,r,n){"object"==typeof e?t.exports=e=r(core,sha1,hmac):r(i.CryptoJS)}(commonjsGlobal,function(t){return function(){var e=t,i=e.lib,r=i.Base,n=i.WordArray,o=e.algo,s=o.MD5,a=o.EvpKDF=r.extend({cfg:r.extend({keySize:4,hasher:s,iterations:1}),init:function(t){this.cfg=this.cfg.extend(t)},compute:function(t,e){for(var i=this.cfg,r=i.hasher.create(),o=n.create(),s=o.words,a=i.keySize,c=i.iterations;s.length<a;){h&&r.update(h);var h=r.update(t).finalize(e);r.reset();for(var p=1;p<c;p++)h=r.finalize(h),r.reset();o.concat(h)}return o.sigBytes=4*a,o}});e.EvpKDF=function(t,e,i){return a.create(i).compute(t,e)}}(),t.EvpKDF})}),cipherCore=createCommonjsModule(function(t,e){!function(i,r,n){"object"==typeof e?t.exports=e=r(core,evpkdf):r(i.CryptoJS)}(commonjsGlobal,function(t){t.lib.Cipher||function(e){var i=t,r=i.lib,n=r.Base,o=r.WordArray,s=r.BufferedBlockAlgorithm,a=i.enc,c=(a.Utf8,a.Base64),h=i.algo,p=h.EvpKDF,u=r.Cipher=s.extend({cfg:n.extend(),createEncryptor:function(t,e){return this.create(this._ENC_XFORM_MODE,t,e)},createDecryptor:function(t,e){return this.create(this._DEC_XFORM_MODE,t,e)},init:function(t,e,i){this.cfg=this.cfg.extend(i),this._xformMode=t,this._key=e,this.reset()},reset:function(){s.reset.call(this),this._doReset()},process:function(t){return this._append(t),this._process()},finalize:function(t){t&&this._append(t);var e=this._doFinalize();return e},keySize:4,ivSize:4,_ENC_XFORM_MODE:1,_DEC_XFORM_MODE:2,_createHelper:function(){function t(t){return"string"==typeof t?_:B}return function(e){return{encrypt:function(i,r,n){return t(r).encrypt(e,i,r,n)},decrypt:function(i,r,n){return t(r).decrypt(e,i,r,n)}}}}()}),l=(r.StreamCipher=u.extend({_doFinalize:function(){var t=this._process(!0);return t},blockSize:1}),i.mode={}),f=r.BlockCipherMode=n.extend({createEncryptor:function(t,e){return this.Encryptor.create(t,e)},createDecryptor:function(t,e){return this.Decryptor.create(t,e)},init:function(t,e){this._cipher=t,this._iv=e}}),d=l.CBC=function(){function t(t,i,r){var n=this._iv;if(n){var o=n;this._iv=e}else var o=this._prevBlock;for(var s=0;s<r;s++)t[i+s]^=o[s]}var i=f.extend();return i.Encryptor=i.extend({processBlock:function(e,i){var r=this._cipher,n=r.blockSize;t.call(this,e,i,n),r.encryptBlock(e,i),this._prevBlock=e.slice(i,i+n)}}),i.Decryptor=i.extend({processBlock:function(e,i){var r=this._cipher,n=r.blockSize,o=e.slice(i,i+n);r.decryptBlock(e,i),t.call(this,e,i,n),this._prevBlock=o}}),i}(),g=i.pad={},F=g.Pkcs7={pad:function(t,e){for(var i=4*e,r=i-t.sigBytes%i,n=r<<24|r<<16|r<<8|r,s=[],a=0;a<r;a+=4)s.push(n);var c=o.create(s,r);t.concat(c)},unpad:function(t){var e=255&t.words[t.sigBytes-1>>>2];t.sigBytes-=e}},y=(r.BlockCipher=u.extend({cfg:u.cfg.extend({mode:d,padding:F}),reset:function(){u.reset.call(this);var t=this.cfg,e=t.iv,i=t.mode;if(this._xformMode==this._ENC_XFORM_MODE)var r=i.createEncryptor;else{var r=i.createDecryptor;this._minBufferSize=1}this._mode&&this._mode.__creator==r?this._mode.init(this,e&&e.words):(this._mode=r.call(i,this,e&&e.words),this._mode.__creator=r)},_doProcessBlock:function(t,e){this._mode.processBlock(t,e)},_doFinalize:function(){var t=this.cfg.padding;if(this._xformMode==this._ENC_XFORM_MODE){t.pad(this._data,this.blockSize);var e=this._process(!0)}else{var e=this._process(!0);t.unpad(e)}return e},blockSize:4}),r.CipherParams=n.extend({init:function(t){this.mixIn(t)},toString:function(t){return(t||this.formatter).stringify(this)}})),v=i.format={},m=v.OpenSSL={stringify:function(t){var e=t.ciphertext,i=t.salt;if(i)var r=o.create([1398893684,1701076831]).concat(i).concat(e);else var r=e;return r.toString(c)},parse:function(t){var e=c.parse(t),i=e.words;if(1398893684==i[0]&&1701076831==i[1]){var r=o.create(i.slice(2,4));i.splice(0,4),e.sigBytes-=16}return y.create({ciphertext:e,salt:r})}},B=r.SerializableCipher=n.extend({cfg:n.extend({format:m}),encrypt:function(t,e,i,r){r=this.cfg.extend(r);var n=t.createEncryptor(i,r),o=n.finalize(e),s=n.cfg;return y.create({ciphertext:o,key:i,iv:s.iv,algorithm:t,mode:s.mode,padding:s.padding,blockSize:t.blockSize,formatter:r.format})},decrypt:function(t,e,i,r){r=this.cfg.extend(r),e=this._parse(e,r.format);var n=t.createDecryptor(i,r).finalize(e.ciphertext);return n},_parse:function(t,e){return"string"==typeof t?e.parse(t,this):t}}),b=i.kdf={},S=b.OpenSSL={execute:function(t,e,i,r){r||(r=o.random(8));var n=p.create({keySize:e+i}).compute(t,r),s=o.create(n.words.slice(e),4*i);return n.sigBytes=4*e,y.create({key:n,iv:s,salt:r})}},_=r.PasswordBasedCipher=B.extend({cfg:B.cfg.extend({kdf:S}),encrypt:function(t,e,i,r){r=this.cfg.extend(r);var n=r.kdf.execute(i,t.keySize,t.ivSize);r.iv=n.iv;var o=B.encrypt.call(this,t,e,n.key,r);return o.mixIn(n),o},decrypt:function(t,e,i,r){r=this.cfg.extend(r),e=this._parse(e,r.format);var n=r.kdf.execute(i,t.keySize,t.ivSize,e.salt);r.iv=n.iv;var o=B.decrypt.call(this,t,e,n.key,r);return o}})}()})}),modeCfb=createCommonjsModule(function(t,e){!function(i,r,n){"object"==typeof e?t.exports=e=r(core,cipherCore):r(i.CryptoJS)}(commonjsGlobal,function(t){return t.mode.CFB=function(){function e(t,e,i,r){var n=this._iv;if(n){var o=n.slice(0);this._iv=void 0}else var o=this._prevBlock;r.encryptBlock(o,0);for(var s=0;s<i;s++)t[e+s]^=o[s]}var i=t.lib.BlockCipherMode.extend();return i.Encryptor=i.extend({processBlock:function(t,i){var r=this._cipher,n=r.blockSize;e.call(this,t,i,n,r),this._prevBlock=t.slice(i,i+n)}}),i.Decryptor=i.extend({processBlock:function(t,i){var r=this._cipher,n=r.blockSize,o=t.slice(i,i+n);e.call(this,t,i,n,r),this._prevBlock=o}}),i}(),t.mode.CFB})}),modeCtr=createCommonjsModule(function(t,e){!function(i,r,n){"object"==typeof e?t.exports=e=r(core,cipherCore):r(i.CryptoJS)}(commonjsGlobal,function(t){return t.mode.CTR=function(){var e=t.lib.BlockCipherMode.extend(),i=e.Encryptor=e.extend({processBlock:function(t,e){var i=this._cipher,r=i.blockSize,n=this._iv,o=this._counter;n&&(o=this._counter=n.slice(0),this._iv=void 0);var s=o.slice(0);i.encryptBlock(s,0),o[r-1]=o[r-1]+1|0;for(var a=0;a<r;a++)t[e+a]^=s[a]}});return e.Decryptor=i,e}(),t.mode.CTR})}),modeCtrGladman=createCommonjsModule(function(t,e){!function(i,r,n){"object"==typeof e?t.exports=e=r(core,cipherCore):r(i.CryptoJS)}(commonjsGlobal,function(t){return t.mode.CTRGladman=function(){function e(t){if(255===(t>>24&255)){var e=t>>16&255,i=t>>8&255,r=255&t;255===e?(e=0,255===i?(i=0,255===r?r=0:++r):++i):++e,t=0,t+=e<<16,t+=i<<8,t+=r}else t+=1<<24;return t}function i(t){return 0===(t[0]=e(t[0]))&&(t[1]=e(t[1])),t}var r=t.lib.BlockCipherMode.extend(),n=r.Encryptor=r.extend({processBlock:function(t,e){var r=this._cipher,n=r.blockSize,o=this._iv,s=this._counter;o&&(s=this._counter=o.slice(0),this._iv=void 0),i(s);var a=s.slice(0);r.encryptBlock(a,0);for(var c=0;c<n;c++)t[e+c]^=a[c]}});return r.Decryptor=n,r}(),t.mode.CTRGladman})}),modeOfb=createCommonjsModule(function(t,e){!function(i,r,n){"object"==typeof e?t.exports=e=r(core,cipherCore):r(i.CryptoJS)}(commonjsGlobal,function(t){return t.mode.OFB=function(){var e=t.lib.BlockCipherMode.extend(),i=e.Encryptor=e.extend({processBlock:function(t,e){var i=this._cipher,r=i.blockSize,n=this._iv,o=this._keystream;n&&(o=this._keystream=n.slice(0),this._iv=void 0),i.encryptBlock(o,0);for(var s=0;s<r;s++)t[e+s]^=o[s]}});return e.Decryptor=i,e}(),t.mode.OFB})}),modeEcb=createCommonjsModule(function(t,e){!function(i,r,n){"object"==typeof e?t.exports=e=r(core,cipherCore):r(i.CryptoJS)}(commonjsGlobal,function(t){return t.mode.ECB=function(){var e=t.lib.BlockCipherMode.extend();return e.Encryptor=e.extend({processBlock:function(t,e){this._cipher.encryptBlock(t,e)}}),e.Decryptor=e.extend({processBlock:function(t,e){this._cipher.decryptBlock(t,e)}}),e}(),t.mode.ECB})}),padAnsix923=createCommonjsModule(function(t,e){!function(i,r,n){"object"==typeof e?t.exports=e=r(core,cipherCore):r(i.CryptoJS)}(commonjsGlobal,function(t){return t.pad.AnsiX923={pad:function(t,e){var i=t.sigBytes,r=4*e,n=r-i%r,o=i+n-1;t.clamp(),t.words[o>>>2]|=n<<24-o%4*8,t.sigBytes+=n},unpad:function(t){var e=255&t.words[t.sigBytes-1>>>2];t.sigBytes-=e}},t.pad.Ansix923})}),padIso10126=createCommonjsModule(function(t,e){!function(i,r,n){"object"==typeof e?t.exports=e=r(core,cipherCore):r(i.CryptoJS)}(commonjsGlobal,function(t){return t.pad.Iso10126={pad:function(e,i){var r=4*i,n=r-e.sigBytes%r;e.concat(t.lib.WordArray.random(n-1)).concat(t.lib.WordArray.create([n<<24],1))},unpad:function(t){var e=255&t.words[t.sigBytes-1>>>2];t.sigBytes-=e}},t.pad.Iso10126})}),padIso97971=createCommonjsModule(function(t,e){!function(i,r,n){"object"==typeof e?t.exports=e=r(core,cipherCore):r(i.CryptoJS)}(commonjsGlobal,function(t){return t.pad.Iso97971={pad:function(e,i){e.concat(t.lib.WordArray.create([2147483648],1)),t.pad.ZeroPadding.pad(e,i)},unpad:function(e){t.pad.ZeroPadding.unpad(e),e.sigBytes--}},t.pad.Iso97971})}),padZeropadding=createCommonjsModule(function(t,e){!function(i,r,n){"object"==typeof e?t.exports=e=r(core,cipherCore):r(i.CryptoJS)}(commonjsGlobal,function(t){return t.pad.ZeroPadding={pad:function(t,e){var i=4*e;t.clamp(),t.sigBytes+=i-(t.sigBytes%i||i)},unpad:function(t){for(var e=t.words,i=t.sigBytes-1;!(e[i>>>2]>>>24-i%4*8&255);)i--;t.sigBytes=i+1}},t.pad.ZeroPadding})}),padNopadding=createCommonjsModule(function(t,e){!function(i,r,n){"object"==typeof e?t.exports=e=r(core,cipherCore):r(i.CryptoJS)}(commonjsGlobal,function(t){return t.pad.NoPadding={pad:function(){},unpad:function(){}},t.pad.NoPadding})}),formatHex=createCommonjsModule(function(t,e){!function(i,r,n){"object"==typeof e?t.exports=e=r(core,cipherCore):r(i.CryptoJS)}(commonjsGlobal,function(t){return function(e){var i=t,r=i.lib,n=r.CipherParams,o=i.enc,s=o.Hex,a=i.format;a.Hex={stringify:function(t){return t.ciphertext.toString(s)},parse:function(t){var e=s.parse(t);return n.create({ciphertext:e})}}}(),t.format.Hex})}),aes=createCommonjsModule(function(t,e){!function(i,r,n){"object"==typeof e?t.exports=e=r(core,encBase64,md5,evpkdf,cipherCore):r(i.CryptoJS)}(commonjsGlobal,function(t){return function(){var e=t,i=e.lib,r=i.BlockCipher,n=e.algo,o=[],s=[],a=[],c=[],h=[],p=[],u=[],l=[],f=[],d=[];!function(){for(var t=[],e=0;e<256;e++)e<128?t[e]=e<<1:t[e]=e<<1^283;for(var i=0,r=0,e=0;e<256;e++){var n=r^r<<1^r<<2^r<<3^r<<4;n=n>>>8^255&n^99,o[i]=n,s[n]=i;var g=t[i],F=t[g],y=t[F],v=257*t[n]^16843008*n;a[i]=v<<24|v>>>8,c[i]=v<<16|v>>>16,h[i]=v<<8|v>>>24,p[i]=v;var v=16843009*y^65537*F^257*g^16843008*i;u[n]=v<<24|v>>>8,l[n]=v<<16|v>>>16,f[n]=v<<8|v>>>24,d[n]=v,i?(i=g^t[t[t[y^g]]],r^=t[t[r]]):i=r=1}}();var g=[0,1,2,4,8,16,32,64,128,27,54],F=n.AES=r.extend({_doReset:function(){if(!this._nRounds||this._keyPriorReset!==this._key){for(var t=this._keyPriorReset=this._key,e=t.words,i=t.sigBytes/4,r=this._nRounds=i+6,n=4*(r+1),s=this._keySchedule=[],a=0;a<n;a++)if(a<i)s[a]=e[a];else{var c=s[a-1];a%i?i>6&&a%i==4&&(c=o[c>>>24]<<24|o[c>>>16&255]<<16|o[c>>>8&255]<<8|o[255&c]):(c=c<<8|c>>>24,c=o[c>>>24]<<24|o[c>>>16&255]<<16|o[c>>>8&255]<<8|o[255&c],c^=g[a/i|0]<<24),s[a]=s[a-i]^c}for(var h=this._invKeySchedule=[],p=0;p<n;p++){var a=n-p;if(p%4)var c=s[a];else var c=s[a-4];p<4||a<=4?h[p]=c:h[p]=u[o[c>>>24]]^l[o[c>>>16&255]]^f[o[c>>>8&255]]^d[o[255&c]]}}},encryptBlock:function(t,e){this._doCryptBlock(t,e,this._keySchedule,a,c,h,p,o)},decryptBlock:function(t,e){var i=t[e+1];t[e+1]=t[e+3],t[e+3]=i,this._doCryptBlock(t,e,this._invKeySchedule,u,l,f,d,s);var i=t[e+1];t[e+1]=t[e+3],t[e+3]=i},_doCryptBlock:function(t,e,i,r,n,o,s,a){for(var c=this._nRounds,h=t[e]^i[0],p=t[e+1]^i[1],u=t[e+2]^i[2],l=t[e+3]^i[3],f=4,d=1;d<c;d++){var g=r[h>>>24]^n[p>>>16&255]^o[u>>>8&255]^s[255&l]^i[f++],F=r[p>>>24]^n[u>>>16&255]^o[l>>>8&255]^s[255&h]^i[f++],y=r[u>>>24]^n[l>>>16&255]^o[h>>>8&255]^s[255&p]^i[f++],v=r[l>>>24]^n[h>>>16&255]^o[p>>>8&255]^s[255&u]^i[f++];h=g,p=F,u=y,l=v}var g=(a[h>>>24]<<24|a[p>>>16&255]<<16|a[u>>>8&255]<<8|a[255&l])^i[f++],F=(a[p>>>24]<<24|a[u>>>16&255]<<16|a[l>>>8&255]<<8|a[255&h])^i[f++],y=(a[u>>>24]<<24|a[l>>>16&255]<<16|a[h>>>8&255]<<8|a[255&p])^i[f++],v=(a[l>>>24]<<24|a[h>>>16&255]<<16|a[p>>>8&255]<<8|a[255&u])^i[f++];t[e]=g,t[e+1]=F,t[e+2]=y,t[e+3]=v},keySize:8});e.AES=r._createHelper(F)}(),t.AES})}),tripledes=createCommonjsModule(function(t,e){!function(i,r,n){"object"==typeof e?t.exports=e=r(core,encBase64,md5,evpkdf,cipherCore):r(i.CryptoJS)}(commonjsGlobal,function(t){return function(){function e(t,e){var i=(this._lBlock>>>t^this._rBlock)&e;this._rBlock^=i,this._lBlock^=i<<t}function i(t,e){var i=(this._rBlock>>>t^this._lBlock)&e;this._lBlock^=i,this._rBlock^=i<<t}var r=t,n=r.lib,o=n.WordArray,s=n.BlockCipher,a=r.algo,c=[57,49,41,33,25,17,9,1,58,50,42,34,26,18,10,2,59,51,43,35,27,19,11,3,60,52,44,36,63,55,47,39,31,23,15,7,62,54,46,38,30,22,14,6,61,53,45,37,29,21,13,5,28,20,12,4],h=[14,17,11,24,1,5,3,28,15,6,21,10,23,19,12,4,26,8,16,7,27,20,13,2,41,52,31,37,47,55,30,40,51,45,33,48,44,49,39,56,34,53,46,42,50,36,29,32],p=[1,2,4,6,8,10,12,14,15,17,19,21,23,25,27,28],u=[{0:8421888,268435456:32768,536870912:8421378,805306368:2,1073741824:512,1342177280:8421890,1610612736:8389122,1879048192:8388608,2147483648:514,2415919104:8389120,2684354560:33280,2952790016:8421376,3221225472:32770,3489660928:8388610,3758096384:0,4026531840:33282,134217728:0,402653184:8421890,671088640:33282,939524096:32768,1207959552:8421888,1476395008:512,1744830464:8421378,2013265920:2,2281701376:8389120,2550136832:33280,2818572288:8421376,3087007744:8389122,3355443200:8388610,3623878656:32770,3892314112:514,4160749568:8388608,1:32768,268435457:2,536870913:8421888,805306369:8388608,1073741825:8421378,1342177281:33280,1610612737:512,1879048193:8389122,2147483649:8421890,2415919105:8421376,2684354561:8388610,2952790017:33282,3221225473:514,3489660929:8389120,3758096385:32770,4026531841:0,134217729:8421890,402653185:8421376,671088641:8388608,939524097:512,1207959553:32768,1476395009:8388610,1744830465:2,2013265921:33282,2281701377:32770,2550136833:8389122,2818572289:514,3087007745:8421888,3355443201:8389120,3623878657:0,3892314113:33280,4160749569:8421378},{0:1074282512,16777216:16384,33554432:524288,50331648:1074266128,67108864:1073741840,83886080:1074282496,100663296:1073758208,117440512:16,134217728:540672,150994944:1073758224,167772160:1073741824,184549376:540688,201326592:524304,218103808:0,234881024:16400,251658240:1074266112,8388608:1073758208,25165824:540688,41943040:16,58720256:1073758224,75497472:1074282512,92274688:1073741824,109051904:524288,125829120:1074266128,142606336:524304,159383552:0,176160768:16384,192937984:1074266112,209715200:1073741840,226492416:540672,243269632:1074282496,260046848:16400,268435456:0,285212672:1074266128,301989888:1073758224,318767104:1074282496,335544320:1074266112,352321536:16,369098752:540688,385875968:16384,402653184:16400,419430400:524288,436207616:524304,452984832:1073741840,469762048:540672,486539264:1073758208,503316480:1073741824,520093696:1074282512,276824064:540688,293601280:524288,310378496:1074266112,327155712:16384,343932928:1073758208,360710144:1074282512,377487360:16,394264576:1073741824,411041792:1074282496,427819008:1073741840,444596224:1073758224,461373440:524304,478150656:0,494927872:16400,511705088:1074266128,528482304:540672},{0:260,1048576:0,2097152:67109120,3145728:65796,4194304:65540,5242880:67108868,6291456:67174660,7340032:67174400,8388608:67108864,9437184:67174656,10485760:65792,11534336:67174404,12582912:67109124,13631488:65536,14680064:4,15728640:256,524288:67174656,1572864:67174404,2621440:0,3670016:67109120,4718592:67108868,5767168:65536,6815744:65540,7864320:260,8912896:4,9961472:256,11010048:67174400,12058624:65796,13107200:65792,14155776:67109124,15204352:67174660,16252928:67108864,16777216:67174656,17825792:65540,18874368:65536,19922944:67109120,20971520:256,22020096:67174660,23068672:67108868,24117248:0,25165824:67109124,26214400:67108864,27262976:4,28311552:65792,29360128:67174400,30408704:260,31457280:65796,32505856:67174404,17301504:67108864,18350080:260,19398656:67174656,20447232:0,21495808:65540,22544384:67109120,23592960:256,24641536:67174404,25690112:65536,26738688:67174660,27787264:65796,28835840:67108868,29884416:67109124,30932992:67174400,31981568:4,33030144:65792},{0:2151682048,65536:2147487808,131072:4198464,196608:2151677952,262144:0,327680:4198400,393216:2147483712,458752:4194368,524288:2147483648,589824:4194304,655360:64,720896:2147487744,786432:2151678016,851968:4160,917504:4096,983040:2151682112,32768:2147487808,98304:64,163840:2151678016,229376:2147487744,294912:4198400,360448:2151682112,425984:0,491520:2151677952,557056:4096,622592:2151682048,688128:4194304,753664:4160,819200:2147483648,884736:4194368,950272:4198464,1015808:2147483712,1048576:4194368,1114112:4198400,1179648:2147483712,1245184:0,1310720:4160,1376256:2151678016,1441792:2151682048,1507328:2147487808,1572864:2151682112,1638400:2147483648,1703936:2151677952,1769472:4198464,1835008:2147487744,1900544:4194304,1966080:64,2031616:4096,1081344:2151677952,1146880:2151682112,1212416:0,1277952:4198400,1343488:4194368,1409024:2147483648,1474560:2147487808,1540096:64,1605632:2147483712,1671168:4096,1736704:2147487744,1802240:2151678016,1867776:4160,1933312:2151682048,1998848:4194304,2064384:4198464},{0:128,4096:17039360,8192:262144,12288:536870912,16384:537133184,20480:16777344,24576:553648256,28672:262272,32768:16777216,36864:537133056,40960:536871040,45056:553910400,49152:553910272,53248:0,57344:17039488,61440:553648128,2048:17039488,6144:553648256,10240:128,14336:17039360,18432:262144,22528:537133184,26624:553910272,30720:536870912,34816:537133056,38912:0,43008:553910400,47104:16777344,51200:536871040,55296:553648128,59392:16777216,63488:262272,65536:262144,69632:128,73728:536870912,77824:553648256,81920:16777344,86016:553910272,90112:537133184,94208:16777216,98304:553910400,102400:553648128,106496:17039360,110592:537133056,114688:262272,118784:536871040,122880:0,126976:17039488,67584:553648256,71680:16777216,75776:17039360,79872:537133184,83968:536870912,88064:17039488,92160:128,96256:553910272,100352:262272,104448:553910400,108544:0,112640:553648128,116736:16777344,120832:262144,124928:537133056,129024:536871040},{0:268435464,256:8192,512:270532608,768:270540808,1024:268443648,1280:2097152,1536:2097160,1792:268435456,2048:0,2304:268443656,2560:2105344,2816:8,3072:270532616,3328:2105352,3584:8200,3840:270540800,128:270532608,384:270540808,640:8,896:2097152,1152:2105352,1408:268435464,1664:268443648,1920:8200,2176:2097160,2432:8192,2688:268443656,2944:270532616,3200:0,3456:270540800,3712:2105344,3968:268435456,4096:268443648,4352:270532616,4608:270540808,4864:8200,5120:2097152,5376:268435456,5632:268435464,5888:2105344,6144:2105352,6400:0,6656:8,6912:270532608,7168:8192,7424:268443656,7680:270540800,7936:2097160,4224:8,4480:2105344,4736:2097152,4992:268435464,5248:268443648,5504:8200,5760:270540808,6016:270532608,6272:270540800,6528:270532616,6784:8192,7040:2105352,7296:2097160,7552:0,7808:268435456,8064:268443656},{0:1048576,16:33555457,32:1024,48:1049601,64:34604033,80:0,96:1,112:34603009,128:33555456,144:1048577,160:33554433,176:34604032,192:34603008,208:1025,224:1049600,240:33554432,8:34603009,24:0,40:33555457,56:34604032,72:1048576,88:33554433,104:33554432,120:1025,136:1049601,152:33555456,168:34603008,184:1048577,200:1024,216:34604033,232:1,248:1049600,256:33554432,272:1048576,288:33555457,304:34603009,320:1048577,336:33555456,352:34604032,368:1049601,384:1025,400:34604033,416:1049600,432:1,448:0,464:34603008,480:33554433,496:1024,264:1049600,280:33555457,296:34603009,312:1,328:33554432,344:1048576,360:1025,376:34604032,392:33554433,408:34603008,424:0,440:34604033,456:1049601,472:1024,488:33555456,504:1048577},{0:134219808,1:131072,2:134217728,3:32,4:131104,5:134350880,6:134350848,7:2048,8:134348800,9:134219776,10:133120,11:134348832,12:2080,13:0,14:134217760,15:133152,2147483648:2048,2147483649:134350880,2147483650:134219808,2147483651:134217728,2147483652:134348800,2147483653:133120,2147483654:133152,2147483655:32,2147483656:134217760,2147483657:2080,2147483658:131104,2147483659:134350848,2147483660:0,2147483661:134348832,2147483662:134219776,2147483663:131072,16:133152,17:134350848,18:32,19:2048,20:134219776,21:134217760,22:134348832,23:131072,24:0,25:131104,26:134348800,27:134219808,28:134350880,29:133120,30:2080,31:134217728,2147483664:131072,2147483665:2048,2147483666:134348832,2147483667:133152,2147483668:32,2147483669:134348800,2147483670:134217728,2147483671:134219808,2147483672:134350880,2147483673:134217760,2147483674:134219776,2147483675:0,2147483676:133120,2147483677:2080,2147483678:131104,2147483679:134350848}],l=[4160749569,528482304,33030144,2064384,129024,8064,504,2147483679],f=a.DES=s.extend({_doReset:function(){for(var t=this._key,e=t.words,i=[],r=0;r<56;r++){var n=c[r]-1;i[r]=e[n>>>5]>>>31-n%32&1}for(var o=this._subKeys=[],s=0;s<16;s++){for(var a=o[s]=[],u=p[s],r=0;r<24;r++)a[r/6|0]|=i[(h[r]-1+u)%28]<<31-r%6,a[4+(r/6|0)]|=i[28+(h[r+24]-1+u)%28]<<31-r%6;a[0]=a[0]<<1|a[0]>>>31;for(var r=1;r<7;r++)a[r]=a[r]>>>4*(r-1)+3;a[7]=a[7]<<5|a[7]>>>27}for(var l=this._invSubKeys=[],r=0;r<16;r++)l[r]=o[15-r]},encryptBlock:function(t,e){this._doCryptBlock(t,e,this._subKeys)},decryptBlock:function(t,e){this._doCryptBlock(t,e,this._invSubKeys)},_doCryptBlock:function(t,r,n){var o=this;this._lBlock=t[r],this._rBlock=t[r+1],e.call(this,4,252645135),e.call(this,16,65535),i.call(this,2,858993459),i.call(this,8,16711935),e.call(this,1,1431655765);for(var s=0;s<16;s++){for(var a=n[s],c=o._lBlock,h=o._rBlock,p=0,f=0;f<8;f++)p|=u[f][((h^a[f])&l[f])>>>0];o._lBlock=h,o._rBlock=c^p}var d=this._lBlock;this._lBlock=this._rBlock,this._rBlock=d,e.call(this,1,1431655765),i.call(this,8,16711935),i.call(this,2,858993459),e.call(this,16,65535),e.call(this,4,252645135),t[r]=this._lBlock,t[r+1]=this._rBlock},keySize:2,ivSize:2,blockSize:2});r.DES=s._createHelper(f);var d=a.TripleDES=s.extend({_doReset:function(){var t=this._key,e=t.words;this._des1=f.createEncryptor(o.create(e.slice(0,2))),this._des2=f.createEncryptor(o.create(e.slice(2,4))),this._des3=f.createEncryptor(o.create(e.slice(4,6)))},encryptBlock:function(t,e){this._des1.encryptBlock(t,e),this._des2.decryptBlock(t,e),this._des3.encryptBlock(t,e)},decryptBlock:function(t,e){this._des3.decryptBlock(t,e),this._des2.encryptBlock(t,e),this._des1.decryptBlock(t,e)},keySize:6,ivSize:2,blockSize:2});r.TripleDES=s._createHelper(d)}(),t.TripleDES})}),rc4=createCommonjsModule(function(t,e){!function(i,r,n){"object"==typeof e?t.exports=e=r(core,encBase64,md5,evpkdf,cipherCore):r(i.CryptoJS)}(commonjsGlobal,function(t){return function(){function e(){for(var t=this._S,e=this._i,i=this._j,r=0,n=0;n<4;n++){e=(e+1)%256,i=(i+t[e])%256;var o=t[e];t[e]=t[i],t[i]=o,r|=t[(t[e]+t[i])%256]<<24-8*n}return this._i=e,this._j=i,r}var i=t,r=i.lib,n=r.StreamCipher,o=i.algo,s=o.RC4=n.extend({_doReset:function(){for(var t=this._key,e=t.words,i=t.sigBytes,r=this._S=[],n=0;n<256;n++)r[n]=n;for(var n=0,o=0;n<256;n++){var s=n%i,a=e[s>>>2]>>>24-s%4*8&255;o=(o+r[n]+a)%256;var c=r[n];r[n]=r[o],r[o]=c}this._i=this._j=0},_doProcessBlock:function(t,i){t[i]^=e.call(this)},keySize:8,ivSize:0});i.RC4=n._createHelper(s);var a=o.RC4Drop=s.extend({cfg:s.cfg.extend({drop:192}),_doReset:function(){var t=this;s._doReset.call(this);for(var i=this.cfg.drop;i>0;i--)e.call(t)}});i.RC4Drop=n._createHelper(a)}(),t.RC4})}),rabbit=createCommonjsModule(function(t,e){!function(i,r,n){"object"==typeof e?t.exports=e=r(core,encBase64,md5,evpkdf,cipherCore):r(i.CryptoJS)}(commonjsGlobal,function(t){return function(){function e(){for(var t=this._X,e=this._C,i=0;i<8;i++)a[i]=e[i];e[0]=e[0]+1295307597+this._b|0,e[1]=e[1]+3545052371+(e[0]>>>0<a[0]>>>0?1:0)|0,e[2]=e[2]+886263092+(e[1]>>>0<a[1]>>>0?1:0)|0,e[3]=e[3]+1295307597+(e[2]>>>0<a[2]>>>0?1:0)|0,e[4]=e[4]+3545052371+(e[3]>>>0<a[3]>>>0?1:0)|0,e[5]=e[5]+886263092+(e[4]>>>0<a[4]>>>0?1:0)|0,e[6]=e[6]+1295307597+(e[5]>>>0<a[5]>>>0?1:0)|0,e[7]=e[7]+3545052371+(e[6]>>>0<a[6]>>>0?1:0)|0,this._b=e[7]>>>0<a[7]>>>0?1:0;for(var i=0;i<8;i++){var r=t[i]+e[i],n=65535&r,o=r>>>16,s=((n*n>>>17)+n*o>>>15)+o*o,h=((4294901760&r)*r|0)+((65535&r)*r|0);c[i]=s^h}t[0]=c[0]+(c[7]<<16|c[7]>>>16)+(c[6]<<16|c[6]>>>16)|0,t[1]=c[1]+(c[0]<<8|c[0]>>>24)+c[7]|0,t[2]=c[2]+(c[1]<<16|c[1]>>>16)+(c[0]<<16|c[0]>>>16)|0,t[3]=c[3]+(c[2]<<8|c[2]>>>24)+c[1]|0,t[4]=c[4]+(c[3]<<16|c[3]>>>16)+(c[2]<<16|c[2]>>>16)|0,t[5]=c[5]+(c[4]<<8|c[4]>>>24)+c[3]|0,t[6]=c[6]+(c[5]<<16|c[5]>>>16)+(c[4]<<16|c[4]>>>16)|0,t[7]=c[7]+(c[6]<<8|c[6]>>>24)+c[5]|0}var i=t,r=i.lib,n=r.StreamCipher,o=i.algo,s=[],a=[],c=[],h=o.Rabbit=n.extend({_doReset:function(){for(var t=this,i=this._key.words,r=this.cfg.iv,n=0;n<4;n++)i[n]=16711935&(i[n]<<8|i[n]>>>24)|4278255360&(i[n]<<24|i[n]>>>8);var o=this._X=[i[0],i[3]<<16|i[2]>>>16,i[1],i[0]<<16|i[3]>>>16,i[2],i[1]<<16|i[0]>>>16,i[3],i[2]<<16|i[1]>>>16],s=this._C=[i[2]<<16|i[2]>>>16,4294901760&i[0]|65535&i[1],i[3]<<16|i[3]>>>16,4294901760&i[1]|65535&i[2],i[0]<<16|i[0]>>>16,4294901760&i[2]|65535&i[3],i[1]<<16|i[1]>>>16,4294901760&i[3]|65535&i[0]];this._b=0;for(var n=0;n<4;n++)e.call(t);for(var n=0;n<8;n++)s[n]^=o[n+4&7];if(r){var a=r.words,c=a[0],h=a[1],p=16711935&(c<<8|c>>>24)|4278255360&(c<<24|c>>>8),u=16711935&(h<<8|h>>>24)|4278255360&(h<<24|h>>>8),l=p>>>16|4294901760&u,f=u<<16|65535&p;s[0]^=p,s[1]^=l,s[2]^=u,s[3]^=f,s[4]^=p,s[5]^=l,s[6]^=u,s[7]^=f;for(var n=0;n<4;n++)e.call(t)}},_doProcessBlock:function(t,i){var r=this._X;e.call(this),s[0]=r[0]^r[5]>>>16^r[3]<<16,s[1]=r[2]^r[7]>>>16^r[5]<<16,s[2]=r[4]^r[1]>>>16^r[7]<<16,s[3]=r[6]^r[3]>>>16^r[1]<<16;for(var n=0;n<4;n++)s[n]=16711935&(s[n]<<8|s[n]>>>24)|4278255360&(s[n]<<24|s[n]>>>8),t[i+n]^=s[n]},blockSize:4,ivSize:2});i.Rabbit=n._createHelper(h)}(),t.Rabbit})}),rabbitLegacy=createCommonjsModule(function(t,e){!function(i,r,n){"object"==typeof e?t.exports=e=r(core,encBase64,md5,evpkdf,cipherCore):r(i.CryptoJS)}(commonjsGlobal,function(t){return function(){function e(){for(var t=this._X,e=this._C,i=0;i<8;i++)a[i]=e[i];e[0]=e[0]+1295307597+this._b|0,e[1]=e[1]+3545052371+(e[0]>>>0<a[0]>>>0?1:0)|0,e[2]=e[2]+886263092+(e[1]>>>0<a[1]>>>0?1:0)|0,e[3]=e[3]+1295307597+(e[2]>>>0<a[2]>>>0?1:0)|0,e[4]=e[4]+3545052371+(e[3]>>>0<a[3]>>>0?1:0)|0,e[5]=e[5]+886263092+(e[4]>>>0<a[4]>>>0?1:0)|0,e[6]=e[6]+1295307597+(e[5]>>>0<a[5]>>>0?1:0)|0,e[7]=e[7]+3545052371+(e[6]>>>0<a[6]>>>0?1:0)|0,this._b=e[7]>>>0<a[7]>>>0?1:0;for(var i=0;i<8;i++){var r=t[i]+e[i],n=65535&r,o=r>>>16,s=((n*n>>>17)+n*o>>>15)+o*o,h=((4294901760&r)*r|0)+((65535&r)*r|0);c[i]=s^h}t[0]=c[0]+(c[7]<<16|c[7]>>>16)+(c[6]<<16|c[6]>>>16)|0,t[1]=c[1]+(c[0]<<8|c[0]>>>24)+c[7]|0,t[2]=c[2]+(c[1]<<16|c[1]>>>16)+(c[0]<<16|c[0]>>>16)|0,t[3]=c[3]+(c[2]<<8|c[2]>>>24)+c[1]|0,t[4]=c[4]+(c[3]<<16|c[3]>>>16)+(c[2]<<16|c[2]>>>16)|0,
t[5]=c[5]+(c[4]<<8|c[4]>>>24)+c[3]|0,t[6]=c[6]+(c[5]<<16|c[5]>>>16)+(c[4]<<16|c[4]>>>16)|0,t[7]=c[7]+(c[6]<<8|c[6]>>>24)+c[5]|0}var i=t,r=i.lib,n=r.StreamCipher,o=i.algo,s=[],a=[],c=[],h=o.RabbitLegacy=n.extend({_doReset:function(){var t=this,i=this._key.words,r=this.cfg.iv,n=this._X=[i[0],i[3]<<16|i[2]>>>16,i[1],i[0]<<16|i[3]>>>16,i[2],i[1]<<16|i[0]>>>16,i[3],i[2]<<16|i[1]>>>16],o=this._C=[i[2]<<16|i[2]>>>16,4294901760&i[0]|65535&i[1],i[3]<<16|i[3]>>>16,4294901760&i[1]|65535&i[2],i[0]<<16|i[0]>>>16,4294901760&i[2]|65535&i[3],i[1]<<16|i[1]>>>16,4294901760&i[3]|65535&i[0]];this._b=0;for(var s=0;s<4;s++)e.call(t);for(var s=0;s<8;s++)o[s]^=n[s+4&7];if(r){var a=r.words,c=a[0],h=a[1],p=16711935&(c<<8|c>>>24)|4278255360&(c<<24|c>>>8),u=16711935&(h<<8|h>>>24)|4278255360&(h<<24|h>>>8),l=p>>>16|4294901760&u,f=u<<16|65535&p;o[0]^=p,o[1]^=l,o[2]^=u,o[3]^=f,o[4]^=p,o[5]^=l,o[6]^=u,o[7]^=f;for(var s=0;s<4;s++)e.call(t)}},_doProcessBlock:function(t,i){var r=this._X;e.call(this),s[0]=r[0]^r[5]>>>16^r[3]<<16,s[1]=r[2]^r[7]>>>16^r[5]<<16,s[2]=r[4]^r[1]>>>16^r[7]<<16,s[3]=r[6]^r[3]>>>16^r[1]<<16;for(var n=0;n<4;n++)s[n]=16711935&(s[n]<<8|s[n]>>>24)|4278255360&(s[n]<<24|s[n]>>>8),t[i+n]^=s[n]},blockSize:4,ivSize:2});i.RabbitLegacy=n._createHelper(h)}(),t.RabbitLegacy})}),index=createCommonjsModule(function(t,e){!function(i,r,n){"object"==typeof e?t.exports=e=r(core,x64Core,libTypedarrays,encUtf16,encBase64,md5,sha1,sha256,sha224,sha512,sha384,sha3,ripemd160,hmac,pbkdf2,evpkdf,cipherCore,modeCfb,modeCtr,modeCtrGladman,modeOfb,modeEcb,padAnsix923,padIso10126,padIso97971,padZeropadding,padNopadding,formatHex,aes,tripledes,rc4,rabbit,rabbitLegacy):i.CryptoJS=r(i.CryptoJS)}(commonjsGlobal,function(t){return t})});readonlyProperty(Crypto.prototype,"name","crypto"),Crypto.prototype.encrypt=function(t,e){var i="";if(t){var r=t.params||{};try{switch(t.mode){case"MD5":i=index.MD5(t.source).toString(),"16"===r.length&&(i=i.substr(8,16));break;case"SHA1":i=index.SHA1(t.source).toString();break;case"SHA256":i=index.SHA256(t.source).toString();break;case"3DES":var n=index.enc.Utf8.parse(r.secretKey),o=index.TripleDES.encrypt(t.source,n,{mode:index.mode.ECB,padding:index.pad.Pkcs7});i=o.toString();break;case"AES":var s=index.enc.Utf8.parse(r.secretKey),a=index.AES.encrypt(t.source,s,{mode:index.mode.CBC,padding:index.pad.Pkcs7});i=a.toString();break;case"RSA":var c=new RSAKey$1;c.setPublic(r.secretKeyN,r.secretKeyE),i=c.encrypt(t.source);break;case"SM2":var h=SM2.CryptoJS.enc.Utf8.parse(t.source),p=r.cipherMode||SM2.SM2CipherMode.C1C3C2,u=new SM2.SM2Cipher(p),l=u.CreatePoint(r.secretKeyX,r.secretKeyY),f=u.GetWords(h.toString());i=u.Encrypt(l,f)}"function"==typeof e&&e(null,i)}catch(t){"function"==typeof e&&e({code:"",message:t.message||"\u52a0\u5bc6\u5931\u8d25"})}}else"function"==typeof e&&e({code:"",message:"\u53c2\u6570\u9519\u8bef"});return this},Crypto.prototype.decrypt=function(t,e){var i="";if(t&&t.params){if("3DES"===t.mode&&t.params.secretKey){var r=index.enc.Utf8.parse(t.params.secretKey),n=index.TripleDES.decrypt(t.source,r,{mode:index.mode.ECB,padding:index.pad.Pkcs7});i=index.enc.Utf8.stringify(n)}"function"==typeof e&&e(null,i)}else"function"==typeof e&&e({code:"",message:"options\u4e3a\u5fc5\u586b\u53c2\u6570"},null);return this},readonlyProperty(Device.prototype,"name","device"),Device.prototype.getInfo=function(t){t=t||function(){};var e={deviceId:"uuid123",deviceName:"my iPhone 6s",deviceModel:"iPhone 6s",osName:"IOS",osVersion:"9.3.2",appVersion:"1.1.2"};return t(null,e),this},readonlyProperty(Header.prototype,"name","header"),Header.prototype._injectStyle=function(){var t="#aladdin-header-body{position:absolute;top:56px;left:0;right:0;bottom:0;overflow:auto}#aladdin-header-bar{position:absolute;top:0;left:0;width:100%;z-index:1000;height:56px;box-sizing:border-box;background-color:#2196f3}.aladdin-header-cell{position:absolute;height:100%;vertical-align:middle;box-sizing:border-box}.aladdin-header-left-btn{padding:10px;text-align:center;left:0;top:0;color:#fff;font-size:16px}.aladdin-header-left-icon{width:12px;height:24px;margin-top:6px;float:left}.aladdin-header-left-text{height:36px;line-height:36px;padding-left:5px;float:left}.aladdin-header-right-btn{padding:10px;text-align:center;right:0;top:0;color:#fff;font-size:16px}.aladdin-header-right-icon{width:24px;height:24px;margin-top:6px}.aladdin-header-right-text{height:36px;line-height:36px}.aladdin-header-title{left:50%;top:0;width:180px;margin-left:-90px;white-space:nowrap;text-overflow:ellipsis;overflow:hidden;z-index:1000;font-size:20px;text-align:center;line-height:56px;color:#fff}",e=t,i=document.createElement("style");i.setAttribute("type","text/css"),i.styleSheet?i.styleSheet.cssText+=e:document.getBoxObjectFor?i.innerHTML+=e:i.appendChild(document.createTextNode(e)),document.head.appendChild(i)},Header.prototype._display=function(){var t=document.getElementById("aladdin-header-bar");if(!t){var e=window.sessionStorage.getItem("aladdin-header-opts");if(e)try{e=JSON.parse(e),e.title||(e.title=document.title)}catch(t){e={}}this.config(e)}},Header.prototype.config=function(t,e){var i=this._getHeader();return t||(t={}),this._setBackground(i,t),this._setTitle(i,t),this._setLeftBtn(i,t),this._setRightBtn(i,t),"function"==typeof e&&e(),this};var headerNavHtml='<div class="aladdin-header-bar"><div class="aladdin-header-cell aladdin-header-left-btn"><img class="aladdin-header-left-icon"/><span class="aladdin-header-left-text"></span></div><div class="aladdin-header-cell aladdin-header-title"></div><div class="aladdin-header-cell aladdin-header-right-btn"><img class="aladdin-header-right-icon"/><span class="aladdin-header-right-text"></span></div></div';Header.prototype._getHeader=function(){var t=document.getElementById("aladdin-header-bar");if(!t){var e=document.createElement("div");e.id="aladdin-header-body",document.body.appendChild(e);for(var i=document.body.childNodes,r=i.length-1;r>=0;r--){var n=i[r];n!==e&&"SCRIPT"!==n.nodeName&&e.insertBefore(n,e.childNodes[0])}t=document.createElement("div"),t.id="aladdin-header-bar",t.innerHTML=headerNavHtml,document.body.style.overflow="hidden",document.body.appendChild(t)}return t},Header.prototype._setBackground=function(t,e){t.style.backgroundColor=e.backgroundColor||""},Header.prototype._setTitle=function(t,e){var i=t.getElementsByClassName("aladdin-header-title")[0];return e.title?(i.style.display="block",i.style.color=e.color||"",i.style.fontSize=e.fontSize||"",void(i.innerText=e.title)):void(i.style.display="none")},Header.prototype._setLeftBtn=function(t,e){var i=this,r=t.getElementsByClassName("aladdin-header-left-btn")[0];if("undefined"!=typeof e.leftButtonVisible&&!e.leftButtonVisible)return void(r.style.display="none");r.style.display="block",r.style.backgroundColor=e.leftButtonBackgroundColor||"";var n=r.getElementsByClassName("aladdin-header-left-icon")[0];e.leftButtonIcon?(n.style.display="block",n.src=e.leftButtonIcon):(n.style.display="none",n.src="");var o=r.getElementsByClassName("aladdin-header-left-text")[0],s=e.leftButtonText;"string"!=typeof s&&(s=e.leftButtonIcon?"":"\u8fd4\u56de"),o.innerText=s,o.style.fontSize=e.leftButtonFontSize+"px"||"",o.style.color=e.leftButtonTextColor||"",this._handleLeftBtn&&r.removeEventListener("click",this._handleLeftBtn),this._handleLeftBtn=function(){"function"==typeof e.leftButtonCallback?e.leftButtonCallback():i.aladdin&&i.aladdin.navigator&&i.aladdin.navigator.back()},r.addEventListener("click",this._handleLeftBtn)},Header.prototype._setRightBtn=function(t,e){var i=t.getElementsByClassName("aladdin-header-right-btn")[0];if(!e.rightButtonVisible)return void(i.style.display="none");i.style.display="block",i.style.backgroundColor=e.rightButtonBackgroundColor||"";var r=i.getElementsByClassName("aladdin-header-right-icon")[0],n=i.getElementsByClassName("aladdin-header-right-text")[0];e.rightButtonIcon?(r.style.display="block",r.src=e.rightButtonIcon,n.style.display="none"):(r.style.display="none",r.src="",n.style.display="block",n.innerText=e.rightButtonText||"\u5173\u95ed",n.style.fontSize=e.rightButtonFontSize+"px"||"",n.style.color=e.rightButtonTextColor||""),this._handlRightBtn&&i.removeEventListener("click",this._handlRightBtn),this._handlRightBtn=function(){"function"==typeof e.rightButtonCallback?e.rightButtonCallback():aladdin.navigator&&aladdin.navigator.backTop()},i.addEventListener("click",this._handlRightBtn)},readonlyProperty(Http.prototype,"name","http"),Http.prototype.request=function(t,e){t=filterOpts(t);var i=new XMLHttpRequest;i.timeout=t.timeout,i.onreadystatechange=function(){if(i.readyState===XMLHttpRequest.DONE)if(200===i.status){var t={status:i.status,statusText:i.statusText,headers:i.getAllResponseHeaders(),body:i.responseText,text:function(){return i.responseText},json:function(){return JSON.parse(i.responseText)}};e&&e(null,t)}else e&&e({code:i.status,message:"\u8bf7\u6c42\u7f51\u7edc\u5931\u8d25"})},i.open(t.method,t.url,!0);var r=t.xhrFields||{};for(var n in r)i[n]=r[n];for(var o in t.headers)t.headers.hasOwnProperty(o)&&i.setRequestHeader(o,t.headers[o]);return i.send(t.body),this},Http.prototype.upload=function(t,e){if("function"!=typeof e)return this;if(t=t||{},!t.url)return e({code:1005,message:"url\u662f\u5fc5\u987b\u7684"}),this;if(!/^data:image.+?base64,/.test(t.filePath))return e({code:1005,message:"\u6682\u4e0d\u652f\u6301\u8be5filePath\u6570\u636e"}),this;t.url=join(t.url,t.qs);var i=t.filePath.split(","),r=/image\/jpeg/.test(i[0])?"image/jpeg":"image/png",n=i[1];n=window.atob(n);for(var o=new Uint8Array(n.length),s=0;s<n.length;s++)o[s]=n.charCodeAt(s);var a=new Blob([o],{type:r}),c=new FormData;if(c.append(t.fileDataName||"file",a),c.processData=!1,c.contentType=!1,"object"==typeof t.body)for(var h in t.body)c.append(h,t.body[h]);var p=new XMLHttpRequest;return p.open("post",t.url,!0),p.send(c),p.timeout=t.timeout,p.onreadystatechange=function(){if(p.readyState===XMLHttpRequest.DONE)if(200===p.status){var i={status:p.status,statusText:p.statusText,headers:p.getAllResponseHeaders(),body:p.responseText};"function"==typeof t.onProcess&&t.onProcess(null,1),e&&e(null,i)}else e({code:p.status,message:"\u8bf7\u6c42\u7f51\u7edc\u5931\u8d25"})},this},Http.prototype.download=function(t,e){if(t=t||{},!("string"==typeof t.url||t.url instanceof String))return"function"==typeof e&&e({code:1005,message:"url\u662f\u5fc5\u987b\u7684"}),this;var i=document.createElement("iframe");i.style="opacity:0;width:0;height:0;position: absolute;";var r=document.createElement("a");r.setAttribute("href",t.url);var n=t.url.split("/");r.setAttribute("download",n[n.length-1]),i.appendChild(r),document.body.appendChild(i);var o=document.createEvent("MouseEvents");return o.initEvent("click",!0,!0),r.dispatchEvent(o),setTimeout(function(){i.remove()},500),"function"==typeof t.onProcess&&t.onProcess(null,1),"function"==typeof e&&e(null,{filePath:""}),this},Http.prototype.setCookie=function(t,e){if(t=t||{},"function"!=typeof e&&(e=function(){}),!t.key)return e({code:1005,message:"key\u662f\u5fc5\u987b\u7684"}),this;var i=t.key+"="+encodeURIComponent(t.value)+";";return t.path&&(i+="path="+t.path+";"),t.domain&&(i+="domain="+t.domain+";"),t.expires&&(i+="expires="+new Date(Date.now()+t.expires).toUTCString()+";"),document.cookie=i,e(null,{}),this},Http.prototype.getCookie=function(t,e){if("function"!=typeof e)return this;if(!t.key)return e({code:1005,message:"key\u662f\u5fc5\u987b\u7684"}),this;var i="";if(document.cookie.length>0){var r=document.cookie.indexOf(t.key+"=");if(r!==-1){r=r+t.key.length+1;var n=document.cookie.indexOf(";",r);n===-1&&(n=document.cookie.length),i=decodeURIComponent(document.cookie.substring(r,n))}}return e(null,i),this},Http.prototype.removeCookie=function(t,e){return t=t||{},"function"!=typeof e&&(e=function(){}),t.key?(document.cookie=t.key+"=;",e(null,{}),this):(e({code:1005,message:"key\u662f\u5fc5\u987b\u7684"}),this)};var toString=Object.prototype.toString,__stringfy=function(t){return"string"!=typeof t&&("[object Null]"===toString.call(t)||"undefined"==typeof t?t+="":t=t.toString()),t};readonlyProperty(LocalStorage.prototype,"name","localStorage"),LocalStorage.prototype.getItem=function(t,e,i,r){if("function"!=typeof r&&(r=i,i=e),"function"!=typeof r&&(r=e,i=e=void 0),"function"!=typeof r)return this;"string"!=typeof i&&(i="3DES"),"boolean"!=typeof e&&(e=!1),t=__stringfy(t);var n=window.localStorage.getItem(t);return n&&this._aladdin.crypto?this._aladdin.crypto.decrypt({mode:"3DES",source:n,params:{format:16,secretKey:this._secretKey}},function(t,e){if(t)r&&r(t);else{var i=JSON.parse(e);r&&r(null,i)}}):("string"==typeof n&&(n=JSON.parse(n)),r&&r(null,n)),this},LocalStorage.prototype.setItem=function(t,e,i,r,n){return"boolean"!=typeof i&&(n=r,r=i,i=!1),"string"!=typeof r&&(n=r,r="3DES"),"function"!=typeof n&&(n=void 0),t=__stringfy(t),e=JSON.stringify(e),this._aladdin.crypto?this._aladdin.crypto.encrypt({mode:"3DES",source:e,params:{secretKey:this._secretKey,format:16}},function(e,i){e?n&&n(e):(window.localStorage.setItem(t,i),n&&n(null))}):(window.localStorage.setItem(t,e),n&&n(null)),this},LocalStorage.prototype.removeItem=function(t,e,i){return"boolean"!=typeof e&&(i=e,e=!1),"function"!=typeof i&&(i=void 0),t=__stringfy(t),window.localStorage.removeItem(t),i&&i(null),this},LocalStorage.prototype.clear=function(t){return window.localStorage.clear(),"function"==typeof t&&t(null),this};var PAGE_HISTORY_STACK_KEY="PAGE_HISTORY_STACK_KEY",historyStack=window.sessionStorage.getItem(PAGE_HISTORY_STACK_KEY);historyStack=historyStack?JSON.parse(historyStack):[];var nativeHistory={back:window.history.back.bind(window.history),go:window.history.go.bind(window.history),forward:window.history.forward.bind(window.history)};readonlyProperty(Navigator.prototype,"name","navigator"),Navigator.prototype.forward=function(t,e){return"function"==typeof e&&e(),t&&"object"==typeof t&&("string"==typeof t.title&&window.sessionStorage.setItem("aladdin-header-opts",JSON.stringify({title:t.title})),"string"==typeof t.url&&(t.url=join(t.url,t.qs),window.location.href=t.url)),this},Navigator.prototype.back=function(t,e){return"function"==typeof e&&e(),t&&"string"==typeof t.title&&window.sessionStorage.setItem("aladdin-header-opts",JSON.stringify({title:t.title})),nativeHistory.back(),this},Navigator.prototype.backTop=function(t,e){var i=historyStack.length;historyStack=[],window.sessionStorage.setItem(PAGE_HISTORY_STACK_KEY,JSON.stringify(historyStack)),nativeHistory.go(parseInt("-"+(i-1)))},readonlyProperty(Network.prototype,"name","network"),Network.prototype.getInfo=function(t){return"function"==typeof t&&t(null,{type:"WIFI",isAvailable:!0}),this};var toString$1=Object.prototype.toString,__stringfy$1=function(t){return"string"!=typeof t&&("[object Null]"===toString$1.call(t)||"undefined"==typeof t?t+="":t=t.toString()),t};readonlyProperty(SessionStorage.prototype,"name","sessionStorage"),SessionStorage.prototype.getItem=function(t,e,i,r){if("function"!=typeof r&&(r=i,i=e),"function"!=typeof r&&(r=e,i=e=void 0),"function"!=typeof r)return this;"string"!=typeof i&&(i="3DES"),"boolean"!=typeof e&&(e=!1),t=__stringfy$1(t);var n=window.sessionStorage.getItem(t);return n&&this._aladdin.crypto?this._aladdin.crypto.decrypt({mode:"3DES",source:n,params:{format:16,secretKey:this._secretKey}},function(t,e){if(t)r&&r(t);else{var i=JSON.parse(e);r&&r(null,i)}}):("string"==typeof n&&(n=JSON.parse(n)),r&&r(null,n)),this},SessionStorage.prototype.setItem=function(t,e,i,r,n){return"boolean"!=typeof i&&(n=r,r=i,i=!1),"string"!=typeof r&&(n=r,r="3DES"),"function"!=typeof n&&(n=void 0),t=__stringfy$1(t),e=JSON.stringify(e),this._aladdin.crypto?this._aladdin.crypto.encrypt({mode:"3DES",source:e,params:{secretKey:this._secretKey,format:16}},function(e,i){e?n&&n(e):(window.sessionStorage.setItem(t,i),n&&n(null))}):(window.sessionStorage.setItem(t,e),n&&n(null)),this},SessionStorage.prototype.removeItem=function(t,e,i){return"boolean"!=typeof e&&(i=e,e=!1),"function"!=typeof i&&(i=void 0),t=__stringfy$1(t),window.sessionStorage.removeItem(t),i&&i(null),this},SessionStorage.prototype.clear=function(t){return window.sessionStorage.clear(),"function"==typeof t&&t(null),this},readonlyProperty(Page.prototype,"name","page"),Page.prototype.bounce=function(t,e){return"function"==typeof e&&e(),this},Page.prototype.swipe=function(t,e){return"function"==typeof e&&e(),this},Page.prototype.config=function(t,e){return"function"==typeof e&&e(),this},Aladdin.prototype.broadcast=function(t,e,i,r){!r&&i&&(r=i),"function"==typeof r&&r()};var aladdin$1=new Aladdin;return aladdin$1.env=env,aladdin$1.use(Crypto).use(Device).use(Header).use(Http).use(LocalStorage).use(Navigator).use(Network).use(SessionStorage).use(Page),installGlobalApi(aladdin$1),aladdin$1});

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2), __webpack_require__(0)))

/***/ }),
/* 1 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 2 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

/*! Bow.js v1.0.8 (c) 2017 Bow */
!function(t,e){ true?module.exports=e(__webpack_require__(0)):"function"==typeof define&&define.amd?define(["aladdin"],e):t.bow=e(t.aladdin)}(this,function(t){"use strict";function e(t){this._adapter=t,this.env=t.env}function o(t){this._adapter=t,this._bow=null}function r(){}function n(){}function i(){}function a(){}function s(){}function u(){}function p(){}function l(t){}function c(){}function h(t){this._adapter=t}function f(t){this._adapter=t,this._bow=null}function d(){}function g(){}function y(t){this._adapter=t,this._bow=null}function m(t){this._adapter=t,this._bow=null,this._retry=0}function b(t){this._adapter=t,this._bow=null}function w(t){this._adapter=t,this._bow=null}function v(t){this._adapter=t,this._bow=null}function _(t){this._adapter=t,this._bow=null}function C(t){this._adapter=t,this._bow=null}function P(t){this._adapter=t,this._bow=null}function k(t){this._adapter=t,this._bow=null}function A(t){this._adapter=t,this._bow=null}function E(t){this._adapter=t,this._bow=null}function T(){this._uuid="koudai-auth-key-0123456789"}function D(t){this._adapter=t,this._bow=null}function S(t){this._adapter=t,this._bow=null}function I(t){this._adapter=t,this._bow=null}function L(t){this._adapter=t,this._bow=null}function B(t){this._adapter=t,this._bow=null}function O(t){this._adapter=t,this._bow=null}function M(t){this._adapter=t,this._bow=null}function N(t){this._adapter=t,this._bow=null}function R(t){this._adapter=t,this._bow=null,document.body.appendChild(Q)}function x(){var t=document.createElement("DIV"),e=t.style;return e.display="none",e.position="fixed",e.bottom=0,e.width="100%",e.backgroundColor="#fff",e.borderTop="1px solid #eee",e.padding="10px",e.boxSizing="border-box",t}function j(){return document.createElement("DIV")}function G(t,e,o){var r=document.createElement("DIV");return r.style.height="1em",r.style.textAlign="center",e.style.float="right",o.style.float="left",r.appendChild(e),r.appendChild(t),r.appendChild(o),r}function H(){var t=document.createElement("SPAN");return t}function U(t,e){var o=document.createElement("BUTTON");return o.innerHTML=t,o.style.color="#666","function"==typeof e&&o.addEventListener("touchend",e,!1),o}function q(){Q.style.display="none"}function K(t){this._adapter=t,this._bow=null}function X(t){this._adapter=t,this._bow=null}t="default"in t?t.default:t,Object.defineProperty(e.prototype,"name",{value:"bow",writable:!1}),e.prototype.use=function(t){if("function"==typeof t){var e=t.prototype.name||t.prototype.name.toLowerCase();this._adapter.use(t),this._adapter[e]._bow=this,this[e.substr(this.name.length)]=this._adapter[e]}return this},e.prototype.call=function(){return this._adapter.call.apply(this._adapter,Array.prototype.splice.call(arguments,0))},e.prototype.on=function(){return this._adapter.on.apply(this._adapter,Array.prototype.splice.call(arguments,0))},e.prototype.once=function(){return this._adapter.once.apply(this._adapter,Array.prototype.splice.call(arguments,0))},e.prototype.off=function(){return this._adapter.on.apply(this._adapter,Array.prototype.splice.call(arguments,0))},e.prototype.broadcast=function(){return this._adapter.broadcast.apply(this._adapter,Array.prototype.splice.call(arguments,0))},Object.defineProperty(o.prototype,"name",{value:"bowdevice",writable:!1}),o.prototype.getInfo=function(t){return this._adapter.device.getInfo(t),this},Object.defineProperty(r.prototype,"name",{value:"bowalipborad",writable:!1}),r.prototype.copy=function(t,e){return t=t||{},console.log("[alipBorad.copy] \u9ed8\u8ba4\u64cd\u4f5c\u6210\u529f"),e(),this},r.prototype.clear=function(t){return console.log("[alipBorad.clear] \u9ed8\u8ba4\u64cd\u4f5c\u6210\u529f"),t(),this},Object.defineProperty(n.prototype,"name",{value:"bowapplication",writable:!1}),n.prototype.getEnvironment=function(t){var e={config:{},domain:"https://bank.pingan.com.cn/smp",mode:"prd",version:"3.0.0"};return"function"==typeof t&&t(null,e),this},n.prototype.getServerTime=function(t){return t(null,{serverTime:(new Date).getTime()+""}),this},n.prototype.exit=function(t){return console.log("application.exit"),t(),this},n.prototype.grade=function(t,e){return t=t||{},console.log("application.grade"),e(),this},n.prototype.upgrade=function(t,e){return t=t||{},console.log("application.upgrade"),e(),this},n.prototype.service=function(t){return t(),this},n.prototype.modifyHint=function(t,e){return t=t||{},console.log("application.modifyHint"),e(),this},n.prototype.route=function(t,e){return t=t||{},console.log("application.route"),e(),this},Object.defineProperty(i.prototype,"name",{value:"bowaudio",writable:!1}),i.prototype.play=function(t,e){console.log("audio.play"),t=t||{},e="function"==typeof e?e:function(){};var o=this.audioElem;if("string"!=typeof t.fileName){if(!o)return void e({code:"304XX"});t.fileName=o.src}return o&&o.src==t.fileName?o.play():(o&&this.stop(),o=this.audioElem=document.createElement("audio"),o.src=t.fileName,o.play()),o.onplaying=function(){o.onplaying=null,e()},o.onerror=function(){o.onerror=null,e({code:"304XX"})},this},i.prototype.stop=function(t){console.log("audio.stop"),t="function"==typeof t?t:function(){};var e=this.audioElem;return e&&(e.pause(),e.onerror=null,e.onplaying=null,e.src=""),t({code:e?null:"304XX"}),this},i.prototype.pause=function(t){console.log("audio.pause"),t="function"==typeof t?t:function(){};var e=this.audioElem;return e?(e.onpause=function(){e.onpause=null,t()},e.onerror=function(){e.onerror=null,t({code:"304XX"})},e.pause(),this):void t({code:"304XX"})},Object.defineProperty(a.prototype,"name",{value:"bowfooter",writable:!1}),a.prototype.show=function(t,e){return t=t||{},console.log("footer.show"),e(),this},Object.defineProperty(s.prototype,"name",{value:"bowphone",writable:!1}),s.prototype.call=function(t,e){console.log("phone.call");var o=document.createElement("a");o.setAttribute("href","tel:+"+t.mobileNo),o.style.cssText="opacity:0;width: 1px;height: 1px;position: absolute;",document.body.appendChild(o);var r=document.createEvent("MouseEvents");return r.initEvent("click",!0,!0),o.dispatchEvent(r),setTimeout(function(){o.remove(),e(null)},0),"function"==typeof e&&e(),this},s.prototype.selectContact=function(t){return console.log("[phone.selectContact] \u9ed8\u8ba4\u8fd4\u56de\u56fa\u5b9a\u6570\u636e"),"function"==typeof t&&t(null,{contactName:"\u79fb\u52a8",contactMobile:"10086"}),this},s.prototype.getMobileNo=function(t){return console.log("[phone.getMobileNo] \u9ed8\u8ba4\u8fd4\u56de\u56fa\u5b9a\u6570\u636e"),t(null,["10086","10010"]),this};var V;!function(){function t(t){var e=this;this.mode=p.MODE_8BIT_BYTE,this.data=t,this.parsedData=[];for(var o=0,r=this.data.length;o<r;o++){var n=[],i=e.data.charCodeAt(o);i>65536?(n[0]=240|(1835008&i)>>>18,n[1]=128|(258048&i)>>>12,n[2]=128|(4032&i)>>>6,n[3]=128|63&i):i>2048?(n[0]=224|(61440&i)>>>12,n[1]=128|(4032&i)>>>6,n[2]=128|63&i):i>128?(n[0]=192|(1984&i)>>>6,n[1]=128|63&i):n[0]=i,e.parsedData.push(n)}this.parsedData=Array.prototype.concat.apply([],this.parsedData),this.parsedData.length!=this.data.length&&(this.parsedData.unshift(191),this.parsedData.unshift(187),this.parsedData.unshift(239))}function e(t,e){this.typeNumber=t,this.errorCorrectLevel=e,this.modules=null,this.moduleCount=0,this.dataCache=null,this.dataList=[]}function o(t,e){var o=this;if(void 0==t.length)throw new Error(t.length+"/"+e);for(var r=0;r<t.length&&0==t[r];)r++;this.num=new Array(t.length-r+e);for(var n=0;n<t.length-r;n++)o.num[n]=t[n+r]}function r(t,e){this.totalCount=t,this.dataCount=e}function n(){this.buffer=[],this.length=0}function i(){return"undefined"!=typeof CanvasRenderingContext2D}function a(){var t=!1,e=navigator.userAgent;if(/android/i.test(e)){t=!0;var o=e.toString().match(/android ([0-9]\.[0-9])/i);o&&o[1]&&(t=parseFloat(o[1]))}return t}function s(t,e){for(var o=1,r=u(t),n=0,i=g.length;n<=i;n++){var a=0;switch(e){case l.L:a=g[n][0];break;case l.M:a=g[n][1];break;case l.Q:a=g[n][2];break;case l.H:a=g[n][3]}if(r<=a)break;o++}if(o>g.length)throw new Error("Too long data");return o}function u(t){var e=encodeURI(t).toString().replace(/\%[0-9a-fA-F]{2}/g,"a");return e.length+(e.length!=t?3:0)}t.prototype={getLength:function(t){return this.parsedData.length},write:function(t){for(var e=this,o=0,r=this.parsedData.length;o<r;o++)t.put(e.parsedData[o],8)}},e.prototype={addData:function(e){var o=new t(e);this.dataList.push(o),this.dataCache=null},isDark:function(t,e){if(t<0||this.moduleCount<=t||e<0||this.moduleCount<=e)throw new Error(t+","+e);return this.modules[t][e]},getModuleCount:function(){return this.moduleCount},make:function(){this.makeImpl(!1,this.getBestMaskPattern())},makeImpl:function(t,o){var r=this;this.moduleCount=4*this.typeNumber+17,this.modules=new Array(this.moduleCount);for(var n=0;n<this.moduleCount;n++){r.modules[n]=new Array(r.moduleCount);for(var i=0;i<this.moduleCount;i++)r.modules[n][i]=null}this.setupPositionProbePattern(0,0),this.setupPositionProbePattern(this.moduleCount-7,0),this.setupPositionProbePattern(0,this.moduleCount-7),this.setupPositionAdjustPattern(),this.setupTimingPattern(),this.setupTypeInfo(t,o),this.typeNumber>=7&&this.setupTypeNumber(t),null==this.dataCache&&(this.dataCache=e.createData(this.typeNumber,this.errorCorrectLevel,this.dataList)),this.mapData(this.dataCache,o)},setupPositionProbePattern:function(t,e){for(var o=this,r=-1;r<=7;r++)if(!(t+r<=-1||o.moduleCount<=t+r))for(var n=-1;n<=7;n++)e+n<=-1||o.moduleCount<=e+n||(0<=r&&r<=6&&(0==n||6==n)||0<=n&&n<=6&&(0==r||6==r)||2<=r&&r<=4&&2<=n&&n<=4?o.modules[t+r][e+n]=!0:o.modules[t+r][e+n]=!1)},getBestMaskPattern:function(){for(var t=this,e=0,o=0,r=0;r<8;r++){t.makeImpl(!0,r);var n=h.getLostPoint(t);(0==r||e>n)&&(e=n,o=r)}return o},createMovieClip:function(t,e,o){var r=this,n=t.createEmptyMovieClip(e,o),i=1;this.make();for(var a=0;a<this.modules.length;a++)for(var s=a*i,u=0;u<this.modules[a].length;u++){var p=u*i,l=r.modules[a][u];l&&(n.beginFill(0,100),n.moveTo(p,s),n.lineTo(p+i,s),n.lineTo(p+i,s+i),n.lineTo(p,s+i),n.endFill())}return n},setupTimingPattern:function(){for(var t=this,e=8;e<this.moduleCount-8;e++)null==t.modules[e][6]&&(t.modules[e][6]=e%2==0);for(var o=8;o<this.moduleCount-8;o++)null==t.modules[6][o]&&(t.modules[6][o]=o%2==0)},setupPositionAdjustPattern:function(){for(var t=this,e=h.getPatternPosition(this.typeNumber),o=0;o<e.length;o++)for(var r=0;r<e.length;r++){var n=e[o],i=e[r];if(null==t.modules[n][i])for(var a=-2;a<=2;a++)for(var s=-2;s<=2;s++)a==-2||2==a||s==-2||2==s||0==a&&0==s?t.modules[n+a][i+s]=!0:t.modules[n+a][i+s]=!1}},setupTypeNumber:function(t){for(var e=this,o=h.getBCHTypeNumber(this.typeNumber),r=0;r<18;r++){var n=!t&&1==(o>>r&1);e.modules[Math.floor(r/3)][r%3+e.moduleCount-8-3]=n}for(var r=0;r<18;r++){var n=!t&&1==(o>>r&1);e.modules[r%3+e.moduleCount-8-3][Math.floor(r/3)]=n}},setupTypeInfo:function(t,e){for(var o=this,r=this.errorCorrectLevel<<3|e,n=h.getBCHTypeInfo(r),i=0;i<15;i++){var a=!t&&1==(n>>i&1);i<6?o.modules[i][8]=a:i<8?o.modules[i+1][8]=a:o.modules[o.moduleCount-15+i][8]=a}for(var i=0;i<15;i++){var a=!t&&1==(n>>i&1);i<8?o.modules[8][o.moduleCount-i-1]=a:i<9?o.modules[8][15-i-1+1]=a:o.modules[8][15-i-1]=a}this.modules[this.moduleCount-8][8]=!t},mapData:function(t,e){for(var o=this,r=-1,n=this.moduleCount-1,i=7,a=0,s=this.moduleCount-1;s>0;s-=2)for(6==s&&s--;;){for(var u=0;u<2;u++)if(null==o.modules[n][s-u]){var p=!1;a<t.length&&(p=1==(t[a]>>>i&1));var l=h.getMask(e,n,s-u);l&&(p=!p),o.modules[n][s-u]=p,i--,i==-1&&(a++,i=7)}if(n+=r,n<0||o.moduleCount<=n){n-=r,r=-r;break}}}},e.PAD0=236,e.PAD1=17,e.createData=function(t,o,i){for(var a=r.getRSBlocks(t,o),s=new n,u=0;u<i.length;u++){var p=i[u];s.put(p.mode,4),s.put(p.getLength(),h.getLengthInBits(p.mode,t)),p.write(s)}for(var l=0,u=0;u<a.length;u++)l+=a[u].dataCount;if(s.getLengthInBits()>8*l)throw new Error("code length overflow. ("+s.getLengthInBits()+">"+8*l+")");for(s.getLengthInBits()+4<=8*l&&s.put(0,4);s.getLengthInBits()%8!=0;)s.putBit(!1);for(;;){if(s.getLengthInBits()>=8*l)break;if(s.put(e.PAD0,8),s.getLengthInBits()>=8*l)break;s.put(e.PAD1,8)}return e.createBytes(s,a)},e.createBytes=function(t,e){for(var r=0,n=0,i=0,a=new Array(e.length),s=new Array(e.length),u=0;u<e.length;u++){var p=e[u].dataCount,l=e[u].totalCount-p;n=Math.max(n,p),i=Math.max(i,l),a[u]=new Array(p);for(var c=0;c<a[u].length;c++)a[u][c]=255&t.buffer[c+r];r+=p;var f=h.getErrorCorrectPolynomial(l),d=new o(a[u],f.getLength()-1),g=d.mod(f);s[u]=new Array(f.getLength()-1);for(var c=0;c<s[u].length;c++){var y=c+g.getLength()-s[u].length;s[u][c]=y>=0?g.get(y):0}}for(var m=0,c=0;c<e.length;c++)m+=e[c].totalCount;for(var b=new Array(m),w=0,c=0;c<n;c++)for(var u=0;u<e.length;u++)c<a[u].length&&(b[w++]=a[u][c]);for(var c=0;c<i;c++)for(var u=0;u<e.length;u++)c<s[u].length&&(b[w++]=s[u][c]);return b};for(var p={MODE_NUMBER:1,MODE_ALPHA_NUM:2,MODE_8BIT_BYTE:4,MODE_KANJI:8},l={L:1,M:0,Q:3,H:2},c={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7},h={PATTERN_POSITION_TABLE:[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],G15:1335,G18:7973,G15_MASK:21522,getBCHTypeInfo:function(t){for(var e=t<<10;h.getBCHDigit(e)-h.getBCHDigit(h.G15)>=0;)e^=h.G15<<h.getBCHDigit(e)-h.getBCHDigit(h.G15);return(t<<10|e)^h.G15_MASK},getBCHTypeNumber:function(t){for(var e=t<<12;h.getBCHDigit(e)-h.getBCHDigit(h.G18)>=0;)e^=h.G18<<h.getBCHDigit(e)-h.getBCHDigit(h.G18);return t<<12|e},getBCHDigit:function(t){for(var e=0;0!=t;)e++,t>>>=1;return e},getPatternPosition:function(t){return h.PATTERN_POSITION_TABLE[t-1]},getMask:function(t,e,o){switch(t){case c.PATTERN000:return(e+o)%2==0;case c.PATTERN001:return e%2==0;case c.PATTERN010:return o%3==0;case c.PATTERN011:return(e+o)%3==0;case c.PATTERN100:return(Math.floor(e/2)+Math.floor(o/3))%2==0;case c.PATTERN101:return e*o%2+e*o%3==0;case c.PATTERN110:return(e*o%2+e*o%3)%2==0;case c.PATTERN111:return(e*o%3+(e+o)%2)%2==0;default:throw new Error("bad maskPattern:"+t)}},getErrorCorrectPolynomial:function(t){for(var e=new o([1],0),r=0;r<t;r++)e=e.multiply(new o([1,f.gexp(r)],0));return e},getLengthInBits:function(t,e){if(1<=e&&e<10)switch(t){case p.MODE_NUMBER:return 10;case p.MODE_ALPHA_NUM:return 9;case p.MODE_8BIT_BYTE:return 8;case p.MODE_KANJI:return 8;default:throw new Error("mode:"+t)}else if(e<27)switch(t){case p.MODE_NUMBER:return 12;case p.MODE_ALPHA_NUM:return 11;case p.MODE_8BIT_BYTE:return 16;case p.MODE_KANJI:return 10;default:throw new Error("mode:"+t)}else{if(!(e<41))throw new Error("type:"+e);switch(t){case p.MODE_NUMBER:return 14;case p.MODE_ALPHA_NUM:return 13;case p.MODE_8BIT_BYTE:return 16;case p.MODE_KANJI:return 12;default:throw new Error("mode:"+t)}}},getLostPoint:function(t){for(var e=t.getModuleCount(),o=0,r=0;r<e;r++)for(var n=0;n<e;n++){for(var i=0,a=t.isDark(r,n),s=-1;s<=1;s++)if(!(r+s<0||e<=r+s))for(var u=-1;u<=1;u++)n+u<0||e<=n+u||0==s&&0==u||a==t.isDark(r+s,n+u)&&i++;i>5&&(o+=3+i-5)}for(var r=0;r<e-1;r++)for(var n=0;n<e-1;n++){var p=0;t.isDark(r,n)&&p++,t.isDark(r+1,n)&&p++,t.isDark(r,n+1)&&p++,t.isDark(r+1,n+1)&&p++,0!=p&&4!=p||(o+=3)}for(var r=0;r<e;r++)for(var n=0;n<e-6;n++)t.isDark(r,n)&&!t.isDark(r,n+1)&&t.isDark(r,n+2)&&t.isDark(r,n+3)&&t.isDark(r,n+4)&&!t.isDark(r,n+5)&&t.isDark(r,n+6)&&(o+=40);for(var n=0;n<e;n++)for(var r=0;r<e-6;r++)t.isDark(r,n)&&!t.isDark(r+1,n)&&t.isDark(r+2,n)&&t.isDark(r+3,n)&&t.isDark(r+4,n)&&!t.isDark(r+5,n)&&t.isDark(r+6,n)&&(o+=40);for(var l=0,n=0;n<e;n++)for(var r=0;r<e;r++)t.isDark(r,n)&&l++;var c=Math.abs(100*l/e/e-50)/5;return o+=10*c}},f={glog:function(t){if(t<1)throw new Error("glog("+t+")");return f.LOG_TABLE[t]},gexp:function(t){for(;t<0;)t+=255;for(;t>=256;)t-=255;return f.EXP_TABLE[t]},EXP_TABLE:new Array(256),LOG_TABLE:new Array(256)},d=0;d<8;d++)f.EXP_TABLE[d]=1<<d;for(var d=8;d<256;d++)f.EXP_TABLE[d]=f.EXP_TABLE[d-4]^f.EXP_TABLE[d-5]^f.EXP_TABLE[d-6]^f.EXP_TABLE[d-8];for(var d=0;d<255;d++)f.LOG_TABLE[f.EXP_TABLE[d]]=d;o.prototype={get:function(t){return this.num[t]},getLength:function(){return this.num.length},multiply:function(t){for(var e=this,r=new Array(this.getLength()+t.getLength()-1),n=0;n<this.getLength();n++)for(var i=0;i<t.getLength();i++)r[n+i]^=f.gexp(f.glog(e.get(n))+f.glog(t.get(i)));return new o(r,0)},mod:function(t){var e=this;if(this.getLength()-t.getLength()<0)return this;for(var r=f.glog(this.get(0))-f.glog(t.get(0)),n=new Array(this.getLength()),i=0;i<this.getLength();i++)n[i]=e.get(i);for(var i=0;i<t.getLength();i++)n[i]^=f.gexp(f.glog(t.get(i))+r);return new o(n,0).mod(t)}},r.RS_BLOCK_TABLE=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]],r.getRSBlocks=function(t,e){var o=r.getRsBlockTable(t,e);if(void 0==o)throw new Error("bad rs block @ typeNumber:"+t+"/errorCorrectLevel:"+e);for(var n=o.length/3,i=[],a=0;a<n;a++)for(var s=o[3*a+0],u=o[3*a+1],p=o[3*a+2],l=0;l<s;l++)i.push(new r(u,p));return i},r.getRsBlockTable=function(t,e){switch(e){case l.L:return r.RS_BLOCK_TABLE[4*(t-1)+0];case l.M:return r.RS_BLOCK_TABLE[4*(t-1)+1];case l.Q:return r.RS_BLOCK_TABLE[4*(t-1)+2];case l.H:return r.RS_BLOCK_TABLE[4*(t-1)+3];default:return}},n.prototype={get:function(t){var e=Math.floor(t/8);return 1==(this.buffer[e]>>>7-t%8&1)},put:function(t,e){for(var o=this,r=0;r<e;r++)o.putBit(1==(t>>>e-r-1&1))},getLengthInBits:function(){return this.length},putBit:function(t){var e=Math.floor(this.length/8);this.buffer.length<=e&&this.buffer.push(0),t&&(this.buffer[e]|=128>>>this.length%8),this.length++}};var g=[[17,14,11,7],[32,26,20,14],[53,42,32,24],[78,62,46,34],[106,84,60,44],[134,106,74,58],[154,122,86,64],[192,152,108,84],[230,180,130,98],[271,213,151,119],[321,251,177,137],[367,287,203,155],[425,331,241,177],[458,362,258,194],[520,412,292,220],[586,450,322,250],[644,504,364,280],[718,560,394,310],[792,624,442,338],[858,666,482,382],[929,711,509,403],[1003,779,565,439],[1091,857,611,461],[1171,911,661,511],[1273,997,715,535],[1367,1059,751,593],[1465,1125,805,625],[1528,1190,868,658],[1628,1264,908,698],[1732,1370,982,742],[1840,1452,1030,790],[1952,1538,1112,842],[2068,1628,1168,898],[2188,1722,1228,958],[2303,1809,1283,983],[2431,1911,1351,1051],[2563,1989,1423,1093],[2699,2099,1499,1139],[2809,2213,1579,1219],[2953,2331,1663,1273]],y=function(){var t=function(t,e){this._el=t,this._htOption=e};return t.prototype.draw=function(t){function e(t,e){var o=document.createElementNS("http://www.w3.org/2000/svg",t);for(var r in e)e.hasOwnProperty(r)&&o.setAttribute(r,e[r]);return o}var o=this._htOption,r=this._el,n=t.getModuleCount();Math.floor(o.width/n),Math.floor(o.height/n);this.clear();var i=e("svg",{viewBox:"0 0 "+String(n)+" "+String(n),width:"100%",height:"100%",fill:o.colorLight});i.setAttributeNS("http://www.w3.org/2000/xmlns/","xmlns:xlink","http://www.w3.org/1999/xlink"),r.appendChild(i),i.appendChild(e("rect",{fill:o.colorLight,width:"100%",height:"100%"})),i.appendChild(e("rect",{fill:o.colorDark,width:"1",height:"1",id:"template"}));for(var a=0;a<n;a++)for(var s=0;s<n;s++)if(t.isDark(a,s)){var u=e("use",{x:String(s),y:String(a)});u.setAttributeNS("http://www.w3.org/1999/xlink","href","#template"),i.appendChild(u)}},t.prototype.clear=function(){for(var t=this;this._el.hasChildNodes();)t._el.removeChild(t._el.lastChild)},t}(),m="svg"===document.documentElement.tagName.toLowerCase(),b=m?y:i()?function(){function t(){this._elImage.src=this._elCanvas.toDataURL("image/png"),this._elImage.style.display="block",this._elCanvas.style.display="none"}function e(t,e){var o=this;if(o._fFail=e,o._fSuccess=t,null===o._bSupportDataURI){var r=document.createElement("img"),n=function(){o._bSupportDataURI=!1,o._fFail&&o._fFail.call(o)},i=function(){o._bSupportDataURI=!0,o._fSuccess&&o._fSuccess.call(o)};return r.onabort=n,r.onerror=n,r.onload=i,void(r.src="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==")}o._bSupportDataURI===!0&&o._fSuccess?o._fSuccess.call(o):o._bSupportDataURI===!1&&o._fFail&&o._fFail.call(o)}var o=function(t,e){this._bIsPainted=!1,this._android=a(),this._htOption=e,this._elCanvas=document.createElement("canvas"),this._elCanvas.width=e.width,this._elCanvas.height=e.height,t.appendChild(this._elCanvas),this._el=t,this._oContext=this._elCanvas.getContext("2d"),this._bIsPainted=!1,this._elImage=document.createElement("img"),this._elImage.alt="Scan me!",this._elImage.style.display="none",this._el.appendChild(this._elImage),this._bSupportDataURI=null};return o.prototype.draw=function(t){var e=this._elImage,o=this._oContext,r=this._htOption,n=t.getModuleCount(),i=r.width/n,a=r.height/n,s=Math.round(i),u=Math.round(a);e.style.display="none",this.clear();for(var p=0;p<n;p++)for(var l=0;l<n;l++){var c=t.isDark(p,l),h=l*i,f=p*a;o.strokeStyle=c?r.colorDark:r.colorLight,o.lineWidth=1,o.fillStyle=c?r.colorDark:r.colorLight,o.fillRect(h,f,i,a),o.strokeRect(Math.floor(h)+.5,Math.floor(f)+.5,s,u),o.strokeRect(Math.ceil(h)-.5,Math.ceil(f)-.5,s,u)}this._bIsPainted=!0},o.prototype.makeImage=function(){this._bIsPainted&&e.call(this,t)},o.prototype.isPainted=function(){return this._bIsPainted},o.prototype.clear=function(){this._oContext.clearRect(0,0,this._elCanvas.width,this._elCanvas.height),this._bIsPainted=!1},o.prototype.round=function(t){return t?Math.floor(1e3*t)/1e3:t},o}():function(){var t=function(t,e){this._el=t,this._htOption=e};return t.prototype.draw=function(t){for(var e=this._htOption,o=this._el,r=t.getModuleCount(),n=Math.floor(e.width/r),i=Math.floor(e.height/r),a=['<table style="border:0;border-collapse:collapse;">'],s=0;s<r;s++){a.push("<tr>");for(var u=0;u<r;u++)a.push('<td style="border:0;border-collapse:collapse;padding:0;margin:0;width:'+n+"px;height:"+i+"px;background-color:"+(t.isDark(s,u)?e.colorDark:e.colorLight)+';"></td>');a.push("</tr>")}a.push("</table>"),o.innerHTML=a.join("");var p=o.childNodes[0],l=(e.width-p.offsetWidth)/2,c=(e.height-p.offsetHeight)/2;l>0&&c>0&&(p.style.margin=c+"px "+l+"px")},t.prototype.clear=function(){this._el.innerHTML=""},t}();V=function(t,e){var o=this;if(this._htOption={width:256,height:256,typeNumber:4,colorDark:"#000000",colorLight:"#ffffff",correctLevel:l.H},"string"==typeof e&&(e={text:e}),e)for(var r in e)o._htOption[r]=e[r];"string"==typeof t&&(t=document.getElementById(t)),this._htOption.useSVG&&(b=y),this._android=a(),this._el=t,this._oQRCode=null,this._oDrawing=new b(this._el,this._htOption),this._htOption.text&&this.makeCode(this._htOption.text)},V.prototype.makeCode=function(t){return this._oQRCode=new e(s(t,this._htOption.correctLevel),this._htOption.correctLevel),this._oQRCode.addData(t),this._oQRCode.make(),this._el.title=t,this._oDrawing.draw(this._oQRCode),this._oDrawing._elCanvas.toDataURL("image/png")},V.prototype.makeImage=function(){"function"==typeof this._oDrawing.makeImage&&(!this._android||this._android>=3)&&this._oDrawing.makeImage()},V.prototype.clear=function(){this._oDrawing.clear()},V.CorrectLevel=l}();var F=V;Object.defineProperty(u.prototype,"name",{value:"bowqrcode",writable:!1}),u.prototype.scan=function(t,e){return t=t||{},console.log("[qrcode.scan] \u8fd4\u56de\u9ed8\u8ba4\u503c"),"function"==typeof e&&e(null,{source:"qrcode.scan"}),this},u.prototype.generate=function(t,e){t=t||{};var o=new F(document.createElement("div"),{width:100,height:100}),r=o.makeCode(t.sourceString||"");return"function"==typeof e&&e(null,{imageData:r,savePath:""}),this},u.prototype.save=function(t,e){return t=t||{},console.log("[qrcode.save] \u8fd4\u56de\u9ed8\u8ba4\u503c"),"function"==typeof e&&e(null,{imageData:"qrcode.save",savePath:""}),this},u.prototype.lightness=function(t,e){return"function"==typeof e&&e(null),this},Object.defineProperty(p.prototype,"name",{value:"bowsafeKeyBoard",writable:!1}),p.prototype.arouse=function(t,e){return console.log("[safeKeyBoard.arouse] \u6ca1\u9002\u914d\uff0c\u9ed8\u8ba4\u6253\u5f00\u6210\u529f"),t=t||{},"function"==typeof e&&e(null),this},p.prototype.hide=function(t){return console.log("[safeKeyBoard.hide] \u6ca1\u9002\u914d\uff0c\u9ed8\u8ba4\u5173\u95ed\u6210\u529f"),"function"==typeof t&&t(null),this},Object.defineProperty(l.prototype,"name",{value:"bowshare",writable:!1}),l.prototype.msg=function(t,e){return t=t||{},console.log("[share.msg] \u9ed8\u8ba4\u6210\u529f"),e(),this},l.prototype.qrcode=function(t,e){return t=t||{},console.log("[share.qrcode] \u9ed8\u8ba4\u6210\u529f"),e(),this},Object.defineProperty(c.prototype,"name",{value:"bowvoice",writable:!1}),c.prototype.transfer=function(t,e){return t=t||{},console.log("[voice.transfer] \u9ed8\u8ba4\u8fd4\u56de\u56fa\u5b9a\u94fe\u63a5\u5730\u5740"),e(null,{hash:"http://m.pingan.com/"}),this},c.prototype.getText=function(t){return console.log("[voice.getText] \u9ed8\u8ba4\u8fd4\u56de\u56fa\u5b9a\u6587\u672c"),t(null,{voiceText:"text"}),this},Object.defineProperty(h.prototype,"name",{value:"bowsharedMemory",writable:!1}),h.prototype.setItem=function(t,e){this._bow&&this._bow.localStorage.setItem(t,e)},h.prototype.getItem=function(t){var e=null;return this._bow&&this._bow.localStorage.getItem(t,function(t,o){e=t?null:o}),e},h.prototype.removeItem=function(t){this._bow&&this._bow.localStorage.removeItem(t)},h.prototype.clear=function(){this._bow&&this._bow.localStorage.clear()},Object.defineProperty(f.prototype,"name",{value:"bowsms",writable:!1}),f.prototype.message=function(t,e){return t=t||{},console.log("[sms.message]\u4e0d\u652f\u6301\u83b7\u53d6\u77ed\u4fe1(OPT\u81ea\u52a8\u8bfb\u53d6\u9a8c\u8bc1)"),this},f.prototype.autoFetchOtpMsg=function(t,e){return this.message(t,e)},f.prototype.send=function(t,e){return t=t||{},console.log("[sms.send]\u9ed8\u8ba4\u53d1\u9001\u77ed\u4fe1\u6210\u529f"),e(),this},Object.defineProperty(d.prototype,"name",{value:"bowaccelerometer",writable:!1}),d.prototype.getCurrentAcceleration=function(t){return cosole.log("[acceleromete.getCurrentAcceleration] \u8fd4\u56de\u9ed8\u8ba4\u503c"),"function"==typeof t&&t(null,{x:0,y:0,z:0,timestamp:Date.now()}),this},d.prototype.watchAcceleration=function(t,e){if(cosole.log("[acceleromete.getCurrentAcceleration] \u8fd4\u56de\u9ed8\u8ba4\u503c"),t=t||{},"function"==typeof e)var o=setInterval(function(){e(null,{x:0,y:0,z:0,timestamp:Date.now(),watchID:o})},t.frequency||1e3);return watchID},d.prototype.clearWatch=function(t,e){return t=t||{},clearInterval(t.watchID),"function"==typeof e&&e(),this},Object.defineProperty(g.prototype,"name",{value:"bowmap",writable:!1}),g.prototype.open=function(t,e){return t=t||{},console.log("[map.open] \u9ed8\u8ba4\u6253\u5f00\u6210\u529f"),e(),this},Object.defineProperty(y.prototype,"name",{value:"bownavigator",writable:!1}),y.prototype.forward=function(t,e){return t&&t.tpl&&"webview"===t.tpl&&(t.currentUrl=window.location.href),this._adapter.navigator.forward(t,e)},y.prototype.back=function(t,e){return this._adapter.navigator.back(t,e)},y.prototype.backTop=function(t){return this._adapter.navigator.backTop(t)},Object.defineProperty(m.prototype,"name",{value:"bowhttp",writable:!1}),m.prototype.ajax=function(t,e){var o,r,n,i,a=this,s=function(){},u="text",p=s,l=s,c=s,h=s,f="";e="object"==typeof t?t:e,t="object"==typeof t?e.url:t;var d=window.$;return d&&d.ajaxSettings&&(u=d.ajaxSettings.dataType||"",p=d.ajaxSettings.complete||s,h=d.ajaxSettings.beforeSend||s),h="function"==typeof e.beforeSend?e.beforeSend:h,p="function"==typeof e.complete?e.complete:p,l="function"==typeof e.error?e.error:s,c="function"==typeof e.success?e.success:s,u="string"==typeof e.dataType?e.dataType:u,o=e.type||"GET",r=e.data||"",n={url:t,method:o,timeout:e.timeout,headers:e.headers},"GET"===o.toUpperCase()?n.qs=r:n.body=r,e.traditional&&(n.traditional=!0),i={readyState:1,response:"",responseText:"",responseURL:t,status:"",timeout:"",statusText:""},h(i),a.request(n,function(t,e){var o="";if(t)o="10003"==t.code?"timeout":"error",l(i,o);else if(o="success",i.readyState=4,i.responseText=e.body,i.response=e.body,i.status=e.status,i.statusText="OK",i.getResponseHeader=function(t){return(e.headers||{})[t]},i.getAllResponseHeaders=function(){var t=[],o=e.headers||{};for(var r in o)o.hasOwnProperty(r)&&t.push(r+": "+o[r]);return t.join("\n")},"json"===u.toLowerCase())try{f=JSON.parse(e.body),c(f,o,i)}catch(t){o="parsererror",l(i,o)}else f=i.responseText,c(f,o,i);p(i,o)}),i},m.prototype.request=function(t,e){t=t||{},t.method=t.method||"post",t.timeout=t.timeout||6e4;var o=this._adapter,r=t.retry||0;return function n(){o.http.request(t,function(t,o){t&&r>0?(r--,n()):e(t,o)})}(),this},m.prototype.get=function(t,e){return this.request({method:"get"},e)},m.prototype.post=function(t,e){return this.request({method:"post"},e)},m.prototype.put=function(t,e){
return this.request({method:"put"},e)},m.prototype.delete=function(t,e){return this.request({method:"delete"},e)},m.prototype.option=function(t,e){return this._adapter.http.option(t,e)},m.prototype.download=function(t,e){return this._adapter.http.download(t,e)},m.prototype.upload=function(t,e){return this._adapter.http.upload(t,e)},m.prototype.setCookie=function(t,e){return t=t||{},this._adapter.http.setCookie(t,e)},m.prototype.getCookie=function(t,e,o){return this._adapter.http.getCookie(t,e,o)},m.prototype.removeCookie=function(t,e,o){return this._adapter.http.removeCookie(t,e,o)},m.prototype.clearCookie=function(t,e){return this._adapter.http.clearCookie(t,e)},Object.defineProperty(b.prototype,"name",{value:"bownetwork",writable:!1}),b.prototype.getInfo=function(t){return this._adapter.network.getInfo(t)},Object.defineProperty(w.prototype,"name",{value:"bowcrypto",writable:!1}),w.prototype.encrypt=function(t,e){return this._adapter.crypto.encrypt(t,e)},w.prototype.decrypt=function(t,e){return this._adapter.crypto.decrypt(t,e)},Object.defineProperty(v.prototype,"name",{value:"bowlocalStorage",writable:!1}),v.prototype.getItem=function(t,e,o,r){return this._adapter.localStorage.getItem(t,e,o,r)},v.prototype.setItem=function(t,e,o,r,n){return this._adapter.localStorage.setItem(t,e,o,r,n)},v.prototype.removeItem=function(t,e,o){return this._adapter.localStorage.removeItem(t,e,o)},v.prototype.clear=function(t){return this._adapter.localStorage.clear(t)},Object.defineProperty(_.prototype,"name",{value:"bowsessionStorage",writable:!1}),_.prototype.getItem=function(t,e,o,r){return this._adapter.sessionStorage.getItem(t,e,o,r)},_.prototype.setItem=function(t,e,o,r,n){return this._adapter.sessionStorage.setItem(t,e,o,r,n)},_.prototype.removeItem=function(t,e,o){return this._adapter.sessionStorage.removeItem(t,e,o)},_.prototype.clear=function(t){return this._adapter.sessionStorage.clear(t)},Object.defineProperty(C.prototype,"name",{value:"bowheader",writable:!1}),C.prototype.config=function(t,e){return"object"==typeof t&&(t.leftButtonCallback&&(t.leftButtonCallback.keep=!0),t.rightButtonCallback&&(t.rightButtonCallback.keep=!0)),this._adapter.header.config(t,e)},Object.defineProperty(P.prototype,"name",{value:"bowpage",writable:!1}),P.prototype.config=function(t,e){return this._adapter.page.config(t,e)},P.prototype.bounce=function(t,e){return this._adapter.page.bounce(t,e)},P.prototype.swipe=function(t,e){return this._adapter.page.swipe(t,e)},Object.defineProperty(k.prototype,"name",{value:"bowbrowser",writable:!1}),k.prototype.open=function(t,e){return t=t||{},this._adapter.browser.open(t,e)},Object.defineProperty(A.prototype,"name",{value:"bowcamera",writable:!1}),A.prototype.getPhotos=function(t,e){return t=t||{},this._adapter.camera.getPhotos(t,e)},Object.defineProperty(E.prototype,"name",{value:"bowgeolocation",writable:!1}),E.prototype.getCurrentPosition=function(t){return this._adapter.geolocation.getCurrentPosition(t)},Object.defineProperty(T.prototype,"name",{value:"bowauth",writable:!1}),T.prototype.synLogin=function(t,e){return t=t||{},this._bow.localStorage.setItem(this._uuid,t,e),this},T.prototype.synLogout=function(t){return this._bow.localStorage.removeItem(this._uuid,t),this},T.prototype.fetchLogin=function(t){return this._bow.localStorage.getItem(this._uuid,t),this},T.prototype.launchLogin=function(t,e){return"function"==typeof t?(e=t,t={}):t=t||{},"function"==typeof e&&e(),this},T.prototype.cancelLogin=function(t){return"function"==typeof t&&t(),this},Object.defineProperty(D.prototype,"name",{value:"bowgesture",writable:!1}),D.prototype.proceedSetup=function(t,e){return console.log("[gesture.proceedSetup] \u5199\u6b7b\u7684\u6570\u636e\uff0c\u8fd4\u56depassword\u4e3aback\u5b57\u7b26\u4e32"),"function"==typeof e&&e(null,{password:"back"}),this},D.prototype.syncAuthToken=function(t,e){return console.log("[gesture.syncAuthToken] \u4e0d\u505a\u903b\u8f91\u5904\u7406\uff0c\u9ed8\u8ba4\u6267\u884c\u6210\u529f"),e(),this},D.prototype.checkSwitchState=function(t){return console.log("[gesture.checkSwitchState] \u9ed8\u8ba4open\u4e3afalse"),t(null,{open:!1}),this},D.prototype.updateSwitchState=function(t,e){return console.log("[gesture.updateSwitchState] \u4e0d\u505a\u903b\u8f91\u5904\u7406\uff0c\u9ed8\u8ba4opened\u4e3afalse"),e(null,{opened:!1}),this},D.prototype.openAccessVerify=function(t){return console.log("[gesture.openAccessVerify] \u9ed8\u8ba4\u64cd\u4f5c\u6210\u529f"),t(),this},D.prototype.clearProfileSettings=function(t){return console.log("[gesture.clearProfileSettings] \u9ed8\u8ba4\u64cd\u4f5c\u6210\u529f"),t(),this},D.prototype.isAlreadySetup=function(t){return console.log("[gesture.isAlreadySetup] \u9ed8\u8ba4already\u4e3afalse"),t(null,{already:!1}),this},D.prototype.checkPathVisible=function(t){return console.log("[gesture.checkPathVisible] \u9ed8\u8ba4visible\u4e3afalse"),"function"==typeof t&&t(null,{visible:!1}),this},D.prototype.updatePathVisible=function(t,e){return console.log("[gesture.updatePathVisible] \u9ed8\u8ba4\u64cd\u4f5c\u6210\u529f"),"function"==typeof e&&e(),this},D.prototype.synPasswordSetup=function(t,e){return console.log("[gesture.synPasswordSetup] \u9ed8\u8ba4\u64cd\u4f5c\u6210\u529f"),"function"==typeof e&&e(),this},D.prototype.modifyPassword=function(t){return console.log("[gesture.modifyPassword] \u4e0d\u505a\u903b\u8f91\u5904\u7406\uff0c\u9ed8\u8ba4password\u4e3aback"),"function"==typeof t&&t(null,{password:"back"}),this},Object.defineProperty(S.prototype,"name",{value:"bowguidance",writable:!1}),S.prototype.showGuideView=function(t,e){return t=t||{},console.log("guidance.showGuideView"),e(),this},S.prototype.financialProductsGuide=function(t){return console.log("guidance.financialProductsGuide"),t(),this},Object.defineProperty(I.prototype,"name",{value:"bowlightpay",writable:!1}),I.prototype.createShortcut=function(t,e){return t=t||{},console.log("lightpay.createShortcut"),e(),this},I.prototype.getAccountList=function(t,e){return t=t||{},console.log("lightpay.getAccountList"),e(),this},I.prototype.saveBindCards=function(t,e){return t=t||{},console.log("lightpay.saveBindCards"),e(),this},I.prototype.getPayCredential=function(t,e){return t=t||{},console.log("lightpay.getPayCredential"),e(),this},I.prototype.getLightUserId=function(t,e){return t=t||{},console.log("lightpay.getLightUserId"),e(),this},I.prototype.isKCInitializeOk=function(t,e){return t=t||{},console.log("lightpay.isKCInitializeOk"),e(),this},I.prototype.saveLightPaySettings=function(t,e){return t=t||{},console.log("lightpay.saveLightPaySettings"),e(),this},I.prototype.getAESKey=function(t,e){return t=t||{},console.log("lightpay.getAESKey"),e(),this},I.prototype.showGestureBoard=function(t,e){return t=t||{},console.log("lightpay.showGestureBoard"),e(),this},I.prototype.saveGesturePWD=function(t,e){return t=t||{},console.log("lightpay.saveGesturePWD"),e(),this},I.prototype.openPayBoard=function(t,e){return t=t||{},console.log("lightpay.openPayBoard"),e(),this},Object.defineProperty(L.prototype,"name",{value:"bowmobilepay",writable:!1}),L.prototype.showGraphBoard=function(t,e){return t=t||{},console.log("mobilepay.showGraphBoard"),e(),this},L.prototype.closeGraphBoard=function(t,e){return t=t||{},console.log("mobilepay.closeGraphBoard"),e(),this},L.prototype.promptMessage=function(t,e){return t=t||{},console.log("mobilepay.promptMessage"),e(),this},Object.defineProperty(B.prototype,"name",{value:"bownotification",writable:!1}),B.prototype.getSysNotificationStatus=function(t){return t(null,{isOpen:!1}),this},B.prototype.toSysSettingPage=function(t){return t(),this},B.prototype.saveMessage=function(t,e){return t=t||{},console.log("notification.saveMessage"),e(),this},B.prototype.getMessage=function(t,e){return t=t||{},console.log("notification.getMessage"),e(),this},B.prototype.checkSameUser=function(t,e){return t=t||{},console.log("notification.checkSameUser"),e(),this},B.prototype.markMessageRead=function(t,e){return t=t||{},console.log("notification.markMessageRead"),e(),this},Object.defineProperty(O.prototype,"name",{value:"bowoffer",writable:!1}),O.prototype.hasPoint=function(t){return console.log("guidance.hasPoint"),t(),this},O.prototype.queryRightCount=function(t,e){return console.log("guidance.queryRightCount"),e(null,{rightCount:0}),this},Object.defineProperty(M.prototype,"name",{value:"bowtsm",writable:!1}),M.prototype.ukeyReadCardSerialNumber=function(t){return console.log("tsm.ukeyReadCardSerialNumber"),t(),this},M.prototype.ukeyGetCardInfo=function(t){return console.log("tsm.ukeyGetCardInfo"),t(),this},M.prototype.ukeyDownloadCertificate=function(t,e){return t=t||{},console.log("tsm.ukeyDownloadCertificate"),e(),this},M.prototype.ukeyStorageCertificate=function(t){return console.log("tsm.ukeyStorageCertificate"),t(),this},M.prototype.ukeyGetCertificate=function(t,e){return t=t||{},console.log("tsm.ukeyGetCertificate"),e(),this},M.prototype.ukeyGetCertReqData=function(t,e){return t=t||{},console.log("tsm.ukeyGetCertReqData"),e(),this},M.prototype.ukeyVerifyPIN=function(t,e){return t=t||{},console.log("tsm.ukeyVerifyPIN"),e(),this},M.prototype.ukeyUpdatePIN=function(t,e){return t=t||{},console.log("tsm.ukeyUpdatePIN"),e(),this},M.prototype.ukeySignData=function(t,e){return t=t||{},console.log("tsm.ukeySignData"),e(),this},M.prototype.ukeyGenRSA=function(t,e){return t=t||{},console.log("tsm.ukeyGenRSA"),e(),this},Object.defineProperty(N.prototype,"name",{value:"bowcreditAuthorization",writable:!1}),N.prototype.scan=function(t,e){return console.log("[creditAuthorization.scan] \u4e0d\u505a\u903b\u8f91\u5904\u7406"),this};var Q=x(),z=U("\u786e\u5b9a",function(){}),J=U("\u53d6\u6d88",function(){q()}),Y=H(),W=j(),$=G(Y,z,J);Q.appendChild($),Q.appendChild(W),Object.defineProperty(R.prototype,"name",{value:"bowcityPicker",writable:!1}),R.prototype.show=function(t,e){console.log("[cityPicker.show] \u4e0d\u9002\u914d\uff0c\u9ed8\u8ba4\u8fd4\u56de\u7b2c\u4e00\u7ec4\u6570\u636e"),t=t||{};var o=(t.province||[])[0];"function"==typeof e&&e(null,{displayProvince:t.displayProvince,province:o,city:(t.city||[])[0],payment_channel:o?o.payment_channel:"",finish:!0})},Object.defineProperty(K.prototype,"name",{value:"bowtoast",writable:!1}),K.prototype.show=function(t,e){return this._adapter.toast.show(t,e)},K.prototype.hide=function(t){return this._adapter.toast.hide(t)},Object.defineProperty(X.prototype,"name",{value:"bowloading",writable:!1}),X.prototype.start=function(t,e){return this._adapter.loading.start(t,e)},X.prototype.stop=function(t){return this._adapter.loading.stop(t)};var Z=new e(t);return Z.use(m).use(o).use(r).use(n).use(i).use(a).use(s).use(u).use(p).use(l).use(c).use(h).use(f).use(d).use(g).use(y).use(b).use(w).use(v).use(_).use(C).use(P).use(k).use(A).use(E).use(T).use(D).use(S).use(I).use(L).use(B).use(O).use(M).use(N).use(R).use(K).use(X),Z});

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;;(function () {
	'use strict';

	/**
	 * @preserve FastClick: polyfill to remove click delays on browsers with touch UIs.
	 *
	 * @codingstandard ftlabs-jsv2
	 * @copyright The Financial Times Limited [All Rights Reserved]
	 * @license MIT License (see LICENSE.txt)
	 */

	/*jslint browser:true, node:true*/
	/*global define, Event, Node*/


	/**
	 * Instantiate fast-clicking listeners on the specified layer.
	 *
	 * @constructor
	 * @param {Element} layer The layer to listen on
	 * @param {Object} [options={}] The options to override the defaults
	 */
	function FastClick(layer, options) {
		var oldOnClick;

		options = options || {};

		/**
		 * Whether a click is currently being tracked.
		 *
		 * @type boolean
		 */
		this.trackingClick = false;


		/**
		 * Timestamp for when click tracking started.
		 *
		 * @type number
		 */
		this.trackingClickStart = 0;


		/**
		 * The element being tracked for a click.
		 *
		 * @type EventTarget
		 */
		this.targetElement = null;


		/**
		 * X-coordinate of touch start event.
		 *
		 * @type number
		 */
		this.touchStartX = 0;


		/**
		 * Y-coordinate of touch start event.
		 *
		 * @type number
		 */
		this.touchStartY = 0;


		/**
		 * ID of the last touch, retrieved from Touch.identifier.
		 *
		 * @type number
		 */
		this.lastTouchIdentifier = 0;


		/**
		 * Touchmove boundary, beyond which a click will be cancelled.
		 *
		 * @type number
		 */
		this.touchBoundary = options.touchBoundary || 10;


		/**
		 * The FastClick layer.
		 *
		 * @type Element
		 */
		this.layer = layer;

		/**
		 * The minimum time between tap(touchstart and touchend) events
		 *
		 * @type number
		 */
		this.tapDelay = options.tapDelay || 200;

		/**
		 * The maximum time for a tap
		 *
		 * @type number
		 */
		this.tapTimeout = options.tapTimeout || 700;

		if (FastClick.notNeeded(layer)) {
			return;
		}

		// Some old versions of Android don't have Function.prototype.bind
		function bind(method, context) {
			return function() { return method.apply(context, arguments); };
		}


		var methods = ['onMouse', 'onClick', 'onTouchStart', 'onTouchMove', 'onTouchEnd', 'onTouchCancel'];
		var context = this;
		for (var i = 0, l = methods.length; i < l; i++) {
			context[methods[i]] = bind(context[methods[i]], context);
		}

		// Set up event handlers as required
		if (deviceIsAndroid) {
			layer.addEventListener('mouseover', this.onMouse, true);
			layer.addEventListener('mousedown', this.onMouse, true);
			layer.addEventListener('mouseup', this.onMouse, true);
		}

		layer.addEventListener('click', this.onClick, true);
		layer.addEventListener('touchstart', this.onTouchStart, false);
		layer.addEventListener('touchmove', this.onTouchMove, false);
		layer.addEventListener('touchend', this.onTouchEnd, false);
		layer.addEventListener('touchcancel', this.onTouchCancel, false);

		// Hack is required for browsers that don't support Event#stopImmediatePropagation (e.g. Android 2)
		// which is how FastClick normally stops click events bubbling to callbacks registered on the FastClick
		// layer when they are cancelled.
		if (!Event.prototype.stopImmediatePropagation) {
			layer.removeEventListener = function(type, callback, capture) {
				var rmv = Node.prototype.removeEventListener;
				if (type === 'click') {
					rmv.call(layer, type, callback.hijacked || callback, capture);
				} else {
					rmv.call(layer, type, callback, capture);
				}
			};

			layer.addEventListener = function(type, callback, capture) {
				var adv = Node.prototype.addEventListener;
				if (type === 'click') {
					adv.call(layer, type, callback.hijacked || (callback.hijacked = function(event) {
						if (!event.propagationStopped) {
							callback(event);
						}
					}), capture);
				} else {
					adv.call(layer, type, callback, capture);
				}
			};
		}

		// If a handler is already declared in the element's onclick attribute, it will be fired before
		// FastClick's onClick handler. Fix this by pulling out the user-defined handler function and
		// adding it as listener.
		if (typeof layer.onclick === 'function') {

			// Android browser on at least 3.2 requires a new reference to the function in layer.onclick
			// - the old one won't work if passed to addEventListener directly.
			oldOnClick = layer.onclick;
			layer.addEventListener('click', function(event) {
				oldOnClick(event);
			}, false);
			layer.onclick = null;
		}
	}

	/**
	* Windows Phone 8.1 fakes user agent string to look like Android and iPhone.
	*
	* @type boolean
	*/
	var deviceIsWindowsPhone = navigator.userAgent.indexOf("Windows Phone") >= 0;

	/**
	 * Android requires exceptions.
	 *
	 * @type boolean
	 */
	var deviceIsAndroid = navigator.userAgent.indexOf('Android') > 0 && !deviceIsWindowsPhone;


	/**
	 * iOS requires exceptions.
	 *
	 * @type boolean
	 */
	var deviceIsIOS = /iP(ad|hone|od)/.test(navigator.userAgent) && !deviceIsWindowsPhone;


	/**
	 * iOS 4 requires an exception for select elements.
	 *
	 * @type boolean
	 */
	var deviceIsIOS4 = deviceIsIOS && (/OS 4_\d(_\d)?/).test(navigator.userAgent);


	/**
	 * iOS 6.0-7.* requires the target element to be manually derived
	 *
	 * @type boolean
	 */
	var deviceIsIOSWithBadTarget = deviceIsIOS && (/OS [6-7]_\d/).test(navigator.userAgent);

	/**
	 * BlackBerry requires exceptions.
	 *
	 * @type boolean
	 */
	var deviceIsBlackBerry10 = navigator.userAgent.indexOf('BB10') > 0;

	/**
	 * Determine whether a given element requires a native click.
	 *
	 * @param {EventTarget|Element} target Target DOM element
	 * @returns {boolean} Returns true if the element needs a native click
	 */
	FastClick.prototype.needsClick = function(target) {
		switch (target.nodeName.toLowerCase()) {

		// Don't send a synthetic click to disabled inputs (issue #62)
		case 'button':
		case 'select':
		case 'textarea':
			if (target.disabled) {
				return true;
			}

			break;
		case 'input':

			// File inputs need real clicks on iOS 6 due to a browser bug (issue #68)
			if ((deviceIsIOS && target.type === 'file') || target.disabled) {
				return true;
			}

			break;
		case 'label':
		case 'iframe': // iOS8 homescreen apps can prevent events bubbling into frames
		case 'video':
			return true;
		}

		return (/\bneedsclick\b/).test(target.className);
	};


	/**
	 * Determine whether a given element requires a call to focus to simulate click into element.
	 *
	 * @param {EventTarget|Element} target Target DOM element
	 * @returns {boolean} Returns true if the element requires a call to focus to simulate native click.
	 */
	FastClick.prototype.needsFocus = function(target) {
		switch (target.nodeName.toLowerCase()) {
		case 'textarea':
			return true;
		case 'select':
			return !deviceIsAndroid;
		case 'input':
			switch (target.type) {
			case 'button':
			case 'checkbox':
			case 'file':
			case 'image':
			case 'radio':
			case 'submit':
				return false;
			}

			// No point in attempting to focus disabled inputs
			return !target.disabled && !target.readOnly;
		default:
			return (/\bneedsfocus\b/).test(target.className);
		}
	};


	/**
	 * Send a click event to the specified element.
	 *
	 * @param {EventTarget|Element} targetElement
	 * @param {Event} event
	 */
	FastClick.prototype.sendClick = function(targetElement, event) {
		var clickEvent, touch;

		// On some Android devices activeElement needs to be blurred otherwise the synthetic click will have no effect (#24)
		if (document.activeElement && document.activeElement !== targetElement) {
			document.activeElement.blur();
		}

		touch = event.changedTouches[0];

		// Synthesise a click event, with an extra attribute so it can be tracked
		clickEvent = document.createEvent('MouseEvents');
		clickEvent.initMouseEvent(this.determineEventType(targetElement), true, true, window, 1, touch.screenX, touch.screenY, touch.clientX, touch.clientY, false, false, false, false, 0, null);
		clickEvent.forwardedTouchEvent = true;
		targetElement.dispatchEvent(clickEvent);
	};

	FastClick.prototype.determineEventType = function(targetElement) {

		//Issue #159: Android Chrome Select Box does not open with a synthetic click event
		if (deviceIsAndroid && targetElement.tagName.toLowerCase() === 'select') {
			return 'mousedown';
		}

		return 'click';
	};


	/**
	 * @param {EventTarget|Element} targetElement
	 */
	FastClick.prototype.focus = function(targetElement) {
		var length;

		// Issue #160: on iOS 7, some input elements (e.g. date datetime month) throw a vague TypeError on setSelectionRange. These elements don't have an integer value for the selectionStart and selectionEnd properties, but unfortunately that can't be used for detection because accessing the properties also throws a TypeError. Just check the type instead. Filed as Apple bug #15122724.
		if (deviceIsIOS && targetElement.setSelectionRange && targetElement.type.indexOf('date') !== 0 && targetElement.type !== 'time' && targetElement.type !== 'month') {
			length = targetElement.value.length;
			targetElement.setSelectionRange(length, length);
		} else {
			targetElement.focus();
		}
	};


	/**
	 * Check whether the given target element is a child of a scrollable layer and if so, set a flag on it.
	 *
	 * @param {EventTarget|Element} targetElement
	 */
	FastClick.prototype.updateScrollParent = function(targetElement) {
		var scrollParent, parentElement;

		scrollParent = targetElement.fastClickScrollParent;

		// Attempt to discover whether the target element is contained within a scrollable layer. Re-check if the
		// target element was moved to another parent.
		if (!scrollParent || !scrollParent.contains(targetElement)) {
			parentElement = targetElement;
			do {
				if (parentElement.scrollHeight > parentElement.offsetHeight) {
					scrollParent = parentElement;
					targetElement.fastClickScrollParent = parentElement;
					break;
				}

				parentElement = parentElement.parentElement;
			} while (parentElement);
		}

		// Always update the scroll top tracker if possible.
		if (scrollParent) {
			scrollParent.fastClickLastScrollTop = scrollParent.scrollTop;
		}
	};


	/**
	 * @param {EventTarget} targetElement
	 * @returns {Element|EventTarget}
	 */
	FastClick.prototype.getTargetElementFromEventTarget = function(eventTarget) {

		// On some older browsers (notably Safari on iOS 4.1 - see issue #56) the event target may be a text node.
		if (eventTarget.nodeType === Node.TEXT_NODE) {
			return eventTarget.parentNode;
		}

		return eventTarget;
	};


	/**
	 * On touch start, record the position and scroll offset.
	 *
	 * @param {Event} event
	 * @returns {boolean}
	 */
	FastClick.prototype.onTouchStart = function(event) {
		var targetElement, touch, selection;

		// Ignore multiple touches, otherwise pinch-to-zoom is prevented if both fingers are on the FastClick element (issue #111).
		if (event.targetTouches.length > 1) {
			return true;
		}

		targetElement = this.getTargetElementFromEventTarget(event.target);
		touch = event.targetTouches[0];

		if (deviceIsIOS) {

			// Only trusted events will deselect text on iOS (issue #49)
			selection = window.getSelection();
			if (selection.rangeCount && !selection.isCollapsed) {
				return true;
			}

			if (!deviceIsIOS4) {

				// Weird things happen on iOS when an alert or confirm dialog is opened from a click event callback (issue #23):
				// when the user next taps anywhere else on the page, new touchstart and touchend events are dispatched
				// with the same identifier as the touch event that previously triggered the click that triggered the alert.
				// Sadly, there is an issue on iOS 4 that causes some normal touch events to have the same identifier as an
				// immediately preceeding touch event (issue #52), so this fix is unavailable on that platform.
				// Issue 120: touch.identifier is 0 when Chrome dev tools 'Emulate touch events' is set with an iOS device UA string,
				// which causes all touch events to be ignored. As this block only applies to iOS, and iOS identifiers are always long,
				// random integers, it's safe to to continue if the identifier is 0 here.
				if (touch.identifier && touch.identifier === this.lastTouchIdentifier) {
					event.preventDefault();
					return false;
				}

				this.lastTouchIdentifier = touch.identifier;

				// If the target element is a child of a scrollable layer (using -webkit-overflow-scrolling: touch) and:
				// 1) the user does a fling scroll on the scrollable layer
				// 2) the user stops the fling scroll with another tap
				// then the event.target of the last 'touchend' event will be the element that was under the user's finger
				// when the fling scroll was started, causing FastClick to send a click event to that layer - unless a check
				// is made to ensure that a parent layer was not scrolled before sending a synthetic click (issue #42).
				this.updateScrollParent(targetElement);
			}
		}

		this.trackingClick = true;
		this.trackingClickStart = event.timeStamp;
		this.targetElement = targetElement;

		this.touchStartX = touch.pageX;
		this.touchStartY = touch.pageY;

		// Prevent phantom clicks on fast double-tap (issue #36)
		if ((event.timeStamp - this.lastClickTime) < this.tapDelay) {
			event.preventDefault();
		}

		return true;
	};


	/**
	 * Based on a touchmove event object, check whether the touch has moved past a boundary since it started.
	 *
	 * @param {Event} event
	 * @returns {boolean}
	 */
	FastClick.prototype.touchHasMoved = function(event) {
		var touch = event.changedTouches[0], boundary = this.touchBoundary;

		if (Math.abs(touch.pageX - this.touchStartX) > boundary || Math.abs(touch.pageY - this.touchStartY) > boundary) {
			return true;
		}

		return false;
	};


	/**
	 * Update the last position.
	 *
	 * @param {Event} event
	 * @returns {boolean}
	 */
	FastClick.prototype.onTouchMove = function(event) {
		if (!this.trackingClick) {
			return true;
		}

		// If the touch has moved, cancel the click tracking
		if (this.targetElement !== this.getTargetElementFromEventTarget(event.target) || this.touchHasMoved(event)) {
			this.trackingClick = false;
			this.targetElement = null;
		}

		return true;
	};


	/**
	 * Attempt to find the labelled control for the given label element.
	 *
	 * @param {EventTarget|HTMLLabelElement} labelElement
	 * @returns {Element|null}
	 */
	FastClick.prototype.findControl = function(labelElement) {

		// Fast path for newer browsers supporting the HTML5 control attribute
		if (labelElement.control !== undefined) {
			return labelElement.control;
		}

		// All browsers under test that support touch events also support the HTML5 htmlFor attribute
		if (labelElement.htmlFor) {
			return document.getElementById(labelElement.htmlFor);
		}

		// If no for attribute exists, attempt to retrieve the first labellable descendant element
		// the list of which is defined here: http://www.w3.org/TR/html5/forms.html#category-label
		return labelElement.querySelector('button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea');
	};


	/**
	 * On touch end, determine whether to send a click event at once.
	 *
	 * @param {Event} event
	 * @returns {boolean}
	 */
	FastClick.prototype.onTouchEnd = function(event) {
		var forElement, trackingClickStart, targetTagName, scrollParent, touch, targetElement = this.targetElement;

		if (!this.trackingClick) {
			return true;
		}

		// Prevent phantom clicks on fast double-tap (issue #36)
		if ((event.timeStamp - this.lastClickTime) < this.tapDelay) {
			this.cancelNextClick = true;
			return true;
		}

		if ((event.timeStamp - this.trackingClickStart) > this.tapTimeout) {
			return true;
		}

		// Reset to prevent wrong click cancel on input (issue #156).
		this.cancelNextClick = false;

		this.lastClickTime = event.timeStamp;

		trackingClickStart = this.trackingClickStart;
		this.trackingClick = false;
		this.trackingClickStart = 0;

		// On some iOS devices, the targetElement supplied with the event is invalid if the layer
		// is performing a transition or scroll, and has to be re-detected manually. Note that
		// for this to function correctly, it must be called *after* the event target is checked!
		// See issue #57; also filed as rdar://13048589 .
		if (deviceIsIOSWithBadTarget) {
			touch = event.changedTouches[0];

			// In certain cases arguments of elementFromPoint can be negative, so prevent setting targetElement to null
			targetElement = document.elementFromPoint(touch.pageX - window.pageXOffset, touch.pageY - window.pageYOffset) || targetElement;
			targetElement.fastClickScrollParent = this.targetElement.fastClickScrollParent;
		}

		targetTagName = targetElement.tagName.toLowerCase();
		if (targetTagName === 'label') {
			forElement = this.findControl(targetElement);
			if (forElement) {
				this.focus(targetElement);
				if (deviceIsAndroid) {
					return false;
				}

				targetElement = forElement;
			}
		} else if (this.needsFocus(targetElement)) {

			// Case 1: If the touch started a while ago (best guess is 100ms based on tests for issue #36) then focus will be triggered anyway. Return early and unset the target element reference so that the subsequent click will be allowed through.
			// Case 2: Without this exception for input elements tapped when the document is contained in an iframe, then any inputted text won't be visible even though the value attribute is updated as the user types (issue #37).
			if ((event.timeStamp - trackingClickStart) > 100 || (deviceIsIOS && window.top !== window && targetTagName === 'input')) {
				this.targetElement = null;
				return false;
			}

			this.focus(targetElement);
			this.sendClick(targetElement, event);

			// Select elements need the event to go through on iOS 4, otherwise the selector menu won't open.
			// Also this breaks opening selects when VoiceOver is active on iOS6, iOS7 (and possibly others)
			if (!deviceIsIOS || targetTagName !== 'select') {
				this.targetElement = null;
				event.preventDefault();
			}

			return false;
		}

		if (deviceIsIOS && !deviceIsIOS4) {

			// Don't send a synthetic click event if the target element is contained within a parent layer that was scrolled
			// and this tap is being used to stop the scrolling (usually initiated by a fling - issue #42).
			scrollParent = targetElement.fastClickScrollParent;
			if (scrollParent && scrollParent.fastClickLastScrollTop !== scrollParent.scrollTop) {
				return true;
			}
		}

		// Prevent the actual click from going though - unless the target node is marked as requiring
		// real clicks or if it is in the whitelist in which case only non-programmatic clicks are permitted.
		if (!this.needsClick(targetElement)) {
			event.preventDefault();
			this.sendClick(targetElement, event);
		}

		return false;
	};


	/**
	 * On touch cancel, stop tracking the click.
	 *
	 * @returns {void}
	 */
	FastClick.prototype.onTouchCancel = function() {
		this.trackingClick = false;
		this.targetElement = null;
	};


	/**
	 * Determine mouse events which should be permitted.
	 *
	 * @param {Event} event
	 * @returns {boolean}
	 */
	FastClick.prototype.onMouse = function(event) {

		// If a target element was never set (because a touch event was never fired) allow the event
		if (!this.targetElement) {
			return true;
		}

		if (event.forwardedTouchEvent) {
			return true;
		}

		// Programmatically generated events targeting a specific element should be permitted
		if (!event.cancelable) {
			return true;
		}

		// Derive and check the target element to see whether the mouse event needs to be permitted;
		// unless explicitly enabled, prevent non-touch click events from triggering actions,
		// to prevent ghost/doubleclicks.
		if (!this.needsClick(this.targetElement) || this.cancelNextClick) {

			// Prevent any user-added listeners declared on FastClick element from being fired.
			if (event.stopImmediatePropagation) {
				event.stopImmediatePropagation();
			} else {

				// Part of the hack for browsers that don't support Event#stopImmediatePropagation (e.g. Android 2)
				event.propagationStopped = true;
			}

			// Cancel the event
			event.stopPropagation();
			event.preventDefault();

			return false;
		}

		// If the mouse event is permitted, return true for the action to go through.
		return true;
	};


	/**
	 * On actual clicks, determine whether this is a touch-generated click, a click action occurring
	 * naturally after a delay after a touch (which needs to be cancelled to avoid duplication), or
	 * an actual click which should be permitted.
	 *
	 * @param {Event} event
	 * @returns {boolean}
	 */
	FastClick.prototype.onClick = function(event) {
		var permitted;

		// It's possible for another FastClick-like library delivered with third-party code to fire a click event before FastClick does (issue #44). In that case, set the click-tracking flag back to false and return early. This will cause onTouchEnd to return early.
		if (this.trackingClick) {
			this.targetElement = null;
			this.trackingClick = false;
			return true;
		}

		// Very odd behaviour on iOS (issue #18): if a submit element is present inside a form and the user hits enter in the iOS simulator or clicks the Go button on the pop-up OS keyboard the a kind of 'fake' click event will be triggered with the submit-type input element as the target.
		if (event.target.type === 'submit' && event.detail === 0) {
			return true;
		}

		permitted = this.onMouse(event);

		// Only unset targetElement if the click is not permitted. This will ensure that the check for !targetElement in onMouse fails and the browser's click doesn't go through.
		if (!permitted) {
			this.targetElement = null;
		}

		// If clicks are permitted, return true for the action to go through.
		return permitted;
	};


	/**
	 * Remove all FastClick's event listeners.
	 *
	 * @returns {void}
	 */
	FastClick.prototype.destroy = function() {
		var layer = this.layer;

		if (deviceIsAndroid) {
			layer.removeEventListener('mouseover', this.onMouse, true);
			layer.removeEventListener('mousedown', this.onMouse, true);
			layer.removeEventListener('mouseup', this.onMouse, true);
		}

		layer.removeEventListener('click', this.onClick, true);
		layer.removeEventListener('touchstart', this.onTouchStart, false);
		layer.removeEventListener('touchmove', this.onTouchMove, false);
		layer.removeEventListener('touchend', this.onTouchEnd, false);
		layer.removeEventListener('touchcancel', this.onTouchCancel, false);
	};


	/**
	 * Check whether FastClick is needed.
	 *
	 * @param {Element} layer The layer to listen on
	 */
	FastClick.notNeeded = function(layer) {
		var metaViewport;
		var chromeVersion;
		var blackberryVersion;
		var firefoxVersion;

		// Devices that don't support touch don't need FastClick
		if (typeof window.ontouchstart === 'undefined') {
			return true;
		}

		// Chrome version - zero for other browsers
		chromeVersion = +(/Chrome\/([0-9]+)/.exec(navigator.userAgent) || [,0])[1];

		if (chromeVersion) {

			if (deviceIsAndroid) {
				metaViewport = document.querySelector('meta[name=viewport]');

				if (metaViewport) {
					// Chrome on Android with user-scalable="no" doesn't need FastClick (issue #89)
					if (metaViewport.content.indexOf('user-scalable=no') !== -1) {
						return true;
					}
					// Chrome 32 and above with width=device-width or less don't need FastClick
					if (chromeVersion > 31 && document.documentElement.scrollWidth <= window.outerWidth) {
						return true;
					}
				}

			// Chrome desktop doesn't need FastClick (issue #15)
			} else {
				return true;
			}
		}

		if (deviceIsBlackBerry10) {
			blackberryVersion = navigator.userAgent.match(/Version\/([0-9]*)\.([0-9]*)/);

			// BlackBerry 10.3+ does not require Fastclick library.
			// https://github.com/ftlabs/fastclick/issues/251
			if (blackberryVersion[1] >= 10 && blackberryVersion[2] >= 3) {
				metaViewport = document.querySelector('meta[name=viewport]');

				if (metaViewport) {
					// user-scalable=no eliminates click delay.
					if (metaViewport.content.indexOf('user-scalable=no') !== -1) {
						return true;
					}
					// width=device-width (or less than device-width) eliminates click delay.
					if (document.documentElement.scrollWidth <= window.outerWidth) {
						return true;
					}
				}
			}
		}

		// IE10 with -ms-touch-action: none or manipulation, which disables double-tap-to-zoom (issue #97)
		if (layer.style.msTouchAction === 'none' || layer.style.touchAction === 'manipulation') {
			return true;
		}

		// Firefox version - zero for other browsers
		firefoxVersion = +(/Firefox\/([0-9]+)/.exec(navigator.userAgent) || [,0])[1];

		if (firefoxVersion >= 27) {
			// Firefox 27+ does not have tap delay if the content is not zoomable - https://bugzilla.mozilla.org/show_bug.cgi?id=922896

			metaViewport = document.querySelector('meta[name=viewport]');
			if (metaViewport && (metaViewport.content.indexOf('user-scalable=no') !== -1 || document.documentElement.scrollWidth <= window.outerWidth)) {
				return true;
			}
		}

		// IE11: prefixed -ms-touch-action is no longer supported and it's recomended to use non-prefixed version
		// http://msdn.microsoft.com/en-us/library/windows/apps/Hh767313.aspx
		if (layer.style.touchAction === 'none' || layer.style.touchAction === 'manipulation') {
			return true;
		}

		return false;
	};


	/**
	 * Factory method for creating a FastClick object
	 *
	 * @param {Element} layer The layer to listen on
	 * @param {Object} [options={}] The options to override the defaults
	 */
	FastClick.attach = function(layer, options) {
		return new FastClick(layer, options);
	};


	if (true) {

		// AMD. Register as an anonymous module.
		!(__WEBPACK_AMD_DEFINE_RESULT__ = function() {
			return FastClick;
		}.call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else if (typeof module !== 'undefined' && module.exports) {
		module.exports = FastClick.attach;
		module.exports.FastClick = FastClick;
	} else {
		window.FastClick = FastClick;
	}
}());


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/**
  * vue-router v2.2.1
  * (c) 2017 Evan You
  * @license MIT
  */
/*  */

function assert (condition, message) {
  if (!condition) {
    throw new Error(("[vue-router] " + message))
  }
}

function warn (condition, message) {
  if (!condition) {
    typeof console !== 'undefined' && console.warn(("[vue-router] " + message));
  }
}

var View = {
  name: 'router-view',
  functional: true,
  props: {
    name: {
      type: String,
      default: 'default'
    }
  },
  render: function render (h, ref) {
    var props = ref.props;
    var children = ref.children;
    var parent = ref.parent;
    var data = ref.data;

    data.routerView = true;

    var name = props.name;
    var route = parent.$route;
    var cache = parent._routerViewCache || (parent._routerViewCache = {});

    // determine current view depth, also check to see if the tree
    // has been toggled inactive but kept-alive.
    var depth = 0;
    var inactive = false;
    while (parent) {
      if (parent.$vnode && parent.$vnode.data.routerView) {
        depth++;
      }
      if (parent._inactive) {
        inactive = true;
      }
      parent = parent.$parent;
    }
    data.routerViewDepth = depth;

    // render previous view if the tree is inactive and kept-alive
    if (inactive) {
      return h(cache[name], data, children)
    }

    var matched = route.matched[depth];
    // render empty node if no matched route
    if (!matched) {
      cache[name] = null;
      return h()
    }

    var component = cache[name] = matched.components[name];

    // inject instance registration hooks
    var hooks = data.hook || (data.hook = {});
    hooks.init = function (vnode) {
      matched.instances[name] = vnode.child;
    };
    hooks.prepatch = function (oldVnode, vnode) {
      matched.instances[name] = vnode.child;
    };
    hooks.destroy = function (vnode) {
      if (matched.instances[name] === vnode.child) {
        matched.instances[name] = undefined;
      }
    };

    // resolve props
    data.props = resolveProps(route, matched.props && matched.props[name]);

    return h(component, data, children)
  }
};

function resolveProps (route, config) {
  switch (typeof config) {
    case 'undefined':
      return
    case 'object':
      return config
    case 'function':
      return config(route)
    case 'boolean':
      return config ? route.params : undefined
    default:
      warn(false, ("props in \"" + (route.path) + "\" is a " + (typeof config) + ", expecting an object, function or boolean."));
  }
}

/*  */

var encodeReserveRE = /[!'()*]/g;
var encodeReserveReplacer = function (c) { return '%' + c.charCodeAt(0).toString(16); };
var commaRE = /%2C/g;

// fixed encodeURIComponent which is more comformant to RFC3986:
// - escapes [!'()*]
// - preserve commas
var encode = function (str) { return encodeURIComponent(str)
  .replace(encodeReserveRE, encodeReserveReplacer)
  .replace(commaRE, ','); };

var decode = decodeURIComponent;

function resolveQuery (
  query,
  extraQuery
) {
  if ( extraQuery === void 0 ) extraQuery = {};

  if (query) {
    var parsedQuery;
    try {
      parsedQuery = parseQuery(query);
    } catch (e) {
      process.env.NODE_ENV !== 'production' && warn(false, e.message);
      parsedQuery = {};
    }
    for (var key in extraQuery) {
      parsedQuery[key] = extraQuery[key];
    }
    return parsedQuery
  } else {
    return extraQuery
  }
}

function parseQuery (query) {
  var res = {};

  query = query.trim().replace(/^(\?|#|&)/, '');

  if (!query) {
    return res
  }

  query.split('&').forEach(function (param) {
    var parts = param.replace(/\+/g, ' ').split('=');
    var key = decode(parts.shift());
    var val = parts.length > 0
      ? decode(parts.join('='))
      : null;

    if (res[key] === undefined) {
      res[key] = val;
    } else if (Array.isArray(res[key])) {
      res[key].push(val);
    } else {
      res[key] = [res[key], val];
    }
  });

  return res
}

function stringifyQuery (obj) {
  var res = obj ? Object.keys(obj).map(function (key) {
    var val = obj[key];

    if (val === undefined) {
      return ''
    }

    if (val === null) {
      return encode(key)
    }

    if (Array.isArray(val)) {
      var result = [];
      val.slice().forEach(function (val2) {
        if (val2 === undefined) {
          return
        }
        if (val2 === null) {
          result.push(encode(key));
        } else {
          result.push(encode(key) + '=' + encode(val2));
        }
      });
      return result.join('&')
    }

    return encode(key) + '=' + encode(val)
  }).filter(function (x) { return x.length > 0; }).join('&') : null;
  return res ? ("?" + res) : ''
}

/*  */

var trailingSlashRE = /\/?$/;

function createRoute (
  record,
  location,
  redirectedFrom
) {
  var route = {
    name: location.name || (record && record.name),
    meta: (record && record.meta) || {},
    path: location.path || '/',
    hash: location.hash || '',
    query: location.query || {},
    params: location.params || {},
    fullPath: getFullPath(location),
    matched: record ? formatMatch(record) : []
  };
  if (redirectedFrom) {
    route.redirectedFrom = getFullPath(redirectedFrom);
  }
  return Object.freeze(route)
}

// the starting route that represents the initial state
var START = createRoute(null, {
  path: '/'
});

function formatMatch (record) {
  var res = [];
  while (record) {
    res.unshift(record);
    record = record.parent;
  }
  return res
}

function getFullPath (ref) {
  var path = ref.path;
  var query = ref.query; if ( query === void 0 ) query = {};
  var hash = ref.hash; if ( hash === void 0 ) hash = '';

  return (path || '/') + stringifyQuery(query) + hash
}

function isSameRoute (a, b) {
  if (b === START) {
    return a === b
  } else if (!b) {
    return false
  } else if (a.path && b.path) {
    return (
      a.path.replace(trailingSlashRE, '') === b.path.replace(trailingSlashRE, '') &&
      a.hash === b.hash &&
      isObjectEqual(a.query, b.query)
    )
  } else if (a.name && b.name) {
    return (
      a.name === b.name &&
      a.hash === b.hash &&
      isObjectEqual(a.query, b.query) &&
      isObjectEqual(a.params, b.params)
    )
  } else {
    return false
  }
}

function isObjectEqual (a, b) {
  if ( a === void 0 ) a = {};
  if ( b === void 0 ) b = {};

  var aKeys = Object.keys(a);
  var bKeys = Object.keys(b);
  if (aKeys.length !== bKeys.length) {
    return false
  }
  return aKeys.every(function (key) { return String(a[key]) === String(b[key]); })
}

function isIncludedRoute (current, target) {
  return (
    current.path.replace(trailingSlashRE, '/').indexOf(
      target.path.replace(trailingSlashRE, '/')
    ) === 0 &&
    (!target.hash || current.hash === target.hash) &&
    queryIncludes(current.query, target.query)
  )
}

function queryIncludes (current, target) {
  for (var key in target) {
    if (!(key in current)) {
      return false
    }
  }
  return true
}

/*  */

// work around weird flow bug
var toTypes = [String, Object];
var eventTypes = [String, Array];

var Link = {
  name: 'router-link',
  props: {
    to: {
      type: toTypes,
      required: true
    },
    tag: {
      type: String,
      default: 'a'
    },
    exact: Boolean,
    append: Boolean,
    replace: Boolean,
    activeClass: String,
    event: {
      type: eventTypes,
      default: 'click'
    }
  },
  render: function render (h) {
    var this$1 = this;

    var router = this.$router;
    var current = this.$route;
    var ref = router.resolve(this.to, current, this.append);
    var location = ref.location;
    var route = ref.route;
    var href = ref.href;
    var classes = {};
    var activeClass = this.activeClass || router.options.linkActiveClass || 'router-link-active';
    var compareTarget = location.path ? createRoute(null, location) : route;
    classes[activeClass] = this.exact
      ? isSameRoute(current, compareTarget)
      : isIncludedRoute(current, compareTarget);

    var handler = function (e) {
      if (guardEvent(e)) {
        if (this$1.replace) {
          router.replace(location);
        } else {
          router.push(location);
        }
      }
    };

    var on = { click: guardEvent };
    if (Array.isArray(this.event)) {
      this.event.forEach(function (e) { on[e] = handler; });
    } else {
      on[this.event] = handler;
    }

    var data = {
      class: classes
    };

    if (this.tag === 'a') {
      data.on = on;
      data.attrs = { href: href };
    } else {
      // find the first <a> child and apply listener and href
      var a = findAnchor(this.$slots.default);
      if (a) {
        // in case the <a> is a static node
        a.isStatic = false;
        var extend = _Vue.util.extend;
        var aData = a.data = extend({}, a.data);
        aData.on = on;
        var aAttrs = a.data.attrs = extend({}, a.data.attrs);
        aAttrs.href = href;
      } else {
        // doesn't have <a> child, apply listener to self
        data.on = on;
      }
    }

    return h(this.tag, data, this.$slots.default)
  }
};

function guardEvent (e) {
  // don't redirect with control keys
  if (e.metaKey || e.ctrlKey || e.shiftKey) { return }
  // don't redirect when preventDefault called
  if (e.defaultPrevented) { return }
  // don't redirect on right click
  if (e.button !== undefined && e.button !== 0) { return }
  // don't redirect if `target="_blank"`
  if (e.target && e.target.getAttribute) {
    var target = e.target.getAttribute('target');
    if (/\b_blank\b/i.test(target)) { return }
  }
  // this may be a Weex event which doesn't have this method
  if (e.preventDefault) {
    e.preventDefault();
  }
  return true
}

function findAnchor (children) {
  if (children) {
    var child;
    for (var i = 0; i < children.length; i++) {
      child = children[i];
      if (child.tag === 'a') {
        return child
      }
      if (child.children && (child = findAnchor(child.children))) {
        return child
      }
    }
  }
}

var _Vue;

function install (Vue) {
  if (install.installed) { return }
  install.installed = true;

  _Vue = Vue;

  Object.defineProperty(Vue.prototype, '$router', {
    get: function get () { return this.$root._router }
  });

  Object.defineProperty(Vue.prototype, '$route', {
    get: function get () { return this.$root._route }
  });

  Vue.mixin({
    beforeCreate: function beforeCreate () {
      if (this.$options.router) {
        this._router = this.$options.router;
        this._router.init(this);
        Vue.util.defineReactive(this, '_route', this._router.history.current);
      }
    }
  });

  Vue.component('router-view', View);
  Vue.component('router-link', Link);

  var strats = Vue.config.optionMergeStrategies;
  // use the same hook merging strategy for route hooks
  strats.beforeRouteEnter = strats.beforeRouteLeave = strats.created;
}

/*  */

var inBrowser = typeof window !== 'undefined';

/*  */

function resolvePath (
  relative,
  base,
  append
) {
  if (relative.charAt(0) === '/') {
    return relative
  }

  if (relative.charAt(0) === '?' || relative.charAt(0) === '#') {
    return base + relative
  }

  var stack = base.split('/');

  // remove trailing segment if:
  // - not appending
  // - appending to trailing slash (last segment is empty)
  if (!append || !stack[stack.length - 1]) {
    stack.pop();
  }

  // resolve relative path
  var segments = relative.replace(/^\//, '').split('/');
  for (var i = 0; i < segments.length; i++) {
    var segment = segments[i];
    if (segment === '.') {
      continue
    } else if (segment === '..') {
      stack.pop();
    } else {
      stack.push(segment);
    }
  }

  // ensure leading slash
  if (stack[0] !== '') {
    stack.unshift('');
  }

  return stack.join('/')
}

function parsePath (path) {
  var hash = '';
  var query = '';

  var hashIndex = path.indexOf('#');
  if (hashIndex >= 0) {
    hash = path.slice(hashIndex);
    path = path.slice(0, hashIndex);
  }

  var queryIndex = path.indexOf('?');
  if (queryIndex >= 0) {
    query = path.slice(queryIndex + 1);
    path = path.slice(0, queryIndex);
  }

  return {
    path: path,
    query: query,
    hash: hash
  }
}

function cleanPath (path) {
  return path.replace(/\/\//g, '/')
}

/*  */

function createRouteMap (
  routes,
  oldPathMap,
  oldNameMap
) {
  var pathMap = oldPathMap || Object.create(null);
  var nameMap = oldNameMap || Object.create(null);

  routes.forEach(function (route) {
    addRouteRecord(pathMap, nameMap, route);
  });

  return {
    pathMap: pathMap,
    nameMap: nameMap
  }
}

function addRouteRecord (
  pathMap,
  nameMap,
  route,
  parent,
  matchAs
) {
  var path = route.path;
  var name = route.name;
  if (process.env.NODE_ENV !== 'production') {
    assert(path != null, "\"path\" is required in a route configuration.");
    assert(
      typeof route.component !== 'string',
      "route config \"component\" for path: " + (String(path || name)) + " cannot be a " +
      "string id. Use an actual component instead."
    );
  }

  var record = {
    path: normalizePath(path, parent),
    components: route.components || { default: route.component },
    instances: {},
    name: name,
    parent: parent,
    matchAs: matchAs,
    redirect: route.redirect,
    beforeEnter: route.beforeEnter,
    meta: route.meta || {},
    props: route.props == null
      ? {}
      : route.components
        ? route.props
        : { default: route.props }
  };

  if (route.children) {
    // Warn if route is named and has a default child route.
    // If users navigate to this route by name, the default child will
    // not be rendered (GH Issue #629)
    if (process.env.NODE_ENV !== 'production') {
      if (route.name && route.children.some(function (child) { return /^\/?$/.test(child.path); })) {
        warn(
          false,
          "Named Route '" + (route.name) + "' has a default child route. " +
          "When navigating to this named route (:to=\"{name: '" + (route.name) + "'\"), " +
          "the default child route will not be rendered. Remove the name from " +
          "this route and use the name of the default child route for named " +
          "links instead."
        );
      }
    }
    route.children.forEach(function (child) {
      var childMatchAs = matchAs
        ? cleanPath((matchAs + "/" + (child.path)))
        : undefined;
      addRouteRecord(pathMap, nameMap, child, record, childMatchAs);
    });
  }

  if (route.alias !== undefined) {
    if (Array.isArray(route.alias)) {
      route.alias.forEach(function (alias) {
        var aliasRoute = {
          path: alias,
          children: route.children
        };
        addRouteRecord(pathMap, nameMap, aliasRoute, parent, record.path);
      });
    } else {
      var aliasRoute = {
        path: route.alias,
        children: route.children
      };
      addRouteRecord(pathMap, nameMap, aliasRoute, parent, record.path);
    }
  }

  if (!pathMap[record.path]) {
    pathMap[record.path] = record;
  }

  if (name) {
    if (!nameMap[name]) {
      nameMap[name] = record;
    } else if (process.env.NODE_ENV !== 'production' && !matchAs) {
      warn(
        false,
        "Duplicate named routes definition: " +
        "{ name: \"" + name + "\", path: \"" + (record.path) + "\" }"
      );
    }
  }
}

function normalizePath (path, parent) {
  path = path.replace(/\/$/, '');
  if (path[0] === '/') { return path }
  if (parent == null) { return path }
  return cleanPath(((parent.path) + "/" + path))
}

var index$1 = Array.isArray || function (arr) {
  return Object.prototype.toString.call(arr) == '[object Array]';
};

var isarray = index$1;

/**
 * Expose `pathToRegexp`.
 */
var index = pathToRegexp;
var parse_1 = parse;
var compile_1 = compile;
var tokensToFunction_1 = tokensToFunction;
var tokensToRegExp_1 = tokensToRegExp;

/**
 * The main path matching regexp utility.
 *
 * @type {RegExp}
 */
var PATH_REGEXP = new RegExp([
  // Match escaped characters that would otherwise appear in future matches.
  // This allows the user to escape special characters that won't transform.
  '(\\\\.)',
  // Match Express-style parameters and un-named parameters with a prefix
  // and optional suffixes. Matches appear as:
  //
  // "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
  // "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
  // "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
  '([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'
].join('|'), 'g');

/**
 * Parse a string for the raw tokens.
 *
 * @param  {string}  str
 * @param  {Object=} options
 * @return {!Array}
 */
function parse (str, options) {
  var tokens = [];
  var key = 0;
  var index = 0;
  var path = '';
  var defaultDelimiter = options && options.delimiter || '/';
  var res;

  while ((res = PATH_REGEXP.exec(str)) != null) {
    var m = res[0];
    var escaped = res[1];
    var offset = res.index;
    path += str.slice(index, offset);
    index = offset + m.length;

    // Ignore already escaped sequences.
    if (escaped) {
      path += escaped[1];
      continue
    }

    var next = str[index];
    var prefix = res[2];
    var name = res[3];
    var capture = res[4];
    var group = res[5];
    var modifier = res[6];
    var asterisk = res[7];

    // Push the current path onto the tokens.
    if (path) {
      tokens.push(path);
      path = '';
    }

    var partial = prefix != null && next != null && next !== prefix;
    var repeat = modifier === '+' || modifier === '*';
    var optional = modifier === '?' || modifier === '*';
    var delimiter = res[2] || defaultDelimiter;
    var pattern = capture || group;

    tokens.push({
      name: name || key++,
      prefix: prefix || '',
      delimiter: delimiter,
      optional: optional,
      repeat: repeat,
      partial: partial,
      asterisk: !!asterisk,
      pattern: pattern ? escapeGroup(pattern) : (asterisk ? '.*' : '[^' + escapeString(delimiter) + ']+?')
    });
  }

  // Match any characters still remaining.
  if (index < str.length) {
    path += str.substr(index);
  }

  // If the path exists, push it onto the end.
  if (path) {
    tokens.push(path);
  }

  return tokens
}

/**
 * Compile a string to a template function for the path.
 *
 * @param  {string}             str
 * @param  {Object=}            options
 * @return {!function(Object=, Object=)}
 */
function compile (str, options) {
  return tokensToFunction(parse(str, options))
}

/**
 * Prettier encoding of URI path segments.
 *
 * @param  {string}
 * @return {string}
 */
function encodeURIComponentPretty (str) {
  return encodeURI(str).replace(/[\/?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
  })
}

/**
 * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
 *
 * @param  {string}
 * @return {string}
 */
function encodeAsterisk (str) {
  return encodeURI(str).replace(/[?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase()
  })
}

/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction (tokens) {
  // Compile all the tokens into regexps.
  var matches = new Array(tokens.length);

  // Compile all the patterns before compilation.
  for (var i = 0; i < tokens.length; i++) {
    if (typeof tokens[i] === 'object') {
      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$');
    }
  }

  return function (obj, opts) {
    var path = '';
    var data = obj || {};
    var options = opts || {};
    var encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent;

    for (var i = 0; i < tokens.length; i++) {
      var token = tokens[i];

      if (typeof token === 'string') {
        path += token;

        continue
      }

      var value = data[token.name];
      var segment;

      if (value == null) {
        if (token.optional) {
          // Prepend partial segment prefixes.
          if (token.partial) {
            path += token.prefix;
          }

          continue
        } else {
          throw new TypeError('Expected "' + token.name + '" to be defined')
        }
      }

      if (isarray(value)) {
        if (!token.repeat) {
          throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + '`')
        }

        if (value.length === 0) {
          if (token.optional) {
            continue
          } else {
            throw new TypeError('Expected "' + token.name + '" to not be empty')
          }
        }

        for (var j = 0; j < value.length; j++) {
          segment = encode(value[j]);

          if (!matches[i].test(segment)) {
            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + '`')
          }

          path += (j === 0 ? token.prefix : token.delimiter) + segment;
        }

        continue
      }

      segment = token.asterisk ? encodeAsterisk(value) : encode(value);

      if (!matches[i].test(segment)) {
        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"')
      }

      path += token.prefix + segment;
    }

    return path
  }
}

/**
 * Escape a regular expression string.
 *
 * @param  {string} str
 * @return {string}
 */
function escapeString (str) {
  return str.replace(/([.+*?=^!:${}()[\]|\/\\])/g, '\\$1')
}

/**
 * Escape the capturing group by escaping special characters and meaning.
 *
 * @param  {string} group
 * @return {string}
 */
function escapeGroup (group) {
  return group.replace(/([=!:$\/()])/g, '\\$1')
}

/**
 * Attach the keys as a property of the regexp.
 *
 * @param  {!RegExp} re
 * @param  {Array}   keys
 * @return {!RegExp}
 */
function attachKeys (re, keys) {
  re.keys = keys;
  return re
}

/**
 * Get the flags for a regexp from the options.
 *
 * @param  {Object} options
 * @return {string}
 */
function flags (options) {
  return options.sensitive ? '' : 'i'
}

/**
 * Pull out keys from a regexp.
 *
 * @param  {!RegExp} path
 * @param  {!Array}  keys
 * @return {!RegExp}
 */
function regexpToRegexp (path, keys) {
  // Use a negative lookahead to match only capturing groups.
  var groups = path.source.match(/\((?!\?)/g);

  if (groups) {
    for (var i = 0; i < groups.length; i++) {
      keys.push({
        name: i,
        prefix: null,
        delimiter: null,
        optional: false,
        repeat: false,
        partial: false,
        asterisk: false,
        pattern: null
      });
    }
  }

  return attachKeys(path, keys)
}

/**
 * Transform an array into a regexp.
 *
 * @param  {!Array}  path
 * @param  {Array}   keys
 * @param  {!Object} options
 * @return {!RegExp}
 */
function arrayToRegexp (path, keys, options) {
  var parts = [];

  for (var i = 0; i < path.length; i++) {
    parts.push(pathToRegexp(path[i], keys, options).source);
  }

  var regexp = new RegExp('(?:' + parts.join('|') + ')', flags(options));

  return attachKeys(regexp, keys)
}

/**
 * Create a path regexp from string input.
 *
 * @param  {string}  path
 * @param  {!Array}  keys
 * @param  {!Object} options
 * @return {!RegExp}
 */
function stringToRegexp (path, keys, options) {
  return tokensToRegExp(parse(path, options), keys, options)
}

/**
 * Expose a function for taking tokens and returning a RegExp.
 *
 * @param  {!Array}          tokens
 * @param  {(Array|Object)=} keys
 * @param  {Object=}         options
 * @return {!RegExp}
 */
function tokensToRegExp (tokens, keys, options) {
  if (!isarray(keys)) {
    options = /** @type {!Object} */ (keys || options);
    keys = [];
  }

  options = options || {};

  var strict = options.strict;
  var end = options.end !== false;
  var route = '';

  // Iterate over the tokens and create our regexp string.
  for (var i = 0; i < tokens.length; i++) {
    var token = tokens[i];

    if (typeof token === 'string') {
      route += escapeString(token);
    } else {
      var prefix = escapeString(token.prefix);
      var capture = '(?:' + token.pattern + ')';

      keys.push(token);

      if (token.repeat) {
        capture += '(?:' + prefix + capture + ')*';
      }

      if (token.optional) {
        if (!token.partial) {
          capture = '(?:' + prefix + '(' + capture + '))?';
        } else {
          capture = prefix + '(' + capture + ')?';
        }
      } else {
        capture = prefix + '(' + capture + ')';
      }

      route += capture;
    }
  }

  var delimiter = escapeString(options.delimiter || '/');
  var endsWithDelimiter = route.slice(-delimiter.length) === delimiter;

  // In non-strict mode we allow a slash at the end of match. If the path to
  // match already ends with a slash, we remove it for consistency. The slash
  // is valid at the end of a path match, not in the middle. This is important
  // in non-ending mode, where "/test/" shouldn't match "/test//route".
  if (!strict) {
    route = (endsWithDelimiter ? route.slice(0, -delimiter.length) : route) + '(?:' + delimiter + '(?=$))?';
  }

  if (end) {
    route += '$';
  } else {
    // In non-ending mode, we need the capturing groups to match as much as
    // possible by using a positive lookahead to the end or next path segment.
    route += strict && endsWithDelimiter ? '' : '(?=' + delimiter + '|$)';
  }

  return attachKeys(new RegExp('^' + route, flags(options)), keys)
}

/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 *
 * @param  {(string|RegExp|Array)} path
 * @param  {(Array|Object)=}       keys
 * @param  {Object=}               options
 * @return {!RegExp}
 */
function pathToRegexp (path, keys, options) {
  if (!isarray(keys)) {
    options = /** @type {!Object} */ (keys || options);
    keys = [];
  }

  options = options || {};

  if (path instanceof RegExp) {
    return regexpToRegexp(path, /** @type {!Array} */ (keys))
  }

  if (isarray(path)) {
    return arrayToRegexp(/** @type {!Array} */ (path), /** @type {!Array} */ (keys), options)
  }

  return stringToRegexp(/** @type {string} */ (path), /** @type {!Array} */ (keys), options)
}

index.parse = parse_1;
index.compile = compile_1;
index.tokensToFunction = tokensToFunction_1;
index.tokensToRegExp = tokensToRegExp_1;

/*  */

var regexpCache = Object.create(null);

function getRouteRegex (path) {
  var hit = regexpCache[path];
  var keys, regexp;

  if (hit) {
    keys = hit.keys;
    regexp = hit.regexp;
  } else {
    keys = [];
    regexp = index(path, keys);
    regexpCache[path] = { keys: keys, regexp: regexp };
  }

  return { keys: keys, regexp: regexp }
}

var regexpCompileCache = Object.create(null);

function fillParams (
  path,
  params,
  routeMsg
) {
  try {
    var filler =
      regexpCompileCache[path] ||
      (regexpCompileCache[path] = index.compile(path));
    return filler(params || {}, { pretty: true })
  } catch (e) {
    if (process.env.NODE_ENV !== 'production') {
      warn(false, ("missing param for " + routeMsg + ": " + (e.message)));
    }
    return ''
  }
}

/*  */

function normalizeLocation (
  raw,
  current,
  append
) {
  var next = typeof raw === 'string' ? { path: raw } : raw;
  // named target
  if (next.name || next._normalized) {
    return next
  }

  // relative params
  if (!next.path && next.params && current) {
    next = assign({}, next);
    next._normalized = true;
    var params = assign(assign({}, current.params), next.params);
    if (current.name) {
      next.name = current.name;
      next.params = params;
    } else if (current.matched) {
      var rawPath = current.matched[current.matched.length - 1].path;
      next.path = fillParams(rawPath, params, ("path " + (current.path)));
    } else if (process.env.NODE_ENV !== 'production') {
      warn(false, "relative params navigation requires a current route.");
    }
    return next
  }

  var parsedPath = parsePath(next.path || '');
  var basePath = (current && current.path) || '/';
  var path = parsedPath.path
    ? resolvePath(parsedPath.path, basePath, append || next.append)
    : (current && current.path) || '/';
  var query = resolveQuery(parsedPath.query, next.query);
  var hash = next.hash || parsedPath.hash;
  if (hash && hash.charAt(0) !== '#') {
    hash = "#" + hash;
  }

  return {
    _normalized: true,
    path: path,
    query: query,
    hash: hash
  }
}

function assign (a, b) {
  for (var key in b) {
    a[key] = b[key];
  }
  return a
}

/*  */

function createMatcher (routes) {
  var ref = createRouteMap(routes);
  var pathMap = ref.pathMap;
  var nameMap = ref.nameMap;

  function addRoutes (routes) {
    createRouteMap(routes, pathMap, nameMap);
  }

  function match (
    raw,
    currentRoute,
    redirectedFrom
  ) {
    var location = normalizeLocation(raw, currentRoute);
    var name = location.name;

    if (name) {
      var record = nameMap[name];
      if (process.env.NODE_ENV !== 'production') {
        warn(record, ("Route with name '" + name + "' does not exist"));
      }
      var paramNames = getRouteRegex(record.path).keys
        .filter(function (key) { return !key.optional; })
        .map(function (key) { return key.name; });

      if (typeof location.params !== 'object') {
        location.params = {};
      }

      if (currentRoute && typeof currentRoute.params === 'object') {
        for (var key in currentRoute.params) {
          if (!(key in location.params) && paramNames.indexOf(key) > -1) {
            location.params[key] = currentRoute.params[key];
          }
        }
      }

      if (record) {
        location.path = fillParams(record.path, location.params, ("named route \"" + name + "\""));
        return _createRoute(record, location, redirectedFrom)
      }
    } else if (location.path) {
      location.params = {};
      for (var path in pathMap) {
        if (matchRoute(path, location.params, location.path)) {
          return _createRoute(pathMap[path], location, redirectedFrom)
        }
      }
    }
    // no match
    return _createRoute(null, location)
  }

  function redirect (
    record,
    location
  ) {
    var originalRedirect = record.redirect;
    var redirect = typeof originalRedirect === 'function'
        ? originalRedirect(createRoute(record, location))
        : originalRedirect;

    if (typeof redirect === 'string') {
      redirect = { path: redirect };
    }

    if (!redirect || typeof redirect !== 'object') {
      process.env.NODE_ENV !== 'production' && warn(
        false, ("invalid redirect option: " + (JSON.stringify(redirect)))
      );
      return _createRoute(null, location)
    }

    var re = redirect;
    var name = re.name;
    var path = re.path;
    var query = location.query;
    var hash = location.hash;
    var params = location.params;
    query = re.hasOwnProperty('query') ? re.query : query;
    hash = re.hasOwnProperty('hash') ? re.hash : hash;
    params = re.hasOwnProperty('params') ? re.params : params;

    if (name) {
      // resolved named direct
      var targetRecord = nameMap[name];
      if (process.env.NODE_ENV !== 'production') {
        assert(targetRecord, ("redirect failed: named route \"" + name + "\" not found."));
      }
      return match({
        _normalized: true,
        name: name,
        query: query,
        hash: hash,
        params: params
      }, undefined, location)
    } else if (path) {
      // 1. resolve relative redirect
      var rawPath = resolveRecordPath(path, record);
      // 2. resolve params
      var resolvedPath = fillParams(rawPath, params, ("redirect route with path \"" + rawPath + "\""));
      // 3. rematch with existing query and hash
      return match({
        _normalized: true,
        path: resolvedPath,
        query: query,
        hash: hash
      }, undefined, location)
    } else {
      warn(false, ("invalid redirect option: " + (JSON.stringify(redirect))));
      return _createRoute(null, location)
    }
  }

  function alias (
    record,
    location,
    matchAs
  ) {
    var aliasedPath = fillParams(matchAs, location.params, ("aliased route with path \"" + matchAs + "\""));
    var aliasedMatch = match({
      _normalized: true,
      path: aliasedPath
    });
    if (aliasedMatch) {
      var matched = aliasedMatch.matched;
      var aliasedRecord = matched[matched.length - 1];
      location.params = aliasedMatch.params;
      return _createRoute(aliasedRecord, location)
    }
    return _createRoute(null, location)
  }

  function _createRoute (
    record,
    location,
    redirectedFrom
  ) {
    if (record && record.redirect) {
      return redirect(record, redirectedFrom || location)
    }
    if (record && record.matchAs) {
      return alias(record, location, record.matchAs)
    }
    return createRoute(record, location, redirectedFrom)
  }

  return {
    match: match,
    addRoutes: addRoutes
  }
}

function matchRoute (
  path,
  params,
  pathname
) {
  var ref = getRouteRegex(path);
  var regexp = ref.regexp;
  var keys = ref.keys;
  var m = pathname.match(regexp);

  if (!m) {
    return false
  } else if (!params) {
    return true
  }

  for (var i = 1, len = m.length; i < len; ++i) {
    var key = keys[i - 1];
    var val = typeof m[i] === 'string' ? decodeURIComponent(m[i]) : m[i];
    if (key) { params[key.name] = val; }
  }

  return true
}

function resolveRecordPath (path, record) {
  return resolvePath(path, record.parent ? record.parent.path : '/', true)
}

/*  */


var positionStore = Object.create(null);

function setupScroll () {
  window.addEventListener('popstate', function (e) {
    saveScrollPosition();
    if (e.state && e.state.key) {
      setStateKey(e.state.key);
    }
  });
}

function handleScroll (
  router,
  to,
  from,
  isPop
) {
  if (!router.app) {
    return
  }

  var behavior = router.options.scrollBehavior;
  if (!behavior) {
    return
  }

  if (process.env.NODE_ENV !== 'production') {
    assert(typeof behavior === 'function', "scrollBehavior must be a function");
  }

  // wait until re-render finishes before scrolling
  router.app.$nextTick(function () {
    var position = getScrollPosition();
    var shouldScroll = behavior(to, from, isPop ? position : null);
    if (!shouldScroll) {
      return
    }
    var isObject = typeof shouldScroll === 'object';
    if (isObject && typeof shouldScroll.selector === 'string') {
      var el = document.querySelector(shouldScroll.selector);
      if (el) {
        position = getElementPosition(el);
      } else if (isValidPosition(shouldScroll)) {
        position = normalizePosition(shouldScroll);
      }
    } else if (isObject && isValidPosition(shouldScroll)) {
      position = normalizePosition(shouldScroll);
    }

    if (position) {
      window.scrollTo(position.x, position.y);
    }
  });
}

function saveScrollPosition () {
  var key = getStateKey();
  if (key) {
    positionStore[key] = {
      x: window.pageXOffset,
      y: window.pageYOffset
    };
  }
}

function getScrollPosition () {
  var key = getStateKey();
  if (key) {
    return positionStore[key]
  }
}

function getElementPosition (el) {
  var docEl = document.documentElement;
  var docRect = docEl.getBoundingClientRect();
  var elRect = el.getBoundingClientRect();
  return {
    x: elRect.left - docRect.left,
    y: elRect.top - docRect.top
  }
}

function isValidPosition (obj) {
  return isNumber(obj.x) || isNumber(obj.y)
}

function normalizePosition (obj) {
  return {
    x: isNumber(obj.x) ? obj.x : window.pageXOffset,
    y: isNumber(obj.y) ? obj.y : window.pageYOffset
  }
}

function isNumber (v) {
  return typeof v === 'number'
}

/*  */

var supportsPushState = inBrowser && (function () {
  var ua = window.navigator.userAgent;

  if (
    (ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) &&
    ua.indexOf('Mobile Safari') !== -1 &&
    ua.indexOf('Chrome') === -1 &&
    ua.indexOf('Windows Phone') === -1
  ) {
    return false
  }

  return window.history && 'pushState' in window.history
})();

// use User Timing api (if present) for more accurate key precision
var Time = inBrowser && window.performance && window.performance.now
  ? window.performance
  : Date;

var _key = genKey();

function genKey () {
  return Time.now().toFixed(3)
}

function getStateKey () {
  return _key
}

function setStateKey (key) {
  _key = key;
}

function pushState (url, replace) {
  saveScrollPosition();
  // try...catch the pushState call to get around Safari
  // DOM Exception 18 where it limits to 100 pushState calls
  var history = window.history;
  try {
    if (replace) {
      history.replaceState({ key: _key }, '', url);
    } else {
      _key = genKey();
      history.pushState({ key: _key }, '', url);
    }
  } catch (e) {
    window.location[replace ? 'replace' : 'assign'](url);
  }
}

function replaceState (url) {
  pushState(url, true);
}

/*  */

function runQueue (queue, fn, cb) {
  var step = function (index) {
    if (index >= queue.length) {
      cb();
    } else {
      if (queue[index]) {
        fn(queue[index], function () {
          step(index + 1);
        });
      } else {
        step(index + 1);
      }
    }
  };
  step(0);
}

/*  */


var History = function History (router, base) {
  this.router = router;
  this.base = normalizeBase(base);
  // start with a route object that stands for "nowhere"
  this.current = START;
  this.pending = null;
  this.ready = false;
  this.readyCbs = [];
};

History.prototype.listen = function listen (cb) {
  this.cb = cb;
};

History.prototype.onReady = function onReady (cb) {
  if (this.ready) {
    cb();
  } else {
    this.readyCbs.push(cb);
  }
};

History.prototype.transitionTo = function transitionTo (location, onComplete, onAbort) {
    var this$1 = this;

  var route = this.router.match(location, this.current);
  this.confirmTransition(route, function () {
    this$1.updateRoute(route);
    onComplete && onComplete(route);
    this$1.ensureURL();

    // fire ready cbs once
    if (!this$1.ready) {
      this$1.ready = true;
      this$1.readyCbs.forEach(function (cb) {
        cb(route);
      });
    }
  }, onAbort);
};

History.prototype.confirmTransition = function confirmTransition (route, onComplete, onAbort) {
    var this$1 = this;

  var current = this.current;
  var abort = function () { onAbort && onAbort(); };
  if (
    isSameRoute(route, current) &&
    // in the case the route map has been dynamically appended to
    route.matched.length === current.matched.length
  ) {
    this.ensureURL();
    return abort()
  }

  var ref = resolveQueue(this.current.matched, route.matched);
    var updated = ref.updated;
    var deactivated = ref.deactivated;
    var activated = ref.activated;

  var queue = [].concat(
    // in-component leave guards
    extractLeaveGuards(deactivated),
    // global before hooks
    this.router.beforeHooks,
    // in-component update hooks
    extractUpdateHooks(updated),
    // in-config enter guards
    activated.map(function (m) { return m.beforeEnter; }),
    // async components
    resolveAsyncComponents(activated)
  );

  this.pending = route;
  var iterator = function (hook, next) {
    if (this$1.pending !== route) {
      return abort()
    }
    hook(route, current, function (to) {
      if (to === false) {
        // next(false) -> abort navigation, ensure current URL
        this$1.ensureURL(true);
        abort();
      } else if (typeof to === 'string' || typeof to === 'object') {
        // next('/') or next({ path: '/' }) -> redirect
        (typeof to === 'object' && to.replace) ? this$1.replace(to) : this$1.push(to);
        abort();
      } else {
        // confirm transition and pass on the value
        next(to);
      }
    });
  };

  runQueue(queue, iterator, function () {
    var postEnterCbs = [];
    var isValid = function () { return this$1.current === route; };
    var enterGuards = extractEnterGuards(activated, postEnterCbs, isValid);
    // wait until async components are resolved before
    // extracting in-component enter guards
    runQueue(enterGuards, iterator, function () {
      if (this$1.pending !== route) {
        return abort()
      }
      this$1.pending = null;
      onComplete(route);
      if (this$1.router.app) {
        this$1.router.app.$nextTick(function () {
          postEnterCbs.forEach(function (cb) { return cb(); });
        });
      }
    });
  });
};

History.prototype.updateRoute = function updateRoute (route) {
  var prev = this.current;
  this.current = route;
  this.cb && this.cb(route);
  this.router.afterHooks.forEach(function (hook) {
    hook && hook(route, prev);
  });
};

function normalizeBase (base) {
  if (!base) {
    if (inBrowser) {
      // respect <base> tag
      var baseEl = document.querySelector('base');
      base = (baseEl && baseEl.getAttribute('href')) || '/';
    } else {
      base = '/';
    }
  }
  // make sure there's the starting slash
  if (base.charAt(0) !== '/') {
    base = '/' + base;
  }
  // remove trailing slash
  return base.replace(/\/$/, '')
}

function resolveQueue (
  current,
  next
) {
  var i;
  var max = Math.max(current.length, next.length);
  for (i = 0; i < max; i++) {
    if (current[i] !== next[i]) {
      break
    }
  }
  return {
    updated: next.slice(0, i),
    activated: next.slice(i),
    deactivated: current.slice(i)
  }
}

function extractGuards (
  records,
  name,
  bind,
  reverse
) {
  var guards = flatMapComponents(records, function (def, instance, match, key) {
    var guard = extractGuard(def, name);
    if (guard) {
      return Array.isArray(guard)
        ? guard.map(function (guard) { return bind(guard, instance, match, key); })
        : bind(guard, instance, match, key)
    }
  });
  return flatten(reverse ? guards.reverse() : guards)
}

function extractGuard (
  def,
  key
) {
  if (typeof def !== 'function') {
    // extend now so that global mixins are applied.
    def = _Vue.extend(def);
  }
  return def.options[key]
}

function extractLeaveGuards (deactivated) {
  return extractGuards(deactivated, 'beforeRouteLeave', bindGuard, true)
}

function extractUpdateHooks (updated) {
  return extractGuards(updated, 'beforeRouteUpdate', bindGuard)
}

function bindGuard (guard, instance) {
  return function boundRouteGuard () {
    return guard.apply(instance, arguments)
  }
}

function extractEnterGuards (
  activated,
  cbs,
  isValid
) {
  return extractGuards(activated, 'beforeRouteEnter', function (guard, _, match, key) {
    return bindEnterGuard(guard, match, key, cbs, isValid)
  })
}

function bindEnterGuard (
  guard,
  match,
  key,
  cbs,
  isValid
) {
  return function routeEnterGuard (to, from, next) {
    return guard(to, from, function (cb) {
      next(cb);
      if (typeof cb === 'function') {
        cbs.push(function () {
          // #750
          // if a router-view is wrapped with an out-in transition,
          // the instance may not have been registered at this time.
          // we will need to poll for registration until current route
          // is no longer valid.
          poll(cb, match.instances, key, isValid);
        });
      }
    })
  }
}

function poll (
  cb, // somehow flow cannot infer this is a function
  instances,
  key,
  isValid
) {
  if (instances[key]) {
    cb(instances[key]);
  } else if (isValid()) {
    setTimeout(function () {
      poll(cb, instances, key, isValid);
    }, 16);
  }
}

function resolveAsyncComponents (matched) {
  return flatMapComponents(matched, function (def, _, match, key) {
    // if it's a function and doesn't have Vue options attached,
    // assume it's an async component resolve function.
    // we are not using Vue's default async resolving mechanism because
    // we want to halt the navigation until the incoming component has been
    // resolved.
    if (typeof def === 'function' && !def.options) {
      return function (to, from, next) {
        var resolve = once(function (resolvedDef) {
          match.components[key] = resolvedDef;
          next();
        });

        var reject = once(function (reason) {
          warn(false, ("Failed to resolve async component " + key + ": " + reason));
          next(false);
        });

        var res = def(resolve, reject);
        if (res && typeof res.then === 'function') {
          res.then(resolve, reject);
        }
      }
    }
  })
}

function flatMapComponents (
  matched,
  fn
) {
  return flatten(matched.map(function (m) {
    return Object.keys(m.components).map(function (key) { return fn(
      m.components[key],
      m.instances[key],
      m, key
    ); })
  }))
}

function flatten (arr) {
  return Array.prototype.concat.apply([], arr)
}

// in Webpack 2, require.ensure now also returns a Promise
// so the resolve/reject functions may get called an extra time
// if the user uses an arrow function shorthand that happens to
// return that Promise.
function once (fn) {
  var called = false;
  return function () {
    if (called) { return }
    called = true;
    return fn.apply(this, arguments)
  }
}

/*  */


var HTML5History = (function (History$$1) {
  function HTML5History (router, base) {
    var this$1 = this;

    History$$1.call(this, router, base);

    var expectScroll = router.options.scrollBehavior;

    if (expectScroll) {
      setupScroll();
    }

    window.addEventListener('popstate', function (e) {
      this$1.transitionTo(getLocation(this$1.base), function (route) {
        if (expectScroll) {
          handleScroll(router, route, this$1.current, true);
        }
      });
    });
  }

  if ( History$$1 ) HTML5History.__proto__ = History$$1;
  HTML5History.prototype = Object.create( History$$1 && History$$1.prototype );
  HTML5History.prototype.constructor = HTML5History;

  HTML5History.prototype.go = function go (n) {
    window.history.go(n);
  };

  HTML5History.prototype.push = function push (location, onComplete, onAbort) {
    var this$1 = this;

    this.transitionTo(location, function (route) {
      pushState(cleanPath(this$1.base + route.fullPath));
      handleScroll(this$1.router, route, this$1.current, false);
      onComplete && onComplete(route);
    }, onAbort);
  };

  HTML5History.prototype.replace = function replace (location, onComplete, onAbort) {
    var this$1 = this;

    this.transitionTo(location, function (route) {
      replaceState(cleanPath(this$1.base + route.fullPath));
      handleScroll(this$1.router, route, this$1.current, false);
      onComplete && onComplete(route);
    }, onAbort);
  };

  HTML5History.prototype.ensureURL = function ensureURL (push) {
    if (getLocation(this.base) !== this.current.fullPath) {
      var current = cleanPath(this.base + this.current.fullPath);
      push ? pushState(current) : replaceState(current);
    }
  };

  HTML5History.prototype.getCurrentLocation = function getCurrentLocation () {
    return getLocation(this.base)
  };

  return HTML5History;
}(History));

function getLocation (base) {
  var path = window.location.pathname;
  if (base && path.indexOf(base) === 0) {
    path = path.slice(base.length);
  }
  return (path || '/') + window.location.search + window.location.hash
}

/*  */


var HashHistory = (function (History$$1) {
  function HashHistory (router, base, fallback) {
    History$$1.call(this, router, base);
    // check history fallback deeplinking
    if (fallback && checkFallback(this.base)) {
      return
    }
    ensureSlash();
  }

  if ( History$$1 ) HashHistory.__proto__ = History$$1;
  HashHistory.prototype = Object.create( History$$1 && History$$1.prototype );
  HashHistory.prototype.constructor = HashHistory;

  // this is delayed until the app mounts
  // to avoid the hashchange listener being fired too early
  HashHistory.prototype.setupListeners = function setupListeners () {
    var this$1 = this;

    window.addEventListener('hashchange', function () {
      if (!ensureSlash()) {
        return
      }
      this$1.transitionTo(getHash(), function (route) {
        replaceHash(route.fullPath);
      });
    });
  };

  HashHistory.prototype.push = function push (location, onComplete, onAbort) {
    this.transitionTo(location, function (route) {
      pushHash(route.fullPath);
      onComplete && onComplete(route);
    }, onAbort);
  };

  HashHistory.prototype.replace = function replace (location, onComplete, onAbort) {
    this.transitionTo(location, function (route) {
      replaceHash(route.fullPath);
      onComplete && onComplete(route);
    }, onAbort);
  };

  HashHistory.prototype.go = function go (n) {
    window.history.go(n);
  };

  HashHistory.prototype.ensureURL = function ensureURL (push) {
    var current = this.current.fullPath;
    if (getHash() !== current) {
      push ? pushHash(current) : replaceHash(current);
    }
  };

  HashHistory.prototype.getCurrentLocation = function getCurrentLocation () {
    return getHash()
  };

  return HashHistory;
}(History));

function checkFallback (base) {
  var location = getLocation(base);
  if (!/^\/#/.test(location)) {
    window.location.replace(
      cleanPath(base + '/#' + location)
    );
    return true
  }
}

function ensureSlash () {
  var path = getHash();
  if (path.charAt(0) === '/') {
    return true
  }
  replaceHash('/' + path);
  return false
}

function getHash () {
  // We can't use window.location.hash here because it's not
  // consistent across browsers - Firefox will pre-decode it!
  var href = window.location.href;
  var index = href.indexOf('#');
  return index === -1 ? '' : href.slice(index + 1)
}

function pushHash (path) {
  window.location.hash = path;
}

function replaceHash (path) {
  var i = window.location.href.indexOf('#');
  window.location.replace(
    window.location.href.slice(0, i >= 0 ? i : 0) + '#' + path
  );
}

/*  */


var AbstractHistory = (function (History$$1) {
  function AbstractHistory (router, base) {
    History$$1.call(this, router, base);
    this.stack = [];
    this.index = -1;
  }

  if ( History$$1 ) AbstractHistory.__proto__ = History$$1;
  AbstractHistory.prototype = Object.create( History$$1 && History$$1.prototype );
  AbstractHistory.prototype.constructor = AbstractHistory;

  AbstractHistory.prototype.push = function push (location, onComplete, onAbort) {
    var this$1 = this;

    this.transitionTo(location, function (route) {
      this$1.stack = this$1.stack.slice(0, this$1.index + 1).concat(route);
      this$1.index++;
      onComplete && onComplete(route);
    }, onAbort);
  };

  AbstractHistory.prototype.replace = function replace (location, onComplete, onAbort) {
    var this$1 = this;

    this.transitionTo(location, function (route) {
      this$1.stack = this$1.stack.slice(0, this$1.index).concat(route);
      onComplete && onComplete(route);
    }, onAbort);
  };

  AbstractHistory.prototype.go = function go (n) {
    var this$1 = this;

    var targetIndex = this.index + n;
    if (targetIndex < 0 || targetIndex >= this.stack.length) {
      return
    }
    var route = this.stack[targetIndex];
    this.confirmTransition(route, function () {
      this$1.index = targetIndex;
      this$1.updateRoute(route);
    });
  };

  AbstractHistory.prototype.getCurrentLocation = function getCurrentLocation () {
    var current = this.stack[this.stack.length - 1];
    return current ? current.fullPath : '/'
  };

  AbstractHistory.prototype.ensureURL = function ensureURL () {
    // noop
  };

  return AbstractHistory;
}(History));

/*  */

var VueRouter = function VueRouter (options) {
  if ( options === void 0 ) options = {};

  this.app = null;
  this.apps = [];
  this.options = options;
  this.beforeHooks = [];
  this.afterHooks = [];
  this.matcher = createMatcher(options.routes || []);

  var mode = options.mode || 'hash';
  this.fallback = mode === 'history' && !supportsPushState;
  if (this.fallback) {
    mode = 'hash';
  }
  if (!inBrowser) {
    mode = 'abstract';
  }
  this.mode = mode;

  switch (mode) {
    case 'history':
      this.history = new HTML5History(this, options.base);
      break
    case 'hash':
      this.history = new HashHistory(this, options.base, this.fallback);
      break
    case 'abstract':
      this.history = new AbstractHistory(this, options.base);
      break
    default:
      if (process.env.NODE_ENV !== 'production') {
        assert(false, ("invalid mode: " + mode));
      }
  }
};

var prototypeAccessors = { currentRoute: {} };

VueRouter.prototype.match = function match (
  raw,
  current,
  redirectedFrom
) {
  return this.matcher.match(raw, current, redirectedFrom)
};

prototypeAccessors.currentRoute.get = function () {
  return this.history && this.history.current
};

VueRouter.prototype.init = function init (app /* Vue component instance */) {
    var this$1 = this;

  process.env.NODE_ENV !== 'production' && assert(
    install.installed,
    "not installed. Make sure to call `Vue.use(VueRouter)` " +
    "before creating root instance."
  );

  this.apps.push(app);

  // main app already initialized.
  if (this.app) {
    return
  }

  this.app = app;

  var history = this.history;

  if (history instanceof HTML5History) {
    history.transitionTo(history.getCurrentLocation());
  } else if (history instanceof HashHistory) {
    var setupHashListener = function () {
      history.setupListeners();
    };
    history.transitionTo(
      history.getCurrentLocation(),
      setupHashListener,
      setupHashListener
    );
  }

  history.listen(function (route) {
    this$1.apps.forEach(function (app) {
      app._route = route;
    });
  });
};

VueRouter.prototype.beforeEach = function beforeEach (fn) {
  this.beforeHooks.push(fn);
};

VueRouter.prototype.afterEach = function afterEach (fn) {
  this.afterHooks.push(fn);
};

VueRouter.prototype.onReady = function onReady (cb) {
  this.history.onReady(cb);
};

VueRouter.prototype.push = function push (location, onComplete, onAbort) {
  this.history.push(location, onComplete, onAbort);
};

VueRouter.prototype.replace = function replace (location, onComplete, onAbort) {
  this.history.replace(location, onComplete, onAbort);
};

VueRouter.prototype.go = function go (n) {
  this.history.go(n);
};

VueRouter.prototype.back = function back () {
  this.go(-1);
};

VueRouter.prototype.forward = function forward () {
  this.go(1);
};

VueRouter.prototype.getMatchedComponents = function getMatchedComponents (to) {
  var route = to
    ? this.resolve(to).route
    : this.currentRoute;
  if (!route) {
    return []
  }
  return [].concat.apply([], route.matched.map(function (m) {
    return Object.keys(m.components).map(function (key) {
      return m.components[key]
    })
  }))
};

VueRouter.prototype.resolve = function resolve (
  to,
  current,
  append
) {
  var location = normalizeLocation(to, current || this.history.current, append);
  var route = this.match(location, current);
  var fullPath = route.redirectedFrom || route.fullPath;
  var base = this.history.base;
  var href = createHref(base, fullPath, this.mode);
  return {
    location: location,
    route: route,
    href: href,
    // for backwards compat
    normalizedTo: location,
    resolved: route
  }
};

VueRouter.prototype.addRoutes = function addRoutes (routes) {
  this.matcher.addRoutes(routes);
  if (this.history.current !== START) {
    this.history.transitionTo(this.history.getCurrentLocation());
  }
};

Object.defineProperties( VueRouter.prototype, prototypeAccessors );

function createHref (base, fullPath, mode) {
  var path = mode === 'hash' ? '#' + fullPath : fullPath;
  return base ? cleanPath(base + '/' + path) : path
}

VueRouter.install = install;
VueRouter.version = '2.2.1';

if (inBrowser && window.Vue) {
  window.Vue.use(VueRouter);
}

/* harmony default export */ __webpack_exports__["default"] = (VueRouter);

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(1)))

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process, global) {Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/*!
 * Vue.js v2.2.5
 * (c) 2014-2017 Evan You
 * Released under the MIT License.
 */
/*  */

/**
 * Convert a value to a string that is actually rendered.
 */
function _toString (val) {
  return val == null
    ? ''
    : typeof val === 'object'
      ? JSON.stringify(val, null, 2)
      : String(val)
}

/**
 * Convert a input value to a number for persistence.
 * If the conversion fails, return original string.
 */
function toNumber (val) {
  var n = parseFloat(val);
  return isNaN(n) ? val : n
}

/**
 * Make a map and return a function for checking if a key
 * is in that map.
 */
function makeMap (
  str,
  expectsLowerCase
) {
  var map = Object.create(null);
  var list = str.split(',');
  for (var i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }
  return expectsLowerCase
    ? function (val) { return map[val.toLowerCase()]; }
    : function (val) { return map[val]; }
}

/**
 * Check if a tag is a built-in tag.
 */
var isBuiltInTag = makeMap('slot,component', true);

/**
 * Remove an item from an array
 */
function remove (arr, item) {
  if (arr.length) {
    var index = arr.indexOf(item);
    if (index > -1) {
      return arr.splice(index, 1)
    }
  }
}

/**
 * Check whether the object has the property.
 */
var hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn (obj, key) {
  return hasOwnProperty.call(obj, key)
}

/**
 * Check if value is primitive
 */
function isPrimitive (value) {
  return typeof value === 'string' || typeof value === 'number'
}

/**
 * Create a cached version of a pure function.
 */
function cached (fn) {
  var cache = Object.create(null);
  return (function cachedFn (str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str))
  })
}

/**
 * Camelize a hyphen-delimited string.
 */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) { return c ? c.toUpperCase() : ''; })
});

/**
 * Capitalize a string.
 */
var capitalize = cached(function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
});

/**
 * Hyphenate a camelCase string.
 */
var hyphenateRE = /([^-])([A-Z])/g;
var hyphenate = cached(function (str) {
  return str
    .replace(hyphenateRE, '$1-$2')
    .replace(hyphenateRE, '$1-$2')
    .toLowerCase()
});

/**
 * Simple bind, faster than native
 */
function bind (fn, ctx) {
  function boundFn (a) {
    var l = arguments.length;
    return l
      ? l > 1
        ? fn.apply(ctx, arguments)
        : fn.call(ctx, a)
      : fn.call(ctx)
  }
  // record original fn length
  boundFn._length = fn.length;
  return boundFn
}

/**
 * Convert an Array-like object to a real Array.
 */
function toArray (list, start) {
  start = start || 0;
  var i = list.length - start;
  var ret = new Array(i);
  while (i--) {
    ret[i] = list[i + start];
  }
  return ret
}

/**
 * Mix properties into target object.
 */
function extend (to, _from) {
  for (var key in _from) {
    to[key] = _from[key];
  }
  return to
}

/**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 */
function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 */
var toString = Object.prototype.toString;
var OBJECT_STRING = '[object Object]';
function isPlainObject (obj) {
  return toString.call(obj) === OBJECT_STRING
}

/**
 * Merge an Array of Objects into a single Object.
 */
function toObject (arr) {
  var res = {};
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i]);
    }
  }
  return res
}

/**
 * Perform no operation.
 */
function noop () {}

/**
 * Always return false.
 */
var no = function () { return false; };

/**
 * Return same value
 */
var identity = function (_) { return _; };

/**
 * Generate a static keys string from compiler modules.
 */


/**
 * Check if two values are loosely equal - that is,
 * if they are plain objects, do they have the same shape?
 */
function looseEqual (a, b) {
  var isObjectA = isObject(a);
  var isObjectB = isObject(b);
  if (isObjectA && isObjectB) {
    try {
      return JSON.stringify(a) === JSON.stringify(b)
    } catch (e) {
      // possible circular reference
      return a === b
    }
  } else if (!isObjectA && !isObjectB) {
    return String(a) === String(b)
  } else {
    return false
  }
}

function looseIndexOf (arr, val) {
  for (var i = 0; i < arr.length; i++) {
    if (looseEqual(arr[i], val)) { return i }
  }
  return -1
}

/**
 * Ensure a function is called only once.
 */
function once (fn) {
  var called = false;
  return function () {
    if (!called) {
      called = true;
      fn();
    }
  }
}

/*  */

var config = {
  /**
   * Option merge strategies (used in core/util/options)
   */
  optionMergeStrategies: Object.create(null),

  /**
   * Whether to suppress warnings.
   */
  silent: false,

  /**
   * Show production mode tip message on boot?
   */
  productionTip: process.env.NODE_ENV !== 'production',

  /**
   * Whether to enable devtools
   */
  devtools: process.env.NODE_ENV !== 'production',

  /**
   * Whether to record perf
   */
  performance: false,

  /**
   * Error handler for watcher errors
   */
  errorHandler: null,

  /**
   * Ignore certain custom elements
   */
  ignoredElements: [],

  /**
   * Custom user key aliases for v-on
   */
  keyCodes: Object.create(null),

  /**
   * Check if a tag is reserved so that it cannot be registered as a
   * component. This is platform-dependent and may be overwritten.
   */
  isReservedTag: no,

  /**
   * Check if a tag is an unknown element.
   * Platform-dependent.
   */
  isUnknownElement: no,

  /**
   * Get the namespace of an element
   */
  getTagNamespace: noop,

  /**
   * Parse the real tag name for the specific platform.
   */
  parsePlatformTagName: identity,

  /**
   * Check if an attribute must be bound using property, e.g. value
   * Platform-dependent.
   */
  mustUseProp: no,

  /**
   * List of asset types that a component can own.
   */
  _assetTypes: [
    'component',
    'directive',
    'filter'
  ],

  /**
   * List of lifecycle hooks.
   */
  _lifecycleHooks: [
    'beforeCreate',
    'created',
    'beforeMount',
    'mounted',
    'beforeUpdate',
    'updated',
    'beforeDestroy',
    'destroyed',
    'activated',
    'deactivated'
  ],

  /**
   * Max circular updates allowed in a scheduler flush cycle.
   */
  _maxUpdateCount: 100
};

/*  */

var emptyObject = Object.freeze({});

/**
 * Check if a string starts with $ or _
 */
function isReserved (str) {
  var c = (str + '').charCodeAt(0);
  return c === 0x24 || c === 0x5F
}

/**
 * Define a property.
 */
function def (obj, key, val, enumerable) {
  Object.defineProperty(obj, key, {
    value: val,
    enumerable: !!enumerable,
    writable: true,
    configurable: true
  });
}

/**
 * Parse simple path.
 */
var bailRE = /[^\w.$]/;
function parsePath (path) {
  if (bailRE.test(path)) {
    return
  }
  var segments = path.split('.');
  return function (obj) {
    for (var i = 0; i < segments.length; i++) {
      if (!obj) { return }
      obj = obj[segments[i]];
    }
    return obj
  }
}

/*  */
/* globals MutationObserver */

// can we use __proto__?
var hasProto = '__proto__' in {};

// Browser environment sniffing
var inBrowser = typeof window !== 'undefined';
var UA = inBrowser && window.navigator.userAgent.toLowerCase();
var isIE = UA && /msie|trident/.test(UA);
var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
var isEdge = UA && UA.indexOf('edge/') > 0;
var isAndroid = UA && UA.indexOf('android') > 0;
var isIOS = UA && /iphone|ipad|ipod|ios/.test(UA);
var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;

// this needs to be lazy-evaled because vue may be required before
// vue-server-renderer can set VUE_ENV
var _isServer;
var isServerRendering = function () {
  if (_isServer === undefined) {
    /* istanbul ignore if */
    if (!inBrowser && typeof global !== 'undefined') {
      // detect presence of vue-server-renderer and avoid
      // Webpack shimming the process
      _isServer = global['process'].env.VUE_ENV === 'server';
    } else {
      _isServer = false;
    }
  }
  return _isServer
};

// detect devtools
var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

/* istanbul ignore next */
function isNative (Ctor) {
  return /native code/.test(Ctor.toString())
}

var hasSymbol =
  typeof Symbol !== 'undefined' && isNative(Symbol) &&
  typeof Reflect !== 'undefined' && isNative(Reflect.ownKeys);

/**
 * Defer a task to execute it asynchronously.
 */
var nextTick = (function () {
  var callbacks = [];
  var pending = false;
  var timerFunc;

  function nextTickHandler () {
    pending = false;
    var copies = callbacks.slice(0);
    callbacks.length = 0;
    for (var i = 0; i < copies.length; i++) {
      copies[i]();
    }
  }

  // the nextTick behavior leverages the microtask queue, which can be accessed
  // via either native Promise.then or MutationObserver.
  // MutationObserver has wider support, however it is seriously bugged in
  // UIWebView in iOS >= 9.3.3 when triggered in touch event handlers. It
  // completely stops working after triggering a few times... so, if native
  // Promise is available, we will use it:
  /* istanbul ignore if */
  if (typeof Promise !== 'undefined' && isNative(Promise)) {
    var p = Promise.resolve();
    var logError = function (err) { console.error(err); };
    timerFunc = function () {
      p.then(nextTickHandler).catch(logError);
      // in problematic UIWebViews, Promise.then doesn't completely break, but
      // it can get stuck in a weird state where callbacks are pushed into the
      // microtask queue but the queue isn't being flushed, until the browser
      // needs to do some other work, e.g. handle a timer. Therefore we can
      // "force" the microtask queue to be flushed by adding an empty timer.
      if (isIOS) { setTimeout(noop); }
    };
  } else if (typeof MutationObserver !== 'undefined' && (
    isNative(MutationObserver) ||
    // PhantomJS and iOS 7.x
    MutationObserver.toString() === '[object MutationObserverConstructor]'
  )) {
    // use MutationObserver where native Promise is not available,
    // e.g. PhantomJS IE11, iOS7, Android 4.4
    var counter = 1;
    var observer = new MutationObserver(nextTickHandler);
    var textNode = document.createTextNode(String(counter));
    observer.observe(textNode, {
      characterData: true
    });
    timerFunc = function () {
      counter = (counter + 1) % 2;
      textNode.data = String(counter);
    };
  } else {
    // fallback to setTimeout
    /* istanbul ignore next */
    timerFunc = function () {
      setTimeout(nextTickHandler, 0);
    };
  }

  return function queueNextTick (cb, ctx) {
    var _resolve;
    callbacks.push(function () {
      if (cb) { cb.call(ctx); }
      if (_resolve) { _resolve(ctx); }
    });
    if (!pending) {
      pending = true;
      timerFunc();
    }
    if (!cb && typeof Promise !== 'undefined') {
      return new Promise(function (resolve) {
        _resolve = resolve;
      })
    }
  }
})();

var _Set;
/* istanbul ignore if */
if (typeof Set !== 'undefined' && isNative(Set)) {
  // use native Set when available.
  _Set = Set;
} else {
  // a non-standard Set polyfill that only works with primitive keys.
  _Set = (function () {
    function Set () {
      this.set = Object.create(null);
    }
    Set.prototype.has = function has (key) {
      return this.set[key] === true
    };
    Set.prototype.add = function add (key) {
      this.set[key] = true;
    };
    Set.prototype.clear = function clear () {
      this.set = Object.create(null);
    };

    return Set;
  }());
}

var warn = noop;
var tip = noop;
var formatComponentName;

if (process.env.NODE_ENV !== 'production') {
  var hasConsole = typeof console !== 'undefined';
  var classifyRE = /(?:^|[-_])(\w)/g;
  var classify = function (str) { return str
    .replace(classifyRE, function (c) { return c.toUpperCase(); })
    .replace(/[-_]/g, ''); };

  warn = function (msg, vm) {
    if (hasConsole && (!config.silent)) {
      console.error("[Vue warn]: " + msg + " " + (
        vm ? formatLocation(formatComponentName(vm)) : ''
      ));
    }
  };

  tip = function (msg, vm) {
    if (hasConsole && (!config.silent)) {
      console.warn("[Vue tip]: " + msg + " " + (
        vm ? formatLocation(formatComponentName(vm)) : ''
      ));
    }
  };

  formatComponentName = function (vm, includeFile) {
    if (vm.$root === vm) {
      return '<Root>'
    }
    var name = typeof vm === 'string'
      ? vm
      : typeof vm === 'function' && vm.options
        ? vm.options.name
        : vm._isVue
          ? vm.$options.name || vm.$options._componentTag
          : vm.name;

    var file = vm._isVue && vm.$options.__file;
    if (!name && file) {
      var match = file.match(/([^/\\]+)\.vue$/);
      name = match && match[1];
    }

    return (
      (name ? ("<" + (classify(name)) + ">") : "<Anonymous>") +
      (file && includeFile !== false ? (" at " + file) : '')
    )
  };

  var formatLocation = function (str) {
    if (str === "<Anonymous>") {
      str += " - use the \"name\" option for better debugging messages.";
    }
    return ("\n(found in " + str + ")")
  };
}

/*  */


var uid$1 = 0;

/**
 * A dep is an observable that can have multiple
 * directives subscribing to it.
 */
var Dep = function Dep () {
  this.id = uid$1++;
  this.subs = [];
};

Dep.prototype.addSub = function addSub (sub) {
  this.subs.push(sub);
};

Dep.prototype.removeSub = function removeSub (sub) {
  remove(this.subs, sub);
};

Dep.prototype.depend = function depend () {
  if (Dep.target) {
    Dep.target.addDep(this);
  }
};

Dep.prototype.notify = function notify () {
  // stabilize the subscriber list first
  var subs = this.subs.slice();
  for (var i = 0, l = subs.length; i < l; i++) {
    subs[i].update();
  }
};

// the current target watcher being evaluated.
// this is globally unique because there could be only one
// watcher being evaluated at any time.
Dep.target = null;
var targetStack = [];

function pushTarget (_target) {
  if (Dep.target) { targetStack.push(Dep.target); }
  Dep.target = _target;
}

function popTarget () {
  Dep.target = targetStack.pop();
}

/*
 * not type checking this file because flow doesn't play well with
 * dynamically accessing methods on Array prototype
 */

var arrayProto = Array.prototype;
var arrayMethods = Object.create(arrayProto);[
  'push',
  'pop',
  'shift',
  'unshift',
  'splice',
  'sort',
  'reverse'
]
.forEach(function (method) {
  // cache original method
  var original = arrayProto[method];
  def(arrayMethods, method, function mutator () {
    var arguments$1 = arguments;

    // avoid leaking arguments:
    // http://jsperf.com/closure-with-arguments
    var i = arguments.length;
    var args = new Array(i);
    while (i--) {
      args[i] = arguments$1[i];
    }
    var result = original.apply(this, args);
    var ob = this.__ob__;
    var inserted;
    switch (method) {
      case 'push':
        inserted = args;
        break
      case 'unshift':
        inserted = args;
        break
      case 'splice':
        inserted = args.slice(2);
        break
    }
    if (inserted) { ob.observeArray(inserted); }
    // notify change
    ob.dep.notify();
    return result
  });
});

/*  */

var arrayKeys = Object.getOwnPropertyNames(arrayMethods);

/**
 * By default, when a reactive property is set, the new value is
 * also converted to become reactive. However when passing down props,
 * we don't want to force conversion because the value may be a nested value
 * under a frozen data structure. Converting it would defeat the optimization.
 */
var observerState = {
  shouldConvert: true,
  isSettingProps: false
};

/**
 * Observer class that are attached to each observed
 * object. Once attached, the observer converts target
 * object's property keys into getter/setters that
 * collect dependencies and dispatches updates.
 */
var Observer = function Observer (value) {
  this.value = value;
  this.dep = new Dep();
  this.vmCount = 0;
  def(value, '__ob__', this);
  if (Array.isArray(value)) {
    var augment = hasProto
      ? protoAugment
      : copyAugment;
    augment(value, arrayMethods, arrayKeys);
    this.observeArray(value);
  } else {
    this.walk(value);
  }
};

/**
 * Walk through each property and convert them into
 * getter/setters. This method should only be called when
 * value type is Object.
 */
Observer.prototype.walk = function walk (obj) {
  var keys = Object.keys(obj);
  for (var i = 0; i < keys.length; i++) {
    defineReactive$$1(obj, keys[i], obj[keys[i]]);
  }
};

/**
 * Observe a list of Array items.
 */
Observer.prototype.observeArray = function observeArray (items) {
  for (var i = 0, l = items.length; i < l; i++) {
    observe(items[i]);
  }
};

// helpers

/**
 * Augment an target Object or Array by intercepting
 * the prototype chain using __proto__
 */
function protoAugment (target, src) {
  /* eslint-disable no-proto */
  target.__proto__ = src;
  /* eslint-enable no-proto */
}

/**
 * Augment an target Object or Array by defining
 * hidden properties.
 */
/* istanbul ignore next */
function copyAugment (target, src, keys) {
  for (var i = 0, l = keys.length; i < l; i++) {
    var key = keys[i];
    def(target, key, src[key]);
  }
}

/**
 * Attempt to create an observer instance for a value,
 * returns the new observer if successfully observed,
 * or the existing observer if the value already has one.
 */
function observe (value, asRootData) {
  if (!isObject(value)) {
    return
  }
  var ob;
  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
    ob = value.__ob__;
  } else if (
    observerState.shouldConvert &&
    !isServerRendering() &&
    (Array.isArray(value) || isPlainObject(value)) &&
    Object.isExtensible(value) &&
    !value._isVue
  ) {
    ob = new Observer(value);
  }
  if (asRootData && ob) {
    ob.vmCount++;
  }
  return ob
}

/**
 * Define a reactive property on an Object.
 */
function defineReactive$$1 (
  obj,
  key,
  val,
  customSetter
) {
  var dep = new Dep();

  var property = Object.getOwnPropertyDescriptor(obj, key);
  if (property && property.configurable === false) {
    return
  }

  // cater for pre-defined getter/setters
  var getter = property && property.get;
  var setter = property && property.set;

  var childOb = observe(val);
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter () {
      var value = getter ? getter.call(obj) : val;
      if (Dep.target) {
        dep.depend();
        if (childOb) {
          childOb.dep.depend();
        }
        if (Array.isArray(value)) {
          dependArray(value);
        }
      }
      return value
    },
    set: function reactiveSetter (newVal) {
      var value = getter ? getter.call(obj) : val;
      /* eslint-disable no-self-compare */
      if (newVal === value || (newVal !== newVal && value !== value)) {
        return
      }
      /* eslint-enable no-self-compare */
      if (process.env.NODE_ENV !== 'production' && customSetter) {
        customSetter();
      }
      if (setter) {
        setter.call(obj, newVal);
      } else {
        val = newVal;
      }
      childOb = observe(newVal);
      dep.notify();
    }
  });
}

/**
 * Set a property on an object. Adds the new property and
 * triggers change notification if the property doesn't
 * already exist.
 */
function set (target, key, val) {
  if (Array.isArray(target) && typeof key === 'number') {
    target.length = Math.max(target.length, key);
    target.splice(key, 1, val);
    return val
  }
  if (hasOwn(target, key)) {
    target[key] = val;
    return val
  }
  var ob = (target ).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
    process.env.NODE_ENV !== 'production' && warn(
      'Avoid adding reactive properties to a Vue instance or its root $data ' +
      'at runtime - declare it upfront in the data option.'
    );
    return val
  }
  if (!ob) {
    target[key] = val;
    return val
  }
  defineReactive$$1(ob.value, key, val);
  ob.dep.notify();
  return val
}

/**
 * Delete a property and trigger change if necessary.
 */
function del (target, key) {
  if (Array.isArray(target) && typeof key === 'number') {
    target.splice(key, 1);
    return
  }
  var ob = (target ).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
    process.env.NODE_ENV !== 'production' && warn(
      'Avoid deleting properties on a Vue instance or its root $data ' +
      '- just set it to null.'
    );
    return
  }
  if (!hasOwn(target, key)) {
    return
  }
  delete target[key];
  if (!ob) {
    return
  }
  ob.dep.notify();
}

/**
 * Collect dependencies on array elements when the array is touched, since
 * we cannot intercept array element access like property getters.
 */
function dependArray (value) {
  for (var e = (void 0), i = 0, l = value.length; i < l; i++) {
    e = value[i];
    e && e.__ob__ && e.__ob__.dep.depend();
    if (Array.isArray(e)) {
      dependArray(e);
    }
  }
}

/*  */

/**
 * Option overwriting strategies are functions that handle
 * how to merge a parent option value and a child option
 * value into the final value.
 */
var strats = config.optionMergeStrategies;

/**
 * Options with restrictions
 */
if (process.env.NODE_ENV !== 'production') {
  strats.el = strats.propsData = function (parent, child, vm, key) {
    if (!vm) {
      warn(
        "option \"" + key + "\" can only be used during instance " +
        'creation with the `new` keyword.'
      );
    }
    return defaultStrat(parent, child)
  };
}

/**
 * Helper that recursively merges two data objects together.
 */
function mergeData (to, from) {
  if (!from) { return to }
  var key, toVal, fromVal;
  var keys = Object.keys(from);
  for (var i = 0; i < keys.length; i++) {
    key = keys[i];
    toVal = to[key];
    fromVal = from[key];
    if (!hasOwn(to, key)) {
      set(to, key, fromVal);
    } else if (isPlainObject(toVal) && isPlainObject(fromVal)) {
      mergeData(toVal, fromVal);
    }
  }
  return to
}

/**
 * Data
 */
strats.data = function (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    // in a Vue.extend merge, both should be functions
    if (!childVal) {
      return parentVal
    }
    if (typeof childVal !== 'function') {
      process.env.NODE_ENV !== 'production' && warn(
        'The "data" option should be a function ' +
        'that returns a per-instance value in component ' +
        'definitions.',
        vm
      );
      return parentVal
    }
    if (!parentVal) {
      return childVal
    }
    // when parentVal & childVal are both present,
    // we need to return a function that returns the
    // merged result of both functions... no need to
    // check if parentVal is a function here because
    // it has to be a function to pass previous merges.
    return function mergedDataFn () {
      return mergeData(
        childVal.call(this),
        parentVal.call(this)
      )
    }
  } else if (parentVal || childVal) {
    return function mergedInstanceDataFn () {
      // instance merge
      var instanceData = typeof childVal === 'function'
        ? childVal.call(vm)
        : childVal;
      var defaultData = typeof parentVal === 'function'
        ? parentVal.call(vm)
        : undefined;
      if (instanceData) {
        return mergeData(instanceData, defaultData)
      } else {
        return defaultData
      }
    }
  }
};

/**
 * Hooks and props are merged as arrays.
 */
function mergeHook (
  parentVal,
  childVal
) {
  return childVal
    ? parentVal
      ? parentVal.concat(childVal)
      : Array.isArray(childVal)
        ? childVal
        : [childVal]
    : parentVal
}

config._lifecycleHooks.forEach(function (hook) {
  strats[hook] = mergeHook;
});

/**
 * Assets
 *
 * When a vm is present (instance creation), we need to do
 * a three-way merge between constructor options, instance
 * options and parent options.
 */
function mergeAssets (parentVal, childVal) {
  var res = Object.create(parentVal || null);
  return childVal
    ? extend(res, childVal)
    : res
}

config._assetTypes.forEach(function (type) {
  strats[type + 's'] = mergeAssets;
});

/**
 * Watchers.
 *
 * Watchers hashes should not overwrite one
 * another, so we merge them as arrays.
 */
strats.watch = function (parentVal, childVal) {
  /* istanbul ignore if */
  if (!childVal) { return Object.create(parentVal || null) }
  if (!parentVal) { return childVal }
  var ret = {};
  extend(ret, parentVal);
  for (var key in childVal) {
    var parent = ret[key];
    var child = childVal[key];
    if (parent && !Array.isArray(parent)) {
      parent = [parent];
    }
    ret[key] = parent
      ? parent.concat(child)
      : [child];
  }
  return ret
};

/**
 * Other object hashes.
 */
strats.props =
strats.methods =
strats.computed = function (parentVal, childVal) {
  if (!childVal) { return Object.create(parentVal || null) }
  if (!parentVal) { return childVal }
  var ret = Object.create(null);
  extend(ret, parentVal);
  extend(ret, childVal);
  return ret
};

/**
 * Default strategy.
 */
var defaultStrat = function (parentVal, childVal) {
  return childVal === undefined
    ? parentVal
    : childVal
};

/**
 * Validate component names
 */
function checkComponents (options) {
  for (var key in options.components) {
    var lower = key.toLowerCase();
    if (isBuiltInTag(lower) || config.isReservedTag(lower)) {
      warn(
        'Do not use built-in or reserved HTML elements as component ' +
        'id: ' + key
      );
    }
  }
}

/**
 * Ensure all props option syntax are normalized into the
 * Object-based format.
 */
function normalizeProps (options) {
  var props = options.props;
  if (!props) { return }
  var res = {};
  var i, val, name;
  if (Array.isArray(props)) {
    i = props.length;
    while (i--) {
      val = props[i];
      if (typeof val === 'string') {
        name = camelize(val);
        res[name] = { type: null };
      } else if (process.env.NODE_ENV !== 'production') {
        warn('props must be strings when using array syntax.');
      }
    }
  } else if (isPlainObject(props)) {
    for (var key in props) {
      val = props[key];
      name = camelize(key);
      res[name] = isPlainObject(val)
        ? val
        : { type: val };
    }
  }
  options.props = res;
}

/**
 * Normalize raw function directives into object format.
 */
function normalizeDirectives (options) {
  var dirs = options.directives;
  if (dirs) {
    for (var key in dirs) {
      var def = dirs[key];
      if (typeof def === 'function') {
        dirs[key] = { bind: def, update: def };
      }
    }
  }
}

/**
 * Merge two option objects into a new one.
 * Core utility used in both instantiation and inheritance.
 */
function mergeOptions (
  parent,
  child,
  vm
) {
  if (process.env.NODE_ENV !== 'production') {
    checkComponents(child);
  }
  normalizeProps(child);
  normalizeDirectives(child);
  var extendsFrom = child.extends;
  if (extendsFrom) {
    parent = typeof extendsFrom === 'function'
      ? mergeOptions(parent, extendsFrom.options, vm)
      : mergeOptions(parent, extendsFrom, vm);
  }
  if (child.mixins) {
    for (var i = 0, l = child.mixins.length; i < l; i++) {
      var mixin = child.mixins[i];
      if (mixin.prototype instanceof Vue$2) {
        mixin = mixin.options;
      }
      parent = mergeOptions(parent, mixin, vm);
    }
  }
  var options = {};
  var key;
  for (key in parent) {
    mergeField(key);
  }
  for (key in child) {
    if (!hasOwn(parent, key)) {
      mergeField(key);
    }
  }
  function mergeField (key) {
    var strat = strats[key] || defaultStrat;
    options[key] = strat(parent[key], child[key], vm, key);
  }
  return options
}

/**
 * Resolve an asset.
 * This function is used because child instances need access
 * to assets defined in its ancestor chain.
 */
function resolveAsset (
  options,
  type,
  id,
  warnMissing
) {
  /* istanbul ignore if */
  if (typeof id !== 'string') {
    return
  }
  var assets = options[type];
  // check local registration variations first
  if (hasOwn(assets, id)) { return assets[id] }
  var camelizedId = camelize(id);
  if (hasOwn(assets, camelizedId)) { return assets[camelizedId] }
  var PascalCaseId = capitalize(camelizedId);
  if (hasOwn(assets, PascalCaseId)) { return assets[PascalCaseId] }
  // fallback to prototype chain
  var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];
  if (process.env.NODE_ENV !== 'production' && warnMissing && !res) {
    warn(
      'Failed to resolve ' + type.slice(0, -1) + ': ' + id,
      options
    );
  }
  return res
}

/*  */

function validateProp (
  key,
  propOptions,
  propsData,
  vm
) {
  var prop = propOptions[key];
  var absent = !hasOwn(propsData, key);
  var value = propsData[key];
  // handle boolean props
  if (isType(Boolean, prop.type)) {
    if (absent && !hasOwn(prop, 'default')) {
      value = false;
    } else if (!isType(String, prop.type) && (value === '' || value === hyphenate(key))) {
      value = true;
    }
  }
  // check default value
  if (value === undefined) {
    value = getPropDefaultValue(vm, prop, key);
    // since the default value is a fresh copy,
    // make sure to observe it.
    var prevShouldConvert = observerState.shouldConvert;
    observerState.shouldConvert = true;
    observe(value);
    observerState.shouldConvert = prevShouldConvert;
  }
  if (process.env.NODE_ENV !== 'production') {
    assertProp(prop, key, value, vm, absent);
  }
  return value
}

/**
 * Get the default value of a prop.
 */
function getPropDefaultValue (vm, prop, key) {
  // no default, return undefined
  if (!hasOwn(prop, 'default')) {
    return undefined
  }
  var def = prop.default;
  // warn against non-factory defaults for Object & Array
  if (process.env.NODE_ENV !== 'production' && isObject(def)) {
    warn(
      'Invalid default value for prop "' + key + '": ' +
      'Props with type Object/Array must use a factory function ' +
      'to return the default value.',
      vm
    );
  }
  // the raw prop value was also undefined from previous render,
  // return previous default value to avoid unnecessary watcher trigger
  if (vm && vm.$options.propsData &&
    vm.$options.propsData[key] === undefined &&
    vm._props[key] !== undefined) {
    return vm._props[key]
  }
  // call factory function for non-Function types
  // a value is Function if its prototype is function even across different execution context
  return typeof def === 'function' && getType(prop.type) !== 'Function'
    ? def.call(vm)
    : def
}

/**
 * Assert whether a prop is valid.
 */
function assertProp (
  prop,
  name,
  value,
  vm,
  absent
) {
  if (prop.required && absent) {
    warn(
      'Missing required prop: "' + name + '"',
      vm
    );
    return
  }
  if (value == null && !prop.required) {
    return
  }
  var type = prop.type;
  var valid = !type || type === true;
  var expectedTypes = [];
  if (type) {
    if (!Array.isArray(type)) {
      type = [type];
    }
    for (var i = 0; i < type.length && !valid; i++) {
      var assertedType = assertType(value, type[i]);
      expectedTypes.push(assertedType.expectedType || '');
      valid = assertedType.valid;
    }
  }
  if (!valid) {
    warn(
      'Invalid prop: type check failed for prop "' + name + '".' +
      ' Expected ' + expectedTypes.map(capitalize).join(', ') +
      ', got ' + Object.prototype.toString.call(value).slice(8, -1) + '.',
      vm
    );
    return
  }
  var validator = prop.validator;
  if (validator) {
    if (!validator(value)) {
      warn(
        'Invalid prop: custom validator check failed for prop "' + name + '".',
        vm
      );
    }
  }
}

/**
 * Assert the type of a value
 */
function assertType (value, type) {
  var valid;
  var expectedType = getType(type);
  if (expectedType === 'String') {
    valid = typeof value === (expectedType = 'string');
  } else if (expectedType === 'Number') {
    valid = typeof value === (expectedType = 'number');
  } else if (expectedType === 'Boolean') {
    valid = typeof value === (expectedType = 'boolean');
  } else if (expectedType === 'Function') {
    valid = typeof value === (expectedType = 'function');
  } else if (expectedType === 'Object') {
    valid = isPlainObject(value);
  } else if (expectedType === 'Array') {
    valid = Array.isArray(value);
  } else {
    valid = value instanceof type;
  }
  return {
    valid: valid,
    expectedType: expectedType
  }
}

/**
 * Use function string name to check built-in types,
 * because a simple equality check will fail when running
 * across different vms / iframes.
 */
function getType (fn) {
  var match = fn && fn.toString().match(/^\s*function (\w+)/);
  return match && match[1]
}

function isType (type, fn) {
  if (!Array.isArray(fn)) {
    return getType(fn) === getType(type)
  }
  for (var i = 0, len = fn.length; i < len; i++) {
    if (getType(fn[i]) === getType(type)) {
      return true
    }
  }
  /* istanbul ignore next */
  return false
}

function handleError (err, vm, info) {
  if (config.errorHandler) {
    config.errorHandler.call(null, err, vm, info);
  } else {
    if (process.env.NODE_ENV !== 'production') {
      warn(("Error in " + info + ":"), vm);
    }
    /* istanbul ignore else */
    if (inBrowser && typeof console !== 'undefined') {
      console.error(err);
    } else {
      throw err
    }
  }
}

/* not type checking this file because flow doesn't play well with Proxy */

var initProxy;

if (process.env.NODE_ENV !== 'production') {
  var allowedGlobals = makeMap(
    'Infinity,undefined,NaN,isFinite,isNaN,' +
    'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' +
    'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,' +
    'require' // for Webpack/Browserify
  );

  var warnNonPresent = function (target, key) {
    warn(
      "Property or method \"" + key + "\" is not defined on the instance but " +
      "referenced during render. Make sure to declare reactive data " +
      "properties in the data option.",
      target
    );
  };

  var hasProxy =
    typeof Proxy !== 'undefined' &&
    Proxy.toString().match(/native code/);

  if (hasProxy) {
    var isBuiltInModifier = makeMap('stop,prevent,self,ctrl,shift,alt,meta');
    config.keyCodes = new Proxy(config.keyCodes, {
      set: function set (target, key, value) {
        if (isBuiltInModifier(key)) {
          warn(("Avoid overwriting built-in modifier in config.keyCodes: ." + key));
          return false
        } else {
          target[key] = value;
          return true
        }
      }
    });
  }

  var hasHandler = {
    has: function has (target, key) {
      var has = key in target;
      var isAllowed = allowedGlobals(key) || key.charAt(0) === '_';
      if (!has && !isAllowed) {
        warnNonPresent(target, key);
      }
      return has || !isAllowed
    }
  };

  var getHandler = {
    get: function get (target, key) {
      if (typeof key === 'string' && !(key in target)) {
        warnNonPresent(target, key);
      }
      return target[key]
    }
  };

  initProxy = function initProxy (vm) {
    if (hasProxy) {
      // determine which proxy handler to use
      var options = vm.$options;
      var handlers = options.render && options.render._withStripped
        ? getHandler
        : hasHandler;
      vm._renderProxy = new Proxy(vm, handlers);
    } else {
      vm._renderProxy = vm;
    }
  };
}

var mark;
var measure;

if (process.env.NODE_ENV !== 'production') {
  var perf = inBrowser && window.performance;
  /* istanbul ignore if */
  if (
    perf &&
    perf.mark &&
    perf.measure &&
    perf.clearMarks &&
    perf.clearMeasures
  ) {
    mark = function (tag) { return perf.mark(tag); };
    measure = function (name, startTag, endTag) {
      perf.measure(name, startTag, endTag);
      perf.clearMarks(startTag);
      perf.clearMarks(endTag);
      perf.clearMeasures(name);
    };
  }
}

/*  */

var VNode = function VNode (
  tag,
  data,
  children,
  text,
  elm,
  context,
  componentOptions
) {
  this.tag = tag;
  this.data = data;
  this.children = children;
  this.text = text;
  this.elm = elm;
  this.ns = undefined;
  this.context = context;
  this.functionalContext = undefined;
  this.key = data && data.key;
  this.componentOptions = componentOptions;
  this.componentInstance = undefined;
  this.parent = undefined;
  this.raw = false;
  this.isStatic = false;
  this.isRootInsert = true;
  this.isComment = false;
  this.isCloned = false;
  this.isOnce = false;
};

var prototypeAccessors = { child: {} };

// DEPRECATED: alias for componentInstance for backwards compat.
/* istanbul ignore next */
prototypeAccessors.child.get = function () {
  return this.componentInstance
};

Object.defineProperties( VNode.prototype, prototypeAccessors );

var createEmptyVNode = function () {
  var node = new VNode();
  node.text = '';
  node.isComment = true;
  return node
};

function createTextVNode (val) {
  return new VNode(undefined, undefined, undefined, String(val))
}

// optimized shallow clone
// used for static nodes and slot nodes because they may be reused across
// multiple renders, cloning them avoids errors when DOM manipulations rely
// on their elm reference.
function cloneVNode (vnode) {
  var cloned = new VNode(
    vnode.tag,
    vnode.data,
    vnode.children,
    vnode.text,
    vnode.elm,
    vnode.context,
    vnode.componentOptions
  );
  cloned.ns = vnode.ns;
  cloned.isStatic = vnode.isStatic;
  cloned.key = vnode.key;
  cloned.isCloned = true;
  return cloned
}

function cloneVNodes (vnodes) {
  var len = vnodes.length;
  var res = new Array(len);
  for (var i = 0; i < len; i++) {
    res[i] = cloneVNode(vnodes[i]);
  }
  return res
}

/*  */

var normalizeEvent = cached(function (name) {
  var once$$1 = name.charAt(0) === '~'; // Prefixed last, checked first
  name = once$$1 ? name.slice(1) : name;
  var capture = name.charAt(0) === '!';
  name = capture ? name.slice(1) : name;
  return {
    name: name,
    once: once$$1,
    capture: capture
  }
});

function createFnInvoker (fns) {
  function invoker () {
    var arguments$1 = arguments;

    var fns = invoker.fns;
    if (Array.isArray(fns)) {
      for (var i = 0; i < fns.length; i++) {
        fns[i].apply(null, arguments$1);
      }
    } else {
      // return handler return value for single handlers
      return fns.apply(null, arguments)
    }
  }
  invoker.fns = fns;
  return invoker
}

function updateListeners (
  on,
  oldOn,
  add,
  remove$$1,
  vm
) {
  var name, cur, old, event;
  for (name in on) {
    cur = on[name];
    old = oldOn[name];
    event = normalizeEvent(name);
    if (!cur) {
      process.env.NODE_ENV !== 'production' && warn(
        "Invalid handler for event \"" + (event.name) + "\": got " + String(cur),
        vm
      );
    } else if (!old) {
      if (!cur.fns) {
        cur = on[name] = createFnInvoker(cur);
      }
      add(event.name, cur, event.once, event.capture);
    } else if (cur !== old) {
      old.fns = cur;
      on[name] = old;
    }
  }
  for (name in oldOn) {
    if (!on[name]) {
      event = normalizeEvent(name);
      remove$$1(event.name, oldOn[name], event.capture);
    }
  }
}

/*  */

function mergeVNodeHook (def, hookKey, hook) {
  var invoker;
  var oldHook = def[hookKey];

  function wrappedHook () {
    hook.apply(this, arguments);
    // important: remove merged hook to ensure it's called only once
    // and prevent memory leak
    remove(invoker.fns, wrappedHook);
  }

  if (!oldHook) {
    // no existing hook
    invoker = createFnInvoker([wrappedHook]);
  } else {
    /* istanbul ignore if */
    if (oldHook.fns && oldHook.merged) {
      // already a merged invoker
      invoker = oldHook;
      invoker.fns.push(wrappedHook);
    } else {
      // existing plain hook
      invoker = createFnInvoker([oldHook, wrappedHook]);
    }
  }

  invoker.merged = true;
  def[hookKey] = invoker;
}

/*  */

// The template compiler attempts to minimize the need for normalization by
// statically analyzing the template at compile time.
//
// For plain HTML markup, normalization can be completely skipped because the
// generated render function is guaranteed to return Array<VNode>. There are
// two cases where extra normalization is needed:

// 1. When the children contains components - because a functional component
// may return an Array instead of a single root. In this case, just a simple
// normalization is needed - if any child is an Array, we flatten the whole
// thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
// because functional components already normalize their own children.
function simpleNormalizeChildren (children) {
  for (var i = 0; i < children.length; i++) {
    if (Array.isArray(children[i])) {
      return Array.prototype.concat.apply([], children)
    }
  }
  return children
}

// 2. When the children contains constructs that always generated nested Arrays,
// e.g. <template>, <slot>, v-for, or when the children is provided by user
// with hand-written render functions / JSX. In such cases a full normalization
// is needed to cater to all possible types of children values.
function normalizeChildren (children) {
  return isPrimitive(children)
    ? [createTextVNode(children)]
    : Array.isArray(children)
      ? normalizeArrayChildren(children)
      : undefined
}

function normalizeArrayChildren (children, nestedIndex) {
  var res = [];
  var i, c, last;
  for (i = 0; i < children.length; i++) {
    c = children[i];
    if (c == null || typeof c === 'boolean') { continue }
    last = res[res.length - 1];
    //  nested
    if (Array.isArray(c)) {
      res.push.apply(res, normalizeArrayChildren(c, ((nestedIndex || '') + "_" + i)));
    } else if (isPrimitive(c)) {
      if (last && last.text) {
        last.text += String(c);
      } else if (c !== '') {
        // convert primitive to vnode
        res.push(createTextVNode(c));
      }
    } else {
      if (c.text && last && last.text) {
        res[res.length - 1] = createTextVNode(last.text + c.text);
      } else {
        // default key for nested array children (likely generated by v-for)
        if (c.tag && c.key == null && nestedIndex != null) {
          c.key = "__vlist" + nestedIndex + "_" + i + "__";
        }
        res.push(c);
      }
    }
  }
  return res
}

/*  */

function getFirstComponentChild (children) {
  return children && children.filter(function (c) { return c && c.componentOptions; })[0]
}

/*  */

function initEvents (vm) {
  vm._events = Object.create(null);
  vm._hasHookEvent = false;
  // init parent attached events
  var listeners = vm.$options._parentListeners;
  if (listeners) {
    updateComponentListeners(vm, listeners);
  }
}

var target;

function add (event, fn, once$$1) {
  if (once$$1) {
    target.$once(event, fn);
  } else {
    target.$on(event, fn);
  }
}

function remove$1 (event, fn) {
  target.$off(event, fn);
}

function updateComponentListeners (
  vm,
  listeners,
  oldListeners
) {
  target = vm;
  updateListeners(listeners, oldListeners || {}, add, remove$1, vm);
}

function eventsMixin (Vue) {
  var hookRE = /^hook:/;
  Vue.prototype.$on = function (event, fn) {
    var this$1 = this;

    var vm = this;
    if (Array.isArray(event)) {
      for (var i = 0, l = event.length; i < l; i++) {
        this$1.$on(event[i], fn);
      }
    } else {
      (vm._events[event] || (vm._events[event] = [])).push(fn);
      // optimize hook:event cost by using a boolean flag marked at registration
      // instead of a hash lookup
      if (hookRE.test(event)) {
        vm._hasHookEvent = true;
      }
    }
    return vm
  };

  Vue.prototype.$once = function (event, fn) {
    var vm = this;
    function on () {
      vm.$off(event, on);
      fn.apply(vm, arguments);
    }
    on.fn = fn;
    vm.$on(event, on);
    return vm
  };

  Vue.prototype.$off = function (event, fn) {
    var this$1 = this;

    var vm = this;
    // all
    if (!arguments.length) {
      vm._events = Object.create(null);
      return vm
    }
    // array of events
    if (Array.isArray(event)) {
      for (var i$1 = 0, l = event.length; i$1 < l; i$1++) {
        this$1.$off(event[i$1], fn);
      }
      return vm
    }
    // specific event
    var cbs = vm._events[event];
    if (!cbs) {
      return vm
    }
    if (arguments.length === 1) {
      vm._events[event] = null;
      return vm
    }
    // specific handler
    var cb;
    var i = cbs.length;
    while (i--) {
      cb = cbs[i];
      if (cb === fn || cb.fn === fn) {
        cbs.splice(i, 1);
        break
      }
    }
    return vm
  };

  Vue.prototype.$emit = function (event) {
    var vm = this;
    if (process.env.NODE_ENV !== 'production') {
      var lowerCaseEvent = event.toLowerCase();
      if (lowerCaseEvent !== event && vm._events[lowerCaseEvent]) {
        tip(
          "Event \"" + lowerCaseEvent + "\" is emitted in component " +
          (formatComponentName(vm)) + " but the handler is registered for \"" + event + "\". " +
          "Note that HTML attributes are case-insensitive and you cannot use " +
          "v-on to listen to camelCase events when using in-DOM templates. " +
          "You should probably use \"" + (hyphenate(event)) + "\" instead of \"" + event + "\"."
        );
      }
    }
    var cbs = vm._events[event];
    if (cbs) {
      cbs = cbs.length > 1 ? toArray(cbs) : cbs;
      var args = toArray(arguments, 1);
      for (var i = 0, l = cbs.length; i < l; i++) {
        cbs[i].apply(vm, args);
      }
    }
    return vm
  };
}

/*  */

/**
 * Runtime helper for resolving raw children VNodes into a slot object.
 */
function resolveSlots (
  children,
  context
) {
  var slots = {};
  if (!children) {
    return slots
  }
  var defaultSlot = [];
  var name, child;
  for (var i = 0, l = children.length; i < l; i++) {
    child = children[i];
    // named slots should only be respected if the vnode was rendered in the
    // same context.
    if ((child.context === context || child.functionalContext === context) &&
        child.data && (name = child.data.slot)) {
      var slot = (slots[name] || (slots[name] = []));
      if (child.tag === 'template') {
        slot.push.apply(slot, child.children);
      } else {
        slot.push(child);
      }
    } else {
      defaultSlot.push(child);
    }
  }
  // ignore whitespace
  if (!defaultSlot.every(isWhitespace)) {
    slots.default = defaultSlot;
  }
  return slots
}

function isWhitespace (node) {
  return node.isComment || node.text === ' '
}

function resolveScopedSlots (
  fns
) {
  var res = {};
  for (var i = 0; i < fns.length; i++) {
    res[fns[i][0]] = fns[i][1];
  }
  return res
}

/*  */

var activeInstance = null;

function initLifecycle (vm) {
  var options = vm.$options;

  // locate first non-abstract parent
  var parent = options.parent;
  if (parent && !options.abstract) {
    while (parent.$options.abstract && parent.$parent) {
      parent = parent.$parent;
    }
    parent.$children.push(vm);
  }

  vm.$parent = parent;
  vm.$root = parent ? parent.$root : vm;

  vm.$children = [];
  vm.$refs = {};

  vm._watcher = null;
  vm._inactive = null;
  vm._directInactive = false;
  vm._isMounted = false;
  vm._isDestroyed = false;
  vm._isBeingDestroyed = false;
}

function lifecycleMixin (Vue) {
  Vue.prototype._update = function (vnode, hydrating) {
    var vm = this;
    if (vm._isMounted) {
      callHook(vm, 'beforeUpdate');
    }
    var prevEl = vm.$el;
    var prevVnode = vm._vnode;
    var prevActiveInstance = activeInstance;
    activeInstance = vm;
    vm._vnode = vnode;
    // Vue.prototype.__patch__ is injected in entry points
    // based on the rendering backend used.
    if (!prevVnode) {
      // initial render
      vm.$el = vm.__patch__(
        vm.$el, vnode, hydrating, false /* removeOnly */,
        vm.$options._parentElm,
        vm.$options._refElm
      );
    } else {
      // updates
      vm.$el = vm.__patch__(prevVnode, vnode);
    }
    activeInstance = prevActiveInstance;
    // update __vue__ reference
    if (prevEl) {
      prevEl.__vue__ = null;
    }
    if (vm.$el) {
      vm.$el.__vue__ = vm;
    }
    // if parent is an HOC, update its $el as well
    if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
      vm.$parent.$el = vm.$el;
    }
    // updated hook is called by the scheduler to ensure that children are
    // updated in a parent's updated hook.
  };

  Vue.prototype.$forceUpdate = function () {
    var vm = this;
    if (vm._watcher) {
      vm._watcher.update();
    }
  };

  Vue.prototype.$destroy = function () {
    var vm = this;
    if (vm._isBeingDestroyed) {
      return
    }
    callHook(vm, 'beforeDestroy');
    vm._isBeingDestroyed = true;
    // remove self from parent
    var parent = vm.$parent;
    if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
      remove(parent.$children, vm);
    }
    // teardown watchers
    if (vm._watcher) {
      vm._watcher.teardown();
    }
    var i = vm._watchers.length;
    while (i--) {
      vm._watchers[i].teardown();
    }
    // remove reference from data ob
    // frozen object may not have observer.
    if (vm._data.__ob__) {
      vm._data.__ob__.vmCount--;
    }
    // call the last hook...
    vm._isDestroyed = true;
    callHook(vm, 'destroyed');
    // turn off all instance listeners.
    vm.$off();
    // remove __vue__ reference
    if (vm.$el) {
      vm.$el.__vue__ = null;
    }
    // invoke destroy hooks on current rendered tree
    vm.__patch__(vm._vnode, null);
  };
}

function mountComponent (
  vm,
  el,
  hydrating
) {
  vm.$el = el;
  if (!vm.$options.render) {
    vm.$options.render = createEmptyVNode;
    if (process.env.NODE_ENV !== 'production') {
      /* istanbul ignore if */
      if ((vm.$options.template && vm.$options.template.charAt(0) !== '#') ||
        vm.$options.el || el) {
        warn(
          'You are using the runtime-only build of Vue where the template ' +
          'compiler is not available. Either pre-compile the templates into ' +
          'render functions, or use the compiler-included build.',
          vm
        );
      } else {
        warn(
          'Failed to mount component: template or render function not defined.',
          vm
        );
      }
    }
  }
  callHook(vm, 'beforeMount');

  var updateComponent;
  /* istanbul ignore if */
  if (process.env.NODE_ENV !== 'production' && config.performance && mark) {
    updateComponent = function () {
      var name = vm._name;
      var id = vm._uid;
      var startTag = "vue-perf-start:" + id;
      var endTag = "vue-perf-end:" + id;

      mark(startTag);
      var vnode = vm._render();
      mark(endTag);
      measure((name + " render"), startTag, endTag);

      mark(startTag);
      vm._update(vnode, hydrating);
      mark(endTag);
      measure((name + " patch"), startTag, endTag);
    };
  } else {
    updateComponent = function () {
      vm._update(vm._render(), hydrating);
    };
  }

  vm._watcher = new Watcher(vm, updateComponent, noop);
  hydrating = false;

  // manually mounted instance, call mounted on self
  // mounted is called for render-created child components in its inserted hook
  if (vm.$vnode == null) {
    vm._isMounted = true;
    callHook(vm, 'mounted');
  }
  return vm
}

function updateChildComponent (
  vm,
  propsData,
  listeners,
  parentVnode,
  renderChildren
) {
  // determine whether component has slot children
  // we need to do this before overwriting $options._renderChildren
  var hasChildren = !!(
    renderChildren ||               // has new static slots
    vm.$options._renderChildren ||  // has old static slots
    parentVnode.data.scopedSlots || // has new scoped slots
    vm.$scopedSlots !== emptyObject // has old scoped slots
  );

  vm.$options._parentVnode = parentVnode;
  vm.$vnode = parentVnode; // update vm's placeholder node without re-render
  if (vm._vnode) { // update child tree's parent
    vm._vnode.parent = parentVnode;
  }
  vm.$options._renderChildren = renderChildren;

  // update props
  if (propsData && vm.$options.props) {
    observerState.shouldConvert = false;
    if (process.env.NODE_ENV !== 'production') {
      observerState.isSettingProps = true;
    }
    var props = vm._props;
    var propKeys = vm.$options._propKeys || [];
    for (var i = 0; i < propKeys.length; i++) {
      var key = propKeys[i];
      props[key] = validateProp(key, vm.$options.props, propsData, vm);
    }
    observerState.shouldConvert = true;
    if (process.env.NODE_ENV !== 'production') {
      observerState.isSettingProps = false;
    }
    // keep a copy of raw propsData
    vm.$options.propsData = propsData;
  }
  // update listeners
  if (listeners) {
    var oldListeners = vm.$options._parentListeners;
    vm.$options._parentListeners = listeners;
    updateComponentListeners(vm, listeners, oldListeners);
  }
  // resolve slots + force update if has children
  if (hasChildren) {
    vm.$slots = resolveSlots(renderChildren, parentVnode.context);
    vm.$forceUpdate();
  }
}

function isInInactiveTree (vm) {
  while (vm && (vm = vm.$parent)) {
    if (vm._inactive) { return true }
  }
  return false
}

function activateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = false;
    if (isInInactiveTree(vm)) {
      return
    }
  } else if (vm._directInactive) {
    return
  }
  if (vm._inactive || vm._inactive == null) {
    vm._inactive = false;
    for (var i = 0; i < vm.$children.length; i++) {
      activateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'activated');
  }
}

function deactivateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = true;
    if (isInInactiveTree(vm)) {
      return
    }
  }
  if (!vm._inactive) {
    vm._inactive = true;
    for (var i = 0; i < vm.$children.length; i++) {
      deactivateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'deactivated');
  }
}

function callHook (vm, hook) {
  var handlers = vm.$options[hook];
  if (handlers) {
    for (var i = 0, j = handlers.length; i < j; i++) {
      try {
        handlers[i].call(vm);
      } catch (e) {
        handleError(e, vm, (hook + " hook"));
      }
    }
  }
  if (vm._hasHookEvent) {
    vm.$emit('hook:' + hook);
  }
}

/*  */


var queue = [];
var has = {};
var circular = {};
var waiting = false;
var flushing = false;
var index = 0;

/**
 * Reset the scheduler's state.
 */
function resetSchedulerState () {
  queue.length = 0;
  has = {};
  if (process.env.NODE_ENV !== 'production') {
    circular = {};
  }
  waiting = flushing = false;
}

/**
 * Flush both queues and run the watchers.
 */
function flushSchedulerQueue () {
  flushing = true;
  var watcher, id, vm;

  // Sort queue before flush.
  // This ensures that:
  // 1. Components are updated from parent to child. (because parent is always
  //    created before the child)
  // 2. A component's user watchers are run before its render watcher (because
  //    user watchers are created before the render watcher)
  // 3. If a component is destroyed during a parent component's watcher run,
  //    its watchers can be skipped.
  queue.sort(function (a, b) { return a.id - b.id; });

  // do not cache length because more watchers might be pushed
  // as we run existing watchers
  for (index = 0; index < queue.length; index++) {
    watcher = queue[index];
    id = watcher.id;
    has[id] = null;
    watcher.run();
    // in dev build, check and stop circular updates.
    if (process.env.NODE_ENV !== 'production' && has[id] != null) {
      circular[id] = (circular[id] || 0) + 1;
      if (circular[id] > config._maxUpdateCount) {
        warn(
          'You may have an infinite update loop ' + (
            watcher.user
              ? ("in watcher with expression \"" + (watcher.expression) + "\"")
              : "in a component render function."
          ),
          watcher.vm
        );
        break
      }
    }
  }

  // reset scheduler before updated hook called
  var oldQueue = queue.slice();
  resetSchedulerState();

  // call updated hooks
  index = oldQueue.length;
  while (index--) {
    watcher = oldQueue[index];
    vm = watcher.vm;
    if (vm._watcher === watcher && vm._isMounted) {
      callHook(vm, 'updated');
    }
  }

  // devtool hook
  /* istanbul ignore if */
  if (devtools && config.devtools) {
    devtools.emit('flush');
  }
}

/**
 * Push a watcher into the watcher queue.
 * Jobs with duplicate IDs will be skipped unless it's
 * pushed when the queue is being flushed.
 */
function queueWatcher (watcher) {
  var id = watcher.id;
  if (has[id] == null) {
    has[id] = true;
    if (!flushing) {
      queue.push(watcher);
    } else {
      // if already flushing, splice the watcher based on its id
      // if already past its id, it will be run next immediately.
      var i = queue.length - 1;
      while (i >= 0 && queue[i].id > watcher.id) {
        i--;
      }
      queue.splice(Math.max(i, index) + 1, 0, watcher);
    }
    // queue the flush
    if (!waiting) {
      waiting = true;
      nextTick(flushSchedulerQueue);
    }
  }
}

/*  */

var uid$2 = 0;

/**
 * A watcher parses an expression, collects dependencies,
 * and fires callback when the expression value changes.
 * This is used for both the $watch() api and directives.
 */
var Watcher = function Watcher (
  vm,
  expOrFn,
  cb,
  options
) {
  this.vm = vm;
  vm._watchers.push(this);
  // options
  if (options) {
    this.deep = !!options.deep;
    this.user = !!options.user;
    this.lazy = !!options.lazy;
    this.sync = !!options.sync;
  } else {
    this.deep = this.user = this.lazy = this.sync = false;
  }
  this.cb = cb;
  this.id = ++uid$2; // uid for batching
  this.active = true;
  this.dirty = this.lazy; // for lazy watchers
  this.deps = [];
  this.newDeps = [];
  this.depIds = new _Set();
  this.newDepIds = new _Set();
  this.expression = process.env.NODE_ENV !== 'production'
    ? expOrFn.toString()
    : '';
  // parse expression for getter
  if (typeof expOrFn === 'function') {
    this.getter = expOrFn;
  } else {
    this.getter = parsePath(expOrFn);
    if (!this.getter) {
      this.getter = function () {};
      process.env.NODE_ENV !== 'production' && warn(
        "Failed watching path: \"" + expOrFn + "\" " +
        'Watcher only accepts simple dot-delimited paths. ' +
        'For full control, use a function instead.',
        vm
      );
    }
  }
  this.value = this.lazy
    ? undefined
    : this.get();
};

/**
 * Evaluate the getter, and re-collect dependencies.
 */
Watcher.prototype.get = function get () {
  pushTarget(this);
  var value;
  var vm = this.vm;
  if (this.user) {
    try {
      value = this.getter.call(vm, vm);
    } catch (e) {
      handleError(e, vm, ("getter for watcher \"" + (this.expression) + "\""));
    }
  } else {
    value = this.getter.call(vm, vm);
  }
  // "touch" every property so they are all tracked as
  // dependencies for deep watching
  if (this.deep) {
    traverse(value);
  }
  popTarget();
  this.cleanupDeps();
  return value
};

/**
 * Add a dependency to this directive.
 */
Watcher.prototype.addDep = function addDep (dep) {
  var id = dep.id;
  if (!this.newDepIds.has(id)) {
    this.newDepIds.add(id);
    this.newDeps.push(dep);
    if (!this.depIds.has(id)) {
      dep.addSub(this);
    }
  }
};

/**
 * Clean up for dependency collection.
 */
Watcher.prototype.cleanupDeps = function cleanupDeps () {
    var this$1 = this;

  var i = this.deps.length;
  while (i--) {
    var dep = this$1.deps[i];
    if (!this$1.newDepIds.has(dep.id)) {
      dep.removeSub(this$1);
    }
  }
  var tmp = this.depIds;
  this.depIds = this.newDepIds;
  this.newDepIds = tmp;
  this.newDepIds.clear();
  tmp = this.deps;
  this.deps = this.newDeps;
  this.newDeps = tmp;
  this.newDeps.length = 0;
};

/**
 * Subscriber interface.
 * Will be called when a dependency changes.
 */
Watcher.prototype.update = function update () {
  /* istanbul ignore else */
  if (this.lazy) {
    this.dirty = true;
  } else if (this.sync) {
    this.run();
  } else {
    queueWatcher(this);
  }
};

/**
 * Scheduler job interface.
 * Will be called by the scheduler.
 */
Watcher.prototype.run = function run () {
  if (this.active) {
    var value = this.get();
    if (
      value !== this.value ||
      // Deep watchers and watchers on Object/Arrays should fire even
      // when the value is the same, because the value may
      // have mutated.
      isObject(value) ||
      this.deep
    ) {
      // set new value
      var oldValue = this.value;
      this.value = value;
      if (this.user) {
        try {
          this.cb.call(this.vm, value, oldValue);
        } catch (e) {
          handleError(e, this.vm, ("callback for watcher \"" + (this.expression) + "\""));
        }
      } else {
        this.cb.call(this.vm, value, oldValue);
      }
    }
  }
};

/**
 * Evaluate the value of the watcher.
 * This only gets called for lazy watchers.
 */
Watcher.prototype.evaluate = function evaluate () {
  this.value = this.get();
  this.dirty = false;
};

/**
 * Depend on all deps collected by this watcher.
 */
Watcher.prototype.depend = function depend () {
    var this$1 = this;

  var i = this.deps.length;
  while (i--) {
    this$1.deps[i].depend();
  }
};

/**
 * Remove self from all dependencies' subscriber list.
 */
Watcher.prototype.teardown = function teardown () {
    var this$1 = this;

  if (this.active) {
    // remove self from vm's watcher list
    // this is a somewhat expensive operation so we skip it
    // if the vm is being destroyed.
    if (!this.vm._isBeingDestroyed) {
      remove(this.vm._watchers, this);
    }
    var i = this.deps.length;
    while (i--) {
      this$1.deps[i].removeSub(this$1);
    }
    this.active = false;
  }
};

/**
 * Recursively traverse an object to evoke all converted
 * getters, so that every nested property inside the object
 * is collected as a "deep" dependency.
 */
var seenObjects = new _Set();
function traverse (val) {
  seenObjects.clear();
  _traverse(val, seenObjects);
}

function _traverse (val, seen) {
  var i, keys;
  var isA = Array.isArray(val);
  if ((!isA && !isObject(val)) || !Object.isExtensible(val)) {
    return
  }
  if (val.__ob__) {
    var depId = val.__ob__.dep.id;
    if (seen.has(depId)) {
      return
    }
    seen.add(depId);
  }
  if (isA) {
    i = val.length;
    while (i--) { _traverse(val[i], seen); }
  } else {
    keys = Object.keys(val);
    i = keys.length;
    while (i--) { _traverse(val[keys[i]], seen); }
  }
}

/*  */

var sharedPropertyDefinition = {
  enumerable: true,
  configurable: true,
  get: noop,
  set: noop
};

function proxy (target, sourceKey, key) {
  sharedPropertyDefinition.get = function proxyGetter () {
    return this[sourceKey][key]
  };
  sharedPropertyDefinition.set = function proxySetter (val) {
    this[sourceKey][key] = val;
  };
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function initState (vm) {
  vm._watchers = [];
  var opts = vm.$options;
  if (opts.props) { initProps(vm, opts.props); }
  if (opts.methods) { initMethods(vm, opts.methods); }
  if (opts.data) {
    initData(vm);
  } else {
    observe(vm._data = {}, true /* asRootData */);
  }
  if (opts.computed) { initComputed(vm, opts.computed); }
  if (opts.watch) { initWatch(vm, opts.watch); }
}

var isReservedProp = { key: 1, ref: 1, slot: 1 };

function initProps (vm, propsOptions) {
  var propsData = vm.$options.propsData || {};
  var props = vm._props = {};
  // cache prop keys so that future props updates can iterate using Array
  // instead of dynamic object key enumeration.
  var keys = vm.$options._propKeys = [];
  var isRoot = !vm.$parent;
  // root instance props should be converted
  observerState.shouldConvert = isRoot;
  var loop = function ( key ) {
    keys.push(key);
    var value = validateProp(key, propsOptions, propsData, vm);
    /* istanbul ignore else */
    if (process.env.NODE_ENV !== 'production') {
      if (isReservedProp[key]) {
        warn(
          ("\"" + key + "\" is a reserved attribute and cannot be used as component prop."),
          vm
        );
      }
      defineReactive$$1(props, key, value, function () {
        if (vm.$parent && !observerState.isSettingProps) {
          warn(
            "Avoid mutating a prop directly since the value will be " +
            "overwritten whenever the parent component re-renders. " +
            "Instead, use a data or computed property based on the prop's " +
            "value. Prop being mutated: \"" + key + "\"",
            vm
          );
        }
      });
    } else {
      defineReactive$$1(props, key, value);
    }
    // static props are already proxied on the component's prototype
    // during Vue.extend(). We only need to proxy props defined at
    // instantiation here.
    if (!(key in vm)) {
      proxy(vm, "_props", key);
    }
  };

  for (var key in propsOptions) loop( key );
  observerState.shouldConvert = true;
}

function initData (vm) {
  var data = vm.$options.data;
  data = vm._data = typeof data === 'function'
    ? getData(data, vm)
    : data || {};
  if (!isPlainObject(data)) {
    data = {};
    process.env.NODE_ENV !== 'production' && warn(
      'data functions should return an object:\n' +
      'https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function',
      vm
    );
  }
  // proxy data on instance
  var keys = Object.keys(data);
  var props = vm.$options.props;
  var i = keys.length;
  while (i--) {
    if (props && hasOwn(props, keys[i])) {
      process.env.NODE_ENV !== 'production' && warn(
        "The data property \"" + (keys[i]) + "\" is already declared as a prop. " +
        "Use prop default value instead.",
        vm
      );
    } else if (!isReserved(keys[i])) {
      proxy(vm, "_data", keys[i]);
    }
  }
  // observe data
  observe(data, true /* asRootData */);
}

function getData (data, vm) {
  try {
    return data.call(vm)
  } catch (e) {
    handleError(e, vm, "data()");
    return {}
  }
}

var computedWatcherOptions = { lazy: true };

function initComputed (vm, computed) {
  var watchers = vm._computedWatchers = Object.create(null);

  for (var key in computed) {
    var userDef = computed[key];
    var getter = typeof userDef === 'function' ? userDef : userDef.get;
    // create internal watcher for the computed property.
    watchers[key] = new Watcher(vm, getter, noop, computedWatcherOptions);

    // component-defined computed properties are already defined on the
    // component prototype. We only need to define computed properties defined
    // at instantiation here.
    if (!(key in vm)) {
      defineComputed(vm, key, userDef);
    }
  }
}

function defineComputed (target, key, userDef) {
  if (typeof userDef === 'function') {
    sharedPropertyDefinition.get = createComputedGetter(key);
    sharedPropertyDefinition.set = noop;
  } else {
    sharedPropertyDefinition.get = userDef.get
      ? userDef.cache !== false
        ? createComputedGetter(key)
        : userDef.get
      : noop;
    sharedPropertyDefinition.set = userDef.set
      ? userDef.set
      : noop;
  }
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function createComputedGetter (key) {
  return function computedGetter () {
    var watcher = this._computedWatchers && this._computedWatchers[key];
    if (watcher) {
      if (watcher.dirty) {
        watcher.evaluate();
      }
      if (Dep.target) {
        watcher.depend();
      }
      return watcher.value
    }
  }
}

function initMethods (vm, methods) {
  var props = vm.$options.props;
  for (var key in methods) {
    vm[key] = methods[key] == null ? noop : bind(methods[key], vm);
    if (process.env.NODE_ENV !== 'production') {
      if (methods[key] == null) {
        warn(
          "method \"" + key + "\" has an undefined value in the component definition. " +
          "Did you reference the function correctly?",
          vm
        );
      }
      if (props && hasOwn(props, key)) {
        warn(
          ("method \"" + key + "\" has already been defined as a prop."),
          vm
        );
      }
    }
  }
}

function initWatch (vm, watch) {
  for (var key in watch) {
    var handler = watch[key];
    if (Array.isArray(handler)) {
      for (var i = 0; i < handler.length; i++) {
        createWatcher(vm, key, handler[i]);
      }
    } else {
      createWatcher(vm, key, handler);
    }
  }
}

function createWatcher (vm, key, handler) {
  var options;
  if (isPlainObject(handler)) {
    options = handler;
    handler = handler.handler;
  }
  if (typeof handler === 'string') {
    handler = vm[handler];
  }
  vm.$watch(key, handler, options);
}

function stateMixin (Vue) {
  // flow somehow has problems with directly declared definition object
  // when using Object.defineProperty, so we have to procedurally build up
  // the object here.
  var dataDef = {};
  dataDef.get = function () { return this._data };
  var propsDef = {};
  propsDef.get = function () { return this._props };
  if (process.env.NODE_ENV !== 'production') {
    dataDef.set = function (newData) {
      warn(
        'Avoid replacing instance root $data. ' +
        'Use nested data properties instead.',
        this
      );
    };
    propsDef.set = function () {
      warn("$props is readonly.", this);
    };
  }
  Object.defineProperty(Vue.prototype, '$data', dataDef);
  Object.defineProperty(Vue.prototype, '$props', propsDef);

  Vue.prototype.$set = set;
  Vue.prototype.$delete = del;

  Vue.prototype.$watch = function (
    expOrFn,
    cb,
    options
  ) {
    var vm = this;
    options = options || {};
    options.user = true;
    var watcher = new Watcher(vm, expOrFn, cb, options);
    if (options.immediate) {
      cb.call(vm, watcher.value);
    }
    return function unwatchFn () {
      watcher.teardown();
    }
  };
}

/*  */

// hooks to be invoked on component VNodes during patch
var componentVNodeHooks = {
  init: function init (
    vnode,
    hydrating,
    parentElm,
    refElm
  ) {
    if (!vnode.componentInstance || vnode.componentInstance._isDestroyed) {
      var child = vnode.componentInstance = createComponentInstanceForVnode(
        vnode,
        activeInstance,
        parentElm,
        refElm
      );
      child.$mount(hydrating ? vnode.elm : undefined, hydrating);
    } else if (vnode.data.keepAlive) {
      // kept-alive components, treat as a patch
      var mountedNode = vnode; // work around flow
      componentVNodeHooks.prepatch(mountedNode, mountedNode);
    }
  },

  prepatch: function prepatch (oldVnode, vnode) {
    var options = vnode.componentOptions;
    var child = vnode.componentInstance = oldVnode.componentInstance;
    updateChildComponent(
      child,
      options.propsData, // updated props
      options.listeners, // updated listeners
      vnode, // new parent vnode
      options.children // new children
    );
  },

  insert: function insert (vnode) {
    if (!vnode.componentInstance._isMounted) {
      vnode.componentInstance._isMounted = true;
      callHook(vnode.componentInstance, 'mounted');
    }
    if (vnode.data.keepAlive) {
      activateChildComponent(vnode.componentInstance, true /* direct */);
    }
  },

  destroy: function destroy (vnode) {
    if (!vnode.componentInstance._isDestroyed) {
      if (!vnode.data.keepAlive) {
        vnode.componentInstance.$destroy();
      } else {
        deactivateChildComponent(vnode.componentInstance, true /* direct */);
      }
    }
  }
};

var hooksToMerge = Object.keys(componentVNodeHooks);

function createComponent (
  Ctor,
  data,
  context,
  children,
  tag
) {
  if (!Ctor) {
    return
  }

  var baseCtor = context.$options._base;
  if (isObject(Ctor)) {
    Ctor = baseCtor.extend(Ctor);
  }

  if (typeof Ctor !== 'function') {
    if (process.env.NODE_ENV !== 'production') {
      warn(("Invalid Component definition: " + (String(Ctor))), context);
    }
    return
  }

  // async component
  if (!Ctor.cid) {
    if (Ctor.resolved) {
      Ctor = Ctor.resolved;
    } else {
      Ctor = resolveAsyncComponent(Ctor, baseCtor, function () {
        // it's ok to queue this on every render because
        // $forceUpdate is buffered by the scheduler.
        context.$forceUpdate();
      });
      if (!Ctor) {
        // return nothing if this is indeed an async component
        // wait for the callback to trigger parent update.
        return
      }
    }
  }

  // resolve constructor options in case global mixins are applied after
  // component constructor creation
  resolveConstructorOptions(Ctor);

  data = data || {};

  // transform component v-model data into props & events
  if (data.model) {
    transformModel(Ctor.options, data);
  }

  // extract props
  var propsData = extractProps(data, Ctor, tag);

  // functional component
  if (Ctor.options.functional) {
    return createFunctionalComponent(Ctor, propsData, data, context, children)
  }

  // extract listeners, since these needs to be treated as
  // child component listeners instead of DOM listeners
  var listeners = data.on;
  // replace with listeners with .native modifier
  data.on = data.nativeOn;

  if (Ctor.options.abstract) {
    // abstract components do not keep anything
    // other than props & listeners
    data = {};
  }

  // merge component management hooks onto the placeholder node
  mergeHooks(data);

  // return a placeholder vnode
  var name = Ctor.options.name || tag;
  var vnode = new VNode(
    ("vue-component-" + (Ctor.cid) + (name ? ("-" + name) : '')),
    data, undefined, undefined, undefined, context,
    { Ctor: Ctor, propsData: propsData, listeners: listeners, tag: tag, children: children }
  );
  return vnode
}

function createFunctionalComponent (
  Ctor,
  propsData,
  data,
  context,
  children
) {
  var props = {};
  var propOptions = Ctor.options.props;
  if (propOptions) {
    for (var key in propOptions) {
      props[key] = validateProp(key, propOptions, propsData);
    }
  }
  // ensure the createElement function in functional components
  // gets a unique context - this is necessary for correct named slot check
  var _context = Object.create(context);
  var h = function (a, b, c, d) { return createElement(_context, a, b, c, d, true); };
  var vnode = Ctor.options.render.call(null, h, {
    props: props,
    data: data,
    parent: context,
    children: children,
    slots: function () { return resolveSlots(children, context); }
  });
  if (vnode instanceof VNode) {
    vnode.functionalContext = context;
    if (data.slot) {
      (vnode.data || (vnode.data = {})).slot = data.slot;
    }
  }
  return vnode
}

function createComponentInstanceForVnode (
  vnode, // we know it's MountedComponentVNode but flow doesn't
  parent, // activeInstance in lifecycle state
  parentElm,
  refElm
) {
  var vnodeComponentOptions = vnode.componentOptions;
  var options = {
    _isComponent: true,
    parent: parent,
    propsData: vnodeComponentOptions.propsData,
    _componentTag: vnodeComponentOptions.tag,
    _parentVnode: vnode,
    _parentListeners: vnodeComponentOptions.listeners,
    _renderChildren: vnodeComponentOptions.children,
    _parentElm: parentElm || null,
    _refElm: refElm || null
  };
  // check inline-template render functions
  var inlineTemplate = vnode.data.inlineTemplate;
  if (inlineTemplate) {
    options.render = inlineTemplate.render;
    options.staticRenderFns = inlineTemplate.staticRenderFns;
  }
  return new vnodeComponentOptions.Ctor(options)
}

function resolveAsyncComponent (
  factory,
  baseCtor,
  cb
) {
  if (factory.requested) {
    // pool callbacks
    factory.pendingCallbacks.push(cb);
  } else {
    factory.requested = true;
    var cbs = factory.pendingCallbacks = [cb];
    var sync = true;

    var resolve = function (res) {
      if (isObject(res)) {
        res = baseCtor.extend(res);
      }
      // cache resolved
      factory.resolved = res;
      // invoke callbacks only if this is not a synchronous resolve
      // (async resolves are shimmed as synchronous during SSR)
      if (!sync) {
        for (var i = 0, l = cbs.length; i < l; i++) {
          cbs[i](res);
        }
      }
    };

    var reject = function (reason) {
      process.env.NODE_ENV !== 'production' && warn(
        "Failed to resolve async component: " + (String(factory)) +
        (reason ? ("\nReason: " + reason) : '')
      );
    };

    var res = factory(resolve, reject);

    // handle promise
    if (res && typeof res.then === 'function' && !factory.resolved) {
      res.then(resolve, reject);
    }

    sync = false;
    // return in case resolved synchronously
    return factory.resolved
  }
}

function extractProps (data, Ctor, tag) {
  // we are only extracting raw values here.
  // validation and default values are handled in the child
  // component itself.
  var propOptions = Ctor.options.props;
  if (!propOptions) {
    return
  }
  var res = {};
  var attrs = data.attrs;
  var props = data.props;
  var domProps = data.domProps;
  if (attrs || props || domProps) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      if (process.env.NODE_ENV !== 'production') {
        var keyInLowerCase = key.toLowerCase();
        if (
          key !== keyInLowerCase &&
          attrs && attrs.hasOwnProperty(keyInLowerCase)
        ) {
          tip(
            "Prop \"" + keyInLowerCase + "\" is passed to component " +
            (formatComponentName(tag || Ctor)) + ", but the delared prop name is" +
            " \"" + key + "\". " +
            "Note that HTML attributes are case-insensitive and camelCased " +
            "props need to use their kebab-case equivalents when using in-DOM " +
            "templates. You should probably use \"" + altKey + "\" instead of \"" + key + "\"."
          );
        }
      }
      checkProp(res, props, key, altKey, true) ||
      checkProp(res, attrs, key, altKey) ||
      checkProp(res, domProps, key, altKey);
    }
  }
  return res
}

function checkProp (
  res,
  hash,
  key,
  altKey,
  preserve
) {
  if (hash) {
    if (hasOwn(hash, key)) {
      res[key] = hash[key];
      if (!preserve) {
        delete hash[key];
      }
      return true
    } else if (hasOwn(hash, altKey)) {
      res[key] = hash[altKey];
      if (!preserve) {
        delete hash[altKey];
      }
      return true
    }
  }
  return false
}

function mergeHooks (data) {
  if (!data.hook) {
    data.hook = {};
  }
  for (var i = 0; i < hooksToMerge.length; i++) {
    var key = hooksToMerge[i];
    var fromParent = data.hook[key];
    var ours = componentVNodeHooks[key];
    data.hook[key] = fromParent ? mergeHook$1(ours, fromParent) : ours;
  }
}

function mergeHook$1 (one, two) {
  return function (a, b, c, d) {
    one(a, b, c, d);
    two(a, b, c, d);
  }
}

// transform component v-model info (value and callback) into
// prop and event handler respectively.
function transformModel (options, data) {
  var prop = (options.model && options.model.prop) || 'value';
  var event = (options.model && options.model.event) || 'input';(data.props || (data.props = {}))[prop] = data.model.value;
  var on = data.on || (data.on = {});
  if (on[event]) {
    on[event] = [data.model.callback].concat(on[event]);
  } else {
    on[event] = data.model.callback;
  }
}

/*  */

var SIMPLE_NORMALIZE = 1;
var ALWAYS_NORMALIZE = 2;

// wrapper function for providing a more flexible interface
// without getting yelled at by flow
function createElement (
  context,
  tag,
  data,
  children,
  normalizationType,
  alwaysNormalize
) {
  if (Array.isArray(data) || isPrimitive(data)) {
    normalizationType = children;
    children = data;
    data = undefined;
  }
  if (alwaysNormalize) { normalizationType = ALWAYS_NORMALIZE; }
  return _createElement(context, tag, data, children, normalizationType)
}

function _createElement (
  context,
  tag,
  data,
  children,
  normalizationType
) {
  if (data && data.__ob__) {
    process.env.NODE_ENV !== 'production' && warn(
      "Avoid using observed data object as vnode data: " + (JSON.stringify(data)) + "\n" +
      'Always create fresh vnode data objects in each render!',
      context
    );
    return createEmptyVNode()
  }
  if (!tag) {
    // in case of component :is set to falsy value
    return createEmptyVNode()
  }
  // support single function children as default scoped slot
  if (Array.isArray(children) &&
      typeof children[0] === 'function') {
    data = data || {};
    data.scopedSlots = { default: children[0] };
    children.length = 0;
  }
  if (normalizationType === ALWAYS_NORMALIZE) {
    children = normalizeChildren(children);
  } else if (normalizationType === SIMPLE_NORMALIZE) {
    children = simpleNormalizeChildren(children);
  }
  var vnode, ns;
  if (typeof tag === 'string') {
    var Ctor;
    ns = config.getTagNamespace(tag);
    if (config.isReservedTag(tag)) {
      // platform built-in elements
      vnode = new VNode(
        config.parsePlatformTagName(tag), data, children,
        undefined, undefined, context
      );
    } else if ((Ctor = resolveAsset(context.$options, 'components', tag))) {
      // component
      vnode = createComponent(Ctor, data, context, children, tag);
    } else {
      // unknown or unlisted namespaced elements
      // check at runtime because it may get assigned a namespace when its
      // parent normalizes children
      vnode = new VNode(
        tag, data, children,
        undefined, undefined, context
      );
    }
  } else {
    // direct component options / constructor
    vnode = createComponent(tag, data, context, children);
  }
  if (vnode) {
    if (ns) { applyNS(vnode, ns); }
    return vnode
  } else {
    return createEmptyVNode()
  }
}

function applyNS (vnode, ns) {
  vnode.ns = ns;
  if (vnode.tag === 'foreignObject') {
    // use default namespace inside foreignObject
    return
  }
  if (vnode.children) {
    for (var i = 0, l = vnode.children.length; i < l; i++) {
      var child = vnode.children[i];
      if (child.tag && !child.ns) {
        applyNS(child, ns);
      }
    }
  }
}

/*  */

/**
 * Runtime helper for rendering v-for lists.
 */
function renderList (
  val,
  render
) {
  var ret, i, l, keys, key;
  if (Array.isArray(val) || typeof val === 'string') {
    ret = new Array(val.length);
    for (i = 0, l = val.length; i < l; i++) {
      ret[i] = render(val[i], i);
    }
  } else if (typeof val === 'number') {
    ret = new Array(val);
    for (i = 0; i < val; i++) {
      ret[i] = render(i + 1, i);
    }
  } else if (isObject(val)) {
    keys = Object.keys(val);
    ret = new Array(keys.length);
    for (i = 0, l = keys.length; i < l; i++) {
      key = keys[i];
      ret[i] = render(val[key], key, i);
    }
  }
  return ret
}

/*  */

/**
 * Runtime helper for rendering <slot>
 */
function renderSlot (
  name,
  fallback,
  props,
  bindObject
) {
  var scopedSlotFn = this.$scopedSlots[name];
  if (scopedSlotFn) { // scoped slot
    props = props || {};
    if (bindObject) {
      extend(props, bindObject);
    }
    return scopedSlotFn(props) || fallback
  } else {
    var slotNodes = this.$slots[name];
    // warn duplicate slot usage
    if (slotNodes && process.env.NODE_ENV !== 'production') {
      slotNodes._rendered && warn(
        "Duplicate presence of slot \"" + name + "\" found in the same render tree " +
        "- this will likely cause render errors.",
        this
      );
      slotNodes._rendered = true;
    }
    return slotNodes || fallback
  }
}

/*  */

/**
 * Runtime helper for resolving filters
 */
function resolveFilter (id) {
  return resolveAsset(this.$options, 'filters', id, true) || identity
}

/*  */

/**
 * Runtime helper for checking keyCodes from config.
 */
function checkKeyCodes (
  eventKeyCode,
  key,
  builtInAlias
) {
  var keyCodes = config.keyCodes[key] || builtInAlias;
  if (Array.isArray(keyCodes)) {
    return keyCodes.indexOf(eventKeyCode) === -1
  } else {
    return keyCodes !== eventKeyCode
  }
}

/*  */

/**
 * Runtime helper for merging v-bind="object" into a VNode's data.
 */
function bindObjectProps (
  data,
  tag,
  value,
  asProp
) {
  if (value) {
    if (!isObject(value)) {
      process.env.NODE_ENV !== 'production' && warn(
        'v-bind without argument expects an Object or Array value',
        this
      );
    } else {
      if (Array.isArray(value)) {
        value = toObject(value);
      }
      var hash;
      for (var key in value) {
        if (key === 'class' || key === 'style') {
          hash = data;
        } else {
          var type = data.attrs && data.attrs.type;
          hash = asProp || config.mustUseProp(tag, type, key)
            ? data.domProps || (data.domProps = {})
            : data.attrs || (data.attrs = {});
        }
        if (!(key in hash)) {
          hash[key] = value[key];
        }
      }
    }
  }
  return data
}

/*  */

/**
 * Runtime helper for rendering static trees.
 */
function renderStatic (
  index,
  isInFor
) {
  var tree = this._staticTrees[index];
  // if has already-rendered static tree and not inside v-for,
  // we can reuse the same tree by doing a shallow clone.
  if (tree && !isInFor) {
    return Array.isArray(tree)
      ? cloneVNodes(tree)
      : cloneVNode(tree)
  }
  // otherwise, render a fresh tree.
  tree = this._staticTrees[index] =
    this.$options.staticRenderFns[index].call(this._renderProxy);
  markStatic(tree, ("__static__" + index), false);
  return tree
}

/**
 * Runtime helper for v-once.
 * Effectively it means marking the node as static with a unique key.
 */
function markOnce (
  tree,
  index,
  key
) {
  markStatic(tree, ("__once__" + index + (key ? ("_" + key) : "")), true);
  return tree
}

function markStatic (
  tree,
  key,
  isOnce
) {
  if (Array.isArray(tree)) {
    for (var i = 0; i < tree.length; i++) {
      if (tree[i] && typeof tree[i] !== 'string') {
        markStaticNode(tree[i], (key + "_" + i), isOnce);
      }
    }
  } else {
    markStaticNode(tree, key, isOnce);
  }
}

function markStaticNode (node, key, isOnce) {
  node.isStatic = true;
  node.key = key;
  node.isOnce = isOnce;
}

/*  */

function initRender (vm) {
  vm.$vnode = null; // the placeholder node in parent tree
  vm._vnode = null; // the root of the child tree
  vm._staticTrees = null;
  var parentVnode = vm.$options._parentVnode;
  var renderContext = parentVnode && parentVnode.context;
  vm.$slots = resolveSlots(vm.$options._renderChildren, renderContext);
  vm.$scopedSlots = emptyObject;
  // bind the createElement fn to this instance
  // so that we get proper render context inside it.
  // args order: tag, data, children, normalizationType, alwaysNormalize
  // internal version is used by render functions compiled from templates
  vm._c = function (a, b, c, d) { return createElement(vm, a, b, c, d, false); };
  // normalization is always applied for the public version, used in
  // user-written render functions.
  vm.$createElement = function (a, b, c, d) { return createElement(vm, a, b, c, d, true); };
}

function renderMixin (Vue) {
  Vue.prototype.$nextTick = function (fn) {
    return nextTick(fn, this)
  };

  Vue.prototype._render = function () {
    var vm = this;
    var ref = vm.$options;
    var render = ref.render;
    var staticRenderFns = ref.staticRenderFns;
    var _parentVnode = ref._parentVnode;

    if (vm._isMounted) {
      // clone slot nodes on re-renders
      for (var key in vm.$slots) {
        vm.$slots[key] = cloneVNodes(vm.$slots[key]);
      }
    }

    vm.$scopedSlots = (_parentVnode && _parentVnode.data.scopedSlots) || emptyObject;

    if (staticRenderFns && !vm._staticTrees) {
      vm._staticTrees = [];
    }
    // set parent vnode. this allows render functions to have access
    // to the data on the placeholder node.
    vm.$vnode = _parentVnode;
    // render self
    var vnode;
    try {
      vnode = render.call(vm._renderProxy, vm.$createElement);
    } catch (e) {
      handleError(e, vm, "render function");
      // return error render result,
      // or previous vnode to prevent render error causing blank component
      /* istanbul ignore else */
      if (process.env.NODE_ENV !== 'production') {
        vnode = vm.$options.renderError
          ? vm.$options.renderError.call(vm._renderProxy, vm.$createElement, e)
          : vm._vnode;
      } else {
        vnode = vm._vnode;
      }
    }
    // return empty vnode in case the render function errored out
    if (!(vnode instanceof VNode)) {
      if (process.env.NODE_ENV !== 'production' && Array.isArray(vnode)) {
        warn(
          'Multiple root nodes returned from render function. Render function ' +
          'should return a single root node.',
          vm
        );
      }
      vnode = createEmptyVNode();
    }
    // set parent
    vnode.parent = _parentVnode;
    return vnode
  };

  // internal render helpers.
  // these are exposed on the instance prototype to reduce generated render
  // code size.
  Vue.prototype._o = markOnce;
  Vue.prototype._n = toNumber;
  Vue.prototype._s = _toString;
  Vue.prototype._l = renderList;
  Vue.prototype._t = renderSlot;
  Vue.prototype._q = looseEqual;
  Vue.prototype._i = looseIndexOf;
  Vue.prototype._m = renderStatic;
  Vue.prototype._f = resolveFilter;
  Vue.prototype._k = checkKeyCodes;
  Vue.prototype._b = bindObjectProps;
  Vue.prototype._v = createTextVNode;
  Vue.prototype._e = createEmptyVNode;
  Vue.prototype._u = resolveScopedSlots;
}

/*  */

function initProvide (vm) {
  var provide = vm.$options.provide;
  if (provide) {
    vm._provided = typeof provide === 'function'
      ? provide.call(vm)
      : provide;
  }
}

function initInjections (vm) {
  var inject = vm.$options.inject;
  if (inject) {
    // inject is :any because flow is not smart enough to figure out cached
    // isArray here
    var isArray = Array.isArray(inject);
    var keys = isArray
      ? inject
      : hasSymbol
        ? Reflect.ownKeys(inject)
        : Object.keys(inject);

    var loop = function ( i ) {
      var key = keys[i];
      var provideKey = isArray ? key : inject[key];
      var source = vm;
      while (source) {
        if (source._provided && provideKey in source._provided) {
          /* istanbul ignore else */
          if (process.env.NODE_ENV !== 'production') {
            defineReactive$$1(vm, key, source._provided[provideKey], function () {
              warn(
                "Avoid mutating an injected value directly since the changes will be " +
                "overwritten whenever the provided component re-renders. " +
                "injection being mutated: \"" + key + "\"",
                vm
              );
            });
          } else {
            defineReactive$$1(vm, key, source._provided[provideKey]);
          }
          break
        }
        source = source.$parent;
      }
    };

    for (var i = 0; i < keys.length; i++) loop( i );
  }
}

/*  */

var uid = 0;

function initMixin (Vue) {
  Vue.prototype._init = function (options) {
    var vm = this;
    // a uid
    vm._uid = uid++;

    var startTag, endTag;
    /* istanbul ignore if */
    if (process.env.NODE_ENV !== 'production' && config.performance && mark) {
      startTag = "vue-perf-init:" + (vm._uid);
      endTag = "vue-perf-end:" + (vm._uid);
      mark(startTag);
    }

    // a flag to avoid this being observed
    vm._isVue = true;
    // merge options
    if (options && options._isComponent) {
      // optimize internal component instantiation
      // since dynamic options merging is pretty slow, and none of the
      // internal component options needs special treatment.
      initInternalComponent(vm, options);
    } else {
      vm.$options = mergeOptions(
        resolveConstructorOptions(vm.constructor),
        options || {},
        vm
      );
    }
    /* istanbul ignore else */
    if (process.env.NODE_ENV !== 'production') {
      initProxy(vm);
    } else {
      vm._renderProxy = vm;
    }
    // expose real self
    vm._self = vm;
    initLifecycle(vm);
    initEvents(vm);
    initRender(vm);
    callHook(vm, 'beforeCreate');
    initInjections(vm); // resolve injections before data/props
    initState(vm);
    initProvide(vm); // resolve provide after data/props
    callHook(vm, 'created');

    /* istanbul ignore if */
    if (process.env.NODE_ENV !== 'production' && config.performance && mark) {
      vm._name = formatComponentName(vm, false);
      mark(endTag);
      measure(((vm._name) + " init"), startTag, endTag);
    }

    if (vm.$options.el) {
      vm.$mount(vm.$options.el);
    }
  };
}

function initInternalComponent (vm, options) {
  var opts = vm.$options = Object.create(vm.constructor.options);
  // doing this because it's faster than dynamic enumeration.
  opts.parent = options.parent;
  opts.propsData = options.propsData;
  opts._parentVnode = options._parentVnode;
  opts._parentListeners = options._parentListeners;
  opts._renderChildren = options._renderChildren;
  opts._componentTag = options._componentTag;
  opts._parentElm = options._parentElm;
  opts._refElm = options._refElm;
  if (options.render) {
    opts.render = options.render;
    opts.staticRenderFns = options.staticRenderFns;
  }
}

function resolveConstructorOptions (Ctor) {
  var options = Ctor.options;
  if (Ctor.super) {
    var superOptions = resolveConstructorOptions(Ctor.super);
    var cachedSuperOptions = Ctor.superOptions;
    if (superOptions !== cachedSuperOptions) {
      // super option changed,
      // need to resolve new options.
      Ctor.superOptions = superOptions;
      // check if there are any late-modified/attached options (#4976)
      var modifiedOptions = resolveModifiedOptions(Ctor);
      // update base extend options
      if (modifiedOptions) {
        extend(Ctor.extendOptions, modifiedOptions);
      }
      options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions);
      if (options.name) {
        options.components[options.name] = Ctor;
      }
    }
  }
  return options
}

function resolveModifiedOptions (Ctor) {
  var modified;
  var latest = Ctor.options;
  var sealed = Ctor.sealedOptions;
  for (var key in latest) {
    if (latest[key] !== sealed[key]) {
      if (!modified) { modified = {}; }
      modified[key] = dedupe(latest[key], sealed[key]);
    }
  }
  return modified
}

function dedupe (latest, sealed) {
  // compare latest and sealed to ensure lifecycle hooks won't be duplicated
  // between merges
  if (Array.isArray(latest)) {
    var res = [];
    sealed = Array.isArray(sealed) ? sealed : [sealed];
    for (var i = 0; i < latest.length; i++) {
      if (sealed.indexOf(latest[i]) < 0) {
        res.push(latest[i]);
      }
    }
    return res
  } else {
    return latest
  }
}

function Vue$2 (options) {
  if (process.env.NODE_ENV !== 'production' &&
    !(this instanceof Vue$2)) {
    warn('Vue is a constructor and should be called with the `new` keyword');
  }
  this._init(options);
}

initMixin(Vue$2);
stateMixin(Vue$2);
eventsMixin(Vue$2);
lifecycleMixin(Vue$2);
renderMixin(Vue$2);

/*  */

function initUse (Vue) {
  Vue.use = function (plugin) {
    /* istanbul ignore if */
    if (plugin.installed) {
      return
    }
    // additional parameters
    var args = toArray(arguments, 1);
    args.unshift(this);
    if (typeof plugin.install === 'function') {
      plugin.install.apply(plugin, args);
    } else if (typeof plugin === 'function') {
      plugin.apply(null, args);
    }
    plugin.installed = true;
    return this
  };
}

/*  */

function initMixin$1 (Vue) {
  Vue.mixin = function (mixin) {
    this.options = mergeOptions(this.options, mixin);
  };
}

/*  */

function initExtend (Vue) {
  /**
   * Each instance constructor, including Vue, has a unique
   * cid. This enables us to create wrapped "child
   * constructors" for prototypal inheritance and cache them.
   */
  Vue.cid = 0;
  var cid = 1;

  /**
   * Class inheritance
   */
  Vue.extend = function (extendOptions) {
    extendOptions = extendOptions || {};
    var Super = this;
    var SuperId = Super.cid;
    var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});
    if (cachedCtors[SuperId]) {
      return cachedCtors[SuperId]
    }

    var name = extendOptions.name || Super.options.name;
    if (process.env.NODE_ENV !== 'production') {
      if (!/^[a-zA-Z][\w-]*$/.test(name)) {
        warn(
          'Invalid component name: "' + name + '". Component names ' +
          'can only contain alphanumeric characters and the hyphen, ' +
          'and must start with a letter.'
        );
      }
    }

    var Sub = function VueComponent (options) {
      this._init(options);
    };
    Sub.prototype = Object.create(Super.prototype);
    Sub.prototype.constructor = Sub;
    Sub.cid = cid++;
    Sub.options = mergeOptions(
      Super.options,
      extendOptions
    );
    Sub['super'] = Super;

    // For props and computed properties, we define the proxy getters on
    // the Vue instances at extension time, on the extended prototype. This
    // avoids Object.defineProperty calls for each instance created.
    if (Sub.options.props) {
      initProps$1(Sub);
    }
    if (Sub.options.computed) {
      initComputed$1(Sub);
    }

    // allow further extension/mixin/plugin usage
    Sub.extend = Super.extend;
    Sub.mixin = Super.mixin;
    Sub.use = Super.use;

    // create asset registers, so extended classes
    // can have their private assets too.
    config._assetTypes.forEach(function (type) {
      Sub[type] = Super[type];
    });
    // enable recursive self-lookup
    if (name) {
      Sub.options.components[name] = Sub;
    }

    // keep a reference to the super options at extension time.
    // later at instantiation we can check if Super's options have
    // been updated.
    Sub.superOptions = Super.options;
    Sub.extendOptions = extendOptions;
    Sub.sealedOptions = extend({}, Sub.options);

    // cache constructor
    cachedCtors[SuperId] = Sub;
    return Sub
  };
}

function initProps$1 (Comp) {
  var props = Comp.options.props;
  for (var key in props) {
    proxy(Comp.prototype, "_props", key);
  }
}

function initComputed$1 (Comp) {
  var computed = Comp.options.computed;
  for (var key in computed) {
    defineComputed(Comp.prototype, key, computed[key]);
  }
}

/*  */

function initAssetRegisters (Vue) {
  /**
   * Create asset registration methods.
   */
  config._assetTypes.forEach(function (type) {
    Vue[type] = function (
      id,
      definition
    ) {
      if (!definition) {
        return this.options[type + 's'][id]
      } else {
        /* istanbul ignore if */
        if (process.env.NODE_ENV !== 'production') {
          if (type === 'component' && config.isReservedTag(id)) {
            warn(
              'Do not use built-in or reserved HTML elements as component ' +
              'id: ' + id
            );
          }
        }
        if (type === 'component' && isPlainObject(definition)) {
          definition.name = definition.name || id;
          definition = this.options._base.extend(definition);
        }
        if (type === 'directive' && typeof definition === 'function') {
          definition = { bind: definition, update: definition };
        }
        this.options[type + 's'][id] = definition;
        return definition
      }
    };
  });
}

/*  */

var patternTypes = [String, RegExp];

function getComponentName (opts) {
  return opts && (opts.Ctor.options.name || opts.tag)
}

function matches (pattern, name) {
  if (typeof pattern === 'string') {
    return pattern.split(',').indexOf(name) > -1
  } else if (pattern instanceof RegExp) {
    return pattern.test(name)
  }
  /* istanbul ignore next */
  return false
}

function pruneCache (cache, filter) {
  for (var key in cache) {
    var cachedNode = cache[key];
    if (cachedNode) {
      var name = getComponentName(cachedNode.componentOptions);
      if (name && !filter(name)) {
        pruneCacheEntry(cachedNode);
        cache[key] = null;
      }
    }
  }
}

function pruneCacheEntry (vnode) {
  if (vnode) {
    if (!vnode.componentInstance._inactive) {
      callHook(vnode.componentInstance, 'deactivated');
    }
    vnode.componentInstance.$destroy();
  }
}

var KeepAlive = {
  name: 'keep-alive',
  abstract: true,

  props: {
    include: patternTypes,
    exclude: patternTypes
  },

  created: function created () {
    this.cache = Object.create(null);
  },

  destroyed: function destroyed () {
    var this$1 = this;

    for (var key in this$1.cache) {
      pruneCacheEntry(this$1.cache[key]);
    }
  },

  watch: {
    include: function include (val) {
      pruneCache(this.cache, function (name) { return matches(val, name); });
    },
    exclude: function exclude (val) {
      pruneCache(this.cache, function (name) { return !matches(val, name); });
    }
  },

  render: function render () {
    var vnode = getFirstComponentChild(this.$slots.default);
    var componentOptions = vnode && vnode.componentOptions;
    if (componentOptions) {
      // check pattern
      var name = getComponentName(componentOptions);
      if (name && (
        (this.include && !matches(this.include, name)) ||
        (this.exclude && matches(this.exclude, name))
      )) {
        return vnode
      }
      var key = vnode.key == null
        // same constructor may get registered as different local components
        // so cid alone is not enough (#3269)
        ? componentOptions.Ctor.cid + (componentOptions.tag ? ("::" + (componentOptions.tag)) : '')
        : vnode.key;
      if (this.cache[key]) {
        vnode.componentInstance = this.cache[key].componentInstance;
      } else {
        this.cache[key] = vnode;
      }
      vnode.data.keepAlive = true;
    }
    return vnode
  }
};

var builtInComponents = {
  KeepAlive: KeepAlive
};

/*  */

function initGlobalAPI (Vue) {
  // config
  var configDef = {};
  configDef.get = function () { return config; };
  if (process.env.NODE_ENV !== 'production') {
    configDef.set = function () {
      warn(
        'Do not replace the Vue.config object, set individual fields instead.'
      );
    };
  }
  Object.defineProperty(Vue, 'config', configDef);

  // exposed util methods.
  // NOTE: these are not considered part of the public API - avoid relying on
  // them unless you are aware of the risk.
  Vue.util = {
    warn: warn,
    extend: extend,
    mergeOptions: mergeOptions,
    defineReactive: defineReactive$$1
  };

  Vue.set = set;
  Vue.delete = del;
  Vue.nextTick = nextTick;

  Vue.options = Object.create(null);
  config._assetTypes.forEach(function (type) {
    Vue.options[type + 's'] = Object.create(null);
  });

  // this is used to identify the "base" constructor to extend all plain-object
  // components with in Weex's multi-instance scenarios.
  Vue.options._base = Vue;

  extend(Vue.options.components, builtInComponents);

  initUse(Vue);
  initMixin$1(Vue);
  initExtend(Vue);
  initAssetRegisters(Vue);
}

initGlobalAPI(Vue$2);

Object.defineProperty(Vue$2.prototype, '$isServer', {
  get: isServerRendering
});

Vue$2.version = '2.2.5';

/*  */

// attributes that should be using props for binding
var acceptValue = makeMap('input,textarea,option,select');
var mustUseProp = function (tag, type, attr) {
  return (
    (attr === 'value' && acceptValue(tag)) && type !== 'button' ||
    (attr === 'selected' && tag === 'option') ||
    (attr === 'checked' && tag === 'input') ||
    (attr === 'muted' && tag === 'video')
  )
};

var isEnumeratedAttr = makeMap('contenteditable,draggable,spellcheck');

var isBooleanAttr = makeMap(
  'allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,' +
  'default,defaultchecked,defaultmuted,defaultselected,defer,disabled,' +
  'enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,' +
  'muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,' +
  'required,reversed,scoped,seamless,selected,sortable,translate,' +
  'truespeed,typemustmatch,visible'
);

var xlinkNS = 'http://www.w3.org/1999/xlink';

var isXlink = function (name) {
  return name.charAt(5) === ':' && name.slice(0, 5) === 'xlink'
};

var getXlinkProp = function (name) {
  return isXlink(name) ? name.slice(6, name.length) : ''
};

var isFalsyAttrValue = function (val) {
  return val == null || val === false
};

/*  */

function genClassForVnode (vnode) {
  var data = vnode.data;
  var parentNode = vnode;
  var childNode = vnode;
  while (childNode.componentInstance) {
    childNode = childNode.componentInstance._vnode;
    if (childNode.data) {
      data = mergeClassData(childNode.data, data);
    }
  }
  while ((parentNode = parentNode.parent)) {
    if (parentNode.data) {
      data = mergeClassData(data, parentNode.data);
    }
  }
  return genClassFromData(data)
}

function mergeClassData (child, parent) {
  return {
    staticClass: concat(child.staticClass, parent.staticClass),
    class: child.class
      ? [child.class, parent.class]
      : parent.class
  }
}

function genClassFromData (data) {
  var dynamicClass = data.class;
  var staticClass = data.staticClass;
  if (staticClass || dynamicClass) {
    return concat(staticClass, stringifyClass(dynamicClass))
  }
  /* istanbul ignore next */
  return ''
}

function concat (a, b) {
  return a ? b ? (a + ' ' + b) : a : (b || '')
}

function stringifyClass (value) {
  var res = '';
  if (!value) {
    return res
  }
  if (typeof value === 'string') {
    return value
  }
  if (Array.isArray(value)) {
    var stringified;
    for (var i = 0, l = value.length; i < l; i++) {
      if (value[i]) {
        if ((stringified = stringifyClass(value[i]))) {
          res += stringified + ' ';
        }
      }
    }
    return res.slice(0, -1)
  }
  if (isObject(value)) {
    for (var key in value) {
      if (value[key]) { res += key + ' '; }
    }
    return res.slice(0, -1)
  }
  /* istanbul ignore next */
  return res
}

/*  */

var namespaceMap = {
  svg: 'http://www.w3.org/2000/svg',
  math: 'http://www.w3.org/1998/Math/MathML'
};

var isHTMLTag = makeMap(
  'html,body,base,head,link,meta,style,title,' +
  'address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,' +
  'div,dd,dl,dt,figcaption,figure,hr,img,li,main,ol,p,pre,ul,' +
  'a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,' +
  's,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,' +
  'embed,object,param,source,canvas,script,noscript,del,ins,' +
  'caption,col,colgroup,table,thead,tbody,td,th,tr,' +
  'button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,' +
  'output,progress,select,textarea,' +
  'details,dialog,menu,menuitem,summary,' +
  'content,element,shadow,template'
);

// this map is intentionally selective, only covering SVG elements that may
// contain child elements.
var isSVG = makeMap(
  'svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,' +
  'foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,' +
  'polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view',
  true
);



var isReservedTag = function (tag) {
  return isHTMLTag(tag) || isSVG(tag)
};

function getTagNamespace (tag) {
  if (isSVG(tag)) {
    return 'svg'
  }
  // basic support for MathML
  // note it doesn't support other MathML elements being component roots
  if (tag === 'math') {
    return 'math'
  }
}

var unknownElementCache = Object.create(null);
function isUnknownElement (tag) {
  /* istanbul ignore if */
  if (!inBrowser) {
    return true
  }
  if (isReservedTag(tag)) {
    return false
  }
  tag = tag.toLowerCase();
  /* istanbul ignore if */
  if (unknownElementCache[tag] != null) {
    return unknownElementCache[tag]
  }
  var el = document.createElement(tag);
  if (tag.indexOf('-') > -1) {
    // http://stackoverflow.com/a/28210364/1070244
    return (unknownElementCache[tag] = (
      el.constructor === window.HTMLUnknownElement ||
      el.constructor === window.HTMLElement
    ))
  } else {
    return (unknownElementCache[tag] = /HTMLUnknownElement/.test(el.toString()))
  }
}

/*  */

/**
 * Query an element selector if it's not an element already.
 */
function query (el) {
  if (typeof el === 'string') {
    var selected = document.querySelector(el);
    if (!selected) {
      process.env.NODE_ENV !== 'production' && warn(
        'Cannot find element: ' + el
      );
      return document.createElement('div')
    }
    return selected
  } else {
    return el
  }
}

/*  */

function createElement$1 (tagName, vnode) {
  var elm = document.createElement(tagName);
  if (tagName !== 'select') {
    return elm
  }
  // false or null will remove the attribute but undefined will not
  if (vnode.data && vnode.data.attrs && vnode.data.attrs.multiple !== undefined) {
    elm.setAttribute('multiple', 'multiple');
  }
  return elm
}

function createElementNS (namespace, tagName) {
  return document.createElementNS(namespaceMap[namespace], tagName)
}

function createTextNode (text) {
  return document.createTextNode(text)
}

function createComment (text) {
  return document.createComment(text)
}

function insertBefore (parentNode, newNode, referenceNode) {
  parentNode.insertBefore(newNode, referenceNode);
}

function removeChild (node, child) {
  node.removeChild(child);
}

function appendChild (node, child) {
  node.appendChild(child);
}

function parentNode (node) {
  return node.parentNode
}

function nextSibling (node) {
  return node.nextSibling
}

function tagName (node) {
  return node.tagName
}

function setTextContent (node, text) {
  node.textContent = text;
}

function setAttribute (node, key, val) {
  node.setAttribute(key, val);
}


var nodeOps = Object.freeze({
	createElement: createElement$1,
	createElementNS: createElementNS,
	createTextNode: createTextNode,
	createComment: createComment,
	insertBefore: insertBefore,
	removeChild: removeChild,
	appendChild: appendChild,
	parentNode: parentNode,
	nextSibling: nextSibling,
	tagName: tagName,
	setTextContent: setTextContent,
	setAttribute: setAttribute
});

/*  */

var ref = {
  create: function create (_, vnode) {
    registerRef(vnode);
  },
  update: function update (oldVnode, vnode) {
    if (oldVnode.data.ref !== vnode.data.ref) {
      registerRef(oldVnode, true);
      registerRef(vnode);
    }
  },
  destroy: function destroy (vnode) {
    registerRef(vnode, true);
  }
};

function registerRef (vnode, isRemoval) {
  var key = vnode.data.ref;
  if (!key) { return }

  var vm = vnode.context;
  var ref = vnode.componentInstance || vnode.elm;
  var refs = vm.$refs;
  if (isRemoval) {
    if (Array.isArray(refs[key])) {
      remove(refs[key], ref);
    } else if (refs[key] === ref) {
      refs[key] = undefined;
    }
  } else {
    if (vnode.data.refInFor) {
      if (Array.isArray(refs[key]) && refs[key].indexOf(ref) < 0) {
        refs[key].push(ref);
      } else {
        refs[key] = [ref];
      }
    } else {
      refs[key] = ref;
    }
  }
}

/**
 * Virtual DOM patching algorithm based on Snabbdom by
 * Simon Friis Vindum (@paldepind)
 * Licensed under the MIT License
 * https://github.com/paldepind/snabbdom/blob/master/LICENSE
 *
 * modified by Evan You (@yyx990803)
 *

/*
 * Not type-checking this because this file is perf-critical and the cost
 * of making flow understand it is not worth it.
 */

var emptyNode = new VNode('', {}, []);

var hooks = ['create', 'activate', 'update', 'remove', 'destroy'];

function isUndef (v) {
  return v === undefined || v === null
}

function isDef (v) {
  return v !== undefined && v !== null
}

function isTrue (v) {
  return v === true
}

function sameVnode (a, b) {
  return (
    a.key === b.key &&
    a.tag === b.tag &&
    a.isComment === b.isComment &&
    isDef(a.data) === isDef(b.data) &&
    sameInputType(a, b)
  )
}

// Some browsers do not support dynamically changing type for <input>
// so they need to be treated as different nodes
function sameInputType (a, b) {
  if (a.tag !== 'input') { return true }
  var i;
  var typeA = isDef(i = a.data) && isDef(i = i.attrs) && i.type;
  var typeB = isDef(i = b.data) && isDef(i = i.attrs) && i.type;
  return typeA === typeB
}

function createKeyToOldIdx (children, beginIdx, endIdx) {
  var i, key;
  var map = {};
  for (i = beginIdx; i <= endIdx; ++i) {
    key = children[i].key;
    if (isDef(key)) { map[key] = i; }
  }
  return map
}

function createPatchFunction (backend) {
  var i, j;
  var cbs = {};

  var modules = backend.modules;
  var nodeOps = backend.nodeOps;

  for (i = 0; i < hooks.length; ++i) {
    cbs[hooks[i]] = [];
    for (j = 0; j < modules.length; ++j) {
      if (isDef(modules[j][hooks[i]])) {
        cbs[hooks[i]].push(modules[j][hooks[i]]);
      }
    }
  }

  function emptyNodeAt (elm) {
    return new VNode(nodeOps.tagName(elm).toLowerCase(), {}, [], undefined, elm)
  }

  function createRmCb (childElm, listeners) {
    function remove$$1 () {
      if (--remove$$1.listeners === 0) {
        removeNode(childElm);
      }
    }
    remove$$1.listeners = listeners;
    return remove$$1
  }

  function removeNode (el) {
    var parent = nodeOps.parentNode(el);
    // element may have already been removed due to v-html / v-text
    if (isDef(parent)) {
      nodeOps.removeChild(parent, el);
    }
  }

  var inPre = 0;
  function createElm (vnode, insertedVnodeQueue, parentElm, refElm, nested) {
    vnode.isRootInsert = !nested; // for transition enter check
    if (createComponent(vnode, insertedVnodeQueue, parentElm, refElm)) {
      return
    }

    var data = vnode.data;
    var children = vnode.children;
    var tag = vnode.tag;
    if (isDef(tag)) {
      if (process.env.NODE_ENV !== 'production') {
        if (data && data.pre) {
          inPre++;
        }
        if (
          !inPre &&
          !vnode.ns &&
          !(config.ignoredElements.length && config.ignoredElements.indexOf(tag) > -1) &&
          config.isUnknownElement(tag)
        ) {
          warn(
            'Unknown custom element: <' + tag + '> - did you ' +
            'register the component correctly? For recursive components, ' +
            'make sure to provide the "name" option.',
            vnode.context
          );
        }
      }
      vnode.elm = vnode.ns
        ? nodeOps.createElementNS(vnode.ns, tag)
        : nodeOps.createElement(tag, vnode);
      setScope(vnode);

      /* istanbul ignore if */
      {
        createChildren(vnode, children, insertedVnodeQueue);
        if (isDef(data)) {
          invokeCreateHooks(vnode, insertedVnodeQueue);
        }
        insert(parentElm, vnode.elm, refElm);
      }

      if (process.env.NODE_ENV !== 'production' && data && data.pre) {
        inPre--;
      }
    } else if (isTrue(vnode.isComment)) {
      vnode.elm = nodeOps.createComment(vnode.text);
      insert(parentElm, vnode.elm, refElm);
    } else {
      vnode.elm = nodeOps.createTextNode(vnode.text);
      insert(parentElm, vnode.elm, refElm);
    }
  }

  function createComponent (vnode, insertedVnodeQueue, parentElm, refElm) {
    var i = vnode.data;
    if (isDef(i)) {
      var isReactivated = isDef(vnode.componentInstance) && i.keepAlive;
      if (isDef(i = i.hook) && isDef(i = i.init)) {
        i(vnode, false /* hydrating */, parentElm, refElm);
      }
      // after calling the init hook, if the vnode is a child component
      // it should've created a child instance and mounted it. the child
      // component also has set the placeholder vnode's elm.
      // in that case we can just return the element and be done.
      if (isDef(vnode.componentInstance)) {
        initComponent(vnode, insertedVnodeQueue);
        if (isTrue(isReactivated)) {
          reactivateComponent(vnode, insertedVnodeQueue, parentElm, refElm);
        }
        return true
      }
    }
  }

  function initComponent (vnode, insertedVnodeQueue) {
    if (isDef(vnode.data.pendingInsert)) {
      insertedVnodeQueue.push.apply(insertedVnodeQueue, vnode.data.pendingInsert);
    }
    vnode.elm = vnode.componentInstance.$el;
    if (isPatchable(vnode)) {
      invokeCreateHooks(vnode, insertedVnodeQueue);
      setScope(vnode);
    } else {
      // empty component root.
      // skip all element-related modules except for ref (#3455)
      registerRef(vnode);
      // make sure to invoke the insert hook
      insertedVnodeQueue.push(vnode);
    }
  }

  function reactivateComponent (vnode, insertedVnodeQueue, parentElm, refElm) {
    var i;
    // hack for #4339: a reactivated component with inner transition
    // does not trigger because the inner node's created hooks are not called
    // again. It's not ideal to involve module-specific logic in here but
    // there doesn't seem to be a better way to do it.
    var innerNode = vnode;
    while (innerNode.componentInstance) {
      innerNode = innerNode.componentInstance._vnode;
      if (isDef(i = innerNode.data) && isDef(i = i.transition)) {
        for (i = 0; i < cbs.activate.length; ++i) {
          cbs.activate[i](emptyNode, innerNode);
        }
        insertedVnodeQueue.push(innerNode);
        break
      }
    }
    // unlike a newly created component,
    // a reactivated keep-alive component doesn't insert itself
    insert(parentElm, vnode.elm, refElm);
  }

  function insert (parent, elm, ref) {
    if (isDef(parent)) {
      if (isDef(ref)) {
        nodeOps.insertBefore(parent, elm, ref);
      } else {
        nodeOps.appendChild(parent, elm);
      }
    }
  }

  function createChildren (vnode, children, insertedVnodeQueue) {
    if (Array.isArray(children)) {
      for (var i = 0; i < children.length; ++i) {
        createElm(children[i], insertedVnodeQueue, vnode.elm, null, true);
      }
    } else if (isPrimitive(vnode.text)) {
      nodeOps.appendChild(vnode.elm, nodeOps.createTextNode(vnode.text));
    }
  }

  function isPatchable (vnode) {
    while (vnode.componentInstance) {
      vnode = vnode.componentInstance._vnode;
    }
    return isDef(vnode.tag)
  }

  function invokeCreateHooks (vnode, insertedVnodeQueue) {
    for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
      cbs.create[i$1](emptyNode, vnode);
    }
    i = vnode.data.hook; // Reuse variable
    if (isDef(i)) {
      if (isDef(i.create)) { i.create(emptyNode, vnode); }
      if (isDef(i.insert)) { insertedVnodeQueue.push(vnode); }
    }
  }

  // set scope id attribute for scoped CSS.
  // this is implemented as a special case to avoid the overhead
  // of going through the normal attribute patching process.
  function setScope (vnode) {
    var i;
    var ancestor = vnode;
    while (ancestor) {
      if (isDef(i = ancestor.context) && isDef(i = i.$options._scopeId)) {
        nodeOps.setAttribute(vnode.elm, i, '');
      }
      ancestor = ancestor.parent;
    }
    // for slot content they should also get the scopeId from the host instance.
    if (isDef(i = activeInstance) &&
        i !== vnode.context &&
        isDef(i = i.$options._scopeId)) {
      nodeOps.setAttribute(vnode.elm, i, '');
    }
  }

  function addVnodes (parentElm, refElm, vnodes, startIdx, endIdx, insertedVnodeQueue) {
    for (; startIdx <= endIdx; ++startIdx) {
      createElm(vnodes[startIdx], insertedVnodeQueue, parentElm, refElm);
    }
  }

  function invokeDestroyHook (vnode) {
    var i, j;
    var data = vnode.data;
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.destroy)) { i(vnode); }
      for (i = 0; i < cbs.destroy.length; ++i) { cbs.destroy[i](vnode); }
    }
    if (isDef(i = vnode.children)) {
      for (j = 0; j < vnode.children.length; ++j) {
        invokeDestroyHook(vnode.children[j]);
      }
    }
  }

  function removeVnodes (parentElm, vnodes, startIdx, endIdx) {
    for (; startIdx <= endIdx; ++startIdx) {
      var ch = vnodes[startIdx];
      if (isDef(ch)) {
        if (isDef(ch.tag)) {
          removeAndInvokeRemoveHook(ch);
          invokeDestroyHook(ch);
        } else { // Text node
          removeNode(ch.elm);
        }
      }
    }
  }

  function removeAndInvokeRemoveHook (vnode, rm) {
    if (isDef(rm) || isDef(vnode.data)) {
      var listeners = cbs.remove.length + 1;
      if (isDef(rm)) {
        // we have a recursively passed down rm callback
        // increase the listeners count
        rm.listeners += listeners;
      } else {
        // directly removing
        rm = createRmCb(vnode.elm, listeners);
      }
      // recursively invoke hooks on child component root node
      if (isDef(i = vnode.componentInstance) && isDef(i = i._vnode) && isDef(i.data)) {
        removeAndInvokeRemoveHook(i, rm);
      }
      for (i = 0; i < cbs.remove.length; ++i) {
        cbs.remove[i](vnode, rm);
      }
      if (isDef(i = vnode.data.hook) && isDef(i = i.remove)) {
        i(vnode, rm);
      } else {
        rm();
      }
    } else {
      removeNode(vnode.elm);
    }
  }

  function updateChildren (parentElm, oldCh, newCh, insertedVnodeQueue, removeOnly) {
    var oldStartIdx = 0;
    var newStartIdx = 0;
    var oldEndIdx = oldCh.length - 1;
    var oldStartVnode = oldCh[0];
    var oldEndVnode = oldCh[oldEndIdx];
    var newEndIdx = newCh.length - 1;
    var newStartVnode = newCh[0];
    var newEndVnode = newCh[newEndIdx];
    var oldKeyToIdx, idxInOld, elmToMove, refElm;

    // removeOnly is a special flag used only by <transition-group>
    // to ensure removed elements stay in correct relative positions
    // during leaving transitions
    var canMove = !removeOnly;

    while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
      if (isUndef(oldStartVnode)) {
        oldStartVnode = oldCh[++oldStartIdx]; // Vnode has been moved left
      } else if (isUndef(oldEndVnode)) {
        oldEndVnode = oldCh[--oldEndIdx];
      } else if (sameVnode(oldStartVnode, newStartVnode)) {
        patchVnode(oldStartVnode, newStartVnode, insertedVnodeQueue);
        oldStartVnode = oldCh[++oldStartIdx];
        newStartVnode = newCh[++newStartIdx];
      } else if (sameVnode(oldEndVnode, newEndVnode)) {
        patchVnode(oldEndVnode, newEndVnode, insertedVnodeQueue);
        oldEndVnode = oldCh[--oldEndIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldStartVnode, newEndVnode)) { // Vnode moved right
        patchVnode(oldStartVnode, newEndVnode, insertedVnodeQueue);
        canMove && nodeOps.insertBefore(parentElm, oldStartVnode.elm, nodeOps.nextSibling(oldEndVnode.elm));
        oldStartVnode = oldCh[++oldStartIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldEndVnode, newStartVnode)) { // Vnode moved left
        patchVnode(oldEndVnode, newStartVnode, insertedVnodeQueue);
        canMove && nodeOps.insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm);
        oldEndVnode = oldCh[--oldEndIdx];
        newStartVnode = newCh[++newStartIdx];
      } else {
        if (isUndef(oldKeyToIdx)) { oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx); }
        idxInOld = isDef(newStartVnode.key) ? oldKeyToIdx[newStartVnode.key] : null;
        if (isUndef(idxInOld)) { // New element
          createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm);
          newStartVnode = newCh[++newStartIdx];
        } else {
          elmToMove = oldCh[idxInOld];
          /* istanbul ignore if */
          if (process.env.NODE_ENV !== 'production' && !elmToMove) {
            warn(
              'It seems there are duplicate keys that is causing an update error. ' +
              'Make sure each v-for item has a unique key.'
            );
          }
          if (sameVnode(elmToMove, newStartVnode)) {
            patchVnode(elmToMove, newStartVnode, insertedVnodeQueue);
            oldCh[idxInOld] = undefined;
            canMove && nodeOps.insertBefore(parentElm, newStartVnode.elm, oldStartVnode.elm);
            newStartVnode = newCh[++newStartIdx];
          } else {
            // same key but different element. treat as new element
            createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm);
            newStartVnode = newCh[++newStartIdx];
          }
        }
      }
    }
    if (oldStartIdx > oldEndIdx) {
      refElm = isUndef(newCh[newEndIdx + 1]) ? null : newCh[newEndIdx + 1].elm;
      addVnodes(parentElm, refElm, newCh, newStartIdx, newEndIdx, insertedVnodeQueue);
    } else if (newStartIdx > newEndIdx) {
      removeVnodes(parentElm, oldCh, oldStartIdx, oldEndIdx);
    }
  }

  function patchVnode (oldVnode, vnode, insertedVnodeQueue, removeOnly) {
    if (oldVnode === vnode) {
      return
    }
    // reuse element for static trees.
    // note we only do this if the vnode is cloned -
    // if the new node is not cloned it means the render functions have been
    // reset by the hot-reload-api and we need to do a proper re-render.
    if (isTrue(vnode.isStatic) &&
        isTrue(oldVnode.isStatic) &&
        vnode.key === oldVnode.key &&
        (isTrue(vnode.isCloned) || isTrue(vnode.isOnce))) {
      vnode.elm = oldVnode.elm;
      vnode.componentInstance = oldVnode.componentInstance;
      return
    }
    var i;
    var data = vnode.data;
    if (isDef(data) && isDef(i = data.hook) && isDef(i = i.prepatch)) {
      i(oldVnode, vnode);
    }
    var elm = vnode.elm = oldVnode.elm;
    var oldCh = oldVnode.children;
    var ch = vnode.children;
    if (isDef(data) && isPatchable(vnode)) {
      for (i = 0; i < cbs.update.length; ++i) { cbs.update[i](oldVnode, vnode); }
      if (isDef(i = data.hook) && isDef(i = i.update)) { i(oldVnode, vnode); }
    }
    if (isUndef(vnode.text)) {
      if (isDef(oldCh) && isDef(ch)) {
        if (oldCh !== ch) { updateChildren(elm, oldCh, ch, insertedVnodeQueue, removeOnly); }
      } else if (isDef(ch)) {
        if (isDef(oldVnode.text)) { nodeOps.setTextContent(elm, ''); }
        addVnodes(elm, null, ch, 0, ch.length - 1, insertedVnodeQueue);
      } else if (isDef(oldCh)) {
        removeVnodes(elm, oldCh, 0, oldCh.length - 1);
      } else if (isDef(oldVnode.text)) {
        nodeOps.setTextContent(elm, '');
      }
    } else if (oldVnode.text !== vnode.text) {
      nodeOps.setTextContent(elm, vnode.text);
    }
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.postpatch)) { i(oldVnode, vnode); }
    }
  }

  function invokeInsertHook (vnode, queue, initial) {
    // delay insert hooks for component root nodes, invoke them after the
    // element is really inserted
    if (isTrue(initial) && isDef(vnode.parent)) {
      vnode.parent.data.pendingInsert = queue;
    } else {
      for (var i = 0; i < queue.length; ++i) {
        queue[i].data.hook.insert(queue[i]);
      }
    }
  }

  var bailed = false;
  // list of modules that can skip create hook during hydration because they
  // are already rendered on the client or has no need for initialization
  var isRenderedModule = makeMap('attrs,style,class,staticClass,staticStyle,key');

  // Note: this is a browser-only function so we can assume elms are DOM nodes.
  function hydrate (elm, vnode, insertedVnodeQueue) {
    if (process.env.NODE_ENV !== 'production') {
      if (!assertNodeMatch(elm, vnode)) {
        return false
      }
    }
    vnode.elm = elm;
    var tag = vnode.tag;
    var data = vnode.data;
    var children = vnode.children;
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.init)) { i(vnode, true /* hydrating */); }
      if (isDef(i = vnode.componentInstance)) {
        // child component. it should have hydrated its own tree.
        initComponent(vnode, insertedVnodeQueue);
        return true
      }
    }
    if (isDef(tag)) {
      if (isDef(children)) {
        // empty element, allow client to pick up and populate children
        if (!elm.hasChildNodes()) {
          createChildren(vnode, children, insertedVnodeQueue);
        } else {
          var childrenMatch = true;
          var childNode = elm.firstChild;
          for (var i$1 = 0; i$1 < children.length; i$1++) {
            if (!childNode || !hydrate(childNode, children[i$1], insertedVnodeQueue)) {
              childrenMatch = false;
              break
            }
            childNode = childNode.nextSibling;
          }
          // if childNode is not null, it means the actual childNodes list is
          // longer than the virtual children list.
          if (!childrenMatch || childNode) {
            if (process.env.NODE_ENV !== 'production' &&
                typeof console !== 'undefined' &&
                !bailed) {
              bailed = true;
              console.warn('Parent: ', elm);
              console.warn('Mismatching childNodes vs. VNodes: ', elm.childNodes, children);
            }
            return false
          }
        }
      }
      if (isDef(data)) {
        for (var key in data) {
          if (!isRenderedModule(key)) {
            invokeCreateHooks(vnode, insertedVnodeQueue);
            break
          }
        }
      }
    } else if (elm.data !== vnode.text) {
      elm.data = vnode.text;
    }
    return true
  }

  function assertNodeMatch (node, vnode) {
    if (isDef(vnode.tag)) {
      return (
        vnode.tag.indexOf('vue-component') === 0 ||
        vnode.tag.toLowerCase() === (node.tagName && node.tagName.toLowerCase())
      )
    } else {
      return node.nodeType === (vnode.isComment ? 8 : 3)
    }
  }

  return function patch (oldVnode, vnode, hydrating, removeOnly, parentElm, refElm) {
    if (isUndef(vnode)) {
      if (isDef(oldVnode)) { invokeDestroyHook(oldVnode); }
      return
    }

    var isInitialPatch = false;
    var insertedVnodeQueue = [];

    if (isUndef(oldVnode)) {
      // empty mount (likely as component), create new root element
      isInitialPatch = true;
      createElm(vnode, insertedVnodeQueue, parentElm, refElm);
    } else {
      var isRealElement = isDef(oldVnode.nodeType);
      if (!isRealElement && sameVnode(oldVnode, vnode)) {
        // patch existing root node
        patchVnode(oldVnode, vnode, insertedVnodeQueue, removeOnly);
      } else {
        if (isRealElement) {
          // mounting to a real element
          // check if this is server-rendered content and if we can perform
          // a successful hydration.
          if (oldVnode.nodeType === 1 && oldVnode.hasAttribute('server-rendered')) {
            oldVnode.removeAttribute('server-rendered');
            hydrating = true;
          }
          if (isTrue(hydrating)) {
            if (hydrate(oldVnode, vnode, insertedVnodeQueue)) {
              invokeInsertHook(vnode, insertedVnodeQueue, true);
              return oldVnode
            } else if (process.env.NODE_ENV !== 'production') {
              warn(
                'The client-side rendered virtual DOM tree is not matching ' +
                'server-rendered content. This is likely caused by incorrect ' +
                'HTML markup, for example nesting block-level elements inside ' +
                '<p>, or missing <tbody>. Bailing hydration and performing ' +
                'full client-side render.'
              );
            }
          }
          // either not server-rendered, or hydration failed.
          // create an empty node and replace it
          oldVnode = emptyNodeAt(oldVnode);
        }
        // replacing existing element
        var oldElm = oldVnode.elm;
        var parentElm$1 = nodeOps.parentNode(oldElm);
        createElm(
          vnode,
          insertedVnodeQueue,
          // extremely rare edge case: do not insert if old element is in a
          // leaving transition. Only happens when combining transition +
          // keep-alive + HOCs. (#4590)
          oldElm._leaveCb ? null : parentElm$1,
          nodeOps.nextSibling(oldElm)
        );

        if (isDef(vnode.parent)) {
          // component root element replaced.
          // update parent placeholder node element, recursively
          var ancestor = vnode.parent;
          while (ancestor) {
            ancestor.elm = vnode.elm;
            ancestor = ancestor.parent;
          }
          if (isPatchable(vnode)) {
            for (var i = 0; i < cbs.create.length; ++i) {
              cbs.create[i](emptyNode, vnode.parent);
            }
          }
        }

        if (isDef(parentElm$1)) {
          removeVnodes(parentElm$1, [oldVnode], 0, 0);
        } else if (isDef(oldVnode.tag)) {
          invokeDestroyHook(oldVnode);
        }
      }
    }

    invokeInsertHook(vnode, insertedVnodeQueue, isInitialPatch);
    return vnode.elm
  }
}

/*  */

var directives = {
  create: updateDirectives,
  update: updateDirectives,
  destroy: function unbindDirectives (vnode) {
    updateDirectives(vnode, emptyNode);
  }
};

function updateDirectives (oldVnode, vnode) {
  if (oldVnode.data.directives || vnode.data.directives) {
    _update(oldVnode, vnode);
  }
}

function _update (oldVnode, vnode) {
  var isCreate = oldVnode === emptyNode;
  var isDestroy = vnode === emptyNode;
  var oldDirs = normalizeDirectives$1(oldVnode.data.directives, oldVnode.context);
  var newDirs = normalizeDirectives$1(vnode.data.directives, vnode.context);

  var dirsWithInsert = [];
  var dirsWithPostpatch = [];

  var key, oldDir, dir;
  for (key in newDirs) {
    oldDir = oldDirs[key];
    dir = newDirs[key];
    if (!oldDir) {
      // new directive, bind
      callHook$1(dir, 'bind', vnode, oldVnode);
      if (dir.def && dir.def.inserted) {
        dirsWithInsert.push(dir);
      }
    } else {
      // existing directive, update
      dir.oldValue = oldDir.value;
      callHook$1(dir, 'update', vnode, oldVnode);
      if (dir.def && dir.def.componentUpdated) {
        dirsWithPostpatch.push(dir);
      }
    }
  }

  if (dirsWithInsert.length) {
    var callInsert = function () {
      for (var i = 0; i < dirsWithInsert.length; i++) {
        callHook$1(dirsWithInsert[i], 'inserted', vnode, oldVnode);
      }
    };
    if (isCreate) {
      mergeVNodeHook(vnode.data.hook || (vnode.data.hook = {}), 'insert', callInsert);
    } else {
      callInsert();
    }
  }

  if (dirsWithPostpatch.length) {
    mergeVNodeHook(vnode.data.hook || (vnode.data.hook = {}), 'postpatch', function () {
      for (var i = 0; i < dirsWithPostpatch.length; i++) {
        callHook$1(dirsWithPostpatch[i], 'componentUpdated', vnode, oldVnode);
      }
    });
  }

  if (!isCreate) {
    for (key in oldDirs) {
      if (!newDirs[key]) {
        // no longer present, unbind
        callHook$1(oldDirs[key], 'unbind', oldVnode, oldVnode, isDestroy);
      }
    }
  }
}

var emptyModifiers = Object.create(null);

function normalizeDirectives$1 (
  dirs,
  vm
) {
  var res = Object.create(null);
  if (!dirs) {
    return res
  }
  var i, dir;
  for (i = 0; i < dirs.length; i++) {
    dir = dirs[i];
    if (!dir.modifiers) {
      dir.modifiers = emptyModifiers;
    }
    res[getRawDirName(dir)] = dir;
    dir.def = resolveAsset(vm.$options, 'directives', dir.name, true);
  }
  return res
}

function getRawDirName (dir) {
  return dir.rawName || ((dir.name) + "." + (Object.keys(dir.modifiers || {}).join('.')))
}

function callHook$1 (dir, hook, vnode, oldVnode, isDestroy) {
  var fn = dir.def && dir.def[hook];
  if (fn) {
    fn(vnode.elm, dir, vnode, oldVnode, isDestroy);
  }
}

var baseModules = [
  ref,
  directives
];

/*  */

function updateAttrs (oldVnode, vnode) {
  if (!oldVnode.data.attrs && !vnode.data.attrs) {
    return
  }
  var key, cur, old;
  var elm = vnode.elm;
  var oldAttrs = oldVnode.data.attrs || {};
  var attrs = vnode.data.attrs || {};
  // clone observed objects, as the user probably wants to mutate it
  if (attrs.__ob__) {
    attrs = vnode.data.attrs = extend({}, attrs);
  }

  for (key in attrs) {
    cur = attrs[key];
    old = oldAttrs[key];
    if (old !== cur) {
      setAttr(elm, key, cur);
    }
  }
  // #4391: in IE9, setting type can reset value for input[type=radio]
  /* istanbul ignore if */
  if (isIE9 && attrs.value !== oldAttrs.value) {
    setAttr(elm, 'value', attrs.value);
  }
  for (key in oldAttrs) {
    if (attrs[key] == null) {
      if (isXlink(key)) {
        elm.removeAttributeNS(xlinkNS, getXlinkProp(key));
      } else if (!isEnumeratedAttr(key)) {
        elm.removeAttribute(key);
      }
    }
  }
}

function setAttr (el, key, value) {
  if (isBooleanAttr(key)) {
    // set attribute for blank value
    // e.g. <option disabled>Select one</option>
    if (isFalsyAttrValue(value)) {
      el.removeAttribute(key);
    } else {
      el.setAttribute(key, key);
    }
  } else if (isEnumeratedAttr(key)) {
    el.setAttribute(key, isFalsyAttrValue(value) || value === 'false' ? 'false' : 'true');
  } else if (isXlink(key)) {
    if (isFalsyAttrValue(value)) {
      el.removeAttributeNS(xlinkNS, getXlinkProp(key));
    } else {
      el.setAttributeNS(xlinkNS, key, value);
    }
  } else {
    if (isFalsyAttrValue(value)) {
      el.removeAttribute(key);
    } else {
      el.setAttribute(key, value);
    }
  }
}

var attrs = {
  create: updateAttrs,
  update: updateAttrs
};

/*  */

function updateClass (oldVnode, vnode) {
  var el = vnode.elm;
  var data = vnode.data;
  var oldData = oldVnode.data;
  if (!data.staticClass && !data.class &&
      (!oldData || (!oldData.staticClass && !oldData.class))) {
    return
  }

  var cls = genClassForVnode(vnode);

  // handle transition classes
  var transitionClass = el._transitionClasses;
  if (transitionClass) {
    cls = concat(cls, stringifyClass(transitionClass));
  }

  // set the class
  if (cls !== el._prevClass) {
    el.setAttribute('class', cls);
    el._prevClass = cls;
  }
}

var klass = {
  create: updateClass,
  update: updateClass
};

/*  */

var validDivisionCharRE = /[\w).+\-_$\]]/;



function wrapFilter (exp, filter) {
  var i = filter.indexOf('(');
  if (i < 0) {
    // _f: resolveFilter
    return ("_f(\"" + filter + "\")(" + exp + ")")
  } else {
    var name = filter.slice(0, i);
    var args = filter.slice(i + 1);
    return ("_f(\"" + name + "\")(" + exp + "," + args)
  }
}

/*  */

/*  */

/**
 * Cross-platform code generation for component v-model
 */


/**
 * Cross-platform codegen helper for generating v-model value assignment code.
 */


/**
 * parse directive model to do the array update transform. a[idx] = val => $$a.splice($$idx, 1, val)
 *
 * for loop possible cases:
 *
 * - test
 * - test[idx]
 * - test[test1[idx]]
 * - test["a"][idx]
 * - xxx.test[a[a].test1[idx]]
 * - test.xxx.a["asa"][test1[idx]]
 *
 */

var str;
var index$1;

/*  */

// in some cases, the event used has to be determined at runtime
// so we used some reserved tokens during compile.
var RANGE_TOKEN = '__r';
var CHECKBOX_RADIO_TOKEN = '__c';

/*  */

// normalize v-model event tokens that can only be determined at runtime.
// it's important to place the event as the first in the array because
// the whole point is ensuring the v-model callback gets called before
// user-attached handlers.
function normalizeEvents (on) {
  var event;
  /* istanbul ignore if */
  if (on[RANGE_TOKEN]) {
    // IE input[type=range] only supports `change` event
    event = isIE ? 'change' : 'input';
    on[event] = [].concat(on[RANGE_TOKEN], on[event] || []);
    delete on[RANGE_TOKEN];
  }
  if (on[CHECKBOX_RADIO_TOKEN]) {
    // Chrome fires microtasks in between click/change, leads to #4521
    event = isChrome ? 'click' : 'change';
    on[event] = [].concat(on[CHECKBOX_RADIO_TOKEN], on[event] || []);
    delete on[CHECKBOX_RADIO_TOKEN];
  }
}

var target$1;

function add$1 (
  event,
  handler,
  once,
  capture
) {
  if (once) {
    var oldHandler = handler;
    var _target = target$1; // save current target element in closure
    handler = function (ev) {
      var res = arguments.length === 1
        ? oldHandler(ev)
        : oldHandler.apply(null, arguments);
      if (res !== null) {
        remove$2(event, handler, capture, _target);
      }
    };
  }
  target$1.addEventListener(event, handler, capture);
}

function remove$2 (
  event,
  handler,
  capture,
  _target
) {
  (_target || target$1).removeEventListener(event, handler, capture);
}

function updateDOMListeners (oldVnode, vnode) {
  if (!oldVnode.data.on && !vnode.data.on) {
    return
  }
  var on = vnode.data.on || {};
  var oldOn = oldVnode.data.on || {};
  target$1 = vnode.elm;
  normalizeEvents(on);
  updateListeners(on, oldOn, add$1, remove$2, vnode.context);
}

var events = {
  create: updateDOMListeners,
  update: updateDOMListeners
};

/*  */

function updateDOMProps (oldVnode, vnode) {
  if (!oldVnode.data.domProps && !vnode.data.domProps) {
    return
  }
  var key, cur;
  var elm = vnode.elm;
  var oldProps = oldVnode.data.domProps || {};
  var props = vnode.data.domProps || {};
  // clone observed objects, as the user probably wants to mutate it
  if (props.__ob__) {
    props = vnode.data.domProps = extend({}, props);
  }

  for (key in oldProps) {
    if (props[key] == null) {
      elm[key] = '';
    }
  }
  for (key in props) {
    cur = props[key];
    // ignore children if the node has textContent or innerHTML,
    // as these will throw away existing DOM nodes and cause removal errors
    // on subsequent patches (#3360)
    if (key === 'textContent' || key === 'innerHTML') {
      if (vnode.children) { vnode.children.length = 0; }
      if (cur === oldProps[key]) { continue }
    }

    if (key === 'value') {
      // store value as _value as well since
      // non-string values will be stringified
      elm._value = cur;
      // avoid resetting cursor position when value is the same
      var strCur = cur == null ? '' : String(cur);
      if (shouldUpdateValue(elm, vnode, strCur)) {
        elm.value = strCur;
      }
    } else {
      elm[key] = cur;
    }
  }
}

// check platforms/web/util/attrs.js acceptValue


function shouldUpdateValue (
  elm,
  vnode,
  checkVal
) {
  return (!elm.composing && (
    vnode.tag === 'option' ||
    isDirty(elm, checkVal) ||
    isInputChanged(elm, checkVal)
  ))
}

function isDirty (elm, checkVal) {
  // return true when textbox (.number and .trim) loses focus and its value is not equal to the updated value
  return document.activeElement !== elm && elm.value !== checkVal
}

function isInputChanged (elm, newVal) {
  var value = elm.value;
  var modifiers = elm._vModifiers; // injected by v-model runtime
  if ((modifiers && modifiers.number) || elm.type === 'number') {
    return toNumber(value) !== toNumber(newVal)
  }
  if (modifiers && modifiers.trim) {
    return value.trim() !== newVal.trim()
  }
  return value !== newVal
}

var domProps = {
  create: updateDOMProps,
  update: updateDOMProps
};

/*  */

var parseStyleText = cached(function (cssText) {
  var res = {};
  var listDelimiter = /;(?![^(]*\))/g;
  var propertyDelimiter = /:(.+)/;
  cssText.split(listDelimiter).forEach(function (item) {
    if (item) {
      var tmp = item.split(propertyDelimiter);
      tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return res
});

// merge static and dynamic style data on the same vnode
function normalizeStyleData (data) {
  var style = normalizeStyleBinding(data.style);
  // static style is pre-processed into an object during compilation
  // and is always a fresh object, so it's safe to merge into it
  return data.staticStyle
    ? extend(data.staticStyle, style)
    : style
}

// normalize possible array / string values into Object
function normalizeStyleBinding (bindingStyle) {
  if (Array.isArray(bindingStyle)) {
    return toObject(bindingStyle)
  }
  if (typeof bindingStyle === 'string') {
    return parseStyleText(bindingStyle)
  }
  return bindingStyle
}

/**
 * parent component style should be after child's
 * so that parent component's style could override it
 */
function getStyle (vnode, checkChild) {
  var res = {};
  var styleData;

  if (checkChild) {
    var childNode = vnode;
    while (childNode.componentInstance) {
      childNode = childNode.componentInstance._vnode;
      if (childNode.data && (styleData = normalizeStyleData(childNode.data))) {
        extend(res, styleData);
      }
    }
  }

  if ((styleData = normalizeStyleData(vnode.data))) {
    extend(res, styleData);
  }

  var parentNode = vnode;
  while ((parentNode = parentNode.parent)) {
    if (parentNode.data && (styleData = normalizeStyleData(parentNode.data))) {
      extend(res, styleData);
    }
  }
  return res
}

/*  */

var cssVarRE = /^--/;
var importantRE = /\s*!important$/;
var setProp = function (el, name, val) {
  /* istanbul ignore if */
  if (cssVarRE.test(name)) {
    el.style.setProperty(name, val);
  } else if (importantRE.test(val)) {
    el.style.setProperty(name, val.replace(importantRE, ''), 'important');
  } else {
    el.style[normalize(name)] = val;
  }
};

var prefixes = ['Webkit', 'Moz', 'ms'];

var testEl;
var normalize = cached(function (prop) {
  testEl = testEl || document.createElement('div');
  prop = camelize(prop);
  if (prop !== 'filter' && (prop in testEl.style)) {
    return prop
  }
  var upper = prop.charAt(0).toUpperCase() + prop.slice(1);
  for (var i = 0; i < prefixes.length; i++) {
    var prefixed = prefixes[i] + upper;
    if (prefixed in testEl.style) {
      return prefixed
    }
  }
});

function updateStyle (oldVnode, vnode) {
  var data = vnode.data;
  var oldData = oldVnode.data;

  if (!data.staticStyle && !data.style &&
      !oldData.staticStyle && !oldData.style) {
    return
  }

  var cur, name;
  var el = vnode.elm;
  var oldStaticStyle = oldVnode.data.staticStyle;
  var oldStyleBinding = oldVnode.data.style || {};

  // if static style exists, stylebinding already merged into it when doing normalizeStyleData
  var oldStyle = oldStaticStyle || oldStyleBinding;

  var style = normalizeStyleBinding(vnode.data.style) || {};

  vnode.data.style = style.__ob__ ? extend({}, style) : style;

  var newStyle = getStyle(vnode, true);

  for (name in oldStyle) {
    if (newStyle[name] == null) {
      setProp(el, name, '');
    }
  }
  for (name in newStyle) {
    cur = newStyle[name];
    if (cur !== oldStyle[name]) {
      // ie9 setting to null has no effect, must use empty string
      setProp(el, name, cur == null ? '' : cur);
    }
  }
}

var style = {
  create: updateStyle,
  update: updateStyle
};

/*  */

/**
 * Add class with compatibility for SVG since classList is not supported on
 * SVG elements in IE
 */
function addClass (el, cls) {
  /* istanbul ignore if */
  if (!cls || !(cls = cls.trim())) {
    return
  }

  /* istanbul ignore else */
  if (el.classList) {
    if (cls.indexOf(' ') > -1) {
      cls.split(/\s+/).forEach(function (c) { return el.classList.add(c); });
    } else {
      el.classList.add(cls);
    }
  } else {
    var cur = " " + (el.getAttribute('class') || '') + " ";
    if (cur.indexOf(' ' + cls + ' ') < 0) {
      el.setAttribute('class', (cur + cls).trim());
    }
  }
}

/**
 * Remove class with compatibility for SVG since classList is not supported on
 * SVG elements in IE
 */
function removeClass (el, cls) {
  /* istanbul ignore if */
  if (!cls || !(cls = cls.trim())) {
    return
  }

  /* istanbul ignore else */
  if (el.classList) {
    if (cls.indexOf(' ') > -1) {
      cls.split(/\s+/).forEach(function (c) { return el.classList.remove(c); });
    } else {
      el.classList.remove(cls);
    }
  } else {
    var cur = " " + (el.getAttribute('class') || '') + " ";
    var tar = ' ' + cls + ' ';
    while (cur.indexOf(tar) >= 0) {
      cur = cur.replace(tar, ' ');
    }
    el.setAttribute('class', cur.trim());
  }
}

/*  */

function resolveTransition (def$$1) {
  if (!def$$1) {
    return
  }
  /* istanbul ignore else */
  if (typeof def$$1 === 'object') {
    var res = {};
    if (def$$1.css !== false) {
      extend(res, autoCssTransition(def$$1.name || 'v'));
    }
    extend(res, def$$1);
    return res
  } else if (typeof def$$1 === 'string') {
    return autoCssTransition(def$$1)
  }
}

var autoCssTransition = cached(function (name) {
  return {
    enterClass: (name + "-enter"),
    enterToClass: (name + "-enter-to"),
    enterActiveClass: (name + "-enter-active"),
    leaveClass: (name + "-leave"),
    leaveToClass: (name + "-leave-to"),
    leaveActiveClass: (name + "-leave-active")
  }
});

var hasTransition = inBrowser && !isIE9;
var TRANSITION = 'transition';
var ANIMATION = 'animation';

// Transition property/event sniffing
var transitionProp = 'transition';
var transitionEndEvent = 'transitionend';
var animationProp = 'animation';
var animationEndEvent = 'animationend';
if (hasTransition) {
  /* istanbul ignore if */
  if (window.ontransitionend === undefined &&
    window.onwebkittransitionend !== undefined) {
    transitionProp = 'WebkitTransition';
    transitionEndEvent = 'webkitTransitionEnd';
  }
  if (window.onanimationend === undefined &&
    window.onwebkitanimationend !== undefined) {
    animationProp = 'WebkitAnimation';
    animationEndEvent = 'webkitAnimationEnd';
  }
}

// binding to window is necessary to make hot reload work in IE in strict mode
var raf = inBrowser && window.requestAnimationFrame
  ? window.requestAnimationFrame.bind(window)
  : setTimeout;

function nextFrame (fn) {
  raf(function () {
    raf(fn);
  });
}

function addTransitionClass (el, cls) {
  (el._transitionClasses || (el._transitionClasses = [])).push(cls);
  addClass(el, cls);
}

function removeTransitionClass (el, cls) {
  if (el._transitionClasses) {
    remove(el._transitionClasses, cls);
  }
  removeClass(el, cls);
}

function whenTransitionEnds (
  el,
  expectedType,
  cb
) {
  var ref = getTransitionInfo(el, expectedType);
  var type = ref.type;
  var timeout = ref.timeout;
  var propCount = ref.propCount;
  if (!type) { return cb() }
  var event = type === TRANSITION ? transitionEndEvent : animationEndEvent;
  var ended = 0;
  var end = function () {
    el.removeEventListener(event, onEnd);
    cb();
  };
  var onEnd = function (e) {
    if (e.target === el) {
      if (++ended >= propCount) {
        end();
      }
    }
  };
  setTimeout(function () {
    if (ended < propCount) {
      end();
    }
  }, timeout + 1);
  el.addEventListener(event, onEnd);
}

var transformRE = /\b(transform|all)(,|$)/;

function getTransitionInfo (el, expectedType) {
  var styles = window.getComputedStyle(el);
  var transitionDelays = styles[transitionProp + 'Delay'].split(', ');
  var transitionDurations = styles[transitionProp + 'Duration'].split(', ');
  var transitionTimeout = getTimeout(transitionDelays, transitionDurations);
  var animationDelays = styles[animationProp + 'Delay'].split(', ');
  var animationDurations = styles[animationProp + 'Duration'].split(', ');
  var animationTimeout = getTimeout(animationDelays, animationDurations);

  var type;
  var timeout = 0;
  var propCount = 0;
  /* istanbul ignore if */
  if (expectedType === TRANSITION) {
    if (transitionTimeout > 0) {
      type = TRANSITION;
      timeout = transitionTimeout;
      propCount = transitionDurations.length;
    }
  } else if (expectedType === ANIMATION) {
    if (animationTimeout > 0) {
      type = ANIMATION;
      timeout = animationTimeout;
      propCount = animationDurations.length;
    }
  } else {
    timeout = Math.max(transitionTimeout, animationTimeout);
    type = timeout > 0
      ? transitionTimeout > animationTimeout
        ? TRANSITION
        : ANIMATION
      : null;
    propCount = type
      ? type === TRANSITION
        ? transitionDurations.length
        : animationDurations.length
      : 0;
  }
  var hasTransform =
    type === TRANSITION &&
    transformRE.test(styles[transitionProp + 'Property']);
  return {
    type: type,
    timeout: timeout,
    propCount: propCount,
    hasTransform: hasTransform
  }
}

function getTimeout (delays, durations) {
  /* istanbul ignore next */
  while (delays.length < durations.length) {
    delays = delays.concat(delays);
  }

  return Math.max.apply(null, durations.map(function (d, i) {
    return toMs(d) + toMs(delays[i])
  }))
}

function toMs (s) {
  return Number(s.slice(0, -1)) * 1000
}

/*  */

function enter (vnode, toggleDisplay) {
  var el = vnode.elm;

  // call leave callback now
  if (el._leaveCb) {
    el._leaveCb.cancelled = true;
    el._leaveCb();
  }

  var data = resolveTransition(vnode.data.transition);
  if (!data) {
    return
  }

  /* istanbul ignore if */
  if (el._enterCb || el.nodeType !== 1) {
    return
  }

  var css = data.css;
  var type = data.type;
  var enterClass = data.enterClass;
  var enterToClass = data.enterToClass;
  var enterActiveClass = data.enterActiveClass;
  var appearClass = data.appearClass;
  var appearToClass = data.appearToClass;
  var appearActiveClass = data.appearActiveClass;
  var beforeEnter = data.beforeEnter;
  var enter = data.enter;
  var afterEnter = data.afterEnter;
  var enterCancelled = data.enterCancelled;
  var beforeAppear = data.beforeAppear;
  var appear = data.appear;
  var afterAppear = data.afterAppear;
  var appearCancelled = data.appearCancelled;
  var duration = data.duration;

  // activeInstance will always be the <transition> component managing this
  // transition. One edge case to check is when the <transition> is placed
  // as the root node of a child component. In that case we need to check
  // <transition>'s parent for appear check.
  var context = activeInstance;
  var transitionNode = activeInstance.$vnode;
  while (transitionNode && transitionNode.parent) {
    transitionNode = transitionNode.parent;
    context = transitionNode.context;
  }

  var isAppear = !context._isMounted || !vnode.isRootInsert;

  if (isAppear && !appear && appear !== '') {
    return
  }

  var startClass = isAppear && appearClass
    ? appearClass
    : enterClass;
  var activeClass = isAppear && appearActiveClass
    ? appearActiveClass
    : enterActiveClass;
  var toClass = isAppear && appearToClass
    ? appearToClass
    : enterToClass;

  var beforeEnterHook = isAppear
    ? (beforeAppear || beforeEnter)
    : beforeEnter;
  var enterHook = isAppear
    ? (typeof appear === 'function' ? appear : enter)
    : enter;
  var afterEnterHook = isAppear
    ? (afterAppear || afterEnter)
    : afterEnter;
  var enterCancelledHook = isAppear
    ? (appearCancelled || enterCancelled)
    : enterCancelled;

  var explicitEnterDuration = toNumber(
    isObject(duration)
      ? duration.enter
      : duration
  );

  if (process.env.NODE_ENV !== 'production' && explicitEnterDuration != null) {
    checkDuration(explicitEnterDuration, 'enter', vnode);
  }

  var expectsCSS = css !== false && !isIE9;
  var userWantsControl = getHookArgumentsLength(enterHook);

  var cb = el._enterCb = once(function () {
    if (expectsCSS) {
      removeTransitionClass(el, toClass);
      removeTransitionClass(el, activeClass);
    }
    if (cb.cancelled) {
      if (expectsCSS) {
        removeTransitionClass(el, startClass);
      }
      enterCancelledHook && enterCancelledHook(el);
    } else {
      afterEnterHook && afterEnterHook(el);
    }
    el._enterCb = null;
  });

  if (!vnode.data.show) {
    // remove pending leave element on enter by injecting an insert hook
    mergeVNodeHook(vnode.data.hook || (vnode.data.hook = {}), 'insert', function () {
      var parent = el.parentNode;
      var pendingNode = parent && parent._pending && parent._pending[vnode.key];
      if (pendingNode &&
          pendingNode.tag === vnode.tag &&
          pendingNode.elm._leaveCb) {
        pendingNode.elm._leaveCb();
      }
      enterHook && enterHook(el, cb);
    });
  }

  // start enter transition
  beforeEnterHook && beforeEnterHook(el);
  if (expectsCSS) {
    addTransitionClass(el, startClass);
    addTransitionClass(el, activeClass);
    nextFrame(function () {
      addTransitionClass(el, toClass);
      removeTransitionClass(el, startClass);
      if (!cb.cancelled && !userWantsControl) {
        if (isValidDuration(explicitEnterDuration)) {
          setTimeout(cb, explicitEnterDuration);
        } else {
          whenTransitionEnds(el, type, cb);
        }
      }
    });
  }

  if (vnode.data.show) {
    toggleDisplay && toggleDisplay();
    enterHook && enterHook(el, cb);
  }

  if (!expectsCSS && !userWantsControl) {
    cb();
  }
}

function leave (vnode, rm) {
  var el = vnode.elm;

  // call enter callback now
  if (el._enterCb) {
    el._enterCb.cancelled = true;
    el._enterCb();
  }

  var data = resolveTransition(vnode.data.transition);
  if (!data) {
    return rm()
  }

  /* istanbul ignore if */
  if (el._leaveCb || el.nodeType !== 1) {
    return
  }

  var css = data.css;
  var type = data.type;
  var leaveClass = data.leaveClass;
  var leaveToClass = data.leaveToClass;
  var leaveActiveClass = data.leaveActiveClass;
  var beforeLeave = data.beforeLeave;
  var leave = data.leave;
  var afterLeave = data.afterLeave;
  var leaveCancelled = data.leaveCancelled;
  var delayLeave = data.delayLeave;
  var duration = data.duration;

  var expectsCSS = css !== false && !isIE9;
  var userWantsControl = getHookArgumentsLength(leave);

  var explicitLeaveDuration = toNumber(
    isObject(duration)
      ? duration.leave
      : duration
  );

  if (process.env.NODE_ENV !== 'production' && explicitLeaveDuration != null) {
    checkDuration(explicitLeaveDuration, 'leave', vnode);
  }

  var cb = el._leaveCb = once(function () {
    if (el.parentNode && el.parentNode._pending) {
      el.parentNode._pending[vnode.key] = null;
    }
    if (expectsCSS) {
      removeTransitionClass(el, leaveToClass);
      removeTransitionClass(el, leaveActiveClass);
    }
    if (cb.cancelled) {
      if (expectsCSS) {
        removeTransitionClass(el, leaveClass);
      }
      leaveCancelled && leaveCancelled(el);
    } else {
      rm();
      afterLeave && afterLeave(el);
    }
    el._leaveCb = null;
  });

  if (delayLeave) {
    delayLeave(performLeave);
  } else {
    performLeave();
  }

  function performLeave () {
    // the delayed leave may have already been cancelled
    if (cb.cancelled) {
      return
    }
    // record leaving element
    if (!vnode.data.show) {
      (el.parentNode._pending || (el.parentNode._pending = {}))[vnode.key] = vnode;
    }
    beforeLeave && beforeLeave(el);
    if (expectsCSS) {
      addTransitionClass(el, leaveClass);
      addTransitionClass(el, leaveActiveClass);
      nextFrame(function () {
        addTransitionClass(el, leaveToClass);
        removeTransitionClass(el, leaveClass);
        if (!cb.cancelled && !userWantsControl) {
          if (isValidDuration(explicitLeaveDuration)) {
            setTimeout(cb, explicitLeaveDuration);
          } else {
            whenTransitionEnds(el, type, cb);
          }
        }
      });
    }
    leave && leave(el, cb);
    if (!expectsCSS && !userWantsControl) {
      cb();
    }
  }
}

// only used in dev mode
function checkDuration (val, name, vnode) {
  if (typeof val !== 'number') {
    warn(
      "<transition> explicit " + name + " duration is not a valid number - " +
      "got " + (JSON.stringify(val)) + ".",
      vnode.context
    );
  } else if (isNaN(val)) {
    warn(
      "<transition> explicit " + name + " duration is NaN - " +
      'the duration expression might be incorrect.',
      vnode.context
    );
  }
}

function isValidDuration (val) {
  return typeof val === 'number' && !isNaN(val)
}

/**
 * Normalize a transition hook's argument length. The hook may be:
 * - a merged hook (invoker) with the original in .fns
 * - a wrapped component method (check ._length)
 * - a plain function (.length)
 */
function getHookArgumentsLength (fn) {
  if (!fn) { return false }
  var invokerFns = fn.fns;
  if (invokerFns) {
    // invoker
    return getHookArgumentsLength(
      Array.isArray(invokerFns)
        ? invokerFns[0]
        : invokerFns
    )
  } else {
    return (fn._length || fn.length) > 1
  }
}

function _enter (_, vnode) {
  if (!vnode.data.show) {
    enter(vnode);
  }
}

var transition = inBrowser ? {
  create: _enter,
  activate: _enter,
  remove: function remove$$1 (vnode, rm) {
    /* istanbul ignore else */
    if (!vnode.data.show) {
      leave(vnode, rm);
    } else {
      rm();
    }
  }
} : {};

var platformModules = [
  attrs,
  klass,
  events,
  domProps,
  style,
  transition
];

/*  */

// the directive module should be applied last, after all
// built-in modules have been applied.
var modules = platformModules.concat(baseModules);

var patch = createPatchFunction({ nodeOps: nodeOps, modules: modules });

/**
 * Not type checking this file because flow doesn't like attaching
 * properties to Elements.
 */

/* istanbul ignore if */
if (isIE9) {
  // http://www.matts411.com/post/internet-explorer-9-oninput/
  document.addEventListener('selectionchange', function () {
    var el = document.activeElement;
    if (el && el.vmodel) {
      trigger(el, 'input');
    }
  });
}

var model$1 = {
  inserted: function inserted (el, binding, vnode) {
    if (vnode.tag === 'select') {
      var cb = function () {
        setSelected(el, binding, vnode.context);
      };
      cb();
      /* istanbul ignore if */
      if (isIE || isEdge) {
        setTimeout(cb, 0);
      }
    } else if (vnode.tag === 'textarea' || el.type === 'text' || el.type === 'password') {
      el._vModifiers = binding.modifiers;
      if (!binding.modifiers.lazy) {
        if (!isAndroid) {
          el.addEventListener('compositionstart', onCompositionStart);
          el.addEventListener('compositionend', onCompositionEnd);
        }
        /* istanbul ignore if */
        if (isIE9) {
          el.vmodel = true;
        }
      }
    }
  },
  componentUpdated: function componentUpdated (el, binding, vnode) {
    if (vnode.tag === 'select') {
      setSelected(el, binding, vnode.context);
      // in case the options rendered by v-for have changed,
      // it's possible that the value is out-of-sync with the rendered options.
      // detect such cases and filter out values that no longer has a matching
      // option in the DOM.
      var needReset = el.multiple
        ? binding.value.some(function (v) { return hasNoMatchingOption(v, el.options); })
        : binding.value !== binding.oldValue && hasNoMatchingOption(binding.value, el.options);
      if (needReset) {
        trigger(el, 'change');
      }
    }
  }
};

function setSelected (el, binding, vm) {
  var value = binding.value;
  var isMultiple = el.multiple;
  if (isMultiple && !Array.isArray(value)) {
    process.env.NODE_ENV !== 'production' && warn(
      "<select multiple v-model=\"" + (binding.expression) + "\"> " +
      "expects an Array value for its binding, but got " + (Object.prototype.toString.call(value).slice(8, -1)),
      vm
    );
    return
  }
  var selected, option;
  for (var i = 0, l = el.options.length; i < l; i++) {
    option = el.options[i];
    if (isMultiple) {
      selected = looseIndexOf(value, getValue(option)) > -1;
      if (option.selected !== selected) {
        option.selected = selected;
      }
    } else {
      if (looseEqual(getValue(option), value)) {
        if (el.selectedIndex !== i) {
          el.selectedIndex = i;
        }
        return
      }
    }
  }
  if (!isMultiple) {
    el.selectedIndex = -1;
  }
}

function hasNoMatchingOption (value, options) {
  for (var i = 0, l = options.length; i < l; i++) {
    if (looseEqual(getValue(options[i]), value)) {
      return false
    }
  }
  return true
}

function getValue (option) {
  return '_value' in option
    ? option._value
    : option.value
}

function onCompositionStart (e) {
  e.target.composing = true;
}

function onCompositionEnd (e) {
  e.target.composing = false;
  trigger(e.target, 'input');
}

function trigger (el, type) {
  var e = document.createEvent('HTMLEvents');
  e.initEvent(type, true, true);
  el.dispatchEvent(e);
}

/*  */

// recursively search for possible transition defined inside the component root
function locateNode (vnode) {
  return vnode.componentInstance && (!vnode.data || !vnode.data.transition)
    ? locateNode(vnode.componentInstance._vnode)
    : vnode
}

var show = {
  bind: function bind (el, ref, vnode) {
    var value = ref.value;

    vnode = locateNode(vnode);
    var transition = vnode.data && vnode.data.transition;
    var originalDisplay = el.__vOriginalDisplay =
      el.style.display === 'none' ? '' : el.style.display;
    if (value && transition && !isIE9) {
      vnode.data.show = true;
      enter(vnode, function () {
        el.style.display = originalDisplay;
      });
    } else {
      el.style.display = value ? originalDisplay : 'none';
    }
  },

  update: function update (el, ref, vnode) {
    var value = ref.value;
    var oldValue = ref.oldValue;

    /* istanbul ignore if */
    if (value === oldValue) { return }
    vnode = locateNode(vnode);
    var transition = vnode.data && vnode.data.transition;
    if (transition && !isIE9) {
      vnode.data.show = true;
      if (value) {
        enter(vnode, function () {
          el.style.display = el.__vOriginalDisplay;
        });
      } else {
        leave(vnode, function () {
          el.style.display = 'none';
        });
      }
    } else {
      el.style.display = value ? el.__vOriginalDisplay : 'none';
    }
  },

  unbind: function unbind (
    el,
    binding,
    vnode,
    oldVnode,
    isDestroy
  ) {
    if (!isDestroy) {
      el.style.display = el.__vOriginalDisplay;
    }
  }
};

var platformDirectives = {
  model: model$1,
  show: show
};

/*  */

// Provides transition support for a single element/component.
// supports transition mode (out-in / in-out)

var transitionProps = {
  name: String,
  appear: Boolean,
  css: Boolean,
  mode: String,
  type: String,
  enterClass: String,
  leaveClass: String,
  enterToClass: String,
  leaveToClass: String,
  enterActiveClass: String,
  leaveActiveClass: String,
  appearClass: String,
  appearActiveClass: String,
  appearToClass: String,
  duration: [Number, String, Object]
};

// in case the child is also an abstract component, e.g. <keep-alive>
// we want to recursively retrieve the real component to be rendered
function getRealChild (vnode) {
  var compOptions = vnode && vnode.componentOptions;
  if (compOptions && compOptions.Ctor.options.abstract) {
    return getRealChild(getFirstComponentChild(compOptions.children))
  } else {
    return vnode
  }
}

function extractTransitionData (comp) {
  var data = {};
  var options = comp.$options;
  // props
  for (var key in options.propsData) {
    data[key] = comp[key];
  }
  // events.
  // extract listeners and pass them directly to the transition methods
  var listeners = options._parentListeners;
  for (var key$1 in listeners) {
    data[camelize(key$1)] = listeners[key$1];
  }
  return data
}

function placeholder (h, rawChild) {
  return /\d-keep-alive$/.test(rawChild.tag)
    ? h('keep-alive')
    : null
}

function hasParentTransition (vnode) {
  while ((vnode = vnode.parent)) {
    if (vnode.data.transition) {
      return true
    }
  }
}

function isSameChild (child, oldChild) {
  return oldChild.key === child.key && oldChild.tag === child.tag
}

var Transition = {
  name: 'transition',
  props: transitionProps,
  abstract: true,

  render: function render (h) {
    var this$1 = this;

    var children = this.$slots.default;
    if (!children) {
      return
    }

    // filter out text nodes (possible whitespaces)
    children = children.filter(function (c) { return c.tag; });
    /* istanbul ignore if */
    if (!children.length) {
      return
    }

    // warn multiple elements
    if (process.env.NODE_ENV !== 'production' && children.length > 1) {
      warn(
        '<transition> can only be used on a single element. Use ' +
        '<transition-group> for lists.',
        this.$parent
      );
    }

    var mode = this.mode;

    // warn invalid mode
    if (process.env.NODE_ENV !== 'production' &&
        mode && mode !== 'in-out' && mode !== 'out-in') {
      warn(
        'invalid <transition> mode: ' + mode,
        this.$parent
      );
    }

    var rawChild = children[0];

    // if this is a component root node and the component's
    // parent container node also has transition, skip.
    if (hasParentTransition(this.$vnode)) {
      return rawChild
    }

    // apply transition data to child
    // use getRealChild() to ignore abstract components e.g. keep-alive
    var child = getRealChild(rawChild);
    /* istanbul ignore if */
    if (!child) {
      return rawChild
    }

    if (this._leaving) {
      return placeholder(h, rawChild)
    }

    // ensure a key that is unique to the vnode type and to this transition
    // component instance. This key will be used to remove pending leaving nodes
    // during entering.
    var id = "__transition-" + (this._uid) + "-";
    child.key = child.key == null
      ? id + child.tag
      : isPrimitive(child.key)
        ? (String(child.key).indexOf(id) === 0 ? child.key : id + child.key)
        : child.key;

    var data = (child.data || (child.data = {})).transition = extractTransitionData(this);
    var oldRawChild = this._vnode;
    var oldChild = getRealChild(oldRawChild);

    // mark v-show
    // so that the transition module can hand over the control to the directive
    if (child.data.directives && child.data.directives.some(function (d) { return d.name === 'show'; })) {
      child.data.show = true;
    }

    if (oldChild && oldChild.data && !isSameChild(child, oldChild)) {
      // replace old child transition data with fresh one
      // important for dynamic transitions!
      var oldData = oldChild && (oldChild.data.transition = extend({}, data));
      // handle transition mode
      if (mode === 'out-in') {
        // return placeholder node and queue update when leave finishes
        this._leaving = true;
        mergeVNodeHook(oldData, 'afterLeave', function () {
          this$1._leaving = false;
          this$1.$forceUpdate();
        });
        return placeholder(h, rawChild)
      } else if (mode === 'in-out') {
        var delayedLeave;
        var performLeave = function () { delayedLeave(); };
        mergeVNodeHook(data, 'afterEnter', performLeave);
        mergeVNodeHook(data, 'enterCancelled', performLeave);
        mergeVNodeHook(oldData, 'delayLeave', function (leave) { delayedLeave = leave; });
      }
    }

    return rawChild
  }
};

/*  */

// Provides transition support for list items.
// supports move transitions using the FLIP technique.

// Because the vdom's children update algorithm is "unstable" - i.e.
// it doesn't guarantee the relative positioning of removed elements,
// we force transition-group to update its children into two passes:
// in the first pass, we remove all nodes that need to be removed,
// triggering their leaving transition; in the second pass, we insert/move
// into the final desired state. This way in the second pass removed
// nodes will remain where they should be.

var props = extend({
  tag: String,
  moveClass: String
}, transitionProps);

delete props.mode;

var TransitionGroup = {
  props: props,

  render: function render (h) {
    var tag = this.tag || this.$vnode.data.tag || 'span';
    var map = Object.create(null);
    var prevChildren = this.prevChildren = this.children;
    var rawChildren = this.$slots.default || [];
    var children = this.children = [];
    var transitionData = extractTransitionData(this);

    for (var i = 0; i < rawChildren.length; i++) {
      var c = rawChildren[i];
      if (c.tag) {
        if (c.key != null && String(c.key).indexOf('__vlist') !== 0) {
          children.push(c);
          map[c.key] = c
          ;(c.data || (c.data = {})).transition = transitionData;
        } else if (process.env.NODE_ENV !== 'production') {
          var opts = c.componentOptions;
          var name = opts ? (opts.Ctor.options.name || opts.tag || '') : c.tag;
          warn(("<transition-group> children must be keyed: <" + name + ">"));
        }
      }
    }

    if (prevChildren) {
      var kept = [];
      var removed = [];
      for (var i$1 = 0; i$1 < prevChildren.length; i$1++) {
        var c$1 = prevChildren[i$1];
        c$1.data.transition = transitionData;
        c$1.data.pos = c$1.elm.getBoundingClientRect();
        if (map[c$1.key]) {
          kept.push(c$1);
        } else {
          removed.push(c$1);
        }
      }
      this.kept = h(tag, null, kept);
      this.removed = removed;
    }

    return h(tag, null, children)
  },

  beforeUpdate: function beforeUpdate () {
    // force removing pass
    this.__patch__(
      this._vnode,
      this.kept,
      false, // hydrating
      true // removeOnly (!important, avoids unnecessary moves)
    );
    this._vnode = this.kept;
  },

  updated: function updated () {
    var children = this.prevChildren;
    var moveClass = this.moveClass || ((this.name || 'v') + '-move');
    if (!children.length || !this.hasMove(children[0].elm, moveClass)) {
      return
    }

    // we divide the work into three loops to avoid mixing DOM reads and writes
    // in each iteration - which helps prevent layout thrashing.
    children.forEach(callPendingCbs);
    children.forEach(recordPosition);
    children.forEach(applyTranslation);

    // force reflow to put everything in position
    var body = document.body;
    var f = body.offsetHeight; // eslint-disable-line

    children.forEach(function (c) {
      if (c.data.moved) {
        var el = c.elm;
        var s = el.style;
        addTransitionClass(el, moveClass);
        s.transform = s.WebkitTransform = s.transitionDuration = '';
        el.addEventListener(transitionEndEvent, el._moveCb = function cb (e) {
          if (!e || /transform$/.test(e.propertyName)) {
            el.removeEventListener(transitionEndEvent, cb);
            el._moveCb = null;
            removeTransitionClass(el, moveClass);
          }
        });
      }
    });
  },

  methods: {
    hasMove: function hasMove (el, moveClass) {
      /* istanbul ignore if */
      if (!hasTransition) {
        return false
      }
      if (this._hasMove != null) {
        return this._hasMove
      }
      // Detect whether an element with the move class applied has
      // CSS transitions. Since the element may be inside an entering
      // transition at this very moment, we make a clone of it and remove
      // all other transition classes applied to ensure only the move class
      // is applied.
      var clone = el.cloneNode();
      if (el._transitionClasses) {
        el._transitionClasses.forEach(function (cls) { removeClass(clone, cls); });
      }
      addClass(clone, moveClass);
      clone.style.display = 'none';
      this.$el.appendChild(clone);
      var info = getTransitionInfo(clone);
      this.$el.removeChild(clone);
      return (this._hasMove = info.hasTransform)
    }
  }
};

function callPendingCbs (c) {
  /* istanbul ignore if */
  if (c.elm._moveCb) {
    c.elm._moveCb();
  }
  /* istanbul ignore if */
  if (c.elm._enterCb) {
    c.elm._enterCb();
  }
}

function recordPosition (c) {
  c.data.newPos = c.elm.getBoundingClientRect();
}

function applyTranslation (c) {
  var oldPos = c.data.pos;
  var newPos = c.data.newPos;
  var dx = oldPos.left - newPos.left;
  var dy = oldPos.top - newPos.top;
  if (dx || dy) {
    c.data.moved = true;
    var s = c.elm.style;
    s.transform = s.WebkitTransform = "translate(" + dx + "px," + dy + "px)";
    s.transitionDuration = '0s';
  }
}

var platformComponents = {
  Transition: Transition,
  TransitionGroup: TransitionGroup
};

/*  */

// install platform specific utils
Vue$2.config.mustUseProp = mustUseProp;
Vue$2.config.isReservedTag = isReservedTag;
Vue$2.config.getTagNamespace = getTagNamespace;
Vue$2.config.isUnknownElement = isUnknownElement;

// install platform runtime directives & components
extend(Vue$2.options.directives, platformDirectives);
extend(Vue$2.options.components, platformComponents);

// install platform patch function
Vue$2.prototype.__patch__ = inBrowser ? patch : noop;

// public mount method
Vue$2.prototype.$mount = function (
  el,
  hydrating
) {
  el = el && inBrowser ? query(el) : undefined;
  return mountComponent(this, el, hydrating)
};

// devtools global hook
/* istanbul ignore next */
setTimeout(function () {
  if (config.devtools) {
    if (devtools) {
      devtools.emit('init', Vue$2);
    } else if (process.env.NODE_ENV !== 'production' && isChrome) {
      console[console.info ? 'info' : 'log'](
        'Download the Vue Devtools extension for a better development experience:\n' +
        'https://github.com/vuejs/vue-devtools'
      );
    }
  }
  if (process.env.NODE_ENV !== 'production' &&
      config.productionTip !== false &&
      inBrowser && typeof console !== 'undefined') {
    console[console.info ? 'info' : 'log'](
      "You are running Vue in development mode.\n" +
      "Make sure to turn on production mode when deploying for production.\n" +
      "See more tips at https://vuejs.org/guide/deployment.html"
    );
  }
}, 0);

/* harmony default export */ __webpack_exports__["default"] = (Vue$2);

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(1), __webpack_require__(2)))

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Store", function() { return Store; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapState", function() { return mapState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapMutations", function() { return mapMutations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapGetters", function() { return mapGetters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mapActions", function() { return mapActions; });
/**
 * vuex v2.2.1
 * (c) 2017 Evan You
 * @license MIT
 */
var applyMixin = function (Vue) {
  var version = Number(Vue.version.split('.')[0]);

  if (version >= 2) {
    var usesInit = Vue.config._lifecycleHooks.indexOf('init') > -1;
    Vue.mixin(usesInit ? { init: vuexInit } : { beforeCreate: vuexInit });
  } else {
    // override init and inject vuex init procedure
    // for 1.x backwards compatibility.
    var _init = Vue.prototype._init;
    Vue.prototype._init = function (options) {
      if ( options === void 0 ) options = {};

      options.init = options.init
        ? [vuexInit].concat(options.init)
        : vuexInit;
      _init.call(this, options);
    };
  }

  /**
   * Vuex init hook, injected into each instances init hooks list.
   */

  function vuexInit () {
    var options = this.$options;
    // store injection
    if (options.store) {
      this.$store = options.store;
    } else if (options.parent && options.parent.$store) {
      this.$store = options.parent.$store;
    }
  }
};

var devtoolHook =
  typeof window !== 'undefined' &&
  window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

function devtoolPlugin (store) {
  if (!devtoolHook) { return }

  store._devtoolHook = devtoolHook;

  devtoolHook.emit('vuex:init', store);

  devtoolHook.on('vuex:travel-to-state', function (targetState) {
    store.replaceState(targetState);
  });

  store.subscribe(function (mutation, state) {
    devtoolHook.emit('vuex:mutation', mutation, state);
  });
}

/**
 * Get the first item that pass the test
 * by second argument function
 *
 * @param {Array} list
 * @param {Function} f
 * @return {*}
 */
/**
 * Deep copy the given object considering circular structure.
 * This function caches all nested objects and its copies.
 * If it detects circular structure, use cached copy to avoid infinite loop.
 *
 * @param {*} obj
 * @param {Array<Object>} cache
 * @return {*}
 */


/**
 * forEach for object
 */
function forEachValue (obj, fn) {
  Object.keys(obj).forEach(function (key) { return fn(obj[key], key); });
}

function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

function isPromise (val) {
  return val && typeof val.then === 'function'
}

function assert (condition, msg) {
  if (!condition) { throw new Error(("[vuex] " + msg)) }
}

var Module = function Module (rawModule, runtime) {
  this.runtime = runtime;
  this._children = Object.create(null);
  this._rawModule = rawModule;
};

var prototypeAccessors$1 = { state: {},namespaced: {} };

prototypeAccessors$1.state.get = function () {
  return this._rawModule.state || {}
};

prototypeAccessors$1.namespaced.get = function () {
  return !!this._rawModule.namespaced
};

Module.prototype.addChild = function addChild (key, module) {
  this._children[key] = module;
};

Module.prototype.removeChild = function removeChild (key) {
  delete this._children[key];
};

Module.prototype.getChild = function getChild (key) {
  return this._children[key]
};

Module.prototype.update = function update (rawModule) {
  this._rawModule.namespaced = rawModule.namespaced;
  if (rawModule.actions) {
    this._rawModule.actions = rawModule.actions;
  }
  if (rawModule.mutations) {
    this._rawModule.mutations = rawModule.mutations;
  }
  if (rawModule.getters) {
    this._rawModule.getters = rawModule.getters;
  }
};

Module.prototype.forEachChild = function forEachChild (fn) {
  forEachValue(this._children, fn);
};

Module.prototype.forEachGetter = function forEachGetter (fn) {
  if (this._rawModule.getters) {
    forEachValue(this._rawModule.getters, fn);
  }
};

Module.prototype.forEachAction = function forEachAction (fn) {
  if (this._rawModule.actions) {
    forEachValue(this._rawModule.actions, fn);
  }
};

Module.prototype.forEachMutation = function forEachMutation (fn) {
  if (this._rawModule.mutations) {
    forEachValue(this._rawModule.mutations, fn);
  }
};

Object.defineProperties( Module.prototype, prototypeAccessors$1 );

var ModuleCollection = function ModuleCollection (rawRootModule) {
  var this$1 = this;

  // register root module (Vuex.Store options)
  this.root = new Module(rawRootModule, false);

  // register all nested modules
  if (rawRootModule.modules) {
    forEachValue(rawRootModule.modules, function (rawModule, key) {
      this$1.register([key], rawModule, false);
    });
  }
};

ModuleCollection.prototype.get = function get (path) {
  return path.reduce(function (module, key) {
    return module.getChild(key)
  }, this.root)
};

ModuleCollection.prototype.getNamespace = function getNamespace (path) {
  var module = this.root;
  return path.reduce(function (namespace, key) {
    module = module.getChild(key);
    return namespace + (module.namespaced ? key + '/' : '')
  }, '')
};

ModuleCollection.prototype.update = function update$1 (rawRootModule) {
  update(this.root, rawRootModule);
};

ModuleCollection.prototype.register = function register (path, rawModule, runtime) {
    var this$1 = this;
    if ( runtime === void 0 ) runtime = true;

  var parent = this.get(path.slice(0, -1));
  var newModule = new Module(rawModule, runtime);
  parent.addChild(path[path.length - 1], newModule);

  // register nested modules
  if (rawModule.modules) {
    forEachValue(rawModule.modules, function (rawChildModule, key) {
      this$1.register(path.concat(key), rawChildModule, runtime);
    });
  }
};

ModuleCollection.prototype.unregister = function unregister (path) {
  var parent = this.get(path.slice(0, -1));
  var key = path[path.length - 1];
  if (!parent.getChild(key).runtime) { return }

  parent.removeChild(key);
};

function update (targetModule, newModule) {
  // update target module
  targetModule.update(newModule);

  // update nested modules
  if (newModule.modules) {
    for (var key in newModule.modules) {
      if (!targetModule.getChild(key)) {
        console.warn(
          "[vuex] trying to add a new module '" + key + "' on hot reloading, " +
          'manual reload is needed'
        );
        return
      }
      update(targetModule.getChild(key), newModule.modules[key]);
    }
  }
}

var Vue; // bind on install

var Store = function Store (options) {
  var this$1 = this;
  if ( options === void 0 ) options = {};

  assert(Vue, "must call Vue.use(Vuex) before creating a store instance.");
  assert(typeof Promise !== 'undefined', "vuex requires a Promise polyfill in this browser.");

  var state = options.state; if ( state === void 0 ) state = {};
  var plugins = options.plugins; if ( plugins === void 0 ) plugins = [];
  var strict = options.strict; if ( strict === void 0 ) strict = false;

  // store internal state
  this._committing = false;
  this._actions = Object.create(null);
  this._mutations = Object.create(null);
  this._wrappedGetters = Object.create(null);
  this._modules = new ModuleCollection(options);
  this._modulesNamespaceMap = Object.create(null);
  this._subscribers = [];
  this._watcherVM = new Vue();

  // bind commit and dispatch to self
  var store = this;
  var ref = this;
  var dispatch = ref.dispatch;
  var commit = ref.commit;
  this.dispatch = function boundDispatch (type, payload) {
    return dispatch.call(store, type, payload)
  };
  this.commit = function boundCommit (type, payload, options) {
    return commit.call(store, type, payload, options)
  };

  // strict mode
  this.strict = strict;

  // init root module.
  // this also recursively registers all sub-modules
  // and collects all module getters inside this._wrappedGetters
  installModule(this, state, [], this._modules.root);

  // initialize the store vm, which is responsible for the reactivity
  // (also registers _wrappedGetters as computed properties)
  resetStoreVM(this, state);

  // apply plugins
  plugins.concat(devtoolPlugin).forEach(function (plugin) { return plugin(this$1); });
};

var prototypeAccessors = { state: {} };

prototypeAccessors.state.get = function () {
  return this._vm._data.$$state
};

prototypeAccessors.state.set = function (v) {
  assert(false, "Use store.replaceState() to explicit replace store state.");
};

Store.prototype.commit = function commit (_type, _payload, _options) {
    var this$1 = this;

  // check object-style commit
  var ref = unifyObjectStyle(_type, _payload, _options);
    var type = ref.type;
    var payload = ref.payload;
    var options = ref.options;

  var mutation = { type: type, payload: payload };
  var entry = this._mutations[type];
  if (!entry) {
    console.error(("[vuex] unknown mutation type: " + type));
    return
  }
  this._withCommit(function () {
    entry.forEach(function commitIterator (handler) {
      handler(payload);
    });
  });
  this._subscribers.forEach(function (sub) { return sub(mutation, this$1.state); });

  if (options && options.silent) {
    console.warn(
      "[vuex] mutation type: " + type + ". Silent option has been removed. " +
      'Use the filter functionality in the vue-devtools'
    );
  }
};

Store.prototype.dispatch = function dispatch (_type, _payload) {
  // check object-style dispatch
  var ref = unifyObjectStyle(_type, _payload);
    var type = ref.type;
    var payload = ref.payload;

  var entry = this._actions[type];
  if (!entry) {
    console.error(("[vuex] unknown action type: " + type));
    return
  }
  return entry.length > 1
    ? Promise.all(entry.map(function (handler) { return handler(payload); }))
    : entry[0](payload)
};

Store.prototype.subscribe = function subscribe (fn) {
  var subs = this._subscribers;
  if (subs.indexOf(fn) < 0) {
    subs.push(fn);
  }
  return function () {
    var i = subs.indexOf(fn);
    if (i > -1) {
      subs.splice(i, 1);
    }
  }
};

Store.prototype.watch = function watch (getter, cb, options) {
    var this$1 = this;

  assert(typeof getter === 'function', "store.watch only accepts a function.");
  return this._watcherVM.$watch(function () { return getter(this$1.state, this$1.getters); }, cb, options)
};

Store.prototype.replaceState = function replaceState (state) {
    var this$1 = this;

  this._withCommit(function () {
    this$1._vm._data.$$state = state;
  });
};

Store.prototype.registerModule = function registerModule (path, rawModule) {
  if (typeof path === 'string') { path = [path]; }
  assert(Array.isArray(path), "module path must be a string or an Array.");
  this._modules.register(path, rawModule);
  installModule(this, this.state, path, this._modules.get(path));
  // reset store to update getters...
  resetStoreVM(this, this.state);
};

Store.prototype.unregisterModule = function unregisterModule (path) {
    var this$1 = this;

  if (typeof path === 'string') { path = [path]; }
  assert(Array.isArray(path), "module path must be a string or an Array.");
  this._modules.unregister(path);
  this._withCommit(function () {
    var parentState = getNestedState(this$1.state, path.slice(0, -1));
    Vue.delete(parentState, path[path.length - 1]);
  });
  resetStore(this);
};

Store.prototype.hotUpdate = function hotUpdate (newOptions) {
  this._modules.update(newOptions);
  resetStore(this, true);
};

Store.prototype._withCommit = function _withCommit (fn) {
  var committing = this._committing;
  this._committing = true;
  fn();
  this._committing = committing;
};

Object.defineProperties( Store.prototype, prototypeAccessors );

function resetStore (store, hot) {
  store._actions = Object.create(null);
  store._mutations = Object.create(null);
  store._wrappedGetters = Object.create(null);
  store._modulesNamespaceMap = Object.create(null);
  var state = store.state;
  // init all modules
  installModule(store, state, [], store._modules.root, true);
  // reset vm
  resetStoreVM(store, state, hot);
}

function resetStoreVM (store, state, hot) {
  var oldVm = store._vm;

  // bind store public getters
  store.getters = {};
  var wrappedGetters = store._wrappedGetters;
  var computed = {};
  forEachValue(wrappedGetters, function (fn, key) {
    // use computed to leverage its lazy-caching mechanism
    computed[key] = function () { return fn(store); };
    Object.defineProperty(store.getters, key, {
      get: function () { return store._vm[key]; },
      enumerable: true // for local getters
    });
  });

  // use a Vue instance to store the state tree
  // suppress warnings just in case the user has added
  // some funky global mixins
  var silent = Vue.config.silent;
  Vue.config.silent = true;
  store._vm = new Vue({
    data: {
      $$state: state
    },
    computed: computed
  });
  Vue.config.silent = silent;

  // enable strict mode for new vm
  if (store.strict) {
    enableStrictMode(store);
  }

  if (oldVm) {
    if (hot) {
      // dispatch changes in all subscribed watchers
      // to force getter re-evaluation for hot reloading.
      store._withCommit(function () {
        oldVm._data.$$state = null;
      });
    }
    Vue.nextTick(function () { return oldVm.$destroy(); });
  }
}

function installModule (store, rootState, path, module, hot) {
  var isRoot = !path.length;
  var namespace = store._modules.getNamespace(path);

  // register in namespace map
  if (namespace) {
    store._modulesNamespaceMap[namespace] = module;
  }

  // set state
  if (!isRoot && !hot) {
    var parentState = getNestedState(rootState, path.slice(0, -1));
    var moduleName = path[path.length - 1];
    store._withCommit(function () {
      Vue.set(parentState, moduleName, module.state);
    });
  }

  var local = module.context = makeLocalContext(store, namespace, path);

  module.forEachMutation(function (mutation, key) {
    var namespacedType = namespace + key;
    registerMutation(store, namespacedType, mutation, local);
  });

  module.forEachAction(function (action, key) {
    var namespacedType = namespace + key;
    registerAction(store, namespacedType, action, local);
  });

  module.forEachGetter(function (getter, key) {
    var namespacedType = namespace + key;
    registerGetter(store, namespacedType, getter, local);
  });

  module.forEachChild(function (child, key) {
    installModule(store, rootState, path.concat(key), child, hot);
  });
}

/**
 * make localized dispatch, commit, getters and state
 * if there is no namespace, just use root ones
 */
function makeLocalContext (store, namespace, path) {
  var noNamespace = namespace === '';

  var local = {
    dispatch: noNamespace ? store.dispatch : function (_type, _payload, _options) {
      var args = unifyObjectStyle(_type, _payload, _options);
      var payload = args.payload;
      var options = args.options;
      var type = args.type;

      if (!options || !options.root) {
        type = namespace + type;
        if (!store._actions[type]) {
          console.error(("[vuex] unknown local action type: " + (args.type) + ", global type: " + type));
          return
        }
      }

      return store.dispatch(type, payload)
    },

    commit: noNamespace ? store.commit : function (_type, _payload, _options) {
      var args = unifyObjectStyle(_type, _payload, _options);
      var payload = args.payload;
      var options = args.options;
      var type = args.type;

      if (!options || !options.root) {
        type = namespace + type;
        if (!store._mutations[type]) {
          console.error(("[vuex] unknown local mutation type: " + (args.type) + ", global type: " + type));
          return
        }
      }

      store.commit(type, payload, options);
    }
  };

  // getters and state object must be gotten lazily
  // because they will be changed by vm update
  Object.defineProperties(local, {
    getters: {
      get: noNamespace
        ? function () { return store.getters; }
        : function () { return makeLocalGetters(store, namespace); }
    },
    state: {
      get: function () { return getNestedState(store.state, path); }
    }
  });

  return local
}

function makeLocalGetters (store, namespace) {
  var gettersProxy = {};

  var splitPos = namespace.length;
  Object.keys(store.getters).forEach(function (type) {
    // skip if the target getter is not match this namespace
    if (type.slice(0, splitPos) !== namespace) { return }

    // extract local getter type
    var localType = type.slice(splitPos);

    // Add a port to the getters proxy.
    // Define as getter property because
    // we do not want to evaluate the getters in this time.
    Object.defineProperty(gettersProxy, localType, {
      get: function () { return store.getters[type]; },
      enumerable: true
    });
  });

  return gettersProxy
}

function registerMutation (store, type, handler, local) {
  var entry = store._mutations[type] || (store._mutations[type] = []);
  entry.push(function wrappedMutationHandler (payload) {
    handler(local.state, payload);
  });
}

function registerAction (store, type, handler, local) {
  var entry = store._actions[type] || (store._actions[type] = []);
  entry.push(function wrappedActionHandler (payload, cb) {
    var res = handler({
      dispatch: local.dispatch,
      commit: local.commit,
      getters: local.getters,
      state: local.state,
      rootGetters: store.getters,
      rootState: store.state
    }, payload, cb);
    if (!isPromise(res)) {
      res = Promise.resolve(res);
    }
    if (store._devtoolHook) {
      return res.catch(function (err) {
        store._devtoolHook.emit('vuex:error', err);
        throw err
      })
    } else {
      return res
    }
  });
}

function registerGetter (store, type, rawGetter, local) {
  if (store._wrappedGetters[type]) {
    console.error(("[vuex] duplicate getter key: " + type));
    return
  }
  store._wrappedGetters[type] = function wrappedGetter (store) {
    return rawGetter(
      local.state, // local state
      local.getters, // local getters
      store.state, // root state
      store.getters // root getters
    )
  };
}

function enableStrictMode (store) {
  store._vm.$watch(function () { return this._data.$$state }, function () {
    assert(store._committing, "Do not mutate vuex store state outside mutation handlers.");
  }, { deep: true, sync: true });
}

function getNestedState (state, path) {
  return path.length
    ? path.reduce(function (state, key) { return state[key]; }, state)
    : state
}

function unifyObjectStyle (type, payload, options) {
  if (isObject(type) && type.type) {
    options = payload;
    payload = type;
    type = type.type;
  }

  assert(typeof type === 'string', ("Expects string as the type, but found " + (typeof type) + "."));

  return { type: type, payload: payload, options: options }
}

function install (_Vue) {
  if (Vue) {
    console.error(
      '[vuex] already installed. Vue.use(Vuex) should be called only once.'
    );
    return
  }
  Vue = _Vue;
  applyMixin(Vue);
}

// auto install in dist mode
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

var mapState = normalizeNamespace(function (namespace, states) {
  var res = {};
  normalizeMap(states).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    res[key] = function mappedState () {
      var state = this.$store.state;
      var getters = this.$store.getters;
      if (namespace) {
        var module = getModuleByNamespace(this.$store, 'mapState', namespace);
        if (!module) {
          return
        }
        state = module.context.state;
        getters = module.context.getters;
      }
      return typeof val === 'function'
        ? val.call(this, state, getters)
        : state[val]
    };
    // mark vuex getter for devtools
    res[key].vuex = true;
  });
  return res
});

var mapMutations = normalizeNamespace(function (namespace, mutations) {
  var res = {};
  normalizeMap(mutations).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    val = namespace + val;
    res[key] = function mappedMutation () {
      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];

      if (namespace && !getModuleByNamespace(this.$store, 'mapMutations', namespace)) {
        return
      }
      return this.$store.commit.apply(this.$store, [val].concat(args))
    };
  });
  return res
});

var mapGetters = normalizeNamespace(function (namespace, getters) {
  var res = {};
  normalizeMap(getters).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    val = namespace + val;
    res[key] = function mappedGetter () {
      if (namespace && !getModuleByNamespace(this.$store, 'mapGetters', namespace)) {
        return
      }
      if (!(val in this.$store.getters)) {
        console.error(("[vuex] unknown getter: " + val));
        return
      }
      return this.$store.getters[val]
    };
    // mark vuex getter for devtools
    res[key].vuex = true;
  });
  return res
});

var mapActions = normalizeNamespace(function (namespace, actions) {
  var res = {};
  normalizeMap(actions).forEach(function (ref) {
    var key = ref.key;
    var val = ref.val;

    val = namespace + val;
    res[key] = function mappedAction () {
      var args = [], len = arguments.length;
      while ( len-- ) args[ len ] = arguments[ len ];

      if (namespace && !getModuleByNamespace(this.$store, 'mapActions', namespace)) {
        return
      }
      return this.$store.dispatch.apply(this.$store, [val].concat(args))
    };
  });
  return res
});

function normalizeMap (map) {
  return Array.isArray(map)
    ? map.map(function (key) { return ({ key: key, val: key }); })
    : Object.keys(map).map(function (key) { return ({ key: key, val: map[key] }); })
}

function normalizeNamespace (fn) {
  return function (namespace, map) {
    if (typeof namespace !== 'string') {
      map = namespace;
      namespace = '';
    } else if (namespace.charAt(namespace.length - 1) !== '/') {
      namespace += '/';
    }
    return fn(namespace, map)
  }
}

function getModuleByNamespace (store, helper, namespace) {
  var module = store._modulesNamespaceMap[namespace];
  if (!module) {
    console.error(("[vuex] module namespace not found in " + helper + "(): " + namespace));
  }
  return module
}

var index_esm = {
  Store: Store,
  install: install,
  version: '2.2.1',
  mapState: mapState,
  mapMutations: mapMutations,
  mapGetters: mapGetters,
  mapActions: mapActions
};

/* harmony default export */ __webpack_exports__["default"] = (index_esm);


/***/ }),
/* 8 */
/***/ (function(module, exports) {

;(function(win, lib) {
    var doc = win.document;
    var docEl = doc.documentElement;
    var metaEl = doc.querySelector('meta[name="viewport"]');
    var flexibleEl = doc.querySelector('meta[name="flexible"]');
    var dpr = 0;
    var scale = 0;
    var tid;
    var flexible = lib.flexible || (lib.flexible = {});

    if (metaEl) {
        console.warn('将根据已有的meta标签来设置缩放比例');
        var match = metaEl.getAttribute('content').match(/initial\-scale=([\d\.]+)/);
        if (match) {
            scale = parseFloat(match[1]);
            dpr = parseInt(1 / scale);
        }
    } else if (flexibleEl) {
        var content = flexibleEl.getAttribute('content');
        if (content) {
            var initialDpr = content.match(/initial\-dpr=([\d\.]+)/);
            var maximumDpr = content.match(/maximum\-dpr=([\d\.]+)/);
            if (initialDpr) {
                dpr = parseFloat(initialDpr[1]);
                scale = parseFloat((1 / dpr).toFixed(2));
            }
            if (maximumDpr) {
                dpr = parseFloat(maximumDpr[1]);
                scale = parseFloat((1 / dpr).toFixed(2));
            }
        }
    }

    if (!dpr && !scale) {
        var isAndroid = win.navigator.appVersion.match(/android/gi);
        var isIPhone = win.navigator.appVersion.match(/iphone/gi);
        var devicePixelRatio = win.devicePixelRatio;
        if (isIPhone) {
            // iOS下，对于2和3的屏，用2倍的方案，其余的用1倍方案
            if (devicePixelRatio >= 3 && (!dpr || dpr >= 3)) {
                dpr = 3;
            } else if (devicePixelRatio >= 2 && (!dpr || dpr >= 2)){
                dpr = 2;
            } else {
                dpr = 1;
            }
        } else {
            // 其他设备下，仍旧使用1倍的方案
            dpr = 1;
        }
        scale = 1 / dpr;
    }

    docEl.setAttribute('data-dpr', dpr);
    if (!metaEl) {
        metaEl = doc.createElement('meta');
        metaEl.setAttribute('name', 'viewport');
        metaEl.setAttribute('content', 'initial-scale=' + scale + ', maximum-scale=' + scale + ', minimum-scale=' + scale + ', user-scalable=no');
        if (docEl.firstElementChild) {
            docEl.firstElementChild.appendChild(metaEl);
        } else {
            var wrap = doc.createElement('div');
            wrap.appendChild(metaEl);
            doc.write(wrap.innerHTML);
        }
    }

    function refreshRem(){
        var width = docEl.getBoundingClientRect().width;
        if (width / dpr > 750) {
            width = 750 * dpr;
        }
        var rem = width / 7.5;
        docEl.style.fontSize = rem + 'px';
        flexible.rem = win.rem = rem;
    }

    win.addEventListener('resize', function() {
        clearTimeout(tid);
        tid = setTimeout(refreshRem, 300);
    }, false);
    win.addEventListener('pageshow', function(e) {
        if (e.persisted) {
            clearTimeout(tid);
            tid = setTimeout(refreshRem, 300);
        }
    }, false);

    if (doc.readyState === 'complete') {
        doc.body.style.fontSize = 12 * dpr + 'px';
    } else {
        doc.addEventListener('DOMContentLoaded', function(e) {
            doc.body.style.fontSize = 12 * dpr + 'px';
        }, false);
    }


    refreshRem();

    flexible.dpr = win.dpr = dpr;
    flexible.refreshRem = refreshRem;
    flexible.rem2px = function(d) {
        var val = parseFloat(d) * this.rem;
        if (typeof d === 'string' && d.match(/rem$/)) {
            val += 'px';
        }
        return val;
    }
    flexible.px2rem = function(d) {
        var val = parseFloat(d) / this.rem;
        if (typeof d === 'string' && d.match(/px$/)) {
            val += 'rem';
        }
        return val;
    }

})(window, window['lib'] || (window['lib'] = {}));

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__;

/***/ })
/******/ ]);
//# sourceMappingURL=lib.js.map