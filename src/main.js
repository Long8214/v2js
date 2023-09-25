import Vue from 'vue'
import App from './App.vue'
import Rsa from "./utils/rsa.js"
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import dataV from '@jiaminghi/data-view'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import 'video.js/dist/video-js.css'  //videojs样式
import router from './router';
import * as echarts from 'echarts'
// import VueI18n from 'vue-i18n' //国际化



 
// const i18n = new VueI18n({
//     locale: 'zh-CN',    // 语言标识
//     // this.$i18n.locale // 通过切换locale的值来实现语言切换
//     messages: {
//       // 'zh-CN': require('./common/lang/zh'),   // 中文语言包
//       // 'en-US': require('./common/lang/en')    // 英文语言包
//     }
// })




Vue.use(ElementUI);
Vue.use(Antd);
Vue.use(dataV)
// Vue.use(VueI18n) // 通过插件的形式挂载
Vue.prototype.Rsa = Rsa // 将Rsa注册为公共方法,方便其他页面调用
Vue.config.productionTip = false
Vue.prototype.$echarts = echarts  //全局$echarts

new Vue({
  router,
  // i18n,
  render: h => h(App),
}).$mount('#app')
