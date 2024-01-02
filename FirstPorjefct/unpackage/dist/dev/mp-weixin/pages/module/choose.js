"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  usingComponents: {
    "navi": "pages/module/navi/navi.vue"
  },
  methods: {
    navigateTo(module) {
      common_vendor.index.navigateTo({
        url: `/pages/module/culture/${module}`
      });
    },
    back() {
      common_vendor.index.navigateBack({
        delta: 1
      });
    }
  }
};
if (!Array) {
  const _component_navi = common_vendor.resolveComponent("navi");
  _component_navi();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o(($event) => $options.navigateTo("humanity")),
    b: common_vendor.o(($event) => $options.navigateTo("trade")),
    c: common_vendor.o(($event) => $options.navigateTo("politics")),
    d: common_vendor.o(($event) => $options.navigateTo("language"))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-3aea678e"], ["__file", "F:/HBuilder/Uni-APP_project/FirstPorjefct/pages/module/choose.vue"]]);
wx.createPage(MiniProgramPage);
