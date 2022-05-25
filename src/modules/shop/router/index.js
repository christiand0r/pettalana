// Children routes
const children = [
  {
    path: "",
    name: "dashboard",
    component: () => import("@/modules/shop/views/DashboardView.vue"),
  },
  {
    path: "categories/:category",
    name: "categories",
    component: () => import("@/modules/shop/views/CategoryView.vue"),
    props: (route) => ({
      category: route.params.category,
    }),
  },
];

export default {
  name: "home",
  component: () => import("@/modules/shop/layouts/ShopLayout.vue"),
  children,
};
