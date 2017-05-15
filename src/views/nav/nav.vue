<template>
  <div ref="navs" class="view">
    <Heads :titles="title">
    </Heads>
  </div>
</template>
<script>
  import Heads from 'COMPONENT/heads'
  export default {
    data: () => ({
      title: ''
    }),
    components: {Heads},
    mounted () {
      let Height = this.$refs.navs.offsetHeight
      console.log(Height)
      document.getElementById('app').style.marginBottom = Height + 'px'
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  @import '../../assets/scss/mixin.scss';
</style>
