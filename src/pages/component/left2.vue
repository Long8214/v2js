<template>
    <div class="boxWrap ">
      <div class=" fx">
        <div class="wrap ">
          <div>平台录入</div>
          <img class="img" src="../../pages/cockpit/数据底座.png"/>
          <div class="number">12个</div>
        </div>
        <div class="wrap mr20 ml20">
          <div>平台录入</div>
          <img class="img" src="../../pages/cockpit/数据底座.png"/>
          <div class="number">12个</div>
        </div>
        <div class="wrap">
          <div>平台录入</div>
          <img class="img" src="../../pages/cockpit/数据底座.png"/>
          <div class="number">12个</div>
        </div>
        
      </div>
      <el-table
      header-cell-style="background-color: #6599fe; color: white; font-size:14px"
      border-collapse="collapse"
        :data="tableData"
        border
        style="width: 100%">
        <el-table-column
          fixed
          prop="date"
          label="所在政区"
        >
        </el-table-column>
        <el-table-column
          prop="name"
          label="可能风险等级"
         >
         <template slot-scope="scoped">
          <el-tag
            :key="scoped.row.label"
            :type="scoped.row.type"
            effect="dark">
            {{ scoped.row.label }}
          </el-tag>
         </template>
        </el-table-column>
        <el-table-column
          prop="zip"
          label="影响情况"
         >
        </el-table-column>
        <el-table-column
          fixed="right"
          label="操作"
         >
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
          </template>
        </el-table-column>
  </el-table>
    </div>
   
</template>
<script>
export default {
name:'left1',
    data() {
      return {
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333,
          type: 'success',
          label: '标签二' 
        }, {
          date: '2016-05-04',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1517 弄',
          zip: 200333,
          type: 'danger',
          label: '4444' 
        }, {
          date: '2016-05-01',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1519 弄',
          zip: 200333,
          type: 'success',
          label: '2222' 
        }, {
          date: '2016-05-03',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1516 弄',
          zip: 200333,
          type: 'warning',
          label: '1111' 
        }]
      }
    },
    methods :{
      handleClick(row) {
            console.log(row);
     }
    }
}
</script>
<style lang="less" scoped>
.fx {
  display: flex;
}
.mr20{
  margin-right: 20px;
}
.ml20{
  margin-left: 20px;
}
.boxWrap {
  padding: 15px;
  .wrap {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;

  .img{
}
  .number {
    position: absolute;
    top: 38px;
    left: 20px;
    color: white;
    font-size: 20px;
  }
}
}

.el-table__header tr,.el-table__header th {padding: 0;height: 20px;
}
.el-table__body tr,.el-table__body td {padding: 0;height: 20px;
}

</style>