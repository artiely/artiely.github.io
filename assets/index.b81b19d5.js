import{i as a,o as p,c as t,j as n,k as o}from"./app.4eeffe1f.js";var e="/assets/2022-06-02-11-11-02.23348819.png",c="/assets/2022-06-02-11-19-45.7e2ba6b4.png",l="/assets/2022-06-02-11-33-50.b4eb15db.png",u="/assets/2022-06-02-11-27-32.24effcfc.png",r="/assets/2022-06-02-11-30-41.541f5570.png",i="/assets/2022-06-02-11-28-08.6a2bc333.png";const k=o('<h1 id="unity-transform%E7%9A%84%E4%B8%80%E4%BA%9B%E5%8F%91%E7%8E%B0" tabindex="-1"><span class="prefix"></span><span class="content">Unity Transform\u7684\u4E00\u4E9B\u53D1\u73B0</span><span class="suffix"></span></h1><p>\u672C\u4EBA\u4F5C\u4E3A\u4E1A\u4F59\u7684unity\u73A9\u5BB6\u5BF9 [Unity Transform]\u7684 \u4E00\u4E9B\u53D1\u73B0</p><figure><img src="'+e+`" alt=""></figure><div class="language-cs ext-cs code-wrapper"><div class="cbt-traffic_light"><span></span><span></span><span></span></div><span class="copy"></span><div class="code-inner"><pre class="language-cs line-numbers-mode"><code class="language-cs"><span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">update</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  transform<span class="token punctuation">.</span><span class="token function">Rotate</span><span class="token punctuation">(</span>TurnX <span class="token operator">*</span> Time<span class="token punctuation">.</span>deltaTime<span class="token punctuation">,</span>TurnY <span class="token operator">*</span> Time<span class="token punctuation">.</span>deltaTime<span class="token punctuation">,</span>TurnZ <span class="token operator">*</span> Time<span class="token punctuation">.</span>deltaTime<span class="token punctuation">,</span> Space<span class="token punctuation">.</span>World<span class="token punctuation">)</span><span class="token punctuation">;</span>
  transform<span class="token punctuation">.</span><span class="token function">Translate</span><span class="token punctuation">(</span>MoveX <span class="token operator">*</span> Time<span class="token punctuation">.</span>deltaTime<span class="token punctuation">,</span> MoveY <span class="token operator">*</span> Time<span class="token punctuation">.</span>deltaTime<span class="token punctuation">,</span> MoveZ <span class="token operator">*</span> Time<span class="token punctuation">.</span>deltaTime<span class="token punctuation">,</span> Space<span class="token punctuation">.</span>World<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><div class="language-cs ext-cs code-wrapper"><div class="cbt-traffic_light"><span></span><span></span><span></span></div><span class="copy"></span><div class="code-inner"><pre class="language-cs line-numbers-mode"><code class="language-cs"><span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">update</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token comment">// \u901A\u8FC7\u4E0A\u4E0B\u952E\u63A7\u5236\u65CB\u8F6C</span>
   <span class="token keyword">if</span> <span class="token punctuation">(</span>Input<span class="token punctuation">.</span><span class="token function">GetKeyDown</span><span class="token punctuation">(</span>KeyCode<span class="token punctuation">.</span>UpArrow<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token class-name"><span class="token keyword">var</span></span> x <span class="token operator">=</span> second<span class="token punctuation">.</span>localRotation<span class="token punctuation">.</span>x<span class="token punctuation">;</span>
        x <span class="token operator">+=</span> <span class="token number">1</span><span class="token punctuation">;</span>
        second<span class="token punctuation">.</span><span class="token function">Rotate</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span>Input<span class="token punctuation">.</span><span class="token function">GetKeyDown</span><span class="token punctuation">(</span>KeyCode<span class="token punctuation">.</span>DownArrow<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token class-name"><span class="token keyword">var</span></span> x <span class="token operator">=</span> second<span class="token punctuation">.</span>localRotation<span class="token punctuation">.</span>x<span class="token punctuation">;</span>
        x <span class="token operator">-=</span> <span class="token number">1</span><span class="token punctuation">;</span>
        second<span class="token punctuation">.</span><span class="token function">Rotate</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// \u901A\u8FC7shift+\u4E0A\u4E0B\u63A7\u5236\u79FB\u52A8</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>Input<span class="token punctuation">.</span><span class="token function">GetKey</span><span class="token punctuation">(</span>KeyCode<span class="token punctuation">.</span>LeftShift<span class="token punctuation">)</span><span class="token operator">&amp;&amp;</span>Input<span class="token punctuation">.</span><span class="token function">GetKeyDown</span><span class="token punctuation">(</span>KeyCode<span class="token punctuation">.</span>UpArrow<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
      <span class="token class-name"><span class="token keyword">var</span></span> y <span class="token operator">=</span> second<span class="token punctuation">.</span>localPosition<span class="token punctuation">.</span>y<span class="token punctuation">;</span>
      y <span class="token operator">-=</span> <span class="token number">1</span><span class="token punctuation">;</span>
      second<span class="token punctuation">.</span>position<span class="token operator">=</span><span class="token keyword">new</span> <span class="token constructor-invocation class-name">Vector3</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> y<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>Input<span class="token punctuation">.</span><span class="token function">GetKey</span><span class="token punctuation">(</span>KeyCode<span class="token punctuation">.</span>LeftShift<span class="token punctuation">)</span><span class="token operator">&amp;&amp;</span>Input<span class="token punctuation">.</span><span class="token function">GetKeyDown</span><span class="token punctuation">(</span>KeyCode<span class="token punctuation">.</span>DownArrow<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token class-name"><span class="token keyword">var</span></span> y <span class="token operator">=</span> second<span class="token punctuation">.</span>localPosition<span class="token punctuation">.</span>y<span class="token punctuation">;</span>
        y <span class="token operator">+=</span> <span class="token number">1</span><span class="token punctuation">;</span>
        second<span class="token punctuation">.</span>position<span class="token operator">=</span><span class="token keyword">new</span> <span class="token constructor-invocation class-name">Vector3</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> y<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// \u91CD\u7F6E</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>Input<span class="token punctuation">.</span><span class="token function">GetKey</span><span class="token punctuation">(</span>KeyCode<span class="token punctuation">.</span>LeftShift<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> Input<span class="token punctuation">.</span><span class="token function">GetKeyDown</span><span class="token punctuation">(</span>KeyCode<span class="token punctuation">.</span>I<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        second<span class="token punctuation">.</span>localPosition<span class="token operator">=</span><span class="token keyword">new</span> <span class="token constructor-invocation class-name">Vector3</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        second<span class="token punctuation">.</span>localEulerAngles<span class="token operator">=</span><span class="token keyword">new</span> <span class="token constructor-invocation class-name">Vector3</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br></div></div><p>\u5DF2debug\u7684\u65B9\u5F0F\u67E5\u770B TRANSFORM\u7684\u5C5E\u6027</p><figure><img src="`+c+`" alt=""></figure><p>\u5982\u679C\u4F60\u60F3\u76F4\u63A5\u6539\u53D8TRANSFORM\u7684\u5C5E\u6027\uFF0C\u90A3\u4E48\u4F60\u53EF\u4EE5\u901A\u8FC7\u4E0B\u9762\u7684\u65B9\u5F0F</p><div class="language-cs ext-cs code-wrapper"><div class="cbt-traffic_light"><span></span><span></span><span></span></div><span class="copy"></span><div class="code-inner"><pre class="language-cs line-numbers-mode"><code class="language-cs">transform<span class="token punctuation">.</span>localPosition <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">Vector3</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
transform<span class="token punctuation">.</span>localEulerAngles <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">Vector3</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
transform<span class="token punctuation">.</span>localScale <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">Vector3</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u5982\u679C\u4F60\u4FEE\u6539\u7684\u65F6\u5019\u4E0D\u5E26local\uFF0C\u90A3\u4E48\u4F60\u53EF\u4EE5\u901A\u8FC7\u4E0B\u9762\u7684\u65B9\u5F0F</p><div class="language-cs ext-cs code-wrapper"><div class="cbt-traffic_light"><span></span><span></span><span></span></div><span class="copy"></span><div class="code-inner"><pre class="language-cs line-numbers-mode"><code class="language-cs">transform<span class="token punctuation">.</span>position <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">Vector3</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
transform<span class="token punctuation">.</span>eulerAngles <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">Vector3</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
transform<span class="token punctuation">.</span>localScale <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">Vector3</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u67D0\u4E9B\u65F6\u5019\u53EF\u4EE5\u8FBE\u5230\u76F8\u540C\u7684\u6548\u679C\uFF0C\u6709\u4E9B\u65F6\u5019\u53EF\u4EE5\u8FBE\u5230\u4E0D\u540C\u7684\u6548\u679C</p><p>\u5982\u679C\u6211\u628A\u4E0A\u9762\u7684\u91CD\u7F6E\u4EE3\u7801\u4FEE\u6539\u4E00\u4E0B\uFF0C\u5C31\u53EF\u4EE5\u8FBE\u5230\u4E0D\u540C\u7684\u6548\u679C</p><div class="language-cs ext-cs code-wrapper"><div class="cbt-traffic_light"><span></span><span></span><span></span></div><span class="copy"></span><div class="code-inner"><pre class="language-cs line-numbers-mode"><code class="language-cs"><span class="token comment">// \u91CD\u7F6E</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>Input<span class="token punctuation">.</span><span class="token function">GetKey</span><span class="token punctuation">(</span>KeyCode<span class="token punctuation">.</span>LeftShift<span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> Input<span class="token punctuation">.</span><span class="token function">GetKeyDown</span><span class="token punctuation">(</span>KeyCode<span class="token punctuation">.</span>I<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        second<span class="token punctuation">.</span>position<span class="token operator">=</span><span class="token keyword">new</span> <span class="token constructor-invocation class-name">Vector3</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        second<span class="token punctuation">.</span>eulerAngles<span class="token operator">=</span><span class="token keyword">new</span> <span class="token constructor-invocation class-name">Vector3</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre></div><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>\u542F\u52A8\u524D <img src="`+l+'" alt=""> \u542F\u52A8\u540E\u4FEE\u6539\u4E00\u4E9B\u53C2\u6570 <img src="'+u+'" alt=""></p><p>\u6CA1\u6539\u524D\u7684\u91CD\u7F6E \u5E26local <img src="'+r+'" alt=""> \u6539\u53D8\u540E\u7684\u91CD\u7F6E \u4E0D\u5E26local <img src="'+i+'" alt=""></p><p>\u4F1A\u53D1\u73B0\u5E26local\u662F\u6211\u7684\u9884\u671F\uFF0C\u4F46\u662F\u4E0D\u5E26local\u4ED6\u4F1A\u901A\u8FC7\u8BA1\u7B97\u4F7F\u7269\u4F53\u56DE\u5230\u521D\u59CB\u4F4D\u7F6E\u5E76\u7ED9local\u8D4B\u503C</p>',17),m=[k],w={tag:["unity"],cover:"/2022-06-02-15-47-20.png",tinyCover:"/cover/2022-06-02-15-47-20.png",coverWidth:564,coverHeight:1002,coverPrimary:"7b0d0d",coverSecondary:"84f2f2",meta:[]},b={__name:"index",setup(d,{expose:s}){return a({meta:[]}),s({frontmatter:{tag:["unity"],cover:"/2022-06-02-15-47-20.png",tinyCover:"/cover/2022-06-02-15-47-20.png",coverWidth:564,coverHeight:1002,coverPrimary:"7b0d0d",coverSecondary:"84f2f2",meta:[]}}),(f,g)=>(p(),t("div",null,m))}};typeof n=="function"&&n(b);export{b as default,w as frontmatter};
