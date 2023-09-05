<template>
  <div>
    <el-button type="primary" @click="open" >点击上传</el-button>

    <el-dialog
    :close-on-click-modal="false"
      :visible.sync="dialogVisible"
      width="50%"
      :before-close="handleClose">
      <!-- <span>这是一段信息</span> -->
      <el-upload
        class="upload-demo"
        action="https://jsonplaceholder.typicode.com/posts/"
        :on-preview="handlePreview"
        :on-remove="handleRemove"
        :before-remove="beforeRemove"
        multiple
        :limit="3"
        :on-exceed="handleExceed"
        :file-list="fileList">
        <el-button  type="primary">点击上传文件</el-button>
       
      </el-upload>
      <div style="display: flex;"> 
        <el-button @click="urlClick" type="primary">点击上传url</el-button>
      <el-input trim v-show="urlShow == true" v-model.trim="urlValue" placeholder="请输入url地址"></el-input>
      </div>


      <div>上传方式只能二选一</div>


      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="confirm">确 定</el-button>
      </span>
    </el-dialog>

  </div>
</template>

<script>
export default {
  data() {
    return {
      dialogVisible: false,
      urlShow:false,
      urlValue:'',
      fileList: [{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}, {name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}]
    };
  },
  methods: {
        open() {
          this.dialogVisible = true
        },
        handleClose(done) {
            this.$confirm('确认关闭？')
              .then(_ => {
                done();
              })
              .catch(_ => {});
      },
      // 文件列表移除文件时的钩子
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      // 点击文件列表中已上传的文件时的钩子
      handlePreview(file) {
        console.log(file);
      },
      // 文件超出个数限制时的钩子
      handleExceed(files, fileList) {
        this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
      },
      // 删除文件之前的钩子，参数为上传的文件和文件列表
      beforeRemove(file, fileList) {
        return this.$confirm(`确定移除 ${ file.name }？`);
      },
      urlClick(){
        this.urlShow = true
      },
      confirm() {
          console.log(this.urlValue)
          if(!this.urlValue){
            this.$message.error('url不能为空');
          }
          this.dialogVisible = false; 
      
      }
  }
};
</script>
<style scoped lang="less">
/deep/ .el-input__inner{
  margin-top: 6px;
}
</style>
