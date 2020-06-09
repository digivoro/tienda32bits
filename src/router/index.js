import Vue from "vue";
import VueRouter from "vue-router";
import Inicio from "../views/Inicio.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "inicio",
    component: Inicio
  },
  {
    path: "*",
    name: "NotFound",
    component: () =>
      import(/*webpackChunkName: "NotFound"*/ "../views/NotFound.vue")
  },
  {
    path: "/busqueda",
    component: () =>
      import(/*webpackChunkName: "Busqueda"*/ "../views/Busqueda.vue")
  },
  {
    path: "/ventas",
    component: () =>
      import(/*webpackChunkName: "Ventas"*/ "../views/Ventas.vue")
  },
  {
    path: "/total",
    component: () => import(/*webpackChunkName: "Total"*/ "../views/Total.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
