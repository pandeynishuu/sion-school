<template>
  <div class="footer py-5">
    <div class="container">
      <div class="row">
        <div class="col-md-3">
          <h2>About Us</h2>
          Sion School is a co-educational English medium residential school that provides
          an affordable <br />
          education based on sound Biblical values. Sion School <br />
          run by a group of highly experie...
        </div>
        <div class="col-md-3">
          <h2>Contact Us</h2>
          <div>
            <div class="d-flex">
              <i class="fa-solid fa-location-dot" style="padding: 3px"></i>
              <h6>Address</h6>
            </div>
            <p>{{ company.address }}</p>
          </div>
          <div>
            <div class="d-flex">
              <i class="fa-solid fa-phone" style="padding: 3px"></i>
              <h6>Contact</h6>
            </div>
            <p>{{ company.contact }}</p>
          </div>
          <div>
            <div class="d-flex">
              <i class="fa-solid fa-envelope" style="padding: 3px"></i>
              <h6>Email</h6>
            </div>
            <p>{{ company.email }}</p>
          </div>
        </div>
        <div class="col-md-3">
          <h2>Social Links</h2>
          <ul>
            <li class="d-flex">
              <i class="fa-brands fa-facebook" style="padding: 3px"></i>
              <a href="">Facebook</a>
            </li>
            <li class="d-flex">
              <i class="fa-brands fa-youtube" style="padding: 3px"></i>
              <a href="">YouTube</a>
            </li>
            <li class="d-flex">
              <i class="fa-solid fa-instagram" style="padding: 3px"></i>
              <a href="">Instagram</a>
            </li>
          </ul>
          <!-- <div>
            <div class="d-flex">
              <i class="fa-brands fa-facebook"></i>
              <p>Facebook</p>
            </div>
            <div class="d-flex">
              <i class="fa-brands fa-youtube"></i>
              <p>YouTube</p>
            </div>
            <div class="d-flex">
              <i class="fa-solid fa-envelope"></i>
              <p>Facebook</p>
            </div> -->
          <!-- </div> -->
        </div>

        <div class="col-md-3">
          <div>
            <img
              src="https://sionschool.edu.np/images/163950060159337468_448074495944436_1383874381582696448_n%20(1).jpg"
              alt="Max-width 100%"
              style="height: 150px"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "FooterComponent",
  computed: {
    ...mapGetters({
      company: "get_company",
      about: "get_about",
    }),
  },
};
</script>

<style scoped>
a {
  text-decoration: none;
  color: black;
}
</style>
