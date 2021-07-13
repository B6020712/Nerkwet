import Vue from 'vue'
import VueRouter from 'vue-router'
import firebase from 'firebase'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import TA from '../components/TA.vue'
import BeforeLAB from '../components/BeforeLAB.vue'
import LAB1 from '../components/LAB1.vue'
import LAB2 from '../components/LAB2.vue'
import LAB3 from '../components/LAB3.vue'
import LAB4 from '../components/LAB4.vue'
import LAB5 from '../components/LAB5.vue'
import LAB6 from '../components/LAB6.vue'
import LAB7 from '../components/LAB7.vue'
import LAB8 from '../components/LAB8.vue'
import LAB9 from '../components/LAB9.vue'

import LAB1_HW from '../components/LAB1_HW.vue'
import LAB2_HW from '../components/LAB2_HW.vue'
import LAB3_HW from '../components/LAB3_HW.vue'
import LAB4_HW from '../components/LAB4_HW.vue'
import LAB5_HW from '../components/LAB5_HW.vue'
import LAB6_HW from '../components/LAB6_HW.vue'
import LAB7_HW from '../components/LAB7_HW.vue'
import LAB8_HW from '../components/LAB8_HW.vue'
import LAB9_HW from '../components/LAB9_HW.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', name: 'Login', component: Login },
  { path: '/home', name: 'Home', component: Home , meta: {requireAuth: true} },
  { path: '/beforelab', component: BeforeLAB , meta: {requireAuth: true} },
  
  { path: '/ta', name: 'TA', component: TA , meta: {requireAuth: true} },
  
  { path: '/lab1', component: LAB1 , meta: {requireAuth: true} }, 
  { path: '/lab2', name: 'LAB2', component: LAB2 , meta: {requireAuth: true} }, 
  { path: '/lab3', component: LAB3 , meta: {requireAuth: true} }, 
  { path: '/lab4', component: LAB4 , meta: {requireAuth: true} }, 
  { path: '/lab5', component: LAB5 , meta: {requireAuth: true} }, 
  { path: '/lab6', component: LAB6 , meta: {requireAuth: true} }, 
  { path: '/lab7', component: LAB7 , meta: {requireAuth: true} }, 
  { path: '/lab8', component: LAB8 , meta: {requireAuth: true} }, 
  { path: '/lab9', component: LAB9 , meta: {requireAuth: true} }, 

  { path: '/lab1_hw', component: LAB1_HW , meta: {requireAuth: true} }, 
  { path: '/lab2_hw', component: LAB2_HW , meta: {requireAuth: true} }, 
  { path: '/lab3_hw', component: LAB3_HW , meta: {requireAuth: true} }, 
  { path: '/lab4_hw', component: LAB4_HW , meta: {requireAuth: true} }, 
  { path: '/lab5_hw', component: LAB5_HW , meta: {requireAuth: true} }, 
  { path: '/lab6_hw', component: LAB6_HW , meta: {requireAuth: true} }, 
  { path: '/lab7_hw', component: LAB7_HW , meta: {requireAuth: true} }, 
  { path: '/lab8_hw', component: LAB8_HW , meta: {requireAuth: true} }, 
  { path: '/lab9_hw', component: LAB9_HW , meta: {requireAuth: true} }, 
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


router.beforeEach((to, from, next) => {
  const requireAuth = to.matched.some(record => record.meta.requireAuth);
  const isAuthenticated = firebase.auth().currentUser;
  if(requireAuth && !isAuthenticated){
    // next("/");
    next({ name: 'Login' })
    location.reload();
  } else {
    next();
  }
})

export default router