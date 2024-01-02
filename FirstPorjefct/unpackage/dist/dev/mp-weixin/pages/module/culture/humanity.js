"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  methods: {
    navigateTo(route) {
      common_vendor.index.navigateTo({
        url: `/pages/module/humanity/${route}`
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o(($event) => $options.navigateTo("culture")),
    b: common_vendor.o(($event) => $options.navigateTo("geography")),
    c: common_vendor.o(($event) => $options.navigateTo("traditional-food")),
    d: common_vendor.o(($event) => $options.navigateTo("festivals")),
    e: common_vendor.o(($event) => $options.navigateTo("religion")),
    f: common_vendor.o(($event) => $options.navigateTo("customs")),
    g: common_vendor.o(($event) => $options.navigateTo("classics")),
    h: common_vendor.o(($event) => $options.navigateTo("cultural-differences"))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-4eb8c5b5"], ["__file", "F:/HBuilder/Uni-APP_project/FirstPorjefct/pages/module/culture/humanity.vue"]]);
wx.createPage(MiniProgramPage);
