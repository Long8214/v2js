<template>
<div>
  <el-upload 
              ref="upload" 
              :limit="10" 
              accept=".jpg,.gif,.png,.jpeg,.txt,.pdf,.doc,.docx,.xls,.xlsx" 
              name="files" 
              :multiple="true"
              :action="baseURL"
              :headers="myToken" 
              :on-change="handleFileChange"
              :before-remove="handleFileRemove" 
              :auto-upload="false"
              :file-list="upload.fileList" 
              >
              <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
            </el-upload>
            <el-button type="primary" @click="submitFileForm">确 定</el-button>




</div>

</template>
<script>
    export default{
      data(){
	return {
      upload: {
        fileList: [],
        fileName: []
      },
	}
},


        methods: {
    // 上传发生变化钩子
    handleFileChange(file, fileList) {
      this.upload.fileList = fileList;
    },
    // 删除之前钩子
    handleFileRemove(file, fileList) {
      this.upload.fileList = fileList;
    },
    // 提交上传文件
    submitFileForm() {
      // 创建新的数据对象
      let formData = new FormData();
      // 将上传的文件放到数据对象中
      this.upload.fileList.forEach(file => {
        formData.append('file', file.raw);
        this.upload.fileName.push(file.name);
      });
      console.log("提交前",formData.getAll('file'));

      // 文件名
      formData.append('fileName', this.upload.fileName);
      // 自定义上传
      this.$api.uploadFile(formData).then(response => {
          console.log(response);
          // if(response.code == 200){
          //   this.$refs.upload.clearFiles();
          //   this.msgSuccess('上传成功！');
          // }else{
          //   this.$message.error(response.msg);
          // }
        })
        .catch(error => {
          this.$message.error('上传失败！');
        });

    },



        }
    }
</script>
