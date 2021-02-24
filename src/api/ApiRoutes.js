const Base = '/v1'
const BaseAuth = `${Base}/auth`
const BaseZoneSmart = `${Base}/zonesmart`

export default {
    Auth: {
        SignIn: `${BaseAuth}/jwt/create/`,
        Refresh: `${BaseAuth}/jwt/refresh/`
    },
    Orders: {
        GetAll: payload => {
            const { limit, offset, search } = payload
            let url = `${BaseZoneSmart}/order/`

            url += limit ? `?limit=${limit}` : '?limit=10'
            url += offset ? `&offset=${offset}` : '&offset=0'
            url += search ? `&search=${search}` : ''

            return url
        }
    }
}
