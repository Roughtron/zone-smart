<template lang="pug">
    .status(
        :class="{ 'is-active': active }"
    )
</template>

<script>
export default {
    props: {
        active: {
            type: Boolean,
            default: true
        }
    }
}
</script>

<style lang="sass" scoped>
.status
    position: relative
    width: 20px
    height: 20px
    margin: 0 auto
    border-radius: 50%
    background-color: #f6f9fc

    &.is-active
        background-color: #3cc8ae

        &:after
            content: ""
            position: absolute
            top: 50%
            left: 50%
            width: 7px
            height: 3px
            margin-top: -1px
            border-left: 2px solid #fff
            border-bottom: 2px solid #fff
            transform: translate(-50%, -50%) rotate(-45deg)
</style>
