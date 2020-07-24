<template>
  <div>
    <div class="row">  
      <!-- <div class="col-12">
        <router-link :to=" 'products/page=1'">
          <center> <h2> Product Index </h2> </center>
        </router-link> 
      </div>    -->
      
      <!-- <div class="col-12 index-post" v-for="run in 10" :key="run" >
        <router-link :to=" '/post/id=' + run ">
          <center> <h2>{{ msg }} {{ run }}</h2> </center>
        </router-link>
      </div> -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  data () {
    return {
      msg: 'Index'
    }
  },
  metaInfo() {
    return { 
      title: this.msg,
      meta: [
          { name: 'Test meta tags', content:  'test 1150'},
          
      ]
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .index-post{
    border: 1px dashed 
  }
</style>
