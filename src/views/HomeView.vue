<script>
import useSlide from "@/stores/slides";
import SlideCard from "@/components/SlideCard.vue";
import Recommended from "@/components/Recommended.vue";
import Deal from '@/components/Deal.vue';
import ShowHome from "@/components/ShowHome.vue";
import Electonic from "@/components/Electonic.vue";
import Service from "@/components/Service.vue";

export default {
  data() {
    return {
      useSlide: useSlide(),
    };
  },
  components: {
    SlideCard: SlideCard,
    Recommended: Recommended,
    Deal : Deal,
    ShowHome : ShowHome,
    Electonic : Electonic,
    Service : Service,
},
};
</script>

<template>
  <div class="container mx-auto lg:px-16 px-5  mt-36 lg:mb-32 mb-10">
    <div class="w-full bg-white lg:p-5 p-3 rounded-xl shadow-lg border" id="slide">
      <div class="flex lg:flex-row flex-col">
        <div class="lg:w-56 w-full hidden lg:block">
          <ul class="*:font-semibold *:p-2 *:cursor-pointer *:rounded-md">
            <li
              class="hover:bg-[#E5F1FF] duration-500 text-gray-400"
              :class="{
                'bg-[#E5F1FF] !text-black': useSlide.filterStatus === 'auto',
              }"
              @click="useSlide.setFilterStatus('auto')"
            >
              Automobiles
            </li>
            <li
              class="hover:bg-[#E5F1FF] duration-500 text-gray-400"
              :class="{
                'bg-[#E5F1FF] !text-black': useSlide.filterStatus === 'clothes',
              }"
              @click="useSlide.setFilterStatus('clothes')"
            >
              Clothes and wear
            </li>
            <li
              class="hover:bg-[#E5F1FF] duration-500 text-gray-400"
              :class="{
                'bg-[#E5F1FF] !text-black': useSlide.filterStatus === 'home',
              }"
              @click="useSlide.setFilterStatus('home')"
            >
              Home interiors
            </li>
            <li
              class="hover:bg-[#E5F1FF] duration-500 text-gray-400"
              :class="{
                'bg-[#E5F1FF] !text-black':
                  useSlide.filterStatus === 'computer',
              }"
              @click="useSlide.setFilterStatus('computer')"
            >
              Computer and teach
            </li>
            <li
              class="hover:bg-[#E5F1FF] duration-500 text-gray-400"
              :class="{
                'bg-[#E5F1FF] !text-black': useSlide.filterStatus === 'tools',
              }"
              @click="useSlide.setFilterStatus('tools')"
            >
              Tools , equipments
            </li>
            <li
              class="hover:bg-[#E5F1FF] duration-500 text-gray-400"
              :class="{
                'bg-[#E5F1FF] !text-black': useSlide.filterStatus === 'sports',
              }"
              @click="useSlide.setFilterStatus('sports')"
            >
              Sports and outdoor
            </li>
            <li
              class="hover:bg-[#E5F1FF] duration-500 text-gray-400"
              :class="{
                'bg-[#E5F1FF] !text-black': useSlide.filterStatus === 'pets',
              }"
              @click="useSlide.setFilterStatus('pets')"
            >
              Animal and pets
            </li>
            <li
              class="hover:bg-[#E5F1FF] duration-500 text-gray-400"
              :class="{
                'bg-[#E5F1FF] !text-black': useSlide.filterStatus === 'michine',
              }"
              @click="useSlide.setFilterStatus('michine')"
            >
              Michinery tools
            </li>
          </ul>
        </div>
        <div class="lg:w-[600px] w-full lg:ml-5 mt-5 lg:mt-0 lg:block hidden">
          <SlideCard
            v-for="slide in useSlide.filteredSlides"
            :slide="slide"
          ></SlideCard>
        </div>
        <div class="lg:w-64 w-full lg:ml-5">
          <div class="bg-[#E5F1FF]  p-2  rounded-md">
            <div class="flex items-center">
              <div
                class="bg-gray-300 w-12 h-12 rounded-full flex justify-center items-center"
              >
                <i class="fa-solid fa-user text-white"></i>
              </div>
              <div class="*:font-semibold ml-3">
                <h1>Hi, User</h1>
                <h1>Let's get stated</h1>
              </div>
            </div>
            <button class="font-semibold bg-blue-500 py-2 w-full mt-2 text-white rounded-lg">JOIN NOW</button>
            <button class="font-semibold bg-white py-2 w-full mt-2 text-blue-500 rounded-lg">LOG IN</button>
          </div>
          <div class="bg-[#F38332] *:font-semibold text-white  px-2 py-3 mt-2 rounded-md">
            <h1 class="text-xl">Get US $10 off</h1>
            <p class="text-md">with a new supplier</p>
          </div>
          <div class="bg-[#55BDC3] *:font-semibold text-white  px-2 py-3 mt-2 rounded-md">
            <h1 class="text-xl">Send quotes with</h1>
            <p class="text-md">supplier preferences</p>
          </div>
        </div>
      </div>
    </div>
    <Deal id="deal"/>
    <ShowHome id="gift" class="lg:block hidden"/>
    <Electonic class="lg:block hidden"/>
    <Recommended id="menu"/>
    <Service id="service"/>
  </div>
</template>
