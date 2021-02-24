<template lang="pug">
  .loader
</template>

<style lang="sass" scoped>
  .loader
    position: relative
    margin: 0 auto
    font-size: 10px
    color: #00bd9b
    text-indent: -9999em
    transform: translateZ(0)
    animation-delay: -0.16s
    border-radius: 50%
    width: 1.5em
    height: 1.5em
    margin-top: -2.5em
    animation-fill-mode: both
    animation: load7 1.8s infinite ease-in-out

    &:before
      content: ''
      position: absolute
      top: 0
      left: -2.5em
      width: 1.5em
      height: 1.5em
      border-radius: 50%
      animation-fill-mode: both
      animation: load7 1.8s infinite ease-in-out
      animation-delay: -0.32s

    &:after
      content: ''
      position: absolute
      top: 0
      left: 2.5em
      border-radius: 50%
      width: 1.5em
      height: 1.5em
      animation-fill-mode: both
      animation: load7 1.8s infinite ease-in-out

  @keyframes load7
    0%,
    80%,
    100%
      box-shadow: 0 2.5em 0 -1.3em

    40%
      box-shadow: 0 2.5em 0 0
</style>
