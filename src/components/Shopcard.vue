<script>
import useProduct from '@/stores/products.js'

export default {
  data(){
    return {
       useProduct : useProduct(),
    }
  },
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  methods : {
     addProduct() {
        const guestOrder = this.useProduct.products.find(pro => pro.id === this.product.id);
        this.useProduct.order.push(guestOrder);
     }
  }
};
</script>

<template>
  <div class="w-full bg-white border rounded-lg shadow-lg overflow-hidden">
    <router-link :to="`single-page/${product.id}`" >
      <img
        class="w-full h-56 hover:scale-110 cursor-pointer duration-500 hover:brightness-75"
        :src="product.images[0]"
        alt="product image"
      />
    </router-link>
    <div class="flex items-center justify-between p-4">
       <div>
        <span class="text-md font-semibold text-gray-900 dark:text-white"
        >${{ product.price }}</span
      >
      <button
        class="bg-[#FFE3E3] text-red-500 font-semibold p-1 ml-2 text-xs rounded-md"
      >
        - {{ product.discountPercentage }} %
      </button>
       </div>
      <button
      @click="addProduct"
        class="text-white bg-blue-700 hover:bg-blue-800 px-3 py-2 rounded-lg"
      >
        <i class="fa-solid fa-shopping-cart text-white"></i>
      </button>
    </div>
    <div class="px-5">
      <a href="#">
        <h5 class="text-md font-semibold text-gray-900">
          {{ product.title }}
        </h5>
      </a>
      <div class="flex items-center mt-2.5 mb-5">
        <div class="flex items-center space-x-1 rtl:space-x-reverse">
          <i class="fa-solid fa-star text-blue-500"></i>
          <i class="fa-solid fa-star text-blue-500"></i>
          <i class="fa-solid fa-star text-blue-500"></i>
          <i class="fa-solid fa-star text-blue-500"></i>
          <i class="fa-solid fa-star text-blue-200"></i>
        </div>
        <span
          class="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded ms-3"
          >{{ product.rating }}</span
        >
      </div>
    </div>
  </div>
</template>
