import tickerService from "@/lib/tickerService";

const separator = Array(7).fill({ char: '\xa0'});

export default {
  state: () => {
    return {
      messageQueue: [
        { char: 'o'}
      ],
    };
  },
  getters: {
    messageQueue(state) {
      return state.messageQueue;
    },
  },
  mutations: {
    POP_LETTER(state) {
      if (state.messageQueue.length > 0) {
        const characterMinimum = 30;
        state.messageQueue.splice(0, 1);
        if (
          state.messageQueue.length < characterMinimum
        ) {
          state.messageQueue.push(
            ...separator,
            ...tickerService.randomMessage()
          );
        }
      }
    },
    ADD_MESSAGE(state, { username, message }) {
      console.log('boooo', username)
      console.log("add msg");
      state.messageQueue.push(
        ...separator,
        ...tickerService.stringToTickerArray(`${username}: ${message}`),
      );
      state.messageQueue.push();
    },
  },
  actions: {
    getNextLetter: async (context) => {
      let letter = (context.state.messageQueue[0]);
      await context.commit("POP_LETTER");
      return letter || '\xa0';
    },
    addMessage: (context, { message, username }) => {
      context.commit("ADD_MESSAGE", {
        message,
        username,
      });
    },
  },
  namespaced: true,
};
