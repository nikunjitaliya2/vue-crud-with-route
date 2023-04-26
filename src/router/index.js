import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PostView from '../views/PostView.vue'
import Contact from '../views/Contact.vue'
import AboutView from '../views/AboutView.vue'
import PostDetails from '../views/PostDetails.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/contact',
    name: 'contact',
    component: Contact
  },
  {
    path: '/post',
    name: 'post',
    component: PostView
  },

  // dynamic route
  {
    path: '/post/:id',
    name: 'postdetail',
    component: PostDetails
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes
})

export default router
