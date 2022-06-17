import{i as a,o as p,c as e,j as n,k as t}from"./app.4eeffe1f.js";const o=t(`<p>\u524D\u4E00\u8282\u6211\u4EEC\u8BBE\u7F6E\u4E86\u73AF\u5883\u548C\u6A21\u5F0F\uFF0C\u73B0\u5728\u6211\u4EEC\u6765\u5B9E\u73B0\u672C\u5730\u9884\u89C8\uFF0C\u4E3B\u8981\u662F\u4E3A\u4E86\u672C\u5730\u5148\u6D4B\u8BD5\uFF0C\u6709\u95EE\u9898\u63D0\u524D\u66B4\u9732</p><p>\u9996\u5148\u6211\u4EEC\u5728\u6839\u76EE\u5F55\u521B\u5EFA\u4E00\u4E2A<code class="">server.js</code></p><div class="language-js ext-js code-wrapper"><div class="cbt-traffic_light"><span></span><span></span><span></span></div><span class="copy"></span><div class="code-inner"><pre class="language-js line-numbers-mode"><code class="language-js"><span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;path&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> express <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;express&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">express</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment">// var opn = require(&#39;opn&#39;)</span>
<span class="token keyword">const</span> localhost <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;address&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ip</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">let</span> staticDir
<span class="token keyword">let</span> baseUrl
<span class="token keyword">const</span> argv <span class="token operator">=</span> process<span class="token punctuation">.</span>argv<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>argv <span class="token operator">===</span> <span class="token string">&#39;test&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  staticDir <span class="token operator">=</span> <span class="token string">&#39;/dist/test&#39;</span>
  baseUrl <span class="token operator">=</span> <span class="token string">&#39;http://118.31.222.92:8088&#39;</span>
<span class="token punctuation">}</span>
<span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>argv <span class="token operator">===</span> <span class="token string">&#39;stage&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  staticDir <span class="token operator">=</span> <span class="token string">&#39;/dist/gray&#39;</span>
  baseUrl <span class="token operator">=</span> <span class="token string">&#39;http://101.37.27.140:12800&#39;</span>
<span class="token punctuation">}</span>
<span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>argv <span class="token operator">===</span> <span class="token string">&#39;release&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  staticDir <span class="token operator">=</span> <span class="token string">&#39;/dist/release&#39;</span>
  baseUrl <span class="token operator">=</span> <span class="token string">&#39;https://sp.timing360.com&#39;</span>
<span class="token punctuation">}</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>express<span class="token punctuation">.</span><span class="token function">static</span><span class="token punctuation">(</span>path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> staticDir<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> proxy <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;http-proxy-middleware&#39;</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> options <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">target</span><span class="token operator">:</span> baseUrl<span class="token punctuation">,</span> <span class="token comment">// \u6D4B\u8BD5</span>
  <span class="token literal-property property">changeOrigin</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// \u9700\u8981\u865A\u62DF\u4E3B\u673A\u7AD9\u70B9</span>
  <span class="token literal-property property">pathRewrite</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> exampleProxy <span class="token operator">=</span> <span class="token function">proxy</span><span class="token punctuation">(</span>options<span class="token punctuation">)</span> <span class="token comment">// \u5F00\u542F\u4EE3\u7406\u529F\u80FD\uFF0C\u5E76\u52A0\u8F7D\u914D\u7F6E</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token string">&#39;/&#39;</span><span class="token punctuation">,</span> exampleProxy<span class="token punctuation">)</span>
app<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token number">8888</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> uri <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">http://</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>localhost<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">:8888</span><span class="token template-punctuation string">\`</span></span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>err<span class="token punctuation">)</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>uri<span class="token punctuation">)</span>

  <span class="token keyword">else</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span>

<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br></div></div><p>\u7136\u540E\u914D\u7F6E<code class="">package.json</code></p><div class="language-diff ext-diff code-wrapper"><div class="cbt-traffic_light"><span></span><span></span><span></span></div><span class="copy"></span><div class="code-inner"><pre class="language-diff line-numbers-mode"><code class="language-diff">&quot;scripts&quot;: {
<span class="token unchanged"><span class="token prefix unchanged"> </span><span class="token line">   &quot;serve&quot;: &quot;vue-cli-service serve&quot;,
</span><span class="token prefix unchanged"> </span><span class="token line">   &quot;build&quot;: &quot;vue-cli-service build&quot;,
</span><span class="token prefix unchanged"> </span><span class="token line">   &quot;deploy&quot;: &quot;pm2 deploy deploy.yml production&quot;,
</span><span class="token prefix unchanged"> </span><span class="token line">   &quot;build:test&quot;: &quot;vue-cli-service build --mode test&quot;,
</span><span class="token prefix unchanged"> </span><span class="token line">   &quot;build:stage&quot;: &quot;vue-cli-service build --mode stage&quot;,
</span><span class="token prefix unchanged"> </span><span class="token line">   &quot;build:release&quot;: &quot;vue-cli-service build --mode release&quot;,
</span><span class="token prefix unchanged"> </span><span class="token line">   &quot;build:all&quot;: &quot;npm run build:test &amp;&amp; npm run build:stage &amp;&amp; npm run build:release&quot;,
</span></span><span class="token inserted-sign inserted"><span class="token prefix inserted">+</span><span class="token line">   &quot;local:test&quot;: &quot;node ./server.js test&quot;,
</span><span class="token prefix inserted">+</span><span class="token line">   &quot;local:stage&quot;: &quot;node ./server.js stage&quot;,
</span><span class="token prefix inserted">+</span><span class="token line">   &quot;local:release&quot;: &quot;node ./server.js release&quot;,
</span></span><span class="token unchanged"><span class="token prefix unchanged"> </span><span class="token line">   &quot;preview&quot;: &quot;node build/index.js --preview&quot;,
</span><span class="token prefix unchanged"> </span><span class="token line">   &quot;lint&quot;: &quot;eslint --fix --ext .js,.vue src&quot;,
</span><span class="token prefix unchanged"> </span><span class="token line">   &quot;test:unit&quot;: &quot;jest --clearCache &amp;&amp; vue-cli-service test:unit&quot;,
</span><span class="token prefix unchanged"> </span><span class="token line">   &quot;test:ci&quot;: &quot;npm run lint &amp;&amp; npm run test:unit&quot;,
</span><span class="token prefix unchanged"> </span><span class="token line">   &quot;svgo&quot;: &quot;svgo -f src/icons/svg --config=src/icons/svgo.yml&quot;
</span><span class="token prefix unchanged"> </span><span class="token line"> },
</span></span></code></pre></div><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><p>\u8FD9\u6837\u53EA\u8981\u6267\u884C\u5BF9\u5E94\u7684\u547D\u4EE4\u5C31\u662F\u5728\u672C\u5730\u901A\u8FC7\u4EE3\u7406\u6A21\u62DF\u7EBF\u4E0A\u7684\u73AF\u5883\u3002\u628A\u4E0A\u7EBF\u7684\u4E0D\u786E\u5B9A\u6027\u5728\u672C\u5730\u63D0\u524D\u66B4\u9732\u3002</p>`,6),c=[o],b={title:"vue\u7BA1\u7406\u7CFB\u7EDF\u4ECE0\u52301-\u672C\u5730\u9884\u89C8",tag:["vue"],cover:"/2022-05-13-12-49-32.png",base64:"63a3dd",date:"2020-6-5",tinyCover:"/cover/2022-05-13-12-49-32.png",coverWidth:564,coverHeight:1252,coverPrimary:"0a110d",coverSecondary:"f5eef2",meta:[{property:"og:title",content:"vue\u7BA1\u7406\u7CFB\u7EDF\u4ECE0\u52301-\u672C\u5730\u9884\u89C8"}]},l={__name:"2020-6-5-06-local-preview",setup(r,{expose:s}){return a({title:"vue\u7BA1\u7406\u7CFB\u7EDF\u4ECE0\u52301-\u672C\u5730\u9884\u89C8",meta:[{property:"og:title",content:"vue\u7BA1\u7406\u7CFB\u7EDF\u4ECE0\u52301-\u672C\u5730\u9884\u89C8"}]}),s({frontmatter:{title:"vue\u7BA1\u7406\u7CFB\u7EDF\u4ECE0\u52301-\u672C\u5730\u9884\u89C8",tag:["vue"],cover:"/2022-05-13-12-49-32.png",base64:"63a3dd",date:"2020-6-5",tinyCover:"/cover/2022-05-13-12-49-32.png",coverWidth:564,coverHeight:1252,coverPrimary:"0a110d",coverSecondary:"f5eef2",meta:[{property:"og:title",content:"vue\u7BA1\u7406\u7CFB\u7EDF\u4ECE0\u52301-\u672C\u5730\u9884\u89C8"}]}}),(i,k)=>(p(),e("div",null,c))}};typeof n=="function"&&n(l);export{l as default,b as frontmatter};
