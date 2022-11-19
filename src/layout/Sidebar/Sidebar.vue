<template>
  <div class="h-[100vh] w-2/12 bg-red-400 text-white">
    <div class="center flex h-full w-10/12 flex-col justify-around bg-sapphire">
      <div class="mt-2 text-2xl">
        <h1 class="mb-2 text-center font-semibold">
          Patient Vital Sign Monitoring
        </h1>
        <hr />
      </div>
      <div class="flex flex-col gap-4 px-11 text-center">
        <div
          class="flex items-center justify-center rounded-full bg-gray-300 py-8 shadow-xl"
        >
          <PersonIcon width="120" height="120" />
        </div>
        <h1 class="text-4xl">Jhon Doe</h1>
        <p class="text-xl">Doctor</p>
      </div>
      <div class="">
        <ul class="flex flex-col gap-4 font-bold">
          <li
            v-for="(item, index) in menu"
            :key="index"
            @mouseenter="onMouseEnter(index)"
            @mouseleave="onMouseLeave(index)"
            :id="`list-${index}`"
            class="relative flex cursor-pointer items-center gap-14 overflow-hidden px-4 py-2 hover:bg-black/30"
          >
            <component :is="item.icon" width="30" height="30" fill="#fff" />
            <span>{{ item.name }}</span>
            <div
              v-if="isActive(item.isActive)"
              class="absolute top-0 right-0 h-[100px] w-[10px] bg-white"
            ></div>
          </li>
        </ul>
      </div>
      <div
        class="flex cursor-pointer gap-8 py-2 px-4 font-semibold hover:bg-black/30"
      >
        <logoutIcon width="120" height="120" fill="#fff" />
        <span>Log Out</span>
      </div>
    </div>
  </div>
</template>

<script>
import HomeIcon from "@/assets/svg/home-icon.vue";
import PersonIcon from "@/assets/svg/person-icon.vue";
import logoutIcon from "@/assets/svg/logout-icon.vue";
import { menu } from "./app/constant";

export default {
  name: "sidebar-layout",
  components: {
    PersonIcon,
    HomeIcon,
    logoutIcon,
  },
  data() {
    return {
      menu,
    };
  },
  computed: {
    isActive(index) {
      return index;
    },
  },
  methods: {
    onMouseEnter(index) {
      menu[index].isActive = true;
      console.log("msuk", menu);
    },
    onMouseLeave(index) {
      menu[index].isActive = false;
      console.log(menu);
    },
  },
  mounted() {
    console.log(menu);
  },
};
</script>

<style lang="scss" scoped></style>
