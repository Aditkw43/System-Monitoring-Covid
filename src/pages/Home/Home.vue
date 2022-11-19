<template>
  <div>
    <div
      class="text-saphire mb-8 py-12 px-11 text-xl font-semibold text-sapphire"
    >
      <h1>Patient Vital Sign Monitoring</h1>
    </div>
    <div
      :class="[
        'w-4xl flex h-[80vh] justify-end bg-no-repeat',
        AUTH === 'login' ? 'bg-docktorIllustration' : 'bg-nurseIllustration',
      ]"
    >
      <Form />
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Form from "./Form/Form.vue";
export default {
  name: "login-page",
  components: {
    Form,
  },
  computed: {
    ...mapGetters(["AUTH"]),
  },
};
</script>

<style lang="scss" scoped></style>
