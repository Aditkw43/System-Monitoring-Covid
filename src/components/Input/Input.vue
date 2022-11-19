<template>
  <div
    :class="[
      'rounded-md border bg-white py-2 px-4 shadow-sm',
      !isError ? 'border-gray-300' : 'border-2 border-red-500',
    ]"
  >
    <div class="flex items-center gap-3">
      <div v-if="useIcon">
        <slot></slot>
      </div>
      <div>
        <input
          type="text"
          class="focus:outline-none"
          name="username"
          id="username"
          autocomplete="off"
          :placeholder="placeholder"
          @input="(e) => $emit('input', e)"
          @focus="(e) => $emit('focus', e)"
        />
      </div>
    </div>
  </div>
</template>

<script>
import LockIcon from "@/assets/svg/lock-icon.vue";

export default {
  name: "Input",
  props: {
    src: {
      type: String,
      default: "",
    },
    alt: {
      type: String,
      default: "icon",
    },
    placeholder: {
      type: String,
      default: "",
    },
    useIcon: {
      type: Boolean,
      default: false,
      required: true,
    },
    isError: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    LockIcon,
  },
};
</script>

<style lang="scss" scoped></style>
