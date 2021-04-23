import router from "@/router";
import store from "@/store";

class Purchase {
  constructor({
    name,
    description,
    baseCost,
    currency,
    cbAction,
    qty = 999999,
    icon = require("@/assets/icons/broken.jpg"),
    inflates = true,
    inflationDivisor = 10.0,
    requiresAutominer = false
  }) {
    this.name = name;
    this.description = description;
    this.baseCost = baseCost;
    this.currency = currency;
    this.numPurchased = 0;
    this.inflationDivisor = inflationDivisor;
    this.qty = qty;
    this.icon = icon;
    this.cbAction = cbAction;
    this.inflates = inflates;
    this.requiresAutominer = requiresAutominer;
  }

  inflation(currentCost) {
    return Math.sqrt(currentCost) * (this.numPurchased / this.inflationDivisor);
  }

  cost() {
    let currentCost = this.baseCost;

    for (let i = 0; i < this.numPurchased; i++) {
      currentCost = Number(currentCost + this.inflation(currentCost));
    }

    return currentCost;
  }

  buy() {
    this.numPurchased += 1;
    this.cbAction(this.cbArgs);
  }

  inStock() {
    return this.qty - this.numPurchased > 0;
  }
}

class StreamPurchase extends Purchase {
  constructor(arg) {
    super(arg);
    this.adjustedCost = arg.baseCost;
  }
  cost() {
    return this.adjustedCost;
  }
  buy() {
    this.numPurchased += 1;
    this.adjustedCost = store.getters['Miner/totalCoin'] / 2 + store.getters['Miner/currentCps'] * 90;
    console.log("cost", this.adjustedCost);
  }
}

const purchases = [
  new Purchase({
    name: "Coffee",
    description:
      "Think faster, solve more hashes. Get 0.015 $THX more per click.",
    baseCost: 1.00,
    currency: "USD",
    cbAction: async () => {
      store.dispatch("Miner/addClickWorth", 0.015)
    },
    qty: 1,
    icon: require("@/assets/icons/coffee.jpg"),
  }),
  new Purchase({
    name: "Pen & Paper",
    description:
      "Solve your mining hashes in a fraction of the time using an intern with pen and paper. Faster than in your head. +0.01 coin per click.",
    baseCost: 5.00,
    currency: "USD",
    cbAction: async () => {
      store.dispatch("Miner/addClickWorth", 0.1)
    },
    qty: 1,
    icon: require("@/assets/icons/penpaper.jpg"),
  }),
  new Purchase({
    name: "Intern with used TI-83",
    description:
      "Technically a computer. Intern will be grateful. +0.1 coin per click.",
    baseCost: 8.00,
    currency: "USD",
    cbAction: async () => {
      store.dispatch("Miner/addClickWorth", 0.2)
    },
    qty: 1,
    icon: require("@/assets/icons/ti83.jpg"),
  }),
  new StreamPurchase({
    name: "Ticker message",
    description:
      "Buy this and you can write a message that will scroll across the bottom of the stream.",
    baseCost: 2,
    currency: "THX",
    cbAction: async () => {
      await store.dispatch("Miner/createTickerMessagePermission");
      router.push({ name: "Message" });
    },
  }),
  new StreamPurchase({
    name: "Picture on the Green Screen",
    description:
      "Buy this and you can put a picture on the screen behind the band",
    baseCost: 5,
    currency: "THX",
    cbAction: async () => {
      await store.dispatch("Miner/createPicturePermission");
      router.push({ name: "Picture" });
    },
  }),
  new Purchase({
    name: "Repurposed Peloton bike generator",
    description:
      "Rip open that broken Peloton, wire it up to your mining rig, and pedal like mad. +13% efficiency.",
    baseCost: 200,
    currency: "USD",
    cbAction: async () => {
      const efficiencyIncrease = .13;
      store.dispatch("Miner/increaseEfficiency", efficiencyIncrease);
    },
    qty: 1,
    icon: require("@/assets/icons/grubribe.png"),
    requiresAutominer: true
  }),
  new Purchase({
    name: "Bribe GRU employee.",
    description:
      "He'll remove the governor on your power meter, giving you a few more MW/s. Increases efficiency 20%.",
    baseCost: 500,
    currency: "USD",
    cbAction: async () => {
      const efficiencyIncrease = .10;
      store.dispatch("Miner/increaseEfficiency", efficiencyIncrease);
    },
    qty: 1,
    icon: require("@/assets/icons/grubribe.png"),
    requiresAutominer: true
  }),
  new Purchase({
    name: "Bribe GRU employee.",
    description:
      "He'll remove the governor on your power meter, giving you a few more MW/s. Increases efficiency 100%.",
    baseCost: 500,
    currency: "USD",
    cbAction: async () => {
      const efficiencyIncrease = 1.00;
      store.dispatch("Miner/increaseEfficiency", efficiencyIncrease);
    },
    qty: 1,
    icon: require("@/assets/icons/grubribe.png"),
    requiresAutominer: true
  }),
  new Purchase({
    name: "Hedgefund Bro Investment Manager",
    description:
      "You wouldn't want to spend more than 5 minutes with him, but he's got this algorithm that will sell your $THX at just the right time.",
    baseCost: 0.1,
    currency: "USD",
    cbAction: async () => {
      store.dispatch("Miner/autosell");
    },
    qty: 1,
    // icon: require("@/assets/icons/grubribe.png"),
    requiresAutominer: true
  }),
  new Purchase({
    name: "Tesla Solar Panel",
    description:
      "Elon Musk has offered you the opportunity to test out his experimental new technology called batteries and the sun. +10% efficiency.",
    baseCost: 1000,
    currency: "USD",
    cbAction: async () => {
      const efficiencyIncrease = .10;
      store.dispatch("Miner/increaseEfficiency", efficiencyIncrease);
    },
    qty: 9999999,
    icon: require("@/assets/icons/grubribe.png"),
    requiresAutominer: true
  }),
  new Purchase({
    name: "Hydrofarm",
    description:
      "An undersea turbine system just to help you get some coin. +200% efficiency.",
    baseCost: 9999999,
    currency: "USD",
    cbAction: async () => {
      const efficiencyIncrease = 1;
      store.dispatch("Miner/increaseEfficiency", efficiencyIncrease);
    },
    qty: 100,
    icon: require("@/assets/icons/grubribe.png"),
    requiresAutominer: true
  }),
  new Purchase({
    name: "Power grid for Estonia",
    description:
      "Take over this Eastern European country and increase your mining power 400%.",
    baseCost: 100000,
    currency: "USD",
    cbAction: async () => {
      const efficiencyIncrease = 4;
      store.dispatch("Miner/increaseEfficiency", efficiencyIncrease);
    },
    qty: 1,
    icon: require("@/assets/icons/estonia.png"),
    requiresAutominer: true
  }),
];

export default purchases.reduce((acc, u) => {
  acc[u.name] = u;
  return acc;
}, {});
