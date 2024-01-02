<template>
  <view class="tab-bar">
    <view
      v-for="(tab, index) in tabs"
      :key="index"
      class="tab-item"
      :class="{ 'active': activeIndex === index }"
      @click="switchTab(index)"
    >
      {{ tab.title }}
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: 0, // 默认选中的索引
      tabs: [
        {
          title: '文化交流',
          icon: '../../static/icons/culture.png',
        },
        {
          title: '语言学习',
          icon: '../../static/icons/language.png',
        },
        {
          title: '个人中心',
          icon: '../../static/icons/personal.png',
        },
      ],
    };
  },
  methods: {
    switchTab(index) {
      this.activeIndex = index;
      // 在这里添加切换选项卡时的逻辑
      // 可以使用 uni.switchTab 或者其他适合的方法
    },
  },
};
</script>

<style scoped>
.tab-bar {
  display: flex;
  height: 50px;
  background-color: #f2f2f2;
}

.tab-item {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #333;
  font-size: 14px;
}

.tab-item.active {
  color: #007aff;
}
</style>
