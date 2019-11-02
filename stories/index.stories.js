/* eslint-disable react/react-in-jsx-scope, react/no-this-in-sfc */
import { storiesOf } from "@storybook/vue";
// import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";
// import MyButton from "./MyButton";
import Welcome from "./Welcome";
import CButtonDoc from "./Button/doc";
// import CButtonDocR from "./Button/README.md";

let PrTemplate = "自行YY脑洞 大胆PR 💗";

storiesOf("Welcome", module).add("to Storybook", () => ({
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

storiesOf("Button", module)
  .add("button 按钮", () => CButtonDoc, {
    notes: "hello world"
  })
  .add(PrTemplate, () => ({ template: `<div>${PrTemplate}</div>` }));

/* eslint-enable react/react-in-jsx-scope */
