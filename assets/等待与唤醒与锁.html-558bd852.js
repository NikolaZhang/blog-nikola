const t=JSON.parse('{"key":"v-60acbd76","path":"/posts/thread/%E7%AD%89%E5%BE%85%E4%B8%8E%E5%94%A4%E9%86%92%E4%B8%8E%E9%94%81.html","title":"等待与唤醒与锁","lang":"en-US","frontmatter":{"isOriginal":true,"title":"等待与唤醒与锁","tag":["thread","等待与唤醒"],"category":"thread","date":"2020-05-04T00:00:00.000Z","description":"主要介绍了线程的状态和锁","image":"https://tech.nikolazhang.top/2020-05-04-16-45-21.png","sticky":false,"timeline":true,"article":true,"star":false,"head":[["meta",{"property":"og:url","content":"https://nikolazhang.github.io/posts/thread/%E7%AD%89%E5%BE%85%E4%B8%8E%E5%94%A4%E9%86%92%E4%B8%8E%E9%94%81.html"}],["meta",{"property":"og:title","content":"等待与唤醒与锁"}],["meta",{"property":"og:description","content":"主要介绍了线程的状态和锁"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2023-06-08T15:09:36.000Z"}],["meta",{"property":"article:author","content":"我小叮当、"}],["meta",{"property":"article:tag","content":"thread"}],["meta",{"property":"article:tag","content":"等待与唤醒"}],["meta",{"property":"article:published_time","content":"2020-05-04T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-06-08T15:09:36.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"等待与唤醒与锁\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2020-05-04T00:00:00.000Z\\",\\"dateModified\\":\\"2023-06-08T15:09:36.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"我小叮当、\\",\\"url\\":\\"https://nikolazhang.github.io\\"}]}"]]},"headers":[{"level":2,"title":"wait与notify","slug":"wait与notify","link":"#wait与notify","children":[]},{"level":2,"title":"park和unpark","slug":"park和unpark","link":"#park和unpark","children":[]},{"level":2,"title":"比较","slug":"比较","link":"#比较","children":[]}],"git":{"createdTime":1686236976000,"updatedTime":1686236976000,"contributors":[{"name":"nikola","email":"nikolazhang@163.com","commits":1}]},"readingTime":{"minutes":1.99,"words":596},"filePathRelative":"posts/thread/等待与唤醒与锁.md","localizedDate":"May 4, 2020","excerpt":"<blockquote>\\n<p>主要介绍一下wait notify, park unpark 等的使用, 做一些例子供参考</p>\\n</blockquote>\\n<h2> wait与notify</h2>\\n<p>wait和notify是Object类中的native方法, 且不可以重写. 在执行的时候, 依赖一个对象的监视器. 因此我们需要使用同步, 确保其能获取到对象的锁.\\n注意, wait之后不能没有notify, 当然也可以指定等待时间.</p>\\n<p>下面的例子是通过wait和notify实现的生产消费功能, 当生产数量达到一定值的时候唤醒消费线程生产等待, 消费到0唤醒生产线程消费等待.</p>"}');export{t as data};
