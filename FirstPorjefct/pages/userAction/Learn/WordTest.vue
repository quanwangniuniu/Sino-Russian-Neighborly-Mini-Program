<template>
  <view class="container">
    <view class="word">{{ currentWord.russian }}</view>
    <view class="options">
      <view class="option" v-for="(option, index) in options" :key="index">
        <button
          class="option-button"
          :class="{
            'wrong': showWrong && selectedOption === index,
            'correct': showCorrect && currentWord.correctIndex === index,
            'unselected': showNextQuestion && selectedOption !== index
          }"
          @click="checkAnswer(index)"
          :disabled="showNextQuestion"
        >
          <transition name="fade">
            <span v-show="!showNextQuestion || selectedOption === index">{{ option }}</span>
          </transition>
        </button>
      </view>
    </view>
	
	<view class="definition" v-if="showDefinition">
	      <text style="color: darkgreen;">正确释义:</text>{{ currentWord.definition }}
	</view>
	
	
	
	
	
    <view class="next-question" v-if="showNextQuestion">
      <transition name="fade">
        <button class="next-button" @click="nextQuestion">下一题</button>
      </transition>
    </view>
  </view>
</template>

<script>
export default {
  data() {
    return {
      words: [
        { russian: 'Привет', chinese: ['你好', '再见', '谢谢', '对不起'], correctIndex: 0, definition: '你好' },
        { russian: 'Спасибо', chinese: ['谢谢', '对不起', '再见', '你好'], correctIndex: 0, definition: '谢谢你' },
        { russian: 'Добрый день', chinese: ['你好', '对不起', '再见', '谢谢'], correctIndex: 0, definition: '天气不错' },
		{ russian: 'рёчка', chinese: ['山', '河', '湖', '岛'], correctIndex: 1, definition: '河' },
		{ russian: 'врач', chinese: ['老师', '医生', '警察', '护士'], correctIndex: 1, definition: '医生' },
		{ russian: 'друг', chinese: ['朋友', '恋人', '父母', '姐妹'], correctIndex: 0, definition: '朋友' },
		{ russian: 'сад', chinese: ['客厅', '小河', '花园', '教室'], correctIndex: 2, definition: '花园' },
		{ russian: 'автобус', chinese: ['汽车', '公交车', '自行车', '飞机'], correctIndex: 1, definition: '公交车' },
		{ russian: 'газ', chinese: ['空气', '液体', '固体', '气体'], correctIndex: 3, definition: '气体' },
		{ russian: 'Текст', chinese: ['文章', '小说', '故事', '日记'], correctIndex: 0, definition: '文章' },
		{ russian: 'стол', chinese: ['柜子', '椅子', '桌子', '书架'], correctIndex: 2, definition: '桌子' },
		{ russian: 'стул', chinese: ['柜子', '椅子', '书架', '桌子'], correctIndex: 1, definition: '椅子' },
		{ russian: 'окно', chinese: ['门', '窗户', '桌子', '椅子'], correctIndex: 1, definition: '窗户' },
		{ russian: 'страна', chinese: ['城市', '首都', '国家', '乡村'], correctIndex: 2, definition: '国家' },
		{ russian: 'футбол', chinese: ['排球', '篮球', '足球', '桌球'], correctIndex: 2, definition: '足球' },
		{ russian: 'молоко', chinese: ['咖啡', '水', '茶', '牛奶'], correctIndex: 3, definition: '牛奶' },
		{ russian: 'волосы', chinese: ['头发', '牙齿', '胡子', '手指'], correctIndex: 0, definition: '头发' },
		{ russian: 'девочка', chinese: ['爷爷', '男孩', '女孩', '奶奶'], correctIndex: 2, definition: '女孩' },
		{ russian: 'собака', chinese: ['羊', '猫', '牛', '狗'], correctIndex: 3, definition: '狗' },
		{ russian: 'слово', chinese: ['句子', '单词', '词组', '音标'], correctIndex: 1, definition: '单词' },
		{ russian: 'ручка', chinese: ['铅笔', '钢笔', '圆珠笔', '蜡笔'], correctIndex: 1, definition: '钢笔' },
		{ russian: 'ученик', chinese: ['学生', '老师', '科学家', '儿童'], correctIndex: 0, definition: '学生' },
		{ russian: 'улица', chinese: ['教堂', '广场', '街道', '客厅'], correctIndex: 2, definition: '街道' },
		{ russian: 'шапка', chinese: ['裤子', '裙子', '帽子', '衬衫'], correctIndex: 2, definition: '帽子' },
		{ russian: 'журнал', chinese: ['书本', '杂志', '日记', '报纸'], correctIndex: 1, definition: '杂志' },
		{ russian: 'ключ', chinese: ['钥匙', '笔', '水', '橡皮'], correctIndex: 0, definition: '钥匙' },
		{ russian: 'вчера', chinese: ['昨天', '今天', '明天', '后天'], correctIndex: 0, definition: '昨天' },
		{ russian: 'каша', chinese: ['面包', '沙拉', '粥', '汤'], correctIndex: 2, definition: '粥' },
		{ russian: 'аэропорт', chinese: ['公园', '停车场', '电梯', '机场'], correctIndex: 3, definition: '机场' },
		{ russian: 'мир', chinese: ['天空', '河流', '世界', '土地'], correctIndex: 2, definition: '世界' },
		{ russian: 'день', chinese: ['白天', '夜晚', '上午', '凌晨'], correctIndex: 0, definition: '白天' },
		{ russian: 'Шанхай', chinese: ['北京', '上海', '成都', '云南'], correctIndex: 1, definition: '上海' },
		{ russian: 'самолёт', chinese: ['火车', '飞机', '汽车', '轮船'], correctIndex: 1, definition: '飞机' },
		{ russian: 'прощание', chinese: ['告别', '见面', '问候', '招待'], correctIndex: 0, definition: '告别' },
		{ russian: 'рейс', chinese: ['机票', '飞机', '直线', '航班'], correctIndex: 3, definition: '航班' },
		{ russian: 'купить', chinese: ['拿', '帮', '买', '送'], correctIndex: 2, definition: '买' },
		{ russian: 'поэтому', chinese: ['为什么', '难道', '因此', '当然'], correctIndex: 2, definition: '因此' },
		{ russian: 'отдохнуть', chinese: ['工作', '休息', '学习', '度假'], correctIndex: 1, definition: '休息' },
		{ russian: 'задание', chinese: ['项目', '作业', '合同', '工程'], correctIndex: 1, definition: '作业' },
		{ russian: 'писать', chinese: ['读', '写', '背', '拿'], correctIndex: 1, definition: '写' },
		{ russian: 'группа', chinese: ['班级', '部门', '座位', '地区'], correctIndex: 0, definition: '班级' },
		{ russian: 'поезд', chinese: ['汽车', '公交车', '火车', '飞机'], correctIndex: 2, definition: '火车' },
		{ russian: 'помогать', chinese: ['赠送', '给予', '邀请', '帮助'], correctIndex: 3, definition: '帮助' },
		{ russian: 'литература', chinese: ['文学', '历史', '地理', '艺术'], correctIndex: 0, definition: '文学' },
		{ russian: 'предмет', chinese: ['专业', '科目', '领域', '区域'], correctIndex: 1, definition: '科目' },
		{ russian: 'оплата', chinese: ['支付', '帮助', '赠送', '偿还'], correctIndex: 0, definition: '支付' },
		{ russian: 'документ', chinese: ['书本', '合同', '文件', '文章'], correctIndex: 2, definition: '文件' },
		{ russian: 'плата', chinese: ['费用', '支付', '零钱', '工资'], correctIndex: 0, definition: '费用' },
		{ russian: 'библиотека', chinese: ['教室', '图书馆', '食堂', '操场'], correctIndex: 1, definition: '图书馆' },
		{ russian: 'семестр', chinese: ['月份', '学期', '周末', '年份'], correctIndex: 1, definition: '学期' },
		{ russian: 'наличный', chinese: ['余额', '费用', '现金', '支付'], correctIndex: 2, definition: '现金' },
		{ russian: 'минута', chinese: ['小时', '秒', '分钟', '天'], correctIndex: 2, definition: '分钟' },
		{ russian: 'фото', chinese: ['水', '窗户', '咖啡', '照片'], correctIndex: 3, definition: '照片' },
		{ russian: 'рост', chinese: ['年龄', '体重', '血压', '身高'], correctIndex: 3, definition: '身高' },
		{ russian: 'послушать', chinese: ['看', '听', '拿', '放'], correctIndex: 1, definition: '听' },
		{ russian: 'нос', chinese: ['眼睛', '耳朵', '嘴巴', '鼻子'], correctIndex: 3, definition: '鼻子' },
		{ russian: 'кабинет', chinese: ['礼堂', '教室', '办公室', '食堂'], correctIndex: 2, definition: '办公室' },
		{ russian: 'пить', chinese: ['吃', '喝', '看', '听'], correctIndex: 1, definition: '喝' },
		{ russian: 'зрение', chinese: ['视力', '听力', '嗅觉', '味觉'], correctIndex: 0, definition: '视力' },
		{ russian: 'понять', chinese: ['确定', '明白', '检查', '帮助'], correctIndex: 1, definition: '明白' },
		{ russian: 'поликлиника', chinese: ['诊所', '学校', '宿舍', '公司'], correctIndex: 0, definition: '诊所' },
		{ russian: 'кушетка', chinese: ['桌子', '椅子', '沙发', '床'], correctIndex: 2, definition: '沙发' },
		{ russian: 'ванная', chinese: ['客厅', '厨房', '浴室', '房间'], correctIndex: 2, definition: '浴室' },
		{ russian: 'гостиница', chinese: ['宾馆', '餐厅', '公寓', '公司'], correctIndex: 0, definition: '宾馆' },
		{ russian: 'одежда', chinese: ['帽子', '衣服', '眼镜', '鞋子'], correctIndex: 1, definition: '衣服' },
		{ russian: 'комната', chinese: ['客厅', '房间', '浴室', '厨房'], correctIndex: 1, definition: '房间' },
		{ russian: 'мыться', chinese: ['上学', '做饭', '洗澡', '工作'], correctIndex: 2, definition: '洗澡' },
		{ russian: 'правило', chinese: ['法律', '规则', '承诺', '合同'], correctIndex: 1, definition: '规则' },
		{ russian: 'запрещать', chinese: ['需要', '禁止', '可能', '一定'], correctIndex: 1, definition: '禁止' },
		{ russian: 'свинина', chinese: ['羊肉', '牛肉', '猪肉', '鸭肉'], correctIndex: 2, definition: '猪肉' },
		{ russian: 'чёрный', chinese: ['蓝色的', '绿色的', '黑色的', '黄色的'], correctIndex: 2, definition: '黑色的' },
		{ russian: 'хлеб', chinese: ['沙拉', '鱼汤', '奶油', '面包'], correctIndex: 3, definition: '面包' },
		{ russian: 'десерт', chinese: ['零食', '甜点', '蔬菜', '肉类'], correctIndex: 1, definition: '甜点' },
		{ russian: 'фрукт', chinese: ['水果', '蔬菜', '肉类', '甜点'], correctIndex: 0, definition: '水果' },
		{ russian: 'ресторан', chinese: ['饭店', '宾馆', '体育馆', '商场'], correctIndex: 0, definition: '饭店' },
		{ russian: 'много', chinese: ['很少', '一点点', '很多', '没有'], correctIndex: 2, definition: '很多' },
		{ russian: 'метро', chinese: ['火车', '地铁', '汽车', '公交车'], correctIndex: 1, definition: '地铁' },
		{ russian: 'меню', chinese: ['菜单', '书本', '杂志', '报纸'], correctIndex: 0, definition: '菜单' },
		{ russian: 'погода', chinese: ['饮食', '天气', '交通', '生活'], correctIndex: 1, definition: '天气' },
		{ russian: 'погулять', chinese: ['散步', '游泳', '跑步', '走'], correctIndex: 0, definition: '散步' },
		{ russian: 'начало', chinese: ['结束', '停止', '继续', '开始'], correctIndex: 3, definition: '开始' },
		{ russian: 'теория', chinese: ['规则', '单词', '理论', '法律'], correctIndex: 2, definition: '理论' },
		{ russian: 'инженер', chinese: ['工程师', '老师', '律师', '宇航员'], correctIndex: 0, definition: '工程师' },
		{ russian: 'физика', chinese: ['化学', '物理', '生物', '科学'], correctIndex: 1, definition: '物理' },
		{ russian: 'помнить', chinese: ['确定', '记得', '忘记', '检查'], correctIndex: 1, definition: '记得' },
		{ russian: 'форма', chinese: ['形状', '性质', '特征', '长度'], correctIndex: 0, definition: '形状' },
		{ russian: 'записать', chinese: ['忘记', '登录', '登记', '确定'], correctIndex: 2, definition: '登记' },
		{ russian: 'ресурс', chinese: ['事情', '食物', '东西', '资源'], correctIndex: 3, definition: '资源' },
		{ russian: 'жаль', chinese: ['难处', '希望', '祝愿', '可惜'], correctIndex: 3, definition: '可惜' },
		{ russian: 'книга', chinese: ['杂志', '书', '作业', '文章'], correctIndex: 1, definition: '书' },
		{ russian: 'коробка', chinese: ['板子', '盒子', '桌子', '椅子'], correctIndex: 0, definition: '盒子' },
		{ russian: 'деньги', chinese: ['钱', '空气', '天', '小费'], correctIndex: 0, definition: '钱' },
		{ russian: 'сок', chinese: ['咖啡', '水', '茶', '果汁'], correctIndex: 3, definition: '果汁' },
		{ russian: 'марка', chinese: ['地图', '卡片', '商标', '图片'], correctIndex: 2, definition: '商标' },
		{ russian: 'магазин', chinese: ['厨房', '餐厅', '宾馆', '商店'], correctIndex: 3, definition: '商店' },
		{ russian: 'дата', chinese: ['日期', '日历', '笔记', '会议'], correctIndex: 0, definition: '日期' },
		{ russian: 'скачать', chinese: ['确信', '登记', '下载', '记录'], correctIndex: 2, definition: '下载' },
		{ russian: 'встреча', chinese: ['看见', '相遇', '招待', '邀请'], correctIndex: 1, definition: '相遇' },
		{ russian: 'звать', chinese: ['拥有', '是', '叫', '发声'], correctIndex: 2, definition: '叫' },
		{ russian: 'удача', chinese: ['祝愿', '成功', '幸福', '渴望'], correctIndex: 1, definition: '成功' },
		{ russian: 'право', chinese: ['权利', '规则', '法律', '把握'], correctIndex: 0, definition: '权利' },
      ],
      currentIndex: 0,
      selectedOption: null,
      showWrong: false,
      showCorrect: false,
      showNextQuestion: false,
      showDefinition: false,
    };
  },
  computed: {
    currentWord() {
      return this.words[this.currentIndex];
    },
    options() {
      return this.currentWord.chinese;
    },
  },
  methods: {
    checkAnswer(index) {
      if (this.showNextQuestion) {
        return;
      }
    
      this.selectedOption = index;
    
      // Check if the selected option is correct
      if (index === this.currentWord.correctIndex) {
        this.showCorrect = true;
        this.showWrong = false;
      } else {
        this.showCorrect = false;
        this.showWrong = true;
      }
    
      this.showNextQuestion = true;
      this.showDefinition = true;
    },
    
    getOptionClass(index) {
      if (this.showNextQuestion) {
        // If showing the next question, set the class based on the selected option and the correct answer's index
        return {
          'unselected': this.selectedOption !== index,
          'correct': this.showCorrect && this.currentWord.correctIndex === index,
        };
      } else {
        // If not showing the next question, set the class based on the selected option
        return {
          'unselected': this.selectedOption !== index,
        };
      }
    },
    
    nextQuestion() {
      this.currentIndex++;
      this.selectedOption = null;
      this.showWrong = false;
      this.showCorrect = false;
      this.showNextQuestion = false;
      this.showDefinition = false;
    },
  },
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

.word {
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 30px;
}

.options {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
}

.option {
  margin-bottom: 10px;
}

.option-button {
  padding: 14px 24px;
  border-radius: 8px;
  background-color: #e0e0e0;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s;
  font-size: 16px;
  font-weight: bold;
  width: 300px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  text-align: center;
  overflow: hidden;
}

.option-button.wrong {
  background-color: red;
  color: white;
}

.option-button.correct {
  background-color: green;
  color: white;
}

.option-button.unselected {
  opacity: 0.3;
}

.next-question {
  margin-top: 30px;
}

.next-button {
  padding: 14px 24px;
  border-radius: 8px;
  background-color: #e0e0e0;
  border: none;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  width: 200px;
  height: 48px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
