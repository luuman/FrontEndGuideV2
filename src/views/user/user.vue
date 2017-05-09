<template>
  <div class="content">
    <Heads></Heads>
    <div id="scroll-section" class="main">
      <router-view></router-view>
      <div style="height: 8000px;background: #222;">dfdsfdsafd</div>
      <Alert v-model="show" :title="title" @on-show="onShow" @on-hide="onHide"> {{text}}</Alert>
      <Footer>{{Json}}</Footer>
    </div>
  </div>
</template>
<script>
  import Alert from 'COMPONENT/alert'
  import Heads from 'COMPONENT/heads'
  import API from 'API'
  // import {urlAuthWechat} from 'UTIL/common'
  export default {
    mounted () {
      API.ReposList('luuman')
      .then(res => {
        // this.Json = JSON.parse(res)
        // let data = window.JSON.parse(res.data)
        // let data = res
        // console.log(data)
        // console.log()
      }, err => {
        console.log(err)
      })
    },
    data: () => ({
      title: '恭喜',
      text: '消息已成功发送',
      Json: '',
      show: true
    }),
    methods: {
      onHide () {
        console.log('on hide')
      },
      onShow () {
        console.log('on show')
      }
    },
    components: {Alert, Heads}
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  // @import '../../assets/scss/mixin.scss';
  .main{
    // position: absolute;
    // overflow-y: scroll;
    // overflow-x: hidden;
    // -webkit-overflow-scrolling: touch;
    // top: 60px;
    // left: 0;
    // right: 0;
    // bottom: 0;
  }
</style>
