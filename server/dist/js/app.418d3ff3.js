(function(e){function t(t){for(var r,i,o=t[0],c=t[1],u=t[2],l=0,f=[];l<o.length;l++)i=o[l],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&f.push(a[i][0]),a[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);d&&d(t);while(f.length)f.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],r=!0,i=1;i<n.length;i++){var o=n[i];0!==a[o]&&(r=!1)}r&&(s.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},i={app:0},a={app:0},s=[];function o(e){return c.p+"js/"+({about:"about",admin:"admin",chat:"chat",login:"login",message:"message",picture:"picture","picture-background":"picture-background",ticker:"ticker"}[e]||e)+"."+{about:"65360ca4",admin:"61d2c776",chat:"ef06556e",login:"5f9ad36f",message:"8fcdbcf8",picture:"02d0bf6c","picture-background":"5d630d28",ticker:"34865c64"}[e]+".js"}function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={login:1,ticker:1};i[e]?t.push(i[e]):0!==i[e]&&n[e]&&t.push(i[e]=new Promise((function(t,n){for(var r="css/"+({about:"about",admin:"admin",chat:"chat",login:"login",message:"message",picture:"picture","picture-background":"picture-background",ticker:"ticker"}[e]||e)+"."+{about:"31d6cfe0",admin:"31d6cfe0",chat:"31d6cfe0",login:"17686a1b",message:"31d6cfe0",picture:"31d6cfe0","picture-background":"31d6cfe0",ticker:"e3aeba52"}[e]+".css",a=c.p+r,s=document.getElementsByTagName("link"),o=0;o<s.length;o++){var u=s[o],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===r||l===a))return t()}var f=document.getElementsByTagName("style");for(o=0;o<f.length;o++){u=f[o],l=u.getAttribute("data-href");if(l===r||l===a)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var r=t&&t.target&&t.target.src||a,s=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");s.code="CSS_CHUNK_LOAD_FAILED",s.request=r,delete i[e],d.parentNode.removeChild(d),n(s)},d.href=a;var m=document.getElementsByTagName("head")[0];m.appendChild(d)})).then((function(){i[e]=0})));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var s=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=s);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=o(e);var f=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(d);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+r+": "+i+")",f.name="ChunkLoadError",f.type=r,f.request=i,n[1](f)}a[e]=void 0}};var d=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var f=0;f<u.length;f++)t(u[f]);var d=l;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},"0899":function(e,t){e.exports="data:image/gif;base64,R0lGODlhGQAXAOZ/AClRqctx8zFJjStt8Gzv/yNXxTUCBKNVpnVMGqGJX8SqOvPwllUofDcWLv/1bzOF+drNT8MAklgrhWiPlpVIe/8Aysm7YTcpQ/v60v8A/1ItJs+Rz7cJgTFs3e0AtJ58KpUTY5v7/HE0rjQ8a1fN/fnkWEUcTYhFzWszlFcdL1cpDnTd/7AOdCVd04NkTDdFd4cSRx9UzHo6cNSyOYX5////x6ZY2a9a6j0jLDUJE0UVCNgAo8muO8GlOGS45unFQcoAmOuE/kciZf65/8cAlc2xPE6v/mktSf8A4rUZo7uhNzsdU0k+ReC9Pz+a/e/ZS2INJ0wmcmY6FTYPG0wHFLeaNFIJGqX//5NvJqKDLf//nkMOIo5rJTwIBtEAnv//4OkS5OaW7eeb/YlrOcsIkuHZnfCk/mU/J9Fs4LKLMa+QMc7CenDV1kJysVwkaJcXfYA/t/2c/43p/1saZ5br7N8Y15TJz5+AK2GhvHUSU1qm0O7ngv/9jn9YHqN+KzMAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQJAAB/ACwAAAAAGQAXAAAHnoB/goOEhYaHiImKi4yJSUmNiXkZYJGISRkZUJaFBnWZMJyEIJkZZFaRBm+rmKUeZDCxMFSJFUiluEgeHjteRCyJUEA7FbgZul5ARBwGilYcRMSZusoRIM2LXSzRHhUevhEw2IxQEcO91aiRUERA7u5EEeqNMET2ERH3m43a9ywc+YiIa0RFGQtaf8rZ69LIikBDIIjME0WxosWLiAIBACH5BAkAAH8ALAAAAAAZABcAAAe+gH+Cg4SFhoeIiYqLjIpdCCqNiF1jEAiShxprJQgGmDpdggYJe0+djVIWCS4aZwkLDk19oYxdEFoYGGVafCUzWTqSKhAONV8YWr5KWCqgnopSTQ5aNXxPPD0KCmp3Us+IBlhNJQ4lPzzaPDxFd8GKCEVNP01F6Nlcl4tdfgro6go9sjRDlU2bQSWnGOlIg05BlYJVIjXqM0MBlz4I7mjr4Y4RAiw63HXhwiMiJkM6PiiRchLlB4ktC32LSTNmIAAh+QQJAAB/ACwAAAAAGQAXAAAHzoB/goOEhYaHiImKi4yNTF2NggaEBhoTdkyNUxdMOIM4E3Q+F40NHT4TnaB0K21TjTkAAytseHoEV0YCr4wGFzEPBDQ0V3IPApOaAjFOuCErx7yNLwUDRgQEJA8dIw05yYlTIzEtA05ODwMDLQLd4IZdTADk6ust9/cv74XyMQUF+P79AyDgRY5Dvv7F8CcwBoARF3Ac3CcoBzWCAgA0HNGFYiEDDS5MmZLjwrwCAKZ4TJSswbxdkQ69iPFCWsxBDQqMOHiTUoMGK3sKvRkIACH5BAUAAH8ALAAAAAAZABcAAAfBgH+Cg4SFhoeIiYqEBouOBltbjooGQgeSk4eVNhSNmYUGS3BoR42QKUeYizlLKAEHbnMyBxsbKZOsKDdBAWhhZhsoqokGDUISNnFDQ2I2DFuehgaQDSZRDAwnQUNmNhLQiTkmDNcMEhIiNwE3IkI5iuLl2BIoInAiDELRmjlTDUvXzgmU8CwTq3nY5rnJsQ9RsYT5AJoz0RDRlGtRTEzZuGQJxUkXGTSYJshADoYgyb37VCiHkI8sGTGsGLOmzUGBAAA7"},"0a14":function(e,t,n){"use strict";var r=n("2909"),i=(n("d81d"),n("ac1f"),n("1276"),n("99af"),n("cb29"),n("c4f2")),a=n("c0d6");function s(e){return e.split("").map((function(e){return{char:e}}))}t["a"]={randomMessage:function(){var e=["Area man reads one-third of Infinite Jest three times; claims to have read the book.","Silicon Valley found to lie on fault line that opens directly to hell.","Elon Musk establishes first Martian Arby's."].concat(Object(r["a"])(Array(20).fill("Visit thxcoin.biz and mine some $THX to put a message here."))).map((function(e){return s(e)}));console.log(" ububububub");var t=[],n=[].concat(Object(r["a"])(e),t);return n[Math.floor(Math.random()*n.length)]},stringToTickerArray:s,registerListeners:function(){i["a"].on("approvedTickerMessage",(function(e){var t=e.message,n=e.username;console.log("beeee",t,"username",n),a["a"].dispatch("Ticker/addMessage",{message:t,username:n})}))}}},"1d61":function(e,t,n){"use strict";var r=n("c4f2"),i=n("c0d6");t["a"]={approveItem:function(e){r["a"].emit("approveItem",e)},registerListeners:function(){r["a"].on("unapprovedItem",(function(e){i["a"].dispatch("Admin/addUnapprovedItem",e)}))}}},"230e":function(e,t,n){"use strict";n("d3b7");var r=n("c4f2");t["a"]={registerUser:function(e){return new Promise((function(t){r["a"].emit("registerUser",{username:e},(function(n){console.log(e,"attempting register"),n.success?(t({success:!0}),r["a"].disconnect(),r["a"].auth={username:e},r["a"].connect(),localStorage.setItem("username",e)):t({success:!1,reason:n.reason})}))}))},loginUser:function(e){r["a"].disconnect(),r["a"].auth={username:e},r["a"].connect()},registerListeners:function(){}}},"478c":function(e,t,n){e.exports=n.p+"img/penpaper.c1afe4e3.jpg"},"4cb7":function(e,t,n){e.exports=n.p+"img/coffee.5e94e1d7.jpg"},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),i=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[e.isLoggedIn&&e.showNav?r("div",{staticClass:"flex justify-between",attrs:{id:"nav"}},[r("router-link",{attrs:{to:"/"}},[e._v("Home")]),r("router-link",{attrs:{to:"/about"}},[e._v("About")]),r("router-link",{attrs:{to:"/chat"}},[r("div",{staticClass:"p-2"},[r("img",{staticClass:"w-8",attrs:{src:n("bbf9")}}),e.unreadCount?r("div",{staticClass:"p-1 top-8 text-xs right-2 absolute bg-red-500 text-white rounded-lg"},[e._v(e._s(e.unreadCount))]):e._e()])])],1):e._e(),r("router-view")],1)},a=[],s=n("1da1"),o=(n("caad"),n("b0c0"),n("96cf"),n("c52f")),c=n("230e"),u=n("c4f2"),l=n("c0d6"),f={updateTotalCoin:function(){u["a"].emit("updateTotals",{coin:l["a"].getters["Miner/totalCoin"],usd:l["a"].getters["Miner/totalUsd"]})},registerListeners:function(){u["a"].on("updateGlobalTotals",(function(e){l["a"].dispatch("Miner/updateLeaderboard",e)}))}},d={mounted:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=localStorage.getItem("username"),n&&c["a"].loginUser(n),o["a"].registerListeners(),f.registerListeners(),t.next=6,e.$store.dispatch("Miner/initState");case 6:e.totalUpdateInterval=setInterval((function(){e.$store.dispatch("Miner/addCoinAmount",e.cps/1e3*e.updateTimerMs),e.$store.getters["Miner/shouldAutosell"]&&e.$store.getters["Miner/totalCoin"]>5&&e.$store.dispatch("Miner/sellCoinForUsd",e.$store.getters["Miner/currentCps"]*e.updateTimerMs/1e3/10)}),e.updateTimerMs),e.transmissionInterval=setInterval((function(){f.updateTotalCoin()})),e.saveInterval=setInterval((function(){e.$store.dispatch("Miner/saveState")}),5e3);case 9:case"end":return t.stop()}}),t)})))()},data:function(){return{updateTimerMs:50,saveInterval:null,totalUpdateInterval:null}},computed:{isLoggedIn:function(){return!!this.$store.getters["User/currentUser"]},showNav:function(){return!["Ticker","PictureBackground"].includes(this.$route.name)},cps:function(){return this.$store.getters["Miner/currentCps"]},unreadCount:function(){var e=this.$store.getters["Chat/unreadCount"];return e>99?"99+":e}},beforeDestroy:function(){this.$store.dispatch("Miner/saveState"),clearInterval(this.saveInterval)}},m=d,h=(n("034f"),n("2877")),p=Object(h["a"])(m,i,a,!1,null,null,null),g=p.exports,A=(n("c898"),n("a18c"));r["a"].config.productionTip=!1;var v=localStorage.getItem("username")||null;l["a"].dispatch("User/registerUser",v).then((function(){new r["a"]({render:function(e){return e(g)},router:A["a"],store:l["a"]}).$mount("#app")}))},7044:function(e,t,n){e.exports=n.p+"img/grubribe.34ebbe86.png"},7168:function(e,t,n){},"85ec":function(e,t,n){},a18c:function(e,t,n){"use strict";n("d3b7"),n("3ca3"),n("ddb0"),n("caad"),n("b0c0");var r=n("2b0e"),i=n("8c4f"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("div",{staticClass:"text-center m-2"},[n("a",{staticClass:"border-r border-b bg-gray-200 border-black p-2 hover:bg-gray-500",on:{click:e.mineCoin}},[e._v("MINE "+e._s(e.clickWorth.toFixed(3))+" $THX")]),n("a",{staticClass:"border-r border-b bg-gray-200 border-black p-2 hover:bg-gray-500",on:{click:e.sellCoin}},[e._v(" SELL $THX ")])]),n("div",[e._v("1 $THX ≈ "+e._s(e.exchangeRate.toFixed(5))+" USD")]),n("div",{staticClass:"flex m-4 p-4 place-content-between text-center"},[n("div",{staticClass:"w-1/3"},[n("div",[e._v(e._s(e.totalUsd.toFixed(2)))]),e._m(0)]),n("div",{staticClass:"w-1/3"},[n("div",[e._v(" "+e._s(e.totalCoin.toFixed(5))+" ")]),e._m(1)]),n("div",{staticClass:"w-1/3"},[n("div",[e._v(e._s((e.efficiency-1).toFixed(2)))]),e._m(2)])]),n("transition-group",{attrs:{name:"slide-fade"}},[e._l(e.purchases,(function(t){return n("div",{key:t.name,staticClass:"flex items-center bg-white m-2 p-2 slide-fade-item"},[n("img",{staticClass:"w-12 h-12",attrs:{src:t.icon}}),n("div",{staticClass:"flex-grow"},[n("div",[e._v(" "+e._s(t.name)+" ")]),n("div",{staticClass:"text-xs"},[e._v(e._s(t.description))])]),n("div",{staticClass:"text-center"},[n("div",{staticClass:"font-bold text-red-600 text-xs",class:{invisible:e.sufficientFunds(t)}},[e._v(" can't afford ")]),n("a",[n("div",{staticClass:"border-r border-b bg-gray-200 border-black p-2 hover:bg-gray-500",class:{"bg-gray-300 text-gray-400":!e.sufficientFunds(t)},on:{click:function(n){return e.buyPurchase(t)}}},["USD"!==t.currency?n("span",[e._v(" THX "+e._s(t.cost().toFixed(3))+" ")]):n("span",[e._v(" $"+e._s(t.cost().toFixed(2))+" ")])])]),n("div",{staticClass:"text-xs"},[e._v("owned: "+e._s(t.numPurchased))])])])})),e._l(e.upgrades,(function(t){return n("div",{key:t.name,staticClass:"flex items-center bg-white m-2 p-2"},[n("img",{staticClass:"w-12 h-12",attrs:{src:t.icon}}),n("div",{staticClass:"flex-grow"},[n("div",[e._v(" "+e._s(t.name)+" "),n("span",{staticClass:"text-xs text-green-500"},[e._v("+"+e._s(t.cps)+" $THX/s")])]),n("div",{staticClass:"text-xs"},[e._v(e._s(t.description))])]),n("div",{staticClass:"text-center"},[n("div",{staticClass:"font-bold text-red-600 text-xs",class:{invisible:e.sufficientFunds(t)}},[e._v(" can't afford ")]),n("a",[n("div",{staticClass:"border-r border-b bg-gray-200 border-black p-2 hover:bg-gray-500",class:{"bg-gray-300 text-gray-400":!e.sufficientFunds(t)},on:{click:function(n){return e.buyUpgrade(t)}}},[e._v(" $"+e._s(t.cost().toFixed(2))+" ")])]),n("div",{staticClass:"text-xs"},[e._v("owned: "+e._s(t.numPurchased))])])])}))],2),e._v(" "+e._s(e.cps)+" "),n("a",{on:{click:function(t){return e.$store.dispatch("Miner/initState")}}},[e._v("ok ")])],1)},s=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{},[r("img",{staticClass:"w-6 h-6 inline",attrs:{src:n("c6c7")}}),e._v(" USD ")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("img",{staticClass:"w-6 h-6 inline",attrs:{src:n("0899")}}),e._v(" THX ")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("img",{staticClass:"w-6 h-6 inline",attrs:{src:n("ab2a")}}),e._v(" % Efficiency ")])}],o=n("1da1"),c=(n("96cf"),{name:"Miner",computed:{totalCoin:function(){return this.$store.getters["Miner/totalCoin"]},lifetimeTotalCoin:function(){return this.$store.getters["Miner/lifetimeTotal"]},lifetimeHighCoin:function(){return this.$store.getters["Miner/lifetimeHigh"]},totalUsd:function(){return this.$store.getters["Miner/totalUsd"]},clickWorth:function(){return this.$store.getters["Miner/clickWorth"]},exchangeRate:function(){return this.$store.getters["Miner/exchangeRate"]},leaders:function(){return this.$store.getters["Miner/leaderboard"]},cps:function(){return this.$store.getters["Miner/currentCps"]},upgrades:function(){return this.$store.getters["Miner/availableUpgrades"]},purchases:function(){return this.$store.getters["Miner/availablePurchases"]},efficiency:function(){return this.$store.getters["Miner/efficiency"]}},methods:{mineCoin:function(){this.$store.dispatch("Miner/addCoinAmount",this.clickWorth)},sellCoin:function(){this.$store.dispatch("Miner/sellCoinForUsd",this.totalCoin)},buyUpgrade:function(e){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,t.$store.dispatch("Miner/buyUpgrade",e);case 2:case"end":return n.stop()}}),n)})))()},buyPurchase:function(e){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,t.$store.dispatch("Miner/buyPurchase",e);case 2:case"end":return n.stop()}}),n)})))()},sufficientFunds:function(e){if("THX"===e.currency){if(this.totalCoin>=e.cost())return!0}else if(this.totalUsd>=e.cost())return!0;return!1}},beforeDestroy:function(){clearInterval(this.totalUpdateInterval)}}),u=c,l=(n("fba7"),n("2877")),f=Object(l["a"])(u,a,s,!1,null,null,null),d=f.exports,m=n("c0d6");r["a"].use(i["a"]);var h=[{path:"/",name:"Miner",component:d},{path:"/login",name:"Login",component:function(){return n.e("login").then(n.bind(null,"a55b"))},beforeEnter:function(e,t,n){console.log(!m["a"].getters["User/currentUser"]),m["a"].getters["User/currentUser"]?n({name:"Miner"}):n()}},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}},{path:"/chat",name:"Chat",component:function(){return n.e("chat").then(n.bind(null,"293a"))}},{path:"/admin",name:"Admin",component:function(){return n.e("admin").then(n.bind(null,"3530"))}},{path:"/ticker",name:"Ticker",component:function(){return n.e("ticker").then(n.bind(null,"e2dd"))}},{path:"/message",name:"Message",component:function(){return n.e("message").then(n.bind(null,"8e2a"))},beforeEnter:function(e,t,n){console.log(m["a"].getters["Miner/canMessage"],"foo foo"),m["a"].getters["Miner/canMessage"]?n():n({name:"Miner"})}},{path:"/picture",name:"Picture",component:function(){return n.e("picture").then(n.bind(null,"ae50"))},beforeEnter:function(e,t,n){m["a"].getters["Miner/canPicture"]?n():n({name:"Miner"})}},{path:"/picture-background",name:"PictureBackground",component:function(){return n.e("picture-background").then(n.bind(null,"6059"))}}],p=new i["a"]({routes:h});p.beforeEach((function(e,t,n){console.log(m["a"].getters["User/currentUser"]);var r=["Login","Ticker","PictureBackground"];r.includes(e.name)||m["a"].getters["User/currentUser"]?n():n({name:"Login"})}));t["a"]=p},ab2a:function(e,t){e.exports="data:image/gif;base64,R0lGODlhIAAgALMAAP////zzBf9kAt0IBvIIhEYApQAA1AKr6h+3FABkEVYsBZBxOsDAwICAgEBAQAAAACH/C05FVFNDQVBFMi4wAwEAAAAh/h1HaWZCdWlsZGVyIDAuMSBieSBZdmVzIFBpZ3VldAAh+QQFBQAAACwAAAAAIAAgAEAEiBDISau9OL8Xuvdb0zBZtX3o9ogMqXFdOLZl/aLfY594rP41Hk42C3JULJdtyWyWhMMVE5pajZawXk+FzUaTXSGy2OTJWkrnGO1su9+An3zzpuZ0am9VVNbfWVN+IFZpT4JaMTtyiAFnXYhnNEZaa4UalISSfYMiZHk+mXUwkXBxjVaepZ2acBEAIfkEBQUAAAAsAAAAACAAIABABHkQyEmrvTi/F7r3W9MwWbV96PaIDFkCbSy7b21yKFifeaf+jxcvF2LRbMikcqnB9ULIIXE1sjl70+DumqK2rMCfkUkum89oSRhIlnaX7k8xGQd5o1z5HYzta0thfQFFR01+Xl9CeT6EhRpYjY4vIpSVI5JpmZqbnBMRACH5BAUFAAAALAAAAAAgACAAQARdEMhJq704vxe691vTMNkknqhIlmzrutsnP20sg4/67nzv/z/bLRB6CW+hEWzYSa6A0Kh0Sq1ON9jsJshhbnnHWa6xC3+cxu4QDVMjx8+2Nqv7Me74vHXP7/v/gFURACH5BAUFAAAALAAAAAAgACAAQAQiEMhJq7046827/2AojmRpnmiqrmzrvnAsz3Rt33iu77wcAQA7"},ae1d:function(e,t,n){e.exports=n.p+"img/broken.1462f394.jpg"},b99b:function(e,t,n){e.exports=n.p+"img/ti83.273d884f.jpg"},bbf9:function(e,t,n){e.exports=n.p+"img/aim.a2305d51.png"},c0d6:function(e,t,n){"use strict";var r=n("2b0e"),i=n("2f62"),a=(n("13d5"),n("159b"),{state:function(){return{messages:[]}},getters:{messages:function(e){return e.messages},unreadCount:function(e){return e.messages.reduce((function(e,t){return e+(t.read?0:1)}),0)}},mutations:{ADD_MESSAGE:function(e,t){e.messages.push(t)},MARK_READ:function(e){e.messages.forEach((function(e){return e.read=!0}))}},actions:{addMessage:function(e,t){t.read=!1,e.commit("ADD_MESSAGE",t)},markRead:function(e){e.commit("MARK_READ")}},namespaced:!0}),s={state:function(){return{currentUser:null}},getters:{currentUser:function(e){return e.currentUser}},mutations:{REGISTER_USER:function(e,t){e.currentUser=t}},actions:{registerUser:function(e,t){t&&t.length>0&&e.commit("REGISTER_USER",t)}},namespaced:!0},o=(n("07ac"),n("4de4"),n("b64b"),n("b0c0"),n("d4ec")),c=n("bee2"),u=(n("a4d3"),n("e01a"),n("a9e3"),function(){function e(t,r,i,a){var s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:n("ae1d"),c=!(arguments.length>5&&void 0!==arguments[5])||arguments[5];Object(o["a"])(this,e),this.name=t,this.description=r,this.baseCost=i,this.cps=a,this.continuous=c,this.numPurchased=0,this.icon=s,this.currency="USD",this.inflationDivisor=1e3}return Object(c["a"])(e,[{key:"inflation",value:function(e){return Math.sqrt(e)*(this.numPurchased/this.inflationDivisor)}},{key:"cost",value:function(){for(var e=this.baseCost,t=0;t<this.numPurchased;t++)e=Number(e+this.inflation(e));return e}},{key:"buy",value:function(){this.numPurchased+=1}}]),e}()),l=[new u("Pentium 3","An aging slab of silicon, but can solve some hashes in a pinch.",5,.1010101,n("d132")),new u("Repurposed Bitcoin ASIC","Dedicated chip just for solving hashes, stripped from an abandoned PRC mining warehouse. Should help.",100,.1,n("d649")),new u("RTX 4090","Unreleased NVIDIA card. Does Fortnite at 12fps, basically unplayable. Just use it to mine some coin.",1e3,1,n("e503")),new u("Specialized $THX ASIC","CPU architect Fromm Lesche designed $THX ASIC. Dramatic improvement over unspecialized ASIC.",1e4,2,n("d649"))],f=l.reduce((function(e,t){return e[t.name]=t,e}),{}),d=n("1da1"),m=(n("96cf"),n("a18c")),h=function(){function e(t){var r=t.name,i=t.description,a=t.baseCost,s=t.currency,c=t.cbAction,u=t.qty,l=void 0===u?999999:u,f=t.icon,d=void 0===f?n("ae1d"):f,m=t.inflates,h=void 0===m||m,p=t.inflationDivisor,g=void 0===p?1:p,A=t.requiresAutominer,v=void 0!==A&&A;Object(o["a"])(this,e),this.name=r,this.description=i,this.baseCost=a,this.currency=s,this.numPurchased=0,this.inflationDivisor=g,this.qty=l,this.icon=d,this.cbAction=c,this.inflates=h,this.requiresAutominer=v}return Object(c["a"])(e,[{key:"inflation",value:function(e){return Math.sqrt(e)*(this.numPurchased/this.inflationDivisor)}},{key:"cost",value:function(){for(var e=this.baseCost,t=0;t<this.numPurchased;t++)e=Number(e+this.inflation(e));return e}},{key:"buy",value:function(){this.numPurchased+=1,this.cbAction(this.cbArgs)}},{key:"inStock",value:function(){return this.qty-this.numPurchased>0}}]),e}(),p=[new h({name:"Coffee",description:"Think faster, solve more hashes. Get 0.015 $THX more per click.",baseCost:1,currency:"USD",cbAction:function(){var e=Object(d["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:w.dispatch("Miner/addClickWorth",.015);case 1:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}(),qty:1,icon:n("4cb7")}),new h({name:"Pen & Paper",description:"Solve your mining hashes in a fraction of the time using an intern with pen and paper. Faster than in your head. +0.01 coin per click.",baseCost:10,currency:"USD",cbAction:function(){var e=Object(d["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:w.dispatch("Miner/addClickWorth",.1);case 1:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}(),qty:1,icon:n("478c")}),new h({name:"Intern with used TI-83",description:"Technically a computer. Intern will be grateful. +0.1 coin per click.",baseCost:20,currency:"USD",cbAction:function(){var e=Object(d["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:w.dispatch("Miner/addClickWorth",.2);case 1:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}(),qty:1,icon:n("b99b")}),new h({name:"Ticker message",description:"Buy this and you can write a message that will scroll across the bottom of the stream.",baseCost:2,currency:"THX",cbAction:function(){var e=Object(d["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,w.dispatch("Miner/createTickerMessagePermission");case 2:m["a"].push({name:"Message"});case 3:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}()}),new h({name:"Picture on the Green Screen",description:"Buy this and you can put a picture on the screen behind the band",baseCost:5,currency:"THX",cbAction:function(){var e=Object(d["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,w.dispatch("Miner/createPicturePermission");case 2:m["a"].push({name:"Picture"});case 3:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}()}),new h({name:"Repurposed Peloton bike generator",description:"Rip open that broken Peloton and wire it up to your mining rig. +13% efficiency.",baseCost:200,currency:"USD",cbAction:function(){var e=Object(d["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t=.13,w.dispatch("Miner/increaseEfficiency",t);case 2:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}(),qty:1,icon:n("7044"),requiresAutominer:!0}),new h({name:"Bribe GRU employee.",description:"He'll remove the governor on your power meter, giving you a few more MW/s. Increases efficiency 20%.",baseCost:500,currency:"USD",cbAction:function(){var e=Object(d["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t=.1,w.dispatch("Miner/increaseEfficiency",t);case 2:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}(),qty:1,icon:n("7044"),requiresAutominer:!0}),new h({name:"Bribe GRU employee.",description:"He'll remove the governor on your power meter, giving you a few more MW/s. Increases efficiency 100%.",baseCost:500,currency:"USD",cbAction:function(){var e=Object(d["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t=1,w.dispatch("Miner/increaseEfficiency",t);case 2:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}(),qty:1,icon:n("7044"),requiresAutominer:!0}),new h({name:"Hedgefund Bro Investment Manager",description:"You wouldn't want to spend more than 5 minutes with him, but he's got this algorithm that will sell your $THX at just the right time.",baseCost:.1,currency:"USD",cbAction:function(){var e=Object(d["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:w.dispatch("Miner/autosell");case 1:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}(),qty:1,requiresAutominer:!0}),new h({name:"Tesla Solar Panel",description:"Elon Musk has offered you the opportunity to test out his experimental new technology called batteries and the sun. +10% efficiency.",baseCost:1e3,currency:"USD",cbAction:function(){var e=Object(d["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t=.1,w.dispatch("Miner/increaseEfficiency",t);case 2:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}(),qty:100,icon:n("7044"),requiresAutominer:!0}),new h({name:"Hydrofarm",description:"An undersea turbine system just to help you get some coin. +200% efficiency.",baseCost:1e3,currency:"USD",cbAction:function(){var e=Object(d["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t=1,w.dispatch("Miner/increaseEfficiency",t);case 2:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}(),qty:100,icon:n("7044"),requiresAutominer:!0}),new h({name:"Power grid for Estonia",description:"Take over this Eastern European country and increase your mining power 400%.",baseCost:1e5,currency:"USD",cbAction:function(){var e=Object(d["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t=4,w.dispatch("Miner/increaseEfficiency",t);case 2:case"end":return e.stop()}}),e)})));function t(){return e.apply(this,arguments)}return t}(),qty:1,icon:n("ef67"),requiresAutominer:!0})],g=p.reduce((function(e,t){return e[t.name]=t,e}),{}),A={state:function(){return{message:!1,picture:!1,totalCoin:0,lifetimeCoin:0,highCoin:0,totalUsd:0,lifetimeUsd:0,exchangeRate:10,highUsd:0,clickWorth:.001,leaderboard:{},efficiency:1.01,autosell:!1,upgrades:f,purchases:g}},getters:{totalCoin:function(e){return e.totalCoin},lifetimeTotalCoin:function(e){return e.lifetimeCoin},lifetimeHighCoin:function(e){return e.highCoin},totalUsd:function(e){return e.totalUsd},lifetimeUsd:function(e){return e.lifetimeUsd},exchangeRate:function(e){return e.exchangeRate},leaderboard:function(e){return e.leaderboard},currentCps:function(e){return Object.values(e.upgrades).reduce((function(e,t){return e+=t.cps*t.numPurchased,e}),0)*e.efficiency},efficiency:function(e){return e.efficiency},clickWorth:function(e){return e.clickWorth},upgrades:function(e){return e.upgrades},availableUpgrades:function(e){var t=Object.values(e.upgrades);return t.filter((function(t){return t.baseCost<=e.highUsd}))},availablePurchases:function(e){var t=Object.values(e.purchases),n=Object.values(e.upgrades).some((function(e){return e.numPurchased>0}));return t.filter((function(t){return!(!t.inStock()||t.requiresAutominer&&!n)&&("USD"===t.currency?t.cost()<=e.highUsd:t.cost()<=e.highCoin)}))},canMessage:function(e){return e.message},canPicture:function(e){return e.picture},shouldAutosell:function(e){return e.autosell}},mutations:{ADD_COIN_AMOUNT:function(e,t){e.totalCoin+=t,e.totalCoin>e.highCoin&&(e.highCoin=e.totalCoin),e.lifetimeCoin+=t},ADD_USD_AMOUNT:function(e,t){e.totalUsd+=t,e.totalUsd>e.highUsd&&(e.highUsd=e.totalUsd),e.lifetimeUsd+=t},SUBTRACT_COIN_AMOUNT:function(e,t){e.totalCoin-=t},SUBTRACT_USD_AMOUNT:function(e,t){e.totalUsd-=t},UPDATE_LEADERBOARD:function(e,t){e.leaderboard=t},ADD_TICKER_MESSAGE:function(e){e.message=!0},ADD_PICTURE:function(e){e.picture=!0},ADD_UPGRADE:function(e){localStorage.setItem("minerState",JSON.stringify(e))},ADD_PURCHASE:function(e){localStorage.setItem("minerState",JSON.stringify(e))},INCREASE_EFFICIENCY:function(e,t){e.efficiency+=t},ADD_CLICK_WORTH:function(e,t){e.clickWorth+=t},AUTOSELL:function(e){e.autosell=!0},LOAD_STATE:function(e,t){var n=t.totalCoin,r=t.lifetimeCoin,i=t.highCoin,a=t.totalUsd,s=t.highUsd,o=t.lifetimeUsd,c=t.upgrades,u=t.purchases,l=t.exchangeRate,f=t.clickWorth,d=t.efficiency,m=t.autosell;e.totalCoin=n||0,e.lifetimeCoin=r||0,e.highCoin=i||0,e.totalUsd=a||0,e.highUsd=s||0,e.lifetimeUsd=o||0,e.exchangeRate=l||0,e.clickWorth=f,e.efficiency=d,e.autosell=m;for(var h=0,p=Object.keys(c);h<p.length;h++){var g=p[h];e.upgrades[g]?(e.upgrades[g].numPurchased=c[g].numPurchased||0,e.upgrades[g].inflationDivisor=c[g].inflationDivisor||e.upgrades[g].inflationDivisor):console.log(g,"not found in state, discarding`")}for(var A=0,v=Object.keys(u);A<v.length;A++){var b=v[A];e.purchases[b]?(e.purchases[b].numPurchased=u[b].numPurchased||0,e.purchases[b].inflationDivisor=u[b].inflationDivisor||e.purchases[b].inflationDivisor):console.log(b,"not found in state, discarding`")}},SAVE_STATE:function(e){console.log("boop",JSON.stringify(e)),localStorage.setItem("minerState",JSON.stringify(e))}},actions:{addCoinAmount:function(e,t){e.commit("ADD_COIN_AMOUNT",t)},sellCoinForUsd:function(e,t){t<=e.state.totalCoin&&(e.commit("SUBTRACT_COIN_AMOUNT",t),e.commit("ADD_USD_AMOUNT",t*e.state.exchangeRate))},spendCoin:function(e,t){return e.getters["totalCoin"]-t>=0&&(e.commit("SUBTRACT_COIN_AMOUNT",t),!0)},spendUsd:function(e,t){return e.getters["totalUsd"]-t>=0&&(e.commit("SUBTRACT_COIN_AMOUNT",t),!0)},updateLeaderboard:function(e,t){e.commit("UPDATE_LEADERBOARD",t)},buyUpgrade:function(e,t){return e.getters["totalUsd"]-t.cost()>=0&&(e.commit("ADD_UPGRADE",t),e.commit("SUBTRACT_USD_AMOUNT",t.cost()),e.state.upgrades[t.name].buy(),!0)},buyPurchase:function(e,t){if("USD"===t.currency){if(e.getters["totalUsd"]-t.cost()>=0)return e.commit("ADD_PURCHASE",t),e.commit("SUBTRACT_USD_AMOUNT",t.cost()),e.state.purchases[t.name].buy(),!0}else if(e.getters["totalCoin"]-t.cost()>=0)return e.commit("ADD_PURCHASE",t),e.commit("SUBTRACT_COIN_AMOUNT",t.cost()),e.state.purchases[t.name].buy(),!0;return!1},createTickerMessagePermission:function(e){e.commit("ADD_TICKER_MESSAGE")},createPicturePermission:function(e){e.commit("ADD_PICTURE")},increaseEfficiency:function(e,t){e.commit("INCREASE_EFFICIENCY",t)},addClickWorth:function(e,t){e.commit("ADD_CLICK_WORTH",t)},setExchangeRate:function(e,t){e.commit("SET_EXCHANGE_RATE",t)},autosell:function(e){e.commit("AUTOSELL")},initState:function(e){if(localStorage.getItem("minerState")){console.log("loading old state...");var t=JSON.parse(localStorage.getItem("minerState"));e.commit("LOAD_STATE",t)}},saveState:function(e){console.log("saving state"),e.commit("SAVE_STATE")}},namespaced:!0},v=n("2909"),b=(n("cb29"),n("a434"),n("99af"),n("0a14")),C=Array(7).fill({char:" "}),y={state:function(){return{messageQueue:[{char:"o"}]}},getters:{messageQueue:function(e){return e.messageQueue}},mutations:{POP_LETTER:function(e){if(e.messageQueue.length>0){var t,n=30;if(e.messageQueue.splice(0,1),e.messageQueue.length<n)(t=e.messageQueue).push.apply(t,Object(v["a"])(C).concat(Object(v["a"])(b["a"].randomMessage())))}},ADD_MESSAGE:function(e,t){var n,r=t.username,i=t.message;console.log("boooo",r),console.log("add msg"),(n=e.messageQueue).push.apply(n,Object(v["a"])(C).concat([{html:'<span class="text-blue-800">'.concat(r,"</span>:&nbsp")}],Object(v["a"])(b["a"].stringToTickerArray(i)))),e.messageQueue.push()}},actions:{getNextLetter:function(){var e=Object(d["a"])(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.state.messageQueue[0],e.next=3,t.commit("POP_LETTER");case 3:return e.abrupt("return",n||" ");case 4:case"end":return e.stop()}}),e)})));function t(t){return e.apply(this,arguments)}return t}(),addMessage:function(e,t){var n=t.message,r=t.username;console.log("booo",r),e.commit("ADD_MESSAGE",{message:n,username:r})}},namespaced:!0},U=(n("c740"),n("1d61")),E={state:function(){return{unapprovedItems:[]}},getters:{unapprovedItems:function(e){return Object(v["a"])(e.unapprovedItems)}},mutations:{ADD_UNAPPROVED_ITEM:function(e,t){e.unapprovedItems.push(t)},REMOVE_ITEM:function(e,t){var n=e.unapprovedItems.findIndex((function(e){return e.uuid=t.uuid}));n>-1&&e.unapprovedItems.splice(n,1)}},actions:{addUnapprovedItem:function(e,t){console.log(t.uuid),e.commit("ADD_UNAPPROVED_ITEM",t)},approveItem:function(e,t){U["a"].approveItem(t),e.commit("REMOVE_ITEM",t)}},namespaced:!0};r["a"].use(i["a"]);var w=t["a"]=new i["a"].Store({modules:{Chat:a,User:s,Miner:A,Ticker:y,Admin:E}})},c4f2:function(e,t,n){"use strict";var r=n("8e27"),i=Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_ENDPOINT_URL;console.log(Object({NODE_ENV:"production",BASE_URL:"/"}));var a=Object(r["io"])(i);a.onAny((function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];console.log(e,n)})),t["a"]=a},c52f:function(e,t,n){"use strict";var r=n("c4f2"),i=n("c0d6");t["a"]={sendMessage:function(e){r["a"].emit("sentMessage",{message:e})},registerListeners:function(){r["a"].on("message",(function(e){i["a"].dispatch("Chat/addMessage",e)}))}}},c6c7:function(e,t,n){e.exports=n.p+"img/dollarsign4.afe0dfc3.gif"},c898:function(e,t,n){},d132:function(e,t,n){e.exports=n.p+"img/pentium.1e08ef75.jpg"},d649:function(e,t,n){e.exports=n.p+"img/asic.e724a44a.jpg"},e503:function(e,t,n){e.exports=n.p+"img/rtx4090.d32f8657.jpg"},ef67:function(e,t,n){e.exports=n.p+"img/estonia.5ff1f6fe.png"},fba7:function(e,t,n){"use strict";n("7168")}});
//# sourceMappingURL=app.418d3ff3.js.map