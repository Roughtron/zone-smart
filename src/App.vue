<template lang="pug">
    #app
        component(
            :is="layout"
        )
            router-view
</template>

<script>
const defaultLayout = 'default'

export default {
    computed: {
        layout () {
            return `${this.$route.meta.layout || defaultLayout}-layout`
        }
    }
}
</script>

<style lang="sass">
*
    margin: 0
    padding: 0

html,
body
    height: 100%

#app
    height: 100%
    font-family: 'Roboto', sans-serif

.visually-hidden
    position: absolute
    clip: rect(0, 0, 0, 0)
</style>
