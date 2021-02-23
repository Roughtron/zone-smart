import Vue from 'vue'
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

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
