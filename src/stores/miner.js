import upgrades from "@/lib/upgrades";
import purchases from "@/lib/purchases";

// let newGameState = {
//   totalCoin: 0,
//   highCoin: 0,
//   lifetimeCoin: 0,
//   totalUsd: 100,
//   lifetimeUsd: 100,
//   highUsd: 100,
//   clickWorth: 0.001,
//   exchangeRate: 10
// }

export default {
  state: () => {
    return {
      message: false,
      totalCoin: 0,
      lifetimeCoin: 0,
      highCoin: 0,
      totalUsd: 100,
      lifetimeUsd: 100,
      exchangeRate: 10,
      highUsd: 100,
      clickWorth: 0.001,
      leaderboard: {},
      upgrades: upgrades,
      purchases: purchases,
    };
  },
  getters: {
    totalCoin: (state) => {
      return state.totalCoin;
    },
    lifetimeTotalCoin: (state) => {
      return state.lifetimeCoin;
    },
    lifetimeHighCoin: (state) => {
      return state.highCoin;
    },
    totalUsd: (state) => {
      return state.totalUsd;
    },
    lifetimeUsd: (state) => {
      return state.lifetimeUsd;
    },
    exchangeRate: (state) => {
      return state.exchangeRate;
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
    clickWorth: (state) => {
      return state.clickWorth;
    },
    upgrades: (state) => {
      return state.upgrades;
    },
    availableUpgrades: (state) => {
      const upgrades = Object.values(state.upgrades);
      return upgrades.filter((u) => u.baseCost <= state.highUsd);
    },
    availablePurchases: (state) => {
      const purchases = Object.values(state.purchases);
      return purchases.filter((u) => u.cost() <= state.highUsd);
    },
    canMessage: (state) => {
      return state.message;
    }
  },
  mutations: {
    ADD_COIN_AMOUNT(state, amount) {
      state.totalCoin += amount;
      if (state.totalCoin > state.highCoin) {
        state.highCoin = state.totalCoin;
      }
      state.lifetimeCoin += amount;
    },
    ADD_USD_AMOUNT(state, amount) {
      state.totalUsd += amount;
      if (state.totalUsd > state.highUsd) {
        state.highUsd = state.totalUsd;
      }
      state.lifetimeUsd += amount;
    },
    SUBTRACT_COIN_AMOUNT(state, amount) {
      state.totalCoin -= amount;
    },
    SUBTRACT_USD_AMOUNT(state, amount) {
      state.totalUsd -= amount;
    },
    UPDATE_LEADERBOARD(state, leaders) {
      state.leaderboard = leaders;
    },
    ADD_TICKER_MESSAGE(state) {
      state.message = true;
    },
    ADD_UPGRADE(state) {
      localStorage.setItem("minerState", JSON.stringify(state));
    },
    ADD_PURCHASE(state) {
      localStorage.setItem("minerState", JSON.stringify(state));
    },
    LOAD_STATE(
      state,
      { totalCoin, lifetimeCoin, highCoin, totalUsd, upgrades, message }
    ) {
      state.totalCoin = totalCoin || 0;
      state.lifetimeCoin = lifetimeCoin || 0;
      state.highCoin = highCoin || 0;
      state.totalUsd = totalUsd || 0;
      state.message = message || false;
      for (let key of Object.keys(upgrades)) {
        if (state.upgrades[key]) {
          state.upgrades[key].numPurchased = upgrades[key].numPurchased || 0;
          state.upgrades[key].inflationDivisor =
            upgrades[key].inflationDivisor ||
            state.upgrades[key].inflationDivisor;
        } else {
          console.log(key, "not found in state, discarding`");
        }
      }
    },
    SAVE_STATE(state) {
      console.log(state);
      localStorage.setItem("minerState", JSON.stringify(state));
    },
  },
  actions: {
    addCoinAmount(context, amount) {
      context.commit("ADD_COIN_AMOUNT", amount);
    },
    sellCoinForUsd(context, amountCoin) {
      if (amountCoin <= context.state.totalCoin) {
        context.commit("SUBTRACT_COIN_AMOUNT", amountCoin);
        context.commit(
          "ADD_USD_AMOUNT",
          amountCoin * context.state.exchangeRate
        );
      }
    },
    spendCoin(context, amount) {
      if (context.getters["totalCoin"] - amount >= 0) {
        context.commit("SUBTRACT_COIN_AMOUNT", amount);
        return true;
      } else {
        return false;
      }
    },
    spendUsd(context, amount) {
      if (context.getters["totalUsd"] - amount >= 0) {
        context.commit("SUBTRACT_COIN_AMOUNT", amount);
        return true;
      } else {
        return false;
      }
    },
    updateLeaderboard(context, leaders) {
      context.commit("UPDATE_LEADERBOARD", leaders);
    },
    buyUpgrade(context, upgrade) {
      if (context.getters["totalUsd"] - upgrade.cost() >= 0) {
        context.commit("ADD_UPGRADE", upgrade);
        context.commit("SUBTRACT_USD_AMOUNT", upgrade.cost());
        context.state.upgrades[upgrade.name].buy();
        return true;
      }
      return false;
    },
    buyPurchase(context, purchase) {
      if (purchase.currency === "USD") {
        if (context.getters["totalUsd"] - purchase.cost() >= 0) {
          context.commit("ADD_PURCHASE", purchase);
          context.commit("SUBTRACT_USD_AMOUNT", purchase.cost());
          context.state.purchases[purchase.name].buy();
          return true;
        }
      } else {
        // assume costs $THX
        if (context.getters["totalCoin"] - purchase.cost() >= 0) {
          context.commit("ADD_PURCHASE", purchase);
          context.commit("SUBTRACT_COIN_AMOUNT", purchase.cost());
          context.state.purchases[purchase.name].buy();
          return true;
        }
      }
      return false;
    },
    createTickerMessagePermission(context) {
      context.commit("ADD_TICKER_MESSAGE");
    },
    initState(context) {
      console.log(context);
      // if (localStorage.getItem("minerState")) {
      //   console.log("loading old state...");
      //   const oldState = JSON.parse(localStorage.getItem("minerState"));
      //   context.commit("LOAD_STATE", oldState);
      // }
    },
    saveState(context) {
      console.log("saving state");
      context.commit("SAVE_STATE");
    },
  },
  namespaced: true,
};
