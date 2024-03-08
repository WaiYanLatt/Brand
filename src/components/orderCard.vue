<script>
import useProduct from '@/stores/products.js'

  export default {
     data(){
        return {
            useProduct : useProduct(),
        }
     },
      props : {
        ord : {
            type : Object,
            required : true,
        }
      },
      methods : {
        deleteOrder() {
            const index = this.useProduct.order.findIndex(or => or.id === this.ord.id);
            this.useProduct.order.splice(index , 1);
        }
      }
  }
</script>

<template>
    <div class="w-full shadow-md mt-5 flex h-[110px] rounded-md  overflow-hidden">
       <img :src="ord.images[0]" alt="" class="w-[100px] h-full flex-shrink-0">
       <div class="ml-3 mt-3 w-full">
          <div>
            <h1 class="font-semibold text-gray-500">$ {{ ord.price }}</h1>
          <p class="font-semibold">{{ ord.title }}</p>
          </div>
       </div>
       <button class="w-10 h-10 mt-3 bg-red-500 rounded-md mx-3 flex-shrink-0" @click="deleteOrder">
          <i class="fa-solid fa-trash text-white"></i>
       </button>
    </div>
</template>