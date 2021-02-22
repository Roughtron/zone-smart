<template lang="pug">
    label.form-field-label(
        :for="name"
    )
        slot
</template>

<script>
export default {
    props: {
        name: {
            type: String,
            default: ''
        }
    }
}
</script>

<style lang="sass" scoped>
.form-field-label
    display: block
    font-weight: bold
    font-size: 16px

    &.invalid
        color: #ae4442

    &.valid
        color: #3c763d
</style>
