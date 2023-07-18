<template>
<div class="projectIframBox">   
    <div>left</div>
    <div>
        <iframe src="http://127.0.0.1:8082/#/reservePlan" class="iframe"></iframe>
    </div>
</div>
</template>

<script>
export default {
    name:'projectIframe'

}

</script>

<style scoped >
.projectIframBox{
    display: flex;
    height: 100%;
    
}
.projectIframBox>div{
    width: 50%;
    height: 100%;
}
.iframe{
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    border: none;
    display: block;
}
</style>