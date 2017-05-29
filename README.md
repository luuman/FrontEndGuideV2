# Vue 重写前端导航

[Demo]('http://luuman.github.io/FrontEndGuide/V2/dist/index.html')

## 思路
时隔之前开发的前端导航已有很长一段时间了。为什么改版，一则：平时适用于个人，有很多要吐槽的地方，由于是纯文字，辨识度低。个人是个夜猫子，喜欢暗褐色。欢迎伙计们前来吐槽！

### 布局
布局使用flexbox

### 导航
通过document.querySelectorAll('h2')，遍历网页中H2元素，生成导航。我很懒，谢谢。
```
function createAndAppendListItems (navList, elementList, makeNavListItem) {
  var pairs = []
  var element
  var li

  // Create list elements
  for (var i = 0, len = elementList.length; i < len; i++) {
    element = elementList[i]
    // console.log(element)
    li = makeNavListItem(element)

    navList.appendChild(li)

    pairs.push({ element: element, navElement: li })
  }

  return pairs
}
```
### 

### 编辑页面
点击弹窗进行编辑，用了个高斯模糊，实际是对内容进行模糊。
[]('http://luuman.github.io/FrontEndGuide/V2/dist/index.html?type=copy' )