<script>
export default {
  props: {
    slide: {
      type: Object,
      required: true,
    },
  },
};
</script>

<template>
  <div class="relative">
    <img class="w-full h-[330px] object-cover rounded-md" :src="slide.url" alt="" />
    <h1 class="font-medium text-xl absolute top-10 left-10">
      {{ slide.description1 }}
    </h1>
    <h1 class="font-semibold text-2xl absolute top-20 left-10">
      {{ slide.description2 }}
    </h1>
    <button
      class="bg-slate-800 text-white rounded-md font-semibold px-5 py-2 absolute top-32 left-10"
    >
      View More
    </button>
  </div>
</template>
