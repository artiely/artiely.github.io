import{i as a,o as p,c as e,j as n,k as t}from"./app.519b9fe6.js";const o=t(`<h1 id="unity-%E4%B8%AD%E4%BD%BF%E7%94%A8websocket" tabindex="-1"><span class="prefix"></span><span class="content">unity \u4E2D\u4F7F\u7528websocket</span><span class="suffix"></span></h1><p><a href="https://github.com/endel/NativeWebSocket" target="_blank" rel="noopener">NativeWebSocket</a></p><h2 id="install-via-upm-(unity-package-manager)" tabindex="-1"><span class="prefix"></span><span class="content">install via UPM (Unity Package Manager)</span><span class="suffix"></span></h2><ul><li>Open Unity</li><li>Open Package Manager Window</li><li>Click Add Package From Git URL</li><li>Enter URL: <code class="">https://github.com/endel/NativeWebSocket.git#upm</code></li></ul><h2 id="usage" tabindex="-1"><span class="prefix"></span><span class="content">usage</span><span class="suffix"></span></h2><div class="language-cs ext-cs code-wrapper"><div class="cbt-traffic_light"><span></span><span></span><span></span></div><span class="copy"></span><div class="code-inner"><pre class="language-cs line-numbers-mode"><code class="language-cs"><span class="token keyword">using</span> <span class="token namespace">System</span><span class="token punctuation">;</span>
<span class="token keyword">using</span> <span class="token namespace">System<span class="token punctuation">.</span>Collections</span><span class="token punctuation">;</span>
<span class="token keyword">using</span> <span class="token namespace">System<span class="token punctuation">.</span>Collections<span class="token punctuation">.</span>Generic</span><span class="token punctuation">;</span>
<span class="token keyword">using</span> <span class="token namespace">UnityEngine</span><span class="token punctuation">;</span>

<span class="token keyword">using</span> <span class="token namespace">NativeWebSocket</span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Connection</span> <span class="token punctuation">:</span> <span class="token type-list"><span class="token class-name">MonoBehaviour</span></span>
<span class="token punctuation">{</span>
  <span class="token class-name">WebSocket</span> websocket<span class="token punctuation">;</span>

  <span class="token comment">// Start is called before the first frame update</span>
  <span class="token keyword">async</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Start</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">{</span>
    websocket <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">WebSocket</span><span class="token punctuation">(</span><span class="token string">&quot;ws://localhost:2567&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    websocket<span class="token punctuation">.</span>OnOpen <span class="token operator">+=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span>
    <span class="token punctuation">{</span>
      Debug<span class="token punctuation">.</span><span class="token function">Log</span><span class="token punctuation">(</span><span class="token string">&quot;Connection open!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>

    websocket<span class="token punctuation">.</span>OnError <span class="token operator">+=</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token operator">=&gt;</span>
    <span class="token punctuation">{</span>
      Debug<span class="token punctuation">.</span><span class="token function">Log</span><span class="token punctuation">(</span><span class="token string">&quot;Error! &quot;</span> <span class="token operator">+</span> e<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>

    websocket<span class="token punctuation">.</span>OnClose <span class="token operator">+=</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token operator">=&gt;</span>
    <span class="token punctuation">{</span>
      Debug<span class="token punctuation">.</span><span class="token function">Log</span><span class="token punctuation">(</span><span class="token string">&quot;Connection closed!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>

    websocket<span class="token punctuation">.</span>OnMessage <span class="token operator">+=</span> <span class="token punctuation">(</span>bytes<span class="token punctuation">)</span> <span class="token operator">=&gt;</span>
    <span class="token punctuation">{</span>
      Debug<span class="token punctuation">.</span><span class="token function">Log</span><span class="token punctuation">(</span><span class="token string">&quot;OnMessage!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      Debug<span class="token punctuation">.</span><span class="token function">Log</span><span class="token punctuation">(</span>bytes<span class="token punctuation">)</span><span class="token punctuation">;</span>
      
      <span class="token comment">// getting the message as a string</span>
      <span class="token comment">// var message = System.Text.Encoding.UTF8.GetString(bytes);</span>
      <span class="token comment">// Debug.Log(&quot;OnMessage! &quot; + message);</span>
      <span class="token comment">// JsonUtility.FromJson&lt;DanmuData&gt;(jsonString);</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>

    <span class="token comment">// Keep sending messages at every 0.3s</span>
    <span class="token function">InvokeRepeating</span><span class="token punctuation">(</span><span class="token string">&quot;SendWebSocketMessage&quot;</span><span class="token punctuation">,</span> <span class="token number">0.0f</span><span class="token punctuation">,</span> <span class="token number">0.3f</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token comment">// waiting for messages</span>
    <span class="token keyword">await</span> websocket<span class="token punctuation">.</span><span class="token function">Connect</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Update</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">{</span>
    <span class="token preprocessor property">#<span class="token directive keyword">if</span> !UNITY_WEBGL || </span><span class="token return-type class-name">UNITY_EDITOR</span>
      websocket<span class="token punctuation">.</span><span class="token function">DispatchMessageQueue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token preprocessor property">#<span class="token directive keyword">endif</span></span>
  <span class="token punctuation">}</span>

  <span class="token keyword">async</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">SendWebSocketMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>websocket<span class="token punctuation">.</span>State <span class="token operator">==</span> WebSocketState<span class="token punctuation">.</span>Open<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
      <span class="token comment">// Sending bytes</span>
      <span class="token keyword">await</span> websocket<span class="token punctuation">.</span><span class="token function">Send</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token constructor-invocation class-name"><span class="token keyword">byte</span><span class="token punctuation">[</span><span class="token punctuation">]</span></span> <span class="token punctuation">{</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">30</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

      <span class="token comment">// Sending plain text</span>
      <span class="token keyword">await</span> websocket<span class="token punctuation">.</span><span class="token function">SendText</span><span class="token punctuation">(</span><span class="token string">&quot;plain text message&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">private</span> <span class="token keyword">async</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">OnApplicationQuit</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">{</span>
    <span class="token keyword">await</span> websocket<span class="token punctuation">.</span><span class="token function">Close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre></div><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br></div></div>`,6),c=[o],m={tag:["unity","webSocket"],cover:"/2022-05-10-18-15-57.png",tinyCover:"/cover/2022-05-10-18-15-57.png",coverWidth:564,coverHeight:848,meta:[]},l={__name:"index",setup(u,{expose:s}){return a({meta:[]}),s({frontmatter:{tag:["unity","webSocket"],cover:"/2022-05-10-18-15-57.png",tinyCover:"/cover/2022-05-10-18-15-57.png",coverWidth:564,coverHeight:848,meta:[]}}),(r,k)=>(p(),e("div",null,c))}};typeof n=="function"&&n(l);export{l as default,m as frontmatter};
