<template lang="pug">
    svg(
        :class="currentClass"
        xmlns="http://www.w3.org/2000/svg"
    )
        title(
            v-if="title"
        ) {{ title }}

        use(
            :xlink:href="iconPath"
            xmlns:xlink="http://www.w3.org/1999/xlink"
        )
</template>

<script>
export default {
    props: {
        name: {
            type: String,
            required: true,
            readonly: true
        },
        title: {
            type: String
        },
        className: {
            type: String,
            default: ''
        }
    },

    computed: {
        iconPath () {
            /* eslint-disable-next-line */
            let icon = require(`@/assets/icons/${this.name}.svg`)
            if (Object.prototype.hasOwnProperty.call(icon, 'default')) {
                icon = icon.default
            }

            return icon.url
        },

        currentClass () {
            return `svg-icon svg-icon--${this.name} ${this.className ?? ''}`
        }
    }
}
</script>

<style lang="sass">
.svg-icon
    fill: currentColor
</style>
