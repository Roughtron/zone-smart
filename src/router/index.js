import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'

Vue.use(VueRouter)

const unauthorized = (to, from, next) => {
    if (!localStorage.getItem('api_token')) {
        next()
        return
    }
    next({ name: 'Home' })
}

const authorized = (to, from, next) => {
    if (localStorage.getItem('api_token')) {
        next()
        return
    }
    next({ name: 'sign.in' })
}

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
        beforeEnter: authorized
    },
    {
        path: '/sign-in',
        name: 'sign.in',
        component: () => import(/* webpackChunkName: "auth" */ '../views/SignIn.vue'),
        meta: {
            layout: 'blank'
        },
        beforeEnter: unauthorized
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
