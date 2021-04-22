import tickerService from "@/lib/tickerService";

export default {
  state: () => {
    return {
      messageQueue: [
        [
          { 
            html: '<span class="text-red-800">nice</span>'
          },
          {
            char: "i",
          },
          {
            char: "n",
          },
          {
            char: "i",
          },
          {
            char: "t",
          },
        ],
      ],
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
      console.log("boofdsdf outside", state.messageQueue.length);
      if (state.messageQueue.length > 0) {
        console.log(
          "boofdsdf insid",
          state.messageQueue.length,
          state.messageQueue[0].length
        );

        if (state.messageQueue[0].length > 0) {
          state.messageQueue.splice(0, 1, state.messageQueue[0].splice(1));
        } else {
          state.messageQueue.splice(0, 1);
        }
        const characterMinimum = 100;

        console.log("boofdsdf", state.messageQueue.length);
        if (
          state.messageQueue.length === 1 &&
          state.messageQueue[0].length < characterMinimum
        ) {
          // add short random message
          state.messageQueue.push(tickerService.stringToTickerArray(tickerService.randomMessage()));
        }
      }
    },
    ADD_MESSAGE(state, { username, message }) {
      console.log("add msg")
      state.messageQueue.push({
        html: `<span class="text-blue-800">${username}</span>`
      });
      state.messageQueue.push(tickerService.stringToTickerArray(message));
    },
  },
  actions: {
    getNextLetter: (context) => {
      console.log('deedaa')
      let letter = context.getters["compositeString"][0];
      if (!letter) {
        letter = "\xa0";
        context.commit("ADD_MESSAGE", {
          message: "",
        });
      }
      context.commit("POP_LETTER");
      return letter;
    },
    addMessage: (context, message, username) => {
      context.commit("ADD_MESSAGE", {
        message,
        username,
      });
    },
  },
  namespaced: true,
};
