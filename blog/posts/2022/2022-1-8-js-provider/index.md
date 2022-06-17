---
tag:
  - js
cover: /2022-05-11-09-18-53.png
tinyCover: /cover/2022-05-11-09-18-53.png
coverWidth: 564
coverHeight: 1252

---

# 提供者模式

在某些情况下，我们希望为应用程序中的许多（如果不是全部）组件提供可用数据。虽然我们可以使用 将数据传递给组件`props`，但如果应用程序中的几乎所有组件都需要访问 props 的值，这可能很难做到。

我们经常会得到一个叫做_prop Drill 的_东西，当我们将 props 传递到组件树的很远的地方时就是这种情况。重构依赖于 props 的代码几乎是不可能的，而且很难知道某些数据的来源。

## 优点

提供者模式/上下文 API 使得将数据传递给许多组件成为可能，而无需手动通过每个组件层传递数据。

它降低了重构代码时意外引入错误的风险。以前，如果我们想要重命名一个属性，我们必须在整个使用这个值的应用程序中重命名这个属性。

我们不再需要处理 属性地狱（类似回调地狱），这可以被视为一种反模式。以前，可能很难理解应用程序的数据流，因为某些 prop 值的来源并不总是很清楚。使用 Provider 模式，我们不再需要将 props 不必要地传递给不关心这些数据的组件。

使用 Provider 模式可以很容易地保持某种全局状态，因为我们可以让组件访问这种全局状态。

* * *

## 缺点

在某些情况下，过度使用提供者模式会导致性能问题。所有 _使用_ 上下文的组件都会在每次状态更改时重新渲染。

但是我们应该规避这种滥用的行为，一般 Provider 用于提供一些全局配置避免频繁的更改导致不必要的渲染。为了确保组件不使用包含可能更新的不必要值的提供程序，您可以为每个单独的用例创建多个提供者。

***

假设我们有一个`App`包含某些数据的组件。远离组件树，我们有一个`ListItem`，`Header`和`Text`组件都需要这些数据。为了将这些数据传递给这些组件，我们必须通过多层组件传递它。

在我们的代码库中，它看起来像下面这样：

```js
function App() {
  const data = { ... }

  return (
    <div>
      <SideBar data={data} />
      <Content data={data} />
    </div>
  )
}

const SideBar = ({ data }) => <List data={data} />
const List = ({ data }) => <ListItem data={data} />
const ListItem = ({ data }) => <span>{data.listItem}</span>

const Content = ({ data }) => (
  <div>
    <Header data={data} />
    <Block data={data} />
  </div>
)
const Header = ({ data }) => <div>{data.title}</div>
const Block = ({ data }) => <Text data={data} />
const Text = ({ data }) => <h1>{data.text}</h1>
```

以这种方式传递属性会变得非常混乱。如果我们以后想重命名`data`属性，我们必须在所有组件中重命名它。您的应用程序越大，属性地狱就越棘手。

我们可以跳过不需要使用这些数据的所有组件层，这将是最佳选择。我们需要一些东西，让需要访问的组件能够`data`直接访问它的值，而不依赖于属性传递。

这就是**提供者模式**可以帮助我们的地方！使用提供者模式，我们可以使数据可用于多个组件。我们可以将所有组件包装在一个`Provider`. Provider 是由一个`Context`对象提供给我们的高阶组件。我们可以使用`createContext` React 为我们提供的方法创建一个 Context 对象。

Provider 接收一个`value`属性，其中包含我们要传递的数据。包装在此提供程序中的 _所有_ 组件都可以访问该`value`属性的值。

```js
const DataContext = React.createContext()

function App() {
  const data = { ... }

  return (
    <div>
      <DataContext.Provider value={data}>
        <SideBar />
        <Content />
      </DataContext.Provider>
    </div>
  )
}
```

我们不再需要手动将`data`属性传递给每个组件！那么，如何才能在`ListItem`，`Header`和`Text`组件访问的价值`data`？

`data`通过使用`useContext`hooks，每个组件都可以访问, 。在这种情况下，此hooks接收`data`具有引用的上下文`DataContext`。这个`useContext`hooks让我们可以读取和写入数据到上下文对象。

```js
const DataContext = React.createContext();

function App() {
  const data = { ... }

  return (
    <div>
      <SideBar />
      <Content />
    </div>
  )
}

const SideBar = () => <List />
const List = () => <ListItem />
const Content = () => <div><Header /><Block /></div>


function ListItem() {
  const { data } = React.useContext(DataContext);
  return <span>{data.listItem}</span>;
}

function Text() {
  const { data } = React.useContext(DataContext);
  return <h1>{data.text}</h1>;
}

function Header() {
  const { data } = React.useContext(DataContext);
  return <div>{data.title}</div>;
}
```

不使用该`data`值的组件根本不需要处理`data`。我们不再需要担心通过不需要 props 值的组件将 props 向下传递几个级别，这使得重构变得更加容易。

* * *

Provider 模式对于共享全局数据非常有用。提供者模式的一个常见用例是与许多组件共享主题 UI 状态。

我们希望用户能够通过切换开关在亮模式和暗模式之间切换。当用户从暗模式切换到亮模式（反之亦然）时，背景颜色和文本颜色应该会改变！我们可以将组件包装在 a 中`ThemeProvider`，并将当前主题颜色传递给提供者，而不是将当前主题值传递给每个组件。

