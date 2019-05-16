export default {
   path:'/Home', component:()=>import('@/views/Home'),
   children:[
      {path: '/Home',redirect:'/Home/nextNear' },
      {path: 'nextNear', component:()=>import('@/components/nextNear')},
      {path: 'alliance', component:()=>import('@/components/alliance')}
   ]
}