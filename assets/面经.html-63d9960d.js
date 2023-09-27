const e=JSON.parse('{"key":"v-66789007","path":"/guide/%E9%9D%A2%E7%BB%8F.html","title":"常用","lang":"zh-CN","frontmatter":{"description":"常用 多线程 基础数据导入 背景：通过模板任免表，批量导入人员信息，测试时由于数据量过少，采取同步导入方式，导入后，需要等后端执行完成，才返回结果。 整改的需求：想 excel 文档上传完成后，直接将结果返回，然后通过数据导入看板，实时看到导入日志。 这种情况典型使用多线程异步处理文件解析以及数据入库。 我的实现方案是： 启动类上配置@EnableAsync 注解，开启 SpringBoot 支持异步的功能 使用 ThreadPoolTaskExecutor 配置类，配置一个线程池的 bean，","head":[["meta",{"property":"og:url","content":"https://github.com/fangtianq/FTQPrivuepress-docs-starter/guide/%E9%9D%A2%E7%BB%8F.html"}],["meta",{"property":"og:site_name","content":"Valkyr"}],["meta",{"property":"og:title","content":"常用"}],["meta",{"property":"og:description","content":"常用 多线程 基础数据导入 背景：通过模板任免表，批量导入人员信息，测试时由于数据量过少，采取同步导入方式，导入后，需要等后端执行完成，才返回结果。 整改的需求：想 excel 文档上传完成后，直接将结果返回，然后通过数据导入看板，实时看到导入日志。 这种情况典型使用多线程异步处理文件解析以及数据入库。 我的实现方案是： 启动类上配置@EnableAsync 注解，开启 SpringBoot 支持异步的功能 使用 ThreadPoolTaskExecutor 配置类，配置一个线程池的 bean，"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-09-27T07:10:23.000Z"}],["meta",{"property":"article:author","content":"Valkyr"}],["meta",{"property":"article:modified_time","content":"2023-09-27T07:10:23.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"常用\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-09-27T07:10:23.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Valkyr\\",\\"url\\":\\"https://github.com/fangtianq\\"}]}"]]},"headers":[{"level":2,"title":"多线程","slug":"多线程","link":"#多线程","children":[]},{"level":2,"title":"技术积累+学习能力","slug":"技术积累-学习能力","link":"#技术积累-学习能力","children":[]}],"git":{"createdTime":1695798623000,"updatedTime":1695798623000,"contributors":[{"name":"ftq","email":"506073383@qq.com","commits":1}]},"readingTime":{"minutes":1.44,"words":431},"filePathRelative":"guide/面经.md","localizedDate":"2023年9月27日","excerpt":"<h1> 常用</h1>\\n<h2> 多线程</h2>\\n<p><code>基础数据导入</code>\\n背景：通过模板任免表，批量导入人员信息，测试时由于数据量过少，采取同步导入方式，导入后，需要等后端执行完成，才返回结果。\\n整改的需求：想 excel 文档上传完成后，直接将结果返回，然后通过数据导入看板，实时看到导入日志。\\n这种情况典型使用多线程异步处理文件解析以及数据入库。\\n我的实现方案是：</p>\\n<ol>\\n<li>启动类上配置@EnableAsync 注解，开启 SpringBoot 支持异步的功能</li>\\n<li>使用 ThreadPoolTaskExecutor 配置类，配置一个线程池的 bean，</li>\\n</ol>","autoDesc":true}');export{e as data};
