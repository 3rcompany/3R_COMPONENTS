import { createRouter, createWebHistory } from "vue-router";
import Home from "../src/views/Home.vue";

const routes = [
  { path: "/", component: Home },
];

const history = createWebHistory();

const router = createRouter({
  history,
  routes,
});

export default router;