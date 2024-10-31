import Unocss from 'unocss/vite'
import { defineConfig } from 'vitepress'
import { version } from '../../package.json'

export default defineConfig({
  base: '/',
  description: 'Blog included. Built on top of VitePress and UnoCSS.',
  markdown: {
    headers: {
      level: [0, 0],
    },
  },
  themeConfig: {
    footer: {
      message: 'VitePress Blog Starter',
      copyright: 'Copyright © 2023 SFXCode',
    },
    search: {
      provider: 'local',
    },
    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/sfxcode/vitepress-blog-starter',
      },
    ],
    editLink: {
      pattern:
        'https://github.com/sfxcode/vitepress-blog-starter/edit/main/docs/:path',
      text: 'Edit this page on GitHub',
    },
    nav: nav(),
    sidebar: {
      '/guide/': sidebarGuide(),
      '/config/': sidebarConfig(),
    },
    blog: {
      title: 'My Blog',
      description: 'Some articles for sample Blog',
    },
  },
  title: 'VitePress Blog Starter',
  vite: {
    plugins: [
      Unocss({
        configFile: '../../unocss.config.ts',
      }),
    ],
  },
})

function nav() {
  return [
    { text: 'Guide', link: '/guide/', activeMatch: '/guide/' },
    { text: 'Configs', link: '/config/', activeMatch: '/config/' },
    { text: 'Blog', link: '/blog/', activeMatch: '/blog/' },
    {
      text: 'External Docs',
      items: [
        {
          text: 'Vitepress',
          link: 'https://vitepress.vuejs.org',
        },
        {
          text: 'UnoCSS',
          link: 'https://uno.antfu.me',
        },
      ],
    },
    {
      text: version,
      items: [
        {
          text: 'Changelog',
          link: 'https://github.com/sfxcode/vitepress-blog-starter/blob/main/CHANGELOG.md',
        },
      ],
    },
  ]
}

function sidebarGuide() {
  return [
    {
      text: '介绍',
      collapsible: true,
      items: [{ text: '题目说明', link: '/guide/' }],
    },
    {
      text: '数组和字符串操作',
      collapsible: true,
      items: [
        { text: '数组去重（多种方案）', link: '/guide/basic/array/unique' },
        { text: '数组扁平化', link: '/guide/basic/array/flatten' },
        {
          text: '数组排序（冒泡、选择、快速）',
          link: '/guide/basic/array/sort',
        },
        {
          text: 'Array 原生方法',
          link: '/guide/basic/array/orginal',
        },
        { text: '字符串单词反转', link: '/guide/basic/string/reverse' },
        { text: '字符串匹配算法（KMP）', link: '/guide/basic/string/template' },
        {
          text: '判断回文字符串（多种方案）',
          link: '/guide/basic/string/palindrome',
        },
      ],
    },
    {
      text: '基础算法',
      collapsible: true,
      items: [
        { text: '二分查找实现', link: '/guide/basic/algo/binary-search' },
        { text: '实现斐波那契数列', link: '/guide/basic/algo/fibonacci' },
        { text: '判断素数', link: '/guide/basic/algo/prime' },
        { text: '实现阶乘函数', link: '/guide/basic/algo/factorial' },
        {
          text: '树的遍历（前序、中序、后序）',
          link: '/guide/basic/algo/tree-traversal',
        },
        { text: '实现幂函数', link: '/guide/basic/algo/power' },
        {
          text: '实现浅拷贝和深拷贝',
          link: '/guide/basic/algo/shallow-and-deep-copy',
        },
        { text: '洗牌算法实现', link: '/guide/basic/algo/shuffle' },
        { text: '实现 LRU 缓存', link: '/guide/basic/algo/lru-cache' },
        {
          text: '实现简单的正则表达式匹配',
          link: '/guide/basic/algo/simple-regex-match',
        },
      ],
    },
    {
      text: '核心概念',
      collapsible: true,
      items: [
        { text: '实现 call 方法', link: '/guide/core/call' },
        { text: '实现 apply 方法', link: '/guide/core/apply' },
        { text: '实现 bind 方法', link: '/guide/core/bind' },
        { text: '实现 new 操作符', link: '/guide/core/new' },
        { text: '实现 instanceof 操作符', link: '/guide/core/instanceof' },
        { text: '实现对象的继承（多种方式）', link: '/guide/core/inherit' },
        { text: '实现对象的深度比较', link: '/guide/core/deep-compare' },
        { text: '实现对象的扁平化', link: '/guide/core/flatten' },
        { text: '实现对象的冻结', link: '/guide/core/freeze' },
      ],
    },
  ]
}

function sidebarConfig() {
  return [
    {
      text: 'Config',
      items: [
        { text: 'Introduction', link: '/config/' },
        { text: 'UnoCSS', link: '/config/unocss' },
      ],
    },
  ]
}
