<template lang="pug">
    table.grid
        thead.grid__head
            tr.grid__row.grid__row_heading(
                :class="{ 'hidden': selected.length }"
            )
                th.grid__heading.grid__heading_content_spacer &nbsp;

                th.grid__heading.grid__heading_content_select(
                    v-if="selectable"
                )
                    .grid__heading-in
                        checkbox(
                            v-model="selectAll"
                            @change="onToggleAll"
                        )

                th.grid__heading(
                    :class="item.classes"
                    v-for="(item, index) in columns"
                    :key="`${item.key}-${index}`"
                )
                    .grid__heading-in
                        span(
                            v-html="item.name"
                        )

                th.grid__heading.grid__heading_content_spacer &nbsp;

            tr.grid__row(
                v-if="selected.length"
            )
                th.grid__heading.grid__heading_content_spacer &nbsp;

                th.grid__heading.grid__heading_content_select
                    .grid__heading-in
                        checkbox(
                            v-model="selectAll"
                            @change="onToggleAll"
                        )

                th.grid__heading(
                    :colspan="columns.length"
                )
                    slot(
                        name="actions"
                        v-bind:selected="selected"
                    )

                th.grid__heading.grid__heading_content_spacer &nbsp;

            tr.grid__row.grid__row_content_delimiter
                th.grid__heading.grid__heading_content_spacer &nbsp;

                th(
                    :colspan="selectable ? columns.length + 1 : columns.length"
                )

                th.grid__heading.grid__heading_content_spacer &nbsp;

        tbody.grid__body
            template(
                v-for="(cell, index) in cells"
            )
                tr.grid__row(
                    :class="{ 'is-expanded': Object.prototype.hasOwnProperty.call(cell, 'expanded') && cell.expanded }"
                )
                    td.grid__cell.grid__cell_content_spacer &nbsp;

                    td.grid__cell.grid__cell_content_select(
                        v-if="selectable && Object.prototype.hasOwnProperty.call(cell, 'checked')"
                    )
                        .grid__cell-in
                            checkbox(
                                v-model="cell.checked"
                                @change="selectAll = false"
                            )

                    td.grid__cell(
                        :class="column.classes"
                        v-for="(column, index) in columns"
                        :key="`${column.key}-${index}`"
                    )

                        .grid__cell-in
                            div(
                                v-if="column.type"
                            )
                                slot(
                                    :name="column.type"
                                    v-bind:[column.type]="cell[column.key]"
                                    v-bind:id="cell.id"
                                )

                            span(
                                v-else
                            ) {{ cell[column.key] }}

                    td.grid__cell.grid__cell_content_spacer &nbsp;

                tr.grid__row(
                    v-if="Object.prototype.hasOwnProperty.call(cell, 'expanded') && cell.expanded"
                )
                    td.grid__cell.grid__cell_content_spacer &nbsp;

                    td.grid__cell.grid__cell_content_products(
                        :colspan="selectable ? columns.length + 1 : columns.length"
                    )
                        .grid__cell-in
                            slot(
                                name="products"
                                v-bind:products="cell.items"
                            )

                    td.grid__cell.grid__cell_content_spacer &nbsp;
</template>

<script>
import Checkbox from '@/components/Interface/Checkbox.vue'

export default {
    props: {
        columns: Array,
        cells: Array,
        selectable: {
            type: Boolean,
            default: false
        }
    },

    data () {
        return {
            selectAll: false
        }
    },

    computed: {
        selected () {
            return this.cells.filter(c => c.checked).map(c => c.id)
        }
    },

    components: {
        Checkbox
    },

    methods: {
        onToggleAll () {
            this.cells.forEach(c => {
                if (this.selectAll) {
                    c.checked = true
                    return
                }
                c.checked = false
            })
            this.$emit('update:cells', this.cells)
        }
    }
}
</script>

<style lang="sass">
.grid
    width: 100%
    border-collapse: collapse

    &__row
        &_heading
            &.hidden
                visibility: collapse
                transform: scale(0)

        &_content_delimiter
            th
                height: 10px
                background-color: #f6f9fc

            .grid__heading_content_spacer
                padding-top: 0
                padding-bottom: 0

    &__heading
        padding: 20px 0
        font-family: 'Roboto'
        font-size: 12px
        color: rgba(19, 39, 57, .5)
        font-weight: normal
        text-align: left
        background-color: #fff

        &:first-child
            border-top-left-radius: 6px
            border-bottom-left-radius: 6px

        &:last-child
            border-top-right-radius: 6px
            border-bottom-right-radius: 6px

        &_content_spacer
            width: 20px

        &_content_select
            padding-right: 20px

    &__cell
        padding: 17px 10px 17px 0
        font-family: 'Roboto'
        font-size: 14px
        font-weight: normal
        background-color: #fff
        border-bottom: 1px solid rgba(197, 199, 205, .4)

        .grid__row.is-expanded &
            border-bottom: 1px solid transparent

        &_content_select
            padding-right: 20px

        &_content_spacer
            width: 20px
            border-bottom: none

        &_content_products
            padding: 0 20px 20px

    &__body
        .grid__row
            &:first-child
                .grid__cell
                    &:first-child
                        border-top-left-radius: 6px

                    &:last-child
                        border-top-right-radius: 6px

            &:last-child
                .grid__cell
                    border-bottom: none

                    &:first-child
                        border-bottom-left-radius: 6px

                    &:last-child
                        border-bottom-right-radius: 6px
</style>
