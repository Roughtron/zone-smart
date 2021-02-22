import Vue from 'vue'
import { extend, localize, ValidationObserver, ValidationProvider } from 'vee-validate'

import { email, required, regex } from 'vee-validate/dist/rules'

extend('required', required)
extend('regex', regex)
extend('email', email)

extend('phoneOrEmail', value => {
    const regex = /(^8|7|\+7)((\d{10})|(\s\(\d{3}\)\s\d{3}\s\d{2}\s\d{2}))/
    return email.validate(value) || regex.test(value)
})

localize({
    en: {
        messages: {
            regex: fieldName => `Поле <strong>${fieldName}</strong> имеет неверный формат.`,
            required: fieldName => `Поле <strong>${fieldName}</strong> является обязательным для заполнения.`,
            email: () => 'Неверный email.',
            phoneOrEmail: () => 'Непохоже на email или телефон'
        }
    }
})

Vue.component('ValidationProvider', ValidationProvider)
Vue.component('ValidationObserver', ValidationObserver)
