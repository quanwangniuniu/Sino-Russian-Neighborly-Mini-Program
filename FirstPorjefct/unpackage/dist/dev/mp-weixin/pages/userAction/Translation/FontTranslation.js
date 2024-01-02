"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      inputText: "",
      outputText: "",
      translationMode: "中-俄",
      // 默认为中文翻译为俄文
      translationModes: ["中-俄", "俄-中"]
      // 翻译模式列表
    };
  },
  computed: {
    getStringInputText() {
      return this.inputText.toString();
    }
  },
  methods: {
    getDstFromArrays(obj) {
      let result = null;
      function processArray(arr) {
        for (const item of arr) {
          if (item.hasOwnProperty("dst")) {
            result = item.dst;
            return;
          }
          for (const prop in item) {
            if (typeof item[prop] === "object" && item[prop] !== null) {
              processArray(Array.isArray(item[prop]) ? item[prop] : [item[prop]]);
            }
          }
        }
      }
      for (const key in obj) {
        if (Array.isArray(obj[key])) {
          processArray(obj[key]);
        }
      }
      return result;
    },
    toggleTranslationMode() {
      const currentIndex = this.translationModes.indexOf(this.translationMode);
      const nextIndex = (currentIndex + 1) % this.translationModes.length;
      this.translationMode = this.translationModes[nextIndex];
    },
    translateFinal() {
      if (this.translationMode === "中-俄") {
        this.outputText = translateChineseToRussian(this.inputText);
      } else if (this.translationMode === "俄-中") {
        this.outputText = translateRussianToChinese(this.inputText);
      }
    },
    translateChineseToRussian(inputText) {
      inputText = this.inputText;
      const appId = "20230522001685783";
      const appKey = "8FH74f4tnul8xRaQkrRu";
      const salt = (/* @__PURE__ */ new Date()).getTime().toString();
      const sign = common_vendor.CryptoJS.MD5(appId + inputText + salt + appKey).toString();
      const apiUrl = `https://api.fanyi.baidu.com/api/trans/vip/translate?q=${inputText}&from=auto&to=ru&appid=${appId}&salt=${salt}&sign=${sign}`;
      common_vendor.index.request({
        url: apiUrl,
        method: "POST",
        success: (res) => {
          const ans = res.data;
          this.outputText = ans;
          this.outputText = this.getDstFromArrays(this.outputText);
        },
        fail: (err) => {
          console.error("翻译请求失败:", err);
        }
      });
    },
    translateRussianToChinese(inputText) {
      inputText = this.inputText;
      const appId = "20230522001685783";
      const appKey = "8FH74f4tnul8xRaQkrRu";
      const salt = (/* @__PURE__ */ new Date()).getTime().toString();
      const sign = common_vendor.CryptoJS.MD5(appId + inputText + salt + appKey).toString();
      const apiUrl = `https://api.fanyi.baidu.com/api/trans/vip/translate?q=${inputText}&from=auto&to=zh&appid=${appId}&salt=${salt}&sign=${sign}`;
      common_vendor.index.request({
        url: apiUrl,
        method: "GET",
        success: (res) => {
          this.outputText = res.data;
          this.outputText = this.getDstFromArrays(this.outputText);
        },
        fail: (err) => {
          console.error("翻译请求失败:", err);
        }
      });
    },
    // test
    translate(inputText) {
      const testq = "В прошлом году я посетил Санкт-Петербург и впечатлился его красивой архитектурой";
      const appId = "20230522001685783";
      const appKey = "8FH74f4tnul8xRaQkrRu";
      const salt = (/* @__PURE__ */ new Date()).getTime().toString();
      const sign = common_vendor.CryptoJS.MD5(appId + testq + salt + appKey).toString();
      const apiUrl = `https://api.fanyi.baidu.com/api/trans/vip/translate?q=${testq}&from=auto&to=zh&appid=${appId}&salt=${salt}&sign=${sign}`;
      console.log(apiUrl);
      common_vendor.index.request({
        url: apiUrl,
        method: "GET",
        success: (res) => {
          const ans = res.data;
          this.outputText = ans;
          console.log(ans);
        },
        fail: (err) => {
          console.error("翻译请求失败:", err);
        }
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.t($data.translationMode),
    b: common_vendor.o((...args) => $options.toggleTranslationMode && $options.toggleTranslationMode(...args)),
    c: $data.inputText,
    d: common_vendor.o(($event) => $data.inputText = $event.detail.value),
    e: $data.translationMode === "中-俄"
  }, $data.translationMode === "中-俄" ? {
    f: common_vendor.o((...args) => $options.translateChineseToRussian && $options.translateChineseToRussian(...args))
  } : {}, {
    g: $data.translationMode === "俄-中"
  }, $data.translationMode === "俄-中" ? {
    h: common_vendor.o((...args) => $options.translateRussianToChinese && $options.translateRussianToChinese(...args))
  } : {}, {
    i: $data.outputText
  }, $data.outputText ? {
    j: common_vendor.t($data.outputText)
  } : {});
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-afd92165"], ["__file", "F:/HBuilder/Uni-APP_project/FirstPorjefct/pages/userAction/Translation/FontTranslation.vue"]]);
wx.createPage(MiniProgramPage);
