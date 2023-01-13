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
          <div class="col-md-4 py-4">
            <div class="right">
              <h4>Related Link</h4>
              <ul class="py-3">
                <li
                  v-for="(information, index) in informations"
                  :key="index"
                  class="card-body"
                >
                  <a
                    href=""
                    class="card"
                    @click.prevent="
                      $router.push({
                        name: 'information',
                        params: { slug: information.slug },
                      })
                    "
                    >{{ information.title }}</a
                  >
                </li>
              </ul>
            </div>
            <div class="py-3">
              <div class="right">
                <h4>About Us</h4>
                <ul class="py-3">
                  <li v-for="(about, index) in about" :key="index" class="card-body">
                    <a
                      href=""
                      class="card"
                      @click.prevent="
                        $router.push({ name: 'about', params: { slug: about.slug } })
                      "
                      >{{ about.title }}</a
                    >
                  </li>
                </ul>
              </div>
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
      about: "get_about",
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
.card-body {
  padding: 5px;
  list-style: none;
}

.card {
  background-color: var(--primaryColor);
  color: white;
  text-decoration: none;
  display: inline-block;
  padding: 0.35em 0.65em;
  font-size: 0.75em;
  font-weight: 700;
  line-height: 1;
  text-align: center;
  white-space: nowrap;
  vertical-align: baseline;
  border-radius: 0.25rem;
}
</style>
