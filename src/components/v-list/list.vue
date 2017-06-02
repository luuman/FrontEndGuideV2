<template>
  <!-- <div class="lists" :style="'order:' + T2.pageC2[K3].Num" @click="onCopy(K1,K2,K3,List)" v-for="(List,K3) in T2.pageC2"> -->
  <div class="lists">
  	<div class="list" :class="{new: New}">
  	  <div class="title" :class="{noTitle: !Title}">
  	    <div
          v-if="!Img"
          class="paper bg-box"
          :style="'background-color: #' + Color + ';box-shadow: 0px 0px 7px #' + Color">
  	       <i>{{Name.charAt(0)}}</i>
  	    </div>
  	    <div v-else v-lazy:background-image="Img" class="paper bg-box">
  	    </div>
  	    <h3>{{Name}}</h3>
  	  </div>
  	  <h4>{{Title}}</h4>
  	</div>
  </div>
</template>
<script>
  export default {
    data: () => ({
      color: ['fecc2f', '7c55fb', 'feb42e', '3189fc', '23d1b9', '22c5f8']
    }),
    props: {
      Href: String,
      Name: String,
      New: String,
      Img: String,
      Title: String,
      Num: Number
    },
    computed: {
      Color () {
        return this.color[Math.floor(Math.random() * this.color.length)]
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  @import '../../assets/scss/mixin.scss';
  .lists,.add{
    // overflow: hidden;
    box-sizing: border-box;
    // padding: 0 10px;
    padding: 10px;
    transition: width 1s;
    cursor: pointer;
    @include set-media(width, 100%, 50%, 33.3333%, 25%);
    .list{
      background: $bg3;
      height: 87px;
      padding: 10px;
      border-radius: 6px;
      // border: 1px solid #e4ecf3;
      // margin: 20px 0 0 0;
      transition: all 0.3s ease;
      .title{
        display: flex;
        align-items: center;
        padding-bottom: 10px;
        h3{
          font-size: 16px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          padding-left: 10px;
          text-transform: capitalize;
        }
      }
      h4{
        font-size: 13px;
        color: $font2;
        display: -webkit-box !important;
        overflow: hidden;
        text-overflow: ellipsis;
        word-break: break-all;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
      }
      .noTitle{
        .paper{
          width: 80px;
          height: 80px;
          i{
            font-size: 32px;
            text-transform: capitalize;
          }
        }
      }
      .paper{
        width: 40px;
        height: 40px;
        // flex: 1;
        // flex-basis: 40px;
        background-color: #607d8b;
        background-size: cover;
        overflow: hidden;
        border-radius: 50%;
        flex-shrink: 0;
        box-shadow: 0.08rem 0.16rem 0.26667rem rgba(59, 59, 60, 0.7);
        position: relative;
        i{
          position: absolute;
          font-style: normal;
          width: 40px;
          line-height: 40px;
          text-align: center;
          margin-left: -20px;
          margin-top: -20px;
          left: 50%;
          top: 50%;
          color: #FFF;
          font-size: 18px;
        }
      }
      &:hover{
        transform: translateY(-3px);
        box-shadow: $shadow1;
        transition: all 0.3s ease;
        .list{
          // background: linear-gradient(90deg, #121c29 0%, #102848 100%);
          // background: linear-gradient(90deg, #143456 20%, #141f2b 100%);
        }
      }
    }
  }
</style>
