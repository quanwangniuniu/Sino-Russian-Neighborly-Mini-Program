<template>
  <view class="container">
    <view class="header">
      <text class="title">风土人情概述</text>
    </view>
    <view class="content">
      <view class="section">
        <text class="section-title">地理环境：</text>
        <text class="info">俄罗斯地域辽阔，地形复杂多样，从东部的高原到西部的平原，再到南部的山地和北冰洋，构成了独特的自然景观。东西伯利亚的贝加尔湖是世界上最深、最古老的淡水湖之一，阿尔泰山脉是亚洲最高的山脉，而乌拉尔山脉则是欧洲最长的山脉。</text>
      </view>

      <view class="section">
        <text class="section-title">气候特点：</text>
        <text class="info">俄罗斯属于温带大陆性气候，冬季寒冷漫长，夏季炎热短暂。西伯利亚地区冬季气温可低至零下50摄氏度，而南部地区的夏季则可达到30摄氏度左右。</text>
      </view>
	  
	  <view class="section">
	          <text class="section-title">文化传统：</text>
	          <text class="info">俄罗斯历史悠久，拥有丰富的文化遗产。东正教是俄罗斯的主要宗教，圣彼得堡和莫斯科等地有许多著名的教堂和修道院。俄罗斯的艺术形式丰富多样，包括绘画、雕塑、建筑等。此外，俄罗斯还以其世界闻名的文学作品而闻名于世，如普希金、陀思妥耶夫斯基、托尔斯泰等伟大作家的作品。</text>
	        </view>
	  
	        <view class="section">
	          <text class="section-title">节日庆典：</text>
	          <text class="info">俄罗斯的传统节日有新年（1月1日）、复活节（4月9日）和国庆日（6月12日）。在新年期间，人们会举行盛大的庆祝活动，如烟火表演、家庭聚会等。复活节期间，人们会互赠彩蛋以表达祝福。国庆节期间，全国各地都会举行盛大的游行和庆典活动。</text>
	        </view>
	  
	        <view class="section">
	          <text class="section-title">饮食习惯：</text>
	          <text class="info">俄罗斯的饮食以面食、肉类和奶制品为主。面包、饼干和糕点是俄罗斯人日常饮食的重要组成部分。此外，俄罗斯还是世界上最大的伏特加生产国，伏特加是俄罗斯的传统酒精饮料。</text>
	        </view>
	  
	        <view class="section">
	          <text class="section-title">民间艺术：</text>
	          <text class="info">俄罗斯的民间艺术丰富多彩，如木制玩具、刺绣、陶瓷制品等。俄罗斯套娃是世界上最著名的套娃之一，每个娃娃都是一个独立的小玩偶，可以拆开后放入其他娃娃中。此外，俄罗斯还有一种名为马林巴的打击乐器，以其独特的音色而受到喜爱。</text>
	        </view>
	  
	        <view class="section">
	          <text class="section-title">体育项目：</text>
	          <text class="info">俄罗斯在体育领域有着悠久的历史和辉煌的成就。足球、篮球、排球等运动在俄罗斯非常受欢迎，尤其是世界杯足球赛更是吸引了全球观众的关注。此外，花样滑冰和体操也是俄罗斯的传统优势项目。</text>
	        </view>
            
			<view class="section">
			  <text class="section-title">历史背景：</text>
			  <text class="info">俄罗斯有着丰富的历史，包括沙皇统治、十月革命和苏联时期等重要历史事件。这个国家的历史对世界产生了深远的影响。</text>
			</view>
			
			<view class="section">
			  <text class="section-title">语言：</text>
			  <text class="info">俄语是俄罗斯的官方语言，广泛使用。此外，俄罗斯还拥有众多少数民族，他们使用各自的语言和方言。</text>
			</view>
			
			<view class="section">
			  <text class="section-title">科学与技术：</text>
			  <text class="info">俄罗斯在科学和技术领域取得了许多重要突破，包括太空探索、核能技术和数学领域的杰出成就。</text>
			</view>
			
			<view class="section">
			  <text class="section-title">自然资源：</text>
			  <text class="info">俄罗斯是自然资源丰富的国家，拥有大量的石油、天然气、煤炭和森林资源。这些资源对国家经济至关重要。</text>
			</view>
			
			<view class="section">
			  <text class="section-title">交通和交通工具：</text>
			  <text class="info">由于国土广阔，俄罗斯的交通系统包括铁路、公路、内河和海运等多种方式。另外，俄罗斯是世界上最大的铁路运输国之一。</text>
			</view>
           
    </view>
	         <view class="tip-container">
	             <view class="tip-content">
	               <text class="tip-text">这些内容都详细散落在其他模块中</text>
	             </view>
	           </view>
  </view>
</template>


<script>
export default {
  data() {
    return {
      showTip: false, // 控制提示组件显示与隐藏
    };
  },
  methods: {
    // 监听滚动到底部
    handleScrollToLower() {
      this.showTip = true; // 滑到最低端时显示提示
    },
    // 监听滚动到顶部
    handleScrollToUpper() {
      this.showTip = false; // 往上滑动时隐藏提示
    },
  },
};
</script>


<style>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f4f4f4;
  height: 100vh; /* 设置容器高度占满屏幕 */
}

.header {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
  text-align: center; /* 文字居中 */
  color: #333; /* 文字颜色 */
}

.title {
  font-size: 28px; /* 标题字体大小 */
}

.content {
  width: 90%; /* 内容部分宽度 */
  padding: 20px; /* 内边距 */
  background-color: #fff; /* 内容背景色 */
  border-radius: 10px; /* 边框圆角 */
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1); /* 阴影效果 */
}

.section {
  margin-bottom: 20px;
}

.section-title {
  font-weight: bold;
  margin-bottom: 10px;
  color: #555;
}

.info {
  text-align: justify;
  color: #333;
}
/* 提示组件样式 */
.tip-container {
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #4CAF50;
  color: #fff;
  border-radius: 5px;
  padding: 10px 20px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  z-index: 9999;
  transition: transform 0.3s ease-in-out; /* 添加过渡动画 */
  transform: translateY(70%); /* 默认隐藏在底部 */
}

.tip-content {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

.tip-text {
  font-size: 16px;
  margin-bottom: 5px;
}

/* scroll-view 样式 */
.scroll-view {
  /* 添加 scroll-view 样式 */
}
</style>
