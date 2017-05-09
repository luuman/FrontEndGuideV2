<template>
  <div id="app" class="container">
    <transition :name="transitionName">
      <router-view class="router-view"></router-view>
    </transition>
  </div>
</template>
<script>
  import 'ASSET/scss/mreset.scss'
  // import '../node_modules/progressive-image/dist/index.css'
  // import { mapGetters } from 'vuex'
  export default {
    mounted () {
    },
    methods: {
    },
    data: () => ({
      transitionName: ''
    }),
    watch: {
      '$route' (to, from) {
        const toDepth = to.path.split('/')
        const fromDepth = from.path.split('/')
        if (toDepth.length === fromDepth.length) {
          if (toDepth[toDepth.length - 1] === '') {
            this.transitionName = 'vux-pop-out'
          } else {
            this.transitionName = 'vux-pop-in'
          }
        } else {
          this.transitionName = toDepth < fromDepth ? 'vux-pop-out' : 'vux-pop-in'
        }
      }
    },
    computed: {
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  @import './assets/scss/mixin.scss';
  .icon {
     width: size(20);
     height: size(20);
     vertical-align: -0.15em;
     fill: currentColor;
     overflow: hidden;
  }
  .router-slid-enter-active, .router-slid-leave-active {
    transition: all .4s;
  }
  .router-slid-enter, .router-slid-leave-active {
    transform: translate3d(2rem, 0, 0);
    opacity: 0;
  }
  // vue-router transition
  .router-view {
    width: 100%;
    animation-duration: 0.5s;
    animation-fill-mode: both;
    backface-visibility: hidden;
  }
  .vux-pop-out-enter-active,
  .vux-pop-out-leave-active,
  .vux-pop-in-enter-active,
  .vux-pop-in-leave-active {
    will-change: transform;
    height: 100%;
    position: absolute;
    left: 0;
  }
  .vux-pop-out-enter-active {
    animation-name: popInLeft;
  }
  .vux-pop-out-leave-active {
    animation-name: popOutRight;
  }
  .vux-pop-in-enter-active {
    perspective: 1000;
    animation-name: popInRight;
  }
  .vux-pop-in-leave-active {
    animation-name: popOutLeft;
  }
  @keyframes popInLeft {
    from {
      opacity: 0;
      transform: translate3d(-100%, 0, 0);
    }
    to {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }
  @keyframes popOutLeft {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
      transform: translate3d(-100%, 0, 0);
    }
  }
  @keyframes popInRight {
    from {
      opacity: 0;
      transform: translate3d(100%, 0, 0);
    }
    to {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }
  @keyframes popOutRight {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
      transform: translate3d(100%, 0, 0);
    }
  }
</style>
