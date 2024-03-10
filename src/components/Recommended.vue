<script>
import useProduct from "@/stores/products.js";
import Shopcard from "./Shopcard.vue";

export default {
  data() {
    return {
      useProduct: useProduct(),
    };
  },
  async created() {
    const products = await this.useProduct.getProducts();
    this.useProduct.setProducts(products);
  },
  components : {
     Shopcard : Shopcard,
  }
};
</script>

<template>
  <div class="mt-16">
    <h1 class="font-semibold text-2xl">Recommended Items</h1>
     <div class="grid lg:grid-cols-4 grid-cols-1 md:grid-cols-3 mt-10 lg:gap-2 lg:gap-y-3 md:gap-3  gap-y-5">
        <Shopcard v-for="product in useProduct.products" :product="product" :key="product.id"/>
     </div>
  </div>
</template>
