<template>
  <a
    :href="href"
    :target="target"
    class="c-button"
    :style="{
      width: width + 'px',
      height: height + 'px',
      lineHeight: height + 'px'
    }"
  >
    <slot></slot>
    <svg
      class="box-svg"
      :viewBox="svgViewBox"
      stroke-width="2"
      fill="none"
      stroke="#E1251B"
      :height="height"
      :width="width"
    >
      <polyline class="box-line" :points="polylinePointsTop"></polyline>
      <polyline class="box-line" :points="polylinePointsBottom"></polyline>
    </svg>
  </a>
</template>

<script>
export default {
  props: {
    href: {
      type: String,
      default: "javascript:void(0);"
    },
    target: {
      type: String,
      default: "_self"
    },
    width: {
      type: String,
      default: "105"
    },
    height: {
      type: String,
      default: "32"
    }
  },
  computed: {
    svgViewBox() {
      return `0 0 ${this.width} ${this.height}`;
    },
    polylinePointsTop() {
      const w = this.width;
      const h = this.height;
      return `0 ${h / 2} 0 0 ${w} 0 ${w} ${h / 2}`;
    },
    polylinePointsBottom() {
      const w = this.width;
      const h = this.height;
      return `0 ${h / 2} 0 ${h} ${w} ${h} ${w} ${h / 2}`;
    }
  }
};
</script>

<style lang="less" scoped>
.c-button {
  display: inline-block;
  position: relative;
  width: 105px;
  height: 32px;
  font-weight: 400;
  text-align: center;
  line-height: 32px;
  text-decoration: none;
  font-size: 14px;
  color: #000;
  transition: all linear 0.1s;
  box-sizing: border-box;
  border: 1px solid #dddde9;
  .box-line {
    stroke-dasharray: 360px;
    stroke-dashoffset: 360px;
    transition: all ease 0.5s;
  }
  &:hover {
    .box-line {
      stroke-dashoffset: 0;
    }
  }
  .box-svg {
    position: absolute;
    left: -1px;
    top: -1px;
  }
}
</style>
