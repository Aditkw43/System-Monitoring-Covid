<template>
  <div :class="decideClass()">
    <button @click="$emit('click')">
      {{ text }}
    </button>
  </div>
</template>

<script>
export default {
  name: "button-component",
  props: {
    text: {
      type: String,
      default: "Button",
    },
    type: {
      type: String,
      default: "primary",
    },
    resetClass: {
      type: Boolean,
      default: false,
    },
    customClass: {
      type: String,
      default: "",
    },
  },
  methods: {
    decideClass() {
      let classNeme = "py-2 px-20 rounded-md text-white text-center";
      if (this.type === "primary") {
        return `${classNeme} bg-indigo`;
      }
      if (this.resetClass) {
        return customClass;
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
