<template>
    <div class="col-12">
        <input class="form-control" type="text" v-model="keywords">
        {{keywords}}
        <br>
        <div class="row">
            <div class="col-12 col-md-6" v-for=" (products,index) in data_search " :key="index" v-if="keywords.length>0">
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
        </div>
    </div>
</template>
<script>

import axios from "axios"

export default {
    data(){
        return {
            keywords:'',
            data_search:''
        }
    },
    methods:{
        getImgUrl(pic) {
            return this.Path_files+'products/'+pic
        },
        
    },
    watch:{
        keywords(){
            if(this.keywords.length>0 && this.keywords!=''){
                axios.get(this.Base_Url+'products/searchproducts/'+this.keywords)
                .then(response => {
                    console.log(response)
                    this.data_search = response.data
                })
            }else if(this.keywords == ''){
                this.data_search = ''
            }
        }
    },
    computed:{
        Base_Url(){
            return this.$store.getters.getBase_Url
        },
        Path_files(){
            return this.$store.getters.getPath_Files
        },
    }
}
</script>
<style scoped>
    a {  text-decoration: none;}
</style>
