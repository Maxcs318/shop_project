<template>
  <div class="col-12 product-show" v-if="data_product!=''">
    <div class="row">
      <div class="col-12 col-md-6">
      
        <!--  image show-slide start -->
        <carousel-3d class="this-product-image">
          <slide v-for="(slide, i) in data_product.product_another_image" :index="i" :key="i" style="border-style: none;">
            <template slot-scope="{ index, isCurrent, leftIndex, rightIndex }">
              <img :data-index="index" :class="{ current: isCurrent, onLeft: (leftIndex >= 0), onRight: (rightIndex >= 0) }" :src="getImgUrl(slide.pi_image)">
            </template>
          </slide>
        </carousel-3d>
        <!-- image show-slide end -->
        
        <!-- another image start-->
        <!-- <div class="row">
          <div class="col-4 col-md-4 another-image-products" v-for=" image_product in data_product.product_another_image " :key="image_product.length">
            <img :src="getImgUrl(image_product.pi_image)" width="100%"> 
          </div>
        </div> -->
        <!-- another image end -->

      </div>
      <div class="col-12 col-md-6">
        
        <!-- <p style="text-align: center;">{{data_product.p_image}}</p> -->
        
        <h3 style="text-align: center;">{{data_product.p_name}}</h3>

        <p style="text-indent: 50px; padding-top:15px">Detail {{data_product.p_description}}</p>
        
        <p style="text-align: right;"> ราคา {{data_product.p_price}} บาท</p>
        
        <p style="text-align: right;">จำนวนที่เหลือ {{data_product.p_amount}} ชิ้น</p>

      </div>
     
    </div>    
    
    

  </div>
</template>

<script>

import axios from "axios"

import { Carousel3d, Slide } from 'vue-carousel-3d';

export default {
  name: 'This_product',
  props:["product_id"],
  data () {
    return {
      text:"This_product",
      data_product:'',

    }
  },
  components: {
    Carousel3d,
    Slide
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
    getData(){
        axios.get('http://shop_project.com/api/products/product/'+this.product_id)
        .then(response => {
            console.log(response.data)
            this.data_product = response.data
              if(this.data_product.product_another_image){
                this.data_product.product_another_image.unshift( {pi_image:this.data_product.p_image} );
              }
            // if id not found
              if(this.data_product == null){
                console.log('this page error')
                this.$router.push('/');
              }
        })
    },
    getImgUrl(pic) {
      if(pic != undefined){
        return this.$store.getters.getPath_Files+'products/'+pic
      }
    },
  },
  watch:{
    $route() {
      this.getData()
    },
  },
  async created(){
    await this.getData()
      
  }
}
</script>

<style scoped>
  .another-image-products{
    padding-top: 15px;
    padding-bottom: 15px;
  }
  .this-product-image{
    transform: scale(1.2);
  }
</style>
