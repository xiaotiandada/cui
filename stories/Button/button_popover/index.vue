<template>
  <div class="c-btn">
    <div ref="btn" @click="_showMore" class="btn">
      <slot name="btn">😊</slot>
    </div>
    <div ref="btnList" class="btn-list" :class="placement">
      <slot name="btnList">😊😊😊 😊😊😊 😊😊😊</slot>
    </div>
  </div>
</template>

<script>
import { TimelineLite } from "gsap";
export default {
  name: "CButtonPopover",
  props: {
    // 出现位置
    placement: {
      type: String,
      default: "bottom"
    }
  },
  methods: {
    _showMore() {
      const { btn, btnList } = this.$refs;
      const timeline = new TimelineLite();
      const btnVisible = btn.getAttribute("data-visible") === "true";
      btn.setAttribute("data-visible", !btnVisible);

      if (btnVisible) {
        timeline.to(btn, 0.2, {
          rotation: 0
        });
        timeline.to(
          btnList,
          0.2,
          {
            y: 0,
            opacity: 0
          },
          "-=0.1"
        );
      } else {
        timeline.to(btn, 0.2, {
          rotation: 45
        });
        timeline.to(
          btnList,
          0.2,
          {
            y: 10,
            opacity: 1
          },
          "-=0.1"
        );
      }
    }
  }
};
</script>

<style scoped lang="less">
@import "../../common/var.less";
.c-btn {
  position: relative;
  z-index: 99;
  margin: 60px 0 0 200px;
  .btn {
    width: 54px;
    height: 54px;
    border-radius: 50%;
    background-color: @--color-primary;
    color: @--color-background-w;
    font-size: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 9;
    cursor: pointer;
    user-select: none;
    &:hover {
      background-color: mix(@--color-background-w, @--color-primary, 10%);
    }
  }
  .btn-list {
    position: absolute;
    border-radius: 20px;
    background-color: mix(@--color-background-w, @--color-primary, 40%);
    z-index: 9;
    left: 27px;
    bottom: -150%;
    transform: translate(-50%, 10px);
    display: flex;
    justify-content: center;
    align-items: center;
    color: @--color-primary;
    padding: 20px;
    cursor: default;
    opacity: 0;
    &::before {
      position: absolute;
      display: block;
      content: "";
      width: 0;
      height: 0;
      transform: translate(-50%, 0);
      border-width: 16px;
      border-style: solid;
      border-color: transparent transparent
        mix(@--color-background-w, @--color-primary, 40%);
    }
    &.top {
      &::before {
        left: 50%;
        top: -32px;
        background: red;
      }
    }
    &.right {
      &::before {
        left: 50%;
        top: -32px;
        background: red;
      }
    }
    &.bottom {
      &::before {
        left: 50%;
        top: -32px;
        background: red;
      }
    }
    &.bottom {
      &::before {
        left: 50%;
        top: -32px;
        background: red;
      }
    }
  }
}
</style>
