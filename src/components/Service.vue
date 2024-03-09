<script>
import useServiceAndregion from "@/stores/Service and region.js";
import ServiceCard from "./ServiceCard.vue";
import CountryCard from './CountryCard.vue'

export default {
  data() {
    return {
      useServiceAndregion: useServiceAndregion(),
    };
  },
  components: {
    ServiceCard: ServiceCard,
    CountryCard : CountryCard,
  },
};
</script>

<template>
  <div class="mt-10">
    <h1 class="font-semibold text-2xl">Our extra services</h1>
    <div class="grid lg:grid-cols-4 grid-cols-2 md:grid-cols-4 gap-3 mt-7">
      <ServiceCard
        v-for="service in useServiceAndregion.Services"
        :service="service"
        :key="service.id"
      />
    </div>
    <h1 class="font-semibold text-2xl mt-10">Suppliers by region</h1>
    <div class="grid lg:grid-cols-5 grid-cols-1 md:grid-cols-3 gap-3 mt-7">
      <CountryCard
        v-for="region in useServiceAndregion.Regions"
        :region="region"
        :key="region.id"
      />
    </div>
  </div>
</template>
