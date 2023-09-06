<template>
<div class="section">
    <div class="top">
        <div class="lfet">
            <div class="imgBox" >
                <img width="50px" height="40px" src="../重要村落.png" >
            </div>
            <div>
                <div>34个</div>
                <div>影响村落</div>
            </div>
        </div>
        <div  class="right">
            <div class="imgBox" >
                <img width="50px" height="40px" src="../影响人员.png" >
            </div>  
            <div>
                <div>451人</div>
                <div>影响人员</div>
            </div>
        </div>

        
    </div>
    <div class="bottom">
        <div>
            <div ><div><el-progress  :width="45" :height="45"   type="circle"  :percentage="25"></el-progress></div></div>
            <div>高风险区域 : </div>
            <div><i>2</i>个村庄</div>
            <div><i>32</i>个人</div>
        </div>
        <div>
            <div><el-progress  type="circle" :width="45" :height="45" :percentage="75"></el-progress></div>
            <div>低风险区域 : </div>
            <div><i>2</i>个村庄</div>
            <div><i>32</i>个人</div>
        </div>
    </div>
</div>

</template>

<script>
export default {
    name:'defenseObj',
}

</script>

<style scoped lang="less">
*{
    box-sizing: border-box;
}
.section{
    font-size: 12px;
    .top{
        display: flex;
        justify-content: space-around;
        padding-right: 34px;
        .imgBox{
     
            width: 60px;
            height: 70px;
            display: flex;
            justify-content: center;
            align-items: center;
            img{
                transform: translateY(-3px);
            }
        }
        &>.lfet{
            display: flex;
            &>:nth-child(2){
                transform: translateY(12px);
            }
            &>:nth-child(2)>:nth-child(1){
                font-size: 16px;
                font-weight: 600;
               }
        }
        &>.right{
            display: flex;
            &>:nth-child(2){
                transform: translateY(12px);
            }
           &>:nth-child(2)>:nth-child(1){
                font-size: 16px;
                font-weight: 600;
               }
        }
    }
    .bottom{
        &>div{
            background: linear-gradient(270deg, rgba(228,232,241,0.08) 0%, rgba(155,189,255,0.47) 50%, rgba(222,229,244,0.1) 100%);
            display: flex;
            height: 45px;
            line-height: 45px;
            margin-bottom: 20px;
            &>div{
                margin-left: 26px;
            }
            
            &>:nth-child(2){
                &>:nth-child(1){
                    border: 1px solid;
                    border-image: linear-gradient(180deg, rgba(92, 126, 247, 0.55), rgba(47, 71, 236, 0)) 1 1;
                }
            }
            &>:nth-child(2){
                font-weight: 600;
                margin-left: 16px;

            }
            &>:nth-child(1){
                margin-left: 30px;
                font-weight: 600;
            }
      
        }
    }
   
}
/deep/.el-progress-circle{
    width: 30px;
    height: 30px;
}
i{
    font-style: normal;
    font-size: 17px;
    font-weight: 600;
}


</style>