import { DefaultTheme } from 'vitepress'
import { navs } from './nav'
import { sidebars } from './sidebar'
import { socialLinks } from './socialLink'

export const themeConfig:DefaultTheme.Config = {
  logo: '/test/jpg',
    nav: navs,
    socialLinks: socialLinks,
    sidebar: sidebars,
    docFooter: { prev: '上一篇', next: '下一篇' },
    editLink: {
      pattern: 'https://github.com/vuejs/vitepress/edit/main/docs/:path',
      text: 'Edit this page on GitHub'
    },
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2019-present Evan You'
    }
}