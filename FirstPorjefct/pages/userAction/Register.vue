<template>
  <view class="register">
	
	<view class="logo-wrapper">
	    <image class="logo" src="../../static/images/logo.png" />
	</view>
	<view class="form-wrapper">
		<view class="form-item">
		  <image class="input-icon" src="../../static/icons/personal.png" />
		  <input v-model="username" placeholder="在这里起一个好听的名字" />
		</view>
		<view class="form-item">
		  <image class="input-icon" src="../../static/icons/phone.png" />
		  <input v-model="phoneNumber" placeholder="输入电话号码" />
		</view>
		<view class="form-item">
		  <image class="input-icon" src="../../static/icons/password.png" />
		  <input v-model="password" type="password" placeholder="请输入您的登录密码O(∩_∩)O" />
		</view>
		<view class="form-item">
		  <image class="input-icon" src="../../static/icons/password.png" />
		  <input v-model="confirmPassword" type="password" placeholder="请确认您的登录密码ლ(′◉❥◉｀ლ)" />
		</view>
	</view>
	
	<view class="button-wrapper">
	 <view class="button-register">
	  <button @click="register">点击注册</button>
	 </view>
	</view>
    
  </view>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      phoneNumber: '',
      password: '',
      confirmPassword: ''
    };
  },
  methods: {
    register() {
      // Perform input validation
      if (!this.validateUsername() || !this.validatePhoneNumber() || !this.validatePassword() || !this.validateConfirmPassword()) {
        return;
      }
      // Send registration request to the backend
      uni.request({
        url: 'http://localhost:8014/register',
        method: 'POST',
        data: {
		  user_id:Math.floor(Math.random(``) * 900000) + 100000,
          username: this.username,
          phone: this.phoneNumber,
          password: this.password
        },
        success: (res) => {
          const result = res.data;
          if (result.success) {
            uni.showToast({
              title: '注册成功',
              icon: 'none'
            });
			setTimeout(function() {
			  uni.redirectTo({
			  	url:"/pages/userAction/Login"
			  })
			}, 5000); // 5000毫秒即延迟5秒
          } else {
            uni.showToast({
              title: result.message,
              icon: 'none'
            });
          }
        },
        fail: (err) => {
          console.error(err);
          uni.showToast({
            title: '注册失败',
            icon: 'none'
          });
        }
      });
    },
    validateUsername() {
      if (!this.username) {
        uni.showToast({
          title: '请给自己起个名字!',
          icon: 'none'
        });
        return false;
      }
      if (this.username.length > 13) {
        uni.showToast({
          title: '用户名太长啦！',
          icon: 'none'
        });
        return false;
      }
      return true;
    },
    validatePhoneNumber() {
      const phoneRegex = /^1\d{10}$/;
      if (!this.phoneNumber) {
        uni.showToast({
          title: '请输入你的手机号',
          icon: 'none'
        });
        return false;
      }
      if (!phoneRegex.test(this.phoneNumber)) {
        uni.showToast({
          title: '这是无效的手机号！',
          icon: 'none'
        });
        return false;
      }
      return true;
    },
    validatePassword() {
      const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z!@#$%^&*]{8,}$/;
      if (!this.password) {
        uni.showToast({
          title: '请输入你的密码',
          icon: 'none'
        });
        return false;
      }
      if (!passwordRegex.test(this.password)) {
        uni.showToast({
          title: '密码不少于八位且至少有一个特殊字符！',
          icon: 'none'
        });
        return false;
      }
      return true;
    },
    validateConfirmPassword() {
      if (!this.confirmPassword) {
        uni.showToast({
          title: '请确认你输入的密码',
          icon: 'none'
        });
        return false;
      }
      if (this.password !== this.confirmPassword) {
        uni.showToast({
          title: '两次密码设置不匹配！',
          icon: 'none'
        });
        return false;
      }
      return true;
    }
  }
};
</script>

<style scoped>
.register {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  padding: 20px;
  background-color: #FFBEBE;
}

.logo-wrapper {
  text-align: center;
  margin-bottom: 30px;
}

.logo {
  width: 120px;
  height: 120px;
}

.form-wrapper {
  width: 90%;
  background-color: #ffffff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.form-item {
  display: flex;
  align-items: center;
  margin-bottom: 25px;
}

.input-icon {
  width: 20px;
  height: 20px;
  margin-right: 10px;
}

input {
  flex: 1;
  padding: 10px;
  border-radius: 4px;
  border: 1px solid #cccccc;
}

.button-wrapper {
  display: flex;
  justify-content: center;
  margin-top: 30px;
}

.button-register {
  width: 100%;
  max-width: 300px;
}

button {
  width: 100%;
  padding: 20px;
  border-radius: 8px;
  background-color: #4caf50;
  color: #ffffff;
  font-size: 16px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #45a049;
}

@media (max-width: 768px) {
  .register {
    padding: 10px;
  }
  
  .logo {
    width: 100px;
    height: 100px;
  }
  
  .form-wrapper {
    padding: 10px;
    border-radius: 6px;
  }
  
  .form-item {
    margin-bottom: 16px;
  }
  
  input {
    padding: 8px;
  }
  
  button {
    padding: 10px;
    border-radius: 6px;
    font-size: 14px;
  }
}

.slogan {
        animation: sloganAnimation 20s infinite;
        margin-bottom: 30px;
    }

    @keyframes sloganAnimation {
        0% {
            color: #FF0000; /* 初始字体颜色 */
            background-color: #FFFFFF; /* 初始背景颜色 */
            font-family: Arial, sans-serif; /* 初始字体 */
        }
        25% {
            color: #00FF00; /* 中间字体颜色 */
            background-color: #FFFF00; /* 中间背景颜色 */
            font-family: "Times New Roman", serif; /* 中间字体 */
        }
        50% {
            color: #0000FF; /* 中间字体颜色 */
            background-color: #00FFFF; /* 中间背景颜色 */
            font-family: Courier, monospace; /* 中间字体 */
        }
        75% {
            color: #FF00FF; /* 中间字体颜色 */
            background-color: #FFA500; /* 中间背景颜色 */
            font-family: "Lucida Sans Unicode", sans-serif; /* 中间字体 */
        }
        100% {
            color: #FF0000; /* 初始字体颜色 */
            background-color: #FFFFFF; /* 初始背景颜色 */
            font-family: Arial, sans-serif; /* 初始字体 */
        }
}


</style>
