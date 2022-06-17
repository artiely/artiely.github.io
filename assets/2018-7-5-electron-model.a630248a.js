import{i as a,o as p,c as t,j as n,k as e}from"./app.4eeffe1f.js";const o=e(`<h1 id="electron-%E4%B8%BB%E8%BF%9B%E7%A8%8B%E5%92%8C%E6%B8%B2%E6%9F%93%E8%BF%9B%E7%A8%8B%E4%B8%AD%E7%9A%84%E6%A8%A1%E5%9D%97" tabindex="-1"><span class="prefix"></span><span class="content">Electron \u4E3B\u8FDB\u7A0B\u548C\u6E32\u67D3\u8FDB\u7A0B\u4E2D\u7684\u6A21\u5757</span><span class="suffix"></span></h1><figure><img src="https://gitee.com/artiely/Figure-bed/raw/master/images/20200306162451.png" alt=""></figure><h2 id="electron-%E6%B8%B2%E6%9F%93%E8%BF%9B%E7%A8%8B%E4%B8%AD%E9%80%9A%E8%BF%87-remote-%E6%A8%A1%E5%9D%97%E8%B0%83%E7%94%A8%E4%B8%BB%E8%BF%9B%E7%A8%8B%E4%B8%AD%E7%9A%84-browserwindow-%E6%89%93%E5%BC%80%E6%96%B0%E7%AA%97%E5%8F%A3%E3%80%82" tabindex="-1"><span class="prefix"></span><span class="content">Electron \u6E32\u67D3\u8FDB\u7A0B\u4E2D\u901A\u8FC7 remote \u6A21\u5757\u8C03\u7528\u4E3B\u8FDB\u7A0B\u4E2D\u7684 BrowserWindow \u6253\u5F00\u65B0\u7A97\u53E3\u3002</span><span class="suffix"></span></h2><p>\u4E3B\u8FDB\u7A0B\u4EE3\u7801\uFF1A</p><div class="language-js ext-js code-wrapper"><div class="cbt-traffic_light"><span></span><span></span><span></span></div><span class="copy"></span><div class="code-inner"><pre class="language-js line-numbers-mode"><code class="language-js"><span class="token keyword">const</span> electron <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;electron&#39;</span><span class="token punctuation">)</span>
<span class="token comment">// \u63A7\u5236\u5E94\u7528\u751F\u547D\u5468\u671F\u7684\u6A21\u5757</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> app <span class="token punctuation">}</span> <span class="token operator">=</span> electron
<span class="token comment">// \u521B\u5EFA\u672C\u5730\u6D4F\u89C8\u5668\u7A97\u53E3\u7684\u6A21\u5757</span>
<span class="token keyword">const</span> <span class="token punctuation">{</span> BrowserWindow <span class="token punctuation">}</span> <span class="token operator">=</span> electron
<span class="token comment">// \u6307\u5411\u7A97\u53E3\u5BF9\u8C61\u7684\u4E00\u4E2A\u5168\u5C40\u5F15\u7528\uFF0C\u5982\u679C\u6CA1\u6709\u8FD9\u4E2A\u5F15\u7528\uFF0C\u90A3\u4E48\u5F53\u8BE5 javascript \u5BF9\u8C61\u88AB\u5783\u573E\u56DE\u6536 \u7684</span>
<span class="token comment">// \u65F6\u5019\u8BE5\u7A97\u53E3\u5C06\u4F1A\u81EA\u52A8\u5173\u95ED</span>
<span class="token keyword">let</span> win
<span class="token keyword">function</span> <span class="token function">createWindow</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u521B\u5EFA\u4E00\u4E2A\u65B0\u7684\u6D4F\u89C8\u5668\u7A97\u53E3</span>
  win <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BrowserWindow</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">1104</span><span class="token punctuation">,</span> <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token number">620</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token comment">// 570+50</span>
  <span class="token comment">// \u5E76\u4E14\u88C5\u8F7D\u5E94\u7528\u7684 index.html \u9875\u9762</span>
  win<span class="token punctuation">.</span><span class="token function">loadURL</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">file://</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>__dirname<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">/html/index.html</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
  <span class="token comment">// \u6253\u5F00\u5F00\u53D1\u5DE5\u5177\u9875\u9762</span>
  <span class="token comment">// win.webContents.openDevTools();</span>
  <span class="token comment">// \u5F53\u7A97\u53E3\u5173\u95ED\u65F6\u8C03\u7528\u7684\u65B9\u6CD5</span>
  win<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;closed&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u89E3\u9664\u7A97\u53E3\u5BF9\u8C61\u7684\u5F15\u7528\uFF0C\u901A\u5E38\u800C\u8A00\u5982\u679C\u5E94\u7528\u652F\u6301\u591A\u4E2A\u7A97\u53E3\u7684\u8BDD\uFF0C\u4F60\u4F1A\u5728\u4E00\u4E2A\u6570\u7EC4\u91CC</span>
    <span class="token comment">// \u5B58\u653E\u7A97\u53E3\u5BF9\u8C61\uFF0C\u5728\u7A97\u53E3\u5173\u95ED\u7684\u65F6\u5019\u5E94\u5F53\u5220\u9664\u76F8\u5E94\u7684\u5143\u7D20\u3002</span>
    win <span class="token operator">=</span> <span class="token keyword">null</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token comment">// \u5F53 Electron \u5B8C\u6210\u521D\u59CB\u5316\u5E76\u4E14\u5DF2\u7ECF\u521B\u5EFA\u4E86\u6D4F\u89C8\u5668\u7A97\u53E3\uFF0C\u5219\u8BE5\u65B9\u6CD5\u5C06\u4F1A\u88AB\u8C03\u7528\u3002</span>
<span class="token comment">// \u6709\u4E9B API \u53EA\u80FD\u5728\u8BE5\u4E8B\u4EF6\u53D1\u751F\u540E\u624D\u80FD\u88AB\u4F7F\u7528\u3002</span>
app<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;ready&#39;</span><span class="token punctuation">,</span> createWindow<span class="token punctuation">)</span>
<span class="token comment">// \u5F53\u6240\u6709\u7684\u7A97\u53E3\u88AB\u5173\u95ED\u540E\u9000\u51FA\u5E94\u7528</span>
app<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;window-all-closed&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u5BF9\u4E8E OS X \u7CFB\u7EDF\uFF0C\u5E94\u7528\u548C\u76F8\u5E94\u7684\u83DC\u5355\u680F\u4F1A\u4E00\u76F4\u6FC0\u6D3B\u76F4\u5230\u7528\u6237\u901A\u8FC7 Cmd + Q \u663E\u5F0F\u9000\u51FA</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>process<span class="token punctuation">.</span>platform <span class="token operator">!==</span> <span class="token string">&#39;darwin&#39;</span><span class="token punctuation">)</span> app<span class="token punctuation">.</span><span class="token function">quit</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
app<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;activate&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u5BF9\u4E8E OS X \u7CFB\u7EDF\uFF0C\u5F53 dock \u56FE\u6807\u88AB\u70B9\u51FB\u540E\u4F1A\u91CD\u65B0\u521B\u5EFA\u4E00\u4E2A app \u7A97\u53E3\uFF0C\u5E76\u4E14\u4E0D\u4F1A\u6709\u5176\u4ED6\u7A97\u53E3\u6253\u5F00</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>win <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token function">createWindow</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">// \u5728\u8FD9\u4E2A\u6587\u4EF6\u540E\u9762\u4F60\u53EF\u4EE5\u76F4\u63A5\u5305\u542B\u4F60\u5E94\u7528\u7279\u5B9A\u7684\u7531\u4E3B\u8FDB\u7A0B\u8FD0\u884C\u7684\u4EE3\u7801\u3002</span>
<span class="token comment">// \u4E5F\u53EF\u4EE5\u628A\u8FD9\u4E9B\u4EE3\u7801\u653E\u5728\u53E6\u4E00\u4E2A\u6587\u4EF6\u4E2D\u7136\u540E\u5728\u8FD9\u91CC\u5BFC\u5165\u3002</span>
</code></pre></div><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br></div></div><p>\u6E32\u67D3\u8FDB\u7A0B\u4EE3\u7801\uFF1A</p><div class="language-js ext-js code-wrapper"><div class="cbt-traffic_light"><span></span><span></span><span></span></div><span class="copy"></span><div class="code-inner"><pre class="language-js line-numbers-mode"><code class="language-js"><span class="token keyword">const</span> btn <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">&#39;#btn&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;path&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> BrowerWindow <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;electron&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>remote<span class="token punctuation">.</span>BrowserWindow
btn<span class="token punctuation">.</span><span class="token function-variable function">onclick</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  win <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BrowerWindow</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">300</span><span class="token punctuation">,</span>
    <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">,</span>
    <span class="token literal-property property">frame</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
    <span class="token literal-property property">transparent</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token comment">// fullscreen:true</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
  win<span class="token punctuation">.</span><span class="token function">loadURL</span><span class="token punctuation">(</span>path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&#39;file:&#39;</span><span class="token punctuation">,</span> __dirname<span class="token punctuation">,</span> <span class="token string">&#39;news.html&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
  win<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;close&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span> win <span class="token operator">=</span> <span class="token keyword">null</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre></div><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p><strong>\u66F4\u591A\u8BE6\u60C5</strong></p><p><a href="https://www.w3cschool.cn/electronmanual/electronmanual-electronapp.html" target="_blank" rel="noopener">https://www.w3cschool.cn/electronmanual/electronmanual-electronapp.html</a></p>`,9),c=[o],b={title:"Electron \u6A21\u5757\u4ECB\u7ECD",tag:["electron","nodejs"],author:"Artiely",date:"2018-7-5",cover:"/2022-05-14-21-48-33.png",base64:"01bcf3",tinyCover:"/cover/2022-05-14-21-48-33.png",coverWidth:736,coverHeight:1085,coverPrimary:"3c3a3d",coverSecondary:"c3c5c2",meta:[{property:"og:title",content:"Electron \u6A21\u5757\u4ECB\u7ECD"}]},l={__name:"2018-7-5-electron-model",setup(r,{expose:s}){return a({title:"Electron \u6A21\u5757\u4ECB\u7ECD",meta:[{property:"og:title",content:"Electron \u6A21\u5757\u4ECB\u7ECD"}]}),s({frontmatter:{title:"Electron \u6A21\u5757\u4ECB\u7ECD",tag:["electron","nodejs"],author:"Artiely",date:"2018-7-5",cover:"/2022-05-14-21-48-33.png",base64:"01bcf3",tinyCover:"/cover/2022-05-14-21-48-33.png",coverWidth:736,coverHeight:1085,coverPrimary:"3c3a3d",coverSecondary:"c3c5c2",meta:[{property:"og:title",content:"Electron \u6A21\u5757\u4ECB\u7ECD"}]}}),(u,k)=>(p(),t("div",null,c))}};typeof n=="function"&&n(l);export{l as default,b as frontmatter};
