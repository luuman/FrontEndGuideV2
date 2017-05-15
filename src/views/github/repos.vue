<template>
  <div class="view">
    <Heads v-if="false" :titles="title"></Heads>
    <div @click="show" style="height: 100%;">dfd</div>
    <!-- <audio ref="refresh" src="http://matt.chinauui.com/day_131229/20131229_78a6103ca07c4c097332c3eD7N372K5C.mp3"></audio> -->
    <!-- <audio ref="refresh" src="../static/music/red-02.mp3" style="display: none;"></audio> -->
    <audio ref="refresh" src="../../static/music/refresh.mp3" style="display: none;"></audio>
  </div>
</template>
<script>
  import Heads from 'COMPONENT/heads'
  export default {
    data: () => ({
      title: ''
    }),
    components: {Heads},
    methods: {
      show () {
        this.$refs.refresh.play()
        console.log('show')
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  @import '../../assets/scss/mixin.scss';
</style>
