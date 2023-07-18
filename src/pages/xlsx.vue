<template>
    <div>
      <el-button @click="$refs.input.click()">点击上传</el-button>
      <input ref="input" style="display:none" type="file"  accept=".xlsx, .xls" @change="handleImportExcel" />
    </div>
  </template>
  
  <script>
    import { importExcelFile } from '../utils/excelFile'
    export default {
      methods: {
        async handleImportExcel(e) {
          const file = e.target.files[0]
          const jsonData = await importExcelFile(file)
          console.log('xlsx',JSON.parse(JSON.stringify(jsonData)))
        }
      }
    }
  </script>