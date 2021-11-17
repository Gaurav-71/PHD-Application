import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBJR6A7JqhiFBrWf6TwfVy0Ot-PgiO9Kdc",
  authDomain: "msrit-phd-applications.firebaseapp.com",
  projectId: "msrit-phd-applications",
  storageBucket: "msrit-phd-applications.appspot.com",
  messagingSenderId: "776378417889",
  appId: "1:776378417889:web:e6ceb6afdce2c0a4e3eda0",
  measurementId: "G-SQWFJRZS0V",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics();

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
