import { createRouter, createWebHistory } from "vue-router";
import MainLayout from "../layouts/MainLayout.vue";
import Home from "../views/Home.vue";
import Products from "../views/Product.vue";
import Contact from "../views/Contact.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "mainLayout",
      component: MainLayout,
      children: [
        {
          path: "/",
          component: Home,
        },
        {
          path: "/Product",
          component: Products,
        },
        {
          path: "Contact",
          component: Contact,
        },
      ],
    },
  ],
});
export default router;
