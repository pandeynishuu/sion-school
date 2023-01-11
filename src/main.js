import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";
import Vuesax from "vuesax";
import * as VueGoogleMaps from 'vue2-google-maps'
import "vuesax/dist/vuesax.css"; //Vuesax styles
import VueYouTubeEmbed from "vue-youtube-embed";
Vue.use(VueYouTubeEmbed);
Vue.use(Vuesax, {
  // options here
});
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyC-O3bh2AiPqKlEKLwz6mPNTNu4rym3ZoE',
    libraries: 'places',
  }
});
// Slick


Vue.config.productionTip = false;

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");
