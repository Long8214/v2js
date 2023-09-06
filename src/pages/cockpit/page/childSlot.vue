<template>
    
<section :style="`min-height: ${boxHeight};`">
    <div class="title">
        <div class="titleBorder"></div>
        <div>{{title}}</div>
    </div>
    <div class="main" >
        <slot name="main"></slot>
    </div>
</section>

</template>

<script>
export default {
    name:'childSlot',
    props:{
        title:{
            default:''
        },
        boxHeight:{
            default:'20%'
        }
    }
}

</script>

<style scoped lang="less">
*{
    box-sizing: border-box;
}
section{
    background: rgba(255, 255, 255,.95);
    height: max-content;
}

.title{
    display: flex;
    background: #ECF2FB;
    border: 1px solid #CCE1FD;
    height: 34px;
    font-size: 15px;
    font-weight: 1000;
    text-indent: 8px;
    line-height: 34px;
}
.titleBorder{
    height: 100%;
    border-left: 5px solid #3668fb;
    border-top:5px solid transparent;
    border-bottom:5px solid transparent;
    border-right:5px solid transparent;

}

/** tab切换配色修改 **/
/deep/ .el-tabs__item.is-active,/deep/ .el-tabs__item:hover{
    color: rgb(84, 100, 226);
}
/deep/ .el-tabs__active-bar{
    background-color: rgb(84, 100, 226);
}
/deep/ .el-tabs__item{
    padding: 0 10px;
}


</style>