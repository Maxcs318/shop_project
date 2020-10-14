<template>
  <div class="col-12 product-show" v-if="data_product!=''">

    <div class="row">
      <div class="col-lg-3 col-xs-12"></div>
      <div class="col-lg-6 col-xs-12">
        <form @submit.prevent="submitProduct_update">
          <center>
            <img v-if="!url" :src="getImgUrl(data_product.p_image)" width="100%" />
            <img v-if="url" :src="url" width="100%" />
          </center>
          <br>
          <center>
            <button
              type="button"
              class="form-control btn-success col-lg-6"
              @click="ChooseFilesFirst"
            > เปลี่ยน รูปภาพ Preview </button>
          </center>
          <input
            id="chooseImage"
            ref="filesfirst"
            style="display: none;"
            type="file"
            @change="handleFilesFirst"
          />
          <br>
          ชื่อสินค้า
          <input
            type="text"
            v-model="data_product.p_name"
            class="form-control"
            placeholder="ชื่อสินค้า"
            required
          />
                    <!-- <br>
                    ประเภทสินค้า
                    <select v-model="product.p_category" class="form-control select" required>
                        <option class="option" selected disabled value>ประเภทสินค้า</option>
                        <option
                        class="option"
                        v-for="(pc,index) in product_category"
                        :key="index"
                        :value="pc.pc_id"
                        >{{ pc.pc_title }}</option>
                    </select> -->
          <br>
          รายละเอียด
          <textarea
            v-model="data_product.p_description"
            class="form-control textarea"
            placeholder="รายละเอียด"
            rows="6"
          ></textarea>
          <br>
          <div class="row">
            <div class="col-lg-6">
              ราคา
              <input
                type="text"
                v-model="data_product.p_price"
                class="form-control"
                placeholder="ราคา"
                @keypress="isNumber($event)"
                required
              />
            </div>
          </div>
          <br>
          <div class="row">
            <div class="col-lg-6">
              จำนวน
              <input
                type="text"
                v-model="data_product.p_amount"
                class="form-control"
                placeholder="จำนวนสินค้า"
                @keypress="isNumber($event)"
                required
              />
            </div>
          </div>
          <br>
          <div class="row">
            <div class="col-12">
              รูปภาพอื่นๆ ของสินค้า
            </div>
            <div class="col-lg-3 col-6" v-for="(image_product,index0) in data_product.product_another_image" :key="index0">
              <br> 
              <img v-if="image_product.pi_product_id != 'delete'" :src="getImgUrl(image_product.pi_image)" width="100%">
              <img v-else class="image-will-delete" :src="getImgUrl(image_product.pi_image)" width="100%">

              <button v-if="image_product.pi_product_id != 'delete' " type="button" class="form-control btn-danger" @click="RemoveOldImage(image_product.pi_id)" >Remove</button>
              <button v-else type="button" class="form-control btn-primary" @click="UnRemoveOldImage(image_product.pi_id)" >UnRemove</button>
            </div>
          </div>
          <br>
          <h5>เพิ่มรูปภาพอื่นๆของ สินค้า [ {{files.length}} ] Size Files All [ {{max_size_file}} byte ]</h5>
            <input
              type="file"
              ref="files"
              style="display: none;"
              id="anotherImage"
              @change="handleFileUpload"
              multiple
            />
            <br>
            <div class="row">
              <div
              class="col-6"
              v-for="(f,index) in files"
              :key="index"
              style="diaplay:block; margin-left:auto; margin-right:auto;"
              >
                <img class=" " :src="another_image_pre[index]" width="100%"/>
                <h5></h5>
                <b>{{index+1}}.</b>
                {{files[index].name }}
                <!-- <b> Size </b>{{files[index].size}} byte -->
                <button
                  type="button"
                  class="form-control btn-danger"
                  @click="RemoveRow(index)"
                >ลบ</button>
                <br>
              </div>
            </div>
            <br>
            <div class="row">
              <div class="col-lg-6">
                <button
                  type="button"
                  class="form-control btn-primary col-lg-12"
                  @click="ChooseFiles"
                >เลือกไฟล์</button>
                <br>
              </div>
              <div class="col-lg-6">
                <button type="submit" class="form-control btn-success col-12">ดำเนินการต่อ</button>
              </div>
            </div>
        </form>
      </div>
      <div class="col-lg-3 col-xs-12"></div>
    </div>

  </div>
</template>

<script>

import axios from "axios"

