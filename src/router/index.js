import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Home from './Home';
import Find from './Find';
import Order from './Order';
import Mine from './Mine';

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {path:'/', redirect:'/Home'},
    Home,
    Find,
    Order,
    Mine
  ]
})
