<template>
  <div class="wrap ticker">
    <div class="content flex" :style="transform">
      <div v-for="char in processedMessage" class="letter">
        <img v-if="char.img" :src="char.img" class="image"/>
        <span v-else>
          {{ char.char }}
        </span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  mounted() {
    this.observer = new IntersectionObserver(
      (entries, observer) => {
        console.log(entries.length)
        entries.forEach((entry) => {
          if (!entry.isIntersecting && entry.target.getBoundingClientRect().x < 0) {

            this.translateX += -entry.target.getBoundingClientRect().x / 16;
            this.message = this.message.slice(1).concat(" ");
            const letters = document.querySelectorAll(".letter")
            observer.observe(letters[letters.length - 1]);
          }
        });
      },
      { rootMargin: "0px" }
    );
    document.querySelectorAll(".letter").forEach((img) => {
      this.observer.observe(img);
    });
    this.interval = setInterval(() => {
      this.translateX -= this.speed;
    }, 10);
  },
  data() {
    return {
      message: "The quick brown fox jumps over the lazy dog is an English-language pangram—a sentence that contains all of the letters",
      interval: null,
      translateX: 0,
      speed: 0.05,
      observer: null,
    };
  },
  computed: {
    transform() {
      return `transform: translateX(${this.translateX}rem)`;
    },
    processedMessage() {
      return this.message.split("").map((char) => {
        if (char.match(/\s/g)) {
          return {
            img: require('@/assets/gifs/lightning.gif')
          }
        }
        return {
          char: char
        };
      });
    },
  },
  beforeDestroy() {
    clearInterval(this.interval);
  }
};
</script>
<style scoped>
.ticker {
  /* font-family: "Courier New", Courier, monospace; */
}

.wrap {
  overflow: hidden;
}

.image {
  min-width: 1rem;
  width: 1rem;
  min-height: 1rem;
  height: 1rem;
}

.letter {
  /* min-width: 0.8rem;
  width: 0.8rem; */
}
</style>
