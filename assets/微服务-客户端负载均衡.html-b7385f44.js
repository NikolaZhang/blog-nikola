const e=JSON.parse('{"key":"v-4c631de2","path":"/posts/springcloud/%E5%BE%AE%E6%9C%8D%E5%8A%A1-%E5%AE%A2%E6%88%B7%E7%AB%AF%E8%B4%9F%E8%BD%BD%E5%9D%87%E8%A1%A1.html","title":"学习笔记2-客户端负载均衡","lang":"en-US","frontmatter":{"isOriginal":true,"title":"学习笔记2-客户端负载均衡","date":"2018-12-04T00:00:00.000Z","tag":["ribbon"],"category":"技术","description":"客户端负载均衡的实现方式","image":"http://image.nikolazhang.top/wallhaven-nrwq11.jpg","sticky":false,"timeline":true,"article":true,"star":false,"head":[["meta",{"property":"og:url","content":"https://nikolazhang.github.io/posts/springcloud/%E5%BE%AE%E6%9C%8D%E5%8A%A1-%E5%AE%A2%E6%88%B7%E7%AB%AF%E8%B4%9F%E8%BD%BD%E5%9D%87%E8%A1%A1.html"}],["meta",{"property":"og:title","content":"学习笔记2-客户端负载均衡"}],["meta",{"property":"og:description","content":"客户端负载均衡的实现方式"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2023-06-08T15:09:36.000Z"}],["meta",{"property":"article:author","content":"我小叮当、"}],["meta",{"property":"article:tag","content":"ribbon"}],["meta",{"property":"article:published_time","content":"2018-12-04T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-06-08T15:09:36.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"学习笔记2-客户端负载均衡\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2018-12-04T00:00:00.000Z\\",\\"dateModified\\":\\"2023-06-08T15:09:36.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"我小叮当、\\",\\"url\\":\\"https://nikolazhang.github.io\\"}]}"]]},"headers":[{"level":2,"title":"2.1 客户端负载均衡","slug":"_2-1-客户端负载均衡","link":"#_2-1-客户端负载均衡","children":[]},{"level":2,"title":"2.2 RestTemplate","slug":"_2-2-resttemplate","link":"#_2-2-resttemplate","children":[{"level":3,"title":"2.2.1 GET请求","slug":"_2-2-1-get请求","link":"#_2-2-1-get请求","children":[]},{"level":3,"title":"2.2.2 POST请求","slug":"_2-2-2-post请求","link":"#_2-2-2-post请求","children":[]},{"level":3,"title":"2.2.3 PUT请求","slug":"_2-2-3-put请求","link":"#_2-2-3-put请求","children":[]},{"level":3,"title":"2.2.4 DELETE","slug":"_2-2-4-delete","link":"#_2-2-4-delete","children":[]}]},{"level":2,"title":"2.3 参数配置","slug":"_2-3-参数配置","link":"#_2-3-参数配置","children":[]},{"level":2,"title":"2.4 重试机制","slug":"_2-4-重试机制","link":"#_2-4-重试机制","children":[]}],"git":{"createdTime":1686236976000,"updatedTime":1686236976000,"contributors":[{"name":"nikola","email":"nikolazhang@163.com","commits":1}]},"readingTime":{"minutes":3.52,"words":1055},"filePathRelative":"posts/springcloud/微服务-客户端负载均衡.md","localizedDate":"December 4, 2018","excerpt":"<blockquote>\\n<p>继续服务治理，开始客户端负载均衡的学习。由于之前的工程中已经将负载均衡整合到了工程所以。程序上没有大的变动。只是增加了配置信息，及验证。ps:学习资源来自spring+cloud微服务实战</p>\\n</blockquote>\\n<!--more-->\\n<h1> 2 客户端负载均衡 Spring Cloud Ribbon</h1>\\n<blockquote>\\n<p>spring cloud ribbon 是基于HTTP和TCP的客户端负载均衡工具，基于Netflix的Ribbon实现。</p>\\n</blockquote>\\n<h2> 2.1 客户端负载均衡</h2>\\n<p><strong>服务端负载均衡与客户端负载均衡</strong></p>"}');export{e as data};
