"use strict";
const common_vendor = require("../../../../common/vendor.js");
const _sfc_main = {
  name: "uniCollapseItem",
  props: {
    // 列表标题
    title: {
      type: String,
      default: ""
    },
    name: {
      type: [Number, String],
      default: ""
    },
    // 是否禁用
    disabled: {
      type: Boolean,
      default: false
    },
    // 是否显示动画
    showAnimation: {
      type: Boolean,
      default: true
    },
    // 是否展开
    open: {
      type: Boolean,
      default: false
    },
    // 缩略图
    thumb: {
      type: String,
      default: ""
    },
    // 标题分隔线显示类型
    titleBorder: {
      type: String,
      default: "auto"
    },
    border: {
      type: Boolean,
      default: true
    },
    showArrow: {
      type: Boolean,
      default: true
    }
  },
  data() {
    const elId = `Uni_${Math.ceil(Math.random() * 1e6).toString(36)}`;
    return {
      isOpen: false,
      isheight: null,
      height: 0,
      elId,
      nameSync: 0
    };
  },
  watch: {
    open(val) {
      this.isOpen = val;
      this.onClick(val, "init");
    }
  },
  updated(e) {
    this.$nextTick(() => {
      this.init(true);
    });
  },
  created() {
    this.collapse = this.getCollapse();
    this.oldHeight = 0;
    this.onClick(this.open, "init");
  },
  // TODO vue3
  unmounted() {
    this.__isUnmounted = true;
    this.uninstall();
  },
  mounted() {
    if (!this.collapse)
      return;
    if (this.name !== "") {
      this.nameSync = this.name;
    } else {
      this.nameSync = this.collapse.childrens.length + "";
    }
    if (this.collapse.names.indexOf(this.nameSync) === -1) {
      this.collapse.names.push(this.nameSync);
    } else {
      console.warn(`name 值 ${this.nameSync} 重复`);
    }
    if (this.collapse.childrens.indexOf(this) === -1) {
      this.collapse.childrens.push(this);
    }
    this.init();
  },
  methods: {
    init(type) {
      this.getCollapseHeight(type);
    },
    uninstall() {
      if (this.collapse) {
        this.collapse.childrens.forEach((item, index) => {
          if (item === this) {
            this.collapse.childrens.splice(index, 1);
          }
        });
        this.collapse.names.forEach((item, index) => {
          if (item === this.nameSync) {
            this.collapse.names.splice(index, 1);
          }
        });
      }
    },
    onClick(isOpen, type) {
      if (this.disabled)
        return;
      this.isOpen = isOpen;
      if (this.isOpen && this.collapse) {
        this.collapse.setAccordion(this);
      }
      if (type !== "init") {
        this.collapse.onChange(isOpen, this);
      }
    },
    getCollapseHeight(type, index = 0) {
      const views = common_vendor.index.createSelectorQuery().in(this);
      views.select(`#${this.elId}`).fields({
        size: true
      }, (data) => {
        if (index >= 10)
          return;
        if (!data) {
          index++;
          this.getCollapseHeight(false, index);
          return;
        }
        this.height = data.height;
        this.isheight = true;
        if (type)
          return;
        this.onClick(this.isOpen, "init");
      }).exec();
    },
    getNvueHwight(type) {
      dom.getComponentRect(this.$refs["collapse--hook"], (option) => {
        if (option && option.result && option.size) {
          this.height = option.size.height;
          this.isheight = true;
          if (type)
            return;
          this.onClick(this.open, "init");
        }
      });
    },
    /**
     * 获取父元素实例
     */
    getCollapse(name = "uniCollapse") {
      let parent = this.$parent;
      let parentName = parent.$options.name;
      while (parentName !== name) {
        parent = parent.$parent;
        if (!parent)
          return false;
        parentName = parent.$options.name;
      }
      return parent;
    }
  }
};
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  _easycom_uni_icons2();
}
const _easycom_uni_icons = () => "../../../uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  _easycom_uni_icons();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $props.thumb
  }, $props.thumb ? {
    b: $props.thumb
  } : {}, {
    c: common_vendor.t($props.title),
    d: $props.disabled ? 1 : "",
    e: $props.showArrow
  }, $props.showArrow ? {
    f: common_vendor.p({
      color: $props.disabled ? "#ddd" : "#bbb",
      size: "14",
      type: "bottom"
    }),
    g: $data.isOpen ? 1 : "",
    h: $props.showAnimation === true ? 1 : ""
  } : {}, {
    i: common_vendor.o(($event) => $options.onClick(!$data.isOpen)),
    j: $data.isOpen && $props.titleBorder === "auto" ? 1 : "",
    k: $props.titleBorder !== "none" ? 1 : "",
    l: $data.elId,
    m: $data.isheight ? 1 : "",
    n: $props.border && $data.isOpen ? 1 : "",
    o: $props.showAnimation ? 1 : "",
    p: ($data.isOpen ? $data.height : 0) + "px"
  });
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "F:/HBuilder/Uni-APP_project/FirstPorjefct/uni_modules/uni-collapse/components/uni-collapse-item/uni-collapse-item.vue"]]);
wx.createComponent(Component);
