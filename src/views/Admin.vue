<template>
  <div class="w-full">
    <div v-for="item in unapprovedItems" :key="item.uuid" class="flex p-2 bg-white">
      <div v-if="item.type === 'ticker'" class="flex-grow">
         {{item.message}}
        </div>

      <div v-if="item.type === 'picture'" class="flex-grow">
        <img class="w-32 h-32" :src="item.imageUrl" />
      </div>

         <button class="flex-grow-0 p-2 bg-green-400" @click="approve(item)">accept</button>
         <button class="flex-grow-0 p-2 bg-red-400" @click="decline(item)">decline</button>
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
    },
    decline(item) {
      this.$store.dispatch('Admin/declineItem', item);
    }
  }
};
</script>
