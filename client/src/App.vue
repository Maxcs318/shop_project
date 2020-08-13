<template>
  <div class="ddmk" id="app">
    
    <!-- Nav start -->
      <nav-bar></nav-bar>
      <br>
    <!-- Nav end -->
    <div class="container">
      <div class="row">
        <div class="col-12">
          <transition :name="transitionName" >
            <router-view></router-view>
            <!-- <router-view :key="$route.fullPath" ></router-view> -->
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import nav_Bar from "@/components/Nav/Navbar"

export default {
  name: 'App',
  data(){
    return{
      transitionName:"slide-fade"
    }
  },
  components: {
    navBar : nav_Bar  
  },
  
}
</script>

<style>
  body {
    margin: 0;
    padding: 0; 
    background: white;
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
</style>
