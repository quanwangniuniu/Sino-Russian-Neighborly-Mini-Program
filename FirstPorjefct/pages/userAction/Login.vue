<template>
  <view class="login-container">
    <view class="logo-wrapper">
      <image class="logo" src="../../static/images/logo.png" />
    </view>
    <view class="form-wrapper">
      <view class="input-wrapper">
        <image class="input-icon" src="../../static/icons/phone.png" />
        <input type="tel" placeholder="手机号" v-model="phone" />
      </view>
      <view class="input-wrapper">
        <image class="input-icon" src="../../static/icons/password.png" />
        <input type="password" placeholder="密码" v-model="password" />
      </view>
      <view class="button-wrapper">
        <button @click="login">登录</button>
      </view>
	  <view class="register-link" @click="goToRegistration">
	          没有账户？快来注册一个账户，加入睦邻家族吧！
	  </view>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      phone: '',
      password: '',
    };
  },
  methods: {
	 getInfo(){
		 uni.request({
		     url: 'http://localhost:8014/getUserID',
		     method: 'GET',
		     data: {
                phoneNumber: this.phone
            },
		     success: (res) => {
				console.log(res);
		        uni.setStorage({
		          key: 'loggedInUserId',
		          data: res.data.userId,
		          });
		     },
		     fail: (err) => {
		       errorCallback(err);
		     }
		   });
	 },
	  
	  
	  
	goToRegistration(){
		uni.navigateTo({
		  url: `/pages/userAction/Register`
		})
	},
	  
	// 注册功能
    login() {
		     if (!this.phone) {
		        uni.showToast({
		          title: '请输入手机号',
		          icon: 'none',
		        });
		        return;
		      }
		
		      // 正则表达式验证手机号格式
		      const phoneRegex = /^1[0-9]{10}$/;
		      if (!phoneRegex.test(this.phone)) {
		        uni.showToast({
		          title: '请输入正确的手机号格式',
		          icon: 'none',
		        });
		        return;
		      }
		
		      if (!this.password) {
		        uni.showToast({
		          title: '请输入密码',
		          icon: 'none',
		        });
		        return;
		      }
		
		
		
          // 构建请求数据
          const requestData = {
            phone: this.phone,
            password: this.password
          };
    
          // 发送登录请求
         uni.request(
		 {
           url: 'http://localhost:8014/login',
           method: 'POST',
           data: requestData,
           success: (res) => {
             // Backend response
             const result = res.data;
             if (result.success) {
               // Store logged-in phone number locally
			   this.getInfo();
               uni.setStorage({
                 key: 'loggedInPhoneNumber',
                 data: requestData.phone,
                 success: () => {
                   uni.showToast({
                     title: "登录成功",
                     icon: 'none'
                   });
                   // Send GET request to retrieve username
                   uni.request({
                     url: 'http://localhost:8014/getUserName',
                     method: 'GET',
                     data: {
                       phoneNumber: requestData.phone
                     },
                     success: (res) => {
                       const userResult = res.data;
                       if (userResult.success) {
                         // Store username locally with expiration time of 1 day (86400000 milliseconds)
                         uni.setStorage({
                           key: 'loggedInUsername',
                           data: userResult.userName,
                           // Set expiration time to 1 day
                           expires: 86400000,
                           success: () => {
                             // Login successful, navigate to the choose module page
                             uni.switchTab({
                               url: '/pages/module/choose'
                             });
                           }
                         });
                       } else {
                         // Failed to retrieve username
                         uni.showToast({
                           title: "找不到此用户",
                           icon: 'none'
                         });
                       }
                     },
                     fail: (err) => {
                       // Failed to send GET request for username
                       console.error(err);
                       uni.showToast({
                         title: '获取用户名失败',
                         icon: 'none'
                       });
                     }
                   });
                 }
               });
             } else {
               // Login failed, display error message
               uni.showToast({
                 title: result.message,
                 icon: 'none'
               });
             }
           },
           fail: (err) => {
             // Request failed
             console.error(err);
             uni.showToast({
               title: '登录请求失败',
               icon: 'none'
             });
           }
         }
		 );
		},
  },
  
  
};
</script>

<style scoped>
.login-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f4f4f4;
}

.logo-wrapper {
  margin-bottom: 40px;
}

.logo {
  width: 100px;
  height: 100px;
}

.form-wrapper {
  width: 300px;
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.input-wrapper {
  position: relative;
  margin-bottom: 20px;
  width:80%;
}

.input-icon {
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translateY(-50%);
  width: 20px;
  height: 20px;
}

input {
  width: 100%;
  height: 40px;
  padding: 8px 40px 8px 30px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
  color: #333;
}

.button-wrapper {
  text-align: center;
  margin-top:10%;
}

button {
  width: 100%;
  height: 40px;
  background-color: #007aff;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
}

@media (max-width: 480px) {
  .form-wrapper {
    width: 80%;
  }
}

.register-link {
  color: #3366cc;
  font-size: 12px;
  text-align: center;
  margin-top: 10px;
  margin-bottom: 10px;
  cursor: pointer;
}

.register-link:hover {
  text-decoration: underline;
}
</style>
