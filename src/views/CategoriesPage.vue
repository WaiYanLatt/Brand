<script>
import CatagoriesCard from "@/components/CatagoriesCard.vue";
import useCategories from "@/stores/Categories";
import Brandlist from "@/components/Brandlist.vue";

export default {
  components: {
    CatagoriesCard: CatagoriesCard,
    Brandlist: Brandlist,
  },
  data() {
    return {
      useCategories: useCategories(),
      grid: false,
    };
  },
  methods: {
    async menwatches() {
      const categories = await this.useCategories.getCategories("mens-watches");
      this.useCategories.setCategories(categories);
      this.useCategories.itemsName = "Mens-watches";
    },
    async womenwatches() {
      const categories = await this.useCategories.getCategories(
        "womens-watches"
      );
      this.useCategories.setCategories(categories);
      this.useCategories.itemsName = "Womens-watches";
    },
    async womenbags() {
      const categories = await this.useCategories.getCategories("womens-bags");
      this.useCategories.setCategories(categories);
      this.useCategories.itemsName = "Womens-bags";
    },
    async womenjewellery() {
      const categories = await this.useCategories.getCategories(
        "womens-jewellery"
      );
      this.useCategories.setCategories(categories);
      this.useCategories.itemsName = "Womens-jewellery";
    },
    async lighting() {
      const categories = await this.useCategories.getCategories("lighting");
      this.useCategories.setCategories(categories);
      this.useCategories.itemsName = "Lighting";
    },
    grid1() {
      this.grid = true;
    },
    list1() {
      this.grid = false;
    },
  },
};
</script>

<template>
  <div class="container mx-auto lg:px-16 px-5 lg:mt-40 mt-36 lg:mb-20 mb-10">
    <div class="flex lg:flex-row md:flex-row flex-col relative">
      <div class="lg:w-[350px] md:w-[350px] w-full lg:min-h-screen h-auto mb-10 lg:mb-0">
        <div class="border-t mt-3">
          <h1 class="font-semibold text-xl mt-3">Category</h1>
          <ul class="lg:mt-5 mt-2 *:mt-3 grid lg:grid-cols-1 md:grid-cols-1 grid-cols-2">
            <li>
              <button
                class="font-semibold hover:underline duration-500"
                @click="menwatches"
              >
                Mens-watches
              </button>
            </li>
            <li>
              <button
                class="font-semibold hover:underline duration-500"
                @click="womenwatches"
              >
                Womens-watches
              </button>
            </li>
            <li>
              <button
                class="font-semibold hover:underline duration-500"
                @click="womenbags"
              >
                Womens-bags
              </button>
            </li>
            <li>
              <button
                class="font-semibold hover:underline duration-500"
                @click="womenjewellery"
              >
                Womens-jewellery
              </button>
            </li>
            <li>
              <button
                class="font-semibold hover:underline duration-500"
                @click="lighting"
              >
                Lighting
              </button>
            </li>
          </ul>
        </div>
        <div class="border-t mt-3">
          <h1 class="font-semibold text-xl mt-3">Brands</h1>
          <Brandlist/>
        </div>
        <div class="border-t mt-3">
          <h1 class="font-semibold text-xl mt-3">Prices</h1>
          <ul class="lg:mt-5 mt-2 *:mt-3 grid lg:grid-cols-1  md:grid-cols-1 grid-cols-2">
            <li>
              <input
                type="checkbox"
                class="cursor-pointer"
                v-model="useCategories.lower1200"
                @change="useCategories.setPriceFilter(1200)"
              />
              <span class="font-semibold ml-2">Lower than $1200</span>
            </li>
            <li>
              <input
                type="checkbox"
                class="cursor-pointer"
                v-model="useCategories.lower1000"
                @change="useCategories.setPriceFilter(1000)"
              />

              <span class="font-semibold ml-2">Lower than $1000</span>
            </li>
            <li>
              <input
                type="checkbox"
                class="cursor-pointer"
                v-model="useCategories.lower700"
                @change="useCategories.setPriceFilter(700)"
              />
              <span class="font-semibold ml-2">Lower than $700</span>
            </li>
            <li>
              <input
                type="checkbox"
                class="cursor-pointer"
                v-model="useCategories.lower500"
                @change="useCategories.setPriceFilter(500)"
              />
              <span class="font-semibold ml-2">Lower than $500</span>
            </li>
            <li>
              <input
                type="checkbox"
                class="cursor-pointer"
                v-model="useCategories.lower400"
                @change="useCategories.setPriceFilter(400)"
              />
              <span class="font-semibold ml-2">Lower than $400</span>
            </li>
          </ul>
        </div>
      </div>
      <div class="w-full lg:ml-10 md:ml-5 ml-0 min-h-screen">
        <div
          class="py-3 lg:px-5 px-2 z-10 bg-white shadow-sm border flex items-center sticky lg:top-32 top-36 justify-between rounded-md"
        >
          <h1 class="font-semibold">
            {{ useCategories.categories.length }} items in
            {{ useCategories.itemsName }}
          </h1>
          <button
            v-show="useCategories.reset === true"
            @click="useCategories.resetData"
            class="border shadow-md lg:px-5 px-3 py-1 lg:text-lg text-sm font-semibold rounded-full"
          >
            reset <i class="fa-solid fa-xmark text-blue-500"></i>
          </button>
          <div>
            <button class="px-3 py-2 border rounded-md" @click="grid1">
              <i class="fa-solid fa-grip"></i>
            </button>
            <button class="px-3 py-2 border rounded-md ml-2" @click="list1">
              <i class="fa-solid fa-grip-lines"></i>
            </button>
          </div>
        </div>
        <div
          class="grid lg:grid-cols-1 mt-5 gap-3"
          :class="{ 'lg:!grid-cols-3 !grid-cols-1 md:!grid-cols-2': grid === true }"
        >
          <CatagoriesCard
            v-for="category in useCategories.filteredCategory"
            :key="category.id"
            :category="category"
            :grid="grid"
          />
        </div>
      </div>
    </div>
  </div>
</template>
