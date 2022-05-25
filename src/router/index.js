import { createRouter, createWebHashHistory } from "vue-router";
import shopPath from "../modules/shop/router";

const routes = [
  {
    path: "/",
    ...shopPath,
  },
];

const router = createRouter({
  routes,
  history: createWebHashHistory(),
});

export default router;
