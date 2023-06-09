const e=JSON.parse('{"key":"v-0f185e34","path":"/posts/pattern/iterator-pattern.html","title":"iterator pattern","lang":"en-US","frontmatter":{"isOriginal":true,"title":"iterator pattern","date":"2018-12-10T00:00:00.000Z","tag":["iterator pattern"],"category":"技术","description":"迭代器模式的介绍和实现","image":"http://image.nikolazhang.top/wallhaven-nrwq11.jpg","head":[["meta",{"property":"og:url","content":"https://nikolazhang.github.io/posts/pattern/iterator-pattern.html"}],["meta",{"property":"og:title","content":"iterator pattern"}],["meta",{"property":"og:description","content":"迭代器模式的介绍和实现"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2023-06-09T00:57:17.000Z"}],["meta",{"property":"article:author","content":"我小叮当、"}],["meta",{"property":"article:tag","content":"iterator pattern"}],["meta",{"property":"article:published_time","content":"2018-12-10T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-06-09T00:57:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"iterator pattern\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2018-12-10T00:00:00.000Z\\",\\"dateModified\\":\\"2023-06-09T00:57:17.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"我小叮当、\\",\\"url\\":\\"https://nikolazhang.github.io\\"}]}"]]},"headers":[{"level":2,"title":"定义一个迭代器接口及实现","slug":"定义一个迭代器接口及实现","link":"#定义一个迭代器接口及实现","children":[]},{"level":2,"title":"我们统计生产的车是这样的","slug":"我们统计生产的车是这样的","link":"#我们统计生产的车是这样的","children":[]},{"level":2,"title":"开始记录了","slug":"开始记录了","link":"#开始记录了","children":[]},{"level":2,"title":"结果","slug":"结果","link":"#结果","children":[]}],"git":{"createdTime":1686272237000,"updatedTime":1686272237000,"contributors":[{"name":"dewy yr","email":"nikolazhang@163.com","commits":1}]},"readingTime":{"minutes":1.83,"words":550},"filePathRelative":"posts/pattern/iterator-pattern.md","localizedDate":"December 10, 2018","excerpt":"<blockquote>\\n<p>迭代器模式，这是一个很好玩的模式。其实迭代器已经存于集合中了。但是呢，我们可以动手写一个迭代器，并且将其运用在迭代器模式中，而不是在list中。</p>\\n</blockquote>\\n<!--more-->\\n<p>我们的车间每天都在生产车，但是生产多少车，生产的车叫什么名字，每天是不是要进行报表统计？当然了我们有现成的Iterator接口。但是，请你忘记他。我们自己写个这样的接口，想想啊，我们自己的接口想干啥就能干啥。</p>\\n<h2> 定义一个迭代器接口及实现</h2>\\n<div class=\\"language-text line-numbers-mode\\" data-ext=\\"text\\"><pre class=\\"language-text\\"><code>package iterator;\\n\\n/************************************************\\n *@ClassName : iterator\\n *@Description : TODO\\n *@Author : NikolaZhang\\n *@Date : 【2018/12/10 0010 21:04】\\n *@Version : 1.0.0\\n *************************************************/\\n\\npublic interface Iterator {\\n    boolean hasNext();\\n    Object next();\\n}\\n\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>"}');export{e as data};