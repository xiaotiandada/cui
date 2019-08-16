import CButton from "./index.vue";

export default {
  name: "button-doc",
  components: { CButton },
  data() {
    return {
      style: {
        width: "40px",
        height: "40px",
        padding: 0,
        borderRadius: "50%"
      },
      style1: {
        borderRadius: "20px"
      },
      base: `<c-button>默认按钮</c-button>
      <c-button type="primary">主要按钮</c-button>
      <c-button type="success">成功按钮</c-button>
      <c-button type="info">信息按钮</c-button>
      <c-button type="warning">警告按钮</c-button>
      <c-button type="danger">危险按钮</c-button>`,
      base1: `<c-button disabled="true">默认按钮</c-button>`,
      base2: `<c-button :style="style">1</c-button>`
    };
  },
  template: `<div>
      <p>基础用法</p>
      <c-button>默认按钮</c-button>
      <c-button type="primary">主要按钮</c-button>
      <c-button type="success">成功按钮</c-button>
      <c-button type="info">信息按钮</c-button>
      <c-button type="warning">警告按钮</c-button>
      <c-button type="danger">危险按钮</c-button>
      <pre>
        {{ base }}
      </pre>
      <p>禁用状态</p>
      <c-button disabled="true">默认按钮</c-button>
      <c-button type="primary" disabled="true">主要按钮</c-button>
      <c-button type="success" disabled="true">成功按钮</c-button>
      <c-button type="info" disabled="true">信息按钮</c-button>
      <c-button type="warning" disabled="true">警告按钮</c-button>
      <c-button type="danger" disabled="true">危险按钮</c-button>
      <pre>
        {{ base1 }}
      </pre>
      <p>扩展用法</p>
      <p>使用 style(如果喜欢css in js) || 使用class(尽情发挥css的才能)💗</p>
      <c-button :style="style">1</c-button>
      <c-button type="primary" :style="style">2</c-button>
      <c-button type="success" :style="style">3</c-button>
      <c-button type="info" :style="style">4</c-button>
      <c-button type="warning" :style="style">5</c-button>
      <c-button type="danger" :style="style">6</c-button>
      <br>
      <br>
      <c-button :style="style1">默认按钮</c-button>
      <c-button type="primary" :style="style1">主要按钮</c-button>
      <c-button type="success" :style="style1">成功按钮</c-button>
      <c-button type="info" :style="style1">信息按钮</c-button>
      <c-button type="warning" :style="style1">警告按钮</c-button>
      <c-button type="danger" :style="style1">危险按钮</c-button>
      <pre>
        {{ base2 }}
        {{ style }}
        {{ style1 }}
      </pre>
    </div>`
};
