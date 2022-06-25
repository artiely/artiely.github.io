import{i as a,o as s,c as o,j as e,k as r}from"./app.63029783.js";const t=r(`<h1 id="git-stash" tabindex="-1"><span class="prefix"></span><span class="content">git stash</span><span class="suffix"></span></h1><ol><li>\u6240\u5728\u7684\u5206\u652F\u6CA1\u6709commit\u6743\u9650\uFF0C\u4F46\u662F\u6211\u4EEC\u5DF2\u7ECF\u5728\u5F53\u524D\u5206\u652F\u4E0A\u505A\u4E86\u5927\u91CF\u7684\u4FEE\u6539\u3002\uFF08git\u63D0\u4F9B\u4E86\u6682\u5B58\u7684\u65B9\u5F0F\u5E2E\u6211\u4EEC\u89E3\u51B3\u8BE5\u95EE\u9898\uFF09</li><li>\u5728\u6211\u4EEC\u9879\u76EE\u4E2D\u6211\u4EEC\u7ECF\u5E38\u4F1A\u9047\u5230\u8FD9\u6837\u4E00\u79CD\u573A\u666F\uFF0C\u6211\u4EEC\u5728\u67D0\u4E2A\u5206\u652F\u4E2D\u4FEE\u6539\u4EE3\u7801\uFF0C\u7A81\u7136\u6709\u4E00\u4E2A\u7D27\u6025\u7684\u4EFB\u52A1\u9700\u8981\u6211\u4EEC\u5728develop\u4E2D\u8FDB\u884C\u4FEE\u590D\u95EE\u9898\uFF0C\u8FD9\u4E2A\u65F6\u5019\u6211\u4EEC\u4E0D\u5F97\u4E0D\u5C06\u6211\u4EEC\u5F53\u524D\u5F00\u7684\u5206\u652F\u4E2D\u4EE3\u7801\u6682\u5B58\uFF0C\u7B49\u6211\u4EEC\u4FEE\u6539\u5B8Cdevelop\u5206\u652F\u4E2D\u7684\u5185\u5BB9\u7684\u65F6\u5019\u5728\u56DE\u8FC7\u5934\u53BB\u7EE7\u7EED\u4FEE\u6539\uFF0C\u8FD9\u4E2A\u65F6\u5019\u6211\u4EEC\u5C31\u7528\u5230\u4E86\u9700\u8981\u4F7F\u7528\u5230\u4E0B\u9762\u7684\u4E00\u7EC4\u547D\u4EE4\u3002</li></ol><div class="language-bash ext-bash code-wrapper"><div class="cbt-traffic_light"><span></span><span></span><span></span></div><span class="copy"></span><div class="code-inner"><pre class="language-bash line-numbers-mode"><code class="language-bash">//\u628A\u6682\u5B58\u533A\u5185\u7684\u4FEE\u6539\u5B58\u50A8\u8D77\u6765\uFF1A
<span class="token function">git</span> stash
//\u5207\u6362\u5230\u6B63\u786E\u7684\u5206\u652F\uFF1A
<span class="token function">git</span> checkout \u5206\u652F\u540D
//\u5C06\u5B58\u50A8\u7684\u4FEE\u6539\u53D6\u51FA\u6765\uFF1A
<span class="token function">git</span> stash pop
// \u7EE7\u7EED\u8FDB\u884C\u63D0\u4EA4\u7B49\u6B63\u5E38\u7684\u64CD\u4F5C
</code></pre></div><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div>`,3),c=[t],b={tag:["git"],cover:"/2022-05-11-09-11-13.png",tinyCover:"/cover/2022-05-11-09-11-13.png",coverWidth:523,coverHeight:520,meta:[]},i={__name:"index",setup(l,{expose:n}){return a({meta:[]}),n({frontmatter:{tag:["git"],cover:"/2022-05-11-09-11-13.png",tinyCover:"/cover/2022-05-11-09-11-13.png",coverWidth:523,coverHeight:520,meta:[]}}),(d,m)=>(s(),o("div",null,c))}};typeof e=="function"&&e(i);export{i as default,b as frontmatter};