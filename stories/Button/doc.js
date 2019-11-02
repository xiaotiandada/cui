import CButton from "./index.vue";
import "./doc.less";
export default {
  name: "button-doc",
  components: { CButton },
  data() {
    return {
      base: `
      <c-button>默认按钮</c-button>
      <c-button type="primary">主要按钮</c-button>
      <c-button type="success">成功按钮</c-button>
      <c-button type="info">信息按钮</c-button>
      <c-button type="warning">警告按钮</c-button>
      <c-button type="danger">危险按钮</c-button>`
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
      <p>没有圆角</p>
      <c-button :radius="true">默认按钮</c-button>
      <c-button :radius="true" type="primary">主要按钮</c-button>
      <c-button :radius="true" type="success">成功按钮</c-button>
      <c-button :radius="true" type="info">信息按钮</c-button>
      <c-button :radius="true" type="warning">警告按钮</c-button>
      <c-button :radius="true" type="danger">危险按钮</c-button>
      <p>
        :radius="true"
      </p>
      <p>禁用状态</p>
      <c-button :disabled="true">默认按钮</c-button>
      <c-button type="primary" :disabled="true">主要按钮</c-button>
      <c-button type="success" :disabled="true">成功按钮</c-button>
      <c-button type="info" :disabled="true">信息按钮</c-button>
      <c-button type="warning" :disabled="true">警告按钮</c-button>
      <c-button type="danger" :disabled="true">危险按钮</c-button>
      <p>
        :disabled="true
      </p>
      <p>加载</p>
      <c-button :loading="true">默认按钮</c-button>
      <c-button :loading="true" type="primary">主要按钮</c-button>
      <c-button :loading="true" type="success">成功按钮</c-button>
      <c-button :loading="true" type="info">信息按钮</c-button>
      <c-button :loading="true" type="warning">警告按钮</c-button>
      <c-button :loading="true" type="danger">危险按钮</c-button>
      <p>
        loading="true
      </p>
      <p>不同尺寸</p>
      <c-button>默认按钮</c-button>
      <c-button size="medium">默认按钮</c-button>
      <c-button size="small">默认按钮</c-button>
      <c-button size="mini">默认按钮</c-button>
      <p>
        额外的尺寸medium，small，mini，设置通过size属性来配置它们。
      </p>
      <p>覆盖使用</p>
      <c-button class="circle">1</c-button>
      <c-button type="primary" class="circle">2</c-button>
      <c-button type="success" class="circle">3</c-button>
      <c-button type="info" class="circle">4</c-button>
      <c-button type="warning" class="circle">5</c-button>
      <c-button type="danger" class="circle">6</c-button>
      <br>
      <br>
      <c-button class="circle1">默认按钮</c-button>
      <c-button type="primary" class="circle1">主要按钮</c-button>
      <c-button type="success" class="circle1">成功按钮</c-button>
      <c-button type="info" class="circle1">信息按钮</c-button>
      <c-button type="warning" class="circle1">警告按钮</c-button>
      <c-button type="danger" class="circle1">危险按钮</c-button>
    </div>`
};
