<template>
  <div>
    hey
    <div v-for="msg in messages" :key="msg.uuid">{{msg.username }}: {{ msg.content }}</div>
    <form @submit.prevent="onSubmit" class="form">
      <input v-model="input" placeholder="Your message..."/>
      <button>Send</button>
    </form>
  </div>
</template>

<script>
import chatService from '@/lib/chatService'

export default {
  name: "Home",
  mixins: [],
  data() {
    return {
      input: "",
    };
  },
  computed: {
    messages() {
      return this.$store.getters["Chat/messages"];
    },
  },
  methods: {
    onSubmit() {
      chatService.sendMessage(this.input)

      this.input = "";
    },
  },
  components: {},
};
</script>