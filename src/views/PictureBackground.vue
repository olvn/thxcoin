<template>
  <div class="w-screen h-screen">
    <div v-for="image in images" :key="image.deathTime">
      <img :src="image.url"/>
    </div>
  </div>
</template>
<script>
import socket from "@/lib/socket";
export default {
  mounted() {
    this.interval = setInterval(() => {
      const currentTime = new Date();
      this.images = this.images.filter((image) => {
        return true;
        // return image.deathTime < currentTime;
      });
    }, 1000);

    socket.on("approvedPicture", ({ imageUrl }) => {
      const nowTime = new Date();
      nowTime.setSeconds(nowTime.getSeconds() + this.secondsToLive);
      this.images.push({
        url: imageUrl,
        deathTime: nowTime,
        position: {
          x: Math.random() * 1800 + 30,
          y: Math.random() * 900 + 30,
        },
      });
    });
  },
  data() {
    return {
      images: [],
      imageUrl: null,
      secondsToLive: 3,
      interval: null,
    };
  },
  beforeDestroy() {
    clearInterval(this.interval);
  },
};
</script>
