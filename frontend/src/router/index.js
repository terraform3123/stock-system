import ListProductView from '@/views/produtos/ListProductView.vue'
import { createRouter, createWebHistory } from 'vue-router'
import AddProductView from '../views/produtos/AddProductView.vue'

const routes = [
    {
        path: '/produto/novo',
        name: 'AddProductView',
        component: AddProductView
    },
    {
        path: '/',
        name: 'ListProductView',
        component: ListProductView
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
