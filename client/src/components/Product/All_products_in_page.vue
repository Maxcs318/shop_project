<template>
  <div class="row">
    <!-- {{Category_now}} -->
    <div class="col-12 col-md-4" v-for=" (products,index) in data_products " :key="index">
      <router-link :to=" '/product/id='+products.p_id">
        <div class="row product-show-now">
          <div class="col-md-4 col-12">
            <img :src="getImgUrl(products.p_image)" width="100%"> 
          </div>
          <div class="col-md-8 col-12">
            ID : {{products.p_id}} <br>
            Product Name : {{products.p_name}} <br>
            Description : {{products.p_description}} <br>
            Price : {{products.p_price}} <br>
            quantity : {{products.p_amount}} <br>
          </div>
        </div>
      </router-link> 
      <br>
    </div>
    
    <div class="col-12"> <br> </div>

    <div class="col-12" style="text-align: center;" v-if="length_page > 1">
      <div class="row">
        <div class="col-12">
          <center>
              <div class="btn-group" role="group" aria-label="Second group" >
                
                <router-link :to=" '/products/category='+Category_now+'/page='+1">
                  <button type="button" class="btn btn-light" title="First page"> {{startpoint}} </button>
                </router-link>

                <!-- <div v-if=" run_page >= page_start && run_page <= page_end "> -->
                    <div v-for=" (run_page,index) in length_page " :key="index">
                    <router-link :to=" '/products/category='+Category_now+'/page='+run_page">
                        <button type="button" v-bind:class="{ active: isActive[index+1] }" class="btn btn-light"> {{run_page}} </button>
                    </router-link>
                    </div>
                <!-- </div> -->
                
                <router-link :to=" '/products/category='+Category_now+'/page='+length_page">
                  <button type="button" class="btn btn-light" title="Last page" > {{endpoint}} </button>
                </router-link>

              </div>
          </center>
        </div>
      </div>
    </div>

    <div class="col-12"> <br> </div>

  </div>
</template>

<script>

import axios from "axios"

export default {
  name: 'All_products',
  props:["Page_now","Category_now"],
  data () {
    return {
      text:"All_products_in_page",
      data_size:'',
      data_products:null,
      startpoint:'<<',
      endpoint:'>>',

      page: 0,
      data_in_page: 9,
      length_page: 0,
      page_start: 0,
      page_end: 0,
      isActive: [],

    }
  },
  methods:{
    getImgUrl(pic) {
      return this.$store.getters.getPath_Files+'products/'+pic
    },
    getData(){
      axios.get('http://shop_project.com/api/products/productsall/'+this.Page_now)
      .then(response => {
          console.log(response)
          this.data_size = response.data[0],
          this.data_products = response.data[1]
      })
    }
  },
  watch:{
    $route() {
      this.getData()
    },
    data_products(){
        var setpage = this.Page_now;
        var p_conpute = 2;
        var p_start = setpage;
        var p_end = Math.ceil(setpage / 1 + p_conpute);
        this.page = setpage - 1;
        this.length_page = Math.ceil(this.data_size / this.data_in_page); // set page all
        // set start && end paging
        if (setpage > p_conpute) {
          p_start = setpage - p_conpute;
        } else {
          p_start = -(setpage - p_conpute) - p_conpute;
          p_end = p_end + p_start + p_conpute + 1;
        }
        if (p_end >= this.length_page) {
          p_start = p_start + (this.length_page - setpage - p_conpute);
        }
        this.page_start = p_start;
        this.page_end = p_end;
        this.isActive = [];
        for (var i = 0; i <= this.length_page; i++) {
          if (i == setpage) {
            this.isActive.push(true);
          } else {
            this.isActive.push(false);
          }
        }
    }
  },
  created() {
    this.getData()
  },
}
</script>

<style scoped>
  .product-show-now{
    border: 0px dashed 
  }
  a {  text-decoration: none;}
</style>
