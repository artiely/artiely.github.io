import{i as a,o as e,c as p,j as s,k as l}from"./app.dce1b217.js";const t=l(`<h1 id="vue%E7%AE%A1%E7%90%86%E7%B3%BB%E7%BB%9F%E4%BB%8E0%E5%88%B01-%E7%8E%AF%E5%A2%83%E4%B8%8E%E6%A8%A1%E5%BC%8F" tabindex="-1"><span class="prefix"></span><span class="content">vue\u7BA1\u7406\u7CFB\u7EDF\u4ECE0\u52301-\u73AF\u5883\u4E0E\u6A21\u5F0F</span><span class="suffix"></span></h1><p><a href="https://cli.vuejs.org/zh/guide/mode-and-env.html" target="_blank" rel="noopener">\u6587\u6863</a></p><h2 id="%E4%B8%BA%E4%BB%80%E4%B9%88%E9%9C%80%E8%A6%81%E6%A8%A1%E5%BC%8F%E5%92%8C%E7%8E%AF%E5%A2%83" tabindex="-1"><span class="prefix"></span><span class="content">\u4E3A\u4EC0\u4E48\u9700\u8981\u6A21\u5F0F\u548C\u73AF\u5883</span><span class="suffix"></span></h2><p>\u6211\u4EEC\u5E73\u65F6\u5728\u5F00\u53D1\u7684\u8FC7\u7A0B\u4E2D\u4F1A\u6709\u5F88\u591A\u7684\u73AF\u5883\u548C\u6A21\u5F0F\uFF1A\u6BD4\u5982\u6211\u4EEC\u6211\u4EEC<code class="">npm run dev</code>\u8FD9\u5C31\u662F\u4E00\u4E2A\u5F00\u53D1\u73AF\u5883\uFF0C<code class="">npm run build</code> \u6253\u5305\u5C31\u662F\u4E00\u4E2A\u751F\u4EA7\u73AF\u5883\u3002\u4F46\u662F\u8FD9\u8FDC\u8FDC\u662F\u4E0D\u591F\u7684\u3002</p><p>\u5F88\u591A\u65F6\u5019\u6211\u4EEC\u9700\u8981\u5C06\u6253\u5305\u597D\u7684\u8D44\u6E90\u53D1\u5E03\u5404\u4E2A\u73AF\u5883\u4E0B\uFF0C\u53EF\u80FD\u6BCF\u4E2A\u73AF\u5883\u90FD\u5BF9\u5E94\u4E0D\u540C\u7684 api \u5730\u5740\u548C\u670D\u52A1\u5668\u5730\u5740\u3002\u6211\u4EEC\u4E0D\u53EF\u80FD\u6BCF\u6B21\u6253\u5305\u7684\u65F6\u5019\u90FD\u53BB\u624B\u52A8\u7684\u66F4\u6539\u5730\u5740\uFF0C\u7136\u540E\u518D\u6253\u5305\uFF0C\u7E41\u7410\u5012\u4E0D\u8BF4\uFF0C\u5173\u952E\u662F\u5BB9\u6613\u51FA\u9519\u3002\u6240\u4EE5\u9700\u8981\u73AF\u5883\u548C\u6A21\u5F0F\u7684\u914D\u5408\u3002</p><h2 id="%E5%85%B7%E4%BD%93%E7%9A%84%E6%93%8D%E4%BD%9C" tabindex="-1"><span class="prefix"></span><span class="content">\u5177\u4F53\u7684\u64CD\u4F5C</span><span class="suffix"></span></h2><div class="language-bash ext-bash code-wrapper"><div class="cbt-traffic_light"><span></span><span></span><span></span></div><span class="copy"></span><div class="code-inner"><pre class="language-bash line-numbers-mode"><code class="language-bash">    $ tp -i node_modules .history .git
    \u251C\u2500\u2500public
    \u2502 \u251C\u2500\u2500static
    \u2502 \u251C\u2500\u2500favicon.ico
    \u2502 \u2514\u2500\u2500index.html
    \u251C\u2500\u2500src
    \u2502 \u251C\u2500\u2500api
    \u2502 \u251C\u2500\u2500assets
    \u2502 \u2502 \u251C\u2500\u2500fonts
    \u2502 \u2502 \u2502 \u2514\u2500\u2500DINPro-Medium.ttf
    \u2502 \u2502 \u251C\u2500\u2500img
    \u2502 \u2502 \u251C\u2500\u2500style
    \u2502 \u2502 \u2502 \u251C\u2500\u2500cover.less
    \u2502 \u2502 \u2502 \u251C\u2500\u2500index.less
    \u2502 \u2502 \u2502 \u251C\u2500\u2500layout.less
    \u2502 \u2502 \u2502 \u251C\u2500\u2500main.less
    \u2502 \u2502 \u2502 \u2514\u2500\u2500var.less
    \u2502 \u2502 \u2514\u2500\u2500logo.png
    \u2502 \u251C\u2500\u2500common
    \u2502 \u2502 \u251C\u2500\u2500directive
    \u2502 \u2502 \u251C\u2500\u2500filters
    \u2502 \u2502 \u251C\u2500\u2500utils
    \u2502 \u2502 \u2502 \u251C\u2500\u2500modules
    \u2502 \u2502 \u2502 \u2502 \u251C\u2500\u2500env.js
    \u2502 \u2502 \u2502 \u2502 \u2514\u2500\u2500time-range.js
    \u2502 \u2502 \u2502 \u2514\u2500\u2500index.js
    \u2502 \u251C\u2500\u2500components
    \u2502 \u2502 \u251C\u2500\u2500HelloWorld.vue
    \u2502 \u2502 \u2514\u2500\u2500index.js
    \u2502 \u251C\u2500\u2500config
    \u2502 \u251C\u2500\u2500layout
    \u2502 \u251C\u2500\u2500packages
    \u2502 \u2502 \u2514\u2500\u2500index.js
    \u2502 \u251C\u2500\u2500router
    \u2502 \u2502 \u2514\u2500\u2500index.js
    \u2502 \u251C\u2500\u2500store
    \u2502 \u2502 \u2514\u2500\u2500index.js
    \u2502 \u251C\u2500\u2500views
    \u2502 \u2502 \u251C\u2500\u2500About.vue
    \u2502 \u2502 \u2514\u2500\u2500Home.vue
    \u2502 \u251C\u2500\u2500App.vue
    \u2502 \u251C\u2500\u2500main.js
    \u2502 \u2514\u2500\u2500vue.config.js
    \u251C\u2500\u2500.browserslistrc
+   \u251C\u2500\u2500.env
+   \u251C\u2500\u2500.env.dev
+   \u251C\u2500\u2500.env.test
+   \u251C\u2500\u2500.env.release
+   \u251C\u2500\u2500.env.stage
    \u251C\u2500\u2500.eslintrc.js
    \u251C\u2500\u2500.gitignore
    \u251C\u2500\u2500babel.config.js
    \u251C\u2500\u2500package-lock.json
    \u251C\u2500\u2500package.json
    \u2514\u2500\u2500README.md
</code></pre></div><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br></div></div><p>\u6211\u4EEC\u65B0\u589E\u4E86\u4E94\u4E2A\u6587\u4EF6\u8FD9\u4E94\u4E2A\u6587\u4EF6\u7684\u7C7B\u5BB9\u5206\u522B\u662F</p><div class="language-shell ext-shell code-wrapper"><div class="cbt-traffic_light"><span></span><span></span><span></span></div><span class="copy"></span><div class="code-inner"><pre class="language-shell line-numbers-mode"><code class="language-shell"><span class="token comment"># .env</span>
<span class="token comment"># \u5168\u5C40\u7684\u73AF\u5883\u53D8\u91CF\uFF0C\u5168\u5C40\u751F\u6548</span>
</code></pre></div><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><div class="language-shell ext-shell code-wrapper"><div class="cbt-traffic_light"><span></span><span></span><span></span></div><span class="copy"></span><div class="code-inner"><pre class="language-shell line-numbers-mode"><code class="language-shell"><span class="token comment"># .env.dev</span>
VUE_APP_MODE <span class="token operator">=</span> development
VUE_APP_MODE <span class="token operator">=</span> dev
<span class="token comment"># \u6D4B\u8BD5\u6A21\u5F0F\u4E0B\u5F00\u53D1\u73AF\u5883</span>
</code></pre></div><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><div class="language-shell ext-shell code-wrapper"><div class="cbt-traffic_light"><span></span><span></span><span></span></div><span class="copy"></span><div class="code-inner"><pre class="language-shell line-numbers-mode"><code class="language-shell"><span class="token comment"># .env.test</span>
VUE_APP_MODE <span class="token operator">=</span> production
VUE_APP_MODE <span class="token operator">=</span> <span class="token builtin class-name">test</span>
<span class="token comment"># \u6D4B\u8BD5\u6A21\u5F0F\u4E0B\u751F\u4EA7\u73AF\u5883</span>
</code></pre></div><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><div class="language-shell ext-shell code-wrapper"><div class="cbt-traffic_light"><span></span><span></span><span></span></div><span class="copy"></span><div class="code-inner"><pre class="language-shell line-numbers-mode"><code class="language-shell"><span class="token comment"># .env.release</span>
VUE_APP_MODE <span class="token operator">=</span> production
VUE_APP_MODE <span class="token operator">=</span> release
<span class="token comment"># \u751F\u4EA7\u6A21\u5F0F\u4E0B\u7684\u751F\u4EA7\u73AF\u5883</span>
</code></pre></div><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><div class="language-shell ext-shell code-wrapper"><div class="cbt-traffic_light"><span></span><span></span><span></span></div><span class="copy"></span><div class="code-inner"><pre class="language-shell line-numbers-mode"><code class="language-shell"><span class="token comment"># .env.stage</span>
VUE_APP_MODE <span class="token operator">=</span> production
VUE_APP_MODE <span class="token operator">=</span> stage
<span class="token comment"># \u9884\u53D1\u5E03\u6A21\u5F0F\u4E0B\u7684\u751F\u4EA7\u73AF\u5883</span>
</code></pre></div><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="%E5%85%B7%E4%BD%93%E7%9A%84%E4%BD%BF%E7%94%A8" tabindex="-1"><span class="prefix"></span><span class="content">\u5177\u4F53\u7684\u4F7F\u7528</span><span class="suffix"></span></h2><h3 id="%E9%80%9A%E8%BF%87%E6%A8%A1%E5%BC%8F%E9%85%8D%E7%BD%AE%E5%85%A8%E5%B1%80%E8%B7%AF%E5%BE%84%E5%8F%98%E9%87%8F" tabindex="-1"><span class="prefix"></span><span class="content">\u901A\u8FC7\u6A21\u5F0F\u914D\u7F6E\u5168\u5C40\u8DEF\u5F84\u53D8\u91CF</span><span class="suffix"></span></h3><p>\u6211\u4EEC\u53EF\u4EE5\u518D\u5168\u5C40\u7684 config \u914D\u7F6E\u5982\u4E0B\u4EE3\u7801\uFF08\u4F2A\u4EE3\u7801\uFF09</p><div class="language-js ext-js code-wrapper"><div class="cbt-traffic_light"><span></span><span></span><span></span></div><span class="copy"></span><div class="code-inner"><pre class="language-js line-numbers-mode"><code class="language-js"><span class="token comment">// \u83B7\u53D6\u73AF\u5883\u53D8\u91CF</span>
<span class="token comment">// \u5B9A\u4E49\u4E0D\u540C\u6A21\u5F0F\u4E0B\u8DEF\u52B2\u4E0D\u540C\u7684\u53D8\u91CF</span>
<span class="token comment">// \u5982\u652F\u4ED8\u8DEF\u5F84 api\u8DEF\u5F84 oss\u7684\u8DEF\u5F84</span>
<span class="token keyword">let</span> payUrl<span class="token punctuation">,</span> baseURL<span class="token punctuation">,</span> aliOssTokenUrl<span class="token punctuation">,</span> aliOssPostUrl

<span class="token comment">// 0 \u56FD\u5185 1\u56FD\u5916 oss\u8FD8\u5206\u56FD\u5185\u548C\u56FD\u5916\u6D4B\u8BD5\u548C\u6B63\u5F0F</span>
<span class="token keyword">const</span> testOss <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token string">&#39;https://timing-test.oss-cn-hangzhou.aliyuncs.com&#39;</span><span class="token punctuation">,</span>
  <span class="token string">&#39;https://timing.oss-accelerate.aliyuncs.com&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span>
<span class="token keyword">const</span> releaseOss <span class="token operator">=</span> <span class="token punctuation">[</span>
  <span class="token string">&#39;https://timing.oss-cn-hangzhou.aliyuncs.com&#39;</span><span class="token punctuation">,</span>
  <span class="token string">&#39;https://timing.oss-accelerate.aliyuncs.com&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span>

<span class="token keyword">const</span> testTokenOss <span class="token operator">=</span> <span class="token string">&#39;//118.31.222.92/pan-upload/get-policy&#39;</span>
<span class="token keyword">const</span> grayTokenOss <span class="token operator">=</span> <span class="token string">&#39;//101.37.27.140:8083/pan-upload/get-policy&#39;</span>
<span class="token keyword">const</span> releaseTokenOss <span class="token operator">=</span> <span class="token string">&#39;https://api.timing360.com/pan-upload/get-policy&#39;</span>
<span class="token keyword">const</span> testPayUrl <span class="token operator">=</span> <span class="token string">&#39;//118.31.222.92:8083&#39;</span>
<span class="token comment">// \u6D4F\u89C8\u5668\u4E0B\u8F7D\u5730\u5740</span>
<span class="token keyword">const</span> chromeDownUrl
  <span class="token operator">=</span> <span class="token string">&#39;http://activity.timing360.com/browserDownload/ChromeSetup.exe&#39;</span>

<span class="token keyword">if</span> <span class="token punctuation">(</span>process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">VUE_APP_MODE</span> <span class="token operator">===</span> <span class="token string">&#39;development&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u5F00\u53D1</span>
  payUrl <span class="token operator">=</span> testPayUrl
  baseURL <span class="token operator">=</span> <span class="token string">&#39;&#39;</span>
  aliOssTokenUrl <span class="token operator">=</span> testTokenOss
  aliOssPostUrl <span class="token operator">=</span> testOss
<span class="token punctuation">}</span>
<span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">VUE_APP_MODE</span> <span class="token operator">===</span> <span class="token string">&#39;test&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u6D4B\u8BD5\u73AF\u5883</span>
  payUrl <span class="token operator">=</span> testPayUrl
  baseURL <span class="token operator">=</span> <span class="token string">&#39;&#39;</span>
  aliOssTokenUrl <span class="token operator">=</span> testTokenOss
  aliOssPostUrl <span class="token operator">=</span> testOss
<span class="token punctuation">}</span>
<span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">VUE_APP_MODE</span> <span class="token operator">===</span> <span class="token string">&#39;stage&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u7070\u5EA6\u73AF\u5883</span>
  payUrl <span class="token operator">=</span> <span class="token string">&#39;//101.37.27.140:12800&#39;</span>
  baseURL <span class="token operator">=</span> <span class="token string">&#39;//101.37.27.140:12800&#39;</span>
  aliOssTokenUrl <span class="token operator">=</span> grayTokenOss
  aliOssPostUrl <span class="token operator">=</span> releaseOss
<span class="token punctuation">}</span>
<span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">VUE_APP_MODE</span> <span class="token operator">===</span> <span class="token string">&#39;release&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u6B63\u5F0F\u73AF\u5883</span>
  payUrl <span class="token operator">=</span> <span class="token string">&#39;https://www.timing360.com&#39;</span>
  baseURL <span class="token operator">=</span> <span class="token string">&#39;https://sp.timing360.com&#39;</span>
  aliOssTokenUrl <span class="token operator">=</span> releaseTokenOss
  aliOssPostUrl <span class="token operator">=</span> releaseOss
<span class="token punctuation">}</span>
<span class="token comment">// obs\u7684\u4E0B\u8F7D\u5730\u5740\u548C\u4F7F\u7528\u6559\u7A0B</span>
<span class="token keyword">const</span> macOBSUrl <span class="token operator">=</span> <span class="token string">&#39;http://activity.timing360.com/ObsDownload/obs.dmg&#39;</span>
<span class="token keyword">const</span> WindowsOBSUrl <span class="token operator">=</span> <span class="token string">&#39;http://activity.timing360.com/ObsDownload/obs.exe&#39;</span>
<span class="token keyword">const</span> WindowsOBSUrlx32 <span class="token operator">=</span> <span class="token string">&#39;http://activity.timing360.com/ObsDownload/obsx86.exe&#39;</span>
<span class="token keyword">const</span> InstructionsForOBSVideoUrl
  <span class="token operator">=</span> <span class="token string">&#39;https://activity.timing360.com/onlineImage/obsLive.mp4&#39;</span>

<span class="token keyword">export</span> <span class="token punctuation">{</span>
  payUrl<span class="token punctuation">,</span>
  baseURL<span class="token punctuation">,</span>
  aliOssTokenUrl<span class="token punctuation">,</span>
  aliOssPostUrl<span class="token punctuation">,</span>
  chromeDownUrl<span class="token punctuation">,</span>
  macOBSUrl<span class="token punctuation">,</span>
  WindowsOBSUrl<span class="token punctuation">,</span>
  WindowsOBSUrlx32<span class="token punctuation">,</span>
  InstructionsForOBSVideoUrl<span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre></div><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br></div></div><p>\u8FD9\u6837\u5728\u4F7F\u7528\u7684\u65F6\u5019\u76F4\u63A5\u5F15\u5165\u5BF9\u5E94\u7684\u53D8\u91CF\u5373\u53EF</p><h3 id="%E9%80%9A%E8%BF%87%E6%A8%A1%E5%BC%8F%E6%89%93%E5%8C%85%E9%A1%B9%E7%9B%AE" tabindex="-1"><span class="prefix"></span><span class="content">\u901A\u8FC7\u6A21\u5F0F\u6253\u5305\u9879\u76EE</span><span class="suffix"></span></h3><p>\u914D\u7F6E vue.config.js</p><div class="language-js ext-js code-wrapper"><div class="cbt-traffic_light"><span></span><span></span><span></span></div><span class="copy"></span><div class="code-inner"><pre class="language-js line-numbers-mode"><code class="language-js"><span class="token keyword">let</span> outputDir<span class="token punctuation">,</span> assetsDir
<span class="token keyword">if</span> <span class="token punctuation">(</span>process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">VUE_APP_MODE</span> <span class="token operator">===</span> <span class="token string">&#39;test&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  outputDir <span class="token operator">=</span> <span class="token string">&#39;dist/test&#39;</span>
  assetsDir <span class="token operator">=</span> <span class="token string">&#39;./static&#39;</span>
<span class="token punctuation">}</span>
<span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">VUE_APP_MODE</span> <span class="token operator">===</span> <span class="token string">&#39;stage&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  outputDir <span class="token operator">=</span> <span class="token string">&#39;dist/gray&#39;</span>
  assetsDir <span class="token operator">=</span> <span class="token string">&#39;./static&#39;</span>
<span class="token punctuation">}</span>
<span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">VUE_APP_MODE</span> <span class="token operator">===</span> <span class="token string">&#39;release&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  outputDir <span class="token operator">=</span> <span class="token string">&#39;dist/release&#39;</span>
  assetsDir <span class="token operator">=</span> <span class="token string">&#39;./static&#39;</span>
<span class="token punctuation">}</span>
module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  outputDir<span class="token punctuation">,</span>
  assetsDir<span class="token punctuation">,</span>
  <span class="token comment">// ...</span>
<span class="token punctuation">}</span>
</code></pre></div><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><p>\u914D\u5408\u4FEE\u6539 package.json</p><div class="language-diff ext-diff code-wrapper"><div class="cbt-traffic_light"><span></span><span></span><span></span></div><span class="copy"></span><div class="code-inner"><pre class="language-diff line-numbers-mode"><code class="language-diff"><span class="token unchanged"><span class="token prefix unchanged"> </span><span class="token line"> &quot;scripts&quot;: {
</span><span class="token prefix unchanged"> </span><span class="token line">     &quot;serve&quot;: &quot;vue-cli-service serve&quot;,
</span><span class="token prefix unchanged"> </span><span class="token line">     &quot;build&quot;: &quot;vue-cli-service build&quot;,
</span></span><span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line">     &quot;build:test&quot;: &quot;vue-cli-service build --mode test&quot;,
</span><span class="token prefix inserted">+</span><span class="token line">     &quot;build:stage&quot;: &quot;vue-cli-service build --mode stage&quot;,
</span><span class="token prefix inserted">+</span><span class="token line">     &quot;build:release&quot;: &quot;vue-cli-service build --mode release&quot;,
</span><span class="token prefix inserted">+</span><span class="token line">     &quot;build:all&quot;: &quot;npm run build:test &amp;&amp; npm run build:stage &amp;&amp; npm run build:release&quot;,
</span></span><span class="token unchanged"><span class="token prefix unchanged"> </span><span class="token line">     &quot;preview&quot;: &quot;node build/index.js --preview&quot;,
</span><span class="token prefix unchanged"> </span><span class="token line">     &quot;lint&quot;: &quot;eslint --fix --ext .js,.vue src&quot;,
</span><span class="token prefix unchanged"> </span><span class="token line">     &quot;test:unit&quot;: &quot;jest --clearCache &amp;&amp; vue-cli-service test:unit&quot;,
</span><span class="token prefix unchanged"> </span><span class="token line">     &quot;test:ci&quot;: &quot;npm run lint &amp;&amp; npm run test:unit&quot;,
</span><span class="token prefix unchanged"> </span><span class="token line">     &quot;svgo&quot;: &quot;svgo -f src/icons/svg --config=src/icons/svgo.yml&quot;
</span><span class="token prefix unchanged"> </span><span class="token line">   },
</span></span></code></pre></div><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>\u8FD9\u6837\u53EA\u8981\u6267\u884C\u5BF9\u5E94\u7684\u547D\u4EE4\u5C31\u4F1A\u751F\u6210\u5BF9\u5E94\u7684\u8D44\u6E90\u5230\u5BF9\u5E94\u7684\u76EE\u5F55\u4E0B\uFF0C\u518D\u4E5F\u4E0D\u7528\u624B\u52A8\u66F4\u6539\u5730\u5740\u518D\u6253\u5305\u4E86\u3002</p><p><code class="">npm run build:all</code> \u4E00\u884C\u547D\u4EE4\u6253\u53053\u4E2A\u6A21\u5F0F\u7684\u8D44\u6E90</p><p>\u7B2C\u4E94\u6B65\uFF01</p>`,26),c=[t],d={tag:["vue"],cover:"/2022-05-13-12-47-37.png",base64:"d2d2d2",date:"2020-6-5",tinyCover:"/cover/2022-05-13-12-47-37.png",coverWidth:563,coverHeight:1002,coverPrimary:"2b2828",coverSecondary:"d4d7d7",meta:[]},o={__name:"2020-6-5-05-env-mode",setup(r,{expose:n}){return a({meta:[]}),n({frontmatter:{tag:["vue"],cover:"/2022-05-13-12-47-37.png",base64:"d2d2d2",date:"2020-6-5",tinyCover:"/cover/2022-05-13-12-47-37.png",coverWidth:563,coverHeight:1002,coverPrimary:"2b2828",coverSecondary:"d4d7d7",meta:[]}}),(u,b)=>(e(),p("div",null,c))}};typeof s=="function"&&s(o);export{o as default,d as frontmatter};
