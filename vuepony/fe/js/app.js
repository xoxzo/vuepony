import Vue from "vue";

// import components

Vue.component(
  "demo-component",
  require("./components/DemoComponent.vue").default
);

let vue = new Vue({
  //
}).$mount("#app");
