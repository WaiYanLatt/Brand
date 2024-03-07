<script>
  export default {
     props : {
        rel : {
            type : Object,
            required : true,
        }
     }
  }
</script>

<template>
    <div class="w-full">
      <router-link :to="`/single-page/${this.rel.id}`">
        <img :src="rel.images[0]" alt="" class="w-full h-[150px] rounded-lg shadow-md">
      </router-link>
      <h1 class="font-semibold text-lg mt-5 text-center">{{ rel.title }}</h1>
    </div>
</template>