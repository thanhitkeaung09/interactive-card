import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '../views/HomeView.vue'
import FormComView from "../views/FormComView.vue"
import DetailView from "../views/DetailView.vue"
import TestView from "../views/TestView.vue"


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'form',
      component: FormComView
    },
    {
      path: '/detail',
      name: 'detail',
      component: DetailView
    },
    {
      path: '/test',
      name: 'test',
      component: TestView
    },

  ]
})

export default router
