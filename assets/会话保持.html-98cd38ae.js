import{_ as a}from"./plugin-vue_export-helper-c27b6911.js";import{r as n,o as s,c,a as e,b as o,d,e as l}from"./app-b5bc9b99.js";const r={},t=e("blockquote",null,[e("p",null,"会话保持(粘滞会话)是指在负载均衡器上的一种机制，可以识别客户端与服务器之间交互过程的关连性。在进行负载均衡的同时还保证一系列相关连的访问请求会保持分配到一台服务器上｡")],-1),h={href:"https://cloud.tencent.com/document/product/214/2736",target:"_blank",rel:"noopener noreferrer"},p=l('<h2 id="连接与会话" tabindex="-1"><a class="header-anchor" href="#连接与会话" aria-hidden="true">#</a> 连接与会话</h2><p>从简单的角度来看，<code>需要依靠登录就是会话，不需要依靠登录就是连接</code>。</p><p>对于同一个连接中的数据包，负载均衡会将其进行 NAT 转换后，转发至后端固定的服务器进行处理。负载均衡系统内部会专门有一张表来记录这些连接的状况，包括：[源 IP：端口]、[目的 IP：端口]、[服务器 IP：端口]、空闲超时时间（Idle Timeout）等等。由于负载均衡内部记录连接状态的这张表需要消耗系统的内存资源，因此这张表不可能无限大，所有传统厂商都会有一定的限制。这张表的大小一般称之为最大并发连接数，也就是系统同时能够容纳的连接数量。负载均衡的当前连接状态表项中，设计了一个空闲超时时间（Idle Timeout）的参数。当该连接在 Idle Timeout 内无流量通过时，负载均衡会自动删除该连接条目，释放系统资源。</p><p>删除连接后，客户端的请求将无法保证继续发往同一个后端服务器，需要遵循负载均衡器的流量分发策略。 在某些要求登录状态的情境下，要求客户端和服务器之间保持一个会话（Session）以记录客户端的各种信息。</p><p>因此会话保持机制的意义就在于，确保在合适的情境下，将来自相同客户端的请求转发至后端相同的服务器进行处理。换句话说，就是将客户端与服务器之间建立的多个连接，都发送到相同的服务器进行处理。如果在客户端和服务器之间部署了负载均衡设备，很有可能这多个连接会被转发至不同的服务器进行处理。如果服务器之间没有会话信息的同步机制，会导致其他服务器无法识别用户身份，造成用户在和应用系统发生交互时出现异常。</p><p>例如，在大多数电子商务的应用系统或者需要进行用户身份认证的在线系统中，一个客户与服务器经常经过好几次的交互过程才能完成一笔交易或者是一个请求的完成。由于这几次交互过程是密切相关的，服务器在进行这些交互过程的某一个交互步骤时往往需要了解上一次或上几次的交互过程处理结果，这就要求所有这些相关的交互过程都由一台服务器完成，而不能被负载均衡器分散到不同的服务器上｡否则可能出现异常情景：</p><ul><li>客户端输入了正确的用户名和口令，但却反复跳到登录页面。</li><li>用户输入了正确的验证码，但是总提示验证码错误。</li><li>客户端放入购物车的物品丢失等。</li></ul><p>负载均衡希望将来自客户端的连接、请求均衡的转发至后端的多台服务器，以避免单台服务器负载过高；而<code>会话保持机制却要求将某些请求转发至同一台服务器进行处理</code>。因此，在实际的部署环境中，我们要根据应用环境的特点，选择适当的会话保持机制。</p><h2 id="会话保持的分类" tabindex="-1"><a class="header-anchor" href="#会话保持的分类" aria-hidden="true">#</a> 会话保持的分类</h2><h3 id="基于源地址的会话保持-四层会话保持" tabindex="-1"><a class="header-anchor" href="#基于源地址的会话保持-四层会话保持" aria-hidden="true">#</a> 基于源地址的会话保持（四层会话保持）</h3><p>基于源地址的会话保持（也称作基于 IP 的会话保持、简单会话保持）是指负载均衡器在作负载均衡时<code>根据访问请求的源地址作为判断关连会话的依据</code>。对来自同一 IP 地址的所有访问请求在作负载均衡时都会被保持到一台服务器上去｡</p><p>简单会话保持中一个很重要的参数就是<code>连接超时值</code>，负载均衡器会为每一个处于保持状态中的会话设定一个时间值。若一个会话从上一次完成到下次再来之间的间隔时间小于超时值时，负载均衡器将会将新的连接进行会话保持；但如果这个间隔大于该超时值，负载均衡器会将新来的连接认为是新的会话然后进行负载平衡。</p><p>简单会话保持实现简单，只需要根据数据包三､四层的信息就可以实现，效率比较高｡</p><p><img src="https://main.qcloudimg.com/raw/3134cb8bc70377014a387bd72a7499cf.png" alt="nginx配置简单会话保持"></p><h4 id="缺点" tabindex="-1"><a class="header-anchor" href="#缺点" aria-hidden="true">#</a> 缺点</h4><ol><li>当多个客户端通过代理或地址转换的方式访问服务器时，由于来源地址一样，请求都被分配到同一台服务器上，会导致服务器之间的负载严重失衡。</li><li>同一个客户端产生大量并发，要求分配到多个服务器上处理的同时进行会话保持。这时基于客户端源地址的会话保持方法也会导致负载均衡失效。</li></ol><p>以上情况出现时，就必须要考虑使用其他的会话保持方式。</p><h3 id="基于-cookie-的会话保持-七层会话保持" tabindex="-1"><a class="header-anchor" href="#基于-cookie-的会话保持-七层会话保持" aria-hidden="true">#</a> 基于 Cookie 的会话保持（七层会话保持）</h3><p>基于 Cookie 的会话保持中，由客户端和负载均衡来处理 Cookie，Cookie 对后端服务器透明。</p><h4 id="客户端首次请求的处理逻辑" tabindex="-1"><a class="header-anchor" href="#客户端首次请求的处理逻辑" aria-hidden="true">#</a> 客户端首次请求的处理逻辑</h4><ol><li>客户端首次发起请求，Request 请求头未带会话保持 Cookie。CLB(负载均衡) 接收请求，发现请求头没有会话保持的 Cookie，会根据轮询算法从后端服务中选择一台服务器。</li><li>后端服务器处理完请求，将响应头和内容返回给 CLB。</li><li>CLB 生成会话保持 Cookie，并在内存中保存 Cookie。</li><li>CLB 将请求响应 Response 返回给客户端。</li></ol><h4 id="客户端在会话保持时间内再次请求的处理逻辑" tabindex="-1"><a class="header-anchor" href="#客户端在会话保持时间内再次请求的处理逻辑" aria-hidden="true">#</a> 客户端在会话保持时间内再次请求的处理逻辑：</h4><ol><li>客户端再次发送请求时，Request 需带上会话保持的 Cookie。</li><li>CLB 接收到会话保持 Cookie，通过算法找到处理上次请求的后端服务器，并转发给对应的后端服务器。</li></ol><p><img src="https://main.qcloudimg.com/raw/b0dd9f7c679a63342cf176672adee688.png" alt="cookie会话保持示意图"></p><h3 id="会话-session-的会话保持" tabindex="-1"><a class="header-anchor" href="#会话-session-的会话保持" aria-hidden="true">#</a> 会话（Session）的会话保持</h3><p>此种方式通过多个后端服务器<code>共享 Session</code>的方式，实现与负载均衡同时的会话保持。主要有如下形式：</p><ol><li>数据库存放 Session 信息存储到数据库表以实现不同应用服务器间 Session 信息的共享。此种方式适合数据库访问量不大的网站。 优点：实现简单。 缺点：由于数据库服务器相对于应用服务器更难扩展且资源更为宝贵，在高并发的 Web 应用中，最大的性能瓶颈通常出现在数据库服务器。因此如果将 Session 存储到数据库表，频繁的数据库操作会影响业务。</li><li>文件系统存放 通过文件系统（如 NFS）来实现各台服务器间的 Session 共享。此种方式适合并发量不大的网站。 优点：各台服务器只需要 mount 存储 Session 的磁盘即可，实现较为简单。 缺点：NFS 对高并发读写的性能并不高，在硬盘 I/O 性能和网络带宽上存在较大瓶颈，尤其是对于 Session 这样的小文件的频繁读写操作。</li><li>Memcached 存放 利用 Memcached 来保存 Session 数据，直接通过内存的方式读取。 优点：效率高，在读写速度上会比存放在文件系统时快很多，而且多个服务器共用 Session 也更加方便，将这些服务器都配置成使用同一组 Memcached 服务器就可以，减少了额外的工作量。 缺点：一旦宕机内存中的数据将会丢失，但对 Session 数据来说并不是严重的问题。如果网站访问量太大、Session 太多的时候 Memcached 会将不常用的部分删除，但是如果用户隔离了一段时间之后继续使用，将会发生读取失败的问题。</li></ol>',27);function u(m,_){const i=n("ExternalLinkIcon");return s(),c("div",null,[t,e("p",null,[o("原文: "),e("a",h,[o("会话保持原理"),d(i)])]),p])}const b=a(r,[["render",u],["__file","会话保持.html.vue"]]);export{b as default};
