import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePage.vue";
import UsersPage from "@/views/UsersPage.vue";
import NotFoundPage from "@/views/NotFoundPage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior: (to, from, savedPosition) => {
    if (savedPosition) {
      return savedPosition;
    }
    return { top: 0, left: 0 };
  },
  routes: [
    {
      path: "/:catchAll(.*)",
      name: "not-found",
      component: NotFoundPage,
    },
    {
      path: "/",
      name: "home",
      component: HomePage,
    },
    {
      path: "/users",
      name: "users",
      component: UsersPage,
    },
    { path: "/member", redirect: "/users" },
    {
      name: "UserSingle",
      path: "/users/:id",
      component: () => import("@/views/UserSingle.vue"),
      props: true,
    },
    {
      name: "PiniaTask",
      path: "/pinia-task",
      component: () => import("@/views/PiniaTask.vue"),
      props: true,
    },
    {
      name: "VueCrashCourse",
      path: "/vue-course",
      component: () => import("@/views/VueCrashCourse.vue"),
      props: true,
    },
  ],
});

export default router;
