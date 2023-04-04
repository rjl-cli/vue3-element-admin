import { createApp } from "vue";
import { store } from "@/stores";
import router from "./router";
import App from "./App.vue";
import "@/style/index.less";
const app = createApp(App);
app.use(store);
app.use(router);
app.mount("#app");
