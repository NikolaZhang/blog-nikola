import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as s,c as a,e as p}from"./app.e7c9cb9e.js";const t={},e=p(`<blockquote><p>\u4E3B\u8981\u4ECB\u7ECD\u4E00\u4E0Bwait notify, park unpark \u7B49\u7684\u4F7F\u7528, \u505A\u4E00\u4E9B\u4F8B\u5B50\u4F9B\u53C2\u8003</p></blockquote><h2 id="wait\u4E0Enotify" tabindex="-1"><a class="header-anchor" href="#wait\u4E0Enotify" aria-hidden="true">#</a> wait\u4E0Enotify</h2><p>wait\u548Cnotify\u662FObject\u7C7B\u4E2D\u7684native\u65B9\u6CD5, \u4E14\u4E0D\u53EF\u4EE5\u91CD\u5199. \u5728\u6267\u884C\u7684\u65F6\u5019, \u4F9D\u8D56\u4E00\u4E2A\u5BF9\u8C61\u7684\u76D1\u89C6\u5668. \u56E0\u6B64\u6211\u4EEC\u9700\u8981\u4F7F\u7528\u540C\u6B65, \u786E\u4FDD\u5176\u80FD\u83B7\u53D6\u5230\u5BF9\u8C61\u7684\u9501. \u6CE8\u610F, wait\u4E4B\u540E\u4E0D\u80FD\u6CA1\u6709notify, \u5F53\u7136\u4E5F\u53EF\u4EE5\u6307\u5B9A\u7B49\u5F85\u65F6\u95F4.</p><p>\u4E0B\u9762\u7684\u4F8B\u5B50\u662F\u901A\u8FC7wait\u548Cnotify\u5B9E\u73B0\u7684\u751F\u4EA7\u6D88\u8D39\u529F\u80FD, \u5F53\u751F\u4EA7\u6570\u91CF\u8FBE\u5230\u4E00\u5B9A\u503C\u7684\u65F6\u5019\u5524\u9192\u6D88\u8D39\u7EBF\u7A0B\u751F\u4EA7\u7B49\u5F85, \u6D88\u8D39\u52300\u5524\u9192\u751F\u4EA7\u7EBF\u7A0B\u6D88\u8D39\u7B49\u5F85.</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TestWaitNotify</span> <span class="token punctuation">{</span>

    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token class-name">Object</span> obj <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Object</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">int</span> count <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">InterruptedException</span> <span class="token punctuation">{</span>

        <span class="token keyword">new</span> <span class="token class-name">Thread</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token punctuation">{</span>
            <span class="token class-name">SleepUtil</span><span class="token punctuation">.</span><span class="token function">sleepSecond</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">synchronized</span> <span class="token punctuation">(</span>obj<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token class-name">SleepUtil</span><span class="token punctuation">.</span><span class="token function">sleepSecond</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token keyword">if</span> <span class="token punctuation">(</span>count <span class="token operator">&gt;=</span> <span class="token number">5</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                        obj<span class="token punctuation">.</span><span class="token function">notify</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;consumer notify&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                        <span class="token keyword">try</span> <span class="token punctuation">{</span>
                            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;producer wait&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                            obj<span class="token punctuation">.</span><span class="token function">wait</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">InterruptedException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                            e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                        <span class="token punctuation">}</span>
                    <span class="token punctuation">}</span>
                    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;producer: &quot;</span> <span class="token operator">+</span> <span class="token operator">++</span>count<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token string">&quot;\u751F\u4EA7&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


        <span class="token keyword">new</span> <span class="token class-name">Thread</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token punctuation">{</span>
            <span class="token keyword">synchronized</span> <span class="token punctuation">(</span>obj<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token keyword">if</span> <span class="token punctuation">(</span>count <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                        obj<span class="token punctuation">.</span><span class="token function">notify</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;producer notify&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                        <span class="token keyword">try</span> <span class="token punctuation">{</span>
                            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;consumer wait&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                            obj<span class="token punctuation">.</span><span class="token function">wait</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token class-name">InterruptedException</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                            e<span class="token punctuation">.</span><span class="token function">printStackTrace</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                        <span class="token punctuation">}</span>

                    <span class="token punctuation">}</span>
                    <span class="token class-name">SleepUtil</span><span class="token punctuation">.</span><span class="token function">sleepSecond</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;consumer used: &quot;</span> <span class="token operator">+</span> <span class="token operator">--</span>count<span class="token punctuation">)</span><span class="token punctuation">;</span>

                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token string">&quot;\u6D88\u8D39&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6267\u884C\u7ED3\u679C:</p><p><img src="https://tech.nikolazhang.top/2020-05-04-17-01-00.png" alt="2020-05-04-17-01-00" loading="lazy"></p><h2 id="park\u548Cunpark" tabindex="-1"><a class="header-anchor" href="#park\u548Cunpark" aria-hidden="true">#</a> park\u548Cunpark</h2><p>LockSupport\u7684park\u548Cunpark\u662F\u57FA\u4E8EAQS\u5B9E\u73B0\u7684, \u7EBF\u7A0B\u5728\u9ED8\u8BA4\u60C5\u51B5\u4E0B, \u662F\u4E0D\u6301\u6709\u8BB8\u53EF\u8BC1\u7684, \u5F53park\u65B9\u6CD5\u6267\u884C\u7684\u65F6\u5019\u4F1A\u88AB\u963B\u585E. \u6267\u884Cunpark, \u7EBF\u7A0B\u83B7\u53D6\u5230\u8BB8\u53EF, \u56E0\u6B64park\u76F4\u63A5\u8FD4\u56DE. \u4E0B\u9762\u4E5F\u662F\u4E00\u4E2A\u751F\u4EA7\u6D88\u8D39\u7684\u4F8B\u5B50.</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">TestParkUnpark</span> <span class="token punctuation">{</span>

    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token class-name">Thread</span> producer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ProducerThread</span><span class="token punctuation">(</span><span class="token string">&quot;\u751F\u4EA7&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token class-name">Thread</span> consumer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ConsumerThread</span><span class="token punctuation">(</span><span class="token string">&quot;\u6D88\u8D39&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">volatile</span> <span class="token keyword">int</span> count <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        producer<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        consumer<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">class</span> <span class="token class-name">ProducerThread</span> <span class="token keyword">extends</span> <span class="token class-name">Thread</span> <span class="token punctuation">{</span>

        <span class="token keyword">public</span> <span class="token class-name">ProducerThread</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">super</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token annotation punctuation">@Override</span>
        <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token class-name">SleepUtil</span><span class="token punctuation">.</span><span class="token function">sleepSecond</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;producer: &quot;</span> <span class="token operator">+</span> <span class="token operator">++</span>count<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>count <span class="token operator">&gt;=</span> <span class="token number">5</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token class-name">LockSupport</span><span class="token punctuation">.</span><span class="token function">unpark</span><span class="token punctuation">(</span>consumer<span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token class-name">LockSupport</span><span class="token punctuation">.</span><span class="token function">park</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">private</span> <span class="token keyword">static</span> <span class="token keyword">class</span> <span class="token class-name">ConsumerThread</span> <span class="token keyword">extends</span> <span class="token class-name">Thread</span> <span class="token punctuation">{</span>

        <span class="token keyword">public</span> <span class="token class-name">ConsumerThread</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">super</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token annotation punctuation">@Override</span>
        <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">while</span> <span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token class-name">SleepUtil</span><span class="token punctuation">.</span><span class="token function">sleepSecond</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span>count <span class="token operator">&lt;=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    <span class="token class-name">LockSupport</span><span class="token punctuation">.</span><span class="token function">unpark</span><span class="token punctuation">(</span>producer<span class="token punctuation">)</span><span class="token punctuation">;</span>
                    <span class="token class-name">LockSupport</span><span class="token punctuation">.</span><span class="token function">park</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token punctuation">}</span>
                <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;consumer: &quot;</span> <span class="token operator">+</span> <span class="token operator">--</span>count<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD0\u884C\u7ED3\u679C:</p><p><img src="https://tech.nikolazhang.top/2020-05-04-17-39-01.png" alt="2020-05-04-17-39-01" loading="lazy"></p><h2 id="\u6BD4\u8F83" tabindex="-1"><a class="header-anchor" href="#\u6BD4\u8F83" aria-hidden="true">#</a> \u6BD4\u8F83</h2><ol><li>unpark\u53EF\u4EE5\u6307\u5B9A\u9700\u8981\u5524\u9192\u7684\u7EBF\u7A0B, \u800Cnotify\u662F\u968F\u673A\u5524\u9192, notifyAll\u5168\u90E8\u5524\u9192, \u65E0\u6CD5\u5524\u9192\u6307\u5B9A\u7684\u7EBF\u7A0B.</li><li>wait\u548Cnotify\u662F\u9700\u8981\u5BF9\u8C61\u9501\u7684, \u800Cpark unpark\u662F\u57FA\u4E8EAQS\u5B9E\u73B0\u7684</li><li>\u4E24\u8005\u90FD\u6709\u53EF\u80FD\u4EA7\u751F\u6B7B\u9501, \u5C24\u5176\u662F\u6700\u540E\u6267\u884Cwait\u6216\u8005park, \u56E0\u6B64\u5EFA\u8BAE\u6709\u5FAA\u73AF\u5524\u9192\u7684\u673A\u5236.</li></ol>`,14),o=[e];function c(l,i){return s(),a("div",null,o)}const r=n(t,[["render",c],["__file","\u7B49\u5F85\u4E0E\u5524\u9192\u4E0E\u9501.html.vue"]]);export{r as default};
