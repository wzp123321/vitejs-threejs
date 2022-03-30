import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    meta: {
      name: "Home",
    },
    component: () => import("../views/home/home.vue"),
  },
  {
    path: "/threeChart",
    meta: {
      name: "ThreeChart",
    },
    component: () => import("../views/three-chart/three-chart.vue"),
  },
  {
    path: "/demo",
    meta: {
      name: "Demo",
    },
    component: () => import("../views/demo/demo.vue"),
  },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
