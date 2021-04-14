export default {
  state: () => {
    return {
      messages: [],
    };
  },
  getters: {
    messages: (state) => {
      return state.messages;
    },
  },
  mutations: {
    ADD_MESSAGE(state, payload) {
      state.messages.push(payload);
    },
  },
  actions: {
    addMessage(context, payload) {
      context.commit("ADD_MESSAGE", payload);
    },
  },
  namespaced: true,
};
