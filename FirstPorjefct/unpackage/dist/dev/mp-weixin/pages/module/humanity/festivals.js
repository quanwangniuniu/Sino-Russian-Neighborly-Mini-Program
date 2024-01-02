"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  components: {},
  data() {
    return {
      active: 1,
      list2: [
        {
          title: "新年 Новый год",
          desc: "1月1日"
        },
        {
          title: "圣瓦伦丁节(情人节) День Святого Валентина",
          desc: "2月14日"
        },
        {
          title: "祖国保卫者日（又称男人节) День защитников Отечества",
          desc: "2月23日"
        },
        {
          title: "三八妇女节(国际性节日) Международный женский день",
          desc: "3月8日"
        },
        {
          title: "谢肉节 Масленица",
          desc: "复活节前的第8周"
        },
        {
          title: "三圣节 Святой праздник",
          desc: "复活节后50天"
        },
        {
          title: "五一劳动节(国际性节日) Праздник Весны и Труда",
          desc: "5月1日"
        },
        {
          title: "胜利日(纪念伟大的卫国战争胜利) День победы ",
          desc: "5月9日"
        },
        {
          title: "儿童节 Международный день защиты дедей ",
          desc: "6月1日"
        },
        {
          title: "诗歌节 Праздник поэзин ",
          desc: "6月6日"
        },
        {
          title: "独立日 День независимости",
          desc: "6月12日 "
        },
        {
          title: "卫国战争纪念日 День памяти защитников Отечества  ",
          desc: "6月22日 "
        },
        {
          title: "青年节 День молодых людей  ",
          desc: "6月最后一个星期的星期日"
        },
        {
          title: "Праздник Ильи 伊里亚节 ",
          desc: "8月1日"
        },
        {
          title: "知识节 День знаний",
          desc: "9月1日 "
        },
        {
          title: "教师节 День Учителя ",
          desc: "10月的第一个星期天 "
        },
        {
          title: "十月革命节 Октябрьский революционный фестиваль",
          desc: "11月7日 "
        },
        {
          title: "宪法节 Конституционный раздел ",
          desc: "12月12日 "
        }
      ]
    };
  },
  methods: {
    change() {
      if (this.active < this.list2.length - 1) {
        this.active += 1;
      } else {
        this.active = 0;
      }
    }
  }
};
if (!Array) {
  const _easycom_uni_group2 = common_vendor.resolveComponent("uni-group");
  const _easycom_uni_section2 = common_vendor.resolveComponent("uni-section");
  const _easycom_uni_steps2 = common_vendor.resolveComponent("uni-steps");
  (_easycom_uni_group2 + _easycom_uni_section2 + _easycom_uni_steps2)();
}
const _easycom_uni_group = () => "../../../uni_modules/uni-group/components/uni-group/uni-group.js";
const _easycom_uni_section = () => "../../../uni_modules/uni-section/components/uni-section/uni-section.js";
const _easycom_uni_steps = () => "../../../uni_modules/uni-steps/components/uni-steps/uni-steps.js";
if (!Math) {
  (_easycom_uni_group + _easycom_uni_section + _easycom_uni_steps)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      title: "起源",
      mode: "card"
    }),
    b: common_vendor.p({
      title: "习俗",
      mode: "card"
    }),
    c: common_vendor.p({
      title: "一．新年—1月1日",
      type: "line"
    }),
    d: common_vendor.p({
      title: "起源",
      mode: "card"
    }),
    e: common_vendor.p({
      title: "习俗",
      mode: "card"
    }),
    f: common_vendor.p({
      title: "二．圣瓦伦丁节(情人节)—2月14日",
      type: "line"
    }),
    g: common_vendor.p({
      title: "起源",
      mode: "card"
    }),
    h: common_vendor.p({
      title: "习俗",
      mode: "card"
    }),
    i: common_vendor.p({
      title: "三.祖国保卫者日(男人节)—2月23日",
      type: "line"
    }),
    j: common_vendor.p({
      title: "起源",
      mode: "card"
    }),
    k: common_vendor.p({
      title: "习俗",
      mode: "card"
    }),
    l: common_vendor.p({
      title: "四．三八妇女节(国际性节日)—3月8日",
      type: "line"
    }),
    m: common_vendor.p({
      title: "起源",
      mode: "card"
    }),
    n: common_vendor.p({
      title: "习俗",
      mode: "card"
    }),
    o: common_vendor.p({
      title: "五．谢肉节—复活节前的第8周",
      type: "line"
    }),
    p: common_vendor.p({
      title: "起源",
      mode: "card"
    }),
    q: common_vendor.p({
      title: "习俗",
      mode: "card"
    }),
    r: common_vendor.p({
      title: "六．三圣节—复活节后50天",
      type: "line"
    }),
    s: common_vendor.p({
      title: "起源",
      mode: "card"
    }),
    t: common_vendor.p({
      title: "习俗",
      mode: "card"
    }),
    v: common_vendor.p({
      title: "七．五一劳动节(国际性节日)—5月1日",
      type: "line"
    }),
    w: common_vendor.p({
      title: "起源",
      mode: "card"
    }),
    x: common_vendor.p({
      title: "习俗",
      mode: "card"
    }),
    y: common_vendor.p({
      title: "八．胜利日(纪念伟大的卫国战争胜利)—5月9日",
      type: "line"
    }),
    z: common_vendor.p({
      title: "起源",
      mode: "card"
    }),
    A: common_vendor.p({
      title: "习俗",
      mode: "card"
    }),
    B: common_vendor.p({
      title: "九．儿童节—6月1日",
      type: "line"
    }),
    C: common_vendor.p({
      title: "起源",
      mode: "card"
    }),
    D: common_vendor.p({
      title: "习俗",
      mode: "card"
    }),
    E: common_vendor.p({
      title: "十．诗歌节—6月6日",
      type: "line"
    }),
    F: common_vendor.p({
      title: "起源",
      mode: "card"
    }),
    G: common_vendor.p({
      title: "习俗",
      mode: "card"
    }),
    H: common_vendor.p({
      title: "十一．独立日（俄罗斯日）—6月12日",
      type: "line"
    }),
    I: common_vendor.p({
      title: "起源",
      mode: "card"
    }),
    J: common_vendor.p({
      title: "习俗",
      mode: "card"
    }),
    K: common_vendor.p({
      title: "十二．卫国战争纪念日—6月22日",
      type: "line"
    }),
    L: common_vendor.p({
      title: "起源",
      mode: "card"
    }),
    M: common_vendor.p({
      title: "习俗",
      mode: "card"
    }),
    N: common_vendor.p({
      title: "十三．青年节—6月最后一个星期的星期日",
      type: "line"
    }),
    O: common_vendor.p({
      title: "起源",
      mode: "card"
    }),
    P: common_vendor.p({
      title: "习俗",
      mode: "card"
    }),
    Q: common_vendor.p({
      title: "十四．伊里亚节—8月2日",
      type: "line"
    }),
    R: common_vendor.p({
      title: "起源",
      mode: "card"
    }),
    S: common_vendor.p({
      title: "习俗",
      mode: "card"
    }),
    T: common_vendor.p({
      title: "十五．知识节—9月1日",
      type: "line"
    }),
    U: common_vendor.p({
      title: "起源",
      mode: "card"
    }),
    V: common_vendor.p({
      title: "习俗",
      mode: "card"
    }),
    W: common_vendor.p({
      title: "十六．教师节—10月的第一个星期天 ",
      type: "line"
    }),
    X: common_vendor.p({
      title: "起源",
      mode: "card"
    }),
    Y: common_vendor.p({
      title: "习俗",
      mode: "card"
    }),
    Z: common_vendor.p({
      title: "十七．十月革命节—11月7日",
      type: "line"
    }),
    aa: common_vendor.p({
      title: "起源",
      mode: "card"
    }),
    ab: common_vendor.p({
      title: "习俗",
      mode: "card"
    }),
    ac: common_vendor.p({
      title: "十八．宪法日—12月12日",
      type: "line"
    }),
    ad: common_vendor.o((...args) => $options.change && $options.change(...args)),
    ae: common_vendor.p({
      options: $data.list2,
      ["active-color"]: "#007AFF",
      active: $data.active,
      direction: "column"
    }),
    af: common_vendor.p({
      title: "附：俄罗斯节日表",
      type: "line",
      padding: true
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "F:/HBuilder/Uni-APP_project/FirstPorjefct/pages/module/humanity/festivals.vue"]]);
wx.createPage(MiniProgramPage);
