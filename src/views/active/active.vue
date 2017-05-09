<template>
  <div>
    <Heads
      :titles="title">
    </Heads>
    <router-link to="/voteline"><h1 class="tap">豆瓣投票</h1></router-link>
    <router-link to="/zhuanpan"><h1 class="tap">旋转转盘</h1></router-link>
    <router-link to="/Hello"><h1 class="tap">方块转盘</h1></router-link>
    <router-link to="/List"><h1 class="tap">vue-virtual-scroll-list</h1></router-link>
    <router-link to="/Github"><h1 class="tap">Github Star投票</h1></router-link>
    <router-link to="/proImg"><h1 class="tap">Progressive img</h1></router-link>
    <router-link to="/Button"><h1 class="tap">transform Button</h1></router-link>
  </div>
</template>
<script>
  import Heads from 'COMPONENT/heads'
  export default {
    data () {
      return {
        title: 'Acitve List'
      }
    },
    components: {Heads}
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  @import '../../assets/scss/mixin.scss';
  .tap{
    @include font-size(16px);
    text-align: center;
    line-height: size(40);
    color: #4da577;
  }
</style>
