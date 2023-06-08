const e=JSON.parse('{"key":"v-8388a75a","path":"/posts/linux/ubuntu%E7%B3%BB%E7%BB%9F%E9%85%8D%E7%BD%AE.html","title":"安装一个新的ubuntu系统后应该要做的事","lang":"en-US","frontmatter":{"isOriginal":true,"title":"安装一个新的ubuntu系统后应该要做的事","tag":["ubuntu","部署"],"category":"linux","description":"简单记录一下如何让新的系统更适合自己的开发环境, 以后有什么需要直接按照这篇文章搞","image":"https://tech.nikolazhang.top/2020-01-31-09-43-37.png","date":"2020-01-31T00:00:00.000Z","sticky":false,"timeline":true,"article":true,"star":false,"head":[["meta",{"property":"og:url","content":"https://nikolazhang.github.io/posts/linux/ubuntu%E7%B3%BB%E7%BB%9F%E9%85%8D%E7%BD%AE.html"}],["meta",{"property":"og:title","content":"安装一个新的ubuntu系统后应该要做的事"}],["meta",{"property":"og:description","content":"简单记录一下如何让新的系统更适合自己的开发环境, 以后有什么需要直接按照这篇文章搞"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2023-06-08T15:09:36.000Z"}],["meta",{"property":"article:author","content":"我小叮当、"}],["meta",{"property":"article:tag","content":"ubuntu"}],["meta",{"property":"article:tag","content":"部署"}],["meta",{"property":"article:published_time","content":"2020-01-31T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-06-08T15:09:36.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"安装一个新的ubuntu系统后应该要做的事\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2020-01-31T00:00:00.000Z\\",\\"dateModified\\":\\"2023-06-08T15:09:36.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"我小叮当、\\",\\"url\\":\\"https://nikolazhang.github.io\\"}]}"]]},"headers":[{"level":2,"title":"更换镜像源","slug":"更换镜像源","link":"#更换镜像源","children":[{"level":3,"title":"阿里镜像源","slug":"阿里镜像源","link":"#阿里镜像源","children":[]},{"level":3,"title":"清华源","slug":"清华源","link":"#清华源","children":[]},{"level":3,"title":"中科大源","slug":"中科大源","link":"#中科大源","children":[]},{"level":3,"title":"更换方法","slug":"更换方法","link":"#更换方法","children":[]}]},{"level":2,"title":"安装ssh-server","slug":"安装ssh-server","link":"#安装ssh-server","children":[{"level":3,"title":"使用别名方式登录","slug":"使用别名方式登录","link":"#使用别名方式登录","children":[]}]},{"level":2,"title":"安装jdk配置java home","slug":"安装jdk配置java-home","link":"#安装jdk配置java-home","children":[{"level":3,"title":"配置java home","slug":"配置java-home","link":"#配置java-home","children":[]}]},{"level":2,"title":"其他安装","slug":"其他安装","link":"#其他安装","children":[{"level":3,"title":"安装neovim","slug":"安装neovim","link":"#安装neovim","children":[]},{"level":3,"title":"安装net-tools","slug":"安装net-tools","link":"#安装net-tools","children":[]},{"level":3,"title":"安装git","slug":"安装git","link":"#安装git","children":[]},{"level":3,"title":"安装npm","slug":"安装npm","link":"#安装npm","children":[]}]},{"level":2,"title":"暂时告一段落","slug":"暂时告一段落","link":"#暂时告一段落","children":[]}],"git":{"createdTime":1686236976000,"updatedTime":1686236976000,"contributors":[{"name":"nikola","email":"nikolazhang@163.com","commits":1}]},"readingTime":{"minutes":4.38,"words":1315},"filePathRelative":"posts/linux/ubuntu系统配置.md","localizedDate":"January 31, 2020","excerpt":"<blockquote>\\n<p>注意: 对应ubuntu系统为18.04, 这篇文章会随时更新</p>\\n</blockquote>\\n<h2> 更换镜像源</h2>\\n<p>为了加快镜像下载速度可以将ubuntu镜像源切换阿里或者是其他源.</p>\\n<h3> 阿里镜像源</h3>\\n<div class=\\"language-bash line-numbers-mode\\" data-ext=\\"sh\\"><pre class=\\"language-bash\\"><code>deb http://mirrors.aliyun.com/ubuntu/ bionic main restricted universe multiverse\\ndeb http://mirrors.aliyun.com/ubuntu/ bionic-security main restricted universe multiverse\\ndeb http://mirrors.aliyun.com/ubuntu/ bionic-updates main restricted universe multiverse\\ndeb http://mirrors.aliyun.com/ubuntu/ bionic-proposed main restricted universe multiverse\\ndeb http://mirrors.aliyun.com/ubuntu/ bionic-backports main restricted universe multiverse\\ndeb-src http://mirrors.aliyun.com/ubuntu/ bionic main restricted universe multiverse\\ndeb-src http://mirrors.aliyun.com/ubuntu/ bionic-security main restricted universe multiverse\\ndeb-src http://mirrors.aliyun.com/ubuntu/ bionic-updates main restricted universe multiverse\\ndeb-src http://mirrors.aliyun.com/ubuntu/ bionic-proposed main restricted universe multiverse\\ndeb-src http://mirrors.aliyun.com/ubuntu/ bionic-backports main restricted universe multiverse\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>"}');export{e as data};
