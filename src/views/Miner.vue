<template>
  <div class="home">
    <div class="text-center m-2">
    <a @click="mineCoin" class="border-r border-b bg-gray-200 border-black p-2 hover:bg-gray-500">MINE 1 THXCOIN</a>
    </div>

    <div class="flex m-4 p-4 place-content-between text-center">
      <div class="w-1/3">
        <div>
          {{ total.toFixed(5) }}
        </div>
        <div>
          $THX
        </div>
      </div>

      <div class="w-1/3">
        <div>
          50.00
        </div>
        <div>
          $USD
        </div>
      </div>

      <div class="w-1/3">
        <div>
          25334
        </div>
        <div>
          MW/s
        </div>
      </div>
 
    </div>

    <div
      :key="upgrade.name"
      v-for="upgrade in upgrades"
      class="flex items-center bg-white m-2 p-2"
    >
      <img class="w-12 h-12" src="@/assets/gifs/email1.gif" />
      <div class="flex-grow">
        <div>{{ upgrade.name }}</div>
        <div class="text-xs">{{ upgrade.description }}</div>
      </div>
      <div class="text-center">

          <a>
        <div
            class="border-r border-b bg-gray-200 border-black p-2 hover:bg-gray-500"
            @click="buy(upgrade)"
          >
            ${{ upgrade.cost().toFixed(2) }}
        </div>

          </a>
        <div class="text-xs">
        owned: {{ upgrade.numPurchased }}
        </div>
      </div>
    </div>
    {{ this.cps }}
    <a @click="$store.dispatch('Miner/initState')">ok </a>
  </div>
</template>

<script>
import minerService from "@/lib/minerService";

export default {
  name: "Miner",
  mounted() {
    this.updateInterval = setInterval(() => {
      this.$store.dispatch("Miner/addAmount", (this.cps * 1000) / this.timerMs);
      minerService.updateTotal(this.total);
    }, this.timerMs);
  },
  data() {
    return {
      timerMs: 10,
      updateInterval: null,
    };
  },
  computed: {
    total() {
      return this.$store.getters["Miner/total"];
    },
    lifetimeTotal() {
      return this.$store.getters["Miner/lifetimeTotal"];
    },
    lifetimeHigh() {
      return this.$store.getters["Miner/lifetimeHigh"];
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
  },
  methods: {
    mineCoin() {
      this.$store.dispatch("Miner/addAmount", 1);
    },
    async buy(upgrade) {
      await this.$store.dispatch("Miner/buyUpgrade", upgrade);
    },
  },
  beforeDestroy() {
    clearInterval(this.updateInterval);
  },
};
</script>
<style scoped>
</style>
