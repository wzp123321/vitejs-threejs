import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

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
];

export default createRouter({
  history: createWebHashHistory(),
  routes,
});
