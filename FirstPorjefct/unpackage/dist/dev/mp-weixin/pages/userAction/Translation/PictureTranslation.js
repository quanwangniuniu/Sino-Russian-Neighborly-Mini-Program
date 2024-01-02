"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      translation: ""
    };
  },
  methods: {
    uploadFile() {
      const salt = (/* @__PURE__ */ new Date()).getTime().toString();
      const from = "auto";
      const to = "zh";
      const appid = "20230522001685783";
      const sk = "8FH74f4tnul8xRaQkrRu";
      const cuid = "APICUID";
      const mac = "mac";
      let img = "";
      common_vendor.index.chooseImage({
        success: (chooseImageRes) => {
          const tempFilePaths = chooseImageRes.tempFilePaths;
          common_vendor.index.getFileSystemManager().readFile({
            filePath: tempFilePaths.toString(),
            success: function(fileData) {
              common_vendor.CryptoJS.MD5(tempFilePaths.toString()).toString();
              img = common_vendor.CryptoJS.MD5(fileData).toString();
              console.log("图片的MD5值：", img);
              console.log("image拿到了就显示:", img);
              const sign = common_vendor.CryptoJS.MD5(appid + img + salt + cuid + mac + sk).toString();
              console.log("appid:", appid);
              console.log("img:", img);
              console.log("salt:", salt);
              console.log("cuid:", cuid);
              console.log("mac:", mac);
              console.log("sk:", sk);
              console.log("MD5图片加密", img);
              console.log("图片内容:", tempFilePaths);
              common_vendor.index.uploadFile({
                url: "https://fanyi-api.baidu.com/api/trans/sdk/picture",
                filePath: tempFilePaths.toString(),
                name: "image",
                formData: {
                  from,
                  to,
                  appid,
                  salt,
                  cuid,
                  mac,
                  sign
                },
                success: function(uploadRes) {
                  console.log(uploadRes.data);
                },
                fail: function(err) {
                  console.error(err);
                }
              });
            },
            fail: function(err) {
              console.error("读取选中图片的内容失败：", err);
            }
          });
        }
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o((...args) => $options.uploadFile && $options.uploadFile(...args)),
    b: common_vendor.t($data.translation)
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "F:/HBuilder/Uni-APP_project/FirstPorjefct/pages/userAction/Translation/PictureTranslation.vue"]]);
wx.createPage(MiniProgramPage);
