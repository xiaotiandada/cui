/* eslint-disable react/react-in-jsx-scope, react/no-this-in-sfc */
import { storiesOf } from "@storybook/vue";
// import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";
// import MyButton from "./MyButton";
import Welcome from "./Welcome";
import CButtonDoc from "./Button/button/index.js";
import CButtonDoc1 from "./Button/button1/index.js";
import CButtonDoc2 from "./Button/button2/index.vue";
import CButtonPopoverDoc from "./Button/button_popover/index.vue";
// import CButtonDocR from "./Button/README.md";

import CBox from "./Box/box/index.vue";

let PrTemplate = "自行YY脑洞 大胆PR 💗";

storiesOf("Welcome", module).add(PrTemplate, () => ({
  components: { Welcome },
  template: `<welcome :showApp="action">
    ${PrTemplate}
    </welcome>`,
  methods: { action: linkTo("Button") }
}));

// storiesOf("Button", module)
//   .add("with text", () => ({
//     components: { MyButton },
//     template: '<my-button @click="action">Hello Button</my-button>',
//     methods: { action: action("clicked") }
//   }))
//   .add("with JSX", () => ({
//     components: { MyButton },
//     // eslint-disable-next-line no-unused-vars
//     render(h) {
//       return <my-button onClick={this.action}>With JSX</my-button>;
//     },
//     methods: { action: linkTo("clicked") }
//   }))
//   .add("with some emoji", () => ({
//     components: { MyButton },
//     template: '<my-button @click="action">😀 😎 👍 💯</my-button>',
//     methods: { action: action("clicked") }
//   }));

storiesOf("Button", module).add("普通按钮", () => CButtonDoc);
storiesOf("Button", module).add("背景位移", () => CButtonDoc1);
storiesOf("Button", module).add("线框填充", () => ({
  components: {
    CButton: CButtonDoc2
  },
  render(h) {
    return (
      <div>
        <c-button width="60">一</c-button>
        <br />
        <br />
        <c-button width="90">按钮</c-button>
        <br />
        <br />
        <c-button width="90" height="120">
          按钮
        </c-button>
        <br />
        <br />
        <c-button>按钮一</c-button>
        <br />
        <br />
        <c-button>查看详情</c-button>
      </div>
    );
  }
}));
storiesOf("Button", module).add("弹出内容", () => ({
  components: { CButtonPopoverDoc },
  render(h) {
    return (
      <div>
        <CButtonPopoverDoc placement="top" />
        <CButtonPopoverDoc placement="right" />
        <CButtonPopoverDoc />
        <CButtonPopoverDoc placement="left" />
      </div>
    );
  }
}));

storiesOf("Box", module).add("盒子", () => ({
  components: CBox,
  render(h) {
    return (
      <div style="padding: 100px">
        <CBox />
        <CBox width={200} height={200} />
        <CBox width={400} height={200} />
        <CBox width={200} height={400} />
      </div>
    );
  }
}));

/* eslint-enable react/react-in-jsx-scope */
