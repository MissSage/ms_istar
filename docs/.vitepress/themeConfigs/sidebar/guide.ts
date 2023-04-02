/**
 * 脚本生动生成
 */
import { DefaultTheme } from "vitepress"

export const guide: DefaultTheme.SidebarItem[] = [
  {
    text: "Basic基础组件",
    items: [
      
      {
        text: '按钮(Button)',
        link: '/guide/Button',
      },
      {
        text: '文本(Text)',
        link: '/guide/Text',
      },
      {
        text: '表格(Table)',
        link: '/guide/Table',
      }
    ],
    collapsed: false
  }
]
