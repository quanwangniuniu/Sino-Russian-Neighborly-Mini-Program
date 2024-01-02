<template>
  <view class="containerI">
	 <view class="title">人文板块</view>
  </view>
  <view class="container">
    <view class="left-column">
      <view class="module" @click="navigateTo('culture')">
        <image class="module-icon" src="../../static/images/human01.png"></image>
        <text class="module-title">风土人情</text>
		<text class="template-name-translate">Национальные особенности и обычаи</text>
      </view>
      <view class="module" @click="navigateTo('geography')">
        <image class="module-icon" src="../../static/images/human02.png"></image>
        <text class="module-title">地理风貌</text>
		<text class="template-name-translate">Географические особенности</text>
      </view>
      <view class="module" @click="navigateTo('traditional-food')">
        <image class="module-icon" src="../../static/images/human03.png"></image>
        <text class="module-title">饮食习惯</text>
		<text class="template-name-translate"> Питание и привычки</text>
      </view>
      <view class="module" @click="navigateTo('festivals')">
        <image class="module-icon" src="../../static/images/human04.png"></image>
        <text class="module-title">传统节日</text>
		<text class="template-name-translate">Традиционные праздники</text>
      </view>
    </view>

    <view class="right-column">
      <view class="module" @click="navigateTo('religion')" style="background-image:url(../../static/images/star05.png);">
        <image class="module-icon" src="../../static/images/human05.png"></image>
        <text class="module-title">宗教信仰</text><br>
		<text class="template-name-translate">Религиозные верования</text>
	    <text class="module-title">  </text>
		 <text class="module-title">  </text>
      </view>
      <view class="module" @click="navigateTo('customs')">
        <image class="module-icon" src="../../static/images/human06.png"></image>
        <text class="module-title">传统习俗</text>
		<text class="template-name-translate">Традиционные обычаи</text>
		<text class="module-title">  </text>
      </view>
      <view class="module" @click="navigateTo('classics')">
        <image class="module-icon" src="../../static/images/human07.png"></image>
        <text class="module-title">经典书籍</text>
		<text class="template-name-translate">Классическая литература</text>
		<text class="module-title">  </text>
      </view>
      <view class="module" @click="navigateTo('cultural-differences')">
        <image class="module-icon" src="../../static/images/human08.png"></image>
        <text class="module-title">电影故事</text>
		<text class="template-name-translate">Культурные различия</text>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  methods: {
    navigateTo(route) {
      uni.navigateTo({
        url: `/pages/module/humanity/${route}`
      });
    }
  }
}
</script>

<style scoped>
.container {
  display: flex;
}

.left-column {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.right-column {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.module {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
  cursor: pointer;
}

.module-icon {
  width: 80px;
  height: 80px;
  border: 1px solid black;
  background-color: aquamarine;
}

.module-title {
  margin-top: 10px;
  font-size: 16px;
  font-weight: bold;
}

.template-name-translate {
font-size: 16px;
color: #666;
text-align: center;
}


.containerI {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f5f5f5;
}

.title {
  font-family: 'Arial', sans-serif;
  font-size: 50px;
  font-weight: bold;
  text-transform: uppercase;
  color: #333;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  background-image: linear-gradient(to right, #ff7f00, #ff0033);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: neon-glow 1.5s ease-in-out infinite alternate;
  margin: 1rem;
  padding:2rem;
}

@keyframes neon-glow {
  0% {
    text-shadow: 0 0 4px rgba(255, 255, 255, 0.8), 0 0 10px rgba(255, 255, 255, 0.4), 0 0 20px rgba(255, 255, 255, 0.2), 0 0 30px rgba(255, 255, 255, 0.1);
  }
  100% {
    text-shadow: 0 0 6px rgba(255, 255, 255, 0.8), 0 0 12px rgba(255, 255, 255, 0.4), 0 0 22px rgba(255, 255, 255, 0.2), 0 0 32px rgba(255, 255, 255, 0.1);
  }
}
</style>
