<template>
    <div>
        <div class="line1Wrap  fx" >
            <div class="line1WrapLeft fx" style="margin-right:60px">
                <img class="mr8" src="../../pages/cockpit/重要村落.png"/>
                <div class="line1text fx ">
                    <span >34个</span>
                    <span>重要村落</span>
                </div>
            </div>
            <div class="line1WrapLeft fx ">
                <img class="mr8" src="../../pages/cockpit/影响人员.png"/>
                <div class=" line1text fx ">
                    <span>451人</span>
                    <span>影响人员</span>
                </div>
            </div>
        </div>
        <div class="line1Wrap  fx" >
            <el-progress type="circle" :width="45" :height="45" style="margin-right: 10px;" :percentage="25"></el-progress>
            <div style="line-height:50px" class="fx"> 高风险区域: 
                <div class="littleTitle ml10 mr10">
                    <span>2</span> 
                    <span>个村庄 </span> 
                </div>
                <div class="littleTitle">
                    <span>32</span> 
                    <span>个人 </span> 
                </div>
            </div>
        </div>
        <div class="line1Wrap  fx">
            <el-progress type="circle" :width="45" :height="45" style="margin-right: 10px;" :percentage="50"></el-progress>
            <div style="line-height:50px;" class="fx">低风险区域: 
                <div class="littleTitle ml10 mr10">
                    <span>2</span> 
                    <span>个村庄 </span> 
                </div>
                <div class="littleTitle">
                    <span>32</span> 
                    <span>个人 </span> 
                </div>
             </div>
               
        </div>
    </div>
</template>
<script>
export default {
name:'left1'
}
</script>
<style scoped lang="less">
.fx{
    display: flex;
}
.mr8{
    margin-right: 8px;
}
.ml10{
    margin-left: 10px;
}
.mr10{
    margin-right: 10px;
}
// 每行外围
.line1Wrap {
// width: 100%;
// background: #f54;
    margin: 8px 20px 4px 20px;
    .line1WrapLeft {
        .line1text{
          display: flex;
          flex-direction: column
        }
        .line1text span:nth-child(1) {
            font-weight:bold;
            font-size: 16px;
            
        }
        
        
    }
    .littleTitle span:nth-child(1) {
            font-weight:bold;
            font-size: 18px;
            
        }
}
</style>