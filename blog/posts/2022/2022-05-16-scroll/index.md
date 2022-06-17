---
tag:
  - vue
  - js
  - vueuse
  - typescript
cover: /2022-05-16-18-47-31.png
tinyCover: /cover/2022-05-16-18-47-31.png
coverWidth: 564
coverHeight: 1002
coverPrimary: c2a88f
coverSecondary: 3d5770

---

# 美化你的滚动条

实现步骤

- 首先是样式的修改
- 滚动开始和结束的监听
- 动画的实现

效果如下

```shell
##############################################################################################
```

首先是样式的修改

```css
/* 设置滚动条整体部分的样式 */
::-webkit-scrollbar {
  width: 0px;
  height: 6px;
}

// /* 滚动槽--外层轨道 */
::-webkit-scrollbar-track {
  background: transparent;
  opacity: 0
}

/* 内层轨道（不包含滚动块部分） */
::-webkit-scrollbar-track-piece {
  opacity: 0;   /* 透明度设置为全透明，使得滚动条背景色为网页颜色 */
}

// /* 滚动条滑块 */
::-webkit-scrollbar-thumb {
  border-radius: 3px;
  // background: rgba(92, 110, 130, 0.1);
}

/* 滚动条按钮 */
::-webkit-scrollbar-button {
  display: none;
}

/* 横向滚动条和纵向滚动条相交处尖角的颜色 */
::-webkit-scrollbar-corner {
  background-color: transparent;
}
```

- 滑动式高亮，结束滑动时取消高亮,这里用的是vue的 状态驱动的动态 CSS [v-bind](https://v3.cn.vuejs.org/api/sfc-style.html#%E7%8A%B6%E6%80%81%E9%A9%B1%E5%8A%A8%E7%9A%84%E5%8A%A8%E6%80%81-css)

- 加入动画，在尝试css动画不支持的情况下使用js动态修改样式

完整逻辑如下包含

- 如何判断滚动开始和结束
- 如何useRafFn控制动画

```html
<script setup lang="ts">
import { useRafFn } from '@vueuse/core'

let bg = $ref('rgba(92, 110, 130, 0.05)')
let scrollOffset = $ref(0)
let timer: number
let scrollEndValue = $ref(0)
let opacity = $ref(0.5)
const { pause, resume } = useRafFn(() => {
  opacity -= 0.01
  bg = `rgba(92, 110, 130, ${opacity})`
  if (opacity <= 0.05)
    pause()
})
pause()
watch(() => [scrollOffset, scrollEndValue], ([newY, oldY], [endV, endOV]) => {
  if (newY === endV) { bg = 'rgba(92, 110, 130, 0.05)' }
  else {
    opacity = 0.5
    resume()
  }
})
onMounted(() => {
  document.querySelectorAll('.md pre[class*=language-]').forEach((pre) => {
    pre.addEventListener('scroll', () => {
      scrollOffset = pre.scrollLeft
      clearTimeout(timer)
      timer = window.setTimeout(() => {
        scrollEndValue = pre.scrollLeft
      }, 1000)
    })
  })
})
</script>
<style lang="scss">

.md pre[class*=language-] {
  &::-webkit-scrollbar-thumb {
    background: v-bind(bg);
  }
}
</style>
```
