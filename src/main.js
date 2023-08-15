import Vue from 'vue'
import App from './App.vue'
import Rsa from "./utils/rsa.js"
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import dataV from '@jiaminghi/data-view'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import 'video.js/dist/video-js.css'  //videojs样式



Vue.use(ElementUI);
Vue.use(Antd);
Vue.use(dataV)
Vue.prototype.Rsa = Rsa // 将Rsa注册为公共方法,方便其他页面调用
Vue.config.productionTip = false

new Vue({

  render: h => h(App),
}).$mount('#app')
