import{i as a,o as p,c as e,j as n,k as t}from"./app.1cc11fc1.js";const o=t(`<h1 id="unity-ragdoll%E5%AE%9E%E7%8E%B0%E6%8B%BE%E5%8F%96%E9%81%93%E5%85%B7%E7%9A%84%E6%A0%B8%E5%BF%83%E4%BB%A3%E7%A0%81" tabindex="-1"><span class="prefix"></span><span class="content">unity ragdoll\u5B9E\u73B0\u62FE\u53D6\u9053\u5177\u7684\u6838\u5FC3\u4EE3\u7801</span><span class="suffix"></span></h1><ul><li>\u7ED9\u624B\u7684\u9AA8\u9ABC\u6DFB\u52A0\u78B0\u649E\u7EC4\u4EF6</li></ul><div class="language-cs ext-cs code-wrapper"><div class="cbt-traffic_light"><span></span><span></span><span></span></div><span class="copy"></span><div class="code-inner"><pre class="language-cs line-numbers-mode"><code class="language-cs"><span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">OnCollisionEnter</span><span class="token punctuation">(</span><span class="token class-name">Collision</span> col<span class="token punctuation">)</span>
<span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>col<span class="token punctuation">.</span>gameObject<span class="token punctuation">.</span>tag <span class="token operator">==</span> <span class="token string">&quot;weapon&quot;</span><span class="token punctuation">)</span>
  <span class="token punctuation">{</span>
      <span class="token comment">// \u6709\u4E00\u4E9B\u903B\u8F91\u9700\u8981\u5224\u65AD</span>
      <span class="token comment">// \u5F53\u524D\u6B66\u5668\u662F\u5426\u6709\u73A9\u5BB6\u62E5\u6709 \uFF08\u5982\u679C\u4E00\u4E2A\u6B66\u5668\u53EA\u80FD\u88AB\u4E00\u4E2A\u73A9\u5BB6\u62FE\u53D6\uFF09</span>
      <span class="token comment">//  \u6B66\u5668\u5F53\u524D\u7684\u73A9\u5BB6\u4E0D\u662F\u4ED6\u81EA\u5DF1\u7684\u65F6\u5019\u624D\u53EF\u4EE5\u6361\u8D77</span>
      <span class="token keyword">if</span><span class="token punctuation">(</span> <span class="token operator">!</span>hasJoint<span class="token punctuation">)</span>
      <span class="token punctuation">{</span>
        hasJoint <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
        leftHand<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">AddComponent</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>FixedJoint<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        leftHand<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">GetComponent</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>FixedJoint<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>breakForce <span class="token operator">=</span> Mathf<span class="token punctuation">.</span>Infinity<span class="token punctuation">;</span>
        
        leftHand<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">GetComponent</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>FixedJoint<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>connectedBody <span class="token operator">=</span> col<span class="token punctuation">.</span>gameObject<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">GetComponent</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>Rigidbody<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><p>\u4E22\u6389\u6B66\u5668\u7684\u903B\u8F91</p><ul><li>\u529B\u91CF\u6E05\u96F6</li></ul><div class="language-cs ext-cs code-wrapper"><div class="cbt-traffic_light"><span></span><span></span><span></span></div><span class="copy"></span><div class="code-inner"><pre class="language-cs line-numbers-mode"><code class="language-cs">rightHand<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">GetComponent</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>FixedJoint<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>breakForce <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
hasJoint <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
</code></pre></div><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><ul><li>\u9500\u6BC1\u7EC4\u4EF6</li></ul><div class="language-cs ext-cs code-wrapper"><div class="cbt-traffic_light"><span></span><span></span><span></span></div><span class="copy"></span><div class="code-inner"><pre class="language-cs line-numbers-mode"><code class="language-cs">
  <span class="token function">Destroy</span><span class="token punctuation">(</span>rightHand<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">GetComponent</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>FixedJoint<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div>`,8),c=[o],m={tag:["unity","ragdoll"],cover:"/2022-05-10-18-41-39.png",tinyCover:"/cover/2022-05-10-18-41-39.png",coverWidth:466,coverHeight:700,meta:[]},l={__name:"index",setup(i,{expose:s}){return a({meta:[]}),s({frontmatter:{tag:["unity","ragdoll"],cover:"/2022-05-10-18-41-39.png",tinyCover:"/cover/2022-05-10-18-41-39.png",coverWidth:466,coverHeight:700,meta:[]}}),(r,d)=>(p(),e("div",null,c))}};typeof n=="function"&&n(l);export{l as default,m as frontmatter};