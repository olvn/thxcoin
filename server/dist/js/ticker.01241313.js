(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["ticker"],{"159b":function(t,e,r){var n=r("da84"),a=r("fdbc"),s=r("17c2"),i=r("9112");for(var c in a){var o=n[c],u=o&&o.prototype;if(u&&u.forEach!==s)try{i(u,"forEach",s)}catch(l){u.forEach=s}}},"17c2":function(t,e,r){"use strict";var n=r("b727").forEach,a=r("a640"),s=a("forEach");t.exports=s?[].forEach:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}},"466d":function(t,e,r){"use strict";var n=r("d784"),a=r("825a"),s=r("50c4"),i=r("1d80"),c=r("8aa5"),o=r("14c3");n("match",1,(function(t,e,r){return[function(e){var r=i(this),n=void 0==e?void 0:e[t];return void 0!==n?n.call(e,r):new RegExp(e)[t](String(r))},function(t){var n=r(e,t,this);if(n.done)return n.value;var i=a(t),u=String(this);if(!i.global)return o(i,u);var l=i.unicode;i.lastIndex=0;var f,d=[],h=0;while(null!==(f=o(i,u))){var v=String(f[0]);d[h]=v,""===v&&(i.lastIndex=c(u,s(i.lastIndex),l)),h++}return 0===h?null:d}]}))},"813c":function(t,e,r){t.exports=r.p+"img/thxcnn.3a6e99a0.png"},"92ca":function(t,e,r){"use strict";r("980f")},"980f":function(t,e,r){},a15b:function(t,e,r){"use strict";var n=r("23e7"),a=r("44ad"),s=r("fc6a"),i=r("a640"),c=[].join,o=a!=Object,u=i("join",",");n({target:"Array",proto:!0,forced:o||!u},{join:function(t){return c.call(s(this),void 0===t?",":t)}})},e2dd:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"wrap"},[t._m(0),r("div",{staticClass:"content absolute ticker flex items-center h-full",style:t.transform},t._l(t.processedMessage,(function(e){return r("div",{staticClass:"letter"},[e.img?r("img",{staticClass:"image",attrs:{src:e.img}}):t._e(),e.html?r("div",{domProps:{innerHTML:t._s(e.html)}}):r("span",[t._v(" "+t._s(e.char)+" ")])])})),0)])},a=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"absolute white-grad z-50 h-full flex items-center p-8"},[n("img",{staticClass:"h-full bg-white",attrs:{src:r("813c")}}),n("div",{staticClass:"h-full w-64 white-grad"})])}],s=r("1da1"),i=(r("96cf"),r("159b"),r("99af"),r("fb6a"),r("a15b"),r("cb29"),r("d81d"),r("ac1f"),r("466d"),r("0a14")),c={mounted:function(){var t=this;i["a"].registerListeners(),this.observer=new IntersectionObserver((function(e,r){e.forEach(function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(n){var a,s,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(n.isIntersecting||!(n.target.getBoundingClientRect().x<0)){e.next=9;break}return a=n.target.getBoundingClientRect(),t.translateX+=-a.x/16,e.next=5,t.$store.dispatch("Ticker/getNextLetter");case 5:s=e.sent,t.message=t.message.slice(1).concat(s),i=document.querySelectorAll(".letter"),r.observe(i[i.length-1]);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}),{rootMargin:"0px"}),document.querySelectorAll(".letter").forEach((function(e){t.observer.observe(e)})),this.interval=setInterval((function(){t.translateX-=t.speed}),10)},data:function(){return{message:i["a"].stringToTickerArray(Array(3).fill("Initializing ticker.").join(" ")),interval:null,translateX:0,speed:.075,observer:null}},computed:{transform:function(){return"transform: translateX(".concat(this.translateX,"rem)")},messageQueue:function(){return this.$store.getters["Ticker/messageQueue"]},processedMessage:function(){return this.message.map((function(t){return(t.char||"").match(/\s/g)?{char:" "}:t}))}},beforeDestroy:function(){clearInterval(this.interval)}},o=c,u=(r("92ca"),r("2877")),l=Object(u["a"])(o,n,a,!1,null,"8f8f01c0",null);e["default"]=l.exports}}]);
//# sourceMappingURL=ticker.01241313.js.map