<template>
  <div>
    <Sidebar />
    <main>
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
