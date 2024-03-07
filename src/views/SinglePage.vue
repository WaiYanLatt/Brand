<script>
import useProduct from "@/stores/products.js";
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";
import RelCard from '@/components/RelCard.vue'

// Import Swiper styles
import "swiper/css";

import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper/modules";

export default {
  data() {
    return {
      useProduct: useProduct(),
      currentSlide: 0,
      stockPecs: 0,
    };
  },
  components: {
    Swiper,
    SwiperSlide,
    RelCard : RelCard,
  },
  setup() {
    return {
      modules: [EffectCoverflow, Pagination],
    };
  },
  computed: {
    currentProduct() {
      const ProductId = Number(this.$route.params.id);
      const Product = this.useProduct.products.find(
        (pro) => pro.id === ProductId
      );
      return Product;
    },
    relatedProduct(){
      const productCategory = this.currentProduct.category;
      const categories = this.useProduct.products.filter(pro => pro.category === productCategory);
      return categories;
    }
  },
  methods: {
    minus() {
      if (this.stockPecs !== 0) {
        this.stockPecs--;
      }
    },
    plus() {
      if (this.stockPecs !== this.currentProduct.stock) {
        this.stockPecs++;
      }
    },
    reset() {
      this.stockPecs = 0;
    },
  },
};
</script>

<template>
  <div class="container mx-auto px-16 mt-40 mb-20">
   <router-link to="/">
    <button class="bg-white w-12 h-12 shadow-lg border rounded-full mb-10">
        <i class="fa-solid fa-reply"></i>
    </button>
   </router-link>
    <div class="bg-white shadow-md border min-h-[500px] rounded-lg py-5">
      <div class="flex">
        <div class="w-[650px] p-5">
          <swiper
            :effect="'coverflow'"
            :grabCursor="true"
            :centeredSlides="true"
            :slidesPerView="'auto'"
            :coverflowEffect="{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2,
              slideShadows: true,
              autoplay: true,
            }"
            :loop="true"
            :modules="modules"
            class="mySwiper"
          >
            <swiper-slide
              v-show="currentProduct.thumbnail !== undefined || null"
              ><img
                class="rounded-lg w-full min-h-[300px]"
                :src="currentProduct.thumbnail" /></swiper-slide
            ><swiper-slide
              v-show="currentProduct.images[0] !== undefined || null"
              ><img
                class="rounded-lg w-full min-h-[300px]"
                :src="currentProduct.images[0]" /></swiper-slide
            ><swiper-slide
              v-show="currentProduct.images[1] !== undefined || null"
              ><img
                class="rounded-lg w-full min-h-[300px]"
                :src="currentProduct.images[1]" /></swiper-slide
            ><swiper-slide
              v-show="currentProduct.images[2] !== undefined || null"
              ><img
                class="rounded-lg w-full min-h-[300px]"
                :src="currentProduct.images[2]"
            /></swiper-slide>
            <swiper-slide
              v-show="currentProduct.images[3] !== undefined || null"
              ><img
                class="rounded-lg w-full min-h-[300px]"
                :src="currentProduct.images[3]"
            /></swiper-slide>
          </swiper>
        </div>
        <div class="w-full p-5">
          <h1 class="font-semibold text-3xl">{{ currentProduct.title }}</h1>
          <h1 class="font-semibold text-lg my-5">
            ${{ currentProduct.price }}
            <button
              class="bg-[#FFE3E3] text-red-500 font-semibold p-1 ml-2 text-xs rounded-md"
            >
              - {{ currentProduct.discountPercentage }} %
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
              >{{ currentProduct.rating }}</span
            >
          </div>
          <h1 class="font-semibold text-lg">
            {{ currentProduct.description }}
          </h1>
          <h1 class="font-semibold text-lg mt-5 text-blue-500">
            Instock items - {{ currentProduct.stock - stockPecs }} pecs
          </h1>
          <div class="flex items-center mt-5">
            <button
              class="w-12 h-12 bg-blue-500 rounded-lg cursor-pointer"
              @click="minus"
            >
              <i class="fa-solid fa-minus text-lg text-white"></i>
            </button>
            <h1 class="w-20 text-center font-semibold text-xl">
              {{ stockPecs }}
            </h1>
            <button
              class="w-12 h-12 bg-blue-500 rounded-lg cursor-pointer"
              @click="plus"
            >
              <i class="fa-solid fa-plus text-lg text-white"></i>
            </button>
            <button
              class="w-32 font-semibold text-white py-3 ml-5 bg-blue-500 rounded-lg cursor-pointer"
            >
              Price : $ {{ currentProduct.price * stockPecs }}
            </button>
            <button
              class="w-28 font-semibold text-white py-3 ml-5 bg-blue-500 rounded-lg cursor-pointer"
              v-show="this.stockPecs !== 0"
              @click="reset"
            >
              Reset
            </button>
          </div>
          <button class="w-full text-white font-semibold bg-blue-500 py-3 mt-5 rounded-lg">
            <i class="fa-solid fa-cart-shopping mr-5"></i>
              Buy {{ currentProduct.title }}
          </button>
        </div>
      </div>
    </div>
    <div class="bg-white shadow-md border min-h-[300px] rounded-lg p-5 mt-20">
       <h1 class="font-semibold text-xl">Related Products</h1>
       <div class="grid grid-cols-5 gap-5 mt-10">
        <RelCard v-for="rel in relatedProduct" :rel="rel"/>
       </div>
    </div>
    <div class="bg-gradient-to-r from-[#237CFF] to-[#005ADE] p-5 mt-10 rounded-md shadow-lg">
       <div class="flex items-center justify-between">
          <div>
             <h1 class="text-xl font-semibold text-white">Super discount on more than 100 USD</h1>
              <p class="font-semibold text-white text-sm">Have you ever finally just write dummy info</p>
          </div>
          <button class="bg-[#FF9017] py-3 px-5 text-white font-semibold rounded-lg">Shop Now</button>
       </div>
    </div>
  </div>
</template>

<style scoped>
.swiper {
  width: 100%;
  padding-top: 50px;
  padding-bottom: 50px;
}

.swiper-slide {
  background-position: center;
  background-size: cover;
  width: 300px;
  height: 300px;
}

.swiper-slide img {
  display: block;
  width: 100%;
}
</style>
