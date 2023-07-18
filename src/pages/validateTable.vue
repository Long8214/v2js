<template>
    <div id="comanage" class="wrap">
        <h3>商户进件</h3>
        <el-card class="wrapper">
            <table cellspacing="0" border="1px solid #ccc" v-for="(i,IIndex) in page_info" :key="IIndex" class="table_content">
                <!-- <el-form :model="i" :rules="rules"> -->
                    <tr>
                        <td colspan="2"> {{i.channel_name}} 联营状态:</td>
                        <!-- <td colspan="2"> {{i.channel_name == "码钱支付"?'码钱':'联动'}}联营状态:</td> -->
                        <td colspan="5">
                            <el-select prop="status" placeholder="请选择" v-model="i.status">
                                <!-- <el-option label="请选择" value="0"></el-option> -->
                                <el-option label="开通联营" value="1"></el-option>
                                <el-option label="关闭" value="2"></el-option>
                            </el-select>
                        </td>
                        <td>
                            <span>{{i.remark}}</span>
                        </td>
        
                        <td>
                            <el-button @click=search_state_con(IIndex)>查询</el-button>
                        </td>
                    </tr>
                    <tr>
                        <td>联营比例 :</td>
                        <td>
                            <el-input prop="ratio" v-model="i.ratio" ></el-input>
                            </td>
                        <td>周期 :</td>
                        <td colspan="5">
                            <el-input prop="period" v-model="i.period" ></el-input>
                        </td>
                    </tr>
                    <!-- 			子商户信息 -->
                    <tbody class="table_group" v-for="(k,KIndex) in i.union_operation_child" :key="KIndex">
                    <tr>
                        <td>联营商号 :</td>
                        <td>
                            <el-input :prop="k.period" v-model="k.omid" @input="handelChange(IIndex,KIndex,$event)"></el-input>
                        </td>
                        <td>商户名称 :</td>
                        <td colspan="2">
                            <el-input v-model="k.merchantname"></el-input>
                        </td>
                        <td>联营状态 :</td>
                        <td colspan="2">
                            <el-select v-model="k.status">
                                <el-option label="开通联营" value="1"></el-option>
                                <el-option label="关闭" value="2"></el-option>
                            </el-select>
                        </td>
                        <td v-show="KIndex == i.union_operation_child.length-1">
                            <el-button @click="add_table(IIndex,KIndex)">添加
                                <div class="el-icon-plus"></div>
                            </el-button>
                        </td>
                    </tr>
                    <tr>
                        <td>结算银行 :</td>
                        <td colspan="2">
                            <el-input v-model="k.settlement_bank"></el-input>
                        </td>
        
                        <td>结算卡号</td>
                        <td colspan="4">
                            <el-input v-model="k.settlement_bank_code"></el-input>
                        </td>
                        <td v-show="KIndex != 0">
                            <el-button @click="delete_table(IIndex,KIndex)">删除
                                <div class="el-icon-delete-solid"></div>
                            </el-button>
                        </td>
                    </tr>
                    <tr>
                        <td>联营比例 :</td>
                        <td>
                            <el-input v-model="k.ratio"></el-input>
                        </td>
                        <td>优先级 :</td>
                        <td colspan="5">
                            <el-select v-model="k.priority">
                                <el-option label="0" value="0"></el-option>
                                <el-option label="1" value="1"></el-option>
                                <el-option label="2" value="1"></el-option>
                                <el-option label="3" value="1"></el-option>
                                <el-option label="4" value="1"></el-option>
                                <el-option label="5" value="1"></el-option>
                            </el-select>
                        </td>
                    </tr>
                    <tr>
                        <td>限额 :</td>
                        <td colspan="7">
                            <el-input v-model="k.limit"></el-input>
                        </td>
                    </tr>
                    </tbody>
                <!-- </el-form> -->
            </table>
    
            <div>操作记录：
                <el-link>查看</el-link>
            </div>
            <div class="button_group">
                <el-button @click="submit" type="primary">保存</el-button>
                <el-button @click="cancel">取消</el-button>
            </div>
        </el-card>
    </div>
