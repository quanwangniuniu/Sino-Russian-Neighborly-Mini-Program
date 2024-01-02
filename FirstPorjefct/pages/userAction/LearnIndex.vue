<template>
  <view class="template-container">
    <view class="template-header">
      <view class="template-title">学习选择</view>
      <!-- <image class="template-back" src="../../static/back.png" mode="aspectFit" @click="back"></image> -->
    </view>
    <view class="template-description">
      <text>加油，在睦邻快乐地学习俄语吧！</text>
    </view>
    <view class="template-section" @click="navigateTo('Vocabulary')" style="background-image:url(../../static/images/vocabulary.png);background-size: 60px,60px">
      <!-- <image class="template-logo" src="../../static/humanities.png" mode="aspectFit"></image> -->
      <text class="template-name">单词学习</text>
      <text class="template-name-translate">учиться</text>
    </view>
    <view class="template-section" @click="navigateTo('WordTest')" style="background-image:url(../../static/images/wordtest.png);">
      <!-- <image class="template-logo" src="../../static/trade.png" mode="aspectFit"></image> -->
      <text class="template-name">单词检测</text>
      <text class="template-name-translate">тестирование</text>
    </view>
    <view class="template-section" @click="navigateTo('Overview')" style="background-image:url(../../static/images/overview.png);">
      <!-- <image class="template-logo" src="../../static/politics.png" mode="aspectFit"></image> -->
      <text class="template-name">复习词汇</text>
      <text class="template-name-translate">повторение</text>
    </view>
  </view>
 
</template>

<script>
  export default {
    methods: {
      navigateTo(module) {
        uni.navigateTo({
          url: `/pages/userAction/Learn/${module}`
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
background-color: #ff557f; /* 设置边框内部背景色 /
border: 2px solid #ffaaff; / 设置边框颜色和宽度 */
background-repeat: no-repeat;
background-size: 50px,50px;
background-position: 20px ;
}

.template-name {
font-size: 20px;
font-weight: bold;
text-align: center;
color: #ffffff;
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