<template>
  <template-view>
    <!-- carasoul section -->
    <div class="fluid-container">
      <carousel-component></carousel-component>
    </div>
    <!-- text section -->
    <div class="py-5">
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
    </div>
    <!-- message from director -->
    <div class="message py-5">
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
    </div>

    <!-- gallery section -->
    <div class="gallery">
      <div class="container">
        <div class="row g-5">
          <div class="col-md-12">
            <h2 class="py-2" style="text-align: center">Video Gallery</h2>
          </div>
        </div>
        <vueper-slides
          class="no-shadow"
          :visible-slides="3"
          slide-multiple
          :gap="3"
          :slide-ratio="1 / 4"
          :dragging-distance="200"
          :breakpoints="{ 800: { visibleSlides: 2, slideMultiple: 2 } }"
        >
          <vueper-slide
            v-for="(slide, i) in video"
            :key="i"
            :title="`<iframe
              width='416'
              height='315'
              src='https://www.youtube.com/embed/${slide.video}'
              title=${slide.title}
              frameborder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
              allowfullscreen
            ></iframe>`"
          />
        </vueper-slides>
      </div>
    </div>
    <!-- why sion school -->
    <div class="py-5" style="background-color: #eeede7">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <div>
              <h2 class="py-3">{{ why.title }}</h2>
              <div v-html="why.description.toString().substring(0, 500) + '...'"></div>
              <div class="py-3">
                <button type="button" class="btn">Read More</button>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <img :src="why.photo" alt="" class="img-fluid" />
          </div>
        </div>
      </div>
    </div>

    <div class="py-3">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <h2 class="py-2" style="text-align: center">News & Events</h2>
          </div>
        </div>
        <div class="row">
          <div class="col-md-4" v-for="(event, index) in event" :key="index">
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
    </div>

    <!-- footer section -->
    <footer-component />
  </template-view>
</template>

<script>
// @ is an alias to /src
import CarouselComponent from "@/components/CarouselComponent";
import TemplateView from "@/views/TemplateView";
import { mapGetters } from "vuex";
import FooterComponent from "@/components/FooterComponent";
import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";
export default {
  name: "HomeView",
  components: {
    TemplateView,
    CarouselComponent,
    FooterComponent,
    VueperSlides,
    VueperSlide,
  },
  computed: {
    ...mapGetters({
      about: "get_about",
      event: "get_event",
      video: "get_gallery",
    }),
    why() {
      return this.about.find((v) => v.slug == "why-sion-school");
    },
    message() {
      return this.about.find((v) => v.slug == "message-from-director");
    },
  },
  data: () => ({
    slides: [
      {
        title: "Slide #1",
        content: "Slide 1 content.",
      },
      {
        title: "Slide #2",
        content: "Slide 2 content.",
      },
    ],
  }),
};
</script>
