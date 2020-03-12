/* eslint-disable react/react-in-jsx-scope, react/no-this-in-sfc */
import { storiesOf } from "@storybook/vue";
// import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";
// import MyButton from "./MyButton";
import Welcome from "./Welcome";
import CButtonDoc from "./Button/button/index.js";
import CButtonDoc1 from "./Button/button1/index.js";
import CButtonDoc2 from "./Button/button2/index.js";
import CButtonPopoverDoc from "./Button/button_popover/index.vue";
// import CButtonDocR from "./Button/README.md";

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
storiesOf("Button", module).add("普通按钮1", () => CButtonDoc1);
storiesOf("Button", module).add("普通按钮2", () => CButtonDoc2);
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

/* eslint-enable react/react-in-jsx-scope */
