<template>
  <div class="content">
    <Heads></Heads>
    <div id="scroll-section" class="main">
      <router-view></router-view>
      <div @click="onAlert">Click</div>
      <Alert v-model="alert.show" :title="alert.title" :text="alert.text" :buttons="alert.buttons" @on-show="onShow" @on-hide="onHide"></Alert>
      <Footer>{{Json}}</Footer>
    </div>
  </div>
</template>
<script>
  import Alert from 'COMPONENT/alert'
  import Heads from 'COMPONENT/heads'
  import API from 'API'
  // import {authorize} from 'UTIL/common'
  export default {
    components: {Alert, Heads},
    mounted () {
      // window.location = authorize()
      // console.log(authorize())
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
      Json: '',
      alert: {}
    }),
    methods: {
      onAlert () {
        let self = this
        this.alert = {
          show: true,
          title: '恭喜',
          text: '消息已成功发送',
          buttons: [
            {
              text: 'Close',
              onClick () {
                console.log('取消')
              }
            },
            {
              text: 'OK',
              onClick () {
                self.Click()
              }
            }
          ]
        }
      },
      Click () {
        console.log('click on')
      },
      onHide () {
        console.log('on hide')
      },
      onShow () {
        console.log('on show')
      }
    }
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
