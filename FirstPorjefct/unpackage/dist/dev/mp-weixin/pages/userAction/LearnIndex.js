"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  methods: {
    navigateTo(module) {
      common_vendor.index.navigateTo({
        url: `/pages/userAction/Learn/${module}`
      });
    },
    back() {
      common_vendor.index.navigateBack({
        delta: 1
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o(($event) => $options.navigateTo("Vocabulary")),
    b: common_vendor.o(($event) => $options.navigateTo("WordTest")),
    c: common_vendor.o(($event) => $options.navigateTo("Overview"))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-4045480c"], ["__file", "F:/HBuilder/Uni-APP_project/FirstPorjefct/pages/userAction/LearnIndex.vue"]]);
wx.createPage(MiniProgramPage);
