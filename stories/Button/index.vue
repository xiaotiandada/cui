<template>
  <button
    :disabled="disabled"
    class="c-button"
    :class="[type ? 'c-button-' + type : '']"
    :style="style"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "CButton",
  props: {
    // 按钮类型
    type: {
      type: String,
      default: "default"
    },
    // 自定义样式
    style: {
      type: Object,
      default: () => {}
    },
    // 禁用
    disabled: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style>
@import url(../common/var.css);
.c-button {
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  -webkit-appearance: none;
  text-align: center;
  box-sizing: border-box;
  outline: none;
  margin: 0;
  transition: 0.1s;
  font-weight: 500;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  padding: 12px 20px;
  font-size: 14px;
  border-radius: 4px;
}
.c-button[disabled] {
  cursor: not-allowed;
  opacity: 0.5;
}
.c-button-default {
  background: var(--color-white);
  color: var(--color-text-regular);
  border: 1px solid var(--border-color-base);
}
.c-button-primary {
  color: var(--color-white);
  background-color: var(--color-primary);
  border-color: var(--color-primary);
}
.c-button-success {
  background-color: var(--color-success);
  color: var(--color-white);
  border-color: var(--color-success);
}
.c-button-info {
  background-color: var(--color-info);
  color: var(--color-white);
  border-color: var(--color-info);
}
.c-button-warning {
  background-color: var(--color-warning);
  color: var(--color-white);
  border-color: var(--color-warning);
}
.c-button-danger {
  background-color: var(--color-danger);
  color: var(--color-white);
  border-color: var(--color-danger);
}
</style>
