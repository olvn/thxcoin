import Vue from "vue";
import App from "./App.vue";
import store from "@/store.js";
import "./assets/styles/index.css";
import router from "./router";

Vue.config.productionTip = false;

const username = localStorage.getItem("username") || null;

store.dispatch("User/registerUser", username).then(() => {
  new Vue({
    render: (h) => h(App),
    router,
    store,
  }).$mount("#app");
});
