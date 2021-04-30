---
title: Typora 图床问题 && PicGo 软件
date: '2021-04-21'
sidebar: 'auto'
categories:
    - 工具
tags:
    - 图床
    - Typora
    - PicGo
---

![](https://markdown-typora.oss-cn-shenzhen.aliyuncs.com/20210428141405.jpeg#id=xVQ1u&originHeight=420&originWidth=746&originalType=binary&status=done&style=none)<br />

<a name="6d9ccd88"></a>
### Typora 图床问题

<br />![](https://markdown-typora.oss-cn-shenzhen.aliyuncs.com/20210428141332.png#id=FwIuT&originHeight=220&originWidth=1280&originalType=binary&status=done&style=none)<br />
<br />Typora 描述为 「A truly minimal markdown editor. 」<br />
<br />Typora 是一款**支持实时预览的 Markdown 文本编辑器**。它有 OS X、Windows、Linux 三个平台的版本，并且由于仍在测试中，是**完全免费**的。<br />
<br />在尝试了很多款MarkDown文本编辑器之后，最终选择这款视觉效果，功能，简洁；<br />
<br />但是在Winodw下有一个致命的问题，md上所附带的图片，在转移markdown文件的时候，会失效；<br />
<br />在网上尝试很多方法：<br />

1. 通过云盘进行手动备份；
1. 通过网上图床手动转化；
1. 导出pdf格式；



<a name="5ab9f010"></a>
### PicGo 软件

<br />[typora-plugins-win-img](https://github.com/Thobian/typora-plugins-win-img)<br />
<br />大致做法是：在七牛云等之类的网上盘进行存储，通过特定代码替换Typora进行其中文件和实现自动上传，自己也去实现了，但是因为Typora版本更新等问题，操作要多一些比较麻烦；<br />
<br />后来去看了最新版本的Typora-0.9.86(beta)，已经支持PicGo图床设置<br />

<a name="PicGo"></a>
### PicGo

<br />[PicGo](https://github.com/PicGo/Awesome-PicGo)<br />
<br />![](https://markdown-typora.oss-cn-shenzhen.aliyuncs.com/20210428141341.png#id=XmhX2&originHeight=209&originWidth=278&originalType=binary&status=done&style=none)<br />
<br />实现方法与上面的插件类似，只是把功能点进行内置了；<br />

1. 先去安装PicGo & 配置网上仓库
   - Github上的网速真的龟速，BZ下了半天，好不容易下了一次，自己重新存了一份备份，供大家下载[PicGo Windows版本](https://gitee.com/palapple/SoftWare)
   - 可以配置很多网上仓库，包括github，BZ使用的是七牛云



网上云仓库配置

2. Typora内部设置<br />
<br />![](https://markdown-typora.oss-cn-shenzhen.aliyuncs.com/20210428141345.png#id=tS3dW&originHeight=561&originWidth=1107&originalType=binary&status=done&style=none)<br />
<br />**之后使用Typora就可以完美使用图床了，无缝链接，自动替换图片URL链接**<br />

