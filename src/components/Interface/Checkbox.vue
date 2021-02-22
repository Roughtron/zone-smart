<template lang="pug">
    label.checkbox
        span.checkbox__in
        input.checkbox__input.visually-hidden(
            type="checkbox"
            :checked="shouldBeChecked"
            :value="value"
            @change="updateInput"
        )
        span.checkbox__pseudo
        span.checkbox__text
            slot
</template>

<script>
export default {
    model: {
        prop: 'modelValue',
        event: 'change'
    },

    props: {
        value: {
            type: String,
            default: ''
        },
        modelValue: {
            type: [Boolean, Array],
            default: false
        },
        trueValue: {
            type: Boolean,
            default: true
        },
        falseValue: {
            type: Boolean,
            default: false
        }
    },

    computed: {
        shouldBeChecked () {
            if (this.modelValue instanceof Array) {
                return this.modelValue.includes(this.value)
            }

            return this.modelValue === this.trueValue
        }
    },

    methods: {
        updateInput (e) {
            const target = e.target
            const isChecked = target.checked

            if (this.modelValue instanceof Array) {
                const newValue = [...this.modelValue]

                if (isChecked) {
                    newValue.push(this.value)
                } else {
                    newValue.splice(newValue.indexOf(this.value), 1)
                }

                this.$emit('change', newValue)
            } else {
                this.$emit('change', isChecked ? this.trueValue : this.falseValue)
            }
        }
    }
}
</script>

<style lang="sass" scoped>
.checkbox
  display: block
  line-height: 24px
  text-align: left
  white-space: nowrap
  cursor: pointer
  -webkit-tap-highlight-color: transparent

  &__in
    position: relative
    display: inline-block
    vertical-align: top
    line-height: 1

  &__input
    &:checked
      ~ .checkbox__pseudo

        &:after
          opacity: 1

  &__pseudo
    position: relative
    display: inline-block
    vertical-align: top
    width: 24px
    height: 24px
    background-color: transparent
    border: 1px solid #c5c7cd
    border-radius: 3px
    box-sizing: border-box
    transition: background-color ease .3s, border-color ease .3s
    backface-visibility: hidden

    &:after
      content: ""
      position: absolute
      top: 50%
      left: 50%
      width: 14px
      height: 6px
      margin-top: -2px
      border-left: 2px solid #152739
      border-bottom: 2px solid #152739
      transform: translate(-50%, -50%) rotate(-45deg)
      opacity: 0
      transition: opacity linear .1s

  &__text
    display: inline-block
    vertical-align: middle
    padding-left: 11px
    font-size: 14px
    line-height: 24px
    white-space: normal
    color: #2e404b
    user-select: none
</style>
