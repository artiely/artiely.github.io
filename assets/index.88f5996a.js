import{i as a,o as p,c as e,j as n,k as o}from"./app.4eeffe1f.js";const t=o(`<h1 id="%E5%9C%A8%E4%BB%80%E4%B9%88%E6%83%85%E5%86%B5%E4%B8%8B-a-%3D%3D%3D-a---1-%EF%BC%9F" tabindex="-1"><span class="prefix"></span><span class="content">\u5728\u4EC0\u4E48\u60C5\u51B5\u4E0B a === a - 1 \uFF1F</span><span class="suffix"></span></h1><p><em><strong>\u601D\u800310\u79D2\u949F\u518D\u5F80\u4E0B\u770B\u2014\u2014</strong></em></p><h2 id="%E7%AC%AC%E4%B8%80%E4%B8%AA%E7%AD%94%E6%A1%88%E8%87%AA%E7%84%B6%E6%98%AFinfinity%EF%BC%8C%E6%88%96%E8%80%85%E8%AF%B4%EF%BC%8C%E6%89%A9%E5%B1%95%E4%B8%80%E4%B8%8B%EF%BC%8C%E5%BA%94%E8%AF%A5%E6%98%AF%E6%AD%A3%E8%B4%9Finfinity" tabindex="-1"><span class="prefix"></span><span class="content">\u7B2C\u4E00\u4E2A\u7B54\u6848\u81EA\u7136\u662FInfinity\uFF0C\u6216\u8005\u8BF4\uFF0C\u6269\u5C55\u4E00\u4E0B\uFF0C\u5E94\u8BE5\u662F\u6B63\u8D1FInfinity</span><span class="suffix"></span></h2><blockquote><p><strong>\u{1F449}\u{1F3FB} \u77E5\u8BC6\u70B9:</strong> \u5728JavaScript\u91CC\uFF0CInfinity\u662F\u4E00\u4E2ANumber\u7C7B\u578B\u7684\u5B57\u9762\u91CF\uFF0C\u8868\u793A\u65E0\u7A77\u5927\u3002\u5F53\u4E00\u4E2ANumber\u7C7B\u578B\u7684\u503C\uFF0C\u5728\u8FD0\u7B97\u8FC7\u7A0B\u4E2D\u8D85\u8FC7\u4E86\u6240\u80FD\u8868\u793A\u7684\u6700\u5927\u503C\uFF0C\u5C31\u4F1A\u5F97\u5230\u65E0\u7A77\u5927\u3002</p></blockquote><p>\u6BD4\u5982\uFF0C\u5982\u679C\u6211\u4EEC\u5C06\u4E00\u4E2A\u4E0D\u4E3A0\u7684\u6B63\u6570\u9664\u4EE50\uFF0C\u5F97\u5230\u7684\u7ED3\u679C\u5C31\u662F\u65E0\u7A77\u5927\u3002</p><p><code class="">console.log(100 / 0); // Infinity</code></p><p>\u5BF9\u5E94\u7684\uFF0C\u8D1F\u6570\u6709\u8D1F\u65E0\u7A77\u5927\u3002</p><p><code class="">console.log(-100 / 0); // \\-Infinity</code></p><p>\u5982\u679C\u6211\u4EEC\u6570\u503C\u8FD0\u7B97\u7684\u503C\uFF0C\u8D85\u8FC7\u4E86Number\u5141\u8BB8\u8868\u793A\u7684\u8303\u56F4\uFF0C\u4E5F\u662F\u4F1A\u5F97\u5230Infinity\u3002</p><p><code class="">console.log(1e1000); // Infinity</code></p><blockquote><p>\u5728JavaScript\u91CC\uFF0C<strong>Number.POSITIVE_INFINITY</strong>\u548C<strong>Number.NEGATIVE_INFINITY</strong>\u4E24\u4E2A\u5E38\u91CF\u7684\u503C\uFF0C\u5BF9\u5E94\u6B63\u8D1FInfinity\u3002</p><p><strong>Number.isFinite()</strong> \u53EF\u4EE5\u5224\u65AD\u4E00\u4E2A\u6570\u662F\u5426\u662F\u6709\u7A77\u7684\uFF0CNumber.isFinite(n)\uFF0C\u5F53n\u662FNumber\u7C7B\u578B\u65F6\uFF0C\u53EA\u6709\u5B83\u662F\u6B63\u8D1FInfinity\u6216NaN\u65F6\uFF0C\u8FD4\u56DEfalse\uFF0C\u5176\u4ED6\u60C5\u51B5\u4E0B\u8FD4\u56DEtrue\u3002</p><p>\u4EFB\u4F55\u4E00\u4E2A\u6709\u7A77\u7684\u6570\u548CInfinity\u7684\u52A0\u51CF\u8FD0\u7B97\u7684\u7ED3\u679C\u90FD\u662FInfinity\uFF0C\u800C<strong>Infinity === Infinity</strong>\uFF0C\u6240\u4EE5\uFF1A</p></blockquote><div class="language-js ext-js code-wrapper"><div class="cbt-traffic_light"><span></span><span></span><span></span></div><span class="copy"></span><div class="code-inner"><pre class="language-js line-numbers-mode"><code class="language-js"><span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token number">Infinity</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a <span class="token operator">===</span> a <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token comment">// true</span>
<span class="token keyword">const</span> b <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">Infinity</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>b <span class="token operator">===</span> b <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token comment">// true</span>
</code></pre></div><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p><strong>\u8FD9\u6837\u6211\u4EEC\u5C31\u5F97\u5230\u4E86\u4E24\u4E2A\u7B54\u6848\u3002</strong></p><blockquote><h3 id="%F0%9F%92%A1-%E4%BD%86%E6%98%AF%EF%BC%8C%E8%A6%81%E6%B3%A8%E6%84%8F%EF%BC%8Cinfinity%E8%BF%90%E7%AE%97%E7%9A%84%E7%BB%93%E6%9E%9C%E5%B9%B6%E4%B8%8D%E6%80%BB%E6%98%AFinfinity%EF%BC%8C%E6%AF%94%E5%A6%82%E6%88%91%E4%BB%AC%E7%9C%8B%E4%B8%8B%E9%9D%A2%E5%87%A0%E7%A7%8D%E8%BF%90%E7%AE%97%EF%BC%9A" tabindex="-1"><span class="prefix"></span><span class="content"><strong>\u{1F4A1} \u4F46\u662F\uFF0C\u8981\u6CE8\u610F\uFF0CInfinity\u8FD0\u7B97\u7684\u7ED3\u679C\u5E76\u4E0D\u603B\u662FInfinity\uFF0C\u6BD4\u5982\u6211\u4EEC\u770B\u4E0B\u9762\u51E0\u79CD\u8FD0\u7B97\uFF1A</strong></span><span class="suffix"></span></h3></blockquote><div class="language-js ext-js code-wrapper"><div class="cbt-traffic_light"><span></span><span></span><span></span></div><span class="copy"></span><div class="code-inner"><pre class="language-js line-numbers-mode"><code class="language-js">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">Infinity</span> <span class="token operator">+</span> <span class="token number">Infinity</span><span class="token punctuation">)</span> <span class="token comment">// Infinity</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">Infinity</span> <span class="token operator">-</span> <span class="token number">Infinity</span><span class="token punctuation">)</span> <span class="token comment">// NaN</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">Infinity</span> <span class="token operator">*</span> <span class="token number">Infinity</span><span class="token punctuation">)</span> <span class="token comment">// Infinity</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">Infinity</span> <span class="token operator">/</span> <span class="token number">Infinity</span><span class="token punctuation">)</span> <span class="token comment">// NaN</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token number">Infinity</span> <span class="token operator">*</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token comment">// NaN</span>
</code></pre></div><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p><strong>\u7ED3\u8BBA\u662F</strong>\uFF0C<em>Infinity\u8FD0\u7B97\u4E5F\u6709\u53EF\u80FD\u5F97\u5230NaN\uFF0C\u6240\u4EE5\u9700\u8981\u5C0F\u5FC3\uFF0C\u4F8B\u5982\u6211\u4EEC\u7684\u4E00\u4E2A\u8BA1\u7B97\u8868\u8FBE\u5F0F\u4E2D\uFF0C\u6709\u4E24\u4E2A\u503C\u76F8\u4E58\uFF0C\u4E00\u4E2A\u503C\u6709\u53EF\u80FD\u5F88\u5927\uFF0C\u53E6\u4E00\u4E2A\u503C\u6709\u53EF\u80FD\u4E3A0\u65F6\uFF0C\u5C31\u9700\u8981\u5C0F\u5FC3\uFF0C\u5982\u679C\u90A3\u4E2A\u5F88\u5927\u7684\u503C\u5F97\u5230Infinity\uFF0C\u53E6\u4E00\u4E2A\u503C\u6070\u597D\u4E3A0\u65F6\uFF0C\u6574\u4E2A\u8868\u8FBE\u5F0F\u7684\u503C\u53EF\u80FD\u662FNaN\uFF0C\u8FD9\u4F1A\u9020\u6210\u4E00\u4E9Bbug\u3002</em></p><div class="language-js ext-js code-wrapper"><div class="cbt-traffic_light"><span></span><span></span><span></span></div><span class="copy"></span><div class="code-inner"><pre class="language-js line-numbers-mode"><code class="language-js"><span class="token keyword">const</span> result <span class="token operator">=</span> a <span class="token operator">+</span> b <span class="token operator">*</span> c <span class="token operator">+</span> d
<span class="token comment">// \u5982\u679C b \u662F Infinity \u800C c \u662F 0\uFF0C\u6574\u4E2A\u8868\u8FBE\u5F0F\u7684\u7ED3\u679C\u5C31\u6709\u53EF\u80FD\u662F NaN</span>
</code></pre></div><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><blockquote><p>\u597D\u4E86\uFF0C\u4EE5\u4E0A\u662F\u6211\u4EEC\u7684\u7B2C\u4E00\u4E2A\u7B54\u6848\uFF1A<strong>\u6B63\u8D1FInfinity\u3002</strong></p></blockquote><h2 id="%E6%8E%A5%E4%B8%8B%E6%9D%A5%EF%BC%8C%E6%88%91%E4%BB%AC%E7%9C%8B%E5%8F%A6%E4%B8%80%E4%B8%AA%EF%BC%88%E5%8F%A6%E4%B8%80%E4%BA%9B%EF%BC%89%E7%AD%94%E6%A1%88" tabindex="-1"><span class="prefix"></span><span class="content">\u63A5\u4E0B\u6765\uFF0C\u6211\u4EEC\u770B\u53E6\u4E00\u4E2A\uFF08\u53E6\u4E00\u4E9B\uFF09\u7B54\u6848</span><span class="suffix"></span></h2><p>\u6211\u4EEC\u7ED9a\u4E00\u4E2A\u6BD4\u8F83\u5927\u7684\u6570\u503C\uFF0C\u6BD4\u59821e45\uFF1A</p><div class="language-js ext-js code-wrapper"><div class="cbt-traffic_light"><span></span><span></span><span></span></div><span class="copy"></span><div class="code-inner"><pre class="language-js line-numbers-mode"><code class="language-js"><span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token number">1e45</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span> <span class="token comment">// 1e+45</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a <span class="token operator">===</span> a <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token comment">// true</span>
</code></pre></div><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u6709\u4E9B\u540C\u5B66\u4E00\u770B\uFF0C\u8BF6\uFF0C\u8FD9\u4E5F\u884C\uFF1F</p><p>\u8FD9\u4E2A\u4E0D\u4F46\u53EF\u4EE5\uFF0C\u4F60\u968F\u4FBF\u627E\u4E24\u4E2A\u6BD4\u8F83\u5927\u7684\u6570\uFF0C\u5E94\u8BE5\u90FD\u662F\u53EF\u4EE5\u7684\uFF1A</p><div class="language-js ext-js code-wrapper"><div class="cbt-traffic_light"><span></span><span></span><span></span></div><span class="copy"></span><div class="code-inner"><pre class="language-js line-numbers-mode"><code class="language-js"><span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token number">6.22e23</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a <span class="token operator">===</span> a <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token comment">// true</span>
</code></pre></div><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h4 id="%E9%82%A3%E8%BF%99%E5%8F%88%E6%98%AF%E6%80%8E%E4%B9%88%E5%9B%9E%E4%BA%8B%E5%91%A2%EF%BC%9F" tabindex="-1"><span class="prefix"></span><span class="content">\u90A3\u8FD9\u53C8\u662F\u600E\u4E48\u56DE\u4E8B\u5462\uFF1F</span><span class="suffix"></span></h4><blockquote><p><strong>\u{1F449}\u{1F3FB} \u77E5\u8BC6\u70B9\uFF1A</strong> \u5728JavaScript\u91CC\uFF0C\u6574\u6570\u53EF\u4EE5\u88AB\u7CBE\u786E\u8868\u793A\u7684\u8303\u56F4\u662F\u4ECE <strong>-2 ** 53 + 1</strong> \u5230 <strong>2 ** 53 - 1</strong>\uFF0C\u5373 <strong>-9007199254740991</strong> \u5230 <strong>9007199254740991</strong>\u3002\u8D85\u8FC7\u8FD9\u4E2A\u6570\u503C\u7684\u6574\u6570\uFF0C\u90FD\u4E0D\u80FD\u88AB\u7CBE\u786E\u8868\u793A\u3002</p><p>\u5E38\u91CF<strong>Number.MAX_SAFE_INTEGER</strong>\u548C<strong>Number.MIN_SAFE_INTEGER</strong>\u5206\u522B\u5BF9\u5E94<strong>9007199254740991</strong>\u548C <strong>-9007199254740991</strong>\u3002</p></blockquote><p>\u6211\u4EEC\u6765\u6D4B\u8BD5\u4E00\u4E0B\uFF1A</p><div class="language-js ext-js code-wrapper"><div class="cbt-traffic_light"><span></span><span></span><span></span></div><span class="copy"></span><div class="code-inner"><pre class="language-js line-numbers-mode"><code class="language-js"><span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token number">9007199254740986</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span>
  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>i<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> : </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>a <span class="token operator">+</span> i<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span>
</code></pre></div><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u5728<strong>chrome\u4E0B\u7684\u8F93\u51FA\u7ED3\u679C</strong>\u662F\u8FD9\u6837\u7684\uFF1A</p><div class="language-shell ext-shell code-wrapper"><div class="cbt-traffic_light"><span></span><span></span><span></span></div><span class="copy"></span><div class="code-inner"><pre class="language-shell line-numbers-mode"><code class="language-shell"><span class="token number">0</span> <span class="token builtin class-name">:</span> <span class="token number">9007199254740986</span>
<span class="token number">1</span> <span class="token builtin class-name">:</span> <span class="token number">9007199254740987</span>
<span class="token number">2</span> <span class="token builtin class-name">:</span> <span class="token number">9007199254740988</span>
<span class="token number">3</span> <span class="token builtin class-name">:</span> <span class="token number">9007199254740989</span>
<span class="token number">4</span> <span class="token builtin class-name">:</span> <span class="token number">9007199254740990</span>
<span class="token number">5</span> <span class="token builtin class-name">:</span> <span class="token number">9007199254740991</span>
<span class="token number">6</span> <span class="token builtin class-name">:</span> <span class="token number">9007199254740992</span>
<span class="token number">7</span> <span class="token builtin class-name">:</span> <span class="token number">9007199254740992</span>
<span class="token number">8</span> <span class="token builtin class-name">:</span> <span class="token number">9007199254740994</span>
<span class="token number">9</span> <span class="token builtin class-name">:</span> <span class="token number">9007199254740996</span>
</code></pre></div><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>\u770B\u5230\u5728 a + i \u7684\u503C\u5C0F\u4E8E\u7B49\u4E8E 9007199254740991 \u65F6\uFF0C\u8F93\u51FA\u6B63\u5E38\u7684\u6BCF\u6B21\u5FAA\u73AF\u52A01\u7684\u7ED3\u679C\uFF0C\u5230\u4E86\u5927\u4E8E 9007199254740991 \u540E\uFF0C\u8F93\u51FA\u7684\u7ED3\u679C\u91CC\u51FA\u73B0\u4E86\u4E24\u6B21 9007199254740992\uFF0C\u5C11\u4E86 9007199254740993 \u548C 9007199254740995\u3002</p><p><strong>\u8FD9\u662F\u56E0\u4E3A</strong>\uFF0C\u8D85\u8FC7 9007199254740991 \u4E4B\u540E\uFF0CJavaScript\u7684Number\u7C7B\u578B\u5C31\u6CA1\u529E\u6CD5\u7CBE\u786E\u5730\u8868\u793A\u6574\u6570\u4E86\u3002<strong>\u56E0\u4E3A\u4E22\u5931\u4E86\u7CBE\u5EA6\uFF0C\u6240\u4EE5 9007199254740993 \u548C 9007199254740995 \u4E0D\u89C1\u4E86\u3002</strong></p><p>\u6211\u4EEC\u53EF\u4EE5\u5229\u7528\u8FD9\u4E2A\u77E5\u8BC6\u70B9\u6784\u9020\u5176\u4ED6\u4E00\u4E9B\u6EE1\u8DB3\u9700\u6C42\u7684\u503C\uFF1A</p><div class="language-js ext-js code-wrapper"><div class="cbt-traffic_light"><span></span><span></span><span></span></div><span class="copy"></span><div class="code-inner"><pre class="language-js line-numbers-mode"><code class="language-js"><span class="token keyword">const</span> a <span class="token operator">=</span> Number<span class="token punctuation">.</span><span class="token constant">MIN_SAFE_INTEGER</span> <span class="token operator">-</span> <span class="token number">1</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a <span class="token operator">===</span> a <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token comment">// true</span>
</code></pre></div><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h4 id="%E5%A4%A7%E6%95%B4%E6%95%B0-big-integer" tabindex="-1"><span class="prefix"></span><span class="content"><strong>\u5927\u6574\u6570 Big Integer</strong></span><span class="suffix"></span></h4><p>\u5728\u6700\u65B0\u7684Chrome\u6D4F\u89C8\u5668\u4E0B\uFF0C\u5176\u5B9E\u6211\u4EEC\u53EF\u4EE5\u7CBE\u786E\u8868\u793A\u5927\u6574\u6570\uFF0CTC39\u7684Big Integer\u63D0\u6848\u76EE\u524D\u662FStage 3\u9636\u6BB5\uFF0C\u5728Chrome\u6D4F\u89C8\u5668\u4E0A\u5DF2\u7ECF\u88AB\u652F\u6301\u3002</p><div class="language-shell ext-shell code-wrapper"><div class="cbt-traffic_light"><span></span><span></span><span></span></div><span class="copy"></span><div class="code-inner"><pre class="language-shell line-numbers-mode"><code class="language-shell">console.log<span class="token punctuation">(</span><span class="token number">2</span> ** <span class="token number">2000</span><span class="token punctuation">)</span><span class="token punctuation">;</span> // Infinity
console.log<span class="token punctuation">(</span>2n ** 2000n<span class="token punctuation">)</span><span class="token punctuation">;</span> //114813069527425452423283320117768198402231770208869520047764273682576626139237031385665948631650626991844596463898746277344711896086305533142593135616665318539129989145312280000688779148240044871428926990063486244781615463646388363947317026040466353970904996558162398808944629605623311649536164221970332681344168908984458505602379484807914058900934776500429002716706625830522008132236281291761267883317206598995396418127021779858404042159853183251540889433902091920554957783589672039160081957216630582755380425583726015528348786419432054508915275783882625175435528800822842770817965453762184851149029376n
</code></pre></div><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h4 id="nan" tabindex="-1"><span class="prefix"></span><span class="content"><strong>NaN</strong></span><span class="suffix"></span></h4><p>\u6709\u540C\u5B66\u53EF\u80FD\u60F3\u5230NaN\uFF0C\u4E0D\u8FC7NaN\u4E0E\u4EFB\u4F55\u503C\u90FD\u4E0D\u76F8\u7B49\uFF0C\u5305\u62ECNaN\u81EA\u8EAB\uFF0C\u6240\u4EE5\uFF0C\u5229\u7528NaN\u662F\u4E0D\u53EF\u4EE5\u7684\uFF1A</p><div class="language-js ext-js code-wrapper"><div class="cbt-traffic_light"><span></span><span></span><span></span></div><span class="copy"></span><div class="code-inner"><pre class="language-js line-numbers-mode"><code class="language-js"><span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token number">NaN</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a <span class="token operator">===</span> a <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token comment">// false</span>
</code></pre></div><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><blockquote><p>\u6700\u540E\uFF0C\u6211\u4EEC\u518D\u6269\u5C55\u4E00\u4E0B\uFF0C\u5982\u679C\u9762\u8BD5\u9898\u8981\u6C42\u7684<strong>\u4E0D\u662Fa === a - 1\uFF0C\u800C\u662Fa == a - 1</strong>\uFF0C\u90A3\u4E48\u6709\u6CA1\u6709\u5176\u4ED6\u7B54\u6848\u5462\uFF1F</p><p><strong>\u5927\u5BB6\u53EF\u4EE5\u601D\u8003\u4E00\u4E0B\u3002</strong></p></blockquote><p>\u7B2C\u4E00\u79CD\uFF0C<code class="">Object</code>\u8F6C\u6362\u4E3A<code class="">Number</code>\uFF0C\u4F1A\u8C03\u7528<code class="">Object.valueOf()</code>\u548C<code class="">Object.toString()</code>\u6765\u83B7\u53D6\u6570\u5B57\u57FA\u672C\u7C7B\u578B\u3002</p><div class="language-js ext-js code-wrapper"><div class="cbt-traffic_light"><span></span><span></span><span></span></div><span class="copy"></span><div class="code-inner"><pre class="language-js line-numbers-mode"><code class="language-js"><span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">i</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> a<span class="token punctuation">.</span>i<span class="token operator">--</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a <span class="token operator">==</span> a <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span>
</code></pre></div><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>\u7B2C\u4E8C\u79CD\uFF0C\u4F7F\u7528\u4E00\u4E2A<code class="">defineProperty</code>\uFF0C\u6BCF\u6B21\u83B7\u53D6\u503C\u65F6\u52A01\u3002\uFF08a===1 &amp;&amp; a===2 &amp;&amp; a===3 \u6B63\u662F\u7528\u7684\u8FD9\u4E2A\u65B9\u6CD5\uFF09</p><div class="language-js ext-js code-wrapper"><div class="cbt-traffic_light"><span></span><span></span><span></span></div><span class="copy"></span><div class="code-inner"><pre class="language-js line-numbers-mode"><code class="language-js"><span class="token keyword">let</span> val <span class="token operator">=</span> <span class="token number">1</span>
Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>window<span class="token punctuation">,</span> <span class="token string">&#39;a&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> val<span class="token operator">++</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a <span class="token operator">==</span> a <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span>
</code></pre></div><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div>`,45),c=[t],d={tag:["js"],cover:"/2022-05-11-09-12-40.png",tinyCover:"/cover/2022-05-11-09-12-40.png",coverWidth:564,coverHeight:794,meta:[]},l={__name:"index",setup(r,{expose:s}){return a({meta:[]}),s({frontmatter:{tag:["js"],cover:"/2022-05-11-09-12-40.png",tinyCover:"/cover/2022-05-11-09-12-40.png",coverWidth:564,coverHeight:794,meta:[]}}),(u,k)=>(p(),e("div",null,c))}};typeof n=="function"&&n(l);export{l as default,d as frontmatter};
