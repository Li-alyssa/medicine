import Vue from 'vue'
import App from './App.vue'
//引入elementui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

//引入VueRouter
import router from './router'

Vue.config.productionTip = false

Vue.use(ElementUI);


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
