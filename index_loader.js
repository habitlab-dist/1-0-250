!function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(r,o,function(t){return e[t]}.bind(null,o));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=898)}({23:function(e,t,r){var n,o,a,i,d,s,l,u,c,f,g,p,y,b,h,m,_,v,I,S,E,x,j,N=void 0!==t&&t||this;n=r(59),o=r(3),a=o.gexport,i=o.gexport_module,null==("undefined"!=typeof chrome&&null!==chrome?null==(o=chrome.runtime)?void 0:o.getManifest:void 0)?(s="test",l=!1):(d=chrome.runtime.getManifest(),s=d.version.split(".").join("-"),l=null!=d.update_url||"true"===localStorage.getItem("devmode_use_cache")),u=null,c=function(){return null==u&&(u=l?n.createInstance({name:"localget"}):{setItem:async function(){},getItem:async function(){}}),u},f=null,g=function(){return null==f&&(f=n.createInstance({name:"remoteget"})),f},p=null,y=function(){return null==p&&(p=n.createInstance({name:"systemjsget"})),p},N.clear_cache_localget=b=async function(){var e;return e=c(),await e.clear()},N.clear_cache_remoteget=h=async function(){var e;return e=g(),await e.clear()},N.clear_cache_systemjs=m=async function(){var e;return e=y(),await e.clear()},N.localget=_=async function(e){var t,n,r;return t=c(),null!=(n=await t.getItem(e))?n:(r=await fetch(e),null!=(n=await r.text())&&await t.setItem(e,n),n)},N.localget_json=v=async function(e){var t;return null==(t=await _(e))?null:JSON.parse(t)},N.localget_base64=I=async function(e){var t;return null==(t=await _(e))?null:"data:text/plain;base64,"+btoa(unescape(encodeURIComponent(t)))},N.remoteget=S=async function(e){var t,n,r;return t=g(),null!=(n=await t.getItem(e))?n:(r=await fetch(e),null!=(n=await r.text())&&await t.setItem(e,n),n)},N.remoteget_json=E=async function(e){var t;return null==(t=await S(e))?null:JSON.parse(t)},N.remoteget_base64=x=async function(e){var t;return null==(t=await S(e))?null:"data:text/plain;base64,"+btoa(unescape(encodeURIComponent(t)))},N.systemjsget=j=async function(e){var t,n,r;return l?(t=y(),e=e.replace(chrome.extension.getURL("/"),""),null!=(n=await t.getItem(e))?n:(r=await fetch("https://habitlab-dist.github.io/"+s+"/"+e),null!=(n=await r.text())&&await t.setItem(e,n),n)):(e=e.replace(chrome.extension.getURL("/"),""),await fetch(chrome.extension.getURL("/"+e)).then(function(e){return e.text()}))},i("cacheget_utils",function(e){return eval(e)})},29:function(e){var t=function(){return this}();try{t=t||Function("return this")()||(0,eval)("this")}catch(e){"object"==typeof window&&(t=window)}e.exports=t},3:function(e,t){var n=void 0!==t&&t||this;n.gexport=function(e){var t,n;if(null!=window.global_exports)for(t in e)n=e[t],window.global_exports[t]=n;else console.log("calling gexport but global_exports is not defined")},n.gexport_module=function(e,t){if(null!=window.global_exports)return window.global_exports["eval_"+e]=t,null==window.global_exports.gexport_eval_funcs&&(window.global_exports.gexport_eval_funcs={}),window.global_exports.gexport_eval_funcs[e]=t}},59:function(e,t,n){(function(t){var n;!function(t){e.exports=t()}(function(){return function e(t,r,o){function i(u,c){if(!r[u]){if(!t[u]){if(!c&&"function"==typeof n&&n)return n(u,!0);if(a)return a(u,!0);var s=new Error("Cannot find module '"+u+"'");throw s.code="MODULE_NOT_FOUND",s}var f=r[u]={exports:{}};t[u][0].call(f.exports,function(e){var n=t[u][1][e];return i(n||e)},f,f.exports,e,t,r,o)}return r[u].exports}for(var a="function"==typeof n&&n,u=0;u<o.length;u++)i(o[u]);return i}({1:[function(e,t,n){"use strict";function r(){}function o(e){if("function"!=typeof e)throw new TypeError("resolver must be a function");this.state=h,this.queue=[],this.outcome=void 0,e!==r&&c(this,e)}function i(e,t,n){this.promise=e,"function"==typeof t&&(this.onFulfilled=t,this.callFulfilled=this.otherCallFulfilled),"function"==typeof n&&(this.onRejected=n,this.callRejected=this.otherCallRejected)}function a(e,t,n){f(function(){var r;try{r=t(n)}catch(t){return l.reject(e,t)}r===e?l.reject(e,new TypeError("Cannot resolve promise with itself")):l.resolve(e,r)})}function u(e){var t=e&&e.then;if(e&&"object"==typeof e&&"function"==typeof t)return function(){t.apply(e,arguments)}}function c(e,t){function n(t){o||(o=!0,l.reject(e,t))}function r(t){o||(o=!0,l.resolve(e,t))}var o=!1,i=s(function(){t(r,n)});"error"===i.status&&n(i.value)}function s(e,t){var n={};try{n.value=e(t),n.status="success"}catch(t){n.status="error",n.value=t}return n}var f=e(2),l={},d=["REJECTED"],v=["FULFILLED"],h=["PENDING"];t.exports=n=o,o.prototype.catch=function(e){return this.then(null,e)},o.prototype.then=function(e,t){if("function"!=typeof e&&this.state===v||"function"!=typeof t&&this.state===d)return this;var n=new this.constructor(r);this.state!==h?a(n,this.state===v?e:t,this.outcome):this.queue.push(new i(n,e,t));return n},i.prototype.callFulfilled=function(e){l.resolve(this.promise,e)},i.prototype.otherCallFulfilled=function(e){a(this.promise,this.onFulfilled,e)},i.prototype.callRejected=function(e){l.reject(this.promise,e)},i.prototype.otherCallRejected=function(e){a(this.promise,this.onRejected,e)},l.resolve=function(e,t){var n=s(u,t);if("error"===n.status)return l.reject(e,n.value);var r=n.value;if(r)c(e,r);else{e.state=v,e.outcome=t;for(var o=-1,i=e.queue.length;++o<i;)e.queue[o].callFulfilled(t)}return e},l.reject=function(e,t){e.state=d,e.outcome=t;for(var n=-1,r=e.queue.length;++n<r;)e.queue[n].callRejected(t);return e},n.resolve=function(e){return e instanceof this?e:l.resolve(new this(r),e)},n.reject=function(e){var t=new this(r);return l.reject(t,e)},n.all=function(e){function t(e,t){n.resolve(e).then(function(e){a[t]=e,++u!==o||i||(i=!0,l.resolve(s,a))},function(e){i||(i=!0,l.reject(s,e))})}var n=this;if("[object Array]"!==Object.prototype.toString.call(e))return this.reject(new TypeError("must be an array"));var o=e.length,i=!1;if(!o)return this.resolve([]);for(var a=Array(o),u=0,c=-1,s=new this(r);++c<o;)t(e[c],c);return s},n.race=function(e){function t(e){n.resolve(e).then(function(e){i||(i=!0,l.resolve(u,e))},function(e){i||(i=!0,l.reject(u,e))})}var n=this;if("[object Array]"!==Object.prototype.toString.call(e))return this.reject(new TypeError("must be an array"));var o=e.length,i=!1;if(!o)return this.resolve([]);for(var a=-1,u=new this(r);++a<o;)t(e[a]);return u}},{2:2}],2:[function(e,n){(function(e){"use strict";function t(){s=!0;for(var e,t,n=f.length;n;){for(t=f,f=[],e=-1;++e<n;)t[e]();n=f.length}s=!1}var r,o=e.MutationObserver||e.WebKitMutationObserver;if(o){var i=0,a=new o(t),u=e.document.createTextNode("");a.observe(u,{characterData:!0}),r=function(){u.data=i=++i%2}}else if(e.setImmediate||void 0===e.MessageChannel)r="document"in e&&"onreadystatechange"in e.document.createElement("script")?function(){var n=e.document.createElement("script");n.onreadystatechange=function(){t(),n.onreadystatechange=null,n.parentNode.removeChild(n),n=null},e.document.documentElement.appendChild(n)}:function(){setTimeout(t,0)};else{var c=new e.MessageChannel;c.port1.onmessage=t,r=function(){c.port2.postMessage(0)}}var s,f=[];n.exports=function(e){1!==f.push(e)||s||r()}}).call(this,void 0===t?"undefined"==typeof self?"undefined"==typeof window?{}:window:self:t)},{}],3:[function(e){(function(t){"use strict";"function"!=typeof t.Promise&&(t.Promise=e(1))}).call(this,void 0===t?"undefined"==typeof self?"undefined"==typeof window?{}:window:self:t)},{1:1}],4:[function(e,t){"use strict";function n(e,t){e=e||[],t=t||{};try{return new Blob(e,t)}catch(o){if("TypeError"!==o.name)throw o;for(var n=new("undefined"==typeof BlobBuilder?"undefined"==typeof MSBlobBuilder?"undefined"==typeof MozBlobBuilder?WebKitBlobBuilder:MozBlobBuilder:MSBlobBuilder:BlobBuilder),r=0;r<e.length;r+=1)n.append(e[r]);return n.getBlob(t.type)}}function r(e,t){t&&e.then(function(e){t(null,e)},function(e){t(e)})}function o(e,t,n){"function"==typeof t&&e.then(t),"function"==typeof n&&e.catch(n)}function i(e){return"boolean"==typeof g?m.resolve(g):function(e){return new m(function(t){var r=n([""]);e.objectStore(_).put(r,"key"),e.onabort=function(e){e.preventDefault(),e.stopPropagation(),t(!1)},e.oncomplete=function(){var e=navigator.userAgent.match(/Chrome\/(\d+)/),n=navigator.userAgent.match(/Edge\//);t(n||!e||43<=parseInt(e[1],10))}}).catch(function(){return!1})}(e).then(function(e){return g=e})}function a(e,t){return new m(function(n,r){if(e.db){if(!t)return n(e.db);(function(e){var t=b[e.name],n={};n.promise=new m(function(e){n.resolve=e}),t.deferredOperations.push(n),t.dbReady=t.dbReady?t.dbReady.then(function(){return n.promise}):n.promise})(e),e.db.close()}var o=[e.name];t&&o.push(e.version);var i=p.open.apply(p,o);t&&(i.onupgradeneeded=function(t){var n=i.result;try{n.createObjectStore(e.storeName),1>=t.oldVersion&&n.createObjectStore(_)}catch(n){if("ConstraintError"!==n.name)throw n;console.warn('The database "'+e.name+'" has been upgraded from version '+t.oldVersion+" to version "+t.newVersion+', but the storage "'+e.storeName+'" already exists.')}}),i.onerror=function(){r(i.error)},i.onsuccess=function(){n(i.result),function(e){var t=b[e.name].deferredOperations.pop();t&&t.resolve()}(e)}})}function u(e){var t=function(e){for(var t=e.length,n=new ArrayBuffer(t),r=new Uint8Array(n),o=0;o<t;o++)r[o]=e.charCodeAt(o);return n}(atob(e.data));return n([t],{type:e.type})}function c(e){return e&&e.__local_forage_encoded_blob}function s(e){var t=this,n=t._initReady().then(function(){var e=b[t._dbInfo.name];if(e&&e.dbReady)return e.dbReady});return o(n,e,e),n}function f(e){var t,n,r,o,i,a=.75*e.length,u=e.length,c=0;"="===e[e.length-1]&&(a--,"="===e[e.length-2]&&a--);var s=new ArrayBuffer(a),f=new Uint8Array(s);for(t=0;t<u;t+=4)n=I.indexOf(e[t]),r=I.indexOf(e[t+1]),o=I.indexOf(e[t+2]),i=I.indexOf(e[t+3]),f[c++]=n<<2|r>>4,f[c++]=(15&r)<<4|o>>2,f[c++]=(3&o)<<6|63&i;return s}function l(e){var t,n=new Uint8Array(e),r="";for(t=0;t<n.length;t+=3)r+=I[n[t]>>2],r+=I[(3&n[t])<<4|n[t+1]>>4],r+=I[(15&n[t+1])<<2|n[t+2]>>6],r+=I[63&n[t+2]];return 2==n.length%3?r=r.substring(0,r.length-1)+"=":1==n.length%3&&(r=r.substring(0,r.length-2)+"=="),r}function d(e,t){e[t]=function(){var n=arguments;return e.ready().then(function(){return e[t].apply(e,n)})}}function v(){for(var e,t=1;t<arguments.length;t++)if(e=arguments[t])for(var n in e)e.hasOwnProperty(n)&&(arguments[0][n]=H(e[n])?e[n].slice():e[n]);return arguments[0]}function h(e){for(var t in Q)if(Q.hasOwnProperty(t)&&Q[t]===e)return!0;return!1}var y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},p=function(){try{if("undefined"!=typeof indexedDB)return indexedDB;if("undefined"!=typeof webkitIndexedDB)return webkitIndexedDB;if("undefined"!=typeof mozIndexedDB)return mozIndexedDB;if("undefined"!=typeof OIndexedDB)return OIndexedDB;if("undefined"!=typeof msIndexedDB)return msIndexedDB}catch(e){}}();"undefined"==typeof Promise&&void 0!==e&&e(3);var g,b,m=Promise,_="local-forage-detect-blob-support",w=Object.prototype.toString,S={_driver:"asyncStorage",_initStorage:function(e){function t(){return m.resolve()}var n=this,r={db:null};if(e)for(var o in e)r[o]=e[o];b||(b={});var i=b[r.name];i||(i={forages:[],db:null,dbReady:null,deferredOperations:[]},b[r.name]=i),i.forages.push(n),n._initReady||(n._initReady=n.ready,n.ready=s);for(var u,c=[],f=0;f<i.forages.length;f++)(u=i.forages[f])!==n&&c.push(u._initReady().catch(t));var l=i.forages.slice(0);return m.all(c).then(function(){return r.db=i.db,function(e){return a(e,!1)}(r)}).then(function(e){return r.db=e,function(e,t){if(!e.db)return!0;var n=!e.db.objectStoreNames.contains(e.storeName),r=e.version<e.db.version,o=e.version>e.db.version;if(r&&(e.version!==t&&console.warn('The database "'+e.name+"\" can't be downgraded from version "+e.db.version+" to version "+e.version+"."),e.version=e.db.version),o||n){if(n){var i=e.db.version+1;i>e.version&&(e.version=i)}return!0}return!1}(r,n._defaultConfig.version)?function(e){return a(e,!0)}(r):e}).then(function(e){r.db=i.db=e,n._dbInfo=r;for(var t,o=0;o<l.length;o++)(t=l[o])!==n&&(t._dbInfo.db=r.db,t._dbInfo.version=r.version)})},iterate:function(e,t){var n=this,o=new m(function(t,r){n.ready().then(function(){var o=n._dbInfo,i=o.db.transaction(o.storeName,"readonly").objectStore(o.storeName).openCursor(),a=1;i.onsuccess=function(){var n=i.result;if(n){var r=n.value;c(r)&&(r=u(r));var o=e(r,n.key,a++);void 0===o?n.continue():t(o)}else t()},i.onerror=function(){r(i.error)}}).catch(r)});return r(o,t),o},getItem:function(e,t){var n=this;"string"!=typeof e&&(console.warn(e+" used as a key, but it is not a string."),e+="");var o=new m(function(t,r){n.ready().then(function(){var o=n._dbInfo,i=o.db.transaction(o.storeName,"readonly").objectStore(o.storeName).get(e);i.onsuccess=function(){var e=i.result;void 0===e&&(e=null),c(e)&&(e=u(e)),t(e)},i.onerror=function(){r(i.error)}}).catch(r)});return r(o,t),o},setItem:function(e,t,n){var o=this;"string"!=typeof e&&(console.warn(e+" used as a key, but it is not a string."),e+="");var a=new m(function(n,r){var a;o.ready().then(function(){return a=o._dbInfo,"[object Blob]"===w.call(t)?i(a.db).then(function(e){return e?t:function(e){return new m(function(t,n){var r=new FileReader;r.onerror=n,r.onloadend=function(n){var r=btoa(n.target.result||"");t({__local_forage_encoded_blob:!0,data:r,type:e.type})},r.readAsBinaryString(e)})}(t)}):t}).then(function(t){var o=a.db.transaction(a.storeName,"readwrite"),i=o.objectStore(a.storeName);null===t&&(t=void 0),o.oncomplete=function(){void 0===t&&(t=null),n(t)},o.onabort=o.onerror=function(){var e=u.error?u.error:u.transaction.error;r(e)};var u=i.put(t,e)}).catch(r)});return r(a,n),a},removeItem:function(e,t){var n=this;"string"!=typeof e&&(console.warn(e+" used as a key, but it is not a string."),e+="");var o=new m(function(t,r){n.ready().then(function(){var o=n._dbInfo,i=o.db.transaction(o.storeName,"readwrite"),a=i.objectStore(o.storeName).delete(e);i.oncomplete=function(){t()},i.onerror=function(){r(a.error)},i.onabort=function(){var e=a.error?a.error:a.transaction.error;r(e)}}).catch(r)});return r(o,t),o},clear:function(e){var t=this,n=new m(function(e,n){t.ready().then(function(){var r=t._dbInfo,o=r.db.transaction(r.storeName,"readwrite"),i=o.objectStore(r.storeName).clear();o.oncomplete=function(){e()},o.onabort=o.onerror=function(){var e=i.error?i.error:i.transaction.error;n(e)}}).catch(n)});return r(n,e),n},length:function(e){var t=this,n=new m(function(e,n){t.ready().then(function(){var r=t._dbInfo,o=r.db.transaction(r.storeName,"readonly").objectStore(r.storeName).count();o.onsuccess=function(){e(o.result)},o.onerror=function(){n(o.error)}}).catch(n)});return r(n,e),n},key:function(e,t){var n=this,o=new m(function(t,r){return 0>e?void t(null):void n.ready().then(function(){var o=n._dbInfo,i=!1,a=o.db.transaction(o.storeName,"readonly").objectStore(o.storeName).openCursor();a.onsuccess=function(){var n=a.result;return n?void(0===e?t(n.key):i?t(n.key):(i=!0,n.advance(e))):void t(null)},a.onerror=function(){r(a.error)}}).catch(r)});return r(o,t),o},keys:function(e){var t=this,n=new m(function(e,n){t.ready().then(function(){var r=t._dbInfo,o=r.db.transaction(r.storeName,"readonly").objectStore(r.storeName).openCursor(),i=[];o.onsuccess=function(){var t=o.result;return t?(i.push(t.key),void t.continue()):void e(i)},o.onerror=function(){n(o.error)}}).catch(n)});return r(n,e),n}},I="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",E=/^~~local_forage_type~([^~]+)~/,x="__lfsc__:",j=x.length,N="arbf",O="blob",A="si08",R="ui08",D="uic8",k="si16",B="si32",C="ur16",L="ui32",T="fl32",M="fl64",F=j+N.length,P=Object.prototype.toString,U={serialize:function(e,t){var n="";if(e&&(n=P.call(e)),e&&("[object ArrayBuffer]"===n||e.buffer&&"[object ArrayBuffer]"===P.call(e.buffer))){var r,o=x;e instanceof ArrayBuffer?(r=e,o+=N):(r=e.buffer,"[object Int8Array]"===n?o+=A:"[object Uint8Array]"===n?o+=R:"[object Uint8ClampedArray]"===n?o+=D:"[object Int16Array]"===n?o+=k:"[object Uint16Array]"===n?o+=C:"[object Int32Array]"===n?o+=B:"[object Uint32Array]"===n?o+=L:"[object Float32Array]"===n?o+=T:"[object Float64Array]"===n?o+=M:t(new Error("Failed to get type for BinaryArray"))),t(o+l(r))}else if("[object Blob]"===n){var i=new FileReader;i.onload=function(){var n="~~local_forage_type~"+e.type+"~"+l(this.result);t(x+O+n)},i.readAsArrayBuffer(e)}else try{t(JSON.stringify(e))}catch(r){console.error("Couldn't convert value into a JSON string: ",e),t(null,r)}},deserialize:function(e){if(e.substring(0,j)!==x)return JSON.parse(e);var t,r=e.substring(F),o=e.substring(j,F);if(o===O&&E.test(r)){var i=r.match(E);t=i[1],r=r.substring(i[0].length)}var a=f(r);switch(o){case N:return a;case O:return n([a],{type:t});case A:return new Int8Array(a);case R:return new Uint8Array(a);case D:return new Uint8ClampedArray(a);case k:return new Int16Array(a);case C:return new Uint16Array(a);case B:return new Int32Array(a);case L:return new Uint32Array(a);case T:return new Float32Array(a);case M:return new Float64Array(a);default:throw new Error("Unkown type: "+o)}},stringToBuffer:f,bufferToString:l},z={_driver:"webSQLStorage",_initStorage:function(e){var t=this,n={db:null};if(e)for(var r in e)n[r]="string"==typeof e[r]?e[r]:e[r].toString();var o=new m(function(e,r){try{n.db=openDatabase(n.name,n.version+"",n.description,n.size)}catch(e){return r(e)}n.db.transaction(function(o){o.executeSql("CREATE TABLE IF NOT EXISTS "+n.storeName+" (id INTEGER PRIMARY KEY, key unique, value)",[],function(){t._dbInfo=n,e()},function(e,t){r(t)})})});return n.serializer=U,o},iterate:function(e,t){var n=this,o=new m(function(t,r){n.ready().then(function(){var o=n._dbInfo;o.db.transaction(function(n){n.executeSql("SELECT * FROM "+o.storeName,[],function(n,r){for(var i=r.rows,a=i.length,u=0;u<a;u++){var c=i.item(u),s=c.value;if(s&&(s=o.serializer.deserialize(s)),void 0!==(s=e(s,c.key,u+1)))return void t(s)}t()},function(e,t){r(t)})})}).catch(r)});return r(o,t),o},getItem:function(e,t){var n=this;"string"!=typeof e&&(console.warn(e+" used as a key, but it is not a string."),e+="");var o=new m(function(t,r){n.ready().then(function(){var o=n._dbInfo;o.db.transaction(function(n){n.executeSql("SELECT * FROM "+o.storeName+" WHERE key = ? LIMIT 1",[e],function(e,n){var r=n.rows.length?n.rows.item(0).value:null;r&&(r=o.serializer.deserialize(r)),t(r)},function(e,t){r(t)})})}).catch(r)});return r(o,t),o},setItem:function(e,t,n){var o=this;"string"!=typeof e&&(console.warn(e+" used as a key, but it is not a string."),e+="");var i=new m(function(n,r){o.ready().then(function(){void 0===t&&(t=null);var i=t,a=o._dbInfo;a.serializer.serialize(t,function(t,o){o?r(o):a.db.transaction(function(o){o.executeSql("INSERT OR REPLACE INTO "+a.storeName+" (key, value) VALUES (?, ?)",[e,t],function(){n(i)},function(e,t){r(t)})},function(e){e.code===e.QUOTA_ERR&&r(e)})})}).catch(r)});return r(i,n),i},removeItem:function(e,t){var n=this;"string"!=typeof e&&(console.warn(e+" used as a key, but it is not a string."),e+="");var o=new m(function(t,r){n.ready().then(function(){var o=n._dbInfo;o.db.transaction(function(n){n.executeSql("DELETE FROM "+o.storeName+" WHERE key = ?",[e],function(){t()},function(e,t){r(t)})})}).catch(r)});return r(o,t),o},clear:function(e){var t=this,n=new m(function(e,n){t.ready().then(function(){var r=t._dbInfo;r.db.transaction(function(t){t.executeSql("DELETE FROM "+r.storeName,[],function(){e()},function(e,t){n(t)})})}).catch(n)});return r(n,e),n},length:function(e){var t=this,n=new m(function(e,n){t.ready().then(function(){var r=t._dbInfo;r.db.transaction(function(t){t.executeSql("SELECT COUNT(key) as c FROM "+r.storeName,[],function(t,n){var r=n.rows.item(0).c;e(r)},function(e,t){n(t)})})}).catch(n)});return r(n,e),n},key:function(e,t){var n=this,o=new m(function(t,r){n.ready().then(function(){var o=n._dbInfo;o.db.transaction(function(n){n.executeSql("SELECT key FROM "+o.storeName+" WHERE id = ? LIMIT 1",[e+1],function(e,n){var r=n.rows.length?n.rows.item(0).key:null;t(r)},function(e,t){r(t)})})}).catch(r)});return r(o,t),o},keys:function(e){var t=this,n=new m(function(e,n){t.ready().then(function(){var r=t._dbInfo;r.db.transaction(function(t){t.executeSql("SELECT key FROM "+r.storeName,[],function(t,n){for(var r=[],o=0;o<n.rows.length;o++)r.push(n.rows.item(o).key);e(r)},function(e,t){n(t)})})}).catch(n)});return r(n,e),n}},W={_driver:"localStorageWrapper",_initStorage:function(e){var t={};if(e)for(var n in e)t[n]=e[n];return t.keyPrefix=t.name+"/",t.storeName!==this._defaultConfig.storeName&&(t.keyPrefix+=t.storeName+"/"),this._dbInfo=t,t.serializer=U,m.resolve()},iterate:function(e,t){var n=this,o=n.ready().then(function(){for(var t,r=n._dbInfo,o=r.keyPrefix,i=o.length,a=localStorage.length,u=1,c=0;c<a;c++)if(0===(t=localStorage.key(c)).indexOf(o)){var s=localStorage.getItem(t);if(s&&(s=r.serializer.deserialize(s)),void 0!==(s=e(s,t.substring(i),u++)))return s}});return r(o,t),o},getItem:function(e,t){var n=this;"string"!=typeof e&&(console.warn(e+" used as a key, but it is not a string."),e+="");var o=n.ready().then(function(){var t=n._dbInfo,r=localStorage.getItem(t.keyPrefix+e);return r&&(r=t.serializer.deserialize(r)),r});return r(o,t),o},setItem:function(e,t,n){var o=this;"string"!=typeof e&&(console.warn(e+" used as a key, but it is not a string."),e+="");var i=o.ready().then(function(){void 0===t&&(t=null);var n=t;return new m(function(r,i){var a=o._dbInfo;a.serializer.serialize(t,function(t,o){if(o)i(o);else try{localStorage.setItem(a.keyPrefix+e,t),r(n)}catch(t){("QuotaExceededError"===t.name||"NS_ERROR_DOM_QUOTA_REACHED"===t.name)&&i(t),i(t)}})})});return r(i,n),i},removeItem:function(e,t){var n=this;"string"!=typeof e&&(console.warn(e+" used as a key, but it is not a string."),e+="");var o=n.ready().then(function(){var t=n._dbInfo;localStorage.removeItem(t.keyPrefix+e)});return r(o,t),o},clear:function(e){var t=this,n=t.ready().then(function(){for(var e,n=t._dbInfo.keyPrefix,r=localStorage.length-1;0<=r;r--)0===(e=localStorage.key(r)).indexOf(n)&&localStorage.removeItem(e)});return r(n,e),n},length:function(e){var t=this.keys().then(function(e){return e.length});return r(t,e),t},key:function(e,t){var n=this,o=n.ready().then(function(){var t,r=n._dbInfo;try{t=localStorage.key(e)}catch(e){t=null}return t&&(t=t.substring(r.keyPrefix.length)),t});return r(o,t),o},keys:function(e){var t=this,n=t.ready().then(function(){for(var e=t._dbInfo,n=localStorage.length,r=[],o=0;o<n;o++)0===localStorage.key(o).indexOf(e.keyPrefix)&&r.push(localStorage.key(o).substring(e.keyPrefix.length));return r});return r(n,e),n}},q={},Q={INDEXEDDB:"asyncStorage",LOCALSTORAGE:"localStorageWrapper",WEBSQL:"webSQLStorage"},G=["clear","getItem","iterate","key","keys","length","removeItem","setItem"],X={description:"",driver:[Q.INDEXEDDB,Q.WEBSQL,Q.LOCALSTORAGE].slice(),name:"localforage",size:4980736,storeName:"keyvaluepairs",version:1},J={};J[Q.INDEXEDDB]=function(){try{return!!p&&!("undefined"!=typeof openDatabase&&"undefined"!=typeof navigator&&navigator.userAgent&&/Safari/.test(navigator.userAgent)&&!/Chrome/.test(navigator.userAgent))&&p&&"function"==typeof p.open&&"undefined"!=typeof IDBKeyRange}catch(e){return!1}}(),J[Q.WEBSQL]="function"==typeof openDatabase,J[Q.LOCALSTORAGE]=function(){try{return"undefined"!=typeof localStorage&&"setItem"in localStorage&&localStorage.setItem}catch(e){return!1}}();var H=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)},K=new(function(){function e(t){(function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")})(this,e),this.INDEXEDDB=Q.INDEXEDDB,this.LOCALSTORAGE=Q.LOCALSTORAGE,this.WEBSQL=Q.WEBSQL,this._defaultConfig=v({},X),this._config=v({},this._defaultConfig,t),this._driverSet=null,this._initDriver=null,this._ready=!1,this._dbInfo=null,this._wrapLibraryMethodsWithReady(),this.setDriver(this._config.driver)}return e.prototype.config=function(e){if("object"===(void 0===e?"undefined":y(e))){if(this._ready)return new Error("Can't call config() after localforage has been used.");for(var t in e)"storeName"==t&&(e[t]=e[t].replace(/\W/g,"_")),this._config[t]=e[t];return"driver"in e&&e.driver&&this.setDriver(this._config.driver),!0}return"string"==typeof e?this._config[e]:this._config},e.prototype.defineDriver=function(e,t,n){var r=new m(function(t,n){try{var r=e._driver,o=new Error("Custom driver not compliant; see https://mozilla.github.io/localForage/#definedriver"),i=new Error("Custom driver name already in use: "+e._driver);if(!e._driver)return void n(o);if(h(e._driver))return void n(i);for(var a,u=G.concat("_initStorage"),c=0;c<u.length;c++)if(!(a=u[c])||!e[a]||"function"!=typeof e[a])return void n(o);var s=m.resolve(!0);"_support"in e&&(s=e._support&&"function"==typeof e._support?e._support():m.resolve(!!e._support)),s.then(function(n){J[r]=n,q[r]=e,t()},n)}catch(t){n(t)}});return o(r,t,n),r},e.prototype.driver=function(){return this._driver||null},e.prototype.getDriver=function(e,t,n){var r=this,i=m.resolve().then(function(){if(!h(e)){if(q[e])return q[e];throw new Error("Driver not found.")}switch(e){case r.INDEXEDDB:return S;case r.LOCALSTORAGE:return W;case r.WEBSQL:return z}});return o(i,t,n),i},e.prototype.getSerializer=function(e){var t=m.resolve(U);return o(t,e),t},e.prototype.ready=function(e){var t=this,n=t._driverSet.then(function(){return null===t._ready&&(t._ready=t._initDriver()),t._ready});return o(n,e,e),n},e.prototype.setDriver=function(e,t,n){function r(){i._config.driver=i.driver()}var i=this;H(e)||(e=[e]);var a=this._getSupportedDrivers(e),u=null===this._driverSet?m.resolve():this._driverSet.catch(function(){return m.resolve()});return this._driverSet=u.then(function(){var e=a[0];return i._dbInfo=null,i._ready=null,i.getDriver(e).then(function(e){i._driver=e._driver,r(),i._wrapLibraryMethodsWithReady(),i._initDriver=function(e){return function(){var t=0;return function n(){for(;t<e.length;){var o=e[t];return t++,i._dbInfo=null,i._ready=null,i.getDriver(o).then(function(e){return i._extend(e),r(),i._ready=i._initStorage(i._config),i._ready}).catch(n)}r();var a=new Error("No available storage method found.");return i._driverSet=m.reject(a),i._driverSet}()}}(a)})}).catch(function(){r();var e=new Error("No available storage method found.");return i._driverSet=m.reject(e),i._driverSet}),o(this._driverSet,t,n),this._driverSet},e.prototype.supports=function(e){return!!J[e]},e.prototype._extend=function(e){v(this,e)},e.prototype._getSupportedDrivers=function(e){for(var t,n=[],r=0,o=e.length;r<o;r++)t=e[r],this.supports(t)&&n.push(t);return n},e.prototype._wrapLibraryMethodsWithReady=function(){for(var e=0;e<G.length;e++)d(this,G[e])},e.prototype.createInstance=function(t){return new e(t)},e}());t.exports=K},{3:3}]},{},[4])(4)})}).call(this,n(29))},898:function(e,t,n){e.exports=n(899)},899:function(e,t,r){!function(){var{systemjsget:e}=r(23),t=setTimeout(function(){if(null!=t){var e=document.createElement("img");e.setAttribute("src",chrome.extension.getURL("/icons/spinner.svg")),e.setAttribute("id","loadingspinner"),e.style.width="100vw",e.style.height="100vh",document.body.style.overflow="hidden",document.body.appendChild(e)}},500);e("index.js").then(function(e){clearTimeout(t),t=null;var r=document.getElementById("loadingspinner");null!=r&&(r.remove(),document.body.style.overflow=""),eval(e)})}()}});