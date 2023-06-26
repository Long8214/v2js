import Vue from 'vue'
import App from './App.vue'
import Rsa from "./utils/rsa.js"
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import dataV from '@jiaminghi/data-view'

Vue.use(dataV)
Vue.use(ElementUI);
Vue.prototype.Rsa = Rsa // 将Rsa注册为公共方法,方便其他页面调用
Vue.config.productionTip = false

new Vue({

  render: h => h(App),
}).$mount('#app')
