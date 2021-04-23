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
      const currentTime = new Date().getTime();

      console.log(this.images);
      this.images = this.images.filter((image) => {

        return image.deathTime < currentTime;
      });
    }, 1000);

    socket.on("approvedPicture", ({ imageUrl }) => {
      const nowTime = new Date();
      nowTime.setSeconds(nowTime.getSeconds() + this.secondsToLive);
      console.log(this.images);
      this.images.push({
        url: imageUrl,
        deathTime: nowTime.getTime(),
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
