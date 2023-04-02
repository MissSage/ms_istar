/* eslint-disable */

/** 
 * !--------- FBI WARNING ----------!
 * 
 * 根据 /packages 目录下的组件所生成的模块导出，请勿手动修改
 */
import { App, Plugin } from 'vue';

import { IstarButtonPlugin } from './Button';

const ISTARPlugin: Plugin = {
  install(app: App) {
    IstarButtonPlugin.install?.(app);
  },
};

export default ISTARPlugin;

export * from './Button'