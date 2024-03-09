<script>
import useCategories from "@/stores/Categories";
import useSearch from "@/stores/srp.js";
import useProduct from "@/stores/products.js";
import orderCard from "@/components/orderCard.vue";

export default {
  data() {
    return {
      useCategories: useCategories(),
      useSearch: useSearch(),
      useProduct: useProduct(),
      cat: false,
      showIcon: false,
      slide: false,
    };
  },
  components: {
    orderCard: orderCard,
  },
  watch: {
    searchQuery: "searchProduct",
  },
  methods: {
    showCat() {
      this.cat = !this.cat;
      this.showIcon = !this.showIcon;
    },
    async smartphones() {
      const categories = await this.useCategories.getCategories("smartphones");
      this.useCategories.setCategories(categories);
      this.useCategories.itemsName = "Smart phones";
    },
    async laptops() {
      const categories = await this.useCategories.getCategories("laptops");
      this.useCategories.setCategories(categories);
      this.useCategories.itemsName = "Laptops";
    },
    async homedecoration() {
      const categories = await this.useCategories.getCategories(
        "home-decoration"
      );
      this.useCategories.setCategories(categories);
      this.useCategories.itemsName = "Home-decoration";
    },
    async womensdresses() {
      const categories = await this.useCategories.getCategories(
        "womens-dresses"
      );
      this.useCategories.setCategories(categories);
      this.useCategories.itemsName = "Womens-dresses";
    },
    async womenshoes() {
      const categories = await this.useCategories.getCategories("womens-shoes");
      this.useCategories.setCategories(categories);
      this.useCategories.itemsName = "Womens-shoes";
    },
    async menshirts() {
      const categories = await this.useCategories.getCategories("mens-shirts");
      this.useCategories.setCategories(categories);
      this.useCategories.itemsName = "Mens-shirts";
    },
    async menshoes() {
      const categories = await this.useCategories.getCategories("mens-shoes");
      this.useCategories.setCategories(categories);
      this.useCategories.itemsName = "Mens-shoes";
    },
    async searchProduct() {
      const results = await this.useSearch.getSearch(
        this.useSearch.searchQuery.toLowerCase()
      );
      this.useSearch.setSearch(results);
      this.$router.push("/srp");
      this.useSearch.res = this.useSearch.searchQuery;
      this.useSearch.searchQuery = "";
    },
    toHome() {
      this.$router.push("/");
    },
    shop() {
      this.slide = true;
    },
    unShop() {
      this.slide = false;
    },
  },
};
</script>

