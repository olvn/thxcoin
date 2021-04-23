<template>
  <div>
    <input type="file" @change="onFileChange" accept="image/*" />
    <div class="mw-lg">
      <img v-if="url" :src="url" class="w-64" />
    </div>
    <button v-if="url" @click="upload">submit photo</button>
    <div v-if="errorText" class="text-red-600">{{ errorText }}</div>
  </div>
</template>
<script>
import imageCompression from 'browser-image-compression';
import socket from '@/lib/socket'
export default {
  data() {
    return {
      url: null,
      file: null,
      errorText: null
    };
  },
  methods: {
    onFileChange(e) {
      const file = e.target.files[0];
      this.url = URL.createObjectURL(file);
      this.file = file;
    },
    async upload() {
      const options = {
        maxSizeMB: 0.25,
        maxWidthOrHeight: 1920,
        useWebWorker: true
      }

      try {
        const compressedFile = await imageCompression(this.file, options);
        console.log('compressedFile instanceof Blob', compressedFile instanceof Blob); // true
        console.log(`compressedFile size ${compressedFile.size / 1024 / 1024} MB`); // smaller than maxSizeMB

        socket.emit('pictureBackground', { imageUrl: await imageCompression.getDataUrlFromFile(compressedFile)})

        // todo: success snackbar global
        this.$router.push({ name: 'Miner' })
      } catch (error) {
        this.errorText = "an unexpected error occurred. soryr. im so bad at this."
        console.log(error);
      }
    },
  }
};
</script>
<style scoped></style>
