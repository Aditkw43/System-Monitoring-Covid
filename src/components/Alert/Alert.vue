<template>
  <div
    :class="[
      'absolute  left-[40%] z-50 w-3/12 rounded-lg bg-[#FE2424] py-2 shadow-lg transition-top ease-in-out',
      !show ? '-top-20' : 'top-14',
    ]"
  >
    <div class="flex items-center justify-center gap-10 text-xl text-white">
      <h1>Pasien 1, 2, 3, 4 Perlu Tindakan!</h1>
      <div class="flex-end">
        <AlertIcon />
      </div>
    </div>
  </div>
</template>

<script>
import AlertIcon from "@/assets/svg/alert-icon.vue";
export default {
  name: "alert-component",
  components: {
    AlertIcon,
  },
  props: {
    show: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped></style>
