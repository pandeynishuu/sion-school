<template>
  <div class="d-flex flex-column" style="height: 100vh">
    <header>
      <navbar-component />
    </header>

    <body class="mb-auto">
      <slot></slot>
    </body>

    <footer>
      <footer-component />
    </footer>
  </div>
</template>

<script>
import NavbarComponent from "@/components/NavbarComponent";
import FooterComponent from "@/components/FooterComponent";
export default {
  name: "TemplateView",
  components: {
    NavbarComponent,
    FooterComponent,
  },
};
</script>

<style lang="scss" scoped></style>
