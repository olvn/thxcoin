export default {
  state: () => {
    return {
      messageQueue: ['Initializing ticker. Please wait an appropriate amount of time for this text to go off screen. More messages will follow after this.'],
    };
  },
  getters: {
    compositeString: (state) => {
      return state.messageQueue.join(
        Array(5)
          .fill("\xa0")
          .join()
      );
    },
  },
  mutations: {
    POP_LETTER(state) {
      if (state.messageQueue.length > 0) {
        if (state.messageQueue[0].length > 0) {
          state.messageQueue.splice(0, 1, state.messageQueue[0].substring(1));
        } else {
          state.messageQueue.splice(0, 1);
        }
      }
    },
    ADD_MESSAGE(state, payload) {
      console.log("hmm");
      console.log("cece", state.messageQueue);
      state.messageQueue.push(payload.message);
    }
  },
  actions: {
    getNextLetter: (context) => {
      let letter = context.getters["compositeString"][0];
      if (!letter) {
        letter = '\xa0';
        context.commit('ADD_MESSAGE', { message: '\xa0\xa0\xa0\xa0\xa0\xa0 a new message. steve jobs wins olympic gold mdeal for eating pussy' })
      }
      context.commit("POP_LETTER");
      return letter;
    },
    createMessage: (context, message, username) => {
      context.commit('ADD_MESSAGE', { message, username })
    }
  },
  namespaced: true
};