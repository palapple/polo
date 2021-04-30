---
title: FormMaking --基于 vue 和 element-ui 实现的表单设计器,可以让表单开发简单而高效
date: '2021-04-21'
sidebar: 'auto'
categories:
    - 工具
tags:
    - FormMaking
    - element-ui
    - vue
---


<br />![](https://markdown-typora.oss-cn-shenzhen.aliyuncs.com/20210428141719.jpeg#id=FqwO2&originHeight=420&originWidth=746&originalType=binary&status=done&style=none)<br />

### 基本情况

<br />基于 [vue](https://github.com/vuejs/vue) 和 [element-ui](https://github.com/ElemeFE/element) 实现的表单设计器，使用了最新的前端技术栈，内置了 i18n 国际化解决方案，可以让表单开发简单而高效。<br />

### 组件


- <br />MakingForm 表单设计器（基于可视化操作快速设计出表单页面，并获取到表单配置 json 数据）。
- <br />GenerateForm 表单生成器（根据设计器中获取的配置 json 数据，快速渲染出表单页面）。
- <br />[在线预览](http://form.xiaoyaoji.cn/basic-version)
- <br />[使用文档](http://docs.form.xiaoyaoji.cn)
- <br />[高级版本](http://form.xiaoyaoji.cn) 提供了更多的组件和操作API



### 特性


- 可视化配置页面
- 提供栅格布局，并采用flex实现对齐
- 一键预览配置的效果
- 一键生成配置json数据
- 一键生成代码，立即可运行
- 提供自定义组件满足用户自定义需求
- 提供远端数据接口，方便用户需要异步获取数据加载
- 提供功能强大的高级组件
- 支持表单验证
- 快速获取表单数据
- 国际化支持



### 优点


- 快速构建表单，提供栅格布局；
- 减少重复作业，高效完成表单和json双向转化；
- 对于个性化定制，可以添加自定义class覆盖原来的样式，满足业务的实际需求；
- 支持Element-ui和Ant Design-ui；
- 提供多种api接口，对数据和字段进行操作；



### 缺点


- 高级组件数量不够多；原生antd of vue 中包含57个组件，还有很多高级组件，类似card，list等等未完成；
- 对于中台应用来说，Table，Card，Search等经常使用的组件暂时没有，等后续更新；



### 应用场景

<br />Element-UI版本（实际使用图）<br />

- **表单生成器（ GenerateForm）**


<br />![](https://markdown-typora.oss-cn-shenzhen.aliyuncs.com/20210428141834.png#id=tZexa&originHeight=621&originWidth=1541&originalType=binary&status=done&style=none)<br />
<br />[https://www.v2ex.com/t/642079](https://www.v2ex.com/t/642079)<br />

- **表单设计器 （MakingForm）**


<br />![](https://markdown-typora.oss-cn-shenzhen.aliyuncs.com/20210428141838.png#id=kyeW0&originHeight=504&originWidth=1511&originalType=binary&status=done&style=none)<br />
<br />Antd版本（使用vue cli3实现）<br />
<br />![](https://markdown-typora.oss-cn-shenzhen.aliyuncs.com/20210428141842.png#id=e19Ap&originHeight=624&originWidth=1712&originalType=binary&status=done&style=none)<br />

### PS


1. antd组件版本暂时只在高级版本才有；产品正在进一步兼容antd的高级组件，提升容量；
1. 通过跟Ant Design Pro配合Element-ui搭配完美，Antd组件兼容性待测量；
1. 建议搭配第三方组件使用：
   - [vuedraggable](https://github.com/SortableJS/Vue.Draggable)
   - [Element](https://github.com/ElemeFE/element)
   - [ace](https://github.com/ajaxorg/ace)
   - [vue2-editor](https://github.com/davidroyer/vue2-editor)



