<template lang="pug">
    dl.field-composition
        dt.field-composition__title
            form-field-label(
                :for="name"
                :class="[classes, hideLabel ? 'visually-hidden' : '']"
            ) {{ label }}

        dd.field-composition__content
            slot

            form-error(
                v-if="errors"
                v-bind="ariaMsg"
                :text="errors[0]"
            )
</template>

<script>
import FormFieldLabel from './Label.vue'
import FormError from './FormError.vue'

export default {
    props: {
        name: {
            type: String
        },
        label: {
            type: String
        },
        classes: {
            type: Object,
            default: () => {}
        },
        errors: {
            type: Array,
            default: undefined
        },
        ariaMsg: {
            type: Object
        },
        hideLabel: {
            type: Boolean,
            default: false
        }
    },

    components: {
        FormFieldLabel,
        FormError
    }
}
</script>

<style lang="sass" scoped>
.field-composition
    margin: 0
    padding: 0
    border: none

    &__title
        display: block

    &__content
        display: block
        margin: 0
</style>
