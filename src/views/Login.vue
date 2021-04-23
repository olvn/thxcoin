<template>
  <div class="cool-bg flex justify-center items-center h-screen">
    <div class="flex space-y-4 flex-col items-center">
      <div>
        <img src="@/assets/gifs/welcome1.gif" />
      </div>
      <div>
        <img src="@/assets/login.gif" />
      </div>
      <form @submit.prevent="attemptRegister">
        <input
          class="border-2 border-blue-300 mr-2"
          type="text"
          placeholder="enter username"
          v-model="username"
        />
        <button type="submit" class="underline text-blue-800">login</button>
      </form>
      <div v-if="errorText" class="flex bg-red-600 text-black">
        <img src="@/assets/gifs/warning1.gif" />
        {{ errorText }}
      </div>
    </div>
  </div>
</template>
<script>
import userService from "@/lib/userService";

export default {
  mounted() {
    // const maybeUsername = localStorage.getItem("username");
    // if (maybeUsername) {
    //   this.username = maybeUsername;
    //   this.attemptRegister();
    // }
  },
  data() {
    return {
      username: "",
      errorText: null,
    };
  },
  methods: {
    async attemptRegister() {
      const res = await userService.registerUser(this.username);
      if (res.success) {
        this.$store.dispatch("User/registerUser", this.username);
        this.$router.push({ name: "Miner" });
      } else {
        this.errorText = res.reason;
      }
    },
  },
};
</script>
<style scoped>
.cool-bg {
  background-image: url("~@/assets/gifs/water2.gif");
  background-repeat: repeat;
}
</style>