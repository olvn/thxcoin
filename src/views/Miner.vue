<template>
  <div class="home">
    <!-- <div>1 $THX ≈ {{ exchangeRate.toFixed(5) }} USD</div> -->

    <div class="flex my-4 justify-around text-center">
      <div class="">
        <div class="bg-white text-2xl p-2">{{ totalUsd.toFixed(2) }}</div>

        <div class="bg-gray-400">
          <img class="w-6 h-6 inline" src="@/assets/gifs/dollarsign4.gif" />
          USD
        </div>
      </div>
      <div class="">
        <div class="text-2xl p-2 bg-white">
          {{ totalCoin.toFixed(5) }}
        </div>
        <div class="bg-gray-400">
          <img class="w-6 h-6 inline" src="@/assets/gifs/coinstair.gif" />
          THX
        </div>
      </div>
      <div class="">
        <div class="text-2xl p-2 bg-white">
          {{ (efficiency - 1.0).toFixed(2) }}
        </div>
        <div class="bg-gray-400">
          <img class="w-6 h-6 inline" src="@/assets/gifs/lightning.gif" />
          % Efficiency
        </div>
      </div>
    </div>
    <div class="text-center space-x-2 m-2 my-8">
      <a
        @click="mineCoin"
        class="border-r border-b bg-gray-200 border-black p-2 hover:bg-gray-500"
        >MINE {{ clickWorth.toFixed(3) }} $THX</a
      >
      <a
        @click="sellCoin"
        class="border-r border-b bg-gray-200 border-black p-2 hover:bg-gray-500"
      >
        SELL $THX
      </a>
    </div>

    <div
      class="bg-white m-2"
      v-if="purchases.length === 0 && upgrades.length === 0"
    >
      <div class="flex justify-center">
        <img class="h-16" src="@/assets/gifs/readme.gif" />
      </div>
      <div class="flex justify-center">
        <div class="bg-black text-white text-lg">how to play</div>
      </div>
      <ul class="list-decimal space-y-4">
        <li>
          1. mine some thx coin by repeatedly clicking the mine $THX button.
          click it faster to make more $THX.
        </li>
        <li>
          2. click SELL $THX to sell your $THX for USD. watch the numbers climb!
        </li>
        <li>
          3. once you earn enough, USD can be redeemed for upgrades, such as
          increased click value and auto-miners. THX can be redeemed for the
          ability to add your own messages to the news ticker on stream, or put
          images in the background behind us.
        </li>
        <li>
          4. to start off, repeatedly click mine $THX and occasionally click
          SELL $THX until you have $1.00 USD. you will unlock coffee. keep going
          and unlock better upgrades!
        </li>
        <li>
          5. there is also a chat in the top right where you can hang out with
          other crypto miners like yourself.
        </li>
      </ul>
    </div>
    <transition-group name="slide-fade">
      <div
        :key="purchase.name"
        v-for="purchase in purchases"
        :class="{ 'border-4 border-yellow-400': purchase.special }"
        class="flex items-center bg-white m-2 p-2 slide-fade-item"
      >
        <img class="w-12 h-12" :src="purchase.icon" />
        <div class="flex-grow">
          <div>
            {{ purchase.name }}
          </div>
          <div class="text-xs">{{ purchase.description }}</div>
        </div>
        <div class="text-center">
          <div
            :class="{ invisible: sufficientFunds(purchase) }"
            class="font-bold text-red-600 text-xs"
          >
            can't afford
          </div>
          <a>
            <div
              class="border-r border-b bg-gray-200 border-black p-2 hover:bg-gray-500"
              v-bind:class="{
                'bg-gray-300 text-gray-400': !sufficientFunds(purchase),
              }"
              @click="buyPurchase(purchase)"
            >
              <div v-if="purchase.currency !== 'USD'">
                <div>{{ purchase.cost().toFixed(3) }}</div>
                <img class="w-6 h-6 inline" src="@/assets/gifs/coinstair.gif" />&nbsp;THX
              </div>
              <span v-else> ${{ purchase.cost().toFixed(2) }} </span>
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
        <img class="w-12 h-12" :src="upgrade.icon" />
        <div class="flex-grow">
          <div>
            {{ upgrade.name }}
            <span class="text-xs text-green-500"
              >+{{ upgrade.cps }} $THX/s</span
            >
          </div>
          <div class="text-xs">{{ upgrade.description }}</div>
        </div>
        <div class="text-center">
          <div
            :class="{ invisible: sufficientFunds(upgrade) }"
            class="font-bold text-red-600 text-xs"
          >
            can't afford
          </div>
          <a>
            <div
              class="border-r border-b bg-gray-200 border-black p-2 hover:bg-gray-500"
              v-bind:class="{
                'bg-gray-300 text-gray-400': !sufficientFunds(upgrade),
              }"
              @click="buyUpgrade(upgrade)"
            >
              ${{ upgrade.cost().toFixed(2) }}
            </div>
          </a>

          <div class="text-xs">owned: {{ upgrade.numPurchased }}</div>
        </div>
      </div>
    </transition-group>
  </div>
</template>

<script>
export default {
  name: "Miner",
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
    efficiency() {
      return this.$store.getters["Miner/efficiency"];
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
      await this.$store.dispatch("Miner/buyPurchase", purchase);
    },
    sufficientFunds(item) {
      if (item.currency === "THX") {
        if (this.totalCoin >= item.cost()) {
          return true;
        }
      } else {
        if (this.totalUsd >= item.cost()) {
          return true;
        }
      }
      return false;
    },
  },
  beforeDestroy() {
    clearInterval(this.totalUpdateInterval);
  },
};
</script>
<style >
body {
  background-image: url("~@/assets/clouds.png");
  background-repeat: repeat;
}
.box {
  animation: expand 0.5s ease-in-out;
}
</style>
