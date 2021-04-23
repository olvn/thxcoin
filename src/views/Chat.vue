<template>
  <div class="p-4 h-screen flex flex-col justify-center">
    CHAT
    <div class="h-5/6 flex flex-col justify-end bg-white">
      <div v-for="msg in messages" :key="msg.uuid">
        <span class="text-green-600 font-bold">{{ msg.username }}:</span>
        {{ msg.content }}
      </div>
      <form @submit.prevent="onSubmit" class="form">
        <input class="w-5/6" v-model="input" placeholder="Your message..." />
        <button class="w-1/6 bg-gray-200 border-r border-b px-1 border-black">
          Send
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import chatService from "@/lib/chatService";

export default {
  name: "Home",
  mixins: [],
  data() {
    return {
      input: "",
      max: 250,
    };
  },
  computed: {
    messages() {
      return this.$store.getters["Chat/messages"];
    },
  },
  watch: {
    messages() {
      this.$store.dispatch("Chat/markRead");
    },
  },
  methods: {
    onSubmit() {
      if (this.input.length < this.max + 1 && this.input.length > 0) {
        chatService.sendMessage(this.input);
        this.input = "";
      }
    },
  },
  mounted() {
    this.$store.dispatch("Chat/markRead");
  },
  components: {},
};
</script>