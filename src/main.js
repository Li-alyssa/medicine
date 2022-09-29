import Vue from 'vue'
import App from './App.vue'
//引入elementui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

//引入VueRouter
import router from './router'

// 引入axios
import axios from 'axios';
// 挂载到vue原型链上
Vue.prototype.axios = axios;



//引入 Echarts
import * as echarts from "echarts"
Vue.prototype.$echarts = echarts

Vue.config.productionTip = false

Vue.use(ElementUI);

//统一接收api文件夹内的全部请求函数
import * as API from '@/api';

new Vue({
  router,
  //全局事件总线$bus配置
  beforeCreate() {
    Vue.prototype.$bus = this;
    //全局使用$API
    Vue.prototype.$API = API;
  },
  render: h => h(App),
}).$mount('#app')
