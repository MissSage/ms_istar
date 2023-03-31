import {defineConfig} from 'vitepress'
import { themeConfig } from './themeConfigs'
export default defineConfig({
  lastUpdated: true,
  title: '自定义的 title',
  outDir: '../dist',
  // 在head中的meta中的描述信息
  description: '自定义的 description',
  head: [['meta', { name: 'keywords', content: 'HTML, CSS, JavaScript' }]],
  themeConfig: themeConfig
})