<template>
  <div class="img-fluid">
    <vue-flux
      :options="fluxOptions"
      :images="fluxImages"
      :transitions="fluxTransitions"
      ref="slider"
    >
      <flux-pagination slot="pagination"></flux-pagination>
    </vue-flux>
  </div>
</template>

<script>
import { VueFlux, FluxPagination, Transitions } from "vue-flux";

export default {
  name: "CarouselComponent",
  components: {
    VueFlux,
    FluxPagination,
  },

  data: () => ({
    fluxOptions: {
      autoplay: true,
      height: "600px",
    },
    fluxImages: [
      "https://sionschool.edu.np/slider/1652678580275522899_828494428545774_4921955564091694723_n.jpg",
      "https://sionschool.edu.np/slider/1653380844bridge%20course%20new%20.jpg",
      "https://sionschool.edu.np/slides/1643691226banner%20up%20second%20floor%20.jpg",
    ],
    fluxTransitions: {
      transitionBook: Transitions.transitionKenburn,
    },
  }),
};
</script>

<style scoped></style>
