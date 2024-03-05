import { defineStore } from "pinia";
const useProduct = defineStore("product", {
  state: () => {
    return {
      products: [],
    };
  },
  actions: {
    async getProducts() {
      const options = {
        method: "GET",
        headers: {
          "User-Agent": "insomnia/8.6.1",
          Bearer:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImN1c19QZFlyc1ByaFQwNGpXUSIsIm1vZXNpZlByaWNpbmdJZCI6InByaWNlXzFNUXF5dkJESWxQbVVQcE1SWUVWdnlLZSIsImlhdCI6MTcwOTAwNjAyMX0.zOD-HfAJoAcYAFTVww8PNZf8zJMDJnKtRhtjuEY98Z0",
        },
      };

      const response = await fetch("https://dummyjson.com/products?limit=100", options);
      const data = await response.json();
      return data.products;
    },

    setProducts(products) {
      this.products = products;
    },
  },
});
export default useProduct;

// dummy data
// async getProducts() {
//     const options = {
//         method: 'GET',
//         headers: {
//           'User-Agent': 'insomnia/8.6.1',
//           Bearer: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImN1c19QZFlyc1ByaFQwNGpXUSIsIm1vZXNpZlByaWNpbmdJZCI6InByaWNlXzFNUXF5dkJESWxQbVVQcE1SWUVWdnlLZSIsImlhdCI6MTcwOTAwNjAyMX0.zOD-HfAJoAcYAFTVww8PNZf8zJMDJnKtRhtjuEY98Z0'
//         }
//       };

//     const response = await fetch('https://dummyjson.com/products', options);
//     const data = await response.json();
//     return data.products;
// },

//fake store api
// async getProducts() {
//     const options = {method: 'GET', headers: {'User-Agent': 'insomnia/8.6.1'}};

//     const response  = await fetch('https://fakestoreapi.com/products', options);
//     const data = await response.json();
//     return data;
// },
