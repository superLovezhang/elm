import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Home from './Home';
import Find from './Find';
import Order from './Order';
import Mine from './Mine';
import Shop from './shop';

export default new Router({
  mode: 'history',//路由模式
  base: process.env.BASE_URL,//会在所有路由地址前面添加base后面的内容
  routes: [
    {path:'/', redirect:'/Home'},
    Home,
    Find,
    Order,
    Mine,
    Shop
  ]
})
