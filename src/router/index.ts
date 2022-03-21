import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    meta: {
      name: "Home",
    },
    component: () => import("../views/home/home.vue"),
  },
];

export default createRouter({
  history: createWebHashHistory(),
  routes,
});
