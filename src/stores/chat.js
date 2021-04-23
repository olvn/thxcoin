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
    unreadCount: (state) => {
      return state.messages.reduce((acc, msg) => {
        return acc + (msg.read ? 0 : 1);
      }, 0);
    },
  },
  mutations: {
    ADD_MESSAGE(state, payload) {
      state.messages.push(payload);
    },
    MARK_READ(state) {
      state.messages.forEach((msg) => (msg.read = true));
    },
  },
  actions: {
    addMessage(context, payload) {
      payload.read = false;
      context.commit("ADD_MESSAGE", payload);
    },
    markRead(context) {
      context.commit("MARK_READ");
    },
  },
  namespaced: true,
};
