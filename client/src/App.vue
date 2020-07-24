<template>
  <div class="container" id="app">
    
    <!-- test rounter start -->
      <div class="row ddmk">
        <div class="col-6">
          <router-link to="/">Go to Index</router-link>
        </div>
        <div class="col-6">
          <router-link to="/products/page=1">Go to Products</router-link>
        </div>
      </div>

      <br>

    <!-- test rounter end -->
      <div class="row">
        <div class="col-12">
          <transition :name="transitionName" >
            <router-view></router-view>
            <!-- <router-view :key="$route.fullPath" ></router-view> -->
          </transition>
        </div>
      </div>
    
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return{
      transitionName:"slide-fade"
    }
  }
  
}
</script>

<style>
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
  #app {
    margin-top:20px;
  }
  .ddmk {
    text-align:center;
  }
</style>
