
<template>
  <div class="rsa-container">
    <!--  Rsa 加密 解密   X-->
    <!-- <rsaEncryption></rsaEncryption> -->

    <!-- 拖拽或点击上传excel 自动解析到表格展示 可重置 -->
    <!-- <exlx2></exlx2> -->

    <!-- 点击上传按钮选择时间并可上传excel  解析版 -->
    <!-- <loadAnalysisExcel></loadAnalysisExcel> -->

    <!-- 数据筛选 大屏支付方式 -->
    <!-- <dataScreen></dataScreen>  -->

    <!-- 类似58同城筛选栏布局 -->
    <!-- <a_map></a_map> -->

    <!-- excel上传解码 -->
    <!-- <exlx></exlx> -->

    <!-- datav轮播表 -->
    <!-- <testDatav></testDatav> -->

    <!-- el-table 轮播表  不截取方法 -->
    <!-- <tableScroll></tableScroll> -->

    <!-- el-table 轮播表  截取方法 -->
    <!-- <tableCeshi></tableCeshi> -->

    <!-- 折叠面板表头固定不参与滚动 -->
    <!-- <collapseTitle></collapseTitle> -->

    <!-- rem适配测试 -->
    <!-- <remFit></remFit> -->

    <!-- table表单测试 -->
    <!-- <Table></Table> -->

    <!-- table表单循环校验 -->
    <!-- <validateTable></validateTable> -->

    <!-- ifram缝合项目 -->
    <!-- <projectIframe></projectIframe> -->

    <!-- el-dialog去除遮罩层   X -->
    <!-- <modelDialog></modelDialog> -->

    <!-- el-input绑定正则 -->
    <!-- <regexpInput></regexpInput> -->

    <!-- 数组嵌套对象,数组长度不定的表单校验 -->
    <!-- <verifyElForm></verifyElForm> -->

    <!-- 人像检索 -->
    <!-- <portraitRetrieval></portraitRetrieval> -->

    <!-- echarts大数据测试 -->
    <!-- <chart></chart> -->

    <!-- echarts 水位图 legend icon图标自定义 有层级-->
    <!-- <echartsWater></echartsWater> -->
  </div>
</template>




<script>
import xd from "./pages/xd";
import collapseTitle from "./pages/collapseTitle.vue";
import exlx from "./pages/xlsx.vue";
import exlx2 from "./pages/xlsx2.vue";
import dataScreen from "./pages/dataScreen";
import tableCeshi from "./pages/tableCeshi.vue";
import testDatav from "./pages/testDatav.vue";
import tableScroll from "./pages/tableScroll.vue";
import Table from "./pages/Table.vue";
import chart from "./pages/chart.vue";
import validateTable from "./pages/validateTable.vue";
import projectIframe from "./pages/projectIframe.vue";
import modelDialog from "./pages/modelDialog.vue";
import regexpInput from "./pages/regexpInput.vue";
import loadAnalysisExcel from "./pages/loadAnalysisExcel.vue";
import rsaEncryption from "./pages/rsaEncryption.vue";
import verifyElForm from "./pages/verifyElForm.vue";
import portraitRetrieval from "./pages/portraitRetrieval.vue";
import echartsWater from "./pages/echartsWater.vue";
import remFit from "./pages/remFit.vue";


export default {
  components: {
    exlx,
    exlx2,
    dataScreen,
    tableCeshi,
    testDatav,
    tableScroll,
    collapseTitle,
    Table,
    chart,
    validateTable,
    projectIframe,
    modelDialog,
    regexpInput,
    loadAnalysisExcel,
    rsaEncryption,
    verifyElForm,
    portraitRetrieval,
    echartsWater,
    remFit,
    'a_map': xd,
  },
  data() {
    // 定义数据
    return {
    

    };
  },
  
};
</script>
<style>
*{
  margin: 0;
  padding: 0;
}
body,html{
  height: 100%;
}
html {
  font-size: 10px;
}
@media screen and (max-width: 767px) {
  html {
    font-size: 10px;
  }
}
@media screen and (min-width: 768px) and (max-width: 1023px) {
  html {
    font-size: 15px;
  }
}
@media screen and (min-width: 1024px) {
  html {
    font-size: 20px;
  }
}
.rsa-container{
  height: 100%;
}

</style>

