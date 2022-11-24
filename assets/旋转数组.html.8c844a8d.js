import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as s,c as a,e as p}from"./app.e7c9cb9e.js";const t={},e=p(`<blockquote><p>\u4E00\u9053\u770B\u8D77\u6765\u5F88\u7B80\u5355\u4F46\u662F\u53C8\u6709\u4E00\u5B9A\u6280\u5DE7\u7684\u9898(\u6216\u8BB8\u662F\u6211\u592A\u83DC)</p></blockquote><h2 id="\u539F\u9898\u5982\u4E0B" tabindex="-1"><a class="header-anchor" href="#\u539F\u9898\u5982\u4E0B" aria-hidden="true">#</a> \u539F\u9898\u5982\u4E0B</h2><p><img src="https://tech.nikolazhang.top/2020-02-16-19-34-34.png" alt="2020-02-16-19-34-34" loading="lazy"></p><h2 id="\u6211\u7684\u601D\u8DEF" tabindex="-1"><a class="header-anchor" href="#\u6211\u7684\u601D\u8DEF" aria-hidden="true">#</a> \u6211\u7684\u601D\u8DEF</h2><h3 id="\u5206\u6790\u4EE5\u53CA\u6CE8\u610F\u4E8B\u9879" tabindex="-1"><a class="header-anchor" href="#\u5206\u6790\u4EE5\u53CA\u6CE8\u610F\u4E8B\u9879" aria-hidden="true">#</a> \u5206\u6790\u4EE5\u53CA\u6CE8\u610F\u4E8B\u9879</h3><p>\u56E0\u4E3A\u6570\u7EC4\u65CB\u8F6C, \u6BCF\u4E2A\u4F4D\u7F6E\u4E0A\u7684\u6570\u636E\u5FC5\u7136\u53D1\u751F\u53D8\u5316. \u56E0\u6B64\u7B97\u6CD5\u6700\u4F18\u65F6\u95F4\u5FC5\u7136\u662FO(N). \u56E0\u6B64\u65E0\u8BBA\u5982\u4F55\u90FD\u8981\u5C06\u6570\u7EC4\u6240\u6709\u5143\u7D20\u904D\u5386\u4E00\u904D, \u56E0\u4E3A\u6BCF\u6B21\u53D8\u5316, \u53EA\u662F\u6570\u636E\u66FF\u6362, \u56E0\u6B64\u6211\u4EEC\u77E5\u9053\u7A7A\u95F4\u6700\u4F18\u5FC5\u7136\u662FO(1). \u800C\u4E14\u9898\u76EE\u8981\u6C42\u7A7A\u95F4\u590D\u6742\u5EA6\u4E3AO(1). \u56E0\u6B64\u60F3\u521B\u5EFA\u4E00\u4E2A\u65B0\u6570\u7EC4\u5F80\u91CC\u585E\u6570\u7684\u60F3\u6CD5\u5DF2\u7ECF\u88AB\u627C\u6740\u4E86.</p><p>\u8FD9\u5C31\u5F88\u660E\u663E\u4E86, \u6211\u4EEC\u53EA\u9700\u8981\u5728\u5916\u5C42\u5BF9\u6570\u7EC4\u8FDB\u884C\u904D\u5386, \u6216\u8005\u8BA1\u6570, \u5F53\u5FAA\u73AF\u6570\u7EC4\u957F\u5EA6\u6B21\u6570\u65F6, \u7B97\u6CD5\u7ED3\u675F. \u5185\u90E8\u9700\u8981\u4E00\u4E2A\u53D8\u91CF<code>temp</code>\u7528\u4E8E\u5B58\u653E\u5F53\u524D\u66FF\u6362\u7684\u503C<code>nums[next]</code> next\u7684\u8BA1\u7B97\u65B9\u5F0F\u5FC5\u7136\u662F<code>(next + k) % size</code>, k\u4E3A\u6B65\u957F, size\u4E3A\u6570\u7EC4\u5927\u5C0F. \u53D6\u4F59\u662F\u4E3A\u4E86\u9AD8\u4F4D\u66FF\u6362\u4F4E\u4F4D, \u4F60\u5FC5\u987B\u5728\u6570\u7EC4\u957F\u5EA6\u5185\u8FDB\u884C\u64CD\u4F5C.</p><p>\u5BF9\u4E8E\u4EE5\u67D0\u4E2A\u6B65\u957F, \u8FDB\u884C\u6570\u7EC4\u5FAA\u73AF, \u65E0\u975E\u6709\u4E24\u79CD\u60C5\u51B5:</p><ol><li>\u53D1\u751F\u5C40\u90E8\u5FAA\u73AF, \u6570\u7EC4\u65E0\u6CD5\u5168\u90E8\u904D\u5386</li><li>\u6570\u7EC4\u80FD\u591F\u5168\u90E8\u904D\u5386</li></ol><p>\u53EF\u4EE5\u53C2\u8003\u4E0B\u56FE, \u5206\u522B\u4EE52, 3\u4E3A\u6B65\u957F\u8FDB\u884C1~8\u7684\u5FAA\u73AF\u904D\u5386: <img src="https://tech.nikolazhang.top/2020-02-16-19-48-02.png" alt="2020-02-16-19-48-02" loading="lazy"></p><p>\u5F53\u6B65\u957F\u53EF\u6574\u9664\u65F6, \u4F1A\u53D1\u751F\u5C40\u90E8\u5FAA\u73AF, \u8FD9\u4E2A\u5F88\u597D\u7406\u89E3. \u5F53\u6B65\u957F\u4E0D\u53EF\u6574\u9664\u65F6, \u65E0\u6CD5\u5728\u8DE8\u5EA6\u4E3A\u6570\u7EC4\u957F\u5EA6\u65F6\u56DE\u5230\u8D77\u59CB\u4F4D\u7F6E. \u56E0\u6B64\u65E0\u6CD5\u95ED\u73AF. \u800C\u4E0B\u4E00\u6B21\u56DE\u5230\u8D77\u59CB\u70B9, \u4E5F\u5C31\u662F\u95ED\u73AF\u53EA\u80FD\u662F\u6570\u7EC4\u957F\u5EA6\u7684\u6B65\u8FDB\u957F\u5EA6\u500D.</p><p>\u989D, \u5176\u5B9E\u4E0A\u9762\u548C\u6211\u4EEC\u7B97\u6CD5\u5173\u7CFB\u4E0D\u5927, \u53EA\u662F\u63D0\u9192\u4F60\u62C5\u5FC3\u5C40\u90E8\u5FAA\u73AF\u7684\u95EE\u9898. \u8FD9\u4E5F\u662F\u6211\u7B2C\u4E00\u6B21\u5199\u72AF\u7684\u9519\u8BEF.</p><hr><p>\u5982\u679C\u8FBE\u5230\u5C40\u90E8\u5FAA\u73AF, \u90A3\u4E48<code>next</code>\u5FC5\u7136\u4F1A\u56DE\u5230\u8D77\u59CB\u904D\u5386\u4F4D\u7F6E. \u56E0\u6B64\u6211\u4EEC\u53EF\u4EE5\u589E\u52A0<code>pre</code>\u8BB0\u5F55\u8D77\u59CB\u4F4D\u7F6E, \u5E76\u5728\u5C40\u90E8\u5FAA\u73AF\u8FBE\u6210\u540E, \u8BA9pre\u81EA\u589E1, \u5F00\u59CB\u4E0B\u4E00\u4E2A\u5C40\u90E8\u5FAA\u73AF.</p><p>\u4E3A\u4EC0\u4E48\u8FD9\u6837\u505A\u80FD\u5728O(n)\u5B9E\u73B0\u6240\u6709\u5143\u7D20\u7684\u66FF\u6362\u5462? \u56E0\u4E3A, \u5173\u952E\u539F\u56E0\u5728\u4E8E\u6BCF\u6B21\u5FAA\u73AF\u90FD\u4F1A\u53D1\u751F\u5143\u7D20\u66FF\u6362. \u800C\u4E0D\u4EA7\u751F\u6F0F\u6362\u7684\u539F\u56E0\u5728\u4E8E, \u6211\u4EEC\u8003\u8651\u4E86\u5C40\u90E8\u5FAA\u73AF\u7684\u60C5\u51B5. \u4E0D\u80FD\u6574\u9664\u7684\u5FC5\u7136\u53EA\u6709\u4E00\u4E2A\u95ED\u73AF.</p><h2 id="\u7A0B\u5E8F" tabindex="-1"><a class="header-anchor" href="#\u7A0B\u5E8F" aria-hidden="true">#</a> \u7A0B\u5E8F</h2><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">func</span> <span class="token function">rotate</span><span class="token punctuation">(</span>nums <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">,</span> k <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   size <span class="token operator">:=</span> <span class="token function">len</span><span class="token punctuation">(</span>nums<span class="token punctuation">)</span>
   <span class="token keyword">if</span> size <span class="token operator">&lt;=</span> <span class="token number">1</span> <span class="token operator">||</span> k <span class="token operator">&lt;</span> <span class="token number">1</span> <span class="token operator">||</span> k<span class="token operator">==</span>size<span class="token punctuation">{</span>
      <span class="token keyword">return</span>
   <span class="token punctuation">}</span>
   pre<span class="token punctuation">,</span> next<span class="token punctuation">,</span> temp <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> nums<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
   <span class="token keyword">for</span> i<span class="token operator">:=</span><span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">&lt;</span>size<span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
      next <span class="token operator">=</span> <span class="token punctuation">(</span>next <span class="token operator">+</span> k<span class="token punctuation">)</span> <span class="token operator">%</span> size
      fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;\u4EA4\u6362 %d, %d\\n&quot;</span><span class="token punctuation">,</span> temp<span class="token punctuation">,</span> nums<span class="token punctuation">[</span>next<span class="token punctuation">]</span><span class="token punctuation">)</span>
      nums<span class="token punctuation">[</span>next<span class="token punctuation">]</span><span class="token punctuation">,</span> temp <span class="token operator">=</span> temp<span class="token punctuation">,</span> nums<span class="token punctuation">[</span>next<span class="token punctuation">]</span>
      <span class="token keyword">for</span> <span class="token boolean">_</span><span class="token punctuation">,</span> v <span class="token operator">:=</span> <span class="token keyword">range</span> nums <span class="token punctuation">{</span>
         fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d,&quot;</span><span class="token punctuation">,</span> v<span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
      fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;\\t %d\\n&quot;</span><span class="token punctuation">,</span> temp<span class="token punctuation">)</span>
      <span class="token keyword">if</span> next <span class="token operator">==</span> pre <span class="token punctuation">{</span>
         fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;====\u91CD\u65B0\u8BBE\u7F6E&quot;</span><span class="token punctuation">,</span> pre<span class="token punctuation">)</span>
         pre<span class="token operator">++</span>
         temp <span class="token operator">=</span> nums<span class="token punctuation">[</span>pre<span class="token punctuation">]</span>
         next <span class="token operator">=</span> pre
      <span class="token punctuation">}</span>
   <span class="token punctuation">}</span>

   <span class="token keyword">for</span> <span class="token boolean">_</span><span class="token punctuation">,</span> v <span class="token operator">:=</span> <span class="token keyword">range</span> nums <span class="token punctuation">{</span>
      fmt<span class="token punctuation">.</span><span class="token function">Print</span><span class="token punctuation">(</span>v<span class="token punctuation">)</span>
   <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
   nums <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">}</span>
   <span class="token function">rotate</span><span class="token punctuation">(</span>nums<span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">)</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u7ED3\u679C" tabindex="-1"><a class="header-anchor" href="#\u7ED3\u679C" aria-hidden="true">#</a> \u7ED3\u679C</h3><p><img src="https://tech.nikolazhang.top/2020-02-16-20-46-14.png" alt="2020-02-16-20-46-14" loading="lazy"></p><p>leetcode\u7ED3\u679C: <img src="https://tech.nikolazhang.top/2020-02-16-20-48-22.png" alt="2020-02-16-20-48-22" loading="lazy"></p><h2 id="\u6700\u4F18\u89E3" tabindex="-1"><a class="header-anchor" href="#\u6700\u4F18\u89E3" aria-hidden="true">#</a> \u6700\u4F18\u89E3</h2><p>\u6211\u4EEC\u518D\u8C08\u4E00\u8C08\u6700\u4F18\u89E3</p><p>\u4EE3\u7801\u5982\u4E0B:</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">rotate</span><span class="token punctuation">(</span>nums <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">,</span> k <span class="token builtin">int</span><span class="token punctuation">)</span>  <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token function">len</span><span class="token punctuation">(</span>nums<span class="token punctuation">)</span><span class="token operator">==</span><span class="token number">0</span> <span class="token operator">||</span>k<span class="token operator">==</span><span class="token number">0</span><span class="token operator">||</span>k<span class="token operator">%</span><span class="token function">len</span><span class="token punctuation">(</span>nums<span class="token punctuation">)</span><span class="token operator">==</span><span class="token number">0</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span>
    <span class="token punctuation">}</span>
    k<span class="token operator">=</span>k<span class="token operator">%</span><span class="token function">len</span><span class="token punctuation">(</span>nums<span class="token punctuation">)</span>
    <span class="token function">reverseSlice</span><span class="token punctuation">(</span>nums<span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token function">len</span><span class="token punctuation">(</span>nums<span class="token punctuation">)</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token function">reverseSlice</span><span class="token punctuation">(</span>nums<span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span>k<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span>
    <span class="token function">reverseSlice</span><span class="token punctuation">(</span>nums<span class="token punctuation">,</span>k<span class="token punctuation">,</span><span class="token function">len</span><span class="token punctuation">(</span>nums<span class="token punctuation">)</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">reverseSlice</span><span class="token punctuation">(</span>nums <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">,</span>i<span class="token punctuation">,</span>j <span class="token builtin">int</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">for</span> <span class="token punctuation">;</span>i<span class="token operator">&lt;</span>j<span class="token punctuation">;</span> <span class="token punctuation">{</span>
        nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">,</span>nums<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token operator">=</span>nums<span class="token punctuation">[</span>j<span class="token punctuation">]</span><span class="token punctuation">,</span>nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
        i<span class="token operator">++</span>
        j<span class="token operator">--</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u9996\u5148\u5168\u90E8\u904D\u5386\u4E00\u6B21, \u4EA4\u6362\u524D\u540E\u4E24\u4E2A\u955C\u50CF\u4F4D\u7F6E\u5143\u7D20 \u4E4B\u540E\u5206\u522B\u5BF90<sub>k-1\u548Ck</sub>len(nums)-1\u533A\u57DF\u91CD\u590D\u4E0A\u8FF0\u64CD\u4F5C.</p><p>\u8FD9\u4E48\u795E\u5947\u7684\u5417? \u753B\u4E00\u4E0B\u56FE, \u8FD8\u771F\u662F\u7684! <img src="https://tech.nikolazhang.top/2020-02-16-20-58-56.png" alt="2020-02-16-20-58-56" loading="lazy"></p><p>\u8FD9\u79CD\u65B9\u6CD5\u7684\u5DE7\u5999\u4E4B\u5904\u5728\u4E8E, \u5F53\u6211\u4EEC\u8FDB\u884Ck\u6B21\u79FB\u52A8\u7684\u65F6\u5019, \u4F1A\u628A\u540E\u9762\u7684k%n, (\u8003\u8651k&gt;n)\u4E2A\u6570\u653E\u5230\u524D\u9762, \u5168\u5C40\u53CD\u8F6C\u540E, \u4EE5k-1\u548Ck\u4E3A\u754C\u5C06\u79FB\u9664\u6570\u7EC4\u8DD1\u5230\u524D\u9762\u7684\u5143\u7D20\u548C\u672A\u79FB\u51FA\u6570\u7EC4\u8DD1\u5230\u540E\u9762\u7684\u5143\u7D20\u5206\u5F00, \u4E4B\u540E\u8FDB\u884C\u53CD\u8F6C, \u8FDB\u884C\u987A\u5E8F\u6062\u590D. \u5999\u54C9, \u5999\u54C9~\u6211\u5C0F\u53EE\u5F53\u7518\u62DC\u4E0B\u98CE!</p><p><img src="https://tech.nikolazhang.top/2020-02-16-21-15-45.png" alt="2020-02-16-21-15-45" loading="lazy"></p>`,28),o=[e];function c(i,l){return s(),a("div",null,o)}const r=n(t,[["render",c],["__file","\u65CB\u8F6C\u6570\u7EC4.html.vue"]]);export{r as default};
