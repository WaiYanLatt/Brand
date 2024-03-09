<script>
export default {
  props: {
    category: {
      type: Object,
      required: true,
    },
    grid: {
      type: Boolean,
      required: true,
    },
  },
};
</script>

<template>
  <div
    class="w-full flex flex-row bg-white rounded-md overflow-hidden shadow-md"
    :class="{ 'flex-col': grid === true }"
  >
    <router-link :to="`/single-page/${this.category.id}`" class="flex-shrink-0">
      <img
        :src="category.images[0]"
        alt=""
        class="lg:w-[210px] w-[150px] lg:h-[230px] h-full hover:brightness-75 duration-500 cursor-pointer"
        :class="{ '!w-full': grid === true }"
      />
    </router-link>
    <div class="p-5">
      <h1 class="font-semibold text-lg">{{ category.title }}</h1>
      <h1 class="font-semibold text-xl">
        ${{ category.price }}
        <button
          class="bg-[#FFE3E3] text-red-500 font-semibold p-1 ml-2 text-xs rounded-md"
        >
          - {{ category.discountPercentage }} %
        </button>
      </h1>
      <div class="flex items-center mt-2.5 mb-5">
        <div class="flex items-center space-x-1 rtl:space-x-reverse">
          <i class="fa-solid fa-star text-orange-500"></i>
          <i class="fa-solid fa-star text-orange-500"></i>
          <i class="fa-solid fa-star text-orange-500"></i>
          <i class="fa-solid fa-star text-orange-500"></i>
          <i class="fa-solid fa-star text-orange-200"></i>
        </div>
        <span
          class="bg-orange-100 text-orange-800 text-xs font-semibold px-2.5 py-0.5 rounded ms-3"
          >{{ category.rating }}</span
        >
      </div>
      <p class="font-semibold">{{ category.description }}</p>
    </div>
  </div>
</template>
