import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: "/",
    name: "login",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/login/LoginView.vue"),
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
