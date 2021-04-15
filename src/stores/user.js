export default {
  state: () => {
    return {
      currentUser: null,
    };
  },
  getters: {
    currentUser: (state) => {
      return state.currentUser;
    },
  },
  mutations: {
    REGISTER_USER(state, username) {
      state.currentUser = username;
    }
  },
  actions: {
    registerUser(context, username) {
      if (username && username.length > 0) {
        context.commit("REGISTER_USER", username)
      }
    }
  },
  namespaced: true
};
