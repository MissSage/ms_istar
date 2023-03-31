/**
 * 脚本生动生成
 */
import { DefaultTheme } from "vitepress"

export const guide: DefaultTheme.SidebarItem[] = [
  {
    text: "Basic基础组件",
    items: [
      {{guides}}
    ],
    collapsed: false
  }
]
