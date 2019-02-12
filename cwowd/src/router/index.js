import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Register from '@/components/Register'
import Login from '@/components/Login'
import Games from '@/components/Games'
import CreateGame from '@/components/CreateGame'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/root',
      name: 'root',
      component: HelloWorld
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/games',
      name: 'games',
      component: Games
    },
    {
      path: '/games/create',
      name: 'game-create',
      component: CreateGame
    }
  ]
})
