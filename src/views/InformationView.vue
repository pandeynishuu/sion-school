<template>
  <template-view>
    <section class="py-5 bg-white">
      <div class="container">
        <div class="row">
          <div class="col-md-8">
            <img :src="information.image" class="img-fluid rounded thumbnail py-md-4" />
            <h1>{{ information.title }}</h1>
            <p v-html="information.description"></p>
          </div>
          <div class="col-md-4">
            <div class="right">
              <h4>Related Link</h4>
              <ul>
                <li>
                  <a href="">{{ information.title }}</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
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
      informations: "get_information",
    }),

    information() {
      return this.informations.find((information) => information.slug == this.slug);
    },
  },

  methods: {
    ...mapActions(["fetchInformation"]),
  },

  created() {
    this.fetchInformation();
  },

  props: ["slug"],
};
</script>
<style scoped>
.right {
  border: 1px solid rgba(0, 0, 0, 0.125);
}
h4 {
  padding: 0.5rem 1rem;
  margin-bottom: 0;
  background-color: rgba(0, 0, 0, 0.03);
  border-bottom: 1px solid rgba(0, 0, 0, 0.125);
}
</style>
