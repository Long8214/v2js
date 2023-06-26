
<template>
  <div class="rsa-container">
<!-- <tableCeshi></tableCeshi> -->

    <!-- ceshi -->
    <!-- <ceshi></ceshi>  -->

    <!-- <el-input  v-model="password"  @input="reqTest()"  placeholder="请输入密码"></el-input>
    <div>输入的密码 : {{ password }}</div>
    <div>加密后的密码 : {{ rsaPassword }}</div>
    <div>解密后的密码 : {{ encPassword }}</div>

    <div class="exlx">

      <exlx2></exlx2>
    </div> -->
    <!-- <a_map></a_map> -->
    <!-- <exlx></exlx> -->
    <!-- 

 <el-dropdown trigger="click" :visible-change="true">
      <span class="el-dropdown-link">
        点击上传excel<i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item> <el-date-picker   v-model="params.year"   value-format="yyyy"   format="yyyy"   type="year"   prefix-icon=" " ></el-date-picker></el-dropdown-item>
        <el-dropdown-item><el-button :disabled="!params.year"  @click="upload"><i class="el-icon-plus"></i>上传</el-button></el-dropdown-item>
      </el-dropdown-menu> 
    

    </el-dropdown>
    <input ref="excel-upload-input" style="display:none" type="file"  accept=".xlsx, .xls" @change="handleImportExcel" />
     -->

     <!-- 可用 -->
     <!-- <el-popover>
      <template #reference >
        <el-button style="margin-right: 16px" type="primary">上传 Excel</el-button>
      </template>
      <el-date-picker   v-model="params.year"   value-format="yyyy"   format="yyyy"   type="year"   prefix-icon=" " ></el-date-picker>
      <el-button :disabled="!params.year"  @click="upload"><i class="el-icon-plus"></i>上传</el-button>
      <input ref="excel-upload-input" style="display:none" type="file"  accept=".xlsx, .xls" @change="handleImportExcel" />
     </el-popover> -->
     <!-- <test></test> -->



     <!-- datav轮播表 -->
     <testDatav></testDatav>
  </div>
</template>

<script>
import { importExcelFile } from "./utils/excelFile";
import Rsa from "./utils/rsa";
import test from "./components/test.vue";
import exlx from "./components/xlsx.vue";
import exlx2 from "./components/xlsx2.vue";
import xd from "./components/xd";
import ceshi from "./components/ceshi";
import tableCeshi from './components/ceshi/tableCeshi.vue'
import testDatav from './components/ceshi/testDatav.vue'
export default {
  components: { exlx, exlx2, test,ceshi, tableCeshi,testDatav,
    'a_map':xd,
  },
  data() {
    // 定义数据
    return {
      password: "", //密码
      rsaPassword: "", //加密后的密码
      encPassword: "", //解密后的密码
      params: {
        year: "",
      },
    };
  },
  methods: {
    // 定义方法
    reqTest() {
      this.rsaPassword = Rsa.encrypt(this.password); // 加密
      this.encPassword = Rsa.decrypt(this.rsaPassword); // 解密
    },
    upload() {
      this.$refs["excel-upload-input"].click();
    },
    async handleImportExcel(e) {
      const file = e.target.files[0];
      const jsonData = await importExcelFile(file);
      console.log(JSON.parse(JSON.stringify(jsonData)));
    },
  },
  computed: {
    // rsaPassword(){
    //   return this.Rsa.encrypt(this.password);
    // },
    // encPassword(){
    //   return this.Rsa.encrypt(this.rsaPassword);
    // },
  },
};
</script>
<style>
  .a{
    
  }
</style>

