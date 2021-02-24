import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import profile from './modules/profile'
import orders from './modules/orders'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
    },
    mutations: {
    },
    actions: {
    },
    modules: {
        profile,
        orders
    },
    plugins: [createPersistedState()]
})
