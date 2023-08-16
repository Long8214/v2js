import Vue from 'vue';
import VueRouter from 'vue-router';

// 导入组件
const home = () => import('.././pages/home.vue' )
const tf_time = () => import('.././pages/tf_time.vue' )
const  exlx2 = () => import( '../pages/xlsx2.vue' )
const  loadAnalysisExcel = () => import( '../pages/loadAnalysisExcel.vue' )
const  rsaEncryption = () => import( '../pages/rsaEncryption.vue' )
const  dataScreen = () => import( '../pages/dataScreen.vue' )
const  a_map = () => import( '../pages/dataScreen.vue' )
const  exlx = () => import( '../pages/xlsx.vue' )
const  tableCeshi = () => import( '../pages/tableCeshi.vue' )
const  testDatav = () => import( '../pages/testDatav.vue' )
const  tableScroll = () => import( '../pages/tableScroll.vue' )
const  Table = () => import( '../pages/Table.vue' )
const  chart = () => import( '../pages/chart.vue' )
const  validateTable = () => import( '../pages/validateTable.vue' )
const  projectIframe = () => import( '../pages/projectIframe.vue' )
const  modelDialog = () => import( '../pages/modelDialog.vue' )
const  regexpInput = () => import( '../pages/regexpInput.vue' )
const  verifyElForm = () => import( '../pages/verifyElForm.vue' )
const  portraitRetrieval = () => import( '../pages/portraitRetrieval.vue' )
const  echartsWater = () => import( '../pages/echartsWater.vue' )
const  remFit = () => import( '../pages/remFit.vue' )
const  createWindowBlank = () => import( '../pages/createWindowBlank.vue' )
const  contentRoll = () => import( '../pages/contentRoll.vue' )
const  webWorker = () => import( '../pages/webWorker.vue' )
const  searchTabel = () => import( '../pages/searchTabel.vue' )
const  echartVerticalSection = () => import( '../pages/echartVerticalSection.vue' )
const  tcPlayer = () => import( '../pages/tcPlayer.vue' )
const  collapseTitle = () => import( '../pages/collapseTitle.vue' )

// 使用Vue Router插件
Vue.use(VueRouter);

// 创建路由实例
const router = new VueRouter({
    path:'history',
    routes: [
        { 
            path: '/',
            component: home ,
            redirect:'/tf_time',
            children:[
                { path: 'tf_time', component: tf_time, meta:{name:'处理时间格式相关'}},
                { path: 'exlx2', component: exlx2, meta:{name:'拖拽或点击上传excel 自动解析到表格展示 可重置'}},
                { path: 'loadAnalysisExcel', component: loadAnalysisExcel, meta:{name:'点击上传按钮选择时间并可上传excel  解析版'}},
                { path: 'rsaEncryption', component: rsaEncryption, meta:{name:'Rsa 加密 解密  解析版'}},
                { path: 'dataScreen', component: dataScreen, meta:{name:'数据筛选 大屏支付方式'}},
                { path: 'a_map', component: a_map, meta:{name:'类似58同城筛选栏布局'}},
                { path: 'exlx', component: exlx, meta:{name:'excel上传解码'}},
                { path: 'testDatav', component: testDatav, meta:{name:'datav轮播表'}},
                { path: 'tableScroll', component: tableScroll, meta:{name:'el-table 轮播表  不截取方法'}},
                { path: 'tableCeshi', component: tableCeshi, meta:{name:'el-table 轮播表  截取方法'}},
                { path: 'collapseTitle', component: tableCeshi, meta:{name:'折叠面板表头固定不参与滚动'}},
                { path: 'Table', component: Table, meta:{name:'table表单测试'}},
                { path: 'chart', component: chart, meta:{name:'echarts大数据测试'}},
                { path: 'validateTable', component: validateTable, meta:{name:'table表单循环校验'}},
                { path: 'projectIframe', component: projectIframe, meta:{name:'ifram缝合项目'}},
                { path: 'modelDialog', component: modelDialog, meta:{name:'el-dialog去除遮罩层'}},
                { path: 'regexpInput', component: regexpInput, meta:{name:'el-input绑定正则'}},
                { path: 'verifyElForm', component: verifyElForm, meta:{name:'数组嵌套对象,数组长度不定的表单校验'}},
                { path: 'portraitRetrieval', component: portraitRetrieval, meta:{name:'人像检索'}},
                { path: 'echartsWater', component: echartsWater, meta:{name:'echarts 水位图 legend icon图标自定义 有层级'}},
                { path: 'remFit', component: remFit, meta:{name:'rem适配测试'}},
                { path: 'createWindowBlank', component: createWindowBlank, meta:{name:'点击按钮创建新页面并打开指定的url'}},
                { path: 'contentRoll', component: contentRoll, meta:{name:'内容横向滚动'}},
                { path: 'searchTabel', component: searchTabel, meta:{name:'点击搜索按钮检索'}},
                { path: 'echartVerticalSection', component: echartVerticalSection, meta:{name:'echarts纵断面图'}},
                { path: 'tcPlayer', component: tcPlayer, meta:{name:'videoJs 倍速播放'}},
            ]
        },
    
    ],
});

export default router;
