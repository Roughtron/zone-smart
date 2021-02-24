<template lang="pug">
    div.page
        .content-columns.content-columns_content_layout
            aside.column.column_layout_a

            .column.column_layout_b
                .page__header

                .page__content
                    slot
</template>

<style lang="sass" scoped>
.page
    height: 100%
    overflow: auto

    &__header
        height: 63px
        background-color: #fff
        border-bottom: 1px solid #c5c7cd

    &__content
        padding: 30px

.content-columns_content_layout
    display: flex
    height: 100%

    .column
        &_layout_a
            flex-basis: 220px
            flex-shrink: 0
            color: #fff
            background-color: #132739

        &_layout_b
            flex-grow: 1
            overflow: auto
            background-color: #f6f9fc
</style>
