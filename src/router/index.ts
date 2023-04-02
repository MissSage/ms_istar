/**
 * !--------- FBI WARNING ----------!
 *
 * 根据 /packages 目录下的组件所生成的组件类侧边导航栏配置，请勿手动修改
 */

import { createRouter, createWebHashHistory, RouteRecordRaw, RouterOptions } from "vue-router"

const routes: RouteRecordRaw[] = [
  {
    meta: {
      title: '按钮'
    },
    name: 'Button',
    path: '/components/Button',
    component: () => import('../../examples/Button.vue'),
  }
]

const routerConfig = {
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to: any, from: any) {
    if (to.path !== from.path) {
      return { top: 0 }
    }
  }
}

const router = createRouter(routerConfig as RouterOptions)

export default router
