import { defineConfig } from 'vitepress'
import type { HeadConfig } from 'vitepress'
import { withSidebar } from 'vitepress-sidebar';
const base = '/ja-study/'

const vitePressSidebarOptions = {
  // VitePress Sidebar's options here...
  documentRootPath: '/docs',
  collapsed: false,
  capitalizeFirst: true,
  // sortMenusByName: true
  hyphenToSpace: true,
};

const vitePressOptions = {
  base,
  title: "日语学习",
  description: "日语学习",
  head: [
    ['link', { rel: "icon", type: "image/png", sizes: "256x256", href: base + "a.png" }, ''],
  ] as HeadConfig[],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'JapanDict', link: 'https://www.japandict.com/' },
      { text: 'Jisho', link: 'https://jisho.org/' },
      { text: 'MOJi辞書', link: 'https://www.mojidict.com/' },
      // { text: 'Home', link: '/' },
      // { text: 'Examples', link: '/markdown-examples' }
    ],
    search: {
      provider: 'local'
    },

    // sidebar: [
    //   {
    //     text: 'Examples',
    //     items: [
    //       { text: 'Markdown Examples', link: '/markdown-examples' },
    //       { text: 'Runtime API Examples', link: '/api-examples' }
    //     ]
    //   }
    // ],

    // socialLinks: [
    //   { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    // ]
  },

}

// https://vitepress.dev/reference/site-config
export default defineConfig(withSidebar(vitePressOptions, vitePressSidebarOptions))
