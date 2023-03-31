import { DefaultTheme } from "vitepress"
import { guide } from "./guide"

export { guide } from "./guide"
export const sidebars: DefaultTheme.Sidebar = [{ text: "快速上手", link: "/guide/index" }, ...guide]
