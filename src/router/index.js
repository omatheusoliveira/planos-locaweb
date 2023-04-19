import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "login",
    component: () => import(/* webpackChunkName: "login" */ '../views/Login/LoginView.vue')
  },
  {
    path: "/home",
    name: "home",
    component: () => import(/* webpackChunkName: "home" */ '../views/Home/HomeView.vue')
  },
  {
    path: "/choose-plan",
    name: "choose-plan",
    component: () => import(/* webpackChunkName: "register" */ '../views/Register/ChoosePlan.vue')
  },
  {
    path: "/register",
    name: "register",
    component: () => import(/* webpackChunkName: "register" */ '../views/Register/RegisterView.vue')
  }
];

const router = new VueRouter({
  routes,
});


router.beforeEach((to, from, next)=>{
  const token = localStorage.getItem("token");
  if ( to.name !== 'login' && to.name !== 'choose-plan' && to.name !== 'register' && !token ){
    next({
      name: 'login',
      replace: true
    })
  } else {
    next();
  }
})

export default router;
