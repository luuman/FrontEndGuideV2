<template>
  <VDialog v-model="showValue"
    :mask-transition="maskTransition"
    :dialog-transition="dialogTransition"
    @on-hide="$emit('on-hide')"
    @on-show="$emit('on-show')">
  </VDialog>
</template>
<script>
  import VDialog from 'COMPONENT/v-dialog'
  export default {
    props: {
      value: Boolean,
      title: String,
      buttonText: String,
      maskTransition: {
        type: String,
        default: 'vux-mask'
      },
      dialogTransition: {
        type: String,
        default: 'vux-dialog'
      }
    },
    data: () => ({
      showValue: false
    }),
    components: {VDialog}
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  @import '../../assets/scss/mixin.scss';
</style>
