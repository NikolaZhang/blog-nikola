const n=JSON.parse('{"key":"v-45a3f644","path":"/posts/log/property.html","title":"日志框架-logback属性","lang":"en-US","frontmatter":{"isOriginal":true,"title":"日志框架-logback属性","date":"2022-10-15T00:00:00.000Z","tag":["logback","日志"],"category":"日志","description":"日志框架logback的配置介绍","image":"http://image.nikolazhang.top/wallhaven-nrwq11.jpg","sticky":false,"timeline":true,"article":true,"star":false,"head":[["meta",{"property":"og:url","content":"https://nikolazhang.github.io/posts/log/property.html"}],["meta",{"property":"og:title","content":"日志框架-logback属性"}],["meta",{"property":"og:description","content":"日志框架logback的配置介绍"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2023-06-09T00:57:17.000Z"}],["meta",{"property":"article:author","content":"我小叮当、"}],["meta",{"property":"article:tag","content":"logback"}],["meta",{"property":"article:tag","content":"日志"}],["meta",{"property":"article:published_time","content":"2022-10-15T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-06-09T00:57:17.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"日志框架-logback属性\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-10-15T00:00:00.000Z\\",\\"dateModified\\":\\"2023-06-09T00:57:17.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"我小叮当、\\",\\"url\\":\\"https://nikolazhang.github.io\\"}]}"]]},"headers":[{"level":2,"title":"属性定义","slug":"属性定义","link":"#属性定义","children":[{"level":3,"title":"方式1：在配置文件中定义","slug":"方式1-在配置文件中定义","link":"#方式1-在配置文件中定义","children":[]},{"level":3,"title":"方式2：使用系统属性","slug":"方式2-使用系统属性","link":"#方式2-使用系统属性","children":[]},{"level":3,"title":"方式3：外部文件","slug":"方式3-外部文件","link":"#方式3-外部文件","children":[]},{"level":3,"title":"方式4：运行中定义","slug":"方式4-运行中定义","link":"#方式4-运行中定义","children":[]},{"level":3,"title":"方法5：使用JNDI属性","slug":"方法5-使用jndi属性","link":"#方法5-使用jndi属性","children":[]}]},{"level":2,"title":"属性范围","slug":"属性范围","link":"#属性范围","children":[]},{"level":2,"title":"属性的默认值","slug":"属性的默认值","link":"#属性的默认值","children":[]},{"level":2,"title":"属性嵌套","slug":"属性嵌套","link":"#属性嵌套","children":[{"level":3,"title":"值嵌套","slug":"值嵌套","link":"#值嵌套","children":[]},{"level":3,"title":"命名嵌套","slug":"命名嵌套","link":"#命名嵌套","children":[]},{"level":3,"title":"默认值嵌套","slug":"默认值嵌套","link":"#默认值嵌套","children":[]}]},{"level":2,"title":"HOSTNAME & CONTEXT_NAME","slug":"hostname-context-name","link":"#hostname-context-name","children":[]}],"git":{"createdTime":1686272237000,"updatedTime":1686272237000,"contributors":[{"name":"dewy yr","email":"nikolazhang@163.com","commits":1}]},"readingTime":{"minutes":4.17,"words":1251},"filePathRelative":"posts/log/property.md","localizedDate":"October 15, 2022","excerpt":"<h1> 属性</h1>\\n<blockquote>\\n<p>logback配置文件支持定义和替换属性。属性可以通过配置文件定义，也可以通过外部文件、资源定义，甚至是在运行中运算和定义。</p>\\n</blockquote>\\n<h2> 属性定义</h2>\\n<p>1.0.7版本之前通过<code>property</code> 标签定义属性，1.0.7及之后的版本也通过<code>variable</code> 定义属性。两种方式可以互换。使用属性的方式和shell相似，通过<code>${}</code> 包裹定义的属性即可。</p>\\n<h3> 方式1：在配置文件中定义</h3>\\n<div class=\\"language-xml line-numbers-mode\\" data-ext=\\"xml\\"><pre class=\\"language-xml\\"><code><span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>configuration</span><span class=\\"token punctuation\\">&gt;</span></span>\\n\\n  <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>variable</span> <span class=\\"token attr-name\\">name</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>USER_HOME<span class=\\"token punctuation\\">\\"</span></span> <span class=\\"token attr-name\\">value</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>/home/sebastien<span class=\\"token punctuation\\">\\"</span></span> <span class=\\"token punctuation\\">/&gt;</span></span>\\n\\n  <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>appender</span> <span class=\\"token attr-name\\">name</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>FILE<span class=\\"token punctuation\\">\\"</span></span> <span class=\\"token attr-name\\">class</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>ch.qos.logback.core.FileAppender<span class=\\"token punctuation\\">\\"</span></span><span class=\\"token punctuation\\">&gt;</span></span>\\n    <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>file</span><span class=\\"token punctuation\\">&gt;</span></span>${USER_HOME}/myApp.log<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>file</span><span class=\\"token punctuation\\">&gt;</span></span>\\n    <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>encoder</span><span class=\\"token punctuation\\">&gt;</span></span>\\n      <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>pattern</span><span class=\\"token punctuation\\">&gt;</span></span>%msg%n<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>pattern</span><span class=\\"token punctuation\\">&gt;</span></span>\\n    <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>encoder</span><span class=\\"token punctuation\\">&gt;</span></span>\\n  <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>appender</span><span class=\\"token punctuation\\">&gt;</span></span>\\n\\n  <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>root</span> <span class=\\"token attr-name\\">level</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>debug<span class=\\"token punctuation\\">\\"</span></span><span class=\\"token punctuation\\">&gt;</span></span>\\n    <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>appender-ref</span> <span class=\\"token attr-name\\">ref</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>FILE<span class=\\"token punctuation\\">\\"</span></span> <span class=\\"token punctuation\\">/&gt;</span></span>\\n  <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>root</span><span class=\\"token punctuation\\">&gt;</span></span>\\n<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>configuration</span><span class=\\"token punctuation\\">&gt;</span></span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>"}');export{n as data};