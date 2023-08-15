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

// 使用Vue Router插件
Vue.use(VueRouter);

// 创建路由实例
const router = new VueRouter({
    path:'histray',
    routes: [
        { 
            path: '/',
            component: home ,
            redirect:'/tf_time',
            children:[
                { path: 'tf_time', component: tf_time },
                { path: 'exlx2', component: exlx2},
                { path: 'loadAnalysisExcel', component: loadAnalysisExcel},
                { path: 'rsaEncryption', component: rsaEncryption},
                { path: 'dataScreen', component: dataScreen},
                { path: 'a_map', component: a_map},
                { path: 'exlx', component: exlx},
                { path: 'tableCeshi', component: tableCeshi},
                { path: 'testDatav', component: testDatav},
                { path: 'tableScroll', component: tableScroll},
                { path: 'Table', component: Table},
                { path: 'chart', component: chart},
                { path: 'validateTable', component: validateTable},
                { path: 'projectIframe', component: projectIframe},
                { path: 'modelDialog', component: modelDialog},
                { path: 'regexpInput', component: regexpInput},
                { path: 'verifyElForm', component: verifyElForm},
                { path: 'portraitRetrieval', component: portraitRetrieval},
                { path: 'echartsWater', component: echartsWater},
                { path: 'remFit', component: remFit},
                { path: 'createWindowBlank', component: createWindowBlank},
                { path: 'contentRoll', component: contentRoll},
                { path: 'webWorker', component: webWorker},
                { path: 'searchTabel', component: searchTabel},
                { path: 'echartVerticalSection', component: echartVerticalSection},
                { path: 'tcPlayer', component: tcPlayer},
            ]
        },
    
    ],
});

export default router;
