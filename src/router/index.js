import Vue from 'vue'
import Router from 'vue-router'
import signin from '@/components/signin'
import signup from '@/components/signup'
import search from '@/components/search'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'signin',
      component: signin
    },
    {
      path:'/signup',
      name:'signup',
      component:signup
    },
    {
      path:'/search',
      name:'search',
      component:search
    }
  ]
})
