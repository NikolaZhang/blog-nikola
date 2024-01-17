import{_ as a}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as n,c as s,f as o,a as e,e as t}from"./app-Y4FVIHIl.js";const r={},l=e("blockquote",null,[e("p",null,"继续服务治理，开始客户端负载均衡的学习。由于之前的工程中已经将负载均衡整合到了工程所以。程序上没有大的变动。只是增加了配置信息，及验证。ps:学习资源来自spring+cloud微服务实战")],-1),i=t(`<h1 id="_2-客户端负载均衡-spring-cloud-ribbon" tabindex="-1"><a class="header-anchor" href="#_2-客户端负载均衡-spring-cloud-ribbon" aria-hidden="true">#</a> 2 客户端负载均衡 Spring Cloud Ribbon</h1><blockquote><p>spring cloud ribbon 是基于HTTP和TCP的客户端负载均衡工具，基于Netflix的Ribbon实现。</p></blockquote><h2 id="_2-1-客户端负载均衡" tabindex="-1"><a class="header-anchor" href="#_2-1-客户端负载均衡" aria-hidden="true">#</a> 2.1 客户端负载均衡</h2><p><strong>服务端负载均衡与客户端负载均衡</strong></p><blockquote><p>负载均衡分为通常指服务端负载均衡，分为硬件负载均衡和软件负载均衡。二者都会下挂可用服务端清单，通过心跳检测来剔除有故障的服务节点以保持清单中都是可以正常访问的服务端节点。<br> 当客户端发送请求到负载均衡设备时。设备按照算法（线性轮询、按权重负载、按流量负载等）从可用的服务端清单中取出一台服务端地址，进行请求转发。</p></blockquote><blockquote><p>客户端负载均衡和服务端负载均衡的最大的不同在于服务清单的存储位置。客户端负载均衡中所有客户端节点都会维护自己要访问的服务端清单（来自服务注册中心）。客户端负载均衡也需要心跳去维护服务端清单的健康性，这个步骤需要服务注册中心配合完成。</p></blockquote><p><strong>负载均衡作用：</strong></p><ul><li>系统高可用</li><li>缓解网络压力</li><li>处理能力扩容</li></ul><p><strong>使用方法</strong></p><ol><li>服务提供者启动多个服务实例并注册到注册中心。</li><li>服务消费者直接通过调用被<code>@LoadBalanced</code>注解修饰过的RestTemplate来实现面向服务的接口调用。</li></ol><h2 id="_2-2-resttemplate" tabindex="-1"><a class="header-anchor" href="#_2-2-resttemplate" aria-hidden="true">#</a> 2.2 RestTemplate</h2><blockquote><p>针对几种不同请求类型和参数类型的服务调用。</p></blockquote><h3 id="_2-2-1-get请求" tabindex="-1"><a class="header-anchor" href="#_2-2-1-get请求" aria-hidden="true">#</a> 2.2.1 GET请求</h3><p>可以通过两种方法实现。</p><ol><li>使用<code>getForEntity</code><br> 方法返回ResponseEntity，该对象是spring对Http请求响应的封装。</li><li>使用<code>getForObject</code><br> 该方法将http响应中的body内容转换为对象。</li></ol><h3 id="_2-2-2-post请求" tabindex="-1"><a class="header-anchor" href="#_2-2-2-post请求" aria-hidden="true">#</a> 2.2.2 POST请求</h3><ol><li>使用<code>postForEntity</code></li><li>使用<code>postForObject</code></li><li>使用<code>postForLocation</code>，返回资源的URI</li></ol><p>这里新增加了Object request 参数，该参数可以是一个普通对象，也可以是一个HttpEntity，后者会被当成HTTP请求对象处理。</p><h3 id="_2-2-3-put请求" tabindex="-1"><a class="header-anchor" href="#_2-2-3-put请求" aria-hidden="true">#</a> 2.2.3 PUT请求</h3><p>使用put</p><h3 id="_2-2-4-delete" tabindex="-1"><a class="header-anchor" href="#_2-2-4-delete" aria-hidden="true">#</a> 2.2.4 DELETE</h3><p>使用delete</p><h2 id="_2-3-参数配置" tabindex="-1"><a class="header-anchor" href="#_2-3-参数配置" aria-hidden="true">#</a> 2.3 参数配置</h2><p>分为全局配置和指定客户端配置两种方式。</p><ol><li>全局配置：<code>ribbon.&lt;key&gt; = &lt;value&gt;</code><br> 例如：ribbon.ConnectTimeout=250</li><li>指定客户端配置：<code>&lt;client&gt;.ribbon.&lt;key&gt; = &lt;value&gt;</code><br> 例如：<code>&lt;bookservice&gt;.ribbon.listOfServers=localhost:8000, ...</code><br> 更多的配置可以查看<code>com.netflix.client.config.CommonClientConfigKey</code></li></ol><p>区域化实例配置：<code>eureka.instance.metedataMap.zone=shanghai</code></p><p>禁用eureka对ribbon服务实例的维护<code>ribbon.eureka.enable=false</code><br> 禁用之后listOfServers<br> 参数配置的方式就能实现了。</p><h2 id="_2-4-重试机制" tabindex="-1"><a class="header-anchor" href="#_2-4-重试机制" aria-hidden="true">#</a> 2.4 重试机制</h2><blockquote><p>CAP原则: 一致性，可用性， 可靠性<br> Eureka服务治理机制强调AP原则，即接收故障实例不丢弃健康实例。关键在于保护机制，防止剔除故障服务实例。<br> 由于Eureka在可用性与一致性上的取舍，不论是由于触发了保护机制还是服务剔除的延迟，引起服务调用到故障实例的时候，最好能够增加容错机制。因此，我们在实现服务调用的时候通常会加入一些重试机制。</p></blockquote><p>客户端增加配置如下：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>spring<span class="token operator">:</span>
  application<span class="token operator">:</span>
    name<span class="token operator">:</span> customerclient
  cloud<span class="token operator">:</span>
    loadbalancer<span class="token operator">:</span>
      retry<span class="token operator">:</span>
        enabled<span class="token operator">:</span> <span class="token boolean">true</span>
hystrix<span class="token operator">:</span>
  command<span class="token operator">:</span>
    <span class="token keyword">default</span><span class="token operator">:</span>
      execution<span class="token operator">:</span>
        isolation<span class="token operator">:</span>
          thread<span class="token operator">:</span>
            timeoutInMilliseconds<span class="token operator">:</span> <span class="token number">10000</span>
bookservice<span class="token operator">:</span>
  ribbon<span class="token operator">:</span>
    <span class="token class-name">ConnectTimeout</span><span class="token operator">:</span> <span class="token number">250</span>
    <span class="token class-name">ReadTimeout</span><span class="token operator">:</span> <span class="token number">1000</span>
    <span class="token class-name">OkToRetryOnAllOperation</span><span class="token operator">:</span> <span class="token boolean">true</span>
    <span class="token class-name">MaxAutoRetriesNextServer</span><span class="token operator">:</span> <span class="token number">2</span>
    <span class="token class-name">MaxAutoRetries</span><span class="token operator">:</span> <span class="token number">2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>spring.cloud.loadbalancer.retry.enable=true</code> 启动重试机制<br><code>hystrix.command.default.execution.isolation.thread.timeoutInMilliseconds=10000</code> 设置断路器超时时间，改时间必须大于ribbon超时时间，否则会触发重试。<br> ribbon中的设置一次为：请求连接超时时间、请求处理超时时间、所有操作进行重试、切换实例的重试次数、对当前实例的重试次数。</p>`,32);function c(d,p){return n(),s("div",null,[l,o("more"),i])}const h=a(r,[["render",c],["__file","微服务-客户端负载均衡.html.vue"]]);export{h as default};
