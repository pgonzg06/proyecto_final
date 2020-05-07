import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Registro from '../views/Registro';
import Hola from '../views/Hola';

Vue.use(VueRouter);

export default  new VueRouter({
  //var router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home,
    },
    {
      path: '/registro',
      name: 'registro',
      component: Registro,
    },
    {
      path: '/hola',
      name: 'hola',
      component: Hola,
    }

  ]
}); 
