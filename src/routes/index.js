import VueRouter from "vue-router";
import routes from "./routes";
import { isAuthenticated } from "@/services/auth";

const router = new VueRouter({
  routes,
  linkActiveClass: "active",
  mode: "history",
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (!isAuthenticated()) {
      next({ name: "Login" });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
