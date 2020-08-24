<template>
  <div class="col-12 product-show" v-if="Product && data_product!=null && data_product!=''">

    <br>
    <h3 style="text-align: center;">{{data_product.p_name}}</h3>
    <div class="row">
      <div class="col-12 col-md-3"></div>
      <div class="col-12 col-md-6">
        <!-- start -->
        <div id="carouselExampleFade" class="carousel slide carousel-fade" data-ride="carousel" v-if="data_product!=''">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img :src="getImgUrl(data_product.p_image)" width="100%"> 
            </div>
            <div class="carousel-item" v-for="(image_product,index) in data_product.product_another_image" :key="index">
              <img :src="getImgUrl(image_product.pi_image)" width="100%">
            </div>
            
          </div>
          <a class="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev" v-if="data_product.product_another_image.length>0">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a class="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next" v-if="data_product.product_another_image.length>0">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
        <!-- end -->
      </div>
      <div class="col-12 col-md-3"></div>
      <div class="col-12 col-md-12">
        <br>
        <div class="row">
          <div class="col-2 col-md-2">
            <br>
            <img :src="getImgUrl(data_product.p_image)" width="100%"> 
          </div>
          <div class="col-2 col-md-2" v-for=" image_product in data_product.product_another_image " :key="image_product.length">
            <br>
            <img :src="getImgUrl(image_product.pi_image)" width="100%"> 
          </div>
        </div>
      </div>
    </div>    

    <!-- <p style="text-align: center;">{{data_product.p_image}}</p> -->
    
    <p style="text-indent: 50px;">Detail {{data_product.p_description}}</p>
    
    <p style="text-align: right;"> ราคา {{data_product.p_price}} บาท</p>
    
    <p style="text-align: right;">จำนวนที่เหลือ {{data_product.p_quantity}} ชิ้น</p>

    <!-- <div v-for=" image_product in data_product.product_another_image ">
      <img :src="getImgUrl(image_product.pi_image)" width="100%">
      <p> {{image_product.pi_image}} </p>
    </div> -->

  </div>
</template>

<script>

import axios from "axios"

export default {
  name: 'This_product',
  props:["product_id"],
  data () {
    return {
      text:"This_product",
      data_product:'',

    }
  },
  metaInfo() {
    if(this.data_product!=null){
      return { 
        title: this.data_product.p_name,
        meta: [
            { name: this.data_product.p_name, content: this.data_product.p_name},
            
        ]
      }
    }else{
      return { 
        title: 'This Page Not Found',
      }
    }
    
  },
  methods:{
    getImgUrl(pic) {
      return this.Path_files+'products/'+pic
    },
    
  },
  computed:{
    Product(){
      var time_fetch = 0
      if(this.data_product != ''){
        time_fetch = 1000
      }

      setTimeout(() => {
        axios.get('http://shop_project.com/api/products/product/'+this.product_id)
        .then(response => {
            console.log(response.data)
            this.data_product = response.data
            // if id not found
              if(this.data_product == null){
                console.log('this page error')
                this.$router.push('/');
              }
        })
      }, time_fetch)
        
      
      return true
    },
    Path_files(){
      return this.$store.getters.getPath_Files
    },

  }
}
</script>

<style scoped>
  
</style>
