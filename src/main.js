import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";
import Vuesax from "vuesax";

import "vuesax/dist/vuesax.css"; //Vuesax styles

Vue.use(Vuesax, {
  // options here
});

// Slick

import Slick from 'vue-slick';

new Vue({
    components: { Slick },
    data() {
            return {
                    slickOptions: {
                        //options can be used from the plugin documentation
                        slidesToShow: 1,
                        infinite: true,
                        accessibility: true,
                        adaptiveHeight: false,
                        arrows: true,
                        dots: true,
                        draggable: true,
                        edgeFriction: 0.30,
                        swipe: true
                    }
            }
    },
    // All slick methods can be used too, example here
    methods: {
            next() {
                    this.$refs.slick.next()
            },
            prev() {
                    this.$refs.slick.prev()
            },
            reInit() {
                    // Helpful if you have to deal with v-for to update dynamic lists
                    this.$refs.slick.reSlick()
            }
    }
})


Vue.config.productionTip = false;

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");
