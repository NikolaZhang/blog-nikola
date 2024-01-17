import{_ as r}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as s,o as n,c as d,a as t,b as e,d as l,e as a}from"./app-Y4FVIHIl.js";const c={},i=a('<blockquote><p>这是一个vscode插件，用于支持mybatis-plus框架的使用。支持java实体、接口、xml的生成；日志的格式化；引用跳转等功能。</p></blockquote><h2 id="features" tabindex="-1"><a class="header-anchor" href="#features" aria-hidden="true">#</a> Features</h2><h3 id="方法跳转" tabindex="-1"><a class="header-anchor" href="#方法跳转" aria-hidden="true">#</a> 方法跳转</h3><blockquote><p>只对（src/main目录下）的路径有效。</p></blockquote><p><strong>操作方法：</strong></p><p>a. 当光标位于<code>接口方法</code>或者<code>statement id</code>上，使用快捷键或命令（具体查看命令章节）。<br> b. mapper接口和xml有跳转提示（<code>go to Mapper XML</code>, <code>go to Mapper java</code>），点击即可跳转。（感谢<code>shunf4</code>同学的pr. <sup>_</sup>）<br> c. 不存在对应的java方法, 或者动态sql, 允许自动创建.<br> 此时会提示三种选项:</p><ul><li>直接跳转到文件</li><li>不跳转</li><li>创建方法或者动态sql（创建位置为末尾）</li></ul><p>c. 支持引用跳转<br> 对xml中的<code>type</code>，<code>resultType</code>，<code>parameterType</code>，<code>resultMap</code>，<code>parameterMap</code>，<code>refid</code>跳转到指定位置进行支持。</p><blockquote><p>目前只支持项目中的类, 不支持别名方式，不支持基础类型。</p></blockquote><h3 id="日志格式化" tabindex="-1"><a class="header-anchor" href="#日志格式化" aria-hidden="true">#</a> 日志格式化</h3><blockquote><p>目前支持MYSQL, ORACLE, 默认为MYSQL</p></blockquote><p><strong>操作方法：</strong></p><p>首先复制要转换的sql日志，使用快捷键或命令（具体查看命令章节）。</p><p><strong>注意：</strong></p><p>复制的日志必须包含：<code>Preparing:</code>, <code>Parameters:</code>。</p><h3 id="文件生成器" tabindex="-1"><a class="header-anchor" href="#文件生成器" aria-hidden="true">#</a> 文件生成器</h3><p><strong>操作方法：</strong></p><ol><li>使用<code>ctrl+m ctrl+g</code>，打开文件生成器页面。</li><li>在生成策略页面按需配置即可。注意需要先配置数据库信息。</li></ol><p><strong>注意：</strong></p><ol><li>项目路径为<code>/a/b/c</code>形式, 如果指定磁盘则需在最前面加上<code>/</code>, 如<code>/D:/a/b/c</code>。</li><li>数据库配置需要提前配置好，并且确保连接成功。</li><li>如果需要删除之前的配置，可以找到配置文件后，在配置文件中删除。</li><li>字段类型匹配根据正则表达式，如果有多个符合则取最长的表达式对应的类型。</li></ol><p><strong>关于路径配置的细节：</strong></p><ol><li>项目路径必须配置。</li><li>只配置项目路径，所有文件生成在该路径下。</li><li>xml路径不配置，xml生成到接口同目录下。</li><li>entity不配置，entity文件生成到顶级包路径下。</li><li>mapper接口不配置，接口和xml文件生成到顶级包路径下。</li><li>顶级包路径和项目路径间自动加上<code>src/main/java</code>路径</li><li>xml路径前自动加上<code>src/main/resources</code>路径。</li><li>顶级目录为绝对地址，其他为相对位置。</li><li>如果不配置顶级包，entity，mapper，xml包包名需要手动修改。</li></ol><p><strong>关于oracle数据库连接：</strong></p>',23),p=t("br",null,null,-1),h={href:"https://www.oracle.com/database/technologies/instant-client/linux-x86-64-downloads.html",target:"_blank",rel:"noopener noreferrer"},m=t("br",null,null,-1),b={href:"https://www.cnblogs.com/rysinal/p/7779055.html",target:"_blank",rel:"noopener noreferrer"},g=a(`<h3 id="缓存" tabindex="-1"><a class="header-anchor" href="#缓存" aria-hidden="true">#</a> 缓存</h3><blockquote><p>缓存不是用户必须操作的项目。</p></blockquote><p><strong>关于缓存的使用：</strong></p><p>a. 当调整文件位置、变更接口文件名、命名空间后，应该要清理缓存的映射文件位置。（ctrl+m ctrl+c）<br> b. 会加载项目中所有的映射关系，用于跳转时加速查找映射。（ctrl+m ctrl+d）</p><h2 id="命令" tabindex="-1"><a class="header-anchor" href="#命令" aria-hidden="true">#</a> 命令</h2><p>所有命令均为<code>mybatis-tools</code>作为分组前缀. 以下所有快捷键均为组合键。（当然<code>ctrl+shift+p</code>, 之后输入命令也是可以的）</p><table><thead><tr><th style="text-align:left;">命令</th><th style="text-align:left;">快捷键</th><th style="text-align:left;">含义</th></tr></thead><tbody><tr><td style="text-align:left;"><code>mybatis-tools.jumper</code></td><td style="text-align:left;">ctrl+m ctrl+j</td><td style="text-align:left;">跳转功能, 当光标位于<code>接口方法</code>或者<code>statement id</code>上，使用该命令即可</td></tr><tr><td style="text-align:left;"><code>mybatis-tools.log-format</code></td><td style="text-align:left;">ctrl+m ctrl+f</td><td style="text-align:left;">mybatis 日志格式化 将参数填充到动态sql中, 注意需要包含: <code>Preparing:</code>, <code>Parameters:</code></td></tr><tr><td style="text-align:left;"><code>mybatis-tools.config</code></td><td style="text-align:left;">ctrl+m ctrl+c</td><td style="text-align:left;">加载项目中的命名空间及映射. 如果之后调整过文件位置需要重新执行该命令或者执行清理命令</td></tr><tr><td style="text-align:left;"><code>mybatis-tools.clean</code></td><td style="text-align:left;">ctrl+m ctrl+d</td><td style="text-align:left;">清除映射关系缓存</td></tr><tr><td style="text-align:left;"><code>mybatis-tools.generate-file</code></td><td style="text-align:left;">ctrl+m ctrl+g</td><td style="text-align:left;">文件生成器</td></tr></tbody></table><h2 id="extension-settings" tabindex="-1"><a class="header-anchor" href="#extension-settings" aria-hidden="true">#</a> Extension Settings</h2><h3 id="数据库类型" tabindex="-1"><a class="header-anchor" href="#数据库类型" aria-hidden="true">#</a> 数据库类型</h3><blockquote><p>当使用日志填充命令时, 需要根据数据库类型进行转换某些类型（如: date）<br> 如果不使用该配置，会弹出一个选择框，需要选中数据库类型。<br> 该配置作用于工作空间</p></blockquote><p>在工作空间的setting.json第一层级, 插入如下配置：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token property">&quot;mybatis-tools.databaseType&quot;</span><span class="token operator">:</span> <span class="token string">&quot;mysql&quot;</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>注意：</strong></p><p>目前支持mysql，oracle。</p><h2 id="获取" tabindex="-1"><a class="header-anchor" href="#获取" aria-hidden="true">#</a> 获取</h2>`,15),u={href:"https://gitee.com/NikolaZhang/mybatis-tools",target:"_blank",rel:"noopener noreferrer"},f=t("br",null,null,-1),x={href:"https://marketplace.visualstudio.com/items?itemName=nikolazhang.mybatis-tools",target:"_blank",rel:"noopener noreferrer"};function y(_,k){const o=s("ExternalLinkIcon");return n(),d("div",null,[i,t("p",null,[e("oracle的连接需要借助jdk才可以运行，因此需要你本地安装客户端。"),p,e(" 前提：安装"),t("a",h,[e("oracle client"),l(o)]),m,e(" 并配置环境变量, 参考"),t("a",b,[e("nodejs 使用官方oracledb库连接数据库 教程"),l(o)])]),g,t("p",null,[e("项目源码地址："),t("a",u,[e("https://gitee.com/NikolaZhang/mybatis-tools"),l(o)]),f,e(" 插件获取地址："),t("a",x,[e("https://marketplace.visualstudio.com/items?itemName=nikolazhang.mybatis-tools"),l(o)])])])}const j=r(c,[["render",y],["__file","mybatis-tools.html.vue"]]);export{j as default};
