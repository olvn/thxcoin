(function(e){function t(t){for(var n,r,a=t[0],o=t[1],c=t[2],u=0,l=[];u<a.length;u++)r=a[u],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&l.push(s[r][0]),s[r]=0;for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n]);d&&d(t);while(l.length)l.shift()();return i.push.apply(i,c||[]),A()}function A(){for(var e,t=0;t<i.length;t++){for(var A=i[t],n=!0,r=1;r<A.length;r++){var a=A[r];0!==s[a]&&(n=!1)}n&&(i.splice(t--,1),e=o(o.s=A[0]))}return e}var n={},r={app:0},s={app:0},i=[];function a(e){return o.p+"js/"+({about:"about",chat:"chat",login:"login",ticker:"ticker"}[e]||e)+"."+{about:"49d252c5",chat:"7120fe5e",login:"c645fe91",ticker:"45521cf6"}[e]+".js"}function o(t){if(n[t])return n[t].exports;var A=n[t]={i:t,l:!1,exports:{}};return e[t].call(A.exports,A,A.exports,o),A.l=!0,A.exports}o.e=function(e){var t=[],A={login:1,ticker:1};r[e]?t.push(r[e]):0!==r[e]&&A[e]&&t.push(r[e]=new Promise((function(t,A){for(var n="css/"+({about:"about",chat:"chat",login:"login",ticker:"ticker"}[e]||e)+"."+{about:"31d6cfe0",chat:"31d6cfe0",login:"ff480867",ticker:"0b540902"}[e]+".css",s=o.p+n,i=document.getElementsByTagName("link"),a=0;a<i.length;a++){var c=i[a],u=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(u===n||u===s))return t()}var l=document.getElementsByTagName("style");for(a=0;a<l.length;a++){c=l[a],u=c.getAttribute("data-href");if(u===n||u===s)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var n=t&&t.target&&t.target.src||s,i=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=n,delete r[e],d.parentNode.removeChild(d),A(i)},d.href=s;var g=document.getElementsByTagName("head")[0];g.appendChild(d)})).then((function(){r[e]=0})));var n=s[e];if(0!==n)if(n)t.push(n[2]);else{var i=new Promise((function(t,A){n=s[e]=[t,A]}));t.push(n[2]=i);var c,u=document.createElement("script");u.charset="utf-8",u.timeout=120,o.nc&&u.setAttribute("nonce",o.nc),u.src=a(e);var l=new Error;c=function(t){u.onerror=u.onload=null,clearTimeout(d);var A=s[e];if(0!==A){if(A){var n=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+n+": "+r+")",l.name="ChunkLoadError",l.type=n,l.request=r,A[1](l)}s[e]=void 0}};var d=setTimeout((function(){c({type:"timeout",target:u})}),12e4);u.onerror=u.onload=c,document.head.appendChild(u)}return Promise.all(t)},o.m=e,o.c=n,o.d=function(e,t,A){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:A})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var A=Object.create(null);if(o.r(A),Object.defineProperty(A,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(A,n,function(t){return e[t]}.bind(null,n));return A},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/",o.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],u=c.push.bind(c);c.push=t,c=c.slice();for(var l=0;l<c.length;l++)t(c[l]);var d=u;i.push([0,"chunk-vendors"]),A()})({0:function(e,t,A){e.exports=A("56d7")},"034f":function(e,t,A){"use strict";A("85ec")},"0899":function(e,t){e.exports="data:image/gif;base64,R0lGODlhGQAXAOZ/AClRqctx8zFJjStt8Gzv/yNXxTUCBKNVpnVMGqGJX8SqOvPwllUofDcWLv/1bzOF+drNT8MAklgrhWiPlpVIe/8Aysm7YTcpQ/v60v8A/1ItJs+Rz7cJgTFs3e0AtJ58KpUTY5v7/HE0rjQ8a1fN/fnkWEUcTYhFzWszlFcdL1cpDnTd/7AOdCVd04NkTDdFd4cSRx9UzHo6cNSyOYX5////x6ZY2a9a6j0jLDUJE0UVCNgAo8muO8GlOGS45unFQcoAmOuE/kciZf65/8cAlc2xPE6v/mktSf8A4rUZo7uhNzsdU0k+ReC9Pz+a/e/ZS2INJ0wmcmY6FTYPG0wHFLeaNFIJGqX//5NvJqKDLf//nkMOIo5rJTwIBtEAnv//4OkS5OaW7eeb/YlrOcsIkuHZnfCk/mU/J9Fs4LKLMa+QMc7CenDV1kJysVwkaJcXfYA/t/2c/43p/1saZ5br7N8Y15TJz5+AK2GhvHUSU1qm0O7ngv/9jn9YHqN+KzMAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQJAAB/ACwAAAAAGQAXAAAHnoB/goOEhYaHiImKi4yJSUmNiXkZYJGISRkZUJaFBnWZMJyEIJkZZFaRBm+rmKUeZDCxMFSJFUiluEgeHjteRCyJUEA7FbgZul5ARBwGilYcRMSZusoRIM2LXSzRHhUevhEw2IxQEcO91aiRUERA7u5EEeqNMET2ERH3m43a9ywc+YiIa0RFGQtaf8rZ69LIikBDIIjME0WxosWLiAIBACH5BAkAAH8ALAAAAAAZABcAAAe+gH+Cg4SFhoeIiYqLjIpdCCqNiF1jEAiShxprJQgGmDpdggYJe0+djVIWCS4aZwkLDk19oYxdEFoYGGVafCUzWTqSKhAONV8YWr5KWCqgnopSTQ5aNXxPPD0KCmp3Us+IBlhNJQ4lPzzaPDxFd8GKCEVNP01F6Nlcl4tdfgro6go9sjRDlU2bQSWnGOlIg05BlYJVIjXqM0MBlz4I7mjr4Y4RAiw63HXhwiMiJkM6PiiRchLlB4ktC32LSTNmIAAh+QQJAAB/ACwAAAAAGQAXAAAHzoB/goOEhYaHiImKi4yNTF2NggaEBhoTdkyNUxdMOIM4E3Q+F40NHT4TnaB0K21TjTkAAytseHoEV0YCr4wGFzEPBDQ0V3IPApOaAjFOuCErx7yNLwUDRgQEJA8dIw05yYlTIzEtA05ODwMDLQLd4IZdTADk6ust9/cv74XyMQUF+P79AyDgRY5Dvv7F8CcwBoARF3Ac3CcoBzWCAgA0HNGFYiEDDS5MmZLjwrwCAKZ4TJSswbxdkQ69iPFCWsxBDQqMOHiTUoMGK3sKvRkIACH5BAUAAH8ALAAAAAAZABcAAAfBgH+Cg4SFhoeIiYqEBouOBltbjooGQgeSk4eVNhSNmYUGS3BoR42QKUeYizlLKAEHbnMyBxsbKZOsKDdBAWhhZhsoqokGDUISNnFDQ2I2DFuehgaQDSZRDAwnQUNmNhLQiTkmDNcMEhIiNwE3IkI5iuLl2BIoInAiDELRmjlTDUvXzgmU8CwTq3nY5rnJsQ9RsYT5AJoz0RDRlGtRTEzZuGQJxUkXGTSYJshADoYgyb37VCiHkI8sGTGsGLOmzUGBAAA7"},"0cea":function(e,t,A){e.exports=A.p+"img/email1.3322b099.gif"},"230e":function(e,t,A){"use strict";A("d3b7");var n=A("c4f2");t["a"]={registerUser:function(e){return new Promise((function(t){n["a"].emit("registerUser",{username:e},(function(A){console.log(e,"attempting register"),A.success?(t({success:!0}),n["a"].disconnect(),n["a"].auth={username:e},n["a"].connect(),localStorage.setItem("username",e)):t({success:!1,reason:A.reason})}))}))},loginUser:function(e){n["a"].disconnect(),n["a"].auth={username:e},n["a"].connect()},registerListeners:function(){}}},"30bf":function(e,t){e.exports="data:image/gif;base64,R0lGODlhPAAeAIcAAP///4SEhIyMjJSUlJycnK2trbW1tb29vcbGxs7OztbW1t7e3ufn5+/v7/f39/+EhO/v/97e/2trlGNjnHtz/0pCvbWt/6Wc/1pSrWNS/1pK91JC/0Ix/zEh3hgA/3Nj/0o5xjkh/ykQ7ykQ/8a9/5yM/4x7/9bO//8AGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwHoAwAh+QQAMgAAACwAAAAAPAAeAAcI/AAbNFiQoKDBgwgTKlzIcCGCAwUOLBi4oKLFixgzatzIESODBR8VFBhQUKDJkyhTqlzJUiWDly8PCCgpUECAAA1s3mzJsydKFA+AAl1gIIDEiT6TKkUZFIVTFAsOGE1g0mbOBTdxLt168qnTB0RnUuVKlmfTp0SNIs0ZAGtbrGW5egXKwICAA2Pj6j151mndADT3ChYaFKzMo4ITpyxwN6/ix4wDP1bMWOLkyZUdX94bWfPmuJUrfhacuazOt1lRp965tPNo0nfXxnW7mnXZ0q/1uo6rk3bF1bdjy869Fffe3sBBiyWu3DJzssaft24seqL1gdiva8/Ofbv37iPdKx8YH7E8xPPm06Nfr749+/cFCBwgIOB07fv48+vfT6BAQAAh+QQAMgAAACwAAAAAPAAeAAcI/AAdAFigIIHBgwgTKlzIsCHDAwYMMGjAYIHFixgzatzIsWNHBQcGJFDAQKBJACdTolypsiXLly5NOmBwQMDIBg4cBNgJYOfOnECDCh1KtChQFA+QImVgwCZJozlhSo05VWpSFFhRMHWKs2eAngp8BkUZFShZmWjPqjXrICvWBzS5Dj2bUiZLu3jrkr17NevWkSV1BggbgGCAsXVblr2r2KTbpU1v5jxBorJlEokrR9ibU/NamRYsTCYRQWBfrH9JotzgobVrD1Jbh+gqsERrEzFPtD7hgLUJlEqTwm2KQAHO3iI8aNiwYTlagR6Sc4CQ80J0D7+fC2zAgUMDAPsasBeNC1ggaw8CAVR9ncHBiRHJxS+2q7439pV3Ux8//zml6+QUjPDabw1QEEJrGXTFHG8biIAbZwKlVhIADXrAHHMU4AVAcsu1lpwJ0eFGwggfmJDcBzm1RgKF9803U2TG5cRacvFtACEArW3AXWslkHCbe5sBQIGFAiW3om9lBdUAjMeF58FlDLqGWXI2niDCBwCQ8CFKDZTAAZXQPYncg/NJaF5rnFEYH2ataZCTBdT5KN57Dg6pAUrRYebbXWSZidyTl7ln2XetdeCTAgtMEF0FC7AGQgAVeGAojk+qSaZa+p0Zn2tsFWkhZ3L+loEIHJgg4AhuGslidsidkveUAxRc2BxzfPa2QYYChSVBBx1gEIAE0pUAH5YLwrrBBYplepJ6MKlU37L1MSttmum5CICfzzVLl2CDHbqATz8lSReEOW1VHG16IbZsp0XVmq5MS8olrrMumnQouF/Nm25+MAbmbl43sttpwGlFpSxR2yY8V5LqKixUXMUxMJVQazms3bb1cmZuAgx07PHHIIcs8sgkl7xATQggAFFELLO88sottwxzzAbMPDPNMhtQAAEIEDCAAEAHLfTQRBdt9NFIE2BAQAAh/klDb3B5cmlnaHQgMTk5NiBBbmR5IEV2YW5zDQphbmR5ZUBpbnRlbGUubmV0DQpodHRwOi8vZ29sZC5pbnRlbGUubmV0L2FuZHllACH+71RoaXMgR0lGIGZpbGUgd2FzIGFzc2VtYmxlZCB3aXRoIEdJRiBDb25zdHJ1Y3Rpb24gU2V0IGZyb206DQoNCkFsY2hlbXkgTWluZHdvcmtzIEluYy4NClAuTy4gQm94IDUwMA0KQmVldG9uLCBPbnRhcmlvDQpMMEcgMUEwDQpDQU5BREEuDQoNClRoaXMgY29tbWVudCBibG9jayB3aWxsIG5vdCBhcHBlYXIgaW4gZmlsZXMgY3JlYXRlZCB3aXRoIGEgcmVnaXN0ZXJlZCB2ZXJzaW9uIG9mIEdJRiBDb25zdHJ1Y3Rpb24gU2V0ACH/C0dJRkNPTm5iMS4wAgIADgoAAgADAAAAAAAAAAAACkNsaXBib2FyZAAOGQACAAUAAAAAAAAAAAAZRDpcQW5pbWF0aW9uc1xlbWFpbDIuZ2lmAAA7"},"56d7":function(e,t,A){"use strict";A.r(t);A("e260"),A("e6cf"),A("cca6"),A("a79d");var n=A("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[e.isLoggedIn&&e.showNav?n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/"}},[e._v("Home")]),e._v(" | "),n("router-link",{attrs:{to:"/about"}},[e._v("About")]),n("router-link",{attrs:{to:"/chat"}},[n("img",{attrs:{src:A("30bf")}})])],1):e._e(),n("router-view")],1)},s=[],i=A("1da1"),a=(A("caad"),A("b0c0"),A("96cf"),A("c52f")),o=A("230e"),c=A("8d28"),u={mounted:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var A;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:A=localStorage.getItem("username"),A&&o["a"].loginUser(A),a["a"].registerListeners(),c["a"].registerListeners(),e.$store.dispatch("Miner/initState"),e.saveInterval=setInterval((function(){e.$store.dispatch("Miner/saveState")}),5e3);case 6:case"end":return t.stop()}}),t)})))()},data:function(){return{saveInterval:null}},computed:{isLoggedIn:function(){return!!this.$store.getters["User/currentUser"]},showNav:function(){return["ticker"].includes(this.$route.name)}},beforeDestroy:function(){this.$store.dispatch("Miner/saveState"),clearInterval(this.saveInterval)}},l=u,d=(A("034f"),A("2877")),g=Object(d["a"])(l,r,s,!1,null,null,null),f=g.exports,h=A("c0d6"),m=(A("c898"),A("a18c"));n["a"].config.productionTip=!1;var p=localStorage.getItem("username")||null;h["a"].dispatch("User/registerUser",p).then((function(){new n["a"]({render:function(e){return e(f)},router:m["a"],store:h["a"]}).$mount("#app")}))},"85ec":function(e,t,A){},"8d28":function(e,t,A){"use strict";var n=A("c4f2"),r=A("c0d6");t["a"]={updateTotalCoin:function(){n["a"].emit("updateTotals",{coin:r["a"].getters["Miner/totalCoin"],usd:r["a"].getters["Miner/totalUsd"]})},registerListeners:function(){n["a"].on("updateGlobalTotals",(function(e){r["a"].dispatch("Miner/updateLeaderboard",e)}))}}},a18c:function(e,t,A){"use strict";A("d3b7"),A("3ca3"),A("ddb0"),A("b0c0");var n=A("2b0e"),r=A("8c4f"),s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("div",{staticClass:"text-center m-2"},[n("a",{staticClass:"border-r border-b bg-gray-200 border-black p-2 hover:bg-gray-500",on:{click:e.mineCoin}},[e._v("MINE "+e._s(e.clickWorth)+" $THX")]),n("a",{staticClass:"border-r border-b bg-gray-200 border-black p-2 hover:bg-gray-500",on:{click:e.sellCoin}},[e._v(" SELL $THX ")])]),n("div",[e._v("1 $THX ≈ "+e._s(e.exchangeRate.toFixed(5))+" USD")]),n("div",{staticClass:"flex m-4 p-4 place-content-between text-center"},[n("div",{staticClass:"w-1/3"},[n("div",[e._v(e._s(e.totalUsd.toFixed(2)))]),e._m(0)]),n("div",{staticClass:"w-1/3"},[n("div",[e._v(" "+e._s(e.totalCoin.toFixed(5))+" ")]),e._m(1)]),e._m(2)]),e._l(e.purchases,(function(t){return n("div",{key:t.name,staticClass:"flex items-center bg-white m-2 p-2"},[n("img",{staticClass:"w-12 h-12",attrs:{src:A("0cea")}}),n("div",{staticClass:"flex-grow"},[n("div",[e._v(" "+e._s(t.name)+" ")]),n("div",{staticClass:"text-xs"},[e._v(e._s(t.description))])]),n("div",{staticClass:"text-center"},[n("div",{staticClass:"font-bold text-red-600 text-xs",class:{invisible:"USD"===t.currency?t.cost()<=e.totalUsd:t.cost()<=e.totalCoin}},[e._v(" can't afford ")]),n("a",[n("div",{staticClass:"border-r border-b bg-gray-200 border-black p-2 hover:bg-gray-500",class:{"bg-gray-300 text-gray-400":t.cost()>e.totalUsd},on:{click:function(A){return e.buyPurchase(t)}}},["USD"===t.currency?n("span",[e._v(" $THX ")]):n("span",[e._v(" $"+e._s(t.cost().toFixed(2))+" ")])])]),n("div",{staticClass:"text-xs"},[e._v("owned: "+e._s(t.numPurchased))])])])})),e._l(e.upgrades,(function(t){return n("div",{key:t.name,staticClass:"flex items-center bg-white m-2 p-2"},[n("img",{staticClass:"w-12 h-12",attrs:{src:A("0cea")}}),n("div",{staticClass:"flex-grow"},[n("div",[e._v(" "+e._s(t.name)+" "),n("span",{staticClass:"text-xs text-green-500"},[e._v("+"+e._s(t.cps)+" $THX/s")])]),n("div",{staticClass:"text-xs"},[e._v(e._s(t.description))])]),n("div",{staticClass:"text-center"},[n("div",{staticClass:"font-bold text-red-600 text-xs",class:{invisible:t.cost()<=e.totalUsd}},[e._v(" can't afford ")]),n("a",[n("div",{staticClass:"border-r border-b bg-gray-200 border-black p-2 hover:bg-gray-500",class:{"bg-gray-300 text-gray-400":t.cost()>e.totalUsd},on:{click:function(A){return e.buyUpgrade(t)}}},[e._v(" $"+e._s(t.cost().toFixed(2))+" ")])]),n("div",{staticClass:"text-xs"},[e._v("owned: "+e._s(t.numPurchased))])])])})),e._v(" "+e._s(e.cps)+" "),n("a",{on:{click:function(t){return e.$store.dispatch("Miner/initState")}}},[e._v("ok ")])],2)},i=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{},[n("img",{staticClass:"w-6 h-6 inline",attrs:{src:A("c6c7")}}),e._v(" USD ")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("img",{staticClass:"w-6 h-6 inline",attrs:{src:A("0899")}}),e._v(" THX ")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"w-1/3"},[n("div",[e._v("25334")]),n("div",[n("img",{staticClass:"w-6 h-6 inline",attrs:{src:A("ab2a")}}),e._v(" MW/s ")])])}],a=A("1da1"),o=(A("96cf"),A("8d28")),c={name:"Miner",mounted:function(){var e=this;this.totalUpdateInterval=setInterval((function(){e.$store.dispatch("Miner/addCoinAmount",e.cps/1e3*e.timerMs)}),this.timerMs),this.transmissionInterval=setInterval((function(){o["a"].updateTotalCoin()}))},data:function(){return{timerMs:50,totalUpdateInterval:null}},computed:{totalCoin:function(){return this.$store.getters["Miner/totalCoin"]},lifetimeTotalCoin:function(){return this.$store.getters["Miner/lifetimeTotal"]},lifetimeHighCoin:function(){return this.$store.getters["Miner/lifetimeHigh"]},totalUsd:function(){return this.$store.getters["Miner/totalUsd"]},clickWorth:function(){return this.$store.getters["Miner/clickWorth"]},exchangeRate:function(){return this.$store.getters["Miner/exchangeRate"]},leaders:function(){return this.$store.getters["Miner/leaderboard"]},cps:function(){return this.$store.getters["Miner/currentCps"]},upgrades:function(){return this.$store.getters["Miner/availableUpgrades"]},purchases:function(){return this.$store.getters["Miner/availablePurchases"]}},methods:{mineCoin:function(){this.$store.dispatch("Miner/addCoinAmount",this.clickWorth)},sellCoin:function(){this.$store.dispatch("Miner/sellCoinForUsd",this.totalCoin)},buyUpgrade:function(e){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function A(){return regeneratorRuntime.wrap((function(A){while(1)switch(A.prev=A.next){case 0:return A.next=2,t.$store.dispatch("Miner/buyUpgrade",e);case 2:case"end":return A.stop()}}),A)})))()},buyPurchase:function(e){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function A(){return regeneratorRuntime.wrap((function(A){while(1)switch(A.prev=A.next){case 0:return console.log(e),A.next=3,t.$store.dispatch("Miner/buyPurchase",e);case 3:case"end":return A.stop()}}),A)})))()}},beforeDestroy:function(){clearInterval(this.totalUpdateInterval)}},u=c,l=A("2877"),d=Object(l["a"])(u,s,i,!1,null,"0c1144c4",null),g=d.exports,f=A("c0d6");n["a"].use(r["a"]);var h=[{path:"/",name:"Miner",component:g},{path:"/login",name:"Login",component:function(){return A.e("login").then(A.bind(null,"a55b"))},beforeEnter:function(e,t,A){console.log(!f["a"].getters["User/currentUser"]),f["a"].getters["User/currentUser"]?A({name:"Miner"}):A()}},{path:"/about",name:"About",component:function(){return A.e("about").then(A.bind(null,"f820"))}},{path:"/chat",name:"Chat",component:function(){return A.e("chat").then(A.bind(null,"293a"))}},{path:"/ticker",name:"Ticker",component:function(){return A.e("ticker").then(A.bind(null,"e2dd"))}},{path:"/message",name:"Message",component:function(){return A.e("chat").then(A.bind(null,"8e2a"))},beforeEnter:function(e,t,A){console.log(f["a"].getters["Miner/canMessage"],"foo foo"),f["a"].getters["Miner/canMessage"]?A():A({name:"Miner"})}}],m=new r["a"]({routes:h});m.beforeEach((function(e,t,A){console.log(f["a"].getters["User/currentUser"]),"Login"===e.name||f["a"].getters["User/currentUser"]?A():A({name:"Login"})}));t["a"]=m},ab2a:function(e,t){e.exports="data:image/gif;base64,R0lGODlhIAAgALMAAP////zzBf9kAt0IBvIIhEYApQAA1AKr6h+3FABkEVYsBZBxOsDAwICAgEBAQAAAACH/C05FVFNDQVBFMi4wAwEAAAAh/h1HaWZCdWlsZGVyIDAuMSBieSBZdmVzIFBpZ3VldAAh+QQFBQAAACwAAAAAIAAgAEAEiBDISau9OL8Xuvdb0zBZtX3o9ogMqXFdOLZl/aLfY594rP41Hk42C3JULJdtyWyWhMMVE5pajZawXk+FzUaTXSGy2OTJWkrnGO1su9+An3zzpuZ0am9VVNbfWVN+IFZpT4JaMTtyiAFnXYhnNEZaa4UalISSfYMiZHk+mXUwkXBxjVaepZ2acBEAIfkEBQUAAAAsAAAAACAAIABABHkQyEmrvTi/F7r3W9MwWbV96PaIDFkCbSy7b21yKFifeaf+jxcvF2LRbMikcqnB9ULIIXE1sjl70+DumqK2rMCfkUkum89oSRhIlnaX7k8xGQd5o1z5HYzta0thfQFFR01+Xl9CeT6EhRpYjY4vIpSVI5JpmZqbnBMRACH5BAUFAAAALAAAAAAgACAAQARdEMhJq704vxe691vTMNkknqhIlmzrutsnP20sg4/67nzv/z/bLRB6CW+hEWzYSa6A0Kh0Sq1ON9jsJshhbnnHWa6xC3+cxu4QDVMjx8+2Nqv7Me74vHXP7/v/gFURACH5BAUFAAAALAAAAAAgACAAQAQiEMhJq7046827/2AojmRpnmiqrmzrvnAsz3Rt33iu77wcAQA7"},c0d6:function(e,t,A){"use strict";var n=A("2b0e"),r=A("2f62"),s={state:function(){return{messages:[]}},getters:{messages:function(e){return e.messages}},mutations:{ADD_MESSAGE:function(e,t){e.messages.push(t)}},actions:{addMessage:function(e,t){e.commit("ADD_MESSAGE",t)}},namespaced:!0},i={state:function(){return{currentUser:null}},getters:{currentUser:function(e){return e.currentUser}},mutations:{REGISTER_USER:function(e,t){e.currentUser=t}},actions:{registerUser:function(e,t){t&&t.length>0&&e.commit("REGISTER_USER",t)}},namespaced:!0},a=(A("13d5"),A("07ac"),A("4de4"),A("b64b"),A("b0c0"),A("d4ec")),o=A("bee2"),c=(A("a4d3"),A("e01a"),A("a9e3"),function(){function e(t,A,n,r){var s=!(arguments.length>4&&void 0!==arguments[4])||arguments[4];Object(a["a"])(this,e),this.name=t,this.description=A,this.baseCost=n,this.cps=r,this.continuous=s,this.numPurchased=0,this.inflationDivisor=1e3}return Object(o["a"])(e,[{key:"inflation",value:function(e){return Math.sqrt(e)*(this.numPurchased/this.inflationDivisor)}},{key:"cost",value:function(){for(var e=this.baseCost,t=0;t<this.numPurchased;t++)e=Number(e+this.inflation(e));return e}},{key:"buy",value:function(){this.numPurchased+=1}}]),e}()),u=[new c("Pentium 3","An aging slab of silicon, but can solve some hashes in a pinch.",5,1010101e-11),new c("Repurposed Bitcoin ASIC","Dedicated chip just for solving hashes, stripped from an abandoned PRC mining warehouse. Should help.",100,.01),new c("macbiook air","Dedicated chip just for solving hashes, stripped from an abandoned PRC mining warehouse. Should help.",100,.055555),new c("RTX 4090","Fortnite 12fps basically unplayable.",100,1),new c("Big Pussy","Fortnite 12fps basically unplayable.",5e3,.00101010101)],l=u.reduce((function(e,t){return e[t.name]=t,e}),{}),d=A("1da1"),g=(A("96cf"),A("a18c")),f=function(){function e(t,A,n,r,s,i){var o=arguments.length>6&&void 0!==arguments[6]?arguments[6]:100;Object(a["a"])(this,e),this.name=t,this.description=A,this.baseCost=n,this.currency=r,this.numPurchased=0,this.inflationDivisor=o,this.cbAction=s,this.cbArgs=i}return Object(o["a"])(e,[{key:"inflation",value:function(e){return Math.sqrt(e)*(this.numPurchased/this.inflationDivisor)}},{key:"cost",value:function(){for(var e=this.baseCost,t=0;t<this.numPurchased;t++)e=Number(e+this.inflation(e));return e}},{key:"buy",value:function(){this.numPurchased+=1,console.log("afldsjf"),this.cbAction(this.cbArgs)}}]),e}(),h=[new f("Ticker message","Buy this and you can write a message that will scroll across the bottom of the stream.",2,"THX",Object(d["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,v.dispatch("Miner/createMessage");case 2:g["a"].push({name:"Message"});case 3:case"end":return e.stop()}}),e)})))),new f("Picture on the Green Screen","Buy this and you can put a picture on the screen behind the band",5,"THX",Object(d["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,v.dispatch("Miner/createPicture");case 2:g["a"].push({name:"Picture"});case 3:case"end":return e.stop()}}),e)}))))],m=h.reduce((function(e,t){return e[t.name]=t,e}),{}),p={state:function(){return{message:!1,totalCoin:0,lifetimeCoin:0,highCoin:0,totalUsd:100,lifetimeUsd:100,exchangeRate:10,highUsd:100,clickWorth:.001,leaderboard:{},upgrades:l,purchases:m}},getters:{totalCoin:function(e){return e.totalCoin},lifetimeTotalCoin:function(e){return e.lifetimeCoin},lifetimeHighCoin:function(e){return e.highCoin},totalUsd:function(e){return e.totalUsd},lifetimeUsd:function(e){return e.lifetimeUsd},exchangeRate:function(e){return e.exchangeRate},leaderboard:function(e){return e.leaderboard},currentCps:function(e){return Object.values(e.upgrades).reduce((function(e,t){return e+=t.cps*t.numPurchased,e}),0)},clickWorth:function(e){return e.clickWorth},upgrades:function(e){return e.upgrades},availableUpgrades:function(e){var t=Object.values(e.upgrades);return t.filter((function(t){return t.baseCost<=e.highUsd}))},availablePurchases:function(e){var t=Object.values(e.purchases);return t.filter((function(t){return t.cost()<=e.highUsd}))},canMessage:function(e){return e.message}},mutations:{ADD_COIN_AMOUNT:function(e,t){e.totalCoin+=t,e.totalCoin>e.highCoin&&(e.highCoin=e.totalCoin),e.lifetimeCoin+=t},ADD_USD_AMOUNT:function(e,t){e.totalUsd+=t,e.totalUsd>e.highUsd&&(e.highUsd=e.totalUsd),e.lifetimeUsd+=t},SUBTRACT_COIN_AMOUNT:function(e,t){e.totalCoin-=t},SUBTRACT_USD_AMOUNT:function(e,t){e.totalUsd-=t},UPDATE_LEADERBOARD:function(e,t){e.leaderboard=t},ADD_MESSAGE:function(e){e.message=!0},ADD_UPGRADE:function(e){localStorage.setItem("minerState",JSON.stringify(e))},ADD_PURCHASE:function(e){localStorage.setItem("minerState",JSON.stringify(e))},LOAD_STATE:function(e,t){var A=t.totalCoin,n=t.lifetimeCoin,r=t.highCoin,s=t.totalUsd,i=t.upgrades,a=t.message;e.totalCoin=A||0,e.lifetimeCoin=n||0,e.highCoin=r||0,e.totalUsd=s||0,e.message=a||!1;for(var o=0,c=Object.keys(i);o<c.length;o++){var u=c[o];e.upgrades[u]?(e.upgrades[u].numPurchased=i[u].numPurchased||0,e.upgrades[u].inflationDivisor=i[u].inflationDivisor||e.upgrades[u].inflationDivisor):console.log(u,"not found in state, discarding`")}},SAVE_STATE:function(e){console.log(e),localStorage.setItem("minerState",JSON.stringify(e))}},actions:{addCoinAmount:function(e,t){e.commit("ADD_COIN_AMOUNT",t)},sellCoinForUsd:function(e,t){t<=e.state.totalCoin&&(e.commit("SUBTRACT_COIN_AMOUNT",t),e.commit("ADD_USD_AMOUNT",t*e.state.exchangeRate))},spendCoin:function(e,t){return e.getters["totalCoin"]-t>=0&&(e.commit("SUBTRACT_COIN_AMOUNT",t),!0)},spendUsd:function(e,t){return e.getters["totalUsd"]-t>=0&&(e.commit("SUBTRACT_COIN_AMOUNT",t),!0)},updateLeaderboard:function(e,t){e.commit("UPDATE_LEADERBOARD",t)},buyUpgrade:function(e,t){return e.getters["totalUsd"]-t.cost()>=0&&(e.commit("ADD_UPGRADE",t),e.commit("SUBTRACT_USD_AMOUNT",t.cost()),e.state.upgrades[t.name].buy(),!0)},buyPurchase:function(e,t){if("USD"===t.currency){if(e.getters["totalUsd"]-t.cost()>=0)return e.commit("ADD_PURCHASE",t),e.commit("SUBTRACT_USD_AMOUNT",t.cost()),e.state.purchases[t.name].buy(),!0}else if(e.getters["totalCoin"]-t.cost()>=0)return e.commit("ADD_PURCHASE",t),e.commit("SUBTRACT_COIN_AMOUNT",t.cost()),e.state.purchases[t.name].buy(),!0;return!1},createMessage:function(e){e.commit("ADD_MESSAGE")},initState:function(e){console.log(e)},saveState:function(e){console.log("saving state"),e.commit("SAVE_STATE")}},namespaced:!0},b=(A("a15b"),A("cb29"),A("a434"),{state:function(){return{messageQueue:["Initializing ticker. Please wait an appropriate amount of time for this text to go off screen. More messages will follow after this."]}},getters:{compositeString:function(e){return e.messageQueue.join(Array(5).fill(" ").join())}},mutations:{POP_LETTER:function(e){e.messageQueue.length>0&&(e.messageQueue[0].length>0?e.messageQueue.splice(0,1,e.messageQueue[0].substring(1)):e.messageQueue.splice(0,1))},ADD_MESSAGE:function(e,t){console.log("hmm"),console.log("cece",e.messageQueue),e.messageQueue.push(t.message)}},actions:{getNextLetter:function(e){var t=e.getters["compositeString"][0];return t||(t=" ",e.commit("ADD_MESSAGE",{message:"       a new message. steve jobs wins olympic gold mdeal for eating pussy"})),e.commit("POP_LETTER"),t},createMessage:function(e,t,A){e.commit("ADD_MESSAGE",{message:t,username:A})}},namespaced:!0});n["a"].use(r["a"]);var v=t["a"]=new r["a"].Store({modules:{Chat:s,User:i,Miner:p,Ticker:b}})},c4f2:function(e,t,A){"use strict";var n=A("8e27"),r=Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_ENDPOINT_URL;console.log(Object({NODE_ENV:"production",BASE_URL:"/"}));var s=Object(n["io"])(r);s.onAny((function(e){for(var t=arguments.length,A=new Array(t>1?t-1:0),n=1;n<t;n++)A[n-1]=arguments[n];console.log(e,A)})),t["a"]=s},c52f:function(e,t,A){"use strict";var n=A("c4f2"),r=A("c0d6");t["a"]={sendMessage:function(e){n["a"].emit("sentMessage",{message:e})},registerListeners:function(){n["a"].on("message",(function(e){r["a"].dispatch("Chat/addMessage",e)}))}}},c6c7:function(e,t,A){e.exports=A.p+"img/dollarsign4.afe0dfc3.gif"},c898:function(e,t,A){}});
//# sourceMappingURL=app.a67b6837.js.map