<template>
<div>

    <el-button type="text" @click="centerDialogVisible = true"
    >点击打开 Dialog</el-button
   >
   <el-dialog title="dialog去掉遮罩层" :visible.sync="centerDialogVisible" width="30%" center  :modal="false" :append-to-body="true">
     <span>注意：modal需要用v-bind指令绑定</span>
     <template #footer>
       <span class="dialog-footer">
         <el-button type="primary" @click="centerDialogVisible = false"
           >确定</el-button>
       </span>
     </template>
   </el-dialog>
</div>


</template>

<script>
export default {
    name:'modelDialog',
    data(){
        return{
            centerDialogVisible:false
        }
    }

}

</script>

<style scoped lang="less">


</style>