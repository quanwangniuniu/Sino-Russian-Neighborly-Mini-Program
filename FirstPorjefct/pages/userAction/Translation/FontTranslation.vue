<template>
  <view class="translation">
    <view class="title">中俄睦邻翻译</view>
	<button class="change-button" @click="toggleTranslationMode">{{ translationMode }}</button>
    <textarea class="custom-input" v-model="inputText" placeholder="请输入要翻译的文本" type="text"/>
    <button  v-if="translationMode==='中-俄'" class="translate-button" @click="translateChineseToRussian">翻译</button>
	<button  v-if="translationMode==='俄-中'" class="translate-button" @click="translateRussianToChinese">Перевод</button>
    <view v-if="outputText" class="output">{{ outputText }}</view>
  </view>
</template>

<style scoped>
.translation {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
}

.title {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
}



.output {
  margin-top: 30px;
  font-size: 16px;
}

.custom-input {
  width: 80%;
  height: 200px;
  padding: 10px;
  font-size: 24px;
  background-color: #fff;
  border: none;
  outline: none;
  position: relative;
}

.custom-input::placeholder {
  color: #999;
}

.custom-input:before {
  content: "";
  position: absolute;
  top: -2px;
  left: -2px;
  right: -2px;
  bottom: -2px;
  border: 2px solid #ccc;
  border-radius: 10px;
  pointer-events: none;
}

.custom-input:focus:before {
  border-color: #007bff;
}

.custom-input:focus {
  outline: none;
}

.translate-container {
  display: flex;
  justify-content: flex-end;
}

.translate-button {
  width:25%;
  height:2%;
  float:right;
  margin-top: 1rem;
  padding: 12px 20px;
  font-size: 14px;
  color: #fff;
  background-color: #ff007f;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.translate-button:hover {
  background-color: #00aa7f;
}

.translate-button:focus {
  outline: none;
}

.change-button {
  width:80%;
  height: 5%;
  border: none;
  outline: none;
  padding: 6px 12px;
  background-color: #f5f5f5;
  color: #333;
  font-size: 15px;
  font-weight: bold;
  border-radius: 20px;
  border: 1px solid #ccc;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-bottom: 1rem;
}

.change-button:hover {
  background-color: #ddd;
}

.change-button:active {
  background-color: #bbb;
}
</style>

<script>
import axios from 'axios';
import CryptoJS from 'crypto-js';
export default {
  data() {
    return {
      inputText: '',
      outputText: '',
	  translationMode: '中-俄', // 默认为中文翻译为俄文
	  translationModes: ['中-俄', '俄-中'], // 翻译模式列表
    };
  },
  computed: {
      getStringInputText() {
        return this.inputText.toString();
      }
  },
  methods: {
	getDstFromArrays(obj) {
	  let result = null;
	
	  function processArray(arr) {
	    for (const item of arr) {
	      if (item.hasOwnProperty("dst")) {
	        result = item.dst;
	        return; // 找到第一个dst后立即返回，不再继续搜索
	      }
	
	      // 如果数组元素是一个对象，则递归处理它
	      for (const prop in item) {
	        if (typeof item[prop] === "object" && item[prop] !== null) {
	          processArray(Array.isArray(item[prop]) ? item[prop] : [item[prop]]);
	        }
	      }
	    }
	  }
	
	  // 处理顶层对象的数组
	  for (const key in obj) {
	    if (Array.isArray(obj[key])) {
	      processArray(obj[key]);
	    }
	  }
	
	  return result;
	},
	toggleTranslationMode() {
	        // 切换翻译模式
	        const currentIndex = this.translationModes.indexOf(this.translationMode);
	        const nextIndex = (currentIndex + 1) % this.translationModes.length;
	        this.translationMode = this.translationModes[nextIndex];
	},
	translateFinal() {
	        // 执行翻译操作
	        if (this.translationMode === '中-俄') {
	          this.outputText = translateChineseToRussian(this.inputText);
	        } else if (this.translationMode === '俄-中') {
	          this.outputText = translateRussianToChinese(this.inputText);
	        }
	},
	
	translateChineseToRussian(inputText) {
	   inputText = this.inputText;
	   const appId = '20230522001685783';
	   const appKey = '8FH74f4tnul8xRaQkrRu';
	   const salt = new Date().getTime().toString();
	   const sign = CryptoJS.MD5(appId + inputText + salt + appKey).toString();
	   const apiUrl = `https://api.fanyi.baidu.com/api/trans/vip/translate?q=${inputText}&from=auto&to=ru&appid=${appId}&salt=${salt}&sign=${sign}`;
	   uni.request({
	     url: apiUrl,
	     method: 'POST',
	     success: (res) => {
	       const ans = res.data;
	       this.outputText = ans;
		   // console.log("inputText:",inputText);
		   // console.log("apiUrl:",apiUrl);
	    //    console.log(this.outputText);
		   // console.log("能否拿取内容:",this.outputText.trans_result.toString);
		   // console.log("接受的数据类型:",typeof this.outputText);
		   // console.log("转为字符串后的内容:",this.outputText.toString);
		   // console.log("处理函数:",this.getDstFromArrays(this.outputText))
		   this.outputText = this.getDstFromArrays(this.outputText)
	     },
	     fail: (err) => {
	       console.error('翻译请求失败:', err);
	     }
	   });
	},
	translateRussianToChinese(inputText) {
	   inputText = this.inputText;
	   const appId = '20230522001685783';
	   const appKey = '8FH74f4tnul8xRaQkrRu';
	   const salt = new Date().getTime().toString();
	   const sign = CryptoJS.MD5(appId + inputText + salt + appKey).toString();
	   const apiUrl = `https://api.fanyi.baidu.com/api/trans/vip/translate?q=${inputText}&from=auto&to=zh&appid=${appId}&salt=${salt}&sign=${sign}`;
	   uni.request({
	     url: apiUrl,
	     method: 'GET',
	     success: (res) => {
	       this.outputText = res.data;
	       this.outputText = this.getDstFromArrays(this.outputText)
	     },
	     fail: (err) => {
	       console.error('翻译请求失败:', err);
	     }
	   });
	},
	// test
    translate(inputText) {
	   const testq = 'В прошлом году я посетил Санкт-Петербург и впечатлился его красивой архитектурой'
       const appId = '20230522001685783';
       const appKey = '8FH74f4tnul8xRaQkrRu';
       const salt = new Date().getTime().toString();
       const sign = CryptoJS.MD5(appId + testq + salt + appKey).toString();
       const apiUrl = `https://api.fanyi.baidu.com/api/trans/vip/translate?q=${testq}&from=auto&to=zh&appid=${appId}&salt=${salt}&sign=${sign}`;
       console.log(apiUrl)
       uni.request({
         url: apiUrl,
         method: 'GET',
         success: (res) => {
           const ans = res.data;
           this.outputText = ans;
           console.log(ans);
         },
         fail: (err) => {
           console.error('翻译请求失败:', err);
         }
       });
    },
  }
};
</script>
