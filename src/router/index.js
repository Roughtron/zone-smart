import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/sign-in',
        name: 'sign.in',
        component: () => import(/* webpackChunkName: "auth" */ '../views/SignIn.vue'),
        meta: {
            layout: 'blank'
        }
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
