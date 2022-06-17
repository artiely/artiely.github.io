import{i as a,o as p,c as t,j as n,k as e}from"./app.4eeffe1f.js";const o=e(`<h1 id="electron-%E5%BC%B9%E5%87%BA%E6%A1%86" tabindex="-1"><span class="prefix"></span><span class="content">Electron \u5F39\u51FA\u6846</span><span class="suffix"></span></h1><p>dialog \u6A21\u5757\u63D0\u4F9B\u4E86 api \u6765\u5C55\u793A\u539F\u751F\u7684\u7CFB\u7EDF\u5BF9\u8BDD\u6846\uFF0C\u4F8B\u5982\u6253\u5F00\u6587\u4EF6\u6846\uFF0Calert \u6846\uFF0C \u6240\u4EE5 web \u5E94\u7528\u53EF\u4EE5\u7ED9\u7528\u6237\u5E26\u6765\u8DDF\u7CFB\u7EDF\u5E94\u7528\u76F8\u540C\u7684\u4F53\u9A8C\u3002 <img src="https://gitee.com/artiely/Figure-bed/raw/master/images/20200308120603.png" alt=""></p><div class="language-js ext-js code-wrapper"><div class="cbt-traffic_light"><span></span><span></span><span></span></div><span class="copy"></span><div class="code-inner"><pre class="language-js line-numbers-mode"><code class="language-js">dialog<span class="token punctuation">.</span><span class="token function">showErrorBox</span><span class="token punctuation">(</span><span class="token string">&#39;title&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;content&#39;</span><span class="token punctuation">)</span>
</code></pre></div><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><figure><img src="https://gitee.com/artiely/Figure-bed/raw/master/images/20200308120639.png" alt=""></figure><div class="language-js ext-js code-wrapper"><div class="cbt-traffic_light"><span></span><span></span><span></span></div><span class="copy"></span><div class="code-inner"><pre class="language-js line-numbers-mode"><code class="language-js">dialog<span class="token punctuation">.</span><span class="token function">showMessageBox</span><span class="token punctuation">(</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;info&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;message&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">&#39;hello&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">buttons</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;ok&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;cancel&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">(</span><span class="token parameter">index</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>index <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;You click ok.&#39;</span><span class="token punctuation">)</span>

    <span class="token keyword">else</span>
      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;You click cancel&#39;</span><span class="token punctuation">)</span>

  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span>
</code></pre></div><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><figure><img src="https://gitee.com/artiely/Figure-bed/raw/master/images/20200308120749.png" alt=""></figure><div class="language-js ext-js code-wrapper"><div class="cbt-traffic_light"><span></span><span></span><span></span></div><span class="copy"></span><div class="code-inner"><pre class="language-js line-numbers-mode"><code class="language-js">dialog<span class="token punctuation">.</span><span class="token function">showOpenDialog</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">properties</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;openFile&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;openDirectory&#39;</span><span class="token punctuation">]</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">files</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>files<span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><figure><img src="https://gitee.com/artiely/Figure-bed/raw/master/images/20200308120918.png" alt=""></figure><div class="language-js ext-js code-wrapper"><div class="cbt-traffic_light"><span></span><span></span><span></span></div><span class="copy"></span><div class="code-inner"><pre class="language-js line-numbers-mode"><code class="language-js">dialog<span class="token punctuation">.</span><span class="token function">showSaveDialog</span><span class="token punctuation">(</span>
  <span class="token punctuation">{</span>
    <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">&#39;save some file&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">filters</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;Images&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">extensions</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;jpg&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;png&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;gif&#39;</span><span class="token punctuation">]</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;Movies&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">extensions</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;mkv&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;avi&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;mp4&#39;</span><span class="token punctuation">]</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;Custom File Type&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">extensions</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;as&#39;</span><span class="token punctuation">]</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;All Files&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">extensions</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;*&#39;</span><span class="token punctuation">]</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">(</span><span class="token parameter">filename</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>filename<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">)</span>
</code></pre></div><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div>`,9),c=[o],d={title:"Electron \u5F39\u51FA\u6846",tag:["electron","nodejs"],author:"Artiely",date:"2018-7-8",cover:"/2022-05-14-21-49-57.png",base64:"2f3341",tinyCover:"/cover/2022-05-14-21-49-57.png",coverWidth:474,coverHeight:842,coverPrimary:"2794c4",coverSecondary:"d86b3b",meta:[{property:"og:title",content:"Electron \u5F39\u51FA\u6846"}]},l={__name:"2018-7-8-electron-dialog",setup(r,{expose:s}){return a({title:"Electron \u5F39\u51FA\u6846",meta:[{property:"og:title",content:"Electron \u5F39\u51FA\u6846"}]}),s({frontmatter:{title:"Electron \u5F39\u51FA\u6846",tag:["electron","nodejs"],author:"Artiely",date:"2018-7-8",cover:"/2022-05-14-21-49-57.png",base64:"2f3341",tinyCover:"/cover/2022-05-14-21-49-57.png",coverWidth:474,coverHeight:842,coverPrimary:"2794c4",coverSecondary:"d86b3b",meta:[{property:"og:title",content:"Electron \u5F39\u51FA\u6846"}]}}),(u,k)=>(p(),t("div",null,c))}};typeof n=="function"&&n(l);export{l as default,d as frontmatter};
