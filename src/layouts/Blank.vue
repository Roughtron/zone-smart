<template lang="pug">
    div.page
        slot
</template>

<style lang="sass" scoped>
.page
    display: flex
    flex-direction: column
    justify-content: center
    align-items: center
    height: 100%
    min-height: 600px
    overflow: auto
</style>
