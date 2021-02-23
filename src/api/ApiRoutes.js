const Base = '/v1'
const BaseAuth = `${Base}/auth`
const BaseZoneSmart = `${Base}/zonesmart`

export default {
    Auth: {
        SignIn: `${BaseAuth}/jwt/create/`,
        Refresh: `${BaseAuth}/jwt/refresh/`
    },
    Orders: {
        GetAll: `${BaseZoneSmart}/order/`
    }
}
