import axios from '@/plugins/axios'
import ApiRoutes from '@/api/ApiRoutes'

export default {
    async signIn ({ commit }, payload) {
        const { data } = await axios.post(ApiRoutes.Auth.SignIn, payload)
        localStorage.setItem('api_token', data.access)
        localStorage.setItem('refresh_token', data.refresh)
        commit('SET_USER', data)
        return data
    },

    logout ({ commit }) {
        commit('SET_USER', null)
        localStorage.removeItem('api_token')
        localStorage.removeItem('refresh_token')
    }
}
