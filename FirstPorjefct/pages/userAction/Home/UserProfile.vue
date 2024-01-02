<template>
  <view>
    <view class="user-info">
      <image class="avatar" src="../../static/images/logo.png" @click="uploadAvatar" mode="aspectFill"></image>
      <text class="username">{{ username }}</text>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
	  <text class="phone">{{phone}}</text>
    </view>
    <view class="signin">
      <button @click="signin" class="signinButton">签到</button><br/>
    </view>
	<view>
	<text class="signin-count">&nbsp;&nbsp;&nbsp;累计签到次数：{{ signinCount }}</text>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
	<text class="last-signin-time">上次签到时间：{{ lastSigninTime }}</text>
	</view>
	<view style="margin-top:20px;margin-bottom:20px;">
		<image class="input-icon" src="../../static/icons/HomeProfile/learned.png" />
		<text>语言选择：</text>
	</view>
	
    <view class="language">
      <button :class="{ active: language === '中文' }" @click="selectLanguage('中文')">中文</button>
      <button :class="{ active: language === '俄语' }" @click="selectLanguage('俄语')">俄语</button>
      <button :class="{ active: language === '中文对照' }" @click="selectLanguage('中文对照')">中文对照</button>
    </view>
    <view class="night-mode">
	  <image class="input-icon" src="../../static/icons/HomeProfile/night.png" />
      <view>夜间模式：</view>
      <switch :checked="isNightMode" @change="toggleNightMode"></switch>
    </view>
    <view class="study-settings">
	  <image class="input-icon" src="../../static/icons/HomeProfile/remember.png" />
      <text>记忆模式：</text>
      <button :class="{ active: memoryMode === '看俄文回忆中文' }" @click="selectMemoryMode('看俄文回忆中文')">看俄文回忆中文</button>
      <button :class="{ active: memoryMode === '看中文回忆俄文' }" @click="selectMemoryMode('看中文回忆俄文')">看中文回忆俄文</button>
      <image class="input-icon" src="../../static/icons/HomeProfile/batch.png" />
	  <text>每日学习量：</text>
	  <view style="margin-top: 12px;display: center;display: flex;justify-content: center;">
      <picker @change="onPickerChange" mode='selector' :value="index" :range="list" class='listPicker'>
      	<text style="border: 0.5px solid #ccc;padding-right:15px;padding-left:15px;">{{pickerValue}}</text>
		<text>&nbsp;&nbsp;&nbsp;个俄语单词</text>
      </picker>
	  </view>
    </view>
    <view class="learned-words">
	  <image class="input-icon" src="../../static/icons/HomeProfile/finished.png" />
      <text>已学习单词：</text>
      <button @click="viewLearnedWords" style="width: 100%;">查看</button>
    </view>
	<view style="margin-bottom: 20px;">
	<button class="logout-button" @click="logout">注销账户</button>
	</view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      username: uni.getStorageSync("loggedInUsername"),
      avatar: '/static/avatar.jpg',
      signinCount: 10,
      lastSigninTime: '2023-06-16 10:00',
      language: '中文',
      isNightMode: false,
      memoryMode: '看俄文回忆中文',
      dailyStudyAmount: 10,
	  phone:uni.getStorageSync("loggedInPhoneNumber").replace(/(\d{3})\d{4}(\d{4})/, '$1****$2'),
	  list:[10,20,30,40,50],
	  index:0,
	  pickerValue:''
    };
  },
  mounted(){
	  this.getWordsNumber()
	  this.getCheckInInfo()
  },
  methods: {
	getWordsNumber(){
		uni.request({
		  url: 'http://localhost:8014/wordNumber', // 后端接口地址
		  method: 'GET',
		  data: {
		    phoneNumber: uni.getStorageSync("loggedInPhoneNumber") // 从本地获取的用户手机号
		  },
		  success: (res) => {
		    console.log(res.data); // 打印后端返回的数据
			this.dailyStudyAmount = res.data;
			this.pickerValue = res.data;
			this.index = this.list.indexOf(res.data); 
			uni.setStorage({
			  key: 'WordsNumber',
			  data: res.data,
			  });
		  },
		  fail: (err) => {
		    console.error(err);
		  }
		});
	},
	getCheckInInfo(){
		uni.request({
		  url: 'http://localhost:8014/checkin/user', // 后端接口地址
		  method: 'GET',
		  data: {
		    userId: uni.getStorageSync("loggedInUserId") // 从本地获取的用户ID
		  },
		  success: (res) => {
		    // console.log(res.data); // 打印后端返回的数据
		    this.lastSigninTime = res.data.recentCheckinDate;
			this.signinCount = res.data.totalCheckinCount;
		  },
		  fail: (err) => {
		    console.error(err);
		  }
		});
	},
	onPickerChange(event){
	   const {value} = event.detail;
	   this.pickerValue = this.list[value];
	   const newWordNumber = this.pickerValue;
	   // console.log("设置的量:",newWordNumber)
	        // Send the updated WordNumber to the backend
	        uni.request({
	          url: 'http://localhost:8014/updateWordNumber', // Backend API endpoint to handle the update
	          method: 'POST', // Use 'POST' for updating data
	          data: {
	            user_id: uni.getStorageSync("loggedInUserId"),
	            wordNumber: newWordNumber,
				wordIndex:uni.getStorageSync("WordIndex")
	          },
	          success: (res) => {
	            console.log('WordNumber updated successfully:', res.data);
				uni.setStorage({
				  key: 'WordsNumber',
				  data: newWordNumber,
				});
	            // You can handle the success response here if needed
	          },
	          fail: (err) => {
	            console.error('Failed to update WordNumber:', err);
	            // You can handle the failure here if needed
	          }
	        });
	},
    uploadAvatar() {
      // 处理上传和修改头像逻辑
       console.log('上传和修改头像');
    },
    signin() {
      const userID = uni.getStorageSync("loggedInUserId"); // 实际的用户ID
	  const today = new Date().toISOString().slice(0, 10);
	    if (this.lastSigninTime === today) {
	       uni.showToast({
	       title: '您今天已签到',
	       });
	    } 
		else 
		{
	      uni.request({
	        url: 'http://localhost:8014/checkin',
	        method: 'POST',
	        data: { userID },
	        success: (res) => {
	        console.log('签到成功');
			uni.showToast({
			title: '签到成功',
			});
			
			uni.redirectTo({
			      url: '/pages/userAction/Home/UserProfile' 
			});
	        },
	        fail: (err) => {
	        console.error('签到失败', err);
	        }
	    });
	   }
      console.log('签到');
    },
    selectLanguage(language) {
      // 处理语言选择逻辑
      this.language = language;
    },
    toggleNightMode(value) {
      // 处理夜间模式切换逻辑
      this.isNightMode = value;
    },
    selectMemoryMode(memoryMode) {
      // 处理记忆模式选择逻辑
      this.memoryMode = memoryMode;
    },
    viewLearnedWords() {
      // 处理查看已学习单词逻辑
      console.log('查看已学习单词');
	  uni.navigateTo({
	    url: `/pages/userAction/Learn/Overview`
	  })
    },
	logout() {
	  // 显示确认对话框
	    uni.showModal({
	      title: '确认注销',
	      content: '您确定要注销吗？',
	      success: (res) => {
	        if (res.confirm) {
	          // 用户点击确认按钮
	          uni.removeStorageSync('loggedInUsername');
	          uni.removeStorageSync('loggedInPhoneNumber');
			  uni.removeStorageSync('loggedInUserId');
			  uni.removeStorageSync('WordsNumber');
			  uni.removeStorageSync('WordIndex');
	          uni.reLaunch({
	            url: "/pages/userAction/Login"
	          });
	        }
	        // 用户点击取消按钮，不执行任何操作
	      }
	    });
     }
  }
};
</script>

