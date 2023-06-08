const e=JSON.parse('{"key":"v-6ce92ef0","path":"/posts/pattern/facade-pattern.html","title":"facade pattern","lang":"en-US","frontmatter":{"isOriginal":true,"title":"facade pattern","date":"2018-11-30T00:00:00.000Z","tag":["facade pattern"],"category":"技术","description":"门面模式的介绍和实现","image":"http://image.nikolazhang.top/wallhaven-nrwq11.jpg","head":[["meta",{"property":"og:url","content":"https://nikolazhang.github.io/posts/pattern/facade-pattern.html"}],["meta",{"property":"og:title","content":"facade pattern"}],["meta",{"property":"og:description","content":"门面模式的介绍和实现"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2023-06-08T15:09:36.000Z"}],["meta",{"property":"article:author","content":"我小叮当、"}],["meta",{"property":"article:tag","content":"facade pattern"}],["meta",{"property":"article:published_time","content":"2018-11-30T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-06-08T15:09:36.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"facade pattern\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2018-11-30T00:00:00.000Z\\",\\"dateModified\\":\\"2023-06-08T15:09:36.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"我小叮当、\\",\\"url\\":\\"https://nikolazhang.github.io\\"}]}"]]},"headers":[{"level":2,"title":"流程方法接口","slug":"流程方法接口","link":"#流程方法接口","children":[]},{"level":2,"title":"流程实现","slug":"流程实现","link":"#流程实现","children":[]},{"level":2,"title":"调用流程中的步骤","slug":"调用流程中的步骤","link":"#调用流程中的步骤","children":[]},{"level":2,"title":"测试","slug":"测试","link":"#测试","children":[]},{"level":2,"title":"结果","slug":"结果","link":"#结果","children":[]}],"git":{"createdTime":1686236976000,"updatedTime":1686236976000,"contributors":[{"name":"nikola","email":"nikolazhang@163.com","commits":1}]},"readingTime":{"minutes":0.95,"words":284},"filePathRelative":"posts/pattern/facade-pattern.md","localizedDate":"November 30, 2018","excerpt":"<blockquote>\\n<p>门面模式，上级不用知道下级在干什么。下级按照流程处理，反馈给上级结果就好了。</p>\\n</blockquote>\\n<!--more-->\\n<h2> 流程方法接口</h2>\\n<div class=\\"language-text line-numbers-mode\\" data-ext=\\"text\\"><pre class=\\"language-text\\"><code>package facade;\\n\\n/************************************************\\n *@ClassName : MakeCarI\\n *@Description : TODO\\n *@Author : NikolaZhang\\n *@Date : 【2018/11/30 21:42】\\n *@Version : 1.0.0\\n *************************************************/\\n\\npublic interface MakeCarI {\\n    void findMetal();\\n    void designCar();\\n    void createCar();\\n}\\n\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>"}');export{e as data};
