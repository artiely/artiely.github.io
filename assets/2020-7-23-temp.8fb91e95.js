import{i as a,o as p,c as e,j as n,k as t}from"./app.63029783.js";const o=t(`<h1 id="%E5%88%9B%E5%BB%BA%E6%A8%A1%E6%9D%BF%E8%84%9A%E6%89%8B%E6%9E%B6" tabindex="-1"><span class="prefix"></span><span class="content">\u521B\u5EFA\u6A21\u677F\u811A\u624B\u67B6</span><span class="suffix"></span></h1><h2 id="commander" tabindex="-1"><span class="prefix"></span><span class="content">commander</span><span class="suffix"></span></h2><p><a href="https://github.com/tj/commander.js" target="_blank" rel="noopener">commander</a> \u8FD9\u662F\u7528\u6765\u7F16\u5199\u6307\u4EE4\u548C\u5904\u7406\u547D\u4EE4\u884C\u7684\uFF0C\u5177\u4F53\u7528\u6CD5\u5982\u4E0B\uFF1A</p><div class="language-js ext-js code-wrapper"><div class="cbt-traffic_light"><span></span><span></span><span></span></div><span class="copy"></span><div class="code-inner"><pre class="language-js line-numbers-mode"><code class="language-js"><span class="token keyword">const</span> program <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;commander&#39;</span><span class="token punctuation">)</span>
<span class="token comment">// \u5B9A\u4E49\u6307\u4EE4</span>
program
  <span class="token punctuation">.</span><span class="token function">version</span><span class="token punctuation">(</span><span class="token string">&#39;0.0.1&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">command</span><span class="token punctuation">(</span><span class="token string">&#39;init&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Generate a new project from a template&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">action</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u56DE\u8C03\u51FD\u6570</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token comment">// \u89E3\u6790\u547D\u4EE4\u884C\u53C2\u6570</span>
program<span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>process<span class="token punctuation">.</span>argv<span class="token punctuation">)</span>
</code></pre></div><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>\u66FF\u4EE3\u65B9\u6848 <a href="https://github.com/yargs/yargs" target="_blank" rel="noopener">yargs</a></p><h3 id="inquirer" tabindex="-1"><span class="prefix"></span><span class="content">inquirer</span><span class="suffix"></span></h3><p><a href="https://github.com/SBoudrias/Inquirer.js" target="_blank" rel="noopener">inquirer</a> \u8FD9\u662F\u4E2A\u5F3A\u5927\u7684\u4EA4\u4E92\u5F0F\u547D\u4EE4\u884C\u5DE5\u5177\uFF0C\u5177\u4F53\u7528\u6CD5\u5982\u4E0B\uFF1A</p><div class="language-js ext-js code-wrapper"><div class="cbt-traffic_light"><span></span><span></span><span></span></div><span class="copy"></span><div class="code-inner"><pre class="language-js line-numbers-mode"><code class="language-js"><span class="token keyword">const</span> inquirer <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;inquirer&#39;</span><span class="token punctuation">)</span>
inquirer
  <span class="token punctuation">.</span><span class="token function">prompt</span><span class="token punctuation">(</span><span class="token punctuation">[</span>
    <span class="token comment">// \u4E00\u4E9B\u4EA4\u4E92\u5F0F\u7684\u95EE\u9898</span>
  <span class="token punctuation">]</span><span class="token punctuation">)</span>
  <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">answers</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u56DE\u8C03\u51FD\u6570\uFF0Canswers \u5C31\u662F\u7528\u6237\u8F93\u5165\u7684\u5185\u5BB9\uFF0C\u662F\u4E2A\u5BF9\u8C61</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre></div><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>\u60F3\u8C61\u4E00\u4E0B\u6211\u4EEC\u7528 vue init webpack project-name \u4E4B\u540E\u662F\u4E0D\u662F\u4F1A\u6709\u51E0\u4E2A\u4EA4\u4E92\u95EE\u9898\uFF0C\u95EE\u4F60\u6587\u4EF6\u540D\u554A\u3001\u4F5C\u8005\u554A\u3001\u63CF\u8FF0\u554A\u3001\u8981\u4E0D\u8981\u7528 eslint \u554A\u7B49\u7B49\u4E4B\u7C7B\u7684\uFF0C\u5C31\u662F\u7528\u8FD9\u4E2A\u6765\u5199\u7684\u3002</p><h3 id="chalk" tabindex="-1"><span class="prefix"></span><span class="content">chalk</span><span class="suffix"></span></h3><p><a href="https://github.com/chalk/chalk" target="_blank" rel="noopener">chalk</a> \u8FD9\u662F\u7528\u6765\u4FEE\u6539\u63A7\u5236\u53F0\u8F93\u51FA\u5185\u5BB9\u6837\u5F0F\u7684\uFF0C\u6BD4\u5982\u989C\u8272\u554A\uFF0C\u5177\u4F53\u7528\u6CD5\u5982\u4E0B\uFF1A</p><div class="language-js ext-js code-wrapper"><div class="cbt-traffic_light"><span></span><span></span><span></span></div><span class="copy"></span><div class="code-inner"><pre class="language-js line-numbers-mode"><code class="language-js"><span class="token keyword">const</span> chalk <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;chalk&#39;</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>chalk<span class="token punctuation">.</span><span class="token function">green</span><span class="token punctuation">(</span><span class="token string">&#39;success&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>chalk<span class="token punctuation">.</span><span class="token function">red</span><span class="token punctuation">(</span><span class="token string">&#39;error&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre></div><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="ora" tabindex="-1"><span class="prefix"></span><span class="content">ora</span><span class="suffix"></span></h3><p><a href="https://github.com/sindresorhus/ora" target="_blank" rel="noopener">ora</a> \u8FD9\u662F\u4E00\u4E2A\u597D\u770B\u7684\u52A0\u8F7D\uFF0C\u5C31\u662F\u4F60\u4E0B\u8F7D\u7684\u65F6\u5019\u4F1A\u6709\u4E2A\u8F6C\u5708\u5708\u7684\u90A3\u79CD\u6548\u679C\uFF0C\u7528\u6CD5\u5982\u4E0B\uFF1A</p><div class="language-js ext-js code-wrapper"><div class="cbt-traffic_light"><span></span><span></span><span></span></div><span class="copy"></span><div class="code-inner"><pre class="language-js line-numbers-mode"><code class="language-js"><span class="token keyword">const</span> ora <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;ora&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> spinner <span class="token operator">=</span> <span class="token function">ora</span><span class="token punctuation">(</span><span class="token string">&#39;downloading template ...&#39;</span><span class="token punctuation">)</span>
spinner<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre></div><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="download-git-repo" tabindex="-1"><span class="prefix"></span><span class="content">download-git-repo</span><span class="suffix"></span></h3><p><a href="https://www.npmjs.com/package/download-git-repo" target="_blank" rel="noopener">download-git-repo</a> \u770B\u540D\u5B57\u5F88\u660E\u663E\u4E86\uFF0C\u8FD9\u662F\u7528\u6765\u4E0B\u8F7D\u8FDC\u7A0B\u6A21\u677F\u7684\uFF0C\u652F\u6301 GitHub\u3001 GitLab \u548C Bitbucket \u7B49\uFF0C\u7528\u6CD5\u5982\u4E0B\uFF1A</p><div class="language-js ext-js code-wrapper"><div class="cbt-traffic_light"><span></span><span></span><span></span></div><span class="copy"></span><div class="code-inner"><pre class="language-js line-numbers-mode"><code class="language-js"><span class="token keyword">const</span> download <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;download-git-repo&#39;</span><span class="token punctuation">)</span>
<span class="token function">download</span><span class="token punctuation">(</span>repository<span class="token punctuation">,</span> destination<span class="token punctuation">,</span> options<span class="token punctuation">,</span> callback<span class="token punctuation">)</span>
</code></pre></div><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u5176\u4E2D <code class="">repository</code> \u662F\u8FDC\u7A0B\u4ED3\u5E93\u5730\u5740\uFF1B<code class="">destination</code> \u662F\u5B58\u653E\u4E0B\u8F7D\u7684\u6587\u4EF6\u8DEF\u5F84\uFF0C\u4E5F\u53EF\u4EE5\u76F4\u63A5\u5199\u6587\u4EF6\u540D\uFF0C\u9ED8\u8BA4\u5C31\u662F\u5F53\u524D\u76EE\u5F55\uFF1B<code class="">options</code> \u662F\u4E00\u4E9B\u9009\u9879\uFF0C\u6BD4\u5982 <code class="">{ clone\uFF1Aboolean }</code> \u8868\u793A\u7528 http download \u8FD8\u662F <code class="">git clone</code> \u7684\u5F62\u5F0F\u4E0B\u8F7D\u3002</p><h3 id="yeoman" tabindex="-1"><span class="prefix"></span><span class="content">yeoman</span><span class="suffix"></span></h3><p><a href="https://github.com/yeoman" target="_blank" rel="noopener">yeoman</a></p><p>\u5F85\u7E8C</p>`,22),c=[o],m={tag:["commander"],cover:"/2022-05-13-13-15-00.png",base64:262626,author:"artiely",date:"2020-7-23",tinyCover:"/cover/2022-05-13-13-15-00.png",coverWidth:405,coverHeight:720,coverPrimary:"2a2929",coverSecondary:"d5d6d6",meta:[]},r={__name:"2020-7-23-temp",setup(l,{expose:s}){return a({meta:[]}),s({frontmatter:{tag:["commander"],cover:"/2022-05-13-13-15-00.png",base64:262626,author:"artiely",date:"2020-7-23",tinyCover:"/cover/2022-05-13-13-15-00.png",coverWidth:405,coverHeight:720,coverPrimary:"2a2929",coverSecondary:"d5d6d6",meta:[]}}),(u,d)=>(p(),e("div",null,c))}};typeof n=="function"&&n(r);export{r as default,m as frontmatter};