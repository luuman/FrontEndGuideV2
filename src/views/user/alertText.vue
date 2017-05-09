<template>
  <div class="content">
    <Heads></Heads>
    <div id="scroll-section" class="main">
      <router-view></router-view>
      <div style="height: 800px;background: #222;">dfdsfdsafd</div>
      <Footer></Footer>
      <div @click="Alert">Alert</div>
      <div @click="Confirm">Confirm</div>
      <div @click="Remind">Remind</div>
      <div @click="alertView">alertView</div>
      <div @click="Prompt">Prompt</div>
    </div>
  </div>
</template>
<script>
  import Heads from 'COMPONENT/heads'
  export default {
    mounted () {
    },
    data: () => ({
      title: ''
    }),
    methods: {
      Alert () {
        this.$iosAlert('alert').then(function () {
          console.log('alert')
        })
      },
      alertView () {
        this.$iosAlertView({
          title: '通知',
          text: '弹窗内容，告知当前状态、信息和解决方法，描述文字尽量控制在三行内',
          mask: true,
          buttons: [
            {
              text: '取消',
              onClick () {
                console.log('取消')
              }
            },
            {
              text: '确定',
              onClick () {
                console.log('确定')
              }
            }
          ]
        })
      },
      Confirm () {
        // this.$iosConfirm('confirm?').then(function () {
        //   console.log('confirm')
        // })
        this.$iosConfirm({
          title: 'confirm',
          cancelText: 'cancelText',
          okText: 'okText'
        }).then(() => {
          console.log('okText')
        }).catch(() => {
          console.log('cancelText')
        })
      },
      Prompt () {
        this.$iosPrompt({
          title: 'prompt',
          placeholder: 'please input'
        }).then(() => {
          console.log('ok')
        }).catch(() => {
          console.log('cancelText')
        })
      },
      Remind () {
        this.$iosRemind({
          title: 'remind',
          remindDuration: 60
        })
      }
    },
    components: {Heads}
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  @import '../../assets/scss/mixin.scss';
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
