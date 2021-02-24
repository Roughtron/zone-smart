import Vue from 'vue'
import moment from 'moment'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/vee-validate'
import './plugins/axios'
import Default from './layouts/Default.vue'
import Blank from './layouts/Blank.vue'
import SvgIcon from './components/Common/SvgIcon.vue'

Vue.config.productionTip = false

Vue.component('default-layout', Default)
Vue.component('blank-layout', Blank)
Vue.component('svg-icon', SvgIcon)

Vue.filter('date', value => moment(value).format('DD.MM.YYYY'))

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
