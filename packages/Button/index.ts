import { App, Plugin } from 'vue';
import IstarButton from './src/index.vue';

export const IstarButtonPlugin: Plugin = {
  install(app: App) {
    app.component('istar-button', IstarButton);
  },
};

export {
  IstarButton,
};
