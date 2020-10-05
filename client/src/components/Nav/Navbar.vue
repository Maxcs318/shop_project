<template>
    <div class="shop-nav">
        <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
            <button @click="changNav_text()" ref="navbutton" class="navbar-toggler ml-auto nav-tog" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                <span class=""> {{nav_tog_text}} </span> 
                <!-- navbar-toggler-icon -->
            </button>
            <div class="collapse navbar-collapse" id="navbarTogglerDemo01">

                <ul class="navbar-nav mt-2 mt-lg-0 align-items-center">

                    <li class="nav-item active">
                        <router-link class="nav-link align-self-center" to="/">
                         <h4> Shop </h4>
                        </router-link>
                    </li>
                    <li class="nav-item active">
                        <router-link class="nav-link" to="/">Home</router-link>
                    </li>
                    <li class="nav-item active">
                        <router-link class="nav-link" to="/products/category=all/page=1">Products</router-link>
                    </li>

                </ul>

            </div>
        </nav>
        
    </div>
</template>
       
<script>
export default {
  name: 'Navbar',
  data () {
    // console.log(this.$route.path)
    return {
      text:"navbar",
      nav_tog_text:'A'
    }
  },
  watch:{
    $route() {
        if (this.nav_tog_text == 'X'){
            this.changNav()
        }
    },
  },
  methods:{
    async changNav_text(){
        let el = document.getElementById('navbarTogglerDemo01');
        if (el.className == 'navbar-collapse collapse show'){
            // console.log('show')
            await setTimeout(() => {
                this.nav_tog_text = 'A'
            }, 500);
        } else {
            // console.log('none')
            await setTimeout(() => {
                this.nav_tog_text = 'X'
            }, 500);
        }
    },
    async changNav(){
        await this.$refs.navbutton.click()
    }
  }
  
}
</script>

<style scoped>
    a {  
      text-decoration: none;
      color: white;
      transition: transform .2s;
    }

    a:hover {
        transform: scale(1.3);
    }
    .nav-tog {
        color: white;
        transform: rotate(360deg);
        transition: transform 0.5s;
    }

    .nav-tog:active{
        transform: rotate(0deg);
        transition:  0s;
    }

</style>