<template>
<div>
    <input
      type="checkbox"
      :id="item.goodsId"
      :name="item.name"
      v-model="checkedItem[0]"
      :value="item.goodsId"
     />
    <input
      type="checkbox"
      :id="item.goodsId"
      :name="item.name"
      v-model="checkedItem[1]"
      :value="item.goodsId"
     />
    <input
      type="checkbox"
      :id="item.goodsId"
      :name="item.name"
      v-model="checkedItem[2]"
      :value="item.goodsId"
     />
     <div>{{totalPriceAll}}</div>
     <div>{{quantityAll}}</div>
</div>
</template>

<script>
export default {
    name:'',
    data(){
        return{
            item:{
                goodsId:'123',
                name:'商品',
            },
            checkedItem:[false,false,true],
            totalPriceAll:'',
            quantityAll:'',
            arr:[5,6,3,1,3,4]
        }
    },
    watch:{
        checkedItem:{
            deep:true,
            handler(n,o){
                // 金额累计
                this.totalPriceAll = this.goodsList.totalPrice.reduce((pre,cur,index)=>{
                    if(n[index]){
                        return pre + cur.money
                    }else{
                        return pre
                    }
                },0)
                // 选中商品数量累计
                this.quantityAll = this.goodsList.quantity.reduce((pre,cur,index)=>{
                    if(n[index]){
                        return pre ++
                    }else{
                        return pre
                    }
                },0)
            }
        }
    }

}

</script>

<style scoped >


</style>