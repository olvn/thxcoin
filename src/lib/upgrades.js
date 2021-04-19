class Upgrade {
  constructor(name, description, baseCost, cps, continuous = true) {
    this.name = name;
    this.description = description;
    this.baseCost = baseCost;
    this.cps = cps;
    this.continuous = continuous;
    this.numPurchased = 0;
    this.inflationDivisor = 100.0;
  }

  inflation(currentCost) {
    return currentCost * (this.numPurchased / this.inflationDivisor);
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
    5.0,
    0.00001010101
  ),
  new Upgrade(
    "Repurposed Bitcoin ASIC",
    "Dedicated chip just for solving hashes, stripped from an abandoned PRC mining warehouse. Should help.",
    100.0,
    0.00101010101
  ),
  new Upgrade(
    "macbiook air",
    "Dedicated chip just for solving hashes, stripped from an abandoned PRC mining warehouse. Should help.",
    100.0,
    0.00101010101
  ),
  new Upgrade(
    "RTX 4090",
    "Fortnite 12fps basically unplayable.",
    100.0,
    0.00101010101
  ),
  new Upgrade(
    "Big Pussy",
    "Fortnite 12fps basically unplayable.",
    5000.0,
    0.00101010101
  ),
];

console.log(upgrades, "tototo");

export default upgrades.reduce((acc, u) => {
  acc[u.name] = u;
  return acc;
}, {});
