import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as s,c as a,e as p}from"./app.e7c9cb9e.js";const t={},e=p(`<blockquote><p>\u7EED\u4E0A\u8282, \u5F53hashmap\u4E3A\u7A7A\u6216\u8005table\u957F\u5EA6\u4E3A0\u65F6, \u4F1A\u8FDB\u884C\u6269\u5BB9. \u8FD9\u4E00\u8282\u5206\u6790\u5355hashmap\u4E2D\u542B\u6709\u503C\u7684\u60C5\u51B5</p></blockquote><h2 id="\u5B58\u53D6\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u5B58\u53D6\u65B9\u6CD5" aria-hidden="true">#</a> \u5B58\u53D6\u65B9\u6CD5</h2><p>\u4E0B\u9762\u7684\u4EE3\u7801\u5B9E\u73B0\u4E86\u5BF9\u8F93\u5165\u952E\u503C\u5BF9\u7684\u5B58\u50A8</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>p <span class="token operator">=</span> tab<span class="token punctuation">[</span>i <span class="token operator">=</span> <span class="token punctuation">(</span>n <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token operator">&amp;</span> hash<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span>
    tab<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">newNode</span><span class="token punctuation">(</span>hash<span class="token punctuation">,</span> key<span class="token punctuation">,</span> value<span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token class-name">Node</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">K</span><span class="token punctuation">,</span><span class="token class-name">V</span><span class="token punctuation">&gt;</span></span> e<span class="token punctuation">;</span> <span class="token class-name">K</span> k<span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>p<span class="token punctuation">.</span>hash <span class="token operator">==</span> hash <span class="token operator">&amp;&amp;</span>
        <span class="token punctuation">(</span><span class="token punctuation">(</span>k <span class="token operator">=</span> p<span class="token punctuation">.</span>key<span class="token punctuation">)</span> <span class="token operator">==</span> key <span class="token operator">||</span> <span class="token punctuation">(</span>key <span class="token operator">!=</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> key<span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span>k<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        e <span class="token operator">=</span> p<span class="token punctuation">;</span>
    <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>p <span class="token keyword">instanceof</span> <span class="token class-name">TreeNode</span><span class="token punctuation">)</span>
        e <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token class-name">TreeNode</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">K</span><span class="token punctuation">,</span><span class="token class-name">V</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">)</span>p<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">putTreeVal</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> tab<span class="token punctuation">,</span> hash<span class="token punctuation">,</span> key<span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> binCount <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> <span class="token punctuation">;</span> <span class="token operator">++</span>binCount<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token punctuation">(</span>e <span class="token operator">=</span> p<span class="token punctuation">.</span>next<span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                p<span class="token punctuation">.</span>next <span class="token operator">=</span> <span class="token function">newNode</span><span class="token punctuation">(</span>hash<span class="token punctuation">,</span> key<span class="token punctuation">,</span> value<span class="token punctuation">,</span> <span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>binCount <span class="token operator">&gt;=</span> <span class="token constant">TREEIFY_THRESHOLD</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token comment">// -1 for 1st</span>
                    <span class="token function">treeifyBin</span><span class="token punctuation">(</span>tab<span class="token punctuation">,</span> hash<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">break</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>e<span class="token punctuation">.</span>hash <span class="token operator">==</span> hash <span class="token operator">&amp;&amp;</span>
                <span class="token punctuation">(</span><span class="token punctuation">(</span>k <span class="token operator">=</span> e<span class="token punctuation">.</span>key<span class="token punctuation">)</span> <span class="token operator">==</span> key <span class="token operator">||</span> <span class="token punctuation">(</span>key <span class="token operator">!=</span> <span class="token keyword">null</span> <span class="token operator">&amp;&amp;</span> key<span class="token punctuation">.</span><span class="token function">equals</span><span class="token punctuation">(</span>k<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
                <span class="token keyword">break</span><span class="token punctuation">;</span>
            p <span class="token operator">=</span> e<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>e <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// existing mapping for key</span>
        <span class="token class-name">V</span> oldValue <span class="token operator">=</span> e<span class="token punctuation">.</span>value<span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>onlyIfAbsent <span class="token operator">||</span> oldValue <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span>
            e<span class="token punctuation">.</span>value <span class="token operator">=</span> value<span class="token punctuation">;</span>
        <span class="token function">afterNodeAccess</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> oldValue<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>n\u662Ftable\u7684\u957F\u5EA6, \u8FD9\u4E2A\u957F\u5EA6\u7684\u4E3A2\u7684\u5E42\u6B21; Node&lt;K,V&gt;[] tab\u5C31\u662Ftable.</p><p><code>tab[i = (n - 1) &amp; hash]</code>\u5B9E\u9645\u4E0A\u4E00\u4E2A\u53D6\u6A21\u7684\u64CD\u4F5C. \u56E0\u4E3An-1\u540E\u7684\u7ED3\u679C\u8F6C\u5316\u4E3A2\u8FDB\u5236\u540E\u548Chash\u4F5C\u4E0E\u8FD0\u7B97, \u5176\u7ED3\u679C\u5FC5\u7136\u662F\u53D6hash\u7684\u4F4E\u4F4D. \u5B9E\u9645\u76F8\u5F53\u4E8E<code>hash % n</code>. \u4E00\u822C\u60C5\u51B5\u4E0Bhash\u8981\u8FDC\u8FDC\u5927\u4E8En, \u77E5\u9053\u4E86\u8FD9\u4E2A, \u53D6\u6A21\u5B58\u503C\u4E5F\u5C31\u4E0D\u96BE\u7406\u89E3.</p><h2 id="\u5404\u5B89\u5929\u547D" tabindex="-1"><a class="header-anchor" href="#\u5404\u5B89\u5929\u547D" aria-hidden="true">#</a> \u5404\u5B89\u5929\u547D</h2><p>\u4E0B\u9762\u7EE7\u7EED\u8BF4\u4E00\u4E0B\u5404\u4E2A\u6761\u4EF6\u4E2D\u7684\u903B\u8F91:</p><p>\u5982\u679C\u53D6\u6A21\u540E\u7684\u4F4D\u7F6E\u4E0A\u6CA1\u6709\u5B58\u503C, \u5C31\u5C06\u503C\u5B58\u653E\u5230\u8FD9\u4E2A\u4F4D\u7F6E\u4E0A. \u5982\u679C\u53D6\u6A21\u540E\u7684\u4F4D\u7F6E\u4E0A\u5DF2\u7ECF\u5B58\u5728\u4E00\u4E2A\u8282\u70B9. \u90A3\u4E48\u8003\u8651\u4EE5\u4E0B\u4E09\u79CD\u60C5\u51B5:</p><ol><li><code>p.hash == hash &amp;&amp;((k = p.key) == key || (key != null &amp;&amp; key.equals(k)))</code> \u5373: \u4E4B\u524D\u7684\u8282\u70B9\u548C\u5F53\u524D\u8981\u5B58\u653E\u7684\u6570\u636Ehash\u76F8\u540C, \u4E14key\u76F8\u540C. key\u76F8\u540C\u7684\u542B\u4E49\u4E3A:\u5730\u5740\u76F8\u540C\u6216\u8005\u8C03\u7528\u91CD\u5199equals\u7ED3\u679C\u4E3Atrue. \u5728\u8FD9\u79CD\u60C5\u51B5\u4E0B, \u8FD8\u8981\u8FDB\u884C\u5982\u4E0B\u64CD\u4F5C:</li></ol><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">if</span> <span class="token punctuation">(</span>e <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// existing mapping for key</span>
    <span class="token class-name">V</span> oldValue <span class="token operator">=</span> e<span class="token punctuation">.</span>value<span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>onlyIfAbsent <span class="token operator">||</span> oldValue <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span>
        e<span class="token punctuation">.</span>value <span class="token operator">=</span> value<span class="token punctuation">;</span>
    <span class="token function">afterNodeAccess</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> oldValue<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9\u91CC\u7684e\u5C31\u662F\u5F53\u524D\u8282\u70B9. \u5373: <code>!onlyIfAbsent || oldValue == null</code> \u5F53\u53EF\u4FEE\u6539\u539F\u503C\u6216\u8005\u539F\u503C\u4E3Anull\u7684\u60C5\u51B5\u4E0B\u66FF\u6362\u539F\u6765\u8282\u70B9\u7684value. <code>afterNodeAccess</code>\u662F\u4E2A\u7A7A\u65B9\u6CD5. \u4F30\u8BA1\u662F\u7559\u7740\u4EE5\u540E\u8981\u505A\u4EC0\u4E48\u5904\u7406\u5427. \u4F46\u662F\u5F53\u524Djdk\u6CA1\u6709\u903B\u8F91\u5B9E\u73B0. \u56E0\u6B64\u6211\u4EEC\u5C31\u4E0D\u7BA1\u5B83\u4E86. \u6CE8\u610F||\u662F\u6709\u77ED\u8DEF\u73B0\u8C61\u7684. 2. <code>p instanceof TreeNode</code>\u4E4B\u524D\u7684\u8282\u70B9\u662FTreeNode\u7C7B\u578B, \u90A3\u4E48\u8C03\u7528\u7EA2\u9ED1\u6811\u7684\u5B58\u503C\u903B\u8F91<code>putTreeVal(this, tab, hash, key, value)</code> 3. \u975E\u4EE5\u4E0A\u4E24\u79CD\u60C5\u51B5, \u5219\u904D\u5386\u5F53\u524D\u94FE\u8868, \u5982\u679C1\u4E2D\u6761\u4EF6\u6210\u7ACB\u5219\u505C\u6B62\u904D\u5386. \u5426\u5219, \u904D\u5386\u76F4\u5230\u5C3E\u7ED3\u70B9\u540E, \u5728\u5C3E\u7ED3\u70B9\u65B0\u589E\u4E00\u4E2A\u8282\u70B9\u5B58\u653E\u6700\u65B0\u7684\u6570\u636E. \u987A\u4FBF\u5224\u65AD\u662F\u5426\u5E94\u8BE5\u8F6C\u6362\u4E3A\u7EA2\u9ED1\u6811. \u662F\u5219\u8FDB\u884C\u6811\u5316<code>treeifyBin(tab, hash)</code></p><p>\u81F3\u6B64, put\u7684\u903B\u8F91\u5DF2\u7ECF\u7ED3\u675F\u4E86. \u6700\u540E\u8FD8\u6709\u4E00\u70B9\u4EE3\u7801:</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token operator">++</span>modCount<span class="token punctuation">;</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">++</span>size <span class="token operator">&gt;</span> threshold<span class="token punctuation">)</span>
    <span class="token function">resize</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">afterNodeInsertion</span><span class="token punctuation">(</span>evict<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>modCount\u662F\u5BF9hashmap\u64CD\u4F5C\u7684\u4E00\u4E2A\u8BA1\u6570, \u5176\u76EE\u7684\u662F\u7528\u4E8E\u8FDB\u884C\u5FEB\u901F\u5931\u8D25fail-fast. size\u662F\u6620\u5C04\u6570\u91CF, \u4E5F\u5C31\u662Fhashmap\u5B58\u653E\u4E86\u591A\u5C11\u4E2A\u952E\u503C\u5BF9. \u5982\u679C\u8FD9\u4E2A\u5B58\u503C\u540E\u6570\u91CF\u5927\u4E8E\u4E86\u9608\u503C, \u5C31\u9700\u8981\u518D\u6B21\u6269\u5BB9. <code>afterNodeInsertion</code>\u53C8\u662F\u4E2A\u7A7A\u65B9\u6CD5. \u8FD9\u91CC\u5C31\u6309\u4E0B\u4E0D\u8868\u4E86.</p><p>\u6700\u540E, \u5E0C\u671B\u6CE8\u610F\u4E00\u4E0B\u8FD9\u90E8\u5206\u4EE3\u7801:</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>e <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// existing mapping for key</span>
        <span class="token class-name">V</span> oldValue <span class="token operator">=</span> e<span class="token punctuation">.</span>value<span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>onlyIfAbsent <span class="token operator">||</span> oldValue <span class="token operator">==</span> <span class="token keyword">null</span><span class="token punctuation">)</span>
            e<span class="token punctuation">.</span>value <span class="token operator">=</span> value<span class="token punctuation">;</span>
        <span class="token function">afterNodeAccess</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> oldValue<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token operator">++</span>modCount<span class="token punctuation">;</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">++</span>size <span class="token operator">&gt;</span> threshold<span class="token punctuation">)</span>
    <span class="token function">resize</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">afterNodeInsertion</span><span class="token punctuation">(</span>evict<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">return</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5F53\u51FA\u73B0\u76F8\u540C\u7684key\u548Chash\u65F6\u66FF\u6362\u539F\u503C\u540E\u4F1A\u76F4\u63A5\u8FD4\u56DE\u539F\u503C, \u5C31\u4E0D\u4F1A\u8FDB\u884C\u64CD\u4F5C\u8BA1\u6570\u4E86.</p><h2 id="end" tabindex="-1"><a class="header-anchor" href="#end" aria-hidden="true">#</a> end</h2><p>\u5230\u6B64put\u7684\u903B\u8F91\u5DF2\u7ECF\u4ECB\u7ECD\u5B8C\u4E86. \u4E0B\u4E00\u7BC7\u5F53\u7136\u8FD8\u662F\u8981\u7EE7\u7EED\u4E86. \u6211\u4EEC\u8C08\u4E00\u8C08\u7EA2\u9ED1\u6811\u5427.</p>`,20),o=[e];function c(l,u){return s(),a("div",null,o)}const r=n(t,[["render",c],["__file","\u6E90\u7801\u5206\u6790[3]HashMap\u7684\u5B58\u53D6.html.vue"]]);export{r as default};
