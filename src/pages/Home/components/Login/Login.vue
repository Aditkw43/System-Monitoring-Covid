<template>
  <div class="m-auto flex w-8/12 max-w-[450px] flex-col gap-10">
    <div class="text-center text-[48px] font-semibold text-indigo">
      <h1>USER LOGIN</h1>
    </div>
    <Input :useIcon="true" placeholder="Username">
      <LockIcon width="30" height="30" />
    </Input>
    <Input :useIcon="true" placeholder="Password">
      <PersonIcon width="30" height="30" />
    </Input>

    <div class="flex w-full justify-start gap-2">
      <input type="radio" />
      <span>Remember Me</span>
    </div>
    <div class="flex justify-center">
      <Button text="Login" type="primary" @click="handleClick(e)" />
    </div>
    <div class="flex flex-row justify-center gap-2 text-center">
      <p>Doesn’t have an account?</p>
      <span @click="toRegister()" class="cursor-pointer text-originBlue"
        >Click here</span
      >
    </div>
  </div>
</template>

<script>
import Input from "@/components/Input/Input.vue";
import LockIcon from "@/assets/svg/lock-icon.vue";
import PersonIcon from "@/assets/svg/person-icon.vue";
import Button from "@/components/Button/Button.vue";
import { mapMutations } from "vuex";
export default {
  name: "login-component",
  components: {
    Input,
    PersonIcon,
    LockIcon,
    Button,
  },
  data() {
    return {};
  },
  methods: {
    ...mapMutations(["toRegister"]),
    handleClick(e) {
      console.log(e);
    },
  },
};
</script>

<style lang="scss" scoped></style>
