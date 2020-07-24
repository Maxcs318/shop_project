import Vue from "vue"
import Vuex from "vuex"
import axios from "axios"

Vue.use(Vuex)
// Web Data
// const base_url = 'https://elite-shoponline.com/gama/public/'

// PC Xampp
const base_url = 'http://shop_project.com/api/'

const store = new Vuex.Store({
    state : {
        // Web Data
        // file_image_path:'https://elite-shoponline.com/gama/public/assets/',
        
        // PC Xampp
        file_image_path:'http://shop_project.com/assets/',

        Base_Url:base_url,

        statusRegister:'',

        the_user:'',
        log_on: localStorage.getItem('The_User') || null,
        
    },
//==========================================================================================================
//==========================================================================================================

    mutations : {

        
        
    },

//==========================================================================================================
//==========================================================================================================

    actions : {
        Product_insert(context,product){
            axios.post(base_url +'products/createproduct',product)
            .then(response =>{
                console.log('Response Data',response.data)
            })
        },
        
    },
//==========================================================================================================
//==========================================================================================================

    getters : {
        // path for filse & image
        getPath_Files(state){
            return state.file_image_path
        },

        // path base url
        getBase_Url(state){
            return state.Base_Url
        },

        // user
        getThe_User(state){
            return state.the_user
        }
      
    }

})

export default store