"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  components: {},
  data() {
    return {
      items: ["社交&宴请", "服装&餐饮", "婚嫁", "生活", "禁忌"],
      styles: [
        {
          value: "button",
          text: "按钮",
          checked: true
        },
        {
          value: "text",
          text: "文字"
        }
      ],
      colors: ["#007aff", "#4cd964", "#dd524d"],
      current: 0,
      colorIndex: 0,
      activeColor: "#007aff",
      styleType: "button"
    };
  },
  methods: {
    onClickItem(e) {
      if (this.current !== e.currentIndex) {
        this.current = e.currentIndex;
      }
    }
  }
};
if (!Array) {
  const _easycom_uni_segmented_control2 = common_vendor.resolveComponent("uni-segmented-control");
  const _easycom_uni_card2 = common_vendor.resolveComponent("uni-card");
  const _easycom_uni_section2 = common_vendor.resolveComponent("uni-section");
  const _easycom_uni_notice_bar2 = common_vendor.resolveComponent("uni-notice-bar");
  const _easycom_uni_group2 = common_vendor.resolveComponent("uni-group");
  (_easycom_uni_segmented_control2 + _easycom_uni_card2 + _easycom_uni_section2 + _easycom_uni_notice_bar2 + _easycom_uni_group2)();
}
const _easycom_uni_segmented_control = () => "../../../uni_modules/uni-segmented-control/components/uni-segmented-control/uni-segmented-control.js";
const _easycom_uni_card = () => "../../../uni_modules/uni-card/components/uni-card/uni-card.js";
const _easycom_uni_section = () => "../../../uni_modules/uni-section/components/uni-section/uni-section.js";
const _easycom_uni_notice_bar = () => "../../../uni_modules/uni-notice-bar/components/uni-notice-bar/uni-notice-bar.js";
const _easycom_uni_group = () => "../../../uni_modules/uni-group/components/uni-group/uni-group.js";
if (!Math) {
  (_easycom_uni_segmented_control + _easycom_uni_card + _easycom_uni_section + _easycom_uni_notice_bar + _easycom_uni_group)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.o($options.onClickItem),
    b: common_vendor.p({
      current: $data.current,
      values: $data.items,
      ["style-type"]: _ctx.button,
      ["active-color"]: $data.activeColor
    }),
    c: $data.current === 0
  }, $data.current === 0 ? {
    d: common_vendor.p({
      ["is-shadow"]: false
    }),
    e: common_vendor.p({
      title: "社交礼仪",
      type: "line"
    }),
    f: common_vendor.p({
      ["is-shadow"]: false
    }),
    g: common_vendor.p({
      title: "宴请礼仪",
      type: "line"
    })
  } : {}, {
    h: $data.current === 1
  }, $data.current === 1 ? {
    i: common_vendor.p({
      ["is-shadow"]: false
    }),
    j: common_vendor.p({
      title: "服装礼仪",
      type: "line"
    }),
    k: common_vendor.p({
      ["is-shadow"]: false
    }),
    l: common_vendor.p({
      title: "餐饮礼仪",
      type: "line"
    })
  } : {}, {
    m: $data.current === 2
  }, $data.current === 2 ? {
    n: common_vendor.p({
      ["show-icon"]: true,
      scrollable: true,
      text: "在婚俗上，俄罗斯族崇尚自由恋爱、婚姻自由，但讲究门当户对，结婚要征得父母同意。与其他民族都可以通婚。婚礼仪式隆重、繁琐。婚礼要在教堂举行，由神父为他们念祷文、唱赞美诗，互换结婚戒指。然后接回新郎家，举宴庆贺。现代婚礼和中国类似，但是传统婚礼存在着很多习俗礼教."
    }),
    o: common_vendor.p({
      title: "俄罗斯的婚嫁概述",
      type: "line"
    }),
    p: common_vendor.p({
      ["is-shadow"]: false
    }),
    q: common_vendor.p({
      title: "婚嫁习俗",
      type: "line"
    })
  } : {}, {
    r: $data.current === 3
  }, $data.current === 3 ? {
    s: common_vendor.p({
      ["is-shadow"]: false
    }),
    t: common_vendor.p({
      title: "生活习惯",
      type: "line"
    })
  } : {}, {
    v: $data.current === 4
  }, $data.current === 4 ? {
    w: common_vendor.p({
      ["is-shadow"]: false
    }),
    x: common_vendor.p({
      title: "习俗禁忌",
      type: "line"
    })
  } : {}, {
    y: common_vendor.p({
      title: "俄罗斯的传统习俗",
      type: "line"
    })
  });
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-35415b17"], ["__file", "F:/HBuilder/Uni-APP_project/FirstPorjefct/pages/module/humanity/customs.vue"]]);
wx.createPage(MiniProgramPage);
