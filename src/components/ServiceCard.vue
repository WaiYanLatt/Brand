<script>
export default {
  props: {
    service: {
      type: Object,
      required: true,
    },
  },
};
</script>

<template>
  <div class="bg-white w-full shadow-md rounded-lg overflow-hidden relative">
    <img
      :src="service.url"
      alt=""
      class="w-full h-36 object-cover hover:brightness-75 duration-500 cursor-pointer"
    />
    <button
      class="absolute bottom-14 border-2 border-white right-4 h-14 rounded-full w-14 bg-[#D1E7FF]"
    >
      <i :class="service.icon"></i>
    </button>
    <div class="p-3">
      <h1 class="font-semibold">{{ service.des }}</h1>
    </div>
  </div>
</template>