export default {
  name: 'product_update',
  data () {
    return {
      text:"product_update",
      product_id:this.$route.params.Product_id,
      data_product:'',
      url: null,
      another_image_pre: [],
      fileimage: "",
      files: [],
      max_size_file: 0,

      data_product_category:'',
      data_load_category:false,

      OldImageDelete:[]

    }
  },
  metaInfo() {
    if(this.data_product!=null){
      return { 
        title: this.data_product.p_name,
        meta: [
            { name: this.data_product.p_name, content: this.data_product.p_name},
            
        ]
      }
    }else{
      return { 
        title: 'This Page Not Found',
      }
    }
    
  },
  methods:{
    getData(){
      axios.get('http://shop_project.com/api/products/product/'+this.$route.params.Product_id)
      .then(response => {
          console.log(response.data)
          this.data_product = response.data
          // if id not found
            if(this.data_product == null){
              console.log('this page error')
              this.$router.push('/');
            }
      })
    },
    getImgUrl(pic) {
      if(pic != undefined){
        return this.$store.getters.getPath_Files+'products/'+pic
      }
    },

    // For Edit  

    // first image
    ChooseFilesFirst() {
      document.getElementById("chooseImage").click();
    },
    handleFilesFirst(e) {
      // console.log(e.target.files[0])
      const file = e.target.files[0];
      this.url = URL.createObjectURL(file);
      let uploadedFiles = this.$refs.filesfirst.files[0];
      this.fileimage = uploadedFiles;
      if (this.fileimage.size > 10000000) {
          this.fileimage = [];
          this.url = null;
          this.$swal("Your file is larger than 10 MB. Sorry Choose Again !!!");
      }
    },
    // another image
    ChooseFiles() {
      document.getElementById("anotherImage").click();
    },
    handleFileUpload() {
      this.files = [];
      this.another_image_pre = [];

      let uploadedFiles = this.$refs.files.files;
            
      var i ;
      for (i = 0; i < uploadedFiles.length; i++) {
        this.files.push(uploadedFiles[i]);
        this.max_size_file = this.max_size_file + uploadedFiles[i].size;
        this.another_image_pre.push(URL.createObjectURL(uploadedFiles[i]));
        // console.log(uploadedFiles[i])
      }
      if (this.max_size_file > 10000000) {
        this.files = [];
        this.another_image_pre = [];
        this.max_size_file = 0;
        // alert
        this.$swal("Your file is larger than 10 MB. Sorry Choose Again !!!");
      }
    },
    RemoveRow: function(index) {
      this.max_size_file = this.max_size_file - this.files[index].size;
      this.files.splice(index, 1);
      this.another_image_pre.splice(index, 1);
    },
    RemoveOldImage:function(image_id) {
      this.OldImageDelete.push({pi_id:image_id})
      console.log(this.OldImageDelete)
      // this.data_product.product_another_image
      let index = this.data_product.product_another_image.findIndex(pi => pi.pi_id == image_id)
      if(index > -1){
        // this.data_product.product_another_image[index].push({willDelete:true})
        this.data_product.product_another_image[index].pi_product_id = 'delete'
        console.log('Go',this.data_product.product_another_image[index].pi_product_id)
      }
    },
    UnRemoveOldImage:function(image_id) {
      let index = this.OldImageDelete.findIndex(pi => pi.pi_id == image_id)
      if(index > -1){
        this.OldImageDelete.splice(index,1)
        console.log(this.OldImageDelete)
      }
      let index2 = this.data_product.product_another_image.findIndex(pi => pi.pi_id == image_id)
      if(index2 > -1){
        // this.data_product.product_another_image[index].push({willDelete:true})
        this.data_product.product_another_image[index2].pi_product_id = this.data_product.p_id
        console.log('Go',this.data_product.product_another_image[index2].pi_product_id)
      }
    },
    submitProduct_update() {
      var jsonProduct = JSON.stringify(this.data_product);
      var FD = new FormData();
      // when chang image preview
      if (this.fileimage.size < 10000000 && this.fileimage != "") {
        FD.append("previewFile_image", this.fileimage);
      }
      // when add another image 
      if (this.files.length != 0) {
        var j ;
        for ( j = 0; j < this.files.length; j++) {
          FD.append("anotherFiles_image" + j, this.files[j]);
        }
        FD.append("anotherFiles_image_length",this.files.length);
      }
        
      FD.append("product", jsonProduct);
      // FD.append("creator", JSON.stringify(this.$store.state.log_on));
      console.log(this.data_product);
      console.log(this.fileimage);
      console.log(this.files);
        // this.$store.dispatch("Product_update", FD); // GOGOGO
      setTimeout(() => {
          // this.$router.go(-1);
      }, 2000);
      this.$swal("Update Product Success .", "", "success");
     
    },
    // @keypress="isNumber($event)"
    isNumber: function(evt) {
      evt = (evt) ? evt : window.event;
      var charCode = (evt.which) ? evt.which : evt.keyCode;
      if (charCode > 31 && (charCode < 48 || charCode > 57) && (charCode != 9)) {
        evt.preventDefault();
      } else {
        return true;
      }
    },
  },
  watch:{
    $route() {
      this.getData()
    },
  },
  async created(){
    await this.getData()
  }
}
</script>

<style scoped>
  .image-will-delete{
    /* filter: grayscale(100%); */
    filter: grayscale(100%) drop-shadow(0px 0px 10px gray);
  }
</style>
