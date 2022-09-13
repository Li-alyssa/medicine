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


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
