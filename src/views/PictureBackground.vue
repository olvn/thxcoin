<template>
  <div>
    <img v-if="imageUrl" :src="imageUrl" />
  </div>
</template>
<script>
import socket from "@/lib/socket";
export default {
  mounted() {
    socket.on("approvedPicture", ({ imageUrl }) => {
      this.imageUrl = imageUrl;
    });
  },
  data() {
    return {
      imageUrl: null,
    };
  },
};
</script>
