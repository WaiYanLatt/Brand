<script>
import useCategories from "@/stores/Categories";

export default {
  data() {
    return {
      useCategories: useCategories(),
    };
  },
};
</script>

<template>
  <div>
    <div v-show="useCategories.itemsName === 'Smart phones'">
      <ul class="lg:mt-5 mt-2 *:mt-3 grid lg:grid-cols-1   md:grid-cols-1 grid-cols-2">
        <li>
          <input
            type="checkbox"
            class="cursor-pointer"
            v-model="useCategories.Apple"
            @change="useCategories.setBrandFilter('Apple')"
          />
          <span class="font-semibold ml-2">Apple</span>
        </li>
        <li>
          <input
            type="checkbox"
            class="cursor-pointer"
            v-model="useCategories.Samsung"
            @change="useCategories.setBrandFilter('Samsung')"
          />
          <span class="font-semibold ml-2">Samsung</span>
        </li>
        <li>
          <input
            type="checkbox"
            class="cursor-pointer"
            v-model="useCategories.Huawei"
            @change="useCategories.setBrandFilter('Huawei')"
          />
          <span class="font-semibold ml-2">Huawei</span>
        </li>
        <li>
          <input
            type="checkbox"
            class="cursor-pointer"
            v-model="useCategories.OPPO"
            @change="useCategories.setBrandFilter('OPPO')"
          />
          <span class="font-semibold ml-2">OPPO</span>
        </li>
      </ul>
    </div>
    <div v-show="useCategories.itemsName === 'Laptops'">
      <ul class="lg:mt-5 mt-2 *:mt-3 grid lg:grid-cols-1  md:grid-cols-1 grid-cols-2">
        <li>
          <input
            type="checkbox"
            class="cursor-pointer"
            v-model="useCategories.Microsoft"
            @change="useCategories.setBrandFilter('Microsoft')"
          />
          <span class="font-semibold ml-2">Microsoft Surface</span>
        </li>
        <li>
          <input
            type="checkbox"
            class="cursor-pointer"
            v-model="useCategories.Infinix"
            @change="useCategories.setBrandFilter('Infinix')"
          />
          <span class="font-semibold ml-2">Infinix</span>
        </li>
        <li>
          <input
            type="checkbox"
            class="cursor-pointer"
            v-model="useCategories.Apple"
            @change="useCategories.setBrandFilter('Apple')"
          />
          <span class="font-semibold ml-2">Apple</span>
        </li>
        <li>
          <input
            type="checkbox"
            class="cursor-pointer"
            v-model="useCategories.Samsung"
            @change="useCategories.setBrandFilter('Samsung')"
          />
          <span class="font-semibold ml-2">Samsung</span>
        </li>
        <li>
          <input
            type="checkbox"
            class="cursor-pointer"
            v-model="useCategories.HP"
            @change="useCategories.setBrandFilter('HP')"
          />
          <span class="font-semibold ml-2">HP Pavilion</span>
        </li>
      </ul>
    </div>
    <div v-show="useCategories.itemsName === 'Home-decoration'">
      <ul class="lg:mt-5 mt-2 *:mt-3 grid lg:grid-cols-1  md:grid-cols-1 grid-cols-2">
        <li>
          <input
            type="checkbox"
            class="cursor-pointer"
            v-model="useCategories.Golden"
            @change="useCategories.setBrandFilter('Golden')"
          />
          <span class="font-semibold ml-2">Golden</span>
        </li>
        <li>
          <input
            type="checkbox"
            class="cursor-pointer"
            v-model="useCategories.luxury"
            @change="useCategories.setBrandFilter('luxury')"
          />
          <span class="font-semibold ml-2">luxury palace</span>
        </li>
        <li>
          <input
            type="checkbox"
            class="cursor-pointer"
            v-model="useCategories.LED"
            @change="useCategories.setBrandFilter('LED')"
          />
          <span class="font-semibold ml-2">LED Lights</span>
        </li>
        <li>
          <input
            type="checkbox"
            class="cursor-pointer"
            v-model="useCategories.Flying"
            @change="useCategories.setBrandFilter('Flying')"
          />
          <span class="font-semibold ml-2">Flying Wooden</span>
        </li>
        <li>
          <input
            type="checkbox"
            class="cursor-pointer"
            v-model="useCategories.Boho"
            @change="useCategories.setBrandFilter('Boho')"
          />
          <span class="font-semibold ml-2">Boho Decor</span>
        </li>
      </ul>
    </div>
    <div v-show="useCategories.itemsName === 'Womens-dresses'">
      <ul class="lg:mt-5 mt-2 *:mt-3 grid lg:grid-cols-1  md:grid-cols-1 grid-cols-2">
        <li>
          <input
            type="checkbox"
            class="cursor-pointer"
            v-model="useCategories.IELGY"
            @change="useCategories.setBrandFilter('IELGY')"
          />
          <span class="font-semibold ml-2">IELGY</span>
        </li>
        <li>
          <input
            type="checkbox"
            class="cursor-pointer"
            v-model="useCategories.Ghazi"
            @change="useCategories.setBrandFilter('Ghazi')"
          />
          <span class="font-semibold ml-2">Ghazi Fabric</span>
        </li>
        <li>
          <input
            type="checkbox"
            class="cursor-pointer"
            v-model="useCategories.Digital"
            @change="useCategories.setBrandFilter('Digital')"
          />
          <span class="font-semibold ml-2">Digital Printed</span>
        </li>
        <li>
          <input
            type="checkbox"
            class="cursor-pointer"
            v-model="useCategories.RED"
            @change="useCategories.setBrandFilter('RED')"
          />
          <span class="font-semibold ml-2">RED MICKY MOUSE..</span>
        </li>
      </ul>
    </div>
    <div v-show="useCategories.itemsName === 'Womens-shoes'">
      <ul class="lg:mt-5 mt-2 *:mt-3 grid lg:grid-cols-1  md:grid-cols-1 grid-cols-2">
        <li>
          <input type="checkbox" class="cursor-pointer" 
          v-model="useCategories.IELGYF"
          @change="useCategories.setBrandFilter('IELGYF')"
          />
          <span class="font-semibold ml-2">IELGY fashion</span>
        </li>
        <li>
          <input type="checkbox" class="cursor-pointer"
          v-model="useCategories.Maasai"
          @change="useCategories.setBrandFilter('Maasai')"
          />
          <span class="font-semibold ml-2">Maasai Sandals</span>
        </li>
        <li>
          <input type="checkbox" class="cursor-pointer" 
          v-model="useCategories.Sandals"
          @change="useCategories.setBrandFilter('Sandals')"
          />
          <span class="font-semibold ml-2">Sandals Flip Flops</span>
        </li>
        <li>
          <input type="checkbox" class="cursor-pointer" 
          v-model="useCategories.Synthetic"
          @change="useCategories.setBrandFilter('Synthetic')"
          />
          <span class="font-semibold ml-2">Synthetic Leather</span>
        </li>
        <li>
          <input type="checkbox" class="cursor-pointer" 
          v-model="useCategories.Arrivals"
          @change="useCategories.setBrandFilter('Arrivals')"
          />
          <span class="font-semibold ml-2"> Arrivals Genuine </span>
        </li>
      </ul>
    </div>
    <div v-show="useCategories.itemsName === 'Mens-shirts'">
      <ul class="lg:mt-5 mt-2 *:mt-3 grid lg:grid-cols-1  md:grid-cols-1 grid-cols-2">
        <li>
          <input type="checkbox" class="cursor-pointer" 
          v-model="useCategories.The"
          @change="useCategories.setBrandFilter('The')"
          />
          <span class="font-semibold ml-2">The Warehouse</span>
        </li>
        <li>
          <input type="checkbox" class="cursor-pointer" 
          v-model="useCategories.Vintage"
          @change="useCategories.setBrandFilter('Vintage')"
          />
          <span class="font-semibold ml-2">Vintage Apparel</span>
        </li>
        <li>
          <input type="checkbox" class="cursor-pointer" 
          v-model="useCategories.Free"
          @change="useCategories.setBrandFilter('Free')"
          />
          <span class="font-semibold ml-2">FREE FIRE</span>
        </li>
      </ul>
    </div>
    <div v-show="useCategories.itemsName === 'Mens-shoes'">
      <ul class="lg:mt-5 mt-2 *:mt-3 grid lg:grid-cols-1  md:grid-cols-1 grid-cols-2">
        <li>
          <input type="checkbox" class="cursor-pointer" 
          v-model="useCategories.Sneakers"
          @change="useCategories.setBrandFilter('Sneakers')"
          />
          <span class="font-semibold ml-2">Sneakers</span>
        </li>
        <li>
          <input type="checkbox" class="cursor-pointer" 
          v-model="useCategories.The"
          @change="useCategories.setBrandFilter('The')"
          />
          <span class="font-semibold ml-2">The Warehouse</span>
        </li>
        <li>
          <input type="checkbox" class="cursor-pointer" 
          v-model="useCategories.Rubber"
          @change="useCategories.setBrandFilter('Rubber')"
          />
          <span class="font-semibold ml-2">Rubber</span>
        </li>
      </ul>
    </div>
    <div v-show="useCategories.itemsName === 'Mens-watches'">
      <ul class="lg:mt-5 mt-2 *:mt-3 grid lg:grid-cols-1  md:grid-cols-1 grid-cols-2">
        <li>
          <input type="checkbox" class="cursor-pointer" 
          v-model="useCategories.Stainless"
          @change="useCategories.setBrandFilter('Stainless')"
          />
          <span class="font-semibold ml-2">Stainless</span>
        </li>
        <li>
          <input type="checkbox" class="cursor-pointer" 
          v-model="useCategories.Strap"
          @change="useCategories.setBrandFilter('Strap')"
          />
          <span class="font-semibold ml-2">Strap Skeleton</span>
        </li>
        <li>
          <input type="checkbox" class="cursor-pointer" 
          v-model="useCategories.SKMEI"
          @change="useCategories.setBrandFilter('SKMEI')"
          />
          <span class="font-semibold ml-2">SKMEI 9117</span>
        </li>
        <li>
          <input type="checkbox" class="cursor-pointer" 
          v-model="useCategories.Naviforce"
          @change="useCategories.setBrandFilter('Naviforce')"
          />
          <span class="font-semibold ml-2">Naviforce</span>
        </li>
      </ul>
    </div>
    <div v-show="useCategories.itemsName === 'Womens-watches'">
      <ul class="lg:mt-5 mt-2 *:mt-3 grid lg:grid-cols-1  md:grid-cols-1 grid-cols-2">
        <li>
          <input type="checkbox" class="cursor-pointer"
          v-model="useCategories.Bracelet"
          @change="useCategories.setBrandFilter('Bracelet')"
          />
          <span class="font-semibold ml-2">Bracelet</span>
        </li>
        <li>
          <input type="checkbox" class="cursor-pointer" 
          v-model="useCategories.Watch"
          @change="useCategories.setBrandFilter('Watch')"
          />
          <span class="font-semibold ml-2">Watch Pearls</span>
        </li>
        <li>
          <input type="checkbox" class="cursor-pointer" 
          v-model="useCategories.Luxury"
          @change="useCategories.setBrandFilter('Luxury')"
          />
          <span class="font-semibold ml-2">Luxury Digital</span>
        </li>
        <li>
          <input type="checkbox" class="cursor-pointer" 
          v-model="useCategories.Eastern"
          @change="useCategories.setBrandFilter('Eastern')"
          />
          <span class="font-semibold ml-2">Eastern Watches</span>
        </li>
      </ul>
    </div>
    <div v-show="useCategories.itemsName === 'Womens-bags'">
      <ul class="lg:mt-5 mt-2 *:mt-3 grid lg:grid-cols-1  md:grid-cols-1 grid-cols-2">
        <li>
          <input type="checkbox" class="cursor-pointer" 
          v-model="useCategories.Steal"
          @change="useCategories.setBrandFilter('Steal')"
          />
          <span class="font-semibold ml-2">Steal Frame</span>
        </li>
        <li>
          <input type="checkbox" class="cursor-pointer" 
          v-model="useCategories.Copenhagen"
          @change="useCategories.setBrandFilter('Copenhagen')"
          />
          <span class="font-semibold ml-2">Copenhagen Luxe</span>
        </li>
        <li>
          <input type="checkbox" class="cursor-pointer" 
          v-model="useCategories.Bracelet"
          @change="useCategories.setBrandFilter('Bracelet')"
          />
          <span class="font-semibold ml-2">Bracelet</span>
        </li>
        <li>
          <input type="checkbox" class="cursor-pointer" 
          v-model="useCategories.LouisWill"
          @change="useCategories.setBrandFilter('LouisWill')"
          />
          <span class="font-semibold ml-2">LouisWill</span>
        </li>
      </ul>
    </div>
    <div v-show="useCategories.itemsName === 'Womens-jewellery'">
      <ul class="lg:mt-5 mt-2 *:mt-3 grid lg:grid-cols-1  md:grid-cols-1 grid-cols-2">
        <li>
          <input type="checkbox" class="cursor-pointer" 
          v-model="useCategories.Cuff"
          @change="useCategories.setBrandFilter('Cuff')"
          />
          <span class="font-semibold ml-2">Cuff Butterfly</span>
        </li>
        <li>
          <input type="checkbox" class="cursor-pointer" 
          v-model="useCategories.Fashion"
          @change="useCategories.setBrandFilter('Fashion')"
          />
          <span class="font-semibold ml-2">Fashion Jewellery</span>
        </li>
        <li>
          <input type="checkbox" class="cursor-pointer" 
          v-model="useCategories.Copenhagen"
          @change="useCategories.setBrandFilter('Copenhagen')"
          />
          <span class="font-semibold ml-2">Copenhagen Luxe</span>
        </li>
        <li>
          <input type="checkbox" class="cursor-pointer" 
          v-model="useCategories.Darojay"
          @change="useCategories.setBrandFilter('Darojay')"
          />
          <span class="font-semibold ml-2">Darojay</span>
        </li>
      </ul>
    </div>
    <div v-show="useCategories.itemsName === 'Lighting'">
      <ul class="lg:mt-5 mt-2 *:mt-3 grid lg:grid-cols-1  md:grid-cols-1 grid-cols-2">
        <li>
          <input type="checkbox" class="cursor-pointer" 
          v-model="useCategories.YIOSI"
          @change="useCategories.setBrandFilter('YIOSI')"
          />
          <span class="font-semibold ml-2">YIOSI</span>
        </li>
        <li>
          <input type="checkbox" class="cursor-pointer" 
          v-model="useCategories.Ifei"
          @change="useCategories.setBrandFilter('Ifei')"
          />
          <span class="font-semibold ml-2">Ifei Home</span>
        </li>
        <li>
          <input type="checkbox" class="cursor-pointer" 
          v-model="useCategories.DADAWU"
          @change="useCategories.setBrandFilter('DADAWU')"
          />
          <span class="font-semibold ml-2">DADAWU</span>
        </li>
        <li>
          <input type="checkbox" class="cursor-pointer" 
          v-model="useCategories.lighting"
          @change="useCategories.setBrandFilter('lighting')"
          />
          <span class="font-semibold ml-2">lightingbrilliance</span>
        </li>
      </ul>
    </div>
  </div>
</template>
