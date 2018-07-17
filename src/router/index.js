import Vue from 'vue'
import Router from 'vue-router'
import Community from '@/pages/Community/Community'
import Diary from '@/pages/Diary/Diary'
import MainPage from '@/pages/MainPage/MainPage'
import Release from '@/pages/Release/Release'
import User from '@/pages/User/User'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/community',
      name: 'Community',
      component: Community
    },
    {
      path: '/diary',
      name: 'Diary',
      component: Diary
    },
    {
      path: '/',
      name: 'MainPage',
      component: MainPage
    },
    {
      path: '/release',
      name: 'Release',
      component: Release
    },
    {
      path: '/user',
      name: 'User',
      component: User
    },
  ]
})
