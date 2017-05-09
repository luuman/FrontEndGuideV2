<template>
  <div class="dialog" @touchmove="onTouchMove">
    <transition :name="maskTransition">
      <div class="vue-mask" @click="hideOnBlur && (currentValue = false)" v-show="currentValue"></div>
    </transition>
    <transition :name="dialogTransition">
      <div class="weui-dialog" v-show="currentValue" >
        <slot></slot>
      </div>
    </transition>
  </div>
</template>
<script>
  export default {
    props: {
      value: {
        type: Boolean,
        default: false
      },
      maskTransition: {
        type: String,
        default: 'vux-mask'
      },
      dialogTransition: {
        type: String,
        default: 'vux-dialog'
      },
      hideOnBlur: Boolean,
      scroll: {
        type: Boolean,
        default: true
      }
    },
    created () {
      if (typeof this.value !== 'undefined') {
        this.currentValue = this.value
      }
    },
    data: () => ({
      currentValue: false
    }),
    watch: {
      value: {
        handler: function (val) {
          this.currentValue = val
        },
        immediate: true
      },
      currentValue (val) {
        this.$emit(val ? 'on-show' : 'on-hide')
        this.$emit('input', val)
      }
    },
    methods: {
      onTouchMove (event) {
        !this.scroll && event.preventDefault()
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  @import '../../assets/scss/mixin.scss';
  .dialog{
    .vue-mask{
      position: fixed;
      z-index: 1000;
      top: 0;
      right: 0;
      left: 0;
      bottom: 0;
      background: rgba(0,0,0,.6);
    }
  }
</style>
