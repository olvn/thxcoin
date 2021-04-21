import router from "@/router";
import store from "@/store";

class Purchase {
  constructor(
    name,
    description,
    baseCost,
    currency,
    cbAction,
    args,
    inflationDivisor = 100.0
  ) {
    this.name = name;
    this.description = description;
    this.baseCost = baseCost;
    this.currency = currency;
    this.numPurchased = 0;
    this.inflationDivisor = inflationDivisor;
    this.cbAction = cbAction;
    this.cbArgs = args;
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
    console.log("afldsjf")
    this.cbAction(this.cbArgs);
  }
}

const purchases = [
  new Purchase(
    "Ticker message",
    "Buy this and you can write a message that will scroll across the bottom of the stream.",
    2,
    "THX",
    async () => {
      await store.dispatch("Miner/createTickerMessagePermission");
      router.push({ name: "Message" });
    }
  ),
  new Purchase(
    "Picture on the Green Screen",
    "Buy this and you can put a picture on the screen behind the band",
    5,
    "THX",
    async () => {
      await store.dispatch("Miner/createPicture");
      router.push({ name: "Picture" });
    }
  ),
];

export default purchases.reduce((acc, u) => {
  acc[u.name] = u;
  return acc;
}, {});
