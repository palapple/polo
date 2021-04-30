---
title: JavaScript 数组拷贝
date: '2021-04-21'
sidebar: 'auto'
categories:
    - JavaScript
tags:
    - 数组
---

<br />![](https://markdown-typora.oss-cn-shenzhen.aliyuncs.com/20210428125241.jpeg#id=EG4rV&originHeight=420&originWidth=746&originalType=binary&status=done&style=none)<br />
<br />最近在刷 LeetCode 题目， 经常要用到数组的拷贝，做一个小小的总结--关于 JavaScript 数组的拷贝<br />

<a name="88a1a4d3"></a>
### 浅拷贝

<br />浅拷贝，拷贝了这个对象的引用，我们称之为浅拷贝。，所以拷贝对象改变，会改变原来的数组；<br />

- 直接赋值



> let arr1 = [1, 3, 4, 5]

let arr2 = arr1



<a name="510a44e6"></a>
### 深拷贝

<br />深拷贝是拷贝多层，每一级别的数据都会拷贝出来，拷贝对象改变，不会改变原来的数组。<br />

- slice()



> arrayObj.slice(start, [end]), array对象的slice函数，返回一个数组的一段。

let arr1 = [1, 3, 4, 5]

let arr2 = arr1.slice()

let arr2[0] = 10 //arr2 = [10, 3, 4, 5]

arr1 = [1, 3, 4, 5]



- concat()



> arrayObject.concat(arrayX,arrayX,......,arrayX), 用于连接两个或多个数组。该方法不会改变现有的数组，而仅仅会返回被连接数组的一个副本。

let arr1 = [1, 3, 4, 5]

let arr2 = arr1.concat()

let arr2[0] = 10 //arr2 = [10, 3, 4, 5]

arr1 = [1, 3, 4, 5]



- JSON.stringify() 和 JSON.parse



> JSON.stringify把对象转成字符串，再用JSON.parse把字符串转成新的对象

let arr1 = [1, 3, 4, 5]

let arr2 = JSON.parse(JSON.stringfy(arr1))



- Array.from()



> Array.from(object, mapFunction, thisValue), from() 方法用于通过拥有 length 属性的对象或可迭代的对象来返回一个数组。

同时这个用来拷贝多维数组的好方法

let arr1 = [[1, 3],[4, 5]]

let arr2 = Array.from({ length: arr1.length }, () => [])



- 遍历赋值



> let arr1 = [1, 3, 4, 5], arr2 = []

for (let item in arr1) {arr2[item] = arr1}



- JQuery 的 extend 方法



> $.extend( [deep ], target, object1 [, objectN ] )

deep表示是否深拷贝，为true为深拷贝，为false，则为浅拷贝

target Object类型 目标对象，其他对象的成员属性将被附加到该对象上。

object1  objectN可选。 Object类型 第一个以及第N个被合并的对象。

let arr1 = [1, 3, 4, 5]

let arr2 = $.extend(true, [], arr1)



<a name="96a7d0e7"></a>
### 多维数组拷贝


- JQuery 的 extend 方法
- 遍历赋值
- Array.from()
