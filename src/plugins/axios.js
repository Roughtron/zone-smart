import axios from 'axios'
import createAuthRefreshInterceptor from 'axios-auth-refresh'
import ApiRoutes from '@/api/ApiRoutes'

const _axios = axios.create()

_axios.defaults.baseURL = process.env.VUE_APP_BASE

const refreshAuthLogic = async failedRequest => {
    const refresh = localStorage.getItem('refresh_token')

    if (refresh) {
        const { data } = await _axios.post(ApiRoutes.Auth.Refresh, { refresh })
        localStorage.setItem('api_token', data.access)
        failedRequest.response.config.headers.Authorization = `JWT ${data.access}`
    }
    return Promise.resolve()
}

createAuthRefreshInterceptor(_axios, refreshAuthLogic)

export default _axios
