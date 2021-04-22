<template>
  <div id="app">
    <div id="nav" v-if="isLoggedIn && showNav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
      <router-link to="/chat">
      <img src="@/assets/gifs/email3.gif"/>
      </router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
import chatService from "@/lib/chatService";
import userService from "@/lib/userService";
import minerService from "@/lib/minerService";

export default {
  async mounted() {
    const username = localStorage.getItem("username");
    if (username) {
      userService.loginUser(username);
    }
    chatService.registerListeners();
    minerService.registerListeners();
    await this.$store.dispatch("Miner/initState");

    this.totalUpdateInterval = setInterval(() => {
      this.$store.dispatch(
        "Miner/addCoinAmount",
        (this.cps / 1000) * this.updateTimerMs
      );
    }, this.updateTimerMs);

    this.transmissionInterval = setInterval(() => {
      minerService.updateTotalCoin();
    });

    this.saveInterval = setInterval(() => {
      this.$store.dispatch("Miner/saveState");
    }, 5000);
  },
  data() {
    return {
      updateTimerMs: 50,
      saveInterval: null,
      totalUpdateInterval: null
    };
  },
  computed: {
    isLoggedIn() {
      return !!this.$store.getters["User/currentUser"];
    },
    showNav() {
      return ![
        'Ticker',
        'PictureBackground'
      ].includes(this.$route.name)
    },
    cps() {
      return this.$store.getters["Miner/currentCps"];
    }
  },
  beforeDestroy() {
    this.$store.dispatch("Miner/saveState");
    clearInterval(this.saveInterval);
  },
};
</script>

<style>
#app {
  font-family: "Times New Roman", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

 }

 #app a {
   cursor: pointer;
 }

/* body {
 background-image: url('~@/assets/clouds.png');
     background-repeat: repeat;
} */

a {
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

#nav a {
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
