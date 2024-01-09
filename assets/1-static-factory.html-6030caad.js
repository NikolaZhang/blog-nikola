import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,e as t}from"./app-da30e7cd.js";const e="/assets/image-c5e1063f.png",p={},c=t('<blockquote><p>简单工厂模式是由一个工厂对象决定创建出哪一种产品类的实例。又称为静态工厂模式。简单工厂模式是工厂模式家族中最简单实用的。</p></blockquote><p><img src="'+e+`" alt="Alt text"></p><p>简单工厂模式包含以下主要角色:</p><ul><li>工厂类（SimpleFactory）: 这个类包含创建所有产品的逻辑。。</li><li>抽象产品类（AbstractProduct）：定义某类产品的属性和行为。</li><li>产品类(Product)：抽象产品类的实现，定义具体产品的属性和行为。</li></ul><h2 id="代码实现" tabindex="-1"><a class="header-anchor" href="#代码实现" aria-hidden="true">#</a> 代码实现</h2><h3 id="工厂类" tabindex="-1"><a class="header-anchor" href="#工厂类" aria-hidden="true">#</a> 工厂类</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">SimpleFactory</span> <span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token class-name">AbstractProduct</span> <span class="token function">createProduct</span><span class="token punctuation">(</span><span class="token class-name">String</span> name<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">switch</span> <span class="token punctuation">(</span>name<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">case</span> <span class="token string">&quot;A&quot;</span> <span class="token operator">-&gt;</span> <span class="token keyword">new</span> <span class="token class-name">ProductA</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">case</span> <span class="token string">&quot;B&quot;</span> <span class="token operator">-&gt;</span> <span class="token keyword">new</span> <span class="token class-name">ProductB</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">default</span> <span class="token operator">-&gt;</span> <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">IllegalArgumentException</span><span class="token punctuation">(</span><span class="token string">&quot;Invalid product name&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>


</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>该类通过输入相应的指令，可以创建对应的对象（产品类），产品类需要为<code>AbstractProduct</code>的子类。</p><h3 id="抽象产品类" tabindex="-1"><a class="header-anchor" href="#抽象产品类" aria-hidden="true">#</a> 抽象产品类</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">AbstractProduct</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">abstract</span> <span class="token keyword">void</span> <span class="token function">work</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>定义抽象类<code>AbstractProduct</code>，并定义产品的通用行为<code>work()</code>。</p><h3 id="具体产品类" tabindex="-1"><a class="header-anchor" href="#具体产品类" aria-hidden="true">#</a> 具体产品类</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ProductA</span> <span class="token keyword">extends</span> <span class="token class-name">AbstractProduct</span> <span class="token punctuation">{</span>
    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">work</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;ProductA work&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="开始生产" tabindex="-1"><a class="header-anchor" href="#开始生产" aria-hidden="true">#</a> 开始生产</h3><p>下面我们调用工厂进行生产，并使用产品进行工作。</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Client</span> <span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">AbstractProduct</span> productA <span class="token operator">=</span> <span class="token class-name">SimpleFactory</span><span class="token punctuation">.</span><span class="token function">createProduct</span><span class="token punctuation">(</span><span class="token string">&quot;A&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        productA<span class="token punctuation">.</span><span class="token function">work</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">AbstractProduct</span> productB <span class="token operator">=</span> <span class="token class-name">SimpleFactory</span><span class="token punctuation">.</span><span class="token function">createProduct</span><span class="token punctuation">(</span><span class="token string">&quot;B&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        productB<span class="token punctuation">.</span><span class="token function">work</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结" aria-hidden="true">#</a> 总结</h2><p>简单工厂模式的主要优点:</p><ul><li>封装了对象创建逻辑,将产品类与客户端分离,提高了系统的灵活性。</li><li>便于扩展新的产品类,客户端无需修改代码,只需要添加新的工厂方法即可。</li><li>客户端无需知道所创建的具体产品类,只需要知道参数即可获取产品实例。</li></ul><p>主要缺点是工厂类职责过重,所有产品创建逻辑都在一个类中,不利于系统维护。</p>`,20),o=[c];function l(i,u){return s(),a("div",null,o)}const k=n(p,[["render",l],["__file","1-static-factory.html.vue"]]);export{k as default};