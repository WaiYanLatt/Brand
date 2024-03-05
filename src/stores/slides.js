import { defineStore } from "pinia";
const useSlide = defineStore("slide", {
  state: () => {
    return {
      slides: [
        {
          id: 1,
          url: "/mobile.png",
          auto: true,
          description1: "Latest trending",
          description2: "Electronic items",
        },
        {
          id: 2,
          url: "/clothes.jpg",
          clothes: true,
          description1: "Latest trending",
          description2: "Clothes and wear items",
        },
        {
          id: 3,
          url: "/home.jpg",
          home: true,
          description1: "Latest trending",
          description2: "Home interiors items",
        },
        {
          id: 4,
          url: "/computer.jpg",
          computer: true,
          description1: "Latest trending",
          description2: "Computer and teach items",
        },
        {
          id: 5,
          url: "/tools.jpg",
          tools: true,
          description1: "Latest trending",
          description2: "Tools , equipment items",
        },
        {
          id: 5,
          url: "/sports.jpg",
          sports: true,
          description1: "Latest trending",
          description2: "Sport items",
        },
        {
          id: 6,
          url: "/pets.avif",
          pets: true,
          description1: "Latest trending",
          description2: "Animal and pet items",
        },
        {
          id: 7,
          url: "/michine.webp",
          michine: true,
          description1: "Latest trending",
          description2: "Animal and pet items",
        },
      ],
      filterStatus: "auto",
    };
  },
  getters: {
    filteredSlides() {
      if (this.filterStatus === "auto") {
        return this.slides.filter((slide) => slide.auto === true);
      } else if (this.filterStatus === "clothes") {
        return this.slides.filter((slide) => slide.clothes === true);
      } else if (this.filterStatus === "home") {
        return this.slides.filter((slide) => slide.home === true);
      } else if (this.filterStatus === "computer") {
        return this.slides.filter((slide) => slide.computer === true);
      } else if (this.filterStatus === "tools") {
        return this.slides.filter((slide) => slide.tools === true);
      } else if (this.filterStatus === "sports") {
        return this.slides.filter((slide) => slide.sports === true);
      }  else if (this.filterStatus === "pets") {
        return this.slides.filter((slide) => slide.pets === true);
      } else if (this.filterStatus === "michine") {
        return this.slides.filter((slide) => slide.michine === true);
      } 
    },
  },
  actions: {
    setFilterStatus(status) {
      this.filterStatus = status;
    },
  },
});
export default useSlide;
