<template>
  <div>
    <!-- head header -->
    <div class="topNavBar">
      <div class="container">
        <div class="row">
          <div class="col-md-3 col-12 col-sm-12">
            <div>
              <div class="text-white">
                <div class="d-flex" style="padding: 5px">
                  <i class="fa-solid fa-phone" style="padding: 3px"></i>
                  <!-- <p>+977-25-532013/532005/9814394901</p> -->
                  <p>{{ company.contact }}</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-5 col-12 col-sm-12">
            <div class="text-white">
              <div class="d-flex" style="padding: 5px">
                <i class="fa-solid fa-envelope" style="padding: 3px"></i>
                <p>{{ company.email }}</p>
              </div>
            </div>
          </div>
          <div class="col-md-4 col-12 col-sm-12">
            <div class="text-white">
              <div class="d-flex" style="padding: 5px">
                <i class="fa-solid fa-location-dot" style="padding: 3px"></i>
                <p>{{ company.address }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <nav class="navbar navbar-expand-lg bg-light">
      <div class="container">
        <a class="navbar-brand" href="#"
          ><img :src="company.logo" alt="Max-width 100%" style="height: 55px"
        /></a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <a
                class="nav-link active"
                aria-current="page"
                href="#"
                @click.prevent="$router.push({ name: 'home' })"
                >Home</a
              >
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                About Us
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <!-- <a href="" @click.prevent="fetchByCategoryId({title:title.id,id:id})" v-for="(title,index) in title" :key="index">
                <li >{{title.name}}</li>
               </a> -->
                <li v-for="(about, index) in about" :key="index">
                  <a class="dropdown-item" href="#">{{ about.title }}</a>
                </li>
              </ul>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Information
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li v-for="(information, index) in information" :key="index">
                  <a class="dropdown-item" href="#">{{ information.title }}</a>
                </li>
              </ul>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Downloads
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a class="dropdown-item" href="#"></a></li>
              </ul>
            </li>
            <li class="nav-item">
              <a
                class="nav-link active"
                aria-current="page"
                href="#"
                @click.prevent="$router.push({ name: 'gallery' })"
                >Gallery</a
              >
            </li>
            <li class="nav-item">
              <a
                class="nav-link active"
                aria-current="page"
                href="#"
                @click.prevent="$router.push({ name: 'notice' })"
                >Notice</a
              >
            </li>
            <li class="nav-item">
              <a
                class="nav-link active"
                aria-current="page"
                href="#"
                @click.prevent="$router.push({ name: 'blog' })"
                >Blog</a
              >
            </li>
            <li class="nav-item">
              <a
                class="nav-link active"
                aria-current="page"
                href="#"
                @click.prevent="$router.push({ name: 'event' })"
                >News&Events</a
              >
            </li>
            <li class="nav-item">
              <a
                class="nav-link active"
                aria-current="page"
                href="#"
                @click.prevent="$router.push({ name: 'contact' })"
                >Contact</a
              >
            </li>
          </ul>
          <button type="button" class="btn">Enroll Now</button>
        </div>
      </div>
    </nav>
    <div>
      <div class="bottom-header marquee-head">
        <div class="marquee-inner">General Notice</div>
        <div class="marquee-body">
          <marquee
            class="marquee-items"
            onmouseover="this.stop();"
            onmouseout="this.start();"
            scrollamount="10"
          >
            <a href=""
              >Admission Open 👨‍🎓 👩‍🎓 𝙎𝙘𝙞𝙚𝙣𝙘𝙚, 𝙃𝙤𝙩𝙚𝙡 𝙈𝙖𝙣𝙖𝙜𝙚𝙢𝙚𝙣𝙩, 𝘾𝙤𝙢𝙢𝙚𝙧𝙘𝙚 & 𝘾𝙤𝙢𝙥𝙪𝙩𝙚𝙧
              𝙎𝙘𝙞𝙚𝙣𝙘𝙚.</a
            >
            <a href=""
              >Admission Open 👨‍🎓 👩‍🎓 𝙎𝙘𝙞𝙚𝙣𝙘𝙚, 𝙃𝙤𝙩𝙚𝙡 𝙈𝙖𝙣𝙖𝙜𝙚𝙢𝙚𝙣𝙩, 𝘾𝙤𝙢𝙢𝙚𝙧𝙘𝙚 & 𝘾𝙤𝙢𝙥𝙪𝙩𝙚𝙧
              𝙎𝙘𝙞𝙚𝙣𝙘𝙚.
            </a>
            <a href="">
              Admission Open 👨‍🎓 👩‍🎓 𝙎𝙘𝙞𝙚𝙣𝙘𝙚, 𝙃𝙤𝙩𝙚𝙡 𝙈𝙖𝙣𝙖𝙜𝙚𝙢𝙚𝙣𝙩, 𝘾𝙤𝙢𝙢𝙚𝙧𝙘𝙚 & 𝘾𝙤𝙢𝙥𝙪𝙩𝙚𝙧 𝙎𝙘𝙞𝙚𝙣𝙘𝙚.
            </a>
            <a href=""
              >Admission Open 👨‍🎓 👩‍🎓 𝙎𝙘𝙞𝙚𝙣𝙘𝙚, 𝙃𝙤𝙩𝙚𝙡 𝙈𝙖𝙣𝙖𝙜𝙚𝙢𝙚𝙣𝙩, 𝘾𝙤𝙢𝙢𝙚𝙧𝙘𝙚 & 𝘾𝙤𝙢𝙥𝙪𝙩𝙚𝙧
              𝙎𝙘𝙞𝙚𝙣𝙘𝙚.</a
            >
            <a href="">
              Admission Open 👨‍🎓 👩‍🎓 𝙎𝙘𝙞𝙚𝙣𝙘𝙚, 𝙃𝙤𝙩𝙚𝙡 𝙈𝙖𝙣𝙖𝙜𝙚𝙢𝙚𝙣𝙩, 𝘾𝙤𝙢𝙢𝙚𝙧𝙘𝙚 & 𝘾𝙤𝙢𝙥𝙪𝙩𝙚𝙧 𝙎𝙘𝙞𝙚𝙣𝙘𝙚.
            </a>
            <a href=""
              >Admission Open 👨‍🎓 👩‍🎓 𝙎𝙘𝙞𝙚𝙣𝙘𝙚, 𝙃𝙤𝙩𝙚𝙡 𝙈𝙖𝙣𝙖𝙜𝙚𝙢𝙚𝙣𝙩, 𝘾𝙤𝙢𝙢𝙚𝙧𝙘𝙚 & 𝘾𝙤𝙢𝙥𝙪𝙩𝙚𝙧
              𝙎𝙘𝙞𝙚𝙣𝙘𝙚.</a
            >
            <a href="">
              Admission Open 👨‍🎓 👩‍🎓 𝙎𝙘𝙞𝙚𝙣𝙘𝙚, 𝙃𝙤𝙩𝙚𝙡 𝙈𝙖𝙣𝙖𝙜𝙚𝙢𝙚𝙣𝙩, 𝘾𝙤𝙢𝙢𝙚𝙧𝙘𝙚 & 𝘾𝙤𝙢𝙥𝙪𝙩𝙚𝙧
              𝙎𝙘𝙞𝙚𝙣𝙘𝙚.</a
            >
            <a href=""
              >Admission Open 👨‍🎓 👩‍🎓 𝙎𝙘𝙞𝙚𝙣𝙘𝙚, 𝙃𝙤𝙩𝙚𝙡 𝙈𝙖𝙣𝙖𝙜𝙚𝙢𝙚𝙣𝙩, 𝘾𝙤𝙢𝙢𝙚𝙧𝙘𝙚 & 𝘾𝙤𝙢𝙥𝙪𝙩𝙚𝙧
              𝙎𝙘𝙞𝙚𝙣𝙘𝙚.</a
            >
            <a href=""
              >Admission Open 👨‍🎓 👩‍🎓 𝙎𝙘𝙞𝙚𝙣𝙘𝙚, 𝙃𝙤𝙩𝙚𝙡 𝙈𝙖𝙣𝙖𝙜𝙚𝙢𝙚𝙣𝙩, 𝘾𝙤𝙢𝙢𝙚𝙧𝙘𝙚 & 𝘾𝙤𝙢𝙥𝙪𝙩𝙚𝙧
              𝙎𝙘𝙞𝙚𝙣𝙘𝙚.
            </a>
            <a href="">
              Admission Open 👨‍🎓 👩‍🎓 𝙎𝙘𝙞𝙚𝙣𝙘𝙚, 𝙃𝙤𝙩𝙚𝙡 𝙈𝙖𝙣𝙖𝙜𝙚𝙢𝙚𝙣𝙩, 𝘾𝙤𝙢𝙢𝙚𝙧𝙘𝙚 & 𝘾𝙤𝙢𝙥𝙪𝙩𝙚𝙧 𝙎𝙘𝙞𝙚𝙣𝙘𝙚.
            </a>
            <a href=""
              >Admission Open 👨‍🎓 👩‍🎓 𝙎𝙘𝙞𝙚𝙣𝙘𝙚, 𝙃𝙤𝙩𝙚𝙡 𝙈𝙖𝙣𝙖𝙜𝙚𝙢𝙚𝙣𝙩, 𝘾𝙤𝙢𝙢𝙚𝙧𝙘𝙚 & 𝘾𝙤𝙢𝙥𝙪𝙩𝙚𝙧
              𝙎𝙘𝙞𝙚𝙣𝙘𝙚.</a
            >
            <a href="">
              Admission Open 👨‍🎓 👩‍🎓 𝙎𝙘𝙞𝙚𝙣𝙘𝙚, 𝙃𝙤𝙩𝙚𝙡 𝙈𝙖𝙣𝙖𝙜𝙚𝙢𝙚𝙣𝙩, 𝘾𝙤𝙢𝙢𝙚𝙧𝙘𝙚 & 𝘾𝙤𝙢𝙥𝙪𝙩𝙚𝙧 𝙎𝙘𝙞𝙚𝙣𝙘𝙚.
            </a>
          </marquee>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import { mapGetters } from 'vuex';

import { mapGetters } from "vuex";

export default {
  name: "NavbarComponent",
  computed: {
    ...mapGetters({
      company: "get_company",
      about: "get_about",
      information: "get_information",
      notice: "get_notice",
    }),
  },
};
</script>

<style scoped>
a {
  color: black;
}
p {
  margin: 0;
}
</style>
