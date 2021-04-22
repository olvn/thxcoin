<template>
  <div>
    <div v-for="item in unapprovedItems" :key="item.uuid">
      <div v-if="item.type === 'ticker'">
         {{item.message}}
        </div>

      <div v-if="item.type === 'picture'">
        <img :src="item.imageUrl" />
      </div>

         <button @click="approve(item)">accept</button>
    </div>
  </div>
</template>
<script>
import adminService from "@/lib/adminService";
export default {
  mounted() {
    adminService.registerListeners();
  },
  computed: {
    unapprovedItems() {
      return this.$store.getters["Admin/unapprovedItems"];
    },
  },
  methods: {
    approve(item) {
      this.$store.dispatch("Admin/approveItem", item);
    }
  }
};
</script>
