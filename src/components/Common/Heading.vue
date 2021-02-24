<template lang="pug">
    component.heading(
        :is="tag"
    )
        slot
</template>

<script>
export default {
    props: {
        tag: {
            type: String,
            readonly: true,
            default: 'h1'
        }
    }
}
</script>

<style lang="sass" scoped>
  .heading
    font-family: Roboto, sans-serif
    font-size: 36px
    color: #152739
</style>
