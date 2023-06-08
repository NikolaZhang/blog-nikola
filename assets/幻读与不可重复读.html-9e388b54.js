import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{r as o,o as s,c as r,a as e,b as t,d as i}from"./app-b5bc9b99.js";const l={},c=e("blockquote",null,[e("p",null,"关于mysql在重复读和读提交事务级别幻读和不可重复读的分析")],-1),d=e("h2",{id:"repeatable-read-与-read-committed",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#repeatable-read-与-read-committed","aria-hidden":"true"},"#"),t(" REPEATABLE READ 与 READ COMMITTED")],-1),h={href:"https://dev.mysql.com/doc/refman/8.0/en/glossary.html",target:"_blank",rel:"noopener noreferrer"},m=e("blockquote",null,[e("p",null,"REPEATABLE READ The default isolation level for . It prevents any rows that are queried from being changed by other transactions, thus blocking non-repeatable reads but not phantom reads. It uses a moderately strict locking strategy so that all queries within a transaction see data from the same snapshot, that is, the data as it was at the time the transaction started. InnoDB"),e("p",null,"READ COMMITTED An isolation level that uses a locking strategy that relaxes some of the protection between transactions, in the interest of performance. Transactions cannot see uncommitted data from other transactions, but they can see data that is committed by another transaction after the current transaction started. Thus, a transaction never sees any bad data, but the data that it does see may depend to some extent on the timing of other transactions.")],-1),_=e("p",null,"READ COMMITTED级别下一个事务不能读取其他事务未提交的数据, 只可以读取到其他事务提交的数据. 因此, 从定义上看该级别可以避免脏读现象, 同时当其他事务修改数据后提交, 也可以读取, 因此不可重复读(也就是读不到事务开始后, 创建其他事务修改提交的那个数据的原始数据了). 增加删除这种操作提交后, 事务也可以读取, 因此也无法避免幻读.",-1),u=e("p",null,"REPEATABLE READ可以实现可重复读, 它可以防止当前事务读取的数据被其他事务进行修改. 但是不能避免幻读现象. 它是通过事务开始后建立查询的快照, 当前事务的数据都会从快照中获取. 另外, 增加删除的数据无法建立快照, 因此不可避免幻读. 但是也是要注意条件无法锁定, 但之后插入了符合该条件的数据. 由于之前已经建立快照, 因此也是不可读取的.",-1),p=e("p",null,"还有另外两个事务级别read-uncommitted和serializable, read-uncommitted会读取其他事务未提交的数据(脏读), serializable读写都会加锁, 并发性能差因此这两个级别一般不怎么使用.",-1);function f(E,b){const a=o("ExternalLinkIcon");return s(),r("div",null,[c,d,e("p",null,[e("a",h,[t("官方解释"),i(a)])]),m,_,u,p])}const y=n(l,[["render",f],["__file","幻读与不可重复读.html.vue"]]);export{y as default};
