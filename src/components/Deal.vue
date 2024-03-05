<script>
import useProduct from "@/stores/products";
import DealCard from "@/components/DealCard.vue";

export default {
  data() {
    return {
      useProduct : useProduct(),
      hours: "",
      min: "",
      sec: "",
    };
  },
  components: {
    DealCard : DealCard,
  },
  computed: {
    getMenWear() {
      const men = this.useProduct.products.filter(
        (pro) => pro.category === "laptops"
      );
      return men;
    },
  },
  mounted() {
    const updateCountdown = () => {
      const currentDate = new Date();

      const hours = currentDate.getHours();
      const minutes = currentDate.getMinutes();
      const seconds = currentDate.getSeconds();

      this.hours = `${hours}`;
      this.min = ` ${minutes}`;
      this.sec = `${seconds}`;
    };

    setInterval(updateCountdown, 1000);

    updateCountdown();
  },
};
</script>

<template>
  <div class="bg-white shadow-md w-full border rounded-md mt-10">
    <div class="flex h-64">
      <div class="w-[300px] border-e p-5 h-full">
        <h1 class="font-semibold text-2xl">Deal and offers</h1>
        <p class="font-semibold text-md text-gray-500">Hygience equipments</p>
        <div class="grid grid-cols-3 gap-1 mt-5">
          <div class="bg-black text-white p-1 rounded-md text-center">
            <h1 class="font-semibold">{{ hours }}</h1>
            <h1 class="font-semibold">Hour</h1>
          </div>
          <div class="bg-black text-white p-1 rounded-md text-center">
            <h1 class="font-semibold">{{ min }}</h1>
            <h1 class="font-semibold">Min</h1>
          </div>
          <div class="bg-black text-white p-1 rounded-md text-center">
            <h1 class="font-semibold">{{ sec }}</h1>
            <h1 class="font-semibold">Sec</h1>
          </div>
        </div>
      </div>
      <DealCard  class="w-[200px] p-5" v-for="product in getMenWear" :product="product" :key="product.id"/>
    </div>
  </div>
</template>
