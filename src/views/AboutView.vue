<template>
  <template-view>
    <section class="py-5 bg-white">
      <div class="container">
        <h1>{{ about.title }}</h1>
        <img :src="about.photo" class="img-fluid rounded thumbnail py-md-4" />
        <p v-html="about.description"></p>
      </div>
    </section>
  </template-view>
</template>

<script>
import TemplateView from "./TemplateView.vue";
import { mapGetters, mapActions } from "vuex";
export default {
  components: { TemplateView },
  computed: {
    ...mapGetters({
      abouts: "get_about",
    }),

    about() {
      return this.abouts.find((about) => about.slug == this.slug);
    },
  },

  methods: {
    ...mapActions(["fetchAbout"]),
  },

  created() {
    this.fetchAbout();
  },

  props: ["slug"],
};
</script>
