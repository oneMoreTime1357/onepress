module.exports = {
  title: 'onepress 小站',
  description: 'just playing around',
  searchMaxSuggestions: 10, // 搜索设置
  themeConfig: {
    nav: [
      // { text: 'Home', link: '/' },
      // { text: 'Guide', link: '/guide/' },
      { text: 'Github', link: 'https://github.com/oneMoreTime1357', target:'_blank' },
    ],
    sidebar: { // 侧边栏设置
      '/': [
        '',        /* / */
        'concat', /* /contact.html */
        'about'    /* /about.html */
      ]
    }
  }
}