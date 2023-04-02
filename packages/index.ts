/* eslint-disable */

/** 
 * !--------- FBI WARNING ----------!
 * 
 * 根据 /packages 目录下的组件所生成的模块导出，请勿手动修改
 */
import { App, Plugin } from 'vue';

import { ButtonPlugin } from './Button';
import { TextPlugin } from './Text';
import { TablePlugin } from './Table';

const ISTARPlugin: Plugin = {
  install(app: App) {
    ButtonPlugin.install?.(app);
    TextPlugin.install?.(app);
    TablePlugin.install?.(app);
  },
};

export default ISTARPlugin;

export * from './Button'
export * from './Text'
export * from './Table'