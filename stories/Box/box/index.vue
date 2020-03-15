<template>
  <div class="c-box" :style="boxStyle">
    <slot></slot>
    <svg
      class="c-box__content"
      :width="width + 10"
      :height="height + 10"
      :viewBox="svgViewBox"
    >
      <line
        v-for="(item, index) in point"
        :key="index"
        :x1="item[0]"
        :y1="item[1]"
        :x2="item[2]"
        :y2="item[3]"
      ></line>
    </svg>
  </div>
</template>

<script>
export default {
  props: {
    width: {
      type: Number,
      default: 246
    },
    height: {
      type: Number,
      default: 232
    }
  },
  computed: {
    // svg box style
    boxStyle() {
      return {
        width: this.width + "px",
        height: this.height + "px"
      };
    },
    // svg viewBox
    svgViewBox() {
      return `0, 0, ${this.width + 10}, ${this.height + 10}`;
    },
    // 坐标点
    point() {
      // x y
      return [
        [0, this.height - 1, 9, this.height + 9],
        [9, this.height + 9, this.width + 9, this.height + 9],
        [this.width - 1, this.height - 1, this.width + 9, this.height + 9],
        [this.width + 9, 9, this.width + 9, this.height + 9],
        [this.width - 1, 0, this.width + 9, 9]
      ];
    }
  }
};
</script>

<style lang="less" scoped>
.c-box {
  position: relative;
  width: 246px;
  height: 232px;
  border: 1px solid #dddde9;
  background: #fff;
  box-sizing: border-box;
  transition: all linear 0.1s;
  &:hover {
    border-color: #e1251b;
    transform: translate(-10px, -10px);
    .c-box__content {
      display: block;
      line {
        stroke: #e1251b;
      }
    }
  }
  .c-box__content {
    display: none;
    position: absolute;
    left: 0;
    right: 0;
    line {
      stroke: transparent;
      stroke-width: 1;
    }
  }
}
</style>
