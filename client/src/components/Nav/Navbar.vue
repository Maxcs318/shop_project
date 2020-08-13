<template>
    <div class="shop-nav">
        <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarTogglerDemo01">

                <router-link class="navbar-brand" to="/">Shop</router-link>

                <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                <li class="nav-item active">
                    <router-link class="nav-link" to="/">Home</router-link>
                </li>
                <li class="nav-item active">
                    <router-link class="nav-link" to="/products/page=1">Products</router-link>
                </li>
                <li class="nav-item active">
                    <router-link class="nav-link" to="/test_css_animations">CSS-animations</router-link>
                </li>
                <li class="nav-item active">
                    <router-link class="nav-link" to="/test_vue_animations">Vue-animations</router-link>
                </li>
                </ul>
                <form class="form-inline my-2 my-lg-0">
                    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
                    <button class="btn btn-outline-light my-2 my-sm-0" type="submit">Search</button>
                </form>
            </div>
        </nav>
        
    </div>
</template>
       
<script>
export default {
  name: 'Navbar',
  data () {
    return {
      text:"navbar"
    }
  }
  
}
</script>

<style scoped>
  a {  
      text-decoration: none;
      color: white;
    }
</style>