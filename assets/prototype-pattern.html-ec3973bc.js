const e=JSON.parse('{"key":"v-144938b0","path":"/posts/pattern/prototype-pattern.html","title":"prototype pattern","lang":"en-US","frontmatter":{"isOriginal":true,"title":"prototype pattern","date":"2018-12-14T00:00:00.000Z","tag":["prototype pattern"],"category":"技术","description":"原型模式的实现方法","image":"http://image.nikolazhang.top/wallhaven-nrwq11.jpg","head":[["meta",{"property":"og:url","content":"https://nikolazhang.github.io/posts/pattern/prototype-pattern.html"}],["meta",{"property":"og:title","content":"prototype pattern"}],["meta",{"property":"og:description","content":"原型模式的实现方法"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2023-06-08T15:09:36.000Z"}],["meta",{"property":"article:author","content":"我小叮当、"}],["meta",{"property":"article:tag","content":"prototype pattern"}],["meta",{"property":"article:published_time","content":"2018-12-14T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-06-08T15:09:36.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"prototype pattern\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2018-12-14T00:00:00.000Z\\",\\"dateModified\\":\\"2023-06-08T15:09:36.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"我小叮当、\\",\\"url\\":\\"https://nikolazhang.github.io\\"}]}"]]},"headers":[{"level":2,"title":"","slug":"","link":"#","children":[]},{"level":2,"title":"测试","slug":"测试","link":"#测试","children":[]},{"level":2,"title":"结果","slug":"结果","link":"#结果","children":[]},{"level":2,"title":"深拷贝","slug":"深拷贝","link":"#深拷贝","children":[]},{"level":2,"title":"测试深拷贝","slug":"测试深拷贝","link":"#测试深拷贝","children":[]},{"level":2,"title":"结果","slug":"结果-1","link":"#结果-1","children":[]}],"git":{"createdTime":1686236976000,"updatedTime":1686236976000,"contributors":[{"name":"nikola","email":"nikolazhang@163.com","commits":1}]},"readingTime":{"minutes":1.93,"words":580},"filePathRelative":"posts/pattern/prototype-pattern.md","localizedDate":"December 14, 2018","excerpt":"<blockquote>\\n<p>原型模式，估计这是最简单的模式了。这个模式可以用于创建重复的对象，同时又能保证性能。这种类型的设计模式属于创建型模式，它提供了一种创建对象的最佳方式。额外说一句，这里的创建对象只是浅拷贝的。</p>\\n</blockquote>\\n<!--more-->\\n<p>没什么好说的，直接看程序吧。要实现对象的浅拷贝，需要让待拷贝对象实现Cloneable接口。</p>\\n<h2> </h2>\\n<div class=\\"language-text line-numbers-mode\\" data-ext=\\"text\\"><pre class=\\"language-text\\"><code>package prototype;\\n\\n\\npublic class Model implements Cloneable {\\n\\tprivate String name;\\n\\tprivate String price;\\n    private A a = new A(\\"a\\");\\n\\n\\n    public String getName() {\\n        return name;\\n    }\\n\\n    public String getPrice() {\\n        return price;\\n    }\\n\\n    public A getA() {\\n        return a;\\n    }\\n\\n    protected Object clone() {\\n\\t\\ttry {\\n\\t\\t\\treturn super.clone();\\n\\t\\t} catch (CloneNotSupportedException e) {\\n\\t\\t\\te.printStackTrace();\\n\\t\\t\\treturn null;\\n\\t\\t}\\n\\t}\\n\\n\\tpublic Model(String name, String price) {\\n\\t\\tsuper();\\n\\t\\tthis.name = name;\\n\\t\\tthis.price = price;\\n\\t}\\n\\n\\n}\\n\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>"}');export{e as data};
