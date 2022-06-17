import{i as a,o as e,c as p,j as n,k as l}from"./app.519b9fe6.js";var r="/assets/20200605163442.b5ab0b61.png";const c=l(`<p>\u4E00\u4E2A\u597D\u7684\u76EE\u5F55\u7ED3\u6784\u80FD\u8BA9\u4EBA\u8FC5\u901F\u4E86\u89E3\u9879\u76EE\u7684\u5C42\u6B21\u548C\u66F4\u6613\u7EF4\u62A4</p><h2 id="%E5%BD%93%E5%89%8D%E7%9A%84%E9%A1%B9%E7%9B%AE%E7%BB%93%E6%9E%84" tabindex="-1"><span class="prefix"></span><span class="content">\u5F53\u524D\u7684\u9879\u76EE\u7ED3\u6784</span><span class="suffix"></span></h2><div class="language-shell ext-shell code-wrapper"><div class="cbt-traffic_light"><span></span><span></span><span></span></div><span class="copy"></span><div class="code-inner"><pre class="language-shell line-numbers-mode"><code class="language-shell">\u251C\u2500\u2500public     
\u2502 \u251C\u2500\u2500favicon.i
\u2502 \u2514\u2500\u2500index.htm
\u251C\u2500\u2500src        
\u2502 \u251C\u2500\u2500assets   
\u2502 \u2502 \u2514\u2500\u2500logo.pn
\u2502 \u251C\u2500\u2500component
\u2502 \u2502 \u2514\u2500\u2500HelloWo
\u2502 \u251C\u2500\u2500router   
\u2502 \u2502 \u2514\u2500\u2500index.j
\u2502 \u251C\u2500\u2500store    
\u2502 \u2502 \u2514\u2500\u2500index.j
\u2502 \u251C\u2500\u2500views    
\u2502 \u2502 \u251C\u2500\u2500About.v
\u2502 \u2502 \u2514\u2500\u2500Home.vu
\u2502 \u251C\u2500\u2500App.vue  
\u2502 \u2514\u2500\u2500main.js  
\u251C\u2500\u2500.browsersli
\u251C\u2500\u2500.eslintrc.j
\u251C\u2500\u2500.gitignore 
\u251C\u2500\u2500babel.confi
\u251C\u2500\u2500package-loc
\u251C\u2500\u2500package.jso
\u2514\u2500\u2500README.md  
</code></pre></div><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div><div class="tip custom-container"><p class="custom-container-title"><svg class="tip container-icon" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>TIP</p><p>\u5728\u6B64\u63A8\u8350\u4E00\u4E2A\u6211\u4E2A\u4EBA\u5199\u7684\u751F\u6210\u9879\u76EE\u7ED3\u6784\u7684\u5C0F\u5DE5\u5177\uFF0Ctreeplus</p><div class="language-shell ext-shell code-wrapper"><div class="cbt-traffic_light"><span></span><span></span><span></span></div><span class="copy"></span><div class="code-inner"><pre class="language-shell line-numbers-mode"><code class="language-shell"><span class="token comment"># \u5B89\u88C5</span>
<span class="token function">npm</span> i -g treeplus
<span class="token comment"># \u4F7F\u7528</span>
tp -i node_mdules .history
<span class="token comment"># -i \u53EF\u4EE5\u6392\u9664\u6307\u5B9A\u7684\u6587\u4EF6\u5E76\u751F\u6210\u7ED3\u6784\u6811</span>
<span class="token comment"># \u66F4\u591A\u4F7F\u7528\u65B9\u6CD5\u8BF7\u5173\u6CE8 https://github.com/artiely/treeplus</span>
</code></pre></div><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div></div><h3 id="%E6%88%91%E4%BB%AC%E6%B7%BB%E5%8A%A0%E4%B8%80%E4%BA%9B%E5%BF%85%E9%A1%BB%E5%BE%97%E6%96%87%E4%BB%B6%E5%A4%B9" tabindex="-1"><span class="prefix"></span><span class="content">\u6211\u4EEC\u6DFB\u52A0\u4E00\u4E9B\u5FC5\u987B\u5F97\u6587\u4EF6\u5939</span><span class="suffix"></span></h3><div class="language-shell ext-shell code-wrapper"><div class="cbt-traffic_light"><span></span><span></span><span></span></div><span class="copy"></span><div class="code-inner"><pre class="language-shell line-numbers-mode"><code class="language-shell">\u251C\u2500\u2500public             <span class="token comment"># \u9759\u6001\u8D44\u6E90\uFF08\u65E0\u9700\u7F16\u8BD1\uFF09</span>
\u2502 \u251C\u2500\u2500static           <span class="token comment"># \u7B2C\u4E09\u65B9\u7F16\u8BD1\u597D\u7684\u5E93\u5982tinymce\u5BCC\u6587\u672C\u7B49</span>
\u2502 \u251C\u2500\u2500favicon.ico
\u2502 \u2514\u2500\u2500index.html
\u251C\u2500\u2500src
\u2502 \u251C\u2500\u2500api              <span class="token comment"># \u63A5\u53E3\u7BA1\u7406</span>
\u2502 \u251C\u2500\u2500assets           <span class="token comment"># \u9759\u6001\u8D44\u6E90\uFF08\u9700\u7F16\u8BD1\uFF09</span>
\u2502 \u2502 \u251C\u2500\u2500style          <span class="token comment"># \u6837\u5F0F\u8868</span>
\u2502 \u2502 \u2502 \u251C\u2500\u2500cover.less   <span class="token comment"># \u7528\u4E8E\u5168\u5C40\u8986\u76D6\u7684\u6837\u5F0F</span>
\u2502 \u2502 \u2502 \u251C\u2500\u2500index.less   <span class="token comment"># \u6837\u5F0F\u5165\u53E3</span>
\u2502 \u2502 \u2502 \u251C\u2500\u2500layout.less  <span class="token comment"># \u5168\u5C40\u5E03\u5C40\u6837\u5F0F</span>
\u2502 \u2502 \u2502 \u2514\u2500\u2500var.less     <span class="token comment"># \u5168\u5C40\u6837\u5F0F\u53D8\u91CF(\u5168\u5C40\u6709\u6548\uFF0C\u518D\u6B21\u5B9A\u4E49\u4EFB\u4F55\u5730\u65B9\u53EF\u76F4\u63A5\u7528)</span>
\u2502 \u2502 \u251C\u2500\u2500img            <span class="token comment"># \u56FE\u7247\u8D44\u6E90</span>
\u2502 \u2502 \u251C\u2500\u2500fonts          <span class="token comment"># \u5B57\u4F53\u548C\u5B57\u4F53\u56FE\u6807</span>
\u2502 \u2502 \u2514\u2500\u2500logo.png
\u2502 \u251C\u2500\u2500common           <span class="token comment"># \u516C\u5171\u6587\u4EF6</span>
\u2502 \u2502 \u251C\u2500\u2500directive      <span class="token comment"># \u516C\u5171\u6307\u4EE4</span>
\u2502 \u2502 \u251C\u2500\u2500filters        <span class="token comment"># \u516C\u5171\u8FC7\u6EE4\u5668</span>
\u2502 \u2502 \u251C\u2500\u2500utils          <span class="token comment"># \u516C\u5171\u51FD\u6570</span>
\u2502 \u251C\u2500\u2500components       <span class="token comment"># \u516C\u5171\u7EC4\u4EF6(\u4E1A\u52A1\u9AD8\u91CD\u7528)</span>
\u2502 \u2502 \u2514\u2500\u2500HelloWorld.vue
\u2502 \u251C\u2500\u2500config           <span class="token comment"># \u5168\u5C40\u914D\u7F6E</span>
\u2502 \u251C\u2500\u2500layout           <span class="token comment"># \u5E03\u5C40\u7EC4\u4EF6</span>
\u2502 \u251C\u2500\u2500packages         <span class="token comment"># \u516C\u5171\u7EC4\u4EF6(\u975E\u4E1A\u52A1\u9AD8\u91CD\u7528)</span>
\u2502 \u251C\u2500\u2500router           <span class="token comment"># \u8DEF\u7531</span>
\u2502 \u2502 \u2514\u2500\u2500index.js
\u2502 \u251C\u2500\u2500store            <span class="token comment"># \u6570\u636E\u7BA1\u7406</span>
\u2502 \u2502 \u2514\u2500\u2500index.js
\u2502 \u251C\u2500\u2500views            <span class="token comment"># \u89C6\u56FE</span>
\u2502 \u2502 \u251C\u2500\u2500auth           <span class="token comment"># \u4E1A\u52A1\u76F8\u5173\u6587\u4EF6\uFF08\u9274\u6743\u6A21\u5757\uFF0C\u5305\u542B\u767B\u5F55\u6CE8\u518C\u627E\u56DE\u5BC6\u7801\u7B49\uFF09</span>
\u2502 \u2502 \u2502 \u251C\u2500\u2500template     <span class="token comment"># \u5F53\u524D\u4E1A\u52A1\u4E0B\u7684\u9875\u9762\u516C\u7528\u7EC4\u4EF6</span>
\u2502 \u2502 \u2502 \u2514\u2500\u2500Login.vue    <span class="token comment"># \u9875\u9762</span>
\u2502 \u2502 \u2514\u2500\u2500Home.vue
\u2502 \u251C\u2500\u2500App.vue          <span class="token comment"># \u89C6\u56FE\u5165\u53E3</span>
\u2502 \u2514\u2500\u2500main.js          <span class="token comment"># \u903B\u8F91\u5165\u53E3</span>
\u251C\u2500\u2500.browserslistrc
\u251C\u2500\u2500.eslintrc.js
\u251C\u2500\u2500.gitignore
\u251C\u2500\u2500babel.config.js
\u251C\u2500\u2500package-lock.json
\u251C\u2500\u2500package.json
\u2514\u2500\u2500README.md
\u2514\u2500\u2500vue.confog.js      <span class="token comment"># \u9879\u76EE\u914D\u7F6E</span>
</code></pre></div><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br></div></div><h3 id="%E6%9C%80%E7%BB%88%E6%95%88%E6%9E%9C" tabindex="-1"><span class="prefix"></span><span class="content">\u6700\u7EC8\u6548\u679C</span><span class="suffix"></span></h3><figure><img src="`+r+'" alt=""></figure><p>\u7B2C\u4E8C\u6B65\uFF01</p>',9),o=[c],g={title:"vue\u7BA1\u7406\u7CFB\u7EDF\u4ECE0\u52301-\u9879\u76EE\u7ED3\u6784",tag:["vue"],cover:"/2022-05-13-12-19-40.png",base64:784840,date:"2020-6-5",tinyCover:"/cover/2022-05-13-12-19-40.png",coverWidth:564,coverHeight:1002,coverPrimary:"191818",coverSecondary:"e6e7e7",meta:[{property:"og:title",content:"vue\u7BA1\u7406\u7CFB\u7EDF\u4ECE0\u52301-\u9879\u76EE\u7ED3\u6784"}]},i={__name:"2020-6-5-02-vue-dir",setup(t,{expose:s}){return a({title:"vue\u7BA1\u7406\u7CFB\u7EDF\u4ECE0\u52301-\u9879\u76EE\u7ED3\u6784",meta:[{property:"og:title",content:"vue\u7BA1\u7406\u7CFB\u7EDF\u4ECE0\u52301-\u9879\u76EE\u7ED3\u6784"}]}),s({frontmatter:{title:"vue\u7BA1\u7406\u7CFB\u7EDF\u4ECE0\u52301-\u9879\u76EE\u7ED3\u6784",tag:["vue"],cover:"/2022-05-13-12-19-40.png",base64:784840,date:"2020-6-5",tinyCover:"/cover/2022-05-13-12-19-40.png",coverWidth:564,coverHeight:1002,coverPrimary:"191818",coverSecondary:"e6e7e7",meta:[{property:"og:title",content:"vue\u7BA1\u7406\u7CFB\u7EDF\u4ECE0\u52301-\u9879\u76EE\u7ED3\u6784"}]}}),(b,u)=>(e(),p("div",null,o))}};typeof n=="function"&&n(i);export{i as default,g as frontmatter};
