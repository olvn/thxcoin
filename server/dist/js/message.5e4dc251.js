(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["message"],{"8e2a":function(e,s,t){"use strict";t.r(s);var a=function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",[t("form",{on:{submit:function(s){return s.preventDefault(),e.sendMessage(s)}}},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.message,expression:"message"}],attrs:{type:"text",placeholder:"message here"},domProps:{value:e.message},on:{input:function(s){s.target.composing||(e.message=s.target.value)}}}),e._v(" "+e._s(e.message.length)+" / "+e._s(e.limit)+" "),e.message.length>e.limit?t("div",[e._v(" please use less text ")]):e._e(),t("button",{attrs:{type:"submit",disabled:e.message.length>e.limit}},[e._v("send msg")])])])},n=[],i=t("c4f2"),m={data:function(){return{limit:40,message:""}},methods:{sendMessage:function(){this.message.length<=this.limit&&i["a"].emit("tickerMessage",{message:this.message})}}},l=m,r=t("2877"),u=Object(r["a"])(l,a,n,!1,null,null,null);s["default"]=u.exports}}]);
//# sourceMappingURL=message.5e4dc251.js.map