<template>
    <section id="title">
       <div class="container">
            <h1 class="heading">Coming Soon</h1>
            <!-- <h1 class="heading mb">Avalanche <br> Delegation</h1> -->
            <img src="../assets/dot.png" alt="dot" class="dot">
            <img src="../assets/yeti.png" alt="yeti" class="yeti">
        </div> 
    </section>
</template>

<style scoped>
#title{
  background-image: url('../assets/red_background-08.png');
  background-position: bottom center;
  background-size: cover;
  background-repeat: no-repeat;
  height: 100vh;
  width: 100%;
  position: relative;
}
.dot {
    /* width: 581px; */
    height: 321px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-14%, -40%);
    /* opacity: 0; */
    /* animation: opacity 3s linear; */
}
.yeti {
  height: 900px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(0, -40%);
}
.heading {
    color: #F6F6F6;
    font-size: 4.5rem;
    /* font-family: 'Roboto', sans-serif; */
    font-weight: 400;
    letter-spacing: 1.7px;
    position: absolute;
    top: 50%;
    left: 17rem;
    transform: translate(0, -30%);
    z-index: 1;
    line-height: 1.2;
    /* opacity: 0; */
    /* animation: opacity 2.5s ease-in; */
}
@media (max-width: 600px) {
    #title {
       background-image: url('../assets/mobile-bg.png'); 
       height: 95vh;
    }
    .yeti {
        height: 650px;
        /* position: absolute; */
        /* top: 70%; */
        left: 0;
        /* top: 70%; */
        transform: translate(-20%, -17%);
    }
    .dot {
        height: 300px;
        transform: translate(-47%, -60%);
    }
    .heading {
        font-size: 2.4rem;
        left: 1.5rem;
        top: 40%;
        transform: none;
    }
    
}

</style>

<script>
    import Vue from 'vue'
    import Vuetify from "vuetify";
    Vue.use(Vuetify);
    export default Vue.extend({
        name: 'Comingsoon',
        
    })
</script>