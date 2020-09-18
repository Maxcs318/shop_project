<template>
  <div class="col-12">

    <product-now :product_id = this.$route.params.Product_id></product-now>
    
  </div>
</template>

<script>

import product_Now from "@/components/Product/This_product"

export default {
  name: 'Product',
  data () {
    return {
      text:"Product TEST"
    }
  },
  components: {
    productNow : product_Now
  },
}
</script>

<style scoped>
  
</style>
