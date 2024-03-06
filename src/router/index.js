import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/", 
    name: "Home", 
    component: () => import('@/views/HomeView.vue'), 
  },
  {
    path: "/category", 
    name: "Category", 
    component: () => import('@/views/CategoriesPage.vue'), 
  },
  {
    path: "/single-page/:id", 
    name: "Single-page", 
    component: () => import('@/views/SinglePage.vue'), 
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

export default router;


