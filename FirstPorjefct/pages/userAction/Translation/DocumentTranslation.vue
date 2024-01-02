<template>
  <view class="translation-component">
    <view class="upload-area" @click="uploadFile">
      <image class="upload-icon" src="/static/icons/upload.png"></image>
      <text class="upload-text">点击上传文件</text>
    </view>
    <view class="result-area">
      <text class="result-text">{{ translation }}</text>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      translation: ''
    };
  },
  methods: {
    uploadFile() {
        uni.chooseMessageFile({
          count: 1, // 最多可选择的文件数量，这里设置为1表示只能选择一份文件
          type: 'file', // 选择文件类型，这里设置为 'file' 表示只能选择文件，如果要同时选择图片和文件，可以设置为 'all'
          success: function (res) {
            const tempFiles = res.tempFiles; // 选中文件的临时文件信息，是一个数组
        
            // 使用uni.uploadFile()方法上传文件
            uni.uploadFile({
              url: 'https://fanyi-api.baidu.com/transapi/doctrans/createjob/quote', // 替换为你的文件上传接口地址
              filePath: tempFiles[0].path, // 选中文件的临时文件路径
              name: 'file', // 上传文件对应的后端字段名，根据后端接口要求设置
              formData: {
                // 这里可以添加其他上传所需的参数，根据后端接口要求设置
              },
              success: function (uploadRes) {
                // 文件上传成功，返回的uploadRes.data包含了服务器返回的数据
                console.log('文件上传成功：', uploadRes.data);
              },
              fail: function (err) {
                console.error('文件上传失败：', err);
              }
            });
          },
          fail: function (err) {
            console.error('选择文件失败：', err);
          }
        });

    },
    
  }
}
</script>

<style>
.translation-component {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.upload-area {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 200px;
  background-color: #ebebeb;
  border-radius: 10px;
  margin-top: 50px;
  cursor: pointer;
}

.upload-icon {
  width: 80px;
  height: 80px;
}

.upload-text {
  margin-top: 10px;
  font-size: 16px;
  color: #333;
}

.result-area {
  margin-top: 20px;
}

.result-text {
  font-size: 18px;
  color: #333;
}
</style>
