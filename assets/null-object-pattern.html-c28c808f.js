const t=JSON.parse('{"key":"v-547cd265","path":"/posts/pattern/null-object-pattern.html","title":"null object pattern","lang":"en-US","frontmatter":{"isOriginal":true,"title":"null object pattern","date":"2018-12-15T00:00:00.000Z","tag":["null object pattern"],"category":"技术","description":"空对象模式的实现和介绍","image":"http://image.nikolazhang.top/wallhaven-nrwq11.jpg","head":[["meta",{"property":"og:url","content":"https://nikolazhang.github.io/posts/pattern/null-object-pattern.html"}],["meta",{"property":"og:title","content":"null object pattern"}],["meta",{"property":"og:description","content":"空对象模式的实现和介绍"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2023-06-08T15:09:36.000Z"}],["meta",{"property":"article:author","content":"我小叮当、"}],["meta",{"property":"article:tag","content":"null object pattern"}],["meta",{"property":"article:published_time","content":"2018-12-15T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-06-08T15:09:36.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"null object pattern\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2018-12-15T00:00:00.000Z\\",\\"dateModified\\":\\"2023-06-08T15:09:36.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"我小叮当、\\",\\"url\\":\\"https://nikolazhang.github.io\\"}]}"]]},"headers":[{"level":2,"title":"抽象对象及对应的继承类。","slug":"抽象对象及对应的继承类。","link":"#抽象对象及对应的继承类。","children":[]},{"level":2,"title":"工厂","slug":"工厂","link":"#工厂","children":[]},{"level":2,"title":"测试","slug":"测试","link":"#测试","children":[]},{"level":2,"title":"结果","slug":"结果","link":"#结果","children":[]}],"git":{"createdTime":1686236976000,"updatedTime":1686236976000,"contributors":[{"name":"nikola","email":"nikolazhang@163.com","commits":1}]},"readingTime":{"minutes":1.54,"words":461},"filePathRelative":"posts/pattern/null-object-pattern.md","localizedDate":"December 15, 2018","excerpt":"<blockquote>\\n<p>空对象模式：一个空对象取代 NULL 对象实例的检查。Null 对象不是检查空值，而是反应一个不做任何动作的关系。这样的 Null 对象也可以在数据不可用的时候提供默认的行为。【菜鸟】</p>\\n</blockquote>\\n<!--more-->\\n<p>当我们的系统中找不到某种车型的时候，直接返回对象肯定是个null。这时候如果你不做什么判断处理直接调用对象中的方法肯定是会不报错的。退一步说直接返回为空，是否有点暴力，太不人性化了。</p>\\n<h2> 抽象对象及对应的继承类。</h2>\\n<p>这里我们搞了一个抽象对象，并用一个RealCar和NullCar继承它。当我们从工厂类中获取到对应的Car时就返回RealCar，获取不到就返回NullCar。</p>"}');export{t as data};
