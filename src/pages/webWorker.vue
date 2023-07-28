<template>
    <div>

    </div>

</template>

<script>
export default {
    name:'webWorker',
    mounted(){
        // 创建worker实例
        // var myWebWorker = new Worker('/src/worker/myWebWorker.js');
        // console.log(require('))
        // 向子线程发送消息
        myWebWorker.postMessage(50000)

        console.log(myWebWorker)

    }

}

</script>

<style scoped lang="less">


</style>