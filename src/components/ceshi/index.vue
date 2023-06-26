<template></template>

<script>
export default {
  name: "ceshi",
  data() {
    return {
    };
  },
  mounted() {
    this.init( [
        {
          createBy: "admin",
          createTime: "2023-06-20 02:37:07",
          updateBy: null,
          updateTime: null,
          remark: null,
          dictCode: 103,
          dictSort: 0,
          dictLabel: "银联",
          dictValue: "3",
          dictType: "stm_payment_type",
          cssClass: null,
          listClass: "default",
          isDefault: "N",
          status: "0",
          default: false,
        },
        {
          createBy: "admin",
          createTime: "2023-06-20 02:37:18",
          updateBy: null,
          updateTime: null,
          remark: null,
          dictCode: 104,
          dictSort: 0,
          dictLabel: "小程序支付",
          dictValue: "4",
          dictType: "stm_payment_type",
          cssClass: null,
          listClass: "default",
          isDefault: "N",
          status: "0",
          default: false,
        },
        {
          createBy: "admin",
          createTime: "2023-06-20 02:37:28",
          updateBy: null,
          updateTime: null,
          remark: null,
          dictCode: 105,
          dictSort: 0,
          dictLabel: "APP支付",
          dictValue: "5",
          dictType: "stm_payment_type",
          cssClass: null,
          listClass: "default",
          isDefault: "N",
          status: "0",
          default: false,
        },
        {
          createBy: "admin",
          createTime: "2023-06-20 02:37:41",
          updateBy: null,
          updateTime: null,
          remark: null,
          dictCode: 106,
          dictSort: 0,
          dictLabel: "云闪付小程序支付",
          dictValue: "6",
          dictType: "stm_payment_type",
          cssClass: null,
          listClass: "default",
          isDefault: "N",
          status: "0",
          default: false,
        },
        {
          createBy: "admin",
          createTime: "2023-06-20 02:37:55",
          updateBy: null,
          updateTime: null,
          remark: null,
          dictCode: 107,
          dictSort: 0,
          dictLabel: "股本余额支付",
          dictValue: "7",
          dictType: "stm_payment_type",
          cssClass: null,
          listClass: "default",
          isDefault: "N",
          status: "0",
          default: false,
        },
        {
          createBy: "admin",
          createTime: "2023-06-20 02:38:31",
          updateBy: null,
          updateTime: null,
          remark: null,
          dictCode: 108,
          dictSort: 0,
          dictLabel: "刷卡",
          dictValue: "99",
          dictType: "stm_payment_type",
          cssClass: null,
          listClass: "default",
          isDefault: "N",
          status: "0",
          default: false,
        },
        {
          createBy: "admin",
          createTime: "2023-04-23 14:05:43",
          updateBy: null,
          updateTime: null,
          remark: null,
          dictCode: 30002,
          dictSort: 1,
          dictLabel: "支付宝",
          dictValue: "1",
          dictType: "stm_payment_type",
          cssClass: null,
          listClass: "default",
          isDefault: "N",
          status: "0",
          default: false,
        },
        {
          createBy: "admin",
          createTime: "2023-04-23 14:05:51",
          updateBy: null,
          updateTime: null,
          remark: null,
          dictCode: 30003,
          dictSort: 2,
          dictLabel: "微信",
          dictValue: "2",
          dictType: "stm_payment_type",
          cssClass: null,
          listClass: "default",
          isDefault: "N",
          status: "0",
          default: false,
        },
      ]);
  },
  methods: {
    init(info) {
      console.log('')
      let arr = info.map(item=>item.dictLabel)
      let arr1 = info.map(item=>item.dictValue)
      console.log(arr,arr1)
      let tMoeny = { "2": "150.00",'3':'1123'}
      let tPen = { "2": "2" ,'3':'1'}
      let yMoeny = {  "1": "5424.00",  "2": "88872.63",'6':'321'}
      let yPen = {"1": "26","2": "437",'6':'1'}
    //   今日数据
      let TData = []
    //   昨日数据
      let YData = []
    //   label
      let labe = []
      let xLabel = []


      for(let i in tMoeny){
        labe[i] = i
        TData[i] = {
            pen:tPen[i],
            moeny:tMoeny[i]
        }
      }

      for(let i in yMoeny){
        labe[i] = i
        YData[i] = {
            pen:yPen[i],
            moeny:yMoeny[i]
        }
      }
      
      labe.forEach(item=>{
        info.forEach(item1=>{
            if(  item1.dictValue == item)  {
                xLabel[item] = item1.dictLabel
            }
        })
      })

      // Array.from(labe).forEach(item=>{
      //   console.log(item,'item')
      //   if(item == undefined){
      //       xLabel.splice(item,1)
      //       TData.splice(item,1)
      //       YData.splice(item,1)
      //   }
      // })
      TData.length = xLabel.length
      YData.length = xLabel.length
      xLabel = Array.from(xLabel).filter((item,index)=> labe[index])
      TData = Array.from(TData).filter((item,index)=> labe[index])
      YData = Array.from(YData).filter((item,index)=> labe[index])
   
      TData = Array.from(TData).map(item=>{
        if(!item){
            return {
                pen:0,
                moeny:0
            }
        }else{
            return item
        }
      })
      YData = Array.from(YData).map(item=>{
        if(!item){
            return {
                pen:0,
                moeny:0
            }
        }else{
            return item
        }
      })

      let newX = []
      let newTData = []
      let newYData = []
      arr.forEach((item,index)=>{
        let inde = xLabel.indexOf(item)
        if(inde != -1){
          newX[index] = xLabel[inde]
          newTData[index] = TData[inde]
          newYData[index] = YData[inde]
        }
      })
      newX = newX.filter(item=>item).reverse()
      newTData = newTData.filter(item=>item).reverse()
      newYData = newYData.filter(item=>item).reverse()
      console.log(xLabel,TData,YData)
      console.log(newX,newTData,newYData)

    },
  },
};
</script>

<style scoped lang="less">
</style>