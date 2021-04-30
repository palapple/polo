---
title: css画三角形
date: '2021-04-21'
sidebar: 'auto'
categories:
    - CSS
tags:
    - 三角形
    - css
---


<br />![](https://markdown-typora.oss-cn-shenzhen.aliyuncs.com/20210428130344.jpeg#id=FH2Ww&originHeight=420&originWidth=746&originalType=binary&status=done&style=none)

---

最近在写项目的样式的时候，遇到了一个选中样式的问题，关于三角形浅色背景和checked图标；<br />
<br />实际的项目图形；<br />
<br />![](https://markdown-typora.oss-cn-shenzhen.aliyuncs.com/20210428130328.png#id=Pzmde&originHeight=222&originWidth=337&originalType=binary&status=done&style=none)<br />

<a name="d1c642b0"></a>
### border组成


```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .span{
          width: 100px;
          height: 100px;
          border-width: 30px ;
          border-style: solid;
          border-color: blue yellow pink orange;
        }
    </style>
</head>
<body>
    <div class="span"></div>
</body>
</html>
```

<br />![](https://markdown-typora.oss-cn-shenzhen.aliyuncs.com/20210428130406.png#id=GpqM7&originHeight=388&originWidth=388&originalType=binary&status=done&style=none)<br />
<br />**border是一个三角形，把width：0px； height：0px，只剩下border属性，那么我们就可以得到三角形图形**<br />
<br />**一个元素的border由四部分的border组成，其顺序跟平时设定margin的方式是一样的**<br />
<br />![](https://markdown-typora.oss-cn-shenzhen.aliyuncs.com/20210428130414.png#id=M2trp&originHeight=93&originWidth=101&originalType=binary&status=done&style=none)<br />

```
        .span{
          width: 0px;
          height: 0px;
          border-width: 30px ;
          border-style: solid;
          border-color: blue yellow pink orange;
        }
```

<br />**border设定方向**<br />

```
border-color: blue yellow pink orange;(方向对应：上 右 下 左)（顺时针旋转）
```


<a name="90f8a225"></a>
### 三角形设定

<br />**我们知道transparent是设定为透明的意思，只要把对应的位置的border设定为transparent即可以得到三角形**<br />

```
        .span{
          width: 0px;
          height: 0px;
          border-width: 30px ;
          border-style: solid;
          border-color: transparent yellow transparent transparent;
        }
```


<a name="b7c96e41"></a>
### 边角三角形

<br />![](https://markdown-typora.oss-cn-shenzhen.aliyuncs.com/20210428130428.png#id=gUmc2&originHeight=86&originWidth=92&originalType=binary&status=done&style=none)<br />
<br />**通过设定顶部和右边的border，即可以得到边角的三角形**<br />

```
        .span{
          width: 0px;
          height: 0px;
          border-width: 30px ;
          border-style: solid;
          border-color: yellow yellow transparent transparent;
          /* transform:rotate(180deg) */
        }
```

<br />**PS：还可以通过transform属性进行旋转得到对应位置的图形**
