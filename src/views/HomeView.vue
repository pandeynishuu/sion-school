<template>
  <template-view>
    <!-- carasoul section -->
    <div class="fluid-container">
      <carasoul-component />
    </div>

    <!-- text section -->
    <!-- <div class="py-5">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div style="text-align: center">
              <h4 class="py-3" style="color: red">
                WHERE CURIOUS MINDS EXPLORE, ENGAGE, AND CONNECT.
              </h4>
              <p>
                Sion School is one of the area’s leading schools, offering a distinctive
                and progressive approach to learning that <br />
                engages students in the classroom and with the world around them.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div> -->

    <!-- why sion school -->
    <!-- <div class="py-5" style="background-color:#EEEDE7;">
          <div class="container">
            <div class="row">
              <div class="col-md-6">
                <div>
                  <h2 class="py-3">{{why.title}}</h2>
                  <div v-html="why.description.toString().substring(0,500)+'...'"></div>
                  <div class="py-3">
                    <button type="button" class="btn">Read More</button>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <img :src="why.photo" alt="" class="img-fluid">
              </div>
            </div>
          </div>
        </div> -->

    <!-- message from director -->
    <!-- <div class="py-5">
      <div class="container">
        <div class="row">
          <div class="col-md-4">
            <img :src="message.photo" alt="" class="img-fluid" />
          </div>
          <div class="col-md-8">
            <h2>{{ message.title }}</h2>
            <div v-html="message.description.toString().substring(0, 750) + '...'"></div>
            <span><a href="" style="float: right">[Read More]</a></span>
          </div>
        </div>
      </div>
    </div> -->
    <!-- gallery section -->
    <!-- <div class="gallery">
      <video-gallery></video-gallery>
     </div> -->

    <!-- news & events -->
    <!-- <div class="py-3">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <h2 class="py-2" style="text-align: center">News & Events</h2>
          </div>
        </div>
        <div class="row"> -->
    <!-- <slick ref="slick" :options="slickOptions">
            <a href=""><img :src="dental.image" alt="" class="img-fluid" /></a>
            <a href=""><img :src="dental.image" alt="" class="img-fluid" /></a>
            <a href=""><img :src="dental.image" alt="" class="img-fluid" /></a>
            <a href=""><img :src="dental.image" alt="" class="img-fluid" /></a>
          </slick> -->

    <!-- <div class="col-md-4" v-for="(event, index) in events" :key="index">
            <vs-card type="2">
              <template #title>
                <h3>{{ event.title }}</h3>
              </template>
              <template #img>
                <img :src="event.image" alt="" class="fluid-img" style="height: 27vh" />
              </template>
            </vs-card>
          </div>
        </div>
      </div>
    </div> -->

    <!-- Enroll Now Section -->
    <div>
      <div class="container">
        <div class="row">
          <div class="col-md-6"></div>
          <div class="col-md-6"></div>
        </div>
      </div>
    </div>

    <!-- footer section -->
    <footer-component />
  </template-view>
</template>

<script>
// @ is an alias to /src
import CarasoulComponent from "@/components/CarasoulComponent";
import TemplateView from "@/views/TemplateView";
import { mapGetters } from "vuex";
import FooterComponent from "@/components/FooterComponent";
export default {
  name: "HomeView",
  components: {
    TemplateView,
    CarasoulComponent,
    FooterComponent,
  },
  computed: {
    ...mapGetters({
      about: "get_about",
      events: "get_event",
    }),
    dental() {
      return this.events.find((v) => (v.slug = "free-dental-checkup-seminar"));
    },
  },
};
</script>
