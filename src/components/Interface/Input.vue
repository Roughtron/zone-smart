<template lang="pug">
    .form-field-box
        input.form-field.form-field_type_text(
            v-bind="$attrs"
            :value="value"
            @input="$emit('input', $event.target.value)"
        )
        slot
</template>

<script>
export default {
    inheritAttrs: false,

    props: {
        value: {
            type: String,
            default: ''
        }
    }
}
</script>

<style lang="sass" scoped>
.form-field-box
    position: relative

    &.invalid
        .form-field_type_text
            border-color: #ff002e

    &.valid
        .form-field_type_text
            border-color: #3cc8ae

.form-field
    &_type_text
        width: 100%
        height: 52px
        padding: 0 15px
        font-family: 'Roboto', sans-serif
        font-size: 14px
        background: #fff
        color: #152739
        border: 1px solid #c5c7cd
        border-radius: 6px
        transition: border-color .3s
        outline: none
        box-sizing: border-box

        &[disabled]
            opacity: .5

        &:focus
            border-color: #3cc8ae

        &::placeholder
            opacity: .5

    &__button
        position: absolute
        top: 50%
        right: 14px
        width: 24px
        height: 24px
        cursor: pointer
        transform: translateY(-50%)

        .form-field__icon
            position: static

    &__icon
        position: absolute
        top: 50%
        right: 14px
        width: 24px
        height: 24px
        transform: translateY(-50%)
</style>
