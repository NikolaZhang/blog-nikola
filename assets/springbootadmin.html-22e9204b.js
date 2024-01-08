import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{r as p,o as e,c as o,a as n,b as s,d as c,e as i}from"./app-533408b1.js";const l={},u=n("blockquote",null,[n("p",null,"介绍一下基于zookeeper的服务健康监控如何配置")],-1),k=n("h2",{id:"吐槽-网上的技术教程简直了",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#吐槽-网上的技术教程简直了","aria-hidden":"true"},"#"),s(" 吐槽: 网上的技术教程简直了")],-1),r=n("p",null,"建议你参考如下的两个资料:",-1),d=n("li",null,[n("code",null,"https://github.com/codecentric/spring-boot-admin"),s("这个项目的"),n("code",null,"spring-boot-admin-samples"),s("中含有使用各种类型的注册中心配置admin的方式.")],-1),v={href:"https://codecentric.github.io/spring-boot-admin/2.1.6/#getting-started",target:"_blank",rel:"noopener noreferrer"},m=i(`<p>我主要是参考1中的项目进行配置的. 注意我们的前提是你的模块已经引入了zookeeper相关的依赖, 并且服务能正确注册到注册中心.</p><h2 id="被监控模块的处理" tabindex="-1"><a class="header-anchor" href="#被监控模块的处理" aria-hidden="true">#</a> 被监控模块的处理</h2><p>被监控的模块要添加如下配置</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">management</span><span class="token punctuation">:</span>
  <span class="token key atrule">endpoints</span><span class="token punctuation">:</span>
    <span class="token key atrule">web</span><span class="token punctuation">:</span>
      <span class="token key atrule">exposure</span><span class="token punctuation">:</span>
        <span class="token key atrule">include</span><span class="token punctuation">:</span> <span class="token string">&quot;*&quot;</span>
  <span class="token key atrule">endpoint</span><span class="token punctuation">:</span>
    <span class="token key atrule">health</span><span class="token punctuation">:</span>
      <span class="token key atrule">show-details</span><span class="token punctuation">:</span> ALWAYS
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果关于日志需要配置</p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">logging</span><span class="token punctuation">:</span>
  <span class="token key atrule">path</span><span class="token punctuation">:</span> ./log_syscore
  <span class="token key atrule">level</span><span class="token punctuation">:</span>
    <span class="token key atrule">root</span><span class="token punctuation">:</span> info
    <span class="token key atrule">com.nikola.syscore</span><span class="token punctuation">:</span> debug
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>你可以根据需要自定义日志输出目录和日志级别. 生产环境直接info就可以了, 本地的话可以配置debug.</p><h2 id="监控模块" tabindex="-1"><a class="header-anchor" href="#监控模块" aria-hidden="true">#</a> 监控模块</h2><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token key atrule">spring</span><span class="token punctuation">:</span>
  <span class="token key atrule">boot</span><span class="token punctuation">:</span>
    <span class="token key atrule">admin</span><span class="token punctuation">:</span>
      <span class="token key atrule">ui</span><span class="token punctuation">:</span>
        <span class="token key atrule">title</span><span class="token punctuation">:</span> <span class="token string">&quot;聊天室相关模块健康监控&quot;</span>
        <span class="token key atrule">brand</span><span class="token punctuation">:</span> <span class="token string">&quot;&lt;img src=&#39;assets/img/icon-spring-boot-admin.svg&#39;&gt;&lt;span&gt;聊天室相关模块健康监控&lt;/span&gt;&quot;</span>
  <span class="token key atrule">security</span><span class="token punctuation">:</span>
    <span class="token key atrule">user</span><span class="token punctuation">:</span>
      <span class="token key atrule">name</span><span class="token punctuation">:</span> admin
      <span class="token key atrule">password</span><span class="token punctuation">:</span> admin
  <span class="token key atrule">cloud</span><span class="token punctuation">:</span>
    <span class="token key atrule">zookeeper</span><span class="token punctuation">:</span>
      <span class="token key atrule">connect-string</span><span class="token punctuation">:</span> localhost<span class="token punctuation">:</span><span class="token number">2181</span>
      <span class="token key atrule">discovery</span><span class="token punctuation">:</span>
        <span class="token key atrule">register</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
        <span class="token key atrule">enabled</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>spring.boot.admin中可以对监控平台进行一些配置. spring.boot.security当我们使用springsecurity框架时, 可以为监控平台设置账号密码登录</p><p>在启动类上需要设置<code>@EnableAdminServer</code>注解表示这个一个AdminServer.</p><h2 id="关于springsecurity的配置" tabindex="-1"><a class="header-anchor" href="#关于springsecurity的配置" aria-hidden="true">#</a> 关于springsecurity的配置</h2><p>这个直接使用了官方的配置</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@EnableWebSecurity</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">SecurityConfig</span> <span class="token keyword">extends</span> <span class="token class-name">WebSecurityConfigurerAdapter</span> <span class="token punctuation">{</span>

    <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token class-name">AdminServerProperties</span> adminServer<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token class-name">SecurityConfig</span><span class="token punctuation">(</span><span class="token class-name">AdminServerProperties</span> adminServer<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>adminServer <span class="token operator">=</span> adminServer<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token annotation punctuation">@Override</span>
    <span class="token keyword">protected</span> <span class="token keyword">void</span> <span class="token function">configure</span><span class="token punctuation">(</span><span class="token class-name">HttpSecurity</span> http<span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
        <span class="token class-name">SavedRequestAwareAuthenticationSuccessHandler</span> successHandler <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SavedRequestAwareAuthenticationSuccessHandler</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        successHandler<span class="token punctuation">.</span><span class="token function">setTargetUrlParameter</span><span class="token punctuation">(</span><span class="token string">&quot;redirectTo&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        successHandler<span class="token punctuation">.</span><span class="token function">setDefaultTargetUrl</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>adminServer<span class="token punctuation">.</span><span class="token function">path</span><span class="token punctuation">(</span><span class="token string">&quot;/&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        http<span class="token punctuation">.</span><span class="token function">authorizeRequests</span><span class="token punctuation">(</span><span class="token punctuation">(</span>authorizeRequests<span class="token punctuation">)</span> <span class="token operator">-&gt;</span> authorizeRequests
                <span class="token punctuation">.</span><span class="token function">antMatchers</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>adminServer<span class="token punctuation">.</span><span class="token function">path</span><span class="token punctuation">(</span><span class="token string">&quot;/assets/**&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">permitAll</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">antMatchers</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>adminServer<span class="token punctuation">.</span><span class="token function">path</span><span class="token punctuation">(</span><span class="token string">&quot;/actuator/**&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">permitAll</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">antMatchers</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>adminServer<span class="token punctuation">.</span><span class="token function">path</span><span class="token punctuation">(</span><span class="token string">&quot;/login&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">permitAll</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">anyRequest</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">authenticated</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">formLogin</span><span class="token punctuation">(</span><span class="token punctuation">(</span>formLogin<span class="token punctuation">)</span> <span class="token operator">-&gt;</span> formLogin<span class="token punctuation">.</span><span class="token function">loginPage</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>adminServer<span class="token punctuation">.</span><span class="token function">path</span><span class="token punctuation">(</span><span class="token string">&quot;/login&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
                        <span class="token punctuation">.</span><span class="token function">successHandler</span><span class="token punctuation">(</span>successHandler<span class="token punctuation">)</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">logout</span><span class="token punctuation">(</span><span class="token punctuation">(</span>logout<span class="token punctuation">)</span> <span class="token operator">-&gt;</span> logout<span class="token punctuation">.</span><span class="token function">logoutUrl</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>adminServer<span class="token punctuation">.</span><span class="token function">path</span><span class="token punctuation">(</span><span class="token string">&quot;/logout&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">httpBasic</span><span class="token punctuation">(</span><span class="token class-name">Customizer</span><span class="token punctuation">.</span><span class="token function">withDefaults</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
                <span class="token punctuation">.</span><span class="token function">csrf</span><span class="token punctuation">(</span><span class="token punctuation">(</span>csrf<span class="token punctuation">)</span> <span class="token operator">-&gt;</span> csrf<span class="token punctuation">.</span><span class="token function">csrfTokenRepository</span><span class="token punctuation">(</span><span class="token class-name">CookieCsrfTokenRepository</span><span class="token punctuation">.</span><span class="token function">withHttpOnlyFalse</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
                        <span class="token punctuation">.</span><span class="token function">ignoringRequestMatchers</span><span class="token punctuation">(</span>
                                <span class="token keyword">new</span> <span class="token class-name">AntPathRequestMatcher</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>adminServer<span class="token punctuation">.</span><span class="token function">path</span><span class="token punctuation">(</span><span class="token string">&quot;/instances&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                                        <span class="token class-name">HttpMethod</span><span class="token punctuation">.</span><span class="token constant">POST</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                                <span class="token keyword">new</span> <span class="token class-name">AntPathRequestMatcher</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>adminServer<span class="token punctuation">.</span><span class="token function">path</span><span class="token punctuation">(</span><span class="token string">&quot;/instances/*&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                                        <span class="token class-name">HttpMethod</span><span class="token punctuation">.</span><span class="token constant">DELETE</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
                                <span class="token keyword">new</span> <span class="token class-name">AntPathRequestMatcher</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>adminServer<span class="token punctuation">.</span><span class="token function">path</span><span class="token punctuation">(</span><span class="token string">&quot;/actuator/**&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="启动" tabindex="-1"><a class="header-anchor" href="#启动" aria-hidden="true">#</a> 启动</h2><p>登录界面 <img src="https://tech.nikolazhang.top/2020-04-03-01-27-29.png" alt="2020-04-03-01-27-29"> 首页(这里可以看到服务的状态) <img src="https://tech.nikolazhang.top/2020-04-03-01-28-07.png" alt="2020-04-03-01-28-07"><img src="https://tech.nikolazhang.top/2020-04-03-01-31-42.png" alt="2020-04-03-01-31-42"> 你可以进入一个服务查看服务的内存等运行情况 <img src="https://tech.nikolazhang.top/2020-04-03-01-29-01.png" alt="2020-04-03-01-29-01"> logging中可以查看当前服务的日志信息. 这个对于分布式的部署方式日志查看帮助极大, loggers中可以配置指定文件或者包下的日志级别. 也就是你可以实时调整日志的级别. <img src="https://tech.nikolazhang.top/2020-04-03-01-29-31.png" alt="2020-04-03-01-29-31"></p>`,16);function h(g,b){const a=p("ExternalLinkIcon");return e(),o("div",null,[u,k,r,n("ol",null,[d,n("li",null,[n("a",v,[s("springbootAdmin参考手册"),c(a)])])]),m])}const q=t(l,[["render",h],["__file","springbootadmin.html.vue"]]);export{q as default};