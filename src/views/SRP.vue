<script>
import useSearch from "@/stores/srp.js";
import Shopcard from '@/components/Shopcard.vue'

export default {
  data() {
    return {
      useSearch: useSearch(),
    };
  },
  components : {
     Shopcard : Shopcard,
  }
};
</script>


<template>
    <div class="container mx-auto lg:px-16 px-3">
    <div class="mt-40 bg-white rounded-lg shadow-lg w-full lg:min-h-[400px] h-auto lg:p-5 p-3">
        <h1 class="font-semibold my-5 text-xl">Search results for : {{ useSearch.res }}</h1>
      <div class="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 md:gap-3 gap-5">
        <Shopcard v-for="product in useSearch.products" :product="product"/>
      </div>
    </div>
    </div>
</template>