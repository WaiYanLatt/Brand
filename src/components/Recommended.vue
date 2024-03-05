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
     <div class="grid grid-cols-4 mt-10 gap-2">
        <Shopcard v-for="product in useProduct.products" :product="product" :key="product.id"/>
     </div>
  </div>
</template>
