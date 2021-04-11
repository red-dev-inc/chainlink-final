<template>
            <nav id="main-nav" :style="{height: height, backgroundColor: navbg}">
                <div class="sub-nav1">
                    <a href="/"> <img :src="logo" alt="logo" class="logo" id="nav-logo"></a>
                    <img @click="showNav" :src="ham" alt="ham" class="ham">
                </div>
                <div class="slidenav" :style="diffcolor ? {display: 'block'} : {display: 'none'}">
                    <ul class="nav-links">
                        <li ><a href="/#deletable" class="reddev--text">Select a Delegation Node</a></li>
                        <li><a href="/faqs" class="reddev--text">How it Works</a></li>
                        <li><a href="/coming-soon" class="reddev--text">Make a Claim</a></li>
                        <li><a href="/coming-soon" class="reddev--text">Guaranteed Delegations</a></li>
                        <li><a href="/add_validator" class="reddev--text">Add your Validator</a></li>
                        <li><a href="/coming-soon" class="reddev--text">Remove your Validator</a></li>
                    </ul>
                </div>
            </nav>
</template>

<style scoped>
    nav {
    width: 100%;
    /* height: fit-content; */
    display: flex;
    flex-direction: column;
    align-items: center;
    
    padding: 1rem 4rem;
    position: fixed;
    top: 0;
    left: 0;
    /* background-color: transparent; */
    z-index: 2;
    transition: all .5s ease-in;

}
.shownav {
    display: block;
}
.diffcolor {
  /* height: 100vh;  */
  background-color: white !important; 
  transition: all .5s ease-in;
}
.sub-nav1 {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.slidenav {
    margin: auto;
    /* display: flex;
    align-items: center;
    justify-content: center; */
    text-align: center;
    transition: all .5s ease-in;
    /* display: none; */
}
.logo {
    height: 5rem;
    transition: all .3s ease-in;
}
.ham {
    height: 2.5rem;
    cursor: pointer;
    fill: #000;
}
/* .ham {
    height: 6px;
    background-color: #f6f6f6;
    border-radius: 20px;
}

.ham1 {
    width: 50%;
}

.ham2 {
    width: 75%;
}

.ham3 {
    width: 100%;
} */

.ham-grp {
    width: 40px;
    height: 40px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;
}

.nav-links li {
    list-style: none;
    font-size: 2rem;

    padding-bottom: 1rem; 
}
.nav-links li a {
    /* color: #af1919; */
    text-decoration: none;
    font-weight: regular;
    transition: all .3s ease-in;
}

@media (max-width: 900px) {
    nav {
        padding: 1rem 1.5rem;
    }
    .logo {
        height: 3rem;
    }
    .ham {
        height: 1.5rem;
    }
    .nav-links li {
        font-size: 1.5rem;
    }
}
</style>

<script>
    import Vue from 'vue'
    import Vuetify from "vuetify";
    Vue.use(Vuetify);
    export default Vue.extend({
        name: 'Navbar',
        data() {
            return {
                diffcolor: false,
                logo: require('../assets/rediyeti_logo_white.png'),
                close: require('../assets/close.svg'),
                ham_white: require('../assets/ham.svg'),
                ham_red: require('../assets/hamred.png'),
                display: 'block',
                navbg: 'transparent',
                ham: require('../assets/ham.svg'),
                height: 'fit-content'
            }
        },
        computed: {
            diffColor() {
                return {
                    diffcolor: this.diffcolor,
                }
                
            },
        },
        mounted() {
            window.onscroll = () => {
                this.changeColor();
            };
        },
        methods: {
            changeColor() {
                if (
                    document.body.scrollTop > 100 ||
                    document.documentElement.scrollTop > 100
                ) {
                    this.navbg = '#f6f6f6'
                    this.ham = this.ham_red
                    this.logo = require('../assets/rdlogo_red.png')
                } else {
                    this.navbg = 'transparent'
                    this.ham = this.ham_white
                    this.logo = require('../assets/rediyeti_logo_white.png')
                }
            },
            showNav() {
                this.diffcolor = !this.diffcolor
                if(this.diffcolor) {
                    this.height = '100vh'
                    this.navbg = '#f6f6f6'
                    this.logo = require('../assets/rdlogo_red.png')
                    this.ham = this.close
                }
                else {
                    this.height = 'fit-content'
                    this.navbg = 'transparent'
                    this.logo = require('../assets/rediyeti_logo_white.png')
                    this.ham = this.ham_white
                }
            }
        }
    })
</script>