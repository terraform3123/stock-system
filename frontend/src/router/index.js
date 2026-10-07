import DashboardView from '@/views/DashboardView.vue'
import { createRouter, createWebHistory } from 'vue-router'
import ProdutoFormView from '../views/produtos/ProdutoFormView.vue'

const routes = [
    {
        path: '/produto/novo',
        name: 'ProdutoFormView',
        component: ProdutoFormView
    },
    {
        path: '/',
        component: DashboardView
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
