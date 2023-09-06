<template>
<div class="section">
    <div>
        <div>
            <div>平台录入</div>
            <div>12个</div>
        </div>
        <div>
            <div>预演分析</div>
            <div>34个</div>
        </div>
        <div>
            <div>人工上报</div>
            <div>12个</div>
        </div>
    </div>
    <el-table  :data="data" class="tableHeadClass allAreaTableHeadClass">
        <el-table-column prop="addvnm" label="所在政区" align="center" show-overflow-tooltip></el-table-column>
        <el-table-column label="可能风险等级" align="center" >
            <template slot-scope="{row}">
                <div style="display: flex; justify-content: center;">
                    <div v-if="row.gradeLv == 1" class="grade" style="color: #DD1515;background: rgba(223,49,49,0.25);">{{row.grade}}</div>
                    <div v-else-if="row.gradeLv == 2" class="grade" style="text-align:center;color: #FF8400;background: rgba(255,141,18,0.32)">{{row.grade}}</div>
                    <div v-else-if="row.gradeLv == 3" class="grade" style="text-align:center;color: #FFD900;background: rgba(238,186,13,0.22);">{{row.grade}}</div>
                    <div v-else class="grade" style="text-align:center;color: #00A3FF;background: rgba(0,139,255,0.2);">{{row.grade}}</div>
                </div>
            </template>
        </el-table-column >
        <el-table-column prop="condition" label="影响情况" align="center" show-overflow-tooltip></el-table-column>
        <el-table-column label="操作" width="50px" align="center" >
            <template slot-scope="{}">
                <div style="display: flex; justify-content: center;align:center;" >
                    <img src="../详情.png" />
                </div>
            </template>
        </el-table-column>
    </el-table>
</div>

</template>

<script>
export default {
    name:'hazardList',
    data(){
        return {
            data:[
                {
                    addvnm:'某某市某某县',
                    grade:'蓝色风险',
                    gradeLv:4,
                    condition:'12重点村280人'
                },
                {
                    addvnm:'某某市某某县',
                    grade:'蓝色风险',
                    gradeLv:4,
                    condition:'12重点村280人12重点村280人12重点村280人'
                },
                {
                    addvnm:'某某市某某县',
                    grade:'黄色风险',
                    gradeLv:3,
                    condition:'12重点村280人'
                },
                {
                    addvnm:'某某市某某县',
                    grade:'黄色风险',
                    gradeLv:3,
                    condition:'12重点村280人'
                },
                {
                    addvnm:'某某市某某县',
                    grade:'橙色风险',
                    gradeLv:2,
                    condition:'12重点村280人'
                },
                {
                    addvnm:'某某市某某县',
                    grade:'红色风险',
                    gradeLv:1,
                    condition:'12重点村280人'
                },
            ]
        }
    }

}

</script>

<style scoped lang="less">
.section{
    &>:nth-child(1){
        display: flex;
        justify-content: space-around;
        margin-bottom: 10px;
        &>div{
            
            &>:nth-child(1){
                color: black;
                font-size: 12px;
                text-align: center;
                height: 20px;
                line-height: 36px;
            }
            &>:nth-child(2){
                text-align: center;
                line-height: 62px;
                width: 74px;
                height: 62px;
                color: white;
                font-size: 19px;
                background-image: url(../数据底座.png);
                background-size: 100% 100%;
                background-repeat: no-repeat;
            }
        }
    }
    .tableData{
        /deep/ thead .tr{
            background: red;
        }
    }

}

.grade{
    text-align:center;
    padding: 0 10px;
    width: max-content;
    font-size: 12px;
}

/**滚动条**/
.allAreaTableHeadClass /deep/ .el-table__body-wrapper{
    max-height:calc(26px * 6);
    overflow-y:auto
  }
/deep/ .tableHeadClass th {
    color: #666666;
    background: #e6f2f8;
    padding: 0;
    height: 35px;
    line-height: 35px;
    border-bottom: 1px solid #00264b;
  }
  /deep/ .tableHeadClass .el-table {
    color: #333333;
  }
  
/deep/ .allAreaTableHeadClass th {
    font-size: 12px;
  }
/deep/ .el-table th>.cell{
    color: white;
    font-size: 12px;
}
/deep/ .el-table td{
    padding:1px 0
}
/deep/ .el-table td>.cell{
    width: 100% !important;
    padding: 0;
    font-size: 12px;
}
.allAreaTableHeadClass /deep/ th > .cell,
.spreadHeadClass /deep/ th > .cell {
    line-height: 14px;
}
.allAreaTableHeadClass /deep/ tr>:nth-child(1) .cell{
    padding: 0;
}
/deep/ .allAreaTableHeadClass th {
    background: #6599FE;
    font-weight: 400;
    color: white;
}


</style>