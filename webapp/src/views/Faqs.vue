<template>
    <div class="faqs">
      <section id="title">

      </section>
        
  <v-container class="container">
    <h1 class="hd">How it Works</h1>
    <p class="desc">RediYeti is for both <span class="reddev--text">validators</span> and <span class="reddev--text">delegators.</span></p>
    <p class="desc"><span class="reddev--text">Validators</span> are those who run an Avalanche validator node on which they have staked at least 2000 AVAX.</p>
    <p class="desc"><span class="reddev--text">Delegators</span> are those who would like to stake at least 25 AVAX on someone else’s validator node.</p>
    <h3 class="rhd">Which best describes you?</h3>
    <v-radio-group v-model="radios" row>
      <v-radio color="reddev" label="I am a validator" value="radio1" class="radio1"></v-radio>
      <v-radio color="reddev" label="I am a deligator" value="radio2"></v-radio>
    </v-radio-group>

    <!-- <div v-if="radios == 'radio-1'"><p>Hello1</p></div>
    <div v-else><p>Hello2</p></div> -->

    <div v-if="radios == 'radio1'">
      <div>
        <p class="dhd">RediYeti for Validators</p>
        <p class="desc">If you run a validator node, you want to get as many delegators as you can to stake on your node. Competition is stiff, and RediYeti gives you an edge.</p>
        <p class="desc">It lets you guarantee to your delegators that they will get their AVAX delegation reward no matter what— <span class="reddev--text">even if your node completely fails or does not meet the required 60% uptime threshold.</span><p>
        <p class="desc">Even better, it lets you guarantee them a 200%, 300% or more of a payout in the unlikely event that your node fails. And with RediYeti, they don’t need to trust you to make this payout; the payment comes straight out of the RediYeti dapp which holds funds in escrow.</p>
        <p class="desc">It’s easy to use. Set up your validator node normally. Then guarantee your node <a href="/frm" class="reddev--text">here</a>. Delegations are guaranteed automatically; there’s nothing more that delegators need to do. If your node behaves well and rewards are paid out to delegators by Avalanche, all funds will be returned to you from RediYeti’s escrow account once your validation period ends.</p>
      </div>
    </div>

    <div v-else-if="radios == 'radio2'">
      <div>
        <p class="dhd">RediYeti for Delegators</p>
        <p class="desc">When you delegate your AVAX to a RediYeti validator node, you are guaranteed to get your <span class="reddev--text">Avalanche delegation reward</span>. No matter what. Here is how it works. If the node you delegate to is up over 60% of the time during your delegation, the Avalanche network will pay you your reward as usual. If, however, this node is not up for 60% of the time, RediYeti will automatically award you instead.</p>
        <p class="desc">And here’s where it gets interesting. Depending on how the validator you use sets up their node with RediYeti, you could receive more—200%, 300% or even more of a payout!</p>
        <p class="desc">It’s easy. Find a RediYeti validator <a href="/#deletable" class="reddev--text">here</a>. You can see the payout % each gives. Copy its node-id, and paste it into your Avalanche Web Wallet as you choose which node to delegate to. Your delegation is guaranteed automatically.</p>
        <p class="desc">If you ever need to make a claim, it’s easy! Fill out the claim form here. Your RediYeti AVAX payout will be sent from the RediYeti dapp to the C-chain address that you specify. This system is entirely decentralized and automatic.</p>
      </div>
    </div>
  </v-container>
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
.radio-group {
  display: flex !important;
  flex-direction: row !important;
}
.hd {
  font-size: 2.7rem;
  font-weight: 500;
  letter-spacing: 1.2px;
  color: #E63940;
  margin-bottom: 40px;
}
.desc {
  font-size: 1.3rem;
  color: #57585A;
  margin-bottom: 10px;
}
.rhd {
  font-size: 1.6rem;
  font-weight: 500;
  letter-spacing: 1.2px;
  color: #E63940;
  margin: 30px 0 20px;
}
.dhd {
  font-size: 1.5rem;
  font-weight: 500;
  letter-spacing: 1.2px;
  color: #E63940;
  margin: 30px 0 20px;
}
.radio1 {
  margin-right: 2.5rem;
}
.container {
        /* padding: 3rem 1.5rem; */
        margin-top: -50px;
        margin-bottom: 130px;
    }
@media (max-width: 600px) {
  #title {
      background-image: url('../assets/mobile-bg.png'); 
      height: 25vh;
  }
  .hd {
    font-size: 2.3rem;
  }
  .container {
        padding: 3rem 1.5rem;
        margin-bottom: 130px;
        margin-top: 0;
    }
    .radio1 {
  margin-right: 0;
  margin-bottom: 1rem;
}
}
</style>

<script>
import Footer from '@/components/Footer.vue'
  export default {
    name: 'Faqs',
    components: {
      Footer
    },
    data () {
      return {
        radios: null,
      }
    },
  }
</script>