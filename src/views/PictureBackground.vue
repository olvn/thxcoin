<template>
  <div class="">
    <div
      v-for="image in images"
      :style="translate(image)"
      :key="image.deathTime"
    >
      <img class="w-64 h-64" :src="image.url" />
    </div>
  </div>
</template>
<script>
import socket from "@/lib/socket";
export default {
  mounted() {
    document.body.style.backgroundImage = "none";
    this.interval = setInterval(() => {
      const currentTime = new Date().getTime();

      console.log(this.images);
      this.images = this.images.filter((image) => {
        return image.deathTime > currentTime;
      });
    }, 1000);

    socket.on("approvedPicture", ({ imageUrl }) => {
      const nowTime = new Date();
      nowTime.setSeconds(nowTime.getSeconds() + this.secondsToLive);
      console.log(this.images);
      this.images.push({
        url: imageUrl,
        deathTime: new Date().getTime() + this.secondsToLive * 1000,
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
      secondsToLive: 10000,
      interval: null,
    };
  },
  methods: {
    translate(image) {
      return `transform: translate(${image.position.x}px, ${image.position.y}px); `;
    },
  },
  beforeDestroy() {
    clearInterval(this.interval);
  },
};
</script>
