<template>
  <section>
    <el-card class="bodyLeft">
     <router-link :to="i.link" v-for="i in data" :key="i.link"> <el-button type="primary" > {{ i.name }} </el-button></router-link>
    </el-card>
    <el-card  class="bodyRight">
      <router-view></router-view>
    </el-card>
  </section>
</template>
<script >
export  default {
  name:'home',
  data(){
    return{
      data:[
        {
          link:'tf_time',
          name:'处理时间格式相关'
        },
        {
          link:'exlx2',
          name:'拖拽或点击上传excel 自动解析到表格展示 可重置'
        },
        {
          link:'loadAnalysisExcel',
          name:'点击上传按钮选择时间并可上传excel  解析版'
        },
        {
          link:'rsaEncryption',
          name:'Rsa 加密 解密  解析版'
        },
        {
          link:'dataScreen',
          name:'数据筛选 大屏支付方式'
        },
        {
          link:'a_map',
          name:'类似58同城筛选栏布局'
        },
        {
          link:'exlx',
          name:'excel上传解码'
        },
        {
          link:'testDatav',
          name:'datav轮播表'
        },
        {
          link:'tableScroll',
          name:'el-table 轮播表  不截取方法'
        },
        {
          link:'tableCeshi',
          name:'el-table 轮播表  截取方法'
        },
        {
          link:'collapseTitle',
          name:'折叠面板表头固定不参与滚动'
        },
        {
          link:'remFit',
          name:'rem适配测试'
        },
        {
          link:'Table',
          name:'table表单测试'
        },
        {
          link:'validateTable',
          name:'table表单循环校验'
        },
        {
          link:'projectIframe',
          name:'ifram缝合项目'
        },
        {
          link:'modelDialog',
          name:'el-dialog去除遮罩层'
        },
        {
          link:'regexpInput',
          name:'el-input绑定正则'
        },
        {
          link:'verifyElForm',
          name:' 数组嵌套对象,数组长度不定的表单校验'
        },
        {
          link:'portraitRetrieval',
          name:'人像检索'
        },
        {
          link:'chart',
          name:'echarts大数据测试'
        },
        {
          link:'echartsWater',
          name:'echarts 水位图 legend icon图标自定义 有层级'
        },
        {
          link:'createWindowBlank',
          name:' 点击按钮创建新页面并打开指定的url'
        },
        {
          link:'contentRoll',
          name:'内容横向滚动'
        },
        {
          link:'searchTabel',
          name:'点击搜索按钮检索'
        },
        {
          link:'echartVerticalSection',
          name:' echarts纵断面图'
        },
        {
          link:'tcPlayer',
          name:'videoJs 倍速播放'
        },
      ]
    }
  },
  methods:{
  }
}

</script>

<style scoped lang="less">

section{
  height: 100%;
  width: 100%;
  padding: 20px;
  .bodyLeft {
    overflow-y: auto;
    display: inline-block;
    width: 20%;
    height: 100%;
  }
  .bodyRight{
    display: inline-block;

    margin-left: 10px;
    width: calc(80% - 10px);
    height: 100%;
  }
}

/deep/  .el-button--primary{
  margin: 6px;
}
</style>
