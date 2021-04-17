import upgrades from "@/lib/upgrades";

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
        acc += upgrade.cps;
        return acc;
      }, 0);
    },
    ownedUpgrades: (state) => {
      return state.upgrades;
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
    ADD_UPGRADE(state, upgrade) {
      if (!state.upgrades[upgrade.name]) {
        console.log("adding first ", upgrade.name)
        state.upgrades = {
          ...state.upgrades,
          [upgrade.name]: {
            ...upgrade,
          },
        };
      } else {
        console.log("adding another ", upgrade.name)
        state.upgrades[upgrade.name].totalOwned += 1;
      }

      localStorage.setItem("minerState", JSON.stringify(state));
    },
    LOAD_STATE(state, { total, lifetime, high, upgrades }) {
      state.total = total;
      state.lifetime = lifetime;
      state.high = high;
      state.upgrades = upgrades;
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
      console.log(context.getters["total"] - amount);
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
      if (context.getters["total"] - upgrade.cost) {
        this.upgrades[upgrade.name].buy();
        context.commit("ADD_UPGRADE", upgrade);
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
