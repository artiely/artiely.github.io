import{i as a,o as e,c as o,j as n,k as t}from"./app.8f9fe947.js";var r="/assets/20210815175449.c2f3e4ff.png",p="/assets/20210815175548.ab7106d1.png";const c=t(`<div class="language-js ext-js code-wrapper"><div class="cbt-traffic_light"><span></span><span></span><span></span></div><span class="copy"></span><div class="code-inner"><pre class="language-js line-numbers-mode"><code class="language-js"><span class="token keyword">const</span> a <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> obverser <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ResizeObserver</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">entries</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> entry <span class="token keyword">of</span> entries<span class="token punctuation">)</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>entry<span class="token punctuation">.</span>contentRect<span class="token punctuation">.</span>width<span class="token punctuation">)</span>

<span class="token punctuation">}</span><span class="token punctuation">)</span>
obverser<span class="token punctuation">.</span><span class="token function">observe</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span>
</code></pre></div><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>\u4F8B\u5982\u8868\u683C\u91CC\u7684\u5143\u7D20\u5F88\u957F\u7684\uFF0C\u5728\u5BBD\u5EA6\u591F\u7684\u60C5\u51B5\u4E0B\u81EA\u7136\u5C55\u793A\uFF0C\u5F53\u5C4F\u5E55\u5C0F\u5BBD\u5EA6\u4E0D\u591F\u7684\u65F6\u5019\u6298\u53E0\u5C55\u793A</p><h2 id="%E6%95%88%E6%9E%9C" tabindex="-1"><span class="prefix"></span><span class="content">\u6548\u679C</span><span class="suffix"></span></h2><figure><img src="`+r+'" alt=""></figure><figure><img src="'+p+'" alt=""></figure>',5),i=[c],g={title:"\u5229\u7528 ResizeObserver \u5B9E\u73B0\u54CD\u5E94\u5F0F",tag:["js"],author:"Artiely",date:"2021-8-15",cover:"/2022-05-11-10-02-28.png",base64:"fafafa",tinyCover:"/cover/2022-05-11-10-02-28.png",coverWidth:564,coverHeight:662,coverPrimary:"ccd4ce",coverSecondary:"332b31",meta:[{property:"og:title",content:"\u5229\u7528 ResizeObserver \u5B9E\u73B0\u54CD\u5E94\u5F0F"}]},l={__name:"2021-8-15-resize-observer",setup(u,{expose:s}){return a({title:"\u5229\u7528 ResizeObserver \u5B9E\u73B0\u54CD\u5E94\u5F0F",meta:[{property:"og:title",content:"\u5229\u7528 ResizeObserver \u5B9E\u73B0\u54CD\u5E94\u5F0F"}]}),s({frontmatter:{title:"\u5229\u7528 ResizeObserver \u5B9E\u73B0\u54CD\u5E94\u5F0F",tag:["js"],author:"Artiely",date:"2021-8-15",cover:"/2022-05-11-10-02-28.png",base64:"fafafa",tinyCover:"/cover/2022-05-11-10-02-28.png",coverWidth:564,coverHeight:662,coverPrimary:"ccd4ce",coverSecondary:"332b31",meta:[{property:"og:title",content:"\u5229\u7528 ResizeObserver \u5B9E\u73B0\u54CD\u5E94\u5F0F"}]}}),(m,b)=>(e(),o("div",null,i))}};typeof n=="function"&&n(l);export{l as default,g as frontmatter};