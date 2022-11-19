<template>
  <div class="w-6/12">
    <div v-if="AUTH === 'login'" class="">
      <Login />
    </div>
    <div v-else>
      <Register />
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Login from "../components/Login/Login.vue";
import Register from "../components/Register/Register.vue";

export default {
  name: "form",
  components: {
    Login,
    Register,
  },
  computed: {
    ...mapGetters(["AUTH"]),
  },

  watch: {
    AUTH: {
      deep: true,
      handler(val) {
        console.log(val);
      },
    },
  },
};
</script>

<style lang="scss" scoped></style>
