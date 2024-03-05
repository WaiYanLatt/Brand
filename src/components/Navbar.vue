<script>
import useCategories from "@/stores/Categories";

export default {
  data() {
    return {
      useCategories: useCategories(),
      cat: false,
      showIcon: false,
    };
  },
  methods: {
    showCat() {
      this.cat = !this.cat;
      this.showIcon = !this.showIcon;
    },
    async smartphones() {
      const categories = await this.useCategories.getCategories("smartphones");
      this.useCategories.setCategories(categories);
      this.$router.push("/category");
      this.useCategories.itemsName = "Smart phones";
    },
    async laptops() {
      const categories = await this.useCategories.getCategories("laptops");
      this.useCategories.setCategories(categories);
      this.$router.push("/category");
      this.useCategories.itemsName = "Laptops";
    },
    async homedecoration() {
      const categories = await this.useCategories.getCategories(
        "home-decoration"
      );
      this.useCategories.setCategories(categories);
      this.$router.push("/category");
      this.useCategories.itemsName = "Home-decoration";
    },
    async womensdresses() {
      const categories = await this.useCategories.getCategories(
        "womens-dresses"
      );
      this.useCategories.setCategories(categories);
      this.$router.push("/category");
      this.useCategories.itemsName = "Womens-dresses";
    },
    async womenshoes() {
      const categories = await this.useCategories.getCategories("womens-shoes");
      this.useCategories.setCategories(categories);
      this.$router.push("/category");
      this.useCategories.itemsName = "Womens-shoes";
    },
    async menshirts() {
      const categories = await this.useCategories.getCategories("mens-shirts");
      this.useCategories.setCategories(categories);
      this.$router.push("/category");
      this.useCategories.itemsName = "Mens-shirts";
    },
    async menshoes() {
      const categories = await this.useCategories.getCategories("mens-shoes");
      this.useCategories.setCategories(categories);
      this.$router.push("/category");
      this.useCategories.itemsName = "Mens-shoes";
    },
    toHome() {
      this.$router.push("/");
    },
  },
};
</script>

<template>
  <nav class="fixed top-0 w-full z-20">
    <div class="container-fluid mx-auto px-28 bg-white py-3 border-b w-full">
      <div class="flex justify-between items-center">
        <div class="flex items-center">
          <div
            class="bg-blue-500 rounded-md w-10 h-10 flex items-center justify-center"
          >
            <i class="fa-solid fa-bag-shopping text-white"></i>
          </div>
          <h1 class="text-2xl font-semibold text-blue-500 ml-3">Brand</h1>
        </div>
        <div>
          <div
            class="border-2 flex items-center border-blue-500 w-[650px] rounded-lg overflow-hidden"
          >
            <input
              type="text"
              class="focus:outline-none border-0 pl-3 py-2 font-semibold border-e-2 w-[400px] border-e-blue-500"
              placeholder="Search"
            />
            <button
              class="px-3 font-semibold border-e-2 w-[150px] border-blue-500 py-2"
            >
              All category
              <i class="fa-solid fa-angle-down ml-3"></i>
            </button>
            <button class="bg-blue-500 py-2 w-[100px] text-white font-semibold">
              Search
            </button>
          </div>
        </div>
        <div class="flex justify-between *:mr-3">
          <div class="text-center cursor-pointer">
            <i class="fa-solid fa-user text-lg text-gray-500"></i>
            <h1 class="font-semibold text-gray-400 text-sm">Profile</h1>
          </div>
          <div class="text-center cursor-pointer">
            <i class="fa-solid fa-cart-shopping text-lg text-gray-500"></i>
            <h1 class="font-semibold text-gray-400 text-sm">My Cart</h1>
          </div>
        </div>
      </div>
    </div>
    <div
      class="container-fluid mx-auto relative px-28 bg-white py-3 border-b w-full"
    >
      <div>
        <div>
          <ul class="flex *:mr-5 *:duration-500 *:cursor-pointer">
            <li class="flex items-center hover:text-gray-400" @click="showCat">
              <i
                class="fa-solid fa-bars text-lg"
                v-show="showIcon === false"
              ></i>
              <i
                class="fa-solid fa-xmark text-2xl"
                v-show="showIcon === true"
              ></i>
              <h1 class="font-semibold ml-3">All category</h1>
            </li>
            <a href="#slide" @click="toHome">
              <li class="hover:text-gray-400">
                <h1 class="font-semibold">Main</h1>
              </li>
            </a>
            <a href="#deal" @click="toHome">
              <li class="hover:text-gray-400">
                <h1 class="font-semibold">Hot offers</h1>
              </li>
            </a>
            <a href="#gift" @click="toHome">
              <li class="hover:text-gray-400">
                <h1 class="font-semibold">Gift boxes</h1>
              </li>
            </a>
            <a href="#menu" @click="toHome">
              <li class="hover:text-gray-400">
                <h1 class="font-semibold">Menu Items</h1>
              </li>
            </a>
            <a href="#service" @click="toHome">
              <li class="hover:text-gray-400">
                <h1 class="font-semibold">Services</h1>
              </li>
            </a>
          </ul>
        </div>
      </div>
      <div
        class="backdrop-blur-3xl py-3 border-t transition-all duration-300 absolute top-0 -z-10 p-5 w-full"
        :class="{ 'top-12 z-[10]': cat === true }"
      >
        <ul class="flex items-center *:mr-5">
          <li
            @click="smartphones"
            class="font-semibold hover:text-gray-500 text-black duration-500 cursor-pointer"
          >
            Smartphones
            <i class="fa-solid fa-angle-right ml-2"></i>
          </li>
          <li
            @click="laptops"
            class="font-semibold hover:text-gray-500 text-black duration-500 cursor-pointer"
          >
            Laptops
            <i class="fa-solid fa-angle-right ml-2"></i>
          </li>
          <li
            @click="homedecoration"
            class="font-semibold hover:text-gray-500 text-black duration-500 cursor-pointer"
          >
            Home-decoration
            <i class="fa-solid fa-angle-right ml-2"></i>
          </li>
          <li
            @click="womensdresses"
            class="font-semibold hover:text-gray-500 text-black duration-500 cursor-pointer"
          >
            Womens-dresses
            <i class="fa-solid fa-angle-right ml-2"></i>
          </li>
          <li
            @click="womenshoes"
            class="font-semibold hover:text-gray-500 text-black duration-500 cursor-pointer"
          >
            Womens-shoes
            <i class="fa-solid fa-angle-right ml-2"></i>
          </li>
          <li
            @click="menshirts"
            class="font-semibold hover:text-gray-500 text-black duration-500 cursor-pointer"
          >
            Mens-shirts
            <i class="fa-solid fa-angle-right ml-2"></i>
          </li>
          <li
            @click="menshoes"
            class="font-semibold hover:text-gray-500 text-black duration-500 cursor-pointer"
          >
            Mens-shoes
            <i class="fa-solid fa-angle-right ml-2"></i>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
