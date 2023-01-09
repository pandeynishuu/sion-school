<template>
   <section class="gallery-section">
        <div class="container">
            <div class="row">
                <div class="col-md-4" v-for="(videoId,index) in gallery" :key="index">
                    <!-- <youtube :video-id="videoId" ref="youtube" @playing="stop"></youtube> -->
                    <!-- <button @click="playVideo">play</button> -->
                </div>
            </div>
        </div>
   </section>
</template>

<script>
import { mapGetters } from 'vuex';

    export default {
        name:"VideoGallery",
        props:["id"],
        computed :{
          ...mapGetters({
            gallery :"get_gallery"
           
            }),
           
             
        },

}
    
</script>

<style  scoped>
.services{
    background-color: #fafafa;
    border: 10px solid #fff;
    box-shadow: 0 0px 10px rgb(0 0 0 / 20%);
    object-fit: cover;
  }
  .text{
    color: #011b5e !important;
    font-size: 16px;
    font-family: Montserrat, sans-serif;
    font-weight: 500;
    text-align: center;
  }
  .text :hover{
    color: red;
  }
  .images{
    height: 150px;
    width: fit-content;
  }
</style>