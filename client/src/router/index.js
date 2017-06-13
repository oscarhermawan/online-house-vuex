import Vue from 'vue'
import Router from 'vue-router'
import MainContent from '@/components/MainContent'
import SellHouse from '@/components/SellHouse'


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
    }
  ]
})
