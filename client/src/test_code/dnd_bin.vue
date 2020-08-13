<template>
    <div class="container">
        <div class="row">
            <div class="col-12" style="">
                <!--  -->
            </div>
              
            <div class="col-6 drag-box">
                <!-- <drag v-for="n in items" :data="n" @dragstart="dragStart" class="item" :key="n">{{n}}</drag> -->
                <drop-list 
                    :items="items"
                    class="list"
                    @reorder="$event.apply(items)"
                >
                    <template v-slot:item="{item}">
                        <drag class="item" :key="item.id" @dragstart="dragStart" @dragend="dragStop" :data="item">{{item.name}}</drag>
                    </template>
                    <template v-slot:feedback="{data}">
                        <div class="item feedback" :key="data.id">{{data.name}}</div>
                    </template>
                </drop-list>
            </div>

            <div class="col-6 drag-box">
                <drop-list 
                    :items="items"
                    class="list drag-box-bin"
                    @insert="onDelete"
                    @reorder="$event.apply(items)"
                >
                    <template v-slot:feedback="{data}">
                        <div class="item feedback" :key="data.id">Delete => {{data.name}}</div>
                    </template>
                    <h2 v-if="textshow==true" class="text-bin">{{statusDelete}}</h2>
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
            items : [
                {id:'a',name:'max'},
                {id:'b',name:'xam'},
                
                ],
            statusDelete:'Drop on this box to Delete',
            textshow:true

        }
    },
    components: {
        Drag,
        DropList
    },
    watch:{
        items:function(){
            if(this.items.length==0){
                this.items.push({id:'empty',name:'empty'})
            }else if(this.items.length>1){
                for (var i=0;i<this.items.length;i++){
                    if(this.items[i].id=='empty'){
                        this.items.splice(i, 1)
                    }
                }
            }
        },
        
    },
    methods: {
        onDelete(event) {
            for (var i=0;i<this.items.length;i++){
                if(event.data.id == this.items[i].id){
                    this.items.splice(i, 1)
                }
            }
            // this.statusDelete = 'Deleted'
            setTimeout(() => {
                this.statusDelete = '.'
            }, 200);
            setTimeout(() => {
                this.statusDelete = '..'
            }, 400);
            setTimeout(() => {
                this.statusDelete = '...'
            }, 600);
            setTimeout(() => {
                this.statusDelete = 'Deleted'
            }, 800);
            setTimeout(() => {
                this.statusDelete = 'Drop on this box to Delete'
            }, 1600);
            // console.log(event)
        },
        // dragStart:e=>{
        //     // console.log(e.data)
        // }
        dragStart(){
            this.textshow = false
        },
        dragStop(){
            this.textshow = true
        }
    },
    computed: {
        
    }
}
</script>
<style scoped>
    .drag-box .drag-box-bin {
        width: 100%;
        height: 100%;
    } 
    .drag-box {
        padding-top: 10px;
        padding-bottom: 10px; 
        border-width: 1px;
        border: 1px solid black ;
        text-align: center;
    }
    .drag-box-bin {
        text-align: center;
        background-color: red;
    }
    .text-bin {
        color: white;
        
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
        background-color: rgb(248, 135, 135);
        color: white;
        /* border: 2px dashed black; */
    }

</style>