<style scoped>
/* 添加适当的样式和颜色以符合俄罗斯的感觉 */

/* 整体容器样式 */
.view {
  padding: 20px;
  background-color: #f5f5f5; /* 使用浅灰色背景 */
  font-family: Arial, sans-serif;
  max-width: 600px; /* 限制容器的最大宽度 */
  margin: 0 auto; /* 居中显示 */
}

/* 用户信息样式 */
.user-info {
  display: flex;
  align-items: center;
  margin-top:10px;
  background:  #ffaaff;
  height: 125px;
}

.avatar {
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 50%;
  cursor: pointer;
  border:1px solid black;
}

.username {
  margin-left: 10px;
  font-size: 18px;
  font-weight: bold;
  color: #333;
}

/* 签到样式 */
.signin {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}


.input-icon {
  left: 10px;
  width: 20px;
  height: 20px;
  transform: translateY(10%); 
  margin-right:10px;
}

.signinButton{
	width:100%;
}
button {
  padding: 8px 16px; /* 调整按钮的大小 */
  background-color: #007bff; /* 使用俄罗斯国旗蓝色背景 */
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px; /* 调整按钮的字体大小 */
  width:100%;
}

.signin-count,
.last-signin-time {
  margin-top: 10px;
  font-size: 12px; /* 调整签到信息的字体大小 */
  color: #777;
}

/* 语言选择样式 */
.language {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

button {
  width:50%;
  padding: 6px 12px; /* 调整按钮的大小 */
  background-color: transparent;
  color: #007bff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  align-items: center;
  justify-content: center;
}

button.active {
  background-color: #007bff;
  color: #fff;
}

/* 夜间模式样式 */
.night-mode {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  margin-top:20px;
}

/* 记忆模式样式 */
.study-settings {
  margin-bottom: 20px;
  margin-top:20px;
}

input[type="number"] {
  padding: 6px 10px;
  border-radius: 4px;
  border: 1px solid #ccc;
  font-size: 14px;
  width: 60px;
}

/* 已学习单词样式 */
.learned-words button {
  padding: 6px 12px; /* 调整按钮的大小 */
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  margin-top:20px;
}

.learned-words button:hover {
  background-color: #0056b3;
}

/* 添加其他样式和调整颜色以适应整体设计和风格 */

/* 调整按钮的悬停效果 */
button:hover {
  background-color: #0056b3; /* 使用深蓝色作为悬停颜色 */
}

/* 调整开关按钮样式 */
.switch {
  position: relative;
  display: inline-block;
  width: 40px;
  height: 20px;
  margin-left: 10px;
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: .4s;
  transition: .4s;
  border-radius: 20px;
}

.slider:before {
  position: absolute;
  content: "";
  height: 14px;
  width: 14px;
  left: 3px;
  bottom: 3px;
  background-color: white;
  -webkit-transition: .4s;
  transition: .4s;
  border-radius: 50%;
}

input:checked + .slider {
  background-color: #007bff;
}

input:focus + .slider {
  box-shadow: 0 0 1px #007bff;
}

input:checked + .slider:before {
  -webkit-transform: translateX(20px);
  -ms-transform: translateX(20px);
  transform: translateX(20px);
}

.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}

/* 调整视图的整体宽度 */
.view {
  max-width: 600px;
  margin: 0 auto;
}

.logout-button {
  background-color: #ccc;
  color: #fff;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 80px;
  width:30%;
  margin-top: 40px;
}

</style>
