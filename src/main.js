import Vue from "vue";
import App from "./demo/App";
import v2GanttChart from "./index";
import {
  Popover,
  DatePicker,
  Button,
  Input,
  Row,
  Col,
  Form,
  FormItem,
  Slider,
  Select,
  Option,
  Checkbox
} from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

Vue.config.productionTip = false;
Vue.use(v2GanttChart);
Vue.use(Popover);
Vue.use(DatePicker);
Vue.use(Button);
Vue.use(Input);
Vue.use(Row);
Vue.use(Col);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Slider);
Vue.use(Select);
Vue.use(Option);
Vue.use(Checkbox);

new Vue({
  render: (h) => h(App)
}).$mount("#app");
