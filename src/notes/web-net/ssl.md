---
date: 2020-04-03
title: ssl
shortTitle: ssl相关的说明
description: ssl相关的说明
tag:
  - ssl
  - 原理
category: 网络
banner: http://image.nikolazhang.top/wallhaven-nrwq11.jpg

author: nikola
icon: note

isOriginal: false
sticky: false
timeline: true
article: true
star: false

---

> ssl/tls是一个介于应用层(http协议)和传输层(tcp协议)之间的一个可选协议. 当http通信不使用该协议时, 所有的信息均以明文形式传播. 因此会产生窃听(第三方获取通信内容), 篡改(第三方修改通信内容), 冒充(第三方冒充他人身份参与通信)的风险.

原文请查看[SSL 原理说明](https://cloud.tencent.com/document/product/214/4195)

## ssl/tls协议运行过程

SSL/TLS 协议的基本思路是采用公钥加密的方法。即客户端先向服务器端索要公钥，然后使用公钥加密信息并发送至服务器端；服务器收到密文后，用自己的私钥解密。

![2020-04-03-23-52-23](https://tech.nikolazhang.top/2020-04-03-23-52-23.png)

- 如何保证公钥不被篡改？
解决方法：将公钥放在数字证书中。只要证书是可信的，公钥就是可信的。
- 公钥加密计算量太大，如何减少耗用的时间？
解决方法：每一次对话（session），客户端和服务器端都生成一个"对话密钥"（session key），用它来加密信息。由于"对话密钥"是对称加密(加密解密使用同一密钥)，所以运算速度非常快，而服务器公钥只用于加密"对话密钥"本身，这样就减少了加密运算的消耗时间。

SSL/TLS 协议的基本过程是这样的：

1. 客户端向服务器端索要并验证公钥。
2. 双方协商生成"对话密钥"。
3. 双方采用"对话密钥"进行加密通信。

上面过程的前两步，又称为"握手阶段"（handshake）。"握手阶段"涉及四次通信且所有通信都是明文传输的。

![2020-04-04-10-28-48](https://tech.nikolazhang.top/2020-04-04-10-28-48.png)

---

## SSL 双向认证具体过程

1. 浏览器发送一个连接请求给安全服务器。
2. 服务器将自己的证书，以及同证书相关的信息发送给客户浏览器。
3. 客户浏览器检查服务器送过来的证书是否是由自己信赖的 CA 中心所签发的。如果是，就继续执行协议; 如果不是，客户浏览器就给客户一个警告消息：警告客户这个证书不是可以信赖的，询问客户是否需要继续。
4. 接着客户浏览器比较证书里的消息，例如域名和公钥，与服务器刚刚发送的相关消息是否一致，如果是一致的，客户浏览器认可这个服务器的合法身份。
5. 服务器要求客户发送客户自己的证书。收到后，服务器验证客户的证书，如果没有通过验证，拒绝连接;如果通过验证，服务器获得用户的公钥。
6. 客户浏览器告诉服务器自己所能够支持的通讯对称密码方案。
7. 服务器从客户发送过来的密码方案中，选择一种加密程度最高的密码方案，用客户的公钥加过密后通知浏览器。
8. 浏览器针对这个密码方案，选择一个通话密钥，接着用服务器的公钥加过密后发送给服务器。
9. 服务器接收到浏览器送过来的消息，用自己的私钥解密，获得通话密钥。
10. 服务器、浏览器接下来的通讯都是用对称密码方案，对称密钥是加过密的。

双向认证需要服务端与客户端提供身份认证，只能是服务端允许的客户能去访问，安全性相对较高一些。

## SSL 单向认证具体过程

1. 客户端的浏览器向服务器传送客户端 SSL 协议的版本号，加密算法的种类，产生的随机数，以及其他服务器和客户端之间通讯所需要的各种信息。
2. 服务器向客户端传送 SSL 协议的版本号，加密算法的种类，随机数以及其他相关信息，同时服务器还将向客户端传送自己的证书。
3. 客户利用服务器传过来的信息验证服务器的合法性，服务器的合法性包括：证书是否过期，发行服务器证书的 CA 是否可靠，发行者证书的公钥能否正确解开服务器证书的“发行者的数字签名”，服务器证书的域名是否和服务器的实际域名相匹配。如果合法性验证没有通过，通讯将断开;如果合法性验证通过，将继续进行第四步。
4. 用户端随机产生一个用于后面通讯的“对称密码”，然后用服务器的公钥（服务器的公钥从第二步中的服务器的证书中获得）对其加密，然后将加密后的“预主密码”传给服务器。
5. 如果服务器要求客户的身份认证（在握手过程中为可选），用户可以建立一个随机数然后对其进行数据签名，将这个含有签名的随机数和客户自己的证书以及加密过的“预主密码”一起传给服务器。
6. 如果服务器要求客户的身份认证，服务器必须检验客户证书和签名随机数的合法性，具体的合法性验证过程包括：客户的证书使用日期是否有效，为客户提供证书的 CA 是否可靠，发行 CA 的公钥能否正确解开客户证书的发行 CA 的数字签名，检查客户的证书是否在证书废止列表（CRL）中。检验如果没有通过，通讯立刻中断;如果验证通过，服务器将用自己的私钥解开加密的“预主密码”，然后执行一系列步骤来产生主通讯密码(客户端也将通过同样的方法产生相同的主通讯密码)。
7. 服务器和客户端用相同的主密码即“通话密码”，一个对称密钥用于 SSL 协议的安全数据通讯的加解密通讯。同时在 SSL 通讯过程中还要完成数据通讯的完整性，防止数据通讯中的任何变化。
8. 客户端向服务器端发出信息，指明后面的数据通讯将使用的上一步中的主密码为对称密钥，同时通知服务器客户端的握手过程结束。
9. 服务器向客户端发出信息，指明后面的数据通讯将使用的上一步中的主密码为对称密钥，同时通知客户端服务器端的握手过程结束。
10. SSL 的握手部分结束，SSL 安全通道的数据通讯开始，客户和服务器开始使用相同的对称密钥进行数据通讯，同时进行通讯完整性的检验。

SSL 单向认证只要求站点部署了 SSL 证书就行，任何用户都可以去访问（IP 被限制除外等），只是服务端提供了身份认证。

## SSL 双向认证和 SSL 单向认证的区别

1. 双向认证 SSL 协议要求服务器和用户双方都有证书。单向认证 SSL 协议不需要客户拥有 CA 证书。
2. 单向认证的具体过程相对应于上面的步骤，只需将服务器端验证客户证书的过程去掉，以及在协商对称密码方案，对称通话密钥时，服务器发送给客户的是没有加过密的（这并不影响 SSL 过程的安全性）密码方案。这样，双方具体的通讯内容，就是加过密的数据，
如果有第三方攻击，获得的只是加密的数据，第三方要获得有用的信息，就需要对加密数据进行解密，这时候的安全就依赖于密码方案的安全。
目前所用的密码方案，只要通讯密钥长度足够的长，就足够安全。这也是我们使用128位加密通讯的原因。
3. 一般 Web 应用配置 SSL 单向认证即可，但部分金融行业用户的应用对接，可能会要求对客户端做身份验证，这时就需要做 SSL 双向认证。
