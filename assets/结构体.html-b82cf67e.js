const e=JSON.parse('{"key":"v-623b2286","path":"/posts/golang/%E7%BB%93%E6%9E%84%E4%BD%93.html","title":"golang 结构体解析","lang":"en-US","frontmatter":{"isOriginal":true,"title":"golang 结构体解析","mathjax":true,"tag":["golang","结构体"],"category":"go","date":"2020-07-05T00:00:00.000Z","description":"golang语法 结构体的介绍","image":"https://image.nikolazhang.top/leimumolisa.jpg","sticky":false,"timeline":true,"article":true,"star":false,"head":[["meta",{"property":"og:url","content":"https://nikolazhang.github.io/posts/golang/%E7%BB%93%E6%9E%84%E4%BD%93.html"}],["meta",{"property":"og:title","content":"golang 结构体解析"}],["meta",{"property":"og:description","content":"golang语法 结构体的介绍"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2023-06-08T15:09:36.000Z"}],["meta",{"property":"article:author","content":"我小叮当、"}],["meta",{"property":"article:tag","content":"golang"}],["meta",{"property":"article:tag","content":"结构体"}],["meta",{"property":"article:published_time","content":"2020-07-05T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-06-08T15:09:36.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"golang 结构体解析\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2020-07-05T00:00:00.000Z\\",\\"dateModified\\":\\"2023-06-08T15:09:36.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"我小叮当、\\",\\"url\\":\\"https://nikolazhang.github.io\\"}]}"]]},"headers":[{"level":2,"title":"长什么样","slug":"长什么样","link":"#长什么样","children":[]},{"level":2,"title":"绑定方法","slug":"绑定方法","link":"#绑定方法","children":[]},{"level":2,"title":"构造器","slug":"构造器","link":"#构造器","children":[]},{"level":2,"title":"组合","slug":"组合","link":"#组合","children":[]},{"level":2,"title":"传值还是传指针","slug":"传值还是传指针","link":"#传值还是传指针","children":[]}],"git":{"createdTime":1686236976000,"updatedTime":1686236976000,"contributors":[{"name":"nikola","email":"nikolazhang@163.com","commits":1}]},"readingTime":{"minutes":2.92,"words":876},"filePathRelative":"posts/golang/结构体.md","localizedDate":"July 5, 2020","excerpt":"<blockquote>\\n<p>刚开始接触go, 直观的感觉就是--好奇葩的语言. 对于面向对象的中毒用户, 又一时难以接受里面的一些做法. go不是一门面向对象编程的语言, 没有对象和继承的概念, 也没有多态与重载. go表示一个对象的概念是通过构造体实现的. 这一篇文章我们就详细看看构造体的使用.</p>\\n</blockquote>\\n<h2> 长什么样</h2>\\n<p>go语言的设计很有c的风格, 包括这个结构体的概念.\\n通过如下方式可以定义一个构造体:</p>\\n<div class=\\"language-go line-numbers-mode\\" data-ext=\\"go\\"><pre class=\\"language-go\\"><code><span class=\\"token keyword\\">type</span> Person <span class=\\"token keyword\\">struct</span> <span class=\\"token punctuation\\">{</span>\\n    Name <span class=\\"token builtin\\">string</span>\\n    Age <span class=\\"token builtin\\">int</span>\\n<span class=\\"token punctuation\\">}</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>"}');export{e as data};
