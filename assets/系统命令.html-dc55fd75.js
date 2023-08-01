import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as a,c as e,a as s}from"./app-553961d6.js";const t={},i=s(`<h1 id="centos" tabindex="-1"><a class="header-anchor" href="#centos" aria-hidden="true">#</a> centos</h1><p>查看系统版本 cat /etc/system-release</p><h2 id="ubuntu" tabindex="-1"><a class="header-anchor" href="#ubuntu" aria-hidden="true">#</a> ubuntu</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">cat</span> /etc/issue
<span class="token punctuation">[</span>root@localhost tmp<span class="token punctuation">]</span><span class="token comment"># cat /etc/centos-release</span>
CentOS Linux release <span class="token number">7.9</span>.2009 <span class="token punctuation">(</span>AltArch<span class="token punctuation">)</span>
<span class="token punctuation">[</span>root@localhost tmp<span class="token punctuation">]</span><span class="token comment"># uname -a</span>
Linux localhost <span class="token number">4.9</span>.186-17655189 <span class="token comment">#1 SMP PREEMPT Tue Jan 14 16:36:49 KST 2020 aarch64 aarch64 aarch64 GNU/Linux</span>
<span class="token punctuation">[</span>root@localhost tmp<span class="token punctuation">]</span><span class="token comment"># uname -m</span>
aarch64
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="查看软件" tabindex="-1"><a class="header-anchor" href="#查看软件" aria-hidden="true">#</a> 查看软件</h2><p>ps aux|grep mysql</p><h2 id="termux-如何查看已安装的软件包" tabindex="-1"><a class="header-anchor" href="#termux-如何查看已安装的软件包" aria-hidden="true">#</a> Termux 如何查看已安装的软件包？</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code> Termux,是一款在手机上模拟终端的软件.内部有许多软件包，
 可用pkg install &lt;packages&gt;进行安装.
 但是，也许有人会问，如何查看已安装的软件有哪些，以及未安装的软件？其实很简单.
 pkg list-installed //显示已安装的软件
 pkg list-all // 显示所有软件
 使用以上命令即可进行查看，很方便.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),c=[i];function l(r,d){return a(),e("div",null,c)}const p=n(t,[["render",l],["__file","系统命令.html.vue"]]);export{p as default};
