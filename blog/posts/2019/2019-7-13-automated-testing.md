---
tag:
  - mocha
  - jest
  - AVA
  - karma
  - nightmare
author: Artiely
date: 2019-7-13
cover: /2022-05-14-22-04-40.png
base64: 00a1d8
tinyCover: /cover/2022-05-14-22-04-40.png
coverWidth: 564
coverHeight: 960
coverPrimary: 3b3938
coverSecondary: c4c6c7

---


# 自动化测试

## 介绍

在前端界，浏览器兼容性是让工程师们头疼的问题，对于经验丰富的人来说，很清楚浏览器有哪些坑，但是对于大部分程序员，最可怕的是代码明明在这个浏览器运行得很好，但是到了另一个浏览器中就不能正常运行了。对于这部分的程序员，保障代码能正常运行的方法便是能尽早发现问题，然后将其解决。

**为什么需要自动化测试？**

项目经过不断的开发，最终肯定会趋于稳定，在**适当的时机下**引入自动化测试能及早发现问题，**保证产品的质量**。

测试作为完整的开发流程中最后的一环，是保证产品质量重要的一环。而前端测试一般在产品开发流程中属于偏后的环节，在整个开发架构中属于较高层次，前端测试更加偏向于GUI的特性，因此前端的测试难度很大。

测试的目的：

- 有利于写出高质量的代码，尽早发现问题
- 有利于代码的扩展
- 有利于代码的维护

**学习路径：**

- 学习基础的概念，清晰测试不同的应用场景
- 学习不同的前端测试工具，了解如何进行选择
- 在项目中进行实践

**主要内容：**

- 介绍测试框架的分类
- 单元测试工具介绍：Mocha，Jest，AVA，Karma
- E2E测试工具介绍：Nightmare

**准备：**

- IDE vscode，node  LTS
- 包管理工具：yarn, cnpm

## 前端自动化测试

测试是一个庞大的主题，包括各种分类的测试，诸如黑盒测试/白盒测试、单元测试/集成测试/端到端测试等。通常程序员在测试自己的代码的时候用得最多的便是单元测试，但是因为测试也是需要代价，很多人是不喜欢写测试的，甚至是一点都不写。

那么是什么原因让大家不愿意写呢？

1. 不熟悉
2. 浪费时间
3. 知识不成体系
4. 团队氛围
5. 缺少实践

我们要从基础的东西学起，打消对测试的恐惧。

### 测试的分类

在多浏览器的自动化测试，我们多半是进行端到端的测试工作，一小部分是大粒度的单元测试。端到端测试测试模拟用户的行为。在 Web 应用程序中，他们会启动服务器，打开浏览器，模拟用户的行为进行点击、输入、提交等动作，断言浏览器中发生了特定的事情或者是得到了期待的结果，从而让我们相信功能可以正常的运行。

而单元测试根据代码单元的公共 API 运行它们。这些测试需要创建一个类的实例，使用特定的输入调用它的方法，断言被调用的方法达到了预期的效果。在下文中我们会看到这两种测试的实践，当然有时候区分度并不大，可能无法明显地区分哪些是端对端测试哪些是单元测试，有时候他们是混合起来的，不过只要记住我们的目标是保证功能可以正常运行救足够了。

按照软件工程自底而上的概念，前端测试一般分为单元测试（Unit Testing ）、集成测试（Integration Testing）和端到端测试（E2E Testing）。从下面的图可以看出，从底向上测试的复杂度将不断提高，另一方面测试的收益反而不断降低的。

