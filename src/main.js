import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

Vue.prototype.axios = axios;

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);


Vue.config.productionTip = false
Vue.filter('imgFormat',function(value){
  var now = value;
  var test = /png$/;
  var haha = "https://fuss10.elemecdn.com/nima.jpeg?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/"
  var biu =  "https://fuss10.elemecdn.com/nima.png?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/"
  if(test.test(now)){
    return biu.replace('nima',now)
  }else if(now == null){
    return ;
  }
   return haha.replace('nima',now)
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