<template>
  <nav class="fixed top-0 w-full z-20">
    <div class="container-fluid mx-auto lg:px-28 px-2 bg-white py-3 border-b w-full">
      <div class="flex justify-between items-center">
        <router-link to="/">
          <div class="flex items-center">
          <div
            class="bg-blue-500 rounded-md w-10 h-10 lg:mr-0  flex items-center justify-center"
          >
            <i class="fa-solid fa-bag-shopping text-white"></i>
          </div>
          <h1 class="text-2xl font-semibold text-blue-500 ml-3 hidden lg:block">Brand</h1>
        </div>
        </router-link>
        <div>
          <form
            @submit.prevent="searchProduct"
            class="border-2 flex items-center border-blue-500 w-[200px] lg:w-[650px] rounded-lg overflow-hidden"
          >
            <input
              type="text"
              class="focus:outline-none border-0 pl-3 py-2 font-semibold border-e-2 w-[150px] lg:w-[550px] border-e-blue-500"
              v-model="useSearch.searchQuery"
              placeholder="Search"
            />
            <button
              class="bg-blue-500 py-2 lg:w-[100px] w-[50px] text-white font-semibold"
              @click.prevent="searchProduct"
            >
              <i class="fa-solid fa-magnifying-glass"></i>
            </button>
          </form>
        </div>
        <div class="flex justify-between *:mr-3">
          <div class="text-center cursor-pointer">
            <div class="relative inline-flex w-fit mt-2">
              <div
                class="absolute bottom-auto left-auto right-0 top-0 inline-block -translate-y-1/2 translate-x-2/4 rotate-0 skew-x-0 skew-y-0 scale-x-100 scale-y-100 whitespace-nowrap rounded-full bg-red-500 px-2 py-1 text-center align-baseline text-xs font-bold leading-none text-white"
              >
                {{ this.useProduct.order.length }}
              </div>
              <button
                type="button"
                class="duration-700 font-semibold"
                @click="shop"
              >
                <i class="fa-solid fa-cart-shopping text-blue-500 text-2xl"></i>
              </button>
            </div>
            <h1 class="font-semibold text-gray-400 text-sm">My Cart</h1>
          </div>
        </div>
      </div>
    </div>
    <div
      class="container-fluid mx-auto relative lg:px-28 px-3 bg-white py-3 border-b w-full"
    >
      <div>
        <div>
          <ul class="flex lg:*:mr-5 *:mr-2 *:duration-500 *:cursor-pointer">
            <li class="flex items-center hover:text-gray-400" @click="showCat">
              <i
                class="fa-solid fa-bars text-lg"
                v-show="showIcon === false"
              ></i>
              <i
                class="fa-solid fa-xmark text-2xl"
                v-show="showIcon === true"
              ></i>
              <h1 class="font-semibold  lg:ml-3 ml-1 !text-nowrap">All category</h1>
            </li>
            <a href="#slide" @click="toHome">
              <li class="hover:text-gray-400">
                <h1 class="font-semibold">Main</h1>
              </li>
            </a>
            <a href="#deal" @click="toHome">
              <li class="hover:text-gray-400">
                <h1 class="font-semibold !text-nowrap">Hot offers</h1>
              </li>
            </a>
            <a href="#gift" @click="toHome" class="lg:block hidden">
              <li class="hover:text-gray-400">
                <h1 class="font-semibold">Gift boxes</h1>
              </li>
            </a>
            <a href="#menu" @click="toHome">
              <li class="hover:text-gray-400">
                <h1 class="font-semibold !text-nowrap">Menu Items</h1>
              </li>
            </a>
            <a href="#service" @click="toHome" class="lg:block hidden">
              <li class="hover:text-gray-400">
                <h1 class="font-semibold">Services</h1>
              </li>
            </a>
          </ul>
        </div>
      </div>
      <div
        class="backdrop-blur-3xl lg:py-3 py-1  border-t transition-all duration-300 absolute lg:top-0 top-[-200px] -z-10 lg:p-5 p-3 lg:w-full w-[350px]"
        :class="{ 'lg:top-12 top-[49px] z-[10]': cat === true }"
      >
        <ul class="flex lg:flex-row flex-col lg:items-center items-start lg:*:mr-5 *:mr-3">
          <router-link to="/category">
            <li
              @click="smartphones"
              class="font-semibold hover:text-gray-500 text-black duration-500 cursor-pointer"
            >
              Smartphones
              <i class="fa-solid fa-angle-right ml-2"></i>
            </li>
          </router-link>
          <router-link to="/category">
            <li
              @click="laptops"
              class="font-semibold hover:text-gray-500 text-black duration-500 cursor-pointer"
            >
              Laptops
              <i class="fa-solid fa-angle-right ml-2"></i>
            </li>
          </router-link>
          <router-link to="/category">
            <li
              @click="homedecoration"
              class="font-semibold hover:text-gray-500 text-black duration-500 cursor-pointer"
            >
              Home-decoration
              <i class="fa-solid fa-angle-right ml-2"></i>
            </li>
          </router-link>
          <router-link to="/category">
            <li
              @click="womensdresses"
              class="font-semibold hover:text-gray-500 text-black duration-500 cursor-pointer"
            >
              Womens-dresses
              <i class="fa-solid fa-angle-right ml-2"></i>
            </li>
          </router-link>
          <router-link to="/category">
            <li
              @click="womenshoes"
              class="font-semibold hover:text-gray-500 text-black duration-500 cursor-pointer"
            >
              Womens-shoes
              <i class="fa-solid fa-angle-right ml-2"></i>
            </li>
          </router-link>
          <router-link to="/category">
            <li
              @click="menshirts"
              class="font-semibold hover:text-gray-500 text-black duration-500 cursor-pointer"
            >
              Mens-shirts
              <i class="fa-solid fa-angle-right ml-2"></i>
            </li>
          </router-link>
          <router-link to="/category">
            <li
              @click="menshoes"
              class="font-semibold hover:text-gray-500 text-black duration-500 cursor-pointer"
            >
              Mens-shoes
              <i class="fa-solid fa-angle-right ml-2"></i>
            </li>
          </router-link>
        </ul>
      </div>
    </div>
    <!-- toggle -->
    <div
      class="bg-white h-screen w-[330px] z-30 fixed no-scrollbar duration-700 top-0 right-[-100%] shadow-lg p-4 overflow-y-scroll"
      :class="{ '!right-[0%]': slide === true }"
    >
      <button
        @click="unShop"
        class="w-10 h-10 rounded-full border bg-white shadow-md flex items-center justify-center fixed top-5"
      >
        <i class="fa-solid fa-xmark text-xl"></i>
      </button>
      <!-- orderCard -->
      <div class="mt-16">
        <orderCard v-for="ord in useProduct.order" :key="ord.id" :ord="ord" />
      </div>
    </div>
  </nav>
</template>
