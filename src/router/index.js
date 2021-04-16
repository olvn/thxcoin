import Vue from "vue";
import VueRouter from "vue-router";
import Miner from "../views/Miner.vue";
import store from "@/store";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Miner",
    component: Miner,
  },
  {
    path: "/login",
    name: "Login",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Login.vue"),
    beforeEnter: (to, from, next) => {
      console.log(!store.getters["User/currentUser"])
      if (!store.getters["User/currentUser"]) next();
      else next({ name: "Home" });
    },
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/chat",
    name: "Chat",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Chat.vue"),
  },
];

const router = new VueRouter({
  routes,
});

router.beforeEach((to, from, next) => {
  console.log(store.getters['User/currentUser'])

  if (to.name !== "Login" && !store.getters["User/currentUser"])
    next({ name: "Login" });
  else next();
});

export default router;
