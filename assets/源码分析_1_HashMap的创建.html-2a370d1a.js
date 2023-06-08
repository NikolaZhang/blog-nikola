import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as t,c as p,a as s,b as a,e}from"./app-b5bc9b99.js";const l={},o=s("blockquote",null,[s("p",null,"基于java8介绍一下HashMap的实现. 写着写着就将近400行了, 因此打算这个作为一个系列分批次发出. 顺便还能占用一下篇数.")],-1),c=s("h2",{id:"简介",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#简介","aria-hidden":"true"},"#"),a(" 简介")],-1),i=s("p",null,[s("img",{src:"https://tech.nikolazhang.top/diagram.png",alt:"实现与继承关系"})],-1),r=s("p",null,"HashMap 是基于哈希表的Map接口实现, 它了提供键值对的映射操作, 且键和值允许为空. HashMap 是线程不安全的而且每次操作哈希表后键值对, 存储位置可能发生变化. 因为hashmap在存值的过程中会进行扩容和数据结构转换(链表和树的转换).",-1),u=s("p",null,[a("HashMap 的实例具有两个影响其性能的参数：初始容量和负载因子。 "),s("strong",null,"初始容量"),a("是哈希表中存储桶的数量，初始容量只是创建哈希表时的容量.其值DEFAULT_INITIAL_CAPACITY为16. 最大容量MAXIMUM_CAPACITY为 "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("msup",null,[s("mn",null,"2"),s("mn",null,"30")])]),s("annotation",{encoding:"application/x-tex"},"2^{30}")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.8141em"}}),s("span",{class:"mord"},[s("span",{class:"mord"},"2"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.8141em"}},[s("span",{style:{top:"-3.063em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mtight"},"30")])])])])])])])])])])]),s("strong",null,"负载因子"),a("是在自动增加其哈希表容量的一种判断条件, 当哈希表中的条目数超过负载因子和当前容量的乘积时，哈希表将被重新哈希(即，内部数据结构将被重建). 其默认值DEFAULT_LOAD_FACTOR为0.75. 为了减少重建哈希表负载因此不能设置过低.")],-1),d=e(`<h2 id="实例化一个hashmap" tabindex="-1"><a class="header-anchor" href="#实例化一个hashmap" aria-hidden="true">#</a> 实例化一个HashMap</h2><p>指定初始容量, 强烈建议初始化的时候指定初始容量. 因为HashMap每次进行扩容, 都是比较耗时的, 一开始就指定一个合适的容量, 就可以减少不必要的性能损耗. 至于负载因子, 建议使用默认值, 具体原因也不太清楚. 大概0.75就是一个比较合适的数值吧.</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">HashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Integer</span><span class="token punctuation">&gt;</span></span> map <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token number">8</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="实例化的步骤" tabindex="-1"><a class="header-anchor" href="#实例化的步骤" aria-hidden="true">#</a> 实例化的步骤</h3><p>HashMap的构造方法如下, 我只选取了传入初始容量和负载因子的.其他的可以自己参照源码进行分析.</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token class-name">HashMap</span><span class="token punctuation">(</span><span class="token keyword">int</span> initialCapacity<span class="token punctuation">,</span> <span class="token keyword">float</span> loadFactor<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>initialCapacity <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span>
        <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">IllegalArgumentException</span><span class="token punctuation">(</span><span class="token string">&quot;Illegal initial capacity: &quot;</span> <span class="token operator">+</span> initialCapacity<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>initialCapacity <span class="token operator">&gt;</span> <span class="token constant">MAXIMUM_CAPACITY</span><span class="token punctuation">)</span>
        initialCapacity <span class="token operator">=</span> <span class="token constant">MAXIMUM_CAPACITY</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>loadFactor <span class="token operator">&lt;=</span> <span class="token number">0</span> <span class="token operator">||</span> <span class="token class-name">Float</span><span class="token punctuation">.</span><span class="token function">isNaN</span><span class="token punctuation">(</span>loadFactor<span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">IllegalArgumentException</span><span class="token punctuation">(</span><span class="token string">&quot;Illegal load factor: &quot;</span> <span class="token operator">+</span> loadFactor<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>loadFactor <span class="token operator">=</span> loadFactor<span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>threshold <span class="token operator">=</span> <span class="token function">tableSizeFor</span><span class="token punctuation">(</span>initialCapacity<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>实例化一个HashMap主要进行了下面的操作</p><ol><li>校验初始容量是否小于0或者大于最大容量, 如果小于0则抛出参数异常, 如果大于最大容量则使用最大容量作为初始容量.</li><li>校验负载因子, 如果小于等于0或者不是浮点数则抛出参数异常. 否则初始化负载因子为设定值</li><li>将容量转换到2的幂次. 暂且记住这个步骤, 之后你会发现会有很多神奇的操作.</li></ol><p>下面详细解释一下容量是怎么扩展到2的幂次的.</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">static</span> <span class="token keyword">final</span> <span class="token keyword">int</span> <span class="token function">tableSizeFor</span><span class="token punctuation">(</span><span class="token keyword">int</span> cap<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">int</span> n <span class="token operator">=</span> cap <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
    n <span class="token operator">|=</span> n <span class="token operator">&gt;&gt;&gt;</span> <span class="token number">1</span><span class="token punctuation">;</span>
    n <span class="token operator">|=</span> n <span class="token operator">&gt;&gt;&gt;</span> <span class="token number">2</span><span class="token punctuation">;</span>
    n <span class="token operator">|=</span> n <span class="token operator">&gt;&gt;&gt;</span> <span class="token number">4</span><span class="token punctuation">;</span>
    n <span class="token operator">|=</span> n <span class="token operator">&gt;&gt;&gt;</span> <span class="token number">8</span><span class="token punctuation">;</span>
    n <span class="token operator">|=</span> n <span class="token operator">&gt;&gt;&gt;</span> <span class="token number">16</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token punctuation">(</span>n <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token operator">?</span> <span class="token number">1</span> <span class="token operator">:</span> <span class="token punctuation">(</span>n <span class="token operator">&gt;=</span> <span class="token constant">MAXIMUM_CAPACITY</span><span class="token punctuation">)</span> <span class="token operator">?</span> <span class="token constant">MAXIMUM_CAPACITY</span> <span class="token operator">:</span> n <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果你之前没怎么使用过移位运算符, 想必看到这段代码, 你一定是懵逼的. 这段代码获取2的幂次很巧妙, 但是在2进制的世界却又平平无奇. 首先为何要先进行减一运算: <code>int n = cap - 1;</code>, 这个我们分析完移位后再说.</p><p>n取值为0到MAXIMUM_CAPACITY, 则:</p><ol><li>当n高位右移1位后的结果与n进行或运算, 则有2个高位为1, 结果重新赋值为n.</li><li>上一步的n右移2位后的结果再与n进行或运算, 重新赋值为n, 此时n中含有4个高位为1.</li><li>移位4后结果有8个高位为1, 移位8后结果有16个高位为1, 移位16后结果有32个高位为1.</li></ol><p>你可以参照下图进行理解: <img src="https://tech.nikolazhang.top/移位运算.png" alt="解析移位运算"></p><p>高位如此, 当初始的n低位中含有1时, 最终的结果必然是2的幂次减1. 最后只需要将结果n加1就可以获得2的幂次结果了.</p>`,15),k=s("p",null,[a("你或许会疑惑如果高位很高呢, 比如2的100次幂级, 移位16后肯定就不是2的幂次? 注意我们的输入是int类型, 最大值也不过 "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("msup",null,[s("mn",null,"2"),s("mn",null,"31")])]),s("annotation",{encoding:"application/x-tex"},"2^{31}")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.8141em"}}),s("span",{class:"mord"},[s("span",{class:"mord"},"2"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.8141em"}},[s("span",{style:{top:"-3.063em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mtight"},"31")])])])])])])])])])])]),a("-1也就是31个1. HashMap的存储上限是1 << 30, 也就是"),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("msup",null,[s("mn",null,"2"),s("mn",null,"30")])]),s("annotation",{encoding:"application/x-tex"},"2^{30}")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.8141em"}}),s("span",{class:"mord"},[s("span",{class:"mord"},"2"),s("span",{class:"msupsub"},[s("span",{class:"vlist-t"},[s("span",{class:"vlist-r"},[s("span",{class:"vlist",style:{height:"0.8141em"}},[s("span",{style:{top:"-3.063em","margin-right":"0.05em"}},[s("span",{class:"pstrut",style:{height:"2.7em"}}),s("span",{class:"sizing reset-size6 size3 mtight"},[s("span",{class:"mord mtight"},[s("span",{class:"mord mtight"},"30")])])])])])])])])])])]),a(". 因此"),s("code",null,"n |= n >>> 16"),a("这一步之后n中所有的位均为1.")],-1),m=s("p",null,[a("现在我们解答一开始进行"),s("code",null,"cap - 1"),a("的原因: 如果我们一开始输入4, 扩容之后, 结果应该为8, 可是4已经是2的幂次了. 这样就导致扩充了额外的空间. 进行减一操作正好避免了容量额外扩充导致空间浪费的出现.")],-1),h=s("p",null,"最后你尝试可以分析一下n为0时的情形.",-1),g=s("h2",{id:"end",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#end","aria-hidden":"true"},"#"),a(" end")],-1),v=s("p",null,"下一篇文章, 继续介绍HashMap的put方法. 敬请期待~",-1),_=[o,c,i,r,u,d,k,m,h,g,v];function b(M,w){return t(),p("div",null,_)}const A=n(l,[["render",b],["__file","源码分析_1_HashMap的创建.html.vue"]]);export{A as default};
