<template>
  <div>
    <div>hey</div>
    <form @submit.prevent="attemptRegister">
    <input type="text" placeholder="enter username" v-model="username" />
    <button>register</button>
    {{ errorText }}
    </form>
  </div>
</template>
<script>
import userService from '@/lib/userService'

export default {
  mounted() {
    const maybeUsername = localStorage.getItem('username');
    if (maybeUsername) {
      this.username = maybeUsername
      this.attemptRegister();
    }
  },
  data() {
    return {
      username: "",
      errorText: null
    };
  },
  methods: {
    async attemptRegister() {
      const res = await userService.registerUser(this.username);
      if (res.success) {
        this.$store.dispatch('User/registerUser', this.username)
        this.$router.push({name: 'Home'})
      } else {
        this.errorText = res.reason;
      }
    }
  }
};
</script>
