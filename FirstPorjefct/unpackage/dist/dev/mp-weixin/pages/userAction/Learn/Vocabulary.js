"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      words: [],
      // 存储返回的单词数组
      index: 0,
      // 指针位置，控制显示的当前单词
      currentWord: {},
      // 当前显示的单词对象
      showTranslation: false,
      // 是否显示单词的翻译
      numbers: common_vendor.index.getStorageSync("WordsNumber"),
      userId: common_vendor.index.getStorageSync("loggedInUserId")
    };
  },
  computed: {
    showNextButton() {
      return this.index < this.words.length - 1;
    }
  },
  mounted() {
    this.getNumbers();
    this.fetchWords();
    this.getIndex();
  },
  methods: {
    getNumbers() {
      common_vendor.index.request({
        url: "http://localhost:8014/wordNumber",
        // 后端接口地址
        method: "GET",
        data: {
          phoneNumber: common_vendor.index.getStorageSync("loggedInPhoneNumber")
          // 从本地获取的用户ID
        },
        success: (res) => {
          this.numbers = res.data;
        },
        fail: (err) => {
          console.error(err);
        }
      });
    },
    getIndex() {
      common_vendor.index.request({
        url: "http://localhost:8014/index",
        // 后端接口地址
        method: "GET",
        data: {
          phoneNumber: common_vendor.index.getStorageSync("loggedInPhoneNumber")
          // 从本地获取的用户ID
        },
        success: (res) => {
          this.index = res.data;
          console.log("index:", res.data);
        },
        fail: (err) => {
          console.error(err);
        }
      });
    },
    fetchWords() {
      common_vendor.index.request({
        url: "http://localhost:8014/getBasicWords/" + this.numbers.toString(),
        method: "GET",
        data: {
          wordIndex: common_vendor.index.getStorageSync("WordIndex")
          // 从本地获取的用户ID
        },
        success: (res) => {
          if (res.statusCode === 200) {
            this.words = res.data;
            this.currentWord = this.words[this.index];
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
    handleKnown() {
      this.showTranslation = true;
      const currentTimeInSeconds = Math.floor(Date.now() / 1e3);
      const date = new Date(currentTimeInSeconds * 1e3);
      const formattedDate = `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, "0")}-${date.getDate().toString().padStart(2, "0")} ${date.getHours().toString().padStart(2, "0")}:${date.getMinutes().toString().padStart(2, "0")}:${date.getSeconds().toString().padStart(2, "0")}`;
      console.log(formattedDate);
      common_vendor.index.request({
        url: "http://localhost:8014/addBasicRecord",
        // Backend API endpoint to handle the update
        method: "POST",
        // Use 'POST' for updating data
        data: {
          userId: common_vendor.index.getStorageSync("loggedInUserId"),
          learnedTime: formattedDate,
          wordContent: this.currentWord.wordContent,
          wordWeight: 50,
          translation: this.currentWord.translation
        },
        success: (res) => {
          console.log("successfully:", res.data);
        },
        fail: (err) => {
          console.error("Failed to insert this BasicRecord", err);
        }
      });
    },
    handleUnknown() {
      this.showTranslation = true;
      const currentTimeInSeconds = Math.floor(Date.now() / 1e3);
      const date = new Date(currentTimeInSeconds * 1e3);
      const formattedDate = `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, "0")}-${date.getDate().toString().padStart(2, "0")} ${date.getHours().toString().padStart(2, "0")}:${date.getMinutes().toString().padStart(2, "0")}:${date.getSeconds().toString().padStart(2, "0")}`;
      console.log(formattedDate);
      common_vendor.index.request({
        url: "http://localhost:8014/addBasicRecord",
        // Backend API endpoint to handle the update
        method: "POST",
        // Use 'POST' for updating data
        data: {
          userId: common_vendor.index.getStorageSync("loggedInUserId"),
          learnedTime: formattedDate,
          wordContent: this.currentWord.wordContent,
          wordWeight: -50,
          translation: this.currentWord.translation
        },
        success: (res) => {
          console.log("successfully:", res.data);
        },
        fail: (err) => {
          console.error("Failed to insert this BasicRecord", err);
        }
      });
    },
    handleNext() {
      if (this.index < this.words.length - 1) {
        this.index++;
        this.currentWord = this.words[this.index];
        this.showTranslation = false;
      }
      common_vendor.index.request({
        url: "http://localhost:8014/IndexChanged",
        // Backend API endpoint to handle the update
        method: "POST",
        // Use 'POST' for updating data
        data: {
          user_id: common_vendor.index.getStorageSync("loggedInUserId"),
          wordIndex: this.index,
          wordNumber: common_vendor.index.getStorageSync("WordsNumber")
        },
        success: (res) => {
          console.log("successfully:", res.data);
          common_vendor.index.setStorage({
            key: "WordIndex",
            data: this.index
          });
        },
        fail: (err) => {
          console.error("Failed to update the index", err);
        }
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.t($data.currentWord.wordContent),
    b: $data.showTranslation
  }, $data.showTranslation ? {
    c: common_vendor.t($data.currentWord.translation)
  } : {}, {
    d: common_vendor.o((...args) => $options.handleUnknown && $options.handleUnknown(...args)),
    e: common_vendor.o((...args) => $options.handleKnown && $options.handleKnown(...args)),
    f: $options.showNextButton
  }, $options.showNextButton ? {
    g: common_vendor.o((...args) => $options.handleNext && $options.handleNext(...args))
  } : {});
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "F:/HBuilder/Uni-APP_project/FirstPorjefct/pages/userAction/Learn/Vocabulary.vue"]]);
wx.createPage(MiniProgramPage);
