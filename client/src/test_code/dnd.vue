<template>
    <div class="container">
        <div class="row">
            <div class="col-12" style="">
                <!--  -->
            </div>
            <div class="col-6 drag-box">
                <!-- <drag v-for="n in items_drag" :data="n" @dragstart="dragStart" class="item" :key="n">{{n}}</drag> -->
                <drop-list
                    :items="items_drag"
                    class="list"
                    @insert="onInsert2"
                    @reorder="$event.apply(items_drag)"
                >
                    <template v-slot:item="{item}">
                        <drag class="item" :key="item" @dragstart="dragStart" :data="item">{{item}}</drag>
                    </template>
                    <template v-slot:feedback="{data}">
                        <div class="item feedback" :key="data">{{data}}</div>
                    </template>
                </drop-list>
            </div>  
            <div class="col-6 drag-box">
                <!-- <drag v-for="n in items" :data="n" @dragstart="dragStart" class="item" :key="n">{{n}}</drag> -->
                <drop-list 
                    :items="items"
                    class="list"
                    @insert="onInsert"
                    @reorder="$event.apply(items)"
                >
                    <template v-slot:item="{item}">
                        <drag class="item" :key="item" @dragstart="dragStart" :data="item">{{item}}</drag>
                    </template>
                    <template v-slot:feedback="{data}">
                        <div class="item feedback" :key="data">{{data}}</div>
                    </template>
                </drop-list>
            </div>
        </div>
        
        
    </div>
</template>
<script>
import { Drag, DropList } from "vue-easy-dnd";

export default {
    name:'DND',
    data(){
        return {
            items : ['a', 'b', 'c', 'd', 'e'],
            items_drag : [1,2,3,4,5],

        }
    },
    components: {
        Drag,
        DropList
    },
    watch:{
        items:function(){
            if(this.items.length==0){
                this.items.push('empty')
            }else if(this.items.length>1){
                for (var i=0;i<this.items.length;i++){
                    if(this.items[i]=='empty'){
                        this.items.splice(i, 1)
                    }
                }
            }
        },
        items_drag:function(){
            if(this.items_drag.length==0){
                this.items_drag.push('empty')
            }else if(this.items_drag.length>1){
                for (var i=0;i<this.items_drag.length;i++){
                    if(this.items_drag[i]=='empty'){
                        this.items_drag.splice(i, 1)
                    }
                }
            }
        }
    },
    methods: {
        onInsert(event) {
            for (var i=0;i<this.items_drag.length;i++){
                if(event.data == this.items_drag[i]){
                    this.items_drag.splice(i, 1)
                }
            }
            this.items.splice(event.index, 0, event.data);
            console.log(event)
        },
        onInsert2(event) {
            for (var i=0;i<this.items.length;i++){
                if(event.data == this.items[i]){
                    this.items.splice(i, 1)
                }
            }
            this.items_drag.splice(event.index, 0, event.data);
            console.log(event)
        },
        dragStart:e=>{
            // console.log(e.data)
        }
    },
    computed: {
        
    }
}
</script>
<style scoped>
    .drag-box{
        width: 100%;
        height: 100%;
        padding-top: 10px;
        padding-bottom: 10px; 
        border-width: 1px;
        border: 1px solid black ;
        text-align: center; 
        /* border-radius: 15px; */
    } 
    .item {
        width: 100%;
        padding-top: 10px;
        padding-bottom: 10px;   
        align-items: center;
        justify-content: center;
        border-width: 1px;
        border: 1px solid rgb(65, 87, 212) ;
        /* text-align: center; */
        /* border-radius: 15px; */
        
    }
    .feedback {
        background-color: rgb(71, 33, 236);
        color: white;
        /* border: 2px dashed black; */
    }

    .drag-image {
        background-color: rgb(95, 226, 95);
        /* transform: translate(-50%, -50%); */
    }
</style>
