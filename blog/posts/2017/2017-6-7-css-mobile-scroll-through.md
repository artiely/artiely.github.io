---
title: 移动端滚动穿透解决办法
tag:
  - css
  - javaScript
author: Artiely
date: 2017-6-7
cover: /2022-05-14-21-23-04.png
base64: c0cad6
tinyCover: /cover/2022-05-14-21-23-04.png
coverWidth: 736
coverHeight: 1040
coverPrimary: 2c2444
coverSecondary: d3dbbb

---


# 移动端滚动穿透解决办法

## 问题

在滚动模态框里的内容的时候，背景（模态框下面的内容）也在跟着滚动

## css 之 overflow: hidden

```css
.modal-open {
  &,
  body {
    overflow: hidden;
    height: 100%;
  }
}
```

页面弹出层上将 .modal-open 添加到 html 上，禁用 html 和 body 的滚动条，但是这个方案有两个缺点：

- 由于 html 和 body 的滚动条都被禁用，弹出层后页面的滚动位置会丢失，需要用 js 来还原。
- 页面的背景还是能够有滚的动的效果

## js 之 touchmove + preventDefault

```js
modal.addEventListener(
  'touchmove',
  (e) => {
    e.preventDefault()
  },
  false,
)
```

这样用 js 阻止滚动后看起来效果不错了，但是也有一个缺点：弹出层里不能有其它需要滚动的内容（如大段文字需要固定高度，显示滚动条也会被阻止）

## css 结合 js

```css
body.modal-open {
  position: fixed;
  width: 100%;
}
```

如果只是上面的 css，滚动条的位置同样会丢失。
所以如果需要保持滚动条的位置需要用 js 保存滚动条位置关闭的时候还原滚动位置。

```js
/**
 * ModalHelper helpers resolve the modal scrolling issue on mobile devices
 * https://github.com/twbs/bootstrap/issues/15852
 * requires document.scrollingElement polyfill https://github.com/yangg/scrolling-element
 */
const ModalHelper = (function(bodyCls) {
  let scrollTop
  return {
    afterOpen() {
      scrollTop = document.scrollingElement.scrollTop
      document.body.classList.add(bodyCls)
      document.body.style.top = `${-scrollTop}px`
    },
    beforeClose() {
      document.body.classList.remove(bodyCls)
      // scrollTop lost after set position:fixed, restore it back.
      document.scrollingElement.scrollTop = scrollTop
    },
  }
})('modal-open')
```

注意兼容 document.scrollingElement

## 看一下其他框架的处理办法

### vant 有赞

```js
 // 打开的时候给body动态添加css 关闭的时候移除样式
 open() {
      /* istanbul ignore next */
      if (this.$isServer || this.opened) {
        return;
      }

      // 如果属性中传入了`zIndex`，则覆盖`context`中对应的`zIndex`
      if (this.zIndex !== undefined) {
        context.zIndex = this.zIndex;
      }

      this.opened = true;
      this.renderOverlay();

      if (this.lockScroll) {
        on(document, 'touchstart', this.touchStart);
        on(document, 'touchmove', this.onTouchMove);
        if (!context.lockCount) {
          document.body.classList.add('van-overflow-hidden');
        }
        context.lockCount++;
      }
    },

    close() {
      if (!this.opened) {
        return;
      }

      if (this.lockScroll) {
        context.lockCount--;
        off(document, 'touchstart', this.touchStart);
        off(document, 'touchmove', this.onTouchMove);
        if (!context.lockCount) {
          document.body.classList.remove('van-overflow-hidden');
        }
      }

      this.opened = false;
      manager.close(this._popupId);
      this.$emit('input', false);
    },
```

### mand-mobile

```js
// 滚动的时候阻止默认事件 排除的元素及子节点继续执行绑定事件
$_preventScroll(isBind) {
      const handler = isBind ? 'addEventListener' : 'removeEventListener'
      const masker = this.$el.querySelector('.md-popup-mask')
      const boxer = this.$el.querySelector('.md-popup-box')
      masker && masker[handler]('touchmove', this.$_preventDefault, false)
      boxer && boxer[handler]('touchmove', this.$_preventDefault, false)
      this.$_preventScrollExclude(isBind)
    },
    $_preventScrollExclude(isBind, preventScrollExclude) {
      const handler = isBind ? 'addEventListener' : 'removeEventListener'
      preventScrollExclude = preventScrollExclude || this.preventScrollExclude
      const excluder =
        preventScrollExclude && typeof preventScrollExclude === 'string'
          ? this.$el.querySelector(preventScrollExclude)
          : preventScrollExclude
      excluder && excluder[handler]('touchmove', this.$_stopImmediatePropagation, false)
    },
    $_preventDefault(event) {
      event.preventDefault()
    },
    $_stopImmediatePropagation(event) {
      /* istanbul ignore next */
      event.stopImmediatePropagation()
    },
```