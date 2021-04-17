export default {
  state: () => {
    return {
      total: 0,
      lifetime: 0,
      leaderboard: {},
      upgrades: []
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
    },
    currentCps: (state) => {
      return state.upgrades.reduce((acc, upgrade) => {
        acc += upgrade.cps;
        return acc;
      }, 0)
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
    },
    ADD_UPGRADE(state, upgrade) {
      state.upgrades.push(upgrade);
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
    buyUpgrade(context, upgrade) {
      if (context.getters["total"] - upgrade.cost) {
        upgrade.buy();
        context.commit("ADD_UPGRADE", upgrade)
        return true;
      }
      return false;
    }
  },
  namespaced: true,
};
