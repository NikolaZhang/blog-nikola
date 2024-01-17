import{_ as t}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as i,o as n,c as d,a as e,b as a,d as h,e as o}from"./app-Y4FVIHIl.js";const c={},l=e("blockquote",null,[e("p",null,"简单记录一下多线程的东西")],-1),s=e("h2",{id:"线程的状态",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#线程的状态","aria-hidden":"true"},"#"),a(" 线程的状态")],-1),p={href:"https://www.cnblogs.com/happy-coder/p/6587092.html",target:"_blank",rel:"noopener noreferrer"},_=o('<p>线程共包括以下5种状态:</p><ol><li>新建状态(New): 线程对象被创建后，就进入了新建状态。例如，Thread thread = new Thread()。</li><li>就绪状态(Runnable): 也被称为“可执行状态”。线程对象被创建后，其它线程调用了该对象的start()方法，从而来启动该线程。例如，thread.start()。处于就绪状态的线程，随时可能被CPU调度执行。</li><li>运行状态(Running): 线程获取CPU权限进行执行。需要注意的是，线程只能从就绪状态进入到运行状态。</li><li>阻塞状态(Blocked): 阻塞状态是线程因为某种原因放弃CPU使用权，暂时停止运行。直到线程进入就绪状态，才有机会转到运行状态。<br> 阻塞的情况分三种：<br> (01) 等待阻塞 -- 通过调用线程的wait()方法，让线程等待某工作的完成。<br> (02) 同步阻塞 -- 线程在获取synchronized同步锁失败(因为锁被其它线程所占用)，它会进入同步阻塞状态。<br> (03) 其他阻塞 -- 通过调用线程的sleep()或join()或发出了I/O请求时，线程会进入到阻塞状态。当sleep()状态超时、join()等待线程终止或者超时、或者I/O处理完毕时，线程重新转入就绪状态。</li><li>死亡状态(Dead): 线程执行完了或者因异常退出了run()方法，该线程结束生命周期。</li></ol><p><img src="https://tech.nikolazhang.top/2020-04-06-19-04-29.png" alt="2020-04-06-19-04-29"></p><h3 id="yield-与-wait-的比较" tabindex="-1"><a class="header-anchor" href="#yield-与-wait-的比较" aria-hidden="true">#</a> yield() 与 wait()的比较</h3><ol><li>状态切换不同: wait()是让线程由“运行状态”进入到“等待(阻塞)状态”，而不yield()是让线程由“运行状态”进入到“就绪状态”。</li><li>是否释放锁: wait()是会线程释放它所持有对象的同步锁，而yield()方法不会释放锁。</li></ol><h3 id="为什么notify-wait-等函数定义在object中-而不是thread中" tabindex="-1"><a class="header-anchor" href="#为什么notify-wait-等函数定义在object中-而不是thread中" aria-hidden="true">#</a> 为什么notify(), wait()等函数定义在Object中，而不是Thread中</h3><p>notify(), wait()依赖于“同步锁”，而“同步锁”是对象锁持有，并且每个对象有且仅有一个！这就是为什么notify(), wait()等函数定义在Object类，而不是Thread类中的原因。</p><h2 id="锁" tabindex="-1"><a class="header-anchor" href="#锁" aria-hidden="true">#</a> 锁</h2><h3 id="乐观锁和悲观锁" tabindex="-1"><a class="header-anchor" href="#乐观锁和悲观锁" aria-hidden="true">#</a> 乐观锁和悲观锁</h3><p>悲观锁: 处理之前获取锁并进行加锁, 处理之后进行释放. 持有锁的过程中, 数据不可以被其他线程修改.<br> 乐观锁: 只有在提交时, 进行数据的判断(通过版本号, 主要是数据库的概念), 如果提交失败可选择重试, 抛出异常等操作.</p><h3 id="公平锁和非公平锁" tabindex="-1"><a class="header-anchor" href="#公平锁和非公平锁" aria-hidden="true">#</a> 公平锁和非公平锁</h3><p>公平锁: 按照请求锁的时间先后进行线程处理.<br> 非公平锁: 没有时间顺序.</p><h3 id="独占锁和共享锁" tabindex="-1"><a class="header-anchor" href="#独占锁和共享锁" aria-hidden="true">#</a> 独占锁和共享锁</h3><p>锁能否被多个线程共同持有. 独占锁是一种悲观锁, 共享锁是一种乐观锁.</p><h3 id="可重入锁" tabindex="-1"><a class="header-anchor" href="#可重入锁" aria-hidden="true">#</a> 可重入锁</h3><p>线程是否可以再次获取已经获取的锁.<br> ReentrantLock, synchronized都是可重入锁</p><h3 id="自旋锁" tabindex="-1"><a class="header-anchor" href="#自旋锁" aria-hidden="true">#</a> 自旋锁</h3><p>当一个线程在获取锁的时候，如果锁已经被其它线程获取，该线程不会立刻阻塞, 而是不断尝试获取锁，直到获取到锁才会退出循环。<br><code>-XX:PreBlockSpinsh</code>可以设置获取的次数, 默认值为10. 只有在没有获取到的情况下才会进入阻塞状态.</p><p>自旋锁是使用cpu时间换区线程阻塞与调度的开销, 但是这些cpu时间很有可能被浪费掉.</p>',19);function b(f,u){const r=i("ExternalLinkIcon");return n(),d("div",null,[l,s,e("p",null,[a("内容来自"),e("a",p,[a("JAVA 线程状态及转化"),h(r)])]),_])}const m=t(c,[["render",b],["__file","线程的状态和锁.html.vue"]]);export{m as default};
