class Upgrade {
    constructor(name, description, cost, cps, continuous = true){
        this.name = name
        this.description = description;
        this.cost = cost;
        this.cps = cps;
        this.continuous = continuous;
        this.numPurchased = 0;
        this.inflationDivisor = 100.00;
    }

    inflation() {
        return this.cost * (this.numPurchased / this.inflationDivisor);
    }

    buy() {
        this.numPurchased += 1;
        this.cost = Number((this.cost + this.inflation()).toFixed(2));
    }
}

export default {
    Pentium3: new Upgrade(
        "Pentium 3",
        "An aging slab of silicon, but can solve some hashes in a pinch.",
        5.00,
        0.00001
    )
}