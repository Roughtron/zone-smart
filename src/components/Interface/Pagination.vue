<template lang="pug">
    .pagination
        button.pagination__button.pagination__button_content_prev(
            type="button"
            :disabled="!can_go_prev"
            @click="prev"
        )
            svg-icon.pagination__icon(
                name="prev"
                title="Назад"
            )

        .pagination__current {{ current + 1 }}&mdash;{{ current + limit > total ? total : current + limit }} из {{ total }}

        button.pagination__button.pagination__button_content_next(
            type="button"
            :disabled="!can_go_next"
            @click="next"
        )
            svg-icon.pagination__icon(
                name="next"
                title="Вперед"
            )
</template>

<script>
export default {
    props: {
        total: {
            type: Number,
            default: 0
        },
        current: {
            type: Number,
            default: 0
        },
        limit: {
            type: Number,
            default: 0
        }
    },

    computed: {
        can_go_prev () {
            return this.current - this.limit >= 0
        },

        can_go_next () {
            return this.current + this.limit <= this.total
        }
    },

    methods: {
        prev () {
            if (this.can_go_prev) {
                this.$emit('change', this.current - this.limit)
            }
        },

        next () {
            if (this.can_go_next) {
                this.$emit('change', this.current + this.limit)
            }
        }
    }
}
</script>

<style lang="sass" scoped>
.pagination
    display: flex
    justify-content: flex-end
    margin: 20px 0
    font-size: 14px
    opacity: .5

    &__current
        margin: 0 9px

    &__button
        cursor: pointer

        &[disabled]
            cursor: not-allowed

    &__icon
        width: 16px
        height: 16px
</style>
