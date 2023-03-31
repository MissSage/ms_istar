import { App, Plugin } from 'vue';
import Text from './src/index.vue';

export const TextPlugin: Plugin = {
  install(app: App) {
    app.component('istar-text', Text);
  },
};

export {
  Text,
};
