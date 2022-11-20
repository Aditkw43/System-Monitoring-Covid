<template>
  <div class="flex gap-4">
    <Sidebar />
    <main class="w-full p-10">
      <transition name="fade">
        <router-view></router-view>
      </transition>
    </main>
  </div>
</template>

<script>
import Sidebar from "@/layout/Sidebar/Sidebar.vue";
export default {
  name: "dashboard-page",
  components: {
    Sidebar,
  },
};
</script>

<style lang="scss" scoped></style>
