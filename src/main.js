import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";
import routes from "@/routes/routes.js";

import {
  BButton,
  BFormInput,
  BFormSelect,
  BCard,
  BootstrapVueIcons,
} from "bootstrap-vue";

import "bootstrap-vue/dist/bootstrap-vue-icons.min.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.config.productionTip = false;

const router = new VueRouter({
  mode: "history",
  routes,
});

Vue.use(VueRouter);
Vue.use(BootstrapVueIcons);
Vue.component("BButton", BButton);
Vue.component("BFormInput", BFormInput);
Vue.component("BFormSelect", BFormSelect);
Vue.component("BCard", BCard);

const app = new Vue({
  el: "#app",
  render: (h) => h(App),
  router,
});

export default app;
