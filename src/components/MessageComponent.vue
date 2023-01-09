<template>
    <div>
        <div class="container">
            <div class="row">
                <div class="col-md-3">
                    <img :src="msg.photo" alt="" class="img-fluid">
                </div>
                <div class="col-md-9">
                    <h2>{{ msg.title }}</h2>
                    <div v-html="msg.description.toString().substring(0,500)+'...'"></div>
                    <span><a href="" >[Read More]</a></span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

    export default {
        name:"MessageComponent",
        props:["slug"],
        computed:{
            ...mapGetters({
                message :'get_about'
            }),

            msg() {
              return this.message.find((c) => c.slug == "message-from-director"); 
            },
        },
      
    }
</script>

<style lang="scss" scoped>

</style>