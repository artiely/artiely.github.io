import{i as a,o as t,c as e,j as n,k as o}from"./app.4eeffe1f.js";const p=o(`<h1 id="electron%E8%BF%90%E8%A1%8C%E7%9A%84%E6%B5%81%E7%A8%8B" tabindex="-1"><span class="prefix"></span><span class="content">Electron\u8FD0\u884C\u7684\u6D41\u7A0B</span><span class="suffix"></span></h1><figure><img src="https://gitee.com/artiely/Figure-bed/raw/master/images/20200306160653.png" alt=""></figure><h2 id="electron-%E4%B8%BB%E8%BF%9B%E7%A8%8B%E5%92%8C%E6%B8%B2%E6%9F%93%E8%BF%9B%E7%A8%8B" tabindex="-1"><span class="prefix"></span><span class="content">Electron \u4E3B\u8FDB\u7A0B\u548C\u6E32\u67D3\u8FDB\u7A0B</span><span class="suffix"></span></h2><p><strong>\u4E3B\u8FDB\u7A0B\u548C\u6E32\u67D3\u5668\u8FDB\u7A0B</strong>\uFF1A</p><p>Electron \u8FD0\u884C package.json \u7684 <strong>main \u811A\u672C\u7684\u8FDB\u7A0B\u88AB\u79F0\u4E3A\u4E3B\u8FDB\u7A0B</strong> \u3002 \u5728\u4E3B\u8FDB\u7A0B\u4E2D\u8FD0\u884C\u7684\u811A \u672C\u901A\u8FC7\u521B\u5EFA web \u9875\u9762\u6765\u5C55\u793A\u7528\u6237\u754C\u9762\u3002 \u4E00\u4E2A Electron \u5E94\u7528\u603B\u662F\u6709\u4E14<strong>\u53EA\u6709\u4E00\u4E2A\u4E3B\u8FDB\u7A0B</strong>\u3002</p><p>\u7531\u4E8E Electron \u4F7F\u7528\u4E86 <strong>Chromium</strong>\uFF08\u8C37\u6B4C\u6D4F\u89C8\u5668\uFF09\u6765\u5C55\u793A web \u9875\u9762\uFF0C\u6240\u4EE5 Chromium \u7684 \u591A\u8FDB\u7A0B\u67B6\u6784\u4E5F\u88AB\u4F7F\u7528\u5230\u3002 <strong>\u6BCF\u4E2A Electron \u4E2D\u7684 web \u9875\u9762\u8FD0\u884C\u5728\u5B83\u81EA\u5DF1\u7684\u6E32\u67D3\u8FDB\u7A0B\u4E2D</strong>\u3002</p><p>\u4E3B\u8FDB\u7A0B\u4F7F\u7528 BrowserWindow \u5B9E\u4F8B\u521B\u5EFA\u9875\u9762\u3002\u6BCF\u4E2A BrowserWindow \u5B9E\u4F8B\u90FD\u5728\u81EA\u5DF1\u7684\u6E32 \u67D3\u8FDB\u7A0B\u91CC\u8FD0\u884C\u9875\u9762\u3002 \u5F53\u4E00\u4E2A BrowserWindow \u5B9E\u4F8B\u88AB\u9500\u6BC1\u540E\uFF0C\u76F8\u5E94\u7684\u6E32\u67D3\u8FDB\u7A0B\u4E5F\u4F1A\u88AB\u7EC8\u6B62\u3002</p><figure><img src="https://gitee.com/artiely/Figure-bed/raw/master/images/20200306160550.png" alt=""></figure><p><strong>\u8FDB\u7A0B</strong>\uFF1A\u8FDB\u7A0B\uFF08Process\uFF09\u662F\u8BA1\u7B97\u673A\u4E2D\u7684\u7A0B\u5E8F\u5173\u4E8E\u67D0\u6570\u636E\u96C6\u5408\u4E0A\u7684\u4E00\u6B21\u8FD0\u884C\u6D3B\u52A8\uFF0C\u662F \u7CFB\u7EDF\u8FDB\u884C\u8D44\u6E90\u5206\u914D\u548C\u8C03\u5EA6\u7684\u57FA\u672C\u5355\u4F4D\uFF0C\u662F\u64CD\u4F5C\u7CFB\u7EDF\u7ED3\u6784\u7684\u57FA\u7840\u3002</p><p><strong>\u7EBF\u7A0B</strong>\uFF1A\u5728\u2F00\u4E00\u4E2A\u7A0B\u5E8F\u91CC\u7684\u4E00\u4E2A\u6267\u884C\u8DEF\u7EBF\u5C31\u53EB\u505A\u7EBF\u7A0B\uFF08thread\uFF09\u3002\u66F4\u51C6\u786E\u7684\u5B9A\u4E49\u662F\uFF1A \u7EBF\u7A0B\u662F\u201C\u4E00\u4E2A\u8FDB\u7A0B\u5185\u90E8\u7684\u63A7\u5236\u5E8F\u5217\u201D\u3002</p><p><strong>\u7EBF\u7A0B\u548C\u8FDB\u7A0B</strong>\uFF1A\u4E00\u4E2A\u7A0B\u5E8F\u81F3\u5C11\u6709\u4E00\u4E2A\u8FDB\u7A0B,\u4E00\u4E2A\u8FDB\u7A0B\u81F3\u5C11\u6709\u4E00\u4E2A\u7EBF\u7A0B</p><h2 id="electron%E6%B8%B2%E6%9F%93%E8%BF%9B%E7%A8%8B%E4%B8%AD%E9%80%9A%E8%BF%87nodejs%E8%AF%BB%E5%8F%96%E6%9C%AC%E5%9C%B0%E6%96%87%E4%BB%B6" tabindex="-1"><span class="prefix"></span><span class="content">Electron\u6E32\u67D3\u8FDB\u7A0B\u4E2D\u901A\u8FC7Nodejs\u8BFB\u53D6\u672C\u5730\u6587\u4EF6</span><span class="suffix"></span></h2><p>\u5728\u666E\u901A\u7684\u6D4F\u89C8\u5668\u4E2D\uFF0Cweb \u9875\u9762\u901A\u5E38\u5728\u4E00\u4E2A\u6C99\u76D2\u73AF\u5883\u4E2D\u8FD0\u884C\uFF0C\u4E0D\u88AB\u5141\u8BB8\u53BB\u63A5\u89E6\u539F\u751F\u7684\u8D44\u6E90\u3002 \u7136\u800C Electron \u7684\u7528\u6237\u5728 Node.js \u7684 API \u652F\u6301\u4E0B\u53EF\u4EE5\u5728\u9875\u9762\u4E2D\u548C\u64CD\u4F5C\u7CFB\u7EDF\u8FDB\u884C\u4E00\u4E9B\u5E95\u5C42\u4EA4\u4E92\u3002</p><p>Nodejs \u5728\u4E3B\u8FDB\u7A0B\u548C\u6E32\u67D3\u8FDB\u7A0B\u4E2D\u90FD\u53EF\u4EE5\u4F7F\u7528\u3002\u6E32\u67D3\u8FDB\u7A0B\u56E0\u4E3A\u5B89\u5168\u9650\u5236\uFF0C\u4E0D\u80FD\u76F4\u63A5\u64CD\u4F5C\u539F \u751F GUI\u3002\u867D\u7136\u5982\u6B64\uFF0C\u56E0\u4E3A\u96C6\u6210\u4E86 Nodejs\uFF0C\u6E32\u67D3\u8FDB\u7A0B\u4E5F\u6709\u4E86\u64CD\u4F5C\u7CFB\u7EDF\u5E95\u5C42 API \u7684\u80FD\u529B\uFF0CNodejs \u4E2D\u5E38\u7528\u7684 Path\u3001fs\u3001Crypto \u7B49\u6A21\u5757\u5728 Electron \u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528\uFF0C\u65B9\u4FBF\u6211\u4EEC\u5904\u7406\u94FE\u63A5\u3001\u8DEF\u5F84\u3001 \u6587\u4EF6 MD5 \u7B49\uFF0C\u540C\u65F6 npm \u8FD8\u6709\u6210\u5343\u4E0A\u4E07\u7684\u6A21\u5757\u4F9B\u6211\u4EEC\u9009\u62E9\u3002</p><div class="language-js ext-js code-wrapper"><div class="cbt-traffic_light"><span></span><span></span><span></span></div><span class="copy"></span><div class="code-inner"><pre class="language-js line-numbers-mode"><code class="language-js"><span class="token keyword">const</span> fs <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;fs&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> content <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;content&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> button <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">&#39;button&#39;</span><span class="token punctuation">)</span>
button<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">&#39;click&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  fs<span class="token punctuation">.</span><span class="token function">readFile</span><span class="token punctuation">(</span><span class="token string">&#39;package.json&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;utf8&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">err<span class="token punctuation">,</span> data</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    content<span class="token punctuation">.</span>textContent <span class="token operator">=</span> data<span class="token punctuation">;</span> console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="electron-%E5%BC%80%E5%90%AF%E8%B0%83%E8%AF%95%E6%A8%A1%E5%BC%8F" tabindex="-1"><span class="prefix"></span><span class="content">Electron \u5F00\u542F\u8C03\u8BD5\u6A21\u5F0F</span><span class="suffix"></span></h2><div class="language-js ext-js code-wrapper"><div class="cbt-traffic_light"><span></span><span></span><span></span></div><span class="copy"></span><div class="code-inner"><pre class="language-js line-numbers-mode"><code class="language-js">mainWindow<span class="token punctuation">.</span>webContents<span class="token punctuation">.</span><span class="token function">openDevTools</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre></div><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div>`,17),c=[p],k={title:"Electron\u57FA\u672C\u6982\u5FF5",tag:["electron","nodejs"],author:"Artiely",date:"2018-7-4",cover:"/2022-05-14-21-48-13.png",base64:"5587d7",tinyCover:"/cover/2022-05-14-21-48-13.png",coverWidth:564,coverHeight:797,coverPrimary:"7d6f76",coverSecondary:"829089",meta:[{property:"og:title",content:"Electron\u57FA\u672C\u6982\u5FF5"}]},r={__name:"2018-7-4-electron-base",setup(l,{expose:s}){return a({title:"Electron\u57FA\u672C\u6982\u5FF5",meta:[{property:"og:title",content:"Electron\u57FA\u672C\u6982\u5FF5"}]}),s({frontmatter:{title:"Electron\u57FA\u672C\u6982\u5FF5",tag:["electron","nodejs"],author:"Artiely",date:"2018-7-4",cover:"/2022-05-14-21-48-13.png",base64:"5587d7",tinyCover:"/cover/2022-05-14-21-48-13.png",coverWidth:564,coverHeight:797,coverPrimary:"7d6f76",coverSecondary:"829089",meta:[{property:"og:title",content:"Electron\u57FA\u672C\u6982\u5FF5"}]}}),(u,d)=>(t(),e("div",null,c))}};typeof n=="function"&&n(r);export{r as default,k as frontmatter};
