<template>
  <div class="ddmk" id="app">
    
    <!-- Nav start -->
      <nav-bar></nav-bar>
      
      <internetcon></internetcon>
        <!-- test Footer start -->
        <!-- <div class="">
            <div class="row">
                <div class="col-2 box">
                    {{scroll}} , {{show_footer}}
                </div>
            </div>
        </div> -->
        <!-- test Footer end -->

    <!-- Nav end -->
    <div class="container main-content">
      <div class="row">
        <div class="col-12">
          <transition :name="transitionName" >
            <router-view></router-view>
            <!-- <router-view :key="$route.fullPath" ></router-view> -->
          </transition>
        </div>
      </div>
    </div>

    <!-- Footer start -->
      <footer-bar v-if="show_footer==true || scroll==0"></footer-bar>
      <!-- <footer-bar v-if="show_footer==true"></footer-bar> -->
    <!-- Footer end -->

  </div>
</template>

<script>

import nav_Bar from "@/components/Nav/Navbar"
import footer_Bar from "@/components/Nav/Footer"
import internetcon from "@/components/CheckCon/InternetCon"

export default {
  name: 'App',
  data(){
    return{
      transitionName:"slide-fade",
      scroll: 0,
      text:'',
      show_footer:false
    }
  },
  components: {
    navBar : nav_Bar,
    footerBar : footer_Bar,
    internetcon : internetcon
  },
  watch:{
    scroll(){
      var scrollY_max = document.documentElement.scrollHeight - document.documentElement.clientHeight
      if (this.scroll == scrollY_max) {
        this.show_footer = true
      }else{
        this.show_footer = false
      }
    }
  },
  methods: {
    handleScroll() {
      this.scroll = window.scrollY
    }
  },
  created() {
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  computed:{
    
  }
  
}
</script>

<style>
  body {
    margin: 0;
    padding: 0; 
    background: white;
    height: 100%;
  }
  /* page */
  .page-enter,
  .page-leave-active {
    opacity: 0;
  }
  .page-enter-active,
  .page-leave-active {
    transition: all 0.5s;
  }

  /*  slide-fade */
  .slide-fade-enter-active {
    transition: all .3s ease;
  }
  .slide-fade-enter, .slide-fade-leave-to
  /* .slide-fade-leave-active below version 2.1.8 */ {
    transform: translateX(10px);
    opacity: 0;
  }
  /*
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
  */
  
  /* .ddmk {
    text-align:center;
  } */
  .box {
    background-color: gray;
    text-align: center;
    width: 100%;
    position: fixed; /* or absolute */
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    z-index: 50;
  }

  .main-content{
    padding-top: 25px;
    padding-bottom: 25px;
  }
</style>
