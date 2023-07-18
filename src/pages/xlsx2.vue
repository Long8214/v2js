<template>
  <div>
    <son :on-success="handleSuccess" :before-upload="beforeUpload"></son>
    <el-button @click="reset">重置</el-button>
    <el-table   :data="excelTableData"   border   highlight-current-row   style="width: 100%; margin-top: 20px" >
      <el-table-column v-for="item of tableHeader" :key="item" :prop="item"  :label="item"/>
    </el-table>
  </div>
</template>

<script>
import son from './son.vue'
export default {
  components:{son},
  name: "",
  data() {
    return {
      excelTableData: [],
      tableHeader: [],
    };
  },

  methods: {
    // 上传文件前
    beforeUpload(file) {
      // console.log('beforeUpload-file', file) // 上传文件之前 对文件的数据 进行校验（必填 || 文件大小）
      const isLt1M = file.size / 1024 / 1024 < 1;
      if (isLt1M) {
        return true;
      }
      this.$message({
        message: "请导入文件不超过1M的",
        type: "warning",
      });
      return false;
    },
    // 上传成功
    handleSuccess({ results, header }) {
      // console.log('上传成功', results, 'header', header)
      this.excelTableData = results;
      this.tableHeader = header;
    },
    // 重置 上传数据
    reset() {
      this.excelTableData = [];
      this.tableHeader = [];
    },
  },
};
</script>

