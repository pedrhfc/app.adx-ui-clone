import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";
import Router from "./routes";

import {
  BButton,
  BForm,
  BFormInput,
  BFormSelect,
  BCard,
  BootstrapVueIcons,
  BVToastPlugin,
} from "bootstrap-vue";

import "bootstrap-vue/dist/bootstrap-vue-icons.min.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.config.productionTip = false;

Vue.use(VueRouter);
Vue.use(BootstrapVueIcons);
Vue.use(BVToastPlugin);
Vue.component("BButton", BButton);
Vue.component("BForm", BForm);
Vue.component("BFormInput", BFormInput);
Vue.component("BFormSelect", BFormSelect);
Vue.component("BCard", BCard);

const app = new Vue({
  el: "#app",
  render: (h) => h(App),
  router: Router,
});

export default app;
