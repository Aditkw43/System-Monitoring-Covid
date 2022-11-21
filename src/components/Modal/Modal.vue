<template>
  <div
    class="absolute top-[25%] right-[40%] w-3/12 rounded-md bg-white pb-4 font-semibold"
  >
    <div class="flex flex-col gap-4">
      <div :class="['rounded-t-md py-4 px-6 text-white', `bg-[${bgTitle}]`]">
        <h1>{{ title }}</h1>
      </div>
      <div class="px-6 font-semibold text-gray-800">
        <p>{{ description }}</p>
      </div>

      <div v-if="useFooter" class="border-t-2 p-4">
        <slot></slot>
      </div>
      <div
        v-if="useModalConfirmation"
        class="flex justify-end gap-4 pr-4 font-semibold text-white"
      >
        <Button
          :text="negative"
          :resetClass="true"
          customClass="py-2 px-8 bg-red-600 rounded-md"
          @click="$emit('onNegative')"
        />
        <Button
          :text="positive"
          :resetClass="true"
          customClass="py-2 px-8 bg-green-600 rounded-md"
          @click="$emit('onPositive')"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Button from "@/components/Button/Button.vue";

export default {
  name: "modal-component",
  components: {
    Button,
  },
  props: {
    bgTitle: {
      type: String,
      default: "#7B0D0D",
    },
    title: {
      type: String,
      default: "",
    },
    description: {
      type: String,
      default: "",
    },
    useFooter: {
      type: Boolean,
      default: false,
    },
    useModalConfirmation: {
      type: Boolean,
      default: false,
    },
    negative: {
      type: String,
      default: "Cancel",
    },
    positive: {
      type: String,
      default: "Oke",
    },
  },
};
</script>

<style lang="scss" scoped></style>
