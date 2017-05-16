<template>
  <div class="view">
    <Heads v-if="false" :titles="title"></Heads>
    <div @click="show" style="height: 100%;">dfd</div>
    <audio ref="refresh" src="../../static/music/refresh.mp3" style="display: none;"></audio>
  </div>
</template>
<script>
  import Heads from 'COMPONENT/heads'
  import API from 'API'
  export default {
    data: () => ({
      title: 1
    }),
    components: {Heads},
    methods: {
      show () {
        this.$refs.refresh.play()
        console.log('show')
        API.Notifications(this.title)
        .then(res => {
          console.log(res)
          this.title++
        }, () => {
        })
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  @import '../../assets/scss/mixin.scss';
</style>
