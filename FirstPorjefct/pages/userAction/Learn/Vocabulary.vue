<template>
  <view class="word-card">
    <text class="word">{{ currentWord.wordContent }}</text>
    <view v-if="showTranslation" class="translation">{{ currentWord.translation }}</view>
    <view class="button-group">
      <button @click="handleUnknown" class="btn-unknown">不认识</button>
      <button @click="handleKnown" class="btn-known">认识</button>
      <button v-if="showNextButton" @click="handleNext" class="btn-next">下一个</button>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      words: [],         // 存储返回的单词数组
      index: 0,          // 指针位置，控制显示的当前单词
      currentWord: {},   // 当前显示的单词对象
      showTranslation: false, // 是否显示单词的翻译
	  numbers:uni.getStorageSync("WordsNumber"),
	  userId:uni.getStorageSync("loggedInUserId"),
    };
  },
  computed: {
    showNextButton() {
      return this.index < this.words.length - 1;
    },
  },
  mounted() {
    // 加载页面时发送请求，获取单词数组
	this.getNumbers();
    this.fetchWords();
	this.getIndex();
	// 获取用户背单词进度
	// this.fetchIndex();
  },
  methods: {
	getNumbers(){
		uni.request({
		  url: 'http://localhost:8014/wordNumber', // 后端接口地址
		  method: 'GET',
		  data: {
		    phoneNumber: uni.getStorageSync("loggedInPhoneNumber") // 从本地获取的用户ID
		  },
		  success: (res) => {
		    // console.log('收到的数据:',res.data); // 打印后端返回的数据
			this.numbers = res.data;
		  },
		  fail: (err) => {
		    console.error(err);
		  }
		});
	},
	getIndex(){
		uni.request({
		  url: 'http://localhost:8014/index', // 后端接口地址
		  method: 'GET',
		  data: {
		    phoneNumber: uni.getStorageSync("loggedInPhoneNumber") // 从本地获取的用户ID
		  },
		  success: (res) => {
		    // console.log('收到的数据:',res.data); // 打印后端返回的数据
			this.index = res.data;
			console.log("index:",res.data);
		  },
		  fail: (err) => {
		    console.error(err);
		  }
		});
	},
    fetchWords() {
      uni.request({
        url: 'http://localhost:8014/getBasicWords/' + this.numbers.toString(),
        method: 'GET',
		data: {
		  wordIndex: uni.getStorageSync("WordIndex") // 从本地获取的用户ID
		},
        success: (res) => {
          if (res.statusCode === 200) {
            this.words = res.data; // 将返回的单词数组存储在组件的数据中
            this.currentWord = this.words[this.index]; // 初始化当前显示的单词
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
    handleKnown() {
      this.showTranslation = true;
	  const currentTimeInSeconds = Math.floor(Date.now() / 1000);
	  const date = new Date(currentTimeInSeconds * 1000);
	  const formattedDate = `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')} ${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}:${date.getSeconds().toString().padStart(2, '0')}`;
	  console.log(formattedDate);
	  uni.request({
	    url: 'http://localhost:8014/addBasicRecord', // Backend API endpoint to handle the update
	    method: 'POST', // Use 'POST' for updating data
	    data: {
	        userId:uni.getStorageSync("loggedInUserId"),
			learnedTime:formattedDate,
			wordContent:this.currentWord.wordContent,
			wordWeight:50,
			translation:this.currentWord.translation
	    },
	    success: (res) => {
	      console.log('successfully:', res.data);
	    },
	    fail: (err) => {
	      console.error('Failed to insert this BasicRecord', err);
	    }
	  });
    },
    handleUnknown() {
      this.showTranslation = true;
      const currentTimeInSeconds = Math.floor(Date.now() / 1000);
      const date = new Date(currentTimeInSeconds * 1000);
      const formattedDate = `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')} ${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}:${date.getSeconds().toString().padStart(2, '0')}`;
      console.log(formattedDate);
      uni.request({
        url: 'http://localhost:8014/addBasicRecord', // Backend API endpoint to handle the update
        method: 'POST', // Use 'POST' for updating data
        data: {
                userId:uni.getStorageSync("loggedInUserId"),
      			learnedTime:formattedDate,
      			wordContent:this.currentWord.wordContent,
      			wordWeight:-50,
				translation:this.currentWord.translation
        },
        success: (res) => {
          console.log('successfully:', res.data);
        },
        fail: (err) => {
          console.error('Failed to insert this BasicRecord', err);
        }
      });
	  
    },
    handleNext() {
      // 处理用户点击“下一个”按钮
      if (this.index < this.words.length - 1) {
        this.index++;
        this.currentWord = this.words[this.index];
        this.showTranslation = false; // 隐藏翻译，显示下一个单词
      }
	  uni.request({
	    url: 'http://localhost:8014/IndexChanged', // Backend API endpoint to handle the update
	    method: 'POST', // Use 'POST' for updating data
	    data: {
	        user_id:uni.getStorageSync("loggedInUserId"),
	  	    wordIndex:this.index,
			wordNumber:uni.getStorageSync("WordsNumber")
	    },
	    success: (res) => {
	      console.log('successfully:', res.data);
		  uni.setStorage({
		    key: 'WordIndex',
		    data: this.index,
		  });
	    },
	    fail: (err) => {
	      console.error('Failed to update the index', err);
	    }
	  });
    },
  },
};
</script>

<style>
.word-card {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f2f2f2;
  margin-top: 30%;
}

.word {
  font-size: 36px;
  margin-bottom: 20px;
  text-align: center;
  color: #333;
}

.translation {
  font-size: 25px;
  margin-bottom: 20px;
  color: #666;
  text-align: center;
}

.button-group {
  display: flex;
  flex-direction: row;
  gap: 20px;
  align-items: center;
  margin-top: 30%;
}

button {
  padding: 10px 20px;
  font-size: 18px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.btn-unknown {
  background-color: #FF5858;
  color: white;
}

.btn-known {
  background-color: #38CC77;
  color: white;
}

.btn-next {
  background-color: #5D9CEC;
  color: white;
  margin-left: auto;
}
</style>
