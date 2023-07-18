<template>
  <div>
    <el-button @click="add">获取数据</el-button>
    <table cellspacing="0" border="1px solid #ccc"  class="table_content">
      <!-- 		1 -->
      <tr>
        <td colspan="2">码钱联营状态</td>
        <td colspan="5">
          <span v-show="table_start.status == '0'">开通联营</span>
          <span v-show="table_start.status == '1'">关闭</span>
          &nbsp;

        </td>
        <td style="color:red">
          {{table_start.statusDesc}}
        </td>
      </tr>
      <!-- 		2 -->
      <tr>
        <td>联营比例 :</td>
        <td>{{table_start.ratio}}</td>
        <td>周期 :</td>
        <td colspan="5">{{table_start.period}}</td>
      </tr>
      <!-- 			子商户信息 -->
      <tbody class="table_group" v-for="(k,KIndex) in table_start.union_operation_child" :key="KIndex">
      <tr>
        <td>联营商号 :</td>
        <td>
          <span>{{k.omid}}</span>
        </td>
        <td>商户名称 :</td>
        <td colspan="2">
          <span>{{k.merchantname}}</span>
        </td>
        <td>联营状态 :</td>
        <td colspan="2">
          <span>{{k.statusDesc}}</span>
        </td>

      </tr>
      <tr>
        <td>结算银行 :</td>
        <td colspan="2">
          <span>{{k.settlement_bank}}</span>
        </td>

        <td>结算卡号</td>
        <td colspan="4">
          <span>{{k.settlement_bank_code}}</span>
        </td>

      </tr>
      <tr>
        <td>联营比例 :</td>
        <td>
          <span>{{k.ratio}}</span>
          <!--                             <el-input v-model="k.ratio"></el-input> -->
        </td>
        <td>优先级 :</td>
        <td colspan="5">
          <span>{{k.priority}}</span>

        </td>
      </tr>
      <tr>
        <td>限额 :</td>
        <td colspan="7">
          <span>{{k.limit}}</span>
        </td>
      </tr>
      </tbody>
    </table>
    <table cellspacing="0" border="1px solid #ccc"  class="table_content">
      <!-- 		1 -->
      <tr>
        <td colspan="2">码钱联营状态:</td>
        <td colspan="5">
          <span v-show="table_finish.status == '0'">开通联营</span>
          <span v-show="table_finish.status == '1'">关闭</span>
        </td>
        <td >
          {{table_finish.statusDesc}}
        </td>
      </tr>
      <!-- 		2 -->
      <tr>
        <td>联营比例 :</td>
        <td>{{table_finish.ratio}}</td>
        <td>周期 :</td>
        <td colspan="5">{{table_finish.period}}</td>
      </tr>
      <!-- 			子商户信息 -->
      <tbody class="table_group" v-for="(k,KIndex) in table_finish.union_operation_child" :key="KIndex">
      <tr>
        <td>联营商号 :</td>
        <td>
          <span>{{k.omid}}</span>
        </td>
        <td>商户名称 :</td>
        <td colspan="2">
          <span>{{k.merchantname}}</span>
        </td>
        <td>联营状态 :</td>
        <td colspan="2">
          <span>{{k.statusDesc}}</span>
        </td>

      </tr>
      <tr>
        <td>结算银行 :</td>
        <td colspan="2">
          <span>{{k.settlement_bank}}</span>
        </td>

        <td>结算卡号</td>
        <td colspan="4">
          <span>{{k.settlement_bank_code}}</span>
        </td>

      </tr>
      <tr>
        <td>联营比例 :</td>
        <td>
          <span>{{k.ratio}}</span>
          <!--                             <el-input v-model="k.ratio"></el-input> -->
        </td>
        <td>优先级 :</td>
        <td colspan="5">
          <span>{{k.priority}}</span>

        </td>
      </tr>
      <tr>
        <td>限额 :</td>
        <td colspan="7">
          <span>{{k.limit}}</span>
        </td>
      </tr>
      </tbody>
    </table>

  </div>
</template>

<script>
export default {
  data() {
    return {
      table_start:{
        "omid":"",
        "status":"",
        "statusDesc":"",
        "ratio":"",
        "period":"",
        "union_operation_child":[
            {
                "omid":"",
                "merchantname":"",
                "status":"",
                "statusDesc":"",
                "settlement_bank":"",
                "settlement_bank_code":"",
                "priority":"",
                "ratio":"",
                "limit":""
            },
  
        ]
      },
      table_finish:{
        "omid":"",
        "status":"",
        "statusDesc":"",
        "ratio":"",
        "period":"",
        "union_operation_child":[
            {
                "omid":"",
                "merchantname":"",
                "status":"",
                "statusDesc":"",
                "settlement_bank":"",
                "settlement_bank_code":"",
                "priority":"",
                "ratio":"",
                "limit":""
            },
  
        ]
      },
    };
  },
  methods:{
    add(){
      let res =  {
            "result":{
                "code":10000,
                "msg":"操作成功"
              },
              "data":{
                  "info":{
                      "start":{
                          "omid":"",
                          "status":"1",
                          "statusDesc":"开通联营",
                          "ratio":"10.00",
                          "period":"1",
                          "union_operation_child":[
                              {
                                  "omid":"123123",
                                  "merchantname":"张三",
                                  "status":"状态值",
                                  "statusDesc":"状态描述",
                                  "settlement_bank":"",
                                  "settlement_bank_code":"",
                                  "priority":"",
                                  "ratio":"",
                                  "limit":""
                              },
                              {
                                  "omid":"123123",
                                  "merchantname":"张三",
                                  "status":"状态值",
                                  "statusDesc":"状态描述",
                                  "settlement_bank":"",
                                  "settlement_bank_code":"",
                                  "priority":"",
                                  "ratio":"",
                                  "limit":""
                              }
                          ]
                      },
                      "finish":{
                          "omid":"",
                          "status":"1",
                          "statusDesc":"开通联营",
                          "ratio":"10.00",
                          "period":"1",
                          "union_operation_child":[
                              {
                                  "omid":"123123",
                                  "merchantname":"张三",
                                  "status":"状态值",
                                  "statusDesc":"状态描述",
                                  "settlement_bank":"",
                                  "settlement_bank_code":"",
                                  "priority":"",
                                  "ratio":"",
                                  "limit":""
                              }
                          ]
                      }
                  }
              }
            }
      this.table_start = res.data.info.start
      this.table_finish = res.data.info.finish
    }
  },
  mounted() {
    

  },
};
</script>

<style >
.wrapper {
  margin: 20px;
}


.operate_records {
  margin-bottom: 20px;
}

.deal_pagination {
  margin: 20px 0px 60px 0;
  text-align: right;
}

.compare_wrapper {
  margin-top: 20px;
}


.compare_wrapper .table_content tr {
  border: none;
}

.compare_wrapper .table_content td {
  border: 1px solid #ccc;
}
.table_content {
  width: 50%;
  margin-bottom: 20px;
}

.table_content tr {
  border: none;
}

.table_content td {
  border: 1px solid #ccc;
}
</style>