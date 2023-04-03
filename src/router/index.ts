import { createRouter, createWebHistory } from "vue-router";
import Layout from "@/layout/index.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: Layout,
    },
    {
      path: "/login",
      component: () => import("@/views/login/index.vue"),
      meta: {
        title: "登录",
      },
    },
    {
      path: "/:catchAll(.*)",
      redirect: "/",
    },
  ],
});
router.beforeEach((to: any, form, next) => {
  window.document.title = to.meta.title ? to.meta.title : "VITE";
  return next();
});
export default router;
