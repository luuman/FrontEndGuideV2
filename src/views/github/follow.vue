<template>
  <div>
    <div class="List">
      <audio ref="refresh" src="../../static/music/refresh.mp3" style="display: none;"></audio>
      <scroller
        :on-refresh="refresh"
        :on-infinite="infinite"
        refresh-layer-color="#586069"
        loading-layer-color="#AAA"
        ref="my_scroller">
        <svg class="spinner" style="stroke: #586069;" slot="refresh-spinner" viewBox="0 0 64 64">
          <g stroke-width="7" stroke-linecap="round">
            <line x1="10" x2="10" y1="27.3836" y2="36.4931">
              <animate attributeName="y1" dur="750ms" values="16;18;28;18;16;16" repeatCount="indefinite"></animate>
              <animate attributeName="y2" dur="750ms" values="48;46;36;44;48;48" repeatCount="indefinite"></animate>
              <animate attributeName="stroke-opacity" dur="750ms" values="1;.4;.5;.8;1;1" repeatCount="indefinite"></animate>
            </line>
            <line x1="24" x2="24" y1="18.6164" y2="45.3836">
              <animate attributeName="y1" dur="750ms" values="16;16;18;28;18;16" repeatCount="indefinite"></animate>
              <animate attributeName="y2" dur="750ms" values="48;48;46;36;44;48" repeatCount="indefinite"></animate>
              <animate attributeName="stroke-opacity" dur="750ms" values="1;1;.4;.5;.8;1" repeatCount="indefinite"></animate>
            </line>
            <line x1="38" x2="38" y1="16.1233" y2="47.8767">
              <animate attributeName="y1" dur="750ms" values="18;16;16;18;28;18" repeatCount="indefinite"></animate>
              <animate attributeName="y2" dur="750ms" values="44;48;48;46;36;44" repeatCount="indefinite"></animate>
              <animate attributeName="stroke-opacity" dur="750ms" values=".8;1;1;.4;.5;.8" repeatCount="indefinite"></animate>
            </line>
            <line x1="52" x2="52" y1="16" y2="48">
              <animate attributeName="y1" dur="750ms" values="28;18;16;16;18;28" repeatCount="indefinite"></animate>
              <animate attributeName="y2" dur="750ms" values="36;44;48;48;46;36" repeatCount="indefinite"></animate>
              <animate attributeName="stroke-opacity" dur="750ms" values=".5;.8;1;1;.4;.5" repeatCount="indefinite"></animate>
            </line>
          </g>
        </svg>
        <!-- content goes here -->
        <!-- <div class="nothing" v-if="!novelty.length">
          <v-svg :data="'#icon-zan'"></v-svg>
        </div> -->
        <div class="main">
          <div class="row" v-if="novelty.length" v-for="(List,index) in novelty">
            <List
              :avatarImg="List.avatar_url"
              :title="List.login"
              :time="List.updated_at">
            </List>
          </div>
        </div>
        <!-- custom infinite spinner -->
        <svg class="spinner" style="fill: #AAA;" slot="infinite-spinner" viewBox="0 0 64 64">
          <g>
            <circle cx="16" cy="32" stroke-width="0" r="3">
              <animate attributeName="fill-opacity" dur="750ms" values=".5;.6;.8;1;.8;.6;.5;.5" repeatCount="indefinite"></animate>
              <animate attributeName="r" dur="750ms" values="3;3;4;5;6;5;4;3" repeatCount="indefinite"></animate>
            </circle>
            <circle cx="32" cy="32" stroke-width="0" r="3.09351">
              <animate attributeName="fill-opacity" dur="750ms" values=".5;.5;.6;.8;1;.8;.6;.5" repeatCount="indefinite"></animate>
              <animate attributeName="r" dur="750ms" values="4;3;3;4;5;6;5;4" repeatCount="indefinite"></animate>
            </circle>
            <circle cx="48" cy="32" stroke-width="0" r="4.09351">
              <animate attributeName="fill-opacity" dur="750ms" values=".6;.5;.5;.6;.8;1;.8;.6" repeatCount="indefinite"></animate>
              <animate attributeName="r" dur="750ms" values="5;4;3;3;4;5;6;5" repeatCount="indefinite"></animate>
            </circle>
          </g>
        </svg>
      </scroller>
    </div>
    <my-big v-model="showValue" :title="'big.title'"></my-big>
  </div>
</template>
<script>
  import List from 'COMPONENT/v-list/follow'
  import myBig from 'COMPONENT/v-list/big'
  import API from 'API'
  export default {
    data: () => ({
      title: '',
      loading: false,
      showValue: false,
      count: 0,
      novelty: []
    }),
    components: {List, myBig},
    mounted () {
    },
    methods: {
      refresh (done) {
        setTimeout(() => {
          console.log('refresh')
          let since = 0
          API.UsersList(since)
          .then(res => {
            this.novelty = res
            done()
            this.$refs.refresh.play()
          }, () => {
            done(true)
          })
        }, 1500)
      },
      infinite (done) {
        setTimeout(() => {
          console.log(this.novelty.length > 0 && this.novelty.length + 10)
          let since = this.novelty.length === 0 ? 0 : this.novelty[this.novelty.length - 1].id
          API.UsersList(since)
          .then(res => {
            if (res) {
              this.novelty = this.novelty.concat(res)
              done()
              this.$refs.refresh.play()
            } else {
              done(true)
            }
          }, () => {
            done(true)
          })
        }, 1500)
      },
      bigs () {
        this.showValue = true
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  @import '../../assets/scss/mixin.scss';
  .nothing{
    position: absolute;
    left: 50%;
    top: 50%;
    width: size(100);
    height: size(100);
    margin-left: size(-50);
    margin-top: size(-100);
    svg{
      color: #586069;
      width: 100%;
      height: 100%;
    }
  }
  .List{
    width: 100%;
    height: 100%;
    position: relative;
    .main{
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      overflow: hidden;
      .row{
        padding: size(4);
        box-sizing: border-box;
        width: size(120);
        height: size(120);
        // height: size(375/3);
        display: inline-block;
        overflow: hidden;
        .paper{
          width: 100%;
          overflow: hidden;
          img{
            position: relative;
            z-index: -1;
          }
        }
        .avatar{
          @include font-size(12px);
          font-weight: bold;
        }
      }
    }
    ._v-container>._v-content>.loading-layer .spinner-holder .spinner, ._v-container>._v-content>.pull-to-refresh-layer .spinner-holder .spinner{
      width: 1rem;
      height: 1rem;
    }
  }
</style>
