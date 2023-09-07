<template>
    <div class="wrap1">
            <div class="title">
              <span>|</span>
              <span>{{ title }}</span>
            </div>
            <div class="main">
                <slot name="main"></slot>
            </div>
    </div>
</template>
<script>
export default {
    name:'slotChild',
    data() {
        return {

        }
    },
    props:{
        title:{
            default :''
        }
    }
}
</script>
<style lang="less" scoped>
  .wrap1 {
    width: 380px;
    min-height: 30%;
  }
  .title {
    border: 1px solid #d0daed;
  }
  .title span:nth-child(1) {
    color:#4a66f9;
    font-weight: 900;
    font-size: 18px;
}
  .title span:nth-child(2) {
      font-weight: 800;
      font-size: 18px;
    }
   
</style>