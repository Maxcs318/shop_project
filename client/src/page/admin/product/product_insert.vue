<template>
    <div class="col-12">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 col-xs-12">
                    <h4 class="header">
                    <center>เพิ่มสินค้า</center>
                    </h4>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-3 col-xs-12"></div>
                <div class="col-lg-6 col-xs-12">
                    <form @submit.prevent="submitProduct">
                    <center>
                        <img v-if="url" :src="url" width="100%" />
                    </center>
                    <br />
                    <center>
                        <button
                        type="button"
                        class="form-control btn-success col-lg-6"
                        @click="ChooseFilesFirst"
                        >เลือกรูป</button>
                    </center>
                    <input
                        id="chooseImage"
                        ref="filesfirst"
                        style="display: none;"
                        type="file"
                        @change="handleFilesFirst"
                    />
                    <br />
                    ชื่อสินค้า
                    <input
                        type="text"
                        v-model="product.p_name"
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
                    <br />
                    รายละเอียด
                    <textarea
                        v-model="product.p_description"
                        class="form-control textarea"
                        placeholder="รายละเอียด"
                        rows="6"
                    ></textarea>
                    <br />
                    <div class="row">
                        <div class="col-lg-6">
                            ราคา
                        <input
                            type="text"
                            v-model="product.p_price"
                            class="form-control"
                            placeholder="ราคา"
                            @keypress="isNumber($event)"
                            required
                        />
                        </div>
                    </div>
                    <br />
                    <div class="row">
                        <div class="col-lg-6">
                            จำนวน
                        <input
                            type="text"
                            v-model="product.p_amount"
                            class="form-control"
                            placeholder="จำนวนสินค้า"
                            @keypress="isNumber($event)"
                            required
                        />
                        </div>
                    </div>
                    <br />
                    <h5>รูปภาพอื่นๆของ สินค้า [ {{files.length}} ] Size Files All [ {{max_size_file}} byte ]</h5>
                    <input
                        type="file"
                        ref="files"
                        style="display: none;"
                        id="anotherImage"
                        @change="handleFileUpload"
                        multiple
                    />
                    <br />
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
                        <br />
                        </div>
                    </div>
                    <br />
                    <div class="row">
                        <div class="col-lg-6">
                        <button
                            type="button"
                            class="form-control btn-primary col-lg-12"
                            @click="ChooseFiles"
                        >เลือกไฟล์</button>
                        <br />
                        </div>
                        <div class="col-lg-6">
                        <button type="submit" class="form-control btn-success col-12">ดำเนินการต่อ</button>
                        </div>
                    </div>
                    </form>
                </div>
                <div class="col-lg-3 col-xs-12"></div>
                <div class="col-lg-12 col-xs-12"><br></div>
            </div>
        </div>
    </div>
</template>
<script>

// import axios from "axios";

export default {
    name: 'product_insert',
    data () {
        return {
        product: {
            p_name: "",
            p_description: "",
            p_image: "",
            p_price: "",
            p_amount: "",
            // p_category: "",
            // p_create_date: ""
        },
        url: null,
        another_image_pre: [],
        fileimage: "",
        files: [],
        max_size_file: 0,

        data_product_category:'',
        data_load_category:false,
        };
    },
    metaInfo() {
        return { 
            title: 'Insert-Product',
            meta: [
                { name: 'insert product', content: 'insert product'},
                
            ]
        }
    },
    methods: {
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
        submitProduct() {
            if (this.fileimage.size < 10000000 && this.fileimage != "") {
                var jsonProduct = JSON.stringify(this.product);
                var FD = new FormData();
                FD.append("previewFile_image", this.fileimage);
                if (this.files.length != 0) {
                    var j ;
                    for ( j = 0; j < this.files.length; j++) {
                        FD.append("anotherFiles_image" + j, this.files[j]);
                    }
                }
                FD.append("anotherFiles_image_length",this.files.length);
                FD.append("product", jsonProduct);
                // FD.append("creator", JSON.stringify(this.$store.state.log_on));
                // console.log(FD);
                this.$store.dispatch("Product_insert", FD);
                setTimeout(() => {
                    // this.$router.go(-1);
                }, 2000);
                this.$swal("Save Product Success .", "", "success");
            } else {
                this.$swal(" กรุณาเลือกรูปภาพสำหรับ Preview  .", " เลื่อนไปข้างบนสุด ", "error");
            }
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

}
</script>

<style scoped>
  
</style>