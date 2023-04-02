import { App, Plugin } from 'vue';
import Table from './src/index.vue';

export const TablePlugin: Plugin = {
  install(app: App) {
    app.component('istar-table', Table);
  },
};

export {
  Table,
};
