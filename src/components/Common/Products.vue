<template lang="pug">
  table.products
    thead
        tr.products__header
            td.products__heading.products__heading_content_spacer &nbsp;

            td.products__heading
                .products__heading-in Название/SKU

            td.products__heading
                .products__heading-in Заказанное<br>количество

            td.products__heading
                .products__heading-in Отправленное<br>количество

            td.products__heading
                .products__heading-in Цена

            td.products__heading
                .products__heading-in Стоимость

            td.products__heading.products__heading_content_spacer &nbsp;

    tbody
        tr.products__item(
            v-for="item in products"
            :key="item.id"
        )
            td.products__cell.products__cell_content_spacer &nbsp;

            td.products__cell
                .products__cell-in
                    .product__card
                        .product__thumbnail(
                            v-if="item.main_image"
                        )
                            img.product__image(
                                :src="item.main_image"
                            )

                        .product__description
                            .product__name {{ item.title }}
                            .product__sku {{ item.sku }}

            td.products__cell
                .products__cell-in {{ item.quantity }}

            td.products__cell
                .products__cell-in {{ item.quantity }}

            td.products__cell
                .products__cell-in {{ item.price | toFixed(2) | currency(item.currency) }}

            td.products__cell
                .products__cell-in {{ item.total_price | toFixed(2) | currency(item.currency) }}

            td.products__cell.products__cell_content_spacer &nbsp;
</template>

<script>
export default {
    props: {
        products: {
            type: Array,
            default: () => []
        }
    }
}
</script>

<style lang="sass" scoped>
.products
    width: 100%
    border-collapse: collapse

    &__heading
        font-size: 12px
        color: rgba(19, 39, 57, .5)

        &_content_spacer
            width: 18px
            border-bottom: none

    &__heading-in
        padding-bottom: 4px

    &__item
        &:first-child
            .products__cell
                &:first-child
                    border-top-left-radius: 6px

                &:last-child
                    border-top-right-radius: 6px

        &:last-child
            .products__cell
                border-bottom: none

                &:first-child
                    border-bottom-left-radius: 6px

                &:last-child
                    border-bottom-right-radius: 6px

    &__cell
        padding: 8px
        background-color: #fff
        border-bottom: 1px solid rgba(197, 199, 205, .4)

        &_content_spacer
            width: 18px
            border-bottom: none

.product
    &__card
        display: flex

    &__thumbnail
        max-width: 40px
        margin-right: 20px

    &__image
        max-width: 100%

    &__name
        margin-bottom: 3px
        font-size: 14px
        color: #152739

    &__sku
        font-size: 12px
        opacity: .5
</style>
