import Vue from 'vue'
import Router from 'vue-router'
import Register from '@/components/Register'
import Login from '@/components/Login'
import Games from '@/components/Games/Index'
import CreateGame from '@/components/CreateGame'
import ViewGame from '@/components/ViewGame/Index'
import EditGame from '@/components/EditGame'
import GamesShow from '@/components/GamesShow'
import ShowIntro from '@/components/ShowIntro'
import GameChoice from '@/components/GameChoice'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
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
    },
    {
      path: '/games/:gameId',
      name: 'game-view',
      component: ViewGame
    },
    {
      path: '/games/:gameId/edit',
      name: 'game-edit',
      component: EditGame
    },
    {
      path: '/show',
      name: 'games-show',
      component: GamesShow
    },
    {
      path: '/show/intro',
      name: 'intro',
      component: ShowIntro
    },
    {
      path: '/show/:gameId',
      name: 'game-choice',
      component: GameChoice
    },
    {
      path: '*',
      redirect: 'games'
    }
  ]
})
