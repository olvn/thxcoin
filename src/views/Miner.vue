<template>
  <div class="home">
    <a @click="mineCoin">MINE 1 THXCOIN</a>
    <div>you have {{ total.toFixed(5) }} $THX</div>
    <div>you have earned a total of {{ lifetimeTotal.toFixed(5) }} in your life</div>


    <div :key="upgrade.name" v-for="upgrade in upgrades">
      <a class="bg-blue-400" @click="buy(upgrade)">
      {{ upgrade.name }} - {{ upgrade.cost }}
      </a>
    </div>
    {{ this.cps }}
  </div>
</template>

<script>
import minerService from "@/lib/minerService";
import upgrades from "@/lib/upgrades"

export default {
  name: "Miner",
  mounted() {
    this.updateInterval = setInterval(() => {
      this.$store.dispatch("Miner/addAmount", this.cps * 1000 / this.timerMs);
      minerService.updateTotal(this.total);
   }, this.timerMs);
  },
  data() {
    return {
      timerMs: 10,
      updateInterval: null,
      upgrades: upgrades
    };
  },
  computed: {
    total() {
      return this.$store.getters["Miner/total"];
    },
    lifetimeTotal() {
      return this.$store.getters["Miner/lifetimeTotal"];
    },
    leaders() {
      return this.$store.getters["Miner/leaderboard"];
    },
    cps() {
      return this.$store.getters["Miner/currentCps"]
    }
  },
  methods: {
    mineCoin() {
      this.$store.dispatch("Miner/addAmount", 1);
    },
    async buy(upgrade) {
      await this.$store.dispatch("Miner/buyUpgrade", upgrade);
    },
  },
};
</script>
<style scoped>
</style>
