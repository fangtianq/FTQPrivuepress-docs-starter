const e=JSON.parse('{"key":"v-3df8bb46","path":"/guide/qa.html","title":"常见问题","lang":"zh-CN","frontmatter":{"title":"常见问题","icon":"ask","order":4,"category":["使用指南"],"tag":["问题"],"star":true,"description":"问题自查 接口对应关系 Microsoft Speech API：对应微软演示页面的接口，稳定性不佳，但是免费 Edge Speech API：对应Edge浏览器的大声朗读接口，稳定性还行，免费，但是有单次的长度限制，具体限制未知，并且该接口未对文本切片 Azure Speech API：微软TTS的正式接口，稳定性最佳，每月50W字符免费，推荐有能力的人使用，需要微软账号。 Azure Speech API使用，key和region获取 微软文本转语音文档 微软文本转语音概述 微软文本转语音快速入门 【重要：请仔细阅读先决条件，里面有如何获取key和region】 Azure 订阅 - 免费创建订阅 在 Azure 门户中创建语音资源。 获取语音资源密钥和区域。 部署语音资源后，选择“转到资源”以查看和管理密钥。 有关 Azure AI 服务资源的详细信息，请参阅获取资源密钥。 拿到key和region后填入设置页面的相应区域。","head":[["meta",{"property":"og:url","content":"https://github.com/fangtianq/FTQPrivuepress-docs-starter/guide/qa.html"}],["meta",{"property":"og:site_name","content":"Loker小站"}],["meta",{"property":"og:title","content":"常见问题"}],["meta",{"property":"og:description","content":"问题自查 接口对应关系 Microsoft Speech API：对应微软演示页面的接口，稳定性不佳，但是免费 Edge Speech API：对应Edge浏览器的大声朗读接口，稳定性还行，免费，但是有单次的长度限制，具体限制未知，并且该接口未对文本切片 Azure Speech API：微软TTS的正式接口，稳定性最佳，每月50W字符免费，推荐有能力的人使用，需要微软账号。 Azure Speech API使用，key和region获取 微软文本转语音文档 微软文本转语音概述 微软文本转语音快速入门 【重要：请仔细阅读先决条件，里面有如何获取key和region】 Azure 订阅 - 免费创建订阅 在 Azure 门户中创建语音资源。 获取语音资源密钥和区域。 部署语音资源后，选择“转到资源”以查看和管理密钥。 有关 Azure AI 服务资源的详细信息，请参阅获取资源密钥。 拿到key和region后填入设置页面的相应区域。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-07-26T03:40:12.000Z"}],["meta",{"property":"article:author","content":"Loker"}],["meta",{"property":"article:tag","content":"问题"}],["meta",{"property":"article:modified_time","content":"2023-07-26T03:40:12.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"常见问题\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-07-26T03:40:12.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Loker\\",\\"url\\":\\"https://github.com/fangtianq\\"}]}"]]},"headers":[{"level":2,"title":"问题自查","slug":"问题自查","link":"#问题自查","children":[{"level":3,"title":"接口对应关系","slug":"接口对应关系","link":"#接口对应关系","children":[]},{"level":3,"title":"Azure Speech API使用，key和region获取","slug":"azure-speech-api使用-key和region获取","link":"#azure-speech-api使用-key和region获取","children":[]},{"level":3,"title":"转换失败检查：","slug":"转换失败检查","link":"#转换失败检查","children":[]},{"level":3,"title":"问题自查：","slug":"问题自查-1","link":"#问题自查-1","children":[]}]},{"level":2,"title":"网络异常？","slug":"网络异常","link":"#网络异常","children":[]},{"level":2,"title":"转换时间过长或转换失败如何查看原因 ？","slug":"转换时间过长或转换失败如何查看原因","link":"#转换时间过长或转换失败如何查看原因","children":[]},{"level":2,"title":"如何调整多音字的读音或添加中断或暂停等 ？","slug":"如何调整多音字的读音或添加中断或暂停等","link":"#如何调整多音字的读音或添加中断或暂停等","children":[]},{"level":2,"title":"批量转换失败或者听到都是“汪汪汪”(one one one)的声音","slug":"批量转换失败或者听到都是-汪汪汪-one-one-one-的声音","link":"#批量转换失败或者听到都是-汪汪汪-one-one-one-的声音","children":[]},{"level":2,"title":"点击下载没反应，下载文件为文本文档？","slug":"点击下载没反应-下载文件为文本文档","link":"#点击下载没反应-下载文件为文本文档","children":[]}],"git":{"createdTime":1690342812000,"updatedTime":1690342812000,"contributors":[{"name":"ftq","email":"506073383@qq.com","commits":1}]},"readingTime":{"minutes":5.33,"words":1598},"filePathRelative":"guide/qa.md","localizedDate":"2023年7月26日","excerpt":"<h2> 问题自查</h2>\\n<h3> 接口对应关系</h3>\\n<ol>\\n<li>Microsoft Speech API：对应微软演示页面的接口，稳定性不佳，但是免费</li>\\n<li>Edge Speech API：对应Edge浏览器的大声朗读接口，稳定性还行，免费，但是有单次的长度限制，具体限制未知，并且该接口未对文本切片</li>\\n<li>Azure Speech API：微软TTS的正式接口，稳定性最佳，每月50W字符免费，推荐有能力的人使用，需要微软账号。</li>\\n</ol>\\n<h3> Azure Speech API使用，key和region获取</h3>\\n<ul>\\n<li><a href=\\"https://learn.microsoft.com/zh-cn/azure/ai-services/speech-service/index-text-to-speech\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">微软文本转语音文档</a></li>\\n<li><a href=\\"https://learn.microsoft.com/zh-cn/azure/ai-services/speech-service/text-to-speech\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">微软文本转语音概述</a></li>\\n<li><a href=\\"https://learn.microsoft.com/zh-cn/azure/ai-services/speech-service/get-started-text-to-speech?tabs=windows%2Cterminal&amp;pivots=programming-language-javascript#prerequisites\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">微软文本转语音快速入门</a> <strong>【重要：请仔细阅读先决条件，里面有如何获取<code>key</code>和<code>region</code>】</strong>\\n<ul>\\n<li>Azure 订阅 - 免费创建订阅</li>\\n<li>在 Azure 门户中创建语音资源。</li>\\n<li>获取语音资源密钥和区域。 部署语音资源后，选择“转到资源”以查看和管理密钥。 有关 Azure AI 服务资源的详细信息，请参阅获取资源密钥。</li>\\n</ul>\\n</li>\\n<li>拿到key和region后填入设置页面的相应区域。</li>\\n</ul>","autoDesc":true}');export{e as data};
