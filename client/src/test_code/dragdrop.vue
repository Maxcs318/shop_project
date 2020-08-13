<template>
  <div>
    <div class="row">  
      <div class="col-12">
        <!-- <center> Drag </center> -->
      </div>
      <div class="col-6">
        <p style="text-align:center">Box A</p>
        <board id="Board-1" class="container drag-box">

            <!-- <card id="card-1" draggable="true"> AAA </card>
            <card id="card-2" draggable="true"> BBB </card> -->
            <card v-for="(num,index) in 10" :key="index" :id="index" draggable="true"> 
                {{index}}{{index}}{{index}} 
            </card>

            
        </board>
      </div>
      <div class="col-6">
        <p style="text-align:center">Box B</p>
        <board id="Board-2" class="container drag-box">
            <card id="card-4" draggable="true"> DDD </card>
        </board>
      </div>
    </div>
  </div>
</template>

<script>

import Board from './board_card/board';

import Card from './board_card/card';

export default {
  name: 'dragdrop',
  data () {
    return {
      msg: 'Drag and Drop'
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
  components:{
      Board:Board,
      Card:Card
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .drag-box{
    width: 100%;
    height: 500px;
    border-width: 1px;
    border: 1px dashed ;
  }
  .card {
    margin-top:10px;
    margin-bottom:10px;
  }
</style>
