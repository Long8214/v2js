<template>
    <div>
      <input ref="excel-upload-input" class="excel-upload-input" type="file" accept=".xlsx, .xls" @change="handleClick">
      <div class="drop" @drop="handleDrop" @dragover="handleDragover" @dragenter="handleDragover">
        Drop excel file here or
        <el-button :loading="loading" style="margin-left:16px;" size="mini" type="primary" @click="handleUpload">
          上传excel
        </el-button>
      </div>
    </div>
  </template>
  
  <script>
  import * as XLSX from 'xlsx'
  
  export default {
    props: {
      beforeUpload: Function, // eslint-disable-line
      onSuccess: Function // eslint-disable-line
    },
    data() {
      return {
        loading: false, // 上传 按钮的loading
        excelData: {
          header: null,
          results: null
        }
      }
    },
    methods: {
      // 功能2：2-1拖拽文件上传
      handleDrop(e) {
        // console.log('handleDrop-e', e)
        e.stopPropagation()
        e.preventDefault()
        if (this.loading) return
        const files = e.dataTransfer.files
        if (files.length !== 1) {
          this.$message.error('仅仅支持一个文件上传')
          return
        }
        const rawFile = files[0] // only use files[0]
  
        if (!this.isExcel(rawFile)) {
          this.$message.error('仅仅支持上传的文件类型： .xlsx, .xls, .csv')
          return false
        }
        this.upload(rawFile)
        e.stopPropagation()
        e.preventDefault()
      },
      // 功能2：2-2拖拽完毕
      handleDragover(e) {
        // console.log('handleDragover-e', e)
        e.stopPropagation()
        e.preventDefault()
        e.dataTransfer.dropEffect = 'copy'
      },
      // 功能1：手动上传： 1-1 手动上传 excel
      handleUpload() {
        this.$refs['excel-upload-input'].click() // 调用上传文件的入口（弹窗）
      },
      // 功能1：手动上传： 1-2 手动上传文件 触发的方法
      handleClick(e) {
        // console.log('handleClick-e', e, 'e.target.files[0]', e.target.files[0])
        const files = e.target.files
        const rawFile = files[0] // 拿到具体的 上传文件内容 可以进行判断上传的文件 相关！
        if (!rawFile) return
        this.upload(rawFile)
      },
      // 03：触发上传文件 rawFile- 为上传的文件
      upload(rawFile) {
        // console.log('upload-', rawFile)
        this.$refs['excel-upload-input'].value = null // 修复程序无法选择 相同的excel
        if (!this.beforeUpload) { // 上传前的函数 （在父组件之中 进行校验文件）
          this.readerData(rawFile)
          return
        }
        const before = this.beforeUpload(rawFile)
        if (before) {
          this.readerData(rawFile)
        }
      },
      // 04：渲染数据
      readerData(rawFile) {
        // console.log('readerData', rawFile)
        this.loading = true
        return new Promise((resolve, reject) => {
          const reader = new FileReader() // excel 文件渲染
          reader.onload = e => {
            const data = e.target.result
            const workbook = XLSX.read(data, { type: 'array' })
            const firstSheetName = workbook.SheetNames[0]
            const worksheet = workbook.Sheets[firstSheetName]
            const header = this.getHeaderRow(worksheet)
            const results = XLSX.utils.sheet_to_json(worksheet)
            this.generateData({ header, results })
            this.loading = false
            resolve()
          }
          reader.readAsArrayBuffer(rawFile)
        })
      },
      // 获取 上传的excel文件的 头部数据
      getHeaderRow(sheet) {
        // console.log('getHeaderRow', sheet)
        const headers = []
        const range = XLSX.utils.decode_range(sheet['!ref'])
        let C
        const R = range.s.r
        /* start in the first row */
        for (C = range.s.c; C <= range.e.c; ++C) {
          /* walk every column in the range */
          const cell = sheet[XLSX.utils.encode_cell({ c: C, r: R })]
          /* find the cell in the first row */
          let hdr = 'UNKNOWN ' + C // <-- replace with your desired default
          if (cell && cell.t) hdr = XLSX.utils.format_cell(cell)
          headers.push(hdr)
        }
        return headers
      },
      // 获取上传 excel 上传 表头数据、表体数据
      generateData({ header, results }) {
        // console.log('generateData-', header, results)
        this.excelData.header = header
        this.excelData.results = results
        this.onSuccess && this.onSuccess(this.excelData) // 调用上传成功
      },
      isExcel(file) {
        return /\.(xlsx|xls|csv)$/.test(file.name)
      }
    }
  }
  </script>
  
  <style scoped>
  .excel-upload-input {
    display: none;
    z-index: -9999;
  }
  .drop {
    border: 2px dashed #bbb;
    width: 600px;
    height: 160px;
    line-height: 160px;
    margin: 0 auto;
    font-size: 24px;
    border-radius: 5px;
    text-align: center;
    color: #bbb;
    position: relative;
  }
  </style>
  
  