import { defineComponent, openBlock, createElementBlock, createElementVNode, renderSlot, createTextVNode, toDisplayString } from "vue";
var index_vue_vue_type_style_index_0_scoped_true_lang$1 = "";
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _hoisted_1$1 = { class: "istar-button" };
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  props: {
    text: null
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$1, [
        createElementVNode("button", null, [
          renderSlot(_ctx.$slots, "default", {}, () => [
            createTextVNode(toDisplayString(__props.text), 1)
          ], true)
        ])
      ]);
    };
  }
});
var Button = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-08475318"]]);
const ButtonPlugin = {
  install(app) {
    app.component("istar-button", Button);
  }
};
var index_vue_vue_type_style_index_0_scoped_true_lang = "";
const _hoisted_1 = { class: "istar-text" };
const _sfc_main = /* @__PURE__ */ defineComponent({
  props: {
    text: null
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [
        renderSlot(_ctx.$slots, "default", {}, () => [
          createTextVNode(toDisplayString(props.text || "\u6211\u662F\u6587\u672C\u7EC4\u4EF6"), 1)
        ], true)
      ]);
    };
  }
});
var Text = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-4986087a"]]);
const TextPlugin = {
  install(app) {
    app.component("istar-text", Text);
  }
};
const ISTARPlugin = {
  install(app) {
    var _a, _b;
    (_a = ButtonPlugin.install) == null ? void 0 : _a.call(ButtonPlugin, app);
    (_b = TextPlugin.install) == null ? void 0 : _b.call(TextPlugin, app);
  }
};
export { Button, ButtonPlugin, Text, TextPlugin, ISTARPlugin as default };
