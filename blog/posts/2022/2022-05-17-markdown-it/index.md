---
cover: /2022-05-17-14-09-00.png
tinyCover: /cover/2022-05-17-14-09-00.png
coverWidth: 736
coverHeight: 883
coverPrimary: 1a0506
coverSecondary: e5faf9
tag:
- markdown
---

# markdown 美化之 markdown-it-container 配置

```ts {1,2}
import MarkdownItContainer from 'markdown-it-container'
const tipIcon = '<svg  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" id="footer-sample-full" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" class="iconify iconify--material-symbols container-icon"><path fill="currentColor" d="M12 17q.425 0 .713-.288Q13 16.425 13 16v-4q0-.425-.287-.713Q12.425 11 12 11t-.712.287Q11 11.575 11 12v4q0 .425.288.712q.287.288.712.288Zm0-8q.425 0 .713-.288Q13 8.425 13 8t-.287-.713Q12.425 7 12 7t-.712.287Q11 7.575 11 8t.288.712Q11.575 9 12 9Zm0 12.925h-.25q-.125 0-.225-.05q-3.275-1.025-5.4-4.063Q4 14.775 4 11.1V6.375q0-.625.363-1.125q.362-.5.937-.725l6-2.25q.35-.125.7-.125t.7.125l6 2.25q.575.225.938.725q.362.5.362 1.125V11.1q0 3.675-2.125 6.712q-2.125 3.038-5.4 4.063q-.125.05-.475.05Z"></path></svg>'
const warningIcon = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" id="footer-sample-full" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 32 32" class="iconify iconify--carbon container-icon"><path fill="none" d="M16 26a1.5 1.5 0 1 1 1.5-1.5A1.5 1.5 0 0 1 16 26Zm-1.125-5h2.25v-9h-2.25Z"></path><path fill="currentColor" d="M16.002 6.171h-.004L4.648 27.997l.003.003h22.698l.002-.003ZM14.875 12h2.25v9h-2.25ZM16 26a1.5 1.5 0 1 1 1.5-1.5A1.5 1.5 0 0 1 16 26Z"></path><path fill="currentColor" d="M29 30H3a1 1 0 0 1-.887-1.461l13-25a1 1 0 0 1 1.774 0l13 25A1 1 0 0 1 29 30ZM4.65 28h22.7l.001-.003L16.002 6.17h-.004L4.648 27.997Z"></path></svg>'
const dangerIcon = '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" id="footer-sample-full" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" class="iconify iconify--ic container-icon"><path fill="currentColor" d="M14.9 3H9.1c-.53 0-1.04.21-1.42.59l-4.1 4.1C3.21 8.06 3 8.57 3 9.1v5.8c0 .53.21 1.04.59 1.41l4.1 4.1c.37.38.88.59 1.41.59h5.8c.53 0 1.04-.21 1.41-.59l4.1-4.1c.38-.37.59-.88.59-1.41V9.1c0-.53-.21-1.04-.59-1.41l-4.1-4.1c-.37-.38-.88-.59-1.41-.59zm.64 12.54a.996.996 0 0 1-1.41 0L12 13.41l-2.12 2.12a.996.996 0 1 1-1.41-1.41L10.59 12L8.46 9.88a.996.996 0 1 1 1.41-1.41L12 10.59l2.12-2.12a.996.996 0 1 1 1.41 1.41L13.41 12l2.12 2.12c.4.39.4 1.03.01 1.42z"></path></svg>'
const containerPluginOptions = () => {
  return {
    render: (tokens: Record<string, any>, idx: string | number) => {
      const token = tokens[idx]
      let type = 'tip'
      if (token.nesting === 1) {
        const text = token.info.trim()
        const match = text.match(/^(.*)\s+(.*)$/)
        let title = ''
        if (match) {
          title = match[2]
          type = match[1] || 'tip'
        }
        else {
          type = text.trim()
          title = type === 'tip' ? '提示' : type === 'warning' ? '警告' : '错误'
        }
        const icon = type === 'tip' ? tipIcon : type === 'warning' ? warningIcon : dangerIcon
        return `<div class="custom-container ${type}">${title ? `<p class="custom-container-title ">${icon}${title}</p>` : ''}\n`
      }
      return '</div>'
    },
  }
}

md.use(MarkdownItContainer, '', containerPluginOptions())
  .use(MarkdownItContainer, 'danger', containerPluginOptions())
  .use(MarkdownItContainer, 'warning', containerPluginOptions())
  .use(MarkdownItContainer, 'tip', containerPluginOptions()).use(MarkdownItContainer, 'important', containerPluginOptions())
```

`.d.ts` 配置 `declare module 'markdown-it-container';`

图标来源<https://iconify.design/>

图标css

```scss {4,6-9}
.md{
  // container
  .custom-container {
    border: 0;
    border-top: 4px solid var(--c-tip);
    position: relative;
    margin: 1rem 0;
    padding: 0.1rem 1.5rem;
    &:before {
      box-shadow: 0px 5px 10px 0 rgb(0 0 0 / 50%);
      content: "";
      position: absolute;
      top: -4px;
      width: 100%;
      left: 0;
      height: 1px;
      overflow: hidden;
    }
    &.tip {
      border-top: 4px solid var(--c-tip);
      background-color: var(--c-tip-bg);
      color: var(--c-tip-text);
    }
    &.danger {
      border-top: 4px solid var(--c-danger);
      background-color: var(--c-danger-bg);
      color: var(--c-danger-text);
    }
    &.warning {
      border-top: 4px solid var(--c-warning);
      background-color: var(--c-warning-bg);
      color: var(--c-warning-text);
    }
    // container icons
    .container-icon {
      width: 1.2em;
      height: 1.2em;
      display: inline-block;
      vertical-align: text-bottom;
      margin-left: -1.2em;
      &.iconify--material-symbols {
        color: var(--c-tip);
      }
      &.iconify--carbon {
        color: var(--c-warning);
      }
      &.iconify--ic {
        color: var(--c-danger);
      }
    }
    .custom-container-title {
      font-weight: 600;
      margin-bottom: 0;
      font-size: 1em;
    }
  }
}
```

## 部分样式美化可参考

<https://saruwakakun.com/html-css/reference/css-sample>

## 效果展示

```md
:::tip
我是提示
:::

:::danger 禁止使用
我是禁止
:::

:::warning
我是警告
:::
```

:::tip
我是提示
:::

:::danger 禁止使用
我是禁止
:::

:::warning
我是警告
:::


:::info
我是说明
:::