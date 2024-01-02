"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      username: "",
      phoneNumber: "",
      password: "",
      confirmPassword: ""
    };
  },
  methods: {
    register() {
      if (!this.validateUsername() || !this.validatePhoneNumber() || !this.validatePassword() || !this.validateConfirmPassword()) {
        return;
      }
      common_vendor.index.request({
        url: "http://localhost:8014/register",
        method: "POST",
        data: {
          user_id: Math.floor(Math.random(``) * 9e5) + 1e5,
          username: this.username,
          phone: this.phoneNumber,
          password: this.password
        },
        success: (res) => {
          const result = res.data;
          if (result.success) {
            common_vendor.index.showToast({
              title: "注册成功",
              icon: "none"
            });
            setTimeout(function() {
              common_vendor.index.redirectTo({
                url: "/pages/userAction/Login"
              });
            }, 5e3);
          } else {
            common_vendor.index.showToast({
              title: result.message,
              icon: "none"
            });
          }
        },
        fail: (err) => {
          console.error(err);
          common_vendor.index.showToast({
            title: "注册失败",
            icon: "none"
          });
        }
      });
    },
    validateUsername() {
      if (!this.username) {
        common_vendor.index.showToast({
          title: "请给自己起个名字!",
          icon: "none"
        });
        return false;
      }
      if (this.username.length > 13) {
        common_vendor.index.showToast({
          title: "用户名太长啦！",
          icon: "none"
        });
        return false;
      }
      return true;
    },
    validatePhoneNumber() {
      const phoneRegex = /^1\d{10}$/;
      if (!this.phoneNumber) {
        common_vendor.index.showToast({
          title: "请输入你的手机号",
          icon: "none"
        });
        return false;
      }
      if (!phoneRegex.test(this.phoneNumber)) {
        common_vendor.index.showToast({
          title: "这是无效的手机号！",
          icon: "none"
        });
        return false;
      }
      return true;
    },
    validatePassword() {
      const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z!@#$%^&*]{8,}$/;
      if (!this.password) {
        common_vendor.index.showToast({
          title: "请输入你的密码",
          icon: "none"
        });
        return false;
      }
      if (!passwordRegex.test(this.password)) {
        common_vendor.index.showToast({
          title: "密码不少于八位且至少有一个特殊字符！",
          icon: "none"
        });
        return false;
      }
      return true;
    },
    validateConfirmPassword() {
      if (!this.confirmPassword) {
        common_vendor.index.showToast({
          title: "请确认你输入的密码",
          icon: "none"
        });
        return false;
      }
      if (this.password !== this.confirmPassword) {
        common_vendor.index.showToast({
          title: "两次密码设置不匹配！",
          icon: "none"
        });
        return false;
      }
      return true;
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: $data.username,
    b: common_vendor.o(($event) => $data.username = $event.detail.value),
    c: $data.phoneNumber,
    d: common_vendor.o(($event) => $data.phoneNumber = $event.detail.value),
    e: $data.password,
    f: common_vendor.o(($event) => $data.password = $event.detail.value),
    g: $data.confirmPassword,
    h: common_vendor.o(($event) => $data.confirmPassword = $event.detail.value),
    i: common_vendor.o((...args) => $options.register && $options.register(...args))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-4df0870e"], ["__file", "F:/HBuilder/Uni-APP_project/FirstPorjefct/pages/userAction/Register.vue"]]);
wx.createPage(MiniProgramPage);
