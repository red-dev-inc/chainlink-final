<template>
    <div id="footer">
      <a href="#title">
                    <div class="v-text cv">
                        <span class="v-scroll">To The Top</span>
                        <div class="dash"></div>
                    </div>
                </a>
        <a href="/"> <img src="../assets/rediyeti_logo_white.png" alt="logo" class="logo" id="nav-logo"></a>
        <div>
          <a href="https://www.red.dev/" target="_blank"><button class="f-btn">Created by red•dev</button></a>
          <p class="copy-right">©<span id="year"></span> red·dev Inc. All Rights Reserved.</p>
        </div>
      
    </div>
</template>

<style scoped>
#footer {
    /* background-color: #de2c56; */
    background-image: url("../assets/red_footer.svg");
    background-repeat: no-repeat;
    background-size: auto;
    background-position: left 30% top 10%;
    height: 20rem;
    padding: 3rem 4rem;
    position: relative
}
.logo {
    height: 5rem;
    transition: all .3s ease-in;
}

.f-btn {
  font-size: 1.3rem;
  color: #f6f6f6;
  border: 2px solid #f6f6f6;
  border-radius: 10px;
  padding: 5px 25px;
  margin-bottom: 6rem;
}
.copy-right {
  color: #f6f6f6;
  font-size: 1rem;
}
.v-text {
    display: flex;
    align-items: center;
    transform-origin: left top;
    transform: rotate(90deg);
    position: absolute;
    top: -10%;
    right: -3%;
    cursor: pointer;
}
.v-scroll {
    color: #E63940;
    font-size: 1.2rem;
    margin-right: 10px;
}
.dash {
    width: 80px;
    height: 2px;
    background-color: #E63940;
}

@media (max-width: 600px) {
    #footer {
        padding: 4rem 1.5rem;
        background-position: left 40% top 10%;
    }
    .logo {
        height: 3rem;
    }
    .f-btn {
        font-size: 1rem;
        margin-top: 1rem;
    }
    .v-text {
        transform-origin: right top;
        top: 25%;
        right: 10%;
    }
}
</style>

<script>
    import Vue from 'vue'
    import Vuetify from "vuetify";
    Vue.use(Vuetify);
    export default Vue.extend({
        name: 'Footer',
        
    })
</script>