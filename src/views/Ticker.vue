<template>
  <div class="wrap">
    <div class="absolute white-grad z-50 h-full flex items-center p-8">
      <img class="h-full bg-white" src="@/assets/gifs/thxcnn.png"/>
      <div class="h-full w-64 white-grad"></div>
    </div>
    <div class="content absolute ticker flex items-center h-full" :style="transform">
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
    this.message = this.$store.getters['Ticker/compositeString'];
    this.observer = new IntersectionObserver(
      (entries, observer) => {
        console.log(entries.length)
        entries.forEach(async (entry) => {
          if (!entry.isIntersecting && entry.target.getBoundingClientRect().x < 0) {

            this.translateX += -entry.target.getBoundingClientRect().x / 16;
            let letter =  await this.$store.dispatch('Ticker/getNextLetter')
            console.log('letter: ',letter)
            this.message = this.message.slice(1).concat(letter);
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
      message: "oof",
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
    messageString() {
      return this.$store.getters['Ticker/compositeString']
    },
    processedMessage() {
      return this.message.split("").map((char) => {
        if (char.match(/\s/g)) {
          return {
            // img: require('@/assets/gifs/lightning.gif')
            char: '\xa0'
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
.wrap {
  overflow: hidden;
}

.white-grad {
    background-image: linear-gradient(to left, rgba(255,255, 255,0), rgba(255, 255, 255,1));

}

.ticker {
  font-size: 3rem;
}

.letter {
  /* min-width: 0.8rem;
  width: 0.8rem; */
}
</style>
