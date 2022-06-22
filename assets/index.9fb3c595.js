import{i as a,o as p,c as t,j as n,k as e}from"./app.8f9fe947.js";const o=e(`<h1 id="%E7%BE%8E%E5%8C%96%E4%BD%A0%E7%9A%84%E6%BB%9A%E5%8A%A8%E6%9D%A1" tabindex="-1"><span class="prefix"></span><span class="content">\u7F8E\u5316\u4F60\u7684\u6EDA\u52A8\u6761</span><span class="suffix"></span></h1><p>\u5B9E\u73B0\u6B65\u9AA4</p><ul><li>\u9996\u5148\u662F\u6837\u5F0F\u7684\u4FEE\u6539</li><li>\u6EDA\u52A8\u5F00\u59CB\u548C\u7ED3\u675F\u7684\u76D1\u542C</li><li>\u52A8\u753B\u7684\u5B9E\u73B0</li></ul><p>\u6548\u679C\u5982\u4E0B</p><div class="language-shell ext-shell code-wrapper"><div class="cbt-traffic_light"><span></span><span></span><span></span></div><span class="copy"></span><div class="code-inner"><pre class="language-shell line-numbers-mode"><code class="language-shell"><span class="token comment">##############################################################################################</span>
</code></pre></div><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>\u9996\u5148\u662F\u6837\u5F0F\u7684\u4FEE\u6539</p><div class="language-css ext-css code-wrapper"><div class="cbt-traffic_light"><span></span><span></span><span></span></div><span class="copy"></span><div class="code-inner"><pre class="language-css line-numbers-mode"><code class="language-css"><span class="token comment">/* \u8BBE\u7F6E\u6EDA\u52A8\u6761\u6574\u4F53\u90E8\u5206\u7684\u6837\u5F0F */</span>
<span class="token selector">::-webkit-scrollbar</span> <span class="token punctuation">{</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 0px<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 6px<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

// <span class="token comment">/* \u6EDA\u52A8\u69FD--\u5916\u5C42\u8F68\u9053 */</span>
<span class="token selector">::-webkit-scrollbar-track</span> <span class="token punctuation">{</span>
  <span class="token property">background</span><span class="token punctuation">:</span> transparent<span class="token punctuation">;</span>
  <span class="token property">opacity</span><span class="token punctuation">:</span> 0
<span class="token punctuation">}</span>

<span class="token comment">/* \u5185\u5C42\u8F68\u9053\uFF08\u4E0D\u5305\u542B\u6EDA\u52A8\u5757\u90E8\u5206\uFF09 */</span>
<span class="token selector">::-webkit-scrollbar-track-piece</span> <span class="token punctuation">{</span>
  <span class="token property">opacity</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>   <span class="token comment">/* \u900F\u660E\u5EA6\u8BBE\u7F6E\u4E3A\u5168\u900F\u660E\uFF0C\u4F7F\u5F97\u6EDA\u52A8\u6761\u80CC\u666F\u8272\u4E3A\u7F51\u9875\u989C\u8272 */</span>
<span class="token punctuation">}</span>

// <span class="token comment">/* \u6EDA\u52A8\u6761\u6ED1\u5757 */</span>
<span class="token selector">::-webkit-scrollbar-thumb</span> <span class="token punctuation">{</span>
  <span class="token property">border-radius</span><span class="token punctuation">:</span> 3px<span class="token punctuation">;</span>
  // <span class="token property">background</span><span class="token punctuation">:</span> <span class="token function">rgba</span><span class="token punctuation">(</span>92<span class="token punctuation">,</span> 110<span class="token punctuation">,</span> 130<span class="token punctuation">,</span> 0.1<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* \u6EDA\u52A8\u6761\u6309\u94AE */</span>
<span class="token selector">::-webkit-scrollbar-button</span> <span class="token punctuation">{</span>
  <span class="token property">display</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/* \u6A2A\u5411\u6EDA\u52A8\u6761\u548C\u7EB5\u5411\u6EDA\u52A8\u6761\u76F8\u4EA4\u5904\u5C16\u89D2\u7684\u989C\u8272 */</span>
<span class="token selector">::-webkit-scrollbar-corner</span> <span class="token punctuation">{</span>
  <span class="token property">background-color</span><span class="token punctuation">:</span> transparent<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br></div></div><ul><li><p>\u6ED1\u52A8\u5F0F\u9AD8\u4EAE\uFF0C\u7ED3\u675F\u6ED1\u52A8\u65F6\u53D6\u6D88\u9AD8\u4EAE,\u8FD9\u91CC\u7528\u7684\u662Fvue\u7684 \u72B6\u6001\u9A71\u52A8\u7684\u52A8\u6001 CSS <a href="https://v3.cn.vuejs.org/api/sfc-style.html#%E7%8A%B6%E6%80%81%E9%A9%B1%E5%8A%A8%E7%9A%84%E5%8A%A8%E6%80%81-css" target="_blank" rel="noopener">v-bind</a></p></li><li><p>\u52A0\u5165\u52A8\u753B\uFF0C\u5728\u5C1D\u8BD5css\u52A8\u753B\u4E0D\u652F\u6301\u7684\u60C5\u51B5\u4E0B\u4F7F\u7528js\u52A8\u6001\u4FEE\u6539\u6837\u5F0F</p></li></ul><p>\u5B8C\u6574\u903B\u8F91\u5982\u4E0B\u5305\u542B</p><ul><li>\u5982\u4F55\u5224\u65AD\u6EDA\u52A8\u5F00\u59CB\u548C\u7ED3\u675F</li><li>\u5982\u4F55useRafFn\u63A7\u5236\u52A8\u753B</li></ul><div class="language-html ext-html code-wrapper"><div class="cbt-traffic_light"><span></span><span></span><span></span></div><span class="copy"></span><div class="code-inner"><pre class="language-html line-numbers-mode"><code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span> useRafFn <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@vueuse/core&#39;</span>

<span class="token keyword">let</span> bg <span class="token operator">=</span> <span class="token function">$ref</span><span class="token punctuation">(</span><span class="token string">&#39;rgba(92, 110, 130, 0.05)&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">let</span> scrollOffset <span class="token operator">=</span> <span class="token function">$ref</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
<span class="token keyword">let</span> <span class="token literal-property property">timer</span><span class="token operator">:</span> number
<span class="token keyword">let</span> scrollEndValue <span class="token operator">=</span> <span class="token function">$ref</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
<span class="token keyword">let</span> opacity <span class="token operator">=</span> <span class="token function">$ref</span><span class="token punctuation">(</span><span class="token number">0.5</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> pause<span class="token punctuation">,</span> resume <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useRafFn</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  opacity <span class="token operator">-=</span> <span class="token number">0.01</span>
  bg <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">rgba(92, 110, 130, </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>opacity<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">)</span><span class="token template-punctuation string">\`</span></span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>opacity <span class="token operator">&lt;=</span> <span class="token number">0.05</span><span class="token punctuation">)</span>
    <span class="token function">pause</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token function">pause</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token function">watch</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">[</span>scrollOffset<span class="token punctuation">,</span> scrollEndValue<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token punctuation">[</span>newY<span class="token punctuation">,</span> oldY<span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>endV<span class="token punctuation">,</span> endOV<span class="token punctuation">]</span></span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>newY <span class="token operator">===</span> endV<span class="token punctuation">)</span> <span class="token punctuation">{</span> bg <span class="token operator">=</span> <span class="token string">&#39;rgba(92, 110, 130, 0.05)&#39;</span> <span class="token punctuation">}</span>
  <span class="token keyword">else</span> <span class="token punctuation">{</span>
    opacity <span class="token operator">=</span> <span class="token number">0.5</span>
    <span class="token function">resume</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token function">onMounted</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  document<span class="token punctuation">.</span><span class="token function">querySelectorAll</span><span class="token punctuation">(</span><span class="token string">&#39;.md pre[class*=language-]&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">pre</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    pre<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;scroll&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      scrollOffset <span class="token operator">=</span> pre<span class="token punctuation">.</span>scrollLeft
      <span class="token function">clearTimeout</span><span class="token punctuation">(</span>timer<span class="token punctuation">)</span>
      timer <span class="token operator">=</span> window<span class="token punctuation">.</span><span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        scrollEndValue <span class="token operator">=</span> pre<span class="token punctuation">.</span>scrollLeft
      <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>scss<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">

<span class="token selector">.md pre[class*=language-]</span> <span class="token punctuation">{</span>
  <span class="token selector">&amp;::-webkit-scrollbar-thumb</span> <span class="token punctuation">{</span>
    <span class="token property">background</span><span class="token punctuation">:</span> <span class="token function">v-bind</span><span class="token punctuation">(</span>bg<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br></div></div>`,11),c=[o],m={tag:["vue","js","vueuse","typescript"],cover:"/2022-05-16-18-47-31.png",tinyCover:"/cover/2022-05-16-18-47-31.png",coverWidth:564,coverHeight:1002,coverPrimary:"c2a88f",coverSecondary:"3d5770",meta:[]},l={__name:"index",setup(u,{expose:s}){return a({meta:[]}),s({frontmatter:{tag:["vue","js","vueuse","typescript"],cover:"/2022-05-16-18-47-31.png",tinyCover:"/cover/2022-05-16-18-47-31.png",coverWidth:564,coverHeight:1002,coverPrimary:"c2a88f",coverSecondary:"3d5770",meta:[]}}),(i,k)=>(p(),t("div",null,c))}};typeof n=="function"&&n(l);export{l as default,m as frontmatter};