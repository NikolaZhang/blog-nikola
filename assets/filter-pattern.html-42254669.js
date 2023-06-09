const e=JSON.parse('{"key":"v-5405666a","path":"/posts/pattern/filter-pattern.html","title":"filter pattern","lang":"en-US","frontmatter":{"isOriginal":true,"title":"filter pattern","date":"2018-12-15T00:00:00.000Z","tag":["filter pattern"],"category":"技术","description":"过滤器模式的介绍和实现","image":"http://image.nikolazhang.top/wallhaven-nrwq11.jpg","head":[["meta",{"property":"og:url","content":"https://nikolazhang.github.io/posts/pattern/filter-pattern.html"}],["meta",{"property":"og:title","content":"filter pattern"}],["meta",{"property":"og:description","content":"过滤器模式的介绍和实现"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2023-06-09T00:57:17.000Z"}],["meta",{"property":"article:author","content":"我小叮当、"}],["meta",{"property":"article:tag","content":"filter pattern"}],["meta",{"property":"article:published_time","content":"2018-12-15T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-06-09T00:57:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"filter pattern\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2018-12-15T00:00:00.000Z\\",\\"dateModified\\":\\"2023-06-09T00:57:17.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"我小叮当、\\",\\"url\\":\\"https://nikolazhang.github.io\\"}]}"]]},"headers":[{"level":2,"title":"定义车","slug":"定义车","link":"#定义车","children":[]},{"level":2,"title":"过滤器","slug":"过滤器","link":"#过滤器","children":[]},{"level":2,"title":"测试","slug":"测试","link":"#测试","children":[]},{"level":2,"title":"结果","slug":"结果","link":"#结果","children":[]}],"git":{"createdTime":1686272237000,"updatedTime":1686272237000,"contributors":[{"name":"dewy yr","email":"nikolazhang@163.com","commits":1}]},"readingTime":{"minutes":1.09,"words":326},"filePathRelative":"posts/pattern/filter-pattern.md","localizedDate":"December 15, 2018","excerpt":"<blockquote>\\n<p>过滤器模式：这种模式允许开发人员使用不同的标准来过滤一组对象，通过逻辑运算以解耦的方式把它们连接起来。这种类型的设计模式属于结构型模式，它结合多个标准来获得单一标准。【菜鸟】其实就是按条件筛选一组对象出来。</p>\\n</blockquote>\\n<!--more-->\\n<p>我们车厂现在车型很多，现在只想筛选出来bwm的数量。</p>\\n<h2> 定义车</h2>\\n<div class=\\"language-text line-numbers-mode\\" data-ext=\\"text\\"><pre class=\\"language-text\\"><code>package filter;\\n\\n/************************************************\\n *@ClassName : Car\\n *@Description : TODO\\n *@Author : NikolaZhang\\n *@Date : 【2018/12/15 0015 17:21】\\n *@Version : 1.0.0\\n *************************************************/\\n\\npublic class Car {\\n    private String name;\\n\\n    public String getName() {\\n        return name;\\n    }\\n\\n    public Car(String name) {\\n        this.name = name;\\n    }\\n}\\n\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>"}');export{e as data};
