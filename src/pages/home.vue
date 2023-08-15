<template>
<div>
 <el-card class="body">

  <router-link to="/tf_time"> <el-button type="primary">处理时间格式相关</el-button></router-link>
  <router-link to="/exlx2"> <el-button type="primary">拖拽或点击上传excel 自动解析到表格展示 可重置</el-button></router-link>
  <router-link to="/loadAnalysisExcel"> <el-button type="primary">点击上传按钮选择时间并可上传excel  解析版</el-button></router-link>
  <router-link to="/rsaEncryption"> <el-button type="primary"> Rsa 加密 解密  解析版</el-button></router-link>
  <router-link to="/dataScreen"> <el-button type="primary">数据筛选 大屏支付方式 </el-button></router-link>
  <router-link to="/a_map "> <el-button type="primary">类似58同城筛选栏布局 </el-button></router-link>
  <router-link to="/exlx "> <el-button type="primary"> excel上传解码 </el-button></router-link>
  <router-link to="/testDatav "> <el-button type="primary"> datav轮播表 </el-button></router-link>
  <router-link to="/tableScroll "> <el-button type="primary"> el-table 轮播表  不截取方法 </el-button></router-link>
  <router-link to="/tableCeshi "> <el-button type="primary"> el-table 轮播表  截取方法 </el-button></router-link>
  <router-link to="/collapseTitle "> <el-button type="primary">折叠面板表头固定不参与滚动 </el-button></router-link>
  <router-link to="/remFit "> <el-button type="primary">rem适配测试 </el-button></router-link>
  <router-link to="/Table "> <el-button type="primary">table表单测试 </el-button></router-link>
  <router-link to="/validateTable "> <el-button type="primary">table表单循环校验 </el-button></router-link>
  <router-link to="/projectIframe "> <el-button type="primary">ifram缝合项目 </el-button></router-link>
  <router-link to="/modelDialog "> <el-button type="primary">el-dialog去除遮罩层 </el-button></router-link>
  <router-link to="/regexpInput "> <el-button type="primary">el-input绑定正则 </el-button></router-link>
  <router-link to="/verifyElForm "> <el-button type="primary"> 数组嵌套对象,数组长度不定的表单校验 </el-button></router-link>
  <router-link to="/portraitRetrieval "> <el-button type="primary"> 人像检索 </el-button></router-link>
  <router-link to="/chart "> <el-button type="primary"> echarts大数据测试 </el-button></router-link>
  <router-link to="/echartsWater "> <el-button type="primary"> echarts 水位图 legend icon图标自定义 有层级 </el-button></router-link>
  <router-link to="/createWindowBlank "> <el-button type="primary">点击按钮创建新页面并打开指定的url </el-button></router-link>
  <router-link to="/contentRoll "> <el-button type="primary">内容横向滚动 </el-button></router-link>
  <router-link to="/webWorker "> <el-button type="primary">webWorker </el-button></router-link>
  <router-link to="/searchTabel "> <el-button type="primary">点击搜索按钮检索 </el-button></router-link>
  <router-link to="/echartVerticalSection "> <el-button type="primary">echarts纵断面图 </el-button></router-link>
  <router-link to="/tcPlayer "> <el-button type="primary"> videoJs 倍速播放 </el-button></router-link>
 </el-card>

</div>
</template>
<script >
export  default {
  name:'home',
  data(){
    return{

    }
  },
  methods:{
  }
}

</script>

<style scoped>
.body {
  width: 80%;
  height: 80%;
}

/deep/  .el-button--primary{
  margin: 6px;
}
</style>
