"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      username: common_vendor.index.getStorageSync("loggedInUsername"),
      avatar: "/static/avatar.jpg",
      signinCount: 10,
      lastSigninTime: "2023-06-16 10:00",
      language: "中文",
      isNightMode: false,
      memoryMode: "看俄文回忆中文",
      dailyStudyAmount: 10,
      phone: common_vendor.index.getStorageSync("loggedInPhoneNumber").replace(/(\d{3})\d{4}(\d{4})/, "$1****$2"),
      list: [10, 20, 30, 40, 50],
      index: 0,
      pickerValue: ""
    };
  },
  mounted() {
    this.getWordsNumber();
    this.getCheckInInfo();
  },
  methods: {
    getWordsNumber() {
      common_vendor.index.request({
        url: "http://localhost:8014/wordNumber",
        // 后端接口地址
        method: "GET",
        data: {
          phoneNumber: common_vendor.index.getStorageSync("loggedInPhoneNumber")
          // 从本地获取的用户手机号
        },
        success: (res) => {
          console.log(res.data);
          this.dailyStudyAmount = res.data;
          this.pickerValue = res.data;
          this.index = this.list.indexOf(res.data);
          common_vendor.index.setStorage({
            key: "WordsNumber",
            data: res.data
          });
        },
        fail: (err) => {
          console.error(err);
        }
      });
    },
    getCheckInInfo() {
      common_vendor.index.request({
        url: "http://localhost:8014/checkin/user",
        // 后端接口地址
        method: "GET",
        data: {
          userId: common_vendor.index.getStorageSync("loggedInUserId")
          // 从本地获取的用户ID
        },
        success: (res) => {
          this.lastSigninTime = res.data.recentCheckinDate;
          this.signinCount = res.data.totalCheckinCount;
        },
        fail: (err) => {
          console.error(err);
        }
      });
    },
    onPickerChange(event) {
      const { value } = event.detail;
      this.pickerValue = this.list[value];
      const newWordNumber = this.pickerValue;
      common_vendor.index.request({
        url: "http://localhost:8014/updateWordNumber",
        // Backend API endpoint to handle the update
        method: "POST",
        // Use 'POST' for updating data
        data: {
          user_id: common_vendor.index.getStorageSync("loggedInUserId"),
          wordNumber: newWordNumber,
          wordIndex: common_vendor.index.getStorageSync("WordIndex")
        },
        success: (res) => {
          console.log("WordNumber updated successfully:", res.data);
          common_vendor.index.setStorage({
            key: "WordsNumber",
            data: newWordNumber
          });
        },
        fail: (err) => {
          console.error("Failed to update WordNumber:", err);
        }
      });
    },
    uploadAvatar() {
      console.log("上传和修改头像");
    },
    signin() {
      const userID = common_vendor.index.getStorageSync("loggedInUserId");
      const today = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
      if (this.lastSigninTime === today) {
        common_vendor.index.showToast({
          title: "您今天已签到"
        });
      } else {
        common_vendor.index.request({
          url: "http://localhost:8014/checkin",
          method: "POST",
          data: { userID },
          success: (res) => {
            console.log("签到成功");
            common_vendor.index.showToast({
              title: "签到成功"
            });
            common_vendor.index.redirectTo({
              url: "/pages/userAction/Home/UserProfile"
            });
          },
          fail: (err) => {
            console.error("签到失败", err);
          }
        });
      }
      console.log("签到");
    },
    selectLanguage(language) {
      this.language = language;
    },
    toggleNightMode(value) {
      this.isNightMode = value;
    },
    selectMemoryMode(memoryMode) {
      this.memoryMode = memoryMode;
    },
    viewLearnedWords() {
      console.log("查看已学习单词");
      common_vendor.index.navigateTo({
        url: `/pages/userAction/Learn/Overview`
      });
    },
    logout() {
      common_vendor.index.showModal({
        title: "确认注销",
        content: "您确定要注销吗？",
        success: (res) => {
          if (res.confirm) {
            common_vendor.index.removeStorageSync("loggedInUsername");
            common_vendor.index.removeStorageSync("loggedInPhoneNumber");
            common_vendor.index.removeStorageSync("loggedInUserId");
            common_vendor.index.removeStorageSync("WordsNumber");
            common_vendor.index.removeStorageSync("WordIndex");
            common_vendor.index.reLaunch({
              url: "/pages/userAction/Login"
            });
          }
        }
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o((...args) => $options.uploadAvatar && $options.uploadAvatar(...args)),
    b: common_vendor.t($data.username),
    c: common_vendor.t($data.phone),
    d: common_vendor.o((...args) => $options.signin && $options.signin(...args)),
    e: common_vendor.t($data.signinCount),
    f: common_vendor.t($data.lastSigninTime),
    g: $data.language === "中文" ? 1 : "",
    h: common_vendor.o(($event) => $options.selectLanguage("中文")),
    i: $data.language === "俄语" ? 1 : "",
    j: common_vendor.o(($event) => $options.selectLanguage("俄语")),
    k: $data.language === "中文对照" ? 1 : "",
    l: common_vendor.o(($event) => $options.selectLanguage("中文对照")),
    m: $data.isNightMode,
    n: common_vendor.o((...args) => $options.toggleNightMode && $options.toggleNightMode(...args)),
    o: $data.memoryMode === "看俄文回忆中文" ? 1 : "",
    p: common_vendor.o(($event) => $options.selectMemoryMode("看俄文回忆中文")),
    q: $data.memoryMode === "看中文回忆俄文" ? 1 : "",
    r: common_vendor.o(($event) => $options.selectMemoryMode("看中文回忆俄文")),
    s: common_vendor.t($data.pickerValue),
    t: common_vendor.o((...args) => $options.onPickerChange && $options.onPickerChange(...args)),
    v: $data.index,
    w: $data.list,
    x: common_vendor.o((...args) => $options.viewLearnedWords && $options.viewLearnedWords(...args)),
    y: common_vendor.o((...args) => $options.logout && $options.logout(...args))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-442d0846"], ["__file", "F:/HBuilder/Uni-APP_project/FirstPorjefct/pages/userAction/Home/UserProfile.vue"]]);
wx.createPage(MiniProgramPage);
