<template>
  <div class="view">
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
    components: {Heads}
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  @import '../../assets/scss/mixin.scss';
</style>
