import upgrades from "@/lib/upgrades";
console.log("afdjasfd", upgrades)

export default {
  state: () => {
    return {
      total: 0,
      lifetime: 0,
      high: 0,
      leaderboard: {},
      upgrades: upgrades,
    }; 
  },
  getters: {
    total: (state) => {
      return state.total;
    },
    lifetimeTotal: (state) => {
      return state.lifetime;
    },
    lifetimeHigh: (state) => {
      return state.high;
    },
    leaderboard: (state) => {
      return state.leaderboard;
    },
    currentCps: (state) => {
      return Object.values(state.upgrades).reduce((acc, upgrade) => {
        acc += upgrade.cps * upgrade.numPurchased;
        return acc;
      }, 0);
    },
    upgrades: (state) => {
      return state.upgrades;
    },
    availableUpgrades: (state) => {
      const upgrades = Object.values(state.upgrades)
      return upgrades.filter(u => u.cost() <= state.high);
    }
  },
  mutations: {
    ADD_AMOUNT(state, amount) {
      state.total += amount;
      if (state.total > state.high) {
        state.high = state.total;
      }
      state.lifetime += amount;
    },
    SUBTRACT_AMOUNT(state, amount) {
      state.total -= amount;
    },
    UPDATE_LEADERBOARD(state, leaders) {
      state.leaderboard = leaders;
    },
    ADD_UPGRADE(state) {
      localStorage.setItem("minerState", JSON.stringify(state));
    },
    LOAD_STATE(state, { total, lifetime, high, upgrades }) {
      state.total = total;
      state.lifetime = lifetime;
      state.high = high;
      for (let key of Object.keys(upgrades)) {
        if (state.upgrades[key]) {
          state.upgrades[key].numPurchased = upgrades[key].numPurchased;
          state.upgrades[key].inflationDivisor = upgrades[key].inflationDivisor;
        } else {
          console.log(key, "not found in state, discarding`");
        }
      }
    },
    SAVE_STATE(state) {
      localStorage.setItem("minerState", JSON.stringify(state));
    },
  },
  actions: {
    addAmount(context, amount) {
      context.commit("ADD_AMOUNT", amount);
    },
    spendAmount(context, amount) {
      if (context.getters["total"] - amount >= 0) {
        context.commit("SUBTRACT_AMOUNT", amount);
        return true;
      } else {
        return false;
      }
    },
    updateLeaderboard(context, leaders) {
      context.commit("UPDATE_LEADERBOARD", leaders);
    },
    buyUpgrade(context, upgrade) {
      if (context.getters["total"] - upgrade.cost() > 0) {
        context.commit("ADD_UPGRADE", upgrade);
        context.commit("SUBTRACT_AMOUNT", upgrade.cost());
        context.state.upgrades[upgrade.name].buy();
        return true;
      }
      return false;
    },
    initState(context) {
      if (localStorage.getItem("minerState")) {
        console.log("loading old state...");
        const oldState = JSON.parse(localStorage.getItem("minerState"));
        context.commit("LOAD_STATE", oldState);
      }
    },
    saveState(context) {
      console.log("saving state");
      context.commit("SAVE_STATE");
    },
  },
  namespaced: true,
};
