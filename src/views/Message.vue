<template>
  <div class="flex flex-col space-y-8 m-4 mt-16">
    <div class="bg-white text-xl">
      enter a message to go on the news ticker in the stream
    </div>
    <form class="flex flex-col" @submit.prevent="sendMessage">
      <textarea type="textarea" v-model="message" placeholder="message here" />
      {{ message.length }} / {{ limit }}
      <div class="text-red-600 font-bold" v-if="message.length > limit">please use less text</div>
      <button
        type="submit"
        class="border-r border-b bg-gray-200 border-black p-2 hover:bg-gray-500"
        :disabled="message.length > limit"
      >
        send msg
      </button>
    </form>
  </div>
</template>
<script>
import socket from "@/lib/socket";

export default {
  data() {
    return {
      limit: 40,
      message: "",
    };
  },
  methods: {
    sendMessage() {
      if (this.message.length <= this.limit) {
        socket.emit("tickerMessage", { message: this.message });
        this.$router.push({ name: "Miner" });
      }
    },
  },
};
</script>
