/// vue3
import { createApp } from "vue";

/// 기본 vue
import App from "./App";

/// vue router
import router from "./router";

/// axios
import axios from "axios";
/// url 경로 설정(ex: http://localhost:8080)
axios.defaults.baseURL = window.location.origin;
axios.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded;charset=UTF-8";
axios.default.withCredentials = true; // 쿠키를 포함한 요청을 전송

/// bootstrap
import BootstrapVue3 from "bootstrap-vue-3";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap";

/// 공용 css
import "@/assets/scss/style.scss";

const app = createApp(App);
/// 전역변수
app.config.globalProperties.$axios = axios;
app.use(router);
app.use(BootstrapVue3);
app.mount("#app");

// 화면 호출 전 표시
// 추후 세션체크 여기서 진행
router.beforeEach((to, from, next) => {
  next();
});
