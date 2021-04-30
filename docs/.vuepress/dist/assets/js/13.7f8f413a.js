(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{518:function(n,a,t){"use strict";t.r(a);var e=t(6),r=Object(e.a)({},(function(){var n=this,a=n.$createElement,t=n._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[t("p",[t("br"),t("img",{attrs:{src:"https://markdown-typora.oss-cn-shenzhen.aliyuncs.com/20210428130131.jpeg#id=HfpVB&originHeight=420&originWidth=746&originalType=binary&status=done&style=none",alt:""}}),t("br"),n._v(" "),t("br"),t("strong",[n._v("最近在学习Golang，发现有两个定义数组的数据结构，有点儿困惑，自己做个对比，也希望给大家一点启示")]),t("br")]),n._v(" "),t("p",[t("a",{attrs:{name:"0fea7c47"}})]),n._v(" "),t("h3",{attrs:{id:"数据结构"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#数据结构"}},[n._v("#")]),n._v(" 数据结构")]),n._v(" "),t("p",[t("a",{attrs:{name:"ee1bf61c"}})]),n._v(" "),t("h4",{attrs:{id:"array类型"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#array类型"}},[n._v("#")]),n._v(" array类型")]),n._v(" "),t("ul",[t("li",[n._v("值引用类型")]),n._v(" "),t("li",[n._v("var variable_name [SIZE] variable_type")]),n._v(" "),t("li",[t("img",{attrs:{src:"https://markdown-typora.oss-cn-shenzhen.aliyuncs.com/20210428130056.png#id=ssyfa&originHeight=220&originWidth=858&originalType=binary&status=done&style=none",alt:""}})])]),n._v(" "),t("p",[t("a",{attrs:{name:"d7512f65"}})]),n._v(" "),t("h4",{attrs:{id:"slice类型"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#slice类型"}},[n._v("#")]),n._v(" slice类型")]),n._v(" "),t("ul",[t("li",[n._v("slice是一个引用类型，是一个动态的指向数组切片的指针")]),n._v(" "),t("li",[n._v("slice是可以动态增长的数组")]),n._v(" "),t("li",[n._v("var identifier []type")])]),n._v(" "),t("p",[t("a",{attrs:{name:"975d58a9"}})]),n._v(" "),t("h3",{attrs:{id:"slice的append-copy-区别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#slice的append-copy-区别"}},[n._v("#")]),n._v(" slice的append（）& copy（）区别")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v('package main\n\nimport (\n   "fmt"\n)\n\nfunc printSlice( x []int){\n\tfmt.Printf("len = %d, cap = %d, slice = %v \\n", len(x), cap(x), x)\n}\n\nfunc main(){\n\tvar numbers []int\n\tprintSlice(numbers)\n\n\tnumbers = append(numbers, 0)\n\tprintSlice(numbers)\n\n\tnumbers = append(numbers, 1)\n\tprintSlice(numbers)\n\n\tnumbers1 := make([]int, len(numbers), (cap(numbers)*2))\n\n   /* 拷贝 numbers 的内容到 numbers1 */\n   copy(numbers1,numbers)\n   printSlice(numbers1)\n}\n')])])]),t("p",[t("br"),n._v("**结论：**函数参数时，Array数组传递的是数组的副本，而slice传递的是指针。")])])}),[],!1,null,null,null);a.default=r.exports}}]);