</template>

<script>
export default {
		data(){
            return {
                page_info:[
                    {
                        "omid": "2306021949293KDU",
                        "status": "2",
                        "ratio": "10.00",
                        "statusDesc": "已关闭",
                        "period": "0",
                        "remark": 111,
                        "union_operation_child": [
                            {
                                "omid": "2306021949293KDU",
                                "merchantname": "北京中富智汇科技",
                                "status": "2",
                                "statusDesc": "已关闭",
                                "settlement_bank": "",
                                "settlement_bank_code": "103397051331",
                                "priority": "0",
                                "ratio": "10.00",
                                "limit": "9999.99"
                            },
                            {
                                "omid": "2306021949293KDU",
                                "merchantname": "中富智汇科技2",
                                "status": "2",
                                "statusDesc": "已关闭",
                                "settlement_bank": "",
                                "settlement_bank_code": "103397051331",
                                "priority": "0",
                                "ratio": "10.00",
                                "limit": "1000.00"
                            }
                        ],
                        "channel_name": "码钱支付"
                    },
                    {
                        "omid": "2306021949293KDU",
                        "channel_source": "LianDongHSPay",
                        "channel_name": "联动惠商支付",
                        "status": '2',
                        "statusDesc": "已关闭",
                        "remark": 123,
                        "union_operation_child": [
                            {
                                "omid": "",
                                "merchantname": "",
                                "status": '2',
                                "statusDesc": "已关闭",
                                "settlement_bank": "",
                                "settlement_bank_code": "",
                                "priority": "0",
                                "ratio": "0",
                                "limit": "0"
                            }
                        ]
                    }
                ],
            }
        },

		methods: {
			// 保存
			submit() {
                let tHeader = [] //大表校验状态
                let tBody = [] //小表校验状态
                this.page_info.forEach(item=>{
                    if(item.status == 1){
                        // 循环判断大表格的表头
                        let hSign = false
                        for(let i in item)  {
                            if(item[i] == '' || item[i] == null || item[i] == undefined ){
                                if(hSign) break
                                tHeader.push(`${item.channel_name}表头信息`)  
                                hSign = true
                            }
                        }//大表的名称
                        // 判读小表
                        if(item.union_operation_child.length > 0){
                            item.union_operation_child.forEach((item1,index)=>{

                                if(item1.status == 1){
                                    let sign = false
                                    for(let i in item1) {
                                        if(item1[i] == '' || item1[i] == null || item1[i] == undefined ) {
                                            if(sign) break
                                            tBody.push(item.channel_name + '中第' + (index+1 ) + '个表单') 
                                            sign = true
                                        }
                                       
                                    }//push小表的位置
                                }
                            })
                        }
                    }
                })
                if(tBody.length>0 || tHeader.length>0) {
                    alert( `请完善\n${   tHeader.length > 0 ?  ( tBody.length>0 ? ((tHeader.join('\n') + '\n') + tBody.join('\n') ) : tHeader.join('\n') ) : tBody.join('\n') }`)
                    return
                }
			},
			// 取消 
			cancel() {

			},
			// 商户号change
			handelChange(IIndex, KIndex, event) {

			},
			// 添加回调
			add_table(i, k) {

			},
			// 删除回调
			delete_table(i, k) {
			},

			// 查询回调
			search_state_con(v){
			},

			// 	获取数据
			getData() {},
			getBankInfo(a) {
	
			},

			// 商户联营开通权限查询接口(红字)
			getConfig(v) {
			
			},

			// 商户分账配置保存接口
			getSava() {
			
			},
		},
	}
</script>
<style>
.wrapper {
    margin: 20px;
}

.table_content {
    width: 70%;
    margin-bottom: 20px;
}

.table_content tr {
    border: none;
}

.table_content td {
    border: 1px solid #ccc;
}

.el-input__inner {
    border: none;
}

.button_group {
    margin-top: 20px;
}

</style>
