!function(t,e){"use strict";"function"==typeof define&&define.amd?define(e):"object"==typeof exports?module.exports=e():t.returnExports=e()}(this,function(){var t,e=Array,r=e.prototype,n=Object,o=n.prototype,i=Function,a=i.prototype,u=String,s=u.prototype,l=Number,c=l.prototype,f=r.slice,h=r.splice,p=r.push,y=r.unshift,g=r.concat,d=r.join,v=a.call,b=a.apply,w=Math.max,T=Math.min,m=o.toString,D="function"==typeof Symbol&&"symbol"==typeof Symbol.toStringTag,x=Function.prototype.toString,S=/^\s*class /,O=function(t){try{var e=x.call(t).replace(/\/\/.*\n/g,"").replace(/\/\*[.\s\S]*\*\//g,"").replace(/\n/gm," ").replace(/ {2}/g," ");return S.test(e)}catch(r){return!1}},j=function(t){try{return!O(t)&&(x.call(t),!0)}catch(e){return!1}},E=function(t){if(!t)return!1;if("function"!=typeof t&&"object"!=typeof t)return!1;if(D)return j(t);if(O(t))return!1;var e=m.call(t);return"[object Function]"===e||"[object GeneratorFunction]"===e},M=RegExp.prototype.exec,I=function(t){try{return M.call(t),!0}catch(e){return!1}};t=function(t){return"object"==typeof t&&(D?I(t):"[object RegExp]"===m.call(t))};var U,F=String.prototype.valueOf,N=function(t){try{return F.call(t),!0}catch(e){return!1}};U=function(t){return"string"==typeof t||"object"==typeof t&&(D?N(t):"[object String]"===m.call(t))};var k=n.defineProperty&&function(){try{var t={};n.defineProperty(t,"x",{"enumerable":!1,"value":t});for(var e in t)return!1;return t.x===t}catch(r){return!1}}(),C=function(t){var e;return e=k?function(t,e,r,o){!o&&e in t||n.defineProperty(t,e,{"configurable":!0,"enumerable":!1,"writable":!0,"value":r})}:function(t,e,r,n){!n&&e in t||(t[e]=r)},function(r,n,o){for(var i in n)t.call(n,i)&&e(r,i,n[i],o)}}(o.hasOwnProperty),R=function(t){var e=typeof t;return null===t||"object"!==e&&"function"!==e},A=l.isNaN||function(t){return t!==t},$={"ToInteger":function(t){var e=+t;return A(e)?e=0:0!==e&&e!==1/0&&e!==-1/0&&(e=(e>0||-1)*Math.floor(Math.abs(e))),e},"ToPrimitive":function(t){var e,r,n;if(R(t))return t;if(r=t.valueOf,E(r)&&(e=r.call(t),R(e)))return e;if(n=t.toString,E(n)&&(e=n.call(t),R(e)))return e;throw new TypeError},"ToObject":function(t){if(null==t)throw new TypeError("can't convert "+t+" to object");return n(t)},"ToUint32":function(t){return t>>>0}},P=function(){};C(a,{"bind":function(t){var e=this;if(!E(e))throw new TypeError("Function.prototype.bind called on incompatible "+e);for(var r,o=f.call(arguments,1),a=w(0,e.length-o.length),u=[],s=0;s<a;s++)p.call(u,"$"+s);return r=i("binder","return function ("+d.call(u,",")+"){ return binder.apply(this, arguments); }")(function(){if(this instanceof r){var i=b.call(e,this,g.call(o,f.call(arguments)));return n(i)===i?i:this}return b.call(e,t,g.call(o,f.call(arguments)))}),e.prototype&&(P.prototype=e.prototype,r.prototype=new P,P.prototype=null),r}});var J=v.bind(o.hasOwnProperty),Z=v.bind(o.toString),z=v.bind(f),G=b.bind(f),Y=v.bind(s.slice),B=v.bind(s.split),H=v.bind(s.indexOf),W=v.bind(p),L=v.bind(o.propertyIsEnumerable),X=v.bind(r.sort),q=e.isArray||function(t){return"[object Array]"===Z(t)},K=1!==[].unshift(0);C(r,{"unshift":function(){return y.apply(this,arguments),this.length}},K),C(e,{"isArray":q});var Q=n("a"),V="a"!==Q[0]||!(0 in Q),_=function(t){var e=!0,r=!0,n=!1;if(t)try{t.call("foo",function(t,r,n){"object"!=typeof n&&(e=!1)}),t.call([1],function(){"use strict";r="string"==typeof this},"x")}catch(o){n=!0}return!!t&&!n&&e&&r};C(r,{"forEach":function(t){var e,r=$.ToObject(this),n=V&&U(this)?B(this,""):r,o=-1,i=$.ToUint32(n.length);if(arguments.length>1&&(e=arguments[1]),!E(t))throw new TypeError("Array.prototype.forEach callback must be a function");for(;++o<i;)o in n&&(void 0===e?t(n[o],o,r):t.call(e,n[o],o,r))}},!_(r.forEach)),C(r,{"map":function(t){var r,n=$.ToObject(this),o=V&&U(this)?B(this,""):n,i=$.ToUint32(o.length),a=e(i);if(arguments.length>1&&(r=arguments[1]),!E(t))throw new TypeError("Array.prototype.map callback must be a function");for(var u=0;u<i;u++)u in o&&(a[u]=void 0===r?t(o[u],u,n):t.call(r,o[u],u,n));return a}},!_(r.map)),C(r,{"filter":function(t){var e,r,n=$.ToObject(this),o=V&&U(this)?B(this,""):n,i=$.ToUint32(o.length),a=[];if(arguments.length>1&&(r=arguments[1]),!E(t))throw new TypeError("Array.prototype.filter callback must be a function");for(var u=0;u<i;u++)u in o&&(e=o[u],(void 0===r?t(e,u,n):t.call(r,e,u,n))&&W(a,e));return a}},!_(r.filter)),C(r,{"every":function(t){var e,r=$.ToObject(this),n=V&&U(this)?B(this,""):r,o=$.ToUint32(n.length);if(arguments.length>1&&(e=arguments[1]),!E(t))throw new TypeError("Array.prototype.every callback must be a function");for(var i=0;i<o;i++)if(i in n&&!(void 0===e?t(n[i],i,r):t.call(e,n[i],i,r)))return!1;return!0}},!_(r.every)),C(r,{"some":function(t){var e,r=$.ToObject(this),n=V&&U(this)?B(this,""):r,o=$.ToUint32(n.length);if(arguments.length>1&&(e=arguments[1]),!E(t))throw new TypeError("Array.prototype.some callback must be a function");for(var i=0;i<o;i++)if(i in n&&(void 0===e?t(n[i],i,r):t.call(e,n[i],i,r)))return!0;return!1}},!_(r.some));var tt=!1;r.reduce&&(tt="object"==typeof r.reduce.call("es5",function(t,e,r,n){return n})),C(r,{"reduce":function(t){var e=$.ToObject(this),r=V&&U(this)?B(this,""):e,n=$.ToUint32(r.length);if(!E(t))throw new TypeError("Array.prototype.reduce callback must be a function");if(0===n&&1===arguments.length)throw new TypeError("reduce of empty array with no initial value");var o,i=0;if(arguments.length>=2)o=arguments[1];else for(;;){if(i in r){o=r[i++];break}if(++i>=n)throw new TypeError("reduce of empty array with no initial value")}for(;i<n;i++)i in r&&(o=t(o,r[i],i,e));return o}},!tt);var et=!1;r.reduceRight&&(et="object"==typeof r.reduceRight.call("es5",function(t,e,r,n){return n})),C(r,{"reduceRight":function(t){var e=$.ToObject(this),r=V&&U(this)?B(this,""):e,n=$.ToUint32(r.length);if(!E(t))throw new TypeError("Array.prototype.reduceRight callback must be a function");if(0===n&&1===arguments.length)throw new TypeError("reduceRight of empty array with no initial value");var o,i=n-1;if(arguments.length>=2)o=arguments[1];else for(;;){if(i in r){o=r[i--];break}if(--i<0)throw new TypeError("reduceRight of empty array with no initial value")}if(i<0)return o;do{i in r&&(o=t(o,r[i],i,e))}while(i--);return o}},!et);var rt=r.indexOf&&-1!==[0,1].indexOf(1,2);C(r,{"indexOf":function(t){var e=V&&U(this)?B(this,""):$.ToObject(this),r=$.ToUint32(e.length);if(0===r)return-1;var n=0;for(arguments.length>1&&(n=$.ToInteger(arguments[1])),n=n>=0?n:w(0,r+n);n<r;n++)if(n in e&&e[n]===t)return n;return-1}},rt);var nt=r.lastIndexOf&&-1!==[0,1].lastIndexOf(0,-3);C(r,{"lastIndexOf":function(t){var e=V&&U(this)?B(this,""):$.ToObject(this),r=$.ToUint32(e.length);if(0===r)return-1;var n=r-1;for(arguments.length>1&&(n=T(n,$.ToInteger(arguments[1]))),n=n>=0?n:r-Math.abs(n);n>=0;n--)if(n in e&&t===e[n])return n;return-1}},nt);var ot=function(){var t=[1,2],e=t.splice();return 2===t.length&&q(e)&&0===e.length}();C(r,{"splice":function(t,e){return 0===arguments.length?[]:h.apply(this,arguments)}},!ot);var it=function(){var t={};return r.splice.call(t,0,0,1),1===t.length}();C(r,{"splice":function(t,e){if(0===arguments.length)return[];var r=arguments;return this.length=w($.ToInteger(this.length),0),arguments.length>0&&"number"!=typeof e&&((r=z(arguments)).length<2?W(r,this.length-t):r[1]=$.ToInteger(e)),h.apply(this,r)}},!it);var at=function(){var t=new e(1e5);return t[8]="x",t.splice(1,1),7===t.indexOf("x")}(),ut=function(){var t=[];return t[256]="a",t.splice(257,0,"b"),"a"===t[256]}();C(r,{"splice":function(t,e){for(var r,n=$.ToObject(this),o=[],i=$.ToUint32(n.length),a=$.ToInteger(t),s=a<0?w(i+a,0):T(a,i),l=T(w($.ToInteger(e),0),i-s),c=0;c<l;)r=u(s+c),J(n,r)&&(o[c]=n[r]),c+=1;var f,h=z(arguments,2),p=h.length;if(p<l){c=s;for(var y=i-l;c<y;)r=u(c+l),f=u(c+p),J(n,r)?n[f]=n[r]:delete n[f],c+=1;c=i;for(var g=i-l+p;c>g;)delete n[c-1],c-=1}else if(p>l)for(c=i-l;c>s;)r=u(c+l-1),f=u(c+p-1),J(n,r)?n[f]=n[r]:delete n[f],c-=1;c=s;for(var d=0;d<h.length;++d)n[c]=h[d],c+=1;return n.length=i-l+p,o}},!at||!ut);var st,lt=r.join;try{st="1,2,3"!==Array.prototype.join.call("123",",")}catch(Te){st=!0}st&&C(r,{"join":function(t){var e=void 0===t?",":t;return lt.call(U(this)?B(this,""):this,e)}},st);var ct="1,2"!==[1,2].join(undefined);ct&&C(r,{"join":function(t){var e=void 0===t?",":t;return lt.call(this,e)}},ct);var ft=function(t){for(var e=$.ToObject(this),r=$.ToUint32(e.length),n=0;n<arguments.length;)e[r+n]=arguments[n],n+=1;return e.length=r+n,r+n},ht=function(){var t={};return 1!==Array.prototype.push.call(t,undefined)||1!==t.length||"undefined"!=typeof t[0]||!J(t,0)}();C(r,{"push":function(t){return q(this)?p.apply(this,arguments):ft.apply(this,arguments)}},ht);var pt=function(){var t=[];return 1!==t.push(undefined)||1!==t.length||"undefined"!=typeof t[0]||!J(t,0)}();C(r,{"push":ft},pt),C(r,{"slice":function(t,e){var r=U(this)?B(this,""):this;return G(r,arguments)}},V);var yt=function(){try{return[1,2].sort(null),[1,2].sort({}),!0}catch(Te){}return!1}(),gt=function(){try{return[1,2].sort(/a/),!1}catch(Te){}return!0}(),dt=function(){try{return[1,2].sort(undefined),!0}catch(Te){}return!1}();C(r,{"sort":function(t){if(void 0===t)return X(this);if(!E(t))throw new TypeError("Array.prototype.sort callback must be a function");return X(this,t)}},yt||!dt||!gt);var vt=!L({"toString":null},"toString"),bt=L(function(){},"prototype"),wt=!J("x","0"),Tt=function(t){var e=t.constructor;return e&&e.prototype===t},mt={"$window":!0,"$console":!0,"$parent":!0,"$self":!0,"$frame":!0,"$frames":!0,"$frameElement":!0,"$webkitIndexedDB":!0,"$webkitStorageInfo":!0,"$external":!0},Dt=function(){if("undefined"==typeof window)return!1;for(var t in window)try{!mt["$"+t]&&J(window,t)&&null!==window[t]&&"object"==typeof window[t]&&Tt(window[t])}catch(Te){return!0}return!1}(),xt=function(t){if("undefined"==typeof window||!Dt)return Tt(t);try{return Tt(t)}catch(Te){return!1}},St=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"],Ot=St.length,jt=function(t){return"[object Arguments]"===Z(t)},Et=jt(arguments)?jt:function(t){return null!==t&&"object"==typeof t&&"number"==typeof t.length&&t.length>=0&&!q(t)&&E(t.callee)};C(n,{"keys":function(t){var e=E(t),r=Et(t),n=null!==t&&"object"==typeof t,o=n&&U(t);if(!n&&!e&&!r)throw new TypeError("Object.keys called on a non-object");var i=[],a=bt&&e;if(o&&wt||r)for(var s=0;s<t.length;++s)W(i,u(s));if(!r)for(var l in t)a&&"prototype"===l||!J(t,l)||W(i,u(l));if(vt)for(var c=xt(t),f=0;f<Ot;f++){var h=St[f];c&&"constructor"===h||!J(t,h)||W(i,h)}return i}});var Mt=n.keys&&function(){return 2===n.keys(arguments).length}(1,2),It=n.keys&&function(){var t=n.keys(arguments);return 1!==arguments.length||1!==t.length||1!==t[0]}(1),Ut=n.keys;C(n,{"keys":function(t){return Ut(Et(t)?z(t):t)}},!Mt||It);var Ft,Nt,kt=0!==new Date(-0xc782b5b342b24).getUTCMonth(),Ct=new Date(-0x55d318d56a724),Rt=new Date(14496624e5),At="Mon, 01 Jan -45875 11:59:59 GMT"!==Ct.toUTCString();Ct.getTimezoneOffset()<-720?(Ft="Tue Jan 02 -45875"!==Ct.toDateString(),Nt=!/^Thu Dec 10 2015 \d\d:\d\d:\d\d GMT[-\+]\d\d\d\d(?: |$)/.test(Rt.toString())):(Ft="Mon Jan 01 -45875"!==Ct.toDateString(),Nt=!/^Wed Dec 09 2015 \d\d:\d\d:\d\d GMT[-\+]\d\d\d\d(?: |$)/.test(Rt.toString()));var $t=v.bind(Date.prototype.getFullYear),Pt=v.bind(Date.prototype.getMonth),Jt=v.bind(Date.prototype.getDate),Zt=v.bind(Date.prototype.getUTCFullYear),zt=v.bind(Date.prototype.getUTCMonth),Gt=v.bind(Date.prototype.getUTCDate),Yt=v.bind(Date.prototype.getUTCDay),Bt=v.bind(Date.prototype.getUTCHours),Ht=v.bind(Date.prototype.getUTCMinutes),Wt=v.bind(Date.prototype.getUTCSeconds),Lt=v.bind(Date.prototype.getUTCMilliseconds),Xt=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],qt=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],Kt=function(t,e){return Jt(new Date(e,t,0))};C(Date.prototype,{"getFullYear":function(){if(!(this&&this instanceof Date))throw new TypeError("this is not a Date object.");var t=$t(this);return t<0&&Pt(this)>11?t+1:t},"getMonth":function(){if(!(this&&this instanceof Date))throw new TypeError("this is not a Date object.");var t=$t(this),e=Pt(this);return t<0&&e>11?0:e},"getDate":function(){if(!(this&&this instanceof Date))throw new TypeError("this is not a Date object.");var t=$t(this),e=Pt(this),r=Jt(this);return t<0&&e>11?12===e?r:Kt(0,t+1)-r+1:r},"getUTCFullYear":function(){if(!(this&&this instanceof Date))throw new TypeError("this is not a Date object.");var t=Zt(this);return t<0&&zt(this)>11?t+1:t},"getUTCMonth":function(){if(!(this&&this instanceof Date))throw new TypeError("this is not a Date object.");var t=Zt(this),e=zt(this);return t<0&&e>11?0:e},"getUTCDate":function(){if(!(this&&this instanceof Date))throw new TypeError("this is not a Date object.");var t=Zt(this),e=zt(this),r=Gt(this);return t<0&&e>11?12===e?r:Kt(0,t+1)-r+1:r}},kt),C(Date.prototype,{"toUTCString":function(){if(!(this&&this instanceof Date))throw new TypeError("this is not a Date object.");var t=Yt(this),e=Gt(this),r=zt(this),n=Zt(this),o=Bt(this),i=Ht(this),a=Wt(this);return Xt[t]+", "+(e<10?"0"+e:e)+" "+qt[r]+" "+n+" "+(o<10?"0"+o:o)+":"+(i<10?"0"+i:i)+":"+(a<10?"0"+a:a)+" GMT"}},kt||At),C(Date.prototype,{"toDateString":function(){if(!(this&&this instanceof Date))throw new TypeError("this is not a Date object.");var t=this.getDay(),e=this.getDate(),r=this.getMonth(),n=this.getFullYear();return Xt[t]+" "+qt[r]+" "+(e<10?"0"+e:e)+" "+n}},kt||Ft),(kt||Nt)&&(Date.prototype.toString=function(){if(!(this&&this instanceof Date))throw new TypeError("this is not a Date object.");var t=this.getDay(),e=this.getDate(),r=this.getMonth(),n=this.getFullYear(),o=this.getHours(),i=this.getMinutes(),a=this.getSeconds(),u=this.getTimezoneOffset(),s=Math.floor(Math.abs(u)/60),l=Math.floor(Math.abs(u)%60);return Xt[t]+" "+qt[r]+" "+(e<10?"0"+e:e)+" "+n+" "+(o<10?"0"+o:o)+":"+(i<10?"0"+i:i)+":"+(a<10?"0"+a:a)+" GMT"+(u>0?"-":"+")+(s<10?"0"+s:s)+(l<10?"0"+l:l)},k&&n.defineProperty(Date.prototype,"toString",{"configurable":!0,"enumerable":!1,"writable":!0}));var Qt=Date.prototype.toISOString&&-1===new Date(-621987552e5).toISOString().indexOf("-000001"),Vt=Date.prototype.toISOString&&"1969-12-31T23:59:59.999Z"!==new Date(-1).toISOString(),_t=v.bind(Date.prototype.getTime);C(Date.prototype,{"toISOString":function(){if(!isFinite(this)||!isFinite(_t(this)))throw new RangeError("Date.prototype.toISOString called on non-finite value.");var t=Zt(this),e=zt(this);t+=Math.floor(e/12);var r=[(e=(e%12+12)%12)+1,Gt(this),Bt(this),Ht(this),Wt(this)];t=(t<0?"-":t>9999?"+":"")+Y("00000"+Math.abs(t),0<=t&&t<=9999?-4:-6);for(var n=0;n<r.length;++n)r[n]=Y("00"+r[n],-2);return t+"-"+z(r,0,2).join("-")+"T"+z(r,2).join(":")+"."+Y("000"+Lt(this),-3)+"Z"}},Qt||Vt),function(){try{return Date.prototype.toJSON&&null===new Date(NaN).toJSON()&&-1!==new Date(-621987552e5).toJSON().indexOf("-000001")&&Date.prototype.toJSON.call({"toISOString":function(){return!0}})}catch(Te){return!1}}()||(Date.prototype.toJSON=function(t){var e=n(this),r=$.ToPrimitive(e);if("number"==typeof r&&!isFinite(r))return null;var o=e.toISOString;if(!E(o))throw new TypeError("toISOString property is not callable");return o.call(e)});var te=1e15===Date.parse("+033658-09-27T01:46:40.000Z"),ee=!isNaN(Date.parse("2012-04-04T24:00:00.500Z"))||!isNaN(Date.parse("2012-11-31T23:59:59.000Z"))||!isNaN(Date.parse("2012-12-31T23:59:60.000Z"));if(isNaN(Date.parse("2000-01-01T00:00:00.000Z"))||ee||!te){var re=Math.pow(2,31)-1,ne=A(new Date(1970,0,1,0,0,0,re+1).getTime());Date=function(t){var e=function(r,n,o,i,a,s,l){var c,f=arguments.length;if(this instanceof t){var h=s,p=l;if(ne&&f>=7&&l>re){var y=Math.floor(l/re)*re,g=Math.floor(y/1e3);h+=g,p-=1e3*g}c=1===f&&u(r)===r?new t(e.parse(r)):f>=7?new t(r,n,o,i,a,h,p):f>=6?new t(r,n,o,i,a,h):f>=5?new t(r,n,o,i,a):f>=4?new t(r,n,o,i):f>=3?new t(r,n,o):f>=2?new t(r,n):f>=1?new t(r instanceof t?+r:r):new t}else c=t.apply(this,arguments);return R(c)||C(c,{"constructor":e},!0),c},r=new RegExp("^(\\d{4}|[+-]\\d{6})(?:-(\\d{2})(?:-(\\d{2})(?:T(\\d{2}):(\\d{2})(?::(\\d{2})(?:(\\.\\d{1,}))?)?(Z|(?:([-+])(\\d{2}):(\\d{2})))?)?)?)?$"),n=[0,31,59,90,120,151,181,212,243,273,304,334,365],o=function(t,e){var r=e>1?1:0;return n[e]+Math.floor((t-1969+r)/4)-Math.floor((t-1901+r)/100)+Math.floor((t-1601+r)/400)+365*(t-1970)},i=function(e){var r=0,n=e;if(ne&&n>re){var o=Math.floor(n/re)*re,i=Math.floor(o/1e3);r+=i,n-=1e3*i}return l(new t(1970,0,1,0,0,r,n))};for(var a in t)J(t,a)&&(e[a]=t[a]);C(e,{"now":t.now,"UTC":t.UTC},!0),e.prototype=t.prototype,C(e.prototype,{"constructor":e},!0);return C(e,{"parse":function(e){var n=r.exec(e);if(n){var a,u=l(n[1]),s=l(n[2]||1)-1,c=l(n[3]||1)-1,f=l(n[4]||0),h=l(n[5]||0),p=l(n[6]||0),y=Math.floor(1e3*l(n[7]||0)),g=Boolean(n[4]&&!n[8]),d="-"===n[9]?1:-1,v=l(n[10]||0),b=l(n[11]||0);return f<(h>0||p>0||y>0?24:25)&&h<60&&p<60&&y<1e3&&s>-1&&s<12&&v<24&&b<60&&c>-1&&c<o(u,s+1)-o(u,s)&&(a=60*(24*(o(u,s)+c)+f+v*d),a=1e3*(60*(a+h+b*d)+p)+y,g&&(a=i(a)),-864e13<=a&&a<=864e13)?a:NaN}return t.parse.apply(this,arguments)}}),e}(Date)}Date.now||(Date.now=function(){return(new Date).getTime()});var oe=c.toFixed&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0)),ie={"base":1e7,"size":6,"data":[0,0,0,0,0,0],"multiply":function(t,e){for(var r=-1,n=e;++r<ie.size;)n+=t*ie.data[r],ie.data[r]=n%ie.base,n=Math.floor(n/ie.base)},"divide":function(t){for(var e=ie.size,r=0;--e>=0;)r+=ie.data[e],ie.data[e]=Math.floor(r/t),r=r%t*ie.base},"numToString":function(){for(var t=ie.size,e="";--t>=0;)if(""!==e||0===t||0!==ie.data[t]){var r=u(ie.data[t]);""===e?e=r:e+=Y("0000000",0,7-r.length)+r}return e},"pow":function me(t,e,r){return 0===e?r:e%2==1?me(t,e-1,r*t):me(t*t,e/2,r)},"log":function(t){for(var e=0,r=t;r>=4096;)e+=12,r/=4096;for(;r>=2;)e+=1,r/=2;return e}};C(c,{"toFixed":function(t){var e,r,n,o,i,a,s,c;if(e=l(t),(e=A(e)?0:Math.floor(e))<0||e>20)throw new RangeError("Number.toFixed called with invalid number of decimals");if(r=l(this),A(r))return"NaN";if(r<=-1e21||r>=1e21)return u(r);if(n="",r<0&&(n="-",r=-r),o="0",r>1e-21)if(i=ie.log(r*ie.pow(2,69,1))-69,a=i<0?r*ie.pow(2,-i,1):r/ie.pow(2,i,1),a*=4503599627370496,(i=52-i)>0){for(ie.multiply(0,a),s=e;s>=7;)ie.multiply(1e7,0),s-=7;for(ie.multiply(ie.pow(10,s,1),0),s=i-1;s>=23;)ie.divide(1<<23),s-=23;ie.divide(1<<s),ie.multiply(1,1),ie.divide(2),o=ie.numToString()}else ie.multiply(0,a),ie.multiply(1<<-i,0),o=ie.numToString()+Y("0.00000000000000000000",2,2+e);return o=e>0?(c=o.length)<=e?n+Y("0.0000000000000000000",0,e-c+2)+o:n+Y(o,0,c-e)+"."+Y(o,c-e):n+o}},oe);var ae=function(){try{return"1"===1..toPrecision(undefined)}catch(Te){return!0}}(),ue=c.toPrecision;C(c,{"toPrecision":function(t){return void 0===t?ue.call(this):ue.call(this,t)}},ae),2!=="ab".split(/(?:ab)*/).length||4!==".".split(/(.?)(.?)/).length||"t"==="tesst".split(/(s)*/)[1]||4!=="test".split(/(?:)/,-1).length||"".split(/.?/).length||".".split(/()()/).length>1?function(){var e="undefined"==typeof/()??/.exec("")[1],r=Math.pow(2,32)-1;s.split=function(n,o){var i=String(this);if(void 0===n&&0===o)return[];if(!t(n))return B(this,n,o);var a,u,s,l,c=[],f=(n.ignoreCase?"i":"")+(n.multiline?"m":"")+(n.unicode?"u":"")+(n.sticky?"y":""),h=0,y=new RegExp(n.source,f+"g");e||(a=new RegExp("^"+y.source+"$(?!\\s)",f));var g=void 0===o?r:$.ToUint32(o);for(u=y.exec(i);u&&!((s=u.index+u[0].length)>h&&(W(c,Y(i,h,u.index)),!e&&u.length>1&&u[0].replace(a,function(){for(var t=1;t<arguments.length-2;t++)"undefined"==typeof arguments[t]&&(u[t]=void 0)}),u.length>1&&u.index<i.length&&p.apply(c,z(u,1)),l=u[0].length,h=s,c.length>=g));)y.lastIndex===u.index&&y.lastIndex++,u=y.exec(i);return h===i.length?!l&&y.test("")||W(c,""):W(c,Y(i,h)),c.length>g?z(c,0,g):c}}():"0".split(void 0,0).length&&(s.split=function(t,e){return void 0===t&&0===e?[]:B(this,t,e)});var se=s.replace;(function(){var t=[];return"x".replace(/x(.)?/g,function(e,r){W(t,r)}),1===t.length&&"undefined"==typeof t[0]})()||(s.replace=function(e,r){var n=E(r),o=t(e)&&/\)[*?]/.test(e.source);if(n&&o){return se.call(this,e,function(t){var n=arguments.length,o=e.lastIndex;e.lastIndex=0;var i=e.exec(t)||[];return e.lastIndex=o,W(i,arguments[n-2],arguments[n-1]),r.apply(this,i)})}return se.call(this,e,r)});var le=s.substr,ce="".substr&&"b"!=="0b".substr(-1);C(s,{"substr":function(t,e){var r=t;return t<0&&(r=w(this.length+t,0)),le.call(this,r,e)}},ce);var fe="\t\n\x0B\f\r   ᠎             　\u2028\u2029\ufeff",he="["+fe+"]",pe=new RegExp("^"+he+he+"*"),ye=new RegExp(he+he+"*$"),ge=s.trim&&(fe.trim()||!"​".trim());C(s,{"trim":function(){if(void 0===this||null===this)throw new TypeError("can't convert "+this+" to object");return u(this).replace(pe,"").replace(ye,"")}},ge);var de=v.bind(String.prototype.trim),ve=s.lastIndexOf&&-1!=="abcあい".lastIndexOf("あい",2);C(s,{"lastIndexOf":function(t){if(void 0===this||null===this)throw new TypeError("can't convert "+this+" to object");for(var e=u(this),r=u(t),n=arguments.length>1?l(arguments[1]):NaN,o=A(n)?Infinity:$.ToInteger(n),i=T(w(o,0),e.length),a=r.length,s=i+a;s>0;){s=w(0,s-a);var c=H(Y(e,s,i+a),r);if(-1!==c)return s+c}return-1}},ve);var be=s.lastIndexOf;if(C(s,{"lastIndexOf":function(t){return be.apply(this,arguments)}},1!==s.lastIndexOf.length),8===parseInt(fe+"08")&&22===parseInt(fe+"0x16")||(parseInt=function(t){var e=/^[\-+]?0[xX]/;return function(r,n){var o=de(String(r)),i=l(n)||(e.test(o)?16:10);return t(o,i)}}(parseInt)),1/parseFloat("-0")!=-Infinity&&(parseFloat=function(t){return function(e){var r=de(String(e)),n=t(r);return 0===n&&"-"===Y(r,0,1)?-0:n}}(parseFloat)),"RangeError: test"!==String(new RangeError("test"))){Error.prototype.toString=function(){if(void 0===this||null===this)throw new TypeError("can't convert "+this+" to object");var t=this.name;void 0===t?t="Error":"string"!=typeof t&&(t=u(t));var e=this.message;return void 0===e?e="":"string"!=typeof e&&(e=u(e)),t?e?t+": "+e:t:e}}if(k){var we=function(t,e){if(L(t,e)){var r=Object.getOwnPropertyDescriptor(t,e);r.configurable&&(r.enumerable=!1,Object.defineProperty(t,e,r))}};we(Error.prototype,"message"),""!==Error.prototype.message&&(Error.prototype.message=""),we(Error.prototype,"name")}if("/a/gim"!==String(/a/gim)){RegExp.prototype.toString=function(){var t="/"+this.source+"/";return this.global&&(t+="g"),this.ignoreCase&&(t+="i"),this.multiline&&(t+="m"),t}}});!function(e,t){function n(e,t){var n=e.createElement("p"),r=e.getElementsByTagName("head")[0]||e.documentElement;return n.innerHTML="x<style>"+t+"</style>",r.insertBefore(n.lastChild,r.firstChild)}function r(){var e=p.elements;return"string"==typeof e?e.split(" "):e}function a(e){var t=g[e[h]];return t||(t={},f++,e[h]=f,g[f]=t),t}function c(e,n,r){if(n||(n=t),m)return n.createElement(e);r||(r=a(n));var c;return!(c=r.cache[e]?r.cache[e].cloneNode():d.test(e)?(r.cache[e]=r.createElem(e)).cloneNode():r.createElem(e)).canHaveChildren||u.test(e)||c.tagUrn?c:r.frag.appendChild(c)}function o(e,t){t.cache||(t.cache={},t.createElem=e.createElement,t.createFrag=e.createDocumentFragment,t.frag=t.createFrag()),e.createElement=function(n){return p.shivMethods?c(n,e,t):t.createElem(n)},e.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+r().join().replace(/[\w\-:]+/g,function(e){return t.createElem(e),t.frag.createElement(e),'c("'+e+'")'})+");return n}")(p,t.frag)}function i(e){e||(e=t);var r=a(e);return!p.shivCSS||l||r.hasCSS||(r.hasCSS=!!n(e,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),m||o(e,r),e}var l,m,s=e.html5||{},u=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,d=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,h="_html5shiv",f=0,g={};!function(){try{var e=t.createElement("a");e.innerHTML="<xyz></xyz>",l="hidden"in e,m=1==e.childNodes.length||function(){t.createElement("a");var e=t.createDocumentFragment();return"undefined"==typeof e.cloneNode||"undefined"==typeof e.createDocumentFragment||"undefined"==typeof e.createElement}()}catch(n){l=!0,m=!0}}();var p={"elements":s.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output picture progress section summary template time video","version":"3.7.2","shivCSS":!1!==s.shivCSS,"supportsUnknownElements":m,"shivMethods":!1!==s.shivMethods,"type":"default","shivDocument":i,"createElement":c,"createDocumentFragment":function(e,n){if(e||(e=t),m)return e.createDocumentFragment();for(var c=(n=n||a(e)).frag.cloneNode(),o=0,i=r(),l=i.length;l>o;o++)c.createElement(i[o]);return c},"addElements":function(e,t){var n=p.elements;"string"!=typeof n&&(n=n.join(" ")),"string"!=typeof e&&(e=e.join(" ")),p.elements=n+" "+e,i(t)}};e.html5=p,i(t)}(this,document);!function(t){function e(r,n){function o(t){if(o[t]!==g)return o[t];var e;if("bug-string-char-index"==t)e="a"!="a"[0];else if("json"==t)e=o("json-stringify")&&o("json-parse");else{var r;if("json-stringify"==t){var a="function"==typeof(e=n.stringify)&&j;if(a){(r=function(){return 1}).toJSON=r;try{a="0"===e(0)&&"0"===e(new c)&&'""'==e(new i)&&e(y)===g&&e(g)===g&&e()===g&&"1"===e(r)&&"[1]"==e([r])&&"[null]"==e([g])&&"null"==e(null)&&"[null,null,null]"==e([g,y,null])&&'{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}'==e({"a":[r,!0,!1,null,"\0\b\n\f\r\t"]})&&"1"===e(null,r)&&"[\n 1,\n 2\n]"==e([1,2],null,1)&&'"-271821-04-20T00:00:00.000Z"'==e(new l(-864e13))&&'"+275760-09-13T00:00:00.000Z"'==e(new l(864e13))&&'"-000001-01-01T00:00:00.000Z"'==e(new l(-621987552e5))&&'"1969-12-31T23:59:59.999Z"'==e(new l(-1))}catch(u){a=!1}}e=a}if("json-parse"==t){if("function"==typeof(e=n.parse))try{if(0===e("0")&&!e(!1)){var f=5==(r=e('{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}')).a.length&&1===r.a[0];if(f){try{f=!e('"\t"')}catch(s){}if(f)try{f=1!==e("01")}catch(h){}if(f)try{f=1!==e("1.")}catch(p){}}}}catch(b){f=!1}e=f}}return o[t]=!!e}r||(r=t.Object()),n||(n=t.Object());var c=r.Number||t.Number,i=r.String||t.String,a=r.Object||t.Object,l=r.Date||t.Date,f=r.SyntaxError||t.SyntaxError,u=r.TypeError||t.TypeError,s=r.Math||t.Math,h=r.JSON||t.JSON;"object"==typeof h&&h&&(n.stringify=h.stringify,n.parse=h.parse);var p,b,g,y=(a=a.prototype).toString,j=new l(-0xc782b5b800cec);try{j=-109252==j.getUTCFullYear()&&0===j.getUTCMonth()&&1===j.getUTCDate()&&10==j.getUTCHours()&&37==j.getUTCMinutes()&&6==j.getUTCSeconds()&&708==j.getUTCMilliseconds()}catch(D){}if(!o("json")){var d=o("bug-string-char-index");if(!j)var C=s.floor,v=[0,31,59,90,120,151,181,212,243,273,304,334],S=function(t,e){return v[e]+365*(t-1970)+C((t-1969+(e=+(1<e)))/4)-C((t-1901+e)/100)+C((t-1601+e)/400)};(p=a.hasOwnProperty)||(p=function(t){var e,r={};return(r.__proto__=null,r.__proto__={"toString":1},r).toString!=y?p=function(t){var e=this.__proto__;return t=t in(this.__proto__=null,this),this.__proto__=e,t}:(e=r.constructor,p=function(t){var r=(this.constructor||e).prototype;return t in this&&!(t in r&&this[t]===r[t])}),r=null,p.call(this,t)});var A={"boolean":1,"number":1,"string":1,"undefined":1};if(b=function(t,e){var r,n,o,c=0;(r=function(){this.valueOf=0}).prototype.valueOf=0,n=new r;for(o in n)p.call(n,o)&&c++;return r=n=null,c?b=2==c?function(t,e){var r,n={},o="[object Function]"==y.call(t);for(r in t)o&&"prototype"==r||p.call(n,r)||!(n[r]=1)||!p.call(t,r)||e(r)}:function(t,e){var r,n,o="[object Function]"==y.call(t);for(r in t)o&&"prototype"==r||!p.call(t,r)||(n="constructor"===r)||e(r);(n||p.call(t,r="constructor"))&&e(r)}:(n="valueOf toString toLocaleString propertyIsEnumerable isPrototypeOf hasOwnProperty constructor".split(" "),b=function(t,e){var r,o,c="[object Function]"==y.call(t);(o=!c)&&(o="function"!=typeof t.constructor)&&(o=typeof t.hasOwnProperty,o="object"==o?!!t.hasOwnProperty:!A[o]),o=o?t.hasOwnProperty:p;for(r in t)c&&"prototype"==r||!o.call(t,r)||e(r);for(c=n.length;r=n[--c];o.call(t,r)&&e(r));}),b(t,e)},!o("json-stringify")){var O={"92":"\\\\","34":'\\"',"8":"\\b","12":"\\f","10":"\\n","13":"\\r","9":"\\t"},T=function(t,e){return("000000"+(e||0)).slice(-t)},w=function(t){for(var e='"',r=0,n=t.length,o=!d||10<n,c=o&&(d?t.split(""):t);r<n;r++){var i=t.charCodeAt(r);switch(i){case 8:case 9:case 10:case 12:case 13:case 34:case 92:e+=O[i];break;default:if(32>i){e+="\\u00"+T(2,i.toString(16));break}e+=o?c[r]:t.charAt(r)}}return e+'"'},_=function(t,e,r,n,o,c,i){var a,l,f,s,h,j,d,v,A;try{a=e[t]}catch(M){}if("object"==typeof a&&a)if("[object Date]"!=(l=y.call(a))||p.call(a,"toJSON"))"function"==typeof a.toJSON&&("[object Number]"!=l&&"[object String]"!=l&&"[object Array]"!=l||p.call(a,"toJSON"))&&(a=a.toJSON(t));else if(a>-1/0&&a<1/0){if(S){for(s=C(a/864e5),l=C(s/365.2425)+1970-1;S(l+1,0)<=s;l++);for(f=C((s-S(l,0))/30.42);S(l,f+1)<=s;f++);s=1+s-S(l,f),j=C((h=(a%864e5+864e5)%864e5)/36e5)%24,d=C(h/6e4)%60,v=C(h/1e3)%60,h%=1e3}else l=a.getUTCFullYear(),f=a.getUTCMonth(),s=a.getUTCDate(),j=a.getUTCHours(),d=a.getUTCMinutes(),v=a.getUTCSeconds(),h=a.getUTCMilliseconds();a=(0>=l||1e4<=l?(0>l?"-":"+")+T(6,0>l?-l:l):T(4,l))+"-"+T(2,f+1)+"-"+T(2,s)+"T"+T(2,j)+":"+T(2,d)+":"+T(2,v)+"."+T(3,h)+"Z"}else a=null;if(r&&(a=r.call(e,t,a)),null===a)return"null";if("[object Boolean]"==(l=y.call(a)))return""+a;if("[object Number]"==l)return a>-1/0&&a<1/0?""+a:"null";if("[object String]"==l)return w(""+a);if("object"==typeof a){for(t=i.length;t--;)if(i[t]===a)throw u();if(i.push(a),A=[],e=c,c+=o,"[object Array]"==l){for(f=0,t=a.length;f<t;f++)l=_(f,a,r,n,o,c,i),A.push(l===g?"null":l);t=A.length?o?"[\n"+c+A.join(",\n"+c)+"\n"+e+"]":"["+A.join(",")+"]":"[]"}else b(n||a,function(t){var e=_(t,a,r,n,o,c,i);e!==g&&A.push(w(t)+":"+(o?" ":"")+e)}),t=A.length?o?"{\n"+c+A.join(",\n"+c)+"\n"+e+"}":"{"+A.join(",")+"}":"{}";return i.pop(),t}};n.stringify=function(t,e,r){var n,o,c,i;if("function"==typeof e||"object"==typeof e&&e)if("[object Function]"==(i=y.call(e)))o=e;else if("[object Array]"==i){c={};for(var a,l=0,f=e.length;l<f;a=e[l++],("[object String]"==(i=y.call(a))||"[object Number]"==i)&&(c[a]=1));}if(r)if("[object Number]"==(i=y.call(r))){if(0<(r-=r%1))for(n="",10<r&&(r=10);n.length<r;n+=" ");}else"[object String]"==i&&(n=10>=r.length?r:r.slice(0,10));return _("",(a={},a[""]=t,a),o,c,n,"",[])}}if(!o("json-parse")){var N,U,x=i.fromCharCode,J={"92":"\\","34":'"',"47":"/","98":"\b","116":"\t","110":"\n","102":"\f","114":"\r"},m=function(){throw N=U=null,f()},M=function(){for(var t,e,r,n,o,c=U,i=c.length;N<i;)switch(o=c.charCodeAt(N)){case 9:case 10:case 13:case 32:N++;break;case 123:case 125:case 91:case 93:case 58:case 44:return t=d?c.charAt(N):c[N],N++,t;case 34:for(t="@",N++;N<i;)if(32>(o=c.charCodeAt(N)))m();else if(92==o)switch(o=c.charCodeAt(++N)){case 92:case 34:case 47:case 98:case 116:case 110:case 102:case 114:t+=J[o],N++;break;case 117:for(e=++N,r=N+4;N<r;N++)48<=(o=c.charCodeAt(N))&&57>=o||97<=o&&102>=o||65<=o&&70>=o||m();t+=x("0x"+c.slice(e,N));break;default:m()}else{if(34==o)break;for(o=c.charCodeAt(N),e=N;32<=o&&92!=o&&34!=o;)o=c.charCodeAt(++N);t+=c.slice(e,N)}if(34==c.charCodeAt(N))return N++,t;m();default:if(e=N,45==o&&(n=!0,o=c.charCodeAt(++N)),48<=o&&57>=o){for(48==o&&48<=(o=c.charCodeAt(N+1))&&57>=o&&m();N<i&&48<=(o=c.charCodeAt(N))&&57>=o;N++);if(46==c.charCodeAt(N)){for(r=++N;r<i&&48<=(o=c.charCodeAt(r))&&57>=o;r++);r==N&&m(),N=r}if(101==(o=c.charCodeAt(N))||69==o){for(43!=(o=c.charCodeAt(++N))&&45!=o||N++,r=N;r<i&&48<=(o=c.charCodeAt(r))&&57>=o;r++);r==N&&m(),N=r}return+c.slice(e,N)}if(n&&m(),"true"==c.slice(N,N+4))return N+=4,!0;if("false"==c.slice(N,N+5))return N+=5,!1;if("null"==c.slice(N,N+4))return N+=4,null;m()}return"$"},F=function(t){var e,r;if("$"==t&&m(),"string"==typeof t){if("@"==(d?t.charAt(0):t[0]))return t.slice(1);if("["==t){for(e=[];"]"!=(t=M());r||(r=!0))r&&(","==t?"]"==(t=M())&&m():m()),","==t&&m(),e.push(F(t));return e}if("{"==t){for(e={};"}"!=(t=M());r||(r=!0))r&&(","==t?"}"==(t=M())&&m():m()),","!=t&&"string"==typeof t&&"@"==(d?t.charAt(0):t[0])&&":"==M()||m(),e[t.slice(1)]=F(M());return e}m()}return t},k=function(t,e,r){(r=P(t,e,r))===g?delete t[e]:t[e]=r},P=function(t,e,r){var n,o=t[e];if("object"==typeof o&&o)if("[object Array]"==y.call(o))for(n=o.length;n--;)k(o,n,r);else b(o,function(t){k(o,t,r)});return r.call(t,e,o)};n.parse=function(t,e){var r,n;return N=0,U=""+t,r=F(M()),"$"!=M()&&m(),N=U=null,e&&"[object Function]"==y.call(e)?P((n={},n[""]=r,n),"",e):r}}}return n.runInContext=e,n}var r="function"==typeof define&&define.amd,n="object"==typeof global&&global;if(!n||n.global!==n&&n.window!==n||(t=n),"object"!=typeof exports||!exports||exports.nodeType||r){var o=t.JSON,c=e(t,t.JSON3={"noConflict":function(){return t.JSON=o,c}});t.JSON={"parse":c.parse,"stringify":c.stringify}}else e(t,exports);r&&define(function(){return c})}(this);!function(e){"use strict";e.matchMedia=e.matchMedia||function(e){var t,n=e.documentElement,a=n.firstElementChild||n.firstChild,s=e.createElement("body"),i=e.createElement("div");return i.id="mq-test-1",i.style.cssText="position:absolute;top:-100em",s.style.background="none",s.appendChild(i),function(e){return i.innerHTML='&shy;<style media="'+e+'"> #mq-test-1 { width: 42px; }</style>',n.insertBefore(s,a),t=42===i.offsetWidth,n.removeChild(s),{"matches":t,"media":e}}}(e.document)}(this),function(e){"use strict";function t(){v(!0)}var n={};e.respond=n,n.update=function(){};var a=[],s=function(){var t=!1;try{t=new e.XMLHttpRequest}catch(n){t=new e.ActiveXObject("Microsoft.XMLHTTP")}return function(){return t}}(),i=function(e,t){var n=s();n&&(n.open("GET",e,!0),n.onreadystatechange=function(){4!==n.readyState||200!==n.status&&304!==n.status||t(n.responseText)},4!==n.readyState&&n.send(null))};if(n.ajax=i,n.queue=a,n.regex={"media":/@media[^\{]+\{([^\{\}]*\{[^\}\{]*\})+/gi,"keyframes":/@(?:\-(?:o|moz|webkit)\-)?keyframes[^\{]+\{(?:[^\{\}]*\{[^\}\{]*\})+[^\}]*\}/gi,"urls":/(url\()['"]?([^\/\)'"][^:\)'"]+)['"]?(\))/g,"findStyles":/@media *([^\{]+)\{([\S\s]+?)$/,"only":/(only\s+)?([a-zA-Z]+)\s?/,"minw":/\([\s]*min\-width\s*:[\s]*([\s]*[0-9\.]+)(px|em)[\s]*\)/,"maxw":/\([\s]*max\-width\s*:[\s]*([\s]*[0-9\.]+)(px|em)[\s]*\)/},n.mediaQueriesSupported=e.matchMedia&&null!==e.matchMedia("only all")&&e.matchMedia("only all").matches,!n.mediaQueriesSupported){var r,o,l,m=e.document,d=m.documentElement,h=[],u=[],c=[],f={},p=m.getElementsByTagName("head")[0]||d,y=m.getElementsByTagName("base")[0],g=p.getElementsByTagName("link"),x=function(){var e,t=m.createElement("div"),n=m.body,a=d.style.fontSize,s=n&&n.style.fontSize,i=!1;return t.style.cssText="position:absolute;font-size:1em;width:1em",n||(n=i=m.createElement("body"),n.style.background="none"),d.style.fontSize="100%",n.style.fontSize="100%",n.appendChild(t),i&&d.insertBefore(n,d.firstChild),e=t.offsetWidth,i?d.removeChild(n):n.removeChild(t),d.style.fontSize=a,s&&(n.style.fontSize=s),e=l=parseFloat(e)},v=function(t){var n="clientWidth",a=d[n],s="CSS1Compat"===m.compatMode&&a||m.body[n]||a,i={},f=g[g.length-1],y=(new Date).getTime();if(t&&r&&30>y-r)return e.clearTimeout(o),void(o=e.setTimeout(v,30));r=y;for(var E in h)if(h.hasOwnProperty(E)){var w=h[E],S=w.minw,T=w.maxw,C=null===S,b=null===T;S&&(S=parseFloat(S)*(S.indexOf("em")>-1?l||x():1)),T&&(T=parseFloat(T)*(T.indexOf("em")>-1?l||x():1)),w.hasquery&&(C&&b||!(C||s>=S)||!(b||T>=s))||(i[w.media]||(i[w.media]=[]),i[w.media].push(u[w.rules]))}for(var $ in c)c.hasOwnProperty($)&&c[$]&&c[$].parentNode===p&&p.removeChild(c[$]);c.length=0;for(var z in i)if(i.hasOwnProperty(z)){var M=m.createElement("style"),R=i[z].join("\n");M.type="text/css",M.media=z,p.insertBefore(M,f.nextSibling),M.styleSheet?M.styleSheet.cssText=R:M.appendChild(m.createTextNode(R)),c.push(M)}},E=function(e,t,a){var s=e.replace(n.regex.keyframes,"").match(n.regex.media),i=s&&s.length||0;t=t.substring(0,t.lastIndexOf("/"));var r=function(e){return e.replace(n.regex.urls,"$1"+t+"$2$3")},o=!i&&a;t.length&&(t+="/"),o&&(i=1);for(var l=0;i>l;l++){var m,d,c,f;o?(m=a,u.push(r(e))):(m=s[l].match(n.regex.findStyles)&&RegExp.$1,u.push(RegExp.$2&&r(RegExp.$2))),f=(c=m.split(",")).length;for(var p=0;f>p;p++)d=c[p],h.push({"media":d.split("(")[0].match(n.regex.only)&&RegExp.$2||"all","rules":u.length-1,"hasquery":d.indexOf("(")>-1,"minw":d.match(n.regex.minw)&&parseFloat(RegExp.$1)+(RegExp.$2||""),"maxw":d.match(n.regex.maxw)&&parseFloat(RegExp.$1)+(RegExp.$2||"")})}v()},w=function(){if(a.length){var t=a.shift();i(t.href,function(n){E(n,t.href,t.media),f[t.href]=!0,e.setTimeout(function(){w()},0)})}},S=function(){for(var t=0;t<g.length;t++){var n=g[t],s=n.href,i=n.media,r=n.rel&&"stylesheet"===n.rel.toLowerCase();s&&r&&!f[s]&&(n.styleSheet&&n.styleSheet.rawCssText?(E(n.styleSheet.rawCssText,s,i),f[s]=!0):(!/^([a-zA-Z:]*\/\/)/.test(s)&&!y||s.replace(RegExp.$1,"").split("/")[0]===e.location.host)&&("//"===s.substring(0,2)&&(s=e.location.protocol+s),a.push({"href":s,"media":i})))}w()};S(),n.update=S,n.getEmValue=x,e.addEventListener?e.addEventListener("resize",t,!1):e.attachEvent&&e.attachEvent("onresize",t)}}(this);