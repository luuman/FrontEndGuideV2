<template>
  <div class="view">
    <Heads v-if="true" :titles="title"></Heads>
    <transition name="fade">
      <router-view class="router-view"></router-view>
    </transition>
    <nav ref="navs" class="nav">
      <ul>
        <router-link :to="{name: 'Novelty', params: {Id: 1}}" tag="li">
          <!-- <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-zan"></use>
          </svg> -->
          <v-svg :data="'#icon-zan'"></v-svg>
          <span>New</span>
        </router-link>
        <router-link :to="{name: 'Repos', params: {Id: 2}}" tag="li">
          <!-- <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-dianzan"></use>
          </svg> -->
          <v-svg :data="'#icon-dianzan'"></v-svg>
          <span>Repos</span>
        </router-link>
        <router-link :to="{name: 'Follow', params: {Id: 3}}" tag="li">
          <!-- <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-dianzan"></use>
          </svg> -->
          <v-svg :data="'#icon-dianzan'"></v-svg>
          <span>Follow</span>
        </router-link>
        <router-link :to="{name: 'Owner', params: {Id: 4}}" tag="li">
          <!-- <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-dianzan"></use>
          </svg> -->
          <v-svg :data="'#icon-dianzan'"></v-svg>
          <span>User</span>
        </router-link>
      </ul>
    </nav>
  </div>
</template>
<script>
  import Heads from 'COMPONENT/heads'
  export default {
    data: () => ({
      title: '',
      transitionName: ''
    }),
    mounted () {
      let Height = this.$refs.navs.offsetHeight
      console.log(Height)
      // document.getElementById('app').style.paddingBottom = Height + 'px'
    },
    watch: {
      '$route' (to, from) {
        const toDepth = to.params.Id
        const fromDepth = from.params.Id
        console.log(toDepth + ',' + fromDepth)
        if (toDepth === fromDepth) {
          if (toDepth[toDepth - 1] === '') {
            this.transitionName = 'vux-pop-out'
          } else {
            this.transitionName = 'vux-pop-in'
          }
        } else {
          this.transitionName = toDepth < fromDepth ? 'vux-pop-out' : 'vux-pop-in'
        }
      }
    },
    components: {Heads}
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  @import '../../assets/scss/mixin.scss';
  .router-view{
    width: 100%;
    height: 100%;
    overflow: scroll;
    // position: relative;
  }
  .nav{
    position: fixed;
    width: 100%;
    bottom: 0;
    left: 0;
    border-top: size(1) solid #DDD;
    background: #FFF;
    ul{
      display: flex;
      li{
        flex: 1;
        height: size(44);
        padding: size(6) 0;
        color: #aaa;
        svg, span{
          display: block;
          margin: auto;
          text-align: center;
        }
        span{
          @include font-size(10px);
        }
        svg{
          width: size(28);
          height: size(30);
        }
      }
      .active{
        color: #586069;
      }
    }
  }
  .fade-enter-active, .fade-leave-active {
    transition: all .4s;
  }
  .fade-enter, .fade-leave-active {
    transform: translate3d(0, 2rem, 0);
    opacity: 0;
  }
</style>
