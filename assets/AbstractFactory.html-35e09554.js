const e=JSON.parse('{"key":"v-01693e05","path":"/posts/pattern/AbstractFactory.html","title":"工厂模式②","lang":"en-US","frontmatter":{"isOriginal":true,"title":"工厂模式②","date":"2018-11-27T00:00:00.000Z","tag":["factory pattern"],"category":"patterns","description":"抽象工厂模式","image":"http://image.nikolazhang.top/wallhaven-nrwq11.jpg","head":[["meta",{"property":"og:url","content":"https://nikolazhang.github.io/posts/pattern/AbstractFactory.html"}],["meta",{"property":"og:title","content":"工厂模式②"}],["meta",{"property":"og:description","content":"抽象工厂模式"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2023-06-09T00:57:17.000Z"}],["meta",{"property":"article:author","content":"我小叮当、"}],["meta",{"property":"article:tag","content":"factory pattern"}],["meta",{"property":"article:published_time","content":"2018-11-27T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-06-09T00:57:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"工厂模式②\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2018-11-27T00:00:00.000Z\\",\\"dateModified\\":\\"2023-06-09T00:57:17.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"我小叮当、\\",\\"url\\":\\"https://nikolazhang.github.io\\"}]}"]]},"headers":[{"level":2,"title":"抽象工厂模式","slug":"抽象工厂模式","link":"#抽象工厂模式","children":[{"level":3,"title":"创建车与人的接口，及其实现","slug":"创建车与人的接口-及其实现","link":"#创建车与人的接口-及其实现","children":[]},{"level":3,"title":"创建获取不同种类实例的抽象类","slug":"创建获取不同种类实例的抽象类","link":"#创建获取不同种类实例的抽象类","children":[]},{"level":3,"title":"实现上面的抽象类","slug":"实现上面的抽象类","link":"#实现上面的抽象类","children":[]},{"level":3,"title":"测试","slug":"测试","link":"#测试","children":[]}]}],"git":{"createdTime":1686272237000,"updatedTime":1686272237000,"contributors":[{"name":"dewy yr","email":"nikolazhang@163.com","commits":1}]},"readingTime":{"minutes":1.61,"words":483},"filePathRelative":"posts/pattern/AbstractFactory.md","localizedDate":"November 27, 2018","excerpt":"<h2> 抽象工厂模式</h2>\\n<blockquote>\\n<p>抽象工厂提供了一系列相关或相互依赖对象的接口，而无须指定他们具体的类。</p>\\n</blockquote>\\n<!--more-->\\n<p>我们有两个不同类的东西，一个是车，一个是人；车分宝马车、奔驰车，人分男人、女人。我们想要通过一个工厂去获取生成男人女人宝马奔驰的对象，并调用其下的方法。</p>\\n<h3> 创建车与人的接口，及其实现</h3>\\n<div class=\\"language-text line-numbers-mode\\" data-ext=\\"text\\"><pre class=\\"language-text\\"><code>package factory.abstractfactory;\\n\\n/************************************************\\n *@ClassName : Car\\n *@Description : TODO\\n *@Author : NikolaZhang\\n *@Date : 【2018/11/27 20:46】\\n *@Version : 1.0.0\\n *************************************************/\\n\\npublic interface Car {\\n    void run();\\n}\\n\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>"}');export{e as data};