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

button
    margin: 0
    padding: 0
    background: none
    border: none
    outline: none

.link
    color: #3cc8ae
    text-decoration: none
    cursor: pointer

.visually-hidden
    position: absolute
    clip: rect(0, 0, 0, 0)
</style>
