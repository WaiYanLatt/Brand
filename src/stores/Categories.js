import { defineStore } from "pinia";
const useCategories = defineStore("category", {
  state: () => {
    return {
      categories: [],
      itemsName: "",
      filterStatus: "",
      lower1200: false,
      lower1000: false,
      lower700: false,
      lower500: false,
      lower400: false,
      Apple: false,
      Samsung: false,
      Huawei: false,
      OPPO: false,
      HP: false,
      Microsoft: false,
      Infinix: false,
      Golden: false,
      luxury: false,
      LED: false,
      Flying: false,
      Boho: false,
      IELGY: false,
      Ghazi: false,
      Digital: false,
      RED: false,
      IELGYF: false,
      Maasai: false,
      Sandals: false,
      Synthetic: false,
      Arrivals: false,
      The : false,
      Vintage : false,
      Free : false,
    };
  },
  getters: {
    filteredCategory() {
      if (this.filterStatus === "") {
        return this.categories;
      } else if (this.filterStatus === "lower1200") {
        return this.categories.filter((cate) => cate.price < 1200);
      } else if (this.filterStatus === "lower1000") {
        return this.categories.filter((cate) => cate.price < 1000);
      } else if (this.filterStatus === "lower700") {
        return this.categories.filter((cate) => cate.price < 700);
      } else if (this.filterStatus === "lower500") {
        return this.categories.filter((cate) => cate.price < 500);
      } else if (this.filterStatus === "lower400") {
        return this.categories.filter((cate) => cate.price < 400);
      } else if (this.filterStatus === "Apple") {
        return this.categories.filter((cate) => cate.brand === "Apple");
      } else if (this.filterStatus === "Samsung") {
        return this.categories.filter((cate) => cate.brand === "Samsung");
      } else if (this.filterStatus === "OPPO") {
        return this.categories.filter((cate) => cate.brand === "OPPO");
      } else if (this.filterStatus === "Huawei") {
        return this.categories.filter((cate) => cate.brand === "Huawei");
      } else if (this.filterStatus === "HP") {
        return this.categories.filter((cate) => cate.brand === "HP Pavilion");
      } else if (this.filterStatus === "Microsoft") {
        return this.categories.filter(
          (cate) => cate.brand === "Microsoft Surface"
        );
      } else if (this.filterStatus === "Infinix") {
        return this.categories.filter((cate) => cate.brand === "Infinix");
      } else if (this.filterStatus === "Golden") {
        return this.categories.filter((cate) => cate.brand === "Golden");
      } else if (this.filterStatus === "luxury") {
        return this.categories.filter((cate) => cate.brand === "luxury palace");
      } else if (this.filterStatus === "LED") {
        return this.categories.filter((cate) => cate.brand === "LED Lights");
      } else if (this.filterStatus === "Flying") {
        return this.categories.filter((cate) => cate.brand === "Flying Wooden");
      } else if (this.filterStatus === "Boho") {
        return this.categories.filter((cate) => cate.brand === "Boho Decor");
      } else if (this.filterStatus === "IELGY") {
        return this.categories.filter((cate) => cate.brand === "IELGY");
      } else if (this.filterStatus === "Ghazi") {
        return this.categories.filter((cate) => cate.brand === "Ghazi Fabric");
      } else if (this.filterStatus === "Digital") {
        return this.categories.filter(
          (cate) => cate.brand === "Digital Printed"
        );
      } else if (this.filterStatus === "RED") {
        return this.categories.filter(
          (cate) => cate.brand === "RED MICKY MOUSE.."
        );
      } else if (this.filterStatus === "IELGYF") {
        return this.categories.filter((cate) => cate.brand === "IELGY fashion");
      } else if (this.filterStatus === "Maasai") {
        return this.categories.filter(
          (cate) => cate.brand === "Maasai Sandals"
        );
      } else if (this.filterStatus === "Sandals") {
        return this.categories.filter(
          (cate) => cate.brand === "Sandals Flip Flops"
        );
      } else if (this.filterStatus === "Synthetic") {
        return this.categories.filter(
          (cate) => cate.brand === "Synthetic Leather"
        );
      } else if (this.filterStatus === "Arrivals") {
        return this.categories.filter(
          (cate) => cate.brand === "Arrivals Genuine"
        );
      } else if (this.filterStatus === "The") {
        return this.categories.filter(
          (cate) => cate.brand === "The Warehouse"
        );
      } else if (this.filterStatus === "Vintage") {
        return this.categories.filter(
          (cate) => cate.brand === "Vintage Apparel"
        );
      } else if (this.filterStatus === "Free") {
        return this.categories.filter(
          (cate) => cate.brand === "FREE FIRE"
        );
      }
    },
  },
  actions: {
    async getCategories(catego) {
      const options = {
        method: "GET",
        headers: {
          "User-Agent": "insomnia/8.6.1",
          Bearer:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImN1c19QZFlyc1ByaFQwNGpXUSIsIm1vZXNpZlByaWNpbmdJZCI6InByaWNlXzFNUXF5dkJESWxQbVVQcE1SWUVWdnlLZSIsImlhdCI6MTcwOTAwNjAyMX0.zOD-HfAJoAcYAFTVww8PNZf8zJMDJnKtRhtjuEY98Z0",
        },
      };

      const response = await fetch(
        "https://dummyjson.com/products/category/" + `${catego}`,
        options
      );
      const data = await response.json();
      return data.products;
    },

    setCategories(categories) {
      this.categories = categories;
    },

    setFilterStatus(status) {
      this.filterStatus = status;
    },

    setPriceFilter(price) {
      if (this[`lower${price}`] === true) {
        this.setFilterStatus(`lower${price}`);
      } else {
        this.setFilterStatus("");
      }
    },

    setBrandFilter(brand) {
      if (this[`${brand}`] === true) {
        this.setFilterStatus(`${brand}`);
      } else {
        this.setFilterStatus("");
      }
    },
  },
});
export default useCategories;
