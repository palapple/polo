module.exports = {
  base: '/polo/',
  theme: 'reco',
  title: "Polo",
  description: 'Just playing around',
  plugins: ['@vuepress/active-header-links', {
    sidebarLinkSelector: '.sidebar-link',
    headerAnchorSelector: '.header-anchor'
  },
  '@vuepress/nprogress'],
  themeConfig: {
    // 指定博客模式
    type: 'blog',
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

    // 博客配置
    blogConfig: {
      subSidebar: 'auto', //在所有页面中启用自动生成子侧边栏，原 sidebar 仍然兼容
      nav: [ // 导航栏配置
        {
          text: '前端基础',
          link: '/accumulate/'
        },
        {
          text: '算法题库',
          link: '/algorithm/'
        },
        {
          text: '微博',
          link: 'https://baidu.com'
        }
      ],
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