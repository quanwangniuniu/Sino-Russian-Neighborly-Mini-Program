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
      common_vendor.index.chooseMessageFile({
        count: 1,
        // 最多可选择的文件数量，这里设置为1表示只能选择一份文件
        type: "file",
        // 选择文件类型，这里设置为 'file' 表示只能选择文件，如果要同时选择图片和文件，可以设置为 'all'
        success: function(res) {
          const tempFiles = res.tempFiles;
          common_vendor.index.uploadFile({
            url: "https://fanyi-api.baidu.com/transapi/doctrans/createjob/quote",
            // 替换为你的文件上传接口地址
            filePath: tempFiles[0].path,
            // 选中文件的临时文件路径
            name: "file",
            // 上传文件对应的后端字段名，根据后端接口要求设置
            formData: {
              // 这里可以添加其他上传所需的参数，根据后端接口要求设置
            },
            success: function(uploadRes) {
              console.log("文件上传成功：", uploadRes.data);
            },
            fail: function(err) {
              console.error("文件上传失败：", err);
            }
          });
        },
        fail: function(err) {
          console.error("选择文件失败：", err);
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
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "F:/HBuilder/Uni-APP_project/FirstPorjefct/pages/userAction/Translation/DocumentTranslation.vue"]]);
wx.createPage(MiniProgramPage);
