<template>
  <div class="col-12 products-show">

    <productsAll :Category_now = this.$route.params.Category_id :Page_now = this.$route.params.Page_num ></productsAll>

  </div>
</template>

<script>

import products_show from "@/components/Product/All_products_in_page"

export default {
  name: 'products',
//   props:["product_id"],
  metaInfo() {
    return { 
      title: "Products Page "+this.$route.params.Page_num,
      meta: [
          { name: 'description', content:  'this page have products'},
          { property: 'og:title', content: "test test"},
          { property: 'og:site_name', content: 'shop'},
          {property: 'og:type', content: 'website'},    
          {name: 'robots', content: 'index,follow'} 
      ]
    }
  },
  data () {
    return {
      text:"product "
    }
  },
  components: {
    productsAll : products_show
  },
}
</script>

<style scoped>
  
</style>
