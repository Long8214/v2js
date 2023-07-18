<template>
    <el-popover>
        <template #reference >
          <el-button style="margin-right: 16px" type="primary">上传 Excel</el-button>
        </template>
        <el-date-picker   v-model="params.year"   value-format="yyyy"   format="yyyy"   type="year"   prefix-icon=" " ></el-date-picker>
        <el-button :disabled="!params.year"  @click="upload"><i class="el-icon-plus"></i>上传</el-button>
        <input ref="excel-upload-input" style="display:none" type="file"  accept=".xlsx, .xls" @change="handleImportExcel" />
    </el-popover>



</template>

<script>
// 解析excel
import { importExcelFile } from "../utils/excelFile";

export default {
    name:'loadAnalysisExcel',
    data(){
        return{
            params: {
                year: "",
            },
        }
    },
    methods: {
        upload() {
            this.$refs["excel-upload-input"].click();
        },
        async handleImportExcel(e) {
            const file = e.target.files[0];
            const jsonData = await importExcelFile(file);
            console.log(JSON.parse(JSON.stringify(jsonData)));
        },
    },

}

</script>

<style scoped lang="less">


</style>