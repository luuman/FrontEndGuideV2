<template>
  <div ref="navs" class="view">
    <!-- nav -->
    <div ref="left" class="left blur"></div>
    <div ref="right" class="right blur">
      <!-- Copy -->
      <div class="type">
        <div class="comment"><v-svg :data="'#icon-liuyan'"></v-svg></div>
        <div v-if="type" class="copy" @click="copy"><v-svg :data="'#icon-shengcheng'"></v-svg></div>
        <div v-if="type" class="input"><input ref="Json" type="text" name="" :value="JSON.stringify(novelty)"></div>
      </div>
      <!-- main -->
      <div class="T1" v-for="(T1,K1) in novelty">
        <h1 class="pageT1">
          <v-svg :data="'#icon-'+ T1.T1Name"></v-svg>{{T1.pageT1}}
        </h1>
        <div class="T2" v-for="(T2,K2) in T1.pageC1">
          <h2 class="pageT2">
            <v-svg :data="'#icon-'+ T2.T2Name"></v-svg>{{T2.pageT2}}
          </h2>
          <div class="main">
            <v-list
              class="lists"
              :New="List.New"
              :Name="List.Name"
              :Title="List.Title"
              :Img="List.Img"
              :Href="List.Href"
              :Num="Number(List.Num)"
              :key="Number(List.Num)"
              :style="'order:' + T2.pageC2[K3].Num"
              v-for="(List,K3) in T2.pageC2"
              @click.native="onCopy(K1,K2,K3,List)">
            </v-list>
            <div v-if="type" class="add" @click="addList(K1,K2,T2.pageC2)">
              <div class="list"><v-svg :data="'#icon-zengjia'"></v-svg></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Editor -->
    <com-copy
      v-model="showValue"
      :New="Copy.New"
      :Name="Copy.Name"
      :Title="Copy.Title"
      :Img="Copy.Img"
      :Href="Copy.Href"
      :K1="Copy.K1"
      :K2="Copy.K2"
      :K3="Copy.K3"
      :Num="Number(Copy.Num)">
    </com-copy>
  </div>
</template>
<script>
  import navbar from 'UTIL/navbar'
  function makeNavListItem (element) {
    var li = document.createElement('li')
    var label = document.createElement('span')
    var spot = document.createElement('span')
    label.className = 'nav-label'
    label.innerHTML = element.innerHTML
    spot.className = 'nav-spot'

    li.appendChild(label)
    li.appendChild(spot)

    li.className = 'nav-element'

    li.addEventListener('click', function () {
      element.scrollIntoView(true)
    })
    return li
  }
  import comCopy from 'COMPONENT/v-list/copy'
  import vList from 'COMPONENT/v-list/list'
  import API from 'API'
  export default {
    data: () => ({
      novelty: [],
      type: false,
      showValue: false,
      Copy: {
        Href: '',
        Name: '',
        New: '',
        Img: '',
        Title: '',
        K1: 0,
        K2: 0,
        K3: 0,
        Num: ''
      },
      title: ''
    }),
    components: {comCopy, vList},
    mounted () {
      if (this.$route.query.type === 'copy') {
        this.type = true
      }
      API.List()
      .then(res => {
        this.novelty = res
      }, (res) => {
      })
    },
    updated () {
      var nav = navbar({
        elementList: document.querySelectorAll('h2'),
        makeNavListItem: makeNavListItem,
        debounceTime: 100
      })
      this.$refs.left.innerHTML = ''
      this.$refs.left.appendChild(nav)
      console.log(this.$refs.left.offsetWidth)
      this.$refs.right.style.marginLeft = this.$refs.left.offsetWidth + 'px'
      this.$refs.left.style.left = 0
    },
    computed: {
    },
    methods: {
      onCopy (K1, K2, K3, content) {
        if (!this.type) {
          window.open(content.Href)
          return
        }
        console.log('onCopy')
        this.Copy = {
          Href: content.Href,
          Name: content.Name,
          New: content.New,
          Img: content.Img,
          Title: content.Title,
          K1: K1,
          K2: K2,
          K3: K3,
          Num: content.Num
        }
        this.showValue = true
      },
      setList (K1, K2, K3, content) {
        this.novelty[K1].pageC1[K2].pageC2[K3] = content
      },
      addList (K1, K2, content) {
        this.novelty[K1].pageC1[K2].pageC2 = this.novelty[K1].pageC1[K2].pageC2.concat({'Name': 'Name', 'Title': 'Title', 'Href': '', 'Num': '99', 'Img': ''})
      },
      copy () {
        this.$refs.Json.select()
        document.execCommand('Copy')
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  @import '../../assets/scss/mixin.scss';
  @media (min-width: 768px){}
  .view{
    display: flex;
  }
  .right{
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    width: 100%;
    box-sizing: border-box;
    @media (max-width: 768px){
      margin-left: 0;
    }
    .pageT1{
      color: $font1;
      background-color: $bgt1;
      // border: 1px solid #c6daff;
      padding: 15px;
      margin-bottom: 20px;
      border-radius: 4px;
      // max-width: 1200px;
      margin: 20px auto;
      font-size: 14px;
      box-shadow: 0 4px 16px 1px rgba(0, 0, 0, 0.05);
    }
    .pageT1, .pageT2{
      padding-left: 10px;
      svg{
        padding-right: 10px;
      }
    }
    .T2{
      background: $bg2;
      margin-bottom: 20px;
      border: 1px solid transparent;
      border-radius: 4px;
      // max-width: 1200px;
      // margin: 20px auto;
      // padding-bottom: 20px;
      box-shadow: 0 4px 16px 1px rgba(0, 0, 0, .05);
      .pageT2{
        padding: 10px;
        border-radius: 4px 4px 0 0;
      }
    }
  }
  .main{
    display: flex;
    flex-wrap: wrap;
    // padding: 10px;
    .add{
      order: 100;
      width: 117px;
      .list{
        width: 87px;
        height: 87px;
        display: flex;
        align-items: center;
        justify-content: center;
        svg{
          width: 40px;
          height: 40px;
        }
      }
    }
  }
  .type{
    position: fixed;
    right: 10px;
    bottom: 10px;
    z-index: 999;
    .copy,.comment{
      display: flex;
      border-radius: 50%;
      background: #FFF;
      width: 40px;
      height: 40px;
      align-items: center;
      justify-content: center;
      margin-top: 10px;
      svg{
        color: $bg3;
      }
    }
    .input{
      position: fixed;
      width: 100%;
      background: $bgc;
      padding: 2px;
      right: 0;
      bottom: 0;
      input{
        width: 100%;
        color: $font1;
        background: transparent;
        border: 0;
      }
    }
  }
</style>
