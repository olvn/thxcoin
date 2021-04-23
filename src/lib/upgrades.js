class Upgrade {
  constructor(name, description, baseCost, cps, icon=require("@/assets/icons/broken.jpg"), continuous = true) {
    this.name = name;
    this.description = description;
    this.baseCost = baseCost;
    this.cps = cps;
    this.continuous = continuous;
    this.numPurchased = 0;
    this.icon = icon;
    this.currency = "USD";
    this.inflationDivisor = 1000.0;
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
  }
}

const upgrades = [
  new Upgrade(
    "Pentium 3",
    "An aging slab of silicon, but can solve some hashes in a pinch.",
    10.0,
    0.1010101,
    require("@/assets/icons/pentium.jpg")
  ),
  new Upgrade(
    "Repurposed Bitcoin ASIC",
    "Dedicated chip just for solving hashes, stripped from an abandoned PRC mining warehouse. Should help.",
    100.0,
    0.2,
    require("@/assets/icons/asic.jpg")
  ),
  new Upgrade(
    "RTX 4090",
    "Unreleased NVIDIA card. Does Fortnite at 12fps, basically unplayable. Just use it to mine some coin.",
    1000.0,
    1.0,
    require("@/assets/icons/rtx4090.jpg")
  ),
  new Upgrade(
    "Specialized $THX ASIC",
    "CPU architect Fromm Lesche designed $THX ASIC. Dramatic improvement over unspecialized ASIC.",
    10000.0,
    5,
    require("@/assets/icons/asic.jpg")
  ),
];

export default upgrades.reduce((acc, u) => {
  acc[u.name] = u;
  return acc;
}, {});
