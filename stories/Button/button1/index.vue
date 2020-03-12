<template>
  <a :href="href" :target="target" class="c-button">
    <slot></slot>
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
    }
  }
};
</script>

<style lang="less" scoped>
.c-button {
  display: inline-block;
  position: relative;
  height: 32px;
  padding: 0 26px;
  font-weight: 400;
  text-align: center;
  line-height: 32px;
  text-decoration: none;
  font-size: 14px;

  background: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjA2cHgiIGhlaWdodD0iMzJweCIgdmlld0JveD0iMCAwIDIwNiAzMiIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggNTkgKDg2MTI3KSAtIGh0dHBzOi8vc2tldGNoLmNvbSAtLT4KICAgIDx0aXRsZT7nn6nlvaJfMXg8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZyBpZD0i6aaW6aG15a6a56i/IiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8ZyBpZD0i5Yqo5pWI5Y+KaG92ZXLor7TmmI4iIHRyYW5zZm9ybT0idHJhbnNsYXRlKC02NC4wMDAwMDAsIC02NjUuMDAwMDAwKSIgZmlsbD0iI0UxMjUxQiI+CiAgICAgICAgICAgIDxnIGlkPSLmjInpkq5ob2JlciIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNjQuMDAwMDAwLCA2NjUuMDAwMDAwKSI+CiAgICAgICAgICAgICAgICA8ZyBpZD0i55+p5b2iIj4KICAgICAgICAgICAgICAgICAgICA8cG9seWdvbiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0NS4xNzkzNTAsIDE2LjEzNDI2MSkgcm90YXRlKDQ1LjAwMDAwMCkgdHJhbnNsYXRlKC00NS4xNzkzNTAsIC0xNi4xMzQyNjEpICIgcG9pbnRzPSItMTYuMjAzMzAzNSAtNDUuMjQ4MzkyMyAxNTguNjc5MzUgLTk3LjM2NTczOTIgMTA2LjU2MjAwMyA3Ny41MTY5MTM4IC02OC4zMjA2NTA1IDEyOS42MzQyNjEiPjwvcG9seWdvbj4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+)
    no-repeat #000 -227px 0;
  color: #fff;
  transition: all linear 0.1s;
  background-position: -227px 0;
  &:hover {
    background-position: 0px 0;
  }
}
</style>
