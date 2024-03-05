<script>
export default {
  props: {
    region: {
      type: Object,
      required: true,
    },
  },
};
</script>

<template>
  <div class="w-full flex border  bg-white shadow-md rounded-md overflow-hidden py-1 px-3">
    <img
      :src="region.flagUrl"
      alt=""
      class="w-14 h-14 mr-4"
    />
    <div>
        <h1 class="text-md font-semibold">{{ region.name }}</h1>
        <span class="text-sm font-semibold text-gray-400">{{ region.des }}</span>
    </div>
  </div>
</template>