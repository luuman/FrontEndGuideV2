<template>
  <div ref="list" class="list" @mousedown="down" @mouseup="up" @touchstart="down" @touchend="up">
    <div class="paper">
      <img v-lazy="avatarImg" :data-srcset="avatarImg">
    </div>
    <div class="avatar"><span>{{title}}</span></div>
    <!-- <div v-if="showValue" class="big">
      dfjdjfj
    </div> -->
    
  </div>
</template>
<script>
  import {formatDate, formatType} from 'UTIL/tool'
  import API from 'API'
  export default {
    props: {
      avatarImg: String,
      title: String,
      time: String
    },
    data: () => ({
      timer: 0,
      big: {}
    }),
    computed: {
      times () {
        return formatDate(this.time)
      },
      types () {
        return formatType(this.type)
      }
    },
    methods: {
      down () {
        console.log(this.title)
        this.timer = setTimeout(this.doStuff, 1000)
      },
      doStuff () {
        // alert('hello, you just pressed the td for two seconds.')
        this.$parent.$parent.bigs()
        API.Get(`/users/${this.title}`)
        .then(res => {
          console.log(res)
          this.big = res
        }, () => {
        })
      },
      up () {
        clearTimeout(this.timer)
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  @import '../../assets/scss/mixin.scss';
  .paper{
    img{
      position: relative;
      z-index: -1;
    }
  }
  .big{
    position: fixed;
    width: size(375);
  }
</style>
