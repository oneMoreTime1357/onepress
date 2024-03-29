module.exports = {
  base: '/onepress/',
  title: 'OnePress 小站',
  description: 'just playing around',
  searchMaxSuggestions: 10, // 搜索设置
  themeConfig: {
    sidebarDepth: 2, // 展示到第三级标题
    nav: [
      // { text: 'Home', link: '/' },
      { text: 'Nest Start', link: '/nest/' },
      { text: '关于', link: '/about/' },
      { text: 'Github', link: 'https://github.com/oneMoreTime1357', target:'_blank' },
    ],
    sidebar: {// 侧边栏设置
      '/nest/': [
        {
          title: 'Nest Start', // 分组1
          // path: '/nest/',
          // sidebarDepth: 2,
          collapsable: false,
          children: [
            '',
            'start'
          ]
        },
        {
          title: 'Log',
          collapsable: false,
          children: [
            'log'
          ]
        }
      ],
      '/about/': [
        ''
      ]
      // '/': [
      //   '',        /* / */
      //   'concat', /* /contact.html */
      //   'about'    /* /about.html */
      // ]
    }
  },
  plugins: [
    ['vuepress-plugin-yuque', {
      repoUrl: 'https://www.yuque.com/ant-design/course',
    }]
  ]
}