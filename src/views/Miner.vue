<template>
  <div class="home">
    <div class="text-center m-2">
      <a
        @click="mineCoin"
        class="border-r border-b bg-gray-200 border-black p-2 hover:bg-gray-500"
        >MINE {{ clickWorth }} $THX</a
      >
      <a
        @click="sellCoin"
        class="border-r border-b bg-gray-200 border-black p-2 hover:bg-gray-500"
      >
        SELL $THX
      </a>
    </div>

    <div>1 $THX ≈ {{ exchangeRate.toFixed(5) }} USD</div>

    <div class="flex m-4 p-4 place-content-between text-center">
      <div class="w-1/3">
        <div>{{ totalUsd.toFixed(2) }}</div>

        <div class="">
          <img class="w-6 h-6 inline" src="@/assets/gifs/dollarsign4.gif" />
          USD
        </div>
      </div>
      <div class="w-1/3">
        <div>
          {{ totalCoin.toFixed(5) }}
        </div>
        <div>
          <img class="w-6 h-6 inline" src="@/assets/gifs/coinstair.gif" />
          THX
        </div>
      </div>
      <div class="w-1/3">
        <div>25334</div>
        <div>
          <img class="w-6 h-6 inline" src="@/assets/gifs/lightning.gif" />
          MW/s
        </div>
      </div>
    </div>

    <div
      :key="purchase.name"
      v-for="purchase in purchases"
      class="flex items-center bg-white m-2 p-2"
    >
      <img class="w-12 h-12" src="@/assets/gifs/email1.gif" />
      <div class="flex-grow">
        <div>
          {{ purchase.name }}
        </div>
        <div class="text-xs">{{ purchase.description }}</div>
      </div>
      <div class="text-center">
        <div
          :class="{ invisible: (purchase.currency === 'USD' 
          ? (purchase.cost() <= totalUsd) 
          : (purchase.cost() <= totalCoin)
        )}"
          class="font-bold text-red-600 text-xs"
        >
          can't afford
        </div>
        <a>
          <div
            class="border-r border-b bg-gray-200 border-black p-2 hover:bg-gray-500"
            v-bind:class="{
              'bg-gray-300 text-gray-400': purchase.cost() > totalUsd,
            }"
            @click="buyPurchase(purchase)"
          >
          <span v-if="purchase.currency === 'USD'">
            $THX 
          </span>
          <span v-else>
            ${{ purchase.cost().toFixed(2) }}
          </span>
          </div>
        </a>

        <div class="text-xs">owned: {{ purchase.numPurchased }}</div>
      </div>
    </div>

    <div
      :key="upgrade.name"
      v-for="upgrade in upgrades"
      class="flex items-center bg-white m-2 p-2"
    >
      <img class="w-12 h-12" src="@/assets/gifs/email1.gif" />
      <div class="flex-grow">
        <div>
          {{ upgrade.name }}
          <span class="text-xs text-green-500">+{{ upgrade.cps }} $THX/s</span>
        </div>
        <div class="text-xs">{{ upgrade.description }}</div>
      </div>
      <div class="text-center">
        <div
          :class="{ invisible: upgrade.cost() <= totalUsd }"
          class="font-bold text-red-600 text-xs"
        >
          can't afford
        </div>
        <a>
          <div
            class="border-r border-b bg-gray-200 border-black p-2 hover:bg-gray-500"
            v-bind:class="{
              'bg-gray-300 text-gray-400': upgrade.cost() > totalUsd,
            }"
            @click="buyUpgrade(upgrade)"
          >
            ${{ upgrade.cost().toFixed(2) }}
          </div>
        </a>

        <div class="text-xs">owned: {{ upgrade.numPurchased }}</div>
      </div>
    </div>
    {{ cps }}
    <a @click="$store.dispatch('Miner/initState')">ok </a>
  </div>
</template>

<script>
import minerService from "@/lib/minerService";

export default {
  name: "Miner",
  mounted() {
    this.totalUpdateInterval = setInterval(() => {
      this.$store.dispatch(
        "Miner/addCoinAmount",
        (this.cps / 1000) * this.timerMs
      );
    }, this.timerMs);

    this.transmissionInterval = setInterval(() => {
      minerService.updateTotalCoin();
    });
  },
  data() {
    return {
      timerMs: 50,
      totalUpdateInterval: null,
    };
  },
  computed: {
    totalCoin() {
      return this.$store.getters["Miner/totalCoin"];
    },
    lifetimeTotalCoin() {
      return this.$store.getters["Miner/lifetimeTotal"];
    },
    lifetimeHighCoin() {
      return this.$store.getters["Miner/lifetimeHigh"];
    },
    totalUsd() {
      return this.$store.getters["Miner/totalUsd"];
    },
    clickWorth() {
      return this.$store.getters["Miner/clickWorth"];
    },
    exchangeRate() {
      return this.$store.getters["Miner/exchangeRate"];
    },
    leaders() {
      return this.$store.getters["Miner/leaderboard"];
    },
    cps() {
      return this.$store.getters["Miner/currentCps"];
    },
    upgrades() {
      return this.$store.getters["Miner/availableUpgrades"];
    },
    purchases() {
      return this.$store.getters["Miner/availablePurchases"];
    },
  },
  methods: {
    mineCoin() {
      this.$store.dispatch("Miner/addCoinAmount", this.clickWorth);
    },
    sellCoin() {
      this.$store.dispatch("Miner/sellCoinForUsd", this.totalCoin);
    },
    async buyUpgrade(upgrade) {
      await this.$store.dispatch("Miner/buyUpgrade", upgrade);
    },
    async buyPurchase(purchase) {
      console.log(purchase);
      await this.$store.dispatch("Miner/buyPurchase", purchase);
    },
  },
  beforeDestroy() {
    clearInterval(this.totalUpdateInterval);
  },
};
</script>
<style scoped>
</style>
