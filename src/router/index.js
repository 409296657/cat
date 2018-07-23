import Vue from 'vue'
import Router from 'vue-router'
import Community from '@/pages/Community/Community'
import Diary from '@/pages/Diary/Diary'
import MainPage from '@/pages/MainPage/MainPage'
import Release from '@/pages/Release/Release'
import User from '@/pages/User/User'
import AboutAdopt from '@/pages/User/AboutAdopt'
import AboutCat from '@/pages/User/AboutCat'
import Collection from '@/pages/User/Collection'
import Message from '@/pages/User/Message'
import Login from '@/pages/Login/Login'
import Password from '@/pages/Login/Password'
import Register from '@/pages/Login/Register'
import CommunityDetailed from '@/pages/Community/CommunityDetailed'
import DiaryDetailed from '@/pages/Diary/DiaryDetailed'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/community',
      name: 'Community',
      component: Community
    },{
      path: '/community/:id',
      component: CommunityDetailed
    },{
      path: '/diary',
      name: 'Diary',
      component: Diary
    },{
      path: '/diary/:id',
      component: DiaryDetailed
    },{
      path: '/',
      name: 'MainPage',
      component: MainPage
    },{
      path: '/release',
      name: 'Release',
      component: Release
    },{
      path: '/user/:id',
      name: 'User',
      component: User,
    },{
      path: '/user/:id/aboutadopt',
      name: 'AboutAdopt',
      component: AboutAdopt
    },{
      path: '/user/:id/aboutcat',
      name: 'AboutCat',
      component: AboutCat
    },{
      path: '/user/:id/collection',
      name: 'Collection',
      component: Collection
    },{
      path: '/user/:id/message',
      name: 'Message',
      component: Message
    },{
      path: '/login',
      name: 'Login',
      component: Login
    },{
      path: '/password',
      name: 'Password',
      component: Password
    },{
      path: '/register',
      name: 'Register',
      component: Register
    },
  ]
})
