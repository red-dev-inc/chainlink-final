<template>
    <section id="title">
       <div class="container">
            <h1 class="heading d-none d-lg-block">RediYeti Guarantee <br>System for Avalanche</h1>
            <h1 class="heading d-lg-none">RediYeti Guarantee System for Avalanche</h1>
            <img src="../assets/dot.png" alt="dot" class="dot">
            <img src="../assets/yeti.png" alt="yeti" class="yeti">
            <a href="#deletable">
                <div class="v-text" id="v-text">
                    <span class="v-scroll">Scroll</span>
                    <div class="dash"></div>
                </div>
            </a>
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
    font-size: 4rem;
    /* font-family: 'Roboto', sans-serif; */
    font-weight: 400;
    letter-spacing: 1.7px;
    position: absolute;
    top: 50%;
    left: 7rem;
    transform: translate(0, -30%);
    z-index: 1;
    line-height: 1.2;
    /* opacity: 0; */
    /* animation: opacity 2.5s ease-in; */
}
.v-text {
    display: flex;
    align-items: center;
    transform-origin: left top;
    transform: rotate(90deg);
    position: absolute;
    top: calc(100vh - 150px);
    right: 0;
    cursor: pointer;
}
.v-scroll {
    color: #F6F6F6;
    font-size: 1.2rem;
    margin-right: 10px;
}
.dash {
    width: 80px;
    height: 2px;
    background-color: #F6F6F6;
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
        top: 25%;
        transform: none;
    }
    .v-text {
        transform-origin: right top;
        top: 96vh;
        right: 10%;
    }
    /* .container {
        padding: 1.5rem;
    } */
}
</style>

<script>
    import Vue from 'vue'
    import Vuetify from "vuetify";
    Vue.use(Vuetify);
    export default Vue.extend({
        name: 'Title',
    })
</script>