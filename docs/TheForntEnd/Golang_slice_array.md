---
title: Golang slice(切片) 和 array 区别
date: '2021-04-21'
sidebar: 'auto'
categories:
    - Go
tags:
    - Golang
---


<br />![](https://markdown-typora.oss-cn-shenzhen.aliyuncs.com/20210428130131.jpeg#id=HfpVB&originHeight=420&originWidth=746&originalType=binary&status=done&style=none)<br />
<br />**最近在学习Golang，发现有两个定义数组的数据结构，有点儿困惑，自己做个对比，也希望给大家一点启示**<br />

<a name="0fea7c47"></a>
### 数据结构


<a name="ee1bf61c"></a>
#### array类型


- 值引用类型
- var variable_name [SIZE] variable_type
- ![](https://markdown-typora.oss-cn-shenzhen.aliyuncs.com/20210428130056.png#id=ssyfa&originHeight=220&originWidth=858&originalType=binary&status=done&style=none)



<a name="d7512f65"></a>
#### slice类型


- slice是一个引用类型，是一个动态的指向数组切片的指针
- slice是可以动态增长的数组
- var identifier []type



<a name="975d58a9"></a>
### slice的append（）& copy（）区别


```
package main

import (
   "fmt"
)

func printSlice( x []int){
	fmt.Printf("len = %d, cap = %d, slice = %v \n", len(x), cap(x), x)
}

func main(){
	var numbers []int
	printSlice(numbers)

	numbers = append(numbers, 0)
	printSlice(numbers)

	numbers = append(numbers, 1)
	printSlice(numbers)

	numbers1 := make([]int, len(numbers), (cap(numbers)*2))

   /* 拷贝 numbers 的内容到 numbers1 */
   copy(numbers1,numbers)
   printSlice(numbers1)
}
```

<br />**结论：**函数参数时，Array数组传递的是数组的副本，而slice传递的是指针。
