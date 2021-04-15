(function(t){function e(e){for(var r,a,c=e[0],i=e[1],s=e[2],f=0,p=[];f<c.length;f++)a=c[f],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&p.push(o[a][0]),o[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(t[r]=i[r]);l&&l(e);while(p.length)p.shift()();return u.push.apply(u,s||[]),n()}function n(){for(var t,e=0;e<u.length;e++){for(var n=u[e],r=!0,a=1;a<n.length;a++){var i=n[a];0!==o[i]&&(r=!1)}r&&(u.splice(e--,1),t=c(c.s=n[0]))}return t}var r={},o={app:0},u=[];function a(t){return c.p+"js/"+({about:"about"}[t]||t)+"."+{about:"643226c0"}[t]+".js"}function c(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n=o[t];if(0!==n)if(n)e.push(n[2]);else{var r=new Promise((function(e,r){n=o[t]=[e,r]}));e.push(n[2]=r);var u,i=document.createElement("script");i.charset="utf-8",i.timeout=120,c.nc&&i.setAttribute("nonce",c.nc),i.src=a(t);var s=new Error;u=function(e){i.onerror=i.onload=null,clearTimeout(f);var n=o[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),u=e&&e.target&&e.target.src;s.message="Loading chunk "+t+" failed.\n("+r+": "+u+")",s.name="ChunkLoadError",s.type=r,s.request=u,n[1](s)}o[t]=void 0}};var f=setTimeout((function(){u({type:"timeout",target:i})}),12e4);i.onerror=i.onload=u,document.head.appendChild(i)}return Promise.all(e)},c.m=t,c.c=r,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)c.d(n,r,function(e){return t[e]}.bind(null,r));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/",c.oe=function(t){throw console.error(t),t};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=e,i=i.slice();for(var f=0;f<i.length;f++)e(i[f]);var l=s;u.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";n("85ec")},"199c":function(t,e){},"23be":function(t,e,n){"use strict";var r=n("199c"),o=n.n(r);e["default"]=o.a},"2b60":function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return o}));var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/"}},[t._v("Home")]),t._v(" | "),n("router-link",{attrs:{to:"/about"}},[t._v("About")])],1),n("router-view")],1)},o=[]},"3dfd":function(t,e,n){"use strict";var r=n("2b60"),o=n("23be"),u=(n("034f"),n("2877")),a=Object(u["a"])(o["default"],r["a"],r["b"],!1,null,null,null);e["default"]=a.exports},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=n("3dfd"),u=n("c0d6"),a=(n("c898"),n("d3b7"),n("3ca3"),n("ddb0"),n("8c4f")),c=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},i=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"home"},[r("img",{attrs:{alt:"Vue logo",src:n("cf05")}})])}],s=n("c4f2");console.log(s["a"]);var f={name:"Home",components:{}},l=f,p=n("2877"),d=Object(p["a"])(l,c,i,!1,null,null,null),m=d.exports;r["a"].use(a["a"]);var b=[{path:"/",name:"Home",component:m},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}},{path:"/chat",name:"Chat",component:function(){return n.e("about").then(n.bind(null,"293a"))}}],v=new a["a"]({routes:b}),h=v;r["a"].config.productionTip=!1,new r["a"]({render:function(t){return t(o["default"])},router:h,store:u["a"]}).$mount("#app")},"85ec":function(t,e,n){},c0d6:function(t,e,n){"use strict";var r=n("2b0e"),o=n("2f62"),u={state:function(){return{messages:[]}},getters:{messages:function(t){return t.messages}},mutations:{ADD_MESSAGE:function(t,e){t.messages.push(e)}},actions:{addMessage:function(t,e){t.commit("ADD_MESSAGE",e)}},namespaced:!0},a={state:function(){return{currentUser:null}},getters:{currentUser:function(t){return t.currentUser}},mutations:{REGISTER_USER:function(t,e){t.currentUser=e}},actions:{registerUser:function(t,e){e&&e.length>0&&t.commit("REGISTER_USER",e)}}};r["a"].use(o["a"]);e["a"]=new o["a"].Store({modules:{Chat:u,User:a}})},c4f2:function(t,e,n){"use strict";var r=n("8e27"),o=Object({NODE_ENV:"production",BASE_URL:"/"}).ENDPOINT_URL,u=Object(r["io"])(o);u.onAny((function(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];console.log(t,n)})),e["a"]=u},c898:function(t,e,n){},cf05:function(t,e,n){t.exports=n.p+"img/logo.82b9c7a5.png"}});
//# sourceMappingURL=app.9bffb55f.js.map