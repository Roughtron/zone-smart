<template lang="pug">
    the-form(
        @submit="onSubmit"
    )
        fieldset.form-fields-group
            legend.form-fields-group.visually-hidden Поиск

            ul.form-fields-list.form-fields-list_viewtype_horizontal
                li.form-fields-list__item.search__submit
                    btn.button_viewtype_secondary.button_type_block(
                        type="submit"
                        :disabled="disabled"
                    ) Фильтр

                li.form-fields-list__item.search__input
                    field-composition(
                        name="search"
                        label="Поиск"
                        hide-label
                    )
                        input-field(
                            name="search"
                            id="search"
                            placeholder="Поиск"
                            v-model="search"
                            :disabled="disabled"
                        )
                            svg-icon.form-field__icon(
                                name="search"
                            )

</template>

<script>
import TheForm from '@/components/Interface/Form.vue'
import Btn from '@/components/Interface/Button.vue'
import FieldComposition from '@/components/Interface/FieldComposition.vue'
import InputField from '@/components/Interface/Input.vue'

export default {
    data () {
        return {
            search: ''
        }
    },

    props: {
        disabled: {
            type: Boolean,
            default: false
        }
    },

    components: {
        TheForm,
        Btn,
        FieldComposition,
        InputField
    },

    methods: {
        onSubmit () {
            this.$emit('submit', this.search)
        }
    }
}
</script>

<style lang="sass" scoped>
.search
    &__submit
        flex-basis: 95px

    &__input
        flex-grow: 1
        margin-left: 29px
</style>
