import { createRouter, createWebHistory } from 'vue-router';
import HomeView from './components/HomeView.vue';
import FactView from './components/factView.vue';
import ImageView from './components/ImageView.vue';


const routes = [
  {path: "/", component: HomeView},
  {path: "/fact", component: FactView},
  {path: "/image", component: ImageView}
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
