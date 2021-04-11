<template>
<div class="add">
    
    <section id="title">

    </section>
    <Guarantee/>
    <Footer/>
</div>
</template>


<style scoped>
#title{
  background-image: url('../assets/red_background-08.png');
  background-position: bottom center;
  background-size: cover;
  background-repeat: no-repeat;
  height: 40vh;
  width: 100%;
}
@media (max-width: 600px) {
  #title {
      background-image: url('../assets/mobile-bg.png'); 
      height: 25vh;
  }
}
</style>
<script>
import Footer from '@/components/Footer.vue'
import Guarantee from '@/components/Guarantee.vue'

  export default {
    name: 'Add_validator',
    components: {
      Guarantee, Footer
    },
    
  }
  
</script>