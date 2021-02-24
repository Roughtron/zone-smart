import axios from '@/plugins/axios'
import ApiRoutes from '@/api/ApiRoutes'

export default {
    async getAll ({ commit }, payload) {
        const { data } = await axios.get(ApiRoutes.Orders.GetAll(payload))
        return data
    }
}