![img](https://gitee.com/artiely/Figure-bed/raw/master/images/20200310105717.png)

> 关于软件测试分类，可见[软件测试的分类](#软件测试的分类)

### 测试工具对比

在进行项目实践前，很重要的一项工作是选择合适的技术栈。好比在前端开发时应该选择 React，Vue 还是 Angular 作为框架一样，前端的测试工作也需要选择一套技术栈。很多时候大家在制定技术栈时容易走偏，在选择技术框架时不是选择最合适的框架，而是选择最热门的框架。当然一定程度上热门的框架能反应其受欢迎程度，可能是因为其出众的优点，如较高的开发效率、高效的渲染特性或者是活跃的社区。在前端开发中，很容易有这样的感受，就是只要半个月没有关注业界的最新动态，就感觉恍若隔世，新的解决方案层出不穷，让人喘不过气。

经过几年的前端洗礼之后，就已经过了慌乱的年纪，再也不会盲目地追寻新技术，而转向关注技术背后解决的痛点，原理等。

![img](https://gitee.com/artiely/Figure-bed/raw/master/images/20200310105718.png)

#### 如何选择测试框架

测试框架基本上都做了一件事儿：

- 描述你要测试的东西
- 对其进行测试
- 判断是否符合预期

选择框架会考虑下面的点：

- 测试框架是否有简明的语法与文档。

  Mocha、Jasmine、Jest、AVA、Karma、Nightmare

- 断言(Assertions)：用于判断结果是否符合预期。有些框架需要单独的断言库。

  Should.js、chai、expect.js等等，断言库提供了很多语义化的方法来对值做各种各样的判断。当然也可以不用断言库，Node.js中也可以直接使用原生assert库。

- 适合 TDD / BDD：是否适合 测试驱动型 / 行为驱动型 的测试风格。

  > BDD(Bebavior Driven Developement，行为驱动测试)和TDD(Testing Driven Developement，测试驱动开发)

  BDD和TDD均有各自的适用场景，BDD一般更偏向于系统功能和业务逻辑的自动化测试设计，而TDD在快速开发并测试功能模块的过程中则更加高效，以快速完成开发为目的。下面我们看下BDD和TDD具体的特点：

  BDD的特点：

  - 从业务逻辑的角度定义具体的输入与预期输出，以及可衡量的目标；
  - 尽可能覆盖所有的测试用例情况；
  - 描述一系列可执行的行为，根据业务的分析来定义预期输出。例如，expect, should, assert；
  - 设定关键的测试通过节点输出提示，便于测试人员理解；
  - 最大程度的交付出符合用户期望的产品，避免输出不一致带来的问题。

  TDD的特点：

  - 需求分析，快速编写对应的输入输出测试脚本；
  - **仅在自动测试失败时才编写新代码**。
  - 重构去除不必要的依赖关系，然后重复测试，最终让程序符合所有要求。

- 异步测试：有些框架对异步测试支持良好。

- 使用的语言：大部分 js 测试框架使用 js。

- 用于特定目的：每个框架可能会擅长处理不同的问题。

  是要测试单个功能、单个组件、还是集成化测试？

  是要测试GUI逻辑、交互？

  是要测试非功能性指标？兼容性？

- 社区是否活跃。

#### 测试工具的类型

测试工具可分为以下功能。有些只为我们提供了一种功能，有些功能为我们提供了一种组合。

为了实现最灵活的集合功能，通常使用多种工具的组合。

- 提供UI界面或者CLI工具：（[Karma](https://karma-runner.github.io/)，[Jasmine](http://jasmine.github.io/)，[Jest](https://facebook.github.io/jest/)，[TestCafe](https://github.com/DevExpress/testcafe)，[Cypress](https://www.cypress.io/)）

  **CLI工具**会给出一系列测试，以及运行这些测试所需的各种配置和脚手架（运行什么浏览器，使用什么babel插件，如何格式化输出等）

- 提供测试框架（形成文件目录）：([Mocha](https://mochajs.org/), [Jasmine](http://jasmine.github.io/), [Jest](https://facebook.github.io/jest/), [Cucumber](https://github.com/cucumber/cucumber-js), [TestCafe](https://github.com/DevExpress/testcafe), [Cypress](https://www.cypress.io/))

- 提供断言：（[Chai](http://chaijs.com/)，[Jasmine](http://jasmine.github.io/)，[Jest](https://facebook.github.io/jest/)，[Unexpected](http://unexpected.js.org/)，[TestCafe](https://github.com/DevExpress/testcafe)，[Cypress](https://www.cypress.io/)）

  **断言函数**检查测试返回的结果是否符合预期

- 生成，展示测试结果（[Mocha](https://mochajs.org/)，[Jasmine](http://jasmine.github.io/)，[Jest](https://facebook.github.io/jest/)，[Karma](https://karma-runner.github.io/)，[TestCafe](https://github.com/DevExpress/testcafe)，[Cypress](https://www.cypress.io/)）

- 快照测试（[Jest](https://facebook.github.io/jest/)，[Ava](https://github.com/avajs/ava)）

  快照测试(snapshot testing)，测试 UI 或数据结构是否和之前完全一致，通常 UI 测试不在单元测试中

- 提供仿真（[Sinon](http://sinonjs.org/)，[Jasmine](http://jasmine.github.io/)，[enzyme](http://airbnb.io/enzyme/docs/api/)，[Jest](https://facebook.github.io/jest/)，[testdouble](https://testdouble.com/)）

  仿真(mocks, spies, and stubs)：获取方法的调用信息，模拟方法，模块，甚至服务器

- 生成测试覆盖率报告 ([Istanbul](https://gotwarlost.github.io/istanbul/), [Jest](https://facebook.github.io/jest/), [Blanket](http://blanketjs.org/))

- 提供类浏览器环境([Nightwatch](http://nightwatchjs.org/), [Nightmare](http://www.nightmarejs.org/), [Phantom](http://phantomjs.org/)**,** [Puppeteer](https://github.com/GoogleChrome/puppeteer), [TestCafe](https://github.com/DevExpress/testcafe), [Cypress](https://www.cypress.io/))

- 可视化回归工具([Applitools](https://applitools.com/), [Percy](https://percy.io/), [Wraith](http://bbc-news.github.io/wraith/), [WebdriverCSS](https://github.com/webdriverio-boneyard/webdrivercss))

#### 单元测试类工具

npm trends: [点击链接](https://www.npmtrends.com/mocha-vs-jest-vs-ava-vs-jasmine-core)

![image-20190706101634263](https://gitee.com/artiely/Figure-bed/raw/master/images/20200310105719.jpg)

**Karma**

**Jasmine**

**Mocha**

**Jest**

**AVA**

#### E2E测试类工具

npm trends: [点击链接](https://www.npmtrends.com/cypress-vs-nightmare-vs-nightwatch-vs-testcafe-vs-webdriverio)

![image-20190706100636750](https://gitee.com/artiely/Figure-bed/raw/master/images/20200310105720.png)

### 最佳实践

测试有很多好处，但不代表一上来就要写出100%场景覆盖的测试用例。

**最佳的实践：基于投入产出比来做测试**

由于维护测试用例也是一大笔开销（毕竟没有多少测试会专门帮前端写业务测试用例，而前端使用的流程自动化工具更是没有测试参与了）。

对于像基础组件、基础模型之类的不常变更且复用较多的部分，可以考虑去写测试用例来保证质量。个

先写少量的测试用例覆盖到80%+的场景，保证覆盖主要使用流程。

一些极端场景出现的bug可以在迭代中形成测试用例沉淀，场景覆盖也将逐渐趋近100%。

但对于迭代较快的业务逻辑以及生存时间不长的活动页面之类的就别花时间写测试用例了，维护测试用例的时间大了去了，成本太高。

大型项目，可以使用Jest快速形成配置并且开始单元测试。

需要测试快照，则可以选择Jest或者Ava。

对于配置性要求高，对测试框架性能有要求的可以选择mocha。

对模拟还原浏览器业务操作有很大的需求的，可以选择nightmare

配合CI工具完成自动化测试、测试覆盖率、测试结果推送。

## 喜欢简单，选择Mocha

[`Mocha`](https://mochajs.org/)（发音"摩卡"）诞生于2011年，是现在最流行的JavaScript测试框架之一，在浏览器和Node环境都可以使用。所谓"测试框架"，就是运行测试的工具。通过它，可以为JavaScript应用添加测试，从而保证代码的质量。

## 开箱即用Jest

Jest是由Facebook发布的开源的、基于[Jasmine](http://jasmine.github.io/)的JavaScript单元测试框架。Jest源于Facebook的构想，用于快速、可靠地测试Web聊天应用。它吸引了公司内部的兴趣，Facebook的一名软件工程师Jeff Morrison半年前又重拾这个项目，改善它的性能，并将其开源。Jest的目标是减少开始测试一个项目所要花费的时间和认知负荷，因此它提供了大部分你需要的现成工具：快速的命令行接口、Mock工具集以及它的自动模块Mock系统。此外，如果你在寻找隔离工具例如Mock库，大部分其它工具将让你在测试中（甚至经常在你的主代码中）写一些不尽如人意的样板代码，以使其生效。Jest与Jasmine框架的区别是在后者之上增加了一些层。最值得注意的是，运行测试时，Jest会自动模拟依赖。Jest自动为每个依赖的模块生成Mock，并默认提供这些Mock，这样就可以很容易地隔离模块的依赖。

Jest支持Babel，我们将很轻松的使用ES6的高级语法

Jest支持webpack，非常方便的使用它来管理我们的项目

Jest支持TypeScript，书写测试用例更加严谨

1. 简化API

   Jest既简单又强大，内置支持以下功能：

   - 灵活的配置：比如，可以用文件名通配符来检测测试文件。
   - 测试的事前步骤(Setup)和事后步骤(Teardown)，同时也包括测试范围。
   - 匹配表达式(Matchers)：能使用期望`expect`句法来验证不同的内容。
   - 测试异步代码：支持承诺(promise)数据类型和异步等待`async` / `await`功能。
   - 模拟函数：可以修改或监查某个函数的行为。
   - 手动模拟：测试代码时可以忽略模块的依存关系。
   - 虚拟计时：帮助控制时间推移。

2. 性能与隔离

   Jest文档里写道：

   Jest能运用所有的工作部分，并列运行测试，使性能最大化。终端上的信息经过缓冲，最后与测试结果一起打印出来。沙盒中生成的测试文件，以及自动全局状态在每个测试里都会得到重置，这样就不会出现两个测试冲突的情况。

   Mocha用一个进程运行所有的测试，和它比较起来，Jest则完全不同。要在测试之间模拟出隔离效果，我们必须要引入几个测试辅助函数来妥善管理清除工作。这种做法虽然不怎么理想，但99%的情况都可以用，因为测试是按顺序进行的。

3. 沉浸式监控模式

   快速互动式监控模式可以监控到哪些测试文件有过改动，只运行与改动过的文件相关的测试，并且由于优化作用，能迅速放出监控信号。设置起来非常简单，而且还有一些别的选项，可以用文件名或测试名来过滤测试。我们用Mocha时也有监控模式，不过没有那么强大，要运行某个特定的测试文件夹或文件，就不得不自己创造解决方法，而这些功能Jest本身就已经提供了，不用花力气。

4. 代码覆盖率&测试报告

   Jest内置有代码覆盖率报告功能，设置起来易如反掌。可以在整个项目范围里收集代码覆盖率信息，包括未经受测试的文件。

   要使完善Circle CI整合，只需要一个自定义报告功能。有了Jest，用[jest-junit-reporter](https://github.com/michaelleeallen/jest-junit-reporter)就可以做到，其用法和Mocha几乎相同。

5. 快照功能

   快照测试的目的不是要替换现有的单元测试，而是要使之更有价值，让测试更轻松。在某些情况下，某些功能比如React组件功能，有了快照测试意味着无需再做单元测试，但同样这两者不是非此即彼。

### Mock与Spy

**mock**测试就是在测试过程中，对于某些不容易构造或者不容易获取的对象，用一个虚拟的对象来创建以便测试的测试方法。

Mock 是单元测试中经常使用的一种技术。单元测试，顾名思义测试的重点是某个具体单元。但是在实际代码中，代码与代码之间，模块与模块之间总是会存在着相互引用。这个时候，剥离出这种单元的依赖，让测试更加独立，使用到的技术就是 Mock。

**为什么要使用Mock函数？**

在项目中，一个模块的方法内常常会去调用另外一个模块的方法。在单元测试中，我们可能并不需要关心内部调用的方法的执行过程和结果，只想知道它是否被正确调用即可，甚至会指定该函数的返回值。此时，使用Mock函数是十分有必要。

Mock函数提供的以下三种特性，在我们写测试代码时十分有用：

- 捕获函数调用情况
- 设置函数返回值
- 改变函数的内部实现

![img](https://gitee.com/artiely/Figure-bed/raw/master/images/20200310105724.jpg)

Mock其实就是一种Spies，在Jest中使用spies来“spy”(窥探)一个函数的行为。

[Jest文档](https://jestjs.io/docs/en/mock-function-api.html#content)对于spies的解释:

> Mock函数也称为“spies”，因为它们让你窥探一些由其他代码间接调用的函数的行为，而不仅仅是测试输出。你可以通过使用 `jest.fn()` 创建一个mock函数。
## 简约之美AVA

简单的说ava是mocha的替代品：

- es6语法支持更好，对aysnc/await有支持
- 执行效率更高，使用io并发，就必须保证测试的原子性
- 语义上更简单，集众家之长

虽然 JavaScript 是单线程，但在 Node.js 里由于其异步的特性使得 IO 可以并行。AVA 利用这个优点让你的测试可以并发执行，这对于 IO 繁重的测试特别有用。另外，测试文件可以在不同的进程里并行运行，让每一个测试文件可以获得更好的性能和独立的环境。

### AVA特点

- 轻量和高效

- 简单的测试语法

- 并发运行测试

- 强制编写**原子测试**

  一旦开始，就一直运行到结束，中间不会切换到另一个测试

- 没有隐藏的全局变量

- 为每个测试文件隔离环境

- **用 ES2015 编写测试**

- 支持 Promise

- 支持 Generator

- 支持 Async

- 支持 Observable

- 强化断言信息

- 可选的 TAP 输出显示

  ![img](https://gitee.com/artiely/Figure-bed/raw/master/images/20200310105725.png)

- 简明的堆栈跟踪

### 其他ava设置相关

## 测试环境&帮手Karma

Karma 是一个基于 Node.js 的 JavaScript 测试执行过程管理工具（Test Runner）。该工具可用于测试所有主流 Web 浏览器，也可以集成到 CI（Continuous integration）工具，还可以和其他代码编辑器一起使用。

Karma 会监控配置文件中所指定的每一个文件，每当文件发生改变，它都会向测试服务器发送信号，来通知所有的浏览器再次运行测试代码。此时，浏览器会重新加载源文件，并执行测试代码。其结果会传递回服务器，并以某种形式显示给开发者。

访问浏览器执行结果，可通过以下的方式

- 手工方式 - 通过浏览器
- 自动方式 - 让 karma 来启动对应的浏览器

### 工作原理简介

`karma` 是一个典型的 `C/S` 程序，包含 client 和 server ，通讯方式基于 `Http` ，通常情况下，客户端和服务端基本都运行在开发者本地机器上。

一个服务端实例对应一个项目，假如想同时运行多个项目，得同时开启多个服务端实例。

**Server**

`Server` 是框架的主要组成部分之一，它内部保存了所有的程序运行状态，比如 client 连接，当前运行的单测文件，根据这些数据状态，它提供了下面几个功能， 下图是 server 的结构

![karma_server](https://gitee.com/artiely/Figure-bed/raw/master/images/20200310105729.png)

- 监听文件
- 与 client 进行通讯
- 向开发者输出测试结果
- 提供 client 端所需的资源文件

**Client**

client 是单测最终运行的地方，类似一个 web app ， 跟 server 端通讯利用 `socket.io`， 执行单测在一个独立的 `iframe` 中。下面是它的结构图

![karma_impl_client](https://gitee.com/artiely/Figure-bed/raw/master/images/20200310105730.png)

client 和 server 端通讯采用 `socket.io`

- client 端会发送这些消息

![karma_impl_client_message_c](https://gitee.com/artiely/Figure-bed/raw/master/images/20200310105731.png)

- server 端会发送这些消息

![karma_impl_client_message_s](https://gitee.com/artiely/Figure-bed/raw/master/images/20200310105732.jpg)

## UI测试利器Nightmare

Nightmare是[Segment](https://segment.com/)的高级浏览器自动化库。

目标是公开一些模仿用户操作（例如`goto`，`type`和`click`）的简单方法，使用对每个脚本块感觉同步的API，而不是深层嵌套的回调。它最初设计用于在没有API的站点之间自动执行任务，但最常用于UI测试和爬网。

它使用[Electron](http://electron.atom.io/)，它与[PhantomJS](http://phantomjs.org/)类似，但大约[快两倍](https://github.com/segmentio/nightmare/issues/484#issuecomment-184519591)，更现代。

#### 软件测试的分类

**第一部分：软件测试的分类**

- 按测试执行阶段划分

  单元测试、集成测试、系统测试、验收测试（正式验收测试、Alpha测试、Beta测试）

- 按测试技术划分

  白盒测试、黑盒测试、灰盒测试

- 被测试对象是否运行划分

  动态测试、静态测试（文档检查、代码走查、界面检查）

- 按不同的测试手段划分

  手工测试、自动化测试

- 按测试包含的内容划分

  功能测试、界面测试、安全测试、兼容性测试、易用性测试、性能测试、压力测试、负载测试、恢复测试

- 其他测试

  冒烟测试、回归测试、探索性测试/自由测试（测试思维）

**第二部分：接下来对软件测试分类进行一个说明**

![img](https://gitee.com/artiely/Figure-bed/raw/master/images/20200310105733.jpg)![img](https://gitee.com/artiely/Figure-bed/raw/master/images/20200310105733.jpg)

![img](https://gitee.com/artiely/Figure-bed/raw/master/images/20200310105734.png)![img](https://gitee.com/artiely/Figure-bed/raw/master/images/20200310105735.jpg)

**第三部分：测试工具**

SVN，Git——>版本控制管理工具

禅道——>Bug管理工具

Fiddler——>抓包，定位问题你

postman，jmeter，soapui——>接口测试

Loadrunner，Jmeter——>性能，压力测试

#### 2019年Javascript测试概览

<https://medium.com/welldone-software/an-overview-of-javascript-testing-in-2019-264e19514d0a>

这是一篇非常好的国外的博文，同时也是2018年Javascript测试概览的作者。这里有2018年的译文：

[展望 2018 年 JavaScript Testing](https://zhuanlan.zhihu.com/p/32702421)

在文中很好介绍到了测试类型，并举了大量的例子，非常全面。

#### 什么是TDD？

[测试驱动开发（TDD）总结——原理篇](https://juejin.im/post/5c3e73876fb9a049d37f5db1)

TDD （Test Driven Development） 在不同的圈子、不同的角色的认知中可能会有不同的理解，有人可能会理解成 ATDD（Acceptance Test Driven Development），也有人可能会理解成 UTDD（Unit Test Driven Development），为了避免产生歧义，**文章涉及到 TDD 专指 UTDD（Unit Test Driven Development），即 「单元测试驱动开发」**。

TDD 的目标

> Kent Beck 在他的著作《Test-Driven Development》一书中提到：“**代码简洁可用**这句言简意赅的话，正是 TDD 所追求的目标”。

**对于如何保证“代码简洁可用”可以使用分而治之的方法，先达到“可用”目标，再追求“简洁”目标。**

**可用：** 保证代码通过自动化测试。

**代码简洁：** 在不同阶段人们对简洁的理解程度也不一样，不过遵循的原则差不多，例如 OOD 的 SOLID 原则，Kent Beck 的 Simple Design 原则等。

虽然有很多因素妨碍我们得到整洁的代码，甚至可用的代码，无需征求太多意见，只需要采用 TDD 的开发方式来驱动出简洁可用的代码。

#### Karma的前世今生

2016年的文章，由淘宝前端团队书写：<http://taobaofed.org/blog/2016/01/08/karma-origin/>

通篇介绍了karma的工作原理及实现原理，非常有价值的文章。

## 参考资料

- [使用Jest测试JavaScript(Mock篇)](https://zhuanlan.zhihu.com/p/47009664)
