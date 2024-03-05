<script>
import useProduct from "@/stores/products";
import ShowHomeCard from "./ShowHomeCard.vue";

export default {
  data() {
    return {
      useProduct: useProduct(),
    };
  },
  components: {
    ShowHomeCard: ShowHomeCard,
  },
  computed: {
    getFuniture() {
      const men = this.useProduct.products.filter(
        (pro) => pro.category === "smartphones" || pro.category === "laptops"
      );
      return men;
    },
  },
};
</script>

<template>
  <div
    class="bg-white border shadow-md w-full h-[257px] rounded-md mt-10 overflow-hidden"
  >
    <div class="flex h-full">
      <div class="w-[300px] border-e h-full relative">
        <img src="/watc.png" class="w-full h-full" alt="" />
        <div class="absolute top-5 left-3">
          <h1 class="font-semibold text-2xl">
            Consumer electronics and gadgets
          </h1>
          <p
            class="font-semibold text-md w-28 bg-white text-center py-1 mt-3 rounded-md"
          >
            Source now
          </p>
        </div>
      </div>
      <div class="w-[800px] grid grid-cols-4">
        <ShowHomeCard
          v-for="product in getFuniture"
          :product="product"
          :key="product.id"
        />
      </div>
    </div>
  </div>
</template>
