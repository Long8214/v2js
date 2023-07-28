<template>
<div>
    <el-button @click="createWindowBlank">点击创建新页面并打开百度</el-button>
    <a :href="wordDocPath" download>下载Word文档</a>
</div>

</template>

<script>
// import doc from '../assets/system_.doc'
// let doc = require('../assets/system_.doc')
export default {
    name:'createWindowBlank',
    data(){
        return {

        }
    },
    methods:{
        createWindowBlank(){
                // 创建一个Blob URL
            // const url = URL.createObjectURL('www.baidu.com');
            // console.log(url)
            // 使用window.open()打开新窗口
            // const newWindow = window.open('www.baidu.com', '_blank');
            
            // // 释放Blob URL资源
            // URL.revokeObjectURL(url);
            const baiduUrl = 'https://www.baidu.com';
            // window.open(doc, '_blank');
        }
    }

}

</script>

<style scoped lang="less">


</style>