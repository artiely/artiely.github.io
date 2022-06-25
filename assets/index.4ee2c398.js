import{i as a,o as t,c as p,j as n,k as o}from"./app.f76da5f1.js";const e=o(`<h1 id="unity%E8%8E%B7%E5%8F%96spine%E5%8A%A8%E7%94%BB%E7%9A%84%E4%B8%80%E4%BA%9B%E4%BF%A1%E6%81%AF" tabindex="-1"><span class="prefix"></span><span class="content">Unity\u83B7\u53D6spine\u52A8\u753B\u7684\u4E00\u4E9B\u4FE1\u606F</span><span class="suffix"></span></h1><p>\u4E0D\u540C\u7684unity\u7248\u672C\u53EF\u80FD\u6709\u533A\u522B \u4EE5\u4E0B\u4E3AUnity2020 spine4.0</p><h2 id="%E8%8E%B7%E5%8F%96spine%E7%BB%84%E4%BB%B6" tabindex="-1"><span class="prefix"></span><span class="content">\u83B7\u53D6spine\u7EC4\u4EF6</span><span class="suffix"></span></h2><div class="language-cs ext-cs code-wrapper"><div class="cbt-traffic_light"><span></span><span></span><span></span></div><span class="copy"></span><div class="code-inner"><pre class="language-cs line-numbers-mode"><code class="language-cs"><span class="token comment">//skeletonData</span>
<span class="token class-name">SkeletonAnimation</span> skeletonAnimation <span class="token operator">=</span> <span class="token generic-method"><span class="token function">GetComponent</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>SkeletonAnimation<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="%E8%8E%B7%E5%8F%96%E6%89%80%E6%9C%89%E7%9A%84%E5%8A%A8%E7%94%BB" tabindex="-1"><span class="prefix"></span><span class="content">\u83B7\u53D6\u6240\u6709\u7684\u52A8\u753B</span><span class="suffix"></span></h2><div class="language-cs ext-cs code-wrapper"><div class="cbt-traffic_light"><span></span><span></span><span></span></div><span class="copy"></span><div class="code-inner"><pre class="language-cs line-numbers-mode"><code class="language-cs"><span class="token comment">// \u83B7\u53D6\u6240\u6709\u7684\u52A8\u753B</span>
<span class="token class-name">List<span class="token punctuation">&lt;</span>Spine<span class="token punctuation">.</span>Animation<span class="token punctuation">&gt;</span></span> sk <span class="token operator">=</span> skeletonAnimation<span class="token punctuation">.</span>skeleton<span class="token punctuation">.</span>Data<span class="token punctuation">.</span>Animations<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">ToList</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>Spine<span class="token punctuation">.</span>Animation<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// \u968F\u673A\u5C55\u793A\u4E00\u4E2A\u52A8\u753B</span>
skeletonAnimation<span class="token punctuation">.</span>state<span class="token punctuation">.</span><span class="token function">AddAnimation</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> sk<span class="token punctuation">[</span>Random<span class="token punctuation">.</span><span class="token function">Range</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> sk<span class="token punctuation">.</span>Count <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">.</span>Name<span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">,</span> Random<span class="token punctuation">.</span><span class="token function">Range</span><span class="token punctuation">(</span><span class="token number">0f</span><span class="token punctuation">,</span> <span class="token number">3f</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="%E6%92%AD%E6%94%BE%E5%8A%A8%E7%94%BB" tabindex="-1"><span class="prefix"></span><span class="content">\u64AD\u653E\u52A8\u753B</span><span class="suffix"></span></h2><div class="language-cs ext-cs code-wrapper"><div class="cbt-traffic_light"><span></span><span></span><span></span></div><span class="copy"></span><div class="code-inner"><pre class="language-cs line-numbers-mode"><code class="language-cs">skeletonAnimation<span class="token punctuation">.</span>state<span class="token punctuation">.</span><span class="token function">SetAnimation</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> hitAnimation<span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
skeletonAnimation<span class="token punctuation">.</span>state<span class="token punctuation">.</span><span class="token function">AddAnimation</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> currentAnimation<span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// \u6CE8\uFF1A\uFF08\u8D77\u59CB\u5E27\uFF0C\u52A8\u753B\u540D\uFF0C\u662F\u5426loop,\u5EF6\u8FDF\uFF09</span>
</code></pre></div><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="%E6%94%B9%E5%8F%98%E5%8A%A8%E7%94%BB" tabindex="-1"><span class="prefix"></span><span class="content">\u6539\u53D8\u52A8\u753B</span><span class="suffix"></span></h2><div class="language-cs ext-cs code-wrapper"><div class="cbt-traffic_light"><span></span><span></span><span></span></div><span class="copy"></span><div class="code-inner"><pre class="language-cs line-numbers-mode"><code class="language-cs">skeletonAnimation<span class="token punctuation">.</span>AnimationName<span class="token operator">=</span><span class="token string">&quot;xx&quot;</span>
</code></pre></div><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><h2 id="%E5%8A%A8%E7%94%BB%E7%BF%BB%E8%BD%AC" tabindex="-1"><span class="prefix"></span><span class="content">\u52A8\u753B\u7FFB\u8F6C</span><span class="suffix"></span></h2><div class="language-cs ext-cs code-wrapper"><div class="cbt-traffic_light"><span></span><span></span><span></span></div><span class="copy"></span><div class="code-inner"><pre class="language-cs line-numbers-mode"><code class="language-cs"><span class="token keyword">if</span><span class="token punctuation">(</span>x <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span>
skeletonAnimation<span class="token punctuation">.</span>skeleton<span class="token punctuation">.</span>FlipX <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
<span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span>x <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span>
skeletonAnimation<span class="token punctuation">.</span>skeleton<span class="token punctuation">.</span>FlipX <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
</code></pre></div><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="%E5%8F%98%E8%89%B2" tabindex="-1"><span class="prefix"></span><span class="content">\u53D8\u8272</span><span class="suffix"></span></h2><div class="language-cs ext-cs code-wrapper"><div class="cbt-traffic_light"><span></span><span></span><span></span></div><span class="copy"></span><div class="code-inner"><pre class="language-cs line-numbers-mode"><code class="language-cs">skeletonAnimation<span class="token punctuation">.</span>skeleton<span class="token punctuation">.</span>R <span class="token operator">=</span> <span class="token number">0.5f</span><span class="token punctuation">;</span><span class="token comment">//\u5BF9skin\u7684\u6574\u4F53\u504F\u8272 \u6709rgba\u56DB\u4E2A\u53C2\u6570</span>

<span class="token comment">//\u9ED8\u8BA4</span>
skeletonAnimation<span class="token punctuation">.</span>skeleton<span class="token punctuation">.</span>R <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
skeletonAnimation<span class="token punctuation">.</span>skeleton<span class="token punctuation">.</span>G <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
skeletonAnimation<span class="token punctuation">.</span>skeleton<span class="token punctuation">.</span>B <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
</code></pre></div><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="%E6%9B%B4%E5%A4%9A" tabindex="-1"><span class="prefix"></span><span class="content">\u66F4\u591A</span><span class="suffix"></span></h2><div class="language-cs ext-cs code-wrapper"><div class="cbt-traffic_light"><span></span><span></span><span></span></div><span class="copy"></span><div class="code-inner"><pre class="language-cs line-numbers-mode"><code class="language-cs">
Debug<span class="token punctuation">.</span><span class="token function">Log</span><span class="token punctuation">(</span>skeletonAnimation<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//\u83B7\u53D6\u89D2\u8272\u540D</span>
Debug<span class="token punctuation">.</span><span class="token function">Log</span><span class="token punctuation">(</span>skeletonAnimation<span class="token punctuation">.</span>skeleton<span class="token punctuation">.</span>bones<span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">ToString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//\u83B7\u53D6\u6240\u6709\u9AA8\u9ABC\u6570\u7EC4list&lt;spine.Bone&gt;</span>
Debug<span class="token punctuation">.</span><span class="token function">Log</span><span class="token punctuation">(</span>skeletonAnimation<span class="token punctuation">.</span>skeleton<span class="token punctuation">.</span>slots<span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">ToString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//\u83B7\u53D6\u6240\u6709\u63D2\u69FD\u6570\u7EC4</span>
Debug<span class="token punctuation">.</span><span class="token function">Log</span><span class="token punctuation">(</span>skeletonAnimation<span class="token punctuation">.</span>skeleton<span class="token punctuation">.</span>data<span class="token punctuation">.</span>animations<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>name<span class="token punctuation">.</span><span class="token function">ToString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//\u83B7\u53D6\u6240\u6709\u52A8\u753B\u6570\u7EC4</span>
skeletonAnimation<span class="token punctuation">.</span>skeleton<span class="token punctuation">.</span><span class="token function">FindBone</span><span class="token punctuation">(</span><span class="token string">&quot;root&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>flipX <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span><span class="token comment">//\u6839\u636E\u9AA8\u9ABC\u540D\u83B7\u53D6\u9AA8\u9ABC</span>
Debug<span class="token punctuation">.</span><span class="token function">Log</span><span class="token punctuation">(</span>skeletonAnimation<span class="token punctuation">.</span>skeleton<span class="token punctuation">.</span><span class="token function">FindBoneIndex</span><span class="token punctuation">(</span><span class="token string">&quot;root&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ToString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//\u6839\u636E\u9AA8\u9ABC\u540D\u83B7\u53D6\u9AA8\u9ABC\u7684index</span>
Debug<span class="token punctuation">.</span><span class="token function">Log</span><span class="token punctuation">(</span>skeletonAnimation<span class="token punctuation">.</span>skeleton<span class="token punctuation">.</span><span class="token function">FindSlot</span><span class="token punctuation">(</span><span class="token string">&quot;torso&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>attachment<span class="token punctuation">.</span>Name<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//\u6839\u636Eslot\u540D\u83B7\u53D6slot</span>
Debug<span class="token punctuation">.</span><span class="token function">Log</span><span class="token punctuation">(</span>skeletonAnimation<span class="token punctuation">.</span>skeleton<span class="token punctuation">.</span><span class="token function">FindSlotIndex</span><span class="token punctuation">(</span><span class="token string">&quot;torso&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ToString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//\u6839\u636Eslot\u540D\u83B7\u53D6slot index</span>
Debug<span class="token punctuation">.</span><span class="token function">Log</span><span class="token punctuation">(</span>skeletonAnimation<span class="token punctuation">.</span>skeleton<span class="token punctuation">.</span>data<span class="token punctuation">.</span><span class="token function">FindAnimation</span><span class="token punctuation">(</span><span class="token string">&quot;walk&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//\u6839\u636E\u52A8\u753B\u540D\u83B7\u53D6\u52A8\u753B</span>

<span class="token comment">//skin</span>
Debug<span class="token punctuation">.</span><span class="token function">Log</span><span class="token punctuation">(</span>skeletonAnimation<span class="token punctuation">.</span>skeleton<span class="token punctuation">.</span>data<span class="token punctuation">.</span>skins<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>name<span class="token punctuation">.</span><span class="token function">ToString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//\u83B7\u53D6\u6240\u6709 skin</span>
<span class="token class-name">Spine<span class="token punctuation">.</span>Attachment</span> _attachment <span class="token operator">=</span> skeletonAnimation<span class="token punctuation">.</span>skeleton<span class="token punctuation">.</span>data<span class="token punctuation">.</span>skins<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">GetAttachment</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">,</span><span class="token string">&quot;left lower leg&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//\u4ECEskin\u901A\u8FC7slot\u7684index attachment\u7684\u540D\u83B7\u53D6attachment</span>

<span class="token comment">//BoneData</span>
<span class="token class-name">Spine<span class="token punctuation">.</span>Bone</span> _bone <span class="token operator">=</span> skeletonAnimation<span class="token punctuation">.</span>skeleton<span class="token punctuation">.</span><span class="token function">FindBone</span><span class="token punctuation">(</span><span class="token string">&quot;left upper leg&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
Debug<span class="token punctuation">.</span><span class="token function">Log</span><span class="token punctuation">(</span>_bone<span class="token punctuation">.</span>parent<span class="token punctuation">.</span><span class="token function">ToString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//\u83B7\u53D6\u9AA8\u9ABC\u7684\u7236\u9AA8\u9ABC</span>
Debug<span class="token punctuation">.</span><span class="token function">Log</span><span class="token punctuation">(</span>_bone<span class="token punctuation">.</span>data<span class="token punctuation">.</span>length<span class="token punctuation">.</span><span class="token function">ToString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//\u83B7\u53D6\u9AA8\u9ABC\u957F\u5EA6</span>
Debug<span class="token punctuation">.</span><span class="token function">Log</span><span class="token punctuation">(</span>_bone<span class="token punctuation">.</span>rotation<span class="token punctuation">.</span><span class="token function">ToString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//\u83B7\u53D6\u9AA8\u9ABC\u65CB\u8F6C</span>
Debug<span class="token punctuation">.</span><span class="token function">Log</span><span class="token punctuation">(</span>_bone<span class="token punctuation">.</span>data<span class="token punctuation">.</span>scaleX<span class="token punctuation">.</span><span class="token function">ToString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//\u83B7\u53D6\u9AA8\u9ABC\u653E\u7F29</span>
Debug<span class="token punctuation">.</span><span class="token function">Log</span><span class="token punctuation">(</span>_bone<span class="token punctuation">.</span>data<span class="token punctuation">.</span>scaleY<span class="token punctuation">.</span><span class="token function">ToString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
Debug<span class="token punctuation">.</span><span class="token function">Log</span><span class="token punctuation">(</span>_bone<span class="token punctuation">.</span>data<span class="token punctuation">.</span>inheritRotation<span class="token punctuation">.</span><span class="token function">ToString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">// \u662F\u5426\u65CB\u8F6C\u503C\u76F8\u5BF9\u7236\u9AA8\u9ABC true\u662F\u76F8\u5BF9\u7236\u9AA8\u9ABC</span>
Debug<span class="token punctuation">.</span><span class="token function">Log</span><span class="token punctuation">(</span>_bone<span class="token punctuation">.</span>data<span class="token punctuation">.</span>inheritScale<span class="token punctuation">.</span><span class="token function">ToString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//\u662F\u5426\u653E\u7F29\u503C\u76F8\u5BF9\u7236\u9AA8\u9ABC true\u662F\u76F8\u5BF9\u7236\u9AA8\u9ABC</span>

<span class="token comment">//SlotData</span>
<span class="token class-name">Spine<span class="token punctuation">.</span>Slot</span> _slot <span class="token operator">=</span> skeletonAnimation<span class="token punctuation">.</span>skeleton<span class="token punctuation">.</span><span class="token function">FindSlot</span><span class="token punctuation">(</span><span class="token string">&quot;torso&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
Debug<span class="token punctuation">.</span><span class="token function">Log</span><span class="token punctuation">(</span>_slot<span class="token punctuation">.</span>data<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//\u83B7\u53D6slot\u7684\u540D\u5B57</span>
Debug<span class="token punctuation">.</span><span class="token function">Log</span><span class="token punctuation">(</span>_slot<span class="token punctuation">.</span>data<span class="token punctuation">.</span>boneData<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//\u83B7\u53D6slot\u6302\u9760\u7684bone</span>
Debug<span class="token punctuation">.</span><span class="token function">Log</span><span class="token punctuation">(</span>_slot<span class="token punctuation">.</span>r<span class="token punctuation">.</span><span class="token function">ToString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//\u83B7\u53D6slot\u7684\u989C\u8272R\u503C</span>
Debug<span class="token punctuation">.</span><span class="token function">Log</span><span class="token punctuation">(</span>_slot<span class="token punctuation">.</span>data<span class="token punctuation">.</span>attachmentName<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//\u83B7\u53D6pose\u4E0Bslot\u7684attachment\u540D</span>
_slot<span class="token punctuation">.</span>data<span class="token punctuation">.</span>additiveBlending <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span><span class="token comment">//\u83B7\u53D6\u6216\u8BBE\u7F6Eslot\u65F6\u5019\u7528additive blending\u6765\u6E32\u67D3 \u6CE8\u91CA\uFF1A\u7528\u4E8E\u7279\u6548\uFF1F</span>

<span class="token comment">//Animation</span>
Debug<span class="token punctuation">.</span><span class="token function">Log</span><span class="token punctuation">(</span>skeletonAnimation<span class="token punctuation">.</span>skeleton<span class="token punctuation">.</span>data<span class="token punctuation">.</span>animations<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>duration<span class="token punctuation">.</span><span class="token function">ToString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//\u52A8\u753B\u6301\u7EED\u65F6\u95F4\uFF1F</span>
<span class="token class-name">List<span class="token punctuation">&lt;</span>Spine<span class="token punctuation">.</span>Timeline<span class="token punctuation">&gt;</span></span> _timeline <span class="token operator">=</span> skeletonAnimation<span class="token punctuation">.</span>skeleton<span class="token punctuation">.</span>data<span class="token punctuation">.</span>animations<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>timelines<span class="token punctuation">;</span><span class="token comment">//\u83B7\u53D6\u52A8\u753Btimeline</span>

<span class="token comment">//Skeleton</span>
<span class="token class-name">Spine<span class="token punctuation">.</span>SkeletonData</span> _data <span class="token operator">=</span> skeletonAnimation<span class="token punctuation">.</span>skeleton<span class="token punctuation">.</span>data<span class="token punctuation">;</span><span class="token comment">//\u83B7\u53D6SkeletonData</span>
Debug<span class="token punctuation">.</span><span class="token function">Log</span><span class="token punctuation">(</span>_data<span class="token punctuation">.</span>bones<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">ToString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//\u83B7\u53D6\u6240\u6709\u9AA8\u9ABC</span>
Debug<span class="token punctuation">.</span><span class="token function">Log</span><span class="token punctuation">(</span>_data<span class="token punctuation">.</span>slots<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">ToString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//\u83B7\u53D6\u6240\u6709slots</span>
Debug<span class="token punctuation">.</span><span class="token function">Log</span><span class="token punctuation">(</span>skeletonAnimation<span class="token punctuation">.</span>skeleton<span class="token punctuation">.</span>drawOrder<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>attachment<span class="token punctuation">.</span>Name<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//\u83B7\u53D6\u6240\u6709DrawOder</span>
Debug<span class="token punctuation">.</span><span class="token function">Log</span><span class="token punctuation">(</span>skeletonAnimation<span class="token punctuation">.</span>skeleton<span class="token punctuation">.</span>skin<span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//\u83B7\u53D6\u5F53\u524Dskin\u540D</span>
skeletonAnimation<span class="token punctuation">.</span>skeleton<span class="token punctuation">.</span>r <span class="token operator">=</span> <span class="token number">0.5f</span><span class="token punctuation">;</span><span class="token comment">//\u5BF9skin\u7684\u6574\u4F53\u504F\u8272 \u6709rgba\u56DB\u4E2A\u53C2\u6570</span>
Debug<span class="token punctuation">.</span><span class="token function">Log</span><span class="token punctuation">(</span>skeletonAnimation<span class="token punctuation">.</span>skeleton<span class="token punctuation">.</span>time<span class="token punctuation">.</span><span class="token function">ToString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//?</span>
skeletonAnimation<span class="token punctuation">.</span>skeleton<span class="token punctuation">.</span>flipX <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span><span class="token comment">//skeleton\u7FFB\u8F6C\u8F74\u5411</span>
skeletonAnimation<span class="token punctuation">.</span>skeleton<span class="token punctuation">.</span>flipY <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
skeletonAnimation<span class="token punctuation">.</span>skeleton<span class="token punctuation">.</span>x <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span><span class="token comment">//skeleton\u7684\u5750\u6807</span>
skeletonAnimation<span class="token punctuation">.</span>skeleton<span class="token punctuation">.</span>y <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
skeletonAnimation<span class="token punctuation">.</span>skeleton<span class="token punctuation">.</span><span class="token function">SetBonesToSetupPose</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
skeletonAnimation<span class="token punctuation">.</span>skeleton<span class="token punctuation">.</span><span class="token function">SetSlotsToSetupPose</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
skeletonAnimation<span class="token punctuation">.</span>skeleton<span class="token punctuation">.</span><span class="token function">SetToSetupPose</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//skeletonAnimation.skeleton.GetAttachment();//\u83B7\u53D6GetAttachment</span>
<span class="token comment">//skeletonAnimation.skeleton.SetAttachment();</span>
skeletonAnimation<span class="token punctuation">.</span>skeleton<span class="token punctuation">.</span><span class="token function">Update</span><span class="token punctuation">(</span><span class="token number">0.5f</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//??</span>
<span class="token punctuation">}</span>

<span class="token comment">//--\u6362\u88C5\u51FD\u6570\uFF0C\u4F46\u662F\u5FC5\u987B\u5728slot\u91CC\u6709\u8FD9\u4E2AattachMent\u540D</span>

skeletonAnimation <span class="token operator">=</span> <span class="token generic-method"><span class="token function">GetComponent</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>SkeletonAnimation<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
skeletonAnimation<span class="token punctuation">.</span>skeleton<span class="token punctuation">.</span><span class="token function">SetAttachment</span><span class="token punctuation">(</span><span class="token string">&quot;rear_upper_arm&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;muzzle&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
skeletonAnimation<span class="token punctuation">.</span>skeleton<span class="token punctuation">.</span><span class="token function">GetAttachment</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//\u89D2\u8272\u4E4B\u95F4\u7684\u7ED8\u5236\u6392\u5E8F</span>

renderer<span class="token punctuation">.</span>sortingOrder <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">5</span><span class="token punctuation">;</span>

</code></pre></div><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br></div></div>`,16),c=[e],b={tag:["unity","CS","spine"],cover:"/2022-05-10-18-59-18.png",tinyCover:"/cover/2022-05-10-18-59-18.png",coverWidth:564,coverHeight:1253,meta:[]},u={__name:"index",setup(l,{expose:s}){return a({meta:[]}),s({frontmatter:{tag:["unity","CS","spine"],cover:"/2022-05-10-18-59-18.png",tinyCover:"/cover/2022-05-10-18-59-18.png",coverWidth:564,coverHeight:1253,meta:[]}}),(k,r)=>(t(),p("div",null,c))}};typeof n=="function"&&n(u);export{u as default,b as frontmatter};