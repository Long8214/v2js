<template>
   <div>
    <!-- <el-form ref="form" :model="formData" :rules="formRules" label-width="100px">
        <div v-for="(item, index) in formItems" :key="index" class="object-item">
          <div class="title">{{ item.title }}</div>
          <el-form-item v-for="(field, fieldIndex) in item.fields" :key="fieldIndex"
            :label="field.label" :prop="getFieldProp(index, fieldIndex)" 
            :rules="getFieldRules(index, fieldIndex)">
            <el-input v-model="formData[index][field.name]"></el-input>
          </el-form-item>
        </div>
      </el-form> -->
      <!-- <input type="multipl"  /> -->
      <el-button @click="$refs.input.click()">点击上传</el-button>
      <input ref="input" style="display:none" multipl type="file"  accept=".xlsx, .xls" @change="handleImportExcel" />
      <form action="upload.php" method="post" enctype="multipart/form-data">
        <input type="file" name="files[]" multiple>
        <input type="submit" value="上传">
      </form>
   </div>
</template>

<script>
    import { importExcelFile } from '../utils/excelFile'
export default {
    name:'verifyElForm',
    data() {
        return {
            color:'',
            formItems: [
            {
                title: '对象 1',
                fields: [
                { label: '属性1', name: 'property1' },
                { label: '属性2', name: 'property2' },
                // ...
                ]
            },
            {
                title: '对象 2',
                fields: [
                { label: '属性1', name: 'property1' },
                { label: '属性2', name: 'property2' },
                // ...
                ]
            },
            // ...
            ],
            formData: [], // 动态生成的表单数据
            formRules: {} // 动态生成的表单校验规则
        };
        },
    mounted() {
        this.generateFormData();
        },
    methods: {
        async handleImportExcel(e) {
          const file = e.target.files[0]
          const jsonData = await importExcelFile(file)
          console.log('xlsx',JSON.parse(JSON.stringify(jsonData)))
        },
        generateFormData() {
            this.formData = this.formItems.map(() => ({}));
            this.formRules = {};
            // 动态生成校验规则
            this.formItems.forEach((item, index) => {
            const itemRules = {};
            item.fields.forEach((field, fieldIndex) => {
                const fieldProp = this.getFieldProp(index, fieldIndex);
                const fieldRules = this.getFieldRules(index, fieldIndex);
                itemRules[fieldProp] = fieldRules;
            });
            this.formRules[this.getObjectProp(index)] = itemRules;
            });
        },
        getObjectProp(index) {
            return `object${index}`;
        },
        getFieldProp(index, fieldIndex) {
            return `${this.getObjectProp(index)}.field${fieldIndex}`;
        },
        getFieldRules(index, fieldIndex) {
            // 根据具体需求定义每个字段的校验规则
            return [
            { required: true, message: '不能为空', trigger: 'blur' },
            // 其他校验规则
            ];
        },
        handleSubmit() {
            this.$refs.form.validate((valid) => {
            if (valid) {
                // 表单校验通过，执行提交操作
            } else {
                // 表单校验不通过，处理错误信息
            }
            });
        }
    }
}

</script>

<style scoped lang="less">

</style>