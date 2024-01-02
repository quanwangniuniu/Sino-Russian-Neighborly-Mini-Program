"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      phone: "",
      password: ""
    };
  },
  methods: {
    getInfo() {
      common_vendor.index.request({
        url: "http://localhost:8014/getUserID",
        method: "GET",
        data: {
          phoneNumber: this.phone
        },
        success: (res) => {
          console.log(res);
          common_vendor.index.setStorage({
            key: "loggedInUserId",
            data: res.data.userId
          });
        },
        fail: (err) => {
          errorCallback(err);
        }
      });
    },
    goToRegistration() {
      common_vendor.index.navigateTo({
        url: `/pages/userAction/Register`
      });
    },
    // 注册功能
    login() {
      if (!this.phone) {
        common_vendor.index.showToast({
          title: "请输入手机号",
          icon: "none"
        });
        return;
      }
      const phoneRegex = /^1[0-9]{10}$/;
      if (!phoneRegex.test(this.phone)) {
        common_vendor.index.showToast({
          title: "请输入正确的手机号格式",
          icon: "none"
        });
        return;
      }
      if (!this.password) {
        common_vendor.index.showToast({
          title: "请输入密码",
          icon: "none"
        });
        return;
      }
      const requestData = {
        phone: this.phone,
        password: this.password
      };
      common_vendor.index.request(
        {
          url: "http://localhost:8014/login",
          method: "POST",
          data: requestData,
          success: (res) => {
            const result = res.data;
            if (result.success) {
              this.getInfo();
              common_vendor.index.setStorage({
                key: "loggedInPhoneNumber",
                data: requestData.phone,
                success: () => {
                  common_vendor.index.showToast({
                    title: "登录成功",
                    icon: "none"
                  });
                  common_vendor.index.request({
                    url: "http://localhost:8014/getUserName",
                    method: "GET",
                    data: {
                      phoneNumber: requestData.phone
                    },
                    success: (res2) => {
                      const userResult = res2.data;
                      if (userResult.success) {
                        common_vendor.index.setStorage({
                          key: "loggedInUsername",
                          data: userResult.userName,
                          // Set expiration time to 1 day
                          expires: 864e5,
                          success: () => {
                            common_vendor.index.switchTab({
                              url: "/pages/module/choose"
                            });
                          }
                        });
                      } else {
                        common_vendor.index.showToast({
                          title: "找不到此用户",
                          icon: "none"
                        });
                      }
                    },
                    fail: (err) => {
                      console.error(err);
                      common_vendor.index.showToast({
                        title: "获取用户名失败",
                        icon: "none"
                      });
                    }
                  });
                }
              });
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
              title: "登录请求失败",
              icon: "none"
            });
          }
        }
      );
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: $data.phone,
    b: common_vendor.o(($event) => $data.phone = $event.detail.value),
    c: $data.password,
    d: common_vendor.o(($event) => $data.password = $event.detail.value),
    e: common_vendor.o((...args) => $options.login && $options.login(...args)),
    f: common_vendor.o((...args) => $options.goToRegistration && $options.goToRegistration(...args))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-0a82aba4"], ["__file", "F:/HBuilder/Uni-APP_project/FirstPorjefct/pages/userAction/Login.vue"]]);
wx.createPage(MiniProgramPage);
