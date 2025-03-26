import { createWebHistory, createRouter } from "vue-router";
import About from "@/view/About.vue";
import Login from "@/view/Login.vue";
import PageNotFound from "@/view/PageNotFound.vue";
import ProductDetail from "@/components/ProductDetail.vue";
import ProductManager from "@/components/ProductManager.vue";
const history = createWebHistory();
const routes = [
  {
    path: "/product-detail/:productId",
    name: "ProductDetail",
    component: ProductDetail,
  },
  {
    path: "/product-manager",
    name: "ProductManager",
    component: ProductManager,
  },
  {
    path: "/:notMatch(.*)",
    name: "NotFound",
    component: PageNotFound,
  },
  {
    path: "/",
    // redirect: '/login'
    redirect: { name: "Login" },
  },
  {
    path: "/aboutus",
    name: "AboutUs",
    component: About,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
];
const router = createRouter({
  history,
  routes,
  // linkActiveClass: 'text-yellow-600',
  // linkExactActiveClass: 'text-purple-600'
});

router.beforeEach((to, from) => {
  //implement authentication & authorization
  const isAuthen = false;

  if (!isAuthen && to.name !== "Login") {
    return { name: "Login" };
  }
});

export default router;
