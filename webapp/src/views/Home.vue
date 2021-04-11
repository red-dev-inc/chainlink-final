<template>
  <div class="home">
    <Title title="Home"></Title>
    <v-container id="deletable">  
      <h1 class="hd">Select a Delegation Node</h1>
      <!-- <v-btn plain @click="prevStep" :ripple="false" :opacity="1.0" class="mr-10 pa-0 f-btn">Prev <div class="h-line"></div></v-btn> -->
      <v-data-table :headers="headers" :items="data" :items-per-page="20" class="elevation-1 table-striped">
        <template v-slot:item.nid="{item}">
          <v-tooltip top>
            <template v-slot:activator="{ on, attrs }">
              <span v-bind="attrs" v-on="on" @click="cp" @mouseleave="cc" class="node">{{item.nid}}</span>
            </template>
            <span id="cni">{{cni}}</span>
          </v-tooltip>
        </template>
      </v-data-table>
    </v-container>
    <Footer/>
  </div>
</template>

<style scoped>
.hd {
  font-size: 3rem;
  font-weight: 500;
  letter-spacing: 1.2px;
  color: #E63940;
  margin-bottom: 60px;
}
#deletable {
  padding-top: 170px !important;
  margin-top: -170px;
  margin-bottom: 100px;
}
.node{
  cursor: pointer;
  user-select: all;
}

@media (max-width: 600px) {
  .hd {
    font-size: 2.3rem;
    line-height: 1.2;
  }
  #deletable {
  padding: 170px 24px 150px;
  margin-top: -100px;
  margin-bottom: 50px;
}
}
</style>
<script>

import Title from '@/components/Title.vue'
import Footer from '@/components/Footer.vue'
import Web3 from 'web3'
import { pchain, contract_address, abi } from '../constant.js'

let arr = []
export default {
  name: 'Home',
  components: {
    Title, Footer
  },
  data () {
    return {
      title: 'Home',
      cni: 'Copy Node ID',
      headers: [
      {
        text: 'Node ID',
        align: 'start',
        sortable: false,
        value: 'nid',
        class: 'reddev white--text'
      },
      { text: 'Expires', value: 'expire', class: 'reddev white--text' },
      { text: 'Available for Delegation', value: 'avail', class: 'reddev white--text' },
      { text: 'Delegation Fee', value: 'fee', class: 'reddev white--text' },
      { text: 'Uptime', value: 'uptime', class: 'reddev white--text' },
      { text: 'RediYeti Guarantee', value: 'ryg', class: 'reddev white--text' },   
      ],
        
      data: [],
    }
  },
  mounted() {
    this.loadData()
  },
  methods: {
    async loadData() {
      const cv = await pchain.getCurrentValidators()
      const web3 = new Web3(window.ethereum);
      const contract = new web3.eth.Contract(abi, contract_address)
      this.getData(contract, cv)
    },
     
    //Get the list of valiadtors from smart contract
    async getData(contract, cv) {
      var id = await contract.methods.getLength().call()
      for (var i=0; i<id.length; i++) {
        var data = await contract.methods.getData(id[i]).call()
        this.checkMatch(data, cv)
      }    
    },
    
    //Macth the validator node id from the fuji test net and fetch related data
    checkMatch(data, cv){
      for (var i=0; i<cv.validators.length; i++) {
        if(data[0] === cv.validators[i].nodeID) {
          let endTime = ((new Date(cv.validators[i].endTime * 1000)).toLocaleString()).split(",")
          let sa1 = (cv.validators[i].stakeAmount * 4), sa2 = 0, freeSpace
          if(cv.validators[i].delegators == null) {
            freeSpace = sa1
          }
          else {
            for(var j=0; j<cv.validators[i].delegators.length; j++) {
              sa2 = eval(sa2) + eval(cv.validators[i].delegators[j].stakeAmount)
            }
            freeSpace = sa1 - sa2
          }
          freeSpace = (eval(freeSpace) * 0.000000001).toFixed(3) + ' AVAX'
          let fee = (cv.validators[i].delegationFee * 1) + ' %'
          let uptime = (cv.validators[i].uptime * 100).toFixed(2) + ' %'
          let reward = data[1] + ' %'
          arr.push({nid: cv.validators[i].nodeID, expire: endTime[0], avail: freeSpace, fee: fee, uptime: uptime, ryg: reward})
        }
      }
      this.data = arr
    },
  
    //Copy node id
    cp() {
      document.execCommand("copy")
      this.cni = "Copied"
    },
              
    cc() {
      this.cni = "Copy Node ID"
    }
  },
}



</script>
