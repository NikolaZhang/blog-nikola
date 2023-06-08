import{_ as a}from"./plugin-vue_export-helper-c27b6911.js";import{r as n,o as d,c as t,a as e,b as o,d as l,e as c}from"./app-b5bc9b99.js";const s={},r=e("blockquote",null,[e("p",null,"http协议是无状态的, 不同请求之前无法建立联系. 即服务器无法判断请求是否来自同一客户端. 要建立联系就需要增加状态标识, 如果请求标识相同则表明两个请求来自同一客户端. Cookie 就是这样一个用来标识每一次请求的状态位。")],-1),k={href:"https://cloud.tencent.com/document/product/214/2737",target:"_blank",rel:"noopener noreferrer"},p=c(`<h2 id="cookie类型" tabindex="-1"><a class="header-anchor" href="#cookie类型" aria-hidden="true">#</a> Cookie类型</h2><p>Cookie总时由用户客户端进行保存的（一般是浏览器），按其存储位置可分为：内存式Cookie和硬盘式Cookie。</p><ul><li>内存式Cookie存储在内存中，浏览器关闭后就会消失，由于其存储时间较短，因此也被称为非持久Cookie或会话Cookie。</li><li>硬盘式Cookie保存在硬盘中，其不会随浏览器的关闭而消失，除非用户手工清理或到了过期时间。由于硬盘式Cookie存储时间是长期的，因此也被称为持久Cookie。</li></ul><h2 id="cookie-的工作原理" tabindex="-1"><a class="header-anchor" href="#cookie-的工作原理" aria-hidden="true">#</a> Cookie 的工作原理</h2><ol><li>当客户端首次向腾讯云的服务器发起请求时，HTTP 请求头如下</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Accept:text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,/;q=0.8
Accept-Encoding:gzip, deflate, sdch
Accept-Language:en,zh-CN;q=0.8,zh;q=0.6
Connection:keep-alive
Host:cloud.tencent.com
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>请求到达腾讯云的服务器以后，腾讯云的服务器生成响应，并在响应的头部写入 Cookie 信息</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Set-Cookie:BD_HOME=1; path=/ 
Set-Cookie:__bsi=14934756243064632384_00_0_I_R_174_0303_C02F_N_I_I_0; expires=Thu, 19-Nov-15 14:14:50 GMT; domain=www.qcloud; path=/
Set-Cookie:BDSVRTM=172; path=/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>腾讯云的服务器向客户端返回响应结果。</li><li>当客户端接收到响应头以后，会读取 Cookie 信息并写入本地进行管理。</li><li>再次向服务器发起请求时，客户端通过发送一个带有 Cookie: name=value; name2=value2 的 HTTP 请求头将之前存在本地的 Cookie 一起发送过去。请求的头部信息为：</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Accept:text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,/;q=0.8
Accept-Encoding:gzip, deflate, sdch
Accept-Language:en,zh-CN;q=0.8,zh;q=0.6
Connection:keep-alive
Cookie:BD_HOME=1; BDSVRTM=0; BD_LAST_QID=1507196234531915875957057
Host:cloud.tencent.com
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="6"><li>服务器接收到请求以后，从请求头中获得 Cookie 信息，分析 Cookie 数据后向客户端返回响应。</li></ol><p><img src="https://tech.nikolazhang.top/2020-04-04-19-53-28.png" alt="2020-04-04-19-53-28"></p><p>如上所述是 Cookie 在客户端和服务器之间进行传递信息的基本过程。</p><h2 id="cookie-的生命周期" tabindex="-1"><a class="header-anchor" href="#cookie-的生命周期" aria-hidden="true">#</a> Cookie 的生命周期</h2><p>Cookie 是有生命周期的。一旦到了 Cookie 的失效日期，客户端的 Cookie 就会被删除。 服务器在创建 Cookie 时可以控制一个 Cookie 可以在客户端“存活”多长时间。</p><p>在以下几种情况下，Cookie 都会结束它自己的生命周期：</p><ol><li><code>未指定过期时间</code>的 Cookie：当服务器创建一个 Cookie 的时候没有指定对应的过期时间时，客户端会将这类 Cookie 写入浏览器开辟的一块内存中，当关闭浏览器以后，这块内存也就被释放了，对应的 Cookie 也就是结束了它的生命。</li><li><code>指定过期时间</code>的 Cookie。当服务器创建一个 Cookie 的时候指定了对应的过期时间时，当到达了过期时间时，对应的 Cookie 就会被删除。</li><li>浏览器中的 Cookie <code>数量达到了限制</code>时。浏览器会按照某种策略删除一些旧的 Cookie，腾出空间来创建新的 Cookie。</li><li>人为删除 Cookie。</li></ol><h2 id="cookie-管理" tabindex="-1"><a class="header-anchor" href="#cookie-管理" aria-hidden="true">#</a> Cookie 管理</h2><p>服务器端创建一个 Cookie 时，一般都会指定<code>domain</code>, <code>path</code>. 这两个选项决定了创建的 Cookie 属于哪个域名下的哪个位置。</p><h3 id="domain" tabindex="-1"><a class="header-anchor" href="#domain" aria-hidden="true">#</a> domain</h3><p>默认情况下，domain 会被设置为创建该 Cookie 的页面所在的域名。 当客户端再次给相同域名发送请求时，Cookie 会一起被发送至服务器。当 Cookie 的 domain 选项被设置为一个一级域名时，此域名下的所有二级都将同时拥有相同的 Cookie，<code>经常会出现顶级域名和二级域名的 Cookie 冲突问题</code>。</p><p>我们在发送请求时，浏览器会把 domain 的值与请求的域名做一个<code>尾部比较</code>（即从字符串的尾部开始比较），并将匹配的 Cookie 发送至服务器。</p><p>当我们未指定 domain 时，默认的 domain 为访问地址的域名。如果是顶级域名访问，那么设置的 Cookie 也可以被其他二级域名所共享，因此登录等操作一般都在顶级域名下进行操作。 二级域名可以读取设置了 domain 为顶级域名或者自身的 Cookie，但是不能读取其他二级域名 domain 的 Cookie，因此想要 Cookie 在多个二级域名中共享的时候，需要设置 domain 为顶级域名，这样就可以在所有二级域名里面使用该 Cookie。这里需要注意的是顶级域名只能获取到 domain 设置为顶级域名的 Cookie，无法获取 domain 设置为二级域名的 Cookie。</p><h3 id="path" tabindex="-1"><a class="header-anchor" href="#path" aria-hidden="true">#</a> path</h3><p>path 选项规定，客户端请求的 URL 只有在存在 path 指定的路径时，才会发送 Cookie 消息头，它决定了客户端发送 Cookie 到服务器端的匹配规则。 通常是将 path 选项的值与请求的 URL <code>从头开始逐字符比较</code>，如果字符匹配，则发送 Cookie 消息头。需要注意的是，<code>只有在 domain 选项满足之后才会对 path 属性进行比较</code>。path 属性的默认值是发送 Set-Cookie 消息头所对应的 URL 中的 path 部分。</p><p>以上从浏览器本身的限制和生成 Cookie 时的选项对 Cookie 的管理进行了简单的总结。接下来就通过一些简单的代码来演示如何创建和获取 Cookie。</p>`,26);function h(C,m){const i=n("ExternalLinkIcon");return d(),t("div",null,[r,e("p",null,[o("原文链接: "),e("a",k,[o("Cookie 原理说明"),l(i)])]),p])}const _=a(s,[["render",h],["__file","cookie.html.vue"]]);export{_ as default};
