module.exports = {
    theme: 'reco',
    title:"polo",
    description: 'Just playing around',
    plugtins:{
        "back-to-top":{
            right:'1rem',
            bottom: '6rem',
            width: '2.5rem',
            height: '2.5rem',
            'border-radius': '.25rem',
            'line-height': '2.5rem',
            backgroundColor: 'rgba(231, 234, 241,.5)'
        }
    },
    themeConfig: {
        // 设置网站默认语言
        locales: {
            '/': {
              recoLocales: {
                homeBlog: {
                  article: '美文', // 默认 文章
                  tag: '标识', // 默认 标签
                  category: '类别', // 默认 分类
                  friendLink: '友链' // 默认 友情链接
                },
                pagation: {
                  prev: '上一页',
                  next: '下一页',
                  go: '前往',
                  jump: '跳转至'
                }
              }
            }
          },
        // 指定博客模式
        type: 'blog',
        // 友链设定
        friendLink: [
            {
              title: 'vuepress-theme-reco',
              desc: 'A simple and beautiful vuepress Blog & Doc theme.',
              logo: "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
              link: 'https://vuepress-theme-reco.recoluan.com'
            },
            {
              title: '午后南杂',
              desc: 'Enjoy when you can, and endure when you must.',
              email: 'recoluan@qq.com',
              link: 'https://www.recoluan.com'
            },
            // ...
          ],
        // 移动端 UI 优化
        head: [
            ['meta', {
                name: 'viewport',
                content: 'width=device-width,initial-scale=1,user-scalable=no'
            }]
        ],
        authorAvatar: 'https://markdown-typora.oss-cn-shenzhen.aliyuncs.com/20200824205336.JPG',
        logo: 'https://markdown-typora.oss-cn-shenzhen.aliyuncs.com/20210422163521.png',
        // author
        author: '大菠萝palapple',
        subSidebar: 'auto', //在所有页面中启用自动生成子侧边栏，原 sidebar 仍然兼容
        // 博客配置
        blogConfig: {
            nav: [{
                text: 'TimeLine',
                link: '/timeline/',
                icon: 'reco-date'
            }],
            category: {
                location: 2, // 在导航栏菜单中所占的位置，默认2
                text: 'Category' // 默认文案 “分类”
            },
            tag: {
                location: 3, // 在导航栏菜单中所占的位置，默认3
                text: 'Tag' // 默认文案 “标签”
            },
            socialLinks: [ // 信息栏展示社交信息
                {
                    icon: 'reco-github',
                    link: 'https://github.com/recoluan'
                },
                {
                    icon: 'reco-npm',
                    link: 'https://www.npmjs.com/~reco_luan'
                }
            ]
        },
        //Valine 评论系统
        valineConfig: {
            appId: 'asyixlF1UR0k3tQVyI99h4Pe-9Nh9j0Va', // your appId
            appKey: 'NFa7IeBtzSk3rxkVafBqqBTM', // your appKey
        }
    }
}