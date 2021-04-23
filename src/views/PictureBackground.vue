<template>
  <div class="">
    <div
      v-for="image in images"
      :style="translate(image)"
      :key="image.deathTime"
      class="fader"
    >
      <img class="w-72" :src="image.url" />
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
          y: Math.random() * 300 + 30,
        },
      });
    });
  },
  data() {
    return {
      images: [],
      imageUrl: null,
      secondsToLive: 5,
      interval: null,
    };
  },
  methods: {
    translate(image) {
      return {
        top: image.position.y + 'px',
        left: image.position.x + 'px',
        position: 'fixed'
      }
    },
  },
  beforeDestroy() {
    clearInterval(this.interval);
  },
};
</script>

<style >
.fader {
    animation: spin 40s linear, fadeOut 10s;
    animation-iteration-count: 1;
    opacity: 0;
}
@keyframes fadeOut {
   0% {opacity: 1;}
   50% {opacity: 1;}
   100% {opacity: 0;} 
} 
@-moz-keyframes spin { 100% { -moz-transform: rotate(360deg); } }
@-webkit-keyframes spin { 100% { -webkit-transform: rotate(360deg); } }
@keyframes spin { 100% { -webkit-transform: rotate(360deg); transform:rotate(360deg); } }
</style>