<template lang="pug">
    component.form-error(
        :is="tag"
        v-html="text"
    )
</template>

<script>
export default {
    props: {
        tag: {
            type: String,
            default: 'div'
        },
        text: {
            type: String,
            default: ''
        }
    }
}
</script>

<style lang="sass" scoped>
.form-error
    margin-top: 5px
    font-size: 14px
    color: #ff002e
</style>
