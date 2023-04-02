import { defineComponent, openBlock, createElementBlock, createElementVNode, renderSlot, createTextVNode, toDisplayString } from "vue";
var index_vue_vue_type_style_index_0_scoped_true_lang$3 = "";
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _hoisted_1$3 = { class: "istar-button" };
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  props: {
    text: null
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$3, [
        createElementVNode("button", null, [
          renderSlot(_ctx.$slots, "default", {}, () => [
            createTextVNode(toDisplayString(__props.text), 1)
          ], true)
        ])
      ]);
    };
  }
});
var Button = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-0831dc66"]]);
const ButtonPlugin = {
  install(app) {
    app.component("istar-button", Button);
  }
};
var index_vue_vue_type_style_index_0_scoped_true_lang$2 = "";
const _hoisted_1$2 = { class: "istar-text" };
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  props: {
    text: null
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$2, [
        renderSlot(_ctx.$slots, "default", {}, () => [
          createTextVNode(toDisplayString(__props.text || "\u6211\u662F\u6587\u672C\u7EC4\u4EF6"), 1)
        ], true)
      ]);
    };
  }
});
var Text = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-47d56f31"]]);
const TextPlugin = {
  install(app) {
    app.component("istar-text", Text);
  }
};
var index_vue_vue_type_style_index_0_scoped_true_lang$1 = "";
const _sfc_main$1 = {};
const _hoisted_1$1 = { class: "istar-table" };
function _sfc_render$1(_ctx, _cache) {
  return openBlock(), createElementBlock("div", _hoisted_1$1, " \u6211\u662F\u8868\u683C\u7EC4\u4EF6 ");
}
var Table = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__scopeId", "data-v-c38cf5fc"]]);
const TablePlugin = {
  install(app) {
    app.component("istar-table", Table);
  }
};
var index_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main = {};
const _hoisted_1 = { class: "istar-pagination" };
function _sfc_render(_ctx, _cache) {
  return openBlock(), createElementBlock("div", _hoisted_1, " \u6211\u662F\u5206\u9875\u7EC4\u4EF6 ");
}
var Pagination = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-3ac6a93e"]]);
const PaginationPlugin = {
  install(app) {
    app.component("istar-pagination", Pagination);
  }
};
const ISTARPlugin = {
  install(app) {
    var _a, _b, _c, _d;
    (_a = ButtonPlugin.install) == null ? void 0 : _a.call(ButtonPlugin, app);
    (_b = TextPlugin.install) == null ? void 0 : _b.call(TextPlugin, app);
    (_c = TablePlugin.install) == null ? void 0 : _c.call(TablePlugin, app);
    (_d = PaginationPlugin.install) == null ? void 0 : _d.call(PaginationPlugin, app);
  }
};
export { Button, ButtonPlugin, Pagination, PaginationPlugin, Table, TablePlugin, Text, TextPlugin, ISTARPlugin as default };
