import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";
import Vuesax from "vuesax";
import "vuesax/dist/vuesax.css"; //Vuesax styles
import VueYouTubeEmbed from "vue-youtube-embed";
import VueFacebookPage from 'vue-facebook-page'
Vue.use(VueYouTubeEmbed);
Vue.use(VueFacebookPage, '1239401336829223')
Vue.use(Vuesax, {
  // options here
});

// Slick


Vue.config.productionTip = false;

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");
