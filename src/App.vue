<template>
  <div id="app">
    <div id="nav" v-if="isLoggedIn">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
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
  },
  computed: {
    isLoggedIn() {
      return !!this.$store.getters["User/currentUser"];
    },
  },
};
</script>

<style>
#app {
  font-family: "Times New Roman", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

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
