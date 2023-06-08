import{_ as i}from"./plugin-vue_export-helper-c27b6911.js";import{r as c,o as a,c as r,f as l,a as o,b as t,d as h,e}from"./app-b5bc9b99.js";const n="/images/article/25/threestore.png",g={},s=e('<h1 id="git命令笔记" tabindex="-1"><a class="header-anchor" href="#git命令笔记" aria-hidden="true">#</a> Git命令笔记</h1><h2 id="_1-工作区-暂存区-版本库" tabindex="-1"><a class="header-anchor" href="#_1-工作区-暂存区-版本库" aria-hidden="true">#</a> 1. 工作区，暂存区，版本库</h2><p><img src="'+n+'" alt="工作区，暂存区，版本库"></p><ul><li>工作区：就是你在电脑里能看到的目录。</li><li>暂存区：英文叫stage, 或index。一般存放在 &quot;.git目录下&quot; 下的index文件（.git/index）中，所以我们把暂存区有时也叫作索引（index）。</li><li>版本库：工作区有一个隐藏目录.git，这个不算工作区，而是Git的版本库。</li></ul>',4),m=e('<h3 id="_1-1-需要注意的地方" tabindex="-1"><a class="header-anchor" href="#_1-1-需要注意的地方" aria-hidden="true">#</a> 1.1 需要注意的地方</h3><ul><li><p>当执行提交操作 <code>git commit</code> 时，暂存区的目录树写到版本库（对象库）中，master 分支会做相应的更新。即 master 指向的目录树就是提交时暂存区的目录树。</p></li><li><p>当执行 <code>git reset HEAD</code> 命令时，暂存区的目录树会被重写，被 master 分支指向的目录树所替换，但是工作区不受影响。</p></li><li><p>当执行 <code>git rm --cached &lt;file&gt;</code> 命令时，会直接从暂存区删除文件，工作区则不做出改变。</p></li><li><p>当执行 <code>git checkout .</code> 或者 <code>git checkout -- &lt;file&gt;</code> 命令时，会用暂存区全部或指定的文件替换工作区的文件。这个操作很危险，会清除工作区中未添加到暂存区的改动。</p></li><li><p>当执行 <code>git checkout HEAD .</code> 或者 <code>git checkout HEAD &lt;file&gt;</code> 命令时，会用 HEAD 指向的 master 分支中的全部或者部分文件替换暂存区和以及工作区中的文件。这个命令也是极具危险性的，因为不但会清除工作区中未提交的改动，也会清除暂存区中未提交的改动。</p></li></ul><h2 id="_2-基本命令【实现创建到提交远程仓库】" tabindex="-1"><a class="header-anchor" href="#_2-基本命令【实现创建到提交远程仓库】" aria-hidden="true">#</a> 2. 基本命令【实现创建到提交远程仓库】</h2><blockquote><ol><li>初始化仓库 <code>git init [name]</code></li><li>纳入版本库 <code>git add &lt;file&gt;</code> &lt;file&gt; 支持 . name *.&lt;格式&gt;等。</li><li>提交到分支仓库 <code>git commit -m &#39;&lt;description&gt;&#39;</code></li></ol></blockquote><p>如果想从github上拷贝项目可以使用下面的命令：</p><blockquote><p>拷贝项目 <code>git clone &lt;远程项目&gt; &lt;本地仓库&gt;</code></p></blockquote><h2 id="_3-文件操作命令" tabindex="-1"><a class="header-anchor" href="#_3-文件操作命令" aria-hidden="true">#</a> 3. 文件操作命令</h2><h3 id="_3-1-创建修改文件" tabindex="-1"><a class="header-anchor" href="#_3-1-创建修改文件" aria-hidden="true">#</a> 3.1 创建修改文件</h3><p><code>vim &lt;file name&gt;</code>进入vim编辑器界面 输入想要的内容之后，按下 <code>esc</code> 退出编辑状态，按下 <code>shift+;</code> 输入 <code>wq!</code> 退出。此时文件内容已经变更。 如果输入 <code>q!</code> 则不会保存变更。</p><h3 id="_3-2-文件状态变更" tabindex="-1"><a class="header-anchor" href="#_3-2-文件状态变更" aria-hidden="true">#</a> 3.2 文件状态变更</h3><p><code>git status -s</code> 可以查看我们提交的文件的状态。 <code>git add .</code> 添加我们修改后的文件. 最后使用 <code>git commit -m &quot;&lt;description&gt;&quot;</code> 提交</p><h3 id="_3-3-状态详细信息" tabindex="-1"><a class="header-anchor" href="#_3-3-状态详细信息" aria-hidden="true">#</a> 3.3 状态详细信息</h3><p><code>git diff</code> 查看文件变更后的详细信息。</p><ul><li>尚未缓存的改动（保存后）：<code>git diff</code></li><li>查看已缓存的改动（add后）： <code>git diff --cached</code></li><li>查看已缓存的与未缓存的所有改动：<code>git diff HEAD</code></li><li>显示摘要而非整个 <code>git diff --stat</code></li><li>使用提交后，以上命令均无内容。</li></ul><h3 id="_3-3-流程简化" tabindex="-1"><a class="header-anchor" href="#_3-3-流程简化" aria-hidden="true">#</a> 3.3 流程简化</h3><p><code>git commit -a &quot;message&quot;</code> 直接提交 <code>git commit -am &quot;message&quot;</code> add后，又修改文件，提交</p><h3 id="_3-4-取消添加变更" tabindex="-1"><a class="header-anchor" href="#_3-4-取消添加变更" aria-hidden="true">#</a> 3.4 取消添加变更</h3><p><code>git reset HEAD [file name]</code> 取消已缓存的内容，使用commit后不会提交该文件，但该文件仍是变更状态。</p><h3 id="_3-5-移除" tabindex="-1"><a class="header-anchor" href="#_3-5-移除" aria-hidden="true">#</a> 3.5 移除</h3><ul><li>从 Git 中移除某个文件，必须从已跟踪文件清单中移除，然后提交。 <code>git rm &lt;file&gt;</code></li><li>如果删除之前修改过并且已经放到暂存区域的话，则必须要用强制删除选项。 <code>git rm -f &lt;file&gt;</code></li><li>如果把文件从暂存区域移除，但仍然希望保留在当前工作目录中，换句话说，仅是从跟踪清单中删除。 <code>git rm --cached &lt;file&gt;</code></li><li>可以递归删除，即如果后面跟的是一个目录做为参数，则会递归删除整个目录中的所有子目录和文件。<code>git rm –r *</code></li><li><code>git mv [file origin] [file new]</code> 命令用于移动或重命名一个文件、目录、软连接。</li></ul><h2 id="_4-分支管理" tabindex="-1"><a class="header-anchor" href="#_4-分支管理" aria-hidden="true">#</a> 4. 分支管理</h2><p>常用命令：</p><blockquote><p><code>git branch</code> 列出分支 <code>git branch &lt;branch name&gt;</code> 创建分支 <code>git checkout &lt;branch name&gt;</code> 切换分支 <code>git checkout -b &lt;branch name&gt;</code> 创建分支并且切换 <code>git merge &lt;branch name&gt;</code> 分支合并 <code>git branch -d &lt;branch name&gt;</code> 删除分支</p></blockquote><h2 id="_5-查看提交历史" tabindex="-1"><a class="header-anchor" href="#_5-查看提交历史" aria-hidden="true">#</a> 5. 查看提交历史</h2><blockquote><p><code>git log</code> 详细历史 <code>git log --oneline</code> 查看历史记录的简洁的版本。 <code>git log --graph</code> 查看历史中什么时候出现了分支、合并。 <code>git log --reverse --oneline</code> 逆向显示</p></blockquote>',25),u={href:"http://git-scm.com/docs/git-log",target:"_blank",rel:"noopener noreferrer"},_=e('<h2 id="_6-标签" tabindex="-1"><a class="header-anchor" href="#_6-标签" aria-hidden="true">#</a> 6. 标签</h2><p><code>git tag -a [标签] [历史版本号]</code> 添加标签 <code>git log --decorate</code> 查看标签 <code>git tag</code> 查看所有标签</p><h2 id="_7-远程仓库" tabindex="-1"><a class="header-anchor" href="#_7-远程仓库" aria-hidden="true">#</a> 7. 远程仓库</h2><p><code>git remote add [shortname 一般使用origin] [url]</code> 添加远程仓库 <code>git push -u [shortname] master</code> 提交到master <code>git remote</code> 查看远程仓库列表 <code>git fetch [shortname]</code> 获取远程更新 <code>git merge [shortname]/master</code> 合并 <code>git push [shortname] master</code> 推送到远程 <code>git remote rm [shortname]</code></p><h2 id="_8-其他命令" tabindex="-1"><a class="header-anchor" href="#_8-其他命令" aria-hidden="true">#</a> 8. 其他命令</h2><p>文本编辑工具 <code>git config --global core.editor emacs</code> 差异分析工具 <code>git config --global merge.tool vimdiff</code> 设置用户名 <code>git config --global user.name &quot;runoob&quot;</code> 设置邮箱 <code>git config --global user.email test@runoob.com</code> 查看文件内容 <code>cat README.md</code></p>',6);function f(p,b){const d=c("ExternalLinkIcon");return a(),r("div",null,[s,l("more"),m,o("p",null,[t("更多命令："),o("a",u,[t("git log"),h(d)])]),_])}const k=i(g,[["render",f],["__file","常用的git命令.html.vue"]]);export{k as default};
