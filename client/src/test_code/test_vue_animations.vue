<template>
    <div class="css-animations">
      <!--  -->
      <div>
        <div class="animations setwidth">
            <img src="../assets/logo.png" alt="" width="100%">
        </div>
      </div>
      <br><br>
      <div class="ani-load" v-if="Powerload!=null" 
        @mouseover="hovered = true" @mouseleave="hovered = false"
        v-bind:style="{ width: loading + '%' ,display: displayNow}"
      >
        <p class="pwl">{{loading}} %</p>
      </div>
      <div>
        Hover : {{hovered}}
      </div>
      <!--  -->
      <br><br>
      <!--  -->
      <div class="css-by-vue">
        <div class="animationsVue setwidth" 
          @mouseover="hovered = true" @mouseleave="hovered = false"
          v-bind:style="Style_animationsVue,
          { transform: 'rotate('+(loading*3.6)+'deg)', left: (loading*.9) + '%' }"
        >
          <img src="../assets/logo.png" alt="" width="100%">
        </div>
      </div>
      
      
        
        
        
    </div>
</template>
      
<script>
export default {
  name: 'css_animations',
  data () {
    return {
      sw:screen.width,
      text:"Vue Animations",
      loading:0,
      loadingRE:false,
      startload:false,
      timeout:50,
      displayNow:'block',
      hovered:true,
      Style_animationsVue:{
        position: 'relative',
        // width:100+'%',
      }
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
  watch:{
    loading(){
        this.loadingGo()
    },
    hovered(){
      
    }
  },
  methods:{
    loadingGo(){
      if(this.loading==100 || this.loading==0){
        // this.displayNow = 'none'
        this.timeout = 500
      }else{
        // this.displayNow = 'block'
        this.timeout = 50
      }

      if(this.loadingRE==false){
        setTimeout(() => {
          if(this.loading<100){
            this.loading = this.loading+1 
          }
          if(this.loading >= 100){
            this.loadingRE = true
          }
        }, this.timeout)
      }else if(this.loadingRE==true){
        setTimeout(() => {
          if(this.loading!=0){
            this.loading = this.loading-1 
          }
          if(this.loading == 0){
            this.loadingRE = false
          }
        }, this.timeout)
      }
    }
  },
  computed:{
    Powerload(){
      if(this.startload==false){
        this.loading=this.loading+1
        this.startload=true
      }
      return this.loading
    }
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
    animation-delay: 1s;
    animation-iteration-count: infinite;
    animation-direction: alternate;
  }
  .animations:hover {
    -webkit-animation-play-state: paused;
  }
  @keyframes example {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
      0%   { left:0%; top:auto;}
    100%   { left:90%; top:auto;}

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

  .ani-load {
    height: 20px;
    background-color: rgb(63, 89, 241);
    top:auto;
  }

  .pwl {
    text-align: left;
    color: #FFF;
  }

  .animationsVue {
    position: relative;
    
  }

  .css-keyframes {
    border: 2px solid gray;
  }
  
  .css-by-vue {
    border: 2px solid lightskyblue;
  }

</style>