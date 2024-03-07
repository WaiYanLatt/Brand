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
    <div class="container mx-auto px-16">
    <div class="mt-40 bg-white rounded-lg shadow-lg w-full min-h-[400px] p-5">
        <h1 class="font-semibold my-5 text-xl">Search results for : {{ useSearch.res }}</h1>
      <div class="grid grid-cols-4 gap-5">
        <Shopcard v-for="product in useSearch.products" :product="product"/>
      </div>
    </div>
    </div>
</template>