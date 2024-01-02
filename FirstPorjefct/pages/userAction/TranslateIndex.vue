<template>
  <view class="template-container">
    <view class="template-header">
      <view class="template-title">翻译选择</view>
      <!-- <image class="template-back" src="../../static/back.png" mode="aspectFit" @click="back"></image> -->
    </view>
    <view class="template-description">
      <text>根据需要进行翻译功能的选择</text>
    </view>
    <view class="template-section" @click="navigateTo('FontTranslation')" style="background-image:url(../../static/images/font.png);">
      <!-- <image class="template-logo" src="../../static/humanities.png" mode="aspectFit"></image> -->
      <text class="template-name">文字翻译</text>
      <text class="template-name-translate">текст</text>
    </view>
    <view class="template-section" @click="navigateTo('DocumentTranslation')" style="background-image:url(../../static/images/document.png);">
      <!-- <image class="template-logo" src="../../static/trade.png" mode="aspectFit"></image> -->
      <text class="template-name">文档翻译</text>
      <text class="template-name-translate">документ</text>
    </view>
    <view class="template-section" @click="navigateTo('PictureTranslation')" style="background-image:url(../../static/images/picture.png);">
      <!-- <image class="template-logo" src="../../static/politics.png" mode="aspectFit"></image> -->
      <text class="template-name">图片翻译</text>
      <text class="template-name-translate">изображение</text>
    </view>
  </view>
 
</template>

<script>
  export default {
    methods: {
      navigateTo(module) {
        uni.navigateTo({
          url: `/pages/userAction/Translation/${module}`
        })
      },
      back() {
        uni.navigateBack({
          delta: 1
        })
      }
    }
  }
</script>

<style scoped>
.template-container {
display: flex;
flex-direction: column;
align-items: center;
}

.template-header {
display: flex;
justify-content: center;
align-items: center;
width: 100%;
height: 80px;
}

.template-title {
font-size: 24px;
font-weight: bold;
text-align: center;
}

.template-description {
margin-top: 5px;
margin-bottom: 5px;
}

.template-section {
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 250px;
height: 100px;
margin: 10px;
border-radius: 10px;
background-color: #aaff00; /* 设置边框内部背景色 /
border: 2px solid #ffaaff; / 设置边框颜色和宽度 */
background-repeat: no-repeat;
background-size: 50px,50px;
background-position: 20px ;
}

.template-name {
font-size: 20px;
font-weight: bold;
text-align: center;
}

.template-name-translate {
font-size: 16px;
color: #666;
text-align: center;
}

/* hover效果 */
.template-section:hover {
cursor: pointer;
box-shadow: 0px 0px 10px #ccc;
}

</style>