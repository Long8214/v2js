<template>
<div>
    <!-- 正整数，没有小数位，不能为负数 -->
    <!-- <el-input  oninput="value=value.replace(/^(0+)|[^\d]+/g,'')" v-model.trim="elInput"></el-input> -->

    <!-- 正整数，没有小数位，不能为负数，有0的情况 -->
    <!-- <el-input  oninput="value=value.replace(/[^\d]+/g,'')" v-model.trim="elInput"></el-input> -->

    <!-- 数值型，两位小数，有正数、负数和0情况 -->
    <!-- <el-input  oninput="value = value.replace(/[^\-\d.]/g, '').replace(/\b(0+){2,}/g, '0').replace(/\-{2,}/g, '-').replace(/^\./g, '').replace(/\.{2,}/g, '.').replace('.', '$#$').replace(/\./g, '').replace('$#$', '.').match(/^\-?\d*(\.?\d{0,2})/g)[0] || '';" v-model.trim="elInput"></el-input> -->
    
    <!-- 正数，两位小数，有0情况，如果是20.00显示20，1.20显示1.2 -->
    <!-- <el-input  oninput="value=value.replace(/\D*(\d*)(\.?)(\d{0,2})\d*/,'$1$2$3').replace(/^0+(\d)/, '$1') .replace(/^\./, '0.').match(/^\d*(\.?\d{0,2})/g)[0] || '' " @blur="handleBlurWeight(elInput, $event)" v-model.trim="elInput"></el-input> -->
</div>
</template>

<script>
export default {
    name:'regexpInput',
    data(){
        return {
            elInput:''
        }
    },
    methods:{
        handleBlurWeight(item, event) {
            item = this.handleBlurDots(item, event);
        },
        handleBlurDots(item, event) {
            if (item === "") {
                event.target.value = '';
            }
            // 去除整数前的0和小数点后多余的0
            const reg1 = /0*([1-9]\d*|0\.\d+)/;
            const reg2 = /(?:\.0*|(\.\d+?)0+)$/;
            event.target.value = event.target.value
                .replace(reg1, "$1")
                .replace(reg2, "$1");
            return event.target.value;
        },
    }

}

</script>

<style scoped lang="less">


</style>