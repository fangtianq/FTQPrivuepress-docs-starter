import{_ as l}from"./plugin-vue_export-helper-c27b6911.js";import{r,o as d,c as t,a as n,b as s,d as e,e as i}from"./app-d9a27c36.js";const c={},o=i(`<h1 id="初始化" tabindex="-1"><a class="header-anchor" href="#初始化" aria-hidden="true">#</a> 初始化</h1><h2 id="最开始" tabindex="-1"><a class="header-anchor" href="#最开始" aria-hidden="true">#</a> 最开始</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">apt</span> upgrade <span class="token operator">&amp;&amp;</span> <span class="token function">apt</span> update
pkg update
<span class="token function">passwd</span>
<span class="token function">whoami</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-ssh-config line-numbers-mode" data-ext="ssh-config"><pre class="language-ssh-config"><code>vim /etc/profile

export JAVA_HOME=/root/soft/jdk-17.0.6
#export JAVA_HOME=/root/soft/jdk1.8.0_361
export CLASSPATH=$JAVA_HOME/lib:$CLASSPATH
#export NODEHOME=/root/soft/node-v16.15.0-linux-arm64
export NODEHOME=/root/soft/node-v14.21.3-linux-arm64
#export PNPM_HOME=/root/soft/node-v16.15.0-linux-arm64/pnpm
export PNPM_HOME=/root/soft/node-v14.21.3-linux-arm64/pnpm
export PATH=$PNPM_HOME:$NODEHOME/bin:$JAVA_HOME/bin:$PATH


export LANG=zh_CN.UTF-8
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="termux-获取-root-权限-需要-root" tabindex="-1"><a class="header-anchor" href="#termux-获取-root-权限-需要-root" aria-hidden="true">#</a> Termux 获取 root 权限（需要 root）</h2><p>1.安装: pkg install tsu<br> 装好后命令: tsu ,手机上会弹窗,永久允许<br> 2.在手机-&gt;设置-&gt;应用权限管理-&gt;Termux-&gt;开启读写储存<br> 3.在 CentOS 系统的根目录,命令 chmod 777 / 设置根目录权限,测试 mkdir www 成功创建文件夹</p><h2 id="termux-安装-openssh" tabindex="-1"><a class="header-anchor" href="#termux-安装-openssh" aria-hidden="true">#</a> Termux 安装 openssh</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>pkg uninstall openssh
pkg <span class="token function">install</span> openssh
客户端ssh连接端口号为：8022
sshd
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="后台运行" tabindex="-1"><a class="header-anchor" href="#后台运行" aria-hidden="true">#</a> 后台运行</h2><p>termux-wake-unlock</p><h2 id="获取存储权限" tabindex="-1"><a class="header-anchor" href="#获取存储权限" aria-hidden="true">#</a> 获取存储权限</h2><p>termux-setup-storage</p><h2 id="安装-mysql" tabindex="-1"><a class="header-anchor" href="#安装-mysql" aria-hidden="true">#</a> 安装 mysql</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>pkg <span class="token function">install</span> mariadb <span class="token parameter variable">-y</span>
pkg uninstall mariadb
启动服务
mysqld <span class="token parameter variable">-u</span> root
或者
<span class="token function">nohup</span> mysqld <span class="token parameter variable">-u</span> root <span class="token operator">&amp;</span>
mysql <span class="token parameter variable">-u</span> root
show databases<span class="token punctuation">;</span>

远程连接（新）
USE mysql<span class="token punctuation">;</span>
UPDATE mysql.global_priv SET <span class="token assign-left variable">Host</span><span class="token operator">=</span><span class="token string">&#39;%&#39;</span> WHERE <span class="token assign-left variable">User</span><span class="token operator">=</span><span class="token string">&#39;root&#39;</span><span class="token punctuation">;</span>
FLUSH PRIVILEGES<span class="token punctuation">;</span>
远程连接（旧）
<span class="token keyword">select</span> host, user, password from user<span class="token punctuation">;</span>
UPDATE user SET <span class="token assign-left variable">host</span><span class="token operator">=</span>‘%‘ WHERE <span class="token assign-left variable">host</span><span class="token operator">=</span>‘localhost‘<span class="token punctuation">;</span>
FLUSH PRIVILEGES<span class="token punctuation">;</span>

关闭服务
<span class="token function">pkill</span> mysql
登录
mysql <span class="token parameter variable">-u</span> <span class="token variable"><span class="token variable">$(</span><span class="token function">whoami</span><span class="token variable">)</span></span>
use mysql<span class="token punctuation">;</span><span class="token builtin class-name">set</span> password <span class="token keyword">for</span> <span class="token string">&#39;root&#39;</span>@<span class="token string">&#39;localhost&#39;</span> <span class="token operator">=</span> password<span class="token punctuation">(</span><span class="token string">&#39;root&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
flush privileges<span class="token punctuation">;</span>
quit<span class="token punctuation">;</span>
mysql_secure_installation

You can start the MariaDB daemon with:
<span class="token builtin class-name">cd</span> <span class="token string">&#39;/data/data/com.termux/files/usr&#39;</span> <span class="token punctuation">;</span> /data/data/com.termux/files/usr/bin/mariadb-safe <span class="token parameter variable">--datadir</span><span class="token operator">=</span><span class="token string">&#39;/data/data/com.termux/files/usr/var/lib/mysql&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="配置-mysql" tabindex="-1"><a class="header-anchor" href="#配置-mysql" aria-hidden="true">#</a> 配置 mysql</h2>`,15),v=n("br",null,null,-1),u=n("br",null,null,-1),p={href:"https://www.jianshu.com/p/3f242e4678a0",target:"_blank",rel:"noopener noreferrer"},m=n("br",null,null,-1),b=n("br",null,null,-1),h={href:"https://mathiasbynens.be/notes/mysql-utf8mb4#utf8-to-utf8mb4",target:"_blank",rel:"noopener noreferrer"},k=i(`<div class="language-ssh-config line-numbers-mode" data-ext="ssh-config"><pre class="language-ssh-config"><code>[client-server]

[client]
default-character-set = utf8mb4

[mysqld]
character-set-client-handshake = FALSE
character-set-server = utf8mb4
collation-server = utf8mb4_unicode_ci
lower_case_table_names = 1

sql_mode=STRICT_TRANS_TABLES,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION,IGNORE_SPACE,ANSI_QUOTES


[mysql]
default-character-set = utf8mb4

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="安装-nmap" tabindex="-1"><a class="header-anchor" href="#安装-nmap" aria-hidden="true">#</a> 安装 nmap</h2><p>pkg install nmap</p><h2 id="安装-linux" tabindex="-1"><a class="header-anchor" href="#安装-linux" aria-hidden="true">#</a> 安装 Linux</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">cp</span> storage/external-1/termux/install_linux.sh <span class="token builtin class-name">.</span>
<span class="token function">cp</span> storage/external-1/termux/centos.tar.xz <span class="token builtin class-name">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="安装其他系统-用大佬一键脚本" tabindex="-1"><a class="header-anchor" href="#安装其他系统-用大佬一键脚本" aria-hidden="true">#</a> 安装其他系统,用大佬一键脚本</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>//一行一行输入
pkg <span class="token function">install</span> proot <span class="token function">git</span> python <span class="token parameter variable">-y</span>
<span class="token function">git</span> clone <span class="token operator">&lt;</span>https://github.com/sqlsec/termux-install-linux<span class="token operator">&gt;</span>
<span class="token builtin class-name">cd</span> termux-install-linux
python termux-linux-install.py

进入linux系统,每个系统名称路径不同
<span class="token builtin class-name">cd</span> ~/Termux-Linux/Ubuntu
./start-ubuntu.sh
<span class="token builtin class-name">cd</span> ~/Termux-Linux/CentOS
./start-centos.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="中文乱码" tabindex="-1"><a class="header-anchor" href="#中文乱码" aria-hidden="true">#</a> 中文乱码</h2>`,8),g={href:"https://zhuanlan.zhihu.com/p/545779155",target:"_blank",rel:"noopener noreferrer"},f=i(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">vim</span> /etc/sysconfig/i18n
<span class="token assign-left variable"><span class="token environment constant">LANG</span></span><span class="token operator">=</span><span class="token string">&quot;zh_CN.UTF-8&quot;</span>
<span class="token assign-left variable"><span class="token environment constant">LC_ALL</span></span><span class="token operator">=</span><span class="token string">&quot;zh_CN.UTF-8&quot;</span>
<span class="token builtin class-name">source</span> /etc/sysconfig/i18n
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="安装系统包" tabindex="-1"><a class="header-anchor" href="#安装系统包" aria-hidden="true">#</a> 安装系统包</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>yum <span class="token function">install</span> gcc gcc-c++ freetype-devel glib2-devel cairo-devel
yum <span class="token function">install</span> gcc*
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="替换-ps" tabindex="-1"><a class="header-anchor" href="#替换-ps" aria-hidden="true">#</a> 替换 ps</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">cp</span> storage/external-1/termux/toybox-aarch64 centos/root/soft/.
<span class="token function">mv</span> /usr/bin/ps /usr/bin/psbak
<span class="token function">mv</span> toybox-aarch64 /usr/bin/ps
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="安装-jdk" tabindex="-1"><a class="header-anchor" href="#安装-jdk" aria-hidden="true">#</a> 安装 jdk</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">cp</span> storage/external-1/termux/jdk-17.0.6_linux-aarch64_bin.tar.gz centos/root/soft/.
<span class="token function">tar</span> <span class="token parameter variable">-zxvf</span> jdk-17.0.6_linux-aarch64_bin.tar.gz

<span class="token builtin class-name">export</span> <span class="token assign-left variable">JAVA_HOME</span><span class="token operator">=</span>/root/soft/jdk-17.0.6
<span class="token builtin class-name">export</span> <span class="token assign-left variable">CLASSPATH</span><span class="token operator">=</span><span class="token variable">$JAVA_HOME</span>/lib:<span class="token variable">$CLASSPATH</span>
<span class="token builtin class-name">export</span> <span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span><span class="token variable">$JAVA_HOME</span>/bin:<span class="token environment constant">$PATH</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="安装-nodejs" tabindex="-1"><a class="header-anchor" href="#安装-nodejs" aria-hidden="true">#</a> 安装 nodejs</h2>`,8),x={href:"https://nodejs.org/dist/v18.16.0/node-v18.16.0-linux-arm64.tar.xz",target:"_blank",rel:"noopener noreferrer"},_=n("h2",{id:"安装-alist",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#安装-alist","aria-hidden":"true"},"#"),s(" 安装 alist")],-1),T={href:"https://alist.nn.ci/zh/guide/install/script.html",target:"_blank",rel:"noopener noreferrer"},E=i(`<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">curl</span> <span class="token parameter variable">-fsSL</span> <span class="token string">&quot;https://alist.nn.ci/v3.sh&quot;</span> <span class="token operator">|</span> <span class="token function">bash</span> <span class="token parameter variable">-s</span> <span class="token function">install</span>
<span class="token builtin class-name">cd</span> /opt/alist
./alist start
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="安装-jenkins" tabindex="-1"><a class="header-anchor" href="#安装-jenkins" aria-hidden="true">#</a> 安装 jenkins</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>启动：
<span class="token function">nohup</span> <span class="token function">java</span> <span class="token parameter variable">-Dhudson.model.DownloadService.noSignatureCheck</span><span class="token operator">=</span>true <span class="token parameter variable">-jar</span> jenkins.war <span class="token parameter variable">--prefix</span><span class="token operator">=</span>/jenkins <span class="token operator">&gt;</span> jenkins.log <span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span><span class="token file-descriptor important">&amp;1</span> <span class="token parameter variable">--httpPort</span><span class="token operator">=</span><span class="token number">7000</span> <span class="token operator">&amp;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="安装-nginx" tabindex="-1"><a class="header-anchor" href="#安装-nginx" aria-hidden="true">#</a> 安装 nginx</h2><p>1.添加 CentOS 7 Nginx yum 资源库</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">rpm</span> <span class="token parameter variable">-Uvh</span>  http://nginx.org/packages/centos/7/noarch/RPMS/nginx-release-centos-7-0.el7.ngx.noarch.rpm

<span class="token number">2</span>.安装nginx
yum <span class="token parameter variable">-y</span> <span class="token function">install</span> nginx   //安装nginx
<span class="token number">3</span>.修改配置
/etc/nginx/nginx.conf  //yum方式安装后默认配置文件的路径
/usr/share/nginx/html  //nginx网站默认存放目录
/usr/share/nginx/html/index.html //网站默认主页路径
nginx日志文件在路径“/var/log/nginx”下,指的是nginx日志默认路径
<span class="token number">4</span>.启动nginx
nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="安装-lrzsz" tabindex="-1"><a class="header-anchor" href="#安装-lrzsz" aria-hidden="true">#</a> 安装 lrzsz</h2><p>yum install lrzsz</p><h2 id="安装-aria2-端口-6800" tabindex="-1"><a class="header-anchor" href="#安装-aria2-端口-6800" aria-hidden="true">#</a> 安装 aria2(端口 6800)</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">tar</span> <span class="token parameter variable">-zxvf</span> aria2-1.36.0.tar.gz
./configure
<span class="token function">make</span>
<span class="token function">make</span> <span class="token function">install</span>
创建aria2配置文件
<span class="token function">mkdir</span> ~/.aria2
<span class="token function">touch</span> ~/.aria2/aria2.session
<span class="token function">vi</span> ~/.aria2/aria2.conf
在raia2.conf文件内添加下面的内容（如果配置文件路径和本例不一样，需要自行修改）：
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-ssh-config line-numbers-mode" data-ext="ssh-config"><pre class="language-ssh-config"><code>## 文件保存相关 ##
# 文件的保存路径(可使用绝对路径或相对路径), 默认: 当前启动位置
dir=/home/downloads
# 启用磁盘缓存, 0为禁用缓存, 需1.16以上版本, 默认:16M
#disk-cache=32M
# 文件预分配方式, 能有效降低磁盘碎片, 默认:prealloc
# 预分配所需时间: none &lt; falloc ? trunc &lt; prealloc
# falloc和trunc则需要文件系统和内核支持
# NTFS建议使用falloc, EXT3/4建议trunc, MAC 下需要注释此项
file-allocation=none
# 断点续传
continue=true
## 下载连接相关 ##
# 最大同时下载任务数, 运行时可修改, 默认:5
max-concurrent-downloads=1
# 同一服务器连接数, 添加时可指定, 默认:1
max-connection-per-server=5
# 最小文件分片大小, 添加时可指定, 取值范围1M -1024M, 默认:20M
# 假定size=10M, 文件为20MiB 则使用两个来源下载; 文件为15MiB 则使用一个来源下载
min-split-size=10M
# 单个任务最大线程数, 添加时可指定, 默认:5
split=5
# 整体下载速度限制, 运行时可修改, 默认:0
#max-overall-download-limit=0
# 单个任务下载速度限制, 默认:0
#max-download-limit=0
# 整体上传速度限制, 运行时可修改, 默认:0
#max-overall-upload-limit=0
# 单个任务上传速度限制, 默认:0
#max-upload-limit=0
# 禁用IPv6, 默认:false
disable-ipv6=true
## 进度保存相关 ##
# 从会话文件中读取下载任务
input-file=/root/.aria2/aria2.session
# 在Aria2退出时保存\`错误/未完成\`的下载任务到会话文件
save-session=/root/.aria2/aria2.session
# 定时保存会话, 0为退出时才保存, 需1.16.1以上版本, 默认:0
#save-session-interval=60
## RPC相关设置 ##
# 启用RPC, 默认:false
enable-rpc=true
# 允许所有来源, 默认:false
rpc-allow-origin-all=true
# 允许非外部访问, 默认:false
rpc-listen-all=true
# 事件轮询方式, 取值:[epoll, kqueue, port, poll, select], 不同系统默认值不同
#event-poll=select
# RPC监听端口, 端口被占用时可以修改, 默认:6800
#rpc-listen-port=6800
# 设置的RPC授权令牌, v1.18.4新增功能, 取代 --rpc-user 和 --rpc-passwd 选项
#rpc-secret=&lt;token&gt;
# 设置的RPC访问用户名, 此选项新版已废弃, 建议改用 --rpc-secret 选项
#rpc-user=&lt;user&gt;
# 设置的RPC访问密码, 此选项新版已废弃, 建议改用 --rpc-secret 选项
#rpc-passwd=&lt;passwd&gt;
## BT/PT下载相关 ##
# 当下载的是一个种子(以.torrent结尾)时, 自动开始BT任务, 默认:true
#follow-torrent=true
# BT监听端口, 当端口被屏蔽时使用, 默认:6881-6999
listen-port=51413
# 单个种子最大连接数, 默认:55
#bt-max-peers=55
# 打开DHT功能, PT需要禁用, 默认:true
enable-dht=false
# 打开IPv6 DHT功能, PT需要禁用
#enable-dht6=false
# DHT网络监听端口, 默认:6881-6999
#dht-listen-port=6881-6999
# 本地节点查找, PT需要禁用, 默认:false
#bt-enable-lpd=false
# 种子交换, PT需要禁用, 默认:true
enable-peer-exchange=false
# 每个种子限速, 对少种的PT很有用, 默认:50K
#bt-request-peer-speed-limit=50K
# 客户端伪装, PT需要
peer-id-prefix=-TR2770-
user-agent=Transmission/2.77
# 当种子的分享率达到这个数时, 自动停止做种, 0为一直做种, 默认:1.0
seed-ratio=0
# 强制保存会话, 即使任务已经完成, 默认:false
# 较新的版本开启后会在任务完成后依然保留.aria2文件
#force-save=false
# BT校验相关, 默认:true
#bt-hash-check-seed=true
# 继续之前的BT任务时, 无需再次校验, 默认:false
bt-seed-unverified=true
# 保存磁力链接元数据为种子文件(.torrent文件), 默认:false
bt-save-metadata=true
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>运行测试Aria2c：
aria2c –conf-path<span class="token operator">=</span>/root/.aria2/aria2.conf
启动
/usr/local/bin/aria2c --conf-path<span class="token operator">=</span>/root/.aria2/aria2.conf <span class="token parameter variable">-D</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,12);function y(A,P){const a=r("ExternalLinkIcon");return d(),t("div",null,[o,n("p",null,[s("/data/data/com.termux/files/usr/etc/my.cnf"),v,s(" 忽略大小写"),u,n("a",p,[s("https://www.jianshu.com/p/3f242e4678a0"),e(a)]),m,s(" 修改默认字符集"),b,n("a",h,[s("https://mathiasbynens.be/notes/mysql-utf8mb4#utf8-to-utf8mb4"),e(a)])]),k,n("p",null,[n("a",g,[s("https://zhuanlan.zhihu.com/p/545779155"),e(a)])]),f,n("p",null,[n("a",x,[s("https://nodejs.org/dist/v18.16.0/node-v18.16.0-linux-arm64.tar.xz"),e(a)]),s(" tar -xvJf node-v16.15.0-linux-arm64.tar.xz")]),_,n("p",null,[n("a",T,[s("https://alist.nn.ci/zh/guide/install/script.html"),e(a)])]),E])}const q=l(c,[["render",y],["__file","初始化.html.vue"]]);export{q as default};
