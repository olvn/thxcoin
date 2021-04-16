export default {
  state: () => {
    return {
      total: 0,
      lifetime: 0,
      leaderboard: {},
    };
  },
  getters: {
    total: (state) => {
      return state.total;
    },
    lifetimeTotal: (state) => {
      return state.lifetime;
    },
    leaderboard: (state) => {
      return state.leaderboard
    }
  },
  mutations: {
    ADD_AMOUNT(state, amount) {
      state.total += amount;
      state.lifetime += amount;
    },
    SUBTRACT_AMOUNT(state, amount) {
      state.total -= amount;
    },
    UPDATE_LEADERBOARD(state, leaders) {
      state.leaderboard = leaders;
    }
  },
  actions: {
    addAmount(context, amount) {
      context.commit("ADD_AMOUNT", amount);
    },
    spendAmount(context, amount) {
      console.log(context.getters["total"] - amount);
      if (context.getters["total"] - amount >= 0) {
        context.commit("SUBTRACT_AMOUNT", amount);
        return true;
      } else {
        return false;
      }
    },
    updateLeaderboard(context, leaders) {
      console.log("heyyyy", leaders)
      context.commit("UPDATE_LEADERBOARD", leaders);
    },
  },
  namespaced: true,
};
