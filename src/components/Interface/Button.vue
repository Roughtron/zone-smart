<template lang="pug">
    button.button(
        :type="type"
        @click="$emit('click')"
    )
        span.button__text
            slot Отправить
</template>

<script>
export default {
    props: {
        type: {
            type: String,
            default: 'button'
        }
    }
}
</script>

<style lang="sass" scoped>
.button
    position: relative
    display: inline-block
    margin: 0
    padding: 0
    text-decoration: none
    background: none
    border: none
    outline: none
    cursor: pointer
    box-sizing: border-box
    user-select: none
    transition: opacity .3s
    -webkit-tap-highlight-color: transparent

    &[disabled]
        opacity: .5
        cursor: inherit

    &__text
        position: relative
        z-index: 1

    &_viewtype_primary
        height: 52px
        padding: 0 10px
        font-size: 16px
        line-height: 52px
        text-align: center
        color: #fff
        white-space: nowrap
        background: #3cc8ae
        border-radius: 5px
        transition: background-color .3s, opacity .3s

        &:hover,
        &:focus
            background-color: #10e9bf

        &.is-load
            background: linear-gradient(-45deg, #3cc8ae 25%, transparent 25%, transparent 50%, #3cc8ae 50%, #3cc8ae 75%, transparent 75%, transparent)
            background-color: #10e9bf
            background-size: 50px 50px
            animation: load 2s linear infinite
            pointer-events: none

    &_type_block
        width: 100%

@keyframes load
    0%
        background-position: 0 0

    100%
        background-position: 50px 50px
</style>
