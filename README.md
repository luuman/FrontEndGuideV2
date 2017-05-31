# Vue 重写前端导航

[Demo](https://luuman.github.io/FrontEndGuideV2/FrontEndGuide/#/Index )
[github地址](https://github.com/luuman/FrontEndGuideV2)
![](https://segmentfault.com/img/bVOpHN?w=2556&h=1302)
## 思路
时隔之前开发的前端导航已有很长一段时间了。为什么改版，一则：平时适用于个人，有很多要吐槽的地方，由于是纯文字，辨识度低。个人是个夜猫子，喜欢暗褐色。欢迎伙计们前来吐槽！
### 环境
使用vue-cli，对其进行了部分修改
#### 全局路径
浏览很多项目的项目结构，配置全局路径，无需关注目录结构直接写。
```
resolve: {
  extensions: ['.js', '.vue', '.json'],
  alias: {
    'vue$': 'vue/dist/vue.esm.js',
    '@': resolve('src'),
    'SRC': path.resolve(__dirname, '../src'),
    'UTIL': path.resolve(__dirname, '../src/utils'),
    'API': path.resolve(__dirname, '../src/apis'),
    'ROUTE': path.resolve(__dirname, '../src/routes'),
    'FILTER': path.resolve(__dirname, '../src/filters'),
    'MIXIN': path.resolve(__dirname, '../src/mixins'),
    'ASSET': path.resolve(__dirname, '../src/assets'),
    'VIEW': path.resolve(__dirname, '../src/views'),
    'VUEX': path.resolve(__dirname, '../src/vuexs'),
    'COMPONENT': path.resolve(__dirname, '../src/components')
  }
},
```
### 布局
布局使用flexbox

### 导航navbar

通过document.querySelectorAll('h2')，遍历网页中H2元素，生成导航。我很懒，谢谢。
```
var nav = navbar({
  elementList: document.querySelectorAll('h2'),
  // elementList: document.querySelectorAll('h1, h2'),
  makeNavListItem: makeNavListItem,
  debounceTime: 100
})
```

```
function createAndAppendListItems (navList, elementList, makeNavListItem) {
  var pairs = []
  var element
  var li
  for (var i = 0, len = elementList.length; i < len; i++) {
    element = elementList[i]
    li = makeNavListItem(element)
    navList.appendChild(li)
    pairs.push({ element: element, navElement: li })
  }

  return pairs
}
```

### 没有图片信息的数据显示
```
<div v-if="!List.Img" class="paper bg-box" :style="'background-color: #' + color[Math.floor(Math.random() * color.length)]">
   <i>{{List.Name.charAt(0)}}</i>
</div>
<div v-else v-lazy:background-image="List.Img" class="paper bg-box">
```

### 编辑页面
点击弹窗进行编辑，用了个高斯模糊，实际是对内容进行模糊。

#### 编辑页面修改
bug对数据的处理问题
[编辑页面](https://luuman.github.io/FrontEndGuideV2/FrontEndGuide/#/Index?type=copy )