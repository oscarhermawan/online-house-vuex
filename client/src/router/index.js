import Vue from 'vue'
import Router from 'vue-router'
import MainContent from '@/components/MainContent'
import SellHouse from '@/components/SellHouse'
import UpdateHouse from '@/components/UpdateHouse'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HalamanUtama',
      component:MainContent
    },
    {
      path: '/sellhouse',
      name: 'SellHouse',
      component:SellHouse
    },
    {
      path:'/edit-house/:id',
      name: 'updateHouse',
      component:UpdateHouse
    }
  ]
})
