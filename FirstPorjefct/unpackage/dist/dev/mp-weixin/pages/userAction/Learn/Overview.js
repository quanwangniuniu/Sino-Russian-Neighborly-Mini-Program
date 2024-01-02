"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      words: [
        { wordContent: "Привет", translation: "你好", showChinese: false }
        // 添加更多的单词
      ],
      totalWords: 0,
      currentPage: 1,
      pageSize: 8
    };
  },
  mounted() {
    this.getOverViewsWords();
  },
  methods: {
    getOverViewsWords() {
      common_vendor.index.request({
        url: "http://localhost:8014/getOverViewWords",
        method: "GET",
        data: {
          userId: common_vendor.index.getStorageSync("loggedInUserId")
        },
        success: (res) => {
          if (res.statusCode === 200) {
            this.totalWords = res.data.length;
            Math.ceil(this.totalWords / 10);
            common_vendor.index.request({
              url: "http://localhost:8014/getOverViewWordsII",
              method: "GET",
              data: {
                userId: common_vendor.index.getStorageSync("loggedInUserId"),
                pageNum: 1,
                pageSize: 8
              },
              success: (res2) => {
                if (res2.statusCode === 200) {
                  this.words = res2.data;
                  this.wordsSize = res2.data.length;
                } else {
                  common_vendor.index.showToast({
                    title: "请求失败",
                    icon: "none"
                  });
                }
              },
              fail: () => {
                common_vendor.index.showToast({
                  title: "请求失败",
                  icon: "none"
                });
              }
            });
          } else {
            common_vendor.index.showToast({
              title: "请求失败",
              icon: "none"
            });
          }
        },
        fail: () => {
          common_vendor.index.showToast({
            title: "请求失败",
            icon: "none"
          });
        }
      });
    },
    showChinese(index) {
      this.words[index].showChinese = true;
    },
    handlePageChange(e) {
      common_vendor.index.request({
        url: "http://localhost:8014/getOverViewWordsII",
        method: "GET",
        data: {
          userId: common_vendor.index.getStorageSync("loggedInUserId"),
          pageNum: e.current,
          pageSize: 8
        },
        success: (res) => {
          if (res.statusCode === 200) {
            this.words = res.data;
            this.wordsSize = res.data.length;
          } else {
            common_vendor.index.showToast({
              title: "请求失败",
              icon: "none"
            });
          }
        },
        fail: () => {
          common_vendor.index.showToast({
            title: "请求失败",
            icon: "none"
          });
        }
      });
    }
  }
};
if (!Array) {
  const _easycom_uni_section2 = common_vendor.resolveComponent("uni-section");
  const _easycom_uni_pagination2 = common_vendor.resolveComponent("uni-pagination");
  (_easycom_uni_section2 + _easycom_uni_pagination2)();
}
const _easycom_uni_section = () => "../../../uni_modules/uni-section/components/uni-section/uni-section.js";
const _easycom_uni_pagination = () => "../../../uni_modules/uni-pagination/components/uni-pagination/uni-pagination.js";
if (!Math) {
  (_easycom_uni_section + _easycom_uni_pagination)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($data.words, (word, index, i0) => {
      return {
        a: common_vendor.t(word.wordContent),
        b: word.showChinese ? 1 : "",
        c: common_vendor.o(($event) => $options.showChinese(index), index),
        d: common_vendor.t(word.translation),
        e: word.showChinese ? 1 : "",
        f: index
      };
    }),
    b: common_vendor.p({
      title: "复习强化记忆",
      subTitle: "认识再看答案,如果每天都能够这样复习单词,那么记忆效果会翻倍哦!",
      type: "line",
      padding: true
    }),
    c: common_vendor.o($options.handlePageChange),
    d: common_vendor.p({
      current: this.currentPage,
      total: this.totalWords,
      ["page-size"]: $data.pageSize,
      title: "标题文字",
      ["prev-text"]: "前一页",
      ["next-text"]: "后一页"
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-b1833b0f"], ["__file", "F:/HBuilder/Uni-APP_project/FirstPorjefct/pages/userAction/Learn/Overview.vue"]]);
wx.createPage(MiniProgramPage);
