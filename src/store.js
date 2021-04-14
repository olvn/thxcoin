import Vue from 'vue'
import Vuex from "vuex";
import Chat from '@/stores/chat.js'

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    //registering the auth module that is imported
    Chat
  }
});