<template>
  <div class="flex w-full flex-col gap-4">
    <div class="flex flex-col items-end">
      <p>{{ getDate }}</p>
      <h1 class="text-2xl font-bold">{{ getTime }}</h1>
    </div>
    <div class="flex w-full gap-2 lg:gap-0">
      <div
        class="w-full rounded-lg bg-green-300 py-4 text-center lg:rounded-l-lg lg:px-12"
      >
        <span class="text-3xl font-bold">8</span>
        <h1 class="font-medium">Pasien Kondisi Normal</h1>
      </div>
      <div
        class="w-full rounded-lg bg-yellow-300 py-4 text-center lg:rounded-none lg:px-12"
      >
        <span class="text-3xl font-bold">8</span>
        <h1 class="font-medium">Pasien Kondisi Normal</h1>
      </div>
      <div
        class="w-full rounded-lg bg-red-300 py-4 text-center lg:rounded-r-lg lg:px-12"
      >
        <span class="text-3xl font-bold">8</span>
        <h1 class="font-medium">Pasien Kondisi Normal</h1>
      </div>
    </div>
    <div class="flex flex-col gap-4 lg:grid lg:grid-cols-4">
      <Card
        v-for="(item, index) in data"
        :key="`${item.pasien}-${index}`"
        width="30"
        height="30"
        :heart="item.heart"
        :lungs="item.lungs"
        :oxygen="item.oxygen"
        :blood="item.blood"
        :temperature="item.temperature"
        :patient="item.patient"
        :type="item.status"
        :name="item.name"
        :registation="item.registration"
      />
    </div>
  </div>
</template>

<script>
import Card from "@/components/Card/Card.vue";
import { data } from "./app/constant";
import { getFormatTimer } from "@/app/utils";

export default {
  name: "dashboard-page",
  components: { Card },
  data() {
    return {
      data,
      date: "",
      time: "",
    };
  },
  computed: {
    getDate() {
      return this.date;
    },
    getTime() {
      return this.time;
    },
  },
  created() {
    const auth = JSON.parse(localStorage.getItem("auth"));
    if (!auth) {
      this.$router.push("/");
    }
    setInterval(() => {
      this.date = getFormatTimer()[0];
      this.time = getFormatTimer()[1];
    }, 1000);
  },
  destroyed() {
    clearInterval();
  },
};
</script>

<style lang="scss" scoped></style>
