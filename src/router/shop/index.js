export default{
   path:'/shop', component:()=> import('@/views/shopList'),
   children:[
       {path:'/', redirect:'goods' },
       {path:'goods', component:()=> import('@/components/shopGoods')},
       {path:'rate', component:()=> import('@/components/shopRate')},
       {path:'shopItems', component:()=> import('@/components/shopItem')},

   ]   
}