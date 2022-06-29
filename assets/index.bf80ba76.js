import{i as a,o as p,c as t,j as n,k as e}from"./app.aed5c2e5.js";const c=e(`<h1 id="unity%E5%B8%B8%E7%94%A8%E6%96%B9%E6%B3%95%E5%A4%87%E5%BF%98" tabindex="-1"><span class="prefix"></span><span class="content">unity\u5E38\u7528\u65B9\u6CD5\u5907\u5FD8</span><span class="suffix"></span></h1><h2 id="unity%E4%B8%AD%E4%B8%89%E7%A7%8D%E8%B0%83%E7%94%A8%E5%85%B6%E4%BB%96%E8%84%9A%E6%9C%AC%E5%87%BD%E6%95%B0%E7%9A%84%E6%96%B9%E6%B3%95" tabindex="-1"><span class="prefix"></span><span class="content">unity\u4E2D\u4E09\u79CD\u8C03\u7528\u5176\u4ED6\u811A\u672C\u51FD\u6570\u7684\u65B9\u6CD5</span><span class="suffix"></span></h2><p>\u7B2C\u4E00\u79CD\uFF0C\u88AB\u8C03\u7528\u811A\u672C\u51FD\u6570\u4E3Astatic\u7C7B\u578B\uFF0C\u8C03\u7528\u65F6\u76F4\u63A5\u7528 \u811A\u672C\u540D.\u51FD\u6570\u540D()</p><p>\u7B2C\u4E8C\u79CD\uFF0CGameObject.Find(\u201C\u811A\u672C\u6240\u5728\u7684\u7269\u4F53\u7684\u540D\u5B57\u201D).SendMessage(\u201C\u51FD\u6570\u540D\u201D); //\u80FD\u8C03\u7528public\u548Cprivate\u7C7B\u578B\u51FD\u6570</p><p>\u7B2C\u4E09\u79CD\uFF0CGameObject.Find(\u201C\u811A\u672C\u6240\u5728\u7684\u7269\u4F53\u7684\u540D\u5B57\u201D).GetComponent&lt;\u811A\u672C\u540D&gt;().\u51FD\u6570\u540D(); //\u53EA\u80FD\u8C03\u7528public\u7C7B\u578B\u51FD\u6570</p><h2 id="cs-where%E8%BF%87%E6%BB%A4" tabindex="-1"><span class="prefix"></span><span class="content">CS Where\u8FC7\u6EE4</span><span class="suffix"></span></h2><div class="language-cs ext-cs code-wrapper"><div class="cbt-traffic_light"><span></span><span></span><span></span></div><span class="copy"></span><div class="code-inner"><pre class="language-cs line-numbers-mode"><code class="language-cs"><span class="token keyword">using</span> <span class="token namespace">System<span class="token punctuation">.</span>Linq</span><span class="token punctuation">;</span>
<span class="token comment">//...</span>
<span class="token class-name">List<span class="token punctuation">&lt;</span>GameObject<span class="token punctuation">&gt;</span></span> enabledDogs <span class="token operator">=</span> Dogs<span class="token punctuation">.</span><span class="token function">Where</span><span class="token punctuation">(</span>e <span class="token operator">=&gt;</span> <span class="token operator">!</span>e<span class="token punctuation">.</span>activeInHierarchy<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ToList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="unity-%E5%AE%9E%E7%8E%B0%E7%AE%80%E5%8D%95%E7%9A%84ws%E9%93%BE%E6%8E%A5" tabindex="-1"><span class="prefix"></span><span class="content">Unity \u5B9E\u73B0\u7B80\u5355\u7684ws\u94FE\u63A5</span><span class="suffix"></span></h2><div class="language-cs ext-cs code-wrapper"><div class="cbt-traffic_light"><span></span><span></span><span></span></div><span class="copy"></span><div class="code-inner"><pre class="language-cs line-numbers-mode"><code class="language-cs"><span class="token keyword">using</span> <span class="token namespace">System</span><span class="token punctuation">;</span>
<span class="token keyword">using</span> <span class="token namespace">System<span class="token punctuation">.</span>Collections</span><span class="token punctuation">;</span>
<span class="token keyword">using</span> <span class="token namespace">System<span class="token punctuation">.</span>Collections<span class="token punctuation">.</span>Generic</span><span class="token punctuation">;</span>
<span class="token keyword">using</span> <span class="token namespace">System<span class="token punctuation">.</span>Linq</span><span class="token punctuation">;</span>
<span class="token keyword">using</span> <span class="token namespace">System<span class="token punctuation">.</span>Net<span class="token punctuation">.</span>WebSockets</span><span class="token punctuation">;</span>
<span class="token keyword">using</span> <span class="token namespace">System<span class="token punctuation">.</span>Threading</span><span class="token punctuation">;</span>
<span class="token keyword">using</span> <span class="token namespace">UnityEngine</span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">GameLogic</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">MonoBehaviour</span></span>
<span class="token punctuation">{</span>
    <span class="token comment">// Start is called before the first frame</span>
    <span class="token comment">//</span>
    <span class="token keyword">private</span> <span class="token class-name">ClientWebSocket</span> ws<span class="token punctuation">;</span>
    <span class="token comment">// \u73A9\u5BB6\u6C60 \u6536\u96C6\u6700\u65B0\u8FDB\u5165\u7684100\u4E2A\u73A9\u5BB6</span>
    <span class="token keyword">public</span> <span class="token class-name">List<span class="token punctuation">&lt;</span>DanmuData<span class="token punctuation">&gt;</span></span> lastDanmuList <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">List<span class="token punctuation">&lt;</span>DanmuData<span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Start</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        
    <span class="token punctuation">}</span>

    <span class="token comment">// Update is called once per frame</span>
    <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Update</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        
    <span class="token punctuation">}</span>
    <span class="token keyword">private</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">OnDestroy</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        ws<span class="token punctuation">.</span><span class="token function">Dispose</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token keyword">async</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">WebSocket</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">try</span>
        <span class="token punctuation">{</span>
            ws <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">ClientWebSocket</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">CancellationToken</span> ct <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">CancellationToken</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token class-name">Uri</span> url <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">Uri</span><span class="token punctuation">(</span><span class="token string">&quot;ws://localhost:3000&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">await</span> ws<span class="token punctuation">.</span><span class="token function">ConnectAsync</span><span class="token punctuation">(</span>url<span class="token punctuation">,</span> ct<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span>
            <span class="token punctuation">{</span>
                <span class="token class-name"><span class="token keyword">var</span></span> result <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name"><span class="token keyword">byte</span></span><span class="token punctuation">[</span><span class="token number">1024</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
                <span class="token keyword">await</span> ws<span class="token punctuation">.</span><span class="token function">ReceiveAsync</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token constructor-invocation class-name">ArraySegment<span class="token punctuation">&lt;</span><span class="token keyword">byte</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">CancellationToken</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//\u63A5\u53D7\u6570\u636E</span>
                <span class="token class-name"><span class="token keyword">var</span></span> str <span class="token operator">=</span> System<span class="token punctuation">.</span>Text<span class="token punctuation">.</span>Encoding<span class="token punctuation">.</span>UTF8<span class="token punctuation">.</span><span class="token function">GetString</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// Encoding.UTF32.GetString(result, 0, result.Length - 3);</span>
                Debug<span class="token punctuation">.</span><span class="token function">Log</span><span class="token punctuation">(</span><span class="token string">&quot;=======&quot;</span> <span class="token operator">+</span> str<span class="token punctuation">.</span><span class="token function">ToString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token class-name">DanmuData</span> danmu <span class="token operator">=</span> <span class="token function">returnAsJson</span><span class="token punctuation">(</span>str<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token class-name"><span class="token keyword">var</span></span> has <span class="token operator">=</span> lastDanmuList<span class="token punctuation">.</span><span class="token function">Where</span><span class="token punctuation">(</span><span class="token punctuation">(</span>it<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> it<span class="token punctuation">.</span>uid <span class="token operator">==</span> danmu<span class="token punctuation">.</span>uid<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token generic-method"><span class="token function">ToList</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>DanmuData<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>lastDanmuList<span class="token punctuation">.</span>Count <span class="token operator">&lt;</span> <span class="token number">100</span><span class="token operator">&amp;&amp;</span>has<span class="token punctuation">.</span>Count<span class="token operator">&lt;</span><span class="token number">0</span><span class="token punctuation">)</span>
                <span class="token punctuation">{</span>
                 lastDanmuList<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span>danmu<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
                <span class="token keyword">else</span>
                <span class="token punctuation">{</span>
                 lastDanmuList<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span>danmu<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">Exception</span> ex<span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            Console<span class="token punctuation">.</span><span class="token function">WriteLine</span><span class="token punctuation">(</span>ex<span class="token punctuation">.</span>Message<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token return-type class-name">DanmuData</span> <span class="token function">returnAsJson</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">string</span></span> jsonString<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> JsonUtility<span class="token punctuation">.</span><span class="token generic-method"><span class="token function">FromJson</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>DanmuData<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span>jsonString<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">SerializeField</span></span><span class="token punctuation">]</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">DanmuData</span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token class-name"><span class="token keyword">string</span></span> uname<span class="token punctuation">;</span>
    <span class="token comment">// \u5F39\u5E55\u4FE1\u606F</span>
    <span class="token keyword">public</span> <span class="token class-name"><span class="token keyword">string</span></span> message<span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token class-name"><span class="token keyword">string</span></span> face<span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token class-name"><span class="token keyword">int</span></span> uid<span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token class-name"><span class="token keyword">int</span></span> type<span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token class-name"><span class="token keyword">int</span></span> rankNo<span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token class-name"><span class="token keyword">string</span></span> fans<span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token class-name"><span class="token keyword">string</span></span> medal<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br></div></div><h2 id="%E6%A0%B9%E6%8D%AE%E5%8D%95%E4%B8%AA%E5%B1%9E%E6%80%A7-%E6%8E%92%E5%BA%8F-%E5%8F%AF%E4%BB%A5%E7%94%A8-unity%E8%87%AA%E5%B8%A6%E7%9A%84api" tabindex="-1"><span class="prefix"></span><span class="content">\u6839\u636E\u5355\u4E2A\u5C5E\u6027 \u6392\u5E8F \u53EF\u4EE5\u7528 unity\u81EA\u5E26\u7684API</span><span class="suffix"></span></h2><div class="language-cs ext-cs code-wrapper"><div class="cbt-traffic_light"><span></span><span></span><span></span></div><span class="copy"></span><div class="code-inner"><pre class="language-cs line-numbers-mode"><code class="language-cs">listBackPackData<span class="token punctuation">.</span><span class="token function">Sort</span><span class="token punctuation">(</span>sort<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//\u7B2C\u4E00\u4E2A\u53C2\u6570\u51CF\u53BB\u7B2C\u4E8C\u4E2A\u53C2\u6570 \u662F\u5347\u5E8F \u53CD\u4E4B\u5219\u662F\u964D\u5E8F</span>
<span class="token keyword">private</span> <span class="token return-type class-name"><span class="token keyword">int</span></span> <span class="token function">sort</span><span class="token punctuation">(</span><span class="token class-name">Game<span class="token punctuation">.</span>item</span> info<span class="token punctuation">,</span> <span class="token class-name">Game<span class="token punctuation">.</span>item</span> infogo<span class="token punctuation">)</span>
<span class="token punctuation">{</span>undefined
<span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span>info<span class="token punctuation">.</span>ConfigId <span class="token operator">-</span> <span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span>infogo<span class="token punctuation">.</span>ConfigId<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="%E6%A0%B9%E6%8D%AE-%E5%A4%9A%E4%B8%AA%E5%B1%9E%E6%80%A7-%E8%BF%9B%E8%A1%8C%E6%8E%92%E5%BA%8F" tabindex="-1"><span class="prefix"></span><span class="content">\u6839\u636E \u591A\u4E2A\u5C5E\u6027 \u8FDB\u884C\u6392\u5E8F</span><span class="suffix"></span></h2><div class="language-cs ext-cs code-wrapper"><div class="cbt-traffic_light"><span></span><span></span><span></span></div><span class="copy"></span><div class="code-inner"><pre class="language-cs line-numbers-mode"><code class="language-cs">ItemData<span class="token punctuation">.</span>HeroList <span class="token operator">=</span> accountLoginRes<span class="token punctuation">.</span>HeroList<span class="token punctuation">.</span><span class="token function">OrderBy</span><span class="token punctuation">(</span>t <span class="token operator">=&gt;</span> t<span class="token punctuation">.</span>Rank<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ThenBy</span><span class="token punctuation">(</span>t <span class="token operator">=&gt;</span> t<span class="token punctuation">.</span>Hp<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ToList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//\u5347\u5E8F</span>

ItemData<span class="token punctuation">.</span>HeroList <span class="token operator">=</span> accountLoginRes<span class="token punctuation">.</span>HeroList<span class="token punctuation">.</span><span class="token function">OrderByDescending</span><span class="token punctuation">(</span>t <span class="token operator">=&gt;</span> t<span class="token punctuation">.</span>Rank<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ThenByDescending</span><span class="token punctuation">(</span>t <span class="token operator">=&gt;</span> t<span class="token punctuation">.</span>Hp<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ToList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//\u964D\u5E8F</span>

</code></pre></div><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div>`,13),o=[c],b={tag:["unity"],cover:"/2022-05-10-18-59-58.png",tinyCover:"/cover/2022-05-10-18-59-58.png",coverWidth:564,coverHeight:1172,meta:[]},l={__name:"index",setup(u,{expose:s}){return a({meta:[]}),s({frontmatter:{tag:["unity"],cover:"/2022-05-10-18-59-58.png",tinyCover:"/cover/2022-05-10-18-59-58.png",coverWidth:564,coverHeight:1172,meta:[]}}),(r,k)=>(p(),t("div",null,o))}};typeof n=="function"&&n(l);export{l as default,b as frontmatter};