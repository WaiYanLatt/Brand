import { defineStore } from "pinia";
const useServiceAndregion = defineStore("service", {
  state: () => {
    return {
      Services: [
        {
          id: 1,
          url: "/box.png",
          des: "Source from Industry Hubs",
          icon: "fa-solid fa-magnifying-glass",
        },
        {
          id: 2,
          url: "/rainbow.png",
          des: "Customize Your Products",
          icon: "fa-solid fa-box-archive",
        },
        {
          id: 3,
          url: "/flight.png",
          des: "Fast, reliable shipping by ocean or air",
          icon: "fa-solid fa-paper-plane",
        },
        {
          id: 4,
          url: "/job.png",
          des: "Product monitoring and inspection",
          icon: "fa-solid fa-shield-halved",
        },
      ],
      Regions: [
        {
          id: 1,
          flagUrl: "https://flagsapi.com/AE/flat/64.png",
          name: "Arab Emirates",
          des: "shopname.ae",
        },
        {
          id: 2,
          flagUrl: "https://flagsapi.com/AU/flat/64.png",
          name: "Australia",
          des: "shopname.ae",
        },
        {
          id: 3,
          flagUrl: "https://flagsapi.com/US/flat/64.png",
          name: "United States",
          des: "shopname.ae",
        },
        {
          id: 4,
          flagUrl: "https://flagsapi.com/RU/flat/64.png",
          name: "Russia",
          des: "shopname.ru",
        },
        {
          id: 5,
          flagUrl: "https://flagsapi.com/IT/flat/64.png",
          name: "Italy",
          des: "shopname.it",
        },
        {
          id: 6,
          flagUrl: "https://flagsapi.com/DK/flat/64.png",
          name: "Denmark",
          des: "demark.com.dk",
        },
        {
          id: 7,
          flagUrl: "https://flagsapi.com/FR/flat/64.png",
          name: "France",
          des: "shopname.com.fr",
        },
        {
          id: 8,
          flagUrl: "https://flagsapi.com/AE/flat/64.png",
          name: "Arab Emirates",
          des: "shopname.ae",
        },
        {
          id: 9,
          flagUrl: "https://flagsapi.com/CN/flat/64.png",
          name: "China",
          des: "shopname.ae",
        },
        {
          id: 10,
          flagUrl: "https://flagsapi.com/GB/flat/64.png",
          name: "United Kingdom",
          des: "shopname.co.uk",
        },
      ],
    };
  },
});

export default useServiceAndregion;
