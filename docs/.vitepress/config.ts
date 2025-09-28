import { defineConfig } from 'vitepress'
import type { HeadConfig } from 'vitepress'
import { withSidebar } from 'vitepress-sidebar';
const base = '/ja-study/';

const vitePressSidebarOptions = {
  documentRootPath: '/docs',
  collapsed: false,
  capitalizeFirst: true,
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
    ],
    search: {
      provider: 'local'
    },
  },
  build: { target: 'esnext' }

}

// https://vitepress.dev/reference/site-config
export default defineConfig(withSidebar(vitePressOptions, vitePressSidebarOptions))
