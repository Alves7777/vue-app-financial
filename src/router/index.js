import { createRouter, createWebHistory } from 'vue-router'
import About from '../views/About.vue'
import Category from '../views/Category.vue'

const routes = [
    {
        path: '/about',
        name: 'About',
        component: About,
    },
    {
        path: '/category',
        name: 'Category',
        component: Category,
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
