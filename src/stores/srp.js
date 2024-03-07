import { defineStore } from "pinia";
const useSearch = defineStore("search", {
  state: () => {
    return {
      products: [],
      searchQuery : '',
      res : ''
    };
  },
  actions: {
    async getSearch(searchQuery) {
      const options = {
        method: "GET",
        headers: {
          "User-Agent": "insomnia/8.6.1",
          Bearer:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImN1c19QZFlyc1ByaFQwNGpXUSIsIm1vZXNpZlByaWNpbmdJZCI6InByaWNlXzFNUXF5dkJESWxQbVVQcE1SWUVWdnlLZSIsImlhdCI6MTcwOTAwNjAyMX0.zOD-HfAJoAcYAFTVww8PNZf8zJMDJnKtRhtjuEY98Z0",
        },
      };

      const response = await fetch("https://dummyjson.com/products/search?q=" + `${searchQuery}`, options);
      const data = await response.json();
      return data.products;
    },

    setSearch(products) {
      this.products = products;
    },
  },
});
export default useSearch;
