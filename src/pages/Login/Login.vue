<template>
  <div>
    <div
      class="text-saphire mb-8 py-12 px-11 text-xl font-semibold text-sapphire"
    >
      <h1>Patient Vital Sign Monitoring</h1>
    </div>
    <div class="flex h-[80vh] justify-end bg-docktorIllustration bg-no-repeat">
      <Form />
    </div>
  </div>
</template>

<script>
import Form from "./components/Form.vue";
export default {
  name: "login-page",
  components: {
    Form,
  },
};
</script>

<style lang="scss" scoped></style>
