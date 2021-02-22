<template lang="pug">
    form.form(
        @submit.prevent="$emit('submit')"
    )
        slot
</template>

<style lang="sass">
.form-fields-group
    margin: 0
    padding: 0
    border: none

    &__title
        display: block
        width: 100%
        margin-bottom: 40px
        font-family: 'Roboto', sans-serif
        font-size: 36px
        color: #152739
        text-align: center

.form-fields-list
    margin: 0
    padding: 0
    list-style: none

    &__item
        margin-bottom: 30px

        &:last-child
            margin-bottom: 0
</style>
