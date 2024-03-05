<script>
import Navbar from '@/components/Navbar.vue';
import Footer from './components/Footer.vue';
   export default {
      components : {
          Navbar : Navbar,
          Footer : Footer,
      }
   }
</script>


<template>
   <Navbar/>
   <router-view></router-view>
   <Footer/>
</template>