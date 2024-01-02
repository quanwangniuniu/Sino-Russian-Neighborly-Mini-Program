"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      showTip: false
      // 控制提示组件显示与隐藏
    };
  },
  methods: {
    // 监听滚动到底部
    handleScrollToLower() {
      this.showTip = true;
    },
    // 监听滚动到顶部
    handleScrollToUpper() {
      this.showTip = false;
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {};
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "F:/HBuilder/Uni-APP_project/FirstPorjefct/pages/module/humanity/culture.vue"]]);
wx.createPage(MiniProgramPage);
