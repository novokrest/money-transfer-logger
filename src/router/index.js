import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import TransferList from '@/components/TransferList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/transfer',
      name: 'TransferList',
      component: TransferList
    },
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
