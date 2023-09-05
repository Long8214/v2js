<template>
  <div>
    <!-- <div class="progressWrap">
    <el-progress type="circle" :percentage="100" status="success" ></el-progress>
    </div>
    <el-progress class="my-progress" type="circle" :percentage="100" status="success"></el-progress>
    <el-progress class="my-progress" class-name="small" type="circle" :percentage="100" status="success"></el-progress> -->
    <el-progress type="circle" :width="45" :height="45" :percentage="50"></el-progress>
    <!-- 控制环形进度条大小 -->
    <a-progress
        :trail-color="'#488'"
        :stroke-width="10"
        :percent="percent"
        :status="normal"
        :stroke-linecap="linecap"
        :format="format"
        :stroke-color="'#488'"
        :success-percent="50"
    />
    <a-progress
        :percent="50"
        :trail-color="'#00ff00'"
        :stroke-color="'#ff0000'"
        :success-percent="50"
    />
<!--    渐变过度效果-->
    <a-progress
        :percent="50"
        :stroke-color="{ '0%': 'red', '100%': 'black' }"
        :trail-color="'gray'"
    />
<!--    <a-progress-->
<!--        :percent="50"-->
<!--        :stroke-color="['red', 'yellow']"-->
<!--    />-->

<!--    按这版就可以  -->
      <div style="display: flex; width: 160px" >
        <a-progress
            style="width: 100px"
            :percent="40"
            :stroke-color="'red'"
            :trail-color="'#67c23a'"
        />
        <a-progress
            style="width: 100px"
            :percent="40"
            :stroke-color="'red'"
            :trail-color="'#67c23a'"
        />
    </div>

<!--    <a-progress-->
<!--        style="width: 200px"-->
<!--        :percent="40"-->
<!--        :stroke-color="'red'"-->
<!--        :trail-color="'#67c23a'"-->
<!--    />-->

    <a-progress
        :percent="50"
        :stroke-color=" '#c43ed2' "
        :trail-color="'#161616'"
        :success-percent="50"
    />


  </div>
</template>

<script>
export default {
  data() {
    return {
      percent: 40,
      // status: 'normal',
      linecap: 'square',
      format: () => `进度：${this.percent}%`,
    };
  },
};
</script>
<style scoped lang="less">
//给进度条添加背景颜色
/deep/ .ant-progress-inner{
  background: #ccc;
}
// /deep/ .el-progress .el-progress--circle .is-success .el-progress-circle{
//   width: 20px;
//   height: 20px;
// }
.progressWrap {
   width: 20px;
   height: 20px;
}
.el-progress__circle {
  color: aqua;
}
.my-progress {
  width: 20px;
  height: 20px;
}

.my-progress .el-progress__circle {
  width: 20px;
  height: 20px;
  line-height: 20px;
}
.small {
  width: 20px;
  height: 20px;
  line-height: 20px;
}

</style>
