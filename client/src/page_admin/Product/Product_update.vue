<template>
  <div class="col-12 product-show" v-if="Product && data_product!=null && data_product!=''">
    <br>
    
    <div class="row">
      <div class="col-12 col-md-3"></div>
      <div class="col-12 col-md-6">
        <img :src="getImgUrl(data_product.p_image)" width="100%"> 
      </div>
      <div class="col-12 col-md-3"></div>
    </div>    
    <div class="row">
        <div class="col-md-3 col-12"></div>
        <div class="col-md-6 col-12">

            <h3 style="text-align: center;">{{data_product.p_name}}</h3>

            <p style="text-indent: 50px;">Detail {{data_product.p_description}}</p>
            
            <p style="text-align: right;"> ราคา {{data_product.p_price}} บาท</p>
            
            <p style="text-align: right;">จำนวนที่เหลือ {{data_product.p_quantity}} ชิ้น</p>

        </div>
        <div class="col-md-3 col-12"></div>
    </div>

    <center> <h4> Another Image </h4> </center>

    <div class="row">
        <div class="col-4 col-md-2" v-for=" image_product in data_product.product_another_image " :key="image_product.length">
            <br>
            <img :src="getImgUrl(image_product.pi_image)" width="100%"> 
        </div>
    </div>
    
    <br>    

  </div>
</template>

<script>

import axios from "axios"

export default {
  name: 'This_product_update',
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
        axios.get('http://shop_project.com/api/products/product/'+this.$route.params.Product_id)
        .then(response => {
            console.log(response.data)
            this.data_product = response.data
            // if id not found
              if(this.data_product == null){
                console.log('this page error')
                this.$router.push('/');
              }
        })
      
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
