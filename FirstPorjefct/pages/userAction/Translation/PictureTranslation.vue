<template>
  <view class="translation-component">
    <view class="upload-area" @click="uploadFile">
      <image class="upload-icon" src="/static/icons/upload.png"></image>
      <text class="upload-text">点击上传图片</text>
    </view>
    <view class="result-area">
      <text class="result-text">{{ translation }}</text>
    </view>
  </view>
</template>

<script>
import CryptoJS, { MD5 } from 'crypto-js';
export default {
  data() {
    return {
      translation: '',
    };
  },
  methods: {
    uploadFile() {
      const salt = new Date().getTime().toString();
      const from = 'auto';
      const to = 'zh';
      // APPID
      const appid = '20230522001685783';
      // 密钥
      const sk = '8FH74f4tnul8xRaQkrRu';
      const cuid = 'APICUID';
      const mac = 'mac';
      // const sign2 = '';
	  let img = '';
	  let imgPath = '';

        uni.chooseImage({
        	success: (chooseImageRes) => {
        		const tempFilePaths = chooseImageRes.tempFilePaths;
				// 读取选中图片的内容
				    uni.getFileSystemManager().readFile({
				      filePath: tempFilePaths.toString(),
				      success: function (fileData) {
				        // 这里fileData.data是选中图片的内容，类型为Uint8Array
				        // 计算图片的MD5值等
						imgPath = CryptoJS.MD5(tempFilePaths.toString()).toString()
				        img = CryptoJS.MD5(fileData).toString();
				        console.log("图片的MD5值：", img);
						console.log("image拿到了就显示:",img)
						// const sign = CryptoJS.MD5(tempFilePaths.toString()).toString();
						const sign = CryptoJS.MD5(appid+img+salt+cuid+mac+sk).toString();
						console.log("appid:",appid)
						console.log("img:",img)
						console.log("salt:",salt)
						console.log("cuid:",cuid)
						console.log("mac:",mac)
						console.log("sk:",sk)
						console.log("MD5图片加密",img)
						console.log("图片内容:",tempFilePaths)
						 uni.uploadFile({
						      url: 'https://fanyi-api.baidu.com/api/trans/sdk/picture',
						      filePath: tempFilePaths.toString(),
						      name: 'image',
						      formData: {
						        from,
						        to,
						        appid,
						        salt,
						        cuid,
						        mac,
						        sign
						      },
						      success: function (uploadRes) {
						        console.log(uploadRes.data);
						      },
						      fail: function (err) {
						        console.error(err);
						      }
						    });
				      },
				      fail: function (err) {
				        console.error("读取选中图片的内容失败：", err);
				      }
				    });
				
				// console.log("image拿到了就显示:",img)
				// // const sign = CryptoJS.MD5(tempFilePaths.toString()).toString();
				// const sign = CryptoJS.MD5(appid+img+salt+cuid+mac+sk).toString();
				// console.log("appid:",appid)
				// console.log("img:",img)
				// console.log("salt:",salt)
				// console.log("cuid:",cuid)
				// console.log("mac:",mac)
				// console.log("sk:",sk)
				// console.log("MD5图片加密",img)
				// console.log("图片内容:",tempFilePaths)
    //     		 uni.uploadFile({
    //     		      url: 'https://fanyi-api.baidu.com/api/trans/sdk/picture',
    //     		      filePath: tempFilePaths.toString(),
    //     		      name: 'image',
    //     		      formData: {
    //     		        from,
    //     		        to,
    //     		        appid,
    //     		        salt,
    //     		        cuid,
    //     		        mac,
    //     		        sign
    //     		      },
    //     		      success: function (uploadRes) {
    //     		        console.log(uploadRes.data);
    //     		      },
    //     		      fail: function (err) {
    //     		        console.error(err);
    //     		      }
    //     		    });
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
