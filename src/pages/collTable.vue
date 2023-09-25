<!-- <template>
<el-table :data="tableData" :span-method="mergeCell">
  <el-table-column v-for="col in 11" :key="col" label="表格">
    <template slot-scope="{ row, column }">
      {{ row['col' + col] }}
    </template>
  </el-table-column>
 
</el-table>

</template>

<script>
export default {
 name: 'demo',
 data() {
  return {
    tableData: Array.from({ length: 10 }, (_, idx) => {
      return {
        col1: idx + 1,
        col2: idx >= 0 && idx <= 2 ? '111' : `数据${idx * 11 + 1}`,
        col3: idx >= 0 && idx <= 2 ? '' : `数据${idx * 11 + 2}`,
        col4: idx >= 0 && idx <= 2 ? '' : `数据${idx * 11 + 3}`,
        col5: idx >= 0 && idx <= 2 ? '' : `数据${idx * 11 + 4}`,
        col6: idx >= 0 && idx <= 2 ? '' : `数据${idx * 11 + 5}`,
        col7: idx >= 0 && idx <= 2 ? '' : `数据${idx * 11 + 6}`,
        col8: idx >= 0 && idx <= 2 ? '' : `数据${idx * 11 + 7}`,
        col9: idx >= 0 && idx <= 2 ? '' : `数据${idx * 11 + 8}`,
        col10: idx >= 0 && idx <= 2 ? '' : `数据${idx * 11 + 9}`,
        col11: idx >= 0 && idx <= 2 ? '' : `数据${idx * 11 + 10}`,
        col12: idx >= 0 && idx <= 2 ? '' : `数据${idx * 11 + 11}`,
      };
    }),
    showMergeCells: false,
  };
},
methods: {
  mergeCell({ row, column, rowIndex, columnIndex }) {
    if (columnIndex >= 0 &&  columnIndex <= 1) {
      if (rowIndex >= 0 && rowIndex <5) { // rowIndex：表示是第几行=
        return {
            rowspan: 5,	// 2：需要合并的行数    =
            colspan: 2		// 1：需要合并的列数
        };
    } else {
        return {
            rowspan: 1,     // 0：只要是0，都代表着不显示
            colspan: 1
        };
    }
    }
   

    // if (rowIndex = 0 && columnIndex >= 2 && columnIndex <= 12) {
    //   return {
    //     rowspan: 1,
    //     colspan: 1,
    //     align: 'center',
    //     valign: 'middle',
    //   };
    // }
    // if (rowIndex = 0 && columnIndex <= 2) {
    //   return {
    //     rowspan: 1,
    //     colspan: 2,
    //     align: 'center',
    //     valign: 'middle',
    //   };
    // }

    // if (rowIndex <=5 && columnIndex <= 1) {
    //   return {
    //     rowspan: 6,
    //     colspan: 2,
    //     align: 'center',
    //     valign: 'middle',
    //   };
    // }
    // return {
    //   rowspan: 1,
    //   colspan: 1,
    // };
  },
},

}
</script>
<style scoped>

</style> -->


<template>
  <el-table
    :data="tableData"
    :span-method="objectSpanMethod"
    style="width: 100%">
    <el-table-column
      prop="date"
      label="日期"
      width="180">
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="180">
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址">
    </el-table-column>
    <el-table-column
      prop="date"
      label="日期1"
      width="180">
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名1"
      width="180">
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址1">
    </el-table-column>      
  </el-table>
</template>

<script>
  export default {
    data() {
      return {
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        },{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }]
      }
    },
    methods :{
      objectSpanMethod({ row, column, rowIndex, columnIndex }) {
        /*
        row: 获取此行的全部数据，即你需要传入且展示的数据
        column：获取列的结构及其数据、注意此时列的数据不是指我们传入的数据、而是饿了么自己定义的列结构。
        rowIndex：行号，这个行号表示当前是第几行
        columnIndex：列号，表示当前是第几列
        */
        if (columnIndex >= 0 && columnIndex < 2) {  // columnIndex：表示是第几 列 
            if (rowIndex >=0 && rowIndex <=2) { // rowIndex：表示是第几行
                return {
                    rowspan: 3,		// 2：需要合并的行数
                    colspan: 1		// 1：需要合并的列数
                };
            } else {
                return {
                    rowspan: 0,     // 0：只要是0，都代表着不显示
                    colspan: 0
                };
            } 
         }

      }
    }
}
</script>
