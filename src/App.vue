<template>
  <div id="app">
    <vue-facebook-page
      data-href="https://www.facebook.com/sionschooldharan16"
      link-text="Sion School"
    />
    <router-view />
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "App",
  methods: {
    ...mapActions([
      "fetchAbout",
      "fetchEvent",
      "fetchVideo",
      "fetchCompany",
      "fetchInformation",
      "fetchNotice",
      "fetchGallery",
    ]),
  },
  created() {
    this.fetchAbout();
    this.fetchEvent();
    this.fetchVideo();
    this.fetchCompany();
    this.fetchInformation();
    this.fetchNotice();
    this.fetchGallery();
  },
};
</script>
<style>
#app {
  font-family: "Open Sans", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

:root {
  --primaryColor: #000c66;
  --secondaryColor: #970c10;
}
.topNavBar {
  background-color: var(--primaryColor);
}

.btn {
  background-color: var(--secondaryColor);
  color: white;
}
.marquee-head {
  display: inline-flex;
}
.marquee-inner {
  background-color: rgb(1, 27, 94);
  color: #fff;
  text-align: center;
  height: 45px;
  line-height: 45px;
  width: 20%;
}
.marquee-body {
  width: 80%;
  height: 45px;
  line-height: 45px;
  background-color: #caa90e;
  color: #fff;
  text-align: center;
}
.marquee-items a {
  text-decoration: none !important;
  color: #ffff !important;
  font-size: 14px;
  font-weight: 400;
  border-right: solid white 2px;
  padding: 0 10px;
}
.message {
  padding: 45px 0px;
  background: url(https://valleyview.edu.np/css/images/bg-2.png) center fixed repeat;
  border-bottom: 1px solid #fff;
  border-top: 1px solid #fff;
}
.footer {
  background-image: url(https://sionschool.edu.np/images/footer2.jpg);
}
</style>
