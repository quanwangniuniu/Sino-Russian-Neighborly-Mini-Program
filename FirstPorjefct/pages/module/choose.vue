<template>
  <view class="template-container">
    <view class="template-header">
      <view class="template-title">模块选择</view>
      <!-- <image class="template-back" src="../../static/back.png" mode="aspectFit" @click="back"></image> -->
    </view>
    <view class="template-description">
      <text>请点击您感兴趣的模块</text>
    </view>
    <view class="template-section" @click="navigateTo('humanity')" style="background-image:url(../../static/images/star01.png);">
      <!-- <image class="template-logo" src="../../static/humanities.png" mode="aspectFit"></image> -->
      <text class="template-name">人文</text>
      <text class="template-name-translate">Гуманитарные науки</text>
    </view>
    <view class="template-section" @click="navigateTo('trade')" style="background-image:url(../../static/images/star02.png);">
      <!-- <image class="template-logo" src="../../static/trade.png" mode="aspectFit"></image> -->
      <text class="template-name">贸易</text>
      <text class="template-name-translate">Торговля</text>
    </view>
    <view class="template-section" @click="navigateTo('politics')" style="background-image:url(../../static/images/star03.png);">
      <!-- <image class="template-logo" src="../../static/politics.png" mode="aspectFit"></image> -->
      <text class="template-name">时政</text>
      <text class="template-name-translate">Политика</text>
    </view>

    <view class="template-section" @click="navigateTo('language')" style="background-image:url(../../static/images/star05.png);">
      <!-- <image class="template-logo" src="../../static/language.png" mode="aspectFit"></image> -->
      <text class="template-name">语言</text>
      <text class="template-name-translate">Языковое обучение</text>
    </view>
  </view>
  <view>
	 <navi></navi>
  </view>
 
</template>

<script>
  export default {
	usingComponents: {
	    'navi': 'pages/module/navi/navi.vue',
	},
    methods: {
      navigateTo(module) {
        uni.navigateTo({
          url: `/pages/module/culture/${module}`
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
background-color: #aaffff; /* 设置边框内部背景色 /
border: 2px solid #ffaaff; / 设置边框颜色和宽度 */
background-repeat: no-repeat;
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