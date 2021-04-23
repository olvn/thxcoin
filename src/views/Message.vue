<template>
  <div>
    <form @submit.prevent="sendMessage">
      <input type="text" v-model="message" placeholder="message here" />
      {{ message.length }} / {{ limit }}
      <div v-if="message.length > limit">
        please use less text
      </div>
      <!-- <div v-if="successText"> -->
        <!-- TODO  make this global snackbar -->
        <!-- successfully uploaded picture. check the screen soon! -->
      <!-- </div> -->
        <button type="submit" :disabled="message.length > limit">send msg</button>
    </form>
  </div>
</template>
<script>
import socket from '@/lib/socket'

export default {
  data() {
    return {
      limit: 40,
      message: '',
    };
  },
  methods: {
    sendMessage() {
      if (this.message.length <= this.limit) {
        socket.emit('tickerMessage', { message: this.message });
        this.$router.push({ name: 'Miner' })
      }
    }
  }
};
</script>
