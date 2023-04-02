import { App, Plugin } from 'vue';
import Istar{{ compName }} from './src/index.vue';

export const Istar{{ compName }}Plugin: Plugin = {
  install(app: App) {
    app.component('istar-{{ compClassName }}', Istar{{ compName }});
  },
};

export {
  Istar{{compName}},
};
