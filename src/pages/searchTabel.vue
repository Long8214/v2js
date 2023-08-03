<template>
  <div class="programListWrap">

    <div class="tempEpgTableWrap">
      <el-input v-model="keyword"></el-input>
      <el-button @click="search">搜索</el-button>
      <el-button @click="add">添加一条</el-button>
  
      <el-table ref="singleTable" :data="tableData" style="width: 100%"  highlight-current-row @row-click="handleRowClick" @current-change="handleCurrentChange">
        <el-table-column type="selection" width="50" align="center" />

        <el-table-column type="index"></el-table-column>
        <el-table-column prop="content">
          <template slot-scope="scope">
            <div :class="{ 'highlighted-row': scope.$index === highlightedRow }">{{ scope.row.content }}</div>
          </template>
        </el-table-column>
        <el-table-column prop="age">
          <template slot-scope="scope">
            <div :class="{ 'highlighted-row': scope.$index === highlightedRow }">{{ scope.row.age }}</div>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      keyword: '', // 关键字
      tableData: [ // 表格数据
        { content: '内容1',age:'12' },
        { content: '内容2',age:'12' },
      ],
      highlightedRow: -1 ,// 高亮显示的行
      index:null,
    };
  },
  methods: {
    add(){
      console.log(this.index)

      // 红框选中新数据
      if(this.index != -1 && this.index != null){
        const arr = { content: '新增数据1' ,age:'12'}
        this.tableData = this.insertData(this.tableData,this.index+1,arr)
        this.$nextTick(()=>{
          this.$refs.singleTable.setCurrentRow(arr);
        })
        this.index = this.index + 1
      }else{
        const arr = { content: '新增数据2' ,age:'12'}
        this.tableData.push(arr)
        this.$nextTick(()=>{
          this.$refs.singleTable.setCurrentRow(arr);
        })
        this.index = this.tableData.length -2
      }
      console.log(this.index)

    },
    // 通过下标增加数据
    insertData(arr, index, data) {
      var result = [];

      for (var i = 0; i < arr.length; i++) {
        if (i === index) {
          result.push(data);
        }
        result.push(arr[i]);
      }

      return result;
    },
    handleRowClick(row) {
      const rowIndex = this.tableData.indexOf(row);
      this.index = rowIndex
      console.log('当前点击行的索引：', rowIndex);
      // 获取以点击行索引为起点的表格数据
      const tableDataFromIndex = this.tableData.slice(rowIndex);
      console.log('以点击行索引为起点的表格数据：', tableDataFromIndex);
    },
    handleCurrentChange(row,index){
      this.$refs.singleTable.setCurrentRow(row);
    },
    // search() {
    //   if(this.keyword == '')return
    //   const keyword = this.keyword.toLowerCase();
    //   let startIdx = this.highlightedRow !== -1 ? this.highlightedRow + 1 : 0;
    //
    //   for (let i = startIdx; i < this.tableData.length; i++) {
    //     const rowContent = this.tableData[i].content.toLowerCase();
    //     if (rowContent.includes(keyword)) {
    //       this.highlightedRow = i;
    //       break;
    //     }
    //   }
    // }
    search() {
      const keyword = this.keyword.toLowerCase();
      let startIdx = this.highlightedRow !== -1 ? this.highlightedRow + 1 : 0;

      for (let i = startIdx; i < this.tableData.length; i++) {
        const rowContent = this.tableData[i].content.toLowerCase();
        if (rowContent.includes(keyword)) {
          this.highlightedRow = i;
          break;
        }
      }
    }
  },
  watch:{
    keyword(val){
      console.log("🚀", val)
      this.highlightedRow = -1
  }
  }
};
</script>

<style >
.highlighted-row {
  border: 2px solid red;
}

 .el-table__body tr.current-row>td {
  border-top: 1px solid red;
  border-bottom: 1px solid red;
  background-color: transparent !important;
}
 .el-table__body tr.current-row>td:first-child {
  border-left: 1px solid red;
}
.el-table__body tr.current-row>td:last-child {
  border-right: 1px solid red;
}
</style>
