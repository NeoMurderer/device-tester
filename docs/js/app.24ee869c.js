(function(e){function t(t){for(var a,s,c=t[0],i=t[1],l=t[2],u=0,d=[];u<c.length;u++)s=c[u],o[s]&&d.push(o[s][0]),o[s]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a]);v&&v(t);while(d.length)d.shift()();return n.push.apply(n,l||[]),r()}function r(){for(var e,t=0;t<n.length;t++){for(var r=n[t],a=!0,c=1;c<r.length;c++){var i=r[c];0!==o[i]&&(a=!1)}a&&(n.splice(t--,1),e=s(s.s=r[0]))}return e}var a={},o={app:0},n=[];function s(t){if(a[t])return a[t].exports;var r=a[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.m=e,s.c=a,s.d=function(e,t,r){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)s.d(r,a,function(t){return e[t]}.bind(null,a));return r},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],i=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var v=i;n.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},3964:function(e,t,r){},"56d7":function(e,t,r){"use strict";r.r(t);r("744f"),r("6c7b"),r("7514"),r("20d6"),r("1c4c"),r("6762"),r("cadf"),r("e804"),r("55dd"),r("d04f"),r("c8ce"),r("217b"),r("7f7f"),r("f400"),r("7f25"),r("536b"),r("d9ab"),r("f9ab"),r("32d7"),r("25c9"),r("9f3c"),r("042e"),r("c7c6"),r("f4ff"),r("049f"),r("7872"),r("a69f"),r("0b21"),r("6c1a"),r("c7c62"),r("84b4"),r("c5f6"),r("2e37"),r("fca0"),r("7cdf"),r("ee1d"),r("b1b1"),r("87f3"),r("9278"),r("5df2"),r("04ff"),r("f751"),r("4504"),r("fee7"),r("ffc1"),r("0d6d"),r("9986"),r("8e6e"),r("25db"),r("e4f7"),r("b9a1"),r("64d5"),r("9aea"),r("db97"),r("66c8"),r("57f0"),r("165b"),r("456d"),r("cf6a"),r("fd24"),r("8615"),r("551c"),r("097d"),r("df1b"),r("2397"),r("88ca"),r("ba16"),r("d185"),r("ebde"),r("2d34"),r("f6b3"),r("2251"),r("c698"),r("a19f"),r("9253"),r("9275"),r("3b2b"),r("3846"),r("4917"),r("a481"),r("28a5"),r("386d"),r("6b54"),r("4f7f"),r("8a81"),r("ac4d"),r("8449"),r("9c86"),r("fa83"),r("48c0"),r("a032"),r("aef6"),r("d263"),r("6c37"),r("9ec8"),r("5695"),r("2fdb"),r("d0b0"),r("b54a"),r("f576"),r("ed50"),r("788d"),r("14b9"),r("f386"),r("f559"),r("1448"),r("673e"),r("242a"),r("c66f"),r("b05c"),r("34ef"),r("6aa2"),r("15ac"),r("af56"),r("b6e4"),r("9c29"),r("63d9"),r("4dda"),r("10ad"),r("c02b"),r("4795"),r("130f"),r("ac6a"),r("96cf");var a=r("2b0e"),o=r("ce5b"),n=r.n(o);r("bf40");a["default"].use(n.a);var s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-app",[r("v-toolbar",{attrs:{app:""}},[r("v-toolbar-title",{domProps:{textContent:e._s(e.title)}})],1),r("v-content",[r("HelloWorld")],1),r("v-footer",{attrs:{app:""}},[r("span",[e._v("© 2018")])]),r("v-snackbar",{attrs:{timeout:6e3,color:"error",top:!0,vertical:!0},model:{value:e.snackbar,callback:function(t){e.snackbar=t},expression:"snackbar"}},[e._v("\n    "+e._s(e.errorText)+"\n    "),r("v-btn",{attrs:{flat:""},on:{click:function(t){e.snackbar=!1}}},[e._v("Close")])],1)],1)},c=[],i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-container",{attrs:{fluid:"","grid-list-md":""}},[r("v-layout",{attrs:{wrap:"",row:""}},[r("v-flex",{attrs:{xs4:"","d-flex":""}},[r("media-device")],1),r("v-flex",{attrs:{xs4:"","d-flex":""}},[r("media-recorder")],1),r("v-flex",{attrs:{xs4:"","d-flex":""}},[r("user-agent")],1),r("v-flex",{attrs:{xs4:""}},[r("local-storage")],1),r("v-flex",{attrs:{xs4:""}},[r("session-storage")],1),r("v-flex",{attrs:{xs4:""}},[r("cookie-storage")],1)],1)],1)},l=[],v=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-card",[r("v-toolbar",[r("v-toolbar-title",[e._v("MediaDevice")]),r("v-spacer"),r("v-toolbar-items",[r("v-btn",{attrs:{icon:""}},[e.available?r("v-icon",{attrs:{color:"success"}},[e._v("done")]):r("v-icon",{attrs:{color:"error"}},[e._v("error")])],1)],1)],1),r("v-card-text"),r("v-card-actions",[r("v-dialog",{attrs:{width:"900"},model:{value:e.testerView,callback:function(t){e.testerView=t},expression:"testerView"}},[r("v-card",[r("v-card-title",{staticClass:"headline"},[e._v("MediaDevice Tester")]),r("v-card-text",[e._v("\n                    Supported constraints:\n                    "),e._l(e.constraints,function(t){return r("v-list",{key:"ct"+t},[r("v-list-tile",{attrs:{avatar:""}},[r("v-list-tile-avatar",{attrs:{color:"green"}},[r("span",{staticClass:"white--text  text-uppercase"},[e._v(e._s(t[0]))])]),r("v-list-tile-content",[r("v-text-field",{attrs:{label:t}})],1)],1)],1)})],2)],1)],1)],1)],1)},u=[],d=r("6bde"),f=r("c93e"),b=r("2f62"),m={data:function(){return{testerView:!1}},computed:Object(f["a"])({modelValue:function(){var e=this;return function(t){if(void 0!==Object(d["a"])(e[t]))return e[t];console.warn("Not found",t)}}},Object(b["c"])("mediaDevice",["available","getUserMedia","constraints"])),methods:{showTester:function(){this.testerView=!0}}},g=m,p=r("2877"),_=Object(p["a"])(g,v,u,!1,null,null,null);_.options.__file="MediaDevice.vue";var h=_.exports,E=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-card",[r("v-toolbar",[r("v-toolbar-title",[e._v("Media Recorder")]),r("v-spacer"),r("v-toolbar-items",[r("v-btn",{attrs:{icon:""}},[e.available?r("v-icon",{attrs:{color:"success"}},[e._v("done")]):r("v-icon",{attrs:{color:"error"}},[e._v("error")])],1)],1)],1),r("v-card-text"),r("v-card-actions")],1)},S=[],k={data:function(){return{}},computed:Object(f["a"])({},Object(b["c"])("mediaRecorder",["available"])),methods:{showTester:function(){this.testerView=!0}}},T=k,w=Object(p["a"])(T,E,S,!1,null,null,null);w.options.__file="MediaRecorder.vue";var x=w.exports,V=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-card",[r("v-toolbar",[r("v-toolbar-title",[e._v("User Agent")]),r("v-spacer"),r("v-toolbar-items",[r("v-btn",{attrs:{icon:""}},[e.available?r("v-icon",{attrs:{color:"success"}},[e._v("done")]):r("v-icon",{attrs:{color:"error"}},[e._v("error")])],1)],1)],1),r("v-card-text",e._l(e.visibleFields,function(t){return r("v-list",{key:t.key},[r("v-subheader",{domProps:{innerHTML:e._s(t.label)}}),r("v-list-tile-content",{domProps:{innerHTML:e._s(e.param(t.key))}})],1)})),r("v-card-actions",[r("v-spacer"),r("v-btn",{attrs:{icon:""},on:{click:function(t){e.show=!e.show}}},[r("v-icon",[e._v(e._s(e.show?"keyboard_arrow_down":"keyboard_arrow_up"))])],1)],1)],1)},I=[],A={data:function(){return{show:!1,fields:[{label:"Browser CodeName",key:"appCodeName"},{label:"Browser Name",key:"appName"},{label:"Browser Version",key:"appVersion"},{label:"Cookies Enabled",key:"cookieEnabled"},{label:"Browser Language",key:"language"},{label:"Browser Online",key:"onLine"},{label:"Platform",key:"platform"},{label:"User-agent header",key:"userAgent"}]}},computed:Object(f["a"])({visibleFields:function(){return this.show?this.fields:this.fields.splice(0,1)},param:function(){var e=this;return function(t){return e.$store.getters["userAgent/".concat(t)]}}},Object(b["c"])("userAgent",["available"]))},O=A,j=Object(p["a"])(O,V,I,!1,null,null,null);j.options.__file="UserAgent.vue";var U=j.exports,L=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-card",[r("v-toolbar",[r("v-toolbar-title",[e._v("Local Storage")]),r("v-spacer"),r("v-toolbar-items",[r("v-btn",{attrs:{icon:""}},[e.available?r("v-icon",{attrs:{color:"success"}},[e._v("done")]):r("v-icon",{attrs:{color:"error"}},[e._v("error")])],1)],1)],1),r("v-card-text",[r("v-list",[r("v-subheader",[e._v("Test value: ")]),r("v-list-tile",{domProps:{innerHTML:e._s(e.testValue)}})],1)],1),r("v-card-actions",[r("v-btn",{on:{click:e.setItem}},[e._v("Set item")]),r("v-btn",{on:{click:e.getItem}},[e._v("Get item")]),r("v-btn",{on:{click:e.removeItem}},[e._v("Remove item")]),r("v-btn",{on:{click:e.clearAll}},[e._v("Clear all")])],1)],1)},y=[],M={data:function(){return{fields:[]}},computed:Object(f["a"])({testValue:function(){return this.$store.state.localStorage.testValue||"Get or set to see current"},param:function(){var e=this;return function(t){return e.$store.getters["localStorage/".concat(t)]}}},Object(b["c"])("localStorage",["available"])),methods:Object(f["a"])({},Object(b["b"])("localStorage",["setItem","getItem","removeItem","clearAll"]))},C=M,$=Object(p["a"])(C,L,y,!1,null,null,null);$.options.__file="LocalStorage.vue";var P=$.exports,Y=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-card",[r("v-toolbar",[r("v-toolbar-title",[e._v("Session Storage")]),r("v-spacer"),r("v-toolbar-items",[r("v-btn",{attrs:{icon:""}},[e.available?r("v-icon",{attrs:{color:"success"}},[e._v("done")]):r("v-icon",{attrs:{color:"error"}},[e._v("error")])],1)],1)],1),r("v-card-text",[r("v-list",[r("v-subheader",[e._v("Test value: ")]),r("v-list-tile",{domProps:{innerHTML:e._s(e.testValue)}})],1)],1),r("v-card-actions",[r("v-btn",{on:{click:e.getItem}},[e._v("Get item")]),r("v-btn",{on:{click:e.setItem}},[e._v("Set item")]),r("v-btn",{on:{click:e.removeItem}},[e._v("Remove item")]),r("v-btn",{on:{click:e.clearAll}},[e._v("Clear all")])],1)],1)},D=[],K={data:function(){return{fields:[]}},computed:Object(f["a"])({testValue:function(){return this.$store.state.sessionStorage.testValue||"Get or set to see current"},param:function(){var e=this;return function(t){return e.$store.getters["sessionStorage/".concat(t)]}}},Object(b["c"])("sessionStorage",["available"])),methods:Object(f["a"])({},Object(b["b"])("sessionStorage",["setItem","getItem","removeItem","clearAll"]))},R=K,N=Object(p["a"])(R,Y,D,!1,null,null,null);N.options.__file="SessionStorage.vue";var B=N.exports,G=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-card",[r("v-toolbar",[r("v-toolbar-title",[e._v("Cookie Storage")]),r("v-spacer"),r("v-toolbar-items",[r("v-btn",{attrs:{icon:""}},[e.available?r("v-icon",{attrs:{color:"success"}},[e._v("done")]):r("v-icon",{attrs:{color:"error"}},[e._v("error")])],1)],1)],1),r("v-card-text",[r("v-list",[r("v-subheader",[e._v("Test value: ")]),r("v-list-tile",{domProps:{innerHTML:e._s(e.testValue)}})],1)],1),r("v-card-actions",[r("v-btn",{on:{click:e.setItem}},[e._v("Set item")]),r("v-btn",{on:{click:e.getItem}},[e._v("Get item")]),r("v-btn",{on:{click:e.removeItem}},[e._v("Remove item")]),r("v-btn",{on:{click:e.clearAll}},[e._v("Clear all")])],1)],1)},H=[],F={data:function(){return{fields:[]}},computed:Object(f["a"])({testValue:function(){return this.$store.state.cookieStorage.testValue||"Get or set to see current"},param:function(){var e=this;return function(t){return e.$store.getters["cookieStorage/".concat(t)]}}},Object(b["c"])("cookieStorage",["available"])),methods:Object(f["a"])({},Object(b["b"])("cookieStorage",["setItem","getItem","removeItem","clearAll"]))},J=F,W=Object(p["a"])(J,G,H,!1,null,null,null);W.options.__file="CookieStorage.vue";var q=W.exports,z={components:{MediaDevice:h,MediaRecorder:x,UserAgent:U,LocalStorage:P,SessionStorage:B,CookieStorage:q},name:"BrowserCheck",data:function(){return{}},computed:{}},Q=z,X=(r("fd64"),Object(p["a"])(Q,i,l,!1,null,"66cc96eb",null));X.options.__file="BrowserCheck.vue";var Z=X.exports,ee={name:"App",components:{HelloWorld:Z},errorCaptured:function(e,t,r){this.errorText=e.message,this.snackbar=!0},data:function(){return{snackbar:!1,title:"Browser tester",errorText:"Hello"}}},te=ee,re=Object(p["a"])(te,s,c,!1,null,null,null);re.options.__file="App.vue";var ae=re.exports,oe={namespaced:!0,state:{},mutations:{},actions:{},getters:{available:function(){return navigator.mediaDevices},getUserMedia:function(){var e=navigator.mediaDevices&&navigator.mediaDevices.getUserMedia||navigator.getUserMedia||navigator.webkitGetUserMedia||navigator.msGetUserMedia;return void 0!==Object(d["a"])(e)},constraints:function(){return Object.keys(navigator.mediaDevices.getSupportedConstraints())}}},ne={namespaced:!0,state:{},mutations:{},actions:{},getters:{available:function(){return MediaRecorder}}},se={namespaced:!0,state:{},mutations:{},actions:{},getters:{available:function(){return navigator.userAgent},appCodeName:function(){return navigator.appCodeName},appName:function(){return navigator.appName},appVersion:function(){return navigator.appVersion},cookieEnabled:function(){return navigator.cookieEnabled},language:function(){return navigator.language},onLine:function(){return navigator.onLine},platform:function(){return navigator.platform},userAgent:function(){return navigator.userAgent}}},ce={TEST_VALUE_KEY:"localStorageTest",EMPTY_VALUE:"EMPTY"},ie={namespaced:!0,state:{testValue:null},mutations:{SET_VALUE:function(e,t){e.testValue=t}},actions:{setItem:function(e){var t=e.dispatch,r=e.getters,a=Date.now();r["storage"].setItem(ce.TEST_VALUE_KEY,a),t("getItem")},getItem:function(e){var t=e.getters,r=e.commit,a=t["storage"].getItem(ce.TEST_VALUE_KEY);r("SET_VALUE",a)},removeItem:function(e){var t=e.dispatch,r=e.getters;r["storage"].removeItem(ce.TEST_VALUE_KEY),t("getItem")},clearAll:function(e){var t=e.dispatch,r=e.getters;r["storage"].clear(),t("getItem")}},getters:{available:function(e,t){return void 0!==t["storage"]},storage:function(){return window.localStorage}}},le={TEST_VALUE_KEY:"sessionStorageTest",EMPTY_VALUE:"EMPTY"},ve={namespaced:!0,state:{testValue:null},mutations:{SET_VALUE:function(e,t){e.testValue=t}},actions:{setItem:function(e){var t=e.dispatch,r=e.getters,a=Date.now();r["storage"].setItem(le.TEST_VALUE_KEY,a),t("getItem")},getItem:function(e){var t=e.getters,r=e.commit,a=t["storage"].getItem(le.TEST_VALUE_KEY);r("SET_VALUE",a)},removeItem:function(e){var t=e.dispatch,r=e.getters;r["storage"].removeItem(le.TEST_VALUE_KEY),t("getItem")},clearAll:function(e){var t=e.dispatch,r=e.getters;r["storage"].clear(),t("getItem")}},getters:{available:function(e,t){return void 0!==t["storage"]},storage:function(){return window.sessionStorage}}},ue={TEST_VALUE_KEY:"cookieStorageTest"};function de(e,t,r){r=r||{};var a=r.expires;if("number"==typeof a&&a){var o=new Date;o.setTime(o.getTime()+1e3*a),a=r.expires=o}a&&a.toUTCString&&(r.expires=a.toUTCString()),t=encodeURIComponent(t);var n=e+"="+t;for(var s in r){n+="; "+s;var c=r[s];!0!==c&&(n+="="+c)}return n}var fe={namespaced:!0,state:{testValue:null},mutations:{SET_VALUE:function(e,t){e.testValue=t}},actions:{setItem:function(e){var t=e.dispatch,r=e.getters,a=Date.now(),o=de(ue.TEST_VALUE_KEY,a);r["storage"].cookie=o,t("getItem")},getItem:function(e){var t=e.getters,r=e.commit,a=t["storage"].cookie.match(new RegExp("(?:^|; )"+ue.TEST_VALUE_KEY.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g,"\\$1")+"=([^;]*)"));r("SET_VALUE",a?decodeURIComponent(a[1]):void 0)},removeItem:function(e){var t=e.dispatch,r=e.getters,a=de(ue.TEST_VALUE_KEY,"");r["storage"].cookie=a,t("getItem")},clearAll:function(e){var t=e.dispatch,r=e.getters,a=de(ue.TEST_VALUE_KEY,"");r["storage"].cookie=a,t("getItem")}},getters:{available:function(e,t){return void 0!==t["storage"].cookie},storage:function(){return document}}};a["default"].use(b["a"]);var be=new b["a"].Store({modules:{mediaDevice:oe,mediaRecorder:ne,userAgent:se,localStorage:ie,sessionStorage:ve,cookieStorage:fe},state:{},mutations:{},actions:{}});a["default"].config.productionTip=!1,new a["default"]({store:be,render:function(e){return e(ae)}}).$mount("#app")},fd64:function(e,t,r){"use strict";var a=r("3964"),o=r.n(a);o.a}});
//# sourceMappingURL=app.24ee869c.js.map