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
      import(/* webpackChunkName: "login" */ "../views/Login.vue"),
    beforeEnter: (to, from, next) => {
      console.log(!store.getters["User/currentUser"]);
      if (!store.getters["User/currentUser"]) next();
      else next({ name: "Miner" });
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
    component: () => import(/* webpackChunkName: "chat" */ "../views/Chat.vue"),
  },
  {
    path: "/admin",
    name: "Admin",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "admin" */ "../views/Admin.vue"),
  },
  {
    path: "/ticker",
    name: "Ticker",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "ticker" */ "../views/Ticker.vue"),
  },
  {
    path: "/message",
    name: "Message",
    component: () =>
      import(/* webpackChunkName: "message" */ "../views/Message.vue"),
    beforeEnter: (to, from, next) => {
      console.log(store.getters["Miner/canMessage"], "foo foo");
      if (store.getters["Miner/canMessage"]) next();
      else next({ name: "Miner" });
    },
  },
  {
    path: "/picture",
    name: "Picture",
    component: () =>
      import(/* webpackChunkName: "picture" */ "../views/Picture.vue"),
    beforeEnter: (to, from, next) => {
      if (store.getters["Miner/canPicture"]) next();
      else next({ name: "Miner" });
    },
  },
  {
    path: "/picture-background",
    name: "PictureBackground",
    component: () =>
      import(
        /* webpackChunkName: "picture-background" */ "../views/PictureBackground.vue"
      ),
  },
];

const router = new VueRouter({
  routes,
});

router.beforeEach((to, from, next) => {
  console.log(store.getters["User/currentUser"]);
  const unprotectedRoutes = ["Login", "Ticker", "PictureBackground"];

  if (
    !unprotectedRoutes.includes(to.name) &&
    !store.getters["User/currentUser"]
  )
    next({ name: "Login" });
  else next();
});

export default router;
