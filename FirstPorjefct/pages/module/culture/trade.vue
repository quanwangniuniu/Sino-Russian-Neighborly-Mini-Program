<template>
  <view class="trade-page">
    <view class="content">
      <view class="section">
        <view class="section-container">
          <image class="section-image" src="../../../static/images/trade_statics.png"></image>
          <view class="section-text">
            <view class="section-title">俄罗斯的贸易情况</view>
            <view class="section-description">
             <p>据瀚闻资讯《全球贸易监测》镜像数据统计，2022年，在监测的68个经济体中，按美元计，与俄罗斯进出口保持增长的共36个，各经济体与俄罗斯进出口增速均值为10.0%，中位数为2.0%，其中，增速第一的是印度，累计增长195.8%，最低的是乌克兰，累计下降63.6%。
             
             从进口侧看，自俄罗斯进口保持增长的共44个，各经济体自俄罗斯进口增速均值为33.2%，中位数为27.4%，其中，增速第一的是印度，累计增长286.4%，最低的是尼日利亚，累计下降60.3%。
             
             从出口侧看，对俄罗斯出口保持增长的共9个，各经济体对俄罗斯出口增速均值为-29.4%，中位数为-35.5%，其中，增速第一的是亚美尼亚，累计增长71.2%，最低的是约旦，累计下降84.2%。
			 </p>
            </view>
          </view>
		  <image class="section-image" src="../../../static/images/trade1.png"></image>
		  <view class="section-text">
		    <view class="section-title">中国与俄罗斯的贸易情况</view>
		    <view class="section-description">
		     <p>
              2022年1-10月，中国自俄罗斯进口规模第一的是"原油 "，金额479.4亿美元，较上年增长49.6%；其次是"煤及褐煤"，金额95.2亿美元，较上年增长77.5%；第三是"天然气"，金额84.5亿美元，较上年增长167.1%；		  	 </p>
		    </view>
		  </view>
		  <image class="section-image" src="../../../static/images/trade2.png"></image>
		  <view class="section-text">
		    <view class="section-title">进出口统计数据</view>
		    <view class="section-description">
		     <p>
             进口与出口分别统计，2022年1-10月中国自俄罗斯进口金额929.89亿美元，累计同比增长48.0%；出口金额597.41亿美元，累计同比增长13.0%；贸易逆差为332.5亿美元(上年同期贸易逆差为99.2亿美元)。		  	</p>
		    </view>
		  </view>
		  <image class="section-image" src="../../../static/images/trade3.png"></image>
		  <view class="section-text">
		    <view class="section-title">进出口顺逆差</view>
		    <view class="section-description">
		     <p>
             从年内走势看，中国与俄罗斯进出口金额高点平均位于9月，低点平均位于2月。分月度看，中国与俄罗斯进出口金额普遍高于去年同期。		  	</p>
		    </view>
		  </view>
        </view>
      </view>
    </view>
  </view>
</template>

<style scoped>
.trade-page {
  position: relative;
  height: 100vh;
}

.background-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
}

.content {
  padding: 20px;
  color: #000000;
}

.section {
  margin-bottom: 20px;
}

.section-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.section-image {
  width: 100%;
  height: 250px;
  margin-bottom: 20px;
}

.section-title {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
  margin-top: 2rem;
}

.section-description {
  font-size: 16px;
  margin-bottom: 3rem;
}
</style>
