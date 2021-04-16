<template>
  <div class="home">
    <button @click="mineCoin">MINE 1 THXCOIN</button>
    <div> you have {{ total }} $THX</div>
    <div> you have earned a total of {{ lifetimeTotal }} in your life </div>

    <div v-if="lifetimeTotal > 5">
        <button @click="buy(2)">BUY FOR 15 $THX</button> A pentium 3
        <div> this was used by early cybersettlers to play unreal tournament. mines at a sluggish 0.01 $THX per sec</div>
      </div>
  </div>
</template>

<script>
import minerService from '@/lib/minerService';

export default {
  name: 'Miner',
  mounted() {
    this.updateInterval = setInterval(() => {
      minerService.updateTotal(this.total);
    });
  },
  data() {
    return {
      updateInterval: null
    }
  },
  computed: {
    total() {
      return this.$store.getters['Miner/total'];
    },
    lifetimeTotal() {
      return this.$store.getters['Miner/lifetimeTotal']
    },
    leaders() {
      return this.$store.getters['Miner/leaderboard']
    }
  },
  methods: {
    mineCoin() {
      this.$store.dispatch('Miner/addAmount', 1);
    },
    async buy(amount) {
      const bought = await this.$store.dispatch('Miner/spendAmount', amount);

          console.log("hey", bought)
      if (bought) {
        setInterval(() => {
          console.log("hey")
          this.$store.dispatch('Miner/addAmount', 0.01 / 100);
        }, 10);
      }
    }
  }
}
</script>
<style scoped>
</style>
