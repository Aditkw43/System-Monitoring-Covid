<template>
  <Modal
    v-if="showModal"
    :title="dataOnModal.title"
    :description="dataOnModal.description"
    :bgTitle="dataOnModal.color"
    :useModalConfirmation="true"
    negative="Tidak"
    positive="Iya"
    @onNegative="onNegative()"
    @onPositive="onPositive()"
  />
  <div class="flex w-full flex-col gap-4">
    <Alert :show="showModal" />
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
        @click="onClickCard(item.status)"
      />
    </div>
  </div>
</template>

<script>
import Card from "@/components/Card/Card.vue";
import { data } from "./app/constant";
import { getFormatTimer } from "@/app/utils";
import Alert from "@/components/Alert/Alert.vue";
import Modal from "@/components/Modal/Modal.vue";

export default {
  name: "dashboard-page",
  components: { Card, Alert, Modal },
  data() {
    return {
      data,
      date: "",
      time: "",
      status: "warning",
      dataOnModal: {},
      showModal: false,
      announcement: [
        {
          type: "danger",
          title: "Konfirmasi Tindakan Langsung",
          description:
            "Apakah Pasien 1 akan segera dilakukan tindakan langsung?",
          color: "#7B0D0D",
        },
        {
          type: "warning",
          title: "Konfirmasi Tindakan Langsung",
          description:
            "Apakah Pasien 1 akan segera dilakukan tindakan langsung?",
          color: "#958F00",
        },
      ],
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
  methods: {
    statusPatient() {
      this.dataOnModal = this.announcement.find(
        (item) => item.type === this.status
      );
    },
    onClickCard(value) {
      console.log("msuk", value);
      this.status = value;
      this.statusPatient();
      this.showModal = true;
    },
    onNegative() {
      this.showModal = false;
    },
    onPositive() {
      this.showModal = false;
    },
  },
  destroyed() {
    clearInterval();
  },
};
</script>

<style lang="scss" scoped></style>