```js
export const ThemeContext = React.createContext()

const themes = {
  light: {
    background: '#fff',
    color: '#000',
  },
  dark: {
    background: '#171717',
    color: '#fff',
  },
}

export default function App() {
  const [theme, setTheme] = useState('dark')

  function toggleTheme() {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  const providerValue = {
    theme: themes[theme],
    toggleTheme,
  }

  return (
    <div className={`App theme-${theme}`}>
      <ThemeContext.Provider value={providerValue}>
        <Toggle />
        <List />
      </ThemeContext.Provider>
    </div>
  )
}
```

由于`Toggle`和`List`组件都包装在`ThemeContext`组件中，因此我们可以访问`value`给提供的`theme`和`toggleTheme`。

在`Toggle`组件中，我们可以使用该`toggleTheme`功能来相应地更新主题。

```js
import React, { useContext } from 'react'
import { ThemeContext } from './App'

export default function Toggle() {
  const theme = useContext(ThemeContext)

  return (
    <label className="switch">
      <input type="checkbox" onClick={theme.toggleTheme} />
      <span className="slider round" />
    </label>
  )
}
```

该`List`组件本身不关心主题的当前值。但是，`ListItem`组件可以！我们可以直接在`ListItem`设置`theme`。

```js
import React, { useContext } from 'react'
import { ThemeContext } from './App'

export default function TextBox() {
  const theme = useContext(ThemeContext)

  return <li style={theme.theme}>...</li>
}
```

我们不必将任何数据传递给不关心主题当前值的组件。

* * *

## Hooks

我们可以创建一个钩子来为组件提供上下文。不必在每个组件中导入和上下文`useContext`，我们可以使用一个钩子来返回我们需要的上下文。

```js
function useThemeContext() {
  const theme = useContext(ThemeContext)
  return theme
}
```

为了确保它是一个有效的主题，如果`useContext(ThemeContext)`返回一个假值，让我们抛出一个错误。

```js
function useThemeContext() {
  const theme = useContext(ThemeContext)
  if (!theme)
    throw new Error('useThemeContext must be used within ThemeProvider')

  return theme
}
```

`ThemeContext.Provider`我们可以创建一个 HOC(高阶组件) 来包装组件以提供其值，而不是直接用组件包装组件。这样，我们可以将上下文逻辑与渲染组件分离，从而提高提供者的可重用性。

```js
function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('dark')

  function toggleTheme() {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  const providerValue = {
    theme: themes[theme],
    toggleTheme,
  }

  return (
    <ThemeContext.Provider value={providerValue}>
      {children}
    </ThemeContext.Provider>
  )
}

export default function App() {
  return (
    <div className={`App theme-${theme}`}>
      <ThemeProvider>
        <Toggle />
        <List />
      </ThemeProvider>
    </div>
  )
}
```

每个需要访问`ThemeContext`的组件,现在都可以简单地使用`useThemeContext`钩子。

```js
export default function TextBox() {
  const theme = useThemeContext()

  return <li style={theme.theme}>...</li>
}
```

通过为不同的上下文创建钩子，很容易将提供者的逻辑与呈现数据的组件分开。

* * *

## 🌰案例分析

Vue `provide / inject` [api的描述](https://vuejs.org/v2/api/#provide-inject)

例如[ant-desigon-vue](https://www.antdv.com/components/config-provider-cn/)的`ConfigProvider`组件
一般可以提供组件的全局配置比如国际化主题等。

```html
<template>
  <a-config-provider :get-popup-container="getPopupContainer">
    <app />
  </a-config-provider>
</template>
<script>
export default {
  methods: {
    getPopupContainer(el, dialogContext) {
      if (dialogContext)
        return dialogContext.getDialogWrap()

      else
        return document.body

    },
  },
}
</script>
```

一些库提供内置提供模式，我们可以在组件中使用这些值。一个很好的例子是[styled-components](https://styled-components.com/docs/advanced)。

> 理解这个例子不需要任何`styled-components`的经验。

styled-components 库`ThemeProvider`为我们提供了一个。每个 _styled-components_
都可以访问这个提供者的值！我们可以使用提供给我们的上下文 API，而不是自己创建上下文 API！

让我们使用相同的 List 示例，并将组件包装在`ThemeProvider`从`styled-component`库中导入的组件中。

```js
import { ThemeProvider } from 'styled-components'

export default function App() {
  const [theme, setTheme] = useState('dark')

  function toggleTheme() {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <div className={`App theme-${theme}`}>
      <ThemeProvider theme={themes[theme]}>
        <>
          <Toggle toggleTheme={toggleTheme} />
          <List />
        </>
      </ThemeProvider>
    </div>
  )
}
```

我们不会将内联`style`prop传递给`ListItem`组件，而是将其设为`styled.li`组件。由于它是一个样式化的组件，我们可以访问`theme`!

```js
import styled from 'styled-components'

export default function ListItem() {
  return (
    <Li>
      artiely
    </Li>
  )
}

const Li = styled.li`
  ${({ theme }) => `
     background-color: ${theme.backgroundColor};
     color: ${theme.color};
  `}
`
```

我们现在可以使用`ThemeProvider`!

* * *
