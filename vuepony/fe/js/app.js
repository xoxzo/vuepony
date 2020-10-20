import Vue from "vue";

// import components

Vue.component(
  "demo-component",
  require("./components/DemoComponent.vue").default
);
Vue.component(
  "chat-component",
  require("./components/ChatComponent.vue").default
);

let vue = new Vue({
  //
}).$mount("#app");
