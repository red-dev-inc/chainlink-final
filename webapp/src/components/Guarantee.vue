<template>
    <v-container class="container">
        <h1 class="hd">Add your Validator</h1>
        <h3 class="reddev--text mb-3 step">Step {{step}}</h3>
        <v-card class="card mx-auto reddev" max-width="100%">
            <v-form ref="form" v-model="valid">
                <section v-if="step == 1">
                    <label class="rdwhite--text">Validator Node ID</label>
                    <v-text-field color="#f6f6f6" v-model="node" :rules="[v => !!v || 'Node ID is required',]" outlined required class="mt-3" :class="checkFill"></v-text-field>
                </section>

                <section v-if="step == 2">
                    <label class="rdwhite--text">P-Chain Address of Validator Node</label>
                    <v-text-field color="#f6f6f6" v-model="pchain" outlined required class="mt-3" :class="checkFill"></v-text-field>
                    <label class="rdwhite--text">100% RediYeti Guarantee Requires</label>
                    <v-text-field color="#f6f6f6" @keyup="check" v-model="reward" outlined required class="mt-3" :class="checkFill" :rules="[v => ((v.split(' '))[0] >= (oldReward.split(' '))[0]) || 'Must be atleast 100%']"></v-text-field>
                </section>

                <v-btn plain @click="prevStep" v-if="step != 1 && step !=totalStep" :ripple="false" :opacity="1.0" class="mr-10 pa-0 f-btn">Prev <div class="h-line"></div></v-btn>
                <v-btn plain :disabled="!valid" @click="nextStep" v-if="step != totalStep && step != (totalStep-1)" :ripple="false"  class="f-btn pa-0">Next <div class="h-line" :style="valid ? {backgroundColor:'#f6f6f6'} : {backgroundColor: '#f6f6f6ad'}"></div></v-btn>
                <v-btn plain :disabled="!valid" @click="guarantee" v-if="step == 2" :ripple="false" class="f-btn pa-0">Guarantee <div class="h-line" :style="valid ? {backgroundColor:'#f6f6f6'} : {backgroundColor: '#f6f6f6ad'}"></div></v-btn> 
            </v-form>

            <div v-if="formStatus == true && step == totalStep"><h2 class="message">RediYeti Guarantee is Successful</h2></div>
            <div v-else-if="formStatus == false && step == totalStep"><h2 class="message">Sorry, RediYeti Guarantee is not Successful</h2></div>
        </v-card>
    </v-container>
</template>

<style scoped>
.f-btn {
    min-width: fit-content !important;
    color: #f6f6f6;
    opacity: 1.0 !important;
}

.h-line {
    width: 80px;
    height: 2px;
    background-color: #f6f6f6;
    margin-left: 5px;
}
.hd {
  font-size: 3rem;
  font-weight: 500;
  letter-spacing: 1.2px;
  color: #E63940;
  margin-bottom: 20px;
}
.step {
    font-size: 1.5rem;
    font-weight: 500;
}
.message {
    color: #f6f6f6;
    font-size: 1.5rem;
    text-align: center;
    font-weight: 400;
}
.container {
    margin-top: -50px;
    margin-bottom: 130px;
}
.card {
        padding: 2.5rem;
    }

@media (max-width: 600px) {
    .hd {
        font-size: 2.3rem;
    }
    .container {
        padding: 3rem 1.5rem;
        margin-bottom: 130px;
        margin-top: 0;
    }
    .card {
        padding: 1.5rem;
    }
    .step {
        font-size: 1.4rem;
    }
}
</style>

<script>
    import Vue from 'vue'
    import Vuetify from "vuetify";
    import Web3 from 'web3'
    import { pchain, contract_address, abi } from '../constant.js' 

    Vue.use(Vuetify);
    export default Vue.extend({
        name: 'Guarantee',
        data() {
        return {
            isflld: false,
            valid: true,
            step: 1,
            totalStep: 3,
            formStatus: '',
            node: '',
            pchain: '',
            reward: '',
            oldReward: '',
            rewardPercentage: 100,           
        }
    },

    computed: {

        //Checking input field is filled or not. If filled, change color to #f6f6f6
        checkFill() {
            let cf
            if(this.node != '') {
                cf = 'isflld'
            }
            else {
                cf = 'ntflld'
            }
            return cf
        }, 
    },

    methods: {

        // Previous form step
        prevStep() {
            this.step--
        },

        //Next form step
        nextStep() {
            this.step++
        },
         
        //Calculate reward in percentage if user changes reward value
        check() {

            //Only calculate reward if the user input is greater than previous calculated reward 
            if (this.reward >= this.oldReward) {
                let split1 = (this.reward).split(" ")
                let split2 = (this.oldReward).split(" ")
                this.reward = split1[0] + " AVAX"
                this.rewardPercentage = (100 * (split1[0]/split2[0])).toFixed(2)
            }
        },

        //Guarentee validator node
        async guarantee() {
            if (window.ethereum) {
                const web3 = new Web3(window.ethereum);
                this.enable(web3)    
            }
            else {
                alert("You don't have metamask installed in your browser")
            }       
        },

        //Step1 - Enable web3 provider
        async enable(web3) {
            var a = await window.ethereum.enable();
            if ( a != '') {
                this.getTheAccounts(web3)
            }
            else {
                this.enable(web3)
            }
        },
         
        //Step2 - Get the Account address of Metamask wallet
        async getTheAccounts(web3) {
            var accs = await web3.eth.getAccounts()
            var account1 = accs[0]
            const contract = new web3.eth.Contract(abi, contract_address)
            this.getArray(contract, account1, web3)      
        },
        
        //Step3 - Get the array of validator ids to get the latest id
        async getArray(contract, account1, web3) {
            var id = await contract.methods.getLength().call()
            this.storeData(account1, web3, id, contract)
        },

        //Step4 - Store data of the Validator and send reward to the smart contract
        async storeData(account1, web3, id, contract) {
            id = (id.length + 1)
            let amount = ((this.reward).split(" "))[0]
            try {
                await contract.methods.storeData(this.node, id, this.rewardPercentage).send({from: account1, value: web3.utils.toWei(amount, "ether")})
                this.formStatus = true    
            }
            catch(e) {
                this.formStatus = false
            }
            this.step = this.totalStep     
        },
    },

    watch: {

        //Watching Validator Node Id and fetching its P-chain Address and Potential reward
        async node() {
            const cv = await pchain.getCurrentValidators()
            for (var i=0; i<cv.validators.length; i++) {
                if(this.node === cv.validators[i].nodeID) {
                    this.pchain = cv.validators[i].rewardOwner.addresses[0]
                    let startTime = (cv.validators[i].startTime) * 1000
                    let endTime = (cv.validators[i].endTime) * 1000
                    let potentialReward = (cv.validators[i].potentialReward) * 4
                    let date = new Date()
                    let currentTime = date.getTime()
                    let range = endTime - startTime
                    let diff = endTime - currentTime
                    let timeLeft = (diff/range)
                    this.reward = (((timeLeft * potentialReward).toFixed(2)) * 0.000000001).toFixed(2) + " AVAX"
                    this.oldReward = this.reward
                }
            }
        },
    }   
})
</script>
