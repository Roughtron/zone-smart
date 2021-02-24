<template lang="pug">
  .sign
    validation-observer(
      v-slot="{ handleSubmit }"
    )
        the-form.sign__form(
            @submit="handleSubmit(onSubmit)"
        )
            fieldset.form-fields-group
                legend.form-fields-group__title Вход

                ul.form-fields-list
                    li.form-fields-list__item
                        validation-provider(
                            rules="required|phoneOrEmail"
                            name="E-mail или телефон"
                            v-slot="{ errors, classes, ariaMsg, ariaInput }"
                        )
                            field-composition(
                                name="email"
                                label="E-mail или телефон"
                                hide-label
                                :classes="classes"
                                :ariaMsg="ariaMsg"
                                :errors="errors"
                            )
                                input-field(
                                    name="email"
                                    id="email"
                                    placeholder="E-mail или телефон"
                                    v-model="form.email"
                                    v-bind="ariaInput"
                                    :class="classes"
                                )

                    li.form-fields-list__item
                        validation-provider(
                            rules="required"
                            name="Пароль"
                            v-slot="{ errors, classes, ariaMsg, ariaInput }"
                        )
                            field-composition(
                                name="password"
                                label="Пароль"
                                hide-label
                                :classes="classes"
                                :ariaMsg="ariaMsg"
                                :errors="errors"
                            )
                                input-field(
                                    name="password"
                                    id="password"
                                    placeholder="Пароль"
                                    :type="showPassword ? 'text' : 'password'"
                                    v-model="form.password"
                                    v-bind="ariaInput"
                                    :class="classes"
                                )
                                    button.form-field__button(
                                        type="button"
                                        @click="showPassword = !showPassword"
                                    )
                                        svg-icon.form-field__icon(
                                            :name="showPassword ? 'eye-cross' : 'eye'"
                                            :title="showPassword ? 'Спрятать пароль' : 'Показать пароль'"
                                        )

                    li.form-fields-list__item
                        btn.button_type_block.button_viewtype_primary(
                            type="submit"
                            :class="{ 'is-load': isLoading }"
                        ) Войти
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
import TheForm from '@/components/Interface/Form.vue'
import FieldComposition from '@/components/Interface/FieldComposition.vue'
import InputField from '@/components/Interface/Input.vue'
import Btn from '@/components/Interface/Button.vue'

const { mapActions } = createNamespacedHelpers('profile')

export default {
    data () {
        return {
            form: {
                email: '',
                password: ''
            },
            showPassword: false,
            isLoading: false
        }
    },

    components: {
        TheForm,
        FieldComposition,
        InputField,
        Btn
    },

    methods: {
        ...mapActions(['signIn']),

        async onSubmit () {
            try {
                this.isLoading = true
                await this.signIn({ ...this.form })
                this.$router.push({ name: 'Home' })
            } catch (e) {
                console.log(e)
            } finally {
                this.isLoading = false
            }
        }
    }
}
</script>

<style lang="sass" scoped>
.sign
    width: 100%
    max-width: 407px
    padding: 40px 50px
    box-shadow: 0px 14px 64px 0px rgba(#303840, 16%)
    box-sizing: border-box
</style>
