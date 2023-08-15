<template>
  <div>
    <div> 1. 当前时间: {{ currentTime }} //时间戳</div>
    <br>
    <div> 2. 转为时分秒:(1217:) {{ 1217 | formateSeconds }} // <!--  // 将秒 处理为 时分秒格式 (例如 1217 -->00:20:17)-->
    </div>
    <br>
    <div> 3. 将节目时长处理为HH:MM:SS格式(1217:) {{ dataTime }}</div>
    <br>
    <div> 4. 将时间戳转为日期格式, 年-月-日 时:分:秒:毫秒  {{ timeNow }}</div>
  </div>
</template>
<script>
import yuTool from "@/utils/yuTool";

export default {
  filters: {
    // 秒--> 时分秒格式转化
    formateSeconds(secondTime) {
      return yuTool.formateSec(secondTime)
    }
  },
  data() {
    return {
      currentTime: '',    //当前时间
      dataTime: '',    //将节目时长处理为HH:MM:SS格式
      timeNow:'',      //将时间戳转为日期格式, 年-月-日 时:分:秒:毫秒
    }

  },
  mounted() {
    this.getCurrentTime();
    this.getDealTime();
    this.gettimeNow()
  },
  methods: {
    getCurrentTime: function () {
      this.currentTime = Date.now();
    },
    getDealTime() {
      this.dataTime = yuTool.dealMin(1217)
    },
    gettimeNow(){
      this.timeNow = yuTool.parseTime(new Date().getTime())
    }


  }

}

</script>

<style scoped>

</style>
