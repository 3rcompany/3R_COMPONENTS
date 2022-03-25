import { createRouter, createWebHistory } from "vue-router";
import Home from "../src/views/Home.vue";
import Rockola from "../src/views/Rockola.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/rockola", component: Rockola },
];

const history = createWebHistory();

const router = createRouter({
  history,
  routes,
});

export default router;