<template>
  <view class="container">
	<uni-section title="复习强化记忆" subTitle="认识再看答案,如果每天都能够这样复习单词,那么记忆效果会翻倍哦!" type="line" padding>
		<view class="word-container" v-for="(word, index) in words" :key="index">
			<view class="russian">{{ word.wordContent }}</view>
			<view class="overlay" :class="{ 'visible': word.showChinese }" @click="showChinese(index)"></view>
			<view class="chinese" :class="{ 'visible': word.showChinese }">{{ word.translation }}</view>
		</view>
	</uni-section>
	<uni-pagination 
	        :current=this.currentPage
	        :total=this.totalWords
			:page-size="pageSize"  
			 title="标题文字" 
			prev-text="前一页" 
			next-text="后一页" 
			@change="handlePageChange"
	/>
    <!-- <view class="word-container" v-for="(word, index) in words" :key="index">
      <view class="russian">{{ word.wordContent }}</view>
      <view class="overlay" :class="{ 'visible': word.showChinese }" @click="showChinese(index)"></view>
      <view class="chinese" :class="{ 'visible': word.showChinese }">{{ word.translation }}</view>
    </view> -->
  </view>
</template>

<script>
export default {
  data() {
    return {
      words: [
        { wordContent: 'Привет', translation: '你好', showChinese: false },
        // 添加更多的单词
      ],
	  totalWords:0,
	  currentPage:1,
	  pageSize:8,
    };
  },
  mounted(){
	this.getOverViewsWords();
  },
  methods: {
	getOverViewsWords(){
	   uni.request({
	     url: 'http://localhost:8014/getOverViewWords',
	     method: 'GET',
		 data: {
			 userId:uni.getStorageSync('loggedInUserId')
		 },
	     success: (res) => {
	       if (res.statusCode === 200) {
			 // console.log(res.data)
	         // this.words = res.data; // 将返回的单词数组存储在组件的数据中
			 this.totalWords = res.data.length;
			 let pages = Math.ceil(this.totalWords/10);
			 // console.log("结果长度:",res.data.length)
			 uni.request({
			   url: 'http://localhost:8014/getOverViewWordsII',
			   method: 'GET',
			 		 data: {
			 			 userId:uni.getStorageSync('loggedInUserId'),
						 pageNum:1,
						 pageSize:8
			 		 },
			   success: (res) => {
			     if (res.statusCode === 200) {
			 			 // console.log(res.data)
			             this.words = res.data; // 将返回的单词数组存储在组件的数据中
			 			 this.wordsSize = res.data.length;
			 			 // console.log("页数:",pages)
			     } else {
			       uni.showToast({
			         title: '请求失败',
			         icon: 'none',
			       });
			     }
			   },
			   fail: () => {
			     uni.showToast({
			       title: '请求失败',
			       icon: 'none',
			     });
			   },
			 });
	       } else {
	         uni.showToast({
	           title: '请求失败',
	           icon: 'none',
	         });
	       }
	     },
	     fail: () => {
	       uni.showToast({
	         title: '请求失败',
	         icon: 'none',
	       });
	     },
	   });
	},
    showChinese(index) {
      this.words[index].showChinese = true;
    },
	handlePageChange(e)
	{
		// console.log(e);
		uni.request({
		  url: 'http://localhost:8014/getOverViewWordsII',
		  method: 'GET',
				 data: {
					 userId:uni.getStorageSync('loggedInUserId'),
					 pageNum:e.current,
					 pageSize:8
				 },
		  success: (res) => {
		    if (res.statusCode === 200) {
					 // console.log(res.data)
		            this.words = res.data; // 将返回的单词数组存储在组件的数据中
					this.wordsSize = res.data.length;
		    } else {
		      uni.showToast({
		        title: '请求失败',
		        icon: 'none',
		      });
		    }
		  },
		  fail: () => {
		    uni.showToast({
		      title: '请求失败',
		      icon: 'none',
		    });
		  },
		});
	}
  },
};
</script>

<style scoped>
.container {
  margin-top:2rem;
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

.word-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  position: relative;
}

.russian {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 5px;
}

.overlay {
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  height: 40px;
  background-color: #c0c0c0;
  cursor: pointer;
  transition: height 0.3s;
}

.overlay.visible {
  height: 0;
}

.chinese {
  font-size: 16px;
  margin-top: 10px;
  opacity: 0;
  transition: opacity 0.3s;
}

.chinese.visible {
  opacity: 1;
}
</style>
