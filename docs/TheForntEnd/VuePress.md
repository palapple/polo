---
title: VuePress 快速搭建 && vuepress-theme-reco
date: '2021-04-30'
sidebar: 'auto'
categories:
  - 工具
tags:
  - Vuepress
  - vuepress-theme-reco
  - 静态网站生成器
---



![image-20210430092458262](https://markdown-typora.oss-cn-shenzhen.aliyuncs.com/20210430092459.png)
## VuePress 快速搭建 && vuepress-theme-reco
 官方的 VuePress 具有详细的部署文档和细致的配置说明，但是对于一般的小白来说，可能仅需要简单的配置，希望能快速上线（包括我在内，总是看不完长篇大论的书）。希望有一个快速上手的文档，加上一些高频的配置和简易的部署流程，快速上手搭建一个文档输出；

### 部署到 Gitee Pages

Gitee `Pages` 是一个免费的静态网页托管服务，您可以使用 Gitee `Pages` 托管博客、项目官网等静态网页。如果您使用过 `Github Pages` 那么您会很快上手使用 Gitee 的 `Pages`服务。目前 Gitee `Pages` 支持 Jekyll、Hugo、Hexo编译静态资源。

通过 `Gitee` 新建一个仓库，通过`服务` ，一键启动 Gitee Pages 服务，国内服务，方便快捷。



![image-20210422165021313](https://markdown-typora.oss-cn-shenzhen.aliyuncs.com/20210422165036.png)

### 部署

[手动部署 & Github Actions 自动部署](https://vuepress-theme-reco.recoluan.com/views/other/deploy.html#%E6%89%8B%E5%8A%A8%E9%83%A8%E7%BD%B2)

### 注意事项

#### 写文章的时候，注意加入 YAML格式

```yaml
---
title: 烤鸭的做法
date: '2019-08-08 08:00:00'
sidebar: 'auto'
categories:
 - 烹饪
 - 爱好
tags:
 - 烤
 - 鸭子
keys:
 - '123456'
publish: false
// 加入置顶字段
sticky 1.1.2+
  description: 文章置顶。
  type: number
  sort type: 降序，可以按照 1, 2, 3, ... 来降低置顶文章的排列优先级
---
```



#### 写文章时添加日期，支持时间轴

```yaml
---
title: 【vue】跨域解决方案之proxyTable
date: 2017-12-28  // 时间格式，日期是可以填写 时分秒 的，格式为 2019-10-20 00:00:00。
tags:
- vue
- webpack
---
```



#### 文章添加摘要

在<!-- more --> 之上，yaml 以下的内容为摘要内容;

```markdown
---
title: 【vue】跨域解决方案之proxyTable
date: 2017-12-28  // 时间格式，日期是可以填写 时分秒 的，格式为 2019-10-20 00:00:00。
tags:
- vue
- webpack
---

::: tip
摘要内容
:::

<!-- more -->
## 正文
```

#### Markdown支持格外的语法

- 容器

  ```markdown
  入

  ::: tip
  This is a tip
  :::

  ::: warning
  This is a warning
  :::

  ::: danger
  This is a dangerous warning
  :::

  ::: theorem 牛顿第一定律
  假若施加于某物体的外力为零，则该物体的运动速度不变。

  ::: right
  来自 [维基百科](https://zh.wikipedia.org/wiki/%E7%89%9B%E9%A1%BF%E8%BF%90%E5%8A%A8%E5%AE%9A%E5%BE%8B)
  :::

  ::: details
  这是一个详情块，在 IE / Edge 中不生效
  :::
  ```



#### 文章存放目录

![image-20210427141726116](https://markdown-typora.oss-cn-shenzhen.aliyuncs.com/20210427141738.png)

只要放在 Docs 目录下，**VuePress**会自动遍历，自己撰写存放的时候，可以通过文件夹分门别类，通过每个 markdown 文件的 YAML 格式，系统会自动识别 Tag、title、time、author 并实现排列，跟 markdown 存放位置没有关系。



### docs >> 文件夹、markdown 文件命名不能有空格

- `docs 文件夹`下的自定义文件夹的命名以及`markdown`文件
  - 不能还有`空格`，不然在`npm run build`会报错；
  - 不能有`中文`，不然在`npm run build`会报错；



### 文章的标题必须是  ## 二级标题，一级标题、三级标题均不可

每篇文章的第一行，必须是 ## 二级标题，不然解析不了；



### 语雀导出

![image-20210428142304268](https://markdown-typora.oss-cn-shenzhen.aliyuncs.com/20210428142305.png)



#### 约定大于配置

体现在什么地方呢？ 例如`.vuepress/enhanceApp.js`表示在 Vuepress 中注册组件，而在 `.vuepres/components`中，Vuepress会自动遍历该目录下的组件，并注册成全局组件。

### 配套

[vuepress-theme-reco](https://vuepress-theme-reco.recoluan.com/views/1.x/)

### 官方链接

[VuePress](https://vuepress.vuejs.org/zh/)



-----

最后附上我的博客地址：[polo 博客](https://palapple.github.io/polo/)

