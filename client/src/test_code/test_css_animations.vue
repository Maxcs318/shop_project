<template>
    <div class="css-animations">
      <!-- {{sw}} <br> -->
      <p style="text-align:center">
        <button type="button" v-bind:class="classObject" @click="show_and_hide"> 
          {{button_text}} 
        </button>
        <!-- <button type="button" v-bind:class="classObject" @click="stopGIF"> 
          Stop 
        </button> -->
        <button type="button" class="btn btn-success" @click="addAnimals(null)"> 
          Add Animals 
        </button>
      </p>
      <div class="row animalsAll">
        <p class="col-12"> Animals all </p>
        <div class="col-3 col-md-1" v-for="(animalsAll,index1) in imageGIF" :key="index1">
          <img class="selectAnimals" :src="imageGIF[index1]" width="100%" border="0" alt="" @click="addAnimals(index1)" />
        </div>
      </div>
      <div style="height:20px;">
        <!--  -->
      </div>

      <div class="css-keyframes" v-if="show==true && count.length>0">
        <div class="animations setwidth" v-for="(animalsCount,index) in count" :key="index">
          <img :src="count[index]" width="100%" border="0" alt="" @click="deleteAnimals(index)" />
        </div>
      </div>

      <!-- <div class="row" v-if="show==true && count.length>0">
        <div class="col-md-6 col-12">
          <center> Animals A</center>
          <div class="css-keyframes">
            <div class="animations setwidth" v-for="(animalsCount,index) in count" :key="index">
              <img :src="count[index]" width="100%" border="0" alt="" @click="deleteAnimals(index)" />
            </div>
          </div>
        </div>
        <div class="col-md-6 col-12">
          <center> Animals B </center>
          <div class="css-keyframes">
            <div class="animations setwidth" v-for="(animalsCount,index) in count" :key="index">
              <img :src="count[index]" width="100%" border="0" alt="" @click="deleteAnimals(index)" />
            </div>
          </div>
        </div>
      </div> -->
      
      
      <!-- <div class="css-keyframes" v-if="show==true">
        <div class="animations setwidth">
          <img :src="getImgUrl()" width="100%" border="0" alt="" />
        </div>
      </div> -->
        
    </div>
</template>
      
<script>
export default {
  name: 'css_animations',
  data () {
    return {
      sw:screen.width,
      text:"CSS Animations",
      show:true,
      show_text:['Show','Hide'],
      button_text:null,

      imageGIF:[
        "https://www.animatedimages.org/data/media/209/animated-cat-image-0072.gif",
        "https://www.animatedimages.org/data/media/202/animated-dog-image-0077.gif",
        "https://www.animatedimages.org/data/media/230/animated-bird-image-0069.gif"
      ],

      count:[]

    }
  },
  metaInfo() {
    return { 
      title: this.text,
      meta: [
          { name: this.text, content:  this.text},
      ]
    }
  },
  methods:{
    getImgUrl(number) {
      if(number==null){
        var ran = 0
        var max = this.imageGIF.length
        var min = 0
        ran = Math.floor(Math.random() * max) + min
      }else{
        ran = number
      }
      return this.imageGIF[ran]
    },
    show_and_hide(){
      if(this.show==false){
        this.show=true
      }else{
        this.show=false
      }
    },
    stopGIF(){
      
    },
    addAnimals(number){
      // this.count = this.count+1
      this.count.push(this.getImgUrl(number))
    },
    deleteAnimals(index){
      // this.count = this.count-1
      this.count.splice(index,1)
    }
  },
  computed: {
    classObject(){
      if(this.show==false){
        this.button_text = this.show_text[0]
        return 'btn btn-primary'
      }else{
        this.button_text = this.show_text[1]
        return 'btn btn-danger'
      }      
    },
    
  }
}
</script>

<style scoped>
  .css-animations {
    width: 100%;
    height: 100%;
  }

  .setwidth {
    width: 10%;
    height: 10%;
  }

  .animations {    
    /* background-color: red; */
    position: relative;
    animation-name: example;
    animation-duration: 5s;
    animation-delay: 0s;
    animation-iteration-count: infinite;
    /* animation-direction: alternate; */
  }
  .animations:hover {
    cursor: grabbing;
    animation-play-state: paused;
    /* filter: opacity(50%); */
    filter:blur(1px);
  }
  @keyframes example {
    /* from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(-180deg);
    } */

      0%   { left:0%; top:0; transform: scaleX(1);}
     49.99%   { left:90%; top:0; transform: scaleX(1);}
     50%   { left:90%; top:0; transform: scaleX(-1);}
    100%   { left:0%; top:0; transform: scaleX(-1);}
    
     
      /* 0%   { left:0%;  top: 0px;}
     25%   { left:0%;  top: 300px;}
     50%   { left:45%;  top: 0px;}
     75%   { left:90%;  top: 300px;}
    100%   { left:90%;  top: 0px;} */

     /* 0%   { left:0%; top:auto;}
     5%   { left:4.5%; top:auto;}
    10%   { left:9%; top:auto;}
    15%   { left:13.5%; top:auto;}
    20%   { left:18%; top:auto;}
    25%   { left:22.5%; top:auto;}
    30%   { left:27%; top:auto;}
    35%   { left:31.5%; top:auto;}
    40%   { left:36%; top:auto;}
    45%   { left:40.5%; top:auto;}
    50%   { left:45%; top:auto;}
    55%   { left:49.5%; top:auto;}
    60%   { left:54%; top:auto;}
    65%   { left:58.5%; top:auto;}
    70%   { left:63%; top:auto;}
    75%   { left:67.5%; top:auto;}
    80%   { left:72%; top:auto;}
    85%   { left:76.5%; top:auto;}
    90%   { left:81%; top:auto;}
    95%   { left:85.5%; top:auto;}
    100%  { left:90%; top:auto;} */
  }

  .css-keyframes {
    /* width: 100%; */
    /* height: 500px; */
    /* border-style: solid; */
    /* border-width: 1px; */
  }

  .animalsAll {
    padding: 10px; 
    border-style: solid;
    border-width: 1px;
  }

  .selectAnimals {
    cursor: pointer;

  }

</style>