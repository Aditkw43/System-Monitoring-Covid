<template>
  <div class="w-6/12">
    <div class="m-auto flex w-8/12 max-w-[450px] flex-col gap-10">
      <div class="text-center text-[48px] font-semibold text-indigo">
        <h1>USER LOGIN</h1>
      </div>
      <Input :useIcon="true" placeholder="username">
        <LockIcon width="30" height="30" />
      </Input>
      <Input :useIcon="true" placeholder="password">
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
        <a href="#" class="text-originBlue">Click here</a>
      </div>
    </div>
  </div>
</template>

<script>
import Input from "@/components/Input/Input.vue";
import LockIcon from "@/assets/svg/lock-icon.vue";
import PersonIcon from "@/assets/svg/person-icon.vue";
import Button from "@/components/Button/Button.vue";
export default {
  name: "form-component",
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
    handleClick(e) {
      console.log(e);
    },
  },
};
</script>

<style lang="scss" scoped></style>
