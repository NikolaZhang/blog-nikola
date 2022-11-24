import{_ as s}from"./_plugin-vue_export-helper.cdc0426e.js";import{o,c as l,a as t,b as n,d as a,e as i,r as p}from"./app.e7c9cb9e.js";const d={},r=t("h2",{id:"\u57FA\u672C\u64CD\u4F5C",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#\u57FA\u672C\u64CD\u4F5C","aria-hidden":"true"},"#"),n(" \u57FA\u672C\u64CD\u4F5C")],-1),c={href:"https://www.elastic.co/guide/en/elasticsearch/reference/current/elasticsearch-intro.html",target:"_blank",rel:"noopener noreferrer"},u={href:"https://www.elastic.co/guide/cn/elasticsearch/guide/current/index.html",target:"_blank",rel:"noopener noreferrer"},g=i(`<h3 id="\u63D2\u5165" tabindex="-1"><a class="header-anchor" href="#\u63D2\u5165" aria-hidden="true">#</a> \u63D2\u5165</h3><p>\u901A\u8FC7\u505A\u4E00\u4E2A\u516C\u53F8\u548C\u5458\u5DE5\u7684\u6848\u4F8B\u6765\u719F\u6089\u57FA\u672C\u7684\u4E00\u4E9B\u64CD\u4F5C. \u5411\u516C\u53F8(megacorp)\u4E2D\u6DFB\u52A0id\u4E3A1\u7684\u5458\u5DE5(employee)</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code>PUT /megacorp/employee/<span class="token number">1</span>
<span class="token punctuation">{</span>
    <span class="token property">&quot;first_name&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;John&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;last_name&quot;</span> <span class="token operator">:</span>  <span class="token string">&quot;Smith&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;age&quot;</span> <span class="token operator">:</span>        <span class="token number">25</span><span class="token punctuation">,</span>
    <span class="token property">&quot;about&quot;</span> <span class="token operator">:</span>      <span class="token string">&quot;I love to go rock climbing&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;interests&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token string">&quot;sports&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;music&quot;</span> <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6B64\u5904\u7684<code>megacorp</code>\u5C31\u662F\u4E00\u4E2A\u7D22\u5F15. <code>employee</code>\u4E3A\u4E00\u4E2A\u7C7B\u578B. body\u4E2D\u7684json\u5C31\u662F\u4E00\u4E2A\u5F53\u524D\u5458\u5DE5\u4FE1\u606F\u7684\u6587\u6863. \u5176\u4E2D\u7684\u6BCF\u4E00\u4E2A\u5C5E\u6027\u5373\u4E00\u4E2A\u5B57\u6BB5.</p><p>\u5C06\u4E0A\u9762\u7684\u547D\u4EE4\u590D\u5236, \u7C98\u8D34\u5230kibana, \u6267\u884C: <img src="https://tech.nikolazhang.top/2020-02-01-13-24-00.png" alt="2020-02-01-13-24-00" loading="lazy"></p><p>\u4E4B\u540E\u63D2\u5165\u66F4\u591A\u6570\u636E.</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code>PUT /megacorp/employee/<span class="token number">2</span>
<span class="token punctuation">{</span>
    <span class="token property">&quot;first_name&quot;</span> <span class="token operator">:</span>  <span class="token string">&quot;Jane&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;last_name&quot;</span> <span class="token operator">:</span>   <span class="token string">&quot;Smith&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;age&quot;</span> <span class="token operator">:</span>         <span class="token number">32</span><span class="token punctuation">,</span>
    <span class="token property">&quot;about&quot;</span> <span class="token operator">:</span>       <span class="token string">&quot;I like to collect rock albums&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;interests&quot;</span><span class="token operator">:</span>  <span class="token punctuation">[</span> <span class="token string">&quot;music&quot;</span> <span class="token punctuation">]</span>
<span class="token punctuation">}</span>

PUT /megacorp/employee/<span class="token number">3</span>
<span class="token punctuation">{</span>
    <span class="token property">&quot;first_name&quot;</span> <span class="token operator">:</span>  <span class="token string">&quot;Douglas&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;last_name&quot;</span> <span class="token operator">:</span>   <span class="token string">&quot;Fir&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;age&quot;</span> <span class="token operator">:</span>         <span class="token number">35</span><span class="token punctuation">,</span>
    <span class="token property">&quot;about&quot;</span><span class="token operator">:</span>        <span class="token string">&quot;I like to build cabinets&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;interests&quot;</span><span class="token operator">:</span>  <span class="token punctuation">[</span> <span class="token string">&quot;forestry&quot;</span> <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6267\u884C\u67E5\u8BE2\u547D\u4EE4:</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code>GET /megacorp/_search
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="https://tech.nikolazhang.top/2020-02-01-13-27-30.png" alt="2020-02-01-13-27-30" loading="lazy"></p><h4 id="why-put" tabindex="-1"><a class="header-anchor" href="#why-put" aria-hidden="true">#</a> why PUT</h4><p>\u4E3A\u4EC0\u4E48\u4E0A\u9762\u8BB2\u7684\u4F8B\u5B50\u63D2\u5165\u90FD\u662F\u4F7F\u7528PUT\u800C\u4E0D\u662FPOST. \u8FD9\u660E\u663E\u4E0Drestful\u554A. <img src="https://tech.nikolazhang.top/2020-02-02-20-43-38.png" alt="2020-02-02-20-43-38" loading="lazy"></p><p>\u5F53\u6211\u4EEC\u4F7F\u7528put\u65B9\u6CD5\u8FDB\u884C\u8BF7\u6C42\u6307\u5B9Aid, \u7136\u800C\u5728\u67E5\u8BE2\u4E4B\u524D\u6211\u4EEC\u5E76\u4E0D\u77E5\u9053\u8FD9\u4E2Aid\u662F\u4E0D\u662F\u5DF2\u7ECF\u5B58\u5728\u4E86, \u5982\u679C\u6CA1\u6709\u5B58\u5728\u5219\u662F\u521B\u5EFA\u6A21\u5F0F(<code>result</code>\u5B57\u6BB5\u503C\u4E3A<code>created</code>), \u5426\u5219\u4E3A\u66F4\u65B0(<code>result</code>\u5B57\u6BB5\u503C\u4E3A<code>updated</code>). \u4E3A\u4E86\u4FDD\u8BC1\u4E3A\u521B\u5EFA\u6A21\u5F0F\u6709\u4EE5\u4E0B\u65B9\u6CD5\u521B\u5EFA:</p><ol><li><p>\u4F7F\u7528POST\u65B9\u6CD5, \u8BA9es\u81EA\u52A8\u751F\u6210\u552F\u4E00id. \u901A\u8FC7\u4E0B\u56FE\u4F60\u53EF\u4EE5\u53D1\u73B0PUT\u548CPOST\u7684\u4E0D\u540C. <img src="https://tech.nikolazhang.top/2020-02-01-20-33-47.png" alt="2020-02-01-20-33-47" loading="lazy"> \u4F7F\u7528post\u65B9\u5F0F\u751F\u6210\u7684id, \u957F\u5EA6\u4E3A20\u4E2A\u5B57\u7B26, URL\u5B89\u5168, base64\u7F16\u7801, GUID, \u5206\u5E03\u5F0F\u7CFB\u7EDF\u5E76\u884C\u751F\u6210\u65F6\u4E0D\u53EF\u80FD\u4F1A\u53D1\u751F\u51B2\u7A81</p></li><li><p>\u4F7F\u7528PUT, \u901A\u8FC7\u6DFB\u52A0<code>?op_type=create</code>\u6216\u8005<code>_create</code>\u6765\u8FDB\u884C\u63A7\u5236, \u5982\u679C\u5DF2\u7ECF\u5B58\u5728\u5219\u54CD\u5E94409. <img src="https://tech.nikolazhang.top/2020-02-01-20-47-53.png" alt="2020-02-01-20-47-53" loading="lazy"></p></li></ol><h4 id="\u6587\u6863\u7684\u7ED3\u6784" tabindex="-1"><a class="header-anchor" href="#\u6587\u6863\u7684\u7ED3\u6784" aria-hidden="true">#</a> \u6587\u6863\u7684\u7ED3\u6784</h4><p>\u6BCF\u4E2A\u6587\u6863\u90FD\u542B\u6709\u5143\u6570\u636E(\u63CF\u8FF0\u6570\u636E\u7684\u6570\u636E)\u5B57\u6BB5, \u6709\u4E9B\u5143\u6570\u636E\u662F\u53EF\u4EE5\u5728\u521B\u5EFA\u65F6\u81EA\u5B9A\u4E49\u7684, \u8BF8\u5982: <code>_index</code>, <code>_type</code>, <code>_id</code>.</p><h5 id="\u6587\u6863\u6E90\u5143\u5B57\u6BB5" tabindex="-1"><a class="header-anchor" href="#\u6587\u6863\u6E90\u5143\u5B57\u6BB5" aria-hidden="true">#</a> \u6587\u6863\u6E90\u5143\u5B57\u6BB5</h5><p><code>_source</code>: \u8868\u793A\u7684\u662F\u6587\u6863\u7684json\u5E8F\u5217\u5316. <code>_size</code>: \u8868\u793A<code>_source</code>\u7684\u6BD4\u7279\u503C. \u7531<code>mapper-size</code>\u63D2\u4EF6\u63D0\u4F9B</p><h5 id="\u7D22\u5F15\u5143\u5B57\u6BB5" tabindex="-1"><a class="header-anchor" href="#\u7D22\u5F15\u5143\u5B57\u6BB5" aria-hidden="true">#</a> \u7D22\u5F15\u5143\u5B57\u6BB5</h5><p><code>_field_names</code>: All fields in the document which contain non-null values. <code>_ignored</code>: All fields in the document that have been ignored at index time because of ignore_malformed.</p><h5 id="\u8DEF\u7531\u5143\u5B57\u6BB5" tabindex="-1"><a class="header-anchor" href="#\u8DEF\u7531\u5143\u5B57\u6BB5" aria-hidden="true">#</a> \u8DEF\u7531\u5143\u5B57\u6BB5</h5><p><code>_routing</code> A custom routing value which routes a document to a particular shard.</p><h5 id="\u5176\u4ED6\u5143\u5B57\u6BB5" tabindex="-1"><a class="header-anchor" href="#\u5176\u4ED6\u5143\u5B57\u6BB5" aria-hidden="true">#</a> \u5176\u4ED6\u5143\u5B57\u6BB5</h5><p><code>_meta</code> Application specific metadata.</p><h2 id="\u6620\u5C04" tabindex="-1"><a class="header-anchor" href="#\u6620\u5C04" aria-hidden="true">#</a> \u6620\u5C04</h2><p>\u6620\u5C04\u662F\u5B9A\u4E49\u4E00\u4E2A\u6587\u6863\u5305\u542B\u54EA\u4E9B\u5B57\u6BB5, \u4EE5\u53CA\u5982\u4F55\u5B58\u50A8\u548C\u7D22\u5F15\u7684\u8FC7\u7A0B.</p><p>\u5F53\u6211\u4EEC\u4F7F\u7528\u4F20\u7EDF\u6570\u636E\u5E93\u7684\u65F6\u5019, \u521B\u5EFA\u4E00\u4E2A\u8868\u65F6, \u9700\u8981\u6307\u5B9A\u8868\u4E2D\u5B57\u6BB5\u7684\u7C7B\u578B. \u4E0D\u77E5\u9053\u4F60\u662F\u5426\u6709\u8FD9\u4E2A\u7591\u95EE: \u5F53\u6211\u4EEC\u63D2\u5165\u4E00\u4E2A\u6587\u6863\u7684\u65F6\u5019, \u4F3C\u4E4E\u5E76\u6CA1\u6709\u6307\u5B9A\u6587\u6863\u4E2D\u7684\u5B57\u6BB5\u7C7B\u578B\u554A. \u5176\u5B9Ees\u7684\u6587\u6863\u4E2D\u7684\u5B57\u6BB5\u662F\u6709\u7C7B\u578B\u7684, \u53EA\u662F\u5F53\u6211\u4EEC\u4E0D\u6307\u5B9A\u5B57\u6BB5\u7C7B\u578B\u7684\u65F6\u5019, \u4F1A\u7ED9\u6211\u4EEC\u81EA\u52A8\u8FDB\u884C\u7C7B\u578B\u7684\u5339\u914D. \u5F53\u7136\u4F60\u53EF\u4EE5\u7ED9\u5B57\u6BB5\u6307\u5B9A\u7C7B\u578B, \u8FD9\u5C31\u662F\u6620\u5C04.</p><h3 id="\u5B57\u6BB5\u6570\u636E\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#\u5B57\u6BB5\u6570\u636E\u7C7B\u578B" aria-hidden="true">#</a> \u5B57\u6BB5\u6570\u636E\u7C7B\u578B</h3><p>\u4E3B\u8981\u7684\u6570\u636E\u7C7B\u578B\u6709\u4EE5\u4E0B\u51E0\u79CD:</p><table><thead><tr><th style="text-align:left;">\u6570\u636E\u7C7B\u578B</th><th style="text-align:left;">\u5173\u952E\u5B57/\u8BF4\u660E</th></tr></thead><tbody><tr><td style="text-align:left;">\u6838\u5FC3\u6570\u636E\u7C7B\u578B</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">string</td><td style="text-align:left;">text, keyword</td></tr><tr><td style="text-align:left;">Numeric</td><td style="text-align:left;">long, integer, short, byte, double, float, half_float, scaled_float</td></tr><tr><td style="text-align:left;">Date</td><td style="text-align:left;">date</td></tr><tr><td style="text-align:left;">Date nanoseconds</td><td style="text-align:left;">date_nanos</td></tr><tr><td style="text-align:left;">Boolean</td><td style="text-align:left;">boolean</td></tr><tr><td style="text-align:left;">Binary</td><td style="text-align:left;">binary</td></tr><tr><td style="text-align:left;">Range</td><td style="text-align:left;">integer_range, float_range, long_range, double_range, date_range</td></tr><tr><td style="text-align:left;">\u590D\u6742\u6570\u636E\u7C7B\u578B</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">Object</td><td style="text-align:left;"><code>object</code> for single JSON objects</td></tr><tr><td style="text-align:left;">Nested</td><td style="text-align:left;"><code>nested</code> for arrays of JSON objects</td></tr><tr><td style="text-align:left;">\u5730\u7406\u6570\u636E\u7C7B\u578B</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">Geo-point</td><td style="text-align:left;"><code>geo_point</code> \u7528\u4E8E\u7ECF\u7EAC\u5EA6\u5B9A\u4F4D</td></tr><tr><td style="text-align:left;">Geo-shape</td><td style="text-align:left;"><code>geo_shape</code> \u7528\u4E8E\u50CF\u591A\u8FB9\u5F62\u8FD9\u79CD\u590D\u6742\u5F62\u72B6</td></tr><tr><td style="text-align:left;">\u4E13\u7528\u6570\u636E\u7C7B\u578B</td><td style="text-align:left;"></td></tr><tr><td style="text-align:left;">IP</td><td style="text-align:left;"><code>ip</code> for IPv4 and IPv6 addresses</td></tr><tr><td style="text-align:left;">Completion datatype</td><td style="text-align:left;"><code>completion</code> \u63D0\u4F9B\u81EA\u52A8\u5B8C\u6210\u7684\u5EFA\u8BAE</td></tr><tr><td style="text-align:left;">Token count</td><td style="text-align:left;"><code>token_count</code> \u8BA1\u7B97\u5B57\u7B26\u4E32\u4E2D\u6807\u8BC6\u6570\u91CF</td></tr><tr><td style="text-align:left;">mapper-murmur3</td><td style="text-align:left;"><code>murmur3</code> \u5728\u7D22\u5F15\u65F6\u8BA1\u7B97\u503C\u7684hash\u5E76\u5B58\u50A8\u5728\u7D22\u5F15\u4E2D</td></tr><tr><td style="text-align:left;">mapper-annotated-text</td><td style="text-align:left;"><code>annotated-text</code> \u7D22\u5F15\u5305\u542B\u7279\u6B8A\u6807\u8BB0\u7684\u6587\u672C(\u901A\u5E38\u7528\u4E8E\u6807\u8BB0\u547D\u540D\u5B9E\u4F53)</td></tr><tr><td style="text-align:left;">Percolator</td><td style="text-align:left;">\u63A5\u6536\u7528\u4E8E\u67E5\u8BE2\u7684dsl</td></tr><tr><td style="text-align:left;">Join</td><td style="text-align:left;">\u5B9A\u4E49\u540C\u4E00\u7D22\u5F15\u4E2D\u6587\u6863\u7684\u7236\u5B50\u5173\u5FC3</td></tr><tr><td style="text-align:left;">Rank feature</td><td style="text-align:left;">\u8BB0\u5F55\u6570\u5B57\u7279\u5F81\u4EE5\u5728\u67E5\u8BE2\u65F6\u63D0\u9AD8\u547D\u4E2D</td></tr><tr><td style="text-align:left;">Rank features</td><td style="text-align:left;">\u8BB0\u5F55\u6570\u5B57\u7279\u5F81\u4EE5\u5728\u67E5\u8BE2\u65F6\u63D0\u9AD8\u547D\u4E2D</td></tr><tr><td style="text-align:left;">Dense vector</td><td style="text-align:left;">\u8BB0\u5F55\u6D6E\u70B9\u503C\u7684\u5BC6\u96C6\u5411\u91CF</td></tr><tr><td style="text-align:left;">Sparse vector</td><td style="text-align:left;">\u8BB0\u5F55\u6D6E\u70B9\u503C\u7684\u7A00\u758F\u5411\u91CF</td></tr><tr><td style="text-align:left;">Search-as-you-type</td><td style="text-align:left;">\u4E00\u4E2A\u7C7B\u4F3C\u6587\u672C\u7684\u5B57\u6BB5, \u9488\u5BF9\u67E5\u8BE2\u8FDB\u884C\u4E86\u4F18\u5316, \u4EE5\u5B9E\u73B0\u81EA\u52A8\u5B8C\u6210</td></tr><tr><td style="text-align:left;">Alias</td><td style="text-align:left;">\u5B9A\u4E49\u73B0\u6709\u5B57\u6BB5\u7684\u522B\u540D</td></tr><tr><td style="text-align:left;">Flattened</td><td style="text-align:left;">\u5141\u8BB8\u5C06\u6574\u4E2AJSON\u5BF9\u8C61\u4F5C\u4E3A\u5355\u4E2A\u5B57\u6BB5\u8FDB\u884C\u7D22\u5F15</td></tr><tr><td style="text-align:left;">Shape</td><td style="text-align:left;"><code>shape</code> \u7528\u4E8E\u4EFB\u610F\u7B1B\u5361\u5C14\u51E0\u4F55</td></tr><tr><td style="text-align:left;">\u9635\u5217\u7C7B\u578B</td><td style="text-align:left;">\u6240\u6709\u503C, \u5FC5\u987B\u4E3A\u76F8\u540C\u7684\u6570\u636E\u7C7B\u578B</td></tr><tr><td style="text-align:left;">\u591A\u9886\u57DF\u7C7B\u578B</td><td style="text-align:left;">\u5141\u8BB8\u5B57\u6BB5\u5E94\u7528\u4E8E\u4E0D\u540C\u76EE\u7684, \u4E0D\u540C\u7684\u5206\u8BCD\u65B9\u5F0F\u7B49</td></tr></tbody></table><h3 id="\u6620\u5C04\u64CD\u4F5C" tabindex="-1"><a class="header-anchor" href="#\u6620\u5C04\u64CD\u4F5C" aria-hidden="true">#</a> \u6620\u5C04\u64CD\u4F5C</h3><p>\u53EF\u4EE5\u770B\u5230\u7ED9\u5B57\u6BB5\u5B9A\u4E49\u7C7B\u578B\u8FDC\u6BD4\u4F7F\u7528\u7B80\u5355\u7684\u81EA\u52A8\u8F6C\u6362\u529F\u80FD\u8981\u5F3A\u5927. \u81EA\u5B9A\u4E49\u6620\u5C04\u5141\u8BB8\u4F60\u6267\u884C\u4E0B\u9762\u7684\u64CD\u4F5C:</p><ul><li>\u5168\u6587\u5B57\u7B26\u4E32\u57DF\u548C\u7CBE\u786E\u503C\u5B57\u7B26\u4E32\u57DF\u7684\u533A\u522B</li><li>\u4F7F\u7528\u7279\u5B9A\u8BED\u8A00\u5206\u6790\u5668</li><li>\u4F18\u5316\u57DF\u4EE5\u9002\u5E94\u90E8\u5206\u5339\u914D</li><li>\u6307\u5B9A\u81EA\u5B9A\u4E49\u6570\u636E\u683C\u5F0F</li><li>\u8FD8\u6709\u66F4\u591A</li></ul><p>\u57DF\u6700\u91CD\u8981\u7684\u5C5E\u6027\u662F<code>type</code>, \u5BF9\u4E8E\u4E0D\u662F string \u7684\u57DF, \u4F60\u4E00\u822C\u53EA\u9700\u8981\u8BBE\u7F6E<code>type</code>. \u9ED8\u8BA4, <code>string</code>\u7C7B\u578B\u57DF\u4F1A\u88AB\u8BA4\u4E3A\u5305\u542B\u5168\u6587\u3002\u5C31\u662F\u8BF4, \u5B83\u4EEC\u7684\u503C\u5728\u7D22\u5F15\u524D, \u4F1A\u901A\u8FC7\u4E00\u4E2A\u5206\u6790\u5668. \u9488\u5BF9\u4E8E\u8FD9\u4E2A\u57DF\u7684\u67E5\u8BE2\u5728\u641C\u7D22\u524D\u4E5F\u4F1A\u7ECF\u8FC7\u4E00\u4E2A\u5206\u6790\u5668\u3002</p><p>string \u57DF\u6620\u5C04\u7684\u4E24\u4E2A\u6700\u91CD\u8981\u5C5E\u6027\u662F index \u548C analyzer</p><h4 id="index" tabindex="-1"><a class="header-anchor" href="#index" aria-hidden="true">#</a> index</h4><p>\u8FD9\u4E2A\u5B57\u6BB5\u503C\u4E3A: true\u548Cfalse. \u5F53\u4E3Afalse\u65F6, \u8868\u793A\u8BE5\u5B57\u6BB5\u4F1A\u88AB\u5B58\u50A8, \u4F46\u662F\u4E0D\u4F1A\u88AB\u7D22\u5F15\u548C\u67E5\u627E.</p><h4 id="analyzer" tabindex="-1"><a class="header-anchor" href="#analyzer" aria-hidden="true">#</a> analyzer</h4><p>\u88AB\u5206\u89E3\u7684\u5B57\u7B26\u4E32\u5B57\u6BB5\u662F\u901A\u8FC7\u4E00\u4E2A\u5206\u8BCD\u5668\u5C06\u5B57\u7B26\u4E32\u8F6C\u6362\u62FF\u4E3A\u4E00\u8FDE\u4E32\u7684\u6807\u8BB0\u6216\u8005\u8BCD\u6761. \u4F8B\u5982: <code>&quot;The quick Brown Foxes.&quot;</code>\u901A\u8FC7\u67D0\u79CD\u5206\u8BCD\u5668\u53EF\u4EE5\u88AB\u5206\u89E3\u4E3A<code>quick, brown, fox</code>\u4E09\u90E8\u5206. \u8FD9\u4E9B\u662F\u771F\u6B63\u7528\u4E8E\u6784\u5EFA\u7D22\u5F15\u8FD9\u4E2A\u5B57\u6BB5\u7684\u8BCD\u8BED.</p><p>\u4E0A\u8FF0\u7684\u5206\u6790\u8FC7\u7A0B\u4E0D\u4EC5\u5728\u7D22\u5F15\u65F6\u6709\u6548, \u5728\u67E5\u8BE2\u65F6\u540C\u6837\u4F1A\u53D1\u6325\u4F5C\u7528. \u67E5\u8BE2\u7684\u5B57\u7B26\u4E32\u540C\u6837\u7ECF\u8FC7\u76F8\u540C\u7684\u5206\u8BCD\u5668, \u4EE5\u4F7F\u5176\u67E5\u8BE2\u4E2D\u7684\u8BCD\u8BED\u548C\u5728\u7D22\u5F15\u4E2D\u7684\u8BCD\u8BED\u4E3A\u76F8\u540C\u683C\u5F0F.</p><p>es\u67E5\u627E\u5206\u8BCD\u5668\u7684\u8FC7\u7A0B\u5982\u4E0B(\u6709\u4E9B\u4E1C\u897F\u4E0D\u7FFB\u8BD1\u6BD4\u8F83\u597D, \u82F1\u8BED\u6E23, \u7FFB\u8BD1\u4E4B\u540E\u89C9\u5F97\u5BB9\u6613\u8BEF\u5BFC\u53C8\u5220\u4E86):</p><ol><li>\u5728\u7D22\u5F15\u65F6 <ul><li>The analyzer defined in the field mapping.</li><li>An analyzer named default in the index settings.</li><li>The standard analyzer</li></ul></li><li>\u5728\u67E5\u8BE2\u65F6 <ul><li>The analyzer defined in a full-text query.</li><li>The search_analyzer defined in the field mapping.</li><li>The analyzer defined in the field mapping.</li><li>An analyzer named default_search in the index settings.</li><li>An analyzer named default in the index settings.</li><li>The standard analyzer.</li></ul></li></ol><h5 id="\u521B\u5EFA\u5206\u8BCD\u5668" tabindex="-1"><a class="header-anchor" href="#\u521B\u5EFA\u5206\u8BCD\u5668" aria-hidden="true">#</a> \u521B\u5EFA\u5206\u8BCD\u5668</h5><p>\u521B\u5EFA\u5206\u8BCD\u5668\u6700\u7B80\u5355\u7684\u65B9\u6CD5\u662F: \u5728\u6620\u5C04\u4E2D\u9488\u5BF9\u7279\u5B9A\u5B57\u6BB5\u8FDB\u884C\u8BBE\u7F6E, \u64CD\u4F5C\u89C1\u4E0B</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code>PUT /ana_index
<span class="token punctuation">{</span>
  <span class="token property">&quot;mappings&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;properties&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;text&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;text&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;fields&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;english&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;type&quot;</span><span class="token operator">:</span>     <span class="token string">&quot;text&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;analyzer&quot;</span><span class="token operator">:</span> <span class="token string">&quot;english&quot;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://tech.nikolazhang.top/2020-02-03-14-42-25.png" alt="2020-02-03-14-42-25" loading="lazy"></p><p>\u7B80\u5355\u89E3\u91CA\u4E00\u4E0B: <code>text</code>\u5B57\u6BB5\u4F7F\u7528\u9ED8\u8BA4\u7684\u5206\u8BCD\u5668<code>standard</code>. <code>text.english</code>\u4F7F\u7528<code>english</code>\u5206\u8BCD\u5668, \u8FD9\u79CD\u5206\u8BCD\u5668\u4F1A\u5220\u9664\u7ED3\u675F\u8BCD\u5E76\u63D0\u53D6\u8BCD\u5E72.</p><h5 id="\u4F7F\u7528\u5206\u8BCD\u5668" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528\u5206\u8BCD\u5668" aria-hidden="true">#</a> \u4F7F\u7528\u5206\u8BCD\u5668</h5><p>\u901A\u8FC7\u4E00\u4E0B\u65B9\u5F0F\u6211\u4EEC\u53EF\u4EE5\u4F7F\u7528\u4E0A\u9762\u7684\u5206\u8BCD\u5668:</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code>
GET ana_index/_analyze
<span class="token punctuation">{</span>
  <span class="token property">&quot;field&quot;</span><span class="token operator">:</span> <span class="token string">&quot;text&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;text&quot;</span><span class="token operator">:</span> <span class="token string">&quot;The quick Brown Foxes.&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://tech.nikolazhang.top/2020-02-03-14-57-29.png" alt="2020-02-03-14-57-29" loading="lazy"></p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code>GET ana_index/_analyze
<span class="token punctuation">{</span>
  <span class="token property">&quot;field&quot;</span><span class="token operator">:</span> <span class="token string">&quot;text.english&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;text&quot;</span><span class="token operator">:</span> <span class="token string">&quot;The quick Brown Foxes.&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://tech.nikolazhang.top/2020-02-03-14-58-07.png" alt="2020-02-03-14-58-07" loading="lazy"></p><p>\u4F60\u53EF\u4EE5\u5BF9\u6BD4\u4E00\u4E0B\u4E24\u79CD\u5206\u8BCD\u65B9\u5F0F\u7684\u4E0D\u540C, \u4F46\u8FD9\u4E0D\u662F\u91CD\u70B9. \u4E4B\u540E\u6709\u673A\u4F1A\u6211\u4EEC\u518D\u7EE7\u7EED\u7814\u7A76\u4E0D\u540C\u7684\u5206\u8BCD\u5668.</p><h3 id="\u6620\u5C04\u57FA\u672C\u64CD\u4F5C" tabindex="-1"><a class="header-anchor" href="#\u6620\u5C04\u57FA\u672C\u64CD\u4F5C" aria-hidden="true">#</a> \u6620\u5C04\u57FA\u672C\u64CD\u4F5C</h3><p>\u90A3\u4E48\u5982\u4F55\u64CD\u4F5C\u6211\u4EEC\u81EA\u5DF1\u7684\u6620\u5C04\u5462.</p><h4 id="\u521B\u5EFA" tabindex="-1"><a class="header-anchor" href="#\u521B\u5EFA" aria-hidden="true">#</a> \u521B\u5EFA</h4><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code>PUT /my-index
<span class="token punctuation">{</span>
  <span class="token property">&quot;mappings&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;properties&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;age&quot;</span><span class="token operator">:</span>    <span class="token punctuation">{</span> <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;integer&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>  
      <span class="token property">&quot;email&quot;</span><span class="token operator">:</span>  <span class="token punctuation">{</span> <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;keyword&quot;</span>  <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token property">&quot;name&quot;</span><span class="token operator">:</span>   <span class="token punctuation">{</span> <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;text&quot;</span>  <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://tech.nikolazhang.top/2020-02-03-13-24-43.png" alt="2020-02-03-13-24-43" loading="lazy"></p><h3 id="\u4FEE\u6539" tabindex="-1"><a class="header-anchor" href="#\u4FEE\u6539" aria-hidden="true">#</a> \u4FEE\u6539</h3><p>\u5411\u5B58\u5728\u7684\u6620\u5C04\u4E2D\u6DFB\u52A0\u4E00\u4E2A\u5B57\u6BB5:</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code>PUT /my-index/_mapping
<span class="token punctuation">{</span>
  <span class="token property">&quot;properties&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;employee-id&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;keyword&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;index&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://tech.nikolazhang.top/2020-02-03-13-25-10.png" alt="2020-02-03-13-25-10" loading="lazy"></p><p>\u6211\u4EEC\u53EF\u4EE5\u4F7F\u7528\u4E0A\u9762\u7684\u65B9\u5F0F\u66F4\u6539\u4E00\u4E2A\u5DF2\u7ECF\u5B58\u5728\u7684\u5B57\u6BB5\u5417? \u7B54\u6848\u662F\u4E0D\u80FD, \u56E0\u4E3A\u53EF\u80FD\u4F1A\u5BFC\u81F4\u5DF2\u7ECF\u5EFA\u7ACB\u7D22\u5F15\u7684\u503C\u65E0\u6548. <code>Except for supported mapping parameters, you can\u2019t change the mapping or field type of an existing field. Changing an existing field could invalidate data that\u2019s already indexed.</code></p><p>\u5982\u679C\u4F60\u975E\u8981\u66F4\u6539\u5DF2\u7ECF\u5B58\u5728\u7684\u5B57\u6BB5, \u5B98\u65B9\u6587\u6863\u4E0A\u7ED9\u51FA\u7684\u65B9\u6CD5\u662F, \u91CD\u5EFA\u4E00\u4E2A\u7D22\u5F15, \u5E76\u5EFA\u7ACB\u6700\u65B0\u7684\u6620\u5C04, \u4E4B\u540E\u5C06\u6570\u636E\u91CD\u65B0\u5BFC\u5165. \u6CE8\u610F: \u5982\u679C\u4F60\u53EA\u662F\u60F3\u7ED9\u4E4B\u524D\u7684\u5B57\u6BB5\u6362\u4E2A\u540D\u5B57, \u53EF\u4EE5\u4F7F\u7528<code>alias</code>\u5B57\u6BB5\u4F5C\u4E3A\u522B\u540D. \u518D\u8BF4\u4E00\u904D, \u76F4\u63A5\u66F4\u6539\u539F\u6709\u5B57\u6BB5\u4F1A\u5BFC\u81F4\u6570\u636E\u7D22\u5F15\u5931\u6548.</p><h3 id="\u67E5\u770B" tabindex="-1"><a class="header-anchor" href="#\u67E5\u770B" aria-hidden="true">#</a> \u67E5\u770B</h3><ol><li>\u67E5\u770B\u67D0\u4E2A\u7D22\u5F15\u7684\u6620\u5C04</li></ol><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code>GET /my-index/_mapping
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="https://tech.nikolazhang.top/2020-02-03-11-46-28.png" alt="2020-02-03-11-46-28" loading="lazy"> 2. \u67E5\u770B\u6620\u5C04\u7684\u67D0\u4E2A\u5B57\u6BB5</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code>GET /my-index/_mapping/field/name
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="https://tech.nikolazhang.top/2020-02-03-11-45-58.png" alt="2020-02-03-11-45-58" loading="lazy"></p>`,71);function h(k,v){const e=p("ExternalLinkIcon");return o(),l("div",null,[r,t("p",null,[n("\u4E0B\u9762\u7684\u64CD\u4F5C\u57FA\u672C\u4E0A\u662F\u6309\u7167"),t("a",c,[n("\u5B98\u7F51"),a(e)]),n("\u548C"),t("a",u,[n("\u6743\u5A01\u6307\u5357"),a(e)]),n("\u4E0A\u641E\u7684. \u4F60\u53EF\u4EE5\u70B9\u51FB\u8FDE\u63A5\u8DF3\u8F6C\u67E5\u770B. \u4F46\u662F\u9700\u8981\u6CE8\u610F\u6743\u5A01\u6307\u5357\u7684\u7248\u672C\u5DF2\u7ECF\u6709\u4E9B\u65E7\u4E86. \u4E3B\u8981\u8FD8\u662F\u6309\u7167\u5B98\u7F51\u82F1\u65877.5\u7248\u672C\u4ECB\u7ECD(\u867D\u7136\u82F1\u8BED\u4E0D\u662F\u5F88\u597D, \u52C9\u5F3A\u80FD\u591F\u7406\u89E3)")]),g])}const b=s(d,[["render",h],["__file","elasticsearch\u7CFB\u5217[3]\u5165\u95E8-\u63D2\u5165.html.vue"]]);export{b as default};
