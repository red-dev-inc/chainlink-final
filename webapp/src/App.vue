<template>
  
    <v-app>
      <Navbar/>
      
    <router-view/>
    
    </v-app>
  
</template>

<style lang="scss">
html {
  scroll-behavior: smooth;
  // font-size: 62.5%;
}
#app {
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  //color: #2c3e50;
}

// .v-text-field--outlined > .v-input__control > .v-input__slot {
//   border: 2px solid #f6f6f6 !important;
//   color: #f6f6f6 !important;
// }
// .v-text-field--outlined > .v-input__control > .v-input__slot:hover {
//   border: 2px solid #f6f6f6 !important;
//   color: transparent !important;
// }
.theme--light.v-text-field--outlined:not(.v-input--is-focused):not(.v-input--has-state) > .v-input__control > .v-input__slot fieldset {
  color: #fff !important;
}
.theme--light.v-btn.v-btn--disabled.f-btn {
  color: rgba($color: #f6f6f6, $alpha: 0.7) !important;
}
// .v-input__slot {
//   border: 2px solid #fff !important;
// }
.v-text-field--outlined.v-input--is-focused > .v-input__control > .v-input__slot {
  background-color: #f6f6f6 !important;
  color: transparent !important;
  caret-color: black !important;
}
.v-text-field--outlined.isflld > .v-input__control > .v-input__slot {
    background-color: #f6f6f6 !important;
}
.theme--light.v-app-bar.v-toolbar.v-sheet {
  background-color: transparent !important;
  // padding: 50px 0 !important;
  height: auto !important;
}
.v-btn--plain:not(.v-btn--active):not(.v-btn--loading):not(:focus):not(:hover) .v-btn__content {
    opacity: 1 !important;
}
.v-toolbar__content {
  height: auto !important;
  padding: 10px !important;
}
.theme--light.v-label {
  font-size: 1.3rem !important;
  color: #57585a !important;
}
.v-radio:checked ~ .theme--light.v-label {
  color: #E63940 !important;
}
tbody {
     tr:hover {
        background-color: #E639403B !important;
     }
  }
.v-application ul {
  padding-left: 0 !important;
}
</style>

<script>
import Navbar from '@/components/Navbar.vue'


export default {
  name: 'App',
  components: {
    Navbar
  },

}
</script>

