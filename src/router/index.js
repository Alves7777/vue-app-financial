import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CategoryView from '../views/CategoryView.vue'
import LoginView from '../views/LoginView.vue'
import AboutView from '../views/AboutView.vue'

const routes = [
    { path: '/', name: 'home', component: HomeView },
    { path: '/category', name: 'category', component: CategoryView },
    { path: '/login', name: 'login', component: LoginView },
    { path: '/about', name: 'about', component: AboutView },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
