<template>
  <div class="m-auto flex w-8/12 max-w-[450px] flex-col gap-10">
    <div
      class="flex items-center text-center text-[48px] font-semibold text-indigo"
    >
      <chevronIcon width="30" height="30" position="left" @click="toLogin()" />
      <h1 class="w-full">REGISTER</h1>
    </div>
    <div class="flex flex-col gap-4">
      <Input :useIcon="true" placeholder="Username">
        <PersonIcon width="30" height="30" />
      </Input>
      <Input :useIcon="true" placeholder="Nomor Register">
        <PenIcon width="30" height="30" />
      </Input>
      <Input :useIcon="true" placeholder="Password">
        <LockIcon width="30" height="30" />
      </Input>
      <Input :useIcon="true" placeholder="Confirm Password">
        <approvedIcon width="30" height="30" />
      </Input>
    </div>
    <div class="flex justify-center">
      <Button text="Sign Up" type="primary" @click="handleClick(e)" />
    </div>
  </div>
</template>

<script>
import Input from "@/components/Input/Input.vue";
import LockIcon from "@/assets/svg/lock-icon.vue";
import PersonIcon from "@/assets/svg/person-icon.vue";
import approvedIcon from "@/assets/svg/approved-icon.vue";
import PenIcon from "@/assets/svg/pen-icon.vue";
import Button from "@/components/Button/Button.vue";
import { mapGetters, mapMutations } from "vuex";
import chevronIcon from "@/assets/svg/chevron-icon.vue";
export default {
  name: "register-component",
  components: {
    Input,
    PersonIcon,
    LockIcon,
    Button,
    PenIcon,
    approvedIcon,
    chevronIcon,
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["AUTH"]),
  },
  methods: {
    ...mapMutations(["toLogin"]),
    handleClick(e) {
      console.log(e);
    },
  },
};
</script>

<style lang="scss" scoped></style>
