import Vue from "vue";
import Vuex from "vuex";
import Chat from "@/stores/chat.js";
import User from "@/stores/user.js";
import Miner from "@/stores/miner.js";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    //registering the auth module that is imported
    Chat,
    User,
    Miner,
  },
});
