<template lang="pug">
  .home
    .home__header
        heading Таблица заказов
        ul.home__actions
            li.home__action
                btn.button_viewtype_secondary.is-small(disabled) Отправления

            li.home__action
                btn.button_viewtype_primary.is-small(disabled) Экспортировать

    .home__search
        search(
            :disabled="isLoading"
            @submit="onSearch"
        )

    .home__loader(
        v-if="isLoading"
    )
        loader

    .home__grid(
        v-else
    )
        grid(
            :columns="columns"
            :cells="orders"
            selectable
        )
            template(
                v-slot:actions="{ selected }"
            )
                ul.home__actions
                    li.home__action
                        button.link(
                            type="button"
                            @click="update(selected)"
                        ) Обновить

                    li.home__action
                        button.link(
                            type="button"
                            @click="remove(selected)"
                        ) Удалить

            template(
             v-slot:order_id="{ order_id }"
            )
                router-link.link(
                    to="/"
                ) {{ order_id }}

            template(
                v-slot:items="{ items, id }"
            )
                button.link.expand-link(
                    type="button"
                    @click="toggleExpand(id)"
                )
                    span.expand-link__icon(
                        :class="{ 'is-expanded': isExpanded(id) }"
                    ) +
                    span {{ items.length }} {{ productCountText(items.length) }}

            template(
             v-slot:date="{ date }"
            ) {{ date | date }}

            template(
                v-slot:status="{ status }"
            )
                status(
                    :active="status"
                )

            template(
                v-slot:products="{ products }"
            )
                .home__products
                    products(
                        :products="products"
                    )

        pagination(
            :total="count"
            :current="offset"
            :limit="limit"
            @change="onPaginationChange"
        )

</template>

<script>
import { createNamespacedHelpers } from 'vuex'
import loading from '@/mixins/loading'
import Heading from '@/components/Common/Heading.vue'
import Btn from '@/components/Interface/Button.vue'
import Search from '@/components/Interface/Search.vue'
import Grid from '@/components/Interface/Grid.vue'
import Status from '@/components/Common/Status.vue'
import Products from '@/components/Common/Products.vue'
import Pagination from '@/components/Interface/Pagination.vue'

const { mapActions } = createNamespacedHelpers('orders')

export default {
    mixins: [loading],

    data () {
        return {
            columns: [{
                name: 'ID',
                key: 'order_id',
                type: 'order_id'
            }, {
                name: 'Товары',
                key: 'items',
                type: 'items'
            }, {
                name: 'Дата заказа',
                key: 'create_date',
                type: 'date'
            }, {
                name: 'Статус',
                key: 'status'
            }, {
                name: 'Оплачено',
                key: 'is_paid',
                type: 'status'
            }, {
                name: 'Отправлено',
                key: 'is_shipped',
                type: 'status'
            }, {
                name: 'Доставлено',
                key: 'is_shipped',
                type: 'status'
            }, {
                name: 'Покупатель',
                key: 'buyer'
            }, {
                name: 'Метод отправки',
                key: 'shipping_method'
            }, {
                name: 'Стоимость',
                key: 'total_price'
            }],
            orders: [],
            count: 0,
            limit: 10,
            offset: 0,
            search: ''
        }
    },

    components: {
        Heading,
        Btn,
        Search,
        Grid,
        Status,
        Products,
        Pagination
    },

    async created () {
        await this.getOrders()
    },

    methods: {
        ...mapActions(['getAll']),

        productCountText (number) {
            const cases = [2, 0, 1, 1, 1, 2]
            const words = ['товар', 'товара', 'товаров']
            return words[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]]
        },

        toggleExpand (id) {
            const el = this.orders.find(o => o.id === id)
            if (el) el.expanded = !el.expanded
        },

        isExpanded (id) {
            const el = this.orders.find(o => o.id === id)
            if (el) return el.expanded
            return false
        },

        update (selected) {
            console.log(`Обновляю: [${selected.join(', ')}]`)
        },

        remove (selected) {
            console.log(`Удаляю: [${selected.join(', ')}]`)
        },

        onPaginationChange (offset) {
            this.offset = offset
            this.getOrders()
        },

        onSearch (search) {
            this.search = search
            this.getOrders()
        },

        async getOrders () {
            try {
                this.isLoading = true
                const { results, count } = await this.getAll({
                    limit: this.limit,
                    offset: this.offset,
                    search: this.search
                })

                this.orders = results.map(o => ({
                    ...o,
                    checked: false,
                    expanded: false
                }))
                this.count = count
            } catch (e) {
                console.log(e)
            } finally {
                this.isLoading = false
            }
        }
    }
}
</script>

<style lang="sass" scoped>
.home
    &__header
        display: flex
        justify-content: space-between
        align-items: center

    &__actions
        display: flex
        margin: 0
        padding: 0
        margin-left: -10px
        list-style: none

    &__action
        margin-left: 10px

    &__search
        margin: 30px 0 20px

    &__loader
        padding: 50px 0

    &__products
        padding: 28px 20px 20px 63px
        background-color: #f6f9fc
        border-radius: 6px

.expand-link
    &__icon
        position: relative
        display: inline-block
        transition: transform .3s

        &.is-expanded
            transform: rotate(-45deg)

</style>
