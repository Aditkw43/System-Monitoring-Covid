<template>
  <div
    :class="[
      'flex h-[100vh] w-[400px] gap-4 text-white transition-margin duration-500 ease-in-out',
      isActive ? '' : '-ml-[270px]',
    ]"
  >
    <div class="flex h-full w-10/12 flex-col justify-between bg-sapphire pb-6">
      <div class="center flex h-4/6 flex-col justify-around">
        <div class="mt-2 text-2xl">
          <h1 class="mb-2 text-center font-semibold">
            Patient Vital Sign Monitoring
          </h1>
          <hr class="m-auto w-6/12" />
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
          <ul class="flex flex-col gap-4 text-xl font-semibold">
            <li
              v-for="(item, index) in menu"
              :key="index"
              :id="`list-${index}`"
              @click="activeNavigation(index)"
              class="relative flex cursor-pointer items-center gap-14 overflow-hidden px-4 py-2 hover:bg-black/30"
            >
              <component
                :is="item.icon"
                width="30"
                height="30"
                fill="#fff"
                :class="[{ 'absolute right-2': !isActive }]"
              />
              <span>{{ item.name }}</span>
            </li>
          </ul>
        </div>
      </div>

      <div
        class="relative flex cursor-pointer gap-8 py-2 px-4 font-semibold hover:bg-black/30"
      >
        <logoutIcon
          width="30"
          height="30"
          :class="[{ 'absolute right-2 top-1': !isActive }]"
          fill="#fff"
        />
        <span>Log Out</span>
      </div>
    </div>
    <div @click="handleClickNav()" class="mt-4 cursor-pointer space-y-2">
      <div class="h-0.5 w-10 bg-gray-600"></div>
      <div
        :class="[
          'transition-slowest ease h-0.5 transform bg-gray-600 transition-width duration-1000',
          isActive ? 'w-6' : 'w-10',
        ]"
      ></div>
      <div
        :class="[
          'transition-slowest ease h-0.5 transform bg-gray-600 transition-width duration-1000',
          isActive ? 'w-3' : 'w-10',
        ]"
      ></div>
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
      isActive: true,
    };
  },
  methods: {
    handleClickNav() {
      this.isActive = !this.isActive;
    },
    activeNavigation(index) {
      const el = document.querySelector(`#list-${index}`);
      // add active
      el.classList.add("bg-black/30");

      for (let i = 0; i < menu.length; i++) {
        if (i !== index) {
          document.querySelector(`#list-${i}`).classList.remove("bg-black/30");
        }
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
