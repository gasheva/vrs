import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "home" */ '@/views/HomeView.vue')
  },
  {
    path: '/calendar',
    name: 'calendar',
    component: () => import(/* webpackChunkName: "calendar" */ '@/views/CalendarView.vue')
  },
  {
    path: '/event/:id',
    name: 'event',
    props: true,
    component: () => import(/* webpackChunkName: "event" */ '@/views/EventView.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
