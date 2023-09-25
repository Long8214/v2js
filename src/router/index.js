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
const  map = () => import( '../pages/map.vue' )
const  pixiJs = () => import( '../pages/pixiJs.vue' )
const  dealPhoneNum = () => import('../pages/dealPhoneNum.vue')
const  gradualChangeProgressBar = () => import('../pages/gradualChangeProgressBar.vue')
const  tableCompare = () => import('../pages/tableCompare.vue')
const  many_tag = () => import('../pages/many_tag.vue')
const  aProgess = () => import('../pages/aProgess.vue')
const  baojingAudio = () => import('../pages/baojingAudio.vue')
const  mulitiplayUpload = () => import('../pages/mulitiplayUpload.vue')
const  chooseUpload = () => import('../pages/chooseUpload.vue')
const  exerciseLongTest = () => import('../pages/exerciseLongTest.vue')
const  cockpit = () => import('../pages/cockpit/cockpit.vue')
const  testJuxing = () => import('../pages/testJuxing.vue')
const  moreJuxingkuang = () => import('../pages/moreJuxingkuang.vue')
const  imgAmplificationRedFrame = () => import('../pages/imgAmplificationRedFrame.vue')
const  collTable = () => import('../pages/collTable.vue')
const  NotFound = () => import('../pages/NotFound.vue')
const  cengjiTable = () => import('../pages/cengjiTable.vue')

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
                { path: 'pixiJs', component: pixiJs, meta:{name:'pixiJS练习'}},
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
                { path: 'collapseTitle', component: collapseTitle, meta:{name:'折叠面板表头固定不参与滚动'}},
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
                { path: 'map', component: map, meta:{name:'map'}},
                { path: 'dealPhoneNum', component: dealPhoneNum, meta:{name:'手机号中间4位脱敏'}},
                { path: 'gradualChangeProgressBar', component: gradualChangeProgressBar, meta:{name:'音乐播放和摇晃的小铃铛动画'}},
                { path: 'tableCompare', component: tableCompare, meta:{name:'单击右侧表格往左边插入'}},
                { path: 'many_tag', component: many_tag, meta:{name:'循环多个tag并点击跳转+ 下拉框多选 '}},
                { path: 'aProgess', component: aProgess, meta:{name:'antd - progess '}},
                { path: 'baojingAudio', component: baojingAudio, meta:{name:'声音报警 '}},
                { path: 'mulitiplayUpload', component: mulitiplayUpload, meta:{name:'批量上传'}},
                { path: 'chooseUpload', component: chooseUpload, meta:{name:'url/文件上传'}},
                { path: 'exerciseLongTest', component: exerciseLongTest, meta:{name:'龙项目静态练习'}},
                { path: 'cockpit', component: cockpit, meta:{name:'驾驶舱页面'}},
                { path: 'testJuxing', component: testJuxing, meta:{name:'测试在图片上绘制矩形'}},
                { path: 'moreJuxingkuang', component: moreJuxingkuang, meta:{name:'Vue中在svg上动态画出多个矩形（框选效果，获取坐标）'}},
                { path: 'imgAmplificationRedFrame', component: imgAmplificationRedFrame, meta:{name:'点击图片放大并根据坐标显示红框'}},
                { path: 'collTable', component: collTable, meta:{name:'合并表格单元格'}},
                { path: 'cengjiTable', component: cengjiTable, meta:{name:'层级下拉表格'}},


            ]
        },

        // 404
        {
            path: '/:catchAll(.*)',
            name: 'not-found',
            component: NotFound,
          }
    
    ],
});

export default router;